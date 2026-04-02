import type { Diagram2DData } from '@/components/shared/Geo2dSvg';

/* ── 椭圆示意图（焦点在 x 轴）：原生 SVG 椭圆 + 轴 + 焦点 + 点P ── */
// a_px=60, b_px=36, c_px=48, center(105,76)
// P 在椭圆上偏右上方，θ≈50°：P = (105 + 60cos50°, 76 - 36sin50°) ≈ (144, 48)
export const ellipseDiagram: Diagram2DData = {
  name: '椭圆',
  vertices: [
    [10, 76],    // 0: x轴左端
    [200, 76],   // 1: x轴右端
    [105, 5],    // 2: y轴上端
    [105, 148],  // 3: y轴下端
    [57, 76],    // 4: F₁ (-c,0)
    [153, 76],   // 5: F₂ (c,0)
    [144, 48],   // 6: P（椭圆上的点）
  ],
  edges: [
    { from: 0, to: 1, arrow: 'end', color: '#334155', strokeWidth: 1.5 },
    { from: 3, to: 2, arrow: 'end', color: '#334155', strokeWidth: 1.5 },
    { from: 4, to: 6, color: '#334155', strokeWidth: 1.5 },
    { from: 5, to: 6, color: '#334155', strokeWidth: 1.5 },
  ],
  polygons: [],
  ellipses: [
    { center: [105, 76], rx: 60, ry: 36, color: '#2563eb', strokeWidth: 2.2 },
  ],
  freeLabels: [
    { pos: [200, 76], text: 'x', offset: [0, -14], color: '#334155' },
    { pos: [105, 5], text: 'y', offset: [14, 5], color: '#334155' },
    { pos: [57, 76], text: 'F₁', offset: [2, 12], fontSize: 14, color: '#dc2626', dot: '#dc2626' },
    { pos: [153, 76], text: 'F₂', offset: [-2, 13], fontSize: 14, color: '#dc2626', dot: '#dc2626' },
    { pos: [144, 48], text: 'P', offset: [8, -10], fontSize: 14, color: '#334155', dot: '#334155' },
  ],
};

/* ── 椭圆表格图（焦点在 x 轴）：带完整顶点标注 ── */
// center(107,93), a_px=66, b_px=40, c_px=53 (适配213x186画布)
export const ellipseTableX: Diagram2DData = {
  name: '椭圆-横',
  vertices: [
    [7, 93],     // 0: x轴左
    [207, 93],   // 1: x轴右
    [107, 13],   // 2: y轴上
    [107, 173],  // 3: y轴下
    [54, 93],    // 4: F₁
    [160, 93],   // 5: F₂
    [146, 62],   // 6: P
  ],
  edges: [
    { from: 0, to: 1, arrow: 'end', color: '#334155', strokeWidth: 1.2 },
    { from: 3, to: 2, arrow: 'end', color: '#334155', strokeWidth: 1.2 },
    { from: 4, to: 6, color: '#334155', strokeWidth: 1.2 },
    { from: 5, to: 6, color: '#334155', strokeWidth: 1.2 },
  ],
  polygons: [],
  ellipses: [
    { center: [107, 93], rx: 66, ry: 40, color: '#2563eb', strokeWidth: 1.8 },
  ],
  freeLabels: [
    { pos: [207, 93], text: 'x', offset: [0, -10], fontSize: 12, color: '#334155' },
    { pos: [107, 13], text: 'y', offset: [10, 4], fontSize: 12, color: '#334155' },
    { pos: [41, 93], text: 'A₁', offset: [-7, 9], fontSize: 11, color: '#334155', dot: '#334155' },
    { pos: [173, 93], text: 'A₂', offset: [9, 10], fontSize: 11, color: '#334155', dot: '#334155' },
    { pos: [107, 53], text: 'B₂', offset: [10, -8], fontSize: 11, color: '#334155', dot: '#334155' },
    { pos: [107, 133], text: 'B₁', offset: [9, 9], fontSize: 11, color: '#334155', dot: '#334155' },
    { pos: [54, 93], text: 'F₁', offset: [3, -9], fontSize: 11, color: '#dc2626', dot: '#dc2626' },
    { pos: [160, 93], text: 'F₂', offset: [-2, -10], fontSize: 11, color: '#dc2626', dot: '#dc2626' },
    { pos: [146, 62], text: 'P', offset: [3, -8], fontSize: 11, color: '#334155', dot: '#334155' },
  ],
};

/* ── 椭圆表格图（焦点在 y 轴）：带完整顶点标注 ── */
// center(107,93), a_px=66(y方向), b_px=40(x方向), c_px=53 (适配213x186画布)
export const ellipseTableY: Diagram2DData = {
  name: '椭圆-纵',
  vertices: [
    [7, 93],     // 0: x轴左
    [207, 93],   // 1: x轴右
    [107, 13],   // 2: y轴上
    [107, 173],  // 3: y轴下
    [107, 41],   // 4: F₂ (上焦点)
    [107, 146],  // 5: F₁ (下焦点)
    [133, 46],   // 6: P
  ],
  edges: [
    { from: 0, to: 1, arrow: 'end', color: '#334155', strokeWidth: 1.2 },
    { from: 3, to: 2, arrow: 'end', color: '#334155', strokeWidth: 1.2 },
    { from: 4, to: 6, color: '#334155', strokeWidth: 1.2 },
    { from: 5, to: 6, color: '#334155', strokeWidth: 1.2 },
  ],
  polygons: [],
  ellipses: [
    { center: [107, 93], rx: 40, ry: 66, color: '#2563eb', strokeWidth: 1.8 },
  ],
  freeLabels: [
    { pos: [207, 93], text: 'x', offset: [0, -10], fontSize: 12, color: '#334155' },
    { pos: [107, 13], text: 'y', offset: [10, 4], fontSize: 12, color: '#334155' },
    { pos: [107, 27], text: 'A₂', offset: [-8, -5], fontSize: 11, color: '#334155', dot: '#334155' },
    { pos: [107, 159], text: 'A₁', offset: [12, 5], fontSize: 11, color: '#334155', dot: '#334155' },
    { pos: [67, 93], text: 'B₁', offset: [-7, 10], fontSize: 11, color: '#334155', dot: '#334155' },
    { pos: [147, 93], text: 'B₂', offset: [9, 9], fontSize: 11, color: '#334155', dot: '#334155' },
    { pos: [107, 41], text: 'F₂', offset: [-13, 4], fontSize: 11, color: '#dc2626', dot: '#dc2626' },
    { pos: [107, 146], text: 'F₁', offset: [-13, -2], fontSize: 11, color: '#dc2626', dot: '#dc2626' },
    { pos: [133, 46], text: 'P', offset: [13, 2], fontSize: 11, color: '#334155', dot: '#334155' },
  ],
};

/* ── 椭圆勾股图：展示 a²=b²+c² 的推导，B、O、F₁ 构成直角三角形 ── */
// center(105,85), a_px=60, b_px=36, c_px=48
export const ellipsePythagorDiagram: Diagram2DData = {
  name: '椭圆勾股',
  vertices: [
    [10, 85],    // 0: x轴左
    [200, 85],   // 1: x轴右
    [105, 5],    // 2: y轴上
    [105, 160],  // 3: y轴下
    [57, 85],    // 4: F₁(-c,0)
    [105, 49],   // 5: B(0,b) 短轴上顶点
    [105, 85],   // 6: O 原点
    [153, 85],   // 7: F₂(c,0)
  ],
  edges: [
    { from: 0, to: 1, arrow: 'end', color: '#334155', strokeWidth: 1.2 },
    { from: 3, to: 2, arrow: 'end', color: '#334155', strokeWidth: 1.2 },
    { from: 4, to: 5, color: '#dc2626', strokeWidth: 1.8 },
    { from: 7, to: 5, color: '#dc2626', strokeWidth: 1.8 },
    { from: 6, to: 5, color: '#2563eb', strokeWidth: 1.8, dashed: true },
    { from: 6, to: 4, color: '#16a34a', strokeWidth: 1.8, dashed: true },
  ],
  polygons: [],
  ellipses: [
    { center: [105, 85], rx: 60, ry: 36, color: '#94a3b8', strokeWidth: 1.5 },
  ],
  rightAngles: [
    { vertex: 6, from: 5, to: 4, size: 8, color: '#334155' },
  ],
  freeLabels: [
    { pos: [200, 85], text: 'x', offset: [0, -10], fontSize: 12, color: '#334155' },
    { pos: [105, 5], text: 'y', offset: [10, 4], fontSize: 12, color: '#334155' },
    { pos: [57, 85], text: 'F₁', offset: [-4, 13], fontSize: 13, color: '#dc2626', dot: '#dc2626' },
    { pos: [153, 85], text: 'F₂', offset: [4, 13], fontSize: 13, color: '#dc2626', dot: '#dc2626' },
    { pos: [105, 49], text: 'B', offset: [10, 0], fontSize: 13, color: '#334155', dot: '#334155' },
    { pos: [105, 85], text: 'O', offset: [8, 10], fontSize: 12, color: '#334155' },
    { pos: [81, 67], text: 'a', offset: [-12, 0], fontSize: 13, color: '#dc2626' },
    { pos: [105, 67], text: 'b', offset: [8, 0], fontSize: 13, color: '#2563eb' },
    { pos: [81, 85], text: 'c', offset: [0, 12], fontSize: 13, color: '#16a34a' },
  ],
};

/* ── 双曲线示意图（焦点在 x 轴）：两支 + 渐近线 ── */
// a=1.5, b=1.2, c=1.92, scale=25px/unit, center(105,76)
export const hyperbolaDiagram: Diagram2DData = {
  name: '双曲线',
  vertices: [
    [180, 24],   // 0: 右支上端 x=3
    [168, 36],   // 1: 右支 x=2.5 上
    [155, 50],   // 2: 右支 x=2 上
    [143, 76],   // 3: 右顶点 (a,0)
    [155, 102],  // 4: 右支 x=2 下
    [168, 116],  // 5: 右支 x=2.5 下
    [180, 128],  // 6: 右支下端 x=3
    [30, 24],    // 7: 左支上端 x=-3
    [42, 36],    // 8: 左支 x=-2.5 上
    [55, 50],    // 9: 左支 x=-2 上
    [67, 76],    // 10: 左顶点 (-a,0)
    [55, 102],   // 11: 左支 x=-2 下
    [42, 116],   // 12: 左支 x=-2.5 下
    [30, 128],   // 13: 左支下端 x=-3
    [10, 76],    // 14: x轴左端
    [200, 76],   // 15: x轴右端
    [105, 5],    // 16: y轴上端
    [105, 148],  // 17: y轴下端
    [57, 76],    // 18: F₁ (-c,0)
    [153, 76],   // 19: F₂ (c,0)
    [30, 136],   // 20: 渐近线1左端 (-3, -2.4)
    [180, 16],   // 21: 渐近线1右端 (3, 2.4)
    [30, 16],    // 22: 渐近线2左端 (-3, 2.4)
    [180, 136],  // 23: 渐近线2右端 (3, -2.4)
  ],
  edges: [
    { from: 0, to: 1, color: '#2563eb', strokeWidth: 2.2 },
    { from: 1, to: 2, color: '#2563eb', strokeWidth: 2.2 },
    { from: 2, to: 3, color: '#2563eb', strokeWidth: 2.2 },
    { from: 3, to: 4, color: '#2563eb', strokeWidth: 2.2 },
    { from: 4, to: 5, color: '#2563eb', strokeWidth: 2.2 },
    { from: 5, to: 6, color: '#2563eb', strokeWidth: 2.2 },
    { from: 7, to: 8, color: '#2563eb', strokeWidth: 2.2 },
    { from: 8, to: 9, color: '#2563eb', strokeWidth: 2.2 },
    { from: 9, to: 10, color: '#2563eb', strokeWidth: 2.2 },
    { from: 10, to: 11, color: '#2563eb', strokeWidth: 2.2 },
    { from: 11, to: 12, color: '#2563eb', strokeWidth: 2.2 },
    { from: 12, to: 13, color: '#2563eb', strokeWidth: 2.2 },
    { from: 14, to: 15, arrow: 'end', color: '#334155', strokeWidth: 1.5 },
    { from: 17, to: 16, arrow: 'end', color: '#334155', strokeWidth: 1.5 },
    { from: 20, to: 21, color: '#94a3b8', strokeWidth: 1.2, dashed: true },
    { from: 22, to: 23, color: '#94a3b8', strokeWidth: 1.2, dashed: true },
  ],
  polygons: [],
  freeLabels: [
    { pos: [200, 76], text: 'x', offset: [0, -14], color: '#334155' },
    { pos: [105, 5], text: 'y', offset: [14, 5], color: '#334155' },
    { pos: [105, 76], text: 'O', offset: [-12, 14], color: '#334155' },
    { pos: [57, 76], text: 'F₁', offset: [-5, -16], fontSize: 15, color: '#dc2626', dot: '#dc2626' },
    { pos: [153, 76], text: 'F₂', offset: [-5, -16], fontSize: 15, color: '#dc2626', dot: '#dc2626' },
    { pos: [143, 76], text: 'a', offset: [8, -14], fontSize: 15, color: '#334155' },
    { pos: [185, 20], text: '渐近线', offset: [0, -12], fontSize: 12, color: '#94a3b8' },
  ],
};

/* ── 抛物线示意图（y²=2px 开口向右）：焦点 F、准线、焦半径 PF ── */
// p=2, y²=4x, F=(1,0), directrix x=-1
// origin=(60,76), scale=28px/unit
export const parabolaDiagram: Diagram2DData = {
  name: '抛物线',
  vertices: [
    [60, 76],    // 0: 顶点 (0,0)
    [67, 50],    // 1: y=1, x=0.25
    [88, 27],    // 2: y=1.75, x=0.77 → approx
    [116, 8],    // 3: y=2.5, x=1.5625 → approx 点 P
    [67, 102],   // 4: y=-1
    [88, 125],   // 5: y=-1.75
    [116, 144],  // 6: y=-2.5
    [10, 76],    // 7: x轴左端
    [185, 76],   // 8: x轴右端
    [60, 5],     // 9: y轴上端
    [60, 148],   // 10: y轴下端
    [32, 5],     // 11: 准线上端 (x=-1)
    [32, 148],   // 12: 准线下端 (x=-1)
    [88, 76],    // 13: 焦点 F (1,0)
    [32, 8],     // 14: 点 P 在准线上的投影 H (x=-1, y=2.5)
  ],
  edges: [
    { from: 0, to: 1, color: '#2563eb', strokeWidth: 2.2 },
    { from: 1, to: 2, color: '#2563eb', strokeWidth: 2.2 },
    { from: 2, to: 3, color: '#2563eb', strokeWidth: 2.2 },
    { from: 0, to: 4, color: '#2563eb', strokeWidth: 2.2 },
    { from: 4, to: 5, color: '#2563eb', strokeWidth: 2.2 },
    { from: 5, to: 6, color: '#2563eb', strokeWidth: 2.2 },
    { from: 7, to: 8, arrow: 'end', color: '#334155', strokeWidth: 1.5 },
    { from: 10, to: 9, arrow: 'end', color: '#334155', strokeWidth: 1.5 },
    { from: 11, to: 12, color: '#94a3b8', strokeWidth: 1.8, dashed: true },
    { from: 13, to: 3, color: '#dc2626', strokeWidth: 1.5, dashed: true },
    { from: 3, to: 14, color: '#16a34a', strokeWidth: 1.5, dashed: true },
  ],
  polygons: [],
  rightAngles: [
    { vertex: 14, from: 11, to: 3, size: 7, color: '#16a34a' },
  ],
  freeLabels: [
    { pos: [185, 76], text: 'x', offset: [0, -14], color: '#334155' },
    { pos: [60, 5], text: 'y', offset: [14, 5], color: '#334155' },
    { pos: [60, 76], text: 'O', offset: [-14, 14], color: '#334155' },
    { pos: [88, 76], text: 'F', offset: [5, -16], fontSize: 16, color: '#dc2626', dot: '#dc2626' },
    { pos: [116, 8], text: 'P', offset: [10, -5], fontSize: 15, color: '#2563eb', dot: '#2563eb' },
    { pos: [32, 8], text: 'H', offset: [-16, -5], fontSize: 14, color: '#16a34a', dot: '#16a34a' },
    { pos: [32, 76], text: 'l', offset: [-14, 0], fontSize: 16, color: '#94a3b8' },
    { pos: [60, 76], tex: '\\frac{p}{2}', offset: [30, 14], fontSize: 13, color: '#dc2626' },
  ],
};

/* ── 例题2配图：a=3 b²=9/2 c=3√2/2, P=(0,b) Q=(2√2,-√2/2), ∠F₁PF₂=90° ── */
// scale=22px/unit, center(105,90)
// F₁(58,90) F₂(152,90) P(105,43) Q(167,106)
export const ellipseEx2Diagram: Diagram2DData = {
  name: '椭圆例题2',
  vertices: [
    [10, 90],    // 0: x轴左
    [205, 90],   // 1: x轴右
    [105, 8],    // 2: y轴上
    [105, 165],  // 3: y轴下
    [58, 90],    // 4: F₁
    [152, 90],   // 5: F₂
    [105, 43],   // 6: P
    [167, 106],  // 7: Q
  ],
  edges: [
    { from: 0, to: 1, arrow: 'end', color: '#334155', strokeWidth: 1.2 },
    { from: 3, to: 2, arrow: 'end', color: '#334155', strokeWidth: 1.2 },
    { from: 4, to: 6, color: '#dc2626', strokeWidth: 1.8 },
    { from: 6, to: 5, color: '#16a34a', strokeWidth: 1.8 },
    { from: 5, to: 7, color: '#16a34a', strokeWidth: 1.8 },
    { from: 4, to: 7, color: '#2563eb', strokeWidth: 1.8, dashed: true },
  ],
  polygons: [],
  ellipses: [
    { center: [105, 90], rx: 66, ry: 47, color: '#94a3b8', strokeWidth: 1.5 },
  ],
  rightAngles: [
    { vertex: 6, from: 4, to: 5, size: 8, color: '#334155' },
  ],
  freeLabels: [
    { pos: [205, 90], text: 'x', offset: [0, -10], fontSize: 12, color: '#334155' },
    { pos: [105, 8], text: 'y', offset: [10, 4], fontSize: 12, color: '#334155' },
    { pos: [58, 90],  text: 'F₁', offset: [-4, 13], fontSize: 13, color: '#dc2626', dot: '#dc2626' },
    { pos: [152, 90], text: 'F₂', offset: [4, -10], fontSize: 13, color: '#dc2626', dot: '#dc2626' },
    { pos: [105, 43], text: 'P',  offset: [-14, 0],  fontSize: 13, color: '#334155', dot: '#334155' },
    { pos: [167, 106], text: 'Q', offset: [8, 6],   fontSize: 13, color: '#334155', dot: '#334155' },
    { pos: [81, 67],  text: '3',  offset: [-10, 0],  fontSize: 13, color: '#dc2626' },
    { pos: [136, 75], text: '4',  offset: [6, -6],   fontSize: 13, color: '#16a34a' },
    { pos: [113, 98], text: '5',  offset: [0, 12],   fontSize: 13, color: '#2563eb' },
  ],
};

/* ── 大题1配图：椭圆方程建立示意 ── */
// 椭圆 x²/2 + y² = 1, a²=2 b²=1 c=1, 焦点(±1,0)
// center(105,76), a_px=55, b_px=39, c_px=39
export const ellipseExDiagram: Diagram2DData = {
  name: '椭圆例题',
  vertices: [
    [10, 76],    // 0: x轴左端
    [200, 76],   // 1: x轴右端
    [105, 5],    // 2: y轴上端
    [105, 148],  // 3: y轴下端
    [66, 76],    // 4: F₁(-1,0)
    [144, 76],   // 5: F₂(1,0)
  ],
  edges: [
    { from: 0, to: 1, arrow: 'end', color: '#334155', strokeWidth: 1.5 },
    { from: 3, to: 2, arrow: 'end', color: '#334155', strokeWidth: 1.5 },
  ],
  polygons: [],
  ellipses: [
    { center: [105, 76], rx: 55, ry: 39, color: '#2563eb', strokeWidth: 2.2 },
  ],
  freeLabels: [
    { pos: [200, 76], text: 'x', offset: [0, -14], color: '#334155' },
    { pos: [105, 5], text: 'y', offset: [14, 5], color: '#334155' },
    { pos: [105, 76], text: 'O', offset: [-12, 14], color: '#334155' },
    { pos: [66, 76], text: 'F₁', offset: [-5, -16], fontSize: 15, color: '#dc2626', dot: '#dc2626' },
    { pos: [144, 76], text: 'F₂', offset: [-5, -16], fontSize: 15, color: '#dc2626', dot: '#dc2626' },
  ],
};

/* ── 例题7配图：椭圆 x²+y²/4=1，焦点在 y 轴 ── */
// center(90,85), scale=42px/unit: b_px=42(x轴), a_px=84(y轴), c_px≈73
// F₂(0,√3)→(90,12)  F₁(0,-√3)→(90,158)
export const ellipseEx7Diagram: Diagram2DData = {
  name: '例题7',
  vertices: [
    [5,   85],  // 0: x轴左端
    [175, 85],  // 1: x轴右端
    [90,  5],   // 2: y轴上端
    [90,  175], // 3: y轴下端
    [90,  12],  // 4: F₂(0,√3)
    [90,  158], // 5: F₁(0,-√3)
  ],
  edges: [
    { from: 0, to: 1, arrow: 'end', color: '#94a3b8', strokeWidth: 1.2 },
    { from: 3, to: 2, arrow: 'end', color: '#94a3b8', strokeWidth: 1.2 },
  ],
  polygons: [],
  ellipses: [
    { center: [90, 85], rx: 42, ry: 84, color: '#2563eb', strokeWidth: 2 },
  ],
  freeLabels: [
    { pos: [175, 85], text: 'x',  offset: [0, -13],  fontSize: 13, color: '#64748b' },
    { pos: [90,  5],  text: 'y',  offset: [-2, -15], fontSize: 13, color: '#64748b' },
    { pos: [90,  12], text: 'F₂', offset: [13, 8],   fontSize: 13, color: '#dc2626', dot: '#dc2626' },
    { pos: [90,  158],text: 'F₁', offset: [11, -5],  fontSize: 13, color: '#dc2626', dot: '#dc2626' },
  ],
};

/* ── 高考实战S3配图：椭圆 x²/9+y²=1，展示 A、B 端点及 △F₁MF₂ ── */
// center(92,72), scale=20px/unit: a_px=60, b_px=20, c_px=57(c=2√2)
// A(0,-1)→(92,92)  B(3,0)→(152,72)  F₁(-2√2,0)→(35,72)  F₂(2√2,0)→(149,72)
// M(-1.5,√(3)/2)→(62,55)  check: 2.25/9+0.75=0.25+0.75=1 ✓
export const ellipseS3Diagram: Diagram2DData = {
  name: 'S3',
  vertices: [
    [8,   72],  // 0: x轴左端
    [177, 72],  // 1: x轴右端
    [92,   8],  // 2: y轴上端
    [92,  124], // 3: y轴下端
    [35,  72],  // 4: F₁(-2√2,0)
    [149, 72],  // 5: F₂(2√2,0)
    [62,  55],  // 6: M(-1.5, √3/2)
    [92,  92],  // 7: A(0,-1)
    [152, 72],  // 8: B(3,0) = 右顶点
  ],
  edges: [
    { from: 0, to: 1, arrow: 'end', color: '#94a3b8', strokeWidth: 1.2 },
    { from: 3, to: 2, arrow: 'end', color: '#94a3b8', strokeWidth: 1.2 },
    { from: 4, to: 6, color: '#dc2626', strokeWidth: 1.5, dashed: true },
    { from: 5, to: 6, color: '#16a34a', strokeWidth: 1.5, dashed: true },
    { from: 7, to: 8, color: '#f59e0b', strokeWidth: 1.5 },
  ],
  polygons: [],
  ellipses: [
    { center: [92, 72], rx: 60, ry: 20, color: '#2563eb', strokeWidth: 2 },
  ],
  freeLabels: [
    { pos: [177, 72], text: 'x',  offset: [0,  -12], fontSize: 13, color: '#64748b' },
    { pos: [92,   8], text: 'y',  offset: [10,   4], fontSize: 13, color: '#64748b' },
    { pos: [92,  72], text: 'O',  offset: [6,   13], fontSize: 12, color: '#334155' },
    { pos: [35,  72], text: 'F₁', offset: [-4,  14], fontSize: 13, color: '#dc2626', dot: '#dc2626' },
    { pos: [149, 72], text: 'F₂', offset: [5,   14], fontSize: 13, color: '#16a34a', dot: '#16a34a' },
    { pos: [62,  55], text: 'M',  offset: [-14,  0], fontSize: 13, color: '#334155', dot: '#334155' },
    { pos: [92,  92], text: 'A',  offset: [8,   12], fontSize: 13, color: '#f59e0b', dot: '#f59e0b' },
    { pos: [152, 72], text: 'B',  offset: [8,  -12], fontSize: 13, color: '#f59e0b', dot: '#f59e0b' },
  ],
};

/* ── 例题4配图：椭圆 x²/4+y²/3=1，竖直焦弦 AB，焦半径连线 ── */
// center(90,80), scale=38px/unit: a_px=76, b_px=66, c_px=38
// F₁(52,80) F₂(128,80) A(128,23) B(128,137)
export const ellipseEx4Diagram: Diagram2DData = {
  name: '例题4',
  vertices: [
    [5,   80],  // 0: x轴左端
    [180, 80],  // 1: x轴右端
    [90,  5],   // 2: y轴上端
    [90,  155], // 3: y轴下端
    [52,  80],  // 4: F₁(-1,0)
    [128, 80],  // 5: F₂(1,0)
    [128, 23],  // 6: A(1,3/2)
    [128, 137], // 7: B(1,-3/2)
  ],
  edges: [
    { from: 0, to: 1, arrow: 'end', color: '#94a3b8', strokeWidth: 1.2 },
    { from: 3, to: 2, arrow: 'end', color: '#94a3b8', strokeWidth: 1.2 },
    { from: 6, to: 7, color: '#334155', strokeWidth: 2 },
    { from: 6, to: 4, color: '#dc2626', dashed: true, strokeWidth: 1.5 },
    { from: 7, to: 4, color: '#dc2626', dashed: true, strokeWidth: 1.5 },
  ],
  polygons: [],
  ellipses: [
    { center: [90, 80], rx: 76, ry: 66, color: '#2563eb', strokeWidth: 2 },
  ],
  freeLabels: [
    { pos: [180, 80], text: 'x', offset: [0, -13], fontSize: 13, color: '#64748b' },
    { pos: [90,  5],  text: 'y', offset: [12, 4],  fontSize: 13, color: '#64748b' },
    { pos: [52,  80], text: 'F₁', offset: [-18, 0], fontSize: 13, color: '#dc2626', dot: '#dc2626' },
    { pos: [128, 80], text: 'F₂', offset: [6, 12],  fontSize: 13, color: '#dc2626', dot: '#dc2626' },
    { pos: [128, 23], text: 'A',  offset: [8, -6],  fontSize: 13, color: '#334155', dot: '#334155' },
    { pos: [128, 137],text: 'B',  offset: [7, 8],   fontSize: 13, color: '#334155', dot: '#334155' },
  ],
};
