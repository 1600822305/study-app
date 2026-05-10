import { Math, PageHeader, LessonLayout, ExportButton, Collapsible, UnifiedDebugToggle, PracticeCard, PrintQuestions } from '@/components/shared';
import { DebugGeo2dSvg } from '@/components/shared/geo2d';
import { useProgress, usePrintMode } from '@/hooks';
import { absoluteValueProgressItems } from './data/2.2/2.2-progress';
import { absoluteValueNumberLine, absGraphTransform, absGraphInputTransform } from './data/2.2/2.2-diagrams';
import { absDefinitionPractice, absClassifyPractice, absEquationPractice, absInequalityPractice, absTrianglePractice, absParamPractice } from './data/2.2/2.2-absolute-value-practice';
import { absDefinitionExplanations, absClassifyExplanations, absEquationExplanations, absInequalityExplanations, absTriangleExplanations, absParamExplanations, AbsoluteValueAnswers } from './2.2-absolute-value-answers';


export function AbsoluteValuePage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('absolute-value', absoluteValueProgressItems);
  const { isPrinting, printOptions } = usePrintMode();

  return (
    <div>
      <div className="[&_h1]:!mb-0 [&_.flex.flex-wrap]:!mt-1">
        <PageHeader
          stage="第二阶段"
          title="2.2 绝对值"
          subtitle="搞清楚绝对值的本质，为复合函数单调性打基础"
          tags={[]}
        />
      </div>

      <div className="flex justify-end mb-2 print:hidden gap-2">
        <UnifiedDebugToggle />
        <ExportButton title="2.2 绝对值" />
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>
        <div className="[&_.rounded-xl]:mb-0 [&_.rounded-xl>.flex.items-center]:py-0.5 [&_.rounded-xl>div:last-child]:px-0 [&_.rounded-xl>div:last-child]:pt-0 [&_.rounded-xl>div:last-child]:pb-0 [&_.rounded-xl_button>span]:font-bold [&_.rounded-xl_button>span]:text-gray-900">

      {/* ═══════════════════════════════════════════════════════ */}
      {/* 分组一：绝对值 */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section id="abs-what" className="mb-0 scroll-mt-4">
        <Collapsible title="一、绝对值" defaultOpen storageKey="abs:what">
          <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-900 border-b border-gray-400 bg-gray-100">📖 定义</div>
              <div className="px-3 py-1 space-y-0.5 leading-6">
                <p>绝对值是指一个数到原点的距离，用"<Math tex="|\;|" />"来表示</p>
                <div className="flex justify-center">
                  <DebugGeo2dSvg data={absoluteValueNumberLine} width={400} height={81} />
                </div>
                <p>数 <Math tex="a" /> 到原点 <Math tex="0" /> 的距离，为 <Math tex="a" /> 的绝对值，也就是 <Math tex="|a|" /></p>
                <div className="grid grid-cols-2 gap-x-4">
                  <table className="border-collapse [&_td]:border [&_td]:border-gray-300 [&_th]:border [&_th]:border-gray-300 [&_td]:px-3 [&_td]:py-0.5 [&_th]:px-3 [&_th]:py-0.5 text-center">
                    <thead className="bg-gray-50">
                      <tr>
                        <th>数</th>
                        <th>到原点的距离</th>
                        <th>绝对值</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><Math tex="3" /></td>
                        <td><Math tex="3" /></td>
                        <td><Math tex="|3| = 3" /></td>
                      </tr>
                      <tr>
                        <td><Math tex="-3" /></td>
                        <td><Math tex="3" /></td>
                        <td><Math tex="|-3| = 3" /></td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="border-collapse [&_td]:border [&_td]:border-gray-300 [&_th]:border [&_th]:border-gray-300 [&_td]:px-3 [&_td]:py-0.5 [&_th]:px-3 [&_th]:py-0.5 text-center">
                    <thead className="bg-gray-50">
                      <tr>
                        <th>数</th>
                        <th>到原点的距离</th>
                        <th>绝对值</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><Math tex="5" /></td>
                        <td><Math tex="5" /></td>
                        <td><Math tex="|5| = 5" /></td>
                      </tr>
                      <tr>
                        <td><Math tex="-5" /></td>
                        <td><Math tex="5" /></td>
                        <td><Math tex="|-5| = 5" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>由以上例子可以看出，正数的绝对值等于它本身，而负数的绝对值就等于它的相反数</p>
                <hr className="border-gray-400" />
                <p>那如果给你一个任意的数 <Math tex="a" />，它的绝对值是什么呢？</p>
                <div className="flex justify-center">
                  <Math tex="\text{任意的数}\;a\;\begin{cases} a > 0,\;|a| = a \\ a = 0,\;|a| = 0 \\ a < 0,\;|a| = -a \end{cases}" /></div>
                <div className="border border-gray-400 rounded overflow-hidden flex">
                  <div className="flex-[3] px-3 py-2 space-y-2">
                    <p><span className="font-bold">如果 <Math tex="|a| = a" />，那 <Math tex="a" /> 等于多少呢？</span>由绝对值的分段定义可知：</p>
                    <p>当 <Math tex="a > 0" /> 时，<Math tex="|a| = a" />；</p>
                    <p>当 <Math tex="a = 0" /> 时，<Math tex="|a| = 0 = a" />；</p>
                    <p>当 <Math tex="a < 0" /> 时，<Math tex="|a| = -a" />，不等于 <Math tex="a" />。所以 <Math tex="|a| = a" /> 等价于 <Math tex="a \geq 0" />。</p>
                  </div>
                  <div className="w-px bg-gray-400" />
                  <div className="flex-[1] px-3 py-2 space-y-2">
                    <p className="font-bold">如果 <Math tex="|a| = 3" />，那 <Math tex="a = \;?" /></p>
                    <p>由数轴可得，<Math tex="a = 3" /> 或 <Math tex="-3" /></p>
                    <p>也可以写成 <Math tex="a = \pm 3" /></p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-400 rounded overflow-hidden border-t-0 -mt-px">
                <div className="px-2 py-1 font-bold text-gray-900 border-b border-gray-400 bg-gray-100">📍 例题：绝对值定义的应用</div>
                <div className="px-3 py-1 space-y-1 leading-6">
                  <p className="font-bold">已知实数 <Math tex="a" />、<Math tex="b" /> 满足 <Math tex="|a - 2b| = a - 2b" /> 且 <Math tex="|a - b - 3| = -(a - b - 3)" />，求 <Math tex="b" /> 的取值范围</p>
                  <hr className="border-gray-400" />
                  <p><strong>读题</strong>：两个绝对值条件，一个等于本身，一个等于相反数，用定义转化为不等式</p>
                  <p><strong>第一步</strong>：<Math tex="|a-2b| = a-2b" />，由定义 <Math tex="|x|=x \Leftrightarrow x \geq 0" />，得 <Math tex="a - 2b \geq 0" />，即 <Math tex="a \geq 2b" /> ①</p>
                  <p><strong>第二步</strong>：<Math tex="|a-b-3| = -(a-b-3)" />，由定义 <Math tex="|x|=-x \Leftrightarrow x \leq 0" />，得 <Math tex="a-b-3 \leq 0" />，即 <Math tex="a \leq b+3" /> ②</p>
                  <p><strong>第三步</strong>：联立 ① ② 得 <Math tex="2b \leq a \leq b+3" /></p>
                  <p className="pl-4">要使 <Math tex="a" /> 存在，需 <Math tex="2b \leq b+3" />，解得 <Math tex="b \leq 3" /></p>
                  <p><strong>结论</strong>：<Math tex="b" /> 的取值范围为 <Math tex="(-\infty, 3]" /></p>
                </div>
              </div>

              <div className="text-base print:hidden">
                <PracticeCard title="✏️ 练习（绝对值定义应用）" questions={absDefinitionPractice} explanations={absDefinitionExplanations} hideBlankLine optionCols={1} printOptionCols={1}
                  renderItem={(q, idx) => (
                    <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                      <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                      {q.questionLatex && <Math tex={q.questionLatex} />}
                    </p>
                  )}
                />
              </div>
              <div className="text-base hidden print:block">
                <PrintQuestions questions={absDefinitionPractice} printOptionCols={1} columns={1} />
              </div>

              <div className="border border-gray-400 rounded overflow-hidden border-t-0 -mt-px">
                <div className="px-2 py-1 font-bold text-gray-900 border-b border-gray-400 bg-gray-100">🔑 去绝对值</div>
                <div className="px-3 py-1 space-y-1 leading-6">
                  <p><strong>核心问题</strong>：绝对值符号挡在那里，没法继续算。怎么把它去掉？</p>
                  <p><strong>答案</strong>：看绝对值<strong>里面</strong>的式子是正还是负，然后按定义去掉</p>
                  <table className="w-full border-collapse border border-gray-400 text-center [&_th]:border [&_th]:border-gray-400 [&_th]:px-3 [&_th]:py-1 [&_td]:border [&_td]:border-gray-400 [&_td]:px-3 [&_td]:py-1">
                    <thead className="bg-gray-50">
                      <tr>
                        <th>里面的式子</th>
                        <th>去绝对值方法</th>
                        <th>例子</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><Math tex="\geq 0" />（正或零）</td>
                        <td><strong>直接去掉</strong>绝对值符号</td>
                        <td><Math tex="|x-1|=x-1" />（当 <Math tex="x \geq 1" /> 时）</td>
                      </tr>
                      <tr>
                        <td><Math tex="< 0" />（负）</td>
                        <td>去掉绝对值后<strong>加负号</strong></td>
                        <td><Math tex="|x-1|=-(x-1)=1-x" />（当 <Math tex="x < 1" /> 时）</td>
                      </tr>
                    </tbody>
                  </table>
                  <p><strong>怎么判断里面是正还是负？</strong></p>
                  <p className="pl-2"><strong>情况一</strong>：题目直接告诉你范围（如"当 <Math tex="x > 3" /> 时"）→ 代入判断正负</p>
                  <p className="pl-2"><strong>情况二</strong>：题目没告诉 → 自己<strong>分类讨论</strong>，找<strong>分界点</strong>把数轴分成几段</p>
                  <p className="pl-2"><strong>情况三</strong>：题目给了 <Math tex="|f(x)| = f(x)" /> 这样的条件 → 反推 <Math tex="f(x) \geq 0" />（定义的逆用）</p>
                  <hr className="border-gray-400" />
                  <p className="font-bold">例：化简 <Math tex="|x - 3|" />（当 <Math tex="x > 3" /> 时）</p>
                  <p className="pl-4">因为 <Math tex="x > 3" />，移项得 <Math tex="x - 3 > 0" />，里面是正的，直接去掉，<Math tex="|x-3| = x-3" /></p>
                  <hr className="border-gray-400" />
                  <p className="font-bold">例（分类讨论）：化简 <Math tex="|x - 2| + 3x" /></p>
                  <p className="pl-4"><strong>分界点</strong>：令 <Math tex="x-2=0" />，得 <Math tex="x = 2" /></p>
                  <p className="pl-4">当 <Math tex="x \geq 2" /> 时，<Math tex="x-2 \geq 0" />，去绝对值得 <Math tex="(x-2)+3x = 4x-2" /></p>
                  <p className="pl-4">当 <Math tex="x < 2" /> 时，<Math tex="x-2 < 0" />，去绝对值得 <Math tex="-(x-2)+3x = 2x+2" /></p>
                  <p className="pl-4"><strong>结果</strong>：<Math tex="|x-2|+3x = \begin{cases} 4x-2, & x \geq 2 \\ 2x+2, & x < 2 \end{cases}" /></p>
                  <hr className="border-gray-400" />
                  <p><strong>💡 一句话</strong>：去绝对值就是<strong>判断正负 → 正就直接去，负就加负号</strong>。所有绝对值题的第一步都是这个。</p>
                </div>
              </div>

              <div className="text-base print:hidden">
                <PracticeCard title="✏️ 练习（分类讨论去绝对值）" questions={absClassifyPractice} explanations={absClassifyExplanations} hideBlankLine optionCols={1} printOptionCols={1}
                  renderItem={(q, idx) => (
                    <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                      <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                      {q.questionLatex && <Math tex={q.questionLatex} />}
                    </p>
                  )}
                />
              </div>
              <div className="text-base hidden print:block">
                <PrintQuestions questions={absClassifyPractice} printOptionCols={1} columns={2} />
              </div>

            </div>

          </div>
        </Collapsible>
      </section>

      <section id="abs-calc" className="mb-0 scroll-mt-4">
        <Collapsible title="二、绝对值方程、不等式与三角不等式" defaultOpen storageKey="abs:calc" hideTitleOnPrint>
          <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

              <div className="border border-gray-400 rounded overflow-hidden">
                <div className="px-2 py-1 font-bold text-gray-900 border-b border-gray-400 bg-gray-100">📐 绝对值方程</div>
                <div className="px-3 py-1 space-y-1 leading-6 text-[0.85rem]">
                  <p><strong>核心思路</strong>：方程里有绝对值 → 去掉它 → 变成普通方程</p>
                  <hr className="border-gray-400" />

                  <p className="font-bold">类型一：<Math tex="|f(x)| = a" />（等于常数）</p>
                  <table className="w-full border-collapse border border-gray-400 text-center [&_th]:border [&_th]:border-gray-400 [&_th]:px-3 [&_th]:py-0.5 [&_td]:border [&_td]:border-gray-400 [&_td]:px-3 [&_td]:py-0.5">
                    <thead className="bg-gray-50">
                      <tr>
                        <th><Math tex="a" /> 的值</th>
                        <th>解法</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><Math tex="a > 0" /></td>
                        <td><Math tex="f(x) = a" /> 或 <Math tex="f(x) = -a" /></td>
                      </tr>
                      <tr>
                        <td><Math tex="a = 0" /></td>
                        <td><Math tex="f(x) = 0" /></td>
                      </tr>
                      <tr>
                        <td><Math tex="a < 0" /></td>
                        <td><strong>无解</strong>（绝对值不可能为负）</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="font-bold">例：解方程 <Math tex="|x - 1| = 3" /></p>
                  <p className="pl-4"><Math tex="3 > 0" />，拆成：<Math tex="x - 1 = 3" /> 或 <Math tex="x - 1 = -3" />，解得 <Math tex="x = 4" /> 或 <Math tex="x = -2" /></p>
                  <hr className="border-gray-400" />

                  <div className="flex gap-4">
                    <div className="flex-1">
                      <p className="font-bold">类型二：<Math tex="|f(x)| = g(x)" /></p>
                      <p>拆成：<Math tex="f(x) = g(x)" /> 或 <Math tex="f(x) = -g(x)" /></p>
                      <p className="font-bold">例：<Math tex="|3x - 6| = x + 2" /></p>
                      <p className="pl-4">① <Math tex="3x - 6 = x + 2" />，得 <Math tex="x = 4" /></p>
                      <p className="pl-4">② <Math tex="3x - 6 = -(x+2)" />，得 <Math tex="x = 1" /></p>
                      <p className="pl-4"><strong>答</strong>：<Math tex="x = 4" /> 或 <Math tex="x = 1" /></p>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold">类型三：<Math tex="|f(x)| = |g(x)|" /></p>
                      <p>里面要么相等，要么互为相反数</p>
                      <p className="font-bold">例：<Math tex="|x + 1| = |3x - 5|" /></p>
                      <p className="pl-4">① <Math tex="x + 1 = 3x - 5" />，得 <Math tex="x = 3" /></p>
                      <p className="pl-4">② <Math tex="x + 1 = -(3x - 5)" />，得 <Math tex="x = 1" /></p>
                      <p className="pl-4"><strong>答</strong>：<Math tex="x = 3" /> 或 <Math tex="x = 1" /></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-base print:hidden">
                <PracticeCard title="✏️ 练习（绝对值方程）" questions={absEquationPractice} explanations={absEquationExplanations} hideBlankLine optionCols={2} printOptionCols={2}
                  renderItem={(q, idx) => (
                    <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                      <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                      {q.questionLatex && <Math tex={q.questionLatex} />}
                    </p>
                  )}
                />
              </div>
              <div className="text-base hidden print:block">
                <PrintQuestions questions={absEquationPractice} printOptionCols={2} columns={2} />
              </div>

              <div className="border border-gray-400 rounded overflow-hidden border-t-0 -mt-px">
                <div className="px-2 py-1 font-bold text-gray-900 border-b border-gray-400 bg-gray-100">📐 绝对值不等式</div>
                <div className="px-3 py-1 space-y-1 leading-6 text-[0.85rem]">
                  <p><strong>核心思路</strong>：和方程一样，去掉绝对值，变成普通不等式</p>
                  <hr className="border-gray-400" />

                  <div className="flex gap-4">
                    <div className="flex-1">
                      <p className="font-bold">类型一：<Math tex="|f(x)| < a" />（小于取中间）</p>
                      <p>当 <Math tex="a > 0" /> 时，<Math tex="|f(x)| < a" /> 等价于 <Math tex="-a < f(x) < a" /></p>
                      <p className="font-bold">例：解不等式 <Math tex="|2x - 1| < 3" /></p>
                      <p className="pl-4">小于取中间：<Math tex="-3 < 2x - 1 < 3" /></p>
                      <p className="pl-4">各部分加1：<Math tex="-2 < 2x < 4" /></p>
                      <p className="pl-4">各部分除以2：<Math tex="-1 < x < 2" /></p>
                      <p className="pl-4"><strong>答</strong>：<Math tex="x \in (-1, 2)" /></p>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold">类型二：<Math tex="|f(x)| > a" />（大于取两边）</p>
                      <p>当 <Math tex="a > 0" /> 时，<Math tex="|f(x)| > a" /> 等价于 <Math tex="f(x) > a" /> 或 <Math tex="f(x) < -a" /></p>
                      <p className="font-bold">例：解不等式 <Math tex="|x + 2| \geq 5" /></p>
                      <p className="pl-4">大于取两边：<Math tex="x + 2 \geq 5" /> 或 <Math tex="x + 2 \leq -5" /></p>
                      <p className="pl-4">解得：<Math tex="x \geq 3" /> 或 <Math tex="x \leq -7" /></p>
                      <p className="pl-4"><strong>答</strong>：<Math tex="x \in (-\infty, -7] \cup [3, +\infty)" /></p>
                    </div>
                  </div>
                  <hr className="border-gray-400" />

                  <p className="font-bold">类型三：<Math tex="|f(x)| < g(x)" /> 或 <Math tex="|f(x)| > g(x)" />（右边是表达式），和方程类型二一样拆开</p>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <p className="font-bold">例：解不等式 <Math tex="|x + 1| < 2x - 1" /></p>
                      <p className="pl-4">小于取中间：<Math tex="-(2x-1) < x + 1 < 2x - 1" /></p>
                      <p className="pl-4">左边：<Math tex="-2x+1 < x+1" />，得 <Math tex="x > 0" /></p>
                      <p className="pl-4">右边：<Math tex="x+1 < 2x-1" />，得 <Math tex="x > 2" /></p>
                      <p className="pl-4">取交集：<Math tex="x > 2" /></p>
                      <p className="pl-4"><strong>答</strong>：<Math tex="x \in (2, +\infty)" /></p>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold">例：解不等式 <Math tex="|3x + 2| > x + 6" /></p>
                      <p className="pl-4">大于取两边：<Math tex="3x + 2 > x + 6" /> 或 <Math tex="3x + 2 < -(x+6)" /></p>
                      <p className="pl-4">左边：<Math tex="2x > 4" />，得 <Math tex="x > 2" /></p>
                      <p className="pl-4">右边：<Math tex="4x < -8" />，得 <Math tex="x < -2" /></p>
                      <p className="pl-4">取并集：<Math tex="x < -2" /> 或 <Math tex="x > 2" /></p>
                      <p className="pl-4"><strong>答</strong>：<Math tex="x \in (-\infty, -2) \cup (2, +\infty)" /></p>
                    </div>
                  </div>
                  <hr className="border-gray-400" />

                  <p><strong>💡 口诀</strong>：<strong>小于取中间，大于取两边</strong></p>
                </div>
              </div>

              <div className="text-base print:hidden">
                <PracticeCard title="✏️ 练习（绝对值不等式）" questions={absInequalityPractice} explanations={absInequalityExplanations} hideBlankLine optionCols={2} printOptionCols={2}
                  renderItem={(q, idx) => (
                    <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                      <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                      {q.questionLatex && <Math tex={q.questionLatex} />}
                    </p>
                  )}
                />
              </div>
              <div className="text-base hidden print:block">
                <PrintQuestions questions={absInequalityPractice} printOptionCols={2} columns={2} />
              </div>

              <div className="border border-gray-400 rounded overflow-hidden border-t-0 -mt-px">
                <div className="px-2 py-1 font-bold text-gray-900 border-b border-gray-400 bg-gray-100">📐 三角不等式</div>
                <div className="px-3 py-1 space-y-1 leading-6 text-[0.85rem]">
                  <p><strong>核心公式</strong>：<Math tex="\bigl||a| - |b|\bigr| \leq |a + b| \leq |a| + |b|" /></p>
                  <p><strong>几何意义</strong>：绝对值就是<strong>距离</strong>，三角形任意一边小于另外两边之和</p>
                  <hr className="border-gray-400" />

                  <p className="font-bold">应用一：求绝对值之和的最小值</p>
                  <p><Math tex="|x - a| + |x - b|" /> 表示数轴上 <Math tex="x" /> 到 <Math tex="a" /> 和 <Math tex="b" /> 的距离之和</p>
                  <p>站在两点之间（含端点），总距离都等于两点间距 <Math tex="|a - b|" />，站在外面一定更远</p>
                  <p>所以当 <Math tex="a \leq x \leq b" /> 时取最小值 <Math tex="|a - b|" /></p>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <p className="font-bold">例：求 <Math tex="|x - 1| + |x - 4|" /> 的最小值</p>
                      <p className="pl-4"><Math tex="x" /> 到 <Math tex="1" /> 和 <Math tex="4" /> 的距离之和</p>
                      <p className="pl-4">当 <Math tex="1 \leq x \leq 4" /> 时取最小值</p>
                      <p className="pl-4">最小值 <Math tex="= |4 - 1| = 3" /></p>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold">例：求 <Math tex="|x + 2| + |x - 3|" /> 的最小值</p>
                      <p className="pl-4"><Math tex="= |x - (-2)| + |x - 3|" /></p>
                      <p className="pl-4">当 <Math tex="-2 \leq x \leq 3" /> 时取最小值</p>
                      <p className="pl-4">最小值 <Math tex="= |3 - (-2)| = 5" /></p>
                    </div>
                  </div>
                  <hr className="border-gray-400" />

                  <p className="font-bold">应用二：已知绝对值范围，求表达式范围（利用 <Math tex="|a + b| \leq |a| + |b|" /> 求上界，和 <Math tex="|a + b| \geq \bigl||a| - |b|\bigr|" /> 求下界）</p>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <p className="font-bold">例：已知 <Math tex="|x| \leq 2" />，求 <Math tex="|x + 3|" /> 的范围</p>
                      <p className="pl-4">上界：<Math tex="|x + 3| \leq |x| + 3 \leq 2 + 3 = 5" /></p>
                      <p className="pl-4">下界：<Math tex="|x + 3| \geq 3 - |x| \geq 3 - 2 = 1" /></p>
                      <p className="pl-4"><strong>答</strong>：<Math tex="1 \leq |x + 3| \leq 5" /></p>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold">例：已知 <Math tex="|x - 1| \leq 3" />，求 <Math tex="|x + 2|" /> 的范围</p>
                      <p className="pl-4">变形凑出 <Math tex="x-1" />，得 <Math tex="|x + 2| = |(x-1) + 3|" /></p>
                      <p className="pl-4">上界：<Math tex="|(x-1)+3| \leq |x-1| + 3 \leq 6" /></p>
                      <p className="pl-4">下界：<Math tex="|(x-1)+3| \geq 3 - |x-1| \geq 0" /></p>
                      <p className="pl-4"><strong>答</strong>：<Math tex="0 \leq |x + 2| \leq 6" /></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-base print:hidden">
                <PracticeCard title="✏️ 练习（三角不等式）" questions={absTrianglePractice} explanations={absTriangleExplanations} hideBlankLine optionCols={2} printOptionCols={2}
                  renderItem={(q, idx) => (
                    <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                      <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                      {q.questionLatex && <Math tex={q.questionLatex} />}
                    </p>
                  )}
                />
              </div>
              <div className="text-base hidden print:block">
                <PrintQuestions questions={absTrianglePractice} printOptionCols={2} columns={2} />
              </div>


          </div>
        </Collapsible>
      </section>

      <section id="abs-param" className="mb-0 scroll-mt-4">
        <Collapsible title="三、含参绝对值不等式" defaultOpen storageKey="abs:param">
          <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

              <div className="border border-gray-400 rounded overflow-hidden">
                <div className="px-2 py-1 font-bold text-gray-900 border-b border-gray-400 bg-gray-100">💡 恒成立的核心思路</div>
                <div className="px-3 py-1 space-y-1 leading-6">
                  <p className="font-bold">问题：<Math tex="|x - a| + |x - b| \geq m" /> 对一切实数 <Math tex="x" /> 恒成立，求 <Math tex="m" /> 的范围</p>
                  <p>恒成立，意味着左边<strong>怎么变都不会小于</strong> <Math tex="m" /></p>
                  <p>所以只需要左边的<strong>最小值</strong> <Math tex="\geq m" /> 即可</p>
                  <p>由三角不等式应用一：<Math tex="|x - a| + |x - b|" /> 的最小值 <Math tex="= |a - b|" />，因此 <Math tex="|a - b| \geq m" /></p>
                </div>
              </div>

              <div className="border border-gray-400 rounded overflow-hidden border-t-0 -mt-px">
                <div className="px-2 py-1 font-bold text-gray-900 border-b border-gray-400 bg-gray-100">📝 例题（高考选做题型）</div>
                <div className="px-3 py-1 space-y-1 leading-6">
                  <p className="font-bold">第(1)问：解不等式 <Math tex="|x - 1| + |x + 3| \geq 6" /></p>
                  <p className="pl-4">定义域 <Math tex="x \in \mathbb{R}" />，令 <Math tex="x - 1 = 0" /> 和 <Math tex="x + 3 = 0" />，得分界点 <Math tex="x = -3" />，<Math tex="x = 1" /></p>
                  <hr className="border-gray-200" />
                  <p className="pl-4">当 <Math tex="x < -3" /> 时，<Math tex="x-1 < 0" />，<Math tex="x+3 < 0" />，则 <Math tex="-(x-1)+[-(x+3)] \geq 6" />，得 <Math tex="-2x - 2 \geq 6" />，解得 <Math tex="x \leq -4" /></p>
                  <hr className="border-gray-200" />
                  <p className="pl-4">当 <Math tex="-3 \leq x < 1" /> 时，<Math tex="x-1 < 0" />，<Math tex="x+3 \geq 0" />，则 <Math tex="-(x-1)+(x+3) \geq 6" />，得 <Math tex="4 \geq 6" />，不成立</p>
                  <hr className="border-gray-200" />
                  <p className="pl-4">当 <Math tex="x \geq 1" /> 时，<Math tex="x-1 \geq 0" />，<Math tex="x+3 > 0" />，则 <Math tex="(x-1)+(x+3) \geq 6" />，得 <Math tex="2x + 2 \geq 6" />，解得 <Math tex="x \geq 2" /></p>
                  <p className="pl-4"><strong>答</strong>：<Math tex="x \leq -4" /> 或 <Math tex="x \geq 2" /></p>
                  <hr />
                  <p className="font-bold">第(2)问：若 <Math tex="|x - a| + |x + 1| \geq 2" /> 对一切 <Math tex="x" /> 恒成立，求 <Math tex="a" /> 的范围</p>
                  <p className="pl-4"><Math tex="|x - a| + |x + 1| = |x - a| + |x - (-1)|" /></p>
                  <p className="pl-4">表示 <Math tex="x" /> 到 <Math tex="a" /> 和 <Math tex="-1" /> 的距离之和，最小值 <Math tex="= |a - (-1)| = |a + 1|" /></p>
                  <p className="pl-4">恒成立，则最小值 <Math tex="\geq 2" />，即 <Math tex="|a + 1| \geq 2" />（大于取两边）</p>
                  <p className="pl-4">解得 <Math tex="a + 1 \geq 2" /> 或 <Math tex="a + 1 \leq -2" />，即 <Math tex="a \geq 1" /> 或 <Math tex="a \leq -3" /></p>
                </div>
              </div>

              <div className="print:hidden">
                <PracticeCard questions={absParamPractice} explanations={absParamExplanations} columns={2} />
              </div>
              <div className="text-base hidden print:block">
                <PrintQuestions questions={absParamPractice.slice(0, 2)} printOptionCols={2} columns={2} />
                <PrintQuestions questions={absParamPractice.slice(2)} printOptionCols={1} columns={1} startIndex={2} />
              </div>

          </div>
        </Collapsible>
      </section>

      <section id="abs-props" className="mb-0 scroll-mt-4">
        <Collapsible title="四、绝对值的性质" defaultOpen storageKey="abs:props">
          <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

              <div className="border border-gray-400 rounded overflow-hidden">
                <div className="px-2 py-1 font-bold text-gray-900 border-b border-gray-400 bg-gray-100">📋 绝对值的基本性质</div>
                <div className="px-3 py-1">
                  <table className="border border-gray-400 border-collapse text-center w-full">
                    <thead>
                      <tr className="border-b border-gray-400">
                        <th className="py-px px-2 border-r border-gray-400">性质</th>
                        <th className="py-px px-2 border-r border-gray-400">公式</th>
                        <th className="py-px px-2">例子</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-300">
                        <td className="py-px px-2 border-r border-gray-400">非负性</td>
                        <td className="py-px px-2 border-r border-gray-400"><Math tex="|a| \geq 0" /></td>
                        <td className="py-px px-2"><Math tex="|-3| = 3 \geq 0" /></td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <td className="py-px px-2 border-r border-gray-400">零的唯一性</td>
                        <td className="py-px px-2 border-r border-gray-400"><Math tex="|a| = 0 \Leftrightarrow a = 0" /></td>
                        <td className="py-px px-2"><Math tex="|x - 1| = 0" />，则 <Math tex="x = 1" /></td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <td className="py-px px-2 border-r border-gray-400">对称性</td>
                        <td className="py-px px-2 border-r border-gray-400"><Math tex="|-a| = |a|" /></td>
                        <td className="py-px px-2"><Math tex="|-5| = |5| = 5" /></td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <td className="py-px px-2 border-r border-gray-400">乘法性</td>
                        <td className="py-px px-2 border-r border-gray-400"><Math tex="|ab| = |a| \cdot |b|" /></td>
                        <td className="py-px px-2"><Math tex="|(-3) \times 5| = |-3| \times |5| = 15" /></td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <td className="py-px px-2 border-r border-gray-400">除法性</td>
                        <td className="py-px px-2 border-r border-gray-400"><Math tex="\left|\dfrac{a}{b}\right| = \dfrac{|a|}{|b|}" />（<Math tex="b \neq 0" />）</td>
                        <td className="py-px px-2"><Math tex="\left|\dfrac{-6}{3}\right| = \dfrac{|-6|}{|3|} = 2" /></td>
                      </tr>
                      <tr>
                        <td className="py-px px-2 border-r border-gray-400">平方等价</td>
                        <td className="py-px px-2 border-r border-gray-400"><Math tex="|a|^2 = a^2" /></td>
                        <td className="py-px px-2"><Math tex="|-3|^2 = (-3)^2 = 9" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="border border-gray-400 rounded overflow-hidden border-t-0 -mt-px">
                <div className="px-2 py-1 font-bold text-gray-900 border-b border-gray-400 bg-gray-100">📝 例题</div>
                <div className="px-3 py-1 space-y-1 leading-6">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <p className="font-bold">例1：已知 <Math tex="(x - 1)^2 + |y + 2| = 0" />，求 <Math tex="x" />、<Math tex="y" /></p>
                      <p className="pl-4"><Math tex="(x-1)^2 \geq 0" />，<Math tex="|y+2| \geq 0" /></p>
                      <p className="pl-4">非负数之和等于 <Math tex="0" />，则每个都等于 <Math tex="0" /></p>
                      <p className="pl-4"><Math tex="(x-1)^2 = 0" />，得 <Math tex="x = 1" /></p>
                      <p className="pl-4"><Math tex="|y + 2| = 0" />，得 <Math tex="y = -2" /></p>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold">例2：已知 <Math tex="|a| = 3" />，<Math tex="|b| = 2" />，求 <Math tex="|ab|" />、<Math tex="\left|\dfrac{a}{b}\right|" />、<Math tex="a^2" /></p>
                      <p className="pl-4">乘法性：<Math tex="|ab| = |a| \cdot |b| = 3 \times 2 = 6" /></p>
                      <p className="pl-4">除法性：<Math tex="\left|\dfrac{a}{b}\right| = \dfrac{|a|}{|b|} = \dfrac{3}{2}" /></p>
                      <p className="pl-4">平方等价：<Math tex="a^2 = |a|^2 = 3^2 = 9" /></p>
                    </div>
                  </div>
                </div>
              </div>

          </div>
        </Collapsible>
      </section>

      <section id="abs-graph" className="mb-0 scroll-mt-4">
        <Collapsible title="五、绝对值与图像变换" defaultOpen storageKey="abs:graph">
          <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

              <div className="border border-gray-400 rounded overflow-hidden">
                <div className="px-2 py-1 font-bold text-gray-900 border-b border-gray-400 bg-gray-100">📝 <Math tex="y = |f(x)|" /> 的图像画法</div>
                <div className="px-3 py-1 space-y-1 leading-6">
                  <div className="grid grid-cols-[1fr_auto] gap-x-4">
                    <div className="space-y-1">
                      <p className="font-bold">画法：x 轴上方不动，下方翻上去</p>
                      <p>先画 <Math tex="y = f(x)" />，把 x 轴<strong>下方</strong>的部分关于 x 轴<strong>对称翻折</strong>到上方，上方的部分保持不动</p>
                      <div className="grid grid-cols-[auto_1fr] gap-x-0">
                        <p>原因：</p>
                        <p>当 <Math tex="f(x) \geq 0" /> 时，<Math tex="|f(x)| = f(x)" />（不变）</p>
                        <p></p>
                        <p>当 <Math tex="f(x) < 0" /> 时，<Math tex="|f(x)| = -f(x)" />（取反，图像翻转到上方）</p>
                      </div>
                      <hr className="border-gray-400" />
                      <p className="font-bold">例：<Math tex="y = |x^2 - 4|" /></p>
                      <p>原函数 <Math tex="y = x^2 - 4" />（灰色虚线）在 <Math tex="(-2, 2)" /> 上为负</p>
                      <p>翻折后（蓝色实线），下方的抛物线翻到上方，形成 W 形</p>
                    </div>
                    <div>
                      <DebugGeo2dSvg data={absGraphTransform} width={208} height={173} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-gray-400 rounded overflow-hidden border-t-0 -mt-px">
                <div className="px-2 py-1 font-bold text-gray-900 border-b border-gray-400 bg-gray-100">📝 <Math tex="y = |f(x)|" /> 的单调性</div>
                <div className="px-3 py-1 space-y-1 leading-6">
                  <p className="font-bold">口诀：上方不变，下方反转<span className="font-normal">（单调性的详细定义和判断方法见 3.1）</span></p>
                  <div className="grid grid-cols-[auto_1fr_1fr] gap-x-4 gap-y-0.5 items-baseline">
                    <p className="font-bold"><Math tex="f(x) \geq 0" /> 的区间</p><p><Math tex="|f(x)| = f(x)" />，没变</p><p>单调性<strong>不变</strong></p>
                    <p className="font-bold"><Math tex="f(x) < 0" /> 的区间</p><p><Math tex="|f(x)| = -f(x)" />，乘了 <Math tex="-1" /></p><p>单调性<strong>反转</strong>（增变减，减变增）</p>
                  </div>
                  <hr className="border-gray-400" />
                  <p className="font-bold">例：<Math tex="y = |x^2 - 4|" /> 的单调性</p>
                  <p>零点为 <Math tex="x = \pm 2" />，对称轴 <Math tex="x = -\tfrac{b}{2a} = -\tfrac{0}{2} = 0" />，在 <Math tex="(-2, 2)" /> 上原函数为负，翻折后单调性反转</p>
                  <table className="border border-gray-400 border-collapse text-center">
                    <thead>
                      <tr className="border-b border-gray-400">
                        <th className="py-px px-1.5 border-r border-gray-400">区间</th>
                        <th className="py-px px-1.5 border-r border-gray-400">原函数单调性</th>
                        <th className="py-px px-1.5 border-r border-gray-400"><Math tex="f(x)" /> 正负</th>
                        <th className="py-px px-1.5"><Math tex="|f(x)|" /> 单调性</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-300">
                        <td className="py-px px-1.5 border-r border-gray-400"><Math tex="(-\infty, -2)" /></td>
                        <td className="py-px px-1.5 border-r border-gray-400">递减</td>
                        <td className="py-px px-1.5 border-r border-gray-400"><Math tex="> 0" /></td>
                        <td className="py-px px-1.5 font-bold">递减（不变）</td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <td className="py-px px-1.5 border-r border-gray-400"><Math tex="(-2, 0)" /></td>
                        <td className="py-px px-1.5 border-r border-gray-400">递减</td>
                        <td className="py-px px-1.5 border-r border-gray-400"><Math tex="< 0" /></td>
                        <td className="py-px px-1.5 font-bold">递增（反转）</td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <td className="py-px px-1.5 border-r border-gray-400"><Math tex="(0, 2)" /></td>
                        <td className="py-px px-1.5 border-r border-gray-400">递增</td>
                        <td className="py-px px-1.5 border-r border-gray-400"><Math tex="< 0" /></td>
                        <td className="py-px px-1.5 font-bold">递减（反转）</td>
                      </tr>
                      <tr>
                        <td className="py-px px-1.5 border-r border-gray-400"><Math tex="(2, +\infty)" /></td>
                        <td className="py-px px-1.5 border-r border-gray-400">递增</td>
                        <td className="py-px px-1.5 border-r border-gray-400"><Math tex="> 0" /></td>
                        <td className="py-px px-1.5 font-bold">递增（不变）</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="border border-gray-400 rounded overflow-hidden border-t-0 -mt-px">
                <div className="px-2 py-1 font-bold text-gray-900 border-b border-gray-400 bg-gray-100">📝 <Math tex="y = f(|x|)" /> 的图像画法</div>
                <div className="px-3 py-1 space-y-1 leading-6">
                  <div className="grid grid-cols-[1fr_auto] gap-x-4">
                    <div className="space-y-1">
                      <p className="font-bold">画法：保留右半，左半镜像</p>
                      <p>先画 <Math tex="y = f(x)" />，<strong>只保留</strong> <Math tex="x \geq 0" /> 的部分（右半），然后将右半关于 <strong>y 轴对称</strong>翻到左侧</p>
                      <p>原因：<Math tex="f(|x|) = f(|-x|)" />，正负 <Math tex="x" /> 代入后结果相同，所以图像关于 y 轴对称</p>
                      <hr className="border-gray-400" />
                      <p className="font-bold">例：<Math tex="f(x) = x^2 - 2x" />，画 <Math tex="y = f(|x|) = |x|^2 - 2|x| = x^2 - 2|x|" /></p>
                      <p>原函数（灰色虚线）右半部分：顶点 <Math tex="(1, -1)" />，过原点和 <Math tex="(2, 0)" /></p>
                      <p>镜像后（蓝色实线），左侧对称出现，形成关于 y 轴对称的图像</p>
                    </div>
                    <div>
                      <DebugGeo2dSvg data={absGraphInputTransform} width={208} height={154} />
                    </div>
                  </div>
                </div>
              </div>

          </div>
        </Collapsible>
      </section>

      {/* 打印模式答案区 */}
      {isPrinting && printOptions.showAnswers && <AbsoluteValueAnswers />}

        </div>
      </LessonLayout>
    </div>
  );
}
