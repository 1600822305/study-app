import type { QuizQuestionData } from '@/types';

export const setsPrereqQuizQuestions: QuizQuestionData[] = [
  // 解方程（a≠1）
  {
    id: 'spq1',
    question: '',
    questionLatex: '\\text{解方程 } 2x^2 - 3x - 2 = 0 \\text{，则 } x =',
    options: [
      { label: 'A', value: 'x=-2 \\text{ 或 } x=\\dfrac{1}{2}', isLatex: true },
      { label: 'B', value: 'x=2 \\text{ 或 } x=-\\dfrac{1}{2}', isLatex: true },
      { label: 'C', value: 'x=1 \\text{ 或 } x=-2', isLatex: true },
      { label: 'D', value: 'x=2 \\text{ 或 } x=1', isLatex: true },
    ],
    correctAnswer: 'x=2 \\text{ 或 } x=-\\dfrac{1}{2}',
    printCols: 2,
  },
  // 解不等式
  {
    id: 'spq2',
    question: '',
    questionLatex: '\\text{不等式 } x^2 - 5x + 4 < 0 \\text{ 的解集为}',
    options: [
      { label: 'A', value: '\\{x \\mid x < 1 \\text{ 或 } x > 4\\}', isLatex: true },
      { label: 'B', value: '\\{x \\mid -1 < x < 4\\}', isLatex: true },
      { label: 'C', value: '\\{x \\mid 1 < x < 4\\}', isLatex: true },
      { label: 'D', value: '\\{x \\mid -4 < x < -1\\}', isLatex: true },
    ],
    correctAnswer: '\\{x \\mid 1 < x < 4\\}',
    printCols: 2,
  },
  // 区间表示（含∞）
  {
    id: 'spq3',
    question: '',
    questionLatex: '\\{x \\mid x \\geq 3\\} \\text{ 用区间表示为}',
    options: [
      { label: 'A', value: '(3, +\\infty)', isLatex: true },
      { label: 'B', value: '[3, +\\infty]', isLatex: true },
      { label: 'C', value: '(3, +\\infty]', isLatex: true },
      { label: 'D', value: '[3, +\\infty)', isLatex: true },
    ],
    correctAnswer: '[3, +\\infty)',
  },
  // 区间表示（有限区间）
  {
    id: 'spq4',
    question: '',
    questionLatex: '\\{x \\mid -2 < x \\leq 5\\} \\text{ 用区间表示为}',
    options: [
      { label: 'A', value: '[-2, 5]', isLatex: false },
      { label: 'B', value: '(-2, 5]', isLatex: false },
      { label: 'C', value: '(-2, 5)', isLatex: false },
      { label: 'D', value: '[-2, 5)', isLatex: false },
    ],
    correctAnswer: '(-2, 5]',
    printCols: 4,
  },
  // 数轴端点
  {
    id: 'spq5',
    question: '',
    questionLatex: '\\text{数轴上表示 } \\{x \\mid 1 \\leq x < 4\\} \\text{，端点 1 和 4 分别用？}',
    options: [
      { label: 'A', value: '1 实心 ●，4 空心 ○' },
      { label: 'B', value: '1 空心 ○，4 实心 ●' },
      { label: 'C', value: '都是实心 ●' },
      { label: 'D', value: '都是空心 ○' },
    ],
    correctAnswer: '1 实心 ●，4 空心 ○',
  },
];
