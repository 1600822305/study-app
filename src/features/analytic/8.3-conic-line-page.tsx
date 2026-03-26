import { PageHeader } from '@/components/shared';

export function ConicLinePage() {
  return (
    <div>
      <PageHeader
        stage="第八阶段 · 解析几何"
        title="8.3 直线与圆锥曲线"
        subtitle="联立韦达、弦长中点、定值定点——解答题套路集中突破"
        tags={[
          { label: '难度 ★★★★☆', color: 'red' },
          { label: '高考 15-17 分', color: 'red' },
          { label: '约4天', color: 'blue' },
        ]}
      />
      <div className="text-center py-20 text-gray-400 text-lg">内容开发中...</div>
    </div>
  );
}
