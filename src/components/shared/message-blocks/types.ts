// ============================================================
// 消息块类型系统
// 参考 Cherry Studio MessageBlock 架构
// ============================================================

// 块类型枚举 — 新增块类型只需在此扩展
export const MessageBlockType = {
  MAIN_TEXT: 'main_text',
  THINKING: 'thinking',
  CODE: 'code',
  ERROR: 'error',
} as const;

export type MessageBlockType = (typeof MessageBlockType)[keyof typeof MessageBlockType];

// 块状态枚举
export const MessageBlockStatus = {
  STREAMING: 'streaming',
  SUCCESS: 'success',
  ERROR: 'error',
} as const;

export type MessageBlockStatus = (typeof MessageBlockStatus)[keyof typeof MessageBlockStatus];

// ============================================================
// 块接口定义
// ============================================================

// 基础块
export interface BaseMessageBlock {
  id: string;
  type: MessageBlockType;
  status: MessageBlockStatus;
}

// 主文本块
export interface MainTextMessageBlock extends BaseMessageBlock {
  type: typeof MessageBlockType.MAIN_TEXT;
  content: string;
}

// 思考块
export interface ThinkingMessageBlock extends BaseMessageBlock {
  type: typeof MessageBlockType.THINKING;
  content: string;
}

// 代码块（独立提取的代码，非 Markdown 内嵌）
export interface CodeMessageBlock extends BaseMessageBlock {
  type: typeof MessageBlockType.CODE;
  language: string;
  content: string;
}

// 错误块
export interface ErrorMessageBlock extends BaseMessageBlock {
  type: typeof MessageBlockType.ERROR;
  content: string;
}

// 联合类型
export type MessageBlock =
  | MainTextMessageBlock
  | ThinkingMessageBlock
  | CodeMessageBlock
  | ErrorMessageBlock;
