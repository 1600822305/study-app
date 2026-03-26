import { Mafs, Coordinates, Plot, Point, Text as MafsText } from 'mafs';
import { Math, Collapsible, SpeakButton, PageHeader, LessonLayout, ExportButton, PageBreak } from '@/components/shared';
import { functionReviewNarrations } from './data/3.0/3.0-review-narrations';
import { functionReviewProgressItems } from './data/3.0/3.0-review-progress';
import { useProgress, usePrintMode } from '@/hooks';
import { scrollToId } from '@/lib/scroll';

export function FunctionReviewPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('function-review', functionReviewProgressItems);
  usePrintMode();

  return (
    <div>
      <PageHeader
        stage="前置准备"
        variant="prereq"
        title="3.0 初中函数回顾"
        narration={functionReviewNarrations.intro}
        subtitle="高中函数的基础：先把初中四种函数彻底搞清楚"
        tags={[
          { label: '约40分钟', color: 'amber' },
          { label: '初中基础', color: 'green' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="3.0 初中函数回顾" />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-2 mb-1">
        <p className="font-bold text-gray-800 mb-1">📋 知识地图</p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 text-gray-600">
          <button onClick={() => scrollToId('fr-what')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors col-span-2">〇、函数到底是什么（一句话搞定）</button>
          <button onClick={() => scrollToId('fr-proportional')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">一、正比例函数 y = kx</button>
          <button onClick={() => scrollToId('fr-linear')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">二、一次函数 y = kx + b</button>
          <button onClick={() => scrollToId('fr-inverse')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">三、反比例函数 y = k/x</button>
          <button onClick={() => scrollToId('fr-quadratic')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">四、二次函数 y = ax² + bx + c</button>
        </div>
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      {/* ═══ 函数是什么 ═══ */}
      <section id="fr-what" className="mb-1 scroll-mt-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-2">
          <p className="text-blue-700"><strong className="text-blue-800">函数是什么？一句话：</strong>给一个 <Math tex="x" /> 的值，就能算出<strong>唯一</strong>一个 <Math tex="y" /> 的值。下面四种函数都满足这个规则。</p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* Section 1: 正比例函数 */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section id="fr-proportional" className="mb-2 scroll-mt-4">
        <Collapsible title="一、正比例函数" defaultOpen storageKey="func-review:proportional" headerExtra={<SpeakButton text={functionReviewNarrations.proportional} />}>
          <div className="space-y-1.5 text-gray-700">

            {/* Step 1: 生活场景引入 */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-2">
              <p className="leading-7"><strong className="text-amber-800">🍎 场景：买苹果</strong> — 苹果<strong>每斤 3 元</strong>。买 <Math tex="x" /> 斤，花 <Math tex="y" /> 元。你能算出下面的表格吗？</p>
            </div>

            {/* Step 1 + Step 2: 左右各半 */}
            <div className="grid gap-2" style={{ gridTemplateColumns: '3fr 2fr' }}>
              <div className="bg-white rounded-xl border border-gray-200 p-2 flex flex-col">
                <p className="font-bold text-gray-800 mb-1">📊 Step 1：列表算一算</p>
                <table className="w-full text-base border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-orange-200 px-1.5 py-0.5 text-center text-orange-700"><Math tex="y" /> 元</th>
                      <th className="border border-orange-200 px-1.5 py-0.5 text-center">3</th>
                      <th className="border border-orange-200 px-1.5 py-0.5 text-center">6</th>
                      <th className="border border-orange-200 px-1.5 py-0.5 text-center">9</th>
                      <th className="border border-orange-200 px-1.5 py-0.5 text-center">12</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-1.5 py-0.5 text-center font-bold text-orange-700"><Math tex="x" /> 斤</td>
                      <td className="border border-gray-200 px-1.5 py-0.5 text-center">1</td>
                      <td className="border border-gray-200 px-1.5 py-0.5 text-center">2</td>
                      <td className="border border-gray-200 px-1.5 py-0.5 text-center">3</td>
                      <td className="border border-gray-200 px-1.5 py-0.5 text-center">4</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="border border-green-200 px-1.5 py-0.5 text-center font-bold text-green-700"><Math tex="\dfrac{y}{x}" /></td>
                      <td className="border border-green-200 px-1.5 py-0.5 text-center text-green-700">3</td>
                      <td className="border border-green-200 px-1.5 py-0.5 text-center text-green-700">3</td>
                      <td className="border border-green-200 px-1.5 py-0.5 text-center text-green-700">3</td>
                      <td className="border border-green-200 px-1.5 py-0.5 text-center text-green-700">3</td>
                    </tr>
                  </tbody>
                </table>
                <div className="flex-1 flex items-center mt-1">
                  <p className="text-green-700 font-bold text-lg">💡 <Math tex="\dfrac{y}{x}" /> 永远 = 3！<strong>比值不变</strong></p>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-2">
                <p className="font-bold text-orange-800 mb-0.5">✨ Step 2：从表格到公式</p>
                <div className="leading-7">
                  <p><Math tex="\dfrac{y}{x} = 3" /> 永远成立 → 两边乘 <Math tex="x" />：</p>
                  <p className="text-center text-lg font-bold text-orange-800 my-1"><Math tex="y = 3x" /></p>
                  <p>把 3 换成常数 <Math tex="k" />：</p>
                  <p className="text-center text-xl font-bold text-orange-800 my-1"><Math tex="y = kx" />（<Math tex="k \neq 0" />）</p>
                  <p><Math tex="k" /> = <strong>比例系数</strong>（每份多少）</p>
                </div>
              </div>
            </div>

            {/* Step 4: 描点画图 + 看图说话 */}
            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-1">📈 Step 3：把表格变成图</p>
              <div className="flex gap-3 items-start">
                <div className="flex-1 leading-7">
                  <p>把表格里的每对 <Math tex="(x, y)" /> 当成一个<strong>点</strong>，标在坐标系上：</p>
                  <p className="mt-1">• (1, 3)、(2, 6)、(3, 9)……</p>
                  <p>• 把这些点<strong>连起来</strong> → 一条<strong>直线</strong>！</p>
                  <p>• 这条直线<strong>一定过原点</strong> (0,0)（买0斤花0元）</p>
                  <p className="mt-1 text-green-700 font-bold">✅ 结论：正比例函数的图像 = 过原点的直线</p>
                </div>
                <div style={{ width: 200, flexShrink: 0 }}>
                  <Mafs viewBox={{ x: [-0.5, 4.5], y: [-1, 10] }} height={180}>
                    <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
                    <Plot.OfX y={(x) => 3 * x} color="#3b82f6" weight={3} />
                    <Point x={0} y={0} color="#3b82f6" />
                    <Point x={1} y={3} color="#f59e0b" />
                    <Point x={2} y={6} color="#f59e0b" />
                    <Point x={3} y={9} color="#f59e0b" />
                    <MafsText x={1.6} y={3.8} size={13}>(1,3)</MafsText>
                    <MafsText x={2.6} y={6.8} size={13}>(2,6)</MafsText>
                    <MafsText x={3.5} y={9.7} size={13}>(3,9)</MafsText>
                  </Mafs>
                </div>
              </div>
            </div>

            {/* Step 5: k 的作用 */}
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-2">
              <p className="font-bold text-purple-800 mb-1">🔑 Step 4：<Math tex="k" /> 决定了什么？（看图对比）</p>
              <div className="flex gap-3 items-start">
                <div style={{ width: 220, flexShrink: 0 }}>
                  <Mafs viewBox={{ x: [-4, 4], y: [-4, 4] }} height={180}>
                    <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
                    <Plot.OfX y={(x) => 2 * x} color="#3b82f6" weight={3} />
                    <Plot.OfX y={(x) => 0.5 * x} color="#22c55e" weight={3} />
                    <Plot.OfX y={(x) => -x} color="#ef4444" weight={3} />
                    <MafsText x={1.2} y={3.5} size={14}>k=2 陡</MafsText>
                    <MafsText x={3} y={2} size={14}>k=0.5 平</MafsText>
                    <MafsText x={2.5} y={-1.8} size={14}>k=-1</MafsText>
                  </Mafs>
                </div>
                <div className="flex-1 leading-8">
                  <p><span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-1 align-middle"></span> <strong className="text-blue-600">蓝线 k=2</strong>：很陡，涨得快（每斤2元）</p>
                  <p><span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-1 align-middle"></span> <strong className="text-green-600">绿线 k=0.5</strong>：很平，涨得慢（每斤5毛）</p>
                  <p className="text-green-700 mt-0.5">→ <Math tex="|k|" /> 越大 = 线越<strong>陡</strong></p>
                  <p className="mt-1"><span className="inline-block w-3 h-3 rounded-full bg-red-500 mr-1 align-middle"></span> <strong className="text-red-600">红线 k=-1</strong>：往<strong>右下走</strong>！</p>
                  <p className="text-red-700 mt-0.5">→ <Math tex="k" /> 为负 = 线<strong>下降</strong></p>
                  <p className="mt-1 text-amber-700">⚠️ 三条线都<strong>过原点</strong>（正比例标志）</p>
                </div>
              </div>
            </div>


          </div>
        </Collapsible>
      </section>

      <PageBreak label="一次函数" />

      {/* ═══════════════════════════════════════════════════════ */}
      {/* Section 2: 一次函数 */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section id="fr-linear" className="mb-2 scroll-mt-4">
        <Collapsible title="二、一次函数" defaultOpen storageKey="func-review:linear" headerExtra={<SpeakButton text={functionReviewNarrations.linear} />}>
          <div className="space-y-1.5 text-gray-700">

            {/* Step 1: 生活场景 */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-2">
              <p className="leading-7"><strong className="text-amber-800">🚕 场景：打出租车</strong> — <strong>起步价 5 元</strong>，之后<strong>每公里 2 元</strong>。坐 <Math tex="x" /> 公里，花 <Math tex="y" /> 元。</p>
            </div>

            {/* Step 1 + Step 2: 左右 3:2 */}
            <div className="grid gap-2" style={{ gridTemplateColumns: '3fr 2fr' }}>
              <div className="bg-white rounded-xl border border-gray-200 p-2 flex flex-col">
                <p className="font-bold text-gray-800 mb-1">📊 Step 1：列表算一算</p>
                <table className="w-full text-base border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-orange-200 px-1.5 py-0.5 text-center text-orange-700"><Math tex="x" /> 公里</th>
                      <th className="border border-orange-200 px-1.5 py-0.5 text-center">0</th>
                      <th className="border border-orange-200 px-1.5 py-0.5 text-center">1</th>
                      <th className="border border-orange-200 px-1.5 py-0.5 text-center">2</th>
                      <th className="border border-orange-200 px-1.5 py-0.5 text-center">3</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-1.5 py-0.5 text-center font-bold text-orange-700"><Math tex="y" /> 元</td>
                      <td className="border border-gray-200 px-1.5 py-0.5 text-center font-bold text-amber-600">5</td>
                      <td className="border border-gray-200 px-1.5 py-0.5 text-center">7</td>
                      <td className="border border-gray-200 px-1.5 py-0.5 text-center">9</td>
                      <td className="border border-gray-200 px-1.5 py-0.5 text-center">11</td>
                    </tr>
                  </tbody>
                </table>
                <div className="flex-1 flex items-center mt-1">
                  <p className="text-green-700 font-bold text-lg">💡 没坐也要 <strong>5 元</strong>！每多 1 公里 +2 元</p>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-2">
                <p className="font-bold text-orange-800 mb-0.5">✨ Step 2：写公式</p>
                <div className="leading-7">
                  <p>起步价 5 + 每公里 2 × 公里数：</p>
                  <p className="text-center text-lg font-bold text-orange-800 my-1"><Math tex="y = 2x + 5" /></p>
                  <p>换成通用形式：</p>
                  <p className="text-center text-xl font-bold text-orange-800 my-1"><Math tex="y = kx + b" /></p>
                  <p><Math tex="k" /> = 每份多少，<Math tex="b" /> = 起步价</p>
                </div>
              </div>
            </div>

            {/* Step 3: 与正比例对比 */}
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-2">
              <p className="font-bold text-purple-800 mb-1">🔑 Step 3：和正比例函数有啥区别？</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="leading-7">
                  <p className="font-bold text-blue-700">🍎 买苹果（正比例）</p>
                  <p><Math tex="y = 2x" /></p>
                  <p>没买 = <strong>0 元</strong>（过原点）</p>
                  <p><Math tex="b = 0" /></p>
                </div>
                <div className="leading-7">
                  <p className="font-bold text-amber-700">🚕 打出租（一次函数）</p>
                  <p><Math tex="y = 2x + 5" /></p>
                  <p>没坐 = <strong>5 元</strong>（不过原点）</p>
                  <p><Math tex="b = 5" />（起步价）</p>
                </div>
              </div>
              <p className="text-purple-700 font-bold mt-1">👉 一次函数 = 正比例函数 + 一个<strong>起步价 <Math tex="b" /></strong>。当 <Math tex="b = 0" /> 时，就变回正比例！</p>
            </div>

            {/* Step 4: 描点画图 */}
            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-1">📈 Step 4：画图看 <Math tex="b" /> 在哪</p>
              <div className="flex gap-3 items-start">
                <div className="flex-1 leading-7">
                  <p>同样把表格的点标上去：</p>
                  <p>• (0,<strong>5</strong>)、(1,7)、(2,9)、(3,11)</p>
                  <p>• 连起来还是<strong>直线</strong>！</p>
                  <p>• 但这次<strong>不过原点</strong>，而是从 <Math tex="y = 5" /> 开始</p>
                  <p className="mt-1">⭐ <strong>黄点 (0,5)</strong> 就是 <Math tex="b" /> 的位置</p>
                  <p className="text-green-700 font-bold">✅ <Math tex="b" /> = 线和 y 轴的交点（叫"截距"）</p>
                </div>
                <div style={{ width: 220, flexShrink: 0 }}>
                  <Mafs viewBox={{ x: [-0.5, 4], y: [-0.5, 12.5] }} height={200}>
                    <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
                    <Plot.OfX y={(x) => 2 * x + 5} color="#3b82f6" weight={3} />
                    <Point x={0} y={5} color="#f59e0b" />
                    <Point x={1} y={7} color="#f59e0b" />
                    <Point x={3} y={11} color="#f59e0b" />
                    <MafsText x={0.6} y={4} size={14}>b=5</MafsText>
                    <MafsText x={1.6} y={7.8} size={13}>(1,7)</MafsText>
                    <MafsText x={3.2} y={10} size={13}>(3,11)</MafsText>
                  </Mafs>
                </div>
              </div>
            </div>

            {/* Step 5: k和b各自的作用 */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-2">
              <p className="font-bold text-green-800 mb-1">🎯 Step 5：<Math tex="k" /> 和 <Math tex="b" /> 各管什么？</p>
              <div className="flex gap-3 items-start">
                <div style={{ width: 200, flexShrink: 0 }}>
                  <Mafs viewBox={{ x: [-3, 4], y: [-3, 7] }} height={160}>
                    <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
                    <Plot.OfX y={(x) => x + 2} color="#3b82f6" weight={3} />
                    <Plot.OfX y={(x) => x - 1} color="#22c55e" weight={3} />
                    <Plot.OfX y={(x) => -x + 3} color="#ef4444" weight={3} />
                    <Point x={0} y={2} color="#3b82f6" />
                    <Point x={0} y={-1} color="#22c55e" />
                    <Point x={0} y={3} color="#ef4444" />
                    <MafsText x={2.5} y={5} size={12}>b=2</MafsText>
                    <MafsText x={2.5} y={1.2} size={12}>b=-1</MafsText>
                    <MafsText x={-2} y={5.5} size={12}>{'k<0'}</MafsText>
                  </Mafs>
                </div>
                <div className="flex-1 leading-8">
                  <p className="font-bold text-gray-800 mb-0.5"><Math tex="b" /> 管<strong>上下位置</strong>：</p>
                  <p><span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-1 align-middle"></span> <Math tex="b=2" />：线从 y=2 出发</p>
                  <p><span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-1 align-middle"></span> <Math tex="b=-1" />：线从 y=-1 出发</p>
                  <p className="font-bold text-gray-800 mt-1 mb-0.5"><Math tex="k" /> 管<strong>方向和陡度</strong>：</p>
                  <p>蓝+绿 <Math tex="k=1" />：往右上走</p>
                  <p><span className="inline-block w-3 h-3 rounded-full bg-red-500 mr-1 align-middle"></span> 红 <Math tex="k=-1" />：往右下走</p>
                </div>
              </div>
            </div>

            {/* 速记卡 */}
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-2">
              <p className="font-bold text-indigo-800 mb-1">📝 一次函数速记口诀</p>
              <div className="grid grid-cols-2 gap-x-4 leading-8">
                <p>🔹 <Math tex="k" /> 正<strong>上坡</strong>，<Math tex="k" /> 负<strong>下坡</strong></p>
                <p>🔹 <Math tex="|k|" /> 大线<strong>陡</strong>，<Math tex="|k|" /> 小线<strong>平</strong></p>
                <p>🔹 <Math tex="b" /> 正线<strong>往上挪</strong>，<Math tex="b" /> 负线<strong>往下挪</strong></p>
                <p>🔹 <Math tex="b = 0" /> 过原点 → 变回<strong>正比例</strong></p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak label="反比例函数" />

      {/* ═══════════════════════════════════════════════════════ */}
      {/* Section 3: 反比例函数 */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section id="fr-inverse" className="mb-2 scroll-mt-4">
        <Collapsible title="三、反比例函数" defaultOpen storageKey="func-review:inverse" headerExtra={<SpeakButton text={functionReviewNarrations.inverse} />}>
          <div className="space-y-1.5 text-gray-700">

            {/* Step 1: 生活场景 */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-2">
              <p className="leading-7"><strong className="text-amber-800">🍬 场景：分糖</strong> — 有 <strong>12 块糖</strong>，分给 <Math tex="x" /> 个人，每人分到 <Math tex="y" /> 块。人越多，每人分得越<strong>少</strong>！</p>
            </div>

            {/* Step 1 + Step 2: 左右 3:2 */}
            <div className="grid gap-2" style={{ gridTemplateColumns: '3fr 2fr' }}>
              <div className="bg-white rounded-xl border border-gray-200 p-2 flex flex-col">
                <p className="font-bold text-gray-800 mb-1">📊 Step 1：列表算一算</p>
                <table className="w-full text-base border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-orange-200 px-1.5 py-0.5 text-center text-orange-700"><Math tex="x" /> 人</th>
                      <th className="border border-orange-200 px-1.5 py-0.5 text-center">1</th>
                      <th className="border border-orange-200 px-1.5 py-0.5 text-center">2</th>
                      <th className="border border-orange-200 px-1.5 py-0.5 text-center">3</th>
                      <th className="border border-orange-200 px-1.5 py-0.5 text-center">4</th>
                      <th className="border border-orange-200 px-1.5 py-0.5 text-center">6</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-1.5 py-0.5 text-center font-bold text-orange-700"><Math tex="y" /> 块</td>
                      <td className="border border-gray-200 px-1.5 py-0.5 text-center">12</td>
                      <td className="border border-gray-200 px-1.5 py-0.5 text-center">6</td>
                      <td className="border border-gray-200 px-1.5 py-0.5 text-center">4</td>
                      <td className="border border-gray-200 px-1.5 py-0.5 text-center">3</td>
                      <td className="border border-gray-200 px-1.5 py-0.5 text-center">2</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="border border-green-200 px-1.5 py-0.5 text-center font-bold text-green-700"><Math tex="x \times y" /></td>
                      <td className="border border-green-200 px-1.5 py-0.5 text-center text-green-700">12</td>
                      <td className="border border-green-200 px-1.5 py-0.5 text-center text-green-700">12</td>
                      <td className="border border-green-200 px-1.5 py-0.5 text-center text-green-700">12</td>
                      <td className="border border-green-200 px-1.5 py-0.5 text-center text-green-700">12</td>
                      <td className="border border-green-200 px-1.5 py-0.5 text-center text-green-700">12</td>
                    </tr>
                  </tbody>
                </table>
                <div className="flex-1 flex items-center mt-1">
                  <p className="text-green-700 font-bold text-lg">💡 <Math tex="x \times y" /> 永远 = 12！<strong>乘积不变</strong></p>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-2">
                <p className="font-bold text-orange-800 mb-0.5">✨ Step 2：写公式</p>
                <div className="leading-7">
                  <p><Math tex="x \times y = 12" /> → 两边除以 <Math tex="x" />：</p>
                  <p className="text-center text-lg font-bold text-orange-800 my-1"><Math tex="y = \dfrac{12}{x}" /></p>
                  <p>换成通用形式：</p>
                  <p className="text-center text-xl font-bold text-orange-800 my-1"><Math tex="y = \dfrac{k}{x}" /></p>
                  <p><Math tex="k" /> = <strong>总量</strong>（糖的总数）</p>
                </div>
              </div>
            </div>

            {/* Step 3: 与前面两种对比 */}
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-2">
              <p className="font-bold text-purple-800 mb-1">🔑 Step 3：和前面有啥不同？</p>
              <div className="grid grid-cols-3 gap-2 leading-7">
                <div>
                  <p className="font-bold text-blue-700">🍎 正比例</p>
                  <p><Math tex="x" /> 大 → <Math tex="y" /> 也大</p>
                  <p>比值不变 <Math tex="\dfrac{y}{x}=k" /></p>
                </div>
                <div>
                  <p className="font-bold text-amber-700">🚕 一次函数</p>
                  <p><Math tex="x" /> 大 → <Math tex="y" /> 也大</p>
                  <p>多了起步价 <Math tex="b" /></p>
                </div>
                <div>
                  <p className="font-bold text-red-700">🍬 反比例</p>
                  <p><Math tex="x" /> 大 → <Math tex="y" /> 反而<strong>小</strong></p>
                  <p>乘积不变 <Math tex="xy=k" /></p>
                </div>
              </div>
              <p className="text-purple-700 font-bold mt-1">👉 "反"就是<strong>反着来</strong>：一个变大，另一个就变小！</p>
            </div>

            {/* Step 4: 描点画图 */}
            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-1">📈 Step 4：画图看形状</p>
              <div className="flex gap-3 items-start">
                <div className="flex-1 leading-7">
                  <p>把表格的点标上去：</p>
                  <p>• (1,12)、(2,6)、(3,4)、(4,3)、(6,2)</p>
                  <p>• 连起来不是直线，而是一条<strong>弯曲的线</strong>！</p>
                  <p>• 这条曲线叫<strong>双曲线</strong></p>
                  <p className="mt-1">⚠️ 两个特别的地方：</p>
                  <p>• <Math tex="x" /> 不能等于 0（0 个人没法分糖）</p>
                  <p>• 曲线<strong>永远不碰坐标轴</strong>，只会无限接近</p>
                </div>
                <div style={{ width: 220, flexShrink: 0 }}>
                  <Mafs viewBox={{ x: [-0.5, 7.5], y: [-0.5, 8] }} height={200}>
                    <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
                    <Plot.OfX y={(x) => x > 0.3 ? 12 / x : NaN} color="#3b82f6" weight={3} />
                    <Point x={2} y={6} color="#f59e0b" />
                    <Point x={3} y={4} color="#f59e0b" />
                    <Point x={4} y={3} color="#f59e0b" />
                    <Point x={6} y={2} color="#f59e0b" />
                    <MafsText x={2.8} y={6.8} size={14}>(2,6)</MafsText>
                    <MafsText x={4.6} y={3.8} size={14}>(4,3)</MafsText>
                    <MafsText x={6.2} y={2.8} size={14}>(6,2)</MafsText>
                  </Mafs>
                </div>
              </div>
            </div>

            {/* Step 5: k的正负 */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-2">
              <p className="font-bold text-green-800 mb-1">🎯 Step 5：<Math tex="k" /> 的正负决定位置</p>
              <div className="flex gap-3 items-start">
                <div style={{ width: 200, flexShrink: 0 }}>
                  <Mafs viewBox={{ x: [-5, 5], y: [-5, 5] }} height={160}>
                    <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
                    <Plot.OfX y={(x) => x > 0.2 ? 3 / x : NaN} color="#3b82f6" weight={3} />
                    <Plot.OfX y={(x) => x < -0.2 ? 3 / x : NaN} color="#3b82f6" weight={3} />
                    <Plot.OfX y={(x) => x > 0.2 ? -3 / x : NaN} color="#ef4444" weight={3} />
                    <Plot.OfX y={(x) => x < -0.2 ? -3 / x : NaN} color="#ef4444" weight={3} />
                    <MafsText x={2} y={3} size={13}>k=3</MafsText>
                    <MafsText x={2} y={-3} size={13}>k=-3</MafsText>
                  </Mafs>
                </div>
                <div className="flex-1 leading-8">
                  <p><span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-1 align-middle"></span> <strong className="text-blue-600">蓝色 k=3</strong>：曲线在<strong>右上 + 左下</strong>（一三象限）</p>
                  <p><span className="inline-block w-3 h-3 rounded-full bg-red-500 mr-1 align-middle"></span> <strong className="text-red-600">红色 k=-3</strong>：曲线在<strong>右下 + 左上</strong>（二四象限）</p>
                  <p className="mt-1 text-green-700 font-bold">✅ <Math tex="k > 0" /> → 一三象限</p>
                  <p className="text-red-700 font-bold">✅ <Math tex="k < 0" /> → 二四象限</p>
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak label="二次函数" />

      {/* ═══════════════════════════════════════════════════════ */}
      {/* Section 4: 二次函数 */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section id="fr-quadratic" className="mb-2 scroll-mt-4">
        <Collapsible title="四、二次函数" defaultOpen storageKey="func-review:quadratic" headerExtra={<SpeakButton text={functionReviewNarrations.quadratic} />}>
          <div className="space-y-1.5 text-gray-700">

            {/* Step 1: 生活场景 */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-2">
              <p className="leading-7"><strong className="text-amber-800">🏀 场景：扔球</strong> — 把球往上扔，球先<strong>升高</strong>，到最高点后<strong>落下</strong>。高度随时间变化画出来，就是一条<strong>弧线</strong>！</p>
            </div>

            {/* Step 1 + Step 2: 左右 3:2 */}
            <div className="grid gap-2" style={{ gridTemplateColumns: '3fr 2fr' }}>
              <div className="bg-white rounded-xl border border-gray-200 p-2 flex flex-col">
                <p className="font-bold text-gray-800 mb-1">📊 Step 1：最简单的二次函数 <Math tex="y = x^2" /></p>
                <table className="w-full text-base border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-orange-200 px-1.5 py-0.5 text-center text-orange-700"><Math tex="x" /></th>
                      <th className="border border-orange-200 px-1.5 py-0.5 text-center">-3</th>
                      <th className="border border-orange-200 px-1.5 py-0.5 text-center">-2</th>
                      <th className="border border-orange-200 px-1.5 py-0.5 text-center">-1</th>
                      <th className="border border-orange-200 px-1.5 py-0.5 text-center">0</th>
                      <th className="border border-orange-200 px-1.5 py-0.5 text-center">1</th>
                      <th className="border border-orange-200 px-1.5 py-0.5 text-center">2</th>
                      <th className="border border-orange-200 px-1.5 py-0.5 text-center">3</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-1.5 py-0.5 text-center font-bold text-orange-700"><Math tex="y" /></td>
                      <td className="border border-gray-200 px-1.5 py-0.5 text-center">9</td>
                      <td className="border border-gray-200 px-1.5 py-0.5 text-center">4</td>
                      <td className="border border-gray-200 px-1.5 py-0.5 text-center">1</td>
                      <td className="border border-gray-200 px-1.5 py-0.5 text-center font-bold text-amber-600">0</td>
                      <td className="border border-gray-200 px-1.5 py-0.5 text-center">1</td>
                      <td className="border border-gray-200 px-1.5 py-0.5 text-center">4</td>
                      <td className="border border-gray-200 px-1.5 py-0.5 text-center">9</td>
                    </tr>
                  </tbody>
                </table>
                <div className="flex-1 flex items-center mt-1">
                  <p className="text-green-700 font-bold text-lg">💡 左右的 <Math tex="y" /> 值<strong>完全对称</strong>！最低点在 x=0</p>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-2">
                <p className="font-bold text-orange-800 mb-0.5">✨ Step 2：通用公式</p>
                <div className="leading-7">
                  <p>最简单：<Math tex="y = x^2" /></p>
                  <p>加系数：<Math tex="y = ax^2" /></p>
                  <p>最通用：</p>
                  <p className="text-center text-xl font-bold text-orange-800 my-1"><Math tex="y = ax^2 + bx + c" /></p>
                  <p><Math tex="a" /> 管开口方向</p>
                  <p><Math tex="c" /> 管上下位置</p>
                </div>
              </div>
            </div>

            {/* Step 3: 画图 */}
            <div className="bg-white rounded-xl border border-gray-200 p-2">
              <p className="font-bold text-gray-800 mb-1">📈 Step 3：画图看形状 — 抛物线</p>
              <div className="flex gap-3 items-start">
                <div className="flex-1 leading-7">
                  <p>把表格的点标上去、连起来：</p>
                  <p>• 不是直线，也不是双曲线</p>
                  <p>• 而是一条<strong>U形弧线</strong>，叫<strong>抛物线</strong></p>
                  <p className="mt-1">三个关键词：</p>
                  <p>⭐ <strong>顶点</strong>：最低（或最高）的那个点</p>
                  <p>⭐ <strong>对称轴</strong>：左右完全对称的那条竖线</p>
                  <p>⭐ <strong>开口方向</strong>：朝上还是朝下</p>
                </div>
                <div style={{ width: 200, flexShrink: 0 }}>
                  <Mafs viewBox={{ x: [-3.5, 3.5], y: [-1, 10] }} height={180}>
                    <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
                    <Plot.OfX y={(x) => x * x} color="#3b82f6" weight={3} />
                    <Point x={0} y={0} color="#ef4444" />
                    <Point x={-1} y={1} color="#f59e0b" />
                    <Point x={1} y={1} color="#f59e0b" />
                    <Point x={-2} y={4} color="#f59e0b" />
                    <Point x={2} y={4} color="#f59e0b" />
                    <MafsText x={0.8} y={0.8} size={13}>顶点</MafsText>
                    <MafsText x={-2.8} y={4.8} size={12}>(-2,4)</MafsText>
                    <MafsText x={2.8} y={4.8} size={12}>(2,4)</MafsText>
                  </Mafs>
                </div>
              </div>
            </div>

            {/* Step 4: a 的作用 */}
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-2">
              <p className="font-bold text-purple-800 mb-1">� Step 4：<Math tex="a" /> 决定了什么？</p>
              <div className="flex gap-3 items-start">
                <div style={{ width: 200, flexShrink: 0 }}>
                  <Mafs viewBox={{ x: [-3, 3], y: [-5, 5] }} height={160}>
                    <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
                    <Plot.OfX y={(x) => x * x} color="#3b82f6" weight={3} />
                    <Plot.OfX y={(x) => -(x * x)} color="#ef4444" weight={3} />
                    <Point x={0} y={0} color="#f59e0b" />
                    <MafsText x={1.5} y={3.5} size={13}>a=1</MafsText>
                    <MafsText x={1.5} y={-3.5} size={13}>a=-1</MafsText>
                  </Mafs>
                </div>
                <div className="flex-1 leading-8">
                  <p><span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-1 align-middle"></span> <strong className="text-blue-600">蓝色 a=1</strong>：开口<strong>朝上</strong>（像碗 🥣）</p>
                  <p className="text-blue-700">→ 顶点是<strong>最低点</strong></p>
                  <p className="mt-1"><span className="inline-block w-3 h-3 rounded-full bg-red-500 mr-1 align-middle"></span> <strong className="text-red-600">红色 a=-1</strong>：开口<strong>朝下</strong>（像山 ⛰️）</p>
                  <p className="text-red-700">→ 顶点是<strong>最高点</strong>（扔球的最高点！）</p>
                  <p className="mt-1 text-purple-700 font-bold">✅ <Math tex="a > 0" /> 朝上，<Math tex="a < 0" /> 朝下</p>
                  <p className="text-purple-700 font-bold">✅ <Math tex="|a|" /> 越大，开口越<strong>窄</strong></p>
                </div>
              </div>
            </div>

            {/* Step 5: 四种函数总对比速查表 */}
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-2">
              <p className="font-bold text-indigo-800 mb-1">🎯 Step 5：四种函数速查对比</p>
              <table className="w-full text-base border-collapse">
                <thead>
                  <tr className="bg-indigo-100">
                    <th className="border border-indigo-200 px-2 py-1 text-left text-indigo-700">类型</th>
                    <th className="border border-indigo-200 px-2 py-1 text-center text-indigo-700">公式</th>
                    <th className="border border-indigo-200 px-2 py-1 text-center text-indigo-700">图像</th>
                    <th className="border border-indigo-200 px-2 py-1 text-center text-indigo-700">关键参数</th>
                    <th className="border border-indigo-200 px-2 py-1 text-center text-indigo-700">生活场景</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1 font-bold">正比例</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="y = kx" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center">过原点直线</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="k" /> 定方向和陡度</td>
                    <td className="border border-gray-200 px-2 py-1 text-center">🍎 买苹果</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-1 font-bold">一次</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="y = kx + b" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center">斜线（不过原点）</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="b" /> 是截距</td>
                    <td className="border border-gray-200 px-2 py-1 text-center">🚕 打出租</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1 font-bold">反比例</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="y = \dfrac{k}{x}" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center">双曲线</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="xy = k" /> 恒成立</td>
                    <td className="border border-gray-200 px-2 py-1 text-center">🍬 分糖</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-1 font-bold">二次</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="y = ax^2+bx+c" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center">抛物线</td>
                    <td className="border border-gray-200 px-2 py-1 text-center"><Math tex="a" /> 定开口方向</td>
                    <td className="border border-gray-200 px-2 py-1 text-center">🏀 扔球</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </Collapsible>
      </section>

      </LessonLayout>
    </div>
  );
}
