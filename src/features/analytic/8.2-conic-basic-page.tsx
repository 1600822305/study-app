import { PageHeader } from '@/components/shared';

export function ConicBasicPage() {
  return (
    <div>
      <PageHeader
        stage="第八阶段 · 解析几何"
        title="8.2 圆锥曲线基础"
        subtitle="椭圆、双曲线、抛物线的定义、方程与几何性质"
        tags={[
          { label: '难度 ★★★☆☆', color: 'amber' },
          { label: '高考重点', color: 'red' },
          { label: '约3天', color: 'blue' },
        ]}
      />
      <div className="text-center py-20 text-gray-400 text-lg">内容开发中...</div>
    </div>
  );
}
