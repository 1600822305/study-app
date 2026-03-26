import type { DiagramData, Point3D } from '@/components/shared/Geo3dSvg';

// 7.2 空间向量页面用的图

// ─── 带高亮边/面的长方体 helper ─────────────────────────────
function makeCuboid(edgeHighlights: [number, number, string][], faceHighlights?: { verts: number[]; color: string; opacity?: number }[]): DiagramData {
  const r = 40, h = 70;
  const vertices: Point3D[] = [
    [0, -r, 0], [r, 0, 0], [0, r, 0], [-r, 0, 0],       // A' B' C' D'
    [0, -r, h], [r, 0, h], [0, r, h], [-r, 0, h],        // A  B  C  D
  ];
  const raw: [number, number, boolean][] = [
    [0, 1, false], [1, 2, true], [2, 3, true], [3, 0, false],
    [4, 5, false], [5, 6, false], [6, 7, false], [7, 4, false],
    [0, 4, false], [1, 5, false], [2, 6, true], [3, 7, false],
  ];
  const edges = raw.map(([f, t, hid]) => {
    const hl = edgeHighlights.find(([a, b]) => (a === f && b === t) || (a === t && b === f));
    return { from: f, to: t, hidden: hid, ...(hl ? { color: hl[2], strokeWidth: 3 } : {}) };
  });
  const polygons = (faceHighlights ?? []).map(f => ({
    points: f.verts,
    fill: f.color,
    opacity: f.opacity ?? 0.25,
  }));
  return {
    vertices, edges, polygons,
    freeLabels: [
      { pos: vertices[4], text: 'A', offset: [0, -10] },
      { pos: vertices[5], text: 'B', offset: [10, -6] },
      { pos: vertices[6], text: 'C', offset: [6, 6] },
      { pos: vertices[7], text: 'D', offset: [-12, -6] },
      { pos: vertices[0], text: 'A₁', offset: [0, 12] },
      { pos: vertices[1], text: 'B₁', offset: [12, 4] },
      { pos: vertices[2], text: 'C₁', offset: [6, 10] },
      { pos: vertices[3], text: 'D₁', offset: [-14, 4] },
    ],
  };
}

// ─── 右手系 + 建系 ───────────────────────────────────────────

// 右手系坐标轴示意图
export const rightHandSystemDiagram: DiagramData = {
  vertices: [
    [0, 0, 0],    // 0: 原点
    [55, 0, 0],   // 1: x轴端点
    [0, 55, 0],   // 2: y轴端点
    [0, 0, 55],   // 3: z轴端点
  ],
  edges: [
    { from: 0, to: 1, color: '#ef4444', strokeWidth: 2.5 },
    { from: 0, to: 2, color: '#16a34a', strokeWidth: 2.5 },
    { from: 0, to: 3, color: '#2563eb', strokeWidth: 2.5 },
  ],
  polygons: [],
  freeLabels: [
    { pos: [55, 0, 0], text: 'x', offset: [7, 1], color: '#ef4444' },
    { pos: [0, 55, 0], text: 'y', offset: [-8, 6], color: '#16a34a' },
    { pos: [0, 0, 55], text: 'z', offset: [-1, -10], color: '#2563eb' },
    { pos: [0, 0, 0], text: 'O', offset: [2, 12] },
  ],
};
// 建系示例: A₁为原点, A₁B₁→x轴(红), A₁D₁→y轴(绿), A₁A→z轴(蓝)
export const cuboidCoordSystemDiagram: DiagramData = (() => {
  const base = makeCuboid(
    [[0, 1, '#ef4444'], [0, 3, '#16a34a'], [0, 4, '#2563eb']],
    [],
  );
  // 延长轴: 在 B、D、A₁ 之外各加一个点
  const xExt: Point3D = [68, 28, 0];    // 8: x轴延长
  const yExt: Point3D = [-68, 28, 0];   // 9: y轴延长
  const zExt: Point3D = [0, -40, 100];  // 10: z轴延长
  return {
    ...base,
    vertices: [...base.vertices, xExt, yExt, zExt],
    edges: [
      ...base.edges,
      { from: 1, to: 8, color: '#ef4444', strokeWidth: 1.5, arrow: true },
      { from: 3, to: 9, color: '#16a34a', strokeWidth: 1.5, arrow: true },
      { from: 4, to: 10, color: '#2563eb', strokeWidth: 1.5, arrow: true },
    ],
    freeLabels: [
      { pos: [0, -40, 70], text: 'A₁', offset: [12, -7] },
      { pos: [40, 0, 70], text: 'B₁', offset: [10, -6] },
      { pos: [0, 40, 70], text: 'C₁', offset: [4, -10] },
      { pos: [-40, 0, 70], text: 'D₁', offset: [-12, -6] },
      { pos: [0, -40, 0], text: 'A', offset: [-11, -11] },
      { pos: [40, 0, 0], text: 'B', offset: [12, -5] },
      { pos: [0, 40, 0], text: 'C', offset: [-5, 13] },
      { pos: [-40, 0, 0], text: 'D', offset: [-12, -5] },
      { pos: xExt, text: 'x', offset: [8, 6], color: '#ef4444' },
      { pos: yExt, text: 'y', offset: [-14, 6], color: '#16a34a' },
      { pos: zExt, text: 'z', offset: [0, -11], color: '#2563eb' },
      // 边长标签
      { pos: [20, -20, 0] as Point3D, text: 'a', offset: [2, -10], color: '#ef4444' },
      { pos: [-20, -20, 0] as Point3D, text: 'b', offset: [-10, -8], color: '#16a34a' },
      { pos: [0, -40, 35] as Point3D, text: 'c', offset: [8, -4], color: '#2563eb' },
    ] as DiagramData['freeLabels'],
  };
})();

// ─── 法向量 ──────────────────────────────────────────────────

// 法向量示意图: 平面α + 法向量n垂直于平面
export const normalVectorDiagram: DiagramData = {
  vertices: [
    [-50, -35, 0],   // 0: 平面左后
    [50, -35, 0],    // 1: 平面右后
    [60, 35, 0],     // 2: 平面右前
    [-40, 35, 0],    // 3: 平面左前
    [5, 0, 0],       // 4: 平面中心点
    [5, 0, 55],      // 5: 法向量n端点（向上）
    [5, 0, -40],     // 6: 法向量n'端点（向下，反方向）
  ],
  edges: [
    // 平面边框
    { from: 0, to: 1, color: '#94a3b8', strokeWidth: 1.5 },
    { from: 1, to: 2, color: '#94a3b8', strokeWidth: 1.5 },
    { from: 2, to: 3, color: '#94a3b8', strokeWidth: 1.5 },
    { from: 3, to: 0, color: '#94a3b8', strokeWidth: 1.5 },
    // 法向量n（红色，向上）
    { from: 4, to: 5, color: '#ef4444', strokeWidth: 2.5, arrow: true },
    // 法向量n'（红色虚线，向下反方向）
    { from: 4, to: 6, color: '#ef4444', strokeWidth: 2, arrow: true, hidden: true },
  ],
  polygons: [
    { points: [0, 1, 2, 3], fill: '#bfdbfe', opacity: 0.25 },
  ],
  freeLabels: [
    { pos: [5, 0, 55], text: '', tex: '\\vec{n}', offset: [8, -6], color: '#ef4444', fontSize: 16 },
    { pos: [50, 35, 0], text: 'α', offset: [6, 8], fontSize: 16 },
  ],
};

// 示例：直角三棱锥（墙角型）求平面ABC法向量
// O为直角顶点，OA⊥OB⊥OC，以O为原点建系
export const normalVectorExampleDiagram: DiagramData = (() => {
  const len = 72;
  const ext = 115;  // 坐标轴延伸长度端（超出顶点）
  // 轴延伸端（超出顶点）
  const xExt: Point3D = [ext, 0, 0];
  const yExt: Point3D = [0, ext, 0];
  const zExt: Point3D = [0, 0, ext];
  const vertices: Point3D[] = [
    [0, 0, 0],     // 0: O
    [len, 0, 0],   // 1: A
    [0, len, 0],   // 2: B
    [0, 0, len],   // 3: C
    ...([xExt, yExt, zExt]),  // 4,5,6: 轴延伸端
  ];
  return {
    name: '直角三棱锥，求斜面法向量',
    vertices,
    edges: [
      // 三条棱（着色，和长方体建系图一样）
      { from: 0, to: 1, color: '#ef4444', strokeWidth: 2 },   // OA (x轴, 红)
      { from: 0, to: 2, color: '#16a34a', strokeWidth: 2 },   // OB (y轴, 绿)
      { from: 0, to: 3, color: '#2563eb', strokeWidth: 2 },   // OC (z轴, 蓝)
      // 轴延伸段（带箭头）
      { from: 1, to: 4, color: '#ef4444', strokeWidth: 1.5, arrow: true },
      { from: 2, to: 5, color: '#16a34a', strokeWidth: 1.5, arrow: true },
      { from: 3, to: 6, color: '#2563eb', strokeWidth: 1.5, arrow: true },
      // 斜面 ABC 的三条边（加深颜色）
      { from: 1, to: 2, color: '#334155', strokeWidth: 2 },  // AB
      { from: 2, to: 3, color: '#334155', strokeWidth: 2 },  // BC
      { from: 1, to: 3, color: '#334155', strokeWidth: 2 },  // AC
    ],
    polygons: [
      { points: [1, 2, 3], fill: '#93c5fd', opacity: 0.2 },
    ],
    freeLabels: [
      { pos: [0, 0, 0], text: 'O', offset: [8, -9] },
      { pos: [72, 0, 0], text: 'A', offset: [9, 4] },
      { pos: [0, 72, 0], text: 'B', offset: [7, 12] },
      { pos: [0, 0, 72], text: 'C', offset: [-13, -1] },
      { pos: [36, 0, 0], text: '1', offset: [-2, -9], fontSize: 18, color: '#334155' },
      { pos: [0, 36, 0], text: '1', offset: [-1, -9], fontSize: 18, color: '#334155' },
      { pos: [0, 0, 36], text: '1', offset: [6, 0], fontSize: 18, color: '#334155' },
      { pos: [115, 0, 0], text: 'x', offset: [8, 6], color: '#ef4444' },
      { pos: [0, 115, 0], text: 'y', offset: [-9, 9], color: '#16a34a' },
      { pos: [0, 0, 115], text: 'z', offset: [0, -11], color: '#2563eb' },
    ],
  };
})();

// 求法向量套路示意图: 平面α + 法向量n + 平面内两个向量a,b
export const normalVectorMethodDiagram: DiagramData = {
  vertices: [
    [-50, -35, 0],   // 0: 平面左后
    [50, -35, 0],    // 1: 平面右后
    [55, 35, 0],     // 2: 平面右前
    [-45, 35, 0],    // 3: 平面左前
    [0, 0, 0],       // 4: 中心点
    [0, 0, 55],      // 5: 法向量n端点（垂直向上）
    [40, -10, 0],    // 6: 向量u端点（平面内偏右）
    [-15, 30, 0],    // 7: 向量v端点（平面内偏左前）
  ],
  edges: [
    // 平面边框
    { from: 0, to: 1, color: '#94a3b8', strokeWidth: 1.5 },
    { from: 1, to: 2, color: '#94a3b8', strokeWidth: 1.5 },
    { from: 2, to: 3, color: '#94a3b8', strokeWidth: 1.5 },
    { from: 3, to: 0, color: '#94a3b8', strokeWidth: 1.5 },
    // 法向量n（红色）
    { from: 4, to: 5, color: '#ef4444', strokeWidth: 2.5, arrow: true },
    // 平面内向量a（蓝色）
    { from: 4, to: 6, color: '#2563eb', strokeWidth: 2, arrow: true },
    // 平面内向量b（绿色）
    { from: 4, to: 7, color: '#16a34a', strokeWidth: 2, arrow: true },
  ],
  polygons: [
    { points: [0, 1, 2, 3], fill: '#bfdbfe', opacity: 0.2 },
  ],
  freeLabels: [
    { pos: [0, 0, 55], text: '', tex: '\\color{red}\\vec{n}', offset: [10, -6], color: '#ef4444', fontSize: 16 },
    { pos: [40, -10, 0], text: '', tex: '\\color{blue}\\vec{a}', offset: [10, 0], color: '#2563eb', fontSize: 14 },
    { pos: [-15, 30, 0], text: '', tex: '\\color{green}\\vec{b}', offset: [-16, 4], color: '#16a34a', fontSize: 14 },
    { pos: [45, 35, 0], text: 'α', offset: [6, 8], fontSize: 16 },
  ],
};

// ─── 证平行例题 ──────────────────────────────────────────────

// 证平行例题：正方体原图（无坐标轴，只有E、F中点）
export const parallelCubeOriginal: DiagramData = (() => {
  const len = 60;
  return {
    vertices: [
      [0, 0, 0], [len, 0, 0], [len, len, 0], [0, len, 0],       // 底面 A B C D
      [0, 0, len], [len, 0, len], [len, len, len], [0, len, len], // 顶面
      [len/2, 0, 0], [len/2, len, 0],  // E F
    ],
    edges: [
      { from: 0, to: 1, color: '#334155', strokeWidth: 2 },
      { from: 1, to: 2, color: '#334155', strokeWidth: 2 },
      { from: 2, to: 3, color: '#334155', strokeWidth: 2 },
      { from: 3, to: 0, color: '#334155', strokeWidth: 2 },
      { from: 4, to: 5, color: '#334155', strokeWidth: 2 },
      { from: 5, to: 6, color: '#334155', strokeWidth: 2 },
      { from: 6, to: 7, color: '#334155', strokeWidth: 2 },
      { from: 7, to: 4, color: '#334155', strokeWidth: 2 },
      { from: 0, to: 4, color: '#334155', strokeWidth: 2 },
      { from: 1, to: 5, color: '#334155', strokeWidth: 2 },
      { from: 2, to: 6, color: '#334155', strokeWidth: 2 },
      { from: 3, to: 7, color: '#334155', strokeWidth: 2 },
      { from: 8, to: 9, color: '#9333ea', strokeWidth: 2.5 },  // EF
    ],
    polygons: [],
    freeLabels: [
      { pos: [0, 0, 0], text: 'A', offset: [-14, 8] },
      { pos: [len, 0, 0], text: 'B', offset: [6, 8] },
      { pos: [len, len, 0], text: 'C', offset: [8, 4] },
      { pos: [0, len, 0], text: 'D', offset: [-14, 4] },
      { pos: [0, 0, len], text: 'A₁', offset: [-18, 0] },
      { pos: [len, 0, len], text: 'B₁', offset: [6, 0] },
      { pos: [len, len, len], text: 'C₁', offset: [8, 0] },
      { pos: [0, len, len], text: 'D₁', offset: [-18, 0] },
      { pos: [len/2, 0, 0], text: 'E', offset: [0, 14], color: '#9333ea' },
      { pos: [len/2, len, 0], text: 'F', offset: [0, 14], color: '#9333ea' },
    ],
  };
})();

// 证平行例题：建系后的图（带坐标轴）
export const parallelCubeDiagram: DiagramData = (() => {
  const len = 60;
  // 延伸点坐标 (参考 cuboidCoordSystemDiagram 的写法)
  const xExt: Point3D = [len + 45, 0, 0];
  const yExt: Point3D = [0, len + 45, 0];
  const zExt: Point3D = [0, 0, len + 45];
  return {
    vertices: [
      [0, 0, 0], [len, 0, 0], [len, len, 0], [0, len, 0],           // 0-3: A B C D
      [0, 0, len], [len, 0, len], [len, len, len], [0, len, len],   // 4-7: A₁ B₁ C₁ D₁
      [len/2, 0, 0], [len/2, len, 0],                               // 8-9: E F
      xExt, yExt, zExt,                                              // 10-12: 轴延伸
    ],
    edges: [
      { from: 0, to: 1, color: '#ef4444', strokeWidth: 2 },
      { from: 1, to: 2, color: '#334155', strokeWidth: 2 },
      { from: 2, to: 3, color: '#334155', strokeWidth: 2 },
      { from: 3, to: 0, color: '#16a34a', strokeWidth: 2 },
      { from: 4, to: 5, color: '#334155', strokeWidth: 2 },
      { from: 5, to: 6, color: '#334155', strokeWidth: 2 },
      { from: 6, to: 7, color: '#334155', strokeWidth: 2 },
      { from: 7, to: 4, color: '#334155', strokeWidth: 2 },
      { from: 0, to: 4, color: '#2563eb', strokeWidth: 2 },
      { from: 1, to: 5, color: '#334155', strokeWidth: 2 },
      { from: 2, to: 6, color: '#334155', strokeWidth: 2 },
      { from: 3, to: 7, color: '#334155', strokeWidth: 2 },
      { from: 8, to: 9, color: '#9333ea', strokeWidth: 2.5 },
      // 轴延伸（带箭头）
      { from: 1, to: 10, color: '#ef4444', strokeWidth: 1.5, arrow: true },
      { from: 3, to: 11, color: '#16a34a', strokeWidth: 1.5, arrow: true },
      { from: 4, to: 12, color: '#2563eb', strokeWidth: 1.5, arrow: true },
    ],
    polygons: [],
    freeLabels: [
      { pos: [0, 0, 0], text: 'A', offset: [-11, -5] },
      { pos: [len, 0, 0], text: 'B', offset: [6, 8] },
      { pos: [len, len, 0], text: 'C', offset: [1, 10] },
      { pos: [0, len, 0], text: 'D', offset: [-13, 0] },
      { pos: [0, 0, len], text: 'A₁', offset: [-10, -8] },
      { pos: [len, 0, len], text: 'B₁', offset: [10, -8] },
      { pos: [len, len, len], text: 'C₁', offset: [-6, -10] },
      { pos: [0, len, len], text: 'D₁', offset: [-14, -2] },
      { pos: [len/2, 0, 0], text: 'E', offset: [-4, -9], color: '#9333ea' },
      { pos: [len/2, len, 0], text: 'F', offset: [0, 14], color: '#9333ea' },
      { pos: xExt, text: 'x', offset: [8, 4], color: '#ef4444' },
      { pos: yExt, text: 'y', offset: [-10, 9], color: '#16a34a' },
      { pos: zExt, text: 'z', offset: [-12, 0], color: '#2563eb' },
    ],
  };
})();

// 证平行例题(2)：EF ∥ 面 ADD₁A₁ 示意图
export const parallelLinePlaneDiagram: DiagramData = (() => {
  const len = 60;
  return {
    vertices: [
      [0, 0, 0], [len, 0, 0], [len, len, 0], [0, len, 0],           // 0-3: A B C D
      [0, 0, len], [len, 0, len], [len, len, len], [0, len, len],   // 4-7: A₁ B₁ C₁ D₁
      [len/2, 0, 0], [len/2, len, 0],                               // 8-9: E F
    ],
    edges: [
      { from: 0, to: 1, color: '#334155', strokeWidth: 1.5 },
      { from: 1, to: 2, color: '#334155', strokeWidth: 1.5 },
      { from: 2, to: 3, color: '#334155', strokeWidth: 1.5 },
      { from: 3, to: 0, color: '#16a34a', strokeWidth: 2.5 },  // AD 高亮
      { from: 4, to: 5, color: '#334155', strokeWidth: 1.5 },
      { from: 5, to: 6, color: '#334155', strokeWidth: 1.5 },
      { from: 6, to: 7, color: '#334155', strokeWidth: 1.5 },
      { from: 7, to: 4, color: '#16a34a', strokeWidth: 2.5 },  // A₁D₁ 高亮
      { from: 0, to: 4, color: '#16a34a', strokeWidth: 2.5 },  // AA₁ 高亮
      { from: 1, to: 5, color: '#334155', strokeWidth: 1.5 },
      { from: 2, to: 6, color: '#334155', strokeWidth: 1.5 },
      { from: 3, to: 7, color: '#16a34a', strokeWidth: 2.5 },  // DD₁ 高亮
      { from: 8, to: 9, color: '#9333ea', strokeWidth: 2.5 },  // EF 紫色
    ],
    polygons: [
      { points: [0, 3, 7, 4], fill: '#16a34a', opacity: 0.2 },  // 面 ADD₁A₁ 绿色填充
    ],
    freeLabels: [
      { pos: [0, 0, 0], text: 'A', offset: [-11, -5] },
      { pos: [len, 0, 0], text: 'B', offset: [6, 8] },
      { pos: [len, len, 0], text: 'C', offset: [1, 10] },
      { pos: [0, len, 0], text: 'D', offset: [-13, 0] },
      { pos: [0, 0, len], text: 'A₁', offset: [-10, -8] },
      { pos: [len, 0, len], text: 'B₁', offset: [10, -8] },
      { pos: [len, len, len], text: 'C₁', offset: [-6, -10] },
      { pos: [0, len, len], text: 'D₁', offset: [-14, -2] },
      { pos: [len/2, 0, 0], text: 'E', offset: [-4, -9], color: '#9333ea' },
      { pos: [len/2, len, 0], text: 'F', offset: [0, 14], color: '#9333ea' },
    ],
  };
})();

// 证平行例题(3)：面 A₁B₁C₁D₁ ∥ 面 ABCD 示意图
export const parallelPlanesDiagram: DiagramData = (() => {
  const len = 60;
  return {
    vertices: [
      [0, 0, 0], [len, 0, 0], [len, len, 0], [0, len, 0],           // 0-3: A B C D
      [0, 0, len], [len, 0, len], [len, len, len], [0, len, len],   // 4-7: A₁ B₁ C₁ D₁
    ],
    edges: [
      { from: 0, to: 1, color: '#2563eb', strokeWidth: 2.5 },  // 底面蓝色
      { from: 1, to: 2, color: '#2563eb', strokeWidth: 2.5 },
      { from: 2, to: 3, color: '#2563eb', strokeWidth: 2.5 },
      { from: 3, to: 0, color: '#2563eb', strokeWidth: 2.5 },
      { from: 4, to: 5, color: '#9333ea', strokeWidth: 2.5 },  // 顶面紫色
      { from: 5, to: 6, color: '#9333ea', strokeWidth: 2.5 },
      { from: 6, to: 7, color: '#9333ea', strokeWidth: 2.5 },
      { from: 7, to: 4, color: '#9333ea', strokeWidth: 2.5 },
      { from: 0, to: 4, color: '#334155', strokeWidth: 1.5 },
      { from: 1, to: 5, color: '#334155', strokeWidth: 1.5 },
      { from: 2, to: 6, color: '#334155', strokeWidth: 1.5 },
      { from: 3, to: 7, color: '#334155', strokeWidth: 1.5 },
    ],
    polygons: [
      { points: [0, 1, 2, 3], fill: '#2563eb', opacity: 0.15 },  // 底面蓝色填充
      { points: [4, 5, 6, 7], fill: '#9333ea', opacity: 0.15 },  // 顶面紫色填充
    ],
    freeLabels: [
      { pos: [0, 0, 0], text: 'A', offset: [-11, -5] },
      { pos: [len, 0, 0], text: 'B', offset: [6, 8] },
      { pos: [len, len, 0], text: 'C', offset: [1, 10] },
      { pos: [0, len, 0], text: 'D', offset: [-13, 0] },
      { pos: [0, 0, len], text: 'A₁', offset: [-10, -8] },
      { pos: [len, 0, len], text: 'B₁', offset: [10, -8] },
      { pos: [len, len, len], text: 'C₁', offset: [-6, -10] },
      { pos: [0, len, len], text: 'D₁', offset: [-14, -2] },
    ],
  };
})();

// ─── 纯净正方体 + 证垂直例题 ────────────────────────────────

// 纯净正方体（无高亮、无中点）
export const pureCubeDiagram: DiagramData = (() => {
  const len = 60;
  return {
    vertices: [
      [0, 0, 0], [len, 0, 0], [len, len, 0], [0, len, 0],           // 0-3: A B C D
      [0, 0, len], [len, 0, len], [len, len, len], [0, len, len],   // 4-7: A₁ B₁ C₁ D₁
    ],
    edges: [
      { from: 0, to: 1, color: '#334155', strokeWidth: 1.5 },
      { from: 1, to: 2, color: '#334155', strokeWidth: 1.5 },
      { from: 2, to: 3, color: '#334155', strokeWidth: 1.5 },
      { from: 3, to: 0, color: '#334155', strokeWidth: 1.5 },
      { from: 4, to: 5, color: '#334155', strokeWidth: 1.5 },
      { from: 5, to: 6, color: '#334155', strokeWidth: 1.5 },
      { from: 6, to: 7, color: '#334155', strokeWidth: 1.5 },
      { from: 7, to: 4, color: '#334155', strokeWidth: 1.5 },
      { from: 0, to: 4, color: '#334155', strokeWidth: 1.5 },
      { from: 1, to: 5, color: '#334155', strokeWidth: 1.5 },
      { from: 2, to: 6, color: '#334155', strokeWidth: 1.5 },
      { from: 3, to: 7, color: '#334155', strokeWidth: 1.5 },
    ],
    polygons: [],
    freeLabels: [
      { pos: [0, 0, 0], text: 'A', offset: [-11, -5] },
      { pos: [len, 0, 0], text: 'B', offset: [6, 8] },
      { pos: [len, len, 0], text: 'C', offset: [1, 10] },
      { pos: [0, len, 0], text: 'D', offset: [-13, 0] },
      { pos: [0, 0, len], text: 'A₁', offset: [-10, -8] },
      { pos: [len, 0, len], text: 'B₁', offset: [10, -8] },
      { pos: [len, len, len], text: 'C₁', offset: [-6, -10] },
      { pos: [0, len, len], text: 'D₁', offset: [-14, -2] },
    ],
  };
})();

// 证垂直例题：正方体 + AC⊥BD 高亮 + 坐标轴
export const perpCubeDiagram: DiagramData = (() => {
  const len = 60;
  const xExt: Point3D = [len + 45, 0, 0];
  const yExt: Point3D = [0, len + 45, 0];
  const zExt: Point3D = [0, 0, len + 45];
  return {
    vertices: [
      [0, 0, 0], [len, 0, 0], [len, len, 0], [0, len, 0],           // 0-3: A B C D
      [0, 0, len], [len, 0, len], [len, len, len], [0, len, len],   // 4-7: A₁ B₁ C₁ D₁
      xExt, yExt, zExt,                                              // 8-10: 轴延伸
    ],
    edges: [
      { from: 0, to: 1, color: '#ef4444', strokeWidth: 2 },  // AB x轴
      { from: 1, to: 2, color: '#334155', strokeWidth: 1.5 },
      { from: 2, to: 3, color: '#334155', strokeWidth: 1.5 },
      { from: 3, to: 0, color: '#16a34a', strokeWidth: 2 },  // AD y轴
      { from: 4, to: 5, color: '#334155', strokeWidth: 1.5 },
      { from: 5, to: 6, color: '#334155', strokeWidth: 1.5 },
      { from: 6, to: 7, color: '#334155', strokeWidth: 1.5 },
      { from: 7, to: 4, color: '#334155', strokeWidth: 1.5 },
      { from: 0, to: 4, color: '#2563eb', strokeWidth: 2 },  // AA₁ z轴
      { from: 1, to: 5, color: '#334155', strokeWidth: 1.5 },
      { from: 2, to: 6, color: '#334155', strokeWidth: 1.5 },
      { from: 3, to: 7, color: '#334155', strokeWidth: 1.5 },
      { from: 0, to: 2, color: '#2563eb', strokeWidth: 2.5 },  // AC 蓝色
      { from: 1, to: 3, color: '#dc2626', strokeWidth: 2.5 },  // BD 红色
      // 轴延伸（带箭头）
      { from: 1, to: 8, color: '#ef4444', strokeWidth: 1.5, arrow: true },
      { from: 3, to: 9, color: '#16a34a', strokeWidth: 1.5, arrow: true },
      { from: 4, to: 10, color: '#2563eb', strokeWidth: 1.5, arrow: true },
    ],
    polygons: [],
    freeLabels: [
      { pos: [0, 0, 0], text: 'A', offset: [-11, -5] },
      { pos: [len, 0, 0], text: 'B', offset: [6, 8] },
      { pos: [len, len, 0], text: 'C', offset: [1, 10] },
      { pos: [0, len, 0], text: 'D', offset: [-13, 0] },
      { pos: [0, 0, len], text: 'A₁', offset: [-10, -8] },
      { pos: [len, 0, len], text: 'B₁', offset: [10, -8] },
      { pos: [len, len, len], text: 'C₁', offset: [-6, -10] },
      { pos: [0, len, len], text: 'D₁', offset: [-14, -2] },
      { pos: xExt, text: 'x', offset: [8, 4], color: '#ef4444' },
      { pos: yExt, text: 'y', offset: [-10, 9], color: '#16a34a' },
      { pos: zExt, text: 'z', offset: [-12, 0], color: '#2563eb' },
    ],
  };
})();

// 证垂直例题(2)：AA₁ ⊥ 面 ABCD（高亮AA₁和底面）
export const perpLinePlaneDiagram: DiagramData = (() => {
  const len = 60;
  return {
    vertices: [
      [0, 0, 0], [len, 0, 0], [len, len, 0], [0, len, 0],           // 0-3: A B C D
      [0, 0, len], [len, 0, len], [len, len, len], [0, len, len],   // 4-7: A₁ B₁ C₁ D₁
    ],
    edges: [
      { from: 0, to: 1, color: '#334155', strokeWidth: 1.5 },
      { from: 1, to: 2, color: '#334155', strokeWidth: 1.5 },
      { from: 2, to: 3, color: '#334155', strokeWidth: 1.5 },
      { from: 3, to: 0, color: '#334155', strokeWidth: 1.5 },
      { from: 4, to: 5, color: '#334155', strokeWidth: 1.5 },
      { from: 5, to: 6, color: '#334155', strokeWidth: 1.5 },
      { from: 6, to: 7, color: '#334155', strokeWidth: 1.5 },
      { from: 7, to: 4, color: '#334155', strokeWidth: 1.5 },
      { from: 0, to: 4, color: '#dc2626', strokeWidth: 3 },  // AA₁ 红色高亮
      { from: 1, to: 5, color: '#334155', strokeWidth: 1.5 },
      { from: 2, to: 6, color: '#334155', strokeWidth: 1.5 },
      { from: 3, to: 7, color: '#334155', strokeWidth: 1.5 },
    ],
    polygons: [
      { points: [0, 1, 2, 3], fill: '#3b82f6', opacity: 0.25 },  // 底面ABCD蓝色
    ],
    freeLabels: [
      { pos: [0, 0, 0], text: 'A', offset: [-11, -5] },
      { pos: [len, 0, 0], text: 'B', offset: [6, 8] },
      { pos: [len, len, 0], text: 'C', offset: [1, 10] },
      { pos: [0, len, 0], text: 'D', offset: [-13, 0] },
      { pos: [0, 0, len], text: 'A₁', offset: [-10, -8] },
      { pos: [len, 0, len], text: 'B₁', offset: [10, -8] },
      { pos: [len, len, len], text: 'C₁', offset: [-6, -10] },
      { pos: [0, len, len], text: 'D₁', offset: [-14, -2] },
    ],
  };
})();

// 证垂直例题(3)：面 ACC₁A₁ ⊥ 面 BDD₁B₁
export const perpPlanesDiagram: DiagramData = (() => {
  const len = 60;
  return {
    vertices: [
      [0, 0, 0], [len, 0, 0], [len, len, 0], [0, len, 0],           // 0-3: A B C D
      [0, 0, len], [len, 0, len], [len, len, len], [0, len, len],   // 4-7: A₁ B₁ C₁ D₁
    ],
    edges: [
      { from: 0, to: 1, color: '#334155', strokeWidth: 1.5 },
      { from: 1, to: 2, color: '#334155', strokeWidth: 1.5 },
      { from: 2, to: 3, color: '#334155', strokeWidth: 1.5 },
      { from: 3, to: 0, color: '#334155', strokeWidth: 1.5 },
      { from: 4, to: 5, color: '#334155', strokeWidth: 1.5 },
      { from: 5, to: 6, color: '#334155', strokeWidth: 1.5 },
      { from: 6, to: 7, color: '#334155', strokeWidth: 1.5 },
      { from: 7, to: 4, color: '#334155', strokeWidth: 1.5 },
      { from: 0, to: 4, color: '#334155', strokeWidth: 1.5 },
      { from: 1, to: 5, color: '#334155', strokeWidth: 1.5 },
      { from: 2, to: 6, color: '#334155', strokeWidth: 1.5 },
      { from: 3, to: 7, color: '#334155', strokeWidth: 1.5 },
      { from: 0, to: 2, color: '#2563eb', strokeWidth: 2 },  // AC
      { from: 4, to: 6, color: '#2563eb', strokeWidth: 2 },  // A₁C₁
      { from: 1, to: 3, color: '#9333ea', strokeWidth: 2 },  // BD
      { from: 5, to: 7, color: '#9333ea', strokeWidth: 2 },  // B₁D₁
    ],
    polygons: [
      { points: [0, 2, 6, 4], fill: '#2563eb', opacity: 0.15 },  // 面 ACC₁A₁ 蓝色
      { points: [1, 3, 7, 5], fill: '#9333ea', opacity: 0.15 },  // 面 BDD₁B₁ 紫色
    ],
    freeLabels: [
      { pos: [0, 0, 0], text: 'A', offset: [-11, -5] },
      { pos: [len, 0, 0], text: 'B', offset: [6, 8] },
      { pos: [len, len, 0], text: 'C', offset: [1, 10] },
      { pos: [0, len, 0], text: 'D', offset: [-13, 0] },
      { pos: [0, 0, len], text: 'A₁', offset: [-10, -8] },
      { pos: [len, 0, len], text: 'B₁', offset: [10, -8] },
      { pos: [len, len, len], text: 'C₁', offset: [-6, -10] },
      { pos: [0, len, len], text: 'D₁', offset: [-14, -2] },
    ],
  };
})();

// ─── 求角度 ──────────────────────────────────────────────────

// 求角度(1)：线线夹角 AC 与 A₁D（带坐标轴）
export const angleLineLineDiagram: DiagramData = (() => {
  const len = 60;
  const xExt: Point3D = [len + 45, 0, 0];
  const yExt: Point3D = [0, len + 45, 0];
  const zExt: Point3D = [0, 0, len + 45];
  return {
    vertices: [
      [0, 0, 0], [len, 0, 0], [len, len, 0], [0, len, 0],           // 0-3: A B C D
      [0, 0, len], [len, 0, len], [len, len, len], [0, len, len],   // 4-7: A₁ B₁ C₁ D₁
      xExt, yExt, zExt,                                              // 8-10: 轴延伸
    ],
    edges: [
      { from: 0, to: 1, color: '#ef4444', strokeWidth: 2 },  // AB x轴
      { from: 1, to: 2, color: '#334155', strokeWidth: 1.5 },
      { from: 2, to: 3, color: '#334155', strokeWidth: 1.5 },
      { from: 3, to: 0, color: '#16a34a', strokeWidth: 2 },  // AD y轴
      { from: 4, to: 5, color: '#334155', strokeWidth: 1.5 },
      { from: 5, to: 6, color: '#334155', strokeWidth: 1.5 },
      { from: 6, to: 7, color: '#334155', strokeWidth: 1.5 },
      { from: 7, to: 4, color: '#334155', strokeWidth: 1.5 },
      { from: 0, to: 4, color: '#2563eb', strokeWidth: 2 },  // AA₁ z轴
      { from: 1, to: 5, color: '#334155', strokeWidth: 1.5 },
      { from: 2, to: 6, color: '#334155', strokeWidth: 1.5 },
      { from: 3, to: 7, color: '#334155', strokeWidth: 1.5 },
      { from: 0, to: 2, color: '#2563eb', strokeWidth: 2.5 },  // AC 蓝色
      { from: 4, to: 3, color: '#dc2626', strokeWidth: 2.5 },  // A₁D 红色
      // 轴延伸（带箭头）
      { from: 1, to: 8, color: '#ef4444', strokeWidth: 1.5, arrow: true },
      { from: 3, to: 9, color: '#16a34a', strokeWidth: 1.5, arrow: true },
      { from: 4, to: 10, color: '#2563eb', strokeWidth: 1.5, arrow: true },
    ],
    polygons: [],
    freeLabels: [
      { pos: [0, 0, 0], text: 'A', offset: [-11, -5] },
      { pos: [len, 0, 0], text: 'B', offset: [6, 8] },
      { pos: [len, len, 0], text: 'C', offset: [1, 10] },
      { pos: [0, len, 0], text: 'D', offset: [-13, 0] },
      { pos: [0, 0, len], text: 'A₁', offset: [-14, -8] },
      { pos: [len, 0, len], text: 'B₁', offset: [10, -8] },
      { pos: [len, len, len], text: 'C₁', offset: [-6, -10] },
      { pos: [0, len, len], text: 'D₁', offset: [-14, -2] },
      { pos: xExt, text: 'x', offset: [8, 4], color: '#ef4444' },
      { pos: yExt, text: 'y', offset: [-10, 9], color: '#16a34a' },
      { pos: zExt, text: 'z', offset: [-12, 0], color: '#2563eb' },
    ],
  };
})();

// 求角度(2)：线面夹角 A₁C 与底面 ABCD（带坐标轴）
export const angleLinePlaneDiagram: DiagramData = (() => {
  const len = 60;
  const xExt: Point3D = [len + 45, 0, 0];
  const yExt: Point3D = [0, len + 45, 0];
  const zExt: Point3D = [0, 0, len + 45];
  return {
    vertices: [
      [0, 0, 0], [len, 0, 0], [len, len, 0], [0, len, 0],           // 0-3: A B C D
      [0, 0, len], [len, 0, len], [len, len, len], [0, len, len],   // 4-7: A₁ B₁ C₁ D₁
      xExt, yExt, zExt,                                              // 8-10: 轴延伸
    ],
    edges: [
      { from: 0, to: 1, color: '#ef4444', strokeWidth: 2 },  // AB x轴
      { from: 1, to: 2, color: '#334155', strokeWidth: 1.5 },
      { from: 2, to: 3, color: '#334155', strokeWidth: 1.5 },
      { from: 3, to: 0, color: '#16a34a', strokeWidth: 2 },  // AD y轴
      { from: 4, to: 5, color: '#334155', strokeWidth: 1.5 },
      { from: 5, to: 6, color: '#334155', strokeWidth: 1.5 },
      { from: 6, to: 7, color: '#334155', strokeWidth: 1.5 },
      { from: 7, to: 4, color: '#334155', strokeWidth: 1.5 },
      { from: 0, to: 4, color: '#2563eb', strokeWidth: 2 },  // AA₁ z轴
      { from: 1, to: 5, color: '#334155', strokeWidth: 1.5 },
      { from: 2, to: 6, color: '#334155', strokeWidth: 1.5 },
      { from: 3, to: 7, color: '#334155', strokeWidth: 1.5 },
      { from: 4, to: 2, color: '#dc2626', strokeWidth: 2.5 },  // A₁C 红色
      // 轴延伸（带箭头）
      { from: 1, to: 8, color: '#ef4444', strokeWidth: 1.5, arrow: true },
      { from: 3, to: 9, color: '#16a34a', strokeWidth: 1.5, arrow: true },
      { from: 4, to: 10, color: '#2563eb', strokeWidth: 1.5, arrow: true },
    ],
    polygons: [
      { points: [0, 1, 2, 3], fill: '#3b82f6', opacity: 0.2 },  // 底面 ABCD 蓝色
    ],
    freeLabels: [
      { pos: [0, 0, 0], text: 'A', offset: [-11, -5] },
      { pos: [len, 0, 0], text: 'B', offset: [6, 8] },
      { pos: [len, len, 0], text: 'C', offset: [1, 10] },
      { pos: [0, len, 0], text: 'D', offset: [-13, 0] },
      { pos: [0, 0, len], text: 'A₁', offset: [-14, -8] },
      { pos: [len, 0, len], text: 'B₁', offset: [10, -8] },
      { pos: [len, len, len], text: 'C₁', offset: [-6, -10] },
      { pos: [0, len, len], text: 'D₁', offset: [-14, -2] },
      { pos: xExt, text: 'x', offset: [8, 4], color: '#ef4444' },
      { pos: yExt, text: 'y', offset: [-10, 9], color: '#16a34a' },
      { pos: zExt, text: 'z', offset: [-12, 0], color: '#2563eb' },
    ],
  };
})();

// 求角度(3)：二面角 A-BD-A₁（带坐标轴）
export const angleDihedralDiagram: DiagramData = (() => {
  const len = 60;
  const xExt: Point3D = [len + 45, 0, 0];
  const yExt: Point3D = [0, len + 45, 0];
  const zExt: Point3D = [0, 0, len + 45];
  return {
    vertices: [
      [0, 0, 0], [len, 0, 0], [len, len, 0], [0, len, 0],           // 0-3: A B C D
      [0, 0, len], [len, 0, len], [len, len, len], [0, len, len],   // 4-7: A₁ B₁ C₁ D₁
      xExt, yExt, zExt,                                              // 8-10: 轴延伸
    ],
    edges: [
      { from: 0, to: 1, color: '#ef4444', strokeWidth: 2 },  // AB x轴
      { from: 1, to: 2, color: '#334155', strokeWidth: 1.5 },
      { from: 2, to: 3, color: '#334155', strokeWidth: 1.5 },
      { from: 3, to: 0, color: '#16a34a', strokeWidth: 2 },  // AD y轴
      { from: 4, to: 5, color: '#334155', strokeWidth: 1.5 },
      { from: 5, to: 6, color: '#334155', strokeWidth: 1.5 },
      { from: 6, to: 7, color: '#334155', strokeWidth: 1.5 },
      { from: 7, to: 4, color: '#334155', strokeWidth: 1.5 },
      { from: 0, to: 4, color: '#2563eb', strokeWidth: 2 },  // AA₁ z轴
      { from: 1, to: 5, color: '#334155', strokeWidth: 1.5 },
      { from: 2, to: 6, color: '#334155', strokeWidth: 1.5 },
      { from: 3, to: 7, color: '#334155', strokeWidth: 1.5 },
      { from: 1, to: 3, color: '#334155', strokeWidth: 2.5 },  // BD 棱（二面角公共边）
      // 轴延伸（带箭头）
      { from: 1, to: 8, color: '#ef4444', strokeWidth: 1.5, arrow: true },
      { from: 3, to: 9, color: '#16a34a', strokeWidth: 1.5, arrow: true },
      { from: 4, to: 10, color: '#2563eb', strokeWidth: 1.5, arrow: true },
    ],
    polygons: [
      { points: [0, 1, 3], fill: '#3b82f6', opacity: 0.25 },  // 面 ABD 蓝色
      { points: [4, 1, 3], fill: '#ef4444', opacity: 0.25 },  // 面 A₁BD 红色
    ],
    freeLabels: [
      { pos: [0, 0, 0], text: 'A', offset: [-11, -5] },
      { pos: [len, 0, 0], text: 'B', offset: [6, 8] },
      { pos: [len, len, 0], text: 'C', offset: [1, 10] },
      { pos: [0, len, 0], text: 'D', offset: [-13, 0] },
      { pos: [0, 0, len], text: 'A₁', offset: [-14, -8] },
      { pos: [len, 0, len], text: 'B₁', offset: [10, -8] },
      { pos: [len, len, len], text: 'C₁', offset: [-6, -10] },
      { pos: [0, len, len], text: 'D₁', offset: [-14, -2] },
      { pos: xExt, text: 'x', offset: [8, 4], color: '#ef4444' },
      { pos: yExt, text: 'y', offset: [-10, 9], color: '#16a34a' },
      { pos: zExt, text: 'z', offset: [-12, 0], color: '#2563eb' },
    ],
  };
})();

// ─── 求距离 ──────────────────────────────────────────────────

// 求距离(1)：点A₁到底面ABCD（底面高亮 + 坐标轴）
export const distancePointToBaseDiagram: DiagramData = (() => {
  const len = 60;
  const xExt: Point3D = [len + 45, 0, 0];
  const yExt: Point3D = [0, len + 45, 0];
  const zExt: Point3D = [0, 0, len + 45];
  return {
    vertices: [
      [0, 0, 0], [len, 0, 0], [len, len, 0], [0, len, 0],
      [0, 0, len], [len, 0, len], [len, len, len], [0, len, len],
      xExt, yExt, zExt,
    ],
    edges: [
      { from: 0, to: 1, color: '#ef4444', strokeWidth: 2 },
      { from: 1, to: 2, color: '#334155', strokeWidth: 1.5 },
      { from: 2, to: 3, color: '#334155', strokeWidth: 1.5 },
      { from: 3, to: 0, color: '#16a34a', strokeWidth: 2 },
      { from: 4, to: 5, color: '#334155', strokeWidth: 1.5 },
      { from: 5, to: 6, color: '#334155', strokeWidth: 1.5 },
      { from: 6, to: 7, color: '#334155', strokeWidth: 1.5 },
      { from: 7, to: 4, color: '#334155', strokeWidth: 1.5 },
      { from: 0, to: 4, color: '#2563eb', strokeWidth: 2 },
      { from: 1, to: 5, color: '#334155', strokeWidth: 1.5 },
      { from: 2, to: 6, color: '#334155', strokeWidth: 1.5 },
      { from: 3, to: 7, color: '#334155', strokeWidth: 1.5 },
      { from: 1, to: 8, color: '#ef4444', strokeWidth: 1.5, arrow: true },
      { from: 3, to: 9, color: '#16a34a', strokeWidth: 1.5, arrow: true },
      { from: 4, to: 10, color: '#2563eb', strokeWidth: 1.5, arrow: true },
    ],
    polygons: [
      { points: [0, 1, 2, 3], fill: '#3b82f6', opacity: 0.25 },
    ],
    freeLabels: [
      { pos: [0, 0, 0], text: 'A', offset: [-11, -5] },
      { pos: [len, 0, 0], text: 'B', offset: [6, 8] },
      { pos: [len, len, 0], text: 'C', offset: [1, 10] },
      { pos: [0, len, 0], text: 'D', offset: [-13, 0] },
      { pos: [0, 0, len], text: 'A₁', offset: [-14, -8] },
      { pos: [len, 0, len], text: 'B₁', offset: [10, -8] },
      { pos: [len, len, len], text: 'C₁', offset: [-6, -10] },
      { pos: [0, len, len], text: 'D₁', offset: [-14, -2] },
      { pos: xExt, text: 'x', offset: [8, 4], color: '#ef4444' },
      { pos: yExt, text: 'y', offset: [-10, 9], color: '#16a34a' },
      { pos: zExt, text: 'z', offset: [-12, 0], color: '#2563eb' },
    ],
  };
})();

// 求距离(2)：点A₁到平面BDC₁（平面BDC₁高亮 + 坐标轴）
export const distancePointToPlaneBDC1Diagram: DiagramData = (() => {
  const len = 60;
  const xExt: Point3D = [len + 45, 0, 0];
  const yExt: Point3D = [0, len + 45, 0];
  const zExt: Point3D = [0, 0, len + 45];
  return {
    vertices: [
      [0, 0, 0], [len, 0, 0], [len, len, 0], [0, len, 0],
      [0, 0, len], [len, 0, len], [len, len, len], [0, len, len],
      xExt, yExt, zExt,
    ],
    edges: [
      { from: 0, to: 1, color: '#ef4444', strokeWidth: 2 },
      { from: 1, to: 2, color: '#334155', strokeWidth: 1.5 },
      { from: 2, to: 3, color: '#334155', strokeWidth: 1.5 },
      { from: 3, to: 0, color: '#16a34a', strokeWidth: 2 },
      { from: 4, to: 5, color: '#334155', strokeWidth: 1.5 },
      { from: 5, to: 6, color: '#334155', strokeWidth: 1.5 },
      { from: 6, to: 7, color: '#334155', strokeWidth: 1.5 },
      { from: 7, to: 4, color: '#334155', strokeWidth: 1.5 },
      { from: 0, to: 4, color: '#2563eb', strokeWidth: 2 },
      { from: 1, to: 5, color: '#334155', strokeWidth: 1.5 },
      { from: 2, to: 6, color: '#334155', strokeWidth: 1.5 },
      { from: 3, to: 7, color: '#334155', strokeWidth: 1.5 },
      { from: 1, to: 3, color: '#dc2626', strokeWidth: 2 },
      { from: 1, to: 6, color: '#dc2626', strokeWidth: 2 },
      { from: 3, to: 6, color: '#dc2626', strokeWidth: 2 },
      { from: 1, to: 8, color: '#ef4444', strokeWidth: 1.5, arrow: true },
      { from: 3, to: 9, color: '#16a34a', strokeWidth: 1.5, arrow: true },
      { from: 4, to: 10, color: '#2563eb', strokeWidth: 1.5, arrow: true },
    ],
    polygons: [
      { points: [1, 3, 6], fill: '#ef4444', opacity: 0.25 },
    ],
    freeLabels: [
      { pos: [0, 0, 0], text: 'A', offset: [-11, -5] },
      { pos: [len, 0, 0], text: 'B', offset: [6, 8] },
      { pos: [len, len, 0], text: 'C', offset: [1, 10] },
      { pos: [0, len, 0], text: 'D', offset: [-13, 0] },
      { pos: [0, 0, len], text: 'A₁', offset: [-14, -8] },
      { pos: [len, 0, len], text: 'B₁', offset: [10, -8] },
      { pos: [len, len, len], text: 'C₁', offset: [-6, -10] },
      { pos: [0, len, len], text: 'D₁', offset: [-14, -2] },
      { pos: xExt, text: 'x', offset: [8, 4], color: '#ef4444' },
      { pos: yExt, text: 'y', offset: [-10, 9], color: '#16a34a' },
      { pos: zExt, text: 'z', offset: [-12, 0], color: '#2563eb' },
    ],
  };
})();
