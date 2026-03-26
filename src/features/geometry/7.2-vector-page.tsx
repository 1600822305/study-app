import { Math as MathTex, Collapsible, SpeakButton, PageHeader, LessonLayout, ExportButton, PageBreak, DebugGeo3dSvg, Geo3dDebugToggle } from '@/components/shared';
import { cuboidCoordSystemDiagram, rightHandSystemDiagram, normalVectorDiagram, normalVectorMethodDiagram, normalVectorExampleDiagram, parallelCubeOriginal, parallelCubeDiagram, parallelLinePlaneDiagram, parallelPlanesDiagram, pureCubeDiagram, perpCubeDiagram, perpLinePlaneDiagram, perpPlanesDiagram, angleLineLineDiagram, angleLinePlaneDiagram, angleDihedralDiagram, distancePointToBaseDiagram, distancePointToPlaneBDC1Diagram } from './data/7.2/7.2-vector-diagrams';
import { geo3dVectorNarrations } from './data/7.2/7.2-vector-narrations';
import { geo3dVectorProgressItems } from './data/7.2/7.2-vector-progress';
import { geo3dVectorEssayQuestions } from './data/7.2/7.2-vector-questions';
import { practicePyramidDiagram, practicePyramidMidDiagram, practiceCubeMidDiagram, practicePrismDiagram } from './data/7.2/7.2-practice-diagrams';
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
        narration={geo3dVectorNarrations.intro}
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
      <section id="why-vector" className="mb-3 scroll-mt-4">
        <Collapsible title="一、为什么学向量法" defaultOpen storageKey="geo3d-vector:why" headerExtra={<SpeakButton text={geo3dVectorNarrations.whyVector} />}>
          <div className="space-y-2 text-lg text-gray-800">

            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">几何法 vs 向量法</div>
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
                    <tr>
                      <td className="py-1 pr-2 font-bold">高考建议</td>
                      <td className="py-1 pr-2">第(1)问常用</td>
                      <td className="py-1 pr-2">第(2)(3)问必用</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">向量法的固定流程（四步走）</div>
              <div className="px-3 py-2 space-y-1">
                <p><strong>第一步：建系</strong> — 找三条互相垂直的边，建空间直角坐标系</p>
                <p><strong>第二步：写坐标</strong> — 把所有相关的点用坐标表示</p>
                <p><strong>第三步：求向量</strong> — 写出需要的向量（方向向量、法向量等）</p>
                <p><strong>第四步：套公式</strong> — 代入对应公式，算出结果</p>
              </div>
            </div>

            <div className="border border-red-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-red-800 border-b border-red-300 bg-red-100 text-lg">高考题型清单（湖南·新高考I卷）</div>
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

      <PageBreak label="建系与坐标" />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 2: 建系与坐标 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="coordinate-system" className="mb-3 scroll-mt-4">
        <Collapsible title="二、建系与坐标（最关键的一步）" defaultOpen storageKey="geo3d-vector:coordinate" headerExtra={<SpeakButton text={geo3dVectorNarrations.coordinate} />}>
          <div className="space-y-2 text-lg text-gray-800">

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">建系原则</div>
              <div className="px-3 py-2 space-y-1">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p>找<strong>三条互相垂直的边（或方向）</strong>，把它们的交点设为原点</p>
                    <p className="mt-1">三条边分别作为 <MathTex tex="x" /> 轴、<MathTex tex="y" /> 轴、<MathTex tex="z" /> 轴</p>
                    <p className="mt-1">原点选哪个顶点都行，<strong>只要有三条互相垂直的边就能建系</strong>，答案一样</p>
                    <p className="mt-2 font-bold">右手系规则：</p>
                    <p className="mt-1">伸出右手，拇指指向 <MathTex tex="x" /> 轴，食指指向 <MathTex tex="y" /> 轴，中指自然弯曲的方向就是 <MathTex tex="z" /> 轴</p>
                  </div>
                  <div className="w-[140px] shrink-0 flex justify-center">
                    <DebugGeo3dSvg data={rightHandSystemDiagram} width={130} height={120} />
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">常见建系方法</div>
              <div className="px-3 py-2 space-y-2">
                <div className="border-l-4 border-green-400 pl-3">
                  <p className="font-bold">长方体 / 正方体</p>
                  <p>选一个顶点（如 <MathTex tex="D_1" />），三条棱就是三个轴，最简单</p>
                </div>
                <div className="border-l-4 border-green-400 pl-3">
                  <p className="font-bold">直三棱柱</p>
                  <p>底面有直角的顶点做原点，直角的两条边 + 侧棱 = 三个轴</p>
                </div>
                <div className="border-l-4 border-green-400 pl-3">
                  <p className="font-bold">正三棱锥 / 正四棱锥</p>
                  <p>底面中心或底面直角处做原点，需要算底面坐标</p>
                </div>
              </div>
            </div>

            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-800 border-b border-purple-300 bg-purple-100 text-lg">建系示例：长方体</div>
              <div className="px-3 py-2 space-y-1">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p>长方体 <MathTex tex="ABCD\text{-}A_1B_1C_1D_1" /></p>
                    <p className="mt-1"><MathTex tex="AB = a" />，<MathTex tex="AD = b" />，<MathTex tex="AA_1 = c" /></p>
                    <p className="mt-2">以 <MathTex tex="A" /> 为原点，<span className="text-red-600 font-bold"><MathTex tex="AB" /> 为 <MathTex tex="x" /> 轴</span>，<span className="text-green-600 font-bold"><MathTex tex="AD" /> 为 <MathTex tex="y" /> 轴</span>，<span className="text-blue-600 font-bold"><MathTex tex="AA_1" /> 为 <MathTex tex="z" /> 轴</span></p>
                  </div>
                  <div className="w-[260px] shrink-0 flex justify-center"><DebugGeo3dSvg data={cuboidCoordSystemDiagram} width={247} height={208} /></div>
                </div>
                <div className="mt-2 bg-gray-50 rounded p-2">
                  <p className="font-bold mb-1">各顶点坐标：</p>
                  <div className="grid grid-cols-4 gap-x-4 gap-y-1">
                    <p><MathTex tex="A = (0, 0, 0)" /></p>
                    <p><MathTex tex="B = (a, 0, 0)" /></p>
                    <p><MathTex tex="C = (a, b, 0)" /></p>
                    <p><MathTex tex="D = (0, b, 0)" /></p>
                    <p><MathTex tex="A_1 = (0, 0, c)" /></p>
                    <p><MathTex tex="B_1 = (a, 0, c)" /></p>
                    <p><MathTex tex="C_1 = (a, b, c)" /></p>
                    <p><MathTex tex="D_1 = (0, b, c)" /></p>
                  </div>
                </div>
                <div className="mt-2 bg-blue-50 rounded p-2">
                  <p className="font-bold mb-1">马上用：求向量</p>
                  <p>比如求 <MathTex tex="\overrightarrow{B_1D}" />（终点减起点）：</p>
                  <p className="ml-4 mt-1"><MathTex tex="\overrightarrow{B_1D} = D - B_1 = (0-a,\; b-0,\; 0-c) = (-a, b, -c)" /></p>
                  <p className="mt-2">再比如求 <MathTex tex="\overrightarrow{AC_1}" />：</p>
                  <p className="ml-4 mt-1"><MathTex tex="\overrightarrow{AC_1} = C_1 - A = (a-0,\; b-0,\; c-0) = (a, b, c)" /></p>
                  <p className="mt-2">若题目给出 <MathTex tex="a=2, b=3, c=4" />，则 <MathTex tex="\overrightarrow{B_1D} = (-2, 3, -4)" />，<MathTex tex="\overrightarrow{AC_1} = (2, 3, 4)" /></p>
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak label="法向量" />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 3: 法向量 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="normal-vector" className="mb-3 scroll-mt-4">
        <Collapsible title="三、法向量（求角度的关键工具）" defaultOpen storageKey="geo3d-vector:normal" headerExtra={<SpeakButton text={geo3dVectorNarrations.normal} />}>
          <div className="space-y-2 text-lg text-gray-800">

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">什么是法向量</div>
              <div className="px-3 py-2 space-y-1">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p>垂直于平面的向量，就是这个平面的法向量</p>
                    <p className="mt-1">一个平面有无数个法向量，它们彼此平行（方向可正可反）</p>
                    <p className="mt-1">如果 <MathTex tex="{\color{red}\vec{n}}" /> 是平面 <MathTex tex="\alpha" /> 的法向量，那么平面内随便取一个向量 <MathTex tex="\vec{a}" />，都有 <MathTex tex="{\color{red}\vec{n}} \perp \vec{a}" />（即 <MathTex tex="{\color{red}\vec{n}} \cdot \vec{a} = 0" />，垂直则点积为零）</p>
                  </div>
                  <div className="w-[160px] shrink-0 flex justify-center">
                    <DebugGeo3dSvg data={normalVectorDiagram} width={150} height={130} />
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">求法向量的固定套路</div>
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
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">示例：直角三棱锥，求斜面法向量</div>
              <div className="px-3 py-2 space-y-1">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p><strong>题目：</strong>三棱锥 O-ABC 中，OA、OB、OC 两两垂直，<br />且 OA = OB = OC = 1，求平面 ABC 的一个法向量</p>
                    <p className="mt-1"><strong>建系：</strong>以 O 为原点，OA 为 x 轴，OB 为 y 轴，OC 为 z 轴</p>
                    <p className="mt-1">则 <MathTex tex="O(0,0,0)" />，<MathTex tex="A(1,0,0)" />，<MathTex tex="B(0,1,0)" />，<MathTex tex="C(0,0,1)" /></p>
                    <p className="mt-1"><strong>第一步</strong>：面内向量 <MathTex tex="{\color{blue}\overrightarrow{AB}} = (-1,1,0)" />，<MathTex tex="{\color{green}\overrightarrow{AC}} = (-1,0,1)" /></p>
                    <p className="mt-1"><strong>第二步</strong>：设 <MathTex tex="{\color{red}\vec{n}} = (x, y, z)" /></p>
                    <p className="mt-1"><strong>第三步</strong>：列方程（<MathTex tex="\vec{n}" /> 分别与面内向量点乘 = 0）</p>
                    <div className="ml-4 mt-1">
                      <p><MathTex tex="{\color{red}\vec{n}} \cdot {\color{blue}\overrightarrow{AB}} = (x,y,z) \cdot (-1,1,0) = -x + y = 0" />，得 <MathTex tex="y = x" /> ①</p>
                      <p className="mt-1"><MathTex tex="{\color{red}\vec{n}} \cdot {\color{green}\overrightarrow{AC}} = (x,y,z) \cdot (-1,0,1) = -x + z = 0" />，得 <MathTex tex="z = x" /> ②</p>
                    </div>
                    <p className="mt-1"><strong>第四步</strong>：令 <MathTex tex="x = 1" />，代入①②得 <MathTex tex="y = 1,\; z = 1" /></p>
                    <p className="mt-1">∴ <strong><MathTex tex="{\color{red}\vec{n}} = (1, 1, 1)" /></strong></p>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center">
                    <DebugGeo3dSvg data={normalVectorExampleDiagram} width={195} height={182} />
                  </div>
                </div>
              </div>
            </div>

            {/* 法向量的用途 */}
            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-800 border-b border-purple-300 bg-purple-100 text-lg">法向量的用途</div>
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
      <section id="five-formulas" className="mb-3 scroll-mt-4">
        <Collapsible title="四、向量法核心（公式速查）" defaultOpen storageKey="geo3d-vector:formulas" headerExtra={<SpeakButton text={geo3dVectorNarrations.formulas} />}>
          <div className="space-y-0.5 text-lg text-gray-800">

            {/* 🎯 核心思路 */}
            <div className="bg-blue-50 border border-blue-200 rounded p-2">
              <p className="font-bold text-blue-800 text-lg">🎯 核心思路（一句话）</p>
              <p>用<strong>坐标/向量</strong>把"几何位置关系"转化为"代数计算"，用<strong>点积、模长</strong>等运算来证明平行/垂直、求角度/距离。</p>
            </div>

            {/* 🧱 核心步骤 */}
            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">🧱 核心步骤（四步走）</div>
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
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-400 bg-blue-100 text-lg">📋 公式速查表</div>
              <div className="px-2 py-1">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-300 bg-gray-50">
                      <th className="py-1 px-2 w-24">问题类型</th>
                      <th className="py-1 px-2">向量方法</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 bg-blue-50/50">
                      <td className="py-1 px-2 font-bold">线 ∥ 线</td>
                      <td className="py-1 px-2">方向向量成比例：<MathTex tex="\vec{a} = \lambda\vec{b}" /></td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 px-2 font-bold">线 ∥ 面</td>
                      <td className="py-1 px-2">方向向量 ⊥ 法向量：<MathTex tex="\vec{a} \cdot \vec{n} = 0" />（且线不在面内）</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-blue-50/50">
                      <td className="py-1 px-2 font-bold">面 ∥ 面</td>
                      <td className="py-1 px-2">法向量成比例：<MathTex tex="\vec{n_1} = \lambda\vec{n_2}" /></td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 px-2 font-bold">线 ⊥ 线</td>
                      <td className="py-1 px-2">方向向量点积为 0：<MathTex tex="\vec{a} \cdot \vec{b} = 0" /></td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-green-50/50">
                      <td className="py-1 px-2 font-bold">线 ⊥ 面</td>
                      <td className="py-1 px-2">方向向量 ∥ 法向量：<MathTex tex="\vec{a} = \lambda\vec{n}" /></td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 px-2 font-bold">面 ⊥ 面</td>
                      <td className="py-1 px-2">法向量点积为 0：<MathTex tex="\vec{n_1} \cdot \vec{n_2} = 0" /></td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-purple-50/50">
                      <td className="py-1 px-2 font-bold">线线角</td>
                      <td className="py-1 px-2"><MathTex tex="\cos\theta = \dfrac{|\vec{a} \cdot \vec{b}|}{|\vec{a}||\vec{b}|}" />（分子加绝对值）</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 px-2 font-bold">线面角</td>
                      <td className="py-1 px-2"><MathTex tex="\sin\theta = \dfrac{|\vec{a} \cdot \vec{n}|}{|\vec{a}||\vec{n}|}" />（注意是 <strong>sin</strong>）</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-red-50/50">
                      <td className="py-1 px-2 font-bold text-red-700">⭐ 二面角</td>
                      <td className="py-1 px-2"><MathTex tex="\cos\theta = \dfrac{\vec{n_1} \cdot \vec{n_2}}{|\vec{n_1}||\vec{n_2}|}" />（或其补角，需判断正负）</td>
                    </tr>
                    <tr>
                      <td className="py-1 px-2 font-bold">点到面距离</td>
                      <td className="py-1 px-2"><MathTex tex="d = \dfrac{|\overrightarrow{PA} \cdot \vec{n}|}{|\vec{n}|}" />（P 是点，A 是面上一点）</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 💡 核心思想 */}
            <div className="bg-yellow-50 border border-yellow-300 rounded p-2">
              <p className="font-bold text-yellow-800 text-lg">💡 核心思想</p>
              <p><strong>降维打击：</strong>3D 几何问题变成代数运算，不用空间想象</p>
              <p><strong>统一工具：</strong>平行、垂直、角度、距离，全用点积和模长解决</p>
              <p><strong>可操作性强：</strong>建系正确 + 坐标算对 = 结果一定可靠</p>
              <p><strong>套路固定：</strong>建系、写坐标、套公式、代值算，步骤清晰不迷路</p>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak />
      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 5: 证平行（详解） */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="parallel-detail" className="mb-3 scroll-mt-4">
        <Collapsible title="五、证平行（详解 + 例题）" defaultOpen storageKey="geo3d-vector:parallel">
          <div className="text-lg text-gray-800">

            {/* 线 ∥ 线 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">线 ∥ 线：方向向量成比例</div>
              <div className="px-3 py-2">
                <p><strong>判定方法：</strong>两条直线的方向向量成比例，即 <MathTex tex="\vec{a} = \lambda\vec{b}" />（<MathTex tex="\lambda" /> 为非零常数）</p>
                <p className="mt-2"><strong>为什么？</strong></p>
                <p className="ml-4">方向向量代表直线的"走向"，如果两个方向向量成比例，说明两条直线的走向完全相同（或完全相反），永远不会相交，所以平行</p>
                <p className="mt-2"><strong>计算技巧：</strong></p>
                <p className="ml-4">设 <MathTex tex="\vec{a} = (x_1, y_1, z_1)" />，<MathTex tex="\vec{b} = (x_2, y_2, z_2)" /></p>
                <p className="ml-4">验证 <MathTex tex="\dfrac{x_1}{x_2} = \dfrac{y_1}{y_2} = \dfrac{z_1}{z_2}" /> 是否成立</p>
                <p className="mt-2"><strong>答题格式：</strong></p>
                <p className="ml-4"><MathTex tex="\vec{a} = \lambda\vec{b}" />，成比例，所以直线 ∥ 直线</p>
                <p className="mt-2"><strong>有分量为0时：</strong>如 <MathTex tex="(0,2,4)" /> 与 <MathTex tex="(0,1,2)" />，<MathTex tex="x" /> 都为 <MathTex tex="0" /> <MathTex tex="\checkmark" />，<MathTex tex="\frac{2}{1}=\frac{4}{2}" /> <MathTex tex="\checkmark" />，成比例</p>
                <p className="ml-4">反例：<MathTex tex="(0,2,4)" /> 与 <MathTex tex="(1,1,2)" />，<MathTex tex="x" /> 一个 <MathTex tex="0" /> 一个 <MathTex tex="1" /> <MathTex tex="\times" />，不成比例</p>
              </div>
            </div>

            {/* 线 ∥ 面 */}
            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">线 ∥ 面：方向向量 ⊥ 法向量</div>
              <div className="px-3 py-2">
                <p><strong>判定方法：</strong>同时满足两个条件：</p>
                <p className="ml-4">① <MathTex tex="\vec{a} \cdot \vec{n} = 0" />（方向向量 ⊥ 法向量）</p>
                <p className="ml-4">② 直线不在该平面内</p>
                <p className="mt-2"><strong>为什么两个都要？</strong></p>
                <p className="ml-4">方向向量 ⊥ 法向量 → 直线"不穿过"平面（平行或在面内）</p>
                <p className="ml-4">直线不在面内 → 排除"在面内"的情况，才是真正的平行</p>
                <p className="mt-2"><strong>答题格式：</strong></p>
                <p className="ml-4"><MathTex tex="\vec{a} \cdot \vec{n} = 0" />，且直线不在该平面内，所以直线 ∥ 平面</p>
              </div>
            </div>

            {/* 面 ∥ 面 */}
            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-800 border-b border-purple-300 bg-purple-100 text-lg">面 ∥ 面：法向量成比例</div>
              <div className="px-3 py-2">
                <p><strong>判定方法：</strong>两个平面平行 ⇔ 它们的法向量平行（成比例）</p>
                <p className="ml-4">即 <MathTex tex="\vec{n_1} = \lambda\vec{n_2}" />（<MathTex tex="\lambda" /> 为非零常数）</p>
                <p className="mt-2"><strong>为什么？</strong></p>
                <p className="ml-4">法向量代表平面的"朝向"，如果两个法向量成比例，说明两个平面的朝向完全相同，永远不会相交，所以平行</p>
                <p className="mt-2"><strong>答题格式：</strong></p>
                <p className="ml-4"><MathTex tex="\vec{n_1} = \lambda\vec{n_2}" />，成比例，所以面 ∥ 面</p>
                <p className="mt-2"><strong>有分量为0时：</strong>如 <MathTex tex="(1,0,3)" /> 与 <MathTex tex="(2,0,6)" />，<MathTex tex="y" /> 都为 <MathTex tex="0" /> <MathTex tex="\checkmark" />，<MathTex tex="\frac{1}{2}=\frac{3}{6}" /> <MathTex tex="\checkmark" />，成比例</p>
              </div>
            </div>

            {/* 记忆总结 */}
            <div className="bg-yellow-50 border border-yellow-300 rounded p-2">
              <p className="font-bold text-yellow-800">记忆总结</p>
              <p><strong>线线平行、面面平行：</strong>同类向量成比例（方向向量对方向向量，法向量对法向量）</p>
              <p><strong>线面平行：</strong>不同类向量垂直（方向向量 ⊥ 法向量），<strong>且要验证直线不在面内</strong></p>
            </div>

            <PageBreak label="证平行例题" />

            {/* 实战例题 */}
            <div className="border-2 border-blue-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-400 bg-blue-100 text-lg">实战例题：正方体中的三种平行</div>
              <div className="px-3 py-2">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p>正方体 <MathTex tex="ABCD\text{-}A_1B_1C_1D_1" />，棱长为 2，E 是 AB 中点，F 是 CD 中点</p>
                    <p className="mt-1">(1) 证明 <MathTex tex="EF \parallel AD" /></p>
                    <p className="mt-1">(2) 证明 <MathTex tex="EF \parallel" /> 面 <MathTex tex="ADD_1A_1" /></p>
                    <p className="mt-1">(3) 证明 面 <MathTex tex="A_1B_1C_1D_1 \parallel" /> 面 <MathTex tex="ABCD" /></p>
                  </div>
                  <div className="w-[180px] shrink-0 flex justify-center">
                    <DebugGeo3dSvg data={parallelCubeOriginal} width={175} height={160} />
                  </div>
                </div>
              </div>
            </div>

            {/* 完整解答 */}
            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">完整解答</div>
              <div className="px-3 py-2 space-y-1 text-lg text-gray-800">

                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <p className="font-bold">建系 + 写坐标</p>
                    <p>以 A 为原点，AB 为 x 轴，AD 为 y 轴，<MathTex tex="AA_1" /> 为 z 轴</p>
                    <p className="mt-1"><MathTex tex="A(0,0,0)" />，<MathTex tex="B(2,0,0)" />，<MathTex tex="C(2,2,0)" />，<MathTex tex="D(0,2,0)" /></p>
                    <p><MathTex tex="A_1(0,0,2)" />，<MathTex tex="B_1(2,0,2)" />，<MathTex tex="C_1(2,2,2)" />，<MathTex tex="D_1(0,2,2)" /></p>
                    <p><MathTex tex="E(1, 0, 0)" />（AB 中点），<MathTex tex="F(1, 2, 0)" />（CD 中点）</p>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center">
                    <DebugGeo3dSvg data={parallelCubeDiagram} width={195} height={180} />
                  </div>
                </div>

                <p className="font-bold mt-3">(1) 证明 EF ∥ AD</p>
                <p><MathTex tex="\overrightarrow{EF} = F - E = (1, 2, 0) - (1, 0, 0) = (0, 2, 0)" /></p>
                <p><MathTex tex="\overrightarrow{AD} = D - A = (0, 2, 0) - (0, 0, 0) = (0, 2, 0)" /></p>
                <p>直接观察：<MathTex tex="\overrightarrow{EF} = (0,2,0) = 1 \cdot (0,2,0) = 1 \cdot \overrightarrow{AD}" />，成比例 ✓</p>
                <p>所以 <strong>EF ∥ AD</strong></p>

                <div className="flex items-start gap-3 mt-3">
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
                  <div className="w-[160px] shrink-0 flex justify-center">
                    <DebugGeo3dSvg data={parallelLinePlaneDiagram} width={155} height={145} />
                  </div>
                </div>

                <div className="flex items-start gap-3 mt-3">
                  <div className="flex-1">
                    <p className="font-bold">(3) 证明 面 A₁B₁C₁D₁ ∥ 面 ABCD</p>
                    <p>底面 ABCD 法向量：<MathTex tex="\vec{n_1} = (0, 0, 1)" /></p>
                    <p>顶面 <MathTex tex="A_1B_1C_1D_1" /> 法向量：<MathTex tex="\vec{n_2} = (0, 0, 1)" /></p>
                    <p><MathTex tex="\vec{n_1} = 1 \cdot \vec{n_2}" />，成比例</p>
                    <p>所以 <strong>面 A₁B₁C₁D₁ ∥ 面 ABCD</strong></p>
                  </div>
                  <div className="w-[160px] shrink-0 flex justify-center">
                    <DebugGeo3dSvg data={parallelPlanesDiagram} width={155} height={145} />
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
      <section id="perpendicular-detail" className="mb-3 scroll-mt-4">
        <Collapsible title="六、证垂直（详解 + 例题）" defaultOpen storageKey="geo3d-vector:perpendicular">
          <div className="text-lg text-gray-800">

            {/* 线 ⊥ 线 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">线 ⊥ 线：方向向量点积为 0</div>
              <div className="px-3 py-2">
                <p><strong>核心：</strong>两条直线垂直 ⇔ 它们的方向向量垂直</p>
                <p><strong>判定方法：</strong><MathTex tex="\vec{a} \cdot \vec{b} = 0" /></p>
                <p className="mt-2"><strong>为什么？</strong></p>
                <p className="ml-4">点积为 0 意味着两个向量夹角为 90°，方向向量代表直线的走向，所以直线垂直</p>
                <p className="mt-2"><strong>答题格式：</strong></p>
                <p className="ml-4"><MathTex tex="\vec{a} \cdot \vec{b} = x_1x_2 + y_1y_2 + z_1z_2 = 0" />，所以直线 ⊥ 直线</p>
              </div>
            </div>

            {/* 线 ⊥ 面 */}
            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">线 ⊥ 面：方向向量 ∥ 法向量</div>
              <div className="px-3 py-2">
                <p><strong>核心：</strong>直线垂直于平面 ⇔ 方向向量与该平面的法向量平行</p>
                <p><strong>判定方法：</strong><MathTex tex="\vec{a} = \lambda\vec{n}" />（<MathTex tex="\lambda" /> 为非零常数）</p>
                <p className="mt-2"><strong>为什么？</strong></p>
                <p className="ml-4">法向量本身就垂直于平面，如果直线的方向向量与法向量平行，直线走向就和法向量一样，所以直线垂直于平面</p>
                <p className="mt-2"><strong>答题格式：</strong></p>
                <p className="ml-4"><MathTex tex="\vec{a} = \lambda\vec{n}" />，成比例，所以直线 ⊥ 平面</p>
              </div>
            </div>

            {/* 面 ⊥ 面 */}
            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-800 border-b border-purple-300 bg-purple-100 text-lg">面 ⊥ 面：法向量点积为 0</div>
              <div className="px-3 py-2">
                <p><strong>核心：</strong>两个平面垂直 ⇔ 它们的法向量垂直</p>
                <p><strong>判定方法：</strong><MathTex tex="\vec{n_1} \cdot \vec{n_2} = 0" /></p>
                <p className="mt-2"><strong>为什么？</strong></p>
                <p className="ml-4">法向量代表平面的"朝向"，两个法向量垂直，说明两个平面的朝向相差 90°，所以平面垂直</p>
                <p className="mt-2"><strong>答题格式：</strong></p>
                <p className="ml-4"><MathTex tex="\vec{n_1} \cdot \vec{n_2} = x_1x_2 + y_1y_2 + z_1z_2 = 0" />，所以面 ⊥ 面</p>
              </div>
            </div>

            {/* 记忆总结 */}
            <div className="bg-yellow-50 border border-yellow-300 rounded p-2 mt-2">
              <p className="font-bold text-yellow-800">记忆总结</p>
              <p><strong>垂直用点积：</strong>线线垂直、面面垂直都是点积 = 0</p>
              <p><strong>线面垂直特殊：</strong>方向向量与法向量成比例（不是点积！）</p>
              <p><strong>对比平行：</strong>平行用成比例，垂直用点积 = 0（线⊥面例外）</p>
            </div>

            <PageBreak label="证垂直例题" />

            {/* 实战例题 */}
            <div className="border-2 border-blue-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-400 bg-blue-100 text-lg">实战例题：正方体中的三种垂直</div>
              <div className="px-3 py-2">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p>正方体 <MathTex tex="ABCD\text{-}A_1B_1C_1D_1" />，棱长为 2</p>
                    <p className="mt-1">(1) 证明 <MathTex tex="AC \perp BD" /></p>
                    <p className="mt-1">(2) 证明 <MathTex tex="AA_1 \perp" /> 面 <MathTex tex="ABCD" /></p>
                    <p className="mt-1">(3) 证明 面 <MathTex tex="ACC_1A_1 \perp" /> 面 <MathTex tex="BDD_1B_1" /></p>
                  </div>
                  <div className="w-[180px] shrink-0 flex justify-center">
                    <DebugGeo3dSvg data={parallelCubeOriginal} width={175} height={160} />
                  </div>
                </div>
              </div>
            </div>

            {/* 完整解答 */}
            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">完整解答</div>
              <div className="px-3 py-2 space-y-1 text-lg text-gray-800">

                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <p className="font-bold">建系 + 写坐标</p>
                    <p>以 A 为原点，AB 为 x 轴，AD 为 y 轴，<MathTex tex="AA_1" /> 为 z 轴</p>
                    <p className="mt-1"><MathTex tex="A(0,0,0)" />，<MathTex tex="B(2,0,0)" />，<MathTex tex="C(2,2,0)" />，<MathTex tex="D(0,2,0)" /></p>
                    <p><MathTex tex="A_1(0,0,2)" />，<MathTex tex="B_1(2,0,2)" />，<MathTex tex="C_1(2,2,2)" />，<MathTex tex="D_1(0,2,2)" /></p>
                  </div>
                  <div className="w-[200px] shrink-0 flex justify-center">
                    <DebugGeo3dSvg data={perpCubeDiagram} width={195} height={180} />
                  </div>
                </div>

                <p className="font-bold mt-2">(1) 证明 AC ⊥ BD</p>
                <p><MathTex tex="\overrightarrow{AC} = (2, 2, 0)" />，<MathTex tex="\overrightarrow{BD} = (-2, 2, 0)" /></p>
                <p><MathTex tex="\overrightarrow{AC} \cdot \overrightarrow{BD} = 2 \times (-2) + 2 \times 2 + 0 \times 0 = -4 + 4 = 0" /></p>
                <p>所以 <strong>AC ⊥ BD</strong></p>

                <div className="flex items-start gap-3 mt-3">
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
                    <DebugGeo3dSvg data={perpLinePlaneDiagram} width={155} height={145} />
                  </div>
                </div>

                <div className="flex items-start gap-3 mt-3">
                  <div className="flex-1">
                    <p className="font-bold">(3) 证明 面 ACC₁A₁ ⊥ 面 BDD₁B₁</p>
                    <p>面 ACC₁A₁ 法向量：<MathTex tex="\vec{n_1} = (1, -1, 0)" /></p>
                    <p className="ml-4">（面内向量 <MathTex tex="\overrightarrow{AC} = (2,2,0)" />、<MathTex tex="\overrightarrow{AA_1} = (0,0,2)" />，求垂直于两者的向量）</p>
                    <p>面 BDD₁B₁ 法向量：<MathTex tex="\vec{n_2} = (1, 1, 0)" /></p>
                    <p><MathTex tex="\vec{n_1} \cdot \vec{n_2} = 1 \times 1 + (-1) \times 1 + 0 \times 0 = 0" /></p>
                    <p>所以 <strong>面 ACC₁A₁ ⊥ 面 BDD₁B₁</strong></p>
                  </div>
                  <div className="w-[160px] shrink-0 flex justify-center">
                    <DebugGeo3dSvg data={perpPlanesDiagram} width={155} height={145} />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak label="求角度" />

      {/* ════════════════════════════════════════════════════════════ */}
      {/* Section 7: 求角度（详解） */}
      {/* ════════════════════════════════════════════════════════════ */}
      <section id="angle-detail" className="mb-3 scroll-mt-4">
        <Collapsible title="七、求角度（详解 + 例题）" defaultOpen storageKey="geo3d-vector:angle">
          <div className="text-lg text-gray-800">

            {/* 线线夹角 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">线线夹角</div>
              <div className="px-3 py-2">
                <p><strong>核心：</strong>两条直线的夹角 = 两个方向向量的夹角</p>
                <p><strong>公式：</strong><MathTex tex="\cos\theta = \dfrac{|\vec{a} \cdot \vec{b}|}{|\vec{a}| \cdot |\vec{b}|}" /></p>
                <p className="mt-2"><strong>为什么取绝对值？</strong></p>
                <p className="ml-4">线线夹角规定在 <MathTex tex="[0°, 90°]" /> 范围内，取绝对值保证结果为锐角或直角</p>
                <p className="mt-2"><strong>答题格式：</strong></p>
                <p className="ml-4"><MathTex tex="\cos\theta = \dfrac{|\vec{a} \cdot \vec{b}|}{|\vec{a}| \cdot |\vec{b}|}" /> = 具体数值，所以夹角 <MathTex tex="\theta" /> = 对应角度</p>
              </div>
            </div>

            {/* 线面夹角 */}
            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">线面夹角</div>
              <div className="px-3 py-2">
                <p><strong>核心：</strong>直线与平面的夹角 = 方向向量与法向量夹角的余角</p>
                <p><strong>公式：</strong><MathTex tex="\sin\theta = \dfrac{|\vec{a} \cdot \vec{n}|}{|\vec{a}| \cdot |\vec{n}|}" /></p>
                <p className="mt-2"><strong>为什么是 sin 不是 cos？</strong></p>
                <p className="ml-4">方向向量与法向量的夹角是 <MathTex tex="\alpha" />，线面夹角是 <MathTex tex="\theta = 90° - \alpha" /></p>
                <p className="ml-4">所以 <MathTex tex="\sin\theta = \cos\alpha" />，公式里用 sin</p>
                <p className="mt-2"><strong>答题格式：</strong></p>
                <p className="ml-4"><MathTex tex="\sin\theta = \dfrac{|\vec{a} \cdot \vec{n}|}{|\vec{a}| \cdot |\vec{n}|}" /> = 具体数值，所以夹角 <MathTex tex="\theta" /> = 对应角度</p>
              </div>
            </div>

            {/* 二面角 */}
            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-800 border-b border-purple-300 bg-purple-100 text-lg">二面角</div>
              <div className="px-3 py-2">
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
            <div className="bg-yellow-50 border border-yellow-300 rounded p-2 mt-2">
              <p className="font-bold text-yellow-800">记忆总结</p>
              <p><strong>线线夹角：</strong>cos，取绝对值（结果 ≤ 90°）</p>
              <p><strong>线面夹角：</strong>sin，取绝对值（余角关系）</p>
              <p><strong>二面角：</strong>cos，取绝对值得锐角，钝角用 180° 减</p>
            </div>

            <PageBreak label="求角度例题" />

            {/* 实战例题 */}
            <div className="border-2 border-blue-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-400 bg-blue-100 text-lg">实战例题：正方体中求角度</div>
              <div className="px-3 py-2">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p>正方体 <MathTex tex="ABCD\text{-}A_1B_1C_1D_1" />，棱长为 2</p>
                    <p className="mt-1">(1) 求直线 AC 与直线 <MathTex tex="A_1D" /> 的夹角</p>
                    <p className="mt-1">(2) 求直线 <MathTex tex="A_1C" /> 与底面 ABCD 的夹角</p>
                    <p className="mt-1">(3) 求二面角 <MathTex tex="A\text{-}BD\text{-}A_1" /> 的大小</p>
                  </div>
                  <div className="w-[180px] shrink-0 flex justify-center">
                    <DebugGeo3dSvg data={pureCubeDiagram} width={175} height={160} />
                  </div>
                </div>
              </div>
            </div>

            {/* 完整解答 */}
            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">完整解答</div>
              <div className="px-3 py-2 text-lg text-gray-800 leading-snug">
                <p className="font-bold">建系 + 写坐标</p>
                <p>以 A 为原点，AB 为 x 轴，AD 为 y 轴，<MathTex tex="AA_1" /> 为 z 轴</p>
                <p><MathTex tex="A(0,0,0)" />，<MathTex tex="C(2,2,0)" />，<MathTex tex="D(0,2,0)" />，<MathTex tex="A_1(0,0,2)" /></p>

                <div className="flex items-start gap-3 mt-3">
                  <div className="flex-1">
                    <p className="font-bold">(1) 求直线 AC 与直线 A₁D 的夹角</p>
                    <p><MathTex tex="\overrightarrow{AC} = (2, 2, 0)" />，<MathTex tex="\overrightarrow{A_1D} = (0, 2, -2)" /></p>
                    <p><MathTex tex="\overrightarrow{AC} \cdot \overrightarrow{A_1D} = 2 \times 0 + 2 \times 2 + 0 \times (-2) = 4" /></p>
                    <p><MathTex tex="|\overrightarrow{AC}| = \sqrt{4+4+0} = 2\sqrt{2}" />，<MathTex tex="|\overrightarrow{A_1D}| = \sqrt{0+4+4} = 2\sqrt{2}" /></p>
                    <p><MathTex tex="\cos\theta = \dfrac{|\overrightarrow{AC} \cdot \overrightarrow{A_1D}|}{|\overrightarrow{AC}| \cdot |\overrightarrow{A_1D}|} = \dfrac{|4|}{2\sqrt{2} \times 2\sqrt{2}} = \dfrac{4}{8} = \dfrac{1}{2}" /></p>
                    <p>所以 <MathTex tex="\theta = 60°" /></p>
                  </div>
                  <div className="w-[210px] shrink-0 flex justify-center">
                    <DebugGeo3dSvg data={angleLineLineDiagram} width={200} height={190} />
                  </div>
                </div>

                <div className="flex items-start gap-3 mt-3">
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
                    <DebugGeo3dSvg data={angleLinePlaneDiagram} width={200} height={190} />
                  </div>
                </div>

                <div className="flex items-start gap-3 mt-3">
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
                    <DebugGeo3dSvg data={angleDihedralDiagram} width={200} height={190} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* 八、求距离（详解） */}
      <section id="distance" className="mb-3 scroll-mt-4">
        <Collapsible title="八、求距离（详解 + 例题）" defaultOpen storageKey="geo3d-vector:distance">
          <div className="text-lg text-gray-800">

            {/* 点到点 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">点到点的距离</div>
              <div className="px-3 py-2">
                <p><strong>公式：</strong><MathTex tex="|AB| = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}" /></p>
                <p>或者用向量模长：<MathTex tex="|AB| = |\overrightarrow{AB}| = \sqrt{a^2 + b^2 + c^2}" /></p>
                <p className="mt-2"><strong>计算步骤：</strong></p>
                <p className="ml-4">1. 写出两点坐标 <MathTex tex="A(x_1, y_1, z_1)" />，<MathTex tex="B(x_2, y_2, z_2)" /></p>
                <p className="ml-4">2. 算向量 <MathTex tex="\overrightarrow{AB} = (x_2-x_1, y_2-y_1, z_2-z_1)" /></p>
                <p className="ml-4">3. 算模长 <MathTex tex="|\overrightarrow{AB}| = \sqrt{...}" /></p>
              </div>
            </div>

            {/* 点到平面（重点） */}
            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">点到平面的距离（重点）</div>
              <div className="px-3 py-2 flex gap-4">
                <div className="flex-1">
                  <p><strong>公式：</strong><MathTex tex="d = \dfrac{|\overrightarrow{AP} \cdot \vec{n}|}{|\vec{n}|}" /></p>
                  <p><MathTex tex="A" /> 是平面上随便取的一点，<MathTex tex="P" /> 是要求距离的点（平面外），<MathTex tex="\vec{n}" /> 是平面的法向量</p>
                  <p className="mt-1"><strong>注意：</strong><MathTex tex="A" /> 可以是平面上任意一点（B、C、D 都行），<MathTex tex="\overrightarrow{AP}" /> 和 <MathTex tex="\overrightarrow{PA}" /> 都可以（因为取了绝对值）</p>
                  <p className="mt-1"><strong>理解：</strong><MathTex tex="\overrightarrow{AP}" /> 在法向量方向的投影长度</p>
                  <p className="mt-1"><strong>计算步骤：</strong></p>
                  <p className="ml-4">1. 求平面的法向量 <MathTex tex="\vec{n}" />（设法向量，列两个垂直方程）</p>
                  <p className="ml-4">2. 取平面上任一点 <MathTex tex="A" />，算 <MathTex tex="\overrightarrow{AP}" /></p>
                  <p className="ml-4">3. 算点积 <MathTex tex="\overrightarrow{AP} \cdot \vec{n}" />，算模长 <MathTex tex="|\vec{n}|" /></p>
                  <p className="ml-4">4. 代入公式 <MathTex tex="d = \dfrac{|\overrightarrow{AP} \cdot \vec{n}|}{|\vec{n}|}" /></p>
                </div>
                <div className="w-[180px] shrink-0 flex justify-center">
                  <DebugGeo3dSvg data={distancePointToBaseDiagram} width={175} height={165} />
                </div>
              </div>
            </div>

            {/* 直线到平面 & 平面到平面 */}
            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-800 border-b border-purple-300 bg-purple-100 text-lg">直线到平面 / 平面到平面的距离</div>
              <div className="px-3 py-2">
                <p><strong>直线 ∥ 平面：</strong>取直线上任一点 <MathTex tex="P" />，求点 <MathTex tex="P" /> 到平面的距离</p>
                <p><strong>平面 ∥ 平面：</strong>取其中一个平面上任一点 <MathTex tex="P" />，求点 <MathTex tex="P" /> 到另一平面的距离</p>
                <p className="mt-2"><strong>核心思路：</strong>转化为点到平面的距离问题</p>
              </div>
            </div>

            {/* 异面直线（选学） */}
            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">异面直线的距离（选学）</div>
              <div className="px-3 py-2">
                <p><strong>公式：</strong><MathTex tex="d = \dfrac{|\overrightarrow{AB} \cdot \vec{n}|}{|\vec{n}|}" /></p>
                <p className="mt-1">其中 <MathTex tex="A" />、<MathTex tex="B" /> 分别是两直线上的点，<MathTex tex="\vec{n}" /> 是公共垂线方向</p>
                <p className="mt-2"><strong>计算步骤：</strong></p>
                <p className="ml-4">1. 设两直线方向向量为 <MathTex tex="\vec{a}" />、<MathTex tex="\vec{b}" /></p>
                <p className="ml-4">2. 求公共垂线方向 <MathTex tex="\vec{n} = \vec{a} \times \vec{b}" />（叉积）</p>
                <p className="ml-4">3. 取两直线上各一点 <MathTex tex="A" />、<MathTex tex="B" />，代入公式（高考很少考，了解即可）</p>
              </div>
            </div>

            <PageBreak label="求距离例题" />

            {/* 实战例题 */}
            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-red-700 border-b border-gray-300 bg-red-50 text-lg">实战例题：正方体中求距离</div>
              <div className="px-3 py-2 text-lg text-gray-800">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <p>正方体 <MathTex tex="ABCD\text{-}A_1B_1C_1D_1" />，棱长为 2</p>
                    <p className="mt-1">(1) 求点 <MathTex tex="A_1" /> 到底面 ABCD 的距离</p>
                    <p className="mt-1">(2) 求点 <MathTex tex="A_1" /> 到平面 BDC₁ 的距离</p>
                  </div>
                  <div className="w-[180px] shrink-0 flex justify-center">
                    <DebugGeo3dSvg data={pureCubeDiagram} width={175} height={160} />
                  </div>
                </div>
              </div>
            </div>

            {/* 完整解答 */}
            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">完整解答</div>
              <div className="px-3 py-2 text-lg text-gray-800 leading-snug">
                <p className="font-bold">建系 + 写坐标</p>
                <p>以 A 为原点，AB 为 x 轴，AD 为 y 轴，<MathTex tex="AA_1" /> 为 z 轴</p>
                <p><MathTex tex="A(0,0,0)" />，<MathTex tex="B(2,0,0)" />，<MathTex tex="D(0,2,0)" />，<MathTex tex="C(2,2,0)" /></p>
                <p><MathTex tex="A_1(0,0,2)" />，<MathTex tex="B_1(2,0,2)" />，<MathTex tex="C_1(2,2,2)" />，<MathTex tex="D_1(0,2,2)" /></p>

                <div className="flex items-start gap-3 mt-3">
                  <div className="flex-1">
                    <p className="font-bold">(1) 求点 A₁ 到底面 ABCD 的距离</p>
                    <p><MathTex tex="\overrightarrow{AB} = (2, 0, 0)" />，<MathTex tex="\overrightarrow{AD} = (0, 2, 0)" /></p>
                    <p>设底面 ABCD 的法向量 <MathTex tex="\vec{n} = (x, y, z)" /></p>
                    <p><MathTex tex="\vec{n} \perp \overrightarrow{AB}" />，得 <MathTex tex="2x = 0" />，即 <MathTex tex="x = 0" /></p>
                    <p><MathTex tex="\vec{n} \perp \overrightarrow{AD}" />，得 <MathTex tex="2y = 0" />，即 <MathTex tex="y = 0" /></p>
                    <p>取 <MathTex tex="z = 1" />，得 <MathTex tex="\vec{n} = (0, 0, 1)" /></p>
                    <p>取底面上一点 <MathTex tex="A(0,0,0)" />，则 <MathTex tex="\overrightarrow{AA_1} = (0, 0, 2)" /></p>
                    <p>点到平面距离：<MathTex tex="d = \dfrac{|\overrightarrow{AA_1} \cdot \vec{n}|}{|\vec{n}|} = \dfrac{|0 \times 0 + 0 \times 0 + 2 \times 1|}{1} = 2" /></p>
                    <p>所以距离为 <MathTex tex="2" /></p>
                  </div>
                  <div className="w-[210px] shrink-0 flex justify-center">
                    <DebugGeo3dSvg data={distancePointToBaseDiagram} width={200} height={190} />
                  </div>
                </div>

                <div className="flex items-start gap-3 mt-3">
                  <div className="flex-1">
                    <p className="font-bold">(2) 求点 A₁ 到平面 BDC₁ 的距离</p>
                    <p><MathTex tex="\overrightarrow{BD} = (-2, 2, 0)" />，<MathTex tex="\overrightarrow{BC_1} = (0, 2, 2)" /></p>
                    <p>设平面 BDC₁ 的法向量 <MathTex tex="\vec{n} = (x, y, z)" /></p>
                    <p><MathTex tex="\vec{n} \perp \overrightarrow{BD}" />，得 <MathTex tex="-2x + 2y = 0" />，即 <MathTex tex="x = y" /></p>
                    <p><MathTex tex="\vec{n} \perp \overrightarrow{BC_1}" />，得 <MathTex tex="2y + 2z = 0" />，即 <MathTex tex="z = -y" /></p>
                    <p>取 <MathTex tex="y = 1" />，得 <MathTex tex="\vec{n} = (1, 1, -1)" /></p>
                    <p>取平面上一点 <MathTex tex="B(2,0,0)" />，则 <MathTex tex="\overrightarrow{BA_1} = (-2, 0, 2)" /></p>
                    <p>点到平面距离：<MathTex tex="d = \dfrac{|\overrightarrow{BA_1} \cdot \vec{n}|}{|\vec{n}|} = \dfrac{|(-2) \times 1 + 0 \times 1 + 2 \times (-1)|}{\sqrt{1+1+1}} = \dfrac{|-4|}{\sqrt{3}} = \dfrac{4\sqrt{3}}{3}" /></p>
                    <p>所以距离为 <MathTex tex="\dfrac{4\sqrt{3}}{3}" /></p>
                  </div>
                  <div className="w-[210px] shrink-0 flex justify-center">
                    <DebugGeo3dSvg data={distancePointToPlaneBDC1Diagram} width={200} height={190} />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak label="训练题" />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 9: 训练题 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="practice-problems" className="mb-3 scroll-mt-4">
        <Collapsible title="九、训练题（4道大题覆盖全部知识点）" defaultOpen storageKey="geo3d-vector:practice">
          <div className="space-y-3 text-lg text-gray-800">

            <div className="bg-blue-50 border border-blue-300 rounded p-2">
              <p className="font-bold text-blue-800">知识点覆盖</p>
              <p>大题1：证线⊥面 + 二面角　｜　大题2：证线∥面 + 线面角　｜　大题3：线线角 + 点到面距离　｜　大题4：证线∥线 + 证线⊥线</p>
            </div>

            {/* 大题1 */}
            <div className="border border-gray-300 rounded overflow-hidden" style={{ breakInside: 'avoid' }}>
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">大题1.（{geo3dVectorEssayQuestions[0].score} 分）</div>
              <div className="flex items-start gap-3 px-3 py-2">
                <div className="flex-1 space-y-1">
                  <p>四棱锥 <MathTex tex="P\text{-}ABCD" /> 中，底面 <MathTex tex="ABCD" /> 是正方形，<MathTex tex="PA \perp" /> 底面，<MathTex tex="PA = AB = 2" /></p>
                  <p className="font-bold mt-2">（1）证明：<MathTex tex="BD \perp" /> 面 <MathTex tex="PAC" /></p>
                  <p className="font-bold">（2）求二面角 <MathTex tex="P\text{-}BC\text{-}A" /> 的余弦值</p>
                </div>
                <div className="w-[150px] shrink-0 flex justify-center">
                  <DebugGeo3dSvg data={practicePyramidDiagram} width={145} height={140} />
                </div>
              </div>
            </div>

            {/* 大题2 */}
            <div className="border border-gray-300 rounded overflow-hidden" style={{ breakInside: 'avoid' }}>
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">大题2.（{geo3dVectorEssayQuestions[1].score} 分）</div>
              <div className="flex items-start gap-3 px-3 py-2">
                <div className="flex-1 space-y-1">
                  <p>四棱锥 <MathTex tex="P\text{-}ABCD" /> 中，底面 <MathTex tex="ABCD" /> 是正方形，<MathTex tex="PA \perp" /> 底面，<MathTex tex="PA = AB = 2" />，<MathTex tex="E" /> 是 <MathTex tex="PC" /> 的中点</p>
                  <p className="font-bold mt-2">（1）证明：<MathTex tex="PA \parallel" /> 面 <MathTex tex="BDE" /></p>
                  <p className="font-bold">（2）求直线 <MathTex tex="BE" /> 与底面 <MathTex tex="ABCD" /> 所成角的正弦值</p>
                </div>
                <div className="w-[150px] shrink-0 flex justify-center">
                  <DebugGeo3dSvg data={practicePyramidMidDiagram} width={145} height={140} />
                </div>
              </div>
            </div>

            {/* 大题3 */}
            <div className="border border-gray-300 rounded overflow-hidden" style={{ breakInside: 'avoid' }}>
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">大题3.（{geo3dVectorEssayQuestions[2].score} 分）</div>
              <div className="flex items-start gap-3 px-3 py-2">
                <div className="flex-1 space-y-1">
                  <p>正方体 <MathTex tex="ABCD\text{-}A_1B_1C_1D_1" />，棱长为 2，<MathTex tex="E" /> 是 <MathTex tex="DD_1" /> 的中点</p>
                  <p className="font-bold mt-2">（1）求异面直线 <MathTex tex="AE" /> 与 <MathTex tex="B_1C" /> 所成角的余弦值</p>
                  <p className="font-bold">（2）求点 <MathTex tex="B" /> 到平面 <MathTex tex="AEC_1" /> 的距离</p>
                </div>
                <div className="w-[150px] shrink-0 flex justify-center">
                  <DebugGeo3dSvg data={practiceCubeMidDiagram} width={145} height={140} />
                </div>
              </div>
            </div>

            {/* 大题4 */}
            <div className="border border-gray-300 rounded overflow-hidden" style={{ breakInside: 'avoid' }}>
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">大题4.（{geo3dVectorEssayQuestions[3].score} 分）</div>
              <div className="flex items-start gap-3 px-3 py-2">
                <div className="flex-1 space-y-1">
                  <p>三棱柱 <MathTex tex="ABC\text{-}A_1B_1C_1" />，侧棱垂直于底面，<MathTex tex="\angle ABC = 90°" />，<MathTex tex="AB = BC = BB_1 = 2" /></p>
                  <p><MathTex tex="E" /> 是 <MathTex tex="AA_1" /> 的中点，<MathTex tex="F" /> 是 <MathTex tex="CC_1" /> 的中点</p>
                  <p className="font-bold mt-2">（1）证明：<MathTex tex="EF \parallel AC" /></p>
                  <p className="font-bold">（2）证明：<MathTex tex="AB_1 \perp A_1C" /></p>
                </div>
                <div className="w-[150px] shrink-0 flex justify-center">
                  <DebugGeo3dSvg data={practicePrismDiagram} width={145} height={140} />
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ═══ 打印模式：答案与解析 ═══ */}
      {isPrinting && printOptions.showAnswers && <Geo3dVectorAnswers />}

      </LessonLayout>
      <Geo3dDebugToggle />
    </div>
  );
}
