import { Math, Collapsible, PageHeader, LessonLayout, ExportButton, PracticeCard, PrintQuestions, UnifiedDebugToggle, PageBreak } from '@/components/shared';
import { Coordinates, Plot } from 'mafs';
import { DebugMafs } from '@/features/trig/MafsDebug';
import { derivBasicProgressItems } from './data/3.4/3.4-deriv-basic-progress';
import { derivBasicPractice1, derivLimitFormsPractice, derivRulesPractice1, derivRulesWarmup, derivRulesPractice2, derivRulesWarmup2, derivRulesPractice3, derivRulesWarmup3, derivRulesPractice4, derivRulesWarmup4 } from './data/3.4/3.4-deriv-basic-practice';
import { useProgress } from '@/hooks';
import { derivativeBasicExplanations } from './3.4-deriv-basic-answers';

const NativeMath = globalThis.Math;

export function DerivativeBasicPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('deriv-basic', derivBasicProgressItems);

  return (
    <div>
      <div className="[&_h1]:!mb-0 [&_.flex.flex-wrap]:!mt-1">
        <PageHeader
          stage="第三阶段 · 函数思维"
          title="3.4 导数基础"
          tags={[
            { label: '难度 ★★★★☆', color: 'red' },
            { label: '大题必考', color: 'amber' },
            { label: '约 4-5 小时', color: 'blue' },
          ]}
        />
      </div>

      <LessonLayout
        progressItems={progressItems}
        onToggle={toggleProgress}
        sidebarTop={<ExportButton title="3.4 导数基础" />}
      >
        <div className="[&_.rounded-xl]:mb-0 [&_.rounded-xl>.flex.items-center]:py-0.5 [&_.rounded-xl>div:last-child]:px-0 [&_.rounded-xl>div:last-child]:pt-0 [&_.rounded-xl>div:last-child]:pb-0 [&_.rounded-xl_button>span]:font-bold [&_.rounded-xl_button>span]:text-gray-900">

          {/* ═══════════════════════════════════════════════════════ */}
          {/* Section 0: 导数定义变形识别（承接 3.3.5） */}
          {/* ═══════════════════════════════════════════════════════ */}
          <section id="db-limit-forms" className="mb-0 scroll-mt-4">
            <Collapsible title="零、导数定义变形识别（承接 3.3.5）" defaultOpen storageKey="deriv-basic:limit-forms">
              <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

                {/* ── 原定义 vs 变形式 ── */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="grid grid-cols-[1fr_1fr] font-bold text-gray-800 border-b border-gray-400 bg-gray-100">
                    <div className="px-2 py-1 border-r border-gray-400">📖 原定义</div>
                    <div className="px-2 py-1">🔁 等价变形（换字母、换倍数都行）</div>
                  </div>
                  <div className="grid grid-cols-[1fr_1fr]">
                    <div className="px-2 py-2 space-y-1 border-r border-gray-300 flex items-center justify-center">
                      <div>
                        <p><Math tex="f'(x_0)=\lim\limits_{\Delta x\to 0}\dfrac{f(x_0+\Delta x)-f(x_0)}{\Delta x}" /></p>
                        <p className="text-gray-700 mt-1">字母 <Math tex="\Delta x" /> 不重要，重要的是：<strong>分母 = 加到 <Math tex="x_0" /> 的那个增量</strong>。</p>
                        <p className="text-gray-700 mt-1">增量叫什么字母、多大、带不带负号都不重要，<br /><strong>只要分子分母完全一致</strong>（且趋近 0），结果就是 <Math tex="f'(x_0)" />。</p>
                      </div>
                    </div>
                    <div className="px-2 py-2 space-y-1">
                      <p>换成 <Math tex="m" />：<Math tex="\lim\limits_{m\to 0}\dfrac{f(x_0+m)-f(x_0)}{m}=f'(x_0)" /></p>
                      <hr className="border-gray-300" />
                      <p>换成 <Math tex="a" />：<Math tex="\lim\limits_{a\to 0}\dfrac{f(x_0+a)-f(x_0)}{a}=f'(x_0)" /></p>
                      <hr className="border-gray-300" />
                      <p>换成 <Math tex="-3a" />：<Math tex="\lim\limits_{a\to 0}\dfrac{f(x_0-3a)-f(x_0)}{-3a}=f'(x_0)" /></p>
                    </div>
                  </div>
                </div>

                {/* ── 高考陷阱：分母倍数不匹配 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">⚠️ 高考陷阱：分子增量 与 分母倍数 不一致（含负号），要"凑"</div>
                  <div className="px-2 py-2 space-y-1">
                    <p><strong>典型题</strong>：求 <Math tex="\lim\limits_{h\to 0}\dfrac{f(x_0-2h)-f(x_0)}{h}" />。分子增量 <Math tex="-2h" /> 与分母 <Math tex="h" /> <strong>不匹配</strong>（符号、倍数都不对）！</p>
                    <p className="pl-2"><strong>技巧：分子分母同乘 <Math tex="-2" /></strong>，凑出"分母 = 增量"：</p>
                    <p className="pl-4"><Math tex="\lim\limits_{h\to 0}\dfrac{f(x_0-2h)-f(x_0)}{h}=\lim\limits_{h\to 0}\dfrac{-2\bigl[f(x_0-2h)-f(x_0)\bigr]}{-2h}" /><span className="text-gray-900 text-[0.85em]">（分子分母同乘 <Math tex="-2" />）</span></p>
                    <hr className="border-gray-300" />
                    <p className="pl-4"><Math tex="=-2\cdot\lim\limits_{h\to 0}\dfrac{f(x_0-2h)-f(x_0)}{-2h}=-2\cdot f'(x_0)=-2f'(x_0)" /><span className="text-gray-900 text-[0.85em]">（分子 <Math tex="-2" /> 提到外面；里面分母 <Math tex="-2h" /> 就是增量，套定义得 <Math tex="f'(x_0)" />）</span></p>
                  </div>
                </div>

                {/* ── 另一种陷阱：分子两侧变化 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="grid grid-cols-[62fr_38fr] font-bold text-gray-800 border-b border-gray-400 bg-gray-100">
                    <div className="px-2 py-1 border-r border-gray-400">⚠️ 更坑：分子两侧都变化</div>
                    <div className="px-2 py-1">📎 换元证明（块 B）</div>
                  </div>
                  <div className="grid grid-cols-[62fr_38fr]">
                    <div className="px-2 py-2 space-y-1 border-r border-gray-300">
                      <p><strong>典型题</strong>：求 <Math tex="\lim\limits_{h\to 0}\dfrac{f(x_0+h)-f(x_0-h)}{h}" /></p>
                      <p className="pl-2">分子 <Math tex="f(x_0+h)-f(x_0-h)" /> 不是标准形式（标准形式要有 <Math tex="-f(x_0)" />）。</p>
                      <hr className="border-gray-300" />
                      <p className="pl-2"><strong>第一步，凑中间：</strong>分子里<strong>同时加减 <Math tex="f(x_0)" /></strong>（加减一个相同的量，值不变）：</p>
                      <p className="pl-4"><Math tex="f(x_0+h)-f(x_0-h)=f(x_0+h)\,\underbrace{-f(x_0)+f(x_0)}_{\text{凑进来}}\,-f(x_0-h)" /></p>
                      <hr className="border-gray-300" />
                      <p className="pl-2"><strong>第二步，重新分组</strong>，拆成两块标准形式：</p>
                      <p className="pl-4"><Math tex="=\underbrace{\bigl[f(x_0+h)-f(x_0)\bigr]}_{\text{块 A}}+\underbrace{\bigl[f(x_0)-f(x_0-h)\bigr]}_{\text{块 B}}" /></p>
                      <hr className="border-gray-300" />
                      <p className="pl-2"><strong>第三步，除以 <Math tex="h" /> 取极限</strong>（两块都是标准定义）：</p>
                      <p className="pl-4">块 A：<Math tex="\lim\limits_{h\to 0}\dfrac{f(x_0+h)-f(x_0)}{h}=f'(x_0)" /></p>
                      <p className="pl-4">块 B：<Math tex="\lim\limits_{h\to 0}\dfrac{f(x_0)-f(x_0-h)}{h}=f'(x_0)" /><span className="text-gray-900 text-[0.85em]">（证明见右 →）</span></p>
                      <hr className="border-gray-300" />
                      <p className="pl-2"><strong>第四步，相加：</strong></p>
                      <p className="pl-4"><Math tex="\lim\limits_{h\to 0}\dfrac{f(x_0+h)-f(x_0-h)}{h}=f'(x_0)+f'(x_0)=2f'(x_0)" /></p>
                      <hr className="border-gray-300" />
                      <p className="font-bold text-gray-900"><strong>口诀</strong>："<strong>凑中间，加减零，拆两段，套定义</strong>"。</p>
                    </div>
                    <div className="px-2 py-2 space-y-1 text-[0.85rem]">
                      <p>用<strong>换元</strong>：令 <Math tex="u=-h" /></p>
                      <p>（即 <Math tex="h=-u" />；当 <Math tex="h\to 0" /> 时 <Math tex="u\to 0" />）</p>
                      <p className="text-gray-900 text-[0.8rem]">👉 <Math tex="u=-h" /> 是连续关系，<Math tex="h" /> 越靠近 0，<Math tex="u" /> 也越靠近 0（只是方向相反），所以<strong>同步趋近</strong>。</p>
                      <hr className="border-gray-300" />
                      <p>把块 B 中的 <Math tex="h" /> 全部替换为 <Math tex="-u" />：</p>
                      <p className="pl-2"><Math tex="\lim\limits_{h\to 0}\dfrac{f(x_0)-f(x_0-h)}{h}" /></p>
                      <p className="pl-2"><Math tex="=\lim\limits_{u\to 0}\dfrac{f(x_0)-f(x_0+u)}{-u}" /></p>
                      <p className="pl-2"><Math tex="=\lim\limits_{u\to 0}\dfrac{-\bigl[f(x_0+u)-f(x_0)\bigr]}{-u}" /><span className="text-gray-900 text-[0.85em]">（分子提负号）</span></p>
                      <p className="pl-2"><Math tex="=\lim\limits_{u\to 0}\dfrac{f(x_0+u)-f(x_0)}{u}" /><span className="text-gray-900 text-[0.85em]">（分子分母负号抵消）</span></p>
                      <p className="pl-2"><Math tex="=f'(x_0)" /><span className="text-gray-900 text-[0.85em]">（符合 <Math tex="f'(x_0)" /> 定义的形状）</span></p>
                      <hr className="border-gray-300" />
                      <div className="border border-amber-400 rounded bg-amber-50 px-2 py-1.5 space-y-0.5">
                        <p className="font-bold text-amber-900">✏️ 练一练（两大套路混合）</p>
                        <p className="text-gray-900">求：<Math tex="\lim\limits_{h\to 0}\dfrac{f(x_0+h)-f(x_0-2h)}{h}=?" /></p>
                        <p className="text-gray-900 text-[0.8rem]"><strong>提示</strong>：凑 <Math tex="f(x_0)" /> 拆两块；后块分子分母<strong>同乘 <Math tex="-2" /></strong> 凑标准形式，再相加。<strong>换元时选 <Math tex="u=-h" /> 最干净</strong></p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── 万能速算公式 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🚀 万能秒杀公式：选填秒出，大题仍建议写过程</div>
                  <div className="grid grid-cols-[52fr_48fr]">
                    <div className="px-2 py-2 space-y-1 border-r border-gray-300">
                      <p className="font-bold">公式 1（单项倍数）</p>
                      <p className="pl-2"><Math tex="\lim\limits_{h\to 0}\dfrac{f(x_0+kh)-f(x_0)}{h}=k\cdot f'(x_0)" /></p>
                      <p className="text-gray-900">分子是"<Math tex="f(\text{某点})-f(x_0)" />"的形式。系数 = 增量里 <Math tex="h" /> 前的倍数。</p>
                      <hr className="border-gray-300" />
                      <p className="text-gray-900 text-[0.8rem]">例：<Math tex="\lim\limits_{h\to 0}\dfrac{f(x_0-3h)-f(x_0)}{h}=-3f'(x_0)" /></p>
                    </div>
                    <div className="px-2 py-2 space-y-1">
                      <p className="font-bold">公式 2（两端都动，通用）⭐</p>
                      <p className="pl-2"><Math tex="\lim\limits_{h\to 0}\dfrac{f(x_0+\alpha h)-f(x_0+\beta h)}{h}=(\alpha-\beta)\cdot f'(x_0)" /></p>
                      <p className="text-gray-900"><strong>通用结论</strong>：任何"分子两端都带 <Math tex="h" /> 倍数"的题，都能直接套。</p>
                      <hr className="border-gray-300" />
                      <p className="text-gray-900 text-[0.8rem]">例：<Math tex="\lim\dfrac{f(x_0+h)-f(x_0-h)}{h}=(1-(-1))f'(x_0)=2f'(x_0)" /></p>
                    </div>
                  </div>
                </div>

                {/* ── 即时练习 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="" questions={derivLimitFormsPractice} explanations={derivativeBasicExplanations} hideBlankLine optionCols={2} printOptionCols={2}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivLimitFormsPractice} printOptionCols={2} />
                </div>

              </div>
            </Collapsible>
          </section>

          {/* ═══════════════════════════════════════════════════════ */}
          {/* Section 1: 基本求导公式 */}
          {/* ═══════════════════════════════════════════════════════ */}
          <section id="db-formulas" className="mb-0 scroll-mt-4">
            <Collapsible title="一、基本求导公式" defaultOpen storageKey="deriv-basic:formulas">
              <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

                {/* ── 7 大必背公式 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🎯 8 个必背基本求导公式</div>
                  <div>
                    <table className="w-full border-collapse text-center [&_tr>*:first-child]:border-l-0 [&_tr>*:last-child]:border-r-0">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="border border-gray-300 px-2 py-0.5 w-[18%]">函数 <Math tex="f(x)" /></th>
                          <th className="border border-gray-300 px-2 py-0.5 w-[22%]">导数 <Math tex="f'(x)" /></th>
                          <th className="border border-gray-300 px-2 py-0.5">记忆口诀 / 备注</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="C" /><span className="text-gray-700">（常数）</span></td>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="0" /></td>
                          <td className="border border-gray-300 px-2 py-0.5 text-left"><strong>常数归零</strong>：导数是 <Math tex="0" />，不是常数自身（<Math tex="\pi" />、<Math tex="e" /> 也算常数）。</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="x^n" /></td>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="nx^{n-1}" /></td>
                          <td className="border border-gray-300 px-2 py-0.5 text-left">指数<strong>复制下来</strong>当系数，原指数<strong>减一</strong>。<Math tex="n" /> 可正可负可分数。</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="e^x" /></td>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="e^x" /></td>
                          <td className="border border-gray-300 px-2 py-0.5 text-left">最干净：导数就是<strong>自己</strong>。</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="a^x" /></td>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="a^x\ln a" /></td>
                          <td className="border border-gray-300 px-2 py-0.5 text-left">比 <Math tex="e^x" /> 多<strong>乘</strong>一个 <Math tex="\ln a" />。</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="\ln x" /></td>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="\dfrac{1}{x}" /></td>
                          <td className="border border-gray-300 px-2 py-0.5 text-left">最干净：导数是 <Math tex="\dfrac{1}{x}" />。</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="\log_a x" /></td>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="\dfrac{1}{x\ln a}" /></td>
                          <td className="border border-gray-300 px-2 py-0.5 text-left">比 <Math tex="\ln x" /> 多<strong>除</strong>一个 <Math tex="\ln a" />。</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="\sin x" /></td>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="\cos x" /></td>
                          <td className="border border-gray-300 px-2 py-0.5 text-left"><Math tex="\sin" /> 变 <Math tex="\cos" />，<strong>不变号</strong>。</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="\cos x" /></td>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="-\sin x" /></td>
                          <td className="border border-gray-300 px-2 py-0.5 text-left"><Math tex="\cos" /> 变 <Math tex="\sin" />，<strong>加负号</strong>。</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* ── 详解：e^x（图像重合）── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解 <Math tex="f(x)=e^x" />：导数就是自己（图像完全重合）</div>
                  <div className="grid grid-cols-[64fr_36fr]">
                    <div className="px-2 py-2 space-y-1 border-r border-gray-300">
                      <p><strong>公式</strong>：<Math tex="(e^x)'=e^x" />　<strong>💡 口诀</strong>：最干净——<strong>导数就是自己</strong>。</p>
                      <p><strong>🔑 关键</strong>：<Math tex="e^x" /> 是<strong>唯一满足 <Math tex="f'(x)=f(x)" /> 的函数</strong>（常数倍除外）。</p>
                      <hr className="border-gray-300" />
                      <p className="text-gray-700 text-[0.85em]"><strong>计算思路</strong>：先求导得 <Math tex="f'(x)=e^x" />，再把具体数字代入 <Math tex="f'(x)" /> 中的 <Math tex="x" />。</p>
                      <p><strong>例 1</strong>：<Math tex="f'(0)=e^x\big|_{x=0}=e^0=1" />（<Math tex="e^x" /> 在 <Math tex="x=0" /> 处切线斜率为 1）</p>
                      <hr className="border-gray-300" />
                      <p><strong>例 2</strong>：<Math tex="f'(\ln 2)=e^x\big|_{x=\ln 2}=e^{\ln 2}=2" /></p>
                      <hr className="border-gray-300" />
                      <p><strong>例 3</strong>：<Math tex="f'(1)=e^x\big|_{x=1}=e^1=e\approx 2.718" /></p>
                    </div>
                    <div className="px-2 py-2 flex flex-col items-center justify-center">
                      <div style={{ width: 260 }}>
                        <DebugMafs viewBox={{ x: [-2, 2], y: [-1.5, 7] }} height={95} preserveAspectRatio={false}>
                          <Coordinates.Cartesian xAxis={{ lines: false, labels: (n) => [-1, 1].includes(n) ? String(n) : '' }} yAxis={{ lines: false, labels: (n) => [1, 3, 5, 7].includes(n) ? String(n) : '' }} />
                          <Plot.OfX y={(x: number) => NativeMath.exp(x)} color="#3b82f6" weight={4} />
                          <Plot.OfX y={(x: number) => NativeMath.exp(x)} color="#ef4444" weight={1.5} opacity={0.7} />
                        </DebugMafs>
                      </div>
                      <p className="text-center text-gray-700 mt-1">🔵 <Math tex="f(x)=e^x" /> 和 🔴 <Math tex="f'(x)=e^x" /></p>
                      <p className="text-center font-bold text-gray-900 mt-0.5">两条曲线<span className="text-red-700">完全重合</span>！</p>
                    </div>
                  </div>
                </div>

                {/* ── 详解：ln x → 1/x ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解 <Math tex="f(x)=\ln x" />：一个缓慢上升，一个急速下降（定义域 <Math tex="x>0" />）</div>
                  <div className="grid grid-cols-[64fr_36fr]">
                    <div className="px-2 py-2 space-y-1 border-r border-gray-300">
                      <p><strong>公式</strong>：<Math tex="(\ln x)'=\dfrac{1}{x}" />　<strong>💡 口诀</strong>：<Math tex="\ln x" /> 的导数是 <Math tex="\dfrac{1}{x}" />——最干净。</p>
                      <p><strong>🔑 定义域</strong>：<Math tex="\ln x" /> 只在 <Math tex="x>0" /> 有定义，所以 <Math tex="f'(x)=\dfrac{1}{x}" /> 也只在 <Math tex="x>0" /> 讨论。</p>
                      <p className="text-red-700"><strong>⚠️ 注意</strong>：遇到 <Math tex="\ln|x|" /> 才能讨论 <Math tex="x<0" />，本节先不涉及。</p>
                      <hr className="border-gray-300" />
                      <p className="text-gray-700 text-[0.85em]"><strong>计算思路</strong>：先求导得 <Math tex="f'(x)=\dfrac{1}{x}" />，再把具体数字代入 <Math tex="x" />。</p>
                      <p><strong>例 1</strong>：<Math tex="f'(1)=\dfrac{1}{x}\big|_{x=1}=1" />（切线斜率为 1）</p>
                      <hr className="border-gray-300" />
                      <p><strong>例 2</strong>：<Math tex="f'(2)=\dfrac{1}{x}\big|_{x=2}=\dfrac{1}{2}" />（越往右斜率越小）</p>
                      <hr className="border-gray-300" />
                      <p><strong>例 3</strong>：<Math tex="f'(e)=\dfrac{1}{x}\big|_{x=e}=\dfrac{1}{e}\approx 0.368" /></p>
                    </div>
                    <div className="px-2 py-2 flex flex-col items-center justify-center">
                      <div style={{ width: 260 }}>
                        <DebugMafs viewBox={{ x: [0, 5], y: [-2, 4] }} height={130} preserveAspectRatio={false}>
                          <Coordinates.Cartesian xAxis={{ lines: false, labels: (n) => [1, 2, 3, 4].includes(n) ? String(n) : '' }} yAxis={{ lines: false, labels: (n) => [-1, 1, 2, 3].includes(n) ? String(n) : '' }} />
                          <Plot.OfX y={(x: number) => x > 0 ? NativeMath.log(x) : NaN} color="#3b82f6" weight={3} />
                          <Plot.OfX y={(x: number) => x > 0 ? 1 / x : NaN} color="#ef4444" weight={3} />
                        </DebugMafs>
                      </div>
                      <p className="text-center text-gray-700 mt-1">🔵 <Math tex="f(x)=\ln x" /> 和 🔴 <Math tex="f'(x)=\dfrac{1}{x}" /></p>
                      <p className="text-center font-bold text-gray-900 mt-0.5">都过 <Math tex="x=1" />：<Math tex="\ln 1=0" />、<Math tex="\tfrac{1}{1}=1" /></p>
                      <p className="text-center text-gray-700 text-[0.85em]">一个<span className="text-blue-700 font-bold">缓慢上升</span>，一个<span className="text-red-700 font-bold">急速下降</span></p>
                    </div>
                  </div>
                </div>

                {/* ── 详解：sin x → cos x ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解 <Math tex="f(x)=\sin x" />：导数是 <Math tex="\cos x" />（波形向左平移 <Math tex="\tfrac{\pi}{2}" />）</div>
                  <div className="grid grid-cols-[64fr_36fr]">
                    <div className="px-2 py-2 space-y-1 border-r border-gray-300">
                      <p><strong>公式</strong>：<Math tex="(\sin x)'=\cos x" />　<strong>💡 口诀</strong>：<Math tex="\sin" /> 变 <Math tex="\cos" />，<strong>不变号</strong>。</p>
                      <p><strong>🎯 几何</strong>：<Math tex="\sin x" /> 在某点的切线斜率 = <Math tex="\cos x" /> 在该点的值。</p>
                      <hr className="border-gray-300" />
                      <p className="text-gray-700 text-[0.85em]"><strong>计算思路</strong>：先求导得 <Math tex="f'(x)=\cos x" />，再把具体数字代入 <Math tex="x" />。</p>
                      <p><strong>例 1</strong>：<Math tex="f'(0)=\cos x\big|_{x=0}=\cos 0=1" />（上升最快）</p>
                      <hr className="border-gray-300" />
                      <p><strong>例 2</strong>：<Math tex="f'\!\left(\tfrac{\pi}{2}\right)=\cos x\big|_{x=\frac{\pi}{2}}=\cos\tfrac{\pi}{2}=0" />（最高点，切线水平）</p>
                      <hr className="border-gray-300" />
                      <p><strong>例 3</strong>：<Math tex="f'(\pi)=\cos x\big|_{x=\pi}=\cos\pi=-1" />（下降最快）</p>
                    </div>
                    <div className="px-2 py-2 flex flex-col items-center justify-center">
                      <div style={{ width: 260 }}>
                        <DebugMafs viewBox={{ x: [-0.5, 7], y: [-1.5, 1.5] }} height={88} preserveAspectRatio={false}>
                          <Coordinates.Cartesian xAxis={{ lines: false, labels: () => '' }} yAxis={{ lines: false, labels: (n) => [-1, 1].includes(n) ? String(n) : '' }} />
                          <Plot.OfX y={(x: number) => NativeMath.sin(x)} color="#3b82f6" weight={3} />
                          <Plot.OfX y={(x: number) => NativeMath.cos(x)} color="#ef4444" weight={3} />
                        </DebugMafs>
                      </div>
                      <p className="text-center text-gray-700 mt-1">🔵 <Math tex="f(x)=\sin x" /> 和 🔴 <Math tex="f'(x)=\cos x" /></p>
                      <p className="text-center font-bold text-gray-900 mt-0.5">红线 = 蓝线<span className="text-red-700">向左平移 <Math tex="\tfrac{\pi}{2}" /></span></p>
                    </div>
                  </div>
                </div>

                {/* ── 详解：cos x → -sin x ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解 <Math tex="f(x)=\cos x" />：导数是 <Math tex="-\sin x" />（上下翻折 + 平移）</div>
                  <div className="grid grid-cols-[64fr_36fr]">
                    <div className="px-2 py-2 space-y-1 border-r border-gray-300">
                      <p><strong>公式</strong>：<Math tex="(\cos x)'=-\sin x" />　<strong>💡 口诀</strong>：<Math tex="\cos" /> 变 <Math tex="\sin" />，<strong>加负号</strong>。</p>
                      <p className="text-red-700"><strong>⚠️ 易错</strong>：<Math tex="\cos" /> 求导有负号，<Math tex="\sin" /> 求导<strong>没有</strong>——别把两条口诀搞反。</p>
                      <hr className="border-gray-300" />
                      <p className="text-gray-700 text-[0.85em]"><strong>计算思路</strong>：先求导得 <Math tex="f'(x)=-\sin x" />，再把具体数字代入 <Math tex="x" />。</p>
                      <p><strong>例 1</strong>：<Math tex="f'(0)=-\sin x\big|_{x=0}=-\sin 0=0" />（最高点，切线水平）</p>
                      <hr className="border-gray-300" />
                      <p><strong>例 2</strong>：<Math tex="f'\!\left(\tfrac{\pi}{2}\right)=-\sin x\big|_{x=\frac{\pi}{2}}=-\sin\tfrac{\pi}{2}=-1" />（下降最快）</p>
                      <hr className="border-gray-300" />
                      <p><strong>例 3</strong>：<Math tex="f'(\pi)=-\sin x\big|_{x=\pi}=-\sin\pi=0" />（最低点，切线水平）</p>
                    </div>
                    <div className="px-2 py-2 flex flex-col items-center justify-center">
                      <div style={{ width: 260 }}>
                        <DebugMafs viewBox={{ x: [-0.5, 7], y: [-1.5, 1.5] }} height={88} preserveAspectRatio={false}>
                          <Coordinates.Cartesian xAxis={{ lines: false, labels: () => '' }} yAxis={{ lines: false, labels: (n) => [-1, 1].includes(n) ? String(n) : '' }} />
                          <Plot.OfX y={(x: number) => NativeMath.cos(x)} color="#ef4444" weight={3} />
                          <Plot.OfX y={(x: number) => -NativeMath.sin(x)} color="#3b82f6" weight={3} />
                        </DebugMafs>
                      </div>
                      <p className="text-center text-gray-700 mt-1">🔴 <Math tex="f(x)=\cos x" /> 和 🔵 <Math tex="f'(x)=-\sin x" /></p>
                      <p className="text-center font-bold text-gray-900 mt-0.5">蓝线 = <Math tex="\sin x" /> <span className="text-blue-700">翻折后</span>的样子</p>
                    </div>
                  </div>
                </div>

                {/* ── 幂函数深挖 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">幂函数 <Math tex="x^n" /> 深挖：<Math tex="n" /> 可以是 <strong>0、负数、分数</strong>（<span className="text-red-700">记一个公式抵两个</span>）</div>
                  <div className="p-2 space-y-1">
                    <p>公式 <Math tex="(x^n)'=nx^{n-1}" /> 里，<Math tex="n" /> <strong>不限定是正整数</strong>，<strong>0、负数、分数</strong>都能用。<span className="text-red-700"><strong>套路</strong>：先改写为 <Math tex="x^n" />，再套"指数下来减一"。</span></p>
                    <p className="text-gray-700"><strong>💡 关键洞察</strong>：常数 <Math tex="C=C\cdot x^0" />，所以"<strong>常数归零</strong>"就是幂函数公式在 <Math tex="n=0" /> 的特例——学一个就顺带掌握了两个。</p>
                    <table className="w-full border-collapse text-center">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="border border-gray-300 px-2 py-0.5 w-[22%]">原式 <Math tex="f(x)" /></th>
                          <th className="border border-gray-300 px-2 py-0.5 w-[22%]">改写为 <Math tex="x^n" /></th>
                          <th className="border border-gray-300 px-2 py-0.5">导数 <Math tex="f'(x)" /></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-amber-50">
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="5" />（常数）</td>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="5\cdot x^{0}" /></td>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="5\cdot 0\cdot x^{0-1}=0\cdot x^{-1}=0" />　<span className="text-red-700 text-[0.85em]">← 这就是"常数归零"</span></td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="\sqrt{x}" /></td>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="x^{\frac{1}{2}}" /></td>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="\dfrac{1}{2}x^{\frac{1}{2}-1}=\dfrac{1}{2}x^{-\frac{1}{2}}=\dfrac{1}{2}\cdot\dfrac{1}{x^{\frac{1}{2}}}=\dfrac{1}{2}\cdot\dfrac{1}{\sqrt{x}}=\dfrac{1}{2\sqrt{x}}" /></td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="\dfrac{2}{x}" /></td>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="2\cdot x^{-1}" /></td>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="2\cdot(-1)x^{-1-1}=-2x^{-2}=-\dfrac{2}{x^{2}}" /></td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="\dfrac{1}{x^2}" /></td>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="x^{-2}" /></td>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="-2\cdot x^{-2-1}=-2x^{-3}=-2\cdot\dfrac{1}{x^{3}}=-\dfrac{2}{x^3}" /></td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="\sqrt[3]{x}" /></td>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="x^{\frac{1}{3}}" /></td>
                          <td className="border border-gray-300 px-2 py-0.5"><Math tex="\dfrac{1}{3}x^{\frac{1}{3}-1}=\dfrac{1}{3}x^{-\frac{2}{3}}=\dfrac{1}{3}\cdot\dfrac{1}{x^{\frac{2}{3}}}=\dfrac{1}{3}\cdot\dfrac{1}{\sqrt[3]{x^2}}=\dfrac{1}{3\sqrt[3]{x^2}}" /></td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="text-gray-700"><strong>验证：</strong>四步法求过 <Math tex="(x^2)'=2x" />；套公式 <Math tex="2\cdot x^{2-1}=2x" />，一致。</p>
                  </div>
                </div>

                {/* ── 即时练习 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="" questions={derivBasicPractice1} explanations={derivativeBasicExplanations} hideBlankLine optionCols={2} printOptionCols={2}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivBasicPractice1} printOptionCols={2} columns={2} />
                </div>

              </div>
            </Collapsible>
          </section>

          {/* ═══════════════════════════════════════════════════════ */}
          {/* Section 2: 求导法则 */}
          {/* ═══════════════════════════════════════════════════════ */}
          <section id="db-rules" className="mb-0 scroll-mt-4">
            <Collapsible title="二、求导法则" defaultOpen storageKey="deriv-basic:rules">
              <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

                {/* ── 5 条求导法则总表 ── */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🎯 5 条求导法则总表（先记住，后面详解）</div>
                  <table className="w-full border-collapse text-center text-[0.9rem] [&_tr>*:first-child]:border-l-0 [&_tr>*:last-child]:border-r-0">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-2 py-0.5 w-[14%]">法则名</th>
                        <th className="border border-gray-300 px-2 py-0.5 w-[36%]">公式</th>
                        <th className="border border-gray-300 px-2 py-0.5">💡 口诀</th>
                        <th className="border border-gray-300 px-2 py-0.5 w-[10%]">难度</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5"><strong>和差</strong></td>
                        <td className="border border-gray-300 px-2 py-0.5"><Math tex="(f\pm g)'=f'\pm g'" /></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">每项分别求导，符号照搬。</td>
                        <td className="border border-gray-300 px-2 py-0.5">★</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5"><strong>常数倍</strong></td>
                        <td className="border border-gray-300 px-2 py-0.5"><Math tex="(C\cdot f)'=C\cdot f'" /></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">系数提到导号外面。</td>
                        <td className="border border-gray-300 px-2 py-0.5">★</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5"><strong>乘积</strong></td>
                        <td className="border border-gray-300 px-2 py-0.5"><Math tex="(fg)'=f'g+fg'" /></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left text-red-700"><strong>前导后不导 ＋ 前不导后导</strong>（❌ 不是 <Math tex="f'g'" />）</td>
                        <td className="border border-gray-300 px-2 py-0.5">★★★</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5"><strong>商</strong></td>
                        <td className="border border-gray-300 px-2 py-0.5"><Math tex="\left(\dfrac{f}{g}\right)'=\dfrac{f'g-fg'}{g^2}" /></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left text-red-700"><strong>分子：前导后不导 － 前不导后导</strong>（中间是减号）<br /><strong>分母平方</strong></td>
                        <td className="border border-gray-300 px-2 py-0.5">★★★★</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5"><strong>复合</strong><br /><span className="text-gray-500 text-[0.8em]">（链式）</span></td>
                        <td className="border border-gray-300 px-2 py-0.5"><Math tex="\bigl[f(g(x))\bigr]'=f'(g(x))\cdot g'(x)" /></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><strong>外层导 × 内层导</strong>（剥洋葱）——高考最高频。</td>
                        <td className="border border-gray-300 px-2 py-0.5">★★★★</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="px-2 py-1 text-gray-700 border-t border-gray-300 text-[0.85em]"><strong>📖 学习路径</strong>：2.1 和差 + 常数倍（最简单）→ 2.2 乘积 → 2.3 商 → 2.4 复合。每节配详解 + 易错 + 即时练习。</p>
                </div>

                {/* ── 小节标题：2.1 和差 + 常数倍 ── */}
                <div className="px-2 py-1 font-bold text-gray-900 bg-blue-50 border-l-4 border-blue-500 mb-0.5 mt-1">2.1　和差法则 + 常数倍法则（最简单，多项式求导）</div>

                {/* ── 2 条基本法则速查表 ── */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🎯 两大基础法则（逐项求导、系数提外）</div>
                  <table className="w-full border-collapse text-center [&_tr>*:first-child]:border-l-0 [&_tr>*:last-child]:border-r-0">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-2 py-0.5 w-[20%]">法则名</th>
                        <th className="border border-gray-300 px-2 py-0.5 w-[32%]">公式</th>
                        <th className="border border-gray-300 px-2 py-0.5">💡 口诀 / 说明</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5"><strong>和差法则</strong></td>
                        <td className="border border-gray-300 px-2 py-0.5"><Math tex="\bigl[f(x)\pm g(x)\bigr]'=f'(x)\pm g'(x)" /></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><strong>每项分别求导，符号照搬</strong>（原来加还是加，减还是减）。</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5"><strong>常数倍法则</strong></td>
                        <td className="border border-gray-300 px-2 py-0.5"><Math tex="\bigl[C\cdot f(x)\bigr]'=C\cdot f'(x)" /></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><strong>系数可以"提到导号外面"</strong>——常数倍不参与求导。</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* ── 详解：多项式求导三步走 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：多项式求导"三步走"（最常见题型）</div>
                  <div className="p-2 space-y-1">
                    <p><strong>🎯 流程</strong>：① 拆分每一项 → ② 每项套基本公式求导 → ③ 符号照搬拼起来。</p>
                    <hr className="border-gray-300" />
                    <div className="grid grid-cols-2 gap-x-3">
                      <div className="space-y-1 pr-3 border-r border-gray-300">
                        <p className="font-bold"><strong>例 1</strong>：求 <Math tex="f(x)=3x^4-2x^2+5x-7" /> 的导数。</p>
                        <p className="pl-2"><strong>① 拆分</strong>：<Math tex="\underbrace{3x^4}_{(1)}\ \underbrace{-2x^2}_{(2)}\ \underbrace{+5x}_{(3)}\ \underbrace{-7}_{(4)}" /></p>
                        <hr className="border-gray-300" />
                        <div className="pl-2 grid grid-cols-[auto_1fr_1fr] gap-x-3 gap-y-0.5 items-center">
                          <p className="row-span-2"><strong>② 每项求导</strong>：</p>
                          <p><Math tex="(3x^4)'=12x^3" /></p>
                          <p><Math tex="(-2x^2)'=-4x" /></p>
                          <p><Math tex="(5x)'=5" /></p>
                          <p><Math tex="(-7)'=0" /></p>
                        </div>
                        <hr className="border-gray-300" />
                        <p className="pl-2"><strong>③ 拼起来</strong>：<Math tex="f'(x)=12x^3-4x+5" /></p>
                      </div>
                      <div className="space-y-1">
                        <p className="font-bold"><strong>例 2</strong>：求 <Math tex="f(x)=x^2+\sin x+e^x" /> 的导数。</p>
                        <p className="pl-2 text-gray-700">三项来自公式表的三个不同类别，一项一项对着公式求。</p>
                        <hr className="border-gray-300" />
                        <div className="pl-2 grid grid-cols-[auto_1fr] gap-x-3 gap-y-0.5 items-center">
                          <p className="row-span-3"><strong>逐项求导</strong>：</p>
                          <p><Math tex="(x^2)'=2x" /><span className="text-gray-700 ml-2">（幂函数）</span></p>
                          <p><Math tex="(\sin x)'=\cos x" /><span className="text-gray-700 ml-2">（三角）</span></p>
                          <p><Math tex="(e^x)'=e^x" /><span className="text-gray-700 ml-2">（指数，不是 <Math tex="x\cdot e^{x-1}" />）</span></p>
                        </div>
                        <hr className="border-gray-300" />
                        <p className="pl-2"><strong>拼起来</strong>：<Math tex="f'(x)=2x+\cos x+e^x" /></p>
                      </div>
                    </div>
                    <hr className="border-gray-400" />
                    <div className="text-base print:hidden">
                      <PracticeCard title="💪 随手算两道" questions={derivRulesWarmup} explanations={derivativeBasicExplanations} hideBlankLine optionCols={2} printOptionCols={2}
                        renderItem={(q, idx) => (
                          <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                            <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                            {q.questionLatex && <Math tex={q.questionLatex} />}
                          </p>
                        )}
                      />
                    </div>
                    <div className="text-base hidden print:block">
                      <PrintQuestions questions={derivRulesWarmup} printOptionCols={2} columns={2} />
                    </div>
                  </div>
                </div>

                <PageBreak />

                {/* ── 详解：例 3（先求导再代值）── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：<strong>例 3</strong>　设 <Math tex="f(x)=2x^3+3\ln x" />，求 <Math tex="f'(1)" /><span className="text-gray-700 font-normal ml-2">——"先求导，再代值"，看见撇两步都不能省</span></div>
                  <div className="p-2">
                    <div className="grid grid-cols-2 gap-x-3">
                      <div className="space-y-1 pr-3 border-r border-gray-300">
                        <p className="pl-2"><strong>第一步、先求导</strong>：</p>
                        <p className="pl-4"><Math tex="(2x^3)'=6x^2" /><span className="text-gray-700 ml-2">（常数 2 提外，幂函数）</span></p>
                        <p className="pl-4"><Math tex="(3\ln x)'=\dfrac{3}{x}" /><span className="text-gray-700 ml-2">（常数 3 提外，<Math tex="(\ln x)'=\tfrac{1}{x}" />）</span></p>
                        <p className="pl-4">所以 <Math tex="f'(x)=6x^2+\dfrac{3}{x}" /></p>
                      </div>
                      <div className="space-y-1">
                        <p className="pl-2"><strong>第二步、代入 <Math tex="x=1" /></strong>：</p>
                        <p className="pl-4"><Math tex="f'(1)=6\cdot 1^2+\dfrac{3}{1}=6+3=9" /></p>
                        <hr className="border-gray-300" />
                        <p className="pl-2 text-red-700"><strong>⚠️ 对比</strong>：<Math tex="f(1)=2\cdot 1^3+3\ln 1=2+0=2" /></p>
                        <p className="pl-4 text-gray-700"><Math tex="f(1)=2" /> 是<strong>函数值</strong>，<Math tex="f'(1)=9" /> 是<strong>导数值</strong>——看见撇先求导，再代值。</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── 总结：一句话看穿这节 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px bg-amber-50">
                  <div className="px-2 py-1.5">
                    <p><strong>💡 一句话看穿这节</strong>：<strong>和差法则 + 常数倍法则 = 把每一项拆出来，分别求导就行</strong>——系数跟着走，符号照搬，跟加减法一样。</p>
                  </div>
                </div>

                {/* ── 即时练习 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="" questions={derivRulesPractice1} explanations={derivativeBasicExplanations} hideBlankLine optionCols={2} printOptionCols={2}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivRulesPractice1} printOptionCols={2} columns={2} />
                </div>

                {/* ═══════════════════════════════════════════════════════ */}
                {/* 2.2 乘积法则                                               */}
                {/* ═══════════════════════════════════════════════════════ */}
                <div className="px-2 py-1 font-bold text-gray-900 bg-blue-50 border-l-4 border-blue-500 mb-0.5 mt-2">2.2　乘积法则（前导后不导 + 前不导后导）</div>

                {/* ── 乘积法则速查表 ── */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🎯 乘积法则</div>
                  <table className="w-full border-collapse text-center [&_tr>*:first-child]:border-l-0 [&_tr>*:last-child]:border-r-0">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-2 py-0.5 w-[18%]">法则名</th>
                        <th className="border border-gray-300 px-2 py-0.5 w-[36%]">公式</th>
                        <th className="border border-gray-300 px-2 py-0.5">💡 口诀</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5"><strong>乘积法则</strong></td>
                        <td className="border border-gray-300 px-2 py-0.5"><Math tex="(fg)'=f'g+fg'" /></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><strong>前导后不导 ＋ 前不导后导</strong>——两项<strong>相加</strong>，不是相乘。</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* ── 详解：乘积法则用法（例 1 + 例 2）── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：乘积法则三步走（套公式的标准流程）</div>
                  <div className="p-2 space-y-1 text-[0.9rem] leading-snug [&_p]:!my-0">
                    <p><strong>🎯 流程</strong>：① 认清 <Math tex="f(x)" /> 和 <Math tex="g(x)" /> 是哪两部分 → ② 分别求 <Math tex="f'(x)" /> 和 <Math tex="g'(x)" /> → ③ 套公式 <Math tex="f'(x)g(x)+f(x)g'(x)" />（两项相加）。</p>
                    <hr className="border-gray-300" />
                    <div className="grid grid-cols-2 gap-x-3">
                      <div className="space-y-1 pr-3 border-r border-gray-300">
                        <p className="font-bold"><strong>例 1</strong>：求 <Math tex="(x^2\sin x)'" /></p>
                        <hr className="border-gray-300" />
                        <p className="pl-2"><strong>① 认清</strong>：<Math tex="f(x)=x^2" />，<Math tex="g(x)=\sin x" /></p>
                        <p className="pl-2"><strong>② 分别求导</strong>：<Math tex="f'(x)=2x" />，<Math tex="g'(x)=\cos x" /></p>
                        <p className="pl-2"><strong>③ 套公式</strong> <Math tex="f'(x)g(x)+f(x)g'(x)" />：</p>
                        <p className="pl-4"><Math tex="=\underbrace{2x}_{\text{前导}}\cdot\underbrace{\sin x}_{\text{后不导}}+\underbrace{x^2}_{\text{前不导}}\cdot\underbrace{\cos x}_{\text{后导}}" /></p>
                        <p className="pl-4">所以 <Math tex="(x^2\sin x)'=2x\sin x+x^2\cos x" /></p>
                      </div>
                      <div className="space-y-1">
                        <p className="font-bold"><strong>例 2</strong>：求 <Math tex="(xe^x)'" /><span className="text-gray-700 ml-2">（高考高频）</span></p>
                        <hr className="border-gray-300" />
                        <p className="pl-2"><strong>① 认清</strong>：<Math tex="f(x)=x" />，<Math tex="g(x)=e^x" /></p>
                        <p className="pl-2"><strong>② 分别求导</strong>：<Math tex="f'(x)=1" />，<Math tex="g'(x)=e^x" /></p>
                        <p className="pl-2"><strong>③ 套公式</strong> <Math tex="f'(x)g(x)+f(x)g'(x)" />：</p>
                        <p className="pl-4"><Math tex="=\underbrace{1}_{\text{前导}}\cdot\underbrace{e^x}_{\text{后不导}}+\underbrace{x}_{\text{前不导}}\cdot\underbrace{e^x}_{\text{后导}}=(1+x)e^x" /></p>
                        <p className="pl-4 text-gray-700">提公因式 <Math tex="e^x" /> 得更简形式。</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── 💪 随手算两道 ── */}
                <hr className="border-gray-400" />
                <div className="text-base print:hidden">
                  <PracticeCard title="💪 随手算两道" questions={derivRulesWarmup2} explanations={derivativeBasicExplanations} hideBlankLine optionCols={2} printOptionCols={2}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivRulesWarmup2} printOptionCols={2} columns={2} />
                </div>

                {/* ── 详解：例 3 两种路径对比 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：<strong>例 3</strong>　<Math tex="(2x+1)(x^2-3)" /> 两种路径对比<span className="text-gray-700 font-normal ml-2">——验证乘积法则的正确性</span></div>
                  <div className="px-2 text-[0.9rem] leading-snug [&_p]:!my-0">
                    <p className="mb-1">同一道题走两条路，结果应该完全一样。这是<strong>自我检查</strong>乘积法则有没有套错的好方法。</p>
                    <hr className="border-gray-300" />
                    <div className="grid grid-cols-2 gap-x-3 mt-1">
                      <div className="space-y-1 pr-3 border-r border-gray-300">
                        <p className="font-bold">路径一：先展开，再用和差+常数倍法则</p>
                        <hr className="border-gray-300" />
                        <p className="pl-2"><strong>展开</strong>：<Math tex="(2x+1)(x^2-3)=2x^3-6x+x^2-3" /></p>
                        <hr className="border-gray-300" />
                        <div className="pl-2 grid grid-cols-[auto_1fr_1fr] gap-x-3 gap-y-0.5 items-center">
                          <p className="row-span-2"><strong>逐项求导</strong>：</p>
                          <p><Math tex="(2x^3)'=6x^2" /></p>
                          <p><Math tex="(x^2)'=2x" /></p>
                          <p><Math tex="(-6x)'=-6" /></p>
                          <p><Math tex="(-3)'=0" /></p>
                        </div>
                        <hr className="border-gray-300" />
                        <p className="pl-2"><strong>拼起来</strong>：<Math tex="f'(x)=6x^2+2x-6" /></p>
                      </div>
                      <div className="space-y-1">
                        <p className="font-bold">路径二：不展开，直接用乘积法则</p>
                        <hr className="border-gray-300" />
                        <p className="pl-2"><strong>认清</strong>：<Math tex="f(x)=2x+1" />，<Math tex="g(x)=x^2-3" /></p>
                        <p className="pl-2"><strong>分别求导</strong>：<Math tex="f'(x)=2" />，<Math tex="g'(x)=2x" /></p>
                        <p className="pl-2"><strong>套公式</strong> <Math tex="f'(x)g(x)+f(x)g'(x)" />：</p>
                        <p className="pl-4"><Math tex="=2\cdot(x^2-3)+(2x+1)\cdot 2x" /></p>
                        <p className="pl-4"><Math tex="=2x^2-6+4x^2+2x=6x^2+2x-6" /></p>
                      </div>
                    </div>
                    <hr className="border-gray-300" />
                    <p className="text-center text-green-700 font-bold mt-1">两条路径结果相同 <Math tex="6x^2+2x-6" />，乘积法则验证通过 ✓</p>
                    <p className="text-gray-700 text-center">实战建议：因式已经展开好 → 路径一；遇到不好展开的（如 <Math tex="x\cdot e^x" />、<Math tex="\sin x\cdot\cos x" />）→ 必须用路径二。</p>
                  </div>
                </div>

                {/* ── 详解：例 4 求导+代值 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：<strong>例 4</strong>　设 <Math tex="f(x)=x^2e^x" />，求 <Math tex="f'(1)" /><span className="text-gray-700 font-normal ml-2">——乘积法则 + 代值（高考大题经典结构）</span></div>
                  <div className="px-2 pb-2 text-[0.9rem] leading-snug [&_p]:!my-0">
                    <div className="grid grid-cols-2 gap-x-3">
                      <div className="space-y-1 pr-3 border-r border-gray-300">
                        <p className="font-bold">第一步、先求导（乘积法则）</p>
                        <hr className="border-gray-300" />
                        <p className="pl-2"><strong>认清</strong>：<Math tex="f(x)=x^2" />，<Math tex="g(x)=e^x" /></p>
                        <p className="pl-2"><strong>分别求导</strong>：<Math tex="f'(x)=2x" />，<Math tex="g'(x)=e^x" /></p>
                        <p className="pl-2"><strong>套公式</strong> <Math tex="f'(x)g(x)+f(x)g'(x)" />：</p>
                        <p className="pl-4"><Math tex="=2x\cdot e^x+x^2\cdot e^x" /></p>
                        <p className="pl-4">提公因式 <Math tex="e^x" />：<Math tex="f'(x)=(2x+x^2)e^x" /></p>
                      </div>
                      <div className="space-y-1">
                        <p className="font-bold">第二步、代入 <Math tex="x=1" /></p>
                        <hr className="border-gray-300" />
                        <p className="pl-2"><Math tex="f'(1)=(2\cdot 1+1^2)\cdot e^1" /></p>
                        <p className="pl-2"><Math tex="=(2+1)\cdot e=3e" /></p>
                        <hr className="border-gray-300" />
                        <p className="pl-2 text-red-700"><strong>⚠️ 对比</strong>：<Math tex="f(1)=1^2\cdot e^1=e" /></p>
                        <p className="pl-4 text-gray-700"><Math tex="f(1)=e" /> 是<strong>函数值</strong>，<Math tex="f'(1)=3e" /> 是<strong>导数值</strong>——看见撇先求导，再代值。</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── 一句话看穿 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px bg-amber-50">
                  <div className="px-2 py-1.5">
                    <p><strong>💡 一句话看穿这节</strong>：<strong>看见相乘，就分别求导、交叉相加</strong>——"前导后不导 + 前不导后导"，绝不能各乘各。</p>
                  </div>
                </div>

                {/* ── 即时练习 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="" questions={derivRulesPractice2} explanations={derivativeBasicExplanations} hideBlankLine optionCols={2} printOptionCols={2}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivRulesPractice2} printOptionCols={2} columns={2} />
                </div>

                {/* ═══════════════════════════════════════════════════════ */}
                {/* 2.3 商法则                                                 */}
                {/* ═══════════════════════════════════════════════════════ */}
                <div className="px-2 py-1 font-bold text-gray-900 bg-blue-50 border-l-4 border-blue-500 mb-0.5 mt-2">2.3　商法则（上导下不导 减 上不导下导，除以分母平方）</div>

                {/* ── 商法则速查表 ── */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🎯 商法则</div>
                  <table className="w-full border-collapse text-center [&_tr>*:first-child]:border-l-0 [&_tr>*:last-child]:border-r-0">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-2 py-0.5 w-[18%]">法则名</th>
                        <th className="border border-gray-300 px-2 py-0.5 w-[36%]">公式</th>
                        <th className="border border-gray-300 px-2 py-0.5">💡 口诀 & 易错警示</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5"><strong>商法则</strong></td>
                        <td className="border border-gray-300 px-2 py-0.5"><Math tex="\left(\dfrac{f}{g}\right)'=\dfrac{f'g-fg'}{g^2}" /></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><strong>上导下不导 － 上不导下导，分母平方</strong><br />⚠️ 中间是<strong className="text-red-700">减号</strong>、<strong className="text-red-700">顺序不能反</strong>、整体除以 <strong className="text-red-700"><Math tex="g^2" /></strong>。</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* ── 详解：商法则用法（例 1 + 例 2）── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：商法则三步走（套公式的标准流程）</div>
                  <div className="p-2 space-y-1 text-[0.9rem] leading-snug [&_p]:!my-0">
                    <p><strong>🎯 流程</strong>：① 认清 <Math tex="f(x)" />（分子，"上"）和 <Math tex="g(x)" />（分母，"下"） → ② 分别求 <Math tex="f'(x)" /> 和 <Math tex="g'(x)" /> → ③ 套公式。</p>
                    <hr className="border-gray-300" />
                    <div className="grid grid-cols-2 gap-x-3">
                      <div className="space-y-1 pr-3 border-r border-gray-300">
                        <p className="font-bold"><strong>例 1</strong>：求 <Math tex="\left(\dfrac{\sin x}{x}\right)'" /></p>
                        <hr className="border-gray-300" />
                        <p className="pl-2"><strong>① 认清</strong>：<Math tex="f(x)=\sin x" />（上），<Math tex="g(x)=x" />（下）</p>
                        <p className="pl-2"><strong>② 分别求导</strong>：<Math tex="f'(x)=\cos x" />，<Math tex="g'(x)=1" /></p>
                        <p className="pl-2"><strong>③ 套公式</strong> <Math tex="\dfrac{f'(x)g(x)-f(x)g'(x)}{g(x)^2}" />：</p>
                        <hr className="border-gray-300" />
                        <p className="pl-4"><Math tex="=\dfrac{\underbrace{\cos x}_{\text{上导}}\cdot\underbrace{x}_{\text{下不导}}-\underbrace{\sin x}_{\text{上不导}}\cdot\underbrace{1}_{\text{下导}}}{x^2}" /></p>
                        <hr className="border-gray-300" />
                        <p className="pl-4">所以 <Math tex="\left(\dfrac{\sin x}{x}\right)'=\dfrac{x\cos x-\sin x}{x^2}" /></p>
                      </div>
                      <div className="space-y-1">
                        <p className="font-bold"><strong>例 2</strong>：求 <Math tex="\left(\dfrac{x^2+1}{x-1}\right)'" /></p>
                        <hr className="border-gray-300" />
                        <p className="pl-2"><strong>① 认清</strong>：<Math tex="f(x)=x^2+1" />（上），<Math tex="g(x)=x-1" />（下）</p>
                        <p className="pl-2"><strong>② 分别求导</strong>：<Math tex="f'(x)=2x" />，<Math tex="g'(x)=1" /></p>
                        <p className="pl-2"><strong>③ 套公式</strong> <Math tex="\dfrac{f'(x)g(x)-f(x)g'(x)}{g(x)^2}" />：</p>
                        <hr className="border-gray-300" />
                        <p className="pl-4"><Math tex="=\dfrac{\underbrace{2x}_{\text{上导}}\cdot\underbrace{(x-1)}_{\text{下不导}}-\underbrace{(x^2+1)}_{\text{上不导}}\cdot\underbrace{1}_{\text{下导}}}{(x-1)^2}" /></p>
                        <hr className="border-gray-300" />
                        <p className="pl-4"><Math tex="=\dfrac{2x^2-2x-x^2-1}{(x-1)^2}=\dfrac{x^2-2x-1}{(x-1)^2}" /></p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── 💪 随手算两道 ── */}
                <hr className="border-gray-400" />
                <div className="text-base print:hidden">
                  <PracticeCard title="💪 随手算两道" questions={derivRulesWarmup3} explanations={derivativeBasicExplanations} hideBlankLine optionCols={2} printOptionCols={2}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivRulesWarmup3} printOptionCols={2} columns={2} />
                </div>

                {/* ── 详解：例 3 求导+代值 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：<strong>例 3</strong>　设 <Math tex="f(x)=\dfrac{e^x}{x}" />，求 <Math tex="f'(1)" /><span className="text-gray-700 font-normal ml-2">——商法则 + 代值</span></div>
                  <div className="px-2 pb-2 text-[0.9rem] leading-snug [&_p]:!my-0">
                    <div className="grid grid-cols-2 gap-x-3">
                      <div className="space-y-1 pr-3 border-r border-gray-300">
                        <p className="font-bold">第一步、先求导（商法则）</p>
                        <hr className="border-gray-300" />
                        <p className="pl-2"><strong>认清</strong>：<Math tex="f(x)=e^x" />（上），<Math tex="g(x)=x" />（下）</p>
                        <p className="pl-2"><strong>分别求导</strong>：<Math tex="f'(x)=e^x" />，<Math tex="g'(x)=1" /></p>
                        <p className="pl-2"><strong>套公式</strong> <Math tex="\dfrac{f'(x)g(x)-f(x)g'(x)}{g(x)^2}" />：</p>
                        <hr className="border-gray-300" />
                        <p className="pl-4"><Math tex="=\dfrac{e^x\cdot x-e^x\cdot 1}{x^2}" /></p>
                        <hr className="border-gray-300" />
                        <p className="pl-4">提公因式 <Math tex="e^x" />：<Math tex="f'(x)=\dfrac{e^x(x-1)}{x^2}" /></p>
                      </div>
                      <div className="space-y-1">
                        <p className="font-bold">第二步、代入 <Math tex="x=1" /></p>
                        <hr className="border-gray-300" />
                        <p className="pl-2"><Math tex="f'(1)=\dfrac{e^1\cdot(1-1)}{1^2}" /></p>
                        <p className="pl-2"><Math tex="=\dfrac{e\cdot 0}{1}=0" /></p>
                        <hr className="border-gray-300" />
                        <p className="pl-2 text-red-700"><strong>⚠️ 对比</strong>：<Math tex="f(1)=\dfrac{e^1}{1}=e" /></p>
                        <p className="pl-4 text-gray-700"><Math tex="f(1)=e" /> 是<strong>函数值</strong>，<Math tex="f'(1)=0" /> 是<strong>导数值</strong>——看见撇先求导，再代值。</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── 一句话看穿 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px bg-amber-50">
                  <div className="px-2 py-1.5">
                    <p><strong>💡 一句话看穿这节</strong>：<strong>看见分式，就"上导下不导 减 上不导下导，再除以分母的平方"</strong>——顺序不能反、别忘了 <Math tex="g^2" />。</p>
                  </div>
                </div>

                {/* ── 即时练习 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="" questions={derivRulesPractice3} explanations={derivativeBasicExplanations} hideBlankLine optionCols={2} printOptionCols={2}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivRulesPractice3} printOptionCols={2} columns={2} />
                </div>

                {/* ── 小技巧：分母是常数时不用商法则 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px bg-sky-50">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-sky-100">🛠 小技巧：分母是<strong>常数</strong>，别套商法则</div>
                  <div className="px-2 py-1 text-[0.9rem] leading-snug [&_p]:!my-0 space-y-0.5">
                    <p>分母如果是<strong>纯常数</strong>（<Math tex="2,\ e,\ \pi,\ -3" /> …），直接把 <Math tex="\dfrac{1}{\text{分母}}" /> 当系数提外，用<strong>常数倍法则</strong>更快——因为 <Math tex="g'=0" />，商法则会自动退化。</p>
                    <hr className="border-gray-300" />
                    <p className="pl-2">例 <Math tex="\left(\dfrac{\sin x}{2}\right)'" />　❌ 硬套商法则：<Math tex="\dfrac{\cos x\cdot 2-\sin x\cdot 0}{2^2}=\dfrac{2\cos x}{4}=\dfrac{\cos x}{2}" /></p>
                    <p className="pl-2"><span className="invisible">例 <Math tex="\left(\dfrac{\sin x}{2}\right)'" /></span>　✅ 常数倍法则：<Math tex="\tfrac{1}{2}\cdot(\sin x)'=\tfrac{1}{2}\cos x" /><span className="text-gray-700 ml-2">（一步到位）</span></p>
                    <p><strong>结论</strong>：只有分母是<strong>纯常数</strong>时才能用常数倍法则偷懒；<strong>只要分母含自变量</strong>就老实用商法则。</p>
                  </div>
                </div>

                <PageBreak />

                {/* ═══════════════════════════════════════════════════════ */}
                {/* 2.4 复合函数求导（链式法则）                                 */}
                {/* ═══════════════════════════════════════════════════════ */}
                <div className="px-2 py-1 font-bold text-gray-900 bg-blue-50 border-l-4 border-blue-500 mb-0.5">2.4　复合函数求导（链式法则）</div>

                {/* ── 链式法则速查表 ── */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🎯 链式法则</div>
                  <table className="w-full border-collapse text-center [&_tr>*:first-child]:border-l-0 [&_tr>*:last-child]:border-r-0">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-2 py-0.5 w-[18%]">法则名</th>
                        <th className="border border-gray-300 px-2 py-0.5 w-[33%]">公式</th>
                        <th className="border border-gray-300 px-2 py-0.5">💡 口诀 & 易错警示</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5"><strong>链式法则</strong></td>
                        <td className="border border-gray-300 px-2 py-0.5"><Math tex="[f(g(x))]'=f'(g(x))\cdot g'(x)" /></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><strong>外层导数 × 内层导数</strong>（"剥洋葱"——从外往里一层层求）<br />⚠️ 最常见错误：<strong className="text-red-700">只求外层，忘了乘内层的导数</strong>。</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* ── 识别外/内小盒 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px bg-sky-50">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-sky-100">📍 第一步：识别外层 / 内层（拆套娃）</div>
                  <div className="px-2 py-1 text-[0.9rem] leading-snug [&_p]:!my-0 space-y-0.5">
                    <p>复合函数就像<strong>套娃</strong>——里面套着另一个函数。求导前先拆清楚谁是外、谁是内，用 <Math tex="u" /> 暂时代表内层。</p>
                    <hr className="border-gray-300" />
                    <table className="w-full border-collapse text-center text-[0.85rem] [&_tr>*:first-child]:border-l-0 [&_tr>*:last-child]:border-r-0">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="border border-gray-300 px-2 py-0.5">原函数</th>
                          <th className="border border-gray-300 px-2 py-0.5">外层 <Math tex="f(u)" /></th>
                          <th className="border border-gray-300 px-2 py-0.5">内层 <Math tex="u=g(x)" /></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td className="border border-gray-300 px-2"><Math tex="\sin(2x+1)" /></td><td className="border border-gray-300 px-2"><Math tex="\sin u" /></td><td className="border border-gray-300 px-2"><Math tex="2x+1" /></td></tr>
                        <tr><td className="border border-gray-300 px-2"><Math tex="(2x+1)^5" /></td><td className="border border-gray-300 px-2"><Math tex="u^5" /></td><td className="border border-gray-300 px-2"><Math tex="2x+1" /></td></tr>
                        <tr><td className="border border-gray-300 px-2"><Math tex="e^{x^2}" /></td><td className="border border-gray-300 px-2"><Math tex="e^u" /></td><td className="border border-gray-300 px-2"><Math tex="x^2" /></td></tr>
                        <tr><td className="border border-gray-300 px-2"><Math tex="\ln(x+1)" /></td><td className="border border-gray-300 px-2"><Math tex="\ln u" /></td><td className="border border-gray-300 px-2"><Math tex="x+1" /></td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* ── 详解：链式法则三步走（例 1 + 例 2）── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：链式法则三步走（套公式的标准流程）</div>
                  <div className="p-2 space-y-1 text-[0.9rem] leading-snug [&_p]:!my-0">
                    <p><strong>🎯 流程</strong>：① 拆出外 <Math tex="f(u)" /> 和内 <Math tex="u=g(x)" /> → ② 分别求 <Math tex="f'(u)" /> 和 <Math tex="g'(x)" /> → ③ 相乘 <Math tex="f'(g(x))\cdot g'(x)" />。</p>
                    <hr className="border-gray-300" />
                    <div className="grid grid-cols-2 gap-x-3">
                      <div className="space-y-1 pr-3 border-r border-gray-300">
                        <p className="font-bold"><strong>例 1</strong>：求 <Math tex="[\sin(2x+1)]'" /></p>
                        <hr className="border-gray-300" />
                        <p className="pl-2"><strong>① 拆</strong>：外 <Math tex="f(u)=\sin u" />，内 <Math tex="u=2x+1" /></p>
                        <p className="pl-2"><strong>② 分别求导</strong>：<Math tex="f'(u)=\cos u" />，<Math tex="g'(x)=2" /></p>
                        <p className="pl-2"><strong>③ 相乘</strong> <Math tex="f'(g(x))\cdot g'(x)" />：</p>
                        <hr className="border-gray-300" />
                        <p className="pl-4"><Math tex="=\underbrace{\cos(2x+1)}_{\text{外层导}}\cdot\underbrace{2}_{\text{内层导}}" /></p>
                        <hr className="border-gray-300" />
                        <p className="pl-4">所以 <Math tex="[\sin(2x+1)]'=2\cos(2x+1)" /></p>
                      </div>
                      <div className="space-y-1">
                        <p className="font-bold"><strong>例 2</strong>：求 <Math tex="[(2x+1)^5]'" /></p>
                        <hr className="border-gray-300" />
                        <p className="pl-2"><strong>① 拆</strong>：外 <Math tex="f(u)=u^5" />，内 <Math tex="u=2x+1" /></p>
                        <p className="pl-2"><strong>② 分别求导</strong>：<Math tex="f'(u)=5u^4" />，<Math tex="g'(x)=2" /></p>
                        <p className="pl-2"><strong>③ 相乘</strong> <Math tex="f'(g(x))\cdot g'(x)" />：</p>
                        <hr className="border-gray-300" />
                        <p className="pl-4"><Math tex="=\underbrace{5(2x+1)^4}_{\text{外层导}}\cdot\underbrace{2}_{\text{内层导}}" /></p>
                        <hr className="border-gray-300" />
                        <p className="pl-4">所以 <Math tex="[(2x+1)^5]'=10(2x+1)^4" /></p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── 💪 随手算两道 ── */}
                <hr className="border-gray-400" />
                <div className="text-base print:hidden">
                  <PracticeCard title="💪 随手算两道" questions={derivRulesWarmup4} explanations={derivativeBasicExplanations} hideBlankLine optionCols={2} printOptionCols={2}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivRulesWarmup4} printOptionCols={2} columns={2} />
                </div>

                {/* ── 详解：例 3 求导+代值 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：<strong>例 3</strong>　设 <Math tex="f(x)=e^{-x^2}" />，求 <Math tex="f'(1)" /><span className="text-gray-700 font-normal ml-2">——链式法则 + 代值</span></div>
                  <div className="px-2 pb-2 text-[0.9rem] leading-snug [&_p]:!my-0">
                    <div className="grid grid-cols-2 gap-x-3">
                      <div className="space-y-1 pr-3 border-r border-gray-300">
                        <p className="font-bold">第一步、先求导（链式法则）</p>
                        <hr className="border-gray-300" />
                        <p className="pl-2"><strong>拆</strong>：外 <Math tex="f(u)=e^u" />，内 <Math tex="u=-x^2" /></p>
                        <p className="pl-2"><strong>分别求导</strong>：<Math tex="f'(u)=e^u" />，<Math tex="g'(x)=-2x" /></p>
                        <p className="pl-2"><strong>相乘</strong> <Math tex="f'(g(x))\cdot g'(x)" />：</p>
                        <hr className="border-gray-300" />
                        <p className="pl-4"><Math tex="=e^{-x^2}\cdot(-2x)" /></p>
                        <hr className="border-gray-300" />
                        <p className="pl-4">所以 <Math tex="f'(x)=-2xe^{-x^2}" /></p>
                      </div>
                      <div className="space-y-1">
                        <p className="font-bold">第二步、代入 <Math tex="x=1" /></p>
                        <hr className="border-gray-300" />
                        <p className="pl-2"><Math tex="f'(1)=-2\cdot 1\cdot e^{-1^2}=-2\cdot e^{-1}" /></p>
                        <p className="pl-2"><Math tex="=-2\cdot\dfrac{1}{e}=-\dfrac{2}{e}" /></p>
                        <hr className="border-gray-300" />
                        <p className="pl-2 text-red-700"><strong>⚠️ 对比</strong>：<Math tex="f(1)=e^{-1^2}=\dfrac{1}{e}" /></p>
                        <p className="pl-4 text-gray-700"><Math tex="f(1)=\tfrac{1}{e}" /> 是<strong>函数值</strong>，<Math tex="f'(1)=-\tfrac{2}{e}" /> 是<strong>导数值</strong>。</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── 一句话看穿 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px bg-amber-50">
                  <div className="px-2 py-1.5">
                    <p><strong>💡 一句话看穿这节</strong>：<strong>看见复合，就"从外往里剥，外层导 × 内层导"</strong>——最怕只写外层忘了乘内层的导数。</p>
                  </div>
                </div>

                {/* ── 即时练习 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="" questions={derivRulesPractice4} explanations={derivativeBasicExplanations} hideBlankLine optionCols={2} printOptionCols={2}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivRulesPractice4} printOptionCols={2} columns={2} />
                </div>

                {/* ── 法则混合过渡盒（为 §3 切线铺垫）── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px bg-sky-50">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-sky-100">🔗 下一步预热：法则混合</div>
                  <div className="px-2 py-1 text-[0.9rem] leading-snug [&_p]:!my-0 space-y-0.5">
                    <p>很多题不止用一个法则——先看<strong>最外层</strong>运算选主法则，内层嵌套其他法则。</p>
                    <hr className="border-gray-300" />
                    <p className="pl-2"><strong>例 1</strong> <Math tex="[x\cdot e^{2x}]'" />——外层<strong>乘积</strong>，内层 <Math tex="e^{2x}" /> 再用<strong>链式</strong>：</p>
                    <p className="pl-4"><Math tex="=1\cdot e^{2x}+x\cdot 2e^{2x}=(1+2x)e^{2x}" /></p>
                    <hr className="border-gray-300" />
                    <p className="pl-2"><strong>例 2</strong> <Math tex="\left[\dfrac{\sin(2x)}{x}\right]'" />——外层<strong>商</strong>，内层 <Math tex="\sin(2x)" /> 再用<strong>链式</strong>：</p>
                    <p className="pl-4"><Math tex="=\dfrac{2\cos(2x)\cdot x-\sin(2x)\cdot 1}{x^2}=\dfrac{2x\cos(2x)-\sin(2x)}{x^2}" /></p>
                  </div>
                </div>

                {/* ── 高考说明（2 行）── */}
                <div className="border border-gray-300 rounded -mt-px bg-yellow-50 px-2 py-1 text-base leading-snug" style={{ breakInside: 'avoid' }}>
                  <strong>📊 高考说明</strong>：链式法则不单考，<strong>价值在应用</strong>——下一节的<strong>切线方程</strong>、单调性、极值、恒成立等大题都要用。<br />常考形式：<Math tex="\sin(ax+b),\ e^{ax+b},\ \ln(ax+b),\ (ax+b)^n" />。
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
