import type { Diagram2DData } from '@/components/shared/Geo2dSvg';

// ═══════════════════════════════════════════════════════
// 3.2 基本初等函数 — Geo2dSvg 图表数据
// ═══════════════════════════════════════════════════════

/*
 * 坐标计算（两图均为 140×108）：
 *   origin [25, 90]   → math (0,0) 在像素 (25, 90)
 *   scale  [18, -14.4] → 1 单位 x = 18px 向右，1 单位 y = 14.4px 向上
 *
 *   x 轴范围 [-1.4, 5.5]  → px [0, 124]   ✓ 在 140 内
 *   y 轴范围 [-0.5, 5.5]  → py [97, 11]   ✓ 在 108 内
 *
 *   2^x  画到 x=2.4  → y≈5.3 → py≈14      ✓ 不溢出
 *   0.5^x 画到 x=−2.4 → y≈5.3 → py≈14     ✓ 不溢出
 */

/** 图: 指数函数 y=2^x（a>1，增函数） */
export const expIncDiagram: Diagram2DData = {
  name: 'exp-inc',
  coordinateSystem: { origin: [25, 90], scale: [18, -14.4] },
  axes: { xRange: [-1.4, 5.5], yRange: [-0.5, 5.5], showNumbers: false, xTicks: [], yTicks: [], showOriginLabel: true },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [
    { pos: [0, 1], dot: '#334155' },
    { pos: [1, 2], dot: '#334155' },
    { pos: [-0.4, 1.7], offset: [-5, 0], tex: '(0,1)', fontSize: 10 },
    { pos: [1.7, 2.8], offset: [4, 14], tex: '(1,2)', fontSize: 10 },
    { pos: [3.5, 1.5], offset: [14, 0], tex: 'a>1', fontSize: 12 },
  ],
  functions: [
    { fn: (x: number) => 2 ** x, xRange: [-1.4, 2.4], color: '#3b82f6', strokeWidth: 2.5 },
  ],
};

/** 图: 指数函数 y=(1/2)^x（0<a<1，减函数） */
export const expDecDiagram: Diagram2DData = {
  name: 'exp-dec',
  coordinateSystem: { origin: [25, 90], scale: [18, -14.4] },
  axes: { xRange: [-1.4, 5.5], yRange: [-0.5, 5.5], showNumbers: false, xTicks: [], yTicks: [], showOriginLabel: true },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [
    { pos: [0, 1], dot: '#334155' },
    { pos: [1, 0.5], dot: '#334155' },
    { pos: [0.4, 1.8], offset: [6, -1], tex: '(0,1)', fontSize: 10 },
    { pos: [2.2, 0.85], offset: [-5, -2], tex: '(1,\\tfrac{1}{2})', fontSize: 10 },
    { pos: [3, 3], tex: '0<a<1', fontSize: 12 },
  ],
  functions: [
    { fn: (x: number) => 0.5 ** x, xRange: [-2.4, 5], color: '#22c55e', strokeWidth: 2.5 },
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
