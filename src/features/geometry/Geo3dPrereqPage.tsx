import { Math as MathTex, Collapsible, SpeakButton, PageHeader, LessonLayout, ExportButton, PageBreak, Geo3dSvg } from '@/components/shared';
import { geo3dPrereqNarrations } from './data/geo3d-prereq-narrations';
import { axiom1Diagram, axiom2Diagram, axiom3Diagram, axiom4Diagram, skewLinesDiagram, planeAxesDiagram, obliqueAxesDiagram } from './data/geo3d-prereq-diagrams';
import { geo3dPrereqProgressItems } from './data/geo3d-prereq-progress';
import { useProgress } from '@/hooks';
import { scrollToId } from '@/lib/scroll';

export function Geo3dPrereqPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('geo3d-prereq', geo3dPrereqProgressItems);

  return (
    <div>
      <PageHeader
        stage="第七阶段 · 立体几何"
        title="7.0 立体几何前置知识"
        narration={geo3dPrereqNarrations.intro}
        subtitle="从平面到空间——认识基本几何体、学会点线面的语言"
        tags={[
          { label: '难度 ★☆☆☆☆', color: 'green' },
          { label: '高考 15-20 分', color: 'red' },
          { label: '约0.5天', color: 'blue' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="7.0 立体几何前置知识" />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-3 mb-0">
        <p className="font-bold text-gray-800 mb-2">📋 知识地图</p>
        <div className="text-gray-600 grid grid-cols-2 gap-x-4 gap-y-1">
          <button onClick={() => scrollToId('shapes')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">一、五种基本几何体</button>
          <button onClick={() => scrollToId('axioms')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">三、平面的四个公理</button>
          <button onClick={() => scrollToId('notation')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">二、点线面的符号</button>
          <button onClick={() => scrollToId('drawing')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">四、画直观图</button>
        </div>
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 1: 五种基本几何体 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="shapes" className="mb-3 scroll-mt-4">
        <Collapsible title="一、五种基本几何体" defaultOpen storageKey="geo3d-prereq:shapes" headerExtra={<SpeakButton text={geo3dPrereqNarrations.shapes} />}>
          <div className="space-y-0 text-lg text-gray-800">

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">从平面到空间</div>
              <div className="px-3 py-2 space-y-0">
                <p>之前学的三角形、四边形、圆都是<strong>平面图形</strong>（画在纸上的）</p>
                <p className="mt-1">现在要学<strong>空间几何体</strong>（有长、宽、高，占据空间的物体）</p>
                <p className="mt-1">空间几何体分两大类：</p>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  <div className="bg-blue-50 rounded-lg p-2 border border-blue-200 text-center">
                    <p className="font-bold text-blue-700">多面体</p>
                    <p>所有面都是<strong>平面</strong></p>
                    <p>棱柱、棱锥</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-2 border border-green-200 text-center">
                    <p className="font-bold text-green-700">旋转体</p>
                    <p>有<strong>曲面</strong>（弯的面）</p>
                    <p>圆柱、圆锥、球</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 棱柱 */}
            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">棱柱（像铅笔、积木）</div>
              <div className="px-3 py-2 space-y-0">
                <p><strong>特征</strong>：上下两个面（底面）完全一样且互相平行，侧面都是平行四边形</p>
                <p className="mt-1"><strong>命名规则</strong>：底面是几边形就叫几棱柱</p>
                <div className="grid grid-cols-3 gap-2 mt-1">
                  <div className="bg-gray-50 rounded p-2 border border-gray-200 text-center">
                    <Geo3dSvg shape={{ type: 'prism', n: 3 }} className="mx-auto" />
                    <p className="font-bold">三棱柱</p>
                    <p>底面是三角形</p>
                  </div>
                  <div className="bg-gray-50 rounded p-2 border border-gray-200 text-center">
                    <Geo3dSvg shape={{ type: 'prism', n: 4 }} className="mx-auto" />
                    <p className="font-bold">四棱柱</p>
                    <p>底面是四边形</p>
                  </div>
                  <div className="bg-gray-50 rounded p-2 border border-gray-200 text-center">
                    <Geo3dSvg shape={{ type: 'prism', n: 6 }} className="mx-auto" />
                    <p className="font-bold">六棱柱</p>
                    <p>底面是六边形</p>
                  </div>
                </div>
                <p className="mt-1"><strong>特殊棱柱</strong>：侧棱垂直于底面的棱柱叫<strong>直棱柱</strong>（站得"正"的）</p>
                <p className="mt-1"><strong>长方体和正方体</strong>就是特殊的四棱柱（高考最常见的载体）</p>
              </div>
            </div>

            {/* 棱锥 */}
            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">棱锥（像金字塔、帐篷）</div>
              <div className="px-3 py-2 space-y-0">
                <p><strong>特征</strong>：一个底面是多边形，其余各面都是三角形，这些三角形共用一个顶点</p>
                <p className="mt-1"><strong>命名规则</strong>：底面是几边形就叫几棱锥</p>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  <div className="bg-gray-50 rounded p-2 border border-gray-200 text-center">
                    <Geo3dSvg shape={{ type: 'pyramid', n: 3 }} className="mx-auto" />
                    <p className="font-bold">三棱锥（四面体）</p>
                    <p>底面是三角形，共 4 个面</p>
                    <p>高考最常考！</p>
                  </div>
                  <div className="bg-gray-50 rounded p-2 border border-gray-200 text-center">
                    <Geo3dSvg shape={{ type: 'pyramid', n: 4 }} className="mx-auto" />
                    <p className="font-bold">四棱锥</p>
                    <p>底面是四边形，共 5 个面</p>
                    <p>金字塔形状</p>
                  </div>
                </div>
                <p className="mt-1"><strong>正三棱锥</strong>：底面是正三角形，顶点在底面正上方（对称的）</p>
              </div>
            </div>

            {/* 旋转体 */}
            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-800 border-b border-purple-300 bg-purple-100 text-lg">圆柱、圆锥、球</div>
              <div className="px-3 py-2 space-y-0">
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-gray-50 rounded p-2 border border-gray-200 text-center">
                    <Geo3dSvg shape={{ type: 'cylinder' }} className="mx-auto" />
                    <p className="font-bold">圆柱</p>
                    <p>矩形绕一边旋转一圈</p>
                  </div>
                  <div className="bg-gray-50 rounded p-2 border border-gray-200 text-center">
                    <Geo3dSvg shape={{ type: 'cone' }} className="mx-auto" />
                    <p className="font-bold">圆锥</p>
                    <p>直角三角形绕直角边旋转</p>
                  </div>
                  <div className="bg-gray-50 rounded p-2 border border-gray-200 text-center">
                    <Geo3dSvg shape={{ type: 'sphere' }} className="mx-auto" />
                    <p className="font-bold">球</p>
                    <p>半圆绕直径旋转一圈</p>
                  </div>
                </div>
                <p className="mt-1"><strong>母线</strong>：旋转时画出曲面的那条线段（圆柱的母线 = 侧面的高，圆锥的母线 = 斜边）</p>
              </div>
            </div>

            {/* 判断练习 */}
            <div className="border border-gray-300 rounded overflow-hidden" style={{ breakInside: 'avoid' }}>
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">想一想</div>
              <div className="px-3 py-2 grid grid-cols-2 gap-1 text-lg">
                <p>① 粉笔盒是什么几何体？</p>
                <p>④ 足球是什么几何体？</p>
                <p>② 埃及金字塔是什么？</p>
                <p>⑤ 易拉罐是什么？</p>
                <p>③ 漏斗的形状像什么？</p>
                <p>⑥ 三棱锥有几个面？</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 2: 点线面的符号 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="notation" className="mb-3 scroll-mt-4">
        <Collapsible title="二、点线面的符号表示" defaultOpen storageKey="geo3d-prereq:notation" headerExtra={<SpeakButton text={geo3dPrereqNarrations.notation} />}>
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
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-left pl-2"><MathTex tex="\in" /></td>
                        <td className="py-1">点属于（在……上）</td>
                        <td className="py-1"><MathTex tex="A \in l" /> 点 A 在直线 l 上</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-left pl-2"><MathTex tex="\notin" /></td>
                        <td className="py-1">点不属于</td>
                        <td className="py-1"><MathTex tex="A \notin \alpha" /> 点 A 不在平面 <MathTex tex="\alpha" /> 上</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-left pl-2"><MathTex tex="\subset" /></td>
                        <td className="py-1">线在面内</td>
                        <td className="py-1"><MathTex tex="l \subset \alpha" /> 直线 l 在平面 <MathTex tex="\alpha" /> 内</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-left pl-2"><MathTex tex="\parallel" /></td>
                        <td className="py-1">平行</td>
                        <td className="py-1"><MathTex tex="l \parallel m" /> 或 <MathTex tex="\alpha \parallel \beta" /></td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-left pl-2"><MathTex tex="\perp" /></td>
                        <td className="py-1">垂直</td>
                        <td className="py-1"><MathTex tex="l \perp \alpha" /> 直线 l 垂直于平面 <MathTex tex="\alpha" /></td>
                      </tr>
                      <tr>
                        <td className="py-1 text-left pl-2"><MathTex tex="\cap" /></td>
                        <td className="py-1">交（相交）</td>
                        <td className="py-1"><MathTex tex="\alpha \cap \beta = l" /> 两个平面交于直线 l</td>
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
                  <Geo3dSvg data={skewLinesDiagram} width={120} height={100} className="shrink-0" />
                  <p><strong>"异面直线"</strong>是空间特有的概念——两条直线既不平行也不相交（不在同一个平面内）</p>
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 3: 平面的四个公理 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="axioms" className="mb-3 scroll-mt-4">
        <Collapsible title="三、平面的四个公理" defaultOpen storageKey="geo3d-prereq:axioms" headerExtra={<SpeakButton text={geo3dPrereqNarrations.axioms} />}>
          <div className="space-y-0 text-lg text-gray-800">

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">什么是公理？</div>
              <div className="px-3 py-2 space-y-0">
                <p>公理 = 不需要证明、大家公认的基本事实</p>
                <p className="mt-1">所有的定理、性质都从公理推出来，公理是"地基"</p>
              </div>
            </div>

            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">公理 1：确定平面</div>
              <div className="px-3 py-2 space-y-0">
                <div className="flex items-start gap-3">
                  <Geo3dSvg data={axiom1Diagram} width={140} height={100} className="shrink-0" />
                  <div>
                    <p className="font-bold"><strong>不在同一直线上的三个点确定一个平面</strong></p>
                    <p className="mt-1">通俗说：三条腿的凳子一定稳，四条腿的可能晃</p>
                    <p className="mt-1">符号：<MathTex tex="A, B, C" /> 不共线，则存在唯一平面 <MathTex tex="\alpha" /> 使得 <MathTex tex="A, B, C \in \alpha" /></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">公理 2：两面交线</div>
              <div className="px-3 py-2 space-y-0">
                <div className="flex items-start gap-3">
                  <Geo3dSvg data={axiom2Diagram} width={140} height={100} className="shrink-0" />
                  <div>
                    <p className="font-bold"><strong>两个平面有公共点，则它们有且仅有一条过该点的公共直线</strong></p>
                    <p className="mt-1">通俗说：两面墙碰到的地方一定是一条直线（交线）</p>
                    <p className="mt-1">符号：<MathTex tex="\alpha \cap \beta = l" /></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-800 border-b border-purple-300 bg-purple-100 text-lg">公理 3：线在面内</div>
              <div className="px-3 py-2 space-y-0">
                <div className="flex items-start gap-3">
                  <Geo3dSvg data={axiom3Diagram} width={140} height={100} className="shrink-0" />
                  <div>
                    <p className="font-bold"><strong>直线上两个点都在平面内，则整条直线都在平面内</strong></p>
                    <p className="mt-1">通俗说：直尺两端都贴着桌面，那整把尺子都贴着桌面</p>
                    <p className="mt-1">符号：<MathTex tex="A \in l,\; B \in l,\; A \in \alpha,\; B \in \alpha" /> 则 <MathTex tex="l \subset \alpha" /></p>
                    <p className="mt-1">用途：<strong>判断直线是否在平面内</strong>（找到线上两个点在面内即可）</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-red-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-red-800 border-b border-red-300 bg-red-100 text-lg">公理 4：平行传递</div>
              <div className="px-3 py-2 space-y-0">
                <div className="flex items-start gap-3">
                  <Geo3dSvg data={axiom4Diagram} width={120} height={100} className="shrink-0" />
                  <div>
                    <p className="font-bold"><strong>平行于同一条直线的两条直线互相平行</strong></p>
                    <p className="mt-1">符号：<MathTex tex="a \parallel b,\; c \parallel b" /> 则 <MathTex tex="a \parallel c" /></p>
                    <p className="mt-1">注意：这在平面几何中也成立，但在空间中它是公理（不能由其他公理推出）</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-300 rounded overflow-hidden" style={{ breakInside: 'avoid' }}>
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">对照记忆</div>
              <div className="px-3 py-2 space-y-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-center">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="py-1">公理</th>
                        <th className="py-1">一句话</th>
                        <th className="py-1">用途</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 font-bold">公理 1</td>
                        <td className="py-1">三点定一面</td>
                        <td className="py-1">确定平面</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 font-bold">公理 2</td>
                        <td className="py-1">两面交一线</td>
                        <td className="py-1">找交线</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 font-bold">公理 3</td>
                        <td className="py-1">两点定线在面内</td>
                        <td className="py-1">证线在面内</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">公理 4</td>
                        <td className="py-1">平行的传递</td>
                        <td className="py-1">证线线平行</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 4: 画直观图 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="drawing" className="mb-3 scroll-mt-4">
        <Collapsible title="四、画直观图（斜二测画法）" defaultOpen storageKey="geo3d-prereq:drawing" headerExtra={<SpeakButton text={geo3dPrereqNarrations.drawing} />}>
          <div className="space-y-0 text-lg text-gray-800">

            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">先回忆：平面直角坐标系</div>
              <div className="px-3 py-2 space-y-0">
                <div className="flex items-start gap-3">
                  <Geo3dSvg data={planeAxesDiagram} width={100} height={100} className="shrink-0" />
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
                  <Geo3dSvg data={obliqueAxesDiagram} width={120} height={110} className="shrink-0" />
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
              <div className="px-3 py-2 space-y-0">
                <p><strong>第 1 步</strong>：画底面——先画一个平行四边形（x 方向原长，y 方向取半，<MathTex tex="45°" /> 斜向右上）</p>
                <p className="mt-1"><strong>第 2 步</strong>：画高——从底面四个顶点向上画竖直线，长度不变</p>
                <p className="mt-1"><strong>第 3 步</strong>：连接顶面——连接四条竖线的顶端</p>
                <p className="mt-1"><strong>第 4 步</strong>：虚线——被遮挡看不见的棱画成虚线</p>
                <div className="flex justify-center mt-2">
                  <Geo3dSvg shape={{ type: 'prism', n: 4 }} width={140} height={120} />
                </div>
              </div>
            </div>

            <div className="border border-red-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-red-800 border-b border-red-300 bg-red-100 text-lg">高考中画图的作用</div>
              <div className="px-3 py-2 space-y-0">
                <p>高考不会专门考"画直观图"，但你需要：</p>
                <p className="mt-1">① <strong>看懂题目配图</strong>（知道哪些面是底面、哪些棱互相平行）</p>
                <p className="mt-1">② <strong>自己画草图辅助思考</strong>（建立坐标系时需要画图）</p>
                <p className="mt-1">③ <strong>区分实线和虚线</strong>（虚线表示看不见的棱，解题时容易忽略）</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      </LessonLayout>
    </div>
  );
}
