// ============================================================
// ChatContext — 全局聊天状态（单一数据源）
// ChatPage（全屏）和 ChatPanel（浮动面板）共用
// ============================================================

import { createContext, useContext } from 'react';
import { useChatPage } from './useChatPage';
import type { UIMessage, SelectedModel } from './useChatPage';
import type { AssistantRecord, TopicRecord } from '@/lib/storage';

export type { UIMessage, SelectedModel };

interface ChatContextValue {
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

const ChatCtx = createContext<ChatContextValue | null>(null);

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const value = useChatPage();
  return <ChatCtx.Provider value={value}>{children}</ChatCtx.Provider>;
}

export function useChat(): ChatContextValue {
  const ctx = useContext(ChatCtx);
  if (!ctx) throw new Error('useChat must be used within <ChatProvider>');
  return ctx;
}
