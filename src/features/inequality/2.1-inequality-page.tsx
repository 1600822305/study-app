import { Math, Collapsible, SpeakButton, PageHeader, LessonLayout, ExportButton, PracticeCard, PageBreak } from '@/components/shared';
import { inequalityNarrations } from './data/2.1/2.1-narrations';
import { useProgress, usePrintMode } from '@/hooks';
import { inequalityProgressItems } from './data/2.1/2.1-progress';
import { InequalityAnswers, inequalityExplanations } from './2.1-inequality-answers';
import { amgmBasicFill, amgmTransformFill, amgmReverseFill, amgmNonHomoFill, amgmHomoFill } from './data/2.1/2.1-practice';

export function InequalityPage() {
  const { items, toggle } = useProgress('inequality', inequalityProgressItems);
  const { isPrinting, printOptions } = usePrintMode();

  return (
    <div>
      <PageHeader
        stage="第二阶段 · 不等式"
        title="2.1 不等式"
        narration={inequalityNarrations.intro}
        subtitle="3个核心知识点，1小时搞定"
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="2.1 不等式" />
      </div>


      <LessonLayout progressItems={items} onToggle={toggle}>
        <div className="[&_.rounded-xl]:mb-0 [&_.rounded-xl>.flex.items-center]:py-1 [&_.rounded-xl>div:last-child]:pt-1 [&_.rounded-xl>div:last-child]:pb-1">

      {/* Section 1: 不等式的性质 */}
      <section id="ineq-props" className="mb-0 scroll-mt-4">
        <Collapsible title="一、不等式的性质" defaultOpen storageKey="ineq:props" headerExtra={<SpeakButton text={inequalityNarrations.properties} />}>
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            {/* 八大性质速查表 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100">不等式的基本性质</div>
              <div className="px-3 py-1.5 border-b border-gray-300">
                <p>不等式是用 <Math tex=">" />、<Math tex="<" />、<Math tex="\geq" />、<Math tex="\leq" /> 等符号连接的数学式子，表示两个数或表达式之间的<strong>大小关系</strong></p>
                <p>例如 <Math tex="3 > 1" />，<Math tex="x + 2 \leq 5" />，<Math tex="a^2 \geq 0" /> 都是不等式。它有以下基本性质：</p>
              </div>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border-b border-r border-gray-300 px-2 py-1 text-left w-[15%]">性质</th>
                    <th className="border-b border-r border-gray-300 px-2 py-1 text-left w-[50%]">内容</th>
                    <th className="border-b border-gray-300 px-2 py-1 text-left">例子</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-r border-gray-300 px-2 py-1 font-bold text-green-700">① 对称性</td>
                    <td className="border-b border-r border-gray-300 px-2 py-1">若 <Math tex="a > b" />，则 <Math tex="b < a" /></td>
                    <td className="border-b border-gray-300 px-2 py-1">若 <Math tex="5 > 3" />，则 <Math tex="3 < 5" /></td>
                  </tr>
                  <tr>
                    <td className="border-b border-r border-gray-300 px-2 py-1 font-bold text-green-700">② 传递性</td>
                    <td className="border-b border-r border-gray-300 px-2 py-1">若 <Math tex="a > b" /> 且 <Math tex="b > c" />，则 <Math tex="a > c" /></td>
                    <td className="border-b border-gray-300 px-2 py-1">若 <Math tex="7 > 5" /> 且 <Math tex="5 > 2" />，则 <Math tex="7 > 2" /></td>
                  </tr>
                  <tr>
                    <td className="border-b border-r border-gray-300 px-2 py-1 font-bold text-green-700">③ 加法单调性</td>
                    <td className="border-b border-r border-gray-300 px-2 py-1">若 <Math tex="a > b" />，则 <Math tex="a + c > b + c" />（加减同一个数，方向不变）</td>
                    <td className="border-b border-gray-300 px-2 py-1">若 <Math tex="5 > 3" />，两边加 <Math tex="-10" />，得 <Math tex="-5 > -7" /></td>
                  </tr>
                  <tr>
                    <td className="border-b border-r border-gray-300 px-2 py-1 font-bold text-green-700">④ 乘正数</td>
                    <td className="border-b border-r border-gray-300 px-2 py-1">若 <Math tex="a > b" /> 且 <Math tex="c > 0" />，则 <Math tex="ac > bc" />（方向不变）</td>
                    <td className="border-b border-gray-300 px-2 py-1">若 <Math tex="5 > 3" />，两边乘 2，得 <Math tex="10 > 6" /></td>
                  </tr>
                  <tr>
                    <td className="border-b border-r border-gray-300 px-2 py-1 font-bold text-green-700">⑤ 乘负数</td>
                    <td className="border-b border-r border-gray-300 px-2 py-1">若 <Math tex="a > b" /> 且 <Math tex="c < 0" />，则 <Math tex="ac < bc" />（<strong>方向翻转</strong>）</td>
                    <td className="border-b border-gray-300 px-2 py-1">若 <Math tex="5 > 3" />，两边乘 <Math tex="-1" />，得 <Math tex="-5 < -3" /></td>
                  </tr>
                  <tr>
                    <td className="border-b border-r border-gray-300 px-2 py-1 font-bold text-green-700">⑥ 同向可乘</td>
                    <td className="border-b border-r border-gray-300 px-2 py-1">若 <Math tex="a > b > 0" /> 且 <Math tex="c > d > 0" />，则 <Math tex="ac > bd" /></td>
                    <td className="border-b border-gray-300 px-2 py-1">若 <Math tex="5 > 3" /> 且 <Math tex="4 > 2" />，则 <Math tex="20 > 6" /></td>
                  </tr>
                  <tr>
                    <td className="border-b border-r border-gray-300 px-2 py-1 font-bold text-green-700">⑦ 可乘方</td>
                    <td className="border-b border-r border-gray-300 px-2 py-1">若 <Math tex="a > b > 0" />，则 <Math tex="a^n > b^n" />（n 为正整数）</td>
                    <td className="border-b border-gray-300 px-2 py-1">若 <Math tex="3 > 2 > 0" />，则 <Math tex="9 > 4" /></td>
                  </tr>
                  <tr>
                    <td className="border-b border-r border-gray-300 px-2 py-1 font-bold text-green-700">⑧ 可开方</td>
                    <td className="border-b border-r border-gray-300 px-2 py-1">若 <Math tex="a > b > 0" />，则 <Math tex="\sqrt[n]{a} > \sqrt[n]{b}" />（n 为正整数）</td>
                    <td className="border-b border-gray-300 px-2 py-1">若 <Math tex="9 > 4 > 0" />，则 <Math tex="3 > 2" /></td>
                  </tr>
                  <tr>
                    <td className="border-r border-gray-300 px-2 py-1 font-bold text-green-700">⑨ 倒数法则</td>
                    <td className="border-r border-gray-300 px-2 py-1">若 <Math tex="a, b" /> 同号 且 <Math tex="a < b" />，则 <Math tex="\frac{1}{a} > \frac{1}{b} " />（同号取倒数翻转）</td>
                    <td className="px-2 py-1">若 <Math tex="0 < 2 < 5" />，则 <Math tex="\frac{1}{2} > \frac{1}{5}" /></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 同向可加性（补充） */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100">补充：同向不等式可以相加，但不能相减</div>
              <div className="px-3 py-1 space-y-0">
                <p><strong>可加：</strong>若 <Math tex="a > b" /> 且 <Math tex="c > d" />，则 <Math tex="a + c > b + d" />（同向相加，方向不变）</p>
                <p><strong>不可减（反例）：</strong><Math tex="5 > 3" /> 且 <Math tex="4 > 1" />，但 <Math tex="5 - 4 < 3 - 1" />，所以同向不等式<strong className="text-red-600">不能相减</strong></p>
              </div>
            </div>

            {/* 重点详解：乘负数翻转 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-red-700 border-b border-gray-400 bg-gray-100">重点详解：性质⑤ 乘负数方向翻转（高考最常考）</div>
              <div className="px-3 py-1 space-y-0">
                <p><strong>核心规则：</strong>不等式两边同时乘以（或除以）一个<strong>负数</strong>，不等号方向必须<strong>翻转</strong></p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p><strong>例1：</strong>解不等式 <Math tex="-3x > 12" /></p>
                    <p className="ml-4">两边除以 <Math tex="-3" />（负数！），方向翻转，得 <Math tex="x < -4" /></p>
                  </div>
                  <div>
                    <p><strong>例2：</strong><Math tex="6 > 2" />，两边除以 <Math tex="-2" /></p>
                    <p className="ml-4">得 <Math tex="-3 < -1" />（翻转了）</p>
                  </div>
                </div>
                <p className="text-red-700"><strong>易错：</strong><Math tex="-2x > 6" /> 得 <Math tex="x < -3" />，不是 <Math tex="x > -3" />。忘记翻转是最常见的丢分原因</p>
              </div>
            </div>

            {/* 重点详解：倒数法则 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100">重点详解：性质⑨ 倒数法则</div>
              <div className="px-3 py-1 space-y-0">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="font-bold text-green-700">同号取倒数：翻转</p>
                    <p>同正：<Math tex="0 < a < b" />，得 <Math tex="\frac{1}{a} > \frac{1}{b}" /></p>
                    <p>同负：<Math tex="a < b < 0" />，得 <Math tex="\frac{1}{a} > \frac{1}{b}" /></p>
                    <p>直觉：分母越大，分数越小</p>
                  </div>
                  <div>
                    <p className="font-bold">异号取倒数：不翻转</p>
                    <p><Math tex="a < 0 < b" />，得 <Math tex="\frac{1}{a} < \frac{1}{b}" /></p>
                    <p>直觉：负数的倒数还是负数，本来就小于正数的倒数</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 要不要全背 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100">九条性质要不要全背？——全部理解，重点熟练 4 条</div>
              <div className="px-3 py-1 space-y-0">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="font-bold text-red-700">必须熟练到"条件反射"（高考高频）</p>
                    <p><strong>⑤ 乘负数翻转</strong>：看到乘或除负数必须立刻想到翻转</p>
                    <p><strong>⑨ 倒数法则</strong>：分式不等式、抽象函数题常用</p>
                    <p><strong>③ 加法单调性</strong>：解不等式的基本功，移项就是它</p>
                    <p><strong>④ 乘正数</strong>：解不等式的基本功</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-bold text-green-700">理解即可，知道何时能用</p>
                    <p><strong>①对称性、②传递性</strong>：非常直觉，看一眼就会</p>
                    <p><strong>⑥ 同向可乘</strong>：需要"都是正数"，用时注意条件</p>
                    <p><strong>⑦可乘方、⑧可开方</strong>：需要"都是正数"，比较大小时偶尔用</p>
                  </div>
                </div>
                <div className="border-t border-gray-300 pt-1">
                  <p className="font-bold">记住两条核心原则就能推出大部分：</p>
                  <p>1. <strong>乘或除正数不变号，乘或除负数变号</strong>（④⑤的本质）</p>
                  <p>2. <strong>涉及乘方、开方、倒数时，必须先判断正负</strong>（⑥⑦⑧⑨都依赖这个）</p>
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak />
      {/* Section 2: 基本不等式 */}
      <section id="ineq-amgm" className="mb-0 scroll-mt-4">
        <Collapsible title="二、基本不等式" defaultOpen storageKey="ineq:amgm" headerExtra={<SpeakButton text={inequalityNarrations.basicInequality} />}>
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            {/* 1. 公式是什么 */}
            <div className="border border-purple-300 rounded overflow-hidden bg-purple-50">
              <div className="px-2 py-1 font-bold text-purple-700 border-b border-purple-300 bg-purple-100 text-[0.9rem]">基本不等式公式</div>
              <div className="px-3 py-2 space-y-2">
                <p className="text-xl text-center font-bold"><Math tex="a + b \geq 2\sqrt{ab}" />（前提：<Math tex="a > 0, \; b > 0" />）</p>
                <p className="text-center">读法：两个正数的<strong>和</strong>，永远大于等于它们<strong>积的2倍根号</strong></p>
                <p className="text-center">当 <Math tex="a = b" /> 时取等号，其他时候都是严格大于</p>
              </div>
            </div>

            {/* 公式推导 + 求最值三条件 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100 text-[0.9rem]">公式怎么来的（推导）</div>
              <div className="px-3 py-1 space-y-1">
                <p>任何数的平方都 <Math tex="\geq 0" />，所以 <Math tex="(\sqrt{a} - \sqrt{b})^2 \geq 0" /></p>
                <p>展开，得 <Math tex="a - 2\sqrt{ab} + b \geq 0" /></p>
                <p>移项，得 <Math tex="a + b \geq 2\sqrt{ab}" /></p>
                <p>当 <Math tex="\sqrt{a} = \sqrt{b}" />，即 <Math tex="a = b" /> 时取等号</p>
                <p><strong>含义</strong>：两个正数的和 <Math tex="a+b" />，一定大于等于 <Math tex="2\sqrt{ab}" />（即这两个数乘积的2倍根号）</p>
                <p>由于 <Math tex="a" /> 和 <Math tex="b" /> 是从 <Math tex="\sqrt{a}" /> 和 <Math tex="\sqrt{b}" /> 里推出来的，所以 <Math tex="a > 0, \; b > 0" /></p>
              </div>
              <div className="px-2 py-1 font-bold text-red-700 border-t border-b border-gray-400 bg-gray-100 text-[0.9rem]">用基本不等式求最值前，必须检查三个条件</div>
              <div className="grid grid-cols-[9fr_auto_8fr]">
                <div className="px-3 py-2 space-y-1">
                  <p><strong className="text-red-700">一正</strong>：参与运算的两个数必须都是<strong>正数</strong></p>
                  <p><strong className="text-red-700">二定</strong>：和或积中必须有一个是<strong>固定的数</strong>（不是变量）</p>
                  <p><strong className="text-red-700">三相等</strong>：<Math tex="a = b" /> 这个条件必须<strong>能取到</strong>（在定义域内）</p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="px-3 py-2 space-y-1">
                  <p><strong>和</strong> = 变量相加的结果，如 <Math tex="a+b" /></p>
                  <p><strong>积</strong> = 变量相乘的结果，如 <Math tex="ab" />、<Math tex="x \cdot \frac{k}{x}" /></p>
                  <p><strong>定值</strong> = 不随目标变量变化的量，如 <Math tex="a+b=4" /> 中的 4</p>
                </div>
              </div>
            </div>

            {/* 基本不等式有什么用 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100 text-[0.9rem]">基本不等式有什么用？</div>
              <div className="px-3 py-1 space-y-1">
                <p>高考中基本不等式的核心用途就是<strong>求最大值和最小值</strong>，比如：</p>
                <div className="grid grid-cols-[1fr_auto_1fr] text-center">
                  <p>已知 <Math tex="a^2 + b^2 = 1" />，求 <Math tex="ab" /> 的最大值</p>
                  <div className="w-px bg-gray-300 mx-3"></div>
                  <p>设 <Math tex="x > 2" />，求 <Math tex="2x + \dfrac{3}{2x - 4}" /> 的最小值</p>
                </div>
              </div>
            </div>

            {/* 基本不等式该咋用 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100 text-[0.9rem]">基本不等式该咋用？</div>
              <div className="px-3 py-1 space-y-1">
                <p>把公式看成一个<strong>模板</strong>：两个东西加起来，一定大于等于 2 倍根号下这两个东西相乘</p>
                <p className="text-center text-lg font-bold"><Math tex="\boxed{\phantom{x}} + \bigcirc \;\geq\; 2\sqrt{\boxed{\phantom{x}} \cdot \bigcirc}" /></p>
                <p>里面的东西随便填，只要满足<strong>非负</strong>的条件就行</p>
                <div className="grid grid-cols-[1fr_auto_1fr]">
                  <div className="text-center space-y-1">
                    <p><Math tex="\boxed{\phantom{x}}" /> 填 <Math tex="521x" />，<Math tex="\bigcirc" /> 填 <Math tex="1314y" /></p>
                    <p><Math tex="521x + 1314y \;\geq\; 2\sqrt{521x \cdot 1314y}" /></p>
                  </div>
                  <div className="w-px bg-gray-300 mx-3"></div>
                  <div className="text-center space-y-1">
                    <p><Math tex="\boxed{\phantom{x}}" /> 填 <Math tex="a+2b" />，<Math tex="\bigcirc" /> 填 <Math tex="3c+4d" /></p>
                    <p><Math tex="(a+2b)+(3c+4d) \;\geq\; 2\sqrt{(a+2b)(3c+4d)}" /></p>
                  </div>
                </div>
                <div className="grid grid-cols-[1fr_auto_1fr] border-t border-gray-300 pt-1">
                  <div className="space-y-1">
                    <p className="font-bold">已知正实数 <Math tex="a, b" /> 满足 <Math tex="ab = 2" />，求 <Math tex="2a + b" /> 的最小值</p>
                    <p className="text-center"><Math tex="\boxed{\phantom{x}} + \bigcirc \;\geq\; 2\sqrt{\boxed{\phantom{x}} \cdot \bigcirc}" /></p>
                    <p><strong>第一步</strong>：把 <Math tex="2a" /> 看成一个整体，<Math tex="b" /> 看成一个整体</p>
                    <p><strong>第二步</strong>：套公式 <Math tex="2a + b \geq 2\sqrt{2a \cdot b} = 2\sqrt{2ab}" /></p>
                    <p><strong>第三步</strong>：代入 <Math tex="ab=2" />，得 <Math tex="2a + b \geq 2\sqrt{4} = 4" /></p>
                    <p>因为 <Math tex="2a+b \geq 4" />，那它最小的时候不就是 4 吗，所以最小值为 <strong>4</strong></p>
                  </div>
                  <div className="w-px bg-gray-300 mx-3"></div>
                  <div className="space-y-1">
                    <p className="font-bold">已知正实数 <Math tex="a, b" /> 满足 <Math tex="2a + 3b = 6" />，求 <Math tex="ab" /> 的最大值</p>
                    <p className="text-center"><Math tex="\boxed{\phantom{x}} + \bigcirc \;\geq\; 2\sqrt{\boxed{\phantom{x}} \cdot \bigcirc}" /></p>
                    <p><strong>第一步</strong>：把 <Math tex="2a" /> 看成一个整体，<Math tex="3b" /> 看成一个整体</p>
                    <p><strong>第二步</strong>：套公式 <Math tex="2a + 3b \geq 2\sqrt{2a \cdot 3b} = 2\sqrt{6ab}" /></p>
                    <p><strong>第三步</strong>：代入 <Math tex="2a+3b=6" />，得 <Math tex="6 \geq 2\sqrt{6ab}" /></p>
                    <p><strong>第四步</strong>：化简解得 <Math tex="ab \leq \dfrac{3}{2}" />，所以最大值为 <Math tex="\dfrac{3}{2}" /></p>
                  </div>
                </div>
              </div>
            </div>

            <PracticeCard questions={amgmBasicFill} title="" explanations={inequalityExplanations} hideBlankLine />

            <div className="hidden print:block"><div style={{ breakBefore: 'page' }} /></div>

            {/* 基本不等式小变形应用 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100 text-[0.9rem]">基本不等式小变形应用 <span className="ml-2 font-normal text-gray-600"><Math tex="\boxed{\phantom{x}} + \bigcirc \;\geq\; 2\sqrt{\boxed{\phantom{x}} \cdot \bigcirc}" /></span></div>
              <div className="px-3 py-2 space-y-2">
                <div className="grid grid-cols-[1fr_auto_1fr]">
                  <div className="space-y-1">
                    <p className="font-bold">例1：已知正实数 <Math tex="a, b" /> 满足 <Math tex="a^2 + b^2 = 1" />，求 <Math tex="ab" /> 的最大值</p>
                    <p><strong>第一步</strong>：把 <Math tex="a^2" /> 看成一个整体，<Math tex="b^2" /> 看成一个整体</p>
                    <p><strong>第二步</strong>：套公式 <Math tex="a^2 + b^2 \geq 2\sqrt{a^2 \cdot b^2} = 2ab" /></p>
                    <p><strong>第三步</strong>：代入 <Math tex="a^2+b^2=1" />，得 <Math tex="1 \geq 2ab" /></p>
                    <p><strong>第四步</strong>：化简解得 <Math tex="ab \leq \dfrac{1}{2}" />，所以最大值为 <Math tex="\dfrac{1}{2}" /></p>
                    <p className="border-t border-dashed border-gray-300 pt-1"><strong>练一练</strong>：已知 <Math tex="a, b > 0" />，<Math tex="a^2 + b^2 = 4" />，求 <Math tex="ab" /> 的最大值 <Math tex="\underline{\phantom{00000000}}" /></p>
                  </div>
                  <div className="w-px bg-gray-300 mx-3"></div>
                  <div className="space-y-1">
                    <p className="font-bold">例2：已知正实数 <Math tex="a, b" /> 满足 <Math tex="ab = 4" />，求 <Math tex="\dfrac{1}{a} + \dfrac{9}{b}" /> 的最小值</p>
                    <p><strong>第一步</strong>：把 <Math tex="\dfrac{1}{a}" /> 看成一个整体，<Math tex="\dfrac{9}{b}" /> 看成一个整体</p>
                    <p><strong>第二步</strong>：套公式 <Math tex="\dfrac{1}{a} + \dfrac{9}{b} \geq 2\sqrt{\dfrac{1}{a} \cdot \dfrac{9}{b}} = 2\sqrt{\dfrac{9}{ab}}" /></p>
                    <p><strong>第三步</strong>：代入 <Math tex="ab=4" />，得 <Math tex="\dfrac{1}{a} + \dfrac{9}{b} \geq 2\sqrt{\dfrac{9}{4}} = 3" /></p>
                    <p>因为 <Math tex="\dfrac{1}{a} + \dfrac{9}{b} \geq 3" />，所以最小值为 <strong>3</strong></p>
                  </div>
                </div>
                <div className="border-t border-gray-300 pt-2 space-y-1">
                  <p className="font-bold">例3：已知正实数 <Math tex="a, b" /> 满足 <Math tex="ab = 2" />，求 <Math tex="(a+1)(b+2)" /> 的最小值</p>
                  <p><strong>读题</strong>：找不到可以直接看成整体的部分，但是看到 <Math tex="(a+1)(b+2)" /> 是个乘法，试试展开看看</p>
                  <div className="grid grid-cols-2 gap-4">
                    <p><strong>第一步</strong>：展开 <Math tex="(a+1)(b+2) = ab + 2a + b + 2" /></p>
                    <p><strong>第二步</strong>：代入 <Math tex="ab=2" />，得 <Math tex="2a + b + 4" /></p>
                  </div>
                  <p><strong>第三步</strong>：<Math tex="+4" /> 是常数先不管，把 <Math tex="2a" /> 看成一个整体，<Math tex="b" /> 看成一个整体</p>
                  <p><strong>第四步</strong>：套公式 <Math tex="2a + b \geq 2\sqrt{2a \cdot b} = 2\sqrt{2ab} = 2\sqrt{4} = 4" /></p>
                  <p><strong>第五步</strong>：因为 <Math tex="2a+b \geq 4" />，所以 <Math tex="2a+b" /> 的最小值为 4</p>
                  <p><strong>第六步</strong>：但题目求的是 <Math tex="2a+b+4" />，两边加上 4，得 <Math tex="(a+1)(b+2) = 2a+b+4 \geq 4+4 = 8" />，所以最小值为 <strong>8</strong></p>
                </div>
              </div>
            </div>

            <PracticeCard questions={amgmTransformFill} title="" explanations={inequalityExplanations} hideBlankLine />

            {/* 基本不等式逆向思维 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100 text-[0.9rem]">基本不等式逆向思维 <span className="ml-2 font-normal text-gray-600"><Math tex="\boxed{\phantom{x}} + \bigcirc \;\geq\; 2\sqrt{\boxed{\phantom{x}} \cdot \bigcirc}" /></span></div>
              <div className="px-3 py-2 space-y-1">
                <div className="grid grid-cols-[5fr_auto_4fr]">
                  <div className="space-y-1">
                    <p className="font-bold">已知正实数 <Math tex="a, b" /> 满足 <Math tex="(a+1)(b+2) = 16" />，求 <Math tex="a+b" /> 的最小值</p>
                    <p><strong>读题</strong>：题目给了积是定值 16，求的是 <Math tex="a+b" />。展开试试？</p>
                    <p>展开后有 <Math tex="ab" />、<Math tex="a" />、<Math tex="b" />，没法直接用。直接把 <Math tex="(a+1)" /> 和 <Math tex="(b+2)" /> 看成整体</p>
                    <p><strong>第一步</strong>：把 <Math tex="(a+1)" /> 看成一个整体，<Math tex="(b+2)" /> 看成一个整体</p>
                    <p><strong>第二步</strong>：套公式 <Math tex="(a+1) + (b+2) \geq 2\sqrt{(a+1)(b+2)}" /></p>
                    <p><strong>第三步</strong>：代入 <Math tex="(a+1)(b+2) = 16" />，得 <Math tex="a + b + 3 \geq 2\sqrt{16} = 8" /></p>
                    <p><strong>第四步</strong>：因为 <Math tex="a+b+3 \geq 8" />，所以 <Math tex="a+b \geq 8-3 = 5" /></p>
                    <p>因为 <Math tex="a+b \geq 5" />，所以 <Math tex="a+b" /> 的最小值为 <strong>5</strong></p>
                  </div>
                  <div className="w-px bg-gray-300 mx-3"></div>
                  <div className="space-y-1">
                    <p><strong>方法二：换元法（把复杂变简单）</strong></p>
                    <p>令 <Math tex="m = a+1" />，<Math tex="n = b+2" />，<Math tex="a = m-1" />，<Math tex="b = n-2" /></p>
                    <p>则 <Math tex="mn = (a+1)(b+2) = 16" /></p>
                    <p>因为 <Math tex="a+b = (m-1)+(n-2) = m+n-3" /></p>
                    <p>所以求 <Math tex="a+b" /> 就是求 <Math tex="m+n-3" /></p>
                    <p>套公式 <Math tex="m+n \geq 2\sqrt{mn} = 8" /></p>
                    <p>所以 <Math tex="m+n-3 \geq 8-3 = 5" /></p>
                    <p>最小值为 <strong>5</strong></p>
                  </div>
                </div>
              </div>
            </div>

            <PracticeCard questions={amgmReverseFill} title="" explanations={inequalityExplanations} hideBlankLine />

            {/* 什么是次 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-700 border-b border-gray-400 bg-gray-100 text-[0.9rem]">非齐次式——什么是"次"？</div>
              <div className="px-3 py-2 space-y-1">
                <p><strong>"次"</strong>就是单项式中所有变量的指数之和。例如：<Math tex="3x^2" /> 次数为 <strong>2</strong>，<Math tex="2abc^2" /> 次数为 <Math tex="1+1+2=" /><strong>4</strong>，<Math tex="\dfrac{1}{m^2} = m^{-2}" /> 次数为 <strong>-2</strong>，<Math tex="\dfrac{a}{b} = a^1 \cdot b^{-1}" /> 次数为 <Math tex="1+(-1)=" /><strong>0</strong></p>
                <p><strong>"齐次"</strong>就是每一项的次数都相同，<strong>"非齐次"</strong>就是各项次数不一样</p>
              </div>
            </div>

            <PageBreak />
            {/* 非齐次式 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-700 border-b border-gray-400 bg-gray-100 text-[0.9rem]">非齐次式（整式+分式结构）</div>
              <div className="px-3 py-2 space-y-2">
                <div className="grid grid-cols-3 gap-4">
                  <p className="font-bold">设 <Math tex="x > 0" />，求 <Math tex="x + \dfrac{3}{x}" /> 的最小值</p>
                  <p className="font-bold">设 <Math tex="x > 2" />，求 <Math tex="2x + \dfrac{3}{2x-4}" /> 的最小值</p>
                  <p className="font-bold">设 <Math tex="x > 2" />，求 <Math tex="3x + \dfrac{4}{x-2}" /> 的最小值</p>
                </div>
                <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-0">
                  <div className="space-y-1 pr-3">
                    <p><strong>读题</strong>：<Math tex="x" /> 是 1 次，<Math tex="\dfrac{3}{x}" /> 是 -1 次，非齐次</p>
                    <p><strong>第一步</strong>：把 <Math tex="x" /> 看成一个整体，</p>
                    <p><Math tex="\dfrac{3}{x}" /> 看成一个整体，套公式</p>
                    <p><Math tex="x + \dfrac{3}{x} \geq 2\sqrt{x \cdot \dfrac{3}{x}} = 2\sqrt{3}" /></p>
                    <p>因为 <Math tex="x + \dfrac{3}{x} \geq 2\sqrt{3}" />，所以最小值为 <Math tex="2\sqrt{3}" /></p>
                  </div>
                  <div className="w-px bg-gray-300"></div>
                  <div className="space-y-1 px-3">
                    <p><strong>读题</strong>：<Math tex="2x" /> 是 1 次，<Math tex="\dfrac{3}{2x-4}" /> 是 -1 次</p>
                    <p><strong>第一步</strong>：凑配，让分子和分母对应</p>
                    <p>常数 = <Math tex="2x - 1 \times (2x-4) = 4" /></p>
                    <p><Math tex="= (2x-4) + \dfrac{3}{2x-4} + 4" /></p>
                    <p><strong>第二步</strong>：套公式</p>
                    <p><Math tex="(2x-4) + \dfrac{3}{2x-4} \geq 2\sqrt{3}" /></p>
                    <p>最小值为 <Math tex="2\sqrt{3} + 4" /></p>
                  </div>
                  <div className="w-px bg-gray-300"></div>
                  <div className="space-y-1 pl-3">
                    <p><strong>读题</strong>：<Math tex="3x" /> 是 1 次，<Math tex="\dfrac{4}{x-2}" /> 是 -1 次</p>
                    <p><strong>第一步</strong>：凑配</p>
                    <p>常数 = <Math tex="3x - 3(x-2) = 6" /></p>
                    <p><Math tex="= 3(x-2) + \dfrac{4}{x-2} + 6" /></p>
                    <p><strong>第二步</strong>：套公式</p>
                    <p><Math tex="3(x-2) + \dfrac{4}{x-2} \geq 2\sqrt{12} = 4\sqrt{3}" /></p>
                    <p>最小值为 <Math tex="4\sqrt{3} + 6" /></p>
                  </div>
                </div>
              </div>
            </div>

            {/* 凑配速算法 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-700 border-b border-gray-400 bg-gray-100 text-[0.9rem]">凑配速算法</div>
              <div className="px-3 py-2">
                <div className="grid grid-cols-[5fr_auto_4fr]">
                  <div className="space-y-1">
                    <p>把整式凑成分母的倍数加常数</p>
                    <p><strong>第一步</strong>：整式的 <Math tex="x" /> 系数 <Math tex="\div" /> 分母的 <Math tex="x" /> 系数 = 倍数</p>
                    <p><strong>第二步</strong>：整式 <Math tex="-" /> 倍数 <Math tex="\times" /> 分母 = 常数</p>
                  </div>
                  <div className="w-px bg-gray-300 mx-3"></div>
                  <div className="space-y-1">
                    <p>例如 <Math tex="3x" /> 凑分母 <Math tex="x-2" />，倍数 = <Math tex="3 \div 1 = 3" /></p>
                    <p>常数 = <Math tex="3x - 3(x-2) = 3x - 3x + 6 = 6" /></p>
                    <p>所以 <Math tex="3x = 3(x-2) + 6" /></p>
                  </div>
                </div>
              </div>
            </div>

            <PracticeCard questions={amgmNonHomoFill} title="" explanations={inequalityExplanations} hideBlankLine columns={2} />

            {/* 分式化简型 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-700 border-b border-gray-400 bg-gray-100 text-[0.9rem]">非齐次式（分式化简型）</div>
              <div className="px-3 py-2">
                <div className="grid grid-cols-[1fr_auto_1fr] gap-0">
                  <div className="space-y-1 pr-3">
                    <p className="font-bold">设 <Math tex="x > 0" />，求 <Math tex="\dfrac{x^2 + 2x + 3}{x}" /> 的最小值</p>
                    <p><strong>读题</strong>：分子比分母次数高，先化简</p>
                    <p><strong>第一步</strong>：拆分</p>
                    <p><Math tex="= \dfrac{x^2}{x} + \dfrac{2x}{x} + \dfrac{3}{x} = x + 2 + \dfrac{3}{x}" /></p>
                    <p><strong>第二步</strong>：整理成可套公式的形式</p>
                    <p><Math tex="= x + \dfrac{3}{x} + 2" /></p>
                    <p><strong>第三步</strong>：套公式</p>
                    <p><Math tex="x + \dfrac{3}{x} \geq 2\sqrt{3}" /></p>
                    <p>所以 <Math tex="x + \dfrac{3}{x} + 2 \geq 2\sqrt{3} + 2" />，最小值为 <Math tex="2\sqrt{3} + 2" /></p>
                  </div>
                  <div className="w-px bg-gray-300"></div>
                  <div className="space-y-1 pl-3">
                    <p className="font-bold">设 <Math tex="t > 0" />，求 <Math tex="\dfrac{t^2 + 4t + 6}{t + 1}" /> 的最小值</p>
                    <p><strong>读题</strong>：分母是 <Math tex="t+1" />，不能直接逐项除</p>
                    <p><strong>第一步</strong>：换元，令 <Math tex="a = t+1" />，则 <Math tex="t = a-1" />，<Math tex="a > 1" /></p>
                    <p><strong>第二步</strong>：代入分子</p>
                    <p><Math tex="(a-1)^2 + 4(a-1) + 6 = a^2 + 2a + 3" /></p>
                    <p><strong>第三步</strong>：逐项除</p>
                    <p><Math tex="= \dfrac{a^2 + 2a + 3}{a} = a + 2 + \dfrac{3}{a}" /></p>
                    <p><strong>第四步</strong>：套公式</p>
                    <p><Math tex="a + \dfrac{3}{a} \geq 2\sqrt{3}" /></p>
                    <p>所以最小值为 <Math tex="2\sqrt{3} + 2" /></p>
                  </div>
                </div>
                <div className="border-t border-gray-300 pt-2 mt-2 space-y-1">
                  <p className="font-bold">例3：设 <Math tex="a, b > 0" />，求 <Math tex="\left(\dfrac{2}{a}+b\right)\left(2a+\dfrac{1}{b}\right)" /> 的最小值</p>
                  <div className="grid grid-cols-[1fr_auto_1fr] gap-0">
                    <div className="space-y-1 pr-3">
                      <p><strong>方法一：展开后套公式</strong></p>
                      <p><strong>第一步</strong>：展开</p>
                      <p className="ml-4"><Math tex="\dfrac{2}{a} \cdot 2a + \dfrac{2}{a} \cdot \dfrac{1}{b} + b \cdot 2a + b \cdot \dfrac{1}{b}" /></p>
                      <p className="ml-4"><Math tex="= 4 + \dfrac{2}{ab} + 2ab + 1 = 5 + 2ab + \dfrac{2}{ab}" /></p>
                      <p><strong>第二步</strong>：把 <Math tex="2ab" /> 和 <Math tex="\dfrac{2}{ab}" /> 看成整体，套公式</p>
                      <p className="ml-4"><Math tex="2ab + \dfrac{2}{ab} \geq 2\sqrt{2ab \cdot \dfrac{2}{ab}} = 2\sqrt{4} = 4" /></p>
                      <p><strong>第三步</strong>：所以原式 <Math tex="\geq 5 + 4 = 9" />，最小值为 <strong>9</strong></p>
                    </div>
                    <div className="w-px bg-gray-300"></div>
                    <div className="space-y-1 pl-3">
                      <p><strong>方法二：柯西不等式</strong></p>
                      <p>柯西不等式：<Math tex="(A_1+A_2)(B_1+B_2) \geq (\sqrt{A_1 B_1}+\sqrt{A_2 B_2})^2" /></p>
                      <p>令 <Math tex="A_1=\dfrac{2}{a}" />，<Math tex="A_2=b" />，<Math tex="B_1=2a" />，<Math tex="B_2=\dfrac{1}{b}" /></p>
                      <p>直接套公式：</p>
                      <p className="ml-4"><Math tex="\left(\dfrac{2}{a}+b\right)\!\left(2a+\dfrac{1}{b}\right) \geq \left(\sqrt{\dfrac{2}{a} \cdot 2a}+\sqrt{b \cdot \dfrac{1}{b}}\right)^{\!2}" /></p>
                      <p className="ml-4"><Math tex="= (\sqrt{4}+\sqrt{1})^2 = (2+1)^2 = 9" /></p>
                      <p>最小值为 <strong>9</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <PageBreak />
            {/* 齐次式（分式+分式结构） */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-700 border-b border-gray-400 bg-gray-100 text-[0.9rem]">齐次式（分式+分式结构）</div>
              <div className="px-3 py-2">
                <div className="grid grid-cols-[1fr_auto_1fr] gap-0">
                  <div className="space-y-1 pr-3">
                    <p className="font-bold">设 <Math tex="a, b > 0" />，求 <Math tex="\dfrac{2a}{b} + \dfrac{b}{a}" /> 的最小值</p>
                    <p><strong>读题</strong>：<Math tex="\dfrac{2a}{b}" /> 是 0 次，<Math tex="\dfrac{b}{a}" /> 也是 0 次，齐次式 直接套公式</p>
                    <p><strong>第一步</strong>：把 <Math tex="\dfrac{2a}{b}" /> 看成一个整体，<Math tex="\dfrac{b}{a}" /> 看成一个整体，套公式</p>
                    <p className="ml-4"><Math tex="\dfrac{2a}{b} + \dfrac{b}{a} \geq 2\sqrt{\dfrac{2a}{b} \cdot \dfrac{b}{a}} = 2\sqrt{2}" /></p>
                    <p>所以最小值为 <Math tex="2\sqrt{2}" /></p>
                    <p><strong>验证取等</strong>：<Math tex="\dfrac{2a}{b} = \dfrac{b}{a}" />，得 <Math tex="b = \sqrt{2}\,a" />，满足 <Math tex="a, b > 0" /> ✓</p>
                  </div>
                  <div className="w-px bg-gray-300"></div>
                  <div className="space-y-1 pl-3">
                    <p className="font-bold">设 <Math tex="a, b > 0" />，求 <Math tex="\dfrac{4a^2 - 5ab + 2b^2}{2ab}" /> 的最小值</p>
                    <p><strong>读题</strong>：分子是 2 次，分母也是 2 次，齐次式，先拆分化简</p>
                    <p><strong>第一步</strong>：逐项除</p>
                    <p className="ml-4"><Math tex="= \dfrac{4a^2}{2ab} - \dfrac{5ab}{2ab} + \dfrac{2b^2}{2ab} = \dfrac{2a}{b} + \dfrac{b}{a} - \dfrac{5}{2}" /></p>
                    <p><strong>第二步</strong>：套公式，由左边例题知 <Math tex="\dfrac{2a}{b} + \dfrac{b}{a} \geq 2\sqrt{2}" /></p>
                    <p>所以原式 <Math tex="\geq 2\sqrt{2} - \dfrac{5}{2}" />，最小值为 <Math tex="2\sqrt{2} - \dfrac{5}{2}" /></p>
                    <p><strong>验证取等</strong>：同左，<Math tex="b = \sqrt{2}\,a" /> 时取等 ✓</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 不齐次咋办 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-700 border-b border-gray-400 bg-gray-100 text-[0.9rem]">不齐次咋办？——用条件齐次化</div>
              <div className="px-3 py-2">
                <div className="grid grid-cols-[1fr_auto_1fr] gap-0">
                  <div className="space-y-1 pr-3">
                    <p className="font-bold">设 <Math tex="a, b > 0" /> 且 <Math tex="a+b=1" />，求 <Math tex="\dfrac{a+2b}{ab}" /> 的最小值</p>
                    <p><strong>读题</strong>：分子是 1 次，分母是 2 次，不齐次，没法直接逐项除出 0 次分式。但 <Math tex="a+b=1" />，乘上去等于乘 1，值不变，分子升一次变成 2 次就齐次了</p>
                    <p><strong>第一步</strong>：齐次化——把 <Math tex="a+b=1" /> 乘到分子上</p>
                    <p className="ml-4"><Math tex="\dfrac{(a+2b) \times (a+b)}{ab} = \dfrac{a^2 + 3ab + 2b^2}{ab}" /></p>
                    <p><strong>第二步</strong>：逐项除</p>
                    <p className="ml-4"><Math tex="= \dfrac{a}{b} + 3 + \dfrac{2b}{a}" /></p>
                    <p><strong>第三步</strong>：套公式 <Math tex="\dfrac{a}{b} + \dfrac{2b}{a} \geq 2\sqrt{2}" /></p>
                    <p>所以原式 <Math tex="\geq 3 + 2\sqrt{2}" />，最小值为 <Math tex="3 + 2\sqrt{2}" /></p>
                  </div>
                  <div className="w-px bg-gray-300"></div>
                  <div className="space-y-1 pl-3">
                    <p className="font-bold">设 <Math tex="a, b > 0" /> 且 <Math tex="a+b=2" />，求 <Math tex="\dfrac{a^2+2b}{ab}" /> 的最小值</p>
                    <p><strong>读题</strong>：分子里 <Math tex="a^2" /> 是 2 次，<Math tex="2b" /> 是 1 次，不齐次。把常数 2 用 <Math tex="a+b" /> 代入就齐次了</p>
                    <p><strong>第一步</strong>：齐次化——把 <Math tex="2b" /> 中的 2 换成 <Math tex="a+b" /></p>
                    <p className="ml-4"><Math tex="a^2 + 2b = a^2 + (a+b)b = a^2 + ab + b^2" /></p>
                    <p><strong>第二步</strong>：逐项除</p>
                    <p className="ml-4"><Math tex="\dfrac{a^2 + ab + b^2}{ab} = \dfrac{a}{b} + 1 + \dfrac{b}{a}" /></p>
                    <p><strong>第三步</strong>：套公式 <Math tex="\dfrac{a}{b} + \dfrac{b}{a} \geq 2" /></p>
                    <p>所以原式 <Math tex="\geq 1 + 2 = 3" />，最小值为 <strong>3</strong></p>
                    <p><strong>验证取等</strong>：<Math tex="a = b = 1" /> 时，<Math tex="\dfrac{1+2}{1} = 3" /> ✓</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 实战演练 */}
            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-700 border-b border-purple-300 bg-purple-100 text-[0.9rem]">实战演练</div>
              <div className="px-3 py-2">
                <div className="grid grid-cols-[1fr_auto_1fr] gap-0">
                  <div className="space-y-1 pr-3">
                    <p className="font-bold">已知 <Math tex="a > 0, b > 0" />，<Math tex="2a + b = 1" />，求 <Math tex="\frac{1}{a} + \frac{1}{b}" /> 的最小值</p>
                    <p><strong>读题</strong>：<Math tex="\frac{1}{a}" /> 是 -1 次，<Math tex="\frac{1}{b}" /> 是 -1 次，齐次但积不是常数，把 1 用 <Math tex="2a+b" /> 代入</p>
                    <p><strong>第一步</strong>：齐次化</p>
                    <p className="ml-4"><Math tex="\frac{1}{a} = \frac{2a+b}{a} = 2 + \frac{b}{a}" />，<Math tex="\frac{1}{b} = \frac{2a+b}{b} = \frac{2a}{b} + 1" /></p>
                    <p><strong>第二步</strong>：合起来</p>
                    <p className="ml-4"><Math tex="= 3 + \frac{b}{a} + \frac{2a}{b}" /></p>
                    <p><strong>第三步</strong>：套公式 <Math tex="\frac{b}{a} + \frac{2a}{b} \geq 2\sqrt{2}" /></p>
                    <p className="ml-4">所以 <Math tex="\frac{1}{a}+\frac{1}{b} \geq 3 + 2\sqrt{2}" /></p>
                    <p><strong>验证取等</strong>：<Math tex="b=\sqrt{2}\,a" />，代入 <Math tex="2a+b=1" /> 可解出 <Math tex="a, b > 0" /> ✓</p>
                  </div>
                  <div className="w-px bg-gray-300"></div>
                  <div className="space-y-1 pl-3">
                    <p className="font-bold">已知 <Math tex="1 < x < 3" />，求 <Math tex="(x-1)(3-x)" /> 的最大值</p>
                    <p><strong>读题</strong>：两个式子相乘，算和 <Math tex="(x-1)+(3-x)=2" />，和是定值</p>
                    <p><strong>第一步</strong>：套公式</p>
                    <p className="ml-4"><Math tex="(x-1) + (3-x) \geq 2\sqrt{(x-1)(3-x)}" /></p>
                    <p><strong>第二步</strong>：代入和 = 2</p>
                    <p className="ml-4"><Math tex="2 \geq 2\sqrt{(x-1)(3-x)}" /></p>
                    <p><strong>第三步</strong>：两边平方再除以 4</p>
                    <p className="ml-4"><Math tex="(x-1)(3-x) \leq 1" />，最大值为 <strong>1</strong></p>
                    <p><strong>验证取等</strong>：<Math tex="x-1 = 3-x" />，解得 <Math tex="x = 2" /> ✓</p>
                  </div>
                </div>
              </div>
            </div>

            <PracticeCard questions={amgmHomoFill} title="" explanations={inequalityExplanations} hideBlankLine />

          </div>
        </Collapsible>
      </section>

      {/* Section 3: 柯西不等式 */}
      <section id="ineq-cauchy" className="mb-0 scroll-mt-4">
        <Collapsible title="三、柯西不等式" defaultOpen storageKey="ineq:cauchy">
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            {/* 公式 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-700 border-b border-gray-400 bg-gray-100 text-[0.9rem]">柯西不等式（Cauchy-Schwarz）</div>
              <div className="px-3 py-2">
                <div className="flex gap-3">
                  <div className="flex-1 space-y-1">
                    <p><strong>公式</strong>：设 <Math tex="a, b, c, d" /> 为实数，则</p>
                    <p className="text-center"><Math tex="(a^2 + b^2)(c^2 + d^2) \geq (ac + bd)^2" /></p>
                    <p><strong>取等条件</strong>：<Math tex="\dfrac{a}{c} = \dfrac{b}{d}" />（即对应成比例）</p>
                    <p className="border-t border-gray-300 pt-1"><strong>常用变形</strong>：设 <Math tex="a, b > 0" />，则</p>
                    <p className="text-center"><Math tex="\dfrac{x^2}{a} + \dfrac{y^2}{b} \geq \dfrac{(x+y)^2}{a+b}" /></p>
                    <p><strong>取等条件</strong>：<Math tex="\dfrac{x}{a} = \dfrac{y}{b}" /></p>
                  </div>
                  <div className="flex flex-col items-center justify-center shrink-0">
                    <p className="text-[0.8rem] text-gray-500 mb-1"><strong>快速记忆</strong></p>
                    <img src="/images/cauchy-meme.jpg" alt="柯西不等式记忆图" className="rounded" style={{ maxHeight: '140px' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* 例题：原始形式 */}
            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-700 border-b border-purple-300 bg-purple-50 text-[0.9rem]">实战演练——原始形式</div>
              <div className="px-3 py-2 space-y-1">
                <p className="font-bold">已知 <Math tex="a^2+b^2=1" />，求 <Math tex="3a+4b" /> 的最大值</p>
                <p><strong>读题</strong>：左边是平方和，右边是一次式，直接套原始公式</p>
                <p><strong>第一步</strong>：凑出柯西不等式的形式</p>
                <p className="ml-4"><Math tex="(a^2+b^2)(3^2+4^2) \geq (3a+4b)^2" /></p>
                <p><strong>第二步</strong>：代入 <Math tex="a^2+b^2=1" /></p>
                <p className="ml-4"><Math tex="(3a+4b)^2 \leq 25" />，开方得 <Math tex="-5 \leq 3a+4b \leq 5" /></p>
                <p>所以最大值为 <strong>5</strong>，最小值为 <strong>-5</strong></p>
                <p><strong>验证取等</strong>：<Math tex="\dfrac{a}{3} = \dfrac{b}{4}" />，即 <Math tex="a = \dfrac{3}{5}, \; b = \dfrac{4}{5}" />，代入 <Math tex="a^2+b^2 = \dfrac{9}{25}+\dfrac{16}{25} = 1" /> ✓</p>
              </div>
            </div>

            {/* 例题：变形形式 */}
            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-700 border-b border-purple-300 bg-purple-50 text-[0.9rem]">实战演练——变形形式：看到"已知和，求分式之和"就套</div>
              <div className="px-3 py-2">
                <div className="grid grid-cols-[1fr_auto_1fr] gap-0">
                  <div className="space-y-1 pr-3">
                    <p className="font-bold">设 <Math tex="a,b>0" />，<Math tex="a+b=1" />，求 <Math tex="\dfrac{1}{a}+\dfrac{2}{b}" /> 的最小值</p>
                    <p><strong>读题</strong>：已知 <Math tex="a+b" /> 的和，求的是分式之和，套柯西变形</p>
                    <p><strong>第一步</strong>：把每一项写成 <Math tex="\dfrac{\text{某}^2}{\text{分母}}" /> 的形式</p>
                    <p className="ml-4"><Math tex="\dfrac{1}{a} = \dfrac{1^2}{a}" />，<Math tex="\dfrac{2}{b} = \dfrac{(\sqrt{2})^2}{b}" /></p>
                    <p><strong>第二步</strong>：套公式，分子开根加起来平方，分母加起来</p>
                    <p className="ml-4"><Math tex="\dfrac{1^2}{a}+\dfrac{(\sqrt{2})^2}{b} \geq \dfrac{(1+\sqrt{2})^2}{a+b}" /></p>
                    <p><strong>第三步</strong>：代入 <Math tex="a+b=1" /></p>
                    <p className="ml-4"><Math tex="\dfrac{1}{a}+\dfrac{2}{b} \geq \dfrac{(1+\sqrt{2})^2}{1} = 3+2\sqrt{2}" /></p>
                    <p>所以最小值为 <Math tex="3+2\sqrt{2}" /></p>
                    <p><strong>验证取等</strong>：<Math tex="\dfrac{1}{a} = \dfrac{\sqrt{2}}{b}" />，即 <Math tex="b = \sqrt{2}\,a" />，代入可解 ✓</p>
                  </div>
                  <div className="w-px bg-gray-300"></div>
                  <div className="space-y-1 pl-3">
                    <p className="font-bold">设 <Math tex="a,b>0" />，<Math tex="a+b=3" />，求 <Math tex="\dfrac{1}{a}+\dfrac{1}{b}" /> 的最小值</p>
                    <p><strong>读题</strong>：已知 <Math tex="a+b" /> 的和，求的是分式之和，套柯西变形</p>
                    <p><strong>第一步</strong>：写成标准形式</p>
                    <p className="ml-4"><Math tex="\dfrac{1}{a} = \dfrac{1^2}{a}" />，<Math tex="\dfrac{1}{b} = \dfrac{1^2}{b}" /></p>
                    <p><strong>第二步</strong>：套公式</p>
                    <p className="ml-4"><Math tex="\dfrac{1^2}{a}+\dfrac{1^2}{b} \geq \dfrac{(1+1)^2}{a+b}" /></p>
                    <p><strong>第三步</strong>：代入 <Math tex="a+b=3" /></p>
                    <p className="ml-4"><Math tex="\dfrac{1}{a}+\dfrac{1}{b} \geq \dfrac{4}{3}" /></p>
                    <p>所以最小值为 <Math tex="\dfrac{4}{3}" /></p>
                    <p><strong>验证取等</strong>：<Math tex="\dfrac{1}{a} = \dfrac{1}{b}" />，即 <Math tex="a = b = \dfrac{3}{2}" /> ✓</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 总结表格 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-700 border-b border-gray-400 bg-gray-100 text-[0.9rem]">选哪个工具？——一张表搞定</div>
              <div className="px-3 py-2">
                <table className="w-full text-center border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-2 py-1">已知条件</th>
                      <th className="border border-gray-300 px-2 py-1">求什么</th>
                      <th className="border border-gray-300 px-2 py-1">能用什么</th>
                      <th className="border border-gray-300 px-2 py-1">推荐</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1">平方和 = 常数</td>
                      <td className="border border-gray-300 px-2 py-1">一次式的最值</td>
                      <td className="border border-gray-300 px-2 py-1">柯西</td>
                      <td className="border border-gray-300 px-2 py-1 font-bold text-purple-700">柯西（原始）</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1">和 = 常数</td>
                      <td className="border border-gray-300 px-2 py-1">分式之和的最小值</td>
                      <td className="border border-gray-300 px-2 py-1">柯西 / AM-GM</td>
                      <td className="border border-gray-300 px-2 py-1 font-bold text-purple-700">柯西（变形）更快</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1">和 = 常数</td>
                      <td className="border border-gray-300 px-2 py-1">乘积的最大值</td>
                      <td className="border border-gray-300 px-2 py-1">AM-GM</td>
                      <td className="border border-gray-300 px-2 py-1 font-bold text-blue-700">AM-GM</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1">积 = 常数</td>
                      <td className="border border-gray-300 px-2 py-1">和的最小值</td>
                      <td className="border border-gray-300 px-2 py-1">AM-GM</td>
                      <td className="border border-gray-300 px-2 py-1 font-bold text-blue-700">AM-GM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* Section 4: 均值不等式链 */}
      <section id="ineq-mean" className="mb-0 scroll-mt-4">
        <Collapsible title="四、均值不等式链" defaultOpen storageKey="ineq:mean">
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            {/* 公式 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-700 border-b border-gray-400 bg-gray-100 text-[0.9rem]">四大平均数的大小关系</div>
              <div className="px-3 py-2 space-y-1">
                <p>设 <Math tex="a, b > 0" />，定义四种平均数：</p>
                <table className="w-full text-center border-collapse my-1">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-2 py-1">名称</th>
                      <th className="border border-gray-300 px-2 py-1">公式</th>
                      <th className="border border-gray-300 px-2 py-1">记号</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1">调和平均</td>
                      <td className="border border-gray-300 px-2 py-1"><Math tex="\dfrac{2}{\frac{1}{a}+\frac{1}{b}} = \dfrac{2ab}{a+b}" /></td>
                      <td className="border border-gray-300 px-2 py-1 font-bold">HM</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1">几何平均</td>
                      <td className="border border-gray-300 px-2 py-1"><Math tex="\sqrt{ab}" /></td>
                      <td className="border border-gray-300 px-2 py-1 font-bold">GM</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1">算术平均</td>
                      <td className="border border-gray-300 px-2 py-1"><Math tex="\dfrac{a+b}{2}" /></td>
                      <td className="border border-gray-300 px-2 py-1 font-bold">AM</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1">平方平均</td>
                      <td className="border border-gray-300 px-2 py-1"><Math tex="\sqrt{\dfrac{a^2+b^2}{2}}" /></td>
                      <td className="border border-gray-300 px-2 py-1 font-bold">QM</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-center text-lg font-bold"><Math tex="\text{HM} \leq \text{GM} \leq \text{AM} \leq \text{QM}" /></p>
                <p className="text-center">即 <Math tex="\dfrac{2ab}{a+b} \leq \sqrt{ab} \leq \dfrac{a+b}{2} \leq \sqrt{\dfrac{a^2+b^2}{2}}" /></p>
                <p><strong>取等条件</strong>：<Math tex="a = b" /> 时所有等号同时成立</p>
                <p className="border-t border-gray-300 pt-1"><strong>和基本不等式的关系</strong>：基本不等式 <Math tex="a+b \geq 2\sqrt{ab}" /> 就是链中的 <strong>GM ≤ AM</strong> 这一段</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* 打印模式答案区 */}
      {isPrinting && printOptions.showAnswers && <InequalityAnswers />}

        </div>
    </LessonLayout>
  </div>
);
} 
