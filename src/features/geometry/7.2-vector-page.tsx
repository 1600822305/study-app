import { Math as MathTex, Collapsible, PageHeader, LessonLayout, ExportButton, PageBreak, DebugGeo3dSvg, UnifiedDebugToggle, PracticeCard } from '@/components/shared';
import { cuboidCoordSystemDiagram, tetraCoordSystemDiagram, sidePerpPyramidCoordDiagram, sideFacePerpendicularDiagram, regularTetrahedronCubeDiagram, regularPyramidCoordDiagram, isoscelesTrapezoidPyramidDiagram, rightTrapezoidPyramidDiagram, obliquePrismDiagram, rhombusPrismDiagram, regularTriPrismDiagram, frustumDiagram, frustumPyramidDiagram, rightHandSystemDiagram, normalVectorDiagram, normalVectorMethodDiagram, normalVectorExampleDiagram, parallelCubeOriginal, parallelCubeDiagram, parallelLineLineDiagram, parallelLinePlaneDiagram, parallelPlanesDiagram, pureCubeDiagram, perpLinePlaneDiagram, perpPlanesDiagram, angleLineLineDiagram, angleLinePlaneDiagram, angleDihedralDiagram, distancePointToBaseDiagram, distancePointToPlaneBDC1Diagram } from './data/7.2/7.2-vector-diagrams';
import { geo3dVectorProgressItems } from './data/7.2/7.2-vector-progress';
import { geo3dVectorEssayQuestions } from './data/7.2/7.2-vector-questions';
import { practicePyramidMidDiagram, practiceCubeMidDiagram, practicePrismDiagram } from './data/7.2/7.2-practice-diagrams';
import { parallelLineLinePractice, parallelLinePlanePractice, parallelPlanePlanePractice, perpPractice } from './data/7.2/7.2-parallel-practice';
import { anglePractice } from './data/7.2/7.2-angle-practice';
import { distancePractice } from './data/7.2/7.2-distance-practice';
import { Geo3dVectorAnswers } from './7.2-vector-answers';
import { useProgress } from '@/hooks';
import { usePrintMode } from '@/hooks/usePrintMode';
import { scrollToId } from '@/lib/scroll';

export function Geo3dVectorPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('geo3d-vector', geo3dVectorProgressItems);
  const { isPrinting, printOptions } = usePrintMode();

  return (
    <div>
      <PageHeader
        stage="第七阶段 · 立体几何"
        title="7.2 空间向量法"
        subtitle="用向量求角度、距离——立体几何解答题的万能钥匙"
        tags={[
          { label: '难度 ★★★☆☆', color: 'amber' },
          { label: '高考 12-17 分', color: 'red' },
          { label: '约4天', color: 'blue' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="7.2 空间向量法" />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-3 mb-0">
        <p className="font-bold text-gray-800 mb-2">📋 学习路线（循序渐进）</p>
        <div className="text-gray-800 grid grid-cols-3 gap-x-4 gap-y-1">
          <button onClick={() => scrollToId('why-vector')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">一、为什么学向量法</button>
          <button onClick={() => scrollToId('normal-vector')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">三、法向量</button>
          <button onClick={() => scrollToId('perpendicular-detail')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">六、证垂直</button>
          <button onClick={() => scrollToId('coordinate-system')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">二、建系与坐标</button>
          <button onClick={() => scrollToId('five-formulas')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">四、公式速查</button>
          <button onClick={() => scrollToId('angle-detail')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">七、求角度</button>
          <button onClick={() => scrollToId('parallel-detail')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">五、证平行</button>
          <button onClick={() => scrollToId('distance')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">八、求距离</button>
          <button onClick={() => scrollToId('practice-problems')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">九、训练题</button>
        </div>
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 1: 为什么学向量法 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="why-vector" className="scroll-mt-4">
        <Collapsible title="一、为什么学向量法" defaultOpen storageKey="geo3d-vector:why">
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-[0.9rem]">几何法 vs 向量法</div>
              <div className="px-3 py-2">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="py-1 pr-2 w-28"></th>
                      <th className="py-1 pr-2">几何法（7.1 学的）</th>
                      <th className="py-1 pr-2">向量法（本节）</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 pr-2 font-bold">核心思路</td>
                      <td className="py-1 pr-2">找辅助线，用八大定理推导</td>
                      <td className="py-1 pr-2">建坐标系，算数值</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 pr-2 font-bold">难点</td>
                      <td className="py-1 pr-2">辅助线不好想，定理容易搞混</td>
                      <td className="py-1 pr-2">计算量大，但有固定套路</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 pr-2 font-bold">能解什么</td>
                      <td className="py-1 pr-2">平行/垂直证明</td>
                      <td className="py-1 pr-2">平行/垂直 + 角度 + 距离（全能）</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-[0.9rem]">向量法的固定流程（四步走）</div>
              <div className="px-3 py-2 space-y-1">
                <p><strong>第一步：建系</strong> — 找三条互相垂直的边，建空间直角坐标系</p>
                <p><strong>第二步：写坐标</strong> — 把所有相关的点用坐标表示</p>
                <p><strong>第三步：求向量</strong> — 写出需要的向量（方向向量、法向量等）</p>
                <p><strong>第四步：套公式</strong> — 代入对应公式，算出结果</p>
              </div>
            </div>

            <div className="border border-red-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-red-800 border-b border-red-300 bg-red-100 text-[0.9rem]">高考题型清单（湖南·新高考I卷）</div>
              <div className="px-3 py-2">
                <p className="mb-1">立体几何大题固定 12~14 分，分两问：</p>
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="py-1 pr-2 w-12">频率</th>
                      <th className="py-1 pr-2">题型</th>
                      <th className="py-1 pr-2">出现在哪问</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 pr-2 font-bold text-red-700">必考</td>
                      <td className="py-1 pr-2">证明垂直（线面垂直、面面垂直）</td>
                      <td className="py-1 pr-2">第(1)问，几何法或向量法</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 pr-2 font-bold text-red-700">必考</td>
                      <td className="py-1 pr-2">求二面角的余弦值</td>
                      <td className="py-1 pr-2">第(2)问，向量法</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 pr-2 font-bold text-amber-700">高频</td>
                      <td className="py-1 pr-2">证明平行（线面平行）</td>
                      <td className="py-1 pr-2">第(1)问，几何法或向量法</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 pr-2 font-bold text-amber-700">高频</td>
                      <td className="py-1 pr-2">求线面角的正弦值</td>
                      <td className="py-1 pr-2">第(2)问，向量法</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 pr-2 font-bold text-blue-700">中频</td>
                      <td className="py-1 pr-2">求异面直线所成角</td>
                      <td className="py-1 pr-2">第(2)问，向量法</td>
                    </tr>
                    <tr>
                      <td className="py-1 pr-2 font-bold text-blue-700">中频</td>
                      <td className="py-1 pr-2">求点到面的距离</td>
                      <td className="py-1 pr-2">第(2)问，向量法</td>
                    </tr>
                  </tbody>
                </table>
                <p className="mt-1"><strong>结论</strong>：向量法可以通吃所有题型，建一次系两问全搞定。7.1 的定理了解即可，帮助你读懂题目</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 2: 建系与坐标 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="coordinate-system" className="scroll-mt-4">
        <Collapsible title="二、建系与坐标（最关键的一步）" defaultOpen storageKey="geo3d-vector:coordinate">
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-[0.9rem]">建系原则</div>
              <div className="px-3 py-2 space-y-1">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p><strong>原点 <MathTex tex="O" />：</strong>三条坐标轴的交点，由你任选一个合适的顶点（如长方体的一个顶点）</p>
                    <p className="mt-1"><strong>三条坐标轴：</strong>两两互相垂直的数轴，通常选取几何体中从同一点出发的三条两两垂直的棱</p>
                    <p className="mt-1"><strong>右手系：</strong>用右手四指从 <MathTex tex="x" /> 轴正方向弯向 <MathTex tex="y" /> 轴正方向时，拇指指向 <MathTex tex="z" /> 轴正方向</p>
                  </div>
                  <div className="w-[140px] shrink-0 flex justify-center">
                    <DebugGeo3dSvg data={rightHandSystemDiagram} width={106} height={88} />
                  </div>
                </div>
              </div>
            </div>


            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-800 border-b border-purple-300 bg-purple-100 text-[0.9rem]">建系示例：长方体</div>
              <div className="px-3 py-2 space-y-1">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p>长方体 <MathTex tex="ABCD\text{-}A_1B_1C_1D_1" /> 中，<MathTex tex="AB = a" />，<MathTex tex="AD = b" />，<MathTex tex="AA_1 = c" /></p>
                    <p className="mt-2">以 <MathTex tex="A" /> 为原点，<span className="text-red-600 font-bold"><MathTex tex="AD" /> 为 <MathTex tex="x" /> 轴</span>，<span className="text-green-600 font-bold"><MathTex tex="AB" /> 为 <MathTex tex="y" /> 轴</span>，<span className="text-blue-600 font-bold"><MathTex tex="AA_1" /> 为 <MathTex tex="z" /> 轴</span>，建立空间直角坐标系，如图所示</p>
                    <div className="mt-2 bg-gray-50 rounded p-1 text-[0.85rem]">
                      <p className="font-bold mb-0.5">各顶点坐标：</p>
                      <div className="grid grid-cols-4 gap-x-3 gap-y-0">
                        <p><MathTex tex="A = (0, 0, 0)" /></p>
                        <p><MathTex tex="B = (0, a, 0)" /></p>
                        <p><MathTex tex="C = (b, a, 0)" /></p>
                        <p><MathTex tex="D = (b, 0, 0)" /></p>
                        <p><MathTex tex="A_1 = (0, 0, c)" /></p>
                        <p><MathTex tex="B_1 = (0, a, c)" /></p>
                        <p><MathTex tex="C_1 = (b, a, c)" /></p>
                        <p><MathTex tex="D_1 = (b, 0, c)" /></p>
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <DebugGeo3dSvg data={cuboidCoordSystemDiagram} width={179} height={174} />
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-orange-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-orange-800 border-b border-orange-300 bg-orange-100 text-[0.9rem]">其他常见建系</div>
              <div className="px-3 py-2 flex gap-4">
                <div className="flex-1 flex flex-col items-center">
                  <p className="font-bold mb-1 text-center">直角三棱锥（三棱互相垂直）</p>
                  <DebugGeo3dSvg data={tetraCoordSystemDiagram} width={160} height={160} />
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <p className="font-bold mb-1 text-center">侧棱垂直底面（底面为正三角形）</p>
                  <DebugGeo3dSvg data={sidePerpPyramidCoordDiagram} width={160} height={160} />
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <p className="font-bold mb-1 text-center">侧面垂直底面（侧底为等腰三角形）</p>
                  <DebugGeo3dSvg data={sideFacePerpendicularDiagram} width={160} height={160} />
                </div>
              </div>
              <div className="px-3 pb-2 flex gap-4 border-t border-orange-200 pt-2">
                <div className="flex-1 flex flex-col items-center">
                  <p className="font-bold mb-1 text-center">正四面体（补成正方体）</p>
                  <DebugGeo3dSvg data={regularTetrahedronCubeDiagram} width={160} height={160} />
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <p className="font-bold mb-1 text-center">正四棱锥（底面正方形）</p>
                  <DebugGeo3dSvg data={regularPyramidCoordDiagram} width={160} height={160} />
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <p className="font-bold mb-1 text-center">四棱锥（底面等腰梯形）</p>
                  <DebugGeo3dSvg data={isoscelesTrapezoidPyramidDiagram} width={160} height={160} rotation={{ az: 81, el: 38 }} />
                </div>
              </div>
              <div className="px-3 pb-2 flex gap-4 border-t border-orange-200 pt-2">
                <div className="flex-1 flex flex-col items-center">
                  <p className="font-bold mb-1 text-center">四棱锥（底面直角梯形）</p>
                  <DebugGeo3dSvg data={rightTrapezoidPyramidDiagram} width={160} height={160} rotation={{ az: 81, el: 38 }} />
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <p className="font-bold mb-1 text-center">斜棱柱（侧面垂直底面）</p>
                  <DebugGeo3dSvg data={obliquePrismDiagram} width={160} height={160} />
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <p className="font-bold mb-1 text-center">斜棱柱（底面菱形）</p>
                  <DebugGeo3dSvg data={rhombusPrismDiagram} width={160} height={160} />
                </div>
              </div>
              <div className="px-3 pb-2 flex gap-4 border-t border-orange-200 pt-2">
                <div className="flex-1 flex flex-col items-center">
                  <p className="font-bold mb-1 text-center">正四棱台</p>
                  <DebugGeo3dSvg data={frustumDiagram} width={160} height={160} />
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <p className="font-bold mb-1 text-center">正四棱台（补成棱锥）</p>
                  <DebugGeo3dSvg data={frustumPyramidDiagram} width={160} height={160} />
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <p className="font-bold mb-1 text-center">正三棱柱</p>
                  <DebugGeo3dSvg data={regularTriPrismDiagram} width={160} height={160} />
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-300 rounded px-3 py-1.5 text-[0.85rem] text-gray-800">
              <p><strong>有三垂直棱</strong> → 交点做原点，三棱做三轴（直角三棱锥、长方体、直棱柱）</p>
              <p><strong>底面有对称性</strong> → 底面中心做原点，对称轴/对角线做坐标轴（正棱锥、棱台）</p>
              <p><strong>没有直接垂直关系</strong> → 补图形（棱台补棱锥、正四面体补正方体），转化后再建系</p>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak label="法向量" />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 3: 法向量 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="normal-vector" className="scroll-mt-4">
        <Collapsible title="三、法向量（求角度的关键工具）" defaultOpen storageKey="geo3d-vector:normal">
          <div className="space-y-2 text-[0.9rem] text-gray-800">

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-[0.9rem]">什么是法向量</div>
              <div className="px-3 py-2 space-y-1">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p>垂直于平面的向量，就是这个平面的法向量</p>
                    <p className="mt-1">一个平面有无数个法向量，它们彼此平行（方向可正可反）</p>
                    <p className="mt-1">如果 <MathTex tex="{\color{red}\vec{n}}" /> 是平面 <MathTex tex="\alpha" /> 的法向量，那么平面内随便取一个向量 <MathTex tex="\vec{a}" />，都有 <MathTex tex="{\color{red}\vec{n}} \perp \vec{a}" />（即 <MathTex tex="{\color{red}\vec{n}} \cdot \vec{a} = 0" />，垂直则点积为零）</p>
                  </div>
                  <div className="w-[160px] shrink-0 flex justify-center">
                    <DebugGeo3dSvg data={normalVectorDiagram} width={132} height={100} />
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-[0.9rem]">求法向量的固定套路</div>
              <div className="px-3 py-2 space-y-1">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p><strong>第一步：</strong>在平面内找两个不平行的向量 <MathTex tex="{\color{blue}\vec{a}}" /> 和 <MathTex tex="{\color{green}\vec{b}}" />（取相交的两条边即可）</p>
                    <p className="mt-1"><strong>第二步：</strong>设法向量 <MathTex tex="{\color{red}\vec{n}} = (x, y, z)" /></p>
                    <p className="mt-1"><strong>第三步：</strong>列方程组</p>
                    <div className="ml-4 mt-1">
                      <MathTex tex="\begin{cases} {\color{red}\vec{n}} \cdot {\color{blue}\vec{a}} = 0 \\ {\color{red}\vec{n}} \cdot {\color{green}\vec{b}} = 0 \end{cases}" display />
                    </div>
                    <p className="mt-1"><strong>第四步：</strong>解方程组（令 <MathTex tex="x" />、<MathTex tex="y" />、<MathTex tex="z" /> 中某一个 = 1，解出另外两个）</p>
                  </div>
                  <div className="w-[150px] shrink-0 flex justify-center">
                    <DebugGeo3dSvg data={normalVectorMethodDiagram} width={140} height={130} />
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-[0.9rem]">示例：直角三棱锥，求斜面法向量</div>
              <div className="px-3 py-2 space-y-1">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p><strong>题目：</strong>三棱锥 O-ABC 中，OA、OB、OC 两两垂直，<br />且 OA = OB = OC = 1，求平面 ABC 的一个法向量</p>
                    <p className="mt-1"><strong>建系：</strong>以 O 为原点，OB 为 x 轴，OA 为 y 轴，OC 为 z 轴</p>
                    <p className="mt-1">则 <MathTex tex="O(0,0,0)" />，<MathTex tex="A(0,1,0)" />，<MathTex tex="B(1,0,0)" />，<MathTex tex="C(0,0,1)" /></p>
                    <p className="mt-1"><strong>第一步</strong>：面内向量 <MathTex tex="{\color{blue}\overrightarrow{AB}} = (1,-1,0)" />，<MathTex tex="{\color{green}\overrightarrow{AC}} = (0,-1,1)" /></p>
                    <p className="mt-1"><strong>第二步</strong>：设 <MathTex tex="{\color{red}\vec{n}} = (x, y, z)" /></p>
                    <p className="mt-1"><strong>第三步</strong>：列方程（<MathTex tex="\vec{n}" /> 分别与面内向量点乘 = 0）</p>
                    <div className="ml-4 mt-1">
                      <p><MathTex tex="{\color{red}\vec{n}} \cdot {\color{blue}\overrightarrow{AB}} = (x,y,z) \cdot (1,-1,0) = x - y = 0" />，得 <MathTex tex="y = x" /> ①</p>
                      <p className="mt-1"><MathTex tex="{\color{red}\vec{n}} \cdot {\color{green}\overrightarrow{AC}} = (x,y,z) \cdot (0,-1,1) = -y + z = 0" />，得 <MathTex tex="z = y" /> ②</p>
                    </div>
                    <p className="mt-1"><strong>第四步</strong>：令 <MathTex tex="x = 1" />，代入①②得 <MathTex tex="y = 1,\; z = 1" /></p>
                    <p className="mt-1">∴ <strong><MathTex tex="{\color{red}\vec{n}} = (1, 1, 1)" /></strong></p>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center">
                    <DebugGeo3dSvg data={normalVectorExampleDiagram} width={195} height={182} />
                  </div>
                </div>
                <div className="mt-2 pt-2 border-t border-amber-200">
                  <p className="font-bold text-amber-700">叉积速算（仅用于心算验证，不写在卷面上）</p>
                  <div className="flex gap-4 mt-1">
                    <div className="flex-1">
                      <p>口诀：<strong>求谁遮谁，剩余交叉相乘相减，y 轴取反</strong></p>
                      <div className="ml-2 mt-1">
                        <MathTex tex="\vec{a} = (x_1,\; y_1,\; z_1)" />
                        <br />
                        <MathTex tex="\vec{b} = (x_2,\; y_2,\; z_2)" />
                      </div>
                      <div className="ml-2 mt-1">
                        <p><strong>x</strong>：<MathTex tex="y_1 z_2 - z_1 y_2" /></p>
                        <p><strong>y</strong>：<MathTex tex="-(x_1 z_2 - z_1 x_2)" /></p>
                        <p><strong>z</strong>：<MathTex tex="x_1 y_2 - y_1 x_2" /></p>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold">本题验证</p>
                      <div className="ml-2 mt-1">
                        <MathTex tex="\vec{a} = (\phantom{-}1,\;-1,\;\phantom{-}0)" />
                        <br />
                        <MathTex tex="\vec{b} = (\phantom{-}0,\;-1,\;\phantom{-}1)" />
                      </div>
                      <div className="ml-2 mt-1">
                        <p><strong>x</strong>：<MathTex tex="(-1)(1) - (0)(-1) = -1" /></p>
                        <p><strong>y</strong>：<MathTex tex="-[(1)(1) - (0)(0)] = -1" /></p>
                        <p><strong>z</strong>：<MathTex tex="(1)(-1) - (-1)(0) = -1" /></p>
                      </div>
                      <p className="mt-1">得 <MathTex tex="\vec{n} = (1,1,1)" /></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 法向量的用途 */}
            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-800 border-b border-purple-300 bg-purple-100 text-[0.9rem]">法向量的用途</div>
              <div className="px-3 py-2 space-y-1">
                <p>• <strong>求二面角</strong>：两平面法向量的夹角（或其补角）</p>
                <p>• <strong>求线面角</strong>：直线方向向量与法向量夹角的余角</p>
                <p>• <strong>证平面垂直</strong>：一个平面的法向量在另一个平面内</p>
                <p>• <strong>求点到面距离</strong>：投影公式</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak />
      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 4: 公式速查 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="five-formulas" className="scroll-mt-4">
        <Collapsible title="四、向量法核心（公式速查）" defaultOpen storageKey="geo3d-vector:formulas">
          <div className="space-y-0.5 text-[0.9rem] text-gray-800">

            {/* 🎯 核心思路 */}
            <div className="bg-blue-50 border border-blue-200 rounded p-2">
              <p className="font-bold text-blue-800 text-[0.9rem]">🎯 核心思路（一句话）</p>
              <p>用<strong>坐标/向量</strong>把"几何位置关系"转化为"代数计算"，用<strong>点积、模长</strong>等运算来证明平行/垂直、求角度/距离。</p>
            </div>

            {/* 🧱 核心步骤 */}
            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-[0.9rem]">🧱 核心步骤（四步走）</div>
              <div className="px-2 py-1">
                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 pr-2 font-bold text-blue-700 w-20">① 建系</td>
                      <td className="py-1">找垂直关系（墙角、棱、面面交线）作为坐标轴，给所有点标坐标</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 pr-2 font-bold text-green-700">② 求向量</td>
                      <td className="py-1">直线 → 方向向量 <MathTex tex="\overrightarrow{AB}" />；平面 → 法向量 <MathTex tex="\vec{n}" />（用点乘=0解方程）</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 pr-2 font-bold text-purple-700">③ 套公式</td>
                      <td className="py-1">根据问题类型，选下面表格里的公式</td>
                    </tr>
                    <tr>
                      <td className="py-1 pr-2 font-bold text-amber-700">④ 代值算</td>
                      <td className="py-1">把坐标代入公式，算出结果，还原成几何语言</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 📋 公式速查表 */}
            <div className="border-2 border-blue-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-400 bg-blue-100 text-[0.9rem]">📋 公式速查表</div>
              <div className="flex gap-0">
                {/* 左列：平行 + 垂直 */}
                <div className="flex-1 px-2 py-1 border-r border-blue-200">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b-2 border-gray-300 bg-gray-50">
                        <th className="py-1 px-1 w-16">类型</th>
                        <th className="py-1 px-1">向量方法</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 bg-blue-50/50">
                        <td className="py-1 px-1 font-bold">线 ∥ 线</td>
                        <td className="py-1 px-1"><MathTex tex="\vec{a} = \lambda\vec{b}" /></td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 px-1 font-bold">线 ∥ 面</td>
                        <td className="py-1 px-1"><MathTex tex="\vec{a} \cdot \vec{n} = 0" />（且线不在面内）</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-blue-50/50">
                        <td className="py-1 px-1 font-bold">面 ∥ 面</td>
                        <td className="py-1 px-1"><MathTex tex="\vec{n_1} = \lambda\vec{n_2}" /></td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 px-1 font-bold">线 ⊥ 线</td>
                        <td className="py-1 px-1"><MathTex tex="\vec{a} \cdot \vec{b} = 0" /></td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-green-50/50">
                        <td className="py-1 px-1 font-bold">线 ⊥ 面</td>
                        <td className="py-1 px-1"><MathTex tex="\vec{a} = \lambda\vec{n}" /></td>
                      </tr>
                      <tr>
                        <td className="py-1 px-1 font-bold">面 ⊥ 面</td>
                        <td className="py-1 px-1"><MathTex tex="\vec{n_1} \cdot \vec{n_2} = 0" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* 右列：角度 + 距离 */}
                <div className="flex-1 px-2 py-1">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b-2 border-gray-300 bg-gray-50">
                        <th className="py-1 px-1 w-16">类型</th>
                        <th className="py-1 px-1">公式</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 bg-purple-50/50">
                        <td className="py-1 px-1 font-bold">线线角</td>
                        <td className="py-1 px-1"><MathTex tex="\cos\theta = \dfrac{|\vec{a} \cdot \vec{b}|}{|\vec{a}||\vec{b}|}" /></td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 px-1 font-bold">线面角</td>
                        <td className="py-1 px-1"><MathTex tex="\sin\theta = \dfrac{|\vec{a} \cdot \vec{n}|}{|\vec{a}||\vec{n}|}" />（注意 <strong>sin</strong>）</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-red-50/50">
                        <td className="py-1 px-1 font-bold text-red-700">⭐ 二面角</td>
                        <td className="py-1 px-1"><MathTex tex="\cos\theta = \dfrac{\vec{n_1} \cdot \vec{n_2}}{|\vec{n_1}||\vec{n_2}|}" />（或补角）</td>
                      </tr>
                      <tr>
                        <td className="py-1 px-1 font-bold">点面距</td>
                        <td className="py-1 px-1"><MathTex tex="d = \dfrac{|\overrightarrow{PA} \cdot \vec{n}|}{|\vec{n}|}" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>


          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 5: 证平行（详解） */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="parallel-detail" className="scroll-mt-4">
        <Collapsible title="五、证平行（详解 + 例题）" defaultOpen storageKey="geo3d-vector:parallel">
          <div className="text-[0.9rem] text-gray-800">

            {/* 线 ∥ 线 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-[0.9rem]">线 ∥ 线：方向向量成比例</div>
              <div className="px-3 py-2">
                <p><strong>判定方法：</strong>两条直线的方向向量成比例，即 <MathTex tex="\vec{a} = \lambda\vec{b}" />（<MathTex tex="\lambda" /> 为非零常数）</p>
                <p className="mt-2"><strong>为什么？</strong></p>
                <p className="ml-4">方向向量代表直线的"走向"，如果两个方向向量成比例，说明两条直线的走向完全相同（或完全相反），永远不会相交，所以平行</p>
                <p className="mt-2"><strong>计算技巧：</strong></p>
                <p className="ml-4">设 <MathTex tex="\vec{a} = (x_1, y_1, z_1)" />，<MathTex tex="\vec{b} = (x_2, y_2, z_2)" /></p>
                <p className="ml-4">验证 <MathTex tex="\dfrac{x_1}{x_2} = \dfrac{y_1}{y_2} = \dfrac{z_1}{z_2}" /> 是否成立</p>
                <p className="mt-2"><strong>答题格式（模拟卷面）：</strong></p>
                <p className="ml-4">已求出 <MathTex tex="\overrightarrow{AB} = (1, 2, -1)" />，<MathTex tex="\overrightarrow{CD} = (-2, -4, 2)" /></p>
                <p className="ml-4">因为 <MathTex tex="\dfrac{-2}{1} = \dfrac{-4}{2} = \dfrac{2}{-1} = -2" />，所以 <MathTex tex="\overrightarrow{CD} = -2\,\overrightarrow{AB}" />，即 AB ∥ CD</p>
                <p className="mt-2"><strong>有分量为0时：</strong>如 <MathTex tex="(0,2,4)" /> 与 <MathTex tex="(0,1,2)" />，<MathTex tex="x" /> 都为 <MathTex tex="0" /> <MathTex tex="\checkmark" />，<MathTex tex="\frac{2}{1}=\frac{4}{2}" /> <MathTex tex="\checkmark" />，成比例</p>
                <p className="ml-4">反例：<MathTex tex="(0,2,4)" /> 与 <MathTex tex="(1,1,2)" />，<MathTex tex="x" /> 一个 <MathTex tex="0" /> 一个 <MathTex tex="1" /> <MathTex tex="\times" />，不成比例</p>
              </div>
            </div>

            <PracticeCard title="" questions={parallelLineLinePractice} module="geo3d-parallel-ll" shuffle={false} hideBlankLine />

            <PageBreak label="线∥面" />

            {/* 线 ∥ 面 */}
            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-[0.9rem]">线 ∥ 面：方向向量 ⊥ 法向量</div>
              <div className="px-3 py-2">
                <p><strong>判定方法：</strong>同时满足两个条件：</p>
                <p className="ml-4">① <MathTex tex="\vec{a} \cdot \vec{n} = 0" />（方向向量 ⊥ 法向量）</p>
                <p className="ml-4">② 直线不在该平面内</p>
                <p className="mt-2"><strong>为什么两个都要？</strong></p>
                <p className="ml-4">方向向量 ⊥ 法向量 → 直线"不穿过"平面（平行或在面内）</p>
                <p className="ml-4">直线不在面内 → 排除"在面内"的情况，才是真正的平行</p>
                <p className="mt-2"><strong>答题格式（模拟卷面）：</strong></p>
                <p className="ml-4">已求出直线方向向量 <MathTex tex="\overrightarrow{EF} = (0, 2, 0)" />，平面法向量 <MathTex tex="\vec{n} = (1, 0, 0)" /></p>
                <p className="ml-4"><MathTex tex="\overrightarrow{EF} \cdot \vec{n} = 0 \times 1 + 2 \times 0 + 0 \times 0 = 0" /></p>
                <p className="ml-4">且 EF 不在该平面内，所以 EF ∥ 平面</p>
                <p className="mt-2"><strong>易错反例：</strong>如果 <MathTex tex="\vec{a} \cdot \vec{n} = 0" /> 但直线在面内（如直线两端点都在平面上），则不是平行，是"在面内"</p>
                <p className="ml-4">所以高考答题必须加一句"且直线不在该平面内"，否则扣分</p>
              </div>
            </div>

            <PracticeCard title="" questions={parallelLinePlanePractice} module="geo3d-parallel-lp" shuffle={false} hideBlankLine />

            {/* 面 ∥ 面 */}
            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-800 border-b border-purple-300 bg-purple-100 text-[0.9rem]">面 ∥ 面：法向量成比例</div>
              <div className="px-3 py-2">
                <p><strong>判定方法：</strong>两个平面平行 ⇔ 它们的法向量平行（成比例）</p>
                <p className="ml-4">即 <MathTex tex="\vec{n_1} = \lambda\vec{n_2}" />（<MathTex tex="\lambda" /> 为非零常数）</p>
                <p className="mt-2"><strong>为什么？</strong></p>
                <p className="ml-4">法向量代表平面的"朝向"，如果两个法向量成比例，说明两个平面的朝向完全相同，永远不会相交，所以平行</p>
                <p className="mt-2"><strong>答题格式（模拟卷面）：</strong></p>
                <p className="ml-4">已求出面 <MathTex tex="\alpha" /> 的法向量 <MathTex tex="\vec{n_1} = (1, 0, 3)" />，面 <MathTex tex="\beta" /> 的法向量 <MathTex tex="\vec{n_2} = (2, 0, 6)" /></p>
                <p className="ml-4">因为 <MathTex tex="\dfrac{2}{1} = \dfrac{6}{3} = 2" />，且 <MathTex tex="y" /> 都为 0，所以 <MathTex tex="\vec{n_2} = 2\vec{n_1}" />，即面 <MathTex tex="\alpha \parallel" /> 面 <MathTex tex="\beta" /></p>
                <p className="mt-2"><strong>有分量为0时：</strong>如 <MathTex tex="(1,0,3)" /> 与 <MathTex tex="(2,0,6)" />，<MathTex tex="y" /> 都为 <MathTex tex="0" /> <MathTex tex="\checkmark" />，<MathTex tex="\frac{1}{2}=\frac{3}{6}" /> <MathTex tex="\checkmark" />，成比例</p>
                <p className="ml-4">反例：<MathTex tex="(1,0,2)" /> 与 <MathTex tex="(3,0,5)" />，<MathTex tex="y" /> 都为 <MathTex tex="0" /> <MathTex tex="\checkmark" />，但 <MathTex tex="\frac{1}{3} \neq \frac{2}{5}" /> <MathTex tex="\times" />，不成比例</p>
              </div>
            </div>

            <PracticeCard title="" questions={parallelPlanePlanePractice} module="geo3d-parallel-pp" shuffle={false} hideBlankLine />

            {/* 记忆总结 */}
            <div className="bg-yellow-50 border border-yellow-300 rounded p-2">
              <p className="font-bold text-yellow-800 mb-1">记忆总结：三种平行对比</p>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-yellow-400">
                    <th className="py-0.5 pr-2 w-16">类型</th>
                    <th className="py-0.5 pr-2">用什么向量</th>
                    <th className="py-0.5 pr-2">怎么判断</th>
                    <th className="py-0.5 pr-2 w-28">额外条件</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-yellow-300">
                    <td className="py-0.5 pr-2 font-bold">线 ∥ 线</td>
                    <td className="py-0.5 pr-2">方向向量 vs 方向向量</td>
                    <td className="py-0.5 pr-2">成比例</td>
                    <td className="py-0.5 pr-2">无</td>
                  </tr>
                  <tr className="border-b border-yellow-300">
                    <td className="py-0.5 pr-2 font-bold">线 ∥ 面</td>
                    <td className="py-0.5 pr-2">方向向量 vs 法向量</td>
                    <td className="py-0.5 pr-2">点积 = 0</td>
                    <td className="py-0.5 pr-2 font-bold text-red-700">线不在面内</td>
                  </tr>
                  <tr>
                    <td className="py-0.5 pr-2 font-bold">面 ∥ 面</td>
                    <td className="py-0.5 pr-2">法向量 vs 法向量</td>
                    <td className="py-0.5 pr-2">成比例</td>
                    <td className="py-0.5 pr-2">无</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <PageBreak label="证平行例题" />

            {/* 实战例题 */}
            <div className="border-2 border-blue-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-400 bg-blue-100 text-[0.9rem]">实战例题：正方体中的三种平行</div>
              <div className="px-3 py-2">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p>正方体 <MathTex tex="ABCD\text{-}A_1B_1C_1D_1" />，棱长为 2，E 是 AB 中点，F 是 CD 中点</p>
                    <p className="mt-1">(1) 证明 <MathTex tex="EF \parallel AD" /></p>
                    <p className="mt-1">(2) 证明 <MathTex tex="EF \parallel" /> 面 <MathTex tex="ADD_1A_1" /></p>
                    <p className="mt-1">(3) 证明 面 <MathTex tex="A_1B_1C_1D_1 \parallel" /> 面 <MathTex tex="ABCD" /></p>
                  </div>
                  <div className="w-[153px] shrink-0 flex justify-center">
                    <DebugGeo3dSvg data={parallelCubeOriginal} width={135} height={120} />
                  </div>
                </div>
              </div>
            </div>

            {/* 完整解答 */}
            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-3 py-2 space-y-1 text-[0.9rem] text-gray-800">

                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p className="font-bold">建系 + 写坐标</p>
                    <p>以 A 为原点，AB 为 x 轴，AD 为 y 轴，<MathTex tex="AA_1" /> 为 z 轴</p>
                    <p className="mt-1"><MathTex tex="A(0,0,0)" />，<MathTex tex="B(2,0,0)" />，<MathTex tex="C(2,2,0)" />，<MathTex tex="D(0,2,0)" /></p>
                    <p><MathTex tex="A_1(0,0,2)" />，<MathTex tex="B_1(2,0,2)" />，<MathTex tex="C_1(2,2,2)" />，<MathTex tex="D_1(0,2,2)" /></p>
                    <p><MathTex tex="E(1, 0, 0)" />（AB 中点），<MathTex tex="F(1, 2, 0)" />（CD 中点）</p>
                    <p className="font-bold mt-1">(1) 证明 EF ∥ AD</p>
                  </div>
                  <div className="w-[175px] shrink-0 flex justify-center">
                    <DebugGeo3dSvg data={parallelCubeDiagram} width={161} height={135} />
                  </div>
                </div>

                <div className="flex items-start gap-3 mt-1">
                  <div className="flex-1">
                    <p><MathTex tex="\overrightarrow{EF} = F - E = (1, 2, 0) - (1, 0, 0) = (0, 2, 0)" /></p>
                    <p><MathTex tex="\overrightarrow{AD} = D - A = (0, 2, 0) - (0, 0, 0) = (0, 2, 0)" /></p>
                    <p>直接观察：<MathTex tex="\overrightarrow{EF} = (0,2,0) = 1 \cdot (0,2,0) = 1 \cdot \overrightarrow{AD}" />，成比例 ✓</p>
                    <p>所以 <strong>EF ∥ AD</strong></p>
                  </div>
                  <div className="w-[136px] shrink-0 flex justify-center">
                    <DebugGeo3dSvg data={parallelLineLineDiagram} width={136} height={120} />
                  </div>
                </div>

                <div className="flex items-start gap-3 mt-1">
                  <div className="flex-1">
                    <p className="font-bold">(2) 证明 EF ∥ 面 ADD₁A₁</p>
                    <p>直线方向向量：<MathTex tex="\overrightarrow{EF} = (0, 2, 0)" /></p>
                    <p>求面 <MathTex tex="ADD_1A_1" /> 的法向量：</p>
                    <p className="ml-4">面内向量：<MathTex tex="\overrightarrow{AD} = (0, 2, 0)" />，<MathTex tex="\overrightarrow{AA_1} = (0, 0, 2)" /></p>
                    <p className="ml-4">设 <MathTex tex="\vec{n} = (x, y, z)" /></p>
                    <p className="ml-4"><MathTex tex="\vec{n} \cdot \overrightarrow{AD} = 0x + 2y + 0z = 2y = 0" /></p>
                    <p className="ml-4"><MathTex tex="\vec{n} \cdot \overrightarrow{AA_1} = 0x + 0y + 2z = 2z = 0" /></p>
                    <p className="ml-4">令 <MathTex tex="x = 1" />，得 <MathTex tex="\vec{n} = (1, 0, 0)" /></p>
                    <p>验证垂直：<MathTex tex="\overrightarrow{EF} \cdot \vec{n} = 0 \times 1 + 2 \times 0 + 0 \times 0 = 0" /> ✓</p>
                    <p>且 EF 不在面 ADD₁A₁ 内，所以 <strong>EF ∥ 面 ADD₁A₁</strong></p>
                  </div>
                  <div className="w-[131px] shrink-0 flex justify-center">
                    <DebugGeo3dSvg data={parallelLinePlaneDiagram} width={131} height={120} />
                  </div>
                </div>

                <div className="flex items-start gap-3 mt-1">
                  <div className="flex-1">
                    <p className="font-bold">(3) 证明 面 A₁B₁C₁D₁ ∥ 面 ABCD</p>
                    <p>底面 ABCD 法向量：<MathTex tex="\vec{n_1} = (0, 0, 1)" />（由 AB、AD 求出）</p>
                    <p>顶面 <MathTex tex="A_1B_1C_1D_1" /> 法向量：<MathTex tex="\vec{n_2} = (0, 0, 1)" />（由 A₁B₁、A₁D₁ 求出）</p>
                    <p><MathTex tex="\vec{n_1} = 1 \cdot \vec{n_2}" />，成比例</p>
                    <p>所以 <strong>面 A₁B₁C₁D₁ ∥ 面 ABCD</strong></p>
                  </div>
                  <div className="w-[142px] shrink-0 flex justify-center">
                    <DebugGeo3dSvg data={parallelPlanesDiagram} width={142} height={124} />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 6: 证垂直（详解） */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="perpendicular-detail" className="scroll-mt-4">
        <Collapsible title="六、证垂直（详解 + 例题）" defaultOpen storageKey="geo3d-vector:perpendicular">
          <div className="text-[0.9rem] text-gray-800">

            {/* 线 ⊥ 线 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-[0.9rem]">线 ⊥ 线：方向向量点积为 0</div>
              <div className="px-3 py-1">
                <p><strong>核心：</strong>两条直线垂直 ⇔ 它们的方向向量垂直</p>
                <p><strong>判定方法：</strong><MathTex tex="\vec{a} \cdot \vec{b} = 0" /></p>
                <p className="mt-2"><strong>为什么？</strong></p>
                <p className="ml-4">点积为 0 意味着两个向量夹角为 90°，方向向量代表直线的走向，所以直线垂直</p>
                <p className="mt-2"><strong>注意：</strong>异面直线也能用！向量法不要求两线共面，只看方向向量</p>
                <p className="mt-2"><strong>答题格式（模拟卷面）：</strong></p>
                <p className="ml-4">已求出直线 a 的方向向量 <MathTex tex="\vec{a} = (1, 2, -1)" />，直线 b 的方向向量 <MathTex tex="\vec{b} = (2, 0, 2)" /></p>
                <p className="ml-4"><MathTex tex="\vec{a} \cdot \vec{b} = 1 \times 2 + 2 \times 0 + (-1) \times 2 = 2 + 0 - 2 = 0" /></p>
                <p className="ml-4">所以直线 a ⊥ 直线 b</p>
              </div>
            </div>

            {/* 线 ⊥ 面 */}
            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-green-800 border-b border-green-300 bg-green-100 text-[0.9rem]">线 ⊥ 面：方向向量 ∥ 法向量</div>
              <div className="px-3 py-1">
                <p><strong>核心：</strong>直线垂直于平面 ⇔ 方向向量与该平面的法向量平行</p>
                <p><strong>判定方法：</strong><MathTex tex="\vec{a} = \lambda\vec{n}" />（<MathTex tex="\lambda" /> 为非零常数）</p>
                <p className="mt-2"><strong>为什么？</strong></p>
                <p className="ml-4">法向量本身就垂直于平面，如果直线的方向向量与法向量平行，直线走向就和法向量一样，所以直线垂直于平面</p>
                <p className="mt-2"><strong>易错反例：</strong>方向向量 <MathTex tex="\vec{a} = (1, 2, 3)" />，法向量 <MathTex tex="\vec{n} = (2, 4, 6)" />，成比例，直线⊥平面——但点积 = 28 ≠ 0，错用点积判断会误认为不垂直</p>
                <p className="mt-2"><strong>答题格式（模拟卷面）：</strong></p>
                <p className="ml-4">已求出直线方向向量 <MathTex tex="\overrightarrow{AB} = (1, 2, -2)" />，平面法向量 <MathTex tex="\vec{n} = (2, 4, -4)" /></p>
                <p className="ml-4">因为 <MathTex tex="\dfrac{2}{1} = \dfrac{4}{2} = \dfrac{-4}{-2} = 2" />，所以 <MathTex tex="\vec{n} = 2\overrightarrow{AB}" />，即 <MathTex tex="\overrightarrow{AB} \parallel \vec{n}" /></p>
                <p className="ml-4">所以直线 AB ⊥ 平面</p>
              </div>
            </div>

            {/* 面 ⊥ 面 */}
            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-purple-800 border-b border-purple-300 bg-purple-100 text-[0.9rem]">面 ⊥ 面：法向量点积为 0</div>
              <div className="px-3 py-1">
                <p><strong>核心：</strong>两个平面垂直 ⇔ 它们的法向量垂直</p>
                <p><strong>判定方法：</strong><MathTex tex="\vec{n_1} \cdot \vec{n_2} = 0" /></p>
                <p className="mt-2"><strong>为什么？</strong></p>
                <p className="ml-4">法向量代表平面的"朝向"，两个法向量垂直，说明两个平面的朝向相差 90°，所以平面垂直</p>
                <p className="mt-2"><strong>易错反例：</strong>法向量 <MathTex tex="\vec{n_1} = (1, 2, 3)" />，<MathTex tex="\vec{n_2} = (2, 4, 6)" />，成比例——两面平行，不是垂直；错用“成比例则垂直”会得出完全相反的结论</p>
                <p className="mt-2"><strong>答题格式（模拟卷面）：</strong></p>
                <p className="ml-4">已求出平面 <MathTex tex="\alpha" /> 法向量 <MathTex tex="\vec{n_1} = (1, 0, -1)" />，平面 <MathTex tex="\beta" /> 法向量 <MathTex tex="\vec{n_2} = (2, 1, 2)" /></p>
                <p className="ml-4"><MathTex tex="\vec{n_1} \cdot \vec{n_2} = 1 \times 2 + 0 \times 1 + (-1) \times 2 = 2 + 0 - 2 = 0" /></p>
                <p className="ml-4">所以 <MathTex tex="\alpha \perp \beta" /></p>
              </div>
            </div>

            {/* 记忆总结 */}
            <div className="bg-yellow-50 border border-yellow-300 rounded p-2 mt-2">
              <p className="font-bold text-yellow-800 mb-1">记忆总结：三种垂直对比</p>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-yellow-400">
                    <th className="py-0.5 pr-2 w-16">类型</th>
                    <th className="py-0.5 pr-2">用什么向量</th>
                    <th className="py-0.5 pr-2">怎么判断</th>
                    <th className="py-0.5 pr-2 w-28">额外条件</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-yellow-300">
                    <td className="py-0.5 pr-2 font-bold">线 ⊥ 线</td>
                    <td className="py-0.5 pr-2">方向向量 vs 方向向量</td>
                    <td className="py-0.5 pr-2">点积 = 0</td>
                    <td className="py-0.5 pr-2">无</td>
                  </tr>
                  <tr className="border-b border-yellow-300">
                    <td className="py-0.5 pr-2 font-bold">线 ⊥ 面</td>
                    <td className="py-0.5 pr-2">方向向量 vs 法向量</td>
                    <td className="py-0.5 pr-2 font-bold text-red-700">成比例</td>
                    <td className="py-0.5 pr-2">无</td>
                  </tr>
                  <tr>
                    <td className="py-0.5 pr-2 font-bold">面 ⊥ 面</td>
                    <td className="py-0.5 pr-2">法向量 vs 法向量</td>
                    <td className="py-0.5 pr-2">点积 = 0</td>
                    <td className="py-0.5 pr-2">无</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <PracticeCard title="" questions={perpPractice} module="geo3d-perp" shuffle={false} hideBlankLine />

            <PageBreak label="证垂直例题" />

            {/* 实战例题 */}
            <div className="border-2 border-blue-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-400 bg-blue-100 text-[0.9rem]">实战例题：正方体中的三种垂直</div>
              <div className="px-3 py-2">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p>正方体 <MathTex tex="ABCD\text{-}A_1B_1C_1D_1" />，棱长为 2</p>
                    <p className="mt-1">(1) 证明 <MathTex tex="AC \perp BD" /></p>
                    <p className="mt-1">(2) 证明 <MathTex tex="AA_1 \perp" /> 面 <MathTex tex="ABCD" /></p>
                    <p className="mt-1">(3) 证明 面 <MathTex tex="ACC_1A_1 \perp" /> 面 <MathTex tex="BDD_1B_1" /></p>
                  </div>
                  <div className="w-[153px] shrink-0 flex justify-center">
                    <DebugGeo3dSvg data={parallelCubeOriginal} width={135} height={120} />
                  </div>
                </div>
              </div>
            </div>

            {/* 完整解答 */}
            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-3 py-2 space-y-1 text-[0.9rem] text-gray-800">

                <p>以 A 为原点，AB 为 x 轴，AD 为 y 轴，<MathTex tex="AA_1" /> 为 z 轴，得 <MathTex tex="A(0,0,0)" />，<MathTex tex="B(2,0,0)" />，<MathTex tex="C(2,2,0)" />，<MathTex tex="D(0,2,0)" />，<MathTex tex="A_1(0,0,2)" />，<MathTex tex="B_1(2,0,2)" />，<MathTex tex="C_1(2,2,2)" />，<MathTex tex="D_1(0,2,2)" /></p>

                <p className="font-bold mt-2">(1) 证明 AC ⊥ BD</p>
                <p><MathTex tex="\overrightarrow{AC} = (2, 2, 0)" />，<MathTex tex="\overrightarrow{BD} = (-2, 2, 0)" /></p>
                <p><MathTex tex="\overrightarrow{AC} \cdot \overrightarrow{BD} = 2 \times (-2) + 2 \times 2 + 0 \times 0 = -4 + 4 = 0" /></p>
                <p>所以 <strong>AC ⊥ BD</strong></p>

                <div className="flex items-start gap-3 mt-1">
                  <div className="flex-1">
                    <p className="font-bold">(2) 证明 AA₁ ⊥ 面 ABCD</p>
                    <p>直线方向向量：<MathTex tex="\overrightarrow{AA_1} = (0, 0, 2)" /></p>
                    <p>求面 ABCD 的法向量：</p>
                    <p className="ml-4">面内向量：<MathTex tex="\overrightarrow{AB} = (2, 0, 0)" />，<MathTex tex="\overrightarrow{AD} = (0, 2, 0)" /></p>
                    <p className="ml-4">设 <MathTex tex="\vec{n} = (x, y, z)" /></p>
                    <p className="ml-4"><MathTex tex="\vec{n} \cdot \overrightarrow{AB} = 2x + 0y + 0z = 2x = 0" /></p>
                    <p className="ml-4"><MathTex tex="\vec{n} \cdot \overrightarrow{AD} = 0x + 2y + 0z = 2y = 0" /></p>
                    <p className="ml-4">令 <MathTex tex="z = 1" />，得 <MathTex tex="\vec{n} = (0, 0, 1)" /></p>
                    <p><MathTex tex="\overrightarrow{AA_1} = 2\vec{n}" />，成比例，所以 <strong>AA₁ ⊥ 面 ABCD</strong></p>
                  </div>
                  <div className="w-[160px] shrink-0 flex justify-center">
                    <DebugGeo3dSvg data={perpLinePlaneDiagram} width={155} height={125} />
                  </div>
                </div>

                <div className="flex items-start gap-3 mt-1">
                  <div className="flex-1">
                    <p className="font-bold">(3) 证明 面 ACC₁A₁ ⊥ 面 BDD₁B₁</p>
                    <p>求面 ACC₁A₁ 的法向量：</p>
                    <p className="ml-4">面内向量：<MathTex tex="\overrightarrow{AC} = (2,2,0)" />，<MathTex tex="\overrightarrow{AA_1} = (0,0,2)" /></p>
                    <p className="ml-4">设 <MathTex tex="\vec{n_1} = (x, y, z)" /></p>
                    <p className="ml-4"><MathTex tex="\vec{n_1} \cdot \overrightarrow{AC} = 2x + 2y + 0z = 0" /></p>
                    <p className="ml-4"><MathTex tex="\vec{n_1} \cdot \overrightarrow{AA_1} = 0x + 0y + 2z = 0" /></p>
                    <p className="ml-4">令 <MathTex tex="x = 1" />，得 <MathTex tex="y = -1" />，<MathTex tex="z = 0" />，即 <MathTex tex="\vec{n_1} = (1, -1, 0)" /></p>
                    <p>面 BDD₁B₁ 的法向量：<MathTex tex="\vec{n_2} = (1, 1, 0)" />（由 BD、BB₁ 求出）</p>
                    <p><MathTex tex="\vec{n_1} \cdot \vec{n_2} = 1 \times 1 + (-1) \times 1 + 0 \times 0 = 0" /></p>
                    <p>所以 <strong>面 ACC₁A₁ ⊥ 面 BDD₁B₁</strong></p>
                  </div>
                  <div className="w-[160px] shrink-0 flex justify-center">
                    <DebugGeo3dSvg data={perpPlanesDiagram} width={155} height={123} />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* Section 7: 求角度（详解） */}
      {/* ════════════════════════════════════════════════════════════ */}
      <section id="angle-detail" className="scroll-mt-4">
        <Collapsible title="七、求角度（详解 + 例题）" defaultOpen storageKey="geo3d-vector:angle">
          <div className="text-[0.9rem] text-gray-800 space-y-0">

            {/* 线线夹角 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-[0.9rem]">线线夹角</div>
              <div className="px-3 py-1">
                <p><strong>核心：</strong>两条直线的夹角 = 两个方向向量的夹角</p>
                <p><strong>公式：</strong><MathTex tex="\cos\theta = \dfrac{|\vec{a} \cdot \vec{b}|}{|\vec{a}| \cdot |\vec{b}|}" /></p>
                <p className="mt-2"><strong>为什么取绝对值？</strong></p>
                <p className="ml-4">线线夹角规定在 <MathTex tex="[0°, 90°]" /> 范围内，取绝对值保证结果为锐角或直角</p>
                <p className="mt-2"><strong>答题格式（模拟卷面）：</strong></p>
                <p className="ml-4">已求出方向向量 <MathTex tex="\vec{a} = (1, 1, 0)" />，<MathTex tex="\vec{b} = (1, 0, 1)" /></p>
                <p className="ml-4"><MathTex tex="\cos\theta = \dfrac{|\vec{a} \cdot \vec{b}|}{|\vec{a}| \cdot |\vec{b}|} = \dfrac{|1 \times 1 + 1 \times 0 + 0 \times 1|}{\sqrt{2} \times \sqrt{2}} = \dfrac{1}{2}" /></p>
                <p className="ml-4">所以夹角 <MathTex tex="\theta = 60°" /></p>
              </div>
            </div>

            {/* 线面夹角 */}
            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-green-800 border-b border-green-300 bg-green-100 text-[0.9rem]">线面夹角</div>
              <div className="px-3 py-1">
                <p><strong>核心：</strong>直线与平面的夹角 = 方向向量与法向量夹角的余角</p>
                <p><strong>公式：</strong><MathTex tex="\sin\theta = \dfrac{|\vec{a} \cdot \vec{n}|}{|\vec{a}| \cdot |\vec{n}|}" /></p>
                <p className="mt-2"><strong>为什么是 sin 不是 cos？</strong></p>
                <p className="ml-4">方向向量与法向量的夹角是 <MathTex tex="\alpha" />，线面夹角是 <MathTex tex="\theta = 90° - \alpha" /></p>
                <p className="ml-4">所以 <MathTex tex="\sin\theta = \cos\alpha" />，公式里用 sin</p>
                <p className="mt-2"><strong>答题格式（模拟卷面）：</strong></p>
                <p className="ml-4">已求出方向向量 <MathTex tex="\vec{a} = (1, 1, \sqrt{2})" />，平面法向量 <MathTex tex="\vec{n} = (0, 0, 1)" /></p>
                <p className="ml-4"><MathTex tex="\sin\theta = \dfrac{|\vec{a} \cdot \vec{n}|}{|\vec{a}| \cdot |\vec{n}|} = \dfrac{|\sqrt{2}|}{2 \times 1} = \dfrac{\sqrt{2}}{2}" /></p>
                <p className="ml-4">所以夹角 <MathTex tex="\theta = 45°" /></p>
              </div>
            </div>

            {/* 二面角 */}
            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-purple-800 border-b border-purple-300 bg-purple-100 text-[0.9rem]">二面角</div>
              <div className="px-3 py-1">
                <p><strong>核心：</strong>二面角 = 两个平面法向量的夹角，或其补角</p>
                <p><strong>公式：</strong><MathTex tex="\cos\theta = \dfrac{|\vec{n_1} \cdot \vec{n_2}|}{|\vec{n_1}| \cdot |\vec{n_2}|}" /></p>
                <p className="mt-2"><strong>为什么取绝对值？</strong></p>
                <p className="ml-4">取绝对值可以避免方向选择的麻烦，直接得到锐角</p>
                <p className="mt-2"><strong>如何判断二面角是锐角还是钝角？</strong></p>
                <p className="ml-4">不取绝对值，直接算 <MathTex tex="\cos\theta = \dfrac{\vec{n_1} \cdot \vec{n_2}}{|\vec{n_1}||\vec{n_2}|}" /></p>
                <p className="ml-4">结果为正，二面角为锐角；结果为负，二面角为钝角（取补角 <MathTex tex="180° - \theta" />）</p>
                <p className="ml-4">高考答题时：用绝对值公式算出锐角，再根据正负判断是否取补角</p>
                <p className="mt-2"><strong>答题格式：</strong></p>
                <p className="ml-4">求出两个面的法向量，代入公式，得出角度</p>
              </div>
            </div>

            {/* 记忆总结 */}
            <div className="bg-yellow-50 border border-yellow-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-yellow-800 border-b border-yellow-300 bg-yellow-100">记忆总结</div>
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-yellow-200 bg-yellow-50">
                    <th className="px-3 py-1 font-bold">类型</th>
                    <th className="px-3 py-1 font-bold">公式用</th>
                    <th className="px-3 py-1 font-bold">关键操作</th>
                    <th className="px-3 py-1 font-bold">角度范围</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-yellow-100">
                    <td className="px-3 py-1 font-bold">线线夹角</td>
                    <td className="px-3 py-1">cos</td>
                    <td className="px-3 py-1">取绝对值</td>
                    <td className="px-3 py-1"><MathTex tex="[0°, 90°]" /></td>
                  </tr>
                  <tr className="border-b border-yellow-100">
                    <td className="px-3 py-1 font-bold">线面夹角</td>
                    <td className="px-3 py-1">sin</td>
                    <td className="px-3 py-1">取绝对值（余角关系）</td>
                    <td className="px-3 py-1"><MathTex tex="[0°, 90°]" /></td>
                  </tr>
                  <tr>
                    <td className="px-3 py-1 font-bold">二面角</td>
                    <td className="px-3 py-1">cos</td>
                    <td className="px-3 py-1">取绝对值得锐角，钝角用 180° 减</td>
                    <td className="px-3 py-1"><MathTex tex="(0°, 180°)" /></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <PracticeCard title="" questions={anglePractice} module="geo3d-angle" shuffle={false} hideBlankLine />

            <PageBreak label="求角度例题" />

            {/* 实战例题 */}
            <div className="border-2 border-blue-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-400 bg-blue-100 text-[0.9rem]">实战例题：正方体中求角度</div>
              <div className="px-3 py-2">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p>正方体 <MathTex tex="ABCD\text{-}A_1B_1C_1D_1" />，棱长为 2</p>
                    <p className="mt-1">(1) 求直线 AC 与直线 <MathTex tex="A_1D" /> 的夹角</p>
                    <p className="mt-1">(2) 求直线 <MathTex tex="A_1C" /> 与底面 ABCD 的夹角</p>
                    <p className="mt-1">(3) 求二面角 <MathTex tex="A\text{-}BD\text{-}A_1" /> 的大小</p>
                  </div>
                  <div className="w-[180px] shrink-0 flex justify-center">
                    <DebugGeo3dSvg data={pureCubeDiagram} width={147} height={120} />
                  </div>
                </div>
              </div>
            </div>

            {/* 完整解答 */}
            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-3 py-2 text-[0.9rem] text-gray-800 leading-snug">
                <p className="font-bold">建系 + 写坐标</p>
                <p>以 A 为原点，AB 为 x 轴，AD 为 y 轴，<MathTex tex="AA_1" /> 为 z 轴</p>
                <p><MathTex tex="A(0,0,0)" />，<MathTex tex="C(2,2,0)" />，<MathTex tex="D(0,2,0)" />，<MathTex tex="A_1(0,0,2)" /></p>

                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p className="font-bold">(1) 求直线 AC 与直线 A₁D 的夹角</p>
                    <p><MathTex tex="\overrightarrow{AC} = (2, 2, 0)" />，<MathTex tex="\overrightarrow{A_1D} = (0, 2, -2)" /></p>
                    <p><MathTex tex="\overrightarrow{AC} \cdot \overrightarrow{A_1D} = 2 \times 0 + 2 \times 2 + 0 \times (-2) = 4" /></p>
                    <p><MathTex tex="|\overrightarrow{AC}| = \sqrt{4+4+0} = 2\sqrt{2}" />，<MathTex tex="|\overrightarrow{A_1D}| = \sqrt{0+4+4} = 2\sqrt{2}" /></p>
                    <p><MathTex tex="\cos\theta = \dfrac{|\overrightarrow{AC} \cdot \overrightarrow{A_1D}|}{|\overrightarrow{AC}| \cdot |\overrightarrow{A_1D}|} = \dfrac{|4|}{2\sqrt{2} \times 2\sqrt{2}} = \dfrac{4}{8} = \dfrac{1}{2}" /></p>
                    <p>所以 <MathTex tex="\theta = 60°" /></p>
                  </div>
                  <div className="w-[210px] shrink-0 flex justify-center">
                    <DebugGeo3dSvg data={angleLineLineDiagram} width={170} height={152} />
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p className="font-bold">(2) 求直线 A₁C 与底面 ABCD 的夹角</p>
                    <p>直线方向向量：<MathTex tex="\overrightarrow{A_1C} = (2, 2, -2)" /></p>
                    <p>设底面法向量 <MathTex tex="\vec{n} = (x, y, z)" /></p>
                    <p><MathTex tex="\vec{n} \perp \overrightarrow{AB} = (2,0,0)" />，得 <MathTex tex="2x = 0" />，即 <MathTex tex="x = 0" /></p>
                    <p><MathTex tex="\vec{n} \perp \overrightarrow{AD} = (0,2,0)" />，得 <MathTex tex="2y = 0" />，即 <MathTex tex="y = 0" /></p>
                    <p>取 <MathTex tex="z = 1" />，得 <MathTex tex="\vec{n} = (0, 0, 1)" /></p>
                    <p><MathTex tex="\overrightarrow{A_1C} \cdot \vec{n} = 2 \times 0 + 2 \times 0 + (-2) \times 1 = -2" /></p>
                    <p><MathTex tex="|\overrightarrow{A_1C}| = \sqrt{4+4+4} = 2\sqrt{3}" />，<MathTex tex="|\vec{n}| = 1" /></p>
                    <p><MathTex tex="\sin\theta = \dfrac{|\overrightarrow{A_1C} \cdot \vec{n}|}{|\overrightarrow{A_1C}| \cdot |\vec{n}|} = \dfrac{|-2|}{2\sqrt{3} \times 1} = \dfrac{2}{2\sqrt{3}} = \dfrac{\sqrt{3}}{3}" /></p>
                    <p>所以 <MathTex tex="\theta = \arcsin\dfrac{\sqrt{3}}{3}" /></p>
                  </div>
                  <div className="w-[210px] shrink-0 flex justify-center">
                    <DebugGeo3dSvg data={angleLinePlaneDiagram} width={181} height={146} />
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p className="font-bold">(3) 求二面角 A-BD-A₁<span className="ml-2 font-normal text-base text-orange-600">（注：法向量求解过程高考需写详细）</span></p>
                    <p>面 ABD 的法向量：<MathTex tex="\vec{n_1} = (1, 1, 0)" />（由 AB、AD 求出）</p>
                    <p>面 A₁BD 的法向量：<MathTex tex="\vec{n_2} = (1, 1, 1)" />（由 BD、BA₁ 求出）</p>
                    <p><MathTex tex="\vec{n_1} \cdot \vec{n_2} = 1 \times 1 + 1 \times 1 + 0 \times 1 = 2" /></p>
                    <p><MathTex tex="|\vec{n_1}| = \sqrt{1+1+0} = \sqrt{2}" />，<MathTex tex="|\vec{n_2}| = \sqrt{1+1+1} = \sqrt{3}" /></p>
                    <p><MathTex tex="\cos\theta = \dfrac{|\vec{n_1} \cdot \vec{n_2}|}{|\vec{n_1}| \cdot |\vec{n_2}|} = \dfrac{|2|}{\sqrt{2} \times \sqrt{3}} = \dfrac{2}{\sqrt{6}} = \dfrac{\sqrt{6}}{3}" /></p>
                    <p>所以二面角 <MathTex tex="\theta = \arccos\dfrac{\sqrt{6}}{3}" /></p>
                  </div>
                  <div className="w-[210px] shrink-0 flex justify-center">
                    <DebugGeo3dSvg data={angleDihedralDiagram} width={169} height={155} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* 八、求距离（详解） */}
      <section id="distance" className="scroll-mt-4">
        <Collapsible title="八、求距离（详解 + 例题）" defaultOpen storageKey="geo3d-vector:distance">
          <div className="text-[0.9rem] text-gray-800">

            {/* 点到点 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-[0.9rem]">点到点的距离</div>
              <div className="px-3 py-2">
                <p><strong>公式：</strong><MathTex tex="|AB| = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}" /></p>
                <p>或者用向量模长：<MathTex tex="|AB| = |\overrightarrow{AB}| = \sqrt{a^2 + b^2 + c^2}" /></p>
                <p className="mt-2"><strong>计算步骤：</strong></p>
                <p className="ml-4">1. 写出两点坐标 <MathTex tex="A(x_1, y_1, z_1)" />，<MathTex tex="B(x_2, y_2, z_2)" /></p>
                <p className="ml-4">2. 算向量 <MathTex tex="\overrightarrow{AB} = (x_2-x_1, y_2-y_1, z_2-z_1)" /></p>
                <p className="ml-4">3. 算模长 <MathTex tex="|\overrightarrow{AB}| = \sqrt{...}" /></p>
              </div>
            </div>

            <PageBreak label="点到平面距离" />

            {/* 点到平面（重点） */}
            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-[0.9rem]">点到平面的距离（重点）</div>
              <div className="px-3 py-1 flex gap-4">
                <div className="flex-1">
                  <p><strong>公式：</strong><MathTex tex="d = \dfrac{|\overrightarrow{AP} \cdot \vec{n}|}{|\vec{n}|}" /></p>
                  <p><MathTex tex="A" /> 是平面上随便取的一点，<MathTex tex="P" /> 是要求距离的点（平面外），<MathTex tex="\vec{n}" /> 是平面的法向量</p>
                  <p><strong>注意：</strong><MathTex tex="A" /> 可以是平面上任意一点（B、C、D 都行），<MathTex tex="\overrightarrow{AP}" /> 和 <MathTex tex="\overrightarrow{PA}" /> 都可以（因为取了绝对值）</p>
                  <p><strong>理解：</strong><MathTex tex="\overrightarrow{AP}" /> 在法向量方向的投影长度</p>
                  <p><strong>计算步骤：</strong></p>
                  <p className="ml-4">1. 求平面的法向量 <MathTex tex="\vec{n}" />（设法向量，列两个垂直方程）</p>
                  <p className="ml-4">2. 取平面上任一点 <MathTex tex="A" />，算 <MathTex tex="\overrightarrow{AP}" /></p>
                  <p className="ml-4">3. 算点积 <MathTex tex="\overrightarrow{AP} \cdot \vec{n}" />，算模长 <MathTex tex="|\vec{n}|" /></p>
                  <p className="ml-4">4. 代入公式 <MathTex tex="d = \dfrac{|\overrightarrow{AP} \cdot \vec{n}|}{|\vec{n}|}" /></p>
                </div>
                <div className="w-[180px] shrink-0 flex justify-center">
                  <DebugGeo3dSvg data={distancePointToBaseDiagram} width={185} height={161} />
                </div>
              </div>
            </div>

            {/* 直线到平面 & 平面到平面 */}
            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-800 border-b border-purple-300 bg-purple-100 text-[0.9rem]">直线到平面 / 平面到平面的距离</div>
              <div className="px-3 py-1">
                <p><strong>直线 ∥ 平面：</strong>取直线上任一点 <MathTex tex="P" />，求点 <MathTex tex="P" /> 到平面的距离</p>
                <p><strong>平面 ∥ 平面：</strong>取其中一个平面上任一点 <MathTex tex="P" />，求点 <MathTex tex="P" /> 到另一平面的距离</p>
                <p><strong>核心思路：</strong>转化为点到平面的距离问题</p>
              </div>
            </div>

            {/* 异面直线（选学） */}
            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-[0.9rem]">异面直线的距离（选学）</div>
              <div className="px-3 py-1">
                <p><strong>公式：</strong><MathTex tex="d = \dfrac{|\overrightarrow{AB} \cdot \vec{n}|}{|\vec{n}|}" /></p>
                <p>其中 <MathTex tex="A" />、<MathTex tex="B" /> 分别是两直线上的点，<MathTex tex="\vec{n}" /> 是公共垂线方向</p>
                <p><strong>计算步骤：</strong></p>
                <p className="ml-4">1. 设两直线方向向量为 <MathTex tex="\vec{a}" />、<MathTex tex="\vec{b}" /></p>
                <p className="ml-4">2. 求公共垂线方向 <MathTex tex="\vec{n} = \vec{a} \times \vec{b}" />（叉积）</p>
                <p className="ml-4">3. 取两直线上各一点 <MathTex tex="A" />、<MathTex tex="B" />，代入公式（高考很少考，了解即可）</p>
              </div>
            </div>

            {/* 记忆总结 */}
            <div className="bg-yellow-50 border border-yellow-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-yellow-800 border-b border-yellow-300 bg-yellow-100">记忆总结</div>
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-yellow-200 bg-yellow-50">
                    <th className="px-3 py-1 font-bold">类型</th>
                    <th className="px-3 py-1 font-bold">公式</th>
                    <th className="px-3 py-1 font-bold">关键操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-yellow-100">
                    <td className="px-3 py-1 font-bold">点到点</td>
                    <td className="px-3 py-1"><MathTex tex="|\overrightarrow{AB}| = \sqrt{a^2+b^2+c^2}" /></td>
                    <td className="px-3 py-1">算向量，求模长</td>
                  </tr>
                  <tr className="border-b border-yellow-100">
                    <td className="px-3 py-1 font-bold">点到平面</td>
                    <td className="px-3 py-1"><MathTex tex="d = \dfrac{|\overrightarrow{AP} \cdot \vec{n}|}{|\vec{n}|}" /></td>
                    <td className="px-3 py-1">求法向量，取平面上一点</td>
                  </tr>
                  <tr className="border-b border-yellow-100">
                    <td className="px-3 py-1 font-bold">线到平面</td>
                    <td className="px-3 py-1">转化为点到平面</td>
                    <td className="px-3 py-1">取直线上一点代入</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-1 font-bold">面到面</td>
                    <td className="px-3 py-1">转化为点到平面</td>
                    <td className="px-3 py-1">取一个面上一点代入</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <PracticeCard title="" questions={distancePractice} module="geo3d-distance" shuffle={false} hideBlankLine />

            {/* 实战例题 */}
            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-red-700 border-b border-gray-300 bg-red-50 text-[0.9rem]">实战例题：正方体中求距离</div>
              <div className="px-3 py-2 text-[0.9rem] text-gray-800">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <p>正方体 <MathTex tex="ABCD\text{-}A_1B_1C_1D_1" />，棱长为 2</p>
                    <p className="mt-1">(1) 求点 <MathTex tex="A_1" /> 到底面 ABCD 的距离</p>
                    <p className="mt-1">(2) 求点 <MathTex tex="A_1" /> 到平面 BDC₁ 的距离</p>
                  </div>
                  <div className="w-[180px] shrink-0 flex justify-center">
                    <DebugGeo3dSvg data={pureCubeDiagram} width={135} height={107} />
                  </div>
                </div>
              </div>
            </div>

            {/* 完整解答 */}
            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-3 py-1 text-[0.9rem] text-gray-800 leading-snug">
                <p>以 A 为原点，AB 为 x 轴，AD 为 y 轴，<MathTex tex="AA_1" /> 为 z 轴</p>
                <p><MathTex tex="A(0,0,0)" />，<MathTex tex="B(2,0,0)" />，<MathTex tex="D(0,2,0)" />，<MathTex tex="C(2,2,0)" />，<MathTex tex="A_1(0,0,2)" />，<MathTex tex="B_1(2,0,2)" />，<MathTex tex="C_1(2,2,2)" />，<MathTex tex="D_1(0,2,2)" /></p>

                <div className="flex items-start gap-3 mt-1">
                  <div className="flex-1">
                    <p className="font-bold">(1) 求点 A₁ 到底面 ABCD 的距离</p>
                    <p><MathTex tex="\overrightarrow{AB} = (2, 0, 0)" />，<MathTex tex="\overrightarrow{AD} = (0, 2, 0)" /></p>
                    <p>设底面 ABCD 的法向量 <MathTex tex="\vec{n} = (x, y, z)" /></p>
                    <p><MathTex tex="\vec{n} \perp \overrightarrow{AB}" />，得 <MathTex tex="2x = 0" />，即 <MathTex tex="x = 0" /></p>
                    <p><MathTex tex="\vec{n} \perp \overrightarrow{AD}" />，得 <MathTex tex="2y = 0" />，即 <MathTex tex="y = 0" /></p>
                    <p>取 <MathTex tex="z = 1" />，得 <MathTex tex="\vec{n} = (0, 0, 1)" /></p>
                    <p>取底面上一点 <MathTex tex="A(0,0,0)" />，则 <MathTex tex="\overrightarrow{AA_1} = (0, 0, 2)" /></p>
                    <p>点到平面距离：<MathTex tex="d = \dfrac{|\overrightarrow{AA_1} \cdot \vec{n}|}{|\vec{n}|} = \dfrac{|0 \times 0 + 0 \times 0 + 2 \times 1|}{1} = 2" />，所以距离为 <MathTex tex="2" /></p>
                  </div>
                  <div className="w-[210px] shrink-0 flex justify-center">
                    <DebugGeo3dSvg data={distancePointToBaseDiagram} width={185} height={161} />
                  </div>
                </div>

                <div className="flex items-start gap-3 mt-1">
                  <div className="flex-1">
                    <p className="font-bold">(2) 求点 A₁ 到平面 BDC₁ 的距离</p>
                    <p><MathTex tex="\overrightarrow{BD} = (-2, 2, 0)" />，<MathTex tex="\overrightarrow{BC_1} = (0, 2, 2)" /></p>
                    <p>设平面 BDC₁ 的法向量 <MathTex tex="\vec{n} = (x, y, z)" /></p>
                    <p><MathTex tex="\vec{n} \perp \overrightarrow{BD}" />，得 <MathTex tex="-2x + 2y = 0" />，即 <MathTex tex="x = y" /></p>
                    <p><MathTex tex="\vec{n} \perp \overrightarrow{BC_1}" />，得 <MathTex tex="2y + 2z = 0" />，即 <MathTex tex="z = -y" /></p>
                    <p>取 <MathTex tex="y = 1" />，得 <MathTex tex="\vec{n} = (1, 1, -1)" /></p>
                  </div>
                  <div className="w-[150px] shrink-0 flex justify-center">
                    <DebugGeo3dSvg data={distancePointToPlaneBDC1Diagram} width={146} height={139} />
                  </div>
                </div>
                <div>
                    <p>取平面上一点 <MathTex tex="B(2,0,0)" />，则 <MathTex tex="\overrightarrow{BA_1} = (-2, 0, 2)" /></p>
                    <p>点到平面距离：<MathTex tex="d = \dfrac{|\overrightarrow{BA_1} \cdot \vec{n}|}{|\vec{n}|} = \dfrac{|(-2) \times 1 + 0 \times 1 + 2 \times (-1)|}{\sqrt{1+1+1}} = \dfrac{|-4|}{\sqrt{3}} = \dfrac{4\sqrt{3}}{3}" />，所以距离为 <MathTex tex="\dfrac{4\sqrt{3}}{3}" /></p>
                </div>

              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 9: 训练题 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="practice-problems" className="scroll-mt-4">
        <Collapsible title="九、训练题（3道大题覆盖全部知识点）" defaultOpen storageKey="geo3d-vector:practice">
          <div className="text-[0.9rem] text-gray-800">

            {/* 大题1 */}
            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-[0.9rem]">大题1.（{geo3dVectorEssayQuestions[0].score} 分）</div>
              <div className="flex items-start gap-3 px-3 py-2">
                <div className="flex-1 space-y-1">
                  <p>四棱锥 <MathTex tex="P\text{-}ABCD" /> 中，底面 <MathTex tex="ABCD" /> 是正方形，<MathTex tex="PA \perp" /> 底面，<MathTex tex="PA = AB = 2" />，<MathTex tex="E" /> 是 <MathTex tex="PC" /> 的中点</p>
                  <p className="font-bold mt-2">（1）证明：<MathTex tex="BD \perp" /> 面 <MathTex tex="PAC" /></p>
                  <p className="font-bold">（2）求二面角 <MathTex tex="P\text{-}BC\text{-}A" /> 的余弦值</p>
                  <p className="font-bold">（3）证明：<MathTex tex="PA \parallel" /> 面 <MathTex tex="BDE" /></p>
                  <p className="font-bold">（4）求直线 <MathTex tex="BE" /> 与底面 <MathTex tex="ABCD" /> 所成角的正弦值</p>
                </div>
                <div className="shrink-0 flex justify-end">
                  <DebugGeo3dSvg data={practicePyramidMidDiagram} width={124} height={127} />
                </div>
              </div>
            </div>

            {/* 大题2 */}
            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-[0.9rem]">大题2.（{geo3dVectorEssayQuestions[1].score} 分）</div>
              <div className="flex items-start gap-3 px-3 py-2">
                <div className="flex-1 space-y-1">
                  <p>正方体 <MathTex tex="ABCD\text{-}A_1B_1C_1D_1" />，棱长为 2，<MathTex tex="E" /> 是 <MathTex tex="DD_1" /> 的中点</p>
                  <p className="font-bold mt-2">（1）求异面直线 <MathTex tex="AE" /> 与 <MathTex tex="B_1C" /> 所成角的余弦值</p>
                  <p className="font-bold">（2）求点 <MathTex tex="B" /> 到平面 <MathTex tex="AEC_1" /> 的距离</p>
                </div>
                <div className="shrink-0 flex justify-end">
                  <DebugGeo3dSvg data={practiceCubeMidDiagram} width={122} height={100} />
                </div>
              </div>
            </div>

            {/* 大题3 */}
            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-[0.9rem]">大题3.（{geo3dVectorEssayQuestions[2].score} 分）</div>
              <div className="flex items-start gap-3 px-3 py-2">
                <div className="flex-1 space-y-1">
                  <p>三棱柱 <MathTex tex="ABC\text{-}A_1B_1C_1" />，侧棱垂直于底面，<MathTex tex="\angle ABC = 90°" />，<MathTex tex="AB = BC = BB_1 = 2" /></p>
                  <p><MathTex tex="E" /> 是 <MathTex tex="AA_1" /> 的中点，<MathTex tex="F" /> 是 <MathTex tex="CC_1" /> 的中点</p>
                  <p className="font-bold mt-2">（1）证明：<MathTex tex="EF \parallel AC" /></p>
                  <p className="font-bold">（2）证明：<MathTex tex="AB_1 \perp A_1C" /></p>
                </div>
                <div className="w-[150px] shrink-0 flex justify-center">
                  <DebugGeo3dSvg data={practicePrismDiagram} width={121} height={103} />
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ═══ 打印模式：答案与解析 ═══ */}
      {isPrinting && printOptions.showAnswers && <Geo3dVectorAnswers />}

      </LessonLayout>
      <UnifiedDebugToggle />
    </div>
  );
}
