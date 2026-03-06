// ============================================================
// ChatPage — 主聊天页面
// 桌面：Tab 切换侧边栏（助手/话题）+ 右侧聊天区
// 移动端：侧边栏变抽屉覆盖 + 全屏聊天区 + 底部安全区
// ============================================================

import { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Trash2, Send, Square, Loader2, ChevronDown, Menu, X } from 'lucide-react';

import { isMobile } from '@/lib/env';
import { SolidBridge } from '@/shared/bridges';
import SwipeDrawer from '@/solid/components/SwipeDrawer.solid';
import { useChat } from './ChatContext';
import { TabButton } from './components/TabButton';
import { AssistantsPanel } from './components/AssistantsPanel';
import { TopicsPanel } from './components/TopicsPanel';
import { MessageBubble } from './components/MessageBubble';
import { EmptyState } from './components/EmptyState';
import { ModelSelectorDialog } from './components/ModelSelectorDialog';

type SidebarTab = 'assistants' | 'topics';

export function ChatPage() {
  const {
    assistants, currentAssistant, setCurrentAssistant,
    topics, currentTopic, createTopic, deleteTopic, renameTopic, setCurrentTopic,
    messages, isLoading, error, send, stop, clearMessages,
    selectedModel, setSelectedModel,
    isReady,
  } = useChat();

  const [modelDialogOpen, setModelDialogOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [input, setInput] = useState('');
  const [sidebarTab, setSidebarTab] = useState<SidebarTab>('assistants');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);

  const mobile = isMobile();

  // 监听 SolidJS 创建的 Portal 容器
  useEffect(() => {
    if (!mobile) return;
    const findContainer = () => {
      const el = document.getElementById('solid-chat-drawer');
      if (el !== portalTarget) setPortalTarget(el);
    };
    findContainer();
    const observer = new MutationObserver(findContainer);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [mobile, portalTarget]);

  // SolidBridge 的 onOpenChange 回调
  const handleDrawerChange = useCallback((open: boolean) => {
    setDrawerOpen(open);
  }, []);

  // 自动滚动到底部
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // 选择助手后自动切换到话题 Tab（参考 CS）
  const handleSelectAssistant = useCallback(async (id: string) => {
    await setCurrentAssistant(id);
    setSidebarTab('topics');
  }, [setCurrentAssistant]);

  // 移动端选择话题后关闭抽屉
  const handleSelectTopic = useCallback((id: string) => {
    setCurrentTopic(id);
    if (mobile) setDrawerOpen(false);
  }, [setCurrentTopic, mobile]);

  const handleSend = useCallback(() => {
    if (!input.trim() || isLoading) return;
    send(input.trim());
    setInput('');
    inputRef.current?.focus();
  }, [input, isLoading, send]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isReady) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader2 className="animate-spin text-blue-500" size={32} />
      </div>
    );
  }

  // ==================== 侧边栏内容（桌面/移动端复用） ====================
  const sidebarContent = (
    <>
      {/* Tab 切换栏 */}
      <div className="flex mx-3 pt-2 pb-0 border-b border-gray-200">
        <TabButton active={sidebarTab === 'assistants'} onClick={() => setSidebarTab('assistants')}>
          助手
        </TabButton>
        <TabButton active={sidebarTab === 'topics'} onClick={() => setSidebarTab('topics')}>
          话题
        </TabButton>
      </div>

      {/* Tab 内容 */}
      <div className="flex-1 overflow-hidden flex flex-col">
        {sidebarTab === 'assistants' ? (
          <AssistantsPanel
            assistants={assistants}
            currentAssistantId={currentAssistant?.id || ''}
            onSelectAssistant={handleSelectAssistant}
          />
        ) : (
          <TopicsPanel
            topics={topics}
            currentTopicId={currentTopic?.id || ''}
            onSelectTopic={handleSelectTopic}
            onCreateTopic={createTopic}
            onDeleteTopic={deleteTopic}
            onRenameTopic={renameTopic}
          />
        )}
      </div>
    </>
  );

  return (
    <div className="flex h-full relative">
      {/* ====== 桌面侧边栏 ====== */}
      {!mobile && (
        <div className="w-64 border-r border-gray-200 flex flex-col bg-gray-50/50 shrink-0">
          {sidebarContent}
        </div>
      )}

      {/* ====== 移动端：SolidJS 手势抽屉 ====== */}
      {mobile && (
        <>
          <SolidBridge
            component={SwipeDrawer as any}
            props={{
              open: drawerOpen,
              onOpenChange: handleDrawerChange,
              width: 288,
              enableSwipeGesture: true,
              portalId: 'solid-chat-drawer',
            }}
            style={{ display: 'contents' }}
            debugName="SwipeDrawer"
          />
          {/* React Portal：将侧边栏内容注入 SolidJS 创建的容器 */}
          {portalTarget && createPortal(
            <div className="flex flex-col h-full">
              {/* 抽屉头部 */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-gray-200 shrink-0">
                <span className="font-medium text-sm text-gray-700">对话管理</span>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>
              {sidebarContent}
            </div>,
            portalTarget,
          )}
        </>
      )}

      {/* ====== 聊天区 ====== */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <div className={`border-b border-gray-200 flex items-center justify-between shrink-0
          ${mobile ? 'h-11 px-2.5' : 'h-12 px-4'}`}
        >
          <div className="flex items-center gap-1.5 min-w-0">
            {/* 移动端：菜单按钮 */}
            {mobile && (
              <button
                onClick={() => setDrawerOpen(true)}
                className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 cursor-pointer shrink-0"
              >
                <Menu size={18} />
              </button>
            )}
            <span className={mobile ? 'text-base' : 'text-lg'}>{currentAssistant?.emoji || '😀'}</span>
            <span className={`font-medium text-gray-800 truncate ${mobile ? 'text-xs max-w-20' : 'text-sm'}`}>
              {currentAssistant?.name || '助手'}
            </span>
            <span className="text-xs text-gray-400">·</span>
            <span className={`text-xs text-gray-500 truncate ${mobile ? 'max-w-24' : 'max-w-48'}`}>
              {currentTopic?.name || '新对话'}
            </span>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            {/* 模型切换按钮 */}
            <button
              onClick={() => setModelDialogOpen(true)}
              className={`flex items-center gap-1 rounded-lg text-xs
                border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300
                cursor-pointer transition-colors ${mobile ? 'px-1.5 py-1' : 'px-2.5 py-1.5'}`}
              title="切换模型"
            >
              <span className={`truncate ${mobile ? 'max-w-16 text-[11px]' : 'max-w-32'}`}>
                {selectedModel ? selectedModel.modelName : '模型'}
              </span>
              <ChevronDown size={12} className="text-gray-400 shrink-0" />
            </button>
            <button
              onClick={clearMessages}
              className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
              title="清空消息"
            >
              <Trash2 size={mobile ? 14 : 16} />
            </button>
          </div>
        </div>

        {/* 消息区域 */}
        <div className={`flex-1 overflow-y-auto space-y-4
          ${mobile ? 'px-3 py-3' : 'px-4 py-4'}`}
        >
          {messages.length === 0 ? (
            <EmptyState assistantName={currentAssistant?.name} />
          ) : (
            messages.map((msg) => <MessageBubble key={msg.id} message={msg} />)
          )}
          {error && (
            <div className="text-center text-xs text-red-500 bg-red-50 rounded-lg px-3 py-2">{error}</div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* 输入区域 */}
        <div className={`border-t border-gray-200 ${mobile ? 'px-2.5 py-2' : 'px-4 py-3'}`}
          style={mobile ? { paddingBottom: 'max(0.5rem, var(--sab, 0px))' } : undefined}
        >
          <div className="flex items-end gap-2">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={mobile ? '输入消息...' : '输入消息... (Enter 发送, Shift+Enter 换行)'}
              rows={1}
              className={`flex-1 resize-none rounded-xl border border-gray-200 text-sm
                focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent
                ${mobile ? 'px-2.5 py-2 max-h-24 min-h-[36px]' : 'px-3 py-2.5 max-h-32 min-h-[40px]'}`}
              style={{ height: 'auto', overflow: 'auto' }}
              onInput={(e) => {
                const el = e.currentTarget;
                el.style.height = 'auto';
                el.style.height = Math.min(el.scrollHeight, mobile ? 96 : 128) + 'px';
              }}
            />
            {isLoading ? (
              <button
                onClick={stop}
                className={`shrink-0 rounded-xl bg-red-500 text-white hover:bg-red-600 cursor-pointer transition-colors
                  ${mobile ? 'p-2' : 'p-2.5'}`}
              >
                <Square size={mobile ? 14 : 16} />
              </button>
            ) : (
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className={`shrink-0 rounded-xl bg-blue-500 text-white hover:bg-blue-600
                  disabled:bg-gray-300 disabled:cursor-not-allowed cursor-pointer transition-colors
                  ${mobile ? 'p-2' : 'p-2.5'}`}
              >
                <Send size={mobile ? 14 : 16} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 模型选择对话框 */}
      <ModelSelectorDialog
        open={modelDialogOpen}
        onClose={() => setModelDialogOpen(false)}
        selectedModel={selectedModel}
        onSelect={setSelectedModel}
      />
    </div>
  );
}
