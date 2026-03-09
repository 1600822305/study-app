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
    explanation: '选C。同向不等式可以相加（性质3）。A错：两个不等式交叉相减，大小不确定。B错：没有正数条件，乘积方向不定。D错：同理缺少正数条件。',
    explanationLatex: 'a > b, \\; c > d \\xRightarrow{\\text{同向相加}} a + c > b + d',
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
    explanation: '选B。负数的绝对值更大，相加后结果为负。A错：和为负不是正。C错：绝对值大的平方更大，应该大于不是小于。D错：一正一负相乘为负。',
    explanationLatex: 'a < 0,\\; |a| > |b| \\Rightarrow a + b < 0 \\\\[4pt] \\text{C错：} |a| > |b| \\Rightarrow a^2 > b^2 \\quad \\text{D错：} a < 0, b > 0 \\Rightarrow ab < 0',
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
    explanation: '去分母（乘6），去括号，合并同类项，移项即可。',
    explanationLatex: '3(x+1) - 2(x-2) \\leq 6 \\Rightarrow 3x+3-2x+4 \\leq 6 \\Rightarrow x + 7 \\leq 6 \\Rightarrow x \\leq -1',
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
    explanation: '直接套基本不等式，注意根号下是两项的积。等号条件：两项相等时取到。',
    explanationLatex: 'x + \\frac{1}{2x} \\geq 2\\sqrt{x \\cdot \\frac{1}{2x}} = 2\\sqrt{\\frac{1}{2}} = \\sqrt{2} \\quad\\text{等号：} x = \\frac{1}{2x} \\Rightarrow x = \\frac{\\sqrt{2}}{2}',
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
    explanation: '用"1的代换"技巧：把条件等于1乘进去展开，再用基本不等式。',
    explanationLatex: 'a+b = (a+b) \\cdot 1 = (a+b)(\\frac{1}{a}+\\frac{4}{b}) = 5 + \\frac{4a}{b} + \\frac{b}{a} \\geq 5 + 2\\sqrt{4} = 9 \\\\[4pt] \\text{等号：} \\frac{4a}{b} = \\frac{b}{a} \\Rightarrow b = 2a \\Rightarrow a = 3, b = 6',
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
    explanation: '积为定值，用"积定和最小"。等号条件：长等于宽，即正方形。',
    explanationLatex: '\\text{设长 } a \\text{、宽 } b,\\; ab = 36 \\\\[4pt] \\text{周长} = 2(a+b) \\geq 2 \\times 2\\sqrt{ab} = 4\\sqrt{36} = 24 \\quad (a = b = 6 \\text{ 时取等})',
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
    explanation: '展开化为标准形式，最高次系数为正，小于零取中间。也可直接判断两因式在区间内的符号。',
    explanationLatex: '-2x^2 + 7x - 3 > 0 \\Rightarrow 2x^2 - 7x + 3 < 0 \\Rightarrow (2x-1)(x-3) < 0 \\Rightarrow \\frac{1}{2} < x < 3',
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
    explanation: '恒大于零需要：开口向上且无实数根（判别式小于零）。注意判别式等于零时有根，该点取等号不满足严格大于，所以不含等号。',
    explanationLatex: '\\Delta = (-2)^2 - 4a = 4 - 4a < 0 \\Rightarrow a > 1 \\\\[4pt] \\text{注意：} a = 1 \\text{ 时 } \\Delta = 0 \\text{，有根，不满足"恒} > 0 \\text{"，所以不取等}',
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
    explanation: '先解二次不等式求集合A，再与B取交集。这种"不等式+集合"是高考常考综合题。',
    explanationLatex: 'x^2 - 2x - 3 = (x+1)(x-3) \\leq 0 \\Rightarrow A = [-1,3] \\\\[4pt] B = [0, +\\infty) \\Rightarrow A \\cap B = [0, 3]',
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
    explanation: '用"1的代换"技巧：把条件除以2变成1，乘进原式展开，再用基本不等式。',
    explanationLatex: '\\frac{1}{a}+\\frac{4}{b} = \\frac{(\\frac{1}{a}+\\frac{4}{b})(a+b)}{2} = \\frac{5+\\frac{4a}{b}+\\frac{b}{a}}{2} \\geq \\frac{5 + 2\\sqrt{4}}{2} = \\frac{9}{2} \\\\[4pt] \\text{等号：} \\frac{4a}{b} = \\frac{b}{a} \\Rightarrow b = 2a \\Rightarrow a = \\frac{2}{3},\\; b = \\frac{4}{3}',
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
    explanation: '选B。两个不相等的正数，平方和严格大于二倍乘积（等号取不到）。A是大于等于不是小于等于，C分母为负，D根号保序应小于。',
    explanationLatex: 'a \\neq b \\Rightarrow a^2 + b^2 > 2ab \\;(\\text{等号取不到}) \\quad \\text{A错：}\\geq 2 \\quad \\text{C错：}\\tfrac{1}{a-b}<0 \\quad \\text{D错：}\\sqrt{a}<\\sqrt{b}',
  },
];
