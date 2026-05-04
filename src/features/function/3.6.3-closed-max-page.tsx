import { Math, Collapsible, PageHeader, LessonLayout, ExportButton, PracticeCard, PrintQuestions, UnifiedDebugToggle } from '@/components/shared';
import { closedMaxProgressItems } from './data/3.6.3/3.6.3-closed-max-progress';
import { closedIntervalMaxStepsPractice, closedMaxExample1Practice, closedMaxExample2Practice, closedMaxExample3Practice, closedMaxExample4Practice, closedMaxExample5Practice } from './data/3.6.3/3.6.3-closed-max-practice';
import { useProgress } from '@/hooks';
import { closedMaxExplanations } from './3.6.3-closed-max-answers';

export function ClosedMaxPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('closed-max', closedMaxProgressItems);

  return (
    <div>
      <div className="[&_h1]:!mb-0 [&_.flex.flex-wrap]:!mt-1">
        <PageHeader
          stage="第三阶段 · 函数思维"
          title="3.6.3 闭区间最值"
          tags={[]}
        />
      </div>

      <LessonLayout
        progressItems={progressItems}
        onToggle={toggleProgress}
        sidebarTop={<ExportButton title="3.6.3 闭区间最值" />}
      >
        <div className="[&_.rounded-xl]:mb-0 [&_.rounded-xl>.flex.items-center]:py-0.5 [&_.rounded-xl>div:last-child]:px-0 [&_.rounded-xl>div:last-child]:pt-0 [&_.rounded-xl>div:last-child]:pb-0 [&_.rounded-xl_button>span]:font-bold [&_.rounded-xl_button>span]:text-gray-900">

          <section id="cm-main" className="mb-0 scroll-mt-4">
            <Collapsible title="一、闭区间最值（★ 基础送分）" defaultOpen storageKey="closed-max:main">
              <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">



                {/* ── 4.2.0 高考定位 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🎯 高考定位 · 闭区间最值</div>
                  <div className="grid grid-cols-[52fr_48fr]">
                    <div className="px-2 py-0.5 space-y-1 border-r border-gray-300">
                      <p><strong>考查频率</strong>：导数大题<strong>第（1）（2）问高频</strong>，2024-2025 全国卷至少考 1 次；选择填空也常考。</p>
                      <p><strong>难度跨度</strong>：从基础（直接求闭区间最值）到中档（结合不等式 / 反求参数）。</p>
                      <p><strong>得分策略</strong>：</p>
                      <p className="pl-2">• <strong>必拿分</strong>：不含参函数闭区间最值（基础送分）</p>
                      <p className="pl-2">• <strong>力争分</strong>：识别单调函数走简化路径（节省时间）</p>
                      <p className="pl-2">• <strong>易错点</strong>：漏端点 / 极值≠最值 / 驻点出区间（详见下方警示）</p>
                    </div>
                    <div className="px-2 py-0.5 space-y-1">
                      <p className="font-bold mb-0.5">📋 4 大常考题型</p>
                      <table className="w-full border-collapse text-[0.85rem] [&_tr>*:first-child]:border-l-0 [&_tr>*:last-child]:border-r-0">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="border border-gray-300 px-1 py-0.5">题型</th>
                            <th className="border border-gray-300 px-1 py-0.5">特征</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-1 py-0.5">① 多项式闭区间</td>
                            <td className="border border-gray-300 px-1 py-0.5">驻点都在区间内，比较 4 个值</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-1 py-0.5">② 含 <Math tex="\ln" /> / <Math tex="e^x" /></td>
                            <td className="border border-gray-300 px-1 py-0.5">先验证定义域，再求驻点</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-1 py-0.5">③ 单调函数</td>
                            <td className="border border-gray-300 px-1 py-0.5">直接两端点，无需列表</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-1 py-0.5">④ 反求参数</td>
                            <td className="border border-gray-300 px-1 py-0.5">已知最值列方程求 <Math tex="a" />（4.4 详讲）</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* ── 概念区分卡：极值 vs 最值（核心认知） ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-purple-800 border-b border-gray-400 bg-purple-50">📘 核心区分：极值 vs 最值（高考必考辨析）</div>
                  <div className="px-2 py-0.5 space-y-0.5">
                    <table className="w-full border-collapse text-[0.9rem] -mt-0.5 -mx-2 [width:calc(100%+1rem)] [&_th]:border [&_th]:border-gray-300 [&_th]:px-2 [&_th]:py-0.5 [&_td]:border [&_td]:border-gray-300 [&_td]:px-2 [&_td]:py-0.5 [&_tr>*:first-child]:border-l-0 [&_tr>*:last-child]:border-r-0">
                      <thead className="bg-gray-50">
                        <tr>
                          <th>对比项</th>
                          <th>极值（local）</th>
                          <th>最值（global）</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="font-bold">概念</td>
                          <td><strong>局部</strong>最值（邻域内最大/最小）</td>
                          <td><strong>全局</strong>最值（整个区间最大/最小）</td>
                        </tr>
                        <tr>
                          <td className="font-bold">候选位置</td>
                          <td>只能在<strong>驻点</strong>处</td>
                          <td><strong>驻点</strong> ∪ <strong>端点</strong></td>
                        </tr>
                        <tr>
                          <td className="font-bold">存在性</td>
                          <td>不一定存在（如单调函数无极值）</td>
                          <td><strong>闭区间连续函数一定存在</strong>（最值定理）</td>
                        </tr>
                        <tr>
                          <td className="font-bold">判定方法</td>
                          <td><Math tex="f'" /> 在驻点两侧<strong>变号</strong></td>
                          <td>所有候选点函数值<strong>比较大小</strong></td>
                        </tr>
                        <tr>
                          <td className="font-bold">数量关系</td>
                          <td>可能多个极大/极小值</td>
                          <td><strong>最大值 / 最小值各一个</strong>（数值唯一，但取得位置可能多个）</td>
                        </tr>
                      </tbody>
                    </table>
                    <hr className="border-gray-300" />
                    <p><strong>🔑 核心关系</strong>：<Math tex="\text{最大值}=\max\{\,\text{极大值},\ \text{端点值}\,\}" /></p>
                    <p className="pl-[6.5em]"><Math tex="\text{最小值}=\min\{\,\text{极小值},\ \text{端点值}\,\}" /></p>
                    <p><strong>常见误区</strong>：</p>
                    <p className="pl-2">• ❌ "极大值就是最大值" —— <strong>不一定</strong>，端点值可能更大</p>
                    <p className="pl-2">• ❌ "极大值一定大于极小值" —— <strong>不一定</strong>。极值是<strong>局部</strong>概念（在某个邻域内的极值），不是全局；不同区段的极值只是各自段内的局部极值，互相之间没有大小关系（见 4.1 例 4 <Math tex="x+1/x" />，极大值 -2 反而小于极小值 2）</p>
                    <p className="pl-2">• ✅ "闭区间上一定有最值，但不一定有极值" —— 因为极值存在的条件是<strong>单调性发生变化的点</strong>，而指定区间内如果单调性没变化（即整段单调），则<strong>不存在极值</strong>，这时<strong>端点就是最值</strong>。比如 <Math tex="f(x)=x" /> 在 <Math tex="[0,1]" /> 上单调递增，<Math tex="f(0)=0,\ f(1)=1" /> 即为最值</p>
                  </div>
                </div>

                {/* ── 求最值 4 步流程 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🔧 求闭区间最值标准 4 步流程</div>
                  <div className="px-2 py-1 space-y-0.5">
                    <p>① <strong>验证定义域</strong>：检查闭区间 <Math tex="[a,b]" /> 是否完全包含在函数定义域内（含 <Math tex="\ln" />、分式、根号时尤其重要）</p>
                    <p>② <strong>求导找驻点</strong>：解 <Math tex="f'(x)=0" />，<strong className="text-red-700">只保留落在 <Math tex="(a,b)" /> 内的驻点</strong>（区间外的驻点不参与比较）</p>
                    <div className="grid grid-cols-[1fr_1fr] gap-2">
                      <div>
                        <p>③ <strong>列出候选清单 + 算函数值</strong>：</p>
                        <p className="pl-4">• <strong>区间内驻点</strong> <Math tex="x_1, x_2, \ldots" />（来自 ②）</p>
                        <p className="pl-4">• <strong>左端点</strong> <Math tex="x=a" /></p>
                        <p className="pl-4">• <strong>右端点</strong> <Math tex="x=b" /></p>
                        <p className="pl-4">分别代入<strong className="text-red-700">原函数 <Math tex="f(x)" /></strong>（不是 <Math tex="f'" />！）算函数值</p>
                      </div>
                      <div className="border-l border-gray-300 pl-2 text-[0.85rem] text-gray-700">
                        <p className="font-bold text-gray-800">📌 举例：<Math tex="f(x)=x^2-4x" /> 在 <Math tex="[0,3]" /> 上</p>
                        <p className="pl-2">驻点：解 <Math tex="f'(x)=2x-4=0" /> 得 <Math tex="x=2" />（在区间内 ✓）</p>
                        <p className="pl-2">候选 = <Math tex="\{0,\,2,\,3\}" />（驻点 + 两端点）</p>
                        <p className="pl-2">代入 <Math tex="f" />：<Math tex="f(0)=0,\ f(2)=-4,\ f(3)=-3" /></p>
                        <p className="pl-2">⇒ <strong>最大值 0</strong>（在 <Math tex="x=0" />），<strong>最小值 -4</strong>（在 <Math tex="x=2" />）</p>
                      </div>
                    </div>
                    <p>④ <strong>比较大小</strong>：所有候选值中<strong>最大者 = 最大值</strong>，<strong>最小者 = 最小值</strong>。可同时在多个点取得（数值唯一即可）</p>
                    <hr className="border-gray-300 my-1" />
                    <p className="text-gray-700"><strong>💡 一句话口诀</strong>：<strong>驻点 + 端点 = 候选；比较大小定最值</strong>。⚠️ <strong>找驻点用 <Math tex="f'" />，算最值用 <Math tex="f" /></strong>，别混淆。</p>
                  </div>
                </div>

                {/* ── 4 步流程后即时练习 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="✏️ 4 步流程练习（多项式闭区间最值）" questions={closedIntervalMaxStepsPractice} explanations={closedMaxExplanations} hideBlankLine optionCols={1} printOptionCols={1}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={closedIntervalMaxStepsPractice} printOptionCols={1} columns={1} />
                </div>

                {/* ── 例 1 详解：多项式（驻点都在内 + 极值与端点平手） ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px text-[0.85rem]">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：<strong>例 1</strong>　求 <Math tex="f(x)=x^3-6x^2+9x+1" /> 在 <Math tex="[0,4]" /> 上的最值<span className="font-normal ml-2">——多项式经典母题</span></div>
                  <div className="px-2 py-1 space-y-1">
                    <p>① <strong>定义域</strong>：<Math tex="\mathbb{R}" />（多项式无限制），区间 <Math tex="[0,4]" /> 完全包含在定义域内 ✓</p>
                    <hr className="border-gray-300" />
                    <p>② <strong>求导找驻点</strong>：<Math tex="f'(x)=3x^2-12x+9=3(x-1)(x-3)" />（因式分解）</p>
                    <p className="pl-4">令 <Math tex="f'(x)=0" />，即 <Math tex="3(x-1)(x-3)=0" />，解得 <Math tex="x=1" /> 或 <Math tex="x=3" /></p>
                    <p className="pl-4">两个驻点 <strong>都在 <Math tex="(0,4)" /> 内</strong> ✓，全部保留</p>
                    <hr className="border-gray-300" />
                    <div className="grid grid-cols-[auto_1fr] gap-4">
                      <div>
                        <p>③ <strong>列候选清单 + 算函数值</strong>：</p>
                        <p className="pl-2">候选点 = 驻点 <Math tex="\{1,3\}" /> ∪ 端点 <Math tex="\{0,4\}" /></p>
                        <table className="ml-4 mt-1 border-collapse text-center text-[0.9rem] [&_td]:border [&_td]:border-gray-300 [&_th]:border [&_th]:border-gray-300 [&_td]:px-2 [&_td]:py-0.5 [&_th]:px-2 [&_th]:py-0.5">
                          <thead className="bg-gray-50">
                            <tr>
                              <th><Math tex="x" /></th>
                              <th><Math tex="f(x)" /></th>
                              <th>身份</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="font-bold"><Math tex="0" /></td>
                              <td><Math tex="f(0)=1" /></td>
                              <td>左端点</td>
                            </tr>
                            <tr>
                              <td className="font-bold"><Math tex="1" /></td>
                              <td><Math tex="f(1)=1-6+9+1=5" /></td>
                              <td className="text-red-700 font-bold">驻点（极大值点）</td>
                            </tr>
                            <tr>
                              <td className="font-bold"><Math tex="3" /></td>
                              <td><Math tex="f(3)=27-54+27+1=1" /></td>
                              <td className="text-blue-700 font-bold">驻点（极小值点）</td>
                            </tr>
                            <tr>
                              <td className="font-bold"><Math tex="4" /></td>
                              <td><Math tex="f(4)=64-96+36+1=5" /></td>
                              <td>右端点</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="space-y-1">
                        <p>④ <strong>比较大小定最值</strong>：</p>
                        <p className="pl-2">候选值集合：<Math tex="\{1,\,5,\,1,\,5\}" /></p>
                        <p className="pl-2">• <Math tex="\max=5" />，在 <Math tex="x=1" />（极大值点）和 <Math tex="x=4" />（右端点）<strong>同时取得</strong></p>
                        <p className="pl-2">• <Math tex="\min=1" />，在 <Math tex="x=0" />（左端点）和 <Math tex="x=3" />（极小值点）<strong>同时取得</strong></p>
                        <hr className="border-gray-300" />
                        <p><strong>结论</strong>：</p>
                        <p className="pl-2">• <strong>最大值为 5</strong>（<Math tex="x=1" /> 和 <Math tex="x=4" /> 处取得）</p>
                        <p className="pl-2">• <strong>最小值为 1</strong>（<Math tex="x=0" /> 和 <Math tex="x=3" /> 处取得）</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── 例 1 后即时练习 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="✏️ 例 1 同款练习（多项式闭区间最值）" questions={closedMaxExample1Practice} explanations={closedMaxExplanations} hideBlankLine optionCols={1} printOptionCols={1}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={closedMaxExample1Practice} printOptionCols={1} columns={1} />
                </div>

                {/* ── 例 2 详解：含 ln（极小值就是最小值） ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px text-[0.85rem]">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：<strong>例 2</strong>　求 <Math tex="f(x)=x-2\ln x" /> 在 <Math tex="[1,e]" /> 上的最值<span className="font-normal ml-2">——含 <Math tex="\ln" />，先验定义域</span></div>
                  <div className="px-2 py-1 space-y-1">
                    <p>① <strong>定义域</strong>：<Math tex="\ln x" /> 要求真数 <Math tex="x>0" />，所以定义域为 <Math tex="(0,+\infty)" />，区间 <Math tex="[1,e]" /> 完全包含在定义域内 ✓<span className="text-red-700 ml-2"><strong>⚠️ 含 <Math tex="\ln" /> 必先写定义域</strong></span></p>
                    <hr className="border-gray-300" />
                    <p>② <strong>求导找驻点</strong>：<Math tex="f'(x)=1-\dfrac{2}{x}=\dfrac{x-2}{x}" />（通分）</p>
                    <p className="pl-4">分母 <Math tex="x>0" /> 恒正可约，看分子 <Math tex="x-2" />。令 <Math tex="x-2=0" /> 得驻点 <Math tex="x=2" /></p>
                    <p className="pl-4">驻点 <Math tex="x=2" /> <strong>在 <Math tex="(1,e)" /> 内</strong>（因 <Math tex="e\approx 2.718>2" />）✓，保留</p>
                    <hr className="border-gray-300" />
                    <div className="grid grid-cols-[auto_1fr] gap-4">
                      <div>
                        <p>③ <strong>列候选清单 + 算函数值</strong>：</p>
                        <p className="pl-2">候选点 = 驻点 <Math tex="\{2\}" /> ∪ 端点 <Math tex="\{1,e\}" /></p>
                        <table className="ml-4 mt-1 border-collapse text-center text-[0.9rem] [&_td]:border [&_td]:border-gray-300 [&_th]:border [&_th]:border-gray-300 [&_td]:px-2 [&_td]:py-0.5 [&_th]:px-2 [&_th]:py-0.5">
                          <thead className="bg-gray-50">
                            <tr>
                              <th><Math tex="x" /></th>
                              <th><Math tex="f(x)" /></th>
                              <th>身份</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="font-bold"><Math tex="1" /></td>
                              <td><Math tex="f(1)=1-2\ln 1=1" /></td>
                              <td>左端点</td>
                            </tr>
                            <tr>
                              <td className="font-bold"><Math tex="2" /></td>
                              <td><Math tex="f(2)=2-2\ln 2" /></td>
                              <td className="text-blue-700 font-bold">驻点（极小值点）</td>
                            </tr>
                            <tr>
                              <td className="font-bold"><Math tex="e" /></td>
                              <td><Math tex="f(e)=e-2\ln e=e-2" /></td>
                              <td>右端点</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="space-y-1">
                        <p>④ <strong>用单调性定最值</strong>：</p>
                        <p className="pl-2"><strong>判断单调性</strong>（看分子 <Math tex="x-2" />）：</p>
                        <p className="pl-4">• 在 <Math tex="(1,2)" />：<Math tex="x-2<0" />，<Math tex="f'(x)<0" /> → <Math tex="f(x)" /> <strong>递减</strong></p>
                        <p className="pl-4">• 在 <Math tex="(2,e)" />：<Math tex="x-2>0" />，<Math tex="f'(x)>0" /> → <Math tex="f(x)" /> <strong>递增</strong></p>
                        <p className="pl-2">先减后增 → <Math tex="f(2)" /> 是谷底 → <Math tex="\min=f(2)=2-2\ln 2" /></p>
                        <p className="pl-2"><strong>最大值在两端点中</strong>：比 <Math tex="f(1)=1" /> 与 <Math tex="f(e)=e-2\approx 0.718" />，故 <Math tex="\max=f(1)=1" /></p>
                      </div>
                    </div>
                    <hr className="border-gray-300" />
                    <p><strong>结论</strong>：<strong>最大值为 1</strong>（在 <Math tex="x=1" /> 处取得），<strong>最小值为 <Math tex="2-2\ln 2" /></strong>（在 <Math tex="x=2" /> 处取得）</p>
                    <hr className="border-gray-300" />
                    <p><strong>💡 含 <Math tex="\ln" /> 题的关键</strong>：第一步必写定义域 <Math tex="x>0" />；通分后分母 <Math tex="x" /> 恒正可约，只看分子判号。</p>
                  </div>
                </div>

                {/* ── 例 2 后即时练习 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="✏️ 例 2 同款练习（含 ln 闭区间最值）" questions={closedMaxExample2Practice} explanations={closedMaxExplanations} hideBlankLine optionCols={1} printOptionCols={1}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={closedMaxExample2Practice} printOptionCols={1} columns={1} />
                </div>

                {/* ── 例 3 详解：含 eˣ ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px text-[0.85rem]">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：<strong>例 3</strong>　求 <Math tex="f(x)=e^x-2x" /> 在 <Math tex="[-1,1]" /> 上的最值<span className="font-normal ml-2">——含 <Math tex="e^x" />，驻点带 <Math tex="\ln" /></span></div>
                  <div className="px-2 py-1 space-y-1">
                    <p>① <strong>定义域</strong>：<Math tex="\mathbb{R}" />（<Math tex="e^x" /> 处处定义），区间 <Math tex="[-1,1]" /> 完全包含 ✓</p>
                    <hr className="border-gray-300" />
                    <p>② <strong>求导找驻点</strong>：<Math tex="f'(x)=e^x-2" /></p>
                    <p className="pl-4">令 <Math tex="f'(x)=0" />，即 <Math tex="e^x=2" />，化为对数形式 <Math tex="x=\log_e 2=\ln 2" />，得驻点 <Math tex="x=\ln 2" /></p>
                    <p className="pl-4">驻点 <Math tex="x=\ln 2" /> <strong>在 <Math tex="(-1,1)" /> 内</strong>（因 <Math tex="\ln 1<\ln 2<\ln e" />，得 <Math tex="0<\ln 2<1" />）✓，保留</p>
                    <hr className="border-gray-300" />
                    <div className="grid grid-cols-[auto_1fr] gap-4">
                      <div>
                        <p>③ <strong>列候选清单 + 算函数值</strong>：</p>
                        <p className="pl-2">候选点 = 驻点 <Math tex="\{\ln 2\}" /> ∪ 端点 <Math tex="\{-1,1\}" /></p>
                        <table className="ml-4 mt-1 border-collapse text-center text-[0.9rem] [&_td]:border [&_td]:border-gray-300 [&_th]:border [&_th]:border-gray-300 [&_td]:px-2 [&_td]:py-0.5 [&_th]:px-2 [&_th]:py-0.5">
                          <thead className="bg-gray-50">
                            <tr>
                              <th><Math tex="x" /></th>
                              <th><Math tex="f(x)" /></th>
                              <th>身份</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="font-bold"><Math tex="-1" /></td>
                              <td><Math tex="f(-1)=e^{-1}+2=\dfrac{1}{e}+2" /></td>
                              <td>左端点</td>
                            </tr>
                            <tr>
                              <td className="font-bold"><Math tex="\ln 2" /></td>
                              <td><Math tex="f(\ln 2)=e^{\ln 2}-2\ln 2=2-2\ln 2" /></td>
                              <td className="text-blue-700 font-bold">驻点（极小值点）</td>
                            </tr>
                            <tr>
                              <td className="font-bold"><Math tex="1" /></td>
                              <td><Math tex="f(1)=e-2" /></td>
                              <td>右端点</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="space-y-1">
                        <p>④ <strong>用单调性定最值</strong>：</p>
                        <p className="pl-2"><strong>判断单调性</strong>（看 <Math tex="e^x-2" />，<Math tex="e^x" /> 单调递增）：</p>
                        <p className="pl-4">• 在 <Math tex="(-1,\ln 2)" />：<Math tex="e^x<2" />，<Math tex="f'(x)<0" /> → <Math tex="f(x)" /> <strong>递减</strong></p>
                        <p className="pl-4">• 在 <Math tex="(\ln 2,1)" />：<Math tex="e^x>2" />，<Math tex="f'(x)>0" /> → <Math tex="f(x)" /> <strong>递增</strong></p>
                        <p className="pl-2">先减后增 → <Math tex="f(\ln 2)" /> 是谷底 → <Math tex="\min=2-2\ln 2" /></p>
                        <p className="pl-2"><strong>最大值在两端点中</strong>：比 <Math tex="f(-1)=\dfrac{1}{e}+2\approx 2.368" /> 与 <Math tex="f(1)=e-2\approx 0.718" />，故 <Math tex="\max=f(-1)=\dfrac{1}{e}+2" /></p>
                      </div>
                    </div>
                    <hr className="border-gray-300" />
                    <p><strong>结论</strong>：<strong>最大值为 <Math tex="\dfrac{1}{e}+2" /></strong>（在 <Math tex="x=-1" /> 处取得），<strong>最小值为 <Math tex="2-2\ln 2" /></strong>（在 <Math tex="x=\ln 2" /> 处取得）</p>
                    <hr className="border-gray-300" />
                    <p><strong>💡 含 <Math tex="e^x" /> 题的关键</strong>：<Math tex="e^x" /> 处处定义且恒正；驻点常带 <Math tex="\ln" />（解 <Math tex="e^x=k" /> 得 <Math tex="x=\ln k" />）；判号时利用 <Math tex="e^x" /> 的单调性即可。</p>
                  </div>
                </div>

                {/* ── 例 3 后即时练习 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="✏️ 例 3 同款练习（含 eˣ 闭区间最值）" questions={closedMaxExample3Practice} explanations={closedMaxExplanations} hideBlankLine optionCols={1} printOptionCols={1}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={closedMaxExample3Practice} printOptionCols={1} columns={1} />
                </div>

                {/* ── 简化判定（单调函数） ── */}
                <div className="border border-amber-400 rounded overflow-hidden -mt-px bg-white">
                  <div className="px-2 py-1 font-bold text-amber-900 border-b border-amber-300 bg-amber-100">⚡ 简化判定：单调函数直接走两端点</div>
                  <div className="px-2 py-0.5 space-y-0.5 bg-white">
                    <p>如果能<strong>提前判断出 <Math tex="f(x)" /> 在 <Math tex="[a,b]" /> 上单调</strong>（即 <Math tex="f'(x)" /> 在区间内不变号），就<strong>跳过求驻点和列表</strong>，直接用两端点：</p>
                    <table className="w-full border-collapse border border-gray-400 text-[0.9rem] text-center bg-white [&_th]:border [&_th]:border-gray-400 [&_th]:px-2 [&_th]:py-0.5 [&_td]:border [&_td]:border-gray-400 [&_td]:px-2 [&_td]:py-0.5">
                      <thead className="bg-white">
                        <tr>
                          <th>情况</th>
                          <th>判断条件</th>
                          <th className="text-red-700">最大值</th>
                          <th className="text-blue-700">最小值</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="font-bold">单调递增</td>
                          <td>在 <Math tex="[a,b]" /> 上，<Math tex="f'(x)\ge 0" /> 恒成立</td>
                          <td className="text-red-700 font-bold"><Math tex="f(b)" /></td>
                          <td className="text-blue-700 font-bold"><Math tex="f(a)" /></td>
                        </tr>
                        <tr className="bg-white">
                          <td className="font-bold">单调递减</td>
                          <td>在 <Math tex="[a,b]" /> 上，<Math tex="f'(x)\le 0" /> 恒成立</td>
                          <td className="text-red-700 font-bold"><Math tex="f(a)" /></td>
                          <td className="text-blue-700 font-bold"><Math tex="f(b)" /></td>
                        </tr>
                      </tbody>
                    </table>
                    <p><strong>📌 怎么判断单调</strong>：</p>
                    <p className="pl-2">• <strong>整体 <Math tex="\ge 0" /> 或 <Math tex="\le 0" /> 显而易见</strong>：如 <Math tex="f'=e^x+1>0" />（恒正）、<Math tex="f'=-x^2-1<0" />（恒负）</p>
                    <p className="pl-2">• <strong>因式分析在区间内不变号</strong>：如 <Math tex="f'=(x-3)" /> 在 <Math tex="[5,10]" /> 上恒正</p>
                    <p className="pl-2">• <strong>区间内无驻点</strong>：解 <Math tex="f'=0" /> 得到的驻点都不在 <Math tex="(a,b)" /> 内 → 区间内不变号</p>
                    <p className="text-gray-700"><strong>💡 适用场景</strong>：考试时优先尝试这条路，能秒杀就<strong>省 2-3 分钟</strong>。判断不出再走标准 4 步流程。</p>
                  </div>
                </div>

                {/* ── 例 4 详解：含参讨论闭区间最值（高考压轴母题） ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px text-[0.85rem]">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：<strong>例 4</strong>　求 <Math tex="f(x)=x^3-3ax^2+2" /> 在 <Math tex="[0,2]" /> 上的<strong>最小值</strong><span className="font-normal ml-2">——含参讨论闭区间最值（高考压轴母题）</span></div>
                  <div className="px-2 py-1 space-y-1">
                    <p>① <strong>定义域</strong>：<Math tex="\mathbb{R}" />，区间 <Math tex="[0,2]" /> 完全包含 ✓</p>
                    <hr className="border-gray-300" />
                    <p>② <strong>求导找驻点</strong>：<Math tex="f'(x)=3x^2-6ax=3x(x-2a)" />，零点为 <Math tex="x=0" /> 和 <Math tex="x=2a" /></p>
                    <p className="pl-4"><Math tex="x=0" /> 正好是区间左端点，所以只需关心<strong>含参驻点 <Math tex="x=2a" /> 与区间 <Math tex="[0,2]" /> 的位置关系</strong></p>
                    <p className="pl-4">在 <Math tex="[0,2]" /> 上 <Math tex="3x\ge 0" /> 非负（仅 <Math tex="x=0" /> 端点处为 0），只需<strong>看因子 <Math tex="x-2a" /> 的正负</strong>就能定 <Math tex="f'(x)" /> 的正负</p>
                    <hr className="border-gray-300" />
                    <p className="font-bold text-gray-800">③ 按 <Math tex="2a" /> 与 <Math tex="0,2" /> 的位置分类</p>
                    <div className="space-y-1">
                      <p><span className="font-bold text-blue-800 mr-2">情况一：当 <Math tex="2a" /> 在区间左边时，即 <Math tex="2a\le 0" /> 时</span>结合 <Math tex="x\ge 0" />（因 <Math tex="x\in[0,2]" />），得 <Math tex="2a\le 0\le x" />，移项得 <Math tex="x-2a\ge 0" />。又因为 <Math tex="3x\ge 0" />。</p>
                      <p>两式相乘 <Math tex="\ge 0" />，在区间 <Math tex="[0,2]" /> 上 <Math tex="f'(x)\ge 0" />，即 <Math tex="f(x)" /> <strong>单调递增</strong>，此时最小值为区间左端点，代入得 <Math tex="\min=f(0)=2" /></p>
                      <hr className="border-gray-300" />
                      <p><span className="font-bold text-blue-800 mr-2">情况二：当 <Math tex="2a" /> 在区间内部时，即 <Math tex="0<2a<2" /></span>含参驻点把区间分为 <Math tex="(0,2a)" /> 和 <Math tex="(2a,2)" />（只有 <Math tex="f'(x)=0" /> 或不存在的点才能分区）：</p>
                      <p className="pl-2">• 当 <Math tex="0<x<2a" /> 时，<Math tex="x-2a<0" />，<Math tex="3x>0" />，相乘为负，在区间 <Math tex="(0,2a)" /> 上 <Math tex="f'(x)<0" />，即 <Math tex="f(x)" /> <strong>单调递减</strong></p>
                      <p className="pl-2">• 当 <Math tex="2a<x<2" /> 时，<Math tex="x-2a>0" />，<Math tex="3x>0" />，相乘为正，在区间 <Math tex="(2a,2)" /> 上 <Math tex="f'(x)>0" />，即 <Math tex="f(x)" /> <strong>单调递增</strong></p>
                      <p>先减后增，<Math tex="x=2a" /> 处为<strong>谷底</strong>，得 <Math tex="\min=f(2a)=(2a)^3-3a(2a)^2+2=8a^3-12a^3+2=-4a^3+2" /></p>
                      <hr className="border-gray-300" />
                      <p><span className="font-bold text-blue-800 mr-2">情况三：当 <Math tex="2a" /> 在区间右边时，即 <Math tex="2a\ge 2" /> 时</span>结合 <Math tex="x\le 2" />（因 <Math tex="x\in[0,2]" />），得 <Math tex="x\le 2\le 2a" />，移项得 <Math tex="x-2a\le 0" />。又因为 <Math tex="3x\ge 0" />。</p>
                      <p>两式相乘 <Math tex="\le 0" />，在区间 <Math tex="[0,2]" /> 上 <Math tex="f'(x)\le 0" />，即 <Math tex="f(x)" /> <strong>单调递减</strong>，此时最小值为区间右端点，代入得 <Math tex="\min=f(2)=10-12a" /></p>
                    </div>
                    <hr className="border-gray-300" />
                    <div className="pl-2 grid grid-cols-[auto_1fr] gap-x-2">
                      <div className="font-bold whitespace-nowrap"><strong>④ 综上所述</strong>：</div>
                      <div className="space-y-0.5">
                        <p>• <Math tex="2a\le 0" /> 时，<Math tex="\min=2" />（在 <Math tex="x=0" /> 处取得）</p>
                        <p>• <Math tex="0<2a<2" /> 时，<Math tex="\min=-4a^3+2" />（在 <Math tex="x=2a" /> 处取得）</p>
                        <p>• <Math tex="2a\ge 2" /> 时，<Math tex="\min=10-12a" />（在 <Math tex="x=2" /> 处取得）</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── 例 4 后即时练习 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="✏️ 例 4 同款练习（含参讨论闭区间最值）" questions={closedMaxExample4Practice} explanations={closedMaxExplanations} hideBlankLine optionCols={1} printOptionCols={1}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={closedMaxExample4Practice} printOptionCols={1} columns={1} />
                </div>

                {/* ── 例 5 详解：分式型（反比例） ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px text-[0.85rem]">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：<strong>例 5</strong>　求 <Math tex="f(x)=x+\dfrac{4}{x}" /> 在 <Math tex="[1,4]" /> 上的最值<span className="font-normal ml-2">——分式型（反比例）经典母题</span></div>
                  <div className="px-2 py-1 space-y-1">
                    <p>① <strong>定义域</strong>：分母 <Math tex="x\ne 0" />，定义域为 <Math tex="(-\infty,0)\cup(0,+\infty)" />，区间 <Math tex="[1,4]" /> 完全包含在定义域内 ✓</p>
                    <hr className="border-gray-300" />
                    <p>② <strong>求导找驻点</strong>：<Math tex="f'(x)=1-\dfrac{4}{x^2}=\dfrac{x^2-4}{x^2}=\dfrac{(x-2)(x+2)}{x^2}" />（通分 + 因式分解）</p>
                    <p className="pl-4">分母 <Math tex="x^2>0" /> <strong>恒正可约</strong>，看分子 <Math tex="(x-2)(x+2)" />。在 <Math tex="[1,4]" /> 上，<Math tex="x+2>0" /> 恒正</p>
                    <p className="pl-4">所以只需看因子 <Math tex="x-2" /> 的正负。令 <Math tex="x-2=0" /> 得驻点 <Math tex="x=2" />（在区间内 ✓）</p>
                    <hr className="border-gray-300" />
                    <div className="grid grid-cols-[auto_1fr] gap-4">
                      <div>
                        <p>③ <strong>列候选清单 + 算函数值</strong>：</p>
                        <p className="pl-2">候选点 = 驻点 <Math tex="\{2\}" /> ∪ 端点 <Math tex="\{1,4\}" /></p>
                        <table className="ml-4 mt-1 border-collapse text-center text-[0.9rem] [&_td]:border [&_td]:border-gray-300 [&_th]:border [&_th]:border-gray-300 [&_td]:px-2 [&_td]:py-0.5 [&_th]:px-2 [&_th]:py-0.5">
                          <thead className="bg-gray-50">
                            <tr>
                              <th><Math tex="x" /></th>
                              <th><Math tex="f(x)" /></th>
                              <th>身份</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="font-bold"><Math tex="1" /></td>
                              <td><Math tex="f(1)=1+4=5" /></td>
                              <td>左端点</td>
                            </tr>
                            <tr>
                              <td className="font-bold"><Math tex="2" /></td>
                              <td><Math tex="f(2)=2+2=4" /></td>
                              <td className="text-blue-700 font-bold">驻点（极小值点）</td>
                            </tr>
                            <tr>
                              <td className="font-bold"><Math tex="4" /></td>
                              <td><Math tex="f(4)=4+1=5" /></td>
                              <td>右端点</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="space-y-1">
                        <p>④ <strong>比较大小定最值</strong>：</p>
                        <p className="pl-2">候选值集合：<Math tex="\{5,\,4,\,5\}" /></p>
                        <p className="pl-2">• <Math tex="\max=5" />，在 <Math tex="x=1" />（左端点）和 <Math tex="x=4" />（右端点）<strong>同时取得</strong></p>
                        <p className="pl-2">• <Math tex="\min=4" />，在 <Math tex="x=2" />（驻点/极小值点）取得</p>
                        <hr className="border-gray-300" />
                        <p><strong>结论</strong>：</p>
                        <p className="pl-2">• <strong>最大值为 5</strong>（<Math tex="x=1" /> 和 <Math tex="x=4" /> 处取得）</p>
                        <p className="pl-2">• <strong>最小值为 4</strong>（<Math tex="x=2" /> 处取得）</p>
                      </div>
                    </div>
                    <hr className="border-gray-300" />
                    <p><strong>💡 分式型题的关键</strong>：① 先验定义域（<Math tex="x\ne 0" />）；② 通分后分母恒正可约；③ 区间内判断哪些因子恒正可约，只看剩余因子。</p>
                  </div>
                </div>

                {/* ── 例 5 后即时练习 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="✏️ 例 5 同款练习（分式型闭区间最值）" questions={closedMaxExample5Practice} explanations={closedMaxExplanations} hideBlankLine optionCols={1} printOptionCols={1}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={closedMaxExample5Practice} printOptionCols={1} columns={1} />
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📌 4.2 收尾：什么能作为区间分割点</div>
                  <div className="px-2 py-0.5 space-y-0.5">
                    <p><strong>能分割区间的点</strong>：使 <Math tex="f'(x)=0" /> 的点，或使 <Math tex="f'(x)" /> 不存在的点；左右端点只参与比较，不把区间继续切开。</p>
                    <p><strong>不能分割区间的点</strong>：普通代入点、随便取的验号点、与 <Math tex="f'(x)" /> 变号无关的点。</p>
                    <p><strong>闭区间最值候选点</strong>：区间内部的分割点 + 左右端点，最后全部代回原函数 <Math tex="f(x)" /> 比较大小。</p>
                    <p><strong>例</strong>：在 <Math tex="[1,4]" /> 上，若 <Math tex="f'(x)=0" /> 得 <Math tex="x=2" />，则 <Math tex="2" /> 能分割区间；<Math tex="1,4" /> 是端点，只参与最后比较。</p>
                  </div>
                </div>

                {/* TODO: 3 大易错警示 + 5 题即时练习 */}

              </div>
            </Collapsible>
          </section>
        </div>
      </LessonLayout>
      <UnifiedDebugToggle />
    </div>
  );
}
