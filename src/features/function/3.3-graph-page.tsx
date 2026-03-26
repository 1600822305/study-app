import { Math, Collapsible, SpeakButton, QuizPanel, PageHeader, LessonLayout, CalloutCard, PracticeCard, ExportButton, PageBreak } from '@/components/shared';
import { Mafs, Coordinates, Plot, Point, Line, Text as MafsText } from 'mafs';
import { graphNarrations } from './data/3.3/3.3-graph-narrations';
import { graphProgressItems } from './data/3.3/3.3-graph-progress';
import { graphPractice1, graphPractice2, graphPractice3, graphPractice4 } from './data/3.3/3.3-graph-practice';
import { graphQuizQuestions } from './data/3.3/3.3-graph-quiz';
import { useProgress, usePrintMode } from '@/hooks';
import { scrollToId } from '@/lib/scroll';
import { FunctionGraphAnswers, functionGraphExplanations } from './3.3-graph-answers';

const NativeMath = globalThis.Math;

export function FunctionGraphPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('func-graph', graphProgressItems);
  const { isPrinting, printOptions } = usePrintMode();

  return (
    <div>
      <PageHeader
        stage="第三阶段 · 函数思维"
        title="3.3 函数图像与零点"
        narration={graphNarrations.intro}
        subtitle="零点概念·存在性定理·二分法·数形结合 — 高考常考小题"
        tags={[
          { label: '难度 ★★★☆☆', color: 'amber' },
          { label: '常考小题', color: 'blue' },
          { label: '约4-6小时', color: 'purple' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="3.3 函数图像与零点" />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-2 mb-1">
        <p className="font-bold text-gray-800 mb-1">📋 知识地图</p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 text-gray-600">
          <button onClick={() => scrollToId('fg-zero-concept')} className="block text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">一、零点的概念（零点 ⟺ 方程根 ⟺ 图像交x轴）</button>
          <button onClick={() => scrollToId('fg-existence')} className="block text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">二、零点存在性定理（连续+异号→有零点）</button>
          <button onClick={() => scrollToId('fg-bisection')} className="block text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">三、二分法求近似解（猜数字游戏）</button>
          <button onClick={() => scrollToId('fg-graph-method')} className="block text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">四、数形结合求零点个数（画图数交点）</button>
          <button onClick={() => scrollToId('fg-quiz')} className="block text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">五、高考真题自测（8题）</button>
        </div>
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* Section 1: 零点的概念 */}
      {/* ════════════════════════════════════════════════════════════ */}
      <section id="fg-zero-concept" className="mb-2 scroll-mt-4">
        <Collapsible title="一、零点的概念 — 🎯 理解零点=数，不是点" defaultOpen storageKey="func-graph:zero-concept" headerExtra={<SpeakButton text={graphNarrations.zeroPoint} />}>
          <div className="space-y-0 text-gray-700">

            {/* 什么是零点 */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-2">
              <p className="leading-7"><strong className="text-amber-800">🌊 零点 = 让函数"归零"的那个 x</strong> — 想象函数图像是一条河的水位线，<strong>零点就是水位线和地面（x 轴）交叉的地方</strong>。在那个位置，水位刚好是 0。零点不是一个"点"，而是一个 <strong>x 的值</strong>。</p>
            </div>

            {/* 严格定义 */}
            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-1">📖 零点的定义</p>
              <div className="leading-8">
                <p>对于函数 <Math tex="y = f(x)" />，使得 <Math tex="f(x) = 0" /> 的实数 <Math tex="x" /> 叫做函数的<strong>零点</strong>。</p>
                <p className="mt-1">零点是<strong>使函数值为 0 的自变量取值</strong>，不是图像上的点 <Math tex="(x, 0)" />。</p>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-2">
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="font-bold text-gray-700 mb-1">例1（一次函数）</p>
                  <p className="leading-7"><Math tex="f(x) = 2x - 6" /> 的零点？</p>
                  <p className="leading-7 ml-4"><Math tex="2x - 6 = 0 \Rightarrow x = 3" /></p>
                  <p className="leading-7">零点是 <Math tex="x = 3" />（一个数）</p>
                  <div className="rounded-lg overflow-hidden border border-orange-200 mt-1">
                    <Mafs viewBox={{ x: [-1, 6], y: [-4, 4] }} height={140}>
                      <Coordinates.Cartesian xAxis={{ lines: false, labels: (n) => [0, 3].includes(n) ? String(n) : '' }} yAxis={{ lines: false, labels: (n) => n === 0 ? '' : (n % 2 === 0 ? String(n) : '') }} />
                      <Plot.OfX y={(x: number) => 2 * x - 6} color="#f97316" weight={2.5} />
                      <Point x={3} y={0} color="#ef4444" />
                    </Mafs>
                    <p className="text-center text-gray-500 py-0.5">零点 x = 3</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="font-bold text-gray-700 mb-1">例2（二次函数）</p>
                  <p className="leading-7"><Math tex="f(x) = x^2 - 4" /> 的零点？</p>
                  <p className="leading-7 ml-4"><Math tex="x^2 - 4 = 0 \Rightarrow x = \pm 2" /></p>
                  <p className="leading-7">零点是 <Math tex="x = 2" /> 和 <Math tex="x = -2" /></p>
                  <div className="rounded-lg overflow-hidden border border-blue-200 mt-1">
                    <Mafs viewBox={{ x: [-4, 4], y: [-5, 5] }} height={140}>
                      <Coordinates.Cartesian xAxis={{ lines: false, labels: (n) => [-2, 0, 2].includes(n) ? String(n) : '' }} yAxis={{ lines: false, labels: (n) => n === 0 ? '' : (n % 2 === 0 ? String(n) : '') }} />
                      <Plot.OfX y={(x: number) => x * x - 4} color="#3b82f6" weight={2.5} />
                      <Point x={2} y={0} color="#ef4444" />
                      <Point x={-2} y={0} color="#ef4444" />
                    </Mafs>
                    <p className="text-center text-gray-500 py-0.5">零点 x = 2 和 x = -2</p>
                  </div>
                </div>
              </div>
              <p className="text-red-700 font-bold mt-2">⚠️ 零点是<strong>数</strong>，不是<strong>点</strong>！不能写成 (3,0) 或 (2,0)，这是最常见的错误</p>
              <p className="text-gray-600"><strong>任何函数</strong>都可能有零点——一次函数、二次函数、指数函数、对数函数……不是二次函数的专属概念。</p>
            </div>

            {/* 三角等价关系 */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-2">
              <p className="font-bold text-blue-800 mb-1">💎 核心等价关系（数形结合的灵魂！）</p>
              <div className="leading-8">
                <p>以下三件事<strong>完全等价</strong>，说的是同一回事：</p>
                <table className="w-full text-base border-collapse mt-1">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="border border-blue-200 px-2 py-1 text-blue-700">角度</th>
                      <th className="border border-blue-200 px-2 py-1 text-center text-blue-700">说法</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-2 py-1 font-bold">函数角度</td>
                      <td className="border border-gray-200 px-2 py-1"><Math tex="f(x)" /> 有<strong>零点</strong></td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-2 py-1 font-bold">方程角度</td>
                      <td className="border border-gray-200 px-2 py-1">方程 <Math tex="f(x) = 0" /> 有<strong>实数根</strong></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-2 py-1 font-bold">图像角度</td>
                      <td className="border border-gray-200 px-2 py-1"><Math tex="y = f(x)" /> 的图像与 <strong>x 轴有交点</strong></td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-blue-700 font-bold mt-1">一句话：<strong>零点 = 方程的根 = 图像过 x 轴的位置</strong></p>
              </div>
            </div>

            {/* 二次函数零点与判别式 */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-2">
              <p className="font-bold text-green-800 mb-1">📌 二次函数零点与判别式（秒判零点个数）</p>
              <div className="leading-8">
                <p>对于 <Math tex="f(x) = ax^2 + bx + c" />（<Math tex="a \neq 0" />），用判别式 <Math tex="\Delta = b^2 - 4ac" /> 判断：</p>
                <table className="w-full text-base border-collapse mt-1">
                  <thead>
                    <tr className="bg-green-100">
                      <th className="border border-green-200 px-2 py-1 text-green-700">判别式</th>
                      <th className="border border-green-200 px-2 py-1 text-center text-green-700">零点个数</th>
                      <th className="border border-green-200 px-2 py-1 text-center text-green-700">图像与 x 轴</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-2 py-1 font-bold"><Math tex="\Delta > 0" /></td>
                      <td className="border border-gray-200 px-2 py-1 text-center"><strong>2 个</strong>不同零点</td>
                      <td className="border border-gray-200 px-2 py-1 text-center">2 个交点</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-2 py-1 font-bold"><Math tex="\Delta = 0" /></td>
                      <td className="border border-gray-200 px-2 py-1 text-center"><strong>1 个</strong>零点（重根）</td>
                      <td className="border border-gray-200 px-2 py-1 text-center">1 个交点（切线）</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-2 py-1 font-bold"><Math tex="\Delta < 0" /></td>
                      <td className="border border-gray-200 px-2 py-1 text-center"><strong>0 个</strong>零点</td>
                      <td className="border border-gray-200 px-2 py-1 text-center">不相交</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-green-800 mt-1">注意：零点个数 = 图像与 x 轴<strong>交点的个数</strong>，重根算 <strong>1 个</strong>零点（图像与 x 轴相切）。</p>
              </div>
            </div>

            {/* 练习 */}
            <PracticeCard
              title="✏️ 即时练习：零点概念（5题）"
              questions={graphPractice1}
              printOptionCols={2}
              explanations={functionGraphExplanations}
            />

            {/* 常见函数零点速查 */}
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-2">
              <p className="font-bold text-indigo-800 mb-1">📑 常见函数零点速查</p>
              <table className="w-full text-base border-collapse">
                <thead>
                  <tr className="bg-indigo-100">
                    <th className="border border-indigo-200 px-2 py-1 text-indigo-700">函数</th>
                    <th className="border border-indigo-200 px-2 py-1 text-center text-indigo-700">零点</th>
                    <th className="border border-indigo-200 px-2 py-1 text-center text-indigo-700">求法</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1"><Math tex="f(x) = kx + b" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="x = -\dfrac{b}{k}" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center">直接解方程</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-1"><Math tex="f(x) = ax^2+bx+c" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center">看 <Math tex="\Delta" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center">求根公式 / 因式分解</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1"><Math tex="f(x) = a^x - 1" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="x = 0" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="a^0 = 1" /></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-1"><Math tex="f(x) = \log_a x - 1" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="x = a" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\log_a a = 1" /></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1"><Math tex="f(x) = \ln x" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="x = 1" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\ln 1 = 0" /></td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* Section 2: 零点存在性定理 */}
      {/* ════════════════════════════════════════════════════════════ */}
      <PageBreak />
      <section id="fg-existence" className="mb-2 scroll-mt-4">
        <Collapsible title="二、零点存在性定理 — 🎯 判断零点在不在" defaultOpen storageKey="func-graph:existence" headerExtra={<SpeakButton text={graphNarrations.existenceTheorem} />}>
          <div className="space-y-2 text-gray-700">

            {/* 生活比喻 */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-2">
              <p className="leading-7"><strong className="text-amber-800">🚶 过马路比喻</strong> — 你站在马路这边（海拔 +3 米），朋友站在对面（海拔 -2 米）。你沿着一条<strong>连续不断</strong>的路走过去，<strong>一定会经过海拔 0 米的地方</strong>（路面）。函数也一样：如果两端值一正一负，中间一定有个零点。</p>
            </div>

            {/* 定理内容 */}
            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <div className="flex gap-3 items-start">
                <div className="flex-1 leading-8">
                  <p className="font-bold text-gray-800 mb-1">📖 零点存在性定理</p>
                  <p>如果函数 <Math tex="y = f(x)" /> 在 <Math tex="[a, b]" /> 上<strong>连续不断</strong>，</p>
                  <p>且 <Math tex="f(a) \cdot f(b) < 0" />（端点值<strong>异号</strong>），</p>
                  <p>那么在 <Math tex="(a, b)" /> 内<strong>至少有一个</strong>零点 <Math tex="c" />，使 <Math tex="f(c) = 0" />。</p>
                  <p className="text-purple-700 font-bold mt-1">两个条件缺一不可：<strong>① 连续 ② 异号</strong></p>
                </div>
                <div style={{ width: 220, flexShrink: 0 }} className="rounded-lg overflow-hidden border border-purple-200">
                  <Mafs viewBox={{ x: [-0.5, 3], y: [-2, 3] }} height={180}>
                    <Coordinates.Cartesian xAxis={{ lines: false, labels: (n) => n === 0 ? '' : String(n) }} yAxis={{ lines: false, labels: (n) => n === 0 ? '' : String(n) }} />
                    <Plot.OfX y={(x: number) => x * x - 2} color="#8b5cf6" weight={2.5} />
                    <Point x={1.414} y={0} color="#ef4444" />
                    <Point x={1} y={-1} color="#3b82f6" />
                    <Point x={2} y={2} color="#3b82f6" />
                    <MafsText x={0.5} y={-1.5} size={12}>f(1){'<'}0</MafsText>
                    <MafsText x={2.3} y={2.3} size={12}>f(2){'>'}0</MafsText>
                  </Mafs>
                  <p className="text-center text-gray-500 py-0.5">蓝点异号 → 红点：零点 <Math tex="\sqrt{2}" /></p>
                </div>
              </div>
            </div>

            {/* 反例 */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-2">
              <p className="font-bold text-red-800 mb-1">❌ 两个经典反例（理解"缺一不可"）</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="leading-7">
                  <p className="font-bold">反例1：异号但不连续</p>
                  <p><Math tex="f(x) = \dfrac{1}{x}" /> 在 <Math tex="[-1, 1]" /></p>
                  <p><Math tex="f(-1) \cdot f(1) = -1 < 0" /> ✓</p>
                  <p>但 <Math tex="x = 0" /> 处不连续 ✗</p>
                  <p className="text-red-700"><strong>→ 无零点！</strong></p>
                </div>
                <div className="leading-7">
                  <p className="font-bold">反例2：连续但同号</p>
                  <p><Math tex="f(x) = x^2" /> 在 <Math tex="[-1, 1]" /></p>
                  <p><Math tex="f(-1) \cdot f(1) = 1 > 0" /> ✗</p>
                  <p>但 <Math tex="x = 0" /> 处有零点</p>
                  <p className="text-red-700"><strong>→ 同号≠无零点！</strong></p>
                </div>
              </div>
              <p className="text-red-700 font-bold mt-1">定理是<strong>充分不必要</strong>条件：满足→有零点，不满足→不确定</p>
            </div>

            {/* 变号零点 vs 不变号零点 */}
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-2">
              <p className="font-bold text-indigo-800 mb-1">📌 变号零点 vs 不变号零点</p>
              <div className="grid grid-cols-2 gap-3 leading-7">
                <div>
                  <p><strong>变号零点</strong>：零点两侧函数值<strong>异号</strong></p>
                  <p>例：<Math tex="y = x^3" /> 在 <Math tex="x = 0" /> 处</p>
                  <p>左边负、右边正 → 定理<strong>能检测到</strong></p>
                </div>
                <div>
                  <p><strong>不变号零点</strong>：零点两侧函数值<strong>同号</strong></p>
                  <p>例：<Math tex="y = x^2" /> 在 <Math tex="x = 0" /> 处</p>
                  <p>两边都是正 → 定理<strong>检测不到</strong></p>
                </div>
              </div>
            </div>

            {/* 使用步骤 */}
            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-1">📝 零点存在性定理使用三步法</p>
              <div className="leading-8">
                <p><strong>第①步：检查连续性</strong> — 函数在区间 <Math tex="[a, b]" /> 上是否连续不断？（分式、对数等注意定义域）</p>
                <p><strong>第②步：计算端点值</strong> — 分别算 <Math tex="f(a)" /> 和 <Math tex="f(b)" /> 的值</p>
                <p><strong>第③步：判断异号</strong> — 检查 <Math tex="f(a) \cdot f(b) < 0" /> 是否成立</p>
                <p className="text-purple-700 font-bold mt-1">三步都满足 → 区间 <Math tex="(a, b)" /> 内<strong>至少有一个</strong>零点</p>
              </div>
            </div>

            {/* 高考易错 */}
            <CalloutCard title="高考易错点" variant="warning">
              <div className="grid grid-cols-2 gap-3 leading-7">
                <div>
                  <p className="font-bold">陷阱1：忘记检查连续性</p>
                  <p>看到异号就选"有零点"，忽略函数可能在区间内有间断点（如 <Math tex="\dfrac{1}{x}" />）</p>
                </div>
                <div>
                  <p className="font-bold">陷阱2：同号就选"无零点"</p>
                  <p>定理不满足 ≠ 无零点！<Math tex="f(x) = x^2" /> 在 <Math tex="[-1,1]" /> 同号，但 <Math tex="x=0" /> 是零点</p>
                </div>
              </div>
            </CalloutCard>

            {/* 练习 */}
            <PageBreak />
            <PracticeCard
              title="✏️ 即时练习：零点存在性定理（5题）"
              questions={graphPractice2}
              printOptionCols={2}
              explanations={functionGraphExplanations}
            />

            {/* 定理速查 */}
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-2">
              <p className="font-bold text-teal-800 mb-1">📑 零点存在性定理速查</p>
              <table className="w-full text-base border-collapse">
                <thead>
                  <tr className="bg-teal-100">
                    <th className="border border-teal-200 px-2 py-1 text-teal-700">条件</th>
                    <th className="border border-teal-200 px-2 py-1 text-center text-teal-700">结论</th>
                    <th className="border border-teal-200 px-2 py-1 text-center text-teal-700">举例</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1">连续 + 异号</td>
                    <td className="border border-gray-200 px-2 py-1 text-center font-bold text-green-700">一定有零点</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="x^3-1" /> 在 <Math tex="[0,2]" /></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-1">连续 + 同号</td>
                    <td className="border border-gray-200 px-2 py-1 text-center font-bold text-amber-700">不确定</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="x^2" /> 在 <Math tex="[-1,1]" /> 有零点</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1">不连续 + 异号</td>
                    <td className="border border-gray-200 px-2 py-1 text-center font-bold text-amber-700">不确定</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\frac{1}{x}" /> 在 <Math tex="[-1,1]" /> 无零点</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-1">不连续 + 同号</td>
                    <td className="border border-gray-200 px-2 py-1 text-center font-bold text-amber-700">不确定</td>
                    <td className="border border-gray-200 px-2 py-1 text-center">无法用定理判断</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-teal-800 mt-1">只有<strong>第一行</strong>能确定结论，其余三种都需要另外分析！</p>
            </div>

            {/* 实战演练 */}
            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-1">🔍 实战演示：判断 <Math tex="f(x) = \ln x + 2x - 6" /> 在 <Math tex="(2, 3)" /> 内是否有零点</p>
              <div className="leading-8">
                <p><strong>第①步</strong>：<Math tex="\ln x" /> 和 <Math tex="2x - 6" /> 在 <Math tex="[2, 3]" /> 上都连续 → <Math tex="f(x)" /> 连续 ✓</p>
                <p><strong>第②步</strong>：<Math tex="f(2) = \ln 2 + 4 - 6 = \ln 2 - 2 \approx -1.31 < 0" /></p>
                <p className="ml-[3.2rem]"><Math tex="f(3) = \ln 3 + 6 - 6 = \ln 3 \approx 1.10 > 0" /></p>
                <p><strong>第③步</strong>：<Math tex="f(2) \cdot f(3) < 0" /> → 异号 ✓</p>
                <p className="text-green-700 font-bold mt-1">结论：<Math tex="(2, 3)" /> 内<strong>至少有一个</strong>零点 ✓</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* Section 3: 二分法 */}
      {/* ════════════════════════════════════════════════════════════ */}
      <PageBreak />
      <section id="fg-bisection" className="mb-2 scroll-mt-4">
        <Collapsible title="三、二分法求近似解 — 🎯 一步步逼近零点" defaultOpen storageKey="func-graph:bisection" headerExtra={<SpeakButton text={graphNarrations.bisection} />}>
          <div className="space-y-2 text-gray-700">

            {/* 生活比喻 */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-2">
              <p className="leading-7"><strong className="text-amber-800">🎯 猜数字游戏</strong> — 老师想了一个 1~100 之间的整数，你每次猜一个数，老师只说"大了"或"小了"。最聪明的策略是什么？<strong>每次猜中间值！</strong>先猜 50，大了就猜 25，小了就猜 75……最多 7 次就能猜到。二分法就是这个思路。</p>
            </div>

            {/* 二分法步骤 */}
            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-1">📖 二分法步骤</p>
              <div className="leading-8">
                <p><strong>前提</strong>：<Math tex="f(x)" /> 在 <Math tex="[a, b]" /> 上连续，且 <Math tex="f(a) \cdot f(b) < 0" /></p>
                <p className="mt-1"><strong>第①步</strong>：取中点 <Math tex="m = \dfrac{a + b}{2}" />，算出 <Math tex="f(m)" /></p>
                <p><strong>第②步</strong>：判断 <Math tex="f(m)" /> 的情况：</p>
                <p className="ml-4">• 若 <Math tex="f(m) = 0" />，<Math tex="m" /> 就是零点，结束</p>
                <p className="ml-4">• 若 <Math tex="f(a) \cdot f(m) < 0" />，零点在 <Math tex="(a, m)" /> 内，令 <Math tex="b = m" /></p>
                <p className="ml-4">• 若 <Math tex="f(m) \cdot f(b) < 0" />，零点在 <Math tex="(m, b)" /> 内，令 <Math tex="a = m" /></p>
                <p><strong>第③步</strong>：重复①②，直到区间足够小（达到精度要求）</p>
              </div>
            </div>

            {/* 示例 */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-2">
              <p className="font-bold text-green-800 mb-1">📐 例题：用二分法求 <Math tex="x^3 - 2 = 0" /> 在 <Math tex="(1, 2)" /> 内的近似解</p>
              <div className="flex gap-3 items-start">
                <div className="flex-1 leading-8">
                  <p><Math tex="f(x) = x^3 - 2" />，<Math tex="f(1) = -1 < 0" />，<Math tex="f(2) = 6 > 0" /></p>
                  <table className="w-full text-base border-collapse mt-1">
                    <thead>
                      <tr className="bg-green-100">
                        <th className="border border-green-200 px-1.5 py-0.5 text-green-700">次数</th>
                        <th className="border border-green-200 px-1.5 py-0.5 text-center text-green-700">中点 m</th>
                        <th className="border border-green-200 px-1.5 py-0.5 text-center text-green-700">f(m)</th>
                        <th className="border border-green-200 px-1.5 py-0.5 text-center text-green-700">新区间</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 px-1.5 py-0.5 text-center">1</td>
                        <td className="border border-gray-200 px-1.5 py-0.5 text-center">1.5</td>
                        <td className="border border-gray-200 px-1.5 py-0.5 text-center text-blue-600">1.375 {'>'} 0</td>
                        <td className="border border-gray-200 px-1.5 py-0.5 text-center">(1, 1.5)</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-200 px-1.5 py-0.5 text-center">2</td>
                        <td className="border border-gray-200 px-1.5 py-0.5 text-center">1.25</td>
                        <td className="border border-gray-200 px-1.5 py-0.5 text-center text-red-600">-0.047 {'<'} 0</td>
                        <td className="border border-gray-200 px-1.5 py-0.5 text-center">(1.25, 1.5)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-1.5 py-0.5 text-center">3</td>
                        <td className="border border-gray-200 px-1.5 py-0.5 text-center">1.375</td>
                        <td className="border border-gray-200 px-1.5 py-0.5 text-center text-blue-600">0.60 {'>'} 0</td>
                        <td className="border border-gray-200 px-1.5 py-0.5 text-center">(1.25, 1.375)</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="mt-1">精确到 0.1：零点 <Math tex="\approx 1.26" />（实际值 <Math tex="\sqrt[3]{2} \approx 1.2599" />）</p>
                </div>
                <div style={{ width: 200, flexShrink: 0 }} className="rounded-lg overflow-hidden border border-green-200">
                  <Mafs viewBox={{ x: [0.5, 2.5], y: [-2, 7] }} height={180}>
                    <Coordinates.Cartesian xAxis={{ lines: false, labels: (n) => n === 0 ? '' : String(n) }} yAxis={{ lines: false, labels: (n) => n === 0 ? '' : String(n) }} />
                    <Plot.OfX y={(x: number) => x * x * x - 2} color="#22c55e" weight={2.5} />
                    <Point x={1.2599} y={0} color="#ef4444" />
                    <Line.Segment point1={[1, -2]} point2={[1, 7]} color="#94a3b8" weight={1} opacity={0.5} />
                    <Line.Segment point1={[2, -2]} point2={[2, 7]} color="#94a3b8" weight={1} opacity={0.5} />
                  </Mafs>
                  <p className="text-center text-gray-500 py-0.5">红点：零点 <Math tex="\sqrt[3]{2}" /></p>
                </div>
              </div>
            </div>

            {/* 精度与次数 */}
            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-1">📊 二分法精度与次数对照表</p>
              <p className="text-gray-600 mb-1">初始区间长度为 1 时，二分 n 次后区间长度 = <Math tex="\dfrac{1}{2^n}" /></p>
              <table className="w-full text-base border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-200 px-2 py-1 text-gray-700">二分次数</th>
                    <th className="border border-gray-200 px-2 py-1 text-center text-gray-700">区间长度</th>
                    <th className="border border-gray-200 px-2 py-1 text-center text-gray-700">精确到</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1 text-center">3 次</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\frac{1}{8} = 0.125" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center">0.1</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-1 text-center">7 次</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\frac{1}{128} \approx 0.0078" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center">0.01</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1 text-center">10 次</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\frac{1}{1024} \approx 0.001" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center">0.001</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-gray-600 mt-1">高考一般只要求精确到 0.1，所以最多二分 <strong>3~4 次</strong>就够了。</p>
            </div>

            {/* 二分法适用条件 */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-2">
              <p className="font-bold text-orange-800 mb-1">🔑 二分法使用前提（缺一不可）</p>
              <div className="grid grid-cols-3 gap-3 leading-7">
                <div className="text-center">
                  <p className="font-bold">① 连续</p>
                  <p>函数在区间上连续不断</p>
                </div>
                <div className="text-center">
                  <p className="font-bold">② 异号</p>
                  <p><Math tex="f(a) \cdot f(b) < 0" /></p>
                </div>
                <div className="text-center">
                  <p className="font-bold">③ 变号零点</p>
                  <p>零点两侧函数值异号</p>
                </div>
              </div>
              <p className="text-orange-700 mt-1"><strong>注意</strong>：<Math tex="y = x^2" /> 在 <Math tex="x = 0" /> 的零点是不变号零点，二分法<strong>找不到</strong>它！</p>
            </div>

            {/* 练习 */}
            <PageBreak />
            <PracticeCard
              title="✏️ 即时练习：二分法（5题）"
              questions={graphPractice3}
              printOptionCols={2}
              explanations={functionGraphExplanations}
            />

            <CalloutCard variant="warning" title="⚠️ 易错提醒" compact>
              <div className="space-y-0.5">
                <p><strong>二分法只能求近似值！</strong> 不能求精确值（但精度可以任意高）</p>
                <p><strong>每次区间缩小一半！</strong> n 次后区间长度 = 原来的 <Math tex="\dfrac{1}{2^n}" /></p>
                <p><strong>前提是零点存在性定理的两个条件！</strong> 连续 + 异号</p>
              </div>
            </CalloutCard>

            {/* 实战例题 */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-2">
                <p className="font-bold text-blue-800 mb-1">🔍 实战1：求 <Math tex="2^x = 3" /> 在 <Math tex="(1,2)" /> 内的近似解（精确到 0.1）</p>
                <div className="leading-7">
                  <p>构造 <Math tex="f(x) = 2^x - 3" /></p>
                  <p><Math tex="f(1) = -1 < 0" />，<Math tex="f(2) = 1 > 0" /></p>
                  <table className="w-full text-sm border-collapse mt-1">
                    <tbody>
                      <tr className="bg-blue-100">
                        <td className="border border-blue-200 px-1 py-0.5 text-center font-bold">次</td>
                        <td className="border border-blue-200 px-1 py-0.5 text-center font-bold">m</td>
                        <td className="border border-blue-200 px-1 py-0.5 text-center font-bold">f(m)</td>
                        <td className="border border-blue-200 px-1 py-0.5 text-center font-bold">新区间</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-1 py-0.5 text-center">1</td>
                        <td className="border border-gray-200 px-1 py-0.5 text-center">1.5</td>
                        <td className="border border-gray-200 px-1 py-0.5 text-center text-red-600">-0.17</td>
                        <td className="border border-gray-200 px-1 py-0.5 text-center">(1.5, 2)</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-200 px-1 py-0.5 text-center">2</td>
                        <td className="border border-gray-200 px-1 py-0.5 text-center">1.75</td>
                        <td className="border border-gray-200 px-1 py-0.5 text-center text-blue-600">0.36</td>
                        <td className="border border-gray-200 px-1 py-0.5 text-center">(1.5, 1.75)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-1 py-0.5 text-center">3</td>
                        <td className="border border-gray-200 px-1 py-0.5 text-center">1.625</td>
                        <td className="border border-gray-200 px-1 py-0.5 text-center text-blue-600">0.08</td>
                        <td className="border border-gray-200 px-1 py-0.5 text-center">(1.5, 1.625)</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="mt-1 font-bold text-blue-700">零点 <Math tex="\approx 1.6" />（即 <Math tex="\log_2 3 \approx 1.585" />）</p>
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-2">
                <p className="font-bold text-green-800 mb-1">🔍 实战2：求 <Math tex="e^x = x + 2" /> 在 <Math tex="(-2, 0)" /> 内的近似解（精确到 0.1）</p>
                <div className="leading-7">
                  <p>构造 <Math tex="f(x) = e^x - x - 2" /></p>
                  <p><Math tex="f(-2) \approx -0.13 < 0" />，<Math tex="f(0) = -1 < 0" /></p>
                  <p className="text-red-600">同号！需缩小区间：</p>
                  <p><Math tex="f(-1) \approx 0.63 - (-1) - 2 = -0.63" /></p>
                  <p>试 <Math tex="f(-1.8) \approx 0.17 + 1.8 - 2 = -0.03" /></p>
                  <p><Math tex="f(-1.9) \approx 0.15 + 1.9 - 2 = 0.05" /></p>
                  <p className="text-green-600"><Math tex="f(-1.9) > 0" />，<Math tex="f(-1.8) < 0" /> → 异号！</p>
                  <p className="mt-1 font-bold text-green-700">零点 <Math tex="\approx -1.8" /></p>
                  <p className="text-gray-500 mt-0.5">注意：此题需先找到异号区间再二分</p>
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* Section 4: 数形结合求零点个数 */}
      {/* ════════════════════════════════════════════════════════════ */}
      <PageBreak />
      <section id="fg-graph-method" className="mb-2 scroll-mt-4">
        <Collapsible title="四、数形结合求零点个数 — 🎯 画图数交点" defaultOpen storageKey="func-graph:graph-method" headerExtra={<SpeakButton text={graphNarrations.graphMethod} />}>
          <div className="space-y-2 text-gray-700">

            {/* 核心思路 */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-2">
              <p className="leading-7"><strong className="text-amber-800">🎨 遇到复杂方程，画图比硬算强</strong> — 比如 <Math tex="\ln x = x - 2" />，你没法用公式解出来。但如果分别画 <Math tex="y = \ln x" /> 和 <Math tex="y = x - 2" /> 的图像，<strong>数交点个数就是方程根的个数</strong>。这就是数形结合的威力。</p>
            </div>

            {/* 方法步骤 */}
            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-1">📖 拆分法求零点个数</p>
              <div className="leading-8">
                <p><strong>第①步</strong>：将 <Math tex="f(x) = 0" /> 变形为 <Math tex="h(x) = g(x)" /></p>
                <p><strong>第②步</strong>：分别画 <Math tex="y = h(x)" /> 和 <Math tex="y = g(x)" /> 的图像</p>
                <p><strong>第③步</strong>：数两条图像的<strong>交点个数</strong> = 零点个数</p>
                <p className="text-purple-700 font-bold mt-1">拆分原则：<strong>尽量拆成你学过的基本函数</strong>（指数、对数、幂函数、直线等）</p>
              </div>
            </div>

            {/* 示例1：lnx = 2-x */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-2">
              <p className="font-bold text-blue-800 mb-1">📐 例1：<Math tex="\ln x + x - 2 = 0" /> 有几个根？</p>
              <div className="flex gap-3 items-start">
                <div className="flex-1 leading-8">
                  <p>拆分：<Math tex="\ln x = 2 - x" /></p>
                  <p><Math tex="y_1 = \ln x" />（对数曲线，过 <Math tex="(1, 0)" />，单调递增）</p>
                  <p><Math tex="y_2 = 2 - x" />（直线，过 <Math tex="(0, 2)" /> 和 <Math tex="(2, 0)" />）</p>
                  <p><strong>一个递增一个递减 → 最多 1 个交点</strong></p>
                  <p>验证：<Math tex="x = 1" /> 时 <Math tex="\ln 1 = 0" />，<Math tex="2 - 1 = 1" />，不相等</p>
                  <p><Math tex="x = 2" /> 时 <Math tex="\ln 2 \approx 0.69" />，<Math tex="2 - 2 = 0" />，不相等</p>
                  <p>但图像确实交了 → <strong>恰好 1 个根</strong></p>
                </div>
                <div style={{ width: 200, flexShrink: 0 }} className="rounded-lg overflow-hidden border border-blue-200">
                  <Mafs viewBox={{ x: [-1, 4], y: [-2, 3] }} height={160}>
                    <Coordinates.Cartesian xAxis={{ lines: false, labels: (n) => n === 0 ? '' : String(n) }} yAxis={{ lines: false, labels: (n) => n === 0 ? '' : String(n) }} />
                    <Plot.OfX y={(x: number) => x > 0 ? NativeMath.log(x) : NaN} color="#3b82f6" weight={2.5} />
                    <Plot.OfX y={(x: number) => 2 - x} color="#ef4444" weight={2.5} />
                  </Mafs>
                  <p className="text-center text-gray-500 py-0.5">蓝：<Math tex="y = \ln x" />　红：<Math tex="y = 2-x" /></p>
                </div>
              </div>
            </div>

            {/* 示例2：e^x = x+2 */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-2">
              <p className="font-bold text-green-800 mb-1">📐 例2：<Math tex="e^x = x + 2" /> 有几个根？</p>
              <div className="flex gap-3 items-start">
                <div className="flex-1 leading-8">
                  <p><Math tex="y_1 = e^x" />（指数曲线，过 <Math tex="(0, 1)" />）</p>
                  <p><Math tex="y_2 = x + 2" />（直线，过 <Math tex="(0, 2)" />，斜率 1）</p>
                  <p><Math tex="x = 0" /> 时：<Math tex="e^0 = 1 < 2" />，直线在上方</p>
                  <p><Math tex="x" /> 很大时：<Math tex="e^x" /> 增长远快于 <Math tex="x + 2" /></p>
                  <p><Math tex="x" /> 很小时：<Math tex="e^x \to 0" />，但 <Math tex="x + 2 \to -\infty" /> 更小</p>
                  <p className="font-bold">→ <strong>2 个交点（2 个根）</strong></p>
                </div>
                <div style={{ width: 200, flexShrink: 0 }} className="rounded-lg overflow-hidden border border-green-200">
                  <Mafs viewBox={{ x: [-4, 3], y: [-2, 6] }} height={160}>
                    <Coordinates.Cartesian xAxis={{ lines: false, labels: (n) => n === 0 ? '' : String(n) }} yAxis={{ lines: false, labels: (n) => n === 0 ? '' : String(n) }} />
                    <Plot.OfX y={(x: number) => NativeMath.exp(x)} color="#22c55e" weight={2.5} />
                    <Plot.OfX y={(x: number) => x + 2} color="#f97316" weight={2.5} />
                  </Mafs>
                  <p className="text-center text-gray-500 py-0.5">绿：<Math tex="y = e^x" />　橙：<Math tex="y = x+2" /></p>
                </div>
              </div>
            </div>

            {/* 常见拆分速查 */}
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-2">
              <p className="font-bold text-indigo-800 mb-1">📑 常见方程拆分方式速查</p>
              <table className="w-full text-base border-collapse">
                <thead>
                  <tr className="bg-indigo-100">
                    <th className="border border-indigo-200 px-2 py-1 text-indigo-700">方程类型</th>
                    <th className="border border-indigo-200 px-2 py-1 text-center text-indigo-700">拆分为</th>
                    <th className="border border-indigo-200 px-2 py-1 text-center text-indigo-700">根的个数</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1"><Math tex="\ln x = kx" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="y = \ln x" /> 与 <Math tex="y = kx" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center">看 k 的值（0/1/2 个）</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-1"><Math tex="e^x = ax + b" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="y = e^x" /> 与 <Math tex="y = ax+b" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center">看直线斜率与截距</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1"><Math tex="x^2 = a^x" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="y = x^2" /> 与 <Math tex="y = a^x" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center">通常 2~3 个</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-1"><Math tex="|f(x)| = g(x)" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="y = |f(x)|" /> 与 <Math tex="y = g(x)" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center">注意翻折</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 练习 */}
            <PageBreak />
            <PracticeCard
              title="✏️ 即时练习：数形结合（6题）"
              questions={graphPractice4}
              printOptionCols={2}
              explanations={functionGraphExplanations}
            />

            <CalloutCard variant="warning" title="⚠️ 易错提醒" compact>
              <div className="space-y-0.5">
                <p><strong>拆分方式影响难度！</strong> 尽量拆成基本函数（指数、对数、幂函数、直线），不要拆出画不出来的函数</p>
                <p><strong>画图要注意定义域！</strong> <Math tex="\ln x" /> 只有 <Math tex="x > 0" /> 部分</p>
                <p><strong>交点 = 方程根 = 零点！</strong> 三者完全等价</p>
              </div>
            </CalloutCard>

            {/* 实战拆分 */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-2">
                <p className="font-bold text-purple-800 mb-1">🔍 实战：<Math tex="x^2 = 2^x" /> 有几个根？</p>
                <div className="leading-7">
                  <p>拆：<Math tex="y_1 = x^2" />（抛物线）与 <Math tex="y_2 = 2^x" />（指数曲线）</p>
                  <p><Math tex="x = 0" />：<Math tex="0 \neq 1" /> ✗</p>
                  <p><Math tex="x = 1" />：<Math tex="1 \neq 2" /> ✗</p>
                  <p><Math tex="x = 2" />：<Math tex="4 = 4" /> ✓（交点！）</p>
                  <p><Math tex="x = 4" />：<Math tex="16 = 16" /> ✓（交点！）</p>
                  <p><Math tex="x < 0" /> 时 <Math tex="x^2 > 0" /> 但 <Math tex="2^x < 1" /></p>
                  <p>画图可见 <Math tex="x \approx -0.77" /> 处还有一个交点</p>
                  <p className="font-bold text-purple-700">→ 共 <strong>3 个根</strong></p>
                </div>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-2">
                <p className="font-bold text-rose-800 mb-1">🔍 实战：<Math tex="|x - 1| = \lg x" /> 有几个根？</p>
                <div className="leading-7">
                  <p>拆：<Math tex="y_1 = |x - 1|" />（V 形，顶点 <Math tex="(1, 0)" />）</p>
                  <p><Math tex="y_2 = \lg x" />（对数曲线，过 <Math tex="(1, 0)" />）</p>
                  <p>两图在 <Math tex="(1, 0)" /> 处相交 ✓</p>
                  <p><Math tex="x > 1" /> 时：<Math tex="|x-1| = x-1" /> 线性增长</p>
                  <p><Math tex="\lg x" /> 增长更慢 → 不再相交</p>
                  <p><Math tex="0 < x < 1" /> 时：<Math tex="|x-1| = 1-x" /> 递减</p>
                  <p><Math tex="\lg x < 0" /> 在下方 → 不相交</p>
                  <p className="font-bold text-rose-700">→ 共 <strong>1 个根</strong>（<Math tex="x = 1" />）</p>
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* Section 5: 综合自测 */}
      {/* ════════════════════════════════════════════════════════════ */}
      <PageBreak />
      <section id="fg-quiz" className="mb-2 scroll-mt-4">
        <Collapsible title="五、高考真题自测（8题）— 全对可进入下一章，错2题以上回看对应节" defaultOpen storageKey="func-graph:quiz">
          <QuizPanel questions={graphQuizQuestions} module="func-graph-quiz" explanations={functionGraphExplanations} />
        </Collapsible>
      </section>

      {/* 总速查表 */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-2 mt-1">
        <p className="font-bold text-indigo-800 mb-1">📌 总速查表（打印贴墙上）</p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 leading-7 text-gray-700">
          <p><strong>零点</strong>：让 f(x)=0 的 x 值（是数不是点）</p>
          <p><strong>三角等价</strong>：零点 = 方程根 = 图像交 x 轴</p>
          <p><strong>判别式</strong>：Δ{'>'}0 两个，Δ=0 一个，Δ{'<'}0 零个</p>
          <p><strong>存在性定理</strong>：连续 + 异号 → 有零点</p>
          <p><strong>定理性质</strong>：充分不必要（同号不代表无零点）</p>
          <p><strong>二分法</strong>：取中点→判异号→缩区间→重复</p>
          <p><strong>数形结合</strong>：f(x)=0 → h(x)=g(x) → 数交点</p>
          <p><strong>拆分原则</strong>：拆成你会画的基本函数</p>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* 打印模式答案区 */}
      {/* ════════════════════════════════════════════════════════════ */}
      {isPrinting && printOptions.showAnswers && <FunctionGraphAnswers />}

      </LessonLayout>
    </div>
  );
}
