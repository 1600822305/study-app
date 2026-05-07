import { Math, Collapsible, PageHeader, LessonLayout, ExportButton, PracticeCard, PrintQuestions, UnifiedDebugToggle } from '@/components/shared';
import { derivMethodProgressItems } from './data/3.6.0/3.6.0-deriv-method-progress';
import { derivMono1Warmup, derivMono2Variants, derivMono34Practice, derivMono56Practice, derivThreadPractice, derivHiddenZeroPractice } from './data/3.6.0/3.6.0-deriv-method-practice';
import { DerivMethodAnswers, derivMethodExplanations } from './3.6.0-deriv-method-answers';
import { useProgress, usePrintMode } from '@/hooks';

export function DerivMethodPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('deriv-method', derivMethodProgressItems);
  const { isPrinting, printOptions } = usePrintMode();

  return (
    <div>
      <div className="[&_h1]:!mb-0 [&_.flex.flex-wrap]:!mt-1">
        <PageHeader
          stage="第三阶段 · 函数思维"
          title="3.6.0 单调性入门"
          tags={[]}
        />
      </div>

      <LessonLayout
        progressItems={progressItems}
        onToggle={toggleProgress}
        sidebarTop={<ExportButton title="3.6.0 单调性入门" />}
      >
        <div className="[&_.rounded-xl]:mb-0 [&_.rounded-xl>.flex.items-center]:py-0.5 [&_.rounded-xl>div:last-child]:px-0 [&_.rounded-xl>div:last-child]:pt-0 [&_.rounded-xl>div:last-child]:pb-0 [&_.rounded-xl_button>span]:font-bold [&_.rounded-xl_button>span]:text-gray-900">

          {/* ═══════════════════════════════════════════════════════ */}
          {/* Section: 单调性入门 */}
          {/* ═══════════════════════════════════════════════════════ */}
          <section id="dm0-monotone-basic" className="mb-0 scroll-mt-4">
            <Collapsible title="一、单调性入门" defaultOpen storageKey="deriv-method:monotone-basic">
              <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

                {/* ═══════════════════════════════════════════════════════ */}
                {/* 1.0 铺垫：导数符号与单调性的关系 + 流程总览                  */}
                {/* ═══════════════════════════════════════════════════════ */}
                <div className="px-2 py-1 font-bold text-gray-900 bg-blue-50 border-l-4 border-blue-500 mb-0.5">1.0　铺垫：导数符号与单调性的关系（核心定理 + 流程）</div>

                {/* ── 为什么要单讲这一节 ── */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="grid grid-cols-[58fr_42fr]">
                    <div className="px-2 py-0.5 space-y-1 border-r border-gray-300">
                      <p><strong>高考定位</strong>：导数大题三连——</p>
                      <p className="pl-4">(1) <strong>判单调性</strong>　(2) 极值 / 最值　(3) 不等式证明</p>
                      <p>(1) 问是<strong>整道题的根</strong>，做出至少拿 5–7 分；做不出后面全废。</p>
                      <p><strong>新高考导数必考，单调性送分地位不变</strong>。</p>
                    </div>
                    <div className="px-2 py-0.5 space-y-1">
                      <p><strong>核心定理</strong>（本节引入）：在区间 <Math tex="I" /> 上，</p>
                      <p className="pl-4">• <Math tex="f'(x)>0" /> ⇒ <Math tex="f(x)" /> 在 <Math tex="I" /> 上<strong>递增</strong></p>
                      <p className="pl-4">• <Math tex="f'(x)<0" /> ⇒ <Math tex="f(x)" /> 在 <Math tex="I" /> 上<strong>递减</strong></p>
                      <hr className="border-gray-300" />
                      <p>所以求单调性 = <strong>解不等式 <Math tex="f'(x)>0" /> / <Math tex="f'(x)<0" /></strong></p>
                    </div>
                  </div>
                </div>

                {/* ── 回顾对比：定义法 vs 导数法 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📖 回顾对比：3.1 学过的<strong>定义法</strong>，本节学的<strong>导数法</strong></div>
                  <table className="w-full border-collapse text-center [&_tr>*:first-child]:border-l-0 [&_tr>*:last-child]:border-r-0">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-2 py-0.5 w-[14%]">方法</th>
                        <th className="border border-gray-300 px-2 py-0.5 w-[36%]">怎么判</th>
                        <th className="border border-gray-300 px-2 py-0.5 w-[28%]">优点</th>
                        <th className="border border-gray-300 px-2 py-0.5">缺点</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 font-bold">定义法<br /><span className="font-normal text-[0.85em]">(3.1)</span></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">任取 <Math tex="x_1<x_2" />，比较 <Math tex="f(x_1)" /> 与 <Math tex="f(x_2)" /> 大小（作差或作商）。</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">原理直接，不依赖求导。</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">作差极繁琐，含 <Math tex="e^x,\ln x" /> 几乎做不动。</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 font-bold">图像法<br /><span className="font-normal text-[0.85em]">(初中 / 3.0.5)</span></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">画出函数图像，从图上读增减区间。</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">直观，二次/反比例函数一眼出。</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">复杂函数（如 <Math tex="x^3-3x" />、<Math tex="xe^x" />）画不准。</td>
                      </tr>
                      <tr className="bg-amber-50">
                        <td className="border border-gray-300 px-2 py-0.5 font-bold text-red-700">导数法<br /><span className="font-normal text-[0.85em]">(本节)</span></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">求 <Math tex="f'(x)" />，看符号——正则增、负则减。</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><strong>通用、机械、稳定</strong>——任何能求导的函数都能做。</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">需要熟练 3.4 的求导公式与法则。</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="px-2 py-1 border-t border-gray-300"><strong>💡 一句话总结</strong>：导数法 = <strong>把"比大小"问题转化为"判正负"问题</strong>——后者只用解不等式 <Math tex="f'(x)>0" /> 或 <Math tex="<0" />，比作差好做百倍。</p>
                </div>

                {/* ── 题型总览 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🗺 四大题型总览：先认清属于哪一类，再套流程</div>
                  <table className="w-full border-collapse text-center text-[0.9rem] [&_tr>*:first-child]:border-l-0 [&_tr>*:last-child]:border-r-0">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-2 py-0.5 w-[8%]">类型</th>
                        <th className="border border-gray-300 px-2 py-0.5 w-[28%]">题目特征</th>
                        <th className="border border-gray-300 px-2 py-0.5">处理方法</th>
                        <th className="border border-gray-300 px-2 py-0.5 w-[10%]">难度</th>
                        <th className="border border-gray-300 px-2 py-0.5 w-[10%]">所在页</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-amber-50">
                        <td className="border border-gray-300 px-2 py-0.5 font-bold">①</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><strong>求单调区间</strong>（不含参）</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">通用流程：求导 → 找零点 → 分段判号 → 写区间。</td>
                        <td className="border border-gray-300 px-2 py-0.5">★</td>
                        <td className="border border-gray-300 px-2 py-0.5 font-bold text-red-700">3.6.0</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 font-bold">②</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><strong>已知单调性</strong>求参范围<br /><span className="text-[0.85em]">"在 <Math tex="[a,b]" /> 上递增"</span></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">转化为 <Math tex="f'(x)\ge 0" /> 在区间上<strong>恒成立</strong>，分参或求最值。</td>
                        <td className="border border-gray-300 px-2 py-0.5">★★★</td>
                        <td className="border border-gray-300 px-2 py-0.5">3.6.1</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 font-bold">③</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><strong>不单调 / 存在</strong>单调区间<br /><span className="text-[0.85em]">"在 <Math tex="(a,b)" /> 不单调"</span></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">转化为 <Math tex="f'(x)=0" /> 在区间上<strong>有解</strong>。<strong>"恒成立 ↔ 有解"反向思维。</strong></td>
                        <td className="border border-gray-300 px-2 py-0.5">★★★</td>
                        <td className="border border-gray-300 px-2 py-0.5">3.6.1</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 font-bold">④</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><strong>含参讨论</strong>单调性<br /><span className="text-[0.85em]">"讨论 <Math tex="f(x)" /> 单调性"</span></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">导函数含参，按<strong>系数正负 / 根的位置</strong>分类讨论。<br /><strong>导数大题 (1) 问的主力。</strong></td>
                        <td className="border border-gray-300 px-2 py-0.5">★★★★</td>
                        <td className="border border-gray-300 px-2 py-0.5">3.6.1</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="px-2 py-1 border-t border-gray-300 text-[0.85em]"><strong>📖 学习路径</strong>：本页（3.6.0）练熟通用流程 → 3.6.1 反向求参（恒成立 / 有解 / 含参讨论）。</p>
                </div>

                {/* ── 通用流程模板（针对正向问题）── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🎯 通用流程（正向问题用）：求导 → 找零点 → 分段判号 → 写区间</div>
                  <table className="w-full border-collapse text-center [&_tr>*:first-child]:border-l-0 [&_tr>*:last-child]:border-r-0">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-2 py-0.5 w-[8%]">步骤</th>
                        <th className="border border-gray-300 px-2 py-0.5 w-[24%]">做什么</th>
                        <th className="border border-gray-300 px-2 py-0.5">注意</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 font-bold">①</td>
                        <td className="border border-gray-300 px-2 py-0.5"><strong>确定定义域</strong></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">含 <Math tex="\ln" /> 解真数 <Math tex=">0" />；含分母解 <Math tex="\ne 0" />；含根号解 <Math tex="\ge 0" />。<strong>所有判号都在定义域内</strong>。</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 font-bold">②</td>
                        <td className="border border-gray-300 px-2 py-0.5"><strong>求导并整理</strong></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">多项式 → 因式分解；分式 → 通分成 <Math tex="\dfrac{\text{分子}}{\text{分母}}" />；<strong>恒正因子直接约掉</strong>。</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 font-bold">③</td>
                        <td className="border border-gray-300 px-2 py-0.5"><strong>找 <Math tex="f'(x)=0" /> 的零点</strong></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">分式 <Math tex="=0" /> <strong>只看分子</strong>。零点解不出来？<strong>再求 <Math tex="f''(x)" /></strong> 判 <Math tex="f'" /> 单调性，反推零点位置。</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 font-bold">④</td>
                        <td className="border border-gray-300 px-2 py-0.5"><strong>分段判 <Math tex="f'" /> 正负</strong></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><strong>零点 + 定义域断点</strong>把定义域切成若干段，<strong>每段代一个值</strong>判正负。</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 font-bold">⑤</td>
                        <td className="border border-gray-300 px-2 py-0.5"><strong>写单调区间</strong></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><Math tex="f'>0" /> 段 → <strong>增</strong>；<Math tex="f'<0" /> 段 → <strong>减</strong>。<strong>定义域有断点必须分开写，不合并</strong>。</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="px-2 py-1 border-t border-gray-300"><strong>💡 核心心法</strong>：判 <Math tex="f" /> 单调性 = 判 <Math tex="f'" /> 正负。形式不同，套路相同——多项式、对数、指数、含参数<strong>全用这一套</strong>。</p>
                </div>

                {/* ═══════════════════════════════════════════════════════ */}
                {/* 1.1 求不含参函数的单调区间                                  */}
                {/* ═══════════════════════════════════════════════════════ */}
                <div className="px-2 py-1 font-bold text-gray-900 bg-blue-50 border-l-4 border-blue-500">1.1　求不含参函数的单调区间（★ 最基础）</div>

                {/* ── 详解：例 1 + 例 2（标准多项式 + 含 ln）── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 例 1：求 <Math tex="f(x)=x^3-3x+2" /> 的单调区间</div>
                  <div className="px-2 py-0.5 space-y-1">
                    <p className="pl-2"><strong>① 定义域</strong>：<Math tex="\mathbb{R}" />（多项式无限制）。<strong>② 求导化简</strong>：<Math tex="f'(x)=3x^2-3=3(x+1)(x-1)" />。</p>
                    <p className="pl-2"><strong>③ 找零点</strong>：令 <Math tex="f'(x)=0" />，则 <Math tex="3(x+1)(x-1)=0" /> 解得 <Math tex="x=-1,\,1" />。</p>
                    <p className="pl-2"><strong>④ 分段判号</strong>：零点将 <Math tex="\mathbb{R}" /> 分为 <Math tex="(-\infty,-1)" />、<Math tex="(-1,1)" />、<Math tex="(1,+\infty)" /> 三段：</p>
                    <hr className="border-gray-300" />
                    <p className="pl-4">• 当 <Math tex="x<-1" /> 时，且 <Math tex="-1<1" />，得 <Math tex="x<-1<1" />，移项得 <Math tex="x+1<0" />，<Math tex="x-1<0" />，则 <Math tex="f'(x)>0" />，故 <Math tex="f(x)" /> 递增</p>
                    <hr className="border-gray-300" />
                    <p className="pl-4">• 当 <Math tex="-1<x<1" /> 时，移项得 <Math tex="x+1>0" />，<Math tex="x-1<0" />，则 <Math tex="f'(x)<0" />，故 <Math tex="f(x)" /> 递减</p>
                    <hr className="border-gray-300" />
                    <p className="pl-4">• 当 <Math tex="x>1" /> 时，移项得 <Math tex="x+1>0" />，<Math tex="x-1>0" />，则 <Math tex="f'(x)>0" />，故 <Math tex="f(x)" /> 递增</p>
                    <hr className="border-gray-300" />
                    <p className="pl-2"><strong>结论</strong>：增区间 <Math tex="(-\infty,-1)" /> 和 <Math tex="(1,+\infty)" />，减区间 <Math tex="(-1,1)" />。</p>
                  </div>
                </div>


                {/* ── 💪 随手算两道 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="💪 随手算两道" questions={derivMono1Warmup} explanations={derivMethodExplanations} hideBlankLine optionCols={2} printOptionCols={2}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivMono1Warmup} printOptionCols={2} columns={2} />
                </div>

                {/* ── 详解：例 2（含 ln，通分技巧）── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 例 2：求 <Math tex="f(x)=x-\ln x" /> 的单调区间</div>
                  <div className="px-2 py-0.5 space-y-1">
                    <p className="pl-2"><strong>① 定义域</strong>：<Math tex="x>0" />（<Math tex="\ln x" /> 要求）。<strong>② 求导通分</strong>：<Math tex="f'(x)=1-\dfrac{1}{x}=\dfrac{x-1}{x}" /></p>
                    <p className="pl-2"><strong>③ 找零点</strong>：分母 <Math tex="x>0" /> 恒正，令分子 <Math tex="x-1=0" />，得 <Math tex="x=1" /></p>
                    <p className="pl-2"><strong>④ 分段判号</strong>：零点 <Math tex="x=1" /> 把定义域 <Math tex="(0,+\infty)" /> 分为 <Math tex="(0,1)" /> 和 <Math tex="(1,+\infty)" /> 两段：</p>
                    <hr className="border-gray-300" />
                    <p className="pl-4">• 当 <Math tex="0<x<1" /> 时，移项得 <Math tex="x-1<0" />，则 <Math tex="f'(x)<0" />，故 <Math tex="f(x)" /> 递减</p>
                    <hr className="border-gray-300" />
                    <p className="pl-4">• 当 <Math tex="x>1" /> 时，移项得 <Math tex="x-1>0" />，则 <Math tex="f'(x)>0" />，故 <Math tex="f(x)" /> 递增</p>
                    <hr className="border-gray-300" />
                    <p className="pl-2"><strong>结论</strong>：增区间 <Math tex="(1,+\infty)" />，减区间 <Math tex="(0,1)" /></p>
                  </div>
                </div>

                <div className="text-base print:hidden">
                  <PracticeCard title="💪 例 2 变式两道" questions={derivMono2Variants} explanations={derivMethodExplanations} hideBlankLine optionCols={2} printOptionCols={2}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivMono2Variants} printOptionCols={2} columns={2} />
                </div>

                {/* ── 前置概念：三种"永远…"（在例 3 之前先讲清楚）── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">通用判号基础：四种恒定符号</div>
                  <div className="space-y-1">
                    <table className="w-full border-collapse text-[0.9rem] [&_tr>*:first-child]:border-l-0 [&_tr>*:last-child]:border-r-0">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="border border-gray-300 px-2 py-0.5 w-[14%]">名称</th>
                          <th className="border border-gray-300 px-2 py-0.5 w-[26%]">含义（定义域上<strong>每一点</strong>）</th>
                          <th className="border border-gray-300 px-2 py-0.5">常见函数</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-2 py-0.5 font-bold text-center">恒为正</td>
                          <td className="border border-gray-300 px-2 py-0.5 text-left"><Math tex="g(x)>0" /> 严格成立<br />（取不到 0，更取不到负）</td>
                          <td className="border border-gray-300 px-2 py-0.5 text-left"><Math tex="e^x" />、<Math tex="e^{ax+b}" />（指数，值域 <Math tex="(0,+\infty)" />）；<br /><Math tex="x^2+1" />（平方加正常数）；<Math tex="\ln" /> 题里的<strong>真数</strong>（定义域保证）</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-0.5 font-bold text-center">恒非负</td>
                          <td className="border border-gray-300 px-2 py-0.5 text-left"><Math tex="g(x)\ge 0" /><br />（<strong>可以等于 0</strong>，但不为负）</td>
                          <td className="border border-gray-300 px-2 py-0.5 text-left"><Math tex="x^2" />、<Math tex="\sqrt{x}" />、<Math tex="|x|" />，共同特点是最小值为 0</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-0.5 font-bold text-center">恒非正</td>
                          <td className="border border-gray-300 px-2 py-0.5 text-left"><Math tex="g(x)\le 0" /><br />（<strong>可以等于 0</strong>，但不为正）</td>
                          <td className="border border-gray-300 px-2 py-0.5 text-left"><Math tex="-x^2" />、<Math tex="-\sqrt{x}" />、<Math tex="-|x|" />，共同特点是最大值为 0</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-0.5 font-bold text-center">恒为负</td>
                          <td className="border border-gray-300 px-2 py-0.5 text-left"><Math tex="g(x)<0" /> 严格成立<br />（取不到 0，更取不到正）</td>
                          <td className="border border-gray-300 px-2 py-0.5 text-left"><Math tex="-e^x" />、<Math tex="-(x^2+1)" />——就是恒为正的相反数</td>
                        </tr>
                      </tbody>
                    </table>
                    <p><strong>判号时怎么用</strong>：先看某个因子是不是一直不变号。</p>
                    <p className="pl-4">• <strong>恒为正</strong>的因子不改变正负，直接看另一个因子；<strong>恒为负</strong>的因子会把正负反过来。</p>
                    <p className="pl-4">• <strong>恒非负</strong>、<strong>恒非正</strong>的因子可能等于 0，写单调区间时要注意它等于 0 的点。</p>
                    <p className="pl-4">• <strong>可正可负</strong>的因子不能省略，必须一起分段判号。</p>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 例 3：求 <Math tex="f(x)=\dfrac{x^3-2x^2}{2x}" /> 的单调区间</div>
                  <div className="px-2 py-0.5 space-y-1">
                    <p className="pl-2"><strong>① 确定定义域</strong>：分母 <Math tex="2x\ne 0" />，所以 <Math tex="x\ne 0" />。也就是说，<Math tex="x=0" /> 不在定义域内，后面写单调区间时必须断开。</p>
                    <hr className="border-gray-300" />
                    <p className="pl-2"><strong>② 求导</strong>：用商法则，<Math tex="f'(x)=\dfrac{(3x^2-4x)\cdot 2x-(x^3-2x^2)\cdot 2}{(2x)^2}=\dfrac{4x^2(x-1)}{4x^2}" /></p>
                    <hr className="border-gray-300" />
                    <p className="pl-2">因为 <Math tex="x^2\ge 0" />，而分母不能为 0，即 <Math tex="x\ne 0" />，所以 <Math tex="x^2>0" />，即 <Math tex="4x^2>0" />，所以 <Math tex="f'(x)" /> 的正负只看 <Math tex="x-1" />。</p>
                    <p className="pl-2"><strong>③ 找零点</strong>：令 <Math tex="f'(x)=0" />，即 <Math tex="4x^2(x-1)=0" />。两边除以 <Math tex="4x^2" />，得 <Math tex="x-1=0" />，解得 <Math tex="x=1" />。</p>
                    <p className="pl-2"><strong>④ 分段判号</strong>：定义域断点 <Math tex="0" /> 和零点 <Math tex="1" /> 把定义域分成 <Math tex="(-\infty,0)" />、<Math tex="(0,1)" />、<Math tex="(1,+\infty)" /> 三段。</p>
                    <p className="pl-4">当 <Math tex="x<0" /> 时，<Math tex="x-1<0" />，所以 <Math tex="f'(x)<0" />，函数递减。</p>
                    <p className="pl-4">当 <Math tex="0<x<1" /> 时，<Math tex="x-1<0" />，所以 <Math tex="f'(x)<0" />，函数递减。</p>
                    <p className="pl-4">当 <Math tex="x>1" /> 时，<Math tex="x-1>0" />，所以 <Math tex="f'(x)>0" />，函数递增。</p>
                    <p className="pl-2"><strong>结论</strong>：减区间 <Math tex="(-\infty,0)" /> 和 <Math tex="(0,1)" />，增区间 <Math tex="(1,+\infty)" />。虽然前两段都是递减，但中间隔着 <Math tex="x=0" />，不能合并。</p>
                  </div>
                </div>

                {/* ── 详解：例 4（带 e^x，应用三种"永远…"概念）── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：<strong>例 4</strong>　求 <Math tex="f(x)=(x-2)e^x" /> 的单调区间<span className="font-normal ml-2">——运用"恒为正"省力判号</span></div>
                  <div className="px-2 py-0.5 space-y-1">
                    <p className="pl-2"><strong>① 定义域</strong>：<Math tex="\mathbb{R}" />。<strong>② 求导</strong>（乘积法则 <Math tex="(uv)'=u'v+uv'" />，口诀：<strong>前导后不导，加前不导后导</strong>）：</p>
                    <p className="pl-4"><Math tex="f'(x)=e^x+xe^x-2e^x=(1+x-2)e^x=(x-1)e^x" /></p>
                    <p className="pl-2"><strong>③ 定号</strong>：<Math tex="e^x" /> <strong>恒为正</strong>（指数函数值域 <Math tex="(0,+\infty)" />），由上表规则，<Math tex="f'(x)=(x-1)e^x" /> 的正负<strong>完全跟随 <Math tex="x-1" /></strong></p>
                    <p className="pl-2"><strong>④ 找零点</strong>：令 <Math tex="f'(x)=0" />，两边约掉 <Math tex="e^x" />（恒为正），得 <Math tex="x-1=0" />，解得 <Math tex="x=1" /></p>
                    <p className="pl-2"><strong>⑤ 分段判号</strong>：零点 <Math tex="x=1" /> 将 <Math tex="\mathbb{R}" /> 分为 <Math tex="(-\infty,1)" /> 和 <Math tex="(1,+\infty)" /> 两段：</p>
                    <p className="pl-4">• 当 <Math tex="x>1" /> 时，移项得 <Math tex="x-1>0" />，又 <Math tex="e^x>0" />，正乘正为正，则 <Math tex="f'(x)>0" />，故 <Math tex="f(x)" /> 递增</p>
                    <p className="pl-4">• 当 <Math tex="x<1" /> 时，移项得 <Math tex="x-1<0" />，又 <Math tex="e^x>0" />，一正一负相乘为负，则 <Math tex="f'(x)<0" />，故 <Math tex="f(x)" /> 递减</p>
                    <p className="pl-2"><strong>结论</strong>：增区间 <Math tex="(1,+\infty)" />，减区间 <Math tex="(-\infty,1)" />。</p>
                  </div>
                </div>

                <div className="text-base print:hidden">
                  <PracticeCard title="💪 例 3 & 例 4 综合练习" questions={derivMono34Practice} explanations={derivMethodExplanations} hideBlankLine optionCols={2} printOptionCols={2}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivMono34Practice} printOptionCols={2} columns={2} />
                </div>

                {/* ── 一句话看穿 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px bg-amber-50">
                  <div className="px-2 py-1.5">
                    <p><strong>💡 一句话看穿这节</strong>：求单调区间 = <strong>定义域 → 求导 → 找零点 → 分段判 <Math tex="f'" /> 正负 → 写区间</strong>。形式不同，套路相同。</p>
                  </div>
                </div>

                {/* ── 详解：例 5（直接解不等式法）── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 例 5：求 <Math tex="f(x)=x^3-3x^2+1" /> 的单调区间<span className="font-normal ml-2">——直接解不等式法</span></div>
                  <div className="px-2 py-0.5 space-y-1">
                    <p className="pl-2"><strong>思路</strong>：除了"找零点 → 分段判号"，还可以<strong>直接解 <Math tex="f'(x)>0" /> 和 <Math tex="f'(x)<0" /></strong>，解集就是单调区间。</p>
                    <hr className="border-gray-300" />
                    <p className="pl-2"><strong>① 定义域</strong>：<Math tex="\mathbb{R}" />。<strong>② 求导</strong>：<Math tex="f'(x)=3x^2-6x=3x(x-2)" /></p>
                    <hr className="border-gray-300" />
                    <p className="pl-2"><strong>③ 解 <Math tex="f'(x)>0" /></strong>：即 <Math tex="3x(x-2)>0" />，两根为 <Math tex="x=0" /> 和 <Math tex="x=2" />，解集为 <Math tex="x<0" /> 或 <Math tex="x>2" />，即增区间 <Math tex="(-\infty,0)" /> 和 <Math tex="(2,+\infty)" /></p>
                    <p className="pl-2"><strong>④ 解 <Math tex="f'(x)<0" /></strong>：即 <Math tex="3x(x-2)<0" />，解集为 <Math tex="0<x<2" />，即减区间 <Math tex="(0,2)" /></p>
                    <hr className="border-gray-300" />
                    <p className="pl-2"><strong>结论</strong>：增区间 <Math tex="(-\infty,0)" /> 和 <Math tex="(2,+\infty)" />，减区间 <Math tex="(0,2)" />。</p>
                    <hr className="border-gray-300" />
                    <p className="pl-2"><strong>💡 适用场景</strong>：导函数是二次式时，直接解不等式比分段判号更快。两种方法等价，选顺手的即可。</p>
                  </div>
                </div>

                {/* ── 详解：例 6（含 ln 的乘积）── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 例 6：求 <Math tex="f(x)=x\ln x" /> 的单调区间<span className="font-normal ml-2">——含 ln 的乘积</span></div>
                  <div className="px-2 py-0.5 space-y-1">
                    <p className="pl-2"><strong>① 定义域</strong>：<Math tex="x>0" />。<strong>② 求导</strong>（乘积法则）：<Math tex="f'(x)=\ln x + x\cdot\dfrac{1}{x}=\ln x+1" /></p>
                    <hr className="border-gray-300" />
                    <p className="pl-2"><strong>③ 找零点</strong>：令 <Math tex="f'(x)=0" />，即 <Math tex="\ln x+1=0" />，得 <Math tex="\ln x=-1" />，对数转指数（<Math tex="\ln x=a" /> 即 <Math tex="x=e^a" />），解得 <Math tex="x=e^{-1}=\dfrac{1}{e}" /></p>
                    <hr className="border-gray-300" />
                    <p className="pl-2"><strong>④ 解 <Math tex="f'(x)>0" /></strong>：即 <Math tex="\ln x+1>0" />，得 <Math tex="\ln x>-1" />，两边取 <Math tex="e" /> 的幂，得 <Math tex="e^{\ln x}>e^{-1}" />，即 <Math tex="x>\dfrac{1}{e}" />，所以增区间 <Math tex="\left(\dfrac{1}{e},+\infty\right)" /></p>
                    <hr className="border-gray-300" />
                    <p className="pl-2"><strong>⑤ 解 <Math tex="f'(x)<0" /></strong>：即 <Math tex="\ln x+1<0" />，得 <Math tex="\ln x<-1" />，两边取 <Math tex="e" /> 的幂，得 <Math tex="e^{\ln x}<e^{-1}" />，即 <Math tex="x<\dfrac{1}{e}" /></p>
                    <hr className="border-gray-300" />
                    <p className="pl-2">又因为定义域要求 <Math tex="x>0" />，所以减区间 <Math tex="\left(0,\dfrac{1}{e}\right)" />　<strong>⚠ 易错</strong>：忘记定义域，误写成 <Math tex="\left(-\infty,\dfrac{1}{e}\right)" /></p>
                    <hr className="border-gray-300" />
                    <p className="pl-2"><strong>结论</strong>：减区间 <Math tex="\left(0,\dfrac{1}{e}\right)" />，增区间 <Math tex="\left(\dfrac{1}{e},+\infty\right)" />。</p>
                  </div>
                </div>

                <div className="text-base print:hidden">
                  <PracticeCard title="💪 例 5 & 例 6 综合练习" questions={derivMono56Practice} explanations={derivMethodExplanations} hideBlankLine optionCols={2} printOptionCols={2}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivMono56Practice} printOptionCols={2} columns={2} />
                </div>
                {/* ── 1.1.2 穿针引线法 ── */}
                <div className="px-2 py-1 font-bold text-gray-900 bg-blue-50 border-l-4 border-blue-500">1.1.2　穿针引线法（快速判号技巧）</div>
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-0.5 space-y-1">
                    <p><strong>适用条件</strong>：<Math tex="f'(x)" /> 已经因式分解为若干一次因子的乘积（最高次系数为正）。</p>
                    <div className="grid grid-cols-[auto_1fr] gap-x-3">
                      <p><strong>步骤</strong>：</p>
                      <div className="space-y-1">
                        <p>① 在数轴上标出 <Math tex="f'(x)=0" /> 的所有根，从最右边根的<strong>右上方</strong>开始，向左画曲线</p>
                        <p>② 遇到<strong>奇次根</strong>（指数为奇数，如 <Math tex="(x-1)^1" />、<Math tex="(x-1)^3" />）：<strong>穿过</strong>数轴</p>
                        <p>遇到<strong>偶次根</strong>（指数为偶数，如 <Math tex="(x-1)^2" />、<Math tex="(x-1)^4" />）：<strong>弹回</strong>，不穿过。口诀：<strong>奇穿偶不穿</strong></p>
                        <p>③ 曲线在数轴<strong>上方</strong>的区间，<Math tex="f'(x)>0" />，<Math tex="f(x)" /> 递增；曲线在数轴<strong>下方</strong>的区间，<Math tex="f'(x)<0" />，<Math tex="f(x)" /> 递减</p>
                      </div>
                    </div>
                    <hr className="border-gray-300" />
                    <p><strong>示例</strong>：<Math tex="f'(x)=3(x+1)(x-1)" />，两个单根 <Math tex="x=-1" /> 和 <Math tex="x=1" /></p>
                    <div className="grid grid-cols-[auto_1fr] gap-2 items-center">
                      <svg width="400" height="90" viewBox="0 0 400 90" className="text-gray-800">
                        {/* 数轴 */}
                        <line x1="30" y1="50" x2="370" y2="50" stroke="currentColor" strokeWidth="1.5" />
                        <polygon points="370,50 362,46 362,54" fill="currentColor" />
                        {/* 根的刻度 */}
                        <line x1="140" y1="44" x2="140" y2="56" stroke="currentColor" strokeWidth="1.5" />
                        <text x="140" y="70" textAnchor="middle" fontSize="14" fill="currentColor" fontWeight="bold">−1</text>
                        <line x1="260" y1="44" x2="260" y2="56" stroke="currentColor" strokeWidth="1.5" />
                        <text x="260" y="70" textAnchor="middle" fontSize="14" fill="currentColor" fontWeight="bold">1</text>
                        {/* 穿线 */}
                        <path d="M 50,25 Q 95,25 140,50 Q 185,75 200,75 Q 215,75 260,50 Q 305,25 350,25" fill="none" stroke="#dc2626" strokeWidth="2" strokeDasharray="6,3" />
                        {/* 箭头方向（左端） */}
                        <polygon points="50,25 58,22 56,30" fill="#dc2626" />
                        {/* 正负号 */}
                        <text x="85" y="22" textAnchor="middle" fontSize="16" fill="#16a34a" fontWeight="bold">+</text>
                        <text x="200" y="88" textAnchor="middle" fontSize="16" fill="#dc2626" fontWeight="bold">−</text>
                        <text x="315" y="22" textAnchor="middle" fontSize="16" fill="#16a34a" fontWeight="bold">+</text>
                        {/* 区间标注 */}
                        <text x="85" y="42" textAnchor="middle" fontSize="11" fill="#6b7280">递增</text>
                        <text x="200" y="42" textAnchor="middle" fontSize="11" fill="#6b7280">递减</text>
                        <text x="315" y="42" textAnchor="middle" fontSize="11" fill="#6b7280">递增</text>
                      </svg>
                      <div className="space-y-0.5 text-[0.85rem]">
                        <p>• <Math tex="x<-1" />：线在上方，<Math tex="f'(x)>0" />，<Math tex="f(x)" /> 递增</p>
                        <p>• <Math tex="-1<x<1" />：穿过 <Math tex="-1" /> 到下方，<Math tex="f'(x)<0" />，<Math tex="f(x)" /> 递减</p>
                        <p>• <Math tex="x>1" />：穿过 <Math tex="1" /> 回上方，<Math tex="f'(x)>0" />，<Math tex="f(x)" /> 递增</p>
                      </div>
                    </div>
                    <hr className="border-gray-300" />
                    <p><strong>重根示例</strong>：<Math tex="f'(x)=(x-1)^2(x-3)" />，<Math tex="x=1" /> 是重根（偶次根），<Math tex="x=3" /> 是单根（奇次根）</p>
                    <div className="grid grid-cols-[auto_1fr] gap-2 items-center">
                      <svg width="400" height="90" viewBox="0 0 400 90" className="text-gray-800">
                        {/* 数轴 */}
                        <line x1="30" y1="50" x2="370" y2="50" stroke="currentColor" strokeWidth="1.5" />
                        <polygon points="370,50 362,46 362,54" fill="currentColor" />
                        {/* 根的刻度 */}
                        <line x1="150" y1="44" x2="150" y2="56" stroke="currentColor" strokeWidth="1.5" />
                        <text x="150" y="70" textAnchor="middle" fontSize="14" fill="currentColor" fontWeight="bold">1</text>
                        <line x1="280" y1="44" x2="280" y2="56" stroke="currentColor" strokeWidth="1.5" />
                        <text x="280" y="70" textAnchor="middle" fontSize="14" fill="currentColor" fontWeight="bold">3</text>
                        {/* 穿线：从右上方开始，穿过3到下方，碰到1弹回下方（不穿过） */}
                        <path d="M 350,25 Q 315,25 280,50 Q 245,75 215,75 Q 185,75 150,50 Q 115,75 70,75" fill="none" stroke="#dc2626" strokeWidth="2" strokeDasharray="6,3" />
                        {/* 箭头方向（左端） */}
                        <polygon points="70,75 78,72 76,80" fill="#dc2626" />
                        {/* 正负号 */}
                        <text x="100" y="88" textAnchor="middle" fontSize="16" fill="#dc2626" fontWeight="bold">−</text>
                        <text x="215" y="88" textAnchor="middle" fontSize="16" fill="#dc2626" fontWeight="bold">−</text>
                        <text x="330" y="22" textAnchor="middle" fontSize="16" fill="#16a34a" fontWeight="bold">+</text>
                        {/* 区间标注 */}
                        <text x="100" y="42" textAnchor="middle" fontSize="11" fill="#6b7280">递减</text>
                        <text x="215" y="42" textAnchor="middle" fontSize="11" fill="#6b7280">递减</text>
                        <text x="330" y="42" textAnchor="middle" fontSize="11" fill="#6b7280">递增</text>
                      </svg>
                      <div className="space-y-0.5 text-[0.85rem]">
                        <p>• <Math tex="x<1" />：线在下方，<Math tex="f'(x)<0" />，<Math tex="f(x)" /> 递减</p>
                        <p>• <Math tex="1<x<3" />：碰 <Math tex="1" /> 弹回（重根，不穿），仍在下方，<Math tex="f'(x)<0" />，<Math tex="f(x)" /> 递减</p>
                        <p>• <Math tex="x>3" />：穿过 <Math tex="3" /> 到上方，<Math tex="f'(x)>0" />，<Math tex="f(x)" /> 递增</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-base print:hidden">
                  <PracticeCard title="💪 穿针引线法练习" questions={derivThreadPractice} explanations={derivMethodExplanations} hideBlankLine optionCols={1} printOptionCols={1}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivThreadPractice} printOptionCols={1} columns={1} />
                </div>

                {/* ── 1.1.3 高考答题模板 + 扣分点 ── */}
                <div className="px-2 py-1 font-bold text-gray-900 bg-blue-50 border-l-4 border-blue-500">1.1.3　高考答题模板与常见扣分点</div>
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📝 标准答题模板（以例 1 为例）</div>
                  <div className="px-2 py-0.5 space-y-1">
                    <p><strong>第一步</strong>：写定义域。<Math tex="f(x)=x^3-3x+2" /> 的定义域为 <Math tex="\mathbb{R}" /> <span className="text-green-700 font-bold text-[0.82rem]">← 1 分</span></p>
                    <p><strong>第二步</strong>：求导。<Math tex="f'(x)=3x^2-3=3(x+1)(x-1)" /> <span className="text-green-700 font-bold text-[0.82rem]">← 1 分</span></p>
                    <p><strong>第三步</strong>：令 <Math tex="f'(x)=0" />，解得 <Math tex="x=-1" /> 或 <Math tex="x=1" /> <span className="text-green-700 font-bold text-[0.82rem]">← 1 分</span></p>
                    <p><strong>第四步</strong>：分段判号</p>
                    <p className="pl-4">当 <Math tex="x<-1" /> 时，<Math tex="f'(x)>0" />，<Math tex="f(x)" /> 单调递增 <span className="text-green-700 font-bold text-[0.82rem]">← 1 分</span></p>
                    <hr className="border-gray-300" />
                    <p className="pl-4">当 <Math tex="-1<x<1" /> 时，<Math tex="f'(x)<0" />，<Math tex="f(x)" /> 单调递减 <span className="text-green-700 font-bold text-[0.82rem]">← 1 分</span></p>
                    <hr className="border-gray-300" />
                    <p className="pl-4">当 <Math tex="x>1" /> 时，<Math tex="f'(x)>0" />，<Math tex="f(x)" /> 单调递增 <span className="text-green-700 font-bold text-[0.82rem]">← 1 分</span></p>
                    <hr className="border-gray-300" />
                    <p><strong>第五步</strong>：写结论。所以 <Math tex="f(x)" /> 的单调递增区间为 <Math tex="(-\infty,-1)" /> 和 <Math tex="(1,+\infty)" />，单调递减区间为 <Math tex="(-1,1)" /> <span className="text-green-700 font-bold text-[0.82rem]">← 1 分</span></p>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">⚠ 常见扣分点（每条都是真实丢分）</div>
                  <table className="w-full border-collapse text-[0.82rem] [&_tr>*:first-child]:border-l-0 [&_tr>*:last-child]:border-r-0">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-1.5 py-0.5 w-[6%]">序号</th>
                        <th className="border border-gray-300 px-1.5 py-0.5 w-[30%]">错误写法</th>
                        <th className="border border-gray-300 px-1.5 py-0.5 w-[30%]">正确写法</th>
                        <th className="border border-gray-300 px-1.5 py-0.5 w-[34%]">原因</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 text-center font-bold">1</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-red-600">增区间 <Math tex="(-\infty,-1)\cup(1,+\infty)" /></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-green-700">增区间 <Math tex="(-\infty,-1)" /> 和 <Math tex="(1,+\infty)" /></td>
                        <td className="border border-gray-300 px-2 py-0.5"><strong>单调区间不能用并集</strong>连接，必须逐个写</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 text-center font-bold">2</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-red-600">忘写定义域，直接求导</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-green-700">第一步先写定义域</td>
                        <td className="border border-gray-300 px-2 py-0.5"><strong>含 <Math tex="\ln" />、分式、根号</strong>的函数，定义域不是 <Math tex="\mathbb{R}" /></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 text-center font-bold">3</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-red-600">忽略定义域，写成 <Math tex="(-\infty,e)" /></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-green-700">减区间 <Math tex="(0,e)" /></td>
                        <td className="border border-gray-300 px-2 py-0.5"><strong>忘记与定义域取交集</strong></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 text-center font-bold">4</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-red-600"><Math tex="f(x)" /> 在 <Math tex="(-\infty,0)\cup(0,1)" /> 上递减</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-green-700">减区间 <Math tex="(-\infty,0)" /> 和 <Math tex="(0,1)" /></td>
                        <td className="border border-gray-300 px-2 py-0.5"><strong>定义域断开处，单调区间也要断开</strong></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 text-center font-bold">5</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-red-600">只用 <Math tex="f'(x)=0" /> 的根分段</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-green-700">零点、断点、导数不存在点一起分段</td>
                        <td className="border border-gray-300 px-2 py-0.5"><strong>分段点不只看零点</strong></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 text-center font-bold">6</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-red-600"><Math tex="f'(x)=0" />，所以单调性一定改变</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-green-700">还要看零点两侧 <Math tex="f'" /> 的正负</td>
                        <td className="border border-gray-300 px-2 py-0.5"><strong>零点不一定变号</strong></td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="px-2 py-1 border-t border-gray-300"><strong>💡 记住</strong>：定义域是第一步也是最后一步——求导前要看定义域，写答案时还要和定义域取交集。</p>
                </div>

                {/* ── 1.1.4 零点不一定变号 ── */}
                <div className="px-2 py-1 font-bold text-gray-900 bg-blue-50 border-l-4 border-blue-500">1.1.4　<Math tex="f'(x)=0" /> 的零点不一定是分界点</div>
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-0.5 space-y-1">
                    <p><strong>反例</strong>：<Math tex="f(x)=x^3" />，<Math tex="f'(x)=3x^2" />，<Math tex="f'(0)=0" />。</p>
                    <p className="pl-4">但 <Math tex="3x^2\ge 0" /> 恒成立，<Math tex="x=0" /> 两侧 <Math tex="f'>0" />，<strong>没有变号</strong>，所以 <Math tex="f" /> 在 <Math tex="\mathbb{R}" /> 上始终递增，<Math tex="x=0" /> 不写进区间端点。</p>
                    <hr className="border-gray-300" />
                    <p><strong>判断方法</strong>：求出零点后，<strong>代两侧的值判正负</strong>。两侧同号 = 不变号 = 不分段。</p>
                    <p><strong>速判口诀</strong>（导函数已因式分解）：<strong>奇次因子的零点变号，偶次因子的零点不变号</strong>。即 1.1.2 的"奇穿偶不穿"。</p>
                    <hr className="border-gray-300" />
                    <p><strong>补充：<Math tex="f'\ge 0" /> 能不能推递增？</strong></p>
                    <p className="pl-4">上面的反例中，<Math tex="f'(x)=3x^2\ge 0" />，注意是"大于<strong>等于</strong>"，不是严格大于。核心定理写的是 <Math tex="f'>0" /> 才递增，那等于 0 的点咋办</p>
                    <p className="pl-4"><strong>结论</strong>：只要 <Math tex="f'=0" /> 只在个别点取到（不是在一整段区间上等于 0），<Math tex="f" /> 仍然单调递增。</p>
                    <p className="pl-4">• <Math tex="f'\ge 0" />，且 <Math tex="=0" /> 只在个别点，则 <Math tex="f" /> 单调递增</p>
                    <p className="pl-4">• <Math tex="f'\le 0" />，且 <Math tex="=0" /> 只在个别点，则 <Math tex="f" /> 单调递减</p>
                    <p className="pl-4"><strong>高考怎么写</strong>：直接写"<Math tex="f'(x)\ge 0" /> 恒成立，所以 <Math tex="f(x)" /> 单调递增"，不扣分。</p>
                  </div>
                </div>

                {/* ── 1.1.5 端点开闭约定 ── */}
                <div className="px-2 py-1 font-bold text-gray-900 bg-blue-50 border-l-4 border-blue-500">1.1.5　端点开闭约定（万能不扣分写法）</div>
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-0.5 space-y-1">
                    <p><strong>口诀</strong>：<strong>所有单调区间端点一律写开</strong>，即用 <Math tex="(\ )" /> 不用 <Math tex="[\ ]" />。</p>
                    <hr className="border-gray-300" />
                    <p><strong>例</strong>：<Math tex="f(x)=x^3-3x+2" />，零点 <Math tex="x=\pm 1" />。</p>
                    <p className="pl-4">写：增区间 <Math tex="(-\infty,-1)" /> 和 <Math tex="(1,+\infty)" />，减区间 <Math tex="(-1,1)" />　<span className="text-green-700">✓</span></p>
                    <hr className="border-gray-300" />
                    <p><strong>为什么这样写最稳</strong>：</p>
                    <p className="pl-4">• 端点是 <Math tex="\pm\infty" />、定义域断点、<Math tex="\ln x" /> 的 <Math tex="x=0" /> 等情况，<strong>本来就必须写开</strong>，写闭直接扣分。</p>
                    <p className="pl-4">• 其他情况（如零点 <Math tex="x=\pm 1" />），开闭都不扣分，所以写开也对。</p>
                    <p className="pl-4">• 高考阅卷的标准答案就是开区间。</p>
                    <p><strong>结论</strong>：不用记什么时候能闭——<strong>永远写开就行</strong>。</p>
                  </div>
                </div>

                {/* ── 1.1.6 隐零点法 ── */}
                <div className="px-2 py-1 font-bold text-gray-900 bg-blue-50 border-l-4 border-blue-500">1.1.6　隐零点法（<Math tex="f'(x)=0" /> 解不出来时的写法）</div>
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-0.5 space-y-1">
                    <p><strong>问题场景</strong>：求导后得到类似 <Math tex="e^x=2x" /> 或 <Math tex="\ln x=x-1" /> 的方程，左边是超越函数，右边是多项式，<strong>解不出精确数值</strong>。</p>
                    <hr className="border-gray-300" />
                    <p><strong>核心思路</strong>：算不出来就<strong>不算</strong>——用字母 <Math tex="x_0" /> 代替零点，然后用 <Math tex="x_0" /> 作为分界点写单调区间。</p>
                    <p className="pl-4">但要用 <Math tex="x_0" /> 分段，必须先确认两件事：<strong>① 零点唯一　② 零点存在</strong>。</p>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🎯 隐零点法通用流程</div>
                  <div className="px-2 py-0.5 space-y-1">
                    <div className="grid grid-cols-[1fr_auto] gap-x-4">
                      <div className="space-y-1">
                        <p><strong>第一步</strong>：确定定义域，求导，发现 <Math tex="f'(x)=0" /> 是超越方程，解不出来</p>
                        <p><strong>第二步</strong>：对 <Math tex="f'(x)" /> 再求导，得 <Math tex="f''(x)" /></p>
                        <p className="pl-4">• 若 <Math tex="f''(x)>0" /> 恒成立，则 <Math tex="f'(x)" /> 严格递增，零点<strong>最多 1 个</strong></p>
                        <p className="pl-4">• 若 <Math tex="f''(x)<0" /> 恒成立，则 <Math tex="f'(x)" /> 严格递减，零点<strong>最多 1 个</strong></p>
                        <p><strong>第三步</strong>：把两个容易算的值代入 <Math tex="f'(x)" />，看是否变号。如果 <Math tex="f'" /> 一正一负，说明零点<strong>存在</strong>，设为 <Math tex="x_0" />，则 <Math tex="f'(x_0)=0" />，且 <Math tex="x_0" /> 在变号的两个值之间</p>
                        <p><strong>第四步</strong>：因为 <Math tex="f'(x_0)=0" />，利用单调性判断两侧正负</p>
                        <p className="pl-4">• 若 <Math tex="f'" /> 递增：<Math tex="x<x_0" /> 则 <Math tex="f'(x)<0" />，<Math tex="x>x_0" /> 则 <Math tex="f'(x)>0" /></p>
                        <p className="pl-4">• 若 <Math tex="f'" /> 递减：<Math tex="x<x_0" /> 则 <Math tex="f'(x)>0" />，<Math tex="x>x_0" /> 则 <Math tex="f'(x)<0" /></p>
                        <p><strong>第五步</strong>：用 <Math tex="x_0" /> 写单调区间</p>
                      </div>
                      <div className="border-l border-gray-300 pl-3">
                        <table className="border-collapse text-[0.85rem] [&_tr>*:first-child]:border-l-0 [&_tr>*:last-child]:border-r-0">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="border border-gray-300 px-2 py-0.5">代入值</th>
                              <th className="border border-gray-300 px-2 py-0.5"><Math tex="e^x" /></th>
                              <th className="border border-gray-300 px-2 py-0.5"><Math tex="\ln x" /></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-2 py-0.5 font-bold text-center"><Math tex="x=0" /></td>
                              <td className="border border-gray-300 px-2 py-0.5"><Math tex="e^0=1" /></td>
                              <td className="border border-gray-300 px-2 py-0.5">—</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-2 py-0.5 font-bold text-center"><Math tex="x=1" /></td>
                              <td className="border border-gray-300 px-2 py-0.5"><Math tex="e\approx 2.718" /></td>
                              <td className="border border-gray-300 px-2 py-0.5"><Math tex="\ln 1=0" /></td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-2 py-0.5 font-bold text-center"><Math tex="x=2" /></td>
                              <td className="border border-gray-300 px-2 py-0.5"><Math tex="e^2\approx 7.389" /></td>
                              <td className="border border-gray-300 px-2 py-0.5"><Math tex="\ln 2\approx 0.693" /></td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-2 py-0.5 font-bold text-center"><Math tex="x=e" /></td>
                              <td className="border border-gray-300 px-2 py-0.5"><Math tex="e^e\approx 15.15" /></td>
                              <td className="border border-gray-300 px-2 py-0.5"><Math tex="\ln e=1" /></td>
                            </tr>
                          </tbody>
                        </table>
                        <p className="text-[0.85rem] mt-1">指数题常先试 <Math tex="x=0,1" /></p>
                        <p className="text-[0.85rem]">对数题常先试 <Math tex="x=1,e" /></p>
                        <p className="text-[0.85rem]">原理：选代入后好算的值</p>
                      </div>
                    </div>
                    <hr className="border-gray-300" />
                    <p><strong>高考怎么写</strong></p>
                    <p>解：定义域为 <Math tex="\mathbb{R}" />。<Math tex="f'(x)=e^x+2x-4" />，<Math tex="f''(x)=e^x+2>0" />，所以 <Math tex="f'(x)" /> 单调递增。又 <Math tex="f'(0)=-3<0" />，<Math tex="f'(1)=e-2>0" />，所以 <Math tex="f'(x)=0" /> 在 <Math tex="(0,1)" /> 上有唯一零点，设为 <Math tex="x_0" />。当 <Math tex="x<x_0" /> 时，<Math tex="f'(x)<0" />，<Math tex="f(x)" /> 递减；当 <Math tex="x>x_0" /> 时，<Math tex="f'(x)>0" />，<Math tex="f(x)" /> 递增。所以增区间为 <Math tex="(x_0,+\infty)" />，减区间为 <Math tex="(-\infty,x_0)" />，其中 <Math tex="x_0\in(0,1)" />。</p>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解例题：求 <Math tex="f(x)=e^x+x^2-4x" /> 的单调区间</div>
                  <div className="px-2 py-0.5 space-y-1">
                    <p><strong>① 定义域、求导</strong>：定义域为 <Math tex="\mathbb{R}" />。<Math tex="f'(x)=e^x+2x-4" />。令 <Math tex="f'(x)=0" />，即 <Math tex="e^x+2x-4=0" />，移项得 <Math tex="e^x=4-2x" />。</p>
                    <p className="pl-4">左边是指数，右边是一次式，这是<strong>超越方程</strong>，解不出精确值。</p>
                    <hr className="border-gray-300" />
                    <p><strong>② 确认零点唯一</strong>：对 <Math tex="f'(x)" /> 再求导，得 <Math tex="f''(x)=e^x+2" />。因为 <Math tex="e^x>0" /> 恒成立，所以 <Math tex="f''(x)=e^x+2>2>0" /> 恒成立</p>
                    <p className="pl-4">所以 <Math tex="f'(x)" /> 在 <Math tex="\mathbb{R}" /> 上<strong>严格递增</strong>，因此 <Math tex="f'(x)=0" /> 最多只有一个根</p>
                    <hr className="border-gray-300" />
                    <p><strong>③ 确认零点存在</strong>：代两个值进去，一正一负，中间必有零点</p>
                    <p className="pl-4"><Math tex="f'(0)=e^0+0-4=1-4=-3<0" /></p>
                    <p className="pl-4"><Math tex="f'(1)=e^1+2-4=e-2\approx 0.718>0" /></p>
                    <p className="pl-4">一个小于 0，一个大于 0，所以 <Math tex="f'(x)=0" /> 在 <Math tex="(0,1)" /> 内<strong>恰有一个根</strong>，设为 <Math tex="x_0" /></p>
                    <hr className="border-gray-300" />
                    <p><strong>④ 判断 <Math tex="x_0" /> 两侧的正负</strong>：零点 <Math tex="x_0" /> 把定义域分成 <Math tex="(-\infty,x_0)" /> 和 <Math tex="(x_0,+\infty)" /> 两段。因为 <Math tex="f'(x)" /> 严格递增，而 <Math tex="f'(x_0)=0" /></p>
                    <p className="pl-4">• 区间 <Math tex="(-\infty,x_0)" /> 即 <Math tex="x<x_0" />，则 <Math tex="f'(x)<f'(x_0)=0" />，所以 <Math tex="f(x)" /> 递减</p>
                    <p className="pl-4">• 区间 <Math tex="(x_0,+\infty)" /> 即 <Math tex="x>x_0" />，则 <Math tex="f'(x)>f'(x_0)=0" />，所以 <Math tex="f(x)" /> 递增</p>
                    <hr className="border-gray-300" />
                    <p><strong>结论</strong>：增区间 <Math tex="(x_0,+\infty)" />，减区间 <Math tex="(-\infty,x_0)" />，其中 <Math tex="x_0\in(0,1)" /></p>
                  </div>
                </div>

                <div className="text-base print:hidden">
                  <PracticeCard title="💪 隐零点法练习" questions={derivHiddenZeroPractice} explanations={derivMethodExplanations} hideBlankLine optionCols={2} printOptionCols={2}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivHiddenZeroPractice} printOptionCols={2} columns={2} />
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📐 原理：二阶导数决定一阶导数的单调性</div>
                  <div className="px-2 py-0.5 space-y-1">
                    <div className="grid grid-cols-[2fr_1px_3fr] gap-4">
                      <div>
                        <p>我们已经知道：<Math tex="f'(x)" /> 的符号决定 <Math tex="f(x)" /> 的单调性</p>
                        <p className="pl-4">• <Math tex="f'(x)>0" /> 则 <Math tex="f(x)" /> 递增</p>
                        <p className="pl-4">• <Math tex="f'(x)<0" /> 则 <Math tex="f(x)" /> 递减</p>
                      </div>
                      <div className="bg-gray-300"></div>
                      <div>
                        <p>同理，<Math tex="f''(x)" /> 是 <Math tex="f'(x)" /> 的导数，所以 <Math tex="f''(x)" /> 的符号决定 <Math tex="f'(x)" /> 的单调性</p>
                        <p className="pl-4">• <Math tex="f''(x)>0" /> 则 <Math tex="f'(x)" /> 递增</p>
                        <p className="pl-4">• <Math tex="f''(x)<0" /> 则 <Math tex="f'(x)" /> 递减</p>
                      </div>
                    </div>
                    <hr className="border-gray-300" />
                    <p><strong>隐零点法的本质</strong>：</p>
                    <p className="pl-4">① 通过 <Math tex="f''(x)" /> 确定 <Math tex="f'(x)" /> 的单调性</p>
                    <p className="pl-4">② 严格单调函数最多只有一个零点（因为严格单调的函数不会"回头"，只能穿过 x 轴一次）</p>
                    <p className="pl-4">③ 代入两个值，一正一负，确认零点存在，设为 <Math tex="x_0" /></p>
                    <p className="pl-4">④ 利用 <Math tex="f'(x)" /> 的单调性和 <Math tex="f'(x_0)=0" /> 判断零点两侧的正负</p>
                  </div>
                </div>

                <div className="px-2 py-1 font-bold text-gray-900 bg-blue-50 border-l-4 border-blue-500">1.1.7　二阶导辅助法（<Math tex="f'(x)=0" /> 解不出来时用）</div>
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-0.5 space-y-1">
                    <p><strong>适用场景</strong>：求导得到 <Math tex="f'(x)" /> 含 <Math tex="e^x" />、<Math tex="\ln x" /> 等，<strong>令 <Math tex="f'(x)=0" /> 是超越方程，解不出来</strong>。</p>
                    <hr className="border-gray-300" />
                    <p><strong>核心思路</strong>：对 <Math tex="f'(x)" /> 再求一次导，用 <Math tex="f''" /> 判 <Math tex="f'" /> 的单调性，再用 <Math tex="f'" /> 单调性反推 <Math tex="f'" /> 的正负。</p>
                    <p className="pl-4">① 求 <Math tex="f''(x)" />，判正负，得 <Math tex="f'(x)" /> 的单调性</p>
                    <p className="pl-4">② 算 <Math tex="f'" /> 在关键点的值（最小值、端点值），看 <Math tex="f'" /> 是<strong>恒正、恒负，还是有变号零点</strong></p>
                    <p className="pl-4">③ 由 <Math tex="f'" /> 的正负，得 <Math tex="f" /> 的单调性</p>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 例 7：求 <Math tex="f(x)=e^x-\dfrac{x^2}{2}-x" /> 的单调区间<span className="font-normal ml-2">——临界情况（最小值 = 0）</span></div>
                  <div className="px-2 py-0.5 space-y-1">
                    <p className="pl-2"><strong>① 定义域</strong>：<Math tex="\mathbb{R}" />。<strong>② 求导</strong>：<Math tex="f'(x)=e^x-x-1" /></p>
                    <p className="pl-2"><strong>③ 找零点</strong>：令 <Math tex="f'(x)=0" />，得 <Math tex="e^x=x+1" />。这是超越方程，<strong>解不出</strong>，需要二阶导辅助。</p>
                    <hr className="border-gray-300" />
                    <p className="pl-2"><strong>④ 求 <Math tex="f''" /></strong>：<Math tex="f''(x)=e^x-1" />。令 <Math tex="f''(x)=0" />，得 <Math tex="e^x=1" />，解得 <Math tex="x=0" />。</p>
                    <p className="pl-2">零点 <Math tex="x=0" /> 将定义域 <Math tex="\mathbb{R}" /> 分割为 <Math tex="(-\infty,0)" /> 和 <Math tex="(0,+\infty)" /> 两个区间。</p>
                    <p className="pl-4">当 <Math tex="x<0" /> 时，<Math tex="e^x<e^0=1" />，移项得 <Math tex="e^x-1<0" />，即 <Math tex="f''(x)<0" />，故 <Math tex="f'(x)" /> 递减。</p>
                    <p className="pl-4">当 <Math tex="x>0" /> 时，<Math tex="e^x>e^0=1" />，移项得 <Math tex="e^x-1>0" />，即 <Math tex="f''(x)>0" />，故 <Math tex="f'(x)" /> 递增。</p>
                    <p className="pl-2">所以 <Math tex="f'(x)" /> 在 <Math tex="x=0" /> 处取<strong>最小值</strong>。</p>
                    <hr className="border-gray-300" />
                    <p className="pl-2"><strong>⑤ 算 <Math tex="f'" /> 最小值</strong>：<Math tex="f'(0)=e^0-0-1=1-0-1=0" /></p>
                    <hr className="border-gray-300" />
                    <p className="pl-2"><strong>⑥ 结论</strong>：<Math tex="f'" /> 的最小值等于 0，所以 <Math tex="f'(x)\ge 0" /> 恒成立，等号仅在 <Math tex="x=0" /> 这一个孤立点取到。</p>
                    <p className="pl-2">因此 <Math tex="f(x)=e^x-\dfrac{x^2}{2}-x" /> 在 <Math tex="\mathbb{R}" /> 上<strong>单调递增</strong>，没有减区间。</p>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px bg-amber-50">
                  <div className="px-2 py-1.5">
                    <p><strong>💡 二阶导辅助法的结论</strong>：证 <Math tex="f'" /> 恒正或恒负，只看一个极值</p>
                    <p className="pl-4">• <strong>最小值 <Math tex=">0" /></strong> ⇒ <Math tex="f'>0" /> ⇒ <Math tex="f" /> 单调递增</p>
                    <p className="pl-4">• <strong>最小值 <Math tex="=0" /></strong>（临界，如例 7）⇒ <Math tex="f'\ge 0" />，等号仅在孤立点 ⇒ <Math tex="f" /> 仍单调递增</p>
                    <p className="pl-4">• <strong>最大值 <Math tex="<0" /></strong> ⇒ <Math tex="f'<0" /> ⇒ <Math tex="f" /> 单调递减</p>
                    <p className="pl-4">• <strong>最大值 <Math tex="=0" /></strong>（临界）⇒ <Math tex="f'\le 0" />，等号仅在孤立点 ⇒ <Math tex="f" /> 仍单调递减</p>
                    <hr className="border-gray-300" />
                    <p><strong>注意</strong>：要证 <Math tex="f" /> 全程递增，看<strong>最小值</strong>；要证全程递减，看<strong>最大值</strong>。看错方向（如想证递增却算最大值）等于没算。</p>
                  </div>
                </div>

              </div>
            </Collapsible>
          </section>

        </div>
      </LessonLayout>
      <UnifiedDebugToggle />
      {isPrinting && printOptions.showAnswers && <DerivMethodAnswers />}
    </div>
  );
}
