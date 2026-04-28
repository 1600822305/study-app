import type { QuizQuestionData } from '@/types';

// ── 第一节：零点与零点区间（5题） ──
export const graphPractice1: QuizQuestionData[] = [
  {
    id: 'fgp1-1',
    question: '',
    questionLatex: '\\text{函数 }f(x) = x^2 - 4\\text{ 的零点是？}',
    type: 'choice',
    options: [
      { label: 'A', value: '(2, 0)\\text{ 和 }(-2, 0)', isLatex: true },
      { label: 'B', value: '2\\text{ 和 }-2', isLatex: true },
      { label: 'C', value: '4', isLatex: true },
      { label: 'D', value: '\\text{不存在}', isLatex: true },
    ],
    correctAnswer: '2\\text{ 和 }-2',
  },
  {
    id: 'fgp1-2',
    question: '',
    questionLatex: '\\text{函数 }f(x) = x^2 - 2x + 1\\text{ 的零点个数是？}',
    type: 'choice',
    options: [
      { label: 'A', value: '0\\text{ 个}', isLatex: true },
      { label: 'B', value: '1\\text{ 个}', isLatex: true },
      { label: 'C', value: '2\\text{ 个}', isLatex: true },
      { label: 'D', value: '\\text{无法确定}', isLatex: true },
    ],
    correctAnswer: '1\\text{ 个}',
  },
  {
    id: 'fgp1-3',
    question: '',
    questionLatex: '\\text{函数 }f(x) = x^3 - x - 1\\text{，已知 }f(1) = -1,\\; f(2) = 5\\text{，则 }(1, 2)\\text{ 内？}',
    type: 'choice',
    options: [
      { label: 'A', value: '\\text{一定有零点}', isLatex: true },
      { label: 'B', value: '\\text{一定没有零点}', isLatex: true },
      { label: 'C', value: '\\text{可能有也可能没有}', isLatex: true },
      { label: 'D', value: '\\text{无法判断}', isLatex: true },
    ],
    correctAnswer: '\\text{一定有零点}',
  },
  {
    id: 'fgp1-4',
    question: '',
    questionLatex: '\\text{函数 }f(x) = e^x - x - 2\\text{ 的零点所在区间是？}',
    type: 'choice',
    options: [
      { label: 'A', value: '(-1, 0)', isLatex: true },
      { label: 'B', value: '(0, 1)', isLatex: true },
      { label: 'C', value: '(1, 2)', isLatex: true },
      { label: 'D', value: '(2, 3)', isLatex: true },
    ],
    correctAnswer: '(1, 2)',
  },
  {
    id: 'fgp1-5',
    question: '',
    questionLatex: '\\text{函数 }f(x) = \\ln x + 2x - 6\\text{ 的零点所在区间是？}',
    type: 'choice',
    options: [
      { label: 'A', value: '(1, 2)', isLatex: true },
      { label: 'B', value: '(2, 3)', isLatex: true },
      { label: 'C', value: '(3, 4)', isLatex: true },
      { label: 'D', value: '(4, 5)', isLatex: true },
    ],
    correctAnswer: '(2, 3)',
  },
];

// ── 第二节：数形结合求零点个数（4题） ──
export const graphPractice2: QuizQuestionData[] = [
  {
    id: 'fgp2-1',
    question: '',
    questionLatex: '\\text{方程 }\\ln x = 2 - x\\text{ 的实数根的个数是？}',
    type: 'choice',
    options: [
      { label: 'A', value: '0', isLatex: true },
      { label: 'B', value: '1', isLatex: true },
      { label: 'C', value: '2', isLatex: true },
      { label: 'D', value: '3', isLatex: true },
    ],
    correctAnswer: '1',
  },
  {
    id: 'fgp2-2',
    question: '',
    questionLatex: '\\text{方程 }e^x = x + 2\\text{ 的实数根的个数是？}',
    type: 'choice',
    options: [
      { label: 'A', value: '0', isLatex: true },
      { label: 'B', value: '1', isLatex: true },
      { label: 'C', value: '2', isLatex: true },
      { label: 'D', value: '3', isLatex: true },
    ],
    correctAnswer: '2',
  },
  {
    id: 'fgp2-3',
    question: '',
    questionLatex: '\\text{方程 }x^2 = 2^x\\text{ 的实数根的个数是？}',
    type: 'choice',
    options: [
      { label: 'A', value: '1', isLatex: true },
      { label: 'B', value: '2', isLatex: true },
      { label: 'C', value: '3', isLatex: true },
      { label: 'D', value: '4', isLatex: true },
    ],
    correctAnswer: '3',
  },
  {
    id: 'fgp2-4',
    question: '',
    questionLatex: '\\text{函数 }f(x) = \\log_2 x + x - 4\\text{ 的零点个数是？}',
    type: 'choice',
    options: [
      { label: 'A', value: '0', isLatex: true },
      { label: 'B', value: '1', isLatex: true },
      { label: 'C', value: '2', isLatex: true },
      { label: 'D', value: '3', isLatex: true },
    ],
    correctAnswer: '1',
  },
];

// ── 第三节：二分法（4题） ──
export const graphPractice3: QuizQuestionData[] = [
  {
    id: 'fgp3-1',
    question: '',
    questionLatex: '\\text{用二分法求 }f(x) = x^3 - 2\\text{ 在 }(1, 2)\\text{ 内的零点，取中点 }m = 1.5\\text{，}f(1.5) > 0\\text{，则新区间是？}',
    type: 'choice',
    options: [
      { label: 'A', value: '(1,\\; 1.5)', isLatex: true },
      { label: 'B', value: '(1.5,\\; 2)', isLatex: true },
      { label: 'C', value: '(1,\\; 2)', isLatex: true },
      { label: 'D', value: '\\text{无法确定}', isLatex: true },
    ],
    correctAnswer: '(1,\\; 1.5)',
  },
  {
    id: 'fgp3-2',
    question: '',
    questionLatex: '\\text{已知 }f(x)\\text{ 在 }[1, 2]\\text{ 上连续，}f(1) < 0,\\; f(2) > 0\\text{，用二分法求零点。若 }f(1.5) < 0\\text{，则零点在？}',
    type: 'choice',
    options: [
      { label: 'A', value: '(1,\\; 1.5)', isLatex: true },
      { label: 'B', value: '(1.5,\\; 2)', isLatex: true },
      { label: 'C', value: '(1,\\; 1.25)', isLatex: true },
      { label: 'D', value: '(1.25,\\; 1.5)', isLatex: true },
    ],
    correctAnswer: '(1.5,\\; 2)',
  },
  {
    id: 'fgp3-3',
    question: '',
    questionLatex: '\\text{用二分法求方程 }2^x = 3\\text{ 在 }(1, 2)\\text{ 内的近似解，第一次取中点后 }f(1.5) < 0\\text{，则零点在？}',
    type: 'choice',
    options: [
      { label: 'A', value: '(1,\\; 1.5)', isLatex: true },
      { label: 'B', value: '(1.5,\\; 2)', isLatex: true },
      { label: 'C', value: '(1.25,\\; 1.5)', isLatex: true },
      { label: 'D', value: '(1.5,\\; 1.75)', isLatex: true },
    ],
    correctAnswer: '(1.5,\\; 2)',
  },
];
