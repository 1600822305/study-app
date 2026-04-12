import type { DiagramData, Point3D } from '@/components/shared/Geo3dSvg';

// 高考风格：纯黑线、无填充、隐藏棱虚线
const S = '#1e293b';  // 实线色
const W = 1.4;        // 实线宽

// 训练题1：四棱锥 P-ABCD（PA⊥底面，底面正方形）
export const practicePyramidDiagram: DiagramData = (() => {
  const s = 55;
  const h = 70;
  const P: Point3D = [0, 0, h];
  const A: Point3D = [0, 0, 0];
  const B: Point3D = [s, 0, 0];
  const C: Point3D = [s, s, 0];
  const D: Point3D = [0, s, 0];
  return {
    name: '训练题1：四棱锥P-ABCD',
    vertices: [A, B, C, D, P],
    edges: [
      // 底面（全部实线，底面可见）
      { from: 0, to: 1, color: S, strokeWidth: W },  // AB
      { from: 1, to: 2, color: S, strokeWidth: W },  // BC
      { from: 2, to: 3, color: S, strokeWidth: W },  // CD
      { from: 3, to: 0, color: S, strokeWidth: W },  // DA
      // 侧棱
      { from: 4, to: 0, color: S, strokeWidth: W },  // PA
      { from: 4, to: 1, color: S, strokeWidth: W },  // PB
      { from: 4, to: 2, color: S, strokeWidth: W, dash: true }, // PC 隐藏
      { from: 4, to: 3, color: S, strokeWidth: W },  // PD
    ],
    polygons: [],
    freeLabels: [
      { pos: A, text: 'A', offset: [-11, -5] },
      { pos: B, text: 'B', offset: [6, 8] },
      { pos: C, text: 'C', offset: [1, 10] },
      { pos: D, text: 'D', offset: [-13, 0] },
      { pos: P, text: 'P', offset: [-8, -10] },
    ],
  };
})();

// 训练题2：四棱锥 P-ABCD + E 为 PC 中点
export const practicePyramidMidDiagram: DiagramData = (() => {
  const s = 55;
  const h = 70;
  const P: Point3D = [0, 0, h];
  const A: Point3D = [0, 0, 0];
  const B: Point3D = [s, 0, 0];
  const C: Point3D = [s, s, 0];
  const D: Point3D = [0, s, 0];
  const E: Point3D = [s / 2, s / 2, h / 2]; // PC 中点
  return {
    name: '训练题2：四棱锥+E中点',
    vertices: [A, B, C, D, P, E],
    edges: [
      // 底面
      { from: 0, to: 1, color: S, strokeWidth: W },
      { from: 1, to: 2, color: S, strokeWidth: W },
      { from: 2, to: 3, color: S, strokeWidth: W },
      { from: 3, to: 0, color: S, strokeWidth: W },
      // 侧棱
      { from: 4, to: 0, color: S, strokeWidth: W },
      { from: 4, to: 1, color: S, strokeWidth: W },
      { from: 4, to: 5, color: S, strokeWidth: W, dash: true }, // PE 隐藏
      { from: 5, to: 2, color: S, strokeWidth: W, dash: true }, // EC 隐藏
      { from: 4, to: 3, color: S, strokeWidth: W },
    ],
    polygons: [],
    freeLabels: [
      { pos: A, text: 'A', offset: [9, -8] },
      { pos: B, text: 'B', offset: [7, 6] },
      { pos: C, text: 'C', offset: [1, 10] },
      { pos: D, text: 'D', offset: [-12, 9] },
      { pos: P, text: 'P', offset: [-6, -5] },
      { pos: E, text: 'E', offset: [7, -2], dot: S },
    ],
  };
})();

// 训练题3：正方体 ABCD-A₁B₁C₁D₁ + E 为 DD₁ 中点
// 隐藏棱：AD、DC、DE、ED₁（D 是背面角点，三条棱虚线）
export const practiceCubeMidDiagram: DiagramData = (() => {
  const len = 55;
  const E: Point3D = [0, len, len / 2]; // DD₁ 中点
  return {
    name: '训练题3：正方体+E中点',
    vertices: [
      [0, 0, 0], [len, 0, 0], [len, len, 0], [0, len, 0],           // 0-3: A B C D
      [0, 0, len], [len, 0, len], [len, len, len], [0, len, len],   // 4-7: A₁ B₁ C₁ D₁
      E,                                                              // 8: E
    ],
    edges: [
      // 底面
      { from: 0, to: 1, color: S, strokeWidth: W },               // AB 实线
      { from: 1, to: 2, color: S, strokeWidth: W },               // BC 实线
      { from: 2, to: 3, color: S, strokeWidth: W, dash: true },   // CD 隐藏
      { from: 3, to: 0, color: S, strokeWidth: W, dash: true },   // DA 隐藏
      // 顶面
      { from: 4, to: 5, color: S, strokeWidth: W },               // A₁B₁
      { from: 5, to: 6, color: S, strokeWidth: W },               // B₁C₁
      { from: 6, to: 7, color: S, strokeWidth: W },               // C₁D₁
      { from: 7, to: 4, color: S, strokeWidth: W },               // D₁A₁
      // 侧棱
      { from: 0, to: 4, color: S, strokeWidth: W },               // AA₁ 实线
      { from: 1, to: 5, color: S, strokeWidth: W },               // BB₁ 实线
      { from: 2, to: 6, color: S, strokeWidth: W },               // CC₁ 实线
      // DD₁ 拆为 DE + ED₁（隐藏）
      { from: 3, to: 8, color: S, strokeWidth: W, dash: true },   // DE 隐藏
      { from: 8, to: 7, color: S, strokeWidth: W, dash: true },   // ED₁ 隐藏
    ],
    polygons: [],
    freeLabels: [
      { pos: [0, 0, 0], text: 'A', offset: [8, -8] },
      { pos: [len, 0, 0], text: 'B', offset: [8, 3] },
      { pos: [len, len, 0], text: 'C', offset: [1, 10] },
      { pos: [0, len, 0], text: 'D', offset: [-12, 11] },
      { pos: [0, 0, len], text: 'A\u2081', offset: [-9, -9] },
      { pos: [len, 0, len], text: 'B\u2081', offset: [10, -8] },
      { pos: [len, len, len], text: 'C\u2081', offset: [-7, -8] },
      { pos: [0, len, len], text: 'D\u2081', offset: [-13, -2] },
      { pos: E, text: 'E', offset: [-16, 4], dot: S },
    ],
  };
})();

// 训练题4：三棱柱 ABC-A₁B₁C₁ + E(AA₁中点) + F(CC₁中点)
// 隐藏棱：AC(底面对角被挡), A₁C₁(顶面对角被挡) — 实际无对角线，只有棱
// 三棱柱隐藏棱：BC(底面后棱), B₁C₁(顶面后棱), CC₁(后侧棱)
export const practicePrismDiagram: DiagramData = (() => {
  const len = 55;
  const h = 60;
  // B 在原点，A 沿 x，C 沿 y，BB₁ 沿 z
  const B: Point3D = [0, 0, 0];
  const A: Point3D = [len, 0, 0];
  const C: Point3D = [0, len, 0];
  const B1: Point3D = [0, 0, h];
  const A1: Point3D = [len, 0, h];
  const C1: Point3D = [0, len, h];
  const E: Point3D = [len, 0, h / 2];     // AA₁ 中点
  const F: Point3D = [0, len, h / 2];     // CC₁ 中点
  return {
    name: '训练题4：三棱柱+E+F中点',
    vertices: [B, A, C, B1, A1, C1, E, F], // 0-5: B A C B₁ A₁ C₁, 6: E, 7: F
    edges: [
      // 底面
      { from: 0, to: 1, color: S, strokeWidth: W },               // BA
      { from: 1, to: 2, color: S, strokeWidth: W },               // AC
      { from: 2, to: 0, color: S, strokeWidth: W, dash: true },   // CB 隐藏
      // 顶面
      { from: 3, to: 4, color: S, strokeWidth: W },               // B₁A₁
      { from: 4, to: 5, color: S, strokeWidth: W },               // A₁C₁
      { from: 5, to: 3, color: S, strokeWidth: W, dash: true },   // C₁B₁ 隐藏
      // 侧棱
      { from: 0, to: 3, color: S, strokeWidth: W },               // BB₁
      { from: 1, to: 4, color: S, strokeWidth: W },               // AA₁ (拆为 AE + EA₁)
      { from: 2, to: 5, color: S, strokeWidth: W, dash: true },   // CC₁ 隐藏 (拆为 CF + FC₁)
    ],
    polygons: [],
    freeLabels: [
      { pos: B, text: 'B', offset: [9, -7] },
      { pos: A, text: 'A', offset: [6, 8] },
      { pos: C, text: 'C', offset: [-12, 8] },
      { pos: B1, text: 'B\u2081', offset: [11, -7] },
      { pos: A1, text: 'A\u2081', offset: [10, -8] },
      { pos: C1, text: 'C\u2081', offset: [-14, -2] },
      { pos: E, text: 'E', offset: [8, 0], dot: S },
      { pos: F, text: 'F', offset: [-14, 0], dot: S },
    ],
  };
})();
