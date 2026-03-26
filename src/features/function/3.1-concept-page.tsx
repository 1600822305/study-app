import { Mafs, Coordinates, Plot, Point, Text as MafsText, Vector } from 'mafs';
import { Math, Collapsible, SpeakButton, PageHeader, LessonLayout, ExportButton, PageBreak, PracticeCard, QuizPanel } from '@/components/shared';
import { functionConceptNarrations } from './data/3.1/3.1-concept-narrations';
import { functionConceptProgressItems } from './data/3.1/3.1-concept-progress';
import { useProgress, usePrintMode } from '@/hooks';
import { scrollToId } from '@/lib/scroll';
import { conceptPractice } from './data/3.1/3.1-concept-practice';
import { conceptQuizQuestions } from './data/3.1/3.1-concept-quiz';
import { FunctionConceptAnswers, functionConceptExplanations } from './3.1-concept-answers';

export function FunctionConceptPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('function-concept', functionConceptProgressItems);
  const { isPrinting, printOptions } = usePrintMode();

  return (
    <div>
      <PageHeader
        stage="第三阶段 · 函数思维"
        title="3.1 函数的概念与性质"
        narration={functionConceptNarrations.intro}
        subtitle="高考数学的灵魂：函数定义 ➡ 三要素 ➡ 单调性 ➡ 奇偶性"
        tags={[
          { label: '难度 ★★★☆☆', color: 'amber' },
          { label: '核心中的核心', color: 'red' },
          { label: '约3-4小时', color: 'purple' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="3.1 函数的概念与性质" />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-2 mb-1">
        <p className="font-bold text-gray-800 mb-1">📋 知识地图</p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 text-gray-600">
          <button onClick={() => scrollToId('fc-definition')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">一、函数的定义（从初中升级到高中）</button>
          <button onClick={() => scrollToId('fc-three-elements')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">二、函数三要素与求定义域</button>
          <button onClick={() => scrollToId('fc-representation')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">三、函数的表示法与分段函数</button>
          <button onClick={() => scrollToId('fc-range')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">四、求值域的基本方法</button>
          <button onClick={() => scrollToId('fc-monotonicity')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">五、单调性与最值</button>
          <button onClick={() => scrollToId('fc-parity')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">六、奇偶性（对称之美）</button>
        </div>
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* Section 1: 函数的定义 */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section id="fc-definition" className="mb-2 scroll-mt-4">
        <Collapsible title="一、函数的定义（从初中升级到高中）" defaultOpen storageKey="func-concept:definition" headerExtra={<SpeakButton text={functionConceptNarrations.definition} />}>
          <div className="space-y-1.5 text-gray-700">

            {/* 回顾初中 */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-2">
              <p className="leading-7"><strong className="text-amber-800">🔙 初中怎么说的？</strong> — 给一个 <Math tex="x" /> 的值，就能算出<strong>唯一</strong>一个 <Math tex="y" /> 的值，<Math tex="y" /> 就是 <Math tex="x" /> 的函数。这个理解完全正确，高中只是用<strong>更严格的语言</strong>来说同一件事。</p>
            </div>

            {/* 高中定义 */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-2">
              <p className="font-bold text-blue-800 mb-1">📖 高中定义（用集合语言）</p>
              <div className="grid gap-2" style={{ gridTemplateColumns: '2fr 3fr' }}>
                <div className="bg-white rounded-lg border border-blue-100 px-1.5 py-2 leading-8">
                  <p className="font-bold text-blue-700 mb-0.5">课本原话：</p>
                  <p>设 <Math tex="A" />、<Math tex="B" /> 是两个<strong>非空数集</strong>，</p>
                  <p>如果按照某个对应法则 <Math tex="f" />，</p>
                  <p>对于集合 <Math tex="A" /> 中的<strong>每一个</strong> <Math tex="x" />，</p>
                  <p>在集合 <Math tex="B" /> 中都有<strong>唯一确定</strong>的 <Math tex="y" /> 与之对应，</p>
                  <p>那么就称 <Math tex="f" /> 是从 <Math tex="A" /> 到 <Math tex="B" /> 的一个<strong>函数</strong>。</p>
                </div>
                <div className="bg-white rounded-lg border border-green-200 px-1.5 py-2 leading-8">
                  <p className="font-bold text-green-700 mb-0.5">拆成大白话：</p>
                  <p><Math tex="A" /> = 一堆输入的数（<strong>定义域</strong>），<Math tex="B" /> = 一堆候选的输出数（<strong>陪域</strong>）</p>
                  <p><Math tex="f" /> = 一台机器（比如"乘以2再加1"）</p>
                  <p>把 <Math tex="A" /> 里的数<strong>一个一个</strong>丢进机器</p>
                  <p>每个数<strong>只会</strong>吐出<strong>一个</strong>落在 <Math tex="B" /> 里的结果</p>
                  <p>所有实际吐出来的结果组成<strong>值域</strong>（是 <Math tex="B" /> 的一部分）</p>
                </div>
              </div>
              <p className="text-center text-xl font-bold text-blue-800 mt-1"><Math tex="y = f(x), \quad x \in A" /></p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl px-2 py-1">
              <div className="grid grid-cols-2 gap-2 leading-6">
                <div>
                  <p className="font-bold text-gray-800">初中说法：</p>
                  <p>给 <Math tex="x" />，算 <Math tex="y" />，<Math tex="y" /> 是 <Math tex="x" /> 的函数</p>
                </div>
                <div>
                  <p className="font-bold text-gray-800">高中说法：</p>
                  <p>集合 <Math tex="A" /> 里的每个 <Math tex="x" /> ➡ 通过法则 <Math tex="f" /> ➡ 对应集合 <Math tex="B" /> 里唯一的 <Math tex="y" /></p>
                </div>
              </div>
              <p className="text-green-700 font-bold mt-0.5">👉 本质没变，只是加了"集合"和"对应法则"两个词。</p>
            </div>

            {/* 两个关键词 */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-2">
              <p className="font-bold text-orange-800 mb-0.5">⚡ 两个关键词决定"是不是函数"</p>
              <div className="grid grid-cols-2 gap-3 leading-7">
                <div>
                  <p className="font-bold text-orange-700">① 每个 x 都必须有 y</p>
                  <p>定义域里的每个 x，都能算出一个 y</p>
                  <p>不能有 x 代进去算不了的情况</p>
                </div>
                <div>
                  <p className="font-bold text-orange-700">② 每个 x 只能有一个 y</p>
                  <p>同一个 x 代进去，只能得到一个结果</p>
                  <p>不能一个 x 算出两个不同的 y</p>
                </div>
              </div>
            </div>

            {/* f(x) 符号解读 */}
            <div className="border-l-4 border-purple-400 pl-2 leading-7 break-inside-avoid">
              <p className="font-bold text-purple-800">📝 <Math tex="f(x)" /> 怎么读？</p>
              <p><Math tex="f(x)" /> 读作"f x"，意思是"<strong>按法则 f 对 x 做运算后得到的值</strong>"</p>
              <p>比如法则是"乘以2再加1"，写成 <Math tex="f(x) = 2x + 1" />，那么 <Math tex="f(3) = 2 \times 3 + 1 = 7" />，<Math tex="f(-1) = 2 \times (-1) + 1 = -1" /></p>
              <p className="text-purple-700 font-bold">💡 <Math tex="f(3)" /> 就是"把 3 代入公式算出来的值"，就这么简单！</p>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak label="函数三要素与定义域" />

      {/* ═══════════════════════════════════════════════════════ */}
      {/* Section 2: 函数三要素与求定义域 */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section id="fc-three-elements" className="mb-2 scroll-mt-4">
        <Collapsible title="二、函数三要素与求定义域" defaultOpen storageKey="func-concept:three-elements" headerExtra={<SpeakButton text={functionConceptNarrations.threeElements} />}>
          <div className="space-y-1.5 text-gray-700">

            {/* 三要素 */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-2">
              <p className="font-bold text-amber-800 mb-1">🏗️ 函数三要素（缺一不可）</p>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-white rounded-lg border border-amber-200 p-2 text-center">
                  <p className="font-bold text-blue-700 text-lg">① 定义域</p>
                  <p className="leading-7"><Math tex="x" /> 能取哪些值</p>
                  <p className="text-gray-500">（输入范围）</p>
                </div>
                <div className="bg-white rounded-lg border border-amber-200 p-2 text-center">
                  <p className="font-bold text-green-700 text-lg">② 对应法则</p>
                  <p className="leading-7">怎么从 <Math tex="x" /> 算出 <Math tex="y" /></p>
                  <p className="text-gray-500">（计算规则）</p>
                </div>
                <div className="bg-white rounded-lg border border-amber-200 p-2 text-center">
                  <p className="font-bold text-red-700 text-lg">③ 值域</p>
                  <p className="leading-7"><Math tex="y" /> 的取值范围</p>
                  <p className="text-gray-500">（输出范围）</p>
                </div>
              </div>
              <p className="text-amber-700 font-bold mt-1">⚠️ 两个函数<strong>定义域和对应法则都相同</strong>，才是同一个函数！</p>
            </div>

            {/* 举例：同一个函数？ */}
            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-1">🤔 它们是同一个函数吗？</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-green-50 border border-green-200 rounded-lg p-2 leading-7">
                  <p className="font-bold text-green-700">✅ 是同一个</p>
                  <p><Math tex="f(x) = x^2" />（定义域 <Math tex="\mathbb{R}" />）和 <Math tex="g(t) = t^2" />（定义域 <Math tex="\mathbb{R}" />）</p>
                  <p>虽然字母不同，但定义域相同，法则相同（都是平方），所以是同一个函数。</p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-2 leading-7">
                  <p className="font-bold text-red-700">❌ 不是同一个</p>
                  <p><Math tex="f(x) = x" />（定义域 <Math tex="\mathbb{R}" />）和 <Math tex="g(x) = \dfrac{x^2}{x}" />（定义域 <Math tex="x \neq 0" />）</p>
                  <p>法则化简后一样，但定义域不同！</p>
                </div>
              </div>
            </div>

            {/* 求定义域：三大限制 */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-2">
              <p className="font-bold text-blue-800 mb-1">🎯 求定义域：四大限制条件</p>
              <table className="w-full text-base border-collapse">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="border border-blue-200 px-2 py-1 text-left text-blue-700">遇到什么</th>
                    <th className="border border-blue-200 px-2 py-1 text-center text-blue-700">要求</th>
                    <th className="border border-blue-200 px-2 py-1 text-center text-blue-700">举例</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1 font-bold">分母</td>
                    <td className="border border-gray-200 px-2 py-1 text-center">分母的式子 <Math tex="\neq 0" /></td>
                    <td className="border border-gray-200 px-2 py-1"><Math tex="y = \dfrac{1}{x-2} \Rightarrow x-2 \neq 0 \Rightarrow x \neq 2" /></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-1 font-bold">偶次根号（单独）</td>
                    <td className="border border-gray-200 px-2 py-1 text-center">根号下的式子 <Math tex="\geq 0" /><br /><span className="text-gray-500">注：奇次根号如 <Math tex="\sqrt[3]{x}" /> 无此限制</span></td>
                    <td className="border border-gray-200 px-2 py-1"><Math tex="y = \sqrt{x-3} \Rightarrow x-3 \geq 0 \Rightarrow x \geq 3" /></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1 font-bold">根号在分母</td>
                    <td className="border border-gray-200 px-2 py-1 text-center">根号下的式子 <Math tex="> 0" /></td>
                    <td className="border border-gray-200 px-2 py-1"><Math tex="y = \dfrac{1}{\sqrt{x}} \Rightarrow x > 0" /></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-1 font-bold">零次幂</td>
                    <td className="border border-gray-200 px-2 py-1 text-center">底数 <Math tex="\neq 0" /></td>
                    <td className="border border-gray-200 px-2 py-1"><Math tex="y = (x-1)^0 \Rightarrow x-1 \neq 0 \Rightarrow x \neq 1" /></td>
                  </tr>
                </tbody>
              </table>
              <p className="text-blue-700 font-bold mt-1">📌 多个限制同时出现 ➡ 取<strong>交集</strong>（所有条件同时满足）</p>
            </div>

            {/* 组合限制完整例题 */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-2">
              <p className="font-bold text-green-800 mb-1">✏️ 完整例题：多个限制同时出现</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white rounded-lg border border-green-200 p-2 leading-8">
                  <p>求 <Math tex="f(x) = \sqrt{x+3} + \dfrac{1}{x-1}" /> 的定义域</p>
                  <p><strong>Step 1</strong>：根号下 <Math tex="\geq 0" />：<Math tex="x + 3 \geq 0 \Rightarrow x \geq -3" /></p>
                  <p><strong>Step 2</strong>：分母 <Math tex="\neq 0" />：<Math tex="x - 1 \neq 0 \Rightarrow x \neq 1" /></p>
                  <p><strong>Step 3</strong>：取交集：<Math tex="x \geq -3" /> 且 <Math tex="x \neq 1" /></p>
                  <p><strong>结果</strong>：<Math tex="[-3,\,1) \cup (1,\,+\infty)" />（即 <Math tex="x \geq -3" /> 且 <Math tex="x \neq 1" />）</p>
                </div>
                <div className="bg-white rounded-lg border border-green-200 p-2 leading-8">
                  <p>求 <Math tex="y = (x-5)^0 + \dfrac{1}{\sqrt{x-3}}" /> 的定义域</p>
                  <p><strong>Step 1</strong>：零次幂底数 <Math tex="\neq 0" />：<Math tex="x - 5 \neq 0 \Rightarrow x \neq 5" /></p>
                  <p><strong>Step 2</strong>：根号在分母 <Math tex="> 0" />：<Math tex="x - 3 > 0 \Rightarrow x > 3" /></p>
                  <p><strong>Step 3</strong>：取交集：<Math tex="x > 3" /> 且 <Math tex="x \neq 5" /></p>
                  <p><strong>结果</strong>：<Math tex="(3,\,5) \cup (5,\,+\infty)" />（即 <Math tex="x > 3" /> 且 <Math tex="x \neq 5" />）</p>
                </div>
              </div>
            </div>

            {/* 速练 */}
            <div className="border-l-4 border-gray-400 pl-2 leading-7">
              <p className="font-bold text-gray-800">🧠 速练：求下列函数的定义域</p>
              <p>1. <Math tex="f(x) = \dfrac{1}{x+1}" /> ➡ <span className="text-gray-400">______</span>（答案：<Math tex="x \neq -1" />，即 <Math tex="(-\infty,-1) \cup (-1,+\infty)" />）</p>
              <p>2. <Math tex="f(x) = \sqrt{2x-4}" /> ➡ <span className="text-gray-400">______</span>（答案：<Math tex="2x-4 \geq 0 \Rightarrow x \geq 2" />，即 <Math tex="[2,+\infty)" />）</p>
              <p>3. <Math tex="f(x) = \dfrac{1}{\sqrt{x-1}}" /> ➡ <span className="text-gray-400">______</span>（答案：<Math tex="x-1 > 0 \Rightarrow x > 1" />，即 <Math tex="(1,+\infty)" />）</p>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak label="函数的表示法" />

      {/* ═══════════════════════════════════════════════════════ */}
      {/* Section 3: 函数的表示法 */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section id="fc-representation" className="mb-2 scroll-mt-4">
        <Collapsible title="三、函数的表示法（三种方式 + 分段函数）" defaultOpen storageKey="func-concept:representation" headerExtra={<SpeakButton text={functionConceptNarrations.representation} />}>
          <div className="space-y-1.5 text-gray-700">

            {/* 三种表示法 */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-2">
              <p className="font-bold text-blue-800 mb-1">📖 函数有三种"写法"</p>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-white rounded-lg border border-blue-200 p-2">
                  <p className="font-bold text-blue-700 mb-0.5">① 解析法</p>
                  <p className="leading-7">用公式表示</p>
                  <p className="leading-7">如 <Math tex="y = 2x + 1" /></p>
                  <p className="text-gray-500 leading-7">✅ 精确、可计算</p>
                </div>
                <div className="bg-white rounded-lg border border-blue-200 p-2">
                  <p className="font-bold text-green-700 mb-0.5">② 列表法</p>
                  <p className="leading-7">用表格表示</p>
                  <p className="leading-7">如温度记录表</p>
                  <p className="text-gray-500 leading-7">✅ 直观、查数据方便</p>
                </div>
                <div className="bg-white rounded-lg border border-blue-200 p-2">
                  <p className="font-bold text-red-700 mb-0.5">③ 图象法</p>
                  <p className="leading-7">用坐标图表示</p>
                  <p className="leading-7">如股票走势图</p>
                  <p className="text-gray-500 leading-7">✅ 看趋势、找规律</p>
                </div>
              </div>
              <p className="text-blue-700 font-bold mt-1">📌 高中最常用<strong>解析法</strong>，但考试也会给图或表让你分析。</p>
            </div>

            {/* 分段函数 */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-2">
              <p className="font-bold text-orange-800 mb-1">⚡ 分段函数（重点 + 难点！）</p>
              <div className="leading-7">
                <p><strong>什么是分段函数？</strong>x 在不同范围内，用<strong>不同的公式</strong>来算 y。</p>
                <p className="mt-1"><strong>生活例子：</strong>出租车计费</p>
                <p className="pl-4">3公里内：起步价 10 元</p>
                <p className="pl-4">超过3公里：每公里加 2 元</p>
              </div>
              <div className="bg-white rounded-lg border border-orange-200 p-2 mt-1">
                <p className="font-bold text-gray-800 mb-0.5">写成公式：</p>
                <div className="text-center text-lg leading-10">
                  <Math tex="f(x) = \begin{cases} 10 & 0 < x \leq 3 \\ 10 + 2(x-3) & x > 3 \end{cases}" />
                </div>
                <p className="leading-7 mt-1">求 <Math tex="f(2)" />：2 ≤ 3，用第一段 ➡ <Math tex="f(2) = 10" />（元）</p>
                <p className="leading-7">求 <Math tex="f(5)" />：5 &gt; 3，用第二段 ➡ <Math tex="f(5) = 10 + 2(5-3) = 14" />（元）</p>
              </div>
            </div>

            {/* 分段函数注意事项 */}
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-2">
              <p className="font-bold text-purple-800 mb-0.5">🔑 分段函数解题要诀</p>
              <div className="leading-7">
                <p><strong>① 先看 x 落在哪一段</strong>，再用那一段的公式算</p>
                <p><strong>② 每一段的范围不能重叠</strong>（一个 x 只对应一个 y，才是函数）</p>
                <p><strong>③ 大括号只是"打包"，本质还是一个函数</strong></p>
              </div>
            </div>

            {/* 速练 */}
            <div className="border-l-4 border-gray-400 pl-2 leading-7">
              <p className="font-bold text-gray-800 mb-0.5">🧠 速练：分段函数求值</p>
              <div className="grid gap-2" style={{ gridTemplateColumns: '1fr 2fr' }}>
                <div className="text-center leading-10">
                  <Math tex="f(x) = \begin{cases} x^2 & x \geq 0 \\ -x & x < 0 \end{cases}" />
                </div>
                <div className="leading-7">
                  <p>1. <Math tex="f(3) =" /> <span className="text-gray-400">____</span>（答案：9，因为 3 ≥ 0 用第一段）</p>
                  <p>2. <Math tex="f(-2) =" /> <span className="text-gray-400">____</span>（答案：2，因为 -2 &lt; 0 用第二段）</p>
                  <p>3. <Math tex="f(0) =" /> <span className="text-gray-400">____</span>（答案：0，因为 0 ≥ 0 用第一段）</p>
                </div>
              </div>
            </div>

            {/* 分段函数图象 */}
            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-1">👀 分段函数的图象长什么样？</p>
              <div className="flex gap-3 items-start">
                <div className="flex-1 leading-7">
                  <p className="mb-0.5"><Math tex="f(x) = \begin{cases} x^2 & x \geq 0 \\ -x & x < 0 \end{cases}" /></p>
                  <p><span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-1 align-middle"></span> <strong className="text-blue-600">右半段</strong>（<Math tex="x \geq 0" />）：抛物线 <Math tex="y = x^2" /></p>
                  <p><span className="inline-block w-3 h-3 rounded-full bg-red-500 mr-1 align-middle"></span> <strong className="text-red-600">左半段</strong>（<Math tex="x < 0" />）：直线 <Math tex="y = -x" /></p>
                  <p className="mt-1 text-green-700 font-bold">📌 两段在 <Math tex="x = 0" /> 处"拼接"：</p>
                  <p className="pl-4">右边：<Math tex="f(0) = 0^2 = 0" /></p>
                  <p className="pl-4">左边趋近：<Math tex="-0 = 0" /> ➡ 连续拼接 ✅</p>
                </div>
                <div style={{ width: 200, flexShrink: 0 }}>
                  <Mafs viewBox={{ x: [-3, 3], y: [-0.5, 5] }} height={160}>
                    <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
                    <Plot.OfX y={(x) => (x >= 0 ? x * x : -x)} color="#3b82f6" weight={3} />
                    <Point x={0} y={0} color="#f59e0b" />
                  </Mafs>
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak label="求值域" />

      {/* ═══════════════════════════════════════════════════════ */}
      {/* Section 4: 求值域 */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section id="fc-range" className="mb-2 scroll-mt-4">
        <Collapsible title="四、求值域的基本方法" defaultOpen storageKey="func-concept:range" headerExtra={<SpeakButton text={functionConceptNarrations.range} />}>
          <div className="space-y-1.5 text-gray-700">

            {/* 什么是值域 */}
            <div className="border-l-4 border-amber-400 pl-2 leading-7">
              <p><strong className="text-amber-800">📦 值域 = 所有 y 值的集合</strong> — 定义域告诉你"x 能取什么"，值域告诉你"y 能跑到哪里"。求值域 = 找出 y 的所有可能取值。</p>
            </div>

            {/* 方法一：观察法 */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-2">
              <p className="font-bold text-blue-800 mb-1">方法一：观察法（看图 / 看公式结构）</p>
              <div className="grid grid-cols-2 gap-3 leading-7">
                <div>
                  <p><Math tex="y = x^2" /></p>
                  <p>平方永远 <Math tex="\geq 0" /> ➡ 值域 <Math tex="[0, +\infty)" /></p>
                </div>
                <div>
                  <p><Math tex="y = \sqrt{x}" /></p>
                  <p>根号永远 <Math tex="\geq 0" /> ➡ 值域 <Math tex="[0, +\infty)" /></p>
                </div>
              </div>
            </div>

            {/* 方法二：代入法 */}
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-2">
              <p className="font-bold text-teal-800 mb-0.5">方法二：代入法 — 不确定值域？代几个 x 进去算 y，找规律</p>
              <div className="leading-8">
                <p>例：<Math tex="y = x^2 - 2x + 3" />，代入：<Math tex="x=0 \Rightarrow 3" />，<Math tex="x=1 \Rightarrow 2" />，<Math tex="x=2 \Rightarrow 3" />，<Math tex="x=-1 \Rightarrow 6" />，<Math tex="x=3 \Rightarrow 6" /></p>
                <p>发现：y 最小 = 2，而且能无限大 ➡ 值域 <Math tex="[2, +\infty)" /></p>
              </div>
            </div>

            {/* 方法三 + 方法四：左右并排 */}
            <div className="grid grid-cols-2 gap-1.5">
              {/* 配方法 */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-2">
                <p className="font-bold text-green-800 mb-1">方法三：配方法</p>
                <div className="leading-8">
                  <p>例：<Math tex="y = x^2 - 4x + 5" /></p>
                  <p>配方：<Math tex="y = (x-2)^2 + 1" /></p>
                  <p><Math tex="(x-2)^2 \geq 0" /></p>
                  <p>所以 <Math tex="y \geq 1" /></p>
                  <p>值域：<Math tex="[1, +\infty)" /></p>
                </div>
              </div>

              {/* 单调性法 */}
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-2">
                <p className="font-bold text-purple-800 mb-1">方法四：利用单调性</p>
                <div className="leading-8">
                  <p><strong>递增</strong>：最小 <Math tex="f(a)" />，最大 <Math tex="f(b)" /></p>
                  <p><strong>递减</strong>：最大 <Math tex="f(a)" />，最小 <Math tex="f(b)" /></p>
                  <p className="mt-1">例：<Math tex="f(x) = 2x+1" /> 在 <Math tex="[0,3]" /></p>
                  <p>递增 ➡ <Math tex="f(0)=1, f(3)=7" /></p>
                  <p>值域：<Math tex="[1, 7]" /></p>
                </div>
              </div>
            </div>

            {/* 方法五：限定义域时求值域 */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-2">
              <p className="font-bold text-orange-800 mb-0.5">方法五：定义域受限时，代端点 + 找顶点</p>
              <div className="leading-8">
                <p>当 x 只能在 <Math tex="[a, b]" /> 范围内取值时，值域不再是"全体"，要分情况：</p>
                <p className="pl-4"><strong>递增函数</strong>：最小值 = <Math tex="f(a)" />，最大值 = <Math tex="f(b)" /></p>
                <p className="pl-4"><strong>递减函数</strong>：最大值 = <Math tex="f(a)" />，最小值 = <Math tex="f(b)" />（反过来！）</p>
                <p className="pl-4"><strong>二次函数</strong>：先看顶点在不在 <Math tex="[a, b]" /> 内</p>
                <p className="mt-1">例：<Math tex="y = x^2" /> 在 <Math tex="[-3, 1]" /> 上</p>
                <p className="pl-4">顶点 <Math tex="x=0" /> 在区间内 ➡ 最小值 = <Math tex="0" />；两端 <Math tex="f(-3)=9" />，<Math tex="f(1)=1" /> ➡ 最大值 = <Math tex="9" /> ➡ 值域：<Math tex="[0, 9]" /></p>
              </div>
            </div>

            {/* 方法六：分式函数求值域 */}
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-2">
              <p className="font-bold text-indigo-800 mb-0.5">方法六：分式函数求值域（反解法）</p>
              <div className="leading-8">
                <p><strong>核心思路</strong>：把 <Math tex="y = \dfrac{\text{含}x\text{的式子}}{\text{含}x\text{的式子}}" /> <strong>反过来</strong>，用 <Math tex="y" /> 把 <Math tex="x" /> 解出来，再看 <Math tex="y" /> 取什么值时 <Math tex="x" /> 有解。</p>
                <p className="mt-1"><strong>例：</strong>求 <Math tex="y = \dfrac{2x + 1}{x - 1}" /> 的值域</p>
                <p><strong>Step 1</strong>：两边乘 <Math tex="(x-1)" />：<Math tex="y(x-1) = 2x + 1" /></p>
                <p><strong>Step 2</strong>：展开整理，把 <Math tex="x" /> 解出来：<Math tex="yx - y = 2x + 1 \Rightarrow x(y-2) = y + 1" /></p>
                <p><strong>Step 3</strong>：<Math tex="x = \dfrac{y+1}{y-2}" />，要求分母 <Math tex="y - 2 \neq 0" /> ➡ <Math tex="y \neq 2" /></p>
                <p><strong>结果</strong>：值域 = <Math tex="(-\infty, 2) \cup (2, +\infty)" />，即 <Math tex="y" /> 可以是任何数，<strong>就是不能等于 2</strong></p>
                <p className="text-indigo-700 font-bold">🎯 口诀：正着求不动 ➡ 反过来解 x ➡ 看 y 不能取什么</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak label="单调性" />

      {/* ═══════════════════════════════════════════════════════ */}
      {/* Section 5: 单调性 */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section id="fc-monotonicity" className="mb-2 scroll-mt-4">
        <Collapsible title="五、单调性（增函数与减函数）" defaultOpen storageKey="func-concept:monotonicity" headerExtra={<SpeakButton text={functionConceptNarrations.monotonicity} />}>
          <div className="space-y-1.5 text-gray-700">

            {/* 生活引入 */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-2">
              <p className="leading-7"><strong className="text-amber-800">📈 生活直觉</strong> — 爬山时，从山脚到山顶，越走越<strong>高</strong>（递增）；翻过山顶往下走，越走越<strong>低</strong>（递减）。函数的单调性就是描述图象是"往上走"还是"往下走"。</p>
            </div>

            {/* 定义 + 图示 */}
            <div className="grid gap-2" style={{ gridTemplateColumns: '3fr 2fr' }}>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-2">
                <p className="font-bold text-blue-800 mb-1">📖 严格定义</p>
                <div className="leading-8">
                  <p><strong className="text-green-700">增函数</strong>：在区间 <Math tex="D" /> 上，</p>
                  <p className="pl-4">若 <Math tex="x_1 < x_2" />，总有 <Math tex="f(x_1) < f(x_2)" /></p>
                  <p className="text-green-700">➡ <strong>x 大的 y 也大</strong>（往右上走）</p>
                  <p className="mt-1"><strong className="text-red-700">减函数</strong>：在区间 <Math tex="D" /> 上，</p>
                  <p className="pl-4">若 <Math tex="x_1 < x_2" />，总有 <Math tex="f(x_1) > f(x_2)" /></p>
                  <p className="text-red-700">➡ <strong>x 大的 y 反而小</strong>（往右下走）</p>
                </div>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-2 flex flex-col items-center justify-center">
                <Mafs viewBox={{ x: [-0.5, 4], y: [-0.5, 4] }} height={160}>
                  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
                  <Plot.OfX y={(x) => 0.8 * x + 0.5} color="#22c55e" weight={3} />
                  <Plot.OfX y={(x) => -0.8 * x + 4} color="#ef4444" weight={3} />
                  <MafsText x={3.2} y={3.5} size={14}>增</MafsText>
                  <MafsText x={3.2} y={0.8} size={14}>减</MafsText>
                </Mafs>
              </div>
            </div>

            {/* 关键提醒 */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-2">
              <p className="font-bold text-orange-800 mb-0.5">⚠️ 必须指明"在哪个区间上"</p>
              <div className="leading-7">
                <p>不能说"<Math tex="y = x^2" /> 是增函数"！</p>
                <p>正确说法：<Math tex="y = x^2" /> 在 <Math tex="[0, +\infty)" /> 上是<strong>增函数</strong>，在 <Math tex="(-\infty, 0]" /> 上是<strong>减函数</strong>。</p>
                <p className="text-orange-700 font-bold">👉 单调性是<strong>对某个区间</strong>说的，不是对整个函数说的！</p>
              </div>
            </div>

            {/* 用 y=x² 图象说明 */}
            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-1">👀 看图理解：<Math tex="y = x^2" /> 的单调性</p>
              <div className="flex gap-3 items-start">
                <div className="flex-1 leading-7">
                  <p><span className="inline-block w-3 h-3 rounded-full bg-red-500 mr-1 align-middle"></span> <strong className="text-red-600">左半段</strong>（<Math tex="x < 0" />）：往右下走 ➡ <strong>递减</strong></p>
                  <p><span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-1 align-middle"></span> <strong className="text-green-600">右半段</strong>（<Math tex="x > 0" />）：往右上走 ➡ <strong>递增</strong></p>
                  <p className="mt-1">单调递减区间：<Math tex="(-\infty, 0]" /></p>
                  <p>单调递增区间：<Math tex="[0, +\infty)" /></p>
                  <p className="mt-1 text-purple-700 font-bold">📌 顶点 (0,0) 是"转折点"：左边减，右边增</p>
                </div>
                <div style={{ width: 200, flexShrink: 0 }}>
                  <Mafs viewBox={{ x: [-3, 3], y: [-0.5, 5] }} height={160}>
                    <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
                    <Plot.OfX y={(x) => x * x} color="#3b82f6" weight={3} />
                    <Vector tail={[-2.2, 4.84]} tip={[-1.2, 1.44]} color="#ef4444" weight={2.5} />
                    <Vector tail={[1.2, 1.44]} tip={[2.2, 4.84]} color="#22c55e" weight={2.5} />
                    <Point x={0} y={0} color="#f59e0b" />
                    <Point x={-2} y={4} color="#ef4444" />
                    <Point x={2} y={4} color="#22c55e" />
                    <MafsText x={-2.5} y={3} size={13}>减</MafsText>
                    <MafsText x={2.5} y={3} size={13}>增</MafsText>
                  </Mafs>
                </div>
              </div>
            </div>

            {/* 常见函数单调性速查 */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-2">
              <p className="font-bold text-gray-800 mb-1">📌 常见函数单调性速查</p>
              <table className="w-full text-base border-collapse">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-2 py-1 text-left">函数</th>
                    <th className="border border-gray-300 px-2 py-1 text-center">递增区间</th>
                    <th className="border border-gray-300 px-2 py-1 text-center">递减区间</th>
                    <th className="border border-gray-300 px-2 py-1 text-center">记忆方法</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1"><Math tex="y = kx + b" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="k > 0" /> 时全体</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="k < 0" /> 时全体</td>
                    <td className="border border-gray-200 px-2 py-1">斜率正上、负下</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-1"><Math tex="y = x^2" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="[0, +\infty)" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="(-\infty, 0]" /></td>
                    <td className="border border-gray-200 px-2 py-1">顶点左减右增</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1"><Math tex="y = \dfrac{1}{x}" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center">无</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="(-\infty,0)" /> 和 <Math tex="(0,+\infty)" /></td>
                    <td className="border border-gray-200 px-2 py-1">两段都递减</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-1"><Math tex="y = \sqrt{x}" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="[0, +\infty)" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center">无</td>
                    <td className="border border-gray-200 px-2 py-1">一直往上走</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 看图速判口诀 */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-2">
              <p className="font-bold text-blue-800 mb-1">💡 看图速判单调性（3 秒搞定）</p>
              <div className="grid grid-cols-2 gap-3 leading-8">
                <div>
                  <p><strong className="text-green-700">图象往右上走</strong> ➡ 递增</p>
                  <p><strong className="text-red-700">图象往右下走</strong> ➡ 递减</p>
                </div>
                <div>
                  <p><strong>有转折点</strong> ➡ 分段讨论</p>
                  <p><strong>直线</strong> ➡ 看斜率正负即可</p>
                </div>
              </div>
            </div>

            <PageBreak label="定义法证明" />

            {/* ═══ 第二页：定义法证明 ═══ */}

            {/* 定义法判断步骤 */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-2">
              <p className="leading-7"><strong className="text-amber-800">💡 先搞懂 <Math tex="x_1, x_2" /> 是什么</strong> — 就是在区间里<strong>随便挑两个 x 值</strong>，一个叫 <Math tex="x_1" />，一个叫 <Math tex="x_2" />。规定 <Math tex="x_1" /> 在左、<Math tex="x_2" /> 在右（即 <Math tex="x_1 < x_2" />），然后看：<strong>x 从左往右走时，y 是跟着变大还是变小？</strong></p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-2">
              <p className="font-bold text-purple-800 mb-1">◆ 定义法判断单调性（考试必考！）</p>
              <div className="leading-8">
                <p><strong>Step 1</strong>：在区间内取 <Math tex="x_1 < x_2" />（左边的点 &lt; 右边的点）</p>
                <p><strong>Step 2</strong>：算 <Math tex="f(x_1) - f(x_2)" /></p>
                <p><strong>Step 3</strong>：判断差值的正负</p>
                <p className="pl-4">差 <Math tex="< 0" /> ➡ <Math tex="f(x_1) < f(x_2)" /> ➡ <strong className="text-green-700">增函数</strong></p>
                <p className="pl-4">差 <Math tex="> 0" /> ➡ <Math tex="f(x_1) > f(x_2)" /> ➡ <strong className="text-red-700">减函数</strong></p>
              </div>
            </div>

            {/* 实战分析：用具体数字演示 */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-2">
              <p className="font-bold text-gray-800 mb-1">🔍 实战分析：用具体数字感受一下</p>
              <div className="leading-8">
                <p>拿 <Math tex="f(x) = x^2" /> 在 <Math tex="[0, +\infty)" /> 上试试，随便挑两个：<Math tex="x_1 = 2" />，<Math tex="x_2 = 5" /></p>
                <p><Math tex="f(x_1) = f(2) = 4" />，<Math tex="f(x_2) = f(5) = 25" /></p>
                <p><Math tex="f(x_1) - f(x_2) = 4 - 25 = -21 < 0" /> ➡ 说明 <Math tex="f(2) < f(5)" /></p>
                <p>x 从 2 走到 5（变大），y 从 4 走到 25（也变大）➡ <strong className="text-green-700">增函数</strong> ✅</p>
                <p className="text-gray-500">不管你挑哪两个（只要在 <Math tex="[0, +\infty)" /> 内且 <Math tex="x_1 < x_2" />），结果都一样 ➡ 这就是"证明"</p>
              </div>
            </div>

            {/* 定义法举例：增函数 + 减函数 左右并排 */}
            <div className="grid grid-cols-2 gap-1.5">
              <div className="bg-green-50 border border-green-200 rounded-xl p-2">
                <p className="font-bold text-green-800 mb-1">✏️ 证明 <Math tex="f(x) = 2x + 1" /> 是增函数</p>
                <div className="leading-8">
                  <p><strong>设</strong> <Math tex="x_1 < x_2" /></p>
                  <p><Math tex="f(x_1) - f(x_2) = 2(x_1 - x_2)" /></p>
                  <p><Math tex="x_1 < x_2" /> ➡ <Math tex="x_1 - x_2 < 0" /></p>
                  <p>差 <Math tex="< 0" /> ➡ <strong className="text-green-700">增函数</strong> ✅</p>
                </div>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-2">
                <p className="font-bold text-red-800 mb-1">✏️ 证明 <Math tex="f(x) = -3x + 2" /> 是减函数</p>
                <div className="leading-8">
                  <p><strong>设</strong> <Math tex="x_1 < x_2" /></p>
                  <p><Math tex="f(x_1) - f(x_2) = -3(x_1 - x_2)" /></p>
                  <p><Math tex="x_1 < x_2" /> ➡ <Math tex="x_1 - x_2 < 0" /></p>
                  <p><Math tex="-3 \times \text{负数} > 0" /> ➡ 差 <Math tex="> 0" /> ➡ <strong className="text-red-700">减函数</strong> ✅</p>
                </div>
              </div>
            </div>

            {/* 作差变形技巧 */}
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-2">
              <p className="font-bold text-teal-800 mb-1">✍️ 作差变形常用 3 招</p>
              <div className="leading-8">
                <p><strong>1. 提公因式</strong>（一次函数）：<Math tex="2(x_1 - x_2)" /> ➡ 直接看正负</p>
                <p><strong>2. 配方</strong>（二次函数）：拆成平方项，判断各因子正负</p>
                <p><strong>3. 通分 / 因式分解</strong>（分式函数）：化成"能直接判断正负的因式相乘"</p>
                <p className="text-teal-700 font-bold">🎯 核心目标：把差式变成几个因子的乘积，每个因子都能判断正负</p>
              </div>
            </div>

            {/* 单调区间书写规范 */}
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-2">
              <p className="font-bold text-purple-800 mb-1">📝 单调区间书写铁律（高考阅卷扣分点！）</p>
              <div className="leading-8">
                <p><strong>1.</strong> 单调区间必须用<strong>区间</strong>表示，不能写不等式</p>
                <p className="pl-4">❌ <Math tex="x > 0" /> 时递增 → ✅ 递增区间为 <Math tex="(0, +\infty)" /></p>
                <p><strong>2.</strong> 多个单调区间之间用<strong>"和"或"，"</strong>连接，<strong className="text-red-700">绝对不能用 <Math tex="\cup" /></strong></p>
                <p className="pl-4">❌ <Math tex="(-\infty,0) \cup (0,+\infty)" /> → ✅ <Math tex="(-\infty,0)" /> 和 <Math tex="(0,+\infty)" /></p>
                <p><strong>3.</strong> 端点能取到用<strong>闭区间</strong>，取不到用<strong>开区间</strong></p>
              </div>
            </div>

            {/* 考试答题模板 */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-2">
              <p className="leading-7"><strong className="text-gray-800">📋 定义法答题 4 步（缺一步扣分）</strong></p>
              <p className="leading-7">① 设 <Math tex="x_1 < x_2" /> ➡ ② 算 <Math tex="f(x_1)-f(x_2)" /> 并化简 ➡ ③ 判断差值正负 ➡ ④ 写结论"在___上是增/减函数"</p>
            </div>

            <PageBreak label="综合应用" />

            {/* ═══ 第三页：综合应用 ═══ */}

            {/* 最大值与最小值 */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-2">
              <p className="font-bold text-green-800 mb-1">📐 最大值与最小值（单调性的直接应用）</p>
              <div className="leading-8">
                <p>在<strong>闭区间</strong> <Math tex="[a, b]" /> 上：</p>
                <p className="pl-4"><strong className="text-green-700">递增函数</strong>：最小值 = <Math tex="f(a)" />（左端），最大值 = <Math tex="f(b)" />（右端）</p>
                <p className="pl-4"><strong className="text-red-700">递减函数</strong>：最大值 = <Math tex="f(a)" />（左端），最小值 = <Math tex="f(b)" />（右端）</p>
                <p className="mt-1"><strong>例：</strong><Math tex="f(x) = x^2" /> 在 <Math tex="[1, 3]" /> 上递增</p>
                <p className="pl-4">最小值 = <Math tex="f(1) = 1" />，最大值 = <Math tex="f(3) = 9" /></p>
              </div>
            </div>

            {/* 转折点 */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-2">
              <p className="font-bold text-orange-800 mb-0.5">⚠️ 区间跨过"转折点"怎么办？</p>
              <div className="leading-7">
                <p><Math tex="f(x) = x^2" /> 在 <Math tex="[-2, 3]" /> 上：左边递减、右边递增</p>
                <p>最小值在转折点：<Math tex="f(0) = 0" /></p>
                <p>最大值在离转折点更远的端点：<Math tex="f(-2) = 4" />，<Math tex="f(3) = 9" /> ➡ 最大值 = 9</p>
                <p className="text-orange-700 font-bold mt-0.5">👉 先分段，再比较两个端点哪个更大。</p>
              </div>
            </div>

            {/* 复合函数同增异减 */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-2">
              <p className="font-bold text-blue-800 mb-1">🔗 复合函数单调性口诀：同增异减</p>
              <div className="leading-8">
                <p>外层和内层<strong>都递增</strong>或<strong>都递减</strong> ➡ 复合后<strong className="text-green-700">递增</strong>（同号 = 增）</p>
                <p>外层和内层<strong>一增一减</strong> ➡ 复合后<strong className="text-red-700">递减</strong>（异号 = 减）</p>
                <p className="mt-1">例：<Math tex="y = (2x+1)^2" />，内层 <Math tex="2x+1" /> 递增，外层 <Math tex="t^2" />（<Math tex="t > 0" /> 时）递增 ➡ 同增 ➡ <strong className="text-green-700">递增</strong></p>
              </div>
            </div>

            {/* 复合函数定义域优先 */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-2">
              <p className="font-bold text-orange-800 mb-1">⚠️ 复合函数必看内层定义域</p>
              <div className="leading-8">
                <p>先确定定义域，再判断单调性！</p>
                <p>例：<Math tex="y = \sqrt{2x - 1}" />，先保证 <Math tex="2x - 1 \geq 0" /> ➡ <Math tex="x \geq \dfrac{1}{2}" /></p>
                <p>内层 <Math tex="2x-1" /> 递增，外层 <Math tex="\sqrt{t}" /> 递增 ➡ 同增 ➡ 在 <Math tex="[\dfrac{1}{2}, +\infty)" /> 上<strong className="text-green-700">递增</strong></p>
              </div>
            </div>

            {/* 二次函数单调性全解 */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-2">
              <p className="font-bold text-blue-800 mb-1">📊 二次函数 <Math tex="y = ax^2 + bx + c" /> 单调性全解</p>
              <div className="leading-8">
                <p>对称轴：<Math tex="x = -\dfrac{b}{2a}" /> ➡ 顶点就是"转折点"</p>
                <div className="grid grid-cols-2 gap-1.5 mt-1">
                  <div className="bg-white border border-blue-100 rounded-lg p-2">
                    <p className="text-center font-bold text-blue-700 mb-1"><Math tex="a > 0" />（开口朝上 🥣）</p>
                    <p>对称轴<strong>左边递减</strong>，<strong>右边递增</strong></p>
                    <p>顶点是<strong className="text-green-700">最小值</strong></p>
                  </div>
                  <div className="bg-white border border-red-100 rounded-lg p-2">
                    <p className="text-center font-bold text-red-700 mb-1"><Math tex="a < 0" />（开口朝下 ⛰️）</p>
                    <p>对称轴<strong>左边递增</strong>，<strong>右边递减</strong></p>
                    <p>顶点是<strong className="text-red-700">最大值</strong></p>
                  </div>
                </div>
                <p className="mt-1">例：<Math tex="y = x^2 - 4x + 3" />，对称轴 <Math tex="x = 2" /></p>
                <p className="pl-4">在 <Math tex="(-\infty, 2]" /> 上<strong className="text-red-700">递减</strong>，在 <Math tex="[2, +\infty)" /> 上<strong className="text-green-700">递增</strong>，最小值 = <Math tex="f(2) = -1" /></p>
              </div>
            </div>

            {/* 单调性知识总结 */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-2">
              <p className="font-bold text-amber-800 mb-1">✅ 单调性知识总结</p>
              <div className="leading-8">
                <p><strong>判断方法</strong>：看图（直觉）➡ 定义法（证明）➡ 同增异减（复合函数）</p>
                <p><strong>核心应用</strong>：求闭区间上的最大值 / 最小值</p>
                <p><strong>必记规范</strong>：单调区间用区间表示，多个区间用"和"连接，不用 ∪</p>
                <p><strong>二次函数</strong>：找对称轴 ➡ 左减右增（<Math tex="a>0" />）或 左增右减（<Math tex="a < 0" />）</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak label="奇偶性" />

      {/* ═══════════════════════════════════════════════════════ */}
      {/* Section 6: 奇偶性 */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section id="fc-parity" className="mb-2 scroll-mt-4">
        <Collapsible title="六、奇偶性（对称之美）" defaultOpen storageKey="func-concept:parity" headerExtra={<SpeakButton text={functionConceptNarrations.parity} />}>
          <div className="space-y-1.5 text-gray-700">

            {/* 生活引入 */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-2">
              <p className="leading-7"><strong className="text-amber-800">🦋 对称的美</strong> — 蝴蝶的翅膀左右对称，函数图象也有对称性。如果图象关于 <strong>y 轴</strong>对称 ➡ 偶函数；如果关于<strong>原点</strong>对称 ➡ 奇函数。</p>
            </div>

            {/* 定义 + 图示 */}
            <div className="grid gap-2" style={{ gridTemplateColumns: '1fr 1fr' }}>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-2">
                <p className="font-bold text-blue-800 mb-1">偶函数：关于 y 轴对称</p>
                <div className="flex justify-center mb-1">
                  <div style={{ width: 180 }}>
                    <Mafs viewBox={{ x: [-3, 3], y: [-0.5, 5] }} height={130}>
                      <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
                      <Plot.OfX y={(x) => x * x} color="#3b82f6" weight={3} />
                      <Point x={-2} y={4} color="#f59e0b" />
                      <Point x={2} y={4} color="#f59e0b" />
                      <MafsText x={-2.5} y={4.5} size={12}>(-2,4)</MafsText>
                      <MafsText x={2.5} y={4.5} size={12}>(2,4)</MafsText>
                    </Mafs>
                  </div>
                </div>
                <div className="leading-7">
                  <p className="text-center text-lg font-bold text-blue-800"><Math tex="f(-x) = f(x)" /></p>
                  <p>例：<Math tex="f(x) = x^2" /></p>
                  <p><Math tex="f(-2) = 4 = f(2)" /> ✅</p>
                  <p>左右 y 值<strong>完全相同</strong></p>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-2">
                <p className="font-bold text-red-800 mb-1">奇函数：关于原点对称</p>
                <div className="flex justify-center mb-1">
                  <div style={{ width: 180 }}>
                    <Mafs viewBox={{ x: [-3, 3], y: [-3, 3] }} height={130}>
                      <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
                      <Plot.OfX y={(x) => x * x * x * 0.3} color="#ef4444" weight={3} />
                      <Point x={-1.5} y={-1.5 * 1.5 * 1.5 * 0.3} color="#f59e0b" />
                      <Point x={1.5} y={1.5 * 1.5 * 1.5 * 0.3} color="#f59e0b" />
                    </Mafs>
                  </div>
                </div>
                <div className="leading-7">
                  <p className="text-center text-lg font-bold text-red-800"><Math tex="f(-x) = -f(x)" /></p>
                  <p>例：<Math tex="f(x) = x^3" /></p>
                  <p><Math tex="f(-2) = -8 = -f(2)" /> ✅</p>
                  <p>左右 y 值<strong>互为相反数</strong></p>
                </div>
              </div>
            </div>

            {/* 前提条件 */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-2">
              <p className="font-bold text-orange-800 mb-0.5">⚠️ 讨论奇偶性的前提</p>
              <div className="leading-7">
                <p><strong>定义域必须关于原点对称！</strong></p>
                <p>比如定义域是 <Math tex="[-2, 2]" /> ➡ ✅ 关于原点对称，可以讨论</p>
                <p>比如定义域是 <Math tex="[0, 3]" /> ➡ ❌ 不关于原点对称，<strong>既不是奇函数也不是偶函数</strong></p>
                <p className="text-orange-700 font-bold mt-0.5">👉 第一步永远是：先看定义域是否对称！</p>
              </div>
            </div>

            {/* 判断步骤 */}
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-2">
              <p className="font-bold text-purple-800 mb-1">🔧 判断奇偶性三步法</p>
              <div className="leading-8">
                <p><strong>Step 1</strong>：看定义域是否关于原点对称 ➡ 不对称直接"非奇非偶"</p>
                <p><strong>Step 2</strong>：算 <Math tex="f(-x)" />（把公式里所有 <Math tex="x" /> 换成 <Math tex="-x" />）</p>
                <p><strong>Step 3</strong>：和 <Math tex="f(x)" /> 比较</p>
                <p className="pl-4"><Math tex="f(-x) = f(x)" /> ➡ <strong className="text-blue-700">偶函数</strong></p>
                <p className="pl-4"><Math tex="f(-x) = -f(x)" /> ➡ <strong className="text-red-700">奇函数</strong></p>
                <p className="pl-4">都不是 ➡ <strong>非奇非偶</strong></p>
              </div>
            </div>

            {/* 速练 */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-2">
              <p className="font-bold text-gray-800 mb-1">🧠 速练：判断奇偶性</p>
              <div className="space-y-0.5 leading-7">
                <p>1. <Math tex="f(x) = x^2 + 1" /> ➡ <span className="text-gray-400">______</span>（答案：偶函数，因为 <Math tex="f(-x) = (-x)^2 + 1 = x^2 + 1 = f(x)" />）</p>
                <p>2. <Math tex="f(x) = x^3" /> ➡ <span className="text-gray-400">______</span>（答案：奇函数，因为 <Math tex="f(-x) = (-x)^3 = -x^3 = -f(x)" />）</p>
                <p>3. <Math tex="f(x) = x^2 + x" /> ➡ <span className="text-gray-400">______</span>（答案：非奇非偶，<Math tex="f(-x) = x^2 - x" />，既不等于 <Math tex="f(x)" /> 也不等于 <Math tex="-f(x)" />）</p>
              </div>
            </div>

            {/* 奇函数特殊性质 */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-2">
              <p className="font-bold text-green-800 mb-0.5">💎 奇函数的一个宝藏性质</p>
              <p className="leading-7">如果奇函数在 <Math tex="x = 0" /> 有定义，那么 <Math tex="f(0) = 0" /></p>
              <p className="leading-7">证明：<Math tex="f(-0) = -f(0)" /> ➡ <Math tex="f(0) = -f(0)" /> ➡ <Math tex="2f(0) = 0" /> ➡ <Math tex="f(0) = 0" /> ✅</p>
              <p className="text-green-700 font-bold">👉 奇函数的图象一定过原点（如果 0 在定义域内）</p>
            </div>

            <PageBreak label="奇偶性进阶" />

            {/* ═══ 第二页：奇偶性进阶 ═══ */}

            {/* 常见函数奇偶性速查 */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-2">
              <p className="font-bold text-gray-800 mb-1">📌 常见函数奇偶性速查</p>
              <table className="w-full text-base border-collapse">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-2 py-1 text-left">函数</th>
                    <th className="border border-gray-300 px-2 py-1 text-center">奇偶性</th>
                    <th className="border border-gray-300 px-2 py-1 text-center">图象特征</th>
                    <th className="border border-gray-300 px-2 py-1 text-center">记忆口诀</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1"><Math tex="y = x" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><strong className="text-red-700">奇</strong></td>
                    <td className="border border-gray-200 px-2 py-1 text-center">过原点的直线</td>
                    <td className="border border-gray-200 px-2 py-1">奇次幂 = 奇</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-1"><Math tex="y = x^2" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><strong className="text-blue-700">偶</strong></td>
                    <td className="border border-gray-200 px-2 py-1 text-center">关于 y 轴对称</td>
                    <td className="border border-gray-200 px-2 py-1">偶次幂 = 偶</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1"><Math tex="y = x^3" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><strong className="text-red-700">奇</strong></td>
                    <td className="border border-gray-200 px-2 py-1 text-center">关于原点对称</td>
                    <td className="border border-gray-200 px-2 py-1">奇次幂 = 奇</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-1"><Math tex="y = |x|" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><strong className="text-blue-700">偶</strong></td>
                    <td className="border border-gray-200 px-2 py-1 text-center">V 形，关于 y 轴对称</td>
                    <td className="border border-gray-200 px-2 py-1">绝对值 = 偶</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1"><Math tex="y = \dfrac{1}{x}" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><strong className="text-red-700">奇</strong></td>
                    <td className="border border-gray-200 px-2 py-1 text-center">关于原点对称</td>
                    <td className="border border-gray-200 px-2 py-1">奇次幂分之一 = 奇</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-1"><Math tex="y = x^2 + x" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center">非奇非偶</td>
                    <td className="border border-gray-200 px-2 py-1 text-center">不对称</td>
                    <td className="border border-gray-200 px-2 py-1">奇+偶 = 非奇非偶</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 奇偶性与单调性的关系 */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-2">
              <p className="font-bold text-blue-800 mb-1">🔗 奇偶性 × 单调性（高考高频考点！）</p>
              <div className="grid grid-cols-2 gap-1.5">
                <div className="bg-white border border-red-100 rounded-lg p-2 leading-8">
                  <p className="font-bold text-red-700 text-center mb-1">奇函数：左右单调性<strong>相同</strong></p>
                  <p>右边递增 ➡ 左边也递增</p>
                  <p>右边递减 ➡ 左边也递减</p>
                  <p className="text-gray-500">例：<Math tex="y = x^3" /> 全体递增</p>
                </div>
                <div className="bg-white border border-blue-100 rounded-lg p-2 leading-8">
                  <p className="font-bold text-blue-700 text-center mb-1">偶函数：左右单调性<strong>相反</strong></p>
                  <p>右边递增 ➡ 左边递减</p>
                  <p>右边递减 ➡ 左边递增</p>
                  <p className="text-gray-500">例：<Math tex="y = x^2" /> 左减右增</p>
                </div>
              </div>
            </div>

            {/* 利用奇偶性求另一半解析式 */}
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-2">
              <p className="font-bold text-purple-800 mb-1">✏️ 经典考法：已知一半，求另一半</p>
              <div className="leading-8">
                <p>已知 <Math tex="f(x)" /> 是<strong className="text-red-700">奇函数</strong>，且当 <Math tex="x > 0" /> 时 <Math tex="f(x) = x^2 + 1" />，求 <Math tex="x < 0" /> 时的解析式。</p>
                <p><strong>思路</strong>：设 <Math tex="x < 0" />，则 <Math tex="-x > 0" />，代入已知得 <Math tex="f(-x) = (-x)^2 + 1 = x^2 + 1" /></p>
                <p>因为奇函数 <Math tex="f(-x) = -f(x)" />，所以 <Math tex="-f(x) = x^2 + 1" /></p>
                <p>➡ <Math tex="f(x) = -(x^2 + 1) = -x^2 - 1" />（当 <Math tex="x < 0" /> 时）</p>
              </div>
            </div>

            {/* 奇偶性运算规则 */}
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-2">
              <p className="font-bold text-teal-800 mb-0.5">🧮 奇偶性运算规则</p>
              <div className="grid grid-cols-3 gap-1 leading-7">
                <p><strong>奇 ± 奇 = 奇</strong></p>
                <p><strong>偶 ± 偶 = 偶</strong></p>
                <p>奇 ± 偶 = <strong className="text-red-700">非奇非偶</strong></p>
                <p><strong>奇 × 奇 = 偶</strong></p>
                <p><strong>偶 × 偶 = 偶</strong></p>
                <p><strong>奇 × 偶 = 奇</strong></p>
              </div>
              <p className="text-teal-700 font-bold">🎯 口诀：加减看同异（同保异非），乘除像正负号（同偶异奇）</p>
            </div>

            {/* 易错点总结 */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-2">
              <p className="font-bold text-orange-800 mb-1">⚠️ 奇偶性 3 大易错点</p>
              <div className="leading-8">
                <p><strong>1.</strong> 忘记先检查定义域 ➡ 定义域不对称，直接判"非奇非偶"，<strong>不用算 f(-x)</strong></p>
                <p><strong>2.</strong> <Math tex="f(x) = 0" /> 既是奇函数又是偶函数（唯一一个"既奇又偶"的函数）</p>
                <p><strong>3.</strong> <Math tex="f(x) = x^2 + 1" /> 是偶函数，但 <Math tex="f(x) = (x-1)^2 + 1" /> 不是！（图象平移后对称轴不再是 y 轴）</p>
              </div>
            </div>

            {/* 奇偶性知识总结 */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-2">
              <p className="font-bold text-amber-800 mb-1">✅ 奇偶性知识总结</p>
              <div className="leading-8">
                <p><strong>判断流程</strong>：先看定义域对称 ➡ 再算 <Math tex="f(-x)" /> ➡ 和 <Math tex="f(x)" /> 比</p>
                <p><strong>图象特征</strong>：偶 = y 轴对称，奇 = 原点对称</p>
                <p><strong>与单调性</strong>：奇函数左右同增减，偶函数左右反增减</p>
                <p><strong>经典考法</strong>：知一半求另一半，用 <Math tex="f(-x) = \pm f(x)" /> 翻转</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ═══ 总结速查表 ═══ */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-2 mt-1">
        <p className="font-bold text-indigo-800 mb-1">📌 本节速查表</p>
        <table className="w-full text-base border-collapse">
          <thead>
            <tr className="bg-indigo-100">
              <th className="border border-indigo-200 px-2 py-1 text-left text-indigo-700">概念</th>
              <th className="border border-indigo-200 px-2 py-1 text-center text-indigo-700">核心</th>
              <th className="border border-indigo-200 px-2 py-1 text-center text-indigo-700">判断方法</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-2 py-1 font-bold">函数定义</td>
              <td className="border border-gray-200 px-2 py-1 text-center">每个 x ➡ 唯一 y</td>
              <td className="border border-gray-200 px-2 py-1 text-center">检查"每一个"和"唯一"</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-2 py-1 font-bold">定义域</td>
              <td className="border border-gray-200 px-2 py-1 text-center">x 能取哪些值</td>
              <td className="border border-gray-200 px-2 py-1 text-center">分母≠0、根号≥0</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-2 py-1 font-bold">分段函数</td>
              <td className="border border-gray-200 px-2 py-1 text-center">不同段用不同公式</td>
              <td className="border border-gray-200 px-2 py-1 text-center">先看 x 落在哪段</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-2 py-1 font-bold">值域</td>
              <td className="border border-gray-200 px-2 py-1 text-center">y 的取值范围</td>
              <td className="border border-gray-200 px-2 py-1 text-center">观察/配方/单调性</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-2 py-1 font-bold">增函数</td>
              <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="x" /> 大 ➡ <Math tex="y" /> 大</td>
              <td className="border border-gray-200 px-2 py-1 text-center">做差法：差 <Math tex="< 0" /></td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-2 py-1 font-bold">减函数</td>
              <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="x" /> 大 ➡ <Math tex="y" /> 小</td>
              <td className="border border-gray-200 px-2 py-1 text-center">做差法：差 <Math tex="> 0" /></td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-2 py-1 font-bold">最值</td>
              <td className="border border-gray-200 px-2 py-1 text-center">闭区间端点比较</td>
              <td className="border border-gray-200 px-2 py-1 text-center">增➡左小右大</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-2 py-1 font-bold">偶函数</td>
              <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="f(-x) = f(x)" /></td>
              <td className="border border-gray-200 px-2 py-1 text-center">图象关于 y 轴对称</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-2 py-1 font-bold">奇函数</td>
              <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="f(-x) = -f(x)" /></td>
              <td className="border border-gray-200 px-2 py-1 text-center">图象关于原点对称</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ═══ 精华练习 ═══ */}
      <section id="concept-practice" className="mb-4 scroll-mt-4">
        <h2 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center text-sm font-bold">
            练
          </span>
          精华练习（10 道）
        </h2>
        <PracticeCard questions={conceptPractice} explanations={functionConceptExplanations} />
      </section>

      <PageBreak label="高考真题" />

      {/* ═══ 高考真题 ═══ */}
      <section id="concept-quiz" className="mb-4 scroll-mt-4">
        <h2 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-red-500 text-white flex items-center justify-center text-sm font-bold">
            真
          </span>
          高考真题实战
        </h2>
        <QuizPanel
          module="function-concept"
          questions={conceptQuizQuestions}
          title="函数真题"
          description="8道新高考真题（2021-2025），覆盖函数核心考法。"
          explanations={functionConceptExplanations}
        />
      </section>

      {isPrinting && printOptions.showAnswers && <FunctionConceptAnswers />}
      </LessonLayout>
    </div>
  );
}
