// ============================================================
// ChatPage — 主聊天页面
// 参考 Cherry Studio：Tab 切换侧边栏（助手/话题）+ 右侧聊天区
// ============================================================

import { useState, useRef, useEffect, useCallback } from 'react';
import { Trash2, Send, Square, Loader2, ChevronDown } from 'lucide-react';

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

  const [input, setInput] = useState('');
  const [sidebarTab, setSidebarTab] = useState<SidebarTab>('assistants');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // 自动滚动到底部
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // 选择助手后自动切换到话题 Tab（参考 CS）
  const handleSelectAssistant = useCallback(async (id: string) => {
    await setCurrentAssistant(id);
    setSidebarTab('topics');
  }, [setCurrentAssistant]);

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

  return (
    <div className="flex h-full">
      {/* ====== 左侧边栏（Tab 切换） ====== */}
      <div className="w-64 border-r border-gray-200 flex flex-col bg-gray-50/50 shrink-0">
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
              onSelectTopic={setCurrentTopic}
              onCreateTopic={createTopic}
              onDeleteTopic={deleteTopic}
              onRenameTopic={renameTopic}
            />
          )}
        </div>
      </div>

      {/* ====== 右侧聊天区 ====== */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <div className="h-12 border-b border-gray-200 flex items-center justify-between px-4 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-lg">{currentAssistant?.emoji || '😀'}</span>
            <span className="font-medium text-sm text-gray-800">{currentAssistant?.name || '助手'}</span>
            <span className="text-xs text-gray-400">·</span>
            <span className="text-xs text-gray-500 truncate max-w-48">{currentTopic?.name || '新对话'}</span>
          </div>
          <div className="flex items-center gap-1.5">
            {/* 模型切换按钮 */}
            <button
              onClick={() => setModelDialogOpen(true)}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs
                border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300
                cursor-pointer transition-colors"
              title="切换模型"
            >
              <span className="max-w-32 truncate">
                {selectedModel ? selectedModel.modelName : '选择模型'}
              </span>
              <ChevronDown size={12} className="text-gray-400 shrink-0" />
            </button>
            <button
              onClick={clearMessages}
              className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
              title="清空消息"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>

        {/* 消息区域 */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
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
        <div className="border-t border-gray-200 px-4 py-3">
          <div className="flex items-end gap-2">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="输入消息... (Enter 发送, Shift+Enter 换行)"
              rows={1}
              className="flex-1 resize-none rounded-xl border border-gray-200 px-3 py-2.5 text-sm
                focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent
                max-h-32 min-h-[40px]"
              style={{ height: 'auto', overflow: 'auto' }}
              onInput={(e) => {
                const el = e.currentTarget;
                el.style.height = 'auto';
                el.style.height = Math.min(el.scrollHeight, 128) + 'px';
              }}
            />
            {isLoading ? (
              <button
                onClick={stop}
                className="shrink-0 p-2.5 rounded-xl bg-red-500 text-white hover:bg-red-600 cursor-pointer transition-colors"
              >
                <Square size={16} />
              </button>
            ) : (
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="shrink-0 p-2.5 rounded-xl bg-blue-500 text-white hover:bg-blue-600
                  disabled:bg-gray-300 disabled:cursor-not-allowed cursor-pointer transition-colors"
              >
                <Send size={16} />
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
