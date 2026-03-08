import { Mafs, Coordinates, Point, Line, Plot, Text as MafsText } from 'mafs';

import { Math, Collapsible, SpeakButton, QuizPanel, PageHeader, LessonLayout, CalloutCard, PracticeCard } from '@/components/shared';
import { setsPrereqNarrations } from './data/prereq-narrations';
import { setsPrereqPractice1, setsPrereqPractice2, setsPrereqPractice3, setsPrereqPractice4 } from './data/practice';
import { setsPrereqProgressItems } from './data/prereq-progress';
import { setsPrereqQuizQuestions } from './data/prereq-quiz';
import { useProgress } from '@/hooks';


export function SetsPrereqPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('sets-prereq', setsPrereqProgressItems);

  return (
    <div>
      <PageHeader
        stage="前置准备"
        variant="prereq"
        title="1.1.5 集合前置知识"
        narration={setsPrereqNarrations.intro}
        subtitle="学集合之前，先确保解方程、解不等式、画数轴没问题"
        tags={[
          { label: '约20-30分钟', color: 'amber' },
          { label: '初中+高一基础', color: 'green' },
        ]}
      />

      <div className="bg-white rounded-xl border border-gray-200 p-5 mb-6">
        <p className="font-bold text-gray-800 mb-2">📋 知识地图</p>
        <div className="text-sm text-gray-600 space-y-1">
          <button onClick={() => document.getElementById('sp-equation')?.scrollIntoView({ behavior: 'smooth' })} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">一、解一元二次方程（开平方 + 因式分解 + 公式法）</button>
          <button onClick={() => document.getElementById('sp-inequality')?.scrollIntoView({ behavior: 'smooth' })} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">二、解一元二次不等式（大于取两边，小于取中间）</button>
          <button onClick={() => document.getElementById('sp-numberline')?.scrollIntoView({ behavior: 'smooth' })} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">三、数轴的使用（○ 和 ●）</button>
          <button onClick={() => document.getElementById('sp-interval')?.scrollIntoView({ behavior: 'smooth' })} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">四、区间表示法（开闭区间 + ∞）</button>
          <button onClick={() => document.getElementById('sp-quiz')?.scrollIntoView({ behavior: 'smooth' })} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">五、选择题自测（16题）</button>
        </div>
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      {/* Section 1: Solving Quadratic Equations */}
      <section id="sp-equation" className="mb-6 scroll-mt-4">
        <Collapsible title="一、解一元二次方程" defaultOpen storageKey="sets-prereq:equation" headerExtra={<SpeakButton text={setsPrereqNarrations.equation} />}>
          <p className="text-xs text-blue-600 mb-3">🎯 学完你能：用因式分解法和公式法解一元二次方程，快速确定集合的元素。</p>
          <div className="space-y-4 text-sm text-gray-700">

            {/* 什么是一元二次方程 */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="font-bold text-blue-800 mb-2">先搞清楚：什么是一元二次方程？</p>
              <p className="text-blue-700">长这样的方程：<Math tex="ax^2 + bx + c = 0" />（其中 a ≠ 0）</p>
              <p className="text-blue-700 mt-1">只有<strong>一个未知数 x</strong>，x 的最高次方是 <strong>2</strong>，所以叫"一元二次"。</p>
              <p className="text-blue-600 mt-2 text-xs">集合题里经常说"A = {'{'} x | x² - 5x + 6 = 0 {'}'}"，你需要解出 x 才能知道集合里有什么元素。</p>
            </div>

            {/* 必背公式 */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <p className="text-sm text-orange-700 font-bold mb-3">必背！因式分解要用到的两个公式</p>
              <div className="space-y-3">
                <div className="bg-white border border-orange-100 rounded-lg p-3">
                  <p className="text-xs text-orange-600 mb-1">平方差公式</p>
                  <Math tex="a^2 - b^2 = (a+b)(a-b)" />
                  <p className="text-xs text-gray-500 mt-1">看到"一个平方 减 另一个平方"就能用</p>
                </div>
                <div className="bg-white border border-orange-100 rounded-lg p-3">
                  <p className="text-xs text-orange-600 mb-1">完全平方公式</p>
                  <p><Math tex="(a+b)^2 = a^2 + 2ab + b^2" /></p>
                  <p><Math tex="(a-b)^2 = a^2 - 2ab + b^2" /></p>
                  <p className="text-xs text-gray-500 mt-1">中间项 = 2倍乘积，末项 = 那个数的平方</p>
                </div>
              </div>
            </div>

            {/* 方法零：直接开平方法 */}
            <Collapsible title="方法零：直接开平方法（最简单）" storageKey="sets-prereq:eq-sqrt">
              <div className="space-y-4 text-sm text-gray-700">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="font-bold text-blue-800 mb-2">什么时候能用？</p>
                  <p className="text-blue-700 text-xs mb-2">方程里<strong>没有一次项 bx</strong>，只剩下 x² 和常数，或者已经是 (x+a)² = k 的形式。</p>
                  <div className="bg-white rounded-lg p-3 border border-blue-100">
                    <p className="text-gray-800 text-sm font-bold mb-1">操作：</p>
                    <p className="text-gray-700">两边直接开根号，<span className="text-red-500 font-bold">别忘了 ±</span>（正负两个根）</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <p className="font-bold text-gray-800">例1：<Math tex="x^2 = 9" /></p>
                  <div className="pl-3 border-l-2 border-blue-300 space-y-1.5">
                    <p>两边开根号 → <Math tex="x = \pm\sqrt{9} = \pm 3" /></p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <p className="font-bold text-gray-800">例2：<Math tex="(x-1)^2 = 4" /></p>
                  <div className="pl-3 border-l-2 border-blue-300 space-y-1.5">
                    <p><span className="text-blue-600 font-bold">第一步</span>：开根号 → <Math tex="x - 1 = \pm 2" /></p>
                    <p><span className="text-blue-600 font-bold">第二步</span>：移项 → <Math tex="x = 1 + 2 = 3" /> 或 <Math tex="x = 1 - 2 = -1" /></p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <p className="font-bold text-gray-800">例3：<Math tex="2x^2 = 18" /></p>
                  <div className="pl-3 border-l-2 border-blue-300 space-y-1.5">
                    <p><span className="text-blue-600 font-bold">第一步</span>：先除以 2 → <Math tex="x^2 = 9" /></p>
                    <p><span className="text-blue-600 font-bold">第二步</span>：开根号 → <Math tex="x = \pm 3" /></p>
                  </div>
                </div>
              </div>
            </Collapsible>

            {/* 方法一：因式分解法 */}
            <Collapsible title="方法一：因式分解法（最常用，优先试）" storageKey="sets-prereq:eq-factor">
              <div className="space-y-4 text-sm text-gray-700">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="font-bold text-blue-800 mb-2">核心思路</p>
                  <p className="text-blue-700 text-xs mb-2">如果 A × B = 0，那 A = 0 或 B = 0。所以把方程拆成<strong>"两个东西相乘 = 0"</strong>就解决了。</p>
                  <div className="bg-white rounded-lg p-3 border border-blue-100">
                    <p className="text-gray-800 text-sm font-bold mb-1">操作：</p>
                    <p className="text-gray-700">找两个数 p、q，使得 <span className="text-red-500 font-bold">p × q = 常数项</span> 且 <span className="text-red-500 font-bold">p + q = 一次项系数</span></p>
                    <p className="text-gray-700 mt-1">然后写成 <Math tex="(x + p)(x + q) = 0" /></p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <p className="font-bold text-gray-800">例：<Math tex="x^2 - 5x + 6 = 0" /></p>
                  <div className="pl-3 border-l-2 border-blue-300 space-y-2">
                    <div>
                      <p><span className="text-blue-600 font-bold">第一步</span>：找两个数，要满足：</p>
                      <p className="pl-4">乘起来 = 常数项 <strong>6</strong></p>
                      <p className="pl-4">加起来 = 一次项系数 <strong>-5</strong></p>
                    </div>
                    <div>
                      <p><span className="text-blue-600 font-bold">第二步</span>：试一试 → <span className="text-red-500 font-bold">-2 × -3 = 6 ✓，-2 + -3 = -5 ✓</span></p>
                    </div>
                    <div>
                      <p><span className="text-blue-600 font-bold">第三步</span>：写成乘积 → <Math tex="(x-2)(x-3) = 0" /></p>
                    </div>
                    <div>
                      <p><span className="text-blue-600 font-bold">第四步</span>：哪个括号 = 0 都行：</p>
                      <p className="pl-4"><Math tex="x = 2 \text{ 或 } x = 3" /></p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="font-bold text-blue-800 mb-2">三种"一眼看出"的特殊套路</p>
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-3 border border-blue-100">
                      <p className="font-bold text-gray-800 text-xs mb-1">套路一：平方差（没有 x 的一次项）</p>
                      <p className="text-xs text-gray-500 mb-1">看到 x² - 一个数 → 拆成 (x+?)(x-?)</p>
                      <p><Math tex="x^2 - 4 = 0 \;\Rightarrow\; (x+2)(x-2) = 0 \;\Rightarrow\; x = \pm 2" /></p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-blue-100">
                      <p className="font-bold text-gray-800 text-xs mb-1">套路二：提公因式（没有常数项）</p>
                      <p className="text-xs text-gray-500 mb-1">每项都有 x → 把 x 提出来</p>
                      <p><Math tex="x^2 - 3x = 0 \;\Rightarrow\; x(x - 3) = 0 \;\Rightarrow\; x = 0 \text{ 或 } x = 3" /></p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-blue-100">
                      <p className="font-bold text-gray-800 text-xs mb-1">套路三：完全平方（两个根一样）</p>
                      <p className="text-xs text-gray-500 mb-1">对照 <Math tex="(x+a)^2 = x^2+2ax+a^2" />，中间项=2倍乘积就是</p>
                      <p><Math tex="x^2 + 2x + 1 = 0 \;\Rightarrow\; (x+1)^2 = 0 \;\Rightarrow\; x = -1" />（重根）</p>
                    </div>
                  </div>
                </div>
              </div>
            </Collapsible>

            {/* 方法二：公式法 */}
            <Collapsible title="方法二：公式法（万能保底）" storageKey="sets-prereq:eq-formula">
              <div className="space-y-4 text-sm text-gray-700">
                <p className="text-gray-500 text-xs">直接套公式，万能方法，但算起来比因式分解麻烦。用之前要先<strong>认准 a、b、c</strong>。</p>

                {/* 怎么认 a b c */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="font-bold text-blue-800 mb-2">第零步：怎么认出 a、b、c？</p>
                  <p className="text-blue-700 text-xs mb-2">把方程对齐到标准形式 <Math tex="ax^2 + bx + c = 0" />，<strong>连着前面的符号一起读</strong>：</p>
                  <div className="bg-white rounded-lg p-3 border border-blue-100 space-y-2 text-sm">
                    <div>
                      <p className="text-gray-800"><Math tex="x^2 + 2x - 1 = 0" /></p>
                      <p className="text-gray-500 text-xs pl-3">a = <strong className="text-blue-600">1</strong>（x² 前面的数），b = <strong className="text-blue-600">+2</strong>（x 前面的数），c = <strong className="text-red-500">-1</strong>（常数项，<strong>符号要带上</strong>）</p>
                    </div>
                    <div>
                      <p className="text-gray-800"><Math tex="2x^2 - 3x + 5 = 0" /></p>
                      <p className="text-gray-500 text-xs pl-3">a = <strong className="text-blue-600">2</strong>，b = <strong className="text-red-500">-3</strong>（是负的！），c = <strong className="text-blue-600">+5</strong></p>
                    </div>
                  </div>
                  <p className="text-red-600 text-xs mt-2 font-bold">最常见的错：把 c = -1 写成 c = 1，符号丢了，整道题全错！</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs text-gray-500 mb-2">认准 a、b、c 之后，直接套：</p>
                  <Math tex="x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}" display />

                  <Collapsible title="这个公式怎么来的？（配方法推导，看懂就不用死背）" storageKey="sets-prereq:formula-derivation">
                    <div className="space-y-2 text-sm text-gray-700">
                      <p className="text-xs text-gray-500">从 <Math tex="ax^2 + bx + c = 0" /> 出发，一步步变形：</p>
                      <div className="pl-3 border-l-2 border-purple-300 space-y-2">
                        <div>
                          <p className="text-xs text-purple-600 font-bold">第一步：两边除以 a，让 x² 系数变 1</p>
                          <p><Math tex="x^2 + \frac{b}{a}x + \frac{c}{a} = 0" /></p>
                        </div>
                        <div>
                          <p className="text-xs text-purple-600 font-bold">第二步：常数项挪到右边</p>
                          <p><Math tex="x^2 + \frac{b}{a}x = -\frac{c}{a}" /></p>
                        </div>
                        <div>
                          <p className="text-xs text-purple-600 font-bold">第三步：配方！两边加上 <Math tex="\left(\frac{b}{2a}\right)^2" /></p>
                          <p><Math tex="x^2 + \frac{b}{a}x + \frac{b^2}{4a^2} = -\frac{c}{a} + \frac{b^2}{4a^2}" /></p>
                        </div>
                        <div>
                          <p className="text-xs text-purple-600 font-bold">第四步：左边完全平方，右边通分</p>
                          <p><Math tex="\left(x + \frac{b}{2a}\right)^2 = \frac{b^2 - 4ac}{4a^2}" /></p>
                        </div>
                        <div>
                          <p className="text-xs text-purple-600 font-bold">第五步：两边开根号</p>
                          <p><Math tex="x + \frac{b}{2a} = \pm\frac{\sqrt{b^2 - 4ac}}{2a}" /></p>
                        </div>
                        <div>
                          <p className="text-xs text-purple-600 font-bold">第六步：移项，搞定！</p>
                          <p><Math tex="x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}" /></p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-2 bg-purple-50 p-2 rounded">所以求根公式本质上就是<strong>配方法</strong>的通用版。理解了"配方→开根→移项"这三步，公式就记住了。</p>
                    </div>
                  </Collapsible>

                  <div className="mt-3 text-sm space-y-1 bg-white rounded-lg p-3 border border-gray-100">
                    <p className="font-bold text-gray-800 text-xs">根号里面的 <Math tex="\Delta = b^2 - 4ac" /> 叫"判别式"，决定有几个解：</p>
                    <p className="pl-4"><Math tex="\Delta > 0" /> → 两个不同的解（最常见）</p>
                    <p className="pl-4"><Math tex="\Delta = 0" /> → 只有一个解（重根）</p>
                    <p className="pl-4"><Math tex="\Delta < 0" /> → 无解（根号里是负数，开不出来）</p>
                  </div>
                </div>

                {/* 变式：b 是偶数 */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="font-bold text-green-800 mb-2">变式：当 b 是偶数时（省一半计算量！）</p>
                  <p className="text-xs text-green-700 mb-2">设 <Math tex="b = 2b'" />（也就是 <Math tex="b' = \frac{b}{2}" />），公式简化为：</p>
                  <div className="bg-white rounded-lg p-3 border border-green-100">
                    <Math tex="x = \frac{-b' \pm \sqrt{b'^2 - ac}}{a}" display />
                  </div>
                  <p className="text-xs text-green-600 mt-2">根号里也变简单了：<Math tex="\Delta' = b'^2 - ac" />（不用乘 4 了）</p>
                  <div className="bg-white rounded-lg p-3 border border-green-100 mt-2">
                    <p className="font-bold text-gray-800 text-xs mb-1">例：<Math tex="x^2 + 2x - 1 = 0" />（b = 2 是偶数）</p>
                    <div className="pl-3 border-l-2 border-green-300 space-y-1 text-sm text-gray-700">
                      <p><Math tex="b' = 1" />，<Math tex="\Delta' = 1^2 - 1 \times (-1) = 2" /></p>
                      <p><Math tex="x = \dfrac{-1 \pm \sqrt{2}}{1} = -1 \pm \sqrt{2}" /></p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold text-gray-800 mb-2">例（完整公式）：<Math tex="x^2 + 2x - 1 = 0" /></p>
                  <div className="pl-3 border-l-2 border-blue-300 space-y-1.5 text-gray-700">
                    <p><span className="text-blue-600 font-bold">认出 a, b, c</span>：a = 1，b = 2，c = <strong className="text-red-500">-1</strong>（别丢负号！）</p>
                    <p><span className="text-blue-600 font-bold">算判别式</span>：<Math tex="\Delta = 2^2 - 4(1)(-1) = 4 + 4 = 8 > 0" /> ✓ 有两个解</p>
                    <p><span className="text-blue-600 font-bold">套公式</span>：<Math tex="x = \dfrac{-2 \pm \sqrt{8}}{2} = \dfrac{-2 \pm 2\sqrt{2}}{2} = -1 \pm \sqrt{2}" /></p>
                  </div>
                </div>
              </div>
            </Collapsible>

            {/* 方法三：配方法 */}
            <Collapsible title="方法三：配方法（公式法的本质）" storageKey="sets-prereq:eq-complete-square">
              <div className="space-y-4 text-sm text-gray-700">
                <p className="text-gray-500 text-xs">核心思路：把方程凑成 <Math tex="(x + ?)^2 = \text{某个数}" /> 的形式，然后用方法零（直接开平方）解出来。</p>

                {/* 先讲规则 */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="font-bold text-blue-800 mb-2">关键操作：怎么"凑"完全平方？</p>
                  <p className="text-blue-700 text-xs mb-2">回忆完全平方公式：<Math tex="(x + a)^2 = x^2 + 2ax + a^2" /></p>
                  <p className="text-blue-700 text-xs mb-2">反过来看：如果你有 <Math tex="x^2 + 2ax" />，<strong>只差一个 <Math tex="a^2" /></strong> 就能凑成 <Math tex="(x+a)^2" /></p>
                  <div className="bg-white rounded-lg p-3 border border-blue-100 mt-2">
                    <p className="text-gray-800 text-sm font-bold mb-1">所以操作就是：</p>
                    <p className="text-gray-700">看 x 前面的系数 → 除以 2 → 平方 → 两边都加上这个数</p>
                    <p className="text-blue-600 text-xs mt-2 font-bold">口诀："<strong>一次项系数 ÷ 2，再平方</strong>"</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-blue-100 mt-2 text-xs text-gray-600">
                    <p className="mb-1">验证：<Math tex="x^2 + 6x" />，x 前面系数是 6</p>
                    <p>6 ÷ 2 = 3，3² = <strong>9</strong> → 加 9 → <Math tex="x^2 + 6x + 9 = (x+3)^2" /> ✓</p>
                  </div>
                </div>

                {/* 例1：完整步骤 */}
                <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <p className="font-bold text-gray-800">例1：<Math tex="x^2 + 6x + 5 = 0" /></p>
                  <div className="pl-3 border-l-2 border-blue-300 space-y-2">
                    <div>
                      <p><span className="text-blue-600 font-bold">第一步</span>：常数项移到右边</p>
                      <p className="pl-4"><Math tex="x^2 + 6x = -5" /></p>
                    </div>
                    <div>
                      <p><span className="text-blue-600 font-bold">第二步</span>：x 前面系数是 6 → <span className="text-red-500 font-bold">6 ÷ 2 = 3，3² = 9</span> → 两边都加 9</p>
                      <p className="pl-4"><Math tex="x^2 + 6x + 9 = -5 + 9" /></p>
                    </div>
                    <div>
                      <p><span className="text-blue-600 font-bold">第三步</span>：左边变成完全平方，右边算出来</p>
                      <p className="pl-4"><Math tex="(x + 3)^2 = 4" /></p>
                    </div>
                    <div>
                      <p><span className="text-blue-600 font-bold">第四步</span>：直接开平方（回到方法零）</p>
                      <p className="pl-4"><Math tex="x + 3 = \pm 2" /></p>
                      <p className="pl-4"><Math tex="x = -3 + 2 = -1 \quad \text{或} \quad x = -3 - 2 = -5" /></p>
                    </div>
                  </div>
                </div>

                {/* 例2 */}
                <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <p className="font-bold text-gray-800">例2：<Math tex="x^2 - 4x + 1 = 0" /></p>
                  <div className="pl-3 border-l-2 border-green-300 space-y-2">
                    <div>
                      <p>常数项移右边：<Math tex="x^2 - 4x = -1" /></p>
                    </div>
                    <div>
                      <p>x 前面系数是 -4 → <span className="text-red-500 font-bold">-4 ÷ 2 = -2，(-2)² = 4</span> → 两边都加 4</p>
                      <p className="pl-4"><Math tex="x^2 - 4x + 4 = -1 + 4" /></p>
                    </div>
                    <div>
                      <p><Math tex="(x - 2)^2 = 3" /></p>
                    </div>
                    <div>
                      <p><Math tex="x = 2 \pm \sqrt{3}" /></p>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-gray-400">配方法就是求根公式推导中的那几步。掌握了配方法，求根公式就不用死记了——你随时可以自己推出来。</p>
              </div>
            </Collapsible>

            {/* 总结 */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 text-center">
              <p className="text-sm text-orange-600 mb-1">选哪个方法？</p>
              <p className="text-base font-bold text-gray-800">先试因式分解 → 搞不定再配方或套公式</p>
              <p className="text-xs text-gray-500 mt-1">高考90%的方程都能因式分解，配方法和公式法是保底的</p>
            </div>

            <PracticeCard questions={setsPrereqPractice1} />

            <CalloutCard variant="warning" title="易错点">
              <p>找两个数时注意<strong>符号</strong>：乘起来=6、加起来=-5，那就是 -2 和 -3（都是负的）</p>
              <p>公式法别忘了 <strong>±</strong>，两个根都要写</p>
              <p><Math tex="\Delta < 0" /> 意味着<strong>无实数根</strong>，集合可能是空集</p>
            </CalloutCard>
          </div>
        </Collapsible>
      </section>

        {/* Section 2: Quadratic Inequalities */}
        <section id="sp-inequality" className="mb-6 scroll-mt-4">
          <Collapsible title="二、解一元二次不等式（集合最核心的前置技能！）" defaultOpen storageKey="sets-prereq:inequality" headerExtra={<SpeakButton text={setsPrereqNarrations.inequality} />}>
            <p className="text-xs text-blue-600 mb-3">🎯 学完你能：用"三步走"方法独立解一元二次不等式，写出集合描述法的解集。</p>
            <div className="space-y-4 text-sm text-gray-700">

            {/* 二次函数前置 */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="font-bold text-blue-800 mb-2">先搞清楚：二次函数的图像长什么样？</p>
              <p className="text-blue-700 mb-2">不等式的解法靠的是<strong>二次函数的图像</strong>，所以要先知道图像的基本规律。</p>
              <div className="space-y-2 text-sm">
                <div className="bg-white rounded-lg p-3 border border-blue-100">
                  <p className="font-bold text-gray-800 text-xs mb-1">二次函数：<Math tex="y = ax^2 + bx + c" /></p>
                  <p className="text-gray-600">图像是一条<strong>抛物线</strong>（U 形曲线），开口方向由 a 决定：</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white rounded-lg p-3 border border-blue-100 text-center">
                    <p className="font-bold text-blue-600 text-xs mb-1">a {'>'} 0 → 开口朝上 ∪</p>
                    <div className="text-3xl leading-none">∪</div>
                    <p className="text-xs text-gray-500 mt-1">像碗一样，<strong>底部是最低点</strong></p>
                    <p className="text-xs text-gray-400">两边往上走 → 两边 y {'>'} 0</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-blue-100 text-center">
                    <p className="font-bold text-red-500 text-xs mb-1">a {'<'} 0 → 开口朝下 ∩</p>
                    <div className="text-3xl leading-none">∩</div>
                    <p className="text-xs text-gray-500 mt-1">像山丘，<strong>顶部是最高点</strong></p>
                    <p className="text-xs text-gray-400">两边往下走 → 两边 y {'<'} 0</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3 border border-blue-100">
                  <p className="font-bold text-gray-800 text-xs mb-2">抛物线和 x 轴的交点 = 方程 <Math tex="ax^2+bx+c=0" /> 的根</p>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="text-center">
                      <div className="bg-gray-50 rounded overflow-hidden">
                        <Mafs viewBox={{ x: [-3, 3], y: [-1, 4], padding: 0 }} preserveAspectRatio={false} height={100}>
                          <Coordinates.Cartesian xAxis={{ lines: false, labels: () => '' }} yAxis={{ lines: false, labels: () => '' }} />
                          <Plot.OfX y={(x: number) => x * x - 1} color="#6366f1" />
                          <Point x={-1} y={0} color="#ef4444" />
                          <Point x={1} y={0} color="#ef4444" />
                        </Mafs>
                      </div>
                      <p className="text-xs font-bold text-green-600 mt-1">Δ {'>'} 0</p>
                      <p className="text-xs text-gray-500">两个交点 → 两个根</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-50 rounded overflow-hidden">
                        <Mafs viewBox={{ x: [-3, 3], y: [-1, 4], padding: 0 }} preserveAspectRatio={false} height={100}>
                          <Coordinates.Cartesian xAxis={{ lines: false, labels: () => '' }} yAxis={{ lines: false, labels: () => '' }} />
                          <Plot.OfX y={(x: number) => x * x} color="#6366f1" />
                          <Point x={0} y={0} color="#f59e0b" />
                        </Mafs>
                      </div>
                      <p className="text-xs font-bold text-amber-500 mt-1">Δ = 0</p>
                      <p className="text-xs text-gray-500">一个交点 → 重根</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-50 rounded overflow-hidden">
                        <Mafs viewBox={{ x: [-3, 3], y: [-1, 4], padding: 0 }} preserveAspectRatio={false} height={100}>
                          <Coordinates.Cartesian xAxis={{ lines: false, labels: () => '' }} yAxis={{ lines: false, labels: () => '' }} />
                          <Plot.OfX y={(x: number) => x * x + 1} color="#6366f1" />
                        </Mafs>
                      </div>
                      <p className="text-xs font-bold text-red-500 mt-1">Δ {'<'} 0</p>
                      <p className="text-xs text-gray-500">没交点 → 无实数根</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-blue-600 mt-2 font-bold">下面的口诀假设 a {'>'} 0（开口朝上）。如果 a {'<'} 0，先两边乘 -1 变成 a {'>'} 0 再用口诀。</p>
            </div>

            <CalloutCard variant="warning" title="核心方法：三步走" icon={null}>
              <p>1. 化成标准形式 <Math tex="ax^2 + bx + c > 0" /></p>
              <p>2. 解对应方程，找到两个根 <Math tex="x_1 < x_2" /></p>
              <p>3. 用口诀写答案</p>
            </CalloutCard>

            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5 text-center">
              <p className="text-sm text-orange-600 mb-2">口诀（必记！）</p>
              <p className="text-lg font-bold text-gray-800">大于取两边，小于取中间</p>
              <div className="mt-3 text-sm text-gray-600 space-y-1 text-left">
                <p><Math tex="ax^2+bx+c > 0 \;\Rightarrow\; x < x_1 \text{ 或 } x > x_2" />（取两边）</p>
                <p><Math tex="ax^2+bx+c < 0 \;\Rightarrow\; x_1 < x < x_2" />（取中间）</p>
                <p><Math tex="ax^2+bx+c \geq 0 \;\Rightarrow\; x \leq x_1 \text{ 或 } x \geq x_2" />（含等号）</p>
                <p><Math tex="ax^2+bx+c \leq 0 \;\Rightarrow\; x_1 \leq x \leq x_2" />（含等号）</p>
              </div>
            </div>

            {/* 抛物线图解 */}
            <div>
              <p className="font-bold mb-2">图解：为什么口诀是对的？</p>
              <p className="text-xs text-gray-500 mb-3">
                <Math tex="y = x^2 - 3x - 4 = (x+1)(x-4)" /> 的图像（a {'>'} 0，开口朝上）：
              </p>
              <div className="bg-gray-50 rounded-xl p-2 overflow-hidden">
                <Mafs viewBox={{ x: [-3, 6], y: [-6, 4], padding: 0 }} preserveAspectRatio={false} height={260}>
                  <Coordinates.Cartesian xAxis={{ lines: 1 }} yAxis={{ lines: 1 }} />
                  <Plot.OfX y={(x: number) => x * x - 3 * x - 4} color="#6366f1" />
                  <Point x={-1} y={0} color="#ef4444" />
                  <Point x={4} y={0} color="#ef4444" />
                  <MafsText x={-1} y={1} size={14}>x₁=-1</MafsText>
                  <MafsText x={4} y={1} size={14}>x₂=4</MafsText>
                  <MafsText x={-2.2} y={3} size={16} color="#16a34a">y{'>'} 0</MafsText>
                  <MafsText x={1.5} y={-4} size={16} color="#ef4444">y{'<'} 0</MafsText>
                  <MafsText x={5.3} y={3} size={16} color="#16a34a">y{'>'} 0</MafsText>
                </Mafs>
              </div>
              <div className="mt-3 text-sm space-y-1 text-gray-600">
                <p>🔴 两个根 <Math tex="x_1 = -1, x_2 = 4" /> 是抛物线和 x 轴的交点</p>
                <p>🟢 <strong>两边</strong>（x {'<'} -1 和 x {'>'} 4）：抛物线在 x 轴<strong>上面</strong> → y {'>'} 0</p>
                <p>🔴 <strong>中间</strong>（-1 {'<'} x {'<'} 4）：抛物线在 x 轴<strong>下面</strong> → y {'<'} 0</p>
                <p className="text-xs text-gray-400 mt-1">所以"大于取两边"就是取 y {'>'} 0 的部分，"小于取中间"就是取 y {'<'} 0 的部分。</p>
              </div>
            </div>

            <div>
              <p className="font-bold mb-2">例题演练</p>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold text-gray-800 mb-1">例1：<Math tex="x^2 - 3x - 4 < 0" /></p>
                  <p>解方程：<Math tex="(x-4)(x+1) = 0 \;\Rightarrow\; x = -1, 4" /></p>
                  <p>"小于取中间" → <Math tex="-1 < x < 4" /></p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold text-gray-800 mb-1">例2：<Math tex="x^2 - 2x - 3 \geq 0" /></p>
                  <p>解方程：<Math tex="(x-3)(x+1) = 0 \;\Rightarrow\; x = -1, 3" /></p>
                  <p>"大于取两边"（含等号） → <Math tex="x \leq -1 \text{ 或 } x \geq 3" /></p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold text-gray-800 mb-1">例3：<Math tex="x^2 - 4x + 3 \leq 0" /></p>
                  <p>解方程：<Math tex="(x-1)(x-3) = 0 \;\Rightarrow\; x = 1, 3" /></p>
                  <p>"小于取中间"（含等号） → <Math tex="1 \leq x \leq 3" /></p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold text-gray-800 mb-1">例4：<Math tex="x^2 + 2x > 0" /></p>
                  <p>解方程：<Math tex="x(x+2) = 0 \;\Rightarrow\; x = -2, 0" /></p>
                  <p>"大于取两边" → <Math tex="x < -2 \text{ 或 } x > 0" /></p>
                </div>
              </div>
            </div>

            <CalloutCard variant="tip">
              <p><strong>为什么？</strong>二次函数 <Math tex="y = ax^2+bx+c" />（a{'>'} 0）的图像是开口朝上的抛物线。两个根之间在 x 轴下面（{'<'} 0），两边在 x 轴上面（{'>'} 0）。</p>
            </CalloutCard>

            <PracticeCard questions={setsPrereqPractice2} />

            <CalloutCard variant="warning" title="易错点">
              <p><strong>“大于”和“小于”别搞反</strong>：大于取两边（远离根），小于取中间（夹在根之间）</p>
              <p><strong>含等号别漏</strong>：≥ 和 ≤ 的解集端点要用 ≤ 和 ≥</p>
              <p><strong>a {'<'} 0 时先两边乘 -1</strong>：不等号方向要反转！</p>
            </CalloutCard>
          </div>
        </Collapsible>
      </section>

      {/* Section 3: Number Line */}
      <section id="sp-numberline" className="mb-6 scroll-mt-4">
        <Collapsible title="三、数轴的使用" defaultOpen storageKey="sets-prereq:numberline" headerExtra={<SpeakButton text={setsPrereqNarrations.numberLine} />}>
          <p className="text-xs text-blue-600 mb-3">🎯 学完你能：在数轴上正确表示不等式的解集，分清 ○ 和 ●。</p>
          <div className="space-y-3 text-sm text-gray-700">
            <p><strong>数轴</strong> = 一条画了数字的直线，左边小右边大。</p>

            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-500 mb-1">例1：<Math tex="x > 2" />（不含 2，向右延伸）</p>
                <div className="rounded-lg overflow-hidden border border-gray-200">
                  <Mafs viewBox={{ x: [-4, 6], y: [-0.8, 0.8], padding: 0 }} preserveAspectRatio={false} height={70}>
                    <Coordinates.Cartesian xAxis={{ lines: 1 }} yAxis={false} />
                    <MafsText x={0} y={-0.45} size={12}>0</MafsText>
                    <Line.Segment point1={[2, 0]} point2={[6, 0]} color="#3b82f6" weight={4} />
                    <Point x={2} y={0} color="white" />
                    <MafsText x={2} y={0.5} size={12}>○ 不含</MafsText>
                  </Mafs>
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">例2：<Math tex="-1 < x \leq 3" />（-1 不含，3 含）</p>
                <div className="rounded-lg overflow-hidden border border-gray-200">
                  <Mafs viewBox={{ x: [-4, 6], y: [-0.8, 0.8], padding: 0 }} preserveAspectRatio={false} height={70}>
                    <Coordinates.Cartesian xAxis={{ lines: 1 }} yAxis={false} />
                    <MafsText x={0} y={-0.45} size={12}>0</MafsText>
                    <Line.Segment point1={[-1, 0]} point2={[3, 0]} color="#ef4444" weight={4} />
                    <Point x={-1} y={0} color="white" />
                    <Point x={3} y={0} color="#ef4444" />
                    <MafsText x={-1} y={0.5} size={12}>○</MafsText>
                    <MafsText x={3} y={0.5} size={12}>●</MafsText>
                  </Mafs>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
              <p className="font-bold mb-2">在数轴上表示不等式</p>
              <p><Math tex="x > 2" /> → 2 右边，不含 2（空心圆 ○）</p>
              <p><Math tex="x \geq 2" /> → 2 右边，含 2（实心圆 ●）</p>
              <p><Math tex="-1 < x \leq 3" /> → -1 到 3，-1 不含（○），3 含（●）</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-blue-800 font-bold text-sm">关键符号</p>
              <p className="text-blue-700 text-sm mt-1">○ 空心圆 = 不包含（对应 {'<'} 或 {'>'}）</p>
              <p className="text-blue-700 text-sm">● 实心圆 = 包含（对应 ≤ 或 ≥）</p>
            </div>

            <PracticeCard questions={setsPrereqPractice3} />

            <CalloutCard variant="warning" title="易错点">
              <p>{'<'} 和 ≤ 的区别就在于<strong>圆的空实</strong>：{'<'} 空心、≤ 实心</p>
              <p>做集合运算时，<strong>画数轴是最直观的方法</strong></p>
              <p>补集运算时<strong>端点开闭互换</strong>：原来 ○ 变 ●，原来 ● 变 ○</p>
            </CalloutCard>
          </div>
        </Collapsible>
      </section>

      {/* Section 4: Interval Notation */}
      <section id="sp-interval" className="mb-6 scroll-mt-4">
        <Collapsible title="四、区间表示法" defaultOpen storageKey="sets-prereq:interval" headerExtra={<SpeakButton text={setsPrereqNarrations.interval} />}>
          <p className="text-xs text-blue-600 mb-3">🎯 学完你能：把不等式的解集用区间表示，正确使用小括号和中括号。</p>
          <div className="space-y-3 text-sm text-gray-700">
            <p>区间是不等式的另一种写法，更简洁。</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-3 py-2 text-left">不等式</th>
                    <th className="border border-gray-200 px-3 py-2 text-left">区间写法</th>
                    <th className="border border-gray-200 px-3 py-2 text-left">说明</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['a < x < b', '(a, b)', '开区间'],
                    ['a \\leq x \\leq b', '[a, b]', '闭区间'],
                    ['a \\leq x < b', '[a, b)', '左闭右开'],
                    ['a < x \\leq b', '(a, b]', '左开右闭'],
                    ['x > a', '(a, +\\infty)', '∞ 永远用小括号'],
                    ['x \\geq a', '[a, +\\infty)', ''],
                    ['x < b', '(-\\infty, b)', ''],
                    ['x \\leq b', '(-\\infty, b]', ''],
                    ['\\text{全体实数}', '(-\\infty, +\\infty)', ''],
                  ].map(([ineq, interval, note], idx) => (
                    <tr key={idx} className="hover:bg-blue-50">
                      <td className="border border-gray-200 px-3 py-2"><Math tex={ineq} /></td>
                      <td className="border border-gray-200 px-3 py-2"><Math tex={interval} /></td>
                      <td className="border border-gray-200 px-3 py-2 text-gray-500">{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-gray-50 rounded-lg p-3 space-y-1">
              <p className="font-bold">规则：</p>
              <p>小括号 ( ) → 不包含端点（开）</p>
              <p>中括号 [ ] → 包含端点（闭）</p>
              <p>无穷 ∞ → 永远用小括号</p>
            </div>

            <PracticeCard questions={setsPrereqPractice4} />

            <CalloutCard variant="warning" title="易错点">
              <p><strong>∞ 永远用小括号</strong>：<Math tex="[3, +\infty)" /> ✓，<Math tex="[3, +\infty]" /> ✗</p>
              <p><strong>∪ 是并集符号</strong>，表示“或”，用来连接不相邻的区间</p>
              <p>区间写法和数轴对应：<strong>小括号 = ○，中括号 = ●</strong></p>
            </CalloutCard>
          </div>
        </Collapsible>
      </section>

      {/* Formula Cheat Sheet */}
      <section className="mb-8">
        <Collapsible title="📌 公式速查表" storageKey="sets-prereq:cheatsheet">
          <div className="space-y-4 text-sm text-gray-700">
            <div>
              <p className="font-bold text-gray-800 mb-2">直接开平方法</p>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <p><Math tex="x^2 = k \;\Rightarrow\; x = \pm\sqrt{k}" /></p>
                <p><Math tex="(x+a)^2 = k \;\Rightarrow\; x+a = \pm\sqrt{k}" /> → 移项</p>
                <p className="text-gray-500 text-xs">没有一次项 bx 的时候直接用，最快</p>
              </div>
            </div>
            <div>
              <p className="font-bold text-gray-800 mb-2">因式分解</p>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <p>平方差：<Math tex="x^2 - a^2 = (x+a)(x-a)" /></p>
                <p>完全平方：<Math tex="x^2 + 2ax + a^2 = (x+a)^2" /></p>
                <p>提公因式：<Math tex="x^2 - 3x = x(x-3)" /></p>
                <p className="text-gray-500 text-xs">一般：找两数，乘=常数项，加=一次项系数</p>
              </div>
            </div>
            <div>
              <p className="font-bold text-gray-800 mb-2">求根公式</p>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <Math tex="x = \dfrac{-b \pm \sqrt{b^2-4ac}}{2a}" display />
                <p><Math tex="\Delta = b^2-4ac" />：{'>'} 0 两根，= 0 重根，{'<'} 0 无实根</p>
                <p>b 偶数时：令 <Math tex="b'=\tfrac{b}{2}" />，则 <Math tex="x = \dfrac{-b' \pm \sqrt{b'^2-ac}}{a}" /></p>
              </div>
            </div>
            <div>
              <p className="font-bold text-gray-800 mb-2">配方法</p>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <p>常数项移右边 → 两边加 <Math tex="\left(\dfrac{b}{2}\right)^2" /> → 左边变 <Math tex="\left(x+\dfrac{b}{2}\right)^2" /> → 开平方</p>
                <p className="text-gray-500 text-xs">口诀：<strong className="text-gray-700">一次项系数 ÷ 2，再平方</strong></p>
              </div>
            </div>
            <div>
              <p className="font-bold text-gray-800 mb-2">一元二次不等式（a {'>'} 0）</p>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <p>{'>'} 0 → 取两边：<Math tex="x < x_1 \text{ 或 } x > x_2" /></p>
                <p>{'<'} 0 → 取中间：<Math tex="x_1 < x < x_2" /></p>
                <p className="text-gray-500 text-xs">口诀：<strong className="text-gray-700">大于取两边，小于取中间</strong></p>
              </div>
            </div>
            <div>
              <p className="font-bold text-gray-800 mb-2">数轴 + 区间</p>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <p>○ 空心 → 不含（{'<'} 或 {'>'}）→ 小括号 ( )</p>
                <p>● 实心 → 包含（≤ 或 ≥）→ 中括号 [ ]</p>
                <p>∞ → 永远用小括号</p>
                <p>∪ → 并集（"或"的意思）</p>
                <p className="text-gray-500 text-xs">补集：○ ↔ ● 互换</p>
              </div>
            </div>
          </div>
        </Collapsible>
      </section>

      {/* Section 5: Quiz */}
      <section id="sp-quiz" className="mb-8 scroll-mt-4">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-green-500 text-white flex items-center justify-center text-sm font-bold">
            5
          </span>
          选择题自测
        </h2>
        <QuizPanel module="sets-prereq" questions={setsPrereqQuizQuestions} title="前置知识自测" description="16道选择题，覆盖解方程、解不等式、区间表示、数轴全部知识点" />
      </section>

      </LessonLayout>
    </div>
  );
}
