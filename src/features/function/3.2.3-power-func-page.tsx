import { Mafs, Coordinates, Plot, Point } from 'mafs';
import { Math, PageHeader, PracticeCard, ExportButton, UnifiedDebugToggle } from '@/components/shared';
import { elemFuncPractice4 } from './data/3.2.3/3.2.3-power-func-practice';
import { usePrintMode } from '@/hooks';
import { PowerFuncAnswers, powerFuncExplanations } from './3.2.3-power-func-answers';

export function PowerFuncPage() {
  const { isPrinting, printOptions } = usePrintMode();

  return (
    <div>
      <PageHeader
        stage="第三阶段 · 函数思维"
        title="3.2.3 幂函数"
        tags={[
          { label: '难度 ★★☆☆☆', color: 'amber' },
          { label: '必考', color: 'blue' },
          { label: '约2小时', color: 'purple' },
        ]}
      />

      <div className="flex justify-end gap-2 print:hidden">
        <UnifiedDebugToggle />
        <ExportButton title="3.2.3 幂函数" />
      </div>

      <div className="space-y-0 text-[0.9rem] text-gray-800 mt-2">

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">你其实早就认识幂函数了！</div>
              <div className="px-3 py-0.5">
                <p><Math tex="y = x" />（正比例函数）、<Math tex="y = x^2" />（抛物线）、<Math tex="y = \frac{1}{x}" />（反比例）—— 这些都是<strong>幂函数</strong>！</p>
                <p>它们的共同特点：<strong>底数是 <Math tex="x" />（变量）</strong>，指数是一个<strong>固定的常数</strong></p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">幂函数的标准形式</div>
              <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50 text-center">
                <Math tex="y = x^{\alpha} \quad (\alpha \text{ 是常数})" />
              </div>
              <div className="px-3 py-0.5">
                <p><Math tex="x" /> 是底数（<strong>变量</strong>），<Math tex="\alpha" /> 是指数（<strong>常数</strong>）</p>
                <p><strong>系数必须是 <Math tex="1" /></strong>：形如 <Math tex="y = 2x^2" />、<Math tex="y = -x^2" /> 的都不是幂函数，也不能有 <Math tex="+1" />、<Math tex="-3" /> 等加减项</p>
                <p>和指数函数 <Math tex="y = a^x" /> 正好<strong>反过来</strong>：指数函数底数是常数、指数是变量</p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">幂函数 vs 指数函数长得很像，怎么区分？</div>
              <div className="px-3 py-0.5">
                <p><strong>指数函数</strong> <Math tex="y = 2^x" />：底数是常数（<Math tex="2" />），指数是变量（<Math tex="x" />），即 <strong>常数在下</strong></p>
                <p><strong>幂函数</strong> <Math tex="y = x^2" />：底数是变量（<Math tex="x" />），指数是常数（<Math tex="2" />），即 <strong>常数在上</strong></p>
                <p className="font-bold">口诀：常数在上 = 幂函数，常数在下 = 指数函数</p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">高中常考的 5 种幂函数（都是老朋友）</div>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-2 py-1"><Math tex="\alpha" /></th>
                    <th className="border border-gray-300 px-2 py-1 text-center">函数</th>
                    <th className="border border-gray-300 px-2 py-1 text-center">你认识它吗？</th>
                    <th className="border border-gray-300 px-2 py-1 text-center">定义域</th>
                    <th className="border border-gray-300 px-2 py-1 text-center">在 <Math tex="(0,+\infty)" /></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="1" /></td>
                    <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="y = x" /></td>
                    <td className="border border-gray-300 px-2 py-1">正比例函数（直线）</td>
                    <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="\mathbb{R}" /></td>
                    <td className="border border-gray-300 px-2 py-1 text-center text-blue-700">增</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="2" /></td>
                    <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="y = x^2" /></td>
                    <td className="border border-gray-300 px-2 py-1">抛物线（二次函数）</td>
                    <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="\mathbb{R}" /></td>
                    <td className="border border-gray-300 px-2 py-1 text-center text-blue-700">增</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="3" /></td>
                    <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="y = x^3" /></td>
                    <td className="border border-gray-300 px-2 py-1">三次曲线</td>
                    <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="\mathbb{R}" /></td>
                    <td className="border border-gray-300 px-2 py-1 text-center text-blue-700">增</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="\frac{1}{2}" /></td>
                    <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="y = \sqrt{x}" /></td>
                    <td className="border border-gray-300 px-2 py-1">开根号</td>
                    <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="[0, +\infty)" /></td>
                    <td className="border border-gray-300 px-2 py-1 text-center text-blue-700">增</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="-1" /></td>
                    <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="y = \dfrac{1}{x}" /></td>
                    <td className="border border-gray-300 px-2 py-1">反比例函数</td>
                    <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="x \neq 0" /></td>
                    <td className="border border-gray-300 px-2 py-1 text-center text-red-600">减</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">为什么定义域不统一？</div>
              <div className="px-3 py-0.5">
                <p><Math tex="y = x^2" />：任何数都能平方 <Math tex="\Longrightarrow" /> 定义域 <Math tex="\mathbb{R}" /></p>
                <p><Math tex="y = \sqrt{x}" />：负数不能开根号 <Math tex="\Longrightarrow" /> 定义域 <Math tex="[0, +\infty)" /></p>
                <p><Math tex="y = \frac{1}{x}" />：分母不能为 <Math tex="0" /> <Math tex="\Longrightarrow" /> 定义域 <Math tex="x \neq 0" /></p>
                <p className="font-bold">结论：幂函数的定义域取决于 <Math tex="\alpha" /> 的值，没有统一答案！但都在 <Math tex="(0,+\infty)" /> 上有定义</p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">5种幂函数的图像长什么样？</div>
              <div className="grid grid-cols-5 gap-1 p-1">
                <div className="rounded overflow-hidden border border-gray-200 text-center">
                  <Mafs viewBox={{ x: [-2, 3], y: [-2, 3] }} height={100}>
                    <Coordinates.Cartesian xAxis={{ lines: false, labels: () => '' }} yAxis={{ lines: false, labels: () => '' }} />
                    <Plot.OfX y={(x: number) => x} color="#6b7280" weight={2.5} />
                    <Point x={1} y={1} color="#ef4444" />
                  </Mafs>
                  <p className="text-xs py-0.5"><Math tex="y = x" /></p>
                </div>
                <div className="rounded overflow-hidden border border-blue-200 text-center">
                  <Mafs viewBox={{ x: [-2, 2], y: [-0.5, 4] }} height={100}>
                    <Coordinates.Cartesian xAxis={{ lines: false, labels: () => '' }} yAxis={{ lines: false, labels: () => '' }} />
                    <Plot.OfX y={(x: number) => x ** 2} color="#3b82f6" weight={2.5} />
                    <Point x={1} y={1} color="#ef4444" />
                  </Mafs>
                  <p className="text-xs py-0.5"><Math tex="y = x^2" /></p>
                </div>
                <div className="rounded overflow-hidden border border-purple-200 text-center">
                  <Mafs viewBox={{ x: [-1.5, 1.5], y: [-3, 3] }} height={100}>
                    <Coordinates.Cartesian xAxis={{ lines: false, labels: () => '' }} yAxis={{ lines: false, labels: () => '' }} />
                    <Plot.OfX y={(x: number) => x ** 3} color="#8b5cf6" weight={2.5} />
                    <Point x={1} y={1} color="#ef4444" />
                  </Mafs>
                  <p className="text-xs py-0.5"><Math tex="y = x^3" /></p>
                </div>
                <div className="rounded overflow-hidden border border-green-200 text-center">
                  <Mafs viewBox={{ x: [-0.5, 4], y: [-0.5, 3] }} height={100}>
                    <Coordinates.Cartesian xAxis={{ lines: false, labels: () => '' }} yAxis={{ lines: false, labels: () => '' }} />
                    <Plot.OfX y={(x: number) => x > 0 ? x ** 0.5 : NaN} color="#22c55e" weight={2.5} />
                    <Point x={1} y={1} color="#ef4444" />
                  </Mafs>
                  <p className="text-xs py-0.5"><Math tex="y = \sqrt{x}" /></p>
                </div>
                <div className="rounded overflow-hidden border border-red-200 text-center">
                  <Mafs viewBox={{ x: [-0.5, 4], y: [-1, 5] }} height={100}>
                    <Coordinates.Cartesian xAxis={{ lines: false, labels: () => '' }} yAxis={{ lines: false, labels: () => '' }} />
                    <Plot.OfX y={(x: number) => x > 0.08 ? 1 / x : NaN} color="#ef4444" weight={2.5} />
                    <Point x={1} y={1} color="#ef4444" />
                  </Mafs>
                  <p className="text-xs py-0.5"><Math tex="y = \frac{1}{x}" /></p>
                </div>
              </div>
              <div className="px-3 py-0.5 border-t border-gray-300 text-center">红色点 = 公共定点 <Math tex="(1, 1)" />，前4个 <Math tex="\alpha > 0" /> 递增，最后1个 <Math tex="\alpha < 0" /> 递减</div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">幂函数核心性质（4条铁律）</div>
              <div className="px-3 py-0.5">
                <p><strong>①</strong> 所有幂函数在 <Math tex="(0, +\infty)" /> 上都有定义（不管 <Math tex="\alpha" /> 是多少）</p>
                <p><strong>②</strong> 所有幂函数都过点 <Math tex="(1, 1)" />（因为 <Math tex="1^{\alpha} = 1" />，1 的任何次方都是 1）</p>
                <p><strong>③</strong> <Math tex="\alpha > 0" /> → 在 <Math tex="(0, +\infty)" /> 上<strong>递增</strong>（<Math tex="\alpha = 1, 2, 3, \frac{1}{2}" /> 都是增函数）</p>
                <p><strong>④</strong> <Math tex="\alpha < 0" /> → 在 <Math tex="(0, +\infty)" /> 上<strong>递减</strong>（如 <Math tex="\alpha = -1" /> 的 <Math tex="\frac{1}{x}" />）</p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-3 py-0.5 bg-blue-50 text-center">
                <p><strong>一句话记住增减：<Math tex="\alpha" /> 为正 → 增函数，<Math tex="\alpha" /> 为负 → 减函数（在第一象限）</strong></p>
                <p>和前面的规则完全不同：幂函数<strong>看 <Math tex="\alpha" /> 的正负</strong>，不看底数！</p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">三种函数的"定点"对比（必记！）</div>
              <div className="grid grid-cols-3 border-t border-gray-300">
                <div className="px-3 py-0.5 text-center border-r border-gray-300">指数函数过 <Math tex="(0, 1)" /></div>
                <div className="px-3 py-0.5 text-center border-r border-gray-300">对数函数过 <Math tex="(1, 0)" /></div>
                <div className="px-3 py-0.5 text-center">幂函数过 <Math tex="(1, 1)" /></div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-0.5 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">综合例题</div>
              <div className="px-3 py-0.5">
                <p><strong>例1.</strong> 比较 <Math tex="3^{0.5}" /> 和 <Math tex="0.5^3" /> 的大小</p>
                <p className="pl-4"><Math tex="3^{0.5} = \sqrt{3} \approx 1.73" />（底数 <Math tex="> 1" /> 且指数 <Math tex="> 0" />，所以结果 <Math tex="> 1" />）</p>
                <p className="pl-4"><Math tex="0.5^3 = 0.125" />（底数在 <Math tex="(0, 1)" /> 且指数 <Math tex="> 0" />，所以结果 <Math tex="< 1" />）</p>
                <p className="pl-4 font-bold">结论：<Math tex="3^{0.5} > 1 > 0.5^3" />（技巧：和 1 比较！）</p>
              </div>
              <div className="px-3 py-0.5 border-t border-gray-300">
                <p><strong>例2.</strong> 判断 <Math tex="y = x^{-2}" /> 在 <Math tex="(0, +\infty)" /> 上的单调性</p>
                <p className="pl-4"><Math tex="\alpha = -2 < 0" /> → 在 <Math tex="(0, +\infty)" /> 上是<strong>减函数</strong></p>
                <p className="pl-4">验证：<Math tex="x=1 \to y=1" />，<Math tex="x=2 \to y=0.25" />，<Math tex="x=3 \to y \approx 0.11" />，越来越小</p>
              </div>
              <div className="px-3 py-0.5 border-t border-gray-300">
                <p><strong>例3.</strong> 判断 <Math tex="y = 3x^2" /> 是不是幂函数</p>
                <p className="pl-4">不是！幂函数要求 <Math tex="y = x^{\alpha}" /> 形式，系数只能是 <Math tex="1" />。这里系数是 <Math tex="3" /></p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">四种基本初等函数大总结</div>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-2 py-1">函数</th>
                    <th className="border border-gray-300 px-2 py-1">形式</th>
                    <th className="border border-gray-300 px-2 py-1">谁是变量？</th>
                    <th className="border border-gray-300 px-2 py-1">过定点</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-300 px-2 py-1">指数函数</td><td className="border border-gray-300 px-2 py-1 text-center"><Math tex="y = a^x" /></td><td className="border border-gray-300 px-2 py-1"><Math tex="x" /> 在指数位置</td><td className="border border-gray-300 px-2 py-1 text-center"><Math tex="(0, 1)" /></td></tr>
                  <tr><td className="border border-gray-300 px-2 py-1">对数函数</td><td className="border border-gray-300 px-2 py-1 text-center"><Math tex="y = \log_a x" /></td><td className="border border-gray-300 px-2 py-1"><Math tex="x" /> 在真数位置</td><td className="border border-gray-300 px-2 py-1 text-center"><Math tex="(1, 0)" /></td></tr>
                  <tr><td className="border border-gray-300 px-2 py-1">幂函数</td><td className="border border-gray-300 px-2 py-1 text-center"><Math tex="y = x^{\alpha}" /></td><td className="border border-gray-300 px-2 py-1"><Math tex="x" /> 在底数位置</td><td className="border border-gray-300 px-2 py-1 text-center"><Math tex="(1, 1)" /></td></tr>
                </tbody>
              </table>
            </div>

            <div className="text-base">
              <PracticeCard
                title="即时练习：综合（10题，覆盖对数运算 / 指数 / 对数 / 幂函数）"
                questions={elemFuncPractice4}
                optionCols={4}
                printOptionCols={4}
                explanations={powerFuncExplanations}
              />
            </div>

            {/* ════════════════════════════════════════════════════════════ */}
            {/* 大总结卡片 */}
            {/* ════════════════════════════════════════════════════════════ */}
            <div className="border-2 border-gray-500 rounded overflow-hidden mt-2">
              <div className="px-3 py-1 font-bold text-gray-900 border-b-2 border-gray-500 bg-amber-50 text-center">3.2 基本初等函数 · 一表全掌握</div>

              {/* 对数公式速记 */}
              <div className="px-2 py-0.5 font-bold text-gray-800 border-b border-gray-300 bg-gray-100">对数公式速记（底数 <Math tex="a > 0,\ a \neq 1" />，真数 <Math tex="M, N > 0" />）</div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 px-3 py-1">
                <p><strong>积</strong>：<Math tex="\log_a(MN) = \log_a M + \log_a N" /></p>
                <p><strong>商</strong>：<Math tex="\log_a\dfrac{M}{N} = \log_a M - \log_a N" /></p>
                <p><strong>幂</strong>：<Math tex="\log_a M^n = n\log_a M" /></p>
                <p><strong>换底</strong>：<Math tex="\log_a N = \dfrac{\log_c N}{\log_c a}" /></p>
                <p><strong>恒等式</strong>：<Math tex="a^{\log_a N} = N" /></p>
                <p><strong>恒等式</strong>：<Math tex="\log_a a^n = n" /></p>
              </div>

              {/* 三大函数对比表 */}
              <div className="px-2 py-0.5 font-bold text-gray-800 border-y border-gray-300 bg-gray-100">三大函数对比</div>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-2 py-0.5 text-left w-28">项目</th>
                    <th className="border border-gray-300 px-2 py-0.5 text-center">指数函数 <Math tex="y = a^x" /></th>
                    <th className="border border-gray-300 px-2 py-0.5 text-center">对数函数 <Math tex="y = \log_a x" /></th>
                    <th className="border border-gray-300 px-2 py-0.5 text-center">幂函数 <Math tex="y = x^{\alpha}" /></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-2 py-0.5 font-bold">定义域</td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="\mathbb{R}" /></td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="(0, +\infty)" /></td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center">由 <Math tex="\alpha" /> 决定（恒含 <Math tex="(0,+\infty)" />）</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-0.5 font-bold">值域</td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="(0, +\infty)" /></td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="\mathbb{R}" /></td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center">由 <Math tex="\alpha" /> 决定</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-0.5 font-bold">过定点</td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center font-bold text-blue-700"><Math tex="(0, 1)" /></td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center font-bold text-blue-700"><Math tex="(1, 0)" /></td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center font-bold text-blue-700"><Math tex="(1, 1)" /></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-0.5 font-bold">参数限制</td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="a > 0,\ a \neq 1" /></td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="a > 0,\ a \neq 1" /></td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="\alpha" /> 为常数（系数必须为 1）</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-0.5 font-bold">增函数条件</td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="a > 1" /></td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="a > 1" /></td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="\alpha > 0" />（在 <Math tex="(0, +\infty)" />）</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-0.5 font-bold">减函数条件</td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="0 < a < 1" /></td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="0 < a < 1" /></td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="\alpha < 0" />（在 <Math tex="(0, +\infty)" />）</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-0.5 font-bold">图像特征</td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center">永远在 <Math tex="x" /> 轴上方，不穿过</td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center">只在 <Math tex="y" /> 轴右侧，会穿过 <Math tex="x" /> 轴</td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center">都经过 <Math tex="(1, 1)" /> 且在第一象限有定义</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-0.5 font-bold">变量位置</td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="x" /> 在指数位置（常数在下）</td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="x" /> 在真数位置</td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="x" /> 在底数位置（常数在上）</td>
                  </tr>
                </tbody>
              </table>

              {/* 易错/关键口诀 */}
              <div className="px-2 py-0.5 font-bold text-gray-800 border-y border-gray-300 bg-gray-100">三条高频考点口诀</div>
              <div className="px-3 py-1">
                <p><strong>①</strong> 指数和对数看<strong>底数 <Math tex="a" /></strong> 判单调，幂函数看<strong>指数 <Math tex="\alpha" /></strong> 判单调</p>
                <p><strong>②</strong> 三类定点别搞混：指数过 <Math tex="(0,1)" />、对数过 <Math tex="(1,0)" />、幂函数过 <Math tex="(1,1)" /></p>
                <p><strong>③</strong> 指数与对数<strong>互为逆运算</strong>：<Math tex="a^b = N \;\Longleftrightarrow\; \log_a N = b" />；恒等式 <Math tex="a^{\log_a N} = N" /> 和 <Math tex="\log_a a^n = n" /> 是高考"送分题"</p>
              </div>
            </div>

      </div>

      {isPrinting && printOptions.showAnswers && <PowerFuncAnswers />}
    </div>
  );
}
