import type { Diagram2DData } from '@/components/shared/Geo2dSvg';

/* ── 卡片1：认识三角形 ── */
export const basicTriangleDiagram: Diagram2DData = {
  name: '认识三角形',
  vertices: [
    [60, 18],   // 0: A (顶)
    [20, 82],   // 1: B (左下)
    [105, 82],  // 2: C (右下)
  ],
  edges: [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 0, to: 2 },
  ],
  polygons: [],
  freeLabels: [
    { pos: [60, 18], text: 'A', offset: [0, -12], dot: true },
    { pos: [20, 82], text: 'B', offset: [-6, 12], dot: true },
    { pos: [105, 82], text: 'C', offset: [8, 8], dot: true },
  ],
  angleArcs: [
    { vertex: 0, from: 1, to: 2, radius: 14, color: '#6b7280' },
    { vertex: 1, from: 0, to: 2, radius: 14, color: '#6b7280' },
    { vertex: 2, from: 1, to: 0, radius: 14, color: '#6b7280' },
  ],
};

/* ── 卡片3：三角形的高 ── */
export const triangleHeightDiagram: Diagram2DData = {
  name: '三角形的高',
  vertices: [
    [59, 9],    // 0: A (顶)
    [9, 86],    // 1: B (左下)
    [108, 86],  // 2: C (右下)
    [59, 86],   // 3: H (高的垂足)
  ],
  edges: [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 0, to: 2 },
    { from: 0, to: 3, dashed: true, color: '#3b82f6' },
  ],
  polygons: [],
  freeLabels: [
    { pos: [59, 86], text: '底', offset: [0, 14], fontSize: 13, color: '#334155' },
    { pos: [59, 47], text: '', tex: 'h', offset: [11, 0], fontSize: 13, color: '#3b82f6' },
  ],
  rightAngles: [
    { vertex: 3, from: 0, to: 2, size: 9, color: '#3b82f6' },
  ],
};

/* ── 卡片3：直角三角形面积（做题技巧配图） ── */
export const rightTriangleAreaDiagram: Diagram2DData = {
  name: '直角三角形面积',
  vertices: [
    [24, 69],   // 0: 直角顶点 (左下)
    [24, 12],   // 1: 上
    [97, 69],   // 2: 右
  ],
  edges: [
    { from: 0, to: 1, color: '#dc2626' },
    { from: 0, to: 2, color: '#dc2626' },
    { from: 1, to: 2 },
  ],
  polygons: [
    { points: [0, 1, 2], fill: '#fef2f2', opacity: 0.6 },
  ],
  freeLabels: [
    { pos: [24, 41], text: '', tex: 'a', offset: [-12, 0], fontSize: 13, color: '#dc2626' },
    { pos: [61, 69], text: '', tex: 'b', offset: [0, 12], fontSize: 13, color: '#dc2626' },
  ],
  rightAngles: [
    { vertex: 0, from: 1, to: 2, size: 10, color: '#dc2626' },
  ],
};

/* ── 卡片4：勾股定理 ── */
export const pythagorasDiagram: Diagram2DData = {
  name: '勾股定理',
  vertices: [
    [30, 85],   // 0: 直角顶点 (左下)
    [30, 15],   // 1: 上
    [120, 85],  // 2: 右
  ],
  edges: [
    { from: 0, to: 1, color: '#3b82f6' },
    { from: 0, to: 2, color: '#16a34a' },
    { from: 1, to: 2, color: '#dc2626' },
  ],
  polygons: [],
  freeLabels: [
    { pos: [30, 50], text: 'a', offset: [-14, 0], fontSize: 15, color: '#3b82f6' },
    { pos: [75, 85], text: 'b', offset: [0, 14], fontSize: 15, color: '#16a34a' },
    { pos: [75, 50], text: 'c', offset: [12, -5], fontSize: 15, color: '#dc2626' },
  ],
  rightAngles: [
    { vertex: 0, from: 1, to: 2, size: 12 },
  ],
};

/* ── 卡片2：三角形分类 — 锐角 ── */
export const acuteTriangleDiagram: Diagram2DData = {
  name: '锐角三角形',
  vertices: [
    [45, 5],   // 0: 顶
    [5, 70],   // 1: 左下
    [85, 70],  // 2: 右下
  ],
  edges: [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 0, to: 2 },
  ],
  polygons: [
    { points: [0, 1, 2], fill: '#f0fdf4', opacity: 0.8 },
  ],
  freeLabels: [],
  angleArcs: [
    { vertex: 0, from: 1, to: 2, radius: 10, color: '#16a34a' },
    { vertex: 1, from: 0, to: 2, radius: 10, color: '#16a34a' },
    { vertex: 2, from: 1, to: 0, radius: 10, color: '#16a34a' },
  ],
};

/* ── 卡片2：三角形分类 — 直角 ── */
export const rightTriangleClassDiagram: Diagram2DData = {
  name: '直角三角形',
  vertices: [
    [10, 70],  // 0: 直角顶
    [10, 10],  // 1: 上
    [80, 70],  // 2: 右
  ],
  edges: [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 0, to: 2 },
  ],
  polygons: [
    { points: [0, 1, 2], fill: '#eff6ff', opacity: 0.8 },
  ],
  freeLabels: [],
  rightAngles: [
    { vertex: 0, from: 1, to: 2, size: 10, color: '#2563eb' },
  ],
};

/* ── 卡片2：三角形分类 — 钝角 ── */
export const obtuseTriangleDiagram: Diagram2DData = {
  name: '钝角三角形',
  vertices: [
    [5, 12],   // 0: 钝角顶
    [25, 70],  // 1: 左下
    [85, 70],  // 2: 右下
  ],
  edges: [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 0, to: 2 },
  ],
  polygons: [
    { points: [0, 1, 2], fill: '#faf5ff', opacity: 0.8 },
  ],
  freeLabels: [],
  angleArcs: [
    { vertex: 1, from: 0, to: 2, radius: 12, color: '#7c3aed' },
  ],
};

/* ── 卡片2：等腰三角形 ── */
export const isoscelesDiagram: Diagram2DData = {
  name: '等腰三角形',
  vertices: [
    [45, 5],   // 0: 顶
    [10, 75],  // 1: 左下
    [80, 75],  // 2: 右下
  ],
  edges: [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 0, to: 2 },
  ],
  polygons: [],
  freeLabels: [],
  tickMarks: [
    { from: 0, to: 1, count: 2, color: '#dc2626' },
    { from: 0, to: 2, count: 2, color: '#dc2626' },
  ],
};

/* ── 卡片2：等边三角形 ── */
export const equilateralDiagram: Diagram2DData = {
  name: '等边三角形',
  vertices: [
    [45, 5],   // 0: 顶
    [5, 75],   // 1: 左下
    [85, 75],  // 2: 右下
  ],
  edges: [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 0, to: 2 },
  ],
  polygons: [],
  freeLabels: [],
  tickMarks: [
    { from: 0, to: 1, count: 1, color: '#dc2626' },
    { from: 0, to: 2, count: 1, color: '#dc2626' },
    { from: 1, to: 2, count: 1, color: '#dc2626' },
  ],
  angleArcs: [
    { vertex: 0, from: 1, to: 2, radius: 12, label: '60°', color: '#334155' },
    { vertex: 1, from: 0, to: 2, radius: 12, label: '60°', color: '#334155' },
    { vertex: 2, from: 1, to: 0, radius: 12, label: '60°', color: '#334155' },
  ],
};

/* ── 卡片5：中位线定理（含证明辅助线） ── */
export const midlineDiagram: Diagram2DData = {
  name: '中位线定理',
  vertices: [
    [72, 22],   // 0: A (顶)
    [22, 89],   // 1: B (左下)
    [96, 89],   // 2: C (右下)
    [47, 55],   // 3: D (AB 中点)
    [84, 55],   // 4: E (AC 中点)
    [59, 89],   // 5: F (BC 中点)
    [121, 55],  // 6: G (DE 延长，EG = DE)
  ],
  edges: [
    /* 蓝色：原三角形 ABC */
    { from: 0, to: 1, color: '#2563eb' },
    { from: 1, to: 2, color: '#2563eb' },
    { from: 0, to: 2, color: '#2563eb' },
    /* 蓝色：中位线 DE */
    { from: 3, to: 4, color: '#2563eb', strokeWidth: 2 },
    /* 红色：辅助构造线 */
    { from: 4, to: 6, color: '#dc2626', strokeWidth: 2 },   // E→G 延长
    { from: 2, to: 6, color: '#dc2626', strokeWidth: 2 },   // CG
    { from: 5, to: 2, color: '#dc2626', strokeWidth: 2 },   // FC
    { from: 5, to: 4, color: '#dc2626', strokeWidth: 2 },   // FE (连 F→E)
  ],
  polygons: [],
  freeLabels: [
    { pos: [72, 22], text: 'A', offset: [0, -10], fontSize: 12, dot: true },
    { pos: [22, 89], text: 'B', offset: [-10, 7], fontSize: 12, dot: true },
    { pos: [96, 89], text: 'C', offset: [8, 7], fontSize: 12, dot: true },
    { pos: [47, 55], text: 'D', offset: [-12, -3], fontSize: 12, color: '#2563eb', dot: '#2563eb' },
    { pos: [84, 55], text: 'E', offset: [0, -10], fontSize: 12, color: '#2563eb', dot: '#2563eb' },
    { pos: [59, 89], text: 'F', offset: [0, 10], fontSize: 12, color: '#dc2626', dot: '#dc2626' },
    { pos: [121, 55], text: 'G', offset: [8, -3], fontSize: 12, color: '#dc2626', dot: '#dc2626' },
  ],
  tickMarks: [
    { from: 3, to: 4, count: 1, color: '#2563eb' },  // DE = EG
    { from: 4, to: 6, count: 1, color: '#dc2626' },   // DE = EG
  ],
};

/* ── 卡片6：相似三角形（平行线截） ── */
export const similarTriangleDiagram: Diagram2DData = {
  name: '相似三角形',
  vertices: [
    [65, 17],   // 0: A (顶)
    [20, 85],   // 1: B (左下)
    [110, 85],  // 2: C (右下)
    [38, 58],   // 3: D (AB 上)
    [92, 58],   // 4: E (AC 上)
  ],
  edges: [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 0, to: 2 },
    { from: 3, to: 4, dashed: true, color: '#dc2626', strokeWidth: 2 },
  ],
  polygons: [],
  freeLabels: [
    { pos: [65, 17], text: 'A', offset: [0, -10], fontSize: 12, dot: true },
    { pos: [20, 85], text: 'B', offset: [-10, 7], fontSize: 12, dot: true },
    { pos: [110, 85], text: 'C', offset: [8, 7], fontSize: 12, dot: true },
    { pos: [38, 58], text: 'D', offset: [-12, -3], fontSize: 12, dot: '#dc2626', color: '#dc2626' },
    { pos: [92, 58], text: 'E', offset: [10, -3], fontSize: 12, dot: '#dc2626', color: '#dc2626' },
  ],
};

/* ══════════════════════════════════════════════════════════ */
/* ██  四边形 diagrams                                      */
/* ══════════════════════════════════════════════════════════ */

/* ── 平行四边形 ── */
export const parallelogramDiagram: Diagram2DData = {
  name: '平行四边形',
  vertices: [
    [25, 85],   // 0: A (左下)
    [140, 85],  // 1: B (右下)
    [165, 20],  // 2: C (右上)
    [50, 20],   // 3: D (左上)
    [95, 52],   // 4: O (对角线交点)
    [50, 85],   // 5: H (高的垂足，D向AB作垂线)
  ],
  edges: [
    { from: 0, to: 1 },               // AB（底边）
    { from: 1, to: 2 },               // BC（右斜边）
    { from: 2, to: 3 },               // CD（上边）
    { from: 3, to: 0 },               // DA（左斜边）
    { from: 0, to: 2, dashed: true, color: '#9ca3af' },  // 对角线 AC
    { from: 1, to: 3, dashed: true, color: '#9ca3af' },  // 对角线 BD
    { from: 3, to: 5, dashed: true, color: '#dc2626' },  // 高 h（D→H）
  ],
  polygons: [
    { points: [0, 1, 2, 3], fill: '#fef9c3', opacity: 0.4 },
  ],
  freeLabels: [
    { pos: [25, 85], text: 'A', offset: [-12, 8], fontSize: 12, dot: true },
    { pos: [140, 85], text: 'B', offset: [12, 8], fontSize: 12, dot: true },
    { pos: [165, 20], text: 'C', offset: [10, -10], fontSize: 12, dot: true },
    { pos: [50, 20], text: 'D', offset: [-10, -10], fontSize: 12, dot: true },
    { pos: [95, 52], text: 'O', offset: [8, -8], fontSize: 12, color: '#9ca3af', dot: true },
    { pos: [50, 85], text: 'H', offset: [0, 12], fontSize: 12, color: '#dc2626', dot: '#dc2626' },
    { pos: [82, 85], text: '底', offset: [0, 16], fontSize: 16, color: '#334155' },
    { pos: [50, 52], text: '', tex: 'h', offset: [10, 0], fontSize: 16, color: '#dc2626' },
  ],
  tickMarks: [
    { from: 0, to: 1, count: 2, color: '#16a34a' },  // AB = CD
    { from: 2, to: 3, count: 2, color: '#16a34a' },  // CD = AB
    { from: 1, to: 2, count: 1, color: '#2563eb' },   // BC = DA
    { from: 3, to: 0, count: 1, color: '#2563eb' },   // DA = BC
  ],
  rightAngles: [
    { vertex: 5, from: 3, to: 1, size: 8, color: '#dc2626' },
  ],
};

/* ── 平行四边形判定：一组对边平行且相等 ── */
export const parallelogramJudgeDiagram: Diagram2DData = {
  name: '平行四边形判定',
  vertices: [
    [35, 18],   // 0: A
    [15, 62],   // 1: B
    [95, 62],   // 2: C
    [115, 18],  // 3: D
  ],
  edges: [
    { from: 0, to: 1, color: '#9ca3af' },
    { from: 1, to: 2, color: '#dc2626', strokeWidth: 2.5 },
    { from: 2, to: 3, color: '#9ca3af' },
    { from: 3, to: 0, color: '#dc2626', strokeWidth: 2.5 },
  ],
  polygons: [],
  freeLabels: [
    { pos: [35, 18], text: 'A', offset: [-4, -10], fontSize: 12, dot: true },
    { pos: [15, 62], text: 'B', offset: [-10, 7], fontSize: 12, dot: true },
    { pos: [95, 62], text: 'C', offset: [8, 7], fontSize: 12, dot: true },
    { pos: [115, 18], text: 'D', offset: [4, -10], fontSize: 12, dot: true },
    { pos: [65, 40], text: '∥ 且 =', offset: [0, 0], fontSize: 11, color: '#dc2626' },
  ],
  tickMarks: [
    { from: 1, to: 2, count: 1, color: '#dc2626' },
    { from: 0, to: 3, count: 1, color: '#dc2626' },
  ],
};

/* ── 矩形 ── */
export const rectangleDiagram: Diagram2DData = {
  name: '矩形',
  vertices: [
    [18, 18],   // 0: A (左上)
    [18, 72],   // 1: B (左下)
    [112, 72],  // 2: C (右下)
    [112, 18],  // 3: D (右上)
  ],
  edges: [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 3, to: 0 },
    { from: 0, to: 2, dashed: true, color: '#3b82f6' },
    { from: 1, to: 3, dashed: true, color: '#3b82f6' },
  ],
  polygons: [
    { points: [0, 1, 2, 3], fill: '#eff6ff', opacity: 0.4 },
  ],
  freeLabels: [
    { pos: [18, 18], text: 'A', offset: [-10, -8], fontSize: 12, dot: true },
    { pos: [18, 72], text: 'B', offset: [-10, 7], fontSize: 12, dot: true },
    { pos: [112, 72], text: 'C', offset: [8, 7], fontSize: 12, dot: true },
    { pos: [112, 18], text: 'D', offset: [8, -8], fontSize: 12, dot: true },
    { pos: [65, 72], text: '', tex: 'a', offset: [0, 12], fontSize: 14, color: '#dc2626' },
    { pos: [112, 45], text: '', tex: 'b', offset: [12, 0], fontSize: 14, color: '#2563eb' },
    { pos: [65, 45], text: '', tex: 'd', offset: [7, -7], fontSize: 13, color: '#3b82f6' },
  ],
  rightAngles: [
    { vertex: 0, from: 3, to: 1, size: 8 },
    { vertex: 1, from: 0, to: 2, size: 8 },
    { vertex: 2, from: 1, to: 3, size: 8 },
    { vertex: 3, from: 2, to: 0, size: 8 },
  ],
};

/* ── 正方形 ── */
export const squareDiagram: Diagram2DData = {
  name: '正方形',
  vertices: [
    [25, 20],   // 0: A
    [25, 90],   // 1: B
    [95, 90],   // 2: C
    [95, 20],   // 3: D
  ],
  edges: [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 3, to: 0 },
    { from: 0, to: 2, dashed: true, color: '#3b82f6' },
  ],
  polygons: [
    { points: [0, 1, 2, 3], fill: '#f0fdf4', opacity: 0.4 },
  ],
  freeLabels: [
    { pos: [60, 90], text: '', tex: 'a', offset: [0, 12], fontSize: 14, color: '#16a34a' },
    { pos: [25, 55], text: '', tex: 'a', offset: [-14, 0], fontSize: 14, color: '#16a34a' },
    { pos: [60, 55], text: '', tex: 'd', offset: [8, -8], fontSize: 13, color: '#3b82f6' },
  ],
  tickMarks: [
    { from: 0, to: 1, count: 1, color: '#16a34a' },
    { from: 1, to: 2, count: 1, color: '#16a34a' },
    { from: 2, to: 3, count: 1, color: '#16a34a' },
    { from: 3, to: 0, count: 1, color: '#16a34a' },
  ],
  rightAngles: [
    { vertex: 0, from: 3, to: 1, size: 8 },
  ],
};

/* ── 菱形 ── */
export const rhombusDiagram: Diagram2DData = {
  name: '菱形',
  vertices: [
    [62, 18],   // 0: A (上)
    [20, 56],   // 1: B (左)
    [62, 94],   // 2: C (下)
    [104, 56],  // 3: D (右)
    [62, 56],   // 4: O (对角线交点)
  ],
  edges: [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 3, to: 0 },
    { from: 0, to: 2, dashed: true, color: '#7c3aed' },  // 对角线 d₁
    { from: 1, to: 3, dashed: true, color: '#7c3aed' },  // 对角线 d₂
  ],
  polygons: [
    { points: [0, 1, 2, 3], fill: '#faf5ff', opacity: 0.4 },
  ],
  freeLabels: [
    { pos: [62, 18], text: 'A', offset: [0, -10], fontSize: 12, dot: true },
    { pos: [20, 56], text: 'B', offset: [-12, 0], fontSize: 12, dot: true },
    { pos: [62, 94], text: 'C', offset: [0, 10], fontSize: 12, dot: true },
    { pos: [104, 56], text: 'D', offset: [10, 0], fontSize: 12, dot: true },
    { pos: [62, 36], text: '', tex: 'd_1', offset: [-12, 4], fontSize: 12, color: '#7c3aed' },
    { pos: [85, 56], text: '', tex: 'd_2', offset: [-14, 16], fontSize: 12, color: '#7c3aed' },
  ],
  tickMarks: [
    { from: 0, to: 1, count: 1, color: '#7c3aed' },
    { from: 1, to: 2, count: 1, color: '#7c3aed' },
    { from: 2, to: 3, count: 1, color: '#7c3aed' },
    { from: 3, to: 0, count: 1, color: '#7c3aed' },
  ],
  rightAngles: [
    { vertex: 4, from: 0, to: 1, size: 7, color: '#7c3aed' },
  ],
};

/* ── 梯形 ── */
export const trapezoidDiagram: Diagram2DData = {
  name: '梯形',
  vertices: [
    [46, 19],   // 0: A (左上)
    [19, 82],   // 1: B (左下)
    [136, 82],  // 2: C (右下)
    [109, 19],  // 3: D (右上)
    [46, 82],   // 4: H (高的垂足)
  ],
  edges: [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 3, to: 0 },
    { from: 0, to: 4, dashed: true, color: '#3b82f6' },  // 高 h
  ],
  polygons: [
    { points: [0, 1, 2, 3], fill: '#fff7ed', opacity: 0.4 },
  ],
  freeLabels: [
    { pos: [46, 19], text: 'A', offset: [-10, -8], fontSize: 12, dot: true },
    { pos: [19, 82], text: 'B', offset: [-10, 7], fontSize: 12, dot: true },
    { pos: [136, 82], text: 'C', offset: [8, 7], fontSize: 12, dot: true },
    { pos: [109, 19], text: 'D', offset: [8, -8], fontSize: 12, dot: true },
    { pos: [46, 82], text: 'H', offset: [0, 12], fontSize: 12, dot: '#3b82f6', color: '#3b82f6' },
    { pos: [78, 19], text: '上底', offset: [0, -10], fontSize: 13, color: '#ea580c' },
    { pos: [78, 82], text: '下底', offset: [0, 14], fontSize: 13, color: '#ea580c' },
    { pos: [46, 50], text: '', tex: 'h', offset: [10, 0], fontSize: 14, color: '#3b82f6' },
  ],
  rightAngles: [
    { vertex: 4, from: 0, to: 2, size: 7, color: '#3b82f6' },
  ],
};

/* ── 直角梯形 ── */
export const rightTrapezoidDiagram: Diagram2DData = {
  name: '直角梯形',
  vertices: [
    [22, 18],   // 0: A (左上)
    [22, 75],   // 1: B (左下)
    [115, 75],  // 2: C (右下)
    [82, 18],   // 3: D (右上)
  ],
  edges: [
    { from: 0, to: 1, color: '#dc2626', strokeWidth: 2.5 },  // AB = 高
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 3, to: 0 },
  ],
  polygons: [
    { points: [0, 1, 2, 3], fill: '#fef2f2', opacity: 0.4 },
  ],
  freeLabels: [
    { pos: [22, 18], text: 'A', offset: [-10, -8], fontSize: 12, dot: true },
    { pos: [22, 75], text: 'B', offset: [-10, 7], fontSize: 12, dot: true },
    { pos: [115, 75], text: 'C', offset: [8, 7], fontSize: 12, dot: true },
    { pos: [82, 18], text: 'D', offset: [8, -8], fontSize: 12, dot: true },
    { pos: [22, 46], text: '', tex: 'h', offset: [-14, 0], fontSize: 14, color: '#dc2626' },
  ],
  rightAngles: [
    { vertex: 0, from: 3, to: 1, size: 8 },
    { vertex: 1, from: 0, to: 2, size: 8 },
  ],
};

/* ── 四边形包含关系（层级图） ── */
export const quadRelationDiagram: Diagram2DData = {
  name: '四边形关系',
  vertices: [
    [130, 15],   // 0: 平行四边形 (顶)
    [50, 85],    // 1: 矩形 (左)
    [210, 85],   // 2: 菱形 (右)
    [130, 155],  // 3: 正方形 (底，交汇)
  ],
  edges: [
    { from: 0, to: 1, color: '#2563eb', strokeWidth: 2.5 },
    { from: 0, to: 2, color: '#7c3aed', strokeWidth: 2.5 },
    { from: 1, to: 3, color: '#2563eb', strokeWidth: 2.5 },
    { from: 2, to: 3, color: '#7c3aed', strokeWidth: 2.5 },
  ],
  polygons: [],
  freeLabels: [
    { pos: [130, 15], text: '平行四边形', offset: [0, -14], fontSize: 18, color: '#334155', dot: true },
    { pos: [50, 85], text: '矩形', offset: [-10, -14], fontSize: 18, color: '#2563eb', dot: true },
    { pos: [210, 85], text: '菱形', offset: [10, -14], fontSize: 18, color: '#7c3aed', dot: true },
    { pos: [130, 155], text: '正方形', offset: [0, 16], fontSize: 18, color: '#16a34a', dot: true },
    { pos: [75, 45], text: '+直角', offset: [0, 0], fontSize: 14, color: '#2563eb' },
    { pos: [190, 45], text: '+等边', offset: [0, 0], fontSize: 14, color: '#7c3aed' },
    { pos: [75, 125], text: '+等边', offset: [0, 0], fontSize: 14, color: '#2563eb' },
    { pos: [190, 125], text: '+直角', offset: [0, 0], fontSize: 14, color: '#7c3aed' },
  ],
};

/* ══════════════════════════════════════════════════════════ */
/* ██  圆 diagrams                                          */
/* ══════════════════════════════════════════════════════════ */

/* ── 圆的基本概念（圆心、半径、直径、弦） ── */
export const circleBasicDiagram: Diagram2DData = {
  name: '圆的基本概念',
  vertices: [
    [70, 80],   // 0: 圆心 O
    [70, 30],   // 1: 圆上点 A（上）
    [70, 130],  // 2: 圆上点 B（下，直径另一端）
    [115, 55],  // 3: 圆上点 C（右上，弦端点）
    [115, 105], // 4: 圆上点 D（右下，弦端点）
  ],
  edges: [
    { from: 0, to: 1, color: '#dc2626', strokeWidth: 2.5 },  // 半径 r
    { from: 1, to: 2, dashed: true, color: '#3b82f6', strokeWidth: 2 },  // 直径 d
    { from: 3, to: 4, color: '#16a34a', strokeWidth: 2 },    // 弦
  ],
  polygons: [],
  freeLabels: [
    { pos: [70, 80], text: 'O', offset: [-16, 4], fontSize: 16, dot: true },
    { pos: [70, 55], text: '', tex: 'r', offset: [-14, 0], fontSize: 16, color: '#dc2626' },
    { pos: [70, 105], text: '', tex: 'd', offset: [14, 0], fontSize: 14, color: '#3b82f6' },
    { pos: [115, 80], text: '弦', offset: [16, 0], fontSize: 15, color: '#16a34a' },
    { pos: [70, 30], text: 'A', offset: [0, -12], fontSize: 12, dot: true },
    { pos: [70, 130], text: 'B', offset: [0, 14], fontSize: 12, dot: true },
    { pos: [115, 55], text: 'C', offset: [12, -6], fontSize: 12, dot: true },
    { pos: [115, 105], text: 'D', offset: [12, 6], fontSize: 12, dot: true },
  ],
  circles: [
    { center: [70, 80], radius: 50, color: '#334155' },
  ],
};

/* ── 周长和面积 ── */
export const circleAreaDiagram: Diagram2DData = {
  name: '圆的周长和面积',
  vertices: [
    [50, 50],   // 0: 圆心 O
    [85, 50],   // 1: 圆上点（右，半径端点）
  ],
  edges: [
    { from: 0, to: 1, color: '#dc2626', strokeWidth: 2.5 },  // 半径 r
  ],
  polygons: [],
  freeLabels: [
    { pos: [50, 50], text: 'O', offset: [-12, 5], fontSize: 14, dot: true },
    { pos: [68, 50], text: '', tex: 'r', offset: [0, -10], fontSize: 14, color: '#dc2626' },
  ],
  circles: [
    { center: [50, 50], radius: 35, color: '#334155', fill: '#eff6ff', fillOpacity: 0.4 },
  ],
};

/* ── 弧长公式（扇形） ── */
export const sectorDiagram: Diagram2DData = {
  name: '扇形',
  vertices: [
    [30, 70],   // 0: 圆心 O
    [90, 70],   // 1: 弧端点 A（右，0°方向）
    [60, 18],   // 2: 弧端点 B（右上，约60°方向）
  ],
  edges: [
    { from: 0, to: 1, color: '#dc2626', strokeWidth: 2 },  // OA (半径 r)
    { from: 0, to: 2, color: '#334155', strokeWidth: 2 },   // OB
  ],
  polygons: [],
  freeLabels: [
    { pos: [30, 70], text: 'O', offset: [-12, 7], fontSize: 14, dot: true },
    { pos: [90, 70], text: 'A', offset: [8, 6], fontSize: 12, dot: true },
    { pos: [60, 18], text: 'B', offset: [6, -10], fontSize: 12, dot: true },
    { pos: [60, 70], text: '', tex: 'r', offset: [0, 12], fontSize: 14, color: '#dc2626' },
    { pos: [85, 38], text: '', tex: 'l', offset: [10, 0], fontSize: 14, color: '#7c3aed' },
    { pos: [45, 52], text: '', tex: 'n°', offset: [11, 3], fontSize: 12, color: '#ea580c' },
  ],
  arcs: [
    { center: [30, 70], radius: 60, startAngle: 0, endAngle: 60, fill: '#faf5ff', fillOpacity: 0.5, color: '#7c3aed', strokeWidth: 3 },
  ],
  angleArcs: [
    { vertex: 0, from: 1, to: 2, radius: 16, color: '#ea580c' },
  ],
};

/* ── 圆的切线 ── */
export const tangentDiagram: Diagram2DData = {
  name: '圆的切线',
  vertices: [
    [75, 75],   // 0: 圆心 O
    [125, 75],  // 1: 切点 T（圆上，右）
    [125, 20],  // 2: 切线上方端点
    [125, 130], // 3: 切线下方端点
  ],
  edges: [
    { from: 0, to: 1, color: '#dc2626', strokeWidth: 2 },   // 半径 OT
    { from: 2, to: 3, color: '#2563eb', strokeWidth: 2.5 },  // 切线
  ],
  polygons: [],
  freeLabels: [
    { pos: [75, 75], text: 'O', offset: [-14, 4], dot: true, fontSize: 16 },
    { pos: [125, 75], text: 'T', offset: [12, 4], dot: '#dc2626', color: '#dc2626', fontSize: 15 },
    { pos: [100, 75], text: '', tex: 'r', offset: [0, -12], fontSize: 15, color: '#dc2626' },
    { pos: [125, 40], text: '切线', offset: [18, 0], fontSize: 15, color: '#2563eb' },
  ],
  circles: [
    { center: [75, 75], radius: 50, color: '#334155' },
  ],
  rightAngles: [
    { vertex: 1, from: 0, to: 2, size: 10, color: '#dc2626' },
  ],
};

/* ── 多边形内角和 ── */
export const polygonAngleDiagram: Diagram2DData = {
  name: '多边形内角和',
  vertices: [
    [75, 10],   // 0: 五边形顶点1
    [15, 50],   // 1: 顶点2
    [30, 110],  // 2: 顶点3
    [120, 110], // 3: 顶点4
    [135, 50],  // 4: 顶点5
  ],
  edges: [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 3, to: 4 },
    { from: 4, to: 0 },
    /* 从顶点0引对角线，把五边形分成3个三角形 */
    { from: 0, to: 2, dashed: true, color: '#dc2626' },
    { from: 0, to: 3, dashed: true, color: '#dc2626' },
  ],
  polygons: [
    { points: [0, 1, 2], fill: '#fef9c3', opacity: 0.5 },
    { points: [0, 2, 3], fill: '#dcfce7', opacity: 0.5 },
    { points: [0, 3, 4], fill: '#dbeafe', opacity: 0.5 },
  ],
  freeLabels: [
    { pos: [45, 55], text: '①', offset: [0, 0], fontSize: 16, color: '#b45309' },
    { pos: [75, 80], text: '②', offset: [0, 0], fontSize: 16, color: '#16a34a' },
    { pos: [105, 55], text: '③', offset: [0, 0], fontSize: 16, color: '#2563eb' },
  ],
};
