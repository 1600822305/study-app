import { Math as MathTex, Collapsible, PageHeader, LessonLayout, ExportButton, PageBreak, DebugGeo3dSvg, UnifiedDebugToggle } from '@/components/shared';
import { perpLinesDiagram, intersectingLinesDiagram, axiom4Diagram, cuboidParallelDiagram, cuboidIntersectDiagram, cuboidSkewDiagram, cuboidPerpDiagram, lineInPlaneDiagram, lineParallelPlaneDiagram, lineIntersectPlaneDiagram, linePerpPlaneDiagram, cuboidPlainDiagram, cuboidLineInPlaneDiagram, cuboidLpParallelDiagram, cuboidLpParallelDetExDiagram, cuboidLpParallelPropDiagram, cuboidLpIntersectDiagram, cuboidLpPerpDetDiagram, cuboidPpDetExDiagram, cuboidPpPropExDiagram, cuboidPpPerpDetExDiagram, cuboidPpPerpPropExDiagram, lpParallelDetDiagram, lpParallelPropDiagram, ppParallelDetDiagram, ppParallelPropDiagram, lpPerpDetDiagram, lpPerpPropDiagram, lpPerpProp1Diagram, lpPerpProp2Diagram, lpPerpProp3Diagram, ppPerpDetDiagram, ppPerpPropDiagram } from './data/7.1/7.1-relation-diagrams';
import { geo3dRelationProgressItems } from './data/7.1/7.1-relation-progress';
import { useProgress } from '@/hooks';


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


      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 1: 符号速学 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="symbols" className="mb-1 scroll-mt-4">
        <Collapsible title="一、符号速学（2分钟搞定）" defaultOpen storageKey="geo3d-relation:symbols">
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100">先认识"角色"——立体几何里只有三种对象，我们给它们起名字：</div>
              <div className="px-3 py-2 space-y-0">
                <div className="grid grid-cols-3 gap-1 mt-1">
                  <div className="bg-blue-50 rounded p-1 border border-blue-200 text-center">
                    <p className="font-bold text-blue-700 text-base">点</p>
                    <p>用大写字母</p>
                    <p className="font-bold"><MathTex tex="A, B, C, O" /></p>
                  </div>
                  <div className="bg-green-50 rounded p-1 border border-green-200 text-center">
                    <p className="font-bold text-green-700 text-base">直线</p>
                    <p>用小写字母</p>
                    <p className="font-bold"><MathTex tex="a, b, l, m" /></p>
                  </div>
                  <div className="bg-purple-50 rounded p-1 border border-purple-200 text-center">
                    <p className="font-bold text-purple-700 text-base">平面</p>
                    <p>用希腊字母</p>
                    <p className="font-bold"><MathTex tex="\alpha, \beta, \gamma" />（阿尔法、贝塔、伽马）</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100">再认识"关系符号"</div>
              <div className="px-3 py-1 space-y-0">
                <div className="grid grid-cols-2 gap-1">
                  <div className="bg-blue-50 rounded p-1 border border-blue-200">
                    <p className="font-bold"><MathTex tex="\parallel" /> 平行</p>
                    <p>读作“平行于”</p>
                    <p><MathTex tex="a \parallel b" /> 表示直线 a 和直线 b 平行</p>
                  </div>
                  <div className="bg-blue-50 rounded p-1 border border-blue-200">
                    <p className="font-bold"><MathTex tex="\perp" /> 垂直</p>
                    <p>读作“垂直于”</p>
                    <p><MathTex tex="a \perp b" /> 表示直线 a 和直线 b 垂直</p>
                  </div>
                  <div className="bg-green-50 rounded p-1 border border-green-200">
                    <p className="font-bold"><MathTex tex="\subset" /> 在...内</p>
                    <p>读作“包含于”</p>
                    <p><MathTex tex="a \subset \beta" /> 表示直线 a 在平面 <MathTex tex="\beta" /> 内</p>
                  </div>
                  <div className="bg-green-50 rounded p-1 border border-green-200">
                    <p className="font-bold"><MathTex tex="\cap" /> 交于</p>
                    <p>读作“交”</p>
                    <p><MathTex tex="\alpha \cap \beta = l" /> 表示平面 <MathTex tex="\alpha" /> 和 <MathTex tex="\beta" /> 交于直线 l</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100">参考图：长方体（高考最常见的载体）</div>
              <div className="px-3 py-2 space-y-0">
                <div className="flex items-start gap-4">
                  <DebugGeo3dSvg data={cuboidPlainDiagram} width={180} height={144} />
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

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 2a: 线与线 — 三种基本关系 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="line-line" className="mb-1 scroll-mt-4">
        <Collapsible title="二、线与线" defaultOpen storageKey="geo3d-relation:line-line">
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            <div className="bg-gray-50 border border-gray-200 rounded p-2">
              <p>空间中两条直线只有<strong>三种</strong>关系，没有第四种：</p>
            </div>

            {/* 平行 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100">① 平行</div>
              <div className="px-3 py-2 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p><strong>定义</strong>：同一平面内不相交的两条直线叫做平行线</p>
                    <p className="mt-1">直线 a 和直线 b 互相平行，记作 <MathTex tex="a \parallel b" /></p>
                    <p className="mt-2"><strong>重要公理：平行传递</strong></p>
                    <p className="mt-1">平行于同一条直线的两条直线互相平行</p>
                    <p className="mt-1"><MathTex tex="a \parallel b" />，<MathTex tex="c \parallel b" /> 则 <MathTex tex="a \parallel c" /></p>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center"><DebugGeo3dSvg data={axiom4Diagram} width={108} height={90} /></div>
                </div>
                <div className="flex items-start gap-3 mt-2 pt-2 border-t border-gray-200">
                  <div className="flex-1">
                    <p className="font-bold">在长方体中找平行线：</p>
                    <p className="mt-1">AB <MathTex tex="\parallel" /> DC（面 ABCD 的对边）</p>
                    <p className="mt-1">AB <MathTex tex="\parallel" /> <MathTex tex="A_1B_1" />（上下对应的边）</p>
                    <p className="mt-1"><MathTex tex="AA_1" /> <MathTex tex="\parallel" /> <MathTex tex="BB_1" /> <MathTex tex="\parallel" /> <MathTex tex="CC_1" /> <MathTex tex="\parallel" /> <MathTex tex="DD_1" />（四条竖直边都互相平行，由平行传递得到）</p>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center"><DebugGeo3dSvg data={cuboidParallelDiagram} width={151} height={125} /></div>
                </div>
              </div>
            </div>

            <PageBreak />
            {/* 相交 */}
            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100">② 相交</div>
              <div className="px-3 py-2 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p><strong>定义</strong>：如果两条直线只有一个公共点，称这两条直线相交</p>
                    <p className="mt-1">直线 a 和直线 b 交于点 P，记作 <MathTex tex="a \cap b = P" /></p>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center"><DebugGeo3dSvg data={intersectingLinesDiagram} width={101} height={65} /></div>
                </div>
                <div className="flex items-start gap-3 mt-2 pt-2 border-t border-gray-200">
                  <div className="flex-1">
                    <p className="font-bold">在长方体中找相交线：</p>
                    <p className="mt-1">AB 和 BC 交于点 B</p>
                    <p className="mt-1">AB 和 <MathTex tex="BB_1" /> 交于点 B</p>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center"><DebugGeo3dSvg data={cuboidIntersectDiagram} width={135} height={125} /></div>
                </div>
              </div>
            </div>


            {/* 异面 */}
            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-800 border-b border-purple-300 bg-purple-100">③ 异面（空间特有！）</div>
              <div className="px-3 py-2 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p><strong>数学定义</strong>：不在同一个平面内的两条直线（既不平行也不相交）</p>
                    <p className="font-bold mt-2">在长方体中找异面线：</p>
                    <p className="mt-1"><MathTex tex="AA_1" /> 和 BC 是异面的（一个竖直，一个在面 ABCD 上，不共面）</p>
                    <p className="mt-1">AB 和 <MathTex tex="CC_1" /> 是异面的（一个在面 ABCD 上，一个竖直）</p>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center"><DebugGeo3dSvg data={cuboidSkewDiagram} width={145} height={128} /></div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded p-2 mt-2">
                  <p className="font-bold text-yellow-800">怎么判断两条线是不是异面？</p>
                  <p className="mt-1">把两条线延长，如果既不平行也不相交，就是异面</p>
                </div>
              </div>
            </div>

            {/* 垂直 */}
            <div className="border border-red-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-red-800 border-b border-red-300 bg-red-100">特殊关系：垂直</div>
              <div className="px-3 py-2 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p><strong>定义</strong>：两条直线所成的角为 90°，则称这两条直线互相垂直</p>
                    <p className="mt-1">直线 a 和直线 b 互相垂直，记作 <MathTex tex="a \perp b" /></p>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center"><DebugGeo3dSvg data={perpLinesDiagram} width={108} height={64} /></div>
                </div>
                <div className="flex items-start gap-3 mt-2 pt-2 border-t border-gray-200">
                  <div className="flex-1">
                    <p className="font-bold">注意：相交的线可以垂直，异面的线也可以垂直！</p>
                    <p className="mt-1">AB <MathTex tex="\perp" /> <MathTex tex="AA_1" />（相交垂直）</p>
                    <p className="mt-1">AB <MathTex tex="\perp" /> <MathTex tex="CC_1" />（异面垂直：因为 AB <MathTex tex="\parallel" /> DC，而 DC <MathTex tex="\perp" /> <MathTex tex="CC_1" />，所以 AB <MathTex tex="\perp" /> <MathTex tex="CC_1" />）</p>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center"><DebugGeo3dSvg data={cuboidPerpDiagram} width={133} height={120} /></div>
                </div>
              </div>
            </div>

            {/* 速查表 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100">速查表：怎么证明线线关系？</div>
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
      <section id="line-plane" className="mb-1 scroll-mt-4">
        <Collapsible title="三、线与面" defaultOpen storageKey="geo3d-relation:line-plane">
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            {/* 在面内 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100">① 在面内</div>
              <div className="px-3 py-1">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p><strong>定义</strong>：直线上每个点都在平面上</p>
                    <p className="mt-1"><strong>符号</strong>：<MathTex tex="a \subset \beta" /></p>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center"><DebugGeo3dSvg data={lineInPlaneDiagram} width={126} height={50} /></div>
                </div>
                <div className="flex items-start gap-3 pt-1 border-t border-gray-200">
                  <div className="flex-1">
                    <p className="font-bold">在长方体中：</p>
                    <p className="mt-1">AB 在面 ABCD 内（<MathTex tex="AB \subset" /> 面 ABCD）</p>
                    <p className="mt-1"><MathTex tex="A_1B_1" /> 在面 <MathTex tex="A_1B_1C_1D_1" /> 内</p>
                  </div>
                  <div className="w-[180px] shrink-0 flex justify-center"><DebugGeo3dSvg data={cuboidLineInPlaneDiagram} width={144} height={98} /></div>
                </div>
              </div>
            </div>

            {/* 线面平行 */}
            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100">② 平行</div>
              <div className="px-3 py-1">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p><strong>定义</strong>：直线和平面没有公共点</p>
                    <p className="mt-1"><strong>符号</strong>：<MathTex tex="a \parallel \beta" /></p>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center"><DebugGeo3dSvg data={lineParallelPlaneDiagram} width={114} height={58} /></div>
                </div>
                <div className="flex items-start gap-3 pt-1 border-t border-gray-200">
                  <div className="flex-1">
                    <p className="font-bold">在长方体中：</p>
                    <p className="mt-1">AB 平行于面 <MathTex tex="A_1B_1C_1D_1" />（AB 不在面 <MathTex tex="A_1B_1C_1D_1" /> 内，且和面 <MathTex tex="A_1B_1C_1D_1" /> 没有交点）</p>
                  </div>
                  <div className="w-[180px] shrink-0 flex justify-center"><DebugGeo3dSvg data={cuboidLpParallelDiagram} width={121} height={93} /></div>
                </div>
              </div>
            </div>

            {/* 线面相交 */}
            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100">③ 相交</div>
              <div className="px-3 py-1">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p><strong>定义</strong>：直线和平面有且仅有一个公共点</p>
                    <p className="mt-1"><strong>符号</strong>：<MathTex tex="a \cap \beta = P" /></p>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center"><DebugGeo3dSvg data={lineIntersectPlaneDiagram} width={126} height={72} /></div>
                </div>
                <div className="flex items-start gap-3 pt-1 border-t border-gray-200">
                  <div className="flex-1">
                    <p className="font-bold">在长方体中：</p>
                    <p className="mt-1"><MathTex tex="AA_1" /> 和面 ABCD 交于点 A</p>
                  </div>
                  <div className="w-[180px] shrink-0 flex justify-center"><DebugGeo3dSvg data={cuboidLpIntersectDiagram} width={144} height={108} /></div>
                </div>
              </div>
            </div>


            {/* ④ 垂直 */}
            <div className="border border-red-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-red-800 border-b border-red-300 bg-red-100">④ 垂直</div>
              <div className="px-3 py-2 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p><strong>定义</strong>：如果一条直线与平面内的每一条直线都垂直，则称这条直线与该平面垂直</p>
                    <p className="mt-1"><strong>符号</strong>：<MathTex tex="a \perp \beta" />，交点叫做<strong>垂足</strong></p>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center"><DebugGeo3dSvg data={linePerpPlaneDiagram} width={126} height={72} /></div>
                </div>
                <div className="flex items-start gap-3 mt-1 pt-1 border-t border-gray-200">
                  <div className="flex-1">
                    <p className="font-bold">在长方体中：</p>
                    <p className="mt-1"><MathTex tex="AA_1" /> <MathTex tex="\perp" /> 面 ABCD（<MathTex tex="AA_1" /> 垂直于底面内所有直线）</p>
                    <p className="mt-1"><MathTex tex="BB_1" /> <MathTex tex="\perp" /> 面 ABCD，<MathTex tex="CC_1" /> <MathTex tex="\perp" /> 面 ABCD，<MathTex tex="DD_1" /> <MathTex tex="\perp" /> 面 ABCD</p>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center"><DebugGeo3dSvg data={cuboidLpPerpDetDiagram} width={114} height={110} /></div>
                </div>
              </div>
            </div>

            {/* 定理① 线面平行判定 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100">定理①：线面平行判定（线线平行 升级到 线面平行）</div>
              <div className="px-3 py-2 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p>平面外一条直线与此平面内的一条直线平行，则该直线与此平面平行</p>
                    <div className="mt-1">
                      <p>条件：<MathTex tex="a \not\subset \beta" />（a 不在面内），<MathTex tex="b \subset \beta" />（b 在面内），<MathTex tex="a \parallel b" /></p>
                      <p className="mt-1">结论：<MathTex tex="a \parallel \beta" /></p>
                    </div>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center"><DebugGeo3dSvg data={lpParallelDetDiagram} width={151} height={96} /></div>
                </div>
                <div className="flex items-start gap-3 mt-2 pt-2 border-t border-gray-200">
                  <div className="flex-1">
                    <p className="font-bold">在长方体中：</p>
                    <p className="mt-1">1. <MathTex tex="AB \parallel A_1B_1" />（线线平行）</p>
                    <p className="mt-1">2. <MathTex tex="A_1B_1" /> 在面 <MathTex tex="A_1B_1C_1D_1" /> 内，<MathTex tex="AB" /> 不在面 <MathTex tex="A_1B_1C_1D_1" /> 内</p>
                    <p className="mt-1">3. 所以 <strong><MathTex tex="AB \parallel" /> 面 <MathTex tex="A_1B_1C_1D_1" /></strong></p>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center"><DebugGeo3dSvg data={cuboidLpParallelDetExDiagram} width={121} height={111} /></div>
                </div>
              </div>
            </div>

            {/* 定理② 线面平行性质 */}
            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100">定理②：线面平行性质（线面平行 降级到 线线平行）</div>
              <div className="px-3 py-2 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p>平面外一条直线 a 和这个平面 <MathTex tex="\beta" /> 的垂线 n 垂直，则这条直线和该平面平行</p>
                    <div className="mt-1">
                      <p>条件：<MathTex tex="n \perp \beta" />（n 是面的垂线），<MathTex tex="a \perp n" />（a 垂直于 n），<MathTex tex="a \not\subset \beta" />（a 不在面内）</p>
                      <p className="mt-1">结论：<MathTex tex="a \parallel \beta" /></p>
                    </div>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center"><DebugGeo3dSvg data={lpParallelPropDiagram} width={124} height={91} /></div>
                </div>
                <div className="flex items-start gap-3 mt-2 pt-2 border-t border-gray-200">
                  <div className="flex-1">
                    <p className="font-bold">在长方体中：</p>
                    <p className="mt-1"><MathTex tex="AA_1" /> <MathTex tex="\perp" /> 面 ABCD（<MathTex tex="AA_1" /> 是垂线 n）</p>
                    <p className="mt-1"><MathTex tex="A_1B_1" /> <MathTex tex="\perp" /> <MathTex tex="AA_1" />（<MathTex tex="A_1B_1" /> 就是直线 a）</p>
                    <p className="mt-1">所以 <MathTex tex="A_1B_1" /> <MathTex tex="\parallel" /> 面 ABCD</p>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center"><DebugGeo3dSvg data={cuboidLpParallelPropDiagram} width={146} height={110} /></div>
                </div>
              </div>
            </div>


            {/* 判定定理 */}
            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-800 border-b border-purple-300 bg-purple-100">判定定理（1个）</div>
              <div className="px-3 py-2 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p>如果一条直线与平面内的<strong>两条相交直线</strong>都垂直，那么这条直线与该平面垂直</p>
                    <div className="mt-1">
                      <p>条件：<MathTex tex="m, n \subset \beta" />，<MathTex tex="m \cap n = O" />，<MathTex tex="l \perp m" />，<MathTex tex="l \perp n" /></p>
                      <p className="mt-1">结论：<MathTex tex="l \perp \beta" /></p>
                    </div>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center"><DebugGeo3dSvg data={lpPerpDetDiagram} width={130} height={93} /></div>
                </div>
              </div>
            </div>

            {/* 性质定理 */}
            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100">性质定理（4条）</div>
              <div className="px-3 py-2 space-y-2">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p className="font-bold">性质1：</p>
                    <p>如果一条直线垂直于一个平面，那么该直线垂直于平面内的所有直线</p>
                    <p className="mt-1">条件：<MathTex tex="l \perp \beta" />，<MathTex tex="a \subset \beta" />　结论：<MathTex tex="l \perp a" /></p>
                  </div>
                  <div className="w-[160px] shrink-0 flex justify-center"><DebugGeo3dSvg data={lpPerpProp1Diagram} width={126} height={99} /></div>
                </div>
                <div className="flex items-start gap-3 border-t border-gray-200 pt-2">
                  <div className="flex-1">
                    <p className="font-bold">性质2：</p>
                    <p>过空间中任意一点，有且只有一条直线与已知平面垂直</p>
                    <p className="mt-1">即：不管点在哪儿，都只能画出一条经过它、并且垂直于这个平面的直线，不会有第二条</p>
                  </div>
                  <div className="w-[160px] shrink-0 flex justify-center"><DebugGeo3dSvg data={lpPerpProp2Diagram} width={126} height={85} /></div>
                </div>
                <div className="flex items-start gap-3 border-t border-gray-200 pt-2">
                  <div className="flex-1">
                    <p className="font-bold">性质3：</p>
                    <p>如果在两条平行直线中，有一条直线垂直于一个平面，那么另一条直线也垂直于该平面</p>
                    <p className="mt-1">条件：<MathTex tex="a \parallel b" />，<MathTex tex="a \perp \beta" />　结论：<MathTex tex="b \perp \beta" /></p>
                  </div>
                  <div className="w-[160px] shrink-0 flex justify-center"><DebugGeo3dSvg data={lpPerpProp3Diagram} width={123} height={81} /></div>
                </div>
                <div className="flex items-start gap-3 border-t border-gray-200 pt-2">
                  <div className="flex-1">
                    <p className="font-bold">性质4：</p>
                    <p>垂直于同一平面的两条直线是平行的</p>
                    <p className="mt-1">条件：<MathTex tex="a \perp \beta" />，<MathTex tex="b \perp \beta" />　结论：<MathTex tex="a \parallel b" /></p>
                  </div>
                  <div className="w-[160px] shrink-0 flex justify-center"><DebugGeo3dSvg data={lpPerpPropDiagram} width={126} height={79} /></div>
                </div>
              </div>
            </div>

            {/* 速查表 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100">速查表：线面定理怎么用？</div>
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

          </div>
        </Collapsible>
      </section>

      <PageBreak label="7.1 面与面（再升级！）" />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 4: 面与面的关系 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="plane-plane" className="mb-1 scroll-mt-4">
        <Collapsible title="四、面与面" defaultOpen storageKey="geo3d-relation:plane-plane">
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            {/* 定理⑤ 面面平行判定 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100">定理⑤：面面平行判定（线面平行 升级到 面面平行）</div>
              <div className="px-3 py-2 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p>一个面内有<strong>两条相交的线</strong>都平行于另一个面，那这两个面就平行</p>
                    <div className="mt-1">
                      <p>条件：<MathTex tex="a, b \subset \beta" />，<MathTex tex="a \cap b = P" />，<MathTex tex="a \parallel \gamma" />，<MathTex tex="b \parallel \gamma" /></p>
                      <p className="mt-1">结论：<MathTex tex="\beta \parallel \gamma" /></p>
                    </div>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center"><DebugGeo3dSvg data={ppParallelDetDiagram} width={162} height={100} /></div>
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
                  <div className="w-[190px] shrink-0 flex justify-center"><DebugGeo3dSvg data={cuboidPpDetExDiagram} width={162} height={135} /></div>
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
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100">定理⑥：面面平行性质（面面平行 降级到 线线平行）</div>
              <div className="px-3 py-2 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p>两个平行面被第三个面切一刀，切出来的两条线平行</p>
                    <div className="mt-1">
                      <p>条件：<MathTex tex="\beta \parallel \gamma" />，<MathTex tex="\delta \cap \beta = a" />，<MathTex tex="\delta \cap \gamma = b" /></p>
                      <p className="mt-1">结论：<MathTex tex="a \parallel b" /></p>
                    </div>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center"><DebugGeo3dSvg data={ppParallelPropDiagram} width={162} height={98} /></div>
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
                  <div className="w-[190px] shrink-0 flex justify-center"><DebugGeo3dSvg data={cuboidPpPropExDiagram} width={162} height={135} /></div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded p-2 mt-1">
                  <p className="font-bold">这个定理很实用</p>
                  <p className="mt-1">当你已知两个面平行，想找一组平行线时，只要用第三个面去“切”一刀，切出来的两条交线就是平行的</p>
                  <p className="mt-1">高考中常用来找中位线、截面等问题中的平行关系</p>
                </div>
              </div>
            </div>

            {/* 定理⑦ 面面垂直判定 */}
            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-800 border-b border-purple-300 bg-purple-100">定理⑦：面面垂直判定（线面垂直 升级到 面面垂直）</div>
              <div className="px-3 py-1.5 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p>一个面里面有条线垂直于另一个面，那这两个面就垂直</p>
                    <div className="mt-1">
                      <p>条件：<MathTex tex="l \perp \beta" />，<MathTex tex="l \subset \gamma" /></p>
                      <p className="mt-1">结论：<MathTex tex="\beta \perp \gamma" /></p>
                    </div>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center"><DebugGeo3dSvg data={ppPerpDetDiagram} width={162} height={126} /></div>
                </div>
                <div className="flex items-start gap-3 mt-1">
                  <div className="flex-1">
                    <p className="font-bold">在长方体中：</p>
                    <p className="mt-1">1. <MathTex tex="AA_1 \perp" /> 面 <MathTex tex="A_1B_1C_1D_1" />（线面垂直）</p>
                    <p className="mt-1">2. <MathTex tex="AA_1 \subset" /> 面 <MathTex tex="ABB_1A_1" /></p>
                    <p className="mt-1">3. 由面面垂直判定定理⑦：<strong>面 <MathTex tex="ABB_1A_1 \perp" /> 面 <MathTex tex="A_1B_1C_1D_1" /></strong></p>
                  </div>
                  <div className="w-[190px] shrink-0 flex justify-center"><DebugGeo3dSvg data={cuboidPpPerpDetExDiagram} width={138} height={125} /></div>
                </div>
              </div>
            </div>

            {/* 定理⑧ 面面垂直性质 */}
            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100">定理⑧：面面垂直性质（面面垂直 降级到 线面垂直）</div>
              <div className="px-3 py-1.5 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p>两个面垂直，在一个面内画一条垂直于交线的线，那条线就垂直于另一个面</p>
                    <div className="mt-1">
                      <p>条件：<MathTex tex="\beta \perp \gamma" />，<MathTex tex="\beta \cap \gamma = l" />，<MathTex tex="a \subset \beta" />，<MathTex tex="a \perp l" /></p>
                      <p className="mt-1">结论：<MathTex tex="a \perp \gamma" /></p>
                    </div>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center"><DebugGeo3dSvg data={ppPerpPropDiagram} width={162} height={126} /></div>
                </div>
                <div className="flex items-start gap-3 mt-1">
                  <div className="flex-1">
                    <p className="font-bold">在长方体中：</p>
                    <p className="mt-1">1. 已知：面 <MathTex tex="ABB_1A_1 \perp" /> 面 <MathTex tex="A_1B_1C_1D_1" />，交线 <MathTex tex="l = A_1B_1" /></p>
                    <p className="mt-1">2. 在面 <MathTex tex="ABB_1A_1" /> 内：<MathTex tex="AA_1 \perp A_1B_1" />（即 <MathTex tex="AA_1 \perp l" />）</p>
                    <p className="mt-1">3. 由面面垂直性质定理⑧：<strong><MathTex tex="AA_1 \perp" /> 面 <MathTex tex="A_1B_1C_1D_1" /></strong></p>
                  </div>
                  <div className="w-[190px] shrink-0 flex justify-center"><DebugGeo3dSvg data={cuboidPpPerpPropExDiagram} width={162} height={135} /></div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded p-2 mt-2">
                  <p className="font-bold text-yellow-800">易错点</p>
                  <p className="mt-1">不是面面垂直就能随便得到线面垂直！那条线必须<strong>垂直于交线</strong></p>
                </div>
              </div>
            </div>

            {/* 速查表 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100">速查表：面面定理怎么用？</div>
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


          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 5: 八大定理关系图 + 高考证明套路 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="theorem-map" className="mb-1 scroll-mt-4">
        <Collapsible title="五、八大定理关系图 & 高考证明套路" defaultOpen storageKey="geo3d-relation:theorem-map">
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            {/* 定理转化关系 */}
            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100">定理转化关系（低维到高维 = 判定，高维到低维 = 性质）</div>
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

            <div className="break-before-page"></div>
            {/* 平行证明 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100">证明平行（3 类问题）</div>
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
              <div className="px-2 py-1 font-bold text-purple-800 border-b border-purple-300 bg-purple-100">证明垂直（3 类问题）</div>
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
      <UnifiedDebugToggle />
    </div>
  );
}
