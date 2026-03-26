import { Mafs, Coordinates, Point, Line, Plot } from 'mafs';
import { DebugMafs, DText, DebugToggle } from '@/features/trig/MafsDebug';

import { Math, Collapsible, SpeakButton, QuizPanel, PageHeader, LessonLayout, CalloutCard, PracticeCard, ExportButton, PageBreak } from '@/components/shared';
import { setsPrereqNarrations } from './data/1.1.5/1.1.5-prereq-narrations';
import { setsPrereqPractice1, setsPrereqPractice2 } from './data/1.2/1.2-practice';
import { setsPrereqProgressItems } from './data/1.1.5/1.1.5-prereq-progress';
import { setsPrereqQuizQuestions } from './data/1.1.5/1.1.5-prereq-quiz';
import { SetsPrereqAnswers, setsPrereqExplanations } from './1.1.5-prereq-answers';
import { useProgress, usePrintMode } from '@/hooks';
import { scrollToId } from '@/lib/scroll';


export function SetsPrereqPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('sets-prereq', setsPrereqProgressItems);
  const { isPrinting, printOptions } = usePrintMode();

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

      <div className="flex justify-end mb-4 print:hidden">
        <ExportButton title="1.1.5 集合前置知识" />
      </div>

      <div className="bg-gray-50 rounded p-3 mb-3 text-gray-800 print:p-1 print:mb-0.5">
        <p className="font-bold text-gray-800 mb-1 print:mb-0.5">📋 知识地图</p>
        <div className="grid grid-cols-2 gap-1 print:gap-y-0.5">
          <button onClick={() => scrollToId('sp-equation')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">一、解一元二次方程（开平方 + 因式分解 + 公式法）</button>
          <button onClick={() => scrollToId('sp-inequality')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">二、解一元二次不等式（大于取两边，小于取中间）</button>
          <button onClick={() => scrollToId('sp-numberline')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">三、解集的表示（数轴 + 区间）</button>
          <button onClick={() => scrollToId('sp-quiz')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">四、选择题自测（16题）</button>
        </div>
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      {/* Section 1: Solving Quadratic Equations */}
      <section id="sp-equation" className="mb-0 scroll-mt-4">
        <Collapsible title="一、解一元二次方程" defaultOpen storageKey="sets-prereq:equation" headerExtra={<SpeakButton text={setsPrereqNarrations.equation} />}>
          <div className="space-y-0 text-lg text-gray-800">

            {/* 什么是一元二次方程 */}
            <div className="bg-blue-50 border border-blue-200 rounded p-2">
              <p className="font-bold text-blue-800 mb-1">先搞清楚：什么是一元二次方程？</p>
              <p className="text-blue-700">长这样的方程：<Math tex="ax^2 + bx + c = 0" />（其中 <Math tex="a \neq 0" />）</p>
              <p className="text-blue-700 mt-1">只有<strong>一个未知数 x</strong>，x 的最高次方是 <strong><Math tex="2" /></strong>，所以叫"一元二次"。</p>
              <p className="text-blue-600 mt-1">集合题里经常说"<Math tex="A = \{x \mid x^2 - 5x + 6 = 0\}" />"，你需要解出 x 才能知道集合里有什么元素。</p>
            </div>

            {/* 必背公式 */}
            <div className="border border-gray-400 overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="p-1.5 space-y-0.5 border-r border-gray-300">
                  <p className="font-bold text-orange-600">平方差公式</p>
                  <Math tex="a^2 - b^2 = (a+b)(a-b)" />
                  <p className="text-gray-800">看到"一个平方 减 另一个平方"就能用</p>
                </div>
                <div className="p-1.5 space-y-0.5">
                  <p className="font-bold text-orange-600">完全平方公式</p>
                  <p><Math tex="(a+b)^2 = a^2 + 2ab + b^2" /></p>
                  <p><Math tex="(a-b)^2 = a^2 - 2ab + b^2" /></p>
                  <p className="text-gray-800">中间项 = 2倍乘积，末项 = 那个数的平方</p>
                </div>
              </div>
            </div>

            {/* 方法零：直接开平方法 */}
            <div className="border border-gray-400 overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400">方法零：直接开平方法（最简单）</div>
              <div className="px-2 py-1 border-b border-gray-300 space-y-0.5">
                <p><strong>适用条件：</strong>方程能化成 <Math tex="x^2 = k" /> 或 <Math tex="(x+a)^2 = k" /> 的形式（没有单独的 <Math tex="x" /> 项）</p>
                <p><strong>做法：</strong>两边直接开根号，<span className="text-red-500 font-bold">记得写 ±</span></p>
              </div>
              <div className="grid grid-cols-2">
                <div className="p-1.5 space-y-0.5 border-r border-gray-300">
                  <div>
                    <p className="font-bold">例1：<Math tex="x^2 = 9" /></p>
                    <p>两边开根号：<Math tex="x = \pm\sqrt{9} = \pm 3" /></p>
                  </div>
                  <div>
                    <p className="font-bold">例2：<Math tex="(x-1)^2 = 4" /></p>
                    <p>开根号：<Math tex="x - 1 = \pm 2" /></p>
                    <p>移项：<Math tex="x = 1 + 2 = 3" /> 或 <Math tex="x = 1 - 2 = -1" /></p>
                  </div>
                </div>
                <div className="p-1.5 space-y-0.5">
                  <div>
                    <p className="font-bold">例3：<Math tex="2x^2 = 18" /></p>
                    <p>先除以 2：<Math tex="x^2 = 9" /></p>
                    <p>开根号：<Math tex="x = \pm 3" /></p>
                  </div>
                  <div>
                    <p className="font-bold">例4：<Math tex="(x+3)^2 = 5" /></p>
                    <p>开根号：<Math tex="x + 3 = \pm\sqrt{5}" /></p>
                    <p>移项：<Math tex="x = -3 \pm \sqrt{5}" /></p>
                  </div>
                </div>
              </div>
            </div>

            {/* 方法一：配方法 */}
            <div className="border border-gray-400 border-t-0 overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-700 border-b border-gray-400">方法一：配方法（公式法的本质）</div>
              <div className="px-2 py-1 border-b border-gray-300">
                <p>凑成 <Math tex="(x + ?)^2 = k" /> 的形式，然后开平方。口诀：<strong className="text-blue-600">一次项系数 ÷ 2，再平方</strong></p>
              </div>
              <div className="grid" style={{ gridTemplateColumns: '5fr 5fr' }}>
                <div className="p-1.5 space-y-0.5 border-r border-gray-300 text-[15px]">
                  <p className="font-bold">步骤</p>
                  <p><strong>①</strong> 常数项移到右边</p>
                  <p><strong>②</strong> x 前面系数 ÷ 2，平方，两边都加上</p>
                  <p><strong>③</strong> 左边变完全平方</p>
                  <p><strong>④</strong> 开平方解出 x</p>
                  <div className="bg-gray-50 rounded p-1.5 mt-1">
                    <p className="text-gray-800">验证：<Math tex="x^2 + 6x" />，<Math tex="6÷2=3" />，<Math tex="3^2=9" /></p>
                    <p className="text-gray-800">∴ <Math tex="x^2+6x+9 = (x+3)^2" /> ✓</p>
                  </div>
                </div>
                <div className="p-1.5 space-y-0.5 text-[15px]">
                  <p className="font-bold">例1：<Math tex="x^2 + 6x + 5 = 0" /></p>
                  <p><Math tex="x^2+6x = -5" />，两边加 9，得 <Math tex="(x+3)^2 = 4" /></p>
                  <p><Math tex="x+3 = \pm 2" />，∴ <Math tex="x = -1" /> 或 <Math tex="x = -5" /></p>
                  <p className="font-bold mt-1">例2：<Math tex="x^2 - 4x + 1 = 0" /></p>
                  <p><Math tex="x^2-4x = -1" />，两边加 4，得 <Math tex="(x-2)^2 = 3" /></p>
                  <p><Math tex="x = 2 \pm \sqrt{3}" /></p>
                </div>
              </div>
            </div>

            <PageBreak label="方法二" />

            {/* 方法二：因式分解法 */}
            <div className="border border-gray-400 overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-700 border-b border-gray-400">方法二：因式分解法（最常用，优先试）</div>
              <div className="px-2 py-1 border-b border-gray-300 text-[15px] space-y-0.5">
                <p><strong>原理：</strong><Math tex="A \times B = 0" />，则 <Math tex="A = 0" /> 或 <Math tex="B = 0" /></p>
                <p><strong>步骤：</strong>① 让一边 = 0　② 拆成两个括号相乘　③ 每个括号 = 0，解 <Math tex="x" /></p>
              </div>
              <div className="grid grid-cols-2">
                <div className="p-1.5 space-y-0.5 border-r border-b border-gray-300 text-[15px]">
                  <p className="font-bold">例1（提公因式）：<Math tex="x^2 - 3x = 0" /></p>
                  <p>两项都含 <Math tex="x" />，提到前面：</p>
                  <p className="pl-2"><Math tex="x(x - 3) = 0" /></p>
                  <p><Math tex="x = 0" /> 或 <Math tex="x - 3 = 0" /></p>
                  <p>∴ <Math tex="x = 0" /> 或 <Math tex="x = 3" /></p>
                </div>
                <div className="p-1.5 space-y-0.5 border-b border-gray-300 text-[15px]">
                  <p className="font-bold">例2（平方差）：<Math tex="x^2 - 4 = 0" /></p>
                  <p><Math tex="x^2" /> 是平方，<Math tex="4 = 2^2" /> 也是平方</p>
                  <p>套公式 <Math tex="a^2 - b^2 = (a+b)(a-b)" />：</p>
                  <p className="pl-2"><Math tex="(x+2)(x-2) = 0" /></p>
                  <p>∴ <Math tex="x = -2" /> 或 <Math tex="x = 2" /></p>
                </div>
                <div className="p-1.5 space-y-0.5 border-r border-gray-300 text-[15px]">
                  <p className="font-bold">例3（十字相乘）：<Math tex="x^2 - 5x + 6 = 0" /></p>
                  <p>想拆成 <Math tex="(x+\text{?})(x+\text{?}) = 0" /></p>
                  <p>找两个数，<span className="text-red-500 font-bold">乘起来 = 6，加起来 = -5</span></p>
                  <p>试 <Math tex="-2" /> 和 <Math tex="-3" />：</p>
                  <p className="pl-2"><Math tex="(-2) \times (-3) = 6" /> ✓，<Math tex="(-2)+(-3) = -5" /> ✓</p>
                  <p>∴ <Math tex="(x-2)(x-3) = 0" /></p>
                  <p>∴ <Math tex="x = 2" /> 或 <Math tex="x = 3" /></p>
                </div>
                <div className="p-1.5 space-y-0.5 text-[15px]">
                  <p className="font-bold">例4（完全平方）：<Math tex="x^2 + 6x + 9 = 0" /></p>
                  <p><Math tex="x^2" /> 是平方，<Math tex="9 = 3^2" /> 是平方</p>
                  <p>中间项 <Math tex="6x = 2 \times x \times 3" />，符合！</p>
                  <p>∴ <Math tex="(x+3)^2 = 0" /></p>
                  <p>∴ <Math tex="x = -3" />（重根，两个根一样）</p>
                </div>
              </div>
            </div>

            {/* 方法三：公式法 */}
            <div className="border border-gray-400 border-t-0 overflow-hidden">
              <div className="px-2 py-1 font-bold text-orange-700 border-b border-gray-400">方法三：公式法（万能保底）</div>
              <div className="px-2 py-1 border-b border-gray-300 text-[15px] space-y-0.5">
                <p><strong>适用：</strong>任何一元二次方程都能用，因式分解搞不定时的保底方法</p>
                <p><strong>步骤：</strong>① 写成 <Math tex="ax^2+bx+c=0" />　② 找出 <Math tex="a, b, c" />　③ 算 <Math tex="\Delta" />　④ 代入公式</p>
                <p><span className="text-red-500 font-bold">注意：<Math tex="a, b, c" /> 要连着符号一起读！</span>如 <Math tex="x^2+2x-1=0" /> 中 <Math tex="c=-1" />，不是 <Math tex="c=1" /></p>
              </div>
              <div className="grid grid-cols-2">
                <div className="p-1.5 space-y-0.5 border-r border-b border-gray-300 text-[15px]">
                  <p className="font-bold">求根公式</p>
                  <Math tex="x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}" display />
                  <p className="font-bold">判别式 <Math tex="\Delta = b^2 - 4ac" /></p>
                  <p><Math tex="\Delta > 0" />：两个不同的根</p>
                  <p><Math tex="\Delta = 0" />：两个相同的根（重根）</p>
                  <p><Math tex="\Delta < 0" />：无实数根</p>
                </div>
                <div className="p-1.5 space-y-0.5 border-b border-gray-300 text-[15px]">
                  <p className="font-bold">怎么用？四步走</p>
                  <p><strong>第①步</strong>　对照 <Math tex="ax^2+bx+c=0" />，写出 <Math tex="a, b, c" /></p>
                  <p><strong>第②步</strong>　算 <Math tex="\Delta = b^2 - 4ac" /></p>
                  <p><strong>第③步</strong>　如果 <Math tex="\Delta \geq 0" />，代入公式</p>
                  <p><strong>第④步</strong>　化简得答案</p>
                  <p className="text-red-500 font-bold mt-1">c 前面是减号，c 就是负数！</p>
                </div>
                <div className="p-1.5 space-y-0.5 border-r border-gray-300 text-[15px]">
                  <p className="font-bold">例1：<Math tex="x^2 + 2x - 1 = 0" /></p>
                  <p>① <Math tex="a = 1,\; b = 2,\; c =" /><strong className="text-red-500"><Math tex="-1" /></strong></p>
                  <p>② <Math tex="\Delta = 2^2 - 4(1)(-1) = 4 + 4 = 8" /></p>
                  <p>③ <Math tex="x = \dfrac{-2 \pm \sqrt{8}}{2} = \dfrac{-2 \pm 2\sqrt{2}}{2}" /></p>
                  <p>④ <Math tex="x = -1 \pm \sqrt{2}" /></p>
                </div>
                <div className="p-1.5 space-y-0.5 text-[15px]">
                  <p className="font-bold">例2：<Math tex="2x^2 - 3x - 5 = 0" /></p>
                  <p>① <Math tex="a = 2,\; b = -3,\; c = -5" /></p>
                  <p>② <Math tex="\Delta = (-3)^2 - 4(2)(-5) = 9 + 40 = 49" /></p>
                  <p>③ <Math tex="x = \dfrac{3 \pm 7}{4}" /></p>
                  <p>④ <Math tex="x = \dfrac{10}{4} = \dfrac{5}{2}" /> 或 <Math tex="x = \dfrac{-4}{4} = -1" /></p>
                </div>
              </div>
              <div className="grid grid-cols-2 border-t border-gray-300 text-[15px]">
                <div className="p-1.5 space-y-0.5 border-r border-gray-300">
                  <p className="font-bold text-green-800">b 是偶数时的简化公式</p>
                  <p>令 <Math tex="b' = \dfrac{b}{2}" />，则：</p>
                  <Math tex="x = \dfrac{-b' \pm \sqrt{b'^2 - ac}}{a}" display />
                  <p>省去分子分母都除以 2 的步骤</p>
                </div>
                <div className="p-1.5 space-y-0.5">
                  <p className="font-bold text-gray-600">公式推导（看懂就不用死背）</p>
                  <p>从 <Math tex="ax^2 + bx + c = 0" /> 出发：</p>
                  <p>① 除以 <Math tex="a" />：<Math tex="x^2 + \tfrac{b}{a}x = -\tfrac{c}{a}" /></p>
                  <p>② 配方：<Math tex="\left(x + \tfrac{b}{2a}\right)^2 = \tfrac{b^2 - 4ac}{4a^2}" /></p>
                  <p>③ 开根移项：<Math tex="x = \tfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}" /></p>
                </div>
              </div>
            </div>


            <PracticeCard questions={setsPrereqPractice1} explanations={setsPrereqExplanations} />

            <CalloutCard variant="warning" title="易错点" compact>
              <p className="text-base">开平方别忘 <strong>±</strong>，配方法加的数 = （一次项系数 ÷ 2）²，两边都要加</p>
              <p className="text-base">因式分解找两数注意<strong>符号</strong>：乘积和加和都要带正负</p>
              <p className="text-base">公式法 <Math tex="a,b,c" /> <strong>连着符号读</strong>，<Math tex="c" /> 前是减号则 <Math tex="c" /> 是负数</p>
            </CalloutCard>
          </div>
        </Collapsible>
      </section>

        {/* Section 2: Quadratic Inequalities */}
        <section id="sp-inequality" className="mb-0 scroll-mt-4">
          <Collapsible title="二、解一元二次不等式（集合最核心的前置技能！）" defaultOpen storageKey="sets-prereq:inequality" headerExtra={<SpeakButton text={setsPrereqNarrations.inequality} />}>
            <p className="text-blue-600 mb-1">学完你能：用"三步走"方法独立解一元二次不等式，写出集合描述法的解集。</p>
            <div className="space-y-1 text-lg text-gray-800">

            {/* 二次函数前置 */}
            <div className="bg-blue-50 border border-blue-200 rounded p-2">
              <p className="font-bold text-blue-800 mb-1">先搞清楚：二次函数的图像长什么样？</p>
              <p className="text-blue-700 mb-1">不等式的解法靠的是<strong>二次函数的图像</strong>，所以要先知道图像的基本规律。</p>
              <div className="space-y-1.5">
                <div className="bg-white rounded p-2 border border-blue-100">
                  <p className="font-bold text-gray-800 mb-0.5">二次函数：<Math tex="y = ax^2 + bx + c" /></p>
                  <p className="text-gray-800">图像是一条<strong>抛物线</strong>（U 形曲线），开口方向由 a 决定：</p>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="bg-white rounded p-2 border border-blue-100 text-center">
                    <p className="font-bold text-blue-600 mb-0.5">a {'>'} 0 ⇒ 开口朝上 ∪</p>
                    <div className="text-3xl leading-none">∪</div>
                    <p className="text-gray-800 mt-0.5">像碗一样，<strong>底部是最低点</strong></p>
                    <p className="text-gray-800">两边往上走，两边 y {'>'} 0</p>
                  </div>
                  <div className="bg-white rounded p-2 border border-blue-100 text-center">
                    <p className="font-bold text-red-500 mb-0.5">a {'<'} 0 ⇒ 开口朝下 ∩</p>
                    <div className="text-3xl leading-none">∩</div>
                    <p className="text-gray-800 mt-0.5">像山丘，<strong>顶部是最高点</strong></p>
                    <p className="text-gray-800">两边往下走，两边 y {'<'} 0</p>
                  </div>
                </div>
                <div className="bg-white rounded p-2 border border-blue-100">
                  <p className="font-bold text-gray-800 mb-1">抛物线和 x 轴的交点 = 方程 <Math tex="ax^2+bx+c=0" /> 的根</p>
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
                      <p className="text-xs text-gray-800">两个交点，两个根</p>
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
                      <p className="text-xs text-gray-800">一个交点，重根</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-50 rounded overflow-hidden">
                        <Mafs viewBox={{ x: [-3, 3], y: [-1, 4], padding: 0 }} preserveAspectRatio={false} height={100}>
                          <Coordinates.Cartesian xAxis={{ lines: false, labels: () => '' }} yAxis={{ lines: false, labels: () => '' }} />
                          <Plot.OfX y={(x: number) => x * x + 1} color="#6366f1" />
                        </Mafs>
                      </div>
                      <p className="text-xs font-bold text-red-500 mt-1">Δ {'<'} 0</p>
                      <p className="text-xs text-gray-800">没交点，无实数根</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-blue-600 mt-1 font-bold">下面的口诀假设 a {'>'} 0（开口朝上）。如果 a {'<'} 0，先两边乘 -1 变成 a {'>'} 0 再用口诀。</p>
            </div>

            <CalloutCard variant="warning" title="核心方法：三步走" icon={null}>
              <p>1. 化成标准形式 <Math tex="ax^2 + bx + c > 0" /></p>
              <p>2. 解对应方程，找到两个根 <Math tex="x_1 < x_2" /></p>
              <p>3. 用口诀写答案</p>
            </CalloutCard>

            <div className="border border-orange-300 overflow-hidden">
              <div className="bg-orange-50 px-2 py-1 text-center border-b border-orange-300">
                <p className="text-orange-600 font-bold">口诀（必记！）大于取两边，小于取中间</p>
              </div>
              <table className="w-full text-gray-800">
                <thead>
                  <tr className="bg-orange-50 text-sm">
                    <th className="border-b border-r border-orange-200 px-2 py-1 text-left">不等式</th>
                    <th className="border-b border-r border-orange-200 px-2 py-1 text-left">解集</th>
                    <th className="border-b border-orange-200 px-2 py-1 text-left">口诀</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-r border-orange-200 px-2 py-1"><Math tex="ax^2+bx+c > 0" /></td>
                    <td className="border-b border-r border-orange-200 px-2 py-1"><Math tex="x < x_1 \text{ 或 } x > x_2" /></td>
                    <td className="border-b border-orange-200 px-2 py-1">取两边</td>
                  </tr>
                  <tr>
                    <td className="border-b border-r border-orange-200 px-2 py-1"><Math tex="ax^2+bx+c < 0" /></td>
                    <td className="border-b border-r border-orange-200 px-2 py-1"><Math tex="x_1 < x < x_2" /></td>
                    <td className="border-b border-orange-200 px-2 py-1">取中间</td>
                  </tr>
                  <tr>
                    <td className="border-b border-r border-orange-200 px-2 py-1"><Math tex="ax^2+bx+c \geq 0" /></td>
                    <td className="border-b border-r border-orange-200 px-2 py-1"><Math tex="x \leq x_1 \text{ 或 } x \geq x_2" /></td>
                    <td className="border-b border-orange-200 px-2 py-1">含等号</td>
                  </tr>
                  <tr>
                    <td className="border-r border-orange-200 px-2 py-1"><Math tex="ax^2+bx+c \leq 0" /></td>
                    <td className="border-r border-orange-200 px-2 py-1"><Math tex="x_1 \leq x \leq x_2" /></td>
                    <td className="px-2 py-1">含等号</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 抛物线图解 — Mafs */}
            <div>
              <p className="font-bold mb-1">图解：为什么口诀是对的？</p>
              <p className="text-gray-800 mb-1">
                <Math tex="y = x^2 - 3x - 4 = (x+1)(x-4)" /> 的图像（a {'>'} 0，开口朝上）：
              </p>
              <div className="bg-gray-50 rounded overflow-hidden">
                <DebugMafs viewBox={{ x: [-3.5, 6.5], y: [-6, 4] }} height={200}>
                  <Coordinates.Cartesian xAxis={{ lines: false, labels: (n) => ([-1, 0, 4].includes(n) ? String(n) : '') }} yAxis={{ lines: false, labels: () => '' }} />
                  <Plot.OfX y={(x: number) => x < -1 ? x * x - 3 * x - 4 : NaN} color="#16a34a" />
                  <Plot.OfX y={(x: number) => x >= -1 && x <= 4 ? x * x - 3 * x - 4 : NaN} color="#ef4444" />
                  <Plot.OfX y={(x: number) => x > 4 ? x * x - 3 * x - 4 : NaN} color="#16a34a" />
                  <Point x={-1} y={0} color="#ef4444" />
                  <Point x={4} y={0} color="#ef4444" />
                  <DText x={-1.30} y={1.40} size={15} color="#1f2937">x₁=-1</DText>
                  <DText x={4.30} y={1.30} size={18} color="#1f2937">x₂=4</DText>
                  <DText x={-3.35} y={3.10} size={14} color="#16a34a">← 取两边</DText>
                  <DText x={1.50} y={-3.50} size={14} color="#ef4444">取中间</DText>
                  <DText x={6.75} y={3.05} size={14} color="#16a34a">取两边 →</DText>
                </DebugMafs>
              </div>
              <div className="mt-1.5 space-y-0.5 text-gray-800">
                <p>🔴 两个根 <Math tex="x_1 = -1, x_2 = 4" /> 是抛物线和 x 轴的交点</p>
                <p>🟢 <strong>两边</strong>（x {'<'} -1 和 x {'>'} 4）：抛物线在 x 轴<strong>上面</strong>，y {'>'} 0</p>
                <p>🔴 <strong>中间</strong>（-1 {'<'} x {'<'} 4）：抛物线在 x 轴<strong>下面</strong>，y {'<'} 0</p>
                <p className="text-gray-800 mt-0.5">所以"大于取两边"就是取 y {'>'} 0 的部分，"小于取中间"就是取 y {'<'} 0 的部分。</p>
              </div>
            </div>

            <div className="border border-gray-400 overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400">📝 例题演练</div>
              <div className="grid grid-cols-2">
                <div className="p-2 space-y-1 border-r border-b border-gray-300">
                  <p className="font-bold">例1：<Math tex="x^2 - 3x - 4 < 0" /></p>
                  <p>解方程：<Math tex="(x-4)(x+1) = 0" /></p>
                  <p>根：<Math tex="x_1 = -1,\; x_2 = 4" /></p>
                  <p>"<strong>小于取中间</strong>"，解为 <Math tex="-1 < x < 4" /></p>
                </div>
                <div className="p-2 space-y-1 border-b border-gray-300">
                  <p className="font-bold">例2：<Math tex="x^2 - 2x - 3 \geq 0" /></p>
                  <p>解方程：<Math tex="(x-3)(x+1) = 0" /></p>
                  <p>根：<Math tex="x_1 = -1,\; x_2 = 3" /></p>
                  <p>"<strong>大于取两边</strong>"（含 =），解为 <Math tex="x \leq -1 \text{ 或 } x \geq 3" /></p>
                </div>
                <div className="p-2 space-y-1 border-r border-b border-gray-300">
                  <p className="font-bold">例3：<Math tex="x^2 - 4x + 3 \leq 0" /></p>
                  <p>解方程：<Math tex="(x-1)(x-3) = 0" /></p>
                  <p>根：<Math tex="x_1 = 1,\; x_2 = 3" /></p>
                  <p>"<strong>小于取中间</strong>"（含 =），解为 <Math tex="1 \leq x \leq 3" /></p>
                </div>
                <div className="p-2 space-y-1 border-b border-gray-300">
                  <p className="font-bold">例4：<Math tex="x^2 + 2x > 0" /></p>
                  <p>解方程：<Math tex="x(x+2) = 0" /></p>
                  <p>根：<Math tex="x_1 = -2,\; x_2 = 0" /></p>
                  <p>"<strong>大于取两边</strong>"，解为 <Math tex="x < -2 \text{ 或 } x > 0" /></p>
                </div>
                <div className="p-2 space-y-1 border-r border-gray-300">
                  <p className="font-bold">例5：<Math tex="-x^2 + 3x + 4 > 0" /></p>
                  <p>先乘 -1：<Math tex="x^2 - 3x - 4 < 0" /></p>
                  <p>解方程：<Math tex="(x-4)(x+1)=0" />，根：<Math tex="x_1=-1,\; x_2=4" /></p>
                  <p>"<strong>小于取中间</strong>"，解为 <Math tex="-1 < x < 4" /></p>
                </div>
                <div className="p-2 space-y-1">
                  <p className="font-bold">例6：<Math tex="x^2 - 6x + 9 \leq 0" /></p>
                  <p>解方程：<Math tex="(x-3)^2=0" />，重根 <Math tex="x=3" /></p>
                  <p><Math tex="\Delta = 0" />，抛物线只碰 x 轴一次</p>
                  <p>解为 <Math tex="x = 3" />（只有一个点满足 ≤ 0）</p>
                </div>
              </div>
            </div>

            <PageBreak label="即时练习" />
            <PracticeCard questions={setsPrereqPractice2} explanations={setsPrereqExplanations} optionCols={2} printOptionCols={2} />

          </div>
        </Collapsible>
      </section>

      {/* Section 3: Number Line + Interval */}
      <section id="sp-numberline" className="mb-0 scroll-mt-4">
        <Collapsible title="三、解集的表示（数轴 + 区间）" defaultOpen storageKey="sets-prereq:numberline" headerExtra={<SpeakButton text={setsPrereqNarrations.numberLine} />}>
          <p className="text-blue-600 mb-1">学完你能：用数轴和区间两种方式表示解集，分清 ○/● 和 ()/[]。</p>
          <div className="space-y-1 text-lg text-gray-800">

            {/* 数轴四种画法 */}
            <div className="border border-gray-300 overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-300">📝 数轴画法示例</div>
              <div className="grid grid-cols-2">
                <div className="p-1.5 border-r border-b border-gray-200">
                  <p className="font-bold text-base mb-0.5"><Math tex="x > 2" /> → <Math tex="(2, +\infty)" /></p>
                  <div className="overflow-hidden">
                    <DebugMafs viewBox={{ x: [-1, 6], y: [-0.5, 0.5] }} height={36} preserveAspectRatio={false}>
                      <Line.Segment point1={[-1, 0]} point2={[6, 0]} color="#d1d5db" weight={1} />
                      <Line.Segment point1={[2, 0]} point2={[6, 0]} color="#3b82f6" weight={4} />
                      <Point x={2} y={0} color="white" />
                      <DText x={0} y={-0.35} size={10} color="#9ca3af">0</DText>
                      <DText x={2} y={-0.35} size={10} color="#374151">2</DText>
                      <DText x={2} y={0.35} size={11} color="#6b7280">○</DText>
                    </DebugMafs>
                  </div>
                </div>
                <div className="p-1.5 border-b border-gray-200">
                  <p className="font-bold text-base mb-0.5"><Math tex="x \leq 3" /> → <Math tex="(-\infty, 3]" /></p>
                  <div className="overflow-hidden">
                    <DebugMafs viewBox={{ x: [-4, 5], y: [-0.5, 0.5] }} height={36} preserveAspectRatio={false}>
                      <Line.Segment point1={[-4, 0]} point2={[5, 0]} color="#d1d5db" weight={1} />
                      <Line.Segment point1={[-4, 0]} point2={[3, 0]} color="#ef4444" weight={4} />
                      <Point x={3} y={0} color="#ef4444" />
                      <DText x={0} y={-0.35} size={10} color="#9ca3af">0</DText>
                      <DText x={3} y={-0.35} size={10} color="#374151">3</DText>
                      <DText x={3} y={0.35} size={11} color="#6b7280">●</DText>
                    </DebugMafs>
                  </div>
                </div>
                <div className="p-1.5 border-r border-gray-200">
                  <p className="font-bold text-base mb-0.5"><Math tex="-1 < x \leq 3" /> → <Math tex="(-1, 3]" /></p>
                  <div className="overflow-hidden">
                    <DebugMafs viewBox={{ x: [-3, 5], y: [-0.5, 0.5] }} height={36} preserveAspectRatio={false}>
                      <Line.Segment point1={[-3, 0]} point2={[5, 0]} color="#d1d5db" weight={1} />
                      <Line.Segment point1={[-1, 0]} point2={[3, 0]} color="#8b5cf6" weight={4} />
                      <Point x={-1} y={0} color="white" />
                      <Point x={3} y={0} color="#8b5cf6" />
                      <DText x={0} y={-0.35} size={10} color="#9ca3af">0</DText>
                      <DText x={-1} y={-0.35} size={10} color="#374151">-1</DText>
                      <DText x={3} y={-0.35} size={10} color="#374151">3</DText>
                      <DText x={-1} y={0.35} size={11} color="#6b7280">○</DText>
                      <DText x={3} y={0.35} size={11} color="#6b7280">●</DText>
                    </DebugMafs>
                  </div>
                </div>
                <div className="p-1.5">
                  <p className="font-bold text-base mb-0.5"><Math tex="x \leq -2 \text{ 或 } x \geq 4" /> → <Math tex="(-\infty,-2] \cup [4,+\infty)" /></p>
                  <div className="overflow-hidden">
                    <DebugMafs viewBox={{ x: [-5, 7], y: [-0.5, 0.5] }} height={36} preserveAspectRatio={false}>
                      <Line.Segment point1={[-5, 0]} point2={[7, 0]} color="#d1d5db" weight={1} />
                      <Line.Segment point1={[-5, 0]} point2={[-2, 0]} color="#16a34a" weight={4} />
                      <Line.Segment point1={[4, 0]} point2={[7, 0]} color="#16a34a" weight={4} />
                      <Point x={-2} y={0} color="#16a34a" />
                      <Point x={4} y={0} color="#16a34a" />
                      <DText x={0} y={-0.35} size={10} color="#9ca3af">0</DText>
                      <DText x={-2} y={-0.35} size={10} color="#374151">-2</DText>
                      <DText x={4} y={-0.35} size={10} color="#374151">4</DText>
                      <DText x={-2} y={0.35} size={11} color="#6b7280">●</DText>
                      <DText x={4} y={0.35} size={11} color="#6b7280">●</DText>
                    </DebugMafs>
                  </div>
                </div>
              </div>
            </div>

            {/* 区间对照表 */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-base">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-2 py-1 text-left">不等式</th>
                    <th className="border border-gray-200 px-2 py-1 text-left">数轴</th>
                    <th className="border border-gray-200 px-2 py-1 text-left">区间写法</th>
                    <th className="border border-gray-200 px-2 py-1 text-left">说明</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['a < x < b', '○——○', '(a, b)', '开区间'],
                    ['a \\leq x \\leq b', '●——●', '[a, b]', '闭区间'],
                    ['a \\leq x < b', '●——○', '[a, b)', '左闭右开'],
                    ['a < x \\leq b', '○——●', '(a, b]', '左开右闭'],
                    ['x > a', '○ →→', '(a, +\\infty)', '∞ 永远 ( )'],
                    ['x \\geq a', '● →→', '[a, +\\infty)', ''],
                    ['x < b', '←← ○', '(-\\infty, b)', ''],
                    ['x \\leq b', '←← ●', '(-\\infty, b]', ''],
                    ['\\text{全体实数}', '←←→→', '(-\\infty, +\\infty)', ''],
                  ].map(([ineq, axis, interval, note], idx) => (
                    <tr key={idx} className="hover:bg-blue-50">
                      <td className="border border-gray-200 px-2 py-1"><Math tex={ineq} /></td>
                      <td className="border border-gray-200 px-2 py-1 font-mono text-sm">{axis}</td>
                      <td className="border border-gray-200 px-2 py-1"><Math tex={interval} /></td>
                      <td className="border border-gray-200 px-2 py-1 text-gray-800">{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* Section 4: Quiz */}
      <section id="sp-quiz" className="mb-8 scroll-mt-4">
        <h2 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
          <span className="w-7 h-7 rounded bg-green-500 text-white flex items-center justify-center text-sm font-bold">
            4
          </span>
          选择题自测
        </h2>
        <QuizPanel module="sets-prereq" questions={setsPrereqQuizQuestions} title="前置知识自测" description="8道选择题，覆盖解方程、解不等式、区间表示、数轴画法" explanations={setsPrereqExplanations} optionCols={2} />
      </section>

      {isPrinting && printOptions.showAnswers && <SetsPrereqAnswers />}

      </LessonLayout>
      <DebugToggle />
    </div>
  );
}
