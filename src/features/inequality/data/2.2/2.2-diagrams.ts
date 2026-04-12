import type { Diagram2DData } from '@/components/shared/geo2d/types';

// 数轴：展示 |-3| = 3 和 |3| = 3
export const absoluteValueNumberLine: Diagram2DData = {
  name: 'abs-number-line',
  coordinateSystem: {
    origin: [180, 65],   // 原点偏下，上方留空给花括号
    scale: [40, -40],    // 每个单位 40px
  },
  axes: {
    xRange: [-4.5, 4.5],
    xTicks: [-3, -2, -1, 0, 1, 2, 3, 4],
    xTickLabels: { 4: 'a' },
    yRange: [0, 0],
    step: 1,
    showNumbers: true,
    showOriginLabel: false,
    tickFontWeight: 'bold',
    tickColor: '#1e293b',   // 深色数字
    color: '#1e293b',       // 深色轴线
    xTickSide: 'up',
    showYAxis: false,
  },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [],
  braces: [
    { from: [-3, 0.25], to: [0, 0.25], label: '3', side: 'top', height: 14, fontSize: 15 },
    { from: [0, 0.25], to: [3, 0.25], label: '3', side: 'top', height: 14, fontSize: 15 },
  ],
};

// 数轴：例4 分界点 -2 和 1，三个区间
export const boundaryPointsNumberLine: Diagram2DData = {
  name: 'boundary-points-line',
  coordinateSystem: {
    origin: [200, 40],
    scale: [40, -40],
  },
  axes: {
    xRange: [-4.5, 3.5],
    xTicks: [-4, -3, -2, -1, 0, 1, 2, 3],
    yRange: [0, 0],
    step: 1,
    showNumbers: true,
    showOriginLabel: false,
    tickFontWeight: 'bold',
    tickColor: '#1e293b',
    color: '#1e293b',
    xTickSide: 'up',
    showYAxis: false,
  },
  vertices: [
    [-2, 0],  // 0: 分界点 x=-2
    [1, 0],   // 1: 分界点 x=1
  ],
  edges: [],
  polygons: [],
  freeLabels: [],
  rays: [
    { x: -2, direction: 'left', color: '#2563eb' },
    { x: 1, direction: 'right', color: '#16a34a' },
  ],
  caps: [
    { from: -2, to: 1, color: '#dc2626', riseHeight: 24 },
  ],
};

// y = x²-4 原函数（虚线）+ y = |x²-4| 翻折后（实线）
export const absGraphTransform: Diagram2DData = {
  name: 'abs-graph-transform',
  coordinateSystem: {
    origin: [105, 105],
    scale: [18, -18],
  },
  axes: {
    xRange: [-3.5, 3.5],
    yRange: [-4.5, 5.5],
    step: 1,
    showNumbers: true,
    yTicks: [],
    showOriginLabel: true,
    color: '#64748b',
    tickColor: '#64748b',
    xTickSide: 'both',
  },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [
    { pos: [3.2, 4.5], tex: 'y=|x^2-4|', color: '#2563eb', fontSize: 12, offset: [5, 16] },
    { pos: [3.2, 3.0], tex: 'y=x^2-4', color: '#94a3b8', fontSize: 12, offset: [-18, 114] },
  ],
  functions: [
    { fn: (x: number) => x * x - 4, color: '#94a3b8', strokeWidth: 1.5, dashed: true },
    { fn: (x: number) => Math.abs(x * x - 4), color: '#2563eb', strokeWidth: 2 },
  ],
};
