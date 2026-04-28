import { Math, Collapsible, PageHeader, LessonLayout, ExportButton, PracticeCard, DebugGeo2dSvg, PageBreak } from '@/components/shared';
import { piecewiseGraphDiagram, piecewiseExample3Diagram, piecewiseExample4Diagram } from './data/3.1.3/3.1.3-piecewise-diagrams';
import { piecewiseProgressItems } from './data/3.1.3/3.1.3-piecewise-progress';
import { piecewisePractice1, piecewiseDomainPractice, piecewiseMonoPractice, piecewiseParityPractice, piecewiseEquationPractice } from './data/3.1.3/3.1.3-piecewise-practice';
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
        <div className="[&_.rounded-xl]:mb-0 [&_.rounded-xl>.flex.items-center]:py-1 [&_.rounded-xl>div:last-child]:px-0 [&_.rounded-xl>div:last-child]:pt-0 [&_.rounded-xl>div:last-child]:pb-0">
          <section id="pw-concept" className="mb-0 scroll-mt-4">
            <Collapsible title="一、定义与求值" defaultOpen storageKey="piecewise:concept">
              <div className="space-y-0 text-[0.9rem] text-gray-800">

                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">从绝对值说起</div>
                  <div className="px-3 py-0.5">
                    <p>你已经认识了绝对值函数 <Math tex="f(x) = |x|" />。仔细想想它是怎么算的：</p>
                    <div className="flex items-center gap-3 mt-0.5">
                      <div>
                        <p>① 当 <Math tex="x \geqslant 0" /> 时，<Math tex="|x| = x" />，所以 <Math tex="f(x) = x" /></p>
                        <p>② 当 <Math tex="x < 0" /> 时，<Math tex="|x| = -x" />，所以 <Math tex="f(x) = -x" /></p>
                      </div>
                      <p className="shrink-0">写成统一的形式就是：<Math tex="f(x) = \begin{cases} x, & x \geqslant 0 \\ -x, & x < 0 \end{cases}" /></p>
                    </div>
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

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
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

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-0.5 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例：识别隐藏的分段函数 — <Math tex="f(x) = -\dfrac{x^2}{|x|} + x^2" /></div>
                  <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                    <p>有些函数表面不是分段形式，但含绝对值、根号等时，本质上就是分段函数。要学会<strong>识别并改写成分段形式</strong>。</p>
                  </div>
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

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-0.5 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例：含参复合求值. 已知 <Math tex="g(x) = \begin{cases} 2x-1, & x \geqslant 1 \\ x+2, & x < 1 \end{cases}" />，若 <Math tex="g(g(a)) = 3" />，求 <Math tex="a" /></div>
                  <div className="px-3 py-0.5 space-y-0">
                    <p><strong>思路：</strong>设 <Math tex="g(a) = t" />，则 <Math tex="g(t) = 3" />，先解 <Math tex="t" />，再解 <Math tex="a" /></p>
                  </div>
                  <div className="grid grid-cols-[1fr_auto_1fr]">
                    <div className="px-3 py-0.5 space-y-0">
                      <p><strong>第一步：</strong>解外层 <Math tex="g(t) = 3" /></p>
                      <p>第一段：设 <Math tex="t \geqslant 1" />，<Math tex="2t - 1 = 3" />，得 <Math tex="t = 2" />，满足，保留</p>
                      <p>第二段：设 <Math tex="t < 1" />，<Math tex="t + 2 = 3" />，得 <Math tex="t = 1" />，不满足，舍去</p>
                      <p>因为 <Math tex="g(a) = t" /> 且 <Math tex="t = 2" />，所以 <Math tex="g(a) = 2" /></p>
                    </div>
                    <div className="w-px bg-gray-300"></div>
                    <div className="px-3 py-0.5 space-y-0">
                      <p><strong>第二步：</strong>解 <Math tex="g(a) = 2" /></p>
                      <p>第一段：设 <Math tex="a \geqslant 1" />，<Math tex="2a - 1 = 2" />，得 <Math tex="a = \tfrac{3}{2}" />，满足，保留</p>
                      <p>第二段：设 <Math tex="a < 1" />，<Math tex="a + 2 = 2" />，得 <Math tex="a = 0" />，满足，保留</p>
                      <p className="font-bold">结论：<Math tex="a = \tfrac{3}{2}" /> 或 <Math tex="a = 0" /></p>
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
                  <div className="px-2 py-0.5 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例3. 已知 <Math tex="f(x) = \begin{cases} -x+a, & x < 0 \\ x^2+1, & x \geqslant 0 \end{cases}" /> 的值域为 <Math tex="[1, +\infty)" />，求 <Math tex="a" /> 的取值范围</div>
                  <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                    <p><strong>思路：</strong>分段函数值域 = 各段值域的<strong>并集</strong>。先算<strong>不含参</strong>的那段定住范围，再由并集等式反推<strong>含参段</strong>的约束。</p>
                  </div>
                  <div className="px-3 py-0.5 space-y-0">
                    <p><strong>第一步：算不含参段（<Math tex="x \geqslant 0" />）</strong></p>
                    <p><Math tex="f(x) = x^2 + 1" />，<Math tex="x = 0" /> 时取最小值 <Math tex="y = 1" />，向右无限增大，值域为 <Math tex="[1, +\infty)" /></p>
                    <p className="border-t border-gray-200 pt-0.5"><strong>第二步：算含参段（<Math tex="x < 0" />）</strong></p>
                    <p><Math tex="f(x) = -x + a" />，因为 <Math tex="x < 0" />，所以 <Math tex="-x > 0" />，得 <Math tex="f(x) > a" />（取不到 <Math tex="a" />）</p>
                    <p>向左 <Math tex="-x" /> 无限增大，所以值域为 <Math tex="(a, +\infty)" /></p>
                    <p className="border-t border-gray-200 pt-0.5"><strong>第三步：由并集等式反推 <Math tex="a" /></strong></p>
                    <p>两段值域取并集应等于 <Math tex="[1, +\infty)" />。第二段已贡献 <Math tex="[1, +\infty)" />，所以第一段的 <Math tex="(a, +\infty)" /> 必须是 <Math tex="[1, +\infty)" /> 的<strong>子集</strong></p>
                    <p>即 <Math tex="(a, +\infty) \subseteq [1, +\infty)" />，需要 <Math tex="a \geqslant 1" />，<strong>结论：<Math tex="a" /> 的取值范围为 <Math tex="[1, +\infty)" /></strong></p>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📌 求定义域与值域的三招</div>
                  <div className="px-3 py-0.5 space-y-0">
                    <p><strong>① 求定义域：</strong>各段 <Math tex="x" /> 的范围<strong>取并集</strong>，机械套路</p>
                    <p><strong>② 求值域（无参）：</strong>各段先求准（看<strong>单调性</strong>、代<strong>端点</strong>、二次看<strong>顶点</strong>），再取并集化简（如 <Math tex="[0,2) \cup [0,3] = [0,3]" />）</p>
                    <p><strong>③ 含参反推：</strong>先算<strong>不含参段</strong>定住一部分值域，得出<strong>含参段</strong>的值域必须是总值域的<strong>子集</strong>，由包含关系列不等式解参数</p>
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
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📋 通用三步法：分段、衔接、合并</div>
                  <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                    <p><strong>核心：</strong>每段单独看单调性（和普通函数一样），再在<strong>分界点</strong>处查衔接，最后决定能否合并成一个整体单调区间。</p>
                  </div>
                  <div className="px-3 py-0.5 space-y-0 border-b border-gray-300">
                    <p><strong>第一步：逐段判单调</strong></p>
                    <p>对每一段单独判断递增/递减：</p>
                    <p>一次函数看<strong>斜率正负</strong>；二次函数看<strong>开口方向</strong>与<strong>对称轴</strong>相对区间的位置；反比例、指数、对数等套基本函数规律</p>
                    <p className="border-t border-gray-200 pt-0.5"><strong>第二步：查分界点衔接</strong></p>
                    <p>在每个分界点 <Math tex="x_0" /> 处，把 <Math tex="x_0" /> 分别代入左右两段表达式，算出 <Math tex="y_{\text{左}}" /> 和 <Math tex="y_{\text{右}}" />，对比：</p>
                    <p className="pl-4">左段 = 定义域在分界点左侧的那段；右段 = 定义域在分界点右侧的那段</p>
                    <p className="border-t border-gray-200 pt-0.5"><strong>第三步：按整体要求判合并</strong></p>
                  </div>
                  <div className="grid grid-cols-3 border-b border-gray-300 text-center">
                    <div className="px-2 py-0.5 font-bold bg-gray-50 border-r border-gray-300">整体要求</div>
                    <div className="px-2 py-0.5 font-bold bg-gray-50 border-r border-gray-300">各段条件</div>
                    <div className="px-2 py-0.5 font-bold bg-gray-50">分界点衔接条件</div>
                  </div>
                  <div className="grid grid-cols-3 border-b border-gray-300 text-center">
                    <div className="px-2 py-0.5 border-r border-gray-300">整体递增</div>
                    <div className="px-2 py-0.5 border-r border-gray-300">每段都递增</div>
                    <div className="px-2 py-0.5"><Math tex="y_{\text{左}} \leqslant y_{\text{右}}" /></div>
                  </div>
                  <div className="grid grid-cols-3 border-b border-gray-300 text-center">
                    <div className="px-2 py-0.5 border-r border-gray-300">整体递减</div>
                    <div className="px-2 py-0.5 border-r border-gray-300">每段都递减</div>
                    <div className="px-2 py-0.5"><Math tex="y_{\text{左}} \geqslant y_{\text{右}}" /></div>
                  </div>
                  <div className="px-3 py-0.5 bg-amber-50">
                    <p><strong>⚠️ 最易错的坑：</strong>「每段都递增」<strong>不等于</strong>「整体递增」！分界点不衔接，就算每段都增，也只能<strong>分开写</strong>区间，不能合并成整体。</p>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📌 高考高频：已知单调性求参数</div>
                  <div className="px-3 py-0.5 space-y-0">
                    <p><strong>题型：</strong>已知 <Math tex="f(x)" /> 在 <Math tex="\mathbb{R}" /> 上单调递增（或递减），求参数范围</p>
                    <p className="border-t border-gray-200 pt-0.5"><strong>套路：</strong>把整体单调性拆成<strong>两组</strong>不等式</p>
                    <p className="pl-4"><strong>① 每段单调条件</strong>——如每段一次函数斜率 <Math tex="> 0" />，或二次函数对称轴满足条件</p>
                    <p className="pl-4"><strong>② 分界点衔接条件</strong>——整体递增需 <Math tex="y_{\text{左}} \leqslant y_{\text{右}}" /></p>
                    <p className="border-t border-gray-200 pt-0.5">把两组不等式<strong>联立求解</strong>，就是参数的取值范围</p>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-0.5 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例. 讨论 <Math tex="f(x) = \begin{cases} x+1, & x \leqslant -2 \\ 3x+5, & -2 < x < 2 \\ 2x-1, & x \geqslant 2 \end{cases}" /> 的单调性</div>
                  <div className="px-3 py-0.5 space-y-0">
                    <p><strong>第一步：</strong>逐段判断</p>
                    <p><Math tex="x+1" />（<Math tex="x \leqslant -2" />）斜率 1，递增；<Math tex="3x+5" />（<Math tex="-2 < x < 2" />）斜率 3，递增；<Math tex="2x-1" />（<Math tex="x \geqslant 2" />）斜率 2，递增</p>
                    <p className="border-t border-gray-200 pt-0.5"><strong>第二步：</strong>检查分界点衔接</p>
                    <p>分界点 <Math tex="x=-2" />，左段为 <Math tex="x+1" />（<Math tex="x \leqslant -2" />），右段为 <Math tex="3x+5" />（<Math tex="-2 < x < 2" />）</p>
                    <p>代入 <Math tex="x=-2" />，得左段 <Math tex="y = -2+1 = -1" />，右段 <Math tex="y = 3 \times (-2)+5 = -1" />，相等，衔接</p>
                    <p className="border-t border-gray-200 pt-0.5">分界点 <Math tex="x=2" />，左段为 <Math tex="3x+5" />（<Math tex="-2 < x < 2" />），右段为 <Math tex="2x-1" />（<Math tex="x \geqslant 2" />）</p>
                    <p>代入 <Math tex="x=2" />，得左段 <Math tex="y = 3 \times 2+5 = 11" />，右段 <Math tex="y = 2 \times 2-1 = 3" />，不相等，不衔接</p>
                    <p className="border-t border-gray-200 pt-0.5 font-bold">结论：三段都递增，但 <Math tex="x=2" /> 处不衔接（11 跳到 3）</p>
                    <p className="font-bold">所以 <Math tex="f(x)" /> 在 <Math tex="(-\infty, 2)" /> 上递增，在 <Math tex="[2, +\infty)" /> 上递增，不能写成整体递增</p>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-0.5 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例2（类型B）. 已知 <Math tex="f(x) = \begin{cases} x+2, & x < 1 \\ ax-1, & x \geqslant 1 \end{cases}" /> 在 <Math tex="\mathbb{R}" /> 上单调递增，求 <Math tex="a" /> 的取值范围</div>
                  <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                    <p><strong>思路：</strong>按套路列<strong>两组不等式</strong>——各段单调 + 分界点衔接。</p>
                  </div>
                  <div className="px-3 py-0.5 space-y-0">
                    <p><strong>第一步：每段单调条件</strong></p>
                    <p>第一段 <Math tex="x+2" /> 斜率 <Math tex="1 > 0" />，本身就递增，无参数约束</p>
                    <p>第二段 <Math tex="ax-1" /> 要递增，斜率需 <Math tex="a > 0" />，得条件 <strong><Math tex="a > 0" /></strong></p>
                    <p className="border-t border-gray-200 pt-0.5"><strong>第二步：分界点衔接条件</strong></p>
                    <p>分界点 <Math tex="x = 1" />，代入左段得 <Math tex="y_{\text{左}} = 1 + 2 = 3" />；代入右段得 <Math tex="y_{\text{右}} = a - 1" /></p>
                    <p>整体递增需 <Math tex="y_{\text{左}} \leqslant y_{\text{右}}" />，即 <Math tex="3 \leqslant a - 1" />，得条件 <strong><Math tex="a \geqslant 4" /></strong></p>
                    <p className="border-t border-gray-200 pt-0.5"><strong>第三步：取交集</strong></p>
                    <p>两个条件 <Math tex="a > 0" /> 和 <Math tex="a \geqslant 4" /> 取交集，得 <Math tex="a \geqslant 4" /></p>
                    <p className="border-t border-gray-200 pt-0.5 font-bold">结论：<Math tex="a" /> 的取值范围为 <Math tex="[4, +\infty)" /></p>
                  </div>
                </div>

              </div>

              <PracticeCard
                questions={piecewiseMonoPractice} title="" explanations={piecewiseExplanations} hideBlankLine
                renderItem={(q, idx) => (
                  <div className="bg-white rounded-lg border border-green-100 px-2 py-0" key={idx}>
                    <span className="text-green-600 mr-1">{idx + 1}.</span>
                    {q.questionLatex ? <Math tex={q.questionLatex} /> : q.question}
                  </div>
                )}
              />
            </Collapsible>
          </section>

          <section id="pw-parity" className="mb-0 scroll-mt-4">
            <Collapsible title="五、分段函数的奇偶性" defaultOpen storageKey="piecewise:parity">
              <div className="space-y-0 text-[0.9rem] text-gray-800">

                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📋 三步判断法</div>
                  <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                    <p><strong>回顾：</strong>奇函数 <Math tex="f(-x) = -f(x)" />，图像关于<strong>原点</strong>对称；偶函数 <Math tex="f(-x) = f(x)" />，图像关于 <strong>y 轴</strong>对称</p>
                    <p className="mt-0.5"><strong>前提：</strong>定义域必须关于<strong>原点对称</strong>，否则直接判非奇非偶</p>
                  </div>
                  <div className="px-3 py-0.5 space-y-0">
                    <p><strong>第一步：查定义域对称</strong></p>
                    <p>观察两段的 <Math tex="x" /> 范围合起来是否关于原点对称。不对称直接结束</p>
                    <p className="border-t border-gray-200 pt-0.5"><strong>第二步：分类验证（关键步）</strong></p>
                    <p>设 <Math tex="x > 0" />（此时 <Math tex="-x < 0" />）：用 <Math tex="x>0" /> 那段的公式算 <Math tex="f(x)" />，用 <Math tex="x<0" /> 那段的公式算 <Math tex="f(-x)" />，比对关系</p>
                    <p>设 <Math tex="x < 0" />（此时 <Math tex="-x > 0" />）：反过来，用 <Math tex="x<0" /> 那段的公式算 <Math tex="f(x)" />，用 <Math tex="x>0" /> 那段的公式算 <Math tex="f(-x)" /></p>
                    <p>两类都满足 <Math tex="f(-x) = f(x)" />，判<strong>偶函数</strong>；都满足 <Math tex="f(-x) = -f(x)" />，判<strong>奇函数</strong>；否则非奇非偶</p>
                    <p className="border-t border-gray-200 pt-0.5"><strong>第三步：定义域含 0 时补查</strong></p>
                    <p>若是<strong>奇函数</strong>，必须 <Math tex="f(0) = 0" />（偶函数无此要求）</p>
                    <p className="pl-4"><strong>推导：</strong>奇函数 <Math tex="f(-x)=-f(x)" /> 代 <Math tex="x=0" />，得 <Math tex="f(0)=-f(0)" />，移项得 <Math tex="2f(0)=0" />，所以 <Math tex="f(0)=0" /></p>
                    <p className="pl-4"><strong>对比：</strong>偶函数 <Math tex="f(-x)=f(x)" /> 代 <Math tex="x=0" /> 得 <Math tex="f(0)=f(0)" />，恒成立，所以偶函数 <Math tex="f(0)" /> 无约束</p>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">⚠️ 核心坑：求 f(-x) 要「换段」</div>
                  <div className="px-3 py-0.5 border-b border-gray-300 bg-amber-50">
                    <p>分段函数里，<Math tex="x" /> 和 <Math tex="-x" /> 通常<strong>不在同一段</strong>。求 <Math tex="f(-x)" /> 时，要先看 <Math tex="-x" /> 落在哪段，用<strong>那段的公式</strong>代入。</p>
                  </div>
                  <div className="px-3 py-0.5 space-y-0">
                    <p>以 <Math tex="f(x) = \begin{cases} x^2+1, & x \geqslant 0 \\ -x^2-1, & x < 0 \end{cases}" /> 为例，取 <Math tex="x = 2" /></p>
                    <p className="border-t border-gray-200 pt-0.5"><strong>❌ 错误做法：</strong>把 <Math tex="-2" /> 代入<strong>第一段</strong>（<Math tex="x \geqslant 0" /> 那段）</p>
                    <p className="pl-4"><Math tex="f(-2) = (-2)^2 + 1 = 5" />，发现 <Math tex="f(-2) = f(2)" />，误判为偶函数</p>
                    <p className="border-t border-gray-200 pt-0.5"><strong>✓ 正确做法：</strong>因为 <Math tex="-2 < 0" />，要用<strong>第二段</strong>（<Math tex="x < 0" /> 那段）</p>
                    <p className="pl-4"><Math tex="f(-2) = -(-2)^2 - 1 = -5 = -f(2)" />，所以是<strong>奇函数</strong></p>
                    <p className="border-t border-gray-200 pt-0.5 font-bold">记住：「求 <Math tex="f(-x)" /> 前先判 <Math tex="-x" /> 在哪段」，这是分段函数奇偶性的核心步骤！</p>
                    <p className="border-t border-gray-200 pt-0.5"><strong>🔑 常见函数速查——偶函数：</strong><Math tex="x^2" />、<Math tex="x^4" />、<Math tex="|x|" />、<Math tex="\cos x" />、常数</p>
                    <p className="pl-[9.5em]"><strong>奇函数：</strong><Math tex="x" />、<Math tex="x^3" />、<Math tex="\dfrac{1}{x}" />、<Math tex="\sin x" />、<Math tex="\tan x" /></p>
                  </div>
                </div>

                <PageBreak label="奇偶性例题" />

                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-0.5 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例1（判奇偶）. 判断 <Math tex="f(x) = \begin{cases} x^2-1, & x \geqslant 0 \\ -x^2+1, & x < 0 \end{cases}" /> 的奇偶性</div>
                  <div className="px-3 py-0.5 space-y-0">
                    <p><strong>第一步：查定义域</strong></p>
                    <p>定义域为 <Math tex="\mathbb{R}" />，关于原点对称 ✓</p>
                    <p className="border-t border-gray-200 pt-0.5"><strong>第二步：分类验证</strong></p>
                    <p>设 <Math tex="x > 0" />（此时 <Math tex="-x < 0" />），用 <Math tex="x \geqslant 0" /> 那段的公式算 <Math tex="f(x) = x^2 - 1" /></p>
                    <p>用 <Math tex="x < 0" /> 那段的公式算 <Math tex="f(-x) = -(-x)^2 + 1 = -x^2 + 1 = -(x^2 - 1) = -f(x)" /> ✓</p>
                    <p>设 <Math tex="x < 0" />（此时 <Math tex="-x > 0" />），用 <Math tex="x < 0" /> 那段的公式算 <Math tex="f(x) = -x^2 + 1" /></p>
                    <p>用 <Math tex="x \geqslant 0" /> 那段的公式算 <Math tex="f(-x) = (-x)^2 - 1 = x^2 - 1 = -(-x^2 + 1) = -f(x)" /> ✓</p>
                    <p className="border-t border-gray-200 pt-0.5"><strong>第三步：查 <Math tex="f(0)" /></strong></p>
                    <p><Math tex="f(0) = 0^2 - 1 = -1" />。奇函数要求 <Math tex="f(0) = 0" />，这里不满足</p>
                    <p className="border-t border-gray-200 pt-0.5 font-bold">结论：因 <Math tex="f(0) \neq 0" />，<Math tex="f(x)" /> <strong>非奇非偶函数</strong>（注意：即使公式看起来"奇对称"，<Math tex="f(0) \neq 0" /> 就否定了奇函数）</p>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-0.5 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例2（已知奇偶求参数）. 已知 <Math tex="f(x) = \begin{cases} x^2+ax, & x > 0 \\ -x^2+bx, & x < 0 \end{cases}" /> 是奇函数，求 <Math tex="a" /> 和 <Math tex="b" /> 的关系</div>
                  <div className="px-3 py-0.5 space-y-0">
                    <p><strong>第一步：</strong>设 <Math tex="x > 0" />（此时 <Math tex="-x < 0" />），用 <Math tex="x>0" /> 那段得 <Math tex="f(x) = x^2 + ax" /></p>
                    <p className="pl-[4em]">用 <Math tex="x<0" /> 那段得 <Math tex="f(-x) = -(-x)^2 + b(-x) = -x^2 - bx" /></p>
                    <p className="border-t border-gray-200 pt-0.5"><strong>第二步：</strong>奇函数要求 <Math tex="f(-x) = -f(x)" />，代入得 <Math tex="-x^2 - bx = -(x^2 + ax)" /></p>
                    <p>化简得 <Math tex="-x^2 - bx = -x^2 - ax" /></p>
                    <p>对比系数（对所有 <Math tex="x > 0" /> 成立）：<Math tex="-b = -a" />，得 <Math tex="a = b" /></p>
                    <p className="border-t border-gray-200 pt-0.5"><strong>第三步：</strong>定义域为 <Math tex="(-\infty, 0) \cup (0, +\infty)" />，不含 0，无需查 <Math tex="f(0)" /></p>
                    <p className="border-t border-gray-200 pt-0.5 font-bold">结论：<Math tex="a = b" />（<Math tex="a, b" /> 取任意相等的实数均可）</p>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📌 易错速查</div>
                  <div className="px-3 py-0.5 space-y-0">
                    <p><strong>① 漏查定义域对称：</strong>定义域不对称就是非奇非偶，不管公式多漂亮</p>
                    <p><strong>② 求 f(-x) 忘换段：</strong>把 <Math tex="-x" /> 直接代入同一段公式（最常见大坑）</p>
                    <p><strong>③ 奇函数漏查 f(0)=0：</strong>定义域含 0 时必须验证，否则就算公式再对称也不是奇函数</p>
                    <p><strong>④ 只验证一类 x 就下结论：</strong><Math tex="x > 0" /> 和 <Math tex="x < 0" /> 两类都要验</p>
                  </div>
                </div>

              </div>

              <PracticeCard
                questions={piecewiseParityPractice} title="" explanations={piecewiseExplanations} hideBlankLine
                renderItem={(q, idx) => (
                  <div className="bg-white rounded-lg border border-green-100 px-2 py-0" key={idx}>
                    <span className="text-green-600 mr-1">{idx + 1}.</span>
                    {q.questionLatex ? <Math tex={q.questionLatex} /> : q.question}
                  </div>
                )}
              />
            </Collapsible>
          </section>

          <section id="pw-equation" className="mb-0 scroll-mt-4">
            <Collapsible title="六、零点、方程与不等式" defaultOpen storageKey="piecewise:equation">
              <div className="space-y-0 text-[0.9rem] text-gray-800">

                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📋 核心三步法：分段求解、段内验证、取并集</div>
                  <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                    <p><strong>核心思路：</strong>每段公式不同，所以要<strong>逐段</strong>列方程或不等式解出，解完<strong>必须验证</strong>是否在该段范围内，最后<strong>取并集</strong>得整体答案。</p>
                  </div>
                  <div className="px-3 py-0.5 space-y-0">
                    <p><strong>第一步：分段列式</strong></p>
                    <p>对每一段，分别列出 <Math tex="f(x) = k" /> 或 <Math tex="f(x) > k" /> 等</p>
                    <p className="border-t border-gray-200 pt-0.5"><strong>第二步：逐段求解</strong></p>
                    <p>每段独立解方程或不等式，得到候选解或候选解集</p>
                    <p className="border-t border-gray-200 pt-0.5"><strong>第三步：段内验证 + 取并集</strong></p>
                    <p>每个候选解/解集要<strong>与该段的 <Math tex="x" /> 范围取交</strong>（段内验证），保留合格部分；最后把各段合格部分<strong>取并集</strong>作为最终答案</p>
                    <p className="border-t border-gray-200 pt-0.5"><strong>⚠️ 含参题 <Math tex="f(x)=a" /> 解的个数：</strong>画图求各段值域，值域端点就是分界值</p>
                    <p>把每个分界值代回 <Math tex="f(x)=a" />，逐段数解，<strong>解的总数相同的归为同一区间</strong>，由此确定开闭</p>
                    <p className="border-t border-gray-200 pt-0.5"><strong>🎯 一句话口诀：</strong>分段列式，逐段求解，段内验证，最后取并集（含参题另加：代分界值、数解归区间）</p>
                  </div>
                </div>

                <PageBreak label="例1前" />

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-0.5 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例1（求零点）. 逐段解方程，段内验证</div>
                  <div className="grid grid-cols-[1fr_auto_1fr]">
                    <div className="px-3 py-0.5 space-y-0">
                      <p>求 <Math tex="f(x) = \begin{cases} x^2-2x, & x \geqslant 0 \\ x+1, & x < 0 \end{cases}" /> 的零点</p>
                      <p className="border-t border-gray-200 pt-0.5"><strong>第一步：</strong>零点即 <Math tex="f(x) = 0" />，分两段求解</p>
                      <p className="border-t border-gray-200 pt-0.5"><strong>第二步：第一段（<Math tex="x \geqslant 0" />）</strong></p>
                      <p><Math tex="x^2 - 2x = 0" />，得 <Math tex="x(x-2) = 0" />，解出 <Math tex="x = 0" /> 或 <Math tex="x = 2" /></p>
                      <p>段内验证：<Math tex="x=0" /> 满足 <Math tex="x \geqslant 0" /> ✓ 保留</p>
                      <p><span className="invisible">段内验证：</span><Math tex="x=2" /> 满足 <Math tex="x \geqslant 0" /> ✓ 保留</p>
                      <p className="border-t border-gray-200 pt-0.5"><strong>第二段（<Math tex="x < 0" />）</strong></p>
                      <p><Math tex="x + 1 = 0" />，解出 <Math tex="x = -1" /></p>
                      <p>段内验证：<Math tex="x=-1" /> 满足 <Math tex="x < 0" /> ✓，保留</p>
                      <p className="border-t border-gray-200 pt-0.5 font-bold">结论：<Math tex="f(x)" /> 的零点为 <Math tex="x = -1,\,0,\,2" />（共 3 个）</p>
                    </div>
                    <div className="w-px bg-gray-300"></div>
                    <div className="px-3 py-0.5 space-y-0">
                      <p>求 <Math tex="f(x) = \begin{cases} x^2-9, & x \geqslant 0 \\ x+2, & x < 0 \end{cases}" /> 的零点</p>
                      <p className="border-t border-gray-200 pt-0.5"><strong>第一步：</strong>零点即 <Math tex="f(x) = 0" />，分两段求解</p>
                      <p className="border-t border-gray-200 pt-0.5"><strong>第二步：第一段（<Math tex="x \geqslant 0" />）</strong></p>
                      <p><Math tex="x^2 - 9 = 0" />，解出 <Math tex="x = \pm 3" /></p>
                      <p>段内验证：<Math tex="x=3" /> 满足 <Math tex="x \geqslant 0" /> ✓ 保留</p>
                      <p><span className="invisible">段内验证：</span><Math tex="x=-3" /> 不满足 <Math tex="x \geqslant 0" />，舍去</p>
                      <p className="border-t border-gray-200 pt-0.5"><strong>第二段（<Math tex="x < 0" />）</strong></p>
                      <p><Math tex="x + 2 = 0" />，解出 <Math tex="x = -2" /></p>
                      <p>段内验证：<Math tex="x=-2" /> 满足 <Math tex="x < 0" /> ✓，保留</p>
                      <p className="border-t border-gray-200 pt-0.5 font-bold">结论：<Math tex="f(x)" /> 的零点为 <Math tex="x = -2,\,3" />（共 2 个）</p>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-0.5 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例2（解不等式）. 已知 <Math tex="f(x) = \begin{cases} x^2-4, & x \leqslant 0 \\ x-2, & x > 0 \end{cases}" /></div>
                  <div className="grid grid-cols-[1fr_auto_1fr]">
                    <div className="px-3 py-0.5 space-y-0">
                      <p>求 <Math tex="f(x) \geqslant 0" /> 的 <Math tex="x" /> 的取值范围</p>
                      <p className="border-t border-gray-200 pt-0.5"><strong>第一步：分段列不等式</strong></p>
                      <p className="border-t border-gray-200 pt-0.5"><strong>第二步：第一段（<Math tex="x \leqslant 0" />）</strong></p>
                      <p><Math tex="x^2 - 4 \geqslant 0" />，得 <Math tex="x \leqslant -2" /> 或 <Math tex="x \geqslant 2" /></p>
                      <p>段内验证（与 <Math tex="x \leqslant 0" /> 取交集）：得 <Math tex="x \leqslant -2" /></p>
                      <p className="border-t border-gray-200 pt-0.5"><strong>第二段（<Math tex="x > 0" />）</strong></p>
                      <p><Math tex="x - 2 \geqslant 0" />，得 <Math tex="x \geqslant 2" /></p>
                      <p>段内验证（与 <Math tex="x > 0" /> 取交集）：得 <Math tex="x \geqslant 2" /></p>
                      <p className="border-t border-gray-200 pt-0.5"><strong>第三步：取并集</strong></p>
                      <p className="font-bold">结论：解集为 <Math tex="(-\infty,\,-2] \cup [2,\,+\infty)" /></p>
                    </div>
                    <div className="w-px bg-gray-300"></div>
                    <div className="px-3 py-0.5 space-y-0">
                      <p>求 <Math tex="f(x) \leqslant 0" /> 的 <Math tex="x" /> 的取值范围</p>
                      <p className="border-t border-gray-200 pt-0.5"><strong>第一步：分段列不等式</strong></p>
                      <p className="border-t border-gray-200 pt-0.5"><strong>第二步：第一段（<Math tex="x \leqslant 0" />）</strong></p>
                      <p><Math tex="x^2 - 4 \leqslant 0" />，得 <Math tex="-2 \leqslant x \leqslant 2" /></p>
                      <p>段内验证（与 <Math tex="x \leqslant 0" /> 取交集）：得 <Math tex="-2 \leqslant x \leqslant 0" /></p>
                      <p className="border-t border-gray-200 pt-0.5"><strong>第二段（<Math tex="x > 0" />）</strong></p>
                      <p><Math tex="x - 2 \leqslant 0" />，得 <Math tex="x \leqslant 2" /></p>
                      <p>段内验证（与 <Math tex="x > 0" /> 取交集）：得 <Math tex="0 < x \leqslant 2" /></p>
                      <p className="border-t border-gray-200 pt-0.5"><strong>第三步：取并集</strong></p>
                      <p className="font-bold">结论：解集为 <Math tex="[-2,\,0] \cup (0,\,2] = [-2,\,2]" /></p>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-0.5 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例3（高考重点·数形结合）. 已知 <Math tex="f(x) = \begin{cases} -x^2+4x, & x \leqslant 2 \\ 4-x, & x > 2 \end{cases}" />，讨论方程 <Math tex="f(x) = a" /> 解的个数（<Math tex="a" /> 为参数）</div>
                  <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                    <p><strong>思路：</strong>先画出 <Math tex="f(x)" /> 图像，找到图像的<strong>极值点</strong>和<strong>分界点处的 <Math tex="y" /> 值</strong>作为关键分界值，再按 <Math tex="a" /> 落在哪个区间分类数交点个数。</p>
                  </div>
                  <div className="px-3 py-0.5 space-y-0">
                    <p><strong>第一步：画出 <Math tex="f(x)" /> 图像</strong></p>
                    <div className="flex items-start gap-2">
                      <div className="flex-1 space-y-0">
                        <p>第一段 <Math tex="-x^2+4x=-(x-2)^2+4" />（<Math tex="x \leqslant 2" />）：</p>
                        <p>开口向下，对称轴 <Math tex="x=2" /> 在定义域内，代入得最大值 <Math tex="y=4" />，值域 <Math tex="(-\infty,\,4]" /></p>
                        <p>第二段 <Math tex="4-x" />（<Math tex="x > 2" />）：</p>
                        <p>单调递减，因为 <Math tex="x > 2" />，所以 <Math tex="x=2" /> 时 <Math tex="y=2" /> 取不到（画空心圆），值域 <Math tex="(-\infty,\,2)" /></p>
                      </div>
                      <div className="flex-shrink-0 overflow-hidden" style={{ width: 120, height: 98 }}>
                        <DebugGeo2dSvg data={piecewiseExample3Diagram} width={120} height={98} />
                      </div>
                    </div>
                    <p className="pl-4"><strong>⚠️ 分界点衔接条件：<Math tex="x=2" /> 处左段 <Math tex="y_{\text{左}}=4" />，右段 <Math tex="y_{\text{右}} \to 2" />（取不到），<Math tex="y_{\text{左}} \neq y_{\text{右}}" />，不衔接</strong></p>
                    <p className="border-t border-gray-200 pt-0.5"><strong>第二步：用值域确定分界值，代入验算等号归属</strong></p>
                    <p>由第一步知：左段值域 <Math tex="(-\infty,\,4]" />，右段值域 <Math tex="(-\infty,\,2)" />，所以分界值是 <Math tex="a=2" /> 和 <Math tex="a=4" /></p>
                    <p><strong>代入 <Math tex="a=2" />：</strong>左段 <Math tex="-x^2+4x=2" />，解得 <Math tex="x=2-\sqrt{2}" /> 满足 <Math tex="x \leqslant 2" />，有 1 个解</p>
                    <p><strong className="invisible">代入 <Math tex="a=2" />：</strong>右段 <Math tex="4-x=2" />，<Math tex="x=2" /> 不满足 <Math tex="x>2" />，无解，共 <strong>1 个</strong></p>
                    <p><strong>代入 <Math tex="a=4" />：</strong>左段 <Math tex="-x^2+4x=4" />，解得 <Math tex="x=2" /> 满足 <Math tex="x \leqslant 2" />，有 1 个解</p>
                    <p><strong className="invisible">代入 <Math tex="a=4" />：</strong>右段 <Math tex="4-x=4" />，<Math tex="x=0" /> 不满足 <Math tex="x>2" />，无解，共 <strong>1 个</strong></p>
                    <p>两个分界值都是 1 个解，所以 <Math tex="2 \leqslant a \leqslant 4" /> 都归为 <strong>1 个交点</strong></p>
                    <p><strong>当 <Math tex="a < 2" /> 时（验 <Math tex="a=0" />）：</strong>左段 <Math tex="-x^2+4x=0" /> 得 <Math tex="x=0" /> ✓ 1 解</p>
                    <p><strong className="invisible">当 <Math tex="a < 2" /> 时（验 <Math tex="a=0" />）：</strong>右段 <Math tex="4-x=0" /> 得 <Math tex="x=4" /> 满足 <Math tex="x>2" /> ✓ 1 解，共 <strong>2 个交点</strong></p>
                    <p><strong>当 <Math tex="a > 4" /> 时（验 <Math tex="a=5" />）：</strong>左段 <Math tex="-x^2+4x=5" /> 即 <Math tex="x^2-4x+5=0" /> 判别式 <Math tex="<0" /> 无实根</p>
                    <p><strong className="invisible">当 <Math tex="a > 4" /> 时（验 <Math tex="a=5" />）：</strong>右段 <Math tex="4-x=5" /> 得 <Math tex="x=-1" /> 不满足 <Math tex="x>2" />，共 <strong>0 个交点</strong></p>
                    <div className="border-t border-gray-200 pt-0.5 flex items-center gap-2">
                      <p className="font-bold flex-1">结论：<Math tex="a < 2" /> 时 2 个交点；<Math tex="2 \leqslant a \leqslant 4" /> 时 1 个交点；<Math tex="a > 4" /> 时 0 个交点（无解）</p>
                      <svg width="180" height="40" className="flex-shrink-0" style={{ fontSize: 11 }}>
                        <defs><marker id="arr3" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#374151" strokeWidth="1" /></marker></defs>
                        <line x1="8" y1="18" x2="172" y2="18" stroke="#374151" strokeWidth="1" markerEnd="url(#arr3)" />
                        <circle cx="55" cy="18" r="3.5" fill="#374151" />
                        <circle cx="120" cy="18" r="3.5" fill="#374151" />
                        <text x="55" y="35" textAnchor="middle" fill="#374151" fontSize="11">2</text>
                        <text x="120" y="35" textAnchor="middle" fill="#374151" fontSize="11">4</text>
                        <text x="28" y="10" textAnchor="middle" fill="#1d4ed8" fontSize="10" fontWeight="bold">2个</text>
                        <text x="87" y="10" textAnchor="middle" fill="#1d4ed8" fontSize="10" fontWeight="bold">1个</text>
                        <text x="150" y="10" textAnchor="middle" fill="#1d4ed8" fontSize="10" fontWeight="bold">0个</text>
                        <text x="175" y="35" textAnchor="middle" fill="#6b7280" fontSize="10">a</text>
                      </svg>
                    </div>
                  </div>
                </div>

                <PageBreak label="例4" />
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-0.5 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例4（分界值归属不同的情况）. 已知 <Math tex="f(x) = \begin{cases} -x+4, & x \leqslant 1 \\ 2x-1, & x > 1 \end{cases}" />，讨论方程 <Math tex="f(x) = a" /> 解的个数</div>
                  <div className="px-3 py-0.5 space-y-0">
                    <p><strong>第一步：画出 <Math tex="f(x)" /> 图像，求各段值域</strong></p>
                    <div className="flex items-start gap-2">
                      <div className="flex-1 space-y-0">
                        <p>第一段 <Math tex="-x+4" />（<Math tex="x \leqslant 1" />），斜率 <Math tex="k=-1<0" />，单调递减：</p>
                        <p>因为 <Math tex="x \leqslant 1" />，<Math tex="x=1" /> 时 <Math tex="y=3" /> 取得到（最小值），值域 <Math tex="[3,\,+\infty)" /></p>
                        <p>第二段 <Math tex="2x-1" />（<Math tex="x > 1" />），斜率 <Math tex="k=2>0" />，单调递增：</p>
                        <p>因为 <Math tex="x > 1" />，所以 <Math tex="x=1" /> 时 <Math tex="y=1" /> 取不到（画空心圆），值域 <Math tex="(1,\,+\infty)" /></p>
                        <p>分界值：<Math tex="a=1" /> 和 <Math tex="a=3" /></p>
                      </div>
                      <div className="flex-shrink-0 overflow-hidden" style={{ width: 120, height: 98 }}>
                        <DebugGeo2dSvg data={piecewiseExample4Diagram} width={120} height={98} />
                      </div>
                    </div>
                    <p className="border-t border-gray-200 pt-0.5"><strong>第二步：代入分界值验算</strong></p>
                    <p><strong>代入 <Math tex="a=1" />：</strong>左段 <Math tex="-x+4=1" />，解得 <Math tex="x=3" />，不满足 <Math tex="x \leqslant 1" />，无解</p>
                    <p><strong className="invisible">代入 <Math tex="a=1" />：</strong>右段 <Math tex="2x-1=1" />，<Math tex="x=1" />，不满足 <Math tex="x>1" />，无解，共 <strong>0 个</strong></p>
                    <p><strong>代入 <Math tex="a=3" />：</strong>左段 <Math tex="-x+4=3" />，解得 <Math tex="x=1" />，满足 <Math tex="x \leqslant 1" />，有 1 个解</p>
                    <p><strong className="invisible">代入 <Math tex="a=3" />：</strong>右段 <Math tex="2x-1=3" />，<Math tex="x=2" />，满足 <Math tex="x>1" />，有 1 个解，共 <strong>2 个</strong></p>
                    <p><strong>两个分界值结果不同！</strong><Math tex="a=1" /> 是 0 个，<Math tex="a=3" /> 是 2 个，分别归到不同组</p>
                    <p>当 <Math tex="a \leqslant 1" /> 时，左段无解，右段无解，共 <strong>0 个交点</strong></p>
                    <p>当 <Math tex="1 < a < 3" /> 时，左段无解，右段有 1 个解，共 <strong>1 个交点</strong></p>
                    <p>当 <Math tex="a \geqslant 3" /> 时，左段有 1 个解，右段有 1 个解，共 <strong>2 个交点</strong></p>
                    <div className="border-t border-gray-200 pt-0.5 flex items-center gap-2">
                      <p className="font-bold flex-1">结论：<Math tex="a \leqslant 1" /> 时 0 个交点；<Math tex="1 < a < 3" /> 时 1 个交点；<Math tex="a \geqslant 3" /> 时 2 个交点</p>
                      <svg width="180" height="40" className="flex-shrink-0" style={{ fontSize: 11 }}>
                        <defs><marker id="arr4" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#374151" strokeWidth="1" /></marker></defs>
                        <line x1="8" y1="18" x2="172" y2="18" stroke="#374151" strokeWidth="1" markerEnd="url(#arr4)" />
                        <circle cx="55" cy="18" r="3.5" fill="white" stroke="#374151" strokeWidth="1.5" />
                        <circle cx="120" cy="18" r="3.5" fill="#374151" />
                        <text x="55" y="35" textAnchor="middle" fill="#374151" fontSize="11">1</text>
                        <text x="120" y="35" textAnchor="middle" fill="#374151" fontSize="11">3</text>
                        <text x="28" y="10" textAnchor="middle" fill="#1d4ed8" fontSize="10" fontWeight="bold">0个</text>
                        <text x="87" y="10" textAnchor="middle" fill="#1d4ed8" fontSize="10" fontWeight="bold">1个</text>
                        <text x="150" y="10" textAnchor="middle" fill="#1d4ed8" fontSize="10" fontWeight="bold">2个</text>
                        <text x="175" y="35" textAnchor="middle" fill="#6b7280" fontSize="10">a</text>
                      </svg>
                    </div>
                    <p className="text-gray-700">注意：中间区间是 <Math tex="(1,\,3)" />，两边都开——等号不一定都有！</p>
                  </div>
                </div>

              </div>

              <PracticeCard
                questions={piecewiseEquationPractice} title="" explanations={piecewiseExplanations} hideBlankLine
                renderItem={(q, idx) => (
                  <div className="bg-white rounded-lg border border-green-100 px-2 py-0" key={idx}>
                    <span className="text-green-600 mr-1">{idx + 1}.</span>
                    {q.questionLatex ? <Math tex={q.questionLatex} /> : q.question}
                  </div>
                )}
              />
            </Collapsible>
          </section>

          <section id="pw-summary" className="mb-0 scroll-mt-4">
            <div className="text-[0.9rem] text-gray-800 bg-white rounded-lg border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-1">📌 分段函数六大主题速查总结</p>
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="grid grid-cols-[auto_1.3fr_1.5fr] border-b border-gray-400 bg-gray-100 font-bold text-center">
                    <div className="px-2 py-1 border-r border-gray-400">主题</div>
                    <div className="px-2 py-1 border-r border-gray-400">核心方法</div>
                    <div className="px-2 py-1">易错点 / 关键验证</div>
                  </div>
                  <div className="grid grid-cols-[auto_1.3fr_1.5fr] border-b border-gray-300">
                    <div className="px-2 py-1 border-r border-gray-300 font-bold bg-gray-50 flex items-center justify-center">一、求值</div>
                    <div className="px-2 py-1 border-r border-gray-300">先判 <Math tex="x" /> 落在哪段，再代入对应公式计算</div>
                    <div className="px-2 py-1">反向求值（已知 <Math tex="f(a)=k" />）解完必须验证解是否满足该段区间，不满足舍去</div>
                  </div>
                  <div className="grid grid-cols-[auto_1.3fr_1.5fr] border-b border-gray-300">
                    <div className="px-2 py-1 border-r border-gray-300 font-bold bg-gray-50 flex items-center justify-center">二、图像</div>
                    <div className="px-2 py-1 border-r border-gray-300">算端点（定界）+ 各画各的（分段）+ 多余擦掉（截断）</div>
                    <div className="px-2 py-1">端点实心 ● / 空心 ○ 看区间含不含等号；两段端点 <Math tex="y" /> 不同时不能连起来</div>
                  </div>
                  <div className="grid grid-cols-[auto_1.3fr_1.5fr] border-b border-gray-300">
                    <div className="px-2 py-1 border-r border-gray-300 font-bold bg-gray-50 flex items-center justify-center">三、定义域与值域</div>
                    <div className="px-2 py-1 border-r border-gray-300">定义域：各段 <Math tex="x" /> 范围取<strong>并集</strong>；值域：各段值域先求准再取并集</div>
                    <div className="px-2 py-1">值域并集要化简重叠；含参反推用「含参段值域 <Math tex="\subseteq" /> 总值域」列不等式</div>
                  </div>
                  <div className="grid grid-cols-[auto_1.3fr_1.5fr] border-b border-gray-300">
                    <div className="px-2 py-1 border-r border-gray-300 font-bold bg-gray-50 flex items-center justify-center">四、单调性</div>
                    <div className="px-2 py-1 border-r border-gray-300">逐段判单调 + 分界点衔接 + 按整体要求判合并</div>
                    <div className="px-2 py-1">「每段递增 ≠ 整体递增」；整体递增需 <Math tex="y_{\text{左}} \leqslant y_{\text{右}}" />；不衔接只能分开写区间</div>
                  </div>
                  <div className="grid grid-cols-[auto_1.3fr_1.5fr] border-b border-gray-300">
                    <div className="px-2 py-1 border-r border-gray-300 font-bold bg-gray-50 flex items-center justify-center">五、奇偶性</div>
                    <div className="px-2 py-1 border-r border-gray-300">查定义域对称 + 分类验证 <Math tex="f(-x)" />（要换段）+ 定义域含 0 时补查 <Math tex="f(0)" /></div>
                    <div className="px-2 py-1">求 <Math tex="f(-x)" /> 要换段是最大坑；奇函数在定义域含 0 时必须 <Math tex="f(0)=0" /></div>
                  </div>
                  <div className="grid grid-cols-[auto_1.3fr_1.5fr]">
                    <div className="px-2 py-1 border-r border-gray-300 font-bold bg-gray-50 flex items-center justify-center">六、零点、方程与不等式</div>
                    <div className="px-2 py-1 border-r border-gray-300">分段列式 + 逐段求解 + 段内验证 + 取并集</div>
                    <div className="px-2 py-1">含参 <Math tex="f(x)=a" /> 数解：代入分界值验证归属，相同归为一区间，不同分开并注意开闭</div>
                  </div>
                </div>
                <p className="mt-1"><strong>🎯 核心思想：</strong>分段函数本质是「同一函数，不同区间不同公式」，所有题型遵循<strong>逐段处理 + 段内验证 + 最后合并</strong>的三部曲。</p>
                <p><strong>⚠️ 高考三大命题点：</strong>反向/复合求值的<strong>舍解验证</strong> · 已知单调性<strong>求参数</strong> · <Math tex="f(x)=a" /> <strong>解的个数讨论</strong>。</p>
            </div>
          </section>
        </div>
      </LessonLayout>
    </div>
  );
}
