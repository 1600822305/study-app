// ============================================================
// AI 模块核心类型定义
// 参考 Cherry Studio Provider 架构，精简适配学习 App
// ============================================================

/** 供应商协议类型 */
export type ProviderType = 'openai' | 'anthropic' | 'gemini' | 'ollama';

/** AI 模型定义 */
export interface AIModel {
  /** 模型 ID（API 调用时使用） */
  id: string;
  /** 模型显示名称 */
  name: string;
  /** 模型所属供应商 ID */
  providerId: string;
  /** 是否为推理模型（DeepSeek-R1 等） */
  isReasoning?: boolean;
  /** 最大上下文长度 */
  maxContext?: number;
  /** 最大输出 token */
  maxOutput?: number;
}

/** AI 供应商定义 */
export interface AIProvider {
  /** 供应商唯一 ID */
  id: string;
  /** 供应商显示名称 */
  name: string;
  /** 协议类型（绝大多数为 openai 兼容） */
  type: ProviderType;
  /** API Key */
  apiKey: string;
  /** API 地址（不含 /v1/chat/completions） */
  apiHost: string;
  /** 可用模型列表 */
  models: AIModel[];
  /** 是否启用 */
  enabled: boolean;
  /** 是否为系统预置供应商 */
  isSystem?: boolean;
  /** 图标（emoji 或 URL） */
  icon?: string;
}

/** 对话消息 */
export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

/** 流式回调 */
export interface StreamCallbacks {
  /** 收到文本增量 */
  onText?: (delta: string) => void;
  /** 推理过程增量（DeepSeek-R1 等） */
  onReasoning?: (delta: string) => void;
  /** 流式结束 */
  onFinish?: (fullText: string, fullReasoning?: string) => void;
  /** 发生错误 */
  onError?: (error: Error) => void;
}

/** 聊天请求选项 */
export interface ChatOptions {
  /** 使用的供应商 ID */
  providerId: string;
  /** 使用的模型 ID */
  modelId: string;
  /** 消息列表 */
  messages: ChatMessage[];
  /** 系统提示词（会插入到 messages 最前面） */
  systemPrompt?: string;
  /** 温度 0-2 */
  temperature?: number;
  /** 最大输出 token */
  maxTokens?: number;
  /** 是否流式 */
  stream?: boolean;
  /** 流式回调 */
  callbacks?: StreamCallbacks;
  /** 中断信号 */
  abortSignal?: AbortSignal;
}

/** 聊天响应 */
export interface ChatResponse {
  /** 完整回复文本 */
  content: string;
  /** 推理过程（如有） */
  reasoning?: string;
  /** 使用的 token 数 */
  usage?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
}

// ============================================================
// 预置供应商模板（用户只需填 API Key）
// ============================================================

export interface PresetProvider {
  id: string;
  name: string;
  type: ProviderType;
  apiHost: string;
  icon: string;
  models: AIModel[];
  websites?: {
    official: string;
    apiKey?: string;
    docs?: string;
  };
}
