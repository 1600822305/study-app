import { Math, Collapsible, PageHeader, LessonLayout, ExportButton, PracticeCard, DebugGeo2dSvg, PageBreak } from '@/components/shared';
import { piecewiseGraphDiagram } from './data/3.1.3/3.1.3-piecewise-diagrams';
import { piecewiseProgressItems } from './data/3.1.3/3.1.3-piecewise-progress';
import { piecewisePractice1, piecewiseDomainPractice } from './data/3.1.3/3.1.3-piecewise-practice';
import { piecewiseExplanations } from './3.1.3-piecewise-answers';
import { useProgress } from '@/hooks';

export function PiecewisePage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('piecewise', piecewiseProgressItems);

  return (
    <div>
      <PageHeader
        stage="第三阶段 · 函数思维"
        title="3.1.3 分段函数"
        subtitle="同一个函数，不同区间用不同表达式——求值、求域、单调性三步掌握"
        tags={[
          { label: '难度 ★★★☆☆', color: 'amber' },
          { label: '高频考点', color: 'red' },
          { label: '约1-2小时', color: 'purple' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="3.1.3 分段函数" />
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>
        <div className="[&_.rounded-xl]:mb-0 [&_.rounded-xl>.flex.items-center]:py-1 [&_.rounded-xl>div:last-child]:pt-1 [&_.rounded-xl>div:last-child]:pb-1">
          <section id="pw-concept" className="mb-0 scroll-mt-4">
            <Collapsible title="一、什么是分段函数" defaultOpen storageKey="piecewise:concept">
              <div className="space-y-0 text-[0.9rem] text-gray-800">

                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">从绝对值说起</div>
                  <div className="px-3 py-0.5">
                    <p>你已经认识了绝对值函数 <Math tex="f(x) = |x|" />。仔细想想它是怎么算的：</p>
                    <p className="mt-0.5">① 当 <Math tex="x \geqslant 0" /> 时，<Math tex="|x| = x" />，所以 <Math tex="f(x) = x" /></p>
                    <p>② 当 <Math tex="x < 0" /> 时，<Math tex="|x| = -x" />，所以 <Math tex="f(x) = -x" /></p>
                    <p className="mt-0.5">写成统一的形式就是：<Math tex="f(x) = \begin{cases} x, & x \geqslant 0 \\ -x, & x < 0 \end{cases}" /></p>
                    <p className="mt-0.5">同一个函数，在不同区间用了不同的表达式——这就是<strong>分段函数</strong>。</p>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📋 分段函数的定义</div>
                  <div className="px-3 py-0.5 border-b border-gray-300">
                    <p><strong>定义：</strong>在定义域的不同区间上，用不同的解析式来表示同一个函数。</p>
                    <p className="mt-0.5"><strong>本质：</strong>它仍然<strong>是一个函数</strong>，不是多个函数。只是根据自变量 <Math tex="x" /> 的不同取值范围，采用不同的计算公式。</p>
                  </div>
                  <div className="grid grid-cols-[1fr_auto_1fr] border-b border-gray-300">
                    <div className="px-3 py-0.5 space-y-0">
                      <p><strong>✅ 是分段函数</strong></p>
                      <p><Math tex="f(x) = \begin{cases} x^2, & x \geqslant 0 \\ -x, & x < 0 \end{cases}" /></p>
                      <p className="text-gray-800 text-xs">不同区间用不同表达式，但仍是同一个函数</p>
                    </div>
                    <div className="w-px bg-gray-300"></div>
                    <div className="px-3 py-0.5 space-y-0">
                      <p><strong>✅ 也是分段函数</strong></p>
                      <p><Math tex="g(x) = \begin{cases} 2x+1, & x < 2 \\ x^2, & x \geqslant 2 \end{cases}" /></p>
                      <p className="text-gray-800">分界点不一定是 0，这里以 <Math tex="x = 2" /> 为分界</p>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-0.5 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">求值方法</div>
                  <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                    <p><strong>核心步骤：</strong>先看自变量落在哪一段，再用那一段的表达式代入计算。</p>
                  </div>
                  <div className="px-3 py-0.5 space-y-0">
                    <p>已知 <Math tex="f(x) = \begin{cases} x^2 - 1, & x \geqslant 0 \\ 2x + 3, & x < 0 \end{cases}" />，求 <Math tex="f(2) + f(-1)" /></p>
                    <p className="border-t border-gray-200 pt-0.5"><strong>先算 <Math tex="f(2)" />：</strong>因为 <Math tex="2 \geqslant 0" />，用第一段，得 <Math tex="f(2) = 2^2 - 1 = 3" /></p>
                    <p><strong>再算 <Math tex="f(-1)" />：</strong>因为 <Math tex="-1 < 0" />，用第二段，得 <Math tex="f(-1) = 2 \times (-1) + 3 = 1" /></p>
                    <p className="border-t border-gray-200 pt-0.5 font-bold">所以 <Math tex="f(2) + f(-1) = 3 + 1 = 4" /></p>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-0.5 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">反向求值：已知函数值，求自变量</div>
                  <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                    <p><strong>核心思路：</strong>把每一段分别令等于已知值，解方程，再<strong>验证</strong>解是否满足该段的区间条件，不满足就舍去。</p>
                  </div>
                  <div className="grid grid-cols-[1fr_auto_1fr]">
                    <div className="px-3 py-0.5 space-y-0">
                      <p>已知 <Math tex="f(x) = \begin{cases} x^2-1, & x \geqslant 0 \\ 2x+3, & x < 0 \end{cases}" />，若 <Math tex="f(a) = 3" />，求 <Math tex="a" /></p>
                      <p className="border-t border-gray-200 pt-0.5"><strong>情况一：</strong>设 <Math tex="a \geqslant 0" />，用第一段</p>
                      <p><Math tex="a^2 - 1 = 3" />，得 <Math tex="a^2 = 4" />，所以 <Math tex="a = \pm 2" /></p>
                      <p>因为 <Math tex="a \geqslant 0" />，所以 <Math tex="a = 2" /> 满足，<Math tex="a = -2" /> 舍去</p>
                      <p className="border-t border-gray-200 pt-0.5"><strong>情况二：</strong>设 <Math tex="a < 0" />，用第二段</p>
                      <p><Math tex="2a + 3 = 3" />，得 <Math tex="2a = 0" />，所以 <Math tex="a = 0" /></p>
                      <p>因为 <Math tex="a < 0" />，所以 <Math tex="a = 0" /> 不满足，舍去</p>
                      <p className="border-t border-gray-200 pt-0.5 font-bold">结论：<Math tex="a = 2" /></p>
                    </div>
                    <div className="w-px bg-gray-300"></div>
                    <div className="px-3 py-0.5 space-y-0">
                      <p>已知 <Math tex="f(x) = \begin{cases} x^2-1, & x \geqslant 0 \\ 2x+3, & x < 0 \end{cases}" />，若 <Math tex="f(a) = 0" />，求 <Math tex="a" /></p>
                      <p className="border-t border-gray-200 pt-0.5"><strong>情况一：</strong>设 <Math tex="a \geqslant 0" />，用第一段</p>
                      <p><Math tex="a^2 - 1 = 0" />，得 <Math tex="a = \pm 1" /></p>
                      <p>因为 <Math tex="a \geqslant 0" />，所以 <Math tex="a = 1" /> 满足，<Math tex="a = -1" /> 舍去</p>
                      <p className="border-t border-gray-200 pt-0.5"><strong>情况二：</strong>设 <Math tex="a < 0" />，用第二段</p>
                      <p><Math tex="2a + 3 = 0" />，得 <Math tex="a = -\dfrac{3}{2}" />，因为 <Math tex="-\dfrac{3}{2} < 0" />，满足，保留</p>
                      <p className="border-t border-gray-200 pt-0.5 font-bold">结论：<Math tex="a = 1" /> 或 <Math tex="a = -\dfrac{3}{2}" />（两个解都成立）</p>
                    </div>
                  </div>
                </div>

                <PageBreak label="复合求值" />

                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-0.5 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">复合求值：f(f(x))——算两次</div>
                  <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                    <p><strong>核心思路：</strong>先算内层 <Math tex="f(x)" />，得到一个数值，再把这个数值代入外层 <Math tex="f(\cdots)" /> 再算一次。</p>
                  </div>
                  <div className="grid grid-cols-[52fr_auto_48fr]">
                    <div className="px-3 py-0.5 space-y-0">
                      <p>已知 <Math tex="f(x) = \begin{cases} x^2-1, & x \geqslant 0 \\ 2x+3, & x < 0 \end{cases}" />，求 <Math tex="f(f(-1))" /></p>
                      <p className="border-t border-gray-200 pt-0.5"><strong>第一步：</strong>算内层 <Math tex="f(-1)" /></p>
                      <p>因为 <Math tex="-1 < 0" />，用第二段，得 <Math tex="f(-1) = 2 \times (-1) + 3 = 1" /></p>
                      <p className="border-t border-gray-200 pt-0.5"><strong>第二步：</strong>算外层 <Math tex="f(1)" /></p>
                      <p>因为 <Math tex="1 \geqslant 0" />，用第一段，得 <Math tex="f(1) = 1^2 - 1 = 0" /></p>
                      <p className="border-t border-gray-200 pt-0.5 font-bold">结论：<Math tex="f(f(-1)) = 0" /></p>
                    </div>
                    <div className="w-px bg-gray-300"></div>
                    <div className="px-3 py-0.5 space-y-0">
                      <p>已知 <Math tex="f(x) = \begin{cases} x-2, & x < 2 \\ f(x-1), & x \geqslant 2 \end{cases}" />，求 <Math tex="f(2)" /></p>
                      <p className="border-t border-gray-200 pt-0.5"><strong>第一步：</strong>算 <Math tex="f(2)" /></p>
                      <p>因为 <Math tex="2 \geqslant 2" />，用第二段，得 <Math tex="f(2) = f(2-1) = f(1)" /></p>
                      <p className="border-t border-gray-200 pt-0.5"><strong>第二步：</strong>算 <Math tex="f(1)" /></p>
                      <p>因为 <Math tex="1 < 2" />，用第一段，得 <Math tex="f(1) = 1 - 2 = -1" /></p>
                      <p className="border-t border-gray-200 pt-0.5 font-bold">结论：<Math tex="f(2) = -1" /></p>
                    </div>
                  </div>
                </div>

              </div>

              <PracticeCard
                questions={piecewisePractice1} title="" explanations={piecewiseExplanations} hideBlankLine
                renderItem={(q, idx) => (
                  <div className="bg-white rounded-lg border border-green-100 px-2 py-0" key={idx}>
                    <span className="text-green-600 mr-1">{idx + 1}.</span>
                    {q.questionLatex ? <Math tex={q.questionLatex} /> : q.question}
                  </div>
                )}
              />
            </Collapsible>
          </section>

          <section id="pw-graph" className="mb-0 scroll-mt-4">
            <Collapsible title="二、分段函数的图像" defaultOpen storageKey="piecewise:graph">
              <div className="space-y-0 text-[0.9rem] text-gray-800">

                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📋 画图方法</div>
                  <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                    <p><strong>核心画法：分段计算，定界截断</strong></p>
                  </div>
                  <div className="px-3 py-0.5 space-y-0">
                    <p><strong>步骤一：算端点（定界）</strong></p>
                    <p>找到分界线，把分界点的 <Math tex="x" /> 分别代入两边的公式算出 <Math tex="y" />。有等号画<strong>实心点 ●</strong>，没等号画<strong>空心圆 ○</strong></p>
                    <p><strong>步骤二：各画各的（分段）</strong></p>
                    <p>每一段当成独立的函数来画。直线找两个点连线，曲线找端点 + 顶点 + 辅助点</p>
                    <p><strong>步骤三：多余擦掉（截断）</strong></p>
                    <p>严格对照 <Math tex="x" /> 的范围，范围外的线全部擦掉</p>
                    <p className="border-t border-gray-200 pt-0.5"><strong>⚠️ 注意：</strong>画完两段后，<strong>不要把两段端点连起来</strong>。两段端点 <Math tex="y" /> 值相同才连续，不同就是断开的</p>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-0.5 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">画 <Math tex="f(x) = \begin{cases} x^2-1, & x \geqslant 0 \\ 2x+3, & x < 0 \end{cases}" /> 的图像</div>
                  <div className="flex">
                    <div className="flex-1 px-3 py-0.5 space-y-0">
                      <p><strong>1. 算分界点（<Math tex="x = 0" />）</strong></p>
                      <p>第一段 <Math tex="x^2 - 1" />：代入得 <Math tex="y = -1" />，<Math tex="x \geqslant 0" /> 取等，画<strong>实心点</strong> <Math tex="(0,\,-1)" /></p>
                      <p>第二段 <Math tex="2x + 3" />：代入得 <Math tex="y = 3" />，<Math tex="x < 0" /> 不取等，画<strong>空心圆</strong> <Math tex="(0,\,3)" /></p>
                      <p className="border-t border-gray-200 pt-0.5"><strong>2. 画二次函数段（<Math tex="x \geqslant 0" />）</strong></p>
                      <p>对称轴 <Math tex="x = -\dfrac{b}{2a} = -\dfrac{0}{2} = 0" />，顶点 <Math tex="(0,\,-1)" /></p>
                      <p>令 <Math tex="y = 0" />，则 <Math tex="x^2 - 1 = 0" />，解得 <Math tex="x = \pm 1" /></p>
                      <p className="border-t border-gray-200 pt-0.5"><strong>3. 画一次函数段（<Math tex="x < 0" />）</strong></p>
                      <p>令 <Math tex="x = 0" />，得 <Math tex="y = 3" />（空心圆，已算）</p>
                      <p>令 <Math tex="y = 0" />，则 <Math tex="2x + 3 = 0" />，解得 <Math tex="x = -\dfrac{3}{2}" /></p>
                      <p>两点连线，到分界点停住</p>
                    </div>
                    <div className="flex-shrink-0 flex items-center justify-center border-l border-gray-300 p-1">
                      <DebugGeo2dSvg data={piecewiseGraphDiagram} width={170} height={150} />
                    </div>
                  </div>
                </div>

              </div>
            </Collapsible>
          </section>

          <PageBreak label="定义域与值域" />

          <section id="pw-domain" className="mb-0 scroll-mt-4">
            <Collapsible title="三、分段函数的定义域与值域" defaultOpen storageKey="piecewise:domain">
              <div className="space-y-0 text-[0.9rem] text-gray-800">

                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📋 求法</div>
                  <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                    <p><strong>定义域：</strong>把每一段 <Math tex="x" /> 的取值范围写出来，取<strong>并集</strong>就是整体定义域</p>
                  </div>
                  <div className="px-3 py-0.5">
                    <p><strong>值域：</strong>先分别求每一段的值域，再把所有段的值域取<strong>并集</strong>就是整体值域</p>
                    <p className="border-t border-gray-200 pt-0.5"><strong>⚠️ 注意：</strong>求每段值域时，只能在<strong>该段的 x 范围内</strong>讨论，不能超出该段的定义区间</p>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-0.5 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例1. 求 <Math tex="f(x) = \begin{cases} x^2-1, & x \geqslant 0 \\ 2x+3, & x < 0 \end{cases}" /> 的定义域和值域</div>
                  <div className="grid grid-cols-[2fr_auto_3fr]">
                    <div className="px-3 py-0.5 space-y-0">
                      <p><strong>定义域</strong></p>
                      <p>第一段：<Math tex="x \geqslant 0" />，即 <Math tex="[0, +\infty)" /></p>
                      <p>第二段：<Math tex="x < 0" />，即 <Math tex="(-\infty, 0)" /></p>
                      <p className="border-t border-gray-200 pt-0.5">取并集，得 <Math tex="(-\infty, 0) \cup [0, +\infty) = \mathbb{R}" /></p>
                      <p className="font-bold">定义域为全体实数</p>
                    </div>
                    <div className="w-px bg-gray-300"></div>
                    <div className="px-3 py-0.5 space-y-0">
                      <p><strong>值域</strong></p>
                      <p>第一段 <Math tex="x^2-1" />（<Math tex="x \geqslant 0" />）：代入边界 <Math tex="x=0" /> 得最小值 <Math tex="y=-1" /></p>
                      <p>向右无限增大，值域为 <Math tex="[-1, +\infty)" /></p>
                      <p>第二段 <Math tex="2x+3" />（<Math tex="x < 0" />）：代入边界 <Math tex="x=0" /> 得最大值 <Math tex="y=3" />（取不到）</p>
                      <p>向左无限减小，值域为 <Math tex="(-\infty, 3)" /></p>
                      <p className="border-t border-gray-200 pt-0.5 font-bold">取并集，得 <Math tex="(-\infty, 3) \cup [-1, +\infty) = \mathbb{R}" />，值域为全体实数</p>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-0.5 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例2. 求 <Math tex="f(x) = \begin{cases} x+1, & -1 \leqslant x < 1 \\ -x^2+4, & 1 \leqslant x \leqslant 2 \end{cases}" /> 的定义域和值域</div>
                  <div className="grid grid-cols-[2fr_auto_3fr]">
                    <div className="px-3 py-0.5 space-y-0">
                      <p><strong>定义域</strong></p>
                      <p>第一段：<Math tex="-1 \leqslant x < 1" />，即 <Math tex="[-1, 1)" /></p>
                      <p>第二段：<Math tex="1 \leqslant x \leqslant 2" />，即 <Math tex="[1, 2]" /></p>
                      <p className="border-t border-gray-200 pt-0.5">取并集，得 <Math tex="[-1, 1) \cup [1, 2] = [-1, 2]" /></p>
                      <p className="font-bold">定义域为 <Math tex="[-1, 2]" /></p>
                    </div>
                    <div className="w-px bg-gray-300"></div>
                    <div className="px-3 py-0.5 space-y-0">
                      <p><strong>值域</strong></p>
                      <p>第一段 <Math tex="x+1" />（<Math tex="-1 \leqslant x < 1" />）：代入左端 <Math tex="x=-1" /> 得 <Math tex="y=0" /></p>
                      <p>代入右端 <Math tex="x=1" /> 得 <Math tex="y=2" />（取不到），递增，值域为 <Math tex="[0, 2)" /></p>
                      <p>第二段 <Math tex="-x^2+4" />（<Math tex="1 \leqslant x \leqslant 2" />）：代入左端 <Math tex="x=1" /> 得 <Math tex="y=3" /></p>
                      <p>代入右端 <Math tex="x=2" /> 得 <Math tex="y=0" />，递减，值域为 <Math tex="[0, 3]" /></p>
                      <p className="border-t border-gray-200 pt-0.5 font-bold">取并集，得 <Math tex="[0, 2) \cup [0, 3] = [0, 3]" />，值域为 <Math tex="[0, 3]" /></p>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-0.5 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例3. 求函数 <Math tex="f(x) = -\dfrac{x^2}{|x|} + x^2" /> 的定义域和值域</div>
                  <div className="px-3 py-0.5 space-y-0">
                    <p><strong>第一步：化简</strong></p>
                    <p>因为 <Math tex="\dfrac{x^2}{|x|} = |x|" />，所以 <Math tex="f(x) = -|x| + x^2 = x^2 - |x|" /></p>
                    <p className="border-t border-gray-200 pt-0.5"><strong>第二步：求定义域</strong></p>
                    <p>分母 <Math tex="|x|" /> 不能为 0，所以 <Math tex="x \neq 0" />，定义域为 <Math tex="(-\infty,\,0) \cup (0,\,+\infty)" /></p>
                    <p className="border-t border-gray-200 pt-0.5"><strong>第三步：拆成分段函数</strong></p>
                    <div className="flex items-center gap-3">
                      <div>
                        <p>当 <Math tex="x > 0" /> 时，<Math tex="|x| = x" />，得 <Math tex="f(x) = x^2 - x" /></p>
                        <p>当 <Math tex="x < 0" /> 时，<Math tex="|x| = -x" />，得 <Math tex="f(x) = x^2 + x" /></p>
                      </div>
                      <p className="shrink-0">即 <Math tex="f(x) = \begin{cases} x^2 - x, & x > 0 \\ x^2 + x, & x < 0 \end{cases}" /></p>
                    </div>
                    <p className="border-t border-gray-200 pt-0.5"><strong>第四步：逐段求值域</strong></p>
                    <p>第一段 <Math tex="x^2 - x" />（<Math tex="x > 0" />）：顶点 <Math tex="x = \dfrac{1}{2}" />，最小值 <Math tex="\dfrac{1}{4} - \dfrac{1}{2} = -\dfrac{1}{4}" />，值域 <Math tex="\left[-\dfrac{1}{4},\,+\infty\right)" /></p>
                    <p>第二段 <Math tex="x^2 + x" />（<Math tex="x < 0" />）：顶点 <Math tex="x = -\dfrac{1}{2}" />，最小值 <Math tex="\dfrac{1}{4} - \dfrac{1}{2} = -\dfrac{1}{4}" />，值域 <Math tex="\left[-\dfrac{1}{4},\,+\infty\right)" /></p>
                    <p className="border-t border-gray-200 pt-0.5 font-bold">结论：定义域 <Math tex="(-\infty,\,0) \cup (0,\,+\infty)" />，值域 <Math tex="\left[-\dfrac{1}{4},\,+\infty\right)" /></p>
                  </div>
                </div>

              </div>

              <PracticeCard
                questions={piecewiseDomainPractice} title="" explanations={piecewiseExplanations} hideBlankLine
                renderItem={(q, idx) => (
                  <div className="bg-white rounded-lg border border-green-100 px-2 py-0" key={idx}>
                    <span className="text-green-600 mr-1">{idx + 1}.</span>
                    {q.questionLatex ? <Math tex={q.questionLatex} /> : q.question}
                  </div>
                )}
              />
            </Collapsible>
          </section>

          <section id="pw-monotonicity" className="mb-0 scroll-mt-4">
            <Collapsible title="四、分段函数的单调性" defaultOpen storageKey="piecewise:monotonicity">
              <div className="space-y-0 text-[0.9rem] text-gray-800">

                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📋 分析方法</div>
                  <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                    <p><strong>核心思路：</strong>逐段分析每段的单调性，再看分界点处是否衔接</p>
                  </div>
                  <div className="px-3 py-0.5">
                    <p><strong>第一步：</strong>分别判断每段函数在其区间上是递增还是递减</p>
                    <p><strong>第二步：</strong>在每个分界点处检查衔接——把分界点代入左右两段，看函数值是否相等</p>
                    <p className="pl-4">左段 = 定义域在分界点左侧的那段；右段 = 定义域在分界点右侧的那段</p>
                    <p><strong>第三步：</strong>如果相邻两段同向（都增或都减）且衔接，可以合并；否则分开写</p>
                    <p className="border-t border-gray-200 pt-0.5"><strong>⚠️ 注意：</strong>即使每段都递增，分界点不衔接就<strong>不能合并</strong>，必须分别写单调区间</p>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-0.5 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例. 讨论 <Math tex="f(x) = \begin{cases} x+1, & x \leqslant -2 \\ 3x+5, & -2 < x < 2 \\ 2x-1, & x \geqslant 2 \end{cases}" /> 的单调性</div>
                  <div className="px-3 py-0.5 space-y-0">
                    <p><strong>第一步：</strong>逐段判断</p>
                    <p><Math tex="x+1" />（<Math tex="x \leqslant -2" />）斜率 1，递增；<Math tex="3x+5" />（<Math tex="-2 < x < 2" />）斜率 3，递增；<Math tex="2x-1" />（<Math tex="x \geqslant 2" />）斜率 2，递增</p>
                    <p className="border-t border-gray-200 pt-0.5"><strong>第二步：</strong>检查分界点衔接</p>
                    <p>分界点 <Math tex="x=-2" />：左段为 <Math tex="x+1" />（<Math tex="x \leqslant -2" />），右段为 <Math tex="3x+5" />（<Math tex="-2 < x < 2" />）</p>
                    <p>代入 <Math tex="x=-2" />：左段 <Math tex="y = -2+1 = -1" />，右段 <Math tex="y = 3 \times (-2)+5 = -1" />，相等，衔接</p>
                    <p>分界点 <Math tex="x=2" />：左段为 <Math tex="3x+5" />（<Math tex="-2 < x < 2" />），右段为 <Math tex="2x-1" />（<Math tex="x \geqslant 2" />）</p>
                    <p>代入 <Math tex="x=2" />：左段 <Math tex="y = 3 \times 2+5 = 11" />，右段 <Math tex="y = 2 \times 2-1 = 3" />，不相等，不衔接</p>
                    <p className="border-t border-gray-200 pt-0.5 font-bold">结论：三段都递增，但 <Math tex="x=2" /> 处不衔接（11 跳到 3）</p>
                    <p className="font-bold">所以 <Math tex="f(x)" /> 在 <Math tex="(-\infty, 2)" /> 上递增，在 <Math tex="[2, +\infty)" /> 上递增，不能写成整体递增</p>
                  </div>
                </div>

              </div>
            </Collapsible>
          </section>
        </div>
      </LessonLayout>
    </div>
  );
}
