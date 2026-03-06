// ============================================================
// AIChatPanel — 浮动 AI 对话面板
// 可嵌入任何学习页面，上下文绑定当前模块
// ============================================================

import { useState, useRef, useEffect, useCallback } from 'react';
import { MessageCircle, X, Send, Square, Trash2, Settings, Loader2, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAIChat } from '@/hooks/useAIChat';
import type { UIMessage } from '@/hooks/useAIChat';
import { MessageBlockRenderer } from '@/components/shared/message-blocks';
import { ThinkingBlock } from '@/components/shared/ThinkingBlock';
import { providerRegistry } from '@/lib/ai';
import { storage } from '@/lib/storage';
import type { AIProvider } from '@/lib/ai';

const MIN_W = 320;
const MIN_H = 360;
const DEFAULT_W = 384;
const DEFAULT_H = 512;

interface AIChatPanelProps {
  moduleId?: string;
}

export function AIChatPanel({ moduleId }: AIChatPanelProps) {
  const navigate = useNavigate();
  const sessionId = `chat-${moduleId || 'general'}-${new Date().toISOString().slice(0, 10)}`;

  // 模型选择器状态
  const [providers, setProviders] = useState<AIProvider[]>([]);
  const [selectedProviderId, setSelectedProviderId] = useState<string>('');
  const [selectedModelId, setSelectedModelId] = useState<string>('');
  const [selectorOpen, setSelectorOpen] = useState(false);

  // 加载已启用的供应商列表 + 同步主聊天的模型选择
  useEffect(() => {
    (async () => {
      await providerRegistry.initFromPresets();
      const enabled = await providerRegistry.getEnabled();
      const configured = enabled.filter((p) => p.apiKey && p.models.length > 0);
      setProviders(configured);

      // 优先从 settings 读取主聊天页面持久化的 selectedModel
      const savedModel = await storage.settings.getValue('selectedModel');
      if (savedModel) {
        try {
          const parsed = JSON.parse(savedModel);
          if (parsed.providerId && parsed.modelId) {
            setSelectedProviderId(parsed.providerId);
            setSelectedModelId(parsed.modelId);
            return;
          }
        } catch { /* ignore */ }
      }
      // fallback：默认选第一个
      if (configured.length > 0 && !selectedProviderId) {
        setSelectedProviderId(configured[0].id);
        setSelectedModelId(configured[0].models[0]?.id || '');
      }
    })();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { messages, isLoading, error, send, stop, clear, isConfigured } = useAIChat({
    moduleId,
    sessionId,
    providerId: selectedProviderId || undefined,
    modelId: selectedModelId || undefined,
  });

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const selectorRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // 位置 & 尺寸状态
  const [pos, setPos] = useState({ x: 0, y: 0 }); // 相对于默认右下角的偏移
  const [size, setSize] = useState({ w: DEFAULT_W, h: DEFAULT_H });
  const dragRef = useRef<{ startX: number; startY: number; origRight: number; origBottom: number } | null>(null);
  const resizeRef = useRef<{ startX: number; startY: number; origW: number; origH: number } | null>(null);

  // 拖拽移动（header 触发）
  const onDragStart = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    dragRef.current = { startX: e.clientX, startY: e.clientY, origRight: pos.x, origBottom: pos.y };

    const onMove = (ev: MouseEvent) => {
      if (!dragRef.current) return;
      const dx = ev.clientX - dragRef.current.startX;
      const dy = ev.clientY - dragRef.current.startY;
      // right 定位：鼠标右移 → right 减小
      setPos({ x: dragRef.current.origRight - dx, y: dragRef.current.origBottom - dy });
    };
    const onUp = () => {
      dragRef.current = null;
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  }, [pos]);

  // 拖拽缩放（左上角 handle 触发）
  // 用 right+bottom 定位，只改 width/height，右下角自然不动
  const onResizeStart = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    resizeRef.current = { startX: e.clientX, startY: e.clientY, origW: size.w, origH: size.h };

    const onMove = (ev: MouseEvent) => {
      if (!resizeRef.current) return;
      const dx = resizeRef.current.startX - ev.clientX; // 向左拉 → 变宽
      const dy = resizeRef.current.startY - ev.clientY; // 向上拉 → 变高
      setSize({
        w: Math.max(MIN_W, resizeRef.current.origW + dx),
        h: Math.max(MIN_H, resizeRef.current.origH + dy),
      });
    };
    const onUp = () => {
      resizeRef.current = null;
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  }, [size]);

  // 关闭选择器：点击外部
  useEffect(() => {
    if (!selectorOpen) return;
    const handler = (e: MouseEvent) => {
      if (selectorRef.current && !selectorRef.current.contains(e.target as Node)) {
        setSelectorOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [selectorOpen]);

  const currentProvider = providers.find((p) => p.id === selectedProviderId);
  const currentModel = currentProvider?.models.find((m) => m.id === selectedModelId);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Focus input when opened
  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  const handleSend = async () => {
    const text = input.trim();
    if (!text) return;
    setInput('');
    await send(text);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Floating button when closed
  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all hover:scale-110 z-50"
        title="AI 助手"
      >
        <MessageCircle size={24} />
      </button>
    );
  }

  return (
    <div
      ref={panelRef}
      className="fixed bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col z-50 overflow-hidden"
      style={{
        right: 24 + pos.x,
        bottom: 24 + pos.y,
        width: size.w,
        height: size.h,
      }}
    >
      {/* Resize handle — 左上角 */}
      <div
        onMouseDown={onResizeStart}
        className="absolute top-0 left-0 w-4 h-4 cursor-nw-resize z-10"
        title="拖拽调整大小"
      >
        <div className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-gray-300 rounded-tl" />
      </div>
      {/* Header — 拖拽移动 */}
      <div
        onMouseDown={onDragStart}
        className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white shrink-0 cursor-move select-none"
      >
        <div className="flex items-center gap-2">
          <MessageCircle size={18} />
          <span className="font-medium text-sm">AI 数学助手</span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={clear}
            className="p-1.5 hover:bg-white/20 rounded-lg cursor-pointer transition-colors"
            title="清空对话"
          >
            <Trash2 size={14} />
          </button>
          <button
            onClick={() => navigate('/settings/ai')}
            className="p-1.5 hover:bg-white/20 rounded-lg cursor-pointer transition-colors"
            title="AI 设置"
          >
            <Settings size={14} />
          </button>
          <button
            onClick={() => setOpen(false)}
            className="p-1.5 hover:bg-white/20 rounded-lg cursor-pointer transition-colors"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Model Selector */}
      <div className="relative px-3 py-2 border-b border-gray-100 bg-gray-50/80 shrink-0" ref={selectorRef}>
        <button
          onClick={() => setSelectorOpen(!selectorOpen)}
          className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors text-left"
        >
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
            <span className="text-xs text-gray-700 font-medium truncate">
              {currentModel ? `${currentProvider?.name} / ${currentModel.name}` : '选择模型...'}
            </span>
          </div>
          <ChevronDown size={14} className={`text-gray-400 transition-transform shrink-0 ${selectorOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* Dropdown */}
        {selectorOpen && (
          <div className="absolute left-3 right-3 top-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-y-auto z-10">
            {providers.length === 0 && (
              <div className="px-3 py-4 text-center">
                <p className="text-xs text-gray-400">暂无已配置的供应商</p>
                <button onClick={() => navigate('/settings/ai')} className="text-xs text-blue-500 hover:underline cursor-pointer mt-1">
                  前往设置 →
                </button>
              </div>
            )}
            {providers.map((p) => (
              <div key={p.id}>
                <div className="px-3 py-1.5 text-[10px] font-semibold text-gray-400 uppercase tracking-wider bg-gray-50 sticky top-0">
                  {p.name}
                </div>
                {p.models.map((m) => {
                  const isActive = p.id === selectedProviderId && m.id === selectedModelId;
                  return (
                    <button key={m.id}
                      onClick={() => {
                        setSelectedProviderId(p.id);
                        setSelectedModelId(m.id);
                        setSelectorOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs cursor-pointer transition-colors flex items-center gap-2 ${
                        isActive ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-50'
                      }`}>
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isActive ? 'bg-blue-500' : 'bg-transparent'}`} />
                      <span className="truncate">{m.name}</span>
                      {m.name !== m.id && <span className="text-[10px] text-gray-400 font-mono truncate">{m.id}</span>}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
        {/* Not configured hint */}
        {!isConfigured && messages.length === 0 && (
          <div className="text-center py-8">
            <p className="text-sm text-gray-500 mb-2">尚未配置 AI 供应商</p>
            <button
              onClick={() => navigate('/settings/ai')}
              className="text-sm text-blue-500 hover:underline cursor-pointer"
            >
              前往设置 →
            </button>
          </div>
        )}

        {/* Welcome */}
        {isConfigured && messages.length === 0 && (
          <div className="text-center py-8">
            <p className="text-2xl mb-2">🤖</p>
            <p className="text-sm text-gray-500">有问题随时问我！</p>
            <p className="text-xs text-gray-400 mt-1">我会根据当前学习内容给出针对性解答</p>
          </div>
        )}

        {/* Message list */}
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}

        {/* Loading indicator */}
        {isLoading && messages[messages.length - 1]?.content === '' && (
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Loader2 size={14} className="animate-spin" />
            思考中...
          </div>
        )}
      </div>

      {/* Error */}
      {error && (
        <div className="px-4 py-2 bg-red-50 text-red-600 text-xs border-t border-red-100">
          {error}
        </div>
      )}

      {/* Input */}
      <div className="px-3 py-3 border-t border-gray-100 shrink-0">
        <div className="flex items-end gap-2">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="输入问题..."
            rows={1}
            className="flex-1 resize-none px-3 py-2 text-sm rounded-lg border border-gray-200 focus:outline-none focus:border-blue-400 max-h-24"
          />
          {isLoading ? (
            <button
              onClick={stop}
              className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 cursor-pointer transition-colors shrink-0"
              title="停止生成"
            >
              <Square size={16} />
            </button>
          ) : (
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer transition-colors disabled:opacity-50 shrink-0"
            >
              <Send size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// Message Bubble
// ============================================================

function MessageBubble({ message }: { message: UIMessage }) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
          isUser
            ? 'bg-blue-500 text-white rounded-br-md'
            : message.error
              ? 'bg-red-50 text-red-700 border border-red-200 rounded-bl-md'
              : 'bg-gray-100 text-gray-800 rounded-bl-md'
        }`}
      >
        {/* 推理过程 */}
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
