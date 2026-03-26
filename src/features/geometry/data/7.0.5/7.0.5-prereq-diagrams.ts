import type { DiagramData } from '@/components/shared/Geo3dSvg';

// 7.0 立体几何前置知识页面用的图

export const planeAxesDiagram: DiagramData = (() => {
  // 平面直角坐标系: x, y axes (2D)
  const len = 50;
  return {
    vertices: [
      [-len * 0.3, 0, 0], [len, 0, 0],     // x axis: 0, 1
      [0, 0, -len * 0.3], [0, 0, len],     // y axis (using z for vertical): 2, 3
      [len - 6, 0, 3], [len - 6, 0, -3],   // x arrow: 4, 5
      [3, 0, len - 6], [-3, 0, len - 6],   // y arrow: 6, 7
    ],
    edges: [
      { from: 0, to: 1 }, { from: 2, to: 3 },
      { from: 1, to: 4 }, { from: 1, to: 5 },
      { from: 3, to: 6 }, { from: 3, to: 7 },
    ],
    polygons: [],
    freeLabels: [
      { pos: [len, 0, 0], text: 'x', offset: [4, 12] },
      { pos: [0, 0, len], text: 'y', offset: [-14, 0] },
      { pos: [0, 0, 0], text: 'O', offset: [-12, 12] },
    ],
  };
})();

export const obliqueAxesDiagram: DiagramData = (() => {
  // 斜二测画法坐标系: x, y, z axes
  const len = 50;
  return {
    vertices: [
      [0, 0, 0],       // origin: 0
      [len, 0, 0],     // x end: 1
      [0, len, 0],     // y end: 2
      [0, 0, len],     // z end: 3
      [len - 6, 0, 3], [len - 6, 0, -3],   // x arrow: 4, 5
      [0, len - 6, 3], [0, len - 6, -3],   // y arrow: 6, 7
      [3, 0, len - 6], [-3, 0, len - 6],   // z arrow: 8, 9
      [len / 2, 0, 5], [len / 2, 0, -5],   // tick x: 10, 11
      [0, len / 2, 5], [0, len / 2, -5],   // tick y: 12, 13
    ],
    edges: [
      { from: 0, to: 1 }, { from: 0, to: 2 }, { from: 0, to: 3 },
      { from: 1, to: 4 }, { from: 1, to: 5 },
      { from: 3, to: 8 }, { from: 3, to: 9 },
    ],
    polygons: [],
    freeLabels: [
      { pos: [len, 0, 0], text: 'x', offset: [4, 10] },
      { pos: [0, len, 0], text: 'y', offset: [10, 2] },
      { pos: [0, 0, len], text: 'z', offset: [-12, 0] },
      { pos: [0, 0, 0], text: 'O', offset: [-16, 4] },
      { pos: [0, len * 0.4, 0], text: '45°', offset: [18, -2], fontSize: 12 },
    ],
  };
})();
