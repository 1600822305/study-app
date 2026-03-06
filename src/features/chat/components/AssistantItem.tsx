// ============================================================
// AssistantItem — 助手条目（参考 CS AssistantItem）
// 37px 高度，emoji + name，hover 显示 ⋮ 菜单
// ============================================================

import { useState } from 'react';
import { MoreVertical } from 'lucide-react';

interface AssistantItemProps {
  assistant: { id: string; name: string; emoji: string; description: string };
  isActive: boolean;
  onSelect: () => void;
}

export function AssistantItem({ assistant, isActive, onSelect }: AssistantItemProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onSelect}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative flex items-center h-[37px] px-2 rounded-lg cursor-pointer border border-transparent transition-colors
        ${isActive
          ? 'bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.08)] border-gray-100'
          : 'hover:bg-gray-100/80'
        }
      `}
    >
      <div className="flex items-center gap-2 min-w-0 flex-1 text-[13px] text-gray-800">
        <span className="text-base shrink-0">{assistant.emoji}</span>
        <span className="truncate">{assistant.name}</span>
      </div>
      {(isActive || hovered) && (
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center
          w-[22px] h-[22px] rounded-full border border-gray-200 bg-white"
        >
          <MoreVertical size={12} className="text-gray-400" />
        </div>
      )}
    </div>
  );
}
