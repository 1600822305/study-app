import { Math, Collapsible, PageHeader, LessonLayout, ExportButton, UnifiedDebugToggle, PracticeCard, PrintQuestions, PageBreak } from '@/components/shared';
import { DebugGeo2dSvg } from '@/components/shared/geo2d';
import { useProgress, usePrintMode } from '@/hooks';
import { logSymmetryDiagram, logBase2Diagram, logHalfDiagram, logCombineDiagram, logSquareTwoBranchDiagram, logSquareDownDiagram, logZeroIntersectDiagram } from './data/3.2.2/3.2.2-log-func-diagrams';
import { logFuncDefinitionPractice, logFuncGraphPractice, logFuncComparePractice, logFuncIneqPractice, logFuncMonoPractice, logFuncRangePractice, logFuncParamPractice, logFuncGraphicPractice } from './data/3.2.2/3.2.2-log-func-practice';
import { LogFuncAnswers, logFuncExplanations } from './3.2.2-log-answers';

const logFuncProgressItems = [
  { id: 'lf1', label: '理解对数函数定义、定义域值域、与指数函数互为反函数' },
  { id: 'lf2', label: '掌握对数函数图像与性质（含三类图像变换）' },
  { id: 'lf3', label: '能用四种方法 + 三类混合比较大小' },
  { id: 'lf4', label: '能解对数不等式（化同底 + 含参讨论 + 换元）' },
  { id: 'lf5', label: '能用同增异减求复合对数函数的单调区间（定义域优先）' },
  { id: 'lf6', label: '能求复合对数函数的值域与最值' },
  { id: 'lf7', label: '能用 Δ 反推参数（定义域为 R / 值域为 R）' },
  { id: 'lf8', label: '能用图像法解决对数函数零点与交点问题，能应对多选题' },
];

export function LogPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('log-func', logFuncProgressItems);
  const { isPrinting, printOptions } = usePrintMode();

  return (
    <div>
      <PageHeader
        stage="第三阶段 · 函数思维"
        title="3.2.2 对数函数"
        tags={[
          { label: '难度 ★★☆☆☆', color: 'amber' },
          { label: '必考', color: 'blue' },
          { label: '约2小时', color: 'purple' },
        ]}
      />

      <div className="flex justify-end gap-2 print:hidden">
        <UnifiedDebugToggle />
        <ExportButton title="3.2.2 对数函数" />
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>
        <div className="[&_.rounded-xl]:mb-0 [&_.rounded-xl>.flex.items-center]:py-0.5 [&_.rounded-xl>div:last-child]:px-0 [&_.rounded-xl>div:last-child]:pt-0 [&_.rounded-xl>div:last-child]:pb-0 [&_.rounded-xl_button>span]:font-bold [&_.rounded-xl_button>span]:text-gray-900">

        <Collapsible title="一、什么是对数函数" defaultOpen storageKey="log-func-page:what">
          <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

            {/* 卡片 1：从一个问题说起 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">从一个问题说起</div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div className="px-3 py-1">
                  <p>前面我们学了 <Math tex="\log_2 8 = 3" />，给定底数和真数</p>
                  <p>可以算出对数值</p>
                  <div className="mt-1 pl-4 grid grid-cols-2 gap-x-4">
                    <p><Math tex="x = 1" />，得 <Math tex="\log_2 x = 0" /></p>
                    <p><Math tex="x = 2" />，得 <Math tex="\log_2 x = 1" /></p>
                    <p><Math tex="x = 4" />，得 <Math tex="\log_2 x = 2" /></p>
                    <p><Math tex="x = 8" />，得 <Math tex="\log_2 x = 3" /></p>
                  </div>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="px-3 py-1">
                  <p><Math tex="x" /> 在变，<Math tex="\log_2 x" /> 跟着变，这就是一个函数</p>
                  <p className="mt-1">把 <Math tex="\log_2 x" /> 当成 <Math tex="y" />，得 <strong><Math tex="y = \log_2 x" /></strong></p>
                  <p className="mt-1">自变量在真数位置，所以叫<strong>对数函数</strong></p>
                </div>
              </div>
            </div>

            {/* 卡片 2：对数式 vs 对数函数 */}
            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">一个符号，两种身份：对数式 vs 对数函数</div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div className="px-3 py-1">
                  <p className="font-bold text-center">对数式 <Math tex="\log_a N" /></p>
                  <p className="mt-1">是一个<strong>数</strong></p>
                  <p><Math tex="N" /> 是常数，答案是单值</p>
                  <p>例：<Math tex="\log_2 8 = 3" /></p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="px-3 py-1">
                  <p className="font-bold text-center">对数函数 <Math tex="y = \log_a x" /></p>
                  <p className="mt-1">是一个<strong>函数</strong></p>
                  <p><Math tex="x" /> 是变量，一个 <Math tex="x" /> 对应一个 <Math tex="y" /></p>
                  <p>例：<Math tex="y = \log_2 x" />（无穷多对 <Math tex="(x, y)" />）</p>
                </div>
              </div>
              <div className="px-3 py-1 border-t border-gray-300 bg-amber-50">
                <p><strong>判别口诀</strong>：看真数位置是常数还是变量。是常数就是对数式；是变量 <Math tex="x" /> 就是对数函数</p>
              </div>
            </div>

            {/* 卡片 3：认识三个名字 + 标准形式 */}
            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 text-gray-800 border-b border-gray-400 bg-gray-100 flex items-center justify-center gap-6">
                <span className="font-bold">标准形式</span>
                <Math tex="\boldsymbol{y = \log_a x \quad (a > 0 \text{ 且 } a \neq 1)}" />
              </div>
              <div className="grid grid-cols-3 border-t border-gray-300">
                <div className="px-2 py-1 text-center border-r border-gray-300">
                  <p><strong>底数 <Math tex="a" /></strong></p>
                  <p>固定的正常数（<Math tex="a > 0" /> 且 <Math tex="a \neq 1" />）</p>
                </div>
                <div className="px-2 py-1 text-center border-r border-gray-300">
                  <p><strong>自变量 <Math tex="x" /></strong></p>
                  <p>在真数位置，必须 <Math tex="x > 0" /></p>
                </div>
                <div className="px-2 py-1 text-center">
                  <p><strong>函数值 <Math tex="y" /></strong></p>
                  <p>运算的结果，可取任何实数</p>
                </div>
              </div>
              <div className="px-3 py-1 border-t border-gray-300 bg-blue-50">
                <p><strong>天生属性</strong>（不用解不等式，由定义直接得出）：</p>
                <div className="grid grid-cols-2 gap-x-4 pl-4">
                  <p>定义域：<Math tex="(0, +\infty)" />（因为真数 <Math tex="x > 0" />）</p>
                  <p>值域：<Math tex="\mathbb{R} = (-\infty, +\infty)" />（因为指数可取任何实数）</p>
                </div>
              </div>
            </div>

            {/* 卡片 4：与指数函数互为反函数 */}
            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 border-b border-gray-400 bg-gray-100 flex items-center gap-2">
                <span className="font-bold text-gray-800">与指数函数互为反函数</span>
                <span className="px-1.5 rounded bg-amber-100 text-gray-800">了解 · 高考几乎不考</span>
              </div>
              <div className="grid grid-cols-[1fr_auto_auto]">
                <div className="px-3 py-1">
                  <p>指数函数 <Math tex="y = 2^x" /> 与对数函数 <Math tex="y = \log_2 x" />：</p>
                  <p className="mt-1">把 <Math tex="x" /> 和 <Math tex="y" /> 互换，就是<strong>互为反函数</strong></p>
                  <table className="w-full border-collapse border border-gray-300 text-center mt-1 [&_th]:border [&_th]:border-gray-300 [&_th]:px-2 [&_th]:py-0.5 [&_td]:border [&_td]:border-gray-300 [&_td]:px-2 [&_td]:py-0.5">
                    <thead className="bg-gray-50">
                      <tr>
                        <th><Math tex="y = 2^x" /> 上的点</th>
                        <th><Math tex="y = \log_2 x" /> 上的点</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><Math tex="(0, 1)" /></td>
                        <td><Math tex="(1, 0)" /></td>
                      </tr>
                      <tr>
                        <td><Math tex="(1, 2)" /></td>
                        <td><Math tex="(2, 1)" /></td>
                      </tr>
                      <tr>
                        <td><Math tex="(2, 4)" /></td>
                        <td><Math tex="(4, 2)" /></td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="mt-1">每一对点把 <Math tex="x" /> 和 <Math tex="y" /> 互换，正好落在另一条曲线上</p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="px-3 py-1 text-center">
                  <DebugGeo2dSvg data={logSymmetryDiagram} width={160} height={160} />
                  <p className="mt-0.5">两条曲线关于直线 <Math tex="y = x" /> 对称</p>
                </div>
              </div>
              <div className="px-3 py-1 border-t border-gray-300 bg-blue-50">
                <p><strong>反函数三句话</strong>：</p>
                <div className="grid grid-cols-3 gap-x-4 pl-4">
                  <p>① 互换 <Math tex="x" /> 与 <Math tex="y" />，得到反函数</p>
                  <p>② 原函数定义域 = 反函数值域</p>
                  <p>③ 图像关于直线 <Math tex="y = x" /> 对称</p>
                </div>
              </div>
            </div>

            {/* 卡片 5：例 1 + 例 2 双栏 */}
            <div className="grid grid-cols-[55fr_auto_45fr] border border-gray-400 rounded overflow-hidden -mt-px">
              <div>
                <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例 1. 已知 <Math tex="f(x) = \log_2(x - 1)" />，若 <Math tex="f(x) = 3" />，求 <Math tex="x" /> 的值</div>
                <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                  <p><strong>思路</strong>：先求定义域，再用对指互化解方程</p>
                </div>
                <div className="px-3 py-1">
                  <p><strong>第一步</strong>：求定义域：<Math tex="x - 1 > 0" />，得 <Math tex="x > 1" /></p>
                  <p><strong>第二步</strong>：列方程 <Math tex="\log_2(x - 1) = 3" /></p>
                  <p><strong>第三步</strong>：化为指数式 <Math tex="2^3 = x - 1" />，得 <Math tex="x - 1 = 8" /></p>
                  <p><strong>第四步</strong>：解得 <Math tex="x = 9" />，满足 <Math tex="x > 1" />，在定义域内</p>
                  <p><strong>答案</strong>：<Math tex="x = 9" /></p>
                </div>
              </div>
              <div className="w-px bg-gray-300"></div>
              <div>
                <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例 2. 已知 <Math tex="f(x) = \log_a x" />，<Math tex="f(8) = 3" />，求 <Math tex="f\left(\tfrac{1}{2}\right)" /></div>
                <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                  <p><strong>思路</strong>：先用 <Math tex="f(8) = 3" /> 求底数 <Math tex="a" />，再代入求值</p>
                </div>
                <div className="px-3 py-1">
                  <p><strong>第一步</strong>：代入 <Math tex="x = 8" />，得 <Math tex="\log_a 8 = 3" /></p>
                  <p><strong>第二步</strong>：化为指数式 <Math tex="a^3 = 8" />，解得 <Math tex="a = 2" /></p>
                  <p><strong>第三步</strong>：所以 <Math tex="f(x) = \log_2 x" /></p>
                  <p><strong>第四步</strong>：<Math tex="f\left(\tfrac{1}{2}\right) = \log_2 \tfrac{1}{2} = -\log_2 2 = -1" /></p>
                  <p><strong>答案</strong>：<Math tex="f\left(\tfrac{1}{2}\right) = -1" /></p>
                </div>
              </div>
            </div>

            {/* 卡片 6：例 3 含参范围（底数为二次恒正式，利用对数函数底数性质求参数） */}
            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例 3. 已知 <Math tex="y = \log_{a^2 - 3a + 3}(x + 1)" /> 是对数函数，求实数 <Math tex="a" /> 的取值范围</div>
              <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                <p><strong>思路</strong>：对数函数的底数必须大于 0 且不等于 1，对底数 <Math tex="a^2 - 3a + 3" /> 分别列这两个条件</p>
              </div>
              <div className="px-3 py-1">
                <p><strong>第一步</strong>：由对数函数要求底数大于 0，而底数 <Math tex="a^2 - 3a + 3" /> 随 <Math tex="a" /> 变化，先判断它是否恒大于 0。二次式 <Math tex="a^2 - 3a + 3" /> 的判别式 <Math tex="\Delta = (-3)^2 - 4 \times 1 \times 3 = -3 < 0" />，又二次项系数 <Math tex="1 > 0" />（开口向上），所以 <Math tex="a^2 - 3a + 3 > 0" /> 对任意实数 <Math tex="a" /> 恒成立</p>
                <p><strong>第二步</strong>：由底数不等于 1，列方程 <Math tex="a^2 - 3a + 3 \neq 1" />，整理得 <Math tex="a^2 - 3a + 2 \neq 0" /></p>
                <p><strong>第三步</strong>：因式分解 <Math tex="(a - 1)(a - 2) \neq 0" />，解得 <Math tex="a \neq 1" /> 且 <Math tex="a \neq 2" /></p>
                <p><strong>第四步</strong>：综合两个条件，第一条件对任意 <Math tex="a" /> 成立，第二条件排除 <Math tex="a = 1" /> 和 <Math tex="a = 2" /></p>
                <p><strong>答案</strong>：<Math tex="a \in (-\infty, 1) \cup (1, 2) \cup (2, +\infty)" /></p>
              </div>
            </div>

            {/* 即时练习：前 4 道两列、第 5 道（fullRow）自动占满全宽 */}
            <div className="text-base print:hidden">
              <PracticeCard title="✈️ 练习（对数函数定义）" questions={logFuncDefinitionPractice} explanations={logFuncExplanations} hideBlankLine columns={2}
                renderItem={(q, idx) => (
                  <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                    <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                    {q.questionLatex && <Math tex={q.questionLatex} />}
                  </p>
                )}
              />
            </div>
            <div className="text-base hidden print:block">
              <PrintQuestions questions={logFuncDefinitionPractice} columns={2} />
            </div>

          </div>
        </Collapsible>

        <Collapsible title="二、图像与性质" defaultOpen storageKey="log-func-page:graph">
          <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

            {/* 卡片 1：性质速查表 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">对数函数性质速查表</div>
              <table className="w-full border-collapse text-center [&_th]:border [&_th]:border-gray-300 [&_th]:px-2 [&_th]:py-1 [&_td]:border [&_td]:border-gray-300 [&_td]:px-2 [&_td]:py-1">
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
                      <td colSpan={2}><Math tex="(0, +\infty)" />（因为真数 <Math tex="x > 0" />）</td>
                    </tr>
                    <tr>
                      <td>值域</td>
                      <td colSpan={2}><Math tex="\mathbb{R} = (-\infty, +\infty)" /></td>
                    </tr>
                    <tr>
                      <td>过定点</td>
                      <td colSpan={2}><Math tex="(1, 0)" />，因为 <Math tex="\log_a 1 = 0" />（与 <Math tex="a" /> 无关）</td>
                    </tr>
                    <tr>
                      <td>渐近线</td>
                      <td colSpan={2}><strong><Math tex="y" /> 轴</strong>（<Math tex="x \to 0^+" /> 时 <Math tex="y \to \pm\infty" />，曲线无限靠近 <Math tex="y" /> 轴）</td>
                    </tr>
                    <tr>
                      <td>单调性</td>
                      <td><strong>增函数</strong></td>
                      <td><strong>减函数</strong></td>
                    </tr>
                    <tr>
                      <td>图像趋势</td>
                      <td>向右缓升，向左趋近 <Math tex="-\infty" /></td>
                      <td>向右缓降，向左趋近 <Math tex="+\infty" /></td>
                    </tr>
                    <tr>
                      <td>对称关系</td>
                      <td colSpan={2}>底数互为倒数的两条曲线关于 <strong><Math tex="x" /> 轴对称</strong></td>
                    </tr>
                  </tbody>
                </table>
            </div>

            {/* 卡片 2：算几个值看看 */}
            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">算几个值看看</div>
              <div className="px-3 py-1">
                <p>对数函数 <Math tex="x > 0" />，所以 <Math tex="x" /> 取 <Math tex="2" /> 的整数幂，让对数值都是整数好读：</p>
                <div className="grid grid-cols-[1fr_auto_1fr] gap-x-0 mt-1">
                  <div>
                    <p className="font-bold text-center"><Math tex="y = \log_2 x" />（底数 <Math tex="a = 2 > 1" />）</p>
                    <table className="w-full border-collapse border border-gray-300 text-center mt-1 [&_th]:border [&_th]:border-gray-300 [&_th]:px-2 [&_th]:py-0.5 [&_td]:border [&_td]:border-gray-300 [&_td]:px-2 [&_td]:py-0.5">
                      <thead className="bg-gray-50">
                        <tr>
                          <th><Math tex="x" /></th>
                          <th><Math tex="\tfrac{1}{8}" /></th>
                          <th><Math tex="\tfrac{1}{4}" /></th>
                          <th><Math tex="\tfrac{1}{2}" /></th>
                          <th><Math tex="1" /></th>
                          <th><Math tex="2" /></th>
                          <th><Math tex="4" /></th>
                          <th><Math tex="8" /></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><Math tex="y" /></td>
                          <td><Math tex="-3" /></td>
                          <td><Math tex="-2" /></td>
                          <td><Math tex="-1" /></td>
                          <td><strong><Math tex="0" /></strong></td>
                          <td><Math tex="1" /></td>
                          <td><Math tex="2" /></td>
                          <td><Math tex="3" /></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="w-px bg-gray-300 mx-2"></div>
                  <div>
                    <p className="font-bold text-center"><Math tex="y = \log_{\frac{1}{2}} x" />（底数 <Math tex="a = \tfrac{1}{2} < 1" />）</p>
                    <table className="w-full border-collapse border border-gray-300 text-center mt-1 [&_th]:border [&_th]:border-gray-300 [&_th]:px-2 [&_th]:py-0.5 [&_td]:border [&_td]:border-gray-300 [&_td]:px-2 [&_td]:py-0.5">
                      <thead className="bg-gray-50">
                        <tr>
                          <th><Math tex="x" /></th>
                          <th><Math tex="\tfrac{1}{8}" /></th>
                          <th><Math tex="\tfrac{1}{4}" /></th>
                          <th><Math tex="\tfrac{1}{2}" /></th>
                          <th><Math tex="1" /></th>
                          <th><Math tex="2" /></th>
                          <th><Math tex="4" /></th>
                          <th><Math tex="8" /></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><Math tex="y" /></td>
                          <td><Math tex="3" /></td>
                          <td><Math tex="2" /></td>
                          <td><Math tex="1" /></td>
                          <td><strong><Math tex="0" /></strong></td>
                          <td><Math tex="-1" /></td>
                          <td><Math tex="-2" /></td>
                          <td><Math tex="-3" /></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <p className="mt-1 px-1"><strong>观察</strong>：两表 <Math tex="x" /> 列对应的 <Math tex="y" /> 值<strong>正好互为相反数</strong>，这就是底数互为倒数关于 <Math tex="x" /> 轴对称的来源</p>
              </div>
            </div>

            {/* 卡片 3：描点连线 */}
            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">描点连线，画出图像</div>
              <div className="flex justify-center gap-4 py-2">
                <div className="text-center">
                  <DebugGeo2dSvg data={logBase2Diagram} width={200} height={140} />
                  <p className="mt-1"><Math tex="y = \log_2 x" />（底数 <Math tex="> 1" />，向右缓升）</p>
                </div>
                <div className="text-center">
                  <DebugGeo2dSvg data={logCombineDiagram} width={200} height={140} />
                  <p className="mt-1">两图合一，关于 <Math tex="x" /> 轴对称</p>
                </div>
                <div className="text-center">
                  <DebugGeo2dSvg data={logHalfDiagram} width={200} height={140} />
                  <p className="mt-1"><Math tex="y = \log_{\frac{1}{2}} x" />（底数 <Math tex="< 1" />，向右缓降）</p>
                </div>
              </div>
              <div className="px-3 py-1 border-t border-gray-300 bg-blue-50">
                <div className="grid grid-cols-[auto_1fr_1fr_1fr] gap-x-4 items-baseline">
                  <p><strong>看图记三件事</strong>：</p>
                  <p>① 都过定点 <Math tex="(1, 0)" /></p>
                  <p>② 都以 <Math tex="y" /> 轴为渐近线</p>
                  <p>③ 两图关于 <Math tex="x" /> 轴对称</p>
                </div>
              </div>
            </div>

            {/* 卡片 4：综合例（4 问串联：定义域 + 恒过定点 + 过点求 a + 单调性求值域） */}
            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例（综合）. 已知函数 <Math tex="f(x) = \log_a(x - 1) + 2" />（<Math tex="a > 0" /> 且 <Math tex="a \neq 1" />）</div>
              <div className="grid grid-cols-[3fr_2fr] border-b border-gray-300">
                <div className="px-3 py-1 border-r border-gray-300">
                  <p>(1) 求 <Math tex="f(x)" /> 的定义域</p>
                  <p>(2) 求 <Math tex="f(x)" /> 恒过的定点 <Math tex="P" /></p>
                  <p>(3) 若 <Math tex="f(x)" /> 经过点 <Math tex="(3, 3)" />，求 <Math tex="a" /></p>
                  <p>(4) 判断 <Math tex="f(x)" /> 在 <Math tex="[2, 5]" /> 上的单调性，并求 <Math tex="f(x)" /> 在 <Math tex="[2, 5]" /> 上的值域</p>
                </div>
                <div className="px-3 py-1 bg-blue-50">
                  <p><strong>思路</strong>：(1) 真数大于 0；(2) 让真数等于 1</p>
                  <p>(3) 代入点解方程求 <Math tex="a" /></p>
                  <p>(4) 用第 (3) 问的 <Math tex="a = 2" />，由"内增外增"得 <Math tex="f(x)" /> 是增函数，端点取最值</p>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="px-3 py-1">
                  <p><strong>(1)</strong> 由真数大于 0，列不等式 <Math tex="x - 1 > 0" />，得 <Math tex="x > 1" />，所以定义域为 <Math tex="(1, +\infty)" /></p>
                </div>
                <div className="px-3 py-1">
                  <p><strong>(2)</strong> 令真数 <Math tex="x - 1 = 1" />，得 <Math tex="x = 2" />，代入得 <Math tex="y = \log_a 1 + 2 = 0 + 2 = 2" />，所以 <Math tex="P = (2, 2)" /></p>
                </div>
                <div className="px-3 py-1">
                  <p><strong>(3)</strong> 由 <Math tex="f(3) = 3" />，得 <Math tex="\log_a(3 - 1) + 2 = 3" />，即 <Math tex="\log_a 2 = 1" />，化为指数式 <Math tex="a^1 = 2" />，所以 <Math tex="a = 2" /></p>
                </div>
                <div className="px-3 py-1">
                  <p><strong>(4)</strong> 由第 (3) 问得 <Math tex="f(x) = \log_2(x - 1) + 2" /></p>
                  <p className="pl-4"><strong>第一步</strong>：判断单调性。<Math tex="x - 1" /> 关于 <Math tex="x" /> 是增函数，<Math tex="\log_2 t" /> 关于 <Math tex="t" /> 是增函数，所以 <Math tex="f(x)" /> 在 <Math tex="[2, 5]" /> 上是<strong>增函数</strong></p>
                  <p className="pl-4"><strong>第二步</strong>：<Math tex="x = 2" /> 时，<Math tex="f(2) = \log_2 1 + 2 = 0 + 2 = 2" />（最小值）</p>
                  <p className="pl-4"><strong>第三步</strong>：<Math tex="x = 5" /> 时，<Math tex="f(5) = \log_2 4 + 2 = 2 + 2 = 4" />（最大值）</p>
                </div>
                <div className="px-3 py-1 bg-amber-50">
                  <p><strong>答案</strong>：(1) 定义域 <Math tex="(1, +\infty)" />；(2) <Math tex="P = (2, 2)" />；(3) <Math tex="a = 2" />；(4) 增函数，值域为 <Math tex="[2, 4]" /></p>
                </div>
              </div>
            </div>

            {/* 卡片 5：例 — "和 0 比"反推底数（铺垫 lfg-7） */}
            <div className="border border-gray-400 rounded overflow-hidden -mt-px text-[0.85rem]">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例（"和 0 比"反推底数）. 已知 <Math tex="a > 0" /> 且 <Math tex="a \neq 1" /></div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div>
                  <div className="px-3 py-1 border-b border-gray-300 bg-blue-50">
                    <p>(1) 若 <Math tex="\log_a 7 > 0" />，求 <Math tex="a" /> 的取值范围</p>
                  </div>
                  <div className="px-3 py-1">
                    <p><strong>第一步</strong>：把 0 改写为 <Math tex="\log_a 1" />，原不等式变为 <Math tex="\log_a 7 > \log_a 1" /></p>
                    <p><strong>第二步</strong>：真数 <Math tex="7 > 1" />，函数值 <Math tex="\log_a 7 > \log_a 1" /></p>
                    <p>"真数大、函数值也大"是<strong>增函数</strong>，所以 <Math tex="a > 1" /></p>
                    <p><strong>结论</strong>：<Math tex="a \in (1, +\infty)" /></p>
                  </div>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div>
                  <div className="px-3 py-1 border-b border-gray-300 bg-blue-50">
                    <p>(2) 若 <Math tex="\log_a 7 < 0" />，求 <Math tex="a" /> 的取值范围</p>
                  </div>
                  <div className="px-3 py-1">
                    <p><strong>第一步</strong>：把 0 改写为 <Math tex="\log_a 1" />，原不等式变为 <Math tex="\log_a 7 < \log_a 1" /></p>
                    <p><strong>第二步</strong>：真数 <Math tex="7 > 1" />，但函数值 <Math tex="\log_a 7 < \log_a 1" /></p>
                    <p>"真数大、函数值反而小"是<strong>减函数</strong>，所以 <Math tex="0 < a < 1" /></p>
                    <p><strong>结论</strong>：<Math tex="a \in (0, 1)" /></p>
                  </div>
                </div>
              </div>
              <div className="px-3 py-1 border-t border-gray-300 bg-amber-50">
                <p><strong>核心技巧</strong>：看到 <Math tex="\log_a m > 0" /> 或 <Math tex="\log_a m < 0" />，把 0 改写为 <Math tex="\log_a 1" />，让两边都变 <Math tex="\log_a" /> 形式</p>
                <p>再对比"真数大小"和"函数值大小"：一致是增函数（<Math tex="a > 1" />），相反是减函数（<Math tex="0 < a < 1" />）</p>
              </div>
            </div>

            {/* 节二即时练习 */}
            <div className="text-[0.9rem] print:hidden">
              <PracticeCard title="✈️ 练习（图像与性质）" questions={logFuncGraphPractice} explanations={logFuncExplanations} hideBlankLine columns={2}
                renderItem={(q, idx) => (
                  <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                    <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                    {q.questionLatex && <Math tex={q.questionLatex} />}
                  </p>
                )}
              />
            </div>
            <div className="text-[0.9rem] hidden print:block">
              <PrintQuestions questions={logFuncGraphPractice} columns={2} />
            </div>

          </div>
        </Collapsible>

        <Collapsible title="三、比较大小（高考重点）" defaultOpen storageKey="log-func-page:compare">
          <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

            {/* 卡片 1：五法速查表 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">五种比较方法速查</div>
              <table className="w-full border-collapse text-center text-[0.82rem] [&_th]:border [&_th]:border-gray-300 [&_th]:px-2 [&_th]:py-0.5 [&_td]:border [&_td]:border-gray-300 [&_td]:px-2 [&_td]:py-0.5">
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
                    <td className="font-bold">同底比真数</td>
                    <td>底数相同</td>
                    <td className="text-left"><Math tex="a > 1" /> 增函数，真数大的值大；<Math tex="0 < a < 1" /> 减函数，真数大的值反而小</td>
                    <td><Math tex="\log_2 3" /> 与 <Math tex="\log_2 5" /></td>
                  </tr>
                  <tr>
                    <td className="font-bold">同真比底数</td>
                    <td>真数相同</td>
                    <td className="text-left">用主公式换底为 <Math tex="\lg" />，分子相同比分母（注意分子正负号）</td>
                    <td><Math tex="\log_2 5" /> 与 <Math tex="\log_3 5" /></td>
                  </tr>
                  <tr>
                    <td className="font-bold">化同底（换底）</td>
                    <td>底有倍数关系</td>
                    <td className="text-left">用系数提取或换底化为同底，再用同底比真数</td>
                    <td><Math tex="\log_2 3" /> 与 <Math tex="\log_4 9" /></td>
                  </tr>
                  <tr>
                    <td className="font-bold">搭桥法（用 0、1）</td>
                    <td>不同底不同真</td>
                    <td className="text-left">借助 <Math tex="\log_a 1 = 0" /> 与 <Math tex="\log_a a = 1" />，让每个数分别与 0、1 比</td>
                    <td><Math tex="\log_2 3" /> 与 <Math tex="\log_3 2" /></td>
                  </tr>
                  <tr>
                    <td className="font-bold">指对混合</td>
                    <td>指数 + 对数混合</td>
                    <td className="text-left">先与 0、1 比定正负，再用单调性 + 图像辅助</td>
                    <td><Math tex="2^{0.7}" />、<Math tex="\left(\tfrac{1}{3}\right)^{0.7}" />、<Math tex="\log_2 \tfrac{1}{3}" /></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 卡片 2：同底比真数 */}
            <div className="border border-gray-400 rounded overflow-hidden -mt-px text-[0.85rem]">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">同底比真数</div>
              <div className="px-3 py-1 bg-amber-50 border-b border-gray-300">
                <p><strong>两步法</strong>：① 看底数范围，判断单调性（<Math tex="a > 1" /> 增，<Math tex="0 < a < 1" /> 减）② 比较真数大小，得出结论</p>
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">例 1. 比较 <Math tex="\log_2 3" /> 和 <Math tex="\log_2 5" /> 的大小</div>
                  <div className="px-3 py-1">
                    <p><strong>第一步</strong>：底数 <Math tex="a = 2 > 1" />，所以 <Math tex="y = \log_2 x" /> 是增函数</p>
                    <p><strong>第二步</strong>：比较真数 <Math tex="3 < 5" /></p>
                    <p><strong>结论</strong>：增函数真数大的值也大，所以 <Math tex="\log_2 3 < \log_2 5" /></p>
                  </div>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">例 2. 比较 <Math tex="\log_{\frac{1}{2}} 3" /> 和 <Math tex="\log_{\frac{1}{2}} 5" /> 的大小</div>
                  <div className="px-3 py-1">
                    <p><strong>第一步</strong>：底数 <Math tex="0 < \tfrac{1}{2} < 1" />，所以 <Math tex="y = \log_{\frac{1}{2}} x" /> 是减函数</p>
                    <p><strong>第二步</strong>：比较真数 <Math tex="3 < 5" /></p>
                    <p><strong>结论</strong>：减函数真数大的值反而小，所以 <Math tex="\log_{\frac{1}{2}} 3 > \log_{\frac{1}{2}} 5" /></p>
                  </div>
                </div>
              </div>
            </div>

            {/* 卡片 3：同真比底数 */}
            <div className="border border-gray-400 rounded overflow-hidden -mt-px text-[0.85rem]">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">同真比底数</div>
              <div className="px-3 py-1 bg-amber-50 border-b border-gray-300">
                <p><strong>两步法</strong>：① 用主公式 <Math tex="\log_a N = \dfrac{\lg N}{\lg a}" /> 换底为 <Math tex="\lg" />，分子统一为 <Math tex="\lg N" />；② 分子相同比分母（注意分子的正负号决定整体方向）</p>
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">例 3. 比较 <Math tex="\log_2 5" /> 和 <Math tex="\log_3 5" /> 的大小</div>
                  <div className="px-3 py-1">
                    <p><strong>第一步</strong>：换底为 <Math tex="\lg" /></p>
                    <p className="pl-4"><Math tex="\log_2 5 = \dfrac{\lg 5}{\lg 2}" />，<Math tex="\log_3 5 = \dfrac{\lg 5}{\lg 3}" /></p>
                    <p><strong>第二步</strong>：分子 <Math tex="\lg 5 > 0" /> 相同，分母 <Math tex="0 < \lg 2 < \lg 3" />（都为正）</p>
                    <p><strong>结论</strong>：分子相同正数，分母大的整体反而小</p>
                    <p>所以 <Math tex="\log_2 5 > \log_3 5" /></p>
                  </div>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">例 4. 比较 <Math tex="\log_2 0.5" /> 和 <Math tex="\log_3 0.5" /> 的大小</div>
                  <div className="px-3 py-1">
                    <p><strong>第一步</strong>：换底为 <Math tex="\lg" /></p>
                    <p className="pl-4"><Math tex="\log_2 0.5 = \dfrac{\lg 0.5}{\lg 2}" />，<Math tex="\log_3 0.5 = \dfrac{\lg 0.5}{\lg 3}" /></p>
                    <p><strong>第二步</strong>：分子 <Math tex="\lg 0.5 < 0" /> 相同，分母 <Math tex="0 < \lg 2 < \lg 3" />（都为正）</p>
                    <p><strong>结论</strong>：分子负、分母正，整体为负；分母越大，负数越靠近 0（数值越大），所以 <Math tex="\log_2 0.5 < \log_3 0.5" /></p>
                  </div>
                </div>
              </div>
            </div>

            {/* 卡片 4：化同底（换底） */}
            <div className="border border-gray-400 rounded overflow-hidden -mt-px text-[0.85rem]">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">化同底（换底）</div>
              <div className="px-3 py-1 bg-amber-50 border-b border-gray-300">
                <p><strong>两步法</strong>：① 用系数提取 <Math tex="\log_{a^n} b^m = \dfrac{m}{n} \log_a b" />（分子 = 真数指数 <Math tex="m" />，分母 = 底数指数 <Math tex="n" />）化同底 ② 同底比真数</p>
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">例 5. 比较 <Math tex="\log_3 7" /> 和 <Math tex="\log_9 49" /> 的大小</div>
                  <div className="px-3 py-1">
                    <p><strong>第一步</strong>：化同底为 3。底数 <Math tex="9 = 3^2" />、真数 <Math tex="49 = 7^2" />，用系数提取</p>
                    <p className="pl-4"><Math tex="\log_9 49 = \log_{3^2} 7^2 = \tfrac{2}{2} \log_3 7 = \log_3 7" /></p>
                    <p><strong>结论</strong>：两式化简后相同，<Math tex="\log_3 7 = \log_9 49" /></p>
                  </div>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">例 6. 比较 <Math tex="\log_2 5" /> 和 <Math tex="\log_4 9" /> 的大小</div>
                  <div className="px-3 py-1">
                    <p><strong>第一步</strong>：化同底为 2。底数 <Math tex="4 = 2^2" />、真数 <Math tex="9 = 3^2" />，用系数提取</p>
                    <p className="pl-4"><Math tex="\log_4 9 = \log_{2^2} 3^2 = \tfrac{2}{2} \log_2 3 = \log_2 3" /></p>
                    <p><strong>第二步</strong>：同底 <Math tex="2 > 1" /> 增函数，比真数 <Math tex="5 > 3" /></p>
                    <p><strong>结论</strong>：<Math tex="\log_2 5 > \log_2 3" />，所以 <Math tex="\log_2 5 > \log_4 9" /></p>
                  </div>
                </div>
              </div>
            </div>

            {/* 节三即时练习 1（前 4 题，对应同底比真 / 同真比底 / 化同底） */}
            <div className="text-[0.9rem] print:hidden">
              <PracticeCard title="✈️ 练习（比较大小）" questions={logFuncComparePractice.slice(0, 4)} explanations={logFuncExplanations} hideBlankLine columns={2}
                renderItem={(q, idx) => (
                  <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                    <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                    {q.questionLatex && <Math tex={q.questionLatex} />}
                  </p>
                )}
              />
            </div>
            <div className="text-[0.9rem] hidden print:block">
              <PrintQuestions questions={logFuncComparePractice.slice(0, 4)} columns={2} />
            </div>

            {/* 卡片 5：搭桥法（用 0、1） */}
            <div className="border border-gray-400 rounded overflow-hidden -mt-px text-[0.85rem]">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">搭桥法（用 0、1）</div>
              <div className="px-3 py-1 bg-amber-50 border-b border-gray-300">
                <p><strong>两步法</strong>：① 用 <Math tex="\log_a 1 = 0" /> 和 <Math tex="\log_a a = 1" /> 作中介，让每个对数分别与 0、1 比较 ② 综合相对位置得出大小</p>
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">例 7. 比较 <Math tex="\log_2 3" /> 和 <Math tex="\log_3 2" /> 的大小</div>
                  <div className="px-3 py-1">
                    <p><strong>第一步</strong>：比较 <Math tex="\log_2 3" /> 和 <Math tex="\log_2 2 = 1" />，同底 <Math tex="2 > 1" /> 增函数</p>
                    <p>真数大值大，<Math tex="3 > 2" />，所以 <Math tex="\log_2 3 > \log_2 2 = 1" /></p>
                    <p><strong>第二步</strong>：比较 <Math tex="\log_3 2" /> 和 <Math tex="\log_3 3 = 1" />，同底 <Math tex="3 > 1" /> 增函数</p>
                    <p>真数大值大，<Math tex="2 < 3" />，所以 <Math tex="\log_3 2 < \log_3 3 = 1" /></p>
                    <p><strong>结论</strong>：<Math tex="\log_2 3 > 1 > \log_3 2" /></p>
                  </div>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">例 8. 比较 <Math tex="\log_3 7" /> 和 <Math tex="\log_5 0.5" /> 的大小</div>
                  <div className="px-3 py-1">
                    <p><strong>第一步</strong>：比较 <Math tex="\log_3 7" /> 和 <Math tex="\log_3 3 = 1" />，同底 <Math tex="3 > 1" /> 增函数</p>
                    <p>真数大值大，<Math tex="7 > 3" />，所以 <Math tex="\log_3 7 > \log_3 3 = 1" /></p>
                    <p><strong>第二步</strong>：比较 <Math tex="\log_5 0.5" /> 和 <Math tex="\log_5 1 = 0" />，同底 <Math tex="5 > 1" /> 增函数</p>
                    <p>真数大值大，<Math tex="0.5 < 1" />，所以 <Math tex="\log_5 0.5 < \log_5 1 = 0" /></p>
                    <p><strong>结论</strong>：<Math tex="\log_3 7 > 1 > 0 > \log_5 0.5" /></p>
                  </div>
                </div>
              </div>
            </div>

            {/* 卡片 6：三类混合 · 2022 天津改编（独占整宽） */}
            <div className="border border-gray-400 rounded overflow-hidden -mt-px text-[0.85rem]">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例 9（2022 天津改编）. 比较 <Math tex="a = 2^{0.7}" />、<Math tex="b = \left(\tfrac{1}{3}\right)^{0.7}" />、<Math tex="c = \log_2 \tfrac{1}{3}" /> 的大小</div>
              <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                <p><strong>思路</strong>：指数 + 对数混合，统一用搭桥法 — 每个数分别与 0、1 比较，定正负与区间，再综合</p>
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div className="px-3 py-1">
                  <p><strong>第一步</strong>：比较 <Math tex="a = 2^{0.7}" /> 和 <Math tex="2^0 = 1" />，底 <Math tex="2 > 1" /> 增函数</p>
                  <p>指数大值大，<Math tex="0.7 > 0" />，所以 <Math tex="a = 2^{0.7} > 2^0" />，即 <Math tex="a > 1" /></p>
                  <p><strong>第二步</strong>：比较 <Math tex="b = \left(\tfrac{1}{3}\right)^{0.7}" /> 和 <Math tex="\left(\tfrac{1}{3}\right)^0 = 1" />，底 <Math tex="0 < \tfrac{1}{3} < 1" /> 减函数</p>
                  <p>指数大值小，<Math tex="0.7 > 0" />，所以 <Math tex="b = \left(\tfrac{1}{3}\right)^{0.7} < \left(\tfrac{1}{3}\right)^0" />，即 <Math tex="b < 1" /></p>
                  <p>又指数函数值恒为正，<Math tex="b > 0" />，所以 <Math tex="0 < b < 1" /></p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="px-3 py-1">
                  <p><strong>第三步</strong>：比较 <Math tex="c = \log_2 \tfrac{1}{3}" /> 和 <Math tex="\log_2 1 = 0" />，底 <Math tex="2 > 1" /> 增函数</p>
                  <p>真数大值大，<Math tex="\tfrac{1}{3} < 1" />，所以 <Math tex="c = \log_2 \tfrac{1}{3} < \log_2 1" />，即 <Math tex="c < 0" /></p>
                  <p><strong>第四步</strong>：综合 <Math tex="a > 1 > b > 0 > c" /></p>
                  <p><strong>结论</strong>：<Math tex="a > b > c" /></p>
                </div>
              </div>
            </div>

            {/* 节三即时练习 2（后 4 题，对应搭桥法 + 指对混合） */}
            <div className="text-[0.9rem] print:hidden">
              <PracticeCard title="✈️ 练习（搭桥 + 指对混合）" questions={logFuncComparePractice.slice(4)} explanations={logFuncExplanations} hideBlankLine columns={2}
                renderItem={(q, idx) => (
                  <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                    <span className="text-gray-800 mr-2 font-medium">{idx + 5}.</span>
                    {q.questionLatex && <Math tex={q.questionLatex} />}
                  </p>
                )}
              />
            </div>
            <div className="text-[0.9rem] hidden print:block">
              <PrintQuestions questions={logFuncComparePractice.slice(4)} columns={2} startIndex={4} />
            </div>

          </div>
        </Collapsible>

        <Collapsible title="四、对数不等式（高考重点）" defaultOpen storageKey="log-func-page:ineq">
          <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

            {/* 卡片 1：核心规则速查表 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100 text-[0.8rem]">核心规则</div>
              <table className="w-full border-collapse text-center text-[0.85rem] [&_th]:border [&_th]:border-gray-300 [&_th]:px-2 [&_th]:py-1 [&_td]:border [&_td]:border-gray-300 [&_td]:px-2 [&_td]:py-1">
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
                    <td><Math tex="\log_a f(x) > \log_a g(x)" /></td>
                    <td><Math tex="f(x) > g(x)" /></td>
                    <td><strong>底大同向</strong></td>
                  </tr>
                  <tr>
                    <td><Math tex="0 < a < 1" /></td>
                    <td><Math tex="\log_a f(x) > \log_a g(x)" /></td>
                    <td><Math tex="f(x) < g(x)" /></td>
                    <td><strong>底小反向</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 卡片 2：三步走 */}
            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100 text-[0.8rem]">三步走</div>
              <table className="w-full border-collapse text-[0.85rem] [&_th]:border [&_th]:border-gray-300 [&_th]:px-2 [&_th]:py-1 [&_td]:border [&_td]:border-gray-300 [&_td]:px-2 [&_td]:py-1">
                <thead className="bg-gray-50 text-center">
                  <tr>
                    <th className="w-40">步骤</th>
                    <th>做法</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center"><strong>① 真数 &gt; 0</strong>（最易错）</td>
                    <td>把不等式中<strong>所有真数</strong>列出 <Math tex="> 0" />，先解出 <Math tex="x" /> 的范围（即定义域）</td>
                  </tr>
                  <tr>
                    <td className="text-center"><strong>② 化同底</strong></td>
                    <td>把两边对数化为<strong>同底</strong>（用换底公式、系数提取，或把常数 <Math tex="k" /> 改写为 <Math tex="\log_a a^k" />）</td>
                  </tr>
                  <tr>
                    <td className="text-center"><strong>③ 比真数</strong></td>
                    <td>按底数判向：<Math tex="a > 1" /> 同向、<Math tex="0 < a < 1" /> 反向；最后与第一步定义域<strong>求交集</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 卡片 3：例 1 简单 */}
            <div className="border border-gray-400 rounded overflow-hidden -mt-px text-[0.85rem]">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例 1（简单）. 解不等式 <Math tex="\log_2(x - 1) < 3" /></div>
              <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                <p><strong>思路</strong>：按三步走，先列真数 <Math tex="> 0" /> 求定义域，再化同底（把 3 改为 <Math tex="\log_2 8" />），最后底数 <Math tex="2 > 1" /> 同向</p>
              </div>
              <div className="px-3 py-1">
                <p><strong>第一步</strong>：真数 <Math tex="> 0" />，列不等式 <Math tex="x - 1 > 0" />，得 <Math tex="x > 1" />（定义域）</p>
                <hr className="my-1 border-gray-200" />
                <p><strong>第二步</strong>：化同底，把常数 3 改写为 <Math tex="\log_2 2^3 = \log_2 8" />，原不等式变为 <Math tex="\log_2(x - 1) < \log_2 8" /></p>
                <hr className="my-1 border-gray-200" />
                <p><strong>第三步</strong>：底数 <Math tex="2 > 1" />，底大同向，不等号方向不变，所以 <Math tex="x - 1 < 8" />，解得 <Math tex="x < 9" /></p>
                <hr className="my-1 border-gray-200" />
                <p><strong>第四步</strong>：与定义域 <Math tex="x > 1" /> 求交集，得 <Math tex="1 < x < 9" />，所以解集为 <Math tex="(1, 9)" /></p>
              </div>
            </div>

            {/* 卡片 4：例 2 含参讨论 */}
            <div className="border border-gray-400 rounded overflow-hidden -mt-px text-[0.85rem]">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例 2（含参讨论）. 解不等式 <Math tex="\log_a(2x + 1) > \log_a(x + 3)" /></div>
              <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                <p><strong>思路</strong>：底数 <Math tex="a" /> 含参，先用真数 <Math tex="> 0" /> 求定义域（共用），再分 <Math tex="a > 1" /> 和 <Math tex="0 < a < 1" /> 两种情形按底数判向</p>
              </div>
              <div className="px-3 py-1 border-b border-gray-300">
                <p><strong>第一步</strong>：列真数大于 0 的条件（两真数都要 <Math tex="> 0" />）</p>
                <div className="grid grid-cols-2 gap-x-4 pl-4">
                  <p><strong>左</strong>：<Math tex="2x + 1 > 0" />，得 <Math tex="x > -\tfrac{1}{2}" /></p>
                  <p><strong>右</strong>：<Math tex="x + 3 > 0" />，得 <Math tex="x > -3" /></p>
                </div>
                <p>取交集，得 <Math tex="x > -\tfrac{1}{2}" />（即定义域）</p>
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">情形一：<Math tex="a > 1" /></div>
                  <div className="px-3 py-1">
                    <p><strong>第二步</strong>：底数 <Math tex="a > 1" />，底大同向，不等号方向不变</p>
                    <p>所以 <Math tex="2x + 1 > x + 3" />，解得 <Math tex="x > 2" /></p>
                    <p><strong>第三步</strong>：与定义域 <Math tex="x > -\tfrac{1}{2}" /> 求交集</p>
                    <p><strong>结论</strong>：解集为 <Math tex="(2, +\infty)" /></p>
                  </div>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">情形二：<Math tex="0 < a < 1" /></div>
                  <div className="px-3 py-1">
                    <p><strong>第二步</strong>：底数 <Math tex="0 < a < 1" />，底小反向，不等号方向反转</p>
                    <p>所以 <Math tex="2x + 1 < x + 3" />，解得 <Math tex="x < 2" /></p>
                    <p><strong>第三步</strong>：与定义域 <Math tex="x > -\tfrac{1}{2}" /> 求交集</p>
                    <p><strong>结论</strong>：解集为 <Math tex="\left(-\tfrac{1}{2},\, 2\right)" /></p>
                  </div>
                </div>
              </div>
              <div className="px-3 py-1 border-t border-gray-300 bg-amber-50">
                <p className="text-[0.8rem]"><strong>答案</strong>：<Math tex="a > 1" /> 时解集为 <Math tex="(2, +\infty)" />；<Math tex="0 < a < 1" /> 时解集为 <Math tex="\left(-\tfrac{1}{2},\, 2\right)" /></p>
              </div>
            </div>

            {/* 即时练习 1（4 题 lfi-1~4，对应例 1 简单 + 例 2 含参） */}
            <div className="text-[0.9rem] print:hidden">
              <PracticeCard title="✈️ 练习（对数不等式 · 简单 + 含参）" questions={logFuncIneqPractice.slice(0, 4)} explanations={logFuncExplanations} hideBlankLine columns={2}
                renderItem={(q, idx) => (
                  <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                    <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                    {q.questionLatex && <Math tex={q.questionLatex} />}
                  </p>
                )}
              />
            </div>
            <div className="text-[0.9rem] hidden print:block">
              <PrintQuestions questions={logFuncIneqPractice.slice(0, 4)} columns={2} />
            </div>

            {/* 卡片 5：例 3 换元 */}
            <div className="border border-gray-400 rounded overflow-hidden text-[0.85rem]">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例 3（换元）. 解不等式 <Math tex="(\log_2 x)^2 - 3 \log_2 x + 2 \leq 0" /></div>
              <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                <p><strong>思路</strong>：看到 <Math tex="(\log_2 x)^2" /> 和 <Math tex="\log_2 x" /> 反复出现，令 <Math tex="t = \log_2 x" /> 换元，把对数不等式转化为 <Math tex="t" /> 的二次不等式；解出 <Math tex="t" /> 的范围后再回代求 <Math tex="x" /></p>
              </div>
              <div className="px-3 py-1">
                <p><strong>第一步</strong>：定义域。真数 <Math tex="> 0" />，得 <Math tex="x > 0" /></p>
                <hr className="my-1 border-gray-200" />
                <p><strong>第二步</strong>：换元。令 <Math tex="t = \log_2 x" />，原不等式变为 <Math tex="t^2 - 3t + 2 \leq 0" /></p>
                <hr className="my-1 border-gray-200" />
                <p><strong>第三步</strong>：解 <Math tex="t" /> 的不等式。因式分解 <Math tex="(t - 1)(t - 2) \leq 0" />，得 <Math tex="1 \leq t \leq 2" /></p>
                <hr className="my-1 border-gray-200" />
                <p><strong>第四步</strong>：回代 <Math tex="t = \log_2 x" />，得 <Math tex="1 \leq \log_2 x \leq 2" />，即 <Math tex="\log_2 2 \leq \log_2 x \leq \log_2 4" /></p>
                <hr className="my-1 border-gray-200" />
                <p><strong>第五步</strong>：底数 <Math tex="2 > 1" />，底大同向，得 <Math tex="2 \leq x \leq 4" />，在定义域 <Math tex="x > 0" /> 内，所以解集为 <Math tex="[2, 4]" /></p>
              </div>
            </div>

            {/* 卡片 6：原理回看 — 两边同取法 */}
            <div className="border border-gray-400 rounded overflow-hidden -mt-px text-[0.82rem]">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">原理回看：节四核心规则的本质 — 两边同取法</div>
              <div className="px-3 py-1 bg-amber-50 border-b border-gray-300">
                <p><strong>核心</strong>：不等式两边同时施加同一个单调函数 <Math tex="f" />，不等号方向由 <Math tex="f" /> 的单调性决定</p>
                <div className="grid grid-cols-2 gap-x-4 pl-4">
                  <p>• <Math tex="f" /> 单调<strong>递增</strong>：方向<strong>不变</strong>（同向）</p>
                  <p>• <Math tex="f" /> 单调<strong>递减</strong>：方向<strong>反转</strong>（反向）</p>
                </div>
              </div>
              <div className="px-3 py-1 border-b border-gray-300">
                <p><strong>节四的本质</strong>：<Math tex="\log_a f(x) > \log_a g(x)" /> 想脱掉 <Math tex="\log" /> 外壳，就是两边同时施加 <Math tex="a^x" />（<Math tex="\log_a x" /> 的反函数）</p>
                <p className="pl-4">• 底 <Math tex="a > 1" />：<Math tex="a^x" /> 是增函数，同向得 <Math tex="f(x) > g(x)" />（<strong>底大同向</strong>）</p>
                <p className="pl-4">• 底 <Math tex="0 < a < 1" />：<Math tex="a^x" /> 是减函数，反向得 <Math tex="f(x) < g(x)" />（<strong>底小反向</strong>）</p>
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">📍 例 A（节四回看）. 用“两边同取 <Math tex="a^x" />”重做例 2 脱外壳</div>
                  <div className="px-3 py-1">
                    <p>已知 <Math tex="a > 1" />，<Math tex="\log_a(2x + 1) > \log_a(x + 3)" /></p>
                    <p><strong>第一步</strong>：两边同取 <Math tex="a^x" />。因 <Math tex="a > 1" /> 时 <Math tex="a^x" /> 是增函数，方向不变</p>
                    <p><strong>第二步</strong>：<Math tex="\log" /> 被反函数 <Math tex="a^x" /> 抵消，得 <Math tex="2x + 1 > x + 3" />，解得 <Math tex="x > 2" /></p>
                    <p className="mt-0.5">这正是节四“底大同向”口诀背后的操作</p>
                  </div>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">📍 例 B（预告导数题）. 从 <Math tex="x < -\ln a" /> 推 <Math tex="e^x" /> 的范围</div>
                  <div className="px-3 py-1">
                    <p>已知 <Math tex="a > 0" />，<Math tex="x < -\ln a" />，用 <Math tex="a" /> 表示 <Math tex="e^x" /> 的范围</p>
                    <p><strong>第一步</strong>：两边同取 <Math tex="e^x" />。<Math tex="e^x" /> 是增函数，方向不变（同向）</p>
                    <p><strong>第二步</strong>：得 <Math tex="e^x < e^{-\ln a}" />，又 <Math tex="e^{-\ln a} = \tfrac{1}{a}" />，所以 <Math tex="e^x < \tfrac{1}{a}" /></p>
                    <p className="mt-0.5">这正是 2024 甲卷 19 题分析 <Math tex="f'(x) = ae^x - 1" /> 零点附近符号的关键</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 即时练习 2（4 题 lfi-5~8，对应例 3 换元 + 卡 6 两边同取法） */}
            <div className="text-[0.9rem] print:hidden">
              <PracticeCard title="✈️ 练习（换元 + 两边同取法）" questions={logFuncIneqPractice.slice(4)} explanations={logFuncExplanations} hideBlankLine columns={2}
                renderItem={(q, idx) => (
                  <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                    <span className="text-gray-800 mr-2 font-medium">{idx + 5}.</span>
                    {q.questionLatex && <Math tex={q.questionLatex} />}
                  </p>
                )}
              />
            </div>
            <div className="text-[0.9rem] hidden print:block">
              <PrintQuestions questions={logFuncIneqPractice.slice(4)} columns={2} startIndex={4} />
            </div>

          </div>
        </Collapsible>

        <Collapsible title="五、复合对数函数 — 单调性" defaultOpen storageKey="log-func-page:composite-mono">
          <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

            {/* 卡片 1：同增异减规则速查 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100 text-[0.8rem]">同增异减规则</div>
              <table className="w-full border-collapse text-center text-[0.87rem] [&_th]:border [&_th]:border-gray-300 [&_th]:px-2 [&_th]:py-1 [&_td]:border [&_td]:border-gray-300 [&_td]:px-2 [&_td]:py-1">
                <thead className="bg-gray-50">
                  <tr>
                    <th>外函数 <Math tex="y = \log_a t" /></th>
                    <th>内函数 <Math tex="t = f(x)" /></th>
                    <th>整体 <Math tex="y = \log_a f(x)" /></th>
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
              <div className="px-3 py-1 bg-amber-50 border-t border-gray-300">
                <p>口诀：<strong>同增异减</strong>。内外单调性相同则整体增，相反则整体减</p>
              </div>
            </div>

            {/* 卡片 2：三步法 */}
            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100 text-[0.8rem]">三步法</div>
              <table className="w-full border-collapse text-[0.85rem] [&_th]:border [&_th]:border-gray-300 [&_th]:px-2 [&_th]:py-1 [&_td]:border [&_td]:border-gray-300 [&_td]:px-2 [&_td]:py-1">
                <thead className="bg-gray-50 text-center">
                  <tr>
                    <th className="w-44">步骤</th>
                    <th>做法</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center"><strong>① 求定义域</strong>（最易错）</td>
                    <td>真数 <Math tex="> 0" /> 列不等式，解出 <Math tex="x" /> 的范围。二次真数定义域可能<strong>不连通</strong>，要拆两段分别讨论</td>
                  </tr>
                  <tr>
                    <td className="text-center"><strong>② 拆内外定单调性</strong></td>
                    <td>外函数 <Math tex="y = \log_a t" />：<Math tex="a > 1" /> 增、<Math tex="0 < a < 1" /> 减；内函数 <Math tex="t = f(x)" />：<strong>在定义域的每一段上分别判断</strong></td>
                  </tr>
                  <tr>
                    <td className="text-center"><strong>③ 用同增异减</strong></td>
                    <td>在每一段上分别合成整体单调性。<strong>多段时分别写</strong>"在 ... 上增、在 ... 上减"，<strong>不能写成并集</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 卡片 3：如何拆分外函数和内函数 */}
            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100 text-[0.8rem]">如何拆分外函数和内函数</div>
              <div className="px-3 py-1 bg-blue-50 border-b border-gray-300 text-[0.85rem]">
                <p>对于 <Math tex="y = \log_a f(x)" />，把 <Math tex="\log" /> 里的<strong>真数 <Math tex="f(x)" /></strong> 看成一个中间变量 <Math tex="t" />，复合函数就被拆成两层：</p>
                <div className="grid grid-cols-2 gap-x-4 pl-4 mt-1">
                  <p>① <strong>内函数</strong>：<Math tex="t = f(x)" /></p>
                  <p>② <strong>外函数</strong>：<Math tex="y = \log_a t" /></p>
                </div>
              </div>
              <table className="w-full border-collapse text-center text-[0.85rem] [&_th]:border [&_th]:border-gray-300 [&_th]:px-2 [&_th]:py-0.5 [&_td]:border [&_td]:border-gray-300 [&_td]:px-2 [&_td]:py-0.5">
                <thead className="bg-gray-50">
                  <tr>
                    <th>原函数</th>
                    <th>内函数 <Math tex="t = f(x)" /></th>
                    <th>外函数 <Math tex="y = \log_a t" /></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><Math tex="y = \log_2(x - 1)" /></td>
                    <td><Math tex="t = x - 1" /></td>
                    <td><Math tex="y = \log_2 t" /></td>
                  </tr>
                  <tr>
                    <td><Math tex="y = \log_{\frac{1}{2}}(3 - x)" /></td>
                    <td><Math tex="t = 3 - x" /></td>
                    <td><Math tex="y = \log_{\frac{1}{2}} t" /></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 即时练习 1（lfm-1~2，对应卡 3 拆分外函数和内函数） */}
            <div className="text-[0.9rem] print:hidden">
              <PracticeCard title="✈️ 练习（拆分外函数和内函数）" questions={logFuncMonoPractice} explanations={logFuncExplanations} hideBlankLine columns={2}
                renderItem={(q, idx) => (
                  <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                    <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                    {q.questionLatex && <Math tex={q.questionLatex} />}
                  </p>
                )}
              />
            </div>
            <div className="text-[0.9rem] hidden print:block">
              <PrintQuestions questions={logFuncMonoPractice} columns={2} />
            </div>

            <PageBreak />

            {/* 卡片 4：例 1 定义域不连通 + 配图 */}
            <div className="border border-gray-400 rounded overflow-hidden text-[0.85rem]">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例 1（定义域不连通）. 求 <Math tex="y = \log_2(x^2 - 2x - 3)" /> 的单调区间</div>
              <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                <p><strong>思路</strong>：先求定义域（真数 <Math tex="> 0" />，二次式定义域<strong>不连通</strong>，拆两段），再在两段上分别用同增异减</p>
              </div>
              <div className="grid grid-cols-[5fr_2fr]">
                <div className="px-3 py-1 border-r border-gray-300">
                  <p><strong>第一步</strong>：求定义域。真数 <Math tex="> 0" />，列不等式 <Math tex="x^2 - 2x - 3 > 0" /></p>
                  <p>因式分解 <Math tex="(x + 1)(x - 3) > 0" />，解得 <Math tex="x < -1" /> 或 <Math tex="x > 3" /></p>
                  <hr className="my-1 border-gray-200" />
                  <p><strong>第二步</strong>：拆内外定单调性</p>
                  <p>外函数 <Math tex="y = \log_2 t" />，底数 <Math tex="2 > 1" />，是<strong>增</strong>函数</p>
                  <hr className="my-1 border-gray-200" />
                  <p>内函数 <Math tex="t = x^2 - 2x - 3" />，开口向上抛物线，对称轴 <Math tex="x = 1" /></p>
                  <p>在 <Math tex="(-\infty, -1)" /> 上：区间在对称轴左侧，内函数<strong>减</strong></p>
                  <p>在 <Math tex="(3, +\infty)" /> 上：区间在对称轴右侧，内函数<strong>增</strong></p>
                  <hr className="my-1 border-gray-200" />
                  <p><strong>第三步</strong>：用同增异减判整体</p>
                  <p>在 <Math tex="(-\infty, -1)" /> 上：内减、外增，单调性<strong>不同</strong>，整体<strong>减</strong></p>
                  <p>在 <Math tex="(3, +\infty)" /> 上：内增、外增，单调性<strong>相同</strong>，整体<strong>增</strong></p>
                </div>
                <div className="flex flex-col items-center justify-center py-2">
                  <DebugGeo2dSvg data={logSquareTwoBranchDiagram} width={198} height={162} />
                  <p className="mt-1 text-center">内函数 <Math tex="t = x^2 - 2x - 3" /></p>
                  <p className="text-center">绿色粗线段是定义域</p>
                </div>
              </div>
              <div className="px-3 py-1 border-t border-gray-300 bg-amber-50">
                <p><strong>答案</strong>：减区间 <Math tex="(-\infty, -1)" />，增区间 <Math tex="(3, +\infty)" /></p>
                <p><strong>易错提醒</strong>：两个单调区间<strong>不能</strong>写成并集 <Math tex="(-\infty, -1) \cup (3, +\infty)" />，必须分别列出"减区间... 增区间..."</p>
              </div>
            </div>

            {/* 卡片 5：例 2 底 < 1 + 开口向下 + 配图 */}
            <div className="border border-gray-400 rounded overflow-hidden -mt-px text-[0.85rem]">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例 2（底 &lt; 1 + 开口向下）. 求 <Math tex="y = \log_{\frac{1}{2}}(-x^2 + 4x - 3)" /> 的单调区间</div>
              <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                <p><strong>思路</strong>：先求定义域（开口向下抛物线，<strong>连通取中间</strong>）；再看对称轴是否在定义域内部，把内函数拆两段，用同增异减</p>
              </div>
              <div className="grid grid-cols-[5fr_2fr]">
                <div className="px-3 py-1 border-r border-gray-300">
                  <p><strong>第一步</strong>：求定义域。真数 <Math tex="> 0" />，列不等式 <Math tex="-x^2 + 4x - 3 > 0" /></p>
                  <p>两边取相反数，得 <Math tex="x^2 - 4x + 3 < 0" />，因式分解 <Math tex="(x - 1)(x - 3) < 0" />，解得 <Math tex="1 < x < 3" /></p>
                  <hr className="my-1 border-gray-200" />
                  <p><strong>第二步</strong>：拆内外定单调性</p>
                  <p>外函数 <Math tex="y = \log_{\frac{1}{2}} t" />，底数 <Math tex="0 < \tfrac{1}{2} < 1" />，是<strong>减</strong>函数</p>
                  <hr className="my-1 border-gray-200" />
                  <p>内函数 <Math tex="t = -x^2 + 4x - 3" />，开口向下抛物线，对称轴 <Math tex="x = 2" /></p>
                  <p>开口向下时，对称轴<strong>左侧递增、右侧递减</strong>（与开口向上相反）</p>
                  <p>对称轴 <Math tex="x = 2" /> <strong>在定义域 <Math tex="(1, 3)" /> 内部</strong>，所以拆两段：</p>
                  <p>在 <Math tex="(1, 2]" /> 上：区间在对称轴左侧，内函数<strong>增</strong></p>
                  <p>在 <Math tex="[2, 3)" /> 上：区间在对称轴右侧，内函数<strong>减</strong></p>
                  <hr className="my-1 border-gray-200" />
                  <p><strong>第三步</strong>：用同增异减判整体</p>
                  <p>在 <Math tex="(1, 2]" /> 上：内增、外减，单调性<strong>不同</strong>，整体<strong>减</strong></p>
                  <p>在 <Math tex="[2, 3)" /> 上：内减、外减，单调性<strong>相同</strong>，整体<strong>增</strong></p>
                </div>
                <div className="flex flex-col items-center justify-center py-2">
                  <DebugGeo2dSvg data={logSquareDownDiagram} width={198} height={162} />
                  <p className="mt-1 text-center">内函数 <Math tex="t = -x^2 + 4x - 3" /></p>
                  <p className="text-center">绿色粗线段是定义域</p>
                </div>
              </div>
              <div className="px-3 py-1 border-t border-gray-300 bg-amber-50">
                <p><strong>答案</strong>：减区间 <Math tex="(1, 2]" />，增区间 <Math tex="[2, 3)" /></p>
                <p><strong>与例 1 对比</strong>：例 1 真数开口<strong>向上</strong>，定义域<strong>拆两段</strong>；例 2 真数开口<strong>向下</strong>，定义域<strong>取中间</strong>——两种最常见形态</p>
              </div>
            </div>

            {/* 卡片 6：例 3 含参直接讨论 */}
            <div className="border border-gray-400 rounded overflow-hidden -mt-px text-[0.85rem]">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例 3（含参 · 直接讨论）. 已知 <Math tex="y = \log_a(x^2 - ax + 1)" /> 在 <Math tex="[2, +\infty)" /> 上单调递增，求实数 <Math tex="a" /> 的取值范围</div>
              <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                <p><strong>思路</strong>：整体递增有两种情形（外增内增 / 外减内减），分情形讨论；每种情形列<strong>三约束</strong>（外底数 + 内单调 + 真数 &gt; 0 恒成立）求交集</p>
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">情形一：<Math tex="a > 1" />（外增 + 内增）</div>
                  <div className="px-3 py-1">
                    <p><strong>第一步</strong>：底数约束。外函数增需要 <Math tex="a > 1" /></p>
                    <p><strong>第二步</strong>：内单调约束。内函数 <Math tex="t = x^2 - ax + 1" /> 开口向上，要在 <Math tex="[2, +\infty)" /> 上单调递增，需对称轴 <Math tex="\tfrac{a}{2} \leq 2" />，得 <Math tex="a \leq 4" /></p>
                    <p><strong>第三步</strong>：定义域约束。<Math tex="t(x) > 0" /> 在 <Math tex="[2, +\infty)" /> 上恒成立</p>
                    <p className="pl-4">由第二步，<Math tex="t" /> 在该区间上递增，最小值在 <Math tex="x = 2" /></p>
                    <p className="pl-4">得 <Math tex="t(2) = 4 - 2a + 1 = 5 - 2a > 0" />，解出 <Math tex="a < \tfrac{5}{2}" /></p>
                    <p><strong>第四步</strong>：综上所述，三个条件取交集，得 <Math tex="1 < a < \tfrac{5}{2}" /></p>
                  </div>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">情形二：<Math tex="0 < a < 1" />（外减 + 内减）</div>
                  <div className="px-3 py-1">
                    <p><strong>第一步</strong>：底数约束。外函数减需要 <Math tex="0 < a < 1" /></p>
                    <p><strong>第二步</strong>：内单调约束。内函数 <Math tex="t = x^2 - ax + 1" /> 是开口向上的抛物线，在 <Math tex="[2, +\infty)" /> 上<strong>不可能单调递减</strong></p>
                    <p className="pl-4">原因：开口向上抛物线在对称轴右侧单调递增，<Math tex="[2, +\infty)" /> 总会进入递增段</p>
                    <p><strong>结论</strong>：情形二<strong>无解</strong></p>
                  </div>
                </div>
              </div>
              <div className="px-3 py-1 border-t border-gray-300 bg-amber-50">
                <p><strong>答案</strong>：<Math tex="a \in \left(1,\, \tfrac{5}{2}\right)" /></p>
                <p><strong>三约束套路</strong>：含参对数复合题的固定流程——列出 ① 外底数 ② 内单调 ③ 真数 <Math tex="> 0" /> 恒成立，三方面分别求范围，最后取<strong>交集</strong></p>
              </div>
            </div>

            {/* 卡片 7：例 4 内指数 + 外对数 */}
            <div className="border border-gray-400 rounded overflow-hidden -mt-px text-[0.85rem]">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例 4（内指数 + 外对数）. 求 <Math tex="y = \log_{\frac{1}{2}}(2^x - 1)" /> 的单调区间</div>
              <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                <p><strong>思路</strong>：内函数是<strong>指数函数</strong>形态（本身就单调，不用拆段）；按三步法走，注意定义域要求</p>
              </div>
              <div className="px-3 py-1">
                <p><strong>第一步</strong>：求定义域。真数 <Math tex="> 0" />，列不等式 <Math tex="2^x - 1 > 0" />，得 <Math tex="2^x > 1" />，解得 <Math tex="x > 0" /></p>
                <hr className="my-1 border-gray-200" />
                <p><strong>第二步</strong>：拆内外定单调性</p>
                <p>外函数 <Math tex="y = \log_{\frac{1}{2}} t" />，底数 <Math tex="0 < \tfrac{1}{2} < 1" />，是<strong>减</strong>函数</p>
                <p>内函数 <Math tex="t = 2^x - 1" />，<Math tex="2^x" /> 是增函数，减常数 1 不影响单调性，所以内函数<strong>增</strong></p>
                <hr className="my-1 border-gray-200" />
                <p><strong>第三步</strong>：用同增异减判整体</p>
                <p>在 <Math tex="(0, +\infty)" /> 上：内增、外减，单调性<strong>不同</strong>，整体<strong>减</strong></p>
              </div>
              <div className="px-3 py-1 border-t border-gray-300 bg-amber-50">
                <p><strong>答案</strong>：减区间 <Math tex="(0, +\infty)" />（无增区间）</p>
              </div>
            </div>

            {/* 即时练习 2（lfm-3~8，对应例 1~4 + 2 道综合） */}
            <div className="text-[0.9rem] print:hidden">
              <PracticeCard title="✈️ 练习（求复合对数函数的单调区间）" questions={logFuncMonoPractice.slice(2)} explanations={logFuncExplanations} hideBlankLine columns={2}
                renderItem={(q, idx) => (
                  <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                    <span className="text-gray-800 mr-2 font-medium">{idx + 3}.</span>
                    {q.questionLatex && <Math tex={q.questionLatex} />}
                  </p>
                )}
              />
            </div>
            <div className="text-[0.9rem] hidden print:block">
              <PrintQuestions questions={logFuncMonoPractice.slice(2)} columns={2} startIndex={2} />
            </div>

          </div>
        </Collapsible>

        <Collapsible title="六、复合对数函数 — 值域与最值" defaultOpen storageKey="log-func-page:composite-range">
          <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100 text-[0.8rem]">值域与最值四步法</div>
              <table className="w-full border-collapse text-[0.85rem] [&_th]:border [&_th]:border-gray-300 [&_th]:px-2 [&_th]:py-1 [&_td]:border [&_td]:border-gray-300 [&_td]:px-2 [&_td]:py-1">
                <thead className="bg-gray-50 text-center">
                  <tr>
                    <th className="w-40">步骤</th>
                    <th>做法</th>
                    <th className="w-72">最容易错的地方</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center"><strong>① 求定义域</strong></td>
                    <td>真数 <Math tex="> 0" />，先确定 <Math tex="x" /> 能取哪些值</td>
                    <td>不能一上来就求二次函数最值</td>
                  </tr>
                  <tr>
                    <td className="text-center"><strong>② 设内函数</strong></td>
                    <td>设 <Math tex="t = f(x)" />，把原函数看成 <Math tex="y = \log_a t" /></td>
                    <td><Math tex="t" /> 的范围必须在定义域内求</td>
                  </tr>
                  <tr>
                    <td className="text-center"><strong>③ 求 <Math tex="t" /> 的范围</strong></td>
                    <td>用配方、区间端点、二次函数图像求出 <Math tex="t" /> 的最大值和最小值</td>
                    <td>端点取不到时，不能写成闭区间</td>
                  </tr>
                  <tr>
                    <td className="text-center"><strong>④ 转成 <Math tex="y" /> 的范围</strong></td>
                    <td>看外函数 <Math tex="y = \log_a t" />：<Math tex="a > 1" /> 时递增，<Math tex="0 < a < 1" /> 时递减</td>
                    <td>底数小于 <Math tex="1" /> 时，最大值和最小值会交换位置</td>
                  </tr>
                </tbody>
              </table>
              <div className="px-3 py-1 bg-amber-50 border-t border-gray-300">
                <p><strong>一句话</strong>：先管 <Math tex="x" />，再管 <Math tex="t" />，最后通过对数函数单调性管 <Math tex="y" /></p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px text-[0.85rem]">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例 1（无区间限制）. 求函数 <Math tex="y = \log_2(x^2 - 2x + 5)" /> 的值域</div>
              <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                <p><strong>思路</strong>：先把真数配方，求出内函数 <Math tex="t" /> 的范围；底数 <Math tex="2 > 1" />，外函数递增，所以 <Math tex="t" /> 越大，<Math tex="y" /> 越大</p>
              </div>
              <div className="grid grid-cols-[3fr_2fr]">
                <div className="px-3 py-1 border-r border-gray-300">
                  <p><strong>第一步</strong>：求定义域。真数 <Math tex="> 0" />，列不等式 <Math tex="x^2 - 2x + 5 > 0" /></p>
                  <p>配方得 <Math tex="(x - 1)^2 + 4 > 0" /></p>
                  <p>因为 <Math tex="(x - 1)^2 \geq 0" />，所以 <Math tex="(x - 1)^2 + 4 \geq 4 > 0" /> 对任意 <Math tex="x \in \mathbb{R}" /> 都成立</p>
                  <p>这说明<strong>不管 <Math tex="x" /> 取什么实数，真数都满足 <Math tex="> 0" /></strong>，因此定义域为 <Math tex="\mathbb{R}" /></p>
                </div>
                <div className="px-3 py-1">
                  <p><strong>第二步</strong>：设内函数 <Math tex="t = x^2 - 2x + 5" /></p>
                  <p>由配方可知 <Math tex="t = (x - 1)^2 + 4" /></p>
                  <p>当 <Math tex="x = 1" /> 时，<Math tex="t" /> 取最小值 <Math tex="4" /></p>
                  <p>所以 <Math tex="t \in [4, +\infty)" /></p>
                </div>
              </div>
              <div className="px-3 py-1 border-t border-gray-300">
                <p><strong>第三步</strong>：看外函数单调性。外函数 <Math tex="y = \log_2 t" />，底数 <Math tex="2 > 1" />，是递增函数</p>
                <p>当 <Math tex="t = 4" /> 时，<Math tex="y = \log_2 4 = 2" /></p>
                <p>当 <Math tex="t" /> 越来越大时，<Math tex="y = \log_2 t" /> 也越来越大，<strong>答案</strong>：值域为 <Math tex="[2, +\infty)" /></p>
              </div>
              <div className="px-3 py-1 border-t border-gray-300 bg-amber-50">
                <p><strong>关键</strong>：内函数最小值是 <Math tex="4" />，不是外函数最小值；还要再算 <Math tex="\log_2 4" /></p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px text-[0.85rem]">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例 2（限定区间 + 底数小于 1）. 求函数 <Math tex="y = \log_{\frac{1}{3}}(x^2 - 4x + 3)" /> 在 <Math tex="[2, 5]" /> 上的最值</div>
              <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                <p><strong>思路</strong>：先在给定区间和定义域的交集里求内函数 <Math tex="t" /> 的范围；底数 <Math tex="\tfrac{1}{3}" /> 小于 <Math tex="1" />，外函数递减，所以 <Math tex="t" /> 越大，<Math tex="y" /> 越小</p>
              </div>
              <div className="px-3 py-1">
                <p><strong>第一步</strong>：求定义域。真数 <Math tex="x^2 - 4x + 3 > 0" /></p>
                <p>因式分解得 <Math tex="(x - 1)(x - 3) > 0" />，解得 <Math tex="x < 1" /> 或 <Math tex="x > 3" />；<Math tex="x" /> 既要在题目限定的 <Math tex="[2, 5]" /> 内，又要在定义域内</p>
                <p>定义域 <Math tex="x < 1" /> 这一段不在 <Math tex="[2, 5]" /> 内，<strong>舍去</strong>；只剩 <Math tex="x > 3" /> 这一段，再与 <Math tex="[2, 5]" /> 一起看，得 <Math tex="x \in (3, 5]" /></p>
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr] border-t border-gray-300">
                <div className="px-3 py-1">
                  <p><strong>第二步</strong>：设内函数 <Math tex="t = x^2 - 4x + 3" /></p>
                  <p>配方得 <Math tex="t = (x - 2)^2 - 1" />，对称轴 <Math tex="x = 2" /></p>
                  <p>区间 <Math tex="(3, 5]" /> 在对称轴右侧，<Math tex="t" /> 单调递增，把区间两端点代入：</p>
                  <p className="pl-4">当 <Math tex="x = 3" />（取不到）时，<Math tex="t = 9 - 12 + 3 = 0" /></p>
                  <p className="pl-4">当 <Math tex="x = 5" /> 时，<Math tex="t = 25 - 20 + 3 = 8" /></p>
                  <p>所以 <Math tex="t \in (0, 8]" /></p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="flex flex-col">
                  <div className="px-3 py-1">
                    <p><strong>第三步</strong>：看外函数单调性。外函数 <Math tex="y = \log_{\frac{1}{3}} t" /></p>
                    <p>底数 <Math tex="0 < \tfrac{1}{3} < 1" />，是递减函数</p>
                    <p>当 <Math tex="t = 8" /> 时，<Math tex="y" /> 取最小值 <Math tex="\log_{\frac{1}{3}} 8" /></p>
                    <p>当 <Math tex="t" /> 趋近于 <Math tex="0" /> 时，<Math tex="y" /> 越来越大，没有最大值</p>
                  </div>
                  <div className="px-3 py-1 mt-auto border-t border-gray-300 bg-amber-50">
                    <p><strong>答案</strong>：最小值为 <Math tex="\log_{\frac{1}{3}} 8" />，无最大值；值域为 <Math tex="\left[\log_{\frac{1}{3}} 8, +\infty\right)" /></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px text-[0.85rem]">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例 3（含参 · 分情形讨论）. 求函数 <Math tex="y = \log_a(x^2 - 2x + 3)" />（<Math tex="a > 0" /> 且 <Math tex="a \neq 1" />）的值域</div>
              <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                <p><strong>思路</strong>：底数 <Math tex="a" /> 含参，外函数是增是减<strong>没定</strong>，必须分 <Math tex="a > 1" /> 和 <Math tex="0 < a < 1" /> 两种情形讨论</p>
              </div>
              <div className="grid grid-cols-[3fr_2fr]">
                <div className="px-3 py-1 border-r border-gray-300">
                  <p><strong>第一步</strong>：求定义域。真数 <Math tex="> 0" />，列不等式 <Math tex="x^2 - 2x + 3 > 0" /></p>
                  <p>配方得 <Math tex="(x - 1)^2 + 2 > 0" />，因为 <Math tex="(x - 1)^2 \geq 0" /></p>
                  <p>所以 <Math tex="(x - 1)^2 + 2 \geq 2 > 0" /> 对任意 <Math tex="x \in \mathbb{R}" /> 都成立，因此定义域为 <Math tex="\mathbb{R}" /></p>
                </div>
                <div className="px-3 py-1">
                  <p><strong>第二步</strong>：设内函数 <Math tex="t = x^2 - 2x + 3" /></p>
                  <p>由配方知 <Math tex="t = (x - 1)^2 + 2" /></p>
                  <p>当 <Math tex="x = 1" /> 时，<Math tex="t" /> 取最小值 <Math tex="2" />，所以 <Math tex="t \in [2, +\infty)" /></p>
                </div>
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr] border-t border-gray-300">
                <div>
                  <div className="px-3 py-0.5 font-bold border-b border-gray-300 bg-gray-50">第三步 · 情形一：<Math tex="a > 1" />（外函数递增）</div>
                  <div className="px-3 py-1">
                    <p>外函数 <Math tex="y = \log_a t" /> 是<strong>增</strong>函数</p>
                    <p>当 <Math tex="t = 2" /> 时，<Math tex="y" /> 取最小值 <Math tex="\log_a 2" /></p>
                    <p>当 <Math tex="t" /> 越来越大时，<Math tex="y" /> 越来越大</p>
                    <p>所以 <Math tex="y \in [\log_a 2, +\infty)" /></p>
                  </div>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div>
                  <div className="px-3 py-0.5 font-bold border-b border-gray-300 bg-gray-50">第三步 · 情形二：<Math tex="0 < a < 1" />（外函数递减）</div>
                  <div className="px-3 py-1">
                    <p>外函数 <Math tex="y = \log_a t" /> 是<strong>减</strong>函数</p>
                    <p>当 <Math tex="t = 2" /> 时，<Math tex="y" /> 取最大值 <Math tex="\log_a 2" /></p>
                    <p>当 <Math tex="t" /> 越来越大时，<Math tex="y" /> 越来越小</p>
                    <p>所以 <Math tex="y \in (-\infty, \log_a 2]" /></p>
                  </div>
                </div>
              </div>
              <div className="px-3 py-1 border-t border-gray-300 bg-amber-50">
                <p><strong>答案</strong>：当 <Math tex="a > 1" /> 时，值域为 <Math tex="[\log_a 2, +\infty)" />；当 <Math tex="0 < a < 1" /> 时，值域为 <Math tex="(-\infty, \log_a 2]" /></p>
                <p><strong>关键</strong>：底数含参时<strong>外函数单调性会反转</strong>，<Math tex="t" /> 最小处对应的 <Math tex="y" /> 是最大还是最小也跟着反转——必须分两情形讨论</p>
              </div>
            </div>

            {/* 即时练习（lfr-1~6 求值域 / 最值） */}
            <div className="text-[0.93rem] print:hidden">
              <PracticeCard title="✈️ 练习（求复合对数函数的值域 / 最值）" questions={logFuncRangePractice} explanations={logFuncExplanations} hideBlankLine columns={2}
                renderItem={(q, idx) => (
                  <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                    <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                    {q.questionLatex && <Math tex={q.questionLatex} />}
                  </p>
                )}
              />
            </div>
            <div className="text-[0.93rem] hidden print:block">
              <PrintQuestions questions={logFuncRangePractice} columns={2} />
            </div>

          </div>
        </Collapsible>

        <Collapsible title="七、含参反推 — 定义域与值域" defaultOpen storageKey="log-func-page:param">
          <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

            {/* 卡片 1：四类反差速查表 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <table className="w-full border-collapse text-[0.85rem] [&_th]:border [&_th]:border-gray-300 [&_th]:px-2 [&_th]:py-1 [&_td]:border [&_td]:border-gray-300 [&_td]:px-2 [&_td]:py-1">
                <thead className="bg-gray-50 text-center">
                  <tr>
                    <th>类型</th>
                    <th>真数 <Math tex="g(x)" /> 的要求</th>
                    <th>转化</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center font-bold">定义域为 <Math tex="\mathbb{R}" /></td>
                    <td>对所有 <Math tex="x" /> 恒 <Math tex="> 0" /></td>
                    <td className="text-center"><Math tex="\Delta < 0" />（恒正）</td>
                  </tr>
                  <tr>
                    <td className="text-center font-bold">值域为 <Math tex="\mathbb{R}" /></td>
                    <td>能取遍 <Math tex="(0, +\infty)" /></td>
                    <td className="text-center"><Math tex="\Delta \geq 0" />（能取到 <Math tex="0^+" />）</td>
                  </tr>
                </tbody>
              </table>
              <div className="px-3 py-1 bg-amber-50 border-t border-gray-300">
                <p><strong>口诀</strong>：定义域恒正，值域要够大</p>
              </div>
            </div>

            {/* 卡片 1.5：为什么能这样转化 */}
            <div className="border border-gray-400 rounded overflow-hidden -mt-px text-[0.85rem]">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">为什么能这样转化</div>
              <div className="px-3 py-1 border-b border-gray-300 bg-blue-50">
                <p><strong>前提回顾</strong>：对数函数有个天生门槛——<strong>真数必须大于 0</strong></p>
                <p>当真数不是简单的 <Math tex="x" />，而是一个关于 <Math tex="x" /> 的表达式 <Math tex="g(x)" /> 时，只有让 <Math tex="g(x) > 0" /> 的那些 <Math tex="x" /> 才能代入函数</p>
                <p>如果<strong>所有</strong> <Math tex="x" /> 都能让 <Math tex="g(x) > 0" />，那函数对任意实数都有意义，定义域就是 <Math tex="\mathbb{R}" /></p>
              </div>
              <div className="px-3 py-1 border-b border-gray-300">
                <p><strong>定义域为 <Math tex="\mathbb{R}" /></strong>：等价于 <Math tex="g(x) > 0" /> 对所有 <Math tex="x" /> 恒成立</p>
                <p>当 <Math tex="g(x)" /> 是二次函数且开口向上时，恒正意味着图像<strong>永远不碰 <Math tex="x" /> 轴</strong>，即无实根，所以 <Math tex="\Delta < 0" /></p>
                <p><Math tex="\Delta = 0" /> 时，图像在顶点处碰了一下 <Math tex="x" /> 轴（<Math tex="g = 0" />），那个点真数为 0，log 无意义，定义域<strong>缺一个点</strong>，不是 <Math tex="\mathbb{R}" /></p>
                <p><Math tex="\Delta > 0" /> 时，图像穿过 <Math tex="x" /> 轴，两根之间 <Math tex="g(x) < 0" />，定义域<strong>缺一整段</strong>，更不是 <Math tex="\mathbb{R}" /></p>
              </div>
              <div className="px-3 py-1">
                <p><strong>值域为 <Math tex="\mathbb{R}" /></strong>：<Math tex="y = \log_a t" /> 本身值域就是 <Math tex="\mathbb{R}" />，但前提是 <Math tex="t" /> 能取遍 <Math tex="(0, +\infty)" /></p>
                <p>开口向上的二次函数能取到任意大的正值没问题，关键是<strong>能不能取到接近 0 的正值</strong></p>
                <p>如果 <Math tex="g_{\min} > 0" />（即 <Math tex="\Delta < 0" />），<Math tex="g(x)" /> 的值域是 <Math tex="[g_{\min}, +\infty)" />，取不到 <Math tex="(0, g_{\min})" /> 里的值，值域不完整</p>
                <p>如果 <Math tex="g_{\min} \leq 0" />（即 <Math tex="\Delta \geq 0" />），<Math tex="g(x)" /> 能取到任意接近 0 的正值，值域完整</p>
              </div>
              <div className="px-3 py-1 border-t border-gray-300 bg-amber-50">
                <p><strong>注意</strong>：以上讨论的前提是 <Math tex="g(x)" /> 开口向上</p>
                <p>如果开口向下，<Math tex="g(x)" /> 有上界且趋向 <Math tex="-\infty" />，既不能恒正（定义域不为 <Math tex="\mathbb{R}" />），也取不到任意大的正值（值域不为 <Math tex="\mathbb{R}" />），两者都不成立</p>
              </div>
            </div>

            {/* 卡片 2：例 1 定义域为 R 求参数 */}
            <div className="border border-gray-400 rounded overflow-hidden -mt-px text-[0.85rem]">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例 1（定义域为 <Math tex="\mathbb{R}" /> · 反推参数）. 已知 <Math tex="f(x) = \log_2(ax^2 + ax + 1)" /> 的定义域为 <Math tex="\mathbb{R}" />，求实数 <Math tex="a" /> 的取值范围</div>
              <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                <p><strong>思路</strong>：定义域为 <Math tex="\mathbb{R}" /> 等价于真数 <Math tex="g(x) = ax^2 + ax + 1" /> 对所有 <Math tex="x" /> 恒大于 0，需分 <Math tex="a = 0" /> 和 <Math tex="a \neq 0" /> 两类讨论</p>
              </div>
              <div className="px-3 py-1">
                <p><strong>情形一</strong>：<Math tex="a = 0" /> 时，真数 <Math tex="g(x) = 1 > 0" /> 恒成立，<strong>满足</strong></p>
                <hr className="my-1 border-gray-200" />
                <p><strong>情形二</strong>：<Math tex="a \neq 0" /> 时，<Math tex="g(x) = ax^2 + ax + 1" /> 是二次函数，要对所有 <Math tex="x" /> 恒正，需同时满足两个条件：</p>
                <p className="pl-4">① 开口向上：<Math tex="a > 0" /><span className="inline-block w-8" />② 判别式小于 0：<Math tex="\Delta = a^2 - 4a < 0" /></p>
                <hr className="my-1 border-gray-200" />
                <p className="pl-4">解 <Math tex="a^2 - 4a < 0" />，因式分解 <Math tex="a(a - 4) < 0" />，得 <Math tex="0 < a < 4" /></p>
                <p className="pl-4">综合 ① 和 ②，得 <Math tex="0 < a < 4" /></p>
              </div>
              <div className="px-3 py-1 border-t border-gray-300 bg-amber-50">
                <p><strong>答案</strong>：综合情形一和情形二，得 <Math tex="a \in [0, 4)" /></p>
              </div>
            </div>

            {/* 卡片 3：例 2 值域为 R 求参数（与例 1 对照） */}
            <div className="border border-gray-400 rounded overflow-hidden -mt-px text-[0.85rem]">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例 2（值域为 <Math tex="\mathbb{R}" /> · 反推参数 · 与例 1 对照）. 已知 <Math tex="f(x) = \log_{\frac{1}{2}}(x^2 + ax + 1)" /> 的值域为 <Math tex="\mathbb{R}" />，求实数 <Math tex="a" /> 的取值范围</div>
              <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                <p><strong>思路</strong>：值域为 <Math tex="\mathbb{R}" /> 等价于真数 <Math tex="g(x) = x^2 + ax + 1" /> 能取遍 <Math tex="(0, +\infty)" />。二次函数开口向上自然能任意大，关键是<strong>最小值要 <Math tex="\leq 0" /></strong></p>
              </div>
              <div className="px-3 py-1">
                <p><strong>第一步</strong>：内函数 <Math tex="g(x) = x^2 + ax + 1" /> 开口向上，顶点在 <Math tex="x = -\dfrac{a}{2}" />，顶点值 <Math tex="g_{\min} = 1 - \dfrac{a^2}{4}" /></p>
                <hr className="my-1 border-gray-200" />
                <p><strong>第二步</strong>：要 <Math tex="g(x)" /> 能取遍 <Math tex="(0, +\infty)" />，需 <Math tex="g_{\min} \leq 0" />，即 <Math tex="1 - \dfrac{a^2}{4} \leq 0" />，整理得 <Math tex="a^2 \geq 4" />，解得 <Math tex="a \leq -2" /> 或 <Math tex="a \geq 2" /></p>
                <hr className="my-1 border-gray-200" />
                <p><strong>解法二</strong>：直接看判别式——值域为 <Math tex="\mathbb{R}" /> 等价于 <Math tex="\Delta = a^2 - 4 \geq 0" />，解得 <Math tex="a \leq -2" /> 或 <Math tex="a \geq 2" /></p>
              </div>
              <div className="px-3 py-1 border-t border-gray-300 bg-amber-50">
                <p><strong>答案</strong>：<Math tex="a \in (-\infty, -2] \cup [2, +\infty)" /></p>
              </div>
              <div className="px-3 py-1 border-t border-gray-300 bg-blue-50">
                <p><strong>与例 1 反差对照</strong>：定义域为 <Math tex="\mathbb{R}" /> 要 <Math tex="\Delta < 0" />（真数恒正取不到 0）；值域为 <Math tex="\mathbb{R}" /> 要 <Math tex="\Delta \geq 0" />（真数可以触到 <Math tex="0^+" />）</p>
              </div>
            </div>

            {/* 即时练习（lfp-1~4 含参反推） */}
            <div className="text-[0.98rem] print:hidden">
              <PracticeCard title="✈️ 练习（含参反推 — 定义域与值域）" questions={logFuncParamPractice} explanations={logFuncExplanations} hideBlankLine columns={1}
                renderItem={(q, idx) => (
                  <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                    <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                    {q.questionLatex && <Math tex={q.questionLatex} />}
                  </p>
                )}
              />
            </div>
            <div className="text-[0.98rem] hidden print:block">
              <PrintQuestions questions={logFuncParamPractice} columns={1} />
            </div>

          </div>
        </Collapsible>

        <Collapsible title="八、图像法与多选综合" defaultOpen storageKey="log-func-page:graph">
          <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

            {/* 卡片 1：通法速查 — 零点·图像法 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100 text-[0.8rem]">零点·交点·图像法 速查表</div>
              <table className="w-full border-collapse text-[0.85rem] [&_th]:border [&_th]:border-gray-300 [&_th]:px-2 [&_th]:py-1 [&_td]:border [&_td]:border-gray-300 [&_td]:px-2 [&_td]:py-1">
                <thead className="bg-gray-50 text-center">
                  <tr>
                    <th>问题类型</th>
                    <th>等价转化</th>
                    <th>关键步骤</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center font-bold"><Math tex="f(x) = 0" /> 有根吗？</td>
                    <td><Math tex="y = f(x)" /> 与 <Math tex="x" /> 轴的交点</td>
                    <td>零点存在定理 <Math tex="f(a) \cdot f(b) < 0" /></td>
                  </tr>
                  <tr>
                    <td className="text-center font-bold"><Math tex="f(x) = g(x)" /> 几个根？</td>
                    <td><Math tex="y = f(x)" /> 与 <Math tex="y = g(x)" /> 的交点</td>
                    <td>分离变量，画两条图数交点</td>
                  </tr>
                  <tr>
                    <td className="text-center font-bold">零点在哪个区间？</td>
                    <td>逐段代入端点值</td>
                    <td>找到异号区间 + 单调性定唯一</td>
                  </tr>
                </tbody>
              </table>
              <div className="px-3 py-1 bg-blue-50 border-t border-gray-300 text-[0.85rem]">
                <p><strong>零点存在定理</strong>：若 <Math tex="y = f(x)" /> 在 <Math tex="[a, b]" /> 上连续，且 <Math tex="f(a) \cdot f(b) < 0" />，则 <Math tex="(a, b)" /> 内<strong>至少</strong>有一个零点</p>
              </div>
              <div className="px-3 py-1 bg-amber-50 border-t border-gray-300">
                <p><strong>口诀</strong>：画图定交点，端点定区间，单调定个数</p>
              </div>
            </div>

            {/* 卡片 2：例 1 零点所在区间 + 唯一性 */}
            <div className="border border-gray-400 rounded overflow-hidden -mt-px text-[0.85rem]">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例 1（零点所在区间）. <Math tex="f(x) = \log_2 x + x - 4" /> 的零点所在区间及个数</div>
              <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                <p><strong>思路</strong>：先判单调性，再代入端点值找异号区间</p>
              </div>
              <div className="px-3 py-1">
                <p><strong>第一步</strong>：定义域 <Math tex="(0, +\infty)" /></p>
                <hr className="my-1 border-gray-200" />
                <p><strong>第二步</strong>：<Math tex="\log_2 x" /> 在 <Math tex="(0, +\infty)" /> 上递增，<Math tex="x" /> 也递增，所以 <Math tex="f(x) = \log_2 x + x - 4" /> <strong>单调递增</strong></p>
                <hr className="my-1 border-gray-200" />
                <p><strong>第三步</strong>：代入端点值</p>
                <p className="pl-4"><Math tex="f(2) = \log_2 2 + 2 - 4 = 1 + 2 - 4 = -1 < 0" /></p>
                <p className="pl-4"><Math tex="f(4) = \log_2 4 + 4 - 4 = 2 + 4 - 4 = 2 > 0" /></p>
                <hr className="my-1 border-gray-200" />
                <p><strong>第四步</strong>：<Math tex="f(2) \cdot f(4) < 0" />，由零点存在定理，<Math tex="(2, 4)" /> 内<strong>至少</strong>有一个零点</p>
                <p className="pl-4">又 <Math tex="f(x)" /> 在 <Math tex="(0, +\infty)" /> 上单调递增，所以零点<strong>唯一</strong></p>
              </div>
              <div className="px-3 py-1 border-t border-gray-300 bg-amber-50">
                <p><strong>答案</strong>：零点在 <Math tex="(2, 4)" /> 内，且唯一</p>
              </div>
            </div>

            {/* 卡片 3：例 2 方程根的个数（分离变量画图） */}
            <div className="border border-gray-400 rounded overflow-hidden -mt-px text-[0.85rem]">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例 2（方程根的个数 · 图像法）. 方程 <Math tex="\log_2 x = x - 2" /> 的实数根个数</div>
              <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                <p><strong>思路</strong>：分离变量，画 <Math tex="y = \log_2 x" /> 和 <Math tex="y = x - 2" /> 两条图，数交点</p>
              </div>
              <div className="grid grid-cols-[5fr_3fr]">
                <div className="px-3 py-1 border-r border-gray-300 min-w-0">
                  <p><strong>第一步</strong>：画两条图的关键点</p>
                  <p className="pl-4"><Math tex="y = \log_2 x" />：过 <Math tex="(1, 0)" />、<Math tex="(2, 1)" />、<Math tex="(4, 2)" />，递增且增速变缓</p>
                  <p className="pl-4"><Math tex="y = x - 2" />：过 <Math tex="(2, 0)" />、<Math tex="(4, 2)" />，斜率为 1 的直线</p>
                  <hr className="my-1 border-gray-200" />
                  <p><strong>第二步</strong>：代入特殊值判断上下关系</p>
                  <p className="pl-4"><Math tex="x = 4" />：<Math tex="\log_2 4 = 2 = 4 - 2" />，<strong>恰好相等</strong>，是一个交点</p>
                  <p className="pl-4"><Math tex="x = 1" />：<Math tex="\log_2 1 = 0 > -1 = 1 - 2" />，对数在直线上方</p>
                  <p className="pl-4"><Math tex="x \to 0^+" />：<Math tex="\log_2 x \to -\infty" />，而 <Math tex="x - 2 \to -2" />，直线在上方</p>
                  <hr className="my-1 border-gray-200" />
                  <p><strong>第三步</strong>：分析交点个数</p>
                  <p className="pl-4"><Math tex="(0, 1)" /> 区间：<Math tex="x \to 0^+" /> 时直线在上，<Math tex="x = 1" /> 时对数在上，中间<strong>必有一个交点</strong></p>
                  <p className="pl-4"><Math tex="x = 4" /> 处恰好相交，是第二个交点</p>
                  <p className="pl-4"><Math tex="x > 4" /> 后，直线斜率恒为 1，而 <Math tex="\log_2 x" /> 的增速越来越小，不再有交点</p>
                </div>
                <div className="flex flex-col items-center justify-center py-2 min-w-0">
                  <DebugGeo2dSvg data={logZeroIntersectDiagram} width={200} height={140} />
                  <p className="mt-1 text-center text-[0.8rem]">蓝：<Math tex="y=\log_2 x" /> 橙：<Math tex="y=x-2" /></p>
                </div>
              </div>
              <div className="px-3 py-1 border-t border-gray-300 bg-amber-50">
                <p><strong>答案</strong>：2 个交点 = <strong>2 个</strong>实数根</p>
              </div>
            </div>

            {/* 卡片 4：例 3 多选题（综合性质判断） */}
            <div className="border border-gray-400 rounded overflow-hidden -mt-px text-[0.85rem]">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例 3（多选题 · 性质综合判断）</div>
              <div className="px-3 py-1 border-b border-gray-300">
                <p>已知 <Math tex="f(x) = \lg|x - 1|" />，下列说法正确的是</p>
                <div className="grid grid-cols-2 gap-x-4 pl-4">
                  <p>A. <Math tex="f(x)" /> 的定义域为 <Math tex="\mathbb{R}" /></p>
                  <p>B. <Math tex="f(x)" /> 在 <Math tex="(-\infty, 1)" /> 上单调递减</p>
                  <p>C. <Math tex="f(x + 1)" /> 是偶函数</p>
                  <p>D. 若 <Math tex="f(a) > 0" />，则 <Math tex="a < 0" /> 或 <Math tex="a > 2" /></p>
                </div>
              </div>
              <div className="px-3 py-1">
                <p><strong>逐项分析</strong>：</p>
                <hr className="my-1 border-gray-200" />
                <p><strong>A</strong>：<Math tex="x = 1" /> 时 <Math tex="|x - 1| = 0" />，<Math tex="\lg 0" /> 无意义，定义域是 <Math tex="\{x \mid x \neq 1\}" />，不是 <Math tex="\mathbb{R}" />。<strong>❌</strong></p>
                <hr className="my-1 border-gray-200" />
                <p><strong>B</strong>：<Math tex="x < 1" /> 时 <Math tex="|x - 1| = 1 - x" />，随 <Math tex="x" /> 增大而递减（从正值趋向 0），<Math tex="\lg" /> 是增函数，所以 <Math tex="f(x) = \lg(1 - x)" /> 递减。<strong>✅</strong></p>
                <hr className="my-1 border-gray-200" />
                <p><strong>C</strong>：<Math tex="f(x + 1) = \lg|x + 1 - 1| = \lg|x|" />，定义域 <Math tex="\{x \mid x \neq 0\}" /> 关于原点对称，且 <Math tex="\lg|-x| = \lg|x|" />，所以是偶函数。<strong>✅</strong></p>
                <hr className="my-1 border-gray-200" />
                <p><strong>D</strong>：<Math tex="f(a) > 0" /> 即 <Math tex="\lg|a - 1| > 0" />，得 <Math tex="|a - 1| > 1" />，去绝对值得 <Math tex="a - 1 > 1" /> 或 <Math tex="a - 1 < -1" />，即 <Math tex="a > 2" /> 或 <Math tex="a < 0" />。<strong>✅</strong></p>
              </div>
              <div className="px-3 py-1 border-t border-gray-300 bg-amber-50">
                <p><strong>答案</strong>：<strong>BCD</strong></p>
              </div>
            </div>

            {/* 即时练习（lf8-1~3 零点区间 / 方程根 / 多选） */}
            <div className="text-[0.9rem] print:hidden">
              <PracticeCard title="✈️ 练习（图像法与多选综合）" questions={logFuncGraphicPractice} explanations={logFuncExplanations} hideBlankLine columns={2}
                renderItem={(q, idx) => (
                  <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                    <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                    {q.questionLatex && <Math tex={q.questionLatex} />}
                  </p>
                )}
              />
            </div>
            <div className="text-[0.9rem] hidden print:block">
              <PrintQuestions questions={logFuncGraphicPractice} columns={2} />
            </div>

          </div>
        </Collapsible>

        </div>
      </LessonLayout>
      {isPrinting && printOptions.showAnswers && <LogFuncAnswers />}
    </div>
  );
}
