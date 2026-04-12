import type { Diagram2DData } from '@/components/shared/Geo2dSvg';

// ═══════════════════════════════════════════════════════
// Geo2dSvg 数据
// ═══════════════════════════════════════════════════════

/** 图: 数形结合法-抛物线 y=(x-1)²+2 在 [0,3] */
export const parabolaRangeDiagram: Diagram2DData = {
  coordinateSystem: { origin: [25, 110], scale: [35, -15] },
  axes: { xRange: [-0.5, 3.8], yRange: [-0.5, 7.5], xTicks: [0, 3], yTicks: [2, 3, 6] },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [
    { pos: [1, 7.2], text: 'x=1', offset: [0, 8], fontSize: 10 },
    { pos: [0, 3], dot: '#dc2626' },
    { pos: [1, 2], dot: '#dc2626' },
    { pos: [3, 6], dot: '#dc2626' },
  ],
  paths: [
    { d: `M ${25 + 1 * 35} ${110} L ${25 + 1 * 35} ${110 + 7 * (-15)}`, color: '#38bdf8', strokeWidth: 1, dashed: true },
  ],
  functions: [
    { fn: (x: number) => (x - 1) ** 2 + 2, xRange: [0, 3], color: '#dc2626', strokeWidth: 2 },
    { fn: () => 2, xRange: [0, 1], color: '#38bdf8', strokeWidth: 1, dashed: true },
    { fn: () => 6, xRange: [0, 3], color: '#38bdf8', strokeWidth: 1, dashed: true },
  ],
};

/** 图: 数形结合法-反比例 y=2/x 在 [1,4] */
export const inverseRangeDiagram: Diagram2DData = {
  coordinateSystem: { origin: [15, 90], scale: [28, -35] },
  axes: { xRange: [-0.3, 4.8], yRange: [-0.3, 2.5], xTicks: [1, 4], yTicks: [0.5, 1, 2] },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [
    { pos: [1, 2], dot: '#dc2626' },
    { pos: [4, 0.5], dot: '#dc2626' },
  ],
  functions: [
    { fn: (x: number) => 2 / x, xRange: [1, 4], color: '#dc2626', strokeWidth: 2 },
  ],
};

/** 图: 单调递增示意（类似 √x 曲线） */
export const monotonicIncDiagram: Diagram2DData = {
  coordinateSystem: { origin: [35, 90], scale: [22, -14] },
  axes: { xRange: [-0.3, 4.5], yRange: [-0.3, 5], showNumbers: false, xTicks: [], yTicks: [] },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [],
  functions: [
    { fn: (x: number) => 1.8 * Math.sqrt(x) + 0.3, xRange: [0.05, 4.2], color: '#3b82f6', strokeWidth: 2.5 },
  ],
};

/** 图: 单调递减示意（类似 1/x 曲线） */
export const monotonicDecDiagram: Diagram2DData = {
  coordinateSystem: { origin: [35, 90], scale: [22, -14] },
  axes: { xRange: [-0.3, 4.5], yRange: [-0.3, 5], showNumbers: false, xTicks: [], yTicks: [] },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [],
  functions: [
    { fn: (x: number) => 3.5 / (x + 0.5) + 0.2, xRange: [0.05, 4.2], color: '#3b82f6', strokeWidth: 2.5 },
  ],
};

/** 图: 先增后减示意（抛物线，有增有减区间） */
export const monotonicMixDiagram: Diagram2DData = {
  coordinateSystem: { origin: [35, 90], scale: [22, -14] },
  axes: { xRange: [-0.3, 4.5], yRange: [-0.3, 5], showNumbers: false, xTicks: [], yTicks: [] },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [],
  functions: [
    { fn: (x: number) => -(x - 2.2) * (x - 2.2) + 4.2, xRange: [0.05, 4.2], color: '#3b82f6', strokeWidth: 2.5 },
  ],
};

/** 图: 不单调示意（两个不同 x 对应同一个 y，中间拐弯） */
export const notMonotonicDiagram: Diagram2DData = {
  coordinateSystem: { origin: [35, 82], scale: [16, -11] },
  axes: { xRange: [-0.3, 5], yRange: [-0.3, 5.5], showNumbers: false, xTicks: [], yTicks: [] },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [
    { pos: [1, -0.6], text: 'x₁', fontSize: 9 },
    { pos: [3.5, -0.6], text: 'x₂', fontSize: 9 },
    { pos: [-0.6, 2.5], text: 'y', fontSize: 9 },
    { pos: [1, 2.5], dot: '#dc2626' },
    { pos: [3.5, 2.5], dot: '#dc2626' },
  ],
  paths: [
    { d: `M ${35 + 1 * 16} ${82} L ${35 + 1 * 16} ${82 + 2.5 * (-11)}`, color: '#94a3b8', strokeWidth: 0.8, dashed: true },
    { d: `M ${35 + 3.5 * 16} ${82} L ${35 + 3.5 * 16} ${82 + 2.5 * (-11)}`, color: '#94a3b8', strokeWidth: 0.8, dashed: true },
    { d: `M ${35} ${82 + 2.5 * (-11)} L ${35 + 3.5 * 16} ${82 + 2.5 * (-11)}`, color: '#94a3b8', strokeWidth: 0.8, dashed: true },
  ],
  functions: [
    { fn: (x: number) => -1.28 * (x - 2.25) * (x - 2.25) + 4.5, xRange: [0.3, 4.2], color: '#3b82f6', strokeWidth: 2 },
  ],
};

/** 图①: 有起伏的曲线（非单调） */
export const monoQuiz1: Diagram2DData = {
  coordinateSystem: { origin: [30, 65], scale: [14, -10] },
  axes: { xRange: [-1.5, 5], yRange: [-1.5, 6], showNumbers: false, xTicks: [], yTicks: [] },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [],
  paths: [
    { d: `M ${30 + 2 * 14} ${65} L ${30 + 2 * 14} ${65 + 6 * (-10)}`, color: '#94a3b8', strokeWidth: 0.6, dashed: true },
  ],
  functions: [
    { fn: (x: number) => 0.15 * (x + 1) * (x - 1.5) * (x - 3.5) + 3, xRange: [-1.2, 4.5], color: '#334155', strokeWidth: 2 },
  ],
};

/** 图②: 光滑递增 S 曲线（R 上增函数） */
export const monoQuiz2: Diagram2DData = {
  coordinateSystem: { origin: [30, 65], scale: [14, -10] },
  axes: { xRange: [-1.5, 5], yRange: [-1.5, 6], showNumbers: false, xTicks: [], yTicks: [] },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [],
  paths: [
    { d: `M ${30 + 2 * 14} ${65} L ${30 + 2 * 14} ${65 + 6 * (-10)}`, color: '#94a3b8', strokeWidth: 0.6, dashed: true },
  ],
  functions: [
    { fn: (x: number) => 0.08 * x * x * x + 2, xRange: [-1.2, 4.2], color: '#334155', strokeWidth: 2 },
  ],
};

/** 图③: 有跳跃间断点的曲线（不连续） */
export const monoQuiz3: Diagram2DData = {
  coordinateSystem: { origin: [30, 65], scale: [14, -10] },
  axes: { xRange: [-1.5, 5], yRange: [-1.5, 6], showNumbers: false, xTicks: [], yTicks: [] },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [
    { pos: [2, 2.8], text: '○', fontSize: 9 },
    { pos: [2, 2.1], dot: '#334155' },
  ],
  paths: [
    { d: `M ${30 + 2 * 14} ${65} L ${30 + 2 * 14} ${65 + 6 * (-10)}`, color: '#94a3b8', strokeWidth: 0.6, dashed: true },
  ],
  functions: [
    { fn: (x: number) => 0.8 * x + 0.5, xRange: [-1.2, 1.95], color: '#334155', strokeWidth: 2 },
    { fn: (x: number) => 0.8 * x + 1.2, xRange: [2.05, 4.2], color: '#334155', strokeWidth: 2 },
  ],
};

/** 图④: 两段都递增但右边开头低于左边结尾（断裂跳低） */
// 左段: y = 0.2*(x+1)^2 + 0.5, x∈[-1.2, 2) → x=2时 y=2.3
// 右段: y = 0.2*(x-2)^2 + 1.0, x∈(2, 4.2] → x=2时 y=1.0
export const monoQuiz4: Diagram2DData = {
  coordinateSystem: { origin: [30, 65], scale: [14, -10] },
  axes: { xRange: [-1.5, 5], yRange: [-1.5, 6], showNumbers: false, xTicks: [], yTicks: [] },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [
    { pos: [2, 2.3], dot: '#334155' },
    { pos: [2, 1.0], text: '○', fontSize: 9 },
  ],
  paths: [
    { d: `M ${30 + 2 * 14} ${65} L ${30 + 2 * 14} ${65 + 6 * (-10)}`, color: '#94a3b8', strokeWidth: 0.6, dashed: true },
  ],
  functions: [
    { fn: (x: number) => 0.2 * (x + 1) * (x + 1) + 0.5, xRange: [-1.2, 1.95], color: '#334155', strokeWidth: 2 },
    { fn: (x: number) => 0.2 * (x - 2) * (x - 2) + 1.0, xRange: [2.05, 4.2], color: '#334155', strokeWidth: 2 },
  ],
};

/** 图: 一次函数 k>0 递增示意 */
export const linearIncDiagram: Diagram2DData = {
  coordinateSystem: { origin: [45, 55], scale: [16, -12] },
  axes: { xRange: [-2.5, 3], yRange: [-2, 4], showNumbers: false, xTicks: [], yTicks: [] },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [
    { pos: [2.8, 3.2], text: 'k>0', fontSize: 10 },
    { pos: [-1.8, 2.8], text: '开口向下', fontSize: 9 },
  ],
  functions: [
    { fn: (x: number) => 0.8 * x + 0.5, xRange: [0, 2.5], color: '#3b82f6', strokeWidth: 2.5 },
    { fn: (x: number) => -0.4 * x * x + 0.5, xRange: [-2.2, 0], color: '#ef4444', strokeWidth: 2.5 },
  ],
};

/** 单调性基础例题：波浪形函数 (-3,4) 区间，减增减增 */
const waveFn = (x: number): number => {
  // 分段余弦插值，转折点 x=-1, 2, 3
  const cosInterp = (t: number, a: number, b: number) => a + (b - a) * (1 - Math.cos(Math.PI * t)) / 2;
  if (x <= -1) return cosInterp((x + 3) / 2, 2, -1.5);          // (-3,2) → (-1,-1.5) 减
  if (x <= 2)  return cosInterp((x + 1) / 3, -1.5, 1.5);        // (-1,-1.5) → (2,1.5) 增
  if (x <= 3)  return cosInterp((x - 2) / 1, 1.5, -1);           // (2,1.5) → (3,-1) 减
  return cosInterp((x - 3) / 1, -1, 0.8);                         // (3,-1) → (4,0.8) 增
};
export const monotonicWaveDiagram: Diagram2DData = {
  coordinateSystem: { origin: [124, 50], scale: [32, -17] },
  axes: { xRange: [-3.5, 4.5], yRange: [-2, 2.2], xTicks: [-3, -2, -1, 1, 2, 3, 4], yTicks: [], showOriginLabel: false, tickFontWeight: 'bold', tickColor: '#1e293b' },
  vertices: [
    [-3, 2], [-3, 0],       // 0,1: x=-3 曲线→x轴
    [-1, -1.5], [-1, 0],    // 2,3: x=-1
    [2, 1.5], [2, 0],       // 4,5: x=2
    [3, -1], [3, 0],         // 6,7: x=3
    [4, 0.8], [4, 0],       // 8,9: x=4
  ],
  edges: [
    { from: 0, to: 1, dashed: true, color: '#9ca3af', strokeWidth: 1 },
    { from: 2, to: 3, dashed: true, color: '#9ca3af', strokeWidth: 1 },
    { from: 4, to: 5, dashed: true, color: '#9ca3af', strokeWidth: 1 },
    { from: 6, to: 7, dashed: true, color: '#9ca3af', strokeWidth: 1 },
    { from: 8, to: 9, dashed: true, color: '#9ca3af', strokeWidth: 1 },
  ],
  polygons: [],
  freeLabels: [
    { pos: [4.3, -0.3], text: 'x', fontSize: 12, color: '#1e293b' },
    { pos: [0.2, 2], text: 'y', fontSize: 12, color: '#1e293b' },
    { pos: [0.8, 1.7], text: 'y = f(x)', fontSize: 10, color: '#334155' },
  ],
  functions: [
    { fn: waveFn, xRange: [-3, 4], color: '#3b82f6', strokeWidth: 2.5 },
  ],
};

/** 借助单调性求参：分段函数图像（x≥0: x²+4x, x<0: 4x-x²） */
export const piecewiseIncDiagram: Diagram2DData = {
  coordinateSystem: { origin: [65, 70], scale: [12, -4] },
  axes: { xRange: [-5.5, 5.5], yRange: [-6, 16], showNumbers: false, xTicks: [], yTicks: [] },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [
    { pos: [0, 0], dot: '#334155' },
    { pos: [-4, -1.5], text: '-4', fontSize: 12, color: '#1e293b' },
    { pos: [4, -1.5], text: '4', fontSize: 12, color: '#1e293b' },
  ],
  functions: [
    // 上段 x²+4x 虚线（不需要的部分：x<0）
    { fn: (x: number) => x * x + 4 * x, xRange: [-4.8, 0], color: '#93c5fd', strokeWidth: 1.2, dashed: true },
    // 上段 x²+4x 实线（需要的部分：x≥0）红色加粗
    { fn: (x: number) => x * x + 4 * x, xRange: [0, 2.5], color: '#dc2626', strokeWidth: 3 },
    // 下段 4x-x² 虚线（不需要的部分：x≥0）
    { fn: (x: number) => 4 * x - x * x, xRange: [0, 4.8], color: '#93c5fd', strokeWidth: 1.2, dashed: true },
    // 下段 4x-x² 实线（需要的部分：x<0）红色加粗
    { fn: (x: number) => 4 * x - x * x, xRange: [-3.2, 0], color: '#dc2626', strokeWidth: 3 },
  ],
};

/** 图: 偶函数示意（关于 y 轴对称，类 cos 曲线） */
const eOx = 130, eOy = 76, eSx = 21.6, eSy = -13.44;
const ePt = 2; // 标注点 x=2, cos(2.2)≈-0.59, y≈-1.65
const eVal = 2.8 * Math.cos(ePt * 1.1);
export const parityEvenDiagram: Diagram2DData = {
  coordinateSystem: { origin: [eOx, eOy], scale: [eSx, eSy] },
  axes: { xRange: [-6.5, 6.5], yRange: [-3.5, 5], showNumbers: false, xTicks: [], yTicks: [], showOriginLabel: false },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [
    { pos: [ePt, eVal], dot: '#dc2626' },
    { pos: [-ePt, eVal], dot: '#dc2626' },
    { pos: [0, eVal], dot: '#dc2626' },
    { pos: [ePt, 0.5], tex: 'x', fontSize: 14, color: '#dc2626' },
    { pos: [-ePt, 0.5], tex: '-x', fontSize: 14, color: '#dc2626' },
  ],
  paths: [
    // x 点：垂直x轴 + 水平到y轴
    { d: `M ${eOx + ePt * eSx} ${eOy} L ${eOx + ePt * eSx} ${eOy + eVal * eSy}`, color: '#dc2626', strokeWidth: 1, dashed: true },
    { d: `M ${eOx} ${eOy + eVal * eSy} L ${eOx + ePt * eSx} ${eOy + eVal * eSy}`, color: '#dc2626', strokeWidth: 1, dashed: true },
    // -x 点：垂直x轴 + 水平到y轴
    { d: `M ${eOx + -ePt * eSx} ${eOy} L ${eOx + -ePt * eSx} ${eOy + eVal * eSy}`, color: '#dc2626', strokeWidth: 1, dashed: true },
    { d: `M ${eOx} ${eOy + eVal * eSy} L ${eOx + -ePt * eSx} ${eOy + eVal * eSy}`, color: '#dc2626', strokeWidth: 1, dashed: true },
  ],
  functions: [
    { fn: (x: number) => 2.8 * Math.cos(x * 1.1), xRange: [-6, 6], color: '#3b82f6', strokeWidth: 2.5 },
  ],
};

/** 图: 奇函数示意（关于原点对称，sin 曲线） */
const oOx = 130, oOy = 76, oSx = 21.6, oSy = -13.44;
const oPt = 2; // 标注点 x=2, sin(2.2)≈0.81, y≈2.26
const oVal = 2.8 * Math.sin(oPt * 1.1);
export const parityOddDiagram: Diagram2DData = {
  coordinateSystem: { origin: [oOx, oOy], scale: [oSx, oSy] },
  axes: { xRange: [-6.5, 6.5], yRange: [-3.5, 5], showNumbers: false, xTicks: [], yTicks: [], showOriginLabel: false },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [
    { pos: [oPt, oVal], dot: '#dc2626' },
    { pos: [-oPt, -oVal], dot: '#dc2626' },
    { pos: [0, oVal], dot: '#dc2626' },
    { pos: [0, -oVal], dot: '#dc2626' },
    { pos: [0, 0], dot: '#dc2626' },
    { pos: [oPt, -0.6], tex: 'x', fontSize: 14, color: '#dc2626' },
    { pos: [-oPt, 0.5], tex: '-x', fontSize: 14, color: '#dc2626' },
  ],
  paths: [
    // (x, f(x))：垂直x轴 + 水平到y轴
    { d: `M ${oOx + oPt * oSx} ${oOy} L ${oOx + oPt * oSx} ${oOy + oVal * oSy}`, color: '#dc2626', strokeWidth: 1, dashed: true },
    { d: `M ${oOx} ${oOy + oVal * oSy} L ${oOx + oPt * oSx} ${oOy + oVal * oSy}`, color: '#dc2626', strokeWidth: 1, dashed: true },
    // (-x, -f(x))：垂直x轴 + 水平到y轴
    { d: `M ${oOx + -oPt * oSx} ${oOy} L ${oOx + -oPt * oSx} ${oOy + -oVal * oSy}`, color: '#dc2626', strokeWidth: 1, dashed: true },
    { d: `M ${oOx} ${oOy + -oVal * oSy} L ${oOx + -oPt * oSx} ${oOy + -oVal * oSy}`, color: '#dc2626', strokeWidth: 1, dashed: true },
    // 对角连线（通过原点）
    { d: `M ${oOx + -oPt * oSx} ${oOy + -oVal * oSy} L ${oOx + oPt * oSx} ${oOy + oVal * oSy}`, color: '#dc2626', strokeWidth: 1, dashed: true },
  ],
  functions: [
    { fn: (x: number) => 2.8 * Math.sin(x * 1.1), xRange: [-6, 6], color: '#3b82f6', strokeWidth: 2.5 },
  ],
};

/** 图: 单调+奇偶综合例题（奇函数全局递减，零点 -2, 0, 2，标注符号分布） */
const mOx = 180, mOy = 70, mSx = 28, mSy = -14;
export const monoParityExampleDiagram: Diagram2DData = {
  coordinateSystem: { origin: [mOx, mOy], scale: [mSx, mSy] },
  axes: { xRange: [-6, 6], yRange: [-4.5, 4.5], showNumbers: false, xTicks: [], yTicks: [], showOriginLabel: true },
  vertices: [],
  edges: [],
  polygons: [],
  freeLabels: [
    { pos: [-2, 0], dot: '#dc2626' },
    { pos: [0, 0], dot: '#dc2626' },
    { pos: [2, 0], dot: '#dc2626' },
    { pos: [-2, -1], tex: '-2', fontSize: 13, color: '#333' },
    { pos: [2, -1], tex: '2', fontSize: 13, color: '#333' },
    { pos: [-3.8, 2.2], tex: 'f>0', fontSize: 13, color: '#16a34a' },
    { pos: [-1, -1.8], tex: 'f<0', fontSize: 13, color: '#dc2626' },
    { pos: [1, 1.8], tex: 'f>0', fontSize: 13, color: '#16a34a' },
    { pos: [3.8, -2.2], tex: 'f<0', fontSize: 13, color: '#dc2626' },
  ],
  paths: [],
  functions: [
    { fn: (x: number) => -(x * x * x - 4 * x) / 3, xRange: [-4.2, 4.2], color: '#3b82f6', strokeWidth: 2.5 },
  ],
};

