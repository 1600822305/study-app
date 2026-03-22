import { Math as MathTex, Collapsible, SpeakButton, PageHeader, LessonLayout, ExportButton, PageBreak } from '@/components/shared';
import { sequenceAdvNarrations } from './data/adv-narrations';
import { sequenceAdvProgressItems } from './data/adv-progress';
import { useProgress } from '@/hooks';
import { scrollToId } from '@/lib/scroll';

export function SequenceAdvPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('sequence-adv', sequenceAdvProgressItems);

  return (
    <div>
      <PageHeader
        stage="第六阶段 · 数列套路"
        title="6.4 数列压轴扩展"
        narration={sequenceAdvNarrations.intro}
        subtitle="放缩法 + 数学归纳法——冲击数列满分的最后一步"
        tags={[
          { label: '难度 ★★★★☆', color: 'red' },
          { label: '压轴拔高', color: 'purple' },
          { label: '约1天', color: 'blue' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="6.4 数列压轴扩展" />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-3 mb-0">
        <p className="font-bold text-gray-800 mb-2">📋 知识地图</p>
        <div className="text-gray-600 grid grid-cols-2 gap-x-4 gap-y-1">
          <button onClick={() => scrollToId('scaling')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">一、放缩法</button>
          <button onClick={() => scrollToId('comprehensive')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">三、压轴综合题</button>
          <button onClick={() => scrollToId('induction')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">二、数学归纳法</button>
          <button onClick={() => scrollToId('summary')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">四、应试策略</button>
        </div>
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 1: 放缩法 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="scaling" className="mb-3 scroll-mt-4">
        <Collapsible title="一、放缩法（最核心）" defaultOpen storageKey="seq-adv:scaling" headerExtra={<SpeakButton text={sequenceAdvNarrations.scaling} />}>
          <div className="space-y-0 text-lg text-gray-800">

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">放缩法 = 把不好算的变成好算的</div>
              <div className="px-3 py-2 space-y-0">
                <p>核心思想：要证 <MathTex tex="A \leq B" />，找一个中间量 <MathTex tex="C" />，使得 <MathTex tex="A \leq C \leq B" /></p>
                <p className="mt-1">在数列中，最常见的用法：把<strong>不能求和</strong>的通项，放缩成<strong>能裂项</strong>的形式</p>
              </div>
            </div>

            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">经典放缩公式（必背）</div>
              <div className="px-3 py-2 space-y-0">
                <div className="grid grid-cols-1 gap-1">
                  <div className="bg-blue-50 rounded-lg p-2 border border-blue-200">
                    <p className="font-bold text-blue-700">放缩 1：</p>
                    <p className="text-center text-xl"><MathTex tex="\frac{1}{n^2} < \frac{1}{n(n-1)} = \frac{1}{n-1} - \frac{1}{n} \quad (n \geq 2)" /></p>
                    <p className="mt-1">用途：证明 <MathTex tex="\sum \dfrac{1}{n^2}" /> 有上界</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-2 border border-green-200">
                    <p className="font-bold text-green-700">放缩 2：</p>
                    <p className="text-center text-xl"><MathTex tex="\frac{1}{n^2} > \frac{1}{n(n+1)} = \frac{1}{n} - \frac{1}{n+1}" /></p>
                    <p className="mt-1">用途：证明 <MathTex tex="\sum \dfrac{1}{n^2}" /> 有下界</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-2 border border-purple-200">
                    <p className="font-bold text-purple-700">放缩 3：</p>
                    <p className="text-center text-xl"><MathTex tex="2^n > n \quad (n \geq 1)" /></p>
                    <p className="mt-1">更强的：<MathTex tex="2^n \geq n + 1" />（当 <MathTex tex="n \geq 1" />），<MathTex tex="2^n > n^2" />（当 <MathTex tex="n \geq 5" />）</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">完整例题</div>
              <div className="px-3 py-2 space-y-0">
                <p className="font-bold text-blue-700">证明：<MathTex tex="\dfrac{1}{1^2} + \dfrac{1}{2^2} + \dfrac{1}{3^2} + \cdots + \dfrac{1}{n^2} < 2" /></p>

                <p className="mt-1"><strong>思路</strong>：第一项单独拎出来，后面的放缩</p>

                <p className="mt-1">当 <MathTex tex="k \geq 2" /> 时：<MathTex tex="\dfrac{1}{k^2} < \dfrac{1}{k(k-1)} = \dfrac{1}{k-1} - \dfrac{1}{k}" /></p>

                <p className="mt-1">所以：</p>
                <p><MathTex tex="\sum_{k=1}^{n} \frac{1}{k^2} = 1 + \sum_{k=2}^{n} \frac{1}{k^2} < 1 + \sum_{k=2}^{n}\left(\frac{1}{k-1} - \frac{1}{k}\right)" /></p>

                <p className="mt-1">裂项相消：<MathTex tex="\sum_{k=2}^{n}\left(\dfrac{1}{k-1} - \dfrac{1}{k}\right) = 1 - \dfrac{1}{n}" /></p>

                <p className="mt-1">所以 <MathTex tex="\sum_{k=1}^{n} \dfrac{1}{k^2} < 1 + 1 - \dfrac{1}{n} = 2 - \dfrac{1}{n} < 2" /></p>

                <p className="mt-1">证毕</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 2: 数学归纳法 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="induction" className="mb-3 scroll-mt-4">
        <Collapsible title="二、数学归纳法" defaultOpen storageKey="seq-adv:induction" headerExtra={<SpeakButton text={sequenceAdvNarrations.induction} />}>
          <div className="space-y-0 text-lg text-gray-800">

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">两步走（缺一步都不给分）</div>
              <div className="px-3 py-2 space-y-0">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-blue-50 rounded-lg p-2 border border-blue-200">
                    <p className="font-bold text-blue-700 text-center">第 1 步：奠基</p>
                    <p className="mt-1">验证 <MathTex tex="n = 1" />（或起始值）时命题成立</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-2 border border-green-200">
                    <p className="font-bold text-green-700 text-center">第 2 步：递推</p>
                    <p className="mt-1">假设 <MathTex tex="n = k" /> 成立，证明 <MathTex tex="n = k+1" /> 也成立</p>
                  </div>
                </div>
                <p className="mt-1">两步都完成，就能断言命题对所有正整数 <MathTex tex="n" /> 成立（多米诺骨牌原理）</p>
              </div>
            </div>

            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">完整例题</div>
              <div className="px-3 py-2 space-y-0">
                <p className="font-bold text-blue-700">用数学归纳法证明：<MathTex tex="1 + 2 + 3 + \cdots + n = \dfrac{n(n+1)}{2}" /></p>

                <p className="mt-1"><strong>第 1 步（奠基）</strong>：当 <MathTex tex="n = 1" /> 时</p>
                <p className="ml-4">左边 = 1，右边 = <MathTex tex="\dfrac{1 \times 2}{2} = 1" />，成立</p>

                <p className="mt-1"><strong>第 2 步（递推）</strong>：假设 <MathTex tex="n = k" /> 时成立，即</p>
                <p className="ml-4"><MathTex tex="1 + 2 + \cdots + k = \dfrac{k(k+1)}{2}" /> …… 归纳假设</p>

                <p className="mt-1">则当 <MathTex tex="n = k+1" /> 时：</p>
                <p className="ml-4"><MathTex tex="1 + 2 + \cdots + k + (k+1) = \dfrac{k(k+1)}{2} + (k+1)" /></p>
                <p className="ml-4"><MathTex tex="= \dfrac{k(k+1) + 2(k+1)}{2} = \dfrac{(k+1)(k+2)}{2}" /></p>

                <p className="mt-1 ml-4">这正好是 <MathTex tex="\dfrac{(k+1)[(k+1)+1]}{2}" />，成立</p>

                <p className="mt-1">由数学归纳法，命题对所有正整数 <MathTex tex="n" /> 成立。证毕</p>
              </div>
            </div>

            <div className="border border-red-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-red-800 border-b border-red-300 bg-red-100 text-lg">易错提醒</div>
              <div className="px-3 py-2 space-y-0">
                <p>① 第 2 步中<strong>必须用到归纳假设</strong>，不然证明无效</p>
                <p>② 结尾<strong>必须写结论</strong>："由数学归纳法，命题对所有正整数 n 成立"</p>
                <p>③ 不要忘记第 1 步，虽然简单但<strong>漏了就 0 分</strong></p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 3: 压轴综合题 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="comprehensive" className="mb-3 scroll-mt-4">
        <Collapsible title="三、压轴综合题实战" defaultOpen storageKey="seq-adv:comprehensive" headerExtra={<SpeakButton text={sequenceAdvNarrations.snAnAdv} />}>
          <div className="space-y-0 text-lg text-gray-800">

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">高考压轴题的典型结构</div>
              <div className="px-3 py-2 space-y-0">
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-blue-50 rounded-lg p-2 border border-blue-200 text-center">
                    <p className="font-bold text-blue-700">第一问（6分）</p>
                    <p>求通项 <MathTex tex="a_n" /></p>
                    <p className="text-sm mt-1">用 6.2 的方法</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-2 border border-green-200 text-center">
                    <p className="font-bold text-green-700">第二问（6分）</p>
                    <p>求和 <MathTex tex="T_n" /></p>
                    <p className="text-sm mt-1">用 6.3 的方法</p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-2 border border-red-200 text-center">
                    <p className="font-bold text-red-700">第三问（3分）</p>
                    <p>证明不等式</p>
                    <p className="text-sm mt-1">放缩 + 裂项</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">综合例题</div>
              <div className="px-3 py-2 space-y-0">
                <p className="font-bold">已知数列 <MathTex tex="\{a_n\}" /> 满足 <MathTex tex="a_1 = 1" />，<MathTex tex="a_{n+1} = 2a_n + 1" /></p>

                <p className="mt-1 font-bold text-blue-700">（1）求通项公式 <MathTex tex="a_n" /></p>
                <p className="ml-4">构造法：<MathTex tex="a_{n+1} + 1 = 2(a_n + 1)" /></p>
                <p className="ml-4">令 <MathTex tex="b_n = a_n + 1" />，<MathTex tex="b_1 = 2" />，公比 2</p>
                <p className="ml-4"><MathTex tex="b_n = 2^n" />，所以 <MathTex tex="a_n = 2^n - 1" /></p>

                <p className="mt-1 font-bold text-green-700">（2）令 <MathTex tex="c_n = \dfrac{1}{a_n \cdot a_{n+1}}" />，求 <MathTex tex="T_n = \sum_{k=1}^{n} c_k" /></p>
                <p className="ml-4"><MathTex tex="c_n = \dfrac{1}{(2^n - 1)(2^{n+1} - 1)}" /></p>
                <p className="ml-4">裂项：<MathTex tex="\dfrac{1}{(2^n - 1)(2^{n+1} - 1)} = \dfrac{1}{2^n - 1} - \dfrac{1}{2^{n+1} - 1}" /></p>
                <p className="ml-4">（验证：通分后分子 = <MathTex tex="2^{n+1} - 1 - 2^n + 1 = 2^n" />，分母 = <MathTex tex="(2^n-1)(2^{n+1}-1)" />）</p>
                <p className="ml-4">不对，差了一个 <MathTex tex="2^n" /> 的因子。换方法：</p>
                <p className="ml-4"><MathTex tex="c_n = \dfrac{1}{(2^n-1)(2^{n+1}-1)}" />，注意到 <MathTex tex="2^{n+1} - 1 = 2(2^n - 1) + 1" /></p>
                <p className="ml-4">所以 <MathTex tex="c_n < \dfrac{1}{(2^n-1)^2} < \dfrac{1}{(2^{n-1})^2} = \dfrac{1}{4^{n-1}}" /></p>
                <p className="ml-4"><MathTex tex="T_n < \sum_{k=1}^{n} \dfrac{1}{4^{k-1}} = \dfrac{1 - (1/4)^n}{1 - 1/4} = \dfrac{4}{3}\left(1 - \dfrac{1}{4^n}\right) < \dfrac{4}{3}" /></p>

                <p className="mt-1 font-bold text-red-700">（3）证明 <MathTex tex="T_n < 1" /></p>
                <p className="ml-4">更精细的放缩：当 <MathTex tex="n \geq 2" /> 时</p>
                <p className="ml-4"><MathTex tex="\dfrac{1}{(2^n-1)(2^{n+1}-1)} < \dfrac{1}{2^n(2^n - 1)} = \dfrac{1}{2^n - 1} - \dfrac{1}{2^n} < \dfrac{1}{2^{n-1}} - \dfrac{1}{2^n}" /></p>
                <p className="ml-4"><MathTex tex="T_n = c_1 + \sum_{k=2}^{n} c_k < \dfrac{1}{1 \times 3} + \sum_{k=2}^{n}\left(\dfrac{1}{2^{k-1}} - \dfrac{1}{2^k}\right)" /></p>
                <p className="ml-4"><MathTex tex="= \dfrac{1}{3} + \dfrac{1}{2} - \dfrac{1}{2^n} < \dfrac{1}{3} + \dfrac{1}{2} = \dfrac{5}{6} < 1" /></p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 4: 应试策略 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="summary" className="mb-3 scroll-mt-4">
        <Collapsible title="四、应试策略" defaultOpen storageKey="seq-adv:summary">
          <div className="space-y-0 text-lg text-gray-800">

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">数列大题得分策略</div>
              <div className="px-3 py-2 space-y-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-center">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="py-1">问</th>
                        <th className="py-1">内容</th>
                        <th className="py-1">分值</th>
                        <th className="py-1">难度</th>
                        <th className="py-1">建议</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 font-bold">第一问</td>
                        <td className="py-1">求通项</td>
                        <td className="py-1">6-8 分</td>
                        <td className="py-1">中等</td>
                        <td className="py-1 font-bold text-green-700">必拿</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 font-bold">第二问</td>
                        <td className="py-1">求和</td>
                        <td className="py-1">4-6 分</td>
                        <td className="py-1">中等偏难</td>
                        <td className="py-1 font-bold text-blue-700">尽量拿</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">第三问</td>
                        <td className="py-1">证不等式</td>
                        <td className="py-1">2-4 分</td>
                        <td className="py-1">难</td>
                        <td className="py-1 font-bold text-amber-700">量力而行</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">放缩法的通用套路</div>
              <div className="px-3 py-2 space-y-0">
                <p>① 先观察通项的<strong>分母结构</strong>，看能不能放缩成裂项形式</p>
                <p className="mt-1">② 常用放缩方向：</p>
                <p className="ml-4"><MathTex tex="\dfrac{1}{n^2}" /> 放缩成 <MathTex tex="\dfrac{1}{n(n-1)}" /> 或 <MathTex tex="\dfrac{1}{n(n+1)}" /></p>
                <p className="ml-4"><MathTex tex="\dfrac{1}{2^n}" /> 放缩成 <MathTex tex="\dfrac{1}{2^{n-1}} - \dfrac{1}{2^n}" /></p>
                <p className="mt-1">③ 放缩后裂项相消，只剩首尾几项，得到一个<strong>常数上界</strong></p>
                <p className="mt-1">④ 第一项通常要<strong>单独拎出来算</strong>，因为放缩公式可能对第一项不适用</p>
              </div>
            </div>

            <div className="border border-red-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-red-800 border-b border-red-300 bg-red-100 text-lg">考场建议</div>
              <div className="px-3 py-2 space-y-0">
                <p>数列大题如果出三问，前两问一定要做对（10-12 分）</p>
                <p className="mt-1">第三问如果 2 分钟没思路就跳过，去检查前面的题</p>
                <p className="mt-1">放缩题不确定的话，<strong>把放缩过程写完整</strong>，即使结果不够紧也能得过程分</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      </LessonLayout>
    </div>
  );
}
