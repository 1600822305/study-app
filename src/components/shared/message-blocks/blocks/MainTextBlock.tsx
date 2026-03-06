// ============================================================
// MainTextBlock — 主文本渲染
// Markdown（GFM）+ KaTeX 数学公式 + 代码高亮
// ============================================================

import { useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

import type { MainTextMessageBlock } from '../types';
import { CodeBlock } from './CodeBlock';

interface Props {
  block: MainTextMessageBlock;
}

export function MainTextBlock({ block }: Props) {
  // 预处理：LaTeX 方括号转换
  const processed = useMemo(() => {
    let s = block.content;
    // \[...\] → $$...$$
    s = s.replace(/\\\[([\s\S]*?)\\\]/g, '\n$$$$\n$1\n$$$$\n');
    // \(...\) → $...$
    s = s.replace(/\\\(([\s\S]*?)\\\)/g, '$$$1$$');
    return s;
  }, [block.content]);

  return (
    <div className="chat-markdown prose prose-sm max-w-none break-words
      prose-p:my-1.5 prose-headings:my-2 prose-headings:font-semibold
      prose-ul:my-1 prose-ol:my-1 prose-li:my-0.5
      prose-blockquote:border-l-blue-400 prose-blockquote:text-gray-600 prose-blockquote:not-italic
      prose-table:text-xs prose-th:px-2 prose-th:py-1 prose-td:px-2 prose-td:py-1
      prose-strong:text-gray-900 prose-a:text-blue-500 prose-a:no-underline hover:prose-a:underline
      prose-hr:my-3">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          code: CodeBlock as any,
          pre: ({ children }) => <>{children}</>,
          table: ({ children, ...props }) => (
            <div className="overflow-x-auto my-2 rounded-lg border border-gray-200">
              <table {...props}>{children}</table>
            </div>
          ),
        }}
      >
        {processed}
      </ReactMarkdown>
    </div>
  );
}
