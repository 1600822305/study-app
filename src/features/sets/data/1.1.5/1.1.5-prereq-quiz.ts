import type { QuizQuestionData } from '@/types';

export const setsPrereqQuizQuestions: QuizQuestionData[] = [
  // ── 解方程 ×2 ──
  {
    id: 'spq1',
    question: '解方程 x²-7x+12=0，则 x=',
    questionLatex: '\\text{解方程 } x^2 - 7x + 12 = 0 \\text{，则 } x =',
    options: [
      { label: 'A', value: 'x=3 \\text{ 或 } x=4', isLatex: true },
      { label: 'B', value: 'x=-3 \\text{ 或 } x=-4', isLatex: true },
      { label: 'C', value: 'x=2 \\text{ 或 } x=6', isLatex: true },
      { label: 'D', value: 'x=-2 \\text{ 或 } x=-6', isLatex: true },
    ],
    correctAnswer: 'x=3 \\text{ 或 } x=4',
    printCols: 2,
  },
  {
    id: 'spq2',
    question: '解方程 2x²-3x-2=0，则 x=',
    questionLatex: '\\text{解方程 } 2x^2 - 3x - 2 = 0 \\text{，则 } x =',
    options: [
      { label: 'A', value: 'x=2 \\text{ 或 } x=-\\dfrac{1}{2}', isLatex: true },
      { label: 'B', value: 'x=-2 \\text{ 或 } x=\\dfrac{1}{2}', isLatex: true },
      { label: 'C', value: 'x=1 \\text{ 或 } x=-2', isLatex: true },
      { label: 'D', value: 'x=2 \\text{ 或 } x=1', isLatex: true },
    ],
    correctAnswer: 'x=2 \\text{ 或 } x=-\\dfrac{1}{2}',
    printCols: 2,
  },
  // ── 解不等式 ×2 ──
  {
    id: 'spq3',
    question: '不等式 x²-5x+4<0 的解集为',
    questionLatex: '\\text{不等式 } x^2 - 5x + 4 < 0 \\text{ 的解集为}',
    options: [
      { label: 'A', value: '\\{x \\mid 1 < x < 4\\}', isLatex: true },
      { label: 'B', value: '\\{x \\mid x < 1 \\text{ 或 } x > 4\\}', isLatex: true },
      { label: 'C', value: '\\{x \\mid -1 < x < 4\\}', isLatex: true },
      { label: 'D', value: '\\{x \\mid -4 < x < -1\\}', isLatex: true },
    ],
    correctAnswer: '\\{x \\mid 1 < x < 4\\}',
    printCols: 2,
  },
  {
    id: 'spq4',
    question: '不等式 x²-4≥0 的解集为',
    questionLatex: '\\text{不等式 } x^2 - 4 \\geq 0 \\text{ 的解集为}',
    options: [
      { label: 'A', value: '\\{x \\mid x \\leq -2 \\text{ 或 } x \\geq 2\\}', isLatex: true },
      { label: 'B', value: '\\{x \\mid -2 \\leq x \\leq 2\\}', isLatex: true },
      { label: 'C', value: '\\{x \\mid x < -2 \\text{ 或 } x > 2\\}', isLatex: true },
      { label: 'D', value: '\\{x \\mid -2 < x < 2\\}', isLatex: true },
    ],
    correctAnswer: '\\{x \\mid x \\leq -2 \\text{ 或 } x \\geq 2\\}',
    printCols: 2,
  },
  // ── 区间表示 ×2 ──
  {
    id: 'spq5',
    question: '用区间表示 {x|-2<x≤5}',
    questionLatex: '\\text{用区间表示 } \\{x \\mid -2 < x \\leq 5\\}',
    options: [
      { label: 'A', value: '(-2, 5]', isLatex: false },
      { label: 'B', value: '[-2, 5]', isLatex: false },
      { label: 'C', value: '(-2, 5)', isLatex: false },
      { label: 'D', value: '[-2, 5)', isLatex: false },
    ],
    correctAnswer: '(-2, 5]',
  },
  {
    id: 'spq6',
    question: '{x|x≥3} 用区间表示为',
    questionLatex: '\\{x \\mid x \\geq 3\\} \\text{ 用区间表示为}',
    options: [
      { label: 'A', value: '[3, +\\infty)', isLatex: true },
      { label: 'B', value: '(3, +\\infty)', isLatex: true },
      { label: 'C', value: '[3, +\\infty]', isLatex: true },
      { label: 'D', value: '(3, +\\infty]', isLatex: true },
    ],
    correctAnswer: '[3, +\\infty)',
  },
  // ── 数轴画法 ×2 ──
  {
    id: 'spq7',
    question: '在数轴上表示 x ≤ -1，端点 -1 应该用',
    questionLatex: '\\text{在数轴上表示 } x \\leq -1 \\text{，端点 } -1 \\text{ 应该用}',
    options: [
      { label: 'A', value: '空心圆 ○' },
      { label: 'B', value: '实心圆 ●' },
      { label: 'C', value: '不画圆' },
      { label: 'D', value: '方块 □' },
    ],
    correctAnswer: '实心圆 ●',
  },
  {
    id: 'spq8',
    question: '在数轴上表示 {x | 1 ≤ x < 4}，端点 1 和 4 分别用什么圆？',
    questionLatex: '\\text{在数轴上表示 } \\{x \\mid 1 \\leq x < 4\\} \\text{，端点 1 和 4 分别用？}',
    options: [
      { label: 'A', value: '1 实心 ●，4 空心 ○' },
      { label: 'B', value: '1 空心 ○，4 实心 ●' },
      { label: 'C', value: '都是实心 ●' },
      { label: 'D', value: '都是空心 ○' },
    ],
    correctAnswer: '1 实心 ●，4 空心 ○',
  },
];
