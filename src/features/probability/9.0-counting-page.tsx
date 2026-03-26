import { PageHeader } from '@/components/shared';

export function CountingPage() {
  return (
    <div>
      <PageHeader
        stage="第九阶段 · 概率统计"
        title="9.0 计数原理"
        subtitle="加法原理、乘法原理、排列组合、二项式定理"
        tags={[
          { label: '难度 ★★☆☆☆', color: 'green' },
          { label: '基础工具', color: 'blue' },
          { label: '约2天', color: 'blue' },
        ]}
      />
      <div className="text-center py-20 text-gray-400 text-lg">内容开发中...</div>
    </div>
  );
}
