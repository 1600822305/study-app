// ============================================================
// MessageBlockRenderer — 消息块分发渲染器
// 参考 CS 的 switch-case 架构，按块类型渲染对应组件
// 扩展新块类型只需：1) types.ts 加类型  2) 创建块组件  3) 此处加 case
// ============================================================

import { useMemo } from 'react';
import { MessageBlockType } from './types';
import type { MessageBlock } from './types';
import { parseMessageBlocks } from './parser';
import { ThinkingBlock } from './blocks/ThinkingBlock';
import { MainTextBlock } from './blocks/MainTextBlock';
import { ErrorBlock } from './blocks/ErrorBlock';

interface Props {
  content: string;
  isStreaming?: boolean;
}

export function MessageBlockRenderer({ content, isStreaming = false }: Props) {
  const blocks = useMemo(() => parseMessageBlocks(content, isStreaming), [content, isStreaming]);

  if (blocks.length === 0) return null;

  return (
    <div>
      {blocks.map((block) => renderBlock(block))}
    </div>
  );
}

/**
 * 根据块类型渲染对应组件
 * 新增块类型时在此添加 case
 */
function renderBlock(block: MessageBlock) {
  switch (block.type) {
    case MessageBlockType.MAIN_TEXT:
      return <MainTextBlock key={block.id} block={block} />;

    case MessageBlockType.THINKING:
      return <ThinkingBlock key={block.id} block={block} />;

    case MessageBlockType.ERROR:
      return <ErrorBlock key={block.id} block={block} />;

    case MessageBlockType.CODE:
      // 独立代码块（非 Markdown 内嵌）— 预留扩展
      // 目前代码块通过 MainTextBlock 内的 ReactMarkdown 渲染
      return null;

    default: {
      // exhaustive check
      const _exhaustive: never = block;
      if (import.meta.env.DEV) {
        console.warn('未处理的块类型:', (_exhaustive as MessageBlock).type);
      }
      return null;
    }
  }
}
