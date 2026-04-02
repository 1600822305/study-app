# AI 模块架构

## 核心模块 (src/lib/ai/)

- **types.ts**: AIProvider, AIModel, ChatMessage, ChatOptions, ChatResponse, StreamCallbacks, PresetProvider
- **presets.ts**: 7 个预置供应商 (OpenAI, DeepSeek, 阿里云百炼, 硅基流动, 豆包（火山引擎）, Groq, Ollama)
- **provider-registry.ts**: 供应商注册中心，持久化到 IndexedDB，支持 CRUD + initFromPresets
- **ai-service.ts**: 核心服务层
  - streamChat + chat + testConnection，使用 Vercel AI SDK (`@ai-sdk/openai`)
  - AI SDK v5 用 `maxOutputTokens`，usage 字段为 `inputTokens/outputTokens/totalTokens`
  - `fetchModelsFromAPI()` 从 `/v1/models` 获取模型
  - `getCompleteApiUrl()` 显示完整请求 URL
  - 使用 `adaptiveFetch` 绕过 CORS
- **prompts/math-tutor.ts**: 数学辅导 System Prompt，根据 `moduleId` 动态注入上下文
- **index.ts**: 统一导出

## 设置页面路由

| 路由 | 组件 | 说明 |
|------|------|------|
| `/settings` | SettingsPage.tsx | 分类卡片导航 |
| `/settings/ai` | AISettingsPage.tsx | 供应商列表，启用/禁用、编辑、删除 |
| `/settings/ai/provider/:providerId` | AIProviderPage.tsx | API Key、Base URL、测试连接、模型管理 |
| `/settings/ai/add-provider` | AIAddProviderPage.tsx | 预置选择 + 自定义创建 |
| `/settings/tts` | TTSSettingsPage.tsx | TTS 设置 |

- 侧边栏：单一「设置」入口 `/settings`，isActive 用 `startsWith` 匹配

## UI 层

- **useAIChat Hook** (`src/hooks/useAIChat.ts`): 消息列表、流式发送、历史持久化
- **AIChatPanel** (`src/components/shared/AIChatPanel.tsx`): 浮动聊天面板（嵌入教学页面）
- **ChatPanel** (`src/features/chat/ChatPanel.tsx`): `/chat` 路由下的独立聊天页面组件

## 依赖

- `ai` + `@ai-sdk/openai` (Vercel AI SDK)
