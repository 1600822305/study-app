import { Math as MathTex, Collapsible, SpeakButton, PageHeader, LessonLayout, ExportButton, PageBreak } from '@/components/shared';
import { sequenceRecurNarrations } from './data/6.2/6.2-recur-narrations';
import { sequenceRecurProgressItems } from './data/6.2/6.2-recur-progress';
import { useProgress } from '@/hooks';
import { scrollToId } from '@/lib/scroll';

export function SequenceRecurPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('sequence-recur', sequenceRecurProgressItems);

  return (
    <div>
      <PageHeader
        stage="第六阶段 · 数列套路"
        title="6.2 递推数列求通项"
        narration={sequenceRecurNarrations.intro}
        subtitle="高考数列大题第一步——从递推公式或 Sₙ 推出通项 aₙ"
        tags={[
          { label: '难度 ★★★☆☆', color: 'amber' },
          { label: '高考解答题必考', color: 'red' },
          { label: '约1.5天', color: 'blue' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="6.2 递推数列求通项" />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-3 mb-0">
        <p className="font-bold text-gray-800 mb-2">📋 知识地图</p>
        <div className="text-gray-600 grid grid-cols-2 gap-x-4 gap-y-1">
          <button onClick={() => scrollToId('sn-an')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">一、Sₙ 与 aₙ 的关系</button>
          <button onClick={() => scrollToId('construct')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">三、构造法（最高频）</button>
          <button onClick={() => scrollToId('accumulate')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">二、累加法与累乘法</button>
          <button onClick={() => scrollToId('summary')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">四、方法选择总结</button>
        </div>
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 1: Sₙ 与 aₙ 的关系 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="sn-an" className="mb-3 scroll-mt-4">
        <Collapsible title="一、Sₙ 与 aₙ 的关系" defaultOpen storageKey="seq-recur:sn-an" headerExtra={<SpeakButton text={sequenceRecurNarrations.snAn} />}>
          <div className="space-y-0 text-lg text-gray-800">

            {/* 核心公式 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">核心公式（必背）</div>
              <div className="px-3 py-2 space-y-0">
                <p className="text-center text-xl"><MathTex tex="a_n = \begin{cases} S_1 & n = 1 \\[4pt] S_n - S_{n-1} & n \geq 2 \end{cases}" /></p>
                <p className="mt-1">意思：第 <MathTex tex="n" /> 项 = 前 <MathTex tex="n" /> 项的和 - 前 <MathTex tex="n-1" /> 项的和（把前面的都减掉，剩下第 <MathTex tex="n" /> 项）</p>
              </div>
            </div>

            {/* 为什么分两段 */}
            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">为什么要分 n=1 和 n≥2？</div>
              <div className="px-3 py-2 space-y-0">
                <p>当 <MathTex tex="n = 1" /> 时，<MathTex tex="S_{n-1} = S_0" />，而 <MathTex tex="S_0" /> 没有定义（前 0 项和是什么？）</p>
                <p className="mt-1">所以 <MathTex tex="n = 1" /> 只能用 <MathTex tex="a_1 = S_1" /> 直接算</p>
                <p className="mt-1 font-bold text-red-700">必须单独验证 <MathTex tex="n = 1" /> 是否满足通项公式！不验证直接扣分</p>
              </div>
            </div>

            {/* 例1 */}
            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">实战例题</div>
              <div className="px-3 py-2 space-y-0">
                <p className="font-bold text-blue-700">例 1：已知 <MathTex tex="S_n = 2n^2 + 3n" />，求 <MathTex tex="a_n" /></p>

                <p className="mt-1"><strong>第 1 步</strong>：当 <MathTex tex="n \geq 2" /> 时</p>
                <p className="ml-4"><MathTex tex="a_n = S_n - S_{n-1} = (2n^2 + 3n) - [2(n-1)^2 + 3(n-1)]" /></p>
                <p className="ml-4"><MathTex tex="= 2n^2 + 3n - 2n^2 + 4n - 2 - 3n + 3 = 4n + 1" /></p>

                <p className="mt-1"><strong>第 2 步</strong>：验证 <MathTex tex="n = 1" /></p>
                <p className="ml-4"><MathTex tex="a_1 = S_1 = 2 \times 1 + 3 \times 1 = 5" /></p>
                <p className="ml-4">把 <MathTex tex="n = 1" /> 代入 <MathTex tex="4n + 1 = 5" />，符合！</p>

                <p className="mt-1"><strong>结论</strong>：<MathTex tex="a_n = 4n + 1" /></p>

                <div className="border-t border-gray-200 pt-1 mt-1">
                  <p className="font-bold text-green-700">例 2：已知 <MathTex tex="S_n = 2^n - 1" />，求 <MathTex tex="a_n" /></p>

                  <p className="mt-1">当 <MathTex tex="n \geq 2" /> 时：<MathTex tex="a_n = 2^n - 1 - (2^{n-1} - 1) = 2^n - 2^{n-1} = 2^{n-1}" /></p>
                  <p>验证 <MathTex tex="n = 1" />：<MathTex tex="a_1 = S_1 = 2^1 - 1 = 1" />，代入 <MathTex tex="2^{1-1} = 2^0 = 1" />，符合！</p>
                  <p><strong>结论</strong>：<MathTex tex="a_n = 2^{n-1}" /></p>
                </div>

                <div className="border-t border-gray-200 pt-1 mt-1">
                  <p className="font-bold text-purple-700">例 3（不符合的情况）：已知 <MathTex tex="S_n = 2^n" />，求 <MathTex tex="a_n" /></p>

                  <p className="mt-1">当 <MathTex tex="n \geq 2" /> 时：<MathTex tex="a_n = 2^n - 2^{n-1} = 2^{n-1}" /></p>
                  <p>验证 <MathTex tex="n = 1" />：<MathTex tex="a_1 = S_1 = 2" />，但 <MathTex tex="2^{1-1} = 1 \neq 2" />，<strong className="text-red-700">不符合！</strong></p>
                  <p><strong>结论</strong>（分段写）：<MathTex tex="a_n = \begin{cases} 2 & n = 1 \\ 2^{n-1} & n \geq 2 \end{cases}" /></p>
                </div>
              </div>
            </div>

            {/* 练习 */}
            <div className="border border-gray-300 rounded overflow-hidden" style={{ breakInside: 'avoid' }}>
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">动手算一算</div>
              <div className="px-3 py-2 grid grid-cols-2 gap-1 text-lg">
                <p>① <MathTex tex="S_n = n^2" />，求 <MathTex tex="a_n" /></p>
                <p>③ <MathTex tex="S_n = 3^n + 1" />，求 <MathTex tex="a_n" /></p>
                <p>② <MathTex tex="S_n = 3n^2 - n" />，求 <MathTex tex="a_n" /></p>
                <p>④ <MathTex tex="S_n = 2^{n+1} - 2" />，求 <MathTex tex="a_n" /></p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 2: 累加法与累乘法 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="accumulate" className="mb-3 scroll-mt-4">
        <Collapsible title="二、累加法与累乘法" defaultOpen storageKey="seq-recur:accumulate" headerExtra={<SpeakButton text={sequenceRecurNarrations.accumulate} />}>
          <div className="space-y-0 text-lg text-gray-800">

            {/* 累加法 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">累加法：适用于 aₙ₊₁ - aₙ = f(n)</div>
              <div className="px-3 py-2 space-y-0">
                <p>当递推公式是<strong>"下一项 - 这一项 = 关于 n 的式子"</strong>时，用累加法</p>
                <p className="mt-1">核心思路：把所有相邻项的差写出来，全部加起来</p>
                <div className="bg-blue-50 rounded-lg p-2 border border-blue-200 mt-1">
                  <p><MathTex tex="a_2 - a_1 = f(1)" /></p>
                  <p><MathTex tex="a_3 - a_2 = f(2)" /></p>
                  <p><MathTex tex="a_4 - a_3 = f(3)" /></p>
                  <p className="text-center">⋮</p>
                  <p><MathTex tex="a_n - a_{n-1} = f(n-1)" /></p>
                  <p className="border-t border-blue-300 mt-1 pt-1">全部相加（左边消掉中间项）：<MathTex tex="a_n - a_1 = \sum_{k=1}^{n-1} f(k)" /></p>
                </div>
              </div>
            </div>

            {/* 累加法例题 */}
            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">累加法例题</div>
              <div className="px-3 py-2 space-y-0">
                <p className="font-bold text-blue-700">已知 <MathTex tex="a_{n+1} = a_n + 2n,\; a_1 = 1" />，求 <MathTex tex="a_n" /></p>
                <p className="mt-1">写出每一步的差：</p>
                <p><MathTex tex="a_2 - a_1 = 2 \times 1 = 2" /></p>
                <p><MathTex tex="a_3 - a_2 = 2 \times 2 = 4" /></p>
                <p className="text-center">⋮</p>
                <p><MathTex tex="a_n - a_{n-1} = 2(n-1)" /></p>
                <p className="mt-1">全部加起来：<MathTex tex="a_n - a_1 = 2(1 + 2 + \cdots + (n-1)) = 2 \times \dfrac{(n-1)n}{2} = n(n-1)" /></p>
                <p className="mt-1">所以 <MathTex tex="a_n = a_1 + n(n-1) = 1 + n^2 - n = n^2 - n + 1" /></p>
              </div>
            </div>

            {/* 累乘法 */}
            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">累乘法：适用于 aₙ₊₁ / aₙ = g(n)</div>
              <div className="px-3 py-2 space-y-0">
                <p>当递推公式是<strong>"下一项 / 这一项 = 关于 n 的式子"</strong>时，用累乘法</p>
                <p className="mt-1">核心思路：把所有相邻项的比写出来，全部乘起来</p>
                <div className="bg-green-50 rounded-lg p-2 border border-green-200 mt-1">
                  <p><MathTex tex="\frac{a_2}{a_1} \times \frac{a_3}{a_2} \times \frac{a_4}{a_3} \times \cdots \times \frac{a_n}{a_{n-1}} = g(1) \times g(2) \times \cdots \times g(n-1)" /></p>
                  <p className="mt-1">左边消掉中间项：<MathTex tex="\frac{a_n}{a_1} = \prod_{k=1}^{n-1} g(k)" /></p>
                </div>
              </div>
            </div>

            {/* 累乘法例题 */}
            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">累乘法例题</div>
              <div className="px-3 py-2 space-y-0">
                <p className="font-bold text-green-700">已知 <MathTex tex="a_{n+1} = \dfrac{n+1}{n} \cdot a_n,\; a_1 = 1" />，求 <MathTex tex="a_n" /></p>
                <p className="mt-1">写出每一步的比：</p>
                <p><MathTex tex="\frac{a_2}{a_1} = \frac{2}{1},\quad \frac{a_3}{a_2} = \frac{3}{2},\quad \frac{a_4}{a_3} = \frac{4}{3},\quad \cdots,\quad \frac{a_n}{a_{n-1}} = \frac{n}{n-1}" /></p>
                <p className="mt-1">全部乘起来：<MathTex tex="\frac{a_n}{a_1} = \frac{2}{1} \times \frac{3}{2} \times \frac{4}{3} \times \cdots \times \frac{n}{n-1} = n" />（上下消掉）</p>
                <p className="mt-1">所以 <MathTex tex="a_n = n \times a_1 = n" /></p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 3: 构造法 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="construct" className="mb-3 scroll-mt-4">
        <Collapsible title="三、构造法（高考最高频）" defaultOpen storageKey="seq-recur:construct" headerExtra={<SpeakButton text={sequenceRecurNarrations.construct} />}>
          <div className="space-y-0 text-lg text-gray-800">

            {/* 适用情况 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">适用情况：aₙ₊₁ = paₙ + q</div>
              <div className="px-3 py-2 space-y-0">
                <p>这是高考最爱考的递推类型！形如：</p>
                <p className="text-center text-xl mt-1"><MathTex tex="a_{n+1} = p \cdot a_n + q \quad (p \neq 0,\; p \neq 1)" /></p>
                <p className="mt-1">直接算很难，但可以<strong>构造一个新数列</strong>把它变成等比数列</p>
              </div>
            </div>

            {/* 方法步骤 */}
            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">三步构造法</div>
              <div className="px-3 py-2 space-y-0">
                <p><strong>第 1 步</strong>：两边加一个常数 <MathTex tex="c" />，使右边能提公因式</p>
                <p className="ml-4"><MathTex tex="a_{n+1} + c = p(a_n + c)" /></p>
                <p className="ml-4">展开：<MathTex tex="a_{n+1} + c = pa_n + pc" /></p>
                <p className="ml-4">对比原式 <MathTex tex="a_{n+1} = pa_n + q" />，得 <MathTex tex="c = pc + q - c" />，解出 <MathTex tex="c = \dfrac{q}{p-1}" /></p>

                <p className="mt-1"><strong>第 2 步</strong>：令 <MathTex tex="b_n = a_n + c" />，则 <MathTex tex="b_{n+1} = p \cdot b_n" />（等比数列！）</p>

                <p className="mt-1"><strong>第 3 步</strong>：用等比通项公式写出 <MathTex tex="b_n" />，再减去 <MathTex tex="c" /> 得到 <MathTex tex="a_n" /></p>
              </div>
            </div>

            {/* 完整例题 */}
            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">完整例题</div>
              <div className="px-3 py-2 space-y-0">
                <p className="font-bold text-blue-700">已知 <MathTex tex="a_{n+1} = 2a_n + 3,\; a_1 = 1" />，求 <MathTex tex="a_n" /></p>

                <p className="mt-1"><strong>第 1 步</strong>：这里 <MathTex tex="p = 2,\; q = 3" />，算常数 <MathTex tex="c = \dfrac{3}{2-1} = 3" /></p>
                <p>两边加 3：<MathTex tex="a_{n+1} + 3 = 2a_n + 3 + 3 = 2a_n + 6 = 2(a_n + 3)" /></p>

                <p className="mt-1"><strong>第 2 步</strong>：令 <MathTex tex="b_n = a_n + 3" />，则 <MathTex tex="b_{n+1} = 2b_n" />，是公比为 2 的等比数列</p>
                <p><MathTex tex="b_1 = a_1 + 3 = 1 + 3 = 4" /></p>

                <p className="mt-1"><strong>第 3 步</strong>：<MathTex tex="b_n = 4 \times 2^{n-1} = 2^{n+1}" /></p>
                <p><MathTex tex="a_n = b_n - 3 = 2^{n+1} - 3" /></p>

                <p className="mt-1">验证：<MathTex tex="a_1 = 2^2 - 3 = 1 \checkmark" />，<MathTex tex="a_2 = 2 \times 1 + 3 = 5 = 2^3 - 3 \checkmark" /></p>
              </div>
            </div>

            {/* 再来一题 */}
            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-800 border-b border-purple-300 bg-purple-100 text-lg">再练一题</div>
              <div className="px-3 py-2 space-y-0">
                <p className="font-bold text-purple-700">已知 <MathTex tex="a_{n+1} = 3a_n - 4,\; a_1 = 3" />，求 <MathTex tex="a_n" /></p>

                <p className="mt-1"><MathTex tex="p = 3,\; q = -4" />，<MathTex tex="c = \dfrac{-4}{3-1} = -2" /></p>
                <p>两边加 <MathTex tex="(-2)" />：<MathTex tex="a_{n+1} - 2 = 3(a_n - 2)" /></p>
                <p>令 <MathTex tex="b_n = a_n - 2" />，<MathTex tex="b_1 = 3 - 2 = 1" />，公比 3</p>
                <p><MathTex tex="b_n = 1 \times 3^{n-1} = 3^{n-1}" /></p>
                <p><MathTex tex="a_n = 3^{n-1} + 2" /></p>
              </div>
            </div>

            {/* 练习 */}
            <div className="border border-gray-300 rounded overflow-hidden" style={{ breakInside: 'avoid' }}>
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">动手算一算</div>
              <div className="px-3 py-2 grid grid-cols-2 gap-1 text-lg">
                <p>① <MathTex tex="a_{n+1} = 2a_n + 1,\; a_1 = 2" /></p>
                <p>③ <MathTex tex="a_{n+1} = 3a_n + 2,\; a_1 = 1" /></p>
                <p>② <MathTex tex="a_{n+1} = 2a_n - 1,\; a_1 = 3" /></p>
                <p>④ <MathTex tex="a_{n+1} = 4a_n - 6,\; a_1 = 3" /></p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 4: 方法选择总结 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="summary" className="mb-3 scroll-mt-4">
        <Collapsible title="四、方法选择总结" defaultOpen storageKey="seq-recur:summary">
          <div className="space-y-0 text-lg text-gray-800">

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">看到什么条件 → 用什么方法</div>
              <div className="px-3 py-2 space-y-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-center">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="py-1 text-left pl-2">题目给的条件</th>
                        <th className="py-1">用什么方法</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-left pl-2">给了 <MathTex tex="S_n" /> 的表达式</td>
                        <td className="py-1"><strong><MathTex tex="a_n = S_n - S_{n-1}" /></strong>（验 n=1）</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-left pl-2"><MathTex tex="a_{n+1} - a_n = f(n)" /></td>
                        <td className="py-1"><strong>累加法</strong></td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-left pl-2"><MathTex tex="\dfrac{a_{n+1}}{a_n} = g(n)" /></td>
                        <td className="py-1"><strong>累乘法</strong></td>
                      </tr>
                      <tr>
                        <td className="py-1 text-left pl-2"><MathTex tex="a_{n+1} = pa_n + q" /></td>
                        <td className="py-1"><strong>构造法</strong>（加 <MathTex tex="\dfrac{q}{p-1}" /> 变等比）</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="border border-red-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-red-800 border-b border-red-300 bg-red-100 text-lg">高考提醒</div>
              <div className="px-3 py-2 space-y-0">
                <p>数列解答题通常第一问就是"求通项公式"</p>
                <p className="mt-1">最常考的是<strong>构造法</strong>和<strong> Sₙ 与 aₙ 的关系</strong>，这两个必须熟练</p>
                <p className="mt-1">求出通项后，第二问一般是"求和"（下一节 6.3 学）</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      </LessonLayout>
    </div>
  );
}
