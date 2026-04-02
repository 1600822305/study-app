import type { Diagram2DData } from '@/components/shared/Geo2dSvg';

/** c²=a²+b² 几何关系（直角三角形叠加在双曲线背景上） */
export const hyperbolaPythagorDiagram: Diagram2DData = {
  name: 'hyperbola-pythagor',
  vertices: [
    [5,   110], // 0 x轴左端
    [185, 110], // 1 x轴右端
    [95,    5], // 2 y轴上端
    [95,  160], // 3 y轴下端
    [95,  110], // 4 O（原点）
    [155, 110], // 5 A₂(a, 0)，a=60px
    [95,   55], // 6 B(0, b)，b=55px
    [14,  110], // 7 F₁(-c, 0)，c≈81px
    [176, 110], // 8 F₂(c, 0)
  ],
  edges: [
    { from: 0, to: 1, color: '#94a3b8', strokeWidth: 1.2 },
    { from: 2, to: 3, color: '#94a3b8', strokeWidth: 1.2 },
    { from: 4, to: 5, color: '#2563eb', strokeWidth: 2 },
    { from: 4, to: 6, color: '#2563eb', strokeWidth: 2 },
    { from: 5, to: 6, color: '#dc2626', strokeWidth: 2.5 },
  ],
  polygons: [],
  rightAngles: [{ vertex: 4, from: 5, to: 6 }],
  paths: [
    { d: 'M 185,28 L 41,160',  color: '#94a3b8', strokeWidth: 1, dashed: true },
    { d: 'M 5,28 L 150,160',   color: '#94a3b8', strokeWidth: 1, dashed: true },
    { d: 'M 182,70 C 172,82 155,97 155,110 C 155,123 172,138 182,150', color: '#2563eb', strokeWidth: 2 },
    { d: 'M 8,70 C 18,82 35,97 35,110 C 35,123 18,138 8,150',          color: '#2563eb', strokeWidth: 2 },
  ],
  freeLabels: [
    { pos: [185, 110], text: 'x',  offset: [8,   -3], fontSize: 14, color: '#64748b' },
    { pos: [95,    5], text: 'y',  offset: [5,  -10], fontSize: 14, color: '#64748b' },
    { pos: [95,  110], text: 'O',  offset: [-12, 10], fontSize: 13, color: '#334155' },
    { pos: [155, 110], text: 'A₂', offset: [-6,  13], fontSize: 13, color: '#2563eb', dot: '#2563eb' },
    { pos: [95,   55], text: 'B',  offset: [-16,  0], fontSize: 13, color: '#2563eb', dot: '#2563eb' },
    { pos: [125, 110], text: 'a',  offset: [0,   14], fontSize: 14, color: '#2563eb' },
    { pos: [95,   82], text: 'b',  offset: [-14,  0], fontSize: 14, color: '#2563eb' },
    { pos: [125,  82], text: 'c',  offset: [14,   0], fontSize: 14, color: '#dc2626' },
    { pos: [14,  110], text: 'F₁', offset: [-4,  12], fontSize: 13, color: '#7c3aed', dot: '#7c3aed' },
    { pos: [176, 110], text: 'F₂', offset: [6,   12], fontSize: 13, color: '#7c3aed', dot: '#7c3aed' },
  ],
};

/** 实轴与虚轴示意图（辅助矩形 + 渐近线） */
export const hyperbolaAxisDiagram: Diagram2DData = {
  name: 'hyperbola-axis',
  vertices: [
    [5,   85], // 0 x轴左端
    [185, 85], // 1 x轴右端
    [90,   5], // 2 y轴上端
    [90,  165], // 3 y轴下端
    [45,  85], // 4 A₁(-a, 0)
    [135, 85], // 5 A₂(a, 0)
    [90,  50], // 6 B₂(0, b)
    [90, 120], // 7 B₁(0, -b)
  ],
  edges: [
    { from: 0, to: 1, color: '#94a3b8', strokeWidth: 1.2 },
    { from: 2, to: 3, color: '#94a3b8', strokeWidth: 1.2 },
  ],
  polygons: [],
  paths: [
    { d: 'M 185,11 L 5,151',  color: '#94a3b8', strokeWidth: 1, dashed: true },
    { d: 'M 5,19 L 185,159',  color: '#94a3b8', strokeWidth: 1, dashed: true },
    { d: 'M 45,50 L 135,50 L 135,120 L 45,120 Z', color: '#94a3b8', strokeWidth: 1, dashed: true },
    { d: 'M 172,37 C 158,48 135,65 135,85 C 135,105 158,122 172,133', color: '#2563eb', strokeWidth: 2 },
    { d: 'M 8,37 C 22,48 45,65 45,85 C 45,105 22,122 8,133',          color: '#2563eb', strokeWidth: 2 },
  ],
  freeLabels: [
    { pos: [185,  85], text: 'x',  offset: [8,   -3], fontSize: 14, color: '#64748b' },
    { pos: [90,    5], text: 'y',  offset: [5,  -10], fontSize: 14, color: '#64748b' },
    { pos: [90,   85], text: 'O',  offset: [-12, 10], fontSize: 13, color: '#334155' },
    { pos: [45,   85], text: 'A₁', offset: [-12, 12], fontSize: 13, color: '#dc2626', dot: '#dc2626' },
    { pos: [135,  85], text: 'A₂', offset: [6,   12], fontSize: 13, color: '#dc2626', dot: '#dc2626' },
    { pos: [90,   50], text: 'B₂', offset: [7,  -10], fontSize: 13, color: '#059669', dot: '#059669' },
    { pos: [90,  120], text: 'B₁', offset: [7,   12], fontSize: 13, color: '#059669', dot: '#059669' },
  ],
};

/** 例题1配图：x²/16-y²/9=1，a=4,b=3,c=5，1unit=9px，O=[80,65]，canvas=160×130 */
export const hyperbolaEx1Diagram: Diagram2DData = {
  name: 'hyperbola-ex1',
  vertices: [
    [5,   65], // 0 x轴左端
    [155, 65], // 1 x轴右端
    [80,   5], // 2 y轴上端
    [80,  125], // 3 y轴下端
    [35,  65], // 4 F₁(-5,0)，c=45px
    [125, 65], // 5 F₂(5,0)
    [44,  65], // 6 A₁(-4,0)，a=36px
    [116, 65], // 7 A₂(4,0)
  ],
  edges: [
    { from: 0, to: 1, color: '#94a3b8', strokeWidth: 1.2 },
    { from: 2, to: 3, color: '#94a3b8', strokeWidth: 1.2 },
  ],
  polygons: [],
  paths: [
    { d: 'M 155,9 L 5,121',  color: '#94a3b8', strokeWidth: 1, dashed: true },
    { d: 'M 5,9 L 155,121',  color: '#94a3b8', strokeWidth: 1, dashed: true },
    { d: 'M 153,25 C 141,34 116,50 116,65 C 116,80 141,96 153,105', color: '#2563eb', strokeWidth: 2 },
    { d: 'M 7,25 C 19,34 44,50 44,65 C 44,80 19,96 7,105',          color: '#2563eb', strokeWidth: 2 },
  ],
  freeLabels: [
    { pos: [155,  65], text: 'x',  offset: [7,   -3], fontSize: 13, color: '#64748b' },
    { pos: [80,    5], text: 'y',  offset: [4,   -8], fontSize: 13, color: '#64748b' },
    { pos: [80,   65], text: 'O',  offset: [-12,  9], fontSize: 12, color: '#334155' },
    { pos: [35,   65], text: 'F₁', offset: [-11, -11], fontSize: 12, color: '#7c3aed', dot: '#7c3aed' },
    { pos: [125,  65], text: 'F₂', offset: [5,  -11], fontSize: 12, color: '#7c3aed', dot: '#7c3aed' },
    { pos: [44,   65], text: 'A₁', offset: [6,   11], fontSize: 12, color: '#dc2626', dot: '#dc2626' },
    { pos: [116,  65], text: 'A₂', offset: [-5,  11], fontSize: 12, color: '#dc2626', dot: '#dc2626' },
  ],
};

/** 例题2配图：过 F₂ 的弦 PQ，O=[90,85]，scale=17px/unit，x²/4-y²/3=1 */
export const hyperbolaEx2Diagram: Diagram2DData = {
  name: 'hyperbola-ex2',
  vertices: [
    [9,   85], // 0 x轴左端
    [171, 85], // 1 x轴右端
    [90,   9], // 2 y轴上端
    [90,  161], // 3 y轴下端
    [47,  85], // 4 F₁
    [133, 85], // 5 F₂
    [154, 38], // 6 P
    [127, 100], // 7 Q
  ],
  edges: [
    { from: 0, to: 1, color: '#94a3b8', strokeWidth: 1.2 },
    { from: 2, to: 3, color: '#94a3b8', strokeWidth: 1.2 },
    { from: 4, to: 6, color: '#15803d', strokeWidth: 1.2 },
    { from: 4, to: 7, color: '#15803d', strokeWidth: 1.2 },
    { from: 6, to: 7, color: '#15803d', strokeWidth: 1.5 },
  ],
  polygons: [],
  paths: [
    { d: 'M 178,9 L 11,153',   color: '#94a3b8', strokeWidth: 1, dashed: true },
    { d: 'M 11,17 L 178,162',  color: '#94a3b8', strokeWidth: 1, dashed: true },
    { d: 'M 178,14 C 171,25 122,61 122,85 C 122,109 171,145 178,156', color: '#2563eb', strokeWidth: 2 },
    { d: 'M 11,14 C 19,25 58,61 58,85 C 58,109 19,145 11,156',        color: '#2563eb', strokeWidth: 2 },
  ],
  freeLabels: [
    { pos: [171,  85], text: 'x',  offset: [8,   -3], fontSize: 14, color: '#64748b' },
    { pos: [90,    9], text: 'y',  offset: [5,  -10], fontSize: 14, color: '#64748b' },
    { pos: [90,   85], text: 'O',  offset: [-12, 10], fontSize: 13, color: '#334155' },
    { pos: [47,   85], text: 'F₁', offset: [-12, 11], fontSize: 13, color: '#7c3aed', dot: '#7c3aed' },
    { pos: [133,  85], text: 'F₂', offset: [7,   10], fontSize: 13, color: '#7c3aed', dot: '#7c3aed' },
    { pos: [154,  38], text: 'P',  offset: [8,   -4], fontSize: 13, color: '#15803d', dot: '#15803d' },
    { pos: [127, 100], text: 'Q',  offset: [13,   7], fontSize: 13, color: '#15803d', dot: '#15803d' },
  ],
};

/** 焦点在 x 轴上的双曲线 */
export const hyperbolaXDiagram: Diagram2DData = {
  name: 'hyperbola-x',
  vertices: [
    [5,  85],  // 0 x轴左端
    [175, 85], // 1 x轴右端
    [90,  5],  // 2 y轴上端
    [90, 165], // 3 y轴下端
    [39,  85], // 4 F₁
    [141, 85], // 5 F₂
    [50,  85], // 6 A₁
    [130, 85], // 7 A₂
    [152, 47], // 8 P
    [90,  53], // 9 B₂(0, b)
    [90, 117], // 10 B₁(0, -b)
    [28, 47],  // 11 Q（左支上方）
  ],
  edges: [
    { from: 0, to: 1, color: '#94a3b8', strokeWidth: 1.2 },
    { from: 2, to: 3, color: '#94a3b8', strokeWidth: 1.2 },
    { from: 8, to: 4, color: '#15803d', strokeWidth: 1.2 },
    { from: 8, to: 5, color: '#15803d', strokeWidth: 1.2 },
    { from: 11, to: 4, color: '#0891b2', strokeWidth: 1.2 },
    { from: 11, to: 5, color: '#0891b2', strokeWidth: 1.2 },
  ],
  polygons: [],
  paths: [
    { d: 'M 5,17 L 175,153',  color: '#94a3b8', strokeWidth: 1, dashed: true },
    { d: 'M 5,153 L 175,17',  color: '#94a3b8', strokeWidth: 1, dashed: true },
    { d: 'M 50,53 L 130,53 L 130,117 L 50,117 Z', color: '#94a3b8', strokeWidth: 1, dashed: true },
    { d: 'M 169,31 C 155,40 130,60 130,85 C 130,110 155,130 169,139', color: '#2563eb', strokeWidth: 2 },
    { d: 'M 11,31 C 25,40 50,60 50,85 C 50,110 25,130 11,139',        color: '#2563eb', strokeWidth: 2 },
  ],
  freeLabels: [
    { pos: [175, 85], text: 'x',  offset: [8,   -3], fontSize: 14, color: '#64748b' },
    { pos: [90,   5], text: 'y',  offset: [5,  -10], fontSize: 14, color: '#64748b' },
    { pos: [39,  85], text: 'F₁', offset: [-11, 11], fontSize: 13, color: '#7c3aed', dot: '#7c3aed' },
    { pos: [141, 85], text: 'F₂', offset: [7,   12], fontSize: 13, color: '#7c3aed', dot: '#7c3aed' },
    { pos: [50,  85], text: 'A₁', offset: [7,   12], fontSize: 13, color: '#dc2626', dot: '#dc2626' },
    { pos: [130, 85], text: 'A₂', offset: [-8,  12], fontSize: 13, color: '#dc2626', dot: '#dc2626' },
    { pos: [152, 47], text: 'P',  offset: [10,  -2], fontSize: 13, color: '#15803d', dot: '#15803d' },
    { pos: [90,  53], text: 'B₂', offset: [7,  -10], fontSize: 13, color: '#059669', dot: '#059669' },
    { pos: [90, 117], text: 'B₁', offset: [7,   12], fontSize: 13, color: '#059669', dot: '#059669' },
    { pos: [28,  47], text: 'Q',  offset: [-14, -2], fontSize: 13, color: '#0891b2', dot: '#0891b2' },
  ],
};

/** 焦点在 y 轴上的双曲线 */
export const hyperbolaYDiagram: Diagram2DData = {
  name: 'hyperbola-y',
  vertices: [
    [5,  85],  // 0 x轴左端
    [175, 85], // 1 x轴右端
    [90,  5],  // 2 y轴上端
    [90, 165], // 3 y轴下端
    [90,  34], // 4 F₂（上焦点）
    [90, 136], // 5 F₁（下焦点）
    [90,  45], // 6 A₂（上顶点）
    [90, 125], // 7 A₁（下顶点）
    [120, 30], // 8 P
  ],
  edges: [
    { from: 0, to: 1, color: '#94a3b8', strokeWidth: 1.2 },
    { from: 2, to: 3, color: '#94a3b8', strokeWidth: 1.2 },
    { from: 8, to: 4, color: '#15803d', strokeWidth: 1.2 },
    { from: 8, to: 5, color: '#15803d', strokeWidth: 1.2 },
  ],
  polygons: [],
  paths: [
    { d: 'M 26,5 L 154,165',  color: '#94a3b8', strokeWidth: 1, dashed: true },
    { d: 'M 154,5 L 26,165',  color: '#94a3b8', strokeWidth: 1, dashed: true },
    { d: 'M 36,6 C 45,20 65,45 90,45 C 115,45 135,20 144,6',         color: '#2563eb', strokeWidth: 2 },
    { d: 'M 36,164 C 45,150 65,125 90,125 C 115,125 135,150 144,164', color: '#2563eb', strokeWidth: 2 },
  ],
  freeLabels: [
    { pos: [175, 85], text: 'x',  offset: [8,   -3], fontSize: 14, color: '#64748b' },
    { pos: [90,   5], text: 'y',  offset: [5,  -10], fontSize: 14, color: '#64748b' },
    { pos: [90,  34], text: 'F₂', offset: [-13, -4], fontSize: 13, color: '#7c3aed', dot: '#7c3aed' },
    { pos: [90, 136], text: 'F₁', offset: [11,   7], fontSize: 13, color: '#7c3aed', dot: '#7c3aed' },
    { pos: [90,  45], text: 'A₂', offset: [-10, 11], fontSize: 13, color: '#dc2626', dot: '#dc2626' },
    { pos: [90, 125], text: 'A₁', offset: [15,  -7], fontSize: 13, color: '#dc2626', dot: '#dc2626' },
    { pos: [120, 30], text: 'P',  offset: [10,  -2], fontSize: 13, color: '#15803d', dot: '#15803d' },
  ],
};
