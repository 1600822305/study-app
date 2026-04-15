import type { Diagram2DData } from '@/components/shared/Geo2dSvg';

/** 分段函数 f(x) = {x²-1 (x≥0), 2x+3 (x<0)} 的图像 */
export const piecewiseGraphDiagram: Diagram2DData = {
  coordinateSystem: { origin: [78, 100], scale: [23, -18] },
  axes: {
    xRange: [-3.2, 3.2],
    yRange: [-2, 5],
    xTicks: [-2, -1, 1, 2],
    yTicks: [-1, 1, 2, 3],
  },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [
    { pos: [0, -1], dot: '#334155' },
  ],
  circles: [
    { center: [0, 3], radius: 0.15, color: '#334155', strokeWidth: 1.5, fill: 'white' },
  ],
  functions: [
    { fn: (x: number) => x * x - 1, xRange: [-2.35, 0], color: '#94a3b8', strokeWidth: 1.5, dashed: true },
    { fn: (x: number) => x * x - 1, xRange: [0, 2.35], color: '#dc2626', strokeWidth: 2 },
    { fn: (x: number) => 2 * x + 3, xRange: [-2.8, 0], color: '#dc2626', strokeWidth: 2 },
    { fn: (x: number) => 2 * x + 3, xRange: [0, 1.8], color: '#94a3b8', strokeWidth: 1.5, dashed: true },
  ],
};
