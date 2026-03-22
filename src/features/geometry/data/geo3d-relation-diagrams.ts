import type { DiagramData } from '@/components/shared/Geo3dSvg';

export const lpParallelDetDiagram: DiagramData = {
  // 线面平行判定: a∥b, b⊂α, a⊄α → a∥α
  vertices: [
    [-50, -25, 0], [50, -25, 0], [60, 30, 0], [-40, 30, 0],
    [-25, 5, 0], [35, 5, 0],
    [-25, 5, 30], [35, 5, 30],
  ],
  edges: [
    { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 0 },
    { from: 4, to: 5 }, { from: 6, to: 7 },
  ],
  polygons: [
    { points: [0, 1, 2, 3], fill: '#93c5fd', opacity: 0.2 },
  ],
  freeLabels: [
    { pos: [35, 5, 30], text: 'a', offset: [12, 0] },
    { pos: [35, 5, 0], text: 'b', offset: [12, 0] },
    { pos: [60, 30, 0], text: 'β', offset: [8, 2] },
  ],
};

export const lpParallelPropDiagram: DiagramData = {
  // 定理②: a ⊥ n, n ⊥ β → a ∥ β
  // β 是水平面，n 是β的垂线（竖直），a 在β外且垂直于 n
  vertices: [
    // β (水平面, z=0)
    [-55, -30, 0], [55, -30, 0], [65, 35, 0], [-45, 35, 0],   // 0-3
    // n (β 的垂线, 竖直方向)
    [5, 5, 55], [5, 5, 0], [5, 5, -20],                         // 4(top), 5(foot on β), 6(below)
    // a (在β外, 水平方向, 垂直于 n)
    [-35, 5, 35], [45, 5, 35],                                   // 7-8
  ],
  edges: [
    // β 的边框
    { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 0 },
    // n (垂线, 紫色)
    { from: 4, to: 5, color: '#9333ea', strokeWidth: 2 },
    { from: 5, to: 6, color: '#9333ea', strokeWidth: 2, hidden: true },
    // a (蓝色粗线)
    { from: 7, to: 8, color: '#2563eb', strokeWidth: 2.5 },
  ],
  polygons: [
    { points: [0, 1, 2, 3], fill: '#93c5fd', opacity: 0.18 },
  ],
  freeLabels: [
    { pos: [45, 5, 35], text: 'a', offset: [12, 0], color: '#2563eb' },
    { pos: [5, 5, 55], text: 'n', offset: [12, -2], color: '#9333ea' },
    { pos: [65, 35, 0], text: 'β', offset: [8, 2] },
  ],
};

export const ppParallelDetDiagram: DiagramData = {
  // 面面平行判定: a⊂α, b⊂α, a∩b=P, a∥β, b∥β → α∥β
  vertices: [
    [-50, -25, 35], [50, -25, 35], [60, 30, 35], [-40, 30, 35],
    [-50, -25, -5], [50, -25, -5], [60, 30, -5], [-40, 30, -5],
    [-10, 5, 35], [35, -10, 35], [-10, 5, 35], [20, 25, 35],
  ],
  edges: [
    { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 0 },
    { from: 4, to: 5 }, { from: 5, to: 6 }, { from: 6, to: 7 }, { from: 7, to: 4 },
    { from: 8, to: 9 }, { from: 10, to: 11 },
  ],
  polygons: [
    { points: [0, 1, 2, 3], fill: '#93c5fd', opacity: 0.2 },
    { points: [4, 5, 6, 7], fill: '#86efac', opacity: 0.2 },
  ],
  freeLabels: [
    { pos: [35, -10, 35], text: 'a', offset: [10, 0] },
    { pos: [20, 25, 35], text: 'b', offset: [10, 0] },
    { pos: [60, 30, 35], text: 'β', offset: [8, 2] },
    { pos: [60, 30, -5], text: 'γ', offset: [8, 2] },
  ],
};

export const ppParallelPropDiagram: DiagramData = {
  // 面面平行性质: α∥β, γ∩α=a, γ∩β=b → a∥b
  vertices: [
    [-50, -20, 30], [50, -20, 30], [60, 25, 30], [-40, 25, 30],
    [-50, -20, -10], [50, -20, -10], [60, 25, -10], [-40, 25, -10],
    [-30, 0, 30], [40, 0, 30],
    [-30, 0, -10], [40, 0, -10],
  ],
  edges: [
    { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 0 },
    { from: 4, to: 5 }, { from: 5, to: 6 }, { from: 6, to: 7 }, { from: 7, to: 4 },
    { from: 8, to: 9 }, { from: 10, to: 11 },
    { from: 8, to: 10 }, { from: 9, to: 11 },
  ],
  polygons: [
    { points: [0, 1, 2, 3], fill: '#93c5fd', opacity: 0.15 },
    { points: [4, 5, 6, 7], fill: '#86efac', opacity: 0.15 },
    { points: [8, 9, 11, 10], fill: '#fde68a', opacity: 0.15 },
  ],
  freeLabels: [
    { pos: [40, 0, 30], text: 'a', offset: [12, 0] },
    { pos: [40, 0, -10], text: 'b', offset: [12, 0] },
    { pos: [60, 25, 30], text: 'β', offset: [8, 2] },
    { pos: [60, 25, -10], text: 'γ', offset: [8, 2] },
    { pos: [-30, 0, -10], text: 'δ', offset: [-14, 0] },
  ],
};

export const lpPerpDetDiagram: DiagramData = {
  // 线面垂直判定: l⊥m, l⊥n, m∩n=O, m,n⊂β → l⊥β
  // 简洁画法: 面 β, l 从 O 竖直向上, m/n 在面上交于 O
  vertices: [
    // β (水平面, 宽大)
    [-60, -35, 0], [60, -35, 0], [75, 40, 0], [-45, 40, 0],   // 0-3
    // O (交点, 偏左让出空间)
    [0, 0, 0],                                                    // 4
    // m (面内线, 左右方向, 过 O)
    [-45, 0, 0], [45, 0, 0],                                      // 5-6
    // n (面内线, 斜方向, 过 O — 用 x+y 斜线投影更清晰)
    [-25, -25, 0], [25, 25, 0],                                   // 7-8
    // l (竖直线, 从 O 向上, 高一些)
    [0, 0, 65],                                                    // 9
  ],
  edges: [
    // β 边框
    { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 0 },
    // m (蓝色)
    { from: 5, to: 6, color: '#2563eb', strokeWidth: 2 },
    // n (蓝色)
    { from: 7, to: 8, color: '#2563eb', strokeWidth: 2 },
    // l (紫色, 竖直, 更粗)
    { from: 4, to: 9, color: '#9333ea', strokeWidth: 3 },
  ],
  polygons: [
    { points: [0, 1, 2, 3], fill: '#c4b5fd', opacity: 0.15 },
  ],
  freeLabels: [
    { pos: [0, 0, 65], text: 'l', offset: [10, -4], fontSize: 24, color: '#9333ea' },
    { pos: [45, 0, 0], text: 'm', offset: [12, 0], fontSize: 22, color: '#2563eb' },
    { pos: [25, 25, 0], text: 'n', offset: [12, 0], fontSize: 22, color: '#2563eb' },
    { pos: [75, 40, 0], text: 'β', offset: [8, 2], fontSize: 22 },
  ],
};

export const lpPerpPropDiagram: DiagramData = {
  // 线面垂直性质: a⊥β, b⊥β → a∥b
  // 大平面 β, 两条平行的竖直线 a/b 插在面上
  vertices: [
    // β (水平面)
    [-55, -30, 0], [55, -30, 0], [65, 35, 0], [-45, 35, 0],   // 0-3
    // a (竖直线, 左侧)
    [-15, 0, 0], [-15, 0, 50],                                   // 4-5
    // b (竖直线, 右侧, 和 a 平行)
    [25, 12, 0], [25, 12, 50],                                   // 6-7
  ],
  edges: [
    // β 边框
    { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 0 },
    // a (绿色竖直)
    { from: 4, to: 5, color: '#16a34a', strokeWidth: 2.5 },
    // b (绿色竖直)
    { from: 6, to: 7, color: '#16a34a', strokeWidth: 2.5 },
  ],
  polygons: [
    { points: [0, 1, 2, 3], fill: '#86efac', opacity: 0.18 },
  ],
  freeLabels: [
    { pos: [-15, 0, 50], text: 'a', offset: [-14, -4], color: '#16a34a' },
    { pos: [25, 12, 50], text: 'b', offset: [12, -4], color: '#16a34a' },
    { pos: [65, 35, 0], text: 'β', offset: [8, 2] },
  ],
};

// 性质1: l⊥β → l⊥a (a⊂β)
// 面 β, 竖直线 l, 面内线 a, 显示 l⊥a
export const lpPerpProp1Diagram: DiagramData = {
  vertices: [
    // β (水平面)
    [-55, -30, 0], [55, -30, 0], [65, 35, 0], [-45, 35, 0],   // 0-3
    // l 的底端 (垂足 O)
    [0, 0, 0],                                                    // 4
    // l 的顶端
    [0, 0, 55],                                                   // 5
    // a (面内线, 过 O)
    [-40, -15, 0], [40, 15, 0],                                   // 6-7
  ],
  edges: [
    { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 0 },
    // l (紫色竖直)
    { from: 4, to: 5, color: '#9333ea', strokeWidth: 3 },
    // a (蓝色, 面内)
    { from: 6, to: 7, color: '#2563eb', strokeWidth: 2 },
  ],
  polygons: [
    { points: [0, 1, 2, 3], fill: '#c4b5fd', opacity: 0.15 },
  ],
  freeLabels: [
    { pos: [0, 0, 55], text: 'l', offset: [10, -4], color: '#9333ea' },
    { pos: [40, 15, 0], text: 'a', offset: [12, 0], color: '#2563eb' },
    { pos: [65, 35, 0], text: 'β', offset: [8, 2] },
  ],
};

// 性质2: 过一点有且只有一条垂线
// 面 β, 点 P 在面上方, 一条垂线从 P 到面
export const lpPerpProp2Diagram: DiagramData = {
  vertices: [
    // β (水平面)
    [-55, -30, 0], [55, -30, 0], [65, 35, 0], [-45, 35, 0],   // 0-3
    // 垂足
    [0, 0, 0],                                                    // 4
    // P (上方点)
    [0, 0, 55],                                                   // 5
  ],
  edges: [
    { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 0 },
    // 垂线 (紫色)
    { from: 4, to: 5, color: '#9333ea', strokeWidth: 3 },
  ],
  polygons: [
    { points: [0, 1, 2, 3], fill: '#c4b5fd', opacity: 0.15 },
  ],
  freeLabels: [
    { pos: [0, 0, 55], text: 'P', offset: [10, -6], color: '#9333ea' },
    { pos: [65, 35, 0], text: 'β', offset: [8, 2] },
  ],
};

// 性质3: a∥b, a⊥β → b⊥β
// 面 β, 线 a 垂直于面(已知,紫色), 线 b 平行于 a(结论,蓝色)
export const lpPerpProp3Diagram: DiagramData = {
  vertices: [
    // β (水平面)
    [-55, -30, 0], [55, -30, 0], [65, 35, 0], [-45, 35, 0],   // 0-3
    // a (竖直线, 左侧, 已知⊥β)
    [-15, 0, 0], [-15, 0, 50],                                   // 4-5
    // b (竖直线, 右侧, 平行于 a)
    [25, 12, 0], [25, 12, 50],                                   // 6-7
  ],
  edges: [
    { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 0 },
    // a (紫色, 已知⊥β)
    { from: 4, to: 5, color: '#9333ea', strokeWidth: 2.5 },
    // b (蓝色, 结论也⊥β)
    { from: 6, to: 7, color: '#2563eb', strokeWidth: 2.5 },
  ],
  polygons: [
    { points: [0, 1, 2, 3], fill: '#c4b5fd', opacity: 0.15 },
  ],
  freeLabels: [
    { pos: [-15, 0, 50], text: 'a', offset: [-14, -4], color: '#9333ea' },
    { pos: [25, 12, 50], text: 'b', offset: [12, -4], color: '#2563eb' },
    { pos: [65, 35, 0], text: 'β', offset: [8, 2] },
  ],
};

export const ppPerpDetDiagram: DiagramData = {
  // 面面垂直判定: l⊥α, l⊂β → α⊥β
  vertices: [
    [-40, -30, 0], [40, -30, 0], [40, 30, 0], [-40, 30, 0],
    [-40, 0, 0], [40, 0, 0],
    [-40, 0, 45], [40, 0, 45],
    [0, 0, 0], [0, 0, 45],
  ],
  edges: [
    { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 0 },
    { from: 4, to: 6 }, { from: 5, to: 7 }, { from: 6, to: 7 },
    { from: 8, to: 9 },
  ],
  polygons: [
    { points: [0, 1, 2, 3], fill: '#93c5fd', opacity: 0.15 },
    { points: [4, 5, 7, 6], fill: '#86efac', opacity: 0.15 },
  ],
  freeLabels: [
    { pos: [0, 0, 45], text: 'l', offset: [10, -4] },
    { pos: [40, -30, 0], text: 'β', offset: [8, 2] },
    { pos: [40, 0, 45], text: 'γ', offset: [10, 0] },
  ],
};

export const ppPerpPropDiagram: DiagramData = {
  // 面面垂直性质: α⊥β, α∩β=l, a⊂α, a⊥l → a⊥β
  vertices: [
    [-40, -30, 0], [40, -30, 0], [40, 30, 0], [-40, 30, 0],
    [-40, 0, 0], [40, 0, 0],
    [-40, 0, 45], [40, 0, 45],
    [0, 0, 0], [0, 0, 35],
  ],
  edges: [
    { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 0 },
    { from: 4, to: 5 },
    { from: 4, to: 6 }, { from: 5, to: 7 }, { from: 6, to: 7 },
    { from: 8, to: 9 },
  ],
  polygons: [
    { points: [0, 1, 2, 3], fill: '#86efac', opacity: 0.15 },
    { points: [4, 5, 7, 6], fill: '#93c5fd', opacity: 0.15 },
  ],
  freeLabels: [
    { pos: [0, 0, 35], text: 'a', offset: [10, 0] },
    { pos: [40, 0, 0], text: 'l', offset: [10, 0] },
    { pos: [40, 0, 45], text: 'β', offset: [10, 0] },
    { pos: [40, -30, 0], text: 'γ', offset: [8, 2] },
  ],
};
