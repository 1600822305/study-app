// ============================================================
// useAIChat — AI 对话 Hook
// 管理消息列表、流式发送、历史持久化
// ============================================================

import { useState, useCallback, useRef } from 'react';
import { streamChat, providerRegistry, getMathTutorPrompt } from '@/lib/ai';
import { storage } from '@/lib/storage';
import type { ChatMessage } from '@/lib/ai';

export interface UIMessage extends ChatMessage {
  id: string;
  reasoning?: string;
  streaming?: boolean;
  error?: string;
}

interface UseAIChatOptions {
  /** 当前学习模块 ID（prereq / complex） */
  moduleId?: string;
  /** 会话 ID（用于持久化） */
  sessionId?: string;
  /** 指定供应商 ID（不传则自动选第一个已启用的） */
  providerId?: string;
  /** 指定模型 ID（不传则用该供应商第一个模型） */
  modelId?: string;
}

interface UseAIChatReturn {
  messages: UIMessage[];
  isLoading: boolean;
  error: string | null;
  send: (content: string) => Promise<void>;
  stop: () => void;
  clear: () => void;
  /** 是否已配置 AI 供应商 */
  isConfigured: boolean;
}

export function useAIChat(options: UseAIChatOptions = {}): UseAIChatReturn {
  const { moduleId, sessionId, providerId: explicitProviderId, modelId: explicitModelId } = options;
  const [messages, setMessages] = useState<UIMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isConfigured, setIsConfigured] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  // Check if any provider is configured on first render
  useState(() => {
    (async () => {
      const enabled = await providerRegistry.getEnabled();
      const configured = enabled.some((p) => p.apiKey && p.models.length > 0);
      setIsConfigured(configured);
    })();
  });

  const send = useCallback(async (content: string) => {
    if (!content.trim() || isLoading) return;

    setError(null);

    // 解析供应商和模型：优先使用外部指定的 → 持久化选择 → 自动选第一个
    let resolvedProviderId = explicitProviderId;
    let resolvedModelId = explicitModelId;

    // 如果没有外部指定，尝试从 settings 读取主聊天页面的 selectedModel
    if (!resolvedProviderId) {
      const savedModel = await storage.settings.getValue('selectedModel');
      if (savedModel) {
        try {
          const parsed = JSON.parse(savedModel);
          resolvedProviderId = parsed.providerId;
          resolvedModelId = parsed.modelId;
        } catch { /* ignore */ }
      }
    }

    if (!resolvedProviderId) {
      const enabled = await providerRegistry.getEnabled();
      const provider = enabled.find((p) => p.apiKey && p.models.length > 0);
      if (!provider) {
        setError('请先在 AI 设置中配置供应商和 API Key');
        return;
      }
      resolvedProviderId = provider.id;
      resolvedModelId = resolvedModelId || provider.models[0].id;
    }

    if (!resolvedModelId) {
      const provider = await providerRegistry.getById(resolvedProviderId);
      if (!provider || provider.models.length === 0) {
        setError('所选供应商没有可用模型');
        return;
      }
      resolvedModelId = provider.models[0].id;
    }

    // Add user message
    const userMsg: UIMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content,
    };

    // Add placeholder assistant message
    const assistantMsg: UIMessage = {
      id: `assistant-${Date.now()}`,
      role: 'assistant',
      content: '',
      streaming: true,
    };

    setMessages((prev) => [...prev, userMsg, assistantMsg]);
    setIsLoading(true);

    // Persist user message
    if (sessionId) {
      await storage.aiChat.addMessage(sessionId, 'user', content, moduleId);
    }

    // Build chat history (exclude streaming placeholder)
    const history: ChatMessage[] = messages
      .filter((m) => !m.streaming && !m.error)
      .map(({ role, content: c }) => ({ role, content: c }));
    history.push({ role: 'user', content });

    // Stream
    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const result = await streamChat({
        providerId: resolvedProviderId,
        modelId: resolvedModelId,
        messages: history,
        systemPrompt: getMathTutorPrompt(moduleId),
        stream: true,
        abortSignal: controller.signal,
        callbacks: {
          onReasoning: (delta) => {
            setMessages((prev) =>
              prev.map((m) =>
                m.id === assistantMsg.id
                  ? { ...m, reasoning: (m.reasoning || '') + delta }
                  : m,
              ),
            );
          },
          onText: (delta) => {
            setMessages((prev) =>
              prev.map((m) =>
                m.id === assistantMsg.id
                  ? { ...m, content: m.content + delta }
                  : m,
              ),
            );
          },
          onFinish: async (fullText, fullReasoning) => {
            setMessages((prev) =>
              prev.map((m) =>
                m.id === assistantMsg.id
                  ? { ...m, streaming: false, reasoning: fullReasoning || m.reasoning }
                  : m,
              ),
            );
            // Persist assistant message
            if (sessionId) {
              await storage.aiChat.addMessage(sessionId, 'assistant', fullText, moduleId);
            }
          },
          onError: (err) => {
            setMessages((prev) =>
              prev.map((m) =>
                m.id === assistantMsg.id
                  ? { ...m, streaming: false, error: err.message, content: m.content || '回答生成失败' }
                  : m,
              ),
            );
            setError(err.message);
          },
        },
      });

      // If no streaming callbacks were used (non-stream fallback)
      if (result.content && !assistantMsg.streaming) {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantMsg.id
              ? { ...m, content: result.content, streaming: false }
              : m,
          ),
        );
      }
    } catch (err: unknown) {
      if (err instanceof Error && err.name !== 'AbortError') {
        const msg = err.message;
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantMsg.id
              ? { ...m, streaming: false, error: msg, content: m.content || '回答生成失败' }
              : m,
          ),
        );
        setError(msg);
      }
    } finally {
      setIsLoading(false);
      abortRef.current = null;
    }
  }, [isLoading, messages, moduleId, sessionId, explicitProviderId, explicitModelId]);

  const stop = useCallback(() => {
    abortRef.current?.abort();
    setIsLoading(false);
    setMessages((prev) =>
      prev.map((m) => (m.streaming ? { ...m, streaming: false } : m)),
    );
  }, []);

  const clear = useCallback(() => {
    setMessages([]);
    setError(null);
  }, []);

  return { messages, isLoading, error, send, stop, clear, isConfigured };
}
