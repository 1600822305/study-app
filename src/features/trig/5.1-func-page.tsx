import { Math as MathTex, Collapsible, SpeakButton, PageHeader, LessonLayout, ExportButton, PageBreak, PracticeCard } from '@/components/shared';
import { trigFuncNarrations } from './data/5.1/5.1-func-narrations';
import { trigFuncProgressItems } from './data/5.1/5.1-func-progress';
import { trigFuncExam, trigGraphPractice } from './data/5.1/5.1-func-questions';
import { TrigFuncAnswers, trigFuncExplanations } from './5.1-func-answers';
import { useProgress } from '@/hooks';
import { usePrintMode } from '@/hooks/usePrintMode';
import { scrollToId } from '@/lib/scroll';
import { SinGraphDiagram, CosGraphDiagram, TanGraphDiagram, SymNegative, SymPiMinus, SymPiPlus, SymHalfPiMinus, SymHalfPiPlus } from './data/5.1/trig-diagrams';
import { DebugToggle } from './MafsDebug.tsx';

export function TrigFuncPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('trig-func', trigFuncProgressItems);
  const { isPrinting, printOptions } = usePrintMode();

  return (
    <div>
      <PageHeader
        stage="第五阶段 · 三角世界"
        title="5.1 三角函数"
        narration={trigFuncNarrations.intro}
        subtitle="诱导公式、三角函数图像与性质、y=Asin(ωx+φ)"
        tags={[
          { label: '难度 ★★★☆☆', color: 'amber' },
          { label: '高考必考', color: 'blue' },
          { label: '约3天', color: 'purple' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="5.1 三角函数" />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-3 mb-0">
        <p className="font-bold text-gray-800 mb-2">📋 知识地图</p>
        <div className="text-gray-600 space-y-1">
          <button onClick={() => scrollToId('tf-induction')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">一、诱导公式</button>
          <button onClick={() => scrollToId('tf-graphs')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">二、三角函数的图像与性质</button>
          <button onClick={() => scrollToId('tf-transform')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">三、y = Asin(ωx+φ) 的图像变换</button>
          <button onClick={() => scrollToId('tf-properties')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">四、性质综合应用</button>
        </div>
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 1: 诱导公式 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="tf-induction" className="mb-3 scroll-mt-4">
        <Collapsible title="一、诱导公式" defaultOpen storageKey="trig-func:induction" headerExtra={<SpeakButton text={trigFuncNarrations.induction} />}>
          <p className="text-blue-600 mb-1">🎯 学完你能：把任意角的三角函数化简为锐角的三角函数。</p>
          <p className="text-gray-600 mb-2 text-sm">为什么要学？高考化简题必用，先把"大角度"变成"小角度"再算。</p>
          <div className="space-y-1 text-gray-700">

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <p className="font-bold text-amber-800 mb-2">📖 先搞懂几个术语</p>
              <div className="space-y-2">
                <p><strong>函数名</strong>：就是 sin、cos、tan 这些名字。比如 sin 30° 的函数名是 sin，cos 60° 的函数名是 cos</p>
                <p><strong>函数名互换</strong>：sin 变成 cos，cos 变成 sin（tan 变成 cot，cot 变成 tan）</p>
                <p><strong>函数名不变</strong>：原来是 sin 结果还是 sin，原来是 cos 结果还是 cos</p>
                <p><strong>象限</strong>：坐标系被 x 轴和 y 轴分成的四个区域（前置知识里学过），角度落在哪个区域就是哪个象限</p>
                <p><strong>符号</strong>：正号（+）或负号（-），也就是结果前面要不要加负号</p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <p className="font-bold text-amber-800 mb-1">先说一下 α 是什么</p>
              <p>α（读作"阿尔法"）就是<strong>任意一个角度</strong>，你可以把它想成 30°、45°、60° 等任何角。</p>
              <p className="mt-1">写 α 是因为公式要<strong>对所有角度都成立</strong>，不能只写某一个具体的数。就像代数里用 x 代表"任意一个数"一样。</p>
            </div>

            <div className="bg-red-50 border-2 border-red-300 rounded-xl p-3">
              <p className="font-bold text-lg text-red-700 mb-2">🎯 核心：只需记住 3 条规律！</p>
              <div className="space-y-1.5">
                <div className="bg-white rounded-lg p-2 border border-red-200 flex gap-2 items-baseline">
                  <span className="font-bold text-blue-700 whitespace-nowrap">规律①</span>
                  <span>取负角 → cos 不变，sin <span className="text-red-600 font-bold">变号</span></span>
                </div>
                <div className="bg-white rounded-lg p-2 border border-red-200 flex gap-2 items-baseline">
                  <span className="font-bold text-blue-700 whitespace-nowrap">规律②</span>
                  <span>180° ± 角度 → 函数名<strong>不变</strong>，<span className="text-red-600 font-bold">只看正负号</span></span>
                </div>
                <div className="bg-white rounded-lg p-2 border border-red-200 flex gap-2 items-baseline">
                  <span className="font-bold text-green-700 whitespace-nowrap">规律③</span>
                  <span>90° ± 角度 → <span className="text-green-700 font-bold">sin↔cos 互换</span>，<span className="text-red-600 font-bold">再看正负号</span></span>
                </div>
              </div>
              <p className="text-red-800 font-bold mt-2">一句话：把"不认识的角"变成"认识的角"来算。</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
              <p className="font-bold text-gray-800 mb-2">📌 除了 3 条规律，还要记住这几个基础公式</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white rounded-lg p-2 border border-gray-200 text-center">
                  <p className="text-lg"><MathTex tex="\sin^2\alpha + \cos^2\alpha = 1" /></p>
                  <p className="text-gray-500 mt-1">永远成立，最常用</p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-gray-200 text-center">
                  <p className="text-lg"><MathTex tex="\tan\alpha = \dfrac{\sin\alpha}{\cos\alpha}" /></p>
                  <p className="text-gray-500 mt-1">tan 的定义</p>
                </div>
              </div>
              <p className="mt-2 text-gray-600">这两个 + 3 条规律 + 特殊角值表 = 诱导公式你需要记的<strong>全部</strong>。</p>
            </div>

            <PageBreak />
            <div className="bg-amber-50 rounded-lg p-3 border border-amber-200 overflow-x-auto">
              <table className="w-full text-center border-collapse">
                <thead>
                  <tr className="border-b-2 border-amber-300">
                    <th className="py-1.5 px-2 text-left">角度</th>
                    <th className="py-1.5 px-1">0°</th>
                    <th className="py-1.5 px-1">30°</th>
                    <th className="py-1.5 px-1">45°</th>
                    <th className="py-1.5 px-1">60°</th>
                    <th className="py-1.5 px-1">90°</th>
                    <th className="py-1.5 px-1">120°</th>
                    <th className="py-1.5 px-1">150°</th>
                    <th className="py-1.5 px-1">180°</th>
                    <th className="py-1.5 px-1">270°</th>
                    <th className="py-1.5 px-1">360°</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-amber-200">
                    <td className="py-1.5 px-2 text-left font-bold">弧度</td>
                    <td className="py-1.5 px-1">0</td>
                    <td className="py-1.5 px-1"><MathTex tex="\frac{\pi}{6}" /></td>
                    <td className="py-1.5 px-1"><MathTex tex="\frac{\pi}{4}" /></td>
                    <td className="py-1.5 px-1"><MathTex tex="\frac{\pi}{3}" /></td>
                    <td className="py-1.5 px-1"><MathTex tex="\frac{\pi}{2}" /></td>
                    <td className="py-1.5 px-1"><MathTex tex="\frac{2\pi}{3}" /></td>
                    <td className="py-1.5 px-1"><MathTex tex="\frac{5\pi}{6}" /></td>
                    <td className="py-1.5 px-1"><MathTex tex="\pi" /></td>
                    <td className="py-1.5 px-1"><MathTex tex="\frac{3\pi}{2}" /></td>
                    <td className="py-1.5 px-1"><MathTex tex="2\pi" /></td>
                  </tr>
                  <tr className="border-b border-amber-200">
                    <td className="py-1.5 px-2 text-left font-bold">sin</td>
                    <td className="py-1.5 px-1">0</td>
                    <td className="py-1.5 px-1"><MathTex tex="\frac{1}{2}" /></td>
                    <td className="py-1.5 px-1"><MathTex tex="\frac{\sqrt{2}}{2}" /></td>
                    <td className="py-1.5 px-1"><MathTex tex="\frac{\sqrt{3}}{2}" /></td>
                    <td className="py-1.5 px-1">1</td>
                    <td className="py-1.5 px-1"><MathTex tex="\frac{\sqrt{3}}{2}" /></td>
                    <td className="py-1.5 px-1"><MathTex tex="\frac{1}{2}" /></td>
                    <td className="py-1.5 px-1">0</td>
                    <td className="py-1.5 px-1">-1</td>
                    <td className="py-1.5 px-1">0</td>
                  </tr>
                  <tr className="border-b border-amber-200">
                    <td className="py-1.5 px-2 text-left font-bold">cos</td>
                    <td className="py-1.5 px-1">1</td>
                    <td className="py-1.5 px-1"><MathTex tex="\frac{\sqrt{3}}{2}" /></td>
                    <td className="py-1.5 px-1"><MathTex tex="\frac{\sqrt{2}}{2}" /></td>
                    <td className="py-1.5 px-1"><MathTex tex="\frac{1}{2}" /></td>
                    <td className="py-1.5 px-1">0</td>
                    <td className="py-1.5 px-1"><MathTex tex="-\frac{1}{2}" /></td>
                    <td className="py-1.5 px-1"><MathTex tex="-\frac{\sqrt{3}}{2}" /></td>
                    <td className="py-1.5 px-1">-1</td>
                    <td className="py-1.5 px-1">0</td>
                    <td className="py-1.5 px-1">1</td>
                  </tr>
                  <tr>
                    <td className="py-1.5 px-2 text-left font-bold">tan</td>
                    <td className="py-1.5 px-1">0</td>
                    <td className="py-1.5 px-1"><MathTex tex="\frac{\sqrt{3}}{3}" /></td>
                    <td className="py-1.5 px-1">1</td>
                    <td className="py-1.5 px-1"><MathTex tex="\sqrt{3}" /></td>
                    <td className="py-1.5 px-1">—</td>
                    <td className="py-1.5 px-1"><MathTex tex="-\sqrt{3}" /></td>
                    <td className="py-1.5 px-1"><MathTex tex="-\frac{\sqrt{3}}{3}" /></td>
                    <td className="py-1.5 px-1">0</td>
                    <td className="py-1.5 px-1">—</td>
                    <td className="py-1.5 px-1">0</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-xl p-3">
              <p className="font-bold text-lg text-purple-800 mb-2">💡 用 30° 验证 3 条规律</p>
              <p className="mb-2">不用理解原理，直接看数字验证——<strong>算出来一样，规律就是对的。</strong></p>

              <div className="space-y-0">
                <div className="bg-white rounded-lg p-2 border border-purple-100 flex items-center gap-2">
                  <div className="flex-1">
                    <p className="font-bold text-blue-700 mb-1">① 取负角：-30°</p>
                    <p><MathTex tex="\sin(-30°) = -\sin 30° = -\tfrac{1}{2}" /> ← sin <span className="text-red-600 font-bold">变号</span></p>
                    <p><MathTex tex="\cos(-30°) = \cos 30° = \tfrac{\sqrt{3}}{2}" /> ← cos <strong>不变</strong></p>
                    <p className="mt-1"><strong>→ 验证了规律①</strong></p>
                  </div>
                  <div className="flex-shrink-0 w-[120px]"><SymNegative /></div>
                </div>

                <div className="bg-white rounded-lg p-2 border border-purple-100 flex items-center gap-2">
                  <div className="flex-1">
                    <p className="font-bold text-blue-700 mb-1">② 180° - 30° = 150°</p>
                    <p><MathTex tex="\sin(150°) = \sin 30° = \tfrac{1}{2}" /> ← sin <strong>不变</strong></p>
                    <p><MathTex tex="\cos(150°) = -\cos 30° = -\tfrac{\sqrt{3}}{2}" /> ← cos <span className="text-red-600 font-bold">变号</span></p>
                    <p className="mt-1"><strong>→ 验证了规律②</strong></p>
                  </div>
                  <div className="flex-shrink-0 w-[120px]"><SymPiMinus /></div>
                </div>

                <div className="bg-white rounded-lg p-2 border border-purple-100 flex items-center gap-2">
                  <div className="flex-1">
                    <p className="font-bold text-blue-700 mb-1">③ 180° + 30° = 210°</p>
                    <p><MathTex tex="\sin(210°) = -\sin 30° = -\tfrac{1}{2}" /> ← sin <span className="text-red-600 font-bold">变号</span></p>
                    <p><MathTex tex="\cos(210°) = -\cos 30° = -\tfrac{\sqrt{3}}{2}" /> ← cos <span className="text-red-600 font-bold">变号</span></p>
                    <p className="mt-1"><strong>→ 验证了规律②</strong></p>
                  </div>
                  <div className="flex-shrink-0 w-[120px]"><SymPiPlus /></div>
                </div>

                <div className="bg-white rounded-lg p-2 border border-purple-100 flex items-center gap-2">
                  <div className="flex-1">
                    <p className="font-bold text-blue-700 mb-1">④ 90° - 30° = 60°</p>
                    <p><MathTex tex="\sin(60°) = \cos 30° = \tfrac{\sqrt{3}}{2}" /> ← sin <span className="text-green-700 font-bold">变成 cos</span></p>
                    <p><MathTex tex="\cos(60°) = \sin 30° = \tfrac{1}{2}" /> ← cos <span className="text-green-700 font-bold">变成 sin</span></p>
                    <p className="mt-1"><strong>→ 验证了规律③</strong></p>
                  </div>
                  <div className="flex-shrink-0 w-[120px]"><SymHalfPiMinus /></div>
                </div>

                <div className="bg-white rounded-lg p-2 border border-purple-100 flex items-center gap-2">
                  <div className="flex-1">
                    <p className="font-bold text-blue-700 mb-1">⑤ 90° + 30° = 120°</p>
                    <p><MathTex tex="\sin(120°) = \cos 30° = \tfrac{\sqrt{3}}{2}" /> ← sin <span className="text-green-700 font-bold">变成 cos</span></p>
                    <p><MathTex tex="\cos(120°) = -\sin 30° = -\tfrac{1}{2}" /> ← cos <span className="text-red-600 font-bold">变成 -sin</span></p>
                    <p className="mt-1"><strong>→ 验证了规律③</strong></p>
                  </div>
                  <div className="flex-shrink-0 w-[120px]"><SymHalfPiPlus /></div>
                </div>
              </div>
            </div>

            <Collapsible title="📖 想看完整的 6 组公式？点这里（考试时查阅用）">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-2 mb-1">
                <p className="font-bold text-blue-800 mb-1">口诀：奇变偶不变，符号看象限</p>
                <div className="bg-white rounded-lg p-2 border border-blue-100">
                  <p className="mb-1"><strong>"奇变"</strong>：<MathTex tex="k \times 90°" /> 中 k 是奇数（1, 3, 5…）→ 函数名<strong>互换</strong>（sin ↔ cos）</p>
                  <p className="mb-1"><strong>"偶不变"</strong>：k 是偶数（0, 2, 4…）→ 函数名<strong>不变</strong></p>
                  <p><strong>"符号看象限"</strong>：把 α 当作锐角，看落在哪个象限，原函数在该象限的正负号就是结果的正负号</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <div className="bg-white rounded-lg p-2 border border-gray-200">
                  <p className="font-bold text-center mb-1 text-blue-700">函数名不变（±α、π±α）</p>
                  <div className="space-y-1 text-lg">
                    <p><MathTex tex="\sin(2k\pi + \alpha) = \sin\alpha" /></p>
                    <p><MathTex tex="\sin(\pi + \alpha) = -\sin\alpha" /></p>
                    <p><MathTex tex="\cos(\pi + \alpha) = -\cos\alpha" /></p>
                    <p><MathTex tex="\sin(-\alpha) = -\sin\alpha" /></p>
                    <p><MathTex tex="\cos(-\alpha) = \cos\alpha" /></p>
                    <p><MathTex tex="\sin(\pi - \alpha) = \sin\alpha" /></p>
                    <p><MathTex tex="\cos(\pi - \alpha) = -\cos\alpha" /></p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-2 border border-gray-200">
                  <p className="font-bold text-center mb-1 text-green-700">sin↔cos 互换（<MathTex tex="\frac{\pi}{2}" />±α）</p>
                  <div className="space-y-1 text-lg">
                    <p><MathTex tex="\sin\!\left(\frac{\pi}{2} - \alpha\right) = \cos\alpha" /></p>
                    <p><MathTex tex="\cos\!\left(\frac{\pi}{2} - \alpha\right) = \sin\alpha" /></p>
                    <p className="mt-2"><MathTex tex="\sin\!\left(\frac{\pi}{2} + \alpha\right) = \cos\alpha" /></p>
                    <p><MathTex tex="\cos\!\left(\frac{\pi}{2} + \alpha\right) = -\sin\alpha" /></p>
                  </div>
                </div>
              </div>
            </Collapsible>

          </div>

        <div className="border-l-4 border-blue-400 pl-3 mb-2">
          <p><strong>规律①②</strong> 管正负号（函数名不变）</p>
          <p><strong>规律③</strong> 管 sin↔cos 互换（缺一不可）</p>
          <p>遇到题目先看角度能拆成 180°± 还是 90°±，就知道用哪条了。</p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
          <p className="font-bold text-green-800 mb-2">🔥 实战演示（一道题用全 3 条规律）</p>
          <div className="bg-white rounded-lg p-3 border border-green-100">
            <p className="font-bold mb-2 text-lg">求 <MathTex tex="\sin(-150°) + \cos(210°) + \sin(120°) + \tan(225°)" /> 的值</p>

            <div className="border-l-4 border-blue-400 pl-3 mt-3">
              <p className="font-bold text-blue-700">第一项：sin(-150°) — 用规律①+②</p>
              <p className="mt-1">先用<strong>规律①</strong>（取负角，sin 变号）：<MathTex tex="\sin(-150°) = -\sin 150°" /></p>
              <p className="mt-1">再用<strong>规律②</strong>（180° - 角度，sin 不变）：<MathTex tex="\sin 150° = \sin(180° - 30°) = \sin 30° = \tfrac{1}{2}" /></p>
              <p className="mt-1 font-bold">所以：<MathTex tex="\sin(-150°) = -\tfrac{1}{2}" /></p>
            </div>

            <div className="border-l-4 border-purple-400 pl-3 mt-3">
              <p className="font-bold text-purple-700">第二项：cos(210°) — 用规律②</p>
              <p className="mt-1">用<strong>规律②</strong>（180° + 角度，cos 变号）：<MathTex tex="\cos 210° = \cos(180° + 30°) = -\cos 30° = -\tfrac{\sqrt{3}}{2}" /></p>
            </div>

            <div className="border-l-4 border-green-500 pl-3 mt-3">
              <p className="font-bold text-green-700">第三项：sin(120°) — 用规律③</p>
              <p className="mt-1">用<strong>规律③</strong>（90° + 角度，sin 变成 cos）：<MathTex tex="\sin 120° = \sin(90° + 30°) = \cos 30° = \tfrac{\sqrt{3}}{2}" /></p>
            </div>

            <div className="border-l-4 border-amber-500 pl-3 mt-3">
              <p className="font-bold text-amber-700">第四项：tan(225°) — 用规律②</p>
              <p className="mt-1">用<strong>规律②</strong>（180° + 角度，tan 也不变）：<MathTex tex="\tan 225° = \tan(180° + 45°) = \tan 45° = 1" /></p>
            </div>

            <div className="bg-green-100 rounded-lg p-3 mt-2 flex items-center gap-3">
              <p className="font-bold text-green-800 text-lg">合在一起：<MathTex tex="-\dfrac{1}{2} + \left(-\dfrac{\sqrt{3}}{2}\right) + \dfrac{\sqrt{3}}{2} + 1 = \dfrac{1}{2}" /></p>
              <p className="text-gray-600 whitespace-nowrap"><MathTex tex="\left(\pm\dfrac{\sqrt{3}}{2}\right)" /> 抵消，剩 <MathTex tex="-\dfrac{1}{2} + 1 = \dfrac{1}{2}" /></p>
            </div>
          </div>
        </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 2: 三角函数的图像与性质 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="tf-graphs" className="mb-3 scroll-mt-4">
        <Collapsible title="二、三角函数的图像与性质" defaultOpen storageKey="trig-func:graphs" headerExtra={<SpeakButton text={trigFuncNarrations.graphs} />}>
          <div className="space-y-0 text-gray-700">

            <div className="bg-green-50 border border-green-200 rounded-xl p-2">
              <p className="font-bold text-green-800 mb-0">y = sin x 的图像</p>
              <SinGraphDiagram />
              <div className="bg-white rounded-lg p-2 border border-green-100 mt-0.5">
                <div className="grid grid-cols-2 gap-x-4 gap-y-0.5">
                  <p><strong>定义域：</strong><MathTex tex="(-\infty, +\infty)" /></p>
                  <p><strong>值域：</strong><MathTex tex="[-1, 1]" /></p>
                  <p><strong>周期：</strong><MathTex tex="T = 2\pi" /></p>
                  <p><strong>奇偶性：</strong>奇函数（关于原点对称）</p>
                  <p><strong>递增区间：</strong><MathTex tex="\left[-\frac{\pi}{2}+2k\pi,\;\frac{\pi}{2}+2k\pi\right]" /></p>
                  <p><strong>递减区间：</strong><MathTex tex="\left[\frac{\pi}{2}+2k\pi,\;\frac{3\pi}{2}+2k\pi\right]" /></p>
                  <p><strong>对称轴：</strong><MathTex tex="x = \frac{\pi}{2} + k\pi" />（波峰/波谷处）</p>
                  <p><strong>对称中心：</strong><MathTex tex="(k\pi, 0)" />（过零点处）</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-2">
              <p className="font-bold text-blue-800 mb-0">y = cos x 的图像</p>
              <CosGraphDiagram />
              <div className="bg-white rounded-lg p-2 border border-blue-100 mt-0.5">
                <div className="grid grid-cols-2 gap-x-4 gap-y-0.5">
                  <p><strong>定义域：</strong><MathTex tex="(-\infty, +\infty)" /></p>
                  <p><strong>值域：</strong><MathTex tex="[-1, 1]" /></p>
                  <p><strong>周期：</strong><MathTex tex="T = 2\pi" /></p>
                  <p><strong>奇偶性：</strong>偶函数（关于 y 轴对称）</p>
                  <p><strong>递增区间：</strong><MathTex tex="[-\pi+2k\pi,\;2k\pi]" /></p>
                  <p><strong>递减区间：</strong><MathTex tex="[2k\pi,\;\pi+2k\pi]" /></p>
                  <p><strong>对称轴：</strong><MathTex tex="x = k\pi" />（波峰/波谷处）</p>
                  <p><strong>对称中心：</strong><MathTex tex="\left(\frac{\pi}{2}+k\pi,\;0\right)" /></p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-xl p-2">
              <p className="font-bold text-purple-800 mb-0">y = tan x 的图像</p>
              <TanGraphDiagram />
              <div className="bg-white rounded-lg p-2 border border-purple-100 mt-0.5">
                <div className="grid grid-cols-2 gap-x-4 gap-y-0.5">
                  <p><strong>定义域：</strong><MathTex tex="x \neq \frac{\pi}{2}+k\pi" /></p>
                  <p><strong>值域：</strong><MathTex tex="(-\infty, +\infty)" /></p>
                  <p><strong>周期：</strong><MathTex tex="T = \pi" />（比 sin/cos 短一半！）</p>
                  <p><strong>奇偶性：</strong>奇函数</p>
                  <p><strong>递增区间：</strong><MathTex tex="\left(-\frac{\pi}{2}+k\pi,\;\frac{\pi}{2}+k\pi\right)" /></p>
                  <p><strong>递减区间：</strong>无（每段都是递增的）</p>
                  <p><strong>渐近线：</strong><MathTex tex="x = \frac{\pi}{2}+k\pi" />（红色虚线）</p>
                  <p><strong>对称中心：</strong><MathTex tex="\left(\frac{k\pi}{2},\;0\right)" /></p>
                </div>
              </div>
            </div>

            <PageBreak />

            {/* ── sin 与 cos 的关系：为图像变换铺路 ── */}
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-3">
              <p className="font-bold text-lg text-indigo-800 mb-2">💡 发现：sin 和 cos 其实是"同一条曲线"！</p>
              <p className="mb-1">仔细对比上面的两张图，你会发现一个惊人的事实：</p>

              <div className="bg-white rounded-lg p-2 border border-indigo-100 mb-2">
                <p className="text-center text-lg font-bold text-indigo-700 mb-1">cos 的图像 = sin 的图像向左平移 <MathTex tex="\frac{\pi}{2}" /></p>
                <p className="text-center">用公式写就是：<MathTex tex="\cos x = \sin\!\left(x + \frac{\pi}{2}\right)" /></p>
                <p className="text-center text-gray-500 mt-1">这不就是诱导公式里的<strong>规律③</strong>吗！图像帮你"看见"了公式。</p>
              </div>

              <div className="bg-white rounded-lg p-2 border border-indigo-100 mb-2">
                <p className="font-bold text-indigo-700 mb-1">验证一下（用图像上的点）</p>
                <div className="space-y-0.5">
                  <p>• sin 在 <MathTex tex="x = 0" /> 处值为 0 → cos 在 <MathTex tex="x = -\frac{\pi}{2}" /> 处值为 0 ✓（左移了 <MathTex tex="\frac{\pi}{2}" />）</p>
                  <p>• sin 在 <MathTex tex="x = \frac{\pi}{2}" /> 处到达波峰 → cos 在 <MathTex tex="x = 0" /> 处到达波峰 ✓</p>
                  <p>• sin 在 <MathTex tex="x = \pi" /> 处过零点 → cos 在 <MathTex tex="x = \frac{\pi}{2}" /> 处过零点 ✓</p>
                </div>
                <p className="mt-1 text-gray-600">每个关键点都左移了 <MathTex tex="\frac{\pi}{2}" />，完全吻合！</p>
              </div>

              <div className="bg-indigo-100 rounded-lg p-2">
                <p className="font-bold text-indigo-800 mb-0.5">🔑 这告诉我们什么？</p>
                <div className="space-y-0.5">
                  <p><strong>①</strong> sin 和 cos 不是两个独立的函数，而是<strong>同一条波浪在不同起跑位置</strong></p>
                  <p><strong>②</strong> "平移"可以把一个三角函数变成另一个——这就是下一节要学的<strong>图像变换</strong></p>
                  <p><strong>③</strong> 如果有人给你 <MathTex tex="y = \sin\!\left(x + \frac{\pi}{2}\right)" />，你直接就知道它就是 cos x！</p>
                </div>
              </div>
            </div>

            {/* ── 五点作图法 ── */}
            <div className="space-y-1.5">
              <p className="font-bold text-lg text-gray-800">✏️ 五点作图法 — 自己动手画正弦波</p>
              <p>高考要你<strong>画出来</strong>。方法：找 5 个关键点，光滑曲线连起来。</p>

              <div className="border-l-4 border-green-500 pl-3">
                <p className="font-bold text-green-700 mb-0.5">关键规律：一个周期的 y 值永远是</p>
                <p className="text-lg font-bold">0 → <span className="text-red-600">A</span>（波峰）→ 0 → <span className="text-blue-600">−A</span>（波谷）→ 0</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-3">
                <p className="font-bold text-blue-700 mb-0.5">标准 y = sin x 的五点表（x 把 <MathTex tex="[0,\; 2\pi]" /> 四等分）</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-center border-collapse text-base">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-1.5">x</th>
                        <th className="border border-gray-300 p-1.5"><MathTex tex="0" /></th>
                        <th className="border border-gray-300 p-1.5"><MathTex tex="\dfrac{\pi}{2}" /></th>
                        <th className="border border-gray-300 p-1.5"><MathTex tex="\pi" /></th>
                        <th className="border border-gray-300 p-1.5"><MathTex tex="\dfrac{3\pi}{2}" /></th>
                        <th className="border border-gray-300 p-1.5"><MathTex tex="2\pi" /></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-1.5 font-bold">sin x</td>
                        <td className="border border-gray-300 p-1.5 font-bold">0</td>
                        <td className="border border-gray-300 p-1.5 font-bold text-red-600">1</td>
                        <td className="border border-gray-300 p-1.5 font-bold">0</td>
                        <td className="border border-gray-300 p-1.5 font-bold text-blue-600">−1</td>
                        <td className="border border-gray-300 p-1.5 font-bold">0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-600 mt-0.5">描点 → <strong>光滑曲线</strong>连接（不是折线！）→ 标准正弦图像。</p>
              </div>

              <div className="border-l-4 border-purple-500 pl-3">
                <p className="font-bold text-purple-700 mb-0.5">推广到 <MathTex tex="y = A\sin(\omega x + \varphi)" /></p>
                <p>令整体 <MathTex tex="u = \omega x + \varphi" />，u 取 <MathTex tex="0,\;\dfrac{\pi}{2},\;\pi,\;\dfrac{3\pi}{2},\;2\pi" /></p>
                <p>解出 <MathTex tex="x = \dfrac{u - \varphi}{\omega}" />，y 依次为 <strong>0, A, 0, −A, 0</strong></p>
              </div>

              <div className="border-l-4 border-orange-500 pl-3">
                <p className="font-bold text-orange-700 mb-0.5">📝 例：画 <MathTex tex="y = 2\sin\!\left(2x + \dfrac{\pi}{3}\right)" /> 的一个周期</p>
                <p className="mb-0.5">令 <MathTex tex="u = 2x + \dfrac{\pi}{3}" />，解 <MathTex tex="x = \dfrac{u - \pi/3}{2}" /></p>
                <div className="overflow-x-auto">
                  <table className="w-full text-center border-collapse text-base">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-1.5">u</th>
                        <th className="border border-gray-300 p-1.5">0</th>
                        <th className="border border-gray-300 p-1.5"><MathTex tex="\dfrac{\pi}{2}" /></th>
                        <th className="border border-gray-300 p-1.5"><MathTex tex="\pi" /></th>
                        <th className="border border-gray-300 p-1.5"><MathTex tex="\dfrac{3\pi}{2}" /></th>
                        <th className="border border-gray-300 p-1.5"><MathTex tex="2\pi" /></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-1.5 font-bold">x</td>
                        <td className="border border-gray-300 p-1.5"><MathTex tex="-\dfrac{\pi}{6}" /></td>
                        <td className="border border-gray-300 p-1.5"><MathTex tex="\dfrac{\pi}{12}" /></td>
                        <td className="border border-gray-300 p-1.5"><MathTex tex="\dfrac{\pi}{3}" /></td>
                        <td className="border border-gray-300 p-1.5"><MathTex tex="\dfrac{7\pi}{12}" /></td>
                        <td className="border border-gray-300 p-1.5"><MathTex tex="\dfrac{5\pi}{6}" /></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-1.5 font-bold">y</td>
                        <td className="border border-gray-300 p-1.5 font-bold">0</td>
                        <td className="border border-gray-300 p-1.5 font-bold text-red-600">2</td>
                        <td className="border border-gray-300 p-1.5 font-bold">0</td>
                        <td className="border border-gray-300 p-1.5 font-bold text-blue-600">−2</td>
                        <td className="border border-gray-300 p-1.5 font-bold">0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-600 mt-0.5">周期 <MathTex tex="T = \pi" />，从 <MathTex tex="x = -\dfrac{\pi}{6}" /> 到 <MathTex tex="\dfrac{5\pi}{6}" />。</p>
              </div>

              <div className="border-l-4 border-red-400 pl-3">
                <p className="font-bold text-red-700">💡 口诀：<span className="text-lg">列表三步 —— "令 u、解 x、填 y"</span>，y 值永远 <span className="text-lg">0 → A → 0 → −A → 0</span></p>
              </div>
            </div>

            <PageBreak />

            {/* ── 实战例题 + 即时训练 ── */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-2">
              <p className="font-bold text-lg text-orange-800 mb-1">🔥 实战例题 — 图像性质综合</p>

              <div className="flex gap-1.5">
                {/* 左侧：例题 */}
                <div className="flex-1 bg-white rounded-lg p-1.5 border border-orange-100">
                  <p className="font-bold mb-0.5">例 1：已知 <MathTex tex="f(x) = \sin x" />，<MathTex tex="g(x) = \cos x" /></p>

                  <div className="border-l-4 border-blue-400 pl-2 mb-1">
                    <p className="font-bold text-blue-700">（1）求 <MathTex tex="f(x)" /> 在 <MathTex tex="[-\pi,\;\pi]" /> 上的单调递增区间</p>
                    <p className="mt-0.5">sin 的递增区间公式：<MathTex tex="\left[-\dfrac{\pi}{2}+2k\pi,\;\dfrac{\pi}{2}+2k\pi\right]" /></p>
                    <p>取 k=0 → <MathTex tex="\left[-\dfrac{\pi}{2},\;\dfrac{\pi}{2}\right]" />，在 <MathTex tex="[-\pi,\;\pi]" /> 内 ✓</p>
                    <p className="font-bold mt-0.5">答：<MathTex tex="\left[-\dfrac{\pi}{2},\;\dfrac{\pi}{2}\right]" /></p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-2 mb-1">
                    <p className="font-bold text-green-700">（2）<MathTex tex="g(x)" /> 是奇函数还是偶函数？写出一条对称轴</p>
                    <p className="mt-0.5"><MathTex tex="g(-x) = \cos(-x) = \cos x = g(x)" /> → <strong>偶函数</strong></p>
                    <p>对称轴在波峰/波谷处：<MathTex tex="x = k\pi" />，例如 <MathTex tex="x = 0" /> 或 <MathTex tex="x = \pi" /></p>
                  </div>

                  <div className="border-l-4 border-purple-400 pl-2 mb-1">
                    <p className="font-bold text-purple-700">（3）比较大小：<MathTex tex="\cos\dfrac{\pi}{5}" /> 与 <MathTex tex="\cos\dfrac{\pi}{3}" /></p>
                    <p className="mt-0.5">cos 在 <MathTex tex="[0,\;\pi]" /> 上<strong>递减</strong>，而 <MathTex tex="\dfrac{\pi}{5} < \dfrac{\pi}{3}" /></p>
                    <p className="font-bold">∴ <MathTex tex="\cos\dfrac{\pi}{5} > \cos\dfrac{\pi}{3}" />（递减函数中，自变量小的反而大）</p>
                  </div>

                  <div className="border-l-4 border-amber-500 pl-2 mb-1">
                    <p className="font-bold text-amber-700">（4）<MathTex tex="y = \tan x" /> 的周期？在 <MathTex tex="\left(-\dfrac{\pi}{2},\;\dfrac{\pi}{2}\right)" /> 上递增还是递减？</p>
                    <p className="mt-0.5">周期 <MathTex tex="T = \pi" />（sin/cos 的一半），该区间上<strong>递增</strong>（每段都从左下到右上）</p>
                  </div>

                  <div className="border-l-4 border-red-400 pl-2">
                    <p className="font-bold text-red-700">（5）<MathTex tex="(\pi,\;0)" /> 是 <MathTex tex="f(x)" /> 的对称中心还是对称轴？</p>
                    <p className="mt-0.5"><MathTex tex="(\pi,\;0)" /> 是过零点 → <strong>对称中心</strong> ✓ &nbsp;|&nbsp; <MathTex tex="x = \pi" /> 不是波峰也不是波谷 → <strong>不是对称轴</strong> ✗</p>
                    <p className="text-gray-600">记：波峰/波谷 = 对称轴，过零点 = 对称中心</p>
                  </div>
                </div>

                {/* 右侧：参考图 */}
                <div className="w-[170px] flex-shrink-0">
                  <div style={{ transform: 'scaleY(0.82)', transformOrigin: 'top' }}>
                    <p className="text-center text-xs font-bold text-green-700">y = sin x</p>
                    <SinGraphDiagram />
                  </div>
                  <div style={{ transform: 'scaleY(0.82)', transformOrigin: 'top' }}>
                    <p className="text-center text-xs font-bold text-blue-700">y = cos x</p>
                    <CosGraphDiagram />
                  </div>
                  <div style={{ transform: 'scaleY(0.82)', transformOrigin: 'top' }}>
                    <p className="text-center text-xs font-bold text-purple-700">y = tan x</p>
                    <TanGraphDiagram />
                  </div>
                </div>
              </div>
            </div>

            {/* ── 即时训练 ── */}
            <PracticeCard questions={trigGraphPractice} title="✅ 即时训练 — 图像性质（4 题）" printOptionCols={2} explanations={trigFuncExplanations} />

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 3: y = Asin(ωx+φ) 图像变换 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="tf-transform" className="mb-3 scroll-mt-4">
        <Collapsible title="三、y = Asin(ωx+φ) 的图像变换" defaultOpen storageKey="trig-func:transform" headerExtra={<SpeakButton text={trigFuncNarrations.transform} />}>
          <p className="text-blue-600 mb-1">🎯 学完你能：理解 A、ω、φ 的含义，掌握图像变换，由图像写出解析式。</p>
          <div className="space-y-2 text-gray-700">

            {/* ── 3.1 认识三个参数 ── */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-2">
              <p className="font-bold text-lg text-blue-800 mb-0.5">3.1 先认识四个"旋钮"</p>
              <p className="mb-0.5">把 <MathTex tex="y = A\sin(\omega x + \varphi) + B" /> 想象成一个<strong>调音台</strong>，有四个旋钮可以调节波形：</p>

              {/* A — 振幅 */}
              <div className="bg-white rounded-lg p-1.5 border-l-4 border-red-500">
                <p className="font-bold text-red-700 mb-0.5 text-lg">旋钮 A — 控制"波的高度"（振幅）</p>
                <p className="mb-0.5">A 决定了波浪能<strong>上下摆动多远</strong>。想象弹簧的弹跳高度：</p>
                <div className="grid grid-cols-3 gap-1.5 mb-1 text-center">
                  <div className="bg-red-50 rounded-lg p-1.5">
                    <p className="font-bold">A = 1（标准）</p>
                    <p>最高到 1，最低到 -1</p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-1.5">
                    <p className="font-bold">A = 2（拉伸）</p>
                    <p>最高到 2，最低到 -2</p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-1.5">
                    <p className="font-bold">A = 0.5（压缩）</p>
                    <p>最高到 0.5，最低到 -0.5</p>
                  </div>
                </div>
                <div className="bg-red-50 rounded-lg p-1">
                  <p><strong>公式：</strong><MathTex tex="A = \frac{y_{max} - y_{min}}{2}" /></p>
                  <p><strong>举例：</strong>波最高到 3，最低到 -1 → <MathTex tex="A = \frac{3-(-1)}{2} = 2" /></p>
                </div>
              </div>

              {/* ω — 角频率 */}
              <div className="bg-white rounded-lg p-1.5 border-l-4 border-blue-500">
                <p className="font-bold text-blue-700 mb-0.5 text-lg">旋钮 ω — 控制"波的疏密"（角频率）</p>
                <p className="mb-0.5">ω 决定了波浪的<strong>重复的快慢</strong>。想象心跳的节奏：</p>
                <div className="grid grid-cols-3 gap-1.5 mb-1 text-center">
                  <div className="bg-blue-50 rounded-lg p-1.5">
                    <p className="font-bold">ω = 1（标准）</p>
                    <p>周期 <MathTex tex="T = 2\pi \approx 6.28" /></p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-1.5">
                    <p className="font-bold">ω = 2（加快）</p>
                    <p>周期 <MathTex tex="T = \pi \approx 3.14" /></p>
                    <p className="text-blue-600">波更密！</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-1.5">
                    <p className="font-bold">ω = ½（减慢）</p>
                    <p>周期 <MathTex tex="T = 4\pi \approx 12.57" /></p>
                    <p className="text-blue-600">波更宽！</p>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-1.5 mb-0.5">
                  <p><strong>核心公式：</strong><MathTex tex="T = \frac{2\pi}{\omega}" /> &nbsp;↔&nbsp; <MathTex tex="\omega = \frac{2\pi}{T}" /></p>
                  <p className="text-gray-600"><strong>记忆：</strong>ω 越大 → T 越小 → 波越密。就像心跳加快！</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-1.5 border border-yellow-200">
                  <p className="font-bold text-yellow-800">💡 怎么从图上找周期 T？</p>
                  <p>方法①：两个<strong>相邻最高点</strong>之间的水平距离 = T</p>
                  <p>方法②：两个<strong>相邻最低点</strong>之间的水平距离 = T</p>
                  <p>方法③：<strong>相邻的同向零点</strong>（都从下往上穿）之间的距离 = T</p>
                  <p>方法④：最高点到相邻最低点的距离 = <strong>T/2</strong>（半个周期），乘 2 即可</p>
                </div>
              </div>

              {/* φ — 初相 */}
              <div className="bg-white rounded-lg p-1.5 border-l-4 border-green-500">
                <p className="font-bold text-green-700 mb-0.5 text-lg">旋钮 φ — 控制"波的起跑位置"（初相）</p>
                <p className="mb-0.5">φ 决定了波浪的<strong>起跑位置</strong>：</p>
                <div className="grid grid-cols-3 gap-1.5 mb-1 text-center">
                  <div className="bg-green-50 rounded-lg p-1.5">
                    <p className="font-bold">φ = 0</p>
                    <p>从原点开始（标准）</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-1.5">
                    <p className="font-bold">φ {'>'} 0</p>
                    <p>整个波<strong>向左移</strong></p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-1.5">
                    <p className="font-bold">φ {'<'} 0</p>
                    <p>整个波<strong>向右移</strong></p>
                  </div>
                </div>
                <div className="bg-green-50 rounded-lg p-1.5 mb-1">
                  <p><strong>口诀：</strong>"左加右减"——加 φ 左移，减 φ 右移</p>
                  <p className="text-gray-600 mt-0.5">高考通常要求 <MathTex tex="|\varphi| \leq \frac{\pi}{2}" />，这样 φ 有唯一解</p>
                </div>
              </div>

              {/* 总结表 */}
              <div>
                <table className="w-full text-base border-collapse">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="border border-blue-200 p-1.5 text-left">参数</th>
                      <th className="border border-blue-200 p-1.5 text-left">控制什么</th>
                      <th className="border border-blue-200 p-1.5 text-left">怎么求</th>
                      <th className="border border-blue-200 p-1.5 text-left">怎么看图</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-blue-200 p-1.5 font-bold text-red-600 text-lg">A</td>
                      <td className="border border-blue-200 p-1.5">波的高度（振幅）</td>
                      <td className="border border-blue-200 p-1.5 text-lg"><MathTex tex="A = \dfrac{y_{max} - y_{min}}{2}" /></td>
                      <td className="border border-blue-200 p-1.5">看最高点和最低点</td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-blue-200 p-1.5 font-bold text-blue-600 text-lg">ω</td>
                      <td className="border border-blue-200 p-1.5">波的疏密（周期）</td>
                      <td className="border border-blue-200 p-1.5 text-lg"><MathTex tex="\omega = \dfrac{2\pi}{T}" /></td>
                      <td className="border border-blue-200 p-1.5">量两个最高点的距离</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-1.5 font-bold text-green-600 text-lg">φ</td>
                      <td className="border border-blue-200 p-1.5">波的起跑位置</td>
                      <td className="border border-blue-200 p-1.5">代入已知点求解</td>
                      <td className="border border-blue-200 p-1.5">看波从哪里"出发"</td>
                    </tr>
                    <tr className="bg-orange-50">
                      <td className="border border-blue-200 p-1.5 font-bold text-orange-600 text-lg">B</td>
                      <td className="border border-blue-200 p-1.5">波的上下位置</td>
                      <td className="border border-blue-200 p-1.5 text-lg"><MathTex tex="B = \dfrac{y_{max} + y_{min}}{2}" /></td>
                      <td className="border border-blue-200 p-1.5">看中线在哪</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* ── 3.1.5 第四个旋钮 B — 纵向平移 ── */}
            <div className="bg-white rounded-lg p-1.5 border-l-4 border-orange-500">
              <p className="font-bold text-orange-700 mb-0.5 text-lg">旋钮 B — 控制"波的上下位置"（纵向平移）</p>
              <p className="mb-0.5">完整形式其实是 <MathTex tex="y = A\sin(\omega x + \varphi) + B" />，多了一个 <strong>+B</strong>。</p>
              <p className="mb-1">B 决定了整条波浪<strong>上下平移</strong>多少。想象水面涨潮——波形不变，只是整体抬高了。</p>

              <div className="grid grid-cols-3 gap-1 mb-1 text-center">
                <div className="bg-orange-50 rounded-lg p-1">
                  <p className="font-bold">B = 0（标准）</p>
                  <p>波在 x 轴上下摆动</p>
                  <p>中线：y = 0</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-1">
                  <p className="font-bold">B = 1（上移）</p>
                  <p>整条波<strong>上移 1</strong></p>
                  <p>中线：y = 1</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-1">
                  <p className="font-bold">B = -2（下移）</p>
                  <p>整条波<strong>下移 2</strong></p>
                  <p>中线：y = -2</p>
                </div>
              </div>

              <div className="bg-orange-50 rounded-lg p-1 mb-1">
                <p className="font-bold mb-0.5">核心公式</p>
                <p className="text-lg"><MathTex tex="B = \frac{y_{max} + y_{min}}{2}" />（中线位置）</p>
                <p><strong>对比 A 的公式：</strong><MathTex tex="A = \frac{y_{max} - y_{min}}{2}" />（半高度）</p>
                <p className="text-gray-600">A 是"差的一半"，B 是"和的一半"——一对好兄弟，记住一个另一个自然就有了。</p>
              </div>

              <div className="bg-orange-50 rounded-lg p-1 mb-1">
                <p className="font-bold mb-0.5">加了 B 之后性质怎么变？</p>
                <div className="space-y-0.5">
                  <p><strong>值域：</strong>从 [-A, A] 变成 <MathTex tex="[B - A,\; B + A]" /></p>
                  <p><strong>最大值：</strong><MathTex tex="y_{max} = A + B" />（sin = 1 时）</p>
                  <p><strong>最小值：</strong><MathTex tex="y_{min} = -A + B" />（sin = -1 时）</p>
                  <p><strong>周期、单调区间、对称轴/中心：</strong><span className="text-green-700 font-bold">完全不变</span>（B 只平移，不影响形状）</p>
                </div>
              </div>

              <div className="bg-red-50 rounded-lg p-1 border border-red-200">
                <p className="font-bold text-red-700 mb-0.5">⚠️ 高考怎么考 +B？</p>
                <div className="space-y-0.5">
                  <p>最常见的坑：题目说"最高点 y = 5，最低点 y = -1"，很多人直接写 A = 5 或 A = -1。</p>
                  <p className="font-bold">正确做法：先算 A 和 B，再写解析式！</p>
                  <p><MathTex tex="A = \frac{5-(-1)}{2} = 3,\quad B = \frac{5+(-1)}{2} = 2" /></p>
                  <p>所以是 <MathTex tex="y = 3\sin(\cdots) + 2" />，<strong>不是</strong> <MathTex tex="y = 5\sin(\cdots)" /></p>
                </div>
              </div>
            </div>

            {/* 3.1 综合实战例题 */}
            <div className="bg-white rounded-lg p-2 border border-blue-200">
              <p className="font-bold text-blue-800 mb-1">📝 实战例题 — 综合读参数</p>

              <p className="font-bold text-gray-700 mb-0.5">例 1（含 B）</p>
              <div className="bg-gray-50 rounded p-1.5 mb-1">
                <p>已知某正弦函数图像最高点 <MathTex tex="y = 5" />，最低点 <MathTex tex="y = -1" />，最小正周期 <MathTex tex="T = \pi" />，且 <MathTex tex="f(0) = 2" />。</p>
                <p>求 <MathTex tex="f(x) = A\sin(\omega x + \varphi) + B" /> 的解析式（<MathTex tex="A > 0,\; \omega > 0,\; |\varphi| \leq \frac{\pi}{2}" />）。</p>
              </div>
              <div className="space-y-1 mb-2">
                <div className="border-l-4 border-red-300 pl-2">
                  <p className="text-lg"><strong>第①步 求 A：</strong><MathTex tex="A = \frac{5 - (-1)}{2} = 3" /></p>
                </div>
                <div className="border-l-4 border-orange-300 pl-2">
                  <p className="text-lg"><strong>第②步 求 B：</strong>不对称 → <MathTex tex="B = \frac{5 + (-1)}{2} = 2" /></p>
                </div>
                <div className="border-l-4 border-blue-300 pl-2">
                  <p className="text-lg"><strong>第③步 求 ω：</strong><MathTex tex="\omega = \frac{2\pi}{\pi} = 2" /></p>
                </div>
                <div className="border-l-4 border-green-300 pl-2">
                  <p><strong>第④步 求 φ：</strong>代入 f(0) = 2 → <MathTex tex="3\sin\varphi = 0 \;\Rightarrow\; \varphi = 0" /></p>
                </div>
                <p className="font-bold text-green-700 bg-green-50 p-1.5 rounded">∴ <MathTex tex="f(x) = 3\sin(2x) + 2" />，值域 <MathTex tex="[-1,\; 5]" /></p>
              </div>

              <p className="font-bold text-gray-700 mb-0.5">例 2（不含 B）</p>
              <div className="bg-gray-50 rounded p-1.5 mb-1">
                <p>已知 <MathTex tex="y = 3\sin(4x + \varphi)" />，求振幅 A、角频率 ω、最小正周期 T 和值域。</p>
              </div>
              <div className="space-y-1">
                <div className="border-l-4 border-red-300 pl-2">
                  <p><strong>第①步 求 A：</strong>直接读系数 → <MathTex tex="A = 3" /></p>
                </div>
                <div className="border-l-4 border-blue-300 pl-2">
                  <p><strong>第②步 求 ω 和 T：</strong></p>
                  <p className="text-lg"><MathTex tex="\omega = 4,\quad T = \frac{2\pi}{\omega} = \frac{2\pi}{4} = \frac{\pi}{2}" /></p>
                </div>
                <div className="border-l-4 border-orange-300 pl-2">
                  <p><strong>第③步 有 B 吗？</strong>最高 3、最低 -3，关于 x 轴对称 → <MathTex tex="B = \frac{3+(-3)}{2} = 0" /></p>
                </div>
                <p className="font-bold text-green-700 bg-green-50 p-1.5 rounded">∴ 振幅 <MathTex tex="A = 3" />，周期 <MathTex tex="T = \frac{\pi}{2}" />，值域 <MathTex tex="[-3,\; 3]" /></p>
              </div>
            </div>

            <PageBreak />

            {/* ── 3.2 图像变换两条路 ── */}
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-2">
              <p className="font-bold text-lg text-purple-800 mb-1">3.2 图像变换——从 y = sin x 出发</p>
              <p className="mb-1">高考经常问：<strong>“y = sin x 的图像经过怎样的变换得到 y = Asin(ωx+φ)？”</strong></p>
              <p className="mb-1">有两条路可以走。我们用<strong>具体例子</strong>来讲：把 y = sin x 变成 <MathTex tex="y = 2\sin\!\left(2x + \frac{\pi}{3}\right)" /></p>

              {/* 基本规则 */}
              <div className="bg-white rounded-lg p-2 border border-purple-100">
                <p className="font-bold text-purple-700 mb-1">📐 两种基本变换（先记住这两条）</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-purple-50 rounded-lg p-1.5">
                    <p className="font-bold mb-0.5">平移变换</p>
                    <p>f(x) → f(x<strong>+</strong>a)：图像<strong>左</strong>移 a</p>
                    <p>f(x) → f(x<strong>−</strong>a)：图像<strong>右</strong>移 a</p>
                    <p className="text-gray-500 mt-0.5">口诀：左加右减</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-1.5">
                    <p className="font-bold mb-0.5">伸缩变换</p>
                    <p>纵坐标 × A：上下拉伸 A 倍</p>
                    <p>横坐标 ÷ ω：左右压缩 ω 倍</p>
                    <p className="text-gray-500 mt-0.5">（ω{'>'} 1 压缩，ω{'<'} 1 拉伸）</p>
                  </div>
                </div>
              </div>

              {/* 路线一 */}
              <div className="bg-white rounded-lg p-2 border border-purple-200">
                <p className="font-bold text-blue-700 mb-1 text-lg">路线一：先平移，后伸缩 ⭐推荐</p>
                <p className="text-gray-600 mb-1">（这条路最直观，考试推荐用这个）</p>

                <div className="space-y-1">
                  <div className="flex items-start gap-2">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                    <div>
                      <p className="font-bold">左移 φ 个单位</p>
                      <p><MathTex tex="y = \sin x \;\xrightarrow{\;\text{左移}\;\frac{\pi}{3}\;}\; y = \sin\!\left(x + \frac{\pi}{3}\right)" /></p>
                      <p className="text-gray-500">（把每个 x 换成 <MathTex tex="x + \frac{\pi}{3}" />）</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                    <div>
                      <p className="font-bold">横坐标 ÷ ω（左右压缩）</p>
                      <p><MathTex tex="y = \sin\!\left(x + \frac{\pi}{3}\right) \;\xrightarrow{\;\text{横坐标} \div 2\;}\; y = \sin\!\left(2x + \frac{\pi}{3}\right)" /></p>
                      <p className="text-gray-500">（把 x 换成 2x，注意 <MathTex tex="\frac{\pi}{3}" /> 不变！）</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                    <div>
                      <p className="font-bold">纵坐标 × A（上下拉伸）</p>
                      <p><MathTex tex="y = \sin\!\left(2x + \frac{\pi}{3}\right) \;\xrightarrow{\;\text{纵坐标} \times 2\;}\; y = 2\sin\!\left(2x + \frac{\pi}{3}\right)" /></p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-1.5 mt-1">
                  <p className="font-bold mb-0.5">总结路线一：</p>
                  <div className="flex items-center gap-1 flex-wrap">
                    <span className="bg-blue-100 px-2 py-0.5 rounded">y = sin x</span>
                    <span>→ 左移 φ →</span>
                    <span className="bg-blue-100 px-2 py-0.5 rounded">sin(x+φ)</span>
                    <span>→ 横÷ω →</span>
                    <span className="bg-blue-100 px-2 py-0.5 rounded">sin(ωx+φ)</span>
                    <span>→ 纵×A →</span>
                    <span className="bg-blue-200 px-2 py-0.5 rounded font-bold">Asin(ωx+φ)</span>
                  </div>
                </div>
              </div>

              {/* 路线二 */}
              <div className="bg-white rounded-lg p-2 border border-purple-200">
                <p className="font-bold text-purple-700 mb-1 text-lg">路线二：先伸缩，后平移</p>
                <p className="text-gray-600 mb-1">（这条路也能走通，但有一个大坑！）</p>

                <div className="space-y-1">
                  <div className="flex items-start gap-2">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                    <div>
                      <p className="font-bold">横坐标 ÷ ω</p>
                      <p><MathTex tex="y = \sin x \;\xrightarrow{\;\text{横坐标} \div 2\;}\; y = \sin 2x" /></p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                    <div>
                      <p className="font-bold">左移 <span className="text-red-600 text-lg">φ/ω</span> 个单位（不是 φ！）</p>
                      <p><MathTex tex="y = \sin 2x \;\xrightarrow{\;\text{左移}\;\frac{\pi/3}{2} = \frac{\pi}{6}\;}\; y = \sin\!\left(2x + \frac{\pi}{3}\right)" /></p>
                      <p className="text-red-600 font-bold">⚠️ 平移的是 <MathTex tex="\frac{\varphi}{\omega} = \frac{\pi/3}{2} = \frac{\pi}{6}" />，不是 <MathTex tex="\frac{\pi}{3}" />！</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                    <div>
                      <p className="font-bold">纵坐标 × A</p>
                      <p><MathTex tex="y = \sin\!\left(2x + \frac{\pi}{3}\right) \;\xrightarrow{\;\text{纵坐标} \times 2\;}\; y = 2\sin\!\left(2x + \frac{\pi}{3}\right)" /></p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 rounded-lg p-1.5 mt-1 border border-red-200">
                  <p className="text-red-700 font-bold">⚠️ 路线二的大坑</p>
                  <p className="mt-0.5">先做完横向伸缩后，“一格”变短了，所以平移量也要<strong>缩短</strong>，除以 ω。</p>
                  <p className="mt-0.5">平移量 = <MathTex tex="\frac{\varphi}{\omega}" />，<strong>不是</strong> φ 本身！这是考试丢分的第一大坑。</p>
                </div>
              </div>

              {/* 两条路线对比 */}
              <div className="bg-yellow-50 rounded-lg p-1.5 border border-yellow-200">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-yellow-100">
                      <th className="border border-yellow-300 p-2"></th>
                      <th className="border border-yellow-300 p-2 text-blue-700">路线一（推荐 ⭐）</th>
                      <th className="border border-yellow-300 p-2 text-purple-700">路线二</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-yellow-300 p-2 font-bold">顺序</td>
                      <td className="border border-yellow-300 p-2">先平移 → 后伸缩</td>
                      <td className="border border-yellow-300 p-2">先伸缩 → 后平移</td>
                    </tr>
                    <tr className="bg-yellow-50">
                      <td className="border border-yellow-300 p-2 font-bold">平移量</td>
                      <td className="border border-yellow-300 p-2 text-green-700 font-bold">直接移 <MathTex tex="\varphi" /> ✓</td>
                      <td className="border border-yellow-300 p-2 text-red-600 font-bold">移 <MathTex tex="\frac{\varphi}{\omega}" />（易错！）</td>
                    </tr>
                    <tr>
                      <td className="border border-yellow-300 p-2 font-bold">建议</td>
                      <td className="border border-yellow-300 p-2">不容易出错，考试首选</td>
                      <td className="border border-yellow-300 p-2">需要多一步计算</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 3.2 实战例题 */}
            <div className="bg-white rounded-lg p-2 border border-purple-200 mb-1">
              <p className="font-bold text-purple-800 mb-1">📝 例题 — 写出变换步骤</p>
              <div className="bg-gray-50 rounded p-1.5 mb-1">
                <p>把 <MathTex tex="y = \sin x" /> 变为 <MathTex tex="y = 3\sin\!\left(2x + \frac{\pi}{4}\right)" />，分别用路线一和路线二写出变换步骤。</p>
              </div>

              <p className="font-bold text-blue-700 mb-0.5">路线一（先平移后伸缩）：</p>
              <div className="space-y-1 mb-1">
                <div className="flex items-start gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                  <div>
                    <p>向左平移 <MathTex tex="\frac{\pi}{4}" /> 个单位：</p>
                    <p className="text-lg"><MathTex tex="y = \sin x \;\rightarrow\; y = \sin\!\left(x + \frac{\pi}{4}\right)" /></p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                  <div>
                    <p>横坐标缩短为原来的 <MathTex tex="\frac{1}{2}" />：</p>
                    <p className="text-lg"><MathTex tex="y = \sin\!\left(x + \frac{\pi}{4}\right) \;\rightarrow\; y = \sin\!\left(2x + \frac{\pi}{4}\right)" /></p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                  <div>
                    <p>纵坐标乘以 3：</p>
                    <p className="text-lg"><MathTex tex="y = \sin\!\left(2x + \frac{\pi}{4}\right) \;\rightarrow\; y = 3\sin\!\left(2x + \frac{\pi}{4}\right)" /></p>
                  </div>
                </div>
              </div>

              <p className="font-bold text-purple-700 mb-0.5">路线二（先伸缩后平移）：</p>
              <div className="space-y-1">
                <div className="flex items-start gap-2">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                  <div>
                    <p>横坐标缩短为原来的 <MathTex tex="\frac{1}{2}" />：</p>
                    <p className="text-lg"><MathTex tex="y = \sin x \;\rightarrow\; y = \sin 2x" /></p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                  <div>
                    <p>向左平移 <MathTex tex="\frac{\varphi}{\omega} = \frac{\pi/4}{2} = \frac{\pi}{8}" /> 个单位<span className="text-red-600 font-bold">（不是 <MathTex tex="\frac{\pi}{4}" />！）</span>：</p>
                    <p className="text-lg"><MathTex tex="y = \sin 2x \;\rightarrow\; y = \sin\!\left(2x + \frac{\pi}{4}\right)" /></p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                  <div>
                    <p>纵坐标乘以 3：</p>
                    <p className="text-lg"><MathTex tex="y = \sin\!\left(2x + \frac{\pi}{4}\right) \;\rightarrow\; y = 3\sin\!\left(2x + \frac{\pi}{4}\right)" /></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-2 border border-purple-200 mb-1">
              <p className="font-bold text-purple-800 mb-1">📝 例题 — 逆向：由函数反推变换</p>
              <div className="bg-gray-50 rounded p-1.5 mb-1">
                <p>已知 <MathTex tex="y = \sin\!\left(3x + \frac{\pi}{6}\right)" /> 是由 <MathTex tex="y = \sin x" /> 经过变换得到的，用路线一写出变换步骤。</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-start gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                  <div>
                    <p>向左平移 <MathTex tex="\frac{\pi}{6}" /> 个单位：</p>
                    <p className="text-lg"><MathTex tex="y = \sin x \;\rightarrow\; y = \sin\!\left(x + \frac{\pi}{6}\right)" /></p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                  <div>
                    <p>横坐标缩短为原来的 <MathTex tex="\frac{1}{3}" />：</p>
                    <p className="text-lg"><MathTex tex="y = \sin\!\left(x + \frac{\pi}{6}\right) \;\rightarrow\; y = \sin\!\left(3x + \frac{\pi}{6}\right)" /></p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded p-1.5 mt-1 border border-yellow-200">
                <p><strong>对比：</strong>如果用路线二，平移量 = <MathTex tex="\frac{\varphi}{\omega} = \frac{\pi/6}{3} = \frac{\pi}{18}" />（更小！）</p>
                <p className="text-red-600 font-bold">路线二平移量总是比路线一小，因为先压缩了"尺子"。</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-2 border border-purple-200 mb-1">
              <p className="font-bold text-purple-800 mb-1">📝 例题 — 只有平移（ω = 1 的情况）</p>
              <div className="bg-gray-50 rounded p-1.5 mb-1">
                <p>把 <MathTex tex="y = \sin x" /> 变为 <MathTex tex="y = \sin\!\left(x - \frac{\pi}{6}\right)" />，写出变换步骤。</p>
              </div>
              <div className="border-l-4 border-blue-300 pl-2">
                <p>ω = 1（没有伸缩），只需平移：</p>
                <p className="text-lg"><MathTex tex="y = \sin x \;\xrightarrow{\;\text{向右平移}\;\frac{\pi}{6}\;}\; y = \sin\!\left(x - \frac{\pi}{6}\right)" /></p>
                <p className="text-gray-600 mt-0.5">注意：减 <MathTex tex="\frac{\pi}{6}" /> → 向<strong>右</strong>移（左加右减）</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-2 border border-purple-200 mb-1">
              <p className="font-bold text-purple-800 mb-1">📝 例题 — 含纵向拉伸的完整变换</p>
              <div className="bg-gray-50 rounded p-1.5 mb-1">
                <p>用路线一把 <MathTex tex="y = \sin x" /> 变为 <MathTex tex="y = 4\sin\!\left(3x + \frac{\pi}{2}\right)" />。</p>
              </div>
              <div className="space-y-0.5">
                <p>① 向左平移 <MathTex tex="\frac{\pi}{2}" />：<MathTex tex="y = \sin x \;\rightarrow\; y = \sin\!\left(x + \frac{\pi}{2}\right)" /></p>
                <p>② 横坐标缩短为 <MathTex tex="\frac{1}{3}" />：<MathTex tex="y = \sin\!\left(x + \frac{\pi}{2}\right) \;\rightarrow\; y = \sin\!\left(3x + \frac{\pi}{2}\right)" /></p>
                <p>③ 纵坐标乘以 4：<MathTex tex="y = \sin\!\left(3x + \frac{\pi}{2}\right) \;\rightarrow\; y = 4\sin\!\left(3x + \frac{\pi}{2}\right)" /></p>
              </div>
              <p className="text-gray-600 mt-0.5">小发现：左移 <MathTex tex="\frac{\pi}{2}" /> 后 <MathTex tex="\sin" /> 变成了 <MathTex tex="\cos" />，这就是诱导公式的几何含义！</p>
            </div>

            <PageBreak />

            {/* ── 3.3 由图像求解析式 ── */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-2">
              <p className="font-bold text-lg text-green-800 mb-1">3.3 🔥 高考经典：由图像求解析式</p>
              <p className="mb-1">高考最爱考的题型：<strong>给你一段波形图，让你写出 y = Asin(ωx+φ) 的表达式。</strong></p>
              <p className="mb-1">别慌，就三步！</p>

              {/* 三步走 */}
              <div className="bg-white rounded-lg p-2 border border-green-200 mb-1">
                <p className="font-bold text-green-800 mb-1 text-lg">解题三步走</p>

                {/* Step 1 */}
                <div className="border-l-4 border-red-400 pl-2 mb-1">
                  <p className="font-bold text-red-700 text-lg">第①步：求 A（看高度）</p>
                  <p>从图上找到<strong>最高点</strong>和<strong>最低点</strong>的 y 值：</p>
                  <p className="text-lg"><MathTex tex="A = \frac{y_{max} - y_{min}}{2}" /></p>
                  <div className="bg-red-50 rounded p-1.5 mt-0.5">
                    <p><strong>举例：</strong>最高点 y = 3，最低点 y = -1</p>
                    <p>→ <MathTex tex="A = \frac{3-(-1)}{2} = \frac{4}{2} = 2" /></p>
                    <p className="text-gray-500">提示：如果题目直接给了“最大值为 2”，那 A = 2，秒杀。</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="border-l-4 border-blue-400 pl-2 mb-1">
                  <p className="font-bold text-blue-700 text-lg">第②步：求 ω（看周期）</p>
                  <p>从图上量出<strong>一个完整周期 T</strong>的长度，然后：</p>
                  <p className="text-lg"><MathTex tex="\omega = \frac{2\pi}{T}" /></p>
                  <div className="bg-blue-50 rounded p-1.5 mt-0.5">
                    <p><strong>怎么量 T？最方便的几种方法：</strong></p>
                    <p>• 两个<strong>相邻最高点</strong>之间的距离 = T</p>
                    <p>• 找不到两个最高点？最高点到相邻最低点 = <strong>T/2</strong>，乘 2 就行</p>
                    <p>• 两个<strong>相邻同向零点</strong>（都从下往上穿）之间 = T</p>
                    <p><strong>举例：</strong>两个最高点的 x 分别是 <MathTex tex="\frac{\pi}{6}" /> 和 <MathTex tex="\frac{7\pi}{6}" /></p>
                    <p>→ <MathTex tex="T = \frac{7\pi}{6} - \frac{\pi}{6} = \pi" /> → <MathTex tex="\omega = \frac{2\pi}{\pi} = 2" /></p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="border-l-4 border-green-400 pl-2">
                  <p className="font-bold text-green-700 text-lg">第③步：求 φ（代特殊点）</p>
                  <p>找图上一个<strong>能读出坐标的点</strong>，代入公式求 φ。</p>
                  <div className="bg-green-50 rounded p-1.5 mt-0.5">
                    <p><strong>技巧：优先用这些特殊点 👇</strong></p>
                    <p className="text-lg">• <strong>最高点</strong> <MathTex tex="(x_0,\, A)" />：<MathTex tex="\sin = 1" /> → <MathTex tex="\omega x_0 + \varphi = \frac{\pi}{2}" /></p>
                    <p className="text-lg">• <strong>上升零点</strong> <MathTex tex="(x_0,\, 0)" />：<MathTex tex="\sin = 0" /> → <MathTex tex="\omega x_0 + \varphi = 0" /></p>
                    <p className="text-lg">• <strong>最低点</strong> <MathTex tex="(x_0,\, -A)" />：<MathTex tex="\sin = -1" /> → <MathTex tex="\omega x_0 + \varphi = -\frac{\pi}{2}" /></p>
                    <p className="text-red-600 font-bold mt-0.5">⚠️ 最后别忘了检查：<MathTex tex="|\varphi| \leq \dfrac{\pi}{2}" /></p>
                  </div>
                </div>
              </div>

              {/* 例题1 */}
              <div className="bg-white rounded-lg p-2 border border-green-200 mb-1">
                <p className="font-bold text-green-800 mb-1">📝 例题 1 — 条件直给型（基础）</p>
                <div className="bg-gray-50 rounded-lg p-1.5 mb-1">
                  <p>已知 <MathTex tex="f(x) = 2\sin(\omega x + \varphi)" />（ω {'>'} 0，<MathTex tex="|\varphi| \leq \frac{\pi}{2}" />），</p>
                  <p>最大值为 2，最小正周期为 π，且 <MathTex tex="f(0) = 1" />。求解析式。</p>
                </div>

                <div className="space-y-2">
                  <div className="border-l-4 border-red-300 pl-3">
                    <p><strong>第①步 求 A：</strong>题目说"最大值为 2"</p>
                    <p className="ml-4">→ 最大值 = A = <strong>2</strong>（秒杀 ✓）</p>
                  </div>

                  <div className="border-l-4 border-blue-300 pl-3">
                    <p><strong>第②步 求 ω：</strong>题目说"最小正周期为 π"</p>
                    <p className="ml-4 text-lg">→ <MathTex tex="\omega = \frac{2\pi}{T} = \frac{2\pi}{\pi} = 2" /></p>
                  </div>

                  <div className="border-l-4 border-green-300 pl-3">
                    <p><strong>第③步 求 φ：</strong>代入 f(0) = 1</p>
                    <p className="ml-4 text-lg"><MathTex tex="f(0) = 2\sin(2 \times 0 + \varphi) = 2\sin\varphi = 1" /></p>
                    <p className="ml-4 text-lg"><MathTex tex="\sin\varphi = \frac{1}{2}" /> → <MathTex tex="\varphi = \frac{\pi}{6}" />（满足 <MathTex tex="|\varphi| \leq \frac{\pi}{2}" /> ✓）</p>
                  </div>

                  <p className="font-bold text-green-700 bg-green-50 p-2 rounded mt-1 text-lg">∴ <MathTex tex="f(x) = 2\sin\!\left(2x + \frac{\pi}{6}\right)" /></p>
                </div>
              </div>

              {/* 例题2 */}
              <div className="bg-white rounded-lg p-2 border border-green-200 mb-1">
                <p className="font-bold text-green-800 mb-1">📝 例题 2 — 看图求解析式（进阶）</p>
                <div className="bg-gray-50 rounded-lg p-1.5 mb-1">
                  <p>已知 <MathTex tex="f(x) = A\sin(\omega x + \varphi)" />（A {'>'} 0，ω {'>'} 0，<MathTex tex="|\varphi| \leq \frac{\pi}{2}" />），</p>
                  <p>图像的最高点为 <MathTex tex="\left(\frac{\pi}{12},\; 2\right)" />，相邻最低点为 <MathTex tex="\left(\frac{7\pi}{12},\; -2\right)" />。求解析式。</p>
                </div>

                <div className="space-y-2">
                  <div className="border-l-4 border-red-300 pl-3">
                    <p><strong>第①步 求 A：</strong></p>
                    <p className="ml-4 text-lg">最高 y = 2，最低 y = −2 → <MathTex tex="A = \frac{2-(-2)}{2} = 2" /></p>
                  </div>

                  <div className="border-l-4 border-blue-300 pl-3">
                    <p><strong>第②步 求 ω：</strong>最高点到相邻最低点 = 半个周期</p>
                    <p className="ml-4 text-lg"><MathTex tex="\frac{T}{2} = \frac{7\pi}{12} - \frac{\pi}{12} = \frac{6\pi}{12} = \frac{\pi}{2}" /> → <MathTex tex="T = \pi" /></p>
                    <p className="ml-4 text-lg"><MathTex tex="\omega = \frac{2\pi}{\pi} = 2" /></p>
                  </div>

                  <div className="border-l-4 border-green-300 pl-3">
                    <p><strong>第③步 求 φ：</strong>用最高点（sin = 1 时最方便）</p>
                    <p className="ml-4 text-lg">在最高点处 <MathTex tex="\omega x + \varphi = \frac{\pi}{2}" /></p>
                    <p className="ml-4 text-lg"><MathTex tex="2 \times \frac{\pi}{12} + \varphi = \frac{\pi}{2}" /></p>
                    <p className="ml-4 text-lg"><MathTex tex="\frac{\pi}{6} + \varphi = \frac{\pi}{2}" /> → <MathTex tex="\varphi = \frac{\pi}{2} - \frac{\pi}{6} = \frac{\pi}{3}" />（满足 <MathTex tex="|\varphi| \leq \frac{\pi}{2}" /> ✓）</p>
                  </div>

                  <p className="font-bold text-green-700 bg-green-50 p-2 rounded mt-1 text-lg">∴ <MathTex tex="f(x) = 2\sin\!\left(2x + \frac{\pi}{3}\right)" /></p>
                </div>
              </div>
            </div>

            {/* 易错总结 */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-2">
              <p className="font-bold text-red-800 mb-1">⚠️ 本节四大易错点</p>
              <div className="space-y-1">
                <p><strong className="text-red-700">❶</strong> 求 ω 时搞反公式：是 <MathTex tex="\omega = \frac{2\pi}{T}" />，<strong>不是</strong> <MathTex tex="\omega = 2\pi T" /></p>
                <p><strong className="text-red-700">❷</strong> 路线二的平移量写成 <MathTex tex="\varphi" /> 而不是 <MathTex tex="\frac{\varphi}{\omega}" /></p>
                <p><strong className="text-red-700">❸</strong> 求出 φ 后忘了检查 <MathTex tex="|\varphi| \leq \frac{\pi}{2}" /></p>
                <p><strong className="text-red-700">❹</strong> “最高点到最低点”是半个周期 <MathTex tex="\frac{T}{2}" />，不是一个周期 <MathTex tex="T" /></p>
              </div>
            </div>

            {/* 3.3 实战例题 */}
            <div className="bg-white rounded-lg p-2 border border-green-200 mb-1">
              <p className="font-bold text-green-800 mb-1">📝 例题 3 — 综合实战</p>
              <div className="bg-gray-50 rounded-lg p-1.5 mb-1">
                <p>已知 <MathTex tex="f(x) = A\sin(\omega x + \varphi)" />（<MathTex tex="A > 0,\; \omega > 0,\; |\varphi| \leq \frac{\pi}{2}" />），</p>
                <p>最大值为 3，最小正周期为 <MathTex tex="\pi" />，且 <MathTex tex="f(0) = \frac{3}{2}" />。求解析式。</p>
              </div>

              <div className="space-y-2">
                <div className="border-l-4 border-red-300 pl-3">
                  <p><strong>第①步 求 A：</strong>题目说"最大值为 3"</p>
                  <p className="ml-4">→ 最大值 = A = <strong>3</strong>（秒杀 ✓）</p>
                </div>

                <div className="border-l-4 border-blue-300 pl-3">
                  <p><strong>第②步 求 ω：</strong>题目说"最小正周期为 π"</p>
                  <p className="ml-4 text-lg">→ <MathTex tex="\omega = \frac{2\pi}{T} = \frac{2\pi}{\pi} = 2" /></p>
                </div>

                <div className="border-l-4 border-green-300 pl-3">
                  <p><strong>第③步 求 φ：</strong>代入 <MathTex tex="f(0) = \frac{3}{2}" /></p>
                  <p className="ml-4 text-lg"><MathTex tex="f(0) = 3\sin(2 \times 0 + \varphi) = 3\sin\varphi = \frac{3}{2}" /></p>
                  <p className="ml-4 text-lg"><MathTex tex="\sin\varphi = \frac{1}{2}" /> → <MathTex tex="\varphi = \frac{\pi}{6}" />（满足 <MathTex tex="|\varphi| \leq \frac{\pi}{2}" /> ✓）</p>
                </div>

                <p className="font-bold text-green-700 bg-green-50 p-2 rounded mt-1 text-lg">∴ <MathTex tex="f(x) = 3\sin\!\left(2x + \frac{\pi}{6}\right)" /></p>
              </div>
            </div>

            {/* 速查卡：填充页底空白 */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-2 mt-1" style={{ breakInside: 'avoid' }}>
              <table className="w-full text-center text-base">
                <thead>
                  <tr className="border-b-2 border-blue-300">
                    <th className="py-0.5 text-blue-700">步骤</th>
                    <th className="py-0.5 text-blue-700">求什么</th>
                    <th className="py-0.5 text-blue-700">怎么求</th>
                    <th className="py-0.5 text-blue-700">公式</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-blue-100">
                    <td className="py-0.5 font-bold text-red-600 text-lg">①</td>
                    <td className="py-0.5 text-lg"><MathTex tex="A" /></td>
                    <td className="py-0.5">最大值或振幅</td>
                    <td className="py-0.5 text-lg"><MathTex tex="A = \frac{y_{\max} - y_{\min}}{2}" /></td>
                  </tr>
                  <tr className="border-b border-blue-100">
                    <td className="py-0.5 font-bold text-blue-600 text-lg">②</td>
                    <td className="py-0.5 text-lg"><MathTex tex="\omega" /></td>
                    <td className="py-0.5">周期 T</td>
                    <td className="py-0.5 text-lg"><MathTex tex="\omega = \frac{2\pi}{T}" /></td>
                  </tr>
                  <tr>
                    <td className="py-0.5 font-bold text-green-600 text-lg">③</td>
                    <td className="py-0.5 text-lg"><MathTex tex="\varphi" /></td>
                    <td className="py-0.5">代特殊点</td>
                    <td className="py-0.5 text-lg">解 <MathTex tex="\sin=?" />，查 <MathTex tex="|\varphi|\leq\frac{\pi}{2}" /></td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 4: 性质综合应用 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="tf-properties" className="mb-3 scroll-mt-4">
        <Collapsible title="四、性质综合应用" defaultOpen storageKey="trig-func:properties" headerExtra={<SpeakButton text={trigFuncNarrations.properties} />}>
          <p className="text-blue-600 mb-1">🎯 学完你能：求 y = Asin(ωx+φ) 的单调区间、对称轴、对称中心、给定区间上的最值。</p>
          <p className="text-gray-600 mb-2">高考选择/填空必考一道，大题也经常涉及。掌握"整体法"就够了。</p>
          <div className="space-y-0 text-gray-700">

            {/* ── 4.1 整体法核心思路 ── */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-2">
              <p className="font-bold text-lg text-blue-800 mb-0.5">4.1 整体法（万能方法）</p>
              <p className="mb-0.5">核心思路：把 <MathTex tex="\omega x + \varphi" /> 看作一个<strong>整体</strong>（记作 u），然后直接套 <MathTex tex="y = \sin u" /> 的性质。</p>

              <div className="bg-white rounded-lg p-1.5 border border-blue-100">
                <p className="font-bold text-blue-700 mb-1">解题模板（每次都是这三步）</p>
                <div className="space-y-1">
                  <div className="flex items-start gap-2">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                    <p>写出 u 的表达式：<MathTex tex="u = \omega x + \varphi" /></p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                    <p>套 sin u 的性质（递增/递减/对称轴/对称中心/最值）</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                    <p>解不等式或方程，把 u 还原成 x</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-1.5 border border-blue-100 mt-0.5">
                <p className="font-bold text-blue-700 mb-1">要套的 sin u 性质一览</p>
                <div className="space-y-0.5">
                  <p><strong>递增：</strong><MathTex tex="-\frac{\pi}{2} + 2k\pi \leq u \leq \frac{\pi}{2} + 2k\pi" /></p>
                  <p><strong>递减：</strong><MathTex tex="\frac{\pi}{2} + 2k\pi \leq u \leq \frac{3\pi}{2} + 2k\pi" /></p>
                  <p><strong>对称轴：</strong><MathTex tex="u = \frac{\pi}{2} + k\pi" />（波峰/波谷处）</p>
                  <p><strong>对称中心：</strong><MathTex tex="u = k\pi" /> → 对称中心为 <MathTex tex="(x,\; 0)" /></p>
                  <p><strong>最大值：</strong><MathTex tex="\sin u = 1" /> 时 <MathTex tex="y = A" />　　<strong>最小值：</strong><MathTex tex="\sin u = -1" /> 时 <MathTex tex="y = -A" /></p>
                </div>
              </div>
            </div>

            {/* ── 4.2 例题1：求单调递增区间 ── */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-2">
              <p className="font-bold text-green-800 mb-0.5">📝 例题 1 — 求单调递增区间</p>
              <div className="bg-gray-50 rounded p-1 mb-0.5">
                <p>求 <MathTex tex="f(x) = 2\sin\!\left(2x + \frac{\pi}{6}\right)" /> 的单调递增区间。</p>
              </div>
              <div className="bg-white rounded-lg p-1.5 border border-green-100">
                <div className="border-l-4 border-blue-300 pl-3 mb-0.5">
                  <p><strong>第①步 写 u：</strong><MathTex tex="u = 2x + \frac{\pi}{6}" /></p>
                </div>
                <div className="border-l-4 border-blue-300 pl-3 mb-0.5">
                  <p><strong>第②步 套递增条件：</strong></p>
                  <p className="text-lg"><MathTex tex="-\frac{\pi}{2} + 2k\pi \leq 2x + \frac{\pi}{6} \leq \frac{\pi}{2} + 2k\pi" /></p>
                </div>
                <div className="border-l-4 border-blue-300 pl-3 mb-0.5">
                  <p><strong>第③步 解出 x：</strong></p>
                  <p>两边减 <MathTex tex="\frac{\pi}{6}" />：<MathTex tex="-\frac{2\pi}{3} + 2k\pi \leq 2x \leq \frac{\pi}{3} + 2k\pi" /></p>
                  <p>两边除以 2：<MathTex tex="-\frac{\pi}{3} + k\pi \leq x \leq \frac{\pi}{6} + k\pi" /></p>
                </div>
                <p className="font-bold text-green-700 bg-green-50 p-1 rounded">∴ 递增区间为 <MathTex tex="\left[-\frac{\pi}{3}+k\pi,\;\frac{\pi}{6}+k\pi\right]" />（k ∈ Z）</p>
              </div>
            </div>

            {/* ── 4.3 例题2：求单调递减区间 ── */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-2">
              <p className="font-bold text-green-800 mb-0.5">📝 例题 2 — 求单调递减区间</p>
              <div className="bg-gray-50 rounded p-1 mb-0.5">
                <p>求 <MathTex tex="f(x) = 2\sin\!\left(2x + \frac{\pi}{6}\right)" /> 的单调递减区间。</p>
              </div>
              <div className="bg-white rounded-lg p-1 border border-green-100">
                <div className="border-l-4 border-purple-300 pl-3 mb-0.5">
                  <p><strong>第①步 写 u：</strong><MathTex tex="u = 2x + \frac{\pi}{6}" />（和例 1 完全一样）</p>
                </div>
                <div className="border-l-4 border-purple-300 pl-3 mb-0.5">
                  <p><strong>第②步 套递减条件：</strong>（唯一区别：换成递减的范围）</p>
                  <p className="text-lg"><MathTex tex="\frac{\pi}{2} + 2k\pi \leq 2x + \frac{\pi}{6} \leq \frac{3\pi}{2} + 2k\pi" /></p>
                </div>
                <div className="border-l-4 border-purple-300 pl-3 mb-0.5">
                  <p><strong>第③步 解出 x：</strong></p>
                  <p>两边减 <MathTex tex="\frac{\pi}{6}" />：<MathTex tex="\frac{\pi}{3} + 2k\pi \leq 2x \leq \frac{4\pi}{3} + 2k\pi" /></p>
                  <p>两边除以 2：<MathTex tex="\frac{\pi}{6} + k\pi \leq x \leq \frac{2\pi}{3} + k\pi" /></p>
                </div>
                <p className="font-bold text-green-700 bg-green-50 p-1 rounded">∴ 递减区间为 <MathTex tex="\left[\frac{\pi}{6}+k\pi,\;\frac{2\pi}{3}+k\pi\right]" />（k ∈ Z）</p>
                <p className="text-gray-500 mt-0.5">💡 对比例 1：递增区间的右端点 = 递减区间的左端点（都是 <MathTex tex="\frac{\pi}{6}+k\pi" />），因为那里是波峰！</p>
              </div>
            </div>

            <PageBreak />

            {/* ── 4.4 例题3：求对称轴和对称中心 ── */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-2">
              <p className="font-bold text-green-800 mb-0.5">📝 例题 3 — 求对称轴和对称中心</p>
              <div className="bg-gray-50 rounded p-1 mb-0.5">
                <p>求 <MathTex tex="f(x) = \sin\!\left(2x + \frac{\pi}{6}\right)" /> 的对称轴和对称中心。</p>
              </div>
              <div className="bg-white rounded-lg p-1 border border-green-100">
                <div className="grid grid-cols-2 gap-1">
                  <div>
                    <p className="font-bold text-blue-700 mb-0.5">求对称轴</p>
                    <p>令 <MathTex tex="2x + \frac{\pi}{6} = \frac{\pi}{2} + k\pi" /></p>
                    <p><MathTex tex="2x = \frac{\pi}{3} + k\pi" /></p>
                    <p><MathTex tex="x = \frac{\pi}{6} + \frac{k\pi}{2}" /></p>
                    <p className="font-bold text-blue-700 mt-0.5">∴ 对称轴：<MathTex tex="x = \frac{\pi}{6} + \frac{k\pi}{2}" /></p>
                    <p className="text-gray-500 mt-0.5">例如 k=0：<MathTex tex="x = \frac{\pi}{6}" />（波峰）</p>
                  </div>
                  <div>
                    <p className="font-bold text-purple-700 mb-0.5">求对称中心</p>
                    <p>令 <MathTex tex="2x + \frac{\pi}{6} = k\pi" /></p>
                    <p><MathTex tex="2x = -\frac{\pi}{6} + k\pi" /></p>
                    <p><MathTex tex="x = -\frac{\pi}{12} + \frac{k\pi}{2}" /></p>
                    <p className="font-bold text-purple-700 mt-0.5">∴ 对称中心：<MathTex tex="\left(-\frac{\pi}{12}+\frac{k\pi}{2},\; 0\right)" /></p>
                    <p className="text-gray-500 mt-0.5">例如 k=0：<MathTex tex="\left(-\frac{\pi}{12},\; 0\right)" /></p>
                  </div>
                </div>
              </div>
              <div className="bg-amber-50 rounded p-1 border border-amber-200 mt-0.5">
                <p><strong>记忆口诀：</strong>对称轴 = <MathTex tex="\frac{\pi}{2} + k\pi" />（波峰/波谷），对称中心 = <MathTex tex="k\pi" />（过零点）。两者交替出现！</p>
              </div>
            </div>

            {/* ── 4.5 例题4：给定区间求最值（高考大题核心） ── */}
            <div className="bg-red-50 border-2 border-red-300 rounded-xl p-2">
              <p className="font-bold text-lg text-red-700 mb-0.5">📝 例题 4 — 🔥 给定区间上求最值（高考大题核心）</p>
              <div className="bg-gray-50 rounded p-1 mb-0.5">
                <p>求 <MathTex tex="f(x) = 2\sin\!\left(2x + \frac{\pi}{6}\right)" /> 在 <MathTex tex="\left[0,\;\frac{\pi}{2}\right]" /> 上的最大值和最小值。</p>
              </div>

              <div className="bg-white rounded-lg p-1 border border-red-200 mb-0.5">
                <p className="font-bold text-red-700 mb-0.5">⚠️ 为什么不能直接写“最大值 = 2，最小值 = -2”？</p>
                <p>因为 <MathTex tex="x \in \left[0,\;\frac{\pi}{2}\right]" /> 只是一小段，<strong>不一定包含波峰和波谷</strong>！</p>
                <p className="mt-0.5">就像问"上午 8 点到 10 点的最高气温"——不能直接说是全天最高温，要看那段时间气温具体在涨还是在跌。</p>
              </div>

              <div className="bg-white rounded-lg p-1 border border-red-100">
                <p className="font-bold text-blue-700 mb-0.5">解题四步走</p>

                <div className="border-l-4 border-blue-300 pl-3 mb-1">
                  <p><strong>第①步 求 u 的范围：</strong>把 x 的范围代入 <MathTex tex="u = 2x + \frac{\pi}{6}" /></p>
                  <p className="mt-0.5">当 <MathTex tex="x = 0" /> 时，<MathTex tex="u = \frac{\pi}{6}" /></p>
                  <p>当 <MathTex tex="x = \frac{\pi}{2}" /> 时，<MathTex tex="u = 2 \times \frac{\pi}{2} + \frac{\pi}{6} = \frac{7\pi}{6}" /></p>
                  <p className="font-bold mt-0.5">所以 <MathTex tex="u \in \left[\frac{\pi}{6},\;\frac{7\pi}{6}\right]" /></p>
                </div>

                <div className="border-l-4 border-green-300 pl-3 mb-1">
                  <p><strong>第②步 画 sin u 在这段范围内的"走势"：</strong></p>
                  <p className="mt-0.5">在 <MathTex tex="\left[\frac{\pi}{6},\;\frac{7\pi}{6}\right]" /> 内，sin u 的走势是：</p>
                  <div className="bg-blue-50 rounded p-1.5 mt-0.5">
                    <p><MathTex tex="u = \frac{\pi}{6}" />：<MathTex tex="\sin\frac{\pi}{6} = \frac{1}{2}" />（起点）</p>
                    <p><MathTex tex="u = \frac{\pi}{2}" />：<MathTex tex="\sin\frac{\pi}{2} = 1" />（<strong className="text-red-600">最高点 ✓</strong>）</p>
                    <p><MathTex tex="u = \frac{7\pi}{6}" />：<MathTex tex="\sin\frac{7\pi}{6} = -\frac{1}{2}" />（终点，也是<strong className="text-blue-600">最低点 ✓</strong>）</p>
                  </div>
                  <p className="mt-0.5">走势：<strong>先升后降</strong>（从 <MathTex tex="\frac{1}{2}" /> 升到 1，再降到 <MathTex tex="-\frac{1}{2}" />）</p>
                </div>

                <div className="border-l-4 border-red-300 pl-3 mb-1">
                  <p><strong>第③步 找 sin u 的最大值和最小值：</strong></p>
                  <p className="mt-0.5"><MathTex tex="\sin u" /> 的最大值 = 1（在 <MathTex tex="u = \frac{\pi}{2}" /> 处，即 <MathTex tex="x = \frac{\pi}{6}" />）</p>
                  <p><MathTex tex="\sin u" /> 的最小值 = <MathTex tex="-\frac{1}{2}" />（在 <MathTex tex="u = \frac{7\pi}{6}" /> 处，即 <MathTex tex="x = \frac{\pi}{2}" />）</p>
                </div>

                <div className="border-l-4 border-amber-300 pl-3 mb-1">
                  <p><strong>第④步 乘以 A 得最终答案：</strong></p>
                  <p className="mt-0.5">最大值 = <MathTex tex="2 \times 1 = 2" />（在 <MathTex tex="x = \frac{\pi}{6}" /> 时取得）</p>
                  <p>最小值 = <MathTex tex="2 \times \left(-\frac{1}{2}\right) = -1" />（在 <MathTex tex="x = \frac{\pi}{2}" /> 时取得）</p>
                </div>

                <p className="font-bold text-green-700 bg-green-50 p-2 rounded">∴ <MathTex tex="f(x)" /> 在 <MathTex tex="\left[0,\;\frac{\pi}{2}\right]" /> 上的最大值为 <strong>2</strong>，最小值为 <strong>-1</strong></p>
              </div>

              <div className="bg-yellow-50 rounded p-1.5 mt-0.5 border border-yellow-200">
                <p className="font-bold text-yellow-800 mb-0.5">💡 解题要点总结</p>
                <div className="space-y-0.5">
                  <p><strong>①</strong> 先把 x 的范围转换为 u 的范围</p>
                  <p><strong>②</strong> 在 u 的范围内找 sin u 的最大/最小（比较起点、终点、可能的波峰/波谷）</p>
                  <p><strong>③</strong> 别忘了最后乘以 A（如果有 +B 还要加 B）</p>
                  <p><strong>④</strong> 最小值 ≠ -A！只有当区间足够大（包含波谷）时才等于 -A</p>
                </div>
              </div>
            </div>

            <PageBreak />

            {/* ── 4.6 例题5：给定区间求最值（含 +B） ── */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-2">
              <p className="font-bold text-green-800 mb-0.5">📝 例题 5 — 给定区间求最值（含 +B）</p>
              <div className="bg-gray-50 rounded p-1.5 mb-1">
                <p>求 <MathTex tex="f(x) = 2\sin\!\left(2x + \frac{\pi}{6}\right) + 1" /> 在 <MathTex tex="\left[0,\;\frac{\pi}{4}\right]" /> 上的最大值和最小值。</p>
              </div>
              <div className="bg-white rounded-lg p-1.5 border border-green-100">
                <div className="border-l-4 border-blue-300 pl-3 mb-0.5">
                  <p><strong>第①步 求 u 的范围：</strong></p>
                  <p><MathTex tex="x \in \left[0,\;\frac{\pi}{4}\right]" /> → <MathTex tex="u = 2x + \frac{\pi}{6} \in \left[\frac{\pi}{6},\;\frac{2\pi}{3}\right]" /></p>
                </div>
                <div className="border-l-4 border-green-300 pl-3 mb-0.5">
                  <p><strong>第②步 找 sin u 的最大/最小：</strong></p>
                  <p>在 <MathTex tex="\left[\frac{\pi}{6},\;\frac{2\pi}{3}\right]" /> 内，<MathTex tex="\frac{\pi}{2}" /> 在区间内 → 波峰存在</p>
                  <p><MathTex tex="\sin u" /> 最大值 = 1（<MathTex tex="u = \frac{\pi}{2}" />），最小值 = <MathTex tex="\sin\frac{\pi}{6} = \frac{1}{2}" /> 和 <MathTex tex="\sin\frac{2\pi}{3} = \frac{\sqrt{3}}{2}" /> 中较小的 = <MathTex tex="\frac{1}{2}" /></p>
                </div>
                <div className="border-l-4 border-amber-300 pl-3 mb-0.5">
                  <p><strong>第③步 乘 A 加 B：</strong></p>
                  <p>最大值 = <MathTex tex="2 \times 1 + 1 = 3" />　　最小值 = <MathTex tex="2 \times \frac{1}{2} + 1 = 2" /></p>
                </div>
                <p className="font-bold text-green-700 bg-green-50 p-1 rounded">∴ 最大值为 <strong>3</strong>，最小值为 <strong>2</strong>（注意：最小值不是 <MathTex tex="-A + B = -1" />！）</p>
              </div>
            </div>

            {/* ── 4.7 补充：ω为负数时怎么办 ── */}
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-2">
              <p className="font-bold text-purple-800 mb-0.5">📝 补充 — ω 为负数时怎么办？</p>
              <div className="bg-gray-50 rounded p-1 mb-0.5">
                <p>求 <MathTex tex="f(x) = \sin(-2x + \frac{\pi}{3})" /> 的单调递增区间。</p>
              </div>
              <div className="bg-white rounded-lg p-1.5 border border-purple-100">
                <div className="border-l-4 border-red-300 pl-3 mb-0.5">
                  <p><strong>第〇步 先化正！</strong>利用 <MathTex tex="\sin(-\theta) = -\sin\theta" />：</p>
                  <p><MathTex tex="f(x) = \sin(-2x + \frac{\pi}{3}) = -\sin(2x - \frac{\pi}{3})" /></p>
                </div>
                <div className="border-l-4 border-blue-300 pl-3 mb-0.5">
                  <p><strong>关键转换：</strong>前面有负号 → <strong>原函数递增 = sin 递减</strong></p>
                  <p>令 <MathTex tex="\frac{\pi}{2} + 2k\pi \leq 2x - \frac{\pi}{3} \leq \frac{3\pi}{2} + 2k\pi" /></p>
                </div>
                <div className="border-l-4 border-blue-300 pl-3 mb-0.5">
                  <p>加 <MathTex tex="\frac{\pi}{3}" />：<MathTex tex="\frac{5\pi}{6} + 2k\pi \leq 2x \leq \frac{11\pi}{6} + 2k\pi" /></p>
                  <p>除以 2：<MathTex tex="\frac{5\pi}{12} + k\pi \leq x \leq \frac{11\pi}{12} + k\pi" /></p>
                </div>
                <p className="font-bold text-purple-700 bg-purple-50 p-1 rounded">∴ 递增区间为 <MathTex tex="\left[\frac{5\pi}{12}+k\pi,\;\frac{11\pi}{12}+k\pi\right]" />（k ∈ Z）</p>
              </div>
              <p className="text-gray-500 mt-0.5">💡 口诀：<strong>负号提出来，递增变递减</strong>（反过来也一样）</p>
            </div>

            {/* ── 4.8 易错总结 ── */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-2">
              <p className="font-bold text-red-800 mb-0.5">⚠️ 本节六大易错点</p>
              <div className="space-y-1">
                <p><strong className="text-red-700">❶</strong> ω 为负数时忘记先化正：<MathTex tex="\sin(-u) = -\sin u" />，先提负号再做题</p>
                <p><strong className="text-red-700">❷</strong> 求单调区间时忘记加 <MathTex tex="2k\pi" />：三角函数是周期性的，区间有无穷多个</p>
                <p><strong className="text-red-700">❸</strong> 给定区间求最值时，直接写 A 和 -A：<strong>要先把 x 范围转为 u 范围，再看 sin u 在该范围内能到多大/多小</strong></p>
                <p><strong className="text-red-700">❹</strong> 比较端点值时算错：记得比较<strong>起点、终点、区间内的波峰/波谷</strong>三者</p>
                <p><strong className="text-red-700">❺</strong> 有 +B 时忘记加 B：最终答案 = A × sin(最值) <strong>+ B</strong></p>
                <p><strong className="text-red-700">❻</strong> 对称轴和对称中心搞混：波峰/波谷 = 对称轴（一条线），过零点 = 对称中心（一个点）</p>
              </div>
            </div>

            {/* ── 4.9 性质速查表 ── */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-2">
              <p className="font-bold text-amber-800 mb-1">📝 性质速查表</p>
              <div className="bg-white rounded-lg p-2 border border-amber-100 overflow-x-auto">
                <table className="w-full text-sm text-center">
                  <thead>
                    <tr className="border-b-2 border-amber-200">
                      <th className="py-1 px-2 text-left">性质</th>
                      <th className="py-1 px-2">y = sin x</th>
                      <th className="py-1 px-2">y = cos x</th>
                      <th className="py-1 px-2">y = tan x</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 px-2 text-left font-bold">周期</td>
                      <td className="py-1 px-2"><MathTex tex="2\pi" /></td>
                      <td className="py-1 px-2"><MathTex tex="2\pi" /></td>
                      <td className="py-1 px-2"><MathTex tex="\pi" /></td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 px-2 text-left font-bold">奇偶性</td>
                      <td className="py-1 px-2">奇函数</td>
                      <td className="py-1 px-2">偶函数</td>
                      <td className="py-1 px-2">奇函数</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 px-2 text-left font-bold">值域</td>
                      <td className="py-1 px-2"><MathTex tex="[-1,\; 1]" /></td>
                      <td className="py-1 px-2"><MathTex tex="[-1,\; 1]" /></td>
                      <td className="py-1 px-2"><MathTex tex="(-\infty, +\infty)" /></td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 px-2 text-left font-bold">递增</td>
                      <td className="py-1 px-2"><MathTex tex="\left[-\frac{\pi}{2},\;\frac{\pi}{2}\right]" /></td>
                      <td className="py-1 px-2"><MathTex tex="[-\pi,\; 0]" /></td>
                      <td className="py-1 px-2"><MathTex tex="\left(-\frac{\pi}{2},\;\frac{\pi}{2}\right)" /></td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 px-2 text-left font-bold">对称轴</td>
                      <td className="py-1 px-2"><MathTex tex="x=\frac{\pi}{2}+k\pi" /></td>
                      <td className="py-1 px-2"><MathTex tex="x=k\pi" /></td>
                      <td className="py-1 px-2">无</td>
                    </tr>
                    <tr>
                      <td className="py-1 px-2 text-left font-bold">对称中心</td>
                      <td className="py-1 px-2"><MathTex tex="(k\pi,\; 0)" /></td>
                      <td className="py-1 px-2"><MathTex tex="\left(\frac{\pi}{2}+k\pi,\; 0\right)" /></td>
                      <td className="py-1 px-2"><MathTex tex="\left(\frac{k\pi}{2},\; 0\right)" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* 高考真题 + 精华题 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section className="mb-3">
        <h2 className="text-xl font-bold text-red-800 mb-2 border-b-2 border-red-300 pb-1">🔥 高考真题 & 精华题</h2>
        <p className="text-gray-600 mb-2">覆盖前面所学全部知识点：诱导公式、图像性质、参数识别、图像变换、由图求解析式、性质综合应用。</p>
        <PracticeCard questions={trigFuncExam} title="🔥 高考真题 & 精华题（8 题）" printOptionCols={2} explanations={trigFuncExplanations} />
      </section>

      {/* ═══ 打印模式：答案与解析 ═══ */}
      {isPrinting && printOptions.showAnswers && <TrigFuncAnswers />}

      </LessonLayout>
      <DebugToggle />
    </div>
  );
}
