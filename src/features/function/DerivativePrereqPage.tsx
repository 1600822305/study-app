import { Math, Collapsible, SpeakButton, QuizPanel, PageHeader, LessonLayout, CalloutCard, PracticeCard, ExportButton, PageBreak } from '@/components/shared';
import { Mafs, Coordinates, Plot, Point, Line, Text as MafsText } from 'mafs';
import { derivPrereqNarrations } from './data/deriv-prereq-narrations';
import { derivPrereqProgressItems } from './data/deriv-prereq-progress';
import { derivPrereqPractice1, derivPrereqPractice2, derivPrereqPractice3 } from './data/deriv-prereq-practice';
import { derivPrereqQuizQuestions } from './data/deriv-prereq-quiz';
import { useProgress, usePrintMode } from '@/hooks';
import { scrollToId } from '@/lib/scroll';

export function DerivativePrereqPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('deriv-prereq', derivPrereqProgressItems);
  const { isPrinting, printOptions } = usePrintMode();

  return (
    <div>
      <PageHeader
        stage="前置准备"
        variant="prereq"
        title="3.3.5 导数前置知识"
        narration={derivPrereqNarrations.intro}
        subtitle="极限直觉·变化率·切线概念 — 学导数之前必须搞定"
        tags={[
          { label: '约30-40分钟', color: 'amber' },
          { label: '初中基础', color: 'green' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="3.3.5 导数前置知识" />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-2 mb-1">
        <p className="font-bold text-gray-800 mb-1">📋 知识地图</p>
        <div className="text-gray-600 space-y-0.5">
          <button onClick={() => scrollToId('dp-limit')} className="block text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">一、极限思想入门（"无限趋近"的直觉）</button>
          <button onClick={() => scrollToId('dp-avg-rate')} className="block text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">二、平均变化率（速度的数学语言）</button>
          <button onClick={() => scrollToId('dp-instant-rate')} className="block text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">三、从平均到瞬时（导数的直觉）</button>
          <button onClick={() => scrollToId('dp-quiz')} className="block text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">四、综合自测（8题）</button>
        </div>
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* Section 1: 极限思想入门 */}
      {/* ════════════════════════════════════════════════════════════ */}
      <section id="dp-limit" className="mb-2 scroll-mt-4">
        <Collapsible title={'一、极限思想入门 — 🎯 理解"无限趋近"'} defaultOpen storageKey="deriv-prereq:limit" headerExtra={<SpeakButton text={derivPrereqNarrations.limit} />}>
          <div className="space-y-0 text-gray-700">

            {/* 生活引入 */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-2">
              <p className="font-bold text-blue-800 mb-1">🚗 生活中的"趋近"</p>
              <div className="leading-7">
                <p>你打车去一个地方，导航上显示：</p>
                <p>距离目的地 <strong>5 km → 2 km → 500 m → 100 m → 20 m → 5 m → ...</strong></p>
                <p>距离越来越小，<strong>无限接近 0</strong>。</p>
                <p className="mt-1">再比如：你往杯子里倒水，还差 <strong>半杯 → 四分之一 → 八分之一 → ...</strong></p>
                <p>离"满杯"越来越近，差距可以<strong>小到忽略不计</strong>。</p>
                <p className="text-blue-700 mt-1">这种"越来越接近某个值"的过程，数学上叫<strong>极限</strong>。</p>
              </div>
            </div>

            {/* 数学表达 */}
            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-1">📐 用数字感受一下</p>
              <div className="leading-7">
                <p><Math tex="1,\; \dfrac{1}{2},\; \dfrac{1}{4},\; \dfrac{1}{8},\; \dfrac{1}{16},\; \cdots" /> → 越来越小，接近 <strong>0</strong></p>
                <p>我们说：这一列数的<strong>极限是 0</strong></p>
                <p className="mt-1"><Math tex="\dfrac{1}{2},\; \dfrac{2}{3},\; \dfrac{3}{4},\; \dfrac{4}{5},\; \dfrac{99}{100},\; \cdots" /> → 越来越大，接近 <strong>1</strong></p>
                <p>分子比分母只少 1，数越大差距越小 → 极限是 <strong>1</strong></p>
                <p className="mt-1 text-gray-500">（后面学数列时会学到正式的极限记号，现在只需要理解"趋近"的含义）</p>
              </div>
            </div>

            {/* 关键概念 */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-2">
              <p className="font-bold text-amber-800 mb-1">💡 极限的三个要点</p>
              <div className="grid grid-cols-3 gap-3 leading-7">
                <div className="text-center">
                  <p className="font-bold">① 无限接近</p>
                  <p>可以靠得任意近</p>
                  <p>近到差值小于任何正数</p>
                </div>
                <div className="text-center">
                  <p className="font-bold">② 不一定等于</p>
                  <p><Math tex="\dfrac{1}{2},\; \dfrac{2}{3},\; \dfrac{3}{4},\; \cdots" /></p>
                  <p>永远不等于 1，但极限是 1</p>
                </div>
                <div className="text-center">
                  <p className="font-bold">③ 也可以等于</p>
                  <p>常数列 3, 3, 3, …</p>
                  <p>极限就是 3</p>
                </div>
              </div>
            </div>

            {/* 经典问题 */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-2">
              <p className="font-bold text-green-800 mb-1">🤔 经典问题：0.999... = 1 吗？</p>
              <div className="leading-7">
                <p><Math tex="0.9,\; 0.99,\; 0.999,\; 0.9999,\; \cdots" /></p>
                <p>和 1 的差距：<Math tex="0.1 \rightarrow 0.01 \rightarrow 0.001 \rightarrow \cdots" /> 趋近 0</p>
                <p>数学上 <Math tex="0.\overline{9} = 1" />（不是"接近"，是<strong>等于</strong>！）</p>
                <p className="text-green-700 mt-1">这里"等于"的含义：<strong>两者之间的差可以小于任何正数</strong>，所以它们是同一个数。</p>
              </div>
            </div>

            <CalloutCard variant="info" title="📝 高中要求" compact>
              <p>高中<strong>不考极限的严格定义</strong>，只需要你理解"无限趋近"的直觉。后面学导数时，"<Math tex="\Delta x \rightarrow 0" />"就是极限思想的应用。</p>
            </CalloutCard>

            {/* 练习 */}
            <PracticeCard
              title="✏️ 即时练习：极限直觉（5题）"
              questions={derivPrereqPractice1}
              printOptionCols={2}
            />

            {/* 实战例题 */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-2">
              <p className="font-bold text-green-800 mb-1">🎯 实战例题 1：判断趋近方向</p>
              <div className="leading-7">
                <p><strong>题目</strong>：<Math tex="3,\; 2.5,\; 2.25,\; 2.125,\; 2.0625,\; \cdots" /> 趋近于哪个数？</p>
                <p className="mt-1"><strong>思路</strong>：观察规律</p>
                <p>每个数和 2 的距离：<Math tex="1,\; 0.5,\; 0.25,\; 0.125,\; \cdots" /> 越来越小</p>
                <p>离 2 <strong>越来越近</strong>，近到可以忽略不计</p>
                <p className="text-green-700 font-bold mt-1">答案：极限是 2（从大的方向逐渐靠近 2）</p>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-2">
              <p className="font-bold text-green-800 mb-1">🎯 实战例题 2：趋近 ≠ 单调</p>
              <div className="leading-7">
                <p><strong>题目</strong>：<Math tex="1.1,\; 0.9,\; 1.01,\; 0.99,\; 1.001,\; 0.999,\; \cdots" /> 趋近于？</p>
                <p className="mt-1"><strong>思路</strong>：这列数一大一小地跳动</p>
                <p>但不管是"大"还是"小"，离 1 的距离越来越近：</p>
                <p><Math tex="0.1 \rightarrow 0.1 \rightarrow 0.01 \rightarrow 0.01 \rightarrow 0.001 \rightarrow 0.001 \rightarrow \cdots" /></p>
                <p className="text-green-700 font-bold mt-1">答案：趋近于 1（从两侧交替逼近，这叫"震荡趋近"）</p>
                <p className="text-green-600">启示：<strong>趋近不要求一直变大或一直变小</strong>，只要距离越来越近就行</p>
              </div>
            </div>

            {/* 小结速查 */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-2">
              <p className="font-bold text-gray-800 mb-1">📋 极限判断三步法</p>
              <div className="grid grid-cols-3 gap-3 text-center leading-7">
                <div>
                  <p className="font-bold text-gray-700">第一步</p>
                  <p>算出和目标的<strong>差距</strong></p>
                </div>
                <div>
                  <p className="font-bold text-gray-700">第二步</p>
                  <p>看差距是否<strong>越来越小</strong></p>
                </div>
                <div>
                  <p className="font-bold text-gray-700">第三步</p>
                  <p>差距趋近 0 → <strong>极限就是那个目标</strong></p>
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* Section 2: 平均变化率 */}
      {/* ════════════════════════════════════════════════════════════ */}
      <PageBreak />
      <section id="dp-avg-rate" className="mb-2 scroll-mt-4">
        <Collapsible title="二、平均变化率 — 🎯 速度就是变化率" defaultOpen storageKey="deriv-prereq:avg-rate" headerExtra={<SpeakButton text={derivPrereqNarrations.avgRate} />}>
          <div className="space-y-0 text-gray-700">

            {/* 生活引入 */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-2">
              <p className="font-bold text-blue-800 mb-1">🚗 你其实已经会了！</p>
              <div className="leading-7">
                <p>开车从A到B，<strong>30分钟走了15公里</strong></p>
                <p>平均速度 = <Math tex="\dfrac{\text{路程}}{\text{时间}} = \dfrac{15}{0.5} = 30" /> km/h</p>
                <p className="mt-1 font-bold text-blue-700">速度就是"路程关于时间的平均变化率"！</p>
              </div>
            </div>

            {/* 数学定义 */}
            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-1">📐 数学定义</p>
              <div className="leading-7">
                <p>函数 <Math tex="y = f(x)" /> 从 <Math tex="x_1" /> 到 <Math tex="x_2" /> 的<strong>平均变化率</strong>：</p>
                <div className="bg-gray-50 rounded-lg p-2 my-1 text-center">
                  <Math tex="\dfrac{\Delta y}{\Delta x} = \dfrac{f(x_2) - f(x_1)}{x_2 - x_1}" />
                </div>
                <p>其中 <Math tex="\Delta y = f(x_2) - f(x_1)" /> 是<strong>函数值的增量</strong></p>
                <p><Math tex="\Delta x = x_2 - x_1" /> 是<strong>自变量的增量</strong></p>
              </div>
            </div>

            {/* 例题 + 图 */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-green-50 border border-green-200 rounded-xl p-2">
                <p className="font-bold text-green-800 mb-1">🔍 例题：<Math tex="f(x) = x^2" /></p>
                <div className="leading-7">
                  <p>从 <Math tex="x = 1" /> 到 <Math tex="x = 3" /> 的平均变化率：</p>
                  <p><Math tex="\dfrac{f(3) - f(1)}{3 - 1} = \dfrac{9 - 1}{2} = \dfrac{8}{2} = 4" /></p>
                  <p className="mt-1">从 <Math tex="x = 1" /> 到 <Math tex="x = 2" />：</p>
                  <p><Math tex="\dfrac{f(2) - f(1)}{2 - 1} = \dfrac{4 - 1}{1} = 3" /></p>
                  <p className="text-green-700 mt-1"><strong>注意</strong>：同一个函数，不同区间的平均变化率<strong>不同</strong>！</p>
                </div>
              </div>
              <div>
                <p className="font-bold text-gray-800 mb-1 text-center">割线 = 连接两点的直线</p>
                <Mafs viewBox={{ x: [0, 4], y: [-1, 10] }} height={200} pan={false} zoom={false}>
                  <Coordinates.Cartesian
                    xAxis={{ labels: (n) => (n === 1 || n === 3 ? String(n) : ''), lines: false }}
                    yAxis={{ labels: (n) => (n === 1 || n === 9 ? String(n) : ''), lines: false }}
                  />
                  <Plot.OfX y={(x) => x * x} color="#10b981" />
                  <Point x={1} y={1} color="#059669" />
                  <Point x={3} y={9} color="#059669" />
                  <Line.Segment point1={[1, 1]} point2={[3, 9]} color="#ef4444" style="dashed" />
                  <MafsText x={0.5} y={1.5} size={20}>A(1,1)</MafsText>
                  <MafsText x={2.2} y={9.5} size={20}>B(3,9)</MafsText>
                  <MafsText x={0.5} y={5} size={20} color="#ef4444">割线</MafsText>
                </Mafs>
              </div>
            </div>

            {/* 一次函数的特殊性 */}
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-2">
              <p className="font-bold text-purple-800 mb-1">⭐ 一次函数的平均变化率 = 斜率（常数！）</p>
              <div className="leading-7">
                <p><Math tex="f(x) = kx + b" /> 的平均变化率 = <Math tex="\dfrac{(kx_2+b) - (kx_1+b)}{x_2 - x_1} = \dfrac{k(x_2 - x_1)}{x_2 - x_1} = k" /></p>
                <p><strong>不管选哪个区间，平均变化率都等于斜率 <Math tex="k" /></strong></p>
                <p className="text-purple-700">这是因为一次函数是直线 → 割线就是它自己 → 斜率不变</p>
              </div>
            </div>

            <CalloutCard variant="warning" title="⚠️ 常见错误" compact>
              <div className="space-y-0.5">
                <p><strong>分子分母不要搞反！</strong> 是 <Math tex="\dfrac{\Delta y}{\Delta x}" />（y 在上，x 在下）</p>
                <p><strong>顺序要一致！</strong> 如果分子是 <Math tex="f(x_2) - f(x_1)" />，分母必须是 <Math tex="x_2 - x_1" /></p>
              </div>
            </CalloutCard>

            {/* 实战例题 */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-2">
              <p className="font-bold text-green-800 mb-1">🎯 实战例题：温度的平均变化率</p>
              <div className="leading-7">
                <p><strong>题目</strong>：某天 8:00 气温 12°C，14:00 气温 24°C，求这段时间内气温的平均变化率。</p>
                <p className="mt-1"><strong>解题</strong>：</p>
                <p>时间增量 <Math tex="\Delta x = 14 - 8 = 6" />（小时）</p>
                <p>温度增量 <Math tex="\Delta y = 24 - 12 = 12" />（°C）</p>
                <p>平均变化率 = <Math tex="\dfrac{\Delta y}{\Delta x} = \dfrac{12}{6} = 2" /> °C/小时</p>
                <p className="text-green-700 font-bold mt-1">含义：平均每小时升温 2°C</p>
              </div>
            </div>

            <PageBreak />
            {/* 练习 */}
            <PracticeCard
              title="✏️ 即时练习：平均变化率（5题）"
              questions={derivPrereqPractice2}
              printOptionCols={2}
            />

            {/* 高考考什么 */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-2">
              <p className="font-bold text-red-800 mb-1">🎯 高考怎么考平均变化率？</p>
              <div className="grid grid-cols-2 gap-3 leading-7">
                <div>
                  <p className="font-bold text-red-700">① 直接计算（必考）</p>
                  <p>给函数 + 区间，求 <Math tex="\dfrac{\Delta y}{\Delta x}" /></p>
                  <p className="text-gray-500">难度低，送分题</p>
                </div>
                <div>
                  <p className="font-bold text-red-700">② 物理情境</p>
                  <p>位移函数求"平均速度"</p>
                  <p className="text-gray-500">本质还是 <Math tex="\dfrac{\Delta y}{\Delta x}" /></p>
                </div>
                <div>
                  <p className="font-bold text-red-700">③ 过渡到导数</p>
                  <p>区间越缩越小 → 导数</p>
                  <p className="text-gray-500">理解题，考概念</p>
                </div>
                <div>
                  <p className="font-bold text-red-700">④ 图像割线</p>
                  <p>看图判断斜率正负 / 大小</p>
                  <p className="text-gray-500">数形结合</p>
                </div>
              </div>
            </div>

            {/* 过渡到导数的实战题 */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-2">
              <p className="font-bold text-green-800 mb-1">🎯 实战例题：从平均变化率"逼近"导数</p>
              <div className="leading-7">
                <p><strong>题目</strong>：<Math tex="f(x) = x^2" />，计算从 <Math tex="x = 1" /> 到 <Math tex="x = 1 + \Delta x" /> 的平均变化率，并观察 <Math tex="\Delta x" /> 缩小时的变化。</p>
                <p className="mt-1"><strong>解题</strong>：</p>
                <p><Math tex="\dfrac{f(1+\Delta x) - f(1)}{\Delta x} = \dfrac{(1+\Delta x)^2 - 1}{\Delta x} = \dfrac{2\Delta x + (\Delta x)^2}{\Delta x} = 2 + \Delta x" /></p>
                <table className="w-full text-base border-collapse mt-1 mb-1">
                  <thead>
                    <tr className="bg-green-100">
                      <th className="border border-green-200 px-2 py-1 text-green-700"><Math tex="\Delta x" /></th>
                      <th className="border border-green-200 px-2 py-1 text-center text-green-700">1</th>
                      <th className="border border-green-200 px-2 py-1 text-center text-green-700">0.1</th>
                      <th className="border border-green-200 px-2 py-1 text-center text-green-700">0.01</th>
                      <th className="border border-green-200 px-2 py-1 text-center text-green-700">0.001</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-2 py-1 font-bold text-green-700"><Math tex="2 + \Delta x" /></td>
                      <td className="border border-gray-200 px-2 py-1 text-center">3</td>
                      <td className="border border-gray-200 px-2 py-1 text-center">2.1</td>
                      <td className="border border-gray-200 px-2 py-1 text-center">2.01</td>
                      <td className="border border-gray-200 px-2 py-1 text-center">2.001</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-green-700 font-bold"><Math tex="\Delta x" /> 越小，平均变化率越接近 <strong>2</strong> → 这就是下一节要学的"导数"！</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* Section 3: 从平均到瞬时 */}
      {/* ════════════════════════════════════════════════════════════ */}
      <PageBreak />
      <section id="dp-instant-rate" className="mb-2 scroll-mt-4">
        <Collapsible title="三、从平均到瞬时 — 🎯 导数的直觉" defaultOpen storageKey="deriv-prereq:instant-rate" headerExtra={<SpeakButton text={derivPrereqNarrations.instantRate} />}>
          <div className="space-y-0 text-gray-700">

            {/* 生活引入 */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-2">
              <p className="font-bold text-blue-800 mb-1">🏎️ 平均速度 vs 瞬时速度</p>
              <div className="leading-7">
                <p><strong>平均速度</strong>：30分钟走了15公里 → 30 km/h</p>
                <p>但这30分钟里，你可能等过红灯（0 km/h），也上过高速（120 km/h）</p>
                <p className="mt-1"><strong>瞬时速度</strong>：汽车仪表盘上显示的速度</p>
                <p>它描述的是<strong>"此时此刻"</strong>你有多快</p>
                <p className="text-blue-700 mt-1 font-bold">问题来了：怎么从"一段时间的平均"变成"某一瞬间"的？</p>
              </div>
            </div>

            {/* 核心思想 */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-2">
              <p className="font-bold text-amber-800 mb-1">🔑 核心思想：把时间间隔缩到无限小！</p>
              <div className="leading-7">
                <p>想测量 <Math tex="t = 2" /> 秒时的瞬时速度：</p>
                <table className="w-full text-base border-collapse mt-1 mb-1">
                  <thead>
                    <tr className="bg-amber-100">
                      <th className="border border-amber-200 px-2 py-1 text-amber-700">时间区间</th>
                      <th className="border border-amber-200 px-2 py-1 text-center text-amber-700"><Math tex="\Delta t" /></th>
                      <th className="border border-amber-200 px-2 py-1 text-center text-amber-700">平均速度</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-2 py-1 text-center">[2, 3]</td>
                      <td className="border border-gray-200 px-2 py-1 text-center">1 秒</td>
                      <td className="border border-gray-200 px-2 py-1 text-center">很粗略</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-2 py-1 text-center">[2, 2.1]</td>
                      <td className="border border-gray-200 px-2 py-1 text-center">0.1 秒</td>
                      <td className="border border-gray-200 px-2 py-1 text-center">比较准</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-2 py-1 text-center">[2, 2.01]</td>
                      <td className="border border-gray-200 px-2 py-1 text-center">0.01 秒</td>
                      <td className="border border-gray-200 px-2 py-1 text-center">很准</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-2 py-1 text-center">[2, 2.001]</td>
                      <td className="border border-gray-200 px-2 py-1 text-center">0.001 秒</td>
                      <td className="border border-gray-200 px-2 py-1 text-center">极准</td>
                    </tr>
                    <tr className="bg-amber-100 font-bold">
                      <td className="border border-amber-200 px-2 py-1 text-center"><Math tex="\Delta t \rightarrow 0" /></td>
                      <td className="border border-amber-200 px-2 py-1 text-center">→ 0</td>
                      <td className="border border-amber-200 px-2 py-1 text-center text-amber-700">→ 瞬时速度！</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-amber-700 font-bold">当 <Math tex="\Delta t \rightarrow 0" />，平均速度的<strong>极限</strong>就是瞬时速度！</p>
              </div>
            </div>

            {/* 具体计算 */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-2">
              <p className="font-bold text-green-800 mb-1">🔍 例题：<Math tex="f(x) = x^2" /> 在 <Math tex="x = 2" /> 处的"瞬时变化率"</p>
              <div className="leading-7">
                <p>平均变化率 = <Math tex="\dfrac{f(2 + \Delta x) - f(2)}{\Delta x} = \dfrac{(2+\Delta x)^2 - 4}{\Delta x}" /></p>
                <p>= <Math tex="\dfrac{4 + 4\Delta x + (\Delta x)^2 - 4}{\Delta x} = \dfrac{4\Delta x + (\Delta x)^2}{\Delta x}" /></p>
                <p>= <Math tex="4 + \Delta x" /></p>
                <table className="w-full text-base border-collapse mt-1 mb-1">
                  <thead>
                    <tr className="bg-green-100">
                      <th className="border border-green-200 px-2 py-1 text-green-700"><Math tex="\Delta x" /></th>
                      <th className="border border-green-200 px-2 py-1 text-center text-green-700">平均变化率 <Math tex="= 4 + \Delta x" /></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-2 py-1 text-center">1</td>
                      <td className="border border-gray-200 px-2 py-1 text-center">5</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-2 py-1 text-center">0.1</td>
                      <td className="border border-gray-200 px-2 py-1 text-center">4.1</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-2 py-1 text-center">0.01</td>
                      <td className="border border-gray-200 px-2 py-1 text-center">4.01</td>
                    </tr>
                    <tr className="bg-green-100 font-bold">
                      <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\rightarrow 0" /></td>
                      <td className="border border-gray-200 px-2 py-1 text-center text-green-700"><Math tex="\rightarrow 4" /></td>
                    </tr>
                  </tbody>
                </table>
                <p className="font-bold text-green-700"><Math tex="f(x) = x^2" /> 在 <Math tex="x = 2" /> 处的瞬时变化率（导数）= <Math tex="4" /></p>
              </div>
            </div>

            {/* 割线→切线 图 */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-xl border border-gray-200 p-2">
                <p className="font-bold text-gray-800 mb-1">📐 割线 → 切线</p>
                <div className="leading-7">
                  <p><strong>割线</strong>：连接曲线上<strong>两个点</strong>的直线</p>
                  <p>斜率 = 平均变化率</p>
                  <p className="mt-1"><strong>切线</strong>：只"碰"曲线于<strong>一个点</strong></p>
                  <p>斜率 = 瞬时变化率 = <strong>导数</strong></p>
                  <p className="mt-1 text-red-600 font-bold">第二个点无限靠近第一个点时</p>
                  <p className="text-red-600 font-bold">割线 → 切线</p>
                </div>
              </div>
              <div>
                <p className="font-bold text-gray-800 mb-1 text-center"><Math tex="\Delta x" /> 缩小，割线→切线</p>
                <div className="grid grid-cols-3 gap-1">
                  <div className="text-center">
                    <p className="text-gray-500 mb-0.5">远割线（斜率=6）</p>
                    <Mafs viewBox={{ x: [0, 5], y: [-1, 10] }} height={140} pan={false} zoom={false}>
                      <Coordinates.Cartesian xAxis={{ labels: false, lines: false }} yAxis={{ labels: false, lines: false }} />
                      <Plot.OfX y={(x) => x * x} color="#10b981" />
                      <Point x={2} y={4} color="#059669" />
                      <Point x={4} y={16} color="#94a3b8" />
                      <Line.Segment point1={[2, 4]} point2={[4, 16]} color="#94a3b8" />
                    </Mafs>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-500 mb-0.5">近割线（斜率=5）</p>
                    <Mafs viewBox={{ x: [0, 5], y: [-1, 10] }} height={140} pan={false} zoom={false}>
                      <Coordinates.Cartesian xAxis={{ labels: false, lines: false }} yAxis={{ labels: false, lines: false }} />
                      <Plot.OfX y={(x) => x * x} color="#10b981" />
                      <Point x={2} y={4} color="#059669" />
                      <Point x={3} y={9} color="#f97316" />
                      <Line.Segment point1={[2, 4]} point2={[3, 9]} color="#f97316" />
                    </Mafs>
                  </div>
                  <div className="text-center">
                    <p className="text-red-600 font-bold mb-0.5">切线（斜率=4）</p>
                    <Mafs viewBox={{ x: [0, 5], y: [-1, 10] }} height={140} pan={false} zoom={false}>
                      <Coordinates.Cartesian xAxis={{ labels: false, lines: false }} yAxis={{ labels: false, lines: false }} />
                      <Plot.OfX y={(x) => x * x} color="#10b981" />
                      <Point x={2} y={4} color="#059669" />
                      <Plot.OfX y={(x) => 4 * x - 4} color="#ef4444" />
                    </Mafs>
                  </div>
                </div>
              </div>
            </div>

            {/* 三等价 */}
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-2">
              <p className="font-bold text-indigo-800 mb-1">⭐ 三件事其实是同一件事</p>
              <div className="grid grid-cols-3 gap-3 text-center leading-7">
                <div>
                  <p className="font-bold text-indigo-700">瞬时变化率</p>
                  <p>物理：瞬时速度</p>
                  <p><Math tex="\Delta x \rightarrow 0" /> 时的变化率</p>
                </div>
                <div>
                  <p className="font-bold text-indigo-700">切线斜率</p>
                  <p>几何：切线的倾斜程度</p>
                  <p>割线 <Math tex="\rightarrow" /> 切线</p>
                </div>
                <div>
                  <p className="font-bold text-indigo-700">导数</p>
                  <p>数学：<Math tex="f'(x_0)" /></p>
                  <p>三者<strong>完全等价</strong></p>
                </div>
              </div>
            </div>

            {/* 导数符号 */}
            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-1">✍️ 导数的记号（预习）</p>
              <div className="grid grid-cols-2 gap-3 leading-7">
                <div>
                  <p><Math tex="f'(x)" /> 读作 "f 撇 x"</p>
                  <p><Math tex="f'(x_0)" /> = 函数在 <Math tex="x_0" /> 处的导数</p>
                </div>
                <div>
                  <p><Math tex="\dfrac{dy}{dx}" /> 读作 "dy dx"（莱布尼茨记号）</p>
                  <p>表示 <Math tex="y" /> 对 <Math tex="x" /> 的变化率</p>
                </div>
              </div>
            </div>

            <CalloutCard variant="tip" title="🎉 恭喜！你已经理解了导数的本质" compact>
              <div className="space-y-0.5">
                <p><strong>导数 = 瞬时变化率 = 切线斜率</strong></p>
                <p>接下来学导数，就是学怎么<strong>快速计算</strong>这个值（不用每次都算极限）</p>
              </div>
            </CalloutCard>

            {/* 练习 */}
            <PracticeCard
              title="✏️ 即时练习：从平均到瞬时（5题）"
              questions={derivPrereqPractice3}
              printOptionCols={2}
            />

            {/* 高考考什么 */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-2">
              <p className="font-bold text-red-800 mb-1">🎯 高考怎么考"导数的几何意义"？</p>
              <div className="grid grid-cols-2 gap-3 leading-7">
                <div>
                  <p className="font-bold text-red-700">① 求切线方程（大题必考）</p>
                  <p>已知 <Math tex="f(x)" />，求在某点处的切线</p>
                  <p className="text-gray-500">切线斜率 = 导数值</p>
                </div>
                <div>
                  <p className="font-bold text-red-700">② 看图判断导数正负</p>
                  <p>切线向上倾 → 导数 &gt; 0</p>
                  <p>切线向下倾 → 导数 &lt; 0</p>
                </div>
                <div>
                  <p className="font-bold text-red-700">③ 切线 vs 过某点的直线</p>
                  <p>"在点A处的切线" ≠ "过点A的切线"</p>
                  <p className="text-gray-500">经典陷阱，每年都有人踩</p>
                </div>
                <div>
                  <p className="font-bold text-red-700">④ 导数 = 0 的点</p>
                  <p>切线水平 → 极值候选点</p>
                  <p className="text-gray-500">这是后面学单调性的基础</p>
                </div>
              </div>
            </div>

            {/* 对比速查 */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-2">
              <p className="font-bold text-gray-800 mb-1">📋 全章对比速查表</p>
              <table className="w-full text-base border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-200 px-2 py-1"></th>
                    <th className="border border-gray-200 px-2 py-1 text-center">平均变化率</th>
                    <th className="border border-gray-200 px-2 py-1 text-center">瞬时变化率（导数）</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1 font-bold">公式</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\dfrac{f(x_2) - f(x_1)}{x_2 - x_1}" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\Delta x \rightarrow 0" /> 时的极限</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-1 font-bold">图像</td>
                    <td className="border border-gray-200 px-2 py-1 text-center">割线斜率</td>
                    <td className="border border-gray-200 px-2 py-1 text-center">切线斜率</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1 font-bold">物理</td>
                    <td className="border border-gray-200 px-2 py-1 text-center">平均速度</td>
                    <td className="border border-gray-200 px-2 py-1 text-center">瞬时速度</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-1 font-bold">需要几个点</td>
                    <td className="border border-gray-200 px-2 py-1 text-center">两个点</td>
                    <td className="border border-gray-200 px-2 py-1 text-center">一个点（极限过程）</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* Section 4: 综合自测 */}
      {/* ════════════════════════════════════════════════════════════ */}
      <section id="dp-quiz" className="mb-2 scroll-mt-4">
        <Collapsible title="四、综合自测（8题）— 全对可进入下一章，错2题以上回看对应节" defaultOpen storageKey="deriv-prereq:quiz">
          <div className="-mx-4 -mt-3 -mb-4">
            <QuizPanel questions={derivPrereqQuizQuestions} module="deriv-prereq-quiz" />
          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* 打印模式答案区 */}
      {/* ════════════════════════════════════════════════════════════ */}
      {isPrinting && printOptions.showAnswers && (
        <>
          <PageBreak label="答案与解析" />
          <section className="print-answers">
            <h2 className="text-xl font-bold text-gray-900 mb-4">📝 3.3.5 导数前置知识 — 答案与解析</h2>

            <div className="mb-4">
              <h3 className="font-bold text-gray-800 mb-2">即时练习答案</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-bold text-gray-700 mb-2">第一节：极限思想入门</p>
                  <div className="grid grid-cols-2 gap-2">
                    {derivPrereqPractice1.map((q, i) => {
                      const isLatex = q.options?.find(o => o.value === q.correctAnswer)?.isLatex;
                      return (
                        <div key={q.id} className="text-gray-700" style={{ breakInside: 'avoid' }}>
                          <p><strong>{i + 1}. 答案：{isLatex ? <Math tex={q.correctAnswer} /> : q.correctAnswer}</strong></p>
                          {q.explanationLatex && <p><Math tex={q.explanationLatex} /></p>}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <p className="font-bold text-gray-700 mb-2">第二节：平均变化率</p>
                  <div className="grid grid-cols-2 gap-2">
                    {derivPrereqPractice2.map((q, i) => {
                      const isLatex = q.options?.find(o => o.value === q.correctAnswer)?.isLatex;
                      return (
                        <div key={q.id} className="text-gray-700" style={{ breakInside: 'avoid' }}>
                          <p><strong>{i + 1}. 答案：{isLatex ? <Math tex={q.correctAnswer} /> : q.correctAnswer}</strong></p>
                          {q.explanationLatex && <p><Math tex={q.explanationLatex} /></p>}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <p className="font-bold text-gray-700 mb-2">第三节：从平均到瞬时</p>
                  <div className="grid grid-cols-2 gap-2">
                    {derivPrereqPractice3.map((q, i) => {
                      const isLatex = q.options?.find(o => o.value === q.correctAnswer)?.isLatex;
                      return (
                        <div key={q.id} className="text-gray-700" style={{ breakInside: 'avoid' }}>
                          <p><strong>{i + 1}. 答案：{isLatex ? <Math tex={q.correctAnswer} /> : q.correctAnswer}</strong></p>
                          {q.explanationLatex && <p><Math tex={q.explanationLatex} /></p>}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-2">自测题答案</h3>
              <div className="grid grid-cols-2 gap-2">
                {derivPrereqQuizQuestions.map((q, i) => {
                  const isLatex = q.options?.find(o => o.value === q.correctAnswer)?.isLatex;
                  return (
                    <div key={q.id} className="text-gray-700" style={{ breakInside: 'avoid' }}>
                      <p><strong>{i + 1}. 答案：{isLatex ? <Math tex={q.correctAnswer} /> : q.correctAnswer}</strong></p>
                      {q.explanationLatex && <p><Math tex={q.explanationLatex} /></p>}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </>
      )}

      </LessonLayout>
    </div>
  );
}
