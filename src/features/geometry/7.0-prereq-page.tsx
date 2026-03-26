import { Math as MathTex, Collapsible, SpeakButton, PageHeader, LessonLayout, ExportButton, PageBreak, Geo3dSvg, DebugGeo3dSvg, Geo3dDebugToggle } from '@/components/shared';
import { geo3dPrereqNarrations } from './data/7.0/7.0-prereq-narrations';
import { planeAxesDiagram, obliqueAxesDiagram } from './data/7.0/7.0-prereq-diagrams';
import { skewLinesDiagram } from './data/7.1/7.1-relation-diagrams';
import { geo3dPrereqProgressItems } from './data/7.0/7.0-prereq-progress';
import { useProgress } from '@/hooks';
import { scrollToId } from '@/lib/scroll';

/* ─── 平面图形 SVG 配图 ─────────────────────────────────── */

function TriangleSvg({ className }: { className?: string }) {
  return (
    <svg width="120" height="100" viewBox="0 0 120 100" className={className}>
      <polygon points="60,10 10,90 110,90" fill="none" stroke="#334155" strokeWidth="2" />
      {/* 高（虚线） */}
      <line x1="60" y1="10" x2="60" y2="90" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 3" />
      {/* 底 */}
      <text x="60" y="98" textAnchor="middle" fontSize="13" fill="#334155" fontStyle="italic">a（底）</text>
      {/* 高标注 */}
      <text x="68" y="55" fontSize="13" fill="#3b82f6" fontStyle="italic">h（高）</text>
      {/* 顶点标注 */}
      <text x="60" y="8" textAnchor="middle" fontSize="13" fill="#334155" fontWeight="bold">A</text>
      <text x="5" y="90" textAnchor="end" fontSize="13" fill="#334155" fontWeight="bold">B</text>
      <text x="115" y="90" textAnchor="start" fontSize="13" fill="#334155" fontWeight="bold">C</text>
    </svg>
  );
}

function RightTriangleSvg({ className }: { className?: string }) {
  return (
    <svg width="120" height="100" viewBox="0 0 120 100" className={className}>
      <polygon points="15,85 15,15 105,85" fill="none" stroke="#334155" strokeWidth="2" />
      {/* 直角标记 */}
      <polyline points="15,70 30,70 30,85" fill="none" stroke="#334155" strokeWidth="1.5" />
      {/* 标注 */}
      <text x="8" y="55" fontSize="13" fill="#3b82f6" fontStyle="italic">a</text>
      <text x="55" y="98" fontSize="13" fill="#16a34a" fontStyle="italic">b</text>
      <text x="65" y="45" fontSize="13" fill="#dc2626" fontStyle="italic">c（斜边）</text>
    </svg>
  );
}

function AcuteTriangleSvg({ className }: { className?: string }) {
  return (
    <svg width="90" height="80" viewBox="0 0 90 80" className={className}>
      <polygon points="45,5 5,70 85,70" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2" />
      {/* 角弧标记 */}
      <path d="M 15,62 A 12,12 0 0,1 24,70" fill="none" stroke="#16a34a" strokeWidth="1.2" />
      <path d="M 75,70 A 12,12 0 0,1 68,60" fill="none" stroke="#16a34a" strokeWidth="1.2" />
      <path d="M 40,15 A 10,10 0 0,1 50,15" fill="none" stroke="#16a34a" strokeWidth="1.2" />
    </svg>
  );
}

function RightTriangleClassSvg({ className }: { className?: string }) {
  return (
    <svg width="90" height="80" viewBox="0 0 90 80" className={className}>
      <polygon points="10,70 10,10 80,70" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
      {/* 直角标记 */}
      <polyline points="10,55 25,55 25,70" fill="none" stroke="#2563eb" strokeWidth="1.5" />
    </svg>
  );
}

function ObtuseTriangleSvg({ className }: { className?: string }) {
  return (
    <svg width="90" height="80" viewBox="0 0 90 80" className={className}>
      {/* A(5,12) B(25,70) C(85,70)  角B≈111°为钝角 */}
      <polygon points="5,12 25,70 85,70" fill="#faf5ff" stroke="#7c3aed" strokeWidth="2" />
      {/* 钝角弧标记（在B点，半径14） */}
      <path d="M 39,70 A 14,14 0 0,1 20,57" fill="none" stroke="#7c3aed" strokeWidth="1.5" />
    </svg>
  );
}

function IsoscelesSvg({ className }: { className?: string }) {
  return (
    <svg width="90" height="85" viewBox="0 0 90 85" className={className}>
      <polygon points="45,5 10,75 80,75" fill="#f9fafb" stroke="#334155" strokeWidth="2" />
      {/* 等边标记（左边） */}
      <line x1="23" y1="35" x2="27" y2="42" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="25" y1="35" x2="29" y2="42" stroke="#dc2626" strokeWidth="1.5" />
      {/* 等边标记（右边） */}
      <line x1="63" y1="42" x2="67" y2="35" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="61" y1="42" x2="65" y2="35" stroke="#dc2626" strokeWidth="1.5" />
    </svg>
  );
}

function EquilateralSvg({ className }: { className?: string }) {
  return (
    <svg width="90" height="85" viewBox="0 0 90 85" className={className}>
      <polygon points="45,5 5,75 85,75" fill="#f9fafb" stroke="#334155" strokeWidth="2" />
      {/* 三条边的等边标记 */}
      {/* 左边 */}
      <line x1="21" y1="36" x2="25" y2="43" stroke="#dc2626" strokeWidth="1.5" />
      {/* 右边 */}
      <line x1="65" y1="43" x2="69" y2="36" stroke="#dc2626" strokeWidth="1.5" />
      {/* 底边 */}
      <line x1="42" y1="73" x2="48" y2="73" stroke="#dc2626" strokeWidth="1.5" />
      {/* 60° 角标记 */}
      <text x="45" y="24" textAnchor="middle" fontSize="11" fill="#334155">60°</text>
      <text x="18" y="70" textAnchor="middle" fontSize="11" fill="#334155">60°</text>
      <text x="72" y="70" textAnchor="middle" fontSize="11" fill="#334155">60°</text>
    </svg>
  );
}

function ParallelogramSvg({ className }: { className?: string }) {
  return (
    <svg width="120" height="90" viewBox="0 0 120 90" className={className}>
      <polygon points="30,10 110,10 90,70 10,70" fill="#eff6ff" stroke="#334155" strokeWidth="2" />
      {/* 高（虚线） */}
      <line x1="90" y1="10" x2="90" y2="70" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 3" />
      {/* 平行标记（上边） */}
      <line x1="67" y1="8" x2="73" y2="12" stroke="#334155" strokeWidth="1.5" />
      <line x1="63" y1="8" x2="69" y2="12" stroke="#334155" strokeWidth="1.5" />
      {/* 平行标记（下边） */}
      <line x1="47" y1="68" x2="53" y2="72" stroke="#334155" strokeWidth="1.5" />
      <line x1="43" y1="68" x2="49" y2="72" stroke="#334155" strokeWidth="1.5" />
      {/* 标注 */}
      <text x="50" y="85" textAnchor="middle" fontSize="12" fill="#334155" fontStyle="italic">底</text>
      <text x="97" y="45" fontSize="12" fill="#3b82f6" fontStyle="italic">高</text>
    </svg>
  );
}

function RectangleSvg({ className }: { className?: string }) {
  return (
    <svg width="120" height="90" viewBox="0 0 120 90" className={className}>
      <rect x="10" y="10" width="100" height="60" fill="#f0fdf4" stroke="#334155" strokeWidth="2" />
      {/* 四个直角标记 */}
      <polyline points="10,22 22,22 22,10" fill="none" stroke="#334155" strokeWidth="1.2" />
      <polyline points="98,10 98,22 110,22" fill="none" stroke="#334155" strokeWidth="1.2" />
      <polyline points="110,58 98,58 98,70" fill="none" stroke="#334155" strokeWidth="1.2" />
      <polyline points="22,70 22,58 10,58" fill="none" stroke="#334155" strokeWidth="1.2" />
      {/* 标注 */}
      <text x="60" y="85" textAnchor="middle" fontSize="12" fill="#334155" fontStyle="italic">长</text>
      <text x="2" y="45" textAnchor="end" fontSize="12" fill="#334155" fontStyle="italic">宽</text>
    </svg>
  );
}

function SquareSvg({ className }: { className?: string }) {
  return (
    <svg width="90" height="90" viewBox="0 0 90 90" className={className}>
      <rect x="10" y="10" width="65" height="65" fill="#fefce8" stroke="#334155" strokeWidth="2" />
      {/* 直角标记 */}
      <polyline points="10,22 22,22 22,10" fill="none" stroke="#334155" strokeWidth="1.2" />
      {/* 等边标记（上边） */}
      <line x1="40" y1="8" x2="45" y2="12" stroke="#dc2626" strokeWidth="1.5" />
      {/* 等边标记（右边） */}
      <line x1="73" y1="40" x2="77" y2="45" stroke="#dc2626" strokeWidth="1.5" />
      {/* 等边标记（下边） */}
      <line x1="40" y1="73" x2="45" y2="77" stroke="#dc2626" strokeWidth="1.5" />
      {/* 等边标记（左边） */}
      <line x1="8" y1="40" x2="12" y2="45" stroke="#dc2626" strokeWidth="1.5" />
      {/* 标注 */}
      <text x="42" y="88" textAnchor="middle" fontSize="12" fill="#334155" fontStyle="italic">a</text>
    </svg>
  );
}

function CircleSvg({ className }: { className?: string }) {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" className={className}>
      <circle cx="60" cy="55" r="40" fill="none" stroke="#334155" strokeWidth="2" />
      {/* 半径 */}
      <line x1="60" y1="55" x2="100" y2="55" stroke="#dc2626" strokeWidth="1.5" />
      <circle cx="60" cy="55" r="3" fill="#334155" />
      {/* 标注 */}
      <text x="60" y="50" textAnchor="middle" fontSize="13" fill="#334155" fontWeight="bold">O</text>
      <text x="80" y="50" textAnchor="middle" fontSize="13" fill="#dc2626" fontStyle="italic">r</text>
      {/* 直径虚线 */}
      <line x1="20" y1="55" x2="60" y2="55" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 3" />
      <text x="40" y="68" textAnchor="middle" fontSize="11" fill="#3b82f6">d = 2r</text>
    </svg>
  );
}

export function Geo3dPrereqPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('geo3d-prereq', geo3dPrereqProgressItems);

  return (
    <div>
      <PageHeader
        stage="第七阶段 · 立体几何"
        title="7.0 立体几何前置知识"
        narration={geo3dPrereqNarrations.intro}
        subtitle="从平面到空间——认识基本几何体、学会点线面的语言"
        tags={[
          { label: '难度 ★☆☆☆☆', color: 'green' },
          { label: '高考 15-20 分', color: 'red' },
          { label: '约0.5天', color: 'blue' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="7.0 立体几何前置知识" />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-3 mb-0">
        <p className="font-bold text-gray-800 mb-2">📋 知识地图</p>
        <div className="text-gray-600 grid grid-cols-2 gap-x-4 gap-y-1">
          <button onClick={() => scrollToId('shapes')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">一、平面图形基础</button>
          <button onClick={() => scrollToId('drawing')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">三、画直观图</button>
          <button onClick={() => scrollToId('notation')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">二、点线面的符号</button>
        </div>
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 1: 平面图形基础 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="shapes" className="mb-3 scroll-mt-4">
        <Collapsible title="一、平面图形基础" defaultOpen storageKey="geo3d-prereq:shapes" headerExtra={<SpeakButton text={geo3dPrereqNarrations.shapes} />}>
          <div className="space-y-0 text-lg text-gray-800">

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">为什么先学平面图形？</div>
              <div className="px-3 py-2 space-y-0">
                <p>立体几何中所有几何体的<strong>面</strong>都是平面图形</p>
                <p className="mt-1">棱柱的侧面是<strong>平行四边形</strong>，棱锥的侧面是<strong>三角形</strong>，圆柱圆锥的底面是<strong>圆</strong></p>
                <p className="mt-1">如果平面图形的性质和公式不熟，后面的立体几何就没法算</p>
              </div>
            </div>

            {/* 三角形 */}
            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">三角形（立体几何中出现最多）</div>
              <div className="px-3 py-2 space-y-0">
                <div className="flex items-start gap-3">
                  <TriangleSvg className="shrink-0" />
                  <div>
                    <p><strong>定义</strong>：三条线段首尾相连围成的图形</p>
                    <p className="mt-1"><strong>三个顶点</strong>用大写字母 <MathTex tex="A, B, C" /> 表示</p>
                    <p className="mt-1"><strong>高</strong>：从一个顶点向对边作垂线，垂线段的长度就是高</p>
                  </div>
                </div>

                <div className="mt-2 border-l-4 border-green-400 pl-3">
                  <p><strong>面积公式（必须记住）</strong></p>
                  <p className="mt-1 text-xl"><MathTex tex="S = \dfrac{1}{2} \times \text{底} \times \text{高}" /></p>
                  <p className="mt-1">也就是底乘以高再除以 2</p>
                </div>

                <p className="mt-2 font-bold">三角形的分类（按角分）</p>
                <div className="grid grid-cols-3 gap-2 mt-1">
                  <div className="bg-green-50 rounded-lg p-2 border border-green-200 text-center">
                    <AcuteTriangleSvg className="mx-auto" />
                    <p className="font-bold text-green-700">锐角三角形</p>
                    <p>三个角都小于 <MathTex tex="90°" /></p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-2 border border-blue-200 text-center">
                    <RightTriangleClassSvg className="mx-auto" />
                    <p className="font-bold text-blue-700">直角三角形</p>
                    <p>有一个角等于 <MathTex tex="90°" /></p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-2 border border-purple-200 text-center">
                    <ObtuseTriangleSvg className="mx-auto" />
                    <p className="font-bold text-purple-700">钝角三角形</p>
                    <p>有一个角大于 <MathTex tex="90°" /></p>
                  </div>
                </div>

                <p className="mt-2 font-bold">特殊三角形</p>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  <div className="bg-gray-50 rounded-lg p-2 border border-gray-200 text-center">
                    <IsoscelesSvg className="mx-auto" />
                    <p className="font-bold">等腰三角形</p>
                    <p>两条边相等，两个底角也相等</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2 border border-gray-200 text-center">
                    <EquilateralSvg className="mx-auto" />
                    <p className="font-bold">等边三角形（正三角形）</p>
                    <p>三条边都相等，每个角都是 <MathTex tex="60°" /></p>
                  </div>
                </div>
              </div>
            </div>

            {/* 勾股定理 */}
            <div className="border border-red-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-red-800 border-b border-red-300 bg-red-100 text-lg">勾股定理（超级重要）</div>
              <div className="px-3 py-2 space-y-0">
                <div className="flex items-start gap-3">
                  <RightTriangleSvg className="shrink-0" />
                  <div>
                    <p>在<strong>直角三角形</strong>中，两条直角边的平方和等于斜边的平方</p>
                    <p className="mt-1 text-xl"><MathTex tex="a^2 + b^2 = c^2" /></p>
                    <p className="mt-2"><MathTex tex="a" />、<MathTex tex="b" /> 是两条直角边，<MathTex tex="c" /> 是斜边（最长的那条边，对着直角）</p>
                  </div>
                </div>

                <div className="mt-2 border-l-4 border-red-400 pl-3">
                  <p><strong>用途</strong>：在立体几何中，求距离、求线段长度、求高 几乎都要用勾股定理</p>
                </div>

                <p className="mt-2 font-bold">常见的勾股数（记住能省时间）</p>
                <div className="grid grid-cols-3 gap-2 mt-1">
                  <div className="bg-red-50 rounded-lg p-2 border border-red-200 text-center">
                    <p className="text-xl font-bold"><MathTex tex="3, 4, 5" /></p>
                    <p><MathTex tex="3^2 + 4^2 = 5^2" /></p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-2 border border-red-200 text-center">
                    <p className="text-xl font-bold"><MathTex tex="5, 12, 13" /></p>
                    <p><MathTex tex="5^2 + 12^2 = 13^2" /></p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-2 border border-red-200 text-center">
                    <p className="text-xl font-bold"><MathTex tex="6, 8, 10" /></p>
                    <p>就是 <MathTex tex="3, 4, 5" /> 的 2 倍</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 四边形 */}
            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">四边形</div>
              <div className="px-3 py-2 space-y-0">
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-blue-50 rounded-lg p-2 border border-blue-200 text-center">
                    <ParallelogramSvg className="mx-auto" />
                    <p className="font-bold text-blue-700">平行四边形</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-2 border border-green-200 text-center">
                    <RectangleSvg className="mx-auto" />
                    <p className="font-bold text-green-700">矩形</p>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-2 border border-amber-200 text-center">
                    <SquareSvg className="mx-auto" />
                    <p className="font-bold text-amber-700">正方形</p>
                  </div>
                </div>

                <div className="mt-2 border-l-4 border-amber-400 pl-3">
                  <p><strong>平行四边形</strong>：两组对边分别平行且相等</p>
                  <p className="mt-1">面积 <MathTex tex="= \text{底} \times \text{高}" /></p>
                  <p className="mt-1">棱柱的每个侧面都是平行四边形</p>
                </div>

                <div className="mt-2 border-l-4 border-green-400 pl-3">
                  <p><strong>矩形（长方形）</strong>：四个角都是 <MathTex tex="90°" /> 的平行四边形</p>
                  <p className="mt-1">面积 <MathTex tex="= \text{长} \times \text{宽}" /></p>
                  <p className="mt-1">长方体的每个面都是矩形</p>
                </div>

                <div className="mt-2 border-l-4 border-blue-400 pl-3">
                  <p><strong>正方形</strong>：四条边都相等、四个角都是 <MathTex tex="90°" /></p>
                  <p className="mt-1">面积 <MathTex tex="= \text{边长}^2" /></p>
                  <p className="mt-1">正方体的每个面都是正方形</p>
                </div>
              </div>
            </div>

            {/* 圆 */}
            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-800 border-b border-purple-300 bg-purple-100 text-lg">圆</div>
              <div className="px-3 py-2 space-y-0">
                <div className="flex items-start gap-3">
                  <CircleSvg className="shrink-0" />
                  <div>
                    <p><strong>圆心</strong> <MathTex tex="O" />：圆的正中心</p>
                    <p className="mt-1"><strong>半径</strong> <MathTex tex="r" />：从圆心到圆上任意一点的距离</p>
                    <p className="mt-1"><strong>直径</strong> <MathTex tex="d = 2r" />：穿过圆心的线段，是半径的 2 倍</p>
                  </div>
                </div>

                <div className="mt-2 border-l-4 border-purple-400 pl-3">
                  <p><strong>周长</strong>（圆的一圈有多长）</p>
                  <p className="mt-1 text-xl"><MathTex tex="C = 2\pi r" /></p>
                </div>

                <div className="mt-2 border-l-4 border-purple-400 pl-3">
                  <p><strong>面积</strong>（圆盖住的面积有多大）</p>
                  <p className="mt-1 text-xl"><MathTex tex="S = \pi r^2" /></p>
                </div>

                <div className="mt-2 border-l-4 border-blue-400 pl-3">
                  <p><strong>在立体几何中的用途</strong></p>
                  <p className="mt-1">圆柱的底面是圆，求表面积需要用 <MathTex tex="\pi r^2" /></p>
                  <p className="mt-1">圆锥的底面也是圆，侧面展开是扇形</p>
                  <p className="mt-1">球的表面积和体积公式也跟 <MathTex tex="\pi" /> 和 <MathTex tex="r" /> 有关</p>
                </div>
              </div>
            </div>

            {/* 公式速查 */}
            <div className="border border-gray-300 rounded overflow-hidden" style={{ breakInside: 'avoid' }}>
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">公式速查表</div>
              <div className="px-3 py-2 space-y-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-center">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="py-1 text-left pl-2">图形</th>
                        <th className="py-1">面积公式</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-left pl-2 font-bold">三角形</td>
                        <td className="py-1"><MathTex tex="S = \dfrac{1}{2} \times \text{底} \times \text{高}" /></td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-left pl-2 font-bold">平行四边形</td>
                        <td className="py-1"><MathTex tex="S = \text{底} \times \text{高}" /></td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-left pl-2 font-bold">矩形</td>
                        <td className="py-1"><MathTex tex="S = \text{长} \times \text{宽}" /></td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-left pl-2 font-bold">正方形</td>
                        <td className="py-1"><MathTex tex="S = \text{边长}^2" /></td>
                      </tr>
                      <tr>
                        <td className="py-1 text-left pl-2 font-bold">圆</td>
                        <td className="py-1"><MathTex tex="S = \pi r^2" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-2 font-bold">勾股定理（直角三角形专用）：<MathTex tex="a^2 + b^2 = c^2" /></p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 2: 点线面的符号 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="notation" className="mb-3 scroll-mt-4">
        <Collapsible title="二、点线面的符号表示" defaultOpen storageKey="geo3d-prereq:notation" headerExtra={<SpeakButton text={geo3dPrereqNarrations.notation} />}>
          <div className="space-y-0 text-lg text-gray-800">

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">三个基本元素</div>
              <div className="px-3 py-2 space-y-0">
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-blue-50 rounded-lg p-2 border border-blue-200 text-center">
                    <p className="font-bold text-blue-700 text-xl">点</p>
                    <p>用大写字母</p>
                    <p><MathTex tex="A, B, C, P" /></p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-2 border border-green-200 text-center">
                    <p className="font-bold text-green-700 text-xl">直线</p>
                    <p>用两个大写字母或小写字母</p>
                    <p><MathTex tex="AB,\; l,\; m" /></p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-2 border border-purple-200 text-center">
                    <p className="font-bold text-purple-700 text-xl">平面</p>
                    <p>用希腊字母</p>
                    <p><MathTex tex="\alpha,\; \beta,\; \gamma" /></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">位置关系符号</div>
              <div className="px-3 py-2 space-y-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-center">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="py-1 text-left pl-2">符号</th>
                        <th className="py-1">含义</th>
                        <th className="py-1">例子</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-left pl-2"><MathTex tex="\in" /></td>
                        <td className="py-1">点属于（在……上）</td>
                        <td className="py-1"><MathTex tex="A \in l" /> 点 A 在直线 l 上</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-left pl-2"><MathTex tex="\notin" /></td>
                        <td className="py-1">点不属于</td>
                        <td className="py-1"><MathTex tex="A \notin \alpha" /> 点 A 不在平面 <MathTex tex="\alpha" /> 上</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-left pl-2"><MathTex tex="\subset" /></td>
                        <td className="py-1">线在面内</td>
                        <td className="py-1"><MathTex tex="l \subset \alpha" /> 直线 l 在平面 <MathTex tex="\alpha" /> 内</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-left pl-2"><MathTex tex="\parallel" /></td>
                        <td className="py-1">平行</td>
                        <td className="py-1"><MathTex tex="l \parallel m" /> 或 <MathTex tex="\alpha \parallel \beta" /></td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-left pl-2"><MathTex tex="\perp" /></td>
                        <td className="py-1">垂直</td>
                        <td className="py-1"><MathTex tex="l \perp \alpha" /> 直线 l 垂直于平面 <MathTex tex="\alpha" /></td>
                      </tr>
                      <tr>
                        <td className="py-1 text-left pl-2"><MathTex tex="\cap" /></td>
                        <td className="py-1">交（相交）</td>
                        <td className="py-1"><MathTex tex="\alpha \cap \beta = l" /> 两个平面交于直线 l</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">点线面的位置关系（全部情况）</div>
              <div className="px-3 py-2 space-y-0">
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-blue-50 rounded-lg p-2 border border-blue-200">
                    <p className="font-bold text-blue-700 text-center">线与线</p>
                    <p className="mt-1">① 平行</p>
                    <p>② 相交（有公共点）</p>
                    <p>③ <strong>异面</strong>（不平行也不相交）</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-2 border border-green-200">
                    <p className="font-bold text-green-700 text-center">线与面</p>
                    <p className="mt-1">① 线在面内</p>
                    <p>② 线与面平行</p>
                    <p>③ 线与面相交</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-2 border border-purple-200">
                    <p className="font-bold text-purple-700 text-center">面与面</p>
                    <p className="mt-1">① 平行</p>
                    <p>② 相交</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-1">
                  <DebugGeo3dSvg data={skewLinesDiagram} width={120} height={100} className="shrink-0" />
                  <p><strong>"异面直线"</strong>是空间特有的概念——两条直线既不平行也不相交（不在同一个平面内）</p>
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 3: 画直观图 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="drawing" className="mb-3 scroll-mt-4">
        <Collapsible title="三、画直观图（斜二测画法）" defaultOpen storageKey="geo3d-prereq:drawing" headerExtra={<SpeakButton text={geo3dPrereqNarrations.drawing} />}>
          <div className="space-y-0 text-lg text-gray-800">

            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">先回忆：平面直角坐标系</div>
              <div className="px-3 py-2 space-y-0">
                <div className="flex items-start gap-3">
                  <DebugGeo3dSvg data={planeAxesDiagram} width={100} height={100} className="shrink-0" />
                  <div>
                    <p>初中学过的坐标系只有两个轴：</p>
                    <p className="mt-1"><strong>x 轴</strong>（水平）和 <strong>y 轴</strong>（竖直），能表示平面上的点</p>
                    <p className="mt-1">但平面坐标系画不了立体图形，所以需要加一个<strong>深度方向</strong></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">斜二测画法：从 2D 到 3D</div>
              <div className="px-3 py-2 space-y-0">
                <div className="flex items-start gap-3">
                  <DebugGeo3dSvg data={obliqueAxesDiagram} width={120} height={110} className="shrink-0" />
                  <p>在平面坐标系基础上，加一条 y 轴表示深度（朝左下 <MathTex tex="45°" />，长度取一半），原来的 y 轴变成 z 轴：</p>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-1">
                  <div className="bg-blue-50 rounded-lg p-2 border border-blue-200 text-center">
                    <p className="font-bold text-blue-700">x 轴</p>
                    <p>水平方向</p>
                    <p className="font-bold">长度不变</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-2 border border-green-200 text-center">
                    <p className="font-bold text-green-700">y 轴</p>
                    <p>与 x 轴成 <MathTex tex="45°" /></p>
                    <p className="font-bold">长度取一半</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-2 border border-purple-200 text-center">
                    <p className="font-bold text-purple-700">z 轴</p>
                    <p>竖直方向</p>
                    <p className="font-bold">长度不变</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">画图步骤（以长方体为例）</div>
              <div className="px-3 py-2 space-y-0">
                <p><strong>第 1 步</strong>：画底面——先画一个平行四边形（x 方向原长，y 方向取半，<MathTex tex="45°" /> 斜向右上）</p>
                <p className="mt-1"><strong>第 2 步</strong>：画高——从底面四个顶点向上画竖直线，长度不变</p>
                <p className="mt-1"><strong>第 3 步</strong>：连接顶面——连接四条竖线的顶端</p>
                <p className="mt-1"><strong>第 4 步</strong>：虚线——被遮挡看不见的棱画成虚线</p>
                <div className="flex justify-center mt-2">
                  <Geo3dSvg shape={{ type: 'prism', n: 4 }} width={140} height={120} />
                </div>
              </div>
            </div>

            <div className="border border-red-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-red-800 border-b border-red-300 bg-red-100 text-lg">高考中画图的作用</div>
              <div className="px-3 py-2 space-y-0">
                <p>高考不会专门考"画直观图"，但你需要：</p>
                <p className="mt-1">① <strong>看懂题目配图</strong>（知道哪些面是底面、哪些棱互相平行）</p>
                <p className="mt-1">② <strong>自己画草图辅助思考</strong>（建立坐标系时需要画图）</p>
                <p className="mt-1">③ <strong>区分实线和虚线</strong>（虚线表示看不见的棱，解题时容易忽略）</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      </LessonLayout>
      <Geo3dDebugToggle />
    </div>
  );
}
