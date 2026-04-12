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
  name: '右手系坐标轴',
  vertices: [
    [0, 0, 0],    // 0: 原点
    [0, 55, 0],   // 1: x轴端点（投影后在左侧）
    [55, 0, 0],   // 2: y轴端点（投影后在右侧）
    [0, 0, 55],   // 3: z轴端点
  ],
  edges: [
    { from: 0, to: 1, color: '#ef4444', strokeWidth: 2.5 },
    { from: 0, to: 2, color: '#16a34a', strokeWidth: 2.5 },
    { from: 0, to: 3, color: '#2563eb', strokeWidth: 2.5 },
  ],
  polygons: [],
  freeLabels: [
    { pos: [0, 55, 0], text: 'x', offset: [-8, 6], color: '#ef4444' },
    { pos: [55, 0, 0], text: 'y', offset: [7, 1], color: '#16a34a' },
    { pos: [0, 0, 55], text: 'z', offset: [-1, -10], color: '#2563eb' },
    { pos: [0, 0, 0], text: 'O', offset: [2, 12] },
  ],
};
// 建系示例: A为原点, AD→x轴(红,左), AB→y轴(绿,右), AA₁→z轴(蓝)
export const cuboidCoordSystemDiagram: DiagramData = (() => {
  const base = makeCuboid(
    [[0, 3, '#ef4444'], [0, 1, '#16a34a'], [0, 4, '#2563eb']],
    [],
  );
  // 延长轴: 在 B、D、A₁ 之外各加一个点
  const xExt: Point3D = [-68, 28, 0];   // 8: x轴延长(左)
  const yExt: Point3D = [68, 28, 0];    // 9: y轴延长(右)
  const zExt: Point3D = [0, -40, 100];  // 10: z轴延长
  return {
    name: '长方体建系示例',
    ...base,
    vertices: [...base.vertices, xExt, yExt, zExt],
    edges: [
      ...base.edges,
      { from: 3, to: 8, color: '#ef4444', strokeWidth: 1.5, arrow: true },
      { from: 1, to: 9, color: '#16a34a', strokeWidth: 1.5, arrow: true },
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
      { pos: xExt, text: 'x', offset: [-14, 6], color: '#ef4444' },
      { pos: yExt, text: 'y', offset: [8, 6], color: '#16a34a' },
      { pos: zExt, text: 'z', offset: [0, -11], color: '#2563eb' },
      // 边长标签
      { pos: [-20, -20, 0] as Point3D, text: 'b', offset: [-10, -8], color: '#ef4444' },
      { pos: [20, -20, 0] as Point3D, text: 'a', offset: [2, -10], color: '#16a34a' },
      { pos: [0, -40, 35] as Point3D, text: 'c', offset: [8, -4], color: '#2563eb' },
    ] as DiagramData['freeLabels'],
  };
})();

// 建系示例: 直三棱柱（底面直角在A，AB→x，AC→y，AA₁→z）
export const prismCoordSystemDiagram: DiagramData = (() => {
  const len = 60, h = 80;
  const xExt: Point3D = [len + 40, 0, 0];
  const yExt: Point3D = [0, len + 40, 0];
  const zExt: Point3D = [0, 0, h + 40];
  const vertices: Point3D[] = [
    [0, 0, 0],       // 0: A
    [len, 0, 0],     // 1: B
    [0, len, 0],     // 2: C
    [0, 0, h],       // 3: A₁
    [len, 0, h],     // 4: B₁
    [0, len, h],     // 5: C₁
    xExt,            // 6: x轴延伸
    yExt,            // 7: y轴延伸
    zExt,            // 8: z轴延伸
  ];
  return {
    name: '直三棱柱建系',
    vertices,
    edges: [
      { from: 0, to: 1, color: '#ef4444', strokeWidth: 2 },
      { from: 0, to: 2, color: '#16a34a', strokeWidth: 2 },
      { from: 0, to: 3, color: '#2563eb', strokeWidth: 2 },
      { from: 1, to: 6, color: '#ef4444', strokeWidth: 1.5, arrow: true },
      { from: 2, to: 7, color: '#16a34a', strokeWidth: 1.5, arrow: true },
      { from: 3, to: 8, color: '#2563eb', strokeWidth: 1.5, arrow: true },
      { from: 1, to: 2 },
      { from: 1, to: 4 },
      { from: 2, to: 5 },
      { from: 3, to: 4 },
      { from: 4, to: 5 },
      { from: 3, to: 5 },
    ],
    polygons: [],
    freeLabels: [
      { pos: [0, 0, 0], text: 'A', offset: [-12, 4] },
      { pos: [len, 0, 0], text: 'B', offset: [8, 4] },
      { pos: [0, len, 0], text: 'C', offset: [-4, 12] },
      { pos: [0, 0, h], text: 'A₁', offset: [-16, 0] },
      { pos: [len, 0, h], text: 'B₁', offset: [8, -4] },
      { pos: [0, len, h], text: 'C₁', offset: [-4, -12] },
      { pos: xExt, text: 'x', offset: [8, 6], color: '#ef4444' },
      { pos: yExt, text: 'y', offset: [-12, 8], color: '#16a34a' },
      { pos: zExt, text: 'z', offset: [0, -11], color: '#2563eb' },
    ] as DiagramData['freeLabels'],
  };
})();

// 建系示例: 直角三棱锥（墙角型，B为原点，BC→x轴(红,左), BA→y轴(绿,右), BD→z轴(蓝)）
export const tetraCoordSystemDiagram: DiagramData = (() => {
  const len = 70;
  const ext = 110;
  const xExt: Point3D = [0, ext, 0];   // x轴延伸(左)
  const yExt: Point3D = [ext, 0, 0];   // y轴延伸(右)
  const zExt: Point3D = [0, 0, ext];
  const vertices: Point3D[] = [
    [0, 0, 0],     // 0: B (origin)
    [len, 0, 0],   // 1: A (y轴, 右)
    [0, len, 0],   // 2: C (x轴, 左)
    [0, 0, len],   // 3: D (z轴)
    xExt, yExt, zExt, // 4,5,6
  ];
  return {
    name: '直角三棱锥建系',
    vertices,
    edges: [
      { from: 0, to: 2, color: '#ef4444', strokeWidth: 2 },
      { from: 0, to: 1, color: '#16a34a', strokeWidth: 2 },
      { from: 0, to: 3, color: '#2563eb', strokeWidth: 2 },
      { from: 2, to: 4, color: '#ef4444', strokeWidth: 1.5, arrow: true },
      { from: 1, to: 5, color: '#16a34a', strokeWidth: 1.5, arrow: true },
      { from: 3, to: 6, color: '#2563eb', strokeWidth: 1.5, arrow: true },
      { from: 1, to: 2 },
      { from: 2, to: 3 },
      { from: 1, to: 3 },
    ],
    polygons: [
      { points: [1, 2, 3], fill: '#93c5fd', opacity: 0.15 },
    ],
    freeLabels: [
      { pos: [0, 0, 0], text: 'B', offset: [-10, -5] },
      { pos: [len, 0, 0], text: 'A', offset: [-92, 37] },
      { pos: [0, len, 0], text: 'C', offset: [94, -12] },
      { pos: [0, 0, len], text: 'D', offset: [-12, -1] },
      { pos: xExt, text: 'x', offset: [-10, 9], color: '#ef4444' },
      { pos: yExt, text: 'y', offset: [8, 6], color: '#16a34a' },
      { pos: zExt, text: 'z', offset: [0, -11], color: '#2563eb' },
    ] as DiagramData['freeLabels'],
  };
})();

// 建系示例: 侧棱垂直底面（底面为正三角形，BD⊥底面ABC，B为原点）
// 正确建系: BA为x轴, BD为z轴, y轴垂直BA在底面内(不经过任何顶点)
// A=(a,0,0), C=(a/2, √3a/2, 0) 不在任何坐标轴上
// rendering: problem-x → rendering-y方向(SVG左下), problem-y → rendering-x方向(SVG右)
export const sidePerpPyramidCoordDiagram: DiagramData = (() => {
  const a = 65;
  const B: Point3D = [0, 0, 0];
  const A: Point3D = [0, a, 0];                        // A在rendering-y轴(SVG左下) = x轴
  const C: Point3D = [Math.round(a * 0.866), Math.round(a / 2), 0]; // C=(√3a/2, a/2) ≈ (56,33)
  const D: Point3D = [0, 0, 80];
  const xExt: Point3D = [0, 90, 0];   // x轴延伸(past A)
  const yExt: Point3D = [85, 0, 0];   // y轴: rendering-x方向(SVG右), 不经过C
  const zExt: Point3D = [0, 0, 104];
  const vertices: Point3D[] = [B, A, C, D, xExt, yExt, zExt];
  return {
    name: '侧棱垂直底面建系',
    vertices,
    edges: [
      { from: 0, to: 1, color: '#ef4444', strokeWidth: 2 },  // B→A (x轴)
      { from: 1, to: 4, color: '#ef4444', strokeWidth: 1.5, arrow: true },
      { from: 0, to: 5, color: '#16a34a', strokeWidth: 1.5, arrow: true }, // y轴箭头
      { from: 0, to: 3, color: '#2563eb', strokeWidth: 2 },  // B→D (z轴)
      { from: 3, to: 6, color: '#2563eb', strokeWidth: 1.5, arrow: true },
      { from: 1, to: 3 },  // A→D
      { from: 0, to: 2 },  // B→C
      { from: 2, to: 3 },  // C→D
      { from: 1, to: 2 },  // A→C
    ],
    polygons: [
      { points: [0, 1, 2], fill: '#d97706', opacity: 0.22 },
    ],
    freeLabels: [
      { pos: [0, 0, 0], text: 'B', offset: [-10, -2] },
      { pos: [0, 65, 0], text: 'A', offset: [3, 13] },
      { pos: [56, 33, 0], text: 'C', offset: [6, 7] },
      { pos: [0, 0, 80], text: 'D', offset: [-12, 0] },
      { pos: [0, 90, 0], text: 'x', offset: [-8, 8], color: '#ef4444' },
      { pos: [85, 0, 0], text: 'y', offset: [11, 1], color: '#16a34a' },
      { pos: [0, 0, 104], text: 'z', offset: [-7, -5], color: '#2563eb' },
    ] as DiagramData['freeLabels'],
  };
})();

// 建系示例: 侧面垂直底面（侧面底面均为等腰三角形）
// 底面ABC为等腰三角形(AB=AC)，侧面BDC为等腰三角形(DB=DC)，面BDC⊥底面ABC
// M=BC中点，AM⊥BC，DM⊥BC，DM⊥底面 → 以M为原点，MA为x轴，MC为y轴，MD为z轴
// rendering: problem-x→rendering-y(SVG左下), problem-y→rendering-x(SVG右), problem-z→rendering-z(SVG上)
export const sideFacePerpendicularDiagram: DiagramData = (() => {
  const M: Point3D = [0, 0, 0];
  const C: Point3D = [48, 0, 0];    // MC方向(rendering-x, SVG右) = y轴
  const B: Point3D = [-48, 0, 0];   // MB反向(SVG左)
  const A: Point3D = [0, 52, 0];    // MA方向(rendering-y, SVG左下) = x轴
  const D: Point3D = [0, 0, 78];    // MD方向(rendering-z, SVG上) = z轴
  const xExt: Point3D = [0, 78, 0];
  const yExt: Point3D = [72, 0, 0];
  const zExt: Point3D = [0, 0, 104];
  const vertices: Point3D[] = [M, C, B, A, D, xExt, yExt, zExt];
  return {
    name: '侧面垂直底面建系',
    vertices,
    edges: [
      { from: 0, to: 1, color: '#16a34a', strokeWidth: 2 },  // M→C (y轴)
      { from: 0, to: 2 },                                     // M→B (底边另一半)
      { from: 0, to: 3, color: '#ef4444', strokeWidth: 2 },  // M→A (x轴)
      { from: 0, to: 4, color: '#2563eb', strokeWidth: 2 },  // M→D (z轴)
      { from: 3, to: 5, color: '#ef4444', strokeWidth: 1.5, arrow: true },
      { from: 1, to: 6, color: '#16a34a', strokeWidth: 1.5, arrow: true },
      { from: 4, to: 7, color: '#2563eb', strokeWidth: 1.5, arrow: true },
      { from: 2, to: 3 },  // B→A
      { from: 1, to: 3 },  // C→A
      { from: 2, to: 4 },  // B→D
      { from: 1, to: 4 },  // C→D
      { from: 3, to: 4 },  // A→D
    ],
    polygons: [
      { points: [3, 2, 1], fill: '#d97706', opacity: 0.22 },
      { points: [2, 1, 4], fill: '#93c5fd', opacity: 0.18 },
    ],
    freeLabels: [
      { pos: [-48, 0, 0], text: 'B', offset: [-14, 4] },
      { pos: [48, 0, 0], text: 'C', offset: [8, 4] },
      { pos: [0, 52, 0], text: 'A', offset: [4, 10] },
      { pos: [0, 0, 78], text: 'D', offset: [-12, 0] },
      { pos: xExt, text: 'x', offset: [-8, 8], color: '#ef4444' },
      { pos: yExt, text: 'y', offset: [8, 4], color: '#16a34a' },
      { pos: zExt, text: 'z', offset: [4, -10], color: '#2563eb' },
    ] as DiagramData['freeLabels'],
  };
})();

// 建系示例: 正四面体（补成正方体）
// 正四面体的4个顶点 = 正方体的4个间隔顶点
// D(0,0,0), A(a,a,0), B(0,a,a), C(a,0,a)
// 以正方体顶点D为原点，沿正方体棱方向建系(x,y,z轴沿棱)
export const regularTetrahedronCubeDiagram: DiagramData = (() => {
  const a = 55;
  // 正方体8个顶点
  const D: Point3D = [0, 0, 0];       // 0: D 正四面体顶点(原点)
  const vx: Point3D = [0, a, 0];      // 1: 沿x棱(左下)
  const vy: Point3D = [a, 0, 0];      // 2: 沿y棱(右)
  const vz: Point3D = [0, 0, a];      // 3: 沿z棱
  const A: Point3D = [a, a, 0];       // 4: A 正四面体顶点
  const B: Point3D = [0, a, a];       // 5: B 正四面体顶点
  const C: Point3D = [a, 0, a];       // 6: C 正四面体顶点
  const v7: Point3D = [a, a, a];      // 7: 正方体远角(非正四面体顶点)
  const xExt: Point3D = [0, 78, 0];   // 8: x轴箭头(左下)
  const yExt: Point3D = [78, 0, 0];   // 9: y轴箭头(右)
  const zExt: Point3D = [0, 0, 78];   // 10: z轴箭头
  const vertices: Point3D[] = [D, vx, vy, vz, A, B, C, v7, xExt, yExt, zExt];
  return {
    name: '正四面体建系（补成正方体）',
    vertices,
    edges: [
      // 坐标轴(沿正方体棱, 带箭头)
      { from: 0, to: 1, color: '#ef4444', strokeWidth: 1.5 },
      { from: 1, to: 8, color: '#ef4444', strokeWidth: 1.2, arrow: true },
      { from: 0, to: 2, color: '#16a34a', strokeWidth: 1.5 },
      { from: 2, to: 9, color: '#16a34a', strokeWidth: 1.2, arrow: true },
      { from: 0, to: 3, color: '#2563eb', strokeWidth: 1.5 },
      { from: 3, to: 10, color: '#2563eb', strokeWidth: 1.2, arrow: true },
      // 正方体其余棱(紫色细线)
      { from: 1, to: 4, color: '#a855f7', strokeWidth: 0.8 },
      { from: 1, to: 5, color: '#a855f7', strokeWidth: 0.8 },
      { from: 2, to: 4, color: '#a855f7', strokeWidth: 0.8 },
      { from: 2, to: 6, color: '#a855f7', strokeWidth: 0.8 },
      { from: 3, to: 5, color: '#a855f7', strokeWidth: 0.8 },
      { from: 3, to: 6, color: '#a855f7', strokeWidth: 0.8 },
      { from: 4, to: 7, color: '#a855f7', strokeWidth: 0.8 },
      { from: 5, to: 7, color: '#a855f7', strokeWidth: 0.8 },
      { from: 6, to: 7, color: '#a855f7', strokeWidth: 0.8 },
      // 正四面体棱(粗黑)
      { from: 0, to: 4, color: '#374151', strokeWidth: 2 },
      { from: 0, to: 5, color: '#374151', strokeWidth: 2 },
      { from: 0, to: 6, color: '#374151', strokeWidth: 2 },
      { from: 4, to: 5, color: '#374151', strokeWidth: 2 },
      { from: 4, to: 6, color: '#374151', strokeWidth: 2 },
      { from: 5, to: 6, color: '#374151', strokeWidth: 2 },
    ],
    polygons: [
      { points: [0, 4, 5], fill: '#93c5fd', opacity: 0.22 },
      { points: [0, 4, 6], fill: '#c4b5fd', opacity: 0.20 },
    ],
    freeLabels: [
      { pos: [0, 0, 0], text: 'D', offset: [-13, 6] },
      { pos: [a, a, 0], text: 'A', offset: [6, 4] },
      { pos: [0, a, a], text: 'B', offset: [-14, 0] },
      { pos: [a, 0, a], text: 'C', offset: [6, -4] },
      { pos: xExt, text: 'x', offset: [-10, 6], color: '#ef4444' },
      { pos: yExt, text: 'y', offset: [6, 4], color: '#16a34a' },
      { pos: zExt, text: 'z', offset: [4, -8], color: '#2563eb' },
    ] as DiagramData['freeLabels'],
  };
})();

// 建系示例: 正四棱锥（底面为正方形，以对角线交点O为原点）
// O=中心, A=后右, B=前右, C=前左, D=后左, P=顶
// x轴→BC中点(左下), y轴→AB中点(右), z轴向上
export const regularPyramidCoordDiagram: DiagramData = (() => {
  const h = 35;  // 半边长
  const H = 70;  // 棱锥高
  const O: Point3D = [0, 0, 0];
  const A: Point3D = [h, -h, 0];   // 后右
  const B: Point3D = [h, h, 0];    // 前右
  const C: Point3D = [-h, h, 0];   // 前左
  const Dv: Point3D = [-h, -h, 0]; // 后左
  const P: Point3D = [0, 0, H];
  const xExt: Point3D = [0, 60, 0];  // x轴(左下)
  const yExt: Point3D = [60, 0, 0];  // y轴(右)
  const zExt: Point3D = [0, 0, 95];
  const vertices: Point3D[] = [O, A, B, C, Dv, P, xExt, yExt, zExt];
  return {
    name: '正四棱锥建系',
    vertices,
    edges: [
      // 底面四边形
      { from: 1, to: 2 },                                        // A-B 前边
      { from: 2, to: 3 },                                        // B-C 右边
      { from: 3, to: 4, hidden: true },                          // C-D 后边(虚)
      { from: 4, to: 1, hidden: true },                          // D-A 左边(虚)
      // 底面对角线(显示交叉原点O)
      { from: 1, to: 3, hidden: true, color: '#9ca3af' },        // A-C(虚线)
      { from: 2, to: 4, hidden: true, color: '#9ca3af' },        // B-D(虚线)
      // 侧棱
      { from: 5, to: 1 },                                        // P-A
      { from: 5, to: 2 },                                        // P-B
      { from: 5, to: 3 },                                        // P-C
      { from: 5, to: 4, hidden: true },                          // P-D(虚)
      // 坐标轴
      { from: 0, to: 6, color: '#ef4444', strokeWidth: 1.5, arrow: true },
      { from: 0, to: 7, color: '#16a34a', strokeWidth: 1.5, arrow: true },
      { from: 0, to: 8, color: '#2563eb', strokeWidth: 1.5, arrow: true },
    ],
    polygons: [
      { points: [1, 2, 3, 4], fill: '#d97706', opacity: 0.18 },  // 底面
      { points: [5, 1, 2], fill: '#93c5fd', opacity: 0.20 },     // 前侧面 P-A-B
    ],
    freeLabels: [
      { pos: [0, 0, 0], text: 'O', offset: [5, 10], fontSize: 13 },
      { pos: [h, -h, 0], text: 'A', offset: [8, -2], fontSize: 13 },
      { pos: [h, h, 0], text: 'B', offset: [5, 10], fontSize: 13 },
      { pos: [-h, h, 0], text: 'C', offset: [-9, 10], fontSize: 13 },
      { pos: [-h, -h, 0], text: 'D', offset: [12, -8], fontSize: 13 },
      { pos: [0, 0, H], text: 'P', offset: [-11, 1], fontSize: 13 },
      { pos: xExt, text: 'x', offset: [-10, 6], fontSize: 11, color: '#ef4444' },
      { pos: yExt, text: 'y', offset: [6, 4], fontSize: 11, color: '#16a34a' },
      { pos: zExt, text: 'z', offset: [4, -8], fontSize: 11, color: '#2563eb' },
    ] as DiagramData['freeLabels'],
  };
})();

// 建系示例: 四棱锥（底面为等腰梯形, PD⊥底面）
// D为原点, DC∥AB, DC<AB, AD=BC, PD⊥底面
// x轴垂直DC(底面内), y轴沿DC方向, z轴沿PD向上
// ⚠️ 需配合 rotation={{ az: 63, el: 46 }} 使用
export const isoscelesTrapezoidPyramidDiagram: DiagramData = (() => {
  const dc = 25, h_b = 42, ovhg = 13;
  const H = 50;
  const D: Point3D = [0, 0, 0];
  const C: Point3D = [0, dc, 0];
  const A: Point3D = [h_b, -ovhg, 0];
  const B: Point3D = [h_b, dc + ovhg, 0];
  const P: Point3D = [0, 0, H];
  const xExt: Point3D = [58, 0, 0];
  const yExt: Point3D = [0, 48, 0];
  const zExt: Point3D = [0, 0, 68];
  const vertices: Point3D[] = [D, C, A, B, P, xExt, yExt, zExt];
  return {
    name: '四棱锥建系(等腰梯形)',
    vertices,
    edges: [
      { from: 2, to: 3 },                                        // A-B 前边
      { from: 3, to: 1 },                                        // B-C 右斜边
      { from: 1, to: 0, hidden: true },                          // C-D 后边(虚)
      { from: 0, to: 2 },                                        // D-A 左斜边
      { from: 4, to: 2 },                                        // P-A
      { from: 4, to: 3 },                                        // P-B
      { from: 4, to: 1 },                                        // P-C
      { from: 4, to: 0, hidden: true },                          // P-D(虚,z轴覆盖)
      { from: 0, to: 5, color: '#ef4444', strokeWidth: 1.5, arrow: true },
      { from: 0, to: 6, color: '#16a34a', strokeWidth: 1.5, arrow: true },
      { from: 0, to: 7, color: '#2563eb', strokeWidth: 1.5, arrow: true },
    ],
    polygons: [
      { points: [2, 3, 1, 0], fill: '#d97706', opacity: 0.18 },
    ],
    freeLabels: [
      { pos: [0, 0, 0], text: 'D', offset: [-7, -1], fontSize: 13 },
      { pos: [0, dc, 0], text: 'C', offset: [7, -5], fontSize: 13 },
      { pos: [h_b, -ovhg, 0], text: 'A', offset: [-10, 6], fontSize: 13 },
      { pos: [h_b, dc + ovhg, 0], text: 'B', offset: [6, 9], fontSize: 13 },
      { pos: [0, 0, H], text: 'P', offset: [-11, 4], fontSize: 13 },
      { pos: [58, 0, 0], text: 'x', offset: [-2, 10], fontSize: 11, color: '#ef4444' },
      { pos: [0, 48, 0], text: 'y', offset: [8, 2], fontSize: 11, color: '#16a34a' },
      { pos: [0, 0, 68], text: 'z', offset: [0, -10], fontSize: 11, color: '#2563eb' },
    ] as DiagramData['freeLabels'],
  };
})();

// 建系示例: 四棱锥（底面为直角梯形, PD⊥底面）
// D为原点, DC∥AB, ∠ADC=∠DAB=90° → DA⊥DC⊥PD 三棱互相垂直
// x轴沿DC, y轴沿DA, z轴沿DP
// ⚠️ 需配合 rotation={{ az: 81, el: 38 }} 使用
export const rightTrapezoidPyramidDiagram: DiagramData = (() => {
  const dc = 20, da = 40, ab = 48;
  const H = 50;
  const D: Point3D = [0, 0, 0];
  const C: Point3D = [dc, 0, 0];
  const A: Point3D = [0, da, 0];
  const B: Point3D = [ab, da, 0];
  const P: Point3D = [0, 0, H];
  const xExt: Point3D = [45, 0, 0];           // x轴沿DC方向
  const yExt: Point3D = [0, 56, 0];           // y轴沿DA方向
  const zExt: Point3D = [0, 0, 68];
  const vertices: Point3D[] = [D, C, A, B, P, xExt, yExt, zExt];
  return {
    name: '四棱锥建系(直角梯形)',
    vertices,
    edges: [
      { from: 2, to: 3 },                                        // A-B 前边
      { from: 3, to: 1 },                                        // B-C 斜边
      { from: 0, to: 1, color: '#ef4444', strokeWidth: 2 },      // D-C (x轴方向)
      { from: 0, to: 2, color: '#16a34a', strokeWidth: 2 },      // D-A (y轴方向)
      { from: 4, to: 2 },                                        // P-A
      { from: 4, to: 3 },                                        // P-B
      { from: 4, to: 1 },                                        // P-C
      { from: 4, to: 0, hidden: true },                          // P-D(虚)
      { from: 1, to: 5, color: '#ef4444', strokeWidth: 1.2, arrow: true },  // x箭头(past C)
      { from: 2, to: 6, color: '#16a34a', strokeWidth: 1.2, arrow: true },  // y箭头(past A)
      { from: 0, to: 7, color: '#2563eb', strokeWidth: 1.5, arrow: true },  // z轴
    ],
    polygons: [
      { points: [2, 3, 1, 0], fill: '#d97706', opacity: 0.18 },
    ],
    freeLabels: [
      { pos: [0, 0, 0], text: 'D', offset: [-8, -4], fontSize: 13 },
      { pos: [dc, 0, 0], text: 'C', offset: [-10, 2], fontSize: 13 },
      { pos: [0, da, 0], text: 'A', offset: [8, -4], fontSize: 13 },
      { pos: [ab, da, 0], text: 'B', offset: [8, 6], fontSize: 13 },
      { pos: [0, 0, H], text: 'P', offset: [-10, 2], fontSize: 13 },
      { pos: xExt, text: 'x', offset: [-8, 6], fontSize: 11, color: '#ef4444' },
      { pos: yExt, text: 'y', offset: [8, 2], fontSize: 11, color: '#16a34a' },
      { pos: zExt, text: 'z', offset: [6, -4], fontSize: 11, color: '#2563eb' },
    ] as DiagramData['freeLabels'],
  };
})();

// 建系示例: 斜棱柱（侧面ABB₁A₁⊥底面ABCD, 底面为矩形）
// 用长方体参考框(粉色)辅助建系: A为原点, x沿AD(深度), y沿AB(水平), z向上
// 侧棱向量 = (t, 0, h), 其中t为沿y方向倾斜量
export const obliquePrismDiagram: DiagramData = (() => {
  const ab = 42, ad = 40, t = 22, h = 48;
  const bw = ab + t; // 长方体宽度(rendering-x)
  const pk = '#d946ef'; const ps = 0.8; // 参考框颜色/线宽
  // 0-7: 长方体参考框顶点
  const c0: Point3D = [0, 0, 0];       // = A
  const c1: Point3D = [bw, 0, 0];
  const c2: Point3D = [bw, ad, 0];
  const c3: Point3D = [0, ad, 0];      // = D
  const c4: Point3D = [0, 0, h];
  const c5: Point3D = [bw, 0, h];      // = B₁
  const c6: Point3D = [bw, ad, h];     // = C₁
  const c7: Point3D = [0, ad, h];
  // 8-11: 棱柱独有顶点
  const B: Point3D = [ab, 0, 0];
  const C: Point3D = [ab, ad, 0];
  const A1: Point3D = [t, 0, h];
  const D1: Point3D = [t, ad, h];
  // 12-14: 轴
  const xExt: Point3D = [0, 50, 0];
  const yExt: Point3D = [70, 0, 0];
  const zExt: Point3D = [0, 0, 58];
  const vertices: Point3D[] = [c0,c1,c2,c3,c4,c5,c6,c7, B,C,A1,D1, xExt,yExt,zExt];
  return {
    name: '斜棱柱建系(侧面垂直底面)',
    vertices,
    edges: [
      // 长方体参考框(粉色)
      { from: 0, to: 1, color: pk, strokeWidth: ps },              // 底-前
      { from: 1, to: 2, color: pk, strokeWidth: ps },              // 底-右
      { from: 2, to: 3, color: pk, strokeWidth: ps, hidden: true },// 底-后(虚)
      { from: 3, to: 0, color: pk, strokeWidth: ps },              // 底-左
      { from: 4, to: 5, color: pk, strokeWidth: ps },              // 顶-前
      { from: 5, to: 6, color: pk, strokeWidth: ps },              // 顶-右
      { from: 6, to: 7, color: pk, strokeWidth: ps },              // 顶-后
      { from: 7, to: 4, color: pk, strokeWidth: ps },              // 顶-左
      { from: 0, to: 4, color: pk, strokeWidth: ps },              // 竖-左前
      { from: 1, to: 5, color: pk, strokeWidth: ps },              // 竖-右前
      { from: 2, to: 6, color: pk, strokeWidth: ps },              // 竖-右后
      { from: 3, to: 7, color: pk, strokeWidth: ps, hidden: true },// 竖-左后(虚)
      // 棱柱本体
      { from: 0, to: 8 },                                          // A-B 前底
      { from: 8, to: 9 },                                          // B-C 右底
      { from: 9, to: 3, hidden: true },                            // C-D 后底(虚)
      { from: 10, to: 5 },                                         // A₁-B₁ 前顶
      { from: 5, to: 6 },                                          // B₁-C₁ 右顶
      { from: 6, to: 11 },                                         // C₁-D₁ 后顶
      { from: 11, to: 10 },                                        // D₁-A₁ 左顶
      { from: 0, to: 10 },                                         // AA₁ 左侧棱
      { from: 8, to: 5 },                                          // BB₁ 右前侧棱
      { from: 9, to: 6 },                                          // CC₁ 右后侧棱
      { from: 3, to: 11, hidden: true },                           // DD₁ 左后侧棱(虚)
      // 坐标轴
      { from: 0, to: 12, color: '#ef4444', strokeWidth: 1.5, arrow: true }, // x(深度)
      { from: 0, to: 13, color: '#16a34a', strokeWidth: 1.5, arrow: true }, // y(水平)
      { from: 0, to: 14, color: '#2563eb', strokeWidth: 1.5, arrow: true }, // z(竖直)
    ],
    polygons: [
      { points: [0, 8, 9, 3], fill: '#92400e', opacity: 0.18 },
      { points: [10, 5, 6, 11], fill: '#065f46', opacity: 0.22 },
    ],
    freeLabels: [
      { pos: c0, text: 'A', offset: [-13, 23], fontSize: 12 },
      { pos: B, text: 'B', offset: [-18, 25], fontSize: 12 },
      { pos: C, text: 'C', offset: [15, -6], fontSize: 12 },
      { pos: c3, text: 'D', offset: [17, -7], fontSize: 12 },
      { pos: A1, text: 'A₁', offset: [-2, -7], fontSize: 12 },
      { pos: c5, text: 'B₁', offset: [-20, 9], fontSize: 12 },
      { pos: c6, text: 'C₁', offset: [21, -21], fontSize: 12 },
      { pos: D1, text: 'D₁', offset: [-5, -6], fontSize: 12 },
      { pos: xExt, text: 'x', offset: [-8, 5], fontSize: 12, color: '#ef4444' },
      { pos: yExt, text: 'y', offset: [5, 2], fontSize: 12, color: '#16a34a' },
      { pos: zExt, text: 'z', offset: [-1, -8], fontSize: 12, color: '#2563eb' },
    ] as DiagramData['freeLabels'],
  };
})();

// 建系示例: 斜棱柱（底面为菱形）
// 底面对角线AC⊥BD，交点O为原点
// x轴沿OA方向, y轴沿OB方向, z轴沿OA₁方向(A₁在z轴上)
// 侧棱向量 = A₁ - A = -OA + OA₁ = (-p, 0, h)
export const rhombusPrismDiagram: DiagramData = (() => {
  const p = 30;  // 半对角线AC
  const q = 22;  // 半对角线BD
  const h = 50;  // 高度(z方向)
  // 底面顶点（array [y_math, x_math, z]，x_math=左下, y_math=右）
  const O: Point3D = [0, 0, 0];
  const A: Point3D = [0, p, 0];        // x轴正方向(左下)
  const B: Point3D = [q, 0, 0];        // y轴正方向(右)
  const C: Point3D = [0, -p, 0];       // x轴负方向
  const D: Point3D = [-q, 0, 0];       // y轴负方向
  // 顶面顶点（侧棱向量 = [0, -p, h]，使A₁落在z轴上）
  const A1: Point3D = [0, 0, h];       // 在z轴上
  const B1: Point3D = [q, -p, h];
  const C1: Point3D = [0, -2 * p, h];
  const D1: Point3D = [-q, -p, h];
  // 坐标轴端点
  const xExt: Point3D = [0, 48, 0];
  const yExt: Point3D = [38, 0, 0];
  const zExt: Point3D = [0, 0, 72];
  const vertices: Point3D[] = [O, A, B, C, D, A1, B1, C1, D1, xExt, yExt, zExt];
  // indices: 0=O,1=A,2=B,3=C,4=D, 5=A₁,6=B₁,7=C₁,8=D₁, 9=xExt,10=yExt,11=zExt
  return {
    name: '斜棱柱建系(底面菱形)',
    vertices,
    edges: [
      // 底面菱形
      { from: 1, to: 2 },                                        // A-B
      { from: 2, to: 3 },                                        // B-C
      { from: 3, to: 4, hidden: true },                          // C-D(虚)
      { from: 4, to: 1 },                                        // D-A
      // 底面对角线(虚线,构造)
      { from: 0, to: 3, hidden: true, color: '#9ca3af' },        // O-C
      { from: 0, to: 4, hidden: true, color: '#9ca3af' },        // O-D
      // 顶面
      { from: 5, to: 6 },                                        // A₁-B₁
      { from: 6, to: 7 },                                        // B₁-C₁
      { from: 7, to: 8 },                                        // C₁-D₁
      { from: 8, to: 5 },                                        // D₁-A₁
      // 侧棱
      { from: 1, to: 5 },                                        // A-A₁
      { from: 2, to: 6 },                                        // B-B₁
      { from: 3, to: 7 },                                        // C-C₁
      { from: 4, to: 8, hidden: true },                          // D-D₁(虚)
      // 坐标轴
      { from: 0, to: 9, color: '#ef4444', strokeWidth: 1.5, arrow: true },   // x轴(过A)
      { from: 0, to: 10, color: '#16a34a', strokeWidth: 1.5, arrow: true },  // y轴(过B)
      { from: 0, to: 11, color: '#2563eb', strokeWidth: 1.5, arrow: true },  // z轴(过A₁)
    ],
    polygons: [
      { points: [1, 2, 3, 4], fill: '#d97706', opacity: 0.18 },  // 底面
    ],
    freeLabels: [
      { pos: A, text: 'A', offset: [1, 11], fontSize: 13 },
      { pos: B, text: 'B', offset: [3, 11], fontSize: 13 },
      { pos: C, text: 'C', offset: [7, -5], fontSize: 13 },
      { pos: D, text: 'D', offset: [-12, -2], fontSize: 13 },
      { pos: A1, text: 'A₁', offset: [8, 8], fontSize: 13 },
      { pos: B1, text: 'B₁', offset: [8, -2], fontSize: 13 },
      { pos: C1, text: 'C₁', offset: [8, -2], fontSize: 13 },
      { pos: D1, text: 'D₁', offset: [-10, -1], fontSize: 13 },
      { pos: xExt, text: 'x', offset: [-8, 8], fontSize: 11, color: '#ef4444' },
      { pos: yExt, text: 'y', offset: [6, 4], fontSize: 11, color: '#16a34a' },
      { pos: zExt, text: 'z', offset: [-8, -2], fontSize: 11, color: '#2563eb' },
    ] as DiagramData['freeLabels'],
  };
})();

// 建系示例: 正三棱柱
// 底面正三角形 ABC，以 AB 中点 D 为原点
// x轴沿 DA 方向（垂直AB），y轴沿 DB 方向，z轴向上沿棱 DD₁
export const regularTriPrismDiagram: DiagramData = (() => {
  const s = 40;    // 正三角形边长
  const h = 50;    // 棱柱高
  const hTri = s * Math.sqrt(3) / 2;  // 三角形高 ≈ 34.6
  // D 是 AB 中点（原点）
  // 斜二测 array [y_math, x_math, z]: x→左下, y→右
  // B 在 y 正方向(右), A 在 y 负方向(左), C 在 x 正方向(前/左下)
  const O: Point3D = [0, 0, 0];        // D(原点,AB中点)
  const ptA: Point3D = [-s / 2, 0, 0]; // A(左)
  const ptB: Point3D = [s / 2, 0, 0];  // B(右)
  const ptC: Point3D = [0, hTri, 0];   // C(前/左下)
  // 顶面
  const ptA1: Point3D = [-s / 2, 0, h];
  const ptB1: Point3D = [s / 2, 0, h];
  const ptC1: Point3D = [0, hTri, h];
  // 坐标轴端点
  const xExt: Point3D = [0, hTri + 12, 0];  // x轴(DC方向)
  const yExt: Point3D = [s / 2 + 15, 0, 0]; // y轴(DB方向)
  const zExt: Point3D = [0, 0, h + 12];     // z轴(上)
  const vertices: Point3D[] = [O, ptA, ptB, ptC, ptA1, ptB1, ptC1, xExt, yExt, zExt];
  // indices: 0=O(D), 1=A, 2=B, 3=C, 4=A₁, 5=B₁, 6=C₁, 7=xExt, 8=yExt, 9=zExt
  return {
    name: '正三棱柱建系',
    vertices,
    edges: [
      // 底面三角形
      { from: 1, to: 2 },                                        // A-B
      { from: 2, to: 3 },                                        // B-C
      { from: 3, to: 1, hidden: true },                          // C-A(虚)
      // 顶面三角形
      { from: 4, to: 5 },                                        // A₁-B₁
      { from: 5, to: 6 },                                        // B₁-C₁
      { from: 6, to: 4 },                                        // C₁-A₁
      // 侧棱
      { from: 1, to: 4 },                                        // A-A₁
      { from: 2, to: 5 },                                        // B-B₁
      { from: 3, to: 6 },                                        // C-C₁
      // 构造线 D-C (虚线，原点到C)
      { from: 0, to: 3, hidden: true, color: '#9ca3af' },        // D-C
      // 坐标轴
      { from: 0, to: 7, color: '#ef4444', strokeWidth: 1.5, arrow: true },  // x轴
      { from: 0, to: 8, color: '#16a34a', strokeWidth: 1.5, arrow: true },  // y轴
      { from: 0, to: 9, color: '#2563eb', strokeWidth: 1.5, arrow: true },  // z轴
    ],
    polygons: [
      { points: [1, 2, 3], fill: '#d97706', opacity: 0.18 },    // 底面
    ],
    freeLabels: [
      { pos: O, text: 'D', offset: [5, -5], fontSize: 13 },
      { pos: ptA, text: 'A', offset: [-12, -2], fontSize: 13 },
      { pos: ptB, text: 'B', offset: [3, 10], fontSize: 13 },
      { pos: ptC, text: 'C', offset: [5, 8], fontSize: 13 },
      { pos: ptA1, text: 'A₁', offset: [-14, -2], fontSize: 13 },
      { pos: ptB1, text: 'B₁', offset: [8, -2], fontSize: 13 },
      { pos: ptC1, text: 'C₁', offset: [9, 5], fontSize: 13 },
      { pos: xExt, text: 'x', offset: [-8, 8], fontSize: 11, color: '#ef4444' },
      { pos: yExt, text: 'y', offset: [6, 4], fontSize: 11, color: '#16a34a' },
      { pos: zExt, text: 'z', offset: [4, -8], fontSize: 11, color: '#2563eb' },
    ] as DiagramData['freeLabels'],
  };
})();

// 建系示例: 正四棱台（普通建系）
// 底面 ABCD 正方形，顶面 A₁B₁C₁D₁ 较小正方形
// 以底面对角线交点 O 为原点，对角线方向为 x/y 轴，z 轴向上
export const frustumDiagram: DiagramData = (() => {
  const d = 45;     // 底面半对角线
  const dp = 22;    // 顶面半对角线
  const h = 30;     // 棱台高
  const O: Point3D = [0, 0, 0];
  const A: Point3D = [0, d, 0];
  const B: Point3D = [d, 0, 0];
  const C: Point3D = [0, -d, 0];
  const D: Point3D = [-d, 0, 0];
  const A1: Point3D = [0, dp, h];
  const B1: Point3D = [dp, 0, h];
  const C1: Point3D = [0, -dp, h];
  const D1: Point3D = [-dp, 0, h];
  const xExt: Point3D = [0, 55, 0];
  const yExt: Point3D = [55, 0, 0];
  const zExt: Point3D = [0, 0, h + 18];
  const vertices: Point3D[] = [O, A, B, C, D, A1, B1, C1, D1, xExt, yExt, zExt];
  // indices: 0=O, 1=A, 2=B, 3=C, 4=D, 5=A₁, 6=B₁, 7=C₁, 8=D₁, 9=xExt, 10=yExt, 11=zExt
  return {
    name: '正四棱台建系',
    vertices,
    edges: [
      { from: 1, to: 2 },                                        // A-B
      { from: 2, to: 3 },                                        // B-C
      { from: 3, to: 4, hidden: true },                          // C-D(虚)
      { from: 4, to: 1 },                                        // D-A
      { from: 0, to: 3, hidden: true, color: '#9ca3af' },        // O-C
      { from: 0, to: 4, hidden: true, color: '#9ca3af' },        // O-D
      { from: 5, to: 6 },                                        // A₁-B₁
      { from: 6, to: 7 },                                        // B₁-C₁
      { from: 7, to: 8 },                                        // C₁-D₁
      { from: 8, to: 5 },                                        // D₁-A₁
      { from: 1, to: 5 },                                        // A-A₁
      { from: 2, to: 6 },                                        // B-B₁
      { from: 3, to: 7 },                                        // C-C₁
      { from: 4, to: 8, hidden: true },                          // D-D₁(虚)
      { from: 0, to: 9, color: '#ef4444', strokeWidth: 1.5, arrow: true },
      { from: 0, to: 10, color: '#16a34a', strokeWidth: 1.5, arrow: true },
      { from: 0, to: 11, color: '#2563eb', strokeWidth: 1.5, arrow: true },
    ],
    polygons: [
      { points: [1, 2, 3, 4], fill: '#d97706', opacity: 0.18 },
    ],
    freeLabels: [
      { pos: A, text: 'A', offset: [3, 10], fontSize: 13 },
      { pos: B, text: 'B', offset: [3, 11], fontSize: 13 },
      { pos: C, text: 'C', offset: [5, -2], fontSize: 13 },
      { pos: D, text: 'D', offset: [-12, -2], fontSize: 13 },
      { pos: A1, text: 'A₁', offset: [-12, 8], fontSize: 13 },
      { pos: B1, text: 'B₁', offset: [8, -2], fontSize: 13 },
      { pos: C1, text: 'C₁', offset: [8, -2], fontSize: 13 },
      { pos: D1, text: 'D₁', offset: [-13, -3], fontSize: 13 },
      { pos: xExt, text: 'x', offset: [-8, 8], fontSize: 11, color: '#ef4444' },
      { pos: yExt, text: 'y', offset: [6, 4], fontSize: 11, color: '#16a34a' },
      { pos: zExt, text: 'z', offset: [4, -8], fontSize: 11, color: '#2563eb' },
    ] as DiagramData['freeLabels'],
  };
})();

// 建系示例: 正四棱台（先补成棱锥）
// 底面 ABCD 正方形，顶面 A₁B₁C₁D₁ 较小正方形
// 以底面对角线交点 O 为原点，对角线方向为 x/y 轴，z 轴向上
// 补出棱锥顶点 P（延长侧棱交于一点）
export const frustumPyramidDiagram: DiagramData = (() => {
  const d = 45;     // 底面半对角线
  const dp = 22;    // 顶面半对角线
  const h = 30;     // 棱台高
  const H = h * d / (d - dp);  // 棱锥总高 ≈ 58.3
  // 底面顶点 (array [y_math, x_math, z])
  const O: Point3D = [0, 0, 0];
  const A: Point3D = [0, d, 0];        // x轴正方向(左下)
  const B: Point3D = [d, 0, 0];        // y轴正方向(右)
  const C: Point3D = [0, -d, 0];       // x轴负方向
  const D: Point3D = [-d, 0, 0];       // y轴负方向
  // 顶面顶点
  const A1: Point3D = [0, dp, h];
  const B1: Point3D = [dp, 0, h];
  const C1: Point3D = [0, -dp, h];
  const D1: Point3D = [-dp, 0, h];
  // 棱锥顶点
  const P: Point3D = [0, 0, H];
  // 坐标轴端点
  const xExt: Point3D = [0, 55, 0];    // x轴(左下)
  const yExt: Point3D = [55, 0, 0];    // y轴(右)
  const zExt: Point3D = [0, 0, H + 10];
  const vertices: Point3D[] = [O, A, B, C, D, A1, B1, C1, D1, P, xExt, yExt, zExt];
  // indices: 0=O, 1=A, 2=B, 3=C, 4=D, 5=A₁, 6=B₁, 7=C₁, 8=D₁, 9=P, 10=xExt, 11=yExt, 12=zExt
  return {
    name: '正四棱台建系(补成棱锥)',
    vertices,
    edges: [
      // 底面
      { from: 1, to: 2 },                                        // A-B
      { from: 2, to: 3 },                                        // B-C
      { from: 3, to: 4, hidden: true },                          // C-D(虚)
      { from: 4, to: 1 },                                        // D-A
      // 底面对角线(虚线构造)
      { from: 0, to: 3, hidden: true, color: '#9ca3af' },        // O-C
      { from: 0, to: 4, hidden: true, color: '#9ca3af' },        // O-D
      // 顶面
      { from: 5, to: 6 },                                        // A₁-B₁
      { from: 6, to: 7 },                                        // B₁-C₁
      { from: 7, to: 8 },                                        // C₁-D₁
      { from: 8, to: 5 },                                        // D₁-A₁
      // 侧棱（棱台）
      { from: 1, to: 5 },                                        // A-A₁
      { from: 2, to: 6 },                                        // B-B₁
      { from: 3, to: 7 },                                        // C-C₁
      { from: 4, to: 8, hidden: true },                          // D-D₁(虚)
      // 补成棱锥（延长到P，虚线）
      { from: 5, to: 9, hidden: true, color: '#a78bfa' },        // A₁-P
      { from: 6, to: 9, hidden: true, color: '#a78bfa' },        // B₁-P
      { from: 7, to: 9, hidden: true, color: '#a78bfa' },        // C₁-P
      { from: 8, to: 9, hidden: true, color: '#a78bfa' },        // D₁-P
      // 坐标轴
      { from: 0, to: 10, color: '#ef4444', strokeWidth: 1.5, arrow: true },  // x轴
      { from: 0, to: 11, color: '#16a34a', strokeWidth: 1.5, arrow: true },  // y轴
      { from: 0, to: 12, color: '#2563eb', strokeWidth: 1.5, arrow: true },  // z轴
    ],
    polygons: [
      { points: [1, 2, 3, 4], fill: '#d97706', opacity: 0.18 },  // 底面
    ],
    freeLabels: [
      { pos: A, text: 'A', offset: [3, 10], fontSize: 13 },
      { pos: B, text: 'B', offset: [3, 11], fontSize: 13 },
      { pos: C, text: 'C', offset: [5, -2], fontSize: 13 },
      { pos: D, text: 'D', offset: [-12, -2], fontSize: 13 },
      { pos: A1, text: 'A₁', offset: [-12, 8], fontSize: 13 },
      { pos: B1, text: 'B₁', offset: [8, -2], fontSize: 13 },
      { pos: C1, text: 'C₁', offset: [8, -2], fontSize: 13 },
      { pos: D1, text: 'D₁', offset: [-13, -3], fontSize: 13 },
      { pos: P, text: 'P', offset: [-11, 1], fontSize: 13, color: '#7c3aed' },
      { pos: xExt, text: 'x', offset: [-8, 8], fontSize: 11, color: '#ef4444' },
      { pos: yExt, text: 'y', offset: [6, 4], fontSize: 11, color: '#16a34a' },
      { pos: zExt, text: 'z', offset: [4, -8], fontSize: 11, color: '#2563eb' },
    ] as DiagramData['freeLabels'],
  };
})();

// ─── 法向量 ──────────────────────────────────────────────────

// 法向量示意图: 平面α + 法向量n垂直于平面
export const normalVectorDiagram: DiagramData = {
  name: '法向量示意图',
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
      { from: 0, to: 1, color: '#16a34a', strokeWidth: 2 },   // OA (y轴, 绿)
      { from: 0, to: 2, color: '#ef4444', strokeWidth: 2 },   // OB (x轴, 红)
      { from: 0, to: 3, color: '#2563eb', strokeWidth: 2 },   // OC (z轴, 蓝)
      // 轴延伸段（带箭头）
      { from: 1, to: 4, color: '#16a34a', strokeWidth: 1.5, arrow: true },
      { from: 2, to: 5, color: '#ef4444', strokeWidth: 1.5, arrow: true },
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
      { pos: [115, 0, 0], text: 'y', offset: [8, 6], color: '#16a34a' },
      { pos: [0, 115, 0], text: 'x', offset: [-9, 9], color: '#ef4444' },
      { pos: [0, 0, 115], text: 'z', offset: [0, -11], color: '#2563eb' },
    ],
  };
})();

// 求法向量套路示意图: 平面α + 法向量n + 平面内两个向量a,b
export const normalVectorMethodDiagram: DiagramData = {
  name: '求法向量套路',
  vertices: [
    [-44, -35, 7],   // 0: 平面左后
    [54, -35, 7],    // 1: 平面右后
    [61, 35, -11],   // 2: 平面右前
    [-47, 35, -12],  // 3: 平面左前
    [0, 0, 0],       // 4: 中心点
    [0, 0, 55],      // 5: 法向量n端点（垂直向上）
    [33, -10, -1],   // 6: 向量u端点（平面内偏右）
    [-13, 30, -2],   // 7: 向量v端点（平面内偏左前）
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
    name: '证平行例题原图',
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
      { pos: [0, 0, 0], text: 'A', offset: [-10, -4] },
      { pos: [len, 0, 0], text: 'B', offset: [6, 8] },
      { pos: [len, len, 0], text: 'C', offset: [8, 4] },
      { pos: [0, len, 0], text: 'D', offset: [-14, 4] },
      { pos: [0, 0, len], text: 'A₁', offset: [-18, 0] },
      { pos: [len, 0, len], text: 'B₁', offset: [13, -5] },
      { pos: [len, len, len], text: 'C₁', offset: [13, 4] },
      { pos: [0, len, len], text: 'D₁', offset: [-18, 0] },
      { pos: [len/2, 0, 0], text: 'E', offset: [-3, -8], color: '#9333ea' },
      { pos: [len/2, len, 0], text: 'F', offset: [-9, 13], color: '#9333ea' },
    ],
  };
})();

// 证平行例题：建系后的图（带坐标轴）
export const parallelCubeDiagram: DiagramData = (() => {
  const len = 60;
  // 延伸点坐标 (参考 cuboidCoordSystemDiagram 的写法)
  const xExt: Point3D = [105, 0, 0];
  const yExt: Point3D = [0, 105, 0];
  const zExt: Point3D = [0, 0, 105];
  return {
    name: '证平行例题建系',
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
      { pos: [0, 0, len], text: 'A₁', offset: [-12, -6] },
      { pos: [len, 0, len], text: 'B₁', offset: [10, -8] },
      { pos: [len, len, len], text: 'C₁', offset: [-6, -10] },
      { pos: [0, len, len], text: 'D₁', offset: [-15, 0] },
      { pos: [len/2, 0, 0], text: 'E', offset: [-3, -7], color: '#9333ea' },
      { pos: [len/2, len, 0], text: 'F', offset: [-6, 14], color: '#9333ea' },
      { pos: xExt, text: 'x', offset: [8, 4], color: '#ef4444' },
      { pos: yExt, text: 'y', offset: [-10, 9], color: '#16a34a' },
      { pos: zExt, text: 'z', offset: [-12, 0], color: '#2563eb' },
    ],
  };
})();

// 证平行例题(1)：EF ∥ AD 示意图（高亮 EF 和 AD）
export const parallelLineLineDiagram: DiagramData = (() => {
  const len = 60;
  return {
    name: '线∥线：EF∥AD',
    vertices: [
      [0, 0, 0], [len, 0, 0], [len, len, 0], [0, len, 0],           // 0-3: A B C D
      [0, 0, len], [len, 0, len], [len, len, len], [0, len, len],   // 4-7: A₁ B₁ C₁ D₁
      [len/2, 0, 0], [len/2, len, 0],                               // 8-9: E F
    ],
    edges: [
      { from: 0, to: 1, color: '#334155', strokeWidth: 1.5 },
      { from: 1, to: 2, color: '#334155', strokeWidth: 1.5 },
      { from: 2, to: 3, color: '#334155', strokeWidth: 1.5 },
      { from: 3, to: 0, color: '#ef4444', strokeWidth: 2.5 },  // AD 红色高亮
      { from: 4, to: 5, color: '#334155', strokeWidth: 1.5 },
      { from: 5, to: 6, color: '#334155', strokeWidth: 1.5 },
      { from: 6, to: 7, color: '#334155', strokeWidth: 1.5 },
      { from: 7, to: 4, color: '#334155', strokeWidth: 1.5 },
      { from: 0, to: 4, color: '#334155', strokeWidth: 1.5 },
      { from: 1, to: 5, color: '#334155', strokeWidth: 1.5 },
      { from: 2, to: 6, color: '#334155', strokeWidth: 1.5 },
      { from: 3, to: 7, color: '#334155', strokeWidth: 1.5 },
      { from: 8, to: 9, color: '#9333ea', strokeWidth: 2.5 },  // EF 紫色高亮
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
    ],
  };
})();

// 证平行例题(2)：EF ∥ 面 ADD₁A₁ 示意图
export const parallelLinePlaneDiagram: DiagramData = (() => {
  const len = 60;
  return {
    name: '线∥面：EF∥面ADD₁A₁',
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
    name: '面∥面：A₁B₁C₁D₁∥ABCD',
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
    name: '纯净正方体',
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
    name: '证垂直例题建系',
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

// 证垂直例题(1)：AC ⊥ BD（高亮 AC 蓝色、BD 红色，无坐标轴）
export const perpLineLineDiagram: DiagramData = (() => {
  const len = 60;
  return {
    name: '线⊥线：AC⊥BD',
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
      { from: 0, to: 2, color: '#2563eb', strokeWidth: 2.5 },  // AC 蓝色
      { from: 1, to: 3, color: '#dc2626', strokeWidth: 2.5 },  // BD 红色
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

// 证垂直例题(2)：AA₁ ⊥ 面 ABCD（高亮AA₁和底面）
export const perpLinePlaneDiagram: DiagramData = (() => {
  const len = 60;
  return {
    name: '线⊥面：AA₁⊥面ABCD',
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
    name: '面⊥面：ACC₁A₁⊥BDD₁B₁',
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
    name: '线线角：AC与A₁D',
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
    name: '线面角：A₁C与底面ABCD',
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
    name: '二面角：A-BD-A₁',
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
    name: '点A₁到底面ABCD',
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
    name: '点A₁到平面BDC₁',
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
