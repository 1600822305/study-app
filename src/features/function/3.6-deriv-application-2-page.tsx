import { Math, Collapsible, PageHeader, LessonLayout, ExportButton, PracticeCard, PrintQuestions, UnifiedDebugToggle, PageBreak } from '@/components/shared';
import { Coordinates, Plot, Point } from 'mafs';
import { DebugMafs } from '@/features/trig/MafsDebug';
import { derivApplication2ProgressItems } from './data/3.6/3.6-deriv-application-2-progress';
import { derivMono1Warmup, derivMono1Practice, derivMono2Warmup, derivMono2Practice, derivMono3Practice, derivMonoDiscussPractice, derivExtremaExample1Practice, derivExtremaExample2Practice, derivExtremaExample3Practice, derivExtremaExample4Practice } from './data/3.6/3.6-deriv-application-2-practice';
import { useProgress } from '@/hooks';
import { derivativeApplication2Explanations } from './3.6-deriv-application-2-answers';

export function DerivativeApplication2Page() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('deriv-application-2', derivApplication2ProgressItems);

  return (
    <div>
      <div className="[&_h1]:!mb-0 [&_.flex.flex-wrap]:!mt-1">
        <PageHeader
          stage="第三阶段 · 函数思维"
          title="3.6 导数应用（下）"
          tags={[]}
        />
      </div>

      <LessonLayout
        progressItems={progressItems}
        onToggle={toggleProgress}
        sidebarTop={<ExportButton title="3.6 导数应用（下）" />}
      >
        <div className="[&_.rounded-xl]:mb-0 [&_.rounded-xl>.flex.items-center]:py-0.5 [&_.rounded-xl>div:last-child]:px-0 [&_.rounded-xl>div:last-child]:pt-0 [&_.rounded-xl>div:last-child]:pb-0 [&_.rounded-xl_button>span]:font-bold [&_.rounded-xl_button>span]:text-gray-900">

          {/* ═══════════════════════════════════════════════════════ */}
          {/* Section 1: 单调性 */}
          {/* ═══════════════════════════════════════════════════════ */}
          <section id="da2-monotone" className="mb-0 scroll-mt-4">
            <Collapsible title="一、单调性" defaultOpen storageKey="deriv-application-2:monotone">
              <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

                {/* ═══════════════════════════════════════════════════════ */}
                {/* 1.0 铺垫：导数符号与单调性的关系 + 流程总览                  */}
                {/* ═══════════════════════════════════════════════════════ */}
                <div className="px-2 py-1 font-bold text-gray-900 bg-blue-50 border-l-4 border-blue-500 mb-0.5">1.0　铺垫：导数符号与单调性的关系（核心定理 + 流程）</div>

                {/* ── 为什么要单讲这一节 ── */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📊 为什么单讲：导数大题 (1) 问的<strong>送分主力</strong></div>
                  <div className="grid grid-cols-[54fr_46fr]">
                    <div className="px-2 py-0.5 space-y-1 border-r border-gray-300">
                      <p><strong>高考定位</strong>：导数大题三连——</p>
                      <p className="pl-4">(1) <strong>判单调性</strong>　(2) 求极值 / 最值　(3) 不等式证明</p>
                      <hr className="border-gray-300" />
                      <p>(1) 是<strong>整道大题的根</strong>，做不出 (1) 后面全废；做出 (1) 至少拿 5–7 分。</p>
                      <p className="text-red-700"><strong>⚠️ 2025 起新高考</strong>：导数题位置前移（第 18 题），<strong>难度降低但更高频</strong>，单调性这一步必须练熟。</p>
                    </div>
                    <div className="px-2 py-0.5 space-y-1">
                      <p><strong>核心定理</strong>（本节引入）：在区间 <Math tex="I" /> 上，</p>
                      <p className="pl-4">• <Math tex="f'(x)>0" /> ⇒ <Math tex="f(x)" /> 在 <Math tex="I" /> 上<strong>递增</strong></p>
                      <p className="pl-4">• <Math tex="f'(x)<0" /> ⇒ <Math tex="f(x)" /> 在 <Math tex="I" /> 上<strong>递减</strong></p>
                      <hr className="border-gray-300" />
                      <p>所以求单调性 = <strong>解不等式 <Math tex="f'(x)>0" /> / <Math tex="f'(x)<0" /></strong>。</p>
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
                        <th className="border border-gray-300 px-2 py-0.5 w-[10%]">本节位置</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 font-bold">①</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><strong>求单调区间</strong>（不含参）</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">通用流程：求导 → 找零点 → 分段判号 → 写区间。</td>
                        <td className="border border-gray-300 px-2 py-0.5">★</td>
                        <td className="border border-gray-300 px-2 py-0.5">1.1</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 font-bold">②</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><strong>已知单调性</strong>求参范围<br /><span className="text-[0.85em]">"在 <Math tex="[a,b]" /> 上递增"</span></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">转化为 <Math tex="f'(x)\ge 0" /> 在区间上<strong>恒成立</strong>，分参或求最值。</td>
                        <td className="border border-gray-300 px-2 py-0.5">★★★</td>
                        <td className="border border-gray-300 px-2 py-0.5">1.2</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 font-bold">③</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><strong>不单调 / 存在</strong>单调区间<br /><span className="text-[0.85em]">"在 <Math tex="(a,b)" /> 不单调"</span></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">转化为 <Math tex="f'(x)=0" /> 在区间上<strong>有解</strong>。<strong>"恒成立 ↔ 有解"反向思维。</strong></td>
                        <td className="border border-gray-300 px-2 py-0.5">★★★</td>
                        <td className="border border-gray-300 px-2 py-0.5">1.3</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 font-bold">④</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><strong>含参讨论</strong>单调性<br /><span className="text-[0.85em]">"讨论 <Math tex="f(x)" /> 单调性"</span></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">导函数含参，按<strong>系数正负 / 根的位置</strong>分类讨论。<br /><strong>导数大题 (1) 问的主力。</strong></td>
                        <td className="border border-gray-300 px-2 py-0.5">★★★★</td>
                        <td className="border border-gray-300 px-2 py-0.5">1.4</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="px-2 py-1 border-t border-gray-300 text-[0.85em]"><strong>📖 学习路径</strong>：1.1 通用流程练熟 → 1.2 反向求参（恒成立）→ 1.3 反向求参（有解）→ 1.4 含参讨论挑战压轴。</p>
                </div>

                {/* ── 🌳 全节根心法 ── */}
                <div className="border-2 border-emerald-600 rounded overflow-hidden -mt-px bg-emerald-50">
                  <div className="px-2 py-1 font-bold text-emerald-900 border-b border-emerald-300 bg-emerald-100">🌳 全节根心法：判 <Math tex="f" /> 单调性 <strong>=</strong> 判 <Math tex="f'" /> 正负</div>
                  <div className="px-2 py-1 space-y-1">
                    <p>上面四种题型，<strong>底层逻辑只有这一句</strong>。区别只是问法不同，分成<strong>两类</strong>：</p>
                    <div className="grid grid-cols-2 gap-2 mt-1">
                      <div className="border border-emerald-300 rounded bg-white px-2 py-1">
                        <p className="font-bold text-emerald-800">▶ 正向问题：给 <Math tex="f" />，求性质</p>
                        <p className="pl-2 text-[0.9rem]">直接<strong>判 <Math tex="f'" /> 正负</strong>，写出单调性。</p>
                        <p className="pl-2 text-[0.85rem] text-gray-700">• <strong>1.1 不含参</strong>：套下方通用流程。</p>
                        <p className="pl-2 text-[0.85rem] text-gray-700">• <strong>1.4 含参讨论</strong>：通用流程 + 对参数 <Math tex="a" /> 分类。</p>
                      </div>
                      <div className="border border-emerald-300 rounded bg-white px-2 py-1">
                        <p className="font-bold text-emerald-800">◀ 反向问题：给性质，求 <Math tex="a" /></p>
                        <p className="pl-2 text-[0.9rem]">把"<Math tex="f'\ge 0" /> 或 <Math tex="<0" />"<strong>翻译成 <Math tex="a" /> 取最值</strong>。</p>
                        <p className="pl-2 text-[0.85rem] text-gray-700">• <strong>1.2 恒成立</strong>：<Math tex="a" /> 盖住极端 → 取 <Math tex="\min" /> / <Math tex="\max" />。</p>
                        <p className="pl-2 text-[0.85rem] text-gray-700">• <strong>1.3 有解</strong>：<Math tex="a" /> 够到极端 → 取另一头 <Math tex="\min" /> / <Math tex="\max" />。</p>
                      </div>
                    </div>
                    <p className="text-[0.85rem] text-gray-700 mt-1"><strong>💡 学习建议</strong>：先吃透 1.1 的"判 <Math tex="f'" /> 正负"。后面所有题型都是这件事的不同变体。</p>
                  </div>
                </div>

                {/* ── 通用流程模板（针对正向问题）── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🎯 通用流程（正向问题用）：求导 → 找零点 → 分段判号 → 写区间</div>
                  <div className="px-2 py-0.5 space-y-1">
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
                          <td className="border border-gray-300 px-2 py-0.5 text-left">含 <Math tex="\ln" /> 解真数 <Math tex=">0" />；含分母解 <Math tex="\ne 0" />。<strong>所有判号都在定义域内</strong>。</td>
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
                          <td className="border border-gray-300 px-2 py-0.5 text-left">零点把定义域切成若干段。<strong>每段任取一个值代入</strong>（或穿根法 / 看分子分母同号异号）。</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-0.5 font-bold">⑤</td>
                          <td className="border border-gray-300 px-2 py-0.5"><strong>写单调区间</strong></td>
                          <td className="border border-gray-300 px-2 py-0.5 text-left"><Math tex="f'>0" /> 段 → <strong>增</strong>；<Math tex="f'<0" /> 段 → <strong>减</strong>。<strong>定义域有断点必须分开写，不合并</strong>。</td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="px-2 py-0.5 text-gray-700 text-[0.85rem]"><strong>💡 核心心法</strong>：判 <Math tex="f" /> 单调性 = 判 <Math tex="f'" /> 正负。形式不同，套路相同——多项式、对数、指数、含参数<strong>全用这一套</strong>。</p>
                  </div>
                </div>

                {/* ═══════════════════════════════════════════════════════ */}
                {/* 1.1 求不含参函数的单调区间                                  */}
                {/* ═══════════════════════════════════════════════════════ */}
                <div className="px-2 py-1 font-bold text-gray-900 bg-blue-50 border-l-4 border-blue-500">1.1　求不含参函数的单调区间（★ 最基础）</div>

                {/* ── 详解：例 1 + 例 2（标准多项式 + 含 ln）── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：通用流程示范（例 1 多项式 + 例 2 含 <Math tex="\ln" />）</div>
                  <div className="grid grid-cols-[1fr_auto_1fr]">
                    <div className="px-2 py-0.5 space-y-1">
                      <p className="font-bold"><strong>例 1</strong>：求 <Math tex="f(x)=x^3-3x+2" /> 的单调区间。</p>
                      <hr className="border-gray-300" />
                      <p className="pl-2"><strong>① 定义域</strong>：<Math tex="\mathbb{R}" />（多项式无限制）。</p>
                      <p className="pl-2"><strong>② 求导</strong>：<Math tex="f'(x)=3x^2-3" />。</p>
                      <p className="pl-2"><strong>③ 找零点</strong>：令 <Math tex="f'(x)=0" />，<Math tex="3x^2-3=0" /> 解得 <Math tex="x=-1,\,1" />。</p>
                      <p className="pl-2"><strong>④ 分段代值</strong>：零点把 <Math tex="\mathbb{R}" /> 切成 3 段，并代入对应区间的值。</p>
                      <p className="pl-4">• <Math tex="(-\infty,-1)" />：代 <Math tex="x=-2" />，<Math tex="f'(-2)=9>0" /> → <strong>增</strong></p>
                      <p className="pl-4">• <Math tex="(-1,1)" />：代 <Math tex="x=0" />，<Math tex="f'(0)=-3<0" /> → <strong>减</strong></p>
                      <p className="pl-4">• <Math tex="(1,+\infty)" />：代 <Math tex="x=2" />，<Math tex="f'(2)=9>0" /> → <strong>增</strong></p>
                      <p className="pl-2"><strong>结论</strong>：增区间 <Math tex="(-\infty,-1)" /> 和 <Math tex="(1,+\infty)" />，减区间 <Math tex="(-1,1)" />。</p>
                    </div>
                    <div className="w-px bg-gray-300"></div>
                    <div className="px-2 py-0.5 space-y-1">
                      <p className="font-bold"><strong>例 2</strong>：求 <Math tex="f(x)=x-\ln x" /> 的单调区间。</p>
                      <hr className="border-gray-300" />
                      <p className="pl-2"><strong>① 定义域</strong>：<Math tex="x>0" />（<Math tex="\ln x" /> 要求）。</p>
                      <p className="pl-2"><strong>② 求导通分</strong>：<Math tex="f'(x)=1-\dfrac{1}{x}=\dfrac{x}{x}-\dfrac{1}{x}=\dfrac{x-1}{x}" />。</p>
                      <p className="pl-2"><strong>③ 定号</strong>：分母 <Math tex="x>0" /> 已固定为正，分子 <Math tex="x-1" /> 有两种情况：</p>
                      <p className="pl-4">• 当 <Math tex="x-1>0" /> 即 <Math tex="x>1" />：分式正，<Math tex="f'>0" /> → <strong>增</strong></p>
                      <p className="pl-4">• 当 <Math tex="x-1<0" /> 即 <Math tex="0<x<1" />：分式负，<Math tex="f'<0" /> → <strong>减</strong></p>
                      <p className="pl-2"><strong>结论</strong>：增区间 <Math tex="(1,+\infty)" />，减区间 <Math tex="(0,1)" />。</p>
                      <p className="pl-2 text-gray-700 text-[0.85rem]">💡 也可以用分段代值法：定义域端点 <Math tex="0" /> + 零点 <Math tex="1" /> 把 <Math tex="(0,+\infty)" /> 切成两段，代 <Math tex="x=0.5,\,2" /> 验证即可。</p>
                    </div>
                  </div>
                </div>

                {/* ── 解题提示 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px bg-amber-50">
                  <div className="px-2 py-1 text-[0.85rem]">
                    <p><strong>💡 解题口诀</strong>：令 <Math tex="f'(x)>0" />，解得的 <Math tex="x" /> 范围就是 <strong>增区间</strong>；令 <Math tex="f'(x)<0" />，解得的 <Math tex="x" /> 范围就是 <strong>减区间</strong>。</p>
                  </div>
                </div>

                {/* ── 💪 随手算两道 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="💪 随手算两道" questions={derivMono1Warmup} explanations={derivativeApplication2Explanations} hideBlankLine optionCols={2} printOptionCols={2}
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

                {/* ── 详解：例 3（带 e^x，需要乘积法则 + 约掉恒正因子）── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：<strong>例 3</strong>　求 <Math tex="f(x)=(x-1)e^x" /> 的单调区间<span className="font-normal ml-2">——约掉恒正因子的技巧</span></div>
                  <div className="px-2 py-0.5 space-y-1">
                    <p className="pl-2"><strong>① 定义域</strong>：<Math tex="\mathbb{R}" />。</p>
                    <p className="pl-2"><strong>② 求导</strong>（乘积法则 <Math tex="(uv)'=u'v+uv'" />，口诀：<strong>前导后不导，加前不导后导</strong>）：</p>
                    <p className="pl-4"><Math tex="f'(x)=(x-1)'\cdot e^x+(x-1)\cdot(e^x)'=1\cdot e^x+(x-1)\cdot e^x=e^x+(x-1)e^x=xe^x" /></p>
                    <p className="pl-2"><strong>③ 定号</strong>：因为底数 <Math tex="e>0" />，所以 <Math tex="e^x>0" /> <strong>恒成立</strong>，乘上正数不改变符号，故 <Math tex="f'(x)=xe^x" /> 的正负<strong>完全跟随 <Math tex="x" /></strong>，<strong>分类讨论</strong>：</p>
                    <p className="pl-4">• 当 <Math tex="x>0" /> 时，<Math tex="xe^x>0" />，得 <Math tex="f'(x)>0" /> → <strong>增</strong>（验：<Math tex="x=1\Rightarrow 1\cdot e>0" /> ✓）</p>
                    <p className="pl-4">• 当 <Math tex="x<0" /> 时，<Math tex="xe^x<0" />，得 <Math tex="f'(x)<0" /> → <strong>减</strong>（验：<Math tex="x=-1\Rightarrow -1\cdot e^{-1}<0" /> ✓）</p>
                    <p className="pl-2"><strong>结论</strong>：增区间 <Math tex="(0,+\infty)" />，减区间 <Math tex="(-\infty,0)" />。</p>
                    <hr className="border-gray-300" />
                    <div className="space-y-1">
                      <p><strong>💡 约掉恒正因子的技巧 · 原理</strong>：如 <Math tex="5x" /> 中 <Math tex="5" /> 是正数，<Math tex="x" /> 可正可负，<strong>正负完全由 <Math tex="x" /> 控制</strong>。</p>
                      <p className="pl-2"><strong>常见恒正因子</strong>：<Math tex="e^x" />、<Math tex="e^{ax+b}" /> ——指数函数（底数 <Math tex="e>0" />，<strong>正数的任何次方都是正数</strong>）</p>
                      <p className="pl-[7.5em]"><Math tex="x^2+1" />、<Math tex="x^2+a" />（<Math tex="a>0" />）——平方加正常数（任何数的平方都 <Math tex="\ge 0" />，加正常数后必 <Math tex=">0" />）</p>
                      <p className="pl-[7.5em]"><Math tex="\ln(\square)" /> 题中的<strong>真数 <Math tex="\square" /></strong>（定义域要求真数 <Math tex=">0" />，自动恒正）</p>
                      <p className="pl-[7.5em]"><Math tex="\sqrt{x}" />（定义域 <Math tex="x\ge 0" /> 上 <Math tex="\sqrt{x}\ge 0" />；当题目要求 <Math tex="x>0" /> 时严格 <Math tex=">0" />）</p>
                      <p className="pl-2"><strong>用法</strong>：把恒正因子"擦掉"，只看剩下的因子判正负——大幅省力。</p>
                      <p className="pl-2"><strong>反例</strong>：<Math tex="x" />（可正可负）、<Math tex="\sin x" />（可正可负）、<Math tex="x-1" />（看 <Math tex="x" /> 与 1 的大小）——这些<strong>不能</strong>直接约。</p>
                    </div>
                  </div>
                </div>

                {/* ── 一句话看穿 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px bg-amber-50">
                  <div className="px-2 py-1.5">
                    <p><strong>💡 一句话看穿这节</strong>：求单调区间 = <strong>定义域 → 求导 → 找零点 → 分段判 <Math tex="f'" /> 正负 → 写区间</strong>。形式不同，套路相同。</p>
                  </div>
                </div>

                {/* ── 即时练习 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="" questions={derivMono1Practice} explanations={derivativeApplication2Explanations} hideBlankLine optionCols={2} printOptionCols={2}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivMono1Practice} printOptionCols={2} columns={2} />
                </div>

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

          {/* ═════════════════════════════════════════════════════ */}
          {/* Section 4: 极值与最值 */}
          {/* ═════════════════════════════════════════════════════ */}
          <section id="da2-extrema" className="mb-0 scroll-mt-4">
            <Collapsible title="四、极值与最值" defaultOpen storageKey="deriv-application-2:extrema">
              <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

                {/* ═══════════════════════════════════════════════════════ */}
                {/* 4.0 高考定位                                              */}
                {/* ═══════════════════════════════════════════════════════ */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🎯 高考定位 · 极值与最值</div>
                  <div className="grid grid-cols-[49%_51%]">
                    <div className="px-2 py-1 border-r border-gray-300 space-y-0.5">
                      <p><strong>考查频率</strong>：导数解答题<strong>第（1）小问高频考点</strong>，2024-2025 全国卷每年至少考 1 题。</p>
                      <p><strong>难度跨度</strong>：从基础（直接求极值/最值）到压轴（含参讨论 + 综合不等式）<strong>全覆盖</strong>。</p>
                      <p><strong>得分策略</strong>：</p>
                      <p className="pl-2">• <strong>必拿分</strong>：求不含参函数的极值、闭区间最值（基础送分）</p>
                      <p className="pl-2">• <strong>力争分</strong>：含参讨论极值（基于 1.4 分类思路）、反求参数</p>
                    </div>
                    <div className="px-2 py-1">
                      <p className="font-bold mb-0.5">📋 4 大考点 + 6 大常考题型</p>
                      <table className="w-full border-collapse text-[0.85rem] [&_tr>*:first-child]:border-l-0 [&_tr>*:last-child]:border-r-0">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="border border-gray-300 px-1 py-0.5">考点</th>
                            <th className="border border-gray-300 px-1 py-0.5">代表题型</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-1 py-0.5">① 极值定义/判定</td>
                            <td className="border border-gray-300 px-1 py-0.5">求极值；由 <Math tex="f'" /> 图判极值</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-1 py-0.5">② 闭区间最值</td>
                            <td className="border border-gray-300 px-1 py-0.5">极值 + 端点比较</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-1 py-0.5">③ 含参极值</td>
                            <td className="border border-gray-300 px-1 py-0.5">按 <Math tex="a" /> 分类（同 1.4）</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-1 py-0.5">④ 反求参数</td>
                            <td className="border border-gray-300 px-1 py-0.5">已知极值 → 列方程组求 <Math tex="a,b" /></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* ═══════════════════════════════════════════════════════ */}
                {/* 4.1 极值定义与判定                                        */}
                {/* ═══════════════════════════════════════════════════════ */}
                <div className="px-2 py-1 font-bold text-gray-900 bg-blue-50 border-l-4 border-blue-500 mt-1">4.1　极值定义与判定（★ 基础送分）</div>

                {/* ── 概念卡片 1：零点 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-blue-800 border-b border-gray-400 bg-blue-50">📘 概念 1：零点（看原函数 <Math tex="f" />）</div>
                  <div className="px-2 py-1 space-y-0.5">
                    <p><strong>定义</strong>：使得函数值为零的<strong>自变量的值</strong>，称为函数 <Math tex="f(x)" /> 的零点（即令 <Math tex="f(x)=0" /> 解出来的 <Math tex="x" />）。</p>
                    <p><strong>几何意义</strong>：函数图像与 <Math tex="x" /> 轴的<strong>交点的横坐标</strong>。</p>
                    <p><strong>例</strong>：<Math tex="f(x)=x^2-1" />，令 <Math tex="x^2-1=0" />，解得 <Math tex="x=\pm 1" />，所以 <Math tex="-1" /> 和 <Math tex="1" /> 是 <Math tex="f" /> 的两个零点。</p>
                  </div>
                </div>

                {/* ── 概念卡片 2：驻点 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-green-800 border-b border-gray-400 bg-green-50">📗 概念 2：驻点（看导函数 <Math tex="f'" />，即 <Math tex="f'" /> 的零点）</div>
                  <div className="px-2 py-1 space-y-0.5">
                    <p><strong>定义</strong>：函数的驻点就是求导之后<strong>一阶导函数的零点</strong>。</p>
                    <div className="flex items-center gap-2">
                      <strong className="whitespace-nowrap">等价关系：</strong>
                      <table className="flex-1 border-collapse text-[0.9rem] [&_tr>*:first-child]:border-l-0 [&_tr>*:last-child]:border-r-0">
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-2 py-0.5 text-center">函数 <Math tex="f" /> 的驻点 <Math tex="\Leftrightarrow" /> 导函数 <Math tex="f'" /> 的零点</td>
                            <td className="border border-gray-300 px-2 py-0.5 text-center">导函数 <Math tex="f'" /> 的驻点 <Math tex="\Leftrightarrow" /> 二阶导函数 <Math tex="f''" /> 的零点（高中不考）</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p><strong>例</strong>：<Math tex="f(x)=x^3-3x" />，求导 <Math tex="f'(x)=3x^2-3" />，令 <Math tex="f'(x)=0" />，解得 <Math tex="x=\pm 1" />，所以 <Math tex="x=\pm 1" /> 是原函数的驻点，即导函数的零点</p>
                  </div>
                </div>

                {/* ── 概念卡片 3：极值点 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-orange-800 border-b border-gray-400 bg-orange-50">📙 概念 3：极值点 / 极值（看函数<strong>单调性变化</strong>的位置）</div>
                  <div className="px-2 py-1 space-y-0.5">
                    <div className="grid grid-cols-[1fr_auto] gap-3">
                      <div className="space-y-0.5">
                        <p><strong>极值点（<Math tex="x" /> 坐标）</strong>：函数<strong>单调性发生变化</strong>的那个 <Math tex="x" /> 值。</p>
                        <p className="pl-2">• <strong>极大值点</strong>：函数从增变减的位置（图像上的<strong>山顶</strong>）</p>
                        <p className="pl-2">• <strong>极小值点</strong>：函数从减变增的位置（图像上的<strong>山谷</strong>）</p>
                        <p><strong>极值（<Math tex="y" /> 值）</strong>：函数在极值点处的<strong>函数值</strong> <Math tex="f(x_0)" />，分别叫<strong>极大值</strong>和<strong>极小值</strong>。</p>
                      </div>
                      <div className="flex flex-row gap-2 shrink-0">
                        <div className="flex flex-col items-center">
                          <p className="text-[0.85rem] font-bold text-red-700">极大值（山顶）</p>
                          <DebugMafs viewBox={{ x: [-2.5, 2.5], y: [-1, 2.2] }} height={58} width={88}>
                            <Coordinates.Cartesian xAxis={{ lines: false, labels: false }} yAxis={{ lines: false, labels: false }} />
                            <Plot.OfX y={(x) => -x * x + 2} color="#ef4444" />
                            <Point x={0} y={2} color="#ef4444" />
                          </DebugMafs>
                        </div>
                        <div className="flex flex-col items-center">
                          <p className="text-[0.85rem] font-bold text-blue-700">极小值（山谷）</p>
                          <DebugMafs viewBox={{ x: [-2.5, 2.5], y: [-2.2, 1] }} height={58} width={88}>
                            <Coordinates.Cartesian xAxis={{ lines: false, labels: false }} yAxis={{ lines: false, labels: false }} />
                            <Plot.OfX y={(x) => x * x - 2} color="#3b82f6" />
                            <Point x={0} y={-2} color="#3b82f6" />
                          </DebugMafs>
                        </div>
                      </div>
                    </div>
                    <hr className="border-gray-300 my-1" />
                    <p><strong>💡 经典例子（二次函数）</strong>：<Math tex="f(x)=ax^2+bx+c" /> 的<strong>对称轴</strong> <Math tex="x=-\dfrac{b}{2a}" /> 就是极值点；</p>
                    <hr className="border-gray-300 my-1" />
                    <p>将对称轴 <Math tex="x" /> <strong>代入 <Math tex="f(x)" /> 算出的函数值</strong>就是极值。开口向上时为极小值，开口向下时为极大值。</p>
                    <hr className="border-gray-300 my-1" />
                    <p><strong>例</strong>：<Math tex="f(x)=x^2-4x+3" />，对称轴 <Math tex="x=2" />，所以<strong>极小值点是 <Math tex="x=2" /></strong>；代入 <Math tex="f(2)=4-8+3=-1" />，所以<strong>极小值是 <Math tex="-1" /></strong></p>
                  </div>
                </div>

                {/* ── 极值判定定理 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📖 极值判定定理（核心方法）</div>
                  <div className="px-2 py-1 space-y-0.5">
                    <p>设 <Math tex="a" /> 是 <Math tex="f(x)" /> 的<strong>驻点</strong>，则 <Math tex="f'(x)" /> 的零点为 <Math tex="a" />，即 <Math tex="f'(a)=0" />。看 <Math tex="f'" /> 在 <Math tex="a" /> 两侧的<strong>正负</strong>：</p>
                    <table className="w-full border-collapse text-[0.9rem] [&_tr>*:first-child]:border-l-0 [&_tr>*:last-child]:border-r-0">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="border border-gray-300 px-2 py-0.5"><Math tex="f'" /> 左侧</th>
                          <th className="border border-gray-300 px-2 py-0.5"><Math tex="f'" /> 右侧</th>
                          <th className="border border-gray-300 px-2 py-0.5">结论</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-2 py-0.5 text-center"><strong>正</strong>（+）</td>
                          <td className="border border-gray-300 px-2 py-0.5 text-center"><strong>负</strong>（−）</td>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="f" /> 先增后减 → <strong className="text-red-700">极大值点</strong>（山顶 ⌒）</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-0.5 text-center"><strong>负</strong>（−）</td>
                          <td className="border border-gray-300 px-2 py-0.5 text-center"><strong>正</strong>（+）</td>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="f" /> 先减后增 → <strong className="text-blue-700">极小值点</strong>（山谷 ⌣）</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-0.5 text-center" colSpan={2}><strong>同号</strong>（不变号）</td>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="f" /> 一直增或一直减 → <strong>不是极值点</strong>（只是驻点）</td>
                        </tr>
                      </tbody>
                    </table>
                    <p><strong>💡 一句话</strong>：<strong>驻点变号 = 极值点；驻点不变号 = 不是极值点</strong>。</p>
                    <p><strong>反例提醒</strong>：<Math tex="f(x)=x^3" /> 的驻点 <Math tex="x=0" />，但 <Math tex="f'=3x^2" /> 两侧都为非负，<strong>不变号</strong>，所以 <Math tex="x=0" /> 不是极值点。</p>
                  </div>
                </div>

                {/* ── 求极值 4 步流程 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🔧 求极值标准 4 步流程（套路化）</div>
                  <div className="px-2 py-1 space-y-0.5">
                    <p>① <strong>求定义域</strong>（含 <Math tex="\ln x" />、分式、根号时不能漏）</p>
                    <p>② <strong>求导找驻点</strong>（解 <Math tex="f'(x)=0" />，得 <Math tex="x=a_1, a_2, \ldots" />）</p>
                    <p>③ <strong>列表判号</strong>（用驻点把定义域分段，判 <Math tex="f'" /> 在每段的正负）</p>
                    <p>④ <strong>判极大极小并计算极值</strong>（左正右负 → 极大；左负右正 → 极小；不变号 → 不是极值点；代入 <Math tex="f" /> 算出极值）</p>
                  </div>
                </div>

                {/* ── 例 1 详解 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：<strong>例 1</strong>　求 <Math tex="f(x)=x^3-3x^2+1" /> 的极值</div>
                  <div className="px-2 py-1 space-y-1">
                    <p>① <strong>定义域</strong>：<Math tex="\mathbb{R}" />（多项式无限制）</p>
                    <hr className="border-gray-300" />
                    <p>② <strong>求导找驻点</strong>：<Math tex="f'(x)=3x^2-6x=3x(x-2)" /></p>
                    <p className="pl-4">令 <Math tex="f'(x)=0" />，即 <Math tex="3x(x-2)=0" />，解得 <Math tex="x=0" /> 或 <Math tex="x=2" /></p>
                    <p className="pl-4">所以驻点为 <Math tex="x=0" /> 和 <Math tex="x=2" /></p>
                    <hr className="border-gray-300" />
                    <div className="grid grid-cols-[auto_1fr] gap-4">
                      <div>
                        <p>③ <strong>列表判号</strong>（用驻点把 <Math tex="\mathbb{R}" /> 分成三段）：</p>
                        <table className="ml-4 mt-1 border-collapse text-center text-[0.9rem] [&_td]:border [&_td]:border-gray-300 [&_th]:border [&_th]:border-gray-300 [&_td]:px-2 [&_td]:py-0.5 [&_th]:px-2 [&_th]:py-0.5">
                          <thead className="bg-gray-50">
                            <tr>
                              <th><Math tex="x" /></th>
                              <th><Math tex="(-\infty,0)" /></th>
                              <th><Math tex="0" /></th>
                              <th><Math tex="(0,2)" /></th>
                              <th><Math tex="2" /></th>
                              <th><Math tex="(2,+\infty)" /></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="font-bold"><Math tex="3x" /></td>
                              <td>−</td>
                              <td>0</td>
                              <td>+</td>
                              <td>+</td>
                              <td>+</td>
                            </tr>
                            <tr>
                              <td className="font-bold"><Math tex="x-2" /></td>
                              <td>−</td>
                              <td>−</td>
                              <td>−</td>
                              <td>0</td>
                              <td>+</td>
                            </tr>
                            <tr>
                              <td className="font-bold"><Math tex="f'(x)" /></td>
                              <td><strong>+</strong></td>
                              <td>0</td>
                              <td><strong>−</strong></td>
                              <td>0</td>
                              <td><strong>+</strong></td>
                            </tr>
                            <tr>
                              <td className="font-bold"><Math tex="f(x)" /></td>
                              <td>↗ 递增</td>
                              <td className="text-red-700 font-bold">极大</td>
                              <td>↘ 递减</td>
                              <td className="text-blue-700 font-bold">极小</td>
                              <td>↗ 递增</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="space-y-1">
                        <p>④ <strong>判极大极小并求极值</strong>（两种角度任选其一，等价）：</p>
                        <div className="grid grid-cols-[auto_1fr] gap-3 items-start">
                          <div className="border border-gray-300 rounded overflow-hidden">
                            <div className="px-2 py-0.5 bg-orange-50 leading-tight">
                              <p className="font-bold text-gray-800">角度 A：从导数 <Math tex="f'" /> 正负看</p>
                              <p className="pl-2">• <Math tex="x=0" /> 处 <Math tex="f'" /> <strong>左正右负</strong> → <strong>极大值点</strong></p>
                              <p className="pl-2">• <Math tex="x=2" /> 处 <Math tex="f'" /> <strong>左负右正</strong> → <strong>极小值点</strong></p>
                            </div>
                            <div className="px-2 py-0.5 bg-blue-50 border-t border-gray-300 leading-tight">
                              <p className="font-bold text-gray-800">角度 B：从函数 <Math tex="f" /> 单调性看</p>
                              <p className="pl-2">• <Math tex="x=0" /> 处 <Math tex="f" /> <strong>先增后减</strong> → <strong>极大值点</strong></p>
                              <p className="pl-2">• <Math tex="x=2" /> 处 <Math tex="f" /> <strong>先减后增</strong> → <strong>极小值点</strong></p>
                            </div>
                          </div>
                          <div className="space-y-0.5">
                            <p><strong>计算极值</strong>：</p>
                            <p className="pl-2">• 极大值 <Math tex="f(0)" /></p>
                            <p className="pl-4"><Math tex="=0-0+1=1" /></p>
                            <p className="pl-2">• 极小值 <Math tex="f(2)" /></p>
                            <p className="pl-4"><Math tex="=8-12+1=-3" /></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="border-gray-300" />
                    <p><strong>结论</strong>：<Math tex="f(x)" /> 的<strong>极大值为 1</strong>（在 <Math tex="x=0" /> 处取得），<strong>极小值为 -3</strong>（在 <Math tex="x=2" /> 处取得）</p>
                  </div>
                </div>

                {/* ── 例 1 后即时练习 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="✏️ 例 1 同款练习（求多项式极值）" questions={derivExtremaExample1Practice} explanations={derivativeApplication2Explanations} hideBlankLine optionCols={1} printOptionCols={1}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivExtremaExample1Practice} printOptionCols={1} columns={1} />
                </div>

                {/* ── 例 2 详解：含 ln，有定义域限制 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：<strong>例 2</strong>　求 <Math tex="f(x)=x-\ln x" /> 的极值<span className="font-normal ml-2">——含 <Math tex="\ln" /> 有定义域限制</span></div>
                  <div className="px-2 py-1 space-y-1">
                    <p>① <strong>定义域</strong>：<Math tex="\ln x" /> 要求真数 <Math tex="x>0" />，所以定义域为 <Math tex="(0,+\infty)" />。<span className="text-red-700"><strong>⚠️ 含 <Math tex="\ln" /> 必先写定义域</strong>，所有判号都要在定义域内。</span></p>
                    <hr className="border-gray-300" />
                    <p>② <strong>求导找驻点</strong>：<Math tex="f'(x)=1-\dfrac{1}{x}=\dfrac{x-1}{x}" />（通分）</p>
                    <p className="pl-4">令 <Math tex="f'(x)=0" />，分式 <Math tex="=0" /> 只看分子，<Math tex="x-1=0" />，解得 <Math tex="x=1" />（在定义域内 ✓）</p>
                    <hr className="border-gray-300" />
                    <div className="grid grid-cols-[auto_1fr] gap-4">
                      <div>
                        <p>③ <strong>列表判号</strong>（驻点 <Math tex="x=1" /> 把定义域 <Math tex="(0,+\infty)" /> 切成两段）：</p>
                        <table className="ml-4 mt-1 border-collapse text-center text-[0.9rem] [&_td]:border [&_td]:border-gray-300 [&_th]:border [&_th]:border-gray-300 [&_td]:px-2 [&_td]:py-0.5 [&_th]:px-2 [&_th]:py-0.5">
                          <thead className="bg-gray-50">
                            <tr>
                              <th><Math tex="x" /></th>
                              <th><Math tex="(0,1)" /></th>
                              <th><Math tex="1" /></th>
                              <th><Math tex="(1,+\infty)" /></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="font-bold"><Math tex="x-1" /></td>
                              <td>−</td>
                              <td>0</td>
                              <td>+</td>
                            </tr>
                            <tr>
                              <td className="font-bold"><Math tex="x" /></td>
                              <td>+</td>
                              <td>+</td>
                              <td>+</td>
                            </tr>
                            <tr>
                              <td className="font-bold"><Math tex="f'(x)" /></td>
                              <td><strong>−</strong></td>
                              <td>0</td>
                              <td><strong>+</strong></td>
                            </tr>
                            <tr>
                              <td className="font-bold"><Math tex="f(x)" /></td>
                              <td>↘ 递减</td>
                              <td className="text-blue-700 font-bold">极小</td>
                              <td>↗ 递增</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="space-y-1">
                        <p>④ <strong>判极大极小并求极值</strong>：</p>
                        <p className="pl-2">• <Math tex="x=1" /> 处 <Math tex="f'" /> <strong>左负右正</strong> → <strong>极小值点</strong></p>
                        <p className="pl-2">• 没有左正右负的位置 → <strong>无极大值</strong></p>
                        <hr className="border-gray-300" />
                        <p><strong>计算极值</strong>：</p>
                        <p className="pl-2">• 极小值 <Math tex="f(1)" /></p>
                        <p className="pl-4"><Math tex="=1-\ln 1=1-0=1" /></p>
                        <hr className="border-gray-300" />
                        <p><strong>结论</strong>：<Math tex="f(x)" /> 的<strong>极小值为 1</strong>（在 <Math tex="x=1" /> 处取得），<strong>无极大值</strong>。</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── 例 2 后即时练习 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="✏️ 例 2 同款练习（含 ln 求极值）" questions={derivExtremaExample2Practice} explanations={derivativeApplication2Explanations} hideBlankLine optionCols={1} printOptionCols={1}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivExtremaExample2Practice} printOptionCols={1} columns={1} />
                </div>

                {/* ── 例 3 详解：含 e^x ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：<strong>例 3</strong>　求 <Math tex="f(x)=xe^x" /> 的极值<span className="font-normal ml-2">——含 <Math tex="e^x" />，约掉恒正因子</span></div>
                  <div className="px-2 py-1 space-y-1">
                    <p>① <strong>定义域</strong>：<Math tex="\mathbb{R}" />（指数函数对所有实数都有定义）</p>
                    <hr className="border-gray-300" />
                    <p>② <strong>求导找驻点</strong>（乘积法则 <Math tex="(uv)'=u'v+uv'" />）：</p>
                    <p className="pl-4"><Math tex="f'(x)=x'\cdot e^x+x\cdot(e^x)'=1\cdot e^x+x\cdot e^x=(1+x)e^x" /></p>
                    <p className="pl-4">令 <Math tex="f'(x)=0" />，因 <Math tex="e^x>0" /> <strong>恒正可约</strong>（指数函数永远为正），只看 <Math tex="1+x=0" />，解得 <Math tex="x=-1" /></p>
                    <hr className="border-gray-300" />
                    <div className="grid grid-cols-[auto_1fr] gap-4">
                      <div>
                        <p>③ <strong>列表判号</strong>（驻点 <Math tex="x=-1" /> 把 <Math tex="\mathbb{R}" /> 切成两段）：</p>
                        <table className="ml-4 mt-1 border-collapse text-center text-[0.9rem] [&_td]:border [&_td]:border-gray-300 [&_th]:border [&_th]:border-gray-300 [&_td]:px-2 [&_td]:py-0.5 [&_th]:px-2 [&_th]:py-0.5">
                          <thead className="bg-gray-50">
                            <tr>
                              <th><Math tex="x" /></th>
                              <th><Math tex="(-\infty,-1)" /></th>
                              <th><Math tex="-1" /></th>
                              <th><Math tex="(-1,+\infty)" /></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="font-bold"><Math tex="1+x" /></td>
                              <td>−</td>
                              <td>0</td>
                              <td>+</td>
                            </tr>
                            <tr>
                              <td className="font-bold"><Math tex="e^x" /></td>
                              <td>+</td>
                              <td>+</td>
                              <td>+</td>
                            </tr>
                            <tr>
                              <td className="font-bold"><Math tex="f'(x)" /></td>
                              <td><strong>−</strong></td>
                              <td>0</td>
                              <td><strong>+</strong></td>
                            </tr>
                            <tr>
                              <td className="font-bold"><Math tex="f(x)" /></td>
                              <td>↘ 递减</td>
                              <td className="text-blue-700 font-bold">极小</td>
                              <td>↗ 递增</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="space-y-1">
                        <p>④ <strong>判极大极小并求极值</strong>：</p>
                        <p className="pl-2">• <Math tex="x=-1" /> 处 <Math tex="f'" /> <strong>左负右正</strong> → <strong>极小值点</strong></p>
                        <p className="pl-2">• 没有左正右负的位置 → <strong>无极大值</strong></p>
                        <hr className="border-gray-300" />
                        <p><strong>计算极值</strong>：</p>
                        <p className="pl-2">• 极小值 <Math tex="f(-1)=(-1)\cdot e^{-1}=-\dfrac{1}{e}" /></p>
                        <hr className="border-gray-300" />
                        <p><strong>结论</strong>：<Math tex="f(x)" /> 的<strong>极小值为 <Math tex="-\dfrac{1}{e}" /></strong>（在 <Math tex="x=-1" /> 处取得），<strong>无极大值</strong>。</p>
                      </div>
                    </div>
                    <hr className="border-gray-300" />
                    <p><strong>💡 含 <Math tex="e^x" /> 题的关键</strong>：<Math tex="e^x" /> 永远 <Math tex=">0" />，求导后<strong>把它当成恒正因子直接约掉</strong>，只看剩下的多项式因子的零点和正负。</p>
                  </div>
                </div>

                {/* ── 例 3 后即时练习 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="✏️ 例 3 同款练习（含 e^x 求极值）" questions={derivExtremaExample3Practice} explanations={derivativeApplication2Explanations} hideBlankLine optionCols={1} printOptionCols={1}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivExtremaExample3Practice} printOptionCols={1} columns={1} />
                </div>

                {/* ── 例 4 详解：分式 / 反比例型 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：<strong>例 4</strong>　求 <Math tex="f(x)=x+\dfrac{1}{x}" /> 的极值<span className="font-normal ml-2">——分式 / 反比例型经典母题，含间断点</span></div>
                  <div className="px-2 py-1 space-y-1">
                    <p>① <strong>定义域</strong>：分母 <Math tex="x\ne 0" />，定义域为 <Math tex="(-\infty,0)\cup(0,+\infty)" />。<span className="text-red-700"><strong>⚠️ 含分母必排除分母为 0 的点</strong>，<Math tex="x=0" /> 时函数无意义、不存在。</span></p>
                    <hr className="border-gray-300" />
                    <p>② <strong>求导找驻点</strong>：<Math tex="f'(x)=1-\dfrac{1}{x^2}=\dfrac{x^2-1}{x^2}=\dfrac{(x-1)(x+1)}{x^2}" />（通分 + 因式分解）</p>
                    <p className="pl-4">分母 <Math tex="x^2>0" /> <strong>恒正可约</strong>，看分子 <Math tex="(x-1)(x+1)" />。令 <Math tex="(x-1)(x+1)=0" />，解得 <Math tex="x=\pm 1" />（均在定义域内 ✓）</p>
                    <hr className="border-gray-300" />
                    <div className="grid grid-cols-[auto_1fr] gap-4">
                      <div>
                        <p>③ <strong>列表判号</strong>（驻点 <Math tex="\pm 1" /> + 间断点 <Math tex="0" /> 把定义域切成 4 段）：</p>
                        <table className="ml-4 mt-1 border-collapse text-center text-[0.85rem] [&_td]:border [&_td]:border-gray-300 [&_th]:border [&_th]:border-gray-300 [&_td]:px-1.5 [&_td]:py-0.5 [&_th]:px-1.5 [&_th]:py-0.5">
                          <thead className="bg-gray-50">
                            <tr>
                              <th><Math tex="x" /></th>
                              <th><Math tex="(-\infty,-1)" /></th>
                              <th><Math tex="-1" /></th>
                              <th><Math tex="(-1,0)" /></th>
                              <th><Math tex="0" /></th>
                              <th><Math tex="(0,1)" /></th>
                              <th><Math tex="1" /></th>
                              <th><Math tex="(1,+\infty)" /></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="font-bold"><Math tex="x+1" /></td>
                              <td>−</td>
                              <td>0</td>
                              <td>+</td>
                              <td>+</td>
                              <td>+</td>
                              <td>+</td>
                              <td>+</td>
                            </tr>
                            <tr>
                              <td className="font-bold"><Math tex="x-1" /></td>
                              <td>−</td>
                              <td>−</td>
                              <td>−</td>
                              <td>−</td>
                              <td>−</td>
                              <td>0</td>
                              <td>+</td>
                            </tr>
                            <tr>
                              <td className="font-bold"><Math tex="f'(x)" /></td>
                              <td><strong>+</strong></td>
                              <td>0</td>
                              <td><strong>−</strong></td>
                              <td className="bg-gray-200 text-gray-500">无定义</td>
                              <td><strong>−</strong></td>
                              <td>0</td>
                              <td><strong>+</strong></td>
                            </tr>
                            <tr>
                              <td className="font-bold"><Math tex="f(x)" /></td>
                              <td>↗ 递增</td>
                              <td className="text-red-700 font-bold">极大</td>
                              <td>↘ 递减</td>
                              <td className="bg-gray-200 text-gray-500">间断</td>
                              <td>↘ 递减</td>
                              <td className="text-blue-700 font-bold">极小</td>
                              <td>↗ 递增</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="space-y-1">
                        <p>④ <strong>判极大极小并求极值</strong>：</p>
                        <p className="pl-2">• <Math tex="x=-1" /> 处 <Math tex="f'" /> <strong>左正右负</strong> → <strong>极大值点</strong></p>
                        <p className="pl-2">• <Math tex="x=1" /> 处 <Math tex="f'" /> <strong>左负右正</strong> → <strong>极小值点</strong></p>
                        <hr className="border-gray-300" />
                        <p><strong>计算极值</strong>：</p>
                        <p className="pl-2">• 极大值 <Math tex="f(-1)=-1+\dfrac{1}{-1}=-2" /></p>
                        <p className="pl-2">• 极小值 <Math tex="f(1)=1+\dfrac{1}{1}=2" /></p>
                      </div>
                    </div>
                    <hr className="border-gray-300" />
                    <p><strong>结论</strong>：<Math tex="f(x)" /> 的<strong>极大值为 -2</strong>（在 <Math tex="x=-1" /> 处取得），<strong>极小值为 2</strong>（在 <Math tex="x=1" /> 处取得）</p>
                    <div className="border border-red-400 rounded bg-red-50 px-2 py-1 text-[0.88rem]">
                      <p className="font-bold text-red-800">⚠️ 关键认知：极大值居然小于极小值！</p>
                      <p>本题 <strong>极大值 -2 &lt; 极小值 2</strong>，看起来反直觉，但完全合法。原因是间断点 <Math tex="x=0" /> 把定义域切成两段，<Math tex="-1" /> 在左段、<Math tex="1" /> 在右段。</p>
                      <p className="text-gray-700"><strong>📌 一句话</strong>：极值是<strong>局部</strong>概念（"邻域内"的最值），不是全局；极大值不一定大于极小值，二者也不一定共存。</p>
                    </div>
                  </div>
                </div>

                {/* ── 例 4 后即时练习 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="✏️ 例 4 同款练习（分式 / 反比例型求极值）" questions={derivExtremaExample4Practice} explanations={derivativeApplication2Explanations} hideBlankLine optionCols={1} printOptionCols={1}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivExtremaExample4Practice} printOptionCols={1} columns={1} />
                </div>

                {/* ── 答题提示：高考标准表格格式 ── */}
                <div className="border border-amber-400 rounded overflow-hidden -mt-px bg-amber-50">
                  <div className="px-2 py-1 font-bold text-amber-900 border-b border-amber-300 bg-amber-100">📝 高考答题提示：列表判号表只写 3 行</div>
                  <div className="px-2 py-1 space-y-1">
                    <p>前面例 1–4 详解里画的 4–5 行表格（带 <Math tex="x+1" />、<Math tex="x-1" /> 等中间因子行）是<strong>教学版</strong>，方便看清符号怎么来。<strong>高考正式答题只需要 3 行</strong>：</p>
                    <table className="w-full border-collapse text-center text-[0.9rem] [&_td]:border [&_td]:border-gray-300 [&_th]:border [&_th]:border-gray-300 [&_td]:px-2 [&_td]:py-0.5 [&_th]:px-2 [&_th]:py-0.5">
                      <thead className="bg-white">
                        <tr>
                          <th><Math tex="x" /></th>
                          <th><Math tex="(-\infty,-1)" /></th>
                          <th><Math tex="-1" /></th>
                          <th><Math tex="(-1,0)" /></th>
                          <th><Math tex="0" /></th>
                          <th><Math tex="(0,1)" /></th>
                          <th><Math tex="1" /></th>
                          <th><Math tex="(1,+\infty)" /></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="font-bold"><Math tex="f'(x)" /></td>
                          <td><strong>+</strong></td>
                          <td>0</td>
                          <td><strong>−</strong></td>
                          <td className="bg-gray-200 text-gray-500">无定义</td>
                          <td><strong>−</strong></td>
                          <td>0</td>
                          <td><strong>+</strong></td>
                        </tr>
                        <tr className="bg-white">
                          <td className="font-bold"><Math tex="f(x)" /></td>
                          <td>↗ 递增</td>
                          <td className="text-red-700 font-bold">极大</td>
                          <td>↘ 递减</td>
                          <td className="bg-gray-200 text-gray-500">间断</td>
                          <td>↘ 递减</td>
                          <td className="text-blue-700 font-bold">极小</td>
                          <td>↗ 递增</td>
                        </tr>
                      </tbody>
                    </table>
                    <p><strong>给分点</strong>：<Math tex="f'(x)" /> 行符号正确（判号分）+ <Math tex="f(x)" /> 行的 ↗↘ 和"极大/极小"标注（极值判定分），共 <strong>2–3 分</strong>。中间因子行（<Math tex="x+1" />、<Math tex="x-1" />）<strong>不给分</strong>，属于草稿，写在草稿纸或脑子里就行。</p>
                    <p className="text-gray-700"><strong>💡 一句话</strong>：教学时画详细表帮理解；答题时只画"<Math tex="x" /> + <Math tex="f'(x)" /> + <Math tex="f(x)" />"三行 + 表格下方文字写极值结论。</p>
                  </div>
                </div>

              </div>
            </Collapsible>
          </section>




          {/* ═════════════════════════════════════════════════════ */}
          {/* Section 5: 综合自测 */}
          {/* ═════════════════════════════════════════════════════ */}
          <section id="da2-quiz" className="mb-0 scroll-mt-4">
            <Collapsible title="五、综合自测" defaultOpen storageKey="deriv-application-2:quiz">
              <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">
                {/* TODO: QuizPanel + 本章要点速查表 */}
                <p className="text-gray-500 italic px-2 py-4">本节内容待编写。</p>
              </div>
            </Collapsible>
          </section>

        </div>
      </LessonLayout>
      <UnifiedDebugToggle />
    </div>
  );
}
