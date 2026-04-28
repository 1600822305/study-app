import type { Diagram2DData } from '@/components/shared/Geo2dSvg';

// ═══════════════════════════════════════════════════════
// 3.3 函数图像与零点 — Geo2dSvg 图表数据
// ═══════════════════════════════════════════════════════

/** 图: y = x² + x - 2，零点在 x = -2 和 x = 1 */
export const zeroPointParabolaDiagram: Diagram2DData = {
  name: 'zero-point-parabola',
  coordinateSystem: { origin: [80, 40], scale: [25, -15] },
  axes: { xRange: [-3, 2.5], yRange: [-3, 3], showNumbers: false, xTicks: [], yTicks: [], showOriginLabel: true },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [
    { pos: [-2, 0], dot: '#ef4444' },
    { pos: [1, 0], dot: '#ef4444' },
    { pos: [-2, 0], offset: [0, 15], text: '-2', fontSize: 11 },
    { pos: [1, 0], offset: [0, 15], text: '1', fontSize: 11 },
  ],
  functions: [
    { fn: (x: number) => x * x + x - 2, xRange: [-2.8, 1.8], color: '#2563eb', strokeWidth: 2 },
  ],
};

/** 图: y = x² 和 y = 2 - x 的交点 */
export const twoCurvesIntersectDiagram: Diagram2DData = {
  name: 'two-curves-intersect',
  coordinateSystem: { origin: [80, 55], scale: [25, -12] },
  axes: { xRange: [-3, 2.5], yRange: [-1, 5], showNumbers: false, xTicks: [], yTicks: [], showOriginLabel: true },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [
    { pos: [-2, 4], dot: '#ef4444' },
    { pos: [1, 1], dot: '#ef4444' },
    { pos: [-2, 0], offset: [0, 12], text: '-2', fontSize: 11 },
    { pos: [1, 0], offset: [0, 12], text: '1', fontSize: 11 },
    { pos: [1.8, 3.2], offset: [5, 0], tex: 'y=x^2', fontSize: 10 },
    { pos: [2, 0.3], offset: [5, 0], tex: 'y=2-x', fontSize: 10 },
  ],
  functions: [
    { fn: (x: number) => x * x, xRange: [-2.3, 2], color: '#2563eb', strokeWidth: 2 },
    { fn: (x: number) => 2 - x, xRange: [-2.5, 2.5], color: '#16a34a', strokeWidth: 2 },
  ],
};
