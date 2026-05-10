import type { Diagram2DData } from '@/components/shared/Geo2dSvg';

// ═══════════════════════════════════════════════════════
// 3.2 基本初等函数 — Geo2dSvg 图表数据
// ═══════════════════════════════════════════════════════

/*
 * 新版指数函数图（200×140，紧凑布局）：
 *   origin [103, 118]  → math (0,0) 在像素 (103, 118)
 *   scale  [29, -19]   → 1 单位 x = 29px 向右，1 单位 y = 19px 向上
 *
 *   x 轴范围 [-2.8, 3]   → px [22, 190]   ✓ 在 200 内
 *   y 轴范围 [-0.3, 5.8]  → py [124, 8]   ✓ 在 140 内
 *
 *   2^x  画到 x=2.5  → y≈5.66 → py≈11     ✓ 不溢出
 *   0.5^x 画到 x=-2.5 → y≈5.66 → py≈11    ✓ 不溢出
 */

/** 图: y=2^x（新版紧凑） */
export const expIncDiagramNew: Diagram2DData = {
  name: 'exp-inc-new',
  coordinateSystem: { origin: [103, 118], scale: [29, -19] },
  axes: { xRange: [-2.8, 3], yRange: [-0.3, 5.8], showNumbers: false, xTicks: [1, 2], yTicks: [1, 2, 4], showOriginLabel: true },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [
    { pos: [0, 1], dot: '#334155' },
    { pos: [1, 2], dot: '#334155' },
    { pos: [0, 1], offset: [-32, 2], tex: '(0,1)', fontSize: 10 },
    { pos: [1, 2], offset: [16, 8], tex: '(1,2)', fontSize: 10 },
    { pos: [1.8, 4.5], offset: [-12, -2], tex: 'y=2^x', fontSize: 11 },
  ],
  functions: [
    { fn: (x: number) => 2 ** x, xRange: [-2.8, 2.5], color: '#3b82f6', strokeWidth: 2.5 },
  ],
};

/** 图: y=(1/2)^x（新版紧凑） */
export const expDecDiagramNew: Diagram2DData = {
  name: 'exp-dec-new',
  coordinateSystem: { origin: [103, 118], scale: [29, -19] },
  axes: { xRange: [-3, 2.8], yRange: [-0.3, 5.8], showNumbers: false, xTicks: [-2, -1, 1], yTicks: [1, 2, 4], showOriginLabel: true },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [
    { pos: [0, 1], dot: '#334155' },
    { pos: [1, 0.5], dot: '#334155' },
    { pos: [0, 1], offset: [-17, 8], tex: '(0,1)', fontSize: 10 },
    { pos: [1, 0.5], offset: [6, -11], tex: '(1,\\tfrac{1}{2})', fontSize: 10 },
    { pos: [-1.8, 4.5], offset: [19, -10], tex: 'y=(\\tfrac{1}{2})^x', fontSize: 11 },
  ],
  functions: [
    { fn: (x: number) => 0.5 ** x, xRange: [-2.5, 2.8], color: '#22c55e', strokeWidth: 2.5 },
  ],
};

/*
 * 对数函数图（140×108）：
 *   origin [25, 54]   → math (0,0) 在像素 (25, 54)
 *   scale  [18, -14.4] → 1 单位 x = 18px 向右，1 单位 y = 14.4px 向上
 *   x 轴范围 [-1, 5.5]  → px [7, 124]   ✓ 在 140 内
 *   y 轴范围 [-3, 3]   → py [97, 11]   ✓ 在 108 内
 *
 *   log_2(0.3)  ≈ -1.74 → py ≈ 79       ✓ 不溢出
 *   log_2(5)    ≈ 2.32  → py ≈ 21       ✓ 不溢出
 */

/** 图: 对数函数 y=log_2 x（a>1，增函数） */
export const logIncDiagram: Diagram2DData = {
  name: 'log-inc',
  coordinateSystem: { origin: [25, 54], scale: [18, -14.4] },
  axes: { xRange: [-1, 5.5], yRange: [-3, 3], showNumbers: false, xTicks: [], yTicks: [], showOriginLabel: true },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [
    { pos: [1, 0], dot: '#ef4444' },
    { pos: [2, 1], dot: '#334155' },
    { pos: [1, 0], offset: [9, 13], tex: '(1,0)', fontSize: 10 },
    { pos: [2, 1], offset: [16, 4], tex: '(2,1)', fontSize: 10 },
    { pos: [4, 2.4], offset: [-14, -3], tex: 'a>1', fontSize: 12 },
  ],
  functions: [
    { fn: (x: number) => globalThis.Math.log2(x), xRange: [0.3, 5], color: '#3b82f6', strokeWidth: 2.5 },
  ],
};

/** 图: 对数函数 y=log_{0.5} x（0<a<1，减函数） */
export const logDecDiagram: Diagram2DData = {
  name: 'log-dec',
  coordinateSystem: { origin: [25, 54], scale: [18, -14.4] },
  axes: { xRange: [-1, 5.5], yRange: [-3, 3], showNumbers: false, xTicks: [], yTicks: [], showOriginLabel: true },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [
    { pos: [1, 0], dot: '#ef4444' },
    { pos: [0.5, 1], dot: '#334155' },
    { pos: [1, 0], offset: [-5, 17], tex: '(1,0)', fontSize: 10 },
    { pos: [0.5, 1], offset: [18, -3], tex: '(\\tfrac{1}{2},1)', fontSize: 10 },
    { pos: [3.5, -2.4], offset: [-7, 8], tex: '0<a<1', fontSize: 12 },
  ],
  functions: [
    { fn: (x: number) => -globalThis.Math.log2(x), xRange: [0.3, 5], color: '#22c55e', strokeWidth: 2.5 },
  ],
};
