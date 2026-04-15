import { Math, Collapsible, PageHeader, LessonLayout, ExportButton, PageBreak, PracticeCard, DebugGeo2dSvg, Geo2dDebugToggle } from '@/components/shared';
import { functionConceptProgressItems } from './data/3.1/3.1-concept-progress';
import { parabolaRangeDiagram, inverseRangeDiagram, monotonicIncDiagram, monotonicDecDiagram, monotonicMixDiagram, notMonotonicDiagram, monotonicWaveDiagram, parityEvenDiagram, parityOddDiagram } from './data/3.1/3.1-concept-diagrams';
import { useProgress, usePrintMode } from '@/hooks';

import { domainFill, expressionFill, rangeFill } from './data/3.1/3.1-concept-practice';
import { FunctionConceptAnswers, functionConceptExplanations } from './3.1-concept-answers';

export function FunctionConceptPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('function-concept', functionConceptProgressItems);
  const { isPrinting, printOptions } = usePrintMode();

  return (
    <div>
      <PageHeader
        stage="第三阶段 · 函数思维"
        title="3.1 函数的概念与性质"

        subtitle="高考数学的灵魂：函数定义 ➡ 三要素 ➡ 单调性 ➡ 奇偶性"
        tags={[
          { label: '难度 ★★★☆☆', color: 'amber' },
          { label: '核心中的核心', color: 'red' },
          { label: '约3-4小时', color: 'purple' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="3.1 函数的概念与性质" />
      </div>


      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>
        <div className="[&_.rounded-xl]:mb-0 [&_.rounded-xl>.flex.items-center]:py-1 [&_.rounded-xl>div:last-child]:pt-1 [&_.rounded-xl>div:last-child]:pb-1">

      {/* ═══════════════════════════════════════════════════════ */}
      {/* Section 0: 区间表示法 */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section id="fc-intervals" className="mb-0 scroll-mt-4">
        <Collapsible title="零、区间表示法（定义域/值域/单调区间必备）" defaultOpen storageKey="func-concept:intervals">
          <div className="space-y-0 text-[0.9rem] text-gray-800">
            {/* 五种区间速查表 */}
            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-0.5">📖 五种区间</p>
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
            {/* 两个新概念：ℝ 和 ∪ */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div className="px-3 py-2 space-y-1">
                  <p><strong className="text-blue-700">全体实数 <Math tex="\mathbb{R}" /></strong></p>
                  <p><Math tex="\mathbb{R} = (-\infty,\; +\infty)" /> = 数轴上<strong>所有的数</strong>，多数函数定义域就是 <Math tex="\mathbb{R}" /></p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="px-3 py-2 space-y-1">
                  <p><strong className="text-blue-700">并集符号 <Math tex="\cup" /></strong></p>
                  <p>“并”= <strong>两段合起来</strong>，比如 <Math tex="x \neq 0" /> 的范围是 <Math tex="(-\infty, 0) \cup (0, +\infty)" /></p>
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* Section 1: 函数的定义 */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section id="fc-definition" className="mb-0 scroll-mt-4">
        <Collapsible title="一、函数的定义（从初中升级到高中）" defaultOpen storageKey="func-concept:definition">
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            {/* 回顾初中 */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-2">
              <p><strong className="text-amber-800">🔙 初中说法：</strong>给一个 <Math tex="x" /> 的值，就能算出<strong>唯一</strong>一个 <Math tex="y" /> 的值，<Math tex="y" /> 就是 <Math tex="x" /> 的函数。高中只是用<strong>更严格的语言</strong>重新表述。</p>
            </div>

            {/* function = 功能 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-700 border-b border-gray-400 bg-gray-100">function = 功能 = 函数</div>
              <div className="px-3 py-2 space-y-1">
                <p>英语里 function 就是"功能"的意思，能<strong>实现某种功能</strong>的都可以叫"函数"。</p>
                <p>比如"军训"就是一个函数：输入一个白白嫩嫩的学生，经过军训这个<strong>对应法则</strong>，输出一个晒黑的学生。</p>
                <p>数学里也一样：输入一个 <Math tex="x" />，经过法则 <Math tex="f" /> 的加工，输出<strong>唯一</strong>一个 <Math tex="y = f(x)" />。</p>
              </div>
            </div>

            {/* f(x) 代入示例 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-700 border-b border-gray-400 bg-gray-100">数学中的函数：<Math tex="f(x)" /> 里的 <Math tex="x" /> 就是“占位符”</div>
              <div className="px-3 py-2">
                <p className="mb-1">例如 <Math tex="f(x) = \sqrt{x - 1}" />，把什么塞进去，就把公式里所有 <Math tex="x" /> 都换成它：</p>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border-b border-r border-gray-300 px-2 py-1 text-left">塞进去的值</th>
                      <th className="border-b border-r border-gray-300 px-2 py-1 text-left">计算过程</th>
                      <th className="border-b border-r border-gray-300 px-2 py-1 text-left">塞进去的值</th>
                      <th className="border-b border-gray-300 px-2 py-1 text-left">计算过程</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b border-r border-gray-300 px-2 py-1"><Math tex="x = 2" /></td>
                      <td className="border-b border-r border-gray-300 px-2 py-1"><Math tex="f(2) = \sqrt{2-1} = 1" /></td>
                      <td className="border-b border-r border-gray-300 px-2 py-1"><Math tex="x = 101" /></td>
                      <td className="border-b border-gray-300 px-2 py-1"><Math tex="f(101) = \sqrt{101-1} = 10" /></td>
                    </tr>
                    <tr>
                      <td className="border-r border-gray-300 px-2 py-1"><Math tex="x = 2a+b" /></td>
                      <td className="border-r border-gray-300 px-2 py-1"><Math tex="f(2a+b) = \sqrt{2a+b-1}" /></td>
                      <td className="border-r border-gray-300 px-2 py-1"><Math tex="x = f(x)" /></td>
                      <td className="px-2 py-1"><Math tex="f(f(x)) = \sqrt{f(x)-1} = \sqrt{\sqrt{x-1}-1}" /></td>
                    </tr>
                  </tbody>
                </table>
                <p className="mt-1 font-bold text-orange-700">函数核心特点：<strong>两边的 <Math tex="x" />，要变一起变</strong></p>
              </div>
            </div>

            {/* 从根号引出定义域 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-red-700 border-b border-gray-400 bg-gray-100">是什么都能往里塞吗？</div>
              <div className="px-3 py-2 space-y-1">
                <p>还是 <Math tex="f(x) = \sqrt{x-1}" />，如果输入 <Math tex="x = 0" />，得到 <Math tex="f(0) = \sqrt{0-1} = \sqrt{-1}" />，根号里面是负数，<strong className="text-red-700">算不了！</strong></p>
                <p>所以不是什么值都能塞进去的，必须满足 <Math tex="x - 1 \geq 0" />，即 <Math tex="x \geq 1" /> 才行。</p>
              </div>
            </div>

            {/* 三要素 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-teal-700 border-b border-gray-400 bg-gray-100">由此引出函数三要素</div>
              <div className="px-3 py-2 space-y-1">
                <p><strong className="text-blue-700">定义域</strong>：所有<strong>能够输入</strong>函数的值组成的集合，就是 <Math tex="x" /> 的合法范围</p>
                <p><strong className="text-green-700">值域</strong>：函数能够得到的<strong>所有输出值</strong>组成的集合，就是 <Math tex="y" /> 能取到的范围</p>
                <p><strong className="text-purple-700">对应关系</strong>：函数所实现的"功能"，比如这里的"先算 <Math tex="x-1" />，再开根号"这种计算规则</p>
                <p className="font-bold text-orange-700">这三个合在一起，就是<strong>函数的三要素</strong>，缺一不可。</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* Section 2: 函数三要素与求定义域 */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section id="fc-three-elements" className="mb-0 scroll-mt-4">
        <Collapsible title="二、函数三要素与求定义域" defaultOpen storageKey="func-concept:three-elements">
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            {/* 三要素 */}
            <div className="grid grid-cols-3 text-center border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 border-r border-gray-300">
                <p className="font-bold text-blue-700">① 定义域</p>
                <p><Math tex="x" /> 能取哪些值（输入范围）</p>
              </div>
              <div className="px-2 py-1 border-r border-gray-300">
                <p className="font-bold text-green-700">② 对应法则</p>
                <p>怎么从 <Math tex="x" /> 算出 <Math tex="y" />（计算规则）</p>
              </div>
              <div className="px-2 py-1">
                <p className="font-bold text-red-700">③ 值域</p>
                <p><Math tex="y" /> 的取值范围（输出范围）</p>
              </div>
            </div>

            {/* 具体函数定义域五种限制 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">具体函数定义域：高中常遇的五种限制</div>
              <div className="grid grid-cols-5 text-center">
                <div className="px-2 py-1 border-r border-gray-300">
                  <p className="font-bold text-orange-700">分式</p>
                  <p><Math tex="\dfrac{1}{\boxed{\phantom{x}}} \Rightarrow \boxed{\phantom{x}} \neq 0" /></p>
                </div>
                <div className="px-2 py-1 border-r border-gray-300">
                  <p className="font-bold text-orange-700">根号</p>
                  <p><Math tex="\sqrt{\boxed{\phantom{x}}} \Rightarrow \boxed{\phantom{x}} \geq 0" /></p>
                </div>
                <div className="px-2 py-1 border-r border-gray-300">
                  <p className="font-bold text-orange-700">零次幂</p>
                  <p><Math tex="\boxed{\phantom{x}}^{\,0} \Rightarrow \boxed{\phantom{x}} \neq 0" /></p>
                </div>
                <div className="px-2 py-1 border-r border-gray-300">
                  <p className="font-bold text-orange-700">对数</p>
                  <p><Math tex="\log_a\!\boxed{\phantom{x}} \Rightarrow \boxed{\phantom{x}} > 0" /></p>
                </div>
                <div className="px-2 py-1">
                  <p className="font-bold text-orange-700">tan</p>
                  <p><Math tex="\tan(\boxed{\phantom{x}})" /></p>
                  <p><Math tex="\boxed{\phantom{x}} \neq k\pi + \dfrac{\pi}{2}" /></p>
                </div>
              </div>
            </div>

            {/* 求定义域两类题型 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">求定义域两类题型</div>
              <div className="px-3 py-1 flex gap-6">
                <p><strong className="text-orange-700">具体函数</strong>：给出解析式，求 <Math tex="x" /> 的范围</p>
                <p><strong className="text-orange-700">抽象函数</strong>：已知 <Math tex="f(x)" /> 的定义域，求 <Math tex="f(g(x))" /> 的定义域</p>
              </div>
            </div>

            {/* 定义域实战：左具体 右抽象 */}
            <div className="grid grid-cols-[5fr_4fr] border border-gray-400 rounded overflow-hidden">
              <div className="border-r border-gray-400">
                <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">具体函数定义域实战</div>
                <div className="px-3 py-2 space-y-1">
                  <p>求 <Math tex="f(x) = \sqrt{-x^2+4x+5} + \dfrac{1}{3-x} + (x-2)^0" /> 的定义域</p>
                  <p><strong>第一步</strong>：找出所有限制</p>
                  <p>根号：<Math tex="-x^2+4x+5 \geq 0" />　分式：<Math tex="3-x \neq 0" />　零次幂：<Math tex="x-2 \neq 0" /></p>
                  <p><strong>第二步</strong>：逐个求解</p>
                  <p>根号：<Math tex="-x^2+4x+5 \geq 0" />，即 <Math tex="x^2-4x-5 \leq 0" /></p>
                  <p>　　即 <Math tex="(x+1)(x-5) \leq 0" />，得 <Math tex="-1 \leq x \leq 5" /></p>
                  <p>分式：<Math tex="3-x \neq 0" />，得 <Math tex="x \neq 3" /></p>
                  <p>零次幂：<Math tex="x-2 \neq 0" />，得 <Math tex="x \neq 2" /></p>
                  <p><strong>第三步</strong>：取交集（所有条件同时满足）</p>
                  <p><Math tex="-1 \leq x \leq 5" /> 且 <Math tex="x \neq 3" /> 且 <Math tex="x \neq 2" /></p>
                  <p><strong>结果</strong>：<Math tex="[-1,\,2) \cup (2,\,3) \cup (3,\,5]" /></p>
                </div>
              </div>
              <div>
                <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">抽象函数定义域实战</div>
                <div className="px-3 py-2 space-y-1">
                  <p>若 <Math tex="f(x)" /> 的定义域是 <Math tex="[2,\,5]" />，求 <Math tex="f(2x-3)" /> 定义域</p>
                  <p><strong>定义域 = <Math tex="x" /> 的取值范围</strong></p>
                  <p><Math tex="f(x)" /> 定义域 <Math tex="[2,\,5]" />，意思是 <Math tex="x" /> 只能取 2 到 5</p>
                  <p><Math tex="f(x)" /> 和 <Math tex="f(2x-3)" /> 是同一个 <Math tex="f" /></p>
                  <p><Math tex="f" /> 能处理的范围始终是 <Math tex="[2,\,5]" /></p>
                  <p>所以 <Math tex="f(2x-3)" /> 括号里的 <Math tex="2x-3" /> 也必须在 <Math tex="[2,\,5]" /> 内</p>
                  <p>即 <Math tex="2 \leq 2x-3 \leq 5" /></p>
                  <p>各部分同时加 3：<Math tex="5 \leq 2x \leq 8" /></p>
                  <p>各部分同时除以 2：<Math tex="\dfrac{5}{2} \leq x \leq 4" /></p>
                  <p><strong>结果</strong>：<Math tex="f(2x-3)" /> 定义域为 <Math tex="\left[\dfrac{5}{2},\,4\right]" /></p>
                </div>
              </div>
            </div>

            <p className="font-bold text-center">函数定义域永远指的是括号内式子中自变量 <Math tex="x" /> 的取值范围；同一个 <Math tex="f" />，<strong className="text-orange-700">括号内整体</strong>的范围始终相同</p>

            <div className="grid grid-cols-[11fr_6fr] border border-gray-400 rounded overflow-hidden">
              <div className="border-r border-gray-400">
                <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">抽象函数定义域实战 2</div>
                <div className="px-3 py-2 space-y-1">
                  <p>已知 <Math tex="y = f(x-1)" /> 的定义域是 <Math tex="[-1,\,2]" />，求 <Math tex="y = f(1-3x)" /> 的定义域</p>
                  <p><strong>第一步</strong>：定义域指的是 <Math tex="x" /> 的取值范围</p>
                  <p><Math tex="f(x-1)" /> 定义域 <Math tex="[-1,\,2]" />，意思是 <Math tex="x-1" /> 里的 <Math tex="x \in [-1,\,2]" /></p>
                  <p>即 <Math tex="-1 \leq x \leq 2" /></p>
                  <p><strong>第二步</strong>：但我们要的是括号内整体 <Math tex="x-1" /> 的范围，所以把 <Math tex="x" /> 变成 <Math tex="x-1" /></p>
                  <p>各部分同时减 1：<Math tex="-2 \leq x-1 \leq 1" /></p>
                  <p>所以 <Math tex="f" /> 括号内整体的范围是 <Math tex="[-2,\,1]" /></p>
                  <p><strong>第三步</strong>：同一个 <Math tex="f" />，括号内整体范围相同</p>
                  <p><Math tex="f(1-3x)" /> 的 <Math tex="1-3x" /> 也必须在 <Math tex="[-2,\,1]" /> 内，即 <Math tex="-2 \leq 1-3x \leq 1" /></p>
                  <p>各部分同时减 1：<Math tex="-3 \leq -3x \leq 0" /></p>
                  <p>各部分同时除以 <Math tex="-3" />（除以负数，变号）：<Math tex="0 \leq x \leq 1" /></p>
                  <p><strong>结果</strong>：<Math tex="f(1-3x)" /> 的定义域为 <Math tex="[0,\,1]" /></p>
                </div>
              </div>
              <div>
                <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">理解定义域</div>
                <div className="px-3 py-2 space-y-2 text-[0.85rem]">
                  <div>
                    <p className="font-bold">什么是定义域？</p>
                    <p>题目给 <Math tex="f(\text{式子})" /> 的定义域，指的是<strong>式子中 <Math tex="x" /> 的范围</strong>，不是式子整体的范围</p>
                    <p>如 <Math tex="f(2x+1)" /> 定义域 <Math tex="[1,4]" />：是 <Math tex="2x+1" /> 里的 <Math tex="x \in [1,4]" />，不是 <Math tex="2x+1 \in [1,4]" /></p>
                  </div>
                  <div>
                    <p className="font-bold">怎么求括号整体的范围？</p>
                    <p>把 <Math tex="x" /> 的范围换算成式子的范围</p>
                    <p>如 <Math tex="x \in [1,4]" /> → <Math tex="2x+1 \in [3,9]" /></p>
                    <p>这个 <Math tex="[3,9]" /> 就是 <Math tex="f" /> 能接受的输入范围</p>
                  </div>
                  <div>
                    <p className="font-bold">怎么求另一个式子的定义域？</p>
                    <p>同一个 <Math tex="f" />，括号内整体的范围相同</p>
                    <p>求 <Math tex="f(x)" /> → <Math tex="x \in [3,9]" />，定义域就是 <Math tex="[3,9]" /></p>
                    <p>求 <Math tex="f(3x+1)" /> → <Math tex="3 \leq 3x+1 \leq 9" /></p>
                    <p>化简：<Math tex="\tfrac{2}{3} \leq x \leq \tfrac{8}{3}" />，定义域为 <Math tex="[\tfrac{2}{3},\,\tfrac{8}{3}]" /></p>
                  </div>
                </div>
              </div>
            </div>

            <PracticeCard
              questions={domainFill} title="" explanations={functionConceptExplanations} hideBlankLine
              renderItem={(q, idx) => (
                <div className="bg-white rounded-lg border border-green-100 px-2 py-[4px]" key={idx}>
                  <span className="text-green-600 mr-1">{idx + 1}.</span>
                  {q.questionLatex ? <Math tex={q.questionLatex} /> : q.question}
                </div>
              )}
            />

          </div>
        </Collapsible>
      </section>

      <PageBreak label="函数的表示法" />

      {/* ═══════════════════════════════════════════════════════ */}
      {/* Section 3: 函数的表示法 */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section id="fc-representation" className="mb-0 scroll-mt-4">
        <Collapsible title="三、求解析式四类方法" defaultOpen storageKey="func-concept:representation">
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            <table className="w-full border-collapse border border-gray-400">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-400 px-2 py-1 text-left">方法</th>
                  <th className="border border-gray-400 px-2 py-1 text-left">已知</th>
                  <th className="border border-gray-400 px-2 py-1 text-left">求</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-400 px-2 py-1 font-bold text-orange-700">待定系数法</td>
                  <td className="border border-gray-400 px-2 py-1">函数类型（一次/二次/反比例）+ 若干条件</td>
                  <td className="border border-gray-400 px-2 py-1">系数</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-2 py-1 font-bold text-orange-700">换元法</td>
                  <td className="border border-gray-400 px-2 py-1"><Math tex="f(g(x))" /> 的表达式</td>
                  <td className="border border-gray-400 px-2 py-1"><Math tex="f(x)" />，令 <Math tex="t = g(x)" /> 换元</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-2 py-1 font-bold text-orange-700">整体代换法</td>
                  <td className="border border-gray-400 px-2 py-1"><Math tex="f(g(x))" /> 的表达式</td>
                  <td className="border border-gray-400 px-2 py-1"><Math tex="f(x)" />，直接把 <Math tex="g(x)" /> 整体换成 <Math tex="x" /></td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-2 py-1 font-bold text-orange-700">构造方程组</td>
                  <td className="border border-gray-400 px-2 py-1"><Math tex="f(x)" /> 满足某个函数方程</td>
                  <td className="border border-gray-400 px-2 py-1"><Math tex="f(x)" />，用特殊代入构造方程组消元</td>
                </tr>
              </tbody>
            </table>

            <div className="grid grid-cols-[5fr_4fr] border border-gray-400 rounded overflow-hidden">
              <div className="border-r border-gray-400">
                <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">求函数解析式——待定系数法</div>
                <div className="px-3 py-2 space-y-1">
                  <p>已知 <Math tex="f(x)" /> 是一次函数，若 <Math tex="f(f(x)) = 4x + 8" />，则 <Math tex="f(x)" /> 的解析式为</p>
                  <p><strong className="text-orange-700">核心</strong>：<Math tex="f(x)" /> 中，左边括号里的 <Math tex="x" /> 和右边的 <Math tex="x" /> 始终一致——左边换成什么，右边也换成什么</p>
                  <p><strong>设</strong> <Math tex="f(x) = kx + b" /></p>
                  <p>因为 <Math tex="f(\square) = k \cdot \square + b" /></p>
                  <p>所以 <Math tex="f(f(x)) = k \cdot f(x) + b = k(kx+b)+b = k^2x + kb + b" /></p>
                  <p>而 <Math tex="f(f(x)) = 4x + 8" />，对比系数：</p>
                  <p className="pl-4"><Math tex="k^2 = 4" /> → <Math tex="k = 2" /> 或 <Math tex="k = -2" /></p>
                  <p className="pl-4"><Math tex="kb + b = 8" /> → <Math tex="b(k+1) = 8" /></p>
                  <p>当 <Math tex="k = 2" /> 时，<Math tex="3b = 8" />，<Math tex="b = \dfrac{8}{3}" /></p>
                  <p>当 <Math tex="k = -2" /> 时，<Math tex="-b = 8" />，<Math tex="b = -8" /></p>
                  <p><strong>结果</strong>：<Math tex="f(x) = 2x + \dfrac{8}{3}" /> 或 <Math tex="f(x) = -2x - 8" /></p>
                </div>
              </div>
              <div>
                <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">求函数解析式——换元法、整体代换法</div>
                <div className="px-3 py-2 space-y-1">
                  <p>若 <Math tex="f(\sqrt{x}+1) = x - 6" />，则 <Math tex="f(x) =" /> ______</p>
                  <p><strong>换元法</strong>：令 <Math tex="t = \sqrt{x}+1" />，则 <Math tex="\sqrt{x} = t-1" />，<Math tex="x = (t-1)^2" /></p>
                  <p>代入：<Math tex="f(t) = (t-1)^2 - 6 = t^2 - 2t - 5" /></p>
                  <p>此时 <Math tex="f(t)" /> 已求出，将 <Math tex="t" /> 替换为 <Math tex="x" /></p>
                  <p>所以 <Math tex="f(x) = x^2 - 2x - 5" />（<Math tex="x \geq 1" />）</p>
                  <p className="border-t border-gray-300 pt-1 mt-1">已知 <Math tex="f(x-1) = x^2 - 2x - 2" />，求 <Math tex="f(x)" /></p>
                  <p><strong>整体代换法</strong>：把右边凑成 <Math tex="x-1" /> 的形式</p>
                  <p>右边补 <Math tex="+1" /> 再补 <Math tex="-1" />：<Math tex="x^2 - 2x + 1 - 1 - 2" /></p>
                  <p>完全平方：<Math tex="(x-1)^2 - 3" /></p>
                  <p>所以 <Math tex="f(x-1) = (x-1)^2 - 3" /></p>
                  <p>左边是 <Math tex="x-1" />，右边也是 <Math tex="x-1" />，把 <Math tex="x-1" /> 整体换回 <Math tex="x" /></p>
                  <p>因此 <Math tex="f(x) = x^2 - 3" /></p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-[1fr_1fr] border border-gray-400 rounded overflow-hidden">
              <div className="border-r border-gray-400">
                <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">求函数解析式——构造方程组</div>
                <div className="px-3 py-2 space-y-1">
                  <p>已知 <Math tex="f(x) + 2f(-x) = x^2 + 2x" />，则 <Math tex="f(x)" /> 的解析式为 ______</p>
                  <p><strong className="text-orange-700">核心</strong>：同一个等式里，法则里的 <Math tex="x" /> 都一样，把 <Math tex="x" /> 换成 <Math tex="-x" /> 可得第二个等式</p>
                  <p>把 <Math tex="x" /> 换成 <Math tex="-x" /> 得第二个等式，联立：</p>
                  <p><Math tex="\begin{cases} f(x) + 2f(-x) = x^2 + 2x \quad \cdots① \\ f(-x) + 2f(x) = x^2 - 2x \quad \cdots② \end{cases}" /></p>
                  <p>② × 2 − ①，消去 <Math tex="f(-x)" />：<Math tex="3f(x) = x^2 - 6x" /></p>
                  <p><strong>结果</strong>：<Math tex="f(x) = \dfrac{1}{3}x^2 - 2x" /></p>
                </div>
              </div>
              <div>
                <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">构造方程组 2</div>
                <div className="px-3 py-2 space-y-1">
                  <p>已知一次函数 <Math tex="y = f(x)" /> 满足 <Math tex="3f(1+x) - 2f(1-x) = 10x + 3" />，则 <Math tex="f(x) =" /> ______</p>
                  <p>把 <Math tex="x" /> 换成 <Math tex="-x" />，联立：</p>
                  <p><Math tex="\begin{cases} 3f(1+x) - 2f(1-x) = 10x + 3 \quad \cdots① \\ 3f(1-x) - 2f(1+x) = -10x + 3 \quad \cdots② \end{cases}" /></p>
                  <p>① × 3 + ② × 2，消去 <Math tex="f(1-x)" />：</p>
                  <p><Math tex="5f(1+x) = 10x + 15" />，即 <Math tex="f(1+x) = 2x + 3" /></p>
                  <p>整体代换：<Math tex="2x + 3 = 2x + 2 + 1 = 2(1+x) + 1" /></p>
                  <p>所以 <Math tex="f(1+x) = 2(1+x) + 1" /></p>
                  <p><strong>结果</strong>：<Math tex="f(x) = 2x + 1" /></p>
                </div>
              </div>
            </div>

            <PracticeCard
              questions={expressionFill} title="" explanations={functionConceptExplanations} hideBlankLine
              renderItem={(q, idx) => (
                <div className="bg-white rounded-lg border border-green-100 px-2 py-[4px]" key={idx}>
                  <span className="text-green-600 mr-1">{idx + 1}.</span>
                  {q.questionLatex ? <Math tex={q.questionLatex} /> : q.question}
                </div>
              )}
            />

          </div>
        </Collapsible>
      </section>

      <PageBreak label="求值域" />

      {/* ═══════════════════════════════════════════════════════ */}
      {/* Section 4: 求值域 */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section id="fc-range" className="mb-0 scroll-mt-4">
        <Collapsible title="四、求值域的基本方法" defaultOpen storageKey="func-concept:range">
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            <p className="leading-7">定义域是 <Math tex="x" /> 的取值集合，<strong>值域</strong>是 <Math tex="f(x)" /> 的取值集合</p>

            <table className="w-full border-collapse border border-gray-400">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-400 px-2 py-1 text-left" style={{ width: '15%' }}>方法</th>
                  <th className="border border-gray-400 px-2 py-1 text-left" style={{ width: '40%' }}>适用场景</th>
                  <th className="border border-gray-400 px-2 py-1 text-left" style={{ width: '45%' }}>示例</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-400 px-2 py-1 font-bold text-orange-700">①观察法</td>
                  <td className="border border-gray-400 px-2 py-1">直接看公式结构，判断输出范围</td>
                  <td className="border border-gray-400 px-2 py-1"><Math tex="y = x^2 + 1" />，因为 <Math tex="x^2 \geq 0" />，所以 <Math tex="y \geq 1" />，值域 <Math tex="[1, +\infty)" /></td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-400 px-2 py-1 font-bold text-orange-700">②数形结合</td>
                  <td className="border border-gray-400 px-2 py-1">画出图象，直接读取 <Math tex="y" /> 的范围</td>
                  <td className="border border-gray-400 px-2 py-1"><Math tex="y = |x - 1|" />，V 形图最低点 <Math tex="y = 0" />，值域 <Math tex="[0, +\infty)" /></td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-2 py-1 font-bold text-orange-700">③配方法</td>
                  <td className="border border-gray-400 px-2 py-1">二次函数，配方找顶点（最值）</td>
                  <td className="border border-gray-400 px-2 py-1"><Math tex="y = -x^2 + 4x - 1 = -(x-2)^2 + 3" />，最大值 3</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-400 px-2 py-1 font-bold text-orange-700">④换元法</td>
                  <td className="border border-gray-400 px-2 py-1">含根号等复合结构，令 <Math tex="t = \text{内层}" /></td>
                  <td className="border border-gray-400 px-2 py-1"><Math tex="y = x + \sqrt{1-x}" />，令 <Math tex="t = \sqrt{1-x} \geq 0" />，转化为二次函数</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-2 py-1 font-bold text-orange-700">⑤判别式法</td>
                  <td className="border border-gray-400 px-2 py-1">分式或能化为 <Math tex="x" /> 的二次方程的形式</td>
                  <td className="border border-gray-400 px-2 py-1">把 <Math tex="y" /> 当已知反解 <Math tex="x" />，由 <Math tex="\Delta \geq 0" /> 求 <Math tex="y" /> 的范围</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-400 px-2 py-1 font-bold text-orange-700">⑥分离常数法</td>
                  <td className="border border-gray-400 px-2 py-1">分式函数 <Math tex="\dfrac{ax+b}{cx+d}" /></td>
                  <td className="border border-gray-400 px-2 py-1"><Math tex="y = \dfrac{2x+1}{x-1} = 2 + \dfrac{3}{x-1}" />，因为 <Math tex="\dfrac{3}{x-1} \neq 0" />，所以 <Math tex="y \neq 2" /></td>
                </tr>
              </tbody>
            </table>

            <div className="grid grid-cols-[7fr_6fr] border border-gray-400 rounded overflow-hidden">
              <div className="border-r border-gray-400">
                <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">①观察法</div>
                <div className="px-3 py-2 space-y-1">
                  <p>对 <Math tex="f(x) = c + \sqrt{ax+b}" /> 或 <Math tex="f(x) = \dfrac{c}{ax^2+b}" /></p>
                  <p>或 <Math tex="f(x) = ax^2+b" /> 等解析式</p>
                  <p>通过简单变形和观察，利用熟知的函数的值域，求出所求函数的值域</p>
                  <div className="border-t border-gray-300 pt-1 mt-1 space-y-1">
                    <p className="font-bold">练一练</p>
                    <p>1. <Math tex="y = 3 - \sqrt{x+1}" /> 的值域为 ______</p>
                    <p>2. <Math tex="y = \dfrac{1}{x^2+2}" /> 的值域为 ______</p>
                    <p>3. <Math tex="y = \dfrac{3}{2-x^2}" />（<Math tex="x \in [0,1]" />）的值域为 ______</p>
                    <p>4. <Math tex="y = \dfrac{1}{\sqrt{x+1}}" />（<Math tex="x \geq 0" />）的值域为 ______</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例题</div>
                <div className="px-1 py-1 space-y-1">
                  <p><strong>例 1</strong>：函数 <Math tex="y = 2 + \sqrt{-x}" /> 的值域为 ______</p>
                  <p><strong>观察</strong>：因为 <Math tex="\sqrt{-x} \geq 0" />，不等号两边同时加 2，不等号不变</p>
                  <p>所以 <Math tex="2 + \sqrt{-x} \geq 2" />，即 <Math tex="y \geq 2" /></p>
                  <p><strong>结果</strong>：值域为 <Math tex="[2, +\infty)" /></p>
                  <div className="border-t border-gray-300 pt-1 mt-1">
                    <p><strong>例 2</strong>：求函数的值域：<Math tex="y = \dfrac{2}{x^2+1}" />（<Math tex="x \in [0,2]" />）</p>
                    <p><strong>解析</strong>：因为 <Math tex="x \in [0,2]" />，各部分都平方，得 <Math tex="0 \leq x^2 \leq 4" />，各部分同时加 1，得 <Math tex="1 \leq x^2+1 \leq 5" /></p>
                    <p>取倒数，不等号反向，得 <Math tex="\dfrac{1}{5} \leq \dfrac{1}{x^2+1} \leq 1" /></p>
                    <p>各部分同时乘 2，得 <Math tex="\dfrac{2}{5} \leq \dfrac{2}{x^2+1} \leq 2" />，值域为 <Math tex="\left[\dfrac{2}{5},\, 2\right]" /></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">②数形结合法</div>
              <div className="px-3 py-2 space-y-1">
                <p>将函数与图形有机结合起来，利用图形的直观性求出函数的值域</p>
                <div className="border-t border-gray-300 pt-1 mt-1">
                  <div className="flex gap-3 mt-1">
                    <div className="space-y-1 flex-1">
                      <p><strong>例题</strong>：求函数的值域：<Math tex="y = x^2 - 2x + 3" />（<Math tex="x \in [0,3]" />）</p>
                      <p><strong>解析</strong>：对称轴 <Math tex="x = -\dfrac{b}{2a} = -\dfrac{-2}{2} = 1" /></p>
                      <p>画出函数在 <Math tex="[0,3]" /> 上的图象，如右图</p>
                      <p>开口向上，对称轴 <Math tex="x = 1 \in [0,3]" />，在对称轴处取最小值，<Math tex="y_{\min} = f(1) = 2" /></p>
                      <p>比较端点：<Math tex="f(0) = 3" />，<Math tex="f(3) = 6" />，所以 <Math tex="y_{\max} = 6" />，值域为 <Math tex="[2, 6]" /></p>
                    </div>
                    <div className="flex-shrink-0">
                      {/* 图: 数形结合法-抛物线 y=(x-1)²+2 在 [0,3] */}
                      <DebugGeo2dSvg width={160} height={130} data={parabolaRangeDiagram} />
                      <Geo2dDebugToggle />
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-300 pt-1 mt-1">
                  <div className="grid grid-cols-[6fr_4fr]">
                    <div className="space-y-1">
                      <p><strong>例 2</strong>：求函数的值域：<Math tex="y = \dfrac{2}{x}" />（<Math tex="x \in [1, 4]" />）</p>
                      <div className="flex gap-3">
                        <div className="space-y-1 flex-1">
                          <p><strong>解析</strong>：画出反比例函数 <Math tex="y = \dfrac{2}{x}" /> 在 <Math tex="[1,4]" /> 上的图象</p>
                          <p>当 <Math tex="x = 1" /> 时，<Math tex="y = 2" />（最大值）</p>
                          <p>当 <Math tex="x = 4" /> 时，<Math tex="y = \dfrac{1}{2}" />（最小值）</p>
                          <p><strong>结果</strong>：值域为 <Math tex="\left[\dfrac{1}{2},\, 2\right]" /></p>
                        </div>
                        <div className="flex-shrink-0">
                          {/* 图: 数形结合法-反比例 y=2/x 在 [1,4] */}
                          <DebugGeo2dSvg width={140} height={110} data={inverseRangeDiagram} />
                          <Geo2dDebugToggle />
                        </div>
                      </div>
                    </div>
                    <div className="border-l border-gray-300 px-3 py-1 space-y-1">
                      <p className="font-bold">练一练</p>
                      <p>1. <Math tex="y = -x^2 + 4x - 1" />（<Math tex="x \in [0, 3]" />）的值域为 ______</p>
                      <p>2. <Math tex="y = \dfrac{3}{x}" />（<Math tex="x \in [1, 6]" />）的值域为 ______</p>
                      <p>3. <Math tex="y = x^2 + 2x" />（<Math tex="x \in [-2, 1]" />）的值域为 ______</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          <PageBreak label="配方法" />

            <div className="grid grid-cols-[50%_50%] border border-gray-400 rounded overflow-hidden">
              <div className="border-r border-gray-400">
                <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">③配方法</div>
                <div className="px-3 py-2 space-y-1">
                  <p>配方法是求"二次函数类"值域的基本方法</p>
                  <p>将 <Math tex="y = ax^2 + bx + c" />（<Math tex="a \neq 0" />）</p>
                  <p>配方为 <Math tex="y = a(x - h)^2 + k" /> 的形式</p>
                  <p>利用完全平方项 <Math tex="\geq 0" /> 的性质确定最值</p>
                  <p><Math tex="a > 0" /> 时有最小值 <Math tex="k" />，<Math tex="a < 0" /> 时有最大值 <Math tex="k" /></p>
                  <div className="border-t border-gray-300 pt-1 mt-1 space-y-1">
                    <p className="font-bold">练一练</p>
                    <p>1. <Math tex="y = 2x^2 - 8x + 5" /> 的值域为 ______</p>
                    <p>2. <Math tex="y = -3x^2 + 6x + 1" /> 的值域为 ______</p>
                    <p>3. <Math tex="y = \sqrt{-x^2 + 4x + 5}" /> 的值域为 ______</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例题</div>
                <div className="px-1 py-1 space-y-1">
                  <p><strong>例</strong>：函数 <Math tex="y = \sqrt{-x^2 + 2x + 2}" /> 的值域为 ______</p>
                  <p><strong>解析</strong>：先对根号里面配方，提负号，得 <Math tex="-(x^2 - 2x) + 2" /></p>
                  <p><Math tex="x" /> 的系数是 <Math tex="-2" />，取一半得 <Math tex="-1" />，再平方得 <Math tex="1" /></p>
                  <p>配成完全平方：<Math tex="-(x^2 - 2x + 1) + 1 + 2 = -(x-1)^2 + 3" /></p>
                  <p>所以 <Math tex="y = \sqrt{-(x-1)^2 + 3}" /></p>
                  <p>因为 <Math tex="(x-1)^2 \geq 0" />，所以 <Math tex="-(x-1)^2 + 3 \leq 3" /></p>
                  <p>又因为根号里面必须 <Math tex="\geq 0" />，所以 <Math tex="0 \leq -(x-1)^2 + 3 \leq 3" /></p>
                  <p>开根号，得 <Math tex="0 \leq y \leq \sqrt{3}" /></p>
                  <p>值域为 <Math tex="[0,\, \sqrt{3}]" /></p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-[53fr_47fr] border border-gray-400 rounded overflow-hidden">
              <div className="border-r border-gray-400">
                <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">④换元法</div>
                <div className="px-3 py-2 space-y-1">
                  <p>形如 <Math tex="y = ax + b \pm \sqrt{cx + d}" /> 的函数</p>
                  <p>先令 <Math tex="t = \sqrt{cx + d}" />（<Math tex="t \geq 0" />），用 <Math tex="t" /> 表示出 <Math tex="x" /></p>
                  <p>再把 <Math tex="x" /> 代入原式，将 <Math tex="y" /> 变成关于 <Math tex="t" /> 的二次函数</p>
                  <p>最后用<strong>配方法</strong>求值域（注意 <Math tex="t" /> 的取值范围！）</p>
                  <div className="border-t border-gray-300 pt-1 mt-1 space-y-1">
                    <p><strong>例 2</strong>：函数 <Math tex="f(x) = 2 - \sqrt{-x^2 + 4x}" /> 的值域为 ______</p>
                    <p>令 <Math tex="t = -x^2 + 4x" />，配方得 <Math tex="t = -(x-2)^2 + 4" /></p>
                    <p>因为 <Math tex="(x-2)^2 \geq 0" />，由不等式性质得 <Math tex="t = -(x-2)^2 + 4 \leq 4" /></p>
                    <p>又因为根号要求 <Math tex="t \geq 0" />，所以 <Math tex="0 \leq t \leq 4" /></p>
                    <p>函数为 <Math tex="f(x) = 2 - \sqrt{t}" /></p>
                    <p>开根号，得 <Math tex="0 \leq \sqrt{t} \leq 2" /></p>
                    <p>同时乘 <Math tex="-1" />，得 <Math tex="-2 \leq -\sqrt{t} \leq 0" /></p>
                    <p>同时加 2，得 <Math tex="0 \leq 2 - \sqrt{t} \leq 2" />，值域为 <Math tex="[0,\, 2]" /></p>
                  </div>
                </div>
              </div>
              <div>
                <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例题</div>
                <div className="px-1 py-1 space-y-1">
                  <p><strong>例</strong>：求函数 <Math tex="y = x + 4\sqrt{1 - x}" /> 的值域</p>
                  <p><strong>第一步</strong>：换元，令 <Math tex="t = \sqrt{1 - x}" />，因为 <Math tex="(1 - x) \geq 0" /></p>
                  <p>两边开根号，所以 <Math tex="t \geq 0" />。由 <Math tex="t^2 = 1 - x" />，得 <Math tex="x = 1 - t^2" /></p>
                  <p><strong>第二步</strong>：代入原式</p>
                  <p><Math tex="y = (1 - t^2) + 4t = -t^2 + 4t + 1" /></p>
                  <p><strong>第三步</strong>：配方（<Math tex="t \geq 0" />）</p>
                  <p><Math tex="y = -(t^2 - 4t) + 1 = -(t - 2)^2 + 5" /></p>
                  <p>又因为 <Math tex="(t-2)^2 \geq 0" />，所以 <Math tex="-(t-2)^2 \leq 0" /></p>
                  <p>两边同时加 5，得 <Math tex="-(t-2)^2 + 5 \leq 5" /></p>
                  <p>因为 <Math tex="y = -(t-2)^2 + 5" />，所以值域为 <Math tex="(-\infty,\, 5]" /></p>
                  <div className="border-t border-gray-300 pt-1 mt-1 space-y-1">
                    <p>1. <Math tex="y = x - 2\sqrt{x + 1}" /> 的值域为 ______</p>
                    <p>2. <Math tex="y = 2x + \sqrt{3 - x}" /> 的值域为 ______</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-[1fr_1fr] border border-gray-400 rounded overflow-hidden">
              <div className="border-r border-gray-400">
                <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">⑤判别式法</div>
                <div className="px-3 py-2 space-y-1">
                  <p>对于形如 <Math tex="y = \dfrac{a_1 x^2 + b_1 x + c_1}{a_2 x^2 + b_2 x + c_2}" />（<Math tex="a_1, a_2" /> 不同时为 0）</p>
                  <p>把 <Math tex="y" /> 当已知数，转化成关于 <Math tex="x" /> 的二次方程</p>
                  <p>因为 <Math tex="x" /> 有实数解，所以判别式 <Math tex="\Delta \geq 0" /></p>
                  <p>由 <Math tex="\Delta \geq 0" /> 解出 <Math tex="y" /> 的范围，即为值域</p>
                  <div className="border-t border-gray-300 pt-1 mt-1 space-y-1">
                    <p><strong>例</strong>：求函数 <Math tex="y = \dfrac{x^2 - x}{x^2 - x + 1}" /> 的值域</p>
                    <p>两边同时乘以分母，得 <Math tex="x^2y - xy + y = x^2 - x" /></p>
                    <p>移项整理得：<Math tex="(y-1)x^2 + (1-y)x + y = 0" /></p>
                    <p>当 <Math tex="y = 1" /> 时，代入得 <Math tex="1 = 0" />，矛盾，所以 <Math tex="y \neq 1" /></p>
                    <p>当 <Math tex="y \neq 1" /> 时，<Math tex="x" /> 有实数解需 <Math tex="\Delta \geq 0" /></p>
                    <p><Math tex="\Delta = (1-y)^2 - 4(y-1)y \geq 0" /></p>
                    <p>展开得 <Math tex="-3y^2 + 2y + 1 \geq 0" /></p>
                    <p>同乘 <Math tex="-1" />，得 <Math tex="3y^2 - 2y - 1 \leq 0" />，即 <Math tex="(3y+1)(y-1) \leq 0" /></p>
                    <p>小于取中间，解得 <Math tex="-\dfrac{1}{3} \leq y \leq 1" />，又 <Math tex="y \neq 1" /></p>
                    <p><strong>结果</strong>：值域为 <Math tex="\left[-\dfrac{1}{3},\, 1\right)" /></p>
                  </div>
                </div>
              </div>
              <div>
                <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例题</div>
                <div className="px-1 py-1 space-y-1">
                  <p><strong>例 2</strong>：求函数 <Math tex="y = \dfrac{2x^2 + 4x - 7}{x^2 + 2x + 3}" /> 的值域</p>
                  <p>两边同时乘以分母，得 <Math tex="2x^2 + 4x - 7 = x^2 y + 2xy + 3y" /></p>
                  <p>移项整理得：<Math tex="(y-2)x^2 + 2(y-2)x + (3y+7) = 0" /></p>
                  <p>当 <Math tex="y = 2" /> 时，代入得 <Math tex="13 = 0" />，矛盾，所以 <Math tex="y \neq 2" /></p>
                  <p>当 <Math tex="y \neq 2" /> 时，<Math tex="x" /> 有实数解需 <Math tex="\Delta \geq 0" /></p>
                  <p><Math tex="\Delta = 4(y-2)^2 - 4(y-2)(3y+7) \geq 0" /></p>
                  <p>展开得 <Math tex="-8y^2 - 20y + 72 \geq 0" /></p>
                  <p>同乘 <Math tex="-1" /> 变号，十字相乘法化简得 <Math tex="(2y+9)(y-2) \leq 0" /></p>
                  <p>小于取中间，解得 <Math tex="-\dfrac{9}{2} \leq y \leq 2" />，又 <Math tex="y \neq 2" /></p>
                  <p><strong>结果</strong>：值域为 <Math tex="\left[-\dfrac{9}{2},\, 2\right)" /></p>
                  <div className="border-t border-dashed border-gray-300 pt-1 mt-1">
                    <p>1. <Math tex="y = \dfrac{x^2 + x + 1}{x^2 + 1}" /> 的值域为 ______</p>
                  </div>
                  <div className="border-t border-dashed border-gray-300 pt-1 mt-1">
                    <p>2. <Math tex="y = \dfrac{x^2 - x}{x^2 + x + 1}" /> 的值域为 ______</p>
                  </div>
                  <div className="border-t border-dashed border-gray-300 pt-1 mt-1">
                    <p>3. <Math tex="y = \dfrac{3x^2 + 2x - 1}{x^2 + x + 1}" /> 的值域为 ______</p>
                  </div>
                </div>
              </div>
            </div>

            <PageBreak />

            <div className="grid grid-cols-[55fr_45fr] border border-gray-400 rounded overflow-hidden">
              <div className="border-r border-gray-400">
                <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">⑥分离常数法</div>
                <div className="px-3 py-2 space-y-1">
                  <p>对于形如 <Math tex="y = \dfrac{cx + d}{ax + b}" />（<Math tex="ac \neq 0, ad \neq bc" />）的函数</p>
                  <p>可将其变形为 <Math tex="y = \dfrac{c}{a} + \dfrac{ad - bc}{a(ax + b)}" /> 的形式</p>
                  <p>因为 <Math tex="\dfrac{ad - bc}{a(ax + b)} \neq 0" />，所以值域为 <Math tex="\left\{y \mid y \neq \dfrac{c}{a}\right\}" /></p>
                  <div className="border-t border-gray-300 pt-1 mt-1 space-y-1">
                    <p><strong>例 2</strong>：函数 <Math tex="y = \dfrac{1-x}{2+x}" />（<Math tex="-1 \leq x \leq 1" />）的值域为 ______</p>
                    <p>把分子配凑成分母的形式：<Math tex="y = \dfrac{-x - 2 + 2 + 1}{x + 2}" /></p>
                    <p><Math tex="= \dfrac{-(x+2) + 3}{x+2} = -1 + \dfrac{3}{x+2}" />，题目给了 x 的定义域</p>
                    <p>所以 <Math tex="1 \leq x + 2 \leq 3" />，取倒数 <Math tex="\dfrac{1}{3} \leq \dfrac{1}{x+2} \leq 1" /></p>
                    <p>同时乘 3 再减 1，得 <Math tex="0 \leq -1 + \dfrac{3}{x+2} \leq 2" /></p>
                    <p>即 <Math tex="0 \leq y \leq 2" />，值域为 <Math tex="[0,\, 2]" /></p>
                  </div>
                </div>
              </div>
              <div>
                <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例题</div>
                <div className="px-1 py-1 space-y-1">
                  <p><strong>例</strong>：求函数 <Math tex="y = \dfrac{3x + 1}{x - 2}" /> 的值域</p>
                  <p>把分子配凑成分母的形式：<Math tex="\dfrac{3x - 6 + 6 + 1}{x - 2}" /></p>
                  <p><Math tex="= \dfrac{3(x-2) + 7}{x - 2} = 3 + \dfrac{7}{x - 2}" />，用观察法直接求</p>
                  <p>因为 <Math tex="x - 2 \neq 0" />，所以 <Math tex="\dfrac{7}{x-2} \neq 0" /></p>
                  <p>两边同时加 3，得 <Math tex="3 + \dfrac{7}{x-2} \neq 3" />，即 <Math tex="y \neq 3" /></p>
                  <p>值域为 <Math tex="(-\infty,\, 3) \cup (3,\, +\infty)" /></p>
                  <div className="border-t border-dashed border-gray-300 pt-1 mt-1">
                    <p>1. <Math tex="y = \dfrac{2x + 3}{x + 1}" /> 的值域为 ______</p>
                  </div>
                  <div className="border-t border-dashed border-gray-300 pt-1 mt-1">
                    <p>2. <Math tex="y = \dfrac{x - 1}{x + 2}" />（<Math tex="0 \leq x \leq 3" />）的值域为 ______</p>
                  </div>
                  <div className="border-t border-dashed border-gray-300 pt-1 mt-1">
                    <p>3. <Math tex="y = \dfrac{3x + 2}{x - 1}" /> 的值域为 ______</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 求值域易错点总结 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-orange-800 border-b border-gray-400 bg-orange-50">⚠️ 求值域易错点与注意事项</div>
              <div className="grid grid-cols-2">
                <div className="border-r border-gray-400 px-3 py-2 space-y-1 leading-7">
                  <p><strong>1. 换元后忘记 t 的取值范围</strong></p>
                  <p>例：<Math tex="y = -t^2 + 4t + 1" />，其中 <Math tex="t \in [0, 2]" /></p>
                  <p>配方得 <Math tex="y = -(t-2)^2 + 5" /></p>
                  <p>❌ 忘了 <Math tex="t \in [0, 2]" />，直接写 <Math tex="(-\infty, 5]" /></p>
                  <p>✅ 代入端点 <Math tex="t=0" /> 得 1，<Math tex="t=2" /> 得 5，值域 <Math tex="[1, 5]" /></p>

                  <p className="pt-1"><strong>2. 取倒数忘记反向</strong></p>
                  <p><Math tex="1 \leq x+2 \leq 3" /> 取倒数，大小<strong>反转</strong>：<Math tex="\dfrac{1}{3} \leq \dfrac{1}{x+2} \leq 1" /></p>
                  <p>错误写法：<Math tex="1 \leq \dfrac{1}{x+2} \leq 3" /> ❌</p>

                  <p className="pt-1"><strong>3. 判别式法忘记讨论特殊值</strong></p>
                  <p>例：<Math tex="y = \dfrac{x^2-x}{x^2-x+1}" />，整理成 <Math tex="(y-1)x^2 + \cdots = 0" /></p>
                  <p>当 <Math tex="y = 1" /> 时二次项系数为 0，必须<strong>单独代入检验</strong></p>
                </div>
                <div className="px-3 py-2 space-y-1 leading-7">
                  <p><strong>4. 有定义域限制时不能只用公式</strong></p>
                  <p>例：<Math tex="y = \dfrac{3x+1}{x-2}" /> 无限制时，分离常数得 <Math tex="y \neq 3" /></p>
                  <p>但如果题目给了 <Math tex="x \in [0, 1]" />，就必须代入端点算实际范围</p>

                  <p className="pt-1"><strong>5. 开闭区间写错</strong></p>
                  <p>能取到端点用 <Math tex="[\ ]" />，取不到用 <Math tex="(\ )" /></p>
                  <p>例：<Math tex="y = x^2" />（<Math tex="x \in (0, 2]" />），<Math tex="x = 0" /> 取不到，所以 <Math tex="y = 0" /> 取不到，值域是 <Math tex="(0, 4]" /> 不是 <Math tex="[0, 4]" /></p>

                  <p className="pt-1"><strong>6. 求出根号内的范围后忘记开根号</strong></p>
                  <p>例：求 <Math tex="y = \sqrt{4 - x^2}" /> 的值域</p>
                  <p>根号内：<Math tex="0 \leq 4 - x^2 \leq 4" /></p>
                  <p>❌ 直接写值域 <Math tex="[0, 4]" />（这是根号<strong>里面</strong>的范围）</p>
                  <p>✅ 开根号：<Math tex="0 \leq \sqrt{4 - x^2} \leq 2" />，值域 <Math tex="[0, 2]" /></p>
                </div>
              </div>
            </div>

            <PracticeCard
              questions={rangeFill} title="" explanations={functionConceptExplanations} hideBlankLine
              renderItem={(q, idx) => (
                <div className="bg-white rounded-lg border border-green-100 px-2 py-[4px]" key={idx}>
                  <span className="text-green-600 mr-1">{idx + 1}.</span>
                  {q.questionLatex ? <Math tex={q.questionLatex} /> : q.question}
                </div>
              )}
            />

          </div>
        </Collapsible>
      </section>

      <PageBreak label="单调性" />

      {/* ═══════════════════════════════════════════════════════ */}
      {/* Section 5: 单调性 */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section id="fc-monotonicity" className="mb-0 scroll-mt-4">
        <Collapsible title="五、单调性（增函数与减函数）" defaultOpen storageKey="func-concept:monotonicity">
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            <p className="leading-7">函数单调性，用直白的话来说就是：当 <Math tex="x" /> 变大或变小的时候，<Math tex="y" /> 会跟着怎么变？</p>

            <div className="grid grid-cols-3 gap-1.5 my-1">
              <div className="text-center">
                <div className="bg-white border border-gray-300 rounded-lg p-1.5">
                  <p className="leading-6"><Math tex="x" /> 变大，<Math tex="y" /> 也变大</p>
                  <p className="leading-6">图象从左到右<strong className="text-orange-700">往上走</strong></p>
                  <div className="flex justify-center">
                    <DebugGeo2dSvg data={monotonicIncDiagram} width={140} height={110} />
                  </div>
                </div>
                <p className="font-bold text-lg mt-0.5">单调递<strong className="text-orange-700">增</strong></p>
              </div>
              <div className="text-center">
                <div className="bg-white border border-gray-300 rounded-lg p-1.5">
                  <p className="leading-6">左半段递增，右半段递减</p>
                  <p className="leading-6">需要<strong className="text-orange-700">分区间</strong>讨论</p>
                  <div className="flex justify-center">
                    <DebugGeo2dSvg data={monotonicMixDiagram} width={140} height={110} />
                  </div>
                </div>
                <p className="font-bold text-lg mt-0.5">先<strong className="text-orange-700">增</strong>后<strong className="text-orange-700">减</strong></p>
              </div>
              <div className="text-center">
                <div className="bg-white border border-gray-300 rounded-lg p-1.5">
                  <p className="leading-6"><Math tex="x" /> 变大，<Math tex="y" /> 反而变小</p>
                  <p className="leading-6">图象从左到右<strong className="text-orange-700">往下走</strong></p>
                  <div className="flex justify-center">
                    <DebugGeo2dSvg data={monotonicDecDiagram} width={140} height={110} />
                  </div>
                </div>
                <p className="font-bold text-lg mt-0.5">单调递<strong className="text-orange-700">减</strong></p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-3 py-1 leading-7">
                <p><strong className="text-orange-700 text-lg">单调性</strong><span className="text-gray-500">（增减性）</span><strong className="text-lg">在一段区间内</strong></p>
                <div className="ml-4 space-y-0">
                  <p><strong className="text-lg">函数</strong> 越来越大 <span className="text-orange-700">↗</span> → 增函数 / 增区间 / <strong className="text-orange-700">单调递增</strong> / 单增</p>
                  <p><strong className="text-lg">函数</strong> 越来越小 <span className="text-orange-700">↘</span> → 减函数 / 减区间 / <strong className="text-orange-700">单调递减</strong> / 单减</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">{"\u{1F4DD}"} 单调性基础例题</div>
              <div className="px-3 py-1 space-y-0 leading-8">
                <p>已知函数 <Math tex="y = f(x)" /> 在区间 <Math tex="(-3, 4)" /> 上的图象如图所示，根据图象说出函数的单调区间，以及每个区间上的单调性。</p>
                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0 overflow-hidden" style={{ width: 260, height: 84 }}>
                    <DebugGeo2dSvg data={monotonicWaveDiagram} width={260} height={84} />
                  </div>
                  <div className="flex-1 text-[0.85rem] leading-7">
                    <div className="grid grid-cols-4 gap-x-1 gap-y-0.5">
                      <p><Math tex="(-3, -1)" /> 单<strong className="text-orange-700">减</strong></p>
                      <p><Math tex="(-1, 2)" /> 单<strong className="text-orange-700">增</strong></p>
                      <p><Math tex="(2, 3)" /> 单<strong className="text-orange-700">减</strong></p>
                      <p><Math tex="(3, 4)" /> 单<strong className="text-orange-700">增</strong></p>
                    </div>
                    <p className="mt-1"><strong className="text-orange-700">两端必须是开</strong>（两端没有定义）<strong className="text-orange-700">写开写闭都算对</strong>（中间有定义）</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">{"\u{1F4D0}"} 严格定义</div>
              <div className="px-3 py-1 space-y-0 leading-7">
                <p>设函数 <Math tex="f(x)" /> 在区间 <Math tex="D" /> 上有定义，对于 <Math tex="D" /> 内的<strong>任意</strong>两个值 <Math tex="x_1, x_2" /></p>
                <p>若 <Math tex="x_1 < x_2" /> 时，总有 <Math tex="f(x_1) < f(x_2)" />，则称 <Math tex="f(x)" /> 在 <Math tex="D" /> 上是<strong className="text-orange-700">增函数</strong></p>
                <p>若 <Math tex="x_1 < x_2" /> 时，总有 <Math tex="f(x_1) > f(x_2)" />，则称 <Math tex="f(x)" /> 在 <Math tex="D" /> 上是<strong className="text-orange-700">减函数</strong></p>
                <p className="text-orange-700 font-bold">一句话：增函数就是"<Math tex="x" /> 越大，<Math tex="f(x)" /> 也越大"，减函数就是"<Math tex="x" /> 越大，<Math tex="f(x)" /> 反而越小"</p>
              </div>
            </div>

            <div className="border border-orange-300 bg-orange-50 rounded flex text-[0.85rem]">
              <div className="flex-1 px-3 py-1.5">
                <p className="font-bold text-orange-800">📌 定义法证明单调性（6 步）</p>
                <p>①设：任取 <Math tex="x_1 < x_2" />　②代入：算 <Math tex="f(x_1)" />、<Math tex="f(x_2)" />　③作差：<Math tex="f(x_1) - f(x_2)" /></p>
                <p>④整理化简　⑤判号：判断整个式子的正负　⑥结论：总结所得条件，利用定义判断</p>
              </div>
              <div className="border-l border-orange-300 px-3 py-1.5 w-[30%]">
                <p className="font-bold text-orange-800">⚠️ 注意</p>
                <p>有区间限制时，"设"要写明范围</p>
                <p>整理目标：化成能判正负的形式</p>
              </div>
            </div>

            <div className="grid grid-cols-2 border border-gray-400 rounded overflow-hidden">
              <div className="border-r border-gray-400">
                <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例 1：用定义验证 <Math tex="f(x) = 2x + 1" /> 在 <Math tex="\mathbb{R}" /> 上递增</div>
                <div className="px-3 py-2 space-y-1">
                  <p>在 <Math tex="\mathbb{R}" /> 上任取 <Math tex="x_1 < x_2" /></p>
                  <p>代入：<Math tex="f(x_1) = 2x_1 + 1" />，<Math tex="f(x_2) = 2x_2 + 1" /></p>
                  <p>作差：<Math tex="f(x_1) - f(x_2) = (2x_1+1) - (2x_2+1)" /></p>
                  <p className="pl-6">整理：<Math tex="= 2x_1 + 1 - 2x_2 - 1 = 2(x_1 - x_2)" /></p>
                  <p>因为 <Math tex="x_1 < x_2" />，所以 <Math tex="x_1 - x_2 < 0" /></p>
                  <p>两边同时乘 2，可得 <Math tex="2(x_1 - x_2) < 0" /></p>
                  <p>又因为作差所得 <Math tex="f(x_1) - f(x_2) = 2(x_1 - x_2)" /></p>
                  <p>所以 <Math tex="f(x_1) - f(x_2) < 0" />，得 <Math tex="f(x_1) < f(x_2)" /></p>
                  <p className="text-orange-700 font-bold">由定义得：</p>
                  <p className="text-orange-700 font-bold"><Math tex="x_1 < x_2" /> 且 <Math tex="f(x_1) < f(x_2)" />，则 <Math tex="f(x)" /> 是增函数</p>
                </div>
                <div className="px-2 py-1 border-t border-gray-400 bg-gray-50 space-y-0.5 text-[0.85rem]">
                  <p>1. 用定义证明 <Math tex="f(x) = 3x - 2" /> 在 <Math tex="\mathbb{R}" /> 上递增</p>
                  <p>2. 用定义证明 <Math tex="f(x) = \dfrac{1}{x+1}" /> 在 <Math tex="(-1, +\infty)" /> 上是减函数</p>
                </div>
              </div>
              <div>
                <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例 2：用定义验证 <Math tex="f(x) = -x^2" /> 在 <Math tex="(0, +\infty)" /> 上递减</div>
                <div className="px-3 py-2 space-y-1">
                  <p>在 <Math tex="(0, +\infty)" /> 上任取 <Math tex="0 < x_1 < x_2" /></p>
                  <p>代入：<Math tex="f(x_1) = -x_1^2" />，<Math tex="f(x_2) = -x_2^2" /></p>
                  <p>作差：<Math tex="f(x_1) - f(x_2) = -x_1^2 - (-x_2^2)" /></p>
                  <p className="pl-6">整理：<Math tex="= -x_1^2 + x_2^2 = x_2^2 - x_1^2" /></p>
                  <p className="pl-6">由平方差公式 <Math tex="a^2 - b^2 = (a+b)(a-b)" />：</p>
                  <p className="pl-6"><Math tex="= (x_2 + x_1)(x_2 - x_1)" /></p>
                  <p>得到了两个式子相乘，需要判断大于 0 还是小于 0</p>
                  <p>从设的条件中 <Math tex="x_1, x_2 > 0" />，所以 <Math tex="x_2 + x_1 > 0" /></p>
                  <p>条件中 <Math tex="x_1 < x_2" />，移项可得 <Math tex="x_2 - x_1 > 0" /></p>
                  <p>两个都大于 0，所以 <Math tex="(x_2 + x_1)(x_2 - x_1) > 0" /></p>
                  <p>即 <Math tex="f(x_1) - f(x_2) > 0" />，得 <Math tex="f(x_1) > f(x_2)" /></p>
                  <p className="text-orange-700 font-bold">由定义得：<Math tex="x_1 < x_2" /> 且 <Math tex="f(x_1) > f(x_2)" /></p>
                  <p className="text-orange-700 font-bold">则 <Math tex="f(x)" /> 在 <Math tex="(0, +\infty)" /> 上是减函数</p>
                </div>
              </div>
            </div>

            <PageBreak label="单调性进阶" />

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">这些表述，也与单调性有关</div>
              <div className="grid grid-cols-2 divide-x divide-gray-300">
                <div className="px-3 py-2 space-y-1 leading-8">
                  <p className="font-bold"><Math tex="(x_1 - x_2)[f(x_1) - f(x_2)] > 0" /> 为什么表示增函数？</p>
                  <p>相乘大于 0 说明<strong>同号</strong>，分两种情况试一试</p>

                  <p className="font-bold mt-1">①同为正</p>
                  <p><Math tex="x_1 - x_2 > 0" /> 并且 <Math tex="f(x_1) - f(x_2) > 0" /></p>
                  <p>也就是 <Math tex="x_1 > x_2" />，<Math tex="f(x_1) > f(x_2)" /></p>
                  <p><Math tex="x_1" /> 比 <Math tex="x_2" /> 大，函数值也更大，这就是<strong className="text-orange-700">单调递增</strong></p>

                  <p className="font-bold mt-1">②同为负</p>
                  <p>同理，移项得 <Math tex="x_1 < x_2" /> 且 <Math tex="f(x_1) < f(x_2)" />，还是<strong className="text-orange-700">单增</strong></p>

                  <p className="text-orange-700 font-bold mt-1">两种情况都是"<Math tex="x" /> 大 <Math tex="f(x)" /> 也大"，即<strong>单调递增</strong></p>
                </div>
                <div className="px-3 py-2 space-y-1 leading-8">
                  <p className="font-bold"><Math tex="\dfrac{f(x_1) - f(x_2)}{x_1 - x_2} < 0" /> 为什么表示减函数？</p>
                  <p>商小于 0 说明分子分母<strong>异号</strong>，分两种情况</p>

                  <p className="font-bold mt-1">①分子正、分母负</p>
                  <p><Math tex="f(x_1) - f(x_2) > 0" /> 并且 <Math tex="x_1 - x_2 < 0" /></p>
                  <p>也就是 <Math tex="x_1 < x_2" />，但 <Math tex="f(x_1) > f(x_2)" /></p>
                  <p><Math tex="x_1" /> 比 <Math tex="x_2" /> 小，函数值反而更大，这就是<strong className="text-orange-700">单调递减</strong></p>

                  <p className="font-bold mt-1">②分子负、分母正</p>
                  <p>同理，得 <Math tex="x_1 > x_2" /> 但 <Math tex="f(x_1) < f(x_2)" />，还是<strong className="text-orange-700">单减</strong></p>

                  <p className="text-orange-700 font-bold mt-1">两种情况都是"<Math tex="x" /> 大 <Math tex="f(x)" /> 反小"，即<strong>单调递减</strong></p>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="flex">
                <div className="px-3 py-2 space-y-1 leading-8 w-[60%]">
                  <div className="flex items-start gap-2">
                    <div className="flex-1 space-y-1">
                      <p className="font-bold"><Math tex="\exists\, x_1 \neq x_2,\; f(x_1) = f(x_2)" /> 在说啥？</p>
                      <p>存在两个不同的 <Math tex="x" />，但函数值一样</p>
                      <p>说明函数中间一定拐弯了，不可能一直升或一直降</p>
                    </div>
                    <div className="flex-shrink-0 overflow-hidden" style={{ width: 130, height: 95 }}>
                      <div style={{ position: 'relative', left: -5, top: -2 }}>
                        <DebugGeo2dSvg data={notMonotonicDiagram} width={140} height={100} />
                      </div>
                    </div>
                  </div>
                  <p className="text-orange-700 font-bold">结论：这个函数<strong>一定不单调</strong></p>
                  <p>逆否命题：若 <Math tex="f" /> 单调，则 <Math tex="f(x_1) = f(x_2)" /> 必有 <Math tex="x_1 = x_2" /></p>
                </div>
                <div className="px-3 py-2 space-y-1 leading-8 w-[40%] border-l border-gray-300">
                  <p className="font-bold">⚡ 快速判断口诀</p>
                  <p>看两个括号里的<strong>角标顺序</strong></p>
                  <p><Math tex="x_1 - x_2" /> 和 <Math tex="f(x_1) - f(x_2)" /></p>
                  <p>都是 <strong>1 在前 2 在后</strong></p>
                  <p className="text-orange-700 font-bold">角标顺序一致：&gt; 0 → 单增；&lt; 0 → 单减</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1">
                <p><span className="font-bold text-teal-700 text-lg">思考：</span>定义法证明函数单调性比较慢，有没有别的方法可以一眼看出函数的单调性的呢？</p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📌 函数加减的单调性规则</div>
              <div className="px-3 py-2 space-y-1">
                <div>
                  <div className="grid grid-cols-3 gap-x-2 gap-y-0.5">
                    <p>增 + 增 = 增</p>
                    <p>减 + 减 = 减</p>
                    <p>增 + 减 = <strong>不确定</strong></p>
                    <p>增 − 减 = 增 + 增 = 增</p>
                    <p>减 − 增 = 减 + 减 = 减</p>
                    <p>减 + 增 = <strong>不确定</strong></p>
                  </div>
                  <p className="mt-1">核心：减法转加法（<strong>−增=减，−减=增</strong>）再判断</p>
                  <div className="border-t border-dashed border-gray-300 pt-1 mt-1 grid grid-cols-2 gap-x-4 gap-y-0.5">
                    <div className="space-y-0.5">
                      <p>① 若 <Math tex="f(x)" /> 为减函数，<Math tex="g(x)" /> 为减函数，则 <Math tex="f(x)+g(x)" /></p>
                      <p className="pl-4">减 + 减 = <strong className="text-orange-700">减函数</strong></p>
                      <p>② 若 <Math tex="f(x)" /> 为增函数，则 <Math tex="-f(x)" /> 的单调性为？</p>
                      <p className="pl-4">−增 = <strong className="text-orange-700">减函数</strong></p>
                    </div>
                    <div className="space-y-0.5">
                      <p>③ 若 <Math tex="f(x)" /> 为增函数，<Math tex="g(x)" /> 为减函数，则 <Math tex="f(x)+g(x)" /></p>
                      <p className="pl-4">增 + 减 = <strong className="text-orange-700">不确定</strong></p>
                      <p>④ 若 <Math tex="f(x)" /> 为减函数，<Math tex="g(x)" /> 为增函数，则 <Math tex="f(x)-g(x)" /></p>
                      <p className="pl-4">减 − 增 = 减 + 减 = <strong className="text-orange-700">减函数</strong></p>
                    </div>
                  </div>
                  <div className="border-t border-dashed border-gray-300 pt-1 mt-1">
                    <p><strong>记忆技巧</strong></p>
                    <p>把增函数想成正数，减函数想成负数，结果一样</p>
                    <p>例如 正 − 负 = 正，所以 增 − 减 = 增</p>
                  </div>
                </div>
                <hr className="border-gray-400" />
                <p className="font-bold">经典例题 —— 函数单调性的加减运算</p>
                <p>判断 <Math tex="f(x) = x^3 + 2x - 4\sqrt{1-x}" /> 的单调性</p>
                <p><strong>第一步</strong>：根号下 <Math tex="1 - x \geq 0" />，得 <Math tex="x \leq 1" />，定义域为 <Math tex="(-\infty, 1]" /></p>
                <p><strong>第二步</strong>：拆成几个函数判断增减，<Math tex="x^3" /> 增函数，<Math tex="2x" /> 增函数，<Math tex="\sqrt{1-x}" /> 减函数（<Math tex="x" /> 越大，<Math tex="1-x" /> 越小，<Math tex="\sqrt{1-x}" /> 越小）</p>
                <p><strong>第三步</strong>：<Math tex="x^3 + 2x" /> 增+增=增，<Math tex="-4\sqrt{1-x}" /> −减=增，所以 <Math tex="f(x)" /> = 增+增 = 增。<strong className="text-orange-700">结论：<Math tex="f(x)" /> 在 <Math tex="(-\infty, 1]" /> 上单增</strong></p>
                <hr className="border-gray-400" />
                <div className="grid grid-cols-2 gap-x-4 gap-y-0.5">
                  <p><strong>变式 1</strong>：判断 <Math tex="f(x) = x^3 - \tfrac{1}{x}" />（<Math tex="x > 0" />）的单调性</p>
                  <p><strong>变式 2</strong>：判断 <Math tex="f(x) = \sqrt{x} + 3x" />（<Math tex="x > 0" />）的单调性</p>
                  <p><strong>变式 3</strong>：判断 <Math tex="f(x) = 2x - \sqrt{x}" />（<Math tex="x > 0" />）的单调性</p>
                  <p><strong>变式 4</strong>：判断 <Math tex="f(x) = x^3 + x - \tfrac{2}{x}" />（<Math tex="x > 0" />）的单调性</p>
                </div>
              </div>
            </div>

            <PageBreak />

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📌 含绝对值函数的单调性 —— 分段函数法</div>
              <div className="px-3 py-2 space-y-1">
                <p>核心思路：<strong>绝对值 → 转化为分段函数 → 逐段分析单调性</strong></p>
                <p><strong>第一步：找分界点</strong> —— 令每个绝对值里面 <Math tex="= 0" />，解出 <Math tex="x" /> 值</p>
                <p><strong>第二步：分段去绝对值</strong> —— 分界点把数轴分成若干段，每段内绝对值里的正负确定，直接去掉绝对值</p>
                <p><strong>第三步：判断各段单调性</strong> —— 去掉绝对值后每段都是普通函数，一次函数看斜率，二次函数找对称轴再分段</p>
                <p><strong>第四步：写结论</strong> —— 分段写出单调区间</p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例 3：判断 <Math tex="f(x) = |2x - 2| + 3" /> 的单调区间</div>
              <div className="px-3 py-2 space-y-1">
                <p><strong>第一步</strong>：找分界点，去绝对值。令绝对值里面 <Math tex="= 0" />，即 <Math tex="2x - 2 = 0" />，得 <Math tex="x = 1" /></p>
                <div className="grid grid-cols-2 gap-x-4">
                  <div className="space-y-1">
                    <p>当 <Math tex="x \leq 1" /> 时，<Math tex="2x - 2 \leq 0" />，加负号去绝对值</p>
                    <p>验证：取 <Math tex="x = 0" /> 得 <Math tex="2 \times 0 - 2 = -2 < 0" /> ✓</p>
                    <p><Math tex="|2x-2| = -(2x-2) = -2x+2" /></p>
                    <p>所以 <Math tex="f(x) = (-2x + 2) + 3 = -2x + 5" /></p>
                  </div>
                  <div className="space-y-1">
                    <p>当 <Math tex="x > 1" /> 时，<Math tex="2x - 2 > 0" />，直接去绝对值</p>
                    <p>验证：取 <Math tex="x = 1" /> 得 <Math tex="2 \times 1 - 2 = 0 \geq 0" /> ✓</p>
                    <p><Math tex="|2x-2| = 2x-2" /></p>
                    <p>所以 <Math tex="f(x) = (2x - 2) + 3 = 2x + 1" /></p>
                  </div>
                </div>
                <div className="border-t border-dashed border-gray-300 pt-1">
                  <p><strong>第二步</strong>：每段都是一次函数，直接看斜率判断</p>
                  <div className="grid grid-cols-2 gap-x-4">
                    <div className="space-y-1">
                      <p>在 <Math tex="(-\infty, 1]" /> 上，<Math tex="f(x) = -2x + 5" /></p>
                      <p>斜率为 <Math tex="-2 < 0" />，<strong className="text-orange-700">单调递减</strong></p>
                    </div>
                    <div className="space-y-1">
                      <p>在 <Math tex="(1, +\infty)" /> 上，<Math tex="f(x) = 2x + 1" /></p>
                      <p>斜率为 <Math tex="2 > 0" />，<strong className="text-orange-700">单调递增</strong></p>
                    </div>
                  </div>
                </div>
                <p className="text-orange-700 font-bold">结论：<Math tex="f(x)" /> 在 <Math tex="(-\infty, 1]" /> 上单减，在 <Math tex="(1, +\infty)" /> 上单增</p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例 4：判断 <Math tex="f(x) = |x - 1| + |x - 3|" /> 的单调区间</div>
              <div className="px-3 py-2 space-y-1">
                <p><strong>第一步</strong>：分别找分界点。令 <Math tex="x - 1 = 0" /> 得 <Math tex="x = 1" />，令 <Math tex="x - 3 = 0" /> 得 <Math tex="x = 3" /></p>
                <p><strong>第二步</strong>：两个分界点把数轴分成三段，每段分别去绝对值再相加</p>
                <div className="grid grid-cols-3 gap-x-4">
                  <div className="space-y-1">
                    <p><strong><Math tex="x \leq 1" /> 时</strong></p>
                    <p><Math tex="|x-1| = -(x-1) = -x+1" /></p>
                    <p><Math tex="|x-3| = -(x-3) = -x+3" /></p>
                    <p><Math tex="f(x) = -2x + 4" /></p>
                    <p>斜率 <Math tex="-2 < 0" />，<strong className="text-orange-700">递减</strong></p>
                  </div>
                  <div className="space-y-1">
                    <p><strong><Math tex="1 < x < 3" /> 时</strong></p>
                    <p><Math tex="|x-1| = x-1" /></p>
                    <p><Math tex="|x-3| = -(x-3) = -x+3" /></p>
                    <p><Math tex="f(x) = (x-1)+(-x+3) = 2" /></p>
                    <p>常数，<strong className="text-orange-700">不增不减</strong></p>
                  </div>
                  <div className="space-y-1">
                    <p><strong><Math tex="x \geq 3" /> 时</strong></p>
                    <p><Math tex="|x-1| = x-1" /></p>
                    <p><Math tex="|x-3| = x-3" /></p>
                    <p><Math tex="f(x) = 2x - 4" /></p>
                    <p>斜率 <Math tex="2 > 0" />，<strong className="text-orange-700">递增</strong></p>
                  </div>
                </div>
                <div className="border-t border-dashed border-gray-300 pt-1">
                  <p className="text-orange-700 font-bold">结论：<Math tex="(-\infty, 1]" /> 递减，<Math tex="(1, 3)" /> 为常数 2，<Math tex="[3, +\infty)" /> 递增</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例 5：判断 <Math tex="f(x) = \dfrac{1}{|x - 2|}" /> 的单调区间</div>
              <div className="px-3 py-2 space-y-1">
                <p><strong>第一步</strong>：找分界点。令 <Math tex="x - 2 = 0" /> 得 <Math tex="x = 2" />。注意 <Math tex="x = 2" /> 时分母为 0，不在定义域内</p>
                <p><strong>第二步</strong>：分段去绝对值</p>
                <div className="grid grid-cols-2 gap-x-4">
                  <div className="space-y-1">
                    <p><strong><Math tex="x < 2" /> 时</strong>，<Math tex="x - 2 < 0" /></p>
                    <p><Math tex="|x-2| = -(x-2) = -x+2" /></p>
                    <p><Math tex="f(x) = \dfrac{1}{-x+2}" /></p>
                  </div>
                  <div className="space-y-1">
                    <p><strong><Math tex="x > 2" /> 时</strong>，<Math tex="x - 2 > 0" /></p>
                    <p><Math tex="|x-2| = x-2" /></p>
                    <p><Math tex="f(x) = \dfrac{1}{x-2}" /></p>
                  </div>
                </div>
                <div className="border-t border-dashed border-gray-300 pt-1">
                  <p><strong>第三步</strong>：判断各段单调性</p>
                  <div className="grid grid-cols-2 gap-x-4">
                    <div className="space-y-1">
                      <p>在 <Math tex="(-\infty, 2)" /> 上，分母 <Math tex="-x+2" /> 是减函数且 <Math tex="> 0" /></p>
                      <p>分母越小 → 分数越大 → <strong className="text-orange-700">单调递增</strong></p>
                    </div>
                    <div className="space-y-1">
                      <p>在 <Math tex="(2, +\infty)" /> 上，分母 <Math tex="x-2" /> 是增函数且 <Math tex="> 0" /></p>
                      <p>分母越大 → 分数越小 → <strong className="text-orange-700">单调递减</strong></p>
                    </div>
                  </div>
                </div>
                <p className="text-orange-700 font-bold">结论：<Math tex="f(x)" /> 在 <Math tex="(-\infty, 2)" /> 上单增，在 <Math tex="(2, +\infty)" /> 上单减</p>
                <hr className="border-gray-400" />
                <div className="grid grid-cols-[1fr_1fr_1.2fr] gap-x-4 gap-y-0.5">
                  <p>1. <Math tex="f(x) = |x + 3| - 1" /> 的单调区间</p>
                  <p>2. <Math tex="f(x) = -|2x - 4|" /> 的单调区间</p>
                  <p>3. <Math tex="f(x) = |x - 1| + |x + 1|" /> 的单调区间</p>
                  <p>4. <Math tex="f(x) = \dfrac{2}{|x + 1|}" /> 的单调区间</p>
                  <p>5. <Math tex="f(x) = |x^2 - 4|" /> 的单调区间</p>
                  <p>6. <Math tex="f(x) = |x - 2| - |x + 1|" /> 的单调区间</p>
                </div>
              </div>
            </div>

            {/* 复合函数内容已迁移到 _composite-staging.tsx */}


          </div>
        </Collapsible>
      </section>

      <PageBreak label="奇偶性" />

      {/* ═══════════════════════════════════════════════════════ */}
      {/* Section 6: 奇偶性 */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section id="fc-parity" className="mb-0 scroll-mt-4">
        <Collapsible title="六、奇偶性（对称之美）" defaultOpen storageKey="func-concept:parity">
          <div className="space-y-2 text-[0.9rem] text-gray-800">

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="flex justify-center">
                  <DebugGeo2dSvg data={parityEvenDiagram} width={260} height={128} />
                </div>
                <p className="font-bold text-lg text-orange-700">偶函数</p>
                <p>关于 <strong>y 轴</strong>轴对称</p>
                <p className="text-red-600 font-bold"><Math tex="f(x) = f(-x)" /></p>
              </div>
              <div className="text-center">
                <div className="flex justify-center">
                  <DebugGeo2dSvg data={parityOddDiagram} width={260} height={128} />
                </div>
                <p className="font-bold text-lg text-orange-700">奇函数</p>
                <p>关于<strong>原点</strong>中心对称</p>
                <p className="text-red-600 font-bold"><Math tex="f(x) = -f(-x)" /></p>
              </div>
            </div>

            <p className="font-bold">奇偶性研究的是：把 <Math tex="x" /> 换成 <Math tex="-x" /> 后，函数值是不变，还是变成相反数</p>

            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="p-3 space-y-2">
                <p><strong>偶函数</strong>：如果对于定义域内所有的 <Math tex="x" />，都有 <Math tex="f(-x) = f(x)" />，则该函数是偶函数，图像关于 <strong>y 轴</strong>轴对称</p>
                <p><strong>奇函数</strong>：如果对于定义域内所有的 <Math tex="x" />，都有 <Math tex="f(-x) = -f(x)" />，则该函数是奇函数，图像关于<strong>原点</strong>中心对称</p>
              </div>
              <hr className="border-gray-300" />
              <div className="grid grid-cols-2">
                <div className="p-3 space-y-1">
                  <p className="font-bold">(1) 判断 <Math tex="f(x) = x|x| + 2x" /> 的奇偶性</p>
                  <p>定义域为 <Math tex="\mathbb{R}" />，关于原点对称</p>
                  <p>把 <Math tex="x" /> 换成 <Math tex="-x" />：</p>
                  <p className="pl-4"><Math tex="f(-x) = (-x)|-x| + 2(-x) = -x|x| - 2x" /></p>
                  <p className="pl-4"><Math tex="= -(x|x| + 2x) = -f(x)" /></p>
                  <p>因为 <Math tex="f(-x) = -f(x)" />，是<strong>奇函数</strong></p>
                </div>
                <div className="p-3 space-y-1 border-l border-gray-300">
                  <p className="font-bold">(2) 判断 <Math tex="g(x) = \tfrac{|x| + x^4}{x^2 - 1}" /> 的奇偶性</p>
                  <p>定义域：<Math tex="x^2 - 1 \neq 0" />，即 <Math tex="x \neq \pm 1" />，关于原点对称</p>
                  <p>把 <Math tex="x" /> 换成 <Math tex="-x" />：</p>
                  <p className="pl-4"><Math tex="g(-x) = \dfrac{|-x| + (-x)^4}{(-x)^2 - 1} = \dfrac{|x| + x^4}{x^2 - 1} = g(x)" /></p>
                  <p>因为 <Math tex="g(-x) = g(x)" />，是<strong>偶函数</strong></p>
                </div>
              </div>
            </div>

            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-900 border-b border-gray-300 bg-gray-100">已知奇偶性求参</div>
              <div className="grid grid-cols-[55fr_45fr]">
                <div className="p-3 space-y-1">
                  <p>已知函数 <Math tex="f(x) = \dfrac{(x-2)(x+a)}{x}" /> 为奇函数，则 <Math tex="a =" /> ___</p>
                  <p className="font-bold">定义法</p>
                  <p>展开：<Math tex="f(x) = x + (a-2) - \tfrac{2a}{x}" /></p>
                  <p><Math tex="f(-x) = -x + (a-2) + \tfrac{2a}{x}" /></p>
                  <p><Math tex="-f(x) = -x - (a-2) + \tfrac{2a}{x}" /></p>
                  <p>令 <Math tex="f(-x) = -f(x)" />，代入化简得 <Math tex="a = 2" /></p>
                </div>
                <div className="p-3 space-y-1 border-l border-gray-300">
                  <p className="font-bold">代值法（已知奇偶性时，选好算的值代入）</p>
                  <p>奇函数满足 <Math tex="f(-1) = -f(1)" /></p>
                  <p><Math tex="f(1) = \dfrac{(1-2)(1+a)}{1} = -(1+a)" /></p>
                  <p><Math tex="f(-1) = \dfrac{(-3)(-1+a)}{-1} = 3(-1+a)" /></p>
                  <p>令 <Math tex="f(-1) = -f(1)" />，即 <Math tex="3(a-1) = 1+a" /></p>
                  <p>化简得 <Math tex="a = 2" /></p>
                </div>
              </div>
              <hr className="border-gray-300" />
              <div className="px-3 py-1.5 space-y-0.5">
                <p><strong>对称性法</strong>：<Math tex="f(2) = 0" />（因为分子有 <Math tex="(x-2)" /> 因子），又 <Math tex="f(2) = -f(-2)" />，所以 <Math tex="f(-2) = 0" /></p>
                <p>代入 <Math tex="f(-2)" />：分子 <Math tex="(-4)(-2+a) = 0" />，得 <Math tex="a = 2" /></p>
              </div>
            </div>

            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-900 border-b border-gray-300 bg-gray-100">根据奇偶性求值</div>
              <div className="p-3 space-y-1">
                <p>已知 <Math tex="f(x)" /> 为定义在 <Math tex="\mathbb{R}" /> 上的函数，<Math tex="f(2) = 2" />，且 <Math tex="g(x) = f(2x) + x^2" /> 为奇函数，则 <Math tex="f(-2) =" /> ___</p>
                <p><strong>思路</strong>：已知 <Math tex="f(2)" />，令 <Math tex="2x = 2" />，得 <Math tex="x = 1" />，先算 <Math tex="g(1)" /></p>
                <p><Math tex="g(1) = f(2) + 1 = 2 + 1 = 3" /></p>
                <p>又 <Math tex="g(1) = -g(-1) = -(f(-2) + 1)" />，所以 <Math tex="3 = -f(-2) - 1" />，得 <Math tex="f(-2) = -4" /></p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* Section 7: 函数性质大综合 */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section id="fc-comprehensive" className="mb-0 scroll-mt-4">
        <Collapsible title="七、函数性质大综合" defaultOpen storageKey="func-concept:comprehensive">
          <div className="space-y-2 text-[0.9rem] text-gray-800">

            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-900 border-b border-gray-300 bg-gray-100">单调性 + 奇偶性综合</div>
              <div className="px-3 py-1 space-y-1">
                <p className="font-bold">核心结论</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="border border-orange-200 rounded px-2 py-1 bg-orange-50">
                    <p className="font-bold text-orange-700">偶函数：左右单调性相反</p>
                    <p>若在 <Math tex="[0, +\infty)" /> 上递增，则在 <Math tex="(-\infty, 0]" /> 上递减</p>
                    <p>关键推论：<Math tex="f(-x) = f(x)" /> ⇒ <Math tex="f(x) = f(|x|)" />（正负都一样）</p>
                  </div>
                  <div className="border border-blue-200 rounded px-2 py-1 bg-blue-50">
                    <p className="font-bold text-blue-700">奇函数：左右单调性相同</p>
                    <p>若在 <Math tex="[0, +\infty)" /> 上递增，则在 <Math tex="(-\infty, 0]" /> 上也递增</p>
                  </div>
                </div>
                <p className="font-bold">做题思路</p>
                <p>遇到 <Math tex="f(a) \leq f(b)" /> 这类不等式，把两边自变量<strong>统一到同一侧</strong>，再用单调性比大小</p>
                <p><strong>偶函数</strong>：<Math tex="f(x) = f(|x|)" />，先去绝对值统一到右半边，再用单调性</p>
                <p><strong>奇函数</strong>：单调性全局一致，直接用单调性脱 <Math tex="f" /></p>
              </div>
              <hr className="border-gray-300" />
              <div className="px-3 py-1 space-y-1">
                <p><strong>例</strong>：已知 <Math tex="f(x)" /> 是定义在 <Math tex="\mathbb{R}" /> 上的偶函数，在 <Math tex="[0, +\infty)" /> 上单调递增。若 <Math tex="f(a) \leq f(2)" />，则 <Math tex="a" /> 的取值范围为</p>
                <p><strong>第一步</strong>：偶函数 <Math tex="f(x) = f(|x|)" />，所以 <Math tex="f(a) = f(|a|)" />，代入得 <Math tex="f(|a|) \leq f(2)" /></p>
                <p><strong>第二步</strong>：<Math tex="|a|" /> 和 <Math tex="2" /> 都 <Math tex="\geq 0" />，在 <Math tex="[0, +\infty)" /> 上递增，直接脱 <Math tex="f" />：<Math tex="|a| \leq 2" /></p>
                <p>解得：<Math tex="-2 \leq a \leq 2" /></p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {isPrinting && printOptions.showAnswers && <FunctionConceptAnswers />}
        </div>
      </LessonLayout>
      <Geo2dDebugToggle />
    </div>
  );
}
