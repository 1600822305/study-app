import type { Diagram2DData } from '@/components/shared/Geo2dSvg';

/** 例3：f(x) = {-x²+4x (x≤2), 4-x (x>2)} 的图像 + 参考线 */
export const piecewiseExample3Diagram: Diagram2DData = {
  coordinateSystem: { origin: [20, 74], scale: [15, -14] },
  axes: {
    xRange: [-0.8, 6.5],
    yRange: [-1.5, 5.5],
    xTicks: [2, 4, 6],
    yTicks: [2, 4],
  },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [
    { pos: [2, 4], dot: '#1d4ed8', text: '(2,4)', offset: [-20, -3], fontSize: 7, color: '#1d4ed8' },
    { pos: [5.8, 4], text: 'y=4', fontSize: 7, color: '#9ca3af' },
    { pos: [5.8, 2], text: 'y=2', fontSize: 7, color: '#9ca3af' },
  ],
  circles: [
    { center: [2, 2], radius: 0.18, color: '#dc2626', strokeWidth: 1.2, fill: 'white' },
  ],
  functions: [
    { fn: (x: number) => -x * x + 4 * x, xRange: [-0.5, 2], color: '#1d4ed8', strokeWidth: 1.5 },
    { fn: (x: number) => 4 - x, xRange: [2, 6.5], color: '#dc2626', strokeWidth: 1.5 },
    { fn: () => 4, xRange: [-0.5, 6.5], color: '#9ca3af', strokeWidth: 0.8, dashed: true },
    { fn: () => 2, xRange: [-0.5, 6.5], color: '#9ca3af', strokeWidth: 0.8, dashed: true },
  ],
};

/** 例4：f(x) = {-x+4 (x≤1), 2x-1 (x>1)} 的图像 */
export const piecewiseExample4Diagram: Diagram2DData = {
  coordinateSystem: { origin: [20, 74], scale: [15, -14] },
  axes: {
    xRange: [-1.5, 5.5],
    yRange: [-0.5, 5.5],
    xTicks: [1],
    yTicks: [1, 3],
  },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [
    { pos: [1, 3], dot: '#1d4ed8', text: '(1,3)', offset: [5, -5], fontSize: 7, color: '#1d4ed8' },
    { pos: [5.2, 3], text: 'y=3', fontSize: 7, color: '#9ca3af' },
    { pos: [5.2, 1], text: 'y=1', fontSize: 7, color: '#9ca3af' },
  ],
  circles: [
    { center: [1, 1], radius: 0.18, color: '#dc2626', strokeWidth: 1.2, fill: 'white' },
  ],
  functions: [
    { fn: (x: number) => -x + 4, xRange: [-1, 1], color: '#1d4ed8', strokeWidth: 1.5 },
    { fn: (x: number) => 2 * x - 1, xRange: [1, 3.2], color: '#dc2626', strokeWidth: 1.5 },
    { fn: () => 3, xRange: [-1, 5.5], color: '#9ca3af', strokeWidth: 0.8, dashed: true },
    { fn: () => 1, xRange: [-1, 5.5], color: '#9ca3af', strokeWidth: 0.8, dashed: true },
  ],
};

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
