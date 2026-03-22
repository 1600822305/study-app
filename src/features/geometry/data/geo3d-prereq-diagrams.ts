import type { DiagramData, Point3D } from '@/components/shared/Geo3dSvg';

export const axiom1Diagram: DiagramData = {
  // 三点定一面: parallelogram plane with 3 non-collinear points
  vertices: [
    [-50, -25, 0], [50, -25, 0], [60, 30, 0], [-40, 30, 0], // plane 0-3
    [-20, -8, 0], [30, -8, 0], [5, 18, 0], // A, B, C: 4, 5, 6
  ],
  edges: [
    { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 0 },
  ],
  polygons: [
    { points: [0, 1, 2, 3], fill: '#93c5fd', opacity: 0.25 },
  ],
  freeLabels: [
    { pos: [-20, -8, 0], text: 'A', offset: [-2, -12] },
    { pos: [30, -8, 0], text: 'B', offset: [2, -12] },
    { pos: [5, 18, 0], text: 'C', offset: [0, -12] },
    { pos: [60, 30, 0], text: 'α', offset: [8, 2] },
  ],
};

export const axiom2Diagram: DiagramData = {
  // 两面交一线: two planes meeting at a line (open book shape)
  vertices: [
    [-40, 0, 0], [40, 0, 0],           // intersection line: 0, 1
    [-48, -30, 30], [32, -30, 30],     // α far edge: 2, 3
    [-48, 30, 30], [32, 30, 30],       // β far edge: 4, 5
  ],
  edges: [
    { from: 0, to: 1 },  // intersection line l
    { from: 0, to: 2 }, { from: 1, to: 3 }, { from: 2, to: 3 }, // α
    { from: 0, to: 4 }, { from: 1, to: 5 }, { from: 4, to: 5 }, // β
  ],
  polygons: [
    { points: [0, 1, 3, 2], fill: '#93c5fd', opacity: 0.2 },
    { points: [0, 1, 5, 4], fill: '#86efac', opacity: 0.2 },
  ],
  freeLabels: [
    { pos: [40, 0, 0], text: 'l', offset: [10, 0] },
    { pos: [32, -30, 30], text: 'α', offset: [10, 0] },
    { pos: [32, 30, 30], text: 'β', offset: [10, 0] },
  ],
};

export const axiom3Diagram: DiagramData = {
  // 线在面内: plane with a line through two points
  vertices: [
    [-50, -25, 0], [50, -25, 0], [60, 30, 0], [-40, 30, 0], // plane 0-3
    [-30, -10, 0], [40, 15, 0], // A, B on line: 4, 5
  ],
  edges: [
    { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 0 },
    { from: 4, to: 5 }, // line l
  ],
  polygons: [
    { points: [0, 1, 2, 3], fill: '#93c5fd', opacity: 0.25 },
  ],
  freeLabels: [
    { pos: [-30, -10, 0], text: 'A', offset: [-2, -12] },
    { pos: [40, 15, 0], text: 'B', offset: [2, -12] },
    { pos: [60, 30, 0], text: 'α', offset: [8, 2] },
    { pos: [5, 3, 0], text: 'l', offset: [0, 10] },
  ],
};

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

export const parallelLinesDiagram: DiagramData = {
  // 平行直线: two parallel lines
  vertices: [
    [-35, 0, 30], [35, 0, 30],    // a: 0, 1
    [-35, 0, 5], [35, 0, 5],      // b: 2, 3
  ],
  edges: [
    { from: 0, to: 1 },
    { from: 2, to: 3 },
  ],
  polygons: [],
  freeLabels: [
    { pos: [35, 0, 30], text: 'a', offset: [14, 0], fontSize: 28 },
    { pos: [35, 0, 5], text: 'b', offset: [14, 0], fontSize: 28 },
  ],
};

export const skewLinesLifeDiagram: DiagramData = {
  // 异面直线: 地面上沿x方向的线a, 和空中沿y方向的线b
  // 用简单的地面 + 两条高亮线表示
  vertices: [
    // 地面 (浅色参考面)
    [-45, -20, 0], [45, -20, 0], [45, 30, 0], [-45, 30, 0], // 0-3
    // 线a: 地面上沿x方向 (蓝色)
    [-30, -5, 1], [30, -5, 1], // 4, 5
    // 线b: 空中沿y方向, x偏移 (紫色)
    [10, -25, 35], [10, 35, 35], // 6, 7
  ],
  edges: [
    // 地面边框
    { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 0 },
    // 线a
    { from: 4, to: 5 },
    // 线b
    { from: 6, to: 7 },
  ],
  polygons: [
    { points: [0, 1, 2, 3], fill: '#e0e7ff', opacity: 0.25 },
  ],
  freeLabels: [
    { pos: [30, -5, 1], text: 'a', offset: [14, 0], fontSize: 24, color: '#2563eb' },
    { pos: [10, 35, 35], text: 'b', offset: [14, 0], fontSize: 24, color: '#9333ea' },
    { pos: [-45, 30, 0], text: '地面', offset: [-8, 14], fontSize: 14 },
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

// ─── 三棱柱（实战练习用） ────────────────────────────────────
// 顶点: 0-2 底面 A'B'C', 3-5 顶面 ABC
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

// ─── 实战例题：正三棱柱综合证明 ─────────────────────────────
// 题目图：正三棱柱 + D(BC中点)
export const prismWithDDiagram: DiagramData = {
  vertices: [
    [0, -30, 0], [35, 20, 0], [-35, 20, 0],
    [0, -30, 65], [35, 20, 65], [-35, 20, 65],
    [0, 20, 65],                                   // D(6) = mid(BC)
  ],
  edges: [
    { from: 0, to: 1 }, { from: 1, to: 2, hidden: true }, { from: 2, to: 0 },
    { from: 3, to: 4 }, { from: 4, to: 5 }, { from: 5, to: 3 },
    { from: 0, to: 3 }, { from: 1, to: 4 }, { from: 2, to: 5 },
  ],
  polygons: [],
  freeLabels: [
    { pos: [0, -30, 65], text: 'A', offset: [-5, -9] },
    { pos: [35, 20, 65], text: 'B', offset: [10, -6] },
    { pos: [-35, 20, 65], text: 'C', offset: [-14, -6] },
    { pos: [0, -30, 0], text: 'A₁', offset: [-11, -6] },
    { pos: [35, 20, 0], text: 'B₁', offset: [9, 9] },
    { pos: [-35, 20, 0], text: 'C₁', offset: [-16, 6] },
    { pos: [0, 20, 65], text: 'D', offset: [2, -10], color: '#dc2626', dot: true },
  ],
};

// 证明(1)图：A₁B线 + DM中位线 + 面ADC₁
export const prismProof1Diagram: DiagramData = {
  vertices: [
    [0, -30, 0], [35, 20, 0], [-35, 20, 0],
    [0, -30, 65], [35, 20, 65], [-35, 20, 65],
    [0, 20, 65],                                   // D(6)
    [-17.5, -5, 32.5],                             // M(7) = mid(A₁C)
  ],
  edges: [
    { from: 0, to: 1 }, { from: 1, to: 2, hidden: true }, { from: 2, to: 0 },
    { from: 3, to: 4 }, { from: 4, to: 5 }, { from: 5, to: 3 },
    { from: 0, to: 3 }, { from: 1, to: 4 }, { from: 2, to: 5 },
    { from: 0, to: 4, color: '#ea580c', strokeWidth: 2.5, hidden: true },   // A₁B (橙色虚线)
    { from: 6, to: 7, color: '#16a34a', strokeWidth: 2.5 },                 // DM (绿色)
    { from: 3, to: 6, color: '#2563eb', strokeWidth: 1.5 },                 // AD
    { from: 6, to: 2, color: '#2563eb', strokeWidth: 1.5, hidden: true },   // DC₁
    { from: 3, to: 2, color: '#2563eb', strokeWidth: 1.5, hidden: true },   // AC₁
  ],
  polygons: [
    { points: [3, 6, 2], fill: '#bfdbfe', opacity: 0.15 },
  ],
  freeLabels: [
    { pos: [0, -30, 65], text: 'A', offset: [-5, -9] },
    { pos: [35, 20, 65], text: 'B', offset: [10, -6] },
    { pos: [-35, 20, 65], text: 'C', offset: [-14, -6] },
    { pos: [0, -30, 0], text: 'A₁', offset: [-11, -6] },
    { pos: [35, 20, 0], text: 'B₁', offset: [9, 9] },
    { pos: [-35, 20, 0], text: 'C₁', offset: [-16, 6] },
    { pos: [0, 20, 65], text: 'D', offset: [2, -10], color: '#dc2626', dot: true },
    { pos: [-17.5, -5, 32.5], text: 'M', offset: [-14, -2], color: '#16a34a', dot: true },
  ],
};

// 证明(2)图：AD ⊥ B₁C，面BCC₁B₁着色
export const prismProof2Diagram: DiagramData = {
  vertices: [
    [0, -30, 0], [35, 20, 0], [-35, 20, 0],
    [0, -30, 65], [35, 20, 65], [-35, 20, 65],
    [0, 20, 65],                                   // D(6)
  ],
  edges: [
    { from: 0, to: 1 }, { from: 1, to: 2, hidden: true }, { from: 2, to: 0 },
    { from: 3, to: 4 }, { from: 4, to: 5 }, { from: 5, to: 3 },
    { from: 0, to: 3 }, { from: 1, to: 4 }, { from: 2, to: 5 },
    { from: 3, to: 6, color: '#16a34a', strokeWidth: 2.5 },                 // AD (绿色)
    { from: 1, to: 5, color: '#ea580c', strokeWidth: 2.5, hidden: true },   // B₁C (橙色虚线)
  ],
  polygons: [
    { points: [4, 5, 2, 1], fill: '#fef3c7', opacity: 0.2 },
  ],
  freeLabels: [
    { pos: [0, -30, 65], text: 'A', offset: [-5, -9] },
    { pos: [35, 20, 65], text: 'B', offset: [10, -6] },
    { pos: [-35, 20, 65], text: 'C', offset: [-14, -6] },
    { pos: [0, -30, 0], text: 'A₁', offset: [-11, -6] },
    { pos: [35, 20, 0], text: 'B₁', offset: [9, 9] },
    { pos: [-35, 20, 0], text: 'C₁', offset: [-16, 6] },
    { pos: [0, 20, 65], text: 'D', offset: [2, -10], color: '#dc2626', dot: true },
  ],
};

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
// 平行传递: AA'(0→4), BB'(1→5), CC'(2→6) 橙色高亮
export const cuboidTransitiveDiagram = makeCuboid([[0, 4, '#d97706'], [1, 5, '#d97706'], [2, 6, '#d97706']]);

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

// 实战例题用: BD₁虚线 + EFGH中点面
export const cuboidBD1Diagram: DiagramData = (() => {
  const base = makeCuboid([], []);
  const r = 40, h = 70;
  // 中点: E=AA₁中点, F=BB₁中点, G=CC₁中点, H=DD₁中点
  const E: Point3D = [0, -r, h / 2];       // AA₁ midpoint (idx 8)
  const F: Point3D = [r, 0, h / 2];        // BB₁ midpoint (idx 9)
  const G: Point3D = [0, r, h / 2];        // CC₁ midpoint (idx 10)
  const H: Point3D = [-r, 0, h / 2];       // DD₁ midpoint (idx 11)
  return {
    ...base,
    vertices: [...base.vertices, E, F, G, H],
    edges: [
      ...base.edges,
      // BD₁ 虚线 (橙色)
      { from: 5, to: 3, color: '#ea580c', strokeWidth: 2.5, hidden: true },
      // EFGH 边 (绿色)
      { from: 8, to: 9, color: '#16a34a', strokeWidth: 2 },
      { from: 9, to: 10, color: '#16a34a', strokeWidth: 2, hidden: true },
      { from: 10, to: 11, color: '#16a34a', strokeWidth: 2, hidden: true },
      { from: 11, to: 8, color: '#16a34a', strokeWidth: 2 },
      // FH 虚线 (蓝色, 证明用)
      { from: 9, to: 11, color: '#2563eb', strokeWidth: 2, hidden: true },
    ],
    polygons: [
      { points: [8, 9, 10, 11], fill: '#86efac', opacity: 0.15 },
    ],
    freeLabels: [
      { pos: [0, -40, 70], text: 'A', offset: [0, -10] },
      { pos: [40, 0, 70], text: 'B', offset: [10, -6] },
      { pos: [0, 40, 70], text: 'C', offset: [2, -10] },
      { pos: [-40, 0, 70], text: 'D', offset: [-12, -6] },
      { pos: [0, -40, 0], text: 'A₁', offset: [0, 12] },
      { pos: [40, 0, 0], text: 'B₁', offset: [12, 4] },
      { pos: [0, 40, 0], text: 'C₁', offset: [-1, 11] },
      { pos: [-40, 0, 0], text: 'D₁', offset: [-14, 4] },
      { pos: [0, -40, 35], text: 'E', offset: [-11, -2], color: '#16a34a' },
      { pos: [40, 0, 35], text: 'F', offset: [12, 1], color: '#16a34a' },
      { pos: [0, 40, 35], text: 'G', offset: [-8, 13], color: '#16a34a' },
      { pos: [-40, 0, 35], text: 'H', offset: [-14, 2], color: '#16a34a' },
    ],
  };
})();

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
// 线面垂直性质: AA'(0→4) 绿色, BB'(1→5) 绿色, 面 ABCD 绿色着色
export const cuboidLpPerpPropDiagram = makeCuboid(
  [[0, 4, '#16a34a'], [1, 5, '#16a34a']],
  [{ verts: FACE_ABCD, color: '#86efac' }],
);

export const planeAxesDiagram: DiagramData = (() => {
  // 平面直角坐标系: x, y axes (2D)
  const len = 50;
  return {
    vertices: [
      [-len * 0.3, 0, 0], [len, 0, 0],     // x axis: 0, 1
      [0, 0, -len * 0.3], [0, 0, len],     // y axis (using z for vertical): 2, 3
      [len - 6, 0, 3], [len - 6, 0, -3],   // x arrow: 4, 5
      [3, 0, len - 6], [-3, 0, len - 6],   // y arrow: 6, 7
    ],
    edges: [
      { from: 0, to: 1 }, { from: 2, to: 3 },
      { from: 1, to: 4 }, { from: 1, to: 5 },
      { from: 3, to: 6 }, { from: 3, to: 7 },
    ],
    polygons: [],
    freeLabels: [
      { pos: [len, 0, 0], text: 'x', offset: [4, 12] },
      { pos: [0, 0, len], text: 'y', offset: [-14, 0] },
      { pos: [0, 0, 0], text: 'O', offset: [-12, 12] },
    ],
  };
})();

export const obliqueAxesDiagram: DiagramData = (() => {
  // 斜二测画法坐标系: x, y, z axes
  const len = 50;
  return {
    vertices: [
      [0, 0, 0],       // origin: 0
      [len, 0, 0],     // x end: 1
      [0, len, 0],     // y end: 2
      [0, 0, len],     // z end: 3
      [len - 6, 0, 3], [len - 6, 0, -3],   // x arrow: 4, 5
      [0, len - 6, 3], [0, len - 6, -3],   // y arrow: 6, 7
      [3, 0, len - 6], [-3, 0, len - 6],   // z arrow: 8, 9
      [len / 2, 0, 5], [len / 2, 0, -5],   // tick x: 10, 11
      [0, len / 2, 5], [0, len / 2, -5],   // tick y: 12, 13
    ],
    edges: [
      { from: 0, to: 1 }, { from: 0, to: 2 }, { from: 0, to: 3 },
      { from: 1, to: 4 }, { from: 1, to: 5 },
      { from: 3, to: 8 }, { from: 3, to: 9 },
    ],
    polygons: [],
    freeLabels: [
      { pos: [len, 0, 0], text: 'x', offset: [4, 10] },
      { pos: [0, len, 0], text: 'y', offset: [10, 2] },
      { pos: [0, 0, len], text: 'z', offset: [-12, 0] },
      { pos: [0, 0, 0], text: 'O', offset: [-16, 4] },
      { pos: [0, len * 0.4, 0], text: '45°', offset: [18, -2], fontSize: 12 },
    ],
  };
})();
