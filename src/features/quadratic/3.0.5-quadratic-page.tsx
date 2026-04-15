import { Coordinates, Plot, Line, Point } from 'mafs';
import { DebugMafs, DebugToggle } from '@/features/trig/MafsDebug';
import { Math, Collapsible, PageHeader, LessonLayout, ExportButton, PageBreak } from '@/components/shared';
import { quadraticProgressItems } from './data/3.0.5/3.0.5-progress';
import { useProgress, usePrintMode } from '@/hooks';

export function QuadraticPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('quadratic', quadraticProgressItems);
  usePrintMode();

  return (
    <div>
      <PageHeader
        stage="第三阶段 · 函数思维"
        title="3.0.5 二次函数"
        subtitle="高中数学的基石"
        tags={[
          { label: '约3-4小时', color: 'amber' },
          { label: '贯穿始终', color: 'purple' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden gap-2">
        <DebugToggle />
        <ExportButton title="3.0.5 二次函数" />
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>
        <div className="[&_.rounded-xl]:mb-0 [&_.rounded-xl>.flex.items-center]:py-1 [&_.rounded-xl>div:last-child]:pt-1 [&_.rounded-xl>div:last-child]:pb-1">

      {/* ═══════════════════════════════════════════════════════ */}
      {/* Section 1: 定义与基本条件 */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section id="qd-definition" className="mb-0 scroll-mt-4">
        <Collapsible title="一、定义与基本条件" defaultOpen storageKey="quadratic:definition">
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100">二次函数的定义</div>
              <div className="px-3 py-2 border-b border-gray-300">
                <p>一般地，形如 <Math tex="y = ax^2 + bx + c" />（<Math tex="a, b, c" /> 是常数，<Math tex="a \neq 0" />）的函数，叫做<strong>二次函数</strong></p>
                <p>其中 <Math tex="a" /> 叫<strong>二次项系数</strong>，<Math tex="b" /> 叫<strong>一次项系数</strong>，<Math tex="c" /> 叫<strong>常数项</strong></p>
              </div>
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-300 bg-gray-50">三个核心条件</div>
              <div className="px-3 py-2 space-y-1">
                <p><strong>① 自变量的最高次数为 2</strong>：表达式中 <Math tex="x" /> 的最高幂次是 2，不能出现 <Math tex="x^3" /> 或更高次项</p>
                <p><strong>② 二次项系数 <Math tex="a \neq 0" /></strong>：如果 <Math tex="a = 0" />，<Math tex="ax^2" /> 项消失，退化为一次函数 <Math tex="y = bx + c" /></p>
                <p><strong>③ 多项式形式</strong>：只含 <Math tex="x" /> 的非负整数次幂，不能有根号、分式等</p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100">图像：抛物线的开口方向由 <Math tex="a" /> 决定</div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div className="flex flex-col items-center p-2">
                  <p className="font-bold text-blue-700 mb-1"><Math tex="a > 0" />，开口<strong>向上</strong></p>
                  <DebugMafs viewBox={{ x: [-3, 5], y: [-5, 5] }} height={97} width={119}>
                    <Coordinates.Cartesian xAxis={{ lines: false, labels: false }} yAxis={{ lines: false, labels: false }} />
                    <Plot.OfX y={(x) => x * x - 2 * x - 3} color="#3b82f6" />
                    <Line.Segment point1={[1, -5]} point2={[1, 5]} color="#f59e0b" style="dashed" />
                  </DebugMafs>
                  <p className="mt-1 text-blue-700"><Math tex="y = x^2 - 2x - 3" /></p>
                  <p className="mt-1">顶点是<strong>最低点</strong>，函数有<strong>最小值</strong></p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="flex flex-col items-center p-2">
                  <p className="font-bold text-red-600 mb-1"><Math tex="a < 0" />，开口<strong>向下</strong></p>
                  <DebugMafs viewBox={{ x: [-3, 5], y: [-5, 5] }} height={97} width={119}>
                    <Coordinates.Cartesian xAxis={{ lines: false, labels: false }} yAxis={{ lines: false, labels: false }} />
                    <Plot.OfX y={(x) => -x * x + 2 * x + 3} color="#ef4444" />
                    <Line.Segment point1={[1, -5]} point2={[1, 5]} color="#f59e0b" style="dashed" />
                  </DebugMafs>
                  <p className="mt-1 text-red-600"><Math tex="y = -x^2 + 2x + 3" /></p>
                  <p className="mt-1">顶点是<strong>最高点</strong>，函数有<strong>最大值</strong></p>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-3 py-2 space-y-1">
                <p><strong>开口大小：</strong>由 <Math tex="|a|" /> 决定，<Math tex="|a|" /> 越大，抛物线越"窄"，<Math tex="|a|" /> 越小，抛物线越"宽"</p>
                <p><strong>对称性：</strong>抛物线关于一条垂直线对称，这条线称为<strong>对称轴</strong>，公式为 <Math tex="x = -\dfrac{b}{2a}" /></p>
                <p><strong>顶点：</strong>抛物线的最高点或最低点，坐标为 <Math tex="(h,\; k)" />，其中 <Math tex="h = -\dfrac{b}{2a}" />，<Math tex="k = c - \dfrac{b^2}{4a}" />（可以将 <Math tex="h" /> 代入原函数求得 <Math tex="k = f(h)" />）</p>
                <p><strong>零点：</strong>函数图像与 <Math tex="x" /> 轴的交点的横坐标，令 <Math tex="y = 0" />，解方程 <Math tex="ax^2 + bx + c = 0" /> 即可得到</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* Section 2: 求根公式（复习） */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section id="qd-roots" className="mb-0 scroll-mt-4">
        <Collapsible title="二、求根公式（复习）" defaultOpen storageKey="quadratic:roots">
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100">一元二次方程的求根公式</div>
              <div className="px-3 py-1 border-b border-gray-300">
                <p>对于方程 <Math tex="ax^2 + bx + c = 0" />（<Math tex="a \neq 0" />），根为 <Math tex="x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}" /></p>
              </div>
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-300 bg-gray-50">判别式 <Math tex="\Delta = b^2 - 4ac" /></div>
              <div className="px-3 py-1 space-y-0">
                <p><Math tex="\Delta > 0" />：方程有<strong>两个不相等</strong>的实数根</p>
                <p><Math tex="\Delta = 0" />：方程有<strong>两个相等</strong>的实数根（即一个根）</p>
                <p><Math tex="\Delta < 0" />：方程<strong>无实数根</strong></p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100">举例</div>
              <div className="px-3 py-2 space-y-1">
                <p>解 <Math tex="x^2 - 2x - 3 = 0" />，其中 <Math tex="a=1, b=-2, c=-3" /></p>
                <p>先算判别式：<Math tex="\Delta = (-2)^2 - 4 \times 1 \times (-3) = 4 + 12 = 16 > 0" />，有两个不相等的实数根</p>
                <p>代入求根公式：<Math tex="x = \dfrac{-(-2) \pm \sqrt{16}}{2 \times 1} = \dfrac{2 \pm 4}{2}" /></p>
                <p>所以 <Math tex="x_1 = \dfrac{2+4}{2} = 3" />，<Math tex="x_2 = \dfrac{2-4}{2} = -1" /></p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* Section 3: 三种常见形式 */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section id="qd-forms" className="mb-0 scroll-mt-4">
        <Collapsible title="三、三种常见形式" defaultOpen storageKey="quadratic:forms">
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            <div className="border border-gray-400 rounded overflow-hidden">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-2 py-1 text-center">形式</th>
                    <th className="border border-gray-300 px-2 py-1 text-center">公式</th>
                    <th className="border border-gray-300 px-2 py-1 text-center">特点</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 font-bold text-center">一般式</td>
                    <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="y = ax^2 + bx + c" /></td>
                    <td className="border border-gray-300 px-2 py-1">显示整体结构，直接读出与 <Math tex="y" /> 轴交点 <Math tex="c" /></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-2 py-1 font-bold text-center">顶点式</td>
                    <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="y = a(x-h)^2 + k" /></td>
                    <td className="border border-gray-300 px-2 py-1">直接读出顶点 <Math tex="(h, k)" />，适合求最值</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 font-bold text-center">交点式</td>
                    <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="y = a(x-x_1)(x-x_2)" /></td>
                    <td className="border border-gray-300 px-2 py-1">直接读出零点 <Math tex="x_1, x_2" />，适合分析与 <Math tex="x" /> 轴关系</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100">举例：同一条抛物线的三种写法</div>
              <div className="px-3 py-2 space-y-1">
                <p><strong>一般式：</strong><Math tex="y = x^2 - 2x - 3" />，可以直接读出 <Math tex="a=1, b=-2, c=-3" />，与 <Math tex="y" /> 轴交点为 <Math tex="(0, -3)" /></p>
                <p><strong>顶点式：</strong>配方得 <Math tex="y = (x-1)^2 - 4" />，可以直接读出顶点 <Math tex="(1, -4)" />，最小值为 <Math tex="-4" /></p>
                <p><strong>交点式：</strong>求根得 <Math tex="y = (x+1)(x-3)" />，可以直接读出零点 <Math tex="x_1 = -1" />，<Math tex="x_2 = 3" /></p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* Section 4: 判别式与图像位置关系 */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section id="qd-discriminant" className="mb-0 scroll-mt-4">
        <Collapsible title="四、判别式与图像位置关系" defaultOpen storageKey="quadratic:discriminant">
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100">判别式 <Math tex="\Delta = b^2 - 4ac" /> 决定抛物线与 <Math tex="x" /> 轴的交点个数</div>
              <div className="grid grid-cols-3">
                <div className="flex flex-col items-center p-2 border-r border-gray-300">
                  <p className="font-bold text-green-700 mb-1"><Math tex="\Delta > 0" /></p>
                  <DebugMafs viewBox={{ x: [-4, 4], y: [-5, 5] }} height={80} width={100}>
                    <Line.Segment point1={[-4, 0]} point2={[4, 0]} color="#000" />
                    <Plot.OfX y={(x) => x * x - 4} color="#16a34a" />
                    <Point x={-2} y={0} color="#ef4444" />
                    <Point x={2} y={0} color="#ef4444" />
                  </DebugMafs>
                  <p className="mt-1"><strong>两个</strong>交点</p>
                  <p>穿过 <Math tex="x" /> 轴</p>
                </div>
                <div className="flex flex-col items-center p-2 border-r border-gray-300">
                  <p className="font-bold text-blue-700 mb-1"><Math tex="\Delta = 0" /></p>
                  <DebugMafs viewBox={{ x: [-4, 4], y: [-3, 5] }} height={80} width={100}>
                    <Line.Segment point1={[-4, 0]} point2={[4, 0]} color="#000" />
                    <Plot.OfX y={(x) => x * x} color="#3b82f6" />
                    <Point x={0} y={0} color="#ef4444" />
                  </DebugMafs>
                  <p className="mt-1"><strong>一个</strong>交点</p>
                  <p>与 <Math tex="x" /> 轴相切</p>
                </div>
                <div className="flex flex-col items-center p-2">
                  <p className="font-bold text-red-600 mb-1"><Math tex="\Delta < 0" /></p>
                  <DebugMafs viewBox={{ x: [-4, 4], y: [-3, 5] }} height={80} width={100}>
                    <Line.Segment point1={[-4, 0]} point2={[4, 0]} color="#000" />
                    <Plot.OfX y={(x) => x * x + 2} color="#ef4444" />
                  </DebugMafs>
                  <p className="mt-1"><strong>无</strong>交点</p>
                  <p>不碰 <Math tex="x" /> 轴</p>
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* Section 5: 单调性与最值 */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section id="qd-monotonicity" className="mb-0 scroll-mt-4">
        <Collapsible title="五、单调性与最值" defaultOpen storageKey="quadratic:monotonicity">
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100">单调性由对称轴分界</div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div className="flex flex-col items-center p-2">
                  <p className="font-bold text-blue-700 mb-1"><Math tex="a > 0" />（开口向上）</p>
                  <DebugMafs viewBox={{ x: [-3, 5], y: [-5, 5] }} height={78} width={95}>
                    <Coordinates.Cartesian xAxis={{ lines: false, labels: false }} yAxis={{ lines: false, labels: false }} />
                    <Plot.OfX y={(x) => x * x - 2 * x - 3} color="#3b82f6" />
                    <Line.Segment point1={[1, -5]} point2={[1, 5]} color="#f59e0b" style="dashed" />
                  </DebugMafs>
                  <p className="mt-1">对称轴左侧<strong>递减</strong>，对称轴右侧<strong>递增</strong></p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="flex flex-col items-center p-2">
                  <p className="font-bold text-red-600 mb-1"><Math tex="a < 0" />（开口向下）</p>
                  <DebugMafs viewBox={{ x: [-3, 5], y: [-5, 5] }} height={78} width={95}>
                    <Coordinates.Cartesian xAxis={{ lines: false, labels: false }} yAxis={{ lines: false, labels: false }} />
                    <Plot.OfX y={(x) => -x * x + 2 * x + 3} color="#ef4444" />
                    <Line.Segment point1={[1, -5]} point2={[1, 5]} color="#f59e0b" style="dashed" />
                  </DebugMafs>
                  <p className="mt-1">对称轴左侧<strong>递增</strong>，对称轴右侧<strong>递减</strong></p>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100">最值</div>
              <div className="px-3 py-2 space-y-1">
                <p><Math tex="a > 0" /> 时，函数在顶点处取<strong>最小值</strong> <Math tex="k" />，无最大值，值域为 <Math tex="[k, +\infty)" /></p>
                <p><Math tex="a < 0" /> 时，函数在顶点处取<strong>最大值</strong> <Math tex="k" />，无最小值，值域为 <Math tex="(-\infty, k]" /></p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100">举例</div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div className="px-3 py-2 space-y-1">
                  <p><Math tex="y = x^2 - 2x - 3" /></p>
                  <p>对称轴 <Math tex="x = 1" />，顶点 <Math tex="(1, -4)" /></p>
                  <p>在 <Math tex="(-\infty, 1)" /> 上<strong>递减</strong>，在 <Math tex="(1, +\infty)" /> 上<strong>递增</strong></p>
                  <p>最小值为 <Math tex="-4" />，值域为 <Math tex="[-4, +\infty)" /></p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="px-3 py-2 space-y-1">
                  <p><Math tex="y = -x^2 + 2x + 3" /></p>
                  <p>对称轴 <Math tex="x = 1" />，顶点 <Math tex="(1, 4)" /></p>
                  <p>在 <Math tex="(-\infty, 1)" /> 上<strong>递增</strong>，在 <Math tex="(1, +\infty)" /> 上<strong>递减</strong></p>
                  <p>最大值为 <Math tex="4" />，值域为 <Math tex="(-\infty, 4]" /></p>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100">随堂练习</div>
              <div className="px-3 py-1 space-y-0">
                <p>已知 <Math tex="y = 2x^2 + 4x - 1" />，求对称轴、顶点坐标、单调区间和值域</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ═══════════════════════════════════════════════════════ */}
      {/* Section 6: 韦达定理 */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section id="qd-vieta" className="mb-0 scroll-mt-4">
        <Collapsible title="六、韦达定理" defaultOpen storageKey="quadratic:vieta">
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100">韦达定理（根与系数的关系）</div>
              <div className="px-3 py-2 space-y-1">
                <p>若 <Math tex="x_1, x_2" /> 是方程 <Math tex="ax^2 + bx + c = 0" /> 的两个根，则 <Math tex="x_1 + x_2 = -\dfrac{b}{a}" />，<Math tex="x_1 \cdot x_2 = \dfrac{c}{a}" /></p>
                <p>不用算出根，直接得到根的<strong>和</strong>与<strong>积</strong></p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100">常见用途</div>
              <div className="px-3 py-2 space-y-1">
                <p><strong>① 快速验证根：</strong>算出两个根后，检查和与积是否满足韦达定理</p>
                <p><strong>② 判断根的符号：</strong>根据 <Math tex="x_1 \cdot x_2" /> 的正负判断两根是否同号，根据 <Math tex="x_1 + x_2" /> 判断正负倾向</p>
                <p><strong>③ 构造新方程：</strong>已知两根的和与积，可以直接写出方程 <Math tex="x^2 - (x_1+x_2)x + x_1 \cdot x_2 = 0" /></p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100">举例</div>
              <div className="grid grid-cols-[27fr_auto_23fr]">
                <div className="px-3 py-2 space-y-1">
                  <p className="font-bold">正用：由系数求根的和与积</p>
                  <p><Math tex="x^2 - 2x - 3 = 0" />，其中 <Math tex="a=1, b=-2, c=-3" /></p>
                  <p>韦达定理：<Math tex="x_1 + x_2 = -\dfrac{-2}{1} = 2" />，<Math tex="x_1 \cdot x_2 = \dfrac{-3}{1} = -3" /></p>
                  <p>验证：<Math tex="x_1 = -1, x_2 = 3" />，确实 <Math tex="-1 + 3 = 2" />，<Math tex="-1 \times 3 = -3" /></p>
                  <p>根的积为负数，说明两根<strong>异号</strong></p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="px-3 py-2 space-y-1">
                  <p className="font-bold">逆用：由和与积写方程</p>
                  <p>已知两数和为 <Math tex="5" />，积为 <Math tex="6" /></p>
                  <p>由韦达定理，和与积对应方程 <Math tex="x^2 - (\text{和})x + \text{积} = 0" /></p>
                  <p>代入，得 <Math tex="x^2 - 5x + 6 = 0" /></p>
                  <p>因式分解：<Math tex="(x-2)(x-3) = 0" /></p>
                  <p>所以这两个数是 <Math tex="2" /> 和 <Math tex="3" /></p>
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* Section 7: 闭区间上的最值 */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section id="qd-closed-interval" className="mb-0 scroll-mt-4">
        <Collapsible title="七、闭区间上的最值（高考重点）" defaultOpen storageKey="quadratic:closed-interval">
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100">核心思路</div>
              <div className="px-3 py-2 space-y-1">
                <p>在闭区间 <Math tex="[m, n]" /> 上求二次函数最值，关键看<strong>对称轴与区间的位置关系</strong></p>
                <p>对称轴在区间内：需要把<strong>顶点</strong>和<strong>两个端点</strong>共 3 个点都代入，比较大小得出最值</p>
                <p>对称轴不在区间内：只需代入<strong>两个端点</strong>，较大的是最大值，较小的是最小值</p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100">三种情况（以 <Math tex="a > 0" /> 开口向上为例）</div>
              <div className="grid grid-cols-3">
                <div className="flex flex-col items-center p-2 border-r border-gray-300">
                  <p className="font-bold mb-1">对称轴在区间内</p>
                  <p className="mb-1">对称轴 <Math tex="x=0" />，区间 <Math tex="[-1, 3]" /></p>
                  <DebugMafs viewBox={{ x: [-4, 4], y: [-5, 5] }} height={80} width={100}>
                    <Line.Segment point1={[-4, 0]} point2={[4, 0]} color="#000" />
                    <Plot.OfX y={(x) => x * x - 4} color="#3b82f6" />
                    <Line.Segment point1={[0, -5]} point2={[0, 5]} color="#f59e0b" style="dashed" />
                  </DebugMafs>
                  <p className="mt-1">最小值在<strong>顶点</strong>，最大值在<strong>较远端点</strong></p>
                </div>
                <div className="flex flex-col items-center p-2 border-r border-gray-300">
                  <p className="font-bold mb-1">对称轴在区间左侧</p>
                  <p className="mb-1">对称轴 <Math tex="x=0" />，区间 <Math tex="[1, 3]" /></p>
                  <DebugMafs viewBox={{ x: [-4, 4], y: [-5, 5] }} height={80} width={100}>
                    <Line.Segment point1={[-4, 0]} point2={[4, 0]} color="#000" />
                    <Plot.OfX y={(x) => x * x - 4} color="#3b82f6" />
                    <Line.Segment point1={[0, -5]} point2={[0, 5]} color="#f59e0b" style="dashed" />
                  </DebugMafs>
                  <p className="mt-1">区间上<strong>递增</strong></p>
                  <p>最小值在<strong>左端点</strong>，最大值在<strong>右端点</strong></p>
                </div>
                <div className="flex flex-col items-center p-2">
                  <p className="font-bold mb-1">对称轴在区间右侧</p>
                  <p className="mb-1">对称轴 <Math tex="x=0" />，区间 <Math tex="[-3, -1]" /></p>
                  <DebugMafs viewBox={{ x: [-4, 4], y: [-5, 5] }} height={80} width={100}>
                    <Line.Segment point1={[-4, 0]} point2={[4, 0]} color="#000" />
                    <Plot.OfX y={(x) => x * x - 4} color="#3b82f6" />
                    <Line.Segment point1={[0, -5]} point2={[0, 5]} color="#f59e0b" style="dashed" />
                  </DebugMafs>
                  <p className="mt-1">区间上<strong>递减</strong></p>
                  <p>最大值在<strong>左端点</strong>，最小值在<strong>右端点</strong></p>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100">举例</div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div className="px-3 py-2 space-y-1">
                  <p className="font-bold">对称轴在区间内（代入 3 个点）</p>
                  <p>求 <Math tex="y = x^2 - 2x - 3" /> 在 <Math tex="[0, 4]" /> 上的最值</p>
                  <p>对称轴 <Math tex="x = 1" />，在区间 <Math tex="[0, 4]" /> 内</p>
                  <p>顶点值：<Math tex="f(1) = 1 - 2 - 3 = -4" /></p>
                  <p>左端点：<Math tex="f(0) = 0 - 0 - 3 = -3" /></p>
                  <p>右端点：<Math tex="f(4) = 16 - 8 - 3 = 5" /></p>
                  <p>最小值 <Math tex="-4" />，最大值 <Math tex="5" /></p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="px-3 py-2 space-y-1">
                  <p className="font-bold">对称轴不在区间内（代入 2 个端点）</p>
                  <p>求 <Math tex="y = x^2 - 2x - 3" /> 在 <Math tex="[2, 5]" /> 上的最值</p>
                  <p>对称轴 <Math tex="x = 1" />，在区间 <Math tex="[2, 5]" /> 左侧</p>
                  <p>左端点：<Math tex="f(2) = 4 - 4 - 3 = -3" /></p>
                  <p>右端点：<Math tex="f(5) = 25 - 10 - 3 = 12" /></p>
                  <p>最小值 <Math tex="-3" />，最大值 <Math tex="12" /></p>
                </div>
              </div>
            </div>

            <PageBreak />

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100">含参讨论（进阶）</div>
              <div className="px-3 py-2 space-y-1">
                <p>如果对称轴含参数（如 <Math tex="x = t" />），需要<strong>分类讨论</strong>对称轴与区间的位置关系</p>
                <p>例如区间为 <Math tex="[1, 4]" />，则分三种情况：<Math tex="t < 1" />（左侧）、<Math tex="1 \leq t \leq 4" />（区间内）、<Math tex="t > 4" />（右侧）</p>
                <p>每种情况分别写出最值表达式</p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100">举例</div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div className="px-3 py-2 space-y-1">
                  <p>求 <Math tex="f(x) = x^2 - 2tx + 1" /> 在 <Math tex="[0, 2]" /> 上的最小值</p>
                  <p>对称轴 <Math tex="x = -\dfrac{b}{2a} = \dfrac{2t}{2} = t" /></p>
                  <p>讨论 <Math tex="t" /> 与区间 <Math tex="[0, 2]" /> 的关系</p>
                  <p className="font-bold mt-2">情况一：<Math tex="t < 0" />（左侧）</p>
                  <p>递增，最小值 <Math tex="f(0) = 1" /></p>
                  <p className="font-bold mt-2">情况二：<Math tex="0 \leq t \leq 2" />（区间内）</p>
                  <p>顶点，<Math tex="f(t) = 1 - t^2" /></p>
                  <p className="font-bold mt-2">情况三：<Math tex="t > 2" />（右侧）</p>
                  <p>递减，最小值 <Math tex="f(2) = 5 - 4t" /></p>
                  <p className="font-bold mt-2">最小值：</p>
                  <p><Math tex="f_{\min} = \begin{cases} 1 & t < 0 \\ 1 - t^2 & 0 \leq t \leq 2 \\ 5 - 4t & t > 2 \end{cases}" /></p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="px-3 py-2 space-y-1">
                  <p>求 <Math tex="f(x) = x^2 - 2ax" /> 在 <Math tex="[0, 2]" /> 上的最小值</p>
                  <p>对称轴 <Math tex="x = -\dfrac{-2a}{2} = a" /></p>
                  <p>讨论 <Math tex="a" /> 与区间 <Math tex="[0, 2]" /> 的关系</p>
                  <p className="font-bold mt-2">情况一：<Math tex="a < 0" />（左侧）</p>
                  <p>递增，最小值 <Math tex="f(0) = 0" /></p>
                  <p className="font-bold mt-2">情况二：<Math tex="0 \leq a \leq 2" />（区间内）</p>
                  <p>顶点，<Math tex="f(a) = -a^2" /></p>
                  <p className="font-bold mt-2">情况三：<Math tex="a > 2" />（右侧）</p>
                  <p>递减，最小值 <Math tex="f(2) = 4 - 4a" /></p>
                  <p className="font-bold mt-2">最小值：</p>
                  <p><Math tex="f_{\min} = \begin{cases} 0 & a < 0 \\ -a^2 & 0 \leq a \leq 2 \\ 4 - 4a & a > 2 \end{cases}" /></p>
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* Section 8: 绝对值二次函数 */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section id="qd-abs-quadratic" className="mb-0 scroll-mt-4">
        <Collapsible title="八、绝对值二次函数" defaultOpen storageKey="quadratic:abs-quadratic">
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100">核心思路</div>
              <div className="px-3 py-2 space-y-1">
                <p>对于 <Math tex="y = |f(x)|" />，先画出 <Math tex="y = f(x)" /> 的图像</p>
                <p>然后把 <Math tex="x" /> 轴下方的部分（<Math tex="y < 0" />）<strong>沿 x 轴翻折上去</strong>，其余不变</p>
                <p>翻折后图像全部在 <Math tex="x" /> 轴上方或上面，即 <Math tex="y \geq 0" /></p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100">图像对比（<span className="text-gray-400">灰色虚线</span> = 原函数，<span className="text-blue-500">蓝色实线</span> = 绝对值）</div>
              <div className="grid grid-cols-2">
                <div className="flex flex-col items-center p-2 border-r border-gray-300">
                  <p className="font-bold mb-1"><Math tex="a > 0" />：<Math tex="y = |x^2 - 2x - 3|" /></p>
                  <DebugMafs viewBox={{ x: [-4, 4], y: [-5, 7] }} height={100} width={130}>
                    <Line.Segment point1={[-10, 0]} point2={[10, 0]} color="#000" />
                    <Plot.OfX y={(x) => x * x - 2 * x - 3} color="#999" style="dashed" />
                    <Plot.OfX y={(x) => { const v = x * x - 2 * x - 3; return v < 0 ? -v : v; }} color="#3b82f6" />
                  </DebugMafs>
                  <p className="mt-1">下方翻折，形成<strong>"W"形</strong></p>
                </div>
                <div className="flex flex-col items-center p-2">
                  <p className="font-bold mb-1"><Math tex="a < 0" />：<Math tex="y = |-x^2 + 2x + 3|" /></p>
                  <DebugMafs viewBox={{ x: [-4, 4], y: [-5, 7] }} height={100} width={130}>
                    <Line.Segment point1={[-10, 0]} point2={[10, 0]} color="#000" />
                    <Plot.OfX y={(x) => -x * x + 2 * x + 3} color="#999" style="dashed" />
                    <Plot.OfX y={(x) => { const v = -x * x + 2 * x + 3; return v < 0 ? -v : v; }} color="#3b82f6" />
                  </DebugMafs>
                  <p className="mt-1">两翼翻折，形成<strong>"W"形</strong></p>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100">关键变化</div>
              <div className="px-3 py-2 space-y-1">
                <p><strong>零点不变</strong>：原函数的零点（<Math tex="x = -1" /> 和 <Math tex="x = 3" />）仍然是零点</p>
                <p><strong>最小值变了</strong>：绝对值后 <Math tex="y \geq 0" />，所以最小值不再是 <Math tex="-4" />，而是 <Math tex="0" />（在零点 <Math tex="x = -1" /> 和 <Math tex="x = 3" /> 处取到）</p>
                <p><strong>单调性变了</strong>：原来 2 个单调区间，翻折后变成 4 个：在 <Math tex="(-\infty, -1)" /> 递减，<Math tex="(-1, 1)" /> 递增，<Math tex="(1, 3)" /> 递减，<Math tex="(3, +\infty)" /> 递增</p>
                <p><strong>顶点翻转</strong>：原来的最低点 <Math tex="(1, -4)" /> 翻折后变成两个零点之间的最高点 <Math tex="(1, 4)" /></p>
              </div>
            </div>

            <PageBreak />

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100">举例</div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div className="px-3 py-2 space-y-1">
                  <p><strong>例1.</strong> 求 <Math tex="y = |x^2 - 2x - 3|" /> 在 <Math tex="[-2, 2]" /> 上的最大值和最小值</p>
                  <p>原函数 <Math tex="f(x) = x^2 - 2x - 3" />，零点 <Math tex="x = -1" /> 和 <Math tex="x = 3" /></p>
                  <p>在 <Math tex="[-2, 2]" /> 内，<Math tex="x = 3" /> 不在区间内，<Math tex="x = -1" /> 在区间内</p>
                  <p>代入各关键点：</p>
                  <p>左端点：<Math tex="|f(-2)| = |4 + 4 - 3| = 5" /></p>
                  <p>零点：<Math tex="|f(-1)| = 0" /></p>
                  <p>原顶点（<Math tex="x = 1" />）：<Math tex="|f(1)| = |1 - 2 - 3| = 4" /></p>
                  <p>右端点：<Math tex="|f(2)| = |4 - 4 - 3| = 3" /></p>
                  <p>最大值 <Math tex="5" />（<Math tex="x = -2" />），最小值 <Math tex="0" />（<Math tex="x = -1" />）</p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="px-3 py-2 space-y-1">
                  <p><strong>例2.</strong> 求 <Math tex="y = |-x^2 + 2x + 3|" /> 在 <Math tex="[0, 4]" /> 上的最大值和最小值</p>
                  <p>原函数 <Math tex="g(x) = -x^2 + 2x + 3" />，零点 <Math tex="x = -1" /> 和 <Math tex="x = 3" /></p>
                  <p>在 <Math tex="[0, 4]" /> 内，<Math tex="x = -1" /> 不在区间内，<Math tex="x = 3" /> 在区间内</p>
                  <p>代入各关键点：</p>
                  <p>左端点：<Math tex="|g(0)| = |0 + 0 + 3| = 3" /></p>
                  <p>原顶点（<Math tex="x = 1" />）：<Math tex="|g(1)| = |-1 + 2 + 3| = 4" /></p>
                  <p>零点：<Math tex="|g(3)| = 0" /></p>
                  <p>右端点：<Math tex="|g(4)| = |-16 + 8 + 3| = 5" /></p>
                  <p>最大值 <Math tex="5" />（<Math tex="x = 4" />），最小值 <Math tex="0" />（<Math tex="x = 3" />）</p>
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* 总结速查表 */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section id="qd-summary" className="mb-0 scroll-mt-4">
        <div className="border border-gray-400 rounded overflow-hidden">
          <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100">二次函数速查表</div>
          <table className="w-full border-collapse text-[0.85rem]">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 px-2 py-1 text-left w-[120px]">项目</th>
                <th className="border border-gray-300 px-2 py-1 text-center"><Math tex="a > 0" />（开口向上）</th>
                <th className="border border-gray-300 px-2 py-1 text-center"><Math tex="a < 0" />（开口向下）</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-2 py-1 font-bold">一般式</td>
                <td colSpan={2} className="border border-gray-300 px-2 py-1 text-center"><Math tex="y = ax^2 + bx + c" /></td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-2 py-1 font-bold">顶点式</td>
                <td colSpan={2} className="border border-gray-300 px-2 py-1 text-center"><Math tex="y = a(x - h)^2 + k" />，顶点 <Math tex="(h, k)" /></td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1 font-bold">交点式</td>
                <td colSpan={2} className="border border-gray-300 px-2 py-1 text-center"><Math tex="y = a(x - x_1)(x - x_2)" />（<Math tex="\Delta \geq 0" /> 时）</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-2 py-1 font-bold">对称轴</td>
                <td colSpan={2} className="border border-gray-300 px-2 py-1 text-center"><Math tex="x = -\dfrac{b}{2a}" /></td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1 font-bold">顶点坐标</td>
                <td colSpan={2} className="border border-gray-300 px-2 py-1 text-center"><Math tex="\left(-\dfrac{b}{2a},\; c - \dfrac{b^2}{4a}\right)" /></td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-2 py-1 font-bold">单调性</td>
                <td className="border border-gray-300 px-2 py-1 text-center">对称轴左侧<strong>递减</strong>，右侧<strong>递增</strong></td>
                <td className="border border-gray-300 px-2 py-1 text-center">对称轴左侧<strong>递增</strong>，右侧<strong>递减</strong></td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1 font-bold">最值</td>
                <td className="border border-gray-300 px-2 py-1 text-center">最小值 <Math tex="k" />，无最大值</td>
                <td className="border border-gray-300 px-2 py-1 text-center">最大值 <Math tex="k" />，无最小值</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-2 py-1 font-bold">判别式</td>
                <td colSpan={2} className="border border-gray-300 px-2 py-1 text-center"><Math tex="\Delta = b^2 - 4ac" />：<Math tex="> 0" /> 两根，<Math tex="= 0" /> 一根，<Math tex="< 0" /> 无实根</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1 font-bold">求根公式</td>
                <td colSpan={2} className="border border-gray-300 px-2 py-1 text-center"><Math tex="x = \dfrac{-b \pm \sqrt{\Delta}}{2a}" /></td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-2 py-1 font-bold">韦达定理</td>
                <td colSpan={2} className="border border-gray-300 px-2 py-1 text-center"><Math tex="x_1 + x_2 = -\dfrac{b}{a}" />，<Math tex="x_1 \cdot x_2 = \dfrac{c}{a}" /></td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1 font-bold">闭区间最值</td>
                <td colSpan={2} className="border border-gray-300 px-2 py-1 text-center">比较对称轴与区间的位置，代入端点和顶点</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-2 py-1 font-bold">绝对值</td>
                <td colSpan={2} className="border border-gray-300 px-2 py-1 text-center"><Math tex="y = |f(x)|" />：x 轴下方翻折上去，零点处 <Math tex="y = 0" />，单调区间翻倍</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

        </div>
      </LessonLayout>
    </div>
  );
}
