import { PageHeader } from '@/components/shared';

export function DerivativePrereqPage() {
  return (
    <div>
      <PageHeader
        stage="第三阶段 · 函数思维"
        title="3.3.5 导数前置知识"
        subtitle="极限直觉·变化率·切线概念"
        tags={[
          { label: '难度 ★★☆☆☆', color: 'green' },
          { label: '约1小时', color: 'purple' },
        ]}
      />
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
        <p className="text-amber-800 text-lg font-bold">🚧 页面建设中...</p>
      </div>
    </div>
  );
}
