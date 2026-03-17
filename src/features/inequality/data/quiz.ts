import type { QuizQuestionData } from '@/types';

// ══════════════════════════════════════
//  2.1 不等式 - 综合测试（高考真题 + 精华题）
// ══════════════════════════════════════

export const inequalityQuizQuestions: QuizQuestionData[] = [
  // ── 不等式性质（3题）──
  {
    id: 'iqz1',
    question: '（高考真题改编）',
    questionLatex: '\\text{已知 } a > b, \\; c > d \\text{，下列一定成立的是}',
    options: [
      { label: 'A', value: 'a - d > b - c', isLatex: true },
      { label: 'B', value: 'ac > bd', isLatex: true },
      { label: 'C', value: 'a + c > b + d', isLatex: true },
      { label: 'D', value: '\\frac{a}{c} > \\frac{b}{d}', isLatex: true },
    ],
    correctAnswer: 'a + c > b + d',
  },
  {
    id: 'iqz2',
    question: '（精华题）',
    questionLatex: '\\text{已知 } a < 0 < b \\text{，且 } |a| > |b| \\text{，下列一定成立的是}',
    options: [
      { label: 'A', value: 'a + b > 0', isLatex: true },
      { label: 'B', value: 'a + b < 0', isLatex: true },
      { label: 'C', value: 'a^2 < b^2', isLatex: true },
      { label: 'D', value: 'ab > 0', isLatex: true },
    ],
    correctAnswer: 'a + b < 0',
  },
  {
    id: 'iqz3',
    question: '（高考真题改编）',
    questionLatex: '\\text{解不等式 } \\frac{x+1}{2} - \\frac{x-2}{3} \\leq 1',
    options: [
      { label: 'A', value: 'x \\leq 1', isLatex: true },
      { label: 'B', value: 'x \\leq 5', isLatex: true },
      { label: 'C', value: 'x \\leq -1', isLatex: true },
      { label: 'D', value: 'x \\geq 1', isLatex: true },
    ],
    correctAnswer: 'x \\leq -1',
  },

  // ── 基本不等式（4题）──
  {
    id: 'iqz4',
    question: '（2022 新高考改编）',
    questionLatex: '\\text{已知 } x > 0 \\text{，则 } x + \\frac{1}{2x} \\text{ 的最小值为}',
    options: [
      { label: 'A', value: '1' },
      { label: 'B', value: '\\sqrt{2}', isLatex: true },
      { label: 'C', value: '2' },
      { label: 'D', value: '2\\sqrt{2}', isLatex: true },
    ],
    correctAnswer: '\\sqrt{2}',
  },
  {
    id: 'iqz5',
    question: '（2023 全国甲卷改编）',
    questionLatex: '\\text{已知 } a > 0, b > 0, \\frac{1}{a} + \\frac{4}{b} = 1 \\text{，则 } a + b \\text{ 的最小值为}',
    options: [
      { label: 'A', value: '5' },
      { label: 'B', value: '9' },
      { label: 'C', value: '12' },
      { label: 'D', value: '16' },
    ],
    correctAnswer: '9',
  },
  {
    id: 'iqz7',
    question: '（精华题·应用）',
    questionLatex: '\\text{某矩形面积为 } 36 \\text{，其周长的最小值为}',
    options: [
      { label: 'A', value: '12' },
      { label: 'B', value: '24' },
      { label: 'C', value: '36' },
      { label: 'D', value: '48' },
    ],
    correctAnswer: '24',
  },

  // ── 一元二次不等式（3题）──
  {
    id: 'iqz8',
    question: '（高考真题改编）',
    questionLatex: '\\text{不等式 } (2x - 1)(3 - x) > 0 \\text{ 的解集为}',
    options: [
      { label: 'A', value: '(\\frac{1}{2}, 3)', isLatex: true },
      { label: 'B', value: '(-3, -\\frac{1}{2})', isLatex: true },
      { label: 'C', value: '(-\\infty, \\frac{1}{2}) \\cup (3, +\\infty)', isLatex: true },
      { label: 'D', value: '[\\frac{1}{2}, 3]', isLatex: true },
    ],
    correctAnswer: '(\\frac{1}{2}, 3)',
  },
  {
    id: 'iqz9',
    question: '（精华题·恒成立问题）',
    questionLatex: '\\text{若不等式 } x^2 - 2x + a > 0 \\text{ 对一切实数 } x \\text{ 恒成立，则 } a \\text{ 的范围是}',
    options: [
      { label: 'A', value: 'a > 1', isLatex: true },
      { label: 'B', value: 'a \\geq 1', isLatex: true },
      { label: 'C', value: 'a > 0', isLatex: true },
      { label: 'D', value: 'a > -1', isLatex: true },
    ],
    correctAnswer: 'a > 1',
  },
  {
    id: 'iqz10',
    question: '（2021 新高考改编）',
    questionLatex: '\\text{集合 } A = \\{x \\mid x^2 - 2x - 3 \\leq 0\\}, \\; B = \\{x \\mid x \\geq 0\\} \\text{，则 } A \\cap B =',
    options: [
      { label: 'A', value: '[0, 3]', isLatex: false },
      { label: 'B', value: '[-1, 3]', isLatex: false },
      { label: 'C', value: '(0, 3)', isLatex: false },
      { label: 'D', value: '[-1, 0]', isLatex: false },
    ],
    correctAnswer: '[0, 3]',
  },

  // ── 综合（2题）──
  {
    id: 'iqz11',
    question: '（2022 新高考Ⅱ卷改编）',
    questionLatex: '\\text{已知 } a > 0, b > 0, a + b = 2 \\text{，则 } \\frac{1}{a} + \\frac{4}{b} \\text{ 的最小值为}',
    options: [
      { label: 'A', value: '\\frac{9}{2}', isLatex: true },
      { label: 'B', value: '4' },
      { label: 'C', value: '5' },
      { label: 'D', value: '3' },
    ],
    correctAnswer: '\\frac{9}{2}',
  },
  {
    id: 'iqz12',
    question: '（精华题·综合判断）',
    questionLatex: '\\text{已知 } 0 < a < b \\text{，下列不等式恒成立的是}',
    options: [
      { label: 'A', value: '\\frac{a}{b} + \\frac{b}{a} \\leq 2', isLatex: true },
      { label: 'B', value: 'a^2 + b^2 > 2ab', isLatex: true },
      { label: 'C', value: '\\frac{1}{a-b} > 0', isLatex: true },
      { label: 'D', value: '\\sqrt{a} > \\sqrt{b}', isLatex: true },
    ],
    correctAnswer: 'a^2 + b^2 > 2ab',
  },
];
