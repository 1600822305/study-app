import { PageHeader, LessonLayout, ExportButton, PageBreak } from '@/components/shared';

export function PrintTestPage() {
  // 生成测试行：每行标注行号，用于打印后精确测量一页能塞多少行
  const lines = Array.from({ length: 80 }, (_, i) => i + 1);

  return (
    <div>
      <PageHeader
        stage="第五阶段 · 三角世界"
        title="5.4 打印测量基准页"
        subtitle="用于校准打印排版量化标准——请打印此页并记录每页最后一行编号"
        tags={[
          { label: '测试页', color: 'purple' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="5.4 打印测量基准" />
      </div>

      <LessonLayout progressItems={[]} onToggle={() => {}}>

        {/* ====== 区块 A：短文本行（不折行）====== */}
        <section className="mb-4">
          <h2 className="text-lg font-bold text-gray-800 mb-2 border-b pb-1">区块 A：短文本行（space-y-0，不折行）</h2>
          <div className="space-y-0">
            {lines.map(n => (
              <p key={`a-${n}`} className="text-base text-gray-700">
                <span className="font-bold text-blue-600 inline-block w-8">{n}.</span>
                第 {n} 行 — 短文本不折行
              </p>
            ))}
          </div>
        </section>

        <PageBreak label="区块B开始" />

        {/* ====== 区块 B：短文本 space-y-1 ====== */}
        <section className="mb-4">
          <h2 className="text-lg font-bold text-gray-800 mb-2 border-b pb-1">区块 B：短文本（space-y-1）</h2>
          <div className="space-y-1">
            {lines.map(n => (
              <p key={`b-${n}`} className="text-base text-gray-700">
                <span className="font-bold text-green-600 inline-block w-8">{n}.</span>
                第 {n} 行 — space-y-1 间距
              </p>
            ))}
          </div>
        </section>

        <PageBreak label="区块C开始" />

        {/* ====== 区块 C：短文本 space-y-2 ====== */}
        <section className="mb-4">
          <h2 className="text-lg font-bold text-gray-800 mb-2 border-b pb-1">区块 C：短文本（space-y-2）</h2>
          <div className="space-y-2">
            {lines.map(n => (
              <p key={`c-${n}`} className="text-base text-gray-700">
                <span className="font-bold text-orange-600 inline-block w-8">{n}.</span>
                第 {n} 行 — space-y-2 间距
              </p>
            ))}
          </div>
        </section>

        <PageBreak label="区块D开始" />

        {/* ====== 区块 D：模拟卡片高度 ====== */}
        <section className="mb-4">
          <h2 className="text-lg font-bold text-gray-800 mb-2 border-b pb-1">区块 D：模拟卡片（p-2 border rounded）</h2>
          <p className="text-sm text-gray-500 mb-2">每个卡片含标题+2行内容，测量一页能放几个卡片。</p>
          <div className="space-y-2">
            {Array.from({ length: 30 }, (_, i) => i + 1).map(n => (
              <div key={`d-${n}`} className="bg-gray-50 rounded-lg p-2 border border-gray-200">
                <p className="font-bold text-gray-800">卡片 #{n}</p>
                <p className="text-gray-600">这是卡片内第一行内容，模拟知识点或公式说明文字。</p>
                <p className="text-gray-600">这是卡片内第二行内容，补充说明或示例。</p>
              </div>
            ))}
          </div>
        </section>

        <PageBreak label="区块E开始" />

        {/* ====== 区块 E：模拟大卡片（标题+4行）====== */}
        <section className="mb-4">
          <h2 className="text-lg font-bold text-gray-800 mb-2 border-b pb-1">区块 E：大卡片（标题+4行内容）</h2>
          <div className="space-y-2">
            {Array.from({ length: 20 }, (_, i) => i + 1).map(n => (
              <div key={`e-${n}`} className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                <p className="font-bold text-blue-800 mb-1">大卡片 #{n} — 标题区域</p>
                <p className="text-gray-700">第 1 行：知识点说明或公式描述文字内容。</p>
                <p className="text-gray-700">第 2 行：补充说明或记忆口诀。</p>
                <p className="text-gray-700">第 3 行：例题或应用场景。</p>
                <p className="text-gray-700">第 4 行：易错点提示或注意事项。</p>
              </div>
            ))}
          </div>
        </section>

      </LessonLayout>
    </div>
  );
}
