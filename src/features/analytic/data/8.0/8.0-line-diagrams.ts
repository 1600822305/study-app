import type { Diagram2DData } from '@/components/shared/Geo2dSvg';

/* ── 倾斜角示意图 ── */
export const inclinationAngleDiagram: Diagram2DData = {
  name: '倾斜角',
  vertices: [
    [10, 70],    // 0: x轴左端
    [130, 70],   // 1: x轴右端
    [30, 70],    // 2: 直线与x轴交点（原点O）
    [110, 20],   // 3: 直线上方端点
  ],
  edges: [
    { from: 0, to: 1, color: '#334155', strokeWidth: 2 },   // x 轴
    { from: 2, to: 3, color: '#2563eb', strokeWidth: 2.5 }, // 直线 l
  ],
  polygons: [],
  freeLabels: [
    { pos: [130, 70], text: 'x', offset: [10, 0], color: '#334155' },
    { pos: [110, 20], text: 'l', offset: [10, 0], color: '#2563eb' },
    { pos: [30, 70], text: 'O', offset: [-4, 14], dot: true },
  ],
  angleArcs: [
    { vertex: 2, from: 1, to: 3, radius: 22, label: 'α', color: '#dc2626' },
  ],
};

/* ── 斜率与直线方向（4条线） ── */
export const slopeDirectionsDiagram: Diagram2DData = {
  name: '斜率与方向',
  vertices: [
    // 坐标轴
    [70, 10],    // 0: y轴上端
    [70, 110],   // 1: y轴下端（原点下方）
    [10, 65],    // 2: x轴左端
    [140, 65],   // 3: x轴右端
    // k > 0 (向右上)
    [30, 95],    // 4
    [65, 40],    // 5
    // k < 0 (向右下)
    [85, 30],    // 6
    [120, 90],   // 7
    // k = 0 (水平)
    [20, 65],    // 8
    [60, 65],    // 9
  ],
  edges: [
    { from: 0, to: 1, color: '#9ca3af', strokeWidth: 1 },   // y 轴
    { from: 2, to: 3, color: '#9ca3af', strokeWidth: 1 },   // x 轴
    { from: 4, to: 5, color: '#16a34a', strokeWidth: 2.5 }, // k > 0
    { from: 6, to: 7, color: '#dc2626', strokeWidth: 2.5 }, // k < 0
    { from: 8, to: 9, color: '#2563eb', strokeWidth: 2.5 }, // k = 0
  ],
  polygons: [],
  freeLabels: [
    { pos: [58, 35], text: '', tex: 'k>0', offset: [-16, -4], fontSize: 13, color: '#16a34a' },
    { pos: [125, 85], text: '', tex: 'k<0', offset: [4, 8], fontSize: 13, color: '#dc2626' },
    { pos: [40, 65], text: '', tex: 'k=0', offset: [0, -12], fontSize: 13, color: '#2563eb' },
  ],
};

/* ── 平行与垂直 ── */
export const parallelPerpDiagram: Diagram2DData = {
  name: '平行与垂直',
  vertices: [
    // 平行线 l₁ 和 l₂（左半区）
    [5, 80],     // 0: l₁ 左
    [55, 30],    // 1: l₁ 右
    [25, 95],    // 2: l₂ 左
    [75, 45],    // 3: l₂ 右
    // 垂直线 l₃ 和 l₄（右半区）
    [85, 85],    // 4: l₃ 左
    [135, 35],   // 5: l₃ 右
    [90, 30],    // 6: l₄ 左
    [135, 80],   // 7: l₄ 右 (与l₃方向垂直)
    // 交点（用于直角标记）
    [113, 57],   // 8: l₃ 和 l₄ 的交点
  ],
  edges: [
    { from: 0, to: 1, color: '#2563eb', strokeWidth: 2.5 },
    { from: 2, to: 3, color: '#2563eb', strokeWidth: 2.5 },
    { from: 4, to: 5, color: '#16a34a', strokeWidth: 2.5 },
    { from: 6, to: 7, color: '#16a34a', strokeWidth: 2.5 },
  ],
  polygons: [],
  freeLabels: [
    { pos: [55, 30], text: '', tex: 'l_1', offset: [4, -10], fontSize: 13, color: '#2563eb' },
    { pos: [75, 45], text: '', tex: 'l_2', offset: [4, -10], fontSize: 13, color: '#2563eb' },
    { pos: [135, 35], text: '', tex: 'l_3', offset: [4, -8], fontSize: 13, color: '#16a34a' },
    { pos: [135, 80], text: '', tex: 'l_4', offset: [6, 4], fontSize: 13, color: '#16a34a' },
    { pos: [35, 105], text: '平行', offset: [0, 6], fontSize: 14, color: '#2563eb' },
    { pos: [113, 105], text: '垂直', offset: [0, 6], fontSize: 14, color: '#16a34a' },
  ],
  rightAngles: [
    { vertex: 8, from: 5, to: 7, size: 8, color: '#16a34a' },
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
    { pos: [130, 100], text: 'l', offset: [10, 0], color: '#334155' },
    { pos: [120, 25], text: 'A', offset: [8, -8], color: '#dc2626', dot: '#dc2626' },
    { pos: [25, 95], text: "A'", offset: [-14, 8], color: '#2563eb', dot: '#2563eb' },
    { pos: [72, 60], text: 'M', offset: [10, 8], color: '#334155', dot: true },
  ],
  rightAngles: [
    { vertex: 4, from: 2, to: 1, size: 8, color: '#9333ea' },
  ],
};
