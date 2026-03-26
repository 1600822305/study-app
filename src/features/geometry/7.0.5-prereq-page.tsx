import { Math as MathTex, Collapsible, PageHeader, LessonLayout, ExportButton, PageBreak, Geo3dSvg, DebugGeo3dSvg, Geo3dDebugToggle } from '@/components/shared';
import { planeAxesDiagram, obliqueAxesDiagram } from './data/7.0.5/7.0.5-prereq-diagrams';
import { skewLinesDiagram } from './data/7.1/7.1-relation-diagrams';
import { geo3dPrereqProgressItems } from './data/7.0.5/7.0.5-prereq-progress';
import { useProgress } from '@/hooks';

export function Geo3dPrereqPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('geo3d-prereq', geo3dPrereqProgressItems);

  return (
    <div>
      <PageHeader
        stage="第七阶段 · 立体几何"
        title="7.0.5 立体几何前置知识"
        subtitle="从平面到空间——认识基本几何体、学会点线面的语言"
        tags={[
          { label: '难度 ★☆☆☆☆', color: 'green' },
          { label: '高考 15-20 分', color: 'red' },
          { label: '约0.5天', color: 'blue' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="7.0.5 立体几何前置知识" />
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 1: 点线面的符号 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="notation" className="mb-3 scroll-mt-4">
        <Collapsible title="一、点线面的符号表示" defaultOpen storageKey="geo3d-prereq:notation">
          <div className="space-y-0 text-lg text-gray-800">

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">三个基本元素</div>
              <div className="px-3 py-2 space-y-0">
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-blue-50 rounded-lg p-2 border border-blue-200 text-center">
                    <p className="font-bold text-blue-700 text-xl">点</p>
                    <p>用大写字母</p>
                    <p><MathTex tex="A, B, C, P" /></p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-2 border border-green-200 text-center">
                    <p className="font-bold text-green-700 text-xl">直线</p>
                    <p>用两个大写字母或小写字母</p>
                    <p><MathTex tex="AB,\; l,\; m" /></p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-2 border border-purple-200 text-center">
                    <p className="font-bold text-purple-700 text-xl">平面</p>
                    <p>用希腊字母</p>
                    <p><MathTex tex="\alpha,\; \beta,\; \gamma" /></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">位置关系符号</div>
              <div className="px-3 py-2 space-y-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-center">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="py-1 text-left pl-2">符号</th>
                        <th className="py-1">含义</th>
                        <th className="py-1">例子</th>
                        <th className="py-1">读作</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-left pl-2"><MathTex tex="\in" /></td>
                        <td className="py-1">点属于（在……上）</td>
                        <td className="py-1"><MathTex tex="A \in l" /></td>
                        <td className="py-1">点 A 在直线 l 上</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-left pl-2"><MathTex tex="\notin" /></td>
                        <td className="py-1">点不属于</td>
                        <td className="py-1"><MathTex tex="A \notin \alpha" /></td>
                        <td className="py-1">点 A 不在平面 <MathTex tex="\alpha" /> 上</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-left pl-2"><MathTex tex="\subset" /></td>
                        <td className="py-1">线在面内</td>
                        <td className="py-1"><MathTex tex="l \subset \alpha" /></td>
                        <td className="py-1">直线 l 在平面 <MathTex tex="\alpha" /> 内</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-left pl-2"><MathTex tex="\parallel" /></td>
                        <td className="py-1">平行</td>
                        <td className="py-1"><MathTex tex="l \parallel m" /></td>
                        <td className="py-1">直线 l 平行于直线 m</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-left pl-2"><MathTex tex="\perp" /></td>
                        <td className="py-1">垂直</td>
                        <td className="py-1"><MathTex tex="l \perp \alpha" /></td>
                        <td className="py-1">直线 l 垂直于平面 <MathTex tex="\alpha" /></td>
                      </tr>
                      <tr>
                        <td className="py-1 text-left pl-2"><MathTex tex="\cap" /></td>
                        <td className="py-1">交（相交）</td>
                        <td className="py-1"><MathTex tex="\alpha \cap \beta = l" /></td>
                        <td className="py-1">两个平面交于直线 l</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">点线面的位置关系（全部情况）</div>
              <div className="px-3 py-2 space-y-0">
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-blue-50 rounded-lg p-2 border border-blue-200">
                    <p className="font-bold text-blue-700 text-center">线与线</p>
                    <p className="mt-1">① 平行</p>
                    <p>② 相交（有公共点）</p>
                    <p>③ <strong>异面</strong>（不平行也不相交）</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-2 border border-green-200">
                    <p className="font-bold text-green-700 text-center">线与面</p>
                    <p className="mt-1">① 线在面内</p>
                    <p>② 线与面平行</p>
                    <p>③ 线与面相交</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-2 border border-purple-200">
                    <p className="font-bold text-purple-700 text-center">面与面</p>
                    <p className="mt-1">① 平行</p>
                    <p>② 相交</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-1">
                  <DebugGeo3dSvg data={skewLinesDiagram} width={120} height={100} className="shrink-0" />
                  <p><strong>"异面直线"</strong>是空间特有的概念——两条直线既不平行也不相交（不在同一个平面内）</p>
                </div>
              </div>
            </div>

            <div className="mt-1 border-l-4 border-purple-400 pl-3">
              <p><strong>平面的基本公理</strong></p>
              <p className="mt-1">公理1：三个不共线的点确定一个平面</p>
              <p className="mt-1">公理2：如果一条直线上两个点在平面内，则整条直线在平面内</p>
              <p className="mt-1">公理3：两个平面有一个公共点，则它们有且只有一条公共直线（交线）</p>
              <p className="mt-1">公理4：平行于同一条直线的两条直线互相平行（平行的传递性）</p>
              <p className="mt-1"><strong>推论</strong>：两条相交直线确定一个平面；一条直线和直线外一点确定一个平面</p>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 2: 画直观图 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="drawing" className="mb-3 scroll-mt-4">
        <Collapsible title="二、画直观图（斜二测画法）" defaultOpen storageKey="geo3d-prereq:drawing">
          <div className="space-y-0 text-lg text-gray-800">

            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">先回忆：平面直角坐标系</div>
              <div className="px-3 py-2 space-y-0">
                <div className="flex items-start gap-3">
                  <DebugGeo3dSvg data={planeAxesDiagram} width={100} height={100} className="shrink-0" />
                  <div>
                    <p>初中学过的坐标系只有两个轴：</p>
                    <p className="mt-1"><strong>x 轴</strong>（水平）和 <strong>y 轴</strong>（竖直），能表示平面上的点</p>
                    <p className="mt-1">但平面坐标系画不了立体图形，所以需要加一个<strong>深度方向</strong></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">斜二测画法：从 2D 到 3D</div>
              <div className="px-3 py-2 space-y-0">
                <div className="flex items-start gap-3">
                  <DebugGeo3dSvg data={obliqueAxesDiagram} width={120} height={110} className="shrink-0" />
                  <p>在平面坐标系基础上，加一条 y 轴表示深度（朝左下 <MathTex tex="45°" />，长度取一半），原来的 y 轴变成 z 轴：</p>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-1">
                  <div className="bg-blue-50 rounded-lg p-2 border border-blue-200 text-center">
                    <p className="font-bold text-blue-700">x 轴</p>
                    <p>水平方向</p>
                    <p className="font-bold">长度不变</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-2 border border-green-200 text-center">
                    <p className="font-bold text-green-700">y 轴</p>
                    <p>与 x 轴成 <MathTex tex="45°" /></p>
                    <p className="font-bold">长度取一半</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-2 border border-purple-200 text-center">
                    <p className="font-bold text-purple-700">z 轴</p>
                    <p>竖直方向</p>
                    <p className="font-bold">长度不变</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">画图步骤（以长方体为例）</div>
              <div className="px-3 py-1.5 space-y-0">
                <p><strong>第 1 步</strong>：画底面——先画一个平行四边形（x 方向原长，y 方向取半，<MathTex tex="45°" /> 斜向右上）</p>
                <p className="mt-1"><strong>第 2 步</strong>：画高——从底面四个顶点向上画竖直线，长度不变</p>
                <p className="mt-1"><strong>第 3 步</strong>：连接顶面——连接四条竖线的顶端</p>
                <p className="mt-1"><strong>第 4 步</strong>：虚线——被遮挡看不见的棱画成虚线</p>
                <div className="flex justify-center mt-2">
                  <Geo3dSvg shape={{ type: 'prism', n: 4 }} width={140} height={120} />
                </div>
                <p className="mt-1"><strong>其他常见几何体的画法</strong>：</p>
                <p className="mt-1">三棱锥：先画底面三角形（y 方向取半），再从底面一点向上画顶点</p>
                <p className="mt-1">圆柱、圆锥：底面的圆画成<strong>椭圆</strong>（x 方向不变，y 方向取半）</p>
                <p className="mt-1">注意：不管什么形状，<strong>x 方向和 z 方向长度不变，y 方向始终取半</strong></p>
              </div>
            </div>

            <div className="border border-red-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-red-800 border-b border-red-300 bg-red-100 text-lg">高考中画图的作用</div>
              <div className="px-3 py-1.5 space-y-0">
                <p>高考不会专门考"画直观图"，但你需要：</p>
                <p className="mt-1">① <strong>看懂题目配图</strong>（知道哪些面是底面、哪些棱互相平行）</p>
                <p className="mt-1">② <strong>自己画草图辅助思考</strong>（建立坐标系时需要画图）</p>
                <p className="mt-1">③ <strong>区分实线和虚线</strong>（虚线表示看不见的棱，解题时容易忽略）</p>
                <p className="mt-1">④ <strong>标记关键点</strong>（中点、垂足、交点等，计算前先在图上标清楚）</p>
              </div>
            </div>


          </div>
        </Collapsible>
      </section>

      </LessonLayout>
      <Geo3dDebugToggle />
    </div>
  );
}
