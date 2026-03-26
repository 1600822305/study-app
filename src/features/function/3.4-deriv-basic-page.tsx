import { Math, Collapsible, SpeakButton, QuizPanel, PageHeader, LessonLayout, CalloutCard, PracticeCard, ExportButton, PageBreak, BigQuestionCard } from '@/components/shared';
import { derivBasicNarrations } from './data/3.4/3.4-deriv-basic-narrations';
import { derivBasicProgressItems } from './data/3.4/3.4-deriv-basic-progress';
import { derivBasicPractice1, derivBasicPractice2, derivBasicPractice3, derivBasicPractice4, derivBasicPractice5 } from './data/3.4/3.4-deriv-basic-practice';
import { derivBasicQuizQuestions } from './data/3.4/3.4-deriv-basic-quiz';
import { useProgress, usePrintMode } from '@/hooks';
import { scrollToId } from '@/lib/scroll';
import { DerivativeBasicAnswers, derivativeBasicExplanations } from './3.4-deriv-basic-answers';

export function DerivativeBasicPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('deriv-basic', derivBasicProgressItems);
  const { isPrinting, printOptions } = usePrintMode();

  return (
    <div className="overflow-x-hidden">
      <PageHeader
        stage="第三阶段 · 函数思维"
        title="3.4 导数基础"
        narration={derivBasicNarrations.intro}
        subtitle="求导公式 · 求导法则 · 单调性 · 极值最值 · 切线方程"
        tags={[
          { label: '难度 ★★★★☆', color: 'red' },
          { label: '解答题14-17分', color: 'red' },
          { label: '约8-10小时', color: 'purple' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="3.4 导数基础" />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-2 mb-1">
        <p className="font-bold text-gray-800 mb-1">📋 知识地图</p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 text-gray-600">
          <button onClick={() => scrollToId('db-formulas')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">一、基本导数公式（7个必背公式）</button>
          <button onClick={() => scrollToId('db-extrema')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">四、极值与最值</button>
          <button onClick={() => scrollToId('db-rules')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">二、求导法则（加减乘除 + 链式法则）</button>
          <button onClick={() => scrollToId('db-tangent')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">五、切线方程</button>
          <button onClick={() => scrollToId('db-monotone')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">三、导数与单调性</button>
          <button onClick={() => scrollToId('db-quiz')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">六、高考真题实战（7+1题）</button>
        </div>
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* Section 1: 基本导数公式 */}
      {/* ════════════════════════════════════════════════════════════ */}
      <section id="db-formulas" className="mb-2 scroll-mt-4">
        <Collapsible title="一、基本导数公式 — 🎯 7个必背公式" defaultOpen storageKey="deriv-basic:formulas" headerExtra={<SpeakButton text={derivBasicNarrations.formulas} />}>
          <div className="space-y-0 text-gray-700">

            {/* 学前提醒 */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-2">
              <p className="font-bold text-blue-800 mb-1">🎯 为什么要背公式？</p>
              <div className="leading-7">
                <p>求导就像加减乘除一样，是一种<strong>运算</strong></p>
                <p>加减乘除需要背九九乘法表，求导也需要背<strong>基本公式</strong></p>
                <p className="text-blue-700 mt-1">好消息：高中只需要背 <strong>7 个</strong>公式，比九九乘法表少多了！</p>
              </div>
            </div>

            {/* 7个公式 */}
            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-1">📐 七大基本导数公式</p>
              <div className="space-y-0">

                {/* 公式1: 常数 */}
                <div className="bg-gray-50 rounded-lg p-2">
                  <div className="grid grid-cols-2 gap-3 items-center">
                    <div>
                      <p className="font-bold text-gray-700">① 常数</p>
                      <div className="bg-white rounded p-2 text-center my-1">
                        <Math tex="(C)' = 0" />
                      </div>
                    </div>
                    <div className="leading-7">
                      <p>常数不会变化 → 变化率为 0</p>
                      <p className="text-gray-500">例：<Math tex="(5)' = 0,\; (\pi)' = 0" /></p>
                    </div>
                  </div>
                </div>

                {/* 公式2: 幂函数 */}
                <div className="bg-amber-50 rounded-lg p-2">
                  <div className="grid grid-cols-2 gap-3 items-center">
                    <div>
                      <p className="font-bold text-amber-700">② 幂函数 ⭐最常用</p>
                      <div className="bg-white rounded p-2 text-center my-1">
                        <Math tex="(x^n)' = nx^{n-1}" />
                      </div>
                    </div>
                    <div className="leading-7">
                      <p>口诀：<strong>指数下来当系数，指数减一</strong></p>
                      <p className="text-gray-500">例：<Math tex="(x^5)' = 5x^4" /></p>
                      <p className="text-gray-500"><Math tex="(x^{-1})' = -x^{-2} = -\dfrac{1}{x^2}" /></p>
                    </div>
                  </div>
                </div>

                {/* 公式3-4: 指数函数 */}
                <div className="bg-green-50 rounded-lg p-2">
                  <div className="grid grid-cols-2 gap-3 items-center">
                    <div>
                      <p className="font-bold text-green-700">③④ 指数函数</p>
                      <div className="bg-white rounded p-2 text-center my-1 space-y-1">
                        <p><Math tex="(e^x)' = e^x" /></p>
                        <p><Math tex="(a^x)' = a^x \ln a" /></p>
                      </div>
                    </div>
                    <div className="leading-7">
                      <p><Math tex="e^x" /> 求导<strong>等于自己</strong>（唯一！）</p>
                      <p className="text-gray-500"><Math tex="a^x" /> 多乘一个 <Math tex="\ln a" /></p>
                      <p className="text-gray-500">例：<Math tex="(2^x)' = 2^x \ln 2" /></p>
                    </div>
                  </div>
                </div>

                {/* 公式5-6: 对数函数 */}
                <div className="bg-blue-50 rounded-lg p-2">
                  <div className="grid grid-cols-2 gap-3 items-center">
                    <div>
                      <p className="font-bold text-blue-700">⑤⑥ 对数函数</p>
                      <div className="bg-white rounded p-2 text-center my-1 space-y-1">
                        <p><Math tex="(\ln x)' = \dfrac{1}{x}" /></p>
                        <p><Math tex="(\log_a x)' = \dfrac{1}{x \ln a}" /></p>
                      </div>
                    </div>
                    <div className="leading-7">
                      <p><Math tex="\ln x" /> 和 <Math tex="e^x" /> 是"逆运算"</p>
                      <p className="text-gray-500">一个导数是自己，一个导数是倒数</p>
                      <p className="text-gray-500">例：<Math tex="(\log_2 x)' = \dfrac{1}{x \ln 2}" /></p>
                    </div>
                  </div>
                </div>

                {/* 公式7: 三角函数 */}
                <div className="bg-purple-50 rounded-lg p-2">
                  <div className="grid grid-cols-2 gap-3 items-center">
                    <div>
                      <p className="font-bold text-purple-700">⑦ 三角函数</p>
                      <div className="bg-white rounded p-2 text-center my-1 space-y-1">
                        <p><Math tex="(\sin x)' = \cos x" /></p>
                        <p><Math tex="(\cos x)' = -\sin x" /></p>
                      </div>
                    </div>
                    <div className="leading-7">
                      <p>口诀：<strong>正弦变余弦，余弦变负正弦</strong></p>
                      <p className="text-red-600 font-bold">注意：cos 求导带负号！</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-2 leading-7">
              <p><strong>💡 记忆技巧：</strong>常数 ➜ 0，<Math tex="e^x" /> ➜ 自己，幂函数 ➜ 指数下来减一，<Math tex="\cos x" /> 求导别忘<strong className="text-red-600">负号</strong></p>
            </div>

            {/* 记忆口诀 */}
            <PageBreak />
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-2">
              <p className="font-bold text-amber-800 mb-1">💡 补充：根式也是幂函数</p>
              <div className="leading-7">
                <p>根号本质上就是分数指数，可以直接用幂函数公式求导：</p>
                <div className="grid grid-cols-2 gap-3 mt-1">
                  <div className="bg-white rounded-lg p-2">
                    <p className="font-bold text-amber-700"><Math tex="\sqrt{x} = x^{\frac{1}{2}}" /></p>
                    <p><Math tex="(\sqrt{x})' = \dfrac{1}{2}x^{-\frac{1}{2}} = \dfrac{1}{2\sqrt{x}}" /></p>
                  </div>
                  <div className="bg-white rounded-lg p-2">
                    <p className="font-bold text-amber-700"><Math tex="\dfrac{1}{x} = x^{-1}" /></p>
                    <p><Math tex="\left(\dfrac{1}{x}\right)' = -x^{-2} = -\dfrac{1}{x^2}" /></p>
                  </div>
                </div>
                <p className="text-amber-700 mt-1"><strong>规律</strong>：遇到根号或分式 → 先改写成 <Math tex="x^n" /> 形式 → 再套公式「指数下来减一」</p>
              </div>
            </div>

            {/* 练习 */}
            <PracticeCard
              title="✏️ 即时练习：基本导数公式（8题）"
              questions={derivBasicPractice1}
              printOptionCols={2}
              explanations={derivativeBasicExplanations}
            />

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* Section 2: 求导法则 */}
      {/* ════════════════════════════════════════════════════════════ */}
      <PageBreak />
      <section id="db-rules" className="mb-2 scroll-mt-4">
        <Collapsible title="二、求导法则 — 🎯 组合拳" defaultOpen storageKey="deriv-basic:rules" headerExtra={<SpeakButton text={derivBasicNarrations.rules} />}>
          <div className="space-y-0 text-gray-700">

            {/* 引入 */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-2">
              <p className="font-bold text-blue-800 mb-1">🔧 为什么需要法则？</p>
              <div className="leading-7">
                <p>实际函数通常是<strong>多个基本函数的组合</strong></p>
                <p>比如 <Math tex="f(x) = 3x^2 + 2\sin x - e^x" /> 就是加减组合</p>
                <p className="text-blue-700 mt-1">求导法则 = <strong>怎么对"组合函数"求导</strong></p>
              </div>
            </div>

            {/* 法则1: 和差 */}
            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-1">📐 法则一：和差法则（最简单）</p>
              <div className="grid grid-cols-2 gap-3 items-start">
                <div className="bg-gray-50 rounded-lg p-2 text-center">
                  <Math tex="[f(x) \pm g(x)]' = f'(x) \pm g'(x)" />
                  <p className="mt-1 text-gray-500"><Math tex="[cf(x)]' = cf'(x)" /></p>
                </div>
                <div className="leading-7">
                  <p><strong>分别求导，再加减</strong></p>
                  <p><strong>例</strong>：<Math tex="(3x^2 + 2x - 1)'" /></p>
                  <p><Math tex="= 6x + 2" /></p>
                </div>
              </div>
            </div>

            {/* 法则2: 积 */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-2">
              <p className="font-bold text-amber-800 mb-1">📐 法则二：积的求导法则</p>
              <div className="grid grid-cols-2 gap-3 items-start">
                <div className="bg-white rounded-lg p-2 text-center">
                  <Math tex="[f(x) \cdot g(x)]'" />
                  <p><Math tex="= f'g + fg'" /></p>
                </div>
                <div className="leading-7">
                  <p>口诀：<strong>前导后不动 + 前不动后导</strong></p>
                  <p><strong>例</strong>：<Math tex="(x \cdot e^x)' = (1+x)e^x" /></p>
                </div>
              </div>
            </div>

            {/* 法则3: 商 */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-2">
              <p className="font-bold text-green-800 mb-1">📐 法则三：商的求导法则</p>
              <div className="grid grid-cols-2 gap-3 items-start">
                <div className="bg-white rounded-lg p-2 text-center">
                  <Math tex="\left(\dfrac{f}{g}\right)' = \dfrac{f'g - fg'}{g^2}" />
                </div>
                <div className="leading-7">
                  <p>口诀：<strong>子导母减子母导，母平方作分母</strong></p>
                  <p><strong>例</strong>：<Math tex="\left(\dfrac{x}{x+1}\right)' = \dfrac{1}{(x+1)^2}" /></p>
                </div>
              </div>
            </div>

            {/* 法则4: 复合函数 */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-2">
              <p className="font-bold text-red-800 mb-1">📐 法则四：复合函数求导（链式法则）⭐高考重点</p>
              <div className="grid grid-cols-2 gap-3 items-start">
                <div className="bg-white rounded-lg p-2 text-center">
                  <Math tex="[f(g(x))]' = f'(g(x)) \cdot g'(x)" />
                </div>
                <div className="leading-7">
                  <p>口诀：<strong>从外到内，逐层求导，结果相乘</strong></p>
                  <p><strong>例1</strong>：<Math tex="(e^{2x})' = 2e^{2x}" /></p>
                  <p><strong>例2</strong>：<Math tex="[(2x+1)^3]' = 6(2x+1)^2" /></p>
                </div>
              </div>
            </div>

            {/* 实战例题 */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-green-50 border border-green-200 rounded-xl p-2">
                <p className="font-bold text-green-800 mb-1">🎯 实战例题：综合求导</p>
                <div className="leading-7">
                  <p><strong>题目</strong>：求 <Math tex="f(x) = x^2 e^x" /> 的导数</p>
                  <p className="mt-1"><strong>解题</strong>：用积的法则</p>
                  <p><Math tex="f'(x) = (x^2)' \cdot e^x + x^2 \cdot (e^x)'" /></p>
                  <p><Math tex="= 2x \cdot e^x + x^2 \cdot e^x" /></p>
                  <p><Math tex="= (2x + x^2) e^x = x(x+2)e^x" /></p>
                  <p className="text-green-700 font-bold mt-1">技巧：结果提公因式整理，方便后续分析单调性</p>
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-2">
                <p className="font-bold text-green-800 mb-1">🎯 实战例题：链式法则</p>
                <div className="leading-7">
                  <p><strong>题目</strong>：求 <Math tex="f(x) = \ln(2x + 1)" /> 的导数</p>
                  <p className="mt-1"><strong>解题</strong>：令 <Math tex="u = 2x + 1" /></p>
                  <p>外层 <Math tex="\ln u" /> → 导数 <Math tex="\dfrac{1}{u}" /></p>
                  <p>内层 <Math tex="u = 2x + 1" /> → 导数 2</p>
                  <p><Math tex="f'(x) = \dfrac{1}{2x+1} \times 2 = \dfrac{2}{2x+1}" /></p>
                  <p className="text-red-600 mt-1"><strong>注意</strong>：定义域需 <Math tex="2x+1 > 0" />，即 <Math tex="x > -\dfrac{1}{2}" /></p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-2">
                <p className="font-bold text-amber-800 mb-1">🎯 实战例题：商的法则</p>
                <div className="leading-7">
                  <p><strong>题目</strong>：求 <Math tex="f(x) = \dfrac{e^x}{x}" /> 的导数</p>
                  <p className="mt-1"><strong>解题</strong>：用商的法则</p>
                  <p><Math tex="f'(x) = \dfrac{(e^x)' \cdot x - e^x \cdot (x)'}{x^2}" /></p>
                  <p><Math tex="= \dfrac{xe^x - e^x}{x^2} = \dfrac{(x-1)e^x}{x^2}" /></p>
                </div>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-2">
                <p className="font-bold text-red-800 mb-1">🎯 实战例题：积 + 链式混合</p>
                <div className="leading-7">
                  <p><strong>题目</strong>：求 <Math tex="f(x) = x \cdot e^{2x}" /> 的导数</p>
                  <p className="mt-1"><strong>解题</strong>：先积后链式</p>
                  <p><Math tex="f'(x) = 1 \cdot e^{2x} + x \cdot (e^{2x})'" /></p>
                  <p><Math tex="= e^{2x} + x \cdot 2e^{2x} = (1+2x)e^{2x}" /></p>
                </div>
              </div>
            </div>


            {/* 练习 */}
            <PageBreak />
            <PracticeCard
              title="✏️ 即时练习：求导法则（6题）"
              questions={derivBasicPractice2}
              printOptionCols={2}
              explanations={derivativeBasicExplanations}
            />

            <BigQuestionCard
              questionLatex="\text{已知 }f(x) = x^2 \ln x\\[6pt]\text{（1）求 }f'(x)\\[4pt]\text{（2）求曲线 }y = f(x)\text{ 在 }x = 1\text{ 处的切线方程}"
              solutionLatex="\textbf{（1）求导}\\[4pt]f'(x) = (x^2)' \cdot \ln x + x^2 \cdot (\ln x)'\\[4pt]= 2x \ln x + x^2 \cdot \dfrac{1}{x} = 2x\ln x + x\\[8pt]\textbf{（2）切线方程}\\[4pt]f(1) = 1^2 \cdot \ln 1 = 0\text{，切点为 }(1, 0)\\[4pt]f'(1) = 2 \times 1 \times \ln 1 + 1 = 1\text{（斜率）}\\[4pt]y - 0 = 1 \times (x - 1)\\[4pt]\boxed{y = x - 1}"
            />

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* Section 3: 导数与单调性 */}
      {/* ════════════════════════════════════════════════════════════ */}
      <PageBreak />
      <section id="db-monotone" className="mb-2 scroll-mt-4">
        <Collapsible title="三、导数与单调性 — 🎯 大题第一问" defaultOpen storageKey="deriv-basic:monotone" headerExtra={<SpeakButton text={derivBasicNarrations.monotone} />}>
          <div className="space-y-0 text-gray-700">

            {/* ═══ P1: 核心概念 + 四步法 + 例1(二次) ═══ */}

            {/* 直觉理解 */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-2">
              <p className="font-bold text-blue-800 mb-1">🧠 为什么导数能判断单调性？</p>
              <div className="leading-7">
                <p>导数 = <strong>变化率</strong>（函数值变化的速度）</p>
                <p>变化率 &gt; 0 ➜ 函数值在<strong>增大</strong> ➜ 图像在<strong>上升</strong></p>
                <p>变化率 &lt; 0 ➜ 函数值在<strong>减小</strong> ➜ 图像在<strong>下降</strong></p>
              </div>
            </div>

            {/* 核心定理 */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-2">
              <p className="font-bold text-amber-800 mb-1">🔑 核心定理（必背）</p>
              <div className="grid grid-cols-2 gap-3 leading-7">
                <div className="bg-white rounded-lg p-2 text-center">
                  <p className="font-bold text-green-700"><Math tex="f'(x) > 0" /></p>
                  <p>函数 <strong>单调递增</strong> ↗</p>
                  <p className="text-gray-500">导数为正 → 上升</p>
                </div>
                <div className="bg-white rounded-lg p-2 text-center">
                  <p className="font-bold text-red-600"><Math tex="f'(x) < 0" /></p>
                  <p>函数 <strong>单调递减</strong> ↘</p>
                  <p className="text-gray-500">导数为负 → 下降</p>
                </div>
              </div>
            </div>

            {/* 求单调区间步骤 */}
            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-1">📐 求单调区间四步法</p>
              <div className="grid grid-cols-4 gap-2 text-center leading-7">
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="font-bold text-gray-700">第一步</p>
                  <p>求 <Math tex="f'(x)" /></p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="font-bold text-gray-700">第二步</p>
                  <p>令 <Math tex="f'(x) = 0" /></p>
                  <p>解出零点</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="font-bold text-gray-700">第三步</p>
                  <p>列表分析符号</p>
                  <p>正/负/零</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="font-bold text-gray-700">第四步</p>
                  <p>写出单调区间</p>
                </div>
              </div>
            </div>

            {/* 例1: 二次函数（最简单，1个零点） */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-2">
              <p className="font-bold text-green-800 mb-1">🎯 例题1：二次函数（最简单）</p>
              <div className="grid grid-cols-2 gap-3 items-start">
                <div className="leading-7">
                  <p><strong>题目</strong>：求 <Math tex="f(x) = x^2 - 4x" /> 的单调区间</p>
                  <p className="mt-1"><strong>第一步</strong>：<Math tex="f'(x) = 2x - 4" /></p>
                  <p><strong>第二步</strong>：令 <Math tex="f'(x) = 0" /> ➜ <Math tex="x = 2" /></p>
                  <p className="mt-1"><strong>第三步</strong>：只有1个零点，分成2段</p>
                </div>
                <div className="leading-7">
                  <table className="w-full text-base border-collapse">
                    <thead>
                      <tr className="bg-green-100">
                        <th className="border border-green-200 px-2 py-0.5 text-green-700"><Math tex="x" /></th>
                        <th className="border border-green-200 px-2 py-0.5 text-center text-green-700"><Math tex="(-\infty, 2)" /></th>
                        <th className="border border-green-200 px-2 py-0.5 text-center text-green-700"><Math tex="2" /></th>
                        <th className="border border-green-200 px-2 py-0.5 text-center text-green-700"><Math tex="(2, +\infty)" /></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 px-2 py-0.5 font-bold text-green-700"><Math tex="f'(x)" /></td>
                        <td className="border border-gray-200 px-2 py-0.5 text-center text-red-600 font-bold">−</td>
                        <td className="border border-gray-200 px-2 py-0.5 text-center">0</td>
                        <td className="border border-gray-200 px-2 py-0.5 text-center text-green-600 font-bold">+</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-200 px-2 py-0.5 font-bold text-green-700"><Math tex="f(x)" /></td>
                        <td className="border border-gray-200 px-2 py-0.5 text-center">↘ 递减</td>
                        <td className="border border-gray-200 px-2 py-0.5 text-center">极小</td>
                        <td className="border border-gray-200 px-2 py-0.5 text-center">↗ 递增</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="mt-1"><strong>第四步</strong>：递减 <Math tex="(-\infty, 2)" />，递增 <Math tex="(2, +\infty)" /></p>
                </div>
              </div>
            </div>

            {/* 怎么判断符号 */}
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-2">
              <p className="font-bold text-purple-800 mb-1">💡 怎么判断每段的正负号？</p>
              <div className="leading-7">
                <p><strong>方法：在每段区间里取一个简单的数代入 <Math tex="f'(x)" /></strong></p>
                <p>上面例题：<Math tex="f'(x) = 2x - 4" />，零点 <Math tex="x = 2" /></p>
                <div className="grid grid-cols-2 gap-3 mt-1">
                  <div className="bg-white rounded-lg p-2">
                    <p>取 <Math tex="x = 0" />（在 <Math tex="(-\infty, 2)" /> 里）</p>
                    <p><Math tex="f'(0) = -4 < 0" /> ➜ <strong className="text-red-600">负号</strong></p>
                  </div>
                  <div className="bg-white rounded-lg p-2">
                    <p>取 <Math tex="x = 3" />（在 <Math tex="(2, +\infty)" /> 里）</p>
                    <p><Math tex="f'(3) = 2 > 0" /> ➜ <strong className="text-green-600">正号</strong></p>
                  </div>
                </div>
              </div>
            </div>

            {/* 常见疑问 */}
            <CalloutCard variant="info" title="❓ 常见疑问" compact>
              <div className="space-y-0.5 leading-7">
                <p><strong>Q：零点处 <Math tex="f'(x) = 0" />，函数在增还是在减？</strong></p>
                <p>A：零点处是"转折点"，既不增也不减。只需关注零点<strong>两侧</strong>的区间</p>
                <p><strong>Q：<Math tex="f'(x)" /> 的零点有几个，就分成几段？</strong></p>
                <p>A：<strong>n 个零点分成 n+1 段</strong>。1个零点 → 2段，2个零点 → 3段</p>
                <p><strong>Q：取点代入时，取什么数最方便？</strong></p>
                <p>A：取 <strong>0、1、-1</strong> 等最简单的整数，只要落在对应区间内就行</p>
              </div>
            </CalloutCard>

            <div className="bg-gray-50 rounded-lg p-2 leading-7">
              <p><strong>💡 本页小结：</strong>导数正 ➜ 递增，导数负 ➜ 递减。四步法：求导 ➜ 令=0 ➜ 列表（取点代入判正负）➜ 写区间</p>
            </div>

            {/* ═══ P2: 例2(三次) + 例3(xe^x) + 注意事项 ═══ */}
            <PageBreak />

            {/* 例2: 三次函数（2个零点） */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-2">
              <p className="font-bold text-green-800 mb-1">🎯 例题2：三次函数（2个零点）</p>
              <div className="leading-7">
                <p><strong>题目</strong>：求 <Math tex="f(x) = x^3 - 3x" /> 的单调区间</p>
                <p className="mt-1"><strong>第一步</strong>：<Math tex="f'(x) = 3x^2 - 3 = 3(x+1)(x-1)" /></p>
                <p><strong>第二步</strong>：令 <Math tex="f'(x) = 0" /> ➜ <Math tex="x = -1" /> 或 <Math tex="x = 1" />（2个零点，分成3段）</p>
                <p className="mt-1"><strong>第三步</strong>：列表</p>
                <table className="w-full text-base border-collapse mt-1 mb-1">
                  <thead>
                    <tr className="bg-green-100">
                      <th className="border border-green-200 px-2 py-0.5 text-green-700"><Math tex="x" /></th>
                      <th className="border border-green-200 px-2 py-0.5 text-center text-green-700"><Math tex="(-\infty, -1)" /></th>
                      <th className="border border-green-200 px-2 py-0.5 text-center text-green-700"><Math tex="-1" /></th>
                      <th className="border border-green-200 px-2 py-0.5 text-center text-green-700"><Math tex="(-1, 1)" /></th>
                      <th className="border border-green-200 px-2 py-0.5 text-center text-green-700"><Math tex="1" /></th>
                      <th className="border border-green-200 px-2 py-0.5 text-center text-green-700"><Math tex="(1, +\infty)" /></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-2 py-0.5 font-bold text-green-700"><Math tex="f'(x)" /></td>
                      <td className="border border-gray-200 px-2 py-0.5 text-center text-green-600 font-bold">+</td>
                      <td className="border border-gray-200 px-2 py-0.5 text-center">0</td>
                      <td className="border border-gray-200 px-2 py-0.5 text-center text-red-600 font-bold">−</td>
                      <td className="border border-gray-200 px-2 py-0.5 text-center">0</td>
                      <td className="border border-gray-200 px-2 py-0.5 text-center text-green-600 font-bold">+</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-2 py-0.5 font-bold text-green-700"><Math tex="f(x)" /></td>
                      <td className="border border-gray-200 px-2 py-0.5 text-center">↗ 递增</td>
                      <td className="border border-gray-200 px-2 py-0.5 text-center">极大</td>
                      <td className="border border-gray-200 px-2 py-0.5 text-center">↘ 递减</td>
                      <td className="border border-gray-200 px-2 py-0.5 text-center">极小</td>
                      <td className="border border-gray-200 px-2 py-0.5 text-center">↗ 递增</td>
                    </tr>
                  </tbody>
                </table>
                <p><strong>第四步</strong>：递增区间 <Math tex="(-\infty, -1)" /> 和 <Math tex="(1, +\infty)" />，递减区间 <Math tex="(-1, 1)" /></p>
              </div>
            </div>

            {/* 例3: xe^x（高考常考） */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-2">
              <p className="font-bold text-red-800 mb-1">🎯 例题3：含 <Math tex="e^x" /> 的函数 ⭐高考必考</p>
              <div className="leading-7">
                <p><strong>题目</strong>：求 <Math tex="f(x) = xe^x" /> 的单调区间</p>
                <p className="mt-1"><strong>第一步</strong>：<Math tex="f'(x) = e^x + xe^x = (1+x)e^x" />（积的法则）</p>
                <p><strong>第二步</strong>：令 <Math tex="f'(x) = 0" /></p>
                <div className="bg-white rounded-lg p-2 my-1">
                  <p>🔑 <strong>关键技巧</strong>：<Math tex="e^x > 0" /> 恒成立（永远为正！）</p>
                  <p>所以 <Math tex="(1+x)e^x = 0" /> 只需 <Math tex="1+x = 0" /> ➜ <Math tex="x = -1" /></p>
                </div>
                <p><strong>第三步</strong>：因为 <Math tex="e^x > 0" />，符号只看 <Math tex="(1+x)" /></p>
                <div className="grid grid-cols-2 gap-3 mt-1">
                  <div className="bg-white rounded-lg p-2 text-center">
                    <p><Math tex="x < -1" /> ➜ <Math tex="1+x < 0" /></p>
                    <p><Math tex="f'(x) < 0" />，<strong className="text-red-600">递减</strong> ↘</p>
                  </div>
                  <div className="bg-white rounded-lg p-2 text-center">
                    <p><Math tex="x > -1" /> ➜ <Math tex="1+x > 0" /></p>
                    <p><Math tex="f'(x) > 0" />，<strong className="text-green-600">递增</strong> ↗</p>
                  </div>
                </div>
                <p className="mt-1"><strong>第四步</strong>：递减 <Math tex="(-\infty, -1)" />，递增 <Math tex="(-1, +\infty)" /></p>
              </div>
            </div>

            {/* 高考注意 + 规律总结 */}
            <div className="grid grid-cols-2 gap-3">
              <CalloutCard variant="warning" title="⚠️ 高考注意" compact>
                <div className="space-y-0.5">
                  <p><strong>单调区间不能用"并集"连接！</strong></p>
                  <p>✓ 递增区间为 <Math tex="(-\infty, -1)" /> 和 <Math tex="(1, +\infty)" /></p>
                  <p>✗ <Math tex="(-\infty, -1) \cup (1, +\infty)" />（扣分！）</p>
                  <p className="text-gray-600">反例：<Math tex="f(x) = \dfrac{1}{x}" /> 在 <Math tex="(-\infty,0)" /> 和 <Math tex="(0,+\infty)" /> 上都递减，但 <Math tex="f(-1) &lt; f(1)" />，合并后不满足递减定义</p>
                </div>
              </CalloutCard>
              <CalloutCard variant="tip" title="💡 e^x 类题技巧" compact>
                <div className="space-y-0.5">
                  <p><strong><Math tex="e^x > 0" /> 恒正</strong>，可以直接忽略</p>
                  <p>只需看另一个因子的正负</p>
                  <p>如 <Math tex="(x-a)e^x" />，符号只取决于 <Math tex="x-a" /></p>
                </div>
              </CalloutCard>
            </div>

            {/* 三类题型对比 */}
            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-1">📋 三类题型对比总结</p>
              <table className="w-full text-base border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-200 px-2 py-0.5 text-left">题型</th>
                    <th className="border border-gray-200 px-2 py-0.5 text-left">函数</th>
                    <th className="border border-gray-200 px-2 py-0.5 text-left">零点个数</th>
                    <th className="border border-gray-200 px-2 py-0.5 text-left">分段</th>
                    <th className="border border-gray-200 px-2 py-0.5 text-left">难点</th>
                  </tr>
                </thead>
                <tbody className="leading-7">
                  <tr>
                    <td className="border border-gray-200 px-2 py-0.5">二次</td>
                    <td className="border border-gray-200 px-2 py-0.5"><Math tex="x^2 - 4x" /></td>
                    <td className="border border-gray-200 px-2 py-0.5">1个</td>
                    <td className="border border-gray-200 px-2 py-0.5">2段</td>
                    <td className="border border-gray-200 px-2 py-0.5">最简单</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-0.5">三次</td>
                    <td className="border border-gray-200 px-2 py-0.5"><Math tex="x^3 - 3x" /></td>
                    <td className="border border-gray-200 px-2 py-0.5">2个</td>
                    <td className="border border-gray-200 px-2 py-0.5">3段</td>
                    <td className="border border-gray-200 px-2 py-0.5">列表要3行</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-2 py-0.5"><Math tex="e^x" /> 类</td>
                    <td className="border border-gray-200 px-2 py-0.5"><Math tex="xe^x" /></td>
                    <td className="border border-gray-200 px-2 py-0.5">1个</td>
                    <td className="border border-gray-200 px-2 py-0.5">2段</td>
                    <td className="border border-gray-200 px-2 py-0.5"><Math tex="e^x" /> 恒正可忽略</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 实战练习预热 */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-2">
                <p className="font-bold text-amber-800 mb-1">🎯 变式练习：你来试试</p>
                <div className="leading-7">
                  <p><strong>题目</strong>：求 <Math tex="f(x) = x^3 - 6x^2 + 9x" /> 的单调区间</p>
                  <p className="mt-1 text-amber-700"><strong>提示</strong>：<Math tex="f'(x) = 3x^2 - 12x + 9" /></p>
                  <p className="text-amber-700">先因式分解，再列表</p>
                  <p className="mt-1 text-gray-500">答案：递增 <Math tex="(-\infty, 1)" /> 和 <Math tex="(3, +\infty)" /></p>
                  <p className="text-gray-500">递减 <Math tex="(1, 3)" /></p>
                </div>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-2">
                <p className="font-bold text-amber-800 mb-1">🎯 变式练习：<Math tex="e^x" /> 类</p>
                <div className="leading-7">
                  <p><strong>题目</strong>：求 <Math tex="f(x) = (x-1)e^x" /> 的单调区间</p>
                  <p className="mt-1 text-amber-700"><strong>提示</strong>：<Math tex="f'(x) = xe^x" /></p>
                  <p className="text-amber-700"><Math tex="e^x > 0" />，只看 <Math tex="x" /> 的正负</p>
                  <p className="mt-1 text-gray-500">答案：递减 <Math tex="(-\infty, 0)" /></p>
                  <p className="text-gray-500">递增 <Math tex="(0, +\infty)" /></p>
                </div>
              </div>
            </div>

            {/* ═══ P3: 练习 + 大题 ═══ */}
            <PageBreak />
            <PracticeCard
              title="✏️ 即时练习：导数与单调性（7题）"
              questions={derivBasicPractice3}
              printOptionCols={2}
              explanations={derivativeBasicExplanations}
            />

            <BigQuestionCard
              questionLatex="\text{已知 }f(x) = x^3 - 3x^2 - 9x + 5\\[6pt]\text{（1）求 }f(x)\text{ 的单调递增区间}\\[4pt]\text{（2）求 }f(x)\text{ 在 }[-2, 2]\text{ 上的最大值}"
              solutionLatex="\textbf{（1）求单调递增区间}\\[4pt]f'(x) = 3x^2 - 6x - 9 = 3(x^2 - 2x - 3) = 3(x-3)(x+1)\\[4pt]\text{令 }f'(x) = 0 \implies x = -1 \text{ 或 } x = 3\\[4pt]\text{当 }x < -1\text{ 时，}f'(x) > 0\text{（递增）}\\[4pt]\text{当 }-1 < x < 3\text{ 时，}f'(x) < 0\text{（递减）}\\[4pt]\text{当 }x > 3\text{ 时，}f'(x) > 0\text{（递增）}\\[4pt]\boxed{\text{递增区间为 }(-\infty, -1)\text{ 和 }(3, +\infty)}\\[8pt]\textbf{（2）在 }[-2, 2]\textbf{ 上的最大值}\\[4pt]\text{在 }[-2, 2]\text{ 内，}x = -1\text{ 是极大值点}\\[4pt]f(-2) = -8 - 12 + 18 + 5 = 3\\[4pt]f(-1) = -1 - 3 + 9 + 5 = 10\\[4pt]f(2) = 8 - 12 - 18 + 5 = -17\\[4pt]\text{比较：}f(-1) = 10 > f(-2) = 3 > f(2) = -17\\[4pt]\boxed{\text{最大值为 }10\text{，在 }x = -1\text{ 处取得}}"
              lines={6}
            />

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* Section 4: 极值与最值 */}
      {/* ════════════════════════════════════════════════════════════ */}
      <PageBreak />
      <section id="db-extrema" className="mb-2 scroll-mt-4">
        <Collapsible title="四、极值与最值 — 🎯 大题必考" defaultOpen storageKey="deriv-basic:extrema" headerExtra={<SpeakButton text={derivBasicNarrations.extrema} />}>
          <div className="space-y-0 text-gray-700">

            {/* ═══ P1: 概念 + 判定 + 三步法 + 例1(二次) ═══ */}

            {/* 直觉理解 */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-2">
              <p className="font-bold text-blue-800 mb-1">🧠 什么是极值？</p>
              <div className="leading-7">
                <p><strong>极大值</strong>：函数在某点"附近"达到的<strong>局部最高点</strong>（像山顶 🏔️）</p>
                <p><strong>极小值</strong>：函数在某点"附近"达到的<strong>局部最低点</strong>（像谷底 🏞️）</p>
                <p className="text-blue-700 mt-1"><strong>注意</strong>：极大值<strong>不一定</strong>比极小值大！想象一下：一座小山丘的顶（极大值=5）比旁边一个深谷的底（极小值=2）大，但另一座更高的山上的谷底（极小值=100）却比这个山顶大得多</p>
              </div>
            </div>

            {/* 极值判定 */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-2">
              <p className="font-bold text-amber-800 mb-1">🔑 极值点判定方法</p>
              <div className="grid grid-cols-2 gap-3 leading-7">
                <div className="bg-white rounded-lg p-2">
                  <p className="font-bold text-green-700 text-center">极大值点</p>
                  <p><Math tex="f'(x)" /> 从 <strong className="text-green-600">正</strong> 变 <strong className="text-red-600">负</strong></p>
                  <p>↗ 到 ↘ = 山顶</p>
                </div>
                <div className="bg-white rounded-lg p-2">
                  <p className="font-bold text-red-600 text-center">极小值点</p>
                  <p><Math tex="f'(x)" /> 从 <strong className="text-red-600">负</strong> 变 <strong className="text-green-600">正</strong></p>
                  <p>↘ 到 ↗ = 谷底</p>
                </div>
              </div>
              <p className="text-amber-700 mt-1 text-center font-bold">关键词：<strong>变号</strong>！不变号 ≠ 极值点</p>
            </div>

            {/* 求极值步骤 */}
            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-1">📐 求极值三步法</p>
              <div className="grid grid-cols-3 gap-2 text-center leading-7">
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="font-bold text-gray-700">第一步</p>
                  <p>求 <Math tex="f'(x)" /></p>
                  <p>令 <Math tex="f'(x) = 0" /></p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="font-bold text-gray-700">第二步</p>
                  <p>列表看两侧符号</p>
                  <p>是否变号</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="font-bold text-gray-700">第三步</p>
                  <p>代入求极值</p>
                  <p><Math tex="f(x_0) = ?" /></p>
                </div>
              </div>
            </div>

            {/* 例1: 二次函数（最简单） */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-2">
              <p className="font-bold text-green-800 mb-1">🎯 例题1：二次函数求极值（最简单）</p>
              <div className="grid grid-cols-2 gap-3 items-start">
                <div className="leading-7">
                  <p><strong>题目</strong>：求 <Math tex="f(x) = -x^2 + 4x + 1" /> 的极值</p>
                  <p className="mt-1"><strong>第一步</strong>：<Math tex="f'(x) = -2x + 4" /></p>
                  <p>令 <Math tex="f'(x) = 0" /> ➜ <Math tex="x = 2" /></p>
                  <p className="mt-1"><strong>第二步</strong>：列表看变号</p>
                </div>
                <div className="leading-7">
                  <table className="w-full text-base border-collapse">
                    <thead>
                      <tr className="bg-green-100">
                        <th className="border border-green-200 px-2 py-0.5 text-green-700"><Math tex="x" /></th>
                        <th className="border border-green-200 px-2 py-0.5 text-center text-green-700"><Math tex="(-\infty, 2)" /></th>
                        <th className="border border-green-200 px-2 py-0.5 text-center text-green-700"><Math tex="2" /></th>
                        <th className="border border-green-200 px-2 py-0.5 text-center text-green-700"><Math tex="(2, +\infty)" /></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 px-2 py-0.5 font-bold text-green-700"><Math tex="f'(x)" /></td>
                        <td className="border border-gray-200 px-2 py-0.5 text-center text-green-600 font-bold">+</td>
                        <td className="border border-gray-200 px-2 py-0.5 text-center">0</td>
                        <td className="border border-gray-200 px-2 py-0.5 text-center text-red-600 font-bold">−</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-200 px-2 py-0.5 font-bold text-green-700"><Math tex="f(x)" /></td>
                        <td className="border border-gray-200 px-2 py-0.5 text-center">↗ 递增</td>
                        <td className="border border-gray-200 px-2 py-0.5 text-center font-bold text-green-700">极大</td>
                        <td className="border border-gray-200 px-2 py-0.5 text-center">↘ 递减</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="mt-1"><strong>第三步</strong>：<Math tex="f'(x)" /> 从正→负 = 极大值</p>
                  <p className="text-green-700 font-bold"><Math tex="f(2) = -4 + 8 + 1 = 5" />（极大值）</p>
                </div>
              </div>
            </div>

            {/* 概念区分 */}
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-2">
              <p className="font-bold text-purple-800 mb-1">💡 易混概念辨析</p>
              <div className="grid grid-cols-2 gap-3 leading-7">
                <div className="bg-white rounded-lg p-2">
                  <p className="font-bold text-purple-700">极值点 vs 极值</p>
                  <p><strong>极值点</strong>是 x 的值（自变量）</p>
                  <p><strong>极值</strong>是 f(x) 的值（函数值）</p>
                  <p className="text-gray-500">上例：极大值<strong>点</strong>是 x=2，极大<strong>值</strong>是 5</p>
                </div>
                <div className="bg-white rounded-lg p-2">
                  <p className="font-bold text-purple-700">极大值 vs 最大值</p>
                  <p><strong>极大值</strong>：局部最高（附近的山顶）</p>
                  <p><strong>最大值</strong>：全局最高（整座山脉最高峰）</p>
                  <p className="text-gray-500">函数可能有多个极大值，但最大值只有一个</p>
                </div>
              </div>
            </div>

            {/* 记忆口诀 */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-2">
              <p className="font-bold text-amber-800 mb-1">📌 记忆口诀</p>
              <div className="grid grid-cols-2 gap-3 leading-7">
                <div className="bg-white rounded-lg p-2 text-center">
                  <p className="text-lg font-bold text-green-700">正 → 负 = 极<span className="text-red-600">大</span></p>
                  <p>先增后减 → <strong>山顶</strong>（最高点）</p>
                  <p className="text-gray-500">像爬山，上去再下来</p>
                </div>
                <div className="bg-white rounded-lg p-2 text-center">
                  <p className="text-lg font-bold text-red-600">负 → 正 = 极<span className="text-green-700">小</span></p>
                  <p>先减后增 → <strong>谷底</strong>（最低点）</p>
                  <p className="text-gray-500">像下坡，下去再上来</p>
                </div>
              </div>
            </div>

            {/* 变式练习 */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-1">🎯 你来试试：求 <Math tex="f(x) = x^2 - 6x + 5" /> 的极值</p>
              <div className="leading-7">
                <p className="text-gray-600"><strong>提示</strong>：<Math tex="f'(x) = 2x - 6" />，令 <Math tex="f'(x) = 0" /> ➜ <Math tex="x = 3" /></p>
                <p className="text-gray-500">答案：<Math tex="x = 3" /> 处取极小值 <Math tex="f(3) = 9 - 18 + 5 = -4" />（f' 从负→正）</p>
              </div>
            </div>

            {/* ═══ P2: 例2(三次求极值) + 闭区间最值 + 例3 + 陷阱 ═══ */}
            <PageBreak />

            {/* 例2: 三次函数求极值 */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-2">
              <p className="font-bold text-green-800 mb-1">🎯 例题2：三次函数求极值（2个极值点）</p>
              <div className="leading-7">
                <p><strong>题目</strong>：求 <Math tex="f(x) = x^3 - 3x" /> 的极值</p>
                <p className="mt-1"><strong>第一步</strong>：<Math tex="f'(x) = 3x^2 - 3 = 3(x+1)(x-1)" />，令 <Math tex="f'(x) = 0" /> ➜ <Math tex="x = -1" /> 或 <Math tex="x = 1" /></p>
                <p><strong>第二步</strong>：列表</p>
                <table className="w-full text-base border-collapse mt-1 mb-1">
                  <thead>
                    <tr className="bg-green-100">
                      <th className="border border-green-200 px-2 py-0.5 text-green-700"><Math tex="x" /></th>
                      <th className="border border-green-200 px-2 py-0.5 text-center text-green-700"><Math tex="(-\infty, -1)" /></th>
                      <th className="border border-green-200 px-2 py-0.5 text-center text-green-700"><Math tex="-1" /></th>
                      <th className="border border-green-200 px-2 py-0.5 text-center text-green-700"><Math tex="(-1, 1)" /></th>
                      <th className="border border-green-200 px-2 py-0.5 text-center text-green-700"><Math tex="1" /></th>
                      <th className="border border-green-200 px-2 py-0.5 text-center text-green-700"><Math tex="(1, +\infty)" /></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-2 py-0.5 font-bold text-green-700"><Math tex="f'(x)" /></td>
                      <td className="border border-gray-200 px-2 py-0.5 text-center text-green-600 font-bold">+</td>
                      <td className="border border-gray-200 px-2 py-0.5 text-center">0</td>
                      <td className="border border-gray-200 px-2 py-0.5 text-center text-red-600 font-bold">−</td>
                      <td className="border border-gray-200 px-2 py-0.5 text-center">0</td>
                      <td className="border border-gray-200 px-2 py-0.5 text-center text-green-600 font-bold">+</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-2 py-0.5 font-bold text-green-700"><Math tex="f(x)" /></td>
                      <td className="border border-gray-200 px-2 py-0.5 text-center">↗</td>
                      <td className="border border-gray-200 px-2 py-0.5 text-center font-bold text-green-700">极大</td>
                      <td className="border border-gray-200 px-2 py-0.5 text-center">↘</td>
                      <td className="border border-gray-200 px-2 py-0.5 text-center font-bold text-red-600">极小</td>
                      <td className="border border-gray-200 px-2 py-0.5 text-center">↗</td>
                    </tr>
                  </tbody>
                </table>
                <p><strong>第三步</strong>：极大值 <Math tex="f(-1) = -1 + 3 = 2" />，极小值 <Math tex="f(1) = 1 - 3 = -2" /></p>
              </div>
            </div>

            {/* 闭区间最值 */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-2">
              <p className="font-bold text-red-800 mb-1">⭐ 闭区间最值（高考高频题型）</p>
              <div className="leading-7">
                <p><strong>闭区间 <Math tex="[a, b]" /> 上的最值</strong> = 比较以下所有值，取最大/最小：</p>
                <div className="grid grid-cols-3 gap-2 mt-1 text-center">
                  <div className="bg-white rounded-lg p-2">
                    <p className="font-bold">左端点</p>
                    <p><Math tex="f(a)" /></p>
                  </div>
                  <div className="bg-white rounded-lg p-2">
                    <p className="font-bold">区间内所有极值</p>
                    <p><Math tex="f(x_i)" /></p>
                  </div>
                  <div className="bg-white rounded-lg p-2">
                    <p className="font-bold">右端点</p>
                    <p><Math tex="f(b)" /></p>
                  </div>
                </div>
                <p className="text-red-700 font-bold mt-1">端点值别忘算！最值经常在端点处取得</p>
              </div>
            </div>

            {/* 例3: 闭区间最值 */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-2">
              <p className="font-bold text-green-800 mb-1">🎯 例题3：闭区间上的最值</p>
              <div className="leading-7">
                <p><strong>题目</strong>：求 <Math tex="f(x) = x^3 - 3x" /> 在 <Math tex="[-2, 2]" /> 上的最大值和最小值</p>
                <p className="mt-1">由例题2已知：极大值 <Math tex="f(-1) = 2" />，极小值 <Math tex="f(1) = -2" /></p>
                <p>再算端点值：<Math tex="f(-2) = -8+6 = -2" />，<Math tex="f(2) = 8-6 = 2" /></p>
                <p className="mt-1">比较所有值：</p>
                <div className="grid grid-cols-4 gap-2 mt-1 text-center">
                  <div className="bg-white rounded-lg p-1"><p className="font-bold">f(−2)</p><p>−2</p></div>
                  <div className="bg-white rounded-lg p-1 border-2 border-green-400"><p className="font-bold text-green-700">f(−1)</p><p className="text-green-700 font-bold">2 ✓最大</p></div>
                  <div className="bg-white rounded-lg p-1 border-2 border-red-400"><p className="font-bold text-red-600">f(1)</p><p className="text-red-600 font-bold">−2 ✓最小</p></div>
                  <div className="bg-white rounded-lg p-1"><p className="font-bold">f(2)</p><p>2</p></div>
                </div>
                <p className="mt-1 text-green-700 font-bold">最大值 = 2（在 x=−1 和 x=2 处取得），最小值 = −2</p>
              </div>
            </div>

            {/* 陷阱 + e^x 提示 */}
            <div className="grid grid-cols-2 gap-3">
              <CalloutCard variant="warning" title="⚠️ 经典陷阱" compact>
                <div className="space-y-0.5">
                  <p><strong><Math tex="f'(x_0) = 0" /> ≠ 极值点！</strong></p>
                  <p>反例：<Math tex="f(x) = x^3" /></p>
                  <p><Math tex="f'(0) = 0" />，但 <Math tex="f'" /> 两侧都是正</p>
                  <p><strong>不变号</strong> → 不是极值点</p>
                </div>
              </CalloutCard>
              <CalloutCard variant="tip" title="💡 e^x 类求极值" compact>
                <div className="space-y-0.5">
                  <p><strong><Math tex="e^x > 0" /> 恒正</strong>，不影响变号</p>
                  <p>如 <Math tex="f(x) = xe^x" /></p>
                  <p><Math tex="f'(x) = (1+x)e^x" /></p>
                  <p>极值点只看 <Math tex="1+x = 0" /> ➜ <Math tex="x = -1" /></p>
                </div>
              </CalloutCard>
            </div>

            <CalloutCard variant="info" title="❓ 常见疑问" compact>
              <div className="space-y-0.5 leading-7">
                <p><strong>Q：极值一定在 f'(x)=0 的地方吗？</strong></p>
                <p>A：对于高考常见的多项式和指数函数，是的。但 <Math tex="f(x) = |x|" /> 在 x=0 有极小值，而 f'(0) 不存在</p>
                <p><strong>Q：闭区间最值和极值什么关系？</strong></p>
                <p>A：最值一定存在（闭区间上连续函数），可能在极值点取得，也可能在端点取得</p>
              </div>
            </CalloutCard>

            {/* 闭区间最值步骤总结 */}
            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-1">📋 闭区间最值完整步骤（必背）</p>
              <div className="grid grid-cols-4 gap-2 text-center leading-7">
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="font-bold text-gray-700">第一步</p>
                  <p>求 <Math tex="f'(x)" /></p>
                  <p>令 <Math tex="f'(x) = 0" /></p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="font-bold text-gray-700">第二步</p>
                  <p>筛选在 <Math tex="[a,b]" /></p>
                  <p>内的零点</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="font-bold text-gray-700">第三步</p>
                  <p>算端点值</p>
                  <p><Math tex="f(a)" /> 和 <Math tex="f(b)" /></p>
                </div>
                <div className="bg-red-50 rounded-lg p-2 border border-red-200">
                  <p className="font-bold text-red-700">第四步</p>
                  <p className="font-bold">比较所有值</p>
                  <p>取最大/最小</p>
                </div>
              </div>
            </div>

            {/* ═══ P3: 练习 + 大题 ═══ */}
            <PageBreak />
            <PracticeCard
              title="✏️ 即时练习：极值与最值（7题）"
              questions={derivBasicPractice4}
              printOptionCols={2}
              explanations={derivativeBasicExplanations}
            />

            <BigQuestionCard
              questionLatex="\text{已知 }f(x) = x^3 + ax^2 - 9x + b\text{，且 }f(x)\text{ 在 }x = 1\text{ 处取得极值}\\[6pt]\text{（1）求 }a\text{ 的值，并判断 }x = 1\text{ 处是极大值还是极小值}\\[4pt]\text{（2）求 }f(x)\text{ 在 }[-4, 4]\text{ 上的最大值和最小值（取 }b = 0\text{）}"
              solutionLatex="\textbf{（1）求 a}\\[4pt]f'(x) = 3x^2 + 2ax - 9\\[4pt]\text{在 }x = 1\text{ 处取极值} \implies f'(1) = 0\\[4pt]3 + 2a - 9 = 0 \implies a = 3\\[4pt]f'(x) = 3x^2 + 6x - 9 = 3(x+3)(x-1)\\[4pt]x = 1\text{ 处：}f'\text{ 从负→正，}\boxed{\text{极小值}}\\[8pt]\textbf{（2）闭区间最值}（b = 0）\\[4pt]f(x) = x^3 + 3x^2 - 9x\\[4pt]\text{极值点：}x = -3\text{（极大）}, x = 1\text{（极小）}\\[4pt]f(-4) = -64 + 48 + 36 = 20\\[4pt]f(-3) = -27 + 27 + 27 = 27\\[4pt]f(1) = 1 + 3 - 9 = -5\\[4pt]f(4) = 64 + 48 - 36 = 76\\[4pt]\boxed{\text{最大值 }76\text{（}x = 4\text{），最小值 }-5\text{（}x = 1\text{）}}"
              lines={6}
            />

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* Section 5: 切线方程 */}
      {/* ════════════════════════════════════════════════════════════ */}
      <PageBreak />
      <section id="db-tangent" className="mb-2 scroll-mt-4">
        <Collapsible title="五、切线方程 — 🎯 几何意义应用" defaultOpen storageKey="deriv-basic:tangent" headerExtra={<SpeakButton text={derivBasicNarrations.tangent} />}>
          <div className="space-y-0 text-gray-700">

            {/* ═══ P1: 几何意义 + 三步法 + 例1(x²) + 例2(eˣ) + 变式 ═══ */}

            {/* 直觉理解 */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-2">
              <p className="font-bold text-blue-800 mb-1">🧠 导数的几何意义</p>
              <div className="leading-7">
                <p>导数 <Math tex="f'(x_0)" /> 的几何意义：<strong>曲线 <Math tex="y = f(x)" /> 在 <Math tex="x = x_0" /> 处切线的斜率</strong></p>
                <p className="mt-1">换句话说：你想知道曲线在某一点有多"陡"，算导数就行！</p>
                <div className="grid grid-cols-3 gap-2 mt-1 text-center">
                  <div className="bg-white rounded-lg p-1">
                    <p><Math tex="f'(x_0) > 0" /></p>
                    <p>切线<strong>向右上</strong> ↗</p>
                  </div>
                  <div className="bg-white rounded-lg p-1">
                    <p><Math tex="f'(x_0) = 0" /></p>
                    <p>切线<strong>水平</strong> →</p>
                  </div>
                  <div className="bg-white rounded-lg p-1">
                    <p><Math tex="f'(x_0) < 0" /></p>
                    <p>切线<strong>向右下</strong> ↘</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 三步法 */}
            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-1">📐 求切线方程三步法</p>
              <div className="grid grid-cols-3 gap-2 text-center leading-7">
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="font-bold text-gray-700">第一步</p>
                  <p>求导 <Math tex="f'(x)" /></p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="font-bold text-gray-700">第二步</p>
                  <p>代入求斜率</p>
                  <p><Math tex="k = f'(x_0)" /></p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="font-bold text-gray-700">第三步</p>
                  <p>点斜式写方程</p>
                  <p><Math tex="y - y_0 = k(x - x_0)" /></p>
                </div>
              </div>
            </div>

            {/* 例1: y=x² */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-2">
              <p className="font-bold text-green-800 mb-1">🎯 例题1：<Math tex="y = x^2" /> 在 <Math tex="(1, 1)" /> 处的切线（最基础）</p>
              <div className="grid grid-cols-2 gap-3 items-start">
                <div className="leading-7">
                  <p><strong>第一步</strong>：<Math tex="y' = 2x" /></p>
                  <p><strong>第二步</strong>：<Math tex="k = y'(1) = 2 \times 1 = 2" /></p>
                  <p><strong>第三步</strong>：点斜式</p>
                  <p><Math tex="y - 1 = 2(x - 1)" /></p>
                  <p className="text-green-700 font-bold"><Math tex="y = 2x - 1" /></p>
                </div>
                <div className="bg-white rounded-lg p-2 leading-7">
                  <p className="font-bold text-gray-700 mb-1">💡 关键理解</p>
                  <p>切点 = <Math tex="(1, 1)" /></p>
                  <p>斜率 = <Math tex="f'(1) = 2" /></p>
                  <p>切线经过切点，斜率等于导数值</p>
                </div>
              </div>
            </div>

            {/* 例2: y=eˣ */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-2">
              <p className="font-bold text-green-800 mb-1">🎯 例题2：<Math tex="y = e^x" /> 在 <Math tex="x = 0" /> 处的切线 ⭐高考常考</p>
              <div className="leading-7">
                <p><strong>第一步</strong>：<Math tex="y' = e^x" /></p>
                <p><strong>第二步</strong>：<Math tex="k = e^0 = 1" />，切点 <Math tex="(0, e^0) = (0, 1)" /></p>
                <p><strong>第三步</strong>：<Math tex="y - 1 = 1 \times (x - 0)" /> ➜ <Math tex="y = x + 1" /></p>
                <p className="text-green-700 font-bold mt-1">记住这个结论：<Math tex="y = e^x" /> 在原点附近的切线是 <Math tex="y = x + 1" /></p>
              </div>
            </div>

            {/* 变式练习 */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-1">🎯 你来试试：求 <Math tex="y = x^3" /> 在 <Math tex="(1, 1)" /> 处的切线方程</p>
              <div className="leading-7">
                <p className="text-gray-600"><strong>提示</strong>：<Math tex="y' = 3x^2" />，<Math tex="k = y'(1) = 3" /></p>
                <p className="text-gray-500">答案：<Math tex="y - 1 = 3(x - 1)" /> ➜ <Math tex="y = 3x - 2" /></p>
              </div>
            </div>

            {/* 记忆口诀 */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-2">
              <p className="font-bold text-amber-800 mb-1">📌 切线方程记忆口诀</p>
              <div className="grid grid-cols-3 gap-3 leading-7 text-center">
                <div className="bg-white rounded-lg p-2">
                  <p className="text-lg font-bold text-blue-700">求导</p>
                  <p>先对 <Math tex="f(x)" /> 求导</p>
                  <p className="text-gray-500">得到斜率公式</p>
                </div>
                <div className="bg-white rounded-lg p-2">
                  <p className="text-lg font-bold text-green-700">代入</p>
                  <p>把 <Math tex="x_0" /> 代入 <Math tex="f'" /></p>
                  <p className="text-gray-500">得到斜率数值</p>
                </div>
                <div className="bg-white rounded-lg p-2">
                  <p className="text-lg font-bold text-purple-700">写方程</p>
                  <p>点斜式一步到位</p>
                  <p className="text-gray-500"><Math tex="y - y_0 = k(x - x_0)" /></p>
                </div>
              </div>
            </div>

            {/* 常见函数切线速查 */}
            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <table className="w-full text-base border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-200 px-2 py-0.5 text-gray-700">函数</th>
                    <th className="border border-gray-200 px-2 py-0.5 text-gray-700">切点</th>
                    <th className="border border-gray-200 px-2 py-0.5 text-gray-700">斜率</th>
                    <th className="border border-gray-200 px-2 py-0.5 text-gray-700">切线方程</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-2 py-0.5"><Math tex="y = x^2" /></td>
                    <td className="border border-gray-200 px-2 py-0.5 text-center"><Math tex="(1, 1)" /></td>
                    <td className="border border-gray-200 px-2 py-0.5 text-center"><Math tex="2" /></td>
                    <td className="border border-gray-200 px-2 py-0.5 text-center"><Math tex="y = 2x - 1" /></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-0.5"><Math tex="y = x^3" /></td>
                    <td className="border border-gray-200 px-2 py-0.5 text-center"><Math tex="(1, 1)" /></td>
                    <td className="border border-gray-200 px-2 py-0.5 text-center"><Math tex="3" /></td>
                    <td className="border border-gray-200 px-2 py-0.5 text-center"><Math tex="y = 3x - 2" /></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-2 py-0.5"><Math tex="y = e^x" /></td>
                    <td className="border border-gray-200 px-2 py-0.5 text-center"><Math tex="(0, 1)" /></td>
                    <td className="border border-gray-200 px-2 py-0.5 text-center"><Math tex="1" /></td>
                    <td className="border border-gray-200 px-2 py-0.5 text-center font-bold text-green-700"><Math tex="y = x + 1" /></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-0.5"><Math tex="y = \ln x" /></td>
                    <td className="border border-gray-200 px-2 py-0.5 text-center"><Math tex="(1, 0)" /></td>
                    <td className="border border-gray-200 px-2 py-0.5 text-center"><Math tex="1" /></td>
                    <td className="border border-gray-200 px-2 py-0.5 text-center font-bold text-green-700"><Math tex="y = x - 1" /></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ═══ P2: "在"vs"过" + 例3(过某点) + 易错 + 总结 ═══ */}
            <PageBreak />

            {/* 核心陷阱 */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-2">
              <p className="font-bold text-red-800 mb-1">🚨 高考第一大陷阱："在" vs "过"</p>
              <div className="grid grid-cols-2 gap-3 leading-7">
                <div className="bg-white rounded-lg p-2 border-2 border-green-300">
                  <p className="font-bold text-green-700 text-center">"在点 A 处的切线"</p>
                  <p className="mt-1"><strong>A 就是切点</strong>（直接用）</p>
                  <p>斜率 <Math tex="k = f'(x_A)" /></p>
                  <p className="text-gray-500">简单，三步法直接做</p>
                  <p className="text-green-700 font-bold mt-1">切线只有 1 条</p>
                </div>
                <div className="bg-white rounded-lg p-2 border-2 border-red-300">
                  <p className="font-bold text-red-600 text-center">"过点 A 的切线"</p>
                  <p className="mt-1"><strong>A 不一定是切点</strong>（要验证）</p>
                  <p>设切点 <Math tex="(t, f(t))" /></p>
                  <p>用 A 在切线上列方程求 t</p>
                  <p className="text-red-600 font-bold mt-1">可能有 0/1/2 条！</p>
                </div>
              </div>
              <p className="text-red-700 mt-1 text-center font-bold">看到"过"字一定要警觉！先检查点是否在曲线上</p>
            </div>

            {/* 例3: 过某点 */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-2">
              <p className="font-bold text-green-800 mb-1">🎯 例题3："过某点的切线"（完整步骤）</p>
              <div className="leading-7">
                <p><strong>题目</strong>：求过点 <Math tex="(0, -1)" /> 且与曲线 <Math tex="y = x^2" /> 相切的直线方程</p>
                <p className="mt-1"><strong>第一步：检验</strong>　<Math tex="(0, -1)" /> 在曲线上吗？代入 <Math tex="0^2 = 0 \neq -1" />，<strong className="text-red-600">不在！</strong></p>
                <p><strong>第二步：设切点</strong>　设切点为 <Math tex="(t, t^2)" />，斜率 <Math tex="k = 2t" /></p>
                <p><strong>第三步：写切线</strong>　<Math tex="y - t^2 = 2t(x - t)" />，即 <Math tex="y = 2tx - t^2" /></p>
                <p><strong>第四步：代入已知点</strong>　过 <Math tex="(0, -1)" />：<Math tex="-1 = 2t(0) - t^2 = -t^2" /></p>
                <p><strong>第五步：解方程</strong>　<Math tex="t^2 = 1" /> ➜ <Math tex="t = 1" /> 或 <Math tex="t = -1" /></p>
                <p className="text-green-700 font-bold mt-1">两条切线：<Math tex="y = 2x - 1" /> 和 <Math tex="y = -2x - 1" /></p>
              </div>
            </div>

            {/* 易错 + 总结 */}
            <div className="grid grid-cols-2 gap-3">
              <CalloutCard variant="warning" title="⚠️ 易错提醒" compact>
                <div className="space-y-0.5">
                  <p><strong>"过某点"第一步必须检验</strong></p>
                  <p>如果点<strong>在</strong>曲线上 → 直接用三步法</p>
                  <p>如果点<strong>不在</strong>曲线上 → 设切点求解</p>
                  <p>切线与曲线可以有多个交点</p>
                </div>
              </CalloutCard>
              <CalloutCard variant="info" title="📝 高考题型总结" compact>
                <div className="space-y-0.5">
                  <p><strong>选择/填空</strong>：求斜率或方程</p>
                  <p>"在"vs"过"辨析</p>
                  <p><strong>解答题</strong>：切线方程常作大题第一问</p>
                  <p>难度不高但容易粗心</p>
                </div>
              </CalloutCard>
            </div>

            {/* "过某点"步骤总结 */}
            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-1">📋 "过某点"切线方程步骤（必背）</p>
              <div className="grid grid-cols-4 gap-2 text-center leading-7">
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="font-bold text-gray-700">第一步</p>
                  <p>检验点是否</p>
                  <p>在曲线上</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="font-bold text-gray-700">第二步</p>
                  <p>设切点</p>
                  <p><Math tex="(t, f(t))" /></p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="font-bold text-gray-700">第三步</p>
                  <p>写切线方程</p>
                  <p>代入已知点</p>
                </div>
                <div className="bg-red-50 rounded-lg p-2 border border-red-200">
                  <p className="font-bold text-red-700">第四步</p>
                  <p className="font-bold">解方程求 t</p>
                  <p>可能多解！</p>
                </div>
              </div>
            </div>

            {/* 变式练习: 过某点 */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-1">🎯 你来试试：过原点与 <Math tex="y = e^x" /> 相切的直线</p>
              <div className="leading-7">
                <p className="text-gray-600"><strong>提示</strong>：(0,0) 不在 <Math tex="y=e^x" /> 上（<Math tex="e^0 = 1 \neq 0" />），设切点 <Math tex="(t, e^t)" />，斜率 <Math tex="k = e^t" /></p>
                <p className="text-gray-500">切线：<Math tex="y - e^t = e^t(x - t)" />，过原点：<Math tex="0 - e^t = e^t(0 - t)" /> ➜ <Math tex="-1 = -t" /> ➜ <Math tex="t = 1" /></p>
                <p className="text-gray-500">答案：<Math tex="k = e" />，切线方程 <Math tex="y = ex" /></p>
              </div>
            </div>

            {/* 两类切线对比总结 */}
            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-1">📋 两类切线问题完整对比</p>
              <table className="w-full text-base border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-200 px-2 py-0.5 text-gray-700"></th>
                    <th className="border border-gray-200 px-2 py-0.5 text-green-700">"在某点处"的切线</th>
                    <th className="border border-gray-200 px-2 py-0.5 text-red-600">"过某点"的切线</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-2 py-0.5 font-bold">切点</td>
                    <td className="border border-gray-200 px-2 py-0.5">已知（就是该点）</td>
                    <td className="border border-gray-200 px-2 py-0.5">未知（需要设 t 求解）</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-0.5 font-bold">难度</td>
                    <td className="border border-gray-200 px-2 py-0.5">简单（三步法）</td>
                    <td className="border border-gray-200 px-2 py-0.5">较难（需列方程）</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-2 py-0.5 font-bold">切线条数</td>
                    <td className="border border-gray-200 px-2 py-0.5">恰好 1 条</td>
                    <td className="border border-gray-200 px-2 py-0.5">可能 0/1/2 条</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-0.5 font-bold">关键词</td>
                    <td className="border border-gray-200 px-2 py-0.5">"在…处""在点…的"</td>
                    <td className="border border-gray-200 px-2 py-0.5">"过…""经过…"</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ═══ P3: 练习 + 大题 ═══ */}
            <PageBreak />
            <PracticeCard
              title="✏️ 即时练习：切线方程（7题）"
              questions={derivBasicPractice5}
              printOptionCols={2}
              explanations={derivativeBasicExplanations}
            />

            <BigQuestionCard
              questionLatex="\text{已知 }f(x) = x^3 - 3x\\[6pt]\text{（1）求曲线 }y = f(x)\text{ 在 }x = 2\text{ 处的切线方程}\\[4pt]\text{（2）求过点 }(2, 2)\text{ 的所有切线方程}"
              solutionLatex={"\\textbf{（1）在 x=2 处的切线}\\\\[4pt]f'(x) = 3x^2 - 3\\\\[4pt]f(2) = 8 - 6 = 2\\text{，切点 }(2, 2)\\\\[4pt]k = f'(2) = 12 - 3 = 9\\\\[4pt]y - 2 = 9(x - 2)\\\\[4pt]\\boxed{y = 9x - 16}\\\\[8pt]\\textbf{（2）过点 (2,2) 的切线}\\\\[4pt]\\text{(2,2) 在曲线上}（f(2) = 2\\text{，验证通过}）\\\\[4pt]\\text{所以第(1)问的切线是其中一条：}y = 9x - 16\\\\[4pt]\\text{但「过」某点可能还有其他切线，设切点 }(t, t^3-3t)\\\\[4pt]k = 3t^2 - 3\\text{，切线：}y - (t^3-3t) = (3t^2-3)(x-t)\\\\[4pt]\\text{过 }(2,2)\\text{：}2-(t^3-3t) = (3t^2-3)(2-t)\\\\[4pt]2-t^3+3t = 6t^2-3t^3-6+3t\\\\[4pt]2t^3-6t^2+8 = 0 \\implies t^3-3t^2+4 = 0\\\\[4pt](t-2)(t^2-t-2) = 0 \\implies (t-2)^2(t+1) = 0\\\\[4pt]t = 2\\text{（已知）或 }t = -1\\\\[4pt]t=-1\\text{：}k = 3-3 = 0\\text{，切点 }(-1, 2)\\\\[4pt]\\boxed{y = 9x - 16\\text{ 和 }y = 2}"}
              lines={6}
            />

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* Section 6: 综合自测 */}
      {/* ════════════════════════════════════════════════════════════ */}
      <PageBreak />
      <section id="db-quiz" className="mb-2 scroll-mt-4">
        <Collapsible title="六、高考真题实战（7题选择 + 1题大题）" defaultOpen storageKey="deriv-basic:quiz">
          <div className="-mx-4 -mt-3 -mb-4">
            <QuizPanel questions={derivBasicQuizQuestions} module="deriv-basic-quiz" explanations={derivativeBasicExplanations} />
          </div>
          <BigQuestionCard
            questionLatex={"\\text{（2021 全国甲 改编）已知 }f(x) = x^3 - 3x\\\\[6pt]\\text{（1）求 }f(x)\\text{ 的单调递增区间和单调递减区间}\\\\[4pt]\\text{（2）求 }f(x)\\text{ 在 }[-3, 2]\\text{ 上的最大值和最小值}"}
            solutionLatex={"\\textbf{（1）单调区间}\\\\[4pt]f'(x) = 3x^2 - 3 = 3(x+1)(x-1)\\\\[4pt]\\text{令 }f'(x) = 0 \\implies x = -1\\text{ 或 }x = 1\\\\[4pt]\\text{令 }f'(x) > 0 \\implies x < -1\\text{ 或 }x > 1\\\\[4pt]\\boxed{\\text{递增区间：}(-\\infty, -1)\\text{ 和 }(1, +\\infty)}\\\\[4pt]\\boxed{\\text{递减区间：}(-1, 1)}\\\\[8pt]\\textbf{（2）闭区间最值}\\\\[4pt]\\text{极值点 }x = -1, 1\\text{ 都在 }[-3, 2]\\text{ 内}\\\\[4pt]f(-3) = -27 + 9 = -18\\\\[4pt]f(-1) = -1 + 3 = 2\\\\[4pt]f(1) = 1 - 3 = -2\\\\[4pt]f(2) = 8 - 6 = 2\\\\[4pt]\\text{比较：}\\{-18, 2, -2, 2\\}\\\\[4pt]\\boxed{\\text{最大值} = 2\\text{（在 }x=-1\\text{ 和 }x=2\\text{ 处取得）}}\\\\[4pt]\\boxed{\\text{最小值} = -18\\text{（在 }x=-3\\text{ 处取得）}}"}
            lines={6}
          />
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* 打印模式答案区 */}
      {/* ════════════════════════════════════════════════════════════ */}
      {isPrinting && printOptions.showAnswers && <DerivativeBasicAnswers />}

      </LessonLayout>
    </div>
  );
}
