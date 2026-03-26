import { CheckCircle, Circle } from 'lucide-react';

import type { ProgressItem } from '@/types';

interface ProgressTrackerProps {
  items: ProgressItem[];
  onToggle: (id: string) => void;
}

export function ProgressTracker({ items, onToggle }: ProgressTrackerProps) {
  const completed = items.filter((i) => i.checked).length;
  const total = items.length;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-3 shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <h3 className="font-bold text-gray-800 text-sm">学习进度</h3>
        <span className="text-xs font-medium text-blue-600">
          {completed}/{total}
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
        <div
          className="bg-blue-500 h-1.5 rounded-full transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>

      <div className="space-y-0.5">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onToggle(item.id)}
            className="w-full flex items-start gap-1.5 px-1 py-1 rounded hover:bg-gray-50 transition-colors text-left cursor-pointer"
          >
            {item.checked ? (
              <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={14} />
            ) : (
              <Circle className="text-gray-300 shrink-0 mt-0.5" size={14} />
            )}
            <span
              className={`text-xs leading-tight ${item.checked ? 'text-gray-400 line-through' : 'text-gray-600'}`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
