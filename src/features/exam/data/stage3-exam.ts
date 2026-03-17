import type { QuizQuestionData } from '@/types';
import type { EssayQuestion } from '@/components/shared/ExamPaper';

// ── 第三阶段考试：函数思维（原创题，不与练习题库重复） ──

// ═══════ 一、函数概念与性质（6 题） ═══════
export const stage3ConceptQuestions: QuizQuestionData[] = [
  {
    id: 's3e-c1',
    question: '',
    questionLatex: '\\text{函数 } f(x) = \\sqrt{x-1} + \\ln(3-x) \\text{ 的定义域为}',
    type: 'choice',
    options: [
      { label: 'A', value: '[1, 3)', isLatex: true },
      { label: 'B', value: '(1, 3)', isLatex: true },
      { label: 'C', value: '[1, 3]', isLatex: true },
      { label: 'D', value: '(1, 3]', isLatex: true },
    ],
    correctAnswer: 'A',
    explanation: '',
    explanationLatex: '',
  },
  {
    id: 's3e-c2',
    question: '',
    questionLatex: '\\text{设 } f(x) \\text{ 是定义在 } \\mathbb{R} \\text{ 上的偶函数，且在 } [0,+\\infty) \\text{ 上单调递增，则 } f(-3), f(1), f(-2) \\text{ 的大小关系为}',
    type: 'choice',
    options: [
      { label: 'A', value: 'f(1) < f(-2) < f(-3)', isLatex: true },
      { label: 'B', value: 'f(-3) < f(-2) < f(1)', isLatex: true },
      { label: 'C', value: 'f(-2) < f(1) < f(-3)', isLatex: true },
      { label: 'D', value: 'f(1) < f(-3) < f(-2)', isLatex: true },
    ],
    correctAnswer: 'A',
    explanation: '',
    explanationLatex: '',
  },
  {
    id: 's3e-c3',
    question: '',
    questionLatex: '\\text{若 } f(x) = x^2 - 2x + 3 \\text{，则 } f(x+1) = ',
    type: 'choice',
    options: [
      { label: 'A', value: 'x^2 + 2', isLatex: true },
      { label: 'B', value: 'x^2 + 2x + 2', isLatex: true },
      { label: 'C', value: 'x^2 - 4x + 6', isLatex: true },
      { label: 'D', value: 'x^2 + 4x + 6', isLatex: true },
    ],
    correctAnswer: 'A',
    explanation: '',
    explanationLatex: '',
  },
  {
    id: 's3e-c4',
    question: '',
    questionLatex: '\\text{已知 } f(x) = ax^3 + bx + 1 \\text{，且 } f(-2) = -5 \\text{，则 } f(2) = ',
    type: 'choice',
    options: [
      { label: 'A', value: '5' },
      { label: 'B', value: '7' },
      { label: 'C', value: '-3' },
      { label: 'D', value: '3' },
    ],
    correctAnswer: 'B',
    explanation: '',
    explanationLatex: '',
  },
  {
    id: 's3e-c5',
    question: '',
    questionLatex: '\\text{函数 } f(x) = \\dfrac{x}{x-1} \\text{ 的值域为}',
    type: 'choice',
    options: [
      { label: 'A', value: '\\{y \\mid y \\neq 1\\}', isLatex: true },
      { label: 'B', value: '\\{y \\mid y \\neq 0\\}', isLatex: true },
      { label: 'C', value: '\\{y \\mid y > 1\\}', isLatex: true },
      { label: 'D', value: '\\mathbb{R}', isLatex: true },
    ],
    correctAnswer: 'A',
    explanation: '',
    explanationLatex: '',
  },
  {
    id: 's3e-c6',
    question: '',
    questionLatex: '\\text{若函数 } f(x) = (k-1)x^2 + (k-2)x + (k^2-1) \\text{ 是偶函数，则 } k = ',
    type: 'choice',
    options: [
      { label: 'A', value: '1' },
      { label: 'B', value: '2' },
      { label: 'C', value: '-1' },
      { label: 'D', value: '0' },
    ],
    correctAnswer: 'B',
    explanation: '',
    explanationLatex: '',
  },
];

// ═══════ 二、基本初等函数（6 题） ═══════
export const stage3ElemFuncQuestions: QuizQuestionData[] = [
  {
    id: 's3e-e1',
    question: '',
    questionLatex: '\\text{计算 } \\log_2 \\sqrt{32} = ',
    type: 'choice',
    options: [
      { label: 'A', value: '\\dfrac{3}{2}', isLatex: true },
      { label: 'B', value: '\\dfrac{5}{2}', isLatex: true },
      { label: 'C', value: '3', isLatex: true },
      { label: 'D', value: '5', isLatex: true },
    ],
    correctAnswer: 'B',
    explanation: '',
    explanationLatex: '',
  },
  {
    id: 's3e-e2',
    question: '',
    questionLatex: '\\text{设 } a = 2^{0.5},\\; b = \\left(\\dfrac{1}{3}\\right)^{0.5},\\; c = \\log_3 2\\text{，则}',
    type: 'choice',
    options: [
      { label: 'A', value: 'a > c > b', isLatex: true },
      { label: 'B', value: 'a > b > c', isLatex: true },
      { label: 'C', value: 'c > a > b', isLatex: true },
      { label: 'D', value: 'b > a > c', isLatex: true },
    ],
    correctAnswer: 'A',
    explanation: '',
    explanationLatex: '',
  },
  {
    id: 's3e-e3',
    question: '',
    questionLatex: '\\text{函数 } y = \\left(\\dfrac{1}{2}\\right)^x \\text{ 在 } [-1, 2] \\text{ 上的最大值为}',
    type: 'choice',
    options: [
      { label: 'A', value: '4' },
      { label: 'B', value: '2' },
      { label: 'C', value: '\\dfrac{1}{4}', isLatex: true },
      { label: 'D', value: '\\dfrac{1}{2}', isLatex: true },
    ],
    correctAnswer: 'B',
    explanation: '',
    explanationLatex: '',
  },
  {
    id: 's3e-e4',
    question: '',
    questionLatex: '\\text{若 } \\log_a 2 > 1\\text{，则 } a \\text{ 的取值范围是}',
    type: 'choice',
    options: [
      { label: 'A', value: '(1, 2)', isLatex: true },
      { label: 'B', value: '(0, 2)', isLatex: true },
      { label: 'C', value: '(2, +\\infty)', isLatex: true },
      { label: 'D', value: '(0, 1)', isLatex: true },
    ],
    correctAnswer: 'A',
    explanation: '',
    explanationLatex: '',
  },
  {
    id: 's3e-e5',
    question: '',
    questionLatex: '\\text{幂函数 } y = x^\\alpha \\text{ 的图像过点 } (8, 2)\\text{，则 } \\alpha = ',
    type: 'choice',
    options: [
      { label: 'A', value: '3' },
      { label: 'B', value: '\\dfrac{1}{3}', isLatex: true },
      { label: 'C', value: '\\dfrac{1}{2}', isLatex: true },
      { label: 'D', value: '-\\dfrac{1}{3}', isLatex: true },
    ],
    correctAnswer: 'B',
    explanation: '',
    explanationLatex: '',
  },
  {
    id: 's3e-e6',
    question: '',
    questionLatex: '\\text{已知 } 2^a = 5\\text{，则 } 2^{a+1} - 2^{a-1} = ',
    type: 'choice',
    options: [
      { label: 'A', value: '\\dfrac{5}{2}', isLatex: true },
      { label: 'B', value: '5', isLatex: true },
      { label: 'C', value: '\\dfrac{15}{2}', isLatex: true },
      { label: 'D', value: '10', isLatex: true },
    ],
    correctAnswer: 'C',
    explanation: '',
    explanationLatex: '',
  },
];

// ═══════ 三、函数图像与零点（5 题） ═══════
export const stage3GraphQuestions: QuizQuestionData[] = [
  {
    id: 's3e-g1',
    question: '',
    questionLatex: '\\text{函数 } f(x) = x^2 - 4x + 3 \\text{ 的零点为}',
    type: 'choice',
    options: [
      { label: 'A', value: '1 \\text{ 和 } 3', isLatex: true },
      { label: 'B', value: '-1 \\text{ 和 } -3', isLatex: true },
      { label: 'C', value: '1 \\text{ 和 } -3', isLatex: true },
      { label: 'D', value: '-1 \\text{ 和 } 3', isLatex: true },
    ],
    correctAnswer: 'A',
    explanation: '',
    explanationLatex: '',
  },
  {
    id: 's3e-g2',
    question: '',
    questionLatex: '\\text{函数 } f(x) = e^x - 2 \\text{ 的零点所在区间为}',
    type: 'choice',
    options: [
      { label: 'A', value: '(-1, 0)', isLatex: true },
      { label: 'B', value: '(0, 1)', isLatex: true },
      { label: 'C', value: '(1, 2)', isLatex: true },
      { label: 'D', value: '(-2, -1)', isLatex: true },
    ],
    correctAnswer: 'B',
    explanation: '',
    explanationLatex: '',
  },
  {
    id: 's3e-g3',
    question: '',
    questionLatex: '\\text{方程 } 2^x = 3 - x \\text{ 的实数根的个数为}',
    type: 'choice',
    options: [
      { label: 'A', value: '0' },
      { label: 'B', value: '1' },
      { label: 'C', value: '2' },
      { label: 'D', value: '3' },
    ],
    correctAnswer: 'B',
    explanation: '',
    explanationLatex: '',
  },
  {
    id: 's3e-g4',
    question: '',
    questionLatex: '\\text{若 } f(x) = x^3 - x \\text{，则 } f(x) \\text{ 在 } [-2, 2] \\text{ 上的零点个数为}',
    type: 'choice',
    options: [
      { label: 'A', value: '1' },
      { label: 'B', value: '2' },
      { label: 'C', value: '3' },
      { label: 'D', value: '4' },
    ],
    correctAnswer: 'C',
    explanation: '',
    explanationLatex: '',
  },
  {
    id: 's3e-g5',
    question: '',
    questionLatex: '\\text{函数 } f(x) = \\ln x - \\dfrac{2}{x} \\text{ 在 }(0,+\\infty)\\text{ 上零点的个数为}',
    type: 'choice',
    options: [
      { label: 'A', value: '0' },
      { label: 'B', value: '1' },
      { label: 'C', value: '2' },
      { label: 'D', value: '3' },
    ],
    correctAnswer: 'B',
    explanation: '',
    explanationLatex: '',
  },
];

// ═══════ 四、导数基础（5 题） ═══════
export const stage3DerivQuestions: QuizQuestionData[] = [
  {
    id: 's3e-d1',
    question: '',
    questionLatex: '\\text{曲线 } y = x^3 \\text{ 在 } x = 2 \\text{ 处的切线斜率为}',
    type: 'choice',
    options: [
      { label: 'A', value: '8' },
      { label: 'B', value: '12' },
      { label: 'C', value: '6' },
      { label: 'D', value: '4' },
    ],
    correctAnswer: 'B',
    explanation: '',
    explanationLatex: '',
  },
  {
    id: 's3e-d2',
    question: '',
    questionLatex: '\\text{函数 } f(x) = x^3 - 3x^2 + 1 \\text{ 的单调递减区间为}',
    type: 'choice',
    options: [
      { label: 'A', value: '(0, 2)', isLatex: true },
      { label: 'B', value: '(-\\infty, 0) \\cup (2, +\\infty)', isLatex: true },
      { label: 'C', value: '(-\\infty, 0)', isLatex: true },
      { label: 'D', value: '(2, +\\infty)', isLatex: true },
    ],
    correctAnswer: 'A',
    explanation: '',
    explanationLatex: '',
  },
  {
    id: 's3e-d3',
    question: '',
    questionLatex: '\\text{函数 } f(x) = x^3 - 12x \\text{ 的极小值为}',
    type: 'choice',
    options: [
      { label: 'A', value: '-16' },
      { label: 'B', value: '16' },
      { label: 'C', value: '-2' },
      { label: 'D', value: '2' },
    ],
    correctAnswer: 'A',
    explanation: '',
    explanationLatex: '',
  },
  {
    id: 's3e-d4',
    question: '',
    questionLatex: '\\text{函数 } f(x) = xe^x \\text{ 的单调递增区间为}',
    type: 'choice',
    options: [
      { label: 'A', value: '(-1, +\\infty)', isLatex: true },
      { label: 'B', value: '(-\\infty, -1)', isLatex: true },
      { label: 'C', value: '(0, +\\infty)', isLatex: true },
      { label: 'D', value: '(-\\infty, 0)', isLatex: true },
    ],
    correctAnswer: 'A',
    explanation: '',
    explanationLatex: '',
  },
  {
    id: 's3e-d5',
    question: '',
    questionLatex: '\\text{函数 } f(x) = 2x^3 - 3x^2 \\text{ 在 } [-1, 2] \\text{ 上的最小值为}',
    type: 'choice',
    options: [
      { label: 'A', value: '-5' },
      { label: 'B', value: '-1' },
      { label: 'C', value: '0' },
      { label: 'D', value: '4' },
    ],
    correctAnswer: 'A',
    explanation: '',
    explanationLatex: '',
  },
];

// 合并导出（供 QuizPanel 使用）
export const stage3ExamQuestions: QuizQuestionData[] = [
  ...stage3ConceptQuestions,
  ...stage3ElemFuncQuestions,
  ...stage3GraphQuestions,
  ...stage3DerivQuestions,
];

// ── 综合题（解答题，仅打印试卷使用） ──
export const stage3EssayQuestions: EssayQuestion[] = [
  {
    id: 's3e-essay-1',
    questionLatex:
      '\\text{（1）计算 } 2\\lg 2 + \\lg 25\\text{；}\\\\[6pt]' +
      '\\text{（2）已知 } 3^a = 2\\text{，求 } \\log_9 4 \\text{ 的值（用 } a \\text{ 表示）。}',
    score: 9,
    lines: 10,
  },
  {
    id: 's3e-essay-2',
    questionLatex:
      '\\text{已知 } f(x) \\text{ 是定义在 } \\mathbb{R} \\text{ 上的奇函数，且当 } x > 0 \\text{ 时，} f(x) = x^2 - 2x\\text{。}\\\\[6pt]' +
      '\\text{（1）求 } f(-1) \\text{ 的值；}\\\\[4pt]' +
      '\\text{（2）写出 } f(x) \\text{ 在 } \\mathbb{R} \\text{ 上的解析式。}',
    score: 9,
    lines: 10,
  },
  {
    id: 's3e-essay-3',
    questionLatex:
      '\\text{已知 } f(x) = x^3 - 3x + 1\\text{。}\\\\[6pt]' +
      '\\text{（1）求曲线 } y = f(x) \\text{ 在 } x = 1 \\text{ 处的切线方程；}\\\\[4pt]' +
      '\\text{（2）求 } f(x) \\text{ 的单调递增区间。}',
    score: 9,
    lines: 12,
  },
  {
    id: 's3e-essay-4',
    questionLatex:
      '\\text{已知 } f(x) = x^3 - 6x^2 + 9x + 1\\text{。}\\\\[6pt]' +
      '\\text{（1）求 } f(x) \\text{ 的极大值和极小值；}\\\\[4pt]' +
      '\\text{（2）求 } f(x) \\text{ 在 } [0, 4] \\text{ 上的最大值和最小值。}',
    score: 9,
    lines: 10,
  },
  {
    id: 's3e-essay-5',
    questionLatex:
      '\\text{已知 } f(x) = \\ln x - x + 2\\text{。}\\\\[6pt]' +
      '\\text{（1）用零点存在性定理证明方程 } f(x) = 0 \\text{ 在 } (e,\\, e^2) \\text{ 内有解；}\\\\[4pt]' +
      '\\text{（2）求 } f(x) \\text{ 的最大值。}',
    score: 9,
    lines: 10,
  },
  {
    id: 's3e-essay-6',
    questionLatex:
      '\\text{已知 } f(x) = \\dfrac{2^x - 1}{2^x + 1}\\text{。}\\\\[6pt]' +
      '\\text{（1）判断 } f(x) \\text{ 的奇偶性，并证明；}\\\\[4pt]' +
      '\\text{（2）证明 } f(x) \\text{ 在 } \\mathbb{R} \\text{ 上单调递增。}',
    score: 9,
    lines: 10,
  },
];
