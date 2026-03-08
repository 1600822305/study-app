import { ProgressTracker } from '../ProgressTracker';

import type { ProgressItem } from '@/types';

interface LessonLayoutProps {
  progressItems: ProgressItem[];
  onToggle: (id: string) => void;
  children: React.ReactNode;
}

export function LessonLayout({ progressItems, onToggle, children }: LessonLayoutProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-6 print:block">
      <div className="flex-1 min-w-0">{children}</div>
      <div className="lg:w-72 shrink-0 print:hidden">
        <div className="lg:sticky lg:top-6">
          <ProgressTracker items={progressItems} onToggle={onToggle} />
        </div>
      </div>
    </div>
  );
}
