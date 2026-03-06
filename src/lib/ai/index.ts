// ============================================================
// AI 模块 — 统一公共 API
// ============================================================

export { providerRegistry } from './provider-registry';
export { streamChat, chat, testConnection, testModelConnection, fetchModelsFromAPI, getCompleteApiUrl } from './ai-service';
export { getMathTutorPrompt } from './prompts/math-tutor';
export { PRESET_PROVIDERS, getPresetProvider } from './presets';
export type {
  AIProvider,
  AIModel,
  ProviderType,
  ChatMessage,
  ChatOptions,
  ChatResponse,
  StreamCallbacks,
  PresetProvider,
} from './types';
