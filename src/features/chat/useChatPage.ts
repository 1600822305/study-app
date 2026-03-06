// ============================================================
// useChatPage — 主聊天页面状态管理 Hook
// 管理助手选择、话题切换、消息列表、流式发送
// ============================================================

import { useState, useCallback, useRef, useEffect } from 'react';
import { storage } from '@/lib/storage';
import type { AssistantRecord, TopicRecord, ChatMessageRecord } from '@/lib/storage';
import { streamChat, providerRegistry } from '@/lib/ai';
import type { ChatMessage } from '@/lib/ai';

export interface UIMessage extends ChatMessageRecord {
  streaming?: boolean;
  error?: string;
}

export interface SelectedModel {
  providerId: string;
  providerName: string;
  modelId: string;
  modelName: string;
}

interface UseChatPageReturn {
  // 助手
  assistants: AssistantRecord[];
  currentAssistant: AssistantRecord | null;
  setCurrentAssistant: (id: string) => Promise<void>;
  // 话题
  topics: TopicRecord[];
  currentTopic: TopicRecord | null;
  createTopic: () => Promise<void>;
  deleteTopic: (id: string) => Promise<void>;
  renameTopic: (id: string, name: string) => Promise<void>;
  setCurrentTopic: (id: string) => void;
  // 消息
  messages: UIMessage[];
  isLoading: boolean;
  error: string | null;
  send: (content: string) => Promise<void>;
  stop: () => void;
  clearMessages: () => Promise<void>;
  // 模型
  selectedModel: SelectedModel | null;
  setSelectedModel: (model: SelectedModel) => void;
  // 状态
  isReady: boolean;
}

export function useChatPage(): UseChatPageReturn {
  const [assistants, setAssistants] = useState<AssistantRecord[]>([]);
  const [currentAssistantId, setCurrentAssistantId] = useState<string>('');
  const [topics, setTopics] = useState<TopicRecord[]>([]);
  const [currentTopicId, setCurrentTopicIdState] = useState<string>('');
  const [messages, setMessages] = useState<UIMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [selectedModel, setSelectedModelState] = useState<SelectedModel | null>(null);

  // 持久化包装：选择模型时同时保存到 IndexedDB
  const setSelectedModel = useCallback((model: SelectedModel) => {
    setSelectedModelState(model);
    storage.settings.setValue('selectedModel', JSON.stringify(model));
  }, []);
  const abortRef = useRef<AbortController | null>(null);

  const currentAssistant = assistants.find((a) => a.id === currentAssistantId) || null;
  const currentTopic = topics.find((t) => t.id === currentTopicId) || null;

  // 初始化：加载助手列表
  useEffect(() => {
    (async () => {
      await storage.assistants.initDefaults();
      const all = await storage.assistants.getAll();
      setAssistants(all);
      if (all.length > 0) {
        const savedId = await storage.settings.getValue('currentAssistantId');
        const targetId = savedId && all.some((a) => a.id === savedId) ? savedId : all[0].id;
        setCurrentAssistantId(targetId);
      }
      // 恢复上次选择的模型
      const savedModel = await storage.settings.getValue('selectedModel');
      if (savedModel) {
        try { setSelectedModelState(JSON.parse(savedModel)); } catch { /* ignore */ }
      }
      setIsReady(true);
    })();
  }, []);

  // 切换助手时加载话题
  useEffect(() => {
    if (!currentAssistantId) return;
    (async () => {
      const topicList = await storage.topics.getByAssistantId(currentAssistantId);
      setTopics(topicList);
      // 如果没有话题，自动创建一个
      if (topicList.length === 0) {
        const newTopic = await storage.topics.create(currentAssistantId);
        await storage.assistants.addTopicId(currentAssistantId, newTopic.id);
        setTopics([newTopic]);
        setCurrentTopicIdState(newTopic.id);
      } else {
        setCurrentTopicIdState(topicList[0].id);
      }
    })();
  }, [currentAssistantId]);

  // 切换话题时加载消息
  useEffect(() => {
    if (!currentTopicId) { setMessages([]); return; }
    (async () => {
      const msgs = await storage.chatMessages.getByTopicId(currentTopicId);
      setMessages(msgs.map((m) => ({ ...m })));
    })();
  }, [currentTopicId]);

  // 选择助手
  const setCurrentAssistant = useCallback(async (id: string) => {
    setCurrentAssistantId(id);
    await storage.settings.setValue('currentAssistantId', id);
  }, []);

  // 设置当前话题
  const setCurrentTopic = useCallback((id: string) => {
    setCurrentTopicIdState(id);
  }, []);

  // 创建话题
  const createTopic = useCallback(async () => {
    if (!currentAssistantId) return;
    const newTopic = await storage.topics.create(currentAssistantId);
    await storage.assistants.addTopicId(currentAssistantId, newTopic.id);
    setTopics((prev) => [newTopic, ...prev]);
    setCurrentTopicIdState(newTopic.id);
  }, [currentAssistantId]);

  // 删除话题
  const deleteTopic = useCallback(async (id: string) => {
    await storage.chatMessages.deleteByTopicId(id);
    await storage.topics.remove(id);
    await storage.assistants.removeTopicId(currentAssistantId, id);
    setTopics((prev) => {
      const filtered = prev.filter((t) => t.id !== id);
      if (currentTopicId === id && filtered.length > 0) {
        setCurrentTopicIdState(filtered[0].id);
      }
      return filtered;
    });
  }, [currentAssistantId, currentTopicId]);

  // 重命名话题
  const renameTopic = useCallback(async (id: string, name: string) => {
    await storage.topics.rename(id, name);
    setTopics((prev) => prev.map((t) => (t.id === id ? { ...t, name } : t)));
  }, []);

  // 清空当前话题消息
  const clearMessages = useCallback(async () => {
    if (!currentTopicId) return;
    await storage.chatMessages.deleteByTopicId(currentTopicId);
    setMessages([]);
  }, [currentTopicId]);

  // 发送消息
  const send = useCallback(async (content: string) => {
    if (!content.trim() || isLoading || !currentTopicId || !currentAssistant) return;
    setError(null);

    // 解析供应商和模型：优先使用用户手动选择的模型
    let providerId = selectedModel?.providerId || currentAssistant.providerId;
    let modelId = selectedModel?.modelId || currentAssistant.modelId;

    if (!providerId) {
      await providerRegistry.initFromPresets();
      const enabled = await providerRegistry.getEnabled();
      const provider = enabled.find((p) => p.apiKey && p.models.length > 0);
      if (!provider) { setError('请先在 AI 设置中配置供应商和 API Key'); return; }
      providerId = provider.id;
      modelId = modelId || provider.models[0].id;
    }
    if (!modelId) {
      const provider = await providerRegistry.getById(providerId);
      if (!provider || provider.models.length === 0) { setError('所选供应商没有可用模型'); return; }
      modelId = provider.models[0].id;
    }

    // 保存用户消息
    const userMsg = await storage.chatMessages.addMessage(
      currentTopicId, currentAssistant.id, 'user', content,
    );
    await storage.topics.addMessageId(currentTopicId, userMsg.id);

    const userUI: UIMessage = { ...userMsg };
    const assistantUI: UIMessage = {
      id: `pending-${Date.now()}`,
      topicId: currentTopicId,
      assistantId: currentAssistant.id,
      role: 'assistant',
      content: '',
      createdAt: new Date(),
      streaming: true,
    };

    setMessages((prev) => [...prev, userUI, assistantUI]);
    setIsLoading(true);

    // 构建历史
    const history: ChatMessage[] = messages
      .filter((m) => !m.streaming && !m.error)
      .map(({ role, content: c }) => ({ role, content: c }));
    history.push({ role: 'user', content });

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      await streamChat({
        providerId,
        modelId,
        messages: history,
        systemPrompt: currentAssistant.systemPrompt,
        stream: true,
        abortSignal: controller.signal,
        callbacks: {
          onReasoning: (delta) => {
            setMessages((prev) =>
              prev.map((m) => m.id === assistantUI.id
                ? { ...m, reasoning: (m.reasoning || '') + delta }
                : m),
            );
          },
          onText: (delta) => {
            setMessages((prev) =>
              prev.map((m) => m.id === assistantUI.id ? { ...m, content: m.content + delta } : m),
            );
          },
          onFinish: async (fullText, fullReasoning) => {
            // 持久化助手消息（含推理过程）
            const savedMsg = await storage.chatMessages.addMessage(
              currentTopicId, currentAssistant.id, 'assistant', fullText, modelId, fullReasoning,
            );
            await storage.topics.addMessageId(currentTopicId, savedMsg.id);
            setMessages((prev) =>
              prev.map((m) => m.id === assistantUI.id ? { ...savedMsg, streaming: false } : m),
            );
          },
          onError: (err) => {
            setMessages((prev) =>
              prev.map((m) =>
                m.id === assistantUI.id
                  ? { ...m, streaming: false, error: err.message, content: m.content || '回答生成失败' }
                  : m,
              ),
            );
            setError(err.message);
          },
        },
      });
    } catch (err: unknown) {
      if (err instanceof Error && err.name !== 'AbortError') {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantUI.id
              ? { ...m, streaming: false, error: (err as Error).message, content: m.content || '回答生成失败' }
              : m,
          ),
        );
        setError((err as Error).message);
      }
    } finally {
      setIsLoading(false);
      abortRef.current = null;
    }
  }, [isLoading, messages, currentTopicId, currentAssistant, selectedModel]);

  // 停止生成
  const stop = useCallback(() => {
    abortRef.current?.abort();
    setIsLoading(false);
    setMessages((prev) => prev.map((m) => (m.streaming ? { ...m, streaming: false } : m)));
  }, []);

  return {
    assistants, currentAssistant, setCurrentAssistant,
    topics, currentTopic, createTopic, deleteTopic, renameTopic, setCurrentTopic,
    messages, isLoading, error, send, stop, clearMessages,
    selectedModel, setSelectedModel,
    isReady,
  };
}
