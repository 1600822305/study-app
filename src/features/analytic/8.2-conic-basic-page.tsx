import { Math as MathTex, Collapsible, PageHeader, LessonLayout, ExportButton, DebugGeo2dSvg, Geo2dDebugToggle, PageBreak } from '@/components/shared';
import { conicProgressItems } from './data/8.2/8.2-conic-progress';
import { ellipseDiagram, ellipseTableX, ellipseTableY, ellipsePythagorDiagram, ellipseEx2Diagram, ellipseEx4Diagram, ellipseEx7Diagram, ellipseS3Diagram } from './data/8.2/8.2-conic-diagrams';
import { useProgress } from '@/hooks';

export function ConicBasicPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('conic', conicProgressItems);

  return (
    <div>
      <PageHeader
        stage=""
        title="8.2 椭圆"
        subtitle="椭圆的定义、标准方程与几何性质"
        tags={[
          { label: '难度 ★★★☆☆', color: 'amber' },
          { label: '高考重点', color: 'red' },
          { label: '约1天', color: 'blue' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="8.2 椭圆" />
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      {/* Section 1: 椭圆 */}
      <section id="ellipse" className="mb-3 scroll-mt-4">
        <Collapsible title="一、椭圆" defaultOpen storageKey="conic:ellipse">
          <div className="space-y-0 text-lg text-gray-800">

            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-green-800 border-b border-green-300 text-lg">① 标准方程与几何性质</div>
              <div className="px-2 py-1">
                <table className="w-full border-collapse text-base">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-2 py-1 text-center font-bold w-24">焦点的位置</th>
                      <th className="border border-gray-300 px-2 py-1 text-center font-bold">焦点在 <MathTex tex="x" /> 轴上</th>
                      <th className="border border-gray-300 px-2 py-1 text-center font-bold">焦点在 <MathTex tex="y" /> 轴上</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1 text-center font-bold">图形</td>
                      <td className="border border-gray-300 px-1 py-1 text-center"><DebugGeo2dSvg data={ellipseTableX} width={213} height={186} /></td>
                      <td className="border border-gray-300 px-1 py-1 text-center"><DebugGeo2dSvg data={ellipseTableY} width={213} height={186} /></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1 text-center font-bold">标准方程</td>
                      <td className="border border-gray-300 px-2 py-1 text-center"><MathTex tex="\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1\ (a > b > 0)" /></td>
                      <td className="border border-gray-300 px-2 py-1 text-center"><MathTex tex="\dfrac{y^2}{a^2} + \dfrac{x^2}{b^2} = 1\ (a > b > 0)" /></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1 text-center font-bold">范围</td>
                      <td className="border border-gray-300 px-2 py-1 text-center"><MathTex tex="-a \le x \le a" /> 且 <MathTex tex="-b \le y \le b" /></td>
                      <td className="border border-gray-300 px-2 py-1 text-center"><MathTex tex="-b \le x \le b" /> 且 <MathTex tex="-a \le y \le a" /></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1 text-center font-bold">顶点</td>
                      <td className="border border-gray-300 px-2 py-1 text-center">
                        <MathTex tex="A_1(-a,0)" />、<MathTex tex="A_2(a,0)" /><br />
                        <MathTex tex="B_1(0,-b)" />、<MathTex tex="B_2(0,b)" />
                      </td>
                      <td className="border border-gray-300 px-2 py-1 text-center">
                        <MathTex tex="A_1(0,-a)" />、<MathTex tex="A_2(0,a)" /><br />
                        <MathTex tex="B_1(-b,0)" />、<MathTex tex="B_2(b,0)" />
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1 text-center font-bold">轴长</td>
                      <td className="border border-gray-300 px-2 py-1 text-center" colSpan={2}>短轴长 <MathTex tex="2b" />，长轴长 <MathTex tex="2a" /></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1 text-center font-bold">焦点</td>
                      <td className="border border-gray-300 px-2 py-1 text-center"><MathTex tex="F_1(-c,0)" />、<MathTex tex="F_2(c,0)" /></td>
                      <td className="border border-gray-300 px-2 py-1 text-center"><MathTex tex="F_1(0,-c)" />、<MathTex tex="F_2(0,c)" /></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1 text-center font-bold">焦距</td>
                      <td className="border border-gray-300 px-2 py-1 text-center" colSpan={2}><MathTex tex="F_1F_2 = 2c" /></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1 text-center font-bold"><MathTex tex="a, b, c" /> 的关系</td>
                      <td className="border border-gray-300 px-2 py-1 text-center" colSpan={2}><MathTex tex="a^2 = b^2 + c^2" /></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1 text-center font-bold">离心率</td>
                      <td className="border border-gray-300 px-2 py-1 text-center" colSpan={2}><MathTex tex="e = \dfrac{c}{a} = \sqrt{1 - \dfrac{b^2}{a^2}}\ (0 < e < 1)" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-blue-800 border-b border-blue-300 text-lg">② 定义</div>
              <div className="px-3 py-1">
                <div className="flex items-start gap-4">
                  <div className="flex-1 space-y-1">
                    <p>平面内与两个定点 <MathTex tex="F_1" />、<MathTex tex="F_2" /> 的距离之和等于常数（大于 <MathTex tex="F_1F_2" />）的点的轨迹称为<strong>椭圆</strong>。这两个定点称为椭圆的<strong>焦点</strong>，两焦点的距离称为椭圆的<strong>焦距</strong>。</p>
                    <p>如图：<MathTex tex="P" /> 是椭圆上一点，<MathTex tex="PF_1 + PF_2 = 2a > F_1F_2\,(= 2c)" />。</p>
                  </div>
                  <DebugGeo2dSvg data={ellipseDiagram} width={180} height={130} className="flex-shrink-0" />
                </div>
                <div className="mt-1">
                  <p className="font-bold text-red-600 mb-0.5">解释</p>
                  <div className="space-y-0 ml-2">
                    <p><MathTex tex="PF_1 + PF_2 = 2a > F_1F_2" />，点 <MathTex tex="P" /> 的轨迹是以 <MathTex tex="F_1, F_2" /> 为焦点的<strong>椭圆</strong>；</p>
                    <p><MathTex tex="PF_1 + PF_2 = 2a = F_1F_2" />，点 <MathTex tex="P" /> 的轨迹是<strong>线段</strong>；</p>
                    <p><MathTex tex="PF_1 + PF_2 = 2a < F_1F_2" />，点 <MathTex tex="P" /> 的轨迹<strong>无轨迹</strong>。</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-amber-800 border-b border-amber-300 text-lg">③ 顶点怎么来的（考题也叫"端点"，如"右端点"即 <MathTex tex="A_2(a,0)" />，"下端点"即 <MathTex tex="B_1(0,-b)" />）</div>
              <div className="px-3 py-1 space-y-1">
                <p>以焦点在 <MathTex tex="x" /> 轴的椭圆 <MathTex tex="\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1" /> 为例：</p>
                <p className="font-bold">方法：令其中一个变量为 0，代入方程，求另一个变量</p>
                <p className="mt-1"><strong>第一步：令 <MathTex tex="y = 0" />，代入方程</strong></p>
                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                  <MathTex tex="\dfrac{x^2}{a^2} + 0 = 1 \;\Rightarrow\; x^2 = a^2 \;\Rightarrow\; x = \pm a" />
                </div>
                <p className="ml-4">得到<strong>长轴顶点</strong>：<MathTex tex="A_1(-a,\,0)" />、<MathTex tex="A_2(a,\,0)" /></p>
                <p className="mt-1"><strong>第二步：令 <MathTex tex="x = 0" />，代入方程</strong></p>
                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                  <MathTex tex="0 + \dfrac{y^2}{b^2} = 1 \;\Rightarrow\; y^2 = b^2 \;\Rightarrow\; y = \pm b" />
                </div>
                <p className="ml-4">得到<strong>短轴顶点</strong>：<MathTex tex="B_1(0,\,-b)" />、<MathTex tex="B_2(0,\,b)" /></p>
                <p className="font-bold text-amber-700 mt-1">口诀：令哪个变量为 0，就求出另一个轴上的顶点。<MathTex tex="a > b" />，长轴在 <MathTex tex="x" /> 轴，顶点离原点更远。</p>
              </div>
            </div>

            <div className="border border-orange-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-orange-800 border-b border-orange-300 text-lg">④ 焦点和三量关系 <MathTex tex="a^2 = b^2 + c^2" /> 怎么来的</div>
              <div className="px-3 py-1">
                <div className="flex items-start gap-4">
                  <div className="flex-1 space-y-0">
                    <p>取<strong>短轴端点</strong> <MathTex tex="B(0,\,b)" />，它到两焦点 <MathTex tex="F_1(-c,\,0)" />、<MathTex tex="F_2(c,\,0)" /> 的距离之和，由椭圆定义等于 <MathTex tex="2a" />。</p>
                    <p className="mt-1"><strong>第一步：</strong>由对称性，<MathTex tex="B" /> 到两焦点等距，所以</p>
                    <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                      <MathTex tex="|BF_1| = |BF_2| = a" />
                    </div>
                    <p className="mt-1"><strong>第二步：</strong>在直角三角形 <MathTex tex="OBF_1" /> 中（<MathTex tex="O" /> 为原点），用<strong>勾股定理</strong></p>
                    <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                      <MathTex tex="|BF_1|^2 = |OB|^2 + |OF_1|^2 \;\Rightarrow\; a^2 = b^2 + c^2" />
                    </div>
                    <p className="mt-1">由此得 <MathTex tex="c = \sqrt{a^2 - b^2}" />，焦点坐标为 <MathTex tex="F_1(-c,\,0)" />、<MathTex tex="F_2(c,\,0)" />。</p>
                    <p className="font-bold text-orange-700 mt-1">记忆：椭圆 <MathTex tex="a^2 = b^2 + c^2" />（大的等于两小的平方和），<MathTex tex="a > b > c > 0" /></p>
                  </div>
                  <DebugGeo2dSvg data={ellipsePythagorDiagram} width={190} height={155} className="flex-shrink-0" />
                </div>
              </div>
            </div>

            {/* 例题1 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-blue-800 border-b border-blue-300 text-lg">⑤ 例题1（读方程型）</div>
              <div className="px-3 py-1 space-y-0">
                <p className="font-bold">设 <MathTex tex="P" /> 是椭圆 <MathTex tex="\dfrac{x^2}{25} + \dfrac{y^2}{9} = 1" /> 上的动点，求：</p>
                <p className="ml-4">（1）长半轴长 <MathTex tex="a" />，短半轴长 <MathTex tex="b" /></p>
                <p className="ml-4">（2）焦点坐标</p>
                <p className="ml-4">（3）P 到两焦点的距离之和</p>

                <p className="mt-1"><strong>第一步：读出 <MathTex tex="a^2" /> 和 <MathTex tex="b^2" /></strong></p>
                <p className="ml-4">分母大的是 <MathTex tex="a^2" />，所以 <MathTex tex="a^2 = 25,\; b^2 = 9" />，得 <MathTex tex="a = 5,\; b = 3" /></p>

                <p className="mt-1"><strong>（1）长半轴 <MathTex tex="a = 5" />，短半轴 <MathTex tex="b = 3" /></strong></p>

                <p className="mt-1"><strong>（2）求焦点：</strong>由三量关系 <MathTex tex="a^2 = b^2 + c^2" />，移项得</p>
                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                  <MathTex tex="c^2 = a^2 - b^2 = 25 - 9 = 16" />，得 <MathTex tex="c = \pm 4" />，因 <MathTex tex="c > 0" /> 舍去负值，所以 <MathTex tex="c = 4" />
                </div>
                <p className="ml-4"><MathTex tex="x^2" /> 项分母更大，焦点在 <MathTex tex="x" /> 轴，焦点为 <MathTex tex="F_1(-4,\,0)" />、<MathTex tex="F_2(4,\,0)" /></p>

                <p className="mt-1"><strong>（3）P 到两焦点距离之和：</strong>由椭圆定义</p>
                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                  <MathTex tex="|PF_1| + |PF_2| = 2a = 2 \times 5 = 10" />
                </div>
                <p className="mt-1 text-gray-500">【考点】读方程 → 找最大分母 = <MathTex tex="a^2" />；用 <MathTex tex="c^2=a^2-b^2" /> 求焦点；定义直接给出距离和</p>
              </div>
            </div>

            {/* 例题2 */}
            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-green-800 border-b border-green-300 text-lg">⑥ 例题2（综合型）</div>
              <div className="px-3 py-1">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p className="font-bold">椭圆 <MathTex tex="C{:}\;\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1\;(a>b>0)" /> 的左、右焦点分别为 <MathTex tex="F_1" />、<MathTex tex="F_2" />，过 <MathTex tex="F_2" /> 的直线与椭圆交于 <MathTex tex="P" />、<MathTex tex="Q" /> 两点。若 <MathTex tex="|PF_1|=3" />，<MathTex tex="|PQ|=4" />，<MathTex tex="|F_1Q|=5" />，求椭圆 <MathTex tex="C" /> 的方程。</p>
                  </div>
                  <DebugGeo2dSvg data={ellipseEx2Diagram} width={195} height={160} className="flex-shrink-0" />
                </div>
                <div className="space-y-0">
                  <p className="mt-2"><strong>第一步：用三角形周长求 <MathTex tex="a" /></strong></p>
                  <p className="ml-4"><MathTex tex="\triangle PQF_1" /> 的周长 <MathTex tex="=|PF_1|+|QF_1|+|PQ|=3+5+4=12" /></p>
                  <p className="ml-4">由椭圆定义：<MathTex tex="|PF_1|+|PF_2|=2a" />，<MathTex tex="|QF_1|+|QF_2|=2a" />，两式相加</p>
                  <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                    <MathTex tex="(|PF_1|+|QF_1|)+(|PF_2|+|QF_2|)=4a" />
                  </div>
                  <p className="ml-4">因为 <MathTex tex="F_2" /> 在线段 <MathTex tex="PQ" /> 上，所以 <MathTex tex="|PF_2|+|QF_2|=|PQ|" />，即周长也等于 <MathTex tex="4a" /></p>
                  <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                    <MathTex tex="4a=12\text{，得 }a=3,\quad a^2=9" />
                  </div>

                  <p className="mt-1"><strong>第二步：判断直角，求 <MathTex tex="|PF_2|" /></strong></p>
                  <p className="ml-4">验证：<MathTex tex="|PF_1|^2+|PQ|^2 = 3^2+4^2=25=5^2=|F_1Q|^2" />，满足勾股定理</p>
                  <p className="ml-4">所以 <MathTex tex="\angle F_1PQ=90°" />，即 <MathTex tex="\angle F_1PF_2=90°" /></p>
                  <p className="ml-4">由椭圆定义 <MathTex tex="|PF_1|+|PF_2|=2a" />，代入 <MathTex tex="a=3" />，得 <MathTex tex="|PF_1|+|PF_2|=6" /></p>
                  <p className="ml-4">题目已知 <MathTex tex="|PF_1|=3" />，代入得 <MathTex tex="3+|PF_2|=6" />，所以 <MathTex tex="|PF_2|=3" /></p>

                  <p className="mt-1"><strong>第三步：在 <MathTex tex="\triangle PF_1F_2" /> 中用勾股定理求 <MathTex tex="c" /></strong></p>
                  <p className="ml-4"><MathTex tex="\angle F_1PF_2=90°" />，由勾股定理：</p>
                  <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                    <MathTex tex="|F_1F_2|^2=|PF_1|^2+|PF_2|^2=3^2+3^2=18" />
                  </div>
                  <p className="ml-4">两焦点间距 <MathTex tex="|F_1F_2|=2c" />，所以 <MathTex tex="(2c)^2=18" />，得 <MathTex tex="2c=\sqrt{18}=3\sqrt{2}" /></p>
                  <p className="ml-4">所以 <MathTex tex="c=\dfrac{3\sqrt{2}}{2}" />，得 <MathTex tex="c^2=\dfrac{9}{2}" /></p>

                  <p className="mt-1"><strong>第四步：求 <MathTex tex="b^2" /> 写方程</strong></p>
                  <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                    <MathTex tex="b^2=a^2-c^2=9-\dfrac{9}{2}=\dfrac{18}{2}-\dfrac{9}{2}=\dfrac{9}{2}" />
                  </div>
                  <p className="ml-4">椭圆方程为 <MathTex tex="\dfrac{x^2}{9}+\dfrac{y^2}{\tfrac{9}{2}}=1" /></p>
                  <p className="ml-4">化简：<MathTex tex="y^2 \div \dfrac{9}{2} = y^2 \times \dfrac{2}{9} = \dfrac{2y^2}{9}" />，所以椭圆方程为 <MathTex tex="\dfrac{x^2}{9}+\dfrac{2y^2}{9}=1" /></p>
                  <p className="ml-4 text-sm">（除以一个分数 = 乘以它的倒数：<MathTex tex="\div\dfrac{9}{2}=\times\dfrac{2}{9}" />）</p>
                </div>
              </div>
            </div>

            {/* 离心率 */}
            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-purple-800 border-b border-purple-300 text-lg">⑦ 离心率 <MathTex tex="e" /></div>
              <div className="px-3 py-1 space-y-0">
                <p><strong>定义：</strong><MathTex tex="e = \dfrac{c}{a}" />，即焦距之半与长半轴之比。</p>
                <p className="mt-1"><strong>范围：</strong>因为 <MathTex tex="0 < c < a" />，所以 <MathTex tex="0 < e < 1" />（这是椭圆的特征，双曲线 <MathTex tex="e > 1" />，圆 <MathTex tex="e = 0" />）</p>
                <p className="mt-1"><strong>几何意义：</strong></p>
                <div className="ml-4 space-y-0">
                  <p><MathTex tex="e" /> 越接近 <MathTex tex="0" />：<MathTex tex="c \to 0" />，焦点趋近圆心，<MathTex tex="b \approx a" />，椭圆越<strong>圆</strong></p>
                  <p><MathTex tex="e" /> 越接近 <MathTex tex="1" />：<MathTex tex="c \to a" />，<MathTex tex="b \to 0" />，椭圆越<strong>扁</strong></p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 mt-1">
                  <MathTex tex="e = \dfrac{c}{a} = \sqrt{1 - \dfrac{b^2}{a^2}}" />
                </div>
              </div>
            </div>

            {/* 例题3 */}
            <div className="border border-violet-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-violet-800 border-b border-violet-300 text-lg">⑧ 例题3（已知条件建方程）</div>
              <div className="px-3 py-1 space-y-0">
                <p className="font-bold">椭圆 <MathTex tex="\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1\;(a>b>0)" />，过点 <MathTex tex="(2,\,\sqrt{2})" />，离心率 <MathTex tex="e=\dfrac{\sqrt{2}}{2}" />，求椭圆方程。</p>

                <p className="mt-1"><strong>第一步：由离心率求 <MathTex tex="b^2" /> 与 <MathTex tex="a^2" /> 的关系</strong></p>
                <p className="ml-4">由 <MathTex tex="e=\dfrac{c}{a}=\dfrac{\sqrt{2}}{2}" />，得 <MathTex tex="c=\dfrac{\sqrt{2}}{2}a" />，所以 <MathTex tex="c^2=\dfrac{a^2}{2}" /></p>
                <p className="ml-4">由 <MathTex tex="b^2=a^2-c^2" />，代入得 <MathTex tex="b^2=a^2-\dfrac{a^2}{2}=\dfrac{2a^2}{2}-\dfrac{a^2}{2}=\dfrac{a^2}{2}" /></p>
                <p className="ml-4 text-sm">（把 <MathTex tex="a^2" /> 通分为 <MathTex tex="\dfrac{2a^2}{2}" />，再相减）</p>

                <p className="mt-1"><strong>第二步：代入过点条件求 <MathTex tex="a^2" /></strong></p>
                <p className="ml-4">椭圆过点 <MathTex tex="(2,\,\sqrt{2})" />，代入方程：<MathTex tex="\dfrac{4}{a^2}+\dfrac{2}{b^2}=1" /></p>
                <p className="ml-4">将 <MathTex tex="b^2=\dfrac{a^2}{2}" /> 代入原式：<MathTex tex="\dfrac{4}{a^2}+\dfrac{2}{\tfrac{a^2}{2}}=1" />（其中 <MathTex tex="\dfrac{2}{\tfrac{a^2}{2}}=2\times\dfrac{2}{a^2}=\dfrac{4}{a^2}" />）</p>
                <p className="ml-4">得 <MathTex tex="\dfrac{4}{a^2}+\dfrac{4}{a^2}=1" />，即 <MathTex tex="\dfrac{8}{a^2}=1" /></p>
                <div className="bg-violet-50 border border-violet-200 rounded px-2 py-1 ml-4">
                  <MathTex tex="a^2=8,\quad b^2=\dfrac{a^2}{2}=4" />
                </div>

                <p className="mt-1"><strong>第三步：写出椭圆方程</strong></p>
                <div className="bg-violet-50 border border-violet-200 rounded px-2 py-1 ml-4">
                  <MathTex tex="\dfrac{x^2}{8}+\dfrac{y^2}{4}=1" />
                </div>
              </div>
            </div>

            {/* 焦半径公式 */}
            <div className="border border-rose-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-rose-800 border-b border-rose-300 text-lg">⑨ 焦半径公式</div>
              <div className="px-3 py-1 space-y-0">
                <p>椭圆 <MathTex tex="\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1\;(a>b>0)" /> 上的点 <MathTex tex="P(x,\,y)" />，设离心率 <MathTex tex="e=\dfrac{c}{a}" />，则：</p>
                <div className="bg-rose-50 border border-rose-200 rounded px-3 py-1 mt-1">
                  <p><MathTex tex="|PF_1| = a + ex" />（到<strong>左</strong>焦点，用<strong>加</strong>号）</p>
                  <p><MathTex tex="|PF_2| = a - ex" />（到<strong>右</strong>焦点，用<strong>减</strong>号）</p>
                </div>
                <p className="mt-1 text-sm">记忆：x 越大（P 越偏右），离右焦点越近，所以右焦点用减号；离左焦点越远，所以左焦点用加号。</p>
                <p className="mt-1"><strong>验证：</strong>取右顶点 <MathTex tex="(a,0)" />，代入得 <MathTex tex="|PF_2|=a-e\cdot a=a-c" />，即顶点到右焦点距离 <MathTex tex="a-c" />，正确。</p>
                <p className="mt-1"><strong>用途：</strong>题目给出焦半径（如 <MathTex tex="|PF_1|=3" />），可直接求点 P 的横坐标 <MathTex tex="x" />，无需坐标运算。</p>
              </div>
            </div>

            {/* 直线与椭圆综合 */}
            <div className="border border-teal-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-teal-800 border-b border-teal-300 text-lg">⑩ 直线与椭圆（联立法）</div>
              <div className="px-3 py-1 space-y-0">
                <p><strong>核心方法：</strong>将直线方程代入椭圆方程，化为关于 <MathTex tex="x" /> 的一元二次方程，再用<strong>韦达定理</strong>处理。</p>
                <div className="bg-teal-50 border border-teal-200 rounded px-3 py-1 mt-1 space-y-0">
                  <p>以 <MathTex tex="\dfrac{x^2}{4}+\dfrac{y^2}{3}=1" />，直线 <MathTex tex="y=x+1" /> 为例：</p>
                  <p>代入：<MathTex tex="\dfrac{x^2}{4}+\dfrac{(x+1)^2}{3}=1" />，两边乘 12：<MathTex tex="3x^2+4(x+1)^2=12" /></p>
                  <p>展开整理：<MathTex tex="7x^2+8x-8=0" /></p>
                  <p>韦达定理：<MathTex tex="x_1+x_2=-\dfrac{8}{7}" />，<MathTex tex="x_1 x_2=-\dfrac{8}{7}" /></p>
                </div>

                <p className="mt-2"><strong>中点弦斜率公式（常考）：</strong>设弦 AB 中点为 <MathTex tex="M(x_0,\,y_0)" />，则斜率</p>
                <div className="bg-teal-50 border border-teal-200 rounded px-2 py-1 ml-4">
                  <MathTex tex="k_{AB}=-\dfrac{b^2 x_0}{a^2 y_0}" />
                </div>
                <p className="ml-4 text-sm">推导：将 A、B 两点椭圆方程相减，利用 <MathTex tex="x_1+x_2=2x_0" />、<MathTex tex="y_1+y_2=2y_0" /> 化简得到。</p>

              </div>
            </div>

            {/* 例题4 */}
            <div className="border border-cyan-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-cyan-800 border-b border-cyan-300 text-lg">⑪ 例题4（联立法 + 焦半径综合）</div>
              <div className="px-3 py-1 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p className="font-bold">椭圆 <MathTex tex="C{:}\;\dfrac{x^2}{4}+\dfrac{y^2}{3}=1" />，过右焦点 <MathTex tex="F_2(1,\,0)" /> 作直线 <MathTex tex="l{:}\;x=1" />，交椭圆于 <MathTex tex="A" />、<MathTex tex="B" /> 两点。</p>
                    <p className="font-bold">（1）求 <MathTex tex="A" />、<MathTex tex="B" /> 的坐标；（2）求 <MathTex tex="|AF_1|,\;|AF_2|,\;|BF_1|,\;|BF_2|" />；（3）求 <MathTex tex="|AB|" /></p>
                  </div>
                  <DebugGeo2dSvg data={ellipseEx4Diagram} width={190} height={165} className="flex-shrink-0" />
                </div>

                <p className="mt-2"><strong>解：</strong>由方程得 <MathTex tex="a^2=4,\;b^2=3,\;c^2=a^2-b^2=1" />，故 <MathTex tex="a=2,\;c=1,\;e=\dfrac{1}{2}" />，焦点 <MathTex tex="F_1(-1,0)" />、<MathTex tex="F_2(1,0)" /></p>

                <p className="mt-2"><strong>（1）</strong>将 <MathTex tex="x=1" /> 代入椭圆方程：</p>
                <p className="ml-4"><MathTex tex="\dfrac{1}{4}+\dfrac{y^2}{3}=1\;\Rightarrow\;\dfrac{y^2}{3}=\dfrac{3}{4}\;\Rightarrow\;y^2=\dfrac{9}{4}\;\Rightarrow\;y=\pm\dfrac{3}{2}" /></p>
                <div className="bg-cyan-50 border border-cyan-200 rounded px-2 py-1 ml-4">
                  <MathTex tex="A\!\left(1,\;\dfrac{3}{2}\right),\quad B\!\left(1,\;-\dfrac{3}{2}\right)" />
                </div>

                <p className="mt-2"><strong>（2）</strong>由焦半径公式，<MathTex tex="x_A=x_B=1" />，代入 <MathTex tex="e=\dfrac{1}{2}" />：</p>
                <p className="ml-4"><MathTex tex="|AF_2|=a-ex_A=2-\dfrac{1}{2}\times1=\dfrac{3}{2}" /></p>
                <p className="ml-4 mt-2"><MathTex tex="|AF_1|=a+ex_A=2+\dfrac{1}{2}\times1=\dfrac{5}{2}" /></p>
                <p className="ml-4"><MathTex tex="A" />、<MathTex tex="B" /> 关于 <MathTex tex="x" /> 轴对称，横坐标相同，故 <MathTex tex="|BF_2|=\dfrac{3}{2}" />，<MathTex tex="|BF_1|=\dfrac{5}{2}" /></p>

                <p className="mt-2"><strong>（3）</strong>三点共线于 <MathTex tex="x=1" />，且 <MathTex tex="F_2" /> 纵坐标 0 介于 <MathTex tex="\tfrac{3}{2}" /> 和 <MathTex tex="-\tfrac{3}{2}" /> 之间，故 <MathTex tex="|AB|=|AF_2|+|BF_2|" /></p>
                <div className="bg-cyan-50 border border-cyan-200 rounded px-2 py-1 ml-4">
                  <MathTex tex="|AB|=|AF_2|+|BF_2|=\dfrac{3}{2}+\dfrac{3}{2}=3" />
                </div>
              </div>
            </div>

            {/* 例题7 焦点在y轴 */}
            <div className="border border-indigo-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-indigo-800 border-b border-indigo-300 text-lg">⑫ 例题7（焦点在 <MathTex tex="y" /> 轴）</div>
              <div className="px-3 py-1">
                <div className="flex items-start gap-3">
                  <div className="flex-1 space-y-0">
                    <p className="font-bold">椭圆 <MathTex tex="C" /> 的焦点在 <MathTex tex="y" /> 轴上，长轴长为 <MathTex tex="4" />，离心率 <MathTex tex="e=\dfrac{\sqrt{3}}{2}" />，<br />求椭圆 <MathTex tex="C" /> 的方程。</p>

                    <p className="mt-2"><strong>解：</strong></p>
                    <p><strong>第一步：由长轴长求 <MathTex tex="a" /></strong></p>
                    <p className="ml-4">长轴长 <MathTex tex="2a=4" />，所以 <MathTex tex="a=2,\;a^2=4" /></p>

                    <p className="mt-1"><strong>第二步：由离心率求 <MathTex tex="c" /></strong></p>
                    <p className="ml-4"><MathTex tex="e=\dfrac{c}{a}=\dfrac{\sqrt{3}}{2}" />，代入 <MathTex tex="a=2" />，得 <MathTex tex="c=\sqrt{3},\;c^2=3" /></p>

                    <p className="mt-1"><strong>第三步：求 <MathTex tex="b^2" /></strong></p>
                    <div className="bg-indigo-50 border border-indigo-200 rounded px-2 py-1 ml-4">
                      <MathTex tex="b^2=a^2-c^2=4-3=1" />
                    </div>

                    <p className="mt-1"><strong>第四步：写方程</strong></p>
                    <p className="ml-4">焦点在 <MathTex tex="y" /> 轴，方程形式为 <MathTex tex="\dfrac{x^2}{b^2}+\dfrac{y^2}{a^2}=1" />（注意：<MathTex tex="a^2" /> 在 <MathTex tex="y^2" /> 下方）</p>
                    <div className="bg-indigo-50 border border-indigo-200 rounded px-2 py-1 ml-4">
                      <MathTex tex="x^2+\dfrac{y^2}{4}=1" />
                    </div>
                  </div>
                  <DebugGeo2dSvg data={ellipseEx7Diagram} width={185} height={182} className="flex-shrink-0" />
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak label="二、直线与椭圆综合" />

      {/* Section 2: 直线与椭圆综合 */}
      <section id="conic-line" className="mb-3 scroll-mt-4">
        <Collapsible title="二、直线与椭圆综合" defaultOpen storageKey="conic:line">
          <div className="space-y-0 text-lg text-gray-800">

            {/* 弦长公式 */}
            <div className="border border-teal-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-teal-800 border-b border-teal-300 text-lg">① 弦长公式</div>
              <div className="px-3 py-1 space-y-0">
                <p>两交点 <MathTex tex="A(x_1,y_1)" />、<MathTex tex="B(x_2,y_2)" /> 在直线 <MathTex tex="y=kx+m" /> 上，由两点距离公式：</p>
                <p className="ml-4"><MathTex tex="|AB|=\sqrt{(x_1-x_2)^2+(y_1-y_2)^2}=\sqrt{1+k^2}\cdot|x_1-x_2|" /></p>
                <p className="ml-4">又 <MathTex tex="|x_1-x_2|=\sqrt{(x_1+x_2)^2-4x_1x_2}" />，故</p>
                <div className="bg-teal-50 border border-teal-200 rounded px-2 py-1 ml-4">
                  <MathTex tex="|AB|=\sqrt{1+k^2}\cdot\sqrt{(x_1+x_2)^2-4x_1x_2}" />
                </div>
              </div>
            </div>

            {/* 例题5 弦长型 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-blue-800 border-b border-blue-300 text-lg">② 例题5（弦长型）</div>
              <div className="px-3 py-1 space-y-0">
                <p className="font-bold">直线 <MathTex tex="l{:}\;y=x+1" /> 与椭圆 <MathTex tex="\dfrac{x^2}{4}+\dfrac{y^2}{3}=1" /> 交于 <MathTex tex="A" />、<MathTex tex="B" /> 两点，求弦长 <MathTex tex="|AB|" />。</p>

                <p><strong>第一步：联立，化为关于 <MathTex tex="x" /> 的一元二次方程</strong></p>
                <p className="ml-4">将 <MathTex tex="y=x+1" /> 代入椭圆方程：</p>
                <p className="ml-4"><MathTex tex="\dfrac{x^2}{4}+\dfrac{(x+1)^2}{3}=1" /></p>
                <p className="ml-4">两边乘 12：<MathTex tex="3x^2+4(x+1)^2=12\;\Rightarrow\;7x^2+8x-8=0" /></p>

                <p className="mt-1"><strong>第二步：韦达定理求 <MathTex tex="x_1+x_2" /> 和 <MathTex tex="x_1 x_2" /></strong></p>
                <p className="ml-4">方程 <MathTex tex="7x^2+8x-8=0" />，对应 <MathTex tex="ax^2+bx+c=0" /> 中 <MathTex tex="a=7,\;b=8,\;c=-8" /></p>
                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                  <MathTex tex="x_1+x_2=-\dfrac{b}{a}=-\dfrac{8}{7},\quad x_1 x_2=\dfrac{c}{a}=\dfrac{-8}{7}=-\dfrac{8}{7}" />
                </div>

                <p className="mt-1"><strong>第三步：弦长公式</strong></p>
                <p className="ml-4">直线 <MathTex tex="y=x+1" /> 的斜率 <MathTex tex="k=1" />（即 <MathTex tex="x" /> 的系数），代入弦长公式：</p>
                <p className="ml-4"><MathTex tex="|AB|=\sqrt{2}\cdot\sqrt{\dfrac{64}{49}+\dfrac{224}{49}}=\sqrt{2}\cdot\sqrt{\dfrac{288}{49}}" /></p>
                <p className="ml-4"><MathTex tex="\sqrt{288}=\sqrt{144\times2}=12\sqrt{2}" />，故 <MathTex tex="\sqrt{\dfrac{288}{49}}=\dfrac{12\sqrt{2}}{7}" /></p>
                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                  <MathTex tex="|AB|=\sqrt{2}\times\dfrac{12\sqrt{2}}{7}=\dfrac{12\times2}{7}=\dfrac{24}{7}" />
                </div>
              </div>
            </div>

            {/* 例题6 中点弦型 */}
            <div className="border border-orange-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-orange-800 border-b border-orange-300 text-lg">③ 例题6（中点弦型）</div>
              <div className="px-3 py-1 space-y-0">
                <p className="font-bold">椭圆 <MathTex tex="\dfrac{x^2}{4}+\dfrac{y^2}{3}=1" />，已知弦 <MathTex tex="AB" /> 的中点为 <MathTex tex="M(1,\,1)" />，求直线 <MathTex tex="AB" /> 的方程。</p>

                <p className="mt-2"><strong>解：</strong></p>
                <p><strong>第一步：用中点弦斜率公式求斜率</strong></p>
                <p className="ml-4">椭圆 <MathTex tex="a^2=4,\;b^2=3" />，中点 <MathTex tex="M(x_0,y_0)=(1,1)" />，代入公式：</p>
                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                  <MathTex tex="k=-\dfrac{b^2 x_0}{a^2 y_0}=-\dfrac{3\times1}{4\times1}=-\dfrac{3}{4}" />
                </div>

                <p className="mt-1"><strong>第二步：用点斜式写直线方程</strong></p>
                <p className="ml-4">直线过 <MathTex tex="M(1,1)" />，斜率 <MathTex tex="k=-\dfrac{3}{4}" />：</p>
                <p className="ml-4"><MathTex tex="y-1=-\dfrac{3}{4}(x-1)\;\Rightarrow\;4y-4=-3x+3" /></p>
                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                  <MathTex tex="3x+4y-7=0" />
                </div>
              </div>
            </div>

            <PageBreak label="高考实战S3" />
            {/* 高考实战S3 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-blue-800 border-b border-blue-300 text-lg">④ 高考实战S3（17分）</div>
              <div className="px-3 py-1 space-y-0">
                <p>设椭圆 <MathTex tex="C:\,\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1" />（<MathTex tex="a>b>0" />），记 <MathTex tex="A" /> 为椭圆下端点，<MathTex tex="B" /> 为右端点，<MathTex tex="|AB|=\sqrt{10}" />，且椭圆 <MathTex tex="C" /> 的离心率为 <MathTex tex="\dfrac{2\sqrt{2}}{3}" />。</p>
                <p className="ml-4">（1）求椭圆的标准方程；</p>
                <p className="ml-4">（2）设 <MathTex tex="F_1" />、<MathTex tex="F_2" /> 是椭圆 <MathTex tex="C" /> 的两个焦点，椭圆上一点 <MathTex tex="M" /> 满足 <MathTex tex="|MF_1|\cdot|MF_2|=5" />，求 <MathTex tex="\cos\angle F_1MF_2" /> 的值。</p>

                <p className="mt-1"><strong>（1）解：</strong></p>
                <p className="ml-4"><MathTex tex="A" /> 为下端点即 <MathTex tex="A(0,-b)" />，<MathTex tex="B" /> 为右端点即 <MathTex tex="B(a,0)" />，由两点距离公式，得</p>
                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                  <MathTex tex="|AB|=\sqrt{(a-0)^2+(0-(-b))^2}=\sqrt{a^2+b^2}" />
                </div>
                <p className="ml-4">由 <MathTex tex="|AB|=\sqrt{10}" />，得 <MathTex tex="\sqrt{a^2+b^2}=\sqrt{10}" />，两边平方，得 <MathTex tex="a^2+b^2=10" />。</p>
                <p className="ml-4">由离心率 <MathTex tex="e=\dfrac{c}{a}=\dfrac{2\sqrt{2}}{3}" />，得 <MathTex tex="c^2=\dfrac{8a^2}{9}" />。</p>
                <p className="ml-4">由 <MathTex tex="c^2=a^2-b^2" />，得 <MathTex tex="b^2=a^2-\dfrac{8a^2}{9}=\dfrac{a^2}{9}" />。</p>
                <p className="ml-4">将 <MathTex tex="b^2=\dfrac{a^2}{9}" /> 代入 <MathTex tex="a^2+b^2=10" />，得</p>
                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                  <MathTex tex="a^2+\dfrac{a^2}{9}=10\,,\quad\text{即}\quad\dfrac{10a^2}{9}=10" />
                </div>
                <p className="ml-4">解得 <MathTex tex="a^2=9" />，从而 <MathTex tex="b^2=\dfrac{a^2}{9}=1" />。</p>
                <p className="ml-4">所以椭圆 <MathTex tex="C" /> 的标准方程为 <MathTex tex="\dfrac{x^2}{9}+y^2=1" />。</p>

                <div className="flex items-start gap-4 mt-1">
                  <div className="flex-1">
                <p><strong>（2）解：</strong></p>
                <p className="ml-4">由第（1）题知 <MathTex tex="a^2=9,\,b^2=1" />，故 <MathTex tex="c^2=a^2-b^2=8" />，即 <MathTex tex="c=2\sqrt{2}" />。</p>
                <p className="ml-4">由椭圆定义，得 <MathTex tex="|MF_1|+|MF_2|=2a=6" />，对等式两边平方，得</p>
                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                  <MathTex tex="\left(|MF_1|+|MF_2|\right)^2=6^2=36" />
                </div>
                <p className="ml-4">由完全平方公式 <MathTex tex="(A+B)^2=A^2+2AB+B^2" />，展开，得</p>
                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                  <MathTex tex="|MF_1|^2+2|MF_1|\cdot|MF_2|+|MF_2|^2=36" />
                </div>
                <p className="ml-4">代入 <MathTex tex="|MF_1|\cdot|MF_2|=5" />，得</p>
                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                  <MathTex tex="|MF_1|^2+|MF_2|^2=36-2\times5=26" />
                </div>
                <p className="ml-4">由 <MathTex tex="c=2\sqrt{2}" />，得</p>
                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                  <MathTex tex="|F_1F_2|^2=(2c)^2=(4\sqrt{2})^2=32" />
                </div>
                <p className="ml-4">余弦定理：</p>
                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                  <MathTex tex="\cos C=\dfrac{a^2+b^2-c^2}{2ab}" />
                </div>
                <p className="ml-4">在 <MathTex tex="\triangle F_1MF_2" /> 中，对角 <MathTex tex="\angle F_1MF_2" /> 应用余弦定理，得</p>
                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                  <MathTex tex="\cos\angle F_1MF_2=\dfrac{|MF_1|^2+|MF_2|^2-|F_1F_2|^2}{2|MF_1||MF_2|}" />
                </div>
                <p className="ml-4">代入，得</p>
                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                  <MathTex tex="\cos\angle F_1MF_2=\dfrac{26-32}{2\times5}=\dfrac{-6}{10}=-\dfrac{3}{5}" />
                </div>
                  </div>
                  <DebugGeo2dSvg data={ellipseS3Diagram} width={185} height={130} className="flex-shrink-0" />
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      </LessonLayout>
      <Geo2dDebugToggle />
    </div>
  );
}
