import type { QuizQuestionData } from '@/types';

// ── 精华练习：函数的概念与性质 10 道 ──

export const conceptPractice: QuizQuestionData[] = [
  // ─── 1. 组合限制求定义域 ───
  {
    id: 'fp-1',
    type: 'choice',
    question: '函数',
    questionLatex:
      'f(x) = \\dfrac{\\sqrt{x-1}}{x-2} \\text{ 的定义域为}',
    options: [
      { label: 'A', value: '[1,2)\\cup(2,+\\infty)', isLatex: true },
      { label: 'B', value: '(1,2)\\cup(2,+\\infty)', isLatex: true },
      { label: 'C', value: '[1,+\\infty)', isLatex: true },
      { label: 'D', value: '(1,+\\infty)', isLatex: true },
    ],
    correctAnswer: '[1,2)\\cup(2,+\\infty)',
  },

  // ─── 2. 抽象函数定义域（高频考点！） ───
  {
    id: 'fp-2',
    type: 'choice',
    question: '已知',
    questionLatex:
      'f(x) \\text{ 的定义域为 } [0,2]\\text{，则 } f(2x-1) \\text{ 的定义域为}',
    options: [
      { label: 'A', value: '[0,2]', isLatex: true },
      { label: 'B', value: '[\\frac{1}{2}, \\frac{3}{2}]', isLatex: true },
      { label: 'C', value: '[-1,3]', isLatex: true },
      { label: 'D', value: '[1,5]', isLatex: true },
    ],
    correctAnswer: '[\\frac{1}{2}, \\frac{3}{2}]',
  },

  // ─── 3. 判断同一函数 ───
  {
    id: 'fp-3',
    type: 'choice',
    question: '下列哪组函数是同一函数？',
    questionLatex:
      '\\text{下列哪组中的两个函数是同一函数？}',
    options: [
      { label: 'A', value: 'f(x)=x,\\; g(x)=\\dfrac{x^2}{x}', isLatex: true },
      { label: 'B', value: 'f(x)=|x|,\\; g(x)=\\sqrt{x^2}', isLatex: true },
      { label: 'C', value: 'f(x)=x^2,\\; g(t)=t^2', isLatex: true },
      { label: 'D', value: 'f(x)=1,\\; g(x)=x^0', isLatex: true },
    ],
    correctAnswer: 'f(x)=|x|,\\; g(x)=\\sqrt{x^2}',
  },

  // ─── 4. 分段函数求值 ───
  {
    id: 'fp-4',
    type: 'blank',
    question: '',
    questionLatex:
      'f(x) = \\begin{cases} x+1, & x \\leq 0 \\\\ 2^x, & x > 0 \\end{cases} \\text{，则 } f(f(-1)) = \\text{?}',
    correctAnswer: '1',
  },

  // ─── 5. 配方法求值域 ───
  {
    id: 'fp-5',
    type: 'choice',
    question: '函数',
    questionLatex:
      'f(x) = -x^2 + 4x - 1 \\;(x \\in [0,3]) \\text{ 的值域为}',
    options: [
      { label: 'A', value: '[-1,3]', isLatex: true },
      { label: 'B', value: '(-\\infty, 3]', isLatex: true },
      { label: 'C', value: '[2,3]', isLatex: true },
      { label: 'D', value: '[-1,+\\infty)', isLatex: true },
    ],
    correctAnswer: '[-1,3]',
  },

  // ─── 6. 分式函数求值域（反解法） ───
  {
    id: 'fp-6',
    type: 'choice',
    question: '函数',
    questionLatex:
      'f(x) = \\dfrac{2x+1}{x-1} \\;(x \\neq 1) \\text{ 的值域为}',
    options: [
      { label: 'A', value: '\\mathbb{R}', isLatex: true },
      { label: 'B', value: '(-\\infty, 2)\\cup(2,+\\infty)', isLatex: true },
      { label: 'C', value: '(-\\infty, 1)\\cup(1,+\\infty)', isLatex: true },
      { label: 'D', value: '[2,+\\infty)', isLatex: true },
    ],
    correctAnswer: '(-\\infty, 2)\\cup(2,+\\infty)',
  },

  // ─── 7. 定义法证明单调性 ───
  {
    id: 'fp-7',
    type: 'choice',
    question: '用定义法证明',
    questionLatex:
      'f(x) = x + \\dfrac{1}{x} \\text{ 在 } (1, +\\infty) \\text{ 上单调递增，取 } x_1 < x_2\\text{，则 } f(x_1)-f(x_2) \\text{ 化简后为}',
    options: [
      { label: 'A', value: '(x_1-x_2)\\left(1 - \\dfrac{1}{x_1 x_2}\\right)', isLatex: true },
      { label: 'B', value: '(x_1-x_2)\\left(1 + \\dfrac{1}{x_1 x_2}\\right)', isLatex: true },
      { label: 'C', value: '\\dfrac{x_1 - x_2}{x_1 x_2}', isLatex: true },
      { label: 'D', value: '(x_2-x_1)\\left(1 - \\dfrac{1}{x_1 x_2}\\right)', isLatex: true },
    ],
    correctAnswer: '(x_1-x_2)\\left(1 - \\dfrac{1}{x_1 x_2}\\right)',
  },

  // ─── 8. 已知一半求另一半（奇偶性应用） ───
  {
    id: 'fp-10',
    type: 'blank',
    question: '',
    questionLatex:
      '\\text{已知 } f(x) \\text{ 是偶函数，当 } x \\geq 0 \\text{ 时，} f(x) = x^2 - 2x \\\\[4pt] \\text{则 } f(-3) = \\text{?}',
    correctAnswer: '3',
  },

  // ─── 11. 奇偶性 + 单调性综合 ───
  {
    id: 'fp-11',
    type: 'choice',
    question: '已知',
    questionLatex:
      'f(x) \\text{ 是定义在 } \\mathbb{R} \\text{ 上的偶函数，在 } [0,+\\infty) \\text{ 上单调递增。} \\\\[4pt] \\text{若 } f(a) \\leq f(2)\\text{，则 } a \\text{ 的取值范围为}',
    options: [
      { label: 'A', value: 'a \\leq 2', isLatex: true },
      { label: 'B', value: '-2 \\leq a \\leq 2', isLatex: true },
      { label: 'C', value: 'a \\geq -2', isLatex: true },
      { label: 'D', value: 'a \\leq -2 \\text{ 或 } a \\geq 2', isLatex: true },
    ],
    correctAnswer: '-2 \\leq a \\leq 2',
  },

  // ─── 12. 抽象函数定义域进阶 ───
  {
    id: 'fp-12',
    type: 'choice',
    question: '已知',
    questionLatex:
      'f(2x+1) \\text{ 的定义域为 } [-1,3]\\text{，则 } f(x) \\text{ 的定义域为}',
    options: [
      { label: 'A', value: '[-1,7]', isLatex: true },
      { label: 'B', value: '[-1,3]', isLatex: true },
      { label: 'C', value: '[0,3]', isLatex: true },
      { label: 'D', value: '[-3,5]', isLatex: true },
    ],
    correctAnswer: '[-1,7]',
  },
];
