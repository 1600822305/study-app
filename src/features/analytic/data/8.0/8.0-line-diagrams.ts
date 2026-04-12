import type { Diagram2DData } from '@/components/shared/Geo2dSvg';

/* ── 倾斜角示意图 ── */
// SVG 坐标: y 向下。原点 O 在 (30, 100)
// 直线从左上到右下（负斜率），穿过 x 轴交于原点右侧
// α 是钝角（~135°），从 x 轴正向逆时针到直线向上方向
export const inclinationAngleDiagram: Diagram2DData = {
  name: '倾斜角',
  vertices: [
    [27, 7],     // 0: y轴上端
    [27, 104],   // 1: y轴下端
    [5, 90],     // 2: x轴左端
    [140, 90],   // 3: x轴右端
    [27, 90],    // 4: 原点 O
    [18, 14],    // 5: 直线左上端
    [126, 122],  // 6: 直线右下端
    [95, 91],    // 7: 直线与 x 轴的交点
  ],
  edges: [
    { from: 0, to: 1, color: '#334155', strokeWidth: 2 },     // y 轴
    { from: 2, to: 3, color: '#334155', strokeWidth: 2 },     // x 轴
    { from: 5, to: 6, color: '#475569', strokeWidth: 3 },     // 直线
  ],
  polygons: [],
  freeLabels: [
    { pos: [140, 90], text: 'x', offset: [0, -12], color: '#334155' },
    { pos: [27, 7], text: 'y', offset: [10, 0], color: '#334155' },
    { pos: [27, 90], text: 'O', offset: [-12, 14], color: '#334155' },
    { pos: [18, 14], text: 'l', offset: [-12, 0], fontSize: 18, color: '#475569' },
  ],
  angleArcs: [
    { vertex: 7, from: 3, to: 5, radius: 25, label: 'α', color: '#dc2626' },
  ],
};

/* ── 斜率几何意义（两点 + Δx/Δy） ── */
// 简洁版：坐标轴带箭头，A B 两点连线，虚线直角标注Δx Δy
// 画布 150×125，原点O在(20,110)
export const slopeMeaningDiagram: Diagram2DData = {
  name: '斜率几何意义',
  vertices: [
    [30, 95],    // 0: 点A
    [110, 20],   // 1: 点B
    [110, 95],   // 2: 辅助点C（直角拐点）
  ],
  edges: [
    { from: 0, to: 1, color: '#2563eb', strokeWidth: 2.5 },                // AB
    { from: 0, to: 2, dashed: true, color: '#94a3b8', strokeWidth: 1.5 },  // A→C 水平
    { from: 2, to: 1, dashed: true, color: '#94a3b8', strokeWidth: 1.5 },  // C→B 垂直
  ],
  polygons: [],
  freeLabels: [
    { pos: [30, 95], text: 'A', offset: [-14, -6], color: '#2563eb', dot: '#2563eb' },
    { pos: [110, 20], text: 'B', offset: [8, -8], color: '#2563eb', dot: '#2563eb' },
    { pos: [70, 95], tex: '\\Delta x', offset: [0, 14], fontSize: 13, color: '#dc2626' },
    { pos: [110, 57], tex: '\\Delta y', offset: [8, 0], fontSize: 13, color: '#16a34a' },
  ],
  rightAngles: [
    { vertex: 2, from: 0, to: 1, size: 8, color: '#94a3b8' },
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
    [10, 107],   // 3: 直线左端
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
    { pos: [210, 135], text: 'x', offset: [0, -14], fontSize: 12, color: '#334155' },
    { pos: [35, 10], text: 'y', offset: [14, 0], fontSize: 12, color: '#334155' },
    { pos: [35, 135], text: 'O', offset: [-14, 12], fontSize: 12, color: '#334155' },
    { pos: [35, 95], text: '', tex: 'b', offset: [-18, 0], fontSize: 16, color: '#2563eb', dot: '#2563eb' },
    { pos: [195, 18], text: '', tex: 'y{=}kx{+}b', offset: [-47, -4], fontSize: 14, color: '#2563eb' },
    { pos: [72, 95], text: '', tex: '\\Delta x', offset: [0, 10], fontSize: 14, color: '#dc2626' },
    { pos: [110, 76], text: '', tex: '\\Delta y', offset: [16, 2], fontSize: 14, color: '#16a34a' },
  ],
  rightAngles: [
    { vertex: 6, from: 5, to: 7, size: 8, color: '#94a3b8' },
  ],
};

/* ── 截距含义示意图 ── */
// 直线与x轴交于(a,0)，与y轴交于(0,b)，标注两个截距
// 画布 220×170，原点O在(50,120)
export const interceptMeaningDiagram: Diagram2DData = {
  name: '截距含义',
  vertices: [
    [50, 15],    // 0: y轴上端
    [210, 120],  // 1: x轴右端
    [50, 120],   // 2: 原点O
    [50, 155],   // 3: y轴下端
    [10, 120],   // 4: x轴左端
    [160, 120],  // 5: x轴截距点 (a, 0)
    [50, 42],    // 6: y轴截距点 (0, b)
    [200, 148],  // 7: 直线延伸右下
    [22, 21],    // 8: 直线延伸左上
  ],
  edges: [
    { from: 4, to: 1, color: '#334155', strokeWidth: 1.5 },   // x轴
    { from: 3, to: 0, color: '#334155', strokeWidth: 1.5 },   // y轴
    { from: 8, to: 7, color: '#2563eb', strokeWidth: 2.5 },   // 直线
  ],
  polygons: [],
  freeLabels: [
    { pos: [210, 120], text: 'x', offset: [0, -14], color: '#334155' },
    { pos: [50, 15], text: 'y', offset: [10, 0], color: '#334155' },
    { pos: [50, 120], text: 'O', offset: [-14, 12], color: '#334155' },
    { pos: [160, 120], text: '(a, 0)', offset: [-8, 16], fontSize: 14, color: '#dc2626', dot: '#dc2626' },
    { pos: [50, 42], text: '(0, b)', offset: [-25, 1], fontSize: 14, color: '#16a34a', dot: '#16a34a' },
  ],
};

/* ── 斜率与直线方向（4条线穿过原点） ── */
// 原点 O 在 (115, 120)，4条直线都穿过原点
// ① k>0 (α≈45°, 绿色)  ② k<0 (α≈135°, 红色)  ③ k=0 (α=0°, 蓝色)  ④ 斜率不存在 (α=90°, 紫色虚线)
export const slopeDirectionsDiagram: Diagram2DData = {
  name: '斜率与方向',
  vertices: [
    [115, 30],   // 0: y轴上端
    [115, 150],  // 1: y轴下端
    [40, 120],   // 2: x轴左端
    [205, 120],  // 3: x轴右端
    [104, 119],  // 4: 弧1圆心
    [65, 150],   // 5: k>0 左下端
    [175, 55],   // 6: k>0 右上端
    [60, 55],    // 7: k<0 左上端
    [165, 150],  // 8: k<0 右下端
    [55, 120],   // 9
    [190, 120],  // 10
    [115, 40],   // 11
    [115, 145],  // 12
    [127, 118],  // 13: 弧2圆心
    [205, 120],  // 14: 弧2 x轴方向
  ],
  edges: [
    { from: 0, to: 1, color: '#334155', strokeWidth: 2 },     // y 轴
    { from: 2, to: 3, color: '#334155', strokeWidth: 2 },     // x 轴
    { from: 5, to: 6, color: '#16a34a', strokeWidth: 2.5 },   // k > 0
    { from: 7, to: 8, color: '#dc2626', strokeWidth: 2.5 },   // k < 0
  ],
  polygons: [],
  freeLabels: [
    { pos: [205, 120], text: 'x', offset: [0, -12], color: '#334155' },
    { pos: [115, 30], text: 'y', offset: [10, 0], color: '#334155' },
    { pos: [115, 120], text: 'O', offset: [-12, 12], color: '#334155' },
    // 标注每条线
    { pos: [175, 55], text: '', tex: 'k>0', offset: [2, -11], fontSize: 14, color: '#16a34a' },
    { pos: [165, 150], text: '', tex: 'k<0', offset: [-108, -108], fontSize: 14, color: '#dc2626' },
    // 角度标注（手动定位）
    { pos: [147, 102], text: '', tex: '\\alpha_1', offset: [0, 0], fontSize: 13, color: '#16a34a' },
    { pos: [87, 102], text: '', tex: '\\alpha_2', offset: [51, -33], fontSize: 13, color: '#dc2626' },
  ],
  angleArcs: [
    { vertex: 4, from: 3, to: 6, radius: 30, color: '#16a34a' },    // k>0 弧（独立：vertex4, from3, to6）
    { vertex: 13, from: 14, to: 7, radius: 38, color: '#dc2626' },  // k<0 弧（独立：vertex13, from14, to7）
  ],
};

/* ── 平行、相交、垂直 ── */
// 三组线并排：左=平行(蓝)，中=相交(橙)，右=垂直(绿)
// 画布约 200×55，压缩为2行文字高度
export const parallelPerpDiagram: Diagram2DData = {
  name: '平行相交垂直',
  vertices: [
    // 平行（左区 x: 5~62）
    [8, 28],     // 0: l₁ 左
    [55, 6],     // 1: l₁ 右
    [18, 38],    // 2: l₂ 左
    [65, 16],    // 3: l₂ 右
    // 相交（中区 x: 72~125）
    [75, 36],    // 4: l₃ 左下
    [122, 6],    // 5: l₃ 右上
    [75, 6],     // 6: l₄ 左上
    [122, 36],   // 7: l₄ 右下
    // 垂直（右区 x: 140~185）
    [146, 38],   // 8: l₅ 左下
    [178, 6],    // 9: l₅ 右上
    [146, 6],    // 10: l₆ 左上
    [178, 38],   // 11: l₆ 右下
    // 垂直交点
    [162, 22],   // 12: l₅ 和 l₆ 交点
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
    { pos: [36, 50], text: '平行', offset: [0, 0], fontSize: 13, color: '#2563eb' },
    { pos: [98, 50], text: '相交', offset: [0, 0], fontSize: 13, color: '#ea580c' },
    { pos: [162, 50], text: '垂直', offset: [0, 0], fontSize: 13, color: '#16a34a' },
  ],
  rightAngles: [
    { vertex: 12, from: 9, to: 11, size: 7, color: '#16a34a' },
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
    [11, 131],   // 5: 直线延伸左下
    [110, 5],    // 6: 直线延伸右上
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
// 画布 167×141，纯像素坐标（不用 coordinateSystem，避免标注挤一起）
export const triangleABCDiagram: Diagram2DData = {
  name: '△ABC',
  vertices: [
    [88, 28],    // 0: A(1,3)
    [36, 96],    // 1: B(-2,-1)
    [140, 96],   // 2: C(4,-1)
    [88, 96],    // 3: H（A在BC上的投影）
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
    { pos: [88, 28], text: 'A(1,3)', offset: [0, -14], fontSize: 16, color: '#2563eb', dot: '#2563eb' },
    { pos: [36, 96], text: 'B(-2,-1)', offset: [0, 18], fontSize: 16, color: '#2563eb', dot: '#2563eb' },
    { pos: [140, 96], text: 'C(4,-1)', offset: [0, 18], fontSize: 16, color: '#2563eb', dot: '#2563eb' },
    { pos: [88, 96], text: 'H', offset: [0, 18], fontSize: 14, color: '#dc2626', dot: '#dc2626' },
  ],
  rightAngles: [
    { vertex: 3, from: 0, to: 2, size: 8, color: '#dc2626' },
  ],
};

/* ── 大题3配图：点关于点对称 + 最值 ── */
// 画布 170×145，原点(25,95)，1单位=20px
// A(2,1) P(3,0) C(4,-1)  直线l: x-y+3=0  垂足B₀(0,3)
export const pointSymMinDiagram: Diagram2DData = {
  name: '点对称最值',
  vertices: [
    [115, 48],   // 0: A
    [115, 83],   // 1: P（AC中点）
    [115, 118],  // 2: C
    [10, 70],    // 3: 直线l左端
    [70, 10],    // 4: 直线l右端
    [40, 40],    // 5: B（l上的点）
  ],
  edges: [
    { from: 3, to: 4, color: '#2563eb', strokeWidth: 2 },                  // 直线l
    { from: 2, to: 5, color: '#dc2626', strokeWidth: 1.5, dashed: true },  // CB垂线段
  ],
  polygons: [],
  freeLabels: [
    { pos: [115, 48], text: 'A', offset: [12, -4], fontSize: 14, color: '#1e40af', dot: '#2563eb' },
    { pos: [115, 83], text: 'P', offset: [12, -1], fontSize: 14, color: '#7e22ce', dot: '#9333ea' },
    { pos: [115, 118], text: 'C', offset: [11, -4], fontSize: 14, color: '#b91c1c', dot: '#dc2626' },
    { pos: [40, 40], text: 'B', offset: [-4, -14], fontSize: 14, color: '#dc2626', dot: '#dc2626' },
    { pos: [70, 10], text: 'l', offset: [8, -2], fontSize: 15, color: '#2563eb' },
  ],
  rightAngles: [
    { vertex: 5, from: 2, to: 4, size: 7, color: '#dc2626' },
  ],
};

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
// 左右版：l 竖直居中，A₁在左，A₂在右，水平虚线连接
export const symmetryPointDiagram: Diagram2DData = {
  name: '点关于直线对称',
  vertices: [
    [75, 10],    // 0: 直线 l 上端
    [75, 110],   // 1: 直线 l 下端
    [20, 55],    // 2: 点 A₁（左侧）
    [130, 55],   // 3: 对称点 A₂（右侧）
    [75, 55],    // 4: 中点 M（在 l 上）
  ],
  edges: [
    { from: 0, to: 1, color: '#334155', strokeWidth: 2.5 },   // 直线 l
    { from: 2, to: 3, color: '#9333ea', strokeWidth: 2, dashed: true }, // A₁A₂
  ],
  polygons: [],
  freeLabels: [
    { pos: [75, 10], text: 'l', offset: [10, 0], fontSize: 18, color: '#334155' },
    { pos: [20, 55], text: 'A₁', offset: [-8, -12], fontSize: 18, color: '#dc2626', dot: '#dc2626' },
    { pos: [130, 55], text: 'A₂', offset: [8, -12], fontSize: 18, color: '#2563eb', dot: '#2563eb' },
    { pos: [75, 55], text: 'M', offset: [0, 14], fontSize: 16, color: '#334155', dot: true },
  ],
  rightAngles: [
    { vertex: 4, from: 2, to: 0, size: 8, color: '#9333ea' },
  ],
};

/* ── 大题3配图：三条直线 l₁ l₂ l₃ + 交点 P ── */
// l₁(斜率2,蓝), l₂(斜率-1/3,绿), l₃(斜率1/2,紫)
// l₁∩l₂ = P(-1,2)，l₃ 不过 P
export const threeLinesDiagram: Diagram2DData = {
  name: '三条直线与交点',
  vertices: [
    [35, 125],   // 0: l₁ 左下端
    [85, 25],    // 1: l₁ 右上端
    [15, 50],    // 2: l₂ 左端
    [145, 93],   // 3: l₂ 右端
    [18, 106],   // 4: l₃ 左端
    [138, 48],   // 5: l₃ 右端
    [64, 66],    // 6: 交点 P
  ],
  edges: [
    { from: 0, to: 1, color: '#2563eb', strokeWidth: 2.5 },   // l₁
    { from: 2, to: 3, color: '#16a34a', strokeWidth: 2.5 },   // l₂
    { from: 4, to: 5, color: '#9333ea', strokeWidth: 2.5 },   // l₃
  ],
  polygons: [],
  freeLabels: [
    { pos: [64, 66], text: 'P', offset: [-5, -11], fontSize: 14, color: '#dc2626', dot: '#dc2626' },
    { pos: [85, 25], text: 'l₁', offset: [6, -6], fontSize: 14, color: '#2563eb' },
    { pos: [145, 93], text: 'l₂', offset: [8, 5], fontSize: 14, color: '#16a34a' },
    { pos: [138, 48], text: 'l₃', offset: [11, -1], fontSize: 14, color: '#9333ea' },
  ],
};

/* ── 点关于点对称示意图 ── */
export const symmetryPointPointDiagram: Diagram2DData = {
  name: '点关于点对称',
  vertices: [
    [30, 35],    // 0: 点 A
    [120, 75],   // 1: 对称点 A'
    [75, 55],    // 2: 对称中心 C（中点）
  ],
  edges: [
    { from: 0, to: 1, color: '#9333ea', strokeWidth: 1.5, dashed: true }, // AA'
  ],
  polygons: [],
  freeLabels: [
    { pos: [30, 35], text: 'A₁', offset: [-14, -8], fontSize: 18, color: '#dc2626', dot: '#dc2626' },
    { pos: [120, 75], text: 'A₂', offset: [10, -8], fontSize: 18, color: '#2563eb', dot: '#2563eb' },
    { pos: [75, 55], text: 'C', offset: [0, 16], fontSize: 16, color: '#334155', dot: true },
  ],
};

/* ── 直线关于点对称示意图 ── */
// 水平版：l₁ 在上，l₂ 在下，C 居中，QQ₁ 竖直连线
export const lineSymPointDiagram: Diagram2DData = {
  name: '直线关于点对称',
  vertices: [
    [10, 25],    // 0: l₁ 左端
    [140, 25],   // 1: l₁ 右端
    [10, 105],   // 2: l₂ 左端
    [140, 105],  // 3: l₂ 右端
    [75, 65],    // 4: 对称中心 C（两线中间）
    [75, 25],    // 5: Q（在 l₁ 上）
    [75, 105],   // 6: Q₁（对称点，在 l₂ 上）
  ],
  edges: [
    { from: 0, to: 1, color: '#2563eb', strokeWidth: 2 },                  // l₁
    { from: 2, to: 3, color: '#dc2626', strokeWidth: 2 },                  // l₂
    { from: 5, to: 6, color: '#9333ea', strokeWidth: 1.2, dashed: true },  // QQ₁
  ],
  polygons: [],
  freeLabels: [
    { pos: [140, 25], text: 'l₁', offset: [6, -4], fontSize: 16, color: '#2563eb' },
    { pos: [140, 105], text: 'l₂', offset: [6, -4], fontSize: 16, color: '#dc2626' },
    { pos: [75, 65], text: 'C', offset: [10, -2], fontSize: 16, color: '#334155', dot: true },
    { pos: [75, 25], text: 'Q', offset: [8, -8], fontSize: 14, color: '#2563eb', dot: '#2563eb' },
    { pos: [75, 105], text: 'Q₁', offset: [8, 6], fontSize: 14, color: '#dc2626', dot: '#dc2626' },
  ],
};

/* ── 情况1：直线对称（相交） ── */
// 画布 166×119（原 237×170 缩小 30%）
// 所有坐标 ×0.7
export const lineSymIntersectDiagram: Diagram2DData = {
  name: '直线对称-相交',
  vertices: [
    [84, 11],     // 0: l 上端（对称轴）
    [84, 112],    // 1: l 下端
    [21, 35],     // 2: l₁ 左端
    [147, 119],   // 3: l₁ 右端（过P延伸）
    [84, 77],     // 4: 交点 P（三线共点）
    [38, 46],     // 5: Q（在 l₁ 上）
    [130, 46],    // 6: Q₁（Q 关于 l 的对称点，在 l₂ 上）
    [21, 119],    // 7: l₂ 左端
    [147, 35],    // 8: l₂ 右端（过P延伸）
    [84, 46],     // 9: 中点 M（QQ₁ 中点，在 l 上）
  ],
  edges: [
    { from: 0, to: 1, color: '#334155', strokeWidth: 2 },                  // 对称轴 l
    { from: 2, to: 3, color: '#2563eb', strokeWidth: 1.5 },                // l₁
    { from: 7, to: 8, color: '#dc2626', strokeWidth: 1.5 },                // l₂
    { from: 5, to: 6, color: '#9333ea', strokeWidth: 1, dashed: true },    // QQ₁
  ],
  polygons: [],
  freeLabels: [
    { pos: [84, 11], text: 'l', offset: [8, 4], fontSize: 13, color: '#334155' },
    { pos: [147, 119], text: 'l₁', offset: [-134, -89], fontSize: 13, color: '#2563eb' },
    { pos: [147, 35], text: 'l₂', offset: [8, -5], fontSize: 13, color: '#dc2626' },
    { pos: [84, 77], text: 'P', offset: [-16, 1], fontSize: 13, color: '#334155', dot: true },
    { pos: [38, 46], text: 'Q', offset: [-8, 11], fontSize: 13, color: '#2563eb', dot: '#2563eb' },
    { pos: [130, 46], text: 'Q₁', offset: [10, 11], fontSize: 13, color: '#dc2626', dot: '#dc2626' },
    { pos: [84, 46], text: 'M', offset: [-12, -8], fontSize: 12, color: '#334155', dot: true },
  ],
  rightAngles: [
    { vertex: 9, from: 5, to: 1, size: 7, color: '#9333ea' },
  ],
  paths: [],
};

/* ── 情况2：直线对称（平行） ── */
// 画布 166×98（原 237×140 缩小 30%）
// 所有坐标 ×0.7
export const lineSymParallelDiagram: Diagram2DData = {
  name: '直线对称-平行',
  vertices: [
    [9, 50],      // 0: l 左端（对称轴）
    [151, 50],    // 1: l 右端
    [9, 18],      // 2: l₁ 左端（上方）
    [151, 18],    // 3: l₁ 右端
    [9, 83],      // 4: l₂ 左端（下方）
    [151, 83],    // 5: l₂ 右端
    [64, 18],     // 6: Q（在 l₁ 上）
    [64, 83],     // 7: Q'（对称点）
    [64, 50],     // 8: 中点 M（在 l 上）
  ],
  edges: [
    { from: 0, to: 1, color: '#334155', strokeWidth: 2 },
    { from: 2, to: 3, color: '#2563eb', strokeWidth: 1.5 },
    { from: 4, to: 5, color: '#dc2626', strokeWidth: 1.5 },
    { from: 6, to: 7, color: '#9333ea', strokeWidth: 1, dashed: true },
  ],
  polygons: [],
  freeLabels: [
    { pos: [151, 50], text: 'l', offset: [4, -8], fontSize: 13, color: '#334155' },
    { pos: [151, 18], text: 'l₁', offset: [4, -4], fontSize: 12, color: '#2563eb' },
    { pos: [151, 83], text: 'l₂', offset: [4, -4], fontSize: 12, color: '#dc2626' },
    { pos: [64, 18], text: 'Q', offset: [-9, -8], fontSize: 12, color: '#2563eb', dot: '#2563eb' },
    { pos: [64, 83], text: 'Q₁', offset: [-8, -7], fontSize: 12, color: '#dc2626', dot: '#dc2626' },
    { pos: [64, 50], text: 'M', offset: [-10, -7], fontSize: 11, color: '#334155', dot: true },
  ],
  rightAngles: [
    { vertex: 8, from: 6, to: 1, size: 7, color: '#9333ea' },
  ],
  paths: [],
};

/* ── 合并版：直线对称（相交+平行） ── */
// 整体放大 1.3 倍，上半=相交，下半=平行
// 画布 237×340
export const lineSymCombinedDiagram: Diagram2DData = {
  name: '直线对称',
  vertices: [
    // ── 上半：相交 ──
    [118, 32],    // 0: l 上端（对称轴）
    [118, 152],   // 1: l 下端
    [20, 71],     // 2: l₁ 左端
    [212, 137],   // 3: l₁ 右端
    [118, 104],   // 4: 交点 P
    [46, 79],     // 5: Q（在 l₁ 上）
    [191, 79],    // 6: Q'（对称点）
    [20, 130],    // 7: l₂ 左端
    [216, 72],    // 8: l₂ 右端
    // ── 下半：平行 ──
    [13, 262],    // 9: l 左端（对称轴）
    [215, 262],   // 10: l 右端
    [13, 215],    // 11: l₁ 左端（上方）
    [215, 215],   // 12: l₁ 右端
    [13, 309],    // 13: l₂ 左端（下方）
    [215, 309],   // 14: l₂ 右端
    [91, 215],    // 15: Q（在 l₁ 上）
    [91, 309],    // 16: Q'（对称点）
    [91, 262],    // 17: 中点 M（在 l 上）
  ],
  edges: [
    // ── 上半：相交 ──
    { from: 0, to: 1, color: '#334155', strokeWidth: 2.5 },                // 对称轴 l
    { from: 2, to: 3, color: '#2563eb', strokeWidth: 2 },                  // l₁
    { from: 7, to: 8, color: '#dc2626', strokeWidth: 2 },                  // l₂
    { from: 5, to: 6, color: '#9333ea', strokeWidth: 1.2, dashed: true },  // QQ'
    // ── 下半：平行 ──
    { from: 9, to: 10, color: '#334155', strokeWidth: 2.5 },               // 对称轴 l
    { from: 11, to: 12, color: '#2563eb', strokeWidth: 2 },                // l₁
    { from: 13, to: 14, color: '#dc2626', strokeWidth: 2 },                // l₂
    { from: 15, to: 16, color: '#9333ea', strokeWidth: 1.2, dashed: true },// QQ'
  ],
  polygons: [],
  freeLabels: [
    // ── 上半标题 ──
    { pos: [118, 14], text: '情况1：相交', offset: [0, 0], fontSize: 14, color: '#64748b' },
    // ── 上半标注 ──
    { pos: [118, 32], text: 'l', offset: [10, 5], fontSize: 16, color: '#334155' },
    { pos: [202, 130], text: 'l₁', offset: [19, 8], fontSize: 15, color: '#2563eb' },
    { pos: [202, 71], text: 'l₂', offset: [22, 1], fontSize: 15, color: '#dc2626' },
    { pos: [118, 104], text: 'P', offset: [10, 12], fontSize: 15, color: '#334155', dot: true },
    { pos: [46, 79], text: 'Q', offset: [-6, 14], fontSize: 15, color: '#2563eb', dot: '#2563eb' },
    { pos: [191, 79], text: 'Q₁', offset: [5, 13], fontSize: 15, color: '#dc2626', dot: '#dc2626' },
    // ── 下半标题 ──
    { pos: [118, 182], text: '情况2：平行', offset: [0, 0], fontSize: 14, color: '#64748b' },
    // ── 下半标注 ──
    { pos: [215, 262], text: 'l', offset: [5, -10], fontSize: 16, color: '#334155' },
    { pos: [215, 215], text: 'l₁', offset: [5, -5], fontSize: 15, color: '#2563eb' },
    { pos: [215, 309], text: 'l₂', offset: [5, -5], fontSize: 15, color: '#dc2626' },
    { pos: [91, 215], text: 'Q', offset: [-11, -10], fontSize: 15, color: '#2563eb', dot: '#2563eb' },
    { pos: [91, 309], text: 'Q₁', offset: [-10, -9], fontSize: 15, color: '#dc2626', dot: '#dc2626' },
    { pos: [91, 262], text: 'M', offset: [-12, -9], fontSize: 14, color: '#334155', dot: true },
  ],
  rightAngles: [
    { vertex: 17, from: 15, to: 10, size: 9, color: '#9333ea' },
  ],
  paths: [
    // 分隔线（虚线）
    { d: 'M 13 170 L 224 170', color: '#cbd5e1', strokeWidth: 1, dashed: true },
  ],
};

/* ── 例5配图：直线关于直线对称（相交） ── */
// l₁: 2x-y-3=0, l₂(对称轴): y=x, l₃(结果): x-2y+3=0
// 参照教学图布局：对称轴竖直居中，l₁ 和 l₃ 对称分布，QQ₁ 水平
// 画布 166×119（与教学图一致）
export const lineSymEx5Diagram: Diagram2DData = {
  name: '例5-相交对称',
  vertices: [
    [83, 10],     // 0: l₂ 上端（对称轴）
    [83, 112],    // 1: l₂ 下端
    [25, 30],     // 2: l₁ 左端
    [141, 112],   // 3: l₁ 右端（过P）
    [83, 71],     // 4: 交点 P
    [42, 43],     // 5: Q（在 l₁ 上）
    [124, 43],    // 6: Q₁（Q 关于 l₂ 的对称点，在 l₃ 上）
    [25, 112],    // 7: l₃ 左端
    [141, 30],    // 8: l₃ 右端（过P）
    [83, 43],     // 9: 中点 M
  ],
  edges: [
    { from: 0, to: 1, color: '#334155', strokeWidth: 2 },                  // l₂（对称轴）
    { from: 2, to: 3, color: '#2563eb', strokeWidth: 1.5 },                // l₁
    { from: 7, to: 8, color: '#dc2626', strokeWidth: 1.5 },                // l₃
    { from: 5, to: 6, color: '#9333ea', strokeWidth: 1, dashed: true },    // QQ₁
  ],
  polygons: [],
  freeLabels: [
    { pos: [83, 10], text: 'l₂(y=x)', offset: [8, 4], fontSize: 11, color: '#334155' },
    { pos: [141, 112], text: 'l₁', offset: [-130, -82], fontSize: 12, color: '#2563eb' },
    { pos: [141, 30], text: 'l₃', offset: [8, -5], fontSize: 12, color: '#dc2626' },
    { pos: [83, 71], text: 'P', offset: [-16, 1], fontSize: 12, color: '#334155', dot: true },
    { pos: [42, 43], text: 'Q', offset: [-8, 11], fontSize: 12, color: '#2563eb', dot: '#2563eb' },
    { pos: [124, 43], text: 'Q₁', offset: [10, 11], fontSize: 12, color: '#dc2626', dot: '#dc2626' },
    { pos: [83, 43], text: 'M', offset: [-12, -8], fontSize: 11, color: '#334155', dot: true },
  ],
  rightAngles: [
    { vertex: 9, from: 5, to: 1, size: 7, color: '#9333ea' },
  ],
};

/* ── 例6配图：直线关于直线对称（平行） ── */
// l₁: x-y+4=0, l₂: x-y+1=0, l₃: x-y-2=0
// Q(0,4), Q₁(3,1), M(1.5,2.5)
// 画布 154×109（原 220×155 缩小 30%）
// 所有坐标 ×0.7
export const lineSymEx6Diagram: Diagram2DData = {
  name: '例6-平行对称',
  vertices: [
    [7, 21],      // 0: l₁ 左端
    [130, 21],    // 1: l₁ 右端
    [7, 53],      // 2: l₂ 左端
    [130, 53],    // 3: l₂ 右端
    [7, 84],      // 4: l₃ 左端
    [130, 84],    // 5: l₃ 右端
    [53, 21],     // 6: Q
    [53, 84],     // 7: Q₁
    [53, 53],     // 8: M
  ],
  edges: [
    { from: 0, to: 1, color: '#2563eb', strokeWidth: 1.5 },                // l₁
    { from: 2, to: 3, color: '#334155', strokeWidth: 2 },                   // l₂（对称轴）
    { from: 4, to: 5, color: '#dc2626', strokeWidth: 1.5 },                 // l₃
    { from: 6, to: 7, color: '#9333ea', strokeWidth: 1, dashed: true },     // QQ₁
  ],
  polygons: [],
  freeLabels: [
    { pos: [130, 21], text: 'l₁', offset: [4, 0], fontSize: 12, color: '#2563eb' },
    { pos: [130, 53], text: 'l₂', offset: [4, 0], fontSize: 12, color: '#334155' },
    { pos: [130, 84], text: 'l₃', offset: [4, 0], fontSize: 12, color: '#dc2626' },
    { pos: [53, 21], text: 'Q', offset: [6, -8], fontSize: 11, color: '#2563eb', dot: '#2563eb' },
    { pos: [53, 84], text: 'Q₁', offset: [6, 6], fontSize: 11, color: '#dc2626', dot: '#dc2626' },
    { pos: [53, 53], text: 'M', offset: [-12, -4], fontSize: 11, color: '#334155', dot: true },
  ],
  rightAngles: [
    { vertex: 8, from: 6, to: 3, size: 7, color: '#9333ea' },
  ],
};

/* ── 大题5配图：过定点 P(1,3) + △AOB 面积 ── */
// 画布 175×150，原点(32,130)，1单位=17px
// 蓝色实线: 3x+y-6=0（面积最小时 m=-3），绿色虚线: y=-x+4（另一条过P的线，展示"恒过定点"）
// 蓝色三角形 △OBA 浅色填充
export const fixedPointAreaDiagram: Diagram2DData = {
  name: '过定点与面积',
  vertices: [
    [31, -6],    // 0: y轴上端
    [170, 130],  // 1: x轴右端
    [32, 130],   // 2: 原点 O
    [23, 4],     // 3: 线1左上延伸（3x+y=6）
    [72, 144],   // 4: 线1右下延伸
    [32, 28],    // 5: B(0,6)
    [66, 130],   // 6: A(2,0)
    [49, 79],    // 7: P(1,3)
    [27, 57],    // 8: 线2左端（y=-x+4）
    [105, 135],  // 9: 线2右端
  ],
  edges: [
    { from: 2, to: 0, color: '#334155', strokeWidth: 1.5, arrow: 'end' },  // y轴
    { from: 2, to: 1, color: '#334155', strokeWidth: 1.5, arrow: 'end' },  // x轴
    { from: 3, to: 4, color: '#2563eb', strokeWidth: 2 },                   // 线1: 3x+y-6=0
    { from: 8, to: 9, color: '#16a34a', strokeWidth: 1.5, dashed: true },   // 线2: y=-x+4
  ],
  polygons: [
    { points: [2, 5, 6], fill: '#dbeafe', opacity: 0.35 },
  ],
  freeLabels: [
    { pos: [170, 130], text: 'x', offset: [0, -14], fontSize: 12, color: '#334155' },
    { pos: [31, -6], text: 'y', offset: [14, 0], fontSize: 12, color: '#334155' },
    { pos: [32, 130], text: 'O', offset: [-14, 12], fontSize: 12, color: '#334155' },
    { pos: [49, 79], text: 'P(1,3)', offset: [29, 0], fontSize: 14, color: '#dc2626', dot: '#dc2626' },
    { pos: [66, 130], text: 'A', offset: [-8, 10], fontSize: 14, color: '#2563eb', dot: '#2563eb' },
    { pos: [32, 28], text: 'B', offset: [-14, 6], fontSize: 14, color: '#2563eb', dot: '#2563eb' },
  ],
};

/* ── 大题6(2)配图：P(1,2) 关于 l₃: x+y-6=0 的对称点 P₁(5,4) ── */
// 画布 175×150，原点(25,125)，1单位≈17px
// 坐标轴 + 直线 l₃ + P, P₁, 中点 M, 连线 PP₁(虚线), 直角标记
export const symmetryEx6Diagram: Diagram2DData = {
  name: '大题6对称点',
  vertices: [
    [15, 23],    // 0: l₃ 左上端
    [132, 130],  // 1: l₃ 右下端
    [42, 91],    // 2: P(1,2)
    [110, 57],   // 3: P₁(5,4)
    [76, 74],    // 4: 中点 M(3,3)
  ],
  edges: [
    { from: 0, to: 1, color: '#334155', strokeWidth: 2.5 },                // 直线 l₃
    { from: 2, to: 3, color: '#9333ea', strokeWidth: 1.5, dashed: true },  // PP₁
  ],
  polygons: [],
  freeLabels: [
    { pos: [132, 130], text: 'l₃', offset: [8, -4], fontSize: 14, color: '#334155' },
    { pos: [42, 91], text: 'P', offset: [-16, 8], fontSize: 14, color: '#dc2626', dot: '#dc2626' },
    { pos: [110, 57], text: 'P₁', offset: [8, -10], fontSize: 14, color: '#2563eb', dot: '#2563eb' },
    { pos: [76, 74], text: 'M', offset: [10, -10], fontSize: 12, color: '#334155', dot: true },
  ],
  rightAngles: [
    { vertex: 4, from: 2, to: 1, size: 8, color: '#9333ea' },
  ],
};
