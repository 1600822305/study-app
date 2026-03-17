import { Math, Collapsible, SpeakButton, QuizPanel, PageHeader, LessonLayout, CalloutCard, PracticeCard, ExportButton, PageBreak } from '@/components/shared';
import { Mafs, Coordinates, Plot, Point, Text as MafsText } from 'mafs';
import { graphPrereqNarrations } from './data/graph-prereq-narrations';
import { graphPrereqProgressItems } from './data/graph-prereq-progress';
import { graphPrereqPractice1, graphPrereqPractice2, graphPrereqPractice3 } from './data/graph-prereq-practice';
import { graphPrereqQuizQuestions } from './data/graph-prereq-quiz';
import { useProgress, usePrintMode } from '@/hooks';
import { scrollToId } from '@/lib/scroll';

export function FunctionGraphPrereqPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('graph-prereq', graphPrereqProgressItems);
  const { isPrinting, printOptions } = usePrintMode();

  return (
    <div>
      <PageHeader
        stage="前置准备"
        variant="prereq"
        title="3.2.5 函数图像前置知识"
        narration={graphPrereqNarrations.intro}
        subtitle="坐标系·描点画图·图像平移 — 学函数图像之前必须搞定"
        tags={[
          { label: '约30-40分钟', color: 'amber' },
          { label: '初中基础', color: 'green' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="3.2.5 函数图像前置知识" />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-2 mb-1">
        <p className="font-bold text-gray-800 mb-1">📋 知识地图</p>
        <div className="text-gray-600 space-y-0.5">
          <button onClick={() => scrollToId('gp-coords')} className="block text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">一、坐标系回顾（四象限、描点、对称）</button>
          <button onClick={() => scrollToId('gp-plotting')} className="block text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">二、描点法画函数图像（列表→描点→连线）</button>
          <button onClick={() => scrollToId('gp-translation')} className="block text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">三、图像的平移变换（左加右减、上加下减）</button>
          <button onClick={() => scrollToId('gp-quiz')} className="block text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">四、综合自测（8题）</button>
        </div>
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* Section 1: 坐标系回顾 */}
      {/* ════════════════════════════════════════════════════════════ */}
      <section id="gp-coords" className="mb-2 scroll-mt-4">
        <Collapsible title="一、坐标系回顾 — 🎯 能准确找到平面上任何一个点" defaultOpen storageKey="graph-prereq:coords" headerExtra={<SpeakButton text={graphPrereqNarrations.coordinates} />}>
          <div className="space-y-2 text-gray-700">

            {/* 什么是坐标系 */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-2">
              <p className="leading-7"><strong className="text-amber-800">🗺️ 坐标系 = 数学的"地图"</strong> — 你去过商场找店铺吗？商场每层都有一个平面图，上面标着"B区3号"。坐标系就是数学的平面图，用两个数 <Math tex="(x, y)" /> 就能精确描述平面上任何一个点的位置。</p>
            </div>

            {/* 坐标系结构 */}
            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <div className="flex gap-3 items-start">
                <div className="flex-1 leading-8">
                  <p className="font-bold text-gray-800 mb-1">📖 坐标系的组成</p>
                  <p><strong>横轴（x 轴）</strong>：水平方向，向右为正，向左为负</p>
                  <p><strong>纵轴（y 轴）</strong>：垂直方向，向上为正，向下为负</p>
                  <p><strong>原点 O</strong>：两条轴的交叉点，坐标是 <Math tex="(0, 0)" /></p>
                  <p><strong>四个象限</strong>：两条轴把平面分成 4 个区域</p>
                </div>
                <div style={{ width: 280, flexShrink: 0 }} className="rounded-lg overflow-hidden border border-gray-200">
                  <Mafs viewBox={{ x: [-4, 4], y: [-3, 3] }} height={180}>
                    <Coordinates.Cartesian xAxis={{ lines: false, labels: (n) => n === 0 ? '' : String(n) }} yAxis={{ lines: false, labels: (n) => n === 0 ? '' : String(n) }} />
                    <MafsText x={2} y={2} attach="ne" size={14}>第一象限(+,+)</MafsText>
                    <MafsText x={-2} y={2} attach="nw" size={14}>第二象限(-,+)</MafsText>
                    <MafsText x={-2} y={-2} attach="sw" size={14}>第三象限(-,-)</MafsText>
                    <MafsText x={2} y={-2} attach="se" size={14}>第四象限(+,-)</MafsText>
                    <Point x={0} y={0} color="#ef4444" />
                    <MafsText x={0.3} y={-0.4} size={14}>O</MafsText>
                  </Mafs>
                </div>
              </div>
            </div>

            {/* 四象限速查表 */}
            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-1">📖 四象限速查</p>
              <table className="w-full text-base border-collapse">
                <thead>
                  <tr className="bg-purple-50">
                    <th className="border border-purple-200 px-2 py-1 text-purple-700">象限</th>
                    <th className="border border-purple-200 px-2 py-1 text-center text-purple-700">x 的正负</th>
                    <th className="border border-purple-200 px-2 py-1 text-center text-purple-700">y 的正负</th>
                    <th className="border border-purple-200 px-2 py-1 text-center text-purple-700">位置</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1 font-bold">第一象限</td>
                    <td className="border border-gray-200 px-2 py-1 text-center text-blue-600">+</td>
                    <td className="border border-gray-200 px-2 py-1 text-center text-blue-600">+</td>
                    <td className="border border-gray-200 px-2 py-1 text-center">右上</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-1 font-bold">第二象限</td>
                    <td className="border border-gray-200 px-2 py-1 text-center text-red-600">-</td>
                    <td className="border border-gray-200 px-2 py-1 text-center text-blue-600">+</td>
                    <td className="border border-gray-200 px-2 py-1 text-center">左上</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1 font-bold">第三象限</td>
                    <td className="border border-gray-200 px-2 py-1 text-center text-red-600">-</td>
                    <td className="border border-gray-200 px-2 py-1 text-center text-red-600">-</td>
                    <td className="border border-gray-200 px-2 py-1 text-center">左下</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-1 font-bold">第四象限</td>
                    <td className="border border-gray-200 px-2 py-1 text-center text-blue-600">+</td>
                    <td className="border border-gray-200 px-2 py-1 text-center text-red-600">-</td>
                    <td className="border border-gray-200 px-2 py-1 text-center">右下</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-purple-700 font-bold mt-1 text-center">口诀：从第一象限<strong>逆时针</strong>转 → (+,+) → (-,+) → (-,-) → (+,-)</p>
            </div>

            {/* 特殊位置 */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-2">
              <p className="font-bold text-blue-800 mb-1">📌 坐标轴上的点</p>
              <div className="leading-8">
                <p><strong>在 x 轴上</strong>：<Math tex="y = 0" /> → 例：<Math tex="(3, 0)" />、<Math tex="(-2, 0)" /></p>
                <p><strong>在 y 轴上</strong>：<Math tex="x = 0" /> → 例：<Math tex="(0, 5)" />、<Math tex="(0, -1)" /></p>
                <p><strong>在原点</strong>：<Math tex="x = 0" /> 且 <Math tex="y = 0" /> → <Math tex="(0, 0)" /></p>
                <p className="text-blue-700 font-bold">口诀：<strong>x 为 0 在 y 轴，y 为 0 在 x 轴</strong>（谁为 0 就在对方轴上）</p>
              </div>
            </div>

            {/* 对称 */}
            <PageBreak />
            <div className="bg-green-50 border border-green-200 rounded-xl p-2">
              <p className="font-bold text-green-800 mb-1">📌 三种对称（高频考点！）</p>
              <table className="w-full text-base border-collapse">
                <thead>
                  <tr className="bg-green-100">
                    <th className="border border-green-200 px-2 py-1 text-green-700">对称方式</th>
                    <th className="border border-green-200 px-2 py-1 text-center text-green-700">规则</th>
                    <th className="border border-green-200 px-2 py-1 text-center text-green-700">例子</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1 font-bold">关于 x 轴对称</td>
                    <td className="border border-gray-200 px-2 py-1 text-center">x 不变，<strong>y 变号</strong></td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="(2,3) \to (2,-3)" /></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-1 font-bold">关于 y 轴对称</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><strong>x 变号</strong>，y 不变</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="(2,3) \to (-2,3)" /></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1 font-bold">关于原点对称</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><strong>x、y 都变号</strong></td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="(2,3) \to (-2,-3)" /></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 练习 */}
            <PracticeCard
              title="✏️ 即时练习：坐标系（5题）"
              questions={graphPrereqPractice1}
              printOptionCols={2}
            />

            {/* 描点法预告 + 口诀速记 */}
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-2">
              <p className="font-bold text-purple-800 mb-1">✏️ 描点法画函数图像（三步核心）</p>
              <div className="leading-8">
                <p><strong>第①步 列表</strong>：选定义域内几个易算的 <Math tex="x" />，算出对应 <Math tex="y" />，列成表格</p>
                <p><strong>第②步 描点</strong>：把每一组 <Math tex="(x, y)" /> 标在坐标系里</p>
                <p><strong>第③步 连线</strong>：用平滑曲线（或直线）把点顺次连起来</p>
                <p className="text-purple-700 font-bold mt-1">💡 选点尽量包含<strong>原点、与坐标轴交点</strong>，图像会更准确</p>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-300 rounded-xl p-2">
              <p className="font-bold text-gray-800 mb-1">📌 坐标系核心口诀速记</p>
              <div className="leading-8">
                <p><strong>象限符号</strong>：一(+,+)、二(-,+)、三(-,-)、四(+,-)</p>
                <p><strong>坐标轴</strong>：x 轴 y=0，y 轴 x=0</p>
                <p><strong>对称规则</strong>：x 不变 y 变号（x 轴），x 变号 y 不变（y 轴），都变号（原点）</p>
                <p><strong>描点顺序</strong>：先列表 → 再描点 → 后连线</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* Section 2: 描点法画函数图像 */}
      {/* ════════════════════════════════════════════════════════════ */}
      <PageBreak />
      <section id="gp-plotting" className="mb-2 scroll-mt-4">
        <Collapsible title="二、描点法画函数图像 — 🎯 学会从公式画出图像" defaultOpen storageKey="graph-prereq:plotting" headerExtra={<SpeakButton text={graphPrereqNarrations.plotting} />}>
          <div className="space-y-2 text-gray-700">

            {/* 什么是描点法 */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-2">
              <p className="leading-7"><strong className="text-amber-800">🎨 画函数图像 = 描点连线</strong> — 你有一个函数公式（比如 <Math tex="y = x + 1" />），怎么把它变成一条线？三步：<strong>①列表算点 → ②在坐标系上描出来 → ③用光滑曲线连起来</strong>。就像"连连看"游戏！</p>
            </div>

            {/* 示例1：一次函数 */}
            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-1">📖 示例1：画 <Math tex="y = x + 1" /> 的图像</p>
              <div className="flex gap-3 items-start">
                <div className="flex-1">
                  <p className="font-bold text-gray-700 mb-1">第①步：列值表</p>
                  <table className="w-full text-base border-collapse mb-2">
                    <thead>
                      <tr className="bg-blue-50">
                        <th className="border border-blue-200 px-2 py-1 text-blue-700"><Math tex="x" /></th>
                        <th className="border border-blue-200 px-2 py-1 text-center text-blue-700">-2</th>
                        <th className="border border-blue-200 px-2 py-1 text-center text-blue-700">-1</th>
                        <th className="border border-blue-200 px-2 py-1 text-center text-blue-700">0</th>
                        <th className="border border-blue-200 px-2 py-1 text-center text-blue-700">1</th>
                        <th className="border border-blue-200 px-2 py-1 text-center text-blue-700">2</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 px-2 py-1 font-bold"><Math tex="y = x + 1" /></td>
                        <td className="border border-gray-200 px-2 py-1 text-center">-1</td>
                        <td className="border border-gray-200 px-2 py-1 text-center">0</td>
                        <td className="border border-gray-200 px-2 py-1 text-center">1</td>
                        <td className="border border-gray-200 px-2 py-1 text-center">2</td>
                        <td className="border border-gray-200 px-2 py-1 text-center">3</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="leading-7"><strong>第②步</strong>：把 5 个点描在坐标系上</p>
                  <p className="leading-7"><strong>第③步</strong>：连成一条<strong>直线</strong>（一次函数的图像永远是直线）</p>
                </div>
                <div style={{ width: 220, flexShrink: 0 }} className="rounded-lg overflow-hidden border border-blue-200">
                  <Mafs viewBox={{ x: [-3, 3], y: [-2, 4] }} height={180}>
                    <Coordinates.Cartesian xAxis={{ lines: false, labels: (n) => n === 0 ? '' : String(n) }} yAxis={{ lines: false, labels: (n) => n === 0 ? '' : String(n) }} />
                    <Plot.OfX y={(x: number) => x + 1} color="#3b82f6" weight={2.5} />
                    <Point x={-2} y={-1} color="#ef4444" />
                    <Point x={-1} y={0} color="#ef4444" />
                    <Point x={0} y={1} color="#ef4444" />
                    <Point x={1} y={2} color="#ef4444" />
                    <Point x={2} y={3} color="#ef4444" />
                  </Mafs>
                  <p className="text-center text-gray-500 py-0.5"><Math tex="y = x + 1" /> 的图像</p>
                </div>
              </div>
            </div>

            {/* 示例2：二次函数 */}
            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-1">📖 示例2：画 <Math tex="y = x^2" /> 的图像</p>
              <div className="flex gap-3 items-start">
                <div className="flex-1">
                  <p className="font-bold text-gray-700 mb-1">第①步：列值表</p>
                  <table className="w-full text-base border-collapse mb-2">
                    <thead>
                      <tr className="bg-green-50">
                        <th className="border border-green-200 px-2 py-1 text-green-700"><Math tex="x" /></th>
                        <th className="border border-green-200 px-2 py-1 text-center text-green-700">-2</th>
                        <th className="border border-green-200 px-2 py-1 text-center text-green-700">-1</th>
                        <th className="border border-green-200 px-2 py-1 text-center text-green-700">0</th>
                        <th className="border border-green-200 px-2 py-1 text-center text-green-700">1</th>
                        <th className="border border-green-200 px-2 py-1 text-center text-green-700">2</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 px-2 py-1 font-bold"><Math tex="y = x^2" /></td>
                        <td className="border border-gray-200 px-2 py-1 text-center">4</td>
                        <td className="border border-gray-200 px-2 py-1 text-center">1</td>
                        <td className="border border-gray-200 px-2 py-1 text-center">0</td>
                        <td className="border border-gray-200 px-2 py-1 text-center">1</td>
                        <td className="border border-gray-200 px-2 py-1 text-center">4</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="leading-7"><strong>第②步</strong>：描出 5 个点</p>
                  <p className="leading-7"><strong>第③步</strong>：连成光滑<strong>曲线</strong>（不是直线！）</p>
                  <p className="leading-7 text-green-700 font-bold">注意：<Math tex="(-2)^2 = 4" />，负数的平方是正数！</p>
                </div>
                <div style={{ width: 220, flexShrink: 0 }} className="rounded-lg overflow-hidden border border-green-200">
                  <Mafs viewBox={{ x: [-3, 3], y: [-1, 5] }} height={180}>
                    <Coordinates.Cartesian xAxis={{ lines: false, labels: (n) => n === 0 ? '' : String(n) }} yAxis={{ lines: false, labels: (n) => n === 0 ? '' : String(n) }} />
                    <Plot.OfX y={(x: number) => x * x} color="#22c55e" weight={2.5} />
                    <Point x={-2} y={4} color="#ef4444" />
                    <Point x={-1} y={1} color="#ef4444" />
                    <Point x={0} y={0} color="#ef4444" />
                    <Point x={1} y={1} color="#ef4444" />
                    <Point x={2} y={4} color="#ef4444" />
                  </Mafs>
                  <p className="text-center text-gray-500 py-0.5"><Math tex="y = x^2" /> 的图像（抛物线）</p>
                </div>
              </div>
            </div>

            {/* 从图像读信息 */}
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-2">
              <p className="font-bold text-purple-800 mb-1">💎 从图像上能读出什么信息？</p>
              <div className="leading-8">
                <p><strong>与 x 轴的交点</strong>：令 <Math tex="y = 0" />，解出 x → 例：<Math tex="y = x + 1" /> 与 x 轴交于 <Math tex="(-1, 0)" /></p>
                <p><strong>与 y 轴的交点</strong>：令 <Math tex="x = 0" />，算出 y → 例：<Math tex="y = x + 1" /> 与 y 轴交于 <Math tex="(0, 1)" /></p>
                <p><strong>增减性</strong>：图像从左往右看，<strong>上升 = 增函数</strong>，<strong>下降 = 减函数</strong></p>
                <p><strong>最值</strong>：<Math tex="y = x^2" /> 的图像有一个最低点 <Math tex="(0, 0)" />，所以最小值是 0</p>
              </div>
            </div>

            {/* 读图小技巧 */}
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-2">
              <p className="font-bold text-indigo-800 mb-1">📌 读图口诀</p>
              <div className="grid grid-cols-2 gap-4 leading-8">
                <div>
                  <p><strong>看趋势</strong>：从左到右，上升还是下降？</p>
                  <p><strong>看交点</strong>：和两条轴分别交在哪？</p>
                </div>
                <div>
                  <p><strong>看极值</strong>：有没有最高点或最低点？</p>
                  <p><strong>看对称</strong>：图像是否左右对称？</p>
                </div>
              </div>
            </div>

            {/* 练习 */}
            <PageBreak />
            <PracticeCard
              title="✏️ 即时练习：描点画图（7题）"
              questions={graphPrereqPractice2}
              printOptionCols={2}
            />

            <CalloutCard variant="warning" title="⚠️ 易错提醒" compact>
              <div className="space-y-0.5">
                <p><strong>负数的平方是正数！</strong> <Math tex="(-3)^2 = 9" />，不是 <Math tex="-9" />（先平方再加负号才是 <Math tex="-9" />）</p>
                <p><strong>与 x 轴交点：y = 0！</strong> 不是 x = 0。很多同学搞反了</p>
                <p><strong>描的点越多越准！</strong> 至少描 5 个点，特别是转折点附近要多描几个</p>
              </div>
            </CalloutCard>

            <div className="bg-gray-50 border border-gray-300 rounded-xl p-2">
              <p className="font-bold text-gray-800 mb-1">📌 描点法速查</p>
              <div className="leading-8">
                <p><strong>一次函数</strong> <Math tex="y = kx + b" />：图像是直线，描 2 个点就够</p>
                <p><strong>二次函数</strong> <Math tex="y = ax^2 + bx + c" />：图像是抛物线，至少描 5 个点（含顶点）</p>
                <p><strong>交点速算</strong>：与 x 轴交点令 <Math tex="y = 0" />，与 y 轴交点令 <Math tex="x = 0" /></p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* Section 3: 图像的平移变换 */}
      {/* ════════════════════════════════════════════════════════════ */}
      <PageBreak />
      <section id="gp-translation" className="mb-2 scroll-mt-4">
        <Collapsible title="三、图像的平移变换 — 🎯 掌握左加右减、上加下减" defaultOpen storageKey="graph-prereq:translation" headerExtra={<SpeakButton text={graphPrereqNarrations.translation} />}>
          <div className="space-y-2 text-gray-700">

            {/* 什么是平移 */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-2">
              <p className="leading-7"><strong className="text-amber-800">📐 平移 = 整个图像"搬家"</strong> — 形状不变，只是位置变了。就像你在手机屏幕上滑动一张图片，图片本身没变，只是挪了个位置。高考经常考"把一个函数图像平移后得到什么函数"。</p>
            </div>

            {/* 上下平移 + 左右平移（合并卡片） */}
            <div className="bg-white rounded-xl border border-gray-200 p-2 space-y-1">
              {/* 上下平移 */}
              <div className="flex gap-3 items-start">
                <div className="flex-1 leading-8">
                  <p className="font-bold text-gray-800 mb-1">📖 上下平移（改的是 y）</p>
                  <p><strong>向上平移 k 个单位</strong>：<Math tex="y = f(x)" /> → <Math tex="y = f(x) + k" /></p>
                  <p><strong>向下平移 k 个单位</strong>：<Math tex="y = f(x)" /> → <Math tex="y = f(x) - k" /></p>
                  <p className="text-blue-700 font-bold mt-1">口诀：<strong>上加下减，变的是整个式子后面的数</strong></p>
                  <p className="mt-1">例：<Math tex="y = x^2" /> 向上移 2</p>
                  <p>→ <Math tex="y = x^2 + 2" />（每个点的 y 坐标都 +2）</p>
                </div>
                <div style={{ width: 220, flexShrink: 0 }} className="rounded-lg overflow-hidden border border-blue-200">
                  <Mafs viewBox={{ x: [-3, 3], y: [-1, 6] }} height={160}>
                    <Coordinates.Cartesian xAxis={{ lines: false, labels: (n) => n === 0 ? '' : String(n) }} yAxis={{ lines: false, labels: (n) => n === 0 ? '' : String(n) }} />
                    <Plot.OfX y={(x: number) => x * x} color="#94a3b8" weight={2} />
                    <Plot.OfX y={(x: number) => x * x + 2} color="#3b82f6" weight={2.5} />
                    <Point x={0} y={0} color="#94a3b8" />
                    <Point x={0} y={2} color="#3b82f6" />
                  </Mafs>
                  <p className="text-center text-gray-500 py-0.5">灰色：<Math tex="y = x^2" />　蓝色：<Math tex="y = x^2 + 2" /></p>
                </div>
              </div>
              <hr className="border-gray-200" />
              {/* 左右平移 */}
              <div className="flex gap-3 items-start">
                <div className="flex-1 leading-8">
                  <p className="font-bold text-gray-800 mb-1">📖 左右平移（改的是 x）</p>
                  <p><strong>向左平移 k 个单位</strong>：<Math tex="y = f(x)" /> → <Math tex="y = f(x + k)" /></p>
                  <p><strong>向右平移 k 个单位</strong>：<Math tex="y = f(x)" /> → <Math tex="y = f(x - k)" /></p>
                  <p className="text-green-700 font-bold mt-1">口诀：<strong>左加右减，变的是 x 旁边的数</strong></p>
                  <p className="mt-1">例：<Math tex="y = x^2" /> 向右移 2</p>
                  <p>→ <Math tex="y = (x - 2)^2" />（注意是 <strong>减</strong> 2！）</p>
                </div>
                <div style={{ width: 220, flexShrink: 0 }} className="rounded-lg overflow-hidden border border-green-200">
                  <Mafs viewBox={{ x: [-2, 5], y: [-1, 5] }} height={160}>
                    <Coordinates.Cartesian xAxis={{ lines: false, labels: (n) => n === 0 ? '' : String(n) }} yAxis={{ lines: false, labels: (n) => n === 0 ? '' : String(n) }} />
                    <Plot.OfX y={(x: number) => x * x} color="#94a3b8" weight={2} />
                    <Plot.OfX y={(x: number) => (x - 2) * (x - 2)} color="#22c55e" weight={2.5} />
                    <Point x={0} y={0} color="#94a3b8" />
                    <Point x={2} y={0} color="#22c55e" />
                  </Mafs>
                  <p className="text-center text-gray-500 py-0.5">灰色：<Math tex="y = x^2" />　绿色：<Math tex="y = (x-2)^2" /></p>
                </div>
              </div>
            </div>

            {/* 为什么是"反的"？ */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-2">
              <p className="font-bold text-red-800 mb-1">❓ 为什么左右平移是"反的"？（最常考的坑！）</p>
              <div className="leading-8">
                <p>很多同学觉得奇怪：向右移应该 +，为什么公式里是 -？</p>
                <p className="mt-1"><strong>🪑 用"换座位"来理解：</strong></p>
                <p>想象你坐在教室第 0 号座位，老师说"全班往右挪 2 个座位"。</p>
                <p>你现在坐到了第 2 号座位，但老师点名还是叫"第 0 号的同学"。</p>
                <p>你要<strong>把自己的座位号减掉 2</strong>，才能对上原来的名字：<Math tex="2 - 2 = 0" />。</p>
                <p className="mt-1"><strong>📐 用抛物线验证：</strong></p>
                <p><Math tex="y = x^2" /> 最低点在 <Math tex="x = 0" />。右移 2 后最低点到了 <Math tex="x = 2" />。</p>
                <p>要让 <Math tex="x = 2" /> 时算出来和原来 <Math tex="x = 0" /> 一样的值，就得先"退回去"：<Math tex="(2 - 2)^2 = 0" />。</p>
                <p>所以公式写成 <Math tex="y = (x - 2)^2" />。<strong>减 2 就是"退回去 2 步"。</strong></p>
                <p className="text-red-700 font-bold mt-1">一句话：<strong>图像往右走了，x 就得往回减，才能找到原来的 y 值</strong></p>
              </div>
            </div>

            {/* 综合平移 */}
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-2">
              <p className="font-bold text-indigo-800 mb-1">💡 综合平移（先左右再上下，或反过来都行）</p>
              <div className="leading-8">
                <p><strong>例题</strong>：将 <Math tex="y = x^2" /> 向右移 1，再向上移 3，得到什么？</p>
                <p className="ml-4">第①步 右移 1：<Math tex="y = x^2" /> → <Math tex="y = (x - 1)^2" /></p>
                <p className="ml-4">第②步 上移 3：<Math tex="y = (x - 1)^2" /> → <Math tex="y = (x - 1)^2 + 3" /></p>
                <p className="text-indigo-700 font-bold">顶点从 <Math tex="(0, 0)" /> → <Math tex="(1, 3)" /></p>
              </div>
            </div>

            {/* 总结速查表 */}
            <PageBreak />
            <div className="bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-300 rounded-xl p-2">
              <p className="font-bold text-blue-800 mb-1">📋 平移变换速查表</p>
              <table className="w-full text-base border-collapse">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="border border-blue-200 px-2 py-1 text-blue-700">操作</th>
                    <th className="border border-blue-200 px-2 py-1 text-center text-blue-700">公式变化</th>
                    <th className="border border-blue-200 px-2 py-1 text-center text-blue-700">口诀</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1 font-bold">向上移 k</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="y = f(x) + k" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center text-blue-600">上<strong>加</strong></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-1 font-bold">向下移 k</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="y = f(x) - k" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center text-blue-600">下<strong>减</strong></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1 font-bold">向左移 k</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="y = f(x + k)" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center text-green-600">左<strong>加</strong></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-1 font-bold">向右移 k</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="y = f(x - k)" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center text-green-600">右<strong>减</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 练习 */}
            <PracticeCard
              title="✏️ 即时练习：图像平移（7题）"
              questions={graphPrereqPractice3}
              printOptionCols={2}
            />

            <CalloutCard variant="warning" title="⚠️ 易错提醒" compact>
              <div className="space-y-0.5">
                <p><strong>左右平移和直觉相反！</strong> 向右移 → 公式里 x <strong>减</strong>，向左移 → x <strong>加</strong>。记住"左加右减"</p>
                <p><strong>上下平移很直观！</strong> 向上移 → +k，向下移 → -k，这个和直觉一致</p>
                <p><strong>平移不改变形状！</strong> 只改变位置，曲线的弯曲程度、开口大小都不变</p>
              </div>
            </CalloutCard>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* Section 4: 综合自测 */}
      {/* ════════════════════════════════════════════════════════════ */}
      <PageBreak />
      <section id="gp-quiz" className="mb-2 scroll-mt-4">
        <Collapsible title="四、综合自测（8题）— 全对可进入下一章，错2题以上回看对应节" defaultOpen storageKey="graph-prereq:quiz">
          <QuizPanel questions={graphPrereqQuizQuestions} module="graph-prereq-quiz" />
        </Collapsible>
      </section>

      {/* 速查表 */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-2 mt-1">
        <p className="font-bold text-indigo-800 mb-1">📌 总速查表（打印贴墙上）</p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 leading-7 text-gray-700">
          <p><strong>x 为 0 在 y 轴</strong>，y 为 0 在 x 轴</p>
          <p><strong>四象限</strong>：(+,+) (-,+) (-,-) (+,-) 逆时针</p>
          <p><strong>x 轴对称</strong>：y 变号</p>
          <p><strong>y 轴对称</strong>：x 变号</p>
          <p><strong>原点对称</strong>：x、y 都变号</p>
          <p><strong>画图三步</strong>：列表→描点→连线</p>
          <p><strong>左加右减</strong>变 x 旁边的数（和直觉反！）</p>
          <p><strong>上加下减</strong>变式子后面的数（和直觉同！）</p>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* 打印模式答案区 */}
      {/* ════════════════════════════════════════════════════════════ */}
      {isPrinting && printOptions.showAnswers && (
        <>
          <PageBreak label="答案与解析" />
          <section className="print-answers">
            <h2 className="text-xl font-bold text-gray-900 mb-4">📝 3.2.5 函数图像前置知识 — 答案与解析</h2>

            <div className="mb-4">
              <h3 className="font-bold text-gray-800 mb-2">即时练习答案</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-bold text-gray-700 mb-2">第一节：坐标系回顾</p>
                  <div className="grid grid-cols-2 gap-2">
                    {graphPrereqPractice1.map((q, i) => {
                      const isLatex = q.options?.find(o => o.value === q.correctAnswer)?.isLatex;
                      return (
                        <div key={q.id} className="text-gray-700" style={{ breakInside: 'avoid' }}>
                          <p><strong>{i + 1}. 答案：{isLatex ? <Math tex={q.correctAnswer} /> : q.correctAnswer}</strong></p>
                          {q.explanationLatex && <p><Math tex={q.explanationLatex} /></p>}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <p className="font-bold text-gray-700 mb-2">第二节：描点法画图</p>
                  <div className="grid grid-cols-2 gap-2">
                    {graphPrereqPractice2.map((q, i) => {
                      const isLatex = q.options?.find(o => o.value === q.correctAnswer)?.isLatex;
                      return (
                        <div key={q.id} className="text-gray-700" style={{ breakInside: 'avoid' }}>
                          <p><strong>{i + 1}. 答案：{isLatex ? <Math tex={q.correctAnswer} /> : q.correctAnswer}</strong></p>
                          {q.explanationLatex && <p><Math tex={q.explanationLatex} /></p>}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <p className="font-bold text-gray-700 mb-2">第三节：图像平移变换</p>
                  <div className="grid grid-cols-2 gap-2">
                    {graphPrereqPractice3.map((q, i) => {
                      const isLatex = q.options?.find(o => o.value === q.correctAnswer)?.isLatex;
                      return (
                        <div key={q.id} className="text-gray-700" style={{ breakInside: 'avoid' }}>
                          <p><strong>{i + 1}. 答案：{isLatex ? <Math tex={q.correctAnswer} /> : q.correctAnswer}</strong></p>
                          {q.explanationLatex && <p><Math tex={q.explanationLatex} /></p>}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-2">自测题答案</h3>
              <div className="grid grid-cols-2 gap-2">
                {graphPrereqQuizQuestions.map((q, i) => {
                  const isLatex = q.options?.find(o => o.value === q.correctAnswer)?.isLatex;
                  return (
                    <div key={q.id} className="text-gray-700" style={{ breakInside: 'avoid' }}>
                      <p><strong>{i + 1}. 答案：{isLatex ? <Math tex={q.correctAnswer} /> : q.correctAnswer}</strong></p>
                      {q.explanationLatex && <p><Math tex={q.explanationLatex} /></p>}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </>
      )}

      </LessonLayout>
    </div>
  );
}
