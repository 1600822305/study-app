import { PageHeader } from '@/components/shared';

export function DerivativeHardPage() {
  return (
    <div>
      <PageHeader
        stage="第十阶段 · 导数进阶"
        title="10.1 导数压轴"
        subtitle="不等式证明、零点问题、恒成立与存在性——拿步骤分的策略"
        tags={[
          { label: '难度 ★★★★★', color: 'red' },
          { label: '压轴 14-17 分', color: 'red' },
          { label: '约4天', color: 'blue' },
        ]}
      />
      <div className="text-center py-20 text-gray-400 text-lg">内容开发中...</div>
    </div>
  );
}
