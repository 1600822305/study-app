import { Math, Collapsible, PageHeader, LessonLayout, ExportButton, PracticeCard, PrintQuestions, UnifiedDebugToggle } from '@/components/shared';
import { Coordinates, Plot, Point } from 'mafs';
import { DebugMafs } from '@/features/trig/MafsDebug';
import { extremaProgressItems } from './data/3.6.2/3.6.2-extrema-progress';
import { derivExtremaExample1Practice, derivExtremaExample2Practice, derivExtremaExample3Practice, derivExtremaExample4Practice } from './data/3.6.2/3.6.2-extrema-practice';
import { useProgress } from '@/hooks';
import { extremaExplanations } from './3.6.2-extrema-answers';

export function ExtremaPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('extrema', extremaProgressItems);

  return (
    <div>
      <div className="[&_h1]:!mb-0 [&_.flex.flex-wrap]:!mt-1">
        <PageHeader
          stage="第三阶段 · 函数思维"
          title="3.6.2 极值与最值"
          tags={[]}
        />
      </div>

      <LessonLayout
        progressItems={progressItems}
        onToggle={toggleProgress}
        sidebarTop={<ExportButton title="3.6.2 极值与最值" />}
      >
        <div className="[&_.rounded-xl]:mb-0 [&_.rounded-xl>.flex.items-center]:py-0.5 [&_.rounded-xl>div:last-child]:px-0 [&_.rounded-xl>div:last-child]:pt-0 [&_.rounded-xl>div:last-child]:pb-0 [&_.rounded-xl_button>span]:font-bold [&_.rounded-xl_button>span]:text-gray-900">

          <section id="ex-main" className="mb-0 scroll-mt-4">
            <Collapsible title="一、极值与最值（★ 基础送分）" defaultOpen storageKey="extrema:main">
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
                  <PracticeCard title="✏️ 例 2 同款练习（含 ln 求极值）" questions={derivExtremaExample2Practice} explanations={extremaExplanations} hideBlankLine optionCols={1} printOptionCols={1}
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
                  <PracticeCard title="✏️ 例 3 同款练习（含 e^x 求极值）" questions={derivExtremaExample3Practice} explanations={extremaExplanations} hideBlankLine optionCols={1} printOptionCols={1}
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
                  <PracticeCard title="✏️ 例 4 同款练习（分式 / 反比例型求极值）" questions={derivExtremaExample4Practice} explanations={extremaExplanations} hideBlankLine optionCols={1} printOptionCols={1}
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
        </div>
      </LessonLayout>
      <UnifiedDebugToggle />
    </div>
  );
}
