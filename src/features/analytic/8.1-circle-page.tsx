import { Math as MathTex, Collapsible, PageHeader, LessonLayout, ExportButton, DebugGeo2dSvg, UnifiedDebugToggle, useGeo2dDebug, PracticeCard, PageBreak } from '@/components/shared';
import { circleAnswers } from './8.1-circle-answers';
import { circleProgressItems } from './data/8.1/8.1-circle-progress';
import { circlePointPractice, circleEq2Practice, circleEx3Practice, circleEx4Practice, circleTangentOnPointPractice, circleTangentSummaryPractice, circleMidchordPractice, circleGeneralFormPractice, circleCirclePractice, circleCommonChordPractice, circleTangentCountPractice, circleSymPractice, circlePointSymPractice, circleParamPractice } from './data/8.1/8.1-circle-questions';
import { circleStandardDiagram, circleGeneralDiagram, circlePointAllDiagram, circleLineApartDiagram, circleLineTangentDiagram, circleLineIntersectDiagram, circleChordBisectorDiagram, circleEx3Step1Diagram, circleEx3Step2Diagram, circleEx3Step3Diagram, circleChordLengthDiagram, circleMinDiagram, circleDistRangeDiagram, circleTangentDiagram, circleTangentOnPointDiagram, circleTangentOutsideDiagram, circleTangentFormulaDiagram, circleMidchordDiagram, circleCircle5Diagrams, circleTangentLine5Diagrams, tangentLineExample2Diagram, circleCommonChordDiagram, circleChordConceptDiagram, circleSymmetryDiagram } from './data/8.1/8.1-circle-diagrams';
import { useProgress } from '@/hooks';

export function CirclePage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('circle', circleProgressItems);
  const geo2dDebugOn = useGeo2dDebug();

  return (
    <div>
      <PageHeader
        stage=""
        title="8.1 圆"
        subtitle="圆的方程、直线与圆的位置关系、切线与弦长"
        tags={[
          { label: '难度 ★★☆☆☆', color: 'green' },
          { label: '高考必考', color: 'red' },
          { label: '约1天', color: 'blue' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="8.1 圆" />
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      <section id="circle-equations" className="mb-3 scroll-mt-4">
        <Collapsible title="一、圆的方程" defaultOpen storageKey="circle:equations">
          <div className="space-y-0 text-lg text-gray-800">

            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-green-800 border-b border-green-300 text-lg">① 方程形式与性质对照</div>
              <div className="px-2 py-1">
                <table className="w-full border-collapse text-base">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-2 py-1 text-center font-bold w-24">　</th>
                      <th className="border border-gray-300 px-2 py-1 text-center font-bold">标准方程</th>
                      <th className="border border-gray-300 px-2 py-1 text-center font-bold">一般方程</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1 text-center font-bold">图形</td>
                      <td className="border border-gray-300 px-1 py-1 text-center"><DebugGeo2dSvg data={circleStandardDiagram} width={210} height={175} /></td>
                      <td className="border border-gray-300 px-1 py-1 text-center"><DebugGeo2dSvg data={circleGeneralDiagram} width={210} height={175} /></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1 text-center font-bold">方程</td>
                      <td className="border border-gray-300 px-2 py-1 text-center"><MathTex tex="(x-a)^2+(y-b)^2=r^2" /></td>
                      <td className="border border-gray-300 px-2 py-1 text-center"><MathTex tex="x^2+y^2+Dx+Ey+F=0" /></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1 text-center font-bold">圆心</td>
                      <td className="border border-gray-300 px-2 py-1 text-center">直接读取 <MathTex tex="(a,\,b)" /></td>
                      <td className="border border-gray-300 px-2 py-1 text-center">配方得 <MathTex tex="\left(-\dfrac{D}{2},\;-\dfrac{E}{2}\right)" /></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1 text-center font-bold">半径</td>
                      <td className="border border-gray-300 px-2 py-1 text-center">直接读取 <MathTex tex="r" /></td>
                      <td className="border border-gray-300 px-2 py-1 text-center"><MathTex tex="r = \dfrac{1}{2}\sqrt{D^2+E^2-4F}" /></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1 text-center font-bold">成圆条件</td>
                      <td className="border border-gray-300 px-2 py-1 text-center"><MathTex tex="r > 0" /></td>
                      <td className="border border-gray-300 px-2 py-1 text-center"><MathTex tex="D^2+E^2-4F > 0" /></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1 text-center font-bold">互化</td>
                      <td className="border border-gray-300 px-2 py-1 text-center">展开整理得一般方程</td>
                      <td className="border border-gray-300 px-2 py-1 text-center">配方法化为标准方程</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>


            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-blue-800 border-b border-blue-300 text-lg">② 圆的定义</div>
              <div className="px-3 py-1">
                <div className="flex items-start gap-4">
                  <div className="flex-1 space-y-1">
                    <p>平面内到<strong>定点</strong>（圆心）距离等于<strong>定长</strong>（半径）的所有点的集合，叫做<strong>圆</strong>。</p>
                    <p>设圆心为 <MathTex tex="C(a,\,b)" />，半径为 <MathTex tex="r" />（<MathTex tex="r > 0" />），圆上任意一点 <MathTex tex="P(x,\,y)" /> 满足：</p>
                    <div className="bg-blue-50 border border-blue-200 rounded px-2 py-1 text-center">
                      <MathTex tex="|CP| = r" />
                    </div>
                  </div>
                  <DebugGeo2dSvg data={circleStandardDiagram} width={192} height={160} className="flex-shrink-0" />
                </div>
              </div>
            </div>

            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-amber-800 border-b border-amber-300 text-lg">③ 标准方程怎么来的（用两点距离公式推导）</div>
              <div className="px-3 py-1 space-y-1">
                <p><strong>第一步：用两点距离公式展开 <MathTex tex="|CP|" /></strong></p>
                <p className="ml-4">圆心 <MathTex tex="C(a,\,b)" />，圆上点 <MathTex tex="P(x,\,y)" />，代入两点距离公式：</p>
                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                  <MathTex tex="|CP| = \sqrt{(x-a)^2 + (y-b)^2}" />
                </div>

                <p><strong>第二步：代入 <MathTex tex="|CP| = r" />，两边平方去根号</strong></p>
                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                  <MathTex tex="\sqrt{(x-a)^2 + (y-b)^2} = r" />，两边平方得 <MathTex tex="(x-a)^2 + (y-b)^2 = r^2" />
                </div>

                <div className="bg-blue-100 border border-blue-300 rounded px-2 py-1 ml-4 text-center">
                  <MathTex tex="(x-a)^2 + (y-b)^2 = r^2 \quad (r > 0)" />
                </div>
                <p className="font-bold text-amber-700 mt-1">特殊情况：圆心在原点时，<MathTex tex="a = 0,\; b = 0" />，方程化简为 <MathTex tex="x^2 + y^2 = r^2" /></p>
              </div>
            </div>


            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-green-800 border-b border-green-300 text-lg">④ 读方程——标准方程直接读</div>
              <div className="px-3 py-1 space-y-1">
                <p>看 <MathTex tex="(x-a)^2+(y-b)^2=r^2" /> 的形式，有两种方法读圆心，半径取<strong>算术平方根</strong>：</p>
                <div className="flex gap-3 ml-2">
                  <div className="flex-1 bg-green-50 border border-green-200 rounded px-2 py-1">
                    <p className="font-bold text-green-800">方法一：令括号 = 0</p>
                    <p>令括号里等于零，解出 <MathTex tex="x" /> 和 <MathTex tex="y" />，即为圆心</p>
                    <p className="text-sm text-gray-600"><MathTex tex="(x-3)^2" />：令 <MathTex tex="x-3=0" />，得 <MathTex tex="x=3" /></p>
                  </div>
                  <div className="flex-1 bg-blue-50 border border-blue-200 rounded px-2 py-1">
                    <p className="font-bold text-blue-800">方法二：取相反数</p>
                    <p>括号里数字的相反数就是圆心坐标</p>
                    <p className="text-sm text-gray-600"><MathTex tex="(x-3)^2" />：<MathTex tex="-3" /> 取反得 <MathTex tex="3" /></p>
                  </div>
                </div>
                <p><strong>例1：</strong><MathTex tex="(x-3)^2 + (y+2)^2 = 16" /></p>
                <p className="ml-4">令 <MathTex tex="x-3=0" />，得 <MathTex tex="x=3" />；令 <MathTex tex="y+2=0" />，得 <MathTex tex="y=-2" />。圆心 <MathTex tex="(3,\,-2)" />，半径 <MathTex tex="r = \sqrt{16} = 4" /></p>
                <p><strong>例2：</strong><MathTex tex="x^2 + (y-5)^2 = 3" /></p>
                <p className="ml-4">令 <MathTex tex="x=0" />（无括号项）；令 <MathTex tex="y-5=0" />，得 <MathTex tex="y=5" />。圆心 <MathTex tex="(0,\,5)" />，半径 <MathTex tex="r = \sqrt{3}" /></p>
              </div>
            </div>

            <div className="border border-teal-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-teal-800 border-b border-teal-300 text-lg">⑤ 点与圆的位置关系</div>
              <div className="px-3 py-1 space-y-0">
                <div className="flex items-start gap-4">
                  <div className="flex-1 space-y-1">
                    <p>把点的坐标代入圆的方程左边，与右边 <MathTex tex="r^2" /> 比较大小。</p>
                    <p>以圆 <MathTex tex="(x-1)^2+(y+1)^2=9" /> 为例（圆心 <MathTex tex="(1,-1)" />，<MathTex tex="r^2=9" />）：</p>
                    <p>将点 <MathTex tex="(2,1)" /> 代入得 <MathTex tex="1^2+2^2=5 < 9" />，点在圆<strong className="text-green-700">内</strong></p>
                    <p>将点 <MathTex tex="(4,-1)" /> 代入得 <MathTex tex="3^2+0^2=9 = 9" />，点在圆<strong className="text-blue-700">上</strong></p>
                    <p>将点 <MathTex tex="(4,2)" /> 代入得 <MathTex tex="3^2+3^2=18 > 9" />，点在圆<strong className="text-red-700">外</strong></p>
                  </div>
                  <DebugGeo2dSvg data={circlePointAllDiagram} width={210} height={150} className="flex-shrink-0" />
                </div>
              </div>
            </div>

            <PracticeCard title="即时训练" module="circle-8.1" questions={circlePointPractice} shuffle={false} optionCols={2} printOptionCols={2} explanations={circleAnswers} />

          </div>
        </Collapsible>
      </section>

      <PageBreak />
      <section id="circle-line" className="mb-3 scroll-mt-4">
        <Collapsible title="二、直线与圆的位置关系" defaultOpen storageKey="circle:line">
          <div className="space-y-0 text-lg text-gray-800">

            {/* ① 三种位置关系 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-blue-800 border-b border-blue-300 text-lg">① 三种位置关系</div>
              <div className="px-3 py-2">
                <p className="mb-2">设圆心 <MathTex tex="C" /> 到直线 <MathTex tex="l" /> 的距离为 <MathTex tex="d" />，圆的半径为 <MathTex tex="r" />：</p>
                <div className="grid grid-cols-3 gap-3">
                  {/* 相离 */}
                  <div className="border border-gray-200 rounded-lg overflow-hidden text-center">
                    <div className="bg-gray-50 py-1 font-bold text-gray-600 border-b border-gray-200">相离</div>
                    <div className="py-1 flex justify-center">
                      <DebugGeo2dSvg data={circleLineApartDiagram} width={110} height={130} />
                    </div>
                    <div className="bg-gray-50 py-1.5 border-t border-gray-200 text-sm">
                      <MathTex tex="d > r" />，无公共点
                    </div>
                  </div>
                  {/* 相切 */}
                  <div className="border border-green-300 rounded-lg overflow-hidden text-center">
                    <div className="bg-green-50 py-1 font-bold text-green-700 border-b border-green-200">相切</div>
                    <div className="py-1 flex justify-center">
                      <DebugGeo2dSvg data={circleLineTangentDiagram} width={110} height={130} />
                    </div>
                    <div className="bg-green-50 py-1.5 border-t border-green-200 text-sm">
                      <MathTex tex="d = r" />，唯一公共点（切点 <MathTex tex="T" />）
                    </div>
                  </div>
                  {/* 相交 */}
                  <div className="border border-blue-300 rounded-lg overflow-hidden text-center">
                    <div className="bg-blue-50 py-1 font-bold text-blue-700 border-b border-blue-200">相交</div>
                    <div className="py-1 flex justify-center">
                      <DebugGeo2dSvg data={circleLineIntersectDiagram} width={110} height={130} />
                    </div>
                    <div className="bg-blue-50 py-1.5 border-t border-blue-200 text-sm">
                      <MathTex tex="d < r" />，两个公共点
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ② d 的计算 */}
            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-amber-800 border-b border-amber-300 text-lg">② 圆心到直线的距离公式（本质就是点到直线距离公式，圆心就是那个"点"）</div>
              <div className="px-3 py-1 space-y-0">
                <p>直线方程为 <MathTex tex="ax+by+c=0" />，圆心为 <MathTex tex="(m,\, n)" />，则</p>
                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1">
                  <MathTex tex="d = \dfrac{|am + bn + c|}{\sqrt{a^2+b^2}}" display />
                </div>
              </div>
            </div>

            {/* ③ 例题1 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-blue-800 border-b border-blue-300 text-lg">③ 例题1（判断位置关系）</div>
              <div className="px-3 py-1 space-y-0">
                <p className="font-bold">判断直线 <MathTex tex="3x+4y-1=0" /> 与圆 <MathTex tex="(x-1)^2+(y-2)^2=1" /> 的位置关系。</p>
                <p><strong>圆心</strong> <MathTex tex="(m,n)=(1,2)" />，<strong>半径</strong> <MathTex tex="r=1" />；<strong>直线系数：</strong><MathTex tex="a=3,\; b=4,\; c=-1" /></p>
                <p><strong>圆心到直线的距离：</strong></p>
                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                  <MathTex tex="d = \dfrac{|am+bn+c|}{\sqrt{a^2+b^2}} = \dfrac{|3\times1+4\times2+(-1)|}{\sqrt{3^2+4^2}} = \dfrac{10}{5} = 2" />
                </div>
                <p>因为 <MathTex tex="d=2 > 1=r" />，所以直线与圆<strong>相离</strong>。</p>
              </div>
            </div>

            {/* 原理卡片：直线上的点可以用一个参数表示 */}
            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-amber-800 border-b border-amber-300 bg-amber-50 text-lg">💡 技巧：直线上的点可以用一个参数表示</div>
              <div className="px-3 py-1 space-y-1">
                <p>若点 M 在直线 <MathTex tex="ax + by + c = 0" /> 上，可以从方程中把 <MathTex tex="y" /> 用 <MathTex tex="x" /> 表示，然后令 <MathTex tex="x = m" />，<br />这样圆心坐标就只含一个未知数。</p>
                <p>例如直线 <MathTex tex="2x + y - 1 = 0" />，由此得 <MathTex tex="y = -2x + 1" />，设 <MathTex tex="x = m" /></p>
                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1">
                  则直线上的点可以统一写成 <MathTex tex="M(m,\; -2m+1)" />
                </div>
                <p>这样设圆心后，"在直线上"自动满足，两个未知数变成一个，方程更容易解。</p>
              </div>
            </div>

            {/* 技巧卡片：两点在圆上，圆心在中垂线上 */}
            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-amber-800 border-b border-amber-300 bg-amber-50 text-lg">💡 技巧：两点在圆上，圆心在它们连线的中垂线上</div>
              <div className="px-3 py-1">
                <div className="flex gap-3 items-start">
                  <div className="flex-1 space-y-1">
                    <p>A、B、C 都在圆上，所以 <MathTex tex="|OA|=|OB|=|OC|=r" /></p>
                    <p>O 到 A、B 等距，所以 O 在 AB 中垂线（红）上</p>
                    <p>O 到 A、C 等距，所以 O 在 AC 中垂线（绿）上</p>
                    <p><strong>两条中垂线的交点，就是圆心 O。</strong></p>
                  </div>
                  <DebugGeo2dSvg data={circleChordBisectorDiagram} width={140} height={135} />
                </div>
                <p><strong>中垂线怎么求（以例题2的 A(3,0)、B(0,1) 为例）：</strong>中点为 <MathTex tex="\left(\frac{3}{2},\frac{1}{2}\right)" />；AB 斜率为 <MathTex tex="\frac{1-0}{0-3}=-\frac{1}{3}" /><br />所以中垂线斜率为 <MathTex tex="3" />，代入点斜式：<MathTex tex="y-\frac{1}{2}=3\!\left(x-\frac{3}{2}\right)" />，整理得 <MathTex tex="y=3x-4" />。</p>
              </div>
            </div>

            <PageBreak />
            {/* ④ 例题2（求圆方程） */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-blue-800 border-b border-blue-300 text-lg">④ 例题2（求圆方程）</div>
              <div className="px-3 py-1 space-y-1 text-base">
                <p className="font-bold">设点 M 在直线 <MathTex tex="2x+y-1=0" /> 上，点 <MathTex tex="(3,0)" /> 和 <MathTex tex="(0,1)" /> 均在 ⊙M 上，求 ⊙M 的方程。</p>

                <div className="bg-amber-50 border border-amber-200 rounded px-1 py-1">
                  <p><strong>读题：</strong>M 是圆心，在直线上即圆心坐标满足直线方程；两点在圆上即它们到圆心距离相等（即等于半径）。</p>
                </div>

                {/* 方法一 */}
                <p><strong>方法一（中垂线法）</strong></p>
                <div className="space-y-1 ml-2">
                  <p>1. <strong>求中点</strong>（中垂线必过此点） <MathTex tex="\left(\dfrac{3+0}{2},\,\dfrac{0+1}{2}\right) = \left(\dfrac{3}{2},\,\dfrac{1}{2}\right)" /></p>
                  <p>2. <strong>求中垂线斜率</strong> <MathTex tex="k_{AB} = \dfrac{1-0}{0-3} = -\dfrac{1}{3}" />，由垂直关系 <MathTex tex="k \cdot k_{AB} = -1" />，所以 <MathTex tex="k = -\dfrac{1}{k_{AB}}" /></p>
                  <p className="ml-4">代入 <MathTex tex="k_{AB} = -\dfrac{1}{3}" /> 得 <MathTex tex="k = -\dfrac{1}{-\frac{1}{3}} = -(-3) = 3" /></p>
                  <p>3. <strong>写出中垂线方程</strong>（代入点斜式） <MathTex tex="y - \dfrac{1}{2} = 3\!\left(x - \dfrac{3}{2}\right) \implies y = 3x - 4" /></p>
                  <p>4. <strong>联立两条直线</strong> 圆心既在中垂线上，又在已知直线上，所以两条直线的交点就是圆心</p>
                  <p className="ml-4"><MathTex tex="\begin{cases} y = 3x-4 \\ 2x+y-1=0 \end{cases}" /> 解得 <MathTex tex="x=1,\;y=-1" />，圆心 <MathTex tex="M(1,-1)" /></p>
                  <p>5. <strong>求半径及方程</strong> <MathTex tex="r = \sqrt{(3-1)^2+(0+1)^2} = \sqrt{5} \implies (x-1)^2+(y+1)^2=5" /></p>
                </div>

                {/* 方法二 */}
                <hr className="border-gray-500 border-dashed" />
                <p><strong>方法二（参数代入法，更简洁）</strong></p>

                <p><strong>第一步</strong>，圆心在直线 <MathTex tex="2x+y-1=0" /> 上，即 <MathTex tex="y=-2x+1" /></p>
                <p>设 <MathTex tex="x=m" />，则 <MathTex tex="y=-2m+1" />，得⊙<MathTex tex="M(m,\,-2m+1)" />（用一个参数表示，自动满足直线条件）</p>

                <p><strong>第二步</strong>，两点到圆心距离相等，即 <MathTex tex="|MA| = |MB|" />，由两点距离公式</p>
                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                  <MathTex tex="|MA| = \sqrt{(3-m)^2 + (0-(-2m+1))^2}" />
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                  <MathTex tex="|MB| = \sqrt{(0-m)^2 + (1-(-2m+1))^2}" />
                </div>
                <p className="ml-4">令 <MathTex tex="|MA| = |MB|" />，化简得</p>
                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                  <MathTex tex="\sqrt{(3-m)^2 + (2m-1)^2} = \sqrt{m^2 + (2m)^2}" />
                </div>
                <p className="ml-4">两边平方，展开得</p>
                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                  <MathTex tex="9 - 6m + m^2 + 4m^2 - 4m + 1 = m^2 + 4m^2" />
                </div>
                <p className="ml-4">化简得 <MathTex tex="-10m + 10 = 0" />，解得 <MathTex tex="m = 1" /></p>
                <p className="ml-4">代入 <MathTex tex="m=1" />，圆心 <MathTex tex="M(m,\,-2m+1) = M(1,\,-2\times1+1) = M(1,-1)" /></p>

                <p><strong>第三步</strong>，已知圆上一点 <MathTex tex="(3,0)" />，圆心 <MathTex tex="(1,-1)" />，用两点距离公式 <MathTex tex="r=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}" /> 求半径方程</p>
                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                  <MathTex tex="r = \sqrt{(3-1)^2+(0+1)^2} = \sqrt{5} \implies (x-1)^2+(y+1)^2=5" />
                </div>
              </div>
            </div>

            {/* 即时训练 — 例题2 */}
            <PracticeCard questions={circleEq2Practice} title="✏️ 即时训练 — 求圆方程（2 题）" optionCols={2} printOptionCols={2} explanations={circleAnswers} />

            <PageBreak />

            {/* 知识点：过两点最小圆 */}
            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-amber-800 border-b border-amber-300 bg-amber-50 text-lg">💡 知识点：过两点的最小圆</div>
              <div className="px-3 py-1 flex gap-3 items-center">
                <div className="flex-1 space-y-1">
                  <p>过两点 A、B 可以画无数个圆，但其中<strong>最小的那个</strong>是以 AB 为直径的圆。</p>
                  <p>原因：AB 是圆的弦，弦长 ≤ 直径，即 <MathTex tex="|AB| \leq 2r" />，所以 <MathTex tex="r \geq \dfrac{|AB|}{2}" />。</p>
                  <p>等号成立时（AB 恰好是直径），r 取最小值 <MathTex tex="\dfrac{|AB|}{2}" />，圆心为 AB 的中点。</p>
                </div>
                <DebugGeo2dSvg data={circleMinDiagram} width={135} height={108} />
              </div>
            </div>

            {/* 知识点：点到圆上各点距离的范围 */}
            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-amber-800 border-b border-amber-300 bg-amber-50 text-lg">💡 知识点：点到圆上各点距离的范围</div>
              <div className="px-3 py-1 flex gap-3 items-center">
                <div className="flex-1 space-y-1">
                  <p>设圆心为 C，半径为 r，圆外（或圆内）有一点 P，圆上任意一点为 M。</p>
                  <p>由三角形两边之差 ≤ 第三边 ≤ 两边之和，得</p>
                  <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1">
                    <MathTex tex="\bigl||PC| - r\bigr| \;\leq\; |PM| \;\leq\; |PC| + r" display />
                  </div>
                  <p>当 P 在圆外时（<MathTex tex="|PC|>r" />），化简为 <MathTex tex="|PC|-r \leq |PM| \leq |PC|+r" /></p>
                  <p><strong>最近距离</strong>：P 与 M 在圆心同侧，<MathTex tex="|PM|_{\min} = |PC| - r" /></p>
                  <p><strong>最远距离</strong>：P 与 M 在圆心两侧，<MathTex tex="|PM|_{\max} = |PC| + r" /></p>
                </div>
                <DebugGeo2dSvg data={circleDistRangeDiagram} width={122} height={130} />
              </div>
            </div>

            {/* ⑤ 例题3（点到圆上距离的取值范围） */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-blue-800 border-b border-blue-300 text-lg">⑤ 例题3（点到圆上距离的取值范围）</div>
              <div className="px-3 py-1 space-y-1 text-base">
                <p className="font-bold">圆 C 为过点 <MathTex tex="P(4,3)" />、<MathTex tex="Q(2,5)" /> 的圆中最小的圆，则圆 C 上的任意一点 M 到原点 O 的距离的取值范围为？</p>

                <div className="bg-amber-50 border border-amber-200 rounded px-2 py-1">
                  <p><strong>读题：</strong>"过 P、Q 的圆中最小的圆"，就是以 PQ 为直径的圆——直径是最短的弦，再缩小就过不了两点了。求 M 到原点的距离范围，就是求圆上的点到固定点 O 的最近和最远距离。</p>
                </div>

                <p><strong>解：</strong></p>

                {/* 第一步 */}
                <div className="flex gap-2 items-start">
                  <div className="flex-1 space-y-1">
                    <p><strong>第一步</strong>，确定圆心和半径。最小圆以 PQ 为直径，圆心 C 是 PQ 的中点</p>
                    <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                      <MathTex tex="C = \left(\frac{4+2}{2},\;\frac{3+5}{2}\right) = (3,\,4)" />
                    </div>
                    <p className="ml-4">半径为 PQ 长度的一半</p>
                    <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                      <MathTex tex="r = \frac{|PQ|}{2} = \frac{\sqrt{(4-2)^2+(3-5)^2}}{2} = \frac{\sqrt{8}}{2} = \sqrt{2}" />
                    </div>
                  </div>
                  <DebugGeo2dSvg data={circleEx3Step1Diagram} width={108} height={108} />
                </div>

                {/* 第二步 */}
                <div className="flex gap-2 items-start">
                  <div className="flex-1 space-y-1">
                    <p><strong>第二步</strong>，判断原点 O 和圆的位置关系。根据点与圆的位置判断公式，需要比较 O 到圆心 C 的距离 <MathTex tex="|OC|" /> 和半径 <MathTex tex="r" /> 的大小</p>
                    <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                      <MathTex tex="|OC| = \sqrt{(3-0)^2 + (4-0)^2} = \sqrt{3^2 + 4^2} = \sqrt{9+16} = \sqrt{25} = 5" />
                    </div>
                    <p className="ml-4">因为 <MathTex tex="|OC| = 5 > \sqrt{2} = r" />，O 到圆心的距离大于半径，所以原点 O 在圆的<strong>外部</strong>。</p>
                  </div>
                  <DebugGeo2dSvg data={circleEx3Step2Diagram} width={117} height={117} />
                </div>

                {/* 第三步 */}
                <div className="flex gap-2 items-start">
                  <div className="flex-1 space-y-1">
                    <p><strong>第三步</strong>，M 在圆上运动，沿 OC 方向最近，反向最远</p>
                    <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                      <MathTex tex="|OM|_{近} = |OC| - r = 5 - \sqrt{2}" />
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                      <MathTex tex="|OM|_{远} = |OC| + r = 5 + \sqrt{2}" />
                    </div>
                  </div>
                  <DebugGeo2dSvg data={circleEx3Step3Diagram} width={105} height={105} />
                </div>

                <p><strong>第四步</strong>，写出取值范围</p>
                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                  <MathTex tex="|OM| \in \left[5 - \sqrt{2},\; 5 + \sqrt{2}\right]" />
                </div>
              </div>
            </div>

            {/* 即时训练 — 例题3变式 */}
            <PracticeCard questions={circleEx3Practice} title="" optionCols={4} printOptionCols={4} explanations={circleAnswers} />

            <PageBreak />
            {/* ⑥ 弦长公式 */}
            <div className="border border-teal-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-teal-800 border-b border-teal-300 text-lg">⑥ 弦长公式</div>
              <div className="px-3 py-0.5">
                <div className="flex items-start gap-4">
                  <div className="flex-1 space-y-0">
                    <p><strong>弦</strong>：圆上两点之间的线段叫做弦，两端点之间的距离叫做弦长。直线与圆相交时，两交点间的线段就是一条弦。</p>
                    <p>直线与圆相交时（<MathTex tex="d < r" />），设两个交点为 A、B，从圆心 C 向直线作垂线，垂足为 H。</p>
                    <p>由垂径定理，H 是弦 AB 的中点，即 <MathTex tex="|AH| = |HB|" />。</p>
                    <p>在直角三角形 CHA 中，由勾股定理：</p>
                    <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                      <MathTex tex="|AH|^2 = |CA|^2 - |CH|^2 = r^2 - d^2" />
                    </div>
                    <p>所以弦长为：</p>
                    <div className="bg-teal-50 border border-teal-300 rounded px-2 py-0.5 text-center">
                      <MathTex tex="|AB| = 2|AH| = 2\sqrt{r^2 - d^2}" />
                    </div>
                  </div>
                  <DebugGeo2dSvg data={circleChordLengthDiagram} width={165} height={155} className="flex-shrink-0" />
                </div>
                <p>本质上就是 A、B 两点间的距离，等价于直接用两点距离公式计算 <MathTex tex="\sqrt{(x_A - x_B)^2 + (y_A - y_B)^2}" />，但省去了联立方程求坐标的步骤。</p>
                <p><strong>使用前提：</strong>必须先判断 <MathTex tex="d < r" />（直线与圆相交），否则不存在弦，公式无意义。</p>

                <div className="border border-amber-300 rounded overflow-hidden mt-1 text-base">
                  <div className="px-2 py-0.5 font-bold text-amber-800 border-b border-amber-300 bg-amber-50">做题思路</div>
                  <div className="px-3 py-0.5 space-y-0">
                    <p><strong>1. 判断关系</strong>：圆心到直线距离 <MathTex tex="d = \dfrac{|Ax_0+By_0+C|}{\sqrt{A^2+B^2}}" /></p>
                    <div className="grid grid-cols-3 gap-1 ml-2 mt-1">
                      <div className="bg-teal-50 border border-teal-200 rounded px-2 py-0.5 text-center"><MathTex tex="d < r" /> → 相交，可用弦长公式</div>
                      <div className="bg-amber-50 border border-amber-200 rounded px-2 py-0.5 text-center"><MathTex tex="d = r" /> → 相切，弦长为 0</div>
                      <div className="bg-red-50 border border-red-200 rounded px-2 py-0.5 text-center"><MathTex tex="d > r" /> → 相离，无弦</div>
                    </div>
                    <p><strong>2. 求弦长</strong>：<MathTex tex="|AB| = 2\sqrt{r^2 - d^2}" /></p>
                    <p><strong>3. 已知弦长反求参数</strong>（常见题型）：由 <MathTex tex="2\sqrt{r^2-d^2}=L" /> 解出 <MathTex tex="d" />，再代入距离公式求直线中的参数（注意：通常有 2 条对称直线）</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-1 mt-1 text-sm">
                  <div className="bg-red-50 border border-red-200 rounded px-2 py-0.5 text-center">⚠ 忘判断 <MathTex tex="d < r" /> 直接代公式</div>
                  <div className="bg-red-50 border border-red-200 rounded px-2 py-0.5 text-center">⚠ 设直线方程时漏掉斜率不存在</div>
                  <div className="bg-red-50 border border-red-200 rounded px-2 py-0.5 text-center">⚠ 反求参数只得一个解（漏对称）</div>
                </div>
              </div>
            </div>

            {/* ⑦ 例题4 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-blue-800 border-b border-blue-300 text-lg">⑦ 例题4（弦长计算）</div>
              <div className="px-3 py-1 space-y-1">
                <p className="font-bold">求直线 <MathTex tex="x - y + 2 = 0" /> 与圆 <MathTex tex="x^2 + y^2 = 4" /> 所截得的弦长。</p>

                <div className="bg-amber-50 border border-amber-200 rounded px-2 py-1">
                  <p><strong>读题：</strong>"所截得的弦"就是直线在圆内部那段线段 AB 的长度。思路：先求圆心到直线的距离 <MathTex tex="d" />，再代入弦长公式 <MathTex tex="2\sqrt{r^2 - d^2}" />。</p>
                </div>

                <p><strong>第一步</strong>，读出圆心和半径。由 <MathTex tex="x^2 + y^2 = 4" /> 得圆心 <MathTex tex="(0, 0)" />，半径 <MathTex tex="r = 2" /></p>

                <p><strong>第二步</strong>，计算圆心到直线的距离。直线 <MathTex tex="x - y + 2 = 0" /> 的系数 <MathTex tex="a = 1,\; b = -1,\; c = 2" />，代入点到直线距离公式：</p>
                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                  <MathTex tex="d = \frac{|ax_0 + by_0 + c|}{\sqrt{a^2 + b^2}} = \frac{|1 \times 0 + (-1) \times 0 + 2|}{\sqrt{1^2 + (-1)^2}} = \frac{2}{\sqrt{2}} = \sqrt{2}" />
                </div>

                <p><strong>第三步</strong>，确认直线与圆相交。因为 <MathTex tex="d = \sqrt{2} < 2 = r" />，直线与圆相交，可以使用弦长公式。</p>

                <p><strong>第四步</strong>，代入弦长公式：</p>
                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                  <MathTex tex="|AB| = 2\sqrt{r^2 - d^2} = 2\sqrt{4 - 2} = 2\sqrt{2}" />
                </div>

                <p>所以弦长为 <MathTex tex="2\sqrt{2}" />。</p>
              </div>
            </div>

            <PracticeCard questions={circleEx4Practice} title="✏️ 即时训练 — 弦长计算（1 题）" optionCols={4} printOptionCols={4} explanations={circleAnswers} />

            <PageBreak />
            {/* ⑧ 切线 */}
            <div className="border border-teal-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-teal-800 border-b border-teal-300 text-lg">⑧ 切线</div>
              <div className="px-3 py-0.5 space-y-1 text-base">

                {/* 定义 */}
                <p><strong>定义</strong>：与圆只有<strong>一个公共点</strong>的直线叫做圆的切线，该公共点叫做<strong>切点</strong>。</p>
                <p className="ml-2">从直线与圆位置关系来看，切线就是 <MathTex tex="d = r" /> 的情况——圆心到直线的距离恰好等于半径。</p>
                <div className="grid grid-cols-3 gap-1 ml-2 text-sm">
                  <div className="bg-gray-50 border border-gray-200 rounded px-2 py-0.5 text-center"><MathTex tex="d < r" /> → 相交（2个公共点）</div>
                  <div className="bg-teal-50 border border-teal-300 rounded px-2 py-0.5 text-center font-medium"><MathTex tex="d = r" /> → <strong>相切（切线）</strong></div>
                  <div className="bg-gray-50 border border-gray-200 rounded px-2 py-0.5 text-center"><MathTex tex="d > r" /> → 相离（0个公共点）</div>
                </div>

                {/* 性质 */}
                <div className="flex items-start gap-3">
                  <div className="flex-1 space-y-0">
                    <p><strong>性质（切线⊥半径）</strong>：圆心到圆上任意一点的连线（半径），垂直于该点处的切线。</p>
                    <p className="ml-2">即：若直线 <MathTex tex="l" /> 与圆 <MathTex tex="C" /> 相切于点 <MathTex tex="P" />，则 <MathTex tex="CP \perp l" />。</p>
                    <p className="ml-2">反过来也成立（判定）：若 <MathTex tex="P" /> 在圆上且 <MathTex tex="CP \perp l" />，则 <MathTex tex="l" /> 是圆 <MathTex tex="C" /> 在点 <MathTex tex="P" /> 处的切线。</p>
                  </div>
                  <DebugGeo2dSvg data={circleTangentDiagram} width={108} height={90} className="flex-shrink-0" />
                </div>

                {/* 判定 */}
                <p><strong>判定（如何判断一条直线是否是切线）</strong></p>
                <p className="ml-2">计算圆心到直线的距离 <MathTex tex="d" />，与半径 <MathTex tex="r" /> 比较：</p>
                <div className="grid grid-cols-2 gap-1 text-sm">
                  <div className="bg-teal-50 border border-teal-300 rounded px-2 py-1 text-center"><MathTex tex="d = r" /><br/><strong>是切线</strong></div>
                  <div className="bg-red-50 border border-red-200 rounded px-2 py-1 text-center"><MathTex tex="d \neq r" /><br/><strong>不是切线</strong></div>
                </div>
                <div className="space-y-0 text-sm">
                  <div className="bg-teal-50 border border-teal-300 rounded px-2 py-1">
                    <strong>例1（是切线）：</strong>判断直线 <MathTex tex="3x + 4y - 25 = 0" /> 是否为圆 <MathTex tex="x^2 + y^2 = 25" /> 的切线。<br/>
                    圆心 <MathTex tex="(0,0)" />，<MathTex tex="r = 5" />；<MathTex tex="d = \dfrac{|3 \times 0 + 4 \times 0 - 25|}{\sqrt{9+16}} = \dfrac{25}{5} = 5" />。因为 <MathTex tex="d = r" />，所以是切线。
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded px-2 py-1">
                    <strong>例2（不是切线）：</strong>判断直线 <MathTex tex="3x + 4y - 10 = 0" /> 是否为圆 <MathTex tex="x^2 + y^2 = 25" /> 的切线。<br/>
                    圆心 <MathTex tex="(0,0)" />，<MathTex tex="r = 5" />；<MathTex tex="d = \dfrac{|3 \times 0 + 4 \times 0 - 10|}{\sqrt{9+16}} = \dfrac{10}{5} = 2" />。因为 <MathTex tex="d \neq r" />，所以不是切线。
                  </div>
                </div>

              </div>
            </div>

            {/* ⑨ 求切线方程——解题模板 */}
            <div className="border border-teal-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-teal-800 border-b border-teal-300 text-lg">⑨ 求切线方程——解题流程</div>
              <div className="px-3 py-0.5 space-y-0.5 text-base">
                <p>题型：已知圆 C 和点 P，求<strong>过 P 的圆的切线方程</strong>。核心思路：切线就是与圆只有<strong>一个公共点</strong>的直线。</p>

                {/* 第一步 */}
                <div className="border border-blue-200 rounded overflow-hidden">
                  <div className="px-2 py-0.5 bg-blue-50 border-b border-blue-200 font-bold text-blue-800">第一步：判断 P 的位置（决定切线有几条）</div>
                  <div className="px-3 py-0.5 space-y-0.5">
                    <p>将 P(a, b) 代入圆方程左边，与 <MathTex tex="r^2" /> 比较：</p>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="border border-teal-300 rounded px-2 py-1 bg-teal-50 text-center">
                        <p className="font-bold">结果 <MathTex tex="= r^2" /></p>
                        <p>P 在圆<strong>上</strong>，切线 <strong>1 条</strong></p>
                      </div>
                      <div className="border border-blue-300 rounded px-2 py-1 bg-blue-50 text-center">
                        <p className="font-bold">结果 <MathTex tex="> r^2" /></p>
                        <p>P 在圆<strong>外</strong>，切线 <strong>2 条</strong></p>
                      </div>
                      <div className="border border-red-300 rounded px-2 py-1 bg-red-50 text-center">
                        <p className="font-bold">结果 <MathTex tex="< r^2" /></p>
                        <p>P 在圆<strong>内</strong>，<strong>无切线</strong></p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 第二步 */}
                <div className="border border-amber-200 rounded overflow-hidden">
                  <div className="px-2 py-0.5 bg-amber-50 border-b border-amber-200 font-bold text-amber-800">第二步：先单独验证竖线（与 y 轴平行的直线）<MathTex tex="x = a" /> 是否为切线</div>
                  <div className="px-3 py-0.5 space-y-0.5">
                    <p><strong>① x = a 是什么？</strong>P 的坐标是 (a, b)，过 P 的竖直线就是 <MathTex tex="x = a" />（该线各点 x 坐标均为 a，P 在其上）。</p>
                    <p><strong>② 为什么要单独验证它？</strong>第三步设 <MathTex tex="y = k(x-a)+b" /> 只能表示有斜率的直线，竖线 <MathTex tex="x = a" />（斜率不存在）不在里面——如果不提前检查，会漏掉这条切线。</p>
                    <p><strong>③ 怎么验证？</strong>将 <MathTex tex="x = a" /> 代入圆方程，看 <MathTex tex="y" /> 有几个解：</p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-teal-50 border border-teal-200 rounded px-2 py-1 text-center">恰好一个解，则 <MathTex tex="x = a" /> 是切线，记下来</div>
                      <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 text-center">两个解，则 <MathTex tex="x = a" /> 与圆相交，不是切线，排除</div>
                    </div>
                  </div>
                </div>

                {/* 第三步 */}
                <div className="border border-green-200 rounded overflow-hidden">
                  <div className="px-2 py-0.5 bg-green-50 border-b border-green-200 font-bold text-green-800">第三步：设斜截式，联立圆方程，令 <MathTex tex="\Delta = 0" /></div>
                  <div className="px-3 py-0.5 space-y-0.5">
                    <p><strong>为什么令 <MathTex tex="\Delta = 0" />？</strong>将直线代入圆方程消去 <MathTex tex="y" /> 后，得到一个关于 <MathTex tex="x" /> 的二次方程。切线与圆只有一个公共点，意味着这个方程只有一个实数解，判别式 <MathTex tex="\Delta = 0" /> 正是"只有一个实数解"的数学表达。</p>
                    <div className="bg-gray-50 border border-gray-200 rounded px-2 py-0.5 space-y-0.5 ml-2">
                      <p>（1）设过 P 的直线：<MathTex tex="y = k(x - a) + b" />（这是点斜式，过点 P(a,b)、斜率为 k 的直线通式，k 待求）</p>
                      <p>（2）把上面这条直线的 <MathTex tex="y" /> 表达式代入圆方程，将圆方程里的 <MathTex tex="y" /> 替换掉，整理为只含 <MathTex tex="x" /> 的二次方程 <MathTex tex="Ax^2 + Bx + C = 0" /></p>
                      <p>（3）令 <MathTex tex="\Delta = B^2 - 4AC = 0" />，解出 <MathTex tex="k" /></p>
                      <p>（4）将 <MathTex tex="k" /> 代入 <MathTex tex="y = k(x-a)+b" />，整理为标准形式</p>
                    </div>
                    <p><strong>注意：</strong>P 在圆上时只解出一个 <MathTex tex="k" />；P 在圆外时解出两个 <MathTex tex="k" />，分别对应两条切线。</p>
                  </div>
                </div>

                {/* 第四步 */}
                <div className="border border-purple-200 rounded overflow-hidden">
                  <div className="px-2 py-0.5 bg-purple-50 border-b border-purple-200 font-bold text-purple-800">第四步：汇总所有切线</div>
                  <div className="px-3 py-0.5">
                    <p>把第二步验证出的竖线（如果有）和第三步求出的切线全部列出，即为最终答案。</p>
                  </div>
                </div>

              </div>
            </div>

            <PageBreak />

            {/* ⑩ 求切线方程 */}
            <div className="border border-teal-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-teal-800 border-b border-teal-300 text-lg">⑩ 求切线方程——例题演示</div>
              <div className="px-3 py-0.5 space-y-1 text-base">

                <p>以圆 <MathTex tex="x^2 + y^2 = 5" />（圆心 <MathTex tex="C(0,0)" />，<MathTex tex="r=\sqrt{5}" />）为例，按照⑨的四步流程解题：</p>

                {/* 情况1：点在圆上 */}
                <div className="border border-gray-200 rounded overflow-hidden">
                  <div className="px-2 py-0.5 bg-teal-50 border-b border-gray-200 font-medium">情况1：P(1, 2) 在圆上，求过 P 的切线方程</div>
                  <div className="px-3 py-0.5 space-y-0.5">
                    <div className="flex items-start gap-2">
                      <div className="flex-1 space-y-0.5">
                        <p><strong>第一步：判断位置。</strong>将 P(1,2) 代入圆方程，得 <MathTex tex="5=r^2" />，P 在圆<strong>上</strong>，切线 <strong className="whitespace-nowrap">1 条</strong>。</p>
                        <p><strong>第二步：验证竖线 <MathTex tex="x=1" />。</strong>代入圆方程得 <MathTex tex="1+y^2=5" />，解得 <MathTex tex="y=2" /> 或 <MathTex tex="y=-2" />（两个解），竖线与圆相交，不是切线，排除。</p>
                        <p><strong>第三步：设斜截式，令 <MathTex tex="\Delta=0" />。</strong>将 P(1, 2) 代入点斜式，<br />设过 P 的切线为 <MathTex tex="y=k(x-1)+2" />，代入圆方程：</p>
                      </div>
                      <div className={`flex-shrink-0 overflow-hidden${geo2dDebugOn ? ' outline outline-1 outline-dashed outline-teal-400' : ''}`} style={{ width: 131, height: 130 }}>
                        <div style={{ position: 'relative', left: -14, top: -11 }}>
                          <DebugGeo2dSvg data={circleTangentOnPointDiagram} width={145} height={141} />
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded px-2 py-0.5 ml-2 space-y-0.5">
                      <p><MathTex tex="x^2+[k(x-1)+2]^2=5" /></p>
                      <p className="px-1">展开方括号：</p>
                      <p><MathTex tex="x^2+k^2x^2-2k^2x+4kx+k^2-4k+4=5" /></p>
                      <p className="px-1">将 5 移到左边，合并同类项：</p>
                      <p><MathTex tex="(1+k^2)x^2+(-2k^2+4k)x+(k^2-4k-1)=0" /></p>
                    </div>
                    <p className="ml-2">其中 <MathTex tex="A=1+k^2" />，<MathTex tex="B=-2k^2+4k" />，<MathTex tex="C=k^2-4k-1" /></p>
                    <div className="bg-gray-50 border border-gray-200 rounded px-2 py-0.5 ml-2 space-y-0.5">
                      <p><MathTex tex="\Delta = B^2 - 4AC = (-2k^2+4k)^2 - 4(1+k^2)(k^2-4k-1)" /></p>
                      <p className="px-1">分别展开：</p>
                      <p><MathTex tex="(-2k^2+4k)^2 = 4k^4 - 16k^3 + 16k^2" /></p>
                      <p><MathTex tex="4(1+k^2)(k^2-4k-1) = 4k^4 - 16k^3 - 16k - 4" /></p>
                      <p className="px-1">相减：</p>
                      <p><MathTex tex="\Delta = (4k^4-16k^3+16k^2) - (4k^4-16k^3-16k-4)" /></p>
                      <p><MathTex tex="\Delta = 16k^2 + 16k + 4" /></p>
                      <p className="px-1">提公因数 4，括号内 <MathTex tex="4k^2+4k+1" /> 符合完全平方公式（<MathTex tex="a=2k,\,b=1" />）：</p>
                      <p><MathTex tex="\Delta = 4(4k^2+4k+1) = 4(2k+1)^2" /></p>
                    </div>
                    <p className="ml-2">令 <MathTex tex="\Delta=0" />，即 <MathTex tex="4(2k+1)^2=0" />，两边除以 4，得 <MathTex tex="(2k+1)^2=0" />。</p>
                    <p className="ml-2">要使平方等于 0，括号里必须等于 0，即 <MathTex tex="2k+1=0" />，解得 <MathTex tex="k=-\dfrac{1}{2}" />。</p>
                    <p><strong>第四步：汇总答案。</strong>将 <MathTex tex="k=-\dfrac{1}{2}" /> 代入 <MathTex tex="y-2=-\dfrac{1}{2}(x-1)" />，整理得：</p>
                    <div className="bg-teal-50 border border-teal-300 rounded px-2 py-0.5 ml-2 text-center">
                      <MathTex tex="x+2y=5" />
                    </div>

                    <hr className="border-gray-400 border-dashed my-1" />

                    <p><strong>方法二（公式法，更简洁）</strong></p>
                    <p>圆上某点处的切线方程，有直接公式可用：对圆 <MathTex tex="x^2+y^2=r^2" />，圆上点 <MathTex tex="M(m,\,n)" /> 处的切线方程为</p>
                    <div className="bg-teal-50 border border-teal-300 rounded px-2 py-1 ml-2 text-center">
                      <MathTex tex="x \cdot m + y \cdot n = r^2" />
                    </div>
                    <p><strong>第一步</strong>，读出圆的参数。由 <MathTex tex="x^2+y^2=5" /> 得圆心 <MathTex tex="C(0,0)" />，半径 <MathTex tex="r=\sqrt{5}" />，即 <MathTex tex="r^2=5" /></p>
                    <p><strong>第二步</strong>，确认 P 在圆上。将 P(1,2) 代入圆方程，得 <MathTex tex="5=r^2" />，P 在圆上，公式可以使用。</p>
                    <p><strong>第三步</strong>，代入公式。将 <MathTex tex="m=1" />，<MathTex tex="n=2" />，<MathTex tex="r^2=5" /> 代入切线公式：</p>
                    <div className="bg-gray-50 border border-gray-200 rounded px-2 py-0.5 ml-4">
                      <MathTex tex="x \cdot 1 + y \cdot 2 = 5" />
                    </div>
                    <div className="bg-teal-50 border border-teal-300 rounded px-2 py-0.5 ml-4 text-center">
                      <MathTex tex="x+2y=5" />
                    </div>
                    <p>两种方法结果一致。公式法在点已确认在圆上时，三步直接得到答案，省去了大量展开运算。</p>
                  </div>
                </div>

                <PracticeCard questions={circleTangentOnPointPractice} title="" optionCols={4} printOptionCols={4} explanations={circleAnswers} />

                <PageBreak />
                {/* 情况2：点在圆外 */}
                <div className="border border-gray-200 rounded overflow-hidden">
                  <div className="px-2 py-0.5 bg-blue-50 border-b border-gray-200 font-medium">情况2：Q(3, 1) 在圆外，求过 Q 的切线方程</div>
                  <div className="px-3 py-0 space-y-0.5">
                    <div className="flex items-start gap-2">
                      <div className="flex-1 space-y-0.5">
                        <p><strong>第一步：判断位置。</strong>将 Q(3,1) 代入圆方程，得 <MathTex tex="10>5=r^2" />，<span className="whitespace-nowrap">Q 在圆<strong>外</strong>，切线 <strong>2 条</strong>。</span></p>
                        <p><strong>第二步：验证竖线 <MathTex tex="x=3" />。</strong>代入圆方程得 <MathTex tex="9+y^2=5" />，即 <MathTex tex="y^2=-4" />，无实数解，竖线与圆不相交，不是切线，排除。</p>
                        <p><strong>第三步：设斜截式，令 <MathTex tex="\Delta=0" />。</strong>将 Q(3, 1) 代入点斜式，<br />设过 Q 的切线为 <MathTex tex="y=k(x-3)+1" />，代入圆方程：</p>
                      </div>
                      <div className={`flex-shrink-0 overflow-hidden${geo2dDebugOn ? ' outline outline-1 outline-dashed outline-teal-400' : ''}`} style={{ width: 90, height: 111 }}>
                        <div style={{ position: 'relative', left: -11, top: -4 }}>
                          <DebugGeo2dSvg data={circleTangentOutsideDiagram} width={101} height={115} />
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded px-2 py-0.5 ml-2 space-y-0.5">
                      <p><MathTex tex="x^2+[k(x-3)+1]^2=5" /></p>
                      <p className="px-1">展开方括号：</p>
                      <p><MathTex tex="x^2+k^2x^2-6k^2x+2kx+9k^2-6k+1=5" /></p>
                      <p className="px-1">将 5 移到左边，合并同类项：</p>
                      <p><MathTex tex="(1+k^2)x^2+(-6k^2+2k)x+(9k^2-6k-4)=0" /></p>
                    </div>
                    <p className="ml-2">其中 <MathTex tex="A=1+k^2" />，<MathTex tex="B=-6k^2+2k" />，<MathTex tex="C=9k^2-6k-4" /></p>
                    <div className="bg-gray-50 border border-gray-200 rounded px-2 py-0.5 ml-2 space-y-0.5">
                      <p><MathTex tex="\Delta = B^2 - 4AC = (-6k^2+2k)^2 - 4(1+k^2)(9k^2-6k-4)" /></p>
                      <p className="px-1">分别展开：</p>
                      <p><MathTex tex="(-6k^2+2k)^2 = 36k^4 - 24k^3 + 4k^2" /></p>
                      <p><MathTex tex="4(1+k^2)(9k^2-6k-4) = 36k^4 - 24k^3 + 20k^2 - 24k - 16" /></p>
                      <p className="px-1">相减：</p>
                      <p><MathTex tex="\Delta = (36k^4-24k^3+4k^2) - (36k^4-24k^3+20k^2-24k-16)" /></p>
                      <p><MathTex tex="\Delta = -16k^2 + 24k + 16" /></p>
                      <p className="px-1">提公因数 <MathTex tex="-8" />：</p>
                      <p><MathTex tex="\Delta = -8(2k^2 - 3k - 2) = -8(2k+1)(k-2)" /></p>
                    </div>
                    <p className="ml-2">令 <MathTex tex="\Delta=0" />，即 <MathTex tex="-8(2k+1)(k-2)=0" />。</p>
                    <p className="ml-2">两边除以 <MathTex tex="-8" />（因为 <MathTex tex="-8\neq 0" />），得 <MathTex tex="(2k+1)(k-2)=0" />。</p>
                    <p className="ml-2">两数相乘等于 0，说明其中至少有一个等于 0（零乘积定理），所以分情况讨论：</p>
                    <p className="ml-2"><MathTex tex="2k+1=0" />，得 <MathTex tex="k=-\dfrac{1}{2}" />；或 <MathTex tex="k-2=0" />，得 <MathTex tex="k=2" /></p>
                    <p><strong>第四步：汇总答案。</strong>竖线已排除，斜率求出两个值，分别代入 <MathTex tex="y=k(x-3)+1" />，对应两条切线：</p>
                    <div className="bg-blue-50 border border-blue-200 rounded px-2 py-0.5 ml-2 text-center">
                      <MathTex tex="y=2(x-3)+1" />，整理得 <MathTex tex="2x-y-5=0" />
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded px-2 py-0.5 ml-2 text-center">
                      <MathTex tex="y=-\dfrac{1}{2}(x-3)+1" />，整理得 <MathTex tex="x+2y-5=0" />
                    </div>
                    <hr className="border-gray-400 border-dashed my-0.5" />
                    <p><strong>方法二（切点法，更简洁）</strong></p>
                    <p>设切点为 <MathTex tex="T(m,\,n)" />，切点满足两个条件，联立方程组：</p>
                    <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-2">
                      <p>条件①，切点在圆上：<MathTex tex="m^2+n^2=5" /></p>
                      <p>条件②，切点处的切线过 <MathTex tex="Q(3,1)" />，将 Q 代入切线公式 <MathTex tex="x \cdot m + y \cdot n = r^2" />，得：<MathTex tex="3m + n = 5" /></p>
                    </div>
                    <p><strong>第一步</strong>，由条件②解出 <MathTex tex="n" />，得 <MathTex tex="n = 5 - 3m" /></p>
                    <p><strong>第二步</strong>，将条件②解出的 <MathTex tex="n" /> 代入回条件①：</p>
                    <div className="bg-gray-50 border border-gray-200 rounded px-2 py-0.5 ml-4 space-y-0.5">
                      <p><MathTex tex="m^2 + (5-3m)^2 = 5" />，展开得 <MathTex tex="m^2 + 25 - 30m + 9m^2 = 5" /></p>
                      <p><MathTex tex="10m^2 - 30m + 20 = 0" />，两边除以 10，得 <MathTex tex="m^2 - 3m + 2 = 0" /></p>
                      <p>用十字相乘法分解，得 <MathTex tex="(m-1)(m-2) = 0" />，所以 <MathTex tex="m=1" /> 或 <MathTex tex="m=2" /></p>
                    </div>
                    <p><strong>第三步</strong>，将 <MathTex tex="m" /> 代回条件②求 <MathTex tex="n" />，得切点坐标，再将 <MathTex tex="(m,\,n)" /> 代入切线公式，写出切线方程：</p>
                    <div className="bg-blue-50 border border-blue-200 rounded px-2 py-0.5 ml-4 space-y-0.5">
                      <p><MathTex tex="m=1" /> 时，<MathTex tex="n=5-3=2" />，切点 <MathTex tex="T_1(1,2)" />，切线：<MathTex tex="x+2y-5=0" /></p>
                      <p><MathTex tex="m=2" /> 时，<MathTex tex="n=5-6=-1" />，切点 <MathTex tex="T_2(2,-1)" />，切线：<MathTex tex="2x-y-5=0" /></p>
                    </div>
                    <p>切点法比判别式法省去了大量展开运算，还顺带求出了切点坐标。</p>
                  </div>
                </div>

                {/* 切线公式汇总 */}
                <div className="border border-slate-300 rounded overflow-hidden">
                  <div className="px-2 py-0.5 bg-slate-100 border-b border-slate-200 font-medium text-slate-700">切线公式（圆上点，背结论即可）</div>
                  <div className="px-3 py-1 space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-slate-500 shrink-0 w-16 text-sm">原点圆</span>
                      <span>圆心 <MathTex tex="C(0,0)" />，<MathTex tex="x^2+y^2=r^2" /> 上的点 <MathTex tex="T(m,n)" />，切线方程为</span>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded px-2 py-1 ml-16 text-center">
                      <MathTex tex="xm + yn = r^2" />
                    </div>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-slate-500 shrink-0 w-16 text-sm">一般圆</span>
                      <span>圆心 <MathTex tex="C(a,b)" />，<MathTex tex="(x-a)^2+(y-b)^2=r^2" /> 上的点 <MathTex tex="T(m,n)" />，切线方程为</span>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded px-2 py-1 ml-16 text-center">
                      <MathTex tex="(m-a)(x-a)+(n-b)(y-b)=r^2" />
                    </div>
                    <div className="mt-0.5 space-y-0.5 text-sm">
                      <p className="font-medium text-slate-600">推导过程：</p>
                      <div className="flex items-start gap-2">
                        <div className="flex-1 space-y-0.5">
                          <p><strong>第一步：先推原点圆。</strong>圆 <MathTex tex="x^2+y^2=r^2" />，圆心 <MathTex tex="C(0,0)" />，切点 <MathTex tex="T(m,n)" />，切线⊥半径 <MathTex tex="CT" />。</p>
                          <p><MathTex tex="CT" /> 斜率为 <MathTex tex="\dfrac{n-0}{m-0}=\dfrac{n}{m}" />，切线斜率为 <MathTex tex="-\dfrac{m}{n}" />，由点斜式得</p>
                          <div className="bg-gray-50 border border-gray-200 rounded px-2 py-0.5 ml-2">
                            <MathTex tex="y-n=-\dfrac{m}{n}(x-m)" />
                          </div>
                          <p className="px-1">两边乘以 <MathTex tex="n" />，得</p>
                          <div className="bg-gray-50 border border-gray-200 rounded px-2 py-0.5 ml-2">
                            <MathTex tex="ny-n^2=-mx+m^2" />
                          </div>
                        </div>
                        <div className={`flex-shrink-0 overflow-hidden${geo2dDebugOn ? ' outline outline-1 outline-dashed outline-teal-400' : ''}`} style={{ width: 122, height: 110 }}>
                          <div style={{ position: 'relative', left: -5, top: -11 }}>
                            <DebugGeo2dSvg data={circleTangentFormulaDiagram} width={127} height={121} />
                          </div>
                        </div>
                      </div>
                      <p className="px-1">移项，得</p>
                      <div className="bg-gray-50 border border-gray-200 rounded px-2 py-0.5 ml-2">
                        <MathTex tex="mx+ny=m^2+n^2" />
                      </div>
                      <p>因为 T 在圆上，<MathTex tex="m^2+n^2=r^2" />，所以</p>
                      <div className="bg-slate-50 border border-slate-200 rounded px-2 py-0.5 ml-2 text-center">
                        <MathTex tex="mx+ny=r^2" />
                      </div>
                      <p><strong>第二步：坐标平移得一般圆。</strong>圆心从 <MathTex tex="(0,0)" /> 平移到圆心 <MathTex tex="(a,b)" />，把公式里的 <MathTex tex="m,\,x" /> 各减 <MathTex tex="a" />，<MathTex tex="n,\,y" /> 各减 <MathTex tex="b" />，即 <MathTex tex="m" /> 变 <MathTex tex="m-a" />，<MathTex tex="x" /> 变 <MathTex tex="x-a" />，<MathTex tex="n" /> 变 <MathTex tex="n-b" />，<MathTex tex="y" /> 变 <MathTex tex="y-b" />，代入得</p>
                      <div className="bg-slate-50 border border-slate-200 rounded px-2 py-0.5 ml-2 text-center">
                        <MathTex tex="(m-a)(x-a)+(n-b)(y-b)=r^2" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 切点法做题模板 */}
                <div className="border border-amber-300 rounded overflow-hidden">
                  <div className="px-2 py-0.5 font-bold text-amber-800 border-b border-amber-300 bg-amber-50 text-base">切点法做题模板（过圆外点求切线）</div>
                  <div className="px-3 py-0.5 space-y-0.5 text-base">
                    <p><strong>适用范围：</strong>已知圆的方程（标准形式），已知圆外一点 P，求过 P 的两条切线方程</p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="space-y-0.5">
                        <p><strong>第一步：判断 P 在圆外</strong></p>
                        <p className="ml-2">将 P 代入圆方程左边，结果 <MathTex tex="> r^2" />，确认有两条切线</p>
                        <p><strong>第二步：设切点 <MathTex tex="T(m,\,n)" /></strong></p>
                        <p className="ml-2">写出两个条件并联立：</p>
                        <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-1">
                          <p>条件①，T 在圆上：代入圆方程</p>
                          <p>条件②，切线过 P：将 P 代入切线公式</p>
                          <p>原点圆：<MathTex tex="xm+yn=r^2" /></p>
                          <p>一般圆：</p>
                          <p className="ml-2"><MathTex tex="(m-a)(x-a)+(n-b)(y-b)=r^2" /></p>
                        </div>
                      </div>
                      <div className="space-y-0.5">
                        <p><strong>第三步：解方程组</strong></p>
                        <p className="ml-2">将条件②解出的 <MathTex tex="n" /> 代入回条件①，解出 <MathTex tex="m" /> 的两个值</p>
                        <p><strong>第四步：写出切线方程</strong></p>
                        <p className="ml-2">将求出的每组 <MathTex tex="(m,\,n)" /> 分别代入切线公式（条件②中 P 代入之前的那个），保留 <MathTex tex="x,\,y" /> 为变量，即得 2 条切线方程</p>
                        <div className="bg-gray-50 border border-gray-200 rounded px-2 py-0.5 ml-2">
                          <p>例：求出 <MathTex tex="m=1,\,n=2" />，代入 <MathTex tex="xm+yn=5" />，得 <MathTex tex="x+2y=5" /></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 切线长公式 */}
                <div className="border border-gray-200 rounded overflow-hidden">
                  <div className="px-2 py-0.5 font-bold border-b border-gray-200 bg-gray-50 text-base">切线长公式</div>
                  <div className="px-3 py-0.5 space-y-0.5 text-base">
                    <p>圆外点 <MathTex tex="P" /> 到切点 <MathTex tex="T" /> 的距离称为<strong>切线长</strong>。由于切线⊥半径，<MathTex tex="P" />、<MathTex tex="T" />、<MathTex tex="C" /> 构成直角三角形（直角在 <MathTex tex="T" />），由勾股定理得</p>
                    <div className="bg-slate-50 border border-slate-200 rounded px-2 py-1 ml-2 text-center">
                      <MathTex tex="|PT| = \sqrt{|PC|^2 - r^2}" />
                    </div>
                    <p>代入坐标：</p>
                    <div className="ml-2 space-y-0.5">
                      <p>原点圆 <MathTex tex="x^2+y^2=r^2" />，圆外点 <MathTex tex="P(x_0,\,y_0)" />，切线长 <MathTex tex="= \sqrt{x_0^2+y_0^2-r^2}" /></p>
                      <p>一般圆 <MathTex tex="(x-a)^2+(y-b)^2=r^2" />，切线长 <MathTex tex="= \sqrt{(x_0-a)^2+(y_0-b)^2-r^2}" /></p>
                    </div>
                    <p>也就是<strong>把 P 的坐标代入圆方程左边，再开根号</strong>。</p>
                    <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-2 space-y-0.5">
                      <p><strong>例：</strong>圆 <MathTex tex="x^2+y^2=5" />，圆外点 <MathTex tex="P(3,1)" />，求切线长。</p>
                      <p>将 P 代入圆方程左边：<MathTex tex="3^2+1^2=10" />，因为 <MathTex tex="10>5=r^2" />，确认 P 在圆外</p>
                      <p>切线长 <MathTex tex="= \sqrt{10-5}=\sqrt{5}" /></p>
                    </div>
                  </div>
                </div>

                <PageBreak />
                {/* 已知斜率求切线 */}
                <div className="border border-gray-200 rounded overflow-hidden">
                  <div className="px-2 py-0.5 font-bold border-b border-gray-200 bg-gray-50 text-base">已知斜率求切线（不过定点）</div>
                  <div className="px-3 py-0.5 space-y-0.5 text-base">
                    <p>题型：已知圆 <MathTex tex="C" /> 和斜率 <MathTex tex="k" />，求与圆相切的直线方程。</p>
                    <p><strong>方法：</strong>设直线为 <MathTex tex="y=kx+b" />（斜率已知，<MathTex tex="b" /> 待求），利用 <MathTex tex="d=r" /> 解 <MathTex tex="b" />。</p>
                    <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-2 space-y-0.5">
                      <p><strong>例：</strong>求与圆 <MathTex tex="x^2+y^2=5" /> 相切且斜率为 <MathTex tex="2" /> 的直线。</p>
                      <p>设直线 <MathTex tex="y=2x+b" />，即 <MathTex tex="2x-y+b=0" />，圆心 <MathTex tex="(0,0)" />，<MathTex tex="r=\sqrt{5}" /></p>
                      <p>由 <MathTex tex="d=r" />，得 <MathTex tex="\dfrac{|b|}{\sqrt{4+1}}=\sqrt{5}" />，即 <MathTex tex="\dfrac{|b|}{\sqrt{5}}=\sqrt{5}" />，解得 <MathTex tex="|b|=5" />，即 <MathTex tex="b=5" /> 或 <MathTex tex="b=-5" /></p>
                      <p>所以切线为 <MathTex tex="y=2x+5" /> 和 <MathTex tex="y=2x-5" />（两条平行切线）</p>
                    </div>
                  </div>
                </div>

                <PracticeCard questions={circleTangentSummaryPractice} title="✏️ 即时训练 — 切线方程" optionCols={4} printOptionCols={4} explanations={circleAnswers} hideBlankLine />

              </div>
            </div>

            {/* ⑪ 弦中点求弦所在直线 */}
            <div className="border border-teal-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-teal-800 border-b border-teal-300 text-lg">⑪ 已知弦的中点，求弦所在直线方程</div>
              <div className="px-3 py-1 space-y-1 text-base">
                <p className="text-amber-700">与⑥弦长公式互逆：弦长公式是已知直线求弦长，本题是已知弦的中点反求直线，两者都基于垂径定理（圆心到弦的垂线过弦中点）。</p>
                <div className="flex items-start gap-4">
                  <div className="flex-1 space-y-1">
                    <p><strong>题型</strong>：已知圆和弦的中点 <MathTex tex="M" />，求弦所在直线的方程。</p>
                    <p><strong>核心原理</strong>：由垂径定理，圆心到弦中点的连线<strong>垂直于</strong>弦。</p>
                    <p>即 <MathTex tex="CM \perp AB" />，所以 <MathTex tex="k_{AB} \cdot k_{CM} = -1" /></p>
                  </div>
                  <div className={`flex-shrink-0 overflow-hidden${geo2dDebugOn ? ' outline outline-1 outline-dashed outline-teal-400' : ''}`} style={{ width: 94, height: 90 }}>
                    <div style={{ position: 'relative', left: -10, top: -16 }}>
                      <DebugGeo2dSvg data={circleMidchordDiagram} width={105} height={106} />
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 space-y-0">
                  <p><strong>第一步</strong>，求 CM 斜率 <MathTex tex="k_{CM}" />，再由垂直关系得弦斜率 <MathTex tex="k_{AB} = -\dfrac{1}{k_{CM}}" /></p>
                  <p><strong>第二步</strong>，过中点 M 用点斜式写出弦所在直线</p>
                </div>

                <p className="font-bold text-amber-700">注意特殊情况：若 CM 为竖线（<MathTex tex="x" /> 坐标相同），弦为水平线；若 CM 为水平线（<MathTex tex="y" /> 坐标相同），弦为竖线。</p>

                {/* 例题 */}
                <div className="border border-blue-300 rounded overflow-hidden">
                  <div className="px-2 py-0.5 font-bold text-blue-800 border-b border-blue-300">例题（弦中点求直线）</div>
                  <div className="px-3 py-1 space-y-1">
                    <p className="font-bold">圆 <MathTex tex="x^2+y^2=25" />，弦 AB 的中点为 <MathTex tex="M(3,4)" />，求弦 AB 所在直线的方程。</p>

                    <p><strong>第一步</strong>，读出圆心 <MathTex tex="C(0,0)" />，中点 <MathTex tex="M(3,4)" /></p>
                    <p><strong>第二步</strong>，求 CM 斜率 <MathTex tex="k_{CM} = \dfrac{4-0}{3-0} = \dfrac{4}{3}" />，由垂直关系，弦的斜率 <MathTex tex="k_{AB} = -\dfrac{1}{k_{CM}} = -\dfrac{3}{4}" /></p>
                    <p><strong>第三步</strong>，过 <MathTex tex="M(3,4)" />，代入弦的斜率 <MathTex tex="k_{AB}=-\dfrac{3}{4}" />，用点斜式：<MathTex tex="y - 4 = -\dfrac{3}{4}(x - 3)" /></p>
                    <p>两边乘以 4，得 <MathTex tex="4(y-4) = -3(x-3)" />，整理得 <MathTex tex="3x + 4y - 25 = 0" /></p>
                  </div>
                </div>

                <PracticeCard questions={circleMidchordPractice} title="" optionCols={4} printOptionCols={4} explanations={circleAnswers} />
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <section id="circle-general" className="mb-3 scroll-mt-4">
        <Collapsible title="三、圆的一般方程" defaultOpen storageKey="circle:general">
          <div className="space-y-0 text-base text-gray-800">

            {/* ① 一般方程定义与特征 */}
            <div className="border border-teal-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-teal-800 border-b border-teal-300 text-lg">① 一般方程的形式与特征</div>
              <div className="px-3 py-1 space-y-1 text-base">
                <p>将圆的标准方程展开：</p>
                <p className="ml-4"><MathTex tex="(x-a)^2+(y-b)^2=r^2" /></p>
                <p className="ml-4">展开完全平方：<MathTex tex="x^2-2ax+a^2+y^2-2by+b^2=r^2" /></p>
                <p className="ml-4">移项，常数合并：<MathTex tex="x^2+y^2-2ax-2by+(a^2+b^2-r^2)=0" /></p>
                <p>令 <MathTex tex="D=-2a,\;E=-2b,\;F=a^2+b^2-r^2" />（用字母替换常数系数），得<strong>圆的一般方程</strong>：</p>
                <div className="flex items-center gap-2 text-gray-400"><hr className="flex-1 border-gray-300 border-dashed" /><span>推导过程 — 理解即可，无需背诵</span><hr className="flex-1 border-gray-300 border-dashed" /></div>
                <MathTex tex="x^2+y^2+Dx+Ey+F=0" display />
                <p className="font-bold">一般方程的三个特征：</p>
                <div className="ml-4 space-y-0.5 text-base">
                  <p>① <MathTex tex="x^2" /> 与 <MathTex tex="y^2" /> 的系数<strong>相等</strong>（均为 1）</p>
                  <p>② <strong>没有</strong> <MathTex tex="xy" /> 项</p>
                  <p>③ 满足 <MathTex tex="D^2+E^2-4F>0" />（否则不表示圆）</p>
                </div>
                <p>对应关系：<MathTex tex="D=-2a,\;E=-2b,\;F=a^2+b^2-r^2" />，配方可得：</p>
                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                  <p>圆心 <MathTex tex="\left(-\dfrac{D}{2},\,-\dfrac{E}{2}\right)" />，半径 <MathTex tex="r=\dfrac{\sqrt{D^2+E^2-4F}}{2}" /></p>
                </div>
                <div className="ml-4 space-y-0.5">
                  <p>当 <MathTex tex="D^2+E^2-4F>0" /> 时，它表示以 <MathTex tex="\left(-\dfrac{D}{2},\,-\dfrac{E}{2}\right)" /> 为圆心、<MathTex tex="\dfrac{1}{2}\sqrt{D^2+E^2-4F}" /> 为半径的圆</p>
                  <p>当 <MathTex tex="D^2+E^2-4F=0" /> 时，方程只有一组实数解 <MathTex tex="\begin{cases}x=-\dfrac{D}{2}\\[4pt]y=-\dfrac{E}{2}\end{cases}" />，它表示一个点 <MathTex tex="\left(-\dfrac{D}{2},\,-\dfrac{E}{2}\right)" /></p>
                  <p>当 <MathTex tex="D^2+E^2-4F<0" /> 时，方程没有实数解，它不表示任何图形</p>
                </div>
              </div>
            </div>

            {/* ② 配方法 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-blue-800 border-b border-blue-300 text-lg">② 方法一：配方法（一般方程 → 标准方程）</div>
              <div className="px-3 py-1 space-y-1 text-sm">
                <p className="font-bold">例1：将 <MathTex tex="x^2+y^2-4x+2y-4=0" /> 化为标准方程，求圆心和半径。</p>
                <p>移项分组：<MathTex tex="(x^2-4x)+(y^2+2y)=4" /></p>
                <p>配方（两组各补完全平方项，右边同步加）：</p>
                <p className="ml-4"><MathTex tex="(x^2-4x+4)+(y^2+2y+1)=4+4+1=9" /></p>
                <p className="ml-4"><MathTex tex="(x-2)^2+(y+1)^2=9" /></p>
                <p>圆心 <MathTex tex="(2,-1)" />，半径 <MathTex tex="r=3" /></p>
                <hr className="border-gray-300 border-dashed" />
                <p className="font-bold mt-2">例2：方程 <MathTex tex="x^2+y^2-2x+6y+3=0" /> 能表示圆吗？若能，说出圆心与半径；若不能请说明理由。</p>
                <p>配方：<MathTex tex="(x^2-2x+1)+(y^2+6y+9)=-3+1+9=7" /></p>
                <p>即 <MathTex tex="(x-1)^2+(y+3)^2=7" />，右边 <MathTex tex="7>0" />，能表示圆。圆心 <MathTex tex="(1,-3)" />，半径 <MathTex tex="r=\sqrt{7}" /></p>
                <hr className="border-gray-300 border-dashed" />
                <p className="font-bold mt-2">例3：判断 <MathTex tex="x^2+y^2+2x-4y+5=0" /> 表示什么图形。</p>
                <p>移项分组：<MathTex tex="(x^2+2x)+(y^2-4y)=-5" /></p>
                <p>配方（两组各补完全平方项，右边同步加）：</p>
                <p className="ml-4"><MathTex tex="(x^2+2x+1)+(y^2-4y+4)=-5+1+4=0" /></p>
                <p className="ml-4"><MathTex tex="(x+1)^2+(y-2)^2=0" /></p>
                <p>右边等于 0，轨迹只有一个点 <MathTex tex="(-1,2)" />，<strong>不是圆</strong>。</p>
                <hr className="border-gray-300 border-dashed" />
                <p className="font-bold mt-2">例4：当 <MathTex tex="D^2+E^2-4F<0" /> 时，方程没有实数解，它不表示任何图形。</p>
                <p>例如 <MathTex tex="x^2+y^2-2x+4y+6=0" />，配方得 <MathTex tex="(x-1)^2+(y+2)^2=-1" /></p>
                <p>左边是两个平方和，永远非负，而右边为 <MathTex tex="-1<0" />，方程无实数解，<strong>不表示任何图形</strong>。</p>
              </div>
            </div>

            <PageBreak />
            {/* ③ 待定系数法 */}
            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-purple-800 border-b border-purple-300 text-lg">③ 方法二：待定系数法（已知三点求圆）</div>
              <div className="px-3 py-1 space-y-1 text-base">
                <p className="font-bold text-amber-700">适用场景：已知圆上三点，圆心半径未知</p>
                <p className="font-bold">例5：求过 <MathTex tex="O(0,0)" />、<MathTex tex="M(1,1)" />、<MathTex tex="N(4,2)" /> 三点的圆的方程。</p>
                <p><strong>第一步</strong>，设圆的一般方程：<MathTex tex="x^2+y^2+Dx+Ey+F=0" /></p>
                <p><strong>第二步</strong>，将三点代入建立方程组：</p>
                <div className="ml-4 space-y-0.5">
                  <p><MathTex tex="O(0,0)" /> 代入：<MathTex tex="F=0" /></p>
                  <p><MathTex tex="M(1,1)" /> 代入：<MathTex tex="1+1+D+E+F=0" />，得 <MathTex tex="D+E=-2" /></p>
                  <p><MathTex tex="N(4,2)" /> 代入：<MathTex tex="16+4+4D+2E+F=0" />，得 <MathTex tex="2D+E=-10" /></p>
                </div>
                <p><strong>第三步</strong>，解方程组：<MathTex tex="D=-8,\;E=6,\;F=0" /></p>
                <p><strong>第四步</strong>，写出方程并配方：<MathTex tex="x^2+y^2-8x+6y=0" /></p>
                <p className="ml-4"><MathTex tex="(x-4)^2+(y+3)^2=25" />，圆心 <MathTex tex="(4,-3)" />，<MathTex tex="r=5" /></p>
              </div>
            </div>

            {/* ④ 含参数判断 */}
            <div className="border border-orange-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-orange-800 border-b border-orange-300 text-lg">④ 含参数方程判断是否为圆</div>
              <div className="px-3 py-1 space-y-1 text-base">
                <p className="font-bold">例6：方程 <MathTex tex="x^2+y^2+kx+2y+(k+1)=0" /> 能表示圆，求 <MathTex tex="k" /> 的取值范围。</p>
                <p>这里 <MathTex tex="D=k,\;E=2,\;F=k+1" />，能表示圆需满足 <MathTex tex="D^2+E^2-4F>0" />：</p>
                <p className="ml-4"><MathTex tex="k^2+4-4(k+1)>0" /></p>
                <p className="ml-4"><MathTex tex="k^2-4k>0" />，即 <MathTex tex="k(k-4)>0" /></p>
                <p className="ml-4">零点为 <MathTex tex="k=0" /> 或 <MathTex tex="k=4" />，开口向上，大于零取两边，故 <MathTex tex="k<0" /> 或 <MathTex tex="k>4" /></p>
              </div>
            </div>

            {/* 做题模板 */}
            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-amber-800 border-b border-amber-300 bg-amber-50 text-lg">做题模板：一般方程求圆心和半径</div>
              <div className="px-3 py-1 space-y-1 text-base">
                <p><strong>题型：</strong>给一般方程 <MathTex tex="x^2+y^2+Dx+Ey+F=0" />，求圆心和半径</p>
                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 space-y-0.5">
                  <p><strong>第一步</strong>，检查：<MathTex tex="x^2" /> 和 <MathTex tex="y^2" /> 系数是否相等且为 1，有无 <MathTex tex="xy" /> 项。不满足则不是圆</p>
                  <p><strong>第二步</strong>，读出 <MathTex tex="D" />、<MathTex tex="E" />、<MathTex tex="F" /></p>
                  <p className="ml-4"><MathTex tex="x" /> 的一次项系数就是 <MathTex tex="D" />，<MathTex tex="y" /> 的一次项系数就是 <MathTex tex="E" />，常数项就是 <MathTex tex="F" /></p>
                  <p><strong>第三步</strong>，验证 <MathTex tex="D^2+E^2-4F>0" />，不满足则不表示圆</p>
                  <p><strong>第四步</strong>，代公式：圆心 <MathTex tex="\left(-\dfrac{D}{2},\,-\dfrac{E}{2}\right)" />，半径 <MathTex tex="r=\dfrac{\sqrt{D^2+E^2-4F}}{2}" /></p>
                </div>
                <p><strong>不想记公式？</strong>直接配方也行：移项分组，各补完全平方项，右边同步加，整理成 <MathTex tex="(x-a)^2+(y-b)^2=r^2" /></p>
              </div>
            </div>

            <PracticeCard questions={circleGeneralFormPractice} title="✏️ 即时训练 — 一般方程" optionCols={4} printOptionCols={4} explanations={circleAnswers} />

          </div>
        </Collapsible>
      </section>

      <PageBreak />
      <section id="circle-circle" className="mb-3 scroll-mt-4">
        <Collapsible title="四、圆与圆的位置关系" defaultOpen storageKey="circle:circle-circle">
          <div className="space-y-0 text-lg text-gray-800">

            {/* ① 五种位置关系 */}
            <div className="border border-teal-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-teal-800 border-b border-teal-300 text-lg">① 圆与圆的五种位置关系</div>
              <div className="px-3 py-1 space-y-1 text-base">
                <p>设大圆半径为 <MathTex tex="R" />，小圆半径为 <MathTex tex="r" />（<MathTex tex="R \geq r" />），两圆圆心距为 <MathTex tex="d" />：</p>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-2 py-0.5 w-[60px]">位置关系</th>
                      <th className="border border-gray-300 px-2 py-0.5">交点个数</th>
                      <th className="border border-gray-300 px-2 py-0.5">关系式</th>
                      <th className="border border-gray-300 px-2 py-0.5 w-[145px]">图示</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-gray-300 px-2 py-0 text-center font-bold">外离</td><td className="border border-gray-300 px-2 py-0 text-center">没有公共点</td><td className="border border-gray-300 px-2 py-0 text-center"><MathTex tex="d > R+r" /></td><td className="border border-gray-300 px-1 py-0 text-center"><DebugGeo2dSvg data={circleCircle5Diagrams[0]} width={130} height={105} /></td></tr>
                    <tr><td className="border border-gray-300 px-2 py-0 text-center font-bold">外切</td><td className="border border-gray-300 px-2 py-0 text-center">1 个公共点</td><td className="border border-gray-300 px-2 py-0 text-center"><MathTex tex="d = R+r" /></td><td className="border border-gray-300 px-1 py-0 text-center"><DebugGeo2dSvg data={circleCircle5Diagrams[1]} width={130} height={105} /></td></tr>
                    <tr><td className="border border-gray-300 px-2 py-0 text-center font-bold">相交</td><td className="border border-gray-300 px-2 py-0 text-center">2 个公共点</td><td className="border border-gray-300 px-2 py-0 text-center"><MathTex tex="R-r < d < R+r" /></td><td className="border border-gray-300 px-1 py-0 text-center"><DebugGeo2dSvg data={circleCircle5Diagrams[2]} width={130} height={105} /></td></tr>
                    <tr><td className="border border-gray-300 px-2 py-0 text-center font-bold">内切</td><td className="border border-gray-300 px-2 py-0 text-center">1 个公共点</td><td className="border border-gray-300 px-2 py-0 text-center"><MathTex tex="d = R-r" /></td><td className="border border-gray-300 px-1 py-0 text-center"><DebugGeo2dSvg data={circleCircle5Diagrams[3]} width={130} height={105} /></td></tr>
                    <tr><td className="border border-gray-300 px-2 py-0 text-center font-bold">内含</td><td className="border border-gray-300 px-2 py-0 text-center">没有公共点</td><td className="border border-gray-300 px-2 py-0 text-center"><MathTex tex="0 \leq d < R-r" /></td><td className="border border-gray-300 px-1 py-0 text-center"><DebugGeo2dSvg data={circleCircle5Diagrams[4]} width={130} height={105} /></td></tr>
                  </tbody>
                </table>
                <p className="font-bold text-amber-700">判断方法：先求圆心距 <MathTex tex="d" />，再与 <MathTex tex="R+r" /> 和 <MathTex tex="R-r" /> 比较大小。</p>
              </div>
            </div>

            {/* ② 例题 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-blue-800 border-b border-blue-300 text-lg">② 例题 — 判断位置关系</div>
              <div className="px-3 py-1 space-y-1 text-base">
                <p className="font-bold">例1：圆 <MathTex tex="C_1: (x-2)^2+(y-1)^2=9" /> 与圆 <MathTex tex="C_2: (x-6)^2+(y-4)^2=4" />，判断位置关系。</p>
                <p><MathTex tex="C_1" />：圆心 <MathTex tex="(2,1)" />，<MathTex tex="r_1=3" />；<MathTex tex="C_2" />：圆心 <MathTex tex="(6,4)" />，<MathTex tex="r_2=2" /></p>
                <p>圆心距 <MathTex tex="d=\sqrt{(6-2)^2+(4-1)^2}=\sqrt{16+9}=5" />，<MathTex tex="r_1+r_2=5" />，<MathTex tex="d=r_1+r_2" />，故两圆<strong>外切</strong></p>

                <p className="font-bold mt-2">例2：圆 <MathTex tex="C_1: (x-3)^2+(y-1)^2=4" /> 与圆 <MathTex tex="C_2: (x-m)^2+(y-1)^2=1" /> 外切，求 <MathTex tex="m" />。</p>
                <p><MathTex tex="C_1" />：圆心 <MathTex tex="(3,1)" />，<MathTex tex="r_1=2" />；<MathTex tex="C_2" />：圆心 <MathTex tex="(m,1)" />，<MathTex tex="r_2=1" /></p>
                <p>圆心距 <MathTex tex="d=\sqrt{(m-3)^2+(1-1)^2}=\sqrt{(m-3)^2}=|m-3|" /></p>
                <p className="text-sm text-amber-700 ml-4">注：<MathTex tex="\sqrt{x^2}=|x|" />，因为根号结果永远非负，而 <MathTex tex="x" /> 本身可能为负，所以必须加绝对值。</p>
                <div className="flex gap-3 items-start">
                  <div className="flex-1 space-y-1">
                    <p>外切条件 <MathTex tex="d=r_1+r_2=2+1=3" />，得 <MathTex tex="|m-3|=3" /></p>
                    <p className="ml-4">情况一：<MathTex tex="m-3=3" />，解得 <MathTex tex="m=6" /></p>
                    <p className="ml-4">情况二：<MathTex tex="m-3=-3" />，解得 <MathTex tex="m=0" /></p>
                  </div>
                  <div className="w-52 shrink-0 bg-amber-50 border border-amber-200 rounded px-2 py-1.5 text-sm text-amber-800">
                    <p className="font-bold mb-1">绝对值方程</p>
                    <p><MathTex tex="|A|=B" /></p>
                    <p>等价于 <MathTex tex="A=B" /> 或 <MathTex tex="A=-B" /></p>
                  </div>
                </div>
              </div>
            </div>

            <PracticeCard questions={circleCirclePractice} title="✏️ 即时训练 — 圆与圆" optionCols={4} printOptionCols={4} explanations={circleAnswers} />

            {/* ③ 公切线条数 */}
            <div className="border border-teal-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-teal-800 border-b border-teal-300 text-lg">③ 公切线</div>
              <div className="px-3 py-1 space-y-1 text-base">
                <p><strong>定义</strong>：同时与两个圆相切的直线叫做这两个圆的<strong>公切线</strong>。</p>
                <div className="flex gap-3">
                  <div className="flex-1 bg-orange-50 border border-orange-200 rounded px-2 py-1">
                    <p className="font-bold text-orange-700">外公切线</p>
                    <p>两圆在公切线的<strong>同侧</strong>（切线不穿过两圆之间）</p>
                  </div>
                  <div className="flex-1 bg-emerald-50 border border-emerald-200 rounded px-2 py-1">
                    <p className="font-bold text-emerald-700">内公切线</p>
                    <p>两圆在公切线的<strong>异侧</strong>（切线穿过两圆之间）</p>
                  </div>
                </div>

                <p className="font-bold mt-1">公切线条数与位置关系对应（必背）：</p>
                <table className="w-full border-collapse text-base">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-2 py-1 text-center">位置关系</th>
                      <th className="border border-gray-300 px-2 py-1 text-center">条件</th>
                      <th className="border border-gray-300 px-2 py-1 text-center">外公切线</th>
                      <th className="border border-gray-300 px-2 py-1 text-center">内公切线</th>
                      <th className="border border-gray-300 px-2 py-1 text-center font-bold text-red-700">公切线共</th>
                      <th className="border border-gray-300 px-2 py-1 text-center w-[145px]">图示</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1 text-center font-bold">外离</td>
                      <td className="border border-gray-300 px-2 py-1 text-center"><MathTex tex="d > R+r" /></td>
                      <td className="border border-gray-300 px-2 py-1 text-center">2条</td>
                      <td className="border border-gray-300 px-2 py-1 text-center">2条</td>
                      <td className="border border-gray-300 px-2 py-1 text-center font-bold text-red-700">4条</td>
                      <td className="border border-gray-300 px-1 py-1 text-center"><DebugGeo2dSvg data={circleTangentLine5Diagrams[0]} width={130} height={105} /></td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-2 py-1 text-center font-bold">外切</td>
                      <td className="border border-gray-300 px-2 py-1 text-center"><MathTex tex="d = R+r" /></td>
                      <td className="border border-gray-300 px-2 py-1 text-center">2条</td>
                      <td className="border border-gray-300 px-2 py-1 text-center">1条（切点处）</td>
                      <td className="border border-gray-300 px-2 py-1 text-center font-bold text-red-700">3条</td>
                      <td className="border border-gray-300 px-1 py-1 text-center"><DebugGeo2dSvg data={circleTangentLine5Diagrams[1]} width={130} height={105} /></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1 text-center font-bold">相交</td>
                      <td className="border border-gray-300 px-2 py-1 text-center"><MathTex tex="|R-r| < d < R+r" /></td>
                      <td className="border border-gray-300 px-2 py-1 text-center">2条</td>
                      <td className="border border-gray-300 px-2 py-1 text-center">0条</td>
                      <td className="border border-gray-300 px-2 py-1 text-center font-bold text-red-700">2条</td>
                      <td className="border border-gray-300 px-1 py-1 text-center"><DebugGeo2dSvg data={circleTangentLine5Diagrams[2]} width={130} height={105} /></td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-2 py-1 text-center font-bold">内切</td>
                      <td className="border border-gray-300 px-2 py-1 text-center"><MathTex tex="d = R-r" /></td>
                      <td className="border border-gray-300 px-2 py-1 text-center">1条（切点处）</td>
                      <td className="border border-gray-300 px-2 py-1 text-center">0条</td>
                      <td className="border border-gray-300 px-2 py-1 text-center font-bold text-red-700">1条</td>
                      <td className="border border-gray-300 px-1 py-1 text-center"><DebugGeo2dSvg data={circleTangentLine5Diagrams[3]} width={130} height={105} /></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1 text-center font-bold">内含</td>
                      <td className="border border-gray-300 px-2 py-1 text-center"><MathTex tex="0 \leq d < R-r" /></td>
                      <td className="border border-gray-300 px-2 py-1 text-center">0条</td>
                      <td className="border border-gray-300 px-2 py-1 text-center">0条</td>
                      <td className="border border-gray-300 px-2 py-1 text-center font-bold text-red-700">0条</td>
                      <td className="border border-gray-300 px-1 py-1 text-center"><DebugGeo2dSvg data={circleTangentLine5Diagrams[4]} width={130} height={105} /></td>
                    </tr>
                  </tbody>
                </table>
                <p className="font-bold text-amber-700">记忆口诀：外离4、外切3、相交2、内切1、内含0。先判断位置关系，再查表。</p>

                <div className="border border-red-300 rounded overflow-hidden mt-1">
                  <div className="px-2 py-0.5 font-bold text-red-800 border-b border-red-300 bg-red-50 text-base">🎯 高考考点</div>
                  <div className="px-3 py-1 text-base grid grid-cols-2 gap-x-4 gap-y-0.5">
                    <p>① 判断两圆位置关系（计算 <MathTex tex="d" /> 与 <MathTex tex="R\pm r" /> 比较）</p>
                    <p>② 已知位置关系反求参数（列方程解绝对值）</p>
                    <p>③ 公切线条数（先判位置关系再查表）</p>
                    <p>④ 求公切线方程（用 <MathTex tex="d=r" /> 条件联立）</p>
                  </div>
                </div>

                <PageBreak />
                <div className="border border-blue-300 rounded overflow-hidden">
                  <div className="px-2 py-0.5 font-bold text-blue-800 border-b border-blue-300">例题（公切线条数）</div>
                  <div className="px-3 py-1 space-y-1 text-sm">
                    <p className="font-bold">例1：两个圆 <MathTex tex="C_1:x^2+y^2+2x+2y-2=0" /> 和 <MathTex tex="C_2:x^2+y^2-4x-2y+1=0" /> 的公切线有几条？</p>
                    <p><strong>第一步</strong>，把两个方程化为标准形式。</p>
                    <p className="ml-4"><MathTex tex="C_1:(x+1)^2+(y+1)^2=4" />，所以圆心是 <MathTex tex="(-1,-1)" />，半径是 <MathTex tex="r_1=2" /></p>
                    <p className="ml-4"><MathTex tex="C_2:(x-2)^2+(y-1)^2=4" />，所以圆心是 <MathTex tex="(2,1)" />，半径是 <MathTex tex="r_2=2" /></p>
                    <p><strong>第二步</strong>，求圆心距。</p>
                    <p className="ml-4"><MathTex tex="d=\sqrt{(2+1)^2+(1+1)^2}=\sqrt{3^2+2^2}=\sqrt{13}" /></p>
                    <p><strong>第三步</strong>，比较 <MathTex tex="d" /> 与 <MathTex tex="r_1+r_2" />、<MathTex tex="|r_1-r_2|" />。</p>
                    <p className="ml-4"><MathTex tex="r_1+r_2=4" />，<MathTex tex="|r_1-r_2|=0" /></p>
                    <p className="ml-4">因为 <MathTex tex="0<\sqrt{13}<4" />，所以两圆<strong>相交</strong>，共有 <strong>2 条</strong>公切线。</p>
                    <hr className="border-gray-300 border-dashed" />
                    <p className="font-bold mt-2">例2：求与圆 <MathTex tex="x^2+y^2=1" /> 和圆 <MathTex tex="(x-3)^2+(y-4)^2=16" /> 都相切的所有直线方程。</p>
                    <div className="flex items-start gap-2">
                      <div className="flex-1 space-y-0.5">
                        <p><strong>第一步</strong>，先判断两圆位置关系。</p>
                        <p className="ml-4"><MathTex tex="C_1:x^2+y^2=1" />，圆心 <MathTex tex="(0,0)" />，<MathTex tex="r_1=1" /></p>
                        <p className="ml-4"><MathTex tex="C_2:(x-3)^2+(y-4)^2=16" />，圆心 <MathTex tex="(3,4)" />，<MathTex tex="r_2=4" /></p>
                        <p className="ml-4"><MathTex tex="d=\sqrt{(3-0)^2+(4-0)^2}=\sqrt{3^2+4^2}=\sqrt{25}=5" /></p>
                        <p className="ml-4">又因为 <MathTex tex="r_1+r_2=1+4=5=d" />，所以两圆<strong>外切</strong>，共有 <strong>3 条</strong>公切线</p>
                        <p><strong>第二步</strong>，求公切线方程。</p>
                        <p className="ml-4">设公切线方程为 <MathTex tex="ax+by+c=0" /></p>
                        <p className="ml-4">点到直线距离公式为 <MathTex tex="d=\dfrac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}}" /></p>
                        <p className="ml-4">令 <MathTex tex="a^2+b^2=1" />，距离公式简化为 <MathTex tex="d=|ax_0+by_0+c|" /></p>
                        <p className="ml-4"><MathTex tex="C_1" /> 的圆心 <MathTex tex="(0,0)" /> 到切线距离等于 <MathTex tex="r_1=1" /></p>
                        <p className="ml-4">代入得 <MathTex tex="|a \times 0+b \times 0+c|=1" />，即 <MathTex tex="|c|=1" />，所以 <MathTex tex="c=1" /> 或 <MathTex tex="c=-1" /></p>
                      </div>
                      <div className="flex-shrink-0">
                        <DebugGeo2dSvg data={tangentLineExample2Diagram} width={208} height={243} />
                      </div>
                    </div>
                    <p className="ml-4"><MathTex tex="C_2" /> 的圆心 <MathTex tex="(3,4)" /> 到切线距离等于 <MathTex tex="r_2=4" /></p>
                    <p className="ml-4">代入得 <MathTex tex="|3a+4b+c|=4" /></p>
                    <p><strong>第三步</strong>，分类讨论。</p>
                    <p className="ml-4">当 <MathTex tex="c=1" /> 时，<MathTex tex="|3a+4b+1|=4" />，去绝对值得 <MathTex tex="3a+4b=3" /> 或 <MathTex tex="3a+4b=-5" />。</p>
                    <p className="ml-4"><strong>求切线①</strong>，联立 <MathTex tex="\begin{cases}3a+4b=3\\a^2+b^2=1\end{cases}" /></p>
                    <p className="ml-8">由 <MathTex tex="3a+4b=3" />，得 <MathTex tex="a=\dfrac{3-4b}{3}" />，代入 <MathTex tex="a^2+b^2=1" />，得 <MathTex tex="\left(\dfrac{3-4b}{3}\right)^2+b^2=1" /></p>
                    <p className="ml-8">去分母，展开化简，得 <MathTex tex="25b^2-24b=0" />，即 <MathTex tex="b(25b-24)=0" /></p>
                    <p className="ml-8">所以 <MathTex tex="b=0" /> 或 <MathTex tex="b=\dfrac{24}{25}" />。</p>
                    <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-8">
                      <p>当 <MathTex tex="b=0" /> 时，代回 <MathTex tex="3a+4b=3" />，得 <MathTex tex="a=1" /></p>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-8">
                      <p>当 <MathTex tex="b=\dfrac{24}{25}" /> 时，代回 <MathTex tex="3a+4b=3" />，得 <MathTex tex="a=-\dfrac{7}{25}" /></p>
                    </div>
                    <p className="ml-8">取第一组解 <MathTex tex="a=1,\,b=0" />，代回 <MathTex tex="ax+by+c=0" />，得 <MathTex tex="x+1=0" />。</p>
                    <hr className="ml-4 border-gray-200" />
                    <p className="ml-4"><strong>求切线②</strong>，取第二组解 <MathTex tex="a=-\dfrac{7}{25},\,b=\dfrac{24}{25}" />，代回 <MathTex tex="ax+by+c=0" /></p>
                    <p className="ml-8">得 <MathTex tex="-\dfrac{7}{25}x+\dfrac{24}{25}y+1=0" />，两边乘 <MathTex tex="-25" />，得 <MathTex tex="7x-24y-25=0" /></p>
                    <hr className="ml-4 border-gray-200" />
                    <p className="ml-4"><strong>求切线③</strong>，联立 <MathTex tex="\begin{cases}3a+4b=-5\\a^2+b^2=1\end{cases}" />，解得 <MathTex tex="a=-\dfrac{3}{5},\,b=-\dfrac{4}{5}" /></p>
                    <p className="ml-8">代回 <MathTex tex="ax+by+c=0" />，得 <MathTex tex="-\dfrac{3}{5}x-\dfrac{4}{5}y+1=0" />，两边乘 <MathTex tex="-5" />，得 <MathTex tex="3x+4y-5=0" /></p>
                    <hr className="ml-4 border-gray-200" />
                    <p className="ml-4">当 <MathTex tex="c=-1" /> 时，由于已经求出 3 条公切线（外切时恰好 3 条），无需再讨论。</p>
                    <p><strong>答</strong>：共 3 条公切线。<strong>切线①</strong>：<MathTex tex="x+1=0" />；<strong>切线②</strong>：<MathTex tex="7x-24y-25=0" />；<strong>切线③</strong>：<MathTex tex="3x+4y-5=0" /></p>
                  </div>
                </div>
              </div>
            </div>

            <PracticeCard questions={circleTangentCountPractice} title="" optionCols={4} printOptionCols={4} explanations={circleAnswers} />

            {/* ④ 两圆的公共弦 */}
            <div className="border border-teal-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-teal-800 border-b border-teal-300 text-lg">④ 两圆的公共弦</div>
              <div className="px-3 py-1 space-y-1 text-base">
                <div className="flex gap-3 items-start">
                  <div className="flex-1 space-y-1">
                    <p><strong>当两圆相交时</strong>，两个交点的连线段称为<strong>公共弦</strong>。</p>
                    <p><strong>求公共弦所在直线</strong>：将两圆方程<strong>相减</strong>，消去 <MathTex tex="x^2" /> 和 <MathTex tex="y^2" /> 项，得到公共弦所在直线的方程（一次方程）。</p>
                    <p><strong>求公共弦长</strong>：得到直线方程后，选其中一个圆，用弦长公式</p>
                    <p className="ml-4"><MathTex tex="|AB|=2\sqrt{r^2-d^2}" />（<MathTex tex="d" /> 是圆心到公共弦所在直线的距离）</p>
                  </div>
                  <div className={`flex-shrink-0 overflow-hidden${geo2dDebugOn ? ' outline outline-1 outline-dashed outline-teal-400' : ''}`} style={{ width: 153, height: 134 }}>
                    <DebugGeo2dSvg data={circleChordConceptDiagram} width={153} height={134} />
                  </div>
                </div>

                {/* 例题 */}
                <div className="border border-blue-300 rounded overflow-hidden">
                  <div className="px-2 py-0.5 font-bold text-blue-800 border-b border-blue-300">例题（公共弦与交点）</div>
                  <div className="px-3 py-1 space-y-1">
                    <p className="font-bold">已知圆 <MathTex tex="C_1: x^2+y^2=25" /> 与圆 <MathTex tex="C_2: x^2+y^2-4x-2y-15=0" />，求：</p>
                    <div className="flex gap-3 items-start">
                      <div className="flex-1 space-y-1">
                        <p className="ml-4">（1）公共弦所在直线方程及公共弦长；</p>
                        <p className="ml-4">（2）两圆的交点坐标。</p>
                        <p className="font-bold">（1）公共弦直线与弦长</p>
                        <p><strong>第一步</strong>，两圆方程相减，消去二次项：</p>
                        <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                          <MathTex tex="(x^2+y^2-25)-(x^2+y^2-4x-2y-15)=0" />
                        </div>
                        <p className="ml-4">化简得 <MathTex tex="4x+2y-10=0" />，两边同除以 2</p>
                        <p className="ml-4">即公共弦所在直线为 <MathTex tex="2x+y-5=0" /></p>
                        <p><strong>第二步</strong>，要用弦长公式 <MathTex tex="|AB|=2\sqrt{r^2-d^2}" />，需要知道某个圆的半径 <MathTex tex="r" /> 和圆心到公共弦的距离 <MathTex tex="d" />，选哪个圆均可。</p>
                        <p className="ml-4">这里选 <MathTex tex="C_1" />（圆心 <MathTex tex="(0,0)" />，<MathTex tex="r=5" />），求圆心到公共弦 <MathTex tex="2x+y-5=0" /> 的距离：</p>
                      </div>
                      <div className={`flex-shrink-0 overflow-hidden${geo2dDebugOn ? ' outline outline-1 outline-dashed outline-teal-400' : ''}`} style={{ width: 248, height: 261 }}>
                        <DebugGeo2dSvg data={circleCommonChordDiagram} width={248} height={261} />
                      </div>
                    </div>
                    {/* flex 结束，以下全宽 */}
                    <div className="space-y-1">
                      <div className="ml-4 space-y-0">
                        <div className="bg-gray-50 border border-gray-200 rounded-t px-2 py-1">
                          <MathTex tex="d=\dfrac{|Ax_0+By_0+C|}{\sqrt{A^2+B^2}}" />
                        </div>
                        <div className="bg-gray-50 border-x border-b border-gray-200 rounded-b px-2 py-1">
                          <MathTex tex="=\dfrac{|2\times0+1\times0-5|}{\sqrt{2^2+1^2}}=\dfrac{5}{\sqrt{5}}=\sqrt{5}" />
                        </div>
                      </div>
                      <p><strong>第三步</strong>，弦长公式：<MathTex tex="|AB|=2\sqrt{r^2-d^2}=2\sqrt{25-5}=4\sqrt{5}" /></p>

                      <p className="font-bold mt-1">（2）求交点坐标</p>
                      <p><strong>第一步</strong>，由（1）已知公共弦所在直线为 <MathTex tex="2x+y-5=0" />，解出 <MathTex tex="y=5-2x" />，代入 <MathTex tex="C_1" /> 的方程。</p>
                      <p><strong>第二步</strong>，代入 <MathTex tex="C_1" /> 的方程 <MathTex tex="x^2+y^2=25" />：</p>
                      <p className="ml-4"><MathTex tex="x^2+(5-2x)^2=25" />，展开得 <MathTex tex="5x^2-20x=0" />，即 <MathTex tex="5x(x-4)=0" /></p>
                      <p className="ml-4">解得 <MathTex tex="x=0" /> 或 <MathTex tex="x=4" /></p>
                      <p><strong>第三步</strong>，将 <MathTex tex="x=0,\,x=4" /> 代回 <MathTex tex="y=5-2x" />，得交点 <MathTex tex="A(0,5)" /> 和 <MathTex tex="B(4,-3)" /></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <PracticeCard questions={circleCommonChordPractice} title="" optionCols={4} printOptionCols={4} explanations={circleAnswers} />

          </div>
        </Collapsible>
      </section>

      <PageBreak />
      <section id="circle-symmetry" className="mb-3 scroll-mt-4">
        <Collapsible title="五、圆的对称问题" defaultOpen storageKey="circle:symmetry">
          <div className="space-y-0 text-lg text-gray-800">

            {/* ① 核心原理 */}
            <div className="border border-teal-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-teal-800 border-b border-teal-300 text-lg">① 核心原理（圆关于直线的对称）</div>
              <div className="px-3 py-1 text-base">
                <div className="flex items-start gap-4">
                  <div className="flex-1 space-y-0.5">

                    <p>圆 <MathTex tex="C_1" /> 关于直线 <MathTex tex="l" /> 的对称圆 <MathTex tex="C_2" />（如右图），有两个关键性质：</p>

                    <p><strong>①</strong> <strong>半径不变</strong>——对称保持距离，圆上每点到新圆心的距离仍为 <MathTex tex="r" />。</p>
                    <p><strong>②</strong> <strong>圆心变对称点</strong>——<MathTex tex="C_1" />、<MathTex tex="C_2" /> 到直线 <MathTex tex="l" /> 的距离相等，且 <MathTex tex="C_1C_2\perp l" />。</p>

                  </div>
                  <DebugGeo2dSvg data={circleSymmetryDiagram} width={167} height={132} xOff={5} yOff={16} className="flex-shrink-0" />
                </div>
              </div>
            </div>

            {/* ② 解题模板 */}
            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-amber-800 border-b border-amber-300 bg-amber-50 text-lg">② 解题模板（圆关于直线对称）</div>
              <div className="px-3 py-1 space-y-0.5 text-base">
                <p>设原圆圆心 <MathTex tex="C_1(m,\,n)" />，半径 <MathTex tex="r" />，对称直线 <MathTex tex="l" />，对称圆心 <MathTex tex="C_2(a,\,b)" />。</p>

                <p><strong>第一步</strong>，读出原圆圆心 <MathTex tex="C_1" /> 和半径 <MathTex tex="r" />（若为一般式先配方）。</p>

                <p><strong>第二步</strong>，设对称圆心为 <MathTex tex="C_2(a,\,b)" />，联立两个条件求解：</p>
                <p className="ml-4"><strong>条件①</strong>（中点在直线上）：<MathTex tex="C_1C_2" /> 的中点 <MathTex tex="\left(\dfrac{a+m}{2},\,\dfrac{b+n}{2}\right)" /> 代入直线方程等于零</p>
                <p className="ml-4"><strong>条件②</strong>（<MathTex tex="C_1C_2\perp l" />）：垂直则斜率相乘为 <MathTex tex="-1" />，即 <MathTex tex="k_{C_1C_2} \cdot k_l = -1" />（竖直/水平时特殊处理）</p>
                <p className="ml-4">联立两个条件，解出 <MathTex tex="a" /> 和 <MathTex tex="b" />，即得 <MathTex tex="C_2(a,\,b)" />。</p>

                <p><strong>第三步</strong>，以 <MathTex tex="C_2(a,\,b)" /> 为圆心、原半径 <MathTex tex="r" /> 写出对称圆方程。</p>
              </div>
            </div>

            {/* ③ 核心原理（圆关于点的对称） */}
            <div className="border border-teal-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-teal-800 border-b border-teal-300 text-lg">③ 核心原理（圆关于点的对称）</div>
              <div className="px-3 py-1 space-y-0.5 text-base">
                <p>圆 <MathTex tex="C_1" /> 关于点 <MathTex tex="P" /> 对称的圆 <MathTex tex="C_2" />，有两个关键性质：</p>
                <p><strong>①</strong> <strong>半径不变</strong>——对称保持距离，<MathTex tex="r" /> 不变。</p>
                <p><strong>②</strong> <strong>圆心变对称点</strong>——<MathTex tex="C_1" /> 和 <MathTex tex="C_2" /> 关于 <MathTex tex="P" /> 对称，所以 <MathTex tex="P" /> 是线段 <MathTex tex="C_1C_2" /> 的中点。</p>
                <p><strong>比直线对称简单得多</strong>：不用联立方程组，直接用中点公式一步算出对称圆心。</p>
              </div>
            </div>

            {/* ④ 解题模板（圆关于点对称） */}
            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-amber-800 border-b border-amber-300 bg-amber-50 text-lg">④ 解题模板（圆关于点对称）</div>
              <div className="px-3 py-1 space-y-0.5 text-base">
                <p>设原圆圆心 <MathTex tex="C_1(m,\,n)" />，半径 <MathTex tex="r" />，对称中心 <MathTex tex="P(p,\,q)" />。</p>
                <p><strong>第一步</strong>，读出原圆圆心 <MathTex tex="C_1" /> 和半径 <MathTex tex="r" />（若为一般式先配方）。</p>
                <p><strong>第二步</strong>，因为 <MathTex tex="P" /> 是 <MathTex tex="C_1C_2" /> 的中点，所以 <MathTex tex="\left(\dfrac{m+a}{2},\,\dfrac{n+b}{2}\right)=(p,\,q)" /></p>
                <p className="ml-4">即 <MathTex tex="\dfrac{m+a}{2}=p" />，<MathTex tex="\dfrac{n+b}{2}=q" />，解出 <MathTex tex="a" /> 和 <MathTex tex="b" />。</p>
                <p><strong>第三步</strong>，以 <MathTex tex="C_2(a,\,b)" /> 为圆心、原半径 <MathTex tex="r" /> 写出对称圆方程。</p>
              </div>
            </div>

            {/* ⑤ 例题（圆关于点对称） */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-blue-800 border-b border-blue-300 text-lg">⑤ 例题（圆关于点对称）</div>
              <div className="px-3 py-1 space-y-0.5 text-base">
                <p className="font-bold">求圆 <MathTex tex="(x-1)^2+(y-2)^2=4" /> 关于点 <MathTex tex="P(3,\,1)" /> 对称的圆的方程。</p>

                <p><strong>解：</strong>由 <MathTex tex="(x-1)^2+(y-2)^2=4" /> 得圆心 <MathTex tex="C_1(1,\,2)" />，半径 <MathTex tex="r=2" />。</p>
                <p>设对称圆心为 <MathTex tex="C_2(a,\,b)" />，由对称性知半径不变，仍为 <MathTex tex="r=2" />。</p>
                <p><MathTex tex="C_1(1,2)" /> 与 <MathTex tex="C_2(a,b)" /> 的中点为 <MathTex tex="\left(\dfrac{1+a}{2},\,\dfrac{2+b}{2}\right)" /></p>
                <p>因为 <MathTex tex="P(3,1)" /> 是 <MathTex tex="C_1C_2" /> 的中点，所以</p>
                <p className="ml-4"><MathTex tex="\dfrac{1+a}{2}=3" />，解得 <MathTex tex="a=5" /></p>
                <p className="ml-4"><MathTex tex="\dfrac{2+b}{2}=1" />，解得 <MathTex tex="b=0" /></p>
                <p>所以 <MathTex tex="C_2(5,\,0)" />，半径 <MathTex tex="r=2" />，对称圆方程为</p>
                <div className="bg-teal-50 border border-teal-300 rounded px-2 py-1 ml-4 text-center">
                  <MathTex tex="(x-5)^2+y^2=4" />
                </div>
              </div>
            </div>

            <PageBreak />

            {/* ⑥ 例题（圆关于直线对称） */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-blue-800 border-b border-blue-300 text-lg">⑥ 例题（圆关于直线对称）</div>
              <div className="px-3 py-1 space-y-0.5 text-base">
                <p className="font-bold">求圆 <MathTex tex="C_1: x^2+y^2=4" /> 关于直线 <MathTex tex="y=x+2" /> 的对称圆 <MathTex tex="C_2" /> 的方程。</p>

                <p><strong>核心思路：</strong>对称不改变形状，只改变位置，所以半径不变，整道题就变成一件事：<strong>求原圆心 <MathTex tex="C_1" /> 关于直线 <MathTex tex="l" /> 的对称点 <MathTex tex="C_2" /></strong>。求对称点的标准方法：联立"中点在 <MathTex tex="l" /> 上"和"<MathTex tex="C_1C_2 \perp l" />"两个条件。</p>

                <p><strong>解：</strong>由 <MathTex tex="x^2+y^2=4" /> 得圆心 <MathTex tex="C_1(0,\,0)" />，半径 <MathTex tex="r=2" />。</p>

                <p>设对称圆心为 <MathTex tex="C_2(a,\,b)" />，由对称性知半径不变，仍为 <MathTex tex="r=2" />。</p>

                <p><MathTex tex="C_1(0,0)" /> 与 <MathTex tex="C_2(a,b)" /> 的中点为 <MathTex tex="\left(\dfrac{0+a}{2},\,\dfrac{0+b}{2}\right)=\left(\dfrac{a}{2},\,\dfrac{b}{2}\right)" /></p>
                <p>因为中点在直线 <MathTex tex="y=x+2" /> 上，所以将中点代入直线，得 <MathTex tex="\dfrac{b}{2}=\dfrac{a}{2}+2" />，化简得 <MathTex tex="a-b+4=0" /> ①</p>

                <p>因为 <MathTex tex="C_1C_2 \perp l" />，垂直则斜率相乘为 <MathTex tex="-1" />，由 <MathTex tex="y=x+2" /> 知 <MathTex tex="k_l=1" />，所以 <MathTex tex="k_{C_1C_2} \times 1 = -1" />，得 <MathTex tex="k_{C_1C_2}=-1" />，即 <MathTex tex="\dfrac{b-0}{a-0}=-1" />，得 <MathTex tex="b=-a" /> ②</p>

                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                  联立①②：<MathTex tex="\begin{cases} a-b+4=0 \quad ① \\ b=-a \quad ② \end{cases}" />
                </div>
                <p>将②代入①，得 <MathTex tex="a-(-a)+4=0" />，即 <MathTex tex="2a=-4" />，解得 <MathTex tex="a=-2" />，代入②得 <MathTex tex="b=2" /></p>

                <p>所以 <MathTex tex="C_2(-2,\,2)" />，半径 <MathTex tex="r=2" />，对称圆方程为</p>
                <div className="bg-teal-50 border border-teal-300 rounded px-2 py-1 ml-4 text-center">
                  <MathTex tex="(x+2)^2+(y-2)^2=4" />
                </div>
              </div>
            </div>

            <PracticeCard questions={[...circleSymPractice, ...circlePointSymPractice]} title="" optionCols={4} printOptionCols={4} explanations={circleAnswers} hideBlankLine />

          </div>
        </Collapsible>
      </section>

      <section id="circle-param" className="mb-3 scroll-mt-4">
        <Collapsible title="六、含参数问题（直线与圆）" defaultOpen storageKey="circle:param">
          <div className="space-y-0 text-lg text-gray-800">

            {/* ① 核心思路 */}
            <div className="border border-teal-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-teal-800 border-b border-teal-300 text-lg">① 核心思路</div>
              <div className="px-3 py-1 space-y-0.5 text-base">
                <p>直线与圆的位置关系由 <MathTex tex="d" />（圆心到直线的距离）与 <MathTex tex="r" />（半径）的大小决定。</p>
                <p>当直线或圆含有参数时，<MathTex tex="d" /> 是关于参数的表达式，位置关系问题就<strong>转化为关于参数的不等式或方程</strong>：</p>
                <table className="w-full border-collapse text-base mt-1">
                  <tbody>
                    <tr><td className="border border-gray-300 px-2 py-0.5 text-center font-bold w-20">相交</td><td className="border border-gray-300 px-2 py-0.5 text-center"><MathTex tex="d < r" /></td><td className="border border-gray-300 px-2 py-0.5 text-center">解<strong>不等式</strong>，得参数<strong>范围</strong></td></tr>
                    <tr><td className="border border-gray-300 px-2 py-0.5 text-center font-bold">相切</td><td className="border border-gray-300 px-2 py-0.5 text-center"><MathTex tex="d = r" /></td><td className="border border-gray-300 px-2 py-0.5 text-center">解<strong>方程</strong>，得参数<strong>具体值</strong></td></tr>
                    <tr><td className="border border-gray-300 px-2 py-0.5 text-center font-bold">相离</td><td className="border border-gray-300 px-2 py-0.5 text-center"><MathTex tex="d > r" /></td><td className="border border-gray-300 px-2 py-0.5 text-center">解<strong>不等式</strong>，得参数<strong>范围</strong></td></tr>
                  </tbody>
                </table>
                <p className="font-bold text-amber-700 mt-1">高考高频考法：给出含参的直线或圆，根据位置关系条件求参数的值或范围。</p>
                <p><MathTex tex="|X|<k" /> 等价于 <MathTex tex="-k<X<k" />　　例：<MathTex tex="|X|<3" /> 等价于 <MathTex tex="-3<X<3" /></p>
                <p><MathTex tex="|X|=k" /> 等价于 <MathTex tex="X=k" /> 或 <MathTex tex="X=-k" />　　例：<MathTex tex="|X|=3" /> 等价于 <MathTex tex="X=3" /> 或 <MathTex tex="X=-3" /></p>
                <p><MathTex tex="|X|>k" /> 等价于 <MathTex tex="X>k" /> 或 <MathTex tex="X<-k" />　　例：<MathTex tex="|X|>3" /> 等价于 <MathTex tex="X>3" /> 或 <MathTex tex="X<-3" /></p>
              </div>
            </div>

            <PageBreak />
            {/* ② 解题模板 */}
            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-amber-800 border-b border-amber-300 bg-amber-50 text-lg">② 解题模板</div>
              <div className="px-3 py-1 space-y-0.5 text-base">
                <p><strong>第一步</strong>，读出圆心 <MathTex tex="C(x_0,\,y_0)" /> 和半径 <MathTex tex="r" />（一般式先配方）。</p>
                <p><strong>第二步</strong>，将直线方程整理为 <MathTex tex="Ax+By+C=0" /> 的形式，用点到直线距离公式写出 <MathTex tex="d" />：</p>
                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4 text-center">
                  <MathTex tex="d=\dfrac{|Ax_0+By_0+C|}{\sqrt{A^2+B^2}}" />（此时 <MathTex tex="d" /> 是含参数的表达式）
                </div>
                <p><strong>第三步</strong>，根据题目给出的位置关系，列出关于参数的不等式或方程：</p>
                <p className="ml-4">相交列 <MathTex tex="d<r" />，相切列 <MathTex tex="d=r" />，相离列 <MathTex tex="d>r" /></p>
                <p><strong>第四步</strong>，解不等式或方程，得到参数的值或取值范围。</p>
                <p className="text-sm text-amber-700 ml-4">注意：解含绝对值的不等式时，常用 <MathTex tex="|X|<a \Leftrightarrow -a<X<a" /> 或 <MathTex tex="|X|>a \Leftrightarrow X>a" /> 或 <MathTex tex="X<-a" /></p>
              </div>
            </div>

            {/* ③ 例题 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-blue-800 border-b border-blue-300 text-lg">③ 例题</div>
              <div className="px-3 py-1 space-y-0.5 text-base">
                <p className="font-bold">已知直线 <MathTex tex="l: x+y+a=0" /> 与圆 <MathTex tex="C: x^2+y^2-2x-4y+4=0" /> 相交于两点，求 <MathTex tex="a" /> 的取值范围。</p>

                <p><strong>第一步</strong>，用公式法读出圆心和半径。对比 <MathTex tex="x^2+y^2+Dx+Ey+F=0" />，得 <MathTex tex="D=-2,\;E=-4,\;F=4" /></p>
                <p className="ml-4">圆心 <MathTex tex="\left(-\dfrac{D}{2},\,-\dfrac{E}{2}\right)=(1,\,2)" />，半径 <MathTex tex="r=\dfrac{\sqrt{D^2+E^2-4F}}{2}=\dfrac{\sqrt{4+16-16}}{2}=1" /></p>

                <p><strong>第二步</strong>，直线 <MathTex tex="x+y+a=0" /> 的系数为 <MathTex tex="A=1,\;B=1,\;C=a" />，将圆心 <MathTex tex="(1,\,2)" /> 代入点到直线距离</p>
                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                  公式：<MathTex tex="d=\dfrac{|Ax_0+By_0+C|}{\sqrt{A^2+B^2}}=\dfrac{|1\times 1+1\times 2+a|}{\sqrt{1^2+1^2}}=\dfrac{|a+3|}{\sqrt{2}}" />
                </div>

                <p><strong>第三步</strong>，相交于两点的条件是 <MathTex tex="d<r" />，代入 <MathTex tex="d" /> 和 <MathTex tex="r" />：</p>
                <p className="ml-4"><MathTex tex="\dfrac{|a+3|}{\sqrt{2}}<1" />，两边同乘 <MathTex tex="\sqrt{2}" />，得 <MathTex tex="|a+3|<\sqrt{2}" /></p>
                <p><strong>第四步</strong>，去绝对值。</p>
                <p className="ml-4">因为 <MathTex tex="|a+3|<\sqrt{2}" />，所以 <MathTex tex="-\sqrt{2}<a+3<\sqrt{2}" /></p>
                <p className="ml-4">三项同时减 3，得 <MathTex tex="-3-\sqrt{2}<a<\sqrt{2}-3" /></p>

                <div className="bg-teal-50 border border-teal-300 rounded px-2 py-1 ml-4 text-center">
                  <MathTex tex="a" /> 的取值范围为 <MathTex tex="\left(-3-\sqrt{2},\;\sqrt{2}-3\right)" />
                </div>
              </div>
            </div>

            <PracticeCard questions={circleParamPractice} title="✏️ 即时训练 — 含参数的直线与圆" hideBlankLine explanations={circleAnswers} />

          </div>
        </Collapsible>
      </section>

      </LessonLayout>
      <UnifiedDebugToggle />
    </div>
  );
}
