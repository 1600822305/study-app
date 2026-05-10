import { Math, Collapsible, PageHeader, LessonLayout, ExportButton, PracticeCard, PrintQuestions, UnifiedDebugToggle } from '@/components/shared';
import { Coordinates, Plot, Point } from 'mafs';
import { DebugMafs } from '@/features/trig/MafsDebug';
import { extremaProgressItems } from './data/3.6.2/3.6.2-extrema-progress';
import { derivExtremaExample1Practice, derivExtremaExample3Practice, derivExtremaExample4Practice } from './data/3.6.2/3.6.2-extrema-practice';
import { useProgress } from '@/hooks';
import { extremaExplanations } from './3.6.2-extrema-answers';

export function ExtremaPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('extrema', extremaProgressItems);

  return (
    <div>
      <div className="[&_h1]:!mb-0 [&_.flex.flex-wrap]:!mt-1">
        <PageHeader
          stage="第三阶段 · 函数思维"
          title="3.6.2 极值"
          tags={[]}
        />
      </div>

      <LessonLayout
        progressItems={progressItems}
        onToggle={toggleProgress}
        sidebarTop={<ExportButton title="3.6.2 极值" />}
      >
        <div className="[&_.rounded-xl]:mb-0 [&_.rounded-xl>.flex.items-center]:py-0.5 [&_.rounded-xl>div:last-child]:px-0 [&_.rounded-xl>div:last-child]:pt-0 [&_.rounded-xl>div:last-child]:pb-0 [&_.rounded-xl_button>span]:font-bold [&_.rounded-xl_button>span]:text-gray-900">

          <section id="ex-main" className="mb-0 scroll-mt-4">
            <Collapsible title="一、极值（★ 基础送分）" defaultOpen storageKey="extrema:main">
              <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">


                {/* ═══════════════════════════════════════════════════════ */}
                {/* 4.1 极值定义与判定                                        */}
                {/* ═══════════════════════════════════════════════════════ */}
                <div className="px-2 py-1 font-bold text-gray-900 bg-blue-50 border-l-4 border-blue-500 mt-1">4.1　极值定义与判定（★ 基础送分）</div>

                {/* ── 概念卡片 1：零点 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-blue-800 border-b border-gray-400 bg-blue-50">📘 概念 1：零点</div>
                  <div className="px-2 py-1 space-y-0.5">
                    <p><strong>定义</strong>：使得函数值为零的<strong>自变量的值</strong>，称为函数 <Math tex="f(x)" /> 的零点（即令 <Math tex="f(x)=0" /> 解出来的 <Math tex="x" />）。</p>
                    <p>零点是通用概念，任何函数都有零点：原函数 <Math tex="f" /> 有零点，导函数 <Math tex="f'" /> 也有零点，它们是不同的东西。</p>
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
                    <p><strong>例</strong>：<Math tex="f(x)=x^3-3x" />，求导 <Math tex="f'(x)=3x^2-3" />，令 <Math tex="f'(x)=0" />，解得 <Math tex="x=\pm 1" /></p>
                    <p className="pl-4">所以 <Math tex="x=\pm 1" /> 是原函数的驻点，即导函数的零点</p>
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
                    <p>① <strong>定义域与求导</strong>：定义域 <Math tex="\mathbb{R}" />（多项式无限制），<Math tex="f'(x)=3x^2-6x=3x(x-2)" /></p>
                    <hr className="border-gray-300" />
                    <p>② <strong>求驻点</strong>：令 <Math tex="f'(x)=0" />，即 <Math tex="3x(x-2)=0" />，解得 <Math tex="x=0" /> 或 <Math tex="x=2" /></p>
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
                  <PracticeCard title="✏️ 例 1 同款练习（求多项式极值）" questions={derivExtremaExample1Practice} explanations={extremaExplanations} hideBlankLine optionCols={1} printOptionCols={1}
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

                {/* ── 例 2 详解：由 f' 图像判极值 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：<strong>例 2</strong>　已知 <Math tex="f'(x)" /> 的图像如下，判断 <Math tex="f(x)" /> 有几个极值点<span className="font-normal ml-2">——选填高频，看图判极值</span></div>
                  <div className="px-2 py-1 space-y-1">
                    <div className="flex gap-4 items-start">
                      <div className="shrink-0">
                        <p className="font-bold mb-1"><Math tex="f'(x)" /> 的图像：</p>
                        <DebugMafs viewBox={{ x: [-2.5, 3], y: [-3.5, 2] }} height={102} width={158}>
                          <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false, labels: false }} />
                          <Plot.OfX y={(x) => (x + 1) * (x - 1) * (x - 1) / 3} color="#3b82f6" />
                          <Point x={-1} y={0} color="#ef4444" />
                          <Point x={1} y={0} color="#f59e0b" />
                        </DebugMafs>
                      </div>
                      <div className="space-y-1">
                        <p>① <strong>从图中找 <Math tex="f'(x)=0" /> 的点</strong>：图像与 <Math tex="x" /> 轴交于 <Math tex="x=-1" /> 和 <Math tex="x=1" /></p>
                        <hr className="border-gray-300" />
                        <p>② <strong>逐个看变号</strong>：</p>
                        <p className="pl-4"><Math tex="x=-1" /> 处：<Math tex="f'" /> 从<strong>负变正</strong>（图像从 <Math tex="x" /> 轴下方穿到上方），变号了，所以 <Math tex="x=-1" /> 是<strong className="text-blue-700">极小值点</strong></p>
                        <p className="pl-4"><Math tex="x=1" /> 处：<Math tex="f'" /> 从<strong>正碰到零又回到正</strong>（图像碰触 <Math tex="x" /> 轴但没穿过去），零点左边和右边都是正，</p>
                        <p className="pl-8">不变号，所以 <Math tex="x=1" /> <strong>不是极值点</strong>，只是驻点</p>
                        <hr className="border-gray-300" />
                        <p><strong>结论</strong>：<Math tex="f(x)" /> 只有<strong>一个极值点</strong> <Math tex="x=-1" />（极小值点）</p>
                      </div>
                    </div>
                    <div className="border border-blue-300 rounded bg-blue-50 px-2 py-1">
                      <p><strong>💡 看图判极值两步法</strong>：</p>
                      <p className="pl-4"><strong>第一步</strong>：找 <Math tex="f'" /> 图像与 <Math tex="x" /> 轴的交点（即 <Math tex="f'=0" /> 的点）</p>
                      <p className="pl-4"><strong>第二步</strong>：看每个交点处图像是<strong>穿过</strong> <Math tex="x" /> 轴（变号，是极值点）还是<strong>碰触后弹回</strong>（不变号，不是极值点）</p>
                    </div>
                  </div>
                </div>

                {/* ── 例 3 详解：含参讨论极值点个数 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：<strong>例 3</strong>　讨论 <Math tex="f(x)=x^3-3ax" /> 的极值点个数<span className="font-normal ml-2">——含参讨论，大题核心</span></div>
                  <div className="px-2 py-1 space-y-1">
                    <p>① <strong>定义域与求导</strong>：定义域 <Math tex="\mathbb{R}" />，<Math tex="f'(x)=3x^2-3a=3(x^2-a)" /></p>
                    <hr className="border-gray-300" />
                    <p>② <strong>令 <Math tex="f'(x)=0" /></strong>：即 <Math tex="x^2-a=0" />，即 <Math tex="x^2=a" /></p>
                    <p className="pl-4">这个方程有几个解，取决于 <Math tex="a" /> 的正负</p>
                    <hr className="border-gray-300" />
                    <p>③ <strong>按 <Math tex="a" /> 分类讨论</strong>：</p>
                    <div className="ml-4 border border-gray-300 rounded overflow-hidden">
                      <table className="w-full border-collapse [&_td]:border [&_td]:border-gray-300 [&_th]:border [&_th]:border-gray-300 [&_td]:px-2 [&_td]:py-1 [&_th]:px-2 [&_th]:py-1">
                        <thead className="bg-gray-50">
                          <tr>
                            <th><Math tex="a" /> 的范围</th>
                            <th><Math tex="f'(x)=0" /> 的解</th>
                            <th>变号情况</th>
                            <th>极值点个数</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><Math tex="a<0" /></td>
                            <td><Math tex="x^2=a<0" />，无实数解</td>
                            <td><Math tex="f'>0" /> 恒成立，单调递增</td>
                            <td><strong>0 个</strong></td>
                          </tr>
                          <tr>
                            <td><Math tex="a=0" /></td>
                            <td><Math tex="x=0" />（唯一解）</td>
                            <td><Math tex="f'(x)=3x^2\geqslant 0" />，不变号</td>
                            <td><strong>0 个</strong>（只是驻点）</td>
                          </tr>
                          <tr>
                            <td><Math tex="a>0" /></td>
                            <td><Math tex="x=\pm\sqrt{a}" />（两个解）</td>
                            <td>
                              <p>两个驻点把 <Math tex="\mathbb{R}" /> 分成三段：</p>
                              <p><Math tex="(-\infty,-\sqrt{a})" />：<Math tex="f'>0" />（递增）</p>
                              <p><Math tex="(-\sqrt{a},\sqrt{a})" />：<Math tex="f'<0" />（递减）</p>
                              <p><Math tex="(\sqrt{a},+\infty)" />：<Math tex="f'>0" />（递增）</p>
                              <p><Math tex="x=-\sqrt{a}" /> 处正变负，<Math tex="x=\sqrt{a}" /> 处负变正，都变号</p>
                            </td>
                            <td><strong>2 个</strong></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <hr className="border-gray-300" />
                    <p><strong>结论</strong>：当 <Math tex="a\leqslant 0" /> 时，<Math tex="f(x)" /> <strong>没有极值点</strong>；当 <Math tex="a>0" /> 时，<Math tex="f(x)" /> 有 <strong>2 个极值点</strong></p>
                    <div className="border border-blue-300 rounded bg-blue-50 px-2 py-1">
                      <p><strong>💡 核心方法</strong>：先求导，令 <Math tex="f'=0" />，看方程有几个解，再看每个解处 <Math tex="f'" /> 是否变号，从而确定极值点个数</p>
                    </div>
                  </div>
                </div>

                {/* ── 例 3 后即时练习 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="✏️ 例 3 同款练习（含参讨论极值点）" questions={derivExtremaExample3Practice} explanations={extremaExplanations} hideBlankLine optionCols={1} printOptionCols={1}
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

                {/* ── 例 4 详解：已知极值点求参数 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：<strong>例 4</strong>　已知 <Math tex="f(x)=x^3+ax^2+bx+1" /> 在 <Math tex="x=1" /> 处取极大值，在 <Math tex="x=2" /> 处取极小值，求 <Math tex="a,b" /><span className="font-normal ml-2">——已知极值点反求参数</span></div>
                  <div className="px-2 py-1 space-y-1">
                    <p>① <strong>求导</strong>：<Math tex="f'(x)=3x^2+2ax+b" /></p>
                    <hr className="border-gray-300" />
                    <div className="flex gap-6">
                      <div>
                        <p>② <strong>列方程</strong>：极值点处 <Math tex="f'=0" /></p>
                        <p className="pl-4">方程一：<Math tex="f'(1)=3+2a+b=0" /></p>
                        <p className="pl-4">方程二：<Math tex="f'(2)=12+4a+b=0" /></p>
                      </div>
                      <div className="border-l border-gray-300" />
                      <div>
                        <p>③ <strong>解方程组</strong>：方程二减方程一，得 <Math tex="9+2a=0" />，解得 <Math tex="a=-\dfrac{9}{2}" /></p>
                        <p className="pl-[6.3em]">代回方程一，得 <Math tex="3+2\times(-\dfrac{9}{2})+b=0" />，解得 <Math tex="b=6" /></p>
                      </div>
                    </div>
                    <hr className="border-gray-300" />
                    <p>④ <span className="border-b border-dashed border-gray-400"><strong>验证变号</strong>（考试中可省略，仅用于验证）</span>：<Math tex="f'(x)=3x^2-9x+6=3(x-1)(x-2)" />，用驻点 <Math tex="x=1,\,x=2" /> 分段：</p>
                    <p className="pl-4"><Math tex="x<1" /> 时：<Math tex="f'(x)=3(\text{负})(\text{负})>0" /></p>
                    <p className="pl-4"><Math tex="1<x<2" /> 时：<Math tex="f'(x)=3(\text{正})(\text{负})<0" /></p>
                    <p className="pl-4"><Math tex="x>2" /> 时：<Math tex="f'(x)=3(\text{正})(\text{正})>0" /></p>
                    <p className="pl-4"><Math tex="x=1" /> 处正变负，<strong>极大值点</strong> ✓；<Math tex="x=2" /> 处负变正，<strong>极小值点</strong> ✓</p>
                    <hr className="border-gray-300" />
                    <div className="border border-blue-300 rounded bg-blue-50 px-2 py-1">
                      <p><strong>💡 核心方法</strong>："<Math tex="x=k" /> 处取极值"给你<strong>两个条件</strong>：</p>
                      <p className="pl-4">① <Math tex="f'(k)=0" />（驻点条件）</p>
                      <p className="pl-4">② <Math tex="f(k)=" /> 极值（函数值条件）</p>
                      <p>列方程组解参数。<strong>解完一定要验证变号</strong>，否则可能只是驻点不是极值点。</p>
                    </div>
                  </div>
                </div>

                {/* ── 例 4 后即时练习 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="✏️ 例 4 同款练习（已知极值点反求参数）" questions={derivExtremaExample4Practice} explanations={extremaExplanations} hideBlankLine optionCols={1} printOptionCols={1}
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

              </div>
            </Collapsible>
          </section>
        </div>
      </LessonLayout>
      <UnifiedDebugToggle />
    </div>
  );
}
