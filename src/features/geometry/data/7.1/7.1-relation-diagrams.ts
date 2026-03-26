import type { DiagramData, Point3D } from '@/components/shared/Geo3dSvg';

// 7.1 点线面位置关系页面用的图

// ─── 公理4 ────────────────────────────────────────────────────
export const axiom4Diagram: DiagramData = {
  // 平行传递: three parallel lines a ∥ b, c ∥ b → a ∥ c
  vertices: [
    [-30, -10, 50], [30, -10, 50],   // a: 0, 1
    [-30, 5, 25], [30, 5, 25],      // b: 2, 3
    [-30, 20, 0], [30, 20, 0],      // c: 4, 5
  ],
  edges: [
    { from: 0, to: 1 },
    { from: 2, to: 3 },
    { from: 4, to: 5 },
  ],
  polygons: [],
  freeLabels: [
    { pos: [30, -10, 50], text: 'a', offset: [12, 0] },
    { pos: [30, 5, 25], text: 'b', offset: [12, 0] },
    { pos: [30, 20, 0], text: 'c', offset: [12, 0] },
  ],
};

// ─── 线线关系 ─────────────────────────────────────────────────
export const perpLinesDiagram: DiagramData = {
  // 垂直直线: two lines meeting at 90°
  vertices: [
    [-30, 0, 15], [30, 0, 15],    // a (horizontal): 0, 1
    [0, 0, -5], [0, 0, 40],       // b (vertical): 2, 3
    [0, 0, 15],                     // intersection O: 4
  ],
  edges: [
    { from: 0, to: 1 },
    { from: 2, to: 3 },
  ],
  polygons: [],
  freeLabels: [
    { pos: [30, 0, 15], text: 'a', offset: [14, 0], fontSize: 28 },
    { pos: [0, 0, 40], text: 'b', offset: [14, 0], fontSize: 28 },
  ],
};

export const intersectingLinesDiagram: DiagramData = {
  // 相交直线: two lines crossing at a point
  vertices: [
    [-35, -10, 30], [35, 10, 10],    // a: 0, 1
    [-25, 15, 10], [25, -15, 30],    // b: 2, 3
    [0, 0, 20],                       // P (intersection): 4
  ],
  edges: [
    { from: 0, to: 1 },
    { from: 2, to: 3 },
  ],
  polygons: [],
  freeLabels: [
    { pos: [35, 10, 10], text: 'a', offset: [14, 0], fontSize: 28 },
    { pos: [25, -15, 30], text: 'b', offset: [14, 0], fontSize: 28 },
    { pos: [0, 0, 20], text: 'P', offset: [-4, -16], fontSize: 24, color: '#dc2626', dot: '#dc2626' },
  ],
};

// ─── 三棱柱（实战练习用） ────────────────────────────────────
export const triangularPrismDiagram: DiagramData = {
  // 三棱柱: 前顶点A在y负方向(靠近观察者), B/C在y正方向(背面)
  vertices: [
    [0, -30, 0], [35, 20, 0], [-35, 20, 0],    // A'(0) B'(1) C'(2) 底面
    [0, -30, 65], [35, 20, 65], [-35, 20, 65],  // A(3)  B(4)  C(5)  顶面
  ],
  edges: [
    // 底面
    { from: 0, to: 1 },                 // A'B'
    { from: 1, to: 2, hidden: true },   // B'C' (背面，虚线)
    { from: 2, to: 0 },                 // C'A'
    // 顶面
    { from: 3, to: 4 },                 // AB
    { from: 4, to: 5 },                 // BC
    { from: 5, to: 3 },                 // CA
    // 竖直
    { from: 0, to: 3 },                 // A'A
    { from: 1, to: 4 },                 // B'B
    { from: 2, to: 5 },                 // C'C
  ],
  polygons: [],
  freeLabels: [
    { pos: [0, -30, 65], text: 'A', offset: [-5, -9] },
    { pos: [35, 20, 65], text: 'B', offset: [10, -6] },
    { pos: [-35, 20, 65], text: 'C', offset: [-14, -6] },
    { pos: [0, -30, 0], text: 'A₁', offset: [-11, -6] },
    { pos: [35, 20, 0], text: 'B₁', offset: [9, 9] },
    { pos: [-35, 20, 0], text: 'C₁', offset: [-16, 6] },
  ],
};

// ─── 带高亮边/面的长方体 ────────────────────────────────────
// 顶点: 0-3 底面 A'B'C'D', 4-7 顶面 ABCD
// 边序: 底(0→1,1→2h,2→3h,3→0) 顶(4→5,5→6,6→7,7→4) 竖(0→4,1→5,2→6h,3→7)
// 面常量（顶点索引数组）
const FACE_ABCD   = [4, 5, 6, 7]; // 顶面
const FACE_AbBcCdDd = [0, 1, 2, 3]; // 底面 A'B'C'D'

function makeCuboid(edgeHighlights: [number, number, string][], faceHighlights?: { verts: number[]; color: string; opacity?: number }[]): DiagramData {
  const r = 40, h = 70;
  const vertices: Point3D[] = [
    [0, -r, 0], [r, 0, 0], [0, r, 0], [-r, 0, 0],       // A' B' C' D'
    [0, -r, h], [r, 0, h], [0, r, h], [-r, 0, h],        // A  B  C  D
  ];
  const raw: [number, number, boolean][] = [
    [0, 1, false], [1, 2, true], [2, 3, true], [3, 0, false],
    [4, 5, false], [5, 6, false], [6, 7, false], [7, 4, false],
    [0, 4, false], [1, 5, false], [2, 6, true], [3, 7, false],
  ];
  const edges = raw.map(([f, t, hid]) => {
    const hl = edgeHighlights.find(([a, b]) => (a === f && b === t) || (a === t && b === f));
    return { from: f, to: t, hidden: hid, ...(hl ? { color: hl[2], strokeWidth: 3 } : {}) };
  });
  const polygons = (faceHighlights ?? []).map(f => ({
    points: f.verts,
    fill: f.color,
    opacity: f.opacity ?? 0.25,
  }));
  return {
    vertices, edges, polygons,
    freeLabels: [
      { pos: vertices[4], text: 'A', offset: [0, -10] },
      { pos: vertices[5], text: 'B', offset: [10, -6] },
      { pos: vertices[6], text: 'C', offset: [6, 6] },
      { pos: vertices[7], text: 'D', offset: [-12, -6] },
      { pos: vertices[0], text: 'A₁', offset: [0, 12] },
      { pos: vertices[1], text: 'B₁', offset: [12, 4] },
      { pos: vertices[2], text: 'C₁', offset: [6, 10] },
      { pos: vertices[3], text: 'D₁', offset: [-14, 4] },
    ],
  };
}

// 平行: AB∥DC 蓝色, AB∥A'B' 绿色, AA'∥BB'∥CC'∥DD' 红色
export const cuboidParallelDiagram = makeCuboid([
  [4, 5, '#2563eb'], [6, 7, '#2563eb'],   // AB∥DC（对边）
  [0, 1, '#16a34a'],                        // A'B'（与AB上下对应）
  [0, 4, '#dc2626'], [1, 5, '#dc2626'], [2, 6, '#dc2626'], [3, 7, '#dc2626'], // 四条竖直边
]);
// 相交: AB(4→5)∩BC(5→6) 交于B, AB(4→5)∩BB'(1→5) 交于B
export const cuboidIntersectDiagram = makeCuboid([[4, 5, '#16a34a'], [5, 6, '#16a34a'], [1, 5, '#2563eb']]);
// 异面: AA'(0→4) 和 BC(5→6) 紫色高亮
export const cuboidSkewDiagram = makeCuboid([[0, 4, '#9333ea'], [5, 6, '#9333ea']]);
// 垂直: AB(4→5) 和 AA'(0→4) 红色高亮
export const cuboidPerpDiagram = makeCuboid([[4, 5, '#dc2626'], [0, 4, '#dc2626']]);

// ─── 线面基本关系抽象图 ────────────────────────────────────

export const lineInPlaneDiagram: DiagramData = {
  // 线在面内: line a lying on plane α
  vertices: [
    [-60, -25, 0], [60, -25, 0], [70, 30, 0], [-50, 30, 0], // plane: 0-3
    [-30, -5, 0], [30, -5, 0],                                // line a: 4, 5
  ],
  edges: [
    { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 0 },
    { from: 4, to: 5, color: '#2563eb', strokeWidth: 2.5 },
  ],
  polygons: [{ points: [0, 1, 2, 3], fill: '#dbeafe', opacity: 0.5 }],
  freeLabels: [
    { pos: [30, -5, 0], text: 'a', offset: [14, 0], fontSize: 24, color: '#2563eb' },
    { pos: [70, 30, 0], text: 'β', offset: [10, 0], fontSize: 22 },
  ],
};

export const lineParallelPlaneDiagram: DiagramData = {
  // 线面平行: line a floating above plane α
  vertices: [
    [-50, -20, 0], [50, -20, 0], [60, 25, 0], [-40, 25, 0], // plane: 0-3
    [-30, -5, 30], [30, -5, 30],                               // line a: 4, 5
  ],
  edges: [
    { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 0 },
    { from: 4, to: 5, color: '#2563eb', strokeWidth: 2.5 },
  ],
  polygons: [{ points: [0, 1, 2, 3], fill: '#dbeafe', opacity: 0.5 }],
  freeLabels: [
    { pos: [30, -5, 30], text: 'a', offset: [14, 0], fontSize: 24, color: '#2563eb' },
    { pos: [60, 25, 0], text: 'β', offset: [10, 0], fontSize: 22 },
  ],
};

export const lineIntersectPlaneDiagram: DiagramData = {
  // 线面相交: line a piercing through plane α at point P
  // 面上方实线，面下方虚线（标准画法）
  vertices: [
    [-65, -26, 0], [65, -26, 0], [78, 32, 0], [-52, 32, 0], // plane: 0-3
    [13, 6, 65],                                               // line top (above plane): 4
    [13, 6, 0],                                                // intersection P (on plane): 5
    [13, 6, -32],                                              // line bottom (below plane): 6
  ],
  edges: [
    { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 0 },
    { from: 4, to: 5, color: '#d97706', strokeWidth: 2.5 },          // above plane: solid
    { from: 5, to: 6, color: '#d97706', strokeWidth: 2.5, hidden: true }, // below plane: dashed
  ],
  polygons: [{ points: [0, 1, 2, 3], fill: '#fef3c7', opacity: 0.4 }],
  freeLabels: [
    { pos: [13, 6, 65], text: 'a', offset: [12, -4], fontSize: 24, color: '#d97706' },
    { pos: [-52, 32, 0], text: 'β', offset: [-16, 0], fontSize: 22 },
    { pos: [13, 6, 0], text: 'P', offset: [12, 6], fontSize: 22, color: '#dc2626', dot: true },
  ],
};

export const linePerpPlaneDiagram: DiagramData = {
  // 线面垂直定义: line a perpendicular to plane β
  vertices: [
    [-60, -25, 0], [60, -25, 0], [70, 30, 0], [-50, 30, 0], // plane: 0-3
    [5, 3, 60],                                                // line top: 4
    [5, 3, 0],                                                 // foot: 5
    [5, 3, -25],                                               // line bottom (below): 6
  ],
  edges: [
    { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 0 },
    { from: 4, to: 5, color: '#9333ea', strokeWidth: 2.5 },
    { from: 5, to: 6, color: '#9333ea', strokeWidth: 2.5, hidden: true },
  ],
  polygons: [{ points: [0, 1, 2, 3], fill: '#f3e8ff', opacity: 0.4 }],
  freeLabels: [
    { pos: [5, 3, 60], text: 'a', offset: [12, -4], fontSize: 24, color: '#9333ea' },
    { pos: [-50, 30, 0], text: 'β', offset: [-16, 0], fontSize: 22 },
  ],
};

// 纯长方体（无高亮，参考图用）
export const cuboidPlainDiagram = makeCuboid([], []);

// ─── 线面关系 — 带高亮边/面的长方体 ────────────────────────────
// 在面内: AB(4→5) 蓝色, 面 ABCD 蓝色着色
export const cuboidLineInPlaneDiagram = makeCuboid(
  [[4, 5, '#2563eb']],
  [{ verts: FACE_ABCD, color: '#93c5fd' }],
);
// 线面平行: AB(4→5) 蓝色, 面 A'B'C'D' 蓝色着色
export const cuboidLpParallelDiagram = makeCuboid(
  [[4, 5, '#2563eb']],
  [{ verts: FACE_AbBcCdDd, color: '#93c5fd' }],
);
// 定理②: AA'(0→4) 紫色(垂线n), A'B'(0→1) 蓝色(直线a), 面 ABCD 着色
export const cuboidLpParallelPropDiagram = makeCuboid(
  [[0, 4, '#9333ea'], [0, 1, '#2563eb']],
  [{ verts: FACE_ABCD, color: '#93c5fd' }],
);
// 线面相交: AA'(0→4) 橙色, 面 ABCD 琥珀着色
export const cuboidLpIntersectDiagram = makeCuboid(
  [[0, 4, '#d97706']],
  [{ verts: FACE_ABCD, color: '#fcd34d' }],
);
// 定理⑤ 长方体例子: AB(4→5) AD(4→7) 蓝色高亮, 面A₁B₁C₁D₁ 绿色着色
export const cuboidPpDetExDiagram = makeCuboid(
  [[4, 5, '#2563eb'], [4, 7, '#2563eb']],
  [{ verts: FACE_AbBcCdDd, color: '#86efac', opacity: 0.2 }],
);
// 定理⑥ 长方体例子: AB(4→5) A₁B₁(0→1) 蓝色高亮, 面ABB₁A₁ 琥珀着色
export const cuboidPpPropExDiagram = makeCuboid(
  [[4, 5, '#2563eb'], [0, 1, '#2563eb']],
  [{ verts: [4, 5, 1, 0], color: '#fde68a', opacity: 0.2 }],
);
// 定理⑦ 长方体例子: AA₁(0→4) 紫色高亮, 面ABB₁A₁ 绿色着色, 面A₁B₁C₁D₁ 蓝色着色
export const cuboidPpPerpDetExDiagram = makeCuboid(
  [[0, 4, '#9333ea']],
  [{ verts: [4, 5, 1, 0], color: '#86efac', opacity: 0.2 }, { verts: FACE_AbBcCdDd, color: '#93c5fd', opacity: 0.15 }],
);
// 定理⑧ 长方体例子: AA₁(0→4) 紫色高亮, A₁B₁(0→1) 绿色高亮(交线l), 面ABB₁A₁ 蓝色着色, 面A₁B₁C₁D₁ 绿色着色
export const cuboidPpPerpPropExDiagram = makeCuboid(
  [[0, 4, '#9333ea'], [0, 1, '#16a34a']],
  [{ verts: [4, 5, 1, 0], color: '#93c5fd', opacity: 0.15 }, { verts: FACE_AbBcCdDd, color: '#bbf7d0', opacity: 0.15 }],
);
// 面面实战例题(1): 面ABCD + 面A₁B₁C₁D₁ 蓝色着色, AB/AD 高亮
export const cuboidExPpProof1Diagram = makeCuboid(
  [[4, 5, '#2563eb'], [4, 7, '#2563eb'], [0, 1, '#2563eb'], [0, 3, '#2563eb']],
  [{ verts: FACE_ABCD, color: '#93c5fd', opacity: 0.15 }, { verts: FACE_AbBcCdDd, color: '#93c5fd', opacity: 0.15 }],
);
// 面面实战例题(2): 面ABB₁A₁ 紫色着色, AA₁ 绿色, 面ABCD 绿色着色
export const cuboidExPpProof2Diagram = makeCuboid(
  [[0, 4, '#16a34a']],
  [{ verts: [4, 5, 1, 0], color: '#c4b5fd', opacity: 0.15 }, { verts: FACE_ABCD, color: '#bbf7d0', opacity: 0.15 }],
);
// 线面实战例题(1): AB(4→5)蓝色, DC(7→6)蓝色, 面DCC₁D₁着色
export const cuboidExProof1Diagram = makeCuboid(
  [[4, 5, '#2563eb'], [7, 6, '#2563eb']],
  [{ verts: [7, 6, 2, 3], color: '#93c5fd' }],
);
// 实战例题(2): AA₁(0→4)绿色, BD(5→7)橙色, 面ABCD着色
export const cuboidExProof2Diagram = makeCuboid(
  [[0, 4, '#16a34a'], [5, 7, '#ea580c']],
  [{ verts: FACE_ABCD, color: '#bbf7d0', opacity: 0.15 }],
);
// 线面垂直判定: AA'(0→4) 紫色, AB(4→5) 紫色, AD(4→7) 紫色, 面 ABCD 紫色着色
export const cuboidLpPerpDetDiagram = makeCuboid(
  [[0, 4, '#9333ea'], [4, 5, '#9333ea'], [7, 4, '#9333ea']],
  [{ verts: FACE_ABCD, color: '#c4b5fd' }],
);

// ─── 异面直线（7.0 也复用） ──────────────────────────────────
export const skewLinesDiagram: DiagramData = {
  // 异面直线: a水平在左上, b沿纵深在右下, 投影后延长也不交
  vertices: [
    [-35, 5, 35], [15, 5, 35],      // a (horizontal, upper-left): 0, 1
    [10, -20, 0], [10, 30, 0],      // b (depth direction, lower-right): 2, 3
  ],
  edges: [
    { from: 0, to: 1 },
    { from: 2, to: 3 },
  ],
  polygons: [],
  freeLabels: [
    { pos: [15, 5, 35], text: 'a', offset: [14, 0], fontSize: 28 },
    { pos: [10, 30, 0], text: 'b', offset: [18, -1], fontSize: 28 },
  ],
};

// ─── 八大定理抽象图 ──────────────────────────────────────────

export const lpParallelDetDiagram: DiagramData = {
  // 线面平行判定: a∥b, b⊂α, a⊄α → a∥α
  vertices: [
    [-50, -25, 0], [50, -25, 0], [60, 30, 0], [-40, 30, 0],
    [-25, 5, 0], [35, 5, 0],
    [-25, 5, 30], [35, 5, 30],
  ],
  edges: [
    { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 0 },
    { from: 4, to: 5 }, { from: 6, to: 7 },
  ],
  polygons: [
    { points: [0, 1, 2, 3], fill: '#93c5fd', opacity: 0.2 },
  ],
  freeLabels: [
    { pos: [35, 5, 30], text: 'a', offset: [12, 0] },
    { pos: [35, 5, 0], text: 'b', offset: [12, 0] },
    { pos: [60, 30, 0], text: 'β', offset: [8, 2] },
  ],
};

export const lpParallelPropDiagram: DiagramData = {
  // 定理②: a ⊥ n, n ⊥ β → a ∥ β
  // β 是水平面，n 是β的垂线（竖直），a 在β外且垂直于 n
  vertices: [
    // β (水平面, z=0)
    [-55, -30, 0], [55, -30, 0], [65, 35, 0], [-45, 35, 0],   // 0-3
    // n (β 的垂线, 竖直方向)
    [5, 5, 55], [5, 5, 0], [5, 5, -20],                         // 4(top), 5(foot on β), 6(below)
    // a (在β外, 水平方向, 垂直于 n)
    [-35, 5, 35], [45, 5, 35],                                   // 7-8
  ],
  edges: [
    // β 的边框
    { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 0 },
    // n (垂线, 紫色)
    { from: 4, to: 5, color: '#9333ea', strokeWidth: 2 },
    { from: 5, to: 6, color: '#9333ea', strokeWidth: 2, hidden: true },
    // a (蓝色粗线)
    { from: 7, to: 8, color: '#2563eb', strokeWidth: 2.5 },
  ],
  polygons: [
    { points: [0, 1, 2, 3], fill: '#93c5fd', opacity: 0.18 },
  ],
  freeLabels: [
    { pos: [45, 5, 35], text: 'a', offset: [12, 0], color: '#2563eb' },
    { pos: [5, 5, 55], text: 'n', offset: [12, -2], color: '#9333ea' },
    { pos: [65, 35, 0], text: 'β', offset: [8, 2] },
  ],
};

export const ppParallelDetDiagram: DiagramData = {
  // 面面平行判定: a⊂β, b⊂β, a∩b=P, a∥γ, b∥γ → β∥γ
  vertices: [
    // β (上面, z=30) — 平行四边形
    [-50, -20, 30], [50, -20, 30], [60, 25, 30], [-40, 25, 30],   // 0-3
    // γ (下面, z=-10) — 平行四边形
    [-50, -20, -10], [50, -20, -10], [60, 25, -10], [-40, 25, -10], // 4-7
    // P (a∩b 交点, 在 β 上)
    [5, 3, 30],                                                       // 8
    // a 的两个端点 (在 β 上, 过 P)
    [-30, -12, 30], [40, 18, 30],                                     // 9, 10
    // b 的两个端点 (在 β 上, 过 P)
    [-25, 20, 30], [35, -14, 30],                                     // 11, 12
  ],
  edges: [
    // β 边框
    { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 0 },
    // γ 边框
    { from: 4, to: 5 }, { from: 5, to: 6 }, { from: 6, to: 7 }, { from: 7, to: 4 },
    // a (蓝色, 两段过 P)
    { from: 9, to: 8, color: '#2563eb', strokeWidth: 2 },
    { from: 8, to: 10, color: '#2563eb', strokeWidth: 2 },
    // b (蓝色, 两段过 P)
    { from: 11, to: 8, color: '#2563eb', strokeWidth: 2 },
    { from: 8, to: 12, color: '#2563eb', strokeWidth: 2 },
  ],
  polygons: [
    { points: [0, 1, 2, 3], fill: '#93c5fd', opacity: 0.18 },
    { points: [4, 5, 6, 7], fill: '#86efac', opacity: 0.18 },
  ],
  freeLabels: [
    { pos: [40, 18, 30], text: 'a', offset: [10, 0], color: '#2563eb' },
    { pos: [35, -14, 30], text: 'b', offset: [10, 2], color: '#2563eb' },
    { pos: [5, 3, 30], text: 'P', offset: [8, -10], dot: true },
    { pos: [60, 25, 30], text: 'β', offset: [8, 2] },
    { pos: [60, 25, -10], text: 'γ', offset: [8, 2] },
  ],
};

export const ppParallelPropDiagram: DiagramData = {
  // 面面平行性质: β∥γ, δ∩β=a, δ∩γ=b → a∥b
  vertices: [
    // β (上面, z=28) — 平行四边形
    [-50, -20, 28], [50, -20, 28], [60, 25, 28], [-40, 25, 28],   // 0-3
    // γ (下面, z=-8) — 平行四边形
    [-50, -20, -8], [50, -20, -8], [60, 25, -8], [-40, 25, -8],   // 4-7
    // a (δ∩β, 在 β 上)
    [-25, 2, 28], [42, 2, 28],                                      // 8, 9
    // b (δ∩γ, 在 γ 上)
    [-25, 2, -8], [42, 2, -8],                                      // 10, 11
  ],
  edges: [
    // β 边框
    { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 0 },
    // γ 边框
    { from: 4, to: 5 }, { from: 5, to: 6 }, { from: 6, to: 7 }, { from: 7, to: 4 },
    // a (蓝色, 在 β 上)
    { from: 8, to: 9, color: '#2563eb', strokeWidth: 2.5 },
    // b (蓝色, 在 γ 上)
    { from: 10, to: 11, color: '#2563eb', strokeWidth: 2.5 },
    // δ 侧边 (琥珀色, 连接 a 到 b)
    { from: 8, to: 10, color: '#d97706', strokeWidth: 1.5 },
    { from: 9, to: 11, color: '#d97706', strokeWidth: 1.5 },
  ],
  polygons: [
    { points: [0, 1, 2, 3], fill: '#93c5fd', opacity: 0.15 },
    { points: [4, 5, 6, 7], fill: '#86efac', opacity: 0.15 },
    { points: [8, 9, 11, 10], fill: '#fde68a', opacity: 0.12 },
  ],
  freeLabels: [
    { pos: [42, 2, 28], text: 'a', offset: [-36, -6], color: '#2563eb' },
    { pos: [42, 2, -8], text: 'b', offset: [-39, -7], color: '#2563eb' },
    { pos: [60, 25, 28], text: 'β', offset: [10, -5] },
    { pos: [60, 25, -8], text: 'γ', offset: [13, -6] },
    { pos: [-25, 2, -8], text: 'δ', offset: [-11, -14], color: '#d97706' },
  ],
};

export const lpPerpDetDiagram: DiagramData = {
  // 线面垂直判定: l⊥m, l⊥n, m∩n=O, m,n⊂β → l⊥β
  // 简洁画法: 面 β, l 从 O 竖直向上, m/n 在面上交于 O
  vertices: [
    // β (水平面, 宽大)
    [-60, -35, 0], [60, -35, 0], [75, 40, 0], [-45, 40, 0],   // 0-3
    // O (交点, 偏左让出空间)
    [0, 0, 0],                                                    // 4
    // m (面内线, 左右方向, 过 O)
    [-45, 0, 0], [45, 0, 0],                                      // 5-6
    // n (面内线, 斜方向, 过 O — 用 x+y 斜线投影更清晰)
    [-25, -25, 0], [25, 25, 0],                                   // 7-8
    // l (竖直线, 从 O 向上, 高一些)
    [0, 0, 65],                                                    // 9
  ],
  edges: [
    // β 边框
    { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 0 },
    // m (蓝色)
    { from: 5, to: 6, color: '#2563eb', strokeWidth: 2 },
    // n (蓝色)
    { from: 7, to: 8, color: '#2563eb', strokeWidth: 2 },
    // l (紫色, 竖直, 更粗)
    { from: 4, to: 9, color: '#9333ea', strokeWidth: 3 },
  ],
  polygons: [
    { points: [0, 1, 2, 3], fill: '#c4b5fd', opacity: 0.15 },
  ],
  freeLabels: [
    { pos: [0, 0, 65], text: 'l', offset: [10, -4], fontSize: 24, color: '#9333ea' },
    { pos: [45, 0, 0], text: 'm', offset: [12, 0], fontSize: 22, color: '#2563eb' },
    { pos: [25, 25, 0], text: 'n', offset: [12, 0], fontSize: 22, color: '#2563eb' },
    { pos: [75, 40, 0], text: 'β', offset: [8, 2], fontSize: 22 },
  ],
};

export const lpPerpPropDiagram: DiagramData = {
  // 线面垂直性质: a⊥β, b⊥β → a∥b
  // 大平面 β, 两条平行的竖直线 a/b 插在面上
  vertices: [
    // β (水平面)
    [-55, -30, 0], [55, -30, 0], [65, 35, 0], [-45, 35, 0],   // 0-3
    // a (竖直线, 左侧)
    [-15, 0, 0], [-15, 0, 50],                                   // 4-5
    // b (竖直线, 右侧, 和 a 平行)
    [25, 12, 0], [25, 12, 50],                                   // 6-7
  ],
  edges: [
    // β 边框
    { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 0 },
    // a (绿色竖直)
    { from: 4, to: 5, color: '#16a34a', strokeWidth: 2.5 },
    // b (绿色竖直)
    { from: 6, to: 7, color: '#16a34a', strokeWidth: 2.5 },
  ],
  polygons: [
    { points: [0, 1, 2, 3], fill: '#86efac', opacity: 0.18 },
  ],
  freeLabels: [
    { pos: [-15, 0, 50], text: 'a', offset: [-14, -4], color: '#16a34a' },
    { pos: [25, 12, 50], text: 'b', offset: [12, -4], color: '#16a34a' },
    { pos: [65, 35, 0], text: 'β', offset: [8, 2] },
  ],
};

// 性质1: l⊥β → l⊥a (a⊂β)
// 面 β, 竖直线 l, 面内线 a, 显示 l⊥a
export const lpPerpProp1Diagram: DiagramData = {
  vertices: [
    // β (水平面)
    [-55, -30, 0], [55, -30, 0], [65, 35, 0], [-45, 35, 0],   // 0-3
    // l 的底端 (垂足 O)
    [0, 0, 0],                                                    // 4
    // l 的顶端
    [0, 0, 55],                                                   // 5
    // a (面内线, 过 O)
    [-40, -15, 0], [40, 15, 0],                                   // 6-7
  ],
  edges: [
    { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 0 },
    // l (紫色竖直)
    { from: 4, to: 5, color: '#9333ea', strokeWidth: 3 },
    // a (蓝色, 面内)
    { from: 6, to: 7, color: '#2563eb', strokeWidth: 2 },
  ],
  polygons: [
    { points: [0, 1, 2, 3], fill: '#c4b5fd', opacity: 0.15 },
  ],
  freeLabels: [
    { pos: [0, 0, 55], text: 'l', offset: [10, -4], color: '#9333ea' },
    { pos: [40, 15, 0], text: 'a', offset: [12, 0], color: '#2563eb' },
    { pos: [65, 35, 0], text: 'β', offset: [8, 2] },
  ],
};

// 性质2: 过一点有且只有一条垂线
// 面 β, 点 P 在面上方, 一条垂线从 P 到面
export const lpPerpProp2Diagram: DiagramData = {
  vertices: [
    // β (水平面)
    [-55, -30, 0], [55, -30, 0], [65, 35, 0], [-45, 35, 0],   // 0-3
    // 垂足
    [0, 0, 0],                                                    // 4
    // P (上方点)
    [0, 0, 55],                                                   // 5
  ],
  edges: [
    { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 0 },
    // 垂线 (紫色)
    { from: 4, to: 5, color: '#9333ea', strokeWidth: 3 },
  ],
  polygons: [
    { points: [0, 1, 2, 3], fill: '#c4b5fd', opacity: 0.15 },
  ],
  freeLabels: [
    { pos: [0, 0, 55], text: 'P', offset: [10, -6], color: '#9333ea' },
    { pos: [65, 35, 0], text: 'β', offset: [8, 2] },
  ],
};

// 性质3: a∥b, a⊥β → b⊥β
// 面 β, 线 a 垂直于面(已知,紫色), 线 b 平行于 a(结论,蓝色)
export const lpPerpProp3Diagram: DiagramData = {
  vertices: [
    // β (水平面)
    [-55, -30, 0], [55, -30, 0], [65, 35, 0], [-45, 35, 0],   // 0-3
    // a (竖直线, 左侧, 已知⊥β)
    [-15, 0, 0], [-15, 0, 50],                                   // 4-5
    // b (竖直线, 右侧, 平行于 a)
    [25, 12, 0], [25, 12, 50],                                   // 6-7
  ],
  edges: [
    { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 0 },
    // a (紫色, 已知⊥β)
    { from: 4, to: 5, color: '#9333ea', strokeWidth: 2.5 },
    // b (蓝色, 结论也⊥β)
    { from: 6, to: 7, color: '#2563eb', strokeWidth: 2.5 },
  ],
  polygons: [
    { points: [0, 1, 2, 3], fill: '#c4b5fd', opacity: 0.15 },
  ],
  freeLabels: [
    { pos: [-15, 0, 50], text: 'a', offset: [-14, -4], color: '#9333ea' },
    { pos: [25, 12, 50], text: 'b', offset: [12, -4], color: '#2563eb' },
    { pos: [65, 35, 0], text: 'β', offset: [8, 2] },
  ],
};

export const ppPerpDetDiagram: DiagramData = {
  // 面面垂直判定: l⊥β, l⊂γ → β⊥γ
  vertices: [
    // β (水平地面, z=0) — 平行四边形
    [-55, -30, 0], [55, -30, 0], [65, 35, 0], [-45, 35, 0],   // 0-3
    // γ (竖直墙面, 沿 y≈0 立起) — 底边在 β 上
    [-22, 0, 0], [45, 0, 0],                                     // 4, 5 (底边)
    [-22, 0, 50], [45, 0, 50],                                   // 6, 7 (顶边)
    // l (在 γ 内, 垂直于 β, 从地面向上)
    [12, 0, 0], [12, 0, 45],                                     // 8, 9
  ],
  edges: [
    // β 边框
    { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 0 },
    // γ 边框 (左竖边、右竖边、顶边)
    { from: 4, to: 6 }, { from: 5, to: 7 }, { from: 6, to: 7 },
    // 交线 (γ 底边, 在 β 上)
    { from: 4, to: 5 },
    // l (紫色, 竖直, 在 γ 内)
    { from: 8, to: 9, color: '#9333ea', strokeWidth: 3 },
  ],
  polygons: [
    { points: [0, 1, 2, 3], fill: '#93c5fd', opacity: 0.15 },
    { points: [4, 5, 7, 6], fill: '#86efac', opacity: 0.15 },
  ],
  freeLabels: [
    { pos: [12, 0, 45], text: 'l', offset: [10, -4], color: '#9333ea' },
    { pos: [65, 35, 0], text: 'β', offset: [8, 2] },
    { pos: [45, 0, 50], text: 'γ', offset: [10, 0] },
  ],
};

export const ppPerpPropDiagram: DiagramData = {
  // 面面垂直性质: β⊥γ, β∩γ=l, a⊂β, a⊥l → a⊥γ
  vertices: [
    // γ (水平地面, z=0) — 平行四边形
    [-55, -30, 0], [55, -30, 0], [65, 35, 0], [-45, 35, 0],   // 0-3
    // β (竖直墙面, 沿 y≈0 立起) — 底边在 γ 上
    [-22, 0, 0], [45, 0, 0],                                     // 4, 5 (底边 = 交线 l)
    [-22, 0, 50], [45, 0, 50],                                   // 6, 7 (顶边)
    // a (在 β 内, 垂直于交线 l, 从交线向上)
    [12, 0, 0], [12, 0, 40],                                     // 8, 9
  ],
  edges: [
    // γ 边框
    { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 0 },
    // β 边框 (左竖边、右竖边、顶边)
    { from: 4, to: 6 }, { from: 5, to: 7 }, { from: 6, to: 7 },
    // l 交线 (绿色, 在 β∩γ 上)
    { from: 4, to: 5, color: '#16a34a', strokeWidth: 2 },
    // a (紫色, 在 β 内, 垂直于 l)
    { from: 8, to: 9, color: '#9333ea', strokeWidth: 2.5 },
  ],
  polygons: [
    { points: [0, 1, 2, 3], fill: '#86efac', opacity: 0.15 },
    { points: [4, 5, 7, 6], fill: '#93c5fd', opacity: 0.15 },
  ],
  freeLabels: [
    { pos: [12, 0, 40], text: 'a', offset: [10, 0], color: '#9333ea' },
    { pos: [45, 0, 0], text: 'l', offset: [10, 0], color: '#16a34a' },
    { pos: [45, 0, 50], text: 'β', offset: [10, 0] },
    { pos: [65, 35, 0], text: 'γ', offset: [8, 2] },
  ],
};
