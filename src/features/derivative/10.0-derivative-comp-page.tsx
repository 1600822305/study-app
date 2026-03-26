import { PageHeader } from '@/components/shared';

export function DerivativeCompPage() {
  return (
    <div>
      <PageHeader
        stage="第十阶段 · 导数进阶"
        title="10.0 导数综合"
        subtitle="含参函数单调性讨论、极值最值、切线问题"
        tags={[
          { label: '难度 ★★★★☆', color: 'red' },
          { label: '解答题', color: 'red' },
          { label: '约3天', color: 'blue' },
        ]}
      />
      <div className="text-center py-20 text-gray-400 text-lg">内容开发中...</div>
    </div>
  );
}
