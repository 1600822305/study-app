// ============================================================
// ErrorBlock — 错误信息展示
// ============================================================

import { XCircle } from 'lucide-react';
import type { ErrorMessageBlock } from '../types';

interface Props {
  block: ErrorMessageBlock;
}

export function ErrorBlock({ block }: Props) {
  return (
    <div className="my-1.5 flex items-start gap-2 px-3 py-2.5 rounded-lg bg-red-50 border border-red-200 text-sm">
      <XCircle size={16} className="text-red-400 shrink-0 mt-0.5" />
      <span className="text-red-700 text-xs leading-relaxed">{block.content}</span>
    </div>
  );
}
