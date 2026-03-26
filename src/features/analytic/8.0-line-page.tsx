import { PageHeader } from '@/components/shared';

export function LinePage() {
  return (
    <div>
      <PageHeader
        stage="第八阶段 · 解析几何"
        title="8.0 直线"
        subtitle="直线方程、两直线关系、点到直线距离"
        tags={[
          { label: '难度 ★★☆☆☆', color: 'green' },
          { label: '基础工具', color: 'blue' },
          { label: '约1天', color: 'blue' },
        ]}
      />
      <div className="text-center py-20 text-gray-400 text-lg">内容开发中...</div>
    </div>
  );
}
