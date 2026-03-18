import type { QuizQuestionData } from '@/types';

// ── 高考真题精选（8题，覆盖全部4节） ──
export const elemFuncQuizQuestions: QuizQuestionData[] = [
  // 对数运算法则
  {
    id: 'efq-1',
    question: '（改编自2022·天津）',
    questionLatex: '\\lg 25 + \\lg 4 = ?',
    type: 'choice',
    options: [
      { label: 'A', value: '1' },
      { label: 'B', value: '2' },
      { label: 'C', value: '4' },
      { label: 'D', value: '10' },
    ],
    correctAnswer: '2',
  },
  {
    id: 'efq-2',
    question: '（改编自2021·全国）',
    questionLatex: '\\log_4 8 = ?',
    type: 'choice',
    options: [
      { label: 'A', value: '2' },
      { label: 'B', value: '\\dfrac{3}{2}', isLatex: true },
      { label: 'C', value: '\\dfrac{4}{3}', isLatex: true },
      { label: 'D', value: '\\dfrac{1}{2}', isLatex: true },
    ],
    correctAnswer: '\\dfrac{3}{2}',
  },
  // 指数函数
  {
    id: 'efq-3',
    question: '（改编自2020·全国II）',
    questionLatex: '\\text{比较 }0.6^{1.5}\\text{ 和 }0.6^{2.5}\\text{ 的大小}',
    type: 'choice',
    options: [
      { label: 'A', value: '0.6^{1.5} > 0.6^{2.5}', isLatex: true },
      { label: 'B', value: '0.6^{1.5} < 0.6^{2.5}', isLatex: true },
      { label: 'C', value: '0.6^{1.5} = 0.6^{2.5}', isLatex: true },
      { label: 'D', value: '\\text{无法比较}', isLatex: true },
    ],
    correctAnswer: '0.6^{1.5} > 0.6^{2.5}',
  },
  {
    id: 'efq-4',
    question: '（改编自2023·全国乙）',
    questionLatex: '\\text{设 }f(x) = a^x\\;(a > 0,\\,a \\neq 1)\\text{，若 }f(3) = 8\\text{，则 }f(1) = ?',
    type: 'choice',
    options: [
      { label: 'A', value: '1' },
      { label: 'B', value: '2' },
      { label: 'C', value: '3' },
      { label: 'D', value: '\\dfrac{8}{3}', isLatex: true },
    ],
    correctAnswer: '2',
  },
  // 对数函数
  {
    id: 'efq-5',
    question: '（改编自2022·北京）',
    questionLatex: '\\text{下列哪个值为负数？}',
    type: 'choice',
    options: [
      { label: 'A', value: '\\lg 10', isLatex: true },
      { label: 'B', value: '\\ln e', isLatex: true },
      { label: 'C', value: '\\log_2 3', isLatex: true },
      { label: 'D', value: '\\log_3 \\dfrac{1}{2}', isLatex: true },
    ],
    correctAnswer: '\\log_3 \\dfrac{1}{2}',
  },
  // 幂函数
  {
    id: 'efq-6',
    question: '（改编自2021·新高考I）',
    questionLatex: '\\text{幂函数 }y = x^{\\alpha}\\text{ 过点 }(4, 2)\\text{，则 }\\alpha = ?',
    type: 'choice',
    options: [
      { label: 'A', value: '2' },
      { label: 'B', value: '\\dfrac{1}{2}', isLatex: true },
      { label: 'C', value: '-1' },
      { label: 'D', value: '-\\dfrac{1}{2}', isLatex: true },
    ],
    correctAnswer: '\\dfrac{1}{2}',
  },
  // 综合
  {
    id: 'efq-7',
    question: '（改编自2023·新高考I）',
    questionLatex: '\\text{将 }2^{0.3},\\;0.3^2,\\;\\log_2 0.3\\text{ 从小到大排列}',
    type: 'choice',
    options: [
      { label: 'A', value: '\\log_2 0.3 < 0.3^2 < 2^{0.3}', isLatex: true },
      { label: 'B', value: '0.3^2 < \\log_2 0.3 < 2^{0.3}', isLatex: true },
      { label: 'C', value: '0.3^2 < 2^{0.3} < \\log_2 0.3', isLatex: true },
      { label: 'D', value: '\\log_2 0.3 < 2^{0.3} < 0.3^2', isLatex: true },
    ],
    correctAnswer: '\\log_2 0.3 < 0.3^2 < 2^{0.3}',
  },
  {
    id: 'efq-8',
    question: '（改编自2022·浙江）',
    questionLatex: '\\text{若 }3^a = 2\\text{，则 }3^{2a} = ?',
    type: 'choice',
    options: [
      { label: 'A', value: '4' },
      { label: 'B', value: '6' },
      { label: 'C', value: '8' },
      { label: 'D', value: '9' },
    ],
    correctAnswer: '4',
  },
];
