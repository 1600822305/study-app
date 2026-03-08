import type { QuizQuestionData } from '@/types';

// ── 第1节：正负数运算 ──
export const ineqPrereqPractice1: QuizQuestionData[] = [
  {
    id: 'ip1-1',
    type: 'blank',
    question: '',
    questionLatex: '(-3) \\times (-5) = \\text{?}',
    correctAnswer: '15',
    acceptableAnswers: ['+15'],
    explanation: '负负得正：(-3)×(-5) = +15。同号相乘，结果为正。',
    explanationLatex: '(-3) \\times (-5) = +15',
  },
  {
    id: 'ip1-2',
    type: 'blank',
    question: '',
    questionLatex: '(-8) \\div 2 = \\text{?}',
    correctAnswer: '-4',
    acceptableAnswers: [],
    explanation: '异号相除，结果为负：(-8) ÷ 2 = -4。',
    explanationLatex: '(-8) \\div 2 = -4',
  },
  {
    id: 'ip1-3',
    type: 'blank',
    question: '',
    questionLatex: '(-2) \\times 3 \\times (-1) = \\text{?}',
    correctAnswer: '6',
    acceptableAnswers: ['+6'],
    explanation: '先算 (-2)×3 = -6（异号得负），再算 (-6)×(-1) = 6（同号得正）。也可以数负号个数：2个负号，偶数个，结果为正。',
    explanationLatex: '(-2) \\times 3 \\times (-1) = (-6) \\times (-1) = 6',
  },
  {
    id: 'ip1-4',
    type: 'blank',
    question: '',
    questionLatex: '(-3)^2 = \\text{?}\\text{（注意有括号）}',
    correctAnswer: '9',
    acceptableAnswers: ['+9'],
    explanation: '(-3)² = (-3)×(-3) = 9。有括号，整体平方，同号得正。注意：如果没括号 -3² = -(3²) = -9，结果完全不同！',
    explanationLatex: '(-3)^2 = (-3) \\times (-3) = 9 \\quad \\text{（注意：} -3^2 = -9 \\text{）}',
  },
];

// ── 第2节：解一元一次方程 ──
export const ineqPrereqPractice2: QuizQuestionData[] = [
  {
    id: 'ip2-1',
    type: 'blank',
    question: '',
    questionLatex: '2x + 3 = 7 \\text{，} x = \\text{?}',
    correctAnswer: '2',
    acceptableAnswers: ['x=2'],
    explanation: '移项：2x = 7-3 = 4，系数化为1：x = 4÷2 = 2。',
    explanationLatex: '2x = 7 - 3 = 4 \\Rightarrow x = 2',
  },
  {
    id: 'ip2-2',
    type: 'blank',
    question: '',
    questionLatex: '3x - 5 = x + 1 \\text{，} x = \\text{?}',
    correctAnswer: '3',
    acceptableAnswers: ['x=3'],
    explanation: '移项：含x的移到左边，常数移到右边。3x - x = 1 + 5，2x = 6，x = 3。',
    explanationLatex: '3x - x = 1 + 5 \\Rightarrow 2x = 6 \\Rightarrow x = 3',
  },
  {
    id: 'ip2-3',
    type: 'blank',
    question: '',
    questionLatex: '-2x + 4 = 0 \\text{，} x = \\text{?}',
    correctAnswer: '2',
    acceptableAnswers: ['x=2'],
    explanation: '移项：-2x = -4，两边除以 -2：x = (-4)÷(-2) = 2。注意：除以负数，但这里是方程，等号不变。',
    explanationLatex: '-2x = -4 \\Rightarrow x = \\frac{-4}{-2} = 2',
  },
];

// ── 第3节：不等号与数轴 ──
export const ineqPrereqPractice3: QuizQuestionData[] = [
  {
    id: 'ip3-1',
    type: 'choice',
    question: '在数轴上，-3 和 2 哪个大？',
    questionLatex: '\\text{在数轴上，} -3 \\text{ 和 } 2 \\text{ 哪个大？}',
    options: [
      { label: 'A', value: '-3 > 2', isLatex: true },
      { label: 'B', value: '-3 < 2', isLatex: true },
      { label: 'C', value: '-3 = 2', isLatex: true },
      { label: 'D', value: '无法比较', isLatex: false },
    ],
    correctAnswer: '-3 < 2',
    explanation: '在数轴上，右边的数更大。2 在 -3 的右边，所以 2 > -3，即 -3 < 2。',
    explanationLatex: '-3 < 2 \\quad \\text{（数轴上右边的数更大）}',
  },
  {
    id: 'ip3-2',
    type: 'choice',
    question: '"x ≥ 5"表示什么意思？',
    questionLatex: 'x \\geq 5 \\text{ 表示什么意思？}',
    options: [
      { label: 'A', value: 'x 大于 5', isLatex: false },
      { label: 'B', value: 'x 大于或等于 5', isLatex: false },
      { label: 'C', value: 'x 等于 5', isLatex: false },
      { label: 'D', value: 'x 小于或等于 5', isLatex: false },
    ],
    correctAnswer: 'x 大于或等于 5',
    explanation: '≥ 是"大于或等于"的意思，x ≥ 5 表示 x 可以是 5，也可以是比 5 大的任何数。',
    explanationLatex: 'x \\geq 5 \\Leftrightarrow x > 5 \\text{ 或 } x = 5',
  },
  {
    id: 'ip3-3',
    type: 'choice',
    question: '在数轴上表示 x > 3，应该在 3 的位置画什么？',
    questionLatex: '\\text{在数轴上表示 } x > 3 \\text{，应该在 3 的位置画什么？}',
    options: [
      { label: 'A', value: '实心圆 ●，箭头向右', isLatex: false },
      { label: 'B', value: '空心圆 ○，箭头向右', isLatex: false },
      { label: 'C', value: '实心圆 ●，箭头向左', isLatex: false },
      { label: 'D', value: '空心圆 ○，箭头向左', isLatex: false },
    ],
    correctAnswer: '空心圆 ○，箭头向右',
    explanation: 'x > 3 不包含 3 本身（严格大于），所以用空心圆 ○。"大于"方向是向右，所以箭头向右。',
    explanationLatex: 'x > 3 \\text{：○ 表示不含端点，向右表示更大的方向}',
  },
];
