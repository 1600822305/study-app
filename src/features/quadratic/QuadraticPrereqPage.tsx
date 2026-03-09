import { Math, Collapsible, SpeakButton, PageHeader, LessonLayout, CalloutCard, ExportButton, PageBreak } from '@/components/shared';
import { quadraticPrereqNarrations } from './data/prereq-narrations';
import { quadraticPrereqProgressItems } from './data/prereq-progress';
import { useProgress, usePrintMode } from '@/hooks';
import { scrollToId } from '@/lib/scroll';


export function QuadraticPrereqPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('quadratic-prereq', quadraticPrereqProgressItems);
  usePrintMode();

  return (
    <div>
      <PageHeader
        stage="前置准备"
        variant="prereq"
        title="2.2 二次函数前置知识"
        narration={quadraticPrereqNarrations.intro}
        subtitle="学二次函数之前，先确保乘法公式、因式分解、解方程没问题"
        tags={[
          { label: '约20-30分钟', color: 'amber' },
          { label: '初中基础', color: 'green' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="2.2 二次函数前置知识" />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-5 mb-4">
        <p className="font-bold text-gray-800 mb-2">📋 知识地图</p>
        <div className="text-gray-600 space-y-1">
          <button onClick={() => scrollToId('qp-formulas')} className="block text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">一、乘法公式（完全平方 + 平方差）</button>
          <button onClick={() => scrollToId('qp-factoring')} className="block text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">二、因式分解（提公因式 + 公式法 + 十字相乘）</button>
          <button onClick={() => scrollToId('qp-equation')} className="block text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">三、解一元二次方程（因式分解法 + 求根公式）</button>
        </div>
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 1: 乘法公式 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="qp-formulas" className="mb-6 scroll-mt-4">
        <Collapsible title="一、乘法公式" defaultOpen storageKey="quad-prereq:formulas" headerExtra={<SpeakButton text={quadraticPrereqNarrations.formulas} />}>
          <p className="text-blue-600 mb-1">🎯 学完你能：秒展开完全平方式和平方差，为配方法和因式分解打基础。</p>
          <div className="space-y-2 text-gray-700">

            {/* 为什么要学 */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-2">
              <p className="text-blue-700"><strong className="text-blue-800">为什么要搞定乘法公式？</strong> 二次函数的核心操作就两个：<strong>展开</strong>（乘法公式）和<strong>因式分解</strong>（反用乘法公式）。配方法更是直接用完全平方公式。</p>
            </div>

            {/* 完全平方公式 */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-3">
              <p className="text-orange-700 font-bold mb-1">必背！完全平方公式</p>
              <div className="bg-white border border-orange-100 rounded-lg p-2 text-center">
                <p><Math tex="(a + b)^2 = a^2 + 2ab + b^2" /></p>
                <p className="mt-0.5"><Math tex="(a - b)^2 = a^2 - 2ab + b^2" /></p>
              </div>
              <div className="bg-white border border-orange-100 rounded-lg p-2 mt-1.5">
                <p className="font-bold text-gray-800 mb-0.5">口诀：首平方，尾平方，中间两倍首尾积</p>
                <p>例1：<Math tex="(x + 5)^2 = x^2 + 10x + 25" /> ｜ 例2：<Math tex="(3x - 2)^2 = 9x^2 - 12x + 4" /></p>
              </div>
            </div>

            {/* 平方差公式 */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-3">
              <p className="text-green-700 font-bold mb-1">必背！平方差公式</p>
              <div className="bg-white border border-green-100 rounded-lg p-2 text-center">
                <Math tex="(a + b)(a - b) = a^2 - b^2" />
              </div>
              <div className="bg-white border border-green-100 rounded-lg p-2 mt-1.5">
                <p className="font-bold text-gray-800 mb-0.5">口诀：和与差的积 = 平方差</p>
                <p>例1：<Math tex="(x + 7)(x - 7) = x^2 - 49" /> ｜ 例2：<Math tex="(2a + 3b)(2a - 3b) = 4a^2 - 9b^2" /></p>
              </div>
            </div>

            <CalloutCard variant="warning" title="⚠️ 易错点">
              <div className="space-y-2">
                <p><strong>完全平方忘记中间项</strong>：<Math tex="(a+b)^2 \neq a^2 + b^2" />，中间还有 <Math tex="2ab" />！</p>
                <p><strong>符号搞错</strong>：<Math tex="(a-b)^2" /> 中间项是 <Math tex="-2ab" />（负号），不是 <Math tex="+2ab" /></p>
              </div>
            </CalloutCard>

            {/* 速算检验 */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
              <p className="font-bold text-gray-800 mb-1">🧠 速算检验：心算填空</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                <p><Math tex="(x+4)^2 =" /> <span className="text-gray-400">______</span></p>
                <p><Math tex="(x-6)^2 =" /> <span className="text-gray-400">______</span></p>
                <p><Math tex="(x+3)(x-3) =" /> <span className="text-gray-400">______</span></p>
                <p><Math tex="(2x+1)^2 =" /> <span className="text-gray-400">______</span></p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 2: 因式分解 */}
      {/* ════════════════════════════════════════════════════════ */}
      <PageBreak />
      <section id="qp-factoring" className="mb-6 scroll-mt-4">
        <Collapsible title="二、因式分解" defaultOpen storageKey="quad-prereq:factoring" headerExtra={<SpeakButton text={quadraticPrereqNarrations.factoring} />}>
          <p className="text-blue-600 mb-1">🎯 学完你能：把多项式拆成因式相乘，这是解二次方程最快的方法。</p>
          <div className="space-y-2 text-gray-700">

            {/* 三种方法速查 */}
            <table className="w-full text-base border-collapse">
              <thead>
                <tr className="bg-orange-50">
                  <th className="border border-orange-200 px-3 py-1.5 text-left text-orange-700">方法</th>
                  <th className="border border-orange-200 px-3 py-1.5 text-center text-orange-700">例子</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-3 py-1.5 font-bold whitespace-nowrap">① 提公因式</td>
                  <td className="border border-gray-200 px-3 py-1.5"><Math tex="6x^2 + 9x = 3x(2x + 3)" /></td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-3 py-1.5 font-bold whitespace-nowrap">② 平方差公式</td>
                  <td className="border border-gray-200 px-3 py-1.5"><Math tex="x^2 - 16 = (x+4)(x-4)" /></td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-3 py-1.5 font-bold whitespace-nowrap">③ 完全平方</td>
                  <td className="border border-gray-200 px-3 py-1.5"><Math tex="x^2 + 8x + 16 = (x+4)^2" /></td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-3 py-1.5 font-bold whitespace-nowrap">④ 十字相乘</td>
                  <td className="border border-gray-200 px-3 py-1.5"><Math tex="x^2 - 7x + 12 = (x-3)(x-4)" /> <span className="text-gray-500 text-sm">（积=12, 和=-7）</span></td>
                </tr>
              </tbody>
            </table>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-2">
              <p className="text-blue-700"><strong>十字相乘口诀</strong>：对 <Math tex="x^2 + bx + c" />，找两个数使得 <strong>积 = c，和 = b</strong>，就能拆。</p>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 3: 解一元二次方程 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="qp-equation" className="mb-6 scroll-mt-4">
        <Collapsible title="三、解一元二次方程" defaultOpen storageKey="quad-prereq:equation" headerExtra={<SpeakButton text={quadraticPrereqNarrations.quadraticEquation} />}>
          <p className="text-blue-600 mb-1">🎯 标准形式 <Math tex="ax^2 + bx + c = 0" />，两种解法选一个。</p>
          <div className="space-y-2 text-gray-700">

            {/* 两种解法速查 */}
            <table className="w-full text-base border-collapse">
              <thead>
                <tr className="bg-purple-50">
                  <th className="border border-purple-200 px-3 py-1.5 text-left text-purple-700">解法</th>
                  <th className="border border-purple-200 px-3 py-1.5 text-center text-purple-700">步骤</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-3 py-1.5 font-bold whitespace-nowrap">因式分解法<br /><span className="text-sm text-gray-500 font-normal">（优先用）</span></td>
                  <td className="border border-gray-200 px-3 py-1.5"><Math tex="x^2 - x - 6 = (x-3)(x+2) = 0 \;\Rightarrow\; x = 3 \text{ 或 } x = -2" /></td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-3 py-1.5 font-bold whitespace-nowrap">求根公式<br /><span className="text-sm text-gray-500 font-normal">（万能保底）</span></td>
                  <td className="border border-gray-200 px-3 py-1.5"><Math tex="x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}" /></td>
                </tr>
              </tbody>
            </table>

            <CalloutCard variant="warning" title="⚠️ 易错点">
              <div className="space-y-1">
                <p><strong>求根公式 b 前有负号</strong>：<Math tex="b = -4" /> 时 <Math tex="-b = 4" />，别漏！</p>
                <p><strong>Δ 公式</strong>：是 <Math tex="b^2 - 4ac" /> 不是 <Math tex="b^2 - 2ac" /></p>
              </div>
            </CalloutCard>

            {/* 求根公式完整例题 */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
              <p className="font-bold text-gray-800 mb-2">📝 求根公式实战演示</p>
              <p className="mb-1">解方程：<Math tex="x^2 - 4x + 1 = 0" /></p>
              <div className="pl-3 border-l-2 border-purple-300 space-y-1">
                <p><strong>① 识别系数</strong>：<Math tex="a = 1,\; b = -4,\; c = 1" /></p>
                <p><strong>② 算 Δ</strong>：<Math tex="\Delta = (-4)^2 - 4(1)(1) = 16 - 4 = 12" /></p>
                <p><strong>③ 代入公式</strong>：<Math tex="x = \dfrac{-(-4) \pm \sqrt{12}}{2 \times 1} = \dfrac{4 \pm 2\sqrt{3}}{2}" /></p>
                <p><strong>④ 化简</strong>：<Math tex="x = 2 \pm \sqrt{3}" /></p>
              </div>
            </div>

            {/* 判别式速查 */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="font-bold text-blue-800 mb-1">💡 判别式 Δ 决定根的个数</p>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-white rounded-lg p-2 border border-blue-100">
                  <p className="font-bold text-green-600"><Math tex="\Delta > 0" /></p>
                  <p className="text-sm">两个不等实根</p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-blue-100">
                  <p className="font-bold text-amber-600"><Math tex="\Delta = 0" /></p>
                  <p className="text-sm">两个相等实根</p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-blue-100">
                  <p className="font-bold text-red-600"><Math tex="\Delta < 0" /></p>
                  <p className="text-sm">无实根</p>
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
