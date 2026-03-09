import type { QuizQuestionData } from '@/types';

// ══════════════════════════════════════
//  2.2 二次函数 - 综合测试（高考真题 + 精华题）
// ══════════════════════════════════════

export const quadraticQuizQuestions: QuizQuestionData[] = [
  // ── 图像与性质（3题）──
  {
    id: 'qqz1',
    question: '（高考真题改编）',
    questionLatex: '\\text{函数 } y = x^2 - 6x + 5 \\text{ 的顶点坐标是}',
    options: [
      { label: 'A', value: '(3, -4)', isLatex: false },
      { label: 'B', value: '(-3, -4)', isLatex: false },
      { label: 'C', value: '(3, 4)', isLatex: false },
      { label: 'D', value: '(6, 5)', isLatex: false },
    ],
    correctAnswer: '(3, -4)',
    explanation: '',
    explanationLatex: 'y = x^2 - 6x + 5 = (x-3)^2 - 4 \\\\[4pt] \\text{顶点 } (h, k) = (3, -4)',
  },
  {
    id: 'qqz2',
    question: '（精华题）',
    questionLatex: '\\text{已知 } y = ax^2 + bx + c \\text{ 的图像开口向下，对称轴为 } x = 1 \\text{，则}',
    options: [
      { label: 'A', value: 'a > 0,\\; b > 0', isLatex: true },
      { label: 'B', value: 'a < 0,\\; b > 0', isLatex: true },
      { label: 'C', value: 'a < 0,\\; b < 0', isLatex: true },
      { label: 'D', value: 'a > 0,\\; b < 0', isLatex: true },
    ],
    correctAnswer: 'a < 0,\\; b > 0',
    explanation: '',
    explanationLatex: '\\text{开口向下 } \\Rightarrow a < 0 \\\\[4pt] \\text{对称轴 } x = -\\dfrac{b}{2a} = 1 \\Rightarrow b = -2a \\\\[4pt] a < 0 \\Rightarrow b = -2a > 0',
  },
  {
    id: 'qqz3',
    question: '（高考真题改编）',
    questionLatex: '\\text{函数 } y = 2x^2 - 8x + 3 \\text{ 在区间 } [0, 3] \\text{ 上的最小值为}',
    options: [
      { label: 'A', value: '-5', isLatex: false },
      { label: 'B', value: '3', isLatex: false },
      { label: 'C', value: '-3', isLatex: false },
      { label: 'D', value: '0', isLatex: false },
    ],
    correctAnswer: '-5',
    explanation: '',
    explanationLatex: '\\text{对称轴 } x = -\\dfrac{-8}{2 \\times 2} = 2 \\in [0, 3] \\\\[4pt] y_{\\min} = y(2) = 2(4) - 8(2) + 3 = 8 - 16 + 3 = -5 \\\\[4pt] \\text{对称轴在区间内，顶点处取最小值}',
  },

  // ── 判别式（3题）──
  {
    id: 'qqz4',
    question: '（精华题）',
    questionLatex: '\\text{方程 } x^2 + 2x + k = 0 \\text{ 有两个不等实根，则 } k \\text{ 的范围是}',
    options: [
      { label: 'A', value: 'k < 1', isLatex: true },
      { label: 'B', value: 'k \\leq 1', isLatex: true },
      { label: 'C', value: 'k > 1', isLatex: true },
      { label: 'D', value: 'k = 1', isLatex: true },
    ],
    correctAnswer: 'k < 1',
    explanation: '',
    explanationLatex: '\\text{两个不等实根} \\Rightarrow \\Delta > 0 \\\\[4pt] \\Delta = 4 - 4k > 0 \\Rightarrow k < 1',
  },
  {
    id: 'qqz6',
    question: '（精华题）',
    questionLatex: '\\text{抛物线 } y = x^2 - 2x + m \\text{ 与 } x \\text{ 轴相切，则 } m =',
    options: [
      { label: 'A', value: '0' },
      { label: 'B', value: '1' },
      { label: 'C', value: '-1' },
      { label: 'D', value: '2' },
    ],
    correctAnswer: '1',
    explanation: '',
    explanationLatex: '\\text{相切} \\Rightarrow \\Delta = 0 \\\\[4pt] \\Delta = (-2)^2 - 4(1)(m) = 4 - 4m = 0 \\\\[4pt] m = 1',
  },

  // ── 韦达定理（3题）──
  {
    id: 'qqz7',
    question: '（高考真题改编）',
    questionLatex: '\\text{已知方程 } x^2 - 3x + 1 = 0 \\text{ 的两根为 } x_1, x_2 \\text{，则 } \\dfrac{1}{x_1} + \\dfrac{1}{x_2} =',
    options: [
      { label: 'A', value: '3', isLatex: false },
      { label: 'B', value: '1', isLatex: false },
      { label: 'C', value: '-3', isLatex: false },
      { label: 'D', value: '\\dfrac{1}{3}', isLatex: true },
    ],
    correctAnswer: '3',
    explanation: '',
    explanationLatex: '\\text{韦达：} x_1 + x_2 = 3,\\; x_1 x_2 = 1 \\\\[6pt] \\dfrac{1}{x_1} + \\dfrac{1}{x_2} = \\dfrac{x_1 + x_2}{x_1 x_2} = \\dfrac{3}{1} = 3 \\\\[4pt] \\text{技巧：} \\dfrac{1}{x_1} + \\dfrac{1}{x_2} \\text{ 通分后就是"和÷积"}',
  },
  {
    id: 'qqz8',
    question: '（精华题·韦达逆用）',
    questionLatex: '\\text{以 } 2 \\text{ 和 } -5 \\text{ 为根的一元二次方程是}',
    options: [
      { label: 'A', value: 'x^2 + 3x - 10 = 0', isLatex: true },
      { label: 'B', value: 'x^2 - 3x - 10 = 0', isLatex: true },
      { label: 'C', value: 'x^2 + 3x + 10 = 0', isLatex: true },
      { label: 'D', value: 'x^2 - 3x + 10 = 0', isLatex: true },
    ],
    correctAnswer: 'x^2 + 3x - 10 = 0',
    explanation: '',
    explanationLatex: '\\text{韦达逆用：} x^2 - (x_1 + x_2)x + x_1 x_2 = 0 \\\\[4pt] x_1 + x_2 = 2 + (-5) = -3,\\quad x_1 x_2 = 2 \\times (-5) = -10 \\\\[4pt] x^2 - (-3)x + (-10) = 0 \\Rightarrow x^2 + 3x - 10 = 0',
  },
  {
    id: 'qqz9',
    question: '（高考真题改编）',
    questionLatex: '\\text{已知 } x_1, x_2 \\text{ 是 } x^2 + 4x - 3 = 0 \\text{ 的两根，则 } (x_1 - x_2)^2 =',
    options: [
      { label: 'A', value: '28', isLatex: false },
      { label: 'B', value: '22', isLatex: false },
      { label: 'C', value: '16', isLatex: false },
      { label: 'D', value: '10', isLatex: false },
    ],
    correctAnswer: '28',
    explanation: '',
    explanationLatex: '\\text{韦达：} x_1 + x_2 = -4,\\; x_1 x_2 = -3 \\\\[6pt] (x_1 - x_2)^2 = (x_1 + x_2)^2 - 4x_1 x_2 = 16 - 4(-3) = 16 + 12 = 28 \\\\[4pt] \\text{公式：} (x_1 - x_2)^2 = (x_1 + x_2)^2 - 4x_1 x_2 \\text{（高频考点！）}',
  },

  // ── 综合（2题）──
  {
    id: 'qqz10',
    question: '（精华题·三位一体）',
    questionLatex: '\\text{已知 } f(x) = x^2 - 2x - 3 \\text{，则 } f(x) > 0 \\text{ 的解集为}',
    options: [
      { label: 'A', value: '(-1, 3)', isLatex: true },
      { label: 'B', value: '(-\\infty, -1) \\cup (3, +\\infty)', isLatex: true },
      { label: 'C', value: '[-1, 3]', isLatex: true },
      { label: 'D', value: '(-3, 1)', isLatex: true },
    ],
    correctAnswer: '(-\\infty, -1) \\cup (3, +\\infty)',
    explanation: '',
    explanationLatex: 'f(x) = (x+1)(x-3) = 0 \\Rightarrow x = -1 \\text{ 或 } x = 3 \\\\[4pt] a = 1 > 0 \\text{（开口朝上），} f(x) > 0 \\text{ → 大于取两边} \\\\[4pt] \\text{解集：} x < -1 \\text{ 或 } x > 3 \\\\[4pt] \\text{三位一体：函数图像在 } x \\text{ 轴上方的部分}',
  },
  {
    id: 'qqz11',
    question: '（高考真题改编·综合）',
    questionLatex: '\\text{已知 } x_1, x_2 \\text{ 是 } 2x^2 - 5x + 1 = 0 \\text{ 的两根，则 } x_1^2 + x_2^2 =',
    options: [
      { label: 'A', value: '\\dfrac{21}{4}', isLatex: true },
      { label: 'B', value: '\\dfrac{17}{4}', isLatex: true },
      { label: 'C', value: '\\dfrac{25}{4}', isLatex: true },
      { label: 'D', value: '\\dfrac{29}{4}', isLatex: true },
    ],
    correctAnswer: '\\dfrac{21}{4}',
    explanation: '',
    explanationLatex: '\\text{韦达：} x_1 + x_2 = \\dfrac{5}{2},\\; x_1 x_2 = \\dfrac{1}{2} \\\\[6pt] x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1 x_2 = \\dfrac{25}{4} - 1 = \\dfrac{21}{4}',
  },
];
