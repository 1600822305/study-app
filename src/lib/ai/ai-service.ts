// ============================================================
// AI Service — 核心对话服务
// 使用 Vercel AI SDK，支持流式/非流式，自动适配环境
// ============================================================

import { streamText, generateText } from 'ai';
import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { adaptiveFetch } from '@/lib/env';
import { providerRegistry } from './provider-registry';
import type { ChatOptions, ChatResponse, AIProvider } from './types';

// ============================================================
// Provider 实例工厂
// ============================================================

/**
 * 根据供应商配置创建 AI SDK provider 实例
 * 目前所有供应商都走 OpenAI 兼容协议
 * 后续新增 Anthropic/Gemini 只需在此 switch 扩展
 */
function createSDKProvider(provider: AIProvider) {
  switch (provider.type) {
    case 'openai':
    default:
      // 参考 CS：用 @ai-sdk/openai-compatible 替代 @ai-sdk/openai
      // 原生支持 delta.reasoning_content 字段，无需 hack
      return createOpenAICompatible({
        name: provider.id,
        apiKey: provider.apiKey,
        baseURL: normalizeBaseURL(provider.apiHost),
        fetch: adaptiveFetch as typeof globalThis.fetch,
      });
  }
}

/** 确保 baseURL 以 /v1 结尾 */
function normalizeBaseURL(host: string): string {
  const trimmed = host.replace(/\/+$/, '');
  // 已有 /v1 或 /v3 等版本路径
  if (/\/v\d+$/.test(trimmed)) return trimmed;
  // Ollama 特殊处理
  if (trimmed.includes('localhost:11434')) return `${trimmed}/v1`;
  // OpenAI 兼容默认加 /v1
  return `${trimmed}/v1`;
}

// ============================================================
// Public API
// ============================================================

/**
 * 流式聊天
 * 实时返回文本增量，适用于聊天界面
 */
export async function streamChat(options: ChatOptions): Promise<ChatResponse> {
  const { providerId, modelId, messages, systemPrompt, temperature, maxTokens, callbacks, abortSignal } = options;

  const provider = await providerRegistry.getById(providerId);
  if (!provider) throw new Error(`供应商 "${providerId}" 不存在`);
  if (!provider.apiKey) throw new Error(`供应商 "${provider.name}" 未配置 API Key`);

  const sdkProvider = createSDKProvider(provider);
  const model = sdkProvider.chatModel(modelId);

  // 构建消息
  const apiMessages = buildMessages(messages, systemPrompt);

  let fullText = '';
  let fullReasoning = '';

  try {
    const result = streamText({
      model,
      messages: apiMessages,
      temperature: temperature ?? 0.7,
      maxOutputTokens: maxTokens,
      abortSignal,
    });

    // 参考 CS：用 fullStream 同时捕获 reasoning 和 text-delta
    for await (const part of result.fullStream) {
      if (part.type === 'reasoning-delta') {
        const delta = part.text;
        fullReasoning += delta;
        callbacks?.onReasoning?.(delta);
      } else if (part.type === 'text-delta') {
        fullText += part.text;
        callbacks?.onText?.(part.text);
      }
    }

    const usage = await result.usage;
    callbacks?.onFinish?.(fullText, fullReasoning || undefined);

    return {
      content: fullText,
      reasoning: fullReasoning || undefined,
      usage: usage ? {
        promptTokens: usage.inputTokens ?? 0,
        completionTokens: usage.outputTokens ?? 0,
        totalTokens: usage.totalTokens ?? 0,
      } : undefined,
    };
  } catch (error: unknown) {
    const err = error instanceof Error ? error : new Error(String(error));
    if (err.name === 'AbortError') {
      callbacks?.onFinish?.(fullText, fullReasoning || undefined);
      return { content: fullText, reasoning: fullReasoning || undefined };
    }
    callbacks?.onError?.(err);
    throw err;
  }
}

/**
 * 非流式聊天
 * 一次性返回完整结果，适用于后台调用
 */
export async function chat(options: Omit<ChatOptions, 'stream' | 'callbacks'>): Promise<ChatResponse> {
  const { providerId, modelId, messages, systemPrompt, temperature, maxTokens, abortSignal } = options;

  const provider = await providerRegistry.getById(providerId);
  if (!provider) throw new Error(`供应商 "${providerId}" 不存在`);
  if (!provider.apiKey) throw new Error(`供应商 "${provider.name}" 未配置 API Key`);

  const sdkProvider = createSDKProvider(provider);
  const model = sdkProvider.chatModel(modelId);

  const apiMessages = buildMessages(messages, systemPrompt);

  const result = await generateText({
    model,
    messages: apiMessages,
    temperature: temperature ?? 0.7,
    maxOutputTokens: maxTokens,
    abortSignal,
  });

  return {
    content: result.text,
    usage: result.usage ? {
      promptTokens: result.usage.inputTokens ?? 0,
      completionTokens: result.usage.outputTokens ?? 0,
      totalTokens: result.usage.totalTokens ?? 0,
    } : undefined,
  };
}

/**
 * 从供应商 API 自动获取可用模型列表
 * 调用 /v1/models 端点
 */
export async function fetchModelsFromAPI(providerId: string): Promise<{ ok: boolean; models?: Array<{ id: string; name: string }>; error?: string }> {
  try {
    const provider = await providerRegistry.getById(providerId);
    if (!provider) return { ok: false, error: '供应商不存在' };
    if (!provider.apiKey) return { ok: false, error: '未配置 API Key' };

    const baseURL = normalizeBaseURL(provider.apiHost);
    const url = `${baseURL}/models`;

    const response = await adaptiveFetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${provider.apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const text = await response.text().catch(() => '');
      return { ok: false, error: `HTTP ${response.status}: ${text.slice(0, 200)}` };
    }

    const data = await response.json();
    const models = (data.data || data || [])
      .filter((m: any) => m.id)
      .map((m: any) => ({
        id: m.id,
        name: m.id,
      }));

    return { ok: true, models };
  } catch (error: unknown) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

/** 获取完整 API URL（显示用） */
export function getCompleteApiUrl(host: string): string {
  return `${normalizeBaseURL(host)}/chat/completions`;
}

/**
 * 测试供应商连接（使用第一个模型）
 */
export async function testConnection(providerId: string): Promise<{ ok: boolean; error?: string }> {
  try {
    const result = await chat({
      providerId,
      modelId: await getFirstModelId(providerId),
      messages: [{ role: 'user', content: 'Hi' }],
      maxTokens: 5,
    });
    return { ok: !!result.content };
  } catch (error: unknown) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

/**
 * 测试指定模型的连接
 */
export async function testModelConnection(providerId: string, modelId: string): Promise<{ ok: boolean; error?: string }> {
  try {
    const result = await chat({
      providerId,
      modelId,
      messages: [{ role: 'user', content: 'Hi' }],
      maxTokens: 5,
    });
    return { ok: !!result.content };
  } catch (error: unknown) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

// ============================================================
// Helpers
// ============================================================

function buildMessages(
  messages: ChatOptions['messages'],
  systemPrompt?: string,
): Array<{ role: 'system' | 'user' | 'assistant'; content: string }> {
  const result: Array<{ role: 'system' | 'user' | 'assistant'; content: string }> = [];

  if (systemPrompt?.trim()) {
    result.push({ role: 'system', content: systemPrompt });
  }

  for (const msg of messages) {
    result.push({ role: msg.role, content: msg.content });
  }

  return result;
}

async function getFirstModelId(providerId: string): Promise<string> {
  const provider = await providerRegistry.getById(providerId);
  if (!provider?.models.length) {
    throw new Error(`供应商 "${providerId}" 没有可用模型`);
  }
  return provider.models[0].id;
}
