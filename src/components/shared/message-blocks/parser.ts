// ============================================================
// 消息块解析器
// 将 AI 原始回复文本拆分为结构化的 MessageBlock 数组
// ============================================================

import {
  MessageBlockType,
  MessageBlockStatus,
  type MessageBlock,
  type MainTextMessageBlock,
  type ThinkingMessageBlock,
} from './types';

let _blockIdCounter = 0;
function nextBlockId(): string {
  return `block-${Date.now()}-${++_blockIdCounter}`;
}

/**
 * 解析 AI 回复为消息块数组
 * 支持：
 *  - <think>...</think> → ThinkingMessageBlock
 *  - 其余正文 → MainTextMessageBlock
 *
 * 扩展新块类型时，在此函数中增加对应的正则/逻辑即可
 */
export function parseMessageBlocks(
  content: string,
  isStreaming = false,
): MessageBlock[] {
  if (!content) return [];

  const blocks: MessageBlock[] = [];
  const status = isStreaming ? MessageBlockStatus.STREAMING : MessageBlockStatus.SUCCESS;

  // 匹配 <think>...</think>（支持流式未闭合）
  const thinkRegex = /<think>([\s\S]*?)(<\/think>|$)/gi;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = thinkRegex.exec(content)) !== null) {
    // think 之前的正文
    const before = content.slice(lastIndex, match.index).trim();
    if (before) {
      blocks.push(createMainTextBlock(before, status));
    }

    // 思考内容
    const thinkContent = match[1].trim();
    if (thinkContent) {
      const thinkClosed = match[2] === '</think>';
      blocks.push(createThinkingBlock(
        thinkContent,
        thinkClosed ? MessageBlockStatus.SUCCESS : MessageBlockStatus.STREAMING,
      ));
    }

    lastIndex = match.index + match[0].length;
  }

  // 剩余正文
  const remaining = content.slice(lastIndex).trim();
  if (remaining) {
    blocks.push(createMainTextBlock(remaining, status));
  }

  // 如果解析不到任何块，整体当文本
  if (blocks.length === 0 && content.trim()) {
    blocks.push(createMainTextBlock(content.trim(), status));
  }

  return blocks;
}

// ============================================================
// 工厂函数
// ============================================================

function createMainTextBlock(content: string, status: MessageBlockStatus): MainTextMessageBlock {
  return {
    id: nextBlockId(),
    type: MessageBlockType.MAIN_TEXT,
    status,
    content,
  };
}

function createThinkingBlock(content: string, status: MessageBlockStatus): ThinkingMessageBlock {
  return {
    id: nextBlockId(),
    type: MessageBlockType.THINKING,
    status,
    content,
  };
}
