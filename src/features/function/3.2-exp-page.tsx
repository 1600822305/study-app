import { Math, Collapsible, PageHeader, LessonLayout, ExportButton, UnifiedDebugToggle, PracticeCard, PrintQuestions } from '@/components/shared';
import { DebugGeo2dSvg } from '@/components/shared/geo2d';
import { useProgress, usePrintMode } from '@/hooks';
import { expDefinitionPractice, expPropertyPractice, expComparePractice, expIneqPractice, expCompositePractice, expRangePractice, expDerivPractice } from './data/3.2/3.2-exp-practice';
import { expIncDiagramNew, expDecDiagramNew } from './data/3.2/3.2-elem-func-diagrams';
import { ExpAnswers, expExplanations } from './3.2-exp-answers';

const expProgressItems = [
  { id: 'exp1', label: '理解指数函数的定义和标准形式' },
  { id: 'exp2', label: '能列值描点画出指数函数图像' },
  { id: 'exp3', label: '掌握指数函数的性质（定义域、值域、单调性、过定点）' },
  { id: 'exp4', label: '能用四种方法比较指数值的大小' },
  { id: 'exp5', label: '能解指数不等式（化同底 + 换元法）' },
  { id: 'exp6', label: '能用同增异减判断复合指数函数的单调区间' },
  { id: 'exp7', label: '能通过内函数值域求复合指数函数的值域' },
  { id: 'exp8', label: '记住指数函数的求导公式（导数·提前接触）' },
];

export function ExpPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('exp-func-new', expProgressItems);
  const { isPrinting, printOptions } = usePrintMode();

  return (
    <div>
      <PageHeader
        stage="第三阶段 · 函数思维"
        title="3.2 指数函数"
        tags={[
          { label: '难度 ★★☆☆☆', color: 'amber' },
          { label: '必考', color: 'blue' },
          { label: '约2小时', color: 'purple' },
        ]}
      />

      <div className="flex justify-end gap-2 print:hidden">
        <UnifiedDebugToggle />
        <ExportButton title="3.2 指数函数" />
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>
        <div className="[&_.rounded-xl]:mb-0 [&_.rounded-xl>.flex.items-center]:py-0.5 [&_.rounded-xl>div:last-child]:px-0 [&_.rounded-xl>div:last-child]:pt-0 [&_.rounded-xl>div:last-child]:pb-0 [&_.rounded-xl_button>span]:font-bold [&_.rounded-xl_button>span]:text-gray-900">

        <Collapsible title="一、什么是指数函数" defaultOpen storageKey="exp-page:what">
          <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">从一个问题说起</div>
              <div className="px-3 py-1">
                <p>一张纸对折 1 次变 2 层，对折 2 次变 4 层，对折 3 次变 8 层</p>
                <p className="mt-1">如果对折 <Math tex="x" /> 次，层数是多少？<strong>层数 <Math tex="= 2^x" /></strong></p>
                <p className="mt-1"><Math tex="x" /> 在变，层数跟着变，这就是一个函数。而且变量 <Math tex="x" /> 在指数位置，所以叫<strong>指数函数</strong></p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">认识三个名字</div>
              <div className="py-1 text-center text-lg">
                <Math tex="y = {\underbrace{a}_{\mathclap{\text{底数（常数）}}}}{\vphantom{a}}^{\,\overbrace{x}^{\text{指数（变量）}}}" />
              </div>
              <div className="grid grid-cols-3 border-t border-gray-300">
                <div className="px-2 py-1 text-center border-r border-gray-300">
                  <p><strong>底数 <Math tex="a" /></strong>：固定不变的正常数</p>
                </div>
                <div className="px-2 py-1 text-center border-r border-gray-300">
                  <p><strong>指数 <Math tex="x" /></strong>：变量，写在右上角</p>
                </div>
                <div className="px-2 py-1 text-center">
                  <p><strong><Math tex="y" /></strong>：函数值（结果）</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 text-gray-800 border-b border-gray-400 bg-gray-100 flex items-center justify-center gap-6">
                <span className="font-bold">标准形式</span>
                <Math tex="\boldsymbol{y = a^x \quad (a > 0 \text{ 且 } a \neq 1)}" />
              </div>
              <div className="grid grid-cols-[47fr_auto_53fr]">
                <div className="px-3 py-1">
                  <p><strong>为什么 <Math tex="a" /> 必须大于 0？</strong></p>
                  <p className="mt-0.5 pl-4"><Math tex="a < 0" /> 不行：<Math tex="\sqrt{-2}" /> 算不出来，负数没法开偶次方</p>
                  <p className="pl-4"><Math tex="a = 0" /> 也不行：<Math tex="0^{-1} = \tfrac{1}{0}" />，除以 0 无意义</p>
                  <p className="pl-4">所以底数 <Math tex="a" /> 必须大于 0</p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="px-3 py-1">
                  <p><strong>为什么 <Math tex="a" /> 不能等于 1？</strong></p>
                  <p className="mt-0.5 pl-4">因为 1 的任何次方都是 1，所以 <Math tex="1^x = 1" /></p>
                  <p className="pl-4">画出来是一条水平线，没有研究价值</p>
                  <p className="pl-4 mt-1 font-bold">综合以上两个条件，底数 <Math tex="a" /> 的取值范围为 <Math tex="(0, 1) \cup (1, +\infty)" /></p>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">和幂函数别搞混</div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div className="px-3 py-1 text-center">
                  <p className="font-bold">指数函数</p>
                  <p className="text-lg my-0.5"><Math tex="y = a^x" /></p>
                  <p>底数 <Math tex="a" /> 是常数，指数 <Math tex="x" /> 是变量</p>
                  <p>例：<Math tex="y = 2^x" /></p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="px-3 py-1 text-center">
                  <p className="font-bold">幂函数</p>
                  <p className="text-lg my-0.5"><Math tex="y = x^a" /></p>
                  <p>底数 <Math tex="x" /> 是变量，指数 <Math tex="a" /> 是常数</p>
                  <p>例：<Math tex="y = x^2" /></p>
                </div>
              </div>
              <div className="px-3 py-1 border-t border-gray-300">
                <p><strong>区分口诀：</strong>变量在上面（指数位置）是指数函数，变量在下面（底数位置）是幂函数</p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例. 设全集 <Math tex="U = \mathbb{N}^*" />，若 <Math tex="y = (a - 2)^x" /> 是指数函数，<Math tex="A = \{a \mid a \in U\}" />，<Math tex="B = \{3, 5, 7\}" />，求 <Math tex="\complement_U A \cap B" /></div>
              <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                <p><strong>读题</strong>：全集是正整数集，用指数函数的条件筛出 <Math tex="A" />，再做集合运算</p>
              </div>
              <div className="px-3 py-1">
                <p><strong>第一步</strong>：底数 <Math tex="a - 2 > 0" />，得 <Math tex="a > 2" /></p>
                <p><strong>第二步</strong>：底数 <Math tex="a - 2 \neq 1" />，得 <Math tex="a \neq 3" /></p>
                <p><strong>第三步</strong>：<Math tex="a" /> 是正整数且 <Math tex="a > 2" /> 且 <Math tex="a \neq 3" />，得 <Math tex="A = \{4, 5, 6, 7, 8, \ldots\}" /></p>
                <p><strong>第四步</strong>：<Math tex="\complement_U A" /> 是正整数中不在 <Math tex="A" /> 里的，即 <Math tex="\{1, 2, 3\}" /></p>
                <p><strong>结论</strong>：<Math tex="\complement_U A \cap B = \{1, 2, 3\} \cap \{3, 5, 7\} = \{3\}" /></p>
              </div>
            </div>

            <div className="text-base print:hidden">
              <PracticeCard title="✈️ 练习（指数函数定义）" questions={expDefinitionPractice} explanations={expExplanations} hideBlankLine optionCols={4} printOptionCols={4}
                renderItem={(q, idx) => (
                  <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                    <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                    {q.questionLatex && <Math tex={q.questionLatex} />}
                  </p>
                )}
              />
            </div>
            <div className="text-base hidden print:block">
              <PrintQuestions questions={expDefinitionPractice} printOptionCols={4} columns={1} />
            </div>

          </div>
        </Collapsible>

        <Collapsible title="二、算值画图，发现规律" defaultOpen storageKey="exp-page:graph">
          <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">指数函数性质速查表</div>
              <div className="px-1 py-1">
                <table className="w-full border-collapse border border-gray-300 text-center [&_th]:border [&_th]:border-gray-300 [&_th]:px-2 [&_th]:py-1 [&_td]:border [&_td]:border-gray-300 [&_td]:px-2 [&_td]:py-1">
                  <thead className="bg-gray-50">
                    <tr>
                      <th>性质</th>
                      <th><Math tex="a > 1" /></th>
                      <th><Math tex="0 < a < 1" /></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>定义域</td>
                      <td colSpan={2}><Math tex="(-\infty, +\infty)" /></td>
                    </tr>
                    <tr>
                      <td>值域</td>
                      <td colSpan={2}><Math tex="(0, +\infty)" />（永远大于 0）</td>
                    </tr>
                    <tr>
                      <td>过定点</td>
                      <td colSpan={2}><Math tex="(0, 1)" />，因为 <Math tex="a^0 = 1" /></td>
                    </tr>
                    <tr>
                      <td>单调性</td>
                      <td><strong>增函数</strong></td>
                      <td><strong>减函数</strong></td>
                    </tr>
                    <tr>
                      <td>图像趋势</td>
                      <td>向右急升，向左趋近 0</td>
                      <td>向右趋近 0，向左急升</td>
                    </tr>
                    <tr>
                      <td>对称关系</td>
                      <td colSpan={2}>底数互为倒数的两条曲线关于 <strong>y 轴对称</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">算几个值看看</div>
              <div className="px-3 py-1">
                <div className="grid grid-cols-[1fr_auto_1fr] gap-x-0">
                  <div>
                    <p className="font-bold text-center"><Math tex="y = 2^x" />（底数 <Math tex="a = 2 > 1" />）</p>
                    <table className="w-full border-collapse border border-gray-300 text-center mt-1 [&_th]:border [&_th]:border-gray-300 [&_th]:px-2 [&_th]:py-0.5 [&_td]:border [&_td]:border-gray-300 [&_td]:px-2 [&_td]:py-0.5">
                      <thead className="bg-gray-50">
                        <tr>
                          <th><Math tex="x" /></th>
                          <th><Math tex="-3" /></th>
                          <th><Math tex="-2" /></th>
                          <th><Math tex="-1" /></th>
                          <th><Math tex="0" /></th>
                          <th><Math tex="1" /></th>
                          <th><Math tex="2" /></th>
                          <th><Math tex="3" /></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><Math tex="y" /></td>
                          <td><Math tex="\tfrac{1}{8}" /></td>
                          <td><Math tex="\tfrac{1}{4}" /></td>
                          <td><Math tex="\tfrac{1}{2}" /></td>
                          <td><strong><Math tex="1" /></strong></td>
                          <td><Math tex="2" /></td>
                          <td><Math tex="4" /></td>
                          <td><Math tex="8" /></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="w-px bg-gray-300 mx-2"></div>
                  <div>
                    <p className="font-bold text-center"><Math tex="y = \left(\tfrac{1}{2}\right)^x" />（底数 <Math tex="a = \tfrac{1}{2} < 1" />）</p>
                    <table className="w-full border-collapse border border-gray-300 text-center mt-1 [&_th]:border [&_th]:border-gray-300 [&_th]:px-2 [&_th]:py-0.5 [&_td]:border [&_td]:border-gray-300 [&_td]:px-2 [&_td]:py-0.5">
                      <thead className="bg-gray-50">
                        <tr>
                          <th><Math tex="x" /></th>
                          <th><Math tex="-3" /></th>
                          <th><Math tex="-2" /></th>
                          <th><Math tex="-1" /></th>
                          <th><Math tex="0" /></th>
                          <th><Math tex="1" /></th>
                          <th><Math tex="2" /></th>
                          <th><Math tex="3" /></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><Math tex="y" /></td>
                          <td><Math tex="8" /></td>
                          <td><Math tex="4" /></td>
                          <td><Math tex="2" /></td>
                          <td><strong><Math tex="1" /></strong></td>
                          <td><Math tex="\tfrac{1}{2}" /></td>
                          <td><Math tex="\tfrac{1}{4}" /></td>
                          <td><Math tex="\tfrac{1}{8}" /></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">描点连线，画出图像</div>
              <div className="flex justify-center gap-8 py-2">
                <div className="text-center">
                  <DebugGeo2dSvg data={expIncDiagramNew} width={200} height={140} />
                  <p className="mt-1"><Math tex="y = 2^x" />（底数 <Math tex="> 1" />，向右急升）</p>
                </div>
                <div className="text-center">
                  <DebugGeo2dSvg data={expDecDiagramNew} width={200} height={140} />
                  <p className="mt-1"><Math tex="y = \left(\tfrac{1}{2}\right)^x" />（底数 <Math tex="< 1" />，向右下降）</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-[1fr_auto_1fr] border border-gray-400 rounded overflow-hidden -mt-px">
              <div>
                <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例 1. 函数 <Math tex="y = 2^{x-1} + 3" /> 恒过定点 ____</div>
                <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                  <p><strong>思路</strong>：让指数部分等于 0，因为 <Math tex="a^0 = 1" /> 是确定的</p>
                </div>
                <div className="px-3 py-1">
                  <p><strong>第一步</strong>：令 <Math tex="x - 1 = 0" />，得 <Math tex="x = 1" /></p>
                  <p><strong>第二步</strong>：代入 <Math tex="y = 2^0 + 3 = 1 + 3 = 4" /></p>
                  <p><strong>答案</strong>：恒过定点 <Math tex="(1, 4)" /></p>
                </div>
              </div>
              <div className="w-px bg-gray-300"></div>
              <div>
                <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例 2. 求 <Math tex="y = 2^x" /> 在 <Math tex="[-1, 2]" /> 上的值域</div>
                <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                  <p><strong>思路</strong>：底数 <Math tex="2 > 1" />，增函数，端点取最值</p>
                </div>
                <div className="px-3 py-1">
                  <p><strong>第一步</strong>：<Math tex="x = -1" /> 时，<Math tex="y = 2^{-1} = \tfrac{1}{2}" />（最小值）</p>
                  <p><strong>第二步</strong>：<Math tex="x = 2" /> 时，<Math tex="y = 2^2 = 4" />（最大值）</p>
                  <p><strong>答案</strong>：值域为 <Math tex="\left[\tfrac{1}{2},\, 4\right]" /></p>
                </div>
              </div>
            </div>

            <div className="text-base print:hidden">
              <PracticeCard title="✈️ 练习（性质与图像）" questions={expPropertyPractice} explanations={expExplanations} hideBlankLine optionCols={4} printOptionCols={4} columns={2}
                renderItem={(q, idx) => (
                  <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                    <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                    {q.questionLatex && <Math tex={q.questionLatex} />}
                  </p>
                )}
              />
            </div>
            <div className="text-base hidden print:block">
              <PrintQuestions questions={expPropertyPractice} printOptionCols={4} columns={2} />
            </div>

          </div>
        </Collapsible>

        <Collapsible title="三、比较大小（高考重点）" defaultOpen storageKey="exp-page:compare">
          <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">四种比较方法速查</div>
              <div>
                <table className="w-full border-collapse text-center [&_th]:border [&_th]:border-gray-300 [&_th]:px-2 [&_th]:py-1 [&_td]:border [&_td]:border-gray-300 [&_td]:px-2 [&_td]:py-1">
                  <thead className="bg-gray-50">
                    <tr>
                      <th>方法</th>
                      <th>适用场景</th>
                      <th>做法</th>
                      <th>举例</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold">同底比指数</td>
                      <td>底数相同</td>
                      <td className="text-left"><Math tex="a > 1" /> 增函数，指数大的大；<Math tex="0 < a < 1" /> 减函数，指数大的小</td>
                      <td><Math tex="2^{0.3}" /> vs <Math tex="2^{0.5}" /></td>
                    </tr>
                    <tr>
                      <td className="font-bold">同指比底数</td>
                      <td>指数相同</td>
                      <td className="text-left">指数 <Math tex="> 0" /> 时底数大的大；指数 <Math tex="< 0" /> 时底数大的小</td>
                      <td><Math tex="3^{0.5}" /> vs <Math tex="5^{0.5}" /></td>
                    </tr>
                    <tr>
                      <td className="font-bold">搭桥法（用 1）</td>
                      <td>底和指数都不同</td>
                      <td className="text-left">利用 <Math tex="a^0 = 1" /> 构造同底，用同底比指数判断和 1 的大小</td>
                      <td><Math tex="2^{0.3}" /> vs <Math tex="0.3^2" /></td>
                    </tr>
                    <tr>
                      <td className="font-bold">构造同底</td>
                      <td>底数可以统一</td>
                      <td className="text-left">把底数化成同一个，再比指数</td>
                      <td><Math tex="4^{0.3}" /> vs <Math tex="2^{0.5}" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">同底比指数</div>
              <div className="px-3 py-1 bg-amber-50 border-b border-gray-300">
                <p><strong>两步法</strong>：① 看底数范围，判断单调性（<Math tex="a > 1" /> 增，<Math tex="0 < a < 1" /> 减）② 比较指数大小，得出结论</p>
              </div>
              <div className="grid grid-cols-[45fr_auto_55fr]">
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">例 1. 比较 <Math tex="2^{0.3}" /> 和 <Math tex="2^{0.5}" /> 的大小</div>
                  <div className="px-3 py-1">
                    <p><strong>第一步</strong>：底数 <Math tex="a = 2 > 1" />，所以 <Math tex="y = 2^x" /> 是增函数</p>
                    <p><strong>第二步</strong>：比较指数 <Math tex="0.3 < 0.5" /></p>
                    <p><strong>结论</strong>：增函数指数大的值大，所以 <Math tex="2^{0.3} < 2^{0.5}" /></p>
                  </div>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">例 2. 比较 <Math tex="0.7^{1.2}" /> 和 <Math tex="0.7^{0.8}" /> 的大小</div>
                  <div className="px-3 py-1">
                    <p><strong>第一步</strong>：底数 <Math tex="0 < 0.7 < 1" />，所以 <Math tex="y = 0.7^x" /> 是减函数</p>
                    <p><strong>第二步</strong>：比较指数 <Math tex="1.2 > 0.8" /></p>
                    <p><strong>结论</strong>：减函数指数大的值反而小，所以 <Math tex="0.7^{1.2} < 0.7^{0.8}" /></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">同指比底数</div>
              <div className="px-3 py-1 bg-amber-50 border-b border-gray-300">
                <p><strong>两步法</strong>：① 看指数正负，判断单调性（正增负减）② 比较底数大小，得出结论</p>
              </div>
              <div className="grid grid-cols-[45fr_auto_55fr]">
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">例 3. 比较 <Math tex="0.5^{0.3}" /> 和 <Math tex="2^{0.3}" /> 的大小</div>
                  <div className="px-3 py-1">
                    <p><strong>第一步</strong>：指数 <Math tex="0.3 > 0" />，<Math tex="y = x^{0.3}" /> 在正数上是增函数</p>
                    <p><strong>第二步</strong>：比较底数 <Math tex="0.5 < 2" /></p>
                    <p><strong>结论</strong>：增函数底数大的值大，所以 <Math tex="0.5^{0.3} < 2^{0.3}" /></p>
                  </div>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">例 4. 比较 <Math tex="3^{-0.5}" /> 和 <Math tex="5^{-0.5}" /> 的大小</div>
                  <div className="px-3 py-1">
                    <p><strong>第一步</strong>：指数 <Math tex="-0.5 < 0" />，<Math tex="y = x^{-0.5}" /> 在正数上是减函数</p>
                    <p><strong>第二步</strong>：比较底数 <Math tex="3 < 5" /></p>
                    <p><strong>结论</strong>：减函数底数大的值反而小，所以 <Math tex="3^{-0.5} > 5^{-0.5}" /></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">构造同底</div>
              <div className="px-3 py-1 bg-amber-50 border-b border-gray-300">
                <p>底数不同但有倍数关系时，化成同一个底数，再用同底比指数</p>
              </div>
              <div className="grid grid-cols-[45fr_auto_55fr]">
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">例 5. 比较 <Math tex="4^{0.3}" /> 和 <Math tex="2^{0.5}" /> 的大小</div>
                  <div className="px-3 py-1">
                    <p><strong>第一步</strong>：化同底，<Math tex="4^{0.3} = (2^2)^{0.3} = 2^{0.6}" /></p>
                    <p><strong>第二步</strong>：底数 <Math tex="2 > 1" />，增函数，<Math tex="0.6 > 0.5" /></p>
                    <p><strong>结论</strong>：<Math tex="2^{0.6} > 2^{0.5}" />，即 <Math tex="4^{0.3} > 2^{0.5}" /></p>
                  </div>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">例 6. 比较 <Math tex="8^{0.4}" /> 和 <Math tex="4^{0.7}" /> 的大小</div>
                  <div className="px-3 py-1">
                    <p><strong>第一步</strong>：化同底，<Math tex="8^{0.4} = (2^3)^{0.4} = 2^{1.2}" />，<Math tex="4^{0.7} = (2^2)^{0.7} = 2^{1.4}" /></p>
                    <p><strong>第二步</strong>：底数 <Math tex="2 > 1" />，增函数，<Math tex="1.2 < 1.4" /></p>
                    <p><strong>结论</strong>：<Math tex="2^{1.2} < 2^{1.4}" />，即 <Math tex="8^{0.4} < 4^{0.7}" /></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">搭桥法（用 1）</div>
              <div className="px-3 py-1 bg-amber-50 border-b border-gray-300">
                <p>利用 <Math tex="a^0 = 1" />，构造同底，用同底比指数判断每个值和 1 的大小关系</p>
              </div>
              <div className="grid grid-cols-[45fr_auto_55fr]">
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">例 7. 比较 <Math tex="2^{0.3}" /> 和 <Math tex="0.3^2" /> 的大小</div>
                  <div className="px-3 py-1">
                    <p><strong>第一步</strong>：比较 <Math tex="2^{0.3}" /> 和 <Math tex="2^0 = 1" />，同底 <Math tex="2 > 1" /> 增函数</p>
                    <p>指数大值大，<Math tex="0.3 > 0" />，所以 <Math tex="2^{0.3} > 2^0 = 1" /></p>
                    <p><strong>第二步</strong>：比较 <Math tex="0.3^2" /> 和 <Math tex="0.3^0 = 1" />，同底 <Math tex="0 < 0.3 < 1" />，减函数，指数大值小，<Math tex="2 > 0" />，所以 <Math tex="0.3^2 < 0.3^0 = 1" /></p>
                    <p><strong>结论</strong>：<Math tex="2^{0.3} > 1 > 0.3^2" /></p>
                  </div>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">例 8. 比较 <Math tex="3^{0.2}" /> 和 <Math tex="0.2^3" /> 的大小</div>
                  <div className="px-3 py-1">
                    <p><strong>第一步</strong>：比较 <Math tex="3^{0.2}" /> 和 <Math tex="3^0 = 1" />，同底 <Math tex="3 > 1" /> 增函数，比指数 <Math tex="0.2 > 0" /></p>
                    <p>所以 <Math tex="3^{0.2} > 3^0" />，即 <Math tex="3^{0.2} > 1" /></p>
                    <p><strong>第二步</strong>：比较 <Math tex="0.2^3" /> 和 <Math tex="0.2^0 = 1" />，同底 <Math tex="0 < 0.2 < 1" />，减函数</p>
                    <p>指数大值小，<Math tex="3 > 0" />，所以 <Math tex="0.2^3 < 0.2^0" />，即 <Math tex="0.2^3 < 1" /></p>
                    <p><strong>结论</strong>：<Math tex="3^{0.2} > 1 > 0.2^3" /></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-base print:hidden">
              <PracticeCard title="✈️ 练习（比较大小）" questions={expComparePractice} explanations={expExplanations} hideBlankLine columns={3}
                renderItem={(q, idx) => (
                  <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                    <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                    {q.questionLatex && <Math tex={q.questionLatex} />}
                  </p>
                )}
              />
            </div>
            <div className="text-base hidden print:block">
              <PrintQuestions questions={expComparePractice} columns={3} />
            </div>

          </div>
        </Collapsible>

        <Collapsible title="四、指数不等式" defaultOpen storageKey="exp-page:ineq">
          <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">核心规则</div>
              <div>
                <table className="w-full border-collapse text-center [&_th]:border [&_th]:border-gray-300 [&_th]:px-2 [&_th]:py-1 [&_td]:border [&_td]:border-gray-300 [&_td]:px-2 [&_td]:py-1">
                  <thead className="bg-gray-50">
                    <tr>
                      <th>底数范围</th>
                      <th>不等式</th>
                      <th>转化</th>
                      <th>口诀</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><Math tex="a > 1" /></td>
                      <td><Math tex="a^{f(x)} > a^{g(x)}" /></td>
                      <td><Math tex="f(x) > g(x)" /></td>
                      <td><strong>底大同向</strong></td>
                    </tr>
                    <tr>
                      <td><Math tex="0 < a < 1" /></td>
                      <td><Math tex="a^{f(x)} > a^{g(x)}" /></td>
                      <td><Math tex="f(x) < g(x)" /></td>
                      <td><strong>底小反向</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">化同底，比指数</div>
              <div className="px-3 py-1 bg-amber-50 border-b border-gray-300">
                <p>化同底，比指数，注意底数范围决定不等号方向</p>
              </div>
              <div className="grid grid-cols-[45fr_auto_55fr]">
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">例 1. 解不等式 <Math tex="2^{2x-1} > 8" /></div>
                  <div className="px-3 py-1">
                    <p><strong>第一步</strong>：化同底，<Math tex="8 = 2^3" />，原式变为 <Math tex="2^{2x-1} > 2^3" /></p>
                    <p><strong>第二步</strong>：底数 <Math tex="2 > 1" />，底大同向，不等号方向不变</p>
                    <p>所以 <Math tex="2x - 1 > 3" />，得 <Math tex="x > 2" /></p>
                    <p><strong>答案</strong>：<Math tex="x \in (2, +\infty)" /></p>
                  </div>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">例 2. 解不等式 <Math tex="\left(\tfrac{1}{3}\right)^{x+1} \leq 9" /></div>
                  <div className="px-3 py-1">
                    <p><strong>第一步</strong>：化同底，<Math tex="9 = 3^2 = \left(\tfrac{1}{3}\right)^{-2}" />，原式变为 <Math tex="\left(\tfrac{1}{3}\right)^{x+1} \leq \left(\tfrac{1}{3}\right)^{-2}" /></p>
                    <p><strong>第二步</strong>：底数 <Math tex="0 < \tfrac{1}{3} < 1" />，底小反向，不等号方向反转</p>
                    <p>所以 <Math tex="x + 1 \geq -2" />，得 <Math tex="x \geq -3" /></p>
                    <p><strong>答案</strong>：<Math tex="x \in [-3, +\infty)" /></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">换元法</div>
              <div className="px-3 py-1 bg-amber-50 border-b border-gray-300">
                <p>遇到 <Math tex="4^x" /> 和 <Math tex="2^x" /> 混合，令 <Math tex="t = 2^x" />（<Math tex="t > 0" />），化成关于 <Math tex="t" /> 的不等式</p>
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">例 3. 解不等式 <Math tex="4^x - 3 \times 2^x - 4 > 0" /></div>
                  <div className="px-3 py-1">
                    <p><strong>第一步</strong>：令 <Math tex="t = 2^x" />（<Math tex="t > 0" />），因为 <Math tex="4^x = (2^2)^x = (2^x)^2 = t^2" /></p>
                    <p>原式变为 <Math tex="t^2 - 3t - 4 > 0" /></p>
                    <p><strong>第二步</strong>：因式分解 <Math tex="(t - 4)(t + 1) > 0" /></p>
                    <p>解得 <Math tex="t > 4" /> 或 <Math tex="t < -1" /></p>
                    <p><strong>第三步</strong>：因为 <Math tex="t = 2^x > 0" />，所以 <Math tex="t < -1" /> 舍去，只取 <Math tex="t > 4" /></p>
                    <p>即 <Math tex="2^x > 4 = 2^2" />，底数 <Math tex="2 > 1" />，底大同向，得 <Math tex="x > 2" /></p>
                    <p><strong>答案</strong>：<Math tex="x \in (2, +\infty)" /></p>
                  </div>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">例 4. 解不等式 <Math tex="9^x - 4 \times 3^x + 3 \leq 0" /></div>
                  <div className="px-3 py-1">
                    <p><strong>第一步</strong>：令 <Math tex="t = 3^x" />（<Math tex="t > 0" />），因为 <Math tex="9^x = (3^2)^x = (3^x)^2 = t^2" /></p>
                    <p>原式变为 <Math tex="t^2 - 4t + 3 \leq 0" /></p>
                    <p><strong>第二步</strong>：因式分解 <Math tex="(t - 1)(t - 3) \leq 0" /></p>
                    <p>解得 <Math tex="1 \leq t \leq 3" /></p>
                    <p><strong>第三步</strong>：还原 <Math tex="1 \leq 3^x \leq 3" />，即 <Math tex="3^0 \leq 3^x \leq 3^1" /></p>
                    <p>底数 <Math tex="3 > 1" />，底大同向，得 <Math tex="0 \leq x \leq 1" /></p>
                    <p><strong>答案</strong>：<Math tex="x \in [0, 1]" /></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-base print:hidden">
              <PracticeCard title="✈️ 练习（指数不等式）" questions={expIneqPractice} explanations={expExplanations} hideBlankLine columns={2}
                renderItem={(q, idx) => (
                  <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                    <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                    {q.questionLatex && <Math tex={q.questionLatex} />}
                  </p>
                )}
              />
            </div>
            <div className="text-base hidden print:block">
              <PrintQuestions questions={expIneqPractice} columns={2} />
            </div>

          </div>
        </Collapsible>

        <Collapsible title="五、复合函数单调性" defaultOpen storageKey="exp-page:composite">
          <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">同增异减规则</div>
              <div>
                <table className="w-full border-collapse text-center [&_th]:border [&_th]:border-gray-300 [&_th]:px-2 [&_th]:py-1 [&_td]:border [&_td]:border-gray-300 [&_td]:px-2 [&_td]:py-1">
                  <thead className="bg-gray-50">
                    <tr>
                      <th>外函数 <Math tex="y = a^t" /></th>
                      <th>内函数 <Math tex="t = f(x)" /></th>
                      <th>整体 <Math tex="y = a^{f(x)}" /></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>增（<Math tex="a > 1" />）</td>
                      <td>增</td>
                      <td><strong>增</strong></td>
                    </tr>
                    <tr>
                      <td>增（<Math tex="a > 1" />）</td>
                      <td>减</td>
                      <td><strong>减</strong></td>
                    </tr>
                    <tr>
                      <td>减（<Math tex="0 < a < 1" />）</td>
                      <td>增</td>
                      <td><strong>减</strong></td>
                    </tr>
                    <tr>
                      <td>减（<Math tex="0 < a < 1" />）</td>
                      <td>减</td>
                      <td><strong>增</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-3 py-1 bg-amber-50 border-t border-gray-300">
                <p>口诀：<strong>同增异减</strong>。内外单调性相同则整体增，相反则整体减</p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">求复合指数函数的单调区间</div>
              <div className="px-3 py-1 bg-amber-50 border-b border-gray-300">
                <p>第一步看外函数底数定增减，第二步看内函数（一次或二次）求增减区间，第三步用同增异减判断整体</p>
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">例 1. 求 <Math tex="y = 2^{x^2 - 2x}" /> 的单调区间</div>
                  <div className="px-3 py-1">
                    <p><strong>第一步</strong>：外函数 <Math tex="y = 2^t" />，底数 <Math tex="2 > 1" />，是<strong>增</strong>函数</p>
                    <p><strong>第二步</strong>：内函数 <Math tex="t = x^2 - 2x" /></p>
                    <p>开口向上的抛物线，对称轴 <Math tex="x = 1" /></p>
                    <p>所以在 <Math tex="(-\infty, 1]" /> 上为减函数，在 <Math tex="[1, +\infty)" /> 上为增函数</p>
                    <p><strong>第三步</strong>：用同增异减</p>
                    <p>在 <Math tex="(-\infty, 1]" /> 上：内函数减、外函数增，单调性<strong>不同</strong>，整体<strong>减</strong></p>
                    <p>在 <Math tex="[1, +\infty)" /> 上：内函数增、外函数增，单调性<strong>相同</strong>，整体<strong>增</strong></p>
                    <p><strong>答案</strong>：减区间 <Math tex="(-\infty, 1]" />，增区间 <Math tex="[1, +\infty)" /></p>
                  </div>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">例 2. 求 <Math tex="y = \left(\tfrac{1}{2}\right)^{-x^2 + 4x}" /> 的单调区间</div>
                  <div className="px-3 py-1">
                    <p><strong>第一步</strong>：外函数 <Math tex="y = \left(\tfrac{1}{2}\right)^t" />，底数 <Math tex="0 < \tfrac{1}{2} < 1" />，是<strong>减</strong>函数</p>
                    <p><strong>第二步</strong>：内函数 <Math tex="t = -x^2 + 4x" /></p>
                    <p>开口向下的抛物线，对称轴 <Math tex="x = 2" /></p>
                    <p>所以在 <Math tex="(-\infty, 2]" /> 上为增函数，在 <Math tex="[2, +\infty)" /> 上为减函数</p>
                    <p><strong>第三步</strong>：用同增异减</p>
                    <p>在 <Math tex="(-\infty, 2]" /> 上：内函数增、外函数减，单调性<strong>不同</strong>，整体<strong>减</strong></p>
                    <p>在 <Math tex="[2, +\infty)" /> 上：内函数减、外函数减，单调性<strong>相同</strong>，整体<strong>增</strong></p>
                    <p><strong>答案</strong>：减区间 <Math tex="(-\infty, 2]" />，增区间 <Math tex="[2, +\infty)" /></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-base print:hidden">
              <PracticeCard title="✈️ 练习（复合函数单调性）" questions={expCompositePractice} explanations={expExplanations} hideBlankLine columns={2}
                renderItem={(q, idx) => (
                  <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                    <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                    {q.questionLatex && <Math tex={q.questionLatex} />}
                  </p>
                )}
              />
            </div>
            <div className="text-base hidden print:block">
              <PrintQuestions questions={expCompositePractice} columns={2} />
            </div>

          </div>
        </Collapsible>

        <Collapsible title="六、复合函数值域" defaultOpen storageKey="exp-page:range">
          <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">求复合指数函数的值域</div>
              <div className="px-3 py-1 bg-amber-50 border-b border-gray-300">
                <p>第一步令 <Math tex="t" /> 等于指数部分，先求 <Math tex="t" /> 的值域（即 <Math tex="t" /> 的取值范围）</p>
                <p>第二步把 <Math tex="t" /> 的范围代入外函数 <Math tex="y = a^t" />，根据外函数的单调性确定 <Math tex="y" /> 的范围</p>
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">例 1. 求 <Math tex="y = 2^{x^2 - 2x}" /> 的值域</div>
                  <div className="px-3 py-1">
                    <p><strong>第一步</strong>：令 <Math tex="t = x^2 - 2x" />，则原函数变为 <Math tex="y = 2^t" /></p>
                    <p><strong>第二步</strong>：求 <Math tex="t" /> 的值域</p>
                    <p>配方 <Math tex="t = (x - 1)^2 - 1" />，开口向上</p>
                    <p>对称轴 <Math tex="x = 1" />，顶点 <Math tex="(1, -1)" /></p>
                    <p>开口向上时顶点是最低点，所以 <Math tex="t \geq -1" /></p>
                    <p><strong>第三步</strong>：外函数 <Math tex="y = 2^t" /> 底数 <Math tex="2 > 1" />，是增函数</p>
                    <p>当 <Math tex="t = -1" /> 时 <Math tex="y = 2^{-1} = \tfrac{1}{2}" />（最小）</p>
                    <p>当 <Math tex="t \to +\infty" /> 时 <Math tex="y \to +\infty" />（无最大值）</p>
                    <p><strong>答案</strong>：值域为 <Math tex="\left[\tfrac{1}{2}, +\infty\right)" /></p>
                  </div>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">例 2. 求 <Math tex="y = \left(\tfrac{1}{2}\right)^{2x - 1}" /> 在 <Math tex="x \in [0, 3]" /> 上的值域</div>
                  <div className="px-3 py-1">
                    <p><strong>第一步</strong>：令 <Math tex="t = 2x - 1" />，则原函数变为 <Math tex="y = \left(\tfrac{1}{2}\right)^t" /></p>
                    <p><strong>第二步</strong>：<Math tex="t = 2x - 1" /> 的斜率 <Math tex="2 > 0" />，是增函数</p>
                    <p>闭区间上增函数在两端取最值，左端点最小、右端点最大</p>
                    <p><Math tex="x = 0" /> 时 <Math tex="t = -1" />（最小）；<Math tex="x = 3" /> 时 <Math tex="t = 5" />（最大）</p>
                    <p>所以 <Math tex="t \in [-1, 5]" /></p>
                    <p><strong>第三步</strong>：外函数 <Math tex="y = \left(\tfrac{1}{2}\right)^t" /> 底数 <Math tex="0 < \tfrac{1}{2} < 1" />，是减函数</p>
                    <p>当 <Math tex="t = -1" /> 时 <Math tex="y = \left(\tfrac{1}{2}\right)^{-1} = 2" />（最大）</p>
                    <p>当 <Math tex="t = 5" /> 时 <Math tex="y = \left(\tfrac{1}{2}\right)^5 = \tfrac{1}{32}" />（最小）</p>
                    <p><strong>答案</strong>：值域为 <Math tex="\left[\tfrac{1}{32}, 2\right]" /></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-base print:hidden">
              <PracticeCard title="✈️ 练习（复合函数值域）" questions={expRangePractice} explanations={expExplanations} hideBlankLine columns={2}
                renderItem={(q, idx) => (
                  <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                    <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                    {q.questionLatex && <Math tex={q.questionLatex} />}
                  </p>
                )}
              />
            </div>
            <div className="text-base hidden print:block">
              <PrintQuestions questions={expRangePractice} columns={2} />
            </div>

          </div>
        </Collapsible>

        <Collapsible title="七、指数函数的求导（导数 · 提前接触）" defaultOpen storageKey="exp-page:deriv">
          <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">求导公式速查</div>
              <div>
                <table className="w-full border-collapse text-center [&_th]:border [&_th]:border-gray-300 [&_th]:px-2 [&_th]:py-1 [&_td]:border [&_td]:border-gray-300 [&_td]:px-2 [&_td]:py-1">
                  <thead className="bg-gray-50">
                    <tr>
                      <th>函数</th>
                      <th>导数</th>
                      <th>说明</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><Math tex="y = a^x" /></td>
                      <td><Math tex="y' = a^x \ln a" /></td>
                      <td>通用公式（多一个 <Math tex="\ln a" /> 系数）</td>
                    </tr>
                    <tr>
                      <td><Math tex="y = e^x" /></td>
                      <td><Math tex="y' = e^x" /></td>
                      <td>特例：<Math tex="\ln e = 1" />，求导是自己</td>
                    </tr>
                    <tr>
                      <td><Math tex="y = a^{f(x)}" /></td>
                      <td><Math tex="y' = a^{f(x)} \cdot \ln a \cdot f'(x)" /></td>
                      <td>复合函数（链式法则）</td>
                    </tr>
                    <tr>
                      <td><Math tex="y = e^{f(x)}" /></td>
                      <td><Math tex="y' = e^{f(x)} \cdot f'(x)" /></td>
                      <td>复合特例（无 <Math tex="\ln" /> 系数）</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-3 py-1 bg-amber-50 border-t border-gray-300">
                <p><strong>为什么 <Math tex="e" /> 这么特殊</strong>：<Math tex="\ln e = 1" />，所以 <Math tex="e^x" /> 求导后系数消失，公式最简洁，这就是数学里到处用 <Math tex="e^x" /> 的原因——求导最干净</p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">例 1. 求 <Math tex="y = 3^x" /> 的导数</div>
                  <div className="px-3 py-1">
                    <p><strong>第一步</strong>：识别为 <Math tex="y = a^x" /> 类型，<Math tex="a = 3" /></p>
                    <p><strong>第二步</strong>：套公式 <Math tex="y' = a^x \ln a = 3^x \ln 3" /></p>
                  </div>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">例 2. 求 <Math tex="y = e^{2x + 1}" /> 的导数</div>
                  <div className="px-3 py-1">
                    <p><strong>第一步</strong>：识别为 <Math tex="y = e^{f(x)}" /> 类型，内函数 <Math tex="f(x) = 2x + 1" /></p>
                    <p><strong>第二步</strong>：求 <Math tex="f'(x) = 2" /></p>
                    <p><strong>第三步</strong>：套公式 <Math tex="y' = e^{f(x)} \cdot f'(x) = e^{2x+1} \cdot 2 = 2 e^{2x+1}" /></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-base print:hidden">
              <PracticeCard title="✈️ 练习（指数函数求导）" questions={expDerivPractice} explanations={expExplanations} hideBlankLine columns={2}
                renderItem={(q, idx) => (
                  <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                    <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                    {q.questionLatex && <Math tex={q.questionLatex} />}
                  </p>
                )}
              />
            </div>
            <div className="text-base hidden print:block">
              <PrintQuestions questions={expDerivPractice} columns={2} />
            </div>

          </div>
        </Collapsible>

        </div>
      </LessonLayout>
      {isPrinting && printOptions.showAnswers && <ExpAnswers />}
    </div>
  );
}
