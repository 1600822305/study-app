import { Math, Collapsible, SpeakButton, QuizPanel, PageHeader, LessonLayout, CalloutCard, PracticeCard, ExportButton, PageBreak } from '@/components/shared';
import { inequalityPrereqNarrations } from './data/prereq-narrations';
import { ineqPrereqPractice1, ineqPrereqPractice2 } from './data/prereq-practice';
import { inequalityPrereqProgressItems } from './data/prereq-progress';
import { inequalityPrereqQuizQuestions } from './data/prereq-quiz';
import { useProgress, usePrintMode } from '@/hooks';
import { scrollToId } from '@/lib/scroll';


export function InequalityPrereqPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('inequality-prereq', inequalityPrereqProgressItems);
  const { isPrinting, printOptions } = usePrintMode();

  return (
    <div>
      <PageHeader
        stage="前置准备"
        variant="prereq"
        title="2.0 不等式前置知识"
        narration={inequalityPrereqNarrations.intro}
        subtitle="学不等式之前，先确保正负数运算、解方程、数轴没问题"
        tags={[
          { label: '约15-20分钟', color: 'amber' },
          { label: '初中基础', color: 'green' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="2.0 不等式前置知识" />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-5 mb-4">
        <p className="font-bold text-gray-800 mb-2">📋 知识地图</p>
        <div className="text-gray-600 space-y-1">
          <button onClick={() => scrollToId('iq-signed')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">一、正负数的乘除规则（不等式变号的根源）</button>
          <button onClick={() => scrollToId('iq-equation')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">二、解一元一次方程回顾（和解不等式步骤一样）</button>
          <button onClick={() => scrollToId('iq-compare')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">三、不等号与数轴（表示范围的基本功）</button>
          <button onClick={() => scrollToId('iq-quiz')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">四、选择题自测（5题）</button>
        </div>
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 1: 正负数的乘除规则 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="iq-signed" className="mb-6 scroll-mt-4">
        <Collapsible title="一、正负数的乘除规则" defaultOpen storageKey="ineq-prereq:signed" headerExtra={<SpeakButton text={inequalityPrereqNarrations.signedNumbers} />}>
          <p className="text-blue-600 mb-2">🎯 学完你能：秒判正负数相乘相除的结果符号，为理解"不等式乘负数要变号"打好基础。</p>
          <div className="space-y-3 text-gray-700">

            {/* 为什么要学这个 */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="font-bold text-blue-800 mb-1">为什么不等式前一定要搞定正负数？</p>
              <p className="text-blue-700">不等式有一条<strong>最重要的规则</strong>：</p>
              <div className="bg-white rounded-lg p-2 border border-blue-100 mt-1">
                <p className="text-red-600 font-bold text-lg">两边乘以（或除以）<span className="underline">负数</span>，不等号方向要<span className="underline">反转</span>！</p>
              </div>
              <p className="text-blue-700 mt-1">如果你连"负数×负数 = 正数"都不确定，这条规则就理解不了。所以先把正负数运算搞清楚。</p>
            </div>

            {/* 核心规则 */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
              <p className="text-orange-700 font-bold mb-3">必背！乘除法的符号规则</p>
              <div className="space-y-2">
                <div className="bg-white border border-orange-100 rounded-lg p-3">
                  <p className="font-bold text-gray-800 mb-2">一句话口诀：同号得正，异号得负</p>
                  <div className="space-y-1.5">
                    <p><span className="text-green-600 font-bold">正 × 正 = 正</span>：<Math tex="3 \times 5 = 15" /></p>
                    <p><span className="text-green-600 font-bold">负 × 负 = 正</span>：<Math tex="(-3) \times (-5) = 15" /></p>
                    <p><span className="text-red-600 font-bold">正 × 负 = 负</span>：<Math tex="3 \times (-5) = -15" /></p>
                    <p><span className="text-red-600 font-bold">负 × 正 = 负</span>：<Math tex="(-3) \times 5 = -15" /></p>
                  </div>
                </div>
                <div className="bg-white border border-orange-100 rounded-lg p-3">
                  <p className="font-bold text-gray-800 mb-1">除法也一样</p>
                  <div className="space-y-1">
                    <p><span className="text-green-600 font-bold">负 ÷ 负 = 正</span>：<Math tex="(-12) \div (-3) = 4" /></p>
                    <p><span className="text-red-600 font-bold">负 ÷ 正 = 负</span>：<Math tex="(-12) \div 3 = -4" /></p>
                  </div>
                </div>
              </div>
            </div>

            {/* 符号九宫格速查 */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-3" style={{ breakInside: 'avoid' }}>
              <p className="text-green-700 font-bold mb-2">🧠 一眼看穿符号：乘法九宫格</p>
              <table className="w-full text-center border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border border-green-200 px-2 py-1 bg-green-100 text-green-800">×</th>
                    <th className="border border-green-200 px-2 py-1 bg-green-100 text-green-800">正数 (+)</th>
                    <th className="border border-green-200 px-2 py-1 bg-green-100 text-green-800">负数 (−)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-green-200 px-2 py-1 bg-green-100 text-green-800 font-bold">正数 (+)</td>
                    <td className="border border-green-200 px-2 py-1 text-green-700 font-bold">+ 正</td>
                    <td className="border border-green-200 px-2 py-1 text-red-600 font-bold">− 负</td>
                  </tr>
                  <tr>
                    <td className="border border-green-200 px-2 py-1 bg-green-100 text-green-800 font-bold">负数 (−)</td>
                    <td className="border border-green-200 px-2 py-1 text-red-600 font-bold">− 负</td>
                    <td className="border border-green-200 px-2 py-1 text-green-700 font-bold">+ 正</td>
                  </tr>
                  <tr>
                    <td colSpan={3} className="border border-green-200 px-2 py-1 text-green-600 text-sm text-left">对角线相同 → 正；交叉不同 → 负。除法同理！</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 多个负号 */}
            <PageBreak />
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-bold text-gray-800 mb-2">进阶：多个负号怎么办？</p>
              <p className="text-gray-600 mb-2">数一数有几个负号：</p>
              <div className="space-y-2 pl-3 border-l-2 border-blue-300">
                <p><strong>偶数个负号</strong> → 结果为<span className="text-green-600 font-bold">正</span>：<Math tex="(-2) \times (-3) \times (-1) \times (-1) = 6" />（4个负号）</p>
                <p><strong>奇数个负号</strong> → 结果为<span className="text-red-600 font-bold">负</span>：<Math tex="(-2) \times (-3) \times (-1) = -6" />（3个负号）</p>
              </div>
            </div>

            {/* 易错：(-5)² 和 -5² */}
            <CalloutCard variant="warning" title="⚠️ 易错点">
              <div className="space-y-2">
                <p><Math tex="(-5)^2 = (-5) \times (-5) = 25" />（<strong>括号里整体</strong>平方）</p>
                <p><Math tex="-5^2 = -(5^2) = -25" />（<strong>只有 5</strong> 在平方，前面的负号不参与）</p>
                <p className="text-red-600 font-bold mt-1">有括号和没括号，结果完全不同！</p>
              </div>
            </CalloutCard>

            <PracticeCard
              title="✏️ 即时练习"
              questions={ineqPrereqPractice1}
            />
          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 2: 解一元一次方程回顾 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="iq-equation" className="mb-6 scroll-mt-4">
        <Collapsible title="二、解一元一次方程回顾" defaultOpen storageKey="ineq-prereq:equation" headerExtra={<SpeakButton text={inequalityPrereqNarrations.linearEquation} />}>
          <p className="text-blue-600 mb-3">🎯 学完你能：独立解一元一次方程，因为解不等式的步骤和这一模一样。</p>
          <div className="space-y-4 text-gray-700">

            {/* 为什么要复习方程 */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="font-bold text-blue-800 mb-2">为什么要复习方程？</p>
              <p className="text-blue-700">因为<strong>解不等式的步骤和解方程几乎一模一样</strong>：</p>
              <div className="bg-white rounded-lg p-3 border border-blue-100 mt-2 space-y-1">
                <p>方程：<Math tex="2x + 3 = 7" /> → 移项 → <Math tex="2x = 4" /> → 除以2 → <Math tex="x = 2" /></p>
                <p>不等式：<Math tex="2x + 3 < 7" /> → 移项 → <Math tex="2x < 4" /> → 除以2 → <Math tex="x < 2" /></p>
              </div>
              <p className="text-blue-700 mt-2">看到了吗？<strong>唯一的区别就是把 = 换成了 &lt;</strong>。所以方程解熟了，不等式就是换个符号的事。</p>
            </div>

            {/* 解方程五步法 */}
            <PageBreak />
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
              <p className="text-orange-700 font-bold mb-2">解一元一次方程的五步法</p>
              <div className="space-y-2">
                <div className="bg-white border border-orange-100 rounded-lg p-2.5">
                  <p className="font-bold text-gray-800">①  去分母</p>
                  <p className="text-gray-600">方程两边同乘分母的最小公倍数，消掉分数</p>
                </div>
                <div className="bg-white border border-orange-100 rounded-lg p-2.5">
                  <p className="font-bold text-gray-800">②  去括号</p>
                  <p className="text-gray-600">用分配律展开括号</p>
                </div>
                <div className="bg-white border border-orange-100 rounded-lg p-2.5">
                  <p className="font-bold text-gray-800">③  移项</p>
                  <p className="text-gray-600">含 x 的移到左边，常数移到右边，<span className="text-red-600 font-bold">过等号变符号</span></p>
                </div>
                <div className="bg-white border border-orange-100 rounded-lg p-2.5">
                  <p className="font-bold text-gray-800">④  合并同类项</p>
                  <p className="text-gray-600">左边合并 x 的系数，右边合并常数</p>
                </div>
                <div className="bg-white border border-orange-100 rounded-lg p-2.5">
                  <p className="font-bold text-gray-800">⑤  系数化为 1</p>
                  <p className="text-gray-600">两边除以 x 的系数，得到 x = 某个数</p>
                </div>
              </div>
            </div>

            {/* 例题1：简单 */}
            <div className="bg-gray-50 rounded-lg p-3 space-y-2">
              <p className="font-bold text-gray-800">例1（简单）：<Math tex="2x + 3 = 7" /></p>
              <div className="pl-3 border-l-2 border-blue-300 space-y-1.5">
                <p><span className="text-blue-600 font-bold">移项</span>：<Math tex="2x = 7 - 3 = 4" /></p>
                <p><span className="text-blue-600 font-bold">系数化为1</span>：<Math tex="x = \frac{4}{2} = 2" /></p>
              </div>
            </div>

            {/* 例题2：有移项 */}
            <div className="bg-gray-50 rounded-lg p-3 space-y-2">
              <p className="font-bold text-gray-800">例2（含移项）：<Math tex="5x - 3 = 2x + 9" /></p>
              <div className="pl-3 border-l-2 border-blue-300 space-y-1.5">
                <p><span className="text-blue-600 font-bold">移项</span>：含x的到左边，常数到右边</p>
                <p className="pl-4"><Math tex="5x - 2x = 9 + 3" /></p>
                <p><span className="text-blue-600 font-bold">合并</span>：<Math tex="3x = 12" /></p>
                <p><span className="text-blue-600 font-bold">系数化为1</span>：<Math tex="x = \frac{12}{3} = 4" /></p>
              </div>
            </div>

            {/* 例题3：有括号 */}
            <div className="bg-gray-50 rounded-lg p-3 space-y-2">
              <p className="font-bold text-gray-800">例3（有括号）：<Math tex="3(x + 2) = 15" /></p>
              <div className="pl-3 border-l-2 border-blue-300 space-y-1.5">
                <p><span className="text-blue-600 font-bold">去括号</span>：<Math tex="3x + 6 = 15" /></p>
                <p><span className="text-blue-600 font-bold">移项</span>：<Math tex="3x = 15 - 6 = 9" /></p>
                <p><span className="text-blue-600 font-bold">系数化为1</span>：<Math tex="x = \frac{9}{3} = 3" /></p>
              </div>
            </div>

            {/* 例题4：系数为负数 */}
            <div className="bg-gray-50 rounded-lg p-3 space-y-2">
              <p className="font-bold text-gray-800">例4（系数为负）：<Math tex="-4x + 8 = 0" /></p>
              <div className="pl-3 border-l-2 border-blue-300 space-y-1.5">
                <p><span className="text-blue-600 font-bold">移项</span>：<Math tex="-4x = -8" /></p>
                <p><span className="text-blue-600 font-bold">系数化为1</span>：<Math tex="x = \frac{-8}{-4} = 2" />（负除以负 = 正）</p>
              </div>
              <p className="text-red-600 font-bold mt-2">⚡ 注意：这里除以 -4，方程中等号不变。但换成不等式，不等号就要反转！这就是第一节学正负数的意义。</p>
            </div>

            <PageBreak />
            <CalloutCard variant="warning" title="⚠️ 易错点">
              <div className="space-y-2">
                <p><strong>移项忘记变号</strong>：<Math tex="3x + 5 = 8" /> 移项应该是 <Math tex="3x = 8 - 5" />，不是 <Math tex="3x = 8 + 5" /></p>
                <p><strong>去括号忘记乘每一项</strong>：<Math tex="2(x + 3) = 2x + 6" />，不是 <Math tex="2x + 3" /></p>
              </div>
            </CalloutCard>

            <PracticeCard
              title="✏️ 即时练习"
              questions={ineqPrereqPractice2}
            />
          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 3: 不等号与数轴 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="iq-compare" className="mb-6 scroll-mt-4">
        <Collapsible title="三、不等号与数轴" defaultOpen storageKey="ineq-prereq:compare" headerExtra={<SpeakButton text={inequalityPrereqNarrations.compareAndNumberLine} />}>
          <p className="text-blue-600 mb-3">🎯 学完你能：熟练使用四种不等号，在数轴上正确表示不等式的解集。</p>
          <div className="space-y-4 text-gray-700">

            {/* 四种不等号 */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <p className="text-orange-700 font-bold mb-3">四种不等号，一次搞清</p>
              <div className="space-y-3">
                <div className="bg-white border border-orange-100 rounded-lg p-4 space-y-2">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl font-bold text-blue-600 shrink-0 w-12 text-center"><Math tex=">" /></span>
                    <div>
                      <p className="font-bold text-gray-800">大于</p>
                      <p className="text-gray-600">左边比右边<strong>大</strong>，不含等号。如 <Math tex="5 > 3" /></p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-orange-100 rounded-lg p-4 space-y-2">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl font-bold text-blue-600 shrink-0 w-12 text-center"><Math tex="<" /></span>
                    <div>
                      <p className="font-bold text-gray-800">小于</p>
                      <p className="text-gray-600">左边比右边<strong>小</strong>，不含等号。如 <Math tex="-2 < 1" /></p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-orange-100 rounded-lg p-4 space-y-2">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl font-bold text-blue-600 shrink-0 w-12 text-center"><Math tex="\geq" /></span>
                    <div>
                      <p className="font-bold text-gray-800">大于或等于</p>
                      <p className="text-gray-600">左边比右边大，<strong>或者等于右边</strong>。如 <Math tex="x \geq 3" /> 表示 x 可以是 3、4、5、3.5 ……</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-orange-100 rounded-lg p-4 space-y-2">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl font-bold text-blue-600 shrink-0 w-12 text-center"><Math tex="\leq" /></span>
                    <div>
                      <p className="font-bold text-gray-800">小于或等于</p>
                      <p className="text-gray-600">左边比右边小，<strong>或者等于右边</strong>。如 <Math tex="x \leq -1" /> 表示 x 可以是 -1、-2、-3 ……</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 数轴上比较大小 */}
            <PageBreak />
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="font-bold text-blue-800 mb-2">数轴上的大小关系</p>
              <div className="bg-white rounded-lg p-3 border border-blue-100">
                <p className="text-lg font-bold text-center text-gray-800">在数轴上，<span className="text-red-600">右边的数永远比左边的大</span></p>
              </div>
              <div className="mt-3 space-y-2">
                <p>所以：<Math tex="-3 < -1 < 0 < 2 < 5" /></p>
                <p className="text-blue-700">两个负数比较：<strong>绝对值大的反而小</strong>。如 <Math tex="|-5| > |-2|" />，但 <Math tex="-5 < -2" /></p>
              </div>
            </div>

            {/* 数轴表示不等式 */}
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-bold text-gray-800 mb-3">在数轴上表示不等式的解集</p>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="font-bold text-gray-800 mb-2">两种圆圈</p>
                  <div className="space-y-2">
                    <p><span className="text-2xl">○</span> <strong>空心圆</strong>：<span className="text-red-600">不包含</span>这个点（对应 &gt; 或 &lt;，没有等号）</p>
                    <p><span className="text-2xl">●</span> <strong>实心圆</strong>：<span className="text-green-600">包含</span>这个点（对应 ≥ 或 ≤，有等号）</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200 space-y-3">
                  <p className="font-bold text-gray-800">四个例子</p>
                  <div className="space-y-3">
                    <div className="pl-3 border-l-2 border-blue-300">
                      <p><Math tex="x > 2" />：在 2 画 <strong>○</strong>，箭头<strong>向右</strong> →</p>
                      <p className="text-gray-500">（2 不算在内，2右边的数都算）</p>
                    </div>
                    <div className="pl-3 border-l-2 border-green-300">
                      <p><Math tex="x \geq 2" />：在 2 画 <strong>●</strong>，箭头<strong>向右</strong> →</p>
                      <p className="text-gray-500">（2 也算在内）</p>
                    </div>
                    <div className="pl-3 border-l-2 border-blue-300">
                      <p><Math tex="x < -1" />：在 -1 画 <strong>○</strong>，箭头<strong>向左</strong> ←</p>
                      <p className="text-gray-500">（-1 不算在内，-1左边的数都算）</p>
                    </div>
                    <div className="pl-3 border-l-2 border-green-300">
                      <p><Math tex="x \leq -1" />：在 -1 画 <strong>●</strong>，箭头<strong>向左</strong> ←</p>
                      <p className="text-gray-500">（-1 也算在内）</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 一句话总结 */}
            <div className="bg-slate-900 text-white rounded-xl p-5">
              <p className="font-bold text-lg mb-2">🔑 一句话总结</p>
              <p>有等号 → 实心 ●（包含端点）</p>
              <p>没等号 → 空心 ○（不含端点）</p>
              <p className="mt-2">大于 → 箭头向右（更大的方向）</p>
              <p>小于 → 箭头向左（更小的方向）</p>
            </div>

            <CalloutCard variant="warning" title="⚠️ 易错点">
              <div className="space-y-2">
                <p><strong>"大于"和"大于等于"差一个端点</strong>：<Math tex="x > 2" /> 不含 2，<Math tex="x \geq 2" /> 含 2。考试经常在这里设陷阱！</p>
                <p><strong>负数比较别搞反</strong>：<Math tex="-5 < -2" />（离 0 远的负数更小），不是 -5 &gt; -2</p>
              </div>
            </CalloutCard>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 4: 自测 */}
      {/* ════════════════════════════════════════════════════════ */}
      <PageBreak />
      <section id="iq-quiz" className="mb-6 scroll-mt-4">
        <Collapsible title="四、选择题自测（5题）" defaultOpen storageKey="ineq-prereq:quiz">
          <p className="text-gray-600 mb-4">全对 → 可以开始学不等式！错 2 题以上 → 回头再看一遍对应章节。</p>
          <QuizPanel
            questions={inequalityPrereqQuizQuestions}
            module="inequality-prereq-quiz"
          />
        </Collapsible>
      </section>

      </LessonLayout>

      {/* ════════════════════════════════════════════════════════ */}
      {/* 打印模式答案区 */}
      {/* ════════════════════════════════════════════════════════ */}
      {isPrinting && printOptions.showAnswers && (
        <section>
          <PageBreak />
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-gray-300 pb-2">参考答案与解析</h2>

          <div className="mb-4">
            <h3 className="font-bold text-gray-800 mb-2">即时练习答案</h3>
            <div className="space-y-2">
              <div>
                <p className="font-bold text-gray-700 mb-2">第一节：正负数运算</p>
                <div className="grid grid-cols-2 gap-2">
                  {ineqPrereqPractice1.map((q, i) => (
                    <div key={q.id} className="text-gray-700" style={{ breakInside: 'avoid' }}>
                      <p><strong>{i + 1}. 答案：{q.correctAnswer}</strong></p>
                      {q.explanationLatex && <p><Math tex={q.explanationLatex} /></p>}
                      {q.explanation && <p>{q.explanation}</p>}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-bold text-gray-700 mb-2">第二节：解方程</p>
                <div className="grid grid-cols-2 gap-2">
                  {ineqPrereqPractice2.map((q, i) => (
                    <div key={q.id} className="text-gray-700" style={{ breakInside: 'avoid' }}>
                      <p><strong>{i + 1}. 答案：{q.correctAnswer}</strong></p>
                      {q.explanationLatex && <p><Math tex={q.explanationLatex} /></p>}
                      {q.explanation && <p>{q.explanation}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-2">自测答案</h3>
            <div className="space-y-2">
              {inequalityPrereqQuizQuestions.map((q, i) => (
                <div key={q.id} className="text-gray-700" style={{ breakInside: 'avoid' }}>
                  <p><strong>{i + 1}. 答案：</strong>{q.correctAnswer.includes('\\') ? <Math tex={q.correctAnswer} /> : <strong>{q.correctAnswer}</strong>}</p>
                  {q.explanationLatex && <p><Math tex={q.explanationLatex} /></p>}
                  {q.explanation && <p>{q.explanation}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
