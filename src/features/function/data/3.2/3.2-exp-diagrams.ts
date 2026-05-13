import type { Diagram2DData } from '@/components/shared/Geo2dSvg';

// ═══════════════════════════════════════════════════════
// 3.2 指数函数 — Geo2dSvg 图表数据
// ═══════════════════════════════════════════════════════

/*
 * 指数函数图（200×140，紧凑布局）：
 *   origin [103, 118]  → math (0,0) 在像素 (103, 118)
 *   scale  [29, -19]   → 1 单位 x = 29px 向右，1 单位 y = 19px 向上
 *
 *   x 轴范围 [-2.8, 3]   → px [22, 190]   ✓ 在 200 内
 *   y 轴范围 [-0.3, 5.8]  → py [124, 8]   ✓ 在 140 内
 *
 *   2^x  画到 x=2.5  → y≈5.66 → py≈11     ✓ 不溢出
 *   0.5^x 画到 x=-2.5 → y≈5.66 → py≈11    ✓ 不溢出
 */

/** 图: y=2^x（紧凑） */
export const expIncDiagram: Diagram2DData = {
  name: 'exp-inc',
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

/** 图: y=(1/2)^x（紧凑） */
export const expDecDiagram: Diagram2DData = {
  name: 'exp-dec',
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

