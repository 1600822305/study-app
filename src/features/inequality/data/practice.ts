import type { QuizQuestionData } from '@/types';

// ══════════════════════════════════════
//  2.1 不等式 - 即时练习
// ══════════════════════════════════════

// ── 第1节：不等式的性质 + 一元一次不等式 ──
export const ineqPractice1: QuizQuestionData[] = [
  {
    id: 'iq1-1',
    type: 'choice',
    question: '',
    questionLatex: '\\text{解不等式 } 3x - 5 > 7',
    options: [
      { label: 'A', value: 'x > 4', isLatex: true },
      { label: 'B', value: 'x > 2', isLatex: true },
      { label: 'C', value: 'x < 4', isLatex: true },
      { label: 'D', value: 'x > -4', isLatex: true },
    ],
    correctAnswer: 'x > 4',
    explanation: '移项：3x > 7 + 5 = 12。系数化为1：x > 12 ÷ 3 = 4。除以正数3，不等号方向不变。',
    explanationLatex: '3x > 12 \\Rightarrow x > 4',
  },
  {
    id: 'iq1-2',
    type: 'choice',
    question: '',
    questionLatex: '\\text{解不等式 } -2x + 6 \\leq 0',
    options: [
      { label: 'A', value: 'x \\leq 3', isLatex: true },
      { label: 'B', value: 'x \\geq 3', isLatex: true },
      { label: 'C', value: 'x \\leq -3', isLatex: true },
      { label: 'D', value: 'x \\geq -3', isLatex: true },
    ],
    correctAnswer: 'x \\geq 3',
    explanation: '移项：-2x ≤ -6。两边除以 -2（负数！），不等号反向：x ≥ 3。这就是"乘除负数变方向"。',
    explanationLatex: '-2x \\leq -6 \\Rightarrow x \\geq 3',
  },
  {
    id: 'iq1-3',
    type: 'choice',
    question: '已知 a > b，下列哪个一定成立？',
    questionLatex: '\\text{已知 } a > b \\text{，下列哪个一定成立？}',
    options: [
      { label: 'A', value: '2a > 2b', isLatex: true },
      { label: 'B', value: '-a > -b', isLatex: true },
      { label: 'C', value: 'a^2 > b^2', isLatex: true },
      { label: 'D', value: '\\frac{1}{a} < \\frac{1}{b}', isLatex: true },
    ],
    correctAnswer: '2a > 2b',
    explanation: 'A正确：两边乘以正数2，不等号不变。B错误：两边乘以-1，不等号要反向，应该是 -a < -b。C错误：如果 a=1, b=-2，则 1 < 4，不成立。D错误：如果 a=1, b=-1，则 1 > -1，不成立。',
    explanationLatex: 'a > b \\Rightarrow 2a > 2b \\quad \\text{（同乘正数，不变号）}',
  },
];

// ── 第2节：基本不等式 ──
export const ineqPractice2: QuizQuestionData[] = [
  {
    id: 'iq2-1',
    type: 'choice',
    question: '',
    questionLatex: '\\text{已知 } x > 0 \\text{，则 } \\frac{x^2 + 9}{x} \\text{ 的最小值为}',
    options: [
      { label: 'A', value: '3' },
      { label: 'B', value: '6' },
      { label: 'C', value: '9' },
      { label: 'D', value: '12' },
    ],
    correctAnswer: '6',
    explanation: '关键技巧：先拆分成两项！(x² + 9)/x = x + 9/x。然后用基本不等式：x + 9/x ≥ 2√(x · 9/x) = 2√9 = 6。等号条件：x = 9/x → x² = 9 → x = 3。最小值为6。',
    explanationLatex: '\\frac{x^2 + 9}{x} = x + \\frac{9}{x} \\geq 2\\sqrt{x \\cdot \\frac{9}{x}} = 2\\sqrt{9} = 6 \\quad (x = 3 \\text{ 时取等})',
  },
  {
    id: 'iq2-2',
    type: 'choice',
    question: '',
    questionLatex: '\\text{已知 } x > 0, y > 0, 2x + y = 4 \\text{，则 } \\frac{1}{x} + \\frac{2}{y} \\text{ 的最小值为}',
    options: [
      { label: 'A', value: '1' },
      { label: 'B', value: '2' },
      { label: 'C', value: '4' },
      { label: 'D', value: '8' },
    ],
    correctAnswer: '2',
    explanation: '经典"1的代换"技巧。(1/x + 2/y) = (1/x + 2/y) · (2x+y)/4 = (2 + y/x + 4x/y + 2)/4 = (4 + y/x + 4x/y)/4。由基本不等式 y/x + 4x/y ≥ 2√4 = 4，所以原式 ≥ (4+4)/4 = 2。等号条件：y/x = 4x/y → y = 2x，代入 2x+2x = 4 → x = 1, y = 2。',
    explanationLatex: '\\frac{1}{x} + \\frac{2}{y} = \\frac{(\\frac{1}{x} + \\frac{2}{y})(2x+y)}{4} = \\frac{4 + \\frac{y}{x} + \\frac{4x}{y}}{4} \\geq \\frac{4 + 4}{4} = 2',
  },
  {
    id: 'iq2-3',
    type: 'choice',
    question: '',
    questionLatex: '\\text{下列求最值的过程，正确的是}',
    options: [
      { label: 'A', value: 'x > 0 \\text{ 时，} x + \\frac{1}{x} \\geq 2 \\text{，最小值为 } 2', isLatex: true },
      { label: 'B', value: 'x \\in \\mathbb{R} \\text{ 时，} x + \\frac{1}{x} \\geq 2', isLatex: true },
      { label: 'C', value: 'x > 0, y > 0 \\text{ 时，} (x+y)(\\frac{1}{x} + \\frac{1}{y}) \\text{ 最小值为 } 2', isLatex: true },
      { label: 'D', value: 'a > 0, a \\neq 1 \\text{ 时，} a + \\frac{1}{a} \\text{ 最小值为 } 2', isLatex: true },
    ],
    correctAnswer: 'x > 0 \\text{ 时，} x + \\frac{1}{x} \\geq 2 \\text{，最小值为 } 2',
    explanation: 'A正确：x > 0 满足"一正"，x · 1/x = 1 是定值满足"二定"，x = 1/x 时 x = 1 可取满足"三相等"。B错：x 没限制为正数，x < 0 时不等式不成立。C错：展开 = 2 + x/y + y/x ≥ 4，最小值是4不是2。D错：a ≠ 1 时等号条件 a = 1 取不到，最小值不存在（只能无限接近2但取不到）。',
    explanationLatex: 'A: x + \\frac{1}{x} \\geq 2\\sqrt{1} = 2, \\; x=1 \\text{ 可取 ✓} \\quad D: a \\neq 1 \\text{ 等号取不到 ✗}',
  },
];

// ── 第3节：一元二次不等式 ──
export const ineqPractice3: QuizQuestionData[] = [
  {
    id: 'iq3-1',
    type: 'choice',
    question: '',
    questionLatex: '\\text{解不等式 } x^2 - 5x + 6 > 0',
    options: [
      { label: 'A', value: 'x < 2 \\text{ 或 } x > 3', isLatex: true },
      { label: 'B', value: '2 < x < 3', isLatex: true },
      { label: 'C', value: 'x < -3 \\text{ 或 } x > -2', isLatex: true },
      { label: 'D', value: '-3 < x < -2', isLatex: true },
    ],
    correctAnswer: 'x < 2 \\text{ 或 } x > 3',
    explanation: '先解方程 x² - 5x + 6 = 0，分解因式 (x-2)(x-3) = 0，根为 x = 2 和 x = 3。因为最高次系数 > 0，抛物线开口向上。大于0取两边：x < 2 或 x > 3。',
    explanationLatex: 'x^2 - 5x + 6 = (x-2)(x-3) = 0 \\Rightarrow x_1 = 2, x_2 = 3 \\quad \\text{大于取两边：} x < 2 \\text{ 或 } x > 3',
  },
  {
    id: 'iq3-2',
    type: 'choice',
    question: '',
    questionLatex: '\\text{解不等式 } x^2 - 4x + 3 \\leq 0',
    options: [
      { label: 'A', value: 'x \\leq 1 \\text{ 或 } x \\geq 3', isLatex: true },
      { label: 'B', value: '1 \\leq x \\leq 3', isLatex: true },
      { label: 'C', value: '-3 \\leq x \\leq -1', isLatex: true },
      { label: 'D', value: 'x \\leq -1 \\text{ 或 } x \\geq 3', isLatex: true },
    ],
    correctAnswer: '1 \\leq x \\leq 3',
    explanation: '解方程 x² - 4x + 3 = 0，(x-1)(x-3) = 0，根为1和3。最高次系数 > 0，开口向上。小于等于0取中间（含端点）：1 ≤ x ≤ 3。',
    explanationLatex: '(x-1)(x-3) \\leq 0 \\Rightarrow 1 \\leq x \\leq 3 \\quad \\text{（小于取中间）}',
  },
  {
    id: 'iq3-3',
    type: 'choice',
    question: '',
    questionLatex: '\\text{解不等式 } -x^2 + 2x + 3 > 0',
    options: [
      { label: 'A', value: '-1 < x < 3', isLatex: true },
      { label: 'B', value: 'x < -1 \\text{ 或 } x > 3', isLatex: true },
      { label: 'C', value: '-3 < x < 1', isLatex: true },
      { label: 'D', value: 'x < -3 \\text{ 或 } x > 1', isLatex: true },
    ],
    correctAnswer: '-1 < x < 3',
    explanation: '第一步：两边乘以 -1 化标准形式（不等号变方向）：x² - 2x - 3 < 0。解方程 x² - 2x - 3 = 0，(x+1)(x-3) = 0，根为 -1 和 3。小于零取中间：-1 < x < 3。',
    explanationLatex: '-x^2 + 2x + 3 > 0 \\Rightarrow x^2 - 2x - 3 < 0 \\Rightarrow (x+1)(x-3) < 0 \\Rightarrow -1 < x < 3',
  },
];

// ── 第4节：高考真题练习 ──
export const ineqPractice4: QuizQuestionData[] = [
  {
    id: 'iq4-1',
    type: 'choice',
    question: '（2023·新高考Ⅰ卷改编）',
    questionLatex: '\\text{已知 } a > 0, b > 0, \\frac{1}{a} + \\frac{1}{b} = 2 \\text{，则 } a + b \\text{ 的最小值为}',
    options: [
      { label: 'A', value: '1' },
      { label: 'B', value: '2' },
      { label: 'C', value: '3' },
      { label: 'D', value: '4' },
    ],
    correctAnswer: '2',
    explanation: '由基本不等式：1/a + 1/b ≥ 2/√(ab) = 2，所以 √(ab) ≥ 1，ab ≥ 1。再对 a + b 用基本不等式：a + b ≥ 2√(ab) ≥ 2×1 = 2。等号条件：a = b = 1。',
    explanationLatex: '\\frac{1}{a} + \\frac{1}{b} \\geq \\frac{2}{\\sqrt{ab}} = 2 \\Rightarrow ab \\geq 1, \\quad a + b \\geq 2\\sqrt{ab} \\geq 2',
  },
  {
    id: 'iq4-2',
    type: 'choice',
    question: '（2022·全国甲卷改编）',
    questionLatex: '\\text{不等式 } x^2 - 2x - 3 \\leq 0 \\text{ 的解集为}',
    options: [
      { label: 'A', value: '[-1, 3]', isLatex: false },
      { label: 'B', value: '(-1, 3)', isLatex: false },
      { label: 'C', value: '(-∞, -1] ∪ [3, +∞)', isLatex: false },
      { label: 'D', value: '(-∞, -1) ∪ (3, +∞)', isLatex: false },
    ],
    correctAnswer: '[-1, 3]',
    explanation: '解方程 x² - 2x - 3 = 0，(x+1)(x-3) = 0，根为 -1 和 3。最高次系数 > 0。≤ 0 取中间，含端点（因为有等号）：[-1, 3]。',
    explanationLatex: '(x+1)(x-3) \\leq 0 \\Rightarrow -1 \\leq x \\leq 3 \\quad \\text{即 } [-1, 3]',
  },
  {
    id: 'iq4-3',
    type: 'choice',
    question: '（2021·新高考Ⅱ卷改编）',
    questionLatex: '\\text{已知 } x > 0 \\text{，则 } 2x + \\frac{1}{x} \\text{ 的最小值为}',
    options: [
      { label: 'A', value: '2\\sqrt{2}', isLatex: true },
      { label: 'B', value: '2' },
      { label: 'C', value: '3' },
      { label: 'D', value: '4' },
    ],
    correctAnswer: '2\\sqrt{2}',
    explanation: '用基本不等式：2x + 1/x ≥ 2√(2x · 1/x) = 2√2。等号成立条件：2x = 1/x，即 2x² = 1，x = 1/√2 = √2/2（因为 x > 0）。',
    explanationLatex: '2x + \\frac{1}{x} \\geq 2\\sqrt{2x \\cdot \\frac{1}{x}} = 2\\sqrt{2} \\quad \\text{（当 } x = \\frac{\\sqrt{2}}{2} \\text{ 时取等）}',
  },
];
