import { Math, Collapsible, SpeakButton, PageHeader, LessonLayout, CalloutCard, ExportButton } from '@/components/shared';
import { functionPrereqNarrations } from './data/prereq-narrations';
import { functionPrereqProgressItems } from './data/prereq-progress';
import { useProgress, usePrintMode } from '@/hooks';
import { scrollToId } from '@/lib/scroll';

export function FunctionPrereqPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('function-prereq', functionPrereqProgressItems);
  usePrintMode();

  return (
    <div>
      <PageHeader
        stage="前置准备"
        variant="prereq"
        title="3.0.5 区间与定义域基础"
        narration={functionPrereqNarrations.intro}
        subtitle="高中函数的定义域、值域、单调区间都要用区间表示，先把这个搞定"
        tags={[
          { label: '约30-40分钟', color: 'amber' },
          { label: '初中基础', color: 'green' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="3.0.5 区间与定义域基础" />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-2 mb-1">
        <p className="font-bold text-gray-800 mb-1">📋 知识地图</p>
        <div className="text-gray-600 space-y-0.5">
          <button onClick={() => scrollToId('fp-intervals')} className="block text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">一、区间表示法（高中函数必备语言）</button>
          <button onClick={() => scrollToId('fp-numberline')} className="block text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">二、不等式解集与数轴（定义域的基础）</button>
        </div>
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* Section 1: 区间表示法 */}
      {/* ════════════════════════════════════════════════════════════ */}
      <section id="fp-intervals" className="mb-1 scroll-mt-4">
        <Collapsible title="一、区间表示法" defaultOpen storageKey="func-prereq:intervals" headerExtra={<SpeakButton text={functionPrereqNarrations.intervals} />}>
          <div className="space-y-1 text-gray-700">

            {/* 区间是什么 - 生活引入 */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-2">
              <p className="leading-7"><strong className="text-amber-800">🌡️ 生活中的"区间"</strong> — 空调遥控器上写"制冷范围 18°~26°"，这就是一个区间！区间 = <strong>数轴上一段连续的范围</strong>，高中函数的定义域、值域、单调区间全部要用它来表示。</p>
            </div>

            {/* 区间类型速查表 */}
            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-0.5">📖 五种区间（高中定义域/值域/单调区间必用）</p>
              <table className="w-full text-base border-collapse">
                <thead>
                  <tr className="bg-purple-50">
                    <th className="border border-purple-200 px-2 py-1 text-left text-purple-700">名称</th>
                    <th className="border border-purple-200 px-2 py-1 text-center text-purple-700">符号</th>
                    <th className="border border-purple-200 px-2 py-1 text-center text-purple-700">含义</th>
                    <th className="border border-purple-200 px-2 py-1 text-center text-purple-700">数轴</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1 font-bold">闭区间</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="[a,\; b]" /></td>
                    <td className="border border-gray-200 px-2 py-1"><Math tex="a \leq x \leq b" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center">●——●</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-1 font-bold">开区间</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="(a,\; b)" /></td>
                    <td className="border border-gray-200 px-2 py-1"><Math tex="a < x < b" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center">○——○</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1 font-bold">半开半闭</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="[a,\; b)" /> 或 <Math tex="(a,\; b]" /></td>
                    <td className="border border-gray-200 px-2 py-1"><Math tex="a \leq x < b" /> 或 <Math tex="a < x \leq b" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center">●—○ 或 ○—●</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-1 font-bold">到正无穷</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="[a,\; +\infty)" /></td>
                    <td className="border border-gray-200 px-2 py-1"><Math tex="x \geq a" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center">●—→</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1 font-bold">到负无穷</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="(-\infty,\; b)" /></td>
                    <td className="border border-gray-200 px-2 py-1"><Math tex="x < b" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center">←—○</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 铁律 + 补充概念 */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-2">
              <p className="text-orange-700 font-bold mb-0.5">必记！两条铁律</p>
              <p className="leading-7"><strong>①</strong> <Math tex="+\infty" /> 和 <Math tex="-\infty" /> 永远用<strong>圆括号</strong>（无穷取不到） · <strong>②</strong> 方括号 = 包含端点（●），圆括号 = 不包含（○）</p>
            </div>

            {/* 两个新概念：ℝ 和 ∪ */}
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-2">
                <p className="font-bold text-blue-800 mb-0.5">📌 全体实数 <Math tex="\mathbb{R}" /></p>
                <div className="leading-7">
                  <p><Math tex="\mathbb{R} = (-\infty,\; +\infty)" /></p>
                  <p>= 数轴上<strong>所有的数</strong></p>
                  <p>很多函数的定义域就是 <Math tex="\mathbb{R}" /></p>
                  <p>比如 <Math tex="y = 2x + 1" />，<Math tex="x" /> 取啥都行</p>
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-2">
                <p className="font-bold text-green-800 mb-0.5">📌 并集符号 <Math tex="\cup" /></p>
                <div className="leading-7">
                  <p>"并"= <strong>两段合起来</strong></p>
                  <p>比如 <Math tex="x \neq 0" /> 的范围：</p>
                  <p>数轴上挖掉 0，剩两段：</p>
                  <p><Math tex="(-\infty, 0) \cup (0, +\infty)" /></p>
                  <p>读作"负无穷到0 <strong>并</strong> 0到正无穷"</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-2">
              <p className="font-bold text-gray-800 mb-1">🧠 速练：把不等式写成区间</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 leading-7">
                <p><Math tex="1 \leq x \leq 5" /> → <Math tex="[1,\; 5]" /></p>
                <p><Math tex="x > 3" /> → <Math tex="(3,\; +\infty)" /></p>
                <p><Math tex="-2 < x \leq 4" /> → <Math tex="(-2,\; 4]" /></p>
                <p><Math tex="x \leq 0" /> → <Math tex="(-\infty,\; 0]" /></p>
              </div>
              <p className="text-amber-700 mt-1">⚠️ <strong>区间写反</strong>：<Math tex="[5, 1]" /> 错！小数在前。<strong>无穷用方括号</strong>：<Math tex="[2, +\infty]" /> 错！永远圆括号</p>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 2: 不等式解集与数轴 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="fp-numberline" className="mb-2 scroll-mt-4">
        <Collapsible title="二、不等式解集与数轴" defaultOpen storageKey="func-prereq:numberline" headerExtra={<SpeakButton text={functionPrereqNarrations.numberLine} />}>
          <p className="text-blue-600 mb-1">🎯 学完你能：看数轴写区间，看不等式画数轴——函数定义域的基本功。</p>
          <div className="space-y-2 text-gray-700">

            {/* 为什么重要 */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-2">
              <p className="text-blue-700"><strong className="text-blue-800">为什么要练数轴？</strong> 函数的定义域就是“<Math tex="x" /> 能取哪些值”，求定义域本质上就是解不等式，然后用区间表示。数轴是你检验答案的最好工具。</p>
            </div>

            {/* 数轴表示规则 */}
            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-1">📖 数轴标记规则</p>
              <table className="w-full text-base border-collapse">
                <thead>
                  <tr className="bg-green-50">
                    <th className="border border-green-200 px-2 py-1 text-left text-green-700">不等式</th>
                    <th className="border border-green-200 px-2 py-1 text-center text-green-700">端点标记</th>
                    <th className="border border-green-200 px-2 py-1 text-center text-green-700">区间</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1"><Math tex="x \geq 2" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center">● 实心（含2）</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="[2,\; +\infty)" /></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-1"><Math tex="x < 3" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center">○ 空心（不含3）</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="(-\infty,\; 3)" /></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1"><Math tex="-1 \leq x < 4" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center">●—→○</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="[-1,\; 4)" /></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-1"><Math tex="x \neq 0" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center">挖掉0（○）</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="(-\infty, 0) \cup (0, +\infty)" /></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 定义域预告 */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-2">
              <p className="font-bold text-amber-800 mb-0.5">💡 提前预告：常见的定义域限制</p>
              <div className="space-y-0.5 leading-7">
                <p><strong>① 分母不为零</strong>：<Math tex="y = \dfrac{1}{x}" />，要求 <Math tex="x \neq 0" /> → 定义域 <Math tex="(-\infty, 0) \cup (0, +\infty)" /></p>
                <p><strong>② 根号下非负</strong>：<Math tex="y = \sqrt{x - 1}" />，要求 <Math tex="x - 1 \geq 0" /> → 定义域 <Math tex="[1, +\infty)" /></p>
                <p><strong>③ 两个条件同时满足</strong>：<Math tex="y = \dfrac{1}{\sqrt{x - 1}}" />，要求 <Math tex="x - 1 > 0" /> → 定义域 <Math tex="(1, +\infty)" /></p>
              </div>
            </div>

            {/* 即时练习 */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-2">
              <p className="font-bold text-gray-800 mb-1">🧠 速练：写出定义域（区间表示）</p>
              <div className="space-y-0.5 leading-7">
                <p>1. <Math tex="y = \dfrac{1}{x + 2}" /> → <span className="text-gray-400">______</span>（答案：<Math tex="(-\infty, -2) \cup (-2, +\infty)" />）</p>
                <p>2. <Math tex="y = \sqrt{x + 3}" /> → <span className="text-gray-400">______</span>（答案：<Math tex="[-3, +\infty)" />）</p>
                <p>3. <Math tex="y = \sqrt{5 - x}" /> → <span className="text-gray-400">______</span>（答案：<Math tex="(-\infty, 5]" />）</p>
              </div>
            </div>

            <CalloutCard variant="warning" title="⚠️ 易错点">
              <div className="space-y-1">
                <p><strong>根号下大于零还是大于等于零？</strong> 单独 <Math tex="\sqrt{}" /> 是 <Math tex="\geq 0" />（可以等于零）；如果根号在分母，必须 <Math tex="> 0" />（不能等于零）</p>
                <p><strong>并集符号</strong>：<Math tex="x \neq 0" /> 的定义域是两段并起来，用 <Math tex="\cup" /> 连接，不能写成一个区间</p>
              </div>
            </CalloutCard>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* 学以致用：四种函数的定义域 */}
      {/* ════════════════════════════════════════════════════════ */}
      <div className="bg-purple-50 border border-purple-200 rounded-xl p-2 mt-1">
        <p className="font-bold text-purple-800 mb-1">🔗 学以致用：用区间写出四种函数的定义域</p>
        <table className="w-full text-base border-collapse">
          <thead>
            <tr className="bg-purple-100">
              <th className="border border-purple-200 px-2 py-1 text-left text-purple-700">函数</th>
              <th className="border border-purple-200 px-2 py-1 text-center text-purple-700">公式</th>
              <th className="border border-purple-200 px-2 py-1 text-center text-purple-700">定义域</th>
              <th className="border border-purple-200 px-2 py-1 text-center text-purple-700">为什么</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-2 py-1 font-bold">🍎 正比例</td>
              <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="y = kx" /></td>
              <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\mathbb{R}" /></td>
              <td className="border border-gray-200 px-2 py-1">x 取啥都行</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-2 py-1 font-bold">� 一次</td>
              <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="y = kx + b" /></td>
              <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\mathbb{R}" /></td>
              <td className="border border-gray-200 px-2 py-1">x 取啥都行</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-2 py-1 font-bold">🍬 反比例</td>
              <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="y = \dfrac{k}{x}" /></td>
              <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="(-\infty, 0) \cup (0, +\infty)" /></td>
              <td className="border border-gray-200 px-2 py-1">分母不能为 0</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-2 py-1 font-bold">🏀 二次</td>
              <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="y = ax^2+bx+c" /></td>
              <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\mathbb{R}" /></td>
              <td className="border border-gray-200 px-2 py-1">x 取啥都行</td>
            </tr>
          </tbody>
        </table>
        <p className="text-purple-700 font-bold mt-1">👉 四种里只有<strong>反比例</strong>的定义域不是 <Math tex="\mathbb{R}" />，因为分母有 <Math tex="x" />！这就是"分母≠0"规则的实战。</p>
      </div>

      {/* ════════════════════════════════════════════════════════ */}
      {/* 公式速查表 */}
      {/* ════════════════════════════════════════════════════════ */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-2 mt-1">
        <p className="font-bold text-indigo-800 mb-1">📌 速查表（打印贴墙上）</p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 leading-7 text-gray-700">
          <p><strong>闭区间</strong>：<Math tex="[a, b]" /> = <Math tex="a \leq x \leq b" />（●——●）</p>
          <p><strong>开区间</strong>：<Math tex="(a, b)" /> = <Math tex="a < x < b" />（○——○）</p>
          <p><strong>无穷</strong>：永远用 <Math tex="(" /> <Math tex=")" />，不用 <Math tex="[" /> <Math tex="]" /></p>
          <p><strong>全体实数</strong>：<Math tex="\mathbb{R} = (-\infty, +\infty)" /></p>
          <p><strong>分母</strong> ≠ 0 → 挖点，用 <Math tex="\cup" /> 并两段</p>
          <p><strong>根号下</strong> <Math tex="\geq 0" />；在分母则 <Math tex="> 0" /></p>
        </div>
      </div>

      </LessonLayout>
    </div>
  );
}
