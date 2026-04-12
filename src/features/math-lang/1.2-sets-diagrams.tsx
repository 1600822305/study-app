// ══════════════════════════════════════════════════════════
// 1.2 集合 — 所有 SVG 图表组件
// ══════════════════════════════════════════════════════════
import { Math } from '@/components/shared';
import type { TreeNodeData } from '@/components/shared/TreeDiagram';

// ── Section 3: Venn 图示例（6 个） ──
// 数据驱动，统一使用 Geo2dSvg + VennRenderer 渲染

import type { Diagram2DData } from '@/components/shared/Geo2dSvg';

const vennBase = { vertices: [] as [number, number][], edges: [], polygons: [], freeLabels: [] };

/** A ⊆ U 子集 */
export const vennSubset: Diagram2DData = {
  ...vennBase, name: 'A⊆U 子集',
  venn: {
    rectOrigin: [3, 3], rectSize: [120, 85], rectRx: 6,
    rectFill: '#f0f9ff', rectColor: '#93c5fd',
    sets: [
      { center: [56, 50], radius: 27, label: 'A', color: '#3b82f6', fill: '#dbeafe', fillOpacity: 1, labelOffset: [0, 4] },
    ],
  },
};

/** A ∩ B 交集 */
export const vennIntersection: Diagram2DData = {
  ...vennBase, name: 'A∩B 交集',
  venn: {
    rectOrigin: [3, 3], rectSize: [120, 85], rectRx: 6,
    rectFill: '#f0f9ff', rectColor: '#93c5fd',
    sets: [
      { center: [46, 49], radius: 25, label: 'A', color: '#3b82f6', fill: '#dbeafe', fillOpacity: 0.5, labelOffset: [-12, 4] },
      { center: [77, 49], radius: 25, label: 'B', color: '#f59e0b', fill: '#fef3c7', fillOpacity: 0.5, labelOffset: [12, 4] },
    ],
    regions: [
      { type: 'intersection', fill: '#bbf7d0', fillOpacity: 0.7 },
    ],
  },
};

/** A ∪ B 并集 */
export const vennUnion: Diagram2DData = {
  ...vennBase, name: 'A∪B 并集',
  venn: {
    rectOrigin: [3, 3], rectSize: [120, 85], rectRx: 6,
    rectFill: '#f0f9ff', rectColor: '#93c5fd',
    sets: [
      { center: [46, 49], radius: 25, label: 'A', color: '#16a34a', fill: '#bbf7d0', fillOpacity: 0.6, labelOffset: [-12, 4] },
      { center: [77, 49], radius: 25, label: 'B', color: '#16a34a', fill: '#bbf7d0', fillOpacity: 0.6, labelOffset: [12, 4] },
    ],
  },
};

/** ∁ᵤA 补集 */
export const vennComplement: Diagram2DData = {
  ...vennBase, name: '∁ᵤA 补集',
  venn: {
    rectOrigin: [3, 3], rectSize: [120, 85], rectRx: 6,
    rectFill: '#fde68a', rectColor: '#f59e0b',
    sets: [
      { center: [56, 49], radius: 25, label: 'A', color: '#3b82f6', fill: '#ffffff', fillOpacity: 1, labelOffset: [0, 4] },
    ],
    elements: [
      { pos: [101, 74], text: '补集', fontSize: 16, color: '#b45309' },
    ],
  },
};

/** A ∩ B = ∅ 不相交 */
export const vennDisjoint: Diagram2DData = {
  ...vennBase, name: 'A∩B=∅ 不相交',
  venn: {
    rectOrigin: [3, 3], rectSize: [120, 85], rectRx: 6,
    rectFill: '#f0f9ff', rectColor: '#93c5fd',
    sets: [
      { center: [39, 49], radius: 21, label: 'A', color: '#3b82f6', fill: '#dbeafe', fillOpacity: 0.5, labelOffset: [0, 4] },
      { center: [91, 49], radius: 21, label: 'B', color: '#f59e0b', fill: '#fef3c7', fillOpacity: 0.5, labelOffset: [0, 4] },
    ],
  },
};

/** A ⊂ B 真子集 */
export const vennProperSubset: Diagram2DData = {
  ...vennBase, name: 'A⊂B 真子集',
  venn: {
    rectOrigin: [3, 3], rectSize: [120, 85], rectRx: 6,
    rectFill: '#f0f9ff', rectColor: '#93c5fd',
    sets: [
      { center: [60, 48], radius: 29, label: 'B', color: '#f59e0b', fill: '#fef3c7', fillOpacity: 0.5, labelOffset: [19, -11] },
      { center: [53, 50], radius: 15, label: 'A', color: '#3b82f6', fill: '#dbeafe', fillOpacity: 0.7, labelOffset: [0, 4] },
    ],
  },
};

// ── Section 3: 区间数轴（3 个） ──

export function NumberLineOpenSvg() {
  return (
    <svg viewBox="0 0 200 50" className="w-full">
      <line x1="10" y1="30" x2="190" y2="30" stroke="#d1d5db" strokeWidth="1" />
      <line x1="60" y1="30" x2="150" y2="30" stroke="#3b82f6" strokeWidth="3" />
      <circle cx="60" cy="30" r="4" fill="white" stroke="#3b82f6" strokeWidth="2" />
      <circle cx="150" cy="30" r="4" fill="white" stroke="#3b82f6" strokeWidth="2" />
      <text x="60" y="48" fontSize="11" fill="#374151" textAnchor="middle">a</text>
      <text x="150" y="48" fontSize="11" fill="#374151" textAnchor="middle">b</text>
      <text x="105" y="18" fontSize="12" fill="#3b82f6" fontWeight="bold" textAnchor="middle">(a, b) 开区间</text>
    </svg>
  );
}

export function NumberLineClosedSvg() {
  return (
    <svg viewBox="0 0 200 50" className="w-full">
      <line x1="10" y1="30" x2="190" y2="30" stroke="#d1d5db" strokeWidth="1" />
      <line x1="60" y1="30" x2="150" y2="30" stroke="#16a34a" strokeWidth="3" />
      <circle cx="60" cy="30" r="4" fill="#16a34a" />
      <circle cx="150" cy="30" r="4" fill="#16a34a" />
      <text x="60" y="48" fontSize="11" fill="#374151" textAnchor="middle">a</text>
      <text x="150" y="48" fontSize="11" fill="#374151" textAnchor="middle">b</text>
      <text x="105" y="18" fontSize="12" fill="#16a34a" fontWeight="bold" textAnchor="middle">[a, b] 闭区间</text>
    </svg>
  );
}

// ── Section 6: 运算定义 Venn 图（3 个） ──

/** 交集 A ∩ B（运算定义） */
export const opIntersection: Diagram2DData = {
  ...vennBase, name: '交集运算定义',
  venn: {
    rectOrigin: [3, 3], rectSize: [154, 94], rectRx: 6,
    rectFill: '#f9fafb', rectColor: '#d1d5db',
    sets: [
      { center: [53, 41], radius: 30, label: 'A', color: '#3b82f6', fill: '#dbeafe', fillOpacity: 0.4, labelOffset: [-16, 4] },
      { center: [93, 41], radius: 30, label: 'B', color: '#f59e0b', fill: '#fef3c7', fillOpacity: 0.4, labelOffset: [16, 4] },
    ],
    regions: [
      { type: 'intersection', fill: '#bbf7d0', fillOpacity: 0.8 },
    ],
    elements: [
      { pos: [74, 86], text: '绿色=A∩B', fontSize: 14, color: '#15803d', fontWeight: 'bold' },
    ],
  },
};

/** 并集 A ∪ B（运算定义） */
export const opUnion: Diagram2DData = {
  ...vennBase, name: '并集运算定义',
  venn: {
    rectOrigin: [3, 3], rectSize: [154, 94], rectRx: 6,
    rectFill: '#f9fafb', rectColor: '#d1d5db',
    sets: [
      { center: [53, 40], radius: 30, label: 'A', color: '#16a34a', fill: '#bbf7d0', fillOpacity: 0.6, labelOffset: [-16, 4] },
      { center: [100, 40], radius: 30, label: 'B', color: '#16a34a', fill: '#bbf7d0', fillOpacity: 0.6, labelOffset: [16, 4] },
    ],
    elements: [
      { pos: [77, 86], text: '全绿=A∪B', fontSize: 12, color: '#15803d', fontWeight: 'bold' },
    ],
  },
};

/** 补集 ∁ᵤA（运算定义） */
export const opComplement: Diagram2DData = {
  ...vennBase, name: '补集运算定义',
  venn: {
    rectOrigin: [3, 3], rectSize: [154, 94], rectRx: 6,
    rectFill: '#fde68a', rectColor: '#f59e0b',
    sets: [
      { center: [59, 52], radius: 28, label: 'A', color: '#3b82f6', fill: '#ffffff', fillOpacity: 1, labelOffset: [0, 4] },
    ],
    elements: [
      { pos: [123, 85], text: '黄色=补集', fontSize: 12, color: '#b45309', fontWeight: 'bold' },
    ],
  },
};

// ── Section 6: 补集例题数轴（3 个） ──

export function ComplementEx1Svg() {
  return (
    <svg viewBox="0 0 200 60" className="w-[32%] shrink-0">
      {/* Axis */}
      <line x1="10" y1="45" x2="190" y2="45" stroke="#9ca3af" strokeWidth="1.5" />
      <polygon points="190,42 198,45 190,48" fill="#9ca3af" />
      <line x1="100" y1="42" x2="100" y2="48" stroke="#374151" strokeWidth="1" />
      <text x="100" y="58" fontSize="10" fill="#374151" textAnchor="middle">-1</text>
      
      {/* A (blue): L-ray left */}
      <polyline points="10,20 100,20 100,45" fill="none" stroke="#3b82f6" strokeWidth="2" />
      <polygon points="15,17 7,20 15,23" fill="#3b82f6" />
      <circle cx="100" cy="45" r="3.5" fill="white" stroke="#3b82f6" strokeWidth="1.5" />
      <text x="55" y="15" fontSize="10" fill="#3b82f6" fontWeight="bold" textAnchor="middle">A</text>
      
      {/* 补集 (red): on axis right */}
      <line x1="100" y1="45" x2="190" y2="45" stroke="#ef4444" strokeWidth="3" />
      <polygon points="190,41 198,45 190,49" fill="#ef4444" />
      <circle cx="100" cy="45" r="3.5" fill="#ef4444" />
      <text x="145" y="38" fontSize="10" fill="#ef4444" fontWeight="bold" textAnchor="middle">补集</text>
    </svg>
  );
}

export function ComplementEx2Svg() {
  return (
    <svg viewBox="0 0 200 60" className="w-[32%] shrink-0">
      {/* Axis */}
      <line x1="10" y1="45" x2="190" y2="45" stroke="#9ca3af" strokeWidth="1.5" />
      <polygon points="190,42 198,45 190,48" fill="#9ca3af" />
      <line x1="100" y1="42" x2="100" y2="48" stroke="#374151" strokeWidth="1" />
      <text x="100" y="58" fontSize="10" fill="#374151" textAnchor="middle">5</text>
      
      {/* A (blue): L-ray right */}
      <polyline points="100,45 100,20 190,20" fill="none" stroke="#3b82f6" strokeWidth="2" />
      <polygon points="185,17 193,20 185,23" fill="#3b82f6" />
      <circle cx="100" cy="45" r="3.5" fill="#3b82f6" />
      <text x="145" y="15" fontSize="10" fill="#3b82f6" fontWeight="bold" textAnchor="middle">A</text>
      
      {/* 补集 (red): on axis left */}
      <line x1="10" y1="45" x2="100" y2="45" stroke="#ef4444" strokeWidth="3" />
      <polygon points="10,41 2,45 10,49" fill="#ef4444" />
      <circle cx="100" cy="45" r="3.5" fill="white" stroke="#ef4444" strokeWidth="1.5" />
      <text x="55" y="38" fontSize="10" fill="#ef4444" fontWeight="bold" textAnchor="middle">补集</text>
    </svg>
  );
}

export function ComplementEx3Svg() {
  return (
    <svg viewBox="0 0 200 60" className="w-[32%] shrink-0">
      {/* Axis */}
      <line x1="10" y1="45" x2="190" y2="45" stroke="#9ca3af" strokeWidth="1.5" />
      <polygon points="190,42 198,45 190,48" fill="#9ca3af" />
      <line x1="60" y1="42" x2="60" y2="48" stroke="#374151" strokeWidth="1" />
      <line x1="140" y1="42" x2="140" y2="48" stroke="#374151" strokeWidth="1" />
      <text x="60" y="58" fontSize="10" fill="#374151" textAnchor="middle">-2</text>
      <text x="140" y="58" fontSize="10" fill="#374151" textAnchor="middle">3</text>
      
      {/* A (blue): U-shape */}
      <polyline points="60,45 60,20 140,20 140,45" fill="none" stroke="#3b82f6" strokeWidth="2" />
      <circle cx="60" cy="45" r="3.5" fill="#3b82f6" />
      <circle cx="140" cy="45" r="3.5" fill="white" stroke="#3b82f6" strokeWidth="1.5" />
      <text x="100" y="15" fontSize="10" fill="#3b82f6" fontWeight="bold" textAnchor="middle">A</text>
      
      {/* 补集 (red): left ray */}
      <line x1="10" y1="45" x2="60" y2="45" stroke="#ef4444" strokeWidth="3" />
      <polygon points="10,41 2,45 10,49" fill="#ef4444" />
      <circle cx="60" cy="45" r="3.5" fill="white" stroke="#ef4444" strokeWidth="1.5" />
      <text x="35" y="38" fontSize="10" fill="#ef4444" fontWeight="bold" textAnchor="middle">补集</text>
      
      {/* 补集 (red): right ray */}
      <line x1="140" y1="45" x2="190" y2="45" stroke="#ef4444" strokeWidth="3" />
      <polygon points="190,41 198,45 190,49" fill="#ef4444" />
      <circle cx="140" cy="45" r="3.5" fill="#ef4444" />
      <text x="165" y="38" fontSize="10" fill="#ef4444" fontWeight="bold" textAnchor="middle">补集</text>
    </svg>
  );
}

// ── Section 6: 不等式集交/并数轴 ──

export function IneqEx2Svg() {
  return (
    <svg viewBox="0 0 220 80" className="w-[32%] shrink-0">
      <line x1="10" y1="55" x2="210" y2="55" stroke="#9ca3af" strokeWidth="1.5" />
      <polygon points="210,52 218,55 210,58" fill="#9ca3af" />
      <line x1="40" y1="52" x2="40" y2="58" stroke="#374151" strokeWidth="1" />
      <line x1="90" y1="52" x2="90" y2="58" stroke="#374151" strokeWidth="1" />
      <line x1="120" y1="52" x2="120" y2="58" stroke="#374151" strokeWidth="1" />
      <line x1="170" y1="52" x2="170" y2="58" stroke="#374151" strokeWidth="1" />
      <text x="40" y="70" fontSize="9" fill="#374151" textAnchor="middle">-2</text>
      <text x="90" y="70" fontSize="9" fill="#374151" textAnchor="middle">0</text>
      <text x="120" y="70" fontSize="9" fill="#374151" textAnchor="middle">1</text>
      <text x="170" y="70" fontSize="9" fill="#374151" textAnchor="middle">3</text>
      <polyline points="40,55 40,38 120,38 120,55" fill="none" stroke="#3b82f6" strokeWidth="2" />
      <circle cx="40" cy="55" r="3.5" fill="white" stroke="#3b82f6" strokeWidth="1.5" />
      <circle cx="120" cy="55" r="3.5" fill="#3b82f6" />
      <text x="80" y="33" fontSize="9" fill="#3b82f6" fontWeight="bold" textAnchor="middle">A</text>
      <polyline points="90,55 90,18 170,18 170,55" fill="none" stroke="#f59e0b" strokeWidth="2" />
      <circle cx="90" cy="55" r="3.5" fill="#f59e0b" />
      <circle cx="170" cy="55" r="3.5" fill="white" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="130" y="12" fontSize="9" fill="#f59e0b" fontWeight="bold" textAnchor="middle">B</text>
      <rect x="90" y="51" width="30" height="8" rx="2" fill="#10b981" opacity="0.3" />
      <line x1="90" y1="55" x2="120" y2="55" stroke="#10b981" strokeWidth="4" />
      <circle cx="90" cy="55" r="3.5" fill="#10b981" />
      <circle cx="120" cy="55" r="3.5" fill="#10b981" />
      <text x="105" y="47" fontSize="8" fill="#10b981" fontWeight="bold" textAnchor="middle">交集</text>
    </svg>
  );
}

// ── Section 6: 混合运算数轴（2 个） ──

export function MixedOp1Svg() {
  return (
    <svg viewBox="0 10 200 51" className="w-[38%] shrink-0">
      <line x1="10" y1="52" x2="190" y2="52" stroke="#9ca3af" strokeWidth="1.5" />
      <polygon points="190,50 198,52 190,54" fill="#9ca3af" />
      <line x1="100" y1="50" x2="100" y2="54" stroke="#374151" strokeWidth="1" />
      <line x1="160" y1="50" x2="160" y2="54" stroke="#374151" strokeWidth="1" />
      <text x="100" y="60" fontSize="7" fill="#374151" textAnchor="middle">-1</text>
      <text x="160" y="60" fontSize="7" fill="#374151" textAnchor="middle">1</text>
      <polyline points="100,52 100,21 190,21" fill="none" stroke="#f59e0b" strokeWidth="2" />
      <polygon points="185,19 193,21 185,23" fill="#f59e0b" />
      <circle cx="100" cy="52" r="3.5" fill="white" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="145" y="18" fontSize="7" fill="#f59e0b" fontWeight="bold" textAnchor="middle">B</text>
      <polyline points="10,31 160,31 160,52" fill="none" stroke="#3b82f6" strokeWidth="2" />
      <polygon points="15,29 7,31 15,33" fill="#3b82f6" />
      <circle cx="160" cy="52" r="3.5" fill="#3b82f6" />
      <text x="145" y="27" fontSize="7" fill="#3b82f6" fontWeight="bold" textAnchor="middle">A</text>
      <polyline points="10,41 100,41 100,52" fill="none" stroke="#ef4444" strokeWidth="2" />
      <polygon points="15,39 7,41 15,43" fill="#ef4444" />
      <circle cx="100" cy="52" r="3.5" fill="#ef4444" />
      <text x="80" y="38" fontSize="7" fill="#ef4444" fontWeight="bold" textAnchor="middle">补B</text>
      <rect x="10" y="50" width="90" height="5" rx="2" fill="#10b981" opacity="0.25" />
      <line x1="10" y1="52" x2="100" y2="52" stroke="#10b981" strokeWidth="3" />
      <circle cx="100" cy="52" r="3.5" fill="#10b981" />
      <text x="50" y="47" fontSize="6" fill="#10b981" fontWeight="bold" textAnchor="middle">交集</text>
    </svg>
  );
}

// ── Section 6: 交集为空数轴（2 个） ──

export function EmptyIntersect1Svg() {
  return (
    <svg viewBox="0 0 200 55" className="w-[35%] shrink-0">
      <line x1="10" y1="38" x2="190" y2="38" stroke="#9ca3af" strokeWidth="1.5" />
      <polygon points="190,35 198,38 190,41" fill="#9ca3af" />
      <line x1="50" y1="35" x2="50" y2="41" stroke="#374151" strokeWidth="1" />
      <line x1="110" y1="35" x2="110" y2="41" stroke="#374151" strokeWidth="1" />
      <text x="50" y="50" fontSize="9" fill="#374151" textAnchor="middle">1</text>
      <text x="110" y="50" fontSize="9" fill="#374151" textAnchor="middle">3</text>
      <line x1="50" y1="38" x2="110" y2="38" stroke="#3b82f6" strokeWidth="4" />
      <circle cx="50" cy="38" r="3" fill="#3b82f6" />
      <circle cx="110" cy="38" r="3" fill="#3b82f6" />
      <text x="80" y="31" fontSize="9" fill="#3b82f6" fontWeight="bold" textAnchor="middle">A</text>
      <line x1="110" y1="18" x2="190" y2="18" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4,2" />
      <polygon points="185,15 193,18 185,21" fill="#f59e0b" />
      <circle cx="110" cy="18" r="3" fill="white" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="150" y="12" fontSize="9" fill="#f59e0b" fontWeight="bold" textAnchor="middle">B（临界）</text>
    </svg>
  );
}

// ── Section 6: 子集关系数轴 ──

export function SubsetRelationSvg() {
  return (
    <svg viewBox="0 0 200 55" className="w-[35%] shrink-0">
      <line x1="10" y1="38" x2="190" y2="38" stroke="#9ca3af" strokeWidth="1.5" />
      <polygon points="190,35 198,38 190,41" fill="#9ca3af" />
      <line x1="60" y1="35" x2="60" y2="41" stroke="#374151" strokeWidth="1" />
      <line x1="100" y1="35" x2="100" y2="41" stroke="#374151" strokeWidth="1" />
      <text x="60" y="50" fontSize="9" fill="#374151" textAnchor="middle">1</text>
      <text x="100" y="50" fontSize="9" fill="#374151" textAnchor="middle">2</text>
      <line x1="60" y1="38" x2="100" y2="38" stroke="#3b82f6" strokeWidth="4" />
      <circle cx="60" cy="38" r="3" fill="#3b82f6" />
      <circle cx="100" cy="38" r="3" fill="#3b82f6" />
      <text x="80" y="31" fontSize="9" fill="#3b82f6" fontWeight="bold" textAnchor="middle">A</text>
      <line x1="10" y1="18" x2="120" y2="18" stroke="#f59e0b" strokeWidth="2" />
      <polygon points="10,15 2,18 10,21" fill="#f59e0b" />
      <circle cx="120" cy="18" r="3" fill="white" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="65" y="12" fontSize="9" fill="#f59e0b" fontWeight="bold" textAnchor="middle">B（a在2右边）</text>
    </svg>
  );
}

// ── Section 6: 容斥原理 Venn 图 ──

/** 容斥原理三圆 Venn 图 */
export const vennInclusionExclusion3: Diagram2DData = {
  ...vennBase, name: '容斥原理3',
  venn: {
    rectOrigin: [3, 3], rectSize: [170, 120], rectRx: 7,
    rectFill: '#f9fafb', rectColor: '#d1d5db',
    sets: [
      { center: [70, 60], radius: 30, color: '#3b82f6', fill: '#dbeafe', fillOpacity: 0.35 },
      { center: [105, 58], radius: 30, color: '#f59e0b', fill: '#fef3c7', fillOpacity: 0.35 },
      { center: [89, 81], radius: 30, color: '#10b981', fill: '#d1fae5', fillOpacity: 0.35 },
    ],
    regions: [
      { type: 'intersectionABC', fill: '#f87171', fillOpacity: 0.4 },
    ],
    elements: [
      { pos: [70, 41], text: 'A', fontSize: 14, color: '#3b82f6', fontWeight: 'bold' },
      { pos: [108, 40], text: 'B', fontSize: 14, color: '#f59e0b', fontWeight: 'bold' },
      { pos: [100, 98], text: 'C', fontSize: 14, color: '#10b981', fontWeight: 'bold' },
      { pos: [52, 52], text: '只A', fontSize: 8, color: '#2563eb' },
      { pos: [121, 55], text: '只B', fontSize: 8, color: '#b45309' },
      { pos: [84, 97], text: '只C', fontSize: 8, color: '#059669' },
      { pos: [88, 58], text: 'A∩B∩C', fontSize: 7, color: '#dc2626', fontWeight: 'bold' },
    ],
  },
};

// ── Section 6: 大题1 分支图（2 个） ──

export const bigQ1Branch1Tree: TreeNodeData = {
  label: <>B ⊆ A，方程 <Math tex="ax-2=0" /></>,
  children: [
    {
      label: <span className="text-red-600">a = 0</span>,
      description: <>方程变成 -2=0，矛盾，无解<br />B = ∅，∅ ⊆ A 自动成立</>,
      children: [
        { label: '✓ a = 0 保留', variant: 'success' },
      ],
    },
    {
      label: <span className="text-blue-600">a ≠ 0</span>,
      description: <>B = {'{'}<Math tex="\frac{2}{a}" />{'}'}, 必须在 A = {'{'}2, 3{'}'} 里</>,
      children: [
        { label: <><Math tex="\frac{2}{a}=2" />，✓ a=1</>, variant: 'success' },
        { label: <><Math tex="\frac{2}{a}=3" />，✓ <Math tex="a=\frac{2}{3}" /></>, variant: 'success' },
      ],
    },
  ],
};

export const bigQ1Branch2Tree: TreeNodeData = {
  label: <><Math tex="A \cap B = \varnothing" />，方程 <Math tex="ax-2=0" /></>,
  children: [
    {
      label: <span className="text-red-600">a = 0</span>,
      description: <>B = ∅，<Math tex="A \cap \varnothing = \varnothing" /> ✓</>,
      children: [
        { label: '✓ a = 0 保留', variant: 'success' },
      ],
    },
    {
      label: <span className="text-red-600">a ≠ 0</span>,
      description: <>B = {'{'}<Math tex="\frac{2}{a}" />{'}'}, <strong>不能在</strong> A = {'{'}2, 3{'}'} 里</>,
      children: [
        { label: <><Math tex="\frac{2}{a} \neq 2" />，即 <Math tex="a \neq 1" /> </>, variant: 'default' },
        { label: <><Math tex="\frac{2}{a} \neq 3" />，即 <Math tex="a \neq \frac{2}{3}" /></>, variant: 'default' },
      ],
    },
  ],
};

// ── Section 6: 大题2 数轴 + 分支图 ──

export function BigQ2NumberLineSvg() {
  return (
    <svg viewBox="0 0 340 30" className="w-full">
      <line x1="20" y1="10" x2="320" y2="10" stroke="#d1d5db" strokeWidth="0.5" />
      <line x1="20" y1="21" x2="320" y2="21" stroke="#d1d5db" strokeWidth="0.5" />
      <line x1="70" y1="10" x2="270" y2="10" stroke="#16a34a" strokeWidth="1.5" />
      <circle cx="70" cy="10" r="1.75" fill="white" stroke="#16a34a" strokeWidth="0.75" />
      <circle cx="270" cy="10" r="1.75" fill="#16a34a" />
      <text x="70" y="7" fontSize="5" fill="#374151" textAnchor="middle">0</text>
      <text x="270" y="7" fontSize="5" fill="#374151" textAnchor="middle">5</text>
      <text x="170" y="5" fontSize="5" fill="#16a34a" fontWeight="bold" textAnchor="middle">B: (0, 5]</text>
      <line x1="110" y1="21" x2="210" y2="21" stroke="#2563eb" strokeWidth="1.5" />
      <circle cx="110" cy="21" r="1.75" fill="#2563eb" />
      <circle cx="210" cy="21" r="1.75" fill="#2563eb" />
      <text x="110" y="27.5" fontSize="5" fill="#374151" textAnchor="middle">a</text>
      <text x="210" y="27.5" fontSize="5" fill="#374151" textAnchor="middle">b</text>
      <text x="160" y="18.5" fontSize="5" fill="#2563eb" fontWeight="bold" textAnchor="middle">A: [a, b]</text>
    </svg>
  );
}

export const bigQ2BranchTree: TreeNodeData = {
  label: <>A ⊆ B：蓝色 [a, b] 要被绿色 (0, 5] 盖住</>,
  children: [
    {
      label: <span className="text-red-600">a {'>'} b</span>,
      description: <>A = ∅，空集是任何集合的子集</>,
      children: [
        { label: '✓ 自动成立', variant: 'success' },
      ],
    },
    {
      label: <span className="text-blue-600">a ≤ b（A 非空）</span>,
      description: <>A = [a, b]，需完全落在 (0, 5] 内</>,
      children: [
        { label: <>左端：<Math tex="a > 0" />（B 不含 0）</>, variant: 'success' },
        { label: <>右端：<Math tex="b \leq 5" /></>, variant: 'success' },
      ],
    },
  ],
};

export function NumberLineInfiniteSvg() {
  return (
    <svg viewBox="0 0 200 50" className="w-full">
      <line x1="10" y1="30" x2="190" y2="30" stroke="#d1d5db" strokeWidth="1" />
      <line x1="10" y1="30" x2="150" y2="30" stroke="#ef4444" strokeWidth="3" />
      <circle cx="150" cy="30" r="4" fill="white" stroke="#ef4444" strokeWidth="2" />
      <text x="12" y="22" fontSize="10" fill="#ef4444" fontWeight="bold">← -∞</text>
      <text x="150" y="48" fontSize="11" fill="#374151" textAnchor="middle">b</text>
      <text x="90" y="18" fontSize="12" fill="#ef4444" fontWeight="bold" textAnchor="middle">(-∞, b)</text>
    </svg>
  );
}
