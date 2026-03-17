import { Math as MathTex, Collapsible, SpeakButton, PageHeader, LessonLayout, ExportButton, QuizPanel, PracticeCard, PageBreak } from '@/components/shared';
import { sequencePrereqNarrations } from './data/prereq-narrations';
import { sequencePrereqProgressItems } from './data/prereq-progress';
import { sequencePrereqPractice, sequencePrereqQuiz } from './data/prereq-questions';
import { useProgress } from '@/hooks';
import { usePrintMode } from '@/hooks/usePrintMode';
import { scrollToId } from '@/lib/scroll';

export function SequencePrereqPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('sequence-prereq', sequencePrereqProgressItems);
  const { isPrinting, printOptions } = usePrintMode();

  return (
    <div>
      <PageHeader
        stage="第六阶段 · 数列套路"
        variant="prereq"
        title="6.0 数列前置知识"
        narration={sequencePrereqNarrations.intro}
        subtitle="数列的概念、通项公式、前 n 项和、递推公式、求和符号——后面等差等比的地基"
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
        <div className="text-gray-600 space-y-1">
          <button onClick={() => scrollToId('seq-what')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">一、什么是数列</button>
          <button onClick={() => scrollToId('seq-general')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">二、通项公式——数列的"万能钥匙"</button>
          <button onClick={() => scrollToId('seq-sn')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">三、前 n 项和 Sₙ 与 aₙ 的关系</button>
          <button onClick={() => scrollToId('seq-recursion')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">四、递推公式——"下一项怎么来的"</button>
          <button onClick={() => scrollToId('seq-sigma')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">五、求和符号 Σ</button>
        </div>
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 1: 什么是数列 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="seq-what" className="mb-3 scroll-mt-4">
        <Collapsible title="一、什么是数列" defaultOpen storageKey="seq-prereq:what" headerExtra={<SpeakButton text={sequencePrereqNarrations.whatIsSequence} />}>
          <p className="text-blue-600 mb-2">🎯 学完你能：理解数列就是"一列按顺序排列的数"，知道"项"和"项数"是什么意思。</p>
          <div className="space-y-1 text-gray-700">

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
              <p className="font-bold text-lg text-blue-800 mb-2">数列 = 按顺序排列的一列数</p>
              <p>生活中到处都是数列：</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
                <div className="bg-white rounded-lg p-3 border border-blue-100">
                  <p className="font-bold text-blue-700 mb-1">日历上的日期</p>
                  <p className="text-center text-lg">1, 2, 3, 4, 5, 6, ...</p>
                  <p className="text-gray-500 mt-1">每天加 1</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-blue-100">
                  <p className="font-bold text-blue-700 mb-1">银行存款（每年翻倍）</p>
                  <p className="text-center text-lg">100, 200, 400, 800, ...</p>
                  <p className="text-gray-500 mt-1">每次乘 2</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-blue-100">
                  <p className="font-bold text-blue-700 mb-1">平方数</p>
                  <p className="text-center text-lg">1, 4, 9, 16, 25, ...</p>
                  <p className="text-gray-500 mt-1"><MathTex tex="1^2, 2^2, 3^2, 4^2, 5^2" /></p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-bold text-gray-800 mb-2">关键术语（只有 3 个）</p>
              <div className="space-y-2">
                <div className="bg-white rounded-lg p-3 border-l-4 border-blue-500">
                  <p className="font-bold text-blue-700 mb-1">项</p>
                  <p>数列里的每一个数叫做一个<strong>"项"</strong></p>
                  <p className="text-gray-500 mt-1">比如数列 3, 6, 9, 12 中，3 是一项，6 也是一项</p>
                </div>
                <div className="bg-white rounded-lg p-3 border-l-4 border-green-500">
                  <p className="font-bold text-green-700 mb-1">项数 n</p>
                  <p>每一项的<strong>位置编号</strong>：第 1 个是第 1 项，第 2 个是第 2 项……</p>
                  <p className="text-gray-500 mt-1">项数用字母 <MathTex tex="n" /> 表示，<MathTex tex="n" /> 只能是正整数（1, 2, 3, ...）</p>
                </div>
                <div className="bg-white rounded-lg p-3 border-l-4 border-purple-500">
                  <p className="font-bold text-purple-700 mb-1">第 n 项 <MathTex tex="a_n" /></p>
                  <p>数列中<strong>第 n 个数</strong>，写作 <MathTex tex="a_n" />（读作"a sub n"）</p>
                  <div className="bg-purple-50 rounded p-2 mt-2">
                    <p>例：数列 3, 6, 9, 12, 15, ...</p>
                    <p className="mt-1"><MathTex tex="a_1 = 3,\quad a_2 = 6,\quad a_3 = 9,\quad a_4 = 12,\quad a_5 = 15" /></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="font-bold text-green-800 mb-2">数列的本质——就是一个特殊函数</p>
              <div className="bg-white rounded-lg p-3 border border-green-100">
                <p>你在前面学过函数 <MathTex tex="y = f(x)" />，x 代入一个数，就得到一个 y</p>
                <p className="mt-2">数列也是一样：<strong>n 代入一个正整数，就得到一个 <MathTex tex="a_n" /></strong></p>
                <div className="flex items-center justify-center gap-3 mt-3 text-lg">
                  <div className="bg-blue-50 rounded-lg px-4 py-2 border border-blue-200">
                    <p className="text-center">函数</p>
                    <p className="text-center"><MathTex tex="x \to f(x)" /></p>
                    <p className="text-center text-gray-500">x 可以是任意实数</p>
                  </div>
                  <p className="text-2xl text-gray-400">↔</p>
                  <div className="bg-green-50 rounded-lg px-4 py-2 border border-green-200">
                    <p className="text-center">数列</p>
                    <p className="text-center"><MathTex tex="n \to a_n" /></p>
                    <p className="text-center text-gray-500">n 只能是正整数</p>
                  </div>
                </div>
              </div>
              <p className="text-green-700 mt-2">唯一区别：函数的 x 可以是任意实数（连续的），数列的 n 只能是 1, 2, 3, ...（离散的，一个一个跳的）</p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <p className="font-bold text-amber-800">💡 数列的表示方法（3 种）</p>
              <div className="space-y-1.5 mt-2">
                <div className="bg-white rounded-lg p-2 border border-amber-100">
                  <p><strong>① 列举法</strong>：直接把数写出来</p>
                  <p className="text-gray-600 mt-1">例：1, 3, 5, 7, 9, ...</p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-amber-100">
                  <p><strong>② 公式法</strong>：给出通项公式（下一节学）</p>
                  <p className="text-gray-600 mt-1">例：<MathTex tex="a_n = 2n - 1" /></p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-amber-100">
                  <p><strong>③ 递推法</strong>：告诉你下一项和前一项的关系（第四节学）</p>
                  <p className="text-gray-600 mt-1">例：<MathTex tex="a_{n+1} = a_n + 2,\; a_1 = 1" /></p>
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 2: 通项公式 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="seq-general" className="mb-3 scroll-mt-4">
        <Collapsible title={'二、通项公式——数列的\u201c万能钥匙\u201d'} defaultOpen storageKey="seq-prereq:general" headerExtra={<SpeakButton text={sequencePrereqNarrations.generalTerm} />}>
          <p className="text-blue-600 mb-2">🎯 学完你能：看到通项公式，能求出数列的任意一项；看到数列前几项，能猜出通项公式。</p>
          <div className="space-y-1 text-gray-700">

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
              <p className="font-bold text-lg text-blue-800 mb-2">通项公式 = 一个关于 n 的公式，代入 n 就能算出第 n 项</p>
              <div className="bg-white rounded-lg p-3 border border-blue-100 text-center">
                <p className="text-xl"><MathTex tex="a_n = f(n)" /></p>
              </div>
              <p className="text-blue-700 mt-2">就像一台机器：你往里面塞一个编号 n，它就吐出一个数 <MathTex tex="a_n" /></p>
            </div>

            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-bold text-gray-800 mb-2">实战演练：用通项公式算具体的项</p>
              <div className="space-y-2">
                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <p className="font-bold text-blue-700 mb-1">例 1：<MathTex tex="a_n = 2n" />（偶数列）</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-center mt-1">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="py-1.5 font-bold text-gray-700">n</th>
                          <th className="py-1.5">1</th>
                          <th className="py-1.5">2</th>
                          <th className="py-1.5">3</th>
                          <th className="py-1.5">4</th>
                          <th className="py-1.5">5</th>
                          <th className="py-1.5">...</th>
                          <th className="py-1.5">100</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-1.5 font-bold text-gray-700"><MathTex tex="a_n" /></td>
                          <td className="py-1.5">2</td>
                          <td className="py-1.5">4</td>
                          <td className="py-1.5">6</td>
                          <td className="py-1.5">8</td>
                          <td className="py-1.5">10</td>
                          <td className="py-1.5">...</td>
                          <td className="py-1.5 text-blue-600 font-bold">200</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-gray-500 mt-1">想知道第 100 项？代入 <MathTex tex="a_{100} = 2 \times 100 = 200" />，就是这么简单</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <p className="font-bold text-green-700 mb-1">例 2：<MathTex tex="a_n = n^2 + 1" /></p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-center mt-1">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="py-1.5 font-bold text-gray-700">n</th>
                          <th className="py-1.5">1</th>
                          <th className="py-1.5">2</th>
                          <th className="py-1.5">3</th>
                          <th className="py-1.5">4</th>
                          <th className="py-1.5">5</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-1.5 font-bold text-gray-700">计算</td>
                          <td className="py-1.5"><MathTex tex="1^2+1" /></td>
                          <td className="py-1.5"><MathTex tex="2^2+1" /></td>
                          <td className="py-1.5"><MathTex tex="3^2+1" /></td>
                          <td className="py-1.5"><MathTex tex="4^2+1" /></td>
                          <td className="py-1.5"><MathTex tex="5^2+1" /></td>
                        </tr>
                        <tr>
                          <td className="py-1.5 font-bold text-gray-700"><MathTex tex="a_n" /></td>
                          <td className="py-1.5">2</td>
                          <td className="py-1.5">5</td>
                          <td className="py-1.5">10</td>
                          <td className="py-1.5">17</td>
                          <td className="py-1.5">26</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="font-bold text-green-800 mb-2">反过来：从前几项猜通项公式</p>
              <p className="mb-2">高考经常给你前几项，让你找规律写出通项公式。方法就是<strong>观察 → 猜测 → 验证</strong>。</p>
              <div className="space-y-2">
                <div className="bg-white rounded-lg p-3 border border-green-100">
                  <p className="font-bold mb-1">数列：2, 4, 6, 8, 10, ...</p>
                  <p>观察：每项都是 n 的 2 倍 → 猜 <MathTex tex="a_n = 2n" /></p>
                  <p className="text-gray-500">验证：<MathTex tex="2 \times 1 = 2\;\checkmark,\; 2 \times 2 = 4\;\checkmark,\; 2 \times 3 = 6\;\checkmark" /></p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-green-100">
                  <p className="font-bold mb-1">数列：1, 4, 9, 16, 25, ...</p>
                  <p>观察：这不就是 <MathTex tex="1^2, 2^2, 3^2, 4^2, 5^2" /> 吗？ → 猜 <MathTex tex="a_n = n^2" /></p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-green-100">
                  <p className="font-bold mb-1">数列：2, 5, 10, 17, 26, ...</p>
                  <p>观察：<MathTex tex="1+1,\; 4+1,\; 9+1,\; 16+1,\; 25+1" /> → 猜 <MathTex tex="a_n = n^2 + 1" /></p>
                  <p className="text-gray-500">技巧：先看和什么常见数列接近，再看差多少</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-green-100">
                  <p className="font-bold mb-1">数列：1, 2, 4, 8, 16, ...</p>
                  <p>观察：每项都是前一项的 2 倍 → 猜 <MathTex tex="a_n = 2^{n-1}" /></p>
                  <p className="text-gray-500">验证：<MathTex tex="2^0 = 1\;\checkmark,\; 2^1 = 2\;\checkmark,\; 2^2 = 4\;\checkmark" /></p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="font-bold text-red-800 mb-1">⚠️ 注意</p>
              <p>不是所有数列都有简洁的通项公式！但高考考的数列都有。</p>
              <p className="mt-1">猜出公式后<strong>一定要验证</strong>前几项是否对得上。</p>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 3: 前 n 项和 Sₙ 与 aₙ 的关系 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="seq-sn" className="mb-3 scroll-mt-4">
        <Collapsible title={'三、前 n 项和 Sₙ 与 aₙ 的关系'} defaultOpen storageKey="seq-prereq:sn" headerExtra={<SpeakButton text={sequencePrereqNarrations.snAndAn} />}>
          <p className="text-blue-600 mb-2">🎯 学完你能：已知 <MathTex tex="S_n" /> 求 <MathTex tex="a_n" />，或者已知 <MathTex tex="a_n" /> 理解 <MathTex tex="S_n" /> 是什么。</p>
          <div className="space-y-1 text-gray-700">

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
              <p className="font-bold text-lg text-blue-800 mb-2">前 n 项和 <MathTex tex="S_n" /> = 前 n 个数加起来</p>
              <div className="bg-white rounded-lg p-3 border border-blue-100">
                <div className="text-center space-y-1">
                  <p className="text-lg"><MathTex tex="S_n = a_1 + a_2 + a_3 + \cdots + a_n" /></p>
                </div>
                <div className="mt-3">
                  <p className="font-bold mb-1">用数列 1, 3, 5, 7, 9, ... 举例：</p>
                  <div className="space-y-0.5">
                    <p><MathTex tex="S_1 = 1" /></p>
                    <p><MathTex tex="S_2 = 1 + 3 = 4" /></p>
                    <p><MathTex tex="S_3 = 1 + 3 + 5 = 9" /></p>
                    <p><MathTex tex="S_4 = 1 + 3 + 5 + 7 = 16" /></p>
                    <p><MathTex tex="S_5 = 1 + 3 + 5 + 7 + 9 = 25" /></p>
                  </div>
                  <p className="text-gray-500 mt-1">有没有发现？<MathTex tex="S_n = n^2" />（1, 4, 9, 16, 25 刚好是平方数）</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-xl p-3">
              <p className="font-bold text-lg text-purple-800 mb-2">核心公式（高考必用）</p>
              <div className="bg-white rounded-lg p-3 border border-purple-100">
                <div className="text-center space-y-2">
                  <div className="bg-purple-50 rounded-lg p-3">
                    <p className="text-xl"><MathTex tex="a_n = \begin{cases} S_1 & n = 1 \\\\ S_n - S_{n-1} & n \geq 2 \end{cases}" /></p>
                  </div>
                </div>
              </div>
              <div className="mt-2 space-y-1">
                <p className="text-purple-700"><strong>用大白话说：</strong></p>
                <p>第 1 项 = 第 1 项的和（这是废话，但公式需要单独写出来）</p>
                <p>第 <MathTex tex="n" /> 项 = 前 <MathTex tex="n" /> 项的和 - 前 <MathTex tex="(n-1)" /> 项的和</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-bold text-gray-800 mb-2">为什么 <MathTex tex="S_n - S_{n-1} = a_n" /> ？看这个图就懂了</p>
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-blue-700 w-12 shrink-0"><MathTex tex="S_5" /></span>
                    <span>=</span>
                    <div className="flex gap-1">
                      <span className="bg-gray-200 px-2 py-1 rounded"><MathTex tex="a_1" /></span>
                      <span className="bg-gray-200 px-2 py-1 rounded"><MathTex tex="a_2" /></span>
                      <span className="bg-gray-200 px-2 py-1 rounded"><MathTex tex="a_3" /></span>
                      <span className="bg-gray-200 px-2 py-1 rounded"><MathTex tex="a_4" /></span>
                      <span className="bg-blue-200 px-2 py-1 rounded font-bold"><MathTex tex="a_5" /></span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-green-700 w-12 shrink-0"><MathTex tex="S_4" /></span>
                    <span>=</span>
                    <div className="flex gap-1">
                      <span className="bg-gray-200 px-2 py-1 rounded"><MathTex tex="a_1" /></span>
                      <span className="bg-gray-200 px-2 py-1 rounded"><MathTex tex="a_2" /></span>
                      <span className="bg-gray-200 px-2 py-1 rounded"><MathTex tex="a_3" /></span>
                      <span className="bg-gray-200 px-2 py-1 rounded"><MathTex tex="a_4" /></span>
                    </div>
                  </div>
                  <div className="border-t border-gray-300 pt-2">
                    <p><MathTex tex="S_5 - S_4" /> = 灰色块全部抵消，只剩下 <span className="bg-blue-200 px-2 py-0.5 rounded font-bold"><MathTex tex="a_5" /></span></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="font-bold text-green-800 mb-2">实战：已知 <MathTex tex="S_n" /> 求 <MathTex tex="a_n" /></p>
              <div className="bg-white rounded-lg p-3 border border-green-100">
                <p className="font-bold mb-1">题目：已知 <MathTex tex="S_n = n^2 + n" />，求 <MathTex tex="a_n" /></p>
                <div className="mt-2 space-y-1">
                  <p><strong>第一步：</strong>当 <MathTex tex="n \geq 2" /> 时</p>
                  <p className="ml-4"><MathTex tex="a_n = S_n - S_{n-1}" /></p>
                  <p className="ml-4"><MathTex tex="= (n^2 + n) - [(n-1)^2 + (n-1)]" /></p>
                  <p className="ml-4"><MathTex tex="= n^2 + n - (n^2 - 2n + 1 + n - 1)" /></p>
                  <p className="ml-4"><MathTex tex="= n^2 + n - n^2 + 2n - 1 - n + 1" /></p>
                  <p className="ml-4"><MathTex tex="= 2n" /></p>
                  <p className="mt-2"><strong>第二步：</strong>验证 <MathTex tex="n = 1" /></p>
                  <p className="ml-4"><MathTex tex="a_1 = S_1 = 1^2 + 1 = 2" /></p>
                  <p className="ml-4">代入 <MathTex tex="a_n = 2n" />：<MathTex tex="a_1 = 2 \times 1 = 2\;\checkmark" /></p>
                  <p className="mt-2"><strong>结论：</strong><MathTex tex="a_n = 2n" /></p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="font-bold text-red-800 mb-1">⚠️ 常见错误（高考陷阱）</p>
              <p>用 <MathTex tex="S_n - S_{n-1}" /> 算出的公式，<strong>必须单独验证 <MathTex tex="n=1" /> 是否也适用</strong>！</p>
              <p className="mt-1">如果 <MathTex tex="n=1" /> 不适用，就要<strong>分段写</strong>：</p>
              <div className="bg-white rounded-lg p-2 border border-red-100 mt-1 text-center">
                <p><MathTex tex="a_n = \begin{cases} S_1 & n = 1 \\\\ S_n - S_{n-1} & n \geq 2 \end{cases}" /></p>
              </div>
              <p className="text-red-700 mt-1">这是高考送分也是丢分大户——很多人忘了验证 <MathTex tex="n=1" /></p>
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
          <p className="text-blue-600 mb-2">🎯 学完你能：看懂递推公式，能从第 1 项开始一步步推出后面的项。</p>
          <div className="space-y-1 text-gray-700">

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
              <p className="font-bold text-lg text-blue-800 mb-2">递推公式 = 告诉你"相邻两项的关系"</p>
              <div className="bg-white rounded-lg p-3 border border-blue-100">
                <p>通项公式让你<strong>直接</strong>算出任意一项：n → <MathTex tex="a_n" /></p>
                <p className="mt-1">递推公式让你从<strong>前一项推出下一项</strong>：<MathTex tex="a_n \to a_{n+1}" /></p>
              </div>
              <p className="text-blue-700 mt-2">打个比方：通项公式像"导航直达"，递推公式像"一步一步走路"</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-bold text-gray-800 mb-2">最常见的两种递推关系</p>
              <div className="space-y-2">
                <div className="bg-white rounded-lg p-3 border-l-4 border-blue-500">
                  <p className="font-bold text-blue-700 mb-1">① 每次加一个固定的数（等差型）</p>
                  <div className="bg-blue-50 rounded p-2 text-center">
                    <p className="text-lg"><MathTex tex="a_{n+1} = a_n + d" /></p>
                  </div>
                  <p className="mt-2">例：<MathTex tex="a_{n+1} = a_n + 3,\; a_1 = 2" /></p>
                  <p className="text-gray-500 mt-1">从 2 开始，每次加 3：<strong>2, 5, 8, 11, 14, ...</strong></p>
                  <p className="text-blue-700 mt-1">这就是下一节要学的<strong>等差数列</strong>！</p>
                </div>
                <div className="bg-white rounded-lg p-3 border-l-4 border-green-500">
                  <p className="font-bold text-green-700 mb-1">② 每次乘一个固定的数（等比型）</p>
                  <div className="bg-green-50 rounded p-2 text-center">
                    <p className="text-lg"><MathTex tex="a_{n+1} = a_n \times q" /></p>
                  </div>
                  <p className="mt-2">例：<MathTex tex="a_{n+1} = 2a_n,\; a_1 = 1" /></p>
                  <p className="text-gray-500 mt-1">从 1 开始，每次乘 2：<strong>1, 2, 4, 8, 16, ...</strong></p>
                  <p className="text-green-700 mt-1">这就是下一节要学的<strong>等比数列</strong>！</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="font-bold text-green-800 mb-2">实战：用递推公式一步步推</p>
              <div className="bg-white rounded-lg p-3 border border-green-100">
                <p className="font-bold mb-1">题目：已知 <MathTex tex="a_{n+1} = a_n + 5,\; a_1 = 3" />，求前 5 项</p>
                <div className="mt-2 space-y-0.5">
                  <p><MathTex tex="a_1 = 3" />（已知）</p>
                  <p><MathTex tex="a_2 = a_1 + 5 = 3 + 5 = 8" /></p>
                  <p><MathTex tex="a_3 = a_2 + 5 = 8 + 5 = 13" /></p>
                  <p><MathTex tex="a_4 = a_3 + 5 = 13 + 5 = 18" /></p>
                  <p><MathTex tex="a_5 = a_4 + 5 = 18 + 5 = 23" /></p>
                </div>
                <p className="text-gray-500 mt-2">数列就是：3, 8, 13, 18, 23, ...</p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <p className="font-bold text-amber-800">💡 递推公式 vs 通项公式</p>
              <div className="overflow-x-auto">
                <table className="w-full text-center mt-1">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="py-2 text-left pl-2"></th>
                      <th className="py-2">通项公式</th>
                      <th className="py-2">递推公式</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 text-left pl-2 font-bold">形式</td>
                      <td className="py-2"><MathTex tex="a_n = f(n)" /></td>
                      <td className="py-2"><MathTex tex="a_{n+1} = g(a_n)" /></td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 text-left pl-2 font-bold">能做什么</td>
                      <td className="py-2">直接算出任意一项</td>
                      <td className="py-2">从前一项推下一项</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 text-left pl-2 font-bold">求第 100 项</td>
                      <td className="py-2 text-green-600">代入 <MathTex tex="n=100" />，秒出</td>
                      <td className="py-2 text-red-600">要从第 1 项推 99 次</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-left pl-2 font-bold">高考用法</td>
                      <td className="py-2">求值、求和的终极目标</td>
                      <td className="py-2">通常作为条件给出</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-amber-700 mt-2">高考常见套路：给你递推公式 → 让你求通项公式。后面 6.2 会详细学。</p>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 5: 求和符号 Σ */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="seq-sigma" className="mb-3 scroll-mt-4">
        <Collapsible title="五、求和符号 Σ" defaultOpen storageKey="seq-prereq:sigma" headerExtra={<SpeakButton text={sequencePrereqNarrations.sigma} />}>
          <p className="text-blue-600 mb-2">🎯 学完你能：看懂带 Σ 的公式，知道它表示"批量加法"。</p>
          <div className="space-y-1 text-gray-700">

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
              <p className="font-bold text-lg text-blue-800 mb-2">Σ 就是一个"批量加法"记号</p>
              <div className="bg-white rounded-lg p-3 border border-blue-100 text-center">
                <p className="text-xl"><MathTex tex="\sum_{i=1}^{n} a_i = a_1 + a_2 + a_3 + \cdots + a_n" /></p>
              </div>
              <div className="mt-2 space-y-1">
                <p>Σ 是希腊字母，读作"西格玛"（Sigma），代表"Sum"（求和）</p>
                <p className="mt-1">怎么读这个符号：</p>
                <div className="grid grid-cols-3 gap-2 mt-1">
                  <div className="bg-white rounded-lg p-2 border border-blue-100 text-center">
                    <p className="font-bold text-blue-700">下面 i=1</p>
                    <p className="text-gray-500">从 i=1 开始</p>
                  </div>
                  <div className="bg-white rounded-lg p-2 border border-blue-100 text-center">
                    <p className="font-bold text-blue-700">上面 n</p>
                    <p className="text-gray-500">加到 i=n 为止</p>
                  </div>
                  <div className="bg-white rounded-lg p-2 border border-blue-100 text-center">
                    <p className="font-bold text-blue-700">右边 <MathTex tex="a_i" /></p>
                    <p className="text-gray-500">每一项的公式</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-bold text-gray-800 mb-2">看几个例子就明白了</p>
              <div className="space-y-2">
                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <p className="font-bold text-blue-700 mb-1">例 1：<MathTex tex="\displaystyle\sum_{i=1}^{5} i" /></p>
                  <p><MathTex tex="= 1 + 2 + 3 + 4 + 5 = 15" /></p>
                  <p className="text-gray-500 mt-1">把 i 从 1 代到 5，全部加起来</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <p className="font-bold text-green-700 mb-1">例 2：<MathTex tex="\displaystyle\sum_{i=1}^{4} i^2" /></p>
                  <p><MathTex tex="= 1^2 + 2^2 + 3^2 + 4^2 = 1 + 4 + 9 + 16 = 30" /></p>
                  <p className="text-gray-500 mt-1">把 <MathTex tex="i^2" /> 从 i=1 代到 i=4，全部加起来</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <p className="font-bold text-purple-700 mb-1">例 3：<MathTex tex="\displaystyle\sum_{i=1}^{3} 2i" /></p>
                  <p><MathTex tex="= 2 \times 1 + 2 \times 2 + 2 \times 3 = 2 + 4 + 6 = 12" /></p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <p className="font-bold text-amber-700 mb-1">例 4：<MathTex tex="\displaystyle\sum_{i=1}^{n} c = nc" />（c 是常数）</p>
                  <p>如果每一项都是同一个数 c，加 n 次就是 <MathTex tex="n \times c" /></p>
                  <p className="text-gray-500 mt-1">例：<MathTex tex="\displaystyle\sum_{i=1}^{5} 3 = 3 + 3 + 3 + 3 + 3 = 15" /></p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="font-bold text-green-800 mb-2">Σ 的基本运算规则</p>
              <div className="space-y-1.5">
                <div className="bg-white rounded-lg p-2 border border-green-100">
                  <p><strong>① 提公因子：</strong><MathTex tex="\displaystyle\sum_{i=1}^{n} c \cdot a_i = c \cdot \sum_{i=1}^{n} a_i" /></p>
                  <p className="text-gray-500 mt-1">每项都乘 c → 提到 Σ 外面</p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-green-100">
                  <p><strong>② 拆项：</strong><MathTex tex="\displaystyle\sum_{i=1}^{n} (a_i + b_i) = \sum_{i=1}^{n} a_i + \sum_{i=1}^{n} b_i" /></p>
                  <p className="text-gray-500 mt-1">加法可以拆成两个 Σ</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <p className="font-bold text-amber-800">💡 用 Σ 表示前 n 项和</p>
              <div className="bg-white rounded-lg p-3 border border-amber-100 text-center mt-1">
                <p className="text-xl"><MathTex tex="S_n = \sum_{i=1}^{n} a_i" /></p>
              </div>
              <p className="text-amber-700 mt-2">其实 <MathTex tex="S_n" /> 就是 Σ 的简写——前面学的前 n 项和，换了个写法而已</p>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* 练习 + 自测 */}
      {/* ════════════════════════════════════════════════════════ */}
      <PracticeCard title="练一练" questions={sequencePrereqPractice} />

      <QuizPanel
        title="自测：数列前置知识过关了吗？"
        questions={sequencePrereqQuiz}
        module="sequence-prereq"
      />

      {/* ═══ 打印模式：答案与解析 ═══ */}
      {isPrinting && printOptions.showAnswers && (
        <div className="mt-4">
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-gray-300 pb-2">📝 6.0 数列前置知识 — 答案与解析</h2>
          <div className="columns-2 gap-4">
            {[...sequencePrereqPractice, ...sequencePrereqQuiz].map((q, i) => (
              <div key={q.id} style={{ breakInside: 'avoid' }} className="text-base text-gray-700 mb-2">
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
