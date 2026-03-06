// ============================================================
// TopicItem — 话题条目（参考 CS TopicListItem）
// 名称 + hover 显示 X 删除按钮，双击内联重命名，置顶 Pin 图标
// ============================================================

import { useState, useRef, useEffect } from 'react';
import { Pin, X, Trash2 } from 'lucide-react';

interface TopicItemProps {
  topic: { id: string; name: string; pinned?: boolean };
  active: boolean;
  onSelect: () => void;
  onDelete: () => void;
  onRename: (name: string) => void;
}

export function TopicItem({ topic, active, onSelect, onDelete, onRename }: TopicItemProps) {
  const [editing, setEditing] = useState(false);
  const [editName, setEditName] = useState(topic.name);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const deleteTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const commitRename = () => {
    if (editName.trim() && editName.trim() !== topic.name) {
      onRename(editName.trim());
    }
    setEditing(false);
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirmDelete) {
      // 二次点击确认删除
      onDelete();
      setConfirmDelete(false);
      if (deleteTimerRef.current) clearTimeout(deleteTimerRef.current);
    } else {
      // 首次点击，进入确认状态（2 秒超时复位）
      setConfirmDelete(true);
      deleteTimerRef.current = setTimeout(() => setConfirmDelete(false), 2000);
    }
  };

  // cleanup timer
  useEffect(() => () => { if (deleteTimerRef.current) clearTimeout(deleteTimerRef.current); }, []);

  return (
    <div
      onClick={editing ? undefined : onSelect}
      className={`group relative flex flex-col px-3 py-[7px] rounded-lg text-[13px] cursor-pointer transition-colors
        ${active ? 'bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.08)]' : 'hover:bg-gray-100/80'}
      `}
    >
      <div className="flex items-center gap-1 h-5">
        {editing ? (
          <input
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            onBlur={commitRename}
            onKeyDown={(e) => { if (e.key === 'Enter') commitRename(); if (e.key === 'Escape') setEditing(false); }}
            className="flex-1 min-w-0 bg-transparent text-[13px] font-inherit p-0 border-none focus:outline-none"
            autoFocus
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          <span
            className="flex-1 truncate text-left"
            onDoubleClick={(e) => { e.stopPropagation(); setEditing(true); setEditName(topic.name); }}
          >
            {topic.name}
          </span>
        )}

        {/* 置顶图标 */}
        {topic.pinned && (
          <span className="shrink-0">
            <Pin size={12} className="text-gray-400" />
          </span>
        )}

        {/* 删除按钮（hover 显示，参考 CS X 按钮） */}
        {!topic.pinned && !editing && (
          <button
            onClick={handleDeleteClick}
            className="shrink-0 opacity-0 group-hover:opacity-100 flex items-center justify-center
              w-5 h-5 rounded transition-all cursor-pointer"
          >
            {confirmDelete ? (
              <Trash2 size={13} className="text-red-500" />
            ) : (
              <X size={13} className="text-gray-400 hover:text-gray-600" />
            )}
          </button>
        )}
      </div>
    </div>
  );
}
