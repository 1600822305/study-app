import { PageHeader } from '@/components/shared';

export function StatisticsPage() {
  return (
    <div>
      <PageHeader
        stage="第九阶段 · 概率统计"
        title="9.2 统计与随机变量"
        subtitle="分布列、期望方差、频率分布直方图、回归分析、独立性检验"
        tags={[
          { label: '难度 ★★★☆☆', color: 'amber' },
          { label: '高考 15-22 分', color: 'red' },
          { label: '约3天', color: 'blue' },
        ]}
      />
      <div className="text-center py-20 text-gray-400 text-lg">内容开发中...</div>
    </div>
  );
}
