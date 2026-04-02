import type { Diagram2DData } from '@/components/shared/Geo2dSvg';

/* ── 倾斜角示意图 ── */
// SVG 坐标: y 向下。原点 O 在 (30, 100)
// 直线从左上到右下（负斜率），穿过 x 轴交于原点右侧
// α 是钝角（~135°），从 x 轴正向逆时针到直线向上方向
export const inclinationAngleDiagram: Diagram2DData = {
  name: '倾斜角',
  vertices: [
    [30, 8],     // 0: y轴上端
    [30, 115],   // 1: y轴下端
    [5, 100],    // 2: x轴左端
    [155, 100],  // 3: x轴右端
    [30, 100],   // 4: 原点 O
    [20, 15],    // 5: 直线左上端
    [140, 135],  // 6: 直线右下端
    [106, 101],  // 7: 直线与 x 轴的交点
  ],
  edges: [
    { from: 0, to: 1, color: '#334155', strokeWidth: 2 },     // y 轴
    { from: 2, to: 3, color: '#334155', strokeWidth: 2 },     // x 轴
    { from: 5, to: 6, color: '#475569', strokeWidth: 3 },     // 直线
  ],
  polygons: [],
  freeLabels: [
    { pos: [155, 100], text: 'x', offset: [0, -12], color: '#334155' },
    { pos: [30, 8], text: 'y', offset: [10, 0], color: '#334155' },
    { pos: [30, 100], text: 'O', offset: [-12, 14], color: '#334155' },
    { pos: [20, 15], text: 'l', offset: [-12, 0], fontSize: 18, color: '#475569' },
  ],
  angleArcs: [
    { vertex: 7, from: 3, to: 5, radius: 28, label: 'α', color: '#dc2626' },
  ],
};

/* ── 斜率几何意义（两点 + Δx/Δy） ── */
// 简洁版：坐标轴带箭头，A B 两点连线，虚线直角标注Δx Δy
// 原点O在(25,120)，间距拉大，标注直接用freeLabel
export const slopeMeaningDiagram: Diagram2DData = {
  name: '斜率几何意义',
  vertices: [
    [25, 8],     // 0: y轴上端
    [160, 120],  // 1: x轴右端
    [25, 120],   // 2: 原点O
    [55, 90],    // 3: 点A
    [125, 30],   // 4: 点B
    [125, 90],   // 5: 辅助点C（直角拐点）
  ],
  edges: [
    { from: 2, to: 0, color: '#334155', strokeWidth: 1.5, arrow: 'end' },  // y轴
    { from: 2, to: 1, color: '#334155', strokeWidth: 1.5, arrow: 'end' },  // x轴
    { from: 3, to: 4, color: '#2563eb', strokeWidth: 2.5 },                // AB
    { from: 3, to: 5, dashed: true, color: '#94a3b8', strokeWidth: 1.5 },  // A→C 水平
    { from: 5, to: 4, dashed: true, color: '#94a3b8', strokeWidth: 1.5 },  // C→B 垂直
  ],
  polygons: [],
  freeLabels: [
    { pos: [160, 120], text: 'x', offset: [0, -14], color: '#334155' },
    { pos: [25, 8], text: 'y', offset: [14, 0], color: '#334155' },
    { pos: [25, 120], text: 'O', offset: [-10, 14], color: '#334155' },
    { pos: [55, 90], text: 'A', offset: [-16, -8], color: '#2563eb', dot: '#2563eb' },
    { pos: [125, 30], text: 'B', offset: [14, -6], color: '#2563eb', dot: '#2563eb' },
    { pos: [90, 90], tex: '\\Delta x', offset: [0, 16], fontSize: 14, color: '#dc2626' },
    { pos: [125, 60], tex: '\\Delta y', offset: [18, 0], fontSize: 14, color: '#16a34a' },
  ],
  rightAngles: [
    { vertex: 5, from: 3, to: 4, size: 8, color: '#94a3b8' },
  ],
};

/* ── 斜截式 y=kx+b 示意图 ── */
// 坐标轴 + 直线 y=kx+b，标注 b（y轴截距点）和斜率三角形（Δx, Δy）
// 画布约 220×170，原点O在(35,135)
export const slopeInterceptDiagram: Diagram2DData = {
  name: '斜截式',
  vertices: [
    [35, 10],    // 0: y轴上端
    [210, 135],  // 1: x轴右端
    [35, 135],   // 2: 原点O
    [10, 110],   // 3: 直线左端
    [195, 18],   // 4: 直线右端
    [35, 95],    // 5: y轴截距点 (0, b)
    [110, 95],   // 6: 斜率三角形右下角（水平辅助点）
    [110, 58],   // 7: 斜率三角形右上角（直线上的点）
  ],
  edges: [
    { from: 2, to: 0, color: '#334155', strokeWidth: 1.5, arrow: 'end' },  // y轴
    { from: 2, to: 1, color: '#334155', strokeWidth: 1.5, arrow: 'end' },  // x轴
    { from: 3, to: 4, color: '#2563eb', strokeWidth: 2.5 },                // 直线 l
    { from: 5, to: 6, dashed: true, color: '#dc2626', strokeWidth: 1.5 },  // Δx 水平
    { from: 6, to: 7, dashed: true, color: '#16a34a', strokeWidth: 1.5 },  // Δy 垂直
  ],
  polygons: [],
  freeLabels: [
    { pos: [210, 135], text: 'x', offset: [0, -14], color: '#334155' },
    { pos: [35, 10], text: 'y', offset: [14, 0], color: '#334155' },
    { pos: [35, 135], text: 'O', offset: [-14, 12], color: '#334155' },
    { pos: [35, 95], text: '', tex: 'b', offset: [-18, 0], fontSize: 16, color: '#2563eb', dot: '#2563eb' },
    { pos: [195, 18], text: '', tex: 'y{=}kx{+}b', offset: [-14, -14], fontSize: 14, color: '#2563eb' },
    { pos: [72, 95], text: '', tex: '\\Delta x', offset: [0, 10], fontSize: 14, color: '#dc2626' },
    { pos: [110, 76], text: '', tex: '\\Delta y', offset: [10, 0], fontSize: 14, color: '#16a34a' },
  ],
  rightAngles: [
    { vertex: 6, from: 5, to: 7, size: 8, color: '#94a3b8' },
  ],
};

/* ── 截距含义示意图 ── */
// 直线与x轴交于(a,0)，与y轴交于(0,b)，标注两个截距
// 画布约 220×170，原点O在(35,135)
export const interceptMeaningDiagram: Diagram2DData = {
  name: '截距含义',
  vertices: [
    [35, 10],    // 0: y轴上端
    [210, 135],  // 1: x轴右端
    [35, 135],   // 2: 原点O
    [160, 135],  // 3: x轴截距点 (a, 0)
    [35, 40],    // 4: y轴截距点 (0, b)
    [195, 160],  // 5: 直线延伸右下
    [10, 18],    // 6: 直线延伸左上
  ],
  edges: [
    { from: 2, to: 0, color: '#334155', strokeWidth: 1.5, arrow: 'end' },  // y轴
    { from: 2, to: 1, color: '#334155', strokeWidth: 1.5, arrow: 'end' },  // x轴
    { from: 6, to: 5, color: '#2563eb', strokeWidth: 2.5 },                // 直线
  ],
  polygons: [],
  freeLabels: [
    { pos: [210, 135], text: 'x', offset: [0, -14], color: '#334155' },
    { pos: [35, 10], text: 'y', offset: [14, 0], color: '#334155' },
    { pos: [35, 135], text: 'O', offset: [-14, 12], color: '#334155' },
    { pos: [160, 135], text: '(a, 0)', offset: [0, 18], fontSize: 16, color: '#dc2626', dot: '#dc2626' },
    { pos: [35, 40], text: '(0, b)', offset: [-26, 0], fontSize: 16, color: '#16a34a', dot: '#16a34a' },
  ],
};

/* ── 斜率与直线方向（4条线穿过原点） ── */
// 原点 O 在 (80, 100)，4条直线都穿过原点
// ① k>0 (α≈45°, 绿色)  ② k<0 (α≈135°, 红色)  ③ k=0 (α=0°, 蓝色)  ④ 斜率不存在 (α=90°, 紫色虚线)
export const slopeDirectionsDiagram: Diagram2DData = {
  name: '斜率与方向',
  vertices: [
    [80, 10],    // 0: y轴上端
    [80, 130],   // 1: y轴下端
    [5, 100],    // 2: x轴左端
    [170, 100],  // 3: x轴右端
    [69, 99],    // 4: 弧1圆心
    [30, 130],   // 5: k>0 左下端
    [140, 35],   // 6: k>0 右上端
    [25, 35],    // 7: k<0 左上端
    [130, 130],  // 8: k<0 右下端
    [20, 100],   // 9
    [155, 100],  // 10
    [80, 20],    // 11
    [80, 125],   // 12
    [92, 98],    // 13: 弧2圆心
    [170, 100],  // 14: 弧2 x轴方向
  ],
  edges: [
    { from: 0, to: 1, color: '#334155', strokeWidth: 2 },     // y 轴
    { from: 2, to: 3, color: '#334155', strokeWidth: 2 },     // x 轴
    { from: 5, to: 6, color: '#16a34a', strokeWidth: 2.5 },   // k > 0
    { from: 7, to: 8, color: '#dc2626', strokeWidth: 2.5 },   // k < 0
  ],
  polygons: [],
  freeLabels: [
    { pos: [170, 100], text: 'x', offset: [0, -12], color: '#334155' },
    { pos: [80, 10], text: 'y', offset: [10, 0], color: '#334155' },
    { pos: [80, 100], text: 'O', offset: [-12, 12], color: '#334155' },
    // 标注每条线
    { pos: [140, 35], text: '', tex: 'k>0', offset: [2, -11], fontSize: 14, color: '#16a34a' },
    { pos: [130, 130], text: '', tex: 'k<0', offset: [-108, -108], fontSize: 14, color: '#dc2626' },
    // 角度标注（手动定位）
    { pos: [112, 82], text: '', tex: '\\alpha_1', offset: [0, 0], fontSize: 13, color: '#16a34a' },
    { pos: [52, 82], text: '', tex: '\\alpha_2', offset: [51, -33], fontSize: 13, color: '#dc2626' },
  ],
  angleArcs: [
    { vertex: 4, from: 3, to: 6, radius: 30, color: '#16a34a' },    // k>0 弧（独立：vertex4, from3, to6）
    { vertex: 13, from: 14, to: 7, radius: 38, color: '#dc2626' },  // k<0 弧（独立：vertex13, from14, to7）
  ],
};

/* ── 平行、相交、垂直 ── */
// 三组线并排：左=平行(蓝)，中=相交(橙)，右=垂直(绿)
// 画布约 200×120
export const parallelPerpDiagram: Diagram2DData = {
  name: '平行相交垂直',
  vertices: [
    // 平行（左区 x: 5~60）
    [5, 80],     // 0: l₁ 左
    [55, 30],    // 1: l₁ 右
    [20, 95],    // 2: l₂ 左
    [70, 45],    // 3: l₂ 右
    // 相交（中区 x: 75~130）
    [75, 85],    // 4: l₃ 左
    [130, 25],   // 5: l₃ 右
    [75, 35],    // 6: l₄ 左
    [130, 75],   // 7: l₄ 右
    // 垂直（右区 x: 140~195）
    [140, 85],   // 8: l₅ 左下
    [195, 35],   // 9: l₅ 右上
    [145, 30],   // 10: l₆ 左上
    [195, 80],   // 11: l₆ 右下
    // 垂直交点
    [170, 57],   // 12: l₅ 和 l₆ 交点
  ],
  edges: [
    { from: 0, to: 1, color: '#2563eb', strokeWidth: 2.5 },   // l₁
    { from: 2, to: 3, color: '#2563eb', strokeWidth: 2.5 },   // l₂
    { from: 4, to: 5, color: '#ea580c', strokeWidth: 2.5 },   // l₃
    { from: 6, to: 7, color: '#ea580c', strokeWidth: 2.5 },   // l₄
    { from: 8, to: 9, color: '#16a34a', strokeWidth: 2.5 },   // l₅
    { from: 10, to: 11, color: '#16a34a', strokeWidth: 2.5 }, // l₆
  ],
  polygons: [],
  freeLabels: [
    { pos: [35, 108], text: '平行', offset: [0, 0], fontSize: 14, color: '#2563eb' },
    { pos: [102, 108], text: '相交', offset: [0, 0], fontSize: 14, color: '#ea580c' },
    { pos: [170, 108], text: '垂直', offset: [0, 0], fontSize: 14, color: '#16a34a' },
  ],
  rightAngles: [
    { vertex: 12, from: 9, to: 11, size: 8, color: '#16a34a' },
  ],
};

/* ── 点到直线距离 ── */
export const pointToLineDiagram: Diagram2DData = {
  name: '点到直线距离',
  vertices: [
    [15, 90],    // 0: 直线 l 左端
    [135, 30],   // 1: 直线 l 右端
    [100, 15],   // 2: 点 P
    [88, 52],    // 3: 垂足 H（P在l上的投影）
  ],
  edges: [
    { from: 0, to: 1, color: '#334155', strokeWidth: 2.5 },   // 直线 l
    { from: 2, to: 3, color: '#dc2626', strokeWidth: 2, dashed: true }, // 垂线段 d
  ],
  polygons: [],
  freeLabels: [
    { pos: [135, 30], text: 'l', offset: [10, 0], color: '#334155' },
    { pos: [100, 15], text: 'P', offset: [0, -12], color: '#dc2626', dot: '#dc2626' },
    { pos: [88, 52], text: 'H', offset: [10, 8], color: '#334155', dot: true },
    { pos: [94, 33], text: '', tex: 'd', offset: [-12, 0], fontSize: 15, color: '#dc2626' },
  ],
  rightAngles: [
    { vertex: 3, from: 2, to: 1, size: 8, color: '#dc2626' },
  ],
};

/* ── 情况1配图：x+y=3，截距a=b=3（蓝色） ── */
export const interceptCase1Diagram: Diagram2DData = {
  name: '情况1-x+y=3',
  vertices: [
    [35, 5],     // 0: y轴上端（箭头）
    [35, 125],   // 1: y轴下端
    [5, 105],    // 2: x轴左端
    [160, 105],  // 3: x轴右端（箭头）
    [35, 105],   // 4: 原点 O
    [12, 6],     // 5: 直线延伸左上
    [150, 127],  // 6: 直线延伸右下
  ],
  edges: [
    { from: 1, to: 0, color: '#334155', strokeWidth: 1.5, arrow: 'end' },
    { from: 2, to: 3, color: '#334155', strokeWidth: 1.5, arrow: 'end' },
    { from: 5, to: 6, color: '#2563eb', strokeWidth: 2 },
  ],
  polygons: [],
  freeLabels: [
    { pos: [160, 105], text: 'x', offset: [0, -14], fontSize: 20, color: '#334155' },
    { pos: [35, 5], text: 'y', offset: [12, 4], fontSize: 20, color: '#334155' },
    { pos: [35, 105], text: 'O', offset: [-14, 14], fontSize: 20, color: '#334155' },
    { pos: [35, 25], text: '3', offset: [-16, 5], fontSize: 20, color: '#2563eb', dot: '#2563eb' },
    { pos: [125, 105], text: '3', offset: [-3, 15], fontSize: 20, color: '#2563eb', dot: '#2563eb' },
    { pos: [65, 55], text: '(1,2)', offset: [19, -12], fontSize: 18, color: '#dc2626', dot: '#dc2626' },
    { pos: [130, 115], text: 'x+y=3', offset: [3, -52], fontSize: 18, color: '#2563eb' },
  ],
};

/* ── 情况2配图：y=2x，过原点（红色） ── */
export const interceptCase2Diagram: Diagram2DData = {
  name: '情况2-y=2x',
  vertices: [
    [25, 5],     // 0: y轴上端（箭头）
    [25, 139],   // 1: y轴下端
    [5, 115],    // 2: x轴左端
    [160, 115],  // 3: x轴右端（箭头）
    [25, 115],   // 4: 原点 O
    [10, 130],   // 5: 直线延伸左下
    [115, 5],    // 6: 直线延伸右上
  ],
  edges: [
    { from: 1, to: 0, color: '#334155', strokeWidth: 1.5, arrow: 'end' },
    { from: 2, to: 3, color: '#334155', strokeWidth: 1.5, arrow: 'end' },
    { from: 5, to: 6, color: '#dc2626', strokeWidth: 2 },
  ],
  polygons: [],
  freeLabels: [
    { pos: [160, 115], text: 'x', offset: [0, -14], fontSize: 20, color: '#334155' },
    { pos: [25, 5], text: 'y', offset: [12, 4], fontSize: 20, color: '#334155' },
    { pos: [25, 115], text: 'O', offset: [8, 11], fontSize: 20, color: '#334155' },
    { pos: [70, 55], text: '(1,2)', offset: [19, 11], fontSize: 18, color: '#dc2626', dot: '#dc2626' },
    { pos: [115, 5], text: 'y=2x', offset: [21, 13], fontSize: 18, color: '#dc2626' },
  ],
};

/* ── 大题2配图：△ABC，A(1,3) B(-2,-1) C(4,-1)，BC上的高 ── */
// 画布 209×176，纯像素坐标（不用 coordinateSystem，避免标注挤一起）
export const triangleABCDiagram: Diagram2DData = {
  name: '△ABC',
  vertices: [
    [110, 35],   // 0: A(1,3)
    [45, 120],   // 1: B(-2,-1)
    [175, 120],  // 2: C(4,-1)
    [110, 120],  // 3: H（A在BC上的投影）
  ],
  edges: [
    { from: 0, to: 1, color: '#2563eb', strokeWidth: 2 },   // AB
    { from: 1, to: 2, color: '#2563eb', strokeWidth: 2 },   // BC
    { from: 2, to: 0, color: '#2563eb', strokeWidth: 2 },   // CA
    { from: 0, to: 3, color: '#dc2626', strokeWidth: 1.5, dashed: true }, // 高AH
  ],
  polygons: [
    { points: [0, 1, 2], fill: '#dbeafe', opacity: 0.3 },
  ],
  freeLabels: [
    { pos: [110, 35], text: 'A(1,3)', offset: [0, -14], fontSize: 16, color: '#2563eb', dot: '#2563eb' },
    { pos: [45, 120], text: 'B(-2,-1)', offset: [0, 18], fontSize: 16, color: '#2563eb', dot: '#2563eb' },
    { pos: [175, 120], text: 'C(4,-1)', offset: [0, 18], fontSize: 16, color: '#2563eb', dot: '#2563eb' },
    { pos: [110, 120], text: 'H', offset: [0, 18], fontSize: 14, color: '#dc2626', dot: '#dc2626' },
  ],
  rightAngles: [
    { vertex: 3, from: 0, to: 2, size: 8, color: '#dc2626' },
  ],
};

/* ── 典题2：含参直线过定点 ── */
// 原点O在(25,108)，三条不同m值的直线都过定点P(3,1)
// m=0: x+y=4（斜线），m=-0.5: y=1（水平线），m=-1: x=3（垂直线）
export const fixedPointDiagram: Diagram2DData = {
  name: '过定点',
  vertices: [
    [25, 5],     // 0: y轴上端
    [25, 125],   // 1: y轴下端
    [5, 108],    // 2: x轴左端
    [175, 108],  // 3: x轴右端
    [25, 108],   // 4: 原点 O
    [115, 80],   // 5: 定点 P(3,1)
    [38, 10],    // 6: 斜线上端 (0.5,3.5)
    [145, 108],  // 7: 斜线下端 (4,0)
    [10, 80],    // 8: 水平线左端
    [175, 80],   // 9: 水平线右端
    [115, 5],    // 10: 垂直线上端
    [115, 125],  // 11: 垂直线下端
  ],
  edges: [
    { from: 0, to: 1, color: '#334155', strokeWidth: 2 },
    { from: 2, to: 3, color: '#334155', strokeWidth: 2 },
    { from: 6, to: 7, color: '#2563eb', strokeWidth: 2 },    // 斜线
    { from: 8, to: 9, color: '#16a34a', strokeWidth: 2 },    // 水平线
    { from: 10, to: 11, color: '#9333ea', strokeWidth: 2 },  // 垂直线
  ],
  polygons: [],
  freeLabels: [
    { pos: [175, 108], text: 'x', offset: [0, -12], color: '#334155' },
    { pos: [25, 5], text: 'y', offset: [10, 0], color: '#334155' },
    { pos: [25, 108], text: 'O', offset: [-12, 12], color: '#334155' },
    { pos: [115, 80], text: 'P(3,1)', offset: [6, -10], color: '#dc2626', dot: '#dc2626' },
  ],
};

/* ── 典题3：定比分点 + 垂线 ── */
// 原点O在(25,115)，A(4,0), B(0,3), C(4/3,2)是AB三等分点
// 过C作AB的垂线
export const sectionPerpDiagram: Diagram2DData = {
  name: '定比分点与垂线',
  vertices: [
    [25, 5],     // 0: y轴上端
    [25, 130],   // 1: y轴下端
    [5, 115],    // 2: x轴左端
    [175, 115],  // 3: x轴右端
    [25, 115],   // 4: 原点 O
    [153, 115],  // 5: A(4,0)
    [25, 31],    // 6: B(0,3)
    [68, 59],    // 7: C(4/3, 2)
    [116, 3],    // 8: 垂线上端
    [42, 89],    // 9: 垂线下端
  ],
  edges: [
    { from: 0, to: 1, color: '#334155', strokeWidth: 2 },
    { from: 2, to: 3, color: '#334155', strokeWidth: 2 },
    { from: 5, to: 6, color: '#2563eb', strokeWidth: 2.5 },          // AB
    { from: 8, to: 9, color: '#dc2626', strokeWidth: 2, dashed: true }, // 垂线
  ],
  polygons: [],
  freeLabels: [
    { pos: [175, 115], text: 'x', offset: [0, -12], color: '#334155' },
    { pos: [25, 5], text: 'y', offset: [10, 0], color: '#334155' },
    { pos: [25, 115], text: 'O', offset: [-12, 12], color: '#334155' },
    { pos: [153, 115], text: 'A', offset: [0, 12], color: '#2563eb', dot: '#2563eb' },
    { pos: [25, 31], text: 'B', offset: [-14, -4], color: '#2563eb', dot: '#2563eb' },
    { pos: [68, 59], text: 'C', offset: [8, -10], color: '#dc2626', dot: '#dc2626' },
  ],
  rightAngles: [
    { vertex: 7, from: 5, to: 8, size: 8, color: '#dc2626' },
  ],
};

/* ── 两直线夹角示意图 ── */
export const lineAngleDiagram: Diagram2DData = {
  name: '两直线夹角',
  vertices: [
    [10, 110],   // 0: l1 左端
    [140, 30],   // 1: l1 右端
    [10, 60],    // 2: l2 左端
    [140, 80],   // 3: l2 右端
    [68, 72],    // 4: 交点 P
  ],
  edges: [
    { from: 0, to: 1, color: '#2563eb', strokeWidth: 2.5 },  // l1
    { from: 2, to: 3, color: '#16a34a', strokeWidth: 2.5 },  // l2
  ],
  polygons: [],
  freeLabels: [
    { pos: [140, 30], text: 'l₁', offset: [8, 0], fontSize: 18, color: '#2563eb' },
    { pos: [140, 80], text: 'l₂', offset: [8, 0], fontSize: 18, color: '#16a34a' },
  ],
  angleArcs: [
    { vertex: 4, from: 1, to: 3, radius: 30, label: 'θ', color: '#dc2626' },
  ],
};

/* ── 对称点示意图 ── */
export const symmetryPointDiagram: Diagram2DData = {
  name: '点关于直线对称',
  vertices: [
    [15, 15],    // 0: 直线 l 左上端
    [130, 100],  // 1: 直线 l 右下端
    [120, 25],   // 2: 点 A
    [25, 95],    // 3: 对称点 A'
    [72, 60],    // 4: 中点 M（AA'中点在l上）
  ],
  edges: [
    { from: 0, to: 1, color: '#334155', strokeWidth: 2.5 },   // 直线 l
    { from: 2, to: 3, color: '#9333ea', strokeWidth: 2, dashed: true }, // AA'
  ],
  polygons: [],
  freeLabels: [
    { pos: [130, 100], text: 'l', offset: [10, 0], fontSize: 18, color: '#334155' },
    { pos: [120, 25], text: 'A₁', offset: [10, -9], fontSize: 20, color: '#dc2626', dot: '#dc2626' },
    { pos: [25, 95], text: 'A₂', offset: [-13, 10], fontSize: 20, color: '#2563eb', dot: '#2563eb' },
    { pos: [72, 60], text: 'M', offset: [0, 16], fontSize: 16, color: '#334155', dot: true },
  ],
  rightAngles: [
    { vertex: 4, from: 2, to: 1, size: 8, color: '#9333ea' },
  ],
};

/* ── 大题3配图：三条直线 l₁ l₂ l₃ + 交点 P ── */
// l₁(斜率2,蓝), l₂(斜率-1/3,绿), l₃(斜率1/2,紫)
// l₁∩l₂ = P(-1,2)，l₃ 不过 P
export const threeLinesDiagram: Diagram2DData = {
  name: '三条直线与交点',
  vertices: [
    [30, 130],   // 0: l₁ 左下端
    [85, 20],    // 1: l₁ 右上端
    [15, 45],    // 2: l₂ 左端
    [160, 93],   // 3: l₂ 右端
    [10, 100],   // 4: l₃ 左端
    [160, 25],   // 5: l₃ 右端
    [65, 60],    // 6: 交点 P
  ],
  edges: [
    { from: 0, to: 1, color: '#2563eb', strokeWidth: 2.5 },   // l₁
    { from: 2, to: 3, color: '#16a34a', strokeWidth: 2.5 },   // l₂
    { from: 4, to: 5, color: '#9333ea', strokeWidth: 2.5 },   // l₃
  ],
  polygons: [],
  freeLabels: [
    { pos: [65, 60], text: 'P', offset: [8, -10], fontSize: 16, color: '#dc2626', dot: '#dc2626' },
    { pos: [85, 20], text: 'l₁', offset: [8, 0], fontSize: 16, color: '#2563eb' },
    { pos: [160, 93], text: 'l₂', offset: [8, 0], fontSize: 16, color: '#16a34a' },
    { pos: [160, 25], text: 'l₃', offset: [8, 0], fontSize: 16, color: '#9333ea' },
  ],
};

/* ── 大题4(2)配图：A(1,1) 关于 l: x+y-4=0 的对称点 A'(3,3) ── */
// 坐标轴 + 直线 l + A, A', 中点 M, 连线 AA'
export const symmetryExDiagram: Diagram2DData = {
  name: '对称点例题',
  vertices: [
    [25, 10],    // 0: y轴上端
    [155, 115],  // 1: x轴右端
    [25, 115],   // 2: 原点 O
    [14, 16],    // 3: l 左上端
    [135, 137],  // 4: l 右下端
    [47, 93],    // 5: A(1,1)
    [91, 49],    // 6: A'(3,3)
    [69, 71],    // 7: 中点 M
  ],
  edges: [
    { from: 2, to: 0, color: '#334155', strokeWidth: 1.5, arrow: 'end' },  // y轴
    { from: 2, to: 1, color: '#334155', strokeWidth: 1.5, arrow: 'end' },  // x轴
    { from: 3, to: 4, color: '#334155', strokeWidth: 2.5 },                // 直线 l
    { from: 5, to: 6, color: '#9333ea', strokeWidth: 1.5, dashed: true },  // AA'
  ],
  polygons: [],
  freeLabels: [
    { pos: [155, 115], text: 'x', offset: [0, -14], color: '#334155' },
    { pos: [25, 10], text: 'y', offset: [14, 0], color: '#334155' },
    { pos: [25, 115], text: 'O', offset: [-14, 12], color: '#334155' },
    { pos: [135, 137], text: 'l', offset: [8, -4], fontSize: 16, color: '#334155' },
    { pos: [47, 93], text: 'A', offset: [-16, 8], fontSize: 16, color: '#dc2626', dot: '#dc2626' },
    { pos: [91, 49], text: 'A₁', offset: [8, -10], fontSize: 16, color: '#2563eb', dot: '#2563eb' },
    { pos: [69, 71], text: 'M', offset: [14, 0], fontSize: 14, color: '#334155', dot: true },
  ],
  rightAngles: [
    { vertex: 7, from: 5, to: 4, size: 8, color: '#9333ea' },
  ],
};
