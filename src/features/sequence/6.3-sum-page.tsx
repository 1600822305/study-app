import { Math as MathTex, Collapsible, SpeakButton, PageHeader, LessonLayout, ExportButton, PageBreak } from '@/components/shared';
import { sequenceSumNarrations } from './data/6.3/6.3-sum-narrations';
import { sequenceSumProgressItems } from './data/6.3/6.3-sum-progress';
import { useProgress } from '@/hooks';
import { scrollToId } from '@/lib/scroll';

export function SequenceSumPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('sequence-sum', sequenceSumProgressItems);

  return (
    <div>
      <PageHeader
        stage="第六阶段 · 数列套路"
        title="6.3 数列求和方法"
        narration={sequenceSumNarrations.intro}
        subtitle="错位相减、裂项相消、分组求和——高考数列大题第二问的三板斧"
        tags={[
          { label: '难度 ★★★☆☆', color: 'amber' },
          { label: '高考解答题第二问', color: 'red' },
          { label: '约1.5天', color: 'blue' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="6.3 数列求和方法" />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-3 mb-0">
        <p className="font-bold text-gray-800 mb-2">📋 知识地图</p>
        <div className="text-gray-600 grid grid-cols-2 gap-x-4 gap-y-1">
          <button onClick={() => scrollToId('dislocation')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">一、错位相减法</button>
          <button onClick={() => scrollToId('group')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">三、分组求和法</button>
          <button onClick={() => scrollToId('split')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">二、裂项相消法</button>
          <button onClick={() => scrollToId('summary')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">四、方法选择总结</button>
        </div>
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 1: 错位相减法 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="dislocation" className="mb-3 scroll-mt-4">
        <Collapsible title="一、错位相减法（最高频）" defaultOpen storageKey="seq-sum:dislocation" headerExtra={<SpeakButton text={sequenceSumNarrations.dislocation} />}>
          <div className="space-y-0 text-lg text-gray-800">

            {/* 适用情况 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">什么时候用？</div>
              <div className="px-3 py-2 space-y-0">
                <p>当要求和的通项是<strong>"等差 × 等比"</strong>的形式时：</p>
                <p className="text-center text-xl mt-1"><MathTex tex="c_n = a_n \cdot b_n" /></p>
                <p className="mt-1">其中 <MathTex tex="a_n" /> 是等差数列的通项，<MathTex tex="b_n" /> 是等比数列的通项</p>
                <p className="mt-1">典型形式：<MathTex tex="n \cdot 2^n" />，<MathTex tex="(2n-1) \cdot 3^n" />，<MathTex tex="n \cdot \left(\dfrac{1}{2}\right)^n" /></p>
              </div>
            </div>

            {/* 方法步骤 */}
            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">三步走</div>
              <div className="px-3 py-2 space-y-0">
                <p><strong>第 1 步</strong>：写出 <MathTex tex="S_n" /></p>
                <p><strong>第 2 步</strong>：两边乘以等比部分的公比 <MathTex tex="q" />，得到 <MathTex tex="qS_n" /></p>
                <p><strong>第 3 步</strong>：<MathTex tex="S_n - qS_n" />（或 <MathTex tex="qS_n - S_n" />），中间项变成等比数列，用等比求和公式算</p>
              </div>
            </div>

            {/* 完整例题 */}
            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">完整例题</div>
              <div className="px-3 py-2 space-y-0">
                <p className="font-bold text-blue-700">求 <MathTex tex="T_n = 1 \cdot 2 + 2 \cdot 2^2 + 3 \cdot 2^3 + \cdots + n \cdot 2^n" /></p>

                <p className="mt-1"><strong>第 1 步</strong>：写出 <MathTex tex="T_n" /></p>
                <p><MathTex tex="T_n = 1 \cdot 2 + 2 \cdot 2^2 + 3 \cdot 2^3 + \cdots + n \cdot 2^n" /> …… ①</p>

                <p className="mt-1"><strong>第 2 步</strong>：两边乘 2（等比部分公比）</p>
                <p><MathTex tex="2T_n = 1 \cdot 2^2 + 2 \cdot 2^3 + 3 \cdot 2^4 + \cdots + n \cdot 2^{n+1}" /> …… ②</p>

                <p className="mt-1"><strong>第 3 步</strong>：① - ②</p>
                <p><MathTex tex="T_n - 2T_n = 1 \cdot 2 + 1 \cdot 2^2 + 1 \cdot 2^3 + \cdots + 1 \cdot 2^n - n \cdot 2^{n+1}" /></p>
                <p><MathTex tex="-T_n = (2 + 2^2 + 2^3 + \cdots + 2^n) - n \cdot 2^{n+1}" /></p>

                <p className="mt-1">括号内是等比求和：<MathTex tex="2 + 2^2 + \cdots + 2^n = \dfrac{2(1 - 2^n)}{1 - 2} = 2^{n+1} - 2" /></p>

                <p className="mt-1"><MathTex tex="-T_n = 2^{n+1} - 2 - n \cdot 2^{n+1} = (1-n) \cdot 2^{n+1} - 2" /></p>

                <p className="mt-1"><MathTex tex="T_n = (n-1) \cdot 2^{n+1} + 2" /></p>

                <p className="mt-1">验证：<MathTex tex="n=1" /> 时 <MathTex tex="T_1 = 0 \cdot 4 + 2 = 2 = 1 \times 2 \checkmark" /></p>
              </div>
            </div>

            {/* 再练一题 */}
            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-800 border-b border-purple-300 bg-purple-100 text-lg">再练一题</div>
              <div className="px-3 py-2 space-y-0">
                <p className="font-bold text-purple-700">求 <MathTex tex="T_n = 1 + 2 \cdot \dfrac{1}{2} + 3 \cdot \dfrac{1}{4} + \cdots + n \cdot \left(\dfrac{1}{2}\right)^{n-1}" /></p>

                <p className="mt-1">公比 <MathTex tex="q = \dfrac{1}{2}" />，两边乘 <MathTex tex="\dfrac{1}{2}" />：</p>
                <p><MathTex tex="\frac{1}{2}T_n = 1 \cdot \frac{1}{2} + 2 \cdot \frac{1}{4} + \cdots + (n-1) \cdot \left(\frac{1}{2}\right)^{n-1} + n \cdot \left(\frac{1}{2}\right)^n" /></p>

                <p className="mt-1">相减：<MathTex tex="T_n - \frac{1}{2}T_n = 1 + \frac{1}{2} + \frac{1}{4} + \cdots + \left(\frac{1}{2}\right)^{n-1} - n \cdot \left(\frac{1}{2}\right)^n" /></p>
                <p><MathTex tex="\frac{1}{2}T_n = \dfrac{1 - (\frac{1}{2})^n}{1 - \frac{1}{2}} - \frac{n}{2^n} = 2\left(1 - \frac{1}{2^n}\right) - \frac{n}{2^n} = 2 - \frac{n+2}{2^n}" /></p>
                <p><MathTex tex="T_n = 4 - \dfrac{n+2}{2^{n-1}}" /></p>
              </div>
            </div>

            {/* 易错 */}
            <div className="border border-red-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-red-800 border-b border-red-300 bg-red-100 text-lg">易错提醒</div>
              <div className="px-3 py-2 space-y-0">
                <p>① 相减时<strong>对齐</strong>：①的第 2 项对②的第 1 项，错开一位</p>
                <p>② 最后一项<strong>单独拎出来</strong>，不要漏掉</p>
                <p>③ 中间的等比数列求和别忘了用公式，不要硬加</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 2: 裂项相消法 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="split" className="mb-3 scroll-mt-4">
        <Collapsible title="二、裂项相消法" defaultOpen storageKey="seq-sum:split" headerExtra={<SpeakButton text={sequenceSumNarrations.split} />}>
          <div className="space-y-0 text-lg text-gray-800">

            {/* 适用情况 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">什么时候用？</div>
              <div className="px-3 py-2 space-y-0">
                <p>当通项是<strong>分数</strong>，且分母可以拆成两个相邻因式之积时：</p>
                <p className="text-center text-xl mt-1"><MathTex tex="\frac{1}{n(n+1)},\quad \frac{1}{(2n-1)(2n+1)},\quad \frac{1}{\sqrt{n} + \sqrt{n+1}}" /></p>
              </div>
            </div>

            {/* 核心裂项公式 */}
            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">核心裂项公式（必背）</div>
              <div className="px-3 py-2 space-y-0">
                <div className="grid grid-cols-1 gap-1">
                  <div className="bg-blue-50 rounded-lg p-2 border border-blue-200">
                    <p className="font-bold text-blue-700">公式 1：</p>
                    <p className="text-center"><MathTex tex="\frac{1}{n(n+k)} = \frac{1}{k}\left(\frac{1}{n} - \frac{1}{n+k}\right)" /></p>
                    <p className="mt-1">最常用的特例（<MathTex tex="k=1" />）：<MathTex tex="\dfrac{1}{n(n+1)} = \dfrac{1}{n} - \dfrac{1}{n+1}" /></p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-2 border border-green-200">
                    <p className="font-bold text-green-700">公式 2（根号型）：</p>
                    <p className="text-center"><MathTex tex="\frac{1}{\sqrt{n} + \sqrt{n+1}} = \sqrt{n+1} - \sqrt{n}" /></p>
                    <p className="mt-1">（分子分母同乘 <MathTex tex="\sqrt{n+1} - \sqrt{n}" />，分母有理化）</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 完整例题 */}
            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">完整例题</div>
              <div className="px-3 py-2 space-y-0">
                <p className="font-bold text-blue-700">例 1：求 <MathTex tex="S_n = \dfrac{1}{1 \times 2} + \dfrac{1}{2 \times 3} + \dfrac{1}{3 \times 4} + \cdots + \dfrac{1}{n(n+1)}" /></p>

                <p className="mt-1">裂项：<MathTex tex="\dfrac{1}{n(n+1)} = \dfrac{1}{n} - \dfrac{1}{n+1}" /></p>

                <p className="mt-1"><MathTex tex="S_n = \left(\dfrac{1}{1} - \dfrac{1}{2}\right) + \left(\dfrac{1}{2} - \dfrac{1}{3}\right) + \left(\dfrac{1}{3} - \dfrac{1}{4}\right) + \cdots + \left(\dfrac{1}{n} - \dfrac{1}{n+1}\right)" /></p>

                <p className="mt-1">中间项全部消掉（"望远镜求和"）：</p>
                <p><MathTex tex="S_n = 1 - \dfrac{1}{n+1} = \dfrac{n}{n+1}" /></p>

                <div className="border-t border-gray-200 pt-1 mt-1">
                  <p className="font-bold text-green-700">例 2：求 <MathTex tex="S_n = \dfrac{1}{1 \times 3} + \dfrac{1}{3 \times 5} + \dfrac{1}{5 \times 7} + \cdots + \dfrac{1}{(2n-1)(2n+1)}" /></p>

                  <p className="mt-1">裂项（<MathTex tex="k=2" />）：<MathTex tex="\dfrac{1}{(2n-1)(2n+1)} = \dfrac{1}{2}\left(\dfrac{1}{2n-1} - \dfrac{1}{2n+1}\right)" /></p>

                  <p className="mt-1"><MathTex tex="S_n = \dfrac{1}{2}\left(1 - \dfrac{1}{2n+1}\right) = \dfrac{n}{2n+1}" /></p>
                </div>
              </div>
            </div>

            {/* 消掉过程 */}
            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">为什么叫"相消"？</div>
              <div className="px-3 py-2 space-y-0">
                <p>拆开后，每一项的"后半部分"和下一项的"前半部分"是<strong>相同的</strong>，正负抵消：</p>
                <p className="mt-1"><MathTex tex="\frac{1}{1} \cancel{- \frac{1}{2}} + \cancel{\frac{1}{2}} \cancel{- \frac{1}{3}} + \cancel{\frac{1}{3}} \cancel{- \frac{1}{4}} + \cancel{\frac{1}{4}} - \frac{1}{5}" /></p>
                <p className="mt-1">只剩<strong>第一项的前半</strong>和<strong>最后一项的后半</strong></p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 3: 分组求和法 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="group" className="mb-3 scroll-mt-4">
        <Collapsible title="三、分组求和法" defaultOpen storageKey="seq-sum:group" headerExtra={<SpeakButton text={sequenceSumNarrations.group} />}>
          <div className="space-y-0 text-lg text-gray-800">

            {/* 适用情况 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">什么时候用？</div>
              <div className="px-3 py-2 space-y-0">
                <p>当通项可以<strong>拆成几个独立部分之和</strong>，每部分分别能求和时：</p>
                <p className="text-center text-xl mt-1"><MathTex tex="c_n = f(n) + g(n)" /></p>
                <p className="mt-1">则 <MathTex tex="\sum c_n = \sum f(n) + \sum g(n)" />，分别用各自的方法求和</p>
              </div>
            </div>

            {/* 完整例题 */}
            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">完整例题</div>
              <div className="px-3 py-2 space-y-0">
                <p className="font-bold text-blue-700">例 1：求 <MathTex tex="S_n = \sum_{k=1}^{n} (2k + 3^k)" /></p>

                <p className="mt-1">拆成两组：</p>
                <p><MathTex tex="S_n = \sum_{k=1}^{n} 2k + \sum_{k=1}^{n} 3^k" /></p>

                <p className="mt-1">第一组（等差求和）：<MathTex tex="\sum_{k=1}^{n} 2k = 2 \times \dfrac{n(n+1)}{2} = n(n+1)" /></p>

                <p className="mt-1">第二组（等比求和）：<MathTex tex="\sum_{k=1}^{n} 3^k = \dfrac{3(1-3^n)}{1-3} = \dfrac{3(3^n - 1)}{2}" /></p>

                <p className="mt-1"><MathTex tex="S_n = n(n+1) + \dfrac{3(3^n - 1)}{2}" /></p>

                <div className="border-t border-gray-200 pt-1 mt-1">
                  <p className="font-bold text-green-700">例 2：求 <MathTex tex="S_n = \sum_{k=1}^{n} \left(\dfrac{1}{k(k+1)} + 2^k\right)" /></p>

                  <p className="mt-1">第一组（裂项）：<MathTex tex="\sum \dfrac{1}{k(k+1)} = \dfrac{n}{n+1}" /></p>

                  <p className="mt-1">第二组（等比求和）：<MathTex tex="\sum 2^k = 2^{n+1} - 2" /></p>

                  <p className="mt-1"><MathTex tex="S_n = \dfrac{n}{n+1} + 2^{n+1} - 2" /></p>
                </div>
              </div>
            </div>

            {/* 练习 */}
            <div className="border border-gray-300 rounded overflow-hidden" style={{ breakInside: 'avoid' }}>
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">动手算一算</div>
              <div className="px-3 py-2 grid grid-cols-2 gap-1 text-lg">
                <p>① <MathTex tex="\sum_{k=1}^{n} (3k - 1 + 2^k)" /></p>
                <p>③ <MathTex tex="\sum_{k=1}^{n} k \cdot 3^k" /></p>
                <p>② <MathTex tex="\sum_{k=1}^{n} \dfrac{1}{k(k+2)}" /></p>
                <p>④ <MathTex tex="\sum_{k=1}^{n} \left(\dfrac{1}{k(k+1)} + \dfrac{1}{2^k}\right)" /></p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 4: 方法选择总结 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="summary" className="mb-3 scroll-mt-4">
        <Collapsible title="四、方法选择总结" defaultOpen storageKey="seq-sum:summary">
          <div className="space-y-0 text-lg text-gray-800">

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">看通项形式 → 选方法</div>
              <div className="px-3 py-2 space-y-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-center">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="py-1 text-left pl-2">通项形式</th>
                        <th className="py-1">方法</th>
                        <th className="py-1">典型例子</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-left pl-2">等差 × 等比</td>
                        <td className="py-1"><strong>错位相减</strong></td>
                        <td className="py-1"><MathTex tex="n \cdot 2^n" /></td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-left pl-2">分数，分母可裂</td>
                        <td className="py-1"><strong>裂项相消</strong></td>
                        <td className="py-1"><MathTex tex="\frac{1}{n(n+1)}" /></td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-left pl-2">多部分之和</td>
                        <td className="py-1"><strong>分组求和</strong></td>
                        <td className="py-1"><MathTex tex="2n + 3^n" /></td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-left pl-2">等差数列</td>
                        <td className="py-1">公式</td>
                        <td className="py-1"><MathTex tex="\frac{n(a_1+a_n)}{2}" /></td>
                      </tr>
                      <tr>
                        <td className="py-1 text-left pl-2">等比数列</td>
                        <td className="py-1">公式</td>
                        <td className="py-1"><MathTex tex="\frac{a_1(1-q^n)}{1-q}" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">高考数列大题标准流程</div>
              <div className="px-3 py-2 space-y-0">
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-blue-50 rounded-lg p-2 border border-blue-200 text-center">
                    <p className="font-bold text-blue-700">第一问</p>
                    <p>求通项 <MathTex tex="a_n" /></p>
                    <p className="text-sm mt-1">（6.2 的方法）</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-2 border border-green-200 text-center">
                    <p className="font-bold text-green-700">第二问</p>
                    <p>构造 <MathTex tex="b_n" /> 并求和</p>
                    <p className="text-sm mt-1">（本节的方法）</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-2 border border-purple-200 text-center">
                    <p className="font-bold text-purple-700">得分策略</p>
                    <p>第一问 6-8 分</p>
                    <p>第二问 6-8 分</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-red-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-red-800 border-b border-red-300 bg-red-100 text-lg">高考提醒</div>
              <div className="px-3 py-2 space-y-0">
                <p>错位相减法计算量大，<strong>一定要细心对齐</strong>，建议打草稿</p>
                <p className="mt-1">裂项相消的关键是<strong>记住裂项公式</strong>，消掉过程写清楚</p>
                <p className="mt-1">遇到复杂通项先想能不能<strong>拆成几部分</strong>分别处理</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      </LessonLayout>
    </div>
  );
}
