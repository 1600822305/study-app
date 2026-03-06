// ============================================================
// ThinkingBlock — 思考过程展示
// 折叠/展开 + 实时计时 + 流式自动展开
// ============================================================

import { useState, useEffect } from 'react';
import { ChevronDown, Brain } from 'lucide-react';
import type { ThinkingMessageBlock } from '../types';
import { MessageBlockStatus } from '../types';

interface Props {
  block: ThinkingMessageBlock;
}

export function ThinkingBlock({ block }: Props) {
  const isStreaming = block.status === MessageBlockStatus.STREAMING;
  const [expanded, setExpanded] = useState(isStreaming);
  const [elapsed, setElapsed] = useState(0);

  // 流式时自动展开
  useEffect(() => {
    if (isStreaming) setExpanded(true);
  }, [isStreaming]);

  // 流式计时器
  useEffect(() => {
    if (!isStreaming) return;
    const t0 = Date.now();
    const timer = setInterval(() => setElapsed(Date.now() - t0), 100);
    return () => clearInterval(timer);
  }, [isStreaming]);

  // 完成后自动折叠
  useEffect(() => {
    if (!isStreaming && elapsed > 0) {
      const timer = setTimeout(() => setExpanded(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isStreaming, elapsed]);

  const formatTime = (ms: number) => {
    const s = Math.floor(ms / 1000);
    const d = Math.floor((ms % 1000) / 100);
    return `${s}.${d}s`;
  };

  return (
    <div className="my-1.5 rounded-lg border border-purple-200 bg-purple-50/60 overflow-hidden">
      {/* Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center gap-2 px-3 py-2 text-left cursor-pointer hover:bg-purple-100/50 transition-colors"
      >
        <Brain size={14} className={`text-purple-500 shrink-0 ${isStreaming ? 'animate-pulse' : ''}`} />
        <span className="text-xs font-medium text-purple-700 flex-1">
          {isStreaming ? '思考中...' : '思考过程'}
        </span>
        {(isStreaming || elapsed > 0) && (
          <span className="text-[10px] text-purple-400 font-mono">{formatTime(elapsed)}</span>
        )}
        <ChevronDown
          size={14}
          className={`text-purple-400 transition-transform shrink-0 ${expanded ? '' : '-rotate-90'}`}
        />
      </button>

      {/* Content */}
      {expanded && (
        <div className="px-3 pb-2.5 text-xs text-purple-800/80 leading-relaxed max-h-48 overflow-y-auto border-t border-purple-100">
          <div className="pt-2 whitespace-pre-wrap font-mono">{block.content}</div>
        </div>
      )}
    </div>
  );
}
