import { Math as MathTex, Collapsible, SpeakButton, PageHeader, LessonLayout, ExportButton, PageBreak } from '@/components/shared';
import { sequencePrereqNarrations } from './data/prereq-narrations';
import { sequencePrereqProgressItems } from './data/prereq-progress';
import { useProgress } from '@/hooks';
import { scrollToId } from '@/lib/scroll';

export function SequencePrereqPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('sequence-prereq', sequencePrereqProgressItems);

  return (
    <div>
      <PageHeader
        stage="第六阶段 · 数列套路"
        variant="prereq"
        title="6.0 数列前置知识"
        narration={sequencePrereqNarrations.intro}
        subtitle="基础运算复习、数列概念、通项公式、递推公式、求和符号——后面等差等比的地基"
        tags={[
          { label: '难度 ★☆☆☆☆', color: 'green' },
          { label: '前置知识', color: 'purple' },
          { label: '约1小时', color: 'blue' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="6.0 数列前置知识" />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-3 mb-0">
        <p className="font-bold text-gray-800 mb-2">📋 知识地图</p>
        <div className="text-gray-600 grid grid-cols-2 gap-1">
          <button onClick={() => scrollToId('seq-ops')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">一、基础运算复习</button>
          <button onClick={() => scrollToId('seq-what')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">二、什么是数列</button>
          <button onClick={() => scrollToId('seq-general')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">三、通项公式——数列的"万能钥匙"</button>
          <button onClick={() => scrollToId('seq-recursion')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">四、递推公式——"下一项怎么来的"</button>
          <button onClick={() => scrollToId('seq-sigma')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">五、求和符号 Σ</button>
        </div>
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 1: 基础运算复习 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="seq-ops" className="mb-6 scroll-mt-4">
        <Collapsible title="一、基础运算复习" defaultOpen storageKey="seq-prereq:ops" headerExtra={<SpeakButton text={sequencePrereqNarrations.basicOps} />}>
          <div className="space-y-0 text-lg text-gray-800">

            {/* 通分 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-blue-300 bg-blue-100 text-lg">通分——让分母变成一样的</div>
              <div className="px-3 py-2 space-y-1">
                <p>通分就是把不同分母的分数，变成同一个分母，方便加减</p>

                <div className="border-t border-gray-200 pt-1">
                  <p className="font-bold text-blue-700">怎么找最小公分母？</p>
                  <p className="mt-1"><strong>数字的情况</strong>：找两个分母的最小公倍数。比如分母是 2 和 3，能同时被 2 和 3 整除的最小数是 6</p>
                  <p className="mt-1"><strong>带字母的情况</strong>：两个分母直接乘起来就行。比如分母是 <MathTex tex="n" /> 和 <MathTex tex="n+1" />，最小公分母就是 <MathTex tex="n(n+1)" /></p>
                  <p className="mt-1">找到公分母后，分子分母同时乘以相同的数，让分母变成公分母</p>
                </div>

                <div className="border-t border-gray-200 pt-1">
                  <p className="font-bold text-blue-700">例 1：数字通分</p>
                  <p className="text-center text-xl mt-1"><MathTex tex="\frac{1}{2} + \frac{1}{3}" /></p>
                  <p className="mt-1">分母是 2 和 3，最小公分母是 6</p>
                  <p className="text-center text-xl mt-1"><MathTex tex="= \frac{3}{6} + \frac{2}{6} = \frac{5}{6}" /></p>
                </div>

                <div className="border-t border-gray-200 pt-1">
                  <p className="font-bold text-blue-700">例 2：带字母的通分（数列里最常见，一步一步来）</p>
                  <p className="text-center text-xl mt-1"><MathTex tex="\frac{1}{n} - \frac{1}{n+1}" /></p>

                  <p className="mt-2"><strong>第 1 步：找公分母</strong></p>
                  <p className="ml-4">两个分母是 <MathTex tex="n" /> 和 <MathTex tex="n+1" />，它们没有公因子，直接乘起来</p>
                  <p className="ml-4">公分母 = <MathTex tex="n \times (n+1) = n(n+1)" /></p>

                  <p className="mt-2"><strong>第 2 步：把第一个分数的分母变成公分母</strong></p>
                  <p className="ml-4"><MathTex tex="\frac{1}{n}" /> 的分母是 <MathTex tex="n" />，要变成 <MathTex tex="n(n+1)" />，分母乘了 <MathTex tex="(n+1)" /></p>
                  <p className="ml-4">分子也要乘 <MathTex tex="(n+1)" />：<MathTex tex="\frac{1}{n} = \frac{1 \times (n+1)}{n \times (n+1)} = \frac{n+1}{n(n+1)}" /></p>

                  <p className="mt-2"><strong>第 3 步：把第二个分数的分母也变成公分母</strong></p>
                  <p className="ml-4"><MathTex tex="\frac{1}{n+1}" /> 的分母是 <MathTex tex="(n+1)" />，要变成 <MathTex tex="n(n+1)" />，分母乘了 <MathTex tex="n" /></p>
                  <p className="ml-4">分子也要乘 <MathTex tex="n" />：<MathTex tex="\frac{1}{n+1} = \frac{1 \times n}{(n+1) \times n} = \frac{n}{n(n+1)}" /></p>

                  <p className="mt-2"><strong>第 4 步：分母一样了，分子直接减</strong></p>
                  <p className="text-center text-xl mt-1"><MathTex tex="\frac{n+1}{n(n+1)} - \frac{n}{n(n+1)} = \frac{(n+1) - n}{n(n+1)} = \frac{1}{n(n+1)}" /></p>

                  <p className="mt-2">也就是说 <MathTex tex="\frac{1}{n} - \frac{1}{n+1}" /> 通分后就是 <MathTex tex="\frac{1}{n(n+1)}" />，反过来也成立。后面学数列求和时会用到这个技巧</p>
                </div>
              </div>
            </div>

            {/* 通分小练习 */}
            <div className="border border-gray-300 rounded overflow-hidden" style={{ breakInside: 'avoid' }}>
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">动手算一算</div>
              <div className="px-3 py-2 grid grid-cols-2 gap-1 text-lg">
                <p>① <MathTex tex="\frac{1}{3} - \frac{1}{4} =" /></p>
                <p>④ <MathTex tex="\frac{1}{n+1} - \frac{1}{n+2} =" /></p>
                <p>② <MathTex tex="\frac{1}{n} - \frac{1}{n+3} =" /></p>
                <p>⑤ <MathTex tex="\frac{1}{2} + \frac{1}{5} =" /></p>
                <p>③ <MathTex tex="\frac{2}{5} + \frac{1}{3} =" /></p>
                <p>⑥ <MathTex tex="\frac{3}{n} - \frac{1}{n+1} =" /></p>
              </div>
            </div>

            {/* 提公因式 */}
            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">提公因式——把相同的部分提到外面</div>
              <div className="px-3 py-2 space-y-0">
                <p>如果几个项都有一个共同的因子，就把它提出来，括号里放剩下的部分</p>
                <div className="border-t border-gray-200 pt-1 mt-1">
                  <p className="font-bold text-green-700">例 1：数字提公因式</p>
                  <p className="text-center text-xl"><MathTex tex="6a + 6b" /></p>
                  <p><strong>第 1 步</strong>：看每一项，找相同的部分。第一项 <MathTex tex="6a" /> 有个 6，第二项 <MathTex tex="6b" /> 也有个 6</p>
                  <p><strong>第 2 步</strong>：把 6 写到外面，括号里写每项去掉 6 后剩下的。<MathTex tex="6a" /> 去掉 6 剩 <MathTex tex="a" />，<MathTex tex="6b" /> 去掉 6 剩 <MathTex tex="b" /></p>
                  <p className="text-center text-xl"><MathTex tex="6a + 6b = 6(a + b)" /></p>
                </div>

                <div className="border-t border-gray-200 pt-1">
                  <p className="font-bold text-green-700">例 2：次方里提公因式（数列最常用）</p>
                  <div className="grid grid-cols-2 gap-2 mt-1">
                    <div className="bg-green-50 rounded-lg p-1.5 border border-green-200">
                      <p className="text-center text-xl"><MathTex tex="q^3 + q^4 + q^5" /></p>
                      <p><strong>第 1 步</strong>：底数都是 <MathTex tex="q" />，次方是 3、4、5，最小的是 3</p>
                      <p><strong>第 2 步</strong>：提出 <MathTex tex="q^3" />，每项次方减 3</p>
                      <p className="ml-4"><MathTex tex="q^3" /> 剩 <MathTex tex="q^0 = 1" /></p>
                      <p className="ml-4"><MathTex tex="q^4" /> 剩 <MathTex tex="q^1 = q" /></p>
                      <p className="ml-4"><MathTex tex="q^5" /> 剩 <MathTex tex="q^2" /></p>
                      <p className="text-center text-xl"><MathTex tex="= q^3(1 + q + q^2)" /></p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-1.5 border border-blue-200">
                      <p className="text-center text-xl"><MathTex tex="2^n - 2^{n+1}" /></p>
                      <p><strong>第 1 步</strong>：底数都是 2，次方是 <MathTex tex="n" /> 和 <MathTex tex="n+1" />，最小的是 <MathTex tex="n" /></p>
                      <p><strong>第 2 步</strong>：提出 <MathTex tex="2^n" />，每项次方减 <MathTex tex="n" /></p>
                      <p className="ml-4"><MathTex tex="2^n" /> 剩 <MathTex tex="2^0 = 1" /></p>
                      <p className="ml-4"><MathTex tex="2^{n+1}" /> 剩 <MathTex tex="2^1 = 2" /></p>
                      <p className="text-center text-xl"><MathTex tex="= 2^n(1 - 2) = -2^n" /></p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* 指数运算 */}
            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">指数运算速查</div>
              <div className="px-3 py-2 space-y-1">
                <p>等比数列的通项公式 <MathTex tex="a_n = a_1 \cdot q^{n-1}" /> 离不开指数运算</p>

                <div className="overflow-x-auto mt-1">
                  <table className="w-full text-center">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="py-1 text-left pl-2">运算法则</th>
                        <th className="py-1">公式</th>
                        <th className="py-1">例子</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-left pl-2">同底数相乘</td>
                        <td className="py-1"><MathTex tex="a^m \cdot a^n = a^{m+n}" /></td>
                        <td className="py-1"><MathTex tex="2^3 \cdot 2^4 = 2^7 = 128" /></td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-left pl-2">同底数相除</td>
                        <td className="py-1"><MathTex tex="a^m \div a^n = a^{m-n}" /></td>
                        <td className="py-1"><MathTex tex="2^5 \div 2^2 = 2^3 = 8" /></td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-left pl-2">幂的幂</td>
                        <td className="py-1"><MathTex tex="(a^m)^n = a^{mn}" /></td>
                        <td className="py-1"><MathTex tex="(2^3)^2 = 2^6 = 64" /></td>
                      </tr>
                      <tr>
                        <td className="py-1 text-left pl-2">零次幂</td>
                        <td className="py-1"><MathTex tex="a^0 = 1" /></td>
                        <td className="py-1"><MathTex tex="5^0 = 1" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 字母代换 */}
            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-800 border-b border-purple-300 bg-purple-100 text-lg">字母代换——把 <MathTex tex="n" /> 换成 <MathTex tex="n+1" /> 或 <MathTex tex="n-1" /></div>
              <div className="px-3 py-2 space-y-0">
                <p>数列里经常需要把公式中的 <MathTex tex="n" /> 替换成 <MathTex tex="n+1" /> 或 <MathTex tex="n-1" /></p>
                <p className="font-bold text-purple-700 mt-1">例：已知 <MathTex tex="S_n = 2n^2 + n" />，求 <MathTex tex="S_{n-1}" /></p>
                <p>把公式里所有的 <MathTex tex="n" /> 都换成 <MathTex tex="n-1" />：<MathTex tex="S_{n-1} = 2(n-1)^2 + (n-1)" /></p>
                <p>展开：<MathTex tex="= 2(n^2 - 2n + 1) + n - 1 = 2n^2 - 3n + 1" /></p>
                <p className="mt-1">为什么重要：因为 <MathTex tex="a_n = S_n - S_{n-1}" />，你必须先算出 <MathTex tex="S_{n-1}" /> 才能求通项公式</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 2: 什么是数列 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="seq-what" className="mb-6 scroll-mt-4">
        <Collapsible title="二、什么是数列" defaultOpen storageKey="seq-prereq:what" headerExtra={<SpeakButton text={sequencePrereqNarrations.whatIsSequence} />}>
          <div className="space-y-0 text-lg text-gray-800">

            {/* 定义 + 例子 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-blue-300 bg-blue-100 text-lg">数列 = 按顺序排列的一列数</div>
              <div className="px-3 py-2 space-y-1">
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <p className="font-bold text-blue-700">日历日期</p>
                    <p>1, 2, 3, 4, 5, ...（每天加 1）</p>
                  </div>
                  <div>
                    <p className="font-bold text-blue-700">存款翻倍</p>
                    <p>100, 200, 400, 800, ...（每次乘 2）</p>
                  </div>
                  <div>
                    <p className="font-bold text-blue-700">平方数</p>
                    <p>1, 4, 9, 16, 25, ...（<MathTex tex="n^2" />）</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 关键术语 */}
            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">关键术语（只有 3 个）</div>
              <div className="px-3 py-2 space-y-1">
                <div>
                  <p><strong className="text-blue-700">项</strong>：数列里的每一个数叫做一个"项"</p>
                </div>
                <div className="border-t border-gray-200 pt-1">
                  <p><strong className="text-green-700">项数 <MathTex tex="n" /></strong>：每一项的位置编号，<MathTex tex="n" /> 只能是正整数（1, 2, 3, ...）</p>
                </div>
                <div className="border-t border-gray-200 pt-1">
                  <p><strong className="text-purple-700">第 <MathTex tex="n" /> 项 <MathTex tex="a_n" /></strong>：数列中第 <MathTex tex="n" /> 个数，写作 <MathTex tex="a_n" />（读作 "a sub n"）。<MathTex tex="a" /> 代表这个数列的名字，下标 <MathTex tex="n" /> 代表第几项</p>
                  <p className="ml-4">例：数列 3, 6, 9, 12, 15, ...  <MathTex tex="a_1 = 3,\; a_2 = 6,\; a_3 = 9,\; a_4 = 12,\; a_5 = 15" /></p>
                </div>
              </div>
            </div>

            {/* 本质 = 函数 */}
            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">数列的本质 = 定义域为正整数的函数</div>
              <div className="px-3 py-2 space-y-1">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-blue-50 rounded-lg px-4 py-2 border border-blue-200 text-center">
                    <p className="font-bold">函数</p>
                    <p><MathTex tex="x \to f(x)" /></p>
                    <p><MathTex tex="x" /> 可以是任意实数</p>
                  </div>
                  <div className="bg-green-50 rounded-lg px-4 py-2 border border-green-200 text-center">
                    <p className="font-bold">数列</p>
                    <p><MathTex tex="n \to a_n" /></p>
                    <p><MathTex tex="n" /> 只能是正整数</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 表示方法 */}
            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">数列的 3 种表示方法</div>
              <div className="px-3 py-2 space-y-1">
                <p><strong>① 列举法</strong>：直接写出来。例：1, 3, 5, 7, 9, ...</p>
                <div className="border-t border-gray-200 pt-1">
                  <p><strong>② 公式法</strong>：给出通项公式。例：<MathTex tex="a_n = 2n - 1" /></p>
                </div>
                <div className="border-t border-gray-200 pt-1">
                  <p><strong>③ 递推法</strong>：告诉下一项和前一项的关系。例：<MathTex tex="a_{n+1} = a_n + 2,\; a_1 = 1" /></p>
                </div>
              </div>
            </div>

            {/* 补充：有限 vs 无穷 + 常数列 + 首项 */}
            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">补充几个小概念</div>
              <div className="px-3 py-2 space-y-0">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p><strong className="text-blue-700">有限数列</strong>：项数有限。例：1, 2, 3（只有 3 项）</p>
                    <p><strong className="text-blue-700">无穷数列</strong>：项数无限。例：1, 2, 3, 4, ...（永远写下去）</p>
                    <p className="mt-1">高考里绝大多数都是无穷数列</p>
                  </div>
                  <div>
                    <p><strong className="text-green-700">首项 <MathTex tex="a_1" /></strong>：数列的第一项，很多公式都从它出发</p>
                    <p><strong className="text-green-700">常数列</strong>：每一项都一样的数列。例：3, 3, 3, 3, ...（<MathTex tex="a_n = 3" />）</p>
                    <p className="mt-1">常数列既是等差数列（公差为 0）也是等比数列（公比为 1）</p>
                  </div>
                </div>
                <div className="mt-1 border-t border-gray-200 pt-1">
                  <p><strong className="text-purple-700">递增数列</strong>：后一项比前一项大（<MathTex tex="a_{n+1} > a_n" />）。例：1, 2, 3, 4, ...</p>
                  <p><strong className="text-purple-700">递减数列</strong>：后一项比前一项小（<MathTex tex="a_{n+1} < a_n" />）。例：10, 8, 6, 4, ...</p>
                  <p><strong className="text-purple-700">摆动数列</strong>：正负交替或大小交替。例：1, -1, 1, -1, ...（<MathTex tex="a_n = (-1)^{n+1}" />）</p>
                </div>
              </div>
            </div>

            {/* 数列概念练习 */}
            <div className="border border-gray-300 rounded overflow-hidden" style={{ breakInside: 'avoid' }}>
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">动手算一算</div>
              <div className="px-3 py-2 grid grid-cols-2 gap-1 text-lg">
                <p>① <MathTex tex="a_n = 3n + 1" />，<MathTex tex="a_4 =" /></p>
                <p>④ 数列 1, 4, 9, 16, ... 的 <MathTex tex="a_n =" /></p>
                <p>② <MathTex tex="a_n = n^2 - n" />，<MathTex tex="a_5 =" /></p>
                <p>⑤ <MathTex tex="a_{n+1} = a_n + 3,\; a_1 = 2" />，<MathTex tex="a_3 =" /></p>
                <p>③ 数列 2, 4, 6, 8, ... 的 <MathTex tex="a_n =" /></p>
                <p>⑥ 数列 1, -1, 1, -1, ... 是____数列</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 3: 通项公式 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="seq-general" className="mb-6 scroll-mt-4">
        <Collapsible title={'三、通项公式——数列的\u201c万能钥匙\u201d'} defaultOpen storageKey="seq-prereq:general" headerExtra={<SpeakButton text={sequencePrereqNarrations.generalTerm} />}>
          <div className="space-y-0 text-lg text-gray-800">

            {/* 定义 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-blue-300 bg-blue-100 text-lg">通项公式 = 一个关于 <MathTex tex="n" /> 的公式，代入 <MathTex tex="n" /> 就能算出第 <MathTex tex="n" /> 项</div>
              <div className="px-3 py-2 space-y-1">
                <p className="text-center text-xl"><MathTex tex="a_n = f(n)" /></p>
                <p>就像一台机器：你往里面塞一个编号 <MathTex tex="n" />，它就吐出一个数 <MathTex tex="a_n" /></p>
              </div>
            </div>

            {/* 实战演练 */}
            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">实战演练：用通项公式算具体的项</div>
              <div className="px-3 py-2 space-y-1">
                <p className="font-bold text-blue-700">例 1：<MathTex tex="a_n = 2n" />（偶数列）</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-center">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="py-1 font-bold">n</th>
                        <th className="py-1">1</th>
                        <th className="py-1">2</th>
                        <th className="py-1">3</th>
                        <th className="py-1">4</th>
                        <th className="py-1">5</th>
                        <th className="py-1">...</th>
                        <th className="py-1">100</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-1 font-bold"><MathTex tex="a_n" /></td>
                        <td className="py-1">2</td>
                        <td className="py-1">4</td>
                        <td className="py-1">6</td>
                        <td className="py-1">8</td>
                        <td className="py-1">10</td>
                        <td className="py-1">...</td>
                        <td className="py-1 text-blue-600 font-bold">200</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>想知道第 100 项？代入 <MathTex tex="a_{100} = 2 \times 100 = 200" />，就是这么简单</p>
                <div className="border-t border-gray-200 pt-1">
                  <p className="font-bold text-green-700">例 2：<MathTex tex="a_n = n^2 + 1" /></p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-center">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="py-1 font-bold">n</th>
                          <th className="py-1">1</th>
                          <th className="py-1">2</th>
                          <th className="py-1">3</th>
                          <th className="py-1">4</th>
                          <th className="py-1">5</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-1 font-bold">计算</td>
                          <td className="py-1"><MathTex tex="1^2+1" /></td>
                          <td className="py-1"><MathTex tex="2^2+1" /></td>
                          <td className="py-1"><MathTex tex="3^2+1" /></td>
                          <td className="py-1"><MathTex tex="4^2+1" /></td>
                          <td className="py-1"><MathTex tex="5^2+1" /></td>
                        </tr>
                        <tr>
                          <td className="py-1 font-bold"><MathTex tex="a_n" /></td>
                          <td className="py-1">2</td>
                          <td className="py-1">5</td>
                          <td className="py-1">10</td>
                          <td className="py-1">17</td>
                          <td className="py-1">26</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* 反过来猜公式 */}
            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">反过来：从前几项猜通项公式（观察、猜测、验证）</div>
              <div className="px-3 py-2 space-y-1">
                <div>
                  <p><strong>数列：2, 4, 6, 8, 10, ...</strong></p>
                  <p className="ml-4">每项都是 <MathTex tex="n" /> 的 2 倍，猜 <MathTex tex="a_n = 2n" />。验证：<MathTex tex="2 \times 1 = 2\;\checkmark,\; 2 \times 2 = 4\;\checkmark,\; 2 \times 3 = 6\;\checkmark" /></p>
                </div>
                <div className="border-t border-gray-200 pt-1">
                  <p><strong>数列：1, 4, 9, 16, 25, ...</strong></p>
                  <p className="ml-4">这不就是 <MathTex tex="1^2, 2^2, 3^2, 4^2, 5^2" /> 吗？猜 <MathTex tex="a_n = n^2" /></p>
                </div>
                <div className="border-t border-gray-200 pt-1">
                  <p><strong>数列：2, 5, 10, 17, 26, ...</strong></p>
                  <p className="ml-4"><MathTex tex="1+1,\; 4+1,\; 9+1,\; 16+1,\; 25+1" />，猜 <MathTex tex="a_n = n^2 + 1" />。技巧：先看和什么常见数列接近，再看差多少</p>
                </div>
                <div className="border-t border-gray-200 pt-1">
                  <p><strong>数列：1, 2, 4, 8, 16, ...</strong></p>
                  <p className="ml-4">每项都是前一项的 2 倍，猜 <MathTex tex="a_n = 2^{n-1}" />。验证：<MathTex tex="2^0 = 1\;\checkmark,\; 2^1 = 2\;\checkmark,\; 2^2 = 4\;\checkmark" /></p>
                </div>
              </div>
            </div>

            {/* 注意 */}
            <div className="border border-gray-300 rounded overflow-hidden" style={{ breakInside: 'avoid' }}>
              <div className="px-2 py-1 font-bold text-red-700 border-b border-gray-300 bg-gray-100 text-lg">注意</div>
              <div className="px-3 py-2 space-y-1">
                <p>不是所有数列都有简洁的通项公式！但高考考的数列都有。</p>
                <p>猜出公式后<strong>一定要验证</strong>前几项是否对得上。</p>
              </div>
            </div>

            {/* 通项公式练习 */}
            <div className="border border-gray-300 rounded overflow-hidden" style={{ breakInside: 'avoid' }}>
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">动手算一算</div>
              <div className="px-3 py-2 grid grid-cols-2 gap-1 text-lg">
                <p>① <MathTex tex="a_n = 5n - 3" />，<MathTex tex="a_6 =" /></p>
                <p>④ 数列 3, 6, 9, 12, ... 的 <MathTex tex="a_n =" /></p>
                <p>② <MathTex tex="a_n = 2^n" />，<MathTex tex="a_8 =" /></p>
                <p>⑤ 数列 1, 3, 9, 27, ... 的 <MathTex tex="a_n =" /></p>
                <p>③ 数列 0, 3, 8, 15, 24, ... 的 <MathTex tex="a_n =" /></p>
                <p>⑥ <MathTex tex="a_n = \frac{n}{n+1}" />，<MathTex tex="a_4 =" /></p>
                <p>⑦ 数列 <MathTex tex="\frac{1}{2}, \frac{1}{4}, \frac{1}{8}, \frac{1}{16}, ..." /> 的 <MathTex tex="a_n =" /></p>
                <p>⑧ <MathTex tex="a_n = (-1)^n \cdot n" />，<MathTex tex="a_5 =" /></p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 4: 递推公式 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="seq-recursion" className="mb-3 scroll-mt-4">
        <Collapsible title={'四、递推公式——\u201c下一项怎么来的\u201d'} defaultOpen storageKey="seq-prereq:recursion" headerExtra={<SpeakButton text={sequencePrereqNarrations.recursion} />}>
          <div className="space-y-0 text-lg text-gray-800">

            {/* 定义 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">递推公式 = 告诉你"相邻两项的关系"</div>
              <div className="px-3 py-2 space-y-0">
                <p>通项公式：知道 <MathTex tex="n" /> 就能直接算出 <MathTex tex="a_n" />，像<strong>导航直达</strong></p>
                <p>递推公式：知道前一项才能算下一项，像<strong>一步一步走路</strong></p>
                <p className="mt-1">递推公式必须给一个<strong>起点</strong>（通常是 <MathTex tex="a_1" />），否则推不动</p>
              </div>
            </div>

            {/* 两种常见递推 */}
            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">最常见的两种递推</div>
              <div className="px-3 py-2 space-y-0">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-blue-50 rounded-lg p-2 border border-blue-200">
                    <p className="font-bold text-blue-700">① 等差型：每次加固定的数</p>
                    <p className="text-center text-xl mt-1"><MathTex tex="a_{n+1} = a_n + d" /></p>
                    <p className="mt-1">例：<MathTex tex="a_1 = 2,\; d = 3" /></p>
                    <p>数列：2, 5, 8, 11, 14, ...</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-2 border border-green-200">
                    <p className="font-bold text-green-700">② 等比型：每次乘固定的数</p>
                    <p className="text-center text-xl mt-1"><MathTex tex="a_{n+1} = a_n \times q" /></p>
                    <p className="mt-1">例：<MathTex tex="a_1 = 1,\; q = 2" /></p>
                    <p>数列：1, 2, 4, 8, 16, ...</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 实战推项 */}
            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">实战：用递推公式一步步推</div>
              <div className="px-3 py-2 space-y-0">
                <p className="font-bold">已知 <MathTex tex="a_{n+1} = a_n + 5,\; a_1 = 3" />，求前 5 项</p>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  <div>
                    <p><MathTex tex="a_1 = 3" />（起点）</p>
                    <p><MathTex tex="a_2 = a_1 + 5 = 3 + 5 = 8" /></p>
                    <p><MathTex tex="a_3 = a_2 + 5 = 8 + 5 = 13" /></p>
                  </div>
                  <div>
                    <p><MathTex tex="a_4 = a_3 + 5 = 13 + 5 = 18" /></p>
                    <p><MathTex tex="a_5 = a_4 + 5 = 18 + 5 = 23" /></p>
                    <p className="mt-1">数列：3, 8, 13, 18, 23, ...</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 对比表 */}
            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">递推公式 vs 通项公式</div>
              <div className="px-3 py-2 space-y-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-center">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="py-1 text-left pl-2"></th>
                        <th className="py-1">通项公式</th>
                        <th className="py-1">递推公式</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-left pl-2 font-bold">形式</td>
                        <td className="py-1"><MathTex tex="a_n = f(n)" /></td>
                        <td className="py-1"><MathTex tex="a_{n+1} = g(a_n)" /></td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-left pl-2 font-bold">能做什么</td>
                        <td className="py-1">直接算出任意一项</td>
                        <td className="py-1">从前一项推下一项</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-left pl-2 font-bold">求第 100 项</td>
                        <td className="py-1">代入 <MathTex tex="n=100" />，秒出</td>
                        <td className="py-1">要从第 1 项推 99 次</td>
                      </tr>
                      <tr>
                        <td className="py-1 text-left pl-2 font-bold">高考用法</td>
                        <td className="py-1">求值、求和的终极目标</td>
                        <td className="py-1">通常作为条件给出</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-1">高考常见套路：给你递推公式，让你求通项公式。后面 6.2 会详细学</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 5: 求和符号 Σ */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="seq-sigma" className="mb-3 scroll-mt-4">
        <Collapsible title="五、求和符号 Σ" defaultOpen storageKey="seq-prereq:sigma" headerExtra={<SpeakButton text={sequencePrereqNarrations.sigma} />}>
          <div className="space-y-0 text-lg text-gray-800">

            {/* 定义 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">Σ 就是"批量加法"</div>
              <div className="px-3 py-2 space-y-0">
                <p>Σ 是希腊字母，读作"西格玛"（Sigma），代表 Sum（求和）</p>
                <p className="text-center text-xl mt-1"><MathTex tex="\sum_{i=1}^{n} a_i = a_1 + a_2 + a_3 + \cdots + a_n" /></p>
                <div className="grid grid-cols-3 gap-2 mt-1">
                  <div className="text-center">
                    <p className="font-bold text-blue-700">下面 <MathTex tex="i=1" /></p>
                    <p>从 <MathTex tex="i=1" /> 开始</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-blue-700">上面 <MathTex tex="n" /></p>
                    <p>加到 <MathTex tex="i=n" /> 为止</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-blue-700">右边 <MathTex tex="a_i" /></p>
                    <p>每一项的公式</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 例子 */}
            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">看几个例子就明白了</div>
              <div className="px-3 py-2 space-y-0">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="font-bold text-blue-700">例 1：<MathTex tex="\displaystyle\sum_{i=1}^{5} i" /></p>
                    <p><MathTex tex="= 1 + 2 + 3 + 4 + 5 = 15" /></p>
                    <p>把 i 从 1 代到 5，全部加起来</p>
                  </div>
                  <div>
                    <p className="font-bold text-green-700">例 2：<MathTex tex="\displaystyle\sum_{i=1}^{4} i^2" /></p>
                    <p><MathTex tex="= 1^2 + 2^2 + 3^2 + 4^2 = 30" /></p>
                    <p>把 <MathTex tex="i^2" /> 从 1 代到 4，加起来</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-1 border-t border-gray-200 pt-1">
                  <div>
                    <p className="font-bold text-purple-700">例 3：<MathTex tex="\displaystyle\sum_{i=1}^{3} 2i" /></p>
                    <p><MathTex tex="= 2 + 4 + 6 = 12" /></p>
                  </div>
                  <div>
                    <p className="font-bold text-amber-700">例 4：<MathTex tex="\displaystyle\sum_{i=1}^{5} 3" /></p>
                    <p><MathTex tex="= 3 + 3 + 3 + 3 + 3 = 15" /></p>
                    <p>常数加 n 次 = <MathTex tex="nc" /></p>
                  </div>
                </div>
              </div>
            </div>

            {/* 运算规则 + Sn */}
            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">Σ 的运算规则</div>
              <div className="px-3 py-2 space-y-0">
                <p><strong>① 提公因子：</strong><MathTex tex="\displaystyle\sum_{i=1}^{n} c \cdot a_i = c \cdot \sum_{i=1}^{n} a_i" />（每项都乘 c，提到外面）</p>
                <p className="mt-1"><strong>② 拆项：</strong><MathTex tex="\displaystyle\sum_{i=1}^{n} (a_i + b_i) = \sum_{i=1}^{n} a_i + \sum_{i=1}^{n} b_i" />（加法可以拆成两个 Σ）</p>
              </div>
            </div>

            {/* Sn = Σ */}
            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">用 Σ 表示前 n 项和</div>
              <div className="px-3 py-2 space-y-0">
                <p className="text-center text-xl"><MathTex tex="S_n = \sum_{i=1}^{n} a_i" /></p>
                <p className="mt-1"><MathTex tex="S_n" /> 就是 Σ 的简写，前面学的"前 n 项和"换了个写法而已</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>


      </LessonLayout>
    </div>
  );
}
