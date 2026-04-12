import { Math, Collapsible, SpeakButton, QuizPanel, PageHeader, LessonLayout, CalloutCard, PracticeCard, ExportButton, PageBreak } from '@/components/shared';
import { elemPrereqNarrations } from './data/3.1.8/3.1.8-elem-prereq-narrations';
import { elemPrereqProgressItems } from './data/3.1.8/3.1.8-elem-prereq-progress';
import { elemPrereqPractice1, elemPrereqPractice2, elemPrereqPractice3 } from './data/3.1.8/3.1.8-elem-prereq-practice';
import { elemPrereqQuizQuestions } from './data/3.1.8/3.1.8-elem-prereq-quiz';
import { useProgress, usePrintMode } from '@/hooks';
import { scrollToId } from '@/lib/scroll';
import { ElementaryFuncPrereqAnswers, elementaryFuncPrereqExplanations } from './3.1.8-elem-prereq-answers';

export function ElementaryFuncPrereqPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('elem-func-prereq', elemPrereqProgressItems);
  const { isPrinting, printOptions } = usePrintMode();

  return (
    <div>
      <PageHeader
        stage="前置准备"
        variant="prereq"
        title="3.1.8 基本初等函数前置知识"
        narration={elemPrereqNarrations.intro}
        subtitle="指数·对数·幂的运算基础 — 学指数函数和对数函数之前必须搞定"
        tags={[
          { label: '约40-60分钟', color: 'amber' },
          { label: '高中新概念', color: 'blue' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="3.1.8 基本初等函数前置知识" />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-2 mb-1">
        <p className="font-bold text-gray-800 mb-1">📋 知识地图</p>
        <div className="text-gray-600 space-y-0.5">
          <button onClick={() => scrollToId('ep-exponent')} className="block text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">一、指数运算法则（初中到高中的桥梁）</button>
          <button onClick={() => scrollToId('ep-radical')} className="block text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">二、根式与分数指数幂（高中新语言）</button>
          <button onClick={() => scrollToId('ep-logarithm')} className="block text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">三、对数 — 指数的逆运算（全新概念）</button>
          <button onClick={() => scrollToId('ep-quiz')} className="block text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">四、综合自测（8题）</button>
        </div>
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* Section 1: 指数运算法则 */}
      {/* ════════════════════════════════════════════════════════════ */}
      <section id="ep-exponent" className="mb-2 scroll-mt-4">
        <Collapsible title="一、指数运算法则" defaultOpen storageKey="elem-prereq:exponent" headerExtra={<SpeakButton text={elemPrereqNarrations.exponentLaws} />}>
          <p className="text-blue-600 mb-1">🎯 学完你能：秒算任何指数运算，包括零指数和负指数。</p>
          <div className="space-y-1.5 text-gray-700">

            {/* 回顾：什么是指数 */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-2">
              <p className="leading-7"><strong className="text-amber-800">📖 回顾：什么是指数？</strong> — <Math tex="2^3 = 2 \times 2 \times 2 = 8" />，其中 <strong>2</strong> 叫底数，<strong>3</strong> 叫指数，<strong>8</strong> 叫幂。指数就是"连乘几次"。</p>
            </div>

            {/* 三大运算法则 */}
            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-1">📖 五大运算法则</p>
              <table className="w-full text-base border-collapse">
                <thead>
                  <tr className="bg-purple-50">
                    <th className="border border-purple-200 px-2 py-1 text-left text-purple-700">法则</th>
                    <th className="border border-purple-200 px-2 py-1 text-center text-purple-700">公式</th>
                    <th className="border border-purple-200 px-2 py-1 text-center text-purple-700">口诀</th>
                    <th className="border border-purple-200 px-2 py-1 text-center text-purple-700">例子</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1 font-bold">同底相乘</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="a^m \cdot a^n = a^{m+n}" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center">底不变，指数<strong>加</strong></td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="2^3 \cdot 2^4 = 2^7" /></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-1 font-bold">同底相除</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\dfrac{a^m}{a^n} = a^{m-n}" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center">底不变，指数<strong>减</strong></td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\dfrac{3^5}{3^2} = 3^3" /></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1 font-bold">幂的幂</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="(a^m)^n = a^{mn}" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center">底不变，指数<strong>乘</strong></td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="(5^2)^3 = 5^6" /></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-1 font-bold">积的幂</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="(ab)^n = a^n b^n" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center">积的幂 = 幂的<strong>积</strong></td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="(2x)^3 = 8x^3" /></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1 font-bold">商的幂</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\left(\dfrac{a}{b}\right)^n = \dfrac{a^n}{b^n}" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center">商的幂 = 幂的<strong>商</strong></td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\left(\dfrac{3}{2}\right)^2 = \dfrac{9}{4}" /></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 零指数和负指数 */}
            <div className="grid grid-cols-2 gap-1.5">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-2">
                <p className="font-bold text-blue-800 mb-1">📌 零指数幂</p>
                <div className="leading-7">
                  <p><Math tex="a^0 = 1 \quad (a \neq 0)" /></p>
                  <p>任何不为零的数的 0 次方 = <strong>1</strong></p>
                  <p>为什么？当 <Math tex="a \neq 0" /> 时，<Math tex="\dfrac{a^n}{a^n} = 1" />；同时根据同底相除法则，<Math tex="\dfrac{a^n}{a^n} = a^{n-n} = a^0" />，所以 <Math tex="a^0 = 1" /></p>
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-2">
                <p className="font-bold text-green-800 mb-1">📌 负指数幂</p>
                <div className="leading-7">
                  <p><Math tex="a^{-n} = \dfrac{1}{a^n} \quad (a \neq 0)" /></p>
                  <p>负指数 = <strong>取倒数</strong></p>
                  <div className="grid grid-cols-2 gap-2">
                    <p>例1：<Math tex="2^{-3} = \dfrac{1}{2^3} = \dfrac{1}{8}" /></p>
                    <p>例2：<Math tex="\left(\dfrac{1}{3}\right)^{-2} = 3^2 = 9" /></p>
                  </div>
                  <p className="text-green-700">底数取倒数，指数变正！</p>
                </div>
              </div>
            </div>

            {/* 综合小例子 */}
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-2">
              <p className="font-bold text-purple-800 mb-0.5">💡 综合小例子：五大法则串联</p>
              <div className="leading-7">
                <p>化简 <Math tex="\dfrac{(2a^3)^2 \cdot a^{-1}}{a^5}" /></p>
                <p><strong>第①步 积的幂</strong>：<Math tex="(2a^3)^2 = 2^2 \cdot (a^3)^2" />，把乘积的幂拆成各自的幂</p>
                <p><strong>第②步 幂的幂</strong>：<Math tex="(a^3)^2 = a^{3 \times 2} = a^6" />，指数相乘，所以分子第一项 = <Math tex="4a^6" /></p>
                <p><strong>第③步 同底相乘</strong>：<Math tex="4a^6 \cdot a^{-1} = 4a^{6+(-1)} = 4a^5" />，底不变指数相加（含负指数）</p>
                <p><strong>第④步 同底相除 + 零指数</strong>：<Math tex="\dfrac{4a^5}{a^5} = 4 \cdot a^{5-5} = 4 \cdot a^0 = 4 \times 1 = 4" /></p>
              </div>
            </div>

            {/* 即时练习 */}
            <PageBreak />
            <PracticeCard
              title="✏️ 即时练习：指数运算（5题）"
              questions={elemPrereqPractice1}
              explanations={elementaryFuncPrereqExplanations}
            />

            <CalloutCard variant="warning" title="⚠️ 易错点">
              <div className="space-y-1">
                <p><strong>底数不同不能直接用法则！</strong> <Math tex="2^3 \times 3^4" /> 不能合并，底数不同时要先统一底数（如 <Math tex="4^3 = (2^2)^3 = 2^6" />）</p>
                <p><strong>零的零次方无意义！</strong> <Math tex="0^0" /> 没有定义，只有 <Math tex="a \neq 0" /> 时 <Math tex="a^0 = 1" /></p>
                <p><strong>负指数 ≠ 负数！</strong> <Math tex="2^{-3} = \dfrac{1}{8}" />（正数），不是 <Math tex="-8" /></p>
                <p><strong>积的幂别漏项！</strong> <Math tex="(2x)^3 = 2^3 \cdot x^3 = 8x^3" />，不是 <Math tex="2x^3" /></p>
              </div>
            </CalloutCard>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* Section 2: 根式与分数指数幂 */}
      {/* ════════════════════════════════════════════════════════════ */}
      <section id="ep-radical" className="mb-2 scroll-mt-4">
        <Collapsible title="二、根式与分数指数幂" defaultOpen storageKey="elem-prereq:radical" headerExtra={<SpeakButton text={elemPrereqNarrations.radicalAndFraction} />}>
          <p className="text-blue-600 mb-2">🎯 学完你能：把根号统一写成分数指数，用指数法则计算含根号的式子。</p>
          <div className="space-y-2 text-gray-700">

            {/* 回顾根号 */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-2">
              <p className="leading-7"><strong className="text-amber-800">📖 回顾：什么是根号？</strong> — <Math tex="\sqrt{9} = 3" />，因为 <Math tex="3^2 = 9" />。根号就是"乘方的逆运算"：<strong>几的平方等于 9？答案是 3</strong>。高中要把这个概念推广到 n 次方根。</p>
            </div>

            {/* n 次方根 */}
            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-1">📖 n 次方根</p>
              <table className="w-full text-base border-collapse">
                <thead>
                  <tr className="bg-green-50">
                    <th className="border border-green-200 px-2 py-1 text-left text-green-700">名称</th>
                    <th className="border border-green-200 px-2 py-1 text-center text-green-700">符号</th>
                    <th className="border border-green-200 px-2 py-1 text-center text-green-700">含义</th>
                    <th className="border border-green-200 px-2 py-1 text-center text-green-700">例子</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1 font-bold">平方根</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\sqrt{a}" /></td>
                    <td className="border border-gray-200 px-2 py-1">谁的平方 = a？</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\sqrt{25} = 5" /></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-1 font-bold">立方根</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\sqrt[3]{a}" /></td>
                    <td className="border border-gray-200 px-2 py-1">谁的立方 = a？</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\sqrt[3]{8} = 2" /></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1 font-bold">n 次方根</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\sqrt[n]{a}" /></td>
                    <td className="border border-gray-200 px-2 py-1">谁的 n 次方 = a？</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\sqrt[4]{16} = 2" /></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 核心公式：根号 → 分数指数 */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-300 rounded-xl p-3">
              <p className="font-bold text-purple-800 text-lg mb-2">🔑 核心公式（必背！）</p>
              <div className="space-y-2 leading-8">
                <p className="text-center text-lg"><Math tex="\sqrt[n]{a} = a^{\frac{1}{n}}" /></p>
                <p className="text-center text-gray-600">n 次根号 = 指数变成 n 分之 1</p>
                <p className="text-center text-lg mt-2"><Math tex="\sqrt[n]{a^m} = a^{\frac{m}{n}}" /></p>
                <p className="text-center text-gray-600">n 次根号下 a 的 m 次方 = 指数变成 n 分之 m</p>
              </div>
            </div>

            {/* 具体例子 */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-2">
              <p className="font-bold text-gray-800 mb-1">🧠 转化练习：根号 → 分数指数</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 leading-7">
                <p><Math tex="\sqrt{a} = a^{\frac{1}{2}}" /></p>
                <p><Math tex="\sqrt[3]{a} = a^{\frac{1}{3}}" /></p>
                <p><Math tex="\sqrt{a^3} = a^{\frac{3}{2}}" /></p>
                <p><Math tex="\sqrt[3]{a^2} = a^{\frac{2}{3}}" /></p>
                <p><Math tex="\dfrac{1}{\sqrt{a}} = a^{-\frac{1}{2}}" /></p>
                <p><Math tex="\dfrac{1}{\sqrt[3]{a}} = a^{-\frac{1}{3}}" /></p>
              </div>
              <p className="text-purple-700 font-bold mt-1">💡 把根号变成分数指数后，就可以用指数法则计算了！</p>
            </div>

            {/* 综合小例子 */}
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-2">
              <p className="font-bold text-purple-800 mb-0.5">🧩 综合小例子：把根号变成指数再算</p>
              <div className="leading-7">
                <p>化简 <Math tex="\dfrac{\sqrt{a^3} \cdot \sqrt[3]{a^2}}{\sqrt[6]{a}}" /></p>
                <p><strong>第①步 全部转成分数指数</strong>：<Math tex="\sqrt{a^3} = a^{\frac{3}{2}}" />，<Math tex="\sqrt[3]{a^2} = a^{\frac{2}{3}}" />，<Math tex="\sqrt[6]{a} = a^{\frac{1}{6}}" /></p>
                <p><strong>第②步 同底相乘（分子）</strong>：<Math tex="a^{\frac{3}{2}} \cdot a^{\frac{2}{3}} = a^{\frac{3}{2}+\frac{2}{3}} = a^{\frac{9}{6}+\frac{4}{6}} = a^{\frac{13}{6}}" /></p>
                <p><strong>第③步 同底相除</strong>：<Math tex="\dfrac{a^{\frac{13}{6}}}{a^{\frac{1}{6}}} = a^{\frac{13}{6}-\frac{1}{6}} = a^{\frac{12}{6}} = a^2" /></p>
                <p><strong>结论</strong>：<Math tex="\dfrac{\sqrt{a^3} \cdot \sqrt[3]{a^2}}{\sqrt[6]{a}} = a^2" />　<span className="text-purple-700">根号全变指数 → 通分相加减 → 搞定！</span></p>
              </div>
            </div>

            {/* 速查表 */}
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-3">
              <p className="font-bold text-indigo-800 mb-1">📌 根式 ↔ 分数指数幂 速查表</p>
              <div className="grid grid-cols-4 gap-x-2 gap-y-3 leading-10 text-lg text-gray-700">
                <p><Math tex="\sqrt{a} = a^{\frac{1}{2}}" /></p>
                <p><Math tex="\sqrt[3]{a} = a^{\frac{1}{3}}" /></p>
                <p><Math tex="\sqrt{a^3} = a^{\frac{3}{2}}" /></p>
                <p><Math tex="\sqrt[3]{a^2} = a^{\frac{2}{3}}" /></p>
                <p><Math tex="\dfrac{1}{\sqrt{a}} = a^{-\frac{1}{2}}" /></p>
                <p><Math tex="\dfrac{1}{\sqrt[3]{a}} = a^{-\frac{1}{3}}" /></p>
                <p><Math tex="\sqrt[4]{a^3} = a^{\frac{3}{4}}" /></p>
                <p><Math tex="\sqrt[6]{a} = a^{\frac{1}{6}}" /></p>
              </div>
            </div>

            {/* 即时练习 */}
            <PageBreak />
            <PracticeCard
              title="✏️ 即时练习：根式与分数指数幂（5题）"
              questions={elemPrereqPractice2}
              explanations={elementaryFuncPrereqExplanations}
            />

            <CalloutCard variant="warning" title="⚠️ 避坑指南">
              <div className="space-y-1">
                <p><strong>偶次根号下非负！</strong> <Math tex="\sqrt{a}" /> 要求 <Math tex="a \geq 0" />，转成 <Math tex="a^{\frac{1}{2}}" /> 同理</p>
                <p><strong>分数指数 ≠ 除以 n！</strong> <Math tex="a^{\frac{1}{3}}" /> 是"三次方根"，不是"<Math tex="a \div 3" />"</p>
                <p><strong>负指数 + 分数指数</strong>：<Math tex="\dfrac{1}{\sqrt{a}} = a^{-\frac{1}{2}}" />，先倒数再变指数</p>
                <p><strong>分子分母别搞反！</strong> <Math tex="\sqrt[3]{a^2} = a^{\frac{2}{3}}" />，分子是幂次 2，分母是根次 3，不是 <Math tex="a^{\frac{3}{2}}" /></p>
                <p><strong>转化后才能用法则！</strong> 根号混合运算时，先全部转成分数指数，再用同底相乘/相除法则</p>
                <p><strong>通分是关键！</strong> <Math tex="a^{\frac{3}{2}} \cdot a^{\frac{2}{3}}" /> 指数相加要先通分：<Math tex="\frac{3}{2}+\frac{2}{3}=\frac{9}{6}+\frac{4}{6}=\frac{13}{6}" /></p>
              </div>
            </CalloutCard>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* Section 3: 对数 */}
      {/* ════════════════════════════════════════════════════════════ */}
      <PageBreak />
      <section id="ep-logarithm" className="mb-2 scroll-mt-4">
        <Collapsible title="三、对数 — 指数的逆运算" defaultOpen storageKey="elem-prereq:logarithm" headerExtra={<SpeakButton text={elemPrereqNarrations.logarithm} />}>
          <p className="text-blue-600 mb-2">🎯 学完你能：理解对数的定义，会算简单对数，知道 lg 和 ln 是什么。</p>
          <div className="space-y-2 text-gray-700">

            {/* 引入 */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-2">
              <p className="leading-7"><strong className="text-amber-800">🤔 一个问题引入对数</strong> — <Math tex="2^x = 8" />，<Math tex="x = ?" /> 你一眼看出 <Math tex="x = 3" />。但如果问 <Math tex="2^x = 10" />，<Math tex="x = ?" /> 你就算不出来了。<strong>对数就是为了回答"指数是几"而发明的</strong>。</p>
            </div>

            {/* 对数定义 */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-xl p-3">
              <p className="font-bold text-blue-800 text-lg mb-2">🔑 对数的定义（必背！）</p>
              <div className="text-center space-y-2 leading-8">
                <p className="text-lg">如果 <Math tex="a^x = N" />，那么 <Math tex="x = \log_a N" /></p>
                <div className="flex items-center justify-center gap-4 text-gray-600 mt-1">
                  <span><Math tex="a" /> = <strong>底数</strong></span>
                  <span><Math tex="N" /> = <strong>真数</strong></span>
                  <span><Math tex="x" /> = <strong>对数值</strong></span>
                </div>
                <p className="text-gray-600 mt-1">读作："以 a 为底 N 的对数等于 x"</p>
              </div>
            </div>

            {/* 指数 ↔ 对数 转化 */}
            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-1">📖 指数式 ↔ 对数式 互相转化</p>
              <table className="w-full text-base border-collapse">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="border border-blue-200 px-2 py-1 text-center text-blue-700">指数式</th>
                    <th className="border border-blue-200 px-2 py-1 text-center text-blue-700">→</th>
                    <th className="border border-blue-200 px-2 py-1 text-center text-blue-700">对数式</th>
                    <th className="border border-blue-200 px-2 py-1 text-center text-blue-700">理解</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="2^3 = 8" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center">→</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\log_2 8 = 3" /></td>
                    <td className="border border-gray-200 px-2 py-1">2 的几次方等于 8？3 次</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="10^2 = 100" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center">→</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\log_{10} 100 = 2" /></td>
                    <td className="border border-gray-200 px-2 py-1">10 的几次方等于 100？2 次</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="3^4 = 81" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center">→</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\log_3 81 = 4" /></td>
                    <td className="border border-gray-200 px-2 py-1">3 的几次方等于 81？4 次</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="5^0 = 1" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center">→</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\log_5 1 = 0" /></td>
                    <td className="border border-gray-200 px-2 py-1">5 的几次方等于 1？0 次</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 两条铁律 + 特殊对数 */}
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-2">
                <p className="font-bold text-orange-800 mb-1">📌 两条铁律</p>
                <div className="leading-8 space-y-1">
                  <p><Math tex="\log_a 1 = 0" /></p>
                  <p className="text-gray-600 text-sm">（任何数的 0 次方 = 1）</p>
                  <p><Math tex="\log_a a = 1" /></p>
                  <p className="text-gray-600 text-sm">（a 的 1 次方 = a）</p>
                </div>
              </div>
              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-2">
                <p className="font-bold text-indigo-800 mb-1">📌 两个特殊对数</p>
                <div className="leading-8 space-y-1">
                  <p><Math tex="\lg N = \log_{10} N" /></p>
                  <p className="text-gray-600 text-sm">常用对数（底数为 10）</p>
                  <p><Math tex="\ln N = \log_{e} N" /></p>
                  <p className="text-gray-600 text-sm">自然对数（<Math tex="e \approx 2.718" />）</p>
                </div>
              </div>
            </div>

            {/* 对数限制条件 */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-2">
              <p className="font-bold text-red-800 mb-1">� 对数的限制条件</p>
              <div className="leading-7">
                <p><strong>底数</strong> <Math tex="a > 0" /> 且 <Math tex="a \neq 1" />（底数必须是正数且不等于 1）</p>
                <p><strong>真数</strong> <Math tex="N > 0" />（真数必须是正数，不能取 0 或负数）</p>
                <p className="text-red-700 mt-1">⚠️ 求对数函数定义域时，真数 &gt; 0 是最常用的条件！</p>
              </div>
            </div>

            {/* 对数恒等式 */}
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-2">
              <p className="font-bold text-purple-800 mb-1">🧩 对数恒等式（必背！）</p>
              <div className="leading-8">
                <p><Math tex="a^{\log_a N} = N" /></p>
                <p>含义：<Math tex="a" /> 的"以 <Math tex="a" /> 为底 <Math tex="N" /> 的对数"次方，结果就是 <Math tex="N" /></p>
                <div className="grid grid-cols-2 gap-x-4 leading-7 text-gray-600">
                  <p>例：<Math tex="2^{\log_2 5} = 5" /></p>
                  <p>例：<Math tex="10^{\lg 3} = 3" /></p>
                </div>
              </div>
              <div className="leading-8 mt-2">
                <p><Math tex="\log_a a^x = x" /></p>
                <p>含义：以 <Math tex="a" /> 为底 <Math tex="a^x" /> 的对数，结果就是 <Math tex="x" /></p>
                <div className="grid grid-cols-2 gap-x-4 leading-7 text-gray-600">
                  <p>例：<Math tex="\log_3 3^4 = 4" /></p>
                  <p>例：<Math tex="\ln e^2 = 2" /></p>
                </div>
              </div>
            </div>

            {/* 即时练习 */}
            <PageBreak />
            <PracticeCard
              title="✏️ 即时练习：对数基础（5题）"
              questions={elemPrereqPractice3}
              explanations={elementaryFuncPrereqExplanations}
            />

            <CalloutCard variant="warning" title="⚠️ 易错点">
              <div className="space-y-1">
                <p><strong>底数和真数别搞混！</strong> <Math tex="\log_2 8 = 3" />，底数是 2（下标），真数是 8（后面的数）</p>
                <p><strong>lg 不是 log！</strong> <Math tex="\lg" /> = <Math tex="\log_{10}" />（底数 10 省略不写），<Math tex="\ln" /> = <Math tex="\log_e" /></p>
                <p><strong>真数 &gt; 0，底数 ≠ 1！</strong> <Math tex="\log_2 0" />、<Math tex="\log_2(-4)" />、<Math tex="\log_1 5" /> 都无意义</p>
                <p><strong>恒等式别记反！</strong> <Math tex="a^{\log_a N} = N" />（指数套对数消掉），<Math tex="\log_a a^x = x" />（对数套指数消掉）</p>
              </div>
            </CalloutCard>

            {/* 对数速查表 */}
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-3">
              <p className="font-bold text-indigo-800 mb-1">📌 对数核心公式速查表</p>
              <div className="grid grid-cols-4 divide-x divide-indigo-200 text-lg leading-10 text-gray-700">
                <p className="text-center"><Math tex="\log_a 1 = 0" /></p>
                <p className="text-center"><Math tex="\log_a a = 1" /></p>
                <p className="text-center"><Math tex="a^{\log_a N} = N" /></p>
                <p className="text-center"><Math tex="\log_a a^x = x" /></p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* Section 4: 综合自测 */}
      {/* ════════════════════════════════════════════════════════════ */}
      <PageBreak />
      <section id="ep-quiz" className="mb-2 scroll-mt-4">
        <Collapsible title="四、综合自测（8题）— 全对可进入下一章，错2题以上回看对应节" defaultOpen storageKey="elem-prereq:quiz">
          <QuizPanel
            questions={elemPrereqQuizQuestions}
            module="elem-prereq-quiz"
            explanations={elementaryFuncPrereqExplanations}
          />
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* 速查表 */}
      {/* ════════════════════════════════════════════════════════════ */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-2 mt-1">
        <p className="font-bold text-indigo-800 mb-1">📌 速查表（打印贴墙上）</p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 leading-7 text-gray-700">
          <p><strong>同底相乘</strong>：<Math tex="a^m \cdot a^n = a^{m+n}" /></p>
          <p><strong>同底相除</strong>：<Math tex="\dfrac{a^m}{a^n} = a^{m-n}" /></p>
          <p><strong>幂的幂</strong>：<Math tex="(a^m)^n = a^{mn}" /></p>
          <p><strong>积的幂</strong>：<Math tex="(ab)^n = a^n b^n" /></p>
          <p><strong>商的幂</strong>：<Math tex="\left(\dfrac{a}{b}\right)^n = \dfrac{a^n}{b^n}" /></p>
          <p><strong>零指数</strong>：<Math tex="a^0 = 1" /></p>
          <p><strong>负指数</strong>：<Math tex="a^{-n} = \dfrac{1}{a^n}" /></p>
          <p><strong>分数指数</strong>：<Math tex="a^{\frac{m}{n}} = \sqrt[n]{a^m}" /></p>
          <p><strong>对数定义</strong>：<Math tex="a^x = N \Leftrightarrow x = \log_a N" /></p>
          <p><strong>铁律</strong>：<Math tex="\log_a 1 = 0,\; \log_a a = 1" /></p>
          <p><strong>常用对数</strong>：<Math tex="\lg = \log_{10}" /></p>
          <p><strong>自然对数</strong>：<Math tex="\ln = \log_e" /></p>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* 打印模式答案区 */}
      {/* ════════════════════════════════════════════════════════════ */}
      {isPrinting && printOptions.showAnswers && <ElementaryFuncPrereqAnswers />}

      </LessonLayout>
    </div>
  );
}
