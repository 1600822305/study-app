import { PageHeader } from '@/components/shared';

export function CirclePage() {
  return (
    <div>
      <PageHeader
        stage="第八阶段 · 解析几何"
        title="8.1 圆"
        subtitle="圆的方程、直线与圆的位置关系、切线与弦长"
        tags={[
          { label: '难度 ★★☆☆☆', color: 'green' },
          { label: '过渡章节', color: 'blue' },
          { label: '约1天', color: 'blue' },
        ]}
      />
      <div className="text-center py-20 text-gray-400 text-lg">内容开发中...</div>
    </div>
  );
}
