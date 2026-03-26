import { Math as MathTex, Collapsible, PageHeader, LessonLayout, ExportButton, Geo2dSvg } from '@/components/shared';
import { lineProgressItems } from './data/8.0/8.0-line-progress';
import { inclinationAngleDiagram, slopeDirectionsDiagram, parallelPerpDiagram, pointToLineDiagram, symmetryPointDiagram } from './data/8.0/8.0-line-diagrams';
import { useProgress } from '@/hooks';
import { scrollToId } from '@/lib/scroll';

export function LinePage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('line', lineProgressItems);

  return (
    <div>
      <PageHeader
        stage="第八阶段 · 解析几何"
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

      <div className="bg-white rounded-xl border border-gray-200 p-3 mb-0">
        <p className="font-bold text-gray-800 mb-2">知识地图</p>
        <div className="text-gray-800 grid grid-cols-2 gap-x-4 gap-y-1">
          <button onClick={() => scrollToId('slope')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">一、倾斜角与斜率</button>
          <button onClick={() => scrollToId('distance')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">四、距离公式</button>
          <button onClick={() => scrollToId('equations')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">二、直线方程五种形式</button>
          <button onClick={() => scrollToId('practice')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">五、实战例题</button>
          <button onClick={() => scrollToId('relations')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">三、两直线位置关系</button>
        </div>
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 1: 倾斜角与斜率 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="slope" className="mb-3 scroll-mt-4">
        <Collapsible title="一、倾斜角与斜率" defaultOpen storageKey="line:slope">
          <div className="space-y-0 text-lg text-gray-800">

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">倾斜角</div>
              <div className="px-3 py-2 space-y-1">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p>直线向上的方向与 <MathTex tex="x" /> 轴<strong>正方向</strong>所成的角，叫做直线的<strong>倾斜角</strong>，记作 <MathTex tex="\alpha" /></p>
                  </div>
                  <Geo2dSvg data={inclinationAngleDiagram} width={140} height={100} className="flex-shrink-0" />
                </div>
                <div className="bg-blue-50 rounded-lg p-2 border border-blue-200">
                  <p className="font-bold text-blue-700">范围：<MathTex tex="0° \leqslant \alpha < 180°" /></p>
                  <p className="mt-1">特别地：当直线与 <MathTex tex="x" /> 轴平行或重合时，<MathTex tex="\alpha = 0°" /></p>
                  <p className="mt-1">当直线与 <MathTex tex="x" /> 轴垂直时，<MathTex tex="\alpha = 90°" />，此时<strong>斜率不存在</strong></p>
                </div>
              </div>
            </div>

            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">斜率</div>
              <div className="px-3 py-2 space-y-1">
                <p>斜率就是倾斜角的正切值：</p>
                <div className="text-center">
                  <MathTex tex="k = \tan\alpha" />
                </div>
                <p>已知两点 <MathTex tex="A(x_1, y_1)" />、<MathTex tex="B(x_2, y_2)" />，斜率计算公式：</p>
                <div className="bg-green-50 rounded-lg p-2 border border-green-200 text-center">
                  <MathTex tex="k = \dfrac{y_2 - y_1}{x_2 - x_1} \quad (x_1 \neq x_2)" />
                </div>

                <div className="bg-amber-50 rounded-lg p-2 border border-amber-200">
                  <p className="font-bold text-amber-700">易错提醒</p>
                  <p className="mt-1">涉及斜率的题目，<strong>一定要先讨论斜率是否存在</strong>（即直线是否与 <MathTex tex="x" /> 轴垂直）</p>
                  <p className="mt-1">很多同学忘了讨论 <MathTex tex="x_1 = x_2" /> 的情况而丢分</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">斜率与倾斜角的对应关系</div>
              <div className="px-3 py-2">
                <div className="flex items-start gap-3">
                <Geo2dSvg data={slopeDirectionsDiagram} width={150} height={110} className="flex-shrink-0" />
                <table className="w-full text-left border-collapse flex-1">
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
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 2: 直线方程五种形式 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="equations" className="mb-3 scroll-mt-4">
        <Collapsible title="二、直线方程五种形式" defaultOpen storageKey="line:equations">
          <div className="space-y-0 text-lg text-gray-800">

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">① 点斜式（最常用）</div>
              <div className="px-3 py-2 space-y-1">
                <p>已知斜率 <MathTex tex="k" /> 和直线上一点 <MathTex tex="(x_0, y_0)" />：</p>
                <div className="bg-blue-50 rounded-lg p-2 border border-blue-200 text-center">
                  <MathTex tex="y - y_0 = k(x - x_0)" />
                </div>
                <p className="text-red-600 font-bold">局限：不能表示与 <MathTex tex="x" /> 轴垂直的直线（斜率不存在）</p>
              </div>
            </div>

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">② 斜截式</div>
              <div className="px-3 py-2 space-y-1">
                <p>已知斜率 <MathTex tex="k" /> 和 <MathTex tex="y" /> 轴截距 <MathTex tex="b" />（直线与 <MathTex tex="y" /> 轴的交点为 <MathTex tex="(0, b)" />）：</p>
                <div className="bg-blue-50 rounded-lg p-2 border border-blue-200 text-center">
                  <MathTex tex="y = kx + b" />
                </div>
                <p>本质就是点斜式取 <MathTex tex="(x_0, y_0) = (0, b)" /></p>
                <p className="text-red-600 font-bold">局限：同点斜式，不能表示垂直于 <MathTex tex="x" /> 轴的直线</p>
              </div>
            </div>

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">③ 两点式</div>
              <div className="px-3 py-2 space-y-1">
                <p>已知两点 <MathTex tex="(x_1, y_1)" /> 和 <MathTex tex="(x_2, y_2)" />：</p>
                <div className="bg-blue-50 rounded-lg p-2 border border-blue-200 text-center">
                  <MathTex tex="\dfrac{y - y_1}{y_2 - y_1} = \dfrac{x - x_1}{x_2 - x_1}" />
                </div>
                <p className="text-red-600 font-bold">局限：当 <MathTex tex="x_1 = x_2" /> 或 <MathTex tex="y_1 = y_2" /> 时不能用</p>
              </div>
            </div>

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">④ 截距式</div>
              <div className="px-3 py-2 space-y-1">
                <p>已知 <MathTex tex="x" /> 轴截距 <MathTex tex="a" /> 和 <MathTex tex="y" /> 轴截距 <MathTex tex="b" />（即过 <MathTex tex="(a, 0)" /> 和 <MathTex tex="(0, b)" />）：</p>
                <div className="bg-blue-50 rounded-lg p-2 border border-blue-200 text-center">
                  <MathTex tex="\dfrac{x}{a} + \dfrac{y}{b} = 1 \quad (a \neq 0, \, b \neq 0)" />
                </div>
                <p className="text-red-600 font-bold">局限：不能表示过原点的直线，也不能表示平行于坐标轴的直线</p>
              </div>
            </div>

            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">⑤ 一般式（万能）</div>
              <div className="px-3 py-2 space-y-1">
                <div className="bg-green-50 rounded-lg p-2 border border-green-200 text-center">
                  <MathTex tex="Ax + By + C = 0 \quad (A, B \text{ 不同时为 } 0)" />
                </div>
                <p><strong>可以表示所有直线</strong>，没有局限性</p>
                <p className="mt-1">其中：</p>
                <p className="ml-4"><MathTex tex="x" /> 轴截距 <MathTex tex="= -\dfrac{C}{A}" />（当 <MathTex tex="A \neq 0" />），<MathTex tex="y" /> 轴截距 <MathTex tex="= -\dfrac{C}{B}" />（当 <MathTex tex="B \neq 0" />）</p>
                <p className="ml-4">斜率 <MathTex tex="k = -\dfrac{A}{B}" />（当 <MathTex tex="B \neq 0" />）</p>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-2 border border-amber-200">
              <p className="font-bold text-amber-700">做题选哪种形式？</p>
              <p className="mt-1"><strong>已知斜率和一个点</strong>：用点斜式</p>
              <p className="mt-1"><strong>已知两个截距</strong>：用截距式（但要注意过原点的情况！）</p>
              <p className="mt-1"><strong>已知两个点</strong>：用两点式或直接算斜率再用点斜式</p>
              <p className="mt-1"><strong>判断平行/垂直/求距离</strong>：统一化成一般式</p>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 3: 两直线位置关系 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="relations" className="mb-3 scroll-mt-4">
        <Collapsible title="三、两直线位置关系" defaultOpen storageKey="line:relations">
          <div className="space-y-0 text-lg text-gray-800">

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">用斜率判断（最直观）</div>
              <div className="px-3 py-2 space-y-1">
                <div className="flex justify-center mb-1">
                  <Geo2dSvg data={parallelPerpDiagram} width={180} height={120} />
                </div>
                <p>设两直线斜率分别为 <MathTex tex="k_1" /> 和 <MathTex tex="k_2" />：</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-blue-50 rounded-lg p-2 border border-blue-200">
                    <p className="font-bold text-blue-700 text-center">平行</p>
                    <div className="text-center mt-1">
                      <MathTex tex="k_1 = k_2" />
                    </div>
                    <p className="mt-1 text-center">（且不重合）</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-2 border border-green-200">
                    <p className="font-bold text-green-700 text-center">垂直</p>
                    <div className="text-center mt-1">
                      <MathTex tex="k_1 \cdot k_2 = -1" />
                    </div>
                    <p className="mt-1 text-center">（两斜率之积为 <MathTex tex="-1" />）</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">用一般式判断（更严谨）</div>
              <div className="px-3 py-2 space-y-1">
                <p>设 <MathTex tex="l_1: A_1x + B_1y + C_1 = 0" />，<MathTex tex="l_2: A_2x + B_2y + C_2 = 0" /></p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-blue-50 rounded-lg p-2 border border-blue-200">
                    <p className="font-bold text-blue-700">平行条件</p>
                    <div className="mt-1">
                      <MathTex tex="A_1 B_2 - A_2 B_1 = 0" />
                    </div>
                    <p className="mt-1">（且不重合）</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-2 border border-green-200">
                    <p className="font-bold text-green-700">垂直条件</p>
                    <div className="mt-1">
                      <MathTex tex="A_1 A_2 + B_1 B_2 = 0" />
                    </div>
                  </div>
                </div>
                <p className="mt-2">一般式判断的好处：<strong>不需要讨论斜率是否存在</strong>，直接用系数算</p>
              </div>
            </div>

            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">求交点</div>
              <div className="px-3 py-2 space-y-1">
                <p>两直线的交点坐标 = 联立两个方程组成的<strong>方程组的解</strong></p>
                <div className="bg-gray-50 rounded-lg p-2 border border-gray-200">
                  <p>例：<MathTex tex="l_1: 2x + y - 4 = 0" />，<MathTex tex="l_2: x - y + 1 = 0" /></p>
                  <p className="mt-1">联立：<MathTex tex="\begin{cases} 2x + y = 4 \\ x - y = -1 \end{cases}" /></p>
                  <p className="mt-1">两式相加：<MathTex tex="3x = 3" />，解得 <MathTex tex="x = 1" />，<MathTex tex="y = 2" /></p>
                  <p className="mt-1">交点为 <MathTex tex="(1, 2)" /></p>
                </div>
              </div>
            </div>

            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-800 border-b border-purple-300 bg-purple-100 text-lg">过交点的直线系（高频技巧）</div>
              <div className="px-3 py-2 space-y-1">
                <p>若两直线 <MathTex tex="l_1" /> 和 <MathTex tex="l_2" /> 相交，则过它们交点的直线可以写成：</p>
                <div className="bg-purple-50 rounded-lg p-2 border border-purple-200 text-center">
                  <MathTex tex="\lambda(A_1x + B_1y + C_1) + \mu(A_2x + B_2y + C_2) = 0" />
                </div>
                <p className="mt-1">实际做题常用简化形式（令 <MathTex tex="\mu = 1" />）：</p>
                <div className="bg-purple-50 rounded-lg p-2 border border-purple-200 text-center">
                  <MathTex tex="(A_1x + B_1y + C_1) + \lambda(A_2x + B_2y + C_2) = 0" />
                </div>
                <p className="mt-1">这个式子表示过 <MathTex tex="l_1" /> 和 <MathTex tex="l_2" /> 交点的所有直线（<strong>除了 <MathTex tex="l_2" /> 本身</strong>）</p>
                <p className="mt-1 font-bold">好处：不用先算交点坐标，直接用 <MathTex tex="\lambda" /> 来确定直线</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 4: 距离公式 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="distance" className="mb-3 scroll-mt-4">
        <Collapsible title="四、距离公式" defaultOpen storageKey="line:distance">
          <div className="space-y-0 text-lg text-gray-800">

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">两点间距离</div>
              <div className="px-3 py-2 space-y-1">
                <p>两点 <MathTex tex="A(x_1, y_1)" /> 和 <MathTex tex="B(x_2, y_2)" /> 之间的距离：</p>
                <div className="bg-blue-50 rounded-lg p-2 border border-blue-200 text-center">
                  <MathTex tex="|AB| = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}" />
                </div>
                <p>本质就是勾股定理</p>
              </div>
            </div>

            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">点到直线距离（必背公式）</div>
              <div className="px-3 py-2 space-y-1">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p>点 <MathTex tex="P(x_0, y_0)" /> 到直线 <MathTex tex="Ax + By + C = 0" /> 的距离：</p>
                  </div>
                  <Geo2dSvg data={pointToLineDiagram} width={140} height={100} className="flex-shrink-0" />
                </div>
                <div className="bg-green-50 rounded-lg p-2 border border-green-200 text-center">
                  <MathTex tex="d = \dfrac{|Ax_0 + By_0 + C|}{\sqrt{A^2 + B^2}}" />
                </div>
                <p className="font-bold mt-1">记忆口诀：把点的坐标代入直线方程的左边，取绝对值，除以系数平方和的根号</p>
                <div className="bg-amber-50 rounded-lg p-2 border border-amber-200">
                  <p className="font-bold text-amber-700">使用前提</p>
                  <p className="mt-1">直线方程<strong>必须化成一般式</strong> <MathTex tex="Ax + By + C = 0" /></p>
                  <p className="mt-1">分子<strong>必须加绝对值</strong></p>
                </div>
              </div>
            </div>

            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-800 border-b border-purple-300 bg-purple-100 text-lg">两平行线间距离</div>
              <div className="px-3 py-2 space-y-1">
                <p>两平行线 <MathTex tex="l_1: Ax + By + C_1 = 0" />，<MathTex tex="l_2: Ax + By + C_2 = 0" />：</p>
                <div className="bg-purple-50 rounded-lg p-2 border border-purple-200 text-center">
                  <MathTex tex="d = \dfrac{|C_1 - C_2|}{\sqrt{A^2 + B^2}}" />
                </div>
                <div className="bg-amber-50 rounded-lg p-2 border border-amber-200">
                  <p className="font-bold text-amber-700">使用前提</p>
                  <p className="mt-1">两直线的 <MathTex tex="A" /> 和 <MathTex tex="B" /> 必须<strong>完全相同</strong>（不是成比例，是相同）</p>
                  <p className="mt-1">如果系数不同，先统一。例如 <MathTex tex="2x + 4y - 6 = 0" /> 要先化成 <MathTex tex="x + 2y - 3 = 0" /></p>
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 5: 实战例题 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="practice" className="mb-3 scroll-mt-4">
        <Collapsible title="五、实战例题" defaultOpen storageKey="line:practice">
          <div className="space-y-0 text-lg text-gray-800">

            {/* 例题 1 */}
            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">例题 1：求直线方程</div>
              <div className="px-3 py-2 space-y-1">
                <p>过点 <MathTex tex="A(2, 3)" />，且与直线 <MathTex tex="2x - y + 1 = 0" /> 平行的直线方程是什么？</p>
                <Collapsible title="完整解答" storageKey="line:practice:ex1">
                  <div className="space-y-2 text-lg text-gray-800">
                    <p><strong>第一步：找斜率</strong></p>
                    <p className="ml-4">原直线 <MathTex tex="2x - y + 1 = 0" />，斜率 <MathTex tex="k = -\dfrac{A}{B} = -\dfrac{2}{-1} = 2" /></p>
                    <p className="ml-4">平行直线斜率相同，所以所求直线斜率也是 <MathTex tex="k = 2" /></p>
                    <p className="mt-2"><strong>第二步：用点斜式</strong></p>
                    <p className="ml-4"><MathTex tex="y - 3 = 2(x - 2)" /></p>
                    <p className="ml-4"><MathTex tex="y - 3 = 2x - 4" /></p>
                    <p className="ml-4"><MathTex tex="2x - y - 1 = 0" /></p>
                    <p className="mt-2 font-bold text-blue-700">答：所求直线方程为 <MathTex tex="2x - y - 1 = 0" /></p>
                  </div>
                </Collapsible>
              </div>
            </div>

            {/* 例题 2 */}
            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">例题 2：求点到直线距离</div>
              <div className="px-3 py-2 space-y-1">
                <p>求点 <MathTex tex="P(1, -2)" /> 到直线 <MathTex tex="3x + 4y - 5 = 0" /> 的距离</p>
                <Collapsible title="完整解答" storageKey="line:practice:ex2">
                  <div className="space-y-2 text-lg text-gray-800">
                    <p>直接代入点到直线距离公式：</p>
                    <p><MathTex tex="d = \dfrac{|3 \times 1 + 4 \times (-2) - 5|}{\sqrt{3^2 + 4^2}}" /></p>
                    <p><MathTex tex="= \dfrac{|3 - 8 - 5|}{\sqrt{9 + 16}}" /></p>
                    <p><MathTex tex="= \dfrac{|-10|}{\sqrt{25}} = \dfrac{10}{5} = 2" /></p>
                    <p className="mt-2 font-bold text-blue-700">答：距离为 <MathTex tex="2" /></p>
                  </div>
                </Collapsible>
              </div>
            </div>

            {/* 例题 3 */}
            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">例题 3：截距式的陷阱</div>
              <div className="px-3 py-2 space-y-1">
                <p>直线 <MathTex tex="l" /> 过点 <MathTex tex="(1, 2)" />，且 <MathTex tex="x" /> 轴截距和 <MathTex tex="y" /> 轴截距相等，求直线方程</p>
                <Collapsible title="完整解答" storageKey="line:practice:ex3">
                  <div className="space-y-2 text-lg text-gray-800">
                    <p className="font-bold text-red-600">注意：截距相等不等于都不为零！必须分类讨论</p>
                    <p className="mt-2"><strong>情况一：截距不为零</strong></p>
                    <p className="ml-4">设截距为 <MathTex tex="a \neq 0" />，用截距式：<MathTex tex="\dfrac{x}{a} + \dfrac{y}{a} = 1" /></p>
                    <p className="ml-4">即 <MathTex tex="x + y = a" /></p>
                    <p className="ml-4">代入 <MathTex tex="(1, 2)" />：<MathTex tex="1 + 2 = a" />，得 <MathTex tex="a = 3" /></p>
                    <p className="ml-4">直线方程：<MathTex tex="x + y - 3 = 0" /></p>
                    <p className="mt-2"><strong>情况二：截距为零</strong>（即过原点）</p>
                    <p className="ml-4">此时两个截距都是 <MathTex tex="0" />，相等，满足条件</p>
                    <p className="ml-4">过原点和 <MathTex tex="(1, 2)" />，斜率 <MathTex tex="k = \dfrac{2}{1} = 2" /></p>
                    <p className="ml-4">直线方程：<MathTex tex="y = 2x" />，即 <MathTex tex="2x - y = 0" /></p>
                    <p className="mt-2 font-bold text-blue-700">答：<MathTex tex="x + y - 3 = 0" /> 或 <MathTex tex="2x - y = 0" /></p>
                  </div>
                </Collapsible>
              </div>
            </div>

            {/* 例题 4 */}
            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">例题 4：过交点的直线系</div>
              <div className="px-3 py-2 space-y-1">
                <p>求过直线 <MathTex tex="l_1: x + y - 2 = 0" /> 和 <MathTex tex="l_2: 2x - y - 1 = 0" /> 的交点，且垂直于直线 <MathTex tex="3x + y = 0" /> 的直线方程</p>
                <Collapsible title="完整解答" storageKey="line:practice:ex4">
                  <div className="space-y-2 text-lg text-gray-800">
                    <p><strong>方法：直线系法（不用先算交点）</strong></p>
                    <p className="mt-1">设过 <MathTex tex="l_1" /> 和 <MathTex tex="l_2" /> 交点的直线为：</p>
                    <p><MathTex tex="(x + y - 2) + \lambda(2x - y - 1) = 0" /></p>
                    <p>展开整理：<MathTex tex="(1 + 2\lambda)x + (1 - \lambda)y + (-2 - \lambda) = 0" /></p>
                    <p className="mt-1">垂直于 <MathTex tex="3x + y = 0" />（斜率为 <MathTex tex="-3" />），所求直线斜率为 <MathTex tex="\dfrac{1}{3}" /></p>
                    <p className="mt-1">所求直线斜率 <MathTex tex="= -\dfrac{1 + 2\lambda}{1 - \lambda} = \dfrac{1}{3}" /></p>
                    <p><MathTex tex="-3(1 + 2\lambda) = 1 - \lambda" /></p>
                    <p><MathTex tex="-3 - 6\lambda = 1 - \lambda" /></p>
                    <p><MathTex tex="-5\lambda = 4" /></p>
                    <p><MathTex tex="\lambda = -\dfrac{4}{5}" /></p>
                    <p className="mt-1">代入直线系方程：</p>
                    <p><MathTex tex="(x + y - 2) - \dfrac{4}{5}(2x - y - 1) = 0" /></p>
                    <p>两边乘 <MathTex tex="5" />：<MathTex tex="5(x + y - 2) - 4(2x - y - 1) = 0" /></p>
                    <p><MathTex tex="5x + 5y - 10 - 8x + 4y + 4 = 0" /></p>
                    <p><MathTex tex="-3x + 9y - 6 = 0" /></p>
                    <p><MathTex tex="x - 3y + 2 = 0" /></p>
                    <p className="mt-2 font-bold text-blue-700">答：所求直线方程为 <MathTex tex="x - 3y + 2 = 0" /></p>
                  </div>
                </Collapsible>
              </div>
            </div>

            {/* 例题 5 */}
            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">例题 5：对称问题</div>
              <div className="px-3 py-2 space-y-1">
                <div className="flex items-start gap-3">
                  <p className="flex-1">求点 <MathTex tex="A(4, 1)" /> 关于直线 <MathTex tex="l: x - y + 1 = 0" /> 的对称点 <MathTex tex="A'" /> 的坐标</p>
                  <Geo2dSvg data={symmetryPointDiagram} width={140} height={110} className="flex-shrink-0" />
                </div>
                <Collapsible title="完整解答" storageKey="line:practice:ex5">
                  <div className="space-y-2 text-lg text-gray-800">
                    <p><strong>两个条件：</strong></p>
                    <p className="ml-4">① <MathTex tex="AA'" /> 垂直于 <MathTex tex="l" /></p>
                    <p className="ml-4">② <MathTex tex="AA'" /> 的中点在 <MathTex tex="l" /> 上</p>
                    <p className="mt-2">设 <MathTex tex="A'(a, b)" /></p>
                    <p className="mt-1"><strong>条件①：</strong>直线 <MathTex tex="l" /> 的斜率为 <MathTex tex="1" />，所以 <MathTex tex="AA'" /> 的斜率为 <MathTex tex="-1" /></p>
                    <p className="ml-4"><MathTex tex="\dfrac{b - 1}{a - 4} = -1" />，即 <MathTex tex="b - 1 = -(a - 4)" />，即 <MathTex tex="a + b = 5" /> ...</p>
                    <p className="mt-1"><strong>条件②：</strong>中点 <MathTex tex="M\left(\dfrac{4 + a}{2}, \dfrac{1 + b}{2}\right)" /> 在 <MathTex tex="l" /> 上</p>
                    <p className="ml-4"><MathTex tex="\dfrac{4 + a}{2} - \dfrac{1 + b}{2} + 1 = 0" /></p>
                    <p className="ml-4"><MathTex tex="4 + a - 1 - b + 2 = 0" /></p>
                    <p className="ml-4"><MathTex tex="a - b + 5 = 0" />，即 <MathTex tex="a - b = -5" /> ...</p>
                    <p className="mt-1">联立：<MathTex tex="\begin{cases} a + b = 5 \\ a - b = -5 \end{cases}" /></p>
                    <p>解得 <MathTex tex="a = 0" />，<MathTex tex="b = 5" /></p>
                    <p className="mt-2 font-bold text-blue-700">答：对称点 <MathTex tex="A'(0, 5)" /></p>
                  </div>
                </Collapsible>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      </LessonLayout>
    </div>
  );
}
