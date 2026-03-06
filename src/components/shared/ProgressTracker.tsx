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
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-gray-800">学习进度</h3>
        <span className="text-sm font-medium text-blue-600">
          {completed}/{total} ({percent}%)
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div
          className="bg-blue-500 h-2.5 rounded-full transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>

      <div className="space-y-2">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onToggle(item.id)}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors text-left cursor-pointer"
          >
            {item.checked ? (
              <CheckCircle className="text-green-500 shrink-0" size={20} />
            ) : (
              <Circle className="text-gray-300 shrink-0" size={20} />
            )}
            <span
              className={`text-sm ${item.checked ? 'text-gray-400 line-through' : 'text-gray-700'}`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
