// ============================================================
// 消息块系统 — 统一导出
// ============================================================

// 类型
export { MessageBlockType, MessageBlockStatus } from './types';
export type {
  BaseMessageBlock,
  MainTextMessageBlock,
  ThinkingMessageBlock,
  CodeMessageBlock,
  ErrorMessageBlock,
  MessageBlock,
} from './types';

// 解析器
export { parseMessageBlocks } from './parser';

// 渲染器
export { MessageBlockRenderer } from './MessageBlockRenderer';

// 块组件（可单独使用）
export { ThinkingBlock } from './blocks/ThinkingBlock';
export { MainTextBlock } from './blocks/MainTextBlock';
export { CodeBlock } from './blocks/CodeBlock';
export { ErrorBlock } from './blocks/ErrorBlock';
