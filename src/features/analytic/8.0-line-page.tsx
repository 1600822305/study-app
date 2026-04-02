import { Math as MathTex, Collapsible, PageHeader, LessonLayout, ExportButton, PageBreak, PracticeCard, DebugGeo2dSvg, Geo2dDebugToggle } from '@/components/shared';
import { lineProgressItems } from './data/8.0/8.0-line-progress';
import { inclinationAngleDiagram, slopeMeaningDiagram, slopeDirectionsDiagram, slopeInterceptDiagram, interceptMeaningDiagram, parallelPerpDiagram, lineAngleDiagram, symmetryPointDiagram, interceptCase1Diagram, interceptCase2Diagram, triangleABCDiagram, threeLinesDiagram, symmetryExDiagram } from './data/8.0/8.0-line-diagrams';
import { lineRelationPractice } from './data/8.0/8.0-line-questions';
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
                  <p>想象你站在直线与 <MathTex tex="x" /> 轴的交点处，<strong>面朝右</strong>（就是 <MathTex tex="x" /> 轴向右的方向）</p>
                  <p>然后<strong>逆时针转</strong>，转到直线往上走的那个方向为止，转过的角 <MathTex tex="\alpha" /> 就是<strong>倾斜角</strong></p>
                  <p>特别地，当直线 <MathTex tex="l" /> 与 <MathTex tex="x" /> 轴平行或重合时，规定 <MathTex tex="\alpha = 0°" /></p>
                  <p className="font-bold text-blue-700">范围：<MathTex tex="\alpha \in [0°, 180°)" />。当 <MathTex tex="l" /> 与 <MathTex tex="x" /> 轴垂直时，<MathTex tex="\alpha = 90°" /></p>
                </div>
                <DebugGeo2dSvg data={inclinationAngleDiagram} width={200} height={145} className="flex-shrink-0" />
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
                <p>已知两点 <MathTex tex="A(x_1, y_1)" />、<MathTex tex="B(x_2, y_2)" />，斜率计算公式：</p>
                <div className="bg-green-50 rounded px-1 py-0 border border-green-200 text-center">
                  <MathTex tex="k = \dfrac{y_2 - y_1}{x_2 - x_1} \quad (x_1 \neq x_2)" />
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
              <div className="px-3 py-2 space-y-0">
                <p className="font-bold">【实战】已知 <MathTex tex="A(2, 1)" />，<MathTex tex="B(-1, 4)" />，<MathTex tex="C(5, -2)" />，求 <MathTex tex="AB" /> 的斜率、倾斜角，并判断 <MathTex tex="A" />、<MathTex tex="B" />、<MathTex tex="C" /> 是否共线</p>
                <p><MathTex tex="k_{AB} = \dfrac{4 - 1}{-1 - 2} = \dfrac{3}{-3} = -1" /></p>
                <p>由 <MathTex tex="\tan\alpha = -1" /> 且 <MathTex tex="\alpha \in [0°, 180°)" />，因为 <MathTex tex="\tan 45° = 1" />，负值在第二象限：<MathTex tex="\alpha = 180° - 45° = 135°" /></p>
                <p><MathTex tex="k_{AC} = \dfrac{-2 - 1}{5 - 2} = \dfrac{-3}{3} = -1" /></p>
                <p>因为 <MathTex tex="k_{AB} = k_{AC} = -1" /> 且共享点 <MathTex tex="A" />，所以 <MathTex tex="A" />、<MathTex tex="B" />、<MathTex tex="C" /> 三点共线</p>
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
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-1.5 py-2.5 font-bold whitespace-nowrap">点斜式</td>
                      <td className="border border-gray-300 px-1.5 py-2.5 text-center whitespace-nowrap"><MathTex tex="y - y_1 = k(x - x_1)" /></td>
                      <td className="border border-gray-300 px-1.5 py-2.5"><MathTex tex="(x_1, y_1)" /> 为直线上一定点<br /><MathTex tex="k" /> 为斜率</td>
                      <td className="border border-gray-300 px-1.5 py-2.5">不包括垂直于 <MathTex tex="x" /> 轴的直线</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-1.5 py-2.5 font-bold whitespace-nowrap">斜截式</td>
                      <td className="border border-gray-300 px-1.5 py-2.5 text-center whitespace-nowrap"><MathTex tex="y = kx + b" /></td>
                      <td className="border border-gray-300 px-1.5 py-2.5"><MathTex tex="k" /> 为斜率<br /><MathTex tex="b" /> 是直线在 <MathTex tex="y" /> 轴上的截距</td>
                      <td className="border border-gray-300 px-1.5 py-2.5">不包括垂直于 <MathTex tex="x" /> 轴的直线</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-1.5 py-2.5 font-bold whitespace-nowrap">两点式</td>
                      <td className="border border-gray-300 px-1.5 py-2.5 text-center"><MathTex tex="\dfrac{y - y_1}{y_2 - y_1} = \dfrac{x - x_1}{x_2 - x_1}" /></td>
                      <td className="border border-gray-300 px-1.5 py-2.5">经过两点 <MathTex tex="(x_1,y_1)" />，<MathTex tex="(x_2,y_2)" /><br />且 <MathTex tex="x_1 \neq x_2,\,y_1 \neq y_2" /></td>
                      <td className="border border-gray-300 px-1.5 py-2.5">不包括垂直于 <MathTex tex="x" /> 轴和 <MathTex tex="y" /> 轴的直线</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-1.5 py-2.5 font-bold whitespace-nowrap">截距式</td>
                      <td className="border border-gray-300 px-1.5 py-2.5 text-center whitespace-nowrap"><MathTex tex="\dfrac{x}{a} + \dfrac{y}{b} = 1" /></td>
                      <td className="border border-gray-300 px-1.5 py-2.5"><MathTex tex="a" /> 是直线在 <MathTex tex="x" /> 轴上的非零截距<br /><MathTex tex="b" /> 是直线在 <MathTex tex="y" /> 轴上的非零截距</td>
                      <td className="border border-gray-300 px-1.5 py-2.5">不包括垂直于 <MathTex tex="x" /> 轴和 <MathTex tex="y" /> 轴或原点的直线</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="border border-gray-300 px-1.5 py-2.5 font-bold whitespace-nowrap">一般式</td>
                      <td className="border border-gray-300 px-1.5 py-2.5 text-center"><MathTex tex="Ax + By + C = 0" /><br /><MathTex tex="(A^2 + B^2 \neq 0)" /></td>
                      <td className="border border-gray-300 px-1.5 py-2.5"><MathTex tex="A,B,C" /> 为系数</td>
                      <td className="border border-gray-300 px-1.5 py-2.5 text-green-700 font-bold">无限制，可表示任何位置的直线</td>
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
                    <p className="font-bold mt-1">例：求斜率为 <MathTex tex="2" />，且过点 <MathTex tex="(0, -3)" /> 的直线方程</p>
                    <p>解：过的点在 <MathTex tex="y" /> 轴上，所以 <MathTex tex="b = -3" />，代入斜截式得 <MathTex tex="y = 2x - 3" /></p>
                    <hr className="border-gray-300" />
                    <p className="font-bold mt-1">注意：斜截式用了 <MathTex tex="k" />，所以<strong>必须有斜率才行</strong>。回忆上一节：竖直线的倾斜角是 <MathTex tex="90°" />，斜率不存在，所以竖直线（如 <MathTex tex="x = 2" />）没法写成 <MathTex tex="y = kx + b" /> 的形式</p>
                  </div>
                  <DebugGeo2dSvg data={slopeInterceptDiagram} width={220} height={170} className="flex-shrink-0" />
                </div>
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
                <p className="mt-1">其实<strong>斜截式就是点斜式的特例</strong>：取点 <MathTex tex="(0, b)" /> 代入点斜式，就得到 <MathTex tex="y - b = k(x - 0)" />，即 <MathTex tex="y = kx + b" /></p>
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
                <p className="font-bold mt-1">例：求过 <MathTex tex="A(1, 2)" /> 和 <MathTex tex="B(4, 8)" /> 两点的直线方程</p>
                <p>解：代入两点式：<MathTex tex="\dfrac{y - 2}{8 - 2} = \dfrac{x - 1}{4 - 1}" />，即 <MathTex tex="\dfrac{y - 2}{6} = \dfrac{x - 1}{3}" /></p>
                <p>交叉相乘：<MathTex tex="3(y - 2) = 6(x - 1)" />，化简得 <MathTex tex="y = 2x" /></p>
                <hr className="border-gray-300" />
                <p className="font-bold mt-1">注意：如果两点的 <MathTex tex="x" /> 坐标相同（竖直线），分母 <MathTex tex="x_2 - x_1 = 0" />；<MathTex tex="y" /> 坐标相同（水平线），分母 <MathTex tex="y_2 - y_1 = 0" />。分母为零没法算，所以<strong>竖直线和水平线都不能用两点式</strong></p>
              </div>
            </div>

            {/* ── ④ 截距式 ── */}
            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">④ 截距式</div>
              <div className="px-3 py-1">
                <div className="flex items-start gap-4">
                  <div className="flex-1 space-y-0">
                    <p>如果两个点恰好分别在 <MathTex tex="x" /> 轴和 <MathTex tex="y" /> 轴上呢？</p>
                    <p>直线与 <MathTex tex="x" /> 轴的交点 <MathTex tex="(a, 0)" />，<MathTex tex="a" /> 叫 <MathTex tex="x" /> 轴<strong>截距</strong></p>
                    <p>直线与 <MathTex tex="y" /> 轴的交点 <MathTex tex="(0, b)" />，<MathTex tex="b" /> 叫 <MathTex tex="y" /> 轴<strong>截距</strong></p>
                    <p>把这两个点代入两点式，化简就得到<strong>截距式</strong>：</p>
                    <div className="text-center my-1">
                      <MathTex tex="\boxed{\,\dfrac{x}{a} + \dfrac{y}{b} = 1 \quad (a \neq 0,\, b \neq 0)\,}" />
                    </div>
                    <p className="font-bold">易错：截距不是距离！</p>
                    <p>截距是<strong>坐标值</strong>，可以是负数。比如直线过 <MathTex tex="(-2, 0)" />，那 <MathTex tex="x" /> 轴截距 <MathTex tex="a = -2" /></p>
                  </div>
                  <DebugGeo2dSvg data={interceptMeaningDiagram} width={220} height={170} className="flex-shrink-0" />
                </div>
                <p className="font-bold mt-1">例：求在 <MathTex tex="x" /> 轴上截距为 <MathTex tex="3" />，在 <MathTex tex="y" /> 轴上截距为 <MathTex tex="2" /> 的直线方程</p>
                <p>解：<MathTex tex="a = 3" />，<MathTex tex="b = 2" />，代入截距式：<MathTex tex="\dfrac{x}{3} + \dfrac{y}{2} = 1" />，通分化简得 <MathTex tex="2x + 3y - 6 = 0" /></p>
                <hr className="border-gray-300" />
                <p className="font-bold mt-1">注意：如果直线过原点，两个截距都是 <MathTex tex="0" />，代入公式分母为零，没法用。竖直线和水平线同理。所以<strong>过原点、竖直、水平的直线都不能用截距式</strong></p>
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


                <p className="font-bold mt-2">例：从 <MathTex tex="2x - y + 1 = 0" /> 读出信息（<MathTex tex="A=2,\,B=-1,\,C=1" />）</p>
                <p>斜率：<MathTex tex="k = -\dfrac{A}{B} = -\dfrac{2}{-1} = 2" /></p>
                <div className="flex gap-6">
                  <p><MathTex tex="x" /> 轴截距：令 <MathTex tex="y = 0" />，代入原式得 <MathTex tex="x = -\dfrac{1}{2}" /></p>
                  <p><MathTex tex="y" /> 轴截距：令 <MathTex tex="x = 0" />，代入原式得 <MathTex tex="y = 1" /></p>
                </div>

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
                  <DebugGeo2dSvg data={parallelPerpDiagram} width={200} height={120} className="flex-shrink-0" />
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
                <p>解：联立方程组 <MathTex tex="\begin{cases} 2x + y = 4 \\ x - y = -1 \end{cases}" /></p>
                <p>两式相加消去 <MathTex tex="y" />：<MathTex tex="(2x + y) + (x - y) = 4 + (-1)" />，得 <MathTex tex="3x = 3" />，解得 <MathTex tex="x = 1" /></p>
                <p>把 <MathTex tex="x = 1" /> 代回第二个方程：<MathTex tex="1 - y = -1" />，解得 <MathTex tex="y = 2" /></p>
                <p>交点为 <MathTex tex="(1, 2)" /></p>
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
                      <td className="border border-gray-300 px-2 py-2"><MathTex tex="Ax + By + C_0 = 0" /></td>
                      <td className="border border-gray-300 px-2 py-2"><MathTex tex="C \neq C_0" /></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-2 whitespace-nowrap">垂直于 <MathTex tex="Ax + By + C = 0" /></td>
                      <td className="border border-gray-300 px-2 py-2"><MathTex tex="Bx - Ay + C_0 = 0" /></td>
                      <td className="border border-gray-300 px-2 py-2"></td>
                    </tr>
                  </tbody>
                </table>
                <div className="px-1 py-1 space-y-1">
                  <p>过两条已知直线 <MathTex tex="l_1{:}\; A_1x + B_1y + C_1 = 0" /> 和 <MathTex tex="l_2{:}\; A_2x + B_2y + C_2 = 0" /> 交点的直线系方程：</p>
                  <p><MathTex tex="A_1x + B_1y + C_1 + \lambda(A_2x + B_2y + C_2) = 0" /></p>
                  <p>（<MathTex tex="\lambda \in \mathbb{R}" />，此直线系不包括 <MathTex tex="l_2" />，解题时注意检验 <MathTex tex="l_2" /> 是否满足题意）</p>
                </div>
              </div>
            </div>

            <PageBreak label="实战练习 & 即时训练" />

            {/* ── 实战练习 ── */}
            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">实战练习</div>
              <div className="px-3 py-1 space-y-0">
                <p className="font-bold">题1：已知直线 <MathTex tex="l_1{:}\; x + 2y - 1 = 0" />，求过点 <MathTex tex="(1, 3)" /> 且与 <MathTex tex="l_1" /> 平行的直线 <MathTex tex="l_2" /> 的方程</p>
                <p className="font-bold mt-1">分析：</p>
                <p>题目给了什么？一条已知直线 <MathTex tex="l_1" />，一个点 <MathTex tex="(1,3)" />，要求"平行"</p>
                <p>平行意味着什么？<MathTex tex="A" /> 和 <MathTex tex="B" /> 跟 <MathTex tex="l_1" /> 一样，只有 <MathTex tex="C" /> 不同</p>
                <p>还差什么？用"过点"这个条件把 <MathTex tex="C" /> 算出来</p>
                <p className="font-bold mt-1">解题：</p>
                <p>第一步：<MathTex tex="l_1" /> 的 <MathTex tex="A = 1,\, B = 2" />，平行线形式相同，设 <MathTex tex="l_2{:}\; x + 2y + C = 0" /></p>
                <p>第二步：把点 <MathTex tex="(1, 3)" /> 代入 <MathTex tex="l_2" />：<MathTex tex="1 + 2 \times 3 + C = 0" />，即 <MathTex tex="7 + C = 0" /></p>
                <p>第三步：解得 <MathTex tex="C = -7" />，所以 <MathTex tex="l_2{:}\; x + 2y - 7 = 0" /></p>
                <hr className="border-gray-300 mt-1" />
                <p className="font-bold mt-1">题2：已知直线 <MathTex tex="l_1{:}\; 2x - y + 3 = 0" />，求过点 <MathTex tex="(1, 1)" /> 且与 <MathTex tex="l_1" /> 垂直的直线 <MathTex tex="l_2" /> 的方程</p>
                <p className="font-bold mt-1">分析：</p>
                <p>题目要求"垂直"，垂直条件是 <MathTex tex="A_1 A_2 + B_1 B_2 = 0" /></p>
                <p><MathTex tex="l_1" /> 的 <MathTex tex="A_1 = 2,\, B_1 = -1" />，需要找 <MathTex tex="A_2,\, B_2" /> 使得 <MathTex tex="2A_2 + (-1)B_2 = 0" /></p>
                <p>技巧：把 <MathTex tex="A" /> 和 <MathTex tex="B" /> 互换，再变一个符号。<MathTex tex="l_1" /> 是 <MathTex tex="(2, -1)" />，垂直线取 <MathTex tex="(1, 2)" /></p>
                <p className="font-bold mt-1">解题：</p>
                <p>第一步：设 <MathTex tex="l_2{:}\; x + 2y + C = 0" /></p>
                <p>第二步：把点 <MathTex tex="(1, 1)" /> 代入：<MathTex tex="1 + 2 \times 1 + C = 0" />，即 <MathTex tex="3 + C = 0" /></p>
                <p>第三步：解得 <MathTex tex="C = -3" />，所以 <MathTex tex="l_2{:}\; x + 2y - 3 = 0" /></p>
              </div>
            </div>

            {/* 即时训练 */}
            <PracticeCard questions={lineRelationPractice} title="✏️ 即时训练 — 两直线位置关系（7 题）" optionCols={4} printOptionCols={4} />

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
              <p className="font-bold text-lg">① 两点间距离</p>
              <p>两点 <MathTex tex="A(x_1, y_1)" /> 和 <MathTex tex="B(x_2, y_2)" /> 之间的距离：</p>
              <p className="text-center my-1"><MathTex tex="|AB| = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}" /></p>
              <p>本质就是<strong>勾股定理</strong>：横向差的平方 + 纵向差的平方，再开根号</p>
              <hr className="border-gray-300 my-1" />
              <p className="font-bold text-lg">② 中点坐标公式</p>
              <p>线段 <MathTex tex="AB" /> 的中点 <MathTex tex="M" /> 的坐标：</p>
              <p className="text-center my-1"><MathTex tex="M\!\left(\dfrac{x_1 + x_2}{2},\; \dfrac{y_1 + y_2}{2}\right)" /></p>
              <p>就是两个端点的 <MathTex tex="x" /> 坐标取平均、<MathTex tex="y" /> 坐标取平均</p>
              <hr className="border-gray-300 my-1" />
              <p className="font-bold text-lg">③ 点到直线距离（必背）</p>
              <p>点 <MathTex tex="P(x_0, y_0)" /> 到直线 <MathTex tex="Ax + By + C = 0" /> 的距离：</p>
              <p className="text-center my-1"><MathTex tex="d = \dfrac{|Ax_0 + By_0 + C|}{\sqrt{A^2 + B^2}}" /></p>
              <p><strong>记忆：</strong>把点坐标代入直线方程左边，取绝对值，除以系数平方和的根号</p>
              <p><strong>注意：</strong>直线必须是一般式 <MathTex tex="Ax + By + C = 0" />，分子必须加绝对值</p>
              <hr className="border-gray-300 my-1" />
              <p className="font-bold text-lg">④ 两平行线间距离</p>
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
          <div className="space-y-2 text-lg text-gray-800">

            <div className="px-3 py-1 space-y-0">
              <p className="font-bold text-lg">① 两直线的夹角公式</p>
              <div className="flex items-start gap-3">
                <div className="flex-1 space-y-0">
                  <p>两条直线相交会形成四个角，其中<strong>锐角（或直角）</strong>称为两直线的夹角 <MathTex tex="\theta" /></p>
                  <p>已知两条直线的斜率 <MathTex tex="k_1" /> 和 <MathTex tex="k_2" />（且 <MathTex tex="k_1 k_2 \neq -1" />）：</p>
                  <p className="text-center my-1"><MathTex tex="\tan\theta = \left|\dfrac{k_1 - k_2}{1 + k_1 k_2}\right|" /></p>
                  <p><strong>注意：</strong>外面有绝对值，保证结果为正（取锐角）</p>
                  <p>若 <MathTex tex="k_1 k_2 = -1" />，两直线垂直，夹角为 <MathTex tex="90°" /></p>
                </div>
                <DebugGeo2dSvg data={lineAngleDiagram} width={160} height={120} className="flex-shrink-0" />
              </div>
              <hr className="border-gray-300 my-1" />
              <p className="font-bold text-lg">② 点关于直线的对称</p>
              <div className="flex items-start gap-3">
                <div className="flex-1 space-y-0">
                  <p>求点 <MathTex tex="A_1(x_0, y_0)" /> 关于直线 <MathTex tex="l{:}\; Ax + By + C = 0" /> 的对称点 <MathTex tex="A_2" />，</p>
                  <p>用两个条件：</p>
                  <p><strong>条件1：</strong><MathTex tex="A_1 A_2" /> 垂直于 <MathTex tex="l" />（斜率乘积 <MathTex tex="= -1" />）</p>
                  <p><strong>条件2：</strong><MathTex tex="A_1 A_2" /> 的中点在 <MathTex tex="l" /> 上（代入直线方程）</p>
                  <p>列出两个方程，解方程组即可求出 <MathTex tex="A_2" /></p>
                </div>
                <DebugGeo2dSvg data={symmetryPointDiagram} width={150} height={110} className="flex-shrink-0" />
              </div>
              <hr className="border-gray-300 my-1" />
              <p className="font-bold text-lg">③ 直线关于直线的对称</p>
              <p>求直线 <MathTex tex="l_1" /> 关于直线 <MathTex tex="l" /> 的对称直线 <MathTex tex="l_2" />：</p>
              <p><strong>方法：</strong>在 <MathTex tex="l_1" /> 上取两个点，分别求关于 <MathTex tex="l" /> 的对称点，再用两点式写出 <MathTex tex="l_2" /></p>
              <p><strong>技巧：</strong>如果 <MathTex tex="l_1" /> 和 <MathTex tex="l" /> 有交点，那个交点也在 <MathTex tex="l_2" /> 上，只需再找一个对称点即可</p>
            </div>

            {/* ── 典型例题 ── */}
            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-3 py-1 space-y-0">
                <p className="font-bold">例：求点 <MathTex tex="A_1(4, 1)" /> 关于直线 <MathTex tex="l{:}\; x - y + 1 = 0" /> 的对称点 <MathTex tex="A_2" /></p>
                <p>解：设对称点 <MathTex tex="A_2(a, b)" />。直线 <MathTex tex="l{:}\; x - y + 1 = 0" />，即 <MathTex tex="y = x + 1" />，所以 <MathTex tex="k_l = 1" /></p>
                <p className="mt-1"><strong>第一步（条件1）：用垂直条件列方程 ①</strong></p>
                <p className="ml-4">把 <MathTex tex="A_1" /> 和 <MathTex tex="A_2" /> 连成一条直线，这条直线与 <MathTex tex="l" /> 垂直</p>
                <p className="ml-4">垂直则 <MathTex tex="k_{A_1 A_2} \times k_l = -1" />，代入 <MathTex tex="k_l = 1" /> 得 <MathTex tex="k_{A_1 A_2} \times 1 = -1" />，所以 <MathTex tex="k_{A_1 A_2} = -1" /></p>
                <p className="ml-4">由斜率公式 <MathTex tex="k = \dfrac{y_2 - y_1}{x_2 - x_1}" />，将 <MathTex tex="A_1(4,1)" /> 和 <MathTex tex="A_2(a,b)" /> 代入得 <MathTex tex="\dfrac{b - 1}{a - 4} = -1" /></p>
                <p className="ml-4">交叉相乘：<MathTex tex="b - 1 = -(a - 4)" />，展开：<MathTex tex="b - 1 = -a + 4" />，移项得 <MathTex tex="a + b = 5" /> ①</p>
                <p className="mt-1"><strong>第二步（条件2）：用中点条件列方程 ②</strong></p>
                <p className="ml-4"><MathTex tex="A_1(4,1)" />，<MathTex tex="A_2(a,b)" />，中点 <MathTex tex="M\!\left(\dfrac{4 + a}{2},\; \dfrac{1 + b}{2}\right)" /></p>
                <p className="ml-4">因为 <MathTex tex="A_1" /> 和 <MathTex tex="A_2" /> 关于 <MathTex tex="l" /> 对称，所以中点 <MathTex tex="M" /> 一定在 <MathTex tex="l" /> 上</p>
                <p className="ml-4">将中点代入 <MathTex tex="x - y + 1 = 0" /> 得 <MathTex tex="\dfrac{4 + a}{2} - \dfrac{1 + b}{2} + 1 = 0" /></p>
                <p className="ml-4">化简得 <MathTex tex="a - b = -5" /> ②</p>
                <p className="mt-1"><strong>第三步：联立 ①② 解方程组</strong></p>
                <p className="ml-4"><MathTex tex="\begin{cases} a + b = 5 \quad \text{①} \\ a - b = -5 \quad \text{②} \end{cases}" /></p>
                <p className="ml-4">① + ②：<MathTex tex="2a = 0" />，得 <MathTex tex="a = 0" /></p>
                <p className="ml-4">代回 ①：<MathTex tex="0 + b = 5" />，得 <MathTex tex="b = 5" /></p>
                <p className="mt-1 font-bold">答：对称点 <MathTex tex="A_2(0,\, 5)" /></p>
              </div>
            </div>

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
            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-3 py-1 space-y-0">
                <p className="font-bold">大题1：已知直线 <MathTex tex="l" /> 过点 <MathTex tex="(1, 2)" />，且在 <MathTex tex="x" /> 轴和 <MathTex tex="y" /> 轴上的截距相等，求直线 <MathTex tex="l" /> 的方程</p>
                <p className="mt-1"><strong>分析：</strong>"截距相等"意味着 <MathTex tex="a = b" />，分两种情况：截距为零（过原点）和截距不为零</p>
                <div className="flex items-start gap-3 mt-1">
                  <div className="flex-1 space-y-0">
                    <p><strong>情况1：截距不为零</strong>（<MathTex tex="a = b \neq 0" />）</p>
                    <p className="ml-4">用截距式 <MathTex tex="\dfrac{x}{a} + \dfrac{y}{a} = 1" />，化简得 <MathTex tex="x + y = a" /></p>
                    <p className="ml-4">过点 <MathTex tex="(1,2)" />，代入得 <MathTex tex="1 + 2 = a" />，所以 <MathTex tex="a = 3" /></p>
                    <p className="ml-4">直线方程：<MathTex tex="x + y - 3 = 0" /></p>
                  </div>
                  <DebugGeo2dSvg data={interceptCase1Diagram} width={170} height={140} className="flex-shrink-0" />
                </div>
                <div className="flex items-start gap-3 mt-1">
                  <div className="flex-1 space-y-0">
                    <p><strong>情况2：截距为零</strong>（<MathTex tex="a = b = 0" />，即过原点）</p>
                    <p className="ml-4">截距式分母为零不能用，且已知两点，可用以下方式：</p>
                    <p className="ml-4"><strong>两点式：</strong>过 <MathTex tex="(0,0)" /> 和 <MathTex tex="(1,2)" />：<MathTex tex="\dfrac{y-0}{2-0} = \dfrac{x-0}{1-0}" />，化简得 <MathTex tex="y = 2x" /></p>
                    <p className="ml-4"><strong>点斜式：</strong>斜率 <MathTex tex="k = \dfrac{2-0}{1-0} = 2" />，公式 <MathTex tex="y - y_1 = k(x - x_1)" /></p>
                    <p className="ml-8">代入 <MathTex tex="(0,0)" />，得 <MathTex tex="y - 0 = 2(x - 0)" />，即 <MathTex tex="y = 2x" /></p>
                    <p className="ml-8">代入 <MathTex tex="(1,2)" />，得 <MathTex tex="y - 2 = 2(x - 1)" />，即 <MathTex tex="y = 2x" /></p>
                    <p className="ml-8 text-gray-500">（代入哪个点都可以，结果相同）</p>
                    <p className="ml-4">直线方程（一般式）：<MathTex tex="2x - y = 0" /></p>
                  </div>
                  <DebugGeo2dSvg data={interceptCase2Diagram} width={170} height={140} className="flex-shrink-0" />
                </div>
                <p className="mt-1 font-bold">答：<MathTex tex="x + y - 3 = 0" /> 或 <MathTex tex="2x - y = 0" /></p>
                <p className="mt-1 text-gray-500">【考点】截距式、分类讨论（截距为零的陷阱）、一般式</p>
              </div>
            </div>

            {/* ── 大题2 ── */}
            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-3 py-1 space-y-0">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <p className="font-bold">大题2：已知三角形 <MathTex tex="\triangle ABC" />，其中 <MathTex tex="A(1, 3)" />，<MathTex tex="B(-2, -1)" />，<MathTex tex="C(4, -1)" /></p>
                    <p className="ml-4">（1）求直线 <MathTex tex="BC" /> 的方程</p>
                    <p className="ml-4">（2）求点 <MathTex tex="A" /> 到直线 <MathTex tex="BC" /> 的距离（即 <MathTex tex="BC" /> 边上的高）</p>
                  </div>
                  <div className="w-[220px] shrink-0 flex justify-center">
                    <DebugGeo2dSvg data={triangleABCDiagram} width={210} height={170} />
                  </div>
                </div>

                <p className="mt-1"><strong>（1）求直线 BC 的方程</strong></p>
                <p className="ml-4">点斜式：斜率 <MathTex tex="k = \dfrac{-1-(-1)}{4-(-2)} = \dfrac{0}{6} = 0" />，公式 <MathTex tex="y - y_1 = k(x - x_1)" /></p>
                <p className="ml-8">代入 <MathTex tex="B(-2,-1)" />，得 <MathTex tex="y + 1 = 0 \cdot (x + 2)" />，即 <MathTex tex="y + 1 = 0" /></p>
                <p className="ml-4">直线方程（一般式）：<MathTex tex="y + 1 = 0" /></p>

                <p className="mt-1"><strong>（2）求 A 到 BC 的距离</strong></p>
                <p className="ml-4">由第（1）问得 <MathTex tex="BC" /> 的一般式为 <MathTex tex="0 \cdot x + 1 \cdot y + 1 = 0" /></p>
                <p className="ml-4">代入点到直线距离公式 <MathTex tex="d = \dfrac{|Ax_0 + By_0 + C|}{\sqrt{A^2 + B^2}}" /></p>
                <p className="ml-4">得 <MathTex tex="d = \dfrac{|0 \times 1 + 1 \times 3 + 1|}{\sqrt{0^2 + 1^2}} = \dfrac{4}{1} = 4" /></p>

                <p className="mt-1 font-bold">答：（1）<MathTex tex="y + 1 = 0" />（2）<MathTex tex="d = 4" /></p>
                <p className="mt-1 text-gray-500">【考点】两点确定直线、点到直线距离公式</p>
              </div>
            </div>

            <PageBreak label="实战大题（续）" />

            {/* ── 大题3 ── */}
            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-3 py-1 space-y-0">
                <p className="font-bold">大题3：已知直线 <MathTex tex="l_1{:}\; 2x - y + 4 = 0" />，<MathTex tex="l_2{:}\; x + 3y - 5 = 0" />，<MathTex tex="l_3{:}\; x - 2y + 1 = 0" /></p>
                <p className="ml-4">（1）求 <MathTex tex="l_1" /> 与 <MathTex tex="l_2" /> 的交点 <MathTex tex="P" /></p>
                <p className="ml-4">（2）求过点 <MathTex tex="P" /> 且与 <MathTex tex="l_3" /> 平行的直线方程</p>
                <p className="ml-4">（3）求过点 <MathTex tex="P" /> 且与 <MathTex tex="l_3" /> 垂直的直线方程</p>
                <p className="ml-4">（4）不求交点，利用直线系方程求过 <MathTex tex="l_1" /> 与 <MathTex tex="l_2" /> 的交点且斜率为 <MathTex tex="1" /> 的直线方程</p>

                <p className="mt-1"><strong>解：</strong></p>

                <div className="flex items-start gap-3">
                  <div className="flex-1 space-y-0">
                    <p className="mt-1"><strong>（1）求交点 <MathTex tex="P" /></strong></p>
                    <p className="ml-4"><strong>第一步：</strong>联立方程组 <MathTex tex="\begin{cases} 2x - y + 4 = 0 \quad \text{①} \\ x + 3y - 5 = 0 \quad \text{②} \end{cases}" /></p>
                    <p className="ml-4"><strong>第二步：</strong>由 ① 得 <MathTex tex="y = 2x + 4" />，代入 ②：</p>
                    <p className="ml-8"><MathTex tex="x + 3(2x + 4) - 5 = 0" /></p>
                    <p className="ml-8"><MathTex tex="x + 6x + 12 - 5 = 0" />，即 <MathTex tex="7x + 7 = 0" />，解得 <MathTex tex="x = -1" /></p>
                    <p className="ml-4"><strong>第三步：</strong>代回得 <MathTex tex="y = 2 \times (-1) + 4 = 2" /></p>
                    <p className="ml-4">所以交点 <MathTex tex="P(-1,\, 2)" /></p>
                  </div>
                  <DebugGeo2dSvg data={threeLinesDiagram} width={170} height={140} className="flex-shrink-0" />
                </div>

                <p className="mt-1"><strong>（2）求过 <MathTex tex="P" /> 且平行于 <MathTex tex="l_3" /> 的直线</strong></p>
                <p className="ml-4"><strong>第一步：</strong>因为所求直线平行于 <MathTex tex="l_3{:}\; x - 2y + 1 = 0" />，所以 <MathTex tex="A" /> 和 <MathTex tex="B" /> 相同</p>
                <p className="ml-4"><strong>第二步：</strong>设所求直线为 <MathTex tex="x - 2y + C = 0" />（其中 <MathTex tex="C \neq 1" />）</p>
                <p className="ml-4"><strong>第三步：</strong>将 <MathTex tex="P(-1,\, 2)" /> 代入：<MathTex tex="-1 - 2 \times 2 + C = 0" />，即 <MathTex tex="-5 + C = 0" /></p>
                <p className="ml-8">解得 <MathTex tex="C = 5" /></p>
                <p className="ml-4">所以所求直线方程为 <MathTex tex="x - 2y + 5 = 0" /></p>

                <p className="mt-1"><strong>（3）求过 <MathTex tex="P" /> 且垂直于 <MathTex tex="l_3" /> 的直线</strong></p>
                <p className="ml-4"><strong>第一步：</strong><MathTex tex="l_3{:}\; x - 2y + 1 = 0" />，其系数为 <MathTex tex="A_1 = 1" />，<MathTex tex="B_1 = -2" /></p>
                <p className="ml-4"><strong>第二步：</strong>由垂直条件 <MathTex tex="A_1 A_2 + B_1 B_2 = 0" />，即 <MathTex tex="1 \times A_2 + (-2) \times B_2 = 0" /></p>
                <p className="ml-8">技巧：把 <MathTex tex="A" /> 和 <MathTex tex="B" /> 互换，再把其中任意一个变号，就能满足垂直条件</p>
                <p className="ml-8">这里取 <MathTex tex="A_2 = 2" />，<MathTex tex="B_2 = 1" />（由 <MathTex tex="(-2,\,1)" /> 把 <MathTex tex="A" /> 变号得 <MathTex tex="(2,\,1)" />）</p>
                <p className="ml-4"><strong>第三步：</strong>设所求直线为 <MathTex tex="2x + y + C = 0" /></p>
                <p className="ml-4"><strong>第四步：</strong>将 <MathTex tex="P(-1,\, 2)" /> 代入：<MathTex tex="2 \times (-1) + 2 + C = 0" />，即 <MathTex tex="0 + C = 0" /></p>
                <p className="ml-8">解得 <MathTex tex="C = 0" /></p>
                <p className="ml-4">所以所求直线方程为 <MathTex tex="2x + y = 0" /></p>

                <p className="mt-1"><strong>（4）用直线系方程求过交点且斜率为 <MathTex tex="1" /> 的直线</strong></p>
                <p className="ml-4"><strong>第一步：</strong>设直线系方程 <MathTex tex="(2x - y + 4) + \lambda(x + 3y - 5) = 0" /></p>
                <p className="ml-4"><strong>第二步：</strong>整理得 <MathTex tex="(2{+}\lambda)x + ({-}1{+}3\lambda)y + (4{-}5\lambda) = 0" /></p>
                <p className="ml-4"><strong>第三步：</strong>由斜率公式 <MathTex tex="k = -\dfrac{A}{B}" />，令 <MathTex tex="k = 1" />，得 <MathTex tex="2 + \lambda = 1 - 3\lambda" /></p>
                <p className="ml-8">解得 <MathTex tex="4\lambda = -1" />，即 <MathTex tex="\lambda = -\dfrac{1}{4}" /></p>
                <p className="ml-4"><strong>第四步：</strong>将 <MathTex tex="\lambda = -\dfrac{1}{4}" /> 代入直线系方程，整理得 <MathTex tex="\dfrac{7}{4}x - \dfrac{7}{4}y + \dfrac{21}{4} = 0" /></p>
                <p className="ml-8">同除 <MathTex tex="\dfrac{7}{4}" />，得 <MathTex tex="x - y + 3 = 0" /></p>
                <p className="ml-4">所以所求直线方程为 <MathTex tex="x - y + 3 = 0" /></p>

                <p className="mt-1 font-bold">答：（1）<MathTex tex="P(-1,\, 2)" />（2）<MathTex tex="x - 2y + 5 = 0" />（3）<MathTex tex="2x + y = 0" />（4）<MathTex tex="x - y + 3 = 0" /></p>
                <p className="mt-1 text-gray-500">【考点】联立方程组求交点、平行线系方程、垂直条件、直线系方程</p>
              </div>
            </div>

            <PageBreak label="实战大题（续）" />

            {/* ── 大题4 ── */}
            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-3 py-1 space-y-0">
                <p className="font-bold">大题4：</p>
                <p className="ml-4">（1）求直线 <MathTex tex="l_1{:}\; \sqrt{3}\,x - y + 2 = 0" /> 与 <MathTex tex="l_2{:}\; x - \sqrt{3}\,y + 1 = 0" /> 的夹角 <MathTex tex="\theta" /></p>
                <p className="ml-4">（2）求点 <MathTex tex="A(1,\, 1)" /> 关于直线 <MathTex tex="l{:}\; x + y - 4 = 0" /> 的对称点 <MathTex tex="A_1" /> 的坐标</p>
                <p className="ml-4">（3）求直线 <MathTex tex="x + y - 4 = 0" /> 与 <MathTex tex="x + y + 2 = 0" /> 之间的距离</p>

                <p className="mt-1"><strong>解：</strong></p>

                <p className="mt-1"><strong>（1）求夹角 <MathTex tex="\theta" /></strong></p>
                <p className="ml-4">由 <MathTex tex="l_1{:}\; \sqrt{3}\,x - y + 2 = 0" /> 得 <MathTex tex="y = \sqrt{3}\,x + 2" />，所以 <MathTex tex="k_1 = \sqrt{3}" /></p>
                <p className="ml-4">由 <MathTex tex="l_2{:}\; x - \sqrt{3}\,y + 1 = 0" /> 得 <MathTex tex="y = \dfrac{x + 1}{\sqrt{3}} = \dfrac{\sqrt{3}}{3}\,x + \dfrac{\sqrt{3}}{3}" />，所以 <MathTex tex="k_2 = \dfrac{\sqrt{3}}{3}" /></p>
                <p className="ml-4">代入夹角公式：</p>
                <p className="ml-4"><MathTex tex="\tan\theta = \left|\dfrac{k_1 - k_2}{1 + k_1 k_2}\right| = \left|\dfrac{\sqrt{3} - \dfrac{\sqrt{3}}{3}}{1 + \sqrt{3} \times \dfrac{\sqrt{3}}{3}}\right| = \left|\dfrac{\dfrac{2\sqrt{3}}{3}}{1 + 1}\right| = \left|\dfrac{\dfrac{2\sqrt{3}}{3}}{2}\right| = \dfrac{\sqrt{3}}{3}" /></p>
                <p className="ml-4">因为 <MathTex tex="\tan 30° = \dfrac{\sqrt{3}}{3}" />，所以 <MathTex tex="\theta = 30°" /></p>

                <p className="mt-1"><strong>（2）求对称点 <MathTex tex="A_1" /></strong></p>
                <div className="flex items-start gap-3">
                  <div className="flex-1 space-y-0">
                    <p className="ml-4">设 <MathTex tex="A_1(a,\, b)" />。直线 <MathTex tex="l{:}\; x + y - 4 = 0" />，即 <MathTex tex="y = -x + 4" />，所以 <MathTex tex="k_l = -1" /></p>
                    <p className="ml-4 mt-1"><strong>条件1（垂直）：</strong><MathTex tex="AA_1" /> 与 <MathTex tex="l" /> 垂直</p>
                    <p className="ml-8"><MathTex tex="k_{AA_1} \times k_l = -1" />，代入 <MathTex tex="k_l = -1" /> 得 <MathTex tex="k_{AA_1} = 1" /></p>
                    <p className="ml-8">由斜率公式 <MathTex tex="\dfrac{b - 1}{a - 1} = 1" />，得 <MathTex tex="b - 1 = a - 1" />，即 <MathTex tex="a - b = 0" /> ①</p>
                    <p className="ml-4 mt-1"><strong>条件2（中点在 <MathTex tex="l" /> 上）：</strong></p>
                    <p className="ml-8">中点 <MathTex tex="M\!\left(\dfrac{1 + a}{2},\; \dfrac{1 + b}{2}\right)" /></p>
                    <p className="ml-8">代入 <MathTex tex="x + y - 4 = 0" />：<MathTex tex="\dfrac{1 + a}{2} + \dfrac{1 + b}{2} - 4 = 0" /></p>
                    <p className="ml-8">化简得 <MathTex tex="1 + a + 1 + b - 8 = 0" />，即 <MathTex tex="a + b = 6" /> ②</p>
                    <p className="ml-4 mt-1"><strong>联立 ①② 解方程组：</strong></p>
                    <p className="ml-8">① + ②：<MathTex tex="2a = 6" />，得 <MathTex tex="a = 3" /></p>
                    <p className="ml-8">代回 ①：<MathTex tex="b = 3" /></p>
                    <p className="ml-4">所以对称点 <MathTex tex="A_1(3,\, 3)" /></p>
                  </div>
                  <DebugGeo2dSvg data={symmetryExDiagram} width={165} height={140} className="flex-shrink-0" />
                </div>

                <p className="mt-1"><strong>（3）求两平行线间距离</strong></p>
                <p className="ml-4">两条直线 <MathTex tex="x + y - 4 = 0" /> 与 <MathTex tex="x + y + 2 = 0" />，<MathTex tex="A" /> 和 <MathTex tex="B" /> 完全相同</p>
                <p className="ml-4">代入两平行线距离公式：</p>
                <p className="ml-4"><MathTex tex="d = \dfrac{|C_1 - C_2|}{\sqrt{A^2 + B^2}} = \dfrac{|-4 - 2|}{\sqrt{1^2 + 1^2}} = \dfrac{6}{\sqrt{2}} = 3\sqrt{2}" /></p>

                <p className="mt-1 font-bold">答：（1）<MathTex tex="\theta = 30°" />（2）<MathTex tex="A_1(3,\, 3)" />（3）<MathTex tex="d = 3\sqrt{2}" /></p>
                <p className="mt-1 text-gray-500">【考点】两直线夹角公式、点关于直线的对称、两平行线间距离</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      </LessonLayout>
      <Geo2dDebugToggle />
    </div>
  );
}
