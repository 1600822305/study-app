import type { QuizQuestionData } from '@/types';

// ── 求角度 即时训练（填空题）线线夹角 / 线面夹角 / 二面角 ──
export const anglePractice: QuizQuestionData[] = [
  {
    id: 'angle-1',
    type: 'blank',
    question: '两条直线方向向量 $\\vec{a} = (1, 1, 0)$，$\\vec{b} = (0, 1, 1)$，则线线夹角 $\\theta$ = ____',
    correctAnswer: '60°',
    explanation: 'cos θ = |1×0 + 1×1 + 0×1| / (√2 × √2) = 1/2，所以 θ = 60°',
  },
  {
    id: 'angle-2',
    type: 'blank',
    question: '两条直线方向向量 $\\vec{a} = (1, 0, -1)$，$\\vec{b} = (1, 0, 1)$，则线线夹角 $\\theta$ = ____',
    correctAnswer: '90°',
    explanation: 'cos θ = |1×1 + 0×0 + (-1)×1| / (√2 × √2) = 0/2 = 0，所以 θ = 90°',
  },
  {
    id: 'angle-3',
    type: 'blank',
    question: '方向向量 $\\vec{a} = (1, 1, 1)$，法向量 $\\vec{n} = (0, 0, 1)$，则线面夹角 $\\sin\\theta$ = ____',
    correctAnswer: '√3/3',
    explanation: 'sin θ = |1×0 + 1×0 + 1×1| / (√3 × 1) = 1/√3 = √3/3',
  },
  {
    id: 'angle-4',
    type: 'blank',
    question: '方向向量 $\\vec{a} = (1, 0, 1)$，法向量 $\\vec{n} = (0, 1, 0)$，则线面夹角 $\\theta$ = ____',
    correctAnswer: '0°',
    explanation: 'sin θ = |1×0 + 0×1 + 1×0| / (√2 × 1) = 0，所以 θ = 0°（直线在平面内或平行于平面）',
  },
  {
    id: 'angle-5',
    type: 'blank',
    question: '两平面法向量 $\\vec{n_1} = (1, 0, 0)$，$\\vec{n_2} = (1, 1, 0)$，则二面角 $\\theta$ = ____',
    correctAnswer: '45°',
    explanation: 'cos θ = |1×1 + 0×1 + 0×0| / (1 × √2) = 1/√2 = √2/2，所以 θ = 45°',
  },
  {
    id: 'angle-6',
    type: 'blank',
    question: '两平面法向量 $\\vec{n_1} = (0, 1, 1)$，$\\vec{n_2} = (0, -1, 1)$，则二面角 $\\theta$ = ____',
    correctAnswer: '90°',
    explanation: 'cos θ = |0×0 + 1×(-1) + 1×1| / (√2 × √2) = |0|/2 = 0，所以 θ = 90°',
  },
];
