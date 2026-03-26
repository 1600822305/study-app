import { Math, Collapsible, SpeakButton, PageHeader, LessonLayout, ExportButton, PageBreak } from '@/components/shared';
import { vectorPrereqNarrations } from './data/4.0/4.0-prereq-narrations';
import { vectorPrereqProgressItems } from './data/4.0/4.0-prereq-progress';
import { useProgress } from '@/hooks';
import { scrollToId } from '@/lib/scroll';


export function VectorPrereqPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('vector-prereq', vectorPrereqProgressItems);

  return (
    <div>
      <PageHeader
        stage="前置准备"
        variant="prereq"
        title="4.0 向量前置知识"
        narration={vectorPrereqNarrations.intro}
        subtitle="学平面向量之前，先确保坐标系、勾股定理、方向感没问题"
        tags={[
          { label: '约15-20分钟', color: 'amber' },
          { label: '初中基础', color: 'green' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="4.0 向量前置知识" />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-3 mb-3">
        <p className="font-bold text-gray-800 mb-2">📋 知识地图</p>
        <div className="text-gray-600 space-y-1">
          <button onClick={() => scrollToId('vp-coord')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">一、平面直角坐标系回顾（向量坐标运算的基础）</button>
          <button onClick={() => scrollToId('vp-pyth')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">二、勾股定理与两点距离（向量"模"的计算工具）</button>
          <button onClick={() => scrollToId('vp-intuition')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">三、"方向 + 大小"的直觉（向量到底是什么）</button>
        </div>
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 1: 平面直角坐标系回顾 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="vp-coord" className="mb-3 scroll-mt-4">
        <Collapsible title="一、平面直角坐标系回顾" defaultOpen storageKey="vector-prereq:coord" headerExtra={<SpeakButton text={vectorPrereqNarrations.coordinate} />}>
          <p className="text-blue-600 mb-2">🎯 学完你能：在坐标系中准确读取和标注点的位置，算出从一个点到另一个点横向、纵向各走了多少。</p>
          <div className="space-y-2 text-gray-700">

            {/* 为什么要学这个 */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-2">
              <p className="font-bold text-blue-800 mb-1">为什么向量需要坐标系？</p>
              <p className="text-blue-700">向量最常用的表示方法就是<strong>用坐标表示</strong>。比如向量 <Math tex="(3, 4)" /> 意思是"往右走 3 步，往上走 4 步"。</p>
              <p className="text-blue-700 mt-1">如果你连坐标系都不熟，向量的坐标运算就没法学。所以先把坐标系搞清楚。</p>
            </div>

            {/* 坐标系基本概念 */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-3">
              <p className="text-orange-700 font-bold mb-2">坐标系三要素</p>
              <div className="space-y-1.5">
                <div className="bg-white border border-orange-100 rounded-lg p-2">
                  <p className="font-bold text-gray-800">① 两条轴</p>
                  <p className="text-gray-600">横的叫 <strong>x 轴</strong>（左右方向），竖的叫 <strong>y 轴</strong>（上下方向），它们互相<strong>垂直</strong></p>
                </div>
                <div className="bg-white border border-orange-100 rounded-lg p-2">
                  <p className="font-bold text-gray-800">② 原点</p>
                  <p className="text-gray-600">两条轴的交叉点，坐标是 <Math tex="(0, 0)" />，是所有测量的"起点"</p>
                </div>
                <div className="bg-white border border-orange-100 rounded-lg p-2">
                  <p className="font-bold text-gray-800">③ 四个象限</p>
                  <p className="text-gray-600">两条轴把平面分成四个区域，按<strong>逆时针</strong>编号</p>
                </div>
              </div>
            </div>

            {/* 四象限速查 */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-2" style={{ breakInside: 'avoid' }}>
              <p className="text-green-700 font-bold mb-2">🧠 四象限速查表</p>
              <table className="w-full text-center border-collapse">
                <thead>
                  <tr>
                    <th className="border border-green-200 px-2 py-1 bg-green-100 text-green-800">象限</th>
                    <th className="border border-green-200 px-2 py-1 bg-green-100 text-green-800">位置</th>
                    <th className="border border-green-200 px-2 py-1 bg-green-100 text-green-800">x（横）</th>
                    <th className="border border-green-200 px-2 py-1 bg-green-100 text-green-800">y（纵）</th>
                    <th className="border border-green-200 px-2 py-1 bg-green-100 text-green-800">示例</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-green-200 px-2 py-1 font-bold">第一象限</td>
                    <td className="border border-green-200 px-2 py-1">右上</td>
                    <td className="border border-green-200 px-2 py-1 text-green-600 font-bold">+</td>
                    <td className="border border-green-200 px-2 py-1 text-green-600 font-bold">+</td>
                    <td className="border border-green-200 px-2 py-1"><Math tex="(3, 2)" /></td>
                  </tr>
                  <tr>
                    <td className="border border-green-200 px-2 py-1 font-bold">第二象限</td>
                    <td className="border border-green-200 px-2 py-1">左上</td>
                    <td className="border border-green-200 px-2 py-1 text-red-600 font-bold">−</td>
                    <td className="border border-green-200 px-2 py-1 text-green-600 font-bold">+</td>
                    <td className="border border-green-200 px-2 py-1"><Math tex="(-3, 2)" /></td>
                  </tr>
                  <tr>
                    <td className="border border-green-200 px-2 py-1 font-bold">第三象限</td>
                    <td className="border border-green-200 px-2 py-1">左下</td>
                    <td className="border border-green-200 px-2 py-1 text-red-600 font-bold">−</td>
                    <td className="border border-green-200 px-2 py-1 text-red-600 font-bold">−</td>
                    <td className="border border-green-200 px-2 py-1"><Math tex="(-3, -2)" /></td>
                  </tr>
                  <tr>
                    <td className="border border-green-200 px-2 py-1 font-bold">第四象限</td>
                    <td className="border border-green-200 px-2 py-1">右下</td>
                    <td className="border border-green-200 px-2 py-1 text-green-600 font-bold">+</td>
                    <td className="border border-green-200 px-2 py-1 text-red-600 font-bold">−</td>
                    <td className="border border-green-200 px-2 py-1"><Math tex="(3, -2)" /></td>
                  </tr>
                </tbody>
              </table>
              <p className="text-green-600 mt-2">口诀：<strong>一正正、二负正、三负负、四正负</strong>（按 x、y 的正负记）</p>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 2: 勾股定理与两点距离 */}
      {/* ════════════════════════════════════════════════════════ */}
      <PageBreak />
      <section id="vp-pyth" className="mb-3 scroll-mt-4">
        <Collapsible title="二、勾股定理与两点距离" defaultOpen storageKey="vector-prereq:pyth" headerExtra={<SpeakButton text={vectorPrereqNarrations.pythagorean} />}>
          <p className="text-blue-600 mb-3">🎯 学完你能：用勾股定理算出坐标系中任意两点之间的距离，为向量的"模"做准备。</p>
          <div className="space-y-2 text-gray-700">

            {/* 为什么要学这个 */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-2">
              <p className="font-bold text-blue-800 mb-1">为什么向量需要勾股定理？</p>
              <p className="text-blue-700">向量有一个重要属性叫<strong>"模"</strong>，就是<strong>向量的长度</strong>。</p>
              <p className="text-blue-700 mt-1">比如向量 <Math tex="(3, 4)" />，它的长度是多少？就是用勾股定理算：<Math tex="\sqrt{3^2 + 4^2} = 5" /></p>
            </div>

            {/* 勾股定理 */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-3">
              <p className="text-orange-700 font-bold mb-2">勾股定理（毕达哥拉斯定理）</p>
              <div className="bg-white border border-orange-100 rounded-lg p-3 text-center">
                <p className="text-xl font-bold text-gray-800 mb-2">直角三角形中：</p>
                <p className="text-2xl font-bold text-blue-600"><Math tex="a^2 + b^2 = c^2" /></p>
                <p className="text-gray-600 mt-2"><Math tex="a" />、<Math tex="b" /> 是两条<strong>直角边</strong>，<Math tex="c" /> 是<strong>斜边</strong>（最长的那条，对着直角）</p>
              </div>
              <div className="mt-2 bg-white border border-orange-100 rounded-lg p-2">
                <p className="font-bold text-gray-800 mb-1">换种说法更好记：</p>
                <p className="text-gray-700">已知两条直角边，求斜边：<Math tex="c = \sqrt{a^2 + b^2}" /></p>
                <p className="text-gray-700">已知斜边和一条直角边，求另一条：<Math tex="b = \sqrt{c^2 - a^2}" /></p>
              </div>
            </div>

            {/* 经典勾股数 */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-2" style={{ breakInside: 'avoid' }}>
              <p className="text-green-700 font-bold mb-2">🧠 必背！常见勾股数</p>
              <p className="text-green-600 mb-2">这几组数考试经常出现，记住可以省计算时间：</p>
              <div className="space-y-1">
                <p><strong>3, 4, 5</strong>：<Math tex="3^2 + 4^2 = 9 + 16 = 25 = 5^2" /></p>
                <p><strong>5, 12, 13</strong>：<Math tex="5^2 + 12^2 = 25 + 144 = 169 = 13^2" /></p>
                <p><strong>6, 8, 10</strong>：就是 3, 4, 5 各乘 2</p>
                <p><strong>8, 15, 17</strong>：<Math tex="8^2 + 15^2 = 64 + 225 = 289 = 17^2" /></p>
              </div>
            </div>

            {/* 两点距离公式 */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
              <p className="font-bold text-lg text-blue-800 mb-1">🔑 两点间距离公式</p>
              <p className="text-blue-700 mb-2">把勾股定理用在坐标系里，就得到了<strong>两点间距离公式</strong>：</p>
              <div className="bg-white rounded-lg p-3 border border-blue-100 text-center">
                <p className="text-xl"><Math tex="d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}" /></p>
              </div>
              <p className="text-blue-700 mt-2">其实就是：先算横向差、再算纵向差，各自平方，加起来，开根号。</p>
              <p className="text-blue-700 mt-1">和勾股定理一模一样，只是 <Math tex="a = x_2 - x_1" />，<Math tex="b = y_2 - y_1" /></p>
            </div>

            {/* 例题 */}
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                <p className="font-bold text-gray-800">例1：求 <Math tex="A(0, 0)" /> 到 <Math tex="B(3, 4)" /> 的距离</p>
                <div className="pl-3 border-l-2 border-blue-300 space-y-1.5">
                  <p><span className="text-blue-600 font-bold">横向差</span>：<Math tex="3 - 0 = 3" /></p>
                  <p><span className="text-blue-600 font-bold">纵向差</span>：<Math tex="4 - 0 = 4" /></p>
                  <p><span className="text-blue-600 font-bold">套公式</span>：<Math tex="d = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5" /></p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                <p className="font-bold text-gray-800">例2：求 <Math tex="A(1, 2)" /> 到 <Math tex="B(4, 6)" /> 的距离</p>
                <div className="pl-3 border-l-2 border-blue-300 space-y-1.5">
                  <p><span className="text-blue-600 font-bold">横向差</span>：<Math tex="4 - 1 = 3" /></p>
                  <p><span className="text-blue-600 font-bold">纵向差</span>：<Math tex="6 - 2 = 4" /></p>
                  <p><span className="text-blue-600 font-bold">套公式</span>：<Math tex="d = \sqrt{3^2 + 4^2} = \sqrt{25} = 5" /></p>
                </div>
                <p className="text-blue-600 mt-1">以后学向量时，这个距离就是向量 <Math tex="\vec{AB}" /> 的<strong>模</strong>，写作 <Math tex="|\vec{AB}| = 5" /></p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 3: "方向+大小"的直觉 */}
      {/* ════════════════════════════════════════════════════════ */}
      <PageBreak />
      <section id="vp-intuition" className="mb-3 scroll-mt-4">
        <Collapsible title={'三、"方向 + 大小"的直觉'} defaultOpen storageKey="vector-prereq:intuition" headerExtra={<SpeakButton text={vectorPrereqNarrations.directionAndSize} />}>
          <p className="text-blue-600 mb-3">🎯 学完你能：区分"只有大小的量"和"既有大小又有方向的量"，理解向量的本质直觉。</p>
          <div className="space-y-2 text-gray-700">

            {/* 生活引入 */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="font-bold text-blue-800 mb-2">一个问题引入</p>
              <p className="text-blue-700 text-lg">有人问你："学校在哪？"</p>
              <div className="bg-white rounded-lg p-3 border border-blue-100 mt-2 space-y-2">
                <p><span className="text-red-600 font-bold">不够的回答</span>："离这 500 米"</p>
                <p className="text-gray-500">→ 只知道距离，不知道往哪走，还是找不到</p>
                <p><span className="text-green-600 font-bold">够用的回答</span>："往北走 500 米"</p>
                <p className="text-gray-500">→ 既知道距离（500米），又知道方向（北），一下就能到</p>
              </div>
              <p className="text-blue-700 mt-2">"往北走 500 米" 就是一个<strong>向量</strong>——既有<strong>大小</strong>（500米），又有<strong>方向</strong>（北）。</p>
            </div>

            {/* 向量 vs 数量 */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-3">
              <p className="text-orange-700 font-bold mb-2">两类量：数量 vs 向量</p>
              <div className="space-y-1.5">
                <div className="bg-white border border-orange-100 rounded-lg p-2">
                  <p className="font-bold text-gray-800 mb-1">数量（标量）：只有大小</p>
                  <div className="space-y-1">
                    <p>温度 25°C、体重 60kg、面积 50m²、时间 3 小时</p>
                    <p className="text-gray-500">→ 说一个数就够了，不需要说方向</p>
                  </div>
                </div>
                <div className="bg-white border border-orange-100 rounded-lg p-2">
                  <p className="font-bold text-gray-800 mb-1">向量（矢量）：既有大小，又有方向</p>
                  <div className="space-y-1">
                    <p><strong>位移</strong>："向东走 100 米"（大小 = 100m，方向 = 东）</p>
                    <p><strong>力</strong>："向下 10 牛"（大小 = 10N，方向 = 下）</p>
                    <p><strong>速度</strong>："时速 60 公里，方向正北"</p>
                    <p className="text-gray-500">→ 光说大小不够，还必须说方向</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 位移 vs 距离 */}
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-bold text-gray-800 mb-1">位移 ≠ 距离（这个区别很重要！）</p>
              <div className="space-y-2">
                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <p className="font-bold text-gray-800">场景：你从家往东走 100 米到学校，再往西走 100 米回到家</p>
                  <div className="mt-2 space-y-1">
                    <p><strong>距离</strong>（数量）：你一共走了 <Math tex="100 + 100 = 200" /> 米</p>
                    <p><strong>位移</strong>（向量）：你的位移是 <Math tex="0" />（因为回到了起点，位置没变化）</p>
                  </div>
                </div>
                <p className="text-gray-600">距离只管你<strong>走了多远</strong>（永远是正数），位移关心你<strong>最终到了哪里</strong>（有方向，可以是 0）。</p>
              </div>
            </div>

            {/* 有向线段预告 */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="font-bold text-green-800 mb-1">向量怎么画？—— 带箭头的线段</p>
              <p className="text-green-700 mb-2">在纸上，我们用一条<strong>带箭头的线段</strong>（有向线段）来表示向量：</p>
              <div className="bg-white rounded-lg p-3 border border-green-100 space-y-2">
                <p><strong>线段的长度</strong> = 向量的大小（模）</p>
                <p><strong>箭头的方向</strong> = 向量的方向</p>
                <p><strong>起点</strong> = 从哪出发，<strong>终点</strong> = 到哪去（箭头指向终点）</p>
              </div>
              <p className="text-green-700 mt-2">比如从点 A 到点 B 的向量，写成 <Math tex="\vec{AB}" />（A 上面加个箭头指向 B），也可以用小写字母 <Math tex="\vec{a}" /> 表示。</p>
            </div>

            {/* 关键直觉总结 */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 mb-3">
              <p className="font-bold text-lg text-blue-800 mb-1">🔑 一句话总结</p>
              <p className="text-lg text-gray-800">向量 = <strong>方向</strong> + <strong>大小</strong></p>
              <p className="text-blue-700 mt-2">在坐标系里，向量用 <Math tex="(x, y)" /> 表示 → x 是横向走多少，y 是纵向走多少</p>
              <p className="text-blue-700 mt-1">向量的长度（模）用勾股定理算 → <Math tex="|\vec{a}| = \sqrt{x^2 + y^2}" /></p>
              <p className="mt-2 text-gray-500">这三件事（坐标系 + 勾股定理 + 方向大小直觉），就是学平面向量前需要的全部准备！</p>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* 综合大题 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section className="mb-3">
        <div className="bg-white rounded-xl border border-gray-200 p-3">
          <p className="font-bold text-lg text-gray-800 mb-3">📐 综合大题</p>

          {/* 大题1 */}
          <div className="bg-gray-50 rounded-lg p-3 mb-3" style={{ breakInside: 'avoid' }}>
            <p className="font-bold text-gray-800 mb-2">第1题：看图回答</p>
            <div className="flex gap-4">
              {/* 坐标系图 */}
              <div className="flex-shrink-0">
                <svg width="200" height="200" viewBox="-10 -10 220 220" className="border border-gray-300 rounded bg-white">
                  {/* 网格 */}
                  {[0,1,2,3,4,5,6,7,8,9,10].map(i => (
                    <g key={i}>
                      <line x1={i*20} y1="0" x2={i*20} y2="200" stroke="#e5e7eb" strokeWidth="0.5" />
                      <line x1="0" y1={i*20} x2="200" y2={i*20} stroke="#e5e7eb" strokeWidth="0.5" />
                    </g>
                  ))}
                  {/* 坐标轴 */}
                  <line x1="100" y1="0" x2="100" y2="200" stroke="#374151" strokeWidth="1.5" />
                  <line x1="0" y1="100" x2="200" y2="100" stroke="#374151" strokeWidth="1.5" />
                  {/* 箭头 */}
                  <polygon points="200,100 194,96 194,104" fill="#374151" />
                  <polygon points="100,0 96,6 104,6" fill="#374151" />
                  {/* 轴标签 */}
                  <text x="195" y="115" fontSize="12" fill="#374151">x</text>
                  <text x="108" y="12" fontSize="12" fill="#374151">y</text>
                  <text x="104" y="115" fontSize="10" fill="#374151">O</text>
                  {/* 刻度数字 x轴 */}
                  <text x="118" y="115" fontSize="9" fill="#6b7280">1</text>
                  <text x="138" y="115" fontSize="9" fill="#6b7280">2</text>
                  <text x="158" y="115" fontSize="9" fill="#6b7280">3</text>
                  <text x="178" y="115" fontSize="9" fill="#6b7280">4</text>
                  <text x="75" y="115" fontSize="9" fill="#6b7280">-1</text>
                  <text x="55" y="115" fontSize="9" fill="#6b7280">-2</text>
                  <text x="35" y="115" fontSize="9" fill="#6b7280">-3</text>
                  <text x="15" y="115" fontSize="9" fill="#6b7280">-4</text>
                  {/* 刻度数字 y轴 */}
                  <text x="104" y="98" fontSize="9" fill="#6b7280">1</text>
                  <text x="104" y="78" fontSize="9" fill="#6b7280">2</text>
                  <text x="104" y="58" fontSize="9" fill="#6b7280">3</text>
                  <text x="104" y="38" fontSize="9" fill="#6b7280">4</text>
                  <text x="104" y="118" fontSize="9" fill="#6b7280">-1</text>
                  <text x="104" y="138" fontSize="9" fill="#6b7280">-2</text>
                  <text x="104" y="158" fontSize="9" fill="#6b7280">-3</text>
                  <text x="104" y="178" fontSize="9" fill="#6b7280">-4</text>
                  {/* 点A(3,4) */}
                  <circle cx="160" cy="20" r="4" fill="#2563eb" />
                  <text x="165" y="18" fontSize="11" fill="#2563eb" fontWeight="bold">A</text>
                  {/* 点B(-3,2) */}
                  <circle cx="40" cy="60" r="4" fill="#dc2626" />
                  <text x="20" y="58" fontSize="11" fill="#dc2626" fontWeight="bold">B</text>
                  {/* 点C(-4,-3) */}
                  <circle cx="20" cy="160" r="4" fill="#16a34a" />
                  <text x="5" y="175" fontSize="11" fill="#16a34a" fontWeight="bold">C</text>
                  {/* 点D(2,-2) */}
                  <circle cx="140" cy="140" r="4" fill="#9333ea" />
                  <text x="145" y="138" fontSize="11" fill="#9333ea" fontWeight="bold">D</text>
                </svg>
              </div>
              {/* 题目 */}
              <div className="flex-1 space-y-3">
                <div>
                  <p className="font-bold text-gray-700">(1) 写出图中四个点的坐标：</p>
                  <div className="mt-1 space-y-1 text-gray-600">
                    <p>A = (____，____）</p>
                    <p>B = (____，____）</p>
                    <p>C = (____，____）</p>
                    <p>D = (____，____）</p>
                  </div>
                </div>
                <div>
                  <p className="font-bold text-gray-700">(2) 点 A、B、C、D 各在第几象限？</p>
                </div>
                <div>
                  <p className="font-bold text-gray-700">(3) 求点 A 到原点 O 的距离。</p>
                </div>
                <div>
                  <p className="font-bold text-gray-700">(4) 求 A 到 B 的距离（结果可以保留根号）。</p>
                </div>
              </div>
            </div>
          </div>

          {/* 大题2 */}
          <div className="bg-gray-50 rounded-lg p-3" style={{ breakInside: 'avoid' }}>
            <p className="font-bold text-gray-800 mb-2">第2题：小明的上学路</p>
            <div className="flex gap-4">
              {/* 路线图 */}
              <div className="flex-shrink-0">
                <svg width="200" height="200" viewBox="-10 -10 220 220" className="border border-gray-300 rounded bg-white">
                  {/* 网格 */}
                  {[0,1,2,3,4,5,6,7,8,9,10].map(i => (
                    <g key={i}>
                      <line x1={i*20} y1="0" x2={i*20} y2="200" stroke="#e5e7eb" strokeWidth="0.5" />
                      <line x1="0" y1={i*20} x2="200" y2={i*20} stroke="#e5e7eb" strokeWidth="0.5" />
                    </g>
                  ))}
                  {/* 坐标轴 */}
                  <line x1="100" y1="0" x2="100" y2="200" stroke="#374151" strokeWidth="1.5" />
                  <line x1="0" y1="100" x2="200" y2="100" stroke="#374151" strokeWidth="1.5" />
                  <polygon points="200,100 194,96 194,104" fill="#374151" />
                  <polygon points="100,0 96,6 104,6" fill="#374151" />
                  <text x="195" y="115" fontSize="12" fill="#374151">x</text>
                  <text x="108" y="12" fontSize="12" fill="#374151">y</text>
                  <text x="104" y="115" fontSize="10" fill="#374151">O</text>
                  {/* 刻度 */}
                  <text x="118" y="115" fontSize="9" fill="#6b7280">1</text>
                  <text x="138" y="115" fontSize="9" fill="#6b7280">2</text>
                  <text x="158" y="115" fontSize="9" fill="#6b7280">3</text>
                  <text x="178" y="115" fontSize="9" fill="#6b7280">4</text>
                  <text x="104" y="78" fontSize="9" fill="#6b7280">1</text>
                  <text x="104" y="58" fontSize="9" fill="#6b7280">2</text>
                  <text x="104" y="38" fontSize="9" fill="#6b7280">3</text>
                  <text x="104" y="18" fontSize="9" fill="#6b7280">4</text>
                  {/* 家 (0,0) */}
                  <circle cx="100" cy="100" r="5" fill="#2563eb" />
                  <text x="82" y="96" fontSize="11" fill="#2563eb" fontWeight="bold">家</text>
                  {/* 路线：家→便利店(3,0)→学校(3,4) */}
                  {/* 家→便利店 水平线 */}
                  <line x1="100" y1="100" x2="160" y2="100" stroke="#f59e0b" strokeWidth="2" strokeDasharray="6,3" />
                  <polygon points="160,100 154,96 154,104" fill="#f59e0b" />
                  {/* 便利店(3,0) */}
                  <circle cx="160" cy="100" r="5" fill="#f59e0b" />
                  <text x="148" y="120" fontSize="10" fill="#f59e0b" fontWeight="bold">便利店</text>
                  {/* 便利店→学校 竖直线 */}
                  <line x1="160" y1="100" x2="160" y2="20" stroke="#16a34a" strokeWidth="2" strokeDasharray="6,3" />
                  <polygon points="160,20 156,26 164,26" fill="#16a34a" />
                  {/* 学校(3,4) */}
                  <circle cx="160" cy="20" r="5" fill="#16a34a" />
                  <text x="166" y="18" fontSize="10" fill="#16a34a" fontWeight="bold">学校</text>
                  {/* 直线距离（虚线） */}
                  <line x1="100" y1="100" x2="160" y2="20" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="4,4" />
                </svg>
              </div>
              {/* 题目 */}
              <div className="flex-1 space-y-3">
                <p className="text-gray-600">小明家在坐标原点 <Math tex="O(0, 0)" />，他每天先<strong>往东走 3 格</strong>到便利店买早餐，再<strong>往北走 4 格</strong>到学校。</p>
                <div>
                  <p className="font-bold text-gray-700">(1) 便利店和学校的坐标分别是什么？</p>
                </div>
                <div>
                  <p className="font-bold text-gray-700">(2) 小明从家到学校，实际走了多少格？（路程）</p>
                </div>
                <div>
                  <p className="font-bold text-gray-700">(3) 用两点距离公式算出家到学校的直线距离（图中红色虚线）。</p>
                </div>
                <div>
                  <p className="font-bold text-gray-700">(4) "从家到学校的位移" 是向量还是数量？为什么？</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      </LessonLayout>
    </div>
  );
}
