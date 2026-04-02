import { Math as MathTex, PageHeader, LessonLayout, Collapsible, DebugGeo2dSvg, Geo2dDebugToggle, ExportButton } from '@/components/shared';
import { useProgress } from '@/hooks';
import { hyperbolaXDiagram, hyperbolaYDiagram, hyperbolaPythagorDiagram, hyperbolaEx1Diagram, hyperbolaEx2Diagram } from './data/8.3/8.3-conic-diagrams';

const progressItems = [
  { id: 'hyperbola-table', label: '双曲线基本性质表', completed: false },
];

export function ConicLinePage() {
  const { items, toggle } = useProgress('conic-line', progressItems);

  return (
    <div>
      <PageHeader
        stage=""
        title="8.3 双曲线"
        subtitle="双曲线的定义、标准方程与几何性质"
        tags={[
          { label: '难度 ★★★☆☆', color: 'red' },
          { label: '高考重点', color: 'red' },
          { label: '约1天', color: 'blue' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="8.3 双曲线" />
      </div>

      <LessonLayout progressItems={items} onToggle={toggle}>

      <section id="hyperbola" className="mb-3 scroll-mt-4">
        <Collapsible title="一、双曲线" defaultOpen storageKey="conic-line:hyperbola">
          <div className="space-y-0 text-lg text-gray-800">

            {/* 对照表 */}
            <div className="rounded overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-base border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-3 py-1.5 text-center font-bold w-[18%]">焦点的位置</th>
                      <th className="border border-gray-300 px-3 py-1.5 text-center font-bold w-[41%]">焦点在 <MathTex tex="x" /> 轴上</th>
                      <th className="border border-gray-300 px-3 py-1.5 text-center font-bold w-[41%]">焦点在 <MathTex tex="y" /> 轴上</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 text-center align-middle">图象</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">
                        <DebugGeo2dSvg data={hyperbolaXDiagram} width={180} height={170} className="mx-auto" />
                      </td>
                      <td className="border border-gray-300 px-2 py-2 text-center">
                        <DebugGeo2dSvg data={hyperbolaYDiagram} width={180} height={170} className="mx-auto" />
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-1.5 text-center">标准方程</td>
                      <td className="border border-gray-300 px-3 py-1.5 text-center">
                        <MathTex tex="\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1\quad(a>0,b>0)" />
                      </td>
                      <td className="border border-gray-300 px-3 py-1.5 text-center">
                        <MathTex tex="\dfrac{y^2}{a^2}-\dfrac{x^2}{b^2}=1\quad(a>0,b>0)" />
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-3 py-1.5 text-center">范围</td>
                      <td className="border border-gray-300 px-3 py-1.5 text-center">
                        <MathTex tex="x\leq -a\text{ 或 }x\geq a,\;y\in\mathbb{R}" />
                      </td>
                      <td className="border border-gray-300 px-3 py-1.5 text-center">
                        <MathTex tex="y\leq -a\text{ 或 }y\geq a,\;x\in\mathbb{R}" />
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-1.5 text-center">顶点</td>
                      <td className="border border-gray-300 px-3 py-1.5 text-center">
                        <MathTex tex="A_1(-a,0)\text{、}A_2(a,0)" />
                      </td>
                      <td className="border border-gray-300 px-3 py-1.5 text-center">
                        <MathTex tex="A_1(0,-a)\text{、}A_2(0,a)" />
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-3 py-1.5 text-center">轴长</td>
                      <td colSpan={2} className="border border-gray-300 px-3 py-1.5 text-center">
                        虚轴长 <MathTex tex="2b" />，实轴长 <MathTex tex="2a" />
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-1.5 text-center">焦点</td>
                      <td className="border border-gray-300 px-3 py-1.5 text-center">
                        <MathTex tex="F_1(-c,0)\text{、}F_2(c,0)" />
                      </td>
                      <td className="border border-gray-300 px-3 py-1.5 text-center">
                        <MathTex tex="F_1(0,-c)\text{、}F_2(0,c)" />
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-3 py-1.5 text-center">焦距</td>
                      <td colSpan={2} className="border border-gray-300 px-3 py-1.5 text-center">
                        <MathTex tex="|F_1F_2|=2c" />
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-1.5 text-center"><MathTex tex="a" />、<MathTex tex="b" />、<MathTex tex="c" /> 的关系</td>
                      <td colSpan={2} className="border border-gray-300 px-3 py-1.5 text-center">
                        <MathTex tex="c^2=a^2+b^2" />
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-3 py-1.5 text-center">离心率</td>
                      <td colSpan={2} className="border border-gray-300 px-3 py-1.5 text-center">
                        <MathTex tex="e=\dfrac{c}{a}=\sqrt{1+\dfrac{b^2}{a^2}}\quad(e>1)" />
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-1.5 text-center">渐近线</td>
                      <td className="border border-gray-300 px-3 py-1.5 text-center">
                        <MathTex tex="y=\pm\dfrac{b}{a}x" />
                      </td>
                      <td className="border border-gray-300 px-3 py-1.5 text-center">
                        <MathTex tex="y=\pm\dfrac{a}{b}x" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* ② 定义 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-blue-800 border-b border-blue-300 text-lg">② 定义</div>
              <div className="px-3 py-1">
                <div className="flex items-start gap-4">
                  <div className="flex-1 space-y-1">
                    <p>平面内与两个定点 <MathTex tex="F_1" />、<MathTex tex="F_2" /> 的距离之差的绝对值等于常数（小于 <MathTex tex="|F_1F_2|" />）的点的轨迹称为<strong>双曲线</strong>。这两个定点称为双曲线的<strong>焦点</strong>，两焦点的距离称为双曲线的<strong>焦距</strong>。</p>
                    <p>如图：<MathTex tex="P" /> 在右支，<MathTex tex="|PF_1|-|PF_2|=2a" />；</p>
                    <p className="ml-[2.5em]"><MathTex tex="Q" /> 在左支，<MathTex tex="|QF_2|-|QF_1|=2a" />。</p>
                  </div>
                  <DebugGeo2dSvg data={hyperbolaXDiagram} width={180} height={150} className="flex-shrink-0" />
                </div>
                <div className="mt-1">
                  <p className="font-bold text-red-600 mb-0.5">解释</p>
                  <div className="space-y-0 ml-2">
                    <p>当 <MathTex tex="|PF_1|-|PF_2|=2a < |F_1F_2|" /> 时，轨迹仅表示双曲线的<strong>右支</strong>；</p>
                    <p>当 <MathTex tex="|PF_2|-|PF_1|=2a < |F_1F_2|" /> 时，轨迹仅表示双曲线的<strong>左支</strong>；</p>
                    <p>当 <MathTex tex="\bigl||PF_1|-|PF_2|\bigr|=2a=|F_1F_2|" /> 时，轨迹是以 <MathTex tex="F_1" />、<MathTex tex="F_2" /> 为端点向外的<strong>两条射线</strong>；</p>
                    <p>当 <MathTex tex="\bigl||PF_1|-|PF_2|\bigr|=2a > |F_1F_2|" /> 时，轨迹<strong>不存在</strong>。</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ③ 顶点怎么来的 */}
            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-amber-800 border-b border-amber-300 text-lg">③ 顶点怎么来的</div>
              <div className="px-3 py-1 space-y-0">
                <p>以焦点在 <MathTex tex="x" /> 轴的双曲线 <MathTex tex="\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1" /> 为例：</p>
                <p className="font-bold">方法：令其中一个变量为 0，代入方程，看能否求出另一个变量</p>

                <p className="mt-1"><strong>第一步：令 <MathTex tex="y=0" />，代入方程</strong></p>
                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                  <MathTex tex="\dfrac{x^2}{a^2}-0=1\;\Rightarrow\;x^2=a^2\;\Rightarrow\;x=\pm a" />
                </div>
                <p className="ml-4">得到<strong>实轴顶点</strong>：<MathTex tex="A_1(-a,\,0)" />、<MathTex tex="A_2(a,\,0)" /></p>

                <p className="mt-1"><strong>第二步：令 <MathTex tex="x=0" />，代入方程</strong></p>
                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                  <MathTex tex="0-\dfrac{y^2}{b^2}=1\;\Rightarrow\;y^2=-b^2" />
                </div>
                <p className="ml-4">无实数解，说明双曲线<strong>没有虚轴方向上的顶点</strong>（虚轴不与曲线相交）。</p>
                <p className="ml-4 mt-1">对比椭圆：令 <MathTex tex="x=0" /> 有解，有短轴顶点；双曲线令 <MathTex tex="x=0" /> 无解，没有虚轴顶点。</p>

              </div>
            </div>

            {/* ④ 三量关系 c²=a²+b² 怎么来的 */}
            <div className="border border-orange-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-orange-800 border-b border-orange-300 text-lg">④ 焦点和三量关系 <MathTex tex="c^2=a^2+b^2" /> 怎么来的</div>
              <div className="px-3 py-1">
                <div className="flex items-start gap-4">
                  <div className="flex-1 space-y-0">
                    <p><strong>与椭圆的区别：</strong>椭圆的短轴端点在椭圆上，可以用定义推出 <MathTex tex="a^2=b^2+c^2" />。双曲线的虚轴端点 <MathTex tex="B(0,b)" /> 不在曲线上，无法用同样方法推导。</p>

                    <p className="mt-1">所以双曲线的 <MathTex tex="b" /> 是<strong>定义出来的</strong>：由于 <MathTex tex="e>1" />，所以 <MathTex tex="c>a" />，即 <MathTex tex="c^2-a^2>0" />，令</p>
                    <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                      <MathTex tex="b = \sqrt{c^2 - a^2} \;\Longrightarrow\; b^2 = c^2 - a^2 \;\Longrightarrow\; c^2 = a^2 + b^2" />
                    </div>
                    <p className="mt-1">这个 <MathTex tex="b" /> 叫做<strong>虚半轴长</strong>，<MathTex tex="B(0,b)" /> 叫做虚轴端点（不在双曲线上）。</p>

                    <p className="font-bold text-orange-700 mt-1">
                      记忆：双曲线 <MathTex tex="c^2=a^2+b^2" />（<MathTex tex="c" /> 最大），对比椭圆 <MathTex tex="a^2=b^2+c^2" />（<MathTex tex="a" /> 最大）。
                    </p>
                  </div>
                  <DebugGeo2dSvg data={hyperbolaPythagorDiagram} width={190} height={165} className="flex-shrink-0" />
                </div>
              </div>
            </div>

            {/* ⑤ 例题1 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-blue-800 border-b border-blue-300 text-lg">⑤ 例题1（读方程型）</div>
              <div className="px-3 py-1 space-y-0">
                {/* 题目 + 配图并排 */}
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <p className="font-bold">设 <MathTex tex="P" /> 是双曲线 <MathTex tex="\dfrac{x^2}{16} - \dfrac{y^2}{9} = 1" /> 上的动点，求：</p>
                    <p className="ml-4">（1）实半轴长 <MathTex tex="a" />，虚半轴长 <MathTex tex="b" /></p>
                    <p className="ml-4">（2）焦点坐标</p>
                    <p className="ml-4">（3）离心率 <MathTex tex="e" /></p>
                  </div>
                  <DebugGeo2dSvg data={hyperbolaEx1Diagram} width={160} height={130} className="flex-shrink-0" />
                </div>

                {/* 解题步骤，全宽 */}
                <p className="mt-1"><strong>第一步：判断焦点位置，读出 <MathTex tex="a^2" /> 和 <MathTex tex="b^2" /></strong></p>
                <p className="ml-4"><MathTex tex="x^2" /> 项为正，焦点在 <MathTex tex="x" /> 轴，<MathTex tex="a^2=16,\;b^2=9" />，得 <MathTex tex="a=4,\;b=3" /></p>

                <p className="mt-1"><strong>（2）求焦点：</strong>由三量关系 <MathTex tex="c^2 = a^2 + b^2" /></p>
                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                  <MathTex tex="c^2 = 16 + 9 = 25 \;\Rightarrow\; c = \pm 5" />，因 <MathTex tex="c > 0" /> 舍去负值，得 <MathTex tex="c = 5" />
                </div>
                <p className="ml-4">焦点在 <MathTex tex="x" /> 轴，焦点为 <MathTex tex="F_1(-5,\,0)" />、<MathTex tex="F_2(5,\,0)" /></p>

                <p className="mt-1"><strong>（3）离心率：</strong>两种方式都可以</p>
                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                  <MathTex tex="e = \dfrac{c}{a} = \dfrac{5}{4}" />，或代入 <MathTex tex="e=\sqrt{1+\dfrac{b^2}{a^2}}=\sqrt{1+\dfrac{9}{16}}=\sqrt{\dfrac{25}{16}}=\dfrac{5}{4}" />
                </div>
                <p className="ml-4">两种方法结果一致，<MathTex tex="e=\dfrac{5}{4}>1" />（双曲线离心率必须大于 1）</p>


              </div>
            </div>

            {/* ⑥ 例题2（综合型） */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-blue-800 border-b border-blue-300 text-lg">⑥ 例题2（综合型）</div>
              <div className="px-3 py-1 space-y-0">
                {/* 题目 + 配图并排 */}
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <p className="font-bold">双曲线 <MathTex tex="C:\,\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1" />（<MathTex tex="a>0,\,b>0" />）的左、右焦点分别为 <MathTex tex="F_1" />、<MathTex tex="F_2" />，过 <MathTex tex="F_2" /> 的直线与双曲线右支交于 <MathTex tex="P" />、<MathTex tex="Q" /> 两点。</p>
                    <p className="ml-4">若 <MathTex tex="|PF_1|=7" />，<MathTex tex="|QF_1|=5" />，<MathTex tex="|PQ|=4" />，求双曲线 <MathTex tex="C" /> 的方程。</p>
                  </div>
                  <DebugGeo2dSvg data={hyperbolaEx2Diagram} width={181} height={162} className="flex-shrink-0" />
                </div>
                <p><strong>第一步：用定义求 <MathTex tex="a" /></strong></p>
                <p className="ml-4"><MathTex tex="P" />、<MathTex tex="Q" /> 都在右支，定义给出：</p>
                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                  <MathTex tex="|PF_1|-|PF_2|=2a \;\Rightarrow\; |PF_2|=7-2a" />
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4 mt-1">
                  <MathTex tex="|QF_1|-|QF_2|=2a \;\Rightarrow\; |QF_2|=5-2a" />
                </div>
                <p className="ml-4 mt-1"><MathTex tex="F_2" /> 在弦 <MathTex tex="PQ" /> 上，所以 <MathTex tex="|PF_2|+|QF_2|=|PQ|" />：</p>
                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                  <MathTex tex="(7-2a)+(5-2a)=4 \;\Rightarrow\; 12-4a=4 \;\Rightarrow\; a=2" />
                </div>
                <p className="ml-4">验证：<MathTex tex="|PF_2|=3>0" />，<MathTex tex="|QF_2|=1>0" />，合法。</p>

                <p className="mt-1"><strong>第二步：用余弦定理求 <MathTex tex="c" /></strong>（变式：<MathTex tex="a,b" /> 为夹 <MathTex tex="C" /> 的两边，<MathTex tex="c" /> 为对边）</p>
                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                  <MathTex tex="\cos C = \dfrac{a^2 + b^2 - c^2}{2ab}" />
                </div>
                <p className="ml-4 mt-1">在 <MathTex tex="\triangle PF_1Q" /> 中，由余弦定理，得</p>
                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                  <MathTex tex="\cos\angle F_1PQ=\dfrac{|PF_1|^2+|PQ|^2-|QF_1|^2}{2\cdot|PF_1|\cdot|PQ|}=\dfrac{49+16-25}{56}=\dfrac{40}{56}=\dfrac{5}{7}" />
                </div>
                <p className="ml-4 mt-1">由于 <MathTex tex="F_2" /> 在 <MathTex tex="PQ" /> 上，所以 <MathTex tex="\angle F_1PF_2=\angle F_1PQ" />，在 <MathTex tex="\triangle PF_1F_2" /> 中，由余弦定理，得</p>
                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                  <MathTex tex="\cos\angle F_1PF_2=\dfrac{|PF_1|^2+|PF_2|^2-|F_1F_2|^2}{2\cdot|PF_1|\cdot|PF_2|}=\dfrac{49+9-|F_1F_2|^2}{42}" />
                </div>
                <p className="ml-4 mt-1">代入 <MathTex tex="\cos\angle F_1PF_2=\dfrac{5}{7}" />，<MathTex tex="|F_1F_2|=2c" />，得</p>
                <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 ml-4">
                  <MathTex tex="\dfrac{5}{7}=\dfrac{58-(2c)^2}{42}" />
                </div>
                <p className="ml-4 mt-1">两边乘以 <MathTex tex="42" />，得 <MathTex tex="30=58-4c^2" />，即 <MathTex tex="4c^2=28" />，所以 <MathTex tex="c^2=7" />。</p>

                <p className="mt-1"><strong>第三步：求 <MathTex tex="b^2" />，写出方程</strong></p>
                <p className="ml-4">由前两步知 <MathTex tex="a^2=4" />，<MathTex tex="c^2=7" />，所以 <MathTex tex="b^2=c^2-a^2=7-4=3" />。</p>
                <p className="ml-4">双曲线方程为 <MathTex tex="\dfrac{x^2}{4}-\dfrac{y^2}{3}=1" />。</p>
              </div>
            </div>

          {/* ⑦ 例题3（定义应用型） */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-0.5 font-bold text-blue-800 border-b border-blue-300 text-lg">⑦ 例题3（定义应用型）</div>
              <div className="px-3 py-1 space-y-0">
                <p className="font-bold">已知 <MathTex tex="A(-2,\,0)" />，<MathTex tex="B(2,\,0)" />，若动点 <MathTex tex="P" /> 满足 <MathTex tex="|PA|-|PB|=2" />，则 <MathTex tex="P" /> 的轨迹方程为＿＿＿＿＿。</p>
                <p>由 <MathTex tex="A(-2,0)" />、<MathTex tex="B(2,0)" /> 得 <MathTex tex="|AB|=4" />，故 <MathTex tex="c=2" />；由 <MathTex tex="|PA|-|PB|=2" /> 得 <MathTex tex="2a=2" />，即 <MathTex tex="a=1" />。</p>
                <p>计算 <MathTex tex="b^2=c^2-a^2=4-1=3" />，焦点在 <MathTex tex="x" /> 轴上，双曲线标准方程为 <MathTex tex="x^2-\dfrac{y^2}{3}=1" />。</p>
                <p>因 <MathTex tex="|PA|-|PB|=2>0" />，故 <MathTex tex="|PA|>|PB|" />，点 <MathTex tex="P" /> 离 <MathTex tex="B" /> 更近，轨迹为<strong>双曲线右支</strong>。</p>
                <p>因此轨迹方程为 <MathTex tex="x^2-\dfrac{y^2}{3}=1\;(x\geq 1)" />。</p>
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
