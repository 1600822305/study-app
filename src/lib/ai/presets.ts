// ============================================================
// 预置供应商配置（参考 Cherry Studio）
// 用户只需填 API Key 即可使用
// ============================================================

import type { PresetProvider } from './types';

export const PRESET_PROVIDERS: PresetProvider[] = [
  {
    id: 'openai',
    name: 'OpenAI',
    type: 'openai',
    apiHost: 'https://api.openai.com',
    icon: '🤖',
    models: [],
    websites: {
      official: 'https://openai.com/',
      apiKey: 'https://platform.openai.com/api-keys',
      docs: 'https://platform.openai.com/docs',
    },
  },
  {
    id: 'deepseek',
    name: 'DeepSeek',
    type: 'openai',
    apiHost: 'https://api.deepseek.com',
    icon: '🐋',
    models: [],
    websites: {
      official: 'https://deepseek.com/',
      apiKey: 'https://platform.deepseek.com/api_keys',
      docs: 'https://platform.deepseek.com/api-docs/',
    },
  },
  {
    id: 'dashscope',
    name: '阿里云百炼',
    type: 'openai',
    apiHost: 'https://dashscope.aliyuncs.com/compatible-mode/v1',
    icon: '☁️',
    models: [],
    websites: {
      official: 'https://www.aliyun.com/product/bailian',
      apiKey: 'https://bailian.console.aliyun.com/?tab=model#/api-key',
      docs: 'https://help.aliyun.com/zh/model-studio/getting-started/',
    },
  },
  {
    id: 'siliconflow',
    name: '硅基流动',
    type: 'openai',
    apiHost: 'https://api.siliconflow.cn',
    icon: '💎',
    models: [],
    websites: {
      official: 'https://www.siliconflow.cn',
      apiKey: 'https://cloud.siliconflow.cn/account/ak',
      docs: 'https://docs.siliconflow.cn/',
    },
  },
  {
    id: 'doubao',
    name: '豆包（火山引擎）',
    type: 'openai',
    apiHost: 'https://ark.cn-beijing.volces.com/api/v3',
    icon: '🫘',
    models: [],
    websites: {
      official: 'https://www.volcengine.com/product/doubao',
      apiKey: 'https://console.volcengine.com/ark/region:ark+cn-beijing/apiKey',
    },
  },
  {
    id: 'groq',
    name: 'Groq',
    type: 'openai',
    apiHost: 'https://api.groq.com/openai',
    icon: '⚡',
    models: [],
    websites: {
      official: 'https://groq.com/',
      apiKey: 'https://console.groq.com/keys',
      docs: 'https://console.groq.com/docs/quickstart',
    },
  },
  {
    id: 'ollama',
    name: 'Ollama（本地）',
    type: 'openai',
    apiHost: 'http://localhost:11434',
    icon: '🦙',
    models: [],
    websites: {
      official: 'https://ollama.com/',
      docs: 'https://ollama.com/library',
    },
  },
];

/** 根据 ID 查找预置供应商 */
export function getPresetProvider(id: string): PresetProvider | undefined {
  return PRESET_PROVIDERS.find((p) => p.id === id);
}
