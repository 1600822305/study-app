import { PageHeader, LessonLayout, ExportButton } from '@/components/shared';
import { trigIdentityNarrations } from './data/identity-narrations';
import { trigIdentityProgressItems } from './data/identity-progress';
import { useProgress } from '@/hooks';

export function TrigIdentityPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('trig-identity', trigIdentityProgressItems);

  return (
    <div>
      <PageHeader
        stage="第五阶段 · 三角世界"
        title="5.2 三角恒等变换"
        narration={trigIdentityNarrations.intro}
        subtitle="和差角公式、倍角公式、辅助角公式——高考最爱考"
        tags={[
          { label: '难度 ★★★☆☆', color: 'amber' },
          { label: '高考必考', color: 'blue' },
          { label: '约2天', color: 'purple' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="5.2 三角恒等变换" />
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
          <p className="text-2xl mb-2">🚧</p>
          <p className="text-lg font-bold text-yellow-800">内容开发中</p>
          <p className="text-yellow-700 mt-1">和差角公式、倍角公式、辅助角公式 a·sinx + b·cosx = √(a²+b²)·sin(x+φ)</p>
        </div>
      </LessonLayout>
    </div>
  );
}
