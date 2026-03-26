import { Math as MathTex, Collapsible, PageHeader, LessonLayout, ExportButton, PageBreak, DebugGeo2dSvg, Geo2dDebugToggle } from '@/components/shared';
import { geoBasicsProgressItems } from './data/7.0/7.0-geo-basics-progress';
import {
  basicTriangleDiagram, triangleHeightDiagram, rightTriangleAreaDiagram, pythagorasDiagram,
  acuteTriangleDiagram, rightTriangleClassDiagram, obtuseTriangleDiagram,
  isoscelesDiagram, equilateralDiagram, midlineDiagram, similarTriangleDiagram,
  parallelogramDiagram, parallelogramJudgeDiagram, rectangleDiagram, squareDiagram,
  rhombusDiagram, trapezoidDiagram, rightTrapezoidDiagram,
  circleBasicDiagram, circleAreaDiagram, sectorDiagram,
  polygonAngleDiagram,
} from './data/7.0/7.0-geo-basics-diagrams';
import { useProgress } from '@/hooks';

export function GeoBasicsPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('geo-basics', geoBasicsProgressItems);

  return (
    <div>
      <PageHeader
        stage="第七阶段 · 立体几何"
        title="7.0 初中几何基础"
        subtitle="三角形、四边形、圆——立体几何的底层工具"
        tags={[
          { label: '难度 ★☆☆☆☆', color: 'green' },
          { label: '初中回顾', color: 'blue' },
          { label: '约0.5天', color: 'blue' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="7.0 初中几何基础" />
      </div>


      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 1: 三角形 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="triangle" className="mb-3 scroll-mt-4">
        <Collapsible title="一、三角形" defaultOpen storageKey="geo-basics:triangle">
          <div className="space-y-0 text-lg text-gray-800">

            {/* 卡片1：认识三角形 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">认识三角形</div>
              <div className="px-3 py-2 space-y-0">
                <div className="flex items-start gap-3">
                  <DebugGeo2dSvg data={basicTriangleDiagram} width={140} height={110} className="shrink-0" />
                  <div>
                    <p><strong>定义</strong>：同一平面内不在同一直线上的三条线段首尾顺次连接所组成的封闭图形</p>
                    <p className="mt-1"><strong>三要素</strong>：三条边、三个角、三个顶点</p>
                    <p className="mt-1">顶点用大写字母 <MathTex tex="A, B, C" /> 标记</p>
                  </div>
                </div>

                <div className="mt-2 border-l-4 border-blue-400 pl-3">
                  <p><strong>内角和定理</strong>：三角形的三个内角之和等于 <MathTex tex="180°" /></p>
                  <p className="mt-1"><MathTex tex="\angle A + \angle B + \angle C = 180°" /></p>
                </div>

                <div className="mt-2 border-l-4 border-green-400 pl-3">
                  <p><strong>外角定理</strong>：三角形的一个外角 = 不相邻的两个内角之和</p>
                </div>

                <div className="mt-2 border-l-4 border-red-400 pl-3">
                  <p><strong>三边关系</strong>：任意两边之和大于第三边，任意两边之差小于第三边</p>
                  <p className="mt-1">用来判断三条线段能不能构成三角形</p>
                  <p className="mt-1">例：边长 <MathTex tex="3, 4, 5" /> ✅（<MathTex tex="3+4=7 > 5" />）　边长 <MathTex tex="1, 2, 5" /> ❌（<MathTex tex="1+2=3 < 5" />）</p>
                </div>
              </div>
            </div>

            {/* 卡片2：三角形分类 */}
            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">三角形分类</div>
              <div className="px-3 py-2 space-y-0">
                <p className="font-bold">按角分（看最大的那个角）</p>
                <div className="grid grid-cols-3 gap-2 mt-1">
                  <div className="bg-green-50 rounded-lg p-2 border border-green-200 text-center">
                    <DebugGeo2dSvg data={acuteTriangleDiagram} width={90} height={80} strokeColor="#16a34a" className="mx-auto" />
                    <p className="font-bold text-green-700">锐角三角形</p>
                    <p className="whitespace-nowrap">三个内角都 <MathTex tex="< 90°" />（锐角）</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-2 border border-blue-200 text-center">
                    <DebugGeo2dSvg data={rightTriangleClassDiagram} width={90} height={80} strokeColor="#2563eb" className="mx-auto" />
                    <p className="font-bold text-blue-700">直角三角形</p>
                    <p className="whitespace-nowrap">有一个内角 <MathTex tex="= 90°" />（直角）</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-2 border border-purple-200 text-center">
                    <DebugGeo2dSvg data={obtuseTriangleDiagram} width={90} height={80} strokeColor="#7c3aed" className="mx-auto" />
                    <p className="font-bold text-purple-700">钝角三角形</p>
                    <p className="whitespace-nowrap">有一个内角 <MathTex tex="> 90°" />（钝角）</p>
                  </div>
                </div>

                <p className="mt-2 font-bold">按边分（看边的相等关系）</p>
                <div className="grid grid-cols-2 gap-1 mt-1">
                  <div className="bg-gray-50 rounded-lg p-2 border border-gray-200 text-center">
                    <DebugGeo2dSvg data={isoscelesDiagram} width={90} height={85} className="mx-auto" />
                    <p className="font-bold">等腰三角形</p>
                    <p>有两条边相等（腰），另一条叫底边</p>
                    <p className="text-red-600 font-bold">等边对等角：两底角相等</p>
                    <p className="mt-1">三线合一：顶角的平分线、底边的中线、底边上的高重合</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2 border border-gray-200 text-center">
                    <DebugGeo2dSvg data={equilateralDiagram} width={90} height={85} className="mx-auto" />
                    <p className="font-bold">等边三角形（正三角形）</p>
                    <p>三条边都相等</p>
                    <p>每个角都是 <MathTex tex="60°" /></p>
                    <p className="mt-1">面积 <MathTex tex="S = \dfrac{\sqrt{3}}{4}a^2" /></p>
                    <p className="mt-1">高 <MathTex tex="h = \dfrac{\sqrt{3}}{2}a" /></p>
                  </div>
                </div>
              </div>
            </div>

            <PageBreak />
            {/* 卡片3：三角形的高 + 面积公式 */}
            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">三角形的高 + 面积公式</div>
              <div className="px-3 py-1.5 space-y-0">
                <div>
                  <div className="float-right ml-3">
                    <DebugGeo2dSvg data={triangleHeightDiagram} width={220} height={180} />
                  </div>
                  <p><strong>高</strong>：是指从三角形的一个顶点垂直于对边的线段，记为 <MathTex tex="h" />（高）</p>
                  <p className="mt-1">与之对应的对边称为底边</p>
                  <p className="mt-1">每个三角形有三条高，三条高的交点称为"垂心"</p>
                </div>

                <div className="mt-1 border-l-4 border-amber-400 pl-3">
                  <p><strong>面积公式（必须记住）</strong>　<MathTex tex="S = \dfrac{1}{2} \times \text{底} \times \text{高}" /></p>
                  <p className="mt-1">底和高必须<strong>互相垂直</strong></p>
                </div>

                <div className="mt-1 bg-red-50 border border-red-200 rounded p-1.5">
                  <p className="font-bold text-red-700">做题技巧：直角三角形</p>
                  <div className="flex items-start gap-3 mt-1">
                    <div>
                      <p>直角三角形的两条直角边互相垂直，所以<strong>两条直角边可以直接当底和高</strong></p>
                      <p className="mt-1"><MathTex tex="S = \dfrac{1}{2} \times a \times b" />（<MathTex tex="a, b" /> 是两条直角边）</p>
                    </div>
                    <DebugGeo2dSvg data={rightTriangleAreaDiagram} width={100} height={85} className="shrink-0" />
                  </div>
                </div>
              </div>
            </div>

            {/* 卡片4：勾股定理 */}
            <div className="border border-red-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-red-800 border-b border-red-300 bg-red-100 text-lg">勾股定理（超级重要）</div>
              <div className="px-3 py-1.5 space-y-0">
                <div className="flex items-start gap-3">
                  <DebugGeo2dSvg data={pythagorasDiagram} width={120} height={100} className="shrink-0" />
                  <div>
                    <p>在<strong>直角三角形</strong>中，两条直角边的平方和等于斜边的平方</p>
                    <p className="mt-1 text-xl"><MathTex tex="a^2 + b^2 = c^2" /></p>
                    <p className="mt-2"><MathTex tex="a" />、<MathTex tex="b" /> 是两条直角边，<MathTex tex="c" /> 是斜边（最长的边，对着直角）</p>
                  </div>
                </div>

                <p className="mt-1 font-bold">常见勾股数（记住能省时间）</p>
                <div className="grid grid-cols-3 gap-2 mt-1">
                  <div className="bg-red-50 rounded-lg p-1.5 border border-red-200 text-center">
                    <p className="text-xl font-bold"><MathTex tex="3, 4, 5" /></p>
                    <p><MathTex tex="3^2 + 4^2 = 5^2" /></p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-1.5 border border-red-200 text-center">
                    <p className="text-xl font-bold"><MathTex tex="5, 12, 13" /></p>
                    <p><MathTex tex="5^2 + 12^2 = 13^2" /></p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-1.5 border border-red-200 text-center">
                    <p className="text-xl font-bold"><MathTex tex="6, 8, 10" /></p>
                    <p>就是 <MathTex tex="3, 4, 5" /> 的 2 倍</p>
                  </div>
                </div>

                <div className="mt-1 border-l-4 border-orange-400 pl-3">
                  <p><strong>逆定理</strong>：若三角形三边满足 <MathTex tex="a^2 + b^2 = c^2" />，则该三角形是直角三角形</p>
                  <p className="mt-1">用来<strong>判断</strong>是否为直角三角形（已知三边 → 判断直角）</p>
                </div>

                <div className="mt-1 border-l-4 border-blue-400 pl-3">
                  <p><strong>在高考中怎么用</strong></p>
                  <p className="mt-1">求空间中的线段长度、求高、求距离，几乎每道立体几何题都要用</p>
                </div>
              </div>
            </div>

            {/* 卡片5：中位线定理 */}
            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-800 border-b border-purple-300 bg-purple-100 text-lg">中位线定理（证平行神器）</div>
              <div className="px-3 py-2 space-y-0">
                <div className="flex items-start gap-3">
                  <DebugGeo2dSvg data={midlineDiagram} width={200} height={155} className="shrink-0" />
                  <div>
                    <p><strong>中位线</strong>：连接三角形两边中点的线段</p>
                    <p className="mt-1"><strong>定理</strong>：中位线<strong>平行于第三边</strong>，且长度等于第三边的<strong>一半</strong></p>
                    <p className="mt-2"><MathTex tex="DE \parallel BC" /> 且 <MathTex tex="DE = \dfrac{1}{2} BC" /></p>
                    <p className="mt-1">图中红色为证明辅助线：延长 DE 到 G 使 EG = DE，连 CG、FE、FC</p>
                  </div>
                </div>

                <div className="mt-1 bg-purple-50 border border-purple-200 rounded p-2">
                  <p className="font-bold text-purple-700">在高考中怎么用（非常高频）</p>
                  <p className="mt-1">立体几何证"线面平行"的标准套路：</p>
                  <p className="mt-1">① 题目说"取中点" → 立刻想到中位线</p>
                  <p className="mt-1">② 连中位线 → 得到"平行于某条边"</p>
                  <p className="mt-1">③ 用线面平行判定定理搞定</p>
                </div>
              </div>
            </div>

            {/* 卡片6：相似三角形 */}
            <div className="border border-teal-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-teal-800 border-b border-teal-300 bg-teal-100 text-lg">相似三角形（求比例）</div>
              <div className="px-3 py-2 space-y-0">
                <div className="flex items-start gap-3">
                  <DebugGeo2dSvg data={similarTriangleDiagram} width={160} height={110} className="shrink-0" />
                  <div>
                    <p><strong>相似</strong>：对应角相等、对应边成比例的两个三角形</p>
                    <p className="mt-1">记作 <MathTex tex="\triangle ABC \sim \triangle DEF" />，比例系数叫<strong>相似比</strong></p>
                  </div>
                </div>

                <div className="mt-2 border-l-4 border-teal-400 pl-3">
                  <p><strong>最常用的判定：平行线出相似</strong></p>
                  <p className="mt-1">如果 <MathTex tex="DE \parallel BC" />，那么 <MathTex tex="\triangle ADE \sim \triangle ABC" /></p>
                  <p className="mt-1">此时对应边成比例：<MathTex tex="\dfrac{AD}{AB} = \dfrac{AE}{AC} = \dfrac{DE}{BC}" /></p>
                  <p className="mt-1 font-bold">记住这一条就够用</p>
                </div>

                <div className="mt-2 border-l-4 border-blue-400 pl-3">
                  <p><strong>在高考中怎么用</strong></p>
                  <p className="mt-1">截面题中确定截点位置、求线段的比例关系</p>
                </div>
              </div>
            </div>

            {/* 卡片7：全等三角形 */}
            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">全等三角形（证相等）</div>
              <div className="px-3 py-2 space-y-0">
                <p><strong>全等</strong>：能够完全重合的两个三角形（经过平移、翻折或旋转）</p>
                <p className="mt-1">全等的三角形：<strong>对应边相等、对应角相等</strong></p>

                <p className="mt-2 font-bold">四种判定方法</p>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  <div className="bg-gray-50 rounded-lg p-2 border border-gray-200">
                    <p className="font-bold">SSS（边边边）</p>
                    <p>三条边分别相等</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2 border border-gray-200">
                    <p className="font-bold">SAS（边角边）</p>
                    <p>两边和夹角分别相等</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2 border border-gray-200">
                    <p className="font-bold">ASA（角边角）</p>
                    <p>两角和夹边分别相等</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2 border border-gray-200">
                    <p className="font-bold">AAS（角角边）</p>
                    <p>两角和一条对边分别相等</p>
                  </div>
                </div>

                <div className="mt-2 border-l-4 border-blue-400 pl-3">
                  <p><strong>在高考中怎么用</strong></p>
                  <p className="mt-1">证线段相等、证角相等（立体几何中偶尔用到）</p>
                </div>
              </div>
            </div>

           {/* 卡片8：多边形内角和 */}
           <div className="border border-teal-300 rounded overflow-hidden">
             <div className="px-2 py-1 font-bold text-teal-800 border-b border-teal-300 bg-teal-100 text-lg">多边形内角和</div>
             <div className="px-3 py-2 space-y-0">
               <div>
                 <div className="float-right ml-3">
                   <DebugGeo2dSvg data={polygonAngleDiagram} width={180} height={150} />
                 </div>
                 <p>三角形内角和 = <MathTex tex="180°" />，是所有多边形内角和的基础</p>
                 <p className="mt-1">任何 <MathTex tex="n" /> 边形都可以从一个顶点引对角线，分成 <MathTex tex="(n-2)" /> 个三角形</p>
               </div>

               <div className="mt-2 border-l-4 border-teal-400 pl-3">
                 <p><strong>内角和公式</strong></p>
                 <p className="mt-1 text-xl"><MathTex tex="\text{内角和} = (n-2) \times 180°" /></p>
                 <p className="mt-1"><MathTex tex="n" /> = 边数（也是顶点数）</p>
                 <p className="mt-1">例：四边形 = <MathTex tex="(4-2) \times 180° = 360°" /></p>
                 <p className="mt-1">例：五边形 = <MathTex tex="(5-2) \times 180° = 540°" />（图中分成 3 个三角形）</p>
               </div>

               <div className="mt-2 border-l-4 border-orange-400 pl-3">
                 <p><strong>外角和</strong>：任何凸多边形的外角和都等于 <MathTex tex="360°" />（和边数无关）</p>
               </div>

               <div className="mt-2 border-l-4 border-blue-400 pl-3">
                 <p><strong>正多边形</strong>每个内角 = <MathTex tex="\dfrac{(n-2) \times 180°}{n}" /></p>
                 <p className="mt-1">正三角形 <MathTex tex="60°" />　正方形 <MathTex tex="90°" />　正六边形 <MathTex tex="120°" />（高考常考）</p>
               </div>
             </div>
           </div>

         </div>
       </Collapsible>
     </section>

     <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 2: 四边形（待填充） */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="quadrilateral" className="mb-3 scroll-mt-4">
        <Collapsible title="二、四边形" defaultOpen storageKey="geo-basics:quad">
          <div className="space-y-0 text-lg text-gray-800">

            {/* 卡片1：平行四边形 */}
            <div className="border border-yellow-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-yellow-800 border-b border-yellow-300 bg-yellow-100 text-lg">平行四边形（最重要）</div>
              <div className="px-3 py-2 space-y-0">
                <div>
                  <div className="float-right ml-3">
                    <DebugGeo2dSvg data={parallelogramDiagram} width={220} height={140} />
                  </div>
                  <p><strong>定义</strong>：两组对边分别平行的四边形</p>
                  <p className="mt-1"><strong>性质</strong>（记住这三条）：</p>
                  <p className="mt-1">① 对边相等：<MathTex tex="AB = CD" />，<MathTex tex="BC = AD" /></p>
                  <p className="mt-1">② 对角相等：<MathTex tex="\angle A = \angle C" />，<MathTex tex="\angle B = \angle D" /></p>
                  <p className="mt-1">③ 对角线互相平分：<MathTex tex="OA = OC" />，<MathTex tex="OB = OD" /></p>
                </div>

                <div className="mt-2 border-l-4 border-amber-400 pl-3">
                  <p><strong>面积公式</strong></p>
                  <p className="mt-1 text-xl"><MathTex tex="S = \text{底} \times h" /></p>
                  <p className="mt-1"><strong>底</strong>：平行四边形的一条边（图中 AB）</p>
                  <p className="mt-1"><strong>高 <MathTex tex="h" /></strong>：从对边的顶点<strong>垂直</strong>落到底边的距离（图中红色虚线 DH）</p>
                  <p className="mt-1">底和高必须互相垂直，和三角形面积一样的道理</p>
                </div>

                <div className="mt-2 bg-red-50 border border-red-200 rounded p-2">
                  <p className="font-bold text-red-700">判定定理（高考超高频）</p>
                  <div className="mt-1">
                    <div className="float-right ml-3">
                      <DebugGeo2dSvg data={parallelogramJudgeDiagram} width={190} height={110} />
                    </div>
                    <p>① 两组对边分别平行 → 平行四边形</p>
                    <p className="mt-1">② <strong className="text-red-600">一组对边平行且相等</strong> → 平行四边形（最常用！）</p>
                    <p className="mt-1">③ 对角线互相平分 → 平行四边形</p>
                    <p className="mt-1">④ 两组对边分别相等 → 平行四边形</p>
                  </div>
                </div>

                <div className="mt-2 border-l-4 border-blue-400 pl-3">
                  <p><strong>在高考中怎么用</strong></p>
                  <p className="mt-1">立体几何中证"线面平行"时，经常需要先构造平行四边形，找到一组"平行且相等"的对边</p>
                </div>
              </div>
            </div>

            {/* 卡片2：矩形 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">矩形（长方形）</div>
              <div className="px-3 py-2 space-y-0">
                <div>
                  <div className="float-right ml-3">
                    <DebugGeo2dSvg data={rectangleDiagram} width={190} height={120} strokeColor="#2563eb" />
                  </div>
                  <p><strong>定义</strong>：四个角都是<strong>直角</strong>的平行四边形</p>
                  <p className="mt-1">图中 <MathTex tex="a" /> = 长（底边），<MathTex tex="b" /> = 宽（侧边），<MathTex tex="d" /> = 对角线</p>
                  <p className="mt-1"><strong>性质</strong>：</p>
                  <p className="mt-1">① 对角线<strong>相等</strong>且互相平分</p>
                  <p className="mt-1">② 继承平行四边形所有性质（对边平行且相等）</p>
                  <p className="mt-2">对角线长：<MathTex tex="d = \sqrt{a^2 + b^2}" />（用勾股定理算出来的）</p>
                  <p className="mt-1">面积：<MathTex tex="S = a \times b" />（长 × 宽）</p>
                </div>

                <div className="mt-2 border-l-4 border-blue-400 pl-3">
                  <p><strong>在高考中怎么用</strong></p>
                  <p className="mt-1">① 正方体、长方体的每个面都是矩形，是立体几何最基础的底面形状</p>
                  <p className="mt-1">② 求体对角线长度时要用对角线公式（先求面对角线，再用勾股定理求体对角线）</p>
                  <p className="mt-1">③ 矩形的对角线相等 → 可用来证明线段相等</p>
                </div>

                <div className="mt-2 border-l-4 border-green-400 pl-3">
                  <p><strong>判定方法</strong></p>
                  <p className="mt-1">① 有一个角是直角的平行四边形是矩形</p>
                  <p className="mt-1">② 对角线相等的平行四边形是矩形</p>
                </div>
              </div>
            </div>

            <PageBreak />
            {/* 卡片2b：正方形 */}
            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">正方形</div>
              <div className="px-3 py-1 space-y-0">
                <div>
                  <div className="float-right ml-3">
                    <DebugGeo2dSvg data={squareDiagram} width={130} height={130} strokeColor="#16a34a" />
                  </div>
                  <p><strong>定义</strong>：四边相等 + 四角为直角（既是矩形也是菱形）</p>
                  <p className="mt-1">图中 <MathTex tex="a" /> = 边长（四条边都等于 <MathTex tex="a" />），<MathTex tex="d" /> = 对角线</p>
                  <p className="mt-1"><strong>性质</strong>：</p>
                  <p className="mt-1">① 对角线相等、互相<strong>垂直</strong>平分</p>
                  <p className="mt-1">② 四条边都相等，四个角都是 <MathTex tex="90°" /></p>
                  <p className="mt-2">对角线长：<MathTex tex="d = a\sqrt{2}" />（边长的 <MathTex tex="\sqrt{2}" /> 倍）</p>
                  <p className="mt-1">面积：<MathTex tex="S = a^2" />（边长的平方）</p>
                </div>

                <div className="mt-2 border-l-4 border-green-400 pl-3">
                  <p><strong>在高考中怎么用</strong></p>
                  <p className="mt-1">正方体的六个面都是正方形，面对角线 <MathTex tex="= a\sqrt{2}" />，体对角线 <MathTex tex="= a\sqrt{3}" /></p>
                </div>
              </div>
            </div>

            {/* 卡片3：菱形 */}
            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-800 border-b border-purple-300 bg-purple-100 text-lg">菱形</div>
              <div className="px-3 py-1 space-y-0">
                <div>
                  <div className="float-right ml-3">
                    <DebugGeo2dSvg data={rhombusDiagram} width={180} height={140} strokeColor="#7c3aed" />
                  </div>
                  <p><strong>定义</strong>：四条边都相等的平行四边形</p>
                  <p className="mt-1"><strong>性质</strong>：</p>
                  <p className="mt-1">① 四条边都相等</p>
                  <p className="mt-1">② 对角线互相<strong>垂直</strong>平分（图中 AC ⊥ BD）</p>
                  <p className="mt-1">③ 继承平行四边形所有性质</p>
                </div>

                <div className="mt-1 border-l-4 border-purple-400 pl-3">
                  <p><strong>面积公式</strong></p>
                  <p className="mt-1 text-xl"><MathTex tex="S = \dfrac{1}{2} \times d_1 \times d_2" /></p>
                  <p className="mt-1">图中 <MathTex tex="d_1" /> = 对角线 AC 的长度，<MathTex tex="d_2" /> = 对角线 BD 的长度</p>
                  <p className="mt-1">也可以用底 × 高计算（和平行四边形一样）</p>
                </div>

                <div className="mt-1 border-l-4 border-blue-400 pl-3">
                  <p><strong>在高考中怎么用</strong></p>
                  <p className="mt-1">立体几何截面有时是菱形；对角线垂直可用来证线段垂直</p>
                </div>
              </div>
            </div>

            {/* 卡片4：梯形 */}
            <div className="border border-orange-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-orange-800 border-b border-orange-300 bg-orange-100 text-lg">梯形</div>
              <div className="px-3 py-1 space-y-0">
                <div>
                  <div className="float-right ml-3">
                    <DebugGeo2dSvg data={trapezoidDiagram} width={200} height={130} />
                  </div>
                  <p><strong>定义</strong>：只有一组对边平行的四边形</p>
                  <p className="mt-1">平行的两边叫<strong>上底</strong>（AD）和<strong>下底</strong>（BC），不平行的两边叫<strong>腰</strong></p>
                  <p className="mt-1">图中 <MathTex tex="h" /> = 高（从顶点 A 垂直到下底的距离，蓝色虚线 AH）</p>
                </div>

                <div className="mt-1 border-l-4 border-orange-400 pl-3">
                  <p><strong>面积公式（必须记住）</strong></p>
                  <p className="mt-1 text-xl"><MathTex tex="S = \dfrac{1}{2}(\text{上底} + \text{下底}) \times h" /></p>
                  <p className="mt-1">上底 + 下底的和，乘以高，再除以 2</p>
                </div>

                <div className="mt-1 bg-red-50 border border-red-200 rounded p-1.5">
                  <p className="font-bold text-red-700">直角梯形（高考常见）</p>
                  <div className="flex items-start gap-3 mt-1">
                    <div className="flex-1">
                      <p>有一条腰<strong>垂直于</strong>上下底（图中 AB）</p>
                      <p className="mt-1">这条腰就是高 <MathTex tex="h" />（红色），不用额外作高线，计算更方便</p>
                      <p className="mt-1">高考立体几何中经常作为底面出现</p>
                    </div>
                    <DebugGeo2dSvg data={rightTrapezoidDiagram} width={170} height={115} className="shrink-0" />
                  </div>
                </div>
              </div>
            </div>


          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 3: 圆（待填充） */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="circle" className="mb-3 scroll-mt-4">
        <Collapsible title="三、圆" defaultOpen storageKey="geo-basics:circle">
          <div className="space-y-0 text-lg text-gray-800">

            {/* 卡片1：圆的基本概念 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">圆的基本概念</div>
              <div className="px-3 py-2 space-y-0">
                <div>
                  <div className="float-right ml-3">
                    <DebugGeo2dSvg data={circleBasicDiagram} width={200} height={200} />
                  </div>
                  <p><strong>定义</strong>：平面上到定点（圆心）距离等于定长（半径）的所有点的集合</p>
                  <p className="mt-2"><strong>基本元素</strong>：</p>
                  <p className="mt-1"><strong>圆心 O</strong>：圆的中心点</p>
                  <p className="mt-1"><strong>半径 <MathTex tex="r" /></strong>：从圆心到圆上任意一点的距离（图中红色 OA）</p>
                  <p className="mt-1"><strong>直径 <MathTex tex="d" /></strong>：过圆心的弦，<MathTex tex="d = 2r" />（图中蓝色虚线 AB）</p>
                  <p className="mt-1"><strong>弦</strong>：连接圆上两点的线段（图中绿色 CD）。直径是最长的弦</p>
                </div>
              </div>
            </div>

            {/* 卡片2：周长和面积 */}
            <div className="border border-red-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-red-800 border-b border-red-300 bg-red-100 text-lg">圆的周长和面积（必须记住）</div>
              <div className="px-3 py-1.5 space-y-0">
                <div>
                  <div className="float-right ml-3">
                    <DebugGeo2dSvg data={circleAreaDiagram} width={180} height={180} />
                  </div>
                  <p>图中 <MathTex tex="r" /> = 半径（红色），<MathTex tex="\pi \approx 3.14159" /></p>

                  <div className="mt-1 border-l-4 border-red-400 pl-3">
                    <p><strong>周长公式</strong></p>
                    <p className="mt-1 text-xl"><MathTex tex="C = 2\pi r" /></p>
                    <p className="mt-1">也可以写成 <MathTex tex="C = \pi d" />（直径 × π）</p>
                  </div>

                  <div className="mt-1 border-l-4 border-blue-400 pl-3">
                    <p><strong>面积公式</strong>　<MathTex tex="S = \pi r^2" /></p>
                    <p className="mt-1">半径的平方 × π</p>
                  </div>
                </div>
                <div className="mt-1 border-l-4 border-green-400 pl-3">
                  <p><strong>在高考中怎么用</strong></p>
                  <p className="mt-1">① 圆柱底面积 = <MathTex tex="\pi r^2" />，侧面积 = <MathTex tex="2\pi r h" />（周长 × 高）</p>
                  <p className="mt-1">② 圆锥底面积 = <MathTex tex="\pi r^2" /></p>
                  <p className="mt-1">③ 球的表面积 = <MathTex tex="4\pi r^2" />，体积 = <MathTex tex="\dfrac{4}{3}\pi r^3" /></p>
                </div>
              </div>
            </div>

            {/* 卡片3：弧长和扇形面积 */}
            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-800 border-b border-purple-300 bg-purple-100 text-lg">弧长和扇形面积</div>
              <div className="px-3 py-2 space-y-0">
                <div>
                  <div className="float-right ml-3">
                    <DebugGeo2dSvg data={sectorDiagram} width={200} height={160} />
                  </div>
                  <p><strong>扇形</strong>：由两条半径和一段弧围成的图形（像一把扇子）</p>
                  <p className="mt-1">图中 <MathTex tex="r" /> = 半径，<MathTex tex="n°" /> = 圆心角，<MathTex tex="l" /> = 弧长（紫色弧线）</p>
                </div>

                <div className="mt-2 border-l-4 border-purple-400 pl-3">
                  <p><strong>弧长公式</strong></p>
                  <p className="mt-1 text-xl"><MathTex tex="l = \dfrac{n\pi r}{180}" /></p>
                  <p className="mt-1">也可以写成 <MathTex tex="l = \dfrac{n}{360} \times 2\pi r" />（圆心角占整圆的比例 × 周长）</p>
                </div>

                <div className="mt-2 border-l-4 border-amber-400 pl-3">
                  <p><strong>扇形面积公式</strong></p>
                  <p className="mt-1 text-xl"><MathTex tex="S = \dfrac{1}{2} l r = \dfrac{n\pi r^2}{360}" /></p>
                  <p className="mt-1">弧长 × 半径 ÷ 2，或者圆心角占比 × 整圆面积</p>
                </div>

                <div className="mt-2 border-l-4 border-blue-400 pl-3">
                  <p><strong>在高考中怎么用</strong></p>
                  <p className="mt-1">① 圆锥侧面展开就是一个扇形，侧面积 = <MathTex tex="\pi r l" />（<MathTex tex="r" /> 是底面半径，<MathTex tex="l" /> 是母线长）</p>
                  <p className="mt-1">② 球的截面面积需要用圆面积公式</p>
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
