import { Math as MathTex, Collapsible, PageHeader, LessonLayout, ExportButton, PageBreak, DebugGeo3dSvg, Geo3dDebugToggle } from '@/components/shared';
import { skewLinesDiagram, perpLinesDiagram, intersectingLinesDiagram, axiom4Diagram, cuboidParallelDiagram, cuboidIntersectDiagram, cuboidSkewDiagram, cuboidPerpDiagram, triangularPrismDiagram, lineInPlaneDiagram, lineParallelPlaneDiagram, lineIntersectPlaneDiagram, linePerpPlaneDiagram, cuboidPlainDiagram, cuboidLineInPlaneDiagram, cuboidLpParallelDiagram, cuboidLpParallelPropDiagram, cuboidLpIntersectDiagram, cuboidLpPerpDetDiagram, cuboidExProof1Diagram, cuboidExProof2Diagram, cuboidExProof3Diagram, cuboidExProof4Diagram, cuboidExProof5Diagram, cuboidExPpProof1Diagram, cuboidExPpProof2Diagram, cuboidExPpProof3Diagram, cuboidExPpProof4Diagram, cuboidPpDetExDiagram, cuboidPpPropExDiagram, cuboidPpPerpDetExDiagram, cuboidPpPerpPropExDiagram, lpParallelDetDiagram, lpParallelPropDiagram, ppParallelDetDiagram, ppParallelPropDiagram, lpPerpDetDiagram, lpPerpPropDiagram, lpPerpProp1Diagram, lpPerpProp2Diagram, lpPerpProp3Diagram, ppPerpDetDiagram, ppPerpPropDiagram } from './data/7.1/7.1-relation-diagrams';
import { geo3dRelationProgressItems } from './data/7.1/7.1-relation-progress';
import { useProgress } from '@/hooks';
import { scrollToId } from '@/lib/scroll';

export function Geo3dRelationPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('geo3d-relation', geo3dRelationProgressItems);

  return (
    <div>
      <PageHeader
        stage="第七阶段 · 立体几何"
        title="7.1 点线面位置关系"
        subtitle="从线线关系出发，一步步升级到线面、面面"
        tags={[
          { label: '难度 ★★★☆☆', color: 'amber' },
          { label: '高考 10-15 分', color: 'red' },
          { label: '约3天', color: 'blue' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="7.1 点线面位置关系" />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-3 mb-0">
        <p className="font-bold text-gray-800 mb-2">📋 学习路线（循序渐进）</p>
        <div className="text-gray-800 grid grid-cols-2 gap-x-4 gap-y-1">
          <button onClick={() => scrollToId('symbols')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">一、符号速学</button>
          <button onClick={() => scrollToId('plane-plane')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">四、面与面（再升级）</button>
          <button onClick={() => scrollToId('line-line')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">二、线与线（平行/相交/异面）</button>
          <button onClick={() => scrollToId('theorem-map')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">五、八大定理关系图</button>
          <button onClick={() => scrollToId('line-plane')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">三、线与面（升级！）</button>
          <button onClick={() => scrollToId('proof-strategy')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">六、证明套路</button>
        </div>
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 1: 符号速学 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="symbols" className="mb-3 scroll-mt-4">
        <Collapsible title="一、符号速学（2分钟搞定）" defaultOpen storageKey="geo3d-relation:symbols">
          <div className="space-y-0 text-lg text-gray-800">

            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">先认识"角色"</div>
              <div className="px-3 py-2 space-y-0">
                <p>立体几何里只有三种对象，我们给它们起名字：</p>
                <div className="grid grid-cols-3 gap-1.5 mt-1.5">
                  <div className="bg-blue-50 rounded-lg p-1.5 border border-blue-200 text-center">
                    <p className="font-bold text-blue-700 text-lg">点</p>
                    <p>用大写字母</p>
                    <p className="font-bold"><MathTex tex="A, B, C, O" /></p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-1.5 border border-green-200 text-center">
                    <p className="font-bold text-green-700 text-lg">直线</p>
                    <p>用小写字母</p>
                    <p className="font-bold"><MathTex tex="a, b, l, m" /></p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-1.5 border border-purple-200 text-center">
                    <p className="font-bold text-purple-700 text-lg">平面</p>
                    <p>用希腊字母</p>
                    <p className="font-bold"><MathTex tex="\alpha, \beta, \gamma" /></p>
                    <p>读作：阿尔法、贝塔、伽马</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">再认识"关系符号"</div>
              <div className="px-3 py-2 space-y-0">
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="bg-blue-50 rounded-lg p-2 border border-blue-200">
                    <p className="font-bold text-lg"><MathTex tex="\parallel" /> 平行</p>
                    <p>读作“平行于”</p>
                    <p><MathTex tex="a \parallel b" /> 表示直线 a 和直线 b 平行</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-2 border border-blue-200">
                    <p className="font-bold text-lg"><MathTex tex="\perp" /> 垂直</p>
                    <p>读作“垂直于”</p>
                    <p><MathTex tex="a \perp b" /> 表示直线 a 和直线 b 垂直</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-2 border border-green-200">
                    <p className="font-bold text-lg"><MathTex tex="\subset" /> 在...内</p>
                    <p>读作“包含于”</p>
                    <p><MathTex tex="a \subset \beta" /> 表示直线 a 在平面 <MathTex tex="\beta" /> 内</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-2 border border-green-200">
                    <p className="font-bold text-lg"><MathTex tex="\cap" /> 交于</p>
                    <p>读作“交”</p>
                    <p><MathTex tex="\alpha \cap \beta = l" /> 表示平面 <MathTex tex="\alpha" /> 和 <MathTex tex="\beta" /> 交于直线 l</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">参考图：长方体（高考最常见的载体）</div>
              <div className="px-3 py-2 space-y-0">
                <div className="flex items-start gap-4">
                  <DebugGeo3dSvg data={cuboidPlainDiagram} width={200} height={160} />
                  <div>
                    <p>这个长方体是我们后面所有例子的"主角"</p>
                    <p className="mt-1"><strong>顶面</strong>的四个顶点：A B C D</p>
                    <p className="mt-1"><strong>底面</strong>的四个顶点：<MathTex tex="A_1\ B_1\ C_1\ D_1" /></p>
                    <p className="mt-1"><strong>棱</strong>就是边（如 <MathTex tex="AA_1" />、AB、<MathTex tex="A_1B_1" />）</p>
                    <p className="mt-1"><strong>面</strong>就是六个表面（如顶面 ABCD、底面 <MathTex tex="A_1B_1C_1D_1" />、侧面 <MathTex tex="ABB_1A_1" />）</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded p-2 mt-1">
              <p><strong>准备好了！</strong>记住这些符号和长方体，接下来我们从最简单的"线与线"开始，一步步升级到"线与面"、"面与面"</p>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak label="7.1 线与线的关系" />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 2a: 线与线 — 三种基本关系 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="line-line" className="mb-3 scroll-mt-4">
        <Collapsible title="二、线与线" defaultOpen storageKey="geo3d-relation:line-line">
          <div className="space-y-0 text-lg text-gray-800">

            <div className="bg-gray-50 border border-gray-200 rounded p-2">
              <p>空间中两条直线只有<strong>三种</strong>关系，没有第四种：</p>
            </div>

            {/* 平行 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">① 平行</div>
              <div className="px-3 py-2 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p><strong>定义</strong>：同一平面内不相交的两条直线叫做平行线</p>
                    <p className="mt-1">直线 a 和直线 b 互相平行，记作 <MathTex tex="a \parallel b" /></p>
                    <p className="mt-2"><strong>重要公理：平行传递</strong></p>
                    <p className="mt-1">平行于同一条直线的两条直线互相平行</p>
                    <p className="mt-1"><MathTex tex="a \parallel b" />，<MathTex tex="c \parallel b" /> 则 <MathTex tex="a \parallel c" /></p>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center"><DebugGeo3dSvg data={axiom4Diagram} width={120} height={100} /></div>
                </div>
                <div className="flex items-start gap-3 mt-2 pt-2 border-t border-gray-200">
                  <div className="flex-1">
                    <p className="font-bold">在长方体中找平行线：</p>
                    <p className="mt-1">AB <MathTex tex="\parallel" /> DC（面 ABCD 的对边）</p>
                    <p className="mt-1">AB <MathTex tex="\parallel" /> <MathTex tex="A_1B_1" />（上下对应的边）</p>
                    <p className="mt-1"><MathTex tex="AA_1" /> <MathTex tex="\parallel" /> <MathTex tex="BB_1" /> <MathTex tex="\parallel" /> <MathTex tex="CC_1" /> <MathTex tex="\parallel" /> <MathTex tex="DD_1" />（四条竖直边都互相平行，由平行传递得到）</p>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center"><DebugGeo3dSvg data={cuboidParallelDiagram} width={200} height={160} /></div>
                </div>
              </div>
            </div>

            {/* 相交 */}
            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">② 相交</div>
              <div className="px-3 py-2 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p><strong>定义</strong>：如果两条直线只有一个公共点，称这两条直线相交</p>
                    <p className="mt-1">直线 a 和直线 b 交于点 P，记作 <MathTex tex="a \cap b = P" /></p>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center"><DebugGeo3dSvg data={intersectingLinesDiagram} width={120} height={90} /></div>
                </div>
                <div className="flex items-start gap-3 mt-2 pt-2 border-t border-gray-200">
                  <div className="flex-1">
                    <p className="font-bold">在长方体中找相交线：</p>
                    <p className="mt-1">AB 和 BC 交于点 B</p>
                    <p className="mt-1">AB 和 <MathTex tex="BB_1" /> 交于点 B</p>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center"><DebugGeo3dSvg data={cuboidIntersectDiagram} width={200} height={160} /></div>
                </div>
              </div>
            </div>

            {/* 实战练习 */}
            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">实战练习：在三棱柱中找关系</div>
              <div className="px-3 py-2">
                <div className="flex items-start gap-3">
                  <div className="flex-1 space-y-1">
                    <p>如图，三棱柱 <MathTex tex="ABC\text{-}A_1B_1C_1" />，判断以下各组线的关系：</p>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-2">
                      <p>1. AB 和 <MathTex tex="A_1B_1" /> 是什么关系？</p>
                      <p>2. <MathTex tex="AA_1" /> 和 <MathTex tex="BB_1" /> 是什么关系？</p>
                      <p>3. AB 和 BC 是什么关系？</p>
                      <p>4. <MathTex tex="AA_1" /> 和 <MathTex tex="A_1B_1" /> 是什么关系？</p>
                    </div>
                    <div className="mt-1 print:hidden"><Collapsible title="查看答案">
                      <div className="grid grid-cols-2 gap-x-4">
                        <p>1. AB <MathTex tex="\parallel" /> <MathTex tex="A_1B_1" />（平行）</p>
                        <p>2. <MathTex tex="AA_1" /> <MathTex tex="\parallel" /> <MathTex tex="BB_1" />（平行）</p>
                        <p>3. AB 和 BC 交于点 B（相交）</p>
                        <p>4. <MathTex tex="AA_1" /> 和 <MathTex tex="A_1B_1" /> 交于点 <MathTex tex="A_1" />（相交）</p>
                      </div>
                    </Collapsible></div>
                    <div className="hidden print:block mt-1">
                      <p className="font-bold">答案：</p>
                      <div className="grid grid-cols-2 gap-x-4">
                        <p>1. AB <MathTex tex="\parallel" /> <MathTex tex="A_1B_1" />（平行）</p>
                        <p>2. <MathTex tex="AA_1" /> <MathTex tex="\parallel" /> <MathTex tex="BB_1" />（平行）</p>
                        <p>3. AB 和 BC 交于点 B（相交）</p>
                        <p>4. <MathTex tex="AA_1" /> 和 <MathTex tex="A_1B_1" /> 交于点 <MathTex tex="A_1" />（相交）</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center"><DebugGeo3dSvg data={triangularPrismDiagram} width={200} height={160} /></div>
                </div>
              </div>
            </div>

            <PageBreak />
            {/* 异面 */}
            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-800 border-b border-purple-300 bg-purple-100 text-lg">③ 异面（空间特有！）</div>
              <div className="px-3 py-2 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p><strong>数学定义</strong>：不在同一个平面内的两条直线（既不平行也不相交）</p>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center"><DebugGeo3dSvg data={skewLinesDiagram} width={120} height={90} /></div>
                </div>
                <div className="flex items-start gap-3 mt-2 pt-2 border-t border-gray-200">
                  <div className="flex-1">
                    <p className="font-bold">在长方体中找异面线：</p>
                    <p className="mt-1"><MathTex tex="AA_1" /> 和 BC 是异面的（一个竖直，一个在面 ABCD 上，不共面）</p>
                    <p className="mt-1">AB 和 <MathTex tex="CC_1" /> 是异面的（一个在面 ABCD 上，一个竖直）</p>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center"><DebugGeo3dSvg data={cuboidSkewDiagram} width={200} height={160} /></div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded p-2 mt-2">
                  <p className="font-bold text-yellow-800">怎么判断两条线是不是异面？</p>
                  <p className="mt-1">把两条线延长，如果既不平行也不相交，就是异面</p>
                </div>
              </div>
            </div>

            {/* 垂直 */}
            <div className="border border-red-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-red-800 border-b border-red-300 bg-red-100 text-lg">特殊关系：垂直</div>
              <div className="px-3 py-2 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p><strong>定义</strong>：两条直线所成的角为 90°，则称这两条直线互相垂直</p>
                    <p className="mt-1">直线 a 和直线 b 互相垂直，记作 <MathTex tex="a \perp b" /></p>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center"><DebugGeo3dSvg data={perpLinesDiagram} width={120} height={90} /></div>
                </div>
                <div className="flex items-start gap-3 mt-2 pt-2 border-t border-gray-200">
                  <div className="flex-1">
                    <p className="font-bold">注意：相交的线可以垂直，异面的线也可以垂直！</p>
                    <p className="mt-1">AB <MathTex tex="\perp" /> <MathTex tex="AA_1" />（相交垂直）</p>
                    <p className="mt-1">AB <MathTex tex="\perp" /> <MathTex tex="CC_1" />（异面垂直：因为 AB <MathTex tex="\parallel" /> DC，而 DC <MathTex tex="\perp" /> <MathTex tex="CC_1" />，所以 AB <MathTex tex="\perp" /> <MathTex tex="CC_1" />）</p>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center"><DebugGeo3dSvg data={cuboidPerpDiagram} width={200} height={160} /></div>
                </div>
              </div>
            </div>

            {/* 速查表 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">速查表：怎么证明线线关系？</div>
              <div className="px-3 py-2">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="py-1 pr-2 w-16">关系</th>
                      <th className="py-1 pr-2">怎么证？</th>
                      <th className="py-1">常用方法</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-1.5 pr-2 font-bold text-blue-700">平行</td>
                      <td className="py-1.5 pr-2">证两线无公共点且共面</td>
                      <td className="py-1.5">平行传递、线面平行性质（定理②）、面面平行性质（定理⑥）</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-1.5 pr-2 font-bold text-green-700">相交</td>
                      <td className="py-1.5 pr-2">找到公共点</td>
                      <td className="py-1.5">直接观察共用顶点，或联立方程求交点</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-1.5 pr-2 font-bold text-purple-700">异面</td>
                      <td className="py-1.5 pr-2">证不共面</td>
                      <td className="py-1.5">反证法：假设共面，推出矛盾</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 pr-2 font-bold text-red-700">垂直</td>
                      <td className="py-1.5 pr-2">证所成角为 90°</td>
                      <td className="py-1.5">线面垂直定义、向量内积为 0</td>
                    </tr>
                  </tbody>
                </table>
                <div className="mt-2 bg-amber-50 border border-amber-200 rounded p-2">
                  <p><strong>高考重点</strong>：证平行和证垂直是考试最常考的两类题，后面学的八大定理就是专门解决这两个问题的工具</p>
                  <p className="mt-1"><strong>核心思路</strong>：线线平行/垂直是基础，通过定理可以"升级"到线面、面面关系，也可以"降级"回来</p>
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak label="7.1 线与面（升级！）" />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 3: 线与面的关系 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="line-plane" className="mb-3 scroll-mt-4">
        <Collapsible title="三、线与面" defaultOpen storageKey="geo3d-relation:line-plane">
          <div className="space-y-0 text-lg text-gray-800">

            {/* 在面内 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">① 在面内</div>
              <div className="px-3 py-1">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p><strong>定义</strong>：直线上每个点都在平面上</p>
                    <p className="mt-1"><strong>符号</strong>：<MathTex tex="a \subset \beta" /></p>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center"><DebugGeo3dSvg data={lineInPlaneDiagram} width={140} height={80} /></div>
                </div>
                <div className="flex items-start gap-3 pt-1 border-t border-gray-200">
                  <div className="flex-1">
                    <p className="font-bold">在长方体中：</p>
                    <p className="mt-1">AB 在面 ABCD 内（<MathTex tex="AB \subset" /> 面 ABCD）</p>
                    <p className="mt-1"><MathTex tex="A_1B_1" /> 在面 <MathTex tex="A_1B_1C_1D_1" /> 内</p>
                  </div>
                  <div className="w-[180px] shrink-0 flex justify-center"><DebugGeo3dSvg data={cuboidLineInPlaneDiagram} width={160} height={120} /></div>
                </div>
              </div>
            </div>

            {/* 线面平行 */}
            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">② 平行</div>
              <div className="px-3 py-1">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p><strong>定义</strong>：直线和平面没有公共点</p>
                    <p className="mt-1"><strong>符号</strong>：<MathTex tex="a \parallel \beta" /></p>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center"><DebugGeo3dSvg data={lineParallelPlaneDiagram} width={140} height={80} /></div>
                </div>
                <div className="flex items-start gap-3 pt-1 border-t border-gray-200">
                  <div className="flex-1">
                    <p className="font-bold">在长方体中：</p>
                    <p className="mt-1">AB 平行于面 <MathTex tex="A_1B_1C_1D_1" />（AB 不在面 <MathTex tex="A_1B_1C_1D_1" /> 内，且和面 <MathTex tex="A_1B_1C_1D_1" /> 没有交点）</p>
                  </div>
                  <div className="w-[180px] shrink-0 flex justify-center"><DebugGeo3dSvg data={cuboidLpParallelDiagram} width={160} height={120} /></div>
                </div>
              </div>
            </div>

            {/* 线面相交 */}
            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">③ 相交</div>
              <div className="px-3 py-1">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p><strong>定义</strong>：直线和平面有且仅有一个公共点</p>
                    <p className="mt-1"><strong>符号</strong>：<MathTex tex="a \cap \beta = P" /></p>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center"><DebugGeo3dSvg data={lineIntersectPlaneDiagram} width={140} height={80} /></div>
                </div>
                <div className="flex items-start gap-3 pt-1 border-t border-gray-200">
                  <div className="flex-1">
                    <p className="font-bold">在长方体中：</p>
                    <p className="mt-1"><MathTex tex="AA_1" /> 和面 ABCD 交于点 A</p>
                  </div>
                  <div className="w-[180px] shrink-0 flex justify-center"><DebugGeo3dSvg data={cuboidLpIntersectDiagram} width={160} height={120} /></div>
                </div>
              </div>
            </div>

            {/* 实战练习：线与面 */}
            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">实战练习：在长方体中判断线面关系</div>
              <div className="px-3 py-1">
                <div className="flex items-start gap-2">
                  <div className="flex-1 space-y-0">
                    <p>如图，长方体 <MathTex tex="ABCD\text{-}A_1B_1C_1D_1" />，判断以下直线和平面的关系：</p>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-0 mt-1">
                      <p>1. AB 和面 ABCD 是什么关系？</p>
                      <p>2. AB 和面 <MathTex tex="A_1B_1C_1D_1" /> 是什么关系？</p>
                      <p>3. <MathTex tex="AA_1" /> 和面 ABCD 是什么关系？</p>
                      <p>4. <MathTex tex="AA_1" /> 和面 <MathTex tex="ABB_1A_1" /> 是什么关系？</p>
                    </div>
                    <div className="mt-1 print:hidden"><Collapsible title="查看答案">
                      <div className="grid grid-cols-2 gap-x-4">
                        <p>1. <MathTex tex="AB \subset" /> 面 ABCD（在面内）</p>
                        <p>2. AB <MathTex tex="\parallel" /> 面 <MathTex tex="A_1B_1C_1D_1" />（平行）</p>
                        <p>3. <MathTex tex="AA_1 \perp" /> 面 ABCD（垂直）</p>
                        <p>4. <MathTex tex="AA_1 \subset" /> 面 <MathTex tex="ABB_1A_1" />（在面内）</p>
                      </div>
                    </Collapsible></div>
                    <div className="hidden print:block mt-1">
                      <p className="font-bold">答案：</p>
                      <div className="grid grid-cols-2 gap-x-4">
                        <p>1. <MathTex tex="AB \subset" /> 面 ABCD（在面内）</p>
                        <p>2. AB <MathTex tex="\parallel" /> 面 <MathTex tex="A_1B_1C_1D_1" />（平行）</p>
                        <p>3. <MathTex tex="AA_1 \perp" /> 面 ABCD（垂直）</p>
                        <p>4. <MathTex tex="AA_1 \subset" /> 面 <MathTex tex="ABB_1A_1" />（在面内）</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-[170px] shrink-0 flex justify-center"><DebugGeo3dSvg data={cuboidPlainDiagram} width={170} height={130} /></div>
                </div>
              </div>
            </div>

            <div className="break-before-page"></div>

            {/* ④ 垂直 */}
            <div className="border border-red-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-red-800 border-b border-red-300 bg-red-100 text-lg">④ 垂直</div>
              <div className="px-3 py-2 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p><strong>定义</strong>：如果一条直线与平面内的每一条直线都垂直，则称这条直线与该平面垂直</p>
                    <p className="mt-1"><strong>符号</strong>：<MathTex tex="a \perp \beta" />，交点叫做<strong>垂足</strong></p>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center"><DebugGeo3dSvg data={linePerpPlaneDiagram} width={140} height={80} /></div>
                </div>
                <div className="flex items-start gap-3 mt-1 pt-1 border-t border-gray-200">
                  <div className="flex-1">
                    <p className="font-bold">在长方体中：</p>
                    <p className="mt-1"><MathTex tex="AA_1" /> <MathTex tex="\perp" /> 面 ABCD（<MathTex tex="AA_1" /> 垂直于底面内所有直线）</p>
                    <p className="mt-1"><MathTex tex="BB_1" /> <MathTex tex="\perp" /> 面 ABCD，<MathTex tex="CC_1" /> <MathTex tex="\perp" /> 面 ABCD，<MathTex tex="DD_1" /> <MathTex tex="\perp" /> 面 ABCD</p>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center"><DebugGeo3dSvg data={cuboidLpPerpDetDiagram} width={180} height={140} /></div>
                </div>
              </div>
            </div>

            {/* 定理① 线面平行判定 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">定理①：线面平行判定（线线平行 升级到 线面平行）</div>
              <div className="px-3 py-2 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p>平面外一条直线与此平面内的一条直线平行，则该直线与此平面平行</p>
                    <div className="mt-1">
                      <p>条件：<MathTex tex="a \not\subset \beta" />（a 不在面内），<MathTex tex="b \subset \beta" />（b 在面内），<MathTex tex="a \parallel b" /></p>
                      <p className="mt-1">结论：<MathTex tex="a \parallel \beta" /></p>
                    </div>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center"><DebugGeo3dSvg data={lpParallelDetDiagram} width={180} height={140} /></div>
                </div>
                <div className="flex items-start gap-3 mt-2 pt-2 border-t border-gray-200">
                  <div className="flex-1">
                    <p className="font-bold">在长方体中：</p>
                    <p className="mt-1">1. <MathTex tex="AB \parallel A_1B_1" />（线线平行）</p>
                    <p className="mt-1">2. <MathTex tex="A_1B_1" /> 在面 <MathTex tex="A_1B_1C_1D_1" /> 内，<MathTex tex="AB" /> 不在面 <MathTex tex="A_1B_1C_1D_1" /> 内</p>
                    <p className="mt-1">3. 所以 <strong><MathTex tex="AB \parallel" /> 面 <MathTex tex="A_1B_1C_1D_1" /></strong></p>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center"><DebugGeo3dSvg data={cuboidLpParallelDiagram} width={200} height={160} /></div>
                </div>
              </div>
            </div>

            {/* 定理② 线面平行性质 */}
            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">定理②：线面平行性质（线面平行 降级到 线线平行）</div>
              <div className="px-3 py-2 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p>平面外一条直线 a 和这个平面 <MathTex tex="\beta" /> 的垂线 n 垂直，则这条直线和该平面平行</p>
                    <div className="mt-1">
                      <p>条件：<MathTex tex="n \perp \beta" />（n 是面的垂线），<MathTex tex="a \perp n" />（a 垂直于 n），<MathTex tex="a \not\subset \beta" />（a 不在面内）</p>
                      <p className="mt-1">结论：<MathTex tex="a \parallel \beta" /></p>
                    </div>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center"><DebugGeo3dSvg data={lpParallelPropDiagram} width={180} height={140} /></div>
                </div>
                <div className="flex items-start gap-3 mt-2 pt-2 border-t border-gray-200">
                  <div className="flex-1">
                    <p className="font-bold">在长方体中：</p>
                    <p className="mt-1"><MathTex tex="AA_1" /> <MathTex tex="\perp" /> 面 ABCD（<MathTex tex="AA_1" /> 是垂线 n）</p>
                    <p className="mt-1"><MathTex tex="A_1B_1" /> <MathTex tex="\perp" /> <MathTex tex="AA_1" />（<MathTex tex="A_1B_1" /> 就是直线 a）</p>
                    <p className="mt-1">所以 <MathTex tex="A_1B_1" /> <MathTex tex="\parallel" /> 面 ABCD</p>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center"><DebugGeo3dSvg data={cuboidLpParallelPropDiagram} width={180} height={140} /></div>
                </div>
              </div>
            </div>

            <div className="break-before-page"></div>

            {/* 判定定理 */}
            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-800 border-b border-purple-300 bg-purple-100 text-lg">判定定理（1个）</div>
              <div className="px-3 py-2 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p>如果一条直线与平面内的<strong>两条相交直线</strong>都垂直，那么这条直线与该平面垂直</p>
                    <div className="mt-1">
                      <p>条件：<MathTex tex="m, n \subset \beta" />，<MathTex tex="m \cap n = O" />，<MathTex tex="l \perp m" />，<MathTex tex="l \perp n" /></p>
                      <p className="mt-1">结论：<MathTex tex="l \perp \beta" /></p>
                    </div>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center"><DebugGeo3dSvg data={lpPerpDetDiagram} width={180} height={140} /></div>
                </div>
              </div>
            </div>

            {/* 性质定理 */}
            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">性质定理（4条）</div>
              <div className="px-3 py-2 space-y-2">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p className="font-bold">性质1：</p>
                    <p>如果一条直线垂直于一个平面，那么该直线垂直于平面内的所有直线</p>
                    <p className="mt-1">条件：<MathTex tex="l \perp \beta" />，<MathTex tex="a \subset \beta" />　结论：<MathTex tex="l \perp a" /></p>
                  </div>
                  <div className="w-[160px] shrink-0 flex justify-center"><DebugGeo3dSvg data={lpPerpProp1Diagram} width={140} height={110} /></div>
                </div>
                <div className="flex items-start gap-3 border-t border-gray-200 pt-2">
                  <div className="flex-1">
                    <p className="font-bold">性质2：</p>
                    <p>过空间中任意一点，有且只有一条直线与已知平面垂直</p>
                    <p className="mt-1">即：不管点在哪儿，都只能画出一条经过它、并且垂直于这个平面的直线，不会有第二条</p>
                  </div>
                  <div className="w-[160px] shrink-0 flex justify-center"><DebugGeo3dSvg data={lpPerpProp2Diagram} width={140} height={110} /></div>
                </div>
                <div className="flex items-start gap-3 border-t border-gray-200 pt-2">
                  <div className="flex-1">
                    <p className="font-bold">性质3：</p>
                    <p>如果在两条平行直线中，有一条直线垂直于一个平面，那么另一条直线也垂直于该平面</p>
                    <p className="mt-1">条件：<MathTex tex="a \parallel b" />，<MathTex tex="a \perp \beta" />　结论：<MathTex tex="b \perp \beta" /></p>
                  </div>
                  <div className="w-[160px] shrink-0 flex justify-center"><DebugGeo3dSvg data={lpPerpProp3Diagram} width={140} height={110} /></div>
                </div>
                <div className="flex items-start gap-3 border-t border-gray-200 pt-2">
                  <div className="flex-1">
                    <p className="font-bold">性质4：</p>
                    <p>垂直于同一平面的两条直线是平行的</p>
                    <p className="mt-1">条件：<MathTex tex="a \perp \beta" />，<MathTex tex="b \perp \beta" />　结论：<MathTex tex="a \parallel b" /></p>
                  </div>
                  <div className="w-[160px] shrink-0 flex justify-center"><DebugGeo3dSvg data={lpPerpPropDiagram} width={140} height={110} /></div>
                </div>
              </div>
            </div>

            {/* 速查表 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">速查表：线面定理怎么用？</div>
              <div className="px-3 py-2">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="py-1 pr-2 w-24">定理</th>
                      <th className="py-1 pr-2">已知什么</th>
                      <th className="py-1 pr-2">得到什么</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 pr-2 font-bold text-blue-700">平行判定</td>
                      <td className="py-1 pr-2">线线平行 + 一线在面内</td>
                      <td className="py-1 pr-2">线面平行</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 pr-2 font-bold text-green-700">平行性质</td>
                      <td className="py-1 pr-2">线面平行 + 过线作截面</td>
                      <td className="py-1 pr-2">线线平行</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 pr-2 font-bold text-purple-700">垂直判定</td>
                      <td className="py-1 pr-2">垂直于面内两条相交线</td>
                      <td className="py-1 pr-2">线面垂直</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 pr-2 font-bold text-green-700">垂直性质1</td>
                      <td className="py-1 pr-2"><MathTex tex="l \perp \beta" />，<MathTex tex="a \subset \beta" /></td>
                      <td className="py-1 pr-2"><MathTex tex="l \perp a" /></td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 pr-2 font-bold text-green-700">垂直性质2</td>
                      <td className="py-1 pr-2">过一点</td>
                      <td className="py-1 pr-2">唯一一条垂线</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 pr-2 font-bold text-green-700">垂直性质3</td>
                      <td className="py-1 pr-2"><MathTex tex="a \parallel b" />，<MathTex tex="a \perp \beta" /></td>
                      <td className="py-1 pr-2"><MathTex tex="b \perp \beta" /></td>
                    </tr>
                    <tr>
                      <td className="py-1 pr-2 font-bold text-green-700">垂直性质4</td>
                      <td className="py-1 pr-2"><MathTex tex="a \perp \beta" />，<MathTex tex="b \perp \beta" /></td>
                      <td className="py-1 pr-2"><MathTex tex="a \parallel b" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 实战例题 */}
            <div className="border border-orange-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-orange-800 border-b border-orange-300 bg-orange-100 text-lg">实战例题：直接套定理</div>
              <div className="px-3 py-2 space-y-1">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p>如图，长方体 <MathTex tex="ABCD\text{-}A_1B_1C_1D_1" /> 中：</p>
                    <p className="mt-1 font-bold">（1）证明：<MathTex tex="AB \parallel" /> 面 <MathTex tex="DCC_1D_1" />（定理①）</p>
                    <p className="mt-1 font-bold">（2）已知 <MathTex tex="AB \parallel" /> 面 <MathTex tex="A_1B_1C_1D_1" />，面 <MathTex tex="ABB_1A_1" /> 与面 <MathTex tex="A_1B_1C_1D_1" /> 交于 <MathTex tex="A_1B_1" />，求与 AB 平行的线（定理②）</p>
                    <p className="mt-1 font-bold">（3）证明：<MathTex tex="AA_1 \perp" /> 面 ABCD（垂直判定）</p>
                    <p className="mt-1 font-bold">（4）证明：<MathTex tex="AA_1 \perp BD" />（性质1）</p>
                    <p className="mt-1 font-bold">（5）已知 <MathTex tex="AA_1 \perp" /> 面 ABCD，<MathTex tex="BB_1 \perp" /> 面 ABCD，证 <MathTex tex="AA_1 \parallel BB_1" />（性质4）</p>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center"><DebugGeo3dSvg data={cuboidPlainDiagram} width={190} height={150} /></div>
                </div>

                <div className="flex items-start gap-3 border-t border-gray-200 pt-1">
                  <div className="flex-1 space-y-0">
                    <p className="font-bold">（1）证 <MathTex tex="AB \parallel" /> 面 <MathTex tex="DCC_1D_1" />：</p>
                    <p className="ml-4">思路：用<strong>定理① 线面平行判定</strong>，找面内一条线与 AB 平行</p>
                    <p className="ml-4">① 长方体中 <MathTex tex="AB \parallel DC" />（对边平行）</p>
                    <p className="ml-4">② <MathTex tex="DC \subset" /> 面 <MathTex tex="DCC_1D_1" />，<MathTex tex="AB \not\subset" /> 面 <MathTex tex="DCC_1D_1" /></p>
                    <p className="ml-4">③ 由定理①得 <MathTex tex="AB \parallel" /> 面 <MathTex tex="DCC_1D_1" /></p>
                  </div>
                  <div className="w-[190px] shrink-0 flex justify-center"><DebugGeo3dSvg data={cuboidExProof1Diagram} width={180} height={150} /></div>
                </div>

                <div className="flex items-start gap-3 border-t border-gray-200 pt-1">
                  <div className="flex-1 space-y-0">
                    <p className="font-bold">（2）由定理② 线面平行性质：</p>
                    <p className="ml-4">① <MathTex tex="AB \parallel" /> 面 <MathTex tex="A_1B_1C_1D_1" />（已知）</p>
                    <p className="ml-4">② 面 <MathTex tex="ABB_1A_1" /> 经过 AB，且与面 <MathTex tex="A_1B_1C_1D_1" /> 交于 <MathTex tex="A_1B_1" /></p>
                    <p className="ml-4">③ 由定理②得 <MathTex tex="AB \parallel A_1B_1" />（线面平行降级到线线平行）</p>
                  </div>
                  <div className="w-[190px] shrink-0 flex justify-center"><DebugGeo3dSvg data={cuboidExProof3Diagram} width={180} height={150} /></div>
                </div>

                <div className="flex items-start gap-3 border-t border-gray-200 pt-1">
                  <div className="flex-1 space-y-0">
                    <p className="font-bold">（3）证 <MathTex tex="AA_1 \perp" /> 面 ABCD：</p>
                    <p className="ml-4">思路：用<strong>垂直判定定理</strong>，证 <MathTex tex="AA_1" /> 垂直于面内两条相交线</p>
                    <p className="ml-4">① <MathTex tex="AA_1 \perp AB" />（长方体相邻棱垂直）</p>
                    <p className="ml-4">② <MathTex tex="AA_1 \perp AD" />（长方体相邻棱垂直）</p>
                    <p className="ml-4">③ <MathTex tex="AB, AD \subset" /> 面 ABCD，且 <MathTex tex="AB \cap AD = A" /></p>
                    <p className="ml-4">④ 由判定定理得 <MathTex tex="AA_1 \perp" /> 面 ABCD</p>
                  </div>
                  <div className="w-[190px] shrink-0 flex justify-center"><DebugGeo3dSvg data={cuboidExProof4Diagram} width={180} height={150} /></div>
                </div>

                <div className="flex items-start gap-3 border-t border-gray-200 pt-1">
                  <div className="flex-1 space-y-0">
                    <p className="font-bold">（4）证 <MathTex tex="AA_1 \perp BD" />：</p>
                    <p className="ml-4">思路：用<strong>性质1</strong></p>
                    <p className="ml-4">① <MathTex tex="AA_1 \perp" /> 面 ABCD（由第 3 问已证）</p>
                    <p className="ml-4">② <MathTex tex="BD \subset" /> 面 ABCD</p>
                    <p className="ml-4">③ 由性质1得 <MathTex tex="AA_1 \perp BD" /></p>
                  </div>
                  <div className="w-[190px] shrink-0 flex justify-center"><DebugGeo3dSvg data={cuboidExProof2Diagram} width={180} height={150} /></div>
                </div>

                <div className="flex items-start gap-3 border-t border-gray-200 pt-1">
                  <div className="flex-1 space-y-0">
                    <p className="font-bold">（5）证 <MathTex tex="AA_1 \parallel BB_1" />：</p>
                    <p className="ml-4">思路：用<strong>性质4</strong>（垂直于同一面的两条线平行）</p>
                    <p className="ml-4">① <MathTex tex="AA_1 \perp" /> 面 ABCD（已知）</p>
                    <p className="ml-4">② <MathTex tex="BB_1 \perp" /> 面 ABCD（已知）</p>
                    <p className="ml-4">③ 由性质4得 <MathTex tex="AA_1 \parallel BB_1" /></p>
                  </div>
                  <div className="w-[190px] shrink-0 flex justify-center"><DebugGeo3dSvg data={cuboidExProof5Diagram} width={180} height={150} /></div>
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak label="7.1 面与面（再升级！）" />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 4: 面与面的关系 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="plane-plane" className="mb-3 scroll-mt-4">
        <Collapsible title="四、面与面" defaultOpen storageKey="geo3d-relation:plane-plane">
          <div className="space-y-0 text-lg text-gray-800">

            {/* 定理⑤ 面面平行判定 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">定理⑤：面面平行判定（线面平行 升级到 面面平行）</div>
              <div className="px-3 py-2 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p>一个面内有<strong>两条相交的线</strong>都平行于另一个面，那这两个面就平行</p>
                    <div className="mt-1">
                      <p>条件：<MathTex tex="a, b \subset \beta" />，<MathTex tex="a \cap b = P" />，<MathTex tex="a \parallel \gamma" />，<MathTex tex="b \parallel \gamma" /></p>
                      <p className="mt-1">结论：<MathTex tex="\beta \parallel \gamma" /></p>
                    </div>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center"><DebugGeo3dSvg data={ppParallelDetDiagram} width={180} height={140} /></div>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <div className="flex-1">
                    <p className="font-bold">长方体中的例子：</p>
                    <p className="mt-1">要证：面 <MathTex tex="ABCD" /> <MathTex tex="\parallel" /> 面 <MathTex tex="A_1B_1C_1D_1" /></p>
                    <p className="mt-1">1. 在面 <MathTex tex="ABCD" /> 内取两条相交直线：<MathTex tex="AB" /> 和 <MathTex tex="AD" />，且 <MathTex tex="AB \cap AD = A" /></p>
                    <p className="mt-1">2. 由长方体性质：<MathTex tex="AB \parallel A_1B_1" />，<MathTex tex="AD \parallel A_1D_1" /></p>
                    <p className="mt-1">3. 由线面平行判定（定理①）：<MathTex tex="AB \parallel" /> 面 <MathTex tex="A_1B_1C_1D_1" />，<MathTex tex="AD \parallel" /> 面 <MathTex tex="A_1B_1C_1D_1" /></p>
                    <p className="mt-1">4. 满足面面平行判定定理，故：<strong>面 <MathTex tex="ABCD" /> <MathTex tex="\parallel" /> 面 <MathTex tex="A_1B_1C_1D_1" /></strong></p>
                  </div>
                  <div className="w-[190px] shrink-0 flex justify-center"><DebugGeo3dSvg data={cuboidPpDetExDiagram} width={180} height={150} /></div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded p-2 mt-1">
                  <p className="font-bold text-yellow-800">易错点</p>
                  <p className="mt-1">必须是<strong>两条相交的线</strong>，不能是两条平行线！两条平行线都平行于另一个面，不能保证面面平行</p>
                  <p className="mt-1">例如：AB <MathTex tex="\parallel" /> DC，即使它们都平行于面 <MathTex tex="A_1B_1C_1D_1" />，也不能直接用定理⑤</p>
                </div>
              </div>
            </div>

            {/* 定理⑥ 面面平行性质 */}
            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">定理⑥：面面平行性质（面面平行 降级到 线线平行）</div>
              <div className="px-3 py-2 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p>两个平行面被第三个面切一刀，切出来的两条线平行</p>
                    <div className="mt-1">
                      <p>条件：<MathTex tex="\beta \parallel \gamma" />，<MathTex tex="\delta \cap \beta = a" />，<MathTex tex="\delta \cap \gamma = b" /></p>
                      <p className="mt-1">结论：<MathTex tex="a \parallel b" /></p>
                    </div>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center"><DebugGeo3dSvg data={ppParallelPropDiagram} width={180} height={140} /></div>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <div className="flex-1">
                    <p className="font-bold">在长方体中：</p>
                    <p className="mt-1">1. 已知：面 <MathTex tex="ABCD" /> <MathTex tex="\parallel" /> 面 <MathTex tex="A_1B_1C_1D_1" /></p>
                    <p className="mt-1">2. 取第三个面 <MathTex tex="ABB_1A_1" />，它同时与这两个平行面相交：</p>
                    <p className="ml-4 mt-1">与面 <MathTex tex="ABCD" /> 的交线：<MathTex tex="AB" /></p>
                    <p className="ml-4 mt-1">与面 <MathTex tex="A_1B_1C_1D_1" /> 的交线：<MathTex tex="A_1B_1" /></p>
                    <p className="mt-1">3. 由面面平行性质定理⑥：两条交线互相平行，<strong><MathTex tex="AB \parallel A_1B_1" /></strong></p>
                  </div>
                  <div className="w-[190px] shrink-0 flex justify-center"><DebugGeo3dSvg data={cuboidPpPropExDiagram} width={180} height={150} /></div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded p-2 mt-1">
                  <p className="font-bold">这个定理很实用</p>
                  <p className="mt-1">当你已知两个面平行，想找一组平行线时，只要用第三个面去“切”一刀，切出来的两条交线就是平行的</p>
                  <p className="mt-1">高考中常用来找中位线、截面等问题中的平行关系</p>
                </div>
              </div>
            </div>

            <div className="break-before-page"></div>
            {/* 定理⑦ 面面垂直判定 */}
            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-800 border-b border-purple-300 bg-purple-100 text-lg">定理⑦：面面垂直判定（线面垂直 升级到 面面垂直）</div>
              <div className="px-3 py-1.5 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p>一个面里面有条线垂直于另一个面，那这两个面就垂直</p>
                    <div className="mt-1">
                      <p>条件：<MathTex tex="l \perp \beta" />，<MathTex tex="l \subset \gamma" /></p>
                      <p className="mt-1">结论：<MathTex tex="\beta \perp \gamma" /></p>
                    </div>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center"><DebugGeo3dSvg data={ppPerpDetDiagram} width={180} height={140} /></div>
                </div>
                <div className="flex items-start gap-3 mt-1">
                  <div className="flex-1">
                    <p className="font-bold">在长方体中：</p>
                    <p className="mt-1">1. <MathTex tex="AA_1 \perp" /> 面 <MathTex tex="A_1B_1C_1D_1" />（线面垂直）</p>
                    <p className="mt-1">2. <MathTex tex="AA_1 \subset" /> 面 <MathTex tex="ABB_1A_1" /></p>
                    <p className="mt-1">3. 由面面垂直判定定理⑦：<strong>面 <MathTex tex="ABB_1A_1 \perp" /> 面 <MathTex tex="A_1B_1C_1D_1" /></strong></p>
                  </div>
                  <div className="w-[190px] shrink-0 flex justify-center"><DebugGeo3dSvg data={cuboidPpPerpDetExDiagram} width={180} height={150} /></div>
                </div>
              </div>
            </div>

            {/* 定理⑧ 面面垂直性质 */}
            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">定理⑧：面面垂直性质（面面垂直 降级到 线面垂直）</div>
              <div className="px-3 py-1.5 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p>两个面垂直，在一个面内画一条垂直于交线的线，那条线就垂直于另一个面</p>
                    <div className="mt-1">
                      <p>条件：<MathTex tex="\beta \perp \gamma" />，<MathTex tex="\beta \cap \gamma = l" />，<MathTex tex="a \subset \beta" />，<MathTex tex="a \perp l" /></p>
                      <p className="mt-1">结论：<MathTex tex="a \perp \gamma" /></p>
                    </div>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center"><DebugGeo3dSvg data={ppPerpPropDiagram} width={180} height={140} /></div>
                </div>
                <div className="flex items-start gap-3 mt-1">
                  <div className="flex-1">
                    <p className="font-bold">在长方体中：</p>
                    <p className="mt-1">1. 已知：面 <MathTex tex="ABB_1A_1 \perp" /> 面 <MathTex tex="A_1B_1C_1D_1" />，交线 <MathTex tex="l = A_1B_1" /></p>
                    <p className="mt-1">2. 在面 <MathTex tex="ABB_1A_1" /> 内：<MathTex tex="AA_1 \perp A_1B_1" />（即 <MathTex tex="AA_1 \perp l" />）</p>
                    <p className="mt-1">3. 由面面垂直性质定理⑧：<strong><MathTex tex="AA_1 \perp" /> 面 <MathTex tex="A_1B_1C_1D_1" /></strong></p>
                  </div>
                  <div className="w-[190px] shrink-0 flex justify-center"><DebugGeo3dSvg data={cuboidPpPerpPropExDiagram} width={180} height={150} /></div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded p-2 mt-2">
                  <p className="font-bold text-yellow-800">易错点</p>
                  <p className="mt-1">不是面面垂直就能随便得到线面垂直！那条线必须<strong>垂直于交线</strong></p>
                </div>
              </div>
            </div>

            {/* 速查表 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">速查表：面面定理怎么用？</div>
              <div className="px-3 py-2">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="py-1 pr-2 w-24">定理</th>
                      <th className="py-1 pr-2">已知什么</th>
                      <th className="py-1 pr-2">得到什么</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 pr-2 font-bold text-blue-700">⑤ 平行判定</td>
                      <td className="py-1 pr-2">面内两相交线都 <MathTex tex="\parallel" /> 另一面</td>
                      <td className="py-1 pr-2">面面平行</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 pr-2 font-bold text-green-700">⑥ 平行性质</td>
                      <td className="py-1 pr-2">面面平行 + 第三面截</td>
                      <td className="py-1 pr-2">线线平行</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 pr-2 font-bold text-purple-700">⑦ 垂直判定</td>
                      <td className="py-1 pr-2">面内一线 <MathTex tex="\perp" /> 另一面</td>
                      <td className="py-1 pr-2">面面垂直</td>
                    </tr>
                    <tr>
                      <td className="py-1 pr-2 font-bold text-amber-700">⑧ 垂直性质</td>
                      <td className="py-1 pr-2">面面 <MathTex tex="\perp" /> + 面内线 <MathTex tex="\perp" /> 交线</td>
                      <td className="py-1 pr-2">线面垂直</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 实战例题 */}
            <div className="border border-orange-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-orange-800 border-b border-orange-300 bg-orange-100 text-lg">实战例题：直接套定理</div>
              <div className="px-3 py-2 space-y-1">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p>如图，长方体 <MathTex tex="ABCD\text{-}A_1B_1C_1D_1" /> 中：</p>
                    <p className="mt-1 font-bold">（1）证明：面 ABCD <MathTex tex="\parallel" /> 面 <MathTex tex="A_1B_1C_1D_1" />（定理⑤）</p>
                    <p className="mt-1 font-bold">（2）已知面 ABCD <MathTex tex="\parallel" /> 面 <MathTex tex="A_1B_1C_1D_1" />，面 <MathTex tex="ABB_1A_1" /> 分别与两面交于 AB 和 <MathTex tex="A_1B_1" />，求 AB 与 <MathTex tex="A_1B_1" /> 的关系（定理⑥）</p>
                    <p className="mt-1 font-bold">（3）证明：面 <MathTex tex="ABB_1A_1" /> <MathTex tex="\perp" /> 面 ABCD（定理⑦）</p>
                    <p className="mt-1 font-bold">（4）已知面 <MathTex tex="ABB_1A_1" /> <MathTex tex="\perp" /> 面 <MathTex tex="A_1B_1C_1D_1" />，交线为 <MathTex tex="A_1B_1" />，<MathTex tex="AA_1 \perp A_1B_1" />，证 <MathTex tex="AA_1 \perp" /> 面 <MathTex tex="A_1B_1C_1D_1" />（定理⑧）</p>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center"><DebugGeo3dSvg data={cuboidPlainDiagram} width={190} height={150} /></div>
                </div>

                <div className="flex items-start gap-3 border-t border-gray-200 pt-1">
                  <div className="flex-1 space-y-0">
                    <p className="font-bold">（1）证 面 ABCD <MathTex tex="\parallel" /> 面 <MathTex tex="A_1B_1C_1D_1" />：</p>
                    <p className="ml-4">思路：用<strong>定理⑤</strong>，找面内两条相交线都平行于另一面</p>
                    <p className="ml-4">① <MathTex tex="AB \parallel A_1B_1" />（对边），由定理①得 <MathTex tex="AB \parallel" /> 面 <MathTex tex="A_1B_1C_1D_1" /></p>
                    <p className="ml-4">② <MathTex tex="AD \parallel A_1D_1" />（对边），由定理①得 <MathTex tex="AD \parallel" /> 面 <MathTex tex="A_1B_1C_1D_1" /></p>
                    <p className="ml-4">③ <MathTex tex="AB \cap AD = A" />，AB、AD <MathTex tex="\subset" /> 面 ABCD</p>
                    <p className="ml-4">④ 由定理⑤得 面 ABCD <MathTex tex="\parallel" /> 面 <MathTex tex="A_1B_1C_1D_1" /></p>
                  </div>
                  <div className="w-[190px] shrink-0 flex justify-center"><DebugGeo3dSvg data={cuboidExPpProof1Diagram} width={180} height={150} /></div>
                </div>

                <div className="flex items-start gap-3 border-t border-gray-200 pt-1">
                  <div className="flex-1 space-y-0">
                    <p className="font-bold">（2）由定理⑥ 面面平行性质：</p>
                    <p className="ml-4">① 面 ABCD <MathTex tex="\parallel" /> 面 <MathTex tex="A_1B_1C_1D_1" />（已知）</p>
                    <p className="ml-4">② 面 <MathTex tex="ABB_1A_1" /> 与面 ABCD 交于 AB，与面 <MathTex tex="A_1B_1C_1D_1" /> 交于 <MathTex tex="A_1B_1" /></p>
                    <p className="ml-4">③ 由定理⑥得 <MathTex tex="AB \parallel A_1B_1" />（面面平行降级到线线平行）</p>
                  </div>
                  <div className="w-[190px] shrink-0 flex justify-center"><DebugGeo3dSvg data={cuboidExPpProof2Diagram} width={180} height={150} /></div>
                </div>

                <div className="flex items-start gap-3 border-t border-gray-200 pt-1">
                  <div className="flex-1 space-y-0">
                    <p className="font-bold">（3）证 面 <MathTex tex="ABB_1A_1" /> <MathTex tex="\perp" /> 面 ABCD：</p>
                    <p className="ml-4">思路：用<strong>定理⑦</strong>，找面内一条线垂直于另一面</p>
                    <p className="ml-4">① <MathTex tex="AA_1 \perp" /> 面 ABCD（长方体侧棱垂直底面）</p>
                    <p className="ml-4">② <MathTex tex="AA_1 \subset" /> 面 <MathTex tex="ABB_1A_1" /></p>
                    <p className="ml-4">③ 由定理⑦得 面 <MathTex tex="ABB_1A_1" /> <MathTex tex="\perp" /> 面 ABCD</p>
                  </div>
                  <div className="w-[190px] shrink-0 flex justify-center"><DebugGeo3dSvg data={cuboidExPpProof3Diagram} width={180} height={150} /></div>
                </div>

                <div className="flex items-start gap-3 border-t border-gray-200 pt-1">
                  <div className="flex-1 space-y-0">
                    <p className="font-bold">（4）证 <MathTex tex="AA_1 \perp" /> 面 <MathTex tex="A_1B_1C_1D_1" />：</p>
                    <p className="ml-4">思路：用<strong>定理⑧</strong>（面面垂直降级到线面垂直）</p>
                    <p className="ml-4">① 面 <MathTex tex="ABB_1A_1 \perp" /> 面 <MathTex tex="A_1B_1C_1D_1" />，交线 <MathTex tex="l = A_1B_1" /></p>
                    <p className="ml-4">② <MathTex tex="AA_1 \subset" /> 面 <MathTex tex="ABB_1A_1" />，且 <MathTex tex="AA_1 \perp A_1B_1" />（即 <MathTex tex="AA_1 \perp l" />）</p>
                    <p className="ml-4">③ 由定理⑧得 <MathTex tex="AA_1 \perp" /> 面 <MathTex tex="A_1B_1C_1D_1" /></p>
                  </div>
                  <div className="w-[190px] shrink-0 flex justify-center"><DebugGeo3dSvg data={cuboidExPpProof4Diagram} width={180} height={150} /></div>
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak label="7.1 八大定理关系图" />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 5: 八大定理关系图 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="theorem-map" className="mb-3 scroll-mt-4">
        <Collapsible title="五、八大定理关系图" defaultOpen storageKey="geo3d-relation:theorem-map">
          <div className="space-y-0 text-lg text-gray-800">

            {/* 定理转化关系 */}
            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">定理转化关系（低维到高维 = 判定，高维到低维 = 性质）</div>
              <div className="px-3 py-2">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="py-1 pr-2">定理</th>
                      <th className="py-1 pr-2">已知（从哪来）</th>
                      <th className="py-1 pr-2">得到（到哪去）</th>
                      <th className="py-1 pr-2 w-16">类型</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-blue-100 bg-blue-50">
                      <td className="py-1.5 pr-2 font-bold" colSpan={4}>平行系列</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 pr-2 font-bold">①</td>
                      <td className="py-1 pr-2"><strong>线线平行</strong> + 一线在面内</td>
                      <td className="py-1 pr-2"><strong>线面平行</strong></td>
                      <td className="py-1 pr-2 text-blue-700 font-bold">判定</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 pr-2 font-bold">②</td>
                      <td className="py-1 pr-2"><strong>线面平行</strong> + 过线作截面</td>
                      <td className="py-1 pr-2"><strong>线线平行</strong></td>
                      <td className="py-1 pr-2 text-green-700 font-bold">性质</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 pr-2 font-bold">⑤</td>
                      <td className="py-1 pr-2">面内两条相交线都 <strong>线面平行</strong></td>
                      <td className="py-1 pr-2"><strong>面面平行</strong></td>
                      <td className="py-1 pr-2 text-blue-700 font-bold">判定</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 pr-2 font-bold">⑥</td>
                      <td className="py-1 pr-2"><strong>面面平行</strong> + 第三面截</td>
                      <td className="py-1 pr-2"><strong>线线平行</strong></td>
                      <td className="py-1 pr-2 text-green-700 font-bold">性质</td>
                    </tr>
                    <tr className="border-b border-purple-100 bg-purple-50">
                      <td className="py-1.5 pr-2 font-bold" colSpan={4}>垂直系列</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 pr-2 font-bold">③</td>
                      <td className="py-1 pr-2"><strong>线线垂直</strong>（垂直面内两条相交线）</td>
                      <td className="py-1 pr-2"><strong>线面垂直</strong></td>
                      <td className="py-1 pr-2 text-blue-700 font-bold">判定</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 pr-2 font-bold">④</td>
                      <td className="py-1 pr-2"><strong>线面垂直</strong></td>
                      <td className="py-1 pr-2"><strong>线线垂直</strong> / 两垂线平行</td>
                      <td className="py-1 pr-2 text-green-700 font-bold">性质</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 pr-2 font-bold">⑦</td>
                      <td className="py-1 pr-2">面内一线 <strong>线面垂直</strong> 于另一面</td>
                      <td className="py-1 pr-2"><strong>面面垂直</strong></td>
                      <td className="py-1 pr-2 text-blue-700 font-bold">判定</td>
                    </tr>
                    <tr>
                      <td className="py-1 pr-2 font-bold">⑧</td>
                      <td className="py-1 pr-2"><strong>面面垂直</strong> + 面内线垂直交线</td>
                      <td className="py-1 pr-2"><strong>线面垂直</strong></td>
                      <td className="py-1 pr-2 text-green-700 font-bold">性质</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 快速判断练习 */}
            <div className="border border-orange-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-orange-800 border-b border-orange-300 bg-orange-100 text-lg">快速判断：该用哪个定理？</div>
              <div className="px-3 py-2 space-y-1">
                <p>读题目，判断应该用哪个定理，写出编号：</p>
                <div className="border-t border-gray-200 pt-1">
                  <p><strong>（1）</strong>已知 <MathTex tex="a \parallel b" />，<MathTex tex="b \subset \alpha" />，<MathTex tex="a \not\subset \alpha" />，证 <MathTex tex="a \parallel \alpha" /></p>
                  <p className="ml-4">已知线线平行，由定理①（线面平行判定）得 <MathTex tex="a \parallel \alpha" /></p>
                </div>
                <div className="border-t border-gray-200 pt-1">
                  <p><strong>（2）</strong>已知 <MathTex tex="a \parallel \alpha" />，<MathTex tex="a \subset \beta" />，<MathTex tex="\alpha \cap \beta = b" />，求 a 与 b 的关系</p>
                  <p className="ml-4">已知线面平行，由定理②（线面平行性质）得 <MathTex tex="a \parallel b" /></p>
                </div>
                <div className="border-t border-gray-200 pt-1">
                  <p><strong>（3）</strong>已知 <MathTex tex="l \perp a" />，<MathTex tex="l \perp b" />，<MathTex tex="a \cap b = P" />，<MathTex tex="a, b \subset \alpha" />，证 <MathTex tex="l \perp \alpha" /></p>
                  <p className="ml-4">已知 l 垂直面内两条相交线，由定理③（线面垂直判定）得 <MathTex tex="l \perp \alpha" /></p>
                </div>
                <div className="border-t border-gray-200 pt-1">
                  <p><strong>（4）</strong>已知 <MathTex tex="l \perp \alpha" />，<MathTex tex="a \subset \alpha" />，求 l 与 a 的关系</p>
                  <p className="ml-4">已知线面垂直，由定理④（线面垂直性质）得 <MathTex tex="l \perp a" /></p>
                </div>
                <div className="border-t border-gray-200 pt-1">
                  <p><strong>（5）</strong>已知 <MathTex tex="a \parallel \alpha" />，<MathTex tex="b \parallel \alpha" />，<MathTex tex="a \cap b = P" />，<MathTex tex="a, b \subset \beta" />，证 <MathTex tex="\alpha \parallel \beta" /></p>
                  <p className="ml-4">已知面内两相交线都平行于另一面，由定理⑤（面面平行判定）得 <MathTex tex="\alpha \parallel \beta" /></p>
                </div>
                <div className="border-t border-gray-200 pt-1">
                  <p><strong>（6）</strong>已知 <MathTex tex="\alpha \parallel \beta" />，<MathTex tex="\gamma \cap \alpha = a" />，<MathTex tex="\gamma \cap \beta = b" />，求 a 与 b 的关系</p>
                  <p className="ml-4">已知面面平行，由定理⑥（面面平行性质）得 <MathTex tex="a \parallel b" /></p>
                </div>
                <div className="border-t border-gray-200 pt-1">
                  <p><strong>（7）</strong>已知 <MathTex tex="l \perp \beta" />，<MathTex tex="l \subset \alpha" />，证 <MathTex tex="\alpha \perp \beta" /></p>
                  <p className="ml-4">已知面内一线垂直另一面，由定理⑦（面面垂直判定）得 <MathTex tex="\alpha \perp \beta" /></p>
                </div>
                <div className="border-t border-gray-200 pt-1">
                  <p><strong>（8）</strong>已知 <MathTex tex="\alpha \perp \beta" />，<MathTex tex="\alpha \cap \beta = l" />，<MathTex tex="a \subset \alpha" />，<MathTex tex="a \perp l" />，证 <MathTex tex="a \perp \beta" /></p>
                  <p className="ml-4">已知面面垂直且面内线垂直交线，由定理⑧（面面垂直性质）得 <MathTex tex="a \perp \beta" /></p>
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak label="7.1 高考证明套路" />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 6: 证明套路 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="proof-strategy" className="mb-3 scroll-mt-4">
        <Collapsible title="六、高考证明套路" defaultOpen storageKey="geo3d-relation:proof-strategy">
          <div className="space-y-0 text-lg text-gray-800">

            {/* 平行证明 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">证明平行（3 类问题）</div>
              <div className="px-3 py-2 space-y-2">

                <div className="bg-blue-50 rounded p-2 border border-blue-200">
                  <p className="font-bold">证线线平行（基础，为证线面平行做准备）</p>
                  <p className="mt-1"><strong>方法1</strong>：三角形中位线（题目给中点就用这个）</p>
                  <p className="mt-1"><strong>方法2</strong>：平行四边形对边（构造平行四边形）</p>
                  <p className="mt-1"><strong>方法3</strong>：定理② 线面平行性质（已知线面平行，截面得线线平行）</p>
                  <p className="mt-1"><strong>方法4</strong>：定理⑥ 面面平行性质（已知面面平行，第三面截得线线平行）</p>
                </div>

                <div className="bg-blue-50 rounded p-2 border border-blue-200">
                  <p className="font-bold">证线面平行（高考最常考）</p>
                  <p className="mt-1"><strong>方法1（主力）</strong>：先证线线平行，再由定理①升级到线面平行</p>
                  <p className="mt-1 ml-4">在平面内找一条线，证它与目标线平行（中位线 / 平行四边形）</p>
                  <p className="mt-1"><strong>方法2</strong>：已知面面平行，则一面内的线自然平行于另一面</p>
                </div>

                <div className="bg-blue-50 rounded p-2 border border-blue-200">
                  <p className="font-bold">证面面平行</p>
                  <p className="mt-1"><strong>方法1（主力）</strong>：定理⑤，面内两条相交线都平行于另一面</p>
                  <p className="mt-1"><strong>方法2</strong>：两面都垂直于同一条线（用得少）</p>
                </div>

              </div>
            </div>

            {/* 垂直证明 */}
            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-800 border-b border-purple-300 bg-purple-100 text-lg">证明垂直（3 类问题）</div>
              <div className="px-3 py-2 space-y-2">

                <div className="bg-purple-50 rounded p-2 border border-purple-200">
                  <p className="font-bold">证线线垂直</p>
                  <p className="mt-1"><strong>方法1（主力）</strong>：先证线面垂直，再由定理④得线线垂直</p>
                  <p className="mt-1 ml-4">即 <MathTex tex="l \perp \alpha" /> 且 <MathTex tex="a \subset \alpha" />，则 <MathTex tex="l \perp a" /></p>
                  <p className="mt-1"><strong>方法2</strong>：等腰三角形三线合一（底边中线即底边高）</p>
                  <p className="mt-1"><strong>方法3</strong>：勾股定理逆定理（算出三边验证）</p>
                </div>

                <div className="bg-purple-50 rounded p-2 border border-purple-200">
                  <p className="font-bold">证线面垂直（高考最常考）</p>
                  <p className="mt-1"><strong>方法1（主力）</strong>：定理③，垂直面内两条相交线</p>
                  <p className="mt-1 ml-4">找面内两条相交线，分别证目标线垂直于它们</p>
                  <p className="mt-1"><strong>方法2</strong>：定理⑧，面面垂直性质（已知面面垂直时用）</p>
                  <p className="mt-1 ml-4">面面垂直 + 面内线垂直交线，得线面垂直</p>
                  <p className="mt-1"><strong>方法3</strong>：已知另一条线面垂直 + 两线平行（转换直线）</p>
                </div>

                <div className="bg-purple-50 rounded p-2 border border-purple-200">
                  <p className="font-bold">证面面垂直</p>
                  <p className="mt-1"><strong>方法1（主力）</strong>：定理⑦，先证线面垂直，再升级到面面垂直</p>
                  <p className="mt-1 ml-4">找一条线垂直于一个面，且这条线在另一个面内</p>
                  <p className="mt-1"><strong>方法2</strong>：转换平面（已知某面垂直，平行面也垂直，用得少）</p>
                </div>

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
