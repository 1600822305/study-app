import { Math as MathTex, Collapsible, SpeakButton, PageHeader, LessonLayout, ExportButton, PageBreak } from '@/components/shared';
import { sequenceBasicNarrations } from './data/basic-narrations';
import { sequenceBasicProgressItems } from './data/basic-progress';
import { useProgress } from '@/hooks';
import { scrollToId } from '@/lib/scroll';

export function SequenceBasicPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('sequence-basic', sequenceBasicProgressItems);

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
        <div className="text-gray-600 grid grid-cols-2 gap-x-4 gap-y-1">
          <button onClick={() => scrollToId('arith-def')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">一、等差数列的定义</button>
          <button onClick={() => scrollToId('geo-def')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">五、等比数列的定义</button>
          <button onClick={() => scrollToId('arith-formula')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">二、等差数列的通项公式</button>
          <button onClick={() => scrollToId('geo-formula')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">六、等比数列的通项公式</button>
          <button onClick={() => scrollToId('arith-sum')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">三、等差数列的前 n 项和</button>
          <button onClick={() => scrollToId('geo-sum')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">七、等比数列的前 n 项和</button>
          <button onClick={() => scrollToId('arith-props')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">四、等差数列的性质</button>
          <button onClick={() => scrollToId('geo-props')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">八、等比数列的性质</button>
          <button onClick={() => scrollToId('compare')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors col-span-2 block">九、等差 vs 等比 对照总结</button>
        </div>
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 1: 等差数列的定义 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="arith-def" className="mb-3 scroll-mt-4">
        <Collapsible title="一、等差数列的定义" defaultOpen storageKey="seq-basic:arith-def" headerExtra={<SpeakButton text={sequenceBasicNarrations.arithDef} />}>
          <div className="space-y-0 text-lg text-gray-800">

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">等差数列 = 每次加同一个数</div>
              <div className="px-3 py-2 space-y-0">
                <p className="text-center text-xl"><MathTex tex="a_{n+1} - a_n = d \quad (\text{常数})" /></p>
                <p className="mt-1">从第 2 项开始，<strong>每一项减去前一项都等于同一个数</strong>，这个数叫<strong>公差</strong>，记作 <MathTex tex="d" /></p>
              </div>
            </div>

            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">公差 d 的三种情况</div>
              <div className="px-3 py-2 space-y-0">
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-blue-50 rounded-lg p-1.5 border border-blue-200 text-center">
                    <p className="font-bold text-blue-700"><MathTex tex="d > 0" />：递增</p>
                    <p><MathTex tex="2, 5, 8, 11, \ldots" /></p>
                    <p>每次 <MathTex tex="+3" /></p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-1.5 border border-green-200 text-center">
                    <p className="font-bold text-green-700"><MathTex tex="d < 0" />：递减</p>
                    <p><MathTex tex="20, 17, 14, 11, \ldots" /></p>
                    <p>每次 <MathTex tex="-3" /></p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-1.5 border border-purple-200 text-center">
                    <p className="font-bold text-purple-700"><MathTex tex="d = 0" />：常数列</p>
                    <p><MathTex tex="5, 5, 5, 5, \ldots" /></p>
                    <p>每次 <MathTex tex="+0" /></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">怎么判断？看相邻两项的差</div>
              <div className="px-3 py-2 space-y-0">
                <p className="font-bold text-green-700">例：判断 <MathTex tex="3, 7, 11, 15, 19" /> 是否为等差数列</p>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  <div>
                    <p><MathTex tex="a_2 - a_1 = 7 - 3 = 4" /></p>
                    <p><MathTex tex="a_3 - a_2 = 11 - 7 = 4" /></p>
                  </div>
                  <div>
                    <p><MathTex tex="a_4 - a_3 = 15 - 11 = 4" /></p>
                    <p><MathTex tex="a_5 - a_4 = 19 - 15 = 4" /></p>
                  </div>
                </div>
                <p className="mt-1">差都等于 4（常数），所以是等差数列，<MathTex tex="d = 4" /></p>
              </div>
            </div>

            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">生活中的等差数列</div>
              <div className="px-3 py-2 space-y-0">
                <p>每月固定存 500 元：500, 1000, 1500, 2000, ...（<MathTex tex="d = 500" />）</p>
                <p>温度每小时降 2°C：30, 28, 26, 24, ...（<MathTex tex="d = -2" />）</p>
                <p>楼层编号：1, 2, 3, 4, 5, ...（<MathTex tex="d = 1" />）</p>
              </div>
            </div>

            <div className="border border-gray-300 rounded overflow-hidden" style={{ breakInside: 'avoid' }}>
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">动手算一算</div>
              <div className="px-3 py-2 grid grid-cols-2 gap-1 text-lg">
                <p>① 数列 5, 9, 13, 17, ... 的 <MathTex tex="d =" /></p>
                <p>④ 数列 100, 95, 90, ... 的 <MathTex tex="d =" /></p>
                <p>② 数列 3, 3, 3, 3, ... 的 <MathTex tex="d =" /></p>
                <p>⑤ <MathTex tex="a_1=1, d=6" />，写前 4 项</p>
                <p>③ 判断 1, 4, 9, 16 是不是等差数列</p>
                <p>⑥ 判断 -2, 1, 4, 7, 10 是不是等差数列</p>
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
          <div className="space-y-0 text-lg text-gray-800">

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">公式（必背）</div>
              <div className="px-3 py-2 space-y-0">
                <p className="text-center text-xl"><MathTex tex="a_n = a_1 + (n-1)d" /></p>
                <p className="mt-1">读法：第 <MathTex tex="n" /> 项 = 首项 + (<MathTex tex="n-1" />) 个公差</p>
              </div>
            </div>

            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">为什么是 n-1 而不是 n？</div>
              <div className="px-3 py-2 space-y-0">
                <p>从第 1 项走到第 <MathTex tex="n" /> 项，需要走 <MathTex tex="n-1" /> 步：</p>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  <div>
                    <p><MathTex tex="a_1 \to a_2" />：加了 <strong>1</strong> 次 <MathTex tex="d" /></p>
                    <p><MathTex tex="a_1 \to a_3" />：加了 <strong>2</strong> 次 <MathTex tex="d" /></p>
                  </div>
                  <div>
                    <p><MathTex tex="a_1 \to a_4" />：加了 <strong>3</strong> 次 <MathTex tex="d" /></p>
                    <p><MathTex tex="a_1 \to a_n" />：加了 <MathTex tex="n-1" /> 次 <MathTex tex="d" /></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">实战演练</div>
              <div className="px-3 py-2 space-y-0">
                <p className="font-bold text-blue-700">例 1：已知 <MathTex tex="a_1 = 2,\; d = 3" />，求 <MathTex tex="a_{20}" /></p>
                <p><MathTex tex="a_{20} = 2 + (20-1) \times 3 = 2 + 57 = 59" /></p>

                <p className="font-bold text-blue-700 mt-1">例 2：已知 <MathTex tex="a_1 = 100,\; d = -7" />，求 <MathTex tex="a_{10}" /></p>
                <p><MathTex tex="a_{10} = 100 + (10-1) \times (-7) = 100 - 63 = 37" /></p>

                <div className="border-t border-gray-200 pt-1 mt-1">
                  <p className="font-bold text-green-700">例 3（反向求公差）：已知 <MathTex tex="a_1 = 5,\; a_{11} = 35" />，求 <MathTex tex="d" /></p>
                  <p>代入公式：<MathTex tex="35 = 5 + (11-1)d" /></p>
                  <p>化简：<MathTex tex="30 = 10d \Rightarrow d = 3" /></p>
                </div>
              </div>
            </div>

            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-800 border-b border-purple-300 bg-purple-100 text-lg">推广形式（从任意项出发）</div>
              <div className="px-3 py-2 space-y-0">
                <p className="text-center text-xl"><MathTex tex="a_n = a_m + (n-m)d" /></p>
                <p className="mt-1">不一定从第 1 项出发，从<strong>任意已知项</strong>都能推其他项</p>
                <p className="mt-1">例：已知 <MathTex tex="a_3 = 10,\; d = 4" />，求 <MathTex tex="a_8" />：<MathTex tex="a_8 = 10 + (8-3) \times 4 = 30" /></p>
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
          <div className="space-y-0 text-lg text-gray-800">

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">两种写法（必背）</div>
              <div className="px-3 py-2 space-y-0">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-blue-50 rounded-lg p-2 border border-blue-200 text-center">
                    <p className="font-bold">写法 A：知道首项和末项</p>
                    <p className="text-xl mt-1"><MathTex tex="S_n = \dfrac{n(a_1 + a_n)}{2}" /></p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-2 border border-green-200 text-center">
                    <p className="font-bold">写法 B：知道首项和公差</p>
                    <p className="text-xl mt-1"><MathTex tex="S_n = na_1 + \dfrac{n(n-1)}{2}d" /></p>
                  </div>
                </div>
                <p className="mt-1">两个本质相同（B 是把 A 中的 <MathTex tex="a_n" /> 展开），根据已知条件选方便的</p>
              </div>
            </div>

            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">公式怎么来的？——高斯的故事</div>
              <div className="px-3 py-2 space-y-0">
                <p className="font-bold">求 <MathTex tex="1 + 2 + 3 + \cdots + 100 = \;?" /></p>
                <p className="mt-1">高斯发现了<strong>首尾配对</strong>：</p>
                <p className="mt-1"><MathTex tex="S = 1 + 2 + 3 + \cdots + 98 + 99 + 100" /></p>
                <p><MathTex tex="S = 100 + 99 + 98 + \cdots + 3 + 2 + 1" /></p>
                <p className="mt-1">上下对应相加：<MathTex tex="2S = 101 \times 100 = 10100 \Rightarrow S = 5050" /></p>
                <p className="mt-1">这就是<strong>倒序相加法</strong>：正着写一遍、倒着写一遍，每对都等于 <MathTex tex="a_1 + a_n" /></p>
              </div>
            </div>

            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">实战演练</div>
              <div className="px-3 py-2 space-y-0">
                <p className="font-bold text-blue-700">例 1：求 <MathTex tex="2 + 5 + 8 + \cdots + 29" /> 的和</p>
                <p><MathTex tex="a_1 = 2,\; d = 3" />，先求项数：<MathTex tex="29 = 2 + (n-1) \times 3 \Rightarrow n = 10" /></p>
                <p>用写法 A：<MathTex tex="S_{10} = \dfrac{10 \times (2 + 29)}{2} = 155" /></p>

                <div className="border-t border-gray-200 pt-1 mt-1">
                  <p className="font-bold text-blue-700">例 2：<MathTex tex="a_1 = 1,\; d = 2" />，求 <MathTex tex="S_{20}" /></p>
                  <p>用写法 B：<MathTex tex="S_{20} = 20 \times 1 + \dfrac{20 \times 19}{2} \times 2 = 20 + 380 = 400" /></p>
                </div>
              </div>
            </div>

            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">记忆口诀</div>
              <div className="px-3 py-2 space-y-0">
                <p><strong>首项加末项，乘以项数除以 2</strong>（跟梯形面积公式一模一样：上底加下底乘高除以 2）</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 4: 等差数列的性质 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="arith-props" className="mb-3 scroll-mt-4">
        <Collapsible title="四、等差数列的性质" defaultOpen storageKey="seq-basic:arith-props" headerExtra={<SpeakButton text={sequenceBasicNarrations.arithProps} />}>
          <div className="space-y-0 text-lg text-gray-800">

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">性质 1：下标和相等 → 项的和也相等</div>
              <div className="px-3 py-2 space-y-0">
                <p className="text-center text-xl"><MathTex tex="m + n = p + q \;\Rightarrow\; a_m + a_n = a_p + a_q" /></p>
                <p className="mt-1">例：<MathTex tex="a_3 + a_7 = a_4 + a_6 = a_1 + a_9 = 2a_5" />（下标之和都是 10）</p>
              </div>
            </div>

            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">性质 2：等差中项</div>
              <div className="px-3 py-2 space-y-0">
                <p className="text-center text-xl"><MathTex tex="a, A, b \text{ 成等差} \;\Rightarrow\; A = \dfrac{a + b}{2}" /></p>
                <p className="mt-1"><MathTex tex="A" /> 叫<strong>等差中项</strong>，就是平均数。例：<MathTex tex="3, \underline{\quad}, 11" /> → 中间 = <MathTex tex="\dfrac{3+11}{2} = 7" /></p>
              </div>
            </div>

            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-800 border-b border-purple-300 bg-purple-100 text-lg">性质 3：Sₙ 是关于 n 的二次函数</div>
              <div className="px-3 py-2 space-y-0">
                <p>展开：<MathTex tex="S_n = \dfrac{d}{2}n^2 + \left(a_1 - \dfrac{d}{2}\right)n" />，是二次函数且<strong>没有常数项</strong></p>
                <p className="mt-1">判断依据：<MathTex tex="S_n = An^2 + Bn" />（无常数项）→ 一定是等差数列</p>
              </div>
            </div>

            <div className="border border-red-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-red-800 border-b border-red-300 bg-red-100 text-lg">高考常见套路</div>
              <div className="px-3 py-2 space-y-0">
                <p>题目给 <MathTex tex="a_3 + a_7 = 20" />，问 <MathTex tex="a_5" /> 或 <MathTex tex="S_9" /></p>
                <p className="mt-1">用性质 1：<MathTex tex="a_3 + a_7 = 2a_5 = 20 \Rightarrow a_5 = 10" /></p>
                <p><MathTex tex="S_9 = \dfrac{9 \times 2a_5}{2} = 9 \times 10 = 90" /></p>
                <p className="mt-1 font-bold text-red-700">不需要求 <MathTex tex="a_1" /> 和 <MathTex tex="d" />，直接秒杀</p>
              </div>
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
          <div className="space-y-0 text-lg text-gray-800">

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">等比数列 = 每次乘同一个数</div>
              <div className="px-3 py-2 space-y-0">
                <p className="text-center text-xl"><MathTex tex="\dfrac{a_{n+1}}{a_n} = q \quad (q \neq 0,\; a_n \neq 0)" /></p>
                <p className="mt-1">从第 2 项开始，<strong>每一项除以前一项都等于同一个数</strong>，这个数叫<strong>公比</strong>，记作 <MathTex tex="q" /></p>
              </div>
            </div>

            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">公比 q 的三种情况</div>
              <div className="px-3 py-2 space-y-0">
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-blue-50 rounded-lg p-1.5 border border-blue-200 text-center">
                    <p className="font-bold text-blue-700"><MathTex tex="q > 1" />：爆发增长</p>
                    <p><MathTex tex="2, 6, 18, 54, \ldots" /></p>
                    <p>每次 <MathTex tex="\times 3" /></p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-1.5 border border-green-200 text-center">
                    <p className="font-bold text-green-700"><MathTex tex="0 < q < 1" />：衰减</p>
                    <p><MathTex tex="8, 4, 2, 1, \ldots" /></p>
                    <p>每次 <MathTex tex="\times \frac{1}{2}" /></p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-1.5 border border-purple-200 text-center">
                    <p className="font-bold text-purple-700"><MathTex tex="q < 0" />：正负交替</p>
                    <p><MathTex tex="1, -2, 4, -8, \ldots" /></p>
                    <p>每次 <MathTex tex="\times (-2)" /></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-red-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-red-800 border-b border-red-300 bg-red-100 text-lg">两个重要限制</div>
              <div className="px-3 py-2 space-y-0">
                <p>公比 <MathTex tex="q \neq 0" />（乘以 0 所有项变 0，没意义）</p>
                <p>每一项 <MathTex tex="a_n \neq 0" />（某项为 0，除以 0 无意义）</p>
              </div>
            </div>

            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">生活中的等比数列</div>
              <div className="px-3 py-2 space-y-0">
                <p>细胞分裂：1, 2, 4, 8, 16, ...（<MathTex tex="q = 2" />）</p>
                <p>银行复利：本金每年变成原来的 1.05 倍（<MathTex tex="q = 1.05" />）</p>
                <p>半衰期：放射性物质每过一段时间剩一半（<MathTex tex="q = 0.5" />）</p>
              </div>
            </div>

            <div className="border border-gray-300 rounded overflow-hidden" style={{ breakInside: 'avoid' }}>
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">动手算一算</div>
              <div className="px-3 py-2 grid grid-cols-2 gap-1 text-lg">
                <p>① 数列 2, 6, 18, 54, ... 的 <MathTex tex="q =" /></p>
                <p>④ 数列 1, -1, 1, -1, ... 的 <MathTex tex="q =" /></p>
                <p>② 数列 81, 27, 9, 3, ... 的 <MathTex tex="q =" /></p>
                <p>⑤ <MathTex tex="a_1=3, q=2" />，写前 4 项</p>
                <p>③ 判断 1, 2, 4, 7 是不是等比数列</p>
                <p>⑥ 判断 -1, 2, -4, 8 是不是等比数列</p>
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
          <div className="space-y-0 text-lg text-gray-800">

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">公式（必背）</div>
              <div className="px-3 py-2 space-y-0">
                <p className="text-center text-xl"><MathTex tex="a_n = a_1 \cdot q^{n-1}" /></p>
                <p className="mt-1">读法：第 <MathTex tex="n" /> 项 = 首项 <MathTex tex="\times" /> 公比的 <MathTex tex="(n-1)" /> 次方</p>
              </div>
            </div>

            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">和等差对比记忆</div>
              <div className="px-3 py-2 space-y-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-center">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="py-1"></th>
                        <th className="py-1 text-blue-700">等差数列</th>
                        <th className="py-1 text-green-700">等比数列</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 font-bold">核心运算</td>
                        <td className="py-1"><strong>加</strong>法</td>
                        <td className="py-1"><strong>乘</strong>法</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">通项公式</td>
                        <td className="py-1"><MathTex tex="a_1 + (n-1)d" /></td>
                        <td className="py-1"><MathTex tex="a_1 \cdot q^{n-1}" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-1">等差是"首项<strong>加上</strong> <MathTex tex="n-1" /> 个公差"，等比是"首项<strong>乘上</strong> <MathTex tex="n-1" /> 个公比"</p>
              </div>
            </div>

            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">实战演练</div>
              <div className="px-3 py-2 space-y-0">
                <p className="font-bold text-blue-700">例 1：已知 <MathTex tex="a_1 = 3,\; q = 2" />，求 <MathTex tex="a_6" /></p>
                <p><MathTex tex="a_6 = 3 \times 2^{5} = 3 \times 32 = 96" /></p>

                <p className="font-bold text-blue-700 mt-1">例 2：已知 <MathTex tex="a_1 = 1,\; q = -2" />，求 <MathTex tex="a_5" /></p>
                <p><MathTex tex="a_5 = 1 \times (-2)^4 = 16" />（偶数次方变正）</p>

                <div className="border-t border-gray-200 pt-1 mt-1">
                  <p className="font-bold text-green-700">例 3（反向求公比）：已知 <MathTex tex="a_1 = 2,\; a_4 = 54" />，求 <MathTex tex="q" /></p>
                  <p><MathTex tex="54 = 2 \times q^3 \Rightarrow q^3 = 27 \Rightarrow q = 3" /></p>
                </div>
              </div>
            </div>

            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-800 border-b border-purple-300 bg-purple-100 text-lg">推广形式</div>
              <div className="px-3 py-2 space-y-0">
                <p className="text-center text-xl"><MathTex tex="a_n = a_m \cdot q^{n-m}" /></p>
                <p className="mt-1">从任意已知项出发都能推其他项（和等差推广形式对应）</p>
              </div>
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
          <div className="space-y-0 text-lg text-gray-800">

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">公式（必背，注意分类！）</div>
              <div className="px-3 py-2 space-y-0">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-blue-50 rounded-lg p-2 border border-blue-200 text-center">
                    <p className="font-bold">当 <MathTex tex="q = 1" /> 时</p>
                    <p className="text-xl mt-1"><MathTex tex="S_n = na_1" /></p>
                    <p className="mt-1">（每项都一样，加 n 次）</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-2 border border-green-200 text-center">
                    <p className="font-bold">当 <MathTex tex="q \neq 1" /> 时</p>
                    <p className="text-xl mt-1"><MathTex tex="S_n = \dfrac{a_1(1 - q^n)}{1 - q}" /></p>
                  </div>
                </div>
                <p className="mt-1 font-bold text-red-700">必须分两种情况！忘了分类讨论 = 直接扣分</p>
              </div>
            </div>

            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">公式怎么来的？——错位相减法</div>
              <div className="px-3 py-2 space-y-0">
                <p>当 <MathTex tex="q \neq 1" /> 时：</p>
                <p className="mt-1"><MathTex tex="S_n = a_1 + a_1 q + a_1 q^2 + \cdots + a_1 q^{n-1}" /> …… ①</p>
                <p>两边乘 <MathTex tex="q" />：</p>
                <p><MathTex tex="qS_n = a_1 q + a_1 q^2 + \cdots + a_1 q^n" /> …… ②</p>
                <p className="mt-1">① - ②：<MathTex tex="(1-q)S_n = a_1 - a_1 q^n = a_1(1 - q^n)" /></p>
                <p><MathTex tex="S_n = \dfrac{a_1(1 - q^n)}{1 - q}" /></p>
                <p className="mt-1">核心思想：乘以 <MathTex tex="q" /> 后错一位，中间项全消，只剩首尾</p>
              </div>
            </div>

            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">实战演练</div>
              <div className="px-3 py-2 space-y-0">
                <p className="font-bold text-blue-700">例 1：<MathTex tex="a_1 = 1,\; q = 2" />，求 <MathTex tex="S_5" /></p>
                <p><MathTex tex="S_5 = \dfrac{1 \times (1 - 2^5)}{1 - 2} = \dfrac{-31}{-1} = 31" /></p>
                <p>验证：<MathTex tex="1 + 2 + 4 + 8 + 16 = 31 \checkmark" /></p>

                <div className="border-t border-gray-200 pt-1 mt-1">
                  <p className="font-bold text-blue-700">例 2：<MathTex tex="a_1 = 3,\; q = 1" />，求 <MathTex tex="S_{10}" /></p>
                  <p><MathTex tex="q = 1" />，每项都是 3：<MathTex tex="S_{10} = 10 \times 3 = 30" /></p>
                </div>

                <div className="border-t border-gray-200 pt-1 mt-1">
                  <p className="font-bold text-blue-700">例 3：<MathTex tex="a_1 = 8,\; q = \dfrac{1}{2}" />，求 <MathTex tex="S_4" /></p>
                  <p><MathTex tex="S_4 = \dfrac{8(1 - (\frac{1}{2})^4)}{1 - \frac{1}{2}} = \dfrac{8 \times \frac{15}{16}}{\frac{1}{2}} = 15" /></p>
                  <p>验证：<MathTex tex="8 + 4 + 2 + 1 = 15 \checkmark" /></p>
                </div>
              </div>
            </div>

            <div className="border border-red-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-red-800 border-b border-red-300 bg-red-100 text-lg">高考丢分重灾区</div>
              <div className="px-3 py-2 space-y-0">
                <p>题目没说 <MathTex tex="q \neq 1" />，你就<strong>必须分类讨论</strong></p>
                <p className="mt-1">先写"当 <MathTex tex="q = 1" /> 时，<MathTex tex="S_n = na_1" />"</p>
                <p>再写"当 <MathTex tex="q \neq 1" /> 时，<MathTex tex="S_n = \dfrac{a_1(1-q^n)}{1-q}" />"</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 8: 等比数列的性质 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="geo-props" className="mb-3 scroll-mt-4">
        <Collapsible title="八、等比数列的性质" defaultOpen storageKey="seq-basic:geo-props" headerExtra={<SpeakButton text={sequenceBasicNarrations.geoProps} />}>
          <div className="space-y-0 text-lg text-gray-800">

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">性质 1：下标和相等 → 项的积也相等</div>
              <div className="px-3 py-2 space-y-0">
                <p className="text-center text-xl"><MathTex tex="m + n = p + q \;\Rightarrow\; a_m \cdot a_n = a_p \cdot a_q" /></p>
                <p className="mt-1">和等差对比：等差是<strong>和</strong>相等，等比是<strong>积</strong>相等</p>
                <p>例：<MathTex tex="a_2 \cdot a_8 = a_4 \cdot a_6 = a_5^2" /></p>
              </div>
            </div>

            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">性质 2：等比中项</div>
              <div className="px-3 py-2 space-y-0">
                <p className="text-center text-xl"><MathTex tex="a, G, b \text{ 成等比} \;\Rightarrow\; G^2 = ab" /></p>
                <p className="mt-1">即 <MathTex tex="G = \pm\sqrt{ab}" />（注意正负号！）</p>
                <p>例：<MathTex tex="2, \underline{\quad}, 8" /> 成等比 → <MathTex tex="G^2 = 16 \Rightarrow G = \pm 4" /></p>
              </div>
            </div>

            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-800 border-b border-purple-300 bg-purple-100 text-lg">性质 3：分段和也成等比</div>
              <div className="px-3 py-2 space-y-0">
                <p><MathTex tex="S_n" />，<MathTex tex="S_{2n} - S_n" />，<MathTex tex="S_{3n} - S_{2n}" /> 这三段也构成等比数列（公比 <MathTex tex="q^n" />）</p>
                <p className="mt-1">把前 <MathTex tex="n" /> 项、中间 <MathTex tex="n" /> 项、再后 <MathTex tex="n" /> 项分别求和，它们之间的比值恒定</p>
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
          <div className="space-y-0 text-lg text-gray-800">

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">完整对照表（必背）</div>
              <div className="px-3 py-2 space-y-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-center">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="py-1 text-left pl-2 font-bold text-gray-700"></th>
                        <th className="py-1 font-bold text-blue-700">等差数列</th>
                        <th className="py-1 font-bold text-green-700">等比数列</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-left pl-2 font-bold">定义</td>
                        <td className="py-1"><MathTex tex="a_{n+1} - a_n = d" /></td>
                        <td className="py-1"><MathTex tex="\frac{a_{n+1}}{a_n} = q" /></td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-left pl-2 font-bold">核心运算</td>
                        <td className="py-1">加法</td>
                        <td className="py-1">乘法</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-left pl-2 font-bold">通项公式</td>
                        <td className="py-1"><MathTex tex="a_1 + (n-1)d" /></td>
                        <td className="py-1"><MathTex tex="a_1 \cdot q^{n-1}" /></td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-left pl-2 font-bold">前 n 项和</td>
                        <td className="py-1"><MathTex tex="\frac{n(a_1+a_n)}{2}" /></td>
                        <td className="py-1"><MathTex tex="\frac{a_1(1-q^n)}{1-q}" /></td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-left pl-2 font-bold">中项</td>
                        <td className="py-1"><MathTex tex="A = \frac{a+b}{2}" /></td>
                        <td className="py-1"><MathTex tex="G^2 = ab" /></td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-left pl-2 font-bold">下标性质</td>
                        <td className="py-1"><MathTex tex="a_m + a_n = a_p + a_q" /></td>
                        <td className="py-1"><MathTex tex="a_m \cdot a_n = a_p \cdot a_q" /></td>
                      </tr>
                      <tr>
                        <td className="py-1 text-left pl-2 font-bold">函数类型</td>
                        <td className="py-1">一次函数（线性）</td>
                        <td className="py-1">指数函数</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">高考解题核心方法：基本量法</div>
              <div className="px-3 py-2 space-y-0">
                <p>绝大多数数列题都可以用这个方法解决：</p>
                <p className="mt-1"><strong>等差数列的基本量</strong>：<MathTex tex="a_1" /> 和 <MathTex tex="d" />（知道这两个就能算一切）</p>
                <p><strong>等比数列的基本量</strong>：<MathTex tex="a_1" /> 和 <MathTex tex="q" />（知道这两个就能算一切）</p>
                <p className="mt-1">套路：题目给两个条件 → 列两个方程 → 解出基本量 → 代入求答案</p>
              </div>
            </div>

            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">基本量法实战</div>
              <div className="px-3 py-2 space-y-0">
                <p className="font-bold">题目：等差数列中，<MathTex tex="a_3 = 7,\; a_7 = 19" />，求通项公式</p>
                <p className="mt-1">列方程：<MathTex tex="a_3 = a_1 + 2d = 7" /> ①，<MathTex tex="a_7 = a_1 + 6d = 19" /> ②</p>
                <p>② - ①：<MathTex tex="4d = 12 \Rightarrow d = 3" /></p>
                <p>代入 ①：<MathTex tex="a_1 = 7 - 6 = 1" /></p>
                <p>所以 <MathTex tex="a_n = 1 + (n-1) \times 3 = 3n - 2" /></p>
              </div>
            </div>

            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-800 border-b border-purple-300 bg-purple-100 text-lg">特殊技巧：设三项</div>
              <div className="px-3 py-2 space-y-0">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="font-bold text-blue-700">三数成等差</p>
                    <p>设为 <MathTex tex="a-d,\; a,\; a+d" /></p>
                    <p>三项之和 = <MathTex tex="3a" />，直接消 <MathTex tex="d" /></p>
                  </div>
                  <div>
                    <p className="font-bold text-green-700">三数成等比</p>
                    <p>设为 <MathTex tex="\dfrac{a}{q},\; a,\; aq" /></p>
                    <p>三项之积 = <MathTex tex="a^3" />，直接消 <MathTex tex="q" /></p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      </LessonLayout>
    </div>
  );
}
