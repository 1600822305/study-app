import type { Diagram2DData } from '@/components/shared/Geo2dSvg';

export const complexPlaneDiagram: Diagram2DData = {
  name: '复平面',
  coordinateSystem: {
    origin: [115, 120],
    scale: [35, -35],
  },
  axes: {
    xRange: [-3, 4],
    yRange: [-2, 3],
    step: 1,
    showNumbers: true,
    color: '#334155',
  },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [
    // 轴名称
    { pos: [3.5, 0], text: '实轴', offset: [18, 22], fontSize: 11, color: '#334155' },
    { pos: [0, 2.9], text: '虚轴', offset: [-20, 15], fontSize: 11, color: '#334155' },
    // z1 = 3+2i
    { pos: [3, 2], tex: 'z_1=3+2i', offset: [10, -17], fontSize: 12, color: '#2563eb', dot: '#3b82f6' },
    // z2 = -2-2i
    { pos: [-2, -2], tex: 'z_2=-2-2i', offset: [4, -13], fontSize: 12, color: '#dc2626', dot: '#ef4444' },
    // 2i（纯虚数）
    { pos: [0, 2], tex: '2i', offset: [-22, 1], fontSize: 12, color: '#9333ea', dot: '#a855f7' },
    // -1（实数）
    { pos: [-1, 0], tex: '-1', offset: [-3, -15], fontSize: 12, color: '#15803d', dot: '#16a34a' },
  ],
};
