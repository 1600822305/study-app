import { Math as MathTex, Collapsible, SpeakButton, PageHeader, LessonLayout, ExportButton } from '@/components/shared';
import { geo3dVectorNarrations } from './data/7.2/7.2-vector-narrations';
import { useProgress } from '@/hooks';

const progressItems = [
  { id: 'geo3d-vp:basics', label: '空间向量基础' },
];

export function Geo3dVectorPrereqPage() {
  const { items, toggle } = useProgress('geo3d-vector-prereq', progressItems);

  return (
    <div>
      <PageHeader
        stage="第七阶段 · 立体几何"
        title="7.1.5 空间向量前置知识"
        narration={geo3dVectorNarrations.basics}
        subtitle="从平面向量到空间向量——只多了一个 z 分量"
        tags={[
          { label: '难度 ★☆☆☆☆', color: 'green' },
          { label: '约0.5天', color: 'blue' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="7.1.5 空间向量前置知识" />
      </div>

      <LessonLayout progressItems={items} onToggle={toggle}>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 1: 空间向量基础 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="vector-basics" className="mb-3 scroll-mt-4">
        <Collapsible title="一、空间向量基础（快速回顾）" defaultOpen storageKey="geo3d-vp:basics" headerExtra={<SpeakButton text={geo3dVectorNarrations.basics} />}>
          <div className="space-y-0 text-lg text-gray-800">

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">从平面向量到空间向量</div>
              <div className="px-3 py-2 space-y-0">
                <p>平面向量：<MathTex tex="\vec{a} = (x, y)" />　只有两个分量</p>
                <p className="mt-1">空间向量：<MathTex tex="\vec{a} = (x, y, z)" />　多加一个 <MathTex tex="z" /> 分量，其他规则完全一样</p>
              </div>
            </div>

            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">坐标运算公式</div>
              <div className="px-3 py-2 space-y-0">
                <p>设 <MathTex tex="\vec{a} = (a_1, a_2, a_3)" />，<MathTex tex="\vec{b} = (b_1, b_2, b_3)" /></p>
                <div className="mt-2 space-y-1">
                  <div className="border-l-4 border-blue-400 pl-3">
                    <p><strong>加法：</strong><MathTex tex="\vec{a} + \vec{b} = (a_1 + b_1,\; a_2 + b_2,\; a_3 + b_3)" /></p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-3">
                    <p><strong>减法：</strong><MathTex tex="\vec{a} - \vec{b} = (a_1 - b_1,\; a_2 - b_2,\; a_3 - b_3)" /></p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-3">
                    <p><strong>数乘：</strong><MathTex tex="k\vec{a} = (ka_1,\; ka_2,\; ka_3)" /></p>
                  </div>
                  <div className="border-l-4 border-purple-400 pl-3">
                    <p><strong>点积：</strong><MathTex tex="\vec{a} \cdot \vec{b} = a_1 b_1 + a_2 b_2 + a_3 b_3" /></p>
                  </div>
                  <div className="border-l-4 border-purple-400 pl-3">
                    <p><strong>模长：</strong><MathTex tex="|\vec{a}| = \sqrt{a_1^2 + a_2^2 + a_3^2}" /></p>
                  </div>
                  <div className="border-l-4 border-green-400 pl-3">
                    <p><strong>中点坐标：</strong><MathTex tex="M = \left(\dfrac{x_1+x_2}{2},\; \dfrac{y_1+y_2}{2},\; \dfrac{z_1+z_2}{2}\right)" /></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">向量 <MathTex tex="\overrightarrow{AB}" /> 怎么算</div>
              <div className="px-3 py-2 space-y-0">
                <p>已知 <MathTex tex="A(x_1, y_1, z_1)" />，<MathTex tex="B(x_2, y_2, z_2)" /></p>
                <p className="mt-1"><MathTex tex="\overrightarrow{AB} = B - A = (x_2 - x_1,\; y_2 - y_1,\; z_2 - z_1)" /></p>
                <p className="mt-2 font-bold">记忆：终点坐标减起点坐标</p>
              </div>
            </div>

            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-800 border-b border-purple-300 bg-purple-100 text-lg">平行与垂直的坐标判定</div>
              <div className="px-3 py-2 space-y-0">
                <p>设 <MathTex tex="\vec{a} = (a_1, a_2, a_3)" />，<MathTex tex="\vec{b} = (b_1, b_2, b_3)" /></p>
                <p className="mt-1"><strong>平行</strong>（<MathTex tex="\vec{a} \parallel \vec{b}" />）：对应分量成比例</p>
                <p className="ml-4 text-xl"><MathTex tex="\dfrac{a_1}{b_1} = \dfrac{a_2}{b_2} = \dfrac{a_3}{b_3}" /></p>
                <p className="mt-1"><strong>垂直</strong>（<MathTex tex="\vec{a} \perp \vec{b}" />）：点积等于零</p>
                <p className="ml-4"><MathTex tex="\vec{a} \cdot \vec{b} = a_1 b_1 + a_2 b_2 + a_3 b_3 = 0" /></p>
              </div>
            </div>

            <div className="border border-red-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-red-800 border-b border-red-300 bg-red-100 text-lg">向量夹角公式</div>
              <div className="px-3 py-2 space-y-0">
                <p>设 <MathTex tex="\vec{a}" /> 与 <MathTex tex="\vec{b}" /> 的夹角为 <MathTex tex="\theta" />，则</p>
                <p className="mt-1 ml-4 text-xl"><MathTex tex="\cos\theta = \dfrac{\vec{a} \cdot \vec{b}}{|\vec{a}| \cdot |\vec{b}|}" /></p>
                <p className="mt-2 font-bold">点积除以两个模长的乘积，就是夹角的余弦值</p>
              </div>
            </div>

            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">两点间距离公式</div>
              <div className="px-3 py-2 space-y-0">
                <p>已知 <MathTex tex="A(x_1, y_1, z_1)" />，<MathTex tex="B(x_2, y_2, z_2)" /></p>
                <p className="mt-1"><MathTex tex="|AB| = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}" /></p>
                <p className="mt-2 font-bold">本质就是 <MathTex tex="|\overrightarrow{AB}|" />，即向量 <MathTex tex="\overrightarrow{AB}" /> 的模长</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      </LessonLayout>
    </div>
  );
}
