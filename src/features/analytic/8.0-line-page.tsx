import { Math as MathTex, Collapsible, PageHeader, LessonLayout, ExportButton, PageBreak, PracticeCard, DebugGeo2dSvg, UnifiedDebugToggle } from '@/components/shared';
import { lineProgressItems } from './data/8.0/8.0-line-progress';
import { inclinationAngleDiagram, slopeMeaningDiagram, slopeDirectionsDiagram, slopeInterceptDiagram, interceptMeaningDiagram, parallelPerpDiagram, lineAngleDiagram, symmetryPointDiagram, symmetryPointPointDiagram, lineSymPointDiagram, interceptCase1Diagram, interceptCase2Diagram, triangleABCDiagram, pointSymMinDiagram, threeLinesDiagram, lineSymIntersectDiagram, lineSymParallelDiagram, lineSymEx5Diagram, lineSymEx6Diagram, fixedPointAreaDiagram, symmetryEx6Diagram } from './data/8.0/8.0-line-diagrams';
import { lineRelationPractice, angleSymPractice, lineSymPractice, lineSymIntersectPractice, lineSymParallelPractice } from './data/8.0/8.0-line-questions';
import { useProgress } from '@/hooks';

export function LinePage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('line', lineProgressItems);

  return (
    <div>
      <PageHeader
        stage=""
        title="8.0 直线"
        subtitle="直线方程、两直线关系、点到直线距离——解析几何的基础工具"
        tags={[
          { label: '难度 ★★☆☆☆', color: 'green' },
          { label: '高考 5 分', color: 'red' },
          { label: '约1天', color: 'blue' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="8.0 直线" />
      </div>


      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 1: 倾斜角与斜率 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="slope" className="mb-3 scroll-mt-4">
        <Collapsible title="一、倾斜角与斜率" defaultOpen storageKey="line:slope">
          <div className="space-y-0 text-lg text-gray-800">

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 text-lg">倾斜角</div>
              <div className="px-3 py-1 flex items-start gap-3">
                <div className="flex-1 space-y-0">
                  <p>在直线与 <MathTex tex="x" /> 轴的交点处，沿 <MathTex tex="x" /> 轴正方向作一条射线</p>
                  <p><strong>逆时针</strong>旋转这条射线直到与直线重合，转过的角就是<strong>倾斜角</strong> <MathTex tex="\alpha" /></p>
                  <p>平行或重合时规定 <MathTex tex="\alpha = 0°" /></p>
                  <p className="font-bold text-blue-700">范围：<MathTex tex="\alpha \in [0°, 180°)" />，垂直时 <MathTex tex="\alpha = 90°" /></p>
                </div>
                <DebugGeo2dSvg data={inclinationAngleDiagram} width={162} height={117} className="flex-shrink-0" />
              </div>
            </div>

            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 text-lg">斜率</div>
              <div className="px-3 py-1 space-y-0">
                <div className="flex items-start gap-3">
                <div className="flex-1 space-y-0">
                <p>斜率就是倾斜角的正切值：</p>
                <div className="text-center">
                  <MathTex tex="k = \tan\alpha" />
                </div>
                <p>已知两点 <MathTex tex="A(x_1, y_1)" />、<MathTex tex="B(x_2, y_2)" />，<MathTex tex="AB" /> 的斜率计算公式</p>
                <p>（分子分母同时换序结果不变）：</p>
                <div className="bg-green-50 rounded px-1 py-0 border border-green-200 text-center">
                  <MathTex tex="k_{AB} = \dfrac{y_2 - y_1}{x_2 - x_1} = \dfrac{y_1 - y_2}{x_1 - x_2} \quad (x_1 \neq x_2)" />
                </div>
                </div>
                <DebugGeo2dSvg data={slopeMeaningDiagram} width={150} height={125} className="flex-shrink-0" />
                </div>
              </div>
            </div>

            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">斜率与倾斜角的对应关系</div>
              <div className="px-3 py-1">
                <div className="flex items-start gap-3">
                <table className="text-left border-collapse flex-1">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="py-1 pr-2">倾斜角 <MathTex tex="\alpha" /></th>
                      <th className="py-1 pr-2">斜率 <MathTex tex="k" /></th>
                      <th className="py-1">直线方向</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 pr-2"><MathTex tex="\alpha = 0°" /></td>
                      <td className="py-1 pr-2"><MathTex tex="k = 0" /></td>
                      <td className="py-1">水平</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 pr-2"><MathTex tex="0° < \alpha < 90°" /></td>
                      <td className="py-1 pr-2"><MathTex tex="k > 0" /></td>
                      <td className="py-1">向右上倾斜</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 pr-2"><MathTex tex="\alpha = 90°" /></td>
                      <td className="py-1 pr-2">不存在</td>
                      <td className="py-1">垂直</td>
                    </tr>
                    <tr>
                      <td className="py-1 pr-2"><MathTex tex="90° < \alpha < 180°" /></td>
                      <td className="py-1 pr-2"><MathTex tex="k < 0" /></td>
                      <td className="py-1">向右下倾斜</td>
                    </tr>
                  </tbody>
                </table>
                <DebugGeo2dSvg data={slopeDirectionsDiagram} width={240} height={170} className="flex-shrink-0" />
                </div>
              </div>
            </div>

            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-800 border-b border-purple-300 bg-purple-100 text-lg">利用斜率证明三点共线</div>
              <div className="px-3 py-1">
                <p>已知 <MathTex tex="A(x_1, y_1)" />，<MathTex tex="B(x_2, y_2)" />，<MathTex tex="C(x_3, y_3)" />，若 <MathTex tex="x_1 = x_2 = x_3" /> 或 <MathTex tex="k_{AB} = k_{BC}" />，则 <MathTex tex="A" />、<MathTex tex="B" />、<MathTex tex="C" /> 三点共线</p>
              </div>
            </div>

            <div className="border border-orange-300 rounded overflow-hidden">
              <div className="px-3 py-1 space-y-0">
                <p className="font-bold">【实战】已知 <MathTex tex="A(2, 1)" />，<MathTex tex="B(-1, 4)" />，<MathTex tex="C(5, -2)" />，求 <MathTex tex="AB" /> 的斜率、倾斜角，</p>
                <p className="font-bold">并判断 <MathTex tex="A" />、<MathTex tex="B" />、<MathTex tex="C" /> 是否共线</p>
                <p className="bg-gray-100 rounded px-2 py-0.5"><MathTex tex="k_{AB} = \dfrac{4 - 1}{-1 - 2} = \dfrac{3}{-3} = -1" /></p>
                <p>求倾斜角：<MathTex tex="\tan\alpha = k_{AB} = -1" />，因为 <MathTex tex="k_{AB} < 0" /> 所以 <MathTex tex="90° < \alpha < 180°" /></p>
                <p>诱导公式：<MathTex tex="\tan(\pi - \alpha) = -\tan\alpha" />，而 <MathTex tex="\tan 45° = 1" /></p>
                <p className="bg-gray-100 rounded px-2 py-0.5">所以 <MathTex tex="\tan(180° - 45°) = -\tan 45° = -1" />，即 <MathTex tex="\tan 135° = -1" />，得 <MathTex tex="\alpha = 135°" /></p>
                <p className="bg-gray-100 rounded px-2 py-0.5"><MathTex tex="k_{AC} = \dfrac{-2 - 1}{5 - 2} = \dfrac{-3}{3} = -1" /></p>
                <p className="bg-gray-100 rounded px-2 py-0.5">因为 <MathTex tex="k_{AB} = k_{AC} = -1" /> 且共享点 <MathTex tex="A" />，所以 <MathTex tex="A" />、<MathTex tex="B" />、<MathTex tex="C" /> 三点共线</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak label="直线方程五种形式" />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 2: 直线方程五种形式 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="equations" className="mb-3 scroll-mt-4">
        <Collapsible title="二、直线方程五种形式" defaultOpen storageKey="line:equations">
          <div className="space-y-0 text-lg text-gray-800">

            {/* ── 总结速查表 ── */}
            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">五种形式速查表</div>
              <div>
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-1.5 py-1 whitespace-nowrap">名称</th>
                      <th className="border border-gray-300 px-1.5 py-1 whitespace-nowrap">方程的形式</th>
                      <th className="border border-gray-300 px-1.5 py-1 whitespace-nowrap">已知条件</th>
                      <th className="border border-gray-300 px-1.5 py-1 whitespace-nowrap">局限性</th>
                      <th className="border border-gray-300 px-1.5 py-1 whitespace-nowrap">重要性</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-1.5 py-2.5 font-bold whitespace-nowrap">点斜式</td>
                      <td className="border border-gray-300 px-1.5 py-2.5 text-center whitespace-nowrap"><MathTex tex="y - y_1 = k(x - x_1)" /></td>
                      <td className="border border-gray-300 px-1.5 py-2.5"><MathTex tex="(x_1, y_1)" /> 为直线上一定点<br /><MathTex tex="k" /> 为斜率</td>
                      <td className="border border-gray-300 px-1.5 py-2.5">不包括垂直于 <MathTex tex="x" /> 轴的直线</td>
                      <td className="border border-gray-300 px-1.5 py-2.5 text-center font-bold text-red-600">必背</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-1.5 py-2.5 font-bold whitespace-nowrap">斜截式</td>
                      <td className="border border-gray-300 px-1.5 py-2.5 text-center whitespace-nowrap"><MathTex tex="y = kx + b" /></td>
                      <td className="border border-gray-300 px-1.5 py-2.5"><MathTex tex="k" /> 为斜率<br /><MathTex tex="b" /> 是直线在 <MathTex tex="y" /> 轴上的截距</td>
                      <td className="border border-gray-300 px-1.5 py-2.5">不包括垂直于 <MathTex tex="x" /> 轴的直线</td>
                      <td className="border border-gray-300 px-1.5 py-2.5 text-center font-bold text-red-600">必背</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-1.5 py-2.5 font-bold whitespace-nowrap">两点式</td>
                      <td className="border border-gray-300 px-1.5 py-2.5 text-center"><MathTex tex="\dfrac{y - y_1}{y_2 - y_1} = \dfrac{x - x_1}{x_2 - x_1}" /></td>
                      <td className="border border-gray-300 px-1.5 py-2.5">经过两点 <MathTex tex="(x_1,y_1)" />，<MathTex tex="(x_2,y_2)" /><br />且 <MathTex tex="x_1 \neq x_2,\,y_1 \neq y_2" /></td>
                      <td className="border border-gray-300 px-1.5 py-2.5">不包括垂直于 <MathTex tex="x" /> 轴和 <MathTex tex="y" /> 轴的直线</td>
                      <td className="border border-gray-300 px-1.5 py-2.5 text-center">了解</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-1.5 py-2.5 font-bold whitespace-nowrap">截距式</td>
                      <td className="border border-gray-300 px-1.5 py-2.5 text-center whitespace-nowrap"><MathTex tex="\dfrac{x}{a} + \dfrac{y}{b} = 1" /></td>
                      <td className="border border-gray-300 px-1.5 py-2.5"><MathTex tex="a" /> 是直线在 <MathTex tex="x" /> 轴上的非零截距<br /><MathTex tex="b" /> 是直线在 <MathTex tex="y" /> 轴上的非零截距</td>
                      <td className="border border-gray-300 px-1.5 py-2.5">不包括垂直于 <MathTex tex="x" /> 轴和 <MathTex tex="y" /> 轴或原点的直线</td>
                      <td className="border border-gray-300 px-1.5 py-2.5 text-center">了解</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="border border-gray-300 px-1.5 py-2.5 font-bold whitespace-nowrap">一般式</td>
                      <td className="border border-gray-300 px-1.5 py-2.5 text-center"><MathTex tex="Ax + By + C = 0" /><br /><MathTex tex="(A^2 + B^2 \neq 0)" /></td>
                      <td className="border border-gray-300 px-1.5 py-2.5"><MathTex tex="A,B,C" /> 为系数</td>
                      <td className="border border-gray-300 px-1.5 py-2.5 text-green-700 font-bold">无限制，可表示任何位置的直线</td>
                      <td className="border border-gray-300 px-1.5 py-2.5 text-center font-bold text-red-600">必背</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* ── ① 斜截式 ── */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">① 斜截式（最常用）</div>
              <div className="px-3 py-1">
                <div className="flex items-start gap-4">
                  <div className="flex-1 space-y-0">
                    <p>上一节学了斜率 <MathTex tex="k" />，现在再加一个信息就能确定一条直线：</p>
                    <p><strong>这条直线穿过 <MathTex tex="y" /> 轴的哪个位置？</strong></p>
                    <p>直线与 <MathTex tex="y" /> 轴的交点是 <MathTex tex="(0, b)" />，这个 <MathTex tex="b" /> 叫做 <MathTex tex="y" /> 轴上的<strong>截距</strong></p>
                    <p>知道了 <MathTex tex="k" /> 和 <MathTex tex="b" />，直线方程就是：</p>
                    <div className="text-center my-1">
                      <MathTex tex="\boxed{\,y = kx + b\,}" />
                    </div>
                    <p className="font-bold mt-1">例：求斜率为 <MathTex tex="2" />，且过点 <MathTex tex="(1, 5)" /> 的直线方程</p>
                  </div>
                  <DebugGeo2dSvg data={slopeInterceptDiagram} width={220} height={170} className="flex-shrink-0" />
                </div>
                <p>解：已知 <MathTex tex="k = 2" />，代入 <MathTex tex="y = 2x + b" /></p>
                <p>把点 <MathTex tex="(1, 5)" /> 代入：<MathTex tex="5 = 2 \times 1 + b" />，解得 <MathTex tex="b = 3" /></p>
                <p>所以直线方程为 <MathTex tex="y = 2x + 3" /></p>
                <hr className="border-gray-300" />
                <p className="font-bold mt-1">注意：斜截式用了 <MathTex tex="k" />，所以竖直线（倾斜角 <MathTex tex="90°" />，斜率不存在）<strong>不能用斜截式</strong></p>
              </div>
            </div>

            {/* ── ② 点斜式 ── */}
            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">② 点斜式（斜截式的推广）</div>
              <div className="px-3 py-1 space-y-0">
                <p>斜截式要求知道 <MathTex tex="y" /> 轴截距 <MathTex tex="b" />，但如果题目给的不是 <MathTex tex="y" /> 轴上的点呢？</p>
                <p>比如：<strong>斜率为 <MathTex tex="k" />，且过点 <MathTex tex="(x_1, y_1)" /></strong></p>
                <p>直线上任意一点 <MathTex tex="(x, y)" /> 和已知点 <MathTex tex="(x_1, y_1)" /> 的斜率都是 <MathTex tex="k" />，即 <MathTex tex="\dfrac{y - y_1}{x - x_1} = k" /></p>
                <p>整理一下就是<strong>点斜式</strong>：</p>
                <div className="text-center my-1">
                  <MathTex tex="\boxed{\,y - y_1 = k(x - x_1)\,}" />
                </div>
                <p className="font-bold mt-1">例：求过点 <MathTex tex="(3, 5)" />，斜率为 <MathTex tex="-1" /> 的直线方程</p>
                <p>解：代入点斜式：<MathTex tex="y - 5 = -1 \times (x - 3)" /></p>
                <p>展开：<MathTex tex="y - 5 = -x + 3" />，即 <MathTex tex="y = -x + 8" /></p>
                <p className="mt-1"><strong>斜截式是点斜式的特例</strong>：当已知点取 <MathTex tex="(0, b)" />（即 <MathTex tex="y" /> 轴截距点）</p>
                <p>代入点斜式：<MathTex tex="y - b = k(x - 0)" />，整理得 <MathTex tex="y = kx + b" /></p>
                <hr className="border-gray-300" />
                <p className="font-bold">注意：点斜式也用了 <MathTex tex="k" />，所以同样<strong>表示不了竖直线</strong></p>
              </div>
            </div>

            {/* ── ③ 两点式 ── */}
            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-purple-800 border-b border-purple-300 bg-purple-100 text-lg">③ 两点式</div>
              <div className="px-3 py-1 space-y-0">
                <p>如果题目给的是<strong>两个点</strong>，没有直接给斜率，怎么办？</p>
                <p>先算斜率：<MathTex tex="k = \dfrac{y_2 - y_1}{x_2 - x_1}" />，再代入点斜式。把这两步合并，就得到<strong>两点式</strong>：</p>
                <div className="text-center my-1">
                  <MathTex tex="\boxed{\,\dfrac{y - y_1}{y_2 - y_1} = \dfrac{x - x_1}{x_2 - x_1}\,}" />
                </div>
                <p>谁减谁都行，但<strong>分子分母顺序必须统一</strong>（同时换序负号抵消，只换一边结果就反了）</p>
                <p className="font-bold mt-1">例：求过 <MathTex tex="A(1, 2)" /> 和 <MathTex tex="B(4, 8)" /> 两点的直线方程</p>
                <p>解：代入两点式：<MathTex tex="\dfrac{y - 2}{8 - 2} = \dfrac{x - 1}{4 - 1}" />，即 <MathTex tex="\dfrac{y - 2}{6} = \dfrac{x - 1}{3}" /></p>
                <p>交叉相乘：<MathTex tex="3(y - 2) = 6(x - 1)" />，化简得 <MathTex tex="y = 2x" /></p>
                <hr className="border-gray-300" />
                <p className="font-bold mt-1">注意：使用两点式时<strong>分母不能为零</strong></p>
              </div>
            </div>

            {/* ── ④ 截距式 ── */}
            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">④ 截距式</div>
              <div className="px-3 py-1">
                <div className="flex items-start gap-4">
                  <div className="flex-1 space-y-0">
                    <p>如果两个点恰好分别在 <MathTex tex="x" /> 轴和 <MathTex tex="y" /> 轴上呢？</p>
                    <p><MathTex tex="x" /> 截距（横截距）<MathTex tex="a" />：直线与 <MathTex tex="x" /> 轴交点的 <MathTex tex="x" /> 坐标，即 <MathTex tex="(a, 0)" /></p>
                    <p><MathTex tex="y" /> 截距（纵截距）<MathTex tex="b" />：直线与 <MathTex tex="y" /> 轴交点的 <MathTex tex="y" /> 坐标，即 <MathTex tex="(0, b)" /></p>
                    <p>把这两个点代入两点式，化简就得到<strong>截距式</strong>：</p>
                    <div className="text-center my-1">
                      <MathTex tex="\boxed{\,\dfrac{x}{a} + \dfrac{y}{b} = 1 \quad (a \neq 0,\, b \neq 0)\,}" />
                    </div>
                    <p>截距是<strong>坐标值</strong>，不是长度，可以是负数</p>
                    <p>比如直线过 <MathTex tex="(-2, 0)" />，那 <MathTex tex="x" /> 轴截距 <MathTex tex="a = -2" /></p>
                  </div>
                  <DebugGeo2dSvg data={interceptMeaningDiagram} width={220} height={170} className="flex-shrink-0" />
                </div>
                <p className="font-bold mt-1">例：求在 <MathTex tex="x" /> 轴上截距为 <MathTex tex="-3" />，在 <MathTex tex="y" /> 轴上截距为 <MathTex tex="2" /> 的直线方程</p>
                <p>解：两个截距点分别是 <MathTex tex="(-3, 0)" /> 和 <MathTex tex="(0, 2)" />，所以 <MathTex tex="a = -3" />，<MathTex tex="b = 2" /></p>
                <p>代入截距式：<MathTex tex="\dfrac{x}{-3} + \dfrac{y}{2} = 1" />，通分化简得 <MathTex tex="2x - 3y + 6 = 0" /></p>
                <hr className="border-gray-300" />
                <p className="font-bold mt-1">注意：使用截距式时<strong>分母不能为零</strong>（即 <MathTex tex="a \neq 0" />，<MathTex tex="b \neq 0" />，不过原点）</p>
              </div>
            </div>

            {/* ── ⑤ 一般式 ── */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-gray-800 border-b border-gray-400 bg-gray-200 text-lg">⑤ 一般式（万能形式）</div>
              <div className="px-3 py-1 space-y-0">
                <p>上面四种形式都有局限，有没有一种<strong>什么直线都能表示</strong>的？有，就是<strong>一般式</strong>：</p>
                <div className="text-center my-1">
                  <MathTex tex="\boxed{\,Ax + By + C = 0 \quad (A^2 + B^2 \neq 0)\,}" />
                </div>
                <p><MathTex tex="A^2 + B^2 \neq 0" /> 意思是 <MathTex tex="A" /> 和 <MathTex tex="B" /> 不能同时为零（否则就不是方程了）</p>

                <p className="font-bold mt-1">为什么说它万能？前面搞不定的，一般式都行：</p>
                <p>竖直线 <MathTex tex="x = 2" /> 移项就是 <MathTex tex="x - 2 = 0" /></p>
                <p>水平线 <MathTex tex="y = -3" /> 移项就是 <MathTex tex="y + 3 = 0" /></p>
                <p>普通直线 <MathTex tex="y = 2x + 1" /> 移项就是 <MathTex tex="2x - y + 1 = 0" /></p>


                <p className="font-bold mt-2">例：将 <MathTex tex="2x - y + 1 = 0" /> 转化为斜截式，并求出斜率和截距</p>
                <p>解：移项得 <MathTex tex="y = 2x + 1" />，对比 <MathTex tex="y = kx + b" />，得 <MathTex tex="k = 2" />，<MathTex tex="y" /> 轴截距 <MathTex tex="b = 1" /></p>
                <p>求 <MathTex tex="x" /> 轴截距：令 <MathTex tex="y = 0" />，得 <MathTex tex="2x + 1 = 0" />，解得 <MathTex tex="x = -\dfrac{1}{2}" /></p>

                <p className="font-bold mt-1">一般式没有任何局限，是最终提交答案时最常用的形式</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak label="两直线位置关系" />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 3: 两直线位置关系 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="relations" className="mb-3 scroll-mt-4">
        <Collapsible title="三、两直线位置关系" defaultOpen storageKey="line:relations">
          <div className="space-y-0 text-lg text-gray-800">

            {/* ── ① 平行与垂直 ── */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">① 平行与垂直</div>
              <div className="px-3 py-1">
                <div className="flex items-start gap-4">
                  <div className="flex-1 space-y-0">
                    <p>两条直线在平面上只有三种关系：<strong>相交、平行、重合</strong></p>
                    <p>怎么判断？有两种方法，总结在下面的表格里：</p>
                  </div>
                  <DebugGeo2dSvg data={parallelPerpDiagram} width={200} height={60} className="flex-shrink-0" />
                </div>
                <table className="w-full text-center text-base border-collapse mt-1">
                  <thead>
                    <tr className="bg-gray-50">
                      <th rowSpan={2} className="border border-gray-300 px-1.5 py-1 relative w-20" style={{ background: 'linear-gradient(to top right, transparent calc(50% - 0.5px), #d1d5db, transparent calc(50% + 0.5px))' }}>
                        <span className="absolute top-0.5 right-1.5 text-xs">直线方程</span>
                        <span className="absolute bottom-0.5 left-1.5 text-xs">位置关系</span>
                      </th>
                      <th className="border border-gray-300 px-1.5 py-1"><MathTex tex="l_1{:}\; y = k_1 x + b_1" /></th>
                      <th className="border border-gray-300 px-1.5 py-1"><MathTex tex="l_1{:}\; A_1x + B_1y + C_1 = 0" /></th>
                    </tr>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-1.5 py-1"><MathTex tex="l_2{:}\; y = k_2 x + b_2" /></th>
                      <th className="border border-gray-300 px-1.5 py-1"><MathTex tex="l_2{:}\; A_2x + B_2y + C_2 = 0" /></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-1.5 py-2 font-bold whitespace-nowrap">重合</td>
                      <td className="border border-gray-300 px-1.5 py-2"><MathTex tex="k_1 = k_2" /> 且 <MathTex tex="b_1 = b_2" /></td>
                      <td className="border border-gray-300 px-1.5 py-2"><MathTex tex="\dfrac{A_1}{A_2} = \dfrac{B_1}{B_2} = \dfrac{C_1}{C_2}" />（<MathTex tex="A_2 B_2 C_2 \neq 0" />）</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-1.5 py-2 font-bold whitespace-nowrap">相交</td>
                      <td className="border border-gray-300 px-1.5 py-2"><MathTex tex="k_1 \neq k_2" /></td>
                      <td className="border border-gray-300 px-1.5 py-2"><MathTex tex="\dfrac{A_1}{A_2} \neq \dfrac{B_1}{B_2}" />（<MathTex tex="A_2 B_2 \neq 0" />）</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-1.5 py-2 font-bold whitespace-nowrap">平行</td>
                      <td className="border border-gray-300 px-1.5 py-2"><MathTex tex="k_1 = k_2" /> 且 <MathTex tex="b_1 \neq b_2" /></td>
                      <td className="border border-gray-300 px-1.5 py-2"><MathTex tex="\dfrac{A_1}{A_2} = \dfrac{B_1}{B_2} \neq \dfrac{C_1}{C_2}" />（<MathTex tex="A_2 B_2 C_2 \neq 0" />）</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-1.5 py-2 font-bold whitespace-nowrap">垂直</td>
                      <td className="border border-gray-300 px-1.5 py-2"><MathTex tex="k_1 \cdot k_2 = -1" /></td>
                      <td className="border border-gray-300 px-1.5 py-2"><MathTex tex="A_1 A_2 + B_1 B_2 = 0" /></td>
                    </tr>
                  </tbody>
                </table>
                <p className="mt-1">一般式判断的好处：<strong>不需要讨论斜率是否存在</strong>，直接用系数算</p>
                <hr className="border-gray-300" />
                <p className="font-bold mt-1">例：判断 <MathTex tex="y = 2x + 1" /> 和 <MathTex tex="y = 2x - 3" /> 的关系</p>
                <p>解：两条线斜率都是 <MathTex tex="2" />，截距不同（不重合），所以<strong>平行</strong></p>
                <p className="font-bold mt-1">例：判断 <MathTex tex="2x + 3y - 1 = 0" /> 和 <MathTex tex="3x - 2y + 5 = 0" /> 的关系</p>
                <p>解：<MathTex tex="A_1 A_2 + B_1 B_2 = 2 \times 3 + 3 \times (-2) = 6 - 6 = 0" />，所以<strong>垂直</strong></p>
              </div>
            </div>

            {/* ── ② 求交点 ── */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-gray-800 border-b border-gray-400 bg-gray-200 text-lg">② 求交点</div>
              <div className="px-3 py-1 space-y-0">
                <p>两条直线如果相交，交点坐标怎么求？联立两个方程，解方程组就行</p>
                <p className="font-bold mt-1">例：求 <MathTex tex="2x + y - 4 = 0" /> 和 <MathTex tex="x - y + 1 = 0" /> 的交点</p>
                <p>解：联立方程组 <MathTex tex="\begin{cases} 2x + y = 4 \quad ① \\ x - y = -1 \quad ② \end{cases}" /></p>
                <p>由②得 <MathTex tex="y = x + 1" />，代入①：<MathTex tex="2x + (x + 1) = 4" />，解得 <MathTex tex="x = 1" /></p>
                <p>将 <MathTex tex="x = 1" /> 代回 <MathTex tex="y = x + 1" />，得 <MathTex tex="y = 1 + 1 = 2" /></p>
                <p>交点为 <MathTex tex="(1, 2)" /></p>
                <hr className="border-gray-300 mt-1" />
                <p className="font-bold mt-1">过交点的直线系方程</p>
                <p>已知 <MathTex tex="l_1" /> 和 <MathTex tex="l_2" /> 相交，想求过它们交点的另一条直线，<strong>不用先算交点坐标</strong>，直接写：</p>
                <div className="text-center my-1">
                  <MathTex tex="\boxed{\;(A_1x + B_1y + C_1) + \lambda(A_2x + B_2y + C_2) = 0\;}" />
                </div>
                <p className="font-bold mt-1">例：求过 <MathTex tex="l_1{:}\; x + y - 2 = 0" /> 与 <MathTex tex="l_2{:}\; 2x - y + 1 = 0" /> 的交点，且过点 <MathTex tex="(0,\,5)" /> 的直线方程</p>
                <p><strong>第一步：</strong>设直线系方程 <MathTex tex="(x + y - 2) + \lambda(2x - y + 1) = 0" /></p>
                <p><strong>第二步：</strong>将 <MathTex tex="(0,\,5)" /> 代入，得 <MathTex tex="(0 + 5 - 2) + \lambda(0 - 5 + 1) = 0" /></p>
                <p className="ml-8">即 <MathTex tex="3 - 4\lambda = 0" />，解得 <MathTex tex="\lambda = \dfrac{3}{4}" /></p>
                <p><strong>第三步：</strong>代入整理，得 <MathTex tex="10x + y - 5 = 0" /></p>
                <p><strong>第四步：</strong>检验 <MathTex tex="l_2" /> 是否过 <MathTex tex="(0,\,5)" />：代入得 <MathTex tex="0 - 5 + 1 = -4 \neq 0" />，不过，无需额外讨论</p>
                <p className="mt-1 text-gray-500">注意：直线系方程不包括 <MathTex tex="l_2" />，解题时要单独检验 <MathTex tex="l_2" /> 是否满足题意</p>
              </div>
            </div>

            {/* ── ③ 常见的直线系方程 ── */}
            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-gray-800 border-b border-gray-300 text-lg">③ 常见的直线系方程</div>
              <div>
                <table className="w-full text-left text-base border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-2 py-1 whitespace-nowrap">条件</th>
                      <th className="border border-gray-300 px-2 py-1">直线系方程</th>
                      <th className="border border-gray-300 px-2 py-1">备注</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-2 py-2 whitespace-nowrap">平行于 <MathTex tex="Ax + By + C = 0" /></td>
                      <td className="border border-gray-300 px-2 py-2"><MathTex tex="Ax + By + C_1 = 0" /></td>
                      <td className="border border-gray-300 px-2 py-2"><MathTex tex="C \neq C_1" /></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-2 whitespace-nowrap">垂直于 <MathTex tex="Ax + By + C = 0" /></td>
                      <td className="border border-gray-300 px-2 py-2"><MathTex tex="Bx - Ay + C_1 = 0" /></td>
                      <td className="border border-gray-300 px-2 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-2 whitespace-nowrap">相交于 <MathTex tex="Ax + By + C = 0" /></td>
                      <td className="border border-gray-300 px-2 py-2"><MathTex tex="A_1x + B_1y + C_1 = 0" /></td>
                      <td className="border border-gray-300 px-2 py-2"><MathTex tex="AB_1 \neq A_1B" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* ── 实战练习 ── */}
            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">实战练习</div>
              <div className="px-3 py-1 space-y-0">
                <p className="font-bold">题1（平行）：已知直线 <MathTex tex="l{:}\; 2x + 3y - 6 = 0" />，求过点 <MathTex tex="(1,\,-1)" /> 且与 <MathTex tex="l" /> 平行的直线方程</p>
                <p><strong>第一步：</strong>设与 <MathTex tex="l" /> 平行的直线 <MathTex tex="2x + 3y + C_1 = 0" />（平行条件：<MathTex tex="Ax + By + C_1 = 0" />，<MathTex tex="C \neq C_1" />）</p>
                <p><strong>第二步：</strong>将 <MathTex tex="(1,\,-1)" /> 代入，得 <MathTex tex="2 \times 1 + 3 \times (-1) + C_1 = 0" />，即 <MathTex tex="-1 + C_1 = 0" />，解得 <MathTex tex="C_1 = 1" /></p>
                <p>所求直线为 <MathTex tex="2x + 3y + 1 = 0" /></p>
                <hr className="border-gray-300 mt-1" />
                <p className="font-bold mt-1">题2（垂直）：已知直线 <MathTex tex="l{:}\; 2x + 3y - 6 = 0" />，求过点 <MathTex tex="(1,\,-1)" /> 且与 <MathTex tex="l" /> 垂直的直线方程</p>
                <p><strong>第一步：</strong>设与 <MathTex tex="l" /> 垂直的直线 <MathTex tex="3x - 2y + C_1 = 0" />（垂直条件：<MathTex tex="Bx - Ay + C_1 = 0" />）</p>
                <p><strong>第二步：</strong>将 <MathTex tex="(1,\,-1)" /> 代入，得 <MathTex tex="3 \times 1 - 2 \times (-1) + C_1 = 0" />，即 <MathTex tex="5 + C_1 = 0" />，解得 <MathTex tex="C_1 = -5" /></p>
                <p>所求直线为 <MathTex tex="3x - 2y - 5 = 0" /></p>
                <hr className="border-gray-300 mt-1" />
                <p className="font-bold mt-1">题3（相交）：已知直线 <MathTex tex="l{:}\; 2x + 3y - 6 = 0" />，求过点 <MathTex tex="(1,\,-1)" /> 且与 <MathTex tex="l" /> 相交的直线方程（举一例）</p>
                <p><strong>第一步：</strong><MathTex tex="l" /> 的系数 <MathTex tex="A = 2,\, B = 3" />，相交条件：系数不成比例，即选 <MathTex tex="A_1,\, B_1" /> 使 <MathTex tex="\dfrac{A_1}{2} \neq \dfrac{B_1}{3}" /></p>
                <p><strong>第二步：</strong>取 <MathTex tex="A_1 = 1,\, B_1 = -1" />（验证：<MathTex tex="\dfrac{1}{2} \neq \dfrac{-1}{3}" /> ✓），设 <MathTex tex="x - y + C_1 = 0" /></p>
                <p><strong>第三步：</strong>将 <MathTex tex="(1,\,-1)" /> 代入，得 <MathTex tex="1 - (-1) + C_1 = 0" />，即 <MathTex tex="2 + C_1 = 0" />，解得 <MathTex tex="C_1 = -2" /></p>
                <p>所求直线为 <MathTex tex="x - y - 2 = 0" /></p>
              </div>
            </div>

            {/* 即时训练 */}
            <PracticeCard questions={lineRelationPractice} title="" optionCols={4} printOptionCols={4} hideBlankLine />

          </div>
        </Collapsible>
      </section>

      <PageBreak label="距离公式" />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 4: 距离公式 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="distance" className="mb-3 scroll-mt-4">
        <Collapsible title="四、距离公式" defaultOpen storageKey="line:distance">
          <div className="space-y-2 text-lg text-gray-800">

            <div className="px-3 py-1 space-y-0">
              <p className="font-bold text-lg">① 两点间距离 <span className="text-sm font-bold text-red-600">必背</span></p>
              <p>两点 <MathTex tex="A(x_1, y_1)" /> 和 <MathTex tex="B(x_2, y_2)" /> 之间的距离：</p>
              <p className="text-center my-1"><MathTex tex="|AB| = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}" /></p>
              <p>本质就是<strong>勾股定理</strong>：横向差的平方 + 纵向差的平方，再开根号</p>
              <hr className="border-gray-300 my-1" />
              <p className="font-bold text-lg">② 中点坐标公式 <span className="text-sm font-bold text-red-600">必背</span></p>
              <p>线段 <MathTex tex="AB" /> 的中点 <MathTex tex="M" /> 的坐标：</p>
              <p className="text-center my-1"><MathTex tex="M\!\left(\dfrac{x_1 + x_2}{2},\; \dfrac{y_1 + y_2}{2}\right)" /></p>
              <p>就是两个端点的 <MathTex tex="x" /> 坐标取平均、<MathTex tex="y" /> 坐标取平均</p>
              <hr className="border-gray-300 my-1" />
              <p className="font-bold text-lg">③ 点到直线距离 <span className="text-sm font-bold text-red-600">必背·高频考点</span></p>
              <p>点 <MathTex tex="P(x_0, y_0)" /> 到直线 <MathTex tex="Ax + By + C = 0" /> 的距离：</p>
              <p className="text-center my-1"><MathTex tex="d = \dfrac{|Ax_0 + By_0 + C|}{\sqrt{A^2 + B^2}}" /></p>
              <p><strong>记忆：</strong>把点坐标代入直线方程左边，取绝对值，除以系数平方和的根号</p>
              <p><strong>注意：</strong>直线必须是一般式 <MathTex tex="Ax + By + C = 0" />，分子必须加绝对值</p>
              <hr className="border-gray-300 my-1" />
              <p className="font-bold text-lg">④ 两平行线间距离 <span className="text-sm font-bold text-red-600">必背</span></p>
              <p>两平行线 <MathTex tex="l_1{:}\; Ax + By + C_1 = 0" /> 和 <MathTex tex="l_2{:}\; Ax + By + C_2 = 0" /> 的距离：</p>
              <p className="text-center my-1"><MathTex tex="d = \dfrac{|C_1 - C_2|}{\sqrt{A^2 + B^2}}" /></p>
              <p><strong>注意：</strong>两条直线的 <MathTex tex="A" /> 和 <MathTex tex="B" /> 必须<strong>完全相同</strong>（不是成比例，是相同）</p>
              <p>如果系数不同，先统一。例如 <MathTex tex="2x + 4y - 6 = 0" /> 要先化成 <MathTex tex="x + 2y - 3 = 0" /></p>
            </div>

            {/* ── 典型例题 ── */}
            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">典型例题</div>
              <div className="px-3 py-1 space-y-0">
                <p className="font-bold">例1：求 <MathTex tex="A(1, 2)" /> 和 <MathTex tex="B(4, 6)" /> 之间的距离</p>
                <p>解：<MathTex tex="|AB| = \sqrt{(4-1)^2 + (6-2)^2} = \sqrt{9 + 16} = \sqrt{25} = 5" /></p>
                <hr className="border-gray-300 mt-1" />
                <p className="font-bold mt-1">例2：求 <MathTex tex="A(2, -1)" /> 和 <MathTex tex="B(6, 3)" /> 的中点坐标</p>
                <p>解：<MathTex tex="M\!\left(\dfrac{2+6}{2},\; \dfrac{-1+3}{2}\right) = (4,\; 1)" /></p>
                <hr className="border-gray-300 mt-1" />
                <p className="font-bold mt-1">例3：求点 <MathTex tex="P(1, -2)" /> 到直线 <MathTex tex="3x + 4y - 5 = 0" /> 的距离</p>
                <p>解：<MathTex tex="d = \dfrac{|3 \times 1 + 4 \times (-2) - 5|}{\sqrt{3^2 + 4^2}} = \dfrac{|3 - 8 - 5|}{\sqrt{25}} = \dfrac{10}{5} = 2" /></p>
                <hr className="border-gray-300 mt-1" />
                <p className="font-bold mt-1">例4：求 <MathTex tex="x + 2y - 1 = 0" /> 和 <MathTex tex="x + 2y + 4 = 0" /> 之间的距离</p>
                <p>解：<MathTex tex="A" /> 和 <MathTex tex="B" /> 相同，直接用公式：<MathTex tex="d = \dfrac{|-1 - 4|}{\sqrt{1^2 + 2^2}} = \dfrac{5}{\sqrt{5}} = \sqrt{5}" /></p>
                <hr className="border-gray-300 mt-1" />
                <p className="font-bold mt-1">例5：求 <MathTex tex="2x + 4y - 6 = 0" /> 和 <MathTex tex="x + 2y + 1 = 0" /> 之间的距离</p>
                <p>解：两条直线的 <MathTex tex="A" /> 和 <MathTex tex="B" /> 不同，先统一：<MathTex tex="2x + 4y - 6 = 0" /> 两边除以 <MathTex tex="2" />，得 <MathTex tex="x + 2y - 3 = 0" /></p>
                <p>现在变成 <MathTex tex="x + 2y - 3 = 0" /> 和 <MathTex tex="x + 2y + 1 = 0" />，代入公式：<MathTex tex="d = \dfrac{|-3 - 1|}{\sqrt{1^2 + 2^2}} = \dfrac{4}{\sqrt{5}} = \dfrac{4\sqrt{5}}{5}" /></p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>


      <PageBreak label="夹角与对称" />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 5: 两直线夹角与对称 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="angle-symmetry" className="mb-3 scroll-mt-4">
        <Collapsible title="五、两直线夹角与对称" defaultOpen storageKey="line:angle-symmetry">
          <div className="space-y-0 text-base text-gray-800">

            {/* ── 卡片1：夹角公式 + 例1 ── */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">① 两直线的夹角公式</div>
              <div className="px-3 py-1 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1 space-y-0">
                    <p>两条直线相交会形成四个角，其中<strong>锐角（或直角）</strong>称为两直线的夹角 <MathTex tex="\theta" /></p>
                    <p>已知两条直线的斜率 <MathTex tex="k_1" /> 和 <MathTex tex="k_2" />（且 <MathTex tex="k_1 k_2 \neq -1" />，即不垂直）：</p>
                    <p className="text-center my-1"><MathTex tex="\tan\theta = \left|\dfrac{k_1 - k_2}{1 + k_1 k_2}\right|" /></p>
                    <p><strong>注意：</strong>外面有绝对值，保证结果为正（取锐角）</p>
                    <p>若 <MathTex tex="k_1 k_2 = -1" />，两直线垂直，夹角为 <MathTex tex="90°" /></p>
                  </div>
                  <DebugGeo2dSvg data={lineAngleDiagram} width={160} height={120} className="flex-shrink-0" />
                </div>
                <hr className="border-gray-300 my-1" />
                <p className="font-bold">例1（夹角）：求直线 <MathTex tex="l_1{:}\; y = -\sqrt{3}\,x + 4" /> 与 <MathTex tex="l_2{:}\; y = \sqrt{3}\,x - 2" /> 的夹角 <MathTex tex="\theta" /></p>
                <p>解：<MathTex tex="k_1 = -\sqrt{3}" />，<MathTex tex="k_2 = \sqrt{3}" />，先验证 <MathTex tex="k_1 k_2 = -3 \neq -1" />（不垂直），可用夹角公式</p>
                <p className="bg-gray-100 rounded px-2 py-0.5"><MathTex tex="\tan\theta = \left|\dfrac{-\sqrt{3} - \sqrt{3}}{1 + (-\sqrt{3}) \times \sqrt{3}}\right| = \left|\dfrac{-2\sqrt{3}}{1 - 3}\right| = \left|\dfrac{-2\sqrt{3}}{-2}\right| = \sqrt{3}" /></p>
                <p className="bg-gray-100 rounded px-2 py-0.5">因为 <MathTex tex="\tan 60° = \sqrt{3}" />，所以 <MathTex tex="\theta = 60°" /></p>
              </div>
            </div>

            {/* ── 卡片2：点关于点对称 + 例2 ── */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">② 点关于点对称（最基础）</div>
              <div className="px-3 py-1 space-y-0">
                <p>对称问题的核心思路只有一个：<strong>中点公式</strong>（对称中心是两点的中点）。类型从简单到复杂：</p>
                <div className="flex items-start gap-3">
                  <div className="flex-1 space-y-0">
                    <p>已知点 <MathTex tex="A_1(x_1, y_1)" /> 和对称中心 <MathTex tex="C(a, b)" />，求对称点 <MathTex tex="A_2(x_2, y_2)" /></p>
                    <p className="mt-1"><strong>方法：</strong><MathTex tex="C" /> 是 <MathTex tex="A_1" /> 和 <MathTex tex="A_2" /> 的中点，直接用中点公式：</p>
                    <p className="text-center my-1"><MathTex tex="\left(\dfrac{x_1 + x_2}{2},\; \dfrac{y_1 + y_2}{2}\right) = (a,\, b)" /></p>
                    <p>由中点公式直接对应：</p>
                    <p className="text-center my-1"><MathTex tex="a = \dfrac{x_1 + x_2}{2}" /> 得 <MathTex tex="x_2 = 2a - x_1" />，<MathTex tex="\; b = \dfrac{y_1 + y_2}{2}" /> 得 <MathTex tex="y_2 = 2b - y_1" /></p>
                  </div>
                  <DebugGeo2dSvg data={symmetryPointPointDiagram} width={150} height={100} className="flex-shrink-0" />
                </div>
                <hr className="border-gray-300 my-1" />
                <p className="font-bold">例2（点关于点对称）：已知点 <MathTex tex="A_1(3, -1)" /> 和对称中心 <MathTex tex="C(1, 2)" />，求对称点 <MathTex tex="A_2" /></p>
                <p>解：设 <MathTex tex="A_2(x_2,\, y_2)" />。<MathTex tex="C" /> 是 <MathTex tex="A_1" /> 和 <MathTex tex="A_2" /> 的中点，直接用中点公式：</p>
                <p className="text-center my-0.5"><MathTex tex="\left(\dfrac{3 + x_2}{2},\; \dfrac{-1 + y_2}{2}\right) = (1,\, 2)" /></p>
                <p>由中点公式直接对应：</p>
                <p className="ml-4"><MathTex tex="\dfrac{3 + x_2}{2} = 1" /> 得 <MathTex tex="x_2 = 2 \times 1 - 3 = -1" />，<MathTex tex="\;\dfrac{-1 + y_2}{2} = 2" /> 得 <MathTex tex="y_2 = 2 \times 2 - (-1) = 5" /></p>
                <p className="mt-1 font-bold">答：<MathTex tex="A_2(-1,\, 5)" /></p>
              </div>
            </div>

            {/* 即时训练 */}
            <PracticeCard questions={angleSymPractice} title="" hideBlankLine />

            <PageBreak label="点关于直线对称" />

            {/* ── 卡片3：点关于直线对称 + 例3 ── */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">③ 点关于直线对称（最常考）</div>
              <div className="px-3 py-1 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1 space-y-0">
                    <p>已知点 <MathTex tex="A_1(x_1, y_1)" /> 和对称轴 <MathTex tex="l{:}\; Ax + By + C = 0" />，求对称点 <MathTex tex="A_2(x_2, y_2)" /></p>
                    <p className="mt-1"><strong>本质：</strong>对称轴 <MathTex tex="l" /> 是 <MathTex tex="A_1 A_2" /> 的<strong>中垂线</strong>（垂直平分线），所以同时满足两个条件：</p>
                    <p><strong>条件1（过中点）：</strong><MathTex tex="A_1" /> 和 <MathTex tex="A_2" /> 的中点在 <MathTex tex="l" /> 上，代入直线方程</p>
                    <p><strong>条件2（垂直）：</strong><MathTex tex="A_1 A_2 \perp l" />，斜率乘积 <MathTex tex="= -1" /></p>
                    <p>设出 <MathTex tex="A_2(x_2, y_2)" />，两个条件列两个方程，解方程组即可</p>
                  </div>
                  <DebugGeo2dSvg data={symmetryPointDiagram} width={150} height={110} className="flex-shrink-0" />
                </div>
                <hr className="border-gray-300 my-1" />
                <p className="font-bold">例3（点关于直线对称）：求点 <MathTex tex="A_1(4, 1)" /> 关于直线 <MathTex tex="l{:}\; x - y + 1 = 0" /> 的对称点 <MathTex tex="A_2" /></p>
                <p>解：设对称点 <MathTex tex="A_2(a, b)" />。直线 <MathTex tex="l{:}\; x - y + 1 = 0" />，即 <MathTex tex="y = x + 1" />，所以 <MathTex tex="k_l = 1" /></p>
                <p className="mt-1"><strong>第一步（垂直条件）：</strong></p>
                <p className="ml-4"><MathTex tex="A_1 A_2" /> 与 <MathTex tex="l" /> 垂直，所以 <MathTex tex="k_{A_1 A_2} \times k_l = -1" />，代入 <MathTex tex="k_l = 1" /> 得 <MathTex tex="k_{A_1 A_2} = -1" /></p>
                <p className="ml-4">由斜率公式 <MathTex tex="\dfrac{b - 1}{a - 4} = -1" />，交叉相乘得 <MathTex tex="a + b = 5" /> ①</p>
                <p className="mt-1"><strong>第二步（中点条件）：</strong></p>
                <p className="ml-4"><MathTex tex="A_1" /> 和 <MathTex tex="A_2" /> 的中点 <MathTex tex="M\!\left(\dfrac{4 + a}{2},\; \dfrac{1 + b}{2}\right)" /> 在 <MathTex tex="l" /> 上，代入得 <MathTex tex="\dfrac{4 + a}{2} - \dfrac{1 + b}{2} + 1 = 0" /></p>
                <p className="ml-4 bg-gray-100 rounded px-2 py-0.5">化简得 <MathTex tex="a - b = -5" /> ②</p>
                <p className="mt-1"><strong>第三步：联立 ①② 解方程组</strong></p>
                <p className="ml-4">① + ②：<MathTex tex="2a = 0" />，得 <MathTex tex="a = 0" />。代回 ①：<MathTex tex="b = 5" /></p>
                <p className="mt-1 font-bold">答：<MathTex tex="A_2(0,\, 5)" /></p>
              </div>
            </div>

            {/* ── 卡片4：直线关于点对称 + 例4 ── */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">④ 直线关于点对称</div>
              <div className="px-3 py-1 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1 space-y-0">
                    <p>已知直线 <MathTex tex="l_1{:}\; Ax + By + C = 0" /> 和对称中心 <MathTex tex="C(a, b)" />，求对称直线 <MathTex tex="l_2" /></p>
                    <p className="mt-1"><strong>关键性质：</strong><MathTex tex="l_2 \parallel l_1" />（关于点对称不改变斜率），且 <MathTex tex="C" /> 到 <MathTex tex="l_1" />、<MathTex tex="l_2" /> 的距离相等</p>
                    <p className="mt-1"><strong>方法：</strong></p>
                    <p>第一步：因为 <MathTex tex="l_2 \parallel l_1" />，设 <MathTex tex="l_2{:}\; Ax + By + C_1 = 0" /></p>
                    <p>第二步：在 <MathTex tex="l_1" /> 上取一个点，设为 <MathTex tex="Q(x, y)" />，令 <MathTex tex="x = 0" /> 或 <MathTex tex="y = 0" /> 代入 <MathTex tex="l_1" /> 算出具体坐标</p>
                    <p>第三步：设对称点 <MathTex tex="Q_1(x_1, y_1)" />，由"<MathTex tex="C" /> 是 <MathTex tex="Q" /> 和 <MathTex tex="Q_1" /> 的中点"列中点公式，算出 <MathTex tex="x_1" /> 和 <MathTex tex="y_1" /></p>
                    <p>第四步：将 <MathTex tex="Q_1" /> 代入 <MathTex tex="l_2" /> 的方程，解出 <MathTex tex="C_1" /></p>
                  </div>
                  <DebugGeo2dSvg data={lineSymPointDiagram} width={150} height={130} className="flex-shrink-0" />
                </div>
                <hr className="border-gray-300 my-1" />
                <p className="font-bold">例4（直线关于点对称）：求直线 <MathTex tex="l_1{:}\; 2x - y + 1 = 0" /> 关于点 <MathTex tex="C(1, 1)" /> 的对称直线 <MathTex tex="l_2" /></p>
                <p><strong>第一步：</strong>因为 <MathTex tex="l_2 \parallel l_1" />，设 <MathTex tex="l_2{:}\; 2x - y + C_1 = 0" /></p>
                <p><strong>第二步：</strong>在 <MathTex tex="l_1" /> 上取一点，令 <MathTex tex="x = 0" /> 得 <MathTex tex="y = 1" />，即 <MathTex tex="Q(0, 1)" /></p>
                <p><strong>第三步：</strong>设对称点 <MathTex tex="Q_1(x_1, y_1)" />，<MathTex tex="C(1, 1)" /> 是 <MathTex tex="Q(0, 1)" /> 和 <MathTex tex="Q_1" /> 的中点，列中点公式：</p>
                <p className="ml-4 text-center"><MathTex tex="\left(\dfrac{0 + x_1}{2},\; \dfrac{1 + y_1}{2}\right) = (1,\, 1)" /></p>
                <p className="ml-4"><MathTex tex="\dfrac{0 + x_1}{2} = 1" /> 得 <MathTex tex="x_1 = 2" />，<MathTex tex="\;\dfrac{1 + y_1}{2} = 1" /> 得 <MathTex tex="y_1 = 1" />，即 <MathTex tex="Q_1(2, 1)" /></p>
                <p><strong>第四步：</strong>把 <MathTex tex="Q_1(2, 1)" /> 代入 <MathTex tex="2x - y + C_1 = 0" />：<MathTex tex="2 \times 2 - 1 + C_1 = 0" />，得 <MathTex tex="C_1 = -3" />，答：<MathTex tex="l_2{:}\; 2x - y - 3 = 0" /></p>
              </div>
            </div>

            {/* 即时训练 — 点关于直线对称 + 直线关于点对称 */}
            <PracticeCard questions={lineSymPractice} title="" hideBlankLine />

            <PageBreak label="直线关于直线对称" />

            {/* ── 卡片5a：直线关于直线对称（相交）+ 例5 ── */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">⑤ 直线关于直线对称 — 情况1：相交（最常考）</div>
              <div className="px-3 py-1 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1 space-y-0">
                    <p>已知直线 <MathTex tex="l_1" /> 与对称轴 <MathTex tex="l" /> 相交，求 <MathTex tex="l_1" /> 关于 <MathTex tex="l" /> 的对称直线 <MathTex tex="l_2" /></p>
                    <p className="mt-1"><strong>本质：</strong>先求交点，再利用点关于直线对称求出对称点，两点写出方程</p>
                    <p className="mt-1"><strong>基础方法：</strong></p>
                    <p className="ml-4">第一步：联立 <MathTex tex="l_1" /> 和 <MathTex tex="l" /> 求交点 <MathTex tex="P" />（<MathTex tex="l_1" /> 与 <MathTex tex="l" /> 交于点 <MathTex tex="P" />，对称后 <MathTex tex="l_2" /> 也交于点 <MathTex tex="P" />）</p>
                  </div>
                  <DebugGeo2dSvg data={lineSymIntersectDiagram} width={166} height={119} className="flex-shrink-0" />
                </div>
                <p className="ml-4">第二步：在 <MathTex tex="l_1" /> 上另取一点，设为 <MathTex tex="Q(x, y)" />（令 <MathTex tex="x" /> 或 <MathTex tex="y" /> 为 <MathTex tex="0" /> 代入 <MathTex tex="l_1" /> 解得），设对称点为 <MathTex tex="Q_1(x_1, y_1)" /></p>
                <p className="ml-4">第三步：已知 <MathTex tex="l_1" /> 上的点 <MathTex tex="Q" /> 和对称轴 <MathTex tex="l" />，利用③点关于直线对称求出 <MathTex tex="l_2" /> 上的对称点 <MathTex tex="Q_1" /></p>
                <p className="ml-4">第四步：已知 <MathTex tex="l_2" /> 上两点 <MathTex tex="P" />、<MathTex tex="Q_1" /> 的坐标，可用两点式或点斜式求出 <MathTex tex="l_2" /> 的方程</p>
                <hr className="border-gray-300 my-1" />
                <div className="flex items-start gap-3">
                  <div className="flex-1 space-y-0">
                    <p className="font-bold">例5（相交）：求直线 <MathTex tex="l_1{:}\; 2x - y - 3 = 0" /> 关于直线 <MathTex tex="l_2{:}\; y = x" /> 的对称直线 <MathTex tex="l_3" /></p>
                    <p>解：先判断 <MathTex tex="l_1" /> 和 <MathTex tex="l_2" /> 的关系。把 <MathTex tex="l_1" /> 化为斜截式：<MathTex tex="y = 2x - 3" />，<MathTex tex="l_2{:}\; y = x" /></p>
                    <p>因为 <MathTex tex="k_1 \neq k_2" />，所以 <MathTex tex="l_1" /> 与 <MathTex tex="l_2" /> 相交，用情况1的方法</p>
                    <p><strong>第一步：</strong>联立 <MathTex tex="l_1" /> 和 <MathTex tex="l_2" /> 求交点：<MathTex tex="\begin{cases} 2x - y - 3 = 0 \\ y = x \end{cases}" /></p>
                    <p className="ml-4">把 <MathTex tex="y = x" /> 代入第一个方程，得 <MathTex tex="2x - x - 3 = 0" />，即 <MathTex tex="x = 3" />，<MathTex tex="y = 3" /></p>
                    <p className="bg-gray-100 rounded px-2 py-0.5">交点 <MathTex tex="P(3,\, 3)" />（<MathTex tex="P" /> 在对称轴上，所以 <MathTex tex="P" /> 也在 <MathTex tex="l_3" /> 上）</p>
                  </div>
                  <DebugGeo2dSvg data={lineSymEx5Diagram} width={166} height={119} className="flex-shrink-0" />
                </div>
                <p><strong>第二步：</strong>在 <MathTex tex="l_1" /> 上另取一点，设为 <MathTex tex="Q(x, y)" />，令 <MathTex tex="x = 0" /> 代入 <MathTex tex="l_1" /> 得 <MathTex tex="y = -3" />，即 <MathTex tex="Q(0,\, -3)" />。设对称点为 <MathTex tex="Q_1(a,\, b)" /></p>
                <p><strong>第三步（垂直条件）：</strong><MathTex tex="QQ_1" /> 与 <MathTex tex="l_2" /> 垂直，所以 <MathTex tex="k_{QQ_1} \times k_{l_2} = -1" />，代入 <MathTex tex="k_{l_2} = 1" /> 得 <MathTex tex="k_{QQ_1} = -1" /></p>
                <p className="ml-4 bg-gray-100 rounded px-2 py-0.5">由斜率公式 <MathTex tex="\dfrac{b - (-3)}{a - 0} = -1" />，交叉相乘得 <MathTex tex="a + b = -3" /> ①</p>
                <p><strong>第四步（中点条件）：</strong><MathTex tex="Q" /> 和 <MathTex tex="Q_1" /> 的中点 <MathTex tex="M\!\left(\dfrac{a}{2},\; \dfrac{b - 3}{2}\right)" /> 在 <MathTex tex="l_2" /> 上，代入得 <MathTex tex="\dfrac{b - 3}{2} = \dfrac{a}{2}" /></p>
                <p className="ml-4 bg-gray-100 rounded px-2 py-0.5">化简得 <MathTex tex="a - b = -3" /> ②</p>
                <p className="mt-1"><strong>第五步：联立 ①② 解方程组</strong></p>
                <p className="ml-4">① + ②：<MathTex tex="2a = -6" />，得 <MathTex tex="a = -3" />。代回 ①：<MathTex tex="b = 0" />，所以 <MathTex tex="Q_1(-3,\, 0)" /></p>
                <p className="mt-1"><strong>第六步：</strong>已知 <MathTex tex="l_3" /> 上两点 <MathTex tex="P(3,\,3)" /> 和 <MathTex tex="Q_1(-3,\,0)" />，先求斜率：<MathTex tex="k = \dfrac{3 - 0}{3 - (-3)} = \dfrac{1}{2}" /></p>
                <p className="ml-4 bg-gray-100 rounded px-2 py-0.5">点斜式：<MathTex tex="y - 3 = \dfrac{1}{2}(x - 3)" />，化简得 <MathTex tex="x - 2y + 3 = 0" /></p>
                <hr className="border-gray-300 my-1" />
                <p className="font-bold">秒杀技巧（选择题/填空题适用）：</p>
                <p>直线 <MathTex tex="Ax + By + C = 0" /> 关于直线 <MathTex tex="ax + by + c = 0" /> 的对称直线方程，由下式决定：</p>
                <p className="text-center my-1"><MathTex tex="\dfrac{Ax + By + C}{ax + by + c} = \dfrac{2(Aa + Bb)}{a^2 + b^2}" /></p>
                <p>化简左边即得对称直线方程（仅限相交情况，平行不适用）</p>
                <p className="mt-1"><strong>验证例5：</strong><MathTex tex="A=2,\; B=-1,\; C=-3,\; a=1,\; b=-1,\; c=0" /></p>
                <p className="ml-4 bg-gray-100 rounded px-2 py-0.5">右边 <MathTex tex="= \dfrac{2(2 \times 1 + (-1)\times(-1))}{1^2 + (-1)^2} = \dfrac{2 \times 3}{2} = 3" />，即 <MathTex tex="\dfrac{2x - y - 3}{x - y} = 3" />，化简得 <MathTex tex="x - 2y + 3 = 0" /> ✓</p>
              </div>
            </div>

            <PracticeCard questions={lineSymIntersectPractice} title="" hideBlankLine />

            <PageBreak label="直线对称-平行" />

            {/* ── 卡片5b：直线关于直线对称（平行）+ 例6 ── */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">⑤ 直线关于直线对称 — 情况2：平行</div>
              <div className="px-3 py-1 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1 space-y-0">
                    <p><MathTex tex="l_2" /> 也平行于 <MathTex tex="l_1" />（平行线关于平行线对称还是平行线）</p>
                    <p className="mt-1"><strong>方法：</strong></p>
                    <p className="ml-4">第一步：在 <MathTex tex="l_1" /> 上取一点 <MathTex tex="Q" />，设对称点 <MathTex tex="Q_1(x_1, y_1)" />，用③的方法求出 <MathTex tex="Q_1" /></p>
                    <p className="ml-4">第二步：过 <MathTex tex="Q_1" /> 写一条与 <MathTex tex="l_1" /> 平行的直线，就是 <MathTex tex="l_2" /></p>
                  </div>
                  <DebugGeo2dSvg data={lineSymParallelDiagram} width={166} height={98} className="flex-shrink-0" />
                </div>
                <hr className="border-gray-300 my-1" />
                <div className="flex items-start gap-3">
                  <div className="flex-1 space-y-0">
                    <p className="font-bold">例6（平行）：求直线 <MathTex tex="l_1{:}\; x - y + 4 = 0" /> 关于直线 <MathTex tex="l_2{:}\; x - y + 1 = 0" /> 的对称直线 <MathTex tex="l_3" /></p>
                    <p>解：先判断 <MathTex tex="l_1" /> 和 <MathTex tex="l_2" /> 的关系。把两条直线化为斜截式：<MathTex tex="l_1{:}\; y = x + 4" />，<MathTex tex="l_2{:}\; y = x + 1" /></p>
                    <p>由直线位置关系可知 <MathTex tex="k_1 = k_2 = 1" /> 且 <MathTex tex="b_1 \neq b_2" />，所以 <MathTex tex="l_1 \parallel l_2" />，走情况2</p>
                    <p className="bg-gray-100 rounded px-2 py-0.5">因为 <MathTex tex="l_1 \parallel l_2" />，所以对称直线 <MathTex tex="l_3" /> 也与它们平行，斜率也是 <MathTex tex="1" /></p>
                  </div>
                  <DebugGeo2dSvg data={lineSymEx6Diagram} width={154} height={109} className="flex-shrink-0" />
                </div>
                <p><strong>第一步：</strong>在 <MathTex tex="l_1" /> 上取一点 <MathTex tex="Q_1(x,\, y)" />，令 <MathTex tex="x = 0" />，代入 <MathTex tex="x - y + 4 = 0" /> 得 <MathTex tex="y = 4" />，即 <MathTex tex="Q_1(0,\, 4)" /></p>
                <p><strong>第二步：</strong>设 <MathTex tex="Q_1" /> 关于 <MathTex tex="l_2" /> 的对称点为 <MathTex tex="Q_2(a,\, b)" />（<MathTex tex="Q_2" /> 在 <MathTex tex="l_3" /> 上）</p>
                <p><strong>第三步：</strong>利用点关于直线对称的两个条件，列方程</p>
                <p className="ml-4"><strong>垂直条件：</strong><MathTex tex="Q_1Q_2" /> 与 <MathTex tex="l_2" /> 垂直，所以 <MathTex tex="k_{Q_1Q_2} \times k_{l_2} = -1" />，代入 <MathTex tex="k_{l_2} = 1" /> 得 <MathTex tex="k_{Q_1Q_2} = -1" /></p>
                <p className="ml-4">其中 <MathTex tex="Q_1(0,\, 4)" />，<MathTex tex="Q_2(a,\, b)" />，由斜率公式 <MathTex tex="\dfrac{4 - b}{0 - a} = -1" />，交叉相乘得 <MathTex tex="4 - b = a" />，即 <MathTex tex="a + b = 4" /> ①</p>
                <p className="ml-4"><strong>中点条件：</strong><MathTex tex="Q_1" /> 和 <MathTex tex="Q_2" /> 的中点 <MathTex tex="M\!\left(\dfrac{0 + a}{2},\; \dfrac{4 + b}{2}\right)" /> 在 <MathTex tex="l_2" /> 上</p>
                <p className="ml-4">将中点 <MathTex tex="M" /> 代入 <MathTex tex="x - y + 1 = 0" /> 得 <MathTex tex="\dfrac{a}{2} - \dfrac{4 + b}{2} + 1 = 0" />，化简得 <MathTex tex="a - b = 2" /> ②</p>
                <p className="ml-4">联立得 <MathTex tex="\begin{cases} a + b = 4 \quad ① \\ a - b = 2 \quad ② \end{cases}" />，由 ② 得 <MathTex tex="a = b + 2" />，代入 ① 得 <MathTex tex="b + 2 + b = 4" />，即 <MathTex tex="2b = 2" />，即 <MathTex tex="b = 1" /> </p>
                <p className="ml-4 bg-gray-100 rounded px-2 py-0.5">代回 ② 得 <MathTex tex="a = 1 + 2 = 3" />，所以 <MathTex tex="Q_2(3,\, 1)" /></p>
                <p><strong>第四步：</strong>现在已知 <MathTex tex="l_3" /> 的斜率为 <MathTex tex="1" />，且过点 <MathTex tex="Q_2(3,\, 1)" />，用点斜式：<MathTex tex="y - 1 = 1 \cdot (x - 3)" />，化简得 <MathTex tex="x - y - 2 = 0" /></p>
                <p className="mt-1 font-bold">答：<MathTex tex="l_3{:}\; x - y - 2 = 0" /></p>
                <hr className="border-gray-300 my-1" />
                <p className="font-bold">秒杀技巧（基于中点公式，所有题型适用）：</p>
                <p>当 <MathTex tex="l_1" /> 与对称轴 <MathTex tex="l" /> 平行时，三条线系数相同，只有常数项不同：</p>
                <p className="ml-4"><MathTex tex="l_1{:}\; Ax + By + C_1 = 0" />，对称轴 <MathTex tex="l{:}\; Ax + By + C = 0" />，对称直线 <MathTex tex="l_2{:}\; Ax + By + C_2 = 0" /></p>
                <p className="text-center my-1"><MathTex tex="C_2 = 2C - C_1" /></p>
                <p className="mt-1"><strong>验证例6：</strong><MathTex tex="C_1 = 4,\; C = 1" /></p>
                <p className="ml-4 bg-gray-100 rounded px-2 py-0.5"><MathTex tex="C_2 = 2 \times 1 - 4 = -2" />，即 <MathTex tex="x - y - 2 = 0" /> ✓</p>
              </div>
            </div>

            {/* ── 4种对称总结表 ── */}
            <table className="w-full border-collapse text-sm text-gray-800">
              <thead>
                <tr className="bg-blue-100 text-blue-800 font-bold">
                  <th className="border border-blue-300 px-2 py-1 text-center">类型</th>
                  <th className="border border-blue-300 px-2 py-1 text-center">已知</th>
                  <th className="border border-blue-300 px-2 py-1 text-center" style={{ minWidth: '6rem' }}>核心条件</th>
                  <th className="border border-blue-300 px-2 py-1 text-center">关键步骤</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-2 py-1 font-bold text-center whitespace-nowrap">② 点关于点</td>
                  <td className="border border-gray-300 px-2 py-1">点 <MathTex tex="A" /> + 对称中心 <MathTex tex="C" /></td>
                  <td className="border border-gray-300 px-2 py-1">中点公式</td>
                  <td className="border border-gray-300 px-2 py-1"><MathTex tex="x_2 = 2a - x_1" />，<MathTex tex="y_2 = 2b - y_1" /></td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-2 py-1 font-bold text-center whitespace-nowrap">③ 点关于直线</td>
                  <td className="border border-gray-300 px-2 py-1">点 <MathTex tex="A" /> + 对称轴 <MathTex tex="l" /></td>
                  <td className="border border-gray-300 px-2 py-1">垂直 + 中点</td>
                  <td className="border border-gray-300 px-2 py-1">列两个方程：<MathTex tex="AA'" /> 垂直于 <MathTex tex="l" />，中点在 <MathTex tex="l" /> 上</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1 font-bold text-center whitespace-nowrap">④ 直线关于点</td>
                  <td className="border border-gray-300 px-2 py-1">直线 <MathTex tex="l_1" /> + 对称中心 <MathTex tex="C" /></td>
                  <td className="border border-gray-300 px-2 py-1">平行 + 中点</td>
                  <td className="border border-gray-300 px-2 py-1">设 <MathTex tex="l_2 \parallel l_1" />，取点用中点公式求对称点，代入定 <MathTex tex="C_1" /></td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-2 py-1 font-bold text-center whitespace-nowrap">⑤ 直线关于直线</td>
                  <td className="border border-gray-300 px-2 py-1">直线 <MathTex tex="l_1" /> + 对称轴 <MathTex tex="l" /></td>
                  <td className="border border-gray-300 px-2 py-1">垂直 + 中点</td>
                  <td className="border border-gray-300 px-2 py-1">相交：求交点 + 取点求对称点，两点定线<br />平行：取点求对称点，过对称点写平行线</td>
                </tr>
              </tbody>
            </table>

            <PracticeCard questions={lineSymParallelPractice} title="" hideBlankLine />

          </div>
        </Collapsible>
      </section>

      <PageBreak label="实战大题" />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 6: 实战大题 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="practice-problems" className="mb-3 scroll-mt-4">
        <Collapsible title="六、实战大题" defaultOpen storageKey="line:practice-problems">
          <div className="space-y-0 text-lg text-gray-800">

            {/* ── 大题1 ── */}
            <div className="border border-amber-300 rounded overflow-hidden text-[0.93rem]">
              <div className="px-3 py-1 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1 space-y-0">
                    <p className="font-bold">大题1：已知直线 <MathTex tex="l" /> 过点 <MathTex tex="(1, 2)" />，且在 <MathTex tex="x" /> 轴和 <MathTex tex="y" /> 轴上的截距相等，求直线 <MathTex tex="l" /> 的方程</p>
                    <p className="mt-1"><strong>分析：</strong>"截距相等"意味着 <MathTex tex="a = b" />，分两种情况：截距为零（过原点）和截距不为零</p>
                    <p className="mt-1"><strong>情况1：截距不为零</strong>（<MathTex tex="a = b \neq 0" />）</p>
                    <p className="ml-4">用截距式 <MathTex tex="\dfrac{x}{a} + \dfrac{y}{a} = 1" />，化简得 <MathTex tex="x + y = a" /></p>
                    <p className="ml-4">过点 <MathTex tex="(1,2)" />，代入得 <MathTex tex="1 + 2 = a" />，所以 <MathTex tex="a = 3" /></p>
                    <p className="ml-4">直线方程：<MathTex tex="x + y - 3 = 0" /></p>
                  </div>
                  <DebugGeo2dSvg data={interceptCase1Diagram} width={170} height={140} className="flex-shrink-0" />
                </div>
                <div className="flex items-start gap-3 mt-1">
                  <div className="flex-1 space-y-0">
                    <p><strong>情况2：截距为零</strong>（<MathTex tex="a = b = 0" />，即过原点）</p>
                    <p className="ml-4"><span className="text-sm">（截距式分母为零不能用）</span>已知两点，可用点斜式或两点式，以点斜式为例：</p>
                    <p className="ml-4">斜率 <MathTex tex="k = \dfrac{2-0}{1-0} = 2" />，任选一点代入公式 <MathTex tex="y - y_1 = k(x - x_1)" /></p>
                    <p className="ml-8">代入 <MathTex tex="(1,2)" />，得 <MathTex tex="y - 2 = 2(x - 1)" />，即 <MathTex tex="y = 2x" /></p>
                    <p className="ml-4">直线方程（一般式）：<MathTex tex="2x - y = 0" /></p>
                    <p className="mt-1 font-bold">答：<MathTex tex="x + y - 3 = 0" /> 或 <MathTex tex="2x - y = 0" /></p>
                    <p className="mt-1 text-gray-500">【考点】截距式、分类讨论（截距为零的陷阱）、一般式</p>
                  </div>
                  <DebugGeo2dSvg data={interceptCase2Diagram} width={170} height={140} className="flex-shrink-0" />
                </div>
              </div>
            </div>

            {/* ── 大题2 ── */}
            <div className="border border-amber-300 rounded overflow-hidden text-[0.93rem]">
              <div className="px-3 py-1 space-y-0">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <p className="font-bold">大题2：已知三角形 <MathTex tex="\triangle ABC" />，其中 <MathTex tex="A(1, 3)" />，<MathTex tex="B(-2, -1)" />，<MathTex tex="C(4, -1)" /></p>
                    <p className="ml-4">（1）求直线 <MathTex tex="BC" /> 的方程</p>
                    <p className="ml-4">（2）求点 <MathTex tex="A" /> 到直线 <MathTex tex="BC" /> 的距离（即 <MathTex tex="BC" /> 边上的高）</p>
                    <p className="mt-1"><strong>（1）求直线 BC 的方程</strong></p>
                    <p className="ml-4">已知 <MathTex tex="B" /> 和 <MathTex tex="C" /> 的坐标，可用两点式或点斜式，以两点式变式为例：</p>
                    <p className="ml-4">两点式：<MathTex tex="(y - y_1)(x_2 - x_1) = (y_2 - y_1)(x - x_1)" />，代入 <MathTex tex="B(-2,-1)" />、<MathTex tex="C(4,-1)" /></p>
                  </div>
                  <DebugGeo2dSvg data={triangleABCDiagram} width={168} height={136} className="flex-shrink-0" />
                </div>

                <p className="ml-8 bg-gray-100 rounded px-2 py-0.5">得 <MathTex tex="(y + 1) \cdot 6 = 0 \cdot (x + 2)" />，即 <MathTex tex="6(y + 1) = 0" />，化简得 <MathTex tex="y + 1 = 0" /></p>

                <p className="mt-1"><strong>（2）求 A 到 BC 的距离</strong></p>
                <p className="ml-4">由第（1）问得 <MathTex tex="BC" /> 的一般式为 <MathTex tex="0 \cdot x + 1 \cdot y + 1 = 0" />，即 <MathTex tex="A = 0,\; B = 1,\; C = 1" /></p>
                <p className="ml-4">代入点到直线距离公式 <MathTex tex="d = \dfrac{|Ax_0 + By_0 + C|}{\sqrt{A^2 + B^2}}" />，其中 <MathTex tex="A(1, 3)" /> 即 <MathTex tex="x_0 = 1,\; y_0 = 3" /></p>
                <p className="ml-4 bg-gray-100 rounded px-2 py-0.5">得 <MathTex tex="d = \dfrac{|0 \times 1 + 1 \times 3 + 1|}{\sqrt{0^2 + 1^2}} = \dfrac{4}{1} = 4" /></p>

                <p className="mt-1 font-bold">答：（1）<MathTex tex="y + 1 = 0" />（2）<MathTex tex="d = 4" /></p>
                <p className="mt-1 text-gray-500">【考点】两点确定直线、点到直线距离公式</p>
              </div>
            </div>

            {/* ── 大题3 ── */}
            <div className="border border-amber-300 rounded overflow-hidden text-[0.93rem] mt-2">
              <div className="px-3 py-1 space-y-0">
                <p className="font-bold">大题3：已知点 <MathTex tex="A(2, 1)" />，点 <MathTex tex="B" /> 在直线 <MathTex tex="l{:}\; x - y + 3 = 0" /> 上运动，点 <MathTex tex="C" /> 与点 <MathTex tex="A" /> 关于点 <MathTex tex="P(3, 0)" /> 对称</p>
                <div className="flex items-start gap-2">
                  <div className="flex-1 space-y-0">
                    <p className="ml-4">（1）求点 <MathTex tex="C" /> 的坐标</p>
                    <p className="ml-4">（2）求 <MathTex tex="|CB|" /> 的最小值</p>

                    <p className="mt-1"><strong>（1）求点 C 的坐标</strong></p>
                    <p className="ml-4"><MathTex tex="C" /> 与 <MathTex tex="A" /> 关于 <MathTex tex="P" /> 对称，即 <MathTex tex="P" /> 是 <MathTex tex="AC" /> 的中点</p>
                    <p className="ml-4">中点公式：<MathTex tex="\left(\dfrac{x_A + x_C}{2},\;\dfrac{y_A + y_C}{2}\right) = P(3,\,0)" />，其中 <MathTex tex="A(2,\,1)" /></p>
                    <p className="ml-4 bg-gray-100 rounded px-2 py-0.5">代入，得 <MathTex tex="\dfrac{2 + x_C}{2} = 3" />，<MathTex tex="\dfrac{1 + y_C}{2} = 0" />，解得 <MathTex tex="x_C = 4" />，<MathTex tex="y_C = -1" />，得 <MathTex tex="C(4,\, -1)" /></p>
                  </div>
                  <DebugGeo2dSvg data={pointSymMinDiagram} width={170} height={145} className="flex-shrink-0" />
                </div>

                <p className="mt-1"><strong>（2）求 |CB| 的最小值</strong></p>
                <p className="ml-4">点 <MathTex tex="B" /> 在直线 <MathTex tex="l" /> 上运动，因为点到直线的最短距离是垂线段，所以当 <MathTex tex="CB \perp l" /> 时，<MathTex tex="|CB|" /> 取最小值</p>
                <p className="ml-4">即 <MathTex tex="|CB|_{\min}" /> 就是点 <MathTex tex="C(4, -1)" /> 到直线 <MathTex tex="l{:}\; x - y + 3 = 0" /> 的距离</p>
                <p className="ml-4">其中 <MathTex tex="A = 1,\; B = -1,\; C = 3" />，点 <MathTex tex="C(4, -1)" /> 即 <MathTex tex="x_0 = 4,\; y_0 = -1" /></p>
                <p className="ml-4 bg-gray-100 rounded px-2 py-0.5">代入 <MathTex tex="d = \dfrac{|Ax_0 + By_0 + C|}{\sqrt{A^2 + B^2}} = \dfrac{|1 \times 4 + (-1) \times (-1) + 3|}{\sqrt{1^2 + (-1)^2}} = \dfrac{8}{\sqrt{2}} = 4\sqrt{2}" /></p>
                <p className="mt-1 font-bold">答：（1）<MathTex tex="C(4,\, -1)" />（2）<MathTex tex="|CB|" /> 的最小值为 <MathTex tex="4\sqrt{2}" /></p>
                <p className="mt-1 text-gray-500">【考点】中点公式逆用（点关于点对称）、点到直线距离的最值意义</p>
              </div>
            </div>

            <PageBreak label="实战大题（续）" />

            {/* ── 大题4 ── */}
            <div className="border border-amber-300 rounded overflow-hidden text-[0.93rem]">
              <div className="px-3 py-1 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1 space-y-0">
                    <p className="font-bold">大题4：已知直线 <MathTex tex="l_1{:}\; 2x - y + 4 = 0" />，<MathTex tex="l_2{:}\; x + 3y - 5 = 0" />，<MathTex tex="l_3{:}\; x - 2y + 1 = 0" /></p>
                    <p className="ml-4">（1）求 <MathTex tex="l_1" /> 与 <MathTex tex="l_2" /> 的交点 <MathTex tex="P" /></p>
                    <p className="ml-4">（2）求过点 <MathTex tex="P" /> 且与 <MathTex tex="l_3" /> 平行的直线方程</p>
                    <p className="ml-4">（3）求过点 <MathTex tex="P" /> 且与 <MathTex tex="l_3" /> 垂直的直线方程</p>
                    <p className="ml-4">（4）不求交点，利用直线系方程求过 <MathTex tex="l_1" /> 与 <MathTex tex="l_2" /> 的交点且斜率为 <MathTex tex="1" /> 的直线方程</p>

                    <p className="mt-1"><strong>（1）求交点 <MathTex tex="P" /></strong></p>
                  </div>
                  <DebugGeo2dSvg data={threeLinesDiagram} width={170} height={140} className="flex-shrink-0" />
                </div>
                <p className="ml-4"><strong>第一步：</strong>联立方程组 <MathTex tex="\begin{cases} 2x - y + 4 = 0 \quad \text{①} \\ x + 3y - 5 = 0 \quad \text{②} \end{cases}" />，由 ① 得 <MathTex tex="y = 2x + 4" />，代入 ②：<MathTex tex="x + 3(2x + 4) - 5 = 0" /></p>
                <p className="ml-8">展开整理：<MathTex tex="x + 6x + 12 - 5 = 0" />，即 <MathTex tex="7x + 7 = 0" />，解得 <MathTex tex="x = -1" /></p>
                <p className="ml-4"><strong>第二步：</strong>将 <MathTex tex="x = -1" /> 代入 ① 得 <MathTex tex="y = 2 \times (-1) + 4 = 2" />，所以交点 <MathTex tex="P(-1,\, 2)" /></p>

                <p className="mt-1"><strong>（2）求过 <MathTex tex="P" /> 且平行于 <MathTex tex="l_3" /> 的直线</strong></p>
                <p className="ml-4"><strong>第一步：</strong>平行于 <MathTex tex="l_3" />，由平行条件 <MathTex tex="\dfrac{A_1}{A_2} = \dfrac{B_1}{B_2} \neq \dfrac{C_1}{C_2}" />，设所求直线 <MathTex tex="l_4{:}\; x - 2y + C = 0" />（<MathTex tex="C \neq 1" />）</p>
                <p className="ml-4"><strong>第二步：</strong>因为直线过点 <MathTex tex="P" />，将 <MathTex tex="P(-1,\, 2)" /> 代入：<MathTex tex="-1 - 2 \times 2 + C = 0" />，解得 <MathTex tex="C = 5" /></p>
                <p className="ml-4 bg-gray-100 rounded px-2 py-0.5">将 <MathTex tex="C" /> 代回 <MathTex tex="l_4" /> 得方程为 <MathTex tex="x - 2y + 5 = 0" /></p>

                <p className="mt-1"><strong>（3）求过 <MathTex tex="P" /> 且垂直于 <MathTex tex="l_3" /> 的直线</strong></p>
                <p className="ml-4"><strong>第一步：</strong>垂直于 <MathTex tex="l_3" />，<MathTex tex="l_3" /> 中 <MathTex tex="A_1 = 1" />，<MathTex tex="B_1 = -2" />，由垂直条件 <MathTex tex="A_1 A_2 + B_1 B_2 = 0" /></p>
                <p className="ml-8">代入得 <MathTex tex="1 \times A_2 + (-2) \times B_2 = 0" />（<MathTex tex="A_2" />、<MathTex tex="B_2" /> 可任取，只需满足此条件，这里取 <MathTex tex="A_2 = 2" />，<MathTex tex="B_2 = 1" />）</p>
                <p className="ml-4"><strong>第二步：</strong>设所求直线 <MathTex tex="l_5{:}\; 2x + y + C = 0" /></p>
                <p className="ml-8">因为直线过点 <MathTex tex="P" />，将 <MathTex tex="P(-1,\, 2)" /> 代入得 <MathTex tex="2 \times (-1) + 2 + C = 0" />，解得 <MathTex tex="C = 0" /></p>
                <p className="ml-4 bg-gray-100 rounded px-2 py-0.5">将 <MathTex tex="C" /> 代回 <MathTex tex="l_5" /> 得方程为 <MathTex tex="2x + y = 0" /></p>

                <p className="mt-1"><strong>（4）用直线系方程求过交点且斜率为 <MathTex tex="1" /> 的直线</strong></p>
                <p className="ml-4"><strong>第一步：</strong>设直线系方程 <MathTex tex="(2x - y + 4) + \lambda(x + 3y - 5) = 0" /></p>
                <p className="ml-4"><strong>第二步：</strong>整理得 <MathTex tex="(2{+}\lambda)x + ({-}1{+}3\lambda)y + (4{-}5\lambda) = 0" /></p>
                <p className="ml-4"><strong>第三步：</strong>由斜率公式 <MathTex tex="k = -\dfrac{A}{B}" />，去分母得 <MathTex tex="A + kB = 0" />，令 <MathTex tex="k = 1" />，将 <MathTex tex="A = 2{+}\lambda" />，<MathTex tex="B = {-}1{+}3\lambda" /></p>
                <p className="ml-8 bg-gray-100 rounded px-2 py-0.5">代入得 <MathTex tex="(2+\lambda) + (-1+3\lambda) = 0" />，即 <MathTex tex="1+4\lambda = 0" />，解得 <MathTex tex="\lambda = -\dfrac{1}{4}" /></p>
                <p className="ml-4"><strong>第四步：</strong>将 <MathTex tex="\lambda = -\dfrac{1}{4}" /> 代入直线系方程，整理得 <MathTex tex="\dfrac{7}{4}x - \dfrac{7}{4}y + \dfrac{21}{4} = 0" /></p>
                <p className="ml-8">同除 <MathTex tex="\dfrac{7}{4}" />，得所求直线方程为 <MathTex tex="x - y + 3 = 0" /></p>

                <p className="mt-1 font-bold">答：（1）<MathTex tex="P(-1,\, 2)" />（2）<MathTex tex="x - 2y + 5 = 0" />（3）<MathTex tex="2x + y = 0" />（4）<MathTex tex="x - y + 3 = 0" /></p>
                <p className="mt-1 text-gray-500">【考点】联立方程组求交点、平行线系方程、垂直条件、直线系方程</p>
              </div>
            </div>

            {/* ── 大题5 ── */}
            <div className="border border-amber-300 rounded overflow-hidden text-[0.93rem]">
              <div className="px-3 py-1 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1 space-y-0">
                    <p className="font-bold">大题5：已知直线 <MathTex tex="l{:}\; mx - y - m + 3 = 0" />（<MathTex tex="m" /> 为参数）</p>
                    <p className="ml-4">（1）证明：不论 <MathTex tex="m" /> 取何值，直线 <MathTex tex="l" /> 恒过一个定点 <MathTex tex="P" />，并求 <MathTex tex="P" /> 的坐标</p>
                    <p className="ml-4">（2）当直线 <MathTex tex="l" /> 与 <MathTex tex="x" /> 轴正半轴、<MathTex tex="y" /> 轴正半轴分别交于 <MathTex tex="A" />、<MathTex tex="B" /> 两点时，求 <MathTex tex="\triangle AOB" /> 面积的最小值</p>
                    <p className="mt-1"><strong>（1）证明过定点</strong></p>
                    <p className="ml-4">将方程按 <MathTex tex="m" /> 整理：<MathTex tex="(x - 1)\,m - (y - 3) = 0" />，即 <MathTex tex="(x - 1)\,m = y - 3" /></p>
                  </div>
                  <DebugGeo2dSvg data={fixedPointAreaDiagram} width={175} height={150} className="flex-shrink-0" />
                </div>
                <p className="ml-4">设点 <MathTex tex="P(x,\,y)" /> 在直线上，无论 <MathTex tex="m" /> 取何值都成立，当且仅当系数 <MathTex tex="x - 1" /> 和常数项 <MathTex tex="-(y - 3)" /> 同时为零时，</p>
                <p className="ml-4 bg-gray-100 rounded px-2 py-0.5">等式对任意 <MathTex tex="m" /> 恒成立：<MathTex tex="\begin{cases} x - 1 = 0 \\ y - 3 = 0 \end{cases}" />，解得 <MathTex tex="(x,\,y) = (1,\,3)" /></p>
                <p className="ml-4">代回原方程验证：<MathTex tex="m(1-1)-(3-3) = 0" /> 恒成立，所以不管 <MathTex tex="m" /> 取何值，<MathTex tex="P(1,\,3)" /> 都在直线上</p>

                <p className="mt-1"><strong>（2）求 <MathTex tex="\triangle AOB" /> 面积最小值</strong></p>
                <p className="ml-4">因为直线与 <MathTex tex="x" /> 轴正半轴、<MathTex tex="y" /> 轴正半轴分别交于 <MathTex tex="A" />、<MathTex tex="B" />，设 <MathTex tex="A(a,\,0)" />，<MathTex tex="B(0,\,b)" />，其中 <MathTex tex="a > 0" />，<MathTex tex="b > 0" /></p>
                <p className="ml-4">直线用截距式表示：<MathTex tex="\dfrac{x}{a} + \dfrac{y}{b} = 1" />，由（1）知直线恒过 <MathTex tex="P(1,\,3)" />，代入得 <MathTex tex="\dfrac{1}{a} + \dfrac{3}{b} = 1" /></p>
                <p className="ml-4">三角形面积 <MathTex tex="S = \dfrac{1}{2}\,ab" />，目标：在 <MathTex tex="\dfrac{1}{a} + \dfrac{3}{b} = 1" /> 下求 <MathTex tex="\dfrac{1}{2}\,ab" /> 的最小值</p>
                <p className="ml-4">由均值不等式（<MathTex tex="a + b \geqslant 2\sqrt{ab}" />），得 <MathTex tex="1 = \dfrac{1}{a} + \dfrac{3}{b} \geqslant 2\sqrt{\dfrac{1}{a} \cdot \dfrac{3}{b}} = 2\sqrt{\dfrac{3}{ab}}" /></p>
                <p className="ml-4">化简可得 <MathTex tex="1 \geqslant 2\sqrt{\dfrac{3}{ab}}" />，两边平方得 <MathTex tex="1 \geqslant \dfrac{12}{ab}" />，两边同乘 <MathTex tex="ab" /> 得 <MathTex tex="ab \geqslant 12" /></p>
                <p className="ml-4 bg-gray-100 rounded px-2 py-0.5">所以 <MathTex tex="S = \dfrac{1}{2}\,ab \geqslant 6" />，由「一正二定三相等」当 <MathTex tex="\dfrac{1}{a} = \dfrac{3}{b}" /> 取等，</p>
                <p className="ml-4">即 <MathTex tex="b = 3a" />，代入 <MathTex tex="\dfrac{1}{a} + \dfrac{3}{3a} = 1" /> 得 <MathTex tex="a = 2" />，<MathTex tex="b = 6" /></p>
                <p className="ml-4 bg-gray-100 rounded px-2 py-0.5">所以 <MathTex tex="S_{\min} = \dfrac{1}{2} \times 2 \times 6 = 6" /></p>

              </div>
            </div>

            {/* ── 大题6 ── */}
            <div className="border border-amber-300 rounded overflow-hidden text-[0.93rem]">
              <div className="px-3 py-1 space-y-0">
                <p className="font-bold">大题6：已知直线 <MathTex tex="l_1{:}\; 3x - y - 1 = 0" />，<MathTex tex="l_2{:}\; x - 2y + 3 = 0" /> 交于点 <MathTex tex="P" />，直线 <MathTex tex="l_3{:}\; x + y - 6 = 0" /></p>
                <p className="ml-4">（1）求 <MathTex tex="l_1" /> 与 <MathTex tex="l_2" /> 的夹角 <MathTex tex="\theta" /></p>
                <p className="ml-4">（2）求点 <MathTex tex="P" /> 关于直线 <MathTex tex="l_3" /> 的对称点 <MathTex tex="P_1" /> 的坐标</p>
                <p className="ml-4">（3）过点 <MathTex tex="P" /> 作直线 <MathTex tex="l_4 \parallel l_3" />，求 <MathTex tex="l_3" /> 与 <MathTex tex="l_4" /> 之间的距离</p>
                <p className="ml-4">（4）求过点 <MathTex tex="P_1" /> 且与 <MathTex tex="l_1" /> 夹角为 <MathTex tex="45°" /> 的直线方程</p>

                <p className="mt-1"><strong>先求交点 <MathTex tex="P" /></strong></p>
                <p className="ml-4">联立 <MathTex tex="\begin{cases} 3x - y - 1 = 0 \quad① \\ x - 2y + 3 = 0 \quad② \end{cases}" />，由②得 <MathTex tex="x = 2y - 3" />，代入①得 <MathTex tex="3(2y-3) - y - 1 = 0" /> </p>
                <p className="ml-4">解得 <MathTex tex="y = 2" />，<MathTex tex="x = 1" />，所以 <MathTex tex="P(1,\,2)" /></p>

                <p className="mt-1"><strong>（1）求夹角 <MathTex tex="\theta" /></strong></p>
                <p className="ml-4">由 <MathTex tex="l_1" /> 得 <MathTex tex="y = 3x - 1" />，所以 <MathTex tex="k_1 = 3" />；由 <MathTex tex="l_2" /> 得 <MathTex tex="y = \dfrac{1}{2}x + \dfrac{3}{2}" />，所以 <MathTex tex="k_2 = \dfrac{1}{2}" /></p>
                <p className="ml-4">代入夹角公式：<MathTex tex="\tan\theta = \left|\dfrac{k_1 - k_2}{1 + k_1 k_2}\right| = \left|\dfrac{3 - \frac{1}{2}}{1 + 3 \times \frac{1}{2}}\right| = \left|\dfrac{\frac{5}{2}}{\frac{5}{2}}\right| = 1" /></p>
                <p className="ml-4 bg-gray-100 rounded px-2 py-0.5">因为 <MathTex tex="\tan 45° = 1" />，所以 <MathTex tex="\theta = 45°" /></p>

                <div className="flex items-start gap-3 mt-1">
                  <div className="flex-1 space-y-0">
                    <p><strong>（2）求对称点 <MathTex tex="P_1" /></strong></p>
                    <p className="ml-4">设 <MathTex tex="P_1(a,\,b)" />，由 <MathTex tex="l_3{:}\; x + y - 6 = 0" /> 得 <MathTex tex="y = -x + 6" />，所以 <MathTex tex="k_{l_3} = -1" /></p>
                    <p className="ml-4">对称轴 <MathTex tex="l_3" /> 是 <MathTex tex="PP_1" /> 的中垂线（垂直平分线），所以同时满足两个条件：</p>
                    <p className="ml-4"><strong>条件1（垂直）：</strong><MathTex tex="PP_1" /> 与 <MathTex tex="l_3" /> 垂直，所以 <MathTex tex="k_{PP_1} \times k_{l_3} = -1" />，代入 <MathTex tex="k_{l_3} = -1" /></p>
                    <p className="ml-8">得 <MathTex tex="k_{PP_1} = 1" />，由斜率公式 <MathTex tex="\dfrac{b - 2}{a - 1} = 1" />，交叉相乘得 <MathTex tex="a - b + 1 = 0" /> ①</p>
                  </div>
                  <DebugGeo2dSvg data={symmetryEx6Diagram} width={175} height={150} className="flex-shrink-0" />
                </div>
                <p className="ml-4"><strong>条件2（中点在 <MathTex tex="l_3" /> 上）：</strong></p>
                <p className="ml-8"><MathTex tex="P" /> 和 <MathTex tex="P_1" /> 的中点 <MathTex tex="M\!\left(\dfrac{1 + a}{2},\;\dfrac{2 + b}{2}\right)" /> 在 <MathTex tex="l_3" /> 上，代入得 <MathTex tex="\dfrac{1 + a}{2} + \dfrac{2 + b}{2} - 6 = 0" />，化简得 <MathTex tex="a + b = 9" /> ②</p>
                <p className="ml-4"><strong>联立 ①②：</strong>① + ② 得 <MathTex tex="2a = 10" />，<MathTex tex="a = 5" />，<MathTex tex="b = 4" /></p>
                <p className="ml-4 bg-gray-100 rounded px-2 py-0.5">所以对称点 <MathTex tex="P_1(5,\,4)" /></p>

                <p className="mt-1"><strong>（3）求 <MathTex tex="l_3" /> 与 <MathTex tex="l_4" /> 的距离</strong></p>
                <p className="ml-4"><strong>先求 <MathTex tex="l_4" /> 方程：</strong><MathTex tex="l_4 \parallel l_3" />，<MathTex tex="A" />、<MathTex tex="B" /> 相同，设 <MathTex tex="l_4{:}\; x + y + C = 0" /></p>
                <p className="ml-8">将 <MathTex tex="P(1,\,2)" /> 代入得 <MathTex tex="1 + 2 + C = 0" />，解得 <MathTex tex="C = -3" />，所以 <MathTex tex="l_4{:}\; x + y - 3 = 0" /></p>
                <p className="ml-4"><strong>列出系数：</strong><MathTex tex="l_3{:}\; A = 1,\; B = 1,\; C_1 = -6" />；<MathTex tex="l_4{:}\; C_2 = -3" /></p>
                <p className="ml-4 bg-gray-100 rounded px-2 py-0.5">代入公式：<MathTex tex="d = \dfrac{|C_1 - C_2|}{\sqrt{A^2 + B^2}} = \dfrac{|-6 - (-3)|}{\sqrt{1^2 + 1^2}} = \dfrac{3}{\sqrt{2}} = \dfrac{3\sqrt{2}}{2}" /></p>

                <p className="mt-1"><strong>（4）求过 <MathTex tex="P_1" /> 且与 <MathTex tex="l_1" /> 夹角为 <MathTex tex="45°" /> 的直线方程</strong></p>
                <p className="ml-4">由第(2)问得 <MathTex tex="P_1(5,\,4)" />，由第(1)问得 <MathTex tex="k_1 = 3" /></p>
                <p className="ml-4">设所求直线斜率为 <MathTex tex="k" />，由夹角公式 <MathTex tex="\tan 45° = \left|\dfrac{k - k_1}{1 + k \cdot k_1}\right| = 1" />，即 <MathTex tex="\left|\dfrac{k - 3}{1 + 3k}\right| = 1" />，去绝对值分两种情况：</p>
                <p className="ml-4"><strong>情况1：</strong><MathTex tex="\dfrac{k - 3}{1 + 3k} = 1" />，得 <MathTex tex="k - 3 = 1 + 3k" />，解得 <MathTex tex="k = -2" /></p>
                <p className="ml-8 bg-gray-100 rounded px-2 py-0.5">过 <MathTex tex="P_1(5,\,4)" />：<MathTex tex="y - 4 = -2(x - 5)" />，即 <MathTex tex="2x + y - 14 = 0" /></p>
                <p className="ml-4"><strong>情况2：</strong><MathTex tex="\dfrac{k - 3}{1 + 3k} = -1" />，得 <MathTex tex="k - 3 = -(1 + 3k)" />，解得 <MathTex tex="k = \dfrac{1}{2}" /></p>
                <p className="ml-8 bg-gray-100 rounded px-2 py-0.5">过 <MathTex tex="P_1(5,\,4)" />：<MathTex tex="y - 4 = \dfrac{1}{2}(x - 5)" />，即 <MathTex tex="x - 2y + 3 = 0" />（恰好就是 <MathTex tex="l_2" />）</p>
                <p className="ml-4">所以满足条件的直线为 <MathTex tex="2x + y - 14 = 0" /> 或 <MathTex tex="x - 2y + 3 = 0" /></p>
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
