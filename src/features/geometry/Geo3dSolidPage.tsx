import { PageHeader } from '@/components/shared';

export function Geo3dSolidPage() {
  return (
    <div>
      <PageHeader
        stage="第七阶段 · 立体几何"
        title="7.3 空间几何体"
        subtitle="体积、表面积计算——柱锥台球的公式与应用"
        tags={[
          { label: '即将上线', color: 'blue' },
        ]}
      />
      <div className="bg-white rounded-xl border border-gray-200 p-6 text-center text-gray-500 text-lg">
        <p className="text-2xl mb-2">🚧</p>
        <p>本节内容正在编写中，敬请期待</p>
      </div>
    </div>
  );
}
