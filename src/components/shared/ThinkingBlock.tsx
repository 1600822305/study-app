// ============================================================
// ThinkingBlock — 可折叠的推理过程（参考 CS ThinkingBlock）
// 公共组件，主聊天 + 缩小版聊天共用
// ============================================================

import { useState } from 'react';
import { ChevronDown, ChevronRight, Brain } from 'lucide-react';

interface ThinkingBlockProps {
  content: string;
  isStreaming: boolean;
}

export function ThinkingBlock({ content, isStreaming }: ThinkingBlockProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mb-2">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-1.5 text-xs text-purple-600 hover:text-purple-700
          cursor-pointer transition-colors py-1"
      >
        {expanded ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
        <Brain size={12} />
        <span>
          {isStreaming ? '思考中...' : '思考过程'}
        </span>
        {isStreaming && (
          <span className="inline-block w-1 h-3 bg-purple-400 rounded-sm ml-0.5 animate-pulse" />
        )}
      </button>
      {expanded && (
        <div className="mt-1 pl-3 border-l-2 border-purple-200 text-xs text-gray-500 leading-relaxed
          whitespace-pre-wrap break-words max-h-64 overflow-y-auto">
          {content}
        </div>
      )}
    </div>
  );
}
