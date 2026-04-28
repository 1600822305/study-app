import { Math, Collapsible, PageHeader, LessonLayout, ExportButton, PracticeCard, PrintQuestions, UnifiedDebugToggle, PageBreak } from '@/components/shared';
import { derivApplicationProgressItems } from './data/3.5/3.5-deriv-application-progress';
import { derivTangent1Warmup, derivTangent1Practice, derivTangent2Warmup, derivTangent2Practice, derivTangent3Warmup, derivTangent3PracticeShort, derivTangent3PracticeLong, derivCommonTangentWarmup, derivCommonTangentPractice } from './data/3.5/3.5-deriv-application-practice';
import { useProgress } from '@/hooks';
import { derivativeApplicationExplanations } from './3.5-deriv-application-answers';

export function DerivativeApplicationPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('deriv-application', derivApplicationProgressItems);

  return (
    <div>
      <div className="[&_h1]:!mb-0 [&_.flex.flex-wrap]:!mt-1">
        <PageHeader
          stage="第三阶段 · 函数思维"
          title="3.5 导数应用（上）"
          tags={[]}
        />
      </div>

      <LessonLayout
        progressItems={progressItems}
        onToggle={toggleProgress}
        sidebarTop={<ExportButton title="3.5 导数应用（上）" />}
      >
        <div className="[&_.rounded-xl]:mb-0 [&_.rounded-xl>.flex.items-center]:py-0.5 [&_.rounded-xl>div:last-child]:px-0 [&_.rounded-xl>div:last-child]:pt-0 [&_.rounded-xl>div:last-child]:pb-0 [&_.rounded-xl_button>span]:font-bold [&_.rounded-xl_button>span]:text-gray-900">

          {/* ═══════════════════════════════════════════════════════ */}
          {/* Section 1: 切线方程 */}
          {/* ═══════════════════════════════════════════════════════ */}
          <section id="da-tangent" className="mb-0 scroll-mt-4">
            <Collapsible title="一、切线方程" defaultOpen storageKey="deriv-application:tangent">
              <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

                {/* ═══════════════════════════════════════════════════════ */}
                {/* 1.0 铺垫：切线方程怎么写 + 四大题型总览                    */}
                {/* ═══════════════════════════════════════════════════════ */}
                <div className="px-2 py-1 font-bold text-gray-900 bg-blue-50 border-l-4 border-blue-500 mb-0.5">1.0　铺垫：切线方程怎么写（三板斧 + 四大题型总览）</div>

                {/* ── 为什么要单讲这一节 ── */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📊 为什么要单讲：新高考<strong>每年必考</strong>的送分点</div>
                  <div className="grid grid-cols-[1fr_1fr]">
                    <div className="px-2 py-0.5 space-y-1 border-r border-gray-300">
                      <p><strong>高考频次</strong>：新高考卷每年都考切线，通常出现在：</p>
                      <p className="pl-4">① <strong>小题</strong>（选择 / 填空，5 分）：直接求切线方程或斜率。</p>
                      <hr className="border-gray-300" />
                      <p className="pl-4">② <strong>导数大题第（1）问</strong>（5–7 分）：年年考的开胃菜，<strong>拿分底线</strong>。</p>
                      <hr className="border-gray-300" />
                      <p className="text-red-700"><strong>⚠️ 重要认知</strong>：这一节不考难技巧，考的是<strong>流程熟不熟</strong>——<br />谁都会做，但谁先熟练谁先拿分。</p>
                    </div>
                    <div className="px-2 py-0.5 space-y-1">
                      <p><strong>几何本质</strong>：导数 <Math tex="f'(x_0)" /> = 曲线在 <Math tex="x_0" /> 处的<strong>切线斜率</strong>。</p>
                      <p className="!mt-0">所以求切线方程 = <strong>求斜率 + 写直线方程</strong>，两个前面都已经学过：</p>
                      <p className="pl-4">• 算斜率 <Math tex="k=f'(x_0)" />——用 3.4 的求导公式和法则</p>
                      <p className="pl-4">• 写直线——用 3.3.5 §2 的点斜式 <Math tex="y-y_1=k(x-x_1)" /></p>
                      <p className="font-bold text-gray-900">本节只是把这两件事串起来。</p>
                    </div>
                  </div>
                </div>

                {/* ── 三板斧模板 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🎯 三板斧模板：切点 → 斜率 → 点斜式</div>
                  <div className="px-2 py-0.5 space-y-1">
                    <p>求曲线 <Math tex="y=f(x)" /> 在 <Math tex="x=x_0" /> 处切线方程，永远只有<strong>三步</strong>：</p>
                    <table className="w-full border-collapse text-center [&_tr>*:first-child]:border-l-0 [&_tr>*:last-child]:border-r-0">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="border border-gray-300 px-2 py-0.5 w-[8%]">步骤</th>
                          <th className="border border-gray-300 px-2 py-0.5 w-[22%]">做什么</th>
                          <th className="border border-gray-300 px-2 py-0.5 w-[48%]">结果</th>
                          <th className="border border-gray-300 px-2 py-0.5 w-[22%]">对应前面哪一节</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-2 py-0.5 font-bold">①</td>
                          <td className="border border-gray-300 px-2 py-0.5"><strong>算切点纵坐标</strong></td>
                          <td className="border border-gray-300 px-2 py-0.5">把 <Math tex="x_0" /> 代入 <Math tex="f(x)" />，得 <Math tex="y_0=f(x_0)" /></td>
                          <td className="border border-gray-300 px-2 py-0.5 text-left">3.1 函数的概念与性质</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-0.5 font-bold">②</td>
                          <td className="border border-gray-300 px-2 py-0.5"><strong>算斜率</strong></td>
                          <td className="border border-gray-300 px-2 py-0.5">先求 <Math tex="f'(x)" />，再代 <Math tex="x=x_0" />，得 <Math tex="k=f'(x_0)" /></td>
                          <td className="border border-gray-300 px-2 py-0.5 text-left">3.4 求导公式 + 法则</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-0.5 font-bold">③</td>
                          <td className="border border-gray-300 px-2 py-0.5"><strong>套点斜式</strong></td>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="y-y_0=k(x-x_0)" />，化简为 <Math tex="y=kx+b" /></td>
                          <td className="border border-gray-300 px-2 py-0.5 text-left">3.3.5 §2 点斜式</td>
                        </tr>
                      </tbody>
                    </table>
                    <p><strong>⚠️ 答题规范</strong>：最终答案要写成 <Math tex="y=kx+b" /> 或 <Math tex="Ax+By+C=0" /> 的<strong>直线方程</strong>形式，不能停在点斜式——阅卷老师会扣分。</p>
                  </div>
                </div>

                {/* ── 四大题型总览 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🗺 四大题型总览：先认清题目属于哪一类，再套流程</div>
                  <table className="w-full border-collapse text-center text-[0.9rem] [&_tr>*:first-child]:border-l-0 [&_tr>*:last-child]:border-r-0">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-2 py-0.5 w-[10%]">类型</th>
                        <th className="border border-gray-300 px-2 py-0.5 w-[22%]">题目特征（关键词）</th>
                        <th className="border border-gray-300 px-2 py-0.5">处理方法</th>
                        <th className="border border-gray-300 px-2 py-0.5 w-[10%]">难度</th>
                        <th className="border border-gray-300 px-2 py-0.5 w-[10%]">本节位置</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 font-bold">①</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><strong>在</strong>某点处 / 切点已知<br /><span className="text-[0.85em]">"<Math tex="f(x)" /> 在 <Math tex="x=x_0" /> 处…"</span></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">直接套三板斧，答案<strong>唯一</strong>。</td>
                        <td className="border border-gray-300 px-2 py-0.5">★</td>
                        <td className="border border-gray-300 px-2 py-0.5">1.1</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 font-bold">②</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><strong>过</strong>某点 / 切点未知<br /><span className="text-[0.85em]">"过点 <Math tex="P" /> 的切线…"</span></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">设切点 <Math tex="(t,f(t))" />，列方程解 <Math tex="t" />。<strong>可能有多条切线。</strong></td>
                        <td className="border border-gray-300 px-2 py-0.5">★★★</td>
                        <td className="border border-gray-300 px-2 py-0.5">1.2</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 font-bold">③</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><strong>已知切线求参</strong><br /><span className="text-[0.85em]">"切线为 … 求 <Math tex="a" />"</span></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">用"切点在曲线上"+"斜率=导数值"两方程联立。</td>
                        <td className="border border-gray-300 px-2 py-0.5">★★★</td>
                        <td className="border border-gray-300 px-2 py-0.5">1.3</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 font-bold">④</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><strong>公切线</strong>（两曲线共切）<br /><span className="text-[0.85em]">"<Math tex="f,g" /> 有公切线"</span></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">分别设两切点，列"斜率相等 + 切线同一条"方程组。</td>
                        <td className="border border-gray-300 px-2 py-0.5">★★★★</td>
                        <td className="border border-gray-300 px-2 py-0.5">1.4</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="px-2 py-1 border-t border-gray-300 text-[0.85em]"><strong>📖 学习路径</strong>：1.1 先练熟"在"型，1.2 辨清"过"型（一字之差，陷阱所在），1.3 练逆推，1.4 挑战压轴。</p>
                </div>

                {/* ── "在" vs "过" 的一眼识别 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px bg-amber-50">
                  <div className="px-2 py-1 font-bold text-gray-900 border-b border-gray-400 bg-amber-100">⚠️ 第一时间要分辨：题目说"<strong>在</strong>"还是"<strong>过</strong>"？</div>
                  <div className="grid grid-cols-[1fr_1fr]">
                    <div className="px-2 py-2 space-y-1 border-r border-gray-300">
                      <p className="font-bold text-gray-900">"<strong>在点 <Math tex="P" /> 处</strong>的切线" → 题型①</p>
                      <p><Math tex="P" /> <strong>就是切点</strong>。三板斧直接来。</p>
                      <hr className="border-gray-300" />
                      <p className="pl-2"><strong>例</strong>：求 <Math tex="f(x)=x^2" /> 在 <strong>点 <Math tex="(1,1)" /></strong> 处的切线——<Math tex="(1,1)" /> 就是切点。</p>
                    </div>
                    <div className="px-2 py-2 space-y-1">
                      <p className="font-bold text-gray-900">"<strong>过点 <Math tex="P" /></strong> 的切线" → 题型②</p>
                      <p><Math tex="P" /> <strong>不一定是切点</strong>（通常不是）。需要设切点 <Math tex="(t,f(t))" /> 反解。</p>
                      <hr className="border-gray-300" />
                      <p className="pl-2"><strong>例</strong>：求 <Math tex="f(x)=x^3" /> <strong>过点 <Math tex="(0,0)" /></strong> 的切线——原点不在曲线切点处，是切线经过的点（第 1.2 节详讲）。</p>
                    </div>
                  </div>
                </div>

                {/* ═══════════════════════════════════════════════════════ */}
                {/* 1.1 在某点处求切线（切点已知）                              */}
                {/* ═══════════════════════════════════════════════════════ */}
                <div className="px-2 py-1 font-bold text-gray-900 bg-blue-50 border-l-4 border-blue-500">1.1　在某点处求切线（切点已知，★ 最基础）</div>

                {/* ── 速查卡 ── */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🎯 三步法速查（切点 <Math tex="x_0" /> 已知）</div>
                  <div className="px-2 py-0.5 space-y-1">
                    <p className="pl-2"><strong>① 算切点纵坐标</strong> <Math tex="y_0=f(x_0)" />——直接代数进原函数。</p>
                    <p className="pl-2"><strong>② 算斜率</strong> <Math tex="k=f'(x_0)" />——<strong>先求导 <Math tex="f'(x)" />，再代 <Math tex="x=x_0" /></strong>（顺序不能反）。</p>
                    <p className="pl-2"><strong>③ 套点斜式</strong> <Math tex="y-y_0=k(x-x_0)" />，化简成 <Math tex="y=kx+b" />。</p>
                    <hr className="border-gray-300" />
                    <p className="text-red-700"><strong>⚠️ 易错</strong>：拿到 <Math tex="f'(x_0)" /> 就直接当 <Math tex="y" /> 写——这是<strong>斜率（也就是导数值）</strong>，不是纵坐标；<Math tex="y_0" /> 必须<strong>另外</strong>用 <Math tex="f(x_0)" /> 算（即函数值）。</p>
                  </div>
                </div>

                {/* ── 详解：例 1 + 例 2（标准流程）── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：三步法的标准流程（例 1 多项式 + 例 2 指数）</div>
                  <div className="px-2 py-0.5 space-y-1">
                    <div className="grid grid-cols-[53fr_47fr]">
                      <div className="space-y-1 border-r border-gray-400">
                        <p className="font-bold"><strong>例 1</strong>：求 <Math tex="f(x)=x^2" /> 在 <Math tex="x=1" /> 处的切线方程。</p>
                        <hr className="border-gray-300" />
                        <p className="pl-2"><strong>① 切点纵坐标</strong>：<Math tex="y_0=f(1)=1^2=1" />，即切点为 <Math tex="(1,1)" />。</p>
                        <hr className="border-gray-300" />
                        <p className="pl-2"><strong>② 斜率</strong>：先求导 <Math tex="f'(x)=2x" />，代入 <Math tex="x=1" />，得 <Math tex="k=f'(1)=2" />。</p>
                        <hr className="border-gray-300" />
                        <p className="pl-2"><strong>③ 套点斜式</strong>：<Math tex="y-1=2(x-1)" /></p>
                        <p className="pl-4">化简得 <strong><Math tex="y=2x-1" /></strong>。</p>
                      </div>
                      <div className="space-y-1">
                        <p className="font-bold"><strong>例 2</strong>：求 <Math tex="f(x)=e^x" /> 在 <Math tex="x=1" /> 处的切线方程。</p>
                        <hr className="border-gray-300" />
                        <p className="pl-2"><strong>① 切点纵坐标</strong>：<Math tex="y_0=f(1)=e^1=e" />，即切点为 <Math tex="(1,e)" />。</p>
                        <hr className="border-gray-300" />
                        <p className="pl-2"><strong>② 斜率</strong>：<Math tex="f'(x)=e^x" />，代入 <Math tex="x=1" />，得 <Math tex="k=f'(1)=e" />。</p>
                        <hr className="border-gray-300" />
                        <p className="pl-2"><strong>③ 套点斜式</strong>：<Math tex="y-e=e(x-1)" />，化简得 <strong><Math tex="y=ex" /></strong>。</p>
                        <p className="pl-4">——<Math tex="e^x" /> 在 <Math tex="x=1" /> 处切线过原点，方向斜率也是 <Math tex="e" />。</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── 💪 随手算两道 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="💪 随手算两道" questions={derivTangent1Warmup} explanations={derivativeApplicationExplanations} hideBlankLine optionCols={2} printOptionCols={2}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivTangent1Warmup} printOptionCols={2} columns={2} />
                </div>

                {/* ── 详解：例 3（需要用到乘积法则的切点）── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：<strong>例 3</strong>　<Math tex="f(x)=x\ln x" /> 在 <Math tex="x=e" /> 处的切线方程<span className="font-normal ml-2">——综合乘积法则（3.4 二、乘积法则）</span></div>
                  <div className="px-2 py-0.5">
                    <div className="grid grid-cols-2">
                      <div className="space-y-1 border-r border-gray-400">
                        <p className="font-bold">第一步、先求导（用乘积法则）</p>
                        <hr className="border-gray-300" />
                        <p className="pl-2"><strong>认清</strong>：<Math tex="f(x)=x" />（前），<Math tex="g(x)=\ln x" />（后）</p>
                        <p className="pl-2"><strong>分别求导</strong>：<Math tex="f'(x)=1" />，<Math tex="g'(x)=\dfrac{1}{x}" /></p>
                        <p className="pl-2"><strong>套公式</strong> <Math tex="f'(x)g(x)+f(x)g'(x)" />：</p>
                        <p className="pl-4"><Math tex="(x\ln x)'=1\cdot\ln x+x\cdot\dfrac{1}{x}=\ln x+1" /></p>
                      </div>
                      <div className="space-y-1">
                        <p className="font-bold">第二步、算切点 + 斜率，套点斜式</p>
                        <hr className="border-gray-300" />
                        <p className="pl-2"><strong>① 切点纵坐标</strong>：<Math tex="f(e)=e\ln e=e\cdot 1=e" />，即切点为 <Math tex="(e,e)" />。</p>
                        <p className="pl-2"><strong>② 斜率</strong>：<Math tex="k=f'(e)=\ln e+1=1+1=2" /></p>
                        <p className="pl-2"><strong>③ 点斜式</strong>：<Math tex="y-e=2(x-e)" /></p>
                        <p className="pl-4">化简得 <strong><Math tex="y=2x-e" /></strong>。</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── 一句话看穿 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px bg-amber-50">
                  <div className="px-2 py-1.5">
                    <p><strong>💡 一句话看穿这节</strong>：<strong>"在某点处"的切线 = 三板斧</strong>——算切点纵坐标、算斜率（先求导再代值）、套点斜式化简。</p>
                  </div>
                </div>

                {/* ── 即时练习 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="" questions={derivTangent1Practice} explanations={derivativeApplicationExplanations} hideBlankLine optionCols={2} printOptionCols={2}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivTangent1Practice} printOptionCols={2} columns={2} />
                </div>

                {/* ═══════════════════════════════════════════════════════ */}
                {/* 1.2 过某点求切线（切点未知）                                */}
                {/* ═══════════════════════════════════════════════════════ */}
                {/* ── 标题 + 陷阱识别卡（合并）── */}
                <div className="border border-gray-400 rounded overflow-hidden bg-amber-50">
                  <div className="px-2 py-1 font-bold text-gray-900 border-b border-gray-400 bg-blue-50 border-l-4 border-l-blue-500">1.2　过某点求切线（切点未知，★★★ 高考陷阱）—— ⚠️ 为什么"过"型要单独讲，不能照搬 1.1</div>
                  <div className="grid grid-cols-[1fr_1fr]">
                    <div className="px-2 py-0.5 space-y-1 border-r border-gray-300">
                      <p className="font-bold">关键差异（见 1.0 对比）</p>
                      <p><strong>1.1 "在点 <Math tex="P" /> 处"</strong>：<Math tex="P" /> <strong>就是切点</strong>——直接用 <Math tex="P" /> 算斜率、套点斜式，一步到位。</p>
                      <hr className="border-gray-300" />
                      <p><strong>1.2 "过点 <Math tex="P" />"</strong>：<Math tex="P" /> <strong>不是切点</strong>（一般情况下）——切点是<strong>曲线上另一个点</strong>，需要先设<strong>切点</strong> <Math tex="(t,f(t))" /> 反求。</p>
                    </div>
                    <div className="px-2 py-0.5 space-y-1">
                      <p className="font-bold">两个必须警惕的坑</p>
                      <p><strong>① 切线可能有多条</strong>：解关于 <Math tex="t" /> 的方程，有几个解就有几条切线。写漏一条直接扣分。</p>
                      <hr className="border-gray-300" />
                      <p><strong>② <Math tex="P" /> 在曲线上 ≠ 只有一条切线</strong>：就算 <Math tex="P" /> 落在曲线上，也要<strong>按 1.2 的方法设新切点</strong>——可能除了在 <Math tex="P" /> 处的切线，还有<strong>别的切点</strong>的切线也经过 <Math tex="P" />（例 2 会看到）。</p>
                    </div>
                  </div>
                </div>

                {/* ── 五步法速查 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🎯 五步法速查：设切点 → 列方程 → 解 <Math tex="t" /></div>
                  <div className="px-2 py-0.5 space-y-1">
                    <p className="pl-2"><strong>① 设切点</strong>：切点在曲线上，设为 <Math tex="(t,\,f(t))" />（<Math tex="t" /> 是未知数）。</p>
                    <p className="pl-2"><strong>② 写斜率</strong>：<Math tex="k=f'(t)" />。</p>
                    <p className="pl-2"><strong>③ 写切线方程</strong>（含 <Math tex="t" />）：<Math tex="y-f(t)=f'(t)(x-t)" />。</p>
                    <p className="pl-2"><strong>④ 代入外部点 <Math tex="P(x_P,y_P)" /></strong>：得到关于 <Math tex="t" /> 的方程 <Math tex="y_P-f(t)=f'(t)(x_P-t)" />。</p>
                    <p className="pl-2"><strong>⑤ 解方程得所有 <Math tex="t" /></strong>：每个 <Math tex="t" /> 对应一个切点、一条切线。代回整理成 <Math tex="y=kx+b" />。</p>
                    <hr className="border-gray-300" />
                    <p className="text-red-700"><strong>⚠️ 最常见扣分</strong>：第 ⑤ 步解出多个 <Math tex="t" /> 却<strong>只写一条切线</strong>——每个 <Math tex="t" /> 都要代回算出一条切线，全部写出来。</p>
                  </div>
                </div>

                {/* ── 详解：例 1（标准两条）── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：<strong>例 1</strong>　求 <Math tex="f(x)=x^2" /> 过点 <Math tex="P(1,-3)" /> 的切线方程<span className="font-normal ml-2">——标准两条切线</span></div>
                  <div className="px-2 py-0.5 space-y-1">
                    <p className="pl-2"><strong>① 设切点</strong> <Math tex="(t,\,t^2)" />。</p>
                    <hr className="border-gray-300" />
                    <p className="pl-2"><strong>② 斜率</strong>：<Math tex="f'(x)=2x" />，所以 <Math tex="k=f'(t)=2t" />。</p>
                    <hr className="border-gray-300" />
                    <p className="pl-2"><strong>③ 切线方程（含 <Math tex="t" />）</strong>：<Math tex="y-t^2=2t(x-t)" />。</p>
                    <hr className="border-gray-300" />
                    <p className="pl-2"><strong>④ 代入 <Math tex="P(1,-3)" /></strong>：<Math tex="-3-t^2=2t(1-t)=2t-2t^2" />，整理得 <Math tex="t^2-2t-3=0" />。</p>
                    <hr className="border-gray-300" />
                    <p className="pl-2"><strong>⑤ 解方程</strong>：<Math tex="(t-3)(t+1)=0" />，即 <Math tex="t=3" /> 或 <Math tex="t=-1" />——<strong>两个切点，两条切线</strong>。</p>
                    <hr className="border-gray-300" />
                    <div className="grid grid-cols-2">
                      <div className="space-y-1 border-r border-gray-400">
                        <p className="font-bold">切线一（<Math tex="t=3" />）代回切点</p>
                        <p className="pl-2">切点 <Math tex="(3,\,9)" />，斜率 <Math tex="k=2\cdot 3=6" />。</p>
                        <p className="pl-2">点斜式：<Math tex="y-9=6(x-3)" />，化简得 <strong><Math tex="y=6x-9" /></strong>。</p>
                      </div>
                      <div className="space-y-1">
                        <p className="font-bold">切线二（<Math tex="t=-1" />）代回切点</p>
                        <p className="pl-2">切点 <Math tex="(-1,\,1)" />，斜率 <Math tex="k=2\cdot(-1)=-2" />。</p>
                        <p className="pl-2">点斜式：<Math tex="y-1=-2(x+1)" />，化简得 <strong><Math tex="y=-2x-1" /></strong>。</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── 💪 随手算两道 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="💪 随手算两道" questions={derivTangent2Warmup} explanations={derivativeApplicationExplanations} hideBlankLine optionCols={2} printOptionCols={2}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivTangent2Warmup} printOptionCols={2} columns={2} />
                </div>

                {/* ── 详解：例 2（⭐ P 在曲线上也可能有两条）── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：<strong>例 2</strong>　求 <Math tex="f(x)=x^3" /> 过点 <Math tex="P(1,1)" /> 的切线方程<span className="font-normal ml-2">——⭐ <Math tex="P" /> 在曲线上仍有两条切线</span></div>
                  <div className="px-2 py-0.5 space-y-1">
                    <p><strong>先观察</strong>：<Math tex="f(1)=1^3=1" />，所以 <Math tex="P(1,1)" /> <strong>恰好在曲线上</strong>。但<strong>不能只写"在 <Math tex="x=1" /> 处的切线"</strong>——按 1.2 的方法设新切点并解方程。</p>
                    <hr className="border-gray-300" />
                    <p className="pl-2"><strong>① 设切点</strong> <Math tex="(t,\,t^3)" />。</p>
                    <p className="pl-2"><strong>② 斜率</strong>：<Math tex="f'(x)=3x^2" />，<Math tex="k=3t^2" />。</p>
                    <p className="pl-2"><strong>③ 切线方程</strong>：<Math tex="y-t^3=3t^2(x-t)" />。</p>
                    <p className="pl-2"><strong>④ 代入 <Math tex="P(1,1)" /></strong>：<Math tex="1-t^3=3t^2(1-t)=3t^2-3t^3" />，整理得 <Math tex="2t^3-3t^2+1=0" />。</p>
                    <p className="pl-2"><strong>⑤ 因式分解</strong>：试 <Math tex="t=1" /> 是根（<Math tex="2-3+1=0" /> ✓），提出 <Math tex="(t-1)" />：</p>
                    <p className="pl-4"><Math tex="2t^3-3t^2+1=(t-1)(2t^2-t-1)=(t-1)(2t+1)(t-1)=(t-1)^2(2t+1)" /></p>
                    <p className="pl-2">所以 <Math tex="t=1" /> 或 <Math tex="t=-\dfrac{1}{2}" />——<strong>两个不同切点，两条切线</strong>。</p>
                    <hr className="border-gray-300" />
                    <div className="grid grid-cols-2">
                      <div className="space-y-1 border-r border-gray-400">
                        <p className="font-bold">切线一（<Math tex="t=1" />）代回切点，切点就是 <Math tex="P" /> 本身</p>
                        <p className="pl-2">切点 <Math tex="(1,\,1)" />，斜率 <Math tex="k=3\cdot 1=3" />。</p>
                        <p className="pl-2">点斜式：<Math tex="y-1=3(x-1)" />，化简得 <strong><Math tex="y=3x-2" /></strong>。</p>
                      </div>
                      <div className="space-y-1">
                        <p className="font-bold">切线二（<Math tex="t=-\tfrac{1}{2}" />）代回切点，切点在别处</p>
                        <p className="pl-2">切点 <Math tex="\left(-\tfrac{1}{2},\,-\tfrac{1}{8}\right)" />，斜率 <Math tex="k=3\cdot\tfrac{1}{4}=\tfrac{3}{4}" />。</p>
                        <p className="pl-2">点斜式：<Math tex="y+\tfrac{1}{8}=\tfrac{3}{4}\left(x+\tfrac{1}{2}\right)" />，化简得 <strong><Math tex="y=\tfrac{3}{4}x+\tfrac{1}{4}" /></strong>。</p>
                      </div>
                    </div>
                    <hr className="border-gray-300" />
                    <p className="text-red-700"><strong>⚠️ 避坑</strong>：别看到 <Math tex="P" /> 在曲线上就按 1.1 做，只写出一条切线，漏掉另一条——<strong>直接扣一半分</strong>。<br />记住：凡是"<strong>过点 <Math tex="P" /></strong>"类型，永远按五步法设新切点。</p>
                  </div>
                </div>

                {/* ── 一句话看穿 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px bg-amber-50">
                  <div className="px-2 py-1.5">
                    <p><strong>💡 一句话看穿这节</strong>：<strong>"过点 <Math tex="P" />"的切线 = 设 <Math tex="(t,f(t))" /> 反求</strong>——解出的 <Math tex="t" /> 有几个，就写几条切线，<strong>一条都不能漏</strong>。</p>
                  </div>
                </div>

                {/* ── 即时练习 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="" questions={derivTangent2Practice} explanations={derivativeApplicationExplanations} hideBlankLine optionCols={2} printOptionCols={2}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivTangent2Practice} printOptionCols={2} columns={2} />
                </div>

                {/* ═══════════════════════════════════════════════════════ */}
                {/* 1.3 已知切线（或斜率）求参                                  */}
                {/* ═══════════════════════════════════════════════════════ */}
                <div className="px-2 py-1 font-bold text-gray-900 bg-blue-50 border-l-4 border-blue-500">1.3　已知切线（或斜率）求参（★★★ 高考送分点）</div>

                {/* ── 核心思路：双方程锁切点 ── */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🎯 核心思路：切点同时满足两件事</div>
                  <div className="px-2 py-0.5 space-y-1">
                    <p>已知切线 <Math tex="y=kx+b" />（或它的斜率），曲线含未知参数 <Math tex="a" />。设切点为 <Math tex="(t,\,f(t))" />。</p>
                    <p>切点必须<strong>同时</strong>满足下面两个等式：</p>
                    <p className="pl-4"><strong>① 斜率相等</strong>：<Math tex="f'(t)=k" />——导数值就是切线斜率（3.4 求导 + 切线几何意义）。</p>
                    <p className="pl-4"><strong>② 切点在切线上</strong>：<Math tex="f(t)=kt+b" />——切点既属于曲线，又属于切线。</p>
                    <hr className="border-gray-300" />
                    <p>未知数有几个，方程就列几个。<strong>只有 <Math tex="a" /></strong>：通常一个方程就够；<strong>有 <Math tex="a,b,t" /> 等多个</strong>：联立求解。</p>
                  </div>
                </div>

                {/* ── 三步法速查 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📋 三步法速查</div>
                  <div className="px-2 py-0.5 space-y-1">
                    <p className="pl-2"><strong>① 准备</strong>：从切线方程读出斜率 <Math tex="k" /> 和截距 <Math tex="b" />；对曲线求导 <Math tex="f'(x)" />；设切点为 <Math tex="(t,\,f(t))" />。</p>
                    <p className="pl-2"><strong>② 列斜率方程</strong>：把切点横坐标代入导函数得 <Math tex="f'(t)" />，由 <Math tex="f'(t)=k" /> 解出未知量（<Math tex="t" /> 未知就解 <Math tex="t" />，<Math tex="t" /> 已知就解参数）。</p>
                    <p className="pl-2"><strong>③ 列切点方程</strong>（切点在切线上）：算切点纵坐标 <Math tex="f(t)" />，由 <Math tex="f(t)=kt+b" /> 解出剩余参数。</p>
                  </div>
                </div>

                {/* ── 三种常见情形对照 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🗺 三种常见情形：题目长得不一样，方法是同一套</div>
                  <table className="w-full border-collapse text-center [&_tr>*:first-child]:border-l-0 [&_tr>*:last-child]:border-r-0">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-2 py-0.5 w-[8%]">情形</th>
                        <th className="border border-gray-300 px-2 py-0.5 w-[28%]">题目特征</th>
                        <th className="border border-gray-300 px-2 py-0.5">已知什么 / 待求什么</th>
                        <th className="border border-gray-300 px-2 py-0.5 w-[12%]">本节例题</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 font-bold">A</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">给完整切线方程，切点未指定</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">已知 <Math tex="k,b" />，未知 <Math tex="t,a" />，列两式联立。</td>
                        <td className="border border-gray-300 px-2 py-0.5">例 1</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 font-bold">B</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">只给斜率，或"<strong>平行于</strong>某直线"</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">已知 <Math tex="k" />，<strong>切点 <Math tex="t" /> 通常题目会给</strong>；只列 <Math tex="f'(t)=k" /> 即可。</td>
                        <td className="border border-gray-300 px-2 py-0.5">例 3</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 font-bold">C</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">"<strong>在 <Math tex="x=x_0" /> 处</strong>切线为 …"</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">切点 <Math tex="x_0" /> 已知，<strong>直接代</strong>，不用解 <Math tex="t" />；两式同时使用解多个参数。</td>
                        <td className="border border-gray-300 px-2 py-0.5">例 2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* ── 详解：例 1（A 型，入门）── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：<strong>例 1</strong>　曲线 <Math tex="y=x^2+a" /> 的一条切线为 <Math tex="y=2x+1" />，求 <Math tex="a" /><span className="font-normal ml-2">——A 型：完整切线已知</span></div>
                  <div className="px-2 py-0.5 space-y-1">
                    <p className="pl-2"><strong>① 准备</strong>：切线 <Math tex="y=2x+1" />，读出 <Math tex="k=2" />、<Math tex="b=1" />；对曲线求导 <Math tex="f'(x)=(x^2+a)'=2x" />；设切点为 <Math tex="(t,\,f(t))" />。</p>
                    <hr className="border-gray-300" />
                    <p className="pl-2"><strong>② 定切点</strong>（斜率相等）：代 <Math tex="x=t" /> 得 <Math tex="f'(t)=2t" />，由 <Math tex="f'(t)=k" /> 列方程 <Math tex="2t=2" />，解得 <Math tex="t=1" />，切点 <Math tex="(1,\,f(1))" />。</p>
                    <hr className="border-gray-300" />
                    <p className="pl-2"><strong>③ 定参数</strong>（切点在切线上）：算切点纵坐标 <Math tex="f(1)=1^2+a=1+a" />，切点为 <Math tex="(1,\,1+a)" />。</p>
                    <p className="pl-4">代入切线 <Math tex="y=2x+1" />：<Math tex="1+a=2\cdot 1+1=3" />，所以 <strong><Math tex="a=2" /></strong>。</p>
                  </div>
                </div>

                {/* ── 💪 随手算两道 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="💪 随手算两道" questions={derivTangent3Warmup} explanations={derivativeApplicationExplanations} hideBlankLine optionCols={2} printOptionCols={2}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivTangent3Warmup} printOptionCols={2} columns={2} />
                </div>

                {/* ── 详解：例 2（C 型，真题改编）── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：<strong>例 2</strong>　曲线 <Math tex="y=x^3+ax+b" /> 在点 <Math tex="(0,\,b)" /> 处切线为 <Math tex="x-y+1=0" />，求 <Math tex="a,\,b" /><span className="font-normal ml-2">——C 型：切点已知，求多参数</span></div>
                  <div className="px-2 py-0.5 space-y-1">
                    <p className="pl-2"><strong>① 准备</strong>：切线 <Math tex="x-y+1=0" /> 化成斜截式 <Math tex="y=x+1" />，斜率为 <Math tex="1" />，截距为 <Math tex="1" />；对曲线求导 <Math tex="f'(x)=3x^2+a" />。</p>
                    <p className="pl-4">题目说"在点 <Math tex="(0,b)" /> 处"，所以切点直接就是 <Math tex="(0,\,b)" />，<strong>无需再求切点具体值</strong>。</p>
                    <hr className="border-gray-300" />
                    <p className="pl-2"><strong>② 定 <Math tex="a" /></strong>（斜率相等）：切点横坐标 <Math tex="x=0" />，代入导函数得 <Math tex="f'(0)=3\cdot 0^2+a=a" />；由 <Math tex="f'(0)=k=1" /> 得 <strong><Math tex="a=1" /></strong>。</p>
                    <hr className="border-gray-300" />
                    <p className="pl-2"><strong>③ 定 <Math tex="b" /></strong>（切点在切线上）：切点 <Math tex="(0,\,b)" /> 代入切线 <Math tex="y=x+1" /> 中，得 <Math tex="b=0+1=1" />，即 <strong><Math tex="b=1" /></strong>。</p>
                  </div>
                </div>

                {/* ── 详解：例 3（B 型，平行）── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：<strong>例 3</strong>　曲线 <Math tex="y=ax^2+\ln x" /> 在 <Math tex="x=1" /> 处的切线<strong>平行于</strong> <Math tex="y=3x" />，求 <Math tex="a" /><span className="font-normal ml-2">——B 型：只给斜率（"平行" = 斜率相等）</span></div>
                  <div className="px-2 py-0.5 space-y-1">
                    <p className="pl-2"><strong>① 准备</strong>：由"平行于 <Math tex="y=3x" />"读出切线斜率 <Math tex="k=3" />（平行即斜率相等）；对曲线求导 <Math tex="f'(x)=2ax+\dfrac{1}{x}" />。</p>
                    <p className="pl-4">切点横坐标 <Math tex="x=1" /> 已给，纵坐标 <Math tex="f(1)=a\cdot 1^2+\ln 1=a+0=a" />，得切点为 <Math tex="(1,\,a)" />。</p>
                    <hr className="border-gray-300" />
                    <p className="pl-2"><strong>② 定 <Math tex="a" /></strong>（斜率相等）：把切点横坐标 <Math tex="x=1" /> 代入导函数，得 <Math tex="f'(1)=2a\cdot 1+\dfrac{1}{1}=2a+1" />。</p>
                    <p className="pl-4">由 <Math tex="f'(1)=k=3" />，列方程 <Math tex="2a+1=3" />，解得 <strong><Math tex="a=1" /></strong>。</p>
                  </div>
                </div>

                {/* ── 切点的双重身份 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px bg-amber-50">
                  <div className="px-2 py-1 font-bold text-gray-900 border-b border-gray-400 bg-amber-100">💡 切点的双重身份：在曲线和切线上各有一个用途</div>
                  <div className="px-2 py-0.5">
                    <p><strong>代回曲线</strong>（用 <Math tex="f(t)" />）：算切点的<strong>纵坐标具体值</strong>，把 <Math tex="(t,\,f(t))" /> 中的 <Math tex="f(t)" /> 写出来。</p>
                    <p><strong>代入切线</strong>（用 <Math tex="f(t)=kt+b" />）：把切点代进切线方程，<strong>列出含参数的方程</strong>，反求参数。</p>
                  </div>
                </div>

                <PageBreak />

                {/* ── "读 k" 五种说法 ── */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <table className="w-full border-collapse text-center [&_tr>*:first-child]:border-l-0 [&_tr>*:last-child]:border-r-0">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-2 py-0.5 w-[10%]">类型</th>
                        <th className="border border-gray-300 px-2 py-0.5 w-[40%]">题目说法</th>
                        <th className="border border-gray-300 px-2 py-0.5">怎么读出 <Math tex="k" /></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5">直接</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">切线为 <Math tex="y=3x+1" /></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">直接读，<Math tex="k=3" /></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5">明给</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">切线斜率为 <Math tex="3" /></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><Math tex="k=3" /></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5">平行</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">切线 <strong>平行于</strong> <Math tex="y=3x+5" /></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">同斜率，<Math tex="k=3" />（截距随便）</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5">垂直</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">切线 <strong>垂直于</strong> <Math tex="y=3x" /></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">负倒数，<Math tex="k=-\dfrac{1}{3}" />（满足 <Math tex="k_1\cdot k_2=-1" />）</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5">倾斜角</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">切线倾斜角为 <Math tex="45^\circ" /></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><Math tex="k=\tan 45^\circ=1" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* ── 易错提醒 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">⚠️ 高频踩坑：多解情况要全部写出</div>
                  <div className="px-2 py-0.5">
                    <p>高次函数 <Math tex="f'(t)=k" /> 可能解出<strong>多个 <Math tex="t" /></strong>，每个都要回代第二个方程，可能得到<strong>多组参数</strong>（见练习 dt3p-1）。</p>
                  </div>
                </div>

                {/* ── 一句话看穿 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px bg-amber-50">
                  <div className="px-2 py-1.5">
                    <p><strong>💡 一句话看穿这节</strong>：利用<strong>切点同时在曲线和切线上</strong>、以及<strong>导函数 = 切线斜率</strong>这两条特性，求解出参数。</p>
                  </div>
                </div>

                {/* ── 即时练习：短题（2 列） ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="" questions={derivTangent3PracticeShort} explanations={derivativeApplicationExplanations} hideBlankLine optionCols={2} printOptionCols={2}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivTangent3PracticeShort} printOptionCols={2} columns={2} />
                </div>

                {/* ── 即时练习：长题（1 列，编号续写 3 起） ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="" questions={derivTangent3PracticeLong} explanations={derivativeApplicationExplanations} hideBlankLine optionCols={1} printOptionCols={1}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 3}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivTangent3PracticeLong} printOptionCols={1} columns={1} startIndex={2} />
                </div>

                {/* ═══════════════════════════════════════════════════════ */}
                {/* 1.4 公切线（双曲线共享切线）                                */}
                {/* ═══════════════════════════════════════════════════════ */}
                <div className="px-2 py-1 font-bold text-gray-900 bg-blue-50 border-l-4 border-blue-500">1.4　公切线（两条曲线共享同一条切线　★★★★ 高考压轴）</div>

                {/* ── 公切线定义 ── */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📖 公切线是什么：两条曲线"共用"的一条切线</div>
                  <div className="px-2 py-0.5 space-y-1">
                    <p>给定两条曲线 <Math tex="y=f(x)" />、<Math tex="y=g(x)" />。如果存在一条直线 <Math tex="\ell" />，<strong>同时与两条曲线相切</strong>，则称 <Math tex="\ell" /> 为这两条曲线的<strong>公切线</strong>。</p>
                    <hr className="border-gray-300" />
                    <p><strong>关键认知</strong>：公切线 = <strong>两条曲线各贡献一个切点</strong>，但同一条直线把它们连起来。</p>
                    <p className="pl-[5em]">所以题目里要用<strong>两个不同的字母</strong>（如 <Math tex="m,\,t" />）分别表示两条曲线的切点横坐标。</p>
                  </div>
                </div>

                {/* ── 高考定位 + 三大题型 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🗺 三种常见题型：本节按难度递进展开</div>
                  <table className="w-full border-collapse text-center [&_tr>*:first-child]:border-l-0 [&_tr>*:last-child]:border-r-0">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-2 py-0.5 w-[8%]">类型</th>
                        <th className="border border-gray-300 px-2 py-0.5 w-[28%]">题目特征</th>
                        <th className="border border-gray-300 px-2 py-0.5">解法</th>
                        <th className="border border-gray-300 px-2 py-0.5 w-[8%]">难度</th>
                        <th className="border border-gray-300 px-2 py-0.5 w-[10%]">本节位置</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 font-bold">A</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><strong>一边切点已给</strong><br /><span className="text-[0.85em]">"在某点处切线" + "也是…切线"</span></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><strong>1.1 + 1.3 串联</strong>：先 1.1 算切线，再 1.3 反求另一边参数。</td>
                        <td className="border border-gray-300 px-2 py-0.5">★★★</td>
                        <td className="border border-gray-300 px-2 py-0.5">1.4.1</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 font-bold">B</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><strong>两边切点都未知</strong><br /><span className="text-[0.85em]">"求 <Math tex="f,\,g" /> 的公切线方程"</span></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><strong>双切点联立</strong>：设 <Math tex="(m,\,f(m))" /> 与 <Math tex="(t,\,g(t))" />，列斜率相等 + 截距相等。</td>
                        <td className="border border-gray-300 px-2 py-0.5">★★★★</td>
                        <td className="border border-gray-300 px-2 py-0.5">1.4.2</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 font-bold">C</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><strong>公切线条数 / 含参</strong><br /><span className="text-[0.85em]">"有几条…？"，"求 <Math tex="a" /> 范围"</span></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">在 B 的方程组里把变量化为关于 <Math tex="t" /> 的方程，<strong>方程根的个数 = 公切线条数</strong>，分类讨论。</td>
                        <td className="border border-gray-300 px-2 py-0.5">★★★★★</td>
                        <td className="border border-gray-300 px-2 py-0.5">1.4.3</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="px-2 py-1 border-t border-gray-300 text-[0.85em]"><strong>📖 学习路径</strong>：A 型其实只是 1.1 和 1.3 的串联，新方法在 B 型的"双切点联立"。C 型是 B 型 + 分类讨论。</p>
                </div>

                {/* ═══════════════════════════════════════════════════════ */}
                {/* 1.4.1 A 型：单边切点已知（1.1 + 1.3 串联）                 */}
                {/* ═══════════════════════════════════════════════════════ */}
                <div className="px-2 py-1 font-bold text-gray-900 bg-blue-50 border-l-4 border-blue-500">1.4.1　A 型：一边切点已给（★★★ 用 1.1 + 1.3 串联）</div>

                {/* ── 两步法速查 ── */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🎯 两步法速查（不需要新方法，前面学过的拼起来）</div>
                  <div className="px-2 py-0.5 space-y-1">
                    <p className="pl-2"><strong>① 用 1.1 算出切线</strong>：在切点已知的曲线上，套三板斧（切点纵坐标 → 斜率 → 点斜式），得到具体切线方程 <Math tex="y=kx+b" />。</p>
                    <p className="pl-2"><strong>② 用 1.3 反求另一边参数</strong>：把这条 <Math tex="y=kx+b" /> 看成"已知切线"，配合另一条带参曲线，套 1.3 三步法。</p>
                    <hr className="border-gray-300" />
                    <p className="text-red-700"><strong>⚠️ 关键点</strong>：第②步要<strong>给另一条曲线设新切点</strong>（用 <Math tex="t" />），不能复用第①步那个切点 —— 两条曲线的切点通常在不同位置。</p>
                  </div>
                </div>

                {/* ── 详解：例 1（2024 高考真题）── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：<strong>例 1</strong>　曲线 <Math tex="y=e^x+x" /> 在 <Math tex="(0,1)" /> 处的切线也是曲线 <Math tex="y=\ln(x+1)+a" /> 的切线，求 <Math tex="a" /><span className="font-normal ml-2 text-[0.85em]">A 型 · 2024 高考</span></div>
                  <div className="px-2 py-0.5 space-y-1">
                    <p className="pl-2"><strong>① 用 1.1 算切线</strong>：设 <Math tex="f(x)=e^x+x" />，求导 <Math tex="f'(x)=(e^x+x)'=e^x+1" />。</p>
                    <p className="pl-4">题目给切点 <Math tex="(0,\,1)" />，代切点横坐标得斜率 <Math tex="f'(0)=e^0+1=2" />。</p>
                    <p className="pl-4">将切点 <Math tex="(0,\,1)" /> 和斜率 <Math tex="2" /> 代入点斜式 <Math tex="y-1=2(x-0)" />，即 <strong>切线 <Math tex="y=2x+1" /></strong>。</p>
                    <hr className="border-gray-300" />
                    <p className="pl-2"><strong>② 用 1.3 反求 <Math tex="a" /></strong>：把切线 <Math tex="y=2x+1" /> 当成已知，配合新曲线 <Math tex="g(x)=\ln(x+1)+a" /> 套 1.3 三步法。</p>
                    <p className="pl-4"><strong>(i) 准备</strong>：设新切点 <Math tex="(t,\,g(t))" />，求导 <Math tex="g'(x)=\dfrac{1}{x+1}" />（复合函数链式法则：内层 <Math tex="x+1" /> 求导为 <Math tex="1" />，故结果就是 <Math tex="\dfrac{1}{x+1}" />）。</p>
                    <p className="pl-4"><strong>(ii) 列斜率方程定切点</strong>：由 <Math tex="g'(t)=\dfrac{1}{t+1}=k=2" /> 得 <Math tex="t+1=\dfrac{1}{2}" />，<Math tex="t=-\dfrac{1}{2}" />。</p>
                    <hr className="border-gray-300" />
                    <p className="pl-4"><strong>(iii)</strong> 把 <Math tex="t=-\dfrac{1}{2}" /> 代入 <Math tex="g(x)" /> 算切点纵坐标 <Math tex="g\!\left(-\dfrac{1}{2}\right)=\ln\!\left(-\dfrac{1}{2}+1\right)+a=\ln\!\left(\dfrac{1}{2}\right)+a=\ln 1-\ln 2+a=-\ln 2+a" />。</p>
                    <hr className="border-gray-300" />
                    <p className="pl-8">切点 <Math tex="\left(-\dfrac{1}{2},\,-\ln 2+a\right)" /> 代入切线 <Math tex="y=2x+1" /> 得 <Math tex="-\ln 2+a=2\cdot\!\left(-\dfrac{1}{2}\right)+1" />，化简右边为 <Math tex="0" />，所以 <strong><Math tex="a=\ln 2" /></strong>。</p>
                  </div>
                </div>

                {/* ── 💪 随手算（陷阱题） ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="💪 随手算（陷阱题）" questions={derivCommonTangentWarmup} explanations={derivativeApplicationExplanations} hideBlankLine optionCols={1} printOptionCols={1}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivCommonTangentWarmup} printOptionCols={1} columns={1} />
                </div>

                {/* ═══════════════════════════════════════════════════════ */}
                {/* 1.4.2 B 型：双切点联立                                     */}
                {/* ═══════════════════════════════════════════════════════ */}
                <div className="px-2 py-1 font-bold text-gray-900 bg-blue-50 border-l-4 border-blue-500">1.4.2　B 型：两边切点都未知（★★★★ 双切点联立法）</div>

                {/* ── 核心思路 ── */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🎯 核心思路：两条曲线 = 两个切点 = 两个未知数</div>
                  <div className="px-2 py-0.5 space-y-1">
                    <p>设 <Math tex="f(x)" /> 的切点为 <Math tex="(m,\,f(m))" />，<Math tex="g(x)" /> 的切点为 <Math tex="(t,\,g(t))" />（<strong>用不同字母</strong>）。</p>
                    <p>这两个切点对应的切线必须是<strong>同一条直线</strong>，两条直线相同 ⇔ <strong>斜率相等 + 截距相等</strong>：</p>
                    <p className="pl-4"><strong>① 斜率相等</strong>：<Math tex="f'(m)=g'(t)" /></p>
                    <p className="pl-4"><strong>② 截距相等</strong>：<Math tex="f(m)-m\cdot f'(m)=g(t)-t\cdot g'(t)" /></p>
                    <hr className="border-gray-300" />
                    <p>这是关于 <Math tex="m,\,t" /> 的<strong>方程组</strong>，联立解出 <Math tex="m,\,t" />，再代回写公切线。</p>
                  </div>
                </div>

                {/* ── 截距公式来源 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-0.5 space-y-1">
                    <p>切线点斜式 <Math tex="y-f(m)=f'(m)(x-m)" /> 整理为斜截式 <Math tex="y=f'(m)\cdot x+\bigl[f(m)-m\cdot f'(m)\bigr]" />。</p>
                    <hr className="border-gray-300" />
                    <p>所以斜率 <Math tex="k=f'(m)" />、截距 <Math tex="b=f(m)-m\cdot f'(m)" />。<strong>记住这条公式</strong>，后面双切点法直接套。</p>
                  </div>
                </div>

                {/* ── 四步法速查 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📋 双切点四步法速查</div>
                  <div className="px-2 py-0.5 space-y-1">
                    <p className="pl-2"><strong>① 准备</strong>：分别求导 <Math tex="f'(x),\,g'(x)" />；设 <Math tex="f" /> 切点 <Math tex="(m,\,f(m))" /> 和 <Math tex="g" /> 切点 <Math tex="(t,\,g(t))" />。</p>
                    <p className="pl-2"><strong>② 列斜率方程</strong>：<Math tex="f'(m)=g'(t)" />。</p>
                    <p className="pl-2"><strong>③ 列截距方程</strong>：<Math tex="f(m)-m\cdot f'(m)=g(t)-t\cdot g'(t)" />。</p>
                    <p className="pl-2"><strong>④ 联立解 <Math tex="m,\,t" /></strong>：可能有多组解（→ 多条公切线），每组都代回写出切线。</p>
                  </div>
                </div>

                {/* ── 详解：例 2 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：<strong>例 2</strong>　求 <Math tex="y=x^2" /> 与 <Math tex="y=x^2-4x+8" /> 的公切线方程<span className="font-normal ml-2">——B 型标准题</span></div>
                  <div className="px-2 py-0.5 space-y-1">
                    <p className="pl-2"><strong>① 准备</strong>：<Math tex="f(x)=x^2" />，<Math tex="f'(x)=2x" />；<Math tex="g(x)=x^2-4x+8" />，<Math tex="g'(x)=2x-4" />。</p>
                    <p className="pl-4">设 <Math tex="f" /> 切点 <Math tex="(m,\,f(m))" /> 和 <Math tex="g" /> 切点 <Math tex="(t,\,g(t))" />。</p>
                    <hr className="border-gray-300" />
                    <p className="pl-2"><strong>② 斜率相等</strong>：<Math tex="2m=2t-4" />，即 <Math tex="m=t-2" />。</p>
                    <hr className="border-gray-300" />
                    <p className="pl-2"><strong>③ 截距相等</strong>：<Math tex="f" /> 切线截距 <Math tex="f(m)-m\cdot f'(m)=m^2-m\cdot 2m=-m^2" />。</p>
                    <p className="pl-[6em]"><Math tex="g" /> 切线截距 <Math tex="g(t)-t\cdot g'(t)=(t^2-4t+8)-t(2t-4)=8-t^2" />。</p>
                    <p className="pl-[6em]">由 <Math tex="-m^2=8-t^2" /> 得 <Math tex="t^2-m^2=8" />。</p>
                    <hr className="border-gray-300" />
                    <p className="pl-2"><strong>④ 联立解参</strong>：把 <Math tex="m=t-2" /> 代入 <Math tex="t^2-m^2=8" /> 得 <Math tex="t^2-(t-2)^2=8" />。</p>
                    <p className="pl-[6em]">展开 <Math tex="t^2-(t^2-4t+4)=4t-4=8" />，得 <Math tex="t=3" />，则 <Math tex="m=t-2=1" />。</p>
                    <p className="pl-[6em]">代回切点 <Math tex="(m,\,f(m))=(1,\,1)" />，斜率 <Math tex="2m=2" />，点斜式 <Math tex="y-1=2(x-1)" />，即 <strong><Math tex="y=2x-1" /></strong>。</p>
                  </div>
                </div>

                {/* ═══════════════════════════════════════════════════════ */}
                {/* 1.4.3 C 型：公切线条数 / 含参                              */}
                {/* ═══════════════════════════════════════════════════════ */}
                <div className="px-2 py-1 font-bold text-gray-900 bg-blue-50 border-l-4 border-blue-500">1.4.3　C 型：公切线条数 / 含参（★★★★★ 高考压轴最难形态）</div>

                {/* ── 核心思路 ── */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🎯 核心思路：把方程组化成一元方程，根的个数 = 公切线条数</div>
                  <div className="px-2 py-0.5 space-y-1">
                    <p>题目改问"有几条公切线"或"求 <Math tex="a" /> 范围"时，本质就是：</p>
                    <p className="pl-4">用 B 型双切点法列方程组 → 把 <Math tex="m,\,t" /> 中一个消去（一般用斜率方程消 <Math tex="m" />），化成<strong>关于 <Math tex="t" /> 的一元方程（含参 <Math tex="a" />）</strong>。</p>
                    <p className="pl-4"><strong>每个 <Math tex="t" /> 解 ⟷ 一条公切线</strong>，所以条数 = 关于 <Math tex="t" /> 的方程的<strong>实根个数</strong>。</p>
                  </div>
                </div>

                {/* ── 详解：例 3 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：<strong>例 3</strong>　讨论 <Math tex="y=x^2" /> 与 <Math tex="y=-(x-a)^2" /> 的公切线条数<span className="font-normal ml-2">——C 型分类讨论</span></div>
                  <div className="px-2 py-0.5 space-y-1">
                    <p className="pl-2"><strong>① 准备</strong>：<Math tex="f(x)=x^2,\,f'(x)=2x" />；<Math tex="g(x)=-(x-a)^2,\,g'(x)=-2(x-a)" />。</p>
                    <p className="pl-4">设 <Math tex="f" /> 切点 <Math tex="(m,\,f(m))" /> 和 <Math tex="g" /> 切点 <Math tex="(t,\,g(t))" />。</p>
                    <hr className="border-gray-300" />
                    <p className="pl-2"><strong>② 斜率相等</strong>：<Math tex="2m=-2(t-a)" />，即 <Math tex="m=a-t" />。</p>
                    <hr className="border-gray-300" />
                    <p className="pl-2"><strong>③ 截距相等</strong>：<Math tex="f" /> 切线截距 <Math tex="f(m)-m\cdot f'(m)=m^2-m\cdot 2m=-m^2" />。</p>
                    <p className="pl-[6em]"><Math tex="g" /> 切线截距 <Math tex="g(t)-t\cdot g'(t)=(-t^2+2at-a^2)-(-2t^2+2at)=t^2-a^2" />。</p>
                    <p className="pl-[6em]">由 <Math tex="-m^2=t^2-a^2" /> 得 <Math tex="a^2-m^2=t^2" />。</p>
                    <hr className="border-gray-300" />
                    <p className="pl-2"><strong>④ 联立化简</strong>：把 <Math tex="m=a-t" /> 代入 <Math tex="a^2-m^2=t^2" /> 得 <Math tex="a^2-(a-t)^2=t^2" />。</p>
                    <p className="pl-4">展开 <Math tex="a^2-(a^2-2at+t^2)=2at-t^2=t^2" />，两边同除以 <Math tex="2" /> 得 <Math tex="at=t^2" />，即 <Math tex="t(t-a)=0" />，所以 <Math tex="t=0" /> 或 <Math tex="t=a" />。</p>
                    <hr className="border-gray-300" />
                    <p className="pl-2"><strong>⑤ 分类讨论</strong>：临界点就是<strong>让两根相等的 <Math tex="a" /> 值</strong>——本题 <Math tex="t=0" /> 与 <Math tex="t=a" /> 相等当且仅当 <Math tex="a=0" />，所以以 <Math tex="a=0" /> 为分界。</p>
                    <p className="pl-4"><strong>当 <Math tex="a\ne 0" /></strong>：<Math tex="t=0" /> 与 <Math tex="t=a" /> 是<strong>两个不同的根</strong>，对应 <strong>2 条公切线</strong>。</p>
                    <p className="pl-4"><strong>当 <Math tex="a=0" /></strong>：两根重合 <Math tex="t=0" />，只有 <strong>1 条公切线</strong>（即 <Math tex="x" /> 轴）。</p>
                  </div>
                </div>

                {/* ── 易错三坑 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">⚠️ 三个高频踩坑</div>
                  <div className="px-2 py-0.5 grid grid-cols-3 [&>div]:px-2 [&>div]:py-1 text-[0.78rem]">
                    <div className="border-r border-gray-300">
                      <p className="font-bold">① 两曲线切点用同一字母</p>
                      <p>设切点必须用<strong>不同字母</strong>（如 <Math tex="m,\,t" />），都写 <Math tex="t" /> 会把两个切点强行变成同一点，方程错乱。</p>
                    </div>
                    <div className="border-r border-gray-300">
                      <p className="font-bold">② 漏掉公切线</p>
                      <p>方程组可能有<strong>多组解</strong>，每组对应一条公切线。常见是解出 <Math tex="t" /> 的二次方程后只取一根。</p>
                    </div>
                    <div>
                      <p className="font-bold">③ 截距公式记错</p>
                      <p>切线截距 <Math tex="b=f(m)-m\cdot f'(m)" />，即<strong>函数值 － 横坐标 × 导数值</strong>。三项缺一不可。</p>
                    </div>
                  </div>
                </div>

                {/* ── 一句话看穿 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px bg-amber-50">
                  <div className="px-2 py-1.5">
                    <p><strong>💡 一句话看穿这节</strong>：公切线 = <strong>两条曲线各贡献一个切点</strong>，再用<strong>"斜率相等 + 截距相等"</strong>把两条切线绑成同一条直线。</p>
                  </div>
                </div>

                {/* ── 即时练习 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="" questions={derivCommonTangentPractice} explanations={derivativeApplicationExplanations} hideBlankLine optionCols={1} printOptionCols={1}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivCommonTangentPractice} printOptionCols={1} columns={1} />
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
