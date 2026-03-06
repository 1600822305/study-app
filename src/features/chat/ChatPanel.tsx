// ============================================================
// ChatPanel — 浮动 AI 对话面板（缩小版主聊天）
// 消费 ChatContext，与 ChatPage 共享同一份数据
// ============================================================

import { useState, useRef, useEffect, useCallback } from 'react';
import {
  MessageCircle, X, Send, Square, Trash2,
  Loader2, ChevronDown, Plus, Settings, PanelLeftOpen, PanelLeftClose,
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useChat } from './ChatContext';
import { storage } from '@/lib/storage';
import { MessageBlockRenderer } from '@/components/shared/message-blocks';
import { ThinkingBlock } from '@/components/shared/ThinkingBlock';
import { ModelSelectorDialog } from './components/ModelSelectorDialog';
import type { UIMessage } from './ChatContext';

const MIN_W = 340;
const MIN_H = 400;
const DEFAULT_W = 400;
const DEFAULT_H = 540;

export function ChatPanel() {
  const navigate = useNavigate();
  const location = useLocation();
  const chat = useChat();

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [modelDialogOpen, setModelDialogOpen] = useState(false);
  const [topicDropdown, setTopicDropdown] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarTab, setSidebarTab] = useState<'assistants' | 'topics'>('assistants');

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const topicRef = useRef<HTMLDivElement>(null);

  // 位置 & 尺寸（启动时从 settings 恢复）
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ w: DEFAULT_W, h: DEFAULT_H });

  // 恢复上次窗口大小和位置
  useEffect(() => {
    (async () => {
      const saved = await storage.settings.getValue('chatPanelLayout');
      if (saved) {
        try {
          const { pos: p, size: s } = JSON.parse(saved);
          if (p) setPos(p);
          if (s) setSize(s);
        } catch { /* ignore */ }
      }
    })();
  }, []);
  const dragRef = useRef<{ startX: number; startY: number; origRight: number; origBottom: number } | null>(null);
  const resizeRef = useRef<{ startX: number; startY: number; origW: number; origH: number } | null>(null);

  // 拖拽移动
  const onDragStart = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    dragRef.current = { startX: e.clientX, startY: e.clientY, origRight: pos.x, origBottom: pos.y };
    const onMove = (ev: MouseEvent) => {
      if (!dragRef.current) return;
      setPos({
        x: dragRef.current.origRight - (ev.clientX - dragRef.current.startX),
        y: dragRef.current.origBottom - (ev.clientY - dragRef.current.startY),
      });
    };
    const onUp = () => {
      dragRef.current = null;
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      // 拖拽结束后保存布局
      setPos((p) => {
        storage.settings.setValue('chatPanelLayout', JSON.stringify({ pos: p, size }));
        return p;
      });
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  }, [pos, size]);

  // 拖拽缩放（左上角）
  const onResizeStart = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    resizeRef.current = { startX: e.clientX, startY: e.clientY, origW: size.w, origH: size.h };
    const onMove = (ev: MouseEvent) => {
      if (!resizeRef.current) return;
      setSize({
        w: Math.max(MIN_W, resizeRef.current.origW + (resizeRef.current.startX - ev.clientX)),
        h: Math.max(MIN_H, resizeRef.current.origH + (resizeRef.current.startY - ev.clientY)),
      });
    };
    const onUp = () => {
      resizeRef.current = null;
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      // 缩放结束后保存布局
      setSize((s) => {
        storage.settings.setValue('chatPanelLayout', JSON.stringify({ pos, size: s }));
        return s;
      });
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  }, [size, pos]);

  // 点击外部关闭话题下拉
  useEffect(() => {
    if (!topicDropdown) return;
    const handler = (e: MouseEvent) => {
      if (topicRef.current && !topicRef.current.contains(e.target as Node)) setTopicDropdown(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [topicDropdown]);

  // 自动滚动
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [chat.messages]);

  // 打开时聚焦输入
  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  const handleSend = useCallback(() => {
    const text = input.trim();
    if (!text || chat.isLoading) return;
    setInput('');
    chat.send(text);
  }, [input, chat]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // 在 /chat 页面不显示浮动面板（避免重复）
  if (location.pathname.startsWith('/chat')) return null;

  // 浮动按钮
  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all hover:scale-110 z-50"
        title="AI 对话"
      >
        <MessageCircle size={24} />
      </button>
    );
  }

  if (!chat.isReady) {
    return (
      <div
        className="fixed bg-white rounded-2xl shadow-2xl border border-gray-200 flex items-center justify-center z-50"
        style={{ right: 24 + pos.x, bottom: 24 + pos.y, width: size.w, height: size.h }}
      >
        <Loader2 className="animate-spin text-blue-500" size={24} />
      </div>
    );
  }

  return (
    <div
      ref={panelRef}
      className="fixed bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col z-50 overflow-hidden"
      style={{ right: 24 + pos.x, bottom: 24 + pos.y, width: size.w, height: size.h }}
    >
      {/* Resize handle */}
      <div
        onMouseDown={onResizeStart}
        className="absolute top-0 left-0 w-4 h-4 cursor-nw-resize z-10"
      >
        <div className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-gray-300 rounded-tl" />
      </div>

      {/* Header — 拖拽移动 */}
      <div
        onMouseDown={onDragStart}
        className="flex items-center justify-between px-3 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white shrink-0 cursor-move select-none"
      >
        <div className="flex items-center gap-1.5 min-w-0">
          <button
            onClick={(e) => { e.stopPropagation(); setSidebarOpen(!sidebarOpen); }}
            onMouseDown={(e) => e.stopPropagation()}
            className="p-1 hover:bg-white/20 rounded-md cursor-pointer transition-colors"
            title={sidebarOpen ? '收起侧栏' : '展开侧栏'}
          >
            {sidebarOpen ? <PanelLeftClose size={13} /> : <PanelLeftOpen size={13} />}
          </button>
          <span className="text-sm">{chat.currentAssistant?.emoji || '🤖'}</span>
          <span className="font-medium text-xs truncate">{chat.currentAssistant?.name || '助手'}</span>
        </div>
        <div className="flex items-center gap-0.5">
          <button onClick={() => navigate('/chat')} onMouseDown={(e) => e.stopPropagation()} className="p-1.5 hover:bg-white/20 rounded-lg cursor-pointer transition-colors" title="全屏聊天">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
            </svg>
          </button>
          <button onClick={() => navigate('/settings/ai')} onMouseDown={(e) => e.stopPropagation()} className="p-1.5 hover:bg-white/20 rounded-lg cursor-pointer transition-colors" title="AI 设置">
            <Settings size={12} />
          </button>
          <button onClick={() => setOpen(false)} onMouseDown={(e) => e.stopPropagation()} className="p-1.5 hover:bg-white/20 rounded-lg cursor-pointer transition-colors">
            <X size={14} />
          </button>
        </div>
      </div>

      {/* 主体：侧栏 + 聊天区 */}
      <div className="flex flex-1 min-h-0 overflow-hidden">
        {/* 可收起侧栏 */}
        {sidebarOpen && (
          <div className="w-40 border-r border-gray-200 flex flex-col bg-gray-50/50 shrink-0">
            {/* Tab 切换 */}
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setSidebarTab('assistants')}
                className={`flex-1 py-1.5 text-[11px] font-medium cursor-pointer transition-colors ${
                  sidebarTab === 'assistants' ? 'text-blue-600 border-b-2 border-blue-500' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                助手
              </button>
              <button
                onClick={() => setSidebarTab('topics')}
                className={`flex-1 py-1.5 text-[11px] font-medium cursor-pointer transition-colors ${
                  sidebarTab === 'topics' ? 'text-blue-600 border-b-2 border-blue-500' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                话题
              </button>
            </div>
            {/* 列表 */}
            <div className="flex-1 overflow-y-auto">
              {sidebarTab === 'assistants' ? (
                <div className="py-1">
                  {chat.assistants.map((a) => (
                    <button
                      key={a.id}
                      onClick={() => { chat.setCurrentAssistant(a.id); setSidebarTab('topics'); }}
                      className={`w-full flex items-center gap-1.5 px-2.5 py-2 text-[11px] cursor-pointer transition-colors ${
                        a.id === chat.currentAssistant?.id
                          ? 'bg-blue-50 text-blue-600 font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span>{a.emoji || '😀'}</span>
                      <span className="truncate">{a.name}</span>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="py-1">
                  <button
                    onClick={() => chat.createTopic()}
                    className="w-full flex items-center gap-1 px-2.5 py-2 text-[11px] text-blue-500 hover:bg-blue-50 cursor-pointer"
                  >
                    <Plus size={11} /> 新对话
                  </button>
                  {chat.topics.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => chat.setCurrentTopic(t.id)}
                      className={`w-full text-left px-2.5 py-2 text-[11px] cursor-pointer transition-colors truncate ${
                        t.id === chat.currentTopic?.id
                          ? 'bg-blue-50 text-blue-600 font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {t.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* 右侧聊天区 */}
        <div className="flex-1 flex flex-col min-w-0">

      {/* 话题 + 模型 工具栏 */}
      <div className="flex items-center gap-1 px-2 py-1.5 border-b border-gray-100 bg-gray-50/80 shrink-0">
        {/* 话题选择 */}
        <div className="relative flex-1 min-w-0" ref={topicRef}>
          <button
            onClick={() => setTopicDropdown(!topicDropdown)}
            className="w-full flex items-center gap-1.5 px-2 py-1 rounded-md hover:bg-gray-100 cursor-pointer transition-colors text-left"
          >
            <span className="text-[11px] text-gray-600 truncate">{chat.currentTopic?.name || '新对话'}</span>
            <ChevronDown size={10} className={`text-gray-400 shrink-0 transition-transform ${topicDropdown ? 'rotate-180' : ''}`} />
          </button>
          {topicDropdown && (
            <div className="absolute left-0 right-0 top-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 max-h-48 overflow-y-auto z-20">
              <button
                onClick={() => { chat.createTopic(); setTopicDropdown(false); }}
                className="w-full flex items-center gap-1.5 px-3 py-2 text-xs text-blue-500 hover:bg-blue-50 cursor-pointer"
              >
                <Plus size={12} /> 新对话
              </button>
              {chat.topics.map((t) => (
                <button
                  key={t.id}
                  onClick={() => { chat.setCurrentTopic(t.id); setTopicDropdown(false); }}
                  className={`w-full text-left px-3 py-2 text-xs cursor-pointer transition-colors truncate ${
                    t.id === chat.currentTopic?.id ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {t.name}
                </button>
              ))}
            </div>
          )}
        </div>
        {/* 模型选择 */}
        <button
          onClick={() => setModelDialogOpen(true)}
          className="flex items-center gap-1 px-2 py-1 rounded-md text-[11px] text-gray-500 hover:bg-gray-100 cursor-pointer transition-colors shrink-0"
        >
          <span className="max-w-20 truncate">{chat.selectedModel?.modelName || '模型'}</span>
          <ChevronDown size={10} className="text-gray-400" />
        </button>
        {/* 清空 */}
        <button
          onClick={chat.clearMessages}
          className="p-1 rounded-md hover:bg-gray-100 text-gray-400 hover:text-red-500 cursor-pointer transition-colors shrink-0"
          title="清空消息"
        >
          <Trash2 size={12} />
        </button>
      </div>

      {/* 消息区域 */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-3 py-3 space-y-3">
        {chat.messages.length === 0 && (
          <div className="text-center py-8">
            <p className="text-2xl mb-2">{chat.currentAssistant?.emoji || '🤖'}</p>
            <p className="text-xs text-gray-500">有问题随时问我</p>
          </div>
        )}
        {chat.messages.map((msg) => (
          <PanelMessageBubble key={msg.id} message={msg} />
        ))}
        {chat.isLoading && chat.messages[chat.messages.length - 1]?.content === '' && !chat.messages[chat.messages.length - 1]?.reasoning && (
          <div className="flex items-center gap-2 text-gray-400 text-xs">
            <Loader2 size={12} className="animate-spin" /> 思考中...
          </div>
        )}
      </div>

      {/* 错误 */}
      {chat.error && (
        <div className="px-3 py-1.5 bg-red-50 text-red-600 text-[11px] border-t border-red-100">{chat.error}</div>
      )}

      {/* 输入区域 */}
      <div className="px-2.5 py-2.5 border-t border-gray-100 shrink-0">
        <div className="flex items-end gap-2">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="输入消息..."
            rows={1}
            className="flex-1 resize-none px-2.5 py-2 text-xs rounded-lg border border-gray-200 focus:outline-none focus:border-blue-400 max-h-20"
          />
          {chat.isLoading ? (
            <button onClick={chat.stop} className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 cursor-pointer transition-colors shrink-0">
              <Square size={14} />
            </button>
          ) : (
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer transition-colors disabled:opacity-50 shrink-0"
            >
              <Send size={14} />
            </button>
          )}
        </div>
      </div>

      </div>{/* /右侧聊天区 */}
      </div>{/* /主体flex */}

      {/* 模型选择对话框（复用主聊天的） */}
      <ModelSelectorDialog
        open={modelDialogOpen}
        onClose={() => setModelDialogOpen(false)}
        selectedModel={chat.selectedModel}
        onSelect={chat.setSelectedModel}
      />
    </div>
  );
}

// ============================================================
// Panel 专用 MessageBubble（紧凑版）
// ============================================================

function PanelMessageBubble({ message }: { message: UIMessage }) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-3 py-2 text-xs leading-relaxed ${
          isUser
            ? 'bg-blue-500 text-white rounded-br-md'
            : message.error
              ? 'bg-red-50 text-red-700 border border-red-200 rounded-bl-md'
              : 'bg-gray-100 text-gray-800 rounded-bl-md'
        }`}
      >
        {!isUser && message.reasoning && (
          <ThinkingBlock content={message.reasoning} isStreaming={!!message.streaming && !message.content} />
        )}
        {isUser ? (
          <div className="whitespace-pre-wrap break-words">{message.content}</div>
        ) : (
          <MessageBlockRenderer content={message.content} isStreaming={message.streaming} />
        )}
        {message.streaming && !message.content && !message.reasoning && (
          <span className="inline-block w-1 h-3 bg-gray-400 rounded-sm ml-0.5 animate-pulse" />
        )}
      </div>
    </div>
  );
}
