// ============================================================
// TopicsPanel — 话题列表（参考 CS Topics）
// 顶部 AddButton + 列表
// ============================================================

import { Plus } from 'lucide-react';

import { TopicItem } from './TopicItem';

interface TopicsPanelProps {
  topics: { id: string; name: string; pinned?: boolean }[];
  currentTopicId: string;
  onSelectTopic: (id: string) => void;
  onCreateTopic: () => Promise<void>;
  onDeleteTopic: (id: string) => Promise<void>;
  onRenameTopic: (id: string, name: string) => Promise<void>;
}

export function TopicsPanel({
  topics, currentTopicId, onSelectTopic, onCreateTopic, onDeleteTopic, onRenameTopic,
}: TopicsPanelProps) {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* 顶部添加按钮 */}
      <div className="px-2.5 pt-3 pb-2">
        <button
          onClick={onCreateTopic}
          className="w-full flex items-center justify-center gap-1.5 h-8 rounded-lg border border-dashed
            border-gray-300 text-gray-500 text-xs hover:border-blue-400 hover:text-blue-500
            cursor-pointer transition-colors"
        >
          <Plus size={14} />
          新话题
        </button>
      </div>

      {/* 话题列表 */}
      <div className="flex-1 overflow-y-auto px-2.5 pb-3 space-y-0.5">
        {topics.map((t) => (
          <TopicItem
            key={t.id}
            topic={t}
            active={t.id === currentTopicId}
            onSelect={() => onSelectTopic(t.id)}
            onDelete={() => onDeleteTopic(t.id)}
            onRename={(name) => onRenameTopic(t.id, name)}
          />
        ))}
      </div>
    </div>
  );
}
