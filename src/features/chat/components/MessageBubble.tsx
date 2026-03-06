// ============================================================
// MessageBubble — 消息气泡
// ============================================================

import type { UIMessage } from '../useChatPage';
import { MessageBlockRenderer } from '@/components/shared/message-blocks';
import { ThinkingBlock } from '@/components/shared/ThinkingBlock';

interface MessageBubbleProps {
  message: UIMessage;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
          isUser
            ? 'bg-blue-500 text-white rounded-br-md'
            : message.error
              ? 'bg-red-50 text-red-700 border border-red-200 rounded-bl-md'
              : 'bg-gray-100 text-gray-800 rounded-bl-md'
        }`}
      >
        {/* 推理过程（参考 CS ThinkingBlock） */}
        {!isUser && message.reasoning && (
          <ThinkingBlock
            content={message.reasoning}
            isStreaming={!!message.streaming && !message.content}
          />
        )}
        {isUser ? (
          <div className="whitespace-pre-wrap break-words">{message.content}</div>
        ) : (
          <MessageBlockRenderer content={message.content} isStreaming={message.streaming} />
        )}
        {message.streaming && !message.content && !message.reasoning && (
          <span className="inline-block w-1.5 h-4 bg-gray-400 rounded-sm ml-0.5 animate-pulse" />
        )}
      </div>
    </div>
  );
}
