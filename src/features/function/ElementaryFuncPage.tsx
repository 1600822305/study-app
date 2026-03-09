import { PageHeader } from '@/components/shared';

export function ElementaryFuncPage() {
  return (
    <div>
      <PageHeader
        stage="第三阶段 · 函数思维"
        title="3.2 基本初等函数"
        subtitle="指数·对数·幂函数 · 2天"
        tags={[
          { label: '难度 ★★★☆☆', color: 'amber' },
          { label: '必考', color: 'blue' },
          { label: '约8-10小时', color: 'purple' },
        ]}
      />
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
        <p className="text-amber-800 text-lg font-bold">🚧 页面建设中...</p>
      </div>
    </div>
  );
}
