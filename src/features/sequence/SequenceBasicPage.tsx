import { Math as MathTex, Collapsible, SpeakButton, PageHeader, LessonLayout, ExportButton, QuizPanel, PracticeCard, PageBreak } from '@/components/shared';
import { sequenceBasicNarrations } from './data/basic-narrations';
import { sequenceBasicProgressItems } from './data/basic-progress';
import { sequenceBasicPractice, sequenceBasicQuiz } from './data/basic-questions';
import { useProgress } from '@/hooks';
import { usePrintMode } from '@/hooks/usePrintMode';
import { scrollToId } from '@/lib/scroll';

export function SequenceBasicPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('sequence-basic', sequenceBasicProgressItems);
  const { isPrinting, printOptions } = usePrintMode();

  return (
    <div>
      <PageHeader
        stage="第六阶段 · 数列套路"
        title="6.1 等差数列与等比数列"
        narration={sequenceBasicNarrations.intro}
        subtitle="4 个公式打天下——等差等比的通项公式和前 n 项和"
        tags={[
          { label: '难度 ★★☆☆☆', color: 'amber' },
          { label: '高考 10-15 分', color: 'red' },
          { label: '约2天', color: 'blue' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="6.1 等差数列与等比数列" />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-3 mb-0">
        <p className="font-bold text-gray-800 mb-2">📋 知识地图</p>
        <div className="text-gray-600 space-y-1">
          <button onClick={() => scrollToId('arith-def')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">一、等差数列的定义</button>
          <button onClick={() => scrollToId('arith-formula')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">二、等差数列的通项公式</button>
          <button onClick={() => scrollToId('arith-sum')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">三、等差数列的前 n 项和</button>
          <button onClick={() => scrollToId('arith-props')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">四、等差数列的性质</button>
          <button onClick={() => scrollToId('geo-def')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">五、等比数列的定义</button>
          <button onClick={() => scrollToId('geo-formula')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">六、等比数列的通项公式</button>
          <button onClick={() => scrollToId('geo-sum')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">七、等比数列的前 n 项和</button>
          <button onClick={() => scrollToId('geo-props')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">八、等比数列的性质</button>
          <button onClick={() => scrollToId('compare')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">九、等差 vs 等比 对照总结</button>
        </div>
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 1: 等差数列的定义 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="arith-def" className="mb-3 scroll-mt-4">
        <Collapsible title="一、等差数列的定义" defaultOpen storageKey="seq-basic:arith-def" headerExtra={<SpeakButton text={sequenceBasicNarrations.arithDef} />}>
          <p className="text-blue-600 mb-2">🎯 学完你能：判断一个数列是不是等差数列，并找出公差。</p>
          <div className="space-y-1 text-gray-700">

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
              <p className="font-bold text-lg text-blue-800 mb-2">核心定义</p>
              <div className="bg-white rounded-lg p-3 border border-blue-100 text-center">
                <p className="text-xl"><MathTex tex="a_{n+1} - a_n = d \quad (\text{常数})" /></p>
              </div>
              <p className="text-blue-700 mt-2">从第 2 项开始，<strong>每一项减去前一项都等于同一个数</strong>，这个数叫<strong>公差</strong>，记作 <MathTex tex="d" /></p>
            </div>

            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-bold text-gray-800 mb-2">用大白话说</p>
              <p className="text-lg">等差数列就是<strong>每次加同一个数</strong>的数列</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <p className="font-bold text-blue-700 mb-1"><MathTex tex="d > 0" />：递增</p>
                  <p className="text-lg text-center"><MathTex tex="2, 5, 8, 11, 14, \ldots" /></p>
                  <p className="text-gray-500 mt-1 text-center">每次 <MathTex tex="+3" /></p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <p className="font-bold text-green-700 mb-1"><MathTex tex="d < 0" />：递减</p>
                  <p className="text-lg text-center"><MathTex tex="20, 17, 14, 11, 8, \ldots" /></p>
                  <p className="text-gray-500 mt-1 text-center">每次 <MathTex tex="-3" /></p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <p className="font-bold text-purple-700 mb-1"><MathTex tex="d = 0" />：常数列</p>
                  <p className="text-lg text-center"><MathTex tex="5, 5, 5, 5, 5, \ldots" /></p>
                  <p className="text-gray-500 mt-1 text-center">每次 <MathTex tex="+0" /></p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="font-bold text-green-800 mb-2">怎么判断？看相邻两项的差</p>
              <div className="bg-white rounded-lg p-3 border border-green-100">
                <p className="font-bold mb-1">例：判断 <MathTex tex="3, 7, 11, 15, 19" /> 是否为等差数列</p>
                <div className="mt-2 space-y-0.5">
                  <p><MathTex tex="a_2 - a_1 = 7 - 3 = 4" /></p>
                  <p><MathTex tex="a_3 - a_2 = 11 - 7 = 4" /></p>
                  <p><MathTex tex="a_4 - a_3 = 15 - 11 = 4" /></p>
                  <p><MathTex tex="a_5 - a_4 = 19 - 15 = 4" /></p>
                </div>
                <p className="mt-2 text-green-700">相邻两项之差都等于 <MathTex tex="4" />（常数），所以是等差数列，公差 <MathTex tex="d = 4" /></p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <p className="font-bold text-amber-800">💡 生活中的等差数列</p>
              <div className="space-y-1 mt-1">
                <p>每月固定存 500 元：<MathTex tex="500, 1000, 1500, 2000, \ldots" />（<MathTex tex="d = 500" />）</p>
                <p>温度每小时降 2°C：<MathTex tex="30, 28, 26, 24, \ldots" />（<MathTex tex="d = -2" />）</p>
                <p>楼层编号：<MathTex tex="1, 2, 3, 4, 5, \ldots" />（<MathTex tex="d = 1" />）</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 2: 等差数列的通项公式 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="arith-formula" className="mb-3 scroll-mt-4">
        <Collapsible title="二、等差数列的通项公式" defaultOpen storageKey="seq-basic:arith-formula" headerExtra={<SpeakButton text={sequenceBasicNarrations.arithFormula} />}>
          <p className="text-blue-600 mb-2">🎯 学完你能：已知首项和公差，直接算出任意一项。</p>
          <div className="space-y-1 text-gray-700">

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
              <p className="font-bold text-lg text-blue-800 mb-2">公式 ①（必背）</p>
              <div className="bg-white rounded-lg p-3 border border-blue-100 text-center">
                <p className="text-xl"><MathTex tex="a_n = a_1 + (n-1)d" /></p>
              </div>
              <p className="text-blue-700 mt-2">读法：第 <MathTex tex="n" /> 项 = 首项 + (<MathTex tex="n-1" />) 个公差</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-bold text-gray-800 mb-2">为什么是 <MathTex tex="n-1" /> 而不是 <MathTex tex="n" />？</p>
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <p>从第 1 项到第 <MathTex tex="n" /> 项，需要"走" <MathTex tex="n-1" /> 步：</p>
                <div className="mt-2 space-y-0.5">
                  <p><MathTex tex="a_1" /> → <MathTex tex="a_2" />：加了 <strong>1</strong> 次 <MathTex tex="d" /></p>
                  <p><MathTex tex="a_1" /> → <MathTex tex="a_3" />：加了 <strong>2</strong> 次 <MathTex tex="d" /></p>
                  <p><MathTex tex="a_1" /> → <MathTex tex="a_4" />：加了 <strong>3</strong> 次 <MathTex tex="d" /></p>
                  <p><MathTex tex="a_1" /> → <MathTex tex="a_n" />：加了 <strong><MathTex tex="n-1" /></strong> 次 <MathTex tex="d" /></p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="font-bold text-green-800 mb-2">实战演练</p>
              <div className="space-y-2">
                <div className="bg-white rounded-lg p-3 border border-green-100">
                  <p className="font-bold mb-1">例 1：已知 <MathTex tex="a_1 = 2,\; d = 3" />，求 <MathTex tex="a_{20}" /></p>
                  <p className="mt-1"><MathTex tex="a_{20} = 2 + (20-1) \times 3 = 2 + 57 = 59" /></p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-green-100">
                  <p className="font-bold mb-1">例 2：已知 <MathTex tex="a_1 = 100,\; d = -7" />，求 <MathTex tex="a_{10}" /></p>
                  <p className="mt-1"><MathTex tex="a_{10} = 100 + (10-1) \times (-7) = 100 - 63 = 37" /></p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-green-100">
                  <p className="font-bold mb-1">例 3（反向求）：已知 <MathTex tex="a_1 = 5,\; a_{11} = 35" />，求 <MathTex tex="d" /></p>
                  <p className="mt-1"><MathTex tex="35 = 5 + (11-1)d" /></p>
                  <p><MathTex tex="30 = 10d" /></p>
                  <p><MathTex tex="d = 3" /></p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
              <p className="font-bold text-purple-800 mb-2">推广形式（也很有用）</p>
              <div className="bg-white rounded-lg p-3 border border-purple-100 text-center">
                <p className="text-xl"><MathTex tex="a_n = a_m + (n-m)d" /></p>
              </div>
              <p className="text-purple-700 mt-2">不一定从第 1 项出发，从<strong>任意已知项</strong>都能推其他项</p>
              <div className="bg-white rounded-lg p-2 border border-purple-100 mt-1">
                <p>例：已知 <MathTex tex="a_3 = 10,\; d = 4" />，求 <MathTex tex="a_8" /></p>
                <p className="mt-1"><MathTex tex="a_8 = a_3 + (8-3) \times 4 = 10 + 20 = 30" /></p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 3: 等差数列的前 n 项和 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="arith-sum" className="mb-3 scroll-mt-4">
        <Collapsible title="三、等差数列的前 n 项和" defaultOpen storageKey="seq-basic:arith-sum" headerExtra={<SpeakButton text={sequenceBasicNarrations.arithSum} />}>
          <p className="text-blue-600 mb-2">🎯 学完你能：快速求出等差数列前 n 项的总和。</p>
          <div className="space-y-1 text-gray-700">

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
              <p className="font-bold text-lg text-blue-800 mb-2">公式 ②（两种写法，必背）</p>
              <div className="space-y-2">
                <div className="bg-white rounded-lg p-3 border border-blue-100 text-center">
                  <p className="text-gray-500 mb-1">写法 A：知道首项和末项</p>
                  <p className="text-xl"><MathTex tex="S_n = \dfrac{n(a_1 + a_n)}{2}" /></p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-blue-100 text-center">
                  <p className="text-gray-500 mb-1">写法 B：知道首项和公差</p>
                  <p className="text-xl"><MathTex tex="S_n = na_1 + \dfrac{n(n-1)}{2}d" /></p>
                </div>
              </div>
              <p className="text-blue-700 mt-2">两个公式本质相同（B 是把 A 中的 <MathTex tex="a_n" /> 用通项公式展开），根据已知条件选方便的用</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="font-bold text-green-800 mb-2">公式怎么来的？——高斯的故事</p>
              <div className="bg-white rounded-lg p-3 border border-green-100">
                <p className="font-bold mb-1">求 <MathTex tex="1 + 2 + 3 + \cdots + 100 = ?" /></p>
                <p className="mt-2">高斯（10 岁）发现了一个妙招——<strong>首尾配对</strong>：</p>
                <div className="mt-2 bg-green-50 rounded p-2">
                  <p><MathTex tex="S = \phantom{+}1 + \phantom{0}2 + \phantom{0}3 + \cdots + 98 + 99 + 100" /></p>
                  <p><MathTex tex="S = 100 + 99 + 98 + \cdots + \phantom{0}3 + \phantom{0}2 + \phantom{00}1" /></p>
                  <div className="border-t border-green-300 mt-1 pt-1">
                    <p><MathTex tex="2S = 101 + 101 + 101 + \cdots + 101 + 101 + 101" /></p>
                    <p className="ml-6">（一共 100 个 101）</p>
                  </div>
                </div>
                <p className="mt-2"><MathTex tex="2S = 100 \times 101 = 10100" /></p>
                <p><MathTex tex="S = \dfrac{10100}{2} = 5050" /></p>
                <p className="text-green-700 mt-2">这就是<strong>倒序相加法</strong>——把 <MathTex tex="S_n" /> 正着写一遍、倒着写一遍，上下对应项相加都等于 <MathTex tex="a_1 + a_n" /></p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-bold text-gray-800 mb-2">实战演练</p>
              <div className="space-y-2">
                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <p className="font-bold mb-1">例 1：求 <MathTex tex="2 + 5 + 8 + 11 + \cdots + 29" /> 的和</p>
                  <p className="mt-1">这是 <MathTex tex="a_1 = 2,\; d = 3" /> 的等差数列</p>
                  <p>先求项数：<MathTex tex="29 = 2 + (n-1) \times 3 \Rightarrow n = 10" /></p>
                  <p><MathTex tex="S_{10} = \dfrac{10 \times (2 + 29)}{2} = \dfrac{310}{2} = 155" /></p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <p className="font-bold mb-1">例 2：<MathTex tex="a_1 = 1,\; d = 2" />，求 <MathTex tex="S_{20}" /></p>
                  <p className="mt-1"><MathTex tex="S_{20} = 20 \times 1 + \dfrac{20 \times 19}{2} \times 2 = 20 + 380 = 400" /></p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <p className="font-bold text-amber-800">💡 记忆口诀</p>
              <p className="mt-1 text-lg">首项加末项，乘以项数除以 2</p>
              <p className="text-amber-700 mt-1">（跟梯形面积公式一模一样：上底加下底乘高除以 2）</p>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 4: 等差数列的性质 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="arith-props" className="mb-3 scroll-mt-4">
        <Collapsible title="四、等差数列的性质" defaultOpen storageKey="seq-basic:arith-props" headerExtra={<SpeakButton text={sequenceBasicNarrations.arithProps} />}>
          <p className="text-blue-600 mb-2">🎯 学完你能：用性质秒解高考小题，不用死算。</p>
          <div className="space-y-1 text-gray-700">

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
              <p className="font-bold text-lg text-blue-800 mb-2">性质 1：下标和相等，项的和也相等</p>
              <div className="bg-white rounded-lg p-3 border border-blue-100 text-center">
                <p className="text-xl"><MathTex tex="\text{若 } m + n = p + q \text{，则 } a_m + a_n = a_p + a_q" /></p>
              </div>
              <div className="mt-2 space-y-0.5">
                <p>例：<MathTex tex="a_3 + a_7 = a_4 + a_6 = a_1 + a_9 = a_5 + a_5 = 2a_5" /></p>
                <p className="text-blue-700">（因为 <MathTex tex="3+7 = 4+6 = 1+9 = 5+5 = 10" />）</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-bold text-gray-800 mb-2">性质 2：等差中项</p>
              <div className="bg-white rounded-lg p-3 border border-gray-200 text-center">
                <p className="text-xl"><MathTex tex="\text{若 } a, A, b \text{ 成等差数列，则 } A = \dfrac{a + b}{2}" /></p>
              </div>
              <p className="mt-2"><MathTex tex="A" /> 叫做 <MathTex tex="a" /> 和 <MathTex tex="b" /> 的<strong>等差中项</strong>（就是平均数）</p>
              <div className="bg-white rounded-lg p-2 border border-gray-200 mt-1">
                <p>例：<MathTex tex="3, \underline{\phantom{0}}, 11" /> 成等差数列，中间那个数是多少？</p>
                <p className="mt-1"><MathTex tex="A = \dfrac{3 + 11}{2} = 7" /></p>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
              <p className="font-bold text-purple-800 mb-2">性质 3：<MathTex tex="S_n" /> 是关于 <MathTex tex="n" /> 的二次函数</p>
              <div className="bg-white rounded-lg p-3 border border-purple-100">
                <p>把求和公式展开：</p>
                <p className="mt-1"><MathTex tex="S_n = na_1 + \dfrac{n(n-1)}{2}d = \dfrac{d}{2}n^2 + \left(a_1 - \dfrac{d}{2}\right)n" /></p>
                <p className="mt-2">这是一个关于 <MathTex tex="n" /> 的二次函数（<MathTex tex="d \neq 0" /> 时），<strong>且没有常数项</strong></p>
                <p className="text-purple-700 mt-1">判断依据：如果 <MathTex tex="S_n = An^2 + Bn" />（没有常数项），则一定是等差数列</p>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="font-bold text-red-800 mb-1">⚠️ 高考常见套路</p>
              <p>题目给你 <MathTex tex="a_3 + a_7 = 20" />，问 <MathTex tex="a_5" /> 或 <MathTex tex="S_9" /></p>
              <p className="mt-1">直接用性质：<MathTex tex="a_3 + a_7 = 2a_5 = 20 \Rightarrow a_5 = 10" /></p>
              <p><MathTex tex="S_9 = \dfrac{9(a_1 + a_9)}{2} = \dfrac{9 \times 2a_5}{2} = 9 \times 10 = 90" /></p>
              <p className="text-red-700 mt-1">不需要求出 <MathTex tex="a_1" /> 和 <MathTex tex="d" />，直接用性质秒杀！</p>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 5: 等比数列的定义 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="geo-def" className="mb-3 scroll-mt-4">
        <Collapsible title="五、等比数列的定义" defaultOpen storageKey="seq-basic:geo-def" headerExtra={<SpeakButton text={sequenceBasicNarrations.geoDef} />}>
          <p className="text-blue-600 mb-2">🎯 学完你能：判断一个数列是不是等比数列，并找出公比。</p>
          <div className="space-y-1 text-gray-700">

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
              <p className="font-bold text-lg text-blue-800 mb-2">核心定义</p>
              <div className="bg-white rounded-lg p-3 border border-blue-100 text-center">
                <p className="text-xl"><MathTex tex="\dfrac{a_{n+1}}{a_n} = q \quad (q \neq 0,\; a_n \neq 0)" /></p>
              </div>
              <p className="text-blue-700 mt-2">从第 2 项开始，<strong>每一项除以前一项都等于同一个数</strong>，这个数叫<strong>公比</strong>，记作 <MathTex tex="q" /></p>
            </div>

            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-bold text-gray-800 mb-2">用大白话说</p>
              <p className="text-lg">等比数列就是<strong>每次乘同一个数</strong>的数列</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <p className="font-bold text-blue-700 mb-1"><MathTex tex="q > 1" />：爆发增长</p>
                  <p className="text-lg text-center"><MathTex tex="2, 6, 18, 54, \ldots" /></p>
                  <p className="text-gray-500 mt-1 text-center">每次 <MathTex tex="\times 3" /></p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <p className="font-bold text-green-700 mb-1"><MathTex tex="0 < q < 1" />：逐渐衰减</p>
                  <p className="text-lg text-center"><MathTex tex="8, 4, 2, 1, \dfrac{1}{2}, \ldots" /></p>
                  <p className="text-gray-500 mt-1 text-center">每次 <MathTex tex="\times \dfrac{1}{2}" /></p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <p className="font-bold text-purple-700 mb-1"><MathTex tex="q < 0" />：正负交替</p>
                  <p className="text-lg text-center"><MathTex tex="1, -2, 4, -8, 16, \ldots" /></p>
                  <p className="text-gray-500 mt-1 text-center">每次 <MathTex tex="\times (-2)" /></p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="font-bold text-red-800 mb-1">⚠️ 两个重要限制</p>
              <div className="space-y-1 mt-1">
                <p>❌ 公比 <MathTex tex="q \neq 0" />（乘以 0 所有项都变成 0，没意义）</p>
                <p>❌ 等比数列中<strong>每一项都不能为 0</strong>（如果某项是 0，除以 0 无意义）</p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <p className="font-bold text-amber-800">💡 生活中的等比数列</p>
              <div className="space-y-1 mt-1">
                <p>细胞分裂：<MathTex tex="1, 2, 4, 8, 16, \ldots" />（<MathTex tex="q = 2" />）</p>
                <p>银行复利：本金每年变成原来的 1.05 倍（<MathTex tex="q = 1.05" />）</p>
                <p>半衰期：放射性物质每过一段时间剩一半（<MathTex tex="q = 0.5" />）</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 6: 等比数列的通项公式 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="geo-formula" className="mb-3 scroll-mt-4">
        <Collapsible title="六、等比数列的通项公式" defaultOpen storageKey="seq-basic:geo-formula" headerExtra={<SpeakButton text={sequenceBasicNarrations.geoFormula} />}>
          <p className="text-blue-600 mb-2">🎯 学完你能：已知首项和公比，直接算出任意一项。</p>
          <div className="space-y-1 text-gray-700">

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
              <p className="font-bold text-lg text-blue-800 mb-2">公式 ③（必背）</p>
              <div className="bg-white rounded-lg p-3 border border-blue-100 text-center">
                <p className="text-xl"><MathTex tex="a_n = a_1 \cdot q^{n-1}" /></p>
              </div>
              <p className="text-blue-700 mt-2">读法：第 <MathTex tex="n" /> 项 = 首项 <MathTex tex="\times" /> 公比的 <MathTex tex="(n-1)" /> 次方</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-bold text-gray-800 mb-2">和等差数列对比记忆</p>
              <div className="overflow-x-auto">
                <table className="w-full text-center">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="py-2"></th>
                      <th className="py-2 text-blue-700">等差数列</th>
                      <th className="py-2 text-green-700">等比数列</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 font-bold">核心运算</td>
                      <td className="py-2"><strong>加</strong>法</td>
                      <td className="py-2"><strong>乘</strong>法</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-bold">通项公式</td>
                      <td className="py-2"><MathTex tex="a_1 + (n-1)d" /></td>
                      <td className="py-2"><MathTex tex="a_1 \cdot q^{n-1}" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-600 mt-2">等差是"首项<strong>加上</strong> <MathTex tex="n-1" /> 个公差"，等比是"首项<strong>乘上</strong> <MathTex tex="n-1" /> 个公比"</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="font-bold text-green-800 mb-2">实战演练</p>
              <div className="space-y-2">
                <div className="bg-white rounded-lg p-3 border border-green-100">
                  <p className="font-bold mb-1">例 1：已知 <MathTex tex="a_1 = 3,\; q = 2" />，求 <MathTex tex="a_6" /></p>
                  <p className="mt-1"><MathTex tex="a_6 = 3 \times 2^{6-1} = 3 \times 2^5 = 3 \times 32 = 96" /></p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-green-100">
                  <p className="font-bold mb-1">例 2：已知 <MathTex tex="a_1 = 1,\; q = -2" />，求 <MathTex tex="a_5" /></p>
                  <p className="mt-1"><MathTex tex="a_5 = 1 \times (-2)^4 = 16" /></p>
                  <p className="text-gray-500">（偶数次方变正）</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-green-100">
                  <p className="font-bold mb-1">例 3（反向求）：已知 <MathTex tex="a_1 = 2,\; a_4 = 54" />，求 <MathTex tex="q" /></p>
                  <p className="mt-1"><MathTex tex="54 = 2 \times q^3" /></p>
                  <p><MathTex tex="q^3 = 27" /></p>
                  <p><MathTex tex="q = 3" /></p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
              <p className="font-bold text-purple-800 mb-2">推广形式</p>
              <div className="bg-white rounded-lg p-3 border border-purple-100 text-center">
                <p className="text-xl"><MathTex tex="a_n = a_m \cdot q^{n-m}" /></p>
              </div>
              <p className="text-purple-700 mt-2">从任意已知项出发都能推其他项（和等差的推广形式对应）</p>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 7: 等比数列的前 n 项和 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="geo-sum" className="mb-3 scroll-mt-4">
        <Collapsible title="七、等比数列的前 n 项和" defaultOpen storageKey="seq-basic:geo-sum" headerExtra={<SpeakButton text={sequenceBasicNarrations.geoSum} />}>
          <p className="text-blue-600 mb-2">🎯 学完你能：求等比数列前 n 项的总和（注意分类讨论！）。</p>
          <div className="space-y-1 text-gray-700">

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
              <p className="font-bold text-lg text-blue-800 mb-2">公式 ④（必背，注意分类！）</p>
              <div className="bg-white rounded-lg p-3 border border-blue-100 text-center">
                <p className="text-xl"><MathTex tex="S_n = \begin{cases} na_1 & q = 1 \\[8pt] \dfrac{a_1(1 - q^n)}{1 - q} & q \neq 1 \end{cases}" /></p>
              </div>
              <p className="text-red-600 font-bold mt-2">必须分两种情况！<MathTex tex="q = 1" /> 和 <MathTex tex="q \neq 1" /> 的公式不一样</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="font-bold text-green-800 mb-2">公式怎么来的？——错位相乘法</p>
              <div className="bg-white rounded-lg p-3 border border-green-100">
                <p className="font-bold mb-1">推导过程（当 <MathTex tex="q \neq 1" /> 时）：</p>
                <div className="mt-2 space-y-1">
                  <p><MathTex tex="S_n = a_1 + a_1 q + a_1 q^2 + \cdots + a_1 q^{n-1}" /> …… ①</p>
                  <p>两边同时乘以 <MathTex tex="q" />：</p>
                  <p><MathTex tex="qS_n = a_1 q + a_1 q^2 + a_1 q^3 + \cdots + a_1 q^n" /> …… ②</p>
                  <p className="mt-1">① - ②（错位相减）：</p>
                  <p><MathTex tex="S_n - qS_n = a_1 - a_1 q^n" /></p>
                  <p><MathTex tex="(1-q)S_n = a_1(1 - q^n)" /></p>
                  <p><MathTex tex="S_n = \dfrac{a_1(1 - q^n)}{1 - q}" /></p>
                </div>
                <p className="text-green-700 mt-2">核心思想：乘以 <MathTex tex="q" /> 后错一位，中间项全部消掉，只剩首尾</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-bold text-gray-800 mb-2">实战演练</p>
              <div className="space-y-2">
                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <p className="font-bold mb-1">例 1：<MathTex tex="a_1 = 1,\; q = 2" />，求 <MathTex tex="S_5" /></p>
                  <p className="mt-1"><MathTex tex="S_5 = \dfrac{1 \times (1 - 2^5)}{1 - 2} = \dfrac{1 - 32}{-1} = \dfrac{-31}{-1} = 31" /></p>
                  <p className="text-gray-500">验证：<MathTex tex="1 + 2 + 4 + 8 + 16 = 31\;\checkmark" /></p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <p className="font-bold mb-1">例 2：<MathTex tex="a_1 = 3,\; q = 1" />，求 <MathTex tex="S_{10}" /></p>
                  <p className="mt-1">因为 <MathTex tex="q = 1" />，每项都是 3：</p>
                  <p><MathTex tex="S_{10} = 10 \times 3 = 30" /></p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <p className="font-bold mb-1">例 3：<MathTex tex="a_1 = 8,\; q = \dfrac{1}{2}" />，求 <MathTex tex="S_4" /></p>
                  <p className="mt-1"><MathTex tex="S_4 = \dfrac{8 \times \left(1 - \left(\dfrac{1}{2}\right)^4\right)}{1 - \dfrac{1}{2}} = \dfrac{8 \times \left(1 - \dfrac{1}{16}\right)}{\dfrac{1}{2}} = \dfrac{8 \times \dfrac{15}{16}}{\dfrac{1}{2}} = \dfrac{\dfrac{15}{2}}{\dfrac{1}{2}} = 15" /></p>
                  <p className="text-gray-500">验证：<MathTex tex="8 + 4 + 2 + 1 = 15\;\checkmark" /></p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="font-bold text-red-800 mb-1">⚠️ 高考丢分重灾区</p>
              <p>题目没说 <MathTex tex="q" /> 不等于 1，你就<strong>必须分类讨论</strong>！</p>
              <p className="mt-1">写法：先写"当 <MathTex tex="q = 1" /> 时，<MathTex tex="S_n = na_1" />"，再写"当 <MathTex tex="q \neq 1" /> 时，<MathTex tex="S_n = \dfrac{a_1(1-q^n)}{1-q}" />"</p>
              <p className="text-red-700 mt-1">忘了分类讨论 = 直接扣分，这是高考评分的硬规定</p>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 8: 等比数列的性质 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="geo-props" className="mb-3 scroll-mt-4">
        <Collapsible title="八、等比数列的性质" defaultOpen storageKey="seq-basic:geo-props" headerExtra={<SpeakButton text={sequenceBasicNarrations.geoProps} />}>
          <p className="text-blue-600 mb-2">🎯 学完你能：用性质快速解题，避免硬算。</p>
          <div className="space-y-1 text-gray-700">

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
              <p className="font-bold text-lg text-blue-800 mb-2">性质 1：下标和相等，项的积也相等</p>
              <div className="bg-white rounded-lg p-3 border border-blue-100 text-center">
                <p className="text-xl"><MathTex tex="\text{若 } m + n = p + q \text{，则 } a_m \cdot a_n = a_p \cdot a_q" /></p>
              </div>
              <p className="mt-2">注意和等差数列对比：等差是<strong>和</strong>相等，等比是<strong>积</strong>相等</p>
              <p className="text-blue-700 mt-1">例：<MathTex tex="a_2 \cdot a_8 = a_4 \cdot a_6 = a_5^2" /></p>
            </div>

            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-bold text-gray-800 mb-2">性质 2：等比中项</p>
              <div className="bg-white rounded-lg p-3 border border-gray-200 text-center">
                <p className="text-xl"><MathTex tex="\text{若 } a, G, b \text{ 成等比数列，则 } G^2 = ab" /></p>
              </div>
              <p className="mt-2">即 <MathTex tex="G = \pm\sqrt{ab}" />（注意正负号！）</p>
              <div className="bg-white rounded-lg p-2 border border-gray-200 mt-1">
                <p>例：<MathTex tex="2, \underline{\phantom{0}}, 8" /> 成等比数列，中间是多少？</p>
                <p className="mt-1"><MathTex tex="G^2 = 2 \times 8 = 16 \Rightarrow G = \pm 4" /></p>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
              <p className="font-bold text-purple-800 mb-2">性质 3：<MathTex tex="S_n,\; S_{2n} - S_n,\; S_{3n} - S_{2n}" /> 也成等比数列</p>
              <div className="bg-white rounded-lg p-3 border border-purple-100">
                <p>把等比数列的前 <MathTex tex="n" /> 项和分段来看：</p>
                <p className="mt-1"><MathTex tex="S_n" />（前 <MathTex tex="n" /> 项的和），<MathTex tex="S_{2n} - S_n" />（第 <MathTex tex="n+1" /> 到第 <MathTex tex="2n" /> 项的和），<MathTex tex="S_{3n} - S_{2n}" />（第 <MathTex tex="2n+1" /> 到第 <MathTex tex="3n" /> 项的和）</p>
                <p className="text-purple-700 mt-1">这三段本身也构成等比数列（公比为 <MathTex tex="q^n" />）</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 9: 等差 vs 等比 对照总结 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="compare" className="mb-3 scroll-mt-4">
        <Collapsible title="九、等差 vs 等比 对照总结" defaultOpen storageKey="seq-basic:compare" headerExtra={<SpeakButton text={sequenceBasicNarrations.compare} />}>
          <p className="text-blue-600 mb-2">🎯 把两种数列放在一起对比，记忆更牢固。</p>
          <div className="space-y-1 text-gray-700">

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
              <p className="font-bold text-lg text-blue-800 mb-2">完整对照表（必背）</p>
              <div className="bg-white rounded-lg p-2 border border-blue-100 overflow-x-auto">
                <table className="w-full text-center">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="py-2 text-left pl-2 font-bold text-gray-700"></th>
                      <th className="py-2 font-bold text-blue-700">等差数列</th>
                      <th className="py-2 font-bold text-green-700">等比数列</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2.5 text-left pl-2 font-bold">定义</td>
                      <td className="py-2.5"><MathTex tex="a_{n+1} - a_n = d" /></td>
                      <td className="py-2.5"><MathTex tex="\dfrac{a_{n+1}}{a_n} = q" /></td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2.5 text-left pl-2 font-bold">核心运算</td>
                      <td className="py-2.5">加法</td>
                      <td className="py-2.5">乘法</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2.5 text-left pl-2 font-bold">通项公式</td>
                      <td className="py-2.5"><MathTex tex="a_1 + (n-1)d" /></td>
                      <td className="py-2.5"><MathTex tex="a_1 \cdot q^{n-1}" /></td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2.5 text-left pl-2 font-bold">前 n 项和</td>
                      <td className="py-2.5"><MathTex tex="\dfrac{n(a_1 + a_n)}{2}" /></td>
                      <td className="py-2.5"><MathTex tex="\dfrac{a_1(1-q^n)}{1-q}" /></td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2.5 text-left pl-2 font-bold">中项</td>
                      <td className="py-2.5"><MathTex tex="A = \dfrac{a+b}{2}" /></td>
                      <td className="py-2.5"><MathTex tex="G^2 = ab" /></td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2.5 text-left pl-2 font-bold">下标性质</td>
                      <td className="py-2.5"><MathTex tex="a_m + a_n = a_p + a_q" /></td>
                      <td className="py-2.5"><MathTex tex="a_m \cdot a_n = a_p \cdot a_q" /></td>
                    </tr>
                    <tr>
                      <td className="py-2.5 text-left pl-2 font-bold">函数类型</td>
                      <td className="py-2.5">一次函数（线性）</td>
                      <td className="py-2.5">指数函数（指数增长）</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="font-bold text-green-800 mb-2">🔥 高考解题核心方法：基本量法</p>
              <div className="bg-white rounded-lg p-3 border border-green-100">
                <p>绝大多数数列题都可以用这个方法解决：</p>
                <div className="mt-2 space-y-1">
                  <p><strong>① 等差数列的基本量</strong>：<MathTex tex="a_1" /> 和 <MathTex tex="d" />（知道这两个就能算一切）</p>
                  <p><strong>② 等比数列的基本量</strong>：<MathTex tex="a_1" /> 和 <MathTex tex="q" />（知道这两个就能算一切）</p>
                </div>
                <p className="mt-2 text-green-700">套路：题目给你两个条件 → 列两个方程 → 解出 <MathTex tex="a_1" /> 和 <MathTex tex="d" />（或 <MathTex tex="q" />）→ 代入求答案</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-bold text-gray-800 mb-2">基本量法实战</p>
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <p className="font-bold mb-1">题目：等差数列中，<MathTex tex="a_3 = 7,\; a_7 = 19" />，求 <MathTex tex="a_1" /> 和 <MathTex tex="d" /></p>
                <div className="mt-2 space-y-1">
                  <p>用通项公式列两个方程：</p>
                  <p><MathTex tex="a_3 = a_1 + 2d = 7" /> …… ①</p>
                  <p><MathTex tex="a_7 = a_1 + 6d = 19" /> …… ②</p>
                  <p className="mt-1">② - ①：<MathTex tex="4d = 12 \Rightarrow d = 3" /></p>
                  <p>代入 ①：<MathTex tex="a_1 + 6 = 7 \Rightarrow a_1 = 1" /></p>
                  <p className="mt-1 text-green-700">所以 <MathTex tex="a_n = 1 + (n-1) \times 3 = 3n - 2" /></p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <p className="font-bold text-amber-800">💡 特殊技巧：设三项</p>
              <div className="space-y-1.5 mt-1">
                <div className="bg-white rounded-lg p-2 border border-amber-100">
                  <p><strong>三个数成等差数列</strong>，可设为 <MathTex tex="a-d,\; a,\; a+d" /></p>
                  <p className="text-gray-500 mt-0.5">好处：三项之和 = <MathTex tex="3a" />，直接消掉 <MathTex tex="d" /></p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-amber-100">
                  <p><strong>三个数成等比数列</strong>，可设为 <MathTex tex="\dfrac{a}{q},\; a,\; aq" /></p>
                  <p className="text-gray-500 mt-0.5">好处：三项之积 = <MathTex tex="a^3" />，直接消掉 <MathTex tex="q" /></p>
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* 练习 + 自测 */}
      {/* ════════════════════════════════════════════════════════ */}
      <PracticeCard title="练一练" questions={sequenceBasicPractice} />

      <QuizPanel
        title="自测：等差与等比数列过关了吗？"
        questions={sequenceBasicQuiz}
        module="sequence-basic"
      />

      {/* ═══ 打印模式：答案与解析 ═══ */}
      {isPrinting && printOptions.showAnswers && (
        <div className="mt-4">
          <h2 className="text-lg font-bold text-gray-800 mb-2 border-b pb-1">📝 6.1 等差数列与等比数列 — 答案与解析</h2>
          <div className="space-y-2">
            {[...sequenceBasicPractice, ...sequenceBasicQuiz].map((q, i) => (
              <div key={q.id} style={{ breakInside: 'avoid' }} className="text-base text-gray-700">
                <p className="font-bold">{i + 1}. {q.question}</p>
                <p className="ml-4">答案：<span className="font-bold text-blue-700">{q.correctAnswer}</span></p>
                {q.explanationLatex && <div className="ml-4"><MathTex tex={q.explanationLatex} /></div>}
                {q.explanation && !q.explanationLatex && <p className="ml-4 text-gray-600">{q.explanation}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      </LessonLayout>
    </div>
  );
}
