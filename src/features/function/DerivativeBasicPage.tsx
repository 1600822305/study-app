import { PageHeader } from '@/components/shared';

export function DerivativeBasicPage() {
  return (
    <div>
      <PageHeader
        stage="第三阶段 · 函数思维"
        title="3.4 导数基础"
        subtitle="解答题压轴的基础 · 2天"
        tags={[
          { label: '难度 ★★★★☆', color: 'red' },
          { label: '解答题14-17分', color: 'red' },
          { label: '约8-10小时', color: 'purple' },
        ]}
      />
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
        <p className="text-amber-800 text-lg font-bold">🚧 页面建设中...</p>
      </div>
    </div>
  );
}
