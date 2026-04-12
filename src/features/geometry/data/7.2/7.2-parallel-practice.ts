import type { QuizQuestionData } from '@/types';

// ── 线∥线 即时训练（填空题） ──
export const parallelLineLinePractice: QuizQuestionData[] = [
  {
    id: 'pll-1',
    type: 'blank',
    question: '$\\vec{a} = (2, 6, -4)$，$\\vec{b} = (-1, -3, 2)$，则 $\\vec{a}$ 与 $\\vec{b}$ ____（平行/不平行）',
    correctAnswer: '平行',
    explanation: '2/(-1) = 6/(-3) = (-4)/2 = -2，成比例',
  },
  {
    id: 'pll-2',
    type: 'blank',
    question: '$\\vec{a} = (1, 0, 3)$，$\\vec{b} = (2, 1, 6)$，则 $\\vec{a}$ 与 $\\vec{b}$ ____（平行/不平行）',
    correctAnswer: '不平行',
    explanation: 'y 分量一个 0 一个 1，不成比例',
  },
  {
    id: 'pll-4',
    type: 'blank',
    question: '$\\vec{a} = (3, -1, 2)$，$\\vec{b} = (6, -2, 4)$，则 $\\lambda$ = ____',
    correctAnswer: '2',
    explanation: '6/3 = (-2)/(-1) = 4/2 = 2',
  },
];

// ── 线∥面 即时训练（填空题） ──
export const parallelLinePlanePractice: QuizQuestionData[] = [
  {
    id: 'plp-1',
    type: 'blank',
    question: '方向向量 $\\vec{a} = (1, 2, 3)$，法向量 $\\vec{n} = (3, 0, -1)$，则直线与平面 ____（平行/不平行）',
    correctAnswer: '平行',
    explanation: '点积 = 1×3 + 2×0 + 3×(-1) = 3 + 0 - 3 = 0',
  },
  {
    id: 'plp-2',
    type: 'blank',
    question: '方向向量 $\\vec{a} = (2, -1, 4)$，法向量 $\\vec{n} = (1, 2, 1)$，则直线与平面 ____（平行/不平行）',
    correctAnswer: '不平行',
    explanation: '点积 = 2×1 + (-1)×2 + 4×1 = 2 - 2 + 4 = 4 ≠ 0',
  },
  {
    id: 'plp-3',
    type: 'blank',
    question: '方向向量 $\\vec{a} = (1, 1, -1)$，法向量 $\\vec{n} = (1, 1, 2)$，则直线与平面 ____（平行/不平行）',
    correctAnswer: '平行',
    explanation: '点积 = 1×1 + 1×1 + (-1)×2 = 1 + 1 - 2 = 0',
  },
  {
    id: 'plp-4',
    type: 'blank',
    question: '方向向量 $\\vec{a} = (0, 3, -6)$，法向量 $\\vec{n} = (1, 2, 1)$，则直线与平面 ____（平行/不平行）',
    correctAnswer: '平行',
    explanation: '点积 = 0×1 + 3×2 + (-6)×1 = 0 + 6 - 6 = 0',
  },
];

// ── 证垂直 即时训练（填空题）线⊥线 / 线⊥面 / 面⊥面 ──
export const perpPractice: QuizQuestionData[] = [
  {
    id: 'perp-1',
    type: 'blank',
    question: '$\\vec{a} = (1, 2, -1)$，$\\vec{b} = (2, 0, 2)$，则 $\\vec{a}$ 与 $\\vec{b}$ ____（垂直/不垂直）',
    correctAnswer: '垂直',
    explanation: '点积 = 1×2 + 2×0 + (-1)×2 = 2 + 0 - 2 = 0，所以垂直',
  },
  {
    id: 'perp-2',
    type: 'blank',
    question: '$\\vec{a} = (1, 1, 0)$，$\\vec{b} = (1, 0, 1)$，则 $\\vec{a}$ 与 $\\vec{b}$ ____（垂直/不垂直）',
    correctAnswer: '不垂直',
    explanation: '点积 = 1×1 + 1×0 + 0×1 = 1 ≠ 0，所以不垂直',
  },
  {
    id: 'perp-3',
    type: 'blank',
    question: '直线方向向量 $\\vec{a} = (1, 2, 3)$，平面法向量 $\\vec{n} = (2, 4, 6)$，则直线____平面（⊥/不⊥）',
    correctAnswer: '⊥',
    explanation: '(2,4,6) = 2×(1,2,3)，成比例，所以方向向量∥法向量，直线⊥平面',
  },
  {
    id: 'perp-4',
    type: 'blank',
    question: '直线方向向量 $\\vec{a} = (1, 0, 1)$，平面法向量 $\\vec{n} = (0, 1, 0)$，则直线____平面（⊥/不⊥）',
    correctAnswer: '不⊥',
    explanation: '(0,1,0) 与 (1,0,1) 不成比例，所以方向向量不平行法向量，直线不垂直平面',
  },
  {
    id: 'perp-5',
    type: 'blank',
    question: '$\\vec{n_1} = (1, 0, -1)$，$\\vec{n_2} = (2, 1, 2)$，则两平面____（⊥/不⊥）',
    correctAnswer: '⊥',
    explanation: '点积 = 1×2 + 0×1 + (-1)×2 = 2 + 0 - 2 = 0，所以两面垂直',
  },
  {
    id: 'perp-6',
    type: 'blank',
    question: '$\\vec{n_1} = (1, 1, 0)$，$\\vec{n_2} = (1, 0, 1)$，则两平面____（⊥/不⊥）',
    correctAnswer: '不⊥',
    explanation: '点积 = 1×1 + 1×0 + 0×1 = 1 ≠ 0，所以两面不垂直',
  },
];

// ── 面∥面 即时训练（填空题） ──
export const parallelPlanePlanePractice: QuizQuestionData[] = [
  {
    id: 'ppp-1',
    type: 'blank',
    question: '$\\vec{n_1} = (1, 2, -3)$，$\\vec{n_2} = (-2, -4, 6)$，则两平面 ____（平行/不平行）',
    correctAnswer: '平行',
    explanation: '(-2)/1 = (-4)/2 = 6/(-3) = -2，成比例',
  },
  {
    id: 'ppp-2',
    type: 'blank',
    question: '$\\vec{n_1} = (1, 0, 2)$，$\\vec{n_2} = (3, 0, 5)$，则两平面 ____（平行/不平行）',
    correctAnswer: '不平行',
    explanation: 'y 都为 0，但 1/3 ≠ 2/5，不成比例',
  },
  {
    id: 'ppp-4',
    type: 'blank',
    question: '$\\vec{n_1} = (2, 4, 6)$，$\\vec{n_2} = (1, 2, 3)$，则 $\\lambda$ = ____',
    correctAnswer: '2',
    explanation: '2/1 = 4/2 = 6/3 = 2',
  },
];
