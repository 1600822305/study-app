import { PageHeader, LessonLayout, ExportButton } from '@/components/shared';
import { trigSolveNarrations } from './data/solve-narrations';
import { trigSolveProgressItems } from './data/solve-progress';
import { useProgress } from '@/hooks';

export function SolveTrianglePage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('trig-solve', trigSolveProgressItems);

  return (
    <div>
      <PageHeader
        stage="第五阶段 · 三角世界"
        title="5.3 解三角形"
        narration={trigSolveNarrations.intro}
        subtitle="正弦定理、余弦定理、面积公式——解答题常考"
        tags={[
          { label: '难度 ★★★☆☆', color: 'amber' },
          { label: '高考必考', color: 'blue' },
          { label: '约2天', color: 'purple' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="5.3 解三角形" />
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
          <p className="text-2xl mb-2">🚧</p>
          <p className="text-lg font-bold text-yellow-800">内容开发中</p>
          <p className="text-yellow-700 mt-1">正弦定理、余弦定理（勾股定理的推广）、面积公式 S = ½ab·sinC</p>
        </div>
      </LessonLayout>
    </div>
  );
}
