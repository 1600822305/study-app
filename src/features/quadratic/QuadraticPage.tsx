import { Mafs, Coordinates, Plot, Point, Text as MafsText } from 'mafs';
import { Math, QuizPanel, Collapsible, SpeakButton, PageHeader, LessonLayout, CalloutCard, PracticeCard, ExportButton, PageBreak } from '@/components/shared';
import { quadraticNarrations } from './data/narrations';
import { quadPractice1, quadPractice2 } from './data/practice';
import { useProgress, usePrintMode } from '@/hooks';
import { scrollToId } from '@/lib/scroll';
import { quadraticQuizQuestions } from './data/quiz';
import { quadraticProgressItems } from './data/progress';
import { QuadraticAnswers, quadraticExplanations } from './quadratic-answers';

export function QuadraticPage() {
  const { items, toggle } = useProgress('quadratic', quadraticProgressItems);
  const { isPrinting, printOptions } = usePrintMode();

  return (
    <div>
      <PageHeader
        stage="第二阶段 · 计算工具"
        title="2.3 二次函数"
        narration={quadraticNarrations.intro}
        subtitle="高中数学的基石 · 3-4小时"
        tags={[
          { label: '难度 ★★☆☆☆', color: 'amber' },
          { label: '贯穿始终', color: 'blue' },
          { label: '约3-4小时', color: 'purple' },
        ]}
      />

      <div className="flex justify-end mb-4 print:hidden">
        <ExportButton title="2.3 二次函数" />
      </div>

      {/* 前置知识引用 */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
        <p className="text-amber-900 font-bold mb-1">📌 前置知识</p>
        <p className="text-amber-800 leading-7">本章需要你会：乘法公式、因式分解、解一元二次方程。</p>
        <p className="text-amber-700 leading-7">不确定自己会不会？→ 先去看 <a href="/math/sets-prereq" className="text-blue-600 underline font-bold">1.1.5 集合前置知识</a>，里面有因式分解和乘法公式的复习。</p>
      </div>

      {/* 知识地图 */}
      <div className="bg-gray-50 rounded-xl p-5 mb-6 text-base text-gray-600">
        <p className="font-bold text-gray-800 mb-3 text-lg">📋 知识地图</p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 leading-7">
          <button onClick={() => scrollToId('quad-forms')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">一、三种表达形式 → 看懂就会用</button>
          <button onClick={() => scrollToId('quad-graph')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">二、图像六要素 → 画图秒解题</button>
          <button onClick={() => scrollToId('quad-discriminant')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">三、判别式 Δ → 判断根的情况</button>
          <button onClick={() => scrollToId('quad-vieta')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">四、韦达定理 → 不解方程知两根</button>
          <button onClick={() => scrollToId('quad-quiz')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">五、综合测试（10题）→ 高考真题 + 精华题</button>
        </div>
      </div>

      {/* 速通路线图 */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-5 mb-5">
        <p className="font-black text-blue-900 text-xl mb-1">速通路线图：这节课就 4 个核心知识点</p>
        <p className="text-blue-700 text-base mb-3">二次函数是后面所有"函数题"的基础，现在搞透，后面全是降维打击！</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-base">
          <div className="bg-white rounded-xl p-4 border border-blue-100 min-h-[80px]">
            <p className="font-bold text-gray-800 text-base">① 三种形式</p>
            <p className="text-gray-500 mt-2 leading-7">核心：<strong className="text-red-600">配方法互转</strong></p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-blue-100 min-h-[80px]">
            <p className="font-bold text-gray-800 text-base">② 图像六要素</p>
            <p className="text-gray-500 mt-2 leading-7">核心：<strong className="text-red-600">对称轴 <Math tex="x = -\dfrac{b}{2a}" /></strong></p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-blue-100 min-h-[80px]">
            <p className="font-bold text-gray-800 text-base">③ 判别式 Δ</p>
            <p className="text-gray-500 mt-2 leading-7">核心：<strong className="text-red-600">Δ 定交点个数</strong></p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-blue-100 min-h-[80px]">
            <p className="font-bold text-gray-800 text-base">④ 韦达定理</p>
            <p className="text-gray-500 mt-2 leading-7">核心：<strong className="text-red-600"><Math tex="x_1+x_2 = -\dfrac{b}{a}" />，<Math tex="x_1 x_2 = \dfrac{c}{a}" /></strong></p>
          </div>
        </div>
      </div>

      {/* 必背清单 */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 mb-6">
        <p className="font-bold text-gray-800 mb-2 text-lg">📝 必背清单：只背这 6 条，后面全够用</p>
        <p className="text-base text-gray-500 mb-3">这些公式后面学函数、解析几何时天天要用，现在背熟一劳永逸！</p>
        <div className="space-y-2 text-base text-gray-700 leading-7">
          <p>1️⃣ <strong>一般式</strong>：<Math tex="y = ax^2 + bx + c" />，看开口（<Math tex="a" /> 正负）和 y 轴交点（<Math tex="c" />）</p>
          <p>2️⃣ <strong>顶点式</strong>：<Math tex="y = a(x-h)^2 + k" />，顶点就是 <Math tex="(h, k)" /></p>
          <p>3️⃣ <strong>对称轴</strong>：<Math tex="x = -\dfrac{b}{2a}" /></p>
          <p>4️⃣ <strong>判别式</strong>：<Math tex="\Delta = b^2 - 4ac" />（<Math tex="\Delta > 0" /> 两个交点 · <Math tex="\Delta = 0" /> 相切 · <Math tex="\Delta < 0" /> 无交点）</p>
          <p>5️⃣ <strong>求根公式</strong>：<Math tex="x = \dfrac{-b \pm \sqrt{\Delta}}{2a}" /></p>
          <p>6️⃣ <strong>韦达定理</strong>：<Math tex="x_1 + x_2 = -\dfrac{b}{a}" />，<Math tex="x_1 \cdot x_2 = \dfrac{c}{a}" /></p>
        </div>
      </div>

      <LessonLayout progressItems={items} onToggle={toggle}>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 1: 三种表达形式 */}
      {/* ════════════════════════════════════════════════════════ */}
      <PageBreak label="三种表达形式" />
      <section id="quad-forms" className="mb-4 scroll-mt-4">
        <Collapsible title="一、三种表达形式（15分钟）" defaultOpen storageKey="quad:forms">
          <SpeakButton text={quadraticNarrations.threeforms} />
          <div className="mt-2 space-y-3">

            <p className="text-blue-700 font-bold text-base leading-7">🎯 学完你能：在三种形式之间自如切换，看到函数就知道它的关键信息。</p>

            {/* 三种形式对比表 */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <p className="font-bold text-gray-800 text-lg mb-2">📊 三种形式一览表</p>
              <table className="w-full text-base border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-3 py-2 text-left">形式</th>
                    <th className="border border-gray-300 px-3 py-2 text-center">公式</th>
                    <th className="border border-gray-300 px-3 py-2 text-center">能直接看出什么</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 font-bold">一般式</td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><Math tex="y = ax^2 + bx + c" /></td>
                    <td className="border border-gray-300 px-3 py-2 text-center">开口方向（<Math tex="a" />）、y 轴交点（<Math tex="c" />）</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="border border-gray-300 px-3 py-2 font-bold">顶点式</td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><Math tex="y = a(x-h)^2 + k" /></td>
                    <td className="border border-gray-300 px-3 py-2 text-center">顶点 <Math tex="(h, k)" />、对称轴 <Math tex="x = h" /></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 font-bold">交点式</td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><Math tex="y = a(x-x_1)(x-x_2)" /></td>
                    <td className="border border-gray-300 px-3 py-2 text-center">x 轴交点 <Math tex="(x_1, 0)" /> 和 <Math tex="(x_2, 0)" /></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 配方法 */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <p className="font-bold text-gray-800 text-lg mb-2">🔧 配方法：一般式 → 顶点式</p>
              <p className="text-base text-gray-600 mb-2">配方法是最常用的转化技巧，步骤固定，练两遍就会。</p>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="font-bold text-gray-800 mb-1">例：将 <Math tex="y = 2x^2 - 12x + 22" /> 化为顶点式</p>
                <div className="pl-3 border-l-2 border-blue-300 space-y-1">
                  <p className="leading-7">① 提出 <Math tex="a" />：<Math tex="y = 2(x^2 - 6x) + 22" /></p>
                  <p className="leading-7">② 括号内配方：一次项系数 <Math tex="-6" /> 的一半是 <Math tex="-3" />，平方是 <Math tex="9" /></p>
                  <p className="leading-7">③ 加上再减去：<Math tex="y = 2(x^2 - 6x + 9 - 9) + 22 = 2(x-3)^2 - 18 + 22" /></p>
                  <p className="leading-7">④ 整理：<Math tex="y = 2(x-3)^2 + 4" />，顶点 <Math tex="(3, 4)" /> ✅</p>
                </div>
              </div>
            </div>

            {/* 一般式 → 交点式 */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <p className="font-bold text-gray-800 text-lg mb-2">🔧 一般式 → 交点式</p>
              <p className="text-base text-gray-600 mb-2">先求根（因式分解或求根公式），再写成 <Math tex="y = a(x - x_1)(x - x_2)" />。</p>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="font-bold text-gray-800 mb-1">例：将 <Math tex="y = 2x^2 - 10x + 12" /> 化为交点式</p>
                <div className="pl-3 border-l-2 border-green-300 space-y-1">
                  <p className="leading-7">① 令 <Math tex="y = 0" />：<Math tex="2x^2 - 10x + 12 = 0" />，即 <Math tex="x^2 - 5x + 6 = 0" /></p>
                  <p className="leading-7">② 因式分解：<Math tex="(x-2)(x-3) = 0" />，所以 <Math tex="x_1 = 2,\; x_2 = 3" /></p>
                  <p className="leading-7">③ 写出交点式：<Math tex="y = 2(x-2)(x-3)" /> ✅</p>
                </div>
              </div>
            </div>

            {/* 顶点式 → 一般式 */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <p className="font-bold text-gray-800 text-lg mb-2">🔧 顶点式 → 一般式</p>
              <p className="text-base text-gray-600 mb-2">直接展开括号，合并同类项即可。</p>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="font-bold text-gray-800 mb-1">例：将 <Math tex="y = 3(x-1)^2 + 5" /> 化为一般式</p>
                <div className="pl-3 border-l-2 border-orange-300 space-y-1">
                  <p className="leading-7">① 展开平方：<Math tex="(x-1)^2 = x^2 - 2x + 1" /></p>
                  <p className="leading-7">② 乘以系数：<Math tex="3(x^2 - 2x + 1) = 3x^2 - 6x + 3" /></p>
                  <p className="leading-7">③ 加常数项：<Math tex="y = 3x^2 - 6x + 3 + 5 = 3x^2 - 6x + 8" /> ✅</p>
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 2: 图像六要素 */}
      {/* ════════════════════════════════════════════════════════ */}
      <PageBreak label="图像六要素" />
      <section id="quad-graph" className="mb-4 scroll-mt-4">
        <Collapsible title="二、图像六要素（30分钟）" defaultOpen storageKey="quad:graph">
          <SpeakButton text={quadraticNarrations.graph} />
          <div className="mt-2 space-y-3">

            <p className="text-blue-700 font-bold text-base leading-7">🎯 学完你能：看到任何二次函数，30 秒内画出图像并标出所有关键信息。</p>

            {/* 六要素卡片 */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <p className="font-bold text-gray-800 text-lg mb-3">🎯 画图就看这 6 点 <span className="text-amber-700 text-base font-normal">（口诀：<span className="text-red-600 font-bold">"一看开口二看轴，顶点交点单调性"</span>）</span></p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                  <p className="font-bold text-blue-800">❶ 开口方向</p>
                  <p className="text-gray-700 leading-7"><Math tex="a > 0" /> 开口向上（U 形），<Math tex="a < 0" /> 开口向下（∩ 形）</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                  <p className="font-bold text-blue-800">❷ 对称轴</p>
                  <p className="text-gray-700 leading-7"><Math tex="x = -\dfrac{b}{2a}" />，图像左右对称的中心线</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                  <p className="font-bold text-blue-800">❸ 顶点</p>
                  <p className="text-gray-700 leading-7"><Math tex="\left(-\dfrac{b}{2a},\; \dfrac{4ac-b^2}{4a}\right)" />，最高点或最低点</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                  <p className="font-bold text-blue-800">❹ 与 y 轴交点</p>
                  <p className="text-gray-700 leading-7">令 <Math tex="x = 0" />，交于 <Math tex="(0, c)" /></p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                  <p className="font-bold text-blue-800">❺ 与 x 轴交点</p>
                  <p className="text-gray-700 leading-7">令 <Math tex="y = 0" />，解方程求根（取决于 <Math tex="\Delta" />）</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                  <p className="font-bold text-blue-800">❻ 单调性</p>
                  <p className="text-gray-700 leading-7"><Math tex="a > 0" />：对称轴左边递减，右边递增</p>
                </div>
              </div>
            </div>

            {/* 图像 */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <p className="font-bold text-gray-800 text-lg mb-2">📈 看图理解：<Math tex="y = x^2 - 4x + 3" /></p>
              <p className="text-gray-500 text-base mb-1">对称轴 <Math tex="x = 2" />，顶点 <Math tex="(2, -1)" />，与 x 轴交于 <Math tex="(1, 0)" /> 和 <Math tex="(3, 0)" /></p>
              <div className="mx-auto" style={{ maxWidth: 360 }}>
              <Mafs viewBox={{ x: [-0.5, 4.5], y: [-1.3, 3.5] }} height={180}>
                <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
                <Plot.OfX y={(x) => x * x - 4 * x + 3} color="#3b82f6" weight={3} />
                <Point x={2} y={-1} color="#ef4444" />
                <MafsText x={2.6} y={-1.1} size={14}>顶点(2,-1)</MafsText>
                <Point x={1} y={0} color="#22c55e" />
                <Point x={3} y={0} color="#22c55e" />
                <MafsText x={0.2} y={0.35} size={14}>x₁=1</MafsText>
                <MafsText x={3.4} y={0.35} size={14}>x₂=3</MafsText>
                <Point x={0} y={3} color="#f59e0b" />
                <MafsText x={0.5} y={3.2} size={14}>(0,3)</MafsText>
              </Mafs>
              </div>
            </div>

            {/* 六要素实战分析表 */}
            <div className="bg-white rounded-xl border border-gray-200 p-3">
              <p className="font-bold text-gray-800 text-lg mb-1">📋 六要素实战：<Math tex="y = x^2 - 4x + 3" />（<Math tex="a=1,\; b=-4,\; c=3" />）</p>
              <table className="w-full text-base border-collapse">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="border border-blue-200 px-2 py-1 text-left text-blue-700">要素</th>
                    <th className="border border-blue-200 px-2 py-1 text-center text-blue-700">计算</th>
                    <th className="border border-blue-200 px-2 py-1 text-center text-blue-700">结果</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1 font-bold">❶ 开口方向</td>
                    <td className="border border-gray-200 px-2 py-1"><Math tex="a = 1 > 0" /></td>
                    <td className="border border-gray-200 px-2 py-1">向上（U 形）</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-1 font-bold">❷ 对称轴</td>
                    <td className="border border-gray-200 px-2 py-1"><Math tex="x = -\dfrac{-4}{2 \times 1} = 2" /></td>
                    <td className="border border-gray-200 px-2 py-1"><Math tex="x = 2" /></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1 font-bold">❸ 顶点</td>
                    <td className="border border-gray-200 px-2 py-1">代入 <Math tex="x=2" />：<Math tex="y = 4 - 8 + 3 = -1" /></td>
                    <td className="border border-gray-200 px-2 py-1"><Math tex="(2,\; -1)" /></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-1 font-bold">❹ y 轴交点</td>
                    <td className="border border-gray-200 px-2 py-1">令 <Math tex="x = 0" /></td>
                    <td className="border border-gray-200 px-2 py-1"><Math tex="(0,\; 3)" /></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-2 py-1 font-bold">❺ x 轴交点</td>
                    <td className="border border-gray-200 px-2 py-1"><Math tex="x^2 - 4x + 3 = (x-1)(x-3) = 0" /></td>
                    <td className="border border-gray-200 px-2 py-1"><Math tex="(1,0)" /> 和 <Math tex="(3,0)" /></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-2 py-1 font-bold">❻ 单调性</td>
                    <td className="border border-gray-200 px-2 py-1"><Math tex="a > 0" />，对称轴 <Math tex="x = 2" /></td>
                    <td className="border border-gray-200 px-2 py-1"><Math tex="x < 2" /> 递减，<Math tex="x > 2" /> 递增</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 闭区间上的最值 */}
            <PageBreak />
            <div className="bg-white rounded-xl border border-gray-200 p-3">
              <p className="font-bold text-gray-800 text-lg mb-1">📐 闭区间上的最值（高频考点）</p>
              <p className="text-gray-600 text-base mb-1">求 <Math tex="y = ax^2 + bx + c" /> 在 <Math tex="[m, n]" /> 上的最值，关键看<strong className="text-red-600">对称轴在不在区间内</strong>：</p>
              <div className="space-y-2">
                <div className="bg-green-50 rounded-lg p-2 border border-green-200">
                  <p className="font-bold text-green-800">情况1：对称轴在区间内（<Math tex="m \leq -\dfrac{b}{2a} \leq n" />）</p>
                  <p className="text-gray-700 leading-7">顶点处取最值，另一个极值在<strong>离对称轴更远的端点</strong></p>
                </div>
                <div className="bg-blue-50 rounded-lg p-2 border border-blue-200">
                  <p className="font-bold text-blue-800">情况2：对称轴在区间外</p>
                  <p className="text-gray-700 leading-7">函数在区间上单调，最值在<strong>两个端点</strong>处取到，代入比较即可</p>
                </div>
              </div>
              <div className="space-y-2 mt-2">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold text-gray-800 mb-1">例1（对称轴在区间内）：求 <Math tex="y = x^2 - 4x + 3" /> 在 <Math tex="[0, 3]" /> 上的最值</p>
                  <div className="pl-3 border-l-2 border-green-300 space-y-1">
                    <p className="leading-7">对称轴 <Math tex="x = 2 \in [0, 3]" /> → 顶点处取最小值</p>
                    <p className="leading-7"><Math tex="y_{\min} = y(2) = 4 - 8 + 3 = -1" /></p>
                    <p className="leading-7">比较端点：<Math tex="y(0) = 3" />，<Math tex="y(3) = 0" />，离对称轴更远的是 <Math tex="x = 0" /></p>
                    <p className="leading-7"><Math tex="y_{\max} = y(0) = 3" /> ✅</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold text-gray-800 mb-1">例2（对称轴在区间外）：求 <Math tex="y = x^2 - 4x + 3" /> 在 <Math tex="[3, 5]" /> 上的最小值</p>
                  <div className="pl-3 border-l-2 border-blue-300 space-y-1">
                    <p className="leading-7">对称轴 <Math tex="x = 2 \notin [3, 5]" />，且在区间左侧 → 区间上单调递增</p>
                    <p className="leading-7"><Math tex="y_{\min} = y(3) = 9 - 12 + 3 = 0" /></p>
                    <p className="leading-7"><Math tex="y_{\max} = y(5) = 25 - 20 + 3 = 8" /> ✅</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 闭区间最值解题步骤 */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-5">
              <p className="font-bold text-amber-800 text-lg mb-3">📝 闭区间最值解题三步走</p>
              <div className="space-y-3 text-base leading-8">
                <p><strong className="text-amber-900">Step 1</strong>：求对称轴 <Math tex="x = -\dfrac{b}{2a}" /></p>
                <p><strong className="text-amber-900">Step 2</strong>：判断对称轴是否在 <Math tex="[m, n]" /> 内</p>
                <p><strong className="text-amber-900">Step 3</strong>：</p>
                <div className="pl-4 space-y-2">
                  <p>• 在区间内 → 顶点是一个极值，再比较两端点找另一个</p>
                  <p>• 在区间外 → 直接算 <Math tex="f(m)" /> 和 <Math tex="f(n)" />，大的是最大值，小的是最小值</p>
                </div>
              </div>
            </div>

            {/* 口诀 */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
              <p className="font-bold text-green-800 text-lg">💡 口诀：<span className="text-red-600">"对称轴在不在？在就看顶点，不在看端点"</span></p>
            </div>

            {/* 高考常见变形 */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <p className="font-bold text-gray-800 text-lg mb-2">🎯 高考常见变形</p>
              <div className="space-y-2 text-base leading-8">
                <p><strong className="text-blue-700">变形1</strong>：给开口向下（<Math tex="a < 0" />）→ 顶点处取<strong>最大值</strong>（别搞反了！）</p>
                <p><strong className="text-blue-700">变形2</strong>：区间含参数 → 需要对参数分类讨论（对称轴可能在区间内也可能在外）</p>
                <p><strong className="text-blue-700">变形3</strong>：求值域 → 就是求最值，区间就是定义域</p>
              </div>
            </div>

            {/* 即时练习 */}
            <PageBreak />
            <PracticeCard
              questions={quadPractice1}
              explanations={quadraticExplanations}
              title="即时练习：三种形式 + 图像"
            />

            <div style={{ breakInside: 'avoid' }}>
              <CalloutCard variant="warning" title="⚠️ 易错点">
                <div className="space-y-1 text-base leading-7">
                  <p><strong>对称轴公式忘加负号</strong>：是 <Math tex="x = -\dfrac{b}{2a}" /> 不是 <Math tex="x = \dfrac{b}{2a}" />！</p>
                  <p><strong>配方时忘记乘回 a</strong>：提出 <Math tex="a" /> 后，补的常数要乘以 <Math tex="a" /> 再减掉。</p>
                  <p><strong>顶点式的 h 符号搞反</strong>：<Math tex="y = a(x-h)^2 + k" /> 中 <Math tex="h" /> 前面是<strong>减号</strong>，所以 <Math tex="(x+2)^2" /> 的 <Math tex="h = -2" />。</p>
                </div>
              </CalloutCard>
            </div>

            {/* 本节核心公式速查 */}
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-xl p-4">
              <p className="font-bold text-indigo-800 text-base mb-2">📌 核心公式速查</p>
              <div className="text-base leading-8 space-y-1">
                <p>• <strong>对称轴</strong>：<Math tex="x = -\dfrac{b}{2a}" /> · <strong>顶点</strong>：<Math tex="\left(-\dfrac{b}{2a},\; \dfrac{4ac-b^2}{4a}\right)" /></p>
                <p>• <strong>配方法</strong>：提 <Math tex="a" /> → 凑完全平方 → 整理 · <strong>闭区间最值</strong>：看对称轴在不在区间内</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 3: 判别式 Δ */}
      {/* ════════════════════════════════════════════════════════ */}
      <PageBreak label="判别式" />
      <section id="quad-discriminant" className="mb-4 scroll-mt-4">
        <Collapsible title="三、判别式 Δ（20分钟）" defaultOpen storageKey="quad:discriminant">
          <SpeakButton text={quadraticNarrations.discriminant} />
          <div className="mt-2 space-y-3">

            <p className="text-blue-700 font-bold text-base leading-7">🎯 学完你能：用 Δ 秒判方程有几个根，用求根公式直接算出根。</p>

            {/* Δ 速查表 */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <p className="font-bold text-gray-800 text-lg mb-2">📊 判别式 <Math tex="\Delta = b^2 - 4ac" /> 速查表</p>
              <table className="w-full text-base border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-3 py-2 text-left">判别式</th>
                    <th className="border border-gray-300 px-3 py-2 text-center">根的情况</th>
                    <th className="border border-gray-300 px-3 py-2 text-center">图像与 x 轴</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 font-bold text-green-700"><Math tex="\Delta > 0" /></td>
                    <td className="border border-gray-300 px-3 py-2 text-center">两个不等实根 <Math tex="x_1 \neq x_2" /></td>
                    <td className="border border-gray-300 px-3 py-2 text-center">相交（两个交点）</td>
                  </tr>
                  <tr className="bg-amber-50">
                    <td className="border border-gray-300 px-3 py-2 font-bold text-amber-700"><Math tex="\Delta = 0" /></td>
                    <td className="border border-gray-300 px-3 py-2 text-center">一个重根 <Math tex="x_1 = x_2 = -\dfrac{b}{2a}" /></td>
                    <td className="border border-gray-300 px-3 py-2 text-center">相切（一个切点）</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 font-bold text-red-700"><Math tex="\Delta < 0" /></td>
                    <td className="border border-gray-300 px-3 py-2 text-center">无实根</td>
                    <td className="border border-gray-300 px-3 py-2 text-center">相离（无交点）</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 求根公式 */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 rounded-xl p-4">
              <p className="font-bold text-purple-800 text-lg mb-2">🔑 求根公式（万能公式）</p>
              <div className="text-center text-xl my-3">
                <Math tex="x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a} = \dfrac{-b \pm \sqrt{\Delta}}{2a}" />
              </div>
              <p className="text-gray-600 text-base leading-7"><strong>使用条件</strong>：<Math tex="\Delta \geq 0" /> 时才有实数根。当因式分解搞不定时，求根公式是保底方法。</p>
            </div>

            {/* 三个 Δ 的图示 */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <p className="font-bold text-gray-800 text-lg mb-2">📈 三种情况对比图</p>
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center">
                  <p className="font-bold text-green-700 mb-1"><Math tex="\Delta > 0" /></p>
                  <div style={{ maxWidth: 200 }} className="mx-auto">
                  <Mafs viewBox={{ x: [-2.5, 2.5], y: [-1.5, 3] }} height={140}>
                    <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
                    <Plot.OfX y={(x) => x * x - 1} color="#22c55e" weight={3} />
                    <Point x={-1} y={0} color="#22c55e" />
                    <Point x={1} y={0} color="#22c55e" />
                  </Mafs>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">两个交点</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-amber-700 mb-1"><Math tex="\Delta = 0" /></p>
                  <div style={{ maxWidth: 200 }} className="mx-auto">
                  <Mafs viewBox={{ x: [-2.5, 2.5], y: [-0.5, 3.5] }} height={140}>
                    <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
                    <Plot.OfX y={(x) => x * x} color="#f59e0b" weight={3} />
                    <Point x={0} y={0} color="#f59e0b" />
                  </Mafs>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">一个切点</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-red-700 mb-1"><Math tex="\Delta < 0" /></p>
                  <div style={{ maxWidth: 200 }} className="mx-auto">
                  <Mafs viewBox={{ x: [-2.5, 2.5], y: [-0.5, 3.5] }} height={140}>
                    <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
                    <Plot.OfX y={(x) => x * x + 1} color="#ef4444" weight={3} />
                  </Mafs>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">无交点</p>
                </div>
              </div>
            </div>

            {/* 求根公式实战 */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <p className="font-bold text-gray-800 text-lg mb-2">✏️ 实战：用求根公式解 <Math tex="x^2 - 5x + 6 = 0" /></p>
              <div className="pl-3 border-l-2 border-purple-300 space-y-1 text-base leading-8">
                <p>① 识别系数：<Math tex="a = 1,\; b = -5,\; c = 6" /></p>
                <p>② 算判别式：<Math tex="\Delta = (-5)^2 - 4 \times 1 \times 6 = 25 - 24 = 1 > 0" /> → 两个不等实根</p>
                <p>③ 代入公式：<Math tex="x = \dfrac{5 \pm \sqrt{1}}{2} = \dfrac{5 \pm 1}{2}" /></p>
                <p>④ 写出两根：<Math tex="x_1 = \dfrac{5+1}{2} = 3" />，<Math tex="x_2 = \dfrac{5-1}{2} = 2" /></p>
              </div>
            </div>

            {/* 速记卡 */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-3">
              <p className="font-bold text-green-800 text-base">💡 解题口诀：<span className="text-red-600">"先算 Δ 判有没有，再套公式求出来"</span></p>
              <p className="text-gray-600 text-base mt-1">因式分解能搞定 → 优先用；搞不定 → 求根公式兜底。</p>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 4: 韦达定理 */}
      {/* ════════════════════════════════════════════════════════ */}
      <PageBreak label="韦达定理" />
      <section id="quad-vieta" className="mb-4 scroll-mt-4">
        <Collapsible title="四、韦达定理（30分钟）" defaultOpen storageKey="quad:vieta">
          <SpeakButton text={quadraticNarrations.vieta} />
          <div className="mt-2 space-y-2">

            <p className="text-blue-700 font-bold text-base leading-7">🎯 学完你能：不解方程就知道两根的和与积，用韦达定理求各种对称式。</p>

            {/* 韦达定理核心 */}
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-300 rounded-xl p-3">
              <p className="font-bold text-orange-800 text-lg mb-1">🔑 韦达定理（根与系数关系）</p>
              <p className="text-gray-600 text-base mb-2">对于方程 <Math tex="ax^2 + bx + c = 0" />（<Math tex="a \neq 0" />，<Math tex="\Delta \geq 0" />），两根满足：</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center text-center text-xl my-1">
                <div className="bg-white rounded-lg px-6 py-2 border border-orange-200">
                  <p className="text-sm text-gray-500 mb-1">两根之和</p>
                  <Math tex="x_1 + x_2 = -\dfrac{b}{a}" />
                </div>
                <div className="bg-white rounded-lg px-6 py-2 border border-orange-200">
                  <p className="text-sm text-gray-500 mb-1">两根之积</p>
                  <Math tex="x_1 \cdot x_2 = \dfrac{c}{a}" />
                </div>
              </div>
              <p className="text-red-600 font-bold mt-1 text-base">⚠️ 注意：韦达定理的前提是方程有实根（<Math tex="\Delta \geq 0" />）</p>
            </div>

            {/* 韦达定理的应用 */}
            <div className="bg-white rounded-xl border border-gray-200 p-3">
              <p className="font-bold text-gray-800 text-lg mb-1">💡 韦达定理三大应用</p>
              <div className="space-y-2">
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="font-bold text-gray-800 mb-1">应用1：求对称式（不用解方程！）</p>
                  <div className="pl-3 border-l-2 border-blue-300 space-y-1">
                    <p className="leading-7"><Math tex="x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1 x_2" /> ← <strong className="text-red-600">高频考点</strong></p>
                    <p className="leading-7"><Math tex="\dfrac{1}{x_1} + \dfrac{1}{x_2} = \dfrac{x_1 + x_2}{x_1 x_2}" /> ← 通分变韦达</p>
                    <p className="leading-7"><Math tex="(x_1 - x_2)^2 = (x_1 + x_2)^2 - 4x_1 x_2" /> ← 高考常考</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="font-bold text-gray-800 mb-1">应用2：已知两根写方程（韦达逆用）</p>
                  <div className="pl-3 border-l-2 border-green-300 space-y-1">
                    <p className="leading-7">如果两根是 <Math tex="x_1" /> 和 <Math tex="x_2" />，那么方程就是：</p>
                    <p className="leading-7 text-center"><Math tex="x^2 - (x_1 + x_2)x + x_1 x_2 = 0" /></p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="font-bold text-gray-800 mb-1">应用3：判断两根的符号</p>
                  <div className="pl-3 border-l-2 border-purple-300 space-y-1">
                    <p className="leading-7">两根同正：和 <Math tex="> 0" />，积 <Math tex="> 0" /></p>
                    <p className="leading-7">两根同负：和 <Math tex="< 0" />，积 <Math tex="> 0" /></p>
                    <p className="leading-7">两根异号：积 <Math tex="< 0" />（和的正负看绝对值）</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 韦达定理逆用例题 */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <p className="font-bold text-gray-800 text-lg mb-2">✏️ 韦达定理逆用实战</p>

              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold text-gray-800 mb-1">例1：已知两根为 <Math tex="x_1 = 3,\; x_2 = -2" />，写出方程</p>
                  <div className="pl-3 border-l-2 border-orange-300 space-y-1">
                    <p className="leading-7">和：<Math tex="x_1 + x_2 = 3 + (-2) = 1" /></p>
                    <p className="leading-7">积：<Math tex="x_1 \cdot x_2 = 3 \times (-2) = -6" /></p>
                    <p className="leading-7">方程：<Math tex="x^2 - 1 \cdot x + (-6) = 0" />，即 <Math tex="x^2 - x - 6 = 0" /> ✅</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold text-gray-800 mb-1">例2：已知 <Math tex="x_1 + x_2 = 4,\; x_1 x_2 = -5" />，求 <Math tex="x_1^2 + x_2^2" /></p>
                  <div className="pl-3 border-l-2 border-blue-300 space-y-1">
                    <p className="leading-7">用公式：<Math tex="x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1 x_2" /></p>
                    <p className="leading-7">代入：<Math tex="= 4^2 - 2 \times (-5) = 16 + 10 = 26" /> ✅</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 即时练习 */}
            <PageBreak />
            <PracticeCard
              questions={quadPractice2}
              explanations={quadraticExplanations}
              title="即时练习：判别式 + 韦达定理"
            />

            <CalloutCard variant="warning" title="⚠️ 易错点">
              <div className="space-y-1 text-base leading-7">
                <p><strong>韦达定理符号搞反</strong>：和是 <Math tex="-\dfrac{b}{a}" />（注意<strong className="text-red-600">负号</strong>），积是 <Math tex="\dfrac{c}{a}" />（没有负号）。</p>
                <p><strong>忘记验 Δ</strong>：题目说"方程有两实根"才能用韦达，如果 <Math tex="\Delta < 0" /> 则韦达定理不能用。</p>
                <p><strong>对称式转化出错</strong>：<Math tex="x_1^2 + x_2^2" /> 是 <Math tex="(x_1+x_2)^2 - 2x_1x_2" />，不是 <Math tex="(x_1+x_2)^2 - x_1x_2" />。</p>
              </div>
            </CalloutCard>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 5: 综合测试 */}
      {/* ════════════════════════════════════════════════════════ */}
      <PageBreak label="综合测试" />
      <section id="quad-quiz" className="mb-4 scroll-mt-4">
        <Collapsible title="五、综合测试（高考真题 + 精华题·10题）" defaultOpen storageKey="quad:quiz">
          <QuizPanel
            module="quadratic"
            questions={quadraticQuizQuestions}
            explanations={quadraticExplanations}
            title="二次函数综合测试"
          />
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* 打印模式答案区 */}
      {/* ════════════════════════════════════════════════════════ */}
      {isPrinting && printOptions.showAnswers && <QuadraticAnswers />}
    </LessonLayout>
  </div>
);
}
