import { PageHeader } from '@/components/shared';

export function Stage5ExamPage() {
  return (
    <div>
      <PageHeader
        stage="第五阶段 · 三角世界"
        title="阶段考试"
        subtitle="三角函数 + 解三角形 综合测试"
        tags={[
          { label: '考试', color: 'red' },
          { label: '120分', color: 'blue' },
        ]}
      />

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center mt-4">
        <p className="text-2xl mb-2">🚧</p>
        <p className="text-lg font-bold text-yellow-800">考试开发中</p>
        <p className="text-yellow-700 mt-1">完成第五阶段全部教学内容后开放</p>
      </div>
    </div>
  );
}
