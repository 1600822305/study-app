import { Math, Collapsible, PageHeader, LessonLayout, ExportButton, PageBreak, PracticeCard, UnifiedDebugToggle } from '@/components/shared';
import { DebugGeo2dSvg } from '@/components/shared/geo2d';
import { functionReviewProgressItems } from './data/3.0/3.0-review-progress';
import { proportionalGraph, linearGraph, inverseGraph } from './data/3.0/3.0-review-diagrams';
import { proportionalFill, linearFill, inverseFill } from './data/3.0/3.0-review-practice';
import { useProgress, usePrintMode } from '@/hooks';


export function FunctionReviewPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('function-review', functionReviewProgressItems);
  usePrintMode();

  return (
    <div>
      <PageHeader
        stage="前置准备"
        variant="prereq"
        title="3.0 初中函数回顾"
        subtitle="高中函数的基础：先把初中四种函数彻底搞清楚"
        tags={[
          { label: '约40分钟', color: 'amber' },
          { label: '初中基础', color: 'green' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden gap-2">
        <UnifiedDebugToggle />
        <ExportButton title="3.0 初中函数回顾" />
      </div>


      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>
        <div className="[&_.rounded-xl]:mb-0 [&_.rounded-xl>.flex.items-center]:py-1 [&_.rounded-xl>div:last-child]:px-0 [&_.rounded-xl>div:last-child]:pt-0 [&_.rounded-xl>div:last-child]:pb-0">

      {/* ═══ 函数是什么 ═══ */}
      <section id="fr-what" className="mb-0 scroll-mt-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-2">
          <p className="text-blue-700"><strong className="text-blue-800">函数是什么？一句话：</strong>给一个 <Math tex="x" /> 的值，就能算出<strong>唯一</strong>一个 <Math tex="y" /> 的值。下面三种函数都满足这个规则。</p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* Section 1: 正比例函数 */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section id="fr-proportional" className="mb-0 scroll-mt-4">
        <Collapsible title="一、正比例函数" defaultOpen storageKey="func-review:proportional">
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100">正比例函数</div>
              <div className="px-3 py-2 border-b border-gray-300">
                <p>一般地，形如 <Math tex="y = kx" />（<Math tex="k" /> 是常数，<Math tex="k \neq 0" />）的函数，叫做<strong>正比例函数</strong>，其中 <Math tex="k" /> 叫做<strong>比例系数</strong>。</p>
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr] border-b border-gray-300">
                <div className="px-3 py-2 space-y-1">
                  <p>✅ <Math tex="y = 2x" />，是正比例函数，<Math tex="k = 2" /></p>
                  <p>✅ <Math tex="y = -3x" />，是正比例函数，<Math tex="k = -3" /></p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="px-3 py-2 space-y-1">
                  <p>❌ <Math tex="y = 2x + 1" />，不是，多了常数项 <Math tex="+1" /></p>
                  <p>❌ <Math tex="y = x^2" />，不是，<Math tex="x" /> 的指数不是 1</p>
                </div>
              </div>
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-300 bg-gray-50">图像：k 决定了什么？</div>
              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center p-2 border-r border-gray-300">
                  <DebugGeo2dSvg data={proportionalGraph} width={180} height={180} />
                </div>
                <div className="px-3 py-2 space-y-1 flex-1">
                  <p><strong>图像特征：</strong>正比例函数的图像一定是<strong>过原点的直线</strong></p>
                  <p className="border-t border-gray-200 pt-1"><strong><Math tex="k" /> 的正负决定方向：</strong></p>
                  <p><span className="inline-block w-3 h-3 rounded-full mr-1 align-middle" style={{ background: '#3b82f6' }}></span><Math tex="k > 0" />，直线经过<strong>一、三象限</strong>，从左下到右上</p>
                  <p><span className="inline-block w-3 h-3 rounded-full mr-1 align-middle" style={{ background: '#ef4444' }}></span><Math tex="k < 0" />，直线经过<strong>二、四象限</strong>，从左上到右下</p>
                  <p className="border-t border-gray-200 pt-1"><strong><Math tex="|k|" /> 的大小决定陡度：</strong></p>
                  <p><span className="inline-block w-3 h-3 rounded-full mr-1 align-middle" style={{ background: '#3b82f6' }}></span><Math tex="k=2" /> 比 <span className="inline-block w-3 h-3 rounded-full mr-1 align-middle" style={{ background: '#22c55e' }}></span><Math tex="k=0.5" /> 更<strong>陡</strong>，因为 <Math tex="|2| > |0.5|" /></p>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100">性质总结</div>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-2 py-1 text-center"></th>
                    <th className="border border-gray-300 px-2 py-1 text-center"><Math tex="k > 0" /></th>
                    <th className="border border-gray-300 px-2 py-1 text-center"><Math tex="k < 0" /></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 font-bold">经过象限</td>
                    <td className="border border-gray-300 px-2 py-1 text-center">一、三象限</td>
                    <td className="border border-gray-300 px-2 py-1 text-center">二、四象限</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 font-bold">增减性</td>
                    <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="y" /> 随 <Math tex="x" /> 增大而<strong>增大</strong></td>
                    <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="y" /> 随 <Math tex="x" /> 增大而<strong>减小</strong></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 font-bold">图像方向</td>
                    <td className="border border-gray-300 px-2 py-1 text-center">从左下到右上</td>
                    <td className="border border-gray-300 px-2 py-1 text-center">从左上到右下</td>
                  </tr>
                </tbody>
              </table>
              <div className="px-3 py-2 border-t border-gray-300">
                <p><strong>共同特征：</strong>图像一定过原点 <Math tex="(0, 0)" />，是一条直线，<Math tex="|k|" /> 越大直线越陡</p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100">实战例题</div>
              <div className="px-3 py-1 border-b border-gray-300 bg-blue-50">
                <p><strong>判断正比例函数的三个条件：</strong>① 形如 <Math tex="y = kx" />，即<strong>只有一次项</strong>，没有常数项；② <Math tex="x" /> 的指数必须是 <strong>1</strong>；③ 系数 <Math tex="k \neq 0" /></p>
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div className="px-3 py-2 space-y-1">
                  <p><strong>例1.</strong> 当 <Math tex="k" /> 为何值时，函数 <Math tex="y = (k - 2)x^{k^2 - 3} + k^2 - 4" /> 是正比例函数？</p>
                  <p className="border-t border-gray-200 pt-1">常数项为 0，即 <Math tex="k^2 - 4 = 0" />，解得 <Math tex="k = 2" /> 或 <Math tex="k = -2" /></p>
                  <p>指数为 1，即 <Math tex="k^2 - 3 = 1" />，解得 <Math tex="k = 2" /> 或 <Math tex="k = -2" /></p>
                  <p>系数不为 0，即 <Math tex="k - 2 \neq 0" />，所以 <Math tex="k \neq 2" /></p>
                  <p>因此 <Math tex="k = -2" />，此时 <Math tex="y = -4x" /></p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="px-3 py-2 space-y-1">
                  <p><strong>例2.</strong> 正比例函数 <Math tex="y = kx" /> 中，当 <Math tex="x" /> 从 1 增加到 3 时，<Math tex="y" /> 增加了 6，求 <Math tex="k" /> 的值，并判断 <Math tex="y" /> 随 <Math tex="x" /> 的增减性</p>
                  <p className="border-t border-gray-200 pt-1">当 <Math tex="x = 1" /> 时 <Math tex="y = k" />，当 <Math tex="x = 3" /> 时 <Math tex="y = 3k" /></p>
                  <p><Math tex="y" /> 增加了 6，即 <Math tex="3k - k = 2k = 6" />，解得 <Math tex="k = 3" /></p>
                  <p>因为 <Math tex="k = 3 > 0" />，所以 <Math tex="y" /> 随 <Math tex="x" /> 增大而<strong>增大</strong></p>
                </div>
              </div>
            </div>

            <PracticeCard questions={proportionalFill} title="" hideBlankLine />

          </div>
        </Collapsible>
      </section>

      <PageBreak label="一次函数" />

      {/* ═══════════════════════════════════════════════════════ */}
      {/* Section 2: 一次函数 */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section id="fr-linear" className="mb-0 scroll-mt-4">
        <Collapsible title="二、一次函数" defaultOpen storageKey="func-review:linear">
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100">一次函数</div>
              <div className="px-3 py-2 border-b border-gray-300">
                <p>一般地，形如 <Math tex="y = kx + b" />（<Math tex="k, b" /> 是常数，<Math tex="k \neq 0" />）的函数，叫做<strong>一次函数</strong>，其中 <Math tex="k" /> 叫做<strong>斜率</strong>，<Math tex="b" /> 叫做<strong>截距</strong>（y 轴截距）</p>
                <p>当 <Math tex="b = 0" /> 时，<Math tex="y = kx + 0 = kx" />，就变成了正比例函数。所以<strong>正比例函数是一次函数的特殊情况</strong></p>
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr] border-b border-gray-300">
                <div className="px-3 py-2 space-y-1">
                  <p>✅ <Math tex="y = 3x + 2" />，是一次函数，<Math tex="k = 3, b = 2" /></p>
                  <p>✅ <Math tex="y = -x + 5" />，是一次函数，<Math tex="k = -1, b = 5" /></p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="px-3 py-2 space-y-1">
                  <p>❌ <Math tex="y = x^2 + 1" />，不是，<Math tex="x" /> 的指数不是 1</p>
                  <p>❌ <Math tex="y = \tfrac{2}{x} + 3" />，不是，<Math tex="x" /> 在分母里</p>
                </div>
              </div>
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-300 bg-gray-50">图像：k 和 b 各决定了什么？</div>
              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center p-2 border-r border-gray-300">
                  <DebugGeo2dSvg data={linearGraph} width={180} height={180} />
                </div>
                <div className="px-3 py-2 space-y-1 flex-1">
                  <p><strong>图像特征：</strong>一次函数的图像是一条<strong>直线</strong>，一定过点 <Math tex="(0, b)" /></p>
                  <p className="border-t border-gray-200 pt-1"><strong><Math tex="k" /> 决定方向（和正比例一样）：</strong></p>
                  <p><span className="inline-block w-3 h-3 rounded-full mr-1 align-middle" style={{ background: '#3b82f6' }}></span><Math tex="k > 0" />，从左下到右上，<Math tex="y" /> 随 <Math tex="x" /> 增大而<strong>增大</strong></p>
                  <p><span className="inline-block w-3 h-3 rounded-full mr-1 align-middle" style={{ background: '#ef4444' }}></span><Math tex="k < 0" />，从左上到右下，<Math tex="y" /> 随 <Math tex="x" /> 增大而<strong>减小</strong></p>
                  <p className="border-t border-gray-200 pt-1"><strong><Math tex="b" /> 决定直线与 y 轴的交点：</strong></p>
                  <p><Math tex="b > 0" />，交点在 y 轴<strong>上方</strong>；<Math tex="b < 0" />，交点在 y 轴<strong>下方</strong>；<Math tex="b = 0" />，过原点</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100">性质总结：图像经过哪些象限？</div>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-2 py-1 text-center">k ╲ b</th>
                    <th className="border border-gray-300 px-2 py-1 text-center"><Math tex="b > 0" /></th>
                    <th className="border border-gray-300 px-2 py-1 text-center"><Math tex="b = 0" /></th>
                    <th className="border border-gray-300 px-2 py-1 text-center"><Math tex="b < 0" /></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 font-bold text-center"><Math tex="k > 0" /></td>
                    <td className="border border-gray-300 px-2 py-1 text-center">一、二、三象限</td>
                    <td className="border border-gray-300 px-2 py-1 text-center">一、三象限</td>
                    <td className="border border-gray-300 px-2 py-1 text-center">一、三、四象限</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 font-bold text-center"><Math tex="k < 0" /></td>
                    <td className="border border-gray-300 px-2 py-1 text-center">一、二、四象限</td>
                    <td className="border border-gray-300 px-2 py-1 text-center">二、四象限</td>
                    <td className="border border-gray-300 px-2 py-1 text-center">二、三、四象限</td>
                  </tr>
                </tbody>
              </table>
              <div className="px-3 py-2 border-t border-gray-300">
                <p><strong>记忆方法：</strong><Math tex="k" /> 决定直线倾斜方向，<Math tex="b" /> 决定直线上下平移。<Math tex="b = 0" /> 那列就是正比例函数</p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100">实战例题</div>
              <div className="px-3 py-1 border-b border-gray-300 bg-blue-50">
                <p><strong>待定系数法求一次函数：</strong>将已知的点坐标代入 <Math tex="y = kx + b" />，列方程组解出 <Math tex="k" /> 和 <Math tex="b" /></p>
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div className="px-3 py-2 space-y-1">
                  <p><strong>例1.</strong> 已知一次函数的图像经过 <Math tex="(1, 3)" /> 和 <Math tex="(3, 7)" />，求函数表达式，并判断图像经过哪些象限</p>
                  <p className="border-t border-gray-200 pt-1"><strong>思路：</strong>两点代入 <Math tex="y = kx + b" />，列方程组解 <Math tex="k" /> 和 <Math tex="b" /></p>
                  <p><strong>第一步</strong>：设 <Math tex="y = kx + b" />，将两个点分别代入</p>
                  <p>代入 <Math tex="(1, 3)" />，得 <Math tex="k + b = 3" /></p>
                  <p>代入 <Math tex="(3, 7)" />，得 <Math tex="3k + b = 7" /></p>
                  <p><strong>第二步</strong>：两式相减，得 <Math tex="2k = 4" />，解得 <Math tex="k = 2" /></p>
                  <p><strong>第三步</strong>：将 <Math tex="k = 2" /> 代入第一个方程，得 <Math tex="b = 1" /></p>
                  <p>所以 <Math tex="y = 2x + 1" />。因为 <Math tex="k > 0, b > 0" /></p>
                  <p>查表知经过<strong>一、二、三象限</strong></p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="px-3 py-2 space-y-1">
                  <p><strong>例2.</strong> 一次函数 <Math tex="y = 2x - 1" /> 和 <Math tex="y = -x + 5" /> 的图像交于点 P，求点 P 的坐标</p>
                  <p className="border-t border-gray-200 pt-1"><strong>思路：</strong>交点就是两条直线上同一个点，这个点的 <Math tex="x" /> 和 <Math tex="y" /> 同时满足两个方程</p>
                  <p><strong>第一步</strong>：令两个函数的 <Math tex="y" /> 相等，得 <Math tex="2x - 1 = -x + 5" /></p>
                  <p><strong>第二步</strong>：移项合并，得 <Math tex="3x = 6" />，解得 <Math tex="x = 2" /></p>
                  <p><strong>第三步</strong>：将 <Math tex="x = 2" /> 代入任意一个函数，得 <Math tex="y = 2 \times 2 - 1 = 3" /></p>
                  <p>因此交点 <Math tex="P(2, 3)" /></p>
                </div>
              </div>
            </div>

            <PracticeCard questions={linearFill} title="" hideBlankLine />

          </div>
        </Collapsible>
      </section>

      <PageBreak label="反比例函数" />

      {/* ═══════════════════════════════════════════════════════ */}
      {/* Section 3: 反比例函数 */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section id="fr-inverse" className="mb-0 scroll-mt-4">
        <Collapsible title="三、反比例函数" defaultOpen storageKey="func-review:inverse">
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100">反比例函数</div>
              <div className="px-3 py-2 border-b border-gray-300">
                <p>一般地，形如 <Math tex="y = \tfrac{k}{x}" />（<Math tex="k" /> 是常数，<Math tex="k \neq 0" />）的函数，叫做<strong>反比例函数</strong></p>
                <p>也可以写成 <Math tex="xy = k" />，即<strong>横坐标乘以纵坐标永远等于 k</strong></p>
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr] border-b border-gray-300">
                <div className="px-3 py-2 space-y-1">
                  <p>✅ <Math tex="y = \tfrac{3}{x}" />，是反比例函数，<Math tex="k = 3" /></p>
                  <p>✅ <Math tex="y = -\tfrac{2}{x}" />，是反比例函数，<Math tex="k = -2" /></p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="px-3 py-2 space-y-1">
                  <p>❌ <Math tex="y = \tfrac{2}{x} + 1" />，不是，多了常数项 <Math tex="+1" /></p>
                  <p>❌ <Math tex="y = 2x" />，不是，<Math tex="x" /> 不在分母里</p>
                </div>
              </div>
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-300 bg-gray-50">图像：k 决定了什么？</div>
              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center p-2 border-r border-gray-300">
                  <DebugGeo2dSvg data={inverseGraph} width={180} height={180} />
                </div>
                <div className="px-3 py-2 space-y-1 flex-1">
                  <p><strong>图像特征：</strong>反比例函数的图像是<strong>双曲线</strong>，有两支，关于原点对称</p>
                  <p className="border-t border-gray-200 pt-1"><strong><Math tex="k" /> 的正负决定位置：</strong></p>
                  <p><span className="inline-block w-3 h-3 rounded-full mr-1 align-middle" style={{ background: '#3b82f6' }}></span><Math tex="k > 0" />，两支分别在<strong>一、三象限</strong></p>
                  <p><span className="inline-block w-3 h-3 rounded-full mr-1 align-middle" style={{ background: '#ef4444' }}></span><Math tex="k < 0" />，两支分别在<strong>二、四象限</strong></p>
                  <p className="border-t border-gray-200 pt-1"><strong><Math tex="|k|" /> 的大小决定远近：</strong></p>
                  <p><span className="inline-block w-3 h-3 rounded-full mr-1 align-middle" style={{ background: '#3b82f6' }}></span><Math tex="k=6" /> 比 <span className="inline-block w-3 h-3 rounded-full mr-1 align-middle" style={{ background: '#22c55e' }}></span><Math tex="k=2" /> 离原点更<strong>远</strong>，因为 <Math tex="|6| > |2|" /></p>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100">性质总结</div>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-2 py-1 text-center"></th>
                    <th className="border border-gray-300 px-2 py-1 text-center"><Math tex="k > 0" /></th>
                    <th className="border border-gray-300 px-2 py-1 text-center"><Math tex="k < 0" /></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 font-bold">经过象限</td>
                    <td className="border border-gray-300 px-2 py-1 text-center">一、三象限</td>
                    <td className="border border-gray-300 px-2 py-1 text-center">二、四象限</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 font-bold">增减性</td>
                    <td className="border border-gray-300 px-2 py-1 text-center">在每个象限内，<Math tex="y" /> 随 <Math tex="x" /> 增大而<strong>减小</strong></td>
                    <td className="border border-gray-300 px-2 py-1 text-center">在每个象限内，<Math tex="y" /> 随 <Math tex="x" /> 增大而<strong>增大</strong></td>
                  </tr>
                </tbody>
              </table>
              <div className="px-3 py-2 border-t border-gray-300">
                <p><strong>共同特征：</strong>图像关于原点对称，以两条坐标轴为渐近线，<Math tex="|k|" /> 越大曲线离原点越远</p>
                <p><strong>注意：</strong>增减性只能在<strong>同一个象限</strong>内讨论，不能跨象限比较</p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-100">实战例题</div>
              <div className="px-3 py-1 border-b border-gray-300 bg-blue-50">
                <p><strong>反比例函数核心性质：</strong>对于图像上任意一点 <Math tex="(x, y)" />，都有 <Math tex="xy = k" />。所以<strong>已知一个点就能求出 k</strong></p>
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div className="px-3 py-2 space-y-1">
                  <p><strong>例1.</strong> 已知 <Math tex="y" /> 与 <Math tex="x" /> 成反比例，且当 <Math tex="x = 3" /> 时 <Math tex="y = -4" />，求函数表达式，并求当 <Math tex="x = -6" /> 时 <Math tex="y" /> 的值</p>
                  <p className="border-t border-gray-200 pt-1"><strong>思路：</strong>先用已知点求 <Math tex="k" />，写出表达式，再代入求值</p>
                  <p><strong>第一步</strong>：<Math tex="y" /> 与 <Math tex="x" /> 成反比例，设 <Math tex="y = \tfrac{k}{x}" />，将 <Math tex="(3, -4)" /> 代入，得 <Math tex="k = 3 \times (-4) = -12" /></p>
                  <p><strong>第二步</strong>：所以函数表达式为 <Math tex="y = \tfrac{-12}{x}" />，因为 <Math tex="k < 0" />，图像在<strong>二、四象限</strong></p>
                  <p><strong>第三步</strong>：当 <Math tex="x = -6" /> 时，<Math tex="y = \tfrac{-12}{-6} = 2" /></p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="px-3 py-2 space-y-1">
                  <p><strong>例2.</strong> 反比例函数 <Math tex="y = \tfrac{k}{x}" /> 的图像经过 <Math tex="A(2, 3)" /> 和 <Math tex="B(a, -2)" /> 两点，求 <Math tex="k" /> 的值和 <Math tex="a" /> 的值，并判断图像经过哪些象限</p>
                  <p className="border-t border-gray-200 pt-1"><strong>思路：</strong>用点 <Math tex="A" /> 求出 <Math tex="k" />，再用 <Math tex="k" /> 求出 <Math tex="a" />，最后根据 <Math tex="k" /> 的正负判断象限</p>
                  <p><strong>第一步</strong>：将 <Math tex="A(2, 3)" /> 代入，得 <Math tex="k = 2 \times 3 = 6" /></p>
                  <p><strong>第二步</strong>：将 <Math tex="B(a, -2)" /> 代入 <Math tex="y = \tfrac{6}{x}" />，得 <Math tex="-2 = \tfrac{6}{a}" />，解得 <Math tex="a = -3" /></p>
                  <p><strong>第三步</strong>：因为 <Math tex="k = 6 > 0" />，图像在<strong>一、三象限</strong>，在每个象限内 <Math tex="y" /> 随 <Math tex="x" /> 增大而<strong>减小</strong></p>
                  <p>验证：<Math tex="A(2, 3)" /> 在第一象限，<Math tex="B(-3, -2)" /> 在第三象限</p>
                </div>
              </div>
            </div>

            <PracticeCard questions={inverseFill} title="" hideBlankLine />

          </div>
        </Collapsible>
      </section>


        </div>
      </LessonLayout>
    </div>
  );
}
