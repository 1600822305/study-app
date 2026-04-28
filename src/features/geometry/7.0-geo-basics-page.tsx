import { Math as MathTex, Collapsible, PageHeader, LessonLayout, ExportButton, DebugGeo2dSvg, DebugGeo3dSvg, UnifiedDebugToggle } from '@/components/shared';
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
import { planeAxesDiagram, obliqueAxesDiagram } from './data/7.0.5/7.0.5-prereq-diagrams';
import { cuboidPlainDiagram } from './data/7.1/7.1-relation-diagrams';

import { useProgress } from '@/hooks';

export function GeoBasicsPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('geo-basics', geoBasicsProgressItems);

  return (
    <div>
      <PageHeader
        stage=""
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
      <section id="triangle" className="mb-1 scroll-mt-4">
        <Collapsible title="一、三角形" defaultOpen storageKey="geo-basics:triangle">
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            {/* 卡片1：认识三角形 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100">认识三角形</div>
              <div className="px-3 py-2 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p><strong>定义</strong>：同一平面内不在同一直线上的三条线段首尾顺次连接所组成的封闭图形</p>
                    <p className="mt-1"><strong>三要素</strong>：三条边、三个角、三个顶点</p>
                    <p className="mt-1">顶点用大写字母 <MathTex tex="A, B, C" /> 标记</p>
                    <div className="mt-2 border-l-4 border-blue-400 pl-3">
                      <p><strong>内角和定理</strong>：三角形的三个内角之和等于 <MathTex tex="180°" /></p>
                      <p className="mt-1"><MathTex tex="\angle A + \angle B + \angle C = 180°" /></p>
                    </div>
                  </div>
                  <DebugGeo2dSvg data={basicTriangleDiagram} width={130} height={105} className="flex-shrink-0" />
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
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100">三角形分类</div>
              <div className="px-3 py-1 space-y-0">
                <p className="font-bold">按角分（看最大的那个角）　　按边分（看边的相等关系）</p>
                <div className="grid grid-cols-3 gap-1 mt-1">
                  <div className="bg-green-50 rounded-lg p-1 border border-green-200 text-center">
                    <DebugGeo2dSvg data={acuteTriangleDiagram} width={90} height={80} strokeColor="#16a34a" className="mx-auto" />
                    <p className="font-bold text-green-700">锐角三角形</p>
                    <p className="whitespace-nowrap">三个内角都 <MathTex tex="< 90°" />（锐角）</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-1 border border-blue-200 text-center">
                    <DebugGeo2dSvg data={rightTriangleClassDiagram} width={90} height={80} strokeColor="#2563eb" className="mx-auto" />
                    <p className="font-bold text-blue-700">直角三角形</p>
                    <p className="whitespace-nowrap">有一个内角 <MathTex tex="= 90°" />（直角）</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-1 border border-purple-200 text-center">
                    <DebugGeo2dSvg data={obtuseTriangleDiagram} width={90} height={80} strokeColor="#7c3aed" className="mx-auto" />
                    <p className="font-bold text-purple-700">钝角三角形</p>
                    <p className="whitespace-nowrap">有一个内角 <MathTex tex="> 90°" />（钝角）</p>
                  </div>
                </div>

                <div className="space-y-1 mt-1">
                  <div className="bg-gray-50 rounded-lg p-2 border border-gray-200">
                    <div className="flex items-start gap-3">
                      <div className="flex-1">
                        <p className="font-bold">等腰三角形</p>
                        <p>有两条边相等（腰），另一条叫底边</p>
                        <p><strong>等边对等角</strong>：两底角相等</p>
                        <p className="mt-1"><strong>三线合一</strong>：顶角的平分线、底边的中线、底边上的高重合</p>
                      </div>
                      <DebugGeo2dSvg data={isoscelesDiagram} width={90} height={85} className="shrink-0" />
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2 border border-gray-200">
                    <div className="flex items-start gap-3">
                      <div className="flex-1">
                        <p className="font-bold">等边三角形（正三角形）</p>
                        <p>三条边都相等，每个角都是 <MathTex tex="60°" /></p>
                        <p className="mt-1">面积 <MathTex tex="S = \dfrac{\sqrt{3}}{4}a^2" />　高 <MathTex tex="h = \dfrac{\sqrt{3}}{2}a" /></p>
                      </div>
                      <DebugGeo2dSvg data={equilateralDiagram} width={90} height={85} className="shrink-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 卡片3：三角形的高 + 面积公式 */}
            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100">三角形的高 + 面积公式</div>
              <div className="px-3 py-1.5 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p><strong>高</strong>：从三角形的一个顶点垂直于对边的线段，记为 <MathTex tex="h" />，与之对应的对边称为底边</p>
                    <p className="mt-1">每个三角形有三条高，三条高的交点称为"垂心"</p>
                    <div className="mt-1 border-l-4 border-amber-400 pl-3">
                      <p><strong>面积公式（必须记住）</strong>　<MathTex tex="S = \dfrac{1}{2} \times \text{底} \times \text{高}" /></p>
                      <p className="mt-1">底和高必须<strong>互相垂直</strong></p>
                    </div>
                  </div>
                  <DebugGeo2dSvg data={triangleHeightDiagram} width={117} height={111} className="flex-shrink-0" />
                </div>

                <div className="mt-1 bg-red-50 border border-red-200 rounded p-1.5">
                  <div className="flex items-start gap-3">
                    <div className="flex-1">
                      <p className="font-bold text-red-700">做题技巧：直角三角形</p>
                      <p className="mt-1">直角三角形的两条直角边互相垂直，所以<strong>两条直角边可以直接当底和高</strong></p>
                      <p className="mt-1"><MathTex tex="S = \dfrac{1}{2} \times a \times b" />（<MathTex tex="a, b" /> 是两条直角边）</p>
                    </div>
                    <DebugGeo2dSvg data={rightTriangleAreaDiagram} width={112} height={94} className="flex-shrink-0" />
                  </div>
                </div>
              </div>
            </div>

            {/* 卡片4：勾股定理 */}
            <div className="border border-red-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-red-800 border-b border-red-300 bg-red-100">勾股定理（超级重要）</div>
              <div className="px-3 py-1.5 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p>在<strong>直角三角形</strong>中，两条直角边的平方和等于斜边的平方</p>
                    <p className="mt-1 text-xl"><MathTex tex="a^2 + b^2 = c^2" /></p>
                    <p className="mt-2"><MathTex tex="a" />、<MathTex tex="b" /> 是两条直角边，<MathTex tex="c" /> 是斜边（最长的边，对着直角）</p>
                  </div>
                  <DebugGeo2dSvg data={pythagorasDiagram} width={135} height={113} className="flex-shrink-0" />
                </div>

                <p className="mt-1 font-bold">常见勾股数（记住能省时间）</p>
                <div className="grid grid-cols-3 gap-1 mt-1">
                  <div className="bg-red-50 rounded-lg p-1 border border-red-200 text-center">
                    <p className="text-base font-bold"><MathTex tex="3, 4, 5" /></p>
                    <p><MathTex tex="3^2 + 4^2 = 5^2" /></p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-1 border border-red-200 text-center">
                    <p className="text-base font-bold"><MathTex tex="5, 12, 13" /></p>
                    <p><MathTex tex="5^2 + 12^2 = 13^2" /></p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-1 border border-red-200 text-center">
                    <p className="text-base font-bold"><MathTex tex="6, 8, 10" /></p>
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
              <div className="px-2 py-1 font-bold text-purple-800 border-b border-purple-300 bg-purple-100">中位线定理（证平行神器）</div>
              <div className="px-3 py-2 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p><strong>中位线</strong>：连接三角形两边中点的线段</p>
                    <p className="mt-1"><strong>定理</strong>：中位线<strong>平行于第三边</strong>，且长度等于第三边的<strong>一半</strong></p>
                    <p className="mt-2"><MathTex tex="DE \parallel BC" /> 且 <MathTex tex="DE = \dfrac{1}{2} BC" /></p>
                    <p className="mt-1">图中红色为证明辅助线：延长 DE 到 G 使 EG = DE，连 CG、FE、FC</p>
                  </div>
                  <DebugGeo2dSvg data={midlineDiagram} width={157} height={122} className="flex-shrink-0" />
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
              <div className="px-2 py-1 font-bold text-teal-800 border-b border-teal-300 bg-teal-100">相似三角形（求比例）</div>
              <div className="px-3 py-2 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p><strong>相似</strong>：对应角相等、对应边成比例的两个三角形</p>
                    <p className="mt-1">记作 <MathTex tex="\triangle ABC \sim \triangle DEF" />，比例系数叫<strong>相似比</strong></p>
                    <div className="mt-2 border-l-4 border-teal-400 pl-3">
                      <p><strong>最常用的判定：平行线出相似</strong></p>
                      <p className="mt-1">如果 <MathTex tex="DE \parallel BC" />，那么 <MathTex tex="\triangle ADE \sim \triangle ABC" /></p>
                      <p className="mt-1">此时对应边成比例：<MathTex tex="\dfrac{AD}{AB} = \dfrac{AE}{AC} = \dfrac{DE}{BC}" /></p>
                      <p className="mt-1 font-bold">记住这一条就够用</p>
                    </div>
                  </div>
                  <DebugGeo2dSvg data={similarTriangleDiagram} width={130} height={100} className="flex-shrink-0" />
                </div>

              </div>
            </div>

            {/* 卡片7：全等三角形 */}
            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100">全等三角形（证相等）</div>
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

              </div>
            </div>

           {/* 卡片8：多边形内角和 */}
           <div className="border border-teal-300 rounded overflow-hidden">
             <div className="px-2 py-1 font-bold text-teal-800 border-b border-teal-300 bg-teal-100">多边形内角和</div>
             <div className="px-3 py-2 space-y-0">
               <div className="flex items-start gap-3">
                 <div className="flex-1">
                   <p>三角形内角和 = <MathTex tex="180°" />，是所有多边形内角和的基础</p>
                   <p className="mt-1">任何 <MathTex tex="n" /> 边形都可以从一个顶点引对角线，分成 <MathTex tex="(n-2)" /> 个三角形</p>
                   <div className="mt-2 border-l-4 border-teal-400 pl-3">
                     <p><strong>内角和公式</strong></p>
                     <p className="mt-1 text-xl"><MathTex tex="\text{内角和} = (n-2) \times 180°" /></p>
                     <p className="mt-1"><MathTex tex="n" /> = 边数（也是顶点数）</p>
                     <p className="mt-1">例：四边形 = <MathTex tex="(4-2) \times 180° = 360°" /></p>
                     <p className="mt-1">例：五边形 = <MathTex tex="(5-2) \times 180° = 540°" />（图中分成 3 个三角形）</p>
                   </div>
                 </div>
                 <DebugGeo2dSvg data={polygonAngleDiagram} width={158} height={128} className="flex-shrink-0" />
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

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 2: 四边形（待填充） */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="quadrilateral" className="mb-1 scroll-mt-4">
        <Collapsible title="二、四边形" defaultOpen storageKey="geo-basics:quad">
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            {/* 卡片1：平行四边形 */}
            <div className="border border-yellow-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-yellow-800 border-b border-yellow-300 bg-yellow-100">平行四边形（最重要）</div>
              <div className="px-3 py-2 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p><strong>定义</strong>：两组对边分别平行的四边形</p>
                    <p className="mt-1"><strong>性质</strong>（记住这三条）：</p>
                    <p className="mt-1">① 对边相等：<MathTex tex="AB = CD" />，<MathTex tex="BC = AD" /></p>
                    <p className="mt-1">② 对角相等：<MathTex tex="\angle A = \angle C" />，<MathTex tex="\angle B = \angle D" /></p>
                    <p className="mt-1">③ 对角线互相平分：<MathTex tex="OA = OC" />，<MathTex tex="OB = OD" /></p>
                  </div>
                  <DebugGeo2dSvg data={parallelogramDiagram} width={192} height={119} className="flex-shrink-0" />
                </div>

                <div className="mt-2 border-l-4 border-amber-400 pl-3">
                  <p><strong>面积公式</strong>　<MathTex tex="S = \text{底} \times h" /></p>
                  <p className="mt-1"><strong>底</strong>：任意一条边，<strong>高</strong> <MathTex tex="h" />：从对边顶点垂直落到底边的距离（底和高必须互相垂直）</p>
                  <p className="mt-1">图中底 = AB，高 = 红色虚线 DH</p>
                </div>

                <div className="mt-2 bg-red-50 border border-red-200 rounded p-2">
                  <div className="flex items-start gap-3">
                    <div className="flex-1">
                      <p className="font-bold text-red-700">判定定理（高考超高频）</p>
                      <p className="mt-1">① 两组对边分别平行　② <strong className="text-red-600">一组对边平行且相等</strong>（最常用！）</p>
                      <p className="mt-1">③ 对角线互相平分　④ 两组对边分别相等</p>
                    </div>
                    <DebugGeo2dSvg data={parallelogramJudgeDiagram} width={135} height={85} className="flex-shrink-0" />
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
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100">矩形（长方形）</div>
              <div className="px-3 py-2 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p><strong>定义</strong>：四个角都是<strong>直角</strong>的平行四边形</p>
                    <p className="mt-1">图中 <MathTex tex="a" /> = 长（底边），<MathTex tex="b" /> = 宽（侧边），<MathTex tex="d" /> = 对角线</p>
                    <p className="mt-1"><strong>性质</strong>：</p>
                    <p className="mt-1">① 对角线<strong>相等</strong>且互相平分</p>
                    <p className="mt-1">② 继承平行四边形所有性质（对边平行且相等）</p>
                    <p className="mt-2">对角线长：<MathTex tex="d = \sqrt{a^2 + b^2}" />（用勾股定理算出来的）</p>
                    <p className="mt-1">面积：<MathTex tex="S = a \times b" />（长 × 宽）</p>
                  </div>
                  <DebugGeo2dSvg data={rectangleDiagram} width={135} height={95} strokeColor="#2563eb" className="flex-shrink-0" />
                </div>


                <div className="mt-2 border-l-4 border-green-400 pl-3">
                  <p><strong>判定方法</strong></p>
                  <p className="mt-1">① 有一个角是直角的平行四边形是矩形</p>
                  <p className="mt-1">② 对角线相等的平行四边形是矩形</p>
                </div>
              </div>
            </div>

            {/* 卡片2b：正方形 */}
            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100">正方形</div>
              <div className="px-3 py-1 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p><strong>定义</strong>：四边相等 + 四角为直角（既是矩形也是菱形）</p>
                    <p className="mt-1">图中 <MathTex tex="a" /> = 边长（四条边都等于 <MathTex tex="a" />），<MathTex tex="d" /> = 对角线</p>
                    <p className="mt-1"><strong>性质</strong>：</p>
                    <p className="mt-1">① 对角线相等、互相<strong>垂直</strong>平分</p>
                    <p className="mt-1">② 四条边都相等，四个角都是 <MathTex tex="90°" /></p>
                    <p className="mt-2">对角线长：<MathTex tex="d = a\sqrt{2}" />（边长的 <MathTex tex="\sqrt{2}" /> 倍）</p>
                    <p className="mt-1">面积：<MathTex tex="S = a^2" />（边长的平方）</p>
                  </div>
                  <DebugGeo2dSvg data={squareDiagram} width={130} height={130} strokeColor="#16a34a" className="flex-shrink-0" />
                </div>

              </div>
            </div>

            {/* 卡片3：菱形 */}
            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-800 border-b border-purple-300 bg-purple-100">菱形</div>
              <div className="px-3 py-1 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p><strong>定义</strong>：四条边都相等的平行四边形</p>
                    <p className="mt-1"><strong>性质</strong>：</p>
                    <p className="mt-1">① 四条边都相等</p>
                    <p className="mt-1">② 对角线互相<strong>垂直</strong>平分（图中 AC ⊥ BD）</p>
                    <p className="mt-1">③ 继承平行四边形所有性质</p>
                  </div>
                  <DebugGeo2dSvg data={rhombusDiagram} width={130} height={112} strokeColor="#7c3aed" className="flex-shrink-0" />
                </div>

                <div className="mt-1 border-l-4 border-purple-400 pl-3">
                  <p><strong>面积公式</strong></p>
                  <p className="mt-1 text-xl"><MathTex tex="S = \dfrac{1}{2} \times d_1 \times d_2" /></p>
                  <p className="mt-1">图中 <MathTex tex="d_1" /> = 对角线 AC 的长度，<MathTex tex="d_2" /> = 对角线 BD 的长度</p>
                  <p className="mt-1">也可以用底 × 高计算（和平行四边形一样）</p>
                </div>

              </div>
            </div>

            {/* 卡片4：梯形 */}
            <div className="border border-orange-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-orange-800 border-b border-orange-300 bg-orange-100">梯形</div>
              <div className="px-3 py-1 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p><strong>定义</strong>：只有一组对边平行的四边形</p>
                    <p className="mt-1">平行的两边叫<strong>上底</strong>（AD）和<strong>下底</strong>（BC），不平行的两边叫<strong>腰</strong></p>
                    <p className="mt-1">图中 <MathTex tex="h" /> = 高（从顶点 A 垂直到下底的距离，蓝色虚线 AH）</p>
                    <div className="mt-1 border-l-4 border-orange-400 pl-3">
                      <p><strong>面积公式（必须记住）</strong></p>
                      <p className="mt-1 text-xl"><MathTex tex="S = \dfrac{1}{2}(\text{上底} + \text{下底}) \times h" /></p>
                      <p className="mt-1">上底 + 下底的和，乘以高，再除以 2</p>
                    </div>
                  </div>
                  <DebugGeo2dSvg data={trapezoidDiagram} width={160} height={110} className="flex-shrink-0" />
                </div>

                <div className="mt-1 bg-red-50 border border-red-200 rounded p-1.5">
                  <div className="flex items-start gap-3">
                    <div className="flex-1">
                      <p className="font-bold text-red-700">直角梯形（高考常见）</p>
                      <p className="mt-1">有一条腰<strong>垂直于</strong>上下底（图中 AB）</p>
                      <p className="mt-1">这条腰就是高 <MathTex tex="h" />（红色），不用额外作高线，计算更方便</p>
                      <p className="mt-1">高考立体几何中经常作为底面出现</p>
                    </div>
                    <DebugGeo2dSvg data={rightTrapezoidDiagram} width={135} height={95} className="flex-shrink-0" />
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
      <section id="circle" className="mb-1 scroll-mt-4">
        <Collapsible title="三、圆" defaultOpen storageKey="geo-basics:circle">
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            {/* 卡片1：圆的基本概念 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100">圆的基本概念</div>
              <div className="px-3 py-2 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p><strong>定义</strong>：平面上到定点（圆心）距离等于定长（半径）的所有点的集合</p>
                    <p className="mt-2"><strong>基本元素</strong>：</p>
                    <p className="mt-1"><strong>圆心 O</strong>：圆的中心点</p>
                    <p className="mt-1"><strong>半径 <MathTex tex="r" /></strong>：从圆心到圆上任意一点的距离（图中红色 OA）</p>
                    <p className="mt-1"><strong>直径 <MathTex tex="d" /></strong>：过圆心的弦，<MathTex tex="d = 2r" />（图中蓝色虚线 AB）</p>
                    <p className="mt-1"><strong>弦</strong>：连接圆上两点的线段（图中绿色 CD）。直径是最长的弦</p>
                  </div>
                  <DebugGeo2dSvg data={circleBasicDiagram} width={148} height={160} className="flex-shrink-0" />
                </div>
              </div>
            </div>

            {/* 卡片2：周长和面积 */}
            <div className="border border-red-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-red-800 border-b border-red-300 bg-red-100">圆的周长和面积（必须记住）</div>
              <div className="px-3 py-1.5 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p>图中 <MathTex tex="r" /> = 半径（红色），<MathTex tex="\pi \approx 3.14159" /></p>

                    <div className="mt-1 border-l-4 border-red-400 pl-3">
                      <p><strong>周长公式</strong>　<MathTex tex="C = 2\pi r" />，也可以写成 <MathTex tex="C = \pi d" />（直径 × π）</p>
                      <p className="mt-1"><strong>面积公式</strong>　<MathTex tex="S = \pi r^2" />（半径的平方 × π）</p>
                    </div>

                    <div className="mt-1 border-l-4 border-green-400 pl-3">
                      <p><strong>在高考中怎么用</strong></p>
                      <p className="mt-1">圆柱：底面积 <MathTex tex="\pi r^2" />，侧面积 <MathTex tex="2\pi r h" />（底面周长 × 高），体积 <MathTex tex="\pi r^2 h" /></p>
                      <p className="mt-1">圆锥：底面积 <MathTex tex="\pi r^2" />，侧面积 <MathTex tex="\pi r l" />（<MathTex tex="l" /> 为母线长），体积 <MathTex tex="\dfrac{1}{3}\pi r^2 h" /></p>
                      <p className="mt-1">球：表面积 <MathTex tex="4\pi R^2" />，体积 <MathTex tex="\dfrac{4}{3}\pi R^3" /></p>
                    </div>
                  </div>
                  <DebugGeo2dSvg data={circleAreaDiagram} width={100} height={100} className="flex-shrink-0" />
                </div>
              </div>
            </div>

            {/* 卡片3：弧长和扇形面积 */}
            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-800 border-b border-purple-300 bg-purple-100">弧长和扇形面积</div>
              <div className="px-3 py-2 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p><strong>扇形</strong>：由两条半径和一段弧围成的图形（像一把扇子）</p>
                    <p className="mt-1">图中 <MathTex tex="r" /> = 半径，<MathTex tex="n°" /> = 圆心角，<MathTex tex="l" /> = 弧长（紫色弧线）</p>

                    <div className="mt-2 border-l-4 border-purple-400 pl-3">
                      <p><strong>弧长公式</strong>　<MathTex tex="l = \dfrac{n\pi r}{180}" />，也可以写成 <MathTex tex="l = \dfrac{n}{360} \times 2\pi r" />（圆心角占整圆的比例 × 周长）</p>
                      <p className="mt-1"><strong>扇形面积公式</strong>　<MathTex tex="S = \dfrac{1}{2} l r = \dfrac{n\pi r^2}{360}" />（弧长 × 半径 ÷ 2，或者圆心角占比 × 整圆面积）</p>
                    </div>

                    <div className="mt-2 border-l-4 border-blue-400 pl-3">
                      <p><strong>在高考中怎么用</strong></p>
                      <p className="mt-1">① 圆锥侧面展开就是一个扇形，侧面积 = <MathTex tex="\pi r l" />（<MathTex tex="r" /> 是底面半径，<MathTex tex="l" /> 是母线长）</p>
                      <p className="mt-1">② 球的截面面积需要用圆面积公式</p>
                    </div>
                  </div>
                  <DebugGeo2dSvg data={sectorDiagram} width={120} height={90} className="flex-shrink-0" />
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 4: 点线面的符号表示 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="notation" className="mb-1 scroll-mt-4">
        <Collapsible title="四、点线面的符号表示" defaultOpen storageKey="geo-basics:notation">
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100">三个基本元素</div>
              <div className="px-3 py-0.5 space-y-0">
                <div className="grid grid-cols-3 gap-0">
                  <div className="bg-blue-50 rounded-lg p-1 border border-blue-200 text-center">
                    <p className="font-bold text-blue-700 text-lg">点</p>
                    <p>用大写字母</p>
                    <p><MathTex tex="A, B, C, P" /></p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-1 border border-green-200 text-center">
                    <p className="font-bold text-green-700 text-lg">直线</p>
                    <p>用两个大写字母或小写字母</p>
                    <p><MathTex tex="AB,\; l,\; m" /></p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-1 border border-purple-200 text-center">
                    <p className="font-bold text-purple-700 text-lg">平面</p>
                    <p>用希腊字母</p>
                    <p><MathTex tex="\alpha,\; \beta,\; \gamma" /></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100">位置关系符号</div>
              <div className="px-3 py-2 space-y-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-center">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="py-1 text-left pl-2">符号</th>
                        <th className="py-1">含义</th>
                        <th className="py-1">例子</th>
                        <th className="py-1">读作</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-left pl-2"><MathTex tex="\in" /></td>
                        <td className="py-1">点属于（在……上）</td>
                        <td className="py-1"><MathTex tex="A \in l" /></td>
                        <td className="py-1">点 A 在直线 l 上</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-left pl-2"><MathTex tex="\notin" /></td>
                        <td className="py-1">点不属于</td>
                        <td className="py-1"><MathTex tex="A \notin \alpha" /></td>
                        <td className="py-1">点 A 不在平面 <MathTex tex="\alpha" /> 上</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-left pl-2"><MathTex tex="\subset" /></td>
                        <td className="py-1">线在面内</td>
                        <td className="py-1"><MathTex tex="l \subset \alpha" /></td>
                        <td className="py-1">直线 l 在平面 <MathTex tex="\alpha" /> 内</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-left pl-2"><MathTex tex="\parallel" /></td>
                        <td className="py-1">平行</td>
                        <td className="py-1"><MathTex tex="l \parallel m" /></td>
                        <td className="py-1">直线 l 平行于直线 m</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-left pl-2"><MathTex tex="\perp" /></td>
                        <td className="py-1">垂直</td>
                        <td className="py-1"><MathTex tex="l \perp \alpha" /></td>
                        <td className="py-1">直线 l 垂直于平面 <MathTex tex="\alpha" /></td>
                      </tr>
                      <tr>
                        <td className="py-1 text-left pl-2"><MathTex tex="\cap" /></td>
                        <td className="py-1">交（相交）</td>
                        <td className="py-1"><MathTex tex="\alpha \cap \beta = l" /></td>
                        <td className="py-1">两个平面交于直线 l</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100">点线面的位置关系（全部情况）</div>
              <div className="px-3 py-1 space-y-0">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="py-1 text-left pl-2 font-bold text-blue-700">线与线</th>
                      <th className="py-1 text-left pl-2 font-bold text-green-700">线与面</th>
                      <th className="py-1 text-left pl-2 font-bold text-purple-700">面与面</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-0.5 pl-2">① 平行</td>
                      <td className="py-0.5 pl-2">① 线在面内</td>
                      <td className="py-0.5 pl-2">① 平行</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-0.5 pl-2">② 相交（有公共点）</td>
                      <td className="py-0.5 pl-2">② 线与面平行</td>
                      <td className="py-0.5 pl-2">② 相交</td>
                    </tr>
                    <tr>
                      <td className="py-0.5 pl-2">③ <strong>异面</strong>（不平行也不相交）</td>
                      <td className="py-0.5 pl-2">③ 线与面相交</td>
                      <td className="py-0.5 pl-2"></td>
                    </tr>
                  </tbody>
                </table>
                <p className="mt-1"><strong>"异面直线"</strong>是空间特有的概念——两条直线既不平行也不相交（不在同一个平面内）</p>
              </div>
            </div>

            <div className="mt-1 border-l-4 border-purple-400 pl-3">
              <p><strong>平面的基本公理</strong></p>
              <p className="mt-1">公理1：三个不共线的点确定一个平面</p>
              <p className="mt-1">公理2：如果一条直线上两个点在平面内，则整条直线在平面内</p>
              <p className="mt-1">公理3：两个平面有一个公共点，则它们有且只有一条公共直线（交线）</p>
              <p className="mt-1">公理4：平行于同一条直线的两条直线互相平行（平行的传递性）</p>
              <p className="mt-1"><strong>推论</strong>：两条相交直线确定一个平面；一条直线和直线外一点确定一个平面</p>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 5: 画直观图 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="drawing" className="mb-1 scroll-mt-4">
        <Collapsible title="五、画直观图（斜二测画法）" defaultOpen storageKey="geo-basics:drawing">
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100">先回忆：平面直角坐标系</div>
              <div className="px-3 py-2 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p>初中学过的坐标系只有两个轴：</p>
                    <p className="mt-1"><strong>x 轴</strong>（水平）和 <strong>y 轴</strong>（竖直），能表示平面上的点</p>
                    <p className="mt-1">但平面坐标系画不了立体图形，所以需要加一个<strong>深度方向</strong></p>
                  </div>
                  <DebugGeo3dSvg data={planeAxesDiagram} width={100} height={100} className="flex-shrink-0" />
                </div>
              </div>
            </div>

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100">斜二测画法：从 2D 到 3D</div>
              <div className="px-3 py-2 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p>在平面坐标系基础上，加一条 y 轴表示深度（朝左下 <MathTex tex="45°" />，长度取一半），原来的 y 轴变成 z 轴：</p>
                    <div className="grid grid-cols-3 gap-1 mt-1">
                      <div className="bg-blue-50 rounded p-1 border border-blue-200 text-center">
                        <p className="font-bold text-blue-700">x 轴</p>
                        <p>水平方向</p>
                        <p className="font-bold">长度不变</p>
                      </div>
                      <div className="bg-green-50 rounded p-1 border border-green-200 text-center">
                        <p className="font-bold text-green-700">y 轴</p>
                        <p>与 x 轴成 <MathTex tex="45°" /></p>
                        <p className="font-bold">长度取一半</p>
                      </div>
                      <div className="bg-purple-50 rounded p-1 border border-purple-200 text-center">
                        <p className="font-bold text-purple-700">z 轴</p>
                        <p>竖直方向</p>
                        <p className="font-bold">长度不变</p>
                      </div>
                    </div>
                  </div>
                  <DebugGeo3dSvg data={obliqueAxesDiagram} width={120} height={110} className="flex-shrink-0" />
                </div>
              </div>
            </div>

            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100">画图步骤（以长方体为例）</div>
              <div className="px-3 py-1.5 space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p><strong>第 1 步</strong>：画底面——先画一个平行四边形（x 方向原长，y 方向取半，<MathTex tex="45°" /> 斜向右上）</p>
                    <p className="mt-1"><strong>第 2 步</strong>：画高——从底面四个顶点向上画竖直线，长度不变</p>
                    <p className="mt-1"><strong>第 3 步</strong>：连接顶面——连接四条竖线的顶端</p>
                    <p className="mt-1"><strong>第 4 步</strong>：虚线——被遮挡看不见的棱画成虚线</p>
                  </div>
                  <DebugGeo3dSvg data={cuboidPlainDiagram} width={140} height={120} className="flex-shrink-0" />
                </div>
                <p className="mt-1">注意：不管什么形状，<strong>x 方向和 z 方向长度不变，y 方向始终取半</strong></p>
              </div>
            </div>

            <div className="border border-red-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-red-800 border-b border-red-300 bg-red-100">高考中画图的作用</div>
              <div className="px-3 py-1.5 space-y-0">
                <p>高考不会专门考"画直观图"，但你需要：</p>
                <p className="mt-1">① <strong>看懂题目配图</strong>（知道哪些面是底面、哪些棱互相平行）</p>
                <p className="mt-1">② <strong>自己画草图辅助思考</strong>（建立坐标系时需要画图）</p>
                <p className="mt-1">③ <strong>区分实线和虚线</strong>（虚线表示看不见的棱，解题时容易忽略）</p>
                <p className="mt-1">④ <strong>标记关键点</strong>（中点、垂足、交点等，计算前先在图上标清楚）</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      </LessonLayout>
      <UnifiedDebugToggle />
    </div>
  );
}
