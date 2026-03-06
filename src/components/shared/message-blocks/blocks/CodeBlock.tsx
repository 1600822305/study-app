// ============================================================
// CodeBlock — 代码块渲染
// 语法高亮 + 语言标签 + 复制按钮
// 用作 ReactMarkdown 的 code 组件覆盖
// ============================================================

import { useState, useCallback } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  children?: React.ReactNode;
  className?: string;
  node?: any;
  [key: string]: any;
}

/**
 * Markdown 内嵌代码块组件
 * 作为 ReactMarkdown 的 components.code 使用
 * 自动区分行内代码和块级代码
 */
export function CodeBlock({ children, className, node, ...rest }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const match = /language-(\w+)/.exec(className || '');
  const language = match ? match[1] : '';
  const code = String(children).replace(/\n$/, '');

  const isInline = !match && !code.includes('\n');

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [code]);

  // 行内代码
  if (isInline) {
    return (
      <code className="px-1 py-0.5 bg-pink-50 text-pink-600 rounded text-xs font-mono" {...rest}>
        {children}
      </code>
    );
  }

  // 块级代码
  return (
    <div className="my-2 rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-gray-100 border-b border-gray-200">
        <span className="text-[10px] text-gray-500 font-mono uppercase">{language || 'code'}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 px-1.5 py-0.5 text-[10px] text-gray-500 hover:text-gray-700 cursor-pointer rounded hover:bg-gray-200 transition-colors"
        >
          {copied ? <Check size={12} className="text-green-500" /> : <Copy size={12} />}
          {copied ? '已复制' : '复制'}
        </button>
      </div>
      {/* Body */}
      <SyntaxHighlighter
        language={language || 'text'}
        style={oneLight}
        customStyle={{
          margin: 0,
          padding: '12px',
          fontSize: '12px',
          lineHeight: '1.5',
          background: 'transparent',
        }}
        wrapLongLines
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
