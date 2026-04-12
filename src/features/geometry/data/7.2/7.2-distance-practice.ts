import type { QuizQuestionData } from '@/types';

// ── 求距离 即时训练（填空题）点到点 / 点到平面 ──
export const distancePractice: QuizQuestionData[] = [
  {
    id: 'dist-1',
    type: 'blank',
    question: '$A(1, 0, 0)$，$B(0, 1, 1)$，则 $|AB|$ = ____',
    correctAnswer: '√3',
    explanation: 'AB = (-1, 1, 1)，|AB| = √(1+1+1) = √3',
  },
  {
    id: 'dist-2',
    type: 'blank',
    question: '$A(2, 1, 3)$，$B(4, 3, 1)$，则 $|AB|$ = ____',
    correctAnswer: '2√3',
    explanation: 'AB = (2, 2, -2)，|AB| = √(4+4+4) = 2√3',
  },
  {
    id: 'dist-3',
    type: 'blank',
    question: '点 $P(0, 0, 3)$，平面上一点 $A(0, 0, 0)$，法向量 $\\vec{n} = (0, 0, 1)$，则点 $P$ 到平面的距离 $d$ = ____',
    correctAnswer: '3',
    explanation: 'AP = (0, 0, 3)，AP·n = 3，|n| = 1，d = |3|/1 = 3',
  },
  {
    id: 'dist-4',
    type: 'blank',
    question: '点 $P(1, 1, 1)$，平面上一点 $A(0, 0, 0)$，法向量 $\\vec{n} = (1, 1, 1)$，则点 $P$ 到平面的距离 $d$ = ____',
    correctAnswer: '√3',
    explanation: 'AP = (1, 1, 1)，AP·n = 3，|n| = √3，d = 3/√3 = √3',
  },
  {
    id: 'dist-5',
    type: 'blank',
    question: '点 $P(0, 0, 2)$，平面上一点 $B(2, 0, 0)$，法向量 $\\vec{n} = (1, 1, -1)$，则点 $P$ 到平面的距离 $d$ = ____',
    correctAnswer: '4√3/3',
    explanation: 'BP = (-2, 0, 2)，BP·n = -2+0-2 = -4，|n| = √3，d = |-4|/√3 = 4√3/3',
  },
  {
    id: 'dist-6',
    type: 'blank',
    question: '点 $P(1, 2, 3)$，平面上一点 $A(1, 0, 0)$，法向量 $\\vec{n} = (0, 1, 0)$，则点 $P$ 到平面的距离 $d$ = ____',
    correctAnswer: '2',
    explanation: 'AP = (0, 2, 3)，AP·n = 2，|n| = 1，d = |2|/1 = 2',
  },
];
