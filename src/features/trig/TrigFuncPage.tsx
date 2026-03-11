import { PageHeader, LessonLayout, ExportButton } from '@/components/shared';
import { trigFuncNarrations } from './data/func-narrations';
import { trigFuncProgressItems } from './data/func-progress';
import { useProgress } from '@/hooks';

export function TrigFuncPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('trig-func', trigFuncProgressItems);

  return (
    <div>
      <PageHeader
        stage="第五阶段 · 三角世界"
        title="5.1 三角函数"
        narration={trigFuncNarrations.intro}
        subtitle="sin、cos、tan 的定义、诱导公式、图像与性质"
        tags={[
          { label: '难度 ★★★☆☆', color: 'amber' },
          { label: '高考必考', color: 'blue' },
          { label: '约3天', color: 'purple' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="5.1 三角函数" />
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
          <p className="text-2xl mb-2">🚧</p>
          <p className="text-lg font-bold text-yellow-800">内容开发中</p>
          <p className="text-yellow-700 mt-1">sin/cos/tan 定义、诱导公式、y=Asin(ωx+φ) 图像与性质</p>
        </div>
      </LessonLayout>
    </div>
  );
}
