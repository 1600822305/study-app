import { Math, Collapsible, PageHeader, LessonLayout, ExportButton, PracticeCard, PrintQuestions, UnifiedDebugToggle, PageBreak } from '@/components/shared';
import { derivApplication2ProgressItems } from './data/3.6.1/3.6.1-deriv-application-2-progress';
import { derivAlwaysHoldWarmup, derivAlwaysHoldMethodPractice, derivMono2VariantA, derivMono2VariantB, derivMono2VariantC, derivMono2VariantD, derivMono2VariantE, derivExistWarmup, derivMono3VariantA, derivMono3VariantB, derivMono3VariantC, derivMono3VariantD, derivMono3VariantE, derivMonoDiscussPractice, derivAnchor0Practice, derivAnchor1Practice, derivAnchor2Practice, derivAnchor3Practice } from './data/3.6.1/3.6.1-deriv-application-2-practice';
import { useProgress } from '@/hooks';
import { derivativeApplication2Explanations } from './3.6.1-deriv-application-2-answers';

export function DerivativeApplication2Page() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('deriv-application-2', derivApplication2ProgressItems);

  return (
    <div>
      <div className="[&_h1]:!mb-0 [&_.flex.flex-wrap]:!mt-1">
        <PageHeader
          stage="第三阶段 · 函数思维"
          title="3.6.1 含参单调性专题"
          tags={[]}
        />
      </div>

      <LessonLayout
        progressItems={progressItems}
        onToggle={toggleProgress}
        sidebarTop={<ExportButton title="3.6.1 含参单调性专题" />}
      >
        <div className="[&_.rounded-xl]:mb-0 [&_.rounded-xl>.flex.items-center]:py-0.5 [&_.rounded-xl>div:last-child]:px-0 [&_.rounded-xl>div:last-child]:pt-0 [&_.rounded-xl>div:last-child]:pb-0 [&_.rounded-xl_button>span]:font-bold [&_.rounded-xl_button>span]:text-gray-900">

          {/* ══════════════════════════════════════════════════════ */}
          {/* Section 0: 恒成立专题（脱离导数，从头讲） */}
          {/* ══════════════════════════════════════════════════════ */}
          <section id="da2-always-hold" className="mb-0 scroll-mt-4">
            <Collapsible title="零、恒成立专题（脱离导数，从头讲）" defaultOpen storageKey="deriv-application-2:always-hold">
              <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

                {/* ═══════════════════════════════════════════════════════ */}
                {/* 0.1 什么是恒成立？——理解量词 ∀（任意）                     */}
                {/* ═══════════════════════════════════════════════════════ */}
                <div className="px-2 py-1 font-bold text-gray-900 bg-blue-50 border-l-4 border-blue-500">0.1　什么是恒成立？——理解量词 <Math tex="\forall" />（任意）</div>

                {/* 第一块：生活语言入手 */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🌱 从生活说起："不管……都……"</div>
                  <div className="px-2 py-1 space-y-1">
                    <div className="flex">
                      <span className="whitespace-nowrap">日常生活里我们常说"不管……都……"，比如：</span>
                      <div className="pl-2">
                        <p>• "这道菜<strong>不管谁</strong>吃<strong>都</strong>说好吃"——对<strong>所有人</strong>都成立。</p>
                        <p>• "<strong>不管</strong>下不下雨，我<strong>都</strong>去"——对<strong>所有天气</strong>都成立。</p>
                      </div>
                    </div>
                    <p>这种"对所有……都……"的表达，就是<strong>"恒成立"</strong>的生活原型。"恒"就是"始终、永远"的意思。</p>
                  </div>
                </div>

                {/* 第二块：数学翻译 */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📝 数学翻译：把"不管……都……"写成式子</div>
                  <div className="px-2 py-1 space-y-1">
                    <p>把生活语言搬到数学里，"对所有 <Math tex="x" /> 都成立"就写成：</p>
                    <p className="pl-4 text-center"><strong>对任意 <Math tex="x\in D" />，<Math tex="f(x)\ge 0" /> 都成立</strong></p>
                    <p>数学家给"任意"专门造了个符号：<Math tex="\forall" />（读作"任意"或"对所有"）。所以上面这句话也可以写成：</p>
                    <p className="pl-4 text-center"><Math tex="\forall x\in D,\ f(x)\ge 0" /></p>
                  </div>
                </div>

                {/* 第三块：和"存在"对照（一字之差） */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">⚔️ 一字之差：恒成立（任意） vs 有解（存在）</div>
                  <div className="px-2 py-1 space-y-1">
                    <p>除了"任意"，还有一个长得很像的兄弟概念叫<strong>"存在"</strong>。这两个量词只差一个字，但题型完全不同。</p>
                    <table className="w-full border-collapse text-center [&_tr>*:first-child]:border-l-0 [&_tr>*:last-child]:border-r-0">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="border border-gray-300 px-2 py-0.5 w-[16%]">类型</th>
                          <th className="border border-gray-300 px-2 py-0.5 w-[20%]">量词</th>
                          <th className="border border-gray-300 px-2 py-0.5 w-[28%]">日常说法</th>
                          <th className="border border-gray-300 px-2 py-0.5">考试类比</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-blue-50">
                          <td className="border border-gray-300 px-2 py-0.5 font-bold">恒成立</td>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="\forall" /> 任意</td>
                          <td className="border border-gray-300 px-2 py-0.5">"<strong>所有</strong> <Math tex="x" /> 都成立"</td>
                          <td className="border border-gray-300 px-2 py-0.5 text-left">"<strong>全班</strong>都及格"——全部人</td>
                        </tr>
                        <tr className="bg-emerald-50">
                          <td className="border border-gray-300 px-2 py-0.5 font-bold">有解（存在）</td>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="\exists" /> 存在</td>
                          <td className="border border-gray-300 px-2 py-0.5">"<strong>至少一个</strong> <Math tex="x" /> 成立"</td>
                          <td className="border border-gray-300 px-2 py-0.5 text-left">"<strong>班里有人</strong>及格"——至少一个人</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="flex">
                      <span className="font-bold whitespace-nowrap">📌 标志词对比：</span>
                      <div>
                        <p>• 恒成立：<strong>任意 / 所有 / 一切 / 总 / 恒</strong></p>
                        <p>• 有解：<strong>存在 / 有 / 至少有一个 / 能找到</strong></p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ═══════════════════════════════════════════════════════ */}
                {/* 0.2 核心定理：恒成立 = 最值问题                            */}
                {/* ═══════════════════════════════════════════════════════ */}
                <div className="px-2 py-1 font-bold text-gray-900 bg-blue-50 border-l-4 border-blue-500">0.2　核心定理：恒成立 = 最值问题（本节灵魂）</div>

                {/* 第一块：从"全班都及格"想到的灵感 */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🌟 灵感：判断"全部"，只需看"最差"</div>
                  <div className="px-2 py-1 space-y-1 text-[0.85rem]">
                    <div className="grid grid-cols-[45fr_auto_55fr]">
                      <div className="space-y-1 pr-3">
                        <p>接着上一节的"全班"打比方——</p>
                        <p className="pl-4">问：怎么判断<strong>全班都及格</strong>？一个个对答案太麻烦……</p>
                        <p className="pl-4">答：只要<strong>最差</strong>的那个及格，全班自然都及格。</p>
                      </div>
                      <div className="w-px bg-gray-300"></div>
                      <div className="space-y-1 pl-3">
                        <p>把这个"投机取巧"的主意搬到数学里：</p>
                        <p className="pl-4">要判断 <Math tex="f" /> 的<strong>所有函数值</strong>都 <Math tex="\ge 0" />，</p>
                        <p className="pl-4">只要<strong>最小的那个函数值</strong> <Math tex="\ge 0" /> 就行，其他都比它大，自然也 <Math tex="\ge 0" />。</p>
                      </div>
                    </div>
                    <p><strong>📌 关键认知</strong>：<strong>不用逐个验证</strong>。只要<strong>最小值</strong> <Math tex="\ge 0" />，其他函数值自然跟着 <Math tex="\ge 0" />。</p>
                  </div>
                </div>

                {/* 第二块：核心定理（两条等价转化） */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📜 核心定理：两条等价转化（必须背下来）</div>
                  <table className="w-full border-collapse text-center [&_tr>*:first-child]:border-l-0 [&_tr>*:last-child]:border-r-0">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-2 py-0.5 w-[36%]">恒成立条件</th>
                        <th className="border border-gray-300 px-2 py-0.5 w-[24%]">等价于</th>
                        <th className="border border-gray-300 px-2 py-0.5">怎么记</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-blue-50">
                        <td className="border border-gray-300 px-2 py-0.5"><Math tex="\forall x\in D,\ f(x)\ge 0" /></td>
                        <td className="border border-gray-300 px-2 py-0.5"><Math tex="f(x)_{\min}\ge 0" /></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">只需<strong>最小值</strong> <Math tex="\ge 0" />，其他自然跟着 <Math tex="\ge 0" /></td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="border border-gray-300 px-2 py-0.5"><Math tex="\forall x\in D,\ f(x)\le 0" /></td>
                        <td className="border border-gray-300 px-2 py-0.5"><Math tex="f(x)_{\max}\le 0" /></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">只需<strong>最大值</strong> <Math tex="\le 0" />，其他自然跟着 <Math tex="\le 0" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* 第三块：图像直觉 */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📈 图像直觉：所有函数值都在 0 的同一侧</div>
                  <div className="px-2 py-1 space-y-1">
                    <p>把"恒成立"画成图像更直观——函数值就是曲线点的<strong>高度</strong>，所有函数值 <Math tex="\ge 0" /> 就是<strong>曲线整条都不低于 <Math tex="y=0" /> 这条线</strong>。</p>
                    <div className="grid grid-cols-2 gap-2">
                      {/* 左：f(x) ≥ 0，画一条临界曲线（最低点 = 0） */}
                      <div className="flex flex-col items-center">
                        <svg viewBox="0 0 80 60" className="w-36 h-[5.4rem]">
                          <line x1="3" y1="45" x2="77" y2="45" stroke="#999" strokeWidth="0.5" />
                          <text x="74" y="52" fontSize="5" fill="#666">x</text>
                          <line x1="40" y1="3" x2="40" y2="58" stroke="#999" strokeWidth="0.5" />
                          <path d="M 12,18 Q 40,72 68,18" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
                          <circle cx="40" cy="45" r="1.3" fill="#ef4444" />
                        </svg>
                        <p className="text-center"><strong>所有函数值 <Math tex="\ge 0" /></strong></p>
                        <p className="text-center text-gray-700">即 <Math tex="f_{\min}\ge 0" />（含 0）</p>
                      </div>
                      {/* 右：f(x) ≤ 0，画一条临界曲线（最高点 = 0） */}
                      <div className="flex flex-col items-center">
                        <svg viewBox="0 0 80 60" className="w-36 h-[5.4rem]">
                          <line x1="3" y1="15" x2="77" y2="15" stroke="#999" strokeWidth="0.5" />
                          <text x="74" y="12" fontSize="5" fill="#666">x</text>
                          <line x1="40" y1="3" x2="40" y2="58" stroke="#999" strokeWidth="0.5" />
                          <path d="M 12,42 Q 40,-12 68,42" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
                          <circle cx="40" cy="15" r="1.3" fill="#ef4444" />
                        </svg>
                        <p className="text-center"><strong>所有函数值 <Math tex="\le 0" /></strong></p>
                        <p className="text-center text-gray-700">即 <Math tex="f_{\max}\le 0" />（含 0）</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ═══════════════════════════════════════════════════════ */}
                {/* 0.3 用最值法判断不含参恒成立（练手）                       */}
                {/* ═══════════════════════════════════════════════════════ */}
                <div className="px-2 py-1 font-bold text-gray-900 bg-blue-50 border-l-4 border-blue-500">0.3　用最值法判断不含参恒成立（练手）</div>

                {/* 第一块：标准三步流程 */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🛠️ 标准三步流程</div>
                  <div className="px-2 py-1 space-y-1">
                    <p>判断一道<strong>不含参</strong>的恒成立题，就是在做这三步：</p>
                    <p className="pl-2"><strong>① 求最值</strong>：看不等式方向。形如 <Math tex="f(x)\ge \cdots" /> 求 <Math tex="f" /> 的<strong>最小值</strong>；形如 <Math tex="f(x)\le \cdots" /> 求 <Math tex="f" /> 的<strong>最大值</strong>。</p>
                    <p className="pl-2"><strong>② 验证最值</strong>：把最值代入<strong>原不等式</strong>，看是否成立。</p>
                    <div className="pl-2 flex">
                      <span className="font-bold whitespace-nowrap">③ 下结论：</span>
                      <div>
                        <p>• 最值代入后成立 <Math tex="\Rightarrow" /> <strong>恒成立</strong>（其他函数值更安全，自然成立）。</p>
                        <p>• 最值代入后不成立 <Math tex="\Rightarrow" /> <strong>不恒成立</strong>（最值这一处都不满足，恒成立无从谈起）。</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 练手：两道练习题（PracticeCard + PrintQuestions 成对） */}
                <div className="text-base print:hidden">
                  <PracticeCard title="✍️ 练手：用三步流程判断" questions={derivAlwaysHoldWarmup} explanations={derivativeApplication2Explanations} hideBlankLine optionCols={2} printOptionCols={2} columns={2}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivAlwaysHoldWarmup} printOptionCols={2} columns={2} />
                </div>

                {/* 第二块：例题（正反对照） */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 例题：正反对照（一道恒成立，一道不恒成立）</div>
                  <div>
                    {/* 例 1：恒成立 */}
                    <div className="px-2 py-1 space-y-1">
                      <p className="font-bold"><strong>例 1</strong>：判断 <Math tex="x^2+1\ge 0" /> 在 <Math tex="\mathbb{R}" /> 上是否恒成立。</p>
                      <hr className="border-gray-300" />
                      <p className="pl-2"><strong>① 求最值</strong>：记 <Math tex="f(x)=x^2+1" />。开口向上，对称轴 <Math tex="x=0" />，最小值 <Math tex="f(0)=1" />。</p>
                      <p className="pl-2"><strong>② 验证</strong>：把 <Math tex="f_{\min}=1" /> 代入原不等式得 <Math tex="1\ge 0" />，<strong>成立</strong>。</p>
                      <p className="pl-2"><strong>③ 结论</strong>：<strong>恒成立</strong>。最小值都 <Math tex="\ge 0" />，其他函数值都比 1 大，自然 <Math tex="\ge 0" />。</p>
                    </div>
                    <div className="border-t border-gray-400"></div>
                    {/* 例 2：不恒成立 */}
                    <div className="px-2 py-1 space-y-1">
                      <p className="font-bold"><strong>例 2</strong>：判断 <Math tex="x^2-4\ge 0" /> 在 <Math tex="\mathbb{R}" /> 上是否恒成立。</p>
                      <hr className="border-gray-300" />
                      <p className="pl-2"><strong>① 求最值</strong>：记 <Math tex="f(x)=x^2-4" />。开口向上，对称轴 <Math tex="x=0" />，最小值 <Math tex="f(0)=-4" />。</p>
                      <p className="pl-2"><strong>② 验证</strong>：把 <Math tex="f_{\min}=-4" /> 代入原不等式得 <Math tex="-4\ge 0" />，<strong>不成立</strong>。</p>
                      <p className="pl-2"><strong>③ 结论</strong>：<strong>不恒成立</strong>。<Math tex="f(x)" /> 的最小值小于 0，说明在 <Math tex="\mathbb{R}" /> 上并不恒成立。</p>
                    </div>
                  </div>
                </div>

                {/* ═══════════════════════════════════════════════════════ */}
                {/* 0.4 晋升：含参恒成立题（求参数范围）                       */}
                {/* ═══════════════════════════════════════════════════════ */}
                <div className="px-2 py-1 font-bold text-gray-900 bg-blue-50 border-l-4 border-blue-500">0.4　晋升：含参恒成立题（求参数范围）</div>

                {/* 综合对比：含参 vs 不含参（一表搞定） */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">⬆️ 题型升级：含参后，<Math tex="a" /> 是要求的，<Math tex="x" /> 仍是任意遍历的</div>
                  <div className="px-2 py-1 space-y-1 text-[0.85rem]">
                    <table className="w-full border-collapse text-center [&_tr>*:first-child]:border-l-0 [&_tr>*:last-child]:border-r-0">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="border border-gray-300 px-2 py-0.5 w-[12%]">类型</th>
                          <th className="border border-gray-300 px-2 py-0.5 w-[26%]">题目</th>
                          <th className="border border-gray-300 px-2 py-0.5 w-[20%]"><Math tex="f" /> 的最值</th>
                          <th className="border border-gray-300 px-2 py-0.5">怎么解</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-2 py-0.5 font-bold">不含参<br /><span className="font-normal text-gray-600">（0.3）</span></td>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="x^2+1\ge 0" /> 是否恒成立？</td>
                          <td className="border border-gray-300 px-2 py-0.5"><strong>具体数</strong>：<Math tex="f_{\min}=1" /></td>
                          <td className="border border-gray-300 px-2 py-0.5 text-left">直接比：<Math tex="1\ge 0" /> 成立，得 <strong>恒成立</strong></td>
                        </tr>
                        <tr className="bg-amber-50">
                          <td className="border border-gray-300 px-2 py-0.5 font-bold">含参<br /><span className="font-normal text-gray-600">（0.4 起）</span></td>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="x^2-2ax+1\ge 0" /> 求 <Math tex="a" /> 范围</td>
                          <td className="border border-gray-300 px-2 py-0.5"><strong>含 <Math tex="a" /> 的式子</strong></td>
                          <td className="border border-gray-300 px-2 py-0.5 text-left">列不等式 <strong>[含 <Math tex="a" /> 的最值] <Math tex="\ge 0" /></strong>，解出 <strong><Math tex="a" /> 的范围</strong></td>
                        </tr>
                      </tbody>
                    </table>
                    <p><strong>📌 升级核心</strong>：最值从<strong>具体数</strong>变成<strong>含 <Math tex="a" /> 的式子</strong>。"代入比较"一步搞定，升级为"<strong>列不等式 + 解出 <Math tex="a" /> 范围</strong>"两步。</p>
                  </div>
                </div>

                {/* ═══════════════════════════════════════════════════════ */}
                {/* 0.5 含参恒成立 · 解法一：直接最值法                        */}
                {/* ═══════════════════════════════════════════════════════ */}
                <div className="px-2 py-1 font-bold text-gray-900 bg-blue-50 border-l-4 border-blue-500">0.5　含参恒成立 · 解法一：直接最值法</div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 text-gray-800">🧭 什么是"直接最值法"：能<strong>直接配方</strong>或<strong>直接求导</strong>算出含 <Math tex="a" /> 的最值，就叫<strong>直接最值法</strong>。</div>
                </div>

                {/* 第二块：三步流程 */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🔧 三步流程</div>
                  <div className="px-2 py-1 space-y-1">
                    <p><strong>① 求最值</strong>：看不等式方向。形如 <Math tex="f(x)\ge \square" /> 求 <Math tex="f" /> 的<strong>最小值</strong>；形如 <Math tex="f(x)\le \square" /> 求 <Math tex="f" /> 的<strong>最大值</strong>。结果是<strong>含 <Math tex="a" /> 的式子</strong>。</p>
                    <p><strong>② 列不等式</strong>：把含 <Math tex="a" /> 的最值代入恒成立条件，得到一个<strong>关于 <Math tex="a" /> 的不等式</strong>。</p>
                    <p><strong>③ 解出 <Math tex="a" /> 的范围</strong>：解这个关于 <Math tex="a" /> 的不等式，得到的范围就是答案。</p>
                  </div>
                </div>

                {/* 第三块：例题（闭环 0.4） */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 例题：<Math tex="x^2-2ax+1\ge 0" /> 在 <Math tex="\mathbb{R}" /> 上恒成立，求 <Math tex="a" /> 的范围</div>
                  <div className="px-2 py-1 space-y-1">
                    <div className="pl-2 space-y-0.5">
                      <p><strong>① 求最值</strong>：记 <Math tex="f(x)=x^2-2ax+1" />。配方：<Math tex="x^2-2ax+1=x^2-2ax+\underline{a^2-a^2}+1=(x-a)^2+1-a^2" />。</p>
                      <hr className="border-gray-200" />
                      <p className="pl-4">注意 <Math tex="1-a^2" /> 相对于 <Math tex="x" /> 是常数（<Math tex="a" /> 是参数，不随 <Math tex="x" /> 变），只有 <Math tex="(x-a)^2" /> 随 <Math tex="x" /> 变。</p>
                      <hr className="border-gray-200" />
                      <p className="pl-4"><Math tex="(x-a)^2\ge 0" />，当且仅当 <Math tex="x=a" /> 时取到最小值 <Math tex="0" />，此时 <Math tex="f(a)=0+1-a^2=1-a^2" />，所以 <Math tex="f_{\min}=1-a^2" />。</p>
                    </div>
                    <hr className="border-gray-400" />
                    <p className="pl-2"><strong>② 列不等式</strong>：恒 <Math tex="\ge 0" /> 要求最小值 <Math tex="\ge 0" />，得 <Math tex="1-a^2\ge 0" />。</p>
                    <p className="pl-2"><strong>③ 解出 <Math tex="a" /> 的范围</strong>：移项得 <Math tex="a^2\le 1" />，所以 <Math tex="-1\le a\le 1" />，即 <Math tex="a\in[-1,1]" />。</p>
                  </div>
                </div>

                {/* ═══════════════════════════════════════════════════════ */}
                {/* 0.6 含参恒成立 · 解法二：分参法                            */}
                {/* ═══════════════════════════════════════════════════════ */}
                <div className="px-2 py-1 font-bold text-gray-900 bg-blue-50 border-l-4 border-blue-500">0.6　含参恒成立 · 解法二：分参法</div>

                {/* 第一块：什么是"分参法" */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 text-gray-800">🧭 什么是"分参法"：把参数 <Math tex="a" /> <strong>分离到不等式一边</strong>，另一边只剩含 <Math tex="x" /> 的函数，恒成立问题就变成求那个函数的最值。</div>
                </div>

                {/* 第二块：三步流程 */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🔧 三步流程</div>
                  <div className="px-2 py-1 space-y-1">
                    <p><strong>① 分离参数</strong>：移项、除法，把 <Math tex="a" /> 单独放一边，另一边只含 <Math tex="x" />。注意除以含 <Math tex="x" /> 的式子时要<strong>判断正负</strong>（决定不等号方向）。</p>
                    <p><strong>② 转化为最值</strong>：<Math tex="a\le g(x)" /> 恒成立，即 <Math tex="a\le \min g(x)" />；<Math tex="a\ge g(x)" /> 恒成立，即 <Math tex="a\ge \max g(x)" />。</p>
                    <p><strong>③ 求 <Math tex="g(x)" /> 的最值</strong>，解出 <Math tex="a" /> 的范围。</p>
                  </div>
                </div>

                {/* 第三块：例题 */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 例题：对 <Math tex="x\in[1,3]" />，不等式 <Math tex="ax\le x^2+1" /> 恒成立，求 <Math tex="a" /> 的范围</div>
                  <div className="px-2 py-1 space-y-1">
                    <div className="pl-2 space-y-0.5">
                      <p><strong>① 分离参数</strong>：<Math tex="x\in[1,3]" />，所以 <Math tex="x>0" />，两边除以 <Math tex="x" />（正数，不等号方向不变），得 <Math tex="a\le \dfrac{x^2+1}{x}" />。</p>
                      <hr className="border-gray-200" />
                      <p><strong>② 转化为最值</strong>：<Math tex="a\le g(x)" /> 对所有 <Math tex="x\in[1,3]" /> 恒成立，即 <Math tex="a\le \min g(x)" />。</p>
                      <hr className="border-gray-200" />
                      <p><strong>③ 求最值</strong>：记 <Math tex="g(x)=\dfrac{x^2+1}{x}=x+\dfrac{1}{x}" />，求导得 <Math tex="g'(x)=1-\dfrac{1}{x^2}=\dfrac{x^2-1}{x^2}" />。</p>
                    </div>
                    <hr className="border-gray-200" />
                    <div className="pl-6 space-y-0.5">
                      <p><Math tex="x\in[1,3]" />，所以 <Math tex="1\le x^2\le 9" />，移项得 <Math tex="x^2-1\ge 0" />（分子），又 <Math tex="x^2>0" />（分母），所以 <Math tex="g'(x)\ge 0" />，<Math tex="g(x)" /> 递增。</p>
                      <hr className="border-gray-200" />
                      <p>代入端点：<Math tex="g(1)=1+1=2" />，<Math tex="g(3)=3+\dfrac{1}{3}=\dfrac{10}{3}" />。因为递增，左端点最小，所以 <Math tex="\min g(x)=g(1)=2" />。</p>
                    </div>
                    <hr className="border-gray-400" />
                    <p className="pl-2"><strong>结论</strong>：当 <Math tex="a\le 2" /> 时，不等式 <Math tex="ax\le x^2+1" /> 在 <Math tex="x\in[1,3]" /> 上恒成立。即 <Math tex="a\in(-\infty,2]" />。</p>
                  </div>
                </div>

                {/* ═══════════════════════════════════════════════════════ */}
                {/* 0.7 含参恒成立 · 解法三：Δ 法                            */}
                {/* ═══════════════════════════════════════════════════════ */}
                <div className="px-2 py-1 font-bold text-gray-900 bg-blue-50 border-l-4 border-blue-500">0.7　含参恒成立 · 解法三：Δ 法（判别式法）</div>

                {/* 第一块：什么是 Δ 法 */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 text-gray-800">🧭 什么是"Δ 法"：不等式能整理成<strong>关于 <Math tex="x" /> 的二次式 <Math tex="\ge 0" /> 或 <Math tex="\le 0" /></strong> 的形式时，直接用判别式 <Math tex="\Delta" /> 处理。</div>
                </div>

                {/* 第二块：原理 */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📐 原理</div>
                  <div className="px-2 py-1 space-y-1">
                    <p>二次函数 <Math tex="f(x)=Ax^2+Bx+C" />（<Math tex="A>0" />）的图像是<strong>开口朝上</strong>的抛物线。</p>
                    <hr className="border-gray-200" />
                    <p><Math tex="f(x)\ge 0" /> 在 <Math tex="\mathbb{R}" /> 上恒成立，等价于抛物线<strong>不穿过 <Math tex="x" /> 轴下方</strong>，即<strong>无实根或有重根</strong>，即 <Math tex="\Delta\le 0" />。</p>
                    <hr className="border-gray-200" />
                    <p>同理，<Math tex="A<0" /> 时开口向下，<Math tex="f(x)\le 0" /> 恒成立，等价于 <Math tex="\Delta\le 0" />。</p>
                  </div>
                </div>

                {/* 第三块：适用条件 */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">⚠ 适用条件（三个缺一不可）</div>
                  <div className="px-2 py-1 space-y-1">
                    <p><strong>① 关于 <Math tex="x" /> 是二次式</strong>：不等式中含 <Math tex="x" /> 的部分必须能整理成 <Math tex="Ax^2+Bx+C" /> 的形式（<Math tex="A\ne 0" />）。</p>
                    <p><strong>② 定义域是 <Math tex="\mathbb{R}" /></strong>：<Math tex="x" /> 取遍所有实数。如果 <Math tex="x" /> 有范围限制（如 <Math tex="x\in[1,3]" />），不能直接用 Δ 法。</p>
                    <p><strong>③ 二次项系数确定</strong>：<Math tex="A" /> 的正负必须明确。<Math tex="f(x)\ge 0" /> 恒成立需要 <Math tex="A>0" /> 且 <Math tex="\Delta\le 0" />；<Math tex="f(x)\le 0" /> 恒成立需要 <Math tex="A<0" /> 且 <Math tex="\Delta\le 0" />。</p>
                  </div>
                </div>

                {/* 第四块：例题 */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 例题：<Math tex="x^2-2ax+1\ge 0" /> 在 <Math tex="\mathbb{R}" /> 上恒成立，求 <Math tex="a" /> 的范围</div>
                  <div className="px-2 py-1 space-y-1">
                    <div className="pl-2 space-y-0.5">
                      <p><strong>① 检查适用条件</strong>：关于 <Math tex="x" /> 是二次式，定义域 <Math tex="\mathbb{R}" />，二次项系数 <Math tex="1>0" />，三个条件全满足。</p>
                      <hr className="border-gray-200" />
                      <p><strong>② 列 Δ</strong>：<Math tex="A=1" />，<Math tex="B=-2a" />，<Math tex="C=1" />，所以 <Math tex="\Delta=(-2a)^2-4\cdot 1\cdot 1=4a^2-4" />。</p>
                      <hr className="border-gray-200" />
                      <p><strong>③ 令 <Math tex="\Delta\le 0" /></strong>：<Math tex="4a^2-4\le 0" />，即 <Math tex="a^2\le 1" />，解得 <Math tex="-1\le a\le 1" />。</p>
                    </div>
                    <hr className="border-gray-400" />
                    <p className="pl-2"><strong>结论</strong>：当 <Math tex="a\in[-1,1]" /> 时，<Math tex="x^2-2ax+1\ge 0" /> 在 <Math tex="\mathbb{R}" /> 上恒成立。</p>
                  </div>
                </div>

                {/* 第五块：与 0.5 对比 */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px bg-amber-50">
                  <div className="px-2 py-1">
                    <p><strong>💡 对比</strong>：同 0.5 例题，配方法 vs Δ 法，答案一致。Δ 法更快，但<strong>仅限二次式 + 全体实数</strong>。</p>
                  </div>
                </div>

                {/* ═══════════════════════════════════════════════════════ */}
                {/* 0.8 三种方法对比总结                                      */}
                {/* ═══════════════════════════════════════════════════════ */}
                <div className="px-2 py-1 font-bold text-gray-900 bg-blue-50 border-l-4 border-blue-500">0.8　三种方法对比：怎么选？</div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <table className="w-full border-collapse text-center text-[0.8rem] text-gray-900 [&_tr>*:first-child]:border-l-0 [&_tr>*:last-child]:border-r-0">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-2 py-0.5 w-[14%]">方法</th>
                        <th className="border border-gray-300 px-2 py-0.5 w-[28%]">适用条件</th>
                        <th className="border border-gray-300 px-2 py-0.5 w-[30%]">核心操作</th>
                        <th className="border border-gray-300 px-2 py-0.5">局限</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 font-bold">直接最值法</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">能直接配方或求导算出含 <Math tex="a" /> 的最值</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">求最值 → 列不等式 → 解 <Math tex="a" /> 范围</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">最值必须算得出来（含 <Math tex="a" /> 的式子）</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 font-bold">分参法</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><Math tex="a" /> 能分离到一边，且除式正负可判</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">分离 <Math tex="a" /> → 转化为 <Math tex="g(x)" /> 最值 → 求导判单调</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">除式含 <Math tex="x" /> 时要判正负；<br />分离后 <Math tex="g(x)" /> 可能复杂</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 font-bold">Δ 法</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">关于 <Math tex="x" /> 是二次式，定义域 <Math tex="\mathbb{R}" />，<br />二次项系数 <Math tex="A" /> 的正负明确</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">确定开口方向 → 令 <Math tex="\Delta\le 0" /> → 解 <Math tex="a" /> 范围</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><strong>只能用于二次式 + 全体实数</strong>，<br />有区间限制就不行</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* ═══════════════════════════════════════════════════════ */}
                {/* 0.9 补充：对称轴法                                       */}
                {/* ═══════════════════════════════════════════════════════ */}
                <div className="px-2 py-1 font-bold text-gray-900 bg-blue-50 border-l-4 border-blue-500">0.9　补充：对称轴法（二次函数最值的快捷公式）</div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📐 原理</div>
                  <div className="px-2 py-1 space-y-1">
                    <p>二次函数 <Math tex="f(x)=Ax^2+Bx+C" /> 的对称轴为 <Math tex="x=-\frac{B}{2A}" />。</p>
                    <hr className="border-gray-200" />
                    <p><Math tex="A>0" /> 开口朝上：对称轴处取<strong>最小值</strong> <Math tex="f_{\min}=f\!\left(-\frac{B}{2A}\right)=C-\frac{B^2}{4A}" />。</p>
                    <p><Math tex="A<0" /> 开口朝下：对称轴处取<strong>最大值</strong> <Math tex="f_{\max}=f\!\left(-\frac{B}{2A}\right)=C-\frac{B^2}{4A}" />。</p>
                    <hr className="border-gray-200" />
                    <p><strong>与 Δ 法的关系</strong>：<Math tex="f_{\min}=C-\frac{B^2}{4A}=\frac{4AC-B^2}{4A}=-\frac{\Delta}{4A}" />。所以 <Math tex="A>0" /> 时 <Math tex="f_{\min}\ge 0" /> 等价于 <Math tex="\Delta\le 0" />，<strong>两种方法殊途同归</strong>。</p>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 例题：<Math tex="x^2+2ax+4\ge 0" /> 在 <Math tex="\mathbb{R}" /> 上恒成立，求 <Math tex="a" /> 的范围</div>
                  <div className="px-2 py-1 space-y-1">
                    <div className="pl-2 space-y-0.5">
                      <p><strong>① 确定开口</strong>：<Math tex="A=1>0" />，开口朝上，对称轴处取最小值。</p>
                      <hr className="border-gray-200" />
                      <p><strong>② 求对称轴和最小值</strong>：对称轴 <Math tex="x=-\frac{2a}{2\cdot 1}=-a" />，代入得 <Math tex="f(-a)=(-a)^2+2a(-a)+4=a^2-2a^2+4=4-a^2" />。</p>
                      <hr className="border-gray-200" />
                      <p><strong>③ 令最小值 <Math tex="\ge 0" /></strong>，得 <Math tex="4-a^2\ge 0" />，即 <Math tex="a^2\le 4" />，解得 <Math tex="-2\le a\le 2" />。</p>
                    </div>
                    <hr className="border-gray-400" />
                    <p className="pl-2"><strong>结论</strong>：当 <Math tex="a\in[-2,2]" /> 时，<Math tex="x^2+2ax+4\ge 0" /> 在 <Math tex="\mathbb{R}" /> 上恒成立。</p>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px bg-amber-50">
                  <div className="px-2 py-1">
                    <p><strong>💡 适用场景</strong>：同 Δ 法，<strong>仅限二次函数 + 全体实数</strong>。有区间限制需分情况讨论（后面学）。</p>
                  </div>
                </div>

                <div className="text-base print:hidden">
                  <PracticeCard title="💪 三种方法综合练习" questions={derivAlwaysHoldMethodPractice} explanations={derivativeApplication2Explanations} hideBlankLine optionCols={4} printOptionCols={4}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivAlwaysHoldMethodPractice} printOptionCols={4} columns={1} />
                </div>

              </div>
            </Collapsible>
          </section>

          {/* ══════════════════════════════════════════════════════ */}
          {/* Section 1: 已知单调性求参（恒成立型） */}
          {/* ══════════════════════════════════════════════════════ */}
          <section id="da2-monotone-param-eq" className="mb-0 scroll-mt-4">
            <Collapsible title="一、已知单调性求参（恒成立型）" defaultOpen storageKey="deriv-application-2:monotone-param-eq">
              <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

                {/* 1.0 铺垫 + 1.1 求不含参单调区间 已迁至 3.6.0 单调性入门 */}


                {/* ═══════════════════════════════════════════════════════ */}
                {/* 1.2 已知单调性求参数范围（恒成立型）                        */}
                {/* ═══════════════════════════════════════════════════════ */}
                <div className="px-2 py-1 font-bold text-gray-900 bg-blue-50 border-l-4 border-blue-500">1.2　已知单调性求参数范围（★★★，"恒成立"型）</div>

                {/* ── 核心转化卡 ── */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="grid grid-cols-2 font-bold border-b border-gray-400 bg-gray-100">
                    <div className="px-2 py-1 text-gray-800 border-r border-gray-400">🎯 核心转化：把"单调"翻译成"恒成立"</div>
                    <div className="px-2 py-1 text-red-700">⚠️ 必须含等号：写 <Math tex="f'\ge 0" /> / <Math tex="f'\le 0" /></div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-2 py-1 space-y-1 border-r border-gray-300">
                      <p className="font-bold">单调递增 <Math tex="\Leftrightarrow" /> <Math tex="f'(x)\ge 0" /> 在区间 <Math tex="I" /> 上<strong>恒成立</strong></p>
                      <p className="font-bold">单调递减 <Math tex="\Leftrightarrow" /> <Math tex="f'(x)\le 0" /> 在区间 <Math tex="I" /> 上<strong>恒成立</strong></p>
                    </div>
                    <div className="px-2 py-1 space-y-1">
                      <p><strong>原因</strong>：单调函数允许 <Math tex="f'" /> 在<strong>孤立点处为 0</strong>。<br />例 <Math tex="f(x)=x^3" /> 在 <Math tex="\mathbb{R}" /> 上递增，但 <Math tex="f'(0)=0" />。</p>
                    </div>
                  </div>
                  <div className="px-2 py-1 border-t border-gray-300">
                    <p><strong>📌 为什么必须带等号？</strong></p>
                    <p>反向求参时，你<strong>不知道</strong> <Math tex="a" /> 取什么值会让 <Math tex="f'=0" /> 出现。用 <Math tex="f'\ge 0" /> 能覆盖所有可能，用 <Math tex="f'>0" /> 会漏掉临界 <Math tex="a" />。</p>
                  </div>
                </div>

                {/* ── 三步法 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🎯 三步法模板</div>
                  <div className="px-2 py-0.5 space-y-1">
                    <p className="pl-2"><strong>① 求导</strong>：算出 <Math tex="f'(x)" />。<span className="text-gray-700"><strong>参数 <Math tex="a" /> 当成常数</strong>处理（跟数字 <Math tex="2,5,\pi" /> 一样对待，不参与求导）。</span></p>
                    <p className="pl-2"><strong>② 转化</strong>：把"单调递增/递减"翻译成 <Math tex="f'(x)\ge 0" /> 或 <Math tex="\le 0" /> 在区间 <Math tex="I" /> 上恒成立。</p>
                    <p className="pl-2"><strong>③ 解恒成立</strong>：<strong>分参法</strong>、<strong><Math tex="\Delta" /> 法</strong>（全 <Math tex="\mathbb{R}" />）、<strong>区间最值法</strong>（有限区间），三选一。</p>
                  </div>
                </div>

                {/* ── 例 A：多项式（可分参） ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 例 A（多项式 · 分参）：<Math tex="f(x)=x^3-ax" /> 在 <Math tex="\mathbb{R}" /> 上单调递增，求 <Math tex="a" /> 的范围</div>
                  <div className="px-2 py-1 space-y-1">
                    <div className="pl-2 space-y-0.5">
                      <p><strong>① 求导</strong>，得 <Math tex="f'(x)=3x^2-a" />。</p>
                      <hr className="border-gray-200" />
                      <p><strong>② 转化</strong>：在 <Math tex="\mathbb{R}" /> 上递增，等价于 <Math tex="f'(x)=3x^2-a\ge 0" /> 对所有 <Math tex="x\in\mathbb{R}" /> 恒成立。</p>
                      <hr className="border-gray-200" />
                      <p><strong>③ 解恒成立</strong>：<Math tex="a" /> 能分离，移项得 <Math tex="a\le 3x^2" /> 恒成立，等价于 <Math tex="a\le\min(3x^2)" />。</p>
                      <hr className="border-gray-200" />
                      <p><strong>④ 求最小值</strong>：记 <Math tex="g(x)=3x^2" />，<Math tex="A=3>0" /> 开口向上，对称轴 <Math tex="x=0" />。代入得 <Math tex="g(0)=0" />，所以 <Math tex="\min g(x)=0" />，因此 <Math tex="a\le 0" /></p>
                    </div>
                    <hr className="border-gray-400" />
                    <p className="pl-2"><strong>结论</strong>：当 <Math tex="a\le 0" /> 时，<Math tex="f(x)=x^3-ax" /> 在 <Math tex="\mathbb{R}" /> 上单调递增。</p>
                  </div>
                </div>

                {/* ── 例 A 变式练习 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="✏️ 例 A 变式" questions={derivMono2VariantA} explanations={derivativeApplication2Explanations} hideBlankLine optionCols={1} printOptionCols={1}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivMono2VariantA} printOptionCols={1} columns={1} />
                </div>

                {/* ── 例 B：多项式（纠缠 → Δ 法） ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 例 B（多项式 · Δ 法）：<Math tex="f(x)=x^3+ax^2+x" /> 在 <Math tex="\mathbb{R}" /> 上单调递增，求 <Math tex="a" /> 的范围</div>
                  <div className="px-2 py-1 space-y-1">
                    <div className="pl-2 space-y-0.5">
                      <p><strong>① 求导</strong>，得 <Math tex="f'(x)=3x^2+2ax+1" />。</p>
                      <hr className="border-gray-200" />
                      <p><strong>② 转化</strong>：由题意，<Math tex="f'(x)=3x^2+2ax+1\ge 0" /> 在 <Math tex="\mathbb{R}" /> 上恒成立。</p>
                      <hr className="border-gray-200" />
                      <p><strong>③ 决策</strong>：尝试分参，移项得 <Math tex="2ax\ge -3x^2-1" />。</p>
                      <p className="pl-4 text-gray-700">问题：<Math tex="a" /> 是 <Math tex="x" /> 的系数，和 <Math tex="x" /> 纠缠在一起，分不开（两边除 <Math tex="x" /> 时正负不定）。</p>
                      <p className="pl-4"><strong>改用 Δ 法</strong>：关于 <Math tex="x" /> 是二次式 ✓，定义域 <Math tex="\mathbb{R}" /> ✓，二次项系数 <Math tex="A=3>0" /> 明确 ✓，三条件满足。</p>
                      <hr className="border-gray-200" />
                      <p><strong>④ 令 <Math tex="\Delta\le 0" /></strong>，得 <Math tex="\Delta=(2a)^2-4\cdot 3\cdot 1=4a^2-12\le 0" />，化简得 <Math tex="a^2\le 3" />，解得 <Math tex="-\sqrt{3}\le a\le \sqrt{3}" />。</p>
                    </div>
                    <hr className="border-gray-400" />
                    <p className="pl-2"><strong>结论</strong>：当 <Math tex="a\in[-\sqrt{3},\sqrt{3}]" /> 时，<Math tex="f(x)=x^3+ax^2+x" /> 在 <Math tex="\mathbb{R}" /> 上单调递增。</p>
                  </div>
                </div>

                {/* ── 例 B 变式练习 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="✏️ 例 B 变式" questions={derivMono2VariantB} explanations={derivativeApplication2Explanations} hideBlankLine optionCols={1} printOptionCols={1}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivMono2VariantB} printOptionCols={1} columns={1} />
                </div>

                {/* ── 例 C：含 ln（分参 + 区间最值） ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 例 C（含 <Math tex="\ln" /> · 分参 + 区间最值）：<Math tex="f(x)=ax+2\ln x" /> 在 <Math tex="[1,e]" /> 上单调递增，求 <Math tex="a" /> 的范围</div>
                  <div className="px-2 py-1 space-y-1">
                    <div className="pl-2 space-y-0.5">
                      <p><strong>① 求导</strong>，得 <Math tex="f'(x)=a+\dfrac{2}{x}" />。</p>
                      <hr className="border-gray-200" />
                      <p><strong>② 转化</strong>，由题意，<Math tex="f'(x)=a+\dfrac{2}{x}\ge 0" /> 在 <Math tex="[1,e]" /> 上恒成立。</p>
                      <hr className="border-gray-200" />
                      <p><strong>③ 选方法</strong>，区间是 <Math tex="[1,e]" /> 而非 <Math tex="\mathbb{R}" />，不能用 <Math tex="\Delta" /> 法；<Math tex="a" /> 已独立，移项得 <Math tex="a\ge -\dfrac{2}{x}" /> 在 <Math tex="[1,e]" /> 上恒成立，等价于 <Math tex="a\ge \max\left(-\dfrac{2}{x}\right)" />。</p>
                      <hr className="border-gray-200" />
                      <p><strong>④ 求最大值</strong>，记 <Math tex="g(x)=-\dfrac{2}{x}" />，求导得 <Math tex="g'(x)=\dfrac{2}{x^2}" />。当 <Math tex="x\in[1,e]" /> 时 <Math tex="x^2>0" />，所以 <Math tex="g'(x)>0" />，<Math tex="g(x)" /> 单调递增。</p>
                      <p>最大值在右端点 <Math tex="x=e" /> 取到，<Math tex="g(e)=-\dfrac{2}{e}" />。</p>
                    </div>
                    <hr className="border-gray-400" />
                    <p className="pl-2"><strong>结论</strong>：当 <Math tex="a\ge -\dfrac{2}{e}" /> 时，<Math tex="f(x)=ax+2\ln x" /> 在 <Math tex="[1,e]" /> 上单调递增。</p>
                  </div>
                </div>

                {/* ── 例 C 变式练习 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="✏️ 例 C 变式" questions={derivMono2VariantC} explanations={derivativeApplication2Explanations} hideBlankLine optionCols={1} printOptionCols={1}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivMono2VariantC} printOptionCols={1} columns={1} />
                </div>

                {/* ── 例 D：含 e^x（分参 + 区间最值） ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 例 D（含 <Math tex="e^x" /> · 分参 + 区间最值）：<Math tex="f(x)=e^x-ax" /> 在 <Math tex="[\ln 2,\ln 3]" /> 上单调递增，求 <Math tex="a" /> 的范围</div>
                  <div className="px-2 py-1 space-y-1">
                    <div className="pl-2 space-y-0.5">
                      <p><strong>① 求导</strong>，得 <Math tex="f'(x)=e^x-a" />。</p>
                      <hr className="border-gray-200" />
                      <p><strong>② 转化</strong>，由题意，<Math tex="f'(x)=e^x-a\ge 0" /> 在 <Math tex="[\ln 2,\ln 3]" /> 上恒成立。</p>
                      <hr className="border-gray-200" />
                      <p><strong>③ 选方法</strong>，<Math tex="a" /> 已独立，移项得 <Math tex="a\le e^x" /> 在 <Math tex="[\ln 2,\ln 3]" /> 上恒成立，等价于 <Math tex="a\le \min(e^x)" />。</p>
                      <hr className="border-gray-200" />
                      <p><strong>④ 求最小值</strong>，记 <Math tex="g(x)=e^x" />，求导得 <Math tex="g'(x)=e^x>0" />，所以 <Math tex="g(x)" /> 单调递增。</p>
                      <p>最小值在左端点 <Math tex="x=\ln 2" /> 取到，<Math tex="g(\ln 2)=e^{\ln 2}=2" />。</p>
                    </div>
                    <hr className="border-gray-400" />
                    <p className="pl-2"><strong>结论</strong>：当 <Math tex="a\le 2" /> 时，<Math tex="f(x)=e^x-ax" /> 在 <Math tex="[\ln 2,\ln 3]" /> 上单调递增。</p>
                  </div>
                </div>

                {/* ── 例 D 变式练习 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="✏️ 例 D 变式" questions={derivMono2VariantD} explanations={derivativeApplication2Explanations} hideBlankLine optionCols={1} printOptionCols={1}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivMono2VariantD} printOptionCols={1} columns={1} />
                </div>

                {/* ── 例 E：分式（通分约分母 + 区间最值） ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 例 E（分式 · 通分约分母）：<Math tex="f(x)=x^2+\dfrac{a}{x}" /> 在 <Math tex="[2,+\infty)" /> 上单调递增，求 <Math tex="a" /> 的范围</div>
                  <div className="px-2 py-1 space-y-1">
                    <div className="pl-2 space-y-0.5">
                      <p><strong>① 求导通分</strong>，得 <Math tex="f'(x)=2x-\dfrac{a}{x^2}=\dfrac{2x^3-a}{x^2}" />。</p>
                      <hr className="border-gray-200" />
                      <p><strong>② 转化</strong>，由题意，<Math tex="f'(x)\ge 0" /> 在 <Math tex="[2,+\infty)" /> 上恒成立。分母 <Math tex="x^2>0" /> 恒正可约，等价于 <Math tex="2x^3-a\ge 0" /> 在 <Math tex="[2,+\infty)" /> 上恒成立。</p>
                      <hr className="border-gray-200" />
                      <p><strong>③ 选方法</strong>，<Math tex="a" /> 已独立，移项得 <Math tex="a\le 2x^3" /> 在 <Math tex="[2,+\infty)" /> 上恒成立，等价于 <Math tex="a\le \min(2x^3)" />。</p>
                      <hr className="border-gray-200" />
                      <p><strong>④ 求最小值</strong>，记 <Math tex="g(x)=2x^3" />，求导得 <Math tex="g'(x)=6x^2" />。当 <Math tex="x\in[2,+\infty)" /> 时 <Math tex="6x^2\ge 24>0" />，所以 <Math tex="g(x)" /> 单调递增。</p>
                      <p>最小值在左端点 <Math tex="x=2" /> 取到，<Math tex="g(2)=2\cdot 8=16" />。</p>
                    </div>
                    <hr className="border-gray-400" />
                    <p className="pl-2"><strong>结论</strong>：当 <Math tex="a\le 16" /> 时，<Math tex="f(x)=x^2+\dfrac{a}{x}" /> 在 <Math tex="[2,+\infty)" /> 上单调递增。</p>
                  </div>
                </div>

                {/* ── 例 E 变式练习 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="✏️ 例 E 变式" questions={derivMono2VariantE} explanations={derivativeApplication2Explanations} hideBlankLine optionCols={1} printOptionCols={1}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivMono2VariantE} printOptionCols={1} columns={1} />
                </div>

              </div>
            </Collapsible>
          </section>

          {/* ══════════════════════════════════════════════════════ */}
          {/* Section 1.5: 有解（能成立）专题 */}
          {/* ══════════════════════════════════════════════════════ */}
          <section id="da2-exist-warmup" className="mb-0 scroll-mt-4">
            <Collapsible title="有解（能成立）专题（与恒成立完美对偶，1.3 的铺垫）" defaultOpen storageKey="deriv-application-2:exist-warmup" hideTitleOnPrint>
              <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

                {/* ═══════════════════════════════════════════════════════ */}
                {/* 1.2.5 有解专题（与恒成立完美对偶）                          */}
                {/* ═══════════════════════════════════════════════════════ */}
                <div className="px-2 py-1 font-bold text-gray-900 bg-blue-50 border-l-4 border-blue-500">1.2.5　有解（能成立）专题（与恒成立完美对偶，1.3 的铺垫）</div>

                {/* ── 核心例子：用具体数字 2,3,4,5 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🌰 用具体数字看本质：<Math tex="B" /> 的取值是 <Math tex="\{2,3,4,5\}" /></div>
                  <div className="px-2 py-1 space-y-1">
                    <p><strong>恒成立</strong>就是：<strong>任意一个</strong> <Math tex="B" /> 都要满足 <Math tex="A>B" />。需要 <Math tex="A" /> 比 <Math tex="B" /> 里面的<strong>任意数</strong>都大，也就是 <Math tex="A" /> 大于 <Math tex="B" /> 的<strong>最大值</strong>就行，所以 <Math tex="A>5" />。</p>
                    <p><strong>有解</strong>就是：<strong>存在一个</strong> <Math tex="B" /> 满足 <Math tex="A>B" />。只需要 <Math tex="A" /> 大于 <Math tex="B" /> 的<strong>最小值</strong>就够了，所以 <Math tex="A>2" />。</p>
                    <hr className="border-gray-300" />
                    <p><strong>🤔 误解</strong>：<Math tex="A>3" /> 不也满足吗？——<strong>不错，但不全</strong>。<Math tex="A=2.5" /> 也满足（取 <Math tex="B=2" />），写 <Math tex="A>2" /> 才包含全部。</p>
                  </div>
                </div>

                {/* ── 核心定理 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📜 核心定理：有解 = 最值"另一头"</div>
                  <table className="w-full border-collapse text-center [&_tr>*:first-child]:border-l-0 [&_tr>*:last-child]:border-r-0">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-2 py-0.5 w-[36%]">条件</th>
                        <th className="border border-gray-300 px-2 py-0.5 w-[28%]">等价于</th>
                        <th className="border border-gray-300 px-2 py-0.5">怎么记</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-emerald-50">
                        <td className="border border-gray-300 px-2 py-0.5"><Math tex="\exists\ x\in D,\ a>g(x)" /></td>
                        <td className="border border-gray-300 px-2 py-0.5"><Math tex="a>\min g(x)" /></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><strong>能大取小</strong>（能成立 + 大于号 → min）</td>
                      </tr>
                      <tr className="bg-emerald-50">
                        <td className="border border-gray-300 px-2 py-0.5"><Math tex="\exists\ x\in D,\ a<g(x)" /></td>
                        <td className="border border-gray-300 px-2 py-0.5"><Math tex="a<\max g(x)" /></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><strong>能小取大</strong>（能成立 + 小于号 → max）</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* ── 与恒成立对比 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">⚔️ 与恒成立对比（牢记"取同一头" vs "取另一头"）</div>
                  <table className="w-full border-collapse text-center [&_tr>*:first-child]:border-l-0 [&_tr>*:last-child]:border-r-0">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-2 py-0.5 w-[24%]">条件</th>
                        <th className="border border-gray-300 px-2 py-0.5 w-[38%]">恒成立（任意）</th>
                        <th className="border border-gray-300 px-2 py-0.5">有解（存在）</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5"><Math tex="a>g(x)" /></td>
                        <td className="border border-gray-300 px-2 py-0.5 bg-blue-50"><Math tex="a>\max g(x)" /> &nbsp;<span className="text-blue-700">取最大</span></td>
                        <td className="border border-gray-300 px-2 py-0.5 bg-emerald-50"><Math tex="a>\min g(x)" /> &nbsp;<span className="text-emerald-700">取最小</span></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5"><Math tex="a<g(x)" /></td>
                        <td className="border border-gray-300 px-2 py-0.5 bg-blue-50"><Math tex="a<\min g(x)" /> &nbsp;<span className="text-blue-700">取最小</span></td>
                        <td className="border border-gray-300 px-2 py-0.5 bg-emerald-50"><Math tex="a<\max g(x)" /> &nbsp;<span className="text-emerald-700">取最大</span></td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="px-2 py-1 border-t border-gray-300 bg-amber-50">
                    <p><strong>💡 口诀</strong>：<strong>恒</strong>成立取同名（大于取 max、小于取 min）；<strong>能</strong>成立取异名（大于取 min、小于取 max）。</p>
                  </div>
                </div>

                {/* ── 例题（两问对照） ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 例题：已知 <Math tex="x\in[1,3]" />，分别求满足下列条件的 <Math tex="a" /> 的范围</div>
                  <div className="px-2 py-1 space-y-1">
                    <p className="pl-2"><strong>预备</strong>：<Math tex="x\in[1,3]" />，所以 <Math tex="2x\in[2,6]" />，即 <Math tex="\min(2x)=2" />，<Math tex="\max(2x)=6" />。</p>
                    <hr className="border-gray-400" />
                    <p className="pl-2"><strong>(1) <Math tex="a>2x" /> 在 <Math tex="[1,3]" /> 上恒成立</strong></p>
                    <p className="pl-4">恒成立要求 <Math tex="a" /> 大于<strong>所有</strong> <Math tex="2x" />，即 <Math tex="a>\max(2x)" />，得 <Math tex="a>6" />，故 <Math tex="a\in(6,+\infty)" />。</p>
                    <hr className="border-gray-400" />
                    <p className="pl-2"><strong>(2) <Math tex="a>2x" /> 在 <Math tex="[1,3]" /> 上有解</strong></p>
                    <p className="pl-4">有解只需 <Math tex="a" /> 大于<strong>某一个</strong> <Math tex="2x" />，即 <Math tex="a>\min(2x)" />，得 <Math tex="a>2" />，故 <Math tex="a\in(2,+\infty)" />。</p>
                    <hr className="border-gray-400" />
                    <p className="pl-2"><strong>📌 对比</strong>：同一道题，量词从"恒成立"换成"有解"，答案从 <Math tex="a>6" /> 翻到 <Math tex="a>2" />，<strong>取最值另一头</strong>。</p>
                  </div>
                </div>

                {/* ── 1.2.5 练习 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="✏️ 有解专题练习" questions={derivExistWarmup} explanations={derivativeApplication2Explanations} hideBlankLine optionCols={1} printOptionCols={1}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivExistWarmup} printOptionCols={1} columns={1} />
                </div>

                </div>
            </Collapsible>
          </section>

          {/* ═══════════════════════════════════════════════════════ */}
          {/* Section 2: 存在子区间求参 */}
          {/* ═══════════════════════════════════════════════════════ */}
          <section id="da2-monotone-param" className="mb-0 scroll-mt-4">
            <Collapsible title="二、存在子区间求参" defaultOpen storageKey="deriv-application-2:monotone-param" hideTitleOnPrint>
              <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

                {/* ═══════════════════════════════════════════════════════ */}
                {/* 1.3 存在单调子区间求参（"有解"型）                          */}
                {/* ═══════════════════════════════════════════════════════ */}
                <div className="px-2 py-1 font-bold text-gray-900 bg-blue-50 border-l-4 border-blue-500">1.3　存在单调子区间求参（★★★，"有解"型，与 1.2 完美对偶）</div>

                {/* ── 全节图形化总览 ── */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <table className="w-full border-collapse text-center [&_tr>*:first-child]:border-l-0 [&_tr>*:last-child]:border-r-0">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-2 py-0.5 w-[32%]">题型</th>
                        <th className="border border-gray-300 px-2 py-0.5 w-[32%]">导数条件</th>
                        <th className="border border-gray-300 px-2 py-0.5">本质（看 <Math tex="f'" /> 图像）</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-amber-50">
                        <td colSpan={3} className="border border-gray-300 px-2 py-0.5 text-left font-bold text-amber-800">🟡 1.2 类：恒成立 — 导数<strong>始终</strong>在 <Math tex="x" /> 轴一侧</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><strong>单调递增</strong>（恒成立）</td>
                        <td className="border border-gray-300 px-2 py-0.5"><Math tex="f'(x)\ge 0" /> 恒成立</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">导数<strong>始终在 <Math tex="x" /> 轴上方</strong>（含轴）</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><strong>单调递减</strong>（恒成立）</td>
                        <td className="border border-gray-300 px-2 py-0.5"><Math tex="f'(x)\le 0" /> 恒成立</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">导数<strong>始终在 <Math tex="x" /> 轴下方</strong>（含轴）</td>
                      </tr>
                      <tr className="bg-green-50">
                        <td colSpan={3} className="border border-gray-300 px-2 py-0.5 text-left font-bold text-green-800">🟢 1.3 类：找 <Math tex="f'>0/<0" /> 有解 — 导数<strong>能跑到</strong> <Math tex="x" /> 轴某侧</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><strong>存在递增子区间</strong></td>
                        <td className="border border-gray-300 px-2 py-0.5"><Math tex="f'(x)>0" /> 有解</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">导数<strong>能跑到 <Math tex="x" /> 轴上方</strong></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><strong>存在递减子区间</strong></td>
                        <td className="border border-gray-300 px-2 py-0.5"><Math tex="f'(x)<0" /> 有解</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">导数<strong>能跑到 <Math tex="x" /> 轴下方</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* ── 四步法 ── */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🎯 四步法模板</div>
                  <div className="px-2 py-0.5 space-y-1">
                    <p className="pl-2"><strong>① 求导</strong>：算出 <Math tex="f'(x)" />（参数当常数）。</p>
                    <p className="pl-2"><strong>② 翻译</strong>：把"存在递增/递减子区间"翻译成"<Math tex="f'>0" /> 或 <Math tex="f'<0" /> 在区间内有解"。</p>
                    <p className="pl-2"><strong>③ 分参</strong>：移项使参数独立，把不等式化为 <Math tex="a>g(x)" /> 或 <Math tex="a<g(x)" /> 有解。</p>
                    <p className="pl-2"><strong>④ 求最值</strong>：取 <Math tex="g(x)" /> 在区间上的最值"另一头"——<Math tex="a>g(x)" /> 有解 <Math tex="\Leftrightarrow" /> <Math tex="a>g_{\min}" />；<Math tex="a<g(x)" /> 有解 <Math tex="\Leftrightarrow" /> <Math tex="a<g_{\max}" />。</p>
                  </div>
                </div>

                {/* ── 例 A：多项式·分参 + 开端点处理 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 例 A（多项式·分参）：<Math tex="f(x)=x^3-ax" /> 在 <Math tex="(1,+\infty)" /> 上存在递减子区间，求 <Math tex="a" /> 的范围</div>
                  <div className="px-2 py-1 space-y-1">
                    <div className="pl-2 space-y-0.5">
                      <p><strong>① 求导</strong>，得 <Math tex="f'(x)=3x^2-a" />。</p>
                      <hr className="border-gray-200" />
                      <p><strong>② 翻译</strong>：在 <Math tex="(1,+\infty)" /> 上存在递减子区间，等价于 <Math tex="f'(x)=3x^2-a<0" /> 在 <Math tex="(1,+\infty)" /> 上<strong>有解</strong>。</p>
                      <p className="pl-4 text-red-700">⚠ 严格 <Math tex="<" />，不能含等号——<Math tex="f'=0" /> 处函数取常值，不算递减。（与 1.2 必须含等号正好相反。）</p>
                      <hr className="border-gray-200" />
                      <p><strong>③ 选方法</strong>：<Math tex="a" /> 能分离，移项得 <Math tex="a>3x^2" /> 在 <Math tex="(1,+\infty)" /> 上有解，等价于 <Math tex="a>\min(3x^2)" />。</p>
                      <hr className="border-gray-200" />
                      <p><strong>④ 求最小值</strong>：记 <Math tex="g(x)=3x^2" />，求导得 <Math tex="g'(x)=6x" />。当 <Math tex="x\in(1,+\infty)" /> 时 <Math tex="g'(x)>0" />，所以 <Math tex="g(x)" /> 单调递增。</p>
                      <p className="pl-4">所以当 <Math tex="x>1" /> 时，<Math tex="g(x)>g(1)" />，又 <Math tex="g(1)=3" />，所以 <Math tex="g(x)>3" />，即 <Math tex="g(x)" /> 的取值范围是 <Math tex="(3,+\infty)" />，故 <Math tex="a>3" /> 时满足题意。</p>
                    </div>
                  </div>
                </div>

                {/* ── 例 A 变式练习 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="✏️ 例 A 变式" questions={derivMono3VariantA} explanations={derivativeApplication2Explanations} hideBlankLine optionCols={1} printOptionCols={1}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivMono3VariantA} printOptionCols={1} columns={1} />
                </div>

                {/* ── 例 B：含 ln · 分参 + 区间最值 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 例 B（含 <Math tex="\ln" /> · 分参 + 区间最值）：<Math tex="f(x)=ax+2\ln x" /> 在 <Math tex="[1,e]" /> 上存在递减子区间，求 <Math tex="a" /> 的范围</div>
                  <div className="px-2 py-1 space-y-1">
                    <div className="pl-2 space-y-0.5">
                      <p><strong>① 求导</strong>：定义域 <Math tex="x>0" />，<Math tex="f'(x)=a+\dfrac{2}{x}" />。</p>
                      <hr className="border-gray-200" />
                      <p><strong>② 翻译</strong>：由题意，<Math tex="f'(x)<0" /> 在 <Math tex="[1,e]" /> 上有解，即 <Math tex="a+\dfrac{2}{x}<0" />。</p>
                      <hr className="border-gray-200" />
                      <p><strong>③ 分参</strong>：移项得 <Math tex="a<-\dfrac{2}{x}" />，故 <Math tex="a<\left(-\dfrac{2}{x}\right)_{\max}" />。</p>
                      <hr className="border-gray-200" />
                      <p><strong>④ 求最大值</strong>：记 <Math tex="g(x)=-\dfrac{2}{x}" />，求导得 <Math tex="g'(x)=\dfrac{2}{x^2}>0" />，所以 <Math tex="g(x)" /> 在 <Math tex="[1,e]" /> 上单调递增。</p>
                      <p className="pl-4">最大值在右端点 <Math tex="x=e" /> 取得，<Math tex="g(e)=-\dfrac{2}{e}" />，故 <Math tex="a<-\dfrac{2}{e}" /> 时满足题意。</p>
                    </div>
                  </div>
                </div>

                {/* ── 例 B 变式练习 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="✏️ 例 B 变式" questions={derivMono3VariantB} explanations={derivativeApplication2Explanations} hideBlankLine optionCols={1} printOptionCols={1}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivMono3VariantB} printOptionCols={1} columns={1} />
                </div>

                {/* ── 例 C：含 e^x · 含参乘积（母题，嵌套两层求导） ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 例 C（含 <Math tex="e^x" /> · 含参乘积）：<Math tex="f(x)=(x-2)e^x-ax" /> 在 <Math tex="[0,2]" /> 上存在递减子区间，求 <Math tex="a" /> 的范围</div>
                  <div className="px-2 py-1 space-y-1">
                    <div className="pl-2 space-y-0.5">
                      <p><strong>① 求导</strong>：<Math tex="f'(x)=e^x+(x-2)e^x-a=(x-1)e^x-a" />。</p>
                      <hr className="border-gray-200" />
                      <p><strong>② 翻译</strong>：由题意，<Math tex="f'(x)<0" /> 在 <Math tex="[0,2]" /> 上有解，即 <Math tex="(x-1)e^x-a<0" />。</p>
                      <hr className="border-gray-200" />
                      <p><strong>③ 分参</strong>：移项得 <Math tex="a>(x-1)e^x" />，故 <Math tex="a>[(x-1)e^x]_{\min}" />。</p>
                      <hr className="border-gray-200" />
                      <p><strong>④ 求最小值</strong>：记 <Math tex="g(x)=(x-1)e^x" />，求导得 <Math tex="g'(x)=e^x+(x-1)e^x=xe^x" />。</p>
                      <p className="pl-4">当 <Math tex="x\in[0,2]" /> 时 <Math tex="x\ge 0" />，<Math tex="e^x>0" />，所以 <Math tex="g'(x)\ge 0" />，<Math tex="g(x)" /> 在 <Math tex="[0,2]" /> 上单调递增。</p>
                      <p className="pl-4">最小值在左端点 <Math tex="x=0" /> 取得，<Math tex="g(0)=-1" />，故 <Math tex="a>-1" /> 时满足题意。</p>
                      <hr className="border-gray-300 my-1" />
                      <p className="font-bold text-gray-800">【另解】不分参，直接分析 <Math tex="f'(x)" /> 的单调性</p>
                      <p>由 <Math tex="f'(x)=(x-1)e^x-a" />，再求导得 <Math tex="f''(x)=xe^x" />。</p>
                      <p className="pl-4">当 <Math tex="x\in[0,2]" /> 时 <Math tex="f''(x)\ge 0" />，所以 <Math tex="f'(x)" /> 在 <Math tex="[0,2]" /> 上单调递增。</p>
                      <p className="pl-4"><Math tex="f'(x)" /> 的最小值在左端点 <Math tex="x=0" /> 取得，<Math tex="f'(0)=-1-a" />。</p>
                      <p className="pl-4">由题意 <Math tex="f'(x)<0" /> 在 <Math tex="[0,2]" /> 上有解，等价于 <Math tex="[f'(x)]_{\min}<0" />，即 <Math tex="-1-a<0" />，故 <Math tex="a>-1" /> 时满足题意。</p>
                    </div>
                  </div>
                </div>

                {/* ── 例 C 变式练习 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="✏️ 例 C 变式" questions={derivMono3VariantC} explanations={derivativeApplication2Explanations} hideBlankLine optionCols={1} printOptionCols={1}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivMono3VariantC} printOptionCols={1} columns={1} />
                </div>

                {/* ── 例 D：分式 · 通分约分母 + 开区间端点处理 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 例 D（分式 · 通分约分母）：<Math tex="f(x)=x^2+\dfrac{a}{x}" /> 在 <Math tex="(1,2)" /> 上存在递增子区间，求 <Math tex="a" /> 的范围</div>
                  <div className="px-2 py-1 space-y-1">
                    <div className="pl-2 space-y-0.5">
                      <p><strong>① 求导通分</strong>：<Math tex="f'(x)=2x-\dfrac{a}{x^2}=\dfrac{2x^3-a}{x^2}" />。</p>
                      <hr className="border-gray-200" />
                      <p><strong>② 翻译</strong>：由题意，<Math tex="f'(x)>0" /> 在 <Math tex="(1,2)" /> 上有解。分母 <Math tex="x^2>0" /> 恒正可约，等价于 <Math tex="2x^3-a>0" /> 在 <Math tex="(1,2)" /> 上有解。</p>
                      <hr className="border-gray-200" />
                      <p><strong>③ 分参</strong>：移项得 <Math tex="a<2x^3" /> 在 <Math tex="(1,2)" /> 上有解。</p>
                      <hr className="border-gray-200" />
                      <p><strong>④ 求最大值</strong>：记 <Math tex="g(x)=2x^3" />，求导 <Math tex="g'(x)=6x^2>0" />，所以 <Math tex="g(x)" /> 在 <Math tex="(1,2)" /> 上单调递增。</p>
                      <p className="pl-4">最大值在右端点 <Math tex="x=2" /> 取得（端点取不到），<Math tex="g(2)=16" />，故 <Math tex="a<16" /> 时满足题意。</p>
                    </div>
                  </div>
                </div>

                {/* ── 例 D 变式练习 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="✏️ 例 D 变式" questions={derivMono3VariantD} explanations={derivativeApplication2Explanations} hideBlankLine optionCols={1} printOptionCols={1}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivMono3VariantD} printOptionCols={1} columns={1} />
                </div>

                {/* ── 例 E：复合型 · e^x 与 ln 同时出现（嵌套求导） ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 例 E（复合型 · <Math tex="e^x" /> 与 <Math tex="\ln" /> 同时出现）：<Math tex="f(x)=e^x-a\ln x" /> 在 <Math tex="(1,e)" /> 上存在递减子区间，求 <Math tex="a" /> 的范围</div>
                  <div className="px-2 py-1 space-y-1">
                    <div className="pl-2 space-y-0.5">
                      <p><strong>① 求导</strong>：定义域 <Math tex="x>0" />，<Math tex="f'(x)=e^x-\dfrac{a}{x}" />。</p>
                      <hr className="border-gray-200" />
                      <p><strong>② 翻译</strong>：由题意，<Math tex="f'(x)<0" /> 在 <Math tex="(1,e)" /> 上有解，即 <Math tex="e^x-\dfrac{a}{x}<0" />，移项得 <Math tex="\dfrac{a}{x}>e^x" />。</p>
                      <hr className="border-gray-200" />
                      <p><strong>③ 分参</strong>：当 <Math tex="x\in(1,e)" /> 时 <Math tex="x>0" />，两边同乘 <Math tex="x" />，得 <Math tex="a>xe^x" /> 在 <Math tex="(1,e)" /> 上有解，故 <Math tex="a>(xe^x)_{\min}" />。</p>
                      <hr className="border-gray-200" />
                      <p><strong>④ 求最小值</strong>：记 <Math tex="g(x)=xe^x" />，求导得 <Math tex="g'(x)=e^x+xe^x=(x+1)e^x" />。当 <Math tex="x\in(1,e)" /> 时 <Math tex="x+1>0" />、<Math tex="e^x>0" />，<br />所以 <Math tex="g'(x)>0" />，<Math tex="g(x)" /> 单调递增。最小值在左端点 <Math tex="x=1" /> 取得（端点取不到），<Math tex="g(1)=e" />，故 <Math tex="a>e" /> 时满足题意。</p>
                    </div>
                  </div>
                </div>

                {/* ── 例 E 变式练习 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="✏️ 例 E 变式" questions={derivMono3VariantE} explanations={derivativeApplication2Explanations} hideBlankLine optionCols={1} printOptionCols={1}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivMono3VariantE} printOptionCols={1} columns={1} />
                </div>

              </div>
            </Collapsible>
          </section>

          {/* ═══════════════════════════════════════════════════════ */}
          {/* Section 3: 含参讨论单调性 */}
          {/* ═══════════════════════════════════════════════════════ */}
          <section id="da2-mono-discuss" className="mb-0 scroll-mt-4">
            <Collapsible title="三、含参讨论单调性" defaultOpen storageKey="deriv-application-2:mono-discuss" hideTitleOnPrint>
              <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

                {/* ── 1.4 标题 ── */}
                <PageBreak />
                <div className="px-2 py-1 font-bold text-gray-900 bg-blue-50 border-l-4 border-blue-500">1.4　含参讨论单调性（★★★★，导数大题第 (1) 问送分主力）</div>

                {/* ── 第一步：判断要不要分类 ── */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📋 第一步：判断要不要分类讨论</div>
                  <div className="px-2 py-1 space-y-1">
                    <p>求出 <Math tex="f'(x)" />，再扫一眼定义域，问自己一句：<span className="font-bold text-blue-800">"<Math tex="f'(x)" /> 在定义域上的正负，能不能直接看出来？"</span></p>
                    <p className="pl-4">能（如情形 ①、②）→ <strong>不分类</strong>（普通单调性题，回到 3.6.0 节做法）。</p>
                    <p className="pl-4">不能（如情形 ③）→ <strong>必须分类讨论</strong>（本节内容）。</p>
                    <hr className="border-gray-300" />
                    <p className="font-bold text-gray-800">三种情形对照</p>
                    <table className="w-full border-collapse text-center [&_td]:!border-gray-500 [&_th]:!border-gray-500">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="border border-gray-300 px-2 py-0.5 w-[10%]">情形</th>
                          <th className="border border-gray-300 px-2 py-0.5 w-[40%]">特征</th>
                          <th className="border border-gray-300 px-2 py-0.5 w-[35%]">举例</th>
                          <th className="border border-gray-300 px-2 py-0.5 w-[15%]">是否分类</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-2 py-0.5 font-bold">①</td>
                          <td className="border border-gray-300 px-2 py-0.5 text-left"><Math tex="f'" /> 与定义域<strong>都不含 <Math tex="a" /></strong></td>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="f'=2x-3" /></td>
                          <td className="border border-gray-300 px-2 py-0.5 text-gray-700">否</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-0.5 font-bold">②</td>
                          <td className="border border-gray-300 px-2 py-0.5 text-left">含 <Math tex="a" />，但<strong>符号一眼看出</strong>（恒正/恒负）</td>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="f'=e^x+a^2+1" /></td>
                          <td className="border border-gray-300 px-2 py-0.5 text-gray-700">否</td>
                        </tr>
                        <tr className="bg-amber-50">
                          <td className="border border-gray-300 px-2 py-0.5 font-bold text-red-700">③</td>
                          <td className="border border-gray-300 px-2 py-0.5 text-left"><Math tex="f'" /> <strong>或定义域</strong>含 <Math tex="a" />，且<strong>符号/范围依赖 <Math tex="a" /></strong></td>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="f'=ax+1" />、<Math tex="x(x-2a)" />、<Math tex="e^x-a" /></td>
                          <td className="border border-gray-300 px-2 py-0.5 font-bold text-red-700">是</td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="text-gray-700"><strong>90% 含参题都是情形 ③</strong>——看到含参 <Math tex="f'" /> 且 <Math tex="a" /> 与 <Math tex="x" /> 「<strong>绑在一起</strong>」，直接进入第二步"按什么分"。</p>
                  </div>
                </div>

                {/* ── 第二步：按什么分类 ── */}
                <div className="border border-gray-400 overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📋 第二步：按什么分？　<span className="font-normal text-gray-700">判定情形 ③ 后，对照下面 5 个锚点全图找分类锚点</span></div>
                  <div>
                    {/* 总锚点表 */}
                    <table className="w-full border-collapse text-center text-[0.88rem] [&_td]:!border-gray-500 [&_th]:!border-gray-500">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="border border-gray-300 px-2 py-0.5 w-[6%]">#</th>
                          <th className="border border-gray-300 px-2 py-0.5 w-[24%]">锚点</th>
                          <th className="border border-gray-300 px-2 py-0.5 w-[35%]">触发条件</th>
                          <th className="border border-gray-300 px-2 py-0.5">例子</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-2 py-0.5 font-bold">0</td>
                          <td className="border border-gray-300 px-2 py-0.5 font-bold">定义域形态</td>
                          <td className="border border-gray-300 px-2 py-0.5 text-left">定义域含 <Math tex="a" /></td>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="\ln(x^2-a)" /></td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-0.5 font-bold">1</td>
                          <td className="border border-gray-300 px-2 py-0.5 font-bold"><Math tex="a" /> 符号</td>
                          <td className="border border-gray-300 px-2 py-0.5 text-left">一次/广义一次</td>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="f'=ax+1" />、<Math tex="e^x-a" /></td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-0.5 font-bold">2</td>
                          <td className="border border-gray-300 px-2 py-0.5 font-bold">两根大小</td>
                          <td className="border border-gray-300 px-2 py-0.5 text-left">二次能分解</td>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="x(x-2a)" /></td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-0.5 font-bold">3</td>
                          <td className="border border-gray-300 px-2 py-0.5 font-bold">判别式 <Math tex="\Delta" /></td>
                          <td className="border border-gray-300 px-2 py-0.5 text-left">二次解不出根</td>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="x^2-ax+4" /></td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-0.5 font-bold">4</td>
                          <td className="border border-gray-300 px-2 py-0.5 font-bold">根 vs 端点</td>
                          <td className="border border-gray-300 px-2 py-0.5 text-left">题目限定区间 <Math tex="[m,n]" /></td>
                          <td className="border border-gray-300 px-2 py-0.5">在 <Math tex="[1,2]" /> 上讨论</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* ── 锚点 0 讲解：定义域形态 ── */}
                <div className="border border-gray-400 overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🎯 锚点 0 讲解：定义域形态（定义域随 <Math tex="a" /> 变）</div>
                  <div className="px-2 py-1 space-y-1">

                    <p><strong>什么时候触发</strong>：求函数定义域时，发现 <Math tex="a" /> 跑进了"使函数有意义"的不等式里。最常见三种信号——</p>
                    <p className="pl-4"><strong>① 真数含 <Math tex="a" /></strong>：<Math tex="\ln\bigl(g(x,a)\bigr)" /> 要求 <Math tex="g(x,a)>0" />，例如 <Math tex="\ln(x^2-a)" />、<Math tex="\ln(x-a)" />。</p>
                    <p className="pl-4"><strong>② 分母含 <Math tex="a" /></strong>：要求分母 <Math tex="\ne 0" />，例如 <Math tex="\dfrac{1}{x-a}" />、<Math tex="\dfrac{x}{x^2-a}" />。</p>
                    <p className="pl-4"><strong>③ 根号下含 <Math tex="a" /></strong>：<Math tex="\sqrt{g(x,a)}" /> 要求 <Math tex="g(x,a)\ge 0" />，例如 <Math tex="\sqrt{x-a}" />。</p>

                    <hr className="border-gray-300" />
                    <p><strong>为什么必须先按 <Math tex="a" /> 分</strong>：定义域不含参时唯一确定；含参时，参数不同则形态不同，<strong>须先按参数分类才能进行后续判号</strong>。</p>

                    <hr className="border-gray-300" />
                    <p><strong>怎么分（以 <Math tex="\ln(x^2-a)" /> 为例）</strong>：</p>
                    <p>定义域要求 <Math tex="x^2-a>0" />，移项得 <Math tex="x^2>a" />。<Math tex="a" /> 的正负决定不等式 <Math tex="x^2>a" /> 的解集形态，所以按 <Math tex="a" /> 的<strong>正、零、负</strong>三种情况分：</p>

                    <table className="w-full border-collapse text-center text-[0.88rem] [&_td]:!border-gray-500 [&_th]:!border-gray-500">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="border border-gray-500 px-2 py-0.5 w-[18%]"><Math tex="a" /> 的范围</th>
                          <th className="border border-gray-500 px-2 py-0.5 w-[40%]">不等式 <Math tex="x^2>a" /> 的解</th>
                          <th className="border border-gray-500 px-2 py-0.5">定义域</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-500 px-2 py-0.5"><Math tex="a<0" /></td>
                          <td className="border border-gray-500 px-2 py-0.5 text-left"><Math tex="a<0\le x^2" />，对所有 <Math tex="x" /> 成立</td>
                          <td className="border border-gray-500 px-2 py-0.5"><Math tex="\mathbb{R}" /></td>
                        </tr>
                        <tr>
                          <td className="border border-gray-500 px-2 py-0.5"><Math tex="a=0" /></td>
                          <td className="border border-gray-500 px-2 py-0.5 text-left"><Math tex="a=0" />，需 <Math tex="x^2>0" />，即 <Math tex="x\ne 0" /></td>
                          <td className="border border-gray-500 px-2 py-0.5"><Math tex="(-\infty,0)\cup(0,+\infty)" /></td>
                        </tr>
                        <tr>
                          <td className="border border-gray-500 px-2 py-0.5"><Math tex="a>0" /></td>
                          <td className="border border-gray-500 px-2 py-0.5 text-left"><Math tex="x^2>a>0" />，开方得 <Math tex="x<-\sqrt{a}" /> 或 <Math tex="x>\sqrt{a}" /></td>
                          <td className="border border-gray-500 px-2 py-0.5"><Math tex="(-\infty,-\sqrt{a})\cup(\sqrt{a},+\infty)" /></td>
                        </tr>
                      </tbody>
                    </table>

                  </div>
                </div>

                {/* ── 锚点 0 配套例题 ── */}
                <div className="border border-gray-400 overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：<strong>例 0</strong>　<Math tex="f(x)=\ln(x^2-a)" />，讨论单调性<span className="text-gray-700 font-normal ml-2">——锚点 0 母题，定义域随 <Math tex="a" /> 整片改变</span></div>
                  <div className="px-2 py-0.5 space-y-1">
                    <p className="pl-2"><strong>① 分析定义域</strong>：要求真数 <Math tex="x^2-a>0" />，移项得 <Math tex="x^2>a" />。定义域含 <Math tex="a" />，<strong>触发锚点 0</strong>，先按 <Math tex="a" /> 分情况写定义域。</p>
                    <p className="pl-2"><strong>② 求导</strong>：<Math tex="f'(x)=\dfrac{2x}{x^2-a}" />。定义域内分母 <Math tex="x^2-a>0" /> 恒正，<strong>分子 <Math tex="2x" /> 决定 <Math tex="f'" /> 符号</strong>。</p>
                    <hr className="border-gray-300" />
                    <p className="font-bold text-gray-800">③ 按 <Math tex="a" /> 分类</p>
                    <div className="space-y-1">
                      <p><span className="font-bold text-blue-800 mr-2">情况一：当 <Math tex="a<0" /> 时</span>定义域为 <Math tex="\mathbb{R}" />。分子 <Math tex="2x" /> 在 <Math tex="x<0" /> 时为负，在 <Math tex="x>0" /> 时为正。</p>
                      <p className="pl-2">所以 <Math tex="f(x)" /> 在 <Math tex="(-\infty,0)" /> 上<strong>单调递减</strong>，在 <Math tex="(0,+\infty)" /> 上<strong>单调递增</strong>。</p>
                      <hr className="border-gray-300" />
                      <p><span className="font-bold text-blue-800 mr-2">情况二：当 <Math tex="a=0" /> 时</span>定义域为 <Math tex="(-\infty,0)\cup(0,+\infty)" />。</p>
                      <p className="pl-2">• 区间 <Math tex="(-\infty,0)" />，<Math tex="x<0" />，所以 <Math tex="2x<0" />，<Math tex="f'(x)<0" />，<Math tex="f(x)" /> <strong>单调递减</strong>。</p>
                      <p className="pl-2">• 区间 <Math tex="(0,+\infty)" />，<Math tex="x>0" />，所以 <Math tex="2x>0" />，<Math tex="f'(x)>0" />，<Math tex="f(x)" /> <strong>单调递增</strong>。</p>
                      <hr className="border-gray-300" />
                      <p><span className="font-bold text-blue-800 mr-2">情况三：当 <Math tex="a>0" /> 时</span>定义域为 <Math tex="(-\infty,-\sqrt{a})\cup(\sqrt{a},+\infty)" />。</p>
                      <p className="pl-2">• 区间 <Math tex="(-\infty,-\sqrt{a})" />，<Math tex="x<-\sqrt{a}<0" />，所以 <Math tex="2x<0" />，<Math tex="f'(x)<0" />，<Math tex="f(x)" /> <strong>单调递减</strong>。</p>
                      <p className="pl-2">• 区间 <Math tex="(\sqrt{a},+\infty)" />，<Math tex="x>\sqrt{a}>0" />，所以 <Math tex="2x>0" />，<Math tex="f'(x)>0" />，<Math tex="f(x)" /> <strong>单调递增</strong>。</p>
                    </div>
                    <hr className="border-gray-300" />
                    <div className="pl-2 grid grid-cols-[auto_1fr] gap-x-2">
                      <div className="font-bold whitespace-nowrap"><strong>④ 综上所述</strong>：</div>
                      <div className="space-y-0.5">
                        <p>• <Math tex="a<0" /> 时，减区间 <Math tex="(-\infty,0)" />，增区间 <Math tex="(0,+\infty)" />。</p>
                        <p>• <Math tex="a=0" /> 时，减区间 <Math tex="(-\infty,0)" />，增区间 <Math tex="(0,+\infty)" />。</p>
                        <p>• <Math tex="a>0" /> 时，减区间 <Math tex="(-\infty,-\sqrt{a})" />，增区间 <Math tex="(\sqrt{a},+\infty)" />。</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── 锚点 0 练习 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="✏️ 锚点 0 练习" questions={derivAnchor0Practice} explanations={derivativeApplication2Explanations} hideBlankLine optionCols={1} printOptionCols={1}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivAnchor0Practice} printOptionCols={1} columns={1} />
                </div>

                {/* ── 锚点 1 讲解：a 符号 ── */}
                <div className="border border-gray-400 overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🎯 锚点 1 讲解：<Math tex="a" /> 符号（一次型 / 广义一次型）</div>
                  <div className="px-2 py-1 space-y-1">

                    <p><strong>什么时候触发</strong>：求完导后，<Math tex="f'(x)" /> 的分子（或整体）是关于 <Math tex="x" /> 的<strong>一次式</strong>，且系数含 <Math tex="a" />。典型形式——</p>
                    <p className="pl-4"><strong>① 纯一次</strong>：<Math tex="ax+b" />、<Math tex="ax-1" />、<Math tex="1-ax" /> 等。</p>
                    <p className="pl-4"><strong>② 广义一次</strong>：<Math tex="e^x-a" />、<Math tex="a-\ln x" /> 等（令 <Math tex="t=e^x" /> 或 <Math tex="t=\ln x" /> 后变成一次）。</p>

                    <hr className="border-gray-300" />
                    <p><strong>为什么按 <Math tex="a" /> 的符号分</strong>：一次式 <Math tex="ax-1=0" /> 的零点为 <Math tex="x=\tfrac{1}{a}" />，只有 <Math tex="a\ne 0" /> 时零点才存在；</p>
                    <p>而零点是否落在定义域内，又取决于 <Math tex="a" /> 的正负。因此 <Math tex="a" /> 的<strong>符号直接决定 <Math tex="f'" /> 能否变号</strong>。</p>

                    <hr className="border-gray-300" />
                    <p><strong>怎么分（以 <Math tex="f'=\dfrac{ax-1}{x},\;x>0" /> 为例）</strong>：令分子 <Math tex="ax-1=0" />，零点为 <Math tex="x=\dfrac{1}{a}" />（<Math tex="a\ne 0" /> 时）。</p>

                    <table className="w-full border-collapse text-center text-[0.88rem] [&_td]:!border-gray-500 [&_th]:!border-gray-500">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="border border-gray-500 px-2 py-0.5 w-[18%]"><Math tex="a" /> 的范围</th>
                          <th className="border border-gray-500 px-2 py-0.5 w-[50%]">零点情况</th>
                          <th className="border border-gray-500 px-2 py-0.5"><Math tex="f'" /> 符号</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-500 px-2 py-0.5"><Math tex="a<0" /></td>
                          <td className="border border-gray-500 px-2 py-0.5 text-left">零点 <Math tex="\tfrac{1}{a}<0" />，不在 <Math tex="(0,+\infty)" /> 内</td>
                          <td className="border border-gray-500 px-2 py-0.5"><Math tex="f'<0" /> 恒成立</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-500 px-2 py-0.5"><Math tex="a=0" /></td>
                          <td className="border border-gray-500 px-2 py-0.5 text-left">分子 <Math tex="=-1" />，常数，无零点</td>
                          <td className="border border-gray-500 px-2 py-0.5"><Math tex="f'<0" /> 恒成立</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-500 px-2 py-0.5"><Math tex="a>0" /></td>
                          <td className="border border-gray-500 px-2 py-0.5 text-left">零点 <Math tex="\tfrac{1}{a}>0" />，落在定义域内</td>
                          <td className="border border-gray-500 px-2 py-0.5"><Math tex="f'" /> 变号，需分段</td>
                        </tr>
                      </tbody>
                    </table>

                  </div>
                </div>

                {/* ── 例 1：一次型（2024 全国甲卷母题） ── */}
                <div className="border border-gray-400 overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：<strong>例 1</strong>　<Math tex="f(x)=a(x-1)-\ln x+1" />，讨论单调区间<span className="text-gray-700 font-normal ml-2">——2024 全国甲卷第 20 题，一次型母题</span></div>
                  <div className="px-2 py-0.5 space-y-1">
                    <p className="pl-2"><strong>① 定义域 + 求导</strong>：<Math tex="\ln x" /> 要求 <Math tex="x>0" />，定义域为 <Math tex="(0,+\infty)" />。<Math tex="f'(x)=a-\dfrac{1}{x}=\dfrac{ax-1}{x}" />。</p>
                    <p className="pl-2"><strong>② 定号</strong>：分母 <Math tex="x>0" /> 恒正可约，看分子 <Math tex="ax-1" />。<strong>先求分子零点</strong>：令 <Math tex="ax-1=0" />，<Math tex="a=0" /> 时方程无解；<Math tex="a\ne 0" /> 时解得 <Math tex="x=\dfrac{1}{a}" />。</p>
                    <hr className="border-gray-300" />
                    <p className="font-bold text-gray-800">③ 按 <Math tex="a" /> 分类</p>
                    <div className="space-y-1">
                      <p><span className="font-bold text-blue-800 mr-2">情况一：当 <Math tex="a<0" /> 时</span>零点 <Math tex="\dfrac{1}{a}<0" />，不在定义域 <Math tex="(0,+\infty)" /> 内，无需分段。定义域内 <Math tex="x>0" /> 且 <Math tex="a<0" />，则 <Math tex="ax<0" />，</p>
                      <p className="pl-2">即 <Math tex="ax<0<1" />，移项得 <Math tex="ax-1<0" />，故 <Math tex="f'(x)<0" /> 恒成立，<Math tex="f(x)" /> 在 <Math tex="(0,+\infty)" /> 上<strong>单调递减</strong>。</p>
                      <hr className="border-gray-300" />
                      <p><span className="font-bold text-blue-800 mr-2">情况二：当 <Math tex="a=0" /> 时</span>零点不存在，则分子 <Math tex="ax-1=-1" /> 为负，故 <Math tex="f'(x)<0" /> 恒成立，<Math tex="f(x)" /> 在 <Math tex="(0,+\infty)" /> 上<strong>单调递减</strong>。</p>
                      <hr className="border-gray-300" />
                      <p><span className="font-bold text-blue-800 mr-2">情况三：当 <Math tex="a>0" /> 时</span>零点 <Math tex="x=\dfrac{1}{a}>0" />，<strong>落在定义域 <Math tex="(0,+\infty)" /> 内</strong>，把定义域切成 <Math tex="\left(0,\dfrac{1}{a}\right)" /> 和 <Math tex="\left(\dfrac{1}{a},+\infty\right)" /> 两段。</p>
                      <p className="pl-2">• 区间 <Math tex="\left(0,\dfrac{1}{a}\right)" />，即 <Math tex="0<x<\dfrac{1}{a}" /> 时，同乘 <Math tex="a" /> 得 <Math tex="ax<1" />，得 <Math tex="ax-1<0" />。一负一正，得 <Math tex="f'(x)<0" />，<Math tex="f(x)" /> <strong>单调递减</strong>。</p>
                      <hr className="border-gray-300" />
                      <p className="pl-2">• 区间 <Math tex="\left(\dfrac{1}{a},+\infty\right)" />，即 <Math tex="x>\dfrac{1}{a}" /> 时，同乘 <Math tex="a" /> 得 <Math tex="ax>1" />，得 <Math tex="ax-1>0" />。一正一正，得 <Math tex="f'(x)>0" />，<Math tex="f(x)" /> <strong>单调递增</strong>。</p>
                    </div>
                    <hr className="border-gray-300" />
                    <div className="pl-2 grid grid-cols-[auto_1fr] gap-x-2">
                      <div className="font-bold whitespace-nowrap"><strong>④ 综上所述</strong>：</div>
                      <div className="space-y-0.5">
                        <p>• <Math tex="a<0" /> 时，<Math tex="f(x)" /> 的减区间为 <Math tex="(0,+\infty)" />，无增区间。</p>
                        <p>• <Math tex="a=0" /> 时，<Math tex="f(x)" /> 的减区间为 <Math tex="(0,+\infty)" />，无增区间。</p>
                        <p>• <Math tex="a>0" /> 时，<Math tex="f(x)" /> 的减区间为 <Math tex="\left(0,\tfrac{1}{a}\right)" />，增区间为 <Math tex="\left(\tfrac{1}{a},+\infty\right)" />。</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── 锚点 1 练习 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="✏️ 锚点 1 练习" questions={derivAnchor1Practice} explanations={derivativeApplication2Explanations} hideBlankLine optionCols={1} printOptionCols={1}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivAnchor1Practice} printOptionCols={1} columns={1} />
                </div>

                {/* ── 锚点 2 讲解：两根大小 ── */}
                <div className="border border-gray-400 overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🎯 锚点 2 讲解：两根大小（二次型可分解）</div>
                  <div className="px-2 py-1 space-y-1">

                    <p><strong>什么时候触发</strong>：<Math tex="f'(x)" /> 是二次且能<strong>因式分解</strong>成两个一次因子，即 <Math tex="f'(x)=k(x-r_1)(x-r_2)" />，其中 <Math tex="k" /> 为常数，<Math tex="r_1,r_2" /> 是两个零点</p>
                    <p className="pl-4">典型形式：<Math tex="x(x-2a)" />、<Math tex="(x-1)(x-a)" />、<Math tex="6(x-1)(x-a)" /></p>

                    <hr className="border-gray-300" />
                    <p><strong>为什么按两根大小分</strong>：判断 <Math tex="f'(x)" /> 的符号，就是判断 <Math tex="(x-r_1)(x-r_2)" /> 的正负。这需要知道 <Math tex="x" /> 相对于 <Math tex="r_1,r_2" /> 的位置。如果两根含参（如 <Math tex="r_1=1,r_2=a" />），则 <Math tex="r_1,r_2" /> 的<strong>相对大小会影响分段方式</strong>。</p>

                    <hr className="border-gray-300" />
                    <p><strong>怎么分（以 <Math tex="f'(x)=6(x-1)(x-a)" /> 为例）</strong>：</p>
                    <p>两零点为 <Math tex="x=1" />（具体值）和 <Math tex="x=a" />（含参），比较 <Math tex="a" /> 与 <Math tex="1" /> 的大小，分三种情况：</p>

                    <table className="w-full border-collapse text-center text-[0.88rem] [&_td]:!border-gray-500 [&_th]:!border-gray-500">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="border border-gray-300 px-2 py-0.5 w-[15%]">情况</th>
                          <th className="border border-gray-300 px-2 py-0.5 w-[20%]">两根次序</th>
                          <th className="border border-gray-300 px-2 py-0.5 w-[35%]">分段</th>
                          <th className="border border-gray-300 px-2 py-0.5">单调性</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-2 py-0.5 font-bold"><Math tex="a>1" /></td>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="1<a" /></td>
                          <td className="border border-gray-300 px-2 py-0.5 text-left"><Math tex="(-\infty,1)" />、<Math tex="(1,a)" />、<Math tex="(a,+\infty)" /></td>
                          <td className="border border-gray-300 px-2 py-0.5 text-left">增、减、增</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-0.5 font-bold"><Math tex="a=1" /></td>
                          <td className="border border-gray-300 px-2 py-0.5">重根</td>
                          <td className="border border-gray-300 px-2 py-0.5 text-left"><Math tex="f'=(x-1)^2\ge 0" /> 恒成立</td>
                          <td className="border border-gray-300 px-2 py-0.5 text-left"><Math tex="\mathbb{R}" /> 上单增</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-0.5 font-bold"><Math tex="a<1" /></td>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="a<1" /></td>
                          <td className="border border-gray-300 px-2 py-0.5 text-left"><Math tex="(-\infty,a)" />、<Math tex="(a,1)" />、<Math tex="(1,+\infty)" /></td>
                          <td className="border border-gray-300 px-2 py-0.5 text-left">增、减、增</td>
                        </tr>
                      </tbody>
                    </table>

                    <p className="text-gray-700"><strong>📎 两根都含参时</strong>（如 <Math tex="(x-a)(x-2a)" />）：先比较两根的差（<Math tex="2a-a=a" />），按 <Math tex="a" /> 符号定次序，再按上述流程分段判号。</p>
                    <p className="text-gray-700"><strong>📌 判号口诀</strong>：开口向上的二次，"两根之外为正、两根之间为负"；重根时恒非负。</p>

                  </div>
                </div>

                {/* ── 例 2：二次型可分解（最高频母题） ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：<strong>例 2</strong>　<Math tex="f(x)=2x^3-3(a+1)x^2+6ax" />，讨论单调性<span className="text-gray-700 font-normal ml-2">——二次可分解最高频母题</span></div>
                  <div className="px-2 py-0.5 space-y-1">
                    <p className="pl-2"><strong>① 求导 + 因式分解 + 找零点</strong>：<Math tex="f'(x)=6x^2-6(a+1)x+6a=6(x-1)(x-a)" />，零点为 <Math tex="x=1" /> 和 <Math tex="x=a" />。</p>
                    <p className="pl-2"><strong>② 定号</strong>：判 <Math tex="f'(x)" /> 的正负就是判两因子 <Math tex="(x-1)(x-a)" /> 相乘的符号，用两根 <Math tex="1" /> 和 <Math tex="a" /> 分段判号。分类讨论两根之间大小。</p>
                    <hr className="border-gray-300" />
                    <p className="font-bold text-gray-800">③ 按 <Math tex="a" /> 分类</p>
                    <div className="space-y-1">
                      <p><span className="font-bold text-blue-800 mr-2">情况一：当 <Math tex="a>1" /> 时</span>此时 <Math tex="1<a" />，在定义域 <Math tex="x\in\mathbb{R}" /> 上分区为 <Math tex="(-\infty,1)" />、<Math tex="(1,a)" />、<Math tex="(a,+\infty)" /></p>
                      <p className="pl-2">• 区间 <Math tex="(-\infty,1)" />，即 <Math tex="x<1" /> 时，移项得 <Math tex="x-1<0" /> 且 <Math tex="x-a<0" />（两负），相乘为正，<Math tex="f'(x)>0" />，<Math tex="f(x)" /> <strong>单调递增</strong>。</p>
                      <p className="pl-2">• 区间 <Math tex="(1,a)" />，即 <Math tex="1<x<a" /> 时，移项得 <Math tex="x-1>0" /> 且 <Math tex="x-a<0" />（异号），相乘为负，<Math tex="f'(x)<0" />，<Math tex="f(x)" /> <strong>单调递减</strong>。</p>
                      <p className="pl-2">• 区间 <Math tex="(a,+\infty)" />，即 <Math tex="x>a" /> 时，移项得 <Math tex="x-1>0" /> 且 <Math tex="x-a>0" />（两正），相乘为正，<Math tex="f'(x)>0" />，<Math tex="f(x)" /> <strong>单调递增</strong>。</p>
                      <hr className="border-gray-300" />
                      <p><span className="font-bold text-blue-800 mr-2">情况二：<Math tex="a=1" />（重根）</span>当 <Math tex="a=1" /> 时 <Math tex="f'(x)=6(x-1)(x-1)" />，即 <Math tex="f'(x)=6(x-1)^2" />。因为 <Math tex="6>0" /> 且 <Math tex="(x-1)^2\ge 0" />，</p>
                      <p className="pl-2">所以 <Math tex="f'(x)\ge 0" />（仅在 <Math tex="x=1" /> 时 <Math tex="f'=0" />），即 <Math tex="f(x)" /> 在 <Math tex="\mathbb{R}" /> 上<strong>单调递增</strong>。</p>
                      <hr className="border-gray-300" />
                      <p><span className="font-bold text-blue-800 mr-2">情况三：<Math tex="a<1" /></span>两根次序为 <Math tex="a<1" />，把 <Math tex="\mathbb{R}" /> 切成 <Math tex="(-\infty,a)" />、<Math tex="(a,1)" />、<Math tex="(1,+\infty)" /> 三段。</p>
                      <p className="pl-2">• 区间 <Math tex="(-\infty,a)" />，即 <Math tex="x<a" /> 时，移项得 <Math tex="x-1<0" /> 且 <Math tex="x-a<0" />（两负），相乘为正，<Math tex="f'(x)>0" />，<Math tex="f(x)" /> <strong>单调递增</strong>。</p>
                      <p className="pl-2">• 区间 <Math tex="(a,1)" />，即 <Math tex="a<x<1" /> 时，移项得 <Math tex="x-1<0" /> 且 <Math tex="x-a>0" />（异号），相乘为负，<Math tex="f'(x)<0" />，<Math tex="f(x)" /> <strong>单调递减</strong>。</p>
                      <p className="pl-2">• 区间 <Math tex="(1,+\infty)" />，即 <Math tex="x>1" /> 时，移项得 <Math tex="x-1>0" /> 且 <Math tex="x-a>0" />（两正），相乘为正，<Math tex="f'(x)>0" />，<Math tex="f(x)" /> <strong>单调递增</strong>。</p>
                    </div>
                    <hr className="border-gray-300" />
                    <div className="pl-2 grid grid-cols-[auto_1fr] gap-x-2">
                      <div className="font-bold whitespace-nowrap"><strong>④ 综上所述</strong>：</div>
                      <div className="space-y-0.5">
                        <p>• <Math tex="a>1" /> 时，增区间 <Math tex="(-\infty,1),(a,+\infty)" />，减区间 <Math tex="(1,a)" />。</p>
                        <p>• <Math tex="a=1" /> 时，<Math tex="f(x)" /> 在 <Math tex="\mathbb{R}" /> 上单调递增。</p>
                        <p>• <Math tex="a<1" /> 时，增区间 <Math tex="(-\infty,a),(1,+\infty)" />，减区间 <Math tex="(a,1)" />。</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── 锚点 2 练习 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="✏️ 锚点 2 练习" questions={derivAnchor2Practice} explanations={derivativeApplication2Explanations} hideBlankLine optionCols={1} printOptionCols={1}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivAnchor2Practice} printOptionCols={1} columns={1} />
                </div>

                {/* ── 锚点 3 讲解：判别式 Δ ── */}
                <div className="border border-gray-400 overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🎯 锚点 3 讲解：判别式 <Math tex="\Delta" />（二次解不出根）</div>
                  <div className="px-2 py-1 space-y-1">

                    <p><strong>什么时候触发</strong>：<Math tex="f'(x)" /> 的核心部分是<strong>含参二次</strong>，但<strong>无法因式分解</strong>（解不出零点）。</p>
                    <p className="pl-4">典型形式：<Math tex="x^2-ax+1" />、<Math tex="x^2-ax+4" /></p>

                    <hr className="border-gray-300" />
                    <p><strong>为什么按 <Math tex="\Delta" /> 分</strong>：解不出根时无法直接分段。但二次曲线和 <Math tex="x" /> 轴的位置关系完全由 <Math tex="\Delta" /> 决定——<Math tex="\Delta\le 0" /> 不变号、<Math tex="\Delta>0" /> 需要分段</p>

                    <hr className="border-gray-300" />
                    <p><strong>怎么分（以 <Math tex="g(x)=x^2-ax+1" /> 开口向上为例）</strong>：</p>

                    <table className="w-full border-collapse text-center text-[0.88rem] [&_td]:!border-gray-500 [&_th]:!border-gray-500">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="border border-gray-300 px-2 py-0.5 w-[15%]">情况</th>
                          <th className="border border-gray-300 px-2 py-0.5 w-[30%]">几何含义</th>
                          <th className="border border-gray-300 px-2 py-0.5">符号</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-2 py-0.5 font-bold"><Math tex="\Delta<0" /></td>
                          <td className="border border-gray-300 px-2 py-0.5">无交点</td>
                          <td className="border border-gray-300 px-2 py-0.5 text-left"><Math tex="g(x)>0" /> 恒成立 → 不变号</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-0.5 font-bold"><Math tex="\Delta=0" /></td>
                          <td className="border border-gray-300 px-2 py-0.5">相切（重根）</td>
                          <td className="border border-gray-300 px-2 py-0.5 text-left"><Math tex="g(x)\ge 0" /> 恒成立 → 不变号</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-0.5 font-bold"><Math tex="\Delta>0" /></td>
                          <td className="border border-gray-300 px-2 py-0.5">两交点</td>
                          <td className="border border-gray-300 px-2 py-0.5 text-left">两根存在，<strong>用韦达定理判两根位置</strong>，再分段</td>
                        </tr>
                      </tbody>
                    </table>

                    <p><strong>⚡ <Math tex="\Delta\le 0" /> 简单处理（3 步走）</strong>：① 解 <Math tex="\Delta\le 0" /> 定 <Math tex="a" /> 范围；② 看开口定 <Math tex="g(x)" /> 符号；③ 由 <Math tex="g(x)" /> 符号得 <Math tex="f(x)" /> 单调性。</p>
                    <p className="pl-4">开口向上 → <Math tex="g(x)\ge 0" /> 恒成立 → <Math tex="f'" /> 不变号；<br />开口向下 → <Math tex="g(x)\le 0" /> 恒成立 → <Math tex="f'" /> 不变号。<strong>一句话出结论，不分段</strong>。</p>

                    <hr className="border-gray-300" />
                    <div className="flex gap-4 items-start">
                      <div className="flex-1">
                        <p><strong>🔧 <Math tex="\Delta>0" /> 完整思路（5 步走）</strong>：解不出两根（求根公式太复杂），改用<strong>韦达定理判位置</strong>。</p>
                        <div className="pl-4 space-y-0.5">
                          <p>① 解 <Math tex="\Delta>0" />，确定 <Math tex="a" /> 的范围；</p>
                          <p>② 用韦达定理算两根之和 <Math tex="x_1+x_2" />、两根之积 <Math tex="x_1 x_2" />；</p>
                          <p>③ 判两根位置：<strong>积同号、和定号</strong>——先看积判同异号，同号再看和判正负（见右表）；</p>
                          <p>④ 结合定义域分三种情况：</p>
                        </div>
                      </div>
                      <table className="shrink-0 border-collapse text-center text-[0.88rem] [&_td]:!border-gray-500 [&_th]:!border-gray-500">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="border border-gray-300 px-3 py-0.5">积</th>
                            <th className="border border-gray-300 px-3 py-0.5">和</th>
                            <th className="border border-gray-300 px-3 py-0.5">两根</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-3 py-0.5">正</td>
                            <td className="border border-gray-300 px-3 py-0.5">正</td>
                            <td className="border border-gray-300 px-3 py-0.5"><strong>都为正</strong></td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-3 py-0.5">正</td>
                            <td className="border border-gray-300 px-3 py-0.5">负</td>
                            <td className="border border-gray-300 px-3 py-0.5"><strong>都为负</strong></td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-3 py-0.5">负</td>
                            <td className="border border-gray-300 px-3 py-0.5">不用看</td>
                            <td className="border border-gray-300 px-3 py-0.5"><strong>一正一负</strong></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="pl-4 space-y-0.5">
                      <p className="pl-4">• 两根都在<strong>定义域外</strong>：定义域内每个 <Math tex="x" /> 和两根的大小关系都一样，<Math tex="g(x)" /> 符号不变，<strong>不用分段</strong>；</p>
                      <p className="pl-4">• 两根都在<strong>域内</strong>：设 <Math tex="x_1<x_2" />（约定哪个较小，不影响结论），用两根把定义域切成三段判号；</p>
                      <p className="pl-4">• <strong>一内一外</strong>：域外那根不参与分段（对应因子在域内不变号，恒正或恒负），只用域内那根分段。</p>
                      <p>⑤ 综上结论，必要时用求根公式 <Math tex="x=\dfrac{-b\pm\sqrt{b^2-4ac}}{2a}" /> 给出 <Math tex="x_1,x_2" /> 表达式。</p>
                    </div>
                    <hr className="border-gray-300" />
                    <p><strong>📌 韦达定理速查</strong>：对 <Math tex="ax^2+bx+c=0" />（<Math tex="a\ne 0" />），两根之和 <Math tex="=-\dfrac{b}{a}" />，两根之积 <Math tex="=\dfrac{c}{a}" />。积同号、和定号——可判断两根的正负</p>
                    <p><strong>📌 一句话总结</strong>：<Math tex="\Delta\le 0" /> 一句话出结论（不分段）；<Math tex="\Delta>0" /> 用韦达判位置，根在域内才切段。</p>

                  </div>
                </div>

                {/* ── 锚点 3 练习 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="✏️ 锚点 3 练习" questions={derivAnchor3Practice} explanations={derivativeApplication2Explanations} hideBlankLine optionCols={1} printOptionCols={1}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivAnchor3Practice} printOptionCols={1} columns={1} />
                </div>

                {/* ── 例 3：含 ln 通分（Δ 法，锚点 3） ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：<strong>例 3</strong>　<Math tex="f(x)=\dfrac{1}{2}x^2-ax+\ln x" />，讨论单调性<span className="text-gray-700 font-normal ml-2">——含 <Math tex="\ln" /> 通分综合（Δ + 韦达定理）</span></div>
                  <div className="px-2 py-0.5 space-y-1">
                    <p className="pl-2"><strong>① 定义域 + 求导</strong>：因为含 <Math tex="\ln x" />，所以<strong>定义域为 <Math tex="x>0" /></strong>。求导通分得 <Math tex="f'(x)=x-a+\dfrac{1}{x}=\dfrac{x^2-ax+1}{x}" />。</p>
                    <p className="pl-2"><strong>② 分析</strong>：分母 <Math tex="x" />，由定义域得 <Math tex="x>0" />，所以分母恒正，<Math tex="f'(x)" /> 的符号由分子决定。看分子 <Math tex="g(x)=x^2-ax+1" />，<br />是含参二次方程，求出零点过于复杂，<strong>改用判别式法</strong>：<Math tex="g(x)" /> <strong>开口向上</strong>，判别式 <Math tex="\Delta=a^2-4" />，按 <Math tex="\Delta" /> 分类讨论。</p>
                    <hr className="border-gray-300" />
                    <p className="font-bold text-gray-800">③ 按 <Math tex="\Delta" /> 分类</p>
                    <div className="space-y-1">
                      <p><span className="font-bold text-blue-800 mr-2">情况一：<Math tex="\Delta\le 0" /></span>即 <Math tex="a^2-4\le 0" />，解得 <Math tex="-2\le a\le 2" />。<span className="border-b border-dashed border-gray-400">开口向上，所以抛物线在 <Math tex="x" /> 轴上方或相切，即</span> <Math tex="g(x)\ge 0" /> 恒成立。<br /><span className="border-b border-dashed border-gray-400">分子 <Math tex="g(x)\ge 0" />，分母 <Math tex="x>0" />，所以</span> <Math tex="f'(x)\ge 0" />，因此 <Math tex="f(x)" /> 在 <Math tex="(0,+\infty)" /> 上<strong>单调递增</strong>。</p>
                      <hr className="border-gray-300" />
                      <p className="font-bold text-gray-900"><Math tex="\Delta>0" /> 时，即 <Math tex="a^2-4>0" />，解得 <Math tex="a<-2" /> 或 <Math tex="a>2" />，再分两种情况讨论。</p>
                      <p><span className="font-bold text-blue-800 mr-2">情况二：<Math tex="\Delta>0" /> 且 <Math tex="a<-2" /></span>由韦达定理：两根之和 <Math tex="=x_1+x_2=-\dfrac{b}{a}=a" />，两根之积 <Math tex="=x_1 x_2=\dfrac{c}{a}=1" />。两根之积为正，<br />看和，因为 <Math tex="a<-2" />，所以两根之和为负，所以两根<strong>都为负</strong>，都在定义域左边。因式分解 <Math tex="g(x)=(x-x_1)(x-x_2)" />。</p>
                      <p className="pl-2">因为两根为负且不在定义域内，则 <Math tex="x_1<x_2<0" />，结合 <Math tex="x>0" />，得 <Math tex="x>0>x_2>x_1" />。</p>
                      <p className="pl-2">所以 <Math tex="x>x_1" /> 且 <Math tex="x>x_2" />，移项得 <Math tex="x-x_1>0" />，<Math tex="x-x_2>0" />，两式相乘为正，得 <Math tex="g(x)>0" />，<Math tex="f'(x)>0" />。</p>
                      <p className="pl-2"><strong>结论</strong>：所以当 <Math tex="\Delta>0" /> 且 <Math tex="a<-2" />，<Math tex="f(x)" /> 在 <Math tex="(0,+\infty)" /> 上<strong>单调递增</strong>。</p>
                      <hr className="border-gray-300" />
                      <p><span className="font-bold text-blue-800 mr-2">情况三：<Math tex="\Delta>0" /> 且 <Math tex="a>2" /></span>由韦达定理：两根之和 <Math tex="=x_1+x_2=-\dfrac{b}{a}=a" />，两根之积 <Math tex="=x_1 x_2=\dfrac{c}{a}=1" />。所以当 <Math tex="a>2" /> 时，两根之积为正，则两根<strong>都为正</strong>，都在定义域 <Math tex="(0,+\infty)" /> 内，两根为 <Math tex="x_1" />、<Math tex="x_2" />，设 <Math tex="x_1<x_2" />。</p>
                      <p className="pl-2">因式分解 <Math tex="g(x)=(x-x_1)(x-x_2)" />，把 <Math tex="(0,+\infty)" /> 切成 <Math tex="(0,x_1)" />、<Math tex="(x_1,x_2)" />、<Math tex="(x_2,+\infty)" />。</p>
                      <p className="pl-2">• 区间 <Math tex="(0,x_1)" />，即 <Math tex="0<x<x_1" /> 时，移项得 <Math tex="x-x_1<0" /> 且 <Math tex="x-x_2<0" />，相乘为正，得 <Math tex="g(x)>0" />，<Math tex="f'(x)>0" />，<Math tex="f(x)" /> <strong>单调递增</strong></p>
                      <p className="pl-2">• 区间 <Math tex="(x_1,x_2)" />，即 <Math tex="x_1<x<x_2" /> 时，移项得 <Math tex="x-x_1>0" /> 且 <Math tex="x-x_2<0" />，相乘为负，得 <Math tex="g(x)<0" />，<Math tex="f'(x)<0" />，<strong>单调递减</strong></p>
                      <p className="pl-2">• 区间 <Math tex="(x_2,+\infty)" />，即 <Math tex="x>x_2" /> 时，移项得 <Math tex="x-x_1>0" /> 且 <Math tex="x-x_2>0" />，相乘为正，得 <Math tex="g(x)>0" />，<Math tex="f'(x)>0" />，<Math tex="f(x)" /> <strong>单调递增</strong></p>
                    </div>
                    <hr className="border-gray-300" />
                    <div className="pl-2 grid grid-cols-[auto_1fr] gap-x-2">
                      <div className="font-bold whitespace-nowrap"><strong>④ 综上所述</strong>：</div>
                      <div className="space-y-0.5">
                        <p>• 当 <Math tex="a\le 2" /> <span className="border-b border-dashed border-gray-400">（即 <Math tex="a<-2" /> 或 <Math tex="-2\le a\le 2" />）</span>时，<Math tex="f(x)" /> 在 <Math tex="(0,+\infty)" /> 上<strong>单调递增</strong>。</p>
                        <p>• <Math tex="a>2" /> 时，增区间 <Math tex="(0,x_1)" /> 和 <Math tex="(x_2,+\infty)" />，减区间 <Math tex="(x_1,x_2)" />，其中 <Math tex="x_1=\dfrac{a-\sqrt{a^2-4}}{2}" />，<Math tex="x_2=\dfrac{a+\sqrt{a^2-4}}{2}" />。</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── 锚点 4 讲解：根 vs 端点 ── */}
                <div className="border border-gray-400 overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🎯 锚点 4 讲解：根 vs 端点（题目限定区间）</div>
                  <div className="px-2 py-1 space-y-1">

                    <p><strong>什么时候触发</strong>：题目给出限定区间 <Math tex="[m,n]" />（或开/半开），且求导后 <Math tex="f'(x)" /> 含至少一个含参零点 <Math tex="r(a)" />。</p>
                    <p className="pl-4">典型形式：在 <Math tex="[0,1]" /> 上讨论 <Math tex="f(x)" />、在 <Math tex="[1,2]" /> 上讨论 <Math tex="f(x)" />。</p>

                    <hr className="border-gray-300" />
                    <p><strong>为什么按"根 vs 端点"分</strong>：锚点 4 是<strong>叠加层</strong>——锚点 1-3 找出零点后，限定区间还要再叠加一层"零点是否落进 <Math tex="[m,n]" />"的判断：</p>
                    <p className="pl-4">• 零点<strong>落在区间外</strong>，对应因子在 <Math tex="[m,n]" /> 内<strong>不变号</strong>（恒正/恒负），可约掉，整段判一次；</p>
                    <p className="pl-4">• 零点<strong>落在区间内</strong>，用零点把 <Math tex="[m,n]" /> 切成两段判号；</p>
                    <p className="pl-4">• <strong>双零点一内一外</strong>，域外那根因子在 <Math tex="[m,n]" /> 内不变号可约，只用<strong>域内那根</strong>分段。</p>

                    <hr className="border-gray-300" />
                    <p><strong>怎么分（以 <Math tex="f'(x)=6(x-1)(x-a)" /> 在 <Math tex="[2,4]" /> 上为例）</strong>：</p>
                    <p>固定零点 <Math tex="x=1" /> 在区间 <Math tex="[2,4]" /> <strong>左外</strong>，所以 <Math tex="x-1>0" /> 在 <Math tex="[2,4]" /> 内恒正可约掉，<strong>只看含参零点 <Math tex="x=a" /> 与端点 <Math tex="2, 4" /> 的位置</strong>：</p>

                    <table className="w-full border-collapse text-center text-[0.88rem] [&_td]:!border-gray-500 [&_th]:!border-gray-500">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="border border-gray-500 px-2 py-0.5 w-[12%]">情况</th>
                          <th className="border border-gray-500 px-2 py-0.5 w-[25%]"><Math tex="a" /> 与 <Math tex="[2,4]" /> 位置</th>
                          <th className="border border-gray-500 px-2 py-0.5 w-[20%]"><Math tex="a" /> 的范围</th>
                          <th className="border border-gray-500 px-2 py-0.5">分段方式</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-500 px-2 py-0.5 font-bold">一</td>
                          <td className="border border-gray-500 px-2 py-0.5">区间左外</td>
                          <td className="border border-gray-500 px-2 py-0.5"><Math tex="a\le 2" /></td>
                          <td className="border border-gray-500 px-2 py-0.5 text-left"><Math tex="[2,4]" /> 整段判一次</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-500 px-2 py-0.5 font-bold">二</td>
                          <td className="border border-gray-500 px-2 py-0.5">区间内部</td>
                          <td className="border border-gray-500 px-2 py-0.5"><Math tex="2<a<4" /></td>
                          <td className="border border-gray-500 px-2 py-0.5 text-left">切成 <Math tex="(2,a)" />、<Math tex="(a,4)" /> 两段</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-500 px-2 py-0.5 font-bold">三</td>
                          <td className="border border-gray-500 px-2 py-0.5">区间右外</td>
                          <td className="border border-gray-500 px-2 py-0.5"><Math tex="a\ge 4" /></td>
                          <td className="border border-gray-500 px-2 py-0.5 text-left"><Math tex="[2,4]" /> 整段判一次</td>
                        </tr>
                      </tbody>
                    </table>

                    <p className="text-gray-700"><strong>📌 关键</strong>：含参零点跑到<strong>区间外，不分段</strong>；跑到<strong>区间内，用它分段</strong>。</p>

                  </div>
                </div>

                {/* ── 例 4：二次 + 区间限定（锚点 4） ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：<strong>例 4</strong>　<Math tex="f(x)=2x^3-3(a+1)x^2+6ax" /> 在 <Math tex="[2,4]" /> 上的单调性<span className="text-gray-700 font-normal ml-2">——同例 2 函数，多了限定区间</span></div>
                  <div className="px-2 py-0.5 space-y-1">
                    <p className="pl-2"><strong>① 求导（同例 2）</strong>：<Math tex="f'(x)=6(x-1)(x-a)" />，零点为 <Math tex="x=1" /> 和 <Math tex="x=a" />。</p>
                    <p className="pl-2"><strong>② 定号</strong>：固定零点 <Math tex="x=1" /> 在区间 <Math tex="[2,4]" /> <strong>左外</strong>。在 <Math tex="[2,4]" /> 上 <Math tex="x\ge 2>1" />，所以 <Math tex="x-1>0" /> <strong>恒正可约掉</strong>，<Math tex="f'" /> 的符号由 <Math tex="x-a" /> 决定。看<strong>含参零点 <Math tex="x=a" /> 与端点 <Math tex="2, 4" /> 的位置关系</strong>。</p>
                    <hr className="border-gray-300" />
                    <p className="font-bold text-gray-800">③ 按 <Math tex="a" /> 与端点 <Math tex="2, 4" /> 比较分类</p>
                    <div className="space-y-1">
                      <p><span className="font-bold text-blue-800 mr-2">情况一：当 <Math tex="a" /> 在区间左外时</span>即 <Math tex="a\le 2" />，结合 <Math tex="x\ge 2" />（因 <Math tex="x\in[2,4]" />），得 <Math tex="x\ge 2\ge a" />，移项得 <Math tex="x-a\ge 0" />。</p>
                      <p>又 <Math tex="x-1>0" />，两个因子相乘 <Math tex="\ge 0" />，故 <Math tex="f'(x)\ge 0" />，所以 <Math tex="f(x)" /> 在 <Math tex="[2,4]" /> 上<strong>单调递增</strong>。</p>
                      <hr className="border-gray-300" />
                      <p><span className="font-bold text-blue-800 mr-2">情况二：当 <Math tex="a" /> 在区间内部时</span>即 <Math tex="2<a<4" />，含参零点落在区间内，把区间 <Math tex="(2,4)" /> 分割成 <Math tex="(2,a)" /> 和 <Math tex="(a,4)" /> 两段。</p>
                      <p className="pl-2">• 区间 <Math tex="(2,a)" />，即 <Math tex="2<x<a" /> 时，移项得 <Math tex="x-a<0" />；又 <Math tex="x-1>0" />。一负一正相乘为负，<Math tex="f'(x)<0" />，<Math tex="f(x)" /> <strong>单调递减</strong>。</p>
                      <p className="pl-2">• 区间 <Math tex="(a,4)" />，即 <Math tex="a<x<4" /> 时，移项得 <Math tex="x-a>0" />；又 <Math tex="x-1>0" />。两正相乘为正，<Math tex="f'(x)>0" />，<Math tex="f(x)" /> <strong>单调递增</strong>。</p>
                      <hr className="border-gray-300" />
                      <p><span className="font-bold text-blue-800 mr-2">情况三：当 <Math tex="a" /> 在区间右外时</span>即 <Math tex="a\ge 4" />，结合 <Math tex="x\le 4" />（因 <Math tex="x\in[2,4]" />），得 <Math tex="x\le 4\le a" />，移项得 <Math tex="x-a\le 0" />。</p>
                      <p>又 <Math tex="x-1>0" />，两个因子相乘 <Math tex="\le 0" />，故 <Math tex="f'(x)\le 0" />，所以 <Math tex="f(x)" /> 在 <Math tex="[2,4]" /> 上<strong>单调递减</strong>。</p>
                    </div>
                    <hr className="border-gray-300" />
                    <div className="pl-2 grid grid-cols-[auto_1fr] gap-x-2">
                      <div className="font-bold whitespace-nowrap"><strong>④ 综上所述</strong>：</div>
                      <div className="space-y-0.5">
                        <p>• <Math tex="a\le 2" /> 时，<Math tex="f(x)" /> 在 <Math tex="[2,4]" /> 上单调递增。</p>
                        <p>• <Math tex="2<a<4" /> 时，<Math tex="f(x)" /> 在 <Math tex="(2,a)" /> 上单调递减，在 <Math tex="(a,4)" /> 上单调递增。</p>
                        <p>• <Math tex="a\ge 4" /> 时，<Math tex="f(x)" /> 在 <Math tex="[2,4]" /> 上单调递减。</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── 例 5：一次型（指数版）2024 全国甲卷 19 题 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：<strong>例 5</strong>　<Math tex="f(x)=a(e^x+a)-x" />，讨论单调性<span className="text-gray-700 font-normal ml-2">——2024 全国甲卷第 19 题，例 1 的指数姐妹题</span></div>
                  <div className="px-2 py-0.5 space-y-1">
                    <p className="pl-2"><strong>① 化简 + 求导</strong>：<Math tex="f(x)=ae^x+a^2-x" />，所以 <Math tex="f'(x)=ae^x-1" />（<Math tex="a^2" /> 是常数，导数为 0）。</p>
                    <p className="pl-2"><strong>② 定号 + 求零点</strong>：<Math tex="f'(x)" /> 的正负由 <Math tex="ae^x" /> 与 <Math tex="1" /> 的大小决定。<strong>先求零点</strong>：令 <Math tex="f'(x)=0" />，即 <Math tex="ae^x=1" />。</p>
                    <p className="pl-4">• 当 <Math tex="a<0" /> 时，由 <Math tex="e^x>0" /> 得 <Math tex="ae^x<0" />，<strong><Math tex="ae^x" /> 为负，不可能等于正数 <Math tex="1" /></strong>，方程无解，<strong>零点不存在</strong>；</p>
                    <p className="pl-4">• 当 <Math tex="a=0" /> 时，方程变为 <Math tex="0=1" />，无解，<strong>零点不存在</strong>；</p>
                    <p className="pl-4">• 当 <Math tex="a>0" /> 时，解得 <Math tex="e^x=\dfrac{1}{a}" />，取对数得 <Math tex="x=-\ln a" />，<strong>零点存在</strong>。</p>
                    <p className="pl-2 bg-blue-50 border-l-2 border-blue-300 px-2 py-0.5"><strong>💡 本题</strong>：<Math tex="a<0" /> 与 <Math tex="a=0" /> 结论一致（无零点、<Math tex="f'<0" />、递减），合并为 <Math tex="a\le 0" />。</p>
                    <p className="pl-2 bg-blue-50 border-l-2 border-blue-300 px-2 py-0.5"><strong>📌 合并条件</strong>：<strong>零点存在性、<Math tex="f'" /> 符号、单调方向</strong>三项全相同则可合并；任一不同则必须分开。</p>
                    <p className="pl-2 bg-blue-50 border-l-2 border-blue-300 px-2 py-0.5"><strong>✨ 合并方向</strong>：<Math tex="a=0" /> 与 <Math tex="a<0" /> 一致则并为 <Math tex="a\le 0" />；与 <Math tex="a>0" /> 一致则并为 <Math tex="a\ge 0" />；都不一致则单独成类。</p>
                    <p className="pl-2">所以按 <Math tex="a" /> 分 2 类（<Math tex="a\le 0" /> 与 <Math tex="a>0" />）。</p>
                    <hr className="border-gray-300" />
                    <p className="font-bold text-gray-800">③ 按 <Math tex="a" /> 分类</p>
                    <div className="space-y-1">
                      <p><span className="font-bold text-blue-800 mr-2">情况一：当 <Math tex="a\le 0" /> 时</span>因为 <Math tex="e^x>0" />，<Math tex="a\le 0" />，所以 <Math tex="ae^x\le 0" />，得 <Math tex="ae^x-1\le -1" /></p>
                      <p className="pl-2">所以 <Math tex="f'(x)<0" />，即 <Math tex="f(x)" /> 在 <Math tex="\mathbb{R}" /> 上<strong>单调递减</strong></p>
                      <hr className="border-gray-300" />
                      <p><span className="font-bold text-blue-800 mr-2">情况二：当 <Math tex="a>0" /> 时</span>由 ② 知零点 <Math tex="x=-\ln a" /> 存在，把 <Math tex="\mathbb{R}" /> 分割为 <Math tex="(-\infty,-\ln a)" /> 和 <Math tex="(-\ln a,+\infty)" /> 两段</p>
                      <p className="pl-2">• 当 <Math tex="x<-\ln a" /> 时，两边同取 <Math tex="e" /> 得 <Math tex="e^x<e^{-\ln a}" />。又 <Math tex="e^{-\ln a}=\dfrac{1}{a}" />，所以 <Math tex="e^x<\dfrac{1}{a}" />。同乘 <Math tex="a" /> 得 <Math tex="ae^x<1" />，移项得 <Math tex="ae^x-1<0" /></p>
                      <p className="pl-2">因为 <Math tex="f'(x)<0" />，得 <Math tex="f(x)" /> 在区间 <Math tex="(-\infty,-\ln a)" /> 上<strong>单调递减</strong></p>
                      <p className="pl-2">• 当 <Math tex="x>-\ln a" /> 时，两边同取 <Math tex="e" /> 得 <Math tex="e^x>\dfrac{1}{a}" />，得 <Math tex="ae^x>1" />，移项得 <Math tex="ae^x-1>0" /></p>
                      <p className="pl-2">因为 <Math tex="f'(x)>0" />，所以 <Math tex="f(x)" /> 在区间 <Math tex="(-\ln a,+\infty)" /> 上<strong>单调递增</strong></p>
                    </div>
                    <hr className="border-gray-300" />
                    <div className="pl-2 grid grid-cols-[auto_1fr] gap-x-2">
                      <div className="font-bold whitespace-nowrap"><strong>④ 综上所述</strong>：</div>
                      <div className="space-y-0.5">
                        <p>• <Math tex="a\le 0" /> 时，<Math tex="f(x)" /> 在 <Math tex="\mathbb{R}" /> 上单调递减；</p>
                        <p>• <Math tex="a>0" /> 时，<Math tex="f(x)" /> 在 <Math tex="(-\infty,-\ln a)" /> 上递减，在 <Math tex="(-\ln a,+\infty)" /> 上递增。</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── 技巧版：直接解 f'>0 / f'<0 ── */}
                <div className="border border-gray-500 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-500 bg-gray-100">⚡ 技巧版：跳过判号，直接解 <Math tex="f'(x)>0" /> 和 <Math tex="f'(x)<0" /><span className="font-normal ml-2">——以例 5 情况二为示范</span></div>
                  <div className="px-2 py-1 space-y-0.5">
                    <p>• 解 <Math tex="f'(x)>0" />：<Math tex="ae^x-1>0\Rightarrow ae^x>1\Rightarrow e^x>\dfrac{1}{a}\Rightarrow x>-\ln a" /> → <strong>增区间</strong> <Math tex="(-\ln a,+\infty)" /></p>
                    <hr className="border-gray-300" />
                    <p>• 解 <Math tex="f'(x)<0" />：<Math tex="ae^x-1<0\Rightarrow ae^x<1\Rightarrow e^x<\dfrac{1}{a}\Rightarrow x<-\ln a" /> → <strong>减区间</strong> <Math tex="(-\infty,-\ln a)" /></p>
                    <p><strong>💡 原理</strong>：解 <Math tex="f'>0" /> 得到的 <Math tex="x" /> 范围 = 增区间，解 <Math tex="f'<0" /> 得到的 <Math tex="x" /> 范围 = 减区间，零点自动作为边界出现。<strong>省掉判号步骤</strong></p>
                    <p><strong>📌 适用范围</strong>：<Math tex="f'(x)" /> 能解出 <Math tex="x" /> 的显式范围时都能用</p>
                    <table className="w-full border-collapse border border-gray-400 text-[0.9rem] bg-white">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-400 px-1.5 py-0.5 font-bold text-left whitespace-nowrap">类型</th>
                          <th className="border border-gray-400 px-1.5 py-0.5 font-bold text-left">例子</th>
                          <th className="border border-gray-400 px-1.5 py-0.5 font-bold text-center whitespace-nowrap">适用</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-400 px-1.5 py-0.5 whitespace-nowrap">一次型</td>
                          <td className="border border-gray-400 px-1.5 py-0.5"><Math tex="ax-1" />、<Math tex="ae^x-1" /></td>
                          <td className="border border-gray-400 px-1.5 py-0.5 text-center text-green-700 font-bold">✓</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 px-1.5 py-0.5 whitespace-nowrap">分式型</td>
                          <td className="border border-gray-400 px-1.5 py-0.5"><Math tex="\dfrac{ax-1}{x}" /></td>
                          <td className="border border-gray-400 px-1.5 py-0.5 text-center text-green-700 font-bold">✓</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 px-1.5 py-0.5 whitespace-nowrap">二次型已分解</td>
                          <td className="border border-gray-400 px-1.5 py-0.5"><Math tex="(x-1)(x-a)" />（看开口方向取"两根之外/之间"）</td>
                          <td className="border border-gray-400 px-1.5 py-0.5 text-center text-green-700 font-bold">✓</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 px-1.5 py-0.5 whitespace-nowrap">解不出零点</td>
                          <td className="border border-gray-400 px-1.5 py-0.5"><Math tex="f'=e^x-2x" />、<Math tex="f'=\ln x+x" /></td>
                          <td className="border border-gray-400 px-1.5 py-0.5 text-center text-red-600 font-bold">✗</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* ── 答题规范 + 10 个高考扣分点 ── */}
                <div className="border border-red-400 rounded overflow-hidden -mt-px bg-red-50">
                  <div className="px-2 py-1 font-bold text-red-900 border-b border-red-300 bg-red-100">⚠️ 答题规范 · 10 个高考扣分点</div>
                  <div className="px-2 py-1 space-y-1 text-[0.88rem]">
                    <p><strong>① 没写定义域</strong>：含 <Math tex="\ln" /> 必写 <Math tex="x>0" />；含分母必排除零点；含 <Math tex="\sqrt{\,}" /> 必排除根号内为负。<span className="text-red-700">扣 1-2 分</span></p>
                    <p><strong>② 求导 / 化简错</strong>：基本功失误最高频，特别是 <Math tex="(uv)'" />、<Math tex="(u/v)'" />、复合函数链式法则；导错后续全错（连环扣）。<span className="text-red-700">扣 2-3 分</span></p>
                    <p><strong>③ 没显式声明 <Math tex="f'(x)" /> 的符号由谁决定</strong>：分式必先说"分母恒正/恒负，符号由分子定"，否则阅卷看不出判号思路。<span className="text-red-700">扣 1 分</span></p>
                    <p><strong>④ 没声明分类标准</strong>：开头要明写"按 <Math tex="a" /> 分类"或"按 <Math tex="\Delta" /> 分类"。<span className="text-red-700">扣 1 分</span></p>
                    <p><strong>⑤ 漏掉边界 / 临界值</strong>：<Math tex="a=0" /> 与临界值（如 <Math tex="a=\pm 2" />）必须单独列出，不能并入两侧情况。<span className="text-red-700">扣 1-2 分</span></p>
                    <p><strong>⑥ 分类不互斥或不完备</strong>：参数 <Math tex="a" /> 的所有取值必须<strong>不重不漏</strong>覆盖，区间端点归属要明确。<span className="text-red-700">扣 1-2 分</span></p>
                    <p><strong>⑦ 重根当变号根</strong>：<Math tex="\Delta=0" /> 时分子为完全平方，<strong>不变号</strong>，不能分段。<span className="text-red-700">扣 2-3 分</span></p>
                    <p><strong>⑧ 单调区间用 <Math tex="\cup" /> 连接</strong>：多段单调区间要<strong>分写</strong>，不能并集（单调性是局部性质）。<span className="text-red-700">扣 2 分</span></p>
                    <p><strong>⑨ "增/减函数" 与 "增/减区间" 混淆</strong>：前者指整个定义域，后者指子区间，题问什么写什么。<span className="text-red-700">扣 1 分</span></p>
                    <p><strong>⑩ 缺综上 / 结论不规范</strong>：必须"综上所述"汇总，含<strong>函数名+区间+单调方向</strong>，用 <Math tex="a" /> 表述。<span className="text-red-700">扣 1-2 分</span></p>
                  </div>
                </div>

                {/* ── 即时练习 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="" questions={derivMonoDiscussPractice} explanations={derivativeApplication2Explanations} hideBlankLine optionCols={1} printOptionCols={1}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivMonoDiscussPractice} printOptionCols={1} columns={1} />
                </div>

              </div>
            </Collapsible>
          </section>





        </div>
      </LessonLayout>
      <UnifiedDebugToggle />
    </div>
  );
}
