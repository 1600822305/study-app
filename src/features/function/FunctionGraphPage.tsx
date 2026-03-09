import { PageHeader } from '@/components/shared';

export function FunctionGraphPage() {
  return (
    <div>
      <PageHeader
        stage="第三阶段 · 函数思维"
        title="3.3 函数图像与零点"
        subtitle="数形结合 · 1天"
        tags={[
          { label: '难度 ★★★☆☆', color: 'amber' },
          { label: '常考小题', color: 'blue' },
          { label: '约4-6小时', color: 'purple' },
        ]}
      />
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
        <p className="text-amber-800 text-lg font-bold">🚧 页面建设中...</p>
      </div>
    </div>
  );
}
