import type { Diagram2DData } from '@/components/shared/Geo2dSvg';

// ═══════════════════════════════════════════════════════
// 3.2.2 对数函数 — Geo2dSvg 图表数据
// ═══════════════════════════════════════════════════════

/*
 * 反函数对称图（160×160，正方形保证 y=x 是 45°，等比例缩小 20%）：
 *   origin [44.8, 112]    → math (0,0) 在像素 (44.8, 112)
 *   scale  [22.4, -22.4]  → 1 单位 = 22.4px（x、y 同尺度）
 *
 *   x 轴范围 [-2, 5]   → px [0, 156.8]   ✓ 在 160 内
 *   y 轴范围 [-2, 5]   → py [156.8, 0]   ✓ 在 160 内
 *
 *   所有像素 offset 同步 ×0.8
 */

/** 图: y=2^x 与 y=log_2 x 关于 y=x 对称对照图 */
export const logSymmetryDiagram: Diagram2DData = {
  name: 'log-symmetry',
  coordinateSystem: { origin: [44.8, 112], scale: [22.4, -22.4] },
  axes: {
    xRange: [-2, 5],
    yRange: [-2, 5],
    showNumbers: false,
    xTicks: [1, 2],
    yTicks: [1, 2],
    showOriginLabel: true,
  },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [
    // y=2^x 上的关键点
    { pos: [0, 1], dot: '#3b82f6' },
    { pos: [1, 2], dot: '#3b82f6' },
    { pos: [0, 1], offset: [-22, 2], tex: '(0,1)', fontSize: 10, color: '#3b82f6' },
    { pos: [1, 2], offset: [-26, -2], tex: '(1,2)', fontSize: 10, color: '#3b82f6' },
    // y=log_2 x 上的关键点
    { pos: [1, 0], dot: '#16a34a' },
    { pos: [2, 1], dot: '#16a34a' },
    { pos: [1, 0], offset: [3, 11], tex: '(1,0)', fontSize: 10, color: '#16a34a' },
    { pos: [2, 1], offset: [8, 6], tex: '(2,1)', fontSize: 10, color: '#16a34a' },
    // 函数名标签
    { pos: [1.6, 3.5], offset: [-16, -6], tex: 'y=2^x', fontSize: 10, color: '#3b82f6' },
    { pos: [4.2, 2.1], offset: [2, 17], tex: 'y=\\log_2 x', fontSize: 10, color: '#16a34a' },
    { pos: [3.6, 3.6], offset: [8, -5], tex: 'y=x', fontSize: 9, color: '#94a3b8' },
  ],
  functions: [
    // y=x 对称轴（虚线）
    { fn: (x: number) => x, xRange: [-1.8, 4.8], color: '#94a3b8', strokeWidth: 1.5, dashed: true },
    // y=2^x（蓝）
    { fn: (x: number) => 2 ** x, xRange: [-1.9, 2.3], color: '#3b82f6', strokeWidth: 2 },
    // y=log_2 x（绿）
    { fn: (x: number) => Math.log2(x), xRange: [0.18, 4.92], color: '#16a34a', strokeWidth: 2 },
  ],
};

/*
 * 对数函数双图（200×140 紧凑布局）：
 *   origin [21, 70]    → math (0,0) 在像素 (21, 70)
 *   scale  [27, -20]   → 1 单位 x = 27px 向右，1 单位 y = 20px 向上
 *
 *   x 轴范围 [-0.6, 6.4]  → px [4.8, 193.8]   ✓ 在 200 内
 *   y 轴范围 [-3.2, 3.2]  → py [134, 6]       ✓ 在 140 内
 *
 *   log_2 6.4 ≈ 2.68 < 3.2  ✓
 *   y=-3.2 时 x = 2^(-3.2) ≈ 0.108  曲线 xRange 起点取 0.11
 */

/** 图: y=log_2 x（底数 > 1，缓升） */
export const logBase2Diagram: Diagram2DData = {
  name: 'log-base-2',
  coordinateSystem: { origin: [21, 70], scale: [27, -20] },
  axes: {
    xRange: [-0.6, 6.4],
    yRange: [-3.2, 3.2],
    showNumbers: false,
    xTicks: [1, 2, 4],
    yTicks: [-2, -1, 1, 2],
    showOriginLabel: true,
  },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [
    // 关键定点
    { pos: [1, 0], dot: '#3b82f6' },
    { pos: [2, 1], dot: '#3b82f6' },
    { pos: [1, 0], offset: [8, 14], tex: '(1,0)', fontSize: 10, color: '#3b82f6' },
    { pos: [2, 1], offset: [16, 7], tex: '(2,1)', fontSize: 10, color: '#3b82f6' },
    // 函数名
    { pos: [5, 2.32], offset: [-33, -9], tex: 'y=\\log_2 x', fontSize: 11, color: '#3b82f6' },
  ],
  functions: [
    { fn: (x: number) => Math.log2(x), xRange: [0.11, 6.4], color: '#3b82f6', strokeWidth: 2.5 },
  ],
};

/** 图: 两条对数曲线在同一图（蓝 log_2 x + 绿 log_{1/2} x），展示关于 x 轴对称 */
export const logCombineDiagram: Diagram2DData = {
  name: 'log-combine',
  coordinateSystem: { origin: [21, 70], scale: [27, -20] },
  axes: {
    xRange: [-0.6, 6.4],
    yRange: [-3.2, 3.2],
    showNumbers: false,
    xTicks: [1, 2, 4],
    yTicks: [-2, -1, 1, 2],
    showOriginLabel: true,
  },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [
    // 共同过定点
    { pos: [1, 0], dot: '#334155' },
    { pos: [1, 0], offset: [4, 13], tex: '(1,0)', fontSize: 10, color: '#334155' },
    // 函数名
    { pos: [5, 2.32], offset: [-33, -9], tex: 'y=\\log_2 x', fontSize: 11, color: '#3b82f6' },
    { pos: [5, -2.32], offset: [-11, 13], tex: 'y=\\log_{\\frac{1}{2}} x', fontSize: 11, color: '#16a34a' },
  ],
  functions: [
    { fn: (x: number) => Math.log2(x), xRange: [0.11, 6.4], color: '#3b82f6', strokeWidth: 2.5 },
    { fn: (x: number) => -Math.log2(x), xRange: [0.11, 6.4], color: '#16a34a', strokeWidth: 2.5 },
  ],
};

/** 图: y=log_{1/2} x（底数 < 1，缓降） */
export const logHalfDiagram: Diagram2DData = {
  name: 'log-half',
  coordinateSystem: { origin: [21, 70], scale: [27, -20] },
  axes: {
    xRange: [-0.6, 6.4],
    yRange: [-3.2, 3.2],
    showNumbers: false,
    xTicks: [1, 2, 4],
    yTicks: [-2, -1, 1, 2],
    showOriginLabel: true,
  },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [
    // 关键定点
    { pos: [1, 0], dot: '#16a34a' },
    { pos: [2, -1], dot: '#16a34a' },
    { pos: [1, 0], offset: [10, -12], tex: '(1,0)', fontSize: 10, color: '#16a34a' },
    { pos: [2, -1], offset: [-5, 15], tex: '(2,-1)', fontSize: 10, color: '#16a34a' },
    // 函数名
    { pos: [5, -2.32], offset: [-11, 13], tex: 'y=\\log_{\\frac{1}{2}} x', fontSize: 11, color: '#16a34a' },
  ],
  functions: [
    { fn: (x: number) => -Math.log2(x), xRange: [0.11, 6.4], color: '#16a34a', strokeWidth: 2.5 },
  ],
};

/*
 * 节五例 1 配图（198×162，等比缩小 10%）：t = x² - 2x - 3 拆两段
 *   顶点 (1, -4)，零点 -1 和 3
 *
 *   origin [72, 90]
 *   scale  [22.5, -14.4]
 *
 *   所有像素 offset 同步 ×0.9
 *
 *   t > 0 的两段（粗绿）：x ∈ [-2, -1] 与 [3, 4]
 *   t < 0 的中间段（细灰虚）：x ∈ [-1, 3]
 */

/** 图: t = x² - 2x - 3 拆两段（节五例 1 配图） */
export const logSquareTwoBranchDiagram: Diagram2DData = {
  name: 'log-square-two-branch',
  coordinateSystem: { origin: [72, 90], scale: [22.5, -14.4] },
  axes: {
    xRange: [-3, 5],
    yRange: [-5, 5],
    showNumbers: false,
    xTicks: [-1, 1, 3],
    yTicks: [-4],
    showOriginLabel: true,
  },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [
    // 零点（t>0 与 t<0 的分界）
    { pos: [-1, 0], dot: '#dc2626' },
    { pos: [3, 0], dot: '#dc2626' },
    { pos: [-1, 0], offset: [-3.6, 11.7], tex: '-1', fontSize: 10, color: '#dc2626' },
    { pos: [3, 0], offset: [-1.8, 11.7], tex: '3', fontSize: 10, color: '#dc2626' },
    // 顶点
    { pos: [1, -4], dot: '#94a3b8' },
    { pos: [1, -4], offset: [7.2, 3.6], tex: '(1,-4)', fontSize: 10, color: '#94a3b8' },
    // 区域标
    { pos: [-1.5, 2.25], offset: [-19.8, -1.8], tex: 't>0', fontSize: 11, color: '#16a34a' },
    { pos: [3.5, 2.25], offset: [5.4, -1.8], tex: 't>0', fontSize: 11, color: '#16a34a' },
    { pos: [1, -2], offset: [9, 0], tex: 't<0', fontSize: 10, color: '#94a3b8' },
    // 函数名
    { pos: [3, 4], offset: [-23.4, -1.8], tex: 't=x^2-2x-3', fontSize: 10, color: '#334155' },
  ],
  functions: [
    // 中间段 t < 0：细灰虚线
    { fn: (x: number) => x * x - 2 * x - 3, xRange: [-1, 3], color: '#94a3b8', strokeWidth: 1.5, dashed: true },
    // 左段 t > 0：粗绿色实线
    { fn: (x: number) => x * x - 2 * x - 3, xRange: [-2.05, -1], color: '#16a34a', strokeWidth: 2.5 },
    // 右段 t > 0：粗绿色实线
    { fn: (x: number) => x * x - 2 * x - 3, xRange: [3, 4.05], color: '#16a34a', strokeWidth: 2.5 },
  ],
};

/*
 * 节五例 2 配图（198×162）：t = -x² + 4x - 3 开口向下，定义域取中间
 *   顶点 (2, 1)，零点 1 和 3
 *
 *   origin [33, 65]
 *   scale  [33, -32.4]
 *
 *   t > 0 的中间一段（粗绿）：x ∈ [1, 3]
 *   t < 0 的两端（细灰虚）：x ∈ [0.1, 1] 与 [3, 3.9]
 */

/** 图: t = -x² + 4x - 3 开口向下，定义域取中间（节五例 2 配图） */
export const logSquareDownDiagram: Diagram2DData = {
  name: 'log-square-down',
  coordinateSystem: { origin: [33, 65], scale: [33, -32.4] },
  axes: {
    xRange: [-1, 5],
    yRange: [-3, 2],
    showNumbers: false,
    xTicks: [1, 2, 3],
    yTicks: [1],
    showOriginLabel: true,
  },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [
    // 零点（t>0 与 t<0 的分界）
    { pos: [1, 0], dot: '#dc2626' },
    { pos: [3, 0], dot: '#dc2626' },
    { pos: [1, 0], offset: [1, 12], tex: '1', fontSize: 10, color: '#dc2626' },
    { pos: [3, 0], offset: [-4, 11], tex: '3', fontSize: 10, color: '#dc2626' },
    // 顶点 (2, 1)
    { pos: [2, 1], dot: '#94a3b8' },
    { pos: [2, 1], offset: [2, -7], tex: '(2,1)', fontSize: 10, color: '#94a3b8' },
    // 区域标
    { pos: [2, 0.35], offset: [2, 0], tex: 't>0', fontSize: 11, color: '#16a34a' },
    { pos: [0.5, -1.5], offset: [11, 18], tex: 't<0', fontSize: 10, color: '#94a3b8' },
    { pos: [3.5, -1.5], offset: [-9, 18], tex: 't<0', fontSize: 10, color: '#94a3b8' },
    // 函数名
    { pos: [4.5, 1.5], offset: [-60, -7], tex: 't=-x^2+4x-3', fontSize: 10, color: '#334155' },
  ],
  functions: [
    // 中间段 t > 0：粗绿色实线
    { fn: (x: number) => -x * x + 4 * x - 3, xRange: [1, 3], color: '#16a34a', strokeWidth: 2.5 },
    // 左段 t < 0：细灰虚线
    { fn: (x: number) => -x * x + 4 * x - 3, xRange: [0.1, 1], color: '#94a3b8', strokeWidth: 1.5, dashed: true },
    // 右段 t < 0：细灰虚线
    { fn: (x: number) => -x * x + 4 * x - 3, xRange: [3, 3.9], color: '#94a3b8', strokeWidth: 1.5, dashed: true },
  ],
};

/*
 * 节八例2：y=log_2 x 与 y=x-2 交点图（200×140）
 *   origin [28, 75]    → math (0,0) 在像素 (28, 75)
 *   scale  [28, -22]   → 1 单位 x = 28px，1 单位 y = 22px
 *
 *   x 轴范围 [-0.5, 5.5]  → px [14, 182]    ✓ 在 200 内
 *   y 轴范围 [-3, 3]      → py [141, 9]     ✓ 在 140 内
 *
 *   交点 1：x ≈ 0.31，y ≈ -1.69
 *   交点 2：x = 4，y = 2
 */

/** 图: y=log_2 x（蓝）与 y=x-2（红）的交点 */
export const logZeroIntersectDiagram: Diagram2DData = {
  name: 'log-zero-intersect',
  coordinateSystem: { origin: [28, 75], scale: [28, -22] },
  axes: {
    xRange: [-0.5, 5.5],
    yRange: [-3, 3],
    showNumbers: false,
    xTicks: [1, 2, 4],
    yTicks: [-2, -1, 1, 2],
    showOriginLabel: true,
  },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [
    // 交点 1（约 x=0.31）
    { pos: [0.31, -1.69], dot: '#dc2626' },
    // 交点 2（x=4, y=2）
    { pos: [4, 2], dot: '#dc2626' },
    { pos: [4, 2], offset: [4, 19], tex: '(4,2)', fontSize: 10, color: '#dc2626' },
    // log 曲线上的关键点
    { pos: [1, 0], dot: '#3b82f6' },
    { pos: [1, 0], offset: [4, 10], tex: '(1,0)', fontSize: 10, color: '#3b82f6' },
    // 直线上的关键点
    { pos: [2, 0], dot: '#e97316' },
    { pos: [2, 0], offset: [4, 10], tex: '(2,0)', fontSize: 10, color: '#e97316' },
    // 函数名标签
    { pos: [5, 2.32], offset: [-100, 11], tex: 'y=\\log_2 x', fontSize: 10, color: '#3b82f6' },
    { pos: [4.8, 2.8], offset: [-28, -6], tex: 'y=x-2', fontSize: 10, color: '#e97316' },
  ],
  functions: [
    // y = log_2 x（蓝）
    { fn: (x: number) => Math.log2(x), xRange: [0.08, 5.5], color: '#3b82f6', strokeWidth: 2.5 },
    // y = x - 2（橙色直线）
    { fn: (x: number) => x - 2, xRange: [-0.3, 5.5], color: '#e97316', strokeWidth: 2 },
  ],
};
