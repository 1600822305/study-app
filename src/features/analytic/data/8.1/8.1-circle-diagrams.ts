import type { Diagram2DData } from '@/components/shared/Geo2dSvg';

/* ── 标准方程示意图：圆心 C(a,b)，半径 r，虚线投影到坐标轴 ── */
export const circleStandardDiagram: Diagram2DData = {
  name: '标准方程',
  vertices: [
    [12, 135],   // 0: x轴左端
    [198, 135],  // 1: x轴右端
    [40, 160],   // 2: y轴下端
    [40, 8],     // 3: y轴上端
    [125, 83],   // 4: 圆心 C(a,b)
    [125, 135],  // 5: a（圆心在x轴的投影）
    [40, 83],    // 6: b（圆心在y轴的投影）
    [158, 51],   // 7: P（圆上一点）
  ],
  edges: [
    { from: 0, to: 1, arrow: 'end', color: '#334155', strokeWidth: 1.5 },
    { from: 2, to: 3, arrow: 'end', color: '#334155', strokeWidth: 1.5 },
    { from: 4, to: 5, dashed: true, color: '#94a3b8', strokeWidth: 1.2 },
    { from: 4, to: 6, dashed: true, color: '#94a3b8', strokeWidth: 1.2 },
    { from: 4, to: 7, color: '#2563eb', strokeWidth: 2 },
  ],
  polygons: [],
  circles: [
    { center: [125, 83], radius: 46, color: '#2563eb', strokeWidth: 2 },
  ],
  freeLabels: [
    { pos: [198, 135], text: 'x', offset: [0, -14], color: '#334155' },
    { pos: [40, 8], text: 'y', offset: [14, 5], color: '#334155' },
    { pos: [40, 135], text: 'O', offset: [-14, 14], color: '#334155' },
    { pos: [125, 83], text: 'C(a, b)', offset: [-12, -15], fontSize: 13, color: '#2563eb', dot: '#2563eb' },
    { pos: [125, 135], text: 'a', offset: [0, 14], fontSize: 14, color: '#059669', dot: true },
    { pos: [40, 83], text: 'b', offset: [-14, 0], fontSize: 14, color: '#059669', dot: true },
    { pos: [158, 51], text: 'P(x, y)', offset: [13, -13], fontSize: 12, color: '#dc2626', dot: '#dc2626' },
    { pos: [142, 67], tex: 'r', offset: [-7, 22], fontSize: 15, color: '#2563eb' },
  ],
};

/* ── 点与圆三种位置关系合图 ──
 * 圆心 C(85,65) r=50
 * P₁绿(85,95) 圆内 dist=30  P₂蓝(135,65) 圆上 dist=50  P₃红(146,30) 圆外 dist≈70 ── */
export const circlePointAllDiagram: Diagram2DData = {
  name: '点与圆三种位置关系',
  vertices: [
    [85,  65],   // 0: C
    [85,  95],   // 1: P（圆内）
    [135, 65],   // 2: P（圆上）
    [146, 30],   // 3: P（圆外）
  ],
  edges: [
    { from: 0, to: 1, color: '#16a34a', strokeWidth: 1.5 },
    { from: 0, to: 2, color: '#2563eb', strokeWidth: 1.5 },
    { from: 0, to: 3, color: '#dc2626', strokeWidth: 1.5 },
  ],
  polygons: [],
  circles: [
    { center: [85, 65], radius: 50, color: '#2563eb', strokeWidth: 1.8 },
  ],
  freeLabels: [
    { pos: [85,  65],  text: 'C', offset: [-12, 4],  fontSize: 12, color: '#334155', dot: '#334155' },
    { pos: [85,  95],  text: 'P', offset: [10,  1],  fontSize: 12, color: '#16a34a', dot: '#16a34a' },
    { pos: [135, 65],  text: 'P', offset: [8,   0],  fontSize: 12, color: '#2563eb', dot: '#2563eb' },
    { pos: [146, 30],  text: 'P', offset: [-4, -8],  fontSize: 12, color: '#dc2626', dot: '#dc2626' },
    { pos: [85,  95],  tex: 'd^2 < r^2', offset: [0,  30], fontSize: 14, color: '#16a34a' },
    { pos: [135, 65],  tex: 'd^2 = r^2', offset: [32, 11], fontSize: 14, color: '#2563eb' },
    { pos: [146, 30],  tex: 'd^2 > r^2', offset: [34,  0], fontSize: 14, color: '#dc2626' },
  ],
};

/* ── 直线与圆：相离（d > r）──
 * 圆心(55,83), r=35, 圆顶y=48; 直线y=10, d=73>35
 * d标签放在 y=29（直线 y=10 与圆顶 y=48 之间）── */
export const circleLineApartDiagram: Diagram2DData = {
  name: 'circle-line-apart',
  vertices: [
    [55, 83],  // 0 圆心 C
    [55, 10],  // 1 垂足
  ],
  edges: [
    { from: 0, to: 1, dashed: true, color: '#94a3b8', strokeWidth: 1.5 },
  ],
  polygons: [],
  circles: [
    { center: [55, 83], radius: 35, color: '#2563eb', strokeWidth: 2 },
  ],
  paths: [
    { d: 'M 5,10 L 108,10', color: '#dc2626', strokeWidth: 2 },
  ],
  freeLabels: [
    { pos: [55, 83], text: 'C', offset: [-12,  4], fontSize: 12, color: '#334155', dot: '#334155' },
    { pos: [55, 29], text: 'd', offset: [7,   0], fontSize: 13, color: '#059669' },
    { pos: [108, 10], text: 'l', offset: [4,   0], fontSize: 12, color: '#dc2626' },
  ],
};

/* ── 直线与圆：相切（d = r）──
 * 圆心(55,73), r=35, 圆顶y=38; 直线y=38（切点即圆顶）── */
export const circleLineTangentDiagram: Diagram2DData = {
  name: 'circle-line-tangent',
  vertices: [
    [55, 73],  // 0 圆心 C
    [55, 38],  // 1 切点 T
  ],
  edges: [
    { from: 0, to: 1, color: '#059669', strokeWidth: 1.8 },
  ],
  polygons: [],
  circles: [
    { center: [55, 73], radius: 35, color: '#2563eb', strokeWidth: 2 },
  ],
  paths: [
    { d: 'M 5,38 L 108,38', color: '#dc2626', strokeWidth: 2 },
  ],
  freeLabels: [
    { pos: [55, 73], text: 'C', offset: [-12,  4], fontSize: 12, color: '#334155', dot: '#334155' },
    { pos: [55, 38], text: 'T', offset: [8,  -8], fontSize: 12, color: '#059669', dot: '#059669' },
    { pos: [55, 55], text: 'd=r', offset: [8,   0], fontSize: 11, color: '#059669' },
    { pos: [108, 38], text: 'l', offset: [4,   0], fontSize: 12, color: '#dc2626' },
  ],
};

/* ── 直线与圆：相交（d < r）──
 * 圆心(55,75), r=35, 直线y=52, d=23<35
 * 交点: x=55±√(1225-529)=55±26 → (29,52) and (81,52)── */
export const circleLineIntersectDiagram: Diagram2DData = {
  name: 'circle-line-intersect',
  vertices: [
    [55, 75],  // 0 圆心 C
    [55, 52],  // 1 垂足
    [29, 52],  // 2 交点 A
    [81, 52],  // 3 交点 B
  ],
  edges: [
    { from: 0, to: 1, dashed: true, color: '#94a3b8', strokeWidth: 1.5 },
  ],
  polygons: [],
  circles: [
    { center: [55, 75], radius: 35, color: '#2563eb', strokeWidth: 2 },
  ],
  paths: [
    { d: 'M 5,52 L 108,52', color: '#dc2626', strokeWidth: 2 },
  ],
  freeLabels: [
    { pos: [55, 75], text: 'C', offset: [6,   6], fontSize: 12, color: '#334155', dot: '#334155' },
    { pos: [55, 63], text: 'd', offset: [6,   0], fontSize: 11, color: '#94a3b8' },
    { pos: [29, 52], text: 'A', offset: [-12, -8], fontSize: 12, color: '#059669', dot: '#059669' },
    { pos: [81, 52], text: 'B', offset: [6,  -8], fontSize: 12, color: '#059669', dot: '#059669' },
    { pos: [108, 52], text: 'l', offset: [4,   0], fontSize: 12, color: '#dc2626' },
  ],
};

/* ── 一般方程示意图：圆心由 −D/2、−E/2 确定，半径由公式计算 ── */
export const circleGeneralDiagram: Diagram2DData = {
  name: '一般方程',
  vertices: [
    [12, 135],   // 0: x轴左端
    [198, 135],  // 1: x轴右端
    [40, 160],   // 2: y轴下端
    [40, 8],     // 3: y轴上端
    [125, 83],   // 4: 圆心 C
    [125, 135],  // 5: -D/2（x轴投影）
    [40, 83],    // 6: -E/2（y轴投影）
    [158, 51],   // 7: 圆上一点
  ],
  edges: [
    { from: 0, to: 1, arrow: 'end', color: '#334155', strokeWidth: 1.5 },
    { from: 2, to: 3, arrow: 'end', color: '#334155', strokeWidth: 1.5 },
    { from: 4, to: 5, dashed: true, color: '#94a3b8', strokeWidth: 1.2 },
    { from: 4, to: 6, dashed: true, color: '#94a3b8', strokeWidth: 1.2 },
    { from: 4, to: 7, color: '#16a34a', strokeWidth: 2 },
  ],
  polygons: [],
  circles: [
    { center: [125, 83], radius: 46, color: '#16a34a', strokeWidth: 2 },
  ],
  freeLabels: [
    { pos: [198, 135], text: 'x', offset: [0, -14], color: '#334155' },
    { pos: [40, 8], text: 'y', offset: [14, 5], color: '#334155' },
    { pos: [40, 135], text: 'O', offset: [-14, 14], color: '#334155' },
    { pos: [125, 83], text: 'C', offset: [-10, -16], fontSize: 13, color: '#16a34a', dot: '#16a34a' },
    { pos: [125, 135], tex: '-\\tfrac{D}{2}', offset: [0, 16], fontSize: 12, color: '#059669', dot: true },
    { pos: [40, 83], tex: '-\\tfrac{E}{2}', offset: [-36, 0], fontSize: 12, color: '#059669', dot: true },
    { pos: [158, 51], text: 'P(x, y)', offset: [8, -8], fontSize: 12, color: '#dc2626', dot: '#dc2626' },
    { pos: [142, 67], tex: 'r', offset: [-10, 0], fontSize: 15, color: '#16a34a' },
  ],
};

/* ── 三点在圆上，两条中垂线交于圆心 ──
 * 圆心 O(65,70), r=45
 * A(28,45) B(102,45) C(50,112) 均在圆上
 * AB中垂线: 竖直 x=65 (红)
 * AC中垂线: 斜线过(93,61)→(19,86) (绿) ── */
export const circleChordBisectorDiagram: Diagram2DData = {
  name: 'circle-chord-bisector',
  vertices: [
    [65, 70],   // 0: center O
    [28, 45],   // 1: A (on circle)
    [65, 45],   // 2: midpoint of AB
    [102, 45],  // 3: B (on circle)
    [65, 12],   // 4: top of AB perp bisector
    [65, 120],  // 5: bottom of AB perp bisector
    [50, 112],  // 6: C (on circle, lower-left)
    [39, 79],   // 7: midpoint of AC
    [93, 61],   // 8: one end of AC perp bisector
    [19, 86],   // 9: other end of AC perp bisector
  ],
  edges: [
    { from: 1, to: 3 },
    { from: 1, to: 6 },
    { from: 4, to: 5, dashed: true, color: '#dc2626', strokeWidth: 1.5 },
    { from: 8, to: 9, dashed: true, color: '#15803d', strokeWidth: 1.5 },
  ],
  polygons: [],
  circles: [
    { center: [65, 70], radius: 45, color: '#2563eb', strokeWidth: 2 },
  ],
  freeLabels: [
    { pos: [65, 70], text: 'O', offset: [8, 3], fontSize: 12, color: '#334155', dot: '#334155' },
    { pos: [28, 45], text: 'A', offset: [-14, 0], fontSize: 12, color: '#334155', dot: '#334155' },
    { pos: [102, 45], text: 'B', offset: [8, 0], fontSize: 12, color: '#334155', dot: '#334155' },
    { pos: [50, 112], text: 'C', offset: [-14, 6], fontSize: 12, color: '#334155', dot: '#334155' },
  ],
  rightAngles: [
    { vertex: 2, from: 1, to: 4 },
    { vertex: 7, from: 1, to: 8 },
  ],
};

/* ── 例题3 步一：最小圆 = 以PQ为直径的圆 ──
 * scale=32px/unit, C(3,4)→SVG(73,73)
 * P(4,3)→(106,106)  Q(2,5)→(40,40)  r=√2→SVG 45 ── */
export const circleEx3Step1Diagram: Diagram2DData = {
  name: 'ex3-step1',
  vertices: [
    [80, 82],  // 0: P(4,3)
    [33, 35],  // 1: Q(2,5)
    [57, 59],  // 2: C(3,4) center
  ],
  edges: [
    { from: 0, to: 1 },
  ],
  polygons: [],
  circles: [
    { center: [57, 59], radius: 33, color: '#2563eb', strokeWidth: 2 },
  ],
  freeLabels: [
    { pos: [80, 82], text: 'P', offset: [8, 5],   fontSize: 12, color: '#334155', dot: '#334155' },
    { pos: [33, 35], text: 'Q', offset: [-14, 0], fontSize: 12, color: '#334155', dot: '#334155' },
    { pos: [57, 59], text: 'C', offset: [9, -6],  fontSize: 12, color: '#334155', dot: '#334155' },
    { pos: [68, 70], tex: '\\sqrt{2}', offset: [-9, 7], fontSize: 11, color: '#059669' },
  ],
};

/* ── 例题3 步二：O在圆外，|OC|=5 ──
 * scale=22px/unit, O(0,0)→SVG(15,155)
 * C(3,4)→(81,67)  r=√2→31 ── */
export const circleEx3Step2Diagram: Diagram2DData = {
  name: 'ex3-step2',
  vertices: [
    [16, 106],  // 0: O(0,0)
    [63, 45],   // 1: C(3,4)
  ],
  edges: [
    { from: 0, to: 1, dashed: true, color: '#059669', strokeWidth: 1.5 },
  ],
  polygons: [],
  circles: [
    { center: [63, 45], radius: 32, color: '#2563eb', strokeWidth: 2 },
  ],
  freeLabels: [
    { pos: [16, 106], text: 'O', offset: [9, 2],   fontSize: 12, color: '#334155', dot: '#334155' },
    { pos: [63, 45],  text: 'C', offset: [8, 5],   fontSize: 12, color: '#334155', dot: '#334155' },
    { pos: [40, 76],  text: '5', offset: [-10, 0], fontSize: 12, color: '#059669' },
  ],
};

/* ── 例题3 步三：M_近 和 M_远 的位置 ──
 * 同坐标系 scale=22px/unit，O→C方向单位向量(0.6,-0.8)
 * M_近=C-r*u=(62,92)  M_远=C+r*u=(100,42) ── */
export const circleEx3Step3Diagram: Diagram2DData = {
  name: 'ex3-step3',
  vertices: [
    [14,  96],   // 0: O
    [56,  40],   // 1: C
    [39,  63],   // 2: M_近（最近点）
    [73,  16],   // 3: M_远（最远点）
  ],
  edges: [
    { from: 0, to: 3 },
  ],
  polygons: [],
  circles: [
    { center: [56, 40], radius: 29, color: '#2563eb', strokeWidth: 2 },
  ],
  freeLabels: [
    { pos: [14,  96],  text: 'O',     offset: [10, 1],   fontSize: 12, color: '#334155', dot: '#334155' },
    { pos: [56,  40],  text: 'C',     offset: [8, 5],    fontSize: 12, color: '#334155', dot: '#334155' },
    { pos: [39,  63],  tex: 'M_{近}', offset: [-24, 8],  fontSize: 11, color: '#dc2626', dot: '#dc2626' },
    { pos: [73,  16],  tex: 'M_{远}', offset: [5, -8],   fontSize: 11, color: '#dc2626', dot: '#dc2626' },
  ],
};


/* ── 弦长公式示意图：圆心C，弦AB，垂线CH（垂径定理）──
 * C(80,90) r=55, 弦线 y=42, d=48
 * A(48,42) B(112,42) H(80,42) ── */
export const circleChordLengthDiagram: Diagram2DData = {
  name: 'chord-length',
  vertices: [
    [80,  90],  // 0: C（圆心）
    [48,  42],  // 1: A（左交点）
    [112, 42],  // 2: B（右交点）
    [80,  42],  // 3: H（垂足）
  ],
  edges: [
    { from: 1, to: 2, color: '#dc2626', strokeWidth: 2 },
    { from: 0, to: 3, dashed: true, color: '#059669', strokeWidth: 1.5 },
    { from: 0, to: 1, dashed: true, color: '#2563eb', strokeWidth: 1.5 },
  ],
  polygons: [],
  circles: [
    { center: [80, 90], radius: 55, color: '#2563eb', strokeWidth: 1.8 },
  ],
  rightAngles: [
    { vertex: 3, from: 0, to: 1, size: 8 },
  ],
  freeLabels: [
    { pos: [80,  90],  text: 'C', offset: [6, 5],    fontSize: 12, color: '#334155', dot: '#334155' },
    { pos: [48,  42],  text: 'A', offset: [-8, -12], fontSize: 12, color: '#dc2626', dot: '#dc2626' },
    { pos: [112, 42],  text: 'B', offset: [6, -12],  fontSize: 12, color: '#dc2626', dot: '#dc2626' },
    { pos: [80,  42],  text: 'H', offset: [-2, -15], fontSize: 12, color: '#334155', dot: '#334155' },
    { pos: [80,  66],  text: 'd', offset: [5, 0],    fontSize: 12, color: '#059669' },
    { pos: [64,  66],  text: 'r', offset: [-12, 5],  fontSize: 12, color: '#2563eb' },
  ],
};

/* ── 过两点最小圆：以 AB 为直径 ── */
export const circleMinDiagram: Diagram2DData = {
  name: '过两点最小圆',
  vertices: [
    [18,  56],  // 0: A（左端）
    [117, 56],  // 1: B（右端）
    [68,  56],  // 2: C（圆心 = AB 中点）
  ],
  edges: [
    { from: 0, to: 1, color: '#475569', strokeWidth: 1.5 },
  ],
  polygons: [],
  circles: [
    { center: [68, 56], radius: 50, color: '#2563eb', strokeWidth: 2 },
  ],
  freeLabels: [
    { pos: [18,  56],  text: 'A', offset: [-14, 0],  fontSize: 13, color: '#dc2626', dot: '#dc2626' },
    { pos: [117, 56],  text: 'B', offset: [8,   0],  fontSize: 13, color: '#dc2626', dot: '#dc2626' },
    { pos: [68,  56],  text: 'C', offset: [0,  -14], fontSize: 13, color: '#334155', dot: '#334155' },
    { pos: [68,  56],  tex: 'r',  offset: [14,  22], fontSize: 12, color: '#2563eb' },
  ],
  tickMarks: [
    { from: 2, to: 0, count: 1, color: '#059669' },
    { from: 2, to: 1, count: 1, color: '#059669' },
  ],
};

/* ── 点到圆上各点距离范围：O在左下，M远在右上，对角线布局 ── */
export const circleDistRangeDiagram: Diagram2DData = {
  name: '点到圆上距离范围',
  vertices: [
    [81,  47],  // 0: C 圆心
    [23, 110],  // 1: O 外部点（左下）
    [64,  65],  // 2: M近（靠近O一侧）
    [98,  28],  // 3: M远（远离O一侧）
  ],
  edges: [
    { from: 1, to: 3, color: '#475569', strokeWidth: 1.5 },
  ],
  polygons: [],
  circles: [
    { center: [81, 47], radius: 25, color: '#2563eb', strokeWidth: 1.8 },
  ],
  freeLabels: [
    { pos: [81,  47], text: 'C',   offset: [5,   6],  fontSize: 13, color: '#334155', dot: '#334155' },
    { pos: [23, 110], text: 'P',   offset: [10,  2],  fontSize: 13, color: '#dc2626', dot: '#dc2626' },
    { pos: [64,  65], text: 'M近', offset: [-19, 2],  fontSize: 12, color: '#16a34a', dot: '#16a34a' },
    { pos: [98,  28], text: 'M远', offset: [6,  -8],  fontSize: 12, color: '#7c3aed', dot: '#7c3aed' },
  ],
};

/* ── 切线⊥半径示意图（缩小30%）──
 * C(53,53) r=32, 切点P(75,31)（CP=(22,-22)，切线方向(25,25)）
 * 端点L(50,6) R(100,56)，CP·PR=22×25+(-22)×25=0 ✓ ── */
export const circleTangentDiagram: Diagram2DData = {
  name: 'tangent-property',
  vertices: [
    [53,  53],  // 0: C（圆心）
    [75,  31],  // 1: P（切点）
    [100, 56],  // 2: 切线右端
    [50,   6],  // 3: 切线左端
  ],
  edges: [
    { from: 0, to: 1, dashed: true, color: '#2563eb', strokeWidth: 1.5 },
    { from: 3, to: 2, color: '#dc2626', strokeWidth: 2 },
  ],
  polygons: [],
  circles: [
    { center: [53, 53], radius: 32, color: '#2563eb', strokeWidth: 1.8 },
  ],
  rightAngles: [
    { vertex: 1, from: 0, to: 2, size: 6 },
  ],
  freeLabels: [
    { pos: [53,  53], text: 'C', offset: [-12, 4],  fontSize: 11, color: '#334155', dot: '#334155' },
    { pos: [75,  31], text: 'P', offset: [6, -11],  fontSize: 11, color: '#dc2626', dot: '#dc2626' },
    { pos: [64,  42], text: 'r', offset: [-9,  -4], fontSize: 10, color: '#2563eb' },
    { pos: [75,  43], text: '⊥', offset: [-2,   3], fontSize: 12, color: '#059669' },
    { pos: [100, 56], text: 'l', offset: [5,    0], fontSize: 11, color: '#dc2626' },
  ],
};

/* ── 求切线方程情况1：圆上点P，切线示意图（通用） ──
 * scale=8.4, C(70,84) r=42, P(95,50), 切线端L(56,21) R(134,80) ── */
export const circleTangentOnPointDiagram: Diagram2DData = {
  name: 'tangent-on-point',
  vertices: [
    [70,  84],  // 0: C（圆心）
    [95,  50],  // 1: P（切点）
    [134, 80],  // 2: 切线右端
    [56,  21],  // 3: 切线左端
  ],
  edges: [
    { from: 3, to: 2, color: '#dc2626', strokeWidth: 1.8 },
    { from: 0, to: 1, dashed: true, color: '#2563eb', strokeWidth: 1.5 },
  ],
  polygons: [],
  circles: [
    { center: [70, 84], radius: 42, color: '#2563eb', strokeWidth: 1.8 },
  ],
  rightAngles: [
    { vertex: 1, from: 0, to: 2, size: 8 },
  ],
  freeLabels: [
    { pos: [70, 84], text: 'C', offset: [-13, 5],  fontSize: 12, color: '#334155', dot: '#334155' },
    { pos: [95, 50], text: 'P', offset: [7,  -12], fontSize: 12, color: '#dc2626', dot: '#dc2626' },
  ],
};

/* ── 切线公式推导示意图：圆心C原点，圆上点T(m,n)，切线⊥半径CT ──
 * C(58,78) r=36, T(88,54), 切线左端(52,16) 右端(115,92) ── */
export const circleTangentFormulaDiagram: Diagram2DData = {
  name: 'tangent-formula-derivation',
  vertices: [
    [58,  78],  // 0: C（圆心）
    [88,  54],  // 1: T（切点）
    [115, 92],  // 2: 切线右端
    [52,  16],  // 3: 切线左端
  ],
  edges: [
    { from: 3, to: 2, color: '#dc2626', strokeWidth: 1.8 },
    { from: 0, to: 1, dashed: true, color: '#2563eb', strokeWidth: 1.5 },
  ],
  polygons: [],
  circles: [
    { center: [58, 78], radius: 36, color: '#2563eb', strokeWidth: 1.8 },
  ],
  rightAngles: [
    { vertex: 1, from: 0, to: 2, size: 7 },
  ],
  freeLabels: [
    { pos: [58, 78], text: 'C', offset: [-13, 5],  fontSize: 12, color: '#334155', dot: '#334155' },
    { pos: [88, 54], text: 'T(m,n)', offset: [7, -12], fontSize: 11, color: '#dc2626', dot: '#dc2626' },
    { pos: [73, 66], text: 'r', offset: [-9, -4],  fontSize: 11, color: '#2563eb' },
  ],
};

/* ── 弦中点求直线示意图：圆心C，弦AB，中点M，CM⊥AB ──
 * C(78,82) r=39, A(40,73) B(80,43) M(60,58) ── */
export const circleMidchordDiagram: Diagram2DData = {
  name: 'chord-midpoint',
  vertices: [
    [62, 66],  // 0: C（圆心）
    [32, 58],  // 1: A（弦左端）
    [64, 34],  // 2: B（弦右端）
    [48, 46],  // 3: M（中点）
  ],
  edges: [
    { from: 1, to: 2, color: '#dc2626', strokeWidth: 2 },
    { from: 0, to: 3, dashed: true, color: '#059669', strokeWidth: 1.5 },
  ],
  polygons: [],
  circles: [
    { center: [62, 66], radius: 31, color: '#2563eb', strokeWidth: 1.8 },
  ],
  rightAngles: [
    { vertex: 3, from: 0, to: 2, size: 6 },
  ],
  freeLabels: [
    { pos: [62, 66], text: 'C', offset: [5, 6],    fontSize: 12, color: '#334155', dot: '#334155' },
    { pos: [32, 58], text: 'A', offset: [-11, 0],  fontSize: 12, color: '#dc2626', dot: '#dc2626' },
    { pos: [64, 34], text: 'B', offset: [5, -8],   fontSize: 12, color: '#dc2626', dot: '#dc2626' },
    { pos: [48, 46], text: 'M', offset: [-11, -6], fontSize: 12, color: '#334155', dot: '#334155' },
  ],
};

/* ── 圆与圆五种位置关系示意图（canvas 130×105）
 * 红=O₁圆及其半径/标签, 蓝=O₂圆及其半径/标签, 灰=圆心距d ── */
export const circleCircle5Diagrams: Diagram2DData[] = [
  /* 外离: d > r+R */
  {
    name: 'cc-apart',
    vertices: [
      [30, 57],   // 0: O₁
      [15, 42],   // 1: r endpoint (↖)
      [98, 57],   // 2: O₂
      [117, 38],  // 3: R endpoint (↗)
    ],
    edges: [
      { from: 0, to: 1, color: '#dc2626', strokeWidth: 1.5 },
      { from: 2, to: 3, color: '#2563eb', strokeWidth: 1.5 },
      { from: 0, to: 2, color: '#059669', strokeWidth: 1.5 },
    ],
    polygons: [],
    circles: [
      { center: [30, 57], radius: 21, color: '#dc2626', strokeWidth: 1.8 },
      { center: [98, 57], radius: 27, color: '#2563eb', strokeWidth: 1.8 },
    ],
    freeLabels: [
      { pos: [30, 57], tex: 'O_1', offset: [2, 11],  fontSize: 11, color: '#dc2626', dot: '#dc2626' },
      { pos: [98, 57], tex: 'O_2', offset: [2, 10],  fontSize: 11, color: '#2563eb', dot: '#2563eb' },
      { pos: [22, 49], tex: 'r',   offset: [-6, 3],  fontSize: 11, color: '#dc2626' },
      { pos: [108, 47], tex: 'R',  offset: [5, 5],   fontSize: 11, color: '#2563eb' },
      { pos: [64, 57], tex: 'd',   offset: [0, -9],  fontSize: 11, color: '#059669' },
    ],
  },
  /* 外切: d = r+R (21+30=51) */
  {
    name: 'cc-ext-tangent',
    vertices: [
      [27, 57],   // 0: O₁
      [12, 42],   // 1: r endpoint
      [78, 57],   // 2: O₂
      [99, 36],   // 3: R endpoint
    ],
    edges: [
      { from: 0, to: 1, color: '#dc2626', strokeWidth: 1.5 },
      { from: 2, to: 3, color: '#2563eb', strokeWidth: 1.5 },
      { from: 0, to: 2, color: '#059669', strokeWidth: 1.5 },
    ],
    polygons: [],
    circles: [
      { center: [27, 57], radius: 21, color: '#dc2626', strokeWidth: 1.8 },
      { center: [78, 57], radius: 30, color: '#2563eb', strokeWidth: 1.8 },
    ],
    freeLabels: [
      { pos: [27, 57], tex: 'O_1', offset: [2, 10],  fontSize: 11, color: '#dc2626', dot: '#dc2626' },
      { pos: [78, 57], tex: 'O_2', offset: [3, 10],  fontSize: 11, color: '#2563eb', dot: '#2563eb' },
      { pos: [19, 49], tex: 'r',   offset: [-5, 3],  fontSize: 11, color: '#dc2626' },
      { pos: [89, 46], tex: 'R',   offset: [4, 6],   fontSize: 11, color: '#2563eb' },
      { pos: [52, 57], tex: 'd',   offset: [4, -7],  fontSize: 11, color: '#059669' },
    ],
  },
  /* 相交: R-r < d < R+r */
  {
    name: 'cc-intersect',
    vertices: [
      [42, 57],   // 0: O₁
      [23, 38],   // 1: r endpoint
      [78, 57],   // 2: O₂
      [101, 34],  // 3: R endpoint
    ],
    edges: [
      { from: 0, to: 1, color: '#dc2626', strokeWidth: 1.5 },
      { from: 2, to: 3, color: '#2563eb', strokeWidth: 1.5 },
      { from: 0, to: 2, color: '#059669', strokeWidth: 1.5 },
    ],
    polygons: [],
    circles: [
      { center: [42, 57], radius: 27, color: '#dc2626', strokeWidth: 1.8 },
      { center: [78, 57], radius: 33, color: '#2563eb', strokeWidth: 1.8 },
    ],
    freeLabels: [
      { pos: [42, 57], tex: 'O_1', offset: [-2, 10], fontSize: 11, color: '#dc2626', dot: '#dc2626' },
      { pos: [78, 57], tex: 'O_2', offset: [3, 10],  fontSize: 11, color: '#2563eb', dot: '#2563eb' },
      { pos: [32, 47], tex: 'r',   offset: [-7, 3],  fontSize: 11, color: '#dc2626' },
      { pos: [90, 45], tex: 'R',   offset: [5, 6],   fontSize: 11, color: '#2563eb' },
      { pos: [60, 57], tex: 'd',   offset: [0, -9],  fontSize: 11, color: '#059669' },
    ],
  },
  /* 内切: d = R-r
   * O₁(big) [60,57] R=38, O₂(small) [70,57] r=28
   * d=10=R-r=10 ✓, 切点在(98,57), 小圆约74%大圆 */
  {
    name: 'cc-int-tangent',
    vertices: [
      [60, 57],   // 0: O₁ (big)
      [33, 30],   // 1: R endpoint (↖ 45°)
      [70, 57],   // 2: O₂ (small, inside big)
      [90, 37],   // 3: r endpoint (↗ 45°, 70+20, 57-20)
    ],
    edges: [
      { from: 0, to: 1, color: '#dc2626', strokeWidth: 1.5 },
      { from: 2, to: 3, color: '#2563eb', strokeWidth: 1.5 },
      { from: 0, to: 2, color: '#059669', strokeWidth: 1.5 },
    ],
    polygons: [],
    circles: [
      { center: [60, 57], radius: 38, color: '#dc2626', strokeWidth: 1.8 },
      { center: [70, 57], radius: 28, color: '#2563eb', strokeWidth: 1.8 },
    ],
    freeLabels: [
      { pos: [60, 57], tex: 'O_1', offset: [-3, 9],  fontSize: 11, color: '#dc2626', dot: '#dc2626' },
      { pos: [70, 57], tex: 'O_2', offset: [8, 10],  fontSize: 11, color: '#2563eb', dot: '#2563eb' },
      { pos: [46, 43], tex: 'R',   offset: [-10, 2], fontSize: 11, color: '#dc2626' },
      { pos: [80, 47], tex: 'r',   offset: [4, 4],   fontSize: 11, color: '#2563eb' },
      { pos: [65, 57], tex: 'd',   offset: [0, -9],  fontSize: 11, color: '#059669' },
    ],
  },
  /* 内含: d < R-r
   * O₁(big) [60,57] R=38, O₂(small) [70,57] r=25
   * d=10 < R-r=13 ✓, d=10 < r=25 所以O₁在小圆内 ✓ */
  {
    name: 'cc-contained',
    vertices: [
      [60, 57],   // 0: O₁ (big)
      [33, 30],   // 1: R endpoint (↖ 45°)
      [70, 57],   // 2: O₂ (small)
      [88, 39],   // 3: r endpoint (↗ 45°, 70+18, 57-18)
    ],
    edges: [
      { from: 0, to: 1, color: '#dc2626', strokeWidth: 1.5 },
      { from: 2, to: 3, color: '#2563eb', strokeWidth: 1.5 },
      { from: 0, to: 2, color: '#059669', strokeWidth: 1.5 },
    ],
    polygons: [],
    circles: [
      { center: [60, 57], radius: 38, color: '#dc2626', strokeWidth: 1.8 },
      { center: [70, 57], radius: 25, color: '#2563eb', strokeWidth: 1.8 },
    ],
    freeLabels: [
      { pos: [60, 57], tex: 'O_1', offset: [-1, 10], fontSize: 11, color: '#dc2626', dot: '#dc2626' },
      { pos: [70, 57], tex: 'O_2', offset: [7, 9],   fontSize: 11, color: '#2563eb', dot: '#2563eb' },
      { pos: [46, 43], tex: 'R',   offset: [-9, 4],  fontSize: 11, color: '#dc2626' },
      { pos: [79, 48], tex: 'r',   offset: [6, 2],   fontSize: 11, color: '#2563eb' },
      { pos: [65, 57], tex: 'd',   offset: [0, -9],  fontSize: 11, color: '#059669' },
    ],
  },
];

/* ── 公切线示意图（canvas 130×105）
 * 红=小圆O₁, 蓝=大圆O₂, 橙=公切线
 * 外离: O₁[30,57]r=18, O₂[98,57]r=28 → 4条（2外+2内）
 * 外切: O₁[28,57]r=18, O₂[82,57]r=28 → 3条（2外+1内，内切线过切点）
 * 相交: O₁[42,57]r=24, O₂[78,57]r=30 → 2条（2外）
 * 内切: O₁[55,57]r=35, O₂[68,57]r=22 → 1条（1外，过切点）
 * 内含: O₁[55,57]r=38, O₂[70,57]r=22 → 0条 ── */
export const circleTangentLine5Diagrams: Diagram2DData[] = [
  /* 外离：4条公切线（2条外公切线 + 2条内公切线）
   * O₁(30,57)r=18, O₂(98,57)r=28, d=68
   * 外公切线：两圆同侧，近似水平偏斜
   * 内公切线：内分点(内似中心) x=30+18/(18+28)*68≈30+26.6=56.6≈57
   *   内公切线从(57,y)出发，一端向左上/右下，另一端向右上/左下 */
  {
    name: 'tl-apart',
    vertices: [
      [30, 57],   // 0: O₁ 圆心
      [98, 57],   // 1: O₂ 圆心
      [5,  42],   // 2: 外公切线1 左端
      [138, 21],  // 3: 外公切线1 右端
      [3,  73],   // 4: 外公切线2 左端
      [130, 89],  // 5: 外公切线2 右端
      [15, 17],   // 6: 内公切线1 左端
      [104, 102], // 7: 内公切线1 右端
      [11, 101],  // 8: 内公切线2 左端
      [101, 14],  // 9: 内公切线2 右端
    ],
    edges: [
      { from: 2, to: 3, color: '#ea580c', strokeWidth: 1.8 },
      { from: 4, to: 5, color: '#ea580c', strokeWidth: 1.8 },
      { from: 6, to: 7, color: '#059669', strokeWidth: 1.8 },
      { from: 8, to: 9, color: '#059669', strokeWidth: 1.8 },
    ],
    polygons: [],
    circles: [
      { center: [30, 57], radius: 18, color: '#dc2626', strokeWidth: 1.8 },
      { center: [98, 57], radius: 28, color: '#2563eb', strokeWidth: 1.8 },
    ],
    freeLabels: [
      { pos: [30, 57], tex: 'O_1', offset: [2, 10], fontSize: 10, color: '#dc2626', dot: '#dc2626' },
      { pos: [98, 57], tex: 'O_2', offset: [2, 10], fontSize: 10, color: '#2563eb', dot: '#2563eb' },
    ],
  },
  /* 外切：3条公切线（2条外公切线 + 1条过切点的公切线）
   * O₁(38,57)r=18, O₂(84,57)r=28, d=46=18+28 ✓（两圆紧靠外切）
   * 切点: (56,57)，公切线为竖线 x=56
   * 外公切线：外似中心 x=38-18/(28-18)*46≈38-82.8≈-45（画布外），线近乎平行 */
  {
    name: 'tl-ext-tangent',
    vertices: [
      [38, 57],   // 0: O₁（小圆）
      [84, 57],   // 1: O₂（大圆）
      [5,  43],   // 2: 外公切线1 左端
      [129, 18],  // 3: 外公切线1 右端
      [5,  70],   // 4: 外公切线2 左端
      [128, 95],  // 5: 外公切线2 右端
      [56, 5],    // 6: 公切线 上端
      [56, 107],  // 7: 公切线 下端
    ],
    edges: [
      { from: 2, to: 3, color: '#ea580c', strokeWidth: 1.8 },
      { from: 4, to: 5, color: '#ea580c', strokeWidth: 1.8 },
      { from: 6, to: 7, color: '#059669', strokeWidth: 1.8 },
    ],
    polygons: [],
    circles: [
      { center: [38, 57], radius: 18, color: '#dc2626', strokeWidth: 1.8 },
      { center: [84, 57], radius: 28, color: '#2563eb', strokeWidth: 1.8 },
    ],
    freeLabels: [
      { pos: [38, 57], tex: 'O_1', offset: [2, 10], fontSize: 10, color: '#dc2626', dot: '#dc2626' },
      { pos: [84, 57], tex: 'O_2', offset: [2, 10], fontSize: 10, color: '#2563eb', dot: '#2563eb' },
    ],
  },
  /* 相交：2条公切线（仅2条外公切线） */
  {
    name: 'tl-intersect',
    vertices: [
      [42, 57],   // 0: O₁
      [78, 57],   // 1: O₂
      [3,  40],   // 2: 外公切线1 左端
      [124, 16],  // 3: 外公切线1 右端
      [3,  74],   // 4: 外公切线2 左端
      [124, 96],  // 5: 外公切线2 右端
    ],
    edges: [
      { from: 2, to: 3, color: '#ea580c', strokeWidth: 1.8 },
      { from: 4, to: 5, color: '#ea580c', strokeWidth: 1.8 },
    ],
    polygons: [],
    circles: [
      { center: [42, 57], radius: 24, color: '#dc2626', strokeWidth: 1.8 },
      { center: [78, 57], radius: 30, color: '#2563eb', strokeWidth: 1.8 },
    ],
    freeLabels: [
      { pos: [42, 57], tex: 'O_1', offset: [2, 10], fontSize: 10, color: '#dc2626', dot: '#dc2626' },
      { pos: [78, 57], tex: 'O_2', offset: [2, 10], fontSize: 10, color: '#2563eb', dot: '#2563eb' },
    ],
  },
  /* 内切：1条公切线（过切点的外公切线） */
  {
    name: 'tl-int-tangent',
    vertices: [
      [55, 57],   // 0: O₁ (大圆)
      [68, 57],   // 1: O₂ (小圆，在大圆内)
      [90, 4],    // 2: 公切线 上端
      [91, 110],  // 3: 公切线 下端
    ],
    edges: [
      { from: 2, to: 3, color: '#ea580c', strokeWidth: 1.8 },
    ],
    polygons: [],
    circles: [
      { center: [55, 57], radius: 35, color: '#dc2626', strokeWidth: 1.8 },
      { center: [68, 57], radius: 22, color: '#2563eb', strokeWidth: 1.8 },
    ],
    freeLabels: [
      { pos: [55, 57], tex: 'O_1', offset: [3, 11], fontSize: 10, color: '#dc2626', dot: '#dc2626' },
      { pos: [68, 57], tex: 'O_2', offset: [7, 10], fontSize: 10, color: '#2563eb', dot: '#2563eb' },
    ],
  },
  /* 内含：0条公切线（与①位置关系图一致）
   * O₁(60,57)R=38, O₂(70,57)r=25, d=10 < R-r=13 ✓ */
  {
    name: 'tl-contained',
    vertices: [
      [60, 57],   // 0: O₁ (大圆)
      [70, 57],   // 1: O₂ (小圆)
    ],
    edges: [],
    polygons: [],
    circles: [
      { center: [60, 57], radius: 38, color: '#dc2626', strokeWidth: 1.8 },
      { center: [70, 57], radius: 25, color: '#2563eb', strokeWidth: 1.8 },
    ],
    freeLabels: [
      { pos: [60, 57], tex: 'O_1', offset: [-1, 10], fontSize: 10, color: '#dc2626', dot: '#dc2626' },
      { pos: [70, 57], tex: 'O_2', offset: [7, 9],   fontSize: 10, color: '#2563eb', dot: '#2563eb' },
    ],
  },
];

/* ── 公切线例2配图：C₁(0,0)r=1, C₂(3,4)r=4, 公切线 3x+4y-5=0 ──
 * 输出尺寸: width=208 height=243, xOff=0 yOff=0
 * x: [-1, 8], y: [-1, 9] ── */
export const tangentLineExample2Diagram: Diagram2DData = {
  name: 'tl-example2',
  coordinateSystem: { origin: [36, 192], scale: [18, -18] },
  axes: { xRange: [-1, 8], yRange: [-1, 9], step: 1, showNumbers: true },
  vertices: [
    [-2.056, 2.722],   // 0: 内公切线左端
    [3.611, -1.444],   // 1: 内公切线右端
    [-1, -0.8],        // 2: 外公切线① x=-1 下端
    [-1, 7.5],         // 3: 外公切线① x=-1 上端
    [-0.222, -1.167],  // 4: 外公切线② 左端
    [8.5, 1.556],      // 5: 外公切线② 右端
  ],
  edges: [
    { from: 0, to: 1, color: '#059669', strokeWidth: 1.8 },
    { from: 2, to: 3, color: '#ea580c', strokeWidth: 1.8 },
    { from: 4, to: 5, color: '#7c3aed', strokeWidth: 1.8 },
  ],
  polygons: [],
  circles: [
    { center: [0, 0], radius: 1, color: '#dc2626', strokeWidth: 1.8 },
    { center: [3, 4], radius: 4, color: '#2563eb', strokeWidth: 1.8 },
  ],
  freeLabels: [
    { pos: [0, 0], tex: 'C_1', offset: [10, 1], fontSize: 11, color: '#dc2626', dot: '#dc2626' },
    { pos: [3, 4], tex: 'C_2', offset: [5, 11],  fontSize: 11, color: '#2563eb', dot: '#2563eb' },
    { pos: [-1, 7.5], text: '①', offset: [6, 0], fontSize: 15, color: '#ea580c' },
    { pos: [8.5, 1.556], text: '②', offset: [0, -10], fontSize: 15, color: '#7c3aed' },
    { pos: [-2.056, 2.722], text: '③', offset: [6, -7], fontSize: 15, color: '#059669' },
  ],
};

/* ── 求切线方程情况2：圆外点Q，两条切线示意图（通用） ──
 * scale=5.6, C(84,91) r=28, Q(84,35), T1(60,77) T2(108,77)
 * 延长端 E1(49,98) E2(120,98) ── */
export const circleTangentOutsideDiagram: Diagram2DData = {
  name: 'tangent-outside-point',
  vertices: [
    [56,  81],  // 0: C（圆心）
    [56,  25],  // 1: Q（圆外点）
    [32,  67],  // 2: T1（左切点）
    [80,  67],  // 3: T2（右切点）
    [21,  88],  // 4: 切线1延长端
    [92,  88],  // 5: 切线2延长端
  ],
  edges: [
    { from: 1, to: 4, color: '#dc2626', strokeWidth: 1.8 },
    { from: 1, to: 5, color: '#dc2626', strokeWidth: 1.8 },
    { from: 0, to: 2, dashed: true, color: '#2563eb', strokeWidth: 1.5 },
    { from: 0, to: 3, dashed: true, color: '#2563eb', strokeWidth: 1.5 },
  ],
  polygons: [],
  circles: [
    { center: [56, 81], radius: 28, color: '#2563eb', strokeWidth: 1.8 },
  ],
  rightAngles: [
    { vertex: 2, from: 0, to: 1, size: 7 },
    { vertex: 3, from: 0, to: 1, size: 7 },
  ],
  freeLabels: [
    { pos: [56, 81], text: 'C', offset: [3,    8],  fontSize: 12, color: '#334155', dot: '#334155' },
    { pos: [56, 25], text: 'Q', offset: [7,  -10],  fontSize: 12, color: '#dc2626', dot: '#dc2626' },
    { pos: [32, 67], text: 'T', offset: [-14,  -4], fontSize: 11, color: '#475569', dot: '#475569' },
    { pos: [80, 67], text: 'T', offset: [6,    -4], fontSize: 11, color: '#475569', dot: '#475569' },
  ],
};

/* ── 两圆相交公共弦概念图：C₁(-1,0)r=2, C₂(1,0)r=2 ──
 * 交点 A(0,√3) B(0,-√3)，公共弦为 y 轴线段
 * origin=[75,65], scale=[22,-22], xRange=[-3.5,3.5], yRange=[-3,3]
 * width=170, height=150 ── */
export const circleChordConceptDiagram: Diagram2DData = {
  name: 'circle-chord-concept',
  coordinateSystem: { origin: [75, 65], scale: [22, -22] },
  axes: { xRange: [-3.5, 3.5], yRange: [-3, 3], step: 1, showNumbers: false },
  vertices: [
    [ 0,  1.732],   // 0: 交点 A
    [ 0, -1.732],   // 1: 交点 B
  ],
  edges: [
    { from: 0, to: 1, color: '#7c3aed', strokeWidth: 2 },
  ],
  polygons: [],
  circles: [
    { center: [-1, 0], radius: 2, color: '#2563eb', strokeWidth: 1.8 },
    { center: [ 1, 0], radius: 2, color: '#dc2626', strokeWidth: 1.8 },
  ],
  freeLabels: [
    { pos: [-1, 0],    tex: 'C_1',  offset: [-13, 13], fontSize: 11, color: '#2563eb', dot: '#2563eb' },
    { pos: [ 1, 0],    tex: 'C_2',  offset: [ 11, 14], fontSize: 11, color: '#dc2626', dot: '#dc2626' },
    { pos: [ 0, 0],      text: '公共弦', offset: [13, 55], fontSize: 11, color: '#7c3aed' },
    { pos: [ 0,  1.732], text: 'A',    offset: [13,  3], fontSize: 11, color: '#7c3aed', dot: '#7c3aed' },
    { pos: [ 0, -1.732], text: 'B',    offset: [12,  0], fontSize: 11, color: '#7c3aed', dot: '#7c3aed' },
  ],
};

/* ── 两圆公共弦与交点：C₁(0,0)r=5, C₂(2,1)r=√20 ──
 * 公共弦: 2x+y-5=0，交点 A(0,5) B(4,-3)
 * origin=[100,155], scale=[20,-20], xRange=[-5,8], yRange=[-5,7]
 * width=280, height=270 ── */
export const circleCommonChordDiagram: Diagram2DData = {
  name: 'circle-common-chord',
  coordinateSystem: { origin: [100, 155], scale: [20, -20] },
  axes: { xRange: [-5, 8], yRange: [-5, 7], step: 1, showNumbers: true },
  vertices: [
    [-0.5,  6],   // 0: 公共弦延长端（上）
    [ 4.5, -4],   // 1: 公共弦延长端（下）
  ],
  edges: [
    { from: 0, to: 1, color: '#7c3aed', strokeWidth: 1.8, dashed: true },
  ],
  polygons: [],
  circles: [
    { center: [0, 0], radius: 5,     color: '#2563eb', strokeWidth: 1.8 },
    { center: [2, 1], radius: 4.472, color: '#dc2626', strokeWidth: 1.8 },
  ],
  freeLabels: [
    { pos: [0, 0], tex: 'C_1', offset: [13, 13],  fontSize: 11, color: '#2563eb', dot: '#2563eb' },
    { pos: [2, 1], tex: 'C_2', offset: [15, -2],  fontSize: 11, color: '#dc2626', dot: '#dc2626' },
    { pos: [0, 5], text: 'A(0,5)',  offset: [17, -18], fontSize: 11, color: '#7c3aed', dot: '#7c3aed' },
    { pos: [4,-3], text: 'B(4,-3)', offset: [27,   1], fontSize: 11, color: '#7c3aed', dot: '#7c3aed' },
  ],
};

/* ── 圆关于直线对称示意图（纯示意，无坐标轴）──
 * 竖直对称轴 l 在中间，两圆左右对称
 * width=168, height=137, xOff=6, yOff=18 ── */
export const circleSymmetryDiagram: Diagram2DData = {
  name: 'circle-symmetry',
  vertices: [
    [ 90,  33],  // 0: 对称轴上端
    [ 90, 142],  // 1: 对称轴下端
    [ 45,  90],  // 2: C₁（左侧圆心）
    [135,  90],  // 3: C₂（右侧圆心）
    [ 90,  90],  // 4: 中点 M
  ],
  edges: [
    { from: 0, to: 1, color: '#64748b', strokeWidth: 2 },
    { from: 2, to: 3, dashed: true, color: '#94a3b8', strokeWidth: 1.5 },
  ],
  polygons: [],
  circles: [
    { center: [ 45, 90], radius: 30, color: '#2563eb', strokeWidth: 2 },
    { center: [135, 90], radius: 30, color: '#2563eb', strokeWidth: 2 },
  ],
  rightAngles: [
    { vertex: 4, from: 0, to: 3, size: 9, color: '#94a3b8' },
  ],
  freeLabels: [
    { pos: [ 45,  90], tex: 'C_1', offset: [  0, -16], fontSize: 12, color: '#334155', dot: '#334155' },
    { pos: [135,  90], tex: 'C_2', offset: [  0, -16], fontSize: 12, color: '#334155', dot: '#334155' },
    { pos: [ 90,  90], text: 'M',  offset: [  6,  14], fontSize: 11, color: '#64748b', dot: '#94a3b8' },
    { pos: [ 90,  12], text: 'l',  offset: [ 12,  23], fontSize: 14, color: '#64748b' },
  ],
};
