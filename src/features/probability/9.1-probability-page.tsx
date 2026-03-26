import { PageHeader } from '@/components/shared';

export function ProbabilityPage() {
  return (
    <div>
      <PageHeader
        stage="第九阶段 · 概率统计"
        title="9.1 概率基础"
        subtitle="古典概型、互斥与独立事件、条件概率、二项分布"
        tags={[
          { label: '难度 ★★☆☆☆', color: 'green' },
          { label: '高考必考', color: 'red' },
          { label: '约2天', color: 'blue' },
        ]}
      />
      <div className="text-center py-20 text-gray-400 text-lg">内容开发中...</div>
    </div>
  );
}
