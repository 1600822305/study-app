import { Math, Collapsible, PageHeader, LessonLayout, ExportButton, PracticeCard, PrintQuestions, UnifiedDebugToggle } from '@/components/shared';
import { derivMethodProgressItems } from './data/3.6.0/3.6.0-deriv-method-progress';
import { derivMono1Warmup, derivMono2Variants, derivMono34Practice } from './data/3.6.0/3.6.0-deriv-method-practice';
import { derivMethodExplanations } from './3.6.0-deriv-method-answers';
import { useProgress } from '@/hooks';

export function DerivMethodPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('deriv-method', derivMethodProgressItems);

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
                    <p className="pl-2"><strong>④ 解 <Math tex="f'(x)>0" /></strong>：即 <Math tex="\ln x+1>0" />，得 <Math tex="\ln x>-1" />，两边取 <Math tex="e" /> 的幂，得 <Math tex="e^{\ln x}>e^{-1}" />，即 <Math tex="x>\dfrac{1}{e}" />，所以增区间 <Math tex="\left(\dfrac{1}{e},+\infty\right)" /></p>
                    <p className="pl-2"><strong>⑤ 解 <Math tex="f'(x)<0" /></strong>：即 <Math tex="\ln x+1<0" />，得 <Math tex="\ln x<-1" />，两边取 <Math tex="e" /> 的幂，得 <Math tex="e^{\ln x}<e^{-1}" />，即 <Math tex="x<\dfrac{1}{e}" /></p>
                    <p className="pl-2">又因为定义域要求 <Math tex="x>0" />，所以减区间 <Math tex="\left(0,\dfrac{1}{e}\right)" />　<strong>⚠ 易错</strong>：忘记定义域，误写成 <Math tex="\left(-\infty,\dfrac{1}{e}\right)" /></p>
                    <hr className="border-gray-300" />
                    <p className="pl-2"><strong>结论</strong>：减区间 <Math tex="\left(0,\dfrac{1}{e}\right)" />，增区间 <Math tex="\left(\dfrac{1}{e},+\infty\right)" />。</p>
                  </div>
                </div>

                {/* ── 1.1.2 穿针引线法 ── */}
                <div className="px-2 py-1 font-bold text-gray-900 bg-blue-50 border-l-4 border-blue-500">1.1.2　穿针引线法（快速判号技巧）</div>
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-0.5 space-y-1">
                    <p><strong>适用条件</strong>：<Math tex="f'(x)" /> 已经因式分解为若干一次因子的乘积（最高次系数为正）。</p>
                    <p><strong>步骤</strong>：</p>
                    <p className="pl-4">① 在数轴上标出 <Math tex="f'(x)=0" /> 的所有根，从最右边根的<strong>右上方</strong>开始，向左画曲线</p>
                    <p className="pl-4">② 遇到<strong>奇次根</strong>（指数为奇数，如 <Math tex="(x-1)^1" />、<Math tex="(x-1)^3" />）：<strong>穿过</strong>数轴</p>
                    <p className="pl-4" style={{paddingLeft: '2.15rem'}}>遇到<strong>偶次根</strong>（指数为偶数，如 <Math tex="(x-1)^2" />、<Math tex="(x-1)^4" />）：<strong>弹回</strong>，不穿过。口诀：<strong>奇穿偶不穿</strong></p>

                    <p className="pl-4">③ 曲线在数轴<strong>上方</strong>的区间，<Math tex="f'(x)>0" />，<Math tex="f(x)" /> 递增；曲线在数轴<strong>下方</strong>的区间，<Math tex="f'(x)<0" />，<Math tex="f(x)" /> 递减</p>
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

                {/* ── 1.1.3 高考答题模板 + 扣分点 ── */}
                <div className="px-2 py-1 font-bold text-gray-900 bg-blue-50 border-l-4 border-blue-500">1.1.3　高考答题模板与常见扣分点</div>
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
                        <td className="border border-gray-300 px-2 py-0.5 text-red-600">减区间 <Math tex="\left(-\infty,\dfrac{1}{e}\right)" /></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-green-700">减区间 <Math tex="\left(0,\dfrac{1}{e}\right)" /></td>
                        <td className="border border-gray-300 px-2 py-0.5">解出 <Math tex="f'(x)<0" /> 的解集后，<strong>忘了和定义域取交集</strong></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 text-center font-bold">4</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-red-600"><Math tex="f(x)" /> 在 <Math tex="(-\infty,0)\cup(0,1)" /> 上递减</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-green-700">减区间 <Math tex="(-\infty,0)" /> 和 <Math tex="(0,1)" /></td>
                        <td className="border border-gray-300 px-2 py-0.5"><strong>定义域有断点必须分开写</strong>，两段都递减也不能合并</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 text-center font-bold">5</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-red-600">只写"增区间 <Math tex="(1,+\infty)" />"，没有过程</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-green-700">写全：求导、令 <Math tex="f'(x)=0" />、判号、结论</td>
                        <td className="border border-gray-300 px-2 py-0.5"><strong>大题必须有过程</strong>，只写答案最多得 1 分</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="px-2 py-1 border-t border-gray-300"><strong>💡 记住</strong>：定义域是第一步也是最后一步——求导前要看定义域，写答案时还要和定义域取交集。</p>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📝 标准答题模板（以例 1 为例）</div>
                  <div className="px-2 py-0.5 space-y-1">
                    <p><strong>第一步</strong>：写定义域。<Math tex="f(x)=x^3-3x+2" /> 的定义域为 <Math tex="\mathbb{R}" /> <span className="text-green-700 font-bold text-[0.82rem]">← 1 分</span></p>
                    <p><strong>第二步</strong>：求导。<Math tex="f'(x)=3x^2-3=3(x+1)(x-1)" /> <span className="text-green-700 font-bold text-[0.82rem]">← 1 分</span></p>
                    <p><strong>第三步</strong>：令 <Math tex="f'(x)=0" />，解得 <Math tex="x=-1" /> 或 <Math tex="x=1" /> <span className="text-green-700 font-bold text-[0.82rem]">← 1 分</span></p>
                    <p><strong>第四步</strong>：分段判号</p>
                    <p className="pl-4">当 <Math tex="x<-1" /> 时，<Math tex="f'(x)>0" />，<Math tex="f(x)" /> 单调递增 <span className="text-green-700 font-bold text-[0.82rem]">← 1 分</span></p>
                    <p className="pl-4">当 <Math tex="-1<x<1" /> 时，<Math tex="f'(x)<0" />，<Math tex="f(x)" /> 单调递减 <span className="text-green-700 font-bold text-[0.82rem]">← 1 分</span></p>
                    <p className="pl-4">当 <Math tex="x>1" /> 时，<Math tex="f'(x)>0" />，<Math tex="f(x)" /> 单调递增 <span className="text-green-700 font-bold text-[0.82rem]">← 1 分</span></p>
                    <hr className="border-gray-300" />
                    <p><strong>第五步</strong>：写结论。所以 <Math tex="f(x)" /> 的单调递增区间为 <Math tex="(-\infty,-1)" /> 和 <Math tex="(1,+\infty)" />，单调递减区间为 <Math tex="(-1,1)" /> <span className="text-green-700 font-bold text-[0.82rem]">← 1 分</span></p>
                  </div>
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
