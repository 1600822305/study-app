import { PageHeader } from '@/components/shared';

export function FunctionGraphPrereqPage() {
  return (
    <div>
      <PageHeader
        stage="第三阶段 · 函数思维"
        title="3.2.5 函数图像前置知识"
        subtitle="坐标系·描点画图·图像变换基础"
        tags={[
          { label: '难度 ★☆☆☆☆', color: 'green' },
          { label: '约30分钟', color: 'purple' },
        ]}
      />
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
        <p className="text-amber-800 text-lg font-bold">🚧 页面建设中...</p>
      </div>
    </div>
  );
}
