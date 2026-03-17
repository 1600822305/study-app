import type { QuizQuestionData } from '@/types';

// ══════════════════════════════════════
//  2.2 二次函数 - 即时练习
// ══════════════════════════════════════

// ── 第1节：三种形式 + 图像 ──
export const quadPractice1: QuizQuestionData[] = [
  {
    id: 'qp1-1',
    type: 'choice',
    question: '',
    questionLatex: '\\text{将 } y = x^2 + 4x + 7 \\text{ 化为顶点式，其顶点坐标为}',
    options: [
      { label: 'A', value: '(2,\\; 3)', isLatex: true },
      { label: 'B', value: '(-2,\\; 3)', isLatex: true },
      { label: 'C', value: '(-2,\\; -3)', isLatex: true },
      { label: 'D', value: '(2,\\; -3)', isLatex: true },
    ],
    correctAnswer: '(-2,\\; 3)',
  },
  {
    id: 'qp1-2',
    type: 'choice',
    question: '',
    questionLatex: '\\text{二次函数 } y = -2x^2 + 8x - 5 \\text{ 的对称轴和与 } x \\text{ 轴交点个数分别是}',
    options: [
      { label: 'A', value: 'x = 2 \\text{，两个交点}', isLatex: true },
      { label: 'B', value: 'x = -2 \\text{，两个交点}', isLatex: true },
      { label: 'C', value: 'x = 2 \\text{，无交点}', isLatex: true },
      { label: 'D', value: 'x = 4 \\text{，一个交点}', isLatex: true },
    ],
    correctAnswer: 'x = 2 \\text{，两个交点}',
  },
  {
    id: 'qp1-3',
    type: 'choice',
    question: '',
    questionLatex: '\\text{函数 } y = -x^2 + 6x - 1 \\text{ 在 } x > 3 \\text{ 时}',
    options: [
      { label: 'A', value: '\\text{递增}', isLatex: true },
      { label: 'B', value: '\\text{递减}', isLatex: true },
      { label: 'C', value: '\\text{先增后减}', isLatex: true },
      { label: 'D', value: '\\text{无法判断}', isLatex: true },
    ],
    correctAnswer: '\\text{递减}',
  },
  {
    id: 'qp1-4',
    type: 'choice',
    question: '',
    questionLatex: '\\text{函数 } y = 2x^2 - 8x + 3 \\text{ 在 } [0, 3] \\text{ 上的最小值为}',
    options: [
      { label: 'A', value: '-5', isLatex: true },
      { label: 'B', value: '3', isLatex: true },
      { label: 'C', value: '-1', isLatex: true },
      { label: 'D', value: '0', isLatex: true },
    ],
    correctAnswer: '-5',
  },
];

// ── 第2节：判别式 + 韦达定理 ──
export const quadPractice2: QuizQuestionData[] = [
  {
    id: 'qp2-1',
    type: 'choice',
    question: '',
    questionLatex: '\\text{方程 } 2x^2 - 3x + 5 = 0 \\text{ 的根的情况是}',
    options: [
      { label: 'A', value: '\\text{两个不等实根}', isLatex: true },
      { label: 'B', value: '\\text{两个相等实根（重根）}', isLatex: true },
      { label: 'C', value: '\\text{无实根}', isLatex: true },
      { label: 'D', value: '\\text{只有一个实根}', isLatex: true },
    ],
    correctAnswer: '\\text{无实根}',
  },
  {
    id: 'qp2-2',
    type: 'choice',
    question: '',
    questionLatex: '\\text{已知方程 } x^2 - 5x + 6 = 0 \\text{ 的两根为 } x_1, x_2 \\text{，则 } x_1^2 + x_2^2 =',
    options: [
      { label: 'A', value: '13', isLatex: false },
      { label: 'B', value: '25', isLatex: false },
      { label: 'C', value: '11', isLatex: false },
      { label: 'D', value: '19', isLatex: false },
    ],
    correctAnswer: '13',
  },
  {
    id: 'qp2-3',
    type: 'choice',
    question: '',
    questionLatex: '\\text{若两根之和为 } 3 \\text{，两根之积为 } -4 \\text{，则原方程为}',
    options: [
      { label: 'A', value: 'x^2 - 3x - 4 = 0', isLatex: true },
      { label: 'B', value: 'x^2 + 3x - 4 = 0', isLatex: true },
      { label: 'C', value: 'x^2 - 3x + 4 = 0', isLatex: true },
      { label: 'D', value: 'x^2 + 3x + 4 = 0', isLatex: true },
    ],
    correctAnswer: 'x^2 - 3x - 4 = 0',
  },
  {
    id: 'qp2-4',
    type: 'choice',
    question: '',
    questionLatex: '\\text{方程 } x^2 - 2kx + k^2 - 1 = 0 \\text{ 的两根平方和 } x_1^2 + x_2^2 =',
    options: [
      { label: 'A', value: '2k^2 + 2', isLatex: true },
      { label: 'B', value: '2k^2 - 2', isLatex: true },
      { label: 'C', value: '4k^2 - 2', isLatex: true },
      { label: 'D', value: '2', isLatex: false },
    ],
    correctAnswer: '2k^2 + 2',
  },
  {
    id: 'qp2-5',
    type: 'choice',
    question: '',
    questionLatex: '\\text{两根为 } x_1 = 1,\\; x_2 = -2 \\text{，原方程及其判别式为}',
    options: [
      { label: 'A', value: 'x^2 + x - 2 = 0,\\; \\Delta = 9', isLatex: true },
      { label: 'B', value: 'x^2 - x - 2 = 0,\\; \\Delta = 9', isLatex: true },
      { label: 'C', value: 'x^2 + x + 2 = 0,\\; \\Delta = -7', isLatex: true },
      { label: 'D', value: 'x^2 - x + 2 = 0,\\; \\Delta = -7', isLatex: true },
    ],
    correctAnswer: 'x^2 + x - 2 = 0,\\; \\Delta = 9',
  },
];
