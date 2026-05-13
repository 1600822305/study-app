import type { Diagram2DData } from '@/components/shared/Geo2dSvg';

// ═══════════════════════════════════════════════════════
// 3.2.3 幂函数 — Geo2dSvg 图表数据（节二卡片 2）
// ═══════════════════════════════════════════════════════

/*
 * 7 张典型幂函数图（α = 1, 2, 3, 1/3, 1/2, -1, -2）
 *
 * 统一尺寸 100.8×86.4（等比缩小 ×0.72 版，相对原 140×120），两端各留 5.76px 箭头余量，有效绘图区 89.28×74.88
 *   x 有效像素范围 [5.76, 95.04]
 *   y 有效像素范围 [5.76, 80.64]
 *
 * 公式（所有像素值 = 原 140×120 版 × 0.72）：
 *   |scale_x| = 89.28 / (xRange[1] - xRange[0])
 *   |scale_y| = 74.88 / (yRange[1] - yRange[0])
 *   origin_x  = 5.76 - xRange[0] * scale_x
 *   origin_y  = 5.76 + yRange[1] * |scale_y|    // scale_y 取负
 *
 * 视觉：
 *   - 曲线色 #334155（深灰蓝，统一）
 *   - (1, 1) 红点 #ef4444（公共定点，所有 7 张都有）
 *   - 无数字刻度（小图空间有限，记形状为主）
 */

/** 图: α=1 · y=x（过原点的直线，奇函数） */
export const powerAlpha1Diagram: Diagram2DData = {
  name: 'power-alpha-1',
  coordinateSystem: { origin: [50.4, 43.2], scale: [17.856, -14.976] },
  axes: {
    xRange: [-2.5, 2.5],
    yRange: [-2.5, 2.5],
    showNumbers: false,
    xTicks: [],
    yTicks: [],
    showOriginLabel: false,
  },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [
    { pos: [1, 1], dot: '#ef4444' },
  ],
  functions: [
    { fn: (x: number) => x, xRange: [-2.5, 2.5], color: '#334155', strokeWidth: 2 },
  ],
};

/** 图: α=2 · y=x²（抛物线，偶函数，过原点） */
export const powerAlpha2Diagram: Diagram2DData = {
  name: 'power-alpha-2',
  coordinateSystem: { origin: [50.4, 72.72], scale: [20.2896, -15.9336] },
  axes: {
    xRange: [-2.2, 2.2],
    yRange: [-0.5, 4.2],
    showNumbers: false,
    xTicks: [],
    yTicks: [],
    showOriginLabel: false,
  },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [
    { pos: [1, 1], dot: '#ef4444' },
  ],
  functions: [
    // y = 4.2 对应 |x| ≈ 2.05，稍稍截断避免出框
    { fn: (x: number) => x * x, xRange: [-2.05, 2.05], color: '#334155', strokeWidth: 2 },
  ],
};

/** 图: α=3 · y=x³（三次曲线，奇函数，过原点） */
export const powerAlpha3Diagram: Diagram2DData = {
  name: 'power-alpha-3',
  coordinateSystem: { origin: [50.4, 43.2], scale: [24.7968, -10.6992] },
  axes: {
    xRange: [-1.8, 1.8],
    yRange: [-3.5, 3.5],
    showNumbers: false,
    xTicks: [],
    yTicks: [],
    showOriginLabel: false,
  },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [
    { pos: [1, 1], dot: '#ef4444' },
  ],
  functions: [
    // y = 3.5 对应 |x| ≈ 1.518，截断避免出框
    { fn: (x: number) => x ** 3, xRange: [-1.52, 1.52], color: '#334155', strokeWidth: 2 },
  ],
};

/** 图: α=1/3 · y=∛x（立方根，奇函数，关于原点对称的卧倒 S 形） */
export const powerAlphaThirdDiagram: Diagram2DData = {
  name: 'power-alpha-1-3',
  coordinateSystem: { origin: [50.4, 43.2], scale: [12.7512, -23.4] },
  axes: {
    xRange: [-3.5, 3.5],
    yRange: [-1.6, 1.6],
    showNumbers: false,
    xTicks: [],
    yTicks: [],
    showOriginLabel: false,
  },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [
    { pos: [1, 1], dot: '#ef4444' },
  ],
  functions: [
    // Math.cbrt 天然处理负数：cbrt(-8) = -2
    { fn: (x: number) => Math.cbrt(x), xRange: [-3.4, 3.4], color: '#334155', strokeWidth: 2, samples: 300 },
  ],
};

/** 图: α=1/2 · y=√x（仅在 [0, +∞) 上有定义） */
export const powerAlphaHalfDiagram: Diagram2DData = {
  name: 'power-alpha-1-2',
  coordinateSystem: { origin: [15.696, 71.28], scale: [19.8432, -31.1976] },
  axes: {
    xRange: [-0.5, 4],
    yRange: [-0.3, 2.1],
    showNumbers: false,
    xTicks: [],
    yTicks: [],
    showOriginLabel: false,
  },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [
    { pos: [1, 1], dot: '#ef4444' },
  ],
  functions: [
    { fn: (x: number) => Math.sqrt(x), xRange: [0, 4], color: '#334155', strokeWidth: 2 },
  ],
};

/** 图: α=-1 · y=1/x（双曲线，奇函数，两支分别在一、三象限） */
export const powerAlphaNeg1Diagram: Diagram2DData = {
  name: 'power-alpha-neg-1',
  coordinateSystem: { origin: [50.4, 43.2], scale: [14.8824, -12.4776] },
  axes: {
    xRange: [-3, 3],
    yRange: [-3, 3],
    showNumbers: false,
    xTicks: [],
    yTicks: [],
    showOriginLabel: false,
  },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [
    { pos: [1, 1], dot: '#ef4444' },
  ],
  functions: [
    // y = 3 对应 |x| = 1/3 ≈ 0.333，两支分开画
    { fn: (x: number) => 1 / x, xRange: [-3, -0.34], color: '#334155', strokeWidth: 2 },
    { fn: (x: number) => 1 / x, xRange: [0.34, 3], color: '#334155', strokeWidth: 2 },
  ],
};

/** 图: α=-2 · y=1/x²（两支都在 y>0，偶函数，关于 y 轴对称） */
export const powerAlphaNeg2Diagram: Diagram2DData = {
  name: 'power-alpha-neg-2',
  coordinateSystem: { origin: [50.4, 71.28], scale: [14.8824, -18.72] },
  axes: {
    xRange: [-3, 3],
    yRange: [-0.5, 3.5],
    showNumbers: false,
    xTicks: [],
    yTicks: [],
    showOriginLabel: false,
  },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [
    { pos: [1, 1], dot: '#ef4444' },
  ],
  functions: [
    // y = 3.5 对应 |x| ≈ 0.535，两支分开画
    { fn: (x: number) => 1 / (x * x), xRange: [-3, -0.55], color: '#334155', strokeWidth: 2 },
    { fn: (x: number) => 1 / (x * x), xRange: [0.55, 3], color: '#334155', strokeWidth: 2 },
  ],
};

// ═══════════════════════════════════════════════════════
// 节二卡片 5（例 2 看图选 α）· 两张形状对照图（160×120）
// 策略：黑实线为 y=x^α，灰虚线为 y=x 作参照，红点 (1, 1)
//   x 有效像素范围 [8, 152]，y 有效像素范围 [8, 112]
// ═══════════════════════════════════════════════════════

/** 图: α>1 示例（以 α=1.8 作可视化，学生看形状推 α 范围） */
export const powerGt1ShapeDiagram: Diagram2DData = {
  name: 'power-gt1-shape',
  coordinateSystem: { origin: [24.6, 104.4], scale: [55.385, -25.366] },
  axes: {
    xRange: [-0.3, 2.3],
    yRange: [-0.3, 3.8],
    showNumbers: false,
    xTicks: [],
    yTicks: [],
    showOriginLabel: false,
  },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [
    { pos: [1, 1], dot: '#ef4444' },
  ],
  functions: [
    // y = x（蓝色实线参照）
    { fn: (x: number) => x, xRange: [-0.3, 2.3], color: '#3b82f6', strokeWidth: 1.5 },
    // y = x^1.8（黑实线，x ≤ 2 时 y = 3.48 < 3.8）
    { fn: (x: number) => Math.pow(x, 1.8), xRange: [0, 2], color: '#334155', strokeWidth: 2 },
  ],
};

/** 图: 0<α<1 示例（以 α=0.6 作可视化，学生看形状推 α 范围） */
export const powerLt1ShapeDiagram: Diagram2DData = {
  name: 'power-lt1-shape',
  coordinateSystem: { origin: [24.6, 100], scale: [55.385, -40] },
  axes: {
    xRange: [-0.3, 2.3],
    yRange: [-0.3, 2.3],
    showNumbers: false,
    xTicks: [],
    yTicks: [],
    showOriginLabel: false,
  },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [
    { pos: [1, 1], dot: '#ef4444' },
  ],
  functions: [
    // y = x（蓝色实线参照）
    { fn: (x: number) => x, xRange: [-0.3, 2.3], color: '#3b82f6', strokeWidth: 1.5 },
    // y = x^0.6（黑实线，x ≤ 2.3 时 y ≈ 1.62 < 2.3）
    { fn: (x: number) => Math.pow(x, 0.6), xRange: [0, 2.3], color: '#334155', strokeWidth: 2 },
  ],
};
