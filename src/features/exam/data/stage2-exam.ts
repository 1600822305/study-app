import type { QuizQuestionData } from '@/types';
import type { EssayQuestion } from '@/components/shared/ExamPaper';

// ── 第二阶段考试：计算工具（不等式 · 二次函数） ──
// 全部独立自编，高考标准，不从题库选取
// 选择题 15×4 = 60分，解答题 4×15 = 60分，共 120 分

// ═══════ 一、不等式（8 题） ═══════
export const stage2InequalityQuestions: QuizQuestionData[] = [
  {
    id: 's2e-i1',
    question: '',
    questionLatex: '\\text{若 } a > b > 0\\text{，则下列不等式一定成立的是}',
    type: 'choice',
    options: [
      { label: 'A', value: 'a - b > 0', isLatex: true },
      { label: 'B', value: 'a + b < 0', isLatex: true },
      { label: 'C', value: 'ab < 0', isLatex: true },
      { label: 'D', value: '\\dfrac{a}{b} < 1', isLatex: true },
    ],
    correctAnswer: 'a - b > 0',
  },
  {
    id: 's2e-i2',
    question: '',
    questionLatex: '\\text{不等式 } \\dfrac{x-1}{x+2} > 0 \\text{ 的解集为}',
    type: 'choice',
    options: [
      { label: 'A', value: '\\{x \\mid x > 1 \\text{ 或 } x < -2\\}', isLatex: true },
      { label: 'B', value: '\\{x \\mid -2 < x < 1\\}', isLatex: true },
      { label: 'C', value: '\\{x \\mid x > 1\\}', isLatex: true },
      { label: 'D', value: '\\{x \\mid x < -2\\}', isLatex: true },
    ],
    correctAnswer: '\\{x \\mid x > 1 \\text{ 或 } x < -2\\}',
  },
  {
    id: 's2e-i3',
    question: '',
    questionLatex: '\\text{若 } a > 0,\\; b > 0,\\; a + b = 4\\text{，则 } ab \\text{ 的最大值为}',
    type: 'choice',
    options: [
      { label: 'A', value: '2' },
      { label: 'B', value: '4' },
      { label: 'C', value: '8' },
      { label: 'D', value: '16' },
    ],
    correctAnswer: '4',
  },
  {
    id: 's2e-i4',
    question: '',
    questionLatex: '\\text{若 } x > 0\\text{，则 } x + \\dfrac{1}{x} \\text{ 的最小值为}',
    type: 'choice',
    options: [
      { label: 'A', value: '1' },
      { label: 'B', value: '2' },
      { label: 'C', value: '\\dfrac{1}{2}', isLatex: true },
      { label: 'D', value: '4' },
    ],
    correctAnswer: '2',
  },
  {
    id: 's2e-i5',
    question: '',
    questionLatex: '\\text{不等式 } x^2 - 5x + 6 > 0 \\text{ 的解集为}',
    type: 'choice',
    options: [
      { label: 'A', value: '\\{x \\mid x > 3 \\text{ 或 } x < 2\\}', isLatex: true },
      { label: 'B', value: '\\{x \\mid 2 < x < 3\\}', isLatex: true },
      { label: 'C', value: '\\{x \\mid x > 3\\}', isLatex: true },
      { label: 'D', value: '\\{x \\mid x < 2\\}', isLatex: true },
    ],
    correctAnswer: '\\{x \\mid x > 3 \\text{ 或 } x < 2\\}',
  },
  {
    id: 's2e-i6',
    question: '',
    questionLatex: '\\text{若 } a > b\\text{，} c < 0\\text{，则下列正确的是}',
    type: 'choice',
    options: [
      { label: 'A', value: 'ac > bc', isLatex: true },
      { label: 'B', value: 'ac < bc', isLatex: true },
      { label: 'C', value: '\\dfrac{a}{c} > \\dfrac{b}{c}', isLatex: true },
      { label: 'D', value: 'a - c < b - c', isLatex: true },
    ],
    correctAnswer: 'ac < bc',
  },
  {
    id: 's2e-i7',
    question: '',
    questionLatex: '\\text{若不等式 } x^2 + mx + 1 \\geq 0 \\text{ 对一切实数 } x \\text{ 恒成立，则 } m \\text{ 的取值范围为}',
    type: 'choice',
    options: [
      { label: 'A', value: '-2 \\leq m \\leq 2', isLatex: true },
      { label: 'B', value: 'm \\leq -2 \\text{ 或 } m \\geq 2', isLatex: true },
      { label: 'C', value: '-2 < m < 2', isLatex: true },
      { label: 'D', value: 'm > 2', isLatex: true },
    ],
    correctAnswer: '-2 \\leq m \\leq 2',
  },
  {
    id: 's2e-i8',
    question: '',
    questionLatex: '\\text{已知 } a > 0,\\; b > 0,\\; \\dfrac{1}{a} + \\dfrac{4}{b} = 1\\text{，则 } a + b \\text{ 的最小值为}',
    type: 'choice',
    options: [
      { label: 'A', value: '5' },
      { label: 'B', value: '9' },
      { label: 'C', value: '8' },
      { label: 'D', value: '10' },
    ],
    correctAnswer: '9',
  },
];

// ═══════ 二、二次函数（7 题） ═══════
export const stage2QuadraticQuestions: QuizQuestionData[] = [
  {
    id: 's2e-q1',
    question: '',
    questionLatex: '\\text{函数 } f(x) = x^2 - 4x + 3 \\text{ 的图像的顶点坐标为}',
    type: 'choice',
    options: [
      { label: 'A', value: '(2, -1)', isLatex: true },
      { label: 'B', value: '(-2, -1)', isLatex: true },
      { label: 'C', value: '(2, 1)', isLatex: true },
      { label: 'D', value: '(-2, 1)', isLatex: true },
    ],
    correctAnswer: '(2, -1)',
  },
  {
    id: 's2e-q2',
    question: '',
    questionLatex: '\\text{若二次函数 } f(x) = ax^2 + bx + c \\text{ 的图像开口向下，且对称轴为 } x = 1\\text{，则}',
    type: 'choice',
    options: [
      { label: 'A', value: 'a > 0,\\; b > 0', isLatex: true },
      { label: 'B', value: 'a < 0,\\; b > 0', isLatex: true },
      { label: 'C', value: 'a > 0,\\; b < 0', isLatex: true },
      { label: 'D', value: 'a < 0,\\; b < 0', isLatex: true },
    ],
    correctAnswer: 'a < 0,\\; b > 0',
  },
  {
    id: 's2e-q3',
    question: '',
    questionLatex: '\\text{方程 } 2x^2 - 3x - 1 = 0 \\text{ 的两根为 } x_1, x_2\\text{，则 } x_1 + x_2 =',
    type: 'choice',
    options: [
      { label: 'A', value: '\\dfrac{3}{2}', isLatex: true },
      { label: 'B', value: '-\\dfrac{3}{2}', isLatex: true },
      { label: 'C', value: '-\\dfrac{1}{2}', isLatex: true },
      { label: 'D', value: '3', isLatex: true },
    ],
    correctAnswer: '\\dfrac{3}{2}',
  },
  {
    id: 's2e-q4',
    question: '',
    questionLatex: '\\text{方程 } x^2 - 3x + 1 = 0 \\text{ 的两根为 } x_1, x_2\\text{，则 } x_1^2 + x_2^2 =',
    type: 'choice',
    options: [
      { label: 'A', value: '5' },
      { label: 'B', value: '7' },
      { label: 'C', value: '9' },
      { label: 'D', value: '11' },
    ],
    correctAnswer: '7',
  },
  {
    id: 's2e-q5',
    question: '',
    questionLatex: '\\text{函数 } f(x) = -x^2 + 2x + 3 \\text{ 在区间 } [0, 3] \\text{ 上的最大值为}',
    type: 'choice',
    options: [
      { label: 'A', value: '3' },
      { label: 'B', value: '4' },
      { label: 'C', value: '0' },
      { label: 'D', value: '-6' },
    ],
    correctAnswer: '4',
  },
  {
    id: 's2e-q6',
    question: '',
    questionLatex: '\\text{若方程 } x^2 + 2x + k = 0 \\text{ 有两个不等实根，则 } k \\text{ 的取值范围为}',
    type: 'choice',
    options: [
      { label: 'A', value: 'k < 1', isLatex: true },
      { label: 'B', value: 'k \\leq 1', isLatex: true },
      { label: 'C', value: 'k > 1', isLatex: true },
      { label: 'D', value: 'k = 1', isLatex: true },
    ],
    correctAnswer: 'k < 1',
  },
  {
    id: 's2e-q7',
    question: '',
    questionLatex: '\\text{已知二次方程 } x^2 + bx + c = 0 \\text{ 的两根为 } -1 \\text{ 和 } 3\\text{，则 } b + c =',
    type: 'choice',
    options: [
      { label: 'A', value: '-5' },
      { label: 'B', value: '1' },
      { label: 'C', value: '-1' },
      { label: 'D', value: '5' },
    ],
    correctAnswer: '-5',
  },
];

// 合并导出（供 QuizPanel 使用）
export const stage2ExamQuestions: QuizQuestionData[] = [
  ...stage2InequalityQuestions,
  ...stage2QuadraticQuestions,
];

// ── 综合题（解答题，仅打印试卷使用） ──
export const stage2EssayQuestions: EssayQuestion[] = [
  {
    id: 's2e-essay-1',
    questionLatex:
      '\\text{已知 } a > 0,\\; b > 0,\\; 2a + b = 1\\text{。}\\\\[6pt]' +
      '\\text{（1）求 } ab \\text{ 的最大值；}\\\\[4pt]' +
      '\\text{（2）求 } \\dfrac{2}{a} + \\dfrac{1}{b} \\text{ 的最小值。}',
    score: 15,
    lines: 10,
  },
  {
    id: 's2e-essay-2',
    questionLatex:
      '\\text{已知 } f(x) = x^2 - 2ax + a + 2\\text{。}\\\\[6pt]' +
      '\\text{（1）若方程 } f(x) = 0 \\text{ 有两个正实根，求 } a \\text{ 的取值范围；}\\\\[4pt]' +
      '\\text{（2）若 } f(x) \\geq 0 \\text{ 对一切实数 } x \\text{ 恒成立，求 } a \\text{ 的取值范围。}',
    score: 15,
    lines: 10,
  },
  {
    id: 's2e-essay-3',
    questionLatex:
      '\\text{已知不等式 } x^2 + bx + c \\leq 0 \\text{ 的解集为 } [-1, 3]\\text{。}\\\\[6pt]' +
      '\\text{（1）求 } b, c \\text{ 的值；}\\\\[4pt]' +
      '\\text{（2）解不等式 } cx^2 + bx + 1 > 0\\text{。}',
    score: 15,
    lines: 10,
  },
  {
    id: 's2e-essay-4',
    questionLatex:
      '\\text{已知函数 } f(x) = -x^2 + 4x - 3\\text{。}\\\\[6pt]' +
      '\\text{（1）求 } f(x) = 0 \\text{ 的两根；}\\\\[4pt]' +
      '\\text{（2）求 } f(x) \\text{ 在区间 } [0, 3] \\text{ 上的最大值和最小值。}',
    score: 15,
    lines: 10,
  },
];
