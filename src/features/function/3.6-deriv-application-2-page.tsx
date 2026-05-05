import { Math, Collapsible, PageHeader, LessonLayout, ExportButton, PracticeCard, PrintQuestions, UnifiedDebugToggle, PageBreak } from '@/components/shared';
import { derivApplication2ProgressItems } from './data/3.6/3.6-deriv-application-2-progress';
import { derivMono2Warmup, derivMono2Practice, derivMono3Practice, derivMonoDiscussPractice } from './data/3.6/3.6-deriv-application-2-practice';
import { useProgress } from '@/hooks';
import { derivativeApplication2Explanations } from './3.6-deriv-application-2-answers';

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
                      <p className="text-gray-800"><strong>原因</strong>：单调函数允许 <Math tex="f'" /> 在<strong>孤立点处为 0</strong>。<br />例 <Math tex="f(x)=x^3" /> 在 <Math tex="\mathbb{R}" /> 上递增，但 <Math tex="f'(0)=0" />。</p>
                    </div>
                  </div>
                  <div className="px-2 py-1 border-t border-gray-300 text-[0.85rem] text-gray-700">
                    <p>📌 <strong>对比 1.1</strong>：1.1 是<strong>正向判断</strong>（<Math tex="f'>0" /> → 增，<strong>充分条件</strong>就够）；1.2 是<strong>反向求参</strong>（要覆盖临界 <Math tex="a" />，必须用<strong>充要条件 <Math tex="f'\ge 0" /></strong>，否则丢分）。</p>
                  </div>
                </div>

                {/* ── 三步法 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🎯 三步法模板</div>
                  <div className="px-2 py-0.5 space-y-1">
                    <p className="pl-2"><strong>① 求导</strong>：算出 <Math tex="f'(x)" />。<span className="text-gray-700"><strong>参数 <Math tex="a" /> 当成常数</strong>处理（跟数字 <Math tex="2,5,\pi" /> 一样对待，不参与求导）。</span></p>
                    <p className="pl-2"><strong>② 转化</strong>：把"单调递增/递减"换成 <Math tex="f'(x)\ge 0" /> 或 <Math tex="\le 0" /> 在 <Math tex="I" /> 上恒成立。</p>
                    <p className="pl-2"><strong>③ 解恒成立</strong>：<strong>分参</strong>或<strong>求最值（<Math tex="\Delta" /> 法）</strong>，二选一。</p>
                  </div>
                </div>

                {/* ── 认知关：恒成立不等式 vs 普通不等式 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🔑 认知关：这里的不等式跟以前不一样——是<strong>"恒成立"不等式</strong></div>
                  <div className="grid grid-cols-2">
                    <div className="px-2 py-1 space-y-1 border-r border-gray-300">
                      <p className="font-bold">普通不等式（以前做的）</p>
                      <p>给定 <Math tex="a" />，求 <Math tex="x" />。</p>
                      <p className="pl-2">例：<Math tex="3x-a\ge 0" />，若 <Math tex="a=6" />，解得 <Math tex="x\ge 2" />。</p>
                    </div>
                    <div className="px-2 py-1 space-y-1">
                      <p className="font-bold">恒成立不等式（本节）</p>
                      <p><Math tex="x" /> <strong>任意</strong>，求让不等式<strong>永远成立</strong>的 <Math tex="a" />。</p>
                      <p className="pl-2">例：<Math tex="3x^2-a\ge 0" /> 对<strong>所有</strong> <Math tex="x" /> 恒成立，求 <Math tex="a" /> 范围。</p>
                    </div>
                  </div>
                  <hr className="border-gray-300" />
                  <div className="px-2 py-1 space-y-0.5">
                    <p className="font-bold">怎么解？三步走（先把 <Math tex="a" /> 拆出来，<strong>只盯右边的 <Math tex="g(x)" /></strong>）</p>
                    <p className="pl-2"><strong>① 分参</strong>：移项整理成 <Math tex="a\le g(x)" /> 或 <Math tex="a\ge g(x)" />。</p>
                    <p className="pl-2"><strong>② 先别管 <Math tex="a" /></strong>：单独看右边 <Math tex="g(x)" />，它能取啥值？有最小值还是最大值？（看开口、对称轴）</p>
                    <p className="pl-2"><strong>③ 盖住极端那一头</strong>：让 <Math tex="a" /> 盖住 <Math tex="g(x)" /> 取值范围中"最危险"的那一端。</p>
                  </div>
                  <hr className="border-gray-300" />
                  <div className="grid grid-cols-[1fr_auto_1fr]">
                    <div className="px-2 py-0.5 space-y-0.5">
                      <p className="font-bold">情况一：<Math tex="a\le g(x)" /> 恒成立</p>
                      <p>以 <Math tex="a\le 3x^2" /> 对所有 <Math tex="x" /> 恒成立为例。</p>
                      <p className="pl-2"><strong>看右边 <Math tex="3x^2" /></strong>：开口向上，对称轴为 <Math tex="0" />，<strong>最小值 <Math tex="0" /></strong>，没最大值。</p>
                      <p className="pl-2"><strong>意思是</strong>：<Math tex="x" /> 不管取啥值，<Math tex="a" /> 都得 <Math tex="\le 3x^2" />。</p>
                      <p style={{ paddingLeft: 'calc(0.5rem + 4em)' }}><strong>只需 <Math tex="a\le \min(3x^2)=0" /> 即可</strong>。</p>
                      <table className="w-full border-collapse text-center text-[0.8rem] [&_tr>*:first-child]:border-l-0 [&_tr>*:last-child]:border-r-0">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="border border-gray-300 px-1 py-0.5">试 <Math tex="a" /></th>
                            <th className="border border-gray-300 px-1 py-0.5">代 <Math tex="x=0" /> 验证 <Math tex="a\le 0" />？</th>
                            <th className="border border-gray-300 px-1 py-0.5">恒成立？</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td className="border border-gray-300 px-1"><Math tex="a=-1" /></td><td className="border border-gray-300 px-1"><Math tex="-1\le 0" /> 成立</td><td className="border border-gray-300 px-1">✓</td></tr>
                          <tr><td className="border border-gray-300 px-1"><Math tex="a=0" /></td><td className="border border-gray-300 px-1"><Math tex="0\le 0" /> 成立</td><td className="border border-gray-300 px-1">✓ 临界</td></tr>
                          <tr><td className="border border-gray-300 px-1"><Math tex="a=1" /></td><td className="border border-gray-300 px-1"><Math tex="1\le 0" /> 不成立</td><td className="border border-gray-300 px-1">✗ 破功</td></tr>
                        </tbody>
                      </table>
                      <p className="pl-2"><strong>结论</strong>：<Math tex="a\le \min(3x^2)=0" />，即 <strong><Math tex="a\le 0" /></strong>。</p>
                    </div>
                    <div className="w-px bg-gray-300"></div>
                    <div className="px-2 py-0.5 space-y-0.5">
                      <p className="font-bold">情况二：<Math tex="a\ge g(x)" /> 恒成立</p>
                      <p>以 <Math tex="a\ge -3x^2" /> 对所有 <Math tex="x" /> 恒成立为例。</p>
                      <p className="pl-2"><strong>看右边 <Math tex="-3x^2" /></strong>：开口下，对称轴为 <Math tex="0" />，<strong>最大值 <Math tex="0" /></strong>，没最小值。</p>
                      <p className="pl-2"><strong>意思是</strong>：<Math tex="x" /> 不管取啥值，<Math tex="a" /> 都得 <Math tex="\ge -3x^2" />。</p>
                      <p style={{ paddingLeft: 'calc(0.5rem + 4em)' }}><strong>只需 <Math tex="a\ge \max(-3x^2)=0" /> 即可</strong>。</p>
                      <table className="w-full border-collapse text-center text-[0.8rem] [&_tr>*:first-child]:border-l-0 [&_tr>*:last-child]:border-r-0">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="border border-gray-300 px-1 py-0.5">试 <Math tex="a" /></th>
                            <th className="border border-gray-300 px-1 py-0.5">代 <Math tex="x=0" /> 验证 <Math tex="a\ge 0" />？</th>
                            <th className="border border-gray-300 px-1 py-0.5">恒成立？</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td className="border border-gray-300 px-1"><Math tex="a=-1" /></td><td className="border border-gray-300 px-1"><Math tex="-1\ge 0" /> 不成立</td><td className="border border-gray-300 px-1">✗ 破功</td></tr>
                          <tr><td className="border border-gray-300 px-1"><Math tex="a=0" /></td><td className="border border-gray-300 px-1"><Math tex="0\ge 0" /> 成立</td><td className="border border-gray-300 px-1">✓ 临界</td></tr>
                          <tr><td className="border border-gray-300 px-1"><Math tex="a=1" /></td><td className="border border-gray-300 px-1"><Math tex="1\ge 0" /> 成立</td><td className="border border-gray-300 px-1">✓</td></tr>
                        </tbody>
                      </table>
                      <p className="pl-2"><strong>结论</strong>：<Math tex="a\ge \max(-3x^2)=0" />，即 <strong><Math tex="a\ge 0" /></strong>。</p>
                    </div>
                  </div>
                  <hr className="border-gray-300" />
                  <div className="px-2 py-1 space-y-0.5">
                    <p className="font-bold text-gray-900">💡 一句话记忆：恒成立 = 取最值（盖住极端）</p>
                    <table className="w-full border-collapse text-center [&_tr>*:first-child]:border-l-0 [&_tr>*:last-child]:border-r-0">
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="a\le g(x)" /> 恒成立</td>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="a\le g(x)_{\min}" /></td>
                          <td className="border border-gray-300 px-2 py-0.5 text-left"><Math tex="a" /> 要 <Math tex="\le" /> <Math tex="g(x)" /> 的<strong>最小值</strong>（可相等）</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="a\ge g(x)" /> 恒成立</td>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="a\ge g(x)_{\max}" /></td>
                          <td className="border border-gray-300 px-2 py-0.5 text-left"><Math tex="a" /> 要 <Math tex="\ge" /> <Math tex="g(x)" /> 的<strong>最大值</strong>（可相等）</td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="text-gray-700 text-[0.85rem]"><strong>反过来用</strong>：要是 <Math tex="g(x)" /> 那一头的最值<strong>不存在</strong>（比如 <Math tex="a\ge 3x^2" /> 恒成立，但 <Math tex="3x^2" /> 在 <Math tex="\mathbb{R}" /> 上没最大值），就<strong>无解</strong>——题目本身没法满足。</p>
                  </div>
                </div>

                {/* ── 两路径对照 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🗺 两条解题路径：先看参数能不能<strong>干净分离</strong>，再决定走哪条</div>
                  <table className="w-full border-collapse text-center text-[0.9rem] [&_tr>*:first-child]:border-l-0 [&_tr>*:last-child]:border-r-0">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-2 py-0.5 w-[14%]">路径</th>
                        <th className="border border-gray-300 px-2 py-0.5 w-[26%]">何时用</th>
                        <th className="border border-gray-300 px-2 py-0.5">关键转化</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 font-bold">A 分参法</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">参数能干净分离到一边<br />（如 <Math tex="a\ge g(x)" />）</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><Math tex="a\ge g(x)" /> 恒成立 <Math tex="\Leftrightarrow" /> <Math tex="a\ge g(x)_{\max}" /><br /><Math tex="a\le g(x)" /> 恒成立 <Math tex="\Leftrightarrow" /> <Math tex="a\le g(x)_{\min}" /></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 font-bold">B <Math tex="\Delta" /> 法</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><strong>导函数是二次式</strong>，<br />参数和 <Math tex="x" /> 纠缠分不开</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">二次开口向上 + <Math tex="f'\ge 0" /> 在 <Math tex="\mathbb{R}" /> 恒成立 <Math tex="\Leftrightarrow" /> <Math tex="\Delta\le 0" /><br />二次开口向下 + <Math tex="f'\le 0" /> 在 <Math tex="\mathbb{R}" /> 恒成立 <Math tex="\Leftrightarrow" /> <Math tex="\Delta\le 0" /></td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="px-2 py-1 border-t border-gray-300 text-[0.85em]"><strong>📖 选路口诀</strong>：先尝试分参，分得干净就用 A；分完出现 <Math tex="x" /> 与 <Math tex="a" /> 仍纠缠（如同时含 <Math tex="a^2" /> 和 <Math tex="x" />），就用 B。</p>
                </div>

                {/* ── 详解：例 1 + 例 2（分参双例对比） ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：分参法标准流程（例 1 全实数 R + 例 2 区间型）</div>
                  <div>
                    <div className="px-2 py-0.5 space-y-1">
                      <p className="font-bold"><strong>例 1</strong>：<Math tex="f(x)=x^3-ax" /> 在 <Math tex="\mathbb{R}" /> 上单调递增，求 <Math tex="a" /> 的范围。</p>
                      <hr className="border-gray-300" />
                      <p className="pl-2"><strong>① 求导</strong>：<Math tex="f'(x)=3x^2-a" />。</p>
                      <p className="pl-2"><strong>② 转化</strong>：递增 <Math tex="\Leftrightarrow" /> <Math tex="3x^2-a\ge 0" /> 对所有 <Math tex="x\in\mathbb{R}" /> 恒成立。</p>
                      <p className="pl-2"><strong>③ 分参</strong>：移项得 <Math tex="a\le 3x^2" />。因为 <Math tex="a\le 3x^2" /> 恒成立，所以 <Math tex="a\le \min(3x^2)" />。</p>
                      <p className="pl-2"><strong>④ 求最小值</strong>：<Math tex="3x^2" /> 是关于 <Math tex="x" /> 的二次函数，<Math tex="A=3>0" /> 开口向上，对称轴 <Math tex="x=-\dfrac{B}{2A}=0" />，顶点 <Math tex="(0,0)" /> 即最低点，<strong>最小值 <Math tex="=0" /></strong></p>
                      <p className="pl-2">所以 <Math tex="a\le 0" />。<strong>答</strong>：<strong><Math tex="a\le 0" /></strong></p>
                    </div>
                    <div className="border-t border-gray-400"></div>
                    <div className="px-2 py-0.5 space-y-1">
                      <p className="font-bold"><strong>例 2</strong>：<Math tex="f(x)=x^3-ax^2+1" /> 在 <Math tex="(0,2)" /> 内单调递减，求 <Math tex="a" /> 的范围。</p>
                      <hr className="border-gray-300" />
                      <p className="pl-2"><strong>① 求导</strong>：<Math tex="f'(x)=3x^2-2ax" />。</p>
                      <p className="pl-2"><strong>② 转化</strong>：递减 <Math tex="\Leftrightarrow" /> <Math tex="3x^2-2ax\le 0" /> 对所有 <Math tex="x\in(0,2)" /> 恒成立。</p>
                      <p className="pl-2"><strong>③ 分参</strong>：先把 <Math tex="3x^2" /> 移到右边得 <Math tex="3x^2\le 2ax" />，要把 <Math tex="a" /> 单独留在一边，需<strong>两边除 <Math tex="2x" /></strong>。</p>
                      <p className="pl-4">⚠️ 除之前必须确定 <Math tex="2x" /> 的<strong>正负</strong>（决定不等号要不要翻转）。题目区间是 <Math tex="(0,2)" />，即 <Math tex="0<x<2" />，所以 <Math tex="x>0" />、<Math tex="2x>0" />（正数），<strong>不等号方向不变</strong>。两边除 <Math tex="2x" /> 得 <Math tex="\dfrac{3x^2}{2x}\le a" />，化简为 <Math tex="a\ge \dfrac{3x}{2}" /> 恒成立。"<Math tex="a" /> 不小于<strong>所有</strong> <Math tex="\tfrac{3x}{2}" />"，<strong>等价于</strong> <Math tex="a\ge \max\dfrac{3x}{2}" />。</p>
                      <p className="pl-4"><Math tex="\dfrac{3x}{2}" /> 在 <Math tex="(0,2)" /> 上单调递增。<strong>假设两端点 <Math tex="x=0,\,2" /> 都能取到</strong>，则 <Math tex="\dfrac{3x}{2}" /> 在 <Math tex="x=0" /> 处 <Math tex="=0" />，在 <Math tex="x=2" /> 处 <Math tex="=3" />，<strong>较大的是 <Math tex="3" /></strong>。</p>
                      <div className="flex items-end justify-between gap-2 flex-wrap">
                        <div className="flex-1 space-y-1">
                          <p className="pl-4">需要满足 <Math tex="a\ge \dfrac{3x}{2}" />，也就是<strong>当 <Math tex="a\ge 3" /> 时满足</strong>。</p>
                          <p className="pl-2"><strong>结论</strong>：当 <Math tex="a\ge 3" /> 时，<Math tex="a\ge \dfrac{3x}{2}" /> 在 <Math tex="(0,2)" /> 上恒成立。即 <strong><Math tex="a\ge 3" /></strong>。</p>
                        </div>
                        <div className="border border-amber-400 bg-amber-50 rounded px-2 py-1 text-[0.85rem] shrink-0">
                          <p className="font-bold text-amber-900">📊 正反对比（同一 <Math tex="g(x)=\tfrac{3x}{2}" /> 在 <Math tex="(0,2)" />）</p>
                          <p>• <Math tex="a\ge \tfrac{3x}{2}" /> 恒成立 → 取 <strong>max</strong> → <strong><Math tex="a\ge 3" /></strong></p>
                          <p>• <Math tex="a\le \tfrac{3x}{2}" /> 恒成立 → 取 <strong>min</strong> → <strong><Math tex="a\le 0" /></strong></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── 💪 随手算两道 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="💪 随手算两道" questions={derivMono2Warmup} explanations={derivativeApplication2Explanations} hideBlankLine optionCols={1} printOptionCols={1}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivMono2Warmup} printOptionCols={1} columns={1} />
                </div>

                {/* ── Δ 法补充 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px bg-sky-50">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-sky-100">📌 <Math tex="\Delta" /> 法适用条件汇总<span className="font-normal ml-3">⚠️ 只适用于<strong>区间是 <Math tex="\mathbb{R}" /></strong>；区间是 <Math tex="[a,b]" /> 时要老实求二次函数在区间上的最值</span></div>
                  <table className="w-full border-collapse text-center text-[0.85rem] [&_tr>*:first-child]:border-l-0 [&_tr>*:last-child]:border-r-0">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-2 py-0.5 w-[32%]">要恒成立的条件</th>
                        <th className="border border-gray-300 px-2 py-0.5 w-[32%]">导函数 <Math tex="f'(x)" /> 类型</th>
                        <th className="border border-gray-300 px-2 py-0.5">等价于</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5"><Math tex="f'(x)\ge 0" /> 在 <Math tex="\mathbb{R}" /> 上</td>
                        <td className="border border-gray-300 px-2 py-0.5">二次，开口<strong>向上</strong></td>
                        <td className="border border-gray-300 px-2 py-0.5"><Math tex="\Delta\le 0" /></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5"><Math tex="f'(x)\le 0" /> 在 <Math tex="\mathbb{R}" /> 上</td>
                        <td className="border border-gray-300 px-2 py-0.5">二次，开口<strong>向下</strong></td>
                        <td className="border border-gray-300 px-2 py-0.5"><Math tex="\Delta\le 0" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* ── 详解：例 3（Δ 法） ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：<strong>例 3</strong>　<Math tex="f(x)=x^3+ax^2+x" /> 在 <Math tex="\mathbb{R}" /> 上单调递增，求 <Math tex="a" /><span className="font-normal ml-2">——参数纠缠，必须用 <Math tex="\Delta" /> 法</span></div>
                  <div className="px-2 py-0.5 space-y-1">
                    <p className="pl-2"><strong>① 求导</strong>：<Math tex="f'(x)=3x^2+2ax+1" />。</p>
                    <hr className="border-gray-300" />
                    <p className="pl-2"><strong>② 转化</strong>：递增 <Math tex="\Leftrightarrow" /> <Math tex="3x^2+2ax+1\ge 0" /> 对所有 <Math tex="x\in\mathbb{R}" /> 恒成立。</p>
                    <hr className="border-gray-300" />
                    <p className="pl-2"><strong>③ 试分参（失败）</strong>：移项得 <Math tex="2ax\ge -3x^2-1" />。两边要除 <Math tex="2x" />，但 <Math tex="x" /> <strong>可正可负还可为 0</strong>，<strong>分参分不干净</strong>。</p>
                    <p className="pl-4 text-gray-700 text-[0.85rem]">注：若题目是"在某个区间上单调"，分参法依然可用；只有当定义域是全体实数 <Math tex="\mathbb{R}" />，且参数系数可正可负时，分参才会失效。</p>
                    <hr className="border-gray-300" />
                    <p className="pl-2"><strong>④ 改用 <Math tex="\Delta" /> 法</strong>。<strong>充要条件</strong>：二次函数 <Math tex="Ax^2+Bx+C\ge 0" /> 在 <Math tex="\mathbb{R}" /> 上恒成立 <Math tex="\Leftrightarrow" /></p>
                    <p className="pl-6">• 二次项系数 <Math tex="A>0" />（开口向上）</p>
                    <p className="pl-6">• 判别式 <Math tex="\Delta\le 0" />（与 <Math tex="x" /> 轴无交点或只有一个交点，即函数图像全程在 <Math tex="x" /> 轴上方）</p>
                    <p className="pl-4">本题 <Math tex="A=3>0" /> ✓，只需 <Math tex="\Delta=B^2-4AC=4a^2-12\le 0" />，得 <Math tex="a^2\le 3" />，即 <strong><Math tex="-\sqrt{3}\le a\le \sqrt{3}" /></strong>。</p>
                    <hr className="border-gray-300" />
                    <p className="pl-2"><strong>⑤ 对称轴法</strong>：开口向上的二次函数 <Math tex="f'(x)\ge 0" /> 恒成立 <Math tex="\Leftrightarrow" /> <strong>最小值 <Math tex="\ge 0" /></strong>。最小值在对称轴 <Math tex="x=-\dfrac{B}{2A}=-\dfrac{a}{3}" /> 处取到。</p>
                    <hr className="border-gray-300" />
                    <p className="pl-4">代入 <Math tex="f'(-\dfrac{a}{3})=3\cdot\dfrac{a^2}{9}+2a\cdot(-\dfrac{a}{3})+1=-\dfrac{a^2}{3}+1\ge 0" />，移项得 <Math tex="\dfrac{a^2}{3}\le 1" />，即 <Math tex="a^2\le 3" />，所以 <strong><Math tex="-\sqrt{3}\le a\le \sqrt{3}" /></strong>。</p>
                  </div>
                </div>

                {/* ── 一句话看穿 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px bg-amber-50">
                  <div className="px-2 py-1.5">
                    <p><strong>💡 一句话看穿这节</strong>：单调性求参 = <strong>把单调翻译成 <Math tex="f'\ge 0" /> 或 <Math tex="\le 0" /> 恒成立</strong>——参数能分则分参，分不开则 <Math tex="\Delta" /> 法。<strong>等号必须带</strong>。</p>
                  </div>
                </div>

                {/* ── 答题格式提醒 ── */}
                <div className="border border-red-400 rounded overflow-hidden -mt-px bg-red-50">
                  <div className="px-2 py-1.5">
                    <p><strong>📝 答题格式</strong>：写"恒成立"<strong>必须明确区间</strong>。例：<span className="text-gray-700">"<Math tex="a\ge -2" /> 时，<Math tex="a\ge -2x^2" /> <strong>在 <Math tex="[1,e]" /> 上</strong>恒成立"</span>——少了"在...上"扣分。</p>
                  </div>
                </div>

                {/* ── 即时练习 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="" questions={derivMono2Practice} explanations={derivativeApplication2Explanations} hideBlankLine optionCols={1} printOptionCols={1}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivMono2Practice} printOptionCols={1} columns={1} />
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
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📖 题型 → 导数条件 → 本质（1.2 恒成立 ↔ 1.3 有解 完美对偶）</div>
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
                        <td colSpan={3} className="border border-gray-300 px-2 py-0.5 text-left font-bold text-amber-800">� 1.2 类：恒成立 — 导数<strong>始终</strong>在 <Math tex="x" /> 轴一侧</td>
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

                {/* ── 第二类入门理解：恒成立 vs 有解 ── */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-0.5 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🟢 入门：恒成立 vs 有解——以 <Math tex="a>2x" /> 为例</div>
                  <div className="px-2 py-0.5 space-y-1">
                    <div className="grid grid-cols-2 gap-1.5">
                      <div className="border border-blue-300 bg-blue-50 rounded px-1.5 py-0.5 text-[0.9rem]">
                        <p className="font-bold text-blue-900">恒成立（对<strong>所有</strong> <Math tex="x" /> 都成立）</p>
                        <p><Math tex="a>2x" /> 恒成立</p>
                        <p className="text-gray-700 text-[0.85rem]">⇒ 不管 <Math tex="x" /> 取什么，<Math tex="a" /> 都要比 <Math tex="2x" /> 大</p>
                        <p>⇒ <strong><Math tex="a>(2x)_{\max}" /></strong>（必须压住<strong>最大值</strong>，才能比所有值都大）</p>
                      </div>
                      <div className="border border-emerald-300 bg-emerald-50 rounded px-1.5 py-0.5 text-[0.9rem]">
                        <p className="font-bold text-emerald-900">有解（<strong>存在</strong>某个 <Math tex="x" /> 使其成立）</p>
                        <p><Math tex="a>2x" /> 有解</p>
                        <p className="text-gray-700 text-[0.85rem]">⇒ 只要找到一个 <Math tex="x" />，让 <Math tex="a>2x" /> 成立就行</p>
                        <p>⇒ <strong><Math tex="a>(2x)_{\min}" /></strong>（只要比<strong>最小值</strong>大，就能找到至少一个 <Math tex="x" />）</p>
                      </div>
                    </div>
                    <p className="font-bold">📌 举例对比：已知 <Math tex="x\in[1,3]" />，<Math tex="2x\in[2,6]" /></p>
                    <table className="w-full border-collapse text-center text-[0.9rem] [&_tr>*:first-child]:border-l-0 [&_tr>*:last-child]:border-r-0">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="border border-gray-300 px-2 py-0.5">题目</th>
                          <th className="border border-gray-300 px-2 py-0.5">翻译</th>
                          <th className="border border-gray-300 px-2 py-0.5">等价条件</th>
                          <th className="border border-gray-300 px-2 py-0.5">答案</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="a>2x" /> 恒成立</td>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="a" /> 要比<strong>所有的</strong> <Math tex="2x" /> 都大</td>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="a>(2x)_{\max}=6" /></td>
                          <td className="border border-gray-300 px-2 py-0.5 font-bold"><Math tex="a>6" /></td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="a>2x" /> 有解</td>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="a" /> 只要比<strong>最小的那个</strong> <Math tex="2x" /> 大就行</td>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="a>(2x)_{\min}=2" /></td>
                          <td className="border border-gray-300 px-2 py-0.5 font-bold"><Math tex="a>2" /></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* ── 任意 vs 存在 对偶卡 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🔑 认知关：任意 ↔ 存在 完美对偶（与 1.2 对照学）</div>
                  <table className="w-full border-collapse text-center text-[0.85rem] [&_tr>*:first-child]:border-l-0 [&_tr>*:last-child]:border-r-0">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-2 py-0.5 w-[48%]">1.2　任意（恒成立）</th>
                        <th className="border border-gray-300 px-2 py-0.5">1.3　存在（有解）</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-amber-50">
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><Math tex="a\ge g(x)" /> 对<strong>所有</strong> <Math tex="x" /> 恒成立 <Math tex="\Leftrightarrow a\ge g(x)_{\max}" />（取<strong>最大值</strong>）</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><Math tex="a\ge g(x)" /> <strong>存在</strong> <Math tex="x" /> 使其成立 <Math tex="\Leftrightarrow a> g(x)_{\min}" />（取<strong>最小值</strong>，翻一头）</td>
                      </tr>
                      <tr className="bg-amber-50">
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><Math tex="a\le g(x)" /> 对<strong>所有</strong> <Math tex="x" /> 恒成立 <Math tex="\Leftrightarrow a\le g(x)_{\min}" />（取<strong>最小值</strong>）</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><Math tex="a\le g(x)" /> <strong>存在</strong> <Math tex="x" /> 使其成立 <Math tex="\Leftrightarrow a< g(x)_{\max}" />（取<strong>最大值</strong>，翻一头）</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <PageBreak />

                {/* ── 三步法 ── */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🎯 三步法模板</div>
                  <div className="px-2 py-0.5 space-y-1">
                    <p className="pl-2"><strong>① 求导</strong>：算出 <Math tex="f'(x)" />（参数当常数）。</p>
                    <p className="pl-2"><strong>② 翻译</strong>：把"存在递增/递减子区间" → 翻译成"<Math tex="f'>0" /> 或 <Math tex="f'<0" /> 在区间内有解"。</p>
                    <p className="pl-2"><strong>③ 求解</strong>：<strong>分参法</strong>——移项使参数独立，取最值"另一头"（有解 <Math tex="a>g" /> 取 <Math tex="\min" />；有解 <Math tex="a<g" /> 取 <Math tex="\max" />）。</p>
                  </div>
                </div>

                {/* ── 详解：例 1 + 例 2（存在递减 + 存在递增，分参对照） ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：例 1–4 分参法标准流程（多项式 / <Math tex="\ln" /> / <Math tex="e^x" /> 全覆盖）</div>
                  <div>
                    <div className="px-2 py-0.5 space-y-1">
                      <p className="font-bold"><strong>例 1</strong>：<Math tex="f(x)=x^3-ax+a" /> 在 <Math tex="(1,2)" /> 内<strong>存在</strong>递减区间，求 <Math tex="a" /> 范围。</p>
                      <hr className="border-gray-300" />
                      <p className="pl-2"><strong>① 求导</strong>：<Math tex="f'(x)=3x^2-a" />。</p>
                      <p className="pl-2"><strong>② 翻译</strong>：存在递减区间，即 <Math tex="f'(x)<0" /> 在 <Math tex="(1,2)" /> 内<strong>有解</strong>，代入移项得 <Math tex="3x^2<a" /> 在 <Math tex="(1,2)" /> 内有解。</p>
                      <p className="pl-2"><strong>③ 分参</strong>："<Math tex="a>3x^2" /> 有解"等价于 <Math tex="a>\min(3x^2)" />（<strong>有解 → 取最小值</strong>）。</p>
                      <p className="pl-4"><Math tex="3x^2" /> 在 <Math tex="(1,2)" /> 上单调递增，代入两端 <Math tex="3\cdot 1^2=3" />，<Math tex="3\cdot 2^2=12" />，所以值域 <Math tex="(3,12)" />，最小值 <Math tex="3" />。<strong>答</strong>：<strong><Math tex="a>3" /></strong>。</p>
                    </div>
                    <div className="border-t border-gray-400"></div>
                    <div className="px-2 py-0.5 space-y-1">
                      <p className="font-bold"><strong>例 2</strong>：<Math tex="f(x)=x^3-ax" /> 在 <Math tex="(2,3)" /> 内<strong>存在</strong>递增区间，求 <Math tex="a" /> 范围。</p>
                      <hr className="border-gray-300" />
                      <p className="pl-2"><strong>① 求导</strong>：<Math tex="f'(x)=3x^2-a" />。</p>
                      <p className="pl-2"><strong>② 翻译</strong>：存在递增区间，即 <Math tex="f'(x)>0" /> 在 <Math tex="(2,3)" /> 内<strong>有解</strong>，代入移项得 <Math tex="3x^2>a" /> 在 <Math tex="(2,3)" /> 内有解。</p>
                      <p className="pl-2"><strong>③ 分参</strong>："<Math tex="a<3x^2" /> 有解"等价于 <Math tex="a<\max(3x^2)" />（<strong>有解 → 取最大值</strong>）。</p>
                      <p className="pl-4"><Math tex="3x^2" /> 在 <Math tex="(2,3)" /> 上单调递增，代入两端 <Math tex="3\cdot 2^2=12" />，<Math tex="3\cdot 3^2=27" />，所以值域 <Math tex="(12,27)" />，最大值 <Math tex="27" />。<strong>答</strong>：<strong><Math tex="a<27" /></strong>。</p>
                    </div>
                    <div className="border-t border-gray-400"></div>
                    <div className="px-2 py-0.5 space-y-1">
                      <p className="font-bold"><strong>例 3</strong>（含 <Math tex="\ln" />）：<Math tex="f(x)=\ln x-ax" /> 在 <Math tex="(1,e)" /> 内<strong>存在</strong>递增区间，求 <Math tex="a" /> 范围。</p>
                      <hr className="border-gray-300" />
                      <p className="pl-2"><strong>① 求导</strong>：<Math tex="f'(x)=\dfrac{1}{x}-a" />。</p>
                      <p className="pl-2"><strong>② 翻译</strong>：存在递增区间，即 <Math tex="f'(x)>0" /> 在 <Math tex="(1,e)" /> 内<strong>有解</strong>，移项得 <Math tex="a<\dfrac{1}{x}" /> 在 <Math tex="(1,e)" /> 内有解。</p>
                      <p className="pl-2"><strong>③ 分参</strong>："<Math tex="a<\dfrac{1}{x}" /> 有解"等价于 <Math tex="a<\max\dfrac{1}{x}" />（<strong>有解 → 取最大值</strong>）。</p>
                      <p className="pl-4"><Math tex="\dfrac{1}{x}" /> 在 <Math tex="(1,e)" /> 上单调递减，代入两端 <Math tex="\dfrac{1}{1}=1" />，<Math tex="\dfrac{1}{e}" />，所以值域 <Math tex="\left(\dfrac{1}{e},1\right)" />，最大值 <Math tex="1" />。<strong>答</strong>：<strong><Math tex="a<1" /></strong>。</p>
                    </div>
                    <div className="border-t border-gray-400"></div>
                    <div className="px-2 py-0.5 space-y-1">
                      <p className="font-bold"><strong>例 4</strong>（含 <Math tex="e^x" />）：<Math tex="f(x)=e^x-ax" /> 在 <Math tex="(0,\ln 2)" /> 内<strong>存在</strong>递减区间，求 <Math tex="a" /> 范围。</p>
                      <hr className="border-gray-300" />
                      <p className="pl-2"><strong>① 求导</strong>：<Math tex="f'(x)=e^x-a" />。</p>
                      <p className="pl-2"><strong>② 翻译</strong>：存在递减区间，即 <Math tex="f'(x)<0" /> 在 <Math tex="(0,\ln 2)" /> 内<strong>有解</strong>，移项得 <Math tex="a>e^x" /> 在 <Math tex="(0,\ln 2)" /> 内有解。</p>
                      <p className="pl-2"><strong>③ 分参</strong>："<Math tex="a>e^x" /> 有解"等价于 <Math tex="a>\min(e^x)" />（<strong>有解 → 取最小值</strong>）。</p>
                      <p className="pl-4"><Math tex="e^x" /> 在 <Math tex="(0,\ln 2)" /> 上单调递增，代入两端 <Math tex="e^0=1" />，<Math tex="e^{\ln 2}=2" />，所以值域 <Math tex="(1,2)" />，最小值 <Math tex="1" />。<strong>答</strong>：<strong><Math tex="a>1" /></strong>。</p>
                    </div>
                  </div>
                </div>

                {/* ── 踩坑 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">⚠️ 高频踩坑</div>
                  <div className="px-2 py-1 text-[0.9rem]">
                    <p className="font-bold">把“取最值另一头”用反</p>
                    <p>恒成立 <Math tex="a>g" /> 取 <strong>max</strong>；有解 <Math tex="a>g" /> 取 <strong>min</strong>。<strong>用反就答案翻倍错</strong>。</p>
                  </div>
                </div>

                {/* ── 一句话看穿 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px bg-amber-50">
                  <div className="px-2 py-1.5">
                    <p><strong>💡 一句话看穿这节</strong>：存在单调子区间 = <strong>“有解”问题</strong> = 取最值<strong>另一头</strong>，与 1.2 恒成立“取同一头”互为镜像。</p>
                  </div>
                </div>

                {/* ── 即时练习 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="" questions={derivMono3Practice} explanations={derivativeApplication2Explanations} hideBlankLine optionCols={1} printOptionCols={1}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivMono3Practice} printOptionCols={1} columns={1} />
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
                <div className="px-2 py-1 font-bold text-gray-900 bg-blue-50 border-l-4 border-blue-500">1.4　含参讨论单调性（★★★★，导数大题第 (1) 问送分主力）</div>

                {/* ── 高考定位 ── */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📊 高考定位 + 为什么要讨论</div>
                  <div className="grid grid-cols-[49fr_51fr]">
                    <div className="px-2 py-0.5 space-y-1 border-r border-gray-300">
                      <p><strong>2024 全国甲卷第 20 题原题</strong>：</p>
                      <p className="pl-2">已知 <Math tex="f(x)=a(x-1)-\ln x+1" />，求 <Math tex="f(x)" /> 的单调区间。</p>
                      <hr className="border-gray-300" />
                      <p>2024-2025 起新高考改革：导数大题前移到 18 题，<strong>难度降低但更高频</strong>。</p>
                      <p className="text-red-700"><strong>(1) 问几乎一定考含参讨论</strong>，5–7 分送分点，本节不能丢。</p>
                    </div>
                    <div className="px-2 py-0.5 space-y-1">
                      <p><strong>触发分类讨论的 3 种情形</strong>：</p>
                      <p className="pl-2">① <strong>二次项系数含参</strong>（如 <Math tex="f'=ax^2+\cdots" />）<br />→ 按 <Math tex="a>0/=0/<0" /> 分</p>
                      <p className="pl-2">② <strong>根含参</strong>（如 <Math tex="f'=x(x-2a)" />）→ 按根的大小、与端点位置分</p>
                      <p className="pl-2">③ <strong>判别式含参</strong>（如 <Math tex="\Delta=a^2-4" />）→ 按 <Math tex="\Delta>0/=0/<0" /> 分</p>
                    </div>
                  </div>
                </div>

                {/* ── 通用流程 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🎯 通用流程：求导 → 因式分解 → 分类讨论 → 综合</div>
                  <table className="w-full border-collapse text-center [&_tr>*:first-child]:border-l-0 [&_tr>*:last-child]:border-r-0">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-2 py-0.5 w-[8%]">步骤</th>
                        <th className="border border-gray-300 px-2 py-0.5 w-[24%]">做什么</th>
                        <th className="border border-gray-300 px-2 py-0.5">关键动作</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 font-bold">①</td>
                        <td className="border border-gray-300 px-2 py-0.5"><strong>求导 + 整理</strong></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">求 <Math tex="f'(x)" />；分式题<strong>通分</strong>成 <Math tex="\dfrac{\text{分子}}{\text{分母}}" />；多项式<strong>因式分解</strong>。<strong>恒正因子直接约掉</strong>。</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 font-bold">②</td>
                        <td className="border border-gray-300 px-2 py-0.5"><strong>找零点 / 看 Δ</strong></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">解 <Math tex="f'=0" /> 或分子 <Math tex="=0" /> 得到（含参）零点。零点解不出？看判别式 <Math tex="\Delta" />。</td>
                      </tr>
                      <tr className="bg-amber-50">
                        <td className="border border-gray-300 px-2 py-0.5 font-bold text-red-700">③</td>
                        <td className="border border-gray-300 px-2 py-0.5"><strong>对参数 <Math tex="a" /> 分类</strong></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">按"二次系数 → Δ 符号 → 两根大小 → 根与端点位置"<strong>四级标准</strong>分类。<strong>本节核心。</strong></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 font-bold">④</td>
                        <td className="border border-gray-300 px-2 py-0.5"><strong>每种情况判号</strong></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">在每个 <Math tex="a" /> 分类下，把零点把定义域切成若干段，逐段判 <Math tex="f'" /> 正负 → 写单调性。</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 font-bold">⑤</td>
                        <td className="border border-gray-300 px-2 py-0.5"><strong>综合结论</strong></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">用"<strong>综上所述</strong>"把所有 <Math tex="a" /> 分类的结果合并写出。<strong>缺这一步阅卷扣分</strong>。</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* ── 4 大题型识别表 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🗺 4 大题型识别表（按导函数 <Math tex="f'" /> 形态分；例 1 一次型 → 例 2 二次可分解 → 例 3 加区间 → 例 4 含 ln 通分）</div>
                  <table className="w-full border-collapse text-center text-[0.9rem] [&_tr>*:first-child]:border-l-0 [&_tr>*:last-child]:border-r-0">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-2 py-0.5 w-[10%]">类型</th>
                        <th className="border border-gray-300 px-2 py-0.5 w-[30%]"><Math tex="f'(x)" /> 形态</th>
                        <th className="border border-gray-300 px-2 py-0.5">分类标准</th>
                        <th className="border border-gray-300 px-2 py-0.5 w-[10%]">对应例题</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 font-bold">①</td>
                        <td className="border border-gray-300 px-2 py-0.5"><strong>一次型</strong>　<Math tex="f'=\dfrac{ax+b}{x}" /></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">按 <Math tex="a" /> 符号分 2 类（<Math tex="a\le 0" /> 或 <Math tex="a>0" />）</td>
                        <td className="border border-gray-300 px-2 py-0.5">例 1</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 font-bold">②</td>
                        <td className="border border-gray-300 px-2 py-0.5"><strong>二次可分解</strong>　<Math tex="f'=k(x-c)(x-a)" /></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">按两根大小关系分 3 类，含重根不分段</td>
                        <td className="border border-gray-300 px-2 py-0.5">例 2</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 font-bold">③</td>
                        <td className="border border-gray-300 px-2 py-0.5"><strong>二次 + 区间</strong></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">在类型 ② 基础上，再按<strong>根与区间端点位置</strong>分</td>
                        <td className="border border-gray-300 px-2 py-0.5">例 3</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 font-bold">④</td>
                        <td className="border border-gray-300 px-2 py-0.5"><strong>含 <Math tex="\ln" /> 通分</strong>　<Math tex="f'=\dfrac{\text{二次}}{x}" /></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">通分约分母后，按<strong>分子判别式 <Math tex="\Delta" /></strong> 分类</td>
                        <td className="border border-gray-300 px-2 py-0.5">例 4</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* ── 例 1：一次型（2024 全国甲卷母题） ── */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：<strong>例 1</strong>　<Math tex="f(x)=a(x-1)-\ln x+1" />（定义域 <Math tex="x>0" />），讨论单调区间<span className="text-gray-700 font-normal ml-2">——2024 全国甲卷第 20 题，一次型母题</span></div>
                  <div className="px-2 py-0.5 space-y-1">
                    <p className="pl-2"><strong>① 求导</strong>：<Math tex="f'(x)=a-\dfrac{1}{x}=\dfrac{ax-1}{x}" />。</p>
                    <p className="pl-2"><strong>② 定号</strong>：分母 <Math tex="x>0" /> 恒正可约，看分子 <Math tex="ax-1" />。<strong>先求分子零点</strong>：令 <Math tex="ax-1=0" />，<Math tex="a=0" /> 时方程无解；<Math tex="a\ne 0" /> 时解得 <Math tex="x=\dfrac{1}{a}" />。</p>
                    <hr className="border-gray-300" />
                    <p className="font-bold text-gray-800">③ 按 <Math tex="a" /> 分类</p>
                    <div className="space-y-1">
                      <p><span className="font-bold text-blue-800 mr-2">情况一：当 <Math tex="a\le 0" /> 时</span>因为 <Math tex="a\le 0" />，所以 <Math tex="\dfrac{1}{a}" /> 不在定义域 <Math tex="(0,+\infty)" /> 内，无需分段讨论。又因为 <Math tex="x>0" /> 且 <Math tex="a\le 0" />，所以 <Math tex="ax\le 0" />，</p>
                      <p>即 <Math tex="ax-1\le -1" />，得 <Math tex="f'(x)<0" />，故 <Math tex="f(x)" /> 在 <Math tex="(0,+\infty)" /> 上<strong>单调递减</strong>。</p>
                      <hr className="border-gray-300" />
                      <p><span className="font-bold text-blue-800 mr-2">情况二：当 <Math tex="a>0" /> 时</span>零点 <Math tex="\dfrac{1}{a}>0" /> <strong>落在定义域 <Math tex="(0,+\infty)" /> 内</strong>，把定义域切成 <Math tex="\left(0,\dfrac{1}{a}\right)" /> 和 <Math tex="\left(\dfrac{1}{a},+\infty\right)" /> 两段。</p>
                      <p className="pl-2">• 区间 <Math tex="\left(0,\dfrac{1}{a}\right)" />，即 <Math tex="0<x<\dfrac{1}{a}" /> 时，同乘 <Math tex="a" /> 得 <Math tex="ax<1" />，得 <Math tex="ax-1<0" />。分子为负，分母为正，得 <Math tex="f'(x)<0" /> → <strong>单调递减</strong></p>
                      <p className="pl-2">• 区间 <Math tex="\left(\dfrac{1}{a},+\infty\right)" />，即 <Math tex="x>\dfrac{1}{a}" /> 时，同乘 <Math tex="a" /> 得 <Math tex="ax>1" />，得 <Math tex="ax-1>0" />。分子为正，分母为正，得 <Math tex="f'(x)>0" /> → <strong>单调递增</strong>。</p>
                    </div>
                    <hr className="border-gray-300" />
                    <div className="pl-2 grid grid-cols-[auto_1fr] gap-x-2">
                      <div className="font-bold whitespace-nowrap"><strong>④ 综上所述</strong>：</div>
                      <div className="space-y-0.5">
                        <p>• <Math tex="a\le 0" /> 时，<Math tex="f(x)" /> 的减区间为 <Math tex="(0,+\infty)" />，无增区间。</p>
                        <p>• <Math tex="a>0" /> 时，<Math tex="f(x)" /> 的减区间为 <Math tex="\left(0,\tfrac{1}{a}\right)" />，增区间为 <Math tex="\left(\tfrac{1}{a},+\infty\right)" />。</p>
                      </div>
                    </div>
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

                {/* ── 例 3：二次 + 区间限定 ── */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：<strong>例 3</strong>　<Math tex="f(x)=2x^3-3(a+1)x^2+6ax" /> 在 <Math tex="[0,1]" /> 上的单调性<span className="text-gray-700 font-normal ml-2">——同例 2 函数，多了限定区间，按根与端点位置分</span></div>
                  <div className="px-2 py-0.5 space-y-1">
                    <p className="pl-2"><strong>① 求导（同例 2）</strong>：<Math tex="f'(x)=6(x-1)(x-a)" />，零点为 <Math tex="x=1" /> 和 <Math tex="x=a" />。</p>
                    <p className="pl-2"><strong>② 定号</strong>：零点 <Math tex="x=1" /> 在区间端点上，不用管。看<strong>含参零点 <Math tex="x=a" /> 与区间 <Math tex="[0,1]" /> 的位置关系</strong>。</p>
                    <hr className="border-gray-300" />
                    <p className="font-bold text-gray-800">③ 按 <Math tex="a" /> 与端点 <Math tex="0,1" /> 比较分类</p>
                    <div className="space-y-1">
                      <p><span className="font-bold text-blue-800 mr-2">情况一：当 <Math tex="a" /> 在区间左边时</span>即 <Math tex="a\le 0" />，结合 <Math tex="x\ge 0" />（因 <Math tex="x\in[0,1]" />），得 <Math tex="a\le 0\le x\le 1" />。由 <Math tex="x\le 1" /> 移项得 <Math tex="x-1\le 0" />；</p>
                      <p>由 <Math tex="a\le x" /> 移项得 <Math tex="x-a\ge 0" />。两个因子一正一负，故 <Math tex="f'(x)\le 0" />，所以 <Math tex="f(x)" /> 在 <Math tex="[0,1]" /> 上<strong>单调递减</strong>。</p>
                      <hr className="border-gray-300" />
                      <p><span className="font-bold text-blue-800 mr-2">情况二：当 <Math tex="a" /> 在区间内部时</span>即 <Math tex="0<a<1" />，含参零点在区间内单调性未知，把区间 <Math tex="(0,1)" /> 分割成 <Math tex="(0,a)" /> 和 <Math tex="(a,1)" /> 两个区间。</p>
                      <p className="pl-2">• 区间 <Math tex="(0,a)" />，即 <Math tex="0<x<a" /> 时，移项得 <Math tex="x-1<0" /> 且 <Math tex="x-a<0" />（两负），相乘为正，<Math tex="f'(x)>0" />，<Math tex="f(x)" /> <strong>单调递增</strong>。</p>
                      <p className="pl-2">• 区间 <Math tex="(a,1)" />，即 <Math tex="a<x<1" /> 时，移项得 <Math tex="x-1<0" /> 且 <Math tex="x-a>0" />（异号），相乘为负，<Math tex="f'(x)<0" />，<Math tex="f(x)" /> <strong>单调递减</strong>。</p>
                      <hr className="border-gray-300" />
                      <p><span className="font-bold text-blue-800 mr-2">情况三：当 <Math tex="a" /> 在区间右边时</span>即 <Math tex="a\ge 1" />，结合 <Math tex="x\le 1" />（因 <Math tex="x\in[0,1]" />），得 <Math tex="0\le x\le 1\le a" />。由 <Math tex="x\le 1" /> 移项得 <Math tex="x-1\le 0" />；</p>
                      <p>由 <Math tex="x\le a" /> 移项得 <Math tex="x-a\le 0" />。两个因子均非正，相乘 <Math tex="\ge 0" />，故 <Math tex="f'(x)\ge 0" />，所以 <Math tex="f(x)" /> 在 <Math tex="[0,1]" /> 上<strong>单调递增</strong>。</p>
                    </div>
                    <hr className="border-gray-300" />
                    <div className="pl-2 grid grid-cols-[auto_1fr] gap-x-2">
                      <div className="font-bold whitespace-nowrap"><strong>④ 综上所述</strong>：</div>
                      <div className="space-y-0.5">
                        <p>• <Math tex="a\le 0" /> 时，<Math tex="f(x)" /> 在 <Math tex="[0,1]" /> 上单调递减。</p>
                        <p>• <Math tex="0<a<1" /> 时，<Math tex="f(x)" /> 在 <Math tex="(0,a)" /> 上单调递增，在 <Math tex="(a,1)" /> 上单调递减。</p>
                        <p>• <Math tex="a\ge 1" /> 时，<Math tex="f(x)" /> 在 <Math tex="[0,1]" /> 上单调递增。</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── 例 4：含 ln 通分（Δ 法） ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：<strong>例 4</strong>　<Math tex="f(x)=\dfrac{1}{2}x^2-ax+\ln x" />，讨论单调性<span className="text-gray-700 font-normal ml-2">——含 <Math tex="\ln" /> 通分综合（Δ + 韦达定理）</span></div>
                  <div className="px-2 py-0.5 space-y-1">
                    <p className="pl-2"><strong>① 分析定义域 + 求导</strong>：因为含 <Math tex="\ln x" />，所以<strong>定义域为 <Math tex="x>0" /></strong>。求导通分得 <Math tex="f'(x)=x-a+\dfrac{1}{x}=\dfrac{x^2-ax+1}{x}" />。</p>
                    <p className="pl-2"><strong>② 分析</strong>：分母 <Math tex="x" />，由定义域得 <Math tex="x>0" />，所以分母恒正，<Math tex="f'(x)" /> 的符号由分子决定。看分子 <Math tex="g(x)=x^2-ax+1" />，是含参二次方程，求出零点过于复杂，<strong>改用判别式法</strong>：<Math tex="g(x)" /> <strong>开口向上</strong>，判别式 <Math tex="\Delta=a^2-4" />，按 <Math tex="\Delta" /> 分类讨论。</p>
                    <hr className="border-gray-300" />
                    <p className="font-bold text-gray-800">③ 按 <Math tex="\Delta" /> 分类</p>
                    <div className="space-y-1">
                      <p><span className="font-bold text-blue-800 mr-2">情况一：<Math tex="\Delta\le 0" /></span>即 <Math tex="a^2-4\le 0" />，解得 <Math tex="-2\le a\le 2" />。<span className="border-b border-dashed border-gray-400">抛物线与 <Math tex="x" /> 轴相切或无交点，又开口向上，所以图像全部在 <Math tex="x" /> 轴上方或相切，即</span> <Math tex="g(x)\ge 0" /> 恒成立。<span className="border-b border-dashed border-gray-400">分子 <Math tex="g(x)\ge 0" />，分母 <Math tex="x>0" />，所以</span> <Math tex="f'(x)\ge 0" />，因此 <Math tex="f(x)" /> 在 <Math tex="(0,+\infty)" /> 上<strong>单调递增</strong>。</p>
                      <hr className="border-gray-300" />
                      <p><Math tex="\Delta>0" /> 时，即 <Math tex="a^2-4>0" />，解得 <Math tex="a<-2" /> 或 <Math tex="a>2" />，再分两种情况讨论。</p>
                      <p><span className="font-bold text-blue-800 mr-2">情况二：<Math tex="\Delta>0" /> 且 <Math tex="a<-2" /></span>由韦达定理：两根之和 <Math tex="=x_1+x_2=-\dfrac{b}{a}=a" />，两根之积 <Math tex="=x_1 x_2=\dfrac{c}{a}=1" />。所以当 <Math tex="a<-2" /> 时，积为正得两根同号，和 <Math tex="=a<-2" /> 排除都为正，所以两根<strong>都为负</strong>，都在定义域左边。因式分解 <Math tex="g(x)=(x-x_1)(x-x_2)" />。</p>
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

                {/* ── 例 5：一次型（指数版）2024 全国甲卷 19 题 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：<strong>例 5</strong>　<Math tex="f(x)=a(e^x+a)-x" />，讨论单调性<span className="text-gray-700 font-normal ml-2">——2024 全国甲卷第 19 题，例 1 的指数姐妹题</span></div>
                  <div className="px-2 py-0.5 space-y-1">
                    <p className="pl-2"><strong>① 化简 + 求导</strong>：<Math tex="f(x)=ae^x+a^2-x" />，所以 <Math tex="f'(x)=ae^x-1" />（<Math tex="a^2" /> 是常数，导数为 0）。</p>
                    <p className="pl-2"><strong>② 定号</strong>：<Math tex="f'(x)" /> 的正负由 <Math tex="ae^x" /> 与 <Math tex="1" /> 的大小决定。<strong>因 <Math tex="e^x>0" />，<Math tex="ae^x" /> 的符号随 <Math tex="a" /> 而变</strong> → 按 <Math tex="a" /> 分 2 类。</p>
                    <hr className="border-gray-300" />
                    <p className="font-bold text-gray-800">③ 按 <Math tex="a" /> 分类</p>
                    <div className="space-y-1">
                      <p><span className="font-bold text-blue-800 mr-2">情况一：当 <Math tex="a\le 0" /> 时</span>因为 <Math tex="e^x>0" />，<Math tex="a\le 0" />，所以 <Math tex="ae^x\le 0" />，得 <Math tex="ae^x-1\le -1" /></p>
                      <p className="pl-2">所以 <Math tex="f'(x)<0" />，即 <Math tex="f(x)" /> 在 <Math tex="\mathbb{R}" /> 上<strong>单调递减</strong></p>
                      <hr className="border-gray-300" />
                      <p><span className="font-bold text-blue-800 mr-2">情况二：当 <Math tex="a>0" /> 时</span><Math tex="ae^x>0" />，但无法直接分析出 <Math tex="ae^x" /> 与 <Math tex="1" /> 谁大</p>
                      <p className="pl-2">令 <Math tex="f'(x)=0" />，即 <Math tex="ae^x-1=0" />，得 <Math tex="e^x=\dfrac{1}{a}" />，换算成对数得 <Math tex="x=\ln\dfrac{1}{a}=\ln 1-\ln a=0-\ln a=-\ln a" /></p>
                      <p className="pl-2">零点为 <Math tex="x=-\ln a" />，以零点将定义域分割为 <Math tex="(-\infty,-\ln a)" /> 和 <Math tex="(-\ln a,+\infty)" />。将零点代入 <Math tex="e^x" /> 中得 <Math tex="e^{-\ln a}=\dfrac{1}{a}" /></p>
                      <p className="pl-2">• 当 <Math tex="x<-\ln a" /> 时，化为同底比大小，则 <Math tex="e^x<e^{-\ln a}" />，得 <Math tex="e^x<\dfrac{1}{a}" />。同乘 <Math tex="a" /> 得 <Math tex="ae^x<1" />，移项得 <Math tex="ae^x-1<0" /></p>
                      <p className="pl-2">因为 <Math tex="f'(x)<0" />，得 <Math tex="f(x)" /> 在区间 <Math tex="(-\infty,-\ln a)" /> 上<strong>单调递减</strong></p>
                      <p className="pl-2">• 当 <Math tex="x>-\ln a" /> 时，比大小，则 <Math tex="e^x>e^{-\ln a}" />，得 <Math tex="e^x>\dfrac{1}{a}" />。同乘 <Math tex="a" /> 得 <Math tex="ae^x>1" />，移项得 <Math tex="ae^x-1>0" /></p>
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
                <div className="border border-amber-400 rounded overflow-hidden -mt-px bg-amber-50">
                  <div className="px-2 py-1 font-bold text-amber-900 border-b border-amber-300 bg-amber-100">⚡ 技巧版：跳过判号，直接解 <Math tex="f'(x)>0" /> 和 <Math tex="f'(x)<0" /><span className="font-normal ml-2">——以例 5 情况二为示范</span></div>
                  <div className="px-2 py-1 space-y-0.5">
                    <p>• 解 <Math tex="f'(x)>0" />：<Math tex="ae^x-1>0\Rightarrow ae^x>1\Rightarrow e^x>\dfrac{1}{a}\Rightarrow x>-\ln a" /> → <strong>增区间</strong> <Math tex="(-\ln a,+\infty)" /></p>
                    <hr className="border-amber-400" />
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
