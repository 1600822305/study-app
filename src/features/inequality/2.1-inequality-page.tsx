import { Math, QuizPanel, Collapsible, SpeakButton, PageHeader, LessonLayout, ExportButton, PageBreak, PracticeCard } from '@/components/shared';
import { inequalityNarrations } from './data/2.1/2.1-narrations';
import { useProgress, usePrintMode } from '@/hooks';
import { scrollToId } from '@/lib/scroll';
import { inequalityQuizQuestions } from './data/2.1/2.1-quiz';
import { inequalityProgressItems } from './data/2.1/2.1-progress';
import { InequalityAnswers, inequalityExplanations } from './2.1-inequality-answers';
import { amgmPractice } from './data/2.1/2.1-practice';

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
        tags={[
          { label: '高考5-10分', color: 'blue' },
          { label: '约1小时', color: 'purple' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="2.1 不等式" />
      </div>

      {/* 知识地图 */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 mb-0">
        <p className="font-bold text-gray-800 mb-2">📋 知识地图</p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-gray-900">
          <button onClick={() => scrollToId('ineq-props')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">一、不等式性质</button>
          <button onClick={() => scrollToId('ineq-amgm')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">二、基本不等式</button>
          <button onClick={() => scrollToId('ineq-quadratic')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">三、一元二次不等式</button>
          <button onClick={() => scrollToId('ineq-quiz')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">四、综合测试</button>
        </div>
      </div>

      <LessonLayout progressItems={items} onToggle={toggle}>

      {/* Section 1: 不等式的性质 */}
      <section id="ineq-props" className="mb-6 scroll-mt-4">
        <Collapsible title="一、不等式的性质" defaultOpen storageKey="ineq:props" headerExtra={<SpeakButton text={inequalityNarrations.properties} />}>
          <div className="space-y-0 text-lg text-gray-800">

            {/* 比较大小的方法 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-blue-300 bg-blue-100 text-lg">比较大小的方法</div>
              <div className="px-3 py-2 space-y-1">
                <div>
                  <p className="font-bold text-purple-700">作差法（最常用）</p>
                  <p><Math tex="a - b > 0" /> 则 <Math tex="a > b" />；<Math tex="a - b = 0" /> 则 <Math tex="a = b" />；<Math tex="a - b < 0" /> 则 <Math tex="a < b" /></p>
                  <p className="text-gray-900">例：比较 <Math tex="a^2 + 1" /> 和 <Math tex="2a" /> 的大小</p>
                  <p className="text-gray-900 ml-4"><Math tex="(a^2 + 1) - 2a = a^2 - 2a + 1 = (a-1)^2 \geq 0" />，所以 <Math tex="a^2 + 1 \geq 2a" /></p>
                </div>
                <div>
                  <p className="font-bold text-purple-700">作商法（正数时用）</p>
                  <p>当 <Math tex="b > 0" /> 时：<Math tex="\frac{a}{b} > 1" /> 则 <Math tex="a > b" />；<Math tex="\frac{a}{b} = 1" /> 则 <Math tex="a = b" />；<Math tex="\frac{a}{b} < 1" /> 则 <Math tex="a < b" /></p>
                </div>
              </div>
            </div>

            {/* 性质①-④：加减与传递 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100 text-lg">基本性质（上）：加减与传递</div>
              <div className="px-3 py-2 space-y-1">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-bold text-green-700">① 对称性</p>
                    <p>若 <Math tex="a > b" />，则 <Math tex="b < a" /></p>
                  </div>
                  <div>
                    <p className="font-bold text-green-700">② 传递性</p>
                    <p>若 <Math tex="a > b" /> 且 <Math tex="b > c" />，则 <Math tex="a > c" /></p>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-1">
                  <p className="font-bold text-green-700">③ 加法单调性（方向不变）</p>
                  <p>若 <Math tex="a > b" />，则 <Math tex="a + c > b + c" />（两边加同一个数，方向不变）</p>
                  <p className="text-gray-900">例：<Math tex="5 > 3" />，两边加 −10，得 <Math tex="-5 > -7" /> ✓</p>
                </div>
                <div className="border-t border-gray-200 pt-1">
                  <p className="font-bold text-green-700">④ 同向可加性</p>
                  <p>若 <Math tex="a > b" /> 且 <Math tex="c > d" />，则 <Math tex="a + c > b + d" /></p>
                  <p className="text-red-600">⚠️ 注意：同向不等式<strong>不能相减</strong>！</p>
                </div>
              </div>
            </div>

            {/* 例题：性质①-④的应用 */}
            <div className="border border-purple-300 rounded overflow-hidden bg-purple-50">
              <div className="px-2 py-1 font-bold text-purple-700 border-b border-purple-300 bg-purple-100 text-lg">例题：性质①-④的应用</div>
              <div className="px-3 py-2 space-y-2">
                <div>
                  <p className="font-bold">例1：已知 <Math tex="a > b" />，比较 <Math tex="a + 3" /> 和 <Math tex="b + 3" /> 的大小</p>
                  <p className="text-gray-900 ml-4">由性质③，两边加 3，方向不变，所以 <Math tex="a + 3 > b + 3" /></p>
                </div>
                <div>
                  <p className="font-bold">例2：已知 <Math tex="a > b" />，<Math tex="c > d" />，证明 <Math tex="a + c > b + d" /></p>
                  <p className="text-gray-900 ml-4">由性质③：<Math tex="a > b" /> 两边加 c 得 <Math tex="a + c > b + c" /></p>
                  <p className="text-gray-900 ml-4">由性质③：<Math tex="c > d" /> 两边加 b 得 <Math tex="b + c > b + d" /></p>
                  <p className="text-gray-900 ml-4">由性质②传递性：<Math tex="a + c > b + d" /></p>
                </div>
                <div>
                  <p className="font-bold">例3（反例）：<Math tex="5 > 3" /> 且 <Math tex="4 > 1" />，能得出 <Math tex="5 - 4 > 3 - 1" /> 吗？</p>
                  <p className="text-gray-900 ml-4"><Math tex="5 - 4 = 1" />，<Math tex="3 - 1 = 2" />，实际 <Math tex="1 < 2" />，所以<strong className="text-red-600">同向不等式不能相减</strong></p>
                </div>
              </div>
            </div>

            <PageBreak />

            {/* 性质⑤-⑧：乘除与倒数 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100 text-lg">基本性质（下）：乘除与倒数</div>
              <div className="px-3 py-2 space-y-1">
                <div>
                  <p className="font-bold">⑤ 乘正数（方向不变）</p>
                  <p>若 <Math tex="a > b" /> 且 <Math tex="c > 0" />，则 <Math tex="ac > bc" /></p>
                  <p className="text-gray-900">例：<Math tex="5 > 3" />，两边乘 2，得 <Math tex="10 > 6" /> ✓</p>
                </div>
                <div className="border-t border-gray-200 pt-1 bg-red-50 -mx-3 px-3">
                  <p className="font-bold text-red-700">⑥ 乘负数（方向翻转）⭐最重要</p>
                  <p>若 <Math tex="a > b" /> 且 <Math tex="c < 0" />，则 <Math tex="ac < bc" /></p>
                  <p className="text-gray-900">例：<Math tex="5 > 3" />，两边乘 −1，得 <Math tex="-5 < -3" /> <span className="text-red-600 font-bold">翻转！</span></p>
                  <p className="text-gray-900">例：<Math tex="6 > 2" />，两边除以 −2，得 <Math tex="-3 < -1" /> <span className="text-red-600 font-bold">翻转！</span></p>
                </div>
                <div className="border-t border-gray-200 pt-1">
                  <p className="font-bold">⑦ 乘方性质</p>
                  <p>若 <Math tex="a > b > 0" />，则 <Math tex="a^n > b^n" />（n为正整数）</p>
                  <p className="text-gray-900">例：<Math tex="3 > 2 > 0" />，所以 <Math tex="3^2 > 2^2" />，即 <Math tex="9 > 4" /></p>
                </div>
                <div className="border-t border-gray-200 pt-1">
                  <p className="font-bold">⑧ 取倒数规则</p>
                  <div className="grid grid-cols-2 gap-2 mt-1">
                    <div>
                      <p className="font-bold text-red-600">同号：翻转</p>
                      <p>同正：<Math tex="a > b > 0" /> 得 <Math tex="\frac{1}{a} < \frac{1}{b}" /></p>
                      <p>同负：<Math tex="a < b < 0" /> 得 <Math tex="\frac{1}{a} > \frac{1}{b}" /></p>
                    </div>
                    <div>
                      <p className="font-bold">异号：不翻转</p>
                      <p><Math tex="a < 0 < b" /> 得 <Math tex="\frac{1}{a} < \frac{1}{b}" /></p>
                      <p className="text-gray-900">（负数倒数还是负，本来就小）</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 例题：性质⑤-⑧的应用 */}
            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-700 border-b border-gray-300 bg-gray-100 text-lg">例题：性质⑤-⑧的应用</div>
              <div className="px-3 py-2 space-y-1">
                <div>
                  <p className="font-bold">例4：解不等式 <Math tex="-3x > 12" /></p>
                  <p className="text-gray-900 ml-4">两边除以 −3（负数！），方向翻转：<Math tex="x < -4" /></p>
                </div>
                <div>
                  <p className="font-bold">例5：已知 <Math tex="0 < 2 < 5" />，比较 <Math tex="\frac{1}{2}" /> 和 <Math tex="\frac{1}{5}" /></p>
                  <p className="ml-4">同正取倒数，大小翻转：<Math tex="\frac{1}{2} = 0.5" />，<Math tex="\frac{1}{5} = 0.2" />，所以 <Math tex="\frac{1}{2} > \frac{1}{5}" /></p>
                  <p className="ml-4">规律：分母越大，分数越小</p>
                </div>
                <div>
                  <p className="font-bold">例6：已知 <Math tex="a > b > 0" />，比较 <Math tex="a^2 - b^2" /> 和 0</p>
                  <p className="text-gray-900 ml-4">由性质⑦：<Math tex="a^2 > b^2" />，所以 <Math tex="a^2 - b^2 > 0" /></p>
                </div>
              </div>
            </div>

            {/* 易错点 */}
            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-red-700 border-b border-gray-300 bg-gray-100">高考易错点</div>
              <div className="px-3 py-2 space-y-1">
                <p><strong>错误1</strong>：忘记乘负数变号。<Math tex="-2x > 6" /> 得 <Math tex="x < -3" />，不是 <Math tex="x > -3" /></p>
                <p><strong>错误2</strong>：异号取倒数搞错。<Math tex="a < 0 < b" /> 取倒数后仍是 <Math tex="\frac{1}{a} < \frac{1}{b}" />，方向不变</p>
                <p><strong>错误3</strong>：同正才能用乘方性质。<Math tex="a > b" /> 不能直接得 <Math tex="a^2 > b^2" />，必须确认 <Math tex="a > b > 0" /></p>
              </div>
            </div>

            {/* 综合例题 */}
            <p className="font-bold text-xl mt-2">综合例题（性质①-⑧验证）</p>
            <p className="font-bold text-xl mt-1">已知 <Math tex="a > b > 0" />，<Math tex="c < d < 0" />，判断下列各式是否成立并说明理由：</p>
            <p className="text-lg text-gray-900">① <Math tex="a + c > b + d" />，不一定成立。<Math tex="a > b" /> 但 <Math tex="c < d" />，异向不能直接加（性质④只能同向加）</p>
            <p className="text-lg text-gray-900 border-t border-gray-200 pt-1">② <Math tex="ac < bd" />，成立。<Math tex="a > b > 0" /> 且 <Math tex="c < d < 0" />，由性质⑥两边乘负数翻转：<Math tex="ac < bc" />，同理 <Math tex="bc < bd" />，传递得 <Math tex="ac < bd" /></p>
            <p className="text-lg text-gray-900 border-t border-gray-200 pt-1">③ <Math tex="\frac{1}{a} + \frac{1}{d} < \frac{1}{b} + \frac{1}{c}" />，成立。同正取倒数翻转 <Math tex="\frac{1}{a} < \frac{1}{b}" />，同负取倒数翻转 <Math tex="\frac{1}{d} < \frac{1}{c}" />，同向相加（性质④）</p>
            <p className="text-lg text-gray-900 border-t border-gray-200 pt-1">④ <Math tex="a^2 > b^2" /> 且 <Math tex="c^2 > d^2" />，成立。<Math tex="a > b > 0" /> 由性质⑦得 <Math tex="a^2 > b^2" />；<Math tex="c < d < 0" /> 即 <Math tex="|c| > |d| > 0" />，同理 <Math tex="c^2 > d^2" /></p>
            <p className="text-lg text-gray-900 border-t border-gray-200 pt-1">⑤ <Math tex="a + c > 0" />，不一定成立。<Math tex="a > 0" /> 但 <Math tex="c < 0" />，若 <Math tex="|c| > a" /> 则和为负。例如 <Math tex="a=2, c=-5" /> 得 <Math tex="-3 < 0" /></p>

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* Section 2: 基本不等式 */}
      <section id="ineq-amgm" className="mb-6 scroll-mt-4">
        <Collapsible title="二、基本不等式" defaultOpen storageKey="ineq:amgm" headerExtra={<SpeakButton text={inequalityNarrations.basicInequality} />}>
          <div className="space-y-0 text-lg text-gray-800">

            {/* 1. 公式是什么 */}
            <div className="border border-purple-300 rounded overflow-hidden bg-purple-50">
              <div className="px-2 py-1 font-bold text-purple-700 border-b border-purple-300 bg-purple-100 text-lg">基本不等式公式</div>
              <div className="px-3 py-2 space-y-2">
                <p className="text-xl text-center font-bold"><Math tex="a + b \geq 2\sqrt{ab}" />（前提：<Math tex="a > 0, \; b > 0" />）</p>
                <p className="text-center">读法：两个正数的<strong>和</strong>，永远大于等于它们<strong>积的2倍根号</strong></p>
                <p className="text-center">当 <Math tex="a = b" /> 时取等号，其他时候都是严格大于</p>
              </div>
            </div>

            {/* 2. 用数字感受 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100 text-lg">用数字感受一下</div>
              <div className="px-3 py-2 space-y-2">
                <div className="grid grid-cols-2 gap-3">
                  <div className="border border-gray-200 rounded p-2">
                    <p className="font-bold">取 <Math tex="a = 1, \; b = 9" /></p>
                    <p className="ml-4">左边（和）：<Math tex="1 + 9 = 10" /></p>
                    <p className="ml-4">右边：<Math tex="2\sqrt{9} = 6" /></p>
                    <p className="ml-4">结果：<Math tex="10 \geq 6" /> ✓</p>
                  </div>
                  <div className="border border-gray-200 rounded p-2">
                    <p className="font-bold">取 <Math tex="a = 4, \; b = 4" />（相等）</p>
                    <p className="ml-4">左边（和）：<Math tex="4 + 4 = 8" /></p>
                    <p className="ml-4">右边：<Math tex="2\sqrt{16} = 8" /></p>
                    <p className="ml-4">结果：<Math tex="8 = 8" /> ✓ 取等号了！</p>
                  </div>
                </div>
                <p><strong>规律：a 和 b 不相等时，和严格大于右边；a = b 时取等号。两个正数越接近，和就越小</strong></p>
              </div>
            </div>

            {/* 3. 公式怎么来的 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100 text-lg">公式怎么来的（推导）</div>
              <div className="px-3 py-2 space-y-1">
                <p>我们知道任何数的平方都 <Math tex="\geq 0" />，比如 <Math tex="3^2 = 9 \geq 0" />，<Math tex="(-5)^2 = 25 \geq 0" />，<Math tex="0^2 = 0 \geq 0" /></p>
                <p>我们的目标是证明 <Math tex="a + b \geq 2\sqrt{ab}" />，右边有 <Math tex="\sqrt{a}" /> 和 <Math tex="\sqrt{b}" /></p>
                <p>所以我们<strong>倒推</strong>：什么东西展开后能出现 <Math tex="a" />、<Math tex="b" />、<Math tex="\sqrt{ab}" />？答案就是 <Math tex="(\sqrt{a} - \sqrt{b})^2" /></p>
                <p>因为它的平方也一定 <Math tex="\geq 0" />：</p>
                <p className="ml-4"><Math tex="(\sqrt{a} - \sqrt{b})^2 \geq 0" /></p>
                <p>展开这个平方（用公式 <Math tex="(x-y)^2 = x^2 - 2xy + y^2" />）：</p>
                <p className="ml-4"><Math tex="a - 2\sqrt{ab} + b \geq 0" /></p>
                <p>把 <Math tex="2\sqrt{ab}" /> 移到右边：</p>
                <p className="ml-4"><Math tex="a + b \geq 2\sqrt{ab}" /></p>
                <p>什么时候取等号？当 <Math tex="(\sqrt{a} - \sqrt{b})^2 = 0" /> 时</p>
                <p className="ml-4">什么数的平方等于 0？只有 0 本身。所以 <Math tex="\sqrt{a} - \sqrt{b} = 0" />，即 <Math tex="\sqrt{a} = \sqrt{b}" />，两边平方得 <Math tex="a = b" /></p>
              </div>
            </div>

            {/* 公式变形速查 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100 text-lg">5个变形速查（从原式 <Math tex="a + b \geq 2\sqrt{ab}" /> 推导）</div>
              <div className="px-3 py-1">
                <div className="grid grid-cols-2 gap-2">
                  <div className="border border-gray-200 rounded p-2">
                    <p className="font-bold">变形1：<Math tex="\frac{a+b}{2} \geq \sqrt{ab}" /></p>
                    <p>用途：知道 <Math tex="ab" />，求 <Math tex="a+b" /> 最小值</p>
                  </div>
                  <div className="border border-gray-200 rounded p-2">
                    <p className="font-bold">变形2：<Math tex="a^2 + b^2 \geq 2ab" /></p>
                    <p>用途：知道 <Math tex="a^2+b^2" />，求 <Math tex="ab" /> 最大值</p>
                  </div>
                  <div className="border border-gray-200 rounded p-2">
                    <p className="font-bold">变形3：<Math tex="ab \leq \left(\frac{a+b}{2}\right)^2" /></p>
                    <p>用途：知道 <Math tex="a+b" />，求 <Math tex="ab" /> 最大值</p>
                  </div>
                  <div className="border border-gray-200 rounded p-2">
                    <p className="font-bold">变形4：<Math tex="\frac{1}{a} + \frac{1}{b} \geq \frac{4}{a+b}" /></p>
                    <p>用途：知道 <Math tex="a+b" />，求 <Math tex="\frac{1}{a}+\frac{1}{b}" /> 最小值</p>
                  </div>
                </div>
                <div className="border border-gray-200 rounded p-2 mt-2 mb-1">
                  <p className="font-bold">变形5（高考最常考）：<Math tex="x + \frac{k}{x} \geq 2\sqrt{k}" />（<Math tex="x > 0, k > 0" />）</p>
                  <p>用途：求 <Math tex="x + \frac{k}{x}" /> 形式的最小值</p>
                </div>
              </div>
            </div>

            <PageBreak />

            {/* 求最值三条件 */}
            <div className="border border-red-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-red-700 border-b border-red-300 bg-red-100 text-lg">用基本不等式求最值前，必须检查三个条件</div>
              <div className="grid grid-cols-[6fr_auto_4fr]">
                <div className="px-3 py-2 space-y-1">
                  <p><strong className="text-red-700">一正</strong>：参与运算的两个数必须都是<strong>正数</strong></p>
                  <p><strong className="text-red-700">二定</strong>：和或积中必须有一个是<strong>固定的数</strong>（不是变量）</p>
                  <p><strong className="text-red-700">三相等</strong>：<Math tex="a = b" /> 这个条件必须<strong>能取到</strong>（在定义域内）</p>
                  <p>三个条件缺一不可！</p>
                </div>
                <div className="w-px bg-red-200"></div>
                <div className="px-3 py-2 space-y-1">
                  <p className="font-bold">名词解释：</p>
                  <p><strong>和</strong> = 变量相加的结果，如 <Math tex="a+b" /></p>
                  <p><strong>积</strong> = 变量相乘的结果，如 <Math tex="ab" />、<Math tex="x \cdot \frac{k}{x}" /></p>
                  <p><strong>定值</strong> = 不随目标变量变化的量，如 <Math tex="a+b=4" /> 中的 4，<Math tex="ab=k" /> 中的 <Math tex="k" /></p>
                </div>
              </div>
            </div>

            {/* 变形1+2详解（整体卡片+分割线） */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div className="px-2 py-2 space-y-1">
                  <p className="font-bold text-blue-700">变形1：<Math tex="\frac{a+b}{2} \geq \sqrt{ab}" /></p>
                  <p className="font-bold">变形（从原式出发）：</p>
                  <p>第1步，原式：<Math tex="a + b \geq 2\sqrt{ab}" /></p>
                  <p>第2步，两边除以2：<Math tex="\frac{a+b}{2} \geq \sqrt{ab}" /></p>
                  <p>左边叫<strong>算术平均数</strong>，右边叫<strong>几何平均数</strong></p>
                  <p><strong>用途</strong>：知道 <Math tex="ab" />，求 <Math tex="a+b" /> 的最小值</p>
                  <p className="font-bold mt-2">例题：</p>
                  <p><Math tex="a, b > 0" />，<Math tex="ab = 9" />，求 <Math tex="a + b" /> 最小值</p>
                  <p><Math tex="\frac{a+b}{2} \geq \sqrt{9} = 3" />，所以 <Math tex="a + b \geq 6" /></p>
                  <p><Math tex="a = b = 3" /> 时取等 ✓，最小值为 <strong>6</strong></p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="px-2 py-2 space-y-1">
                  <p className="font-bold text-blue-700">变形2：<Math tex="a^2 + b^2 \geq 2ab" /></p>
                  <p className="font-bold">变形（从原式出发）：</p>
                  <p>第1步，原式：<Math tex="a + b \geq 2\sqrt{ab}" /></p>
                  <p>第2步，两边平方：<Math tex="(a+b)^2 \geq 4ab" /></p>
                  <p>第3步，展开左边：<Math tex="a^2 + 2ab + b^2 \geq 4ab" /></p>
                  <p>第4步，移项：<Math tex="a^2 + b^2 \geq 2ab" /></p>
                  <p>对<strong>任意实数</strong>都成立</p>
                  <p><strong>用途</strong>：知道 <Math tex="a^2+b^2" />，求 <Math tex="ab" /> 的最大值</p>
                  <p className="font-bold mt-2">例题：</p>
                  <p><Math tex="a^2 + b^2 = 10" />，求 <Math tex="ab" /> 最大值</p>
                  <p><Math tex="10 \geq 2ab" />，即 <Math tex="ab \leq 5" /></p>
                  <p><Math tex="a = b" /> 时取等 ✓，最大值为 <strong>5</strong></p>
                </div>
              </div>
            </div>

            {/* 变形3+4详解（左右布局） */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div className="px-2 py-2 space-y-1">
                  <p className="font-bold text-blue-700">变形3：<Math tex="ab \leq \left(\frac{a+b}{2}\right)^2" /></p>
                  <p className="font-bold">变形（从原式出发）：</p>
                  <p>第1步，原式：<Math tex="a + b \geq 2\sqrt{ab}" /></p>
                  <p>第2步，两边平方：<Math tex="(a+b)^2 \geq 4ab" /></p>
                  <p>第3步，两边除以4：<Math tex="\frac{(a+b)^2}{4} \geq ab" /></p>
                  <p>第4步，左右交换：<Math tex="ab \leq \frac{(a+b)^2}{4}" /></p>
                  <p><strong>用途</strong>：知道 <Math tex="a+b" />，求 <Math tex="ab" /> 的最大值</p>
                  <p className="font-bold mt-2">例题：</p>
                  <p>两个正数 <Math tex="a, b" /> 满足 <Math tex="a + b = 10" />，求 <Math tex="ab" /> 的最大值</p>
                  <p>检查：一正 ✓，和 = 10 是定值 ✓</p>
                  <p>由公式：<Math tex="ab \leq \left(\frac{10}{2}\right)^2 = 25" /></p>
                  <p>当 <Math tex="a = b = 5" /> 时取等 ✓，最大值为 <strong>25</strong></p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="px-2 py-2 space-y-1">
                  <p className="font-bold text-blue-700">变形4：<Math tex="\frac{1}{a} + \frac{1}{b} \geq \frac{4}{a+b}" /></p>
                  <p className="font-bold">变形（从变形3继续）：</p>
                  <p>第1步，变形3：<Math tex="ab \leq \frac{(a+b)^2}{4}" /></p>
                  <p>第2步，两边取倒数（方向反转）：<Math tex="\frac{1}{ab} \geq \frac{4}{(a+b)^2}" /></p>
                  <p>第3步，两边乘 <Math tex="(a+b)" />：<Math tex="\frac{a+b}{ab} \geq \frac{4}{a+b}" /></p>
                  <p>第4步，<Math tex="\frac{a+b}{ab}" /> 拆开就是 <Math tex="\frac{a}{ab} + \frac{b}{ab} = \frac{1}{a} + \frac{1}{b}" /></p>
                  <p>所以：<Math tex="\frac{1}{a} + \frac{1}{b} \geq \frac{4}{a+b}" /></p>
                  <p><strong>用途</strong>：知道 <Math tex="a+b" />，求 <Math tex="\frac{1}{a}+\frac{1}{b}" /> 的最小值</p>
                  <p className="font-bold mt-2">例题：</p>
                  <p>已知 <Math tex="a, b > 0" />，<Math tex="a + b = 4" />，求 <Math tex="\frac{1}{a} + \frac{1}{b}" /> 的最小值</p>
                  <p>检查：一正 ✓，和 = 4 是定值 ✓</p>
                  <p>直接套公式：<Math tex="\frac{1}{a} + \frac{1}{b} \geq \frac{4}{4} = 1" /></p>
                  <p>当 <Math tex="a = b = 2" /> 时取等 ✓，最小值为 <strong>1</strong></p>
                </div>
              </div>
            </div>

            {/* 倒数知识补充 */}
            <div className="border-l-4 border-orange-400 pl-3 py-1">
              <p className="font-bold text-orange-700">为什么取倒数时不等号要反转？</p>
              <p><strong>倒数</strong>就是 1 除以这个数。比如 3 的倒数是 <Math tex="\frac{1}{3}" />，<Math tex="ab" /> 的倒数是 <Math tex="\frac{1}{ab}" /></p>
              <p><strong>为什么变号？</strong>举个例子：<Math tex="2 < 3" />，但是 <Math tex="\frac{1}{2} > \frac{1}{3}" />（半个比三分之一大）</p>
              <p>规律：两个<strong>正数</strong>，大的数倒数反而小，所以取倒数时不等号方向要反过来</p>
            </div>

            <PageBreak />

            {/* 变形5详解 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100 text-lg">变形5：<Math tex="x + \frac{k}{x} \geq 2\sqrt{k}" />（高考最常考）</div>
              <div className="px-3 py-2 space-y-1">
                <p className="font-bold">变形（从原式出发）：</p>
                <p>第1步，原式：<Math tex="a + b \geq 2\sqrt{ab}" /></p>
                <p>第2步，令 <Math tex="a = x" />，<Math tex="b = \frac{k}{x}" />（其中 <Math tex="x > 0, k > 0" />）</p>
                <p>第3步，代入原式：<Math tex="x + \frac{k}{x} \geq 2\sqrt{x \cdot \frac{k}{x}}" /></p>
                <p>第4步，化简根号内：<Math tex="x \cdot \frac{k}{x} = k" /></p>
                <p>第5步，得到：<Math tex="x + \frac{k}{x} \geq 2\sqrt{k}" /></p>
                <p><strong>用途</strong>：求 <Math tex="x + \frac{k}{x}" /> 形式的最小值（<Math tex="x > 0, k > 0" />）</p>
                <p className="font-bold mt-2">例题1（直接套）：</p>
                <p>已知 <Math tex="x > 0" />，求 <Math tex="x + \frac{9}{x}" /> 的最小值。这里 <Math tex="k = 9" />，直接套：<Math tex="x + \frac{9}{x} \geq 2\sqrt{9} = 6" /></p>
                <p>当 <Math tex="x = 3" /> 时取等，最小值为 <strong>6</strong></p>
                <p className="font-bold mt-2">例题2（需要配凑）：</p>
                <p>已知 <Math tex="x > 3" />，求 <Math tex="x + \frac{4}{x - 3}" /> 的最小值</p>
                <p>第1步，发现 <Math tex="x" /> 和 <Math tex="\frac{4}{x-3}" /> 乘起来不是定值，不能直接用</p>
                <p>第2步，把 <Math tex="x" /> 拆成 <Math tex="(x-3) + 3" /></p>
                <p>第3步，原式 <Math tex="= (x-3) + \frac{4}{x-3} + 3" /></p>
                <p>第4步，现在 <Math tex="(x-3) \cdot \frac{4}{x-3} = 4" /> 是定值了</p>
                <p>第5步，<Math tex="(x-3) + \frac{4}{x-3} \geq 2\sqrt{4} = 4" /></p>
                <p>第6步，所以原式 <Math tex="\geq 4 + 3 = 7" />，当 <Math tex="x = 5" /> 时取等，最小值为 <strong>7</strong></p>
              </div>
            </div>

            {/* 只记一个公式 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-blue-300 bg-blue-100 text-lg">只需要记一个公式，只有两种情况</div>
              <div className="px-3 py-2 space-y-2">
                <p className="text-center text-xl"><Math tex="a + b \geq 2\sqrt{ab}" /></p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="border border-green-200 rounded p-2 bg-green-50 text-center">
                    <p className="font-bold text-green-700">情况1：积是定值，求和</p>
                    <p className="mt-1">题目告诉你 <Math tex="ab = k" /></p>
                    <p><strong>只能求 <Math tex="a+b" /> 的最小值</strong></p>
                    <p>（<Math tex="a+b" /> 没有最大值，<Math tex="a" /> 可以无限大）</p>
                    <p className="mt-1">直接套：<Math tex="a+b \geq 2\sqrt{k}" /></p>
                  </div>
                  <div className="border border-red-200 rounded p-2 bg-red-50 text-center">
                    <p className="font-bold text-red-700">情况2：和是定值，求积</p>
                    <p className="mt-1">题目告诉你 <Math tex="a+b = S" /></p>
                    <p><strong>只能求 <Math tex="ab" /> 的最大值</strong></p>
                    <p>（<Math tex="ab" /> 没有最小值，<Math tex="a" /> 趋近0积就趋近0）</p>
                    <p className="mt-1">变形一下：<Math tex="ab \leq \left(\frac{S}{2}\right)^2" /></p>
                  </div>
                </div>
                <p className="text-center"><strong>其他变形题都是先配凑成这两种情况之一，再套公式</strong></p>
                <div className="grid grid-cols-2 gap-3 mt-1">
                  <div className="border border-gray-200 rounded p-2">
                    <p className="font-bold">例：<Math tex="ab = 4" />，求 <Math tex="a+b" /> 最小值</p>
                    <p><Math tex="ab" /> 是定值，套情况1：<Math tex="a+b \geq 2\sqrt{4} = 4" /></p>
                    <p><Math tex="a=b=2" /> 取等，最小值 <strong>4</strong></p>
                  </div>
                  <div className="border border-gray-200 rounded p-2">
                    <p className="font-bold">例：<Math tex="a+b = 6" />，求 <Math tex="ab" /> 最大值</p>
                    <p><Math tex="a+b" /> 是定值，套情况2：<Math tex="ab \leq \left(\frac{6}{2}\right)^2 = 9" /></p>
                    <p><Math tex="a=b=3" /> 取等，最大值 <strong>9</strong></p>
                  </div>
                </div>
                <div className="border border-orange-200 rounded p-2 bg-orange-50 col-span-2">
                  <p className="font-bold text-orange-700">高考不会这么直接！真题长这样：</p>
                  <p>已知 <Math tex="a > 0, b > 0" />，<Math tex="2a + b = 1" />，求 <Math tex="\frac{1}{a} + \frac{1}{b}" /> 的最小值</p>
                  <p>看起来完全不像上面两种情况，但本质还是<strong>配凑成"积是定值"或"和是定值"</strong></p>

                </div>
              </div>
            </div>

            <PageBreak />

            {/* 解题8步流程 */}
            <div className="border border-green-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-700 border-b border-green-400 bg-green-100 text-lg">高考实战：解题8步流程</div>
              <div className="px-3 py-2 space-y-1">
                <p><strong>第1步 读题审题</strong>：圈出已知条件、目标函数（求谁的最值）、变量范围（是否为正）</p>
                <p><strong>第2步 明确目标</strong>：判断是求最大值还是最小值，以及目标函数的形式（和、积、倒数和、平方和等）</p>
                <p><strong>第3步 挖掘定值</strong>：寻找或构造定值关系（<Math tex="a+b" /> 定值 / <Math tex="ab" /> 定值 / 其他线性组合定值）</p>
                <p><strong>第4步 检查前提</strong>：验证"一正、二定、三相等"是否满足，不满足则考虑配凑或换元</p>
                <p><strong>第5步 匹配变形</strong>：根据目标函数和定值形式，选择对应的基本不等式变形</p>
                <p><strong>第6步 配凑构造</strong>：若原式不满足公式形式，通过加减常数、拆项、乘除定值等方式配凑</p>
                <p><strong>第7步 代入计算</strong>：代入公式计算最值，注意不等号方向与最值类型的对应</p>
                <p><strong>第8步 验证取等</strong>：写出等号成立条件，验证是否在定义域内，确认等号能取到</p>
              </div>
            </div>

            {/* 8步实战演练 */}
            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-700 border-b border-purple-300 bg-purple-100 text-lg">8步实战演练</div>
              <div className="px-3 py-2 space-y-1">
                <p className="font-bold text-lg">题目：已知 <Math tex="a, b > 0" />，<Math tex="ab = 9" />，求 <Math tex="a + b" /> 的最小值</p>
                <p><strong>第1步 读题审题</strong>：求「和」的最小值，而「积」是定值 9，属于「积定求和最小值」，应该能直接套公式</p>
                <p><strong>第2步 明确目标</strong>：题目说"求 <Math tex="a+b" /> 的最小值"，所以目标函数就是 <Math tex="a+b" />，它是两个变量相加，属于<strong>和</strong>的形式，我们要求它的<strong>最小值</strong></p>
                <p><strong>第3步 挖掘定值</strong>：题目给了 <Math tex="ab = 9" />，<strong>积是定值</strong></p>
                <p><strong>第4步 检查前提</strong>：一正（<Math tex="a,b>0" /> ✓），二定（和或积有一个是定值，这里 <Math tex="ab=9" /> ✓），三相等（<Math tex="a=b=3" /> 时 <Math tex="ab=9" /> 成立，说明等号能取到 ✓）</p>
                <p><strong>第5步 匹配变形</strong>：积是定值，求和的最小值，直接用原式 <Math tex="a+b \geq 2\sqrt{ab}" /></p>
                <p><strong>第7步 代入计算</strong>：<Math tex="a+b \geq 2\sqrt{9} = 2 \times 3 = 6" /></p>
                <p><strong>第8步 验证取等</strong>：<Math tex="a = b" /> 时取等，即 <Math tex="a = b = 3" />（满足 <Math tex="ab = 9" /> ✓，在定义域内 ✓）</p>
                <p className="font-bold">答：<Math tex="a + b" /> 的最小值为 <strong>6</strong></p>

                <hr className="border-gray-300 my-3" />

                <p className="font-bold text-lg">题目2：已知 <Math tex="x > 3" />，求 <Math tex="x + \frac{4}{x-3}" /> 的最小值</p>
                <p><strong>第1步 读题审题</strong>：求「和」的最小值，但分母是 <Math tex="x-3" /> 不是 <Math tex="x" />，积不是定值，需配凑统一变量</p>
                <p><strong>第2步 明确目标</strong>：题目说"求最小值"，目标函数是 <Math tex="x + \frac{4}{x-3}" />，看起来像<strong>和</strong>的形式</p>
                <p><strong>第3步 挖掘定值</strong>：<Math tex="x" /> 和 <Math tex="\frac{4}{x-3}" /> 乘起来 <Math tex="= \frac{4x}{x-3}" />，<strong>不是定值</strong>，不能直接套</p>
                <p><strong>第4步 检查前提</strong>：一正（<Math tex="x>3" /> ✓），二定（积不是定值 ✗），需要<strong>配凑</strong></p>
                <p><strong>第5步 匹配变形</strong>：目标是凑成 <Math tex="\text{某东西} + \frac{4}{\text{某东西}}" /> 的形式，让积变成定值</p>
                <p><strong>第6步 配凑构造</strong>：把 <Math tex="x" /> 拆成 <Math tex="(x-3)+3" />，原式 <Math tex="= (x-3) + \frac{4}{x-3} + 3" />，现在 <Math tex="(x-3) \cdot \frac{4}{x-3} = 4" /> 是定值了</p>
                <p><strong>第7步 代入计算</strong>：套公式 <Math tex="a+b \geq 2\sqrt{ab}" />，得 <Math tex="(x-3) + \frac{4}{x-3} \geq 2\sqrt{4} = 4" /></p>
                <p className="ml-8">公式只管 <Math tex="(x-3) + \frac{4}{x-3}" /> 这部分，但原式还有 +3，所以原式 <Math tex="\geq 4 + 3 = 7" /></p>
                <p><strong>第8步 验证取等</strong>：<Math tex="x-3 = \frac{4}{x-3}" />，即 <Math tex="x-3=2" />，<Math tex="x=5" />（满足 <Math tex="x>3" /> ✓）</p>
                <p className="font-bold">答：最小值为 <strong>7</strong></p>
              </div>
            </div>

            <PageBreak />

            {/* 8步实战演练 题目3 */}
            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-700 border-b border-purple-300 bg-purple-100 text-lg">8步实战演练（续）</div>
              <div className="px-3 py-2 space-y-1">
                <p className="font-bold text-lg">题目3（高考风格）：已知 <Math tex="a > 0, b > 0" />，<Math tex="2a + b = 1" />，求 <Math tex="\frac{1}{a} + \frac{1}{b}" /> 的最小值</p>
                <p><strong>第1步 读题审题</strong>：求「倒数和」的最小值，条件是「和」定值，形式不匹配，需要想办法把条件塞进目标函数</p>
                <p><strong>第2步 明确目标</strong>：求最小值，目标函数是 <Math tex="\frac{1}{a}+\frac{1}{b}" />，是<strong>倒数和</strong>的形式</p>
                <p><strong>第3步 挖掘定值</strong>：题目给了 <Math tex="2a+b=1" />，和是定值，但目标函数是倒数和，不能直接套</p>
                <p><strong>第4步 检查前提</strong>：一正（<Math tex="a,b>0" /> ✓），二定（<Math tex="2a+b=1" /> ✓），但目标函数和条件形式不匹配，需要<strong>配凑</strong></p>
                <p><strong>第5步 匹配变形</strong>：想办法把 <Math tex="2a+b=1" /> 这个条件"塞进"目标函数里</p>
                <p><strong>第6步 配凑构造</strong>：用"乘1法"——因为 <Math tex="2a+b=1" />，所以乘以它等于乘以1，值不变：</p>
                <p className="ml-8"><Math tex="\frac{1}{a}+\frac{1}{b} = \left(\frac{1}{a}+\frac{1}{b}\right) \cdot 1 = \left(\frac{1}{a}+\frac{1}{b}\right)(2a+b)" /></p>
                <p className="ml-8">展开 <Math tex="2 + \frac{b}{a} + \frac{2a}{b} + 1 = 3 + \frac{b}{a} + \frac{2a}{b}" /> —— 现在 <Math tex="\frac{b}{a} \cdot \frac{2a}{b} = 2" /> 是定值了！</p>
                <p><strong>第7步 代入计算</strong>：套公式 <Math tex="a+b \geq 2\sqrt{ab}" />，得 <Math tex="\frac{b}{a}+\frac{2a}{b} \geq 2\sqrt{2}" /></p>
                <p className="ml-8">所以 <Math tex="\frac{1}{a}+\frac{1}{b} = 3 + \frac{b}{a}+\frac{2a}{b} \geq 3 + 2\sqrt{2}" /></p>
                <p><strong>第8步 验证取等</strong>：取等条件 <Math tex="\frac{b}{a}=\frac{2a}{b}" />，交叉相乘得 <Math tex="b^2=2a^2" />，即 <Math tex="b=\sqrt{2}\,a" /></p>
                <p className="ml-8">把 <Math tex="b=\sqrt{2}\,a" /> 代入 <Math tex="2a+b=1" />，得 <Math tex="2a+\sqrt{2}\,a=1" />，提公因式 <Math tex="(2+\sqrt{2})a=1" /></p>
                <p className="ml-8"><Math tex="a=\frac{1}{2+\sqrt{2}}" />，代入 <Math tex="b=\sqrt{2}\,a = \sqrt{2} \times \frac{1}{2+\sqrt{2}} = \frac{\sqrt{2}}{2+\sqrt{2}}" /></p>
                <p className="ml-8"><Math tex="a>0, b>0" /> ✓，等号能取到</p>
                <p className="font-bold">答：最小值为 <Math tex="3 + 2\sqrt{2}" /></p>

                <hr className="border-gray-300 my-3" />

                <p className="font-bold text-lg">题目4（求最大值）：已知 <Math tex="1 < x < 3" />，求 <Math tex="(x-1)(3-x)" /> 的最大值</p>
                <p><strong>第1步 读题审题</strong>：题目要我们求 <Math tex="(x-1)(3-x)" /> 的最大值，两个式子相乘的形式。算两个式子的和：<Math tex="(x-1)+(3-x)=2" />，消掉 <Math tex="x" />，得到固定的数 2</p>
                <p><strong>第2步 明确目标</strong>：求最大值，目标函数是 <Math tex="(x-1)(3-x)" />，是<strong>积</strong>的形式</p>
                <p><strong>第3步 挖掘定值</strong>：设 <Math tex="a = x-1" />，<Math tex="b = 3-x" />，则 <Math tex="a + b = (x-1)+(3-x) = 2" />，<strong>和是定值</strong></p>
                <p><strong>第4步 检查前提</strong>：一正（<Math tex="1 < x < 3" /> 所以 <Math tex="a=x-1>0" />，<Math tex="b=3-x>0" /> ✓），二定（<Math tex="a+b=2" /> 是定值 ✓）。代入验证：取 <Math tex="x=2" /> 时 <Math tex="a=1,b=1" />，<Math tex="ab=1" /> ✓</p>
                <p><strong>第5步 匹配变形</strong>：和定求积最大值，套 <Math tex="a + b \geq 2\sqrt{ab}" /></p>
                <p><strong>第7步 代入计算</strong>：把 <Math tex="a+b=2" /> 代入 <Math tex="a+b \geq 2\sqrt{ab}" />，得 <Math tex="2 \geq 2\sqrt{ab}" />，两边平方得 <Math tex="4 \geq 4ab" />，两边除以 4 得 <Math tex="ab \leq 1" /></p>
                <p className="ml-8">所以 <Math tex="(x-1)(3-x) = ab \leq 1" />，最大值为 <strong>1</strong></p>
                <p><strong>第8步 验证取等</strong>：<Math tex="a = b" /> 时取等，即 <Math tex="x-1 = 3-x" />，解得 <Math tex="x = 2" />，满足 <Math tex="1 < x < 3" /> ✓</p>
                <p className="font-bold">答：最大值为 <strong>1</strong></p>

                <hr className="border-gray-300 my-1" />
                <p className="font-bold text-lg">总结：所有基本不等式的题，本质就两件事</p>
                <p>① 判断是「积定求和最小值」还是「和定求积最大值」</p>
                <p>② 如果不能直接套，就<strong>配凑</strong>（拆项、乘1法）让它变成能套的形式</p>
              </div>
            </div>

            <PracticeCard questions={amgmPractice} title="✏️ 即时训练 — 基本不等式（6 题）" optionCols={4} printOptionCols={4} explanations={inequalityExplanations} />
          </div>
        </Collapsible>
      </section>

      {/* Section 4: 一元二次不等式（简短回顾） */}
      <section id="ineq-quadratic" className="mb-6 scroll-mt-4">
        <Collapsible title="三、一元二次不等式（回顾）" defaultOpen storageKey="ineq:quadratic" headerExtra={<SpeakButton text={inequalityNarrations.quadraticInequality} />}>
          <div className="space-y-2 text-lg text-gray-800">
            <div className="border border-orange-300 rounded overflow-hidden bg-orange-50 px-3 py-2">
              <p className="text-xl font-bold text-center"><span className="text-green-600">大于取两边</span>，<span className="text-red-600">小于取中间</span></p>
              <p className="text-center mt-1">三步走：① 化标准形式（<Math tex="ax^2+bx+c \gtrless 0" />，<Math tex="a>0" />）→ ② 解方程求根 → ③ 看不等号方向写解集</p>
              <p className="text-center mt-1">忘了？ <a href="/math/sets-prereq" className="text-blue-600 underline font-bold">👉 回 1.1.5 集合前置知识复习</a></p>
            </div>
          </div>
        </Collapsible>
      </section>

      {/* Section 5: 综合测试 */}
      <section id="ineq-quiz" className="mb-6 scroll-mt-4">
        <Collapsible title="四、综合测试" defaultOpen storageKey="ineq:quiz">
          <QuizPanel module="inequality" questions={inequalityQuizQuestions} explanations={inequalityExplanations} />
        </Collapsible>
      </section>

      {/* 打印模式答案区 */}
      {isPrinting && printOptions.showAnswers && <InequalityAnswers />}
    </LessonLayout>
  </div>
);
} 
