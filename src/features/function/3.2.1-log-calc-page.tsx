import { Math, Collapsible, PageHeader, LessonLayout, ExportButton, UnifiedDebugToggle, PracticeCard, PrintQuestions } from '@/components/shared';
import { useProgress, usePrintMode } from '@/hooks';
import { logDefinitionPractice, logParamPractice, logIdentityPractice, logRulePractice, logChangeBasePractice, logSubstitutionPractice, logDerivPractice } from './data/3.2.1/3.2.1-log-calc-practice';
import { LogCalcAnswers, logCalcExplanations } from './3.2.1-log-calc-answers';

const logCalcProgressItems = [
  { id: 'lc1', label: '理解对数的定义和指对互化' },
  { id: 'lc2', label: '能用 a>0、a≠1、N>0 三条件求参数取值范围（高考核心）' },
  { id: 'lc3', label: '记住 4 个对数恒等式（重点 a^{log_a N} = N）' },
  { id: 'lc4', label: '掌握对数三大运算法则的正用和逆用' },
  { id: 'lc5', label: '能熟练应用换底公式及其变形' },
  { id: 'lc6', label: '能用设元法解"已知一组对数值求其他"' },
  { id: 'lc7', label: '能用巧妙因式分解化简综合对数式' },
  { id: 'lc8', label: '记住对数函数的求导公式（导数·提前接触）' },
  { id: 'lc9', label: '能用对数解决实际应用问题（pH、半衰期、噪声、复利等）' },
];

export function LogCalcPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('log-calc', logCalcProgressItems);
  const { isPrinting, printOptions } = usePrintMode();

  return (
    <div>
      <PageHeader
        stage="第三阶段 · 函数思维"
        title="3.2.1 对数与运算"
        tags={[
          { label: '难度 ★★★☆☆', color: 'amber' },
          { label: '必考', color: 'blue' },
          { label: '约3小时', color: 'purple' },
        ]}
      />

      <div className="flex justify-end gap-2 print:hidden">
        <UnifiedDebugToggle />
        <ExportButton title="3.2.1 对数与运算" />
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>
        <div className="[&_.rounded-xl]:mb-0 [&_.rounded-xl>.flex.items-center]:py-0.5 [&_.rounded-xl>div:last-child]:px-0 [&_.rounded-xl>div:last-child]:pt-0 [&_.rounded-xl>div:last-child]:pb-0 [&_.rounded-xl_button>span]:font-bold [&_.rounded-xl_button>span]:text-gray-900">

        <Collapsible title="一、什么是对数" defaultOpen storageKey="log-calc-page:what">
          <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">从一个问题说起</div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div className="px-3 py-1">
                  <p>想想这个问题：<Math tex="2^x = 8" />，<Math tex="x" /> 等于多少？</p>
                  <p className="mt-1">不难，<Math tex="x = 3" /></p>
                  <p className="mt-1">再想：<Math tex="2^x = 7" />，<Math tex="x" /> 等于多少？这下答不上来了</p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="px-3 py-1">
                  <p>这种<strong>已知底数和结果，反求指数</strong>的运算，就叫<strong>对数</strong></p>
                  <p className="mt-1">我们记作 <strong><Math tex="x = \log_2 7" /></strong>，读作"<strong>以 2 为底 7 的对数</strong>"</p>
                  <p className="mt-1">简单说：<strong>对数就是指数运算的逆运算</strong></p>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">认识三个名字</div>
              <div className="py-1 text-center text-lg">
                <Math tex="\log_a N = x" />
              </div>
              <div className="grid grid-cols-[5fr_5fr_3fr] border-t border-gray-300">
                <div className="px-2 py-1 text-center border-r border-gray-300">
                  <p><strong>底数 <Math tex="a" /></strong>：固定的正常数，写在 <Math tex="\log" /> 右下角</p>
                </div>
                <div className="px-2 py-1 text-center border-r border-gray-300">
                  <p><strong>真数 <Math tex="N" /></strong>：要取对数的对象，写在 <Math tex="\log" /> 后面</p>
                </div>
                <div className="px-2 py-1 text-center">
                  <p><strong>对数值 <Math tex="x" /></strong>：运算的结果</p>
                </div>
              </div>
              <div className="px-3 py-1 border-t border-gray-300 bg-blue-50 text-center">
                <p><strong>核心互化</strong>：<Math tex="\log_a N = x" /> 等价于 <Math tex="a^x = N" /></p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 text-gray-800 border-b border-gray-400 bg-gray-100 flex items-center justify-center gap-6">
                <span className="font-bold">标准形式</span>
                <Math tex="\boldsymbol{\log_a N = x \quad (a > 0 \text{ 且 } a \neq 1, \, N > 0)}" />
              </div>
              <div className="px-3 py-1">
                <p><strong>为什么 <Math tex="a > 0" />？</strong>由 <Math tex="a^x = N" />，底数 <Math tex="a" /> 必须大于 0（否则负数没法开偶次方，0 又不能取负次幂）</p>
                <p className="mt-1"><strong>为什么 <Math tex="a \neq 1" />？</strong>因为 <Math tex="1^x = 1" /> 恒成立，反推不出 <Math tex="x" />（任何 <Math tex="x" /> 都满足，对数失去意义）</p>
                <p className="mt-1"><strong>为什么 <Math tex="N > 0" />？</strong>因为 <Math tex="a^x > 0" /> 恒成立（指数值域 <Math tex="(0, +\infty)" />），结果 <Math tex="N" /> 不可能 ≤ 0</p>
              </div>
              <div className="px-3 py-1 border-t border-gray-300 bg-amber-50">
                <p><strong>易错提示</strong>：考题最爱在<strong>真数 &gt; 0</strong> 上设陷阱（带变量的真数要先解不等式）</p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">两个特殊符号</div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div className="px-3 py-1 text-center">
                  <p className="font-bold">常用对数</p>
                  <p className="text-lg my-0.5"><Math tex="\lg N = \log_{10} N" /></p>
                  <p>底数为 10，<Math tex="\lg" /> 后没有下标</p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="px-3 py-1 text-center">
                  <p className="font-bold">自然对数</p>
                  <p className="text-lg my-0.5"><Math tex="\ln N = \log_e N" /></p>
                  <p>底数为 <Math tex="e \approx 2.71828" />（叫"自然底数"）</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例 1. 把下列指数式与对数式互化</div>
              <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                <p><strong>读题</strong>：对数与指数本质是同一个等式的两种写法（<Math tex="\log_a N = x" /> 等价于 <Math tex="a^x = N" />），目标是熟练双向转换</p>
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div className="px-3 py-1">
                  <p><strong>第一步</strong>：把指数式改写为对数式</p>
                  <p className="pl-4"><Math tex="2^5 = 32" />，得 <Math tex="\log_2 32 = 5" /></p>
                  <p className="pl-4"><Math tex="10^{-2} = 0.01" />，得 <Math tex="\lg 0.01 = -2" /></p>
                  <p className="pl-4"><Math tex="e^0 = 1" />，得 <Math tex="\ln 1 = 0" /></p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="px-3 py-1">
                  <p><strong>第二步</strong>：把对数式改写为指数式</p>
                  <p className="pl-4"><Math tex="\log_3 81 = 4" />，得 <Math tex="3^4 = 81" /></p>
                  <p className="pl-4"><Math tex="\lg 1000 = 3" />，得 <Math tex="10^3 = 1000" /></p>
                  <p className="pl-4"><Math tex="\log_2 \tfrac{1}{8} = -3" />，得 <Math tex="2^{-3} = \tfrac{1}{8}" /></p>
                </div>
              </div>
              <div className="px-3 py-1 border-t border-gray-300">
                <p><strong>进阶</strong>：当底和真数不是直接幂次时，要<strong>先化同底</strong>再互化</p>
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr] border-t border-gray-200">
                <div className="px-3 py-1">
                  <p>例 1：求 <Math tex="\log_4 8" /> 的值</p>
                  <p className="pl-4">令 <Math tex="x = \log_4 8" />，由互化得 <Math tex="4^x = 8" /></p>
                  <p className="pl-4">化同底为 <Math tex="2" />，即 <Math tex="2^{2x} = 2^3" />，所以 <Math tex="2x = 3" />，得 <Math tex="x = \tfrac{3}{2}" /></p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="px-3 py-1">
                  <p>例 2：求 <Math tex="\log_8 4" /> 的值</p>
                  <p className="pl-4">令 <Math tex="x = \log_8 4" />，由互化得 <Math tex="8^x = 4" /></p>
                  <p className="pl-4">化同底为 <Math tex="2" />，即 <Math tex="2^{3x} = 2^2" />，所以 <Math tex="3x = 2" />，得 <Math tex="x = \tfrac{2}{3}" /></p>
                </div>
              </div>
              <div className="px-3 py-1 border-t border-gray-300 bg-amber-50">
                <p><strong>结论</strong>：互化口诀，<strong>底不变，指对换位</strong></p>
              </div>
            </div>

            <div className="text-base print:hidden">
              <PracticeCard title="✈️ 练习（对数定义与互化）" questions={logDefinitionPractice} explanations={logCalcExplanations} hideBlankLine columns={2}
                renderItem={(q, idx) => (
                  <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                    <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                    {q.questionLatex && <Math tex={q.questionLatex} />}
                  </p>
                )}
              />
            </div>
            <div className="text-base hidden print:block">
              <PrintQuestions questions={logDefinitionPractice} columns={2} />
            </div>

          </div>
        </Collapsible>

        <Collapsible title="二、求参数取值范围（高考核心）" defaultOpen storageKey="log-calc-page:param">
          <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">三条件速记表</div>
              <table className="w-full border-collapse text-center [&_th]:border [&_th]:border-gray-300 [&_th]:px-2 [&_th]:py-1 [&_td]:border [&_td]:border-gray-300 [&_td]:px-2 [&_td]:py-1">
                <thead className="bg-gray-50">
                  <tr>
                    <th>条件</th>
                    <th>位置</th>
                    <th>作用</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong><Math tex="a > 0" /></strong></td>
                    <td>底数</td>
                    <td className="text-left">保证底数为正（和指数函数同条件）</td>
                  </tr>
                  <tr>
                    <td><strong><Math tex="a \neq 1" /></strong></td>
                    <td>底数</td>
                    <td className="text-left">避免底数恒为 1，反推无意义</td>
                  </tr>
                  <tr>
                    <td><strong><Math tex="N > 0" /></strong></td>
                    <td>真数</td>
                    <td className="text-left">因为 <Math tex="a^x > 0" /> 恒成立，结果必须 <Math tex="> 0" /></td>
                  </tr>
                </tbody>
              </table>
              <div className="px-3 py-1 border-t border-gray-300 bg-amber-50">
                <p><strong>口诀</strong>：<strong>底正不为一，真数大于零</strong>。看参数在哪列哪条，同时出现就三条都列</p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例 1. 求 <Math tex="f(x) = \log_2 \dfrac{x + 1}{x - 2}" /> 的定义域</div>
              <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                <p><strong>读题</strong>：底数是常数 <Math tex="2" />（已满足 <Math tex="a > 0" /> 且 <Math tex="a \neq 1" />），只有真数含变量，所以只需查 <Math tex="N > 0" /> 这一条</p>
              </div>
              <div className="grid grid-cols-[55fr_auto_45fr]">
                <div className="px-3 py-1">
                  <p><strong>第一步</strong>：识别参数位置。底数 <Math tex="2" /> 是常数，真数 <Math tex="\dfrac{x + 1}{x - 2}" /> 含变量</p>
                  <hr className="my-1 border-gray-200" />
                  <p><strong>第二步</strong>：由真数 <Math tex="> 0" /> 的条件，列不等式 <Math tex="\dfrac{x + 1}{x - 2} > 0" /></p>
                  <hr className="my-1 border-gray-200" />
                  <p><strong>第三步</strong>：分式 <Math tex="> 0" /> 等价于分子分母同号，即 <Math tex="(x + 1)(x - 2) > 0" /></p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="px-3 py-1">
                  <p><strong>第四步</strong>：解得 <Math tex="x > 2" /> 或 <Math tex="x < -1" /></p>
                  <p><strong>结论</strong>：定义域为 <Math tex="(-\infty, -1) \cup (2, +\infty)" /></p>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例 2. 若 <Math tex="y = \log_a (2a - 1)" /> 有意义，求 <Math tex="a" /> 的取值范围</div>
              <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                <p><strong>读题</strong>：底数 <Math tex="a" /> 和真数 <Math tex="2a - 1" /> 都含参数 <Math tex="a" />，三条件全列</p>
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr] text-[0.85rem]">
                <div className="px-3 py-1">
                  <p><strong>第一步</strong>：列三条件</p>
                  <p className="pl-4">① 底数正：<Math tex="a > 0" /></p>
                  <p className="pl-4">② 底数非一：<Math tex="a \neq 1" /></p>
                  <p className="pl-4">③ 真数正：<Math tex="2a - 1 > 0" />，解得 <Math tex="a > \tfrac{1}{2}" /></p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="px-3 py-1">
                  <p><strong>第二步</strong>：求三条件的交集</p>
                  <p className="pl-4"><Math tex="a > \dfrac{1}{2}" /> 已经包含 <Math tex="a > 0" />，再加上 <Math tex="a \neq 1" /></p>
                  <p><strong>结论</strong>：<Math tex="a \in \left(\tfrac{1}{2}, 1\right) \cup \left(1, +\infty\right)" /></p>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例 3. 若 <Math tex="y = \log_{a-1}(x^2 - 1)" /> 是对数函数，求 <Math tex="a" /> 的范围与定义域</div>
              <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                <p><strong>读题</strong>：底数 <Math tex="a - 1" /> 含参数 <Math tex="a" />，真数 <Math tex="x^2 - 1" /> 含自变量 <Math tex="x" />，两边分别处理</p>
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div className="px-3 py-1">
                  <p><strong>第一步</strong>：由底数条件确定 <Math tex="a" /></p>
                  <p className="pl-4">底数正：<Math tex="a - 1 > 0" />，得 <Math tex="a > 1" /></p>
                  <p className="pl-4">底数非一：<Math tex="a - 1 \neq 1" />，得 <Math tex="a \neq 2" /></p>
                  <p className="pl-4">综合：<Math tex="a \in (1, 2) \cup (2, +\infty)" /></p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="px-3 py-1">
                  <p><strong>第二步</strong>：由真数条件求定义域</p>
                  <p className="pl-4">真数正：<Math tex="x^2 - 1 > 0" />，因式分解得 <Math tex="(x-1)(x+1) > 0" /></p>
                  <p className="pl-4">解得 <Math tex="x > 1" /> 或 <Math tex="x < -1" /></p>
                  <p className="pl-4">定义域：<Math tex="(-\infty, -1) \cup (1, +\infty)" /></p>
                </div>
              </div>
              <div className="px-3 py-1 border-t border-gray-300 bg-amber-50">
                <p><strong>结论</strong>：<Math tex="a \in (1, 2) \cup (2, +\infty)" />，定义域为 <Math tex="(-\infty, -1) \cup (1, +\infty)" /></p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">易错陈列</div>
              <table className="w-full border-collapse text-center [&_th]:border [&_th]:border-gray-300 [&_th]:px-2 [&_th]:py-1 [&_td]:border [&_td]:border-gray-300 [&_td]:px-2 [&_td]:py-1">
                <thead className="bg-gray-50">
                  <tr>
                    <th>陷阱</th>
                    <th>错误做法</th>
                    <th>正确做法</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-bold">漏 <Math tex="a \neq 1" /></td>
                    <td className="text-left">只列 <Math tex="a > 0" /> 和真数正</td>
                    <td className="text-left">三条件都要列，<Math tex="a \neq 1" /> 最易忘</td>
                  </tr>
                  <tr>
                    <td className="font-bold">漏判真数含变量</td>
                    <td className="text-left">见题直接代入求值</td>
                    <td className="text-left">先列真数 <Math tex="> 0" /> 再解不等式</td>
                  </tr>
                  <tr>
                    <td className="font-bold">混淆 <Math tex="a" /> 和 <Math tex="x" /></td>
                    <td className="text-left">"是对数函数"把 <Math tex="x" /> 当参数</td>
                    <td className="text-left"><Math tex="a" /> 求范围、<Math tex="x" /> 求定义域</td>
                  </tr>
                  <tr>
                    <td className="font-bold">条件合并错</td>
                    <td className="text-left">把三条件写成并集</td>
                    <td className="text-left">三条件求<strong>交集</strong>（同时成立）</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-base print:hidden">
              <PracticeCard title="✈️ 练习（求参数取值范围）" questions={logParamPractice} explanations={logCalcExplanations} hideBlankLine columns={2}
                renderItem={(q, idx) => (
                  <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                    <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                    {q.questionLatex && <Math tex={q.questionLatex} />}
                  </p>
                )}
              />
            </div>
            <div className="text-base hidden print:block">
              <PrintQuestions questions={logParamPractice} columns={2} />
            </div>

          </div>
        </Collapsible>

        <Collapsible title="三、4 个对数恒等式" defaultOpen storageKey="log-calc-page:identity" hideTitleOnPrint>
          <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">四个恒等式速查表</div>
              <table className="w-full border-collapse text-center [&_th]:border [&_th]:border-gray-300 [&_th]:px-2 [&_th]:py-1 [&_td]:border [&_td]:border-gray-300 [&_td]:px-2 [&_td]:py-1">
                <thead className="bg-gray-50">
                  <tr>
                    <th>编号</th>
                    <th>公式</th>
                    <th>由来</th>
                    <th>举例</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td><Math tex="\log_a 1 = 0" /></td>
                    <td className="text-left">真数为 1（任何数的 0 次幂等于 1）</td>
                    <td><Math tex="\log_2 1 = 0" /></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td><Math tex="\log_a a = 1" /></td>
                    <td className="text-left">底数等于真数</td>
                    <td><Math tex="\log_5 5 = 1" />，<Math tex="\ln e = 1" /></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td><Math tex="\log_a a^n = n" /></td>
                    <td className="text-left">化幂为系数（真数能写成同底幂时）</td>
                    <td><Math tex="\log_2 8 = \log_2 2^3 = 3" /></td>
                  </tr>
                  <tr className="bg-amber-50">
                    <td className="font-bold">4</td>
                    <td><strong><Math tex="a^{\log_a N} = N" /></strong></td>
                    <td className="text-left"><strong>对数还原指数</strong>（重点）</td>
                    <td><Math tex="2^{\log_2 5} = 5" /></td>
                  </tr>
                </tbody>
              </table>
              <div className="px-3 py-1 border-t border-gray-300 bg-amber-50">
                <p><strong>口诀</strong>：前三条由定义“看一眼”就出结果；第 4 条 <Math tex="a^{\log_a N} = N" /> 是<strong>设元法、综合化简</strong>的核心工具</p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">为什么 <Math tex="a^{\log_a N} = N" /></div>
              <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                <p><strong>读题</strong>：这条恒等式看起来抽象，其实就是分组一“指对互化”的直接结论</p>
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div className="px-3 py-1">
                  <p><strong>第一步</strong>：由对数定义</p>
                  <p className="pl-4"><Math tex="\log_a N = x" /> 等价于 <Math tex="a^x = N" /></p>
                  <hr className="my-1 border-gray-200" />
                  <p><strong>第二步</strong>：设 <Math tex="x = \log_a N" />，由互化得 <Math tex="a^x = N" /></p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="px-3 py-1">
                  <p><strong>第三步</strong>：把 <Math tex="x" /> 替换回去</p>
                  <p className="pl-4"><Math tex="a^{\log_a N} = a^x = N" /></p>
                  <hr className="my-1 border-gray-200" />
                  <p><strong>本质</strong>：对数与指数互为逆运算，“先取对数再做幂”等于不动</p>
                </div>
              </div>
              <div className="px-3 py-1 border-t border-gray-300 bg-amber-50">
                <p><strong>关键</strong>：底数 <Math tex="a" /> 与对数底数必须<strong>相同</strong>才能消去；<Math tex="3^{\log_2 5}" /> 不能化为 <Math tex="5" /></p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="grid grid-cols-[40fr_auto_60fr]">
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">例 1. 求 <Math tex="2^{\log_2 5} + \log_3 3^4 + \ln e + \log_7 1" /> 的值</div>
                  <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                    <p><strong>思路</strong>：把每一项分别对照 4 个恒等式</p>
                  </div>
                  <div className="px-3 py-1">
                    <p><strong>第一项</strong>：<Math tex="2^{\log_2 5} = 5" />（恒等式 4）</p>
                    <p><strong>第二项</strong>：<Math tex="\log_3 3^4 = 4" />（恒等式 3）</p>
                    <p><strong>第三项</strong>：<Math tex="\ln e = 1" />（恒等式 2，底数等于真数）</p>
                    <p><strong>第四项</strong>：<Math tex="\log_7 1 = 0" />（恒等式 1）</p>
                    <p><strong>结论</strong>：原式 <Math tex="= 5 + 4 + 1 + 0 = 10" /></p>
                  </div>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">例 2. 化简 <Math tex="a^{2 \log_a 3}" />（<Math tex="a > 0" /> 且 <Math tex="a \neq 1" />）</div>
                  <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                    <p><strong>思路</strong>：恒等式 4 要求“指数是 <Math tex="\log_a N" /> 的形式”，先用幂运算把系数 <Math tex="2" /> 移走</p>
                  </div>
                  <div className="px-3 py-1">
                    <p><strong>第一步</strong>：用幂的运算 <Math tex="a^{mn} = (a^m)^n" /></p>
                    <p className="pl-4"><Math tex="a^{2 \log_a 3} = \left(a^{\log_a 3}\right)^2" /></p>
                    <hr className="my-1 border-gray-200" />
                    <p><strong>第二步</strong>：由恒等式 4，<Math tex="a^{\log_a 3} = 3" /></p>
                    <hr className="my-1 border-gray-200" />
                    <p><strong>结论</strong>：<Math tex="a^{2 \log_a 3} = 3^2 = 9" /></p>
                  </div>
                </div>
              </div>
              <div className="px-3 py-1 border-t border-gray-300 bg-amber-50">
                <p><strong>易错</strong>：不能直接写 <Math tex="a^{2 \log_a 3} = 2 \times 3 = 6" />；恒等式 4 只对“指数恰为 <Math tex="\log_a N" />”成立，多余的系数要先用幂运算法则处理</p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例 3. 解方程 <Math tex="\log_2 (\log_3 x) = 1" />，求 <Math tex="x" /></div>
              <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                <p><strong>思路</strong>：嵌套对数的统一做法是<strong>从外向内层层剥开</strong>，把内层表达式整体当作 <Math tex="M" />，反用恒等式或互化得出 <Math tex="M" />，再继续剥下一层</p>
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div className="px-3 py-1">
                  <p><strong>第一层</strong>：剥外层，把 <Math tex="\log_3 x" /> 当作整体 <Math tex="M" /></p>
                  <p className="pl-4">原方程变为 <Math tex="\log_2 M = 1" /></p>
                  <p className="pl-4">由恒等式 <Math tex="\log_a a = 1" /> 反用，得 <Math tex="M = 2" /></p>
                  <p className="pl-4">即 <Math tex="\log_3 x = 2" /></p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="px-3 py-1">
                  <p><strong>第二层</strong>：剥内层，用对数定义互化</p>
                  <p className="pl-4"><Math tex="\log_3 x = 2" /> 等价于 <Math tex="x = 3^2" /></p>
                  <p className="pl-4">解得 <Math tex="x = 9" /></p>
                  <p><strong>结论</strong>：<Math tex="x = 9" /></p>
                </div>
              </div>
              <div className="px-3 py-1 border-t border-gray-300 bg-amber-50">
                <p><strong>口诀</strong>：嵌套对数<strong>从外向内剥</strong>。遇 <Math tex="\log_a M = 0" /> 用恒等式 1 反推 <Math tex="M = 1" />；遇 <Math tex="\log_a M = 1" /> 用恒等式 2 反推 <Math tex="M = a" />；遇 <Math tex="\log_a M = n" /> 用互化反推 <Math tex="M = a^n" /></p>
              </div>
            </div>

            <div className="text-base print:hidden">
              <PracticeCard title="✈️ 练习（4 个对数恒等式）" questions={logIdentityPractice} explanations={logCalcExplanations} hideBlankLine columns={2}
                renderItem={(q, idx) => (
                  <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                    <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                    {q.questionLatex && <Math tex={q.questionLatex} />}
                  </p>
                )}
              />
            </div>
            <div className="text-base hidden print:block">
              <PrintQuestions questions={logIdentityPractice} columns={2} />
            </div>

          </div>
        </Collapsible>

        <Collapsible title="四、对数运算三法则" defaultOpen storageKey="log-calc-page:rule">
          <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">三法则速查表</div>
              <table className="w-full border-collapse text-center [&_th]:border [&_th]:border-gray-300 [&_th]:px-2 [&_th]:py-1 [&_td]:border [&_td]:border-gray-300 [&_td]:px-2 [&_td]:py-1">
                <thead className="bg-gray-50">
                  <tr>
                    <th>法则</th>
                    <th>公式</th>
                    <th>说明</th>
                    <th>举例</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-bold">乘加</td>
                    <td><Math tex="\log_a (MN) = \log_a M + \log_a N" /></td>
                    <td className="text-left">真数相乘等于对数相加</td>
                    <td><Math tex="\lg 2 + \lg 5 = \lg 10 = 1" /></td>
                  </tr>
                  <tr>
                    <td className="font-bold">除减</td>
                    <td><Math tex="\log_a \dfrac{M}{N} = \log_a M - \log_a N" /></td>
                    <td className="text-left">真数相除等于对数相减</td>
                    <td><Math tex="\log_2 8 - \log_2 4 = 1" /></td>
                  </tr>
                  <tr>
                    <td className="font-bold">幂乘</td>
                    <td><Math tex="\log_a M^n = n \cdot \log_a M" /></td>
                    <td className="text-left">真数取幂等于对数乘系数</td>
                    <td><Math tex="\lg 100 = 2 \lg 10 = 2" /></td>
                  </tr>
                </tbody>
              </table>
              <div className="px-3 py-1 border-t border-gray-300 bg-amber-50">
                <p><strong>口诀</strong>：<strong>乘加、除减、幂乘</strong>。三条法则要求<strong>同底数</strong>对数才能合并</p>
                <p className="mt-0.5"><strong>遇根号或倒数</strong>：先化为<strong>分数指数幂</strong>（<Math tex="\sqrt[n]{M} = M^{1/n}" />）或<strong>负指数幂</strong>（<Math tex="\tfrac{1}{M} = M^{-1}" />），再套幂乘法则</p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">法则推导：用指数法则反推（理解即可）</div>
              <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                <p><strong>读题</strong>：以“乘加”为例，从指数运算法则 <Math tex="a^p \cdot a^q = a^{p+q}" /> 反推</p>
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div className="px-3 py-1">
                  <p><strong>第一步</strong>：设元，由对数定义</p>
                  <p className="pl-4">设 <Math tex="\log_a M = p" />，<Math tex="\log_a N = q" /></p>
                  <p className="pl-4">由互化得 <Math tex="a^p = M" />，<Math tex="a^q = N" /></p>
                  <hr className="my-1 border-gray-200" />
                  <p><strong>第二步</strong>：两式相乘，<Math tex="MN = a^p \cdot a^q = a^{p+q}" /></p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="px-3 py-1">
                  <p><strong>第三步</strong>：再由对数定义互化</p>
                  <p className="pl-4"><Math tex="MN = a^{p+q}" /> 等价于 <Math tex="\log_a (MN) = p + q" /></p>
                  <hr className="my-1 border-gray-200" />
                  <p><strong>第四步</strong>：把 <Math tex="p" />、<Math tex="q" /> 代回</p>
                  <p className="pl-4"><Math tex="\log_a (MN) = \log_a M + \log_a N" />，证毕</p>
                </div>
              </div>
              <div className="px-3 py-1 border-t border-gray-300 bg-amber-50">
                <p><strong>类比</strong>：除减原理相同（用 <Math tex="a^p / a^q = a^{p-q}" />）；幂乘原理相同（用 <Math tex="(a^p)^n = a^{pn}" />）。三条法则的本质都是<strong>把指数运算转为对数运算</strong></p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">正用例题（拆分化简）</div>
              <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                <p><strong>正用</strong>：从左往右用法则，把<strong>复杂真数拆开</strong>为多个简单对数的和差。高考常考“用 <Math tex="\lg 2" />、<Math tex="\lg 3" /> 表示其他对数”</p>
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">例 1. 用 <Math tex="\lg 2" /> 和 <Math tex="\lg 3" /> 表示 <Math tex="\lg 12" /></div>
                  <div className="px-3 py-1">
                    <p><strong>第一步</strong>：把 <Math tex="12" /> 分解为 <Math tex="2" /> 和 <Math tex="3" /> 的乘积</p>
                    <p className="pl-4"><Math tex="12 = 4 \times 3 = 2^2 \times 3" /></p>
                    <hr className="my-1 border-gray-200" />
                    <p><strong>第二步</strong>：用乘加法则拆开</p>
                    <p className="pl-4"><Math tex="\lg 12 = \lg(2^2 \times 3) = \lg 2^2 + \lg 3" /></p>
                    <hr className="my-1 border-gray-200" />
                    <p><strong>第三步</strong>：用幂乘法则把指数移到前面</p>
                    <p className="pl-4"><Math tex="\lg 2^2 = 2 \lg 2" /></p>
                    <p><strong>结论</strong>：<Math tex="\lg 12 = 2 \lg 2 + \lg 3" /></p>
                  </div>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">例 2. 用 <Math tex="\lg 2" /> 表示 <Math tex="\lg 0.32" /></div>
                  <div className="px-3 py-1">
                    <p><strong>第一步</strong>：把 <Math tex="0.32" /> 化为分数，<Math tex="0.32 = \dfrac{32}{100} = \dfrac{2^5}{10^2}" /></p>
                    <hr className="my-1 border-gray-200" />
                    <p><strong>第二步</strong>：用除减法则拆开</p>
                    <p className="pl-4"><Math tex="\lg 0.32 = \lg 2^5 - \lg 10^2" /></p>
                    <hr className="my-1 border-gray-200" />
                    <p><strong>第三步</strong>：用幂乘法则化简</p>
                    <p className="pl-4"><Math tex="\lg 2^5 = 5 \lg 2" />，<Math tex="\lg 10^2 = 2" />（恒等式 3）</p>
                    <p><strong>结论</strong>：<Math tex="\lg 0.32 = 5 \lg 2 - 2" /></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-base print:hidden">
              <PracticeCard title="✈️ 练习（正用：拆分化简）" questions={logRulePractice.slice(0, 2)} explanations={logCalcExplanations} hideBlankLine columns={2}
                renderItem={(q, idx) => (
                  <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                    <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                    {q.questionLatex && <Math tex={q.questionLatex} />}
                  </p>
                )}
              />
            </div>
            <div className="text-base hidden print:block">
              <PrintQuestions questions={logRulePractice.slice(0, 2)} columns={2} />
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">逆用例题（合并凑整）</div>
              <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                <p><strong>逆用</strong>：从右往左用法则，把<strong>多个同底对数合并</strong>为一个，目标是凑成 <Math tex="\lg 10" />、<Math tex="\log_a a^n" /> 等可直接求值的形式</p>
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">例 3. 求 <Math tex="\lg 2 + \lg 5" /> 的值</div>
                  <div className="px-3 py-1">
                    <p><strong>第一步</strong>：识别凑整对子</p>
                    <p className="pl-4"><Math tex="2 \times 5 = 10" />，能凑成 <Math tex="\lg 10" /></p>
                    <hr className="my-1 border-gray-200" />
                    <p><strong>第二步</strong>：用乘加逆用合并</p>
                    <p className="pl-4"><Math tex="\lg 2 + \lg 5 = \lg(2 \times 5) = \lg 10" /></p>
                    <hr className="my-1 border-gray-200" />
                    <p><strong>结论</strong>：<Math tex="\lg 10 = 1" />（恒等式 2）</p>
                  </div>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">例 4. 求 <Math tex="2 \lg 2 + \lg 25" /> 的值</div>
                  <div className="px-3 py-1">
                    <p><strong>第一步</strong>：用幂乘逆用，把系数 <Math tex="2" /> 收进真数</p>
                    <p className="pl-4"><Math tex="2 \lg 2 = \lg 2^2 = \lg 4" /></p>
                    <hr className="my-1 border-gray-200" />
                    <p><strong>第二步</strong>：用乘加逆用合并</p>
                    <p className="pl-4"><Math tex="\lg 4 + \lg 25 = \lg (4 \times 25) = \lg 100" /></p>
                    <hr className="my-1 border-gray-200" />
                    <p><strong>结论</strong>：<Math tex="\lg 100 = 2" />（恒等式 3）</p>
                  </div>
                </div>
              </div>
              <div className="px-3 py-1 border-t border-gray-300 bg-amber-50">
                <p><strong>凑整对子</strong>：常用对数最爱凑 <Math tex="\lg 2 + \lg 5 = 1" />、<Math tex="\lg 4 + \lg 25 = 2" />、<Math tex="\lg 8 + \lg 125 = 3" />（即 <Math tex="2^n \times 5^n = 10^n" />）</p>
              </div>
            </div>

            <div className="text-base print:hidden">
              <PracticeCard title="✈️ 练习（逆用：合并凑整 + 综合）" questions={logRulePractice.slice(2)} explanations={logCalcExplanations} hideBlankLine columns={2}
                renderItem={(q, idx) => (
                  <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                    <span className="text-gray-800 mr-2 font-medium">{idx + 3}.</span>
                    {q.questionLatex && <Math tex={q.questionLatex} />}
                  </p>
                )}
              />
            </div>
            <div className="text-base hidden print:block">
              <PrintQuestions questions={logRulePractice.slice(2)} columns={2} startIndex={2} />
            </div>

          </div>
        </Collapsible>

        <Collapsible title="五、换底公式（高考核心）" defaultOpen storageKey="log-calc-page:change-base">
          <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">换底公式速查表</div>
              <table className="w-full border-collapse text-center [&_th]:border [&_th]:border-gray-300 [&_th]:px-2 [&_th]:py-1 [&_td]:border [&_td]:border-gray-300 [&_td]:px-2 [&_td]:py-1">
                <thead className="bg-gray-50">
                  <tr>
                    <th>名称</th>
                    <th>公式</th>
                    <th>说明</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-amber-50">
                    <td className="font-bold">主公式</td>
                    <td><strong><Math tex="\log_a b = \dfrac{\log_c b}{\log_c a}" /></strong></td>
                    <td className="text-left">任选新底 <Math tex="c > 0" /> 且 <Math tex="c \neq 1" /></td>
                  </tr>
                  <tr>
                    <td className="font-bold">化常用对数</td>
                    <td><Math tex="\log_a b = \dfrac{\lg b}{\lg a}" /></td>
                    <td className="text-left">取 <Math tex="c = 10" />，便于计算器求值</td>
                  </tr>
                  <tr>
                    <td className="font-bold">化自然对数</td>
                    <td><Math tex="\log_a b = \dfrac{\ln b}{\ln a}" /></td>
                    <td className="text-left">取 <Math tex="c = e" />，便于求导</td>
                  </tr>
                </tbody>
              </table>
              <div className="px-3 py-1 border-t border-gray-300 bg-amber-50">
                <p><strong>口诀</strong>：把不会算的底数换成会算的——<strong>题目给什么换什么</strong>（lg / ln / <Math tex="\log_a" /> 等）</p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">换底公式推导（理解即可）</div>
              <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                <p><strong>读题</strong>：把 <Math tex="\log_a b" /> 用<strong>另一个底 <Math tex="c" /></strong>的对数表示</p>
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div className="px-3 py-1">
                  <p><strong>第一步</strong>：设元，由对数定义</p>
                  <p className="pl-4">设 <Math tex="\log_a b = x" />，由互化得 <Math tex="a^x = b" /></p>
                  <hr className="my-1 border-gray-200" />
                  <p><strong>第二步</strong>：两边取以 <Math tex="c" /> 为底的对数</p>
                  <p className="pl-4"><Math tex="\log_c a^x = \log_c b" /></p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="px-3 py-1">
                  <p><strong>第三步</strong>：用幂乘法则把指数 <Math tex="x" /> 提到前面，<Math tex="x \cdot \log_c a = \log_c b" /></p>
                  <hr className="my-1 border-gray-200" />
                  <p><strong>第四步</strong>：解出 <Math tex="x" />，证毕</p>
                  <p className="pl-4"><Math tex="x = \dfrac{\log_c b}{\log_c a}" />，即 <Math tex="\log_a b = \dfrac{\log_c b}{\log_c a}" /></p>
                </div>
              </div>
              <div className="px-3 py-1 border-t border-gray-300 bg-amber-50">
                <p><strong>本质</strong>：换底 = <strong>指对互化 + 幂乘法则的组合应用</strong>。前面分组三的恒等式 + 分组四的三法则学完，换底是必然结论</p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">变形公式速查表（高频考点）</div>
              <table className="w-full border-collapse text-center [&_th]:border [&_th]:border-gray-300 [&_th]:px-2 [&_th]:py-1 [&_td]:border [&_td]:border-gray-300 [&_td]:px-2 [&_td]:py-1">
                <thead className="bg-gray-50">
                  <tr>
                    <th>变形</th>
                    <th>公式</th>
                    <th>由来</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-bold">互为倒数</td>
                    <td><Math tex="\log_a b \cdot \log_b a = 1" /></td>
                    <td className="text-left">主公式取 <Math tex="c = b" />，约分得 1</td>
                  </tr>
                  <tr>
                    <td className="font-bold">倒数</td>
                    <td><Math tex="\log_a b = \dfrac{1}{\log_b a}" /></td>
                    <td className="text-left">上式移项</td>
                  </tr>
                  <tr className="bg-amber-50">
                    <td className="font-bold">系数提取（重点）</td>
                    <td><strong><Math tex="\log_{a^n} b^m = \dfrac{m}{n} \log_a b" /></strong></td>
                    <td className="text-left">幂乘法则 + 换底</td>
                  </tr>
                </tbody>
              </table>
              <div className="px-3 py-1 border-t border-gray-300 bg-amber-50">
                <p><strong>系数提取记法</strong>：<strong>分子 = 真数指数 m，分母 = 底数指数 n</strong>。看到底数或真数带指数，立刻提到前面变系数。高频考点</p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例 1. 已知 <Math tex="\log_2 3 = a" />、<Math tex="\log_3 5 = b" />，求 <Math tex="\log_8 25" /></div>
              <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                <p><strong>读题</strong>：题给两个对数值，求另一个用字母表示。<strong>核心动作</strong>：把目标对数换底到题目已知的对数底数，配合系数提取与倒数变形</p>
              </div>
              <div className="grid grid-cols-[61fr_auto_39fr]">
                <div className="px-3 py-1">
                  <p><strong>第一步</strong>：识别底真都带指数，<Math tex="8 = 2^3" />、<Math tex="25 = 5^2" /></p>
                  <hr className="my-1 border-gray-200" />
                  <p><strong>第二步</strong>：用系数提取（真数指数 <Math tex="m = 2" /> 在分子、底数指数 <Math tex="n = 3" /> 在分母）</p>
                  <p className="pl-4"><Math tex="\log_8 25 = \log_{2^3} 5^2 = \tfrac{2}{3} \log_2 5" /></p>
                  <hr className="my-1 border-gray-200" />
                  <p><strong>第三步</strong>：求 <Math tex="\log_2 5" />，用主公式换底到 <Math tex="c = 3" /> 衔接 <Math tex="a" /> 和 <Math tex="b" /></p>
                  <p className="pl-4"><Math tex="\log_2 5 = \dfrac{\log_3 5}{\log_3 2} = \dfrac{b}{\log_3 2}" /></p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="px-3 py-1">
                  <p><strong>第四步</strong>：用倒数变形，<Math tex="\log_3 2 = \dfrac{1}{\log_2 3} = \dfrac{1}{a}" /></p>
                  <p className="pl-4">代回得 <Math tex="\log_2 5 = \dfrac{b}{\frac{1}{a}} = ab" /></p>
                  <hr className="my-1 border-gray-200" />
                  <p><strong>结论</strong>：<Math tex="\log_8 25 = \tfrac{2}{3} \cdot ab = \tfrac{2ab}{3}" /></p>
                </div>
              </div>
              <div className="px-3 py-1 border-t border-gray-300 bg-amber-50">
                <p><strong>三招组合</strong>：① <strong>系数提取</strong> ② <strong>主公式换底</strong> ③ <strong>倒数变形</strong>。高考"用 <Math tex="a" />、<Math tex="b" /> 表示某对数"的典型套路</p>
              </div>
            </div>

            <div className="text-base print:hidden">
              <PracticeCard title="✈️ 练习（基础换底）" questions={logChangeBasePractice.slice(0, 2)} explanations={logCalcExplanations} hideBlankLine columns={2}
                renderItem={(q, idx) => (
                  <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                    <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                    {q.questionLatex && <Math tex={q.questionLatex} />}
                  </p>
                )}
              />
            </div>
            <div className="text-base hidden print:block">
              <PrintQuestions questions={logChangeBasePractice.slice(0, 2)} columns={2} />
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">链式连乘例题（中间项相消）</div>
              <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                <p><strong>读题</strong>：多个对数相乘，相邻两项有"前真数 = 后底数"的衔接。<strong>核心动作</strong>：全部换底为 lg（或 ln），分子分母交替相消</p>
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">例 3. 求 <Math tex="\log_2 3 \cdot \log_3 4 \cdot \log_4 5 \cdot \log_5 8" /> 的值</div>
                  <div className="px-3 py-1">
                    <p><strong>第一步</strong>：每项用主公式换底为 lg</p>
                    <p className="pl-4"><Math tex="= \dfrac{\lg 3}{\lg 2} \cdot \dfrac{\lg 4}{\lg 3} \cdot \dfrac{\lg 5}{\lg 4} \cdot \dfrac{\lg 8}{\lg 5}" /></p>
                    <hr className="my-1 border-gray-200" />
                    <p><strong>第二步</strong>：链式相消（中间 <Math tex="\lg 3" />、<Math tex="\lg 4" />、<Math tex="\lg 5" /> 上下抵消）</p>
                    <p className="pl-4"><Math tex="= \dfrac{\lg 8}{\lg 2} = \log_2 8 = 3" /></p>
                  </div>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">例 4. 求 <Math tex="\log_4 9 \cdot \log_{27} 32" /> 的值</div>
                  <div className="px-3 py-1">
                    <p><strong>第一步</strong>：底真都带指数，用系数提取</p>
                    <p className="pl-4"><Math tex="\log_4 9 = \log_{2^2} 3^2 = \log_2 3" /></p>
                    <hr className="my-1 border-gray-200" />
                    <p className="pl-4"><Math tex="\log_{27} 32 = \log_{3^3} 2^5 = \tfrac{5}{3} \log_3 2" /></p>
                    <hr className="my-1 border-gray-200" />
                    <p><strong>第二步</strong>：用互为倒数 <Math tex="\log_2 3 \cdot \log_3 2 = 1" /></p>
                    <hr className="my-1 border-gray-200" />
                    <p className="pl-4"><Math tex="\log_2 3 \cdot \dfrac{5}{3} \log_3 2 = \dfrac{5}{3} \cdot 1 = \dfrac{5}{3}" /></p>
                  </div>
                </div>
              </div>
              <div className="px-3 py-1 border-t border-gray-300 bg-amber-50">
                <p><strong>口诀</strong>：链式连乘 = <strong>首底当新底、末真当新真数</strong>。例 3 中首底 = 2、末真 = 8，结果就是 <Math tex="\log_2 8 = 3" />（一眼出答案）</p>
              </div>
            </div>

            <div className="text-base print:hidden">
              <PracticeCard title="✈️ 练习（链式连乘 + 综合）" questions={logChangeBasePractice.slice(2)} explanations={logCalcExplanations} hideBlankLine columns={2}
                renderItem={(q, idx) => (
                  <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                    <span className="text-gray-800 mr-2 font-medium">{idx + 3}.</span>
                    {q.questionLatex && <Math tex={q.questionLatex} />}
                  </p>
                )}
              />
            </div>
            <div className="text-base hidden print:block">
              <PrintQuestions questions={logChangeBasePractice.slice(2)} columns={2} startIndex={2} />
            </div>

          </div>
        </Collapsible>

        <Collapsible title="六、设元法与综合化简" defaultOpen storageKey="log-calc-page:substitution">
          <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">方法概述（设元 + 凑结构）</div>
              <table className="w-full border-collapse text-center [&_th]:border [&_th]:border-gray-300 [&_th]:px-2 [&_th]:py-1 [&_td]:border [&_td]:border-gray-300 [&_td]:px-2 [&_td]:py-1">
                <thead className="bg-gray-50">
                  <tr>
                    <th>动作</th>
                    <th>触发信号</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-bold">设元</td>
                    <td className="text-left">已知 <Math tex="a^x = b" /> 或 <Math tex="\log_a b = c" /></td>
                    <td className="text-left">指对互化成对数值，把未知对数用字母 <Math tex="a" />、<Math tex="b" /> 表示</td>
                  </tr>
                  <tr>
                    <td className="font-bold">凑结构</td>
                    <td className="text-left">真数里出现 <Math tex="2" />、<Math tex="5" />、<Math tex="10" />、<Math tex="20" />、<Math tex="25" />、<Math tex="50" />、<Math tex="100" /></td>
                    <td className="text-left">拆真数 + 分组提公因式，目标凑出 <Math tex="\lg 2 + \lg 5 = \lg 10 = 1" /></td>
                  </tr>
                </tbody>
              </table>
              <div className="px-3 py-1 border-t border-gray-300 bg-amber-50">
                <p><strong>口诀</strong>：<strong>见条件设元，见 2 和 5 凑 <Math tex="\lg 2 + \lg 5 = 1" /></strong>。本质是<strong>把陌生对数换成已知字母</strong>（分组四 + 分组五的综合应用）</p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">设元例题（已知对数值，求其他对数）</div>
              <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                <div className="flex gap-1">
                  <strong className="shrink-0">思路：</strong>
                  <div>
                    <p><strong>已知指数形式</strong>（如 <Math tex="2^a = 3" />）：先互化为对数 <Math tex="\log_2 3 = a" />，再拆真数化简</p>
                    <p><strong>已知对数值</strong>（如 <Math tex="\lg 2 = a" />）：直接代入，配合换底公式与三法则化简</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">例 1. 已知 <Math tex="2^a = 3" />、<Math tex="2^b = 5" />，用 <Math tex="a" />、<Math tex="b" /> 表示 <Math tex="\log_2 75" /></div>
                  <div className="px-3 py-1">
                    <p><strong>第一步</strong>：指对互化，把条件转成对数</p>
                    <p className="pl-4"><Math tex="2^a = 3" /> 等价于 <Math tex="\log_2 3 = a" /></p>
                    <p className="pl-4"><Math tex="2^b = 5" /> 等价于 <Math tex="\log_2 5 = b" /></p>
                    <hr className="my-1 border-gray-200" />
                    <p><strong>第二步</strong>：拆分真数</p>
                    <p className="pl-4"><Math tex="75 = 3 \times 25 = 3 \times 5^2" /></p>
                    <hr className="my-1 border-gray-200" />
                    <p><strong>第三步</strong>：用乘加 + 幂乘法则（分组四）</p>
                    <p className="pl-4"><Math tex="\log_2 75 = \log_2 3 + \log_2 5^2 = \log_2 3 + 2 \log_2 5" /></p>
                    <hr className="my-1 border-gray-200" />
                    <p><strong>结论</strong>：<Math tex="\log_2 75 = a + 2b" /></p>
                  </div>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">例 2. 已知 <Math tex="\lg 2 = a" />、<Math tex="\lg 3 = b" />，用 <Math tex="a" />、<Math tex="b" /> 表示 <Math tex="\log_6 12" /></div>
                  <div className="px-3 py-1">
                    <p><strong>第一步</strong>：主公式换底为 lg，把陌生底 <Math tex="6" /> 换成已知的 lg</p>
                    <p className="pl-4"><Math tex="\log_6 12 = \dfrac{\lg 12}{\lg 6}" /></p>
                    <hr className="my-1 border-gray-200" />
                    <p><strong>第二步</strong>：拆分分子。<Math tex="12 = 4 \times 3 = 2^2 \times 3" /></p>
                    <p className="pl-4"><Math tex="\lg 12 = 2 \lg 2 + \lg 3 = 2a + b" /></p>
                    <hr className="my-1 border-gray-200" />
                    <p><strong>第三步</strong>：拆分分母。<Math tex="6 = 2 \times 3" /></p>
                    <p className="pl-4"><Math tex="\lg 6 = \lg 2 + \lg 3 = a + b" /></p>
                    <hr className="my-1 border-gray-200" />
                    <p><strong>结论</strong>：<Math tex="\log_6 12 = \dfrac{2a + b}{a + b}" /></p>
                  </div>
                </div>
              </div>
              <div className="px-3 py-1 border-t border-gray-300 bg-amber-50">
                <p><strong>口诀</strong>：设元法三步走 — <strong>先互化、再换底、再拆真数</strong>。目标是<strong>把陌生对数换成已知字母</strong></p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">巧妙因式分解例题（利用 <Math tex="\lg 2 + \lg 5 = 1" /> 分组提取）</div>
              <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                <div className="flex gap-1">
                  <strong className="shrink-0">思路：</strong>
                  <div>
                    <p><strong>直接型</strong>（真数只含 <Math tex="2" />、<Math tex="5" />）：前两项直接提公因式 <Math tex="\lg 2" /> 或 <Math tex="\lg 5" /></p>
                    <p><strong>拆分型</strong>（真数含 <Math tex="10" />、<Math tex="20" />、<Math tex="50" />、<Math tex="25" />）：先拆 <Math tex="\lg 20 = \lg 2 + 1" />、<Math tex="\lg 50 = \lg 5 + 1" />、<Math tex="\lg 25 = 2 \lg 5" />，再提公因式</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">例 3. 求 <Math tex="(\lg 2)^2 + \lg 2 \cdot \lg 5 + \lg 5" /> 的值</div>
                  <div className="px-3 py-1">
                    <p><strong>第一步</strong>：观察结构，前两项都含 <Math tex="\lg 2" /></p>
                    <p className="pl-4"><Math tex="(\lg 2)^2 + \lg 2 \cdot \lg 5 = \lg 2 \cdot (\lg 2 + \lg 5)" /></p>
                    <hr className="my-1 border-gray-200" />
                    <p><strong>第二步</strong>：用 <Math tex="\lg 2 + \lg 5 = 1" /> 抵消</p>
                    <p className="pl-4"><Math tex="\lg 2 \cdot (\lg 2 + \lg 5) = \lg 2 \cdot 1 = \lg 2" /></p>
                    <hr className="my-1 border-gray-200" />
                    <p><strong>第三步</strong>：代回原式，再用一次凑整</p>
                    <p className="pl-4">原式 <Math tex="= \lg 2 + \lg 5 = 1" /></p>
                    <hr className="my-1 border-gray-200" />
                    <p><strong>结论</strong>：原式 <Math tex="= 1" /></p>
                  </div>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">例 4. 求 <Math tex="\lg 5 \cdot \lg 20 + (\lg 2)^2" /> 的值</div>
                  <div className="px-3 py-1">
                    <p><strong>第一步</strong>：真数含 <Math tex="20" />，先拆</p>
                    <p className="pl-4"><Math tex="\lg 20 = \lg (2 \times 10) = \lg 2 + 1" /></p>
                    <hr className="my-1 border-gray-200" />
                    <p><strong>第二步</strong>：代入原式展开</p>
                    <p className="pl-4"><Math tex="\lg 5 \cdot (\lg 2 + 1) + (\lg 2)^2 = \lg 5 \cdot \lg 2 + \lg 5 + (\lg 2)^2" /></p>
                    <hr className="my-1 border-gray-200" />
                    <p><strong>第三步</strong>：前两项（含 <Math tex="\lg 2" /> 的）提公因式 <Math tex="\lg 2" /></p>
                    <p className="pl-4"><Math tex="\lg 2 \cdot (\lg 2 + \lg 5) + \lg 5 = \lg 2 \cdot 1 + \lg 5" /></p>
                    <hr className="my-1 border-gray-200" />
                    <p><strong>结论</strong>：原式 <Math tex="= \lg 2 + \lg 5 = 1" /></p>
                  </div>
                </div>
              </div>
              <div className="px-3 py-1 border-t border-gray-300 bg-amber-50">
                <p><strong>口诀</strong>：<strong>两项有公因式就提，真数含 10 的倍数先拆</strong>。每次用 <Math tex="\lg 2 + \lg 5 = 1" /> 把括号"吃掉"，式子一步步变短</p>
              </div>
            </div>

            <div className="text-base print:hidden">
              <PracticeCard title="✈️ 练习（设元法与综合化简）" questions={logSubstitutionPractice} explanations={logCalcExplanations} hideBlankLine columns={2}
                renderItem={(q, idx) => (
                  <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                    <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                    {q.questionLatex && <Math tex={q.questionLatex} />}
                  </p>
                )}
              />
            </div>
            <div className="text-base hidden print:block">
              <PrintQuestions questions={logSubstitutionPractice} columns={2} />
            </div>

          </div>
        </Collapsible>

        <Collapsible title="七、对数函数的求导（导数·提前接触）" defaultOpen storageKey="log-calc-page:deriv">
          <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">求导公式速查表</div>
              <table className="w-full border-collapse text-center [&_th]:border [&_th]:border-gray-300 [&_th]:px-2 [&_th]:py-1 [&_td]:border [&_td]:border-gray-300 [&_td]:px-2 [&_td]:py-1">
                <thead className="bg-gray-50">
                  <tr>
                    <th>函数</th>
                    <th>导数</th>
                    <th>说明</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-amber-50">
                    <td><strong><Math tex="y = \ln x" /></strong></td>
                    <td><strong><Math tex="y' = \dfrac{1}{x}" /></strong></td>
                    <td className="text-left">最美最常用，高考题主角</td>
                  </tr>
                  <tr>
                    <td><Math tex="y = \log_a x" /></td>
                    <td><Math tex="y' = \dfrac{1}{x \ln a}" /></td>
                    <td className="text-left">一般底，多个 <Math tex="\dfrac{1}{\ln a}" /> 修正</td>
                  </tr>
                  <tr>
                    <td><Math tex="y = \ln f(x)" /></td>
                    <td><Math tex="y' = \dfrac{f'(x)}{f(x)}" /></td>
                    <td className="text-left">链式复合 · ln（真数是个函数）</td>
                  </tr>
                  <tr>
                    <td><Math tex="y = \log_a f(x)" /></td>
                    <td><Math tex="y' = \dfrac{f'(x)}{f(x) \ln a}" /></td>
                    <td className="text-left">链式复合 · 一般底</td>
                  </tr>
                </tbody>
              </table>
              <div className="px-3 py-1 border-t border-gray-300 bg-amber-50">
                <p><strong>口诀</strong>：<strong><Math tex="\ln x" /> 求导最美 <Math tex="= \dfrac{1}{x}" /></strong>；一般底加 <Math tex="\dfrac{1}{\ln a}" /> 修正；复合要乘内层导数 <Math tex="f'(x)" /></p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">例 1. 求 <Math tex="y = \log_3 x" /> 的导数</div>
                  <div className="px-3 py-1">
                    <p><strong>第一步</strong>：识别为 <Math tex="y = \log_a x" /> 类型，<Math tex="a = 3" /></p>
                    <hr className="my-1 border-gray-200" />
                    <p><strong>第二步</strong>：套公式 <Math tex="y' = \dfrac{1}{x \ln a} = \dfrac{1}{x \ln 3}" /></p>
                  </div>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">例 2. 求 <Math tex="y = \ln(2x + 1)" /> 的导数</div>
                  <div className="px-3 py-1">
                    <p><strong>第一步</strong>：识别为 <Math tex="y = \ln f(x)" /> 类型，内函数 <Math tex="f(x) = 2x + 1" /></p>
                    <hr className="my-1 border-gray-200" />
                    <p><strong>第二步</strong>：求 <Math tex="f'(x) = 2" /></p>
                    <hr className="my-1 border-gray-200" />
                    <p><strong>第三步</strong>：套公式 <Math tex="y' = \dfrac{f'(x)}{f(x)} = \dfrac{2}{2x + 1}" /></p>
                  </div>
                </div>
              </div>
              <div className="px-3 py-1 border-t border-gray-300 bg-amber-50">
                <p><strong>口诀</strong>：<strong>先认外层，再求内层，最后套公式</strong>。一般底要多除以 <Math tex="\ln a" /></p>
              </div>
            </div>

            <div className="text-base print:hidden">
              <PracticeCard title="✈️ 练习（对数函数求导）" questions={logDerivPractice} explanations={logCalcExplanations} hideBlankLine columns={2}
                renderItem={(q, idx) => (
                  <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                    <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                    {q.questionLatex && <Math tex={q.questionLatex} />}
                  </p>
                )}
              />
            </div>
            <div className="text-base hidden print:block">
              <PrintQuestions questions={logDerivPractice} columns={2} />
            </div>

          </div>
        </Collapsible>

        <Collapsible title="八、对数的实际应用" defaultOpen storageKey="log-calc-page:app">
          <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">基础应用（pH 值 + 半衰期）</div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">例 1. pH 计算</div>
                  <div className="px-3 py-1">
                    <p>已知 <Math tex="pH = -\lg[\text{H}^+]" />，某果汁 <Math tex="[\text{H}^+] = 5 \times 10^{-4}" /> mol/L</p>
                    <p>求 pH（已知 <Math tex="\lg 5 \approx 0.7" />）</p>
                    <hr className="my-1 border-gray-200" />
                    <p><strong>第一步</strong>：代入公式 <Math tex="pH = -\lg(5 \times 10^{-4})" /></p>
                    <hr className="my-1 border-gray-200" />
                    <p><strong>第二步</strong>：乘法变加法</p>
                    <p className="pl-4"><Math tex="= -(\lg 5 + \lg 10^{-4}) = -(0.7 - 4) = 3.3" /></p>
                  </div>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">例 2. 碳-14 半衰期</div>
                  <div className="px-3 py-1">
                    <p>碳-14 半衰期 5730 年，某样本含量为初始值的 <Math tex="\dfrac{1}{8}" />，求年龄</p>
                    <hr className="my-1 border-gray-200" />
                    <p><strong>第一步</strong>：列方程并统一底数 <Math tex="\left(\dfrac{1}{2}\right)^{\!\tfrac{t}{5730}} = \dfrac{1}{8} = \left(\dfrac{1}{2}\right)^3" /></p>
                    <hr className="my-1 border-gray-200" />
                    <p><strong>第二步</strong>：指数相等 <Math tex="\dfrac{t}{5730} = 3" />，得 <Math tex="t = 17190" /> 年</p>
                  </div>
                </div>
              </div>
              
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">例 3. 噪声分贝（2023 新课标 I 改编）</div>
                  <div className="px-3 py-1">
                    <p>声音强度级 <Math tex="L = 10\lg\dfrac{I}{I_0}" />，<Math tex="I_0 = 10^{-12}" /> W/m²</p>
                    <p>(1) 交谈声 <Math tex="I = 10^{-6}" /> W/m²，求分贝</p>
                    <p>(2) 噪声从 80 分贝降到 60 分贝，强度变为原来的几分之几？</p>
                    <hr className="my-1 border-gray-200" />
                    <p><strong>(1)</strong> <Math tex="L = 10\lg\dfrac{10^{-6}}{10^{-12}} = 10\lg 10^6 = 60" /> 分贝</p>
                    <hr className="my-1 border-gray-200" />
                    <p><strong>(2)</strong> 分贝差等于强度比的对数</p>
                    <p className="pl-4"><Math tex="80 - 60 = 10\lg\dfrac{I_1}{I_2}" /></p>
                    <hr className="my-1 border-gray-200" />
                    <p className="pl-4"><Math tex="\lg\dfrac{I_1}{I_2} = 2" />，所以 <Math tex="\dfrac{I_1}{I_2} = 100" />，强度变为原来的 <Math tex="\dfrac{1}{100}" /></p>
                  </div>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div>
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">例 4. 茶水冷却（2024 北京改编）</div>
                  <div className="px-3 py-1">
                    <p>热水温度 <Math tex="T(t) = 20 + 80 \cdot e^{-0.05t}" />（°C，<Math tex="t" /> 为分钟）</p>
                    <p>(1) 求初始水温</p>
                    <p>(2) 降到 40°C 需要多久？（用 <Math tex="\ln" /> 表示）</p>
                    <hr className="my-1 border-gray-200" />
                    <p><strong>(1)</strong> <Math tex="T(0) = 20 + 80 \cdot e^0 = 100" />°C</p>
                    <hr className="my-1 border-gray-200" />
                    <p><strong>(2)</strong> 列方程</p>
                    <p className="pl-4"><Math tex="20 + 80e^{-0.05t} = 40" />，移项得 <Math tex="80e^{-0.05t} = 20" /></p>
                    <p className="pl-4">两边除以 80，得 <Math tex="e^{-0.05t} = \dfrac{1}{4}" /></p>
                    <p className="pl-4">两边取 <Math tex="\ln" />：<Math tex="-0.05t = -\ln 4" /></p>
                    <p className="pl-4">两边除以 <Math tex="-0.05" />：<Math tex="t = \dfrac{\ln 4}{0.05} = 20\ln 4 \approx 27.7" /> 分钟</p>
                  </div>
                </div>
              </div>
              <div className="px-3 py-1 border-t border-gray-300 bg-amber-50">
                <p><strong>通法</strong>：代入已知列方程，用对数法则拆解，再取对数或指对互化求未知量</p>
              </div>
            </div>

          </div>
        </Collapsible>

        </div>
      </LessonLayout>
      {isPrinting && printOptions.showAnswers && <LogCalcAnswers />}
    </div>
  );
}
