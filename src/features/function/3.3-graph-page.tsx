import { Math, Collapsible, SpeakButton, PageHeader, LessonLayout, PracticeCard, ExportButton, PageBreak, UnifiedDebugToggle } from '@/components/shared';
import { Mafs, Coordinates, Plot, Point, Line } from 'mafs';
import { DebugMafs, DText } from '@/features/trig/MafsDebug';
import { graphNarrations } from './data/3.3/3.3-graph-narrations';
import { graphProgressItems } from './data/3.3/3.3-graph-progress';
import { graphPractice1, graphPractice2, graphPractice3 } from './data/3.3/3.3-graph-practice';
import { useProgress, usePrintMode } from '@/hooks';
import { FunctionGraphAnswers, functionGraphExplanations } from './3.3-graph-answers';

const NativeMath = globalThis.Math;


export function FunctionGraphPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('func-graph', graphProgressItems);
  const { isPrinting, printOptions } = usePrintMode();

  return (
    <div>
      <PageHeader
        stage="第三阶段 · 函数思维"
        title="3.3 函数图像与零点"
        narration={graphNarrations.intro}
        subtitle="零点概念·存在性定理·二分法·数形结合 — 高考常考小题"
        tags={[
          { label: '难度 ★★★☆☆', color: 'amber' },
          { label: '常考小题', color: 'blue' },
          { label: '约4-6小时', color: 'purple' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="3.3 函数图像与零点" />
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>
        <div className="[&_.rounded-xl]:mb-0 [&_.rounded-xl>.flex.items-center]:py-0.5 [&_.rounded-xl>div:last-child]:px-0 [&_.rounded-xl>div:last-child]:pt-0 [&_.rounded-xl>div:last-child]:pb-0">

      {/* ════════════════════════════════════════════════════════════ */}
      {/* Section 1: 零点的概念 */}
      {/* ════════════════════════════════════════════════════════════ */}
      <section id="fg-zero-concept" className="mb-0 scroll-mt-4">
        <Collapsible title="一、零点的概念" defaultOpen storageKey="func-graph:zero-concept" headerExtra={<SpeakButton text={graphNarrations.zeroPoint} />}>
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">零点的定义</div>
              <div className="px-3 py-0.5">
                <p>对于函数 <Math tex="y = f(x)" />，我们把使 <Math tex="f(x_0) = 0" /> 的实数 <Math tex="x_0" /> 叫做函数 <Math tex="f(x)" /> 的<strong>零点</strong>。</p>
                <p>换句话说：零点是<strong>使函数值为 0 的自变量取值</strong>，不是图像上的点 <Math tex="(x, 0)" />。</p>
              </div>
              <div className="border-t border-gray-300">
                <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100">图示 — 零点是"数"不是"点"</div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 border-r border-gray-300">
                    <div style={{ width: 320 }}>
                      <DebugMafs viewBox={{ x: [-0.8, 7.2], y: [-4.5, 4.5] }} height={85} preserveAspectRatio={false}>
                        <Coordinates.Cartesian xAxis={{ lines: false, labels: (n) => { if (n === 6) return <tspan dx={-3}>6</tspan>; return [1, 4].includes(n) ? String(n) : ''; } }} yAxis={{ lines: false, labels: () => '' }} />
                        <Plot.OfX y={(x: number) => {
                          if (x < 0.3) return NaN;
                          if (x <= 4) return (4 / 3) * (x - 1) * (x - 4);
                          return -3 * (x - 4) * (x - 6);
                        }} color="#0f172a" weight={1.8} />
                        <Point x={1} y={0} color="#0f172a" opacity={1} />
                        <Point x={4} y={0} color="#0f172a" opacity={1} />
                        <Point x={6} y={0} color="#0f172a" opacity={1} />
                        <DText x={5.2} y={3.8} size={16}>f(x)</DText>
                      </DebugMafs>
                    </div>
                  </div>
                  <div className="flex-1 px-3 py-0.5">
                    <p>图中函数 <Math tex="f(x)" /> 与 <Math tex="x\text{轴}" /> 有三个交点，横坐标分别是 1、4、6。</p>
                    <p className="border-t border-gray-200 pt-0.5"><span className="text-red-600">✗ 错误写法</span>：<Math tex="f(x)" /> 的零点为 <Math tex="(1, 0),\ (4, 0),\ (6, 0)" /></p>
                    <p><span className="text-green-700">✓ 正确写法</span>：<Math tex="f(x)" /> 的零点为 <Math tex="1,\ 4,\ 6" />（三个数）</p>
                    <p className="border-t border-gray-200 pt-0.5"><strong>重点</strong>：零点是<strong>数</strong>，不是<strong>点</strong>！是 <Math tex="x" /> 的值，不带括号、不带 0。</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">核心等价关系（数形结合的灵魂）— 以下三件事<span className="font-normal">完全等价</span>，说的是同一回事</div>
              <table className="w-full border-collapse">
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-2 py-0.5 font-bold">函数角度</td>
                    <td className="border border-gray-300 px-2 py-0.5">函数 <Math tex="f(x)" /> 的<strong>零点</strong></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-0.5 font-bold">图像角度</td>
                    <td className="border border-gray-300 px-2 py-0.5"><Math tex="f(x)" /> 的图像与 <strong><Math tex="x\text{轴}" /> 有交点</strong></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-0.5 font-bold">方程角度</td>
                    <td className="border border-gray-300 px-2 py-0.5">方程 <Math tex="f(x) = 0" /> 有<strong>实数解</strong></td>
                  </tr>
                </tbody>
              </table>
              <div className="px-3 py-0.5 border-t border-gray-300 text-center">一句话：<strong>零点 = 方程的解 = 与 <Math tex="x\text{轴}" /> 的交点</strong></div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">二次函数零点与判别式（秒判零点个数）</div>
              <div className="flex items-start">
                <div className="flex-1 px-3 py-0.5">
                  <p>对于 <Math tex="f(x) = ax^2 + bx + c" />（<Math tex="a \neq 0" />），用判别式 <Math tex="\Delta = b^2 - 4ac" /> 判断：</p>
                  <p className="border-t border-gray-200 pt-0.5">零点个数 = 图像与 <Math tex="x\text{轴}" /><strong>交点的个数</strong>，重根算 <strong>1 个</strong>零点（图像与 <Math tex="x\text{轴}" /> 相切）。</p>
                  <p className="border-t border-gray-200 pt-0.5"><strong>例</strong>：<Math tex="f(x) = x^2 - 5x + 6" />，<Math tex="\Delta = 25 - 24 = 1 > 0" />，所以有 <strong>2 个</strong>零点。</p>
                  <p>解方程得 <Math tex="x = 2" /> 和 <Math tex="x = 3" />，即零点为 2 和 3。</p>
                </div>
                <div className="flex-shrink-0 border-l border-gray-300 w-[38%]">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-1 py-0.5">判别式</th>
                        <th className="border border-gray-300 px-1 py-0.5 text-center">零点个数</th>
                        <th className="border border-gray-300 px-1 py-0.5 text-center">图像与 <Math tex="x" />轴</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-1 py-0.5 font-bold"><Math tex="\Delta > 0" /></td>
                        <td className="border border-gray-300 px-1 py-0.5 text-center"><strong>2 个</strong>不同零点</td>
                        <td className="border border-gray-300 px-1 py-0.5 text-center">2 个交点</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-1 py-0.5 font-bold"><Math tex="\Delta = 0" /></td>
                        <td className="border border-gray-300 px-1 py-0.5 text-center"><strong>1 个</strong>零点（重根）</td>
                        <td className="border border-gray-300 px-1 py-0.5 text-center">1 个交点（切线）</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-1 py-0.5 font-bold"><Math tex="\Delta < 0" /></td>
                        <td className="border border-gray-300 px-1 py-0.5 text-center"><strong>0 个</strong>零点</td>
                        <td className="border border-gray-300 px-1 py-0.5 text-center">不相交</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">零点存在定理（图示）<span className="font-normal ml-2">（不是万能的）</span></div>
              <div className="px-3 py-0.5">
                <p>如果函数 <Math tex="y = f(x)" /> 在区间 <Math tex="[a, b]" /> 上的图象是一条<strong>连续不断</strong>的曲线，且 <Math tex="f(a) \cdot f(b) < 0" /></p>
                <p>那么函数 <Math tex="f(x)" /> 在区间 <Math tex="(a, b)" /> 内<strong>至少有一个</strong>零点。<span className="ml-[10em]">（一正一负）</span></p>
              </div>
              <div className="grid grid-cols-3 border-t border-gray-300">
                <div className="flex justify-center py-1">
                  <svg width="150" height="58" viewBox="0 8 150 58">
                    <line x1="8" y1="42" x2="138" y2="42" stroke="#334155" strokeWidth="1.5" />
                    <polygon points="138,42 132,39 132,45" fill="#334155" />
                    <line x1="30" y1="42" x2="90" y2="42" stroke="#86efac" strokeWidth="5" />
                    <path d="M30,15 C38,42 82,42 90,62" fill="none" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="30" cy="42" r="3" fill="#334155" />
                    <circle cx="90" cy="42" r="3" fill="#334155" />
                    <circle cx="60" cy="42" r="3" fill="#ef4444" />
                    <circle cx="30" cy="15" r="4" fill="#334155" />
                    <circle cx="90" cy="62" r="4" fill="#334155" />
                    <text x="30" y="56" textAnchor="middle" fontSize="11" fill="#334155" fontStyle="italic">a</text>
                    <text x="90" y="56" textAnchor="middle" fontSize="11" fill="#334155" fontStyle="italic">b</text>
                    <text x="60" y="38" textAnchor="middle" fontSize="12" fill="#334155" fontWeight="bold" fontStyle="italic">x₀</text>
                    <text x="145" y="46" fontSize="11" fill="#334155" fontStyle="italic">x</text>
                  </svg>
                </div>
                <div className="flex justify-center py-1 border-x border-gray-300">
                  <svg width="150" height="58" viewBox="0 8 150 58">
                    <line x1="8" y1="42" x2="138" y2="42" stroke="#334155" strokeWidth="1.5" />
                    <polygon points="138,42 132,39 132,45" fill="#334155" />
                    <line x1="30" y1="42" x2="90" y2="42" stroke="#86efac" strokeWidth="5" />
                    <path d="M30,62 C38,42 82,42 90,15" fill="none" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="30" cy="42" r="3" fill="#334155" />
                    <circle cx="90" cy="42" r="3" fill="#334155" />
                    <circle cx="60" cy="42" r="3" fill="#ef4444" />
                    <circle cx="30" cy="62" r="4" fill="#334155" />
                    <circle cx="90" cy="15" r="4" fill="#334155" />
                    <text x="30" y="56" textAnchor="middle" fontSize="11" fill="#334155" fontStyle="italic">a</text>
                    <text x="90" y="56" textAnchor="middle" fontSize="11" fill="#334155" fontStyle="italic">b</text>
                    <text x="60" y="38" textAnchor="middle" fontSize="12" fill="#334155" fontWeight="bold" fontStyle="italic">x₀</text>
                    <text x="145" y="46" fontSize="11" fill="#334155" fontStyle="italic">x</text>
                  </svg>
                </div>
                <div className="flex justify-center py-1">
                  <svg width="150" height="58" viewBox="0 8 150 58">
                    <line x1="8" y1="42" x2="138" y2="42" stroke="#334155" strokeWidth="1.5" />
                    <polygon points="138,42 132,39 132,45" fill="#334155" />
                    <line x1="30" y1="42" x2="90" y2="42" stroke="#86efac" strokeWidth="5" />
                    <path d="M30,15 C33,30 38,48 45,55 C52,62 55,55 60,42 C65,29 68,22 75,29 C82,36 87,50 90,62" fill="none" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="30" cy="42" r="3" fill="#334155" />
                    <circle cx="90" cy="42" r="3" fill="#334155" />
                    <circle cx="30" cy="15" r="4" fill="#334155" />
                    <circle cx="90" cy="62" r="4" fill="#334155" />
                    <text x="30" y="56" textAnchor="middle" fontSize="11" fill="#334155" fontStyle="italic">a</text>
                    <text x="90" y="56" textAnchor="middle" fontSize="11" fill="#334155" fontStyle="italic">b</text>
                    <text x="145" y="46" fontSize="11" fill="#334155" fontStyle="italic">x</text>
                  </svg>
                </div>
              </div>
              <div className="px-3 py-0.5 border-t border-gray-300 text-center"><strong>●</strong> 在数轴上方表示函数值 <Math tex="y" /> 为正，在下方表示函数值 <Math tex="y" /> 为负</div>
              <div className="px-3 py-1.5 border-t border-gray-300 bg-blue-50">
                <p className="font-bold text-gray-800">零点区间题 · 解题模板</p>
                <p><strong>核心思路：</strong>找两个点 a, b，使得 <Math tex="f(a) \cdot f(b) < 0" />（一正一负），则零点在 <Math tex="(a, b)" /> 内</p>
                <p><strong>第一步：</strong>代入特殊值（对数题优先 <Math tex="x = 1" />，其他题试 0, 1, 2, -1 等整数）。<strong>注意：</strong>分式、对数等要检查定义域</p>
                <p><strong>第二步：</strong>判断 <Math tex="f(a)" /> 和 <Math tex="f(b)" /> 的正负</p>
                <p><strong>第三步：</strong>找到一对异号点，满足 <Math tex="f(a) \cdot f(b) < 0" />，答案就是 <Math tex="(a, b)" /></p>
              </div>
              <div className="border-t border-gray-300">
                <div className="px-2 py-0.5 font-bold text-gray-800 border-b border-gray-300 bg-gray-50">零点存在性定理速查</div>
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-1.5 py-px">条件</th>
                      <th className="border border-gray-300 px-1.5 py-px text-center">结论</th>
                      <th className="border border-gray-300 px-1.5 py-px text-center">举例</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-1.5 py-px">连续 + 异号</td>
                      <td className="border border-gray-300 px-1.5 py-px text-center font-bold text-green-700">一定有零点</td>
                      <td className="border border-gray-300 px-1.5 py-px text-center"><Math tex="x^3 - 1" /> 在 <Math tex="[0, 2]" /></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-1.5 py-px">连续 + 同号</td>
                      <td className="border border-gray-300 px-1.5 py-px text-center font-bold text-amber-700">不确定</td>
                      <td className="border border-gray-300 px-1.5 py-px text-center"><Math tex="x^2" /> 在 <Math tex="[-1, 1]" /> 有零点</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-1.5 py-px">不连续 + 异号</td>
                      <td className="border border-gray-300 px-1.5 py-px text-center font-bold text-amber-700">不确定</td>
                      <td className="border border-gray-300 px-1.5 py-px text-center"><Math tex="\dfrac{1}{x}" /> 在 <Math tex="[-1, 1]" /> 无零点</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-1.5 py-px">不连续 + 同号</td>
                      <td className="border border-gray-300 px-1.5 py-px text-center font-bold text-amber-700">不确定</td>
                      <td className="border border-gray-300 px-1.5 py-px text-center">无法用定理判断</td>
                    </tr>
                  </tbody>
                </table>
                <div className="px-2 py-px border-t border-gray-300 text-sm">只有<strong>第一行</strong>能确定结论，其余三种都需要另外分析。</div>
                <div className="px-2 py-px border-t border-gray-300 text-sm text-blue-700 font-bold">口诀：连续异号必有零，其他情况要验证</div>
              </div>
            </div>

            <div className="break-before-page"></div>

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-3 py-1.5">
                <p><strong>快速例题：</strong>求 <Math tex="f(x) = x^3 - x - 1" /> 的零点所在区间</p>
                <p className="mt-0.5"><strong>解：</strong>代入整数试探：<Math tex="f(1) = 1 - 1 - 1 = -1 < 0" />，<Math tex="f(2) = 8 - 2 - 1 = 5 > 0" />，异号 ✓，所以零点在 <Math tex="(1, 2)" /> 内</p>
                <p className="mt-0.5"><strong>练一练：</strong>① <Math tex="f(x) = x^2 - 2" /> 的零点在 ______　② <Math tex="f(x) = x^3 + x - 3" /> 的零点在 ______</p>
                <p>③ <Math tex="f(x) = \log_2 x + x - 2" /> 的零点在 ______　④ <Math tex="f(x) = e^x + x - 2" /> 的零点在 ______</p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">实战例题</div>
              <div className="px-3 pt-2 pb-1">
                <p><strong>填空题：</strong>函数 <Math tex="f(x) = \ln x + 2x - 1" /> 的零点所在的区间为 ________</p>
              </div>
              <div className="border-t border-gray-300"></div>
              <div className="flex">
                <div className="flex-1 px-3 pt-1">
                  <p><strong>思路：</strong><Math tex="\ln x = \log_e x" />，其中 <Math tex="e \approx 2.718" />，底数 <Math tex="e" /> 大于 1，所以 <Math tex="\ln x" /> 是增函数；<br /><Math tex="2x - 1" /> 是一次函数，斜率 <Math tex="k = 2 > 0" />，也是增函数。增函数 + 增函数 = 增函数</p>
                </div>
                <div className="self-start">
                  <svg width="103" height="42" viewBox="0 8 160 58">
                    <line x1="8" y1="42" x2="148" y2="42" stroke="#334155" strokeWidth="1.5" />
                    <polygon points="148,42 142,39 142,45" fill="#334155" />
                    <line x1="35" y1="42" x2="105" y2="42" stroke="#86efac" strokeWidth="5" />
                    <path d="M35,62 C43,42 87,42 105,15" fill="none" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="35" cy="42" r="3" fill="#334155" />
                    <circle cx="105" cy="42" r="3" fill="#334155" />
                    <circle cx="65" cy="42" r="3" fill="#ef4444" />
                    <circle cx="35" cy="62" r="4" fill="#334155" />
                    <circle cx="105" cy="15" r="4" fill="#334155" />
                    <text x="155" y="46" fontSize="11" fill="#334155" fontStyle="italic">x</text>
                  </svg>
                </div>
              </div>
              <div className="px-3 pb-2">
                <p>所以 <Math tex="f(x)" /> 整体是增函数，最多只有一个零点（类似如一次函数单调递增的时候，图像一直往上走，最多只能穿过 x 轴一次）</p>
                <p>根据零点存在定理，只要找到一个区间 <Math tex="[a, b]" />，使得 <Math tex="f(a) \cdot f(b) < 0" />，则零点必在其中</p>
                <p className="mt-1"><strong>第一步：找特殊点。</strong>对于对数相关的题，优先代入 <Math tex="x = 1" />（因为真数为 1 时对数值为 0，最好算）</p>
                <p className="mt-1"><Math tex="f(1) = \ln 1 + 2 - 1 = 0 + 1 = 1 > 0" />（<Math tex="\ln 1 = \log_e 1 = 0" />，因为 <Math tex="e^0 = 1" />）</p>
                <p className="mt-1"><strong>第二步：确定方向。</strong>已知 <Math tex="f(1) > 0" />，零点存在定理需要"一正一负"，所以要找一个使 <Math tex="f(x) < 0" /> 的点</p>
                <p className="mt-1"><Math tex="f(x)" /> 是增函数，所以负值在 <Math tex="x = 1" /> 的左边，往 <Math tex="x < 1" /> 方向找</p>
                <p className="mt-1"><strong>第三步：确定取值范围并代入。</strong>定义域要求真数 <Math tex="x > 0" />；又因为要找 <Math tex="x < 1" /> 的点，取交集得 <Math tex="(0, 1)" />，在此范围内取 <Math tex="x = \tfrac{1}{2}" /></p>
                <p className="mt-1"><Math tex="f\!\left(\tfrac{1}{2}\right) = \ln\tfrac{1}{2} + 1 - 1 = \ln\tfrac{1}{2}" />（真数 <Math tex="0 < \tfrac{1}{2} < 1" />，所以 <Math tex="\ln\tfrac{1}{2} < 0" />）</p>
                <p className="mt-1"><strong>第四步：得出结论。</strong><Math tex="f\!\left(\tfrac{1}{2}\right) < 0" />，<Math tex="f(1) > 0" />，异号，所以零点在 <Math tex="\left(\tfrac{1}{2},\, 1\right)" /> 内。<strong>注意：</strong>答案不唯一！取不同的代入点会得到不同的区间，如取 <Math tex="x = \tfrac{1}{4}" /> 则答案是 <Math tex="\left(\tfrac{1}{4},\, 1\right)" />，直接用 <Math tex="(0, 1)" /> 也对。只要区间包含零点且能证明异号，都是正确答案。</p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-3 py-1.5">
                <p><strong>选择题：</strong>函数 <Math tex="f(x) = \log_4(2x+4) - \dfrac{4}{x+1}" /> 的一个零点所在的区间是（　　）A. <Math tex="(-1, 0)" />　B. <Math tex="(0, 1)" />　C. <Math tex="(1, 2)" />　D. <Math tex="(2, 3)" /></p>
              </div>
              <div className="px-3 py-1.5 border-t border-gray-300">
                <p><strong>解：</strong>选择题直接代入选项端点！不用算精确值，只需判断正负</p>
                <p className="mt-0.5"><Math tex="f(1) = \log_4 6 - 2" />，比较 <Math tex="\log_4 6" /> 和 <Math tex="2 = \log_4 16" />，底数都是 4，比真数：<Math tex="6 < 16" />，所以 <Math tex="\log_4 6 < 2" />，即 <Math tex="\log_4 6 - 2 < 0" /></p>
                <hr className="border-gray-300 my-0" />
                <p><Math tex="f(2) = \log_4 8 - \dfrac{4}{3}" />，<Math tex="\log_4 8 = \log_4 2^3 = 3\log_4 2 = 3 \times \dfrac{1}{2} = \dfrac{3}{2}" />，所以 <Math tex="f(2) = \dfrac{3}{2} - \dfrac{4}{3} = \dfrac{9-8}{6} = \dfrac{1}{6} > 0" /></p>
                <p className="mt-0.5">因为 <Math tex="f(1) \cdot f(2) < 0" />（负数 × 正数），所以零点在 <Math tex="(1, 2)" /> 之间，答案选 <strong>C</strong></p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">常见函数零点速查</div>
              <div className="grid grid-cols-2">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-2 py-0.5">函数</th>
                      <th className="border border-gray-300 px-2 py-0.5 text-center">零点</th>
                      <th className="border border-gray-300 px-2 py-0.5 text-center">求法</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-2 py-0.5"><Math tex="f(x) = kx + b" /></td>
                      <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="x = -\tfrac{b}{k}" /></td>
                      <td className="border border-gray-300 px-2 py-0.5 text-center">直接解方程</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-0.5"><Math tex="f(x) = ax^2+bx+c" /></td>
                      <td className="border border-gray-300 px-2 py-0.5 text-center">看 <Math tex="\Delta" /></td>
                      <td className="border border-gray-300 px-2 py-0.5 text-center">求根公式</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-0.5"><Math tex="f(x) = a^x - 1" /></td>
                      <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="x = 0" /></td>
                      <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="a^0 = 1" /></td>
                    </tr>
                  </tbody>
                </table>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-2 py-0.5">函数</th>
                      <th className="border border-gray-300 px-2 py-0.5 text-center">零点</th>
                      <th className="border border-gray-300 px-2 py-0.5 text-center">求法</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-2 py-0.5"><Math tex="f(x) = e^x - 1" /></td>
                      <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="x = 0" /></td>
                      <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="e^0 = 1" /></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-0.5"><Math tex="f(x) = \log_a x - 1" /></td>
                      <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="x = a" /></td>
                      <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="\log_a a = 1" /></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-0.5"><Math tex="f(x) = \ln x" /></td>
                      <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="x = 1" /></td>
                      <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="\ln 1 = 0" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="text-base">
              <PracticeCard
                title=""
                questions={graphPractice1}
                printOptionCols={4}
                explanations={functionGraphExplanations}
              />
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* Section 2: 数形结合求零点个数 */}
      {/* ════════════════════════════════════════════════════════════ */}
      <section id="fg-graph-method" className="mb-0 scroll-mt-4">
        <Collapsible title="二、数形结合求零点个数" defaultOpen storageKey="func-graph:graph-method" headerExtra={<SpeakButton text={graphNarrations.graphMethod} />}>
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">遇到复杂方程，画图比硬算强</div>
              <div className="px-3 py-0.5">
                <p>比如 <Math tex="\ln x = x - 2" />，你没法用公式解出来。但如果分别画 <Math tex="y = \ln x" /> 和 <Math tex="y = x - 2" /> 的图像，就能看出来。</p>
                <p><strong>两个函数图像的交点个数就是零点的数量</strong>。这就是数形结合的威力。</p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">拆分法求零点个数（尽量拆成基本函数：指数、对数、幂函数、直线等）</div>
              <div className="px-3 py-0.5">
                <p><strong>第①步</strong>：将 <Math tex="f(x) = 0" /> 变形为 <Math tex="h(x) = g(x)" /></p>
                <p><strong>第②步</strong>：分别画 <Math tex="y = h(x)" /> 和 <Math tex="y = g(x)" /> 的图像</p>
                <p><strong>第③步</strong>：数两条图像的<strong>交点个数</strong>，就是零点个数</p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例 1. <Math tex="\ln x + x - 2 = 0" /> 有几个根？</div>
              <div className="flex items-start">
                <div className="flex-1 px-3 py-0.5">
                  <p>拆分：<Math tex="\ln x = 2 - x" /></p>
                  <p><Math tex="y_1 = \ln x" />（对数曲线，过 <Math tex="(1, 0)" />——因为 <Math tex="\ln 1 = 0" />，单调递增）</p>
                  <p><Math tex="y_2 = 2 - x" />（直线，过 <Math tex="(0, 2)" /> 和 <Math tex="(2, 0)" />）</p>
                  <p><strong>一个递增、一个递减，最多 1 个交点</strong></p>
                  <p>从图像看确实相交，所以<strong>恰好 1 个根</strong></p>
                </div>
                <div className="flex-shrink-0 p-1 border-l border-gray-300">
                  <div style={{ width: 240 }}>
                    <Mafs viewBox={{ x: [-1, 4], y: [-2, 3] }} height={85}>
                      <Coordinates.Cartesian xAxis={{ lines: false, labels: (n) => [1, 2, 3].includes(n) ? String(n) : '' }} yAxis={{ lines: false, labels: (n) => [1, 2].includes(n) ? String(n) : '' }} />
                      <Plot.OfX y={(x: number) => x > 0 ? NativeMath.log(x) : NaN} color="#3b82f6" weight={2.5} />
                      <Plot.OfX y={(x: number) => 2 - x} color="#ef4444" weight={2.5} />
                    </Mafs>
                    <p className="text-center">蓝：<Math tex="y = \ln x" />　红：<Math tex="y = 2 - x" /></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例 2. <Math tex="e^x = x + 2" /> 有几个根？</div>
              <div className="flex items-start">
                <div className="flex-1 px-3 py-0.5">
                  <p><Math tex="y_1 = e^x" />（底数 <Math tex="e > 1" />，必过 <Math tex="(0, 1)" />，单调递增）</p>
                  <p><Math tex="y_2 = x + 2" />（斜率 <Math tex="k = 1 > 0" />，增函数，过 <Math tex="(0, 2)" /> 和 <Math tex="(-2, 0)" />）</p>
                  <p>原方程 <Math tex="e^x = x + 2" /> 就是 <Math tex="y_1 = y_2" />，所以两条线交几次就有几个根</p>
                  <p>由图可以判定出有两个交点，所以有 <strong>2 个根</strong></p>
                </div>
                <div className="flex-shrink-0 p-1 border-l border-gray-300">
                  <div style={{ width: 240 }}>
                    <Mafs viewBox={{ x: [-4, 3], y: [-2, 6] }} height={72}>
                      <Coordinates.Cartesian xAxis={{ lines: false, labels: (n) => [-2, 1, 2].includes(n) ? String(n) : '' }} yAxis={{ lines: false, labels: (n) => [2, 4].includes(n) ? String(n) : '' }} />
                      <Plot.OfX y={(x: number) => NativeMath.exp(x)} color="#22c55e" weight={2.5} />
                      <Plot.OfX y={(x: number) => x + 2} color="#f97316" weight={2.5} />
                    </Mafs>
                    <p className="text-center">绿：<Math tex="y = e^x" />　橙：<Math tex="y = x + 2" /></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例 3. 比较零点大小</div>
              <div className="px-3 py-0.5">
                <p>已知 <Math tex="f(x) = \log_3 x + x" />，<Math tex="g(x) = 3^x + x" />，<Math tex="h(x) = x^3 + x" /> 的零点分别为 <Math tex="x_1, x_2, x_3" />，比较大小。</p>
                <p className="border-t border-gray-200 pt-0.5 mt-1"><strong>分析每个零点的位置</strong>：</p>
                <p><Math tex="f(x) = \log_3 x + x = 0" />：代入 <Math tex="x = 1" /> 得 <Math tex="0 + 1 > 0" />，需要找一个使 <Math tex="f(x) < 0" /> 的点，真数要求 <Math tex="x > 0" /></p>
                <p className="pl-4">所以在 <Math tex="(0, 1)" /> 之间找，选 <Math tex="x = \frac{1}{3}" />（因为 <Math tex="3^{-1} = \frac{1}{3}" />，好算），代入得 <Math tex="-1 + \frac{1}{3} < 0" />，所以 <Math tex="\frac{1}{3} < x_1 < 1" /></p>
                <p className="border-t border-gray-200 pt-0.5"><Math tex="g(x) = 3^x + x = 0" />：代入 <Math tex="x = 0" /> 得 <Math tex="1 + 0 > 0" />，需要找一个使 <Math tex="g(x) < 0" /> 的点</p>
                <p className="pl-4">代入 <Math tex="x = -1" /> 得 <Math tex="\frac{1}{3} - 1 < 0" />，满足异号，所以 <Math tex="-1 < x_2 < 0" /></p>
                <p className="border-t border-gray-200 pt-0.5"><Math tex="h(x) = x^3 + x = 0" />：提取公因式得 <Math tex="x(x^2 + 1) = 0" /></p>
                <p className="pl-4">乘积为 0 则至少一个因子为 0：<Math tex="x = 0" /> 或 <Math tex="x^2 + 1 = 0" />，但 <Math tex="x^2 + 1 \geq 1 > 0" />，所以只能 <Math tex="x_3 = 0" /></p>
                <p className="border-t border-gray-200 pt-0.5 mt-1"><strong>比较</strong>：<Math tex="x_2 \in (-1, 0)" />，<Math tex="x_3 = 0" />，<Math tex="x_1 \in (0, 1)" />，所以 <Math tex="x_2 < x_3 < x_1" /></p>
              </div>
            </div>



            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">易错提醒</div>
              <div className="px-3 py-0.5">
                <p><strong>①</strong> 拆分方式影响难度，尽量拆成基本函数（指数、对数、幂函数、直线），不要拆出画不出来的函数</p>
                <p><strong>②</strong> 画图要注意定义域，<Math tex="\ln x" /> 只有 <Math tex="x > 0" /> 部分</p>
                <p><strong>③</strong> 交点 = 方程根 = 零点，三者完全等价</p>
              </div>
            </div>

            <PracticeCard
              title=""
              questions={graphPractice2}
              explanations={functionGraphExplanations}
              optionCols={4}
              printOptionCols={4}
            />

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* Section 3: 二分法 */}
      {/* ════════════════════════════════════════════════════════════ */}
      <PageBreak />
      <section id="fg-bisection" className="mb-0 scroll-mt-4">
        <Collapsible title="三、二分法求近似解" defaultOpen storageKey="func-graph:bisection" headerExtra={<SpeakButton text={graphNarrations.bisection} />}>
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">生活比喻 — 猜数字游戏</div>
              <div className="px-3 py-0.5">
                <p>老师想了一个 1~100 之间的整数，你每次猜一个数，老师只说"大了"或"小了"。最聪明的策略是什么？<strong>每次猜中间值</strong>。</p>
                <p>先猜 50，大了就猜 25，小了就猜 75……最多 7 次就能猜到。二分法就是这个思路。</p>
                <p className="border-t border-gray-200 pt-0.5"><strong>本质</strong>：二分法就是<strong>反复利用零点存在定理</strong>，每次把区间缩小一半，逐步逼近零点。</p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">二分法步骤</div>
              <div className="px-3 py-0.5">
                <p><strong>前提</strong>：<Math tex="f(x)" /> 在 <Math tex="[a, b]" /> 上连续，且 <Math tex="f(a) \cdot f(b) < 0" /></p>
                <p className="border-t border-gray-200 pt-0.5"><strong>第①步</strong>：取中点 <Math tex="m = \dfrac{a + b}{2}" />，算出 <Math tex="f(m)" />，把 <Math tex="[a, b]" /> 分成两个区间 <Math tex="[a, m]" /> 和 <Math tex="[m, b]" /></p>
                <p><strong>第②步</strong>：用零点存在定理判断零点在哪半边</p>
                <p className="pl-4">若 <Math tex="f(m) = 0" />，则 <Math tex="m" /> 就是零点，结束</p>
                <p className="pl-4">若 <Math tex="f(a)" /> 和 <Math tex="f(m)" /> 异号，零点在 <Math tex="[a, m]" /> 内，令 <Math tex="b = m" /></p>
                <p className="pl-4">若 <Math tex="f(m)" /> 和 <Math tex="f(b)" /> 异号，零点在 <Math tex="[m, b]" /> 内，令 <Math tex="a = m" /></p>
                <p><strong>第③步</strong>：重复①②，直到区间足够小（达到精度要求）</p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例题 — 用二分法求 <Math tex="x^3 - 2 = 0" /> 在 <Math tex="(1, 2)" /> 内的近似解</div>
              <div className="flex items-start">
                <div className="flex-1 px-3 py-0.5">
                  <p><Math tex="f(x) = x^3 - 2" />，<Math tex="f(1) = -1 < 0" />，<Math tex="f(2) = 6 > 0" /></p>
                  <table className="w-full border-collapse mt-0.5">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-1.5 py-0.5 text-center">次数</th>
                        <th className="border border-gray-300 px-1.5 py-0.5 text-center">中点 <Math tex="m" /></th>
                        <th className="border border-gray-300 px-1.5 py-0.5 text-center"><Math tex="f(m)" /></th>
                        <th className="border border-gray-300 px-1.5 py-0.5 text-center">新区间</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-1.5 py-0.5 text-center">1</td>
                        <td className="border border-gray-300 px-1.5 py-0.5 text-center">1.5</td>
                        <td className="border border-gray-300 px-1.5 py-0.5 text-center text-blue-600"><Math tex="1.375 > 0" /></td>
                        <td className="border border-gray-300 px-1.5 py-0.5 text-center">(1, 1.5)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-1.5 py-0.5 text-center">2</td>
                        <td className="border border-gray-300 px-1.5 py-0.5 text-center">1.25</td>
                        <td className="border border-gray-300 px-1.5 py-0.5 text-center text-red-600"><Math tex="-0.047 < 0" /></td>
                        <td className="border border-gray-300 px-1.5 py-0.5 text-center">(1.25, 1.5)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-1.5 py-0.5 text-center">3</td>
                        <td className="border border-gray-300 px-1.5 py-0.5 text-center">1.375</td>
                        <td className="border border-gray-300 px-1.5 py-0.5 text-center text-blue-600"><Math tex="0.60 > 0" /></td>
                        <td className="border border-gray-300 px-1.5 py-0.5 text-center">(1.25, 1.375)</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="mt-0.5">精确到 0.1：零点 <Math tex="\approx 1.26" />（实际值 <Math tex="\sqrt[3]{2} \approx 1.2599" />）</p>
                </div>
                <div className="flex-shrink-0 p-1 border-l border-gray-300">
                  <div style={{ width: 190 }}>
                    <Mafs viewBox={{ x: [0.5, 2.5], y: [-2, 7] }} height={120}>
                      <Coordinates.Cartesian xAxis={{ lines: false, labels: (n) => [1, 2].includes(n) ? String(n) : '' }} yAxis={{ lines: false, labels: (n) => [0].includes(n) ? String(n) : '' }} />
                      <Plot.OfX y={(x: number) => x * x * x - 2} color="#22c55e" weight={2.5} />
                      <Point x={1.2599} y={0} color="#ef4444" />
                      <Line.Segment point1={[1, -2]} point2={[1, 7]} color="#94a3b8" weight={1} opacity={0.5} />
                      <Line.Segment point1={[2, -2]} point2={[2, 7]} color="#94a3b8" weight={1} opacity={0.5} />
                    </Mafs>
                    <p className="text-center text-gray-600">红点是零点 <Math tex="\sqrt[3]{2}" /></p>
                  </div>
                </div>
              </div>
            </div>



            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">易错提醒</div>
              <div className="px-3 py-0.5">
                <p><strong>①</strong> 二分法只能求近似值，不能求精确值（但精度可以任意高）</p>
                <p><strong>②</strong> 每次区间缩小一半，<Math tex="n" /> 次后区间长度是原来的 <Math tex="\dfrac{1}{2^n}" /></p>
                <p><strong>③</strong> 前提是零点存在性定理的两个条件：连续 + 异号</p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div>
                  <div className="px-1.5 py-0.5 font-bold text-gray-800 border-b border-gray-300 bg-gray-100">实战 1 — 求 <Math tex="2^x = 3" /> 在 <Math tex="(1, 2)" /> 内的近似解（精确到 0.1）</div>
                  <div className="px-3 py-0.5">
                    <p>构造 <Math tex="f(x) = 2^x - 3" /></p>
                    <p><Math tex="f(1) = -1 < 0" />，<Math tex="f(2) = 1 > 0" /></p>
                    <table className="w-full border-collapse mt-0.5">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-300 px-1 py-0.5 text-center">次</th>
                          <th className="border border-gray-300 px-1 py-0.5 text-center"><Math tex="m" /></th>
                          <th className="border border-gray-300 px-1 py-0.5 text-center"><Math tex="f(m)" /></th>
                          <th className="border border-gray-300 px-1 py-0.5 text-center">新区间</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-1 py-0.5 text-center">1</td>
                          <td className="border border-gray-300 px-1 py-0.5 text-center">1.5</td>
                          <td className="border border-gray-300 px-1 py-0.5 text-center text-red-600">−0.17</td>
                          <td className="border border-gray-300 px-1 py-0.5 text-center">(1.5, 2)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-1 py-0.5 text-center">2</td>
                          <td className="border border-gray-300 px-1 py-0.5 text-center">1.75</td>
                          <td className="border border-gray-300 px-1 py-0.5 text-center text-blue-600">0.36</td>
                          <td className="border border-gray-300 px-1 py-0.5 text-center">(1.5, 1.75)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-1 py-0.5 text-center">3</td>
                          <td className="border border-gray-300 px-1 py-0.5 text-center">1.625</td>
                          <td className="border border-gray-300 px-1 py-0.5 text-center text-blue-600">0.08</td>
                          <td className="border border-gray-300 px-1 py-0.5 text-center">(1.5, 1.625)</td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="mt-0.5"><strong>结论</strong>：零点 <Math tex="\approx 1.6" />（即 <Math tex="\log_2 3 \approx 1.585" />）</p>
                  </div>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div>
                  <div className="px-1.5 py-0.5 font-bold text-gray-800 border-b border-gray-300 bg-gray-100">实战 2 — 求 <Math tex="e^x = x + 2" /> 在 <Math tex="(-2, 0)" /> 内的近似解</div>
                  <div className="px-3 py-0.5">
                    <p>构造 <Math tex="f(x) = e^x - x - 2" /></p>
                    <p><Math tex="f(-2) = e^{-2} + 2 - 2 = e^{-2} \approx 0.14 > 0" /></p>
                    <p><Math tex="f(0) = 1 - 0 - 2 = -1 < 0" />，异号 ✓</p>
                    <table className="w-full border-collapse mt-0.5">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-300 px-1 py-0.5 text-center">次</th>
                          <th className="border border-gray-300 px-1 py-0.5 text-center"><Math tex="m" /></th>
                          <th className="border border-gray-300 px-1 py-0.5 text-center"><Math tex="f(m)" /></th>
                          <th className="border border-gray-300 px-1 py-0.5 text-center">新区间</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-1 py-0.5 text-center">1</td>
                          <td className="border border-gray-300 px-1 py-0.5 text-center">-1</td>
                          <td className="border border-gray-300 px-1 py-0.5 text-center text-red-600">-0.63</td>
                          <td className="border border-gray-300 px-1 py-0.5 text-center">(-2, -1)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-1 py-0.5 text-center">2</td>
                          <td className="border border-gray-300 px-1 py-0.5 text-center">-1.5</td>
                          <td className="border border-gray-300 px-1 py-0.5 text-center text-red-600">-0.28</td>
                          <td className="border border-gray-300 px-1 py-0.5 text-center">(-2, -1.5)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-1 py-0.5 text-center">3</td>
                          <td className="border border-gray-300 px-1 py-0.5 text-center">-1.75</td>
                          <td className="border border-gray-300 px-1 py-0.5 text-center text-red-600">-0.08</td>
                          <td className="border border-gray-300 px-1 py-0.5 text-center">(-2, -1.75)</td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="mt-0.5"><strong>结论</strong>：零点 <Math tex="\approx -1.8" /></p>
                  </div>
                </div>
              </div>
            </div>

            <PracticeCard
              title=""
              questions={graphPractice3}
              explanations={functionGraphExplanations}
              optionCols={4}
              printOptionCols={4}
            />

            <p>高考一般不会单独考二分法的计算过程，但会考零点存在定理的应用（判断零点所在区间）。</p>
            <p>理解二分法的思想即可，不用死记步骤。</p>

          </div>
        </Collapsible>
      </section>


      <UnifiedDebugToggle />
      {/* 打印模式答案区 */}
      {isPrinting && printOptions.showAnswers && <FunctionGraphAnswers />}

</div>
      </LessonLayout>
    </div>
  );
}
