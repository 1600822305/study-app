import type { Diagram2DData } from '@/components/shared/geo2d';

export const linearGraph: Diagram2DData = {
  name: '一次函数 y=kx+b',
  coordinateSystem: { origin: [90, 90], scale: [18, -18] },
  axes: { xRange: [-4, 4], yRange: [-4, 4] },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [
    { pos: [2.5, 3.8], tex: 'y=x+1', offset: [1, 13], fontSize: 11, color: '#3b82f6' },
    { pos: [3.5, 1], tex: 'y=\\tfrac{1}{2}x-1', offset: [-8, -8], fontSize: 11, color: '#22c55e' },
    { pos: [-2.5, 3.8], tex: 'y=-x+2', offset: [-7, 23], fontSize: 11, color: '#ef4444' },
  ],
  functions: [
    { fn: (x) => x + 1, color: '#3b82f6', strokeWidth: 2.25 },
    { fn: (x) => 0.5 * x - 1, color: '#22c55e', strokeWidth: 2.25 },
    { fn: (x) => -x + 2, color: '#ef4444', strokeWidth: 2.25 },
  ],
};

export const quadraticGraph: Diagram2DData = {
  name: '二次函数 y=ax²',
  coordinateSystem: { origin: [90, 90], scale: [18, -18] },
  axes: { xRange: [-4, 4], yRange: [-4, 4] },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [
    { pos: [2.3, 3.8], tex: 'y=x^2', offset: [2, 12], fontSize: 11, color: '#3b82f6' },
    { pos: [1.1, 3.8], tex: 'y=2x^2', offset: [-8, 12], fontSize: 11, color: '#22c55e' },
    { pos: [2.3, -3.8], tex: 'y=-x^2', offset: [2, -8], fontSize: 11, color: '#ef4444' },
  ],
  functions: [
    { fn: (x) => x * x, color: '#3b82f6', strokeWidth: 2.25 },
    { fn: (x) => 2 * x * x, color: '#22c55e', strokeWidth: 2.25 },
    { fn: (x) => -(x * x), color: '#ef4444', strokeWidth: 2.25 },
  ],
};

export const inverseGraph: Diagram2DData = {
  name: '反比例函数 y=k/x',
  coordinateSystem: { origin: [90, 90], scale: [18, -18] },
  axes: { xRange: [-4, 4], yRange: [-4, 4] },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [
    { pos: [1.8, 3.8], text: 'k=6', offset: [2, 10], fontSize: 11, color: '#3b82f6' },
    { pos: [3, 1], text: 'k=2', offset: [2, -4], fontSize: 11, color: '#22c55e' },
    { pos: [2.5, -2], text: 'k=-4', offset: [3, -6], fontSize: 11, color: '#ef4444' },
  ],
  functions: [
    { fn: (x) => 6 / x, color: '#3b82f6', strokeWidth: 2.25 },
    { fn: (x) => 2 / x, color: '#22c55e', strokeWidth: 2.25 },
    { fn: (x) => -4 / x, color: '#ef4444', strokeWidth: 2.25 },
  ],
};

export const proportionalGraph: Diagram2DData = {
  name: '正比例函数 y=kx',
  coordinateSystem: { origin: [90, 90], scale: [18, -18] },
  axes: { xRange: [-4, 4], yRange: [-4, 4] },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [
    { pos: [1.2, 3.5], text: 'k=2', offset: [-5, 4], fontSize: 11, color: '#3b82f6' },
    { pos: [3, 2], text: 'k=0.5', offset: [-5, -2], fontSize: 11, color: '#22c55e' },
    { pos: [2.5, -1.8], text: 'k=-1', offset: [3, -6], fontSize: 11, color: '#ef4444' },
  ],
  functions: [
    { fn: (x) => 2 * x, color: '#3b82f6', strokeWidth: 2.25 },
    { fn: (x) => 0.5 * x, color: '#22c55e', strokeWidth: 2.25 },
    { fn: (x) => -x, color: '#ef4444', strokeWidth: 2.25 },
  ],
};
