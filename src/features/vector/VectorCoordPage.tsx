import { Math, Collapsible, SpeakButton, PageHeader, LessonLayout, ExportButton, PageBreak } from '@/components/shared';
import { vectorCoordNarrations } from './data/coord-narrations';
import { vectorCoordProgressItems } from './data/coord-progress';
import { useProgress } from '@/hooks';
import { scrollToId } from '@/lib/scroll';

export function VectorCoordPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('vector-coord', vectorCoordProgressItems);

  return (
    <div>
      <PageHeader
        stage="第四阶段 · 平面向量"
        title="4.3 坐标运算与数量积"
        narration={vectorCoordNarrations.intro}
        subtitle="坐标运算 + 数量积（点乘）：高考向量题的全部考点"
        tags={[
          { label: '难度 ★★☆☆☆', color: 'green' },
          { label: '高考必考', color: 'blue' },
          { label: '约2小时', color: 'purple' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
<ExportButton title="4.3 坐标运算与数量积" />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-3 mb-3">
        <p className="font-bold text-gray-800 mb-2">📋 知识地图</p>
        <div className="text-gray-600 space-y-1">
          <button onClick={() => scrollToId('coord-repr')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">一、向量的坐标表示</button>
          <button onClick={() => scrollToId('coord-ops')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">二、坐标运算</button>
          <button onClick={() => scrollToId('coord-mag')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">三、模与距离</button>
          <button onClick={() => scrollToId('coord-mid')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">四、中点公式</button>
          <button onClick={() => scrollToId('coord-dot')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">五、数量积（点乘）</button>
          <button onClick={() => scrollToId('coord-perp')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">六、垂直与平行判定</button>
        </div>
      </div>

      {/* 速通路线图 */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-3 mb-3">
        <p className="font-bold text-blue-900 text-lg mb-1">速通路线图：坐标运算就3步</p>
        <p className="text-blue-700 text-sm mb-3">向量用坐标表示后，所有运算都变成了简单的数字计算！</p>
        <div className="grid grid-cols-3 gap-2 text-sm">
          <div className="bg-white rounded-xl p-3 border border-blue-100">
            <p className="font-bold text-gray-800">① 坐标表示</p>
            <p className="text-gray-500 mt-1">向量 = (x, y)，一对数字搞定</p>
          </div>
          <div className="bg-white rounded-xl p-3 border border-blue-100">
            <p className="font-bold text-gray-800">② 加减数乘</p>
            <p className="text-gray-500 mt-1">对应坐标直接算</p>
          </div>
          <div className="bg-white rounded-xl p-3 border border-blue-100">
            <p className="font-bold text-gray-800">③ 模和距离</p>
            <p className="text-gray-500 mt-1">勾股定理求长度</p>
          </div>
        </div>
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 1: 坐标表示 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="coord-repr" className="mb-3 scroll-mt-4">
        <Collapsible title="一、向量的坐标表示" defaultOpen storageKey="vector-coord:repr" headerExtra={<SpeakButton text={vectorCoordNarrations.coordRepresent} />}>
          <p className="text-blue-600 mb-2">🎯 学完你能：把向量写成坐标形式 (x, y)。</p>
          <div className="space-y-0.5 text-gray-700">

            {/* 核心概念 */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-2">
              <p className="font-bold text-lg text-blue-800 mb-1">什么是向量的坐标？</p>
              <p>在平面直角坐标系中，向量可以用一对数字 <Math tex="(x, y)" /> 来表示</p>
              <div className="bg-white rounded-lg p-2 border border-blue-100 mt-1">
                <p className="text-center text-lg"><Math tex="\vec{a} = (x, y)" /></p>
                <p className="text-center text-gray-500 mt-1">x 是水平方向的分量，y 是竖直方向的分量</p>
              </div>
              <p className="text-blue-700 mt-1 text-sm">就像GPS定位一样：告诉你往右走多少、往上走多少，就能确定方向和距离。</p>
            </div>

            {/* 怎么求坐标 */}
            <div className="bg-gray-50 rounded-lg p-2">
              <p className="font-bold text-gray-800 mb-1">怎么求向量的坐标？</p>
              <div className="bg-white rounded-lg p-2 border border-gray-200">
                <p className="text-center"><strong>终点坐标 - 起点坐标</strong></p>
                <p className="text-center mt-1">
                  起点 <Math tex="A(x_1, y_1)" />，终点 <Math tex="B(x_2, y_2)" />
                </p>
                <p className="text-center mt-1 text-lg">
                  <Math tex="\vec{AB} = (x_2 - x_1,\; y_2 - y_1)" />
                </p>
              </div>
            </div>

            {/* 例子 */}
            <div className="bg-gray-50 rounded-lg p-2">
              <p className="font-bold text-gray-800 mb-1">实战练习</p>
              <div className="space-y-1">
                <div className="bg-white rounded-lg p-2 border border-gray-200">
                  <p className="font-bold text-gray-700">例1：</p>
                  <p><Math tex="A(1, 3)" />，<Math tex="B(4, 7)" />，求 <Math tex="\vec{AB}" /></p>
                  <p className="text-green-700 mt-1"><strong>答：</strong><Math tex="\vec{AB} = (4-1,\; 7-3) = (3, 4)" /></p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-gray-200">
                  <p className="font-bold text-gray-700">例2：</p>
                  <p><Math tex="A(2, 5)" />，<Math tex="B(-1, 2)" />，求 <Math tex="\vec{AB}" /> 和 <Math tex="\vec{BA}" /></p>
                  <p className="text-green-700 mt-1"><strong>答：</strong><Math tex="\vec{AB} = (-1-2,\; 2-5) = (-3, -3)" /></p>
                  <p className="text-green-700"><Math tex="\vec{BA} = (2-(-1),\; 5-2) = (3, 3)" />（正好相反！）</p>
                </div>
              </div>
            </div>


          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 2: 坐标运算 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="coord-ops" className="mb-3 scroll-mt-4">
        <Collapsible title="二、坐标运算" defaultOpen storageKey="vector-coord:ops" headerExtra={<SpeakButton text={vectorCoordNarrations.coordOps} />}>
          <p className="text-blue-600 mb-2">🎯 学完你能：用坐标做向量的加减法和数乘。</p>
          <div className="space-y-0.5 text-gray-700">

            {/* 公式总结 */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-2">
              <p className="font-bold text-lg text-blue-800 mb-1">三大运算公式</p>
              <p className="text-blue-700 mb-1">设 <Math tex="\vec{a} = (x_1, y_1)" />，<Math tex="\vec{b} = (x_2, y_2)" />，则：</p>
              <div className="space-y-1">
                <div className="bg-white rounded-lg p-2 border border-blue-100">
                  <p className="font-bold text-gray-700 mb-0.5">加法：对应坐标相加</p>
                  <p className="text-center text-lg"><Math tex="\vec{a} + \vec{b} = (x_1 + x_2,\; y_1 + y_2)" /></p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-blue-100">
                  <p className="font-bold text-gray-700 mb-0.5">减法：对应坐标相减</p>
                  <p className="text-center text-lg"><Math tex="\vec{a} - \vec{b} = (x_1 - x_2,\; y_1 - y_2)" /></p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-blue-100">
                  <p className="font-bold text-gray-700 mb-0.5">数乘：每个坐标都乘</p>
                  <p className="text-center text-lg"><Math tex="\lambda\vec{a} = (\lambda x_1,\; \lambda y_1)" /></p>
                </div>
              </div>
            </div>

            {/* 一句话记忆 */}
            <div className="bg-gray-50 rounded-lg p-2">
              <p className="text-center font-bold text-gray-800">记忆口诀：<strong>对应坐标直接算，和数字运算一模一样</strong></p>
            </div>

            {/* 实战 */}
            <div className="bg-gray-50 rounded-lg p-2">
              <p className="font-bold text-gray-800 mb-1">实战练习</p>
              <div className="space-y-1">
                <div className="bg-white rounded-lg p-2 border border-gray-200">
                  <p className="font-bold text-gray-700">例1：</p>
                  <p><Math tex="\vec{a} = (2, 3)" />，<Math tex="\vec{b} = (1, -4)" />，求 <Math tex="\vec{a} + \vec{b}" /> 和 <Math tex="\vec{a} - \vec{b}" /></p>
                  <p className="text-green-700 mt-1"><strong>答：</strong><Math tex="\vec{a} + \vec{b} = (2+1,\; 3+(-4)) = (3, -1)" /></p>
                  <p className="text-green-700"><Math tex="\vec{a} - \vec{b} = (2-1,\; 3-(-4)) = (1, 7)" /></p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-gray-200">
                  <p className="font-bold text-gray-700">例2：</p>
                  <p><Math tex="\vec{a} = (3, -2)" />，求 <Math tex="2\vec{a}" /> 和 <Math tex="-3\vec{a}" /></p>
                  <p className="text-green-700 mt-1"><strong>答：</strong><Math tex="2\vec{a} = (6, -4)" />，<Math tex="-3\vec{a} = (-9, 6)" /></p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-gray-200">
                  <p className="font-bold text-gray-700">例3（综合）：</p>
                  <p><Math tex="\vec{a} = (1, 2)" />，<Math tex="\vec{b} = (3, -1)" />，求 <Math tex="2\vec{a} - 3\vec{b}" /></p>
                  <p className="text-green-700 mt-1"><strong>答：</strong><Math tex="2\vec{a} = (2, 4)" />，<Math tex="3\vec{b} = (9, -3)" /></p>
                  <p className="text-green-700"><Math tex="2\vec{a} - 3\vec{b} = (2-9,\; 4-(-3)) = (-7, 7)" /></p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-orange-200">
                  <p className="font-bold text-orange-700">例4（高考难度）：</p>
                  <p>已知 <Math tex="\vec{a} = (2, 1)" />，<Math tex="\vec{b} = (-1, 3)" />，若 <Math tex="\vec{c} = m\vec{a} + n\vec{b}" /> 且 <Math tex="\vec{c} = (5, -1)" />，求 m, n</p>
                  <p className="text-green-700 mt-1"><strong>答：</strong><Math tex="m\vec{a} + n\vec{b} = (2m-n,\; m+3n) = (5, -1)" /></p>
                  <p className="text-green-700">列方程组：<Math tex="\begin{cases} 2m - n = 5 \\ m + 3n = -1 \end{cases}" />，解得 <Math tex="m = 2,\; n = -1" /></p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-orange-200">
                  <p className="font-bold text-orange-700">例5（高考难度）：</p>
                  <p>已知 <Math tex="\vec{a} + \vec{b} = (4, 2)" />，<Math tex="\vec{a} - \vec{b} = (2, 6)" />，求 <Math tex="\vec{a}" /> 和 <Math tex="\vec{b}" /></p>
                  <p className="text-green-700 mt-1"><strong>答：</strong>两式相加：<Math tex="2\vec{a} = (6, 8)" />，所以 <Math tex="\vec{a} = (3, 4)" /></p>
                  <p className="text-green-700">两式相减：<Math tex="2\vec{b} = (2, -4)" />，所以 <Math tex="\vec{b} = (1, -2)" /></p>
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 3: 模与距离 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="coord-mag" className="mb-3 scroll-mt-4">
        <Collapsible title="三、模与距离" defaultOpen storageKey="vector-coord:mag" headerExtra={<SpeakButton text={vectorCoordNarrations.magnitude} />}>
          <p className="text-blue-600 mb-2">🎯 学完你能：用坐标求向量的长度和两点间距离。</p>
          <div className="space-y-0.5 text-gray-700">

            {/* 模的公式 */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-2">
              <p className="font-bold text-lg text-blue-800 mb-1">向量的模（长度）</p>
              <p className="text-blue-700 mb-1">其实就是<strong>勾股定理</strong>！x 是横边，y 是竖边，模是斜边：</p>
              <div className="bg-white rounded-lg p-2 border border-blue-100">
                <p className="text-center text-lg"><Math tex="|\vec{a}| = \sqrt{x^2 + y^2}" /></p>
              </div>
            </div>

            {/* 两点距离 */}
            <div className="bg-gray-50 rounded-lg p-2">
              <p className="font-bold text-gray-800 mb-1">两点间的距离</p>
              <p>知道了模的公式，两点间距离也就会了：</p>
              <div className="bg-white rounded-lg p-2 border border-gray-200 mt-1">
                <p className="text-center"><Math tex="A(x_1, y_1)" /> 到 <Math tex="B(x_2, y_2)" /> 的距离：</p>
                <p className="text-center text-lg mt-1"><Math tex="|AB| = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}" /></p>
              </div>
              <p className="text-gray-500 mt-1 text-sm">本质就是先求 <Math tex="\vec{AB}" /> 的坐标，再求它的模。</p>
            </div>

            {/* 单位向量 */}
            <div className="bg-gray-50 rounded-lg p-2">
              <p className="font-bold text-gray-800 mb-1">求单位向量</p>
              <p>方向不变、长度变成1的向量，就是单位向量：</p>
              <div className="bg-white rounded-lg p-2 border border-gray-200 mt-1">
                <p className="text-center text-lg"><Math tex="\vec{a}_0 = \frac{\vec{a}}{|\vec{a}|} = \left(\frac{x}{|\vec{a}|},\; \frac{y}{|\vec{a}|}\right)" /></p>
              </div>
              <p className="text-gray-500 mt-1 text-sm">每个坐标都除以模，长度就缩成1了。</p>
            </div>

            {/* 实战 */}
            <div className="bg-gray-50 rounded-lg p-2">
              <p className="font-bold text-gray-800 mb-1">实战练习</p>
              <div className="space-y-1">
                <div className="bg-white rounded-lg p-2 border border-gray-200">
                  <p className="font-bold text-gray-700">例1：</p>
                  <p>求 <Math tex="\vec{a} = (3, 4)" /> 的模</p>
                  <p className="text-green-700 mt-1"><strong>答：</strong><Math tex="|\vec{a}| = \sqrt{3^2 + 4^2} = \sqrt{9+16} = \sqrt{25} = 5" /></p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-gray-200">
                  <p className="font-bold text-gray-700">例2：</p>
                  <p>求 <Math tex="A(1, 2)" /> 到 <Math tex="B(4, 6)" /> 的距离</p>
                  <p className="text-green-700 mt-1"><strong>答：</strong><Math tex="|AB| = \sqrt{(4-1)^2 + (6-2)^2} = \sqrt{9+16} = 5" /></p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-gray-200">
                  <p className="font-bold text-gray-700">例3：</p>
                  <p>求 <Math tex="\vec{a} = (3, 4)" /> 方向上的单位向量</p>
                  <p className="text-green-700 mt-1"><strong>答：</strong>模为5，所以 <Math tex="\vec{a}_0 = \left(\frac{3}{5},\; \frac{4}{5}\right)" /></p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-orange-200">
                  <p className="font-bold text-orange-700">例4（高考难度）：</p>
                  <p>已知 <Math tex="\vec{a} = (1, 2)" />，<Math tex="\vec{b} = (x, 1)" />，且 <Math tex="|\vec{a} + \vec{b}| = \sqrt{10}" />，求 x</p>
                  <p className="text-green-700 mt-1"><strong>答：</strong><Math tex="\vec{a} + \vec{b} = (1+x,\; 3)" /></p>
                  <p className="text-green-700"><Math tex="|\vec{a} + \vec{b}| = \sqrt{(1+x)^2 + 9} = \sqrt{10}" /></p>
                  <p className="text-green-700"><Math tex="(1+x)^2 + 9 = 10" />，<Math tex="(1+x)^2 = 1" />，<Math tex="x = 0" /> 或 <Math tex="x = -2" /></p>
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 4: 中点公式 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="coord-mid" className="mb-3 scroll-mt-4">
        <Collapsible title="四、中点公式" defaultOpen storageKey="vector-coord:mid" headerExtra={<SpeakButton text={vectorCoordNarrations.coordRepresent} />}>
          <p className="text-blue-600 mb-2">🎯 学完你能：求线段中点坐标，理解向量的中点关系。</p>
          <div className="space-y-0.5 text-gray-700">

            {/* 中点公式 */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-2">
              <p className="font-bold text-lg text-blue-800 mb-1">中点坐标公式</p>
              <p className="text-blue-700 mb-1"><Math tex="A(x_1, y_1)" /> 和 <Math tex="B(x_2, y_2)" /> 的中点 <Math tex="M" />：</p>
              <div className="bg-white rounded-lg p-2 border border-blue-100">
                <p className="text-center text-lg"><Math tex="M = \left(\frac{x_1+x_2}{2},\; \frac{y_1+y_2}{2}\right)" /></p>
              </div>
              <p className="text-blue-700 mt-1 text-sm">就是两个坐标取平均值，非常好记。</p>
            </div>

            {/* 向量形式 */}
            <div className="bg-gray-50 rounded-lg p-2">
              <p className="font-bold text-gray-800 mb-1">用向量理解中点</p>
              <p>如果 M 是 AB 的中点，那么：</p>
              <div className="bg-white rounded-lg p-2 border border-gray-200 mt-1">
                <p className="text-center text-lg"><Math tex="\vec{OM} = \frac{1}{2}(\vec{OA} + \vec{OB})" /></p>
              </div>
              <p className="text-gray-500 mt-1 text-sm">中点的位置向量 = 两个端点位置向量的平均值。</p>
            </div>

            {/* 实战 */}
            <div className="bg-gray-50 rounded-lg p-2">
              <p className="font-bold text-gray-800 mb-1">实战练习</p>
              <div className="space-y-1">
                <div className="bg-white rounded-lg p-2 border border-gray-200">
                  <p className="font-bold text-gray-700">例1：</p>
                  <p><Math tex="A(2, 6)" />，<Math tex="B(8, 2)" />，求中点 M 的坐标</p>
                  <p className="text-green-700 mt-1"><strong>答：</strong><Math tex="M = \left(\frac{2+8}{2},\; \frac{6+2}{2}\right) = (5, 4)" /></p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-gray-200">
                  <p className="font-bold text-gray-700">例2：</p>
                  <p>已知 <Math tex="A(1, 3)" />，中点 <Math tex="M(4, 5)" />，求 B 的坐标</p>
                  <p className="text-green-700 mt-1"><strong>答：</strong>由 <Math tex="\frac{1+x}{2}=4" /> 得 <Math tex="x=7" />，<Math tex="\frac{3+y}{2}=5" /> 得 <Math tex="y=7" />，所以 <Math tex="B(7, 7)" /></p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-orange-200">
                  <p className="font-bold text-orange-700">例3（高考难度）：</p>
                  <p>三角形 ABC 中，<Math tex="A(1, 3)" />，<Math tex="B(5, 1)" />，<Math tex="C(3, 7)" />，求重心 G</p>
                  <p className="text-green-700 mt-1"><strong>答：</strong><Math tex="G = \left(\frac{1+5+3}{3},\; \frac{3+1+7}{3}\right) = (3,\; \frac{11}{3})" /></p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-orange-200">
                  <p className="font-bold text-orange-700">例4（高考难度）：</p>
                  <p>平行四边形 ABCD 中，<Math tex="A(1, 2)" />，<Math tex="B(4, 3)" />，<Math tex="C(6, 7)" />，求 D</p>
                  <p className="text-green-700 mt-1"><strong>答：</strong>平行四边形对角线互相平分，AC 中点 = BD 中点</p>
                  <p className="text-green-700">AC 中点 = <Math tex="\left(\frac{1+6}{2},\; \frac{2+7}{2}\right) = (3.5,\; 4.5)" /></p>
                  <p className="text-green-700">由 <Math tex="\frac{4+x}{2}=3.5" /> 得 <Math tex="x=3" />，<Math tex="\frac{3+y}{2}=4.5" /> 得 <Math tex="y=6" />，所以 <Math tex="D(3, 6)" /></p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-orange-200">
                  <p className="font-bold text-orange-700">例5（高考难度）：</p>
                  <p><Math tex="\vec{a} = (2, 4)" />，<Math tex="\vec{b} = (6, 2)" />，求 <Math tex="\frac{1}{2}(\vec{a}+\vec{b})" /> 并说明几何意义</p>
                  <p className="text-green-700 mt-1"><strong>答：</strong><Math tex="\vec{a}+\vec{b} = (8, 6)" />，<Math tex="\frac{1}{2}(\vec{a}+\vec{b}) = (4, 3)" /></p>
                  <p className="text-green-700">几何意义：以 O 为起点，<Math tex="\vec{a}" /> 和 <Math tex="\vec{b}" /> 为两边构成的平行四边形，<Math tex="(4,3)" /> 就是对角线中点的位置向量</p>
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 5: 数量积（点乘） */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="coord-dot" className="mb-3 scroll-mt-4">
        <Collapsible title="五、数量积（点乘）" defaultOpen storageKey="vector-coord:dot" headerExtra={<SpeakButton text={vectorCoordNarrations.coordOps} />}>
          <p className="text-blue-600 mb-2">🎯 学完你能：计算两个向量的数量积，用数量积求夹角。</p>
          <div className="space-y-0.5 text-gray-700">

            {/* 什么是数量积 */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-2">
              <p className="font-bold text-lg text-blue-800 mb-1">什么是数量积？</p>
              <p>两个向量"乘"出一个<strong>数字</strong>（不是向量！），也叫<strong>点乘</strong>或<strong>内积</strong></p>
              <div className="bg-white rounded-lg p-2 border border-blue-100 mt-1 space-y-1">
                <p className="font-bold text-gray-700">几何形式：</p>
                <p className="text-center text-lg"><Math tex="\vec{a} \cdot \vec{b} = |\vec{a}||\vec{b}|\cos\theta" /></p>
                <p className="text-center text-gray-500 text-sm">θ 是两个向量的夹角（0° ≤ θ ≤ 180°）</p>
                <p className="font-bold text-gray-700 mt-1">坐标形式（做题用这个）：</p>
                <p className="text-center text-lg"><Math tex="\vec{a} \cdot \vec{b} = x_1 x_2 + y_1 y_2" /></p>
                <p className="text-center text-gray-500 text-sm">对应坐标相乘再相加，比加减法还简单</p>
              </div>
            </div>

            {/* 求夹角 */}
            <div className="bg-gray-50 rounded-lg p-2">
              <p className="font-bold text-gray-800 mb-1">用数量积求夹角</p>
              <p>把两个公式联立，解出 cosθ：</p>
              <div className="bg-white rounded-lg p-2 border border-gray-200 mt-1">
                <p className="text-center text-lg"><Math tex="\cos\theta = \frac{\vec{a} \cdot \vec{b}}{|\vec{a}||\vec{b}|} = \frac{x_1 x_2 + y_1 y_2}{\sqrt{x_1^2+y_1^2} \cdot \sqrt{x_2^2+y_2^2}}" /></p>
              </div>
              <p className="text-gray-500 mt-1 text-sm">步骤：① 算点乘 → ② 算两个模 → ③ 除一下 → ④ 反查角度</p>
            </div>

            {/* 实战 */}
            <div className="bg-gray-50 rounded-lg p-2">
              <p className="font-bold text-gray-800 mb-1">实战练习</p>
              <div className="space-y-1">
                <div className="bg-white rounded-lg p-2 border border-gray-200">
                  <p className="font-bold text-gray-700">例1：</p>
                  <p><Math tex="\vec{a} = (1, 2)" />，<Math tex="\vec{b} = (3, -1)" />，求 <Math tex="\vec{a} \cdot \vec{b}" /></p>
                  <p className="text-green-700 mt-1"><strong>答：</strong><Math tex="\vec{a} \cdot \vec{b} = 1 \times 3 + 2 \times (-1) = 3 - 2 = 1" /></p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-gray-200">
                  <p className="font-bold text-gray-700">例2：</p>
                  <p><Math tex="\vec{a} = (1, 1)" />，<Math tex="\vec{b} = (1, 0)" />，求夹角 θ</p>
                  <p className="text-green-700 mt-1"><strong>答：</strong><Math tex="\vec{a} \cdot \vec{b} = 1" />，<Math tex="|\vec{a}| = \sqrt{2}" />，<Math tex="|\vec{b}| = 1" /></p>
                  <p className="text-green-700"><Math tex="\cos\theta = \frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2}" />，所以 <Math tex="\theta = 45°" /></p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-orange-200">
                  <p className="font-bold text-orange-700">例3（高考难度）：</p>
                  <p>已知 <Math tex="|\vec{a}| = 2" />，<Math tex="|\vec{b}| = 3" />，<Math tex="\vec{a} \cdot \vec{b} = 3" />，求 <Math tex="|\vec{a} + \vec{b}|" /></p>
                  <p className="text-green-700 mt-1"><strong>答：</strong><Math tex="|\vec{a}+\vec{b}|^2 = (\vec{a}+\vec{b}) \cdot (\vec{a}+\vec{b})" /></p>
                  <p className="text-green-700"><Math tex="= \vec{a}\cdot\vec{a} + 2\vec{a}\cdot\vec{b} + \vec{b}\cdot\vec{b} = |\vec{a}|^2 + 2\vec{a}\cdot\vec{b} + |\vec{b}|^2" /></p>
                  <p className="text-green-700"><Math tex="= 4 + 6 + 9 = 19" />，所以 <Math tex="|\vec{a}+\vec{b}| = \sqrt{19}" /></p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-orange-200">
                  <p className="font-bold text-orange-700">例4（高考难度）：</p>
                  <p><Math tex="\vec{a} = (1, \sqrt{3})" />，<Math tex="\vec{b} = (\sqrt{3}, 1)" />，求夹角 θ</p>
                  <p className="text-green-700 mt-1"><strong>答：</strong><Math tex="\vec{a}\cdot\vec{b} = \sqrt{3} + \sqrt{3} = 2\sqrt{3}" /></p>
                  <p className="text-green-700"><Math tex="|\vec{a}| = \sqrt{1+3} = 2" />，<Math tex="|\vec{b}| = \sqrt{3+1} = 2" /></p>
                  <p className="text-green-700"><Math tex="\cos\theta = \frac{2\sqrt{3}}{2 \times 2} = \frac{\sqrt{3}}{2}" />，查表得 <Math tex="\theta = 30°" /></p>
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 6: 垂直与平行判定 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="coord-perp" className="mb-3 scroll-mt-4">
        <Collapsible title="六、垂直与平行判定" defaultOpen storageKey="vector-coord:perp" headerExtra={<SpeakButton text={vectorCoordNarrations.magnitude} />}>
          <p className="text-blue-600 mb-2">🎯 学完你能：用坐标判断两个向量是否垂直或平行。高考最爱考！</p>
          <div className="space-y-0.5 text-gray-700">

            {/* 垂直 */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-2">
              <p className="font-bold text-lg text-blue-800 mb-1">垂直判定</p>
              <div className="bg-white rounded-lg p-2 border border-blue-100">
                <p className="text-center text-lg"><Math tex="\vec{a} \perp \vec{b} \;\Leftrightarrow\; \vec{a} \cdot \vec{b} = 0 \;\Leftrightarrow\; x_1 x_2 + y_1 y_2 = 0" /></p>
              </div>
              <p className="text-blue-700 mt-1">记住：<strong>点乘为零 = 垂直</strong>，这是高考最常考的一句话</p>
            </div>

            {/* 平行 */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-2">
              <p className="font-bold text-lg text-green-800 mb-1">平行判定</p>
              <div className="bg-white rounded-lg p-2 border border-green-100">
                <p className="text-center text-lg"><Math tex="\vec{a} \parallel \vec{b} \;\Leftrightarrow\; x_1 y_2 - x_2 y_1 = 0" /></p>
              </div>
              <p className="text-green-700 mt-1">记住：<strong>交叉相乘相减为零 = 平行</strong>（像打"×"一样交叉乘）</p>
            </div>

            {/* 对比记忆 */}
            <div className="bg-gray-50 rounded-lg p-2">
              <p className="font-bold text-gray-800 mb-1">对比记忆</p>
              <div className="grid grid-cols-2 gap-1">
                <div className="bg-white rounded-lg p-2 border border-blue-200 text-center">
                  <p className="font-bold text-blue-700">垂直 ⊥</p>
                  <p className="mt-1"><Math tex="x_1 x_2 + y_1 y_2 = 0" /></p>
                  <p className="text-gray-500 text-sm mt-1">对应乘 → 相<strong>加</strong> → 等于0</p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-green-200 text-center">
                  <p className="font-bold text-green-700">平行 ∥</p>
                  <p className="mt-1"><Math tex="x_1 y_2 - x_2 y_1 = 0" /></p>
                  <p className="text-gray-500 text-sm mt-1">交叉乘 → 相<strong>减</strong> → 等于0</p>
                </div>
              </div>
            </div>

            {/* 实战 */}
            <div className="bg-gray-50 rounded-lg p-2">
              <p className="font-bold text-gray-800 mb-1">实战练习</p>
              <div className="space-y-1">
                <div className="bg-white rounded-lg p-2 border border-gray-200">
                  <p className="font-bold text-gray-700">例1（高考经典）：</p>
                  <p>若 <Math tex="\vec{a} = (2, m)" /> 与 <Math tex="\vec{b} = (3, 1)" /> 垂直，求 m</p>
                  <p className="text-green-700 mt-1"><strong>答：</strong><Math tex="\vec{a} \cdot \vec{b} = 2 \times 3 + m \times 1 = 6 + m = 0" />，所以 <Math tex="m = -6" /></p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-gray-200">
                  <p className="font-bold text-gray-700">例2（高考经典）：</p>
                  <p>若 <Math tex="\vec{a} = (1, 2)" /> 与 <Math tex="\vec{b} = (m, 4)" /> 平行，求 m</p>
                  <p className="text-green-700 mt-1"><strong>答：</strong><Math tex="1 \times 4 - 2 \times m = 4 - 2m = 0" />，所以 <Math tex="m = 2" /></p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-gray-200">
                  <p className="font-bold text-gray-700">例3（综合）：</p>
                  <p><Math tex="\vec{a} = (1, 2)" />，<Math tex="\vec{b} = (3, -1)" />，它们垂直还是平行？</p>
                  <p className="text-green-700 mt-1"><strong>答：</strong>点乘 <Math tex="= 1 \times 3 + 2 \times(-1) = 1 \neq 0" />，不垂直</p>
                  <p className="text-green-700">交叉 <Math tex="= 1 \times(-1) - 2 \times 3 = -7 \neq 0" />，也不平行</p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-orange-200">
                  <p className="font-bold text-orange-700">例4（高考难度）：</p>
                  <p><Math tex="\vec{a} = (1, 2)" />，<Math tex="\vec{b} = (3, m)" />，<Math tex="\vec{c} = \vec{a} + t\vec{b}" />，若 <Math tex="\vec{c} \perp \vec{b}" />，求 t</p>
                  <p className="text-green-700 mt-1"><strong>答：</strong><Math tex="\vec{c} = (1+3t,\; 2+mt)" /></p>
                  <p className="text-green-700">设 m=1（举例），<Math tex="\vec{c} = (1+3t,\; 2+t)" /></p>
                  <p className="text-green-700"><Math tex="\vec{c} \cdot \vec{b} = 3(1+3t) + 1(2+t) = 5 + 10t = 0" />，<Math tex="t = -\frac{1}{2}" /></p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-orange-200">
                  <p className="font-bold text-orange-700">例5（高考难度）：</p>
                  <p>已知 <Math tex="A(1, 2)" />，<Math tex="B(3, 6)" />，<Math tex="C(5, k)" />，若 <Math tex="\vec{AB} \parallel \vec{AC}" />，求 k</p>
                  <p className="text-green-700 mt-1"><strong>答：</strong><Math tex="\vec{AB} = (2, 4)" />，<Math tex="\vec{AC} = (4, k-2)" /></p>
                  <p className="text-green-700">平行条件：<Math tex="2(k-2) - 4 \times 4 = 2k - 4 - 16 = 0" />，<Math tex="k = 10" /></p>
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      </LessonLayout>
    </div>
  );
}
