import { Mafs, Coordinates, Plot, Point } from 'mafs';
import { Math, Collapsible, SpeakButton, QuizPanel, PageHeader, LessonLayout, CalloutCard, PracticeCard, ExportButton, PageBreak } from '@/components/shared';
import { elemFuncNarrations } from './data/elem-func-narrations';
import { elemFuncProgressItems } from './data/elem-func-progress';
import { elemFuncPractice1, elemFuncPractice2, elemFuncPractice3, elemFuncPractice4 } from './data/elem-func-practice';
import { elemFuncQuizQuestions } from './data/elem-func-quiz';
import { useProgress, usePrintMode } from '@/hooks';
import { scrollToId } from '@/lib/scroll';
import { ElementaryFuncAnswers, elementaryFuncExplanations } from './elementary-func-answers';

export function ElementaryFuncPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('elem-func', elemFuncProgressItems);
  const { isPrinting, printOptions } = usePrintMode();

  return (
    <div>
      <PageHeader
        stage="第三阶段 · 函数思维"
        title="3.2 基本初等函数"
        narration={elemFuncNarrations.intro}
        subtitle="指数函数·对数函数·幂函数 — 高考必考三大函数"
        tags={[
          { label: '难度 ★★★☆☆', color: 'amber' },
          { label: '必考', color: 'blue' },
          { label: '约8-10小时', color: 'purple' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="3.2 基本初等函数" />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-2 mb-1">
        <p className="font-bold text-gray-800 mb-1">📋 知识地图</p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 text-gray-600">
          <button onClick={() => scrollToId('ef-log-rules')} className="block text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">一、对数运算法则（补完对数运算）</button>
          <button onClick={() => scrollToId('ef-exp-func')} className="block text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">二、指数函数（图像与性质）</button>
          <button onClick={() => scrollToId('ef-log-func')} className="block text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">三、对数函数（图像与性质）</button>
          <button onClick={() => scrollToId('ef-power-func')} className="block text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">四、幂函数（图像与性质）</button>
          <button onClick={() => scrollToId('ef-quiz')} className="block text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">五、综合自测（8题）</button>
        </div>
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* Section 1: 对数运算法则 */}
      {/* ════════════════════════════════════════════════════════════ */}
      <section id="ef-log-rules" className="mb-2 scroll-mt-4">
        <Collapsible title="一、对数运算法则 — 🎯 学会对数的加减运算和换底公式" defaultOpen storageKey="elem-func:log-rules" headerExtra={<SpeakButton text={elemFuncNarrations.logRules} />}>
          <div className="space-y-2 text-gray-700">

            {/* ── 第1页：回顾 + 术语解释 ── */}
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-2">
                <p className="font-bold text-amber-800 mb-1">📖 先回顾一下：对数是什么？</p>
                <div className="leading-8">
                  <p><Math tex="\log_2 8 = 3" /> 的意思是：</p>
                  <p><strong>2 的几次方等于 8？答：3次方</strong></p>
                  <p>这个式子里有三个角色，我们给它们起个名字 →</p>
                </div>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-2">
                <p className="leading-7"><strong className="text-amber-800">🤔 为什么要学运算法则？</strong></p>
                <div className="leading-8">
                  <p>考试经常给你一堆对数让你算，比如 <Math tex="\lg 2 + \lg 5" /></p>
                  <p>一个一个查值再加？太慢了！</p>
                  <p>运算法则就是<strong>快捷方式</strong>，不用查值就能直接算出结果。</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-3">
              <p className="font-bold text-gray-800 mb-2">📌 先认识三个名字（后面会反复用到）</p>
              <div className="flex items-center justify-center">
                <div className="text-center text-lg leading-10">
                  <p><Math tex="\log_{\underbrace{2}_{\text{底数}}} \underbrace{8}_{\text{真数}} = \underbrace{3}_{\text{对数值}}" /></p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-2">
                <div className="bg-blue-50 rounded-lg p-2 text-center">
                  <p className="font-bold text-blue-700">底数</p>
                  <p>写在 log 右下角的数</p>
                  <p>这里是 <strong>2</strong></p>
                </div>
                <div className="bg-green-50 rounded-lg p-2 text-center">
                  <p className="font-bold text-green-700">真数</p>
                  <p>log 后面跟着的数</p>
                  <p>这里是 <strong>8</strong></p>
                </div>
                <div className="bg-purple-50 rounded-lg p-2 text-center">
                  <p className="font-bold text-purple-700">对数值</p>
                  <p>等号后面算出来的结果</p>
                  <p>这里是 <strong>3</strong></p>
                </div>
              </div>
              <p className="text-gray-600 mt-2 leading-7">再看一个：<Math tex="\lg 100 = 2" />　→　底数是 10（lg 就是 <Math tex="\log_{10}" />），<strong>真数</strong>是 100，对数值是 2。</p>
            </div>

            {/* 常见对数值 */}
            <div>
              <p className="font-bold text-gray-800 mb-2">📝 先记住这几个常用的对数值（后面做题要用）</p>
              <table className="w-full text-center border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 p-1.5">式子</th>
                    <th className="border border-gray-200 p-1.5">意思</th>
                    <th className="border border-gray-200 p-1.5">结果</th>
                  </tr>
                </thead>
                <tbody className="leading-8">
                  <tr><td className="border border-gray-200 p-1.5"><Math tex="\lg 10" /></td><td className="border border-gray-200 p-1.5">10 的几次方等于 10？</td><td className="border border-gray-200 p-1.5 font-bold">1</td></tr>
                  <tr><td className="border border-gray-200 p-1.5"><Math tex="\lg 100" /></td><td className="border border-gray-200 p-1.5">10 的几次方等于 100？</td><td className="border border-gray-200 p-1.5 font-bold">2</td></tr>
                  <tr><td className="border border-gray-200 p-1.5"><Math tex="\lg 1000" /></td><td className="border border-gray-200 p-1.5">10 的几次方等于 1000？</td><td className="border border-gray-200 p-1.5 font-bold">3</td></tr>
                  <tr><td className="border border-gray-200 p-1.5"><Math tex="\lg 1" /></td><td className="border border-gray-200 p-1.5">10 的几次方等于 1？</td><td className="border border-gray-200 p-1.5 font-bold">0</td></tr>
                  <tr><td className="border border-gray-200 p-1.5"><Math tex="\log_2 8" /></td><td className="border border-gray-200 p-1.5">2 的几次方等于 8？</td><td className="border border-gray-200 p-1.5 font-bold">3</td></tr>
                  <tr><td className="border border-gray-200 p-1.5"><Math tex="\log_2 4" /></td><td className="border border-gray-200 p-1.5">2 的几次方等于 4？</td><td className="border border-gray-200 p-1.5 font-bold">2</td></tr>
                  <tr><td className="border border-gray-200 p-1.5"><Math tex="\log_3 9" /></td><td className="border border-gray-200 p-1.5">3 的几次方等于 9？</td><td className="border border-gray-200 p-1.5 font-bold">2</td></tr>
                </tbody>
              </table>
            </div>

            {/* ── 第2页：三条法则 ── */}
            <PageBreak />
            <div className="space-y-0">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
                <p className="font-bold text-blue-800 text-lg mb-1">🔑 法则① — 两个对数相加 → 真数相乘</p>
                <div className="leading-8">
                  <p>我们知道 <Math tex="\lg 2 = 0.301" />，<Math tex="\lg 5 = 0.699" /></p>
                  <p>把它们加起来：<Math tex="0.301 + 0.699 = 1" /></p>
                  <p>另外，<Math tex="2 \times 5 = 10" />，而 <Math tex="\lg 10 = 1" /></p>
                  <p className="mt-1"><strong>发现了吗？</strong> <Math tex="\lg 2 + \lg 5" /> 和 <Math tex="\lg(2 \times 5)" /> 的结果一样！</p>
                  <p className="mt-1">这就是规律：<strong>两个 lg 相加，等于把它们后面的数乘起来再取 lg</strong></p>
                  <p className="bg-white rounded-lg p-2 text-center text-lg mt-1 border border-blue-200"><Math tex="\lg 2 + \lg 5 = \lg(2 \times 5) = \lg 10 = 1" /></p>
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-3">
                <p className="font-bold text-green-800 text-lg mb-1">🔑 法则② — 两个对数相减 → 真数相除</p>
                <div className="leading-8">
                  <p>我们知道 <Math tex="\log_2 8 = 3" />（因为 <Math tex="2^3 = 8" />），<Math tex="\log_2 4 = 2" />（因为 <Math tex="2^2 = 4" />）</p>
                  <p>减一下：<Math tex="3 - 2 = 1" /></p>
                  <p>另外，<Math tex="8 \div 4 = 2" />，而 <Math tex="\log_2 2 = 1" /></p>
                  <p className="mt-1"><strong>又对上了！</strong> <Math tex="\log_2 8 - \log_2 4" /> 和 <Math tex="\log_2(8 \div 4)" /> 结果一样！</p>
                  <p className="mt-1">规律：<strong>两个对数相减，等于把真数相除再取对数</strong></p>
                  <p className="bg-white rounded-lg p-2 text-center text-lg mt-1 border border-green-200"><Math tex="\log_2 8 - \log_2 4 = \log_2(8 \div 4) = \log_2 2 = 1" /></p>
                </div>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-3">
                <p className="font-bold text-purple-800 text-lg mb-1">🔑 法则③ — 真数有指数 → 指数搬到前面当系数</p>
                <div className="leading-8">
                  <p><Math tex="\lg 1000" /> 是多少？ 因为 <Math tex="1000 = 10^3" />，所以 <Math tex="\lg 1000 = 3" /></p>
                  <p>换一种写法：<Math tex="\lg 10^3 = 3" /></p>
                  <p>另外，<Math tex="3 \times \lg 10 = 3 \times 1 = 3" /></p>
                  <p className="mt-1"><strong>看！</strong> <Math tex="\lg 10^3" /> 等于 <Math tex="3 \times \lg 10" />。真数上面的指数 3，可以搬到前面当系数！</p>
                  <p className="bg-white rounded-lg p-2 text-center text-lg mt-1 border border-purple-200"><Math tex="\lg 10^3 = 3 \times \lg 10 = 3" /></p>
                </div>
              </div>
            </div>

            {/* 小结 */}
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-2">
              <p className="font-bold text-indigo-800 mb-1">📌 三条法则总结（用大白话说）</p>
              <div className="leading-8">
                <p><strong>① 加法</strong>：看到两个对数<strong>相加</strong>，就把它们后面的数（真数）<strong>乘起来</strong></p>
                <p><strong>② 减法</strong>：看到两个对数<strong>相减</strong>，就把它们后面的数（真数）<strong>相除</strong></p>
                <p><strong>③ 指数</strong>：真数上面有个指数，就把那个指数<strong>搬到前面当系数</strong></p>
                <p className="text-gray-500 mt-1">（注意：加减法要求底数相同才能用！底数不同的情况后面讲换底公式）</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-1">📖 小试一下：<Math tex="\lg 4 + \lg 25" /> 等于多少？</p>
              <div className="leading-8">
                <p className="ml-4">第①步：看到两个对数<strong>相加</strong> → 用法则①（加法 → 真数相乘）</p>
                <p className="ml-4">第②步：<Math tex="\lg 4 + \lg 25 = \lg(4 \times 25) = \lg 100" /></p>
                <p className="ml-4">第③步：<Math tex="\lg 100 = 2" />（因为 <Math tex="10^2 = 100" />）</p>
                <p className="text-green-700 font-bold mt-1">✅ 答案：2</p>
              </div>
            </div>

            {/* ── 第3页：换底公式 + 练习 ── */}
            <PageBreak />

            {/* 换底公式 */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
              <p className="font-bold text-amber-800 text-lg mb-1">🔑 换底公式 — 底数不同怎么办？</p>
              <div className="leading-8">
                <p>前面三条法则有个前提：<strong>底数必须相同</strong>。</p>
                <p>但如果遇到 <Math tex="\log_4 8" /> 这种题（底数是 4，不是常见的 2 或 10），怎么算？</p>
                <p className="mt-1"><strong>方法：把它转化成 lg（底数为 10 的对数）</strong></p>
                <p className="mt-1">具体操作：</p>
                <p className="ml-4">第①步：分子写 <Math tex="\lg 8" />（lg 后面跟<strong>原来的真数</strong>）</p>
                <p className="ml-4">第②步：分母写 <Math tex="\lg 4" />（lg 后面跟<strong>原来的底数</strong>）</p>
                <p className="ml-4">第③步：变成分数 <Math tex="\dfrac{\lg 8}{\lg 4}" />，然后就能算了！</p>
                <p className="bg-amber-50 rounded-lg p-2 mt-2">
                  <strong>完整演算</strong>：<Math tex="\log_4 8 = \dfrac{\lg 8}{\lg 4}" />。因为 <Math tex="8 = 2^3" /> 所以 <Math tex="\lg 8 = 3\lg 2" />；<Math tex="4 = 2^2" /> 所以 <Math tex="\lg 4 = 2\lg 2" />。代入得 <Math tex="\dfrac{3\lg 2}{2\lg 2} = \dfrac{3}{2}" />
                </p>
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-2">
              <p className="font-bold text-indigo-800 mb-1">📌 换底公式（记住这个分数的样子）</p>
              <div className="grid grid-cols-2 gap-4 leading-8">
                <div className="text-center">
                  <p className="text-lg"><Math tex="\log_a b = \dfrac{\lg b}{\lg a}" /></p>
                  <p className="text-gray-600 mt-1">分子：lg <strong>真数</strong>（要求的那个数）</p>
                  <p className="text-gray-600">分母：lg <strong>底数</strong></p>
                </div>
                <div>
                  <p className="font-bold text-gray-700 mb-1">记忆口诀：</p>
                  <p><strong>"真数在上，底数在下"</strong></p>
                  <p className="text-gray-600">想要谁（真数）→ 放上面</p>
                  <p className="text-gray-600">用谁当底（底数）→ 放下面</p>
                </div>
              </div>
            </div>

            {/* 即时练习 */}
            <PracticeCard
              title="✏️ 即时练习：对数运算法则（4题）"
              questions={elemFuncPractice1}
              printOptionCols={2}
              explanations={elementaryFuncExplanations}
            />

            <CalloutCard variant="warning" title="⚠️ 易错提醒" compact>
              <div className="space-y-0.5">
                <p><strong><Math tex="\lg 2 + \lg 3" /> 不是 <Math tex="\lg 5" />！</strong> 是 <Math tex="\lg(2 \times 3) = \lg 6" />（加法 → 真数相<strong>乘</strong>，不是相加）</p>
                <p><strong>底数不同不能直接加减！</strong> <Math tex="\log_2 8 + \log_3 9" /> 不能合并，得先算出各自的值（3 + 2 = 5）</p>
                <p><strong>真数必须大于 0！</strong> <Math tex="\lg(-5)" /> 不存在，因为 10 的任何次方都不可能是负数</p>
              </div>
            </CalloutCard>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* Section 2: 指数函数 */}
      {/* ════════════════════════════════════════════════════════════ */}
      <PageBreak />
      <section id="ef-exp-func" className="mb-2 scroll-mt-4">
        <Collapsible title="二、指数函数 — 🎯 画出图像，判断增减，比较大小" defaultOpen storageKey="elem-func:exp-func" headerExtra={<SpeakButton text={elemFuncNarrations.exponentialFunc} />}>
          <div className="space-y-0 text-gray-700">

            {/* ── 第1页：什么是指数函数 + 列值表 ── */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-2">
              <p className="font-bold text-amber-800 mb-1">� 什么是指数函数？先看一个生活例子</p>
              <div className="leading-8">
                <p>把一张纸<strong>对折</strong>：折 1 次 → 2 层，折 2 次 → 4 层，折 3 次 → 8 层...</p>
                <p>折 <Math tex="x" /> 次 → <Math tex="2^x" /> 层。这个 <Math tex="y = 2^x" /> 就是一个<strong>指数函数</strong>！</p>
                <p>特点：<strong>指数（x）在变，底数（2）不变</strong> → 变化的是"次方数"</p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
              <p className="font-bold text-blue-800 text-lg mb-1">🔑 指数函数长这样</p>
              <div className="leading-8">
                <p className="text-center text-lg"><Math tex="y = a^x \quad (a > 0 \text{ 且 } a \neq 1)" /></p>
                <p className="ml-4"><Math tex="a > 0" />：底数必须是<strong>正数</strong>，否则像 <Math tex="(-2)^{0.5}" /> 这种就没意义了</p>
                <p className="ml-4"><Math tex="a \neq 1" />：如果 <Math tex="a = 1" />，<Math tex="1^x" /> 永远等于 1，是条水平线，没研究价值</p>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  <p>✅ 是：<Math tex="y = 2^x" />、<Math tex="y = 3^x" />、<Math tex="y = 0.5^x" /></p>
                  <p>❌ 不是：<Math tex="y = 1^x" />、<Math tex="y = (-2)^x" /></p>
                </div>
              </div>
            </div>

            {/* 列值表 */}
            <div>
              <p className="font-bold text-gray-800 mb-2">📝 算几个值，看看规律</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-bold text-blue-700 mb-1"><Math tex="y = 2^x" />（底数 2，比 1 大）</p>
                  <table className="w-full text-base border-collapse">
                    <thead><tr className="bg-blue-50">
                      <th className="border border-blue-200 px-2 py-1"><Math tex="x" /></th>
                      <th className="border border-blue-200 px-2 py-1">-2</th>
                      <th className="border border-blue-200 px-2 py-1">-1</th>
                      <th className="border border-blue-200 px-2 py-1">0</th>
                      <th className="border border-blue-200 px-2 py-1">1</th>
                      <th className="border border-blue-200 px-2 py-1">2</th>
                      <th className="border border-blue-200 px-2 py-1">3</th>
                    </tr></thead>
                    <tbody><tr>
                      <td className="border border-gray-200 px-2 py-1 font-bold"><Math tex="y" /></td>
                      <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\frac{1}{4}" /></td>
                      <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\frac{1}{2}" /></td>
                      <td className="border border-gray-200 px-2 py-1 text-center font-bold text-blue-700">1</td>
                      <td className="border border-gray-200 px-2 py-1 text-center">2</td>
                      <td className="border border-gray-200 px-2 py-1 text-center">4</td>
                      <td className="border border-gray-200 px-2 py-1 text-center">8</td>
                    </tr></tbody>
                  </table>
                  <p className="text-blue-600 mt-1"><strong>x 越大 → y 越大</strong>（越来越猛！）</p>
                  <p className="text-gray-500">图像：从左往右缓慢上升，过 (0,1) 后越来越陡</p>
                </div>
                <div>
                  <p className="font-bold text-green-700 mb-1"><Math tex="y = \left(\frac{1}{2}\right)^x" />（底数 0.5，比 1 小）</p>
                  <table className="w-full text-base border-collapse">
                    <thead><tr className="bg-green-50">
                      <th className="border border-green-200 px-2 py-1"><Math tex="x" /></th>
                      <th className="border border-green-200 px-2 py-1">-2</th>
                      <th className="border border-green-200 px-2 py-1">-1</th>
                      <th className="border border-green-200 px-2 py-1">0</th>
                      <th className="border border-green-200 px-2 py-1">1</th>
                      <th className="border border-green-200 px-2 py-1">2</th>
                      <th className="border border-green-200 px-2 py-1">3</th>
                    </tr></thead>
                    <tbody><tr>
                      <td className="border border-gray-200 px-2 py-1 font-bold"><Math tex="y" /></td>
                      <td className="border border-gray-200 px-2 py-1 text-center">4</td>
                      <td className="border border-gray-200 px-2 py-1 text-center">2</td>
                      <td className="border border-gray-200 px-2 py-1 text-center font-bold text-green-700">1</td>
                      <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\frac{1}{2}" /></td>
                      <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\frac{1}{4}" /></td>
                      <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\frac{1}{8}" /></td>
                    </tr></tbody>
                  </table>
                  <p className="text-green-600 mt-1"><strong>x 越大 → y 越小</strong>（越来越趋近 0！）</p>
                  <p className="text-gray-500">图像：从左往右快速下降，过 (0,1) 后越来越贴近 x 轴</p>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-2">
              <p className="font-bold text-indigo-800 mb-1">📌 从表格中发现了什么？</p>
              <div className="leading-8">
                <p><strong>发现1</strong>：两个表格里，<Math tex="x = 0" /> 时 <Math tex="y" /> 都等于 <strong>1</strong>（因为任何数的 0 次方都是 1）</p>
                <p><strong>发现2</strong>：<Math tex="y" /> 永远是<strong>正数</strong>，不管 x 取什么值，y 都不会变成 0 或负数</p>
                <p><strong>发现3</strong>：底数 &gt; 1 时越来越大（<strong>增</strong>），底数 &lt; 1 时越来越小（<strong>减</strong>）</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-3">
              <p className="font-bold text-gray-800 mb-2">📌 先学几个术语（考试会用到）</p>
              <div className="leading-8">
                <p><strong>定义域</strong> = x 可以取哪些值。指数函数的 x 可以是任何实数（正数、负数、0 都行）</p>
                <p><strong>值域</strong> = y 的范围。指数函数的 y 永远大于 0（写成 <Math tex="(0, +\infty)" />，小括号表示不包含 0）</p>
                <p><strong>增函数</strong> = x 变大，y 也变大（图像从左往右<strong>上升</strong>）</p>
                <p><strong>减函数</strong> = x 变大，y 反而变小（图像从左往右<strong>下降</strong>）</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-1">✏️ 怎么画指数函数的草图？（3步搞定）</p>
              <div className="grid gap-3" style={{ gridTemplateColumns: '2fr 1fr' }}>
                <div className="leading-8">
                  <p><strong>第①步</strong>：先描点 <Math tex="(0, 1)" />（所有指数函数都过这个点）</p>
                  <p><strong>第②步</strong>：再描 <Math tex="(1, a)" />（把 x=1 代入，y 就等于底数本身）</p>
                  <p><strong>第③步</strong>：底数 &gt; 1 → 从左下往右上画；底数 &lt; 1 → 从左上往右下画</p>
                  <p className="text-gray-500">记住：曲线永远在 x 轴<strong>上方</strong>（不碰 x 轴，不穿过 x 轴）</p>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="rounded-lg overflow-hidden border border-blue-200">
                    <Mafs viewBox={{ x: [-2.5, 3], y: [-0.5, 5] }} height={70}>
                      <Coordinates.Cartesian xAxis={{ lines: false, labels: () => '' }} yAxis={{ lines: false, labels: () => '' }} />
                      <Plot.OfX y={(x: number) => 2 ** x} color="#3b82f6" weight={2.5} />
                      <Point x={0} y={1} color="#ef4444" />
                      <Point x={1} y={2} color="#f59e0b" />
                    </Mafs>
                    <p className="text-center text-xs text-blue-600 py-0.5">a&gt;1 增</p>
                  </div>
                  <div className="rounded-lg overflow-hidden border border-green-200">
                    <Mafs viewBox={{ x: [-2.5, 3], y: [-0.5, 5] }} height={70}>
                      <Coordinates.Cartesian xAxis={{ lines: false, labels: () => '' }} yAxis={{ lines: false, labels: () => '' }} />
                      <Plot.OfX y={(x: number) => 0.5 ** x} color="#22c55e" weight={2.5} />
                      <Point x={0} y={1} color="#ef4444" />
                      <Point x={1} y={0.5} color="#f59e0b" />
                    </Mafs>
                    <p className="text-center text-xs text-green-600 py-0.5">a&lt;1 减</p>
                  </div>
                </div>
              </div>
            </div>

            <PageBreak />
            <div>
              <p className="font-bold text-gray-800 mb-2">📖 指数函数性质总结</p>
              <table className="w-full text-base border-collapse">
                <thead>
                  <tr className="bg-purple-50">
                    <th className="border border-purple-200 px-2 py-1 text-left text-purple-700">看什么</th>
                    <th className="border border-purple-200 px-2 py-1 text-center text-purple-700">底数 &gt; 1（如 2, 3, 10）</th>
                    <th className="border border-purple-200 px-2 py-1 text-center text-purple-700">底数 &lt; 1（如 0.5, 0.3）</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1 font-bold">x 能取什么值？</td>
                    <td className="border border-gray-200 px-2 py-1 text-center" colSpan={2}>任何实数（正的、负的、0 都行）</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-1 font-bold">y 的范围？</td>
                    <td className="border border-gray-200 px-2 py-1 text-center" colSpan={2}>永远大于 0（不会等于 0，更不会是负数）</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1 font-bold">过定点？⭐</td>
                    <td className="border border-gray-200 px-2 py-1 text-center" colSpan={2}><strong>所有指数函数都过点 (0, 1)</strong>（因为 <Math tex="a^0 = 1" />，高考高频考点！）</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-1 font-bold">增还是减？</td>
                    <td className="border border-gray-200 px-2 py-1 text-center text-blue-700"><strong>增函数</strong>（x 大 → y 大）</td>
                    <td className="border border-gray-200 px-2 py-1 text-center text-green-700"><strong>减函数</strong>（x 大 → y 小）</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1 font-bold">图像什么样？</td>
                    <td className="border border-gray-200 px-2 py-1 text-center">右侧越来越陡，左侧贴近 x 轴</td>
                    <td className="border border-gray-200 px-2 py-1 text-center">左侧越来越陡，右侧贴近 x 轴</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-2">
              <p className="font-bold text-amber-800 mb-1">💡 一句话记住增减</p>
              <p className="leading-7 text-lg text-center"><strong>底数比 1 大 → 增函数（越来越大），底数比 1 小 → 减函数（越来越小）</strong></p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-xl p-3">
              <p className="font-bold text-purple-800 text-lg mb-1">� 怎么比较两个指数值的大小？</p>
              <div className="leading-8">
                <p className="font-bold">情况1：底数相同，比指数</p>
                <p className="ml-4">例：<Math tex="2^3" /> 和 <Math tex="2^5" /> 谁大？</p>
                <p className="ml-4">底数 2 &gt; 1 → 增函数 → 指数大的值大 → <Math tex="2^5 > 2^3" /></p>

                <p className="font-bold mt-2">情况2：指数相同，比底数</p>
                <p className="ml-4">例：<Math tex="2^3" /> 和 <Math tex="3^3" /> 谁大？</p>
                <p className="ml-4">指数都是 3（正数），底数大的值大 → <Math tex="3^3 > 2^3" /></p>

                <p className="font-bold mt-2">情况3：底数和指数都不同 → 借助 1 来中转</p>
                <p className="ml-4">例：<Math tex="2^{0.3}" /> 和 <Math tex="0.3^2" /> 谁大？</p>
                <p className="ml-4"><Math tex="2^{0.3}" />：底数 2 &gt; 1，指数 0.3 &gt; 0 → 结果 <strong>&gt; 1</strong></p>
                <p className="ml-4"><Math tex="0.3^2" />：底数 0.3 &lt; 1，指数 2 &gt; 0 → 结果 <strong>&lt; 1</strong></p>
                <p className="ml-4">所以 <Math tex="2^{0.3} > 1 > 0.3^2" /></p>
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-2">
              <p className="font-bold text-indigo-800 mb-1">📌 比大小口诀</p>
              <div className="leading-8">
                <p><strong>同底比指数</strong>：底 &gt; 1 时，指数大的大；底 &lt; 1 时，指数大的反而小</p>
                <p><strong>不同底</strong>：先各自和 1 比，能分出大小就行</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-1">📖 综合例题</p>
              <div className="leading-8">
                <p><strong>例1：</strong>比较 <Math tex="0.6^{-2}" />、<Math tex="0.6^3" />、<Math tex="2^{0.6}" /> 的大小</p>
                <p className="ml-4"><Math tex="0.6^{-2}" />：底数 0.6 &lt; 1，指数 -2 &lt; 0 → 结果 <strong>&gt; 1</strong></p>
                <p className="ml-4"><Math tex="0.6^3" />：底数 0.6 &lt; 1，指数 3 &gt; 0 → 结果 <strong>&lt; 1</strong></p>
                <p className="ml-4"><Math tex="2^{0.6}" />：底数 2 &gt; 1，指数 0.6 &gt; 0 → 结果 <strong>&gt; 1</strong></p>
                <p className="ml-4">再比两个 &gt; 1 的：<Math tex="0.6^{-2} = \frac{1}{0.36} \approx 2.78" />，<Math tex="2^{0.6} \approx 1.52" /></p>
                <p className="text-green-700 font-bold">✅ <Math tex="0.6^{-2} > 2^{0.6} > 1 > 0.6^3" /></p>
                <p className="mt-1"><strong>例2：</strong>比较 <Math tex="3^{0.5}" /> 和 <Math tex="3^{0.3}" /> 的大小</p>
                <p className="ml-4">同底（3 &gt; 1）→ 增函数 → 指数大的值大 → <Math tex="3^{0.5} > 3^{0.3}" /> ✅</p>
              </div>
            </div>

            {/* ── 第4页：练习 ── */}
            <PageBreak />

            {/* 即时练习 */}
            <PracticeCard
              title="✏️ 即时练习：指数函数（7题，含指数对数混合）"
              questions={elemFuncPractice2}
              printOptionCols={2}
              explanations={elementaryFuncExplanations}
            />

            <CalloutCard variant="warning" title="⚠️ 易错提醒" compact>
              <div className="space-y-0.5">
                <p><strong>y 永远大于 0！</strong> <Math tex="2^{-100}" /> 虽然很小但仍然是正数，不会等于 0</p>
                <p><strong>x = 0 时 y = 1！</strong> 不管底数是多少，<Math tex="a^0 = 1" />（这是"过定点 (0,1)"的意思）</p>
                <p><strong>底数 &gt; 1 增，0 &lt; a &lt; 1 减！</strong> 这是最核心的一句话，记反了全错</p>
              </div>
            </CalloutCard>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-2">
              <p className="font-bold text-blue-800 mb-1">🔗 知识串联：指数与对数的关系</p>
              <div className="leading-8">
                <p>指数和对数是<strong>互逆运算</strong>，就像加法和减法、乘法和除法一样：</p>
                <p className="text-center text-lg my-1"><Math tex="a^b = N \;\Longleftrightarrow\; \log_a N = b" /></p>
                <p>例：<Math tex="2^3 = 8 \;\Longleftrightarrow\; \log_2 8 = 3" />（"2 的 3 次方等于 8" ↔ "8 以 2 为底的对数是 3"）</p>
                <p className="text-blue-700 font-bold">📌 记住这个关系，指数对数混合题就不难了！</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* Section 3: 对数函数 */}
      {/* ════════════════════════════════════════════════════════════ */}
      <PageBreak />
      <section id="ef-log-func" className="mb-2 scroll-mt-4">
        <Collapsible title="三、对数函数 — 🎯 画出图像，判断单调性，比较对数值的大小" defaultOpen storageKey="elem-func:log-func" headerExtra={<SpeakButton text={elemFuncNarrations.logarithmicFunc} />}>
          <div className="space-y-0 text-gray-700">

            {/* ── 第1页：什么是对数函数 + 列值表 + 草图 ── */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-2">
              <p className="font-bold text-amber-800 mb-1">🔑 什么是对数函数？先回忆指数函数</p>
              <div className="leading-8">
                <p>指数函数是"<strong>已知指数 x，求结果 y</strong>"：<Math tex="y = 2^x" />（折纸问题：折 x 次 → y 层）</p>
                <p>对数函数反过来："<strong>已知结果 x，求指数 y</strong>"：<Math tex="y = \log_2 x" />（有 x 层 → 折了 y 次）</p>
                <p>例：8 层纸折了几次？→ <Math tex="\log_2 8 = 3" />（因为 <Math tex="2^3 = 8" />）</p>
                <p className="text-amber-700 font-bold">一句话：指数函数和对数函数<strong>互为逆运算</strong>，就像乘法和除法是一对！</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-xl p-2">
              <p className="font-bold text-blue-800 mb-1">� 对数函数的标准形式</p>
              <p className="text-center text-lg leading-8"><Math tex="y = \log_a x \quad (a > 0 \text{ 且 } a \neq 1)" /></p>
              <div className="leading-7 mt-1">
                <p className="ml-4"><Math tex="a" /> 叫<strong>底数</strong>，<Math tex="x" /> 叫<strong>真数</strong>（就是"真正要算的数"）</p>
                <p className="ml-4"><Math tex="a > 0" /> 且 <Math tex="a \neq 1" />：和指数函数一样的限制</p>
                <p className="ml-4"><strong>注意</strong>：真数 <Math tex="x > 0" />！负数和 0 没有对数（这是对数函数最大的特点）</p>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  <p>✅ 是：<Math tex="y = \log_2 x" />、<Math tex="y = \lg x" />、<Math tex="y = \ln x" /></p>
                  <p>❌ 不是：<Math tex="y = \log_1 x" />、<Math tex="y = \log_{-2} x" /></p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-1">� 算几个值，找规律</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-bold text-blue-700 mb-1"><Math tex="y = \log_2 x" />（底数 2 &gt; 1）</p>
                  <table className="w-full text-base border-collapse">
                    <thead><tr className="bg-blue-50">
                      <th className="border border-blue-200 px-2 py-1"><Math tex="x" /></th>
                      <th className="border border-blue-200 px-2 py-1"><Math tex="\frac{1}{4}" /></th>
                      <th className="border border-blue-200 px-2 py-1"><Math tex="\frac{1}{2}" /></th>
                      <th className="border border-blue-200 px-2 py-1">1</th>
                      <th className="border border-blue-200 px-2 py-1">2</th>
                      <th className="border border-blue-200 px-2 py-1">4</th>
                      <th className="border border-blue-200 px-2 py-1">8</th>
                    </tr></thead>
                    <tbody><tr>
                      <td className="border border-gray-200 px-2 py-1 font-bold"><Math tex="y" /></td>
                      <td className="border border-gray-200 px-2 py-1 text-center">-2</td>
                      <td className="border border-gray-200 px-2 py-1 text-center">-1</td>
                      <td className="border border-gray-200 px-2 py-1 text-center font-bold text-blue-700">0</td>
                      <td className="border border-gray-200 px-2 py-1 text-center">1</td>
                      <td className="border border-gray-200 px-2 py-1 text-center">2</td>
                      <td className="border border-gray-200 px-2 py-1 text-center">3</td>
                    </tr></tbody>
                  </table>
                  <p className="text-gray-500">→ x 越大 y 也越大，<strong>递增</strong>！x=1 时 y=0</p>
                </div>
                <div>
                  <p className="font-bold text-green-700 mb-1"><Math tex="y = \log_{0.5} x" />（底数 0.5 &lt; 1）</p>
                  <table className="w-full text-base border-collapse">
                    <thead><tr className="bg-green-50">
                      <th className="border border-green-200 px-2 py-1"><Math tex="x" /></th>
                      <th className="border border-green-200 px-2 py-1"><Math tex="\frac{1}{4}" /></th>
                      <th className="border border-green-200 px-2 py-1"><Math tex="\frac{1}{2}" /></th>
                      <th className="border border-green-200 px-2 py-1">1</th>
                      <th className="border border-green-200 px-2 py-1">2</th>
                      <th className="border border-green-200 px-2 py-1">4</th>
                      <th className="border border-green-200 px-2 py-1">8</th>
                    </tr></thead>
                    <tbody><tr>
                      <td className="border border-gray-200 px-2 py-1 font-bold"><Math tex="y" /></td>
                      <td className="border border-gray-200 px-2 py-1 text-center">2</td>
                      <td className="border border-gray-200 px-2 py-1 text-center">1</td>
                      <td className="border border-gray-200 px-2 py-1 text-center font-bold text-green-700">0</td>
                      <td className="border border-gray-200 px-2 py-1 text-center">-1</td>
                      <td className="border border-gray-200 px-2 py-1 text-center">-2</td>
                      <td className="border border-gray-200 px-2 py-1 text-center">-3</td>
                    </tr></tbody>
                  </table>
                  <p className="text-gray-500">→ x 越大 y 反而越小，<strong>递减</strong>！x=1 时 y=0</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-2">
              <p className="font-bold text-gray-800 mb-1">📚 先学几个术语（和指数函数对比记）</p>
              <div className="leading-8">
                <p><strong>真数</strong> = 对数里面的那个数（<Math tex="\log_2 \textcolor{red}{8}" /> 中的 8）。真数必须 &gt; 0！</p>
                <p><strong>定义域</strong> = x 可以取哪些值。对数函数的 x 只能是正数（写成 <Math tex="(0, +\infty)" />）</p>
                <p><strong>值域</strong> = y 的范围。对数函数的 y 可以是任何实数（<Math tex="\mathbb{R}" />）</p>
                <p><strong>常用简写</strong>：<Math tex="\lg x = \log_{10} x" />（以 10 为底），<Math tex="\ln x = \log_e x" />（以 e≈2.718 为底）</p>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-2">
              <p className="font-bold text-red-800 mb-1">❓ 为什么 x 必须大于 0？</p>
              <div className="leading-8">
                <p><Math tex="\log_2 x" /> 问的是"2 的几次方等于 x"。2 的任何次方都是<strong>正数</strong>，所以 x 不可能是 0 或负数</p>
                <p>例：<Math tex="\log_2(-4)" /> = ?（2 的几次方等于 -4？不存在！）→ <strong>无意义</strong></p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-1">✏️ 怎么画对数函数的草图？（3步搞定）</p>
              <div className="grid gap-3" style={{ gridTemplateColumns: '2fr 1fr' }}>
                <div className="leading-8">
                  <p><strong>第①步</strong>：先描点 <Math tex="(1, 0)" />（所有对数函数都过这个点，因为 <Math tex="\log_a 1 = 0" />）</p>
                  <p><strong>第②步</strong>：再描 <Math tex="(a, 1)" />（把 x=a 代入，y=1，因为 <Math tex="\log_a a = 1" />）</p>
                  <p><strong>第③步</strong>：底数 &gt; 1 → 曲线从左下往右上；底数 &lt; 1 → 曲线从左上往右下</p>
                  <p className="text-gray-500">记住：曲线只在 y 轴<strong>右边</strong>（x &gt; 0），且会穿过 x 轴</p>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="rounded-lg overflow-hidden border border-blue-200">
                    <Mafs viewBox={{ x: [-0.5, 5], y: [-3, 3] }} height={70}>
                      <Coordinates.Cartesian xAxis={{ lines: false, labels: () => '' }} yAxis={{ lines: false, labels: () => '' }} />
                      <Plot.OfX y={(x: number) => x > 0.01 ? globalThis.Math.log2(x) : -10} color="#3b82f6" weight={2.5} />
                      <Point x={1} y={0} color="#ef4444" />
                      <Point x={2} y={1} color="#f59e0b" />
                    </Mafs>
                    <p className="text-center text-xs text-blue-600 py-0.5">a&gt;1 增</p>
                  </div>
                  <div className="rounded-lg overflow-hidden border border-green-200">
                    <Mafs viewBox={{ x: [-0.5, 5], y: [-3, 3] }} height={70}>
                      <Coordinates.Cartesian xAxis={{ lines: false, labels: () => '' }} yAxis={{ lines: false, labels: () => '' }} />
                      <Plot.OfX y={(x: number) => x > 0.01 ? -globalThis.Math.log2(x) : 10} color="#22c55e" weight={2.5} />
                      <Point x={1} y={0} color="#ef4444" />
                      <Point x={0.5} y={1} color="#f59e0b" />
                    </Mafs>
                    <p className="text-center text-xs text-green-600 py-0.5">a&lt;1 减</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── 第2页：性质 + 比大小 + 对比 + 综合例题 ── */}
            <PageBreak />
            <div>
              <p className="font-bold text-gray-800 mb-2">📖 对数函数性质总结</p>
              <table className="w-full text-base border-collapse">
                <thead>
                  <tr className="bg-purple-50">
                    <th className="border border-purple-200 px-2 py-1 text-left text-purple-700">看什么</th>
                    <th className="border border-purple-200 px-2 py-1 text-center text-purple-700">底数 &gt; 1（如 2, 3, 10）</th>
                    <th className="border border-purple-200 px-2 py-1 text-center text-purple-700">底数 &lt; 1（如 0.5, 0.3）</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1 font-bold">x 能取什么值？</td>
                    <td className="border border-gray-200 px-2 py-1 text-center" colSpan={2}><Math tex="(0, +\infty)" />（x 必须 &gt; 0，负数和 0 没有对数！）</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-1 font-bold">y 的范围？</td>
                    <td className="border border-gray-200 px-2 py-1 text-center" colSpan={2}><Math tex="\mathbb{R}" />（y 可以是任何实数，正负都行）</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1 font-bold">过定点？ ⭐</td>
                    <td className="border border-gray-200 px-2 py-1 text-center" colSpan={2}>所有对数函数都过点 <strong>(1, 0)</strong>（因为 <Math tex="\log_a 1 = 0" />，高频考点！）</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-1 font-bold">增还是减？</td>
                    <td className="border border-gray-200 px-2 py-1 text-center text-blue-700"><strong>增函数</strong>（x 大 → y 大）</td>
                    <td className="border border-gray-200 px-2 py-1 text-center text-green-700"><strong>减函数</strong>（x 大 → y 小）</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1 font-bold">y 的正负？</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="x > 1" /> 时 y &gt; 0，<Math tex="x < 1" /> 时 y &lt; 0</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="x > 1" /> 时 y &lt; 0，<Math tex="x < 1" /> 时 y &gt; 0</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-2">
              <p className="font-bold text-green-800 mb-1">💡 一句话记住增减</p>
              <p className="text-center text-lg leading-8">底数比 1 大 → <strong>增函数</strong>（和指数函数一样的规则！）</p>
              <p className="text-center text-lg leading-8">底数比 1 小 → <strong>减函数</strong>（和指数函数一样的规则！）</p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-1">💎 怎么比较两个对数值的大小？</p>
              <div className="leading-8">
                <p><strong>情况1：同底数，比真数</strong></p>
                <p className="ml-4">例：<Math tex="\log_2 5" /> 和 <Math tex="\log_2 3" /> 谁大？</p>
                <p className="ml-4">底数 2 &gt; 1 → 增函数 → 真数大的值大 → <Math tex="\log_2 5 > \log_2 3" /></p>
                <p><strong>情况2：不同底数 → 借助特殊值（0 或 1）</strong></p>
                <p className="ml-4">例：<Math tex="\log_2 3" /> 和 <Math tex="\log_3 2" /> 谁大？</p>
                <p className="ml-4"><Math tex="\log_2 3 > \log_2 2 = 1" />，而 <Math tex="\log_3 2 < \log_3 3 = 1" /></p>
                <p className="ml-4">所以 <Math tex="\log_2 3 > 1 > \log_3 2" /></p>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-xl p-2">
              <p className="font-bold text-purple-800 mb-1">� 指数函数 vs 对数函数——对比记忆</p>
              <table className="w-full text-base border-collapse">
                <thead>
                  <tr className="bg-purple-100">
                    <th className="border border-purple-200 px-2 py-1 text-purple-700"></th>
                    <th className="border border-purple-200 px-2 py-1 text-center text-purple-700">指数函数 <Math tex="y = a^x" /></th>
                    <th className="border border-purple-200 px-2 py-1 text-center text-purple-700">对数函数 <Math tex="y = \log_a x" /></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1 font-bold">定义域</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\mathbb{R}" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="(0, +\infty)" /></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-1 font-bold">值域</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="(0, +\infty)" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\mathbb{R}" /></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1 font-bold">过定点</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="(0, 1)" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="(1, 0)" /></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-1 font-bold">单调性</td>
                    <td className="border border-gray-200 px-2 py-1 text-center" colSpan={2}><Math tex="a > 1" /> 增，<Math tex="0 < a < 1" /> 减（<strong>规则完全一样！</strong>）</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-purple-700 font-bold mt-1 text-center">定义域和值域<strong>互换</strong>！过的定点 x 和 y <strong>互换</strong>！</p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-1">📖 综合例题</p>
              <div className="leading-8">
                <p><strong>例1：</strong>比较 <Math tex="\log_3 5" />、<Math tex="\log_3 0.5" />、<Math tex="\log_{0.5} 3" /> 的大小</p>
                <p className="ml-4"><Math tex="\log_3 5" />：底数 3 &gt; 1，真数 5 &gt; 1 → 结果 <strong>&gt; 0</strong></p>
                <p className="ml-4"><Math tex="\log_3 0.5" />：底数 3 &gt; 1，真数 0.5 &lt; 1 → 结果 <strong>&lt; 0</strong></p>
                <p className="ml-4"><Math tex="\log_{0.5} 3" />：底数 0.5 &lt; 1，真数 3 &gt; 1 → 结果 <strong>&lt; 0</strong></p>
                <p className="ml-4">再比两个 &lt; 0 的：<Math tex="\log_3 0.5 \approx -0.63" />，<Math tex="\log_{0.5} 3 \approx -1.58" /></p>
                <p className="text-green-700 font-bold">✅ <Math tex="\log_3 5 > 0 > \log_3 0.5 > \log_{0.5} 3" /></p>
                <p className="mt-1"><strong>例2：</strong>求 <Math tex="y = \log_2(x - 1)" /> 的定义域</p>
                <p className="ml-4">对数里面（真数）必须 &gt; 0 → <Math tex="x - 1 > 0" /> → <Math tex="x > 1" /> → 定义域 <Math tex="(1, +\infty)" /> ✅</p>
              </div>
            </div>

            {/* ── 第3页：练习 ── */}
            <PageBreak />

            <PracticeCard
              title="✏️ 即时练习：对数函数（7题，含指数对数混合）"
              questions={elemFuncPractice3}
              printOptionCols={2}
              explanations={elementaryFuncExplanations}
            />

            <CalloutCard variant="warning" title="⚠️ 易错提醒" compact>
              <div className="space-y-0.5">
                <p><strong>定义域不是 R！</strong> 对数函数定义域是 <Math tex="(0, +\infty)" />，x 必须大于 0，这是最容易丢分的地方</p>
                <p><strong>判断正负看 1！</strong> x=1 是分界线：底数 &gt; 1 时，真数 &gt; 1 对数为正，真数 &lt; 1 对数为负</p>
                <p><strong>减函数比较要反！</strong> 底数在 (0,1) 时是减函数：真数大 → 对数值反而小</p>
                <p><strong>过定点记清楚！</strong> 指数函数过 (0,1)，对数函数过 (1,0)，别搞混！</p>
              </div>
            </CalloutCard>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-2">
              <table className="w-full text-base border-collapse">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="border border-blue-200 px-2 py-1 text-blue-700">常用对数值</th>
                    <th className="border border-blue-200 px-2 py-1 text-blue-700">结果</th>
                    <th className="border border-blue-200 px-2 py-1 text-blue-700">理由</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-200 px-2 py-1"><Math tex="\log_a 1" /></td><td className="border border-gray-200 px-2 py-1 text-center font-bold">0</td><td className="border border-gray-200 px-2 py-1"><Math tex="a^0 = 1" /></td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-200 px-2 py-1"><Math tex="\log_a a" /></td><td className="border border-gray-200 px-2 py-1 text-center font-bold">1</td><td className="border border-gray-200 px-2 py-1"><Math tex="a^1 = a" /></td></tr>
                  <tr><td className="border border-gray-200 px-2 py-1"><Math tex="\lg 10" /></td><td className="border border-gray-200 px-2 py-1 text-center font-bold">1</td><td className="border border-gray-200 px-2 py-1"><Math tex="10^1 = 10" /></td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-200 px-2 py-1"><Math tex="\ln e" /></td><td className="border border-gray-200 px-2 py-1 text-center font-bold">1</td><td className="border border-gray-200 px-2 py-1"><Math tex="e^1 = e" /></td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-200 px-2 py-1"><Math tex="\log_2 8" /></td><td className="border border-gray-200 px-2 py-1 text-center font-bold">3</td><td className="border border-gray-200 px-2 py-1"><Math tex="2^3 = 8" /></td></tr>
                </tbody>
              </table>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* Section 4: 幂函数 */}
      {/* ════════════════════════════════════════════════════════════ */}
      <PageBreak />
      <section id="ef-power-func" className="mb-2 scroll-mt-4">
        <Collapsible title="四、幂函数 — 🎯 区分幂函数和指数函数，掌握 5 种常考幂函数" defaultOpen storageKey="elem-func:power-func" headerExtra={<SpeakButton text={elemFuncNarrations.powerFunc} />}>
          <div className="space-y-0 text-gray-700">

            {/* ── 第1页：什么是幂函数 + 区分 + 5种表 ── */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-2">
              <p className="font-bold text-amber-800 mb-1">🔑 你其实早就认识幂函数了！</p>
              <div className="leading-8">
                <p><Math tex="y = x" />（正比例函数）、<Math tex="y = x^2" />（抛物线）、<Math tex="y = \frac{1}{x}" />（反比例）—— 这些都是<strong>幂函数</strong>！</p>
                <p>它们的共同特点：<strong>底数是 x（变量）</strong>，指数是一个<strong>固定的常数</strong></p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-xl p-2">
              <p className="font-bold text-blue-800 mb-1">� 幂函数的标准形式</p>
              <p className="text-center text-lg leading-8"><Math tex="y = x^{\alpha} \quad (\alpha \text{ 是常数})" /></p>
              <div className="leading-7 mt-1">
                <p className="ml-4"><Math tex="x" /> 是底数（<strong>变量</strong>），<Math tex="\alpha" /> 是指数（<strong>常数</strong>）</p>
                <p className="ml-4">和指数函数 <Math tex="y = a^x" /> 正好<strong>反过来</strong>：指数函数底数是常数、指数是变量</p>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  <p>✅ 是：<Math tex="y = x^3" />、<Math tex="y = \sqrt{x}" />、<Math tex="y = \frac{1}{x}" /></p>
                  <p>❌ 不是：<Math tex="y = 2x^2" />（系数<Math tex="\neq 1" />）、<Math tex="y = x^2 + 1" />（多了<Math tex="+1" />）</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-2">
              <p className="font-bold text-red-800 mb-1">🤔 三种函数长得很像，怎么区分？</p>
              <div className="leading-8">
                <p><strong>指数函数</strong> <Math tex="y = 2^x" />：底数是常数（2），指数是变量（x）→ <strong>常数在下</strong></p>
                <p><strong>幂函数</strong> <Math tex="y = x^2" />：底数是变量（x），指数是常数（2）→ <strong>常数在上</strong></p>
                <p><strong>对数函数</strong> <Math tex="y = \log_2 x" />：用对数连接</p>
                <p className="text-red-700 font-bold">口诀：常数在上 = 幂函数，常数在下 = 指数函数</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-1">📖 高中常考的 5 种幂函数（都是老朋友）</p>
              <table className="w-full text-base border-collapse">
                <thead>
                  <tr className="bg-purple-50">
                    <th className="border border-purple-200 px-2 py-1 text-purple-700"><Math tex="\alpha" /></th>
                    <th className="border border-purple-200 px-2 py-1 text-center text-purple-700">函数</th>
                    <th className="border border-purple-200 px-2 py-1 text-center text-purple-700">你认识它吗？</th>
                    <th className="border border-purple-200 px-2 py-1 text-center text-purple-700">定义域</th>
                    <th className="border border-purple-200 px-2 py-1 text-center text-purple-700">在 <Math tex="(0,+\infty)" /></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1 text-center">1</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="y = x" /></td>
                    <td className="border border-gray-200 px-2 py-1">正比例函数（直线）</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\mathbb{R}" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center text-blue-700">增</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-1 text-center">2</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="y = x^2" /></td>
                    <td className="border border-gray-200 px-2 py-1">抛物线（二次函数）</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\mathbb{R}" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center text-blue-700">增</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1 text-center">3</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="y = x^3" /></td>
                    <td className="border border-gray-200 px-2 py-1">三次曲线</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\mathbb{R}" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center text-blue-700">增</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\frac{1}{2}" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="y = \sqrt{x}" /></td>
                    <td className="border border-gray-200 px-2 py-1">开根号</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="[0, +\infty)" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center text-blue-700">增</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1 text-center">-1</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="y = \dfrac{1}{x}" /></td>
                    <td className="border border-gray-200 px-2 py-1">反比例函数</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="x \neq 0" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center text-red-600">减</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-2">
              <p className="font-bold text-green-800 mb-1">❓ 为什么定义域不统一？</p>
              <div className="leading-8">
                <p><Math tex="y = x^2" />：任何数都能平方 → 定义域 <Math tex="\mathbb{R}" /></p>
                <p><Math tex="y = \sqrt{x}" />：负数不能开根号 → 定义域 <Math tex="[0, +\infty)" /></p>
                <p><Math tex="y = \frac{1}{x}" />：分母不能为 0 → 定义域 <Math tex="x \neq 0" /></p>
                <p className="text-green-700 font-bold">结论：幂函数的定义域取决于 <Math tex="\alpha" /> 的值，没有统一答案！但都在 <Math tex="(0,+\infty)" /> 上有定义</p>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-2">
              <p className="font-bold text-gray-800 mb-1">⚠️ 幂函数的形式要求很严格</p>
              <div className="leading-8">
                <p>幂函数必须是 <Math tex="y = x^{\alpha}" /> 的<strong>纯粹形式</strong>：系数只能是 1，不能有额外的加减</p>
                <p><Math tex="y = 2x^3" /> ❌（系数是 2）　<Math tex="y = -x^2" /> ❌（系数是 -1）　<Math tex="y = x^2 + 3" /> ❌（多了 +3）</p>
              </div>
            </div>

            {/* ── 第2页：图像 + 性质 + 综合例题 ── */}
            <PageBreak />

            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-1">📊 5种幂函数的图像长什么样？</p>
              <div className="grid grid-cols-5 gap-1">
                <div className="rounded-lg overflow-hidden border border-gray-200 text-center">
                  <Mafs viewBox={{ x: [-2, 3], y: [-2, 3] }} height={100}>
                    <Coordinates.Cartesian xAxis={{ lines: false, labels: () => '' }} yAxis={{ lines: false, labels: () => '' }} />
                    <Plot.OfX y={(x: number) => x} color="#6b7280" weight={2.5} />
                    <Point x={1} y={1} color="#ef4444" />
                  </Mafs>
                  <p className="text-xs py-0.5"><Math tex="y = x" /></p>
                </div>
                <div className="rounded-lg overflow-hidden border border-blue-200 text-center">
                  <Mafs viewBox={{ x: [-2, 2], y: [-0.5, 4] }} height={100}>
                    <Coordinates.Cartesian xAxis={{ lines: false, labels: () => '' }} yAxis={{ lines: false, labels: () => '' }} />
                    <Plot.OfX y={(x: number) => x ** 2} color="#3b82f6" weight={2.5} />
                    <Point x={1} y={1} color="#ef4444" />
                  </Mafs>
                  <p className="text-xs py-0.5"><Math tex="y = x^2" /></p>
                </div>
                <div className="rounded-lg overflow-hidden border border-purple-200 text-center">
                  <Mafs viewBox={{ x: [-1.5, 1.5], y: [-3, 3] }} height={100}>
                    <Coordinates.Cartesian xAxis={{ lines: false, labels: () => '' }} yAxis={{ lines: false, labels: () => '' }} />
                    <Plot.OfX y={(x: number) => x ** 3} color="#8b5cf6" weight={2.5} />
                    <Point x={1} y={1} color="#ef4444" />
                  </Mafs>
                  <p className="text-xs py-0.5"><Math tex="y = x^3" /></p>
                </div>
                <div className="rounded-lg overflow-hidden border border-green-200 text-center">
                  <Mafs viewBox={{ x: [-0.5, 4], y: [-0.5, 3] }} height={100}>
                    <Coordinates.Cartesian xAxis={{ lines: false, labels: () => '' }} yAxis={{ lines: false, labels: () => '' }} />
                    <Plot.OfX y={(x: number) => x > 0 ? x ** 0.5 : NaN} color="#22c55e" weight={2.5} />
                    <Point x={1} y={1} color="#ef4444" />
                  </Mafs>
                  <p className="text-xs py-0.5"><Math tex="y = \sqrt{x}" /></p>
                </div>
                <div className="rounded-lg overflow-hidden border border-red-200 text-center">
                  <Mafs viewBox={{ x: [-0.5, 4], y: [-1, 5] }} height={100}>
                    <Coordinates.Cartesian xAxis={{ lines: false, labels: () => '' }} yAxis={{ lines: false, labels: () => '' }} />
                    <Plot.OfX y={(x: number) => x > 0.08 ? 1 / x : NaN} color="#ef4444" weight={2.5} />
                    <Point x={1} y={1} color="#ef4444" />
                  </Mafs>
                  <p className="text-xs py-0.5"><Math tex="y = \frac{1}{x}" /></p>
                </div>
              </div>
              <p className="text-gray-500 text-center text-xs mt-0.5">红色点 = 公共定点 <Math tex="(1, 1)" />，前4个 <Math tex="\alpha > 0" /> 递增，最后1个 <Math tex="\alpha < 0" /> 递减</p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-2">
              <p className="font-bold text-green-800 mb-1">🔑 幂函数核心性质（4条铁律）</p>
              <div className="leading-8">
                <p><strong>①</strong> 所有幂函数在 <Math tex="(0, +\infty)" /> 上都有定义（不管 <Math tex="\alpha" /> 是多少）</p>
                <p><strong>②</strong> 所有幂函数都过点 <Math tex="(1, 1)" />（因为 <Math tex="1^{\alpha} = 1" />，1 的任何次方都是 1）</p>
                <p><strong>③</strong> <Math tex="\alpha > 0" /> → 在 <Math tex="(0, +\infty)" /> 上<strong>递增</strong>（<Math tex="\alpha = 1, 2, 3, \frac{1}{2}" /> 都是增函数）</p>
                <p><strong>④</strong> <Math tex="\alpha < 0" /> → 在 <Math tex="(0, +\infty)" /> 上<strong>递减</strong>（如 <Math tex="\alpha = -1" /> 的 <Math tex="\frac{1}{x}" />）</p>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-xl p-2">
              <p className="font-bold text-purple-800 mb-1">💡 一句话记住增减</p>
              <p className="text-center text-lg leading-8"><Math tex="\alpha" /> 为正 → 增函数，<Math tex="\alpha" /> 为负 → 减函数（在第一象限）</p>
              <p className="text-center text-lg leading-8">和前面的规则完全不同：幂函数<strong>看 <Math tex="\alpha" /> 的正负</strong>，不看底数！</p>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-2">
              <p className="font-bold text-indigo-800 mb-1">📌 三种函数的"定点"对比（必记！）</p>
              <div className="grid grid-cols-3 divide-x divide-indigo-200 text-lg leading-10 text-gray-700">
                <p className="text-center">指数函数过 <Math tex="(0, 1)" /></p>
                <p className="text-center">对数函数过 <Math tex="(1, 0)" /></p>
                <p className="text-center">幂函数过 <Math tex="(1, 1)" /></p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-1">📖 综合例题</p>
              <div className="leading-8">
                <p><strong>例1：</strong>比较 <Math tex="3^{0.5}" /> 和 <Math tex="0.5^3" /> 的大小</p>
                <p className="ml-4"><Math tex="3^{0.5} = \sqrt{3} \approx 1.73" />（底数 &gt; 1 且指数 &gt; 0 → 结果 &gt; 1）</p>
                <p className="ml-4"><Math tex="0.5^3 = 0.125" />（底数在 (0,1) 且指数 &gt; 0 → 结果 &lt; 1）</p>
                <p className="text-green-700 font-bold">✅ <Math tex="3^{0.5} > 1 > 0.5^3" />（技巧：和 1 比较！）</p>
                <p className="mt-1"><strong>例2：</strong>判断 <Math tex="y = x^{-2}" /> 在 <Math tex="(0, +\infty)" /> 上的单调性</p>
                <p className="ml-4"><Math tex="\alpha = -2 < 0" /> → 在 <Math tex="(0, +\infty)" /> 上是<strong>减函数</strong></p>
                <p className="ml-4">验证：<Math tex="x=1 \to y=1" />，<Math tex="x=2 \to y=0.25" />，<Math tex="x=3 \to y \approx 0.11" />，越来越小 ✅</p>
                <p className="mt-1"><strong>例3：</strong>判断 <Math tex="y = 3x^2" /> 是不是幂函数</p>
                <p className="ml-4">不是！幂函数要求 <Math tex="y = x^{\alpha}" /> 形式，系数只能是 1。这里系数是 3 ❌</p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-2">
              <p className="font-bold text-amber-800 mb-1">🔗 四种基本初等函数大总结</p>
              <table className="w-full text-base border-collapse">
                <thead>
                  <tr className="bg-amber-100">
                    <th className="border border-amber-200 px-2 py-1 text-amber-700">函数</th>
                    <th className="border border-amber-200 px-2 py-1 text-amber-700">形式</th>
                    <th className="border border-amber-200 px-2 py-1 text-amber-700">谁是变量？</th>
                    <th className="border border-amber-200 px-2 py-1 text-amber-700">过定点</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-200 px-2 py-1">指数函数</td><td className="border border-gray-200 px-2 py-1 text-center"><Math tex="y = a^x" /></td><td className="border border-gray-200 px-2 py-1">x 在指数位置</td><td className="border border-gray-200 px-2 py-1 text-center"><Math tex="(0, 1)" /></td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-200 px-2 py-1">对数函数</td><td className="border border-gray-200 px-2 py-1 text-center"><Math tex="y = \log_a x" /></td><td className="border border-gray-200 px-2 py-1">x 在真数位置</td><td className="border border-gray-200 px-2 py-1 text-center"><Math tex="(1, 0)" /></td></tr>
                  <tr><td className="border border-gray-200 px-2 py-1">幂函数</td><td className="border border-gray-200 px-2 py-1 text-center"><Math tex="y = x^{\alpha}" /></td><td className="border border-gray-200 px-2 py-1">x 在底数位置</td><td className="border border-gray-200 px-2 py-1 text-center"><Math tex="(1, 1)" /></td></tr>
                </tbody>
              </table>
            </div>

            {/* ── 第3页：练习 ── */}
            <PageBreak />

            <PracticeCard
              title="✏️ 即时练习：幂函数（7题，含四种函数综合）"
              questions={elemFuncPractice4}
              printOptionCols={2}
              explanations={elementaryFuncExplanations}
            />

            <CalloutCard variant="warning" title="⚠️ 易错提醒" compact>
              <div className="space-y-0.5">
                <p><strong>别和指数函数搞混！</strong> <Math tex="y = x^2" /> 是幂函数（常数在上），<Math tex="y = 2^x" /> 是指数函数（常数在下）</p>
                <p><strong>定义域不统一！</strong> <Math tex="y = x^2" /> 定义域是 <Math tex="\mathbb{R}" />，<Math tex="y = \sqrt{x}" /> 定义域是 <Math tex="[0,+\infty)" />，<Math tex="y = \frac{1}{x}" /> 要求 <Math tex="x \neq 0" /></p>
                <p><strong>单调性看 <Math tex="\alpha" /> 正负！</strong> <Math tex="\alpha > 0" /> 增，<Math tex="\alpha < 0" /> 减（在第一象限）</p>
                <p><strong>过定点别搞混！</strong> 指数过 <Math tex="(0,1)" />，对数过 <Math tex="(1,0)" />，幂函数过 <Math tex="(1,1)" /></p>
              </div>
            </CalloutCard>

            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-2">
              <p className="font-bold text-indigo-800 mb-1">📋 四种函数单调性速查</p>
              <table className="w-full text-base border-collapse">
                <thead>
                  <tr className="bg-indigo-100">
                    <th className="border border-indigo-200 px-2 py-1 text-indigo-700">函数</th>
                    <th className="border border-indigo-200 px-2 py-1 text-indigo-700">增函数条件</th>
                    <th className="border border-indigo-200 px-2 py-1 text-indigo-700">减函数条件</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-200 px-2 py-1">指数 <Math tex="y=a^x" /></td><td className="border border-gray-200 px-2 py-1 text-center"><Math tex="a > 1" /></td><td className="border border-gray-200 px-2 py-1 text-center"><Math tex="0 < a < 1" /></td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-200 px-2 py-1">对数 <Math tex="y=\log_a x" /></td><td className="border border-gray-200 px-2 py-1 text-center"><Math tex="a > 1" /></td><td className="border border-gray-200 px-2 py-1 text-center"><Math tex="0 < a < 1" /></td></tr>
                  <tr><td className="border border-gray-200 px-2 py-1">幂 <Math tex="y=x^{\alpha}" /></td><td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\alpha > 0" /></td><td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\alpha < 0" /></td></tr>
                </tbody>
              </table>
              <p className="text-indigo-600 mt-1 text-center">指数和对数看<strong>底数 a</strong>，幂函数看<strong>指数 α</strong></p>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* Section 5: 综合自测 */}
      {/* ════════════════════════════════════════════════════════════ */}
      <PageBreak />
      <section id="ef-quiz" className="mb-2 scroll-mt-4">
        <Collapsible title="五、高考真题精选（8题）— 改编自近年高考，检验学习成果" defaultOpen storageKey="elem-func:quiz">
          <QuizPanel questions={elemFuncQuizQuestions} module="elem-func-quiz" explanations={elementaryFuncExplanations} />
        </Collapsible>
      </section>

      {/* 速查表 */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-2 mt-1">
        <p className="font-bold text-indigo-800 mb-1">📌 总速查表（打印贴墙上）</p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 leading-7 text-gray-700">
          <p><strong>积的对数</strong>：<Math tex="\log_a(MN) = \log_a M + \log_a N" /></p>
          <p><strong>商的对数</strong>：<Math tex="\log_a\frac{M}{N} = \log_a M - \log_a N" /></p>
          <p><strong>幂的对数</strong>：<Math tex="\log_a M^n = n\log_a M" /></p>
          <p><strong>换底公式</strong>：<Math tex="\log_a b = \dfrac{\lg b}{\lg a}" /></p>
          <p><strong>指数函数</strong>：过 <Math tex="(0,1)" />，<Math tex="a>1" /> 增 / <Math tex="0<a<1" /> 减</p>
          <p><strong>对数函数</strong>：过 <Math tex="(1,0)" />，<Math tex="a>1" /> 增 / <Math tex="0<a<1" /> 减</p>
          <p><strong>幂函数</strong>：过 <Math tex="(1,1)" />，<Math tex="\alpha>0" /> 增 / <Math tex="\alpha<0" /> 减</p>
          <p><strong>指数值域</strong>：<Math tex="(0,+\infty)" />　<strong>对数定义域</strong>：<Math tex="(0,+\infty)" /></p>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* 打印模式答案区 */}
      {/* ════════════════════════════════════════════════════════════ */}
      {isPrinting && printOptions.showAnswers && <ElementaryFuncAnswers />}

      </LessonLayout>
    </div>
  );
}
