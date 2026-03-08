import type { QuizQuestionData } from '@/types';

// ── 第1节：解方程 ──
export const setsPrereqPractice1: QuizQuestionData[] = [
  {
    id: 'sp1-1',
    type: 'blank',
    question: '',
    questionLatex: 'x^2 - x - 6 = 0 \\text{，} x = \\text{?}',
    correctAnswer: '3或-2',
    acceptableAnswers: ['x=3或x=-2', '3 或 -2', '-2或3', '-2 或 3', 'x=3,x=-2', '3,-2', '-2,3'],
    explanation: '因式分解 (x-3)(x+2)=0，x=3 或 x=-2。',
    explanationLatex: '(x-3)(x+2)=0 \\Rightarrow x=3 \\text{ 或 } x=-2',
  },
  {
    id: 'sp1-2',
    type: 'blank',
    question: '',
    questionLatex: 'x^2 + 2x + 1 = 0 \\text{，} x = \\text{?}',
    correctAnswer: '-1',
    acceptableAnswers: ['x=-1'],
    explanation: '完全平方：(x+1)²=0，x=-1（重根）。',
    explanationLatex: '(x+1)^2 = 0 \\Rightarrow x = -1',
  },
  {
    id: 'sp1-3',
    type: 'blank',
    question: '',
    questionLatex: 'x^2 - 9 = 0 \\text{，} x = \\text{?}',
    correctAnswer: '±3',
    acceptableAnswers: ['3或-3', '-3或3', '3,-3', '-3,3', 'x=±3', '+ 3 或 -3'],
    explanation: '平方差：(x+3)(x-3)=0，x=±3。',
    explanationLatex: '(x+3)(x-3)=0 \\Rightarrow x = \\pm 3',
  },
];

// ── 第2节：解不等式 ──
export const setsPrereqPractice2: QuizQuestionData[] = [
  {
    id: 'sp2-1',
    type: 'choice',
    question: '',
    questionLatex: 'x^2 - 5x + 6 < 0 \\text{ 的解集是？}',
    options: [
      { label: 'A', value: 'x < 2 或 x > 3', isLatex: false },
      { label: 'B', value: '2 < x < 3', isLatex: false },
      { label: 'C', value: 'x ≤ 2 或 x ≥ 3', isLatex: false },
      { label: 'D', value: '2 ≤ x ≤ 3', isLatex: false },
    ],
    correctAnswer: '2 < x < 3',
    explanation: '小于零取中间（夹在两根之间）：2 < x < 3。',
  },
  {
    id: 'sp2-2',
    type: 'choice',
    question: '',
    questionLatex: 'x^2 - 4 \\geq 0 \\text{ 的解集是？}',
    options: [
      { label: 'A', value: '-2 ≤ x ≤ 2', isLatex: false },
      { label: 'B', value: 'x ≤ -2 或 x ≥ 2', isLatex: false },
      { label: 'C', value: 'x < -2 或 x > 2', isLatex: false },
      { label: 'D', value: '-2 < x < 2', isLatex: false },
    ],
    correctAnswer: 'x ≤ -2 或 x ≥ 2',
    explanation: '大于等于零取两边（远离两根）：x ≤ -2 或 x ≥ 2。',
  },
];

// ── 第3节：数轴表示 ──
export const setsPrereqPractice3: QuizQuestionData[] = [
  {
    id: 'sp3-1',
    type: 'choice',
    question: '',
    questionLatex: 'x \\leq -1 \\text{ 在数轴上，-1 用什么圆？}',
    options: [
      { label: 'A', value: '空心圆 ○（不含端点）' },
      { label: 'B', value: '实心圆 ●（含端点）' },
    ],
    correctAnswer: '实心圆 ●（含端点）',
    explanation: '≤ 包含等号，所以端点用实心圆。',
  },
  {
    id: 'sp3-2',
    type: 'choice',
    question: '',
    questionLatex: '1 < x < 4 \\text{ 的两个端点分别用？}',
    options: [
      { label: 'A', value: '1 空心，4 空心' },
      { label: 'B', value: '1 实心，4 实心' },
      { label: 'C', value: '1 空心，4 实心' },
      { label: 'D', value: '1 实心，4 空心' },
    ],
    correctAnswer: '1 空心，4 空心',
    explanation: '< 不含等号，两个端点都用空心圆。',
  },
];

// ── 第4节：区间记号 ──
export const setsPrereqPractice4: QuizQuestionData[] = [
  {
    id: 'sp4-1',
    type: 'blank',
    question: '',
    questionLatex: '\\{x \\mid -3 < x \\leq 5\\} \\text{ 用区间表示 = ?}',
    correctAnswer: '(-3,5]',
    acceptableAnswers: ['(-3, 5]', '( -3, 5]', '(-3 ,5]'],
    explanation: '< 对应小括号，≤ 对应方括号。',
  },
  {
    id: 'sp4-2',
    type: 'blank',
    question: '',
    questionLatex: '\\{x \\mid x \\geq 3\\} \\text{ 用区间表示 = ?}',
    correctAnswer: '[3,+∞)',
    acceptableAnswers: ['[3, +∞)', '[3,+∞)', '[3, +infinity)', '[3,∞)', '[3, ∞)'],
    explanation: '≥ 用方括号，∞ 永远用小括号。',
  },
];

// ── SetsPage 即时练习 ──

// 第1节：集合基础
export const setsPractice1: QuizQuestionData[] = [
  {
    id: 'stp1-1',
    type: 'choice',
    question: '',
    questionLatex: '\\text{下列哪个是集合？}',
    options: [
      { label: 'A', value: '全班比较高的同学' },
      { label: 'B', value: '大于5的自然数' },
      { label: 'C', value: '好看的花' },
      { label: 'D', value: '比较大的数' },
    ],
    correctAnswer: '大于5的自然数',
    explanation: '集合要求元素确定。"比较高""好看""比较大"都没有明确标准，不确定。',
  },
  {
    id: 'stp1-2',
    type: 'choice',
    question: '',
    questionLatex: '\\text{集合 } \\{1, 2, 3\\} \\text{ 和 } \\{3, 1, 2\\} \\text{ 是同一个集合吗？}',
    options: [
      { label: 'A', value: '是' },
      { label: 'B', value: '不是' },
    ],
    correctAnswer: '是',
    explanation: '集合无序性：元素排列顺序不影响集合本身。',
  },
];

// 第1.5节：元素与集合的关系
export const setsPractice0: QuizQuestionData[] = [
  {
    id: 'stp0-1',
    type: 'choice',
    question: '',
    questionLatex: 'A = \\{2, 4, 6, 8\\}\\text{，}8 \\;\\rule{2em}{0.4pt}\\; A',
    options: [
      { label: 'A', value: '∈' },
      { label: 'B', value: '∉' },
    ],
    correctAnswer: '∈',
    explanation: '8 是集合 A 的元素，所以 8 ∈ A。',
  },
  {
    id: 'stp0-2',
    type: 'choice',
    question: '',
    questionLatex: 'B = \\{x \\mid x > 5\\}\\text{，}3 \\;\\rule{2em}{0.4pt}\\; B',
    options: [
      { label: 'A', value: '∈' },
      { label: 'B', value: '∉' },
    ],
    correctAnswer: '∉',
    explanation: '3 不大于 5，不满足条件，所以 3 ∉ B。',
  },
];

// 第2节：集合的表示方法
export const setsPractice2: QuizQuestionData[] = [
  {
    id: 'stp2-1',
    type: 'blank',
    question: '用列举法表示"不超过 5 的正整数"',
    correctAnswer: '{1,2,3,4,5}',
    acceptableAnswers: ['{1, 2, 3, 4, 5}', '{1,2,3,4,5}'],
    explanation: '不超过 5 的正整数就是 1, 2, 3, 4, 5。',
  },
  {
    id: 'stp2-2',
    type: 'blank',
    question: '',
    questionLatex: '\\{x \\mid x^2 = 1\\} \\text{ 用列举法 = ?}',
    correctAnswer: '{-1,1}',
    acceptableAnswers: ['{-1, 1}', '{1, -1}', '{1,-1}'],
    explanation: 'x² = 1 的解是 x = ±1。',
  },
  {
    id: 'stp2-3',
    type: 'blank',
    question: '',
    questionLatex: '\\{x \\mid -3 \\leq x < 2\\} \\text{ 写成区间 = ?}',
    correctAnswer: '[-3,2)',
    acceptableAnswers: ['[-3, 2)', '[-3 ,2)'],
    explanation: '≤ 用方括号，< 用小括号。',
  },
  {
    id: 'stp2-4',
    type: 'blank',
    question: '',
    questionLatex: '\\{x \\mid x > 5\\} \\text{ 写成区间 = ?}',
    correctAnswer: '(5,+∞)',
    acceptableAnswers: ['(5, +∞)', '(5,+infinity)', '(5,∞)'],
    explanation: '> 用小括号，∞ 永远用小括号。',
  },
];

// 第3节：常用数集
export const setsPractice3: QuizQuestionData[] = [
  {
    id: 'stp3-1',
    type: 'choice',
    question: '',
    questionLatex: '-3 \\;\\rule{2em}{0.4pt}\\; \\mathbb{Z}',
    options: [
      { label: 'A', value: '∈' },
      { label: 'B', value: '∉' },
    ],
    correctAnswer: '∈',
    explanation: '-3 是整数，属于整数集 ℤ。',
  },
  {
    id: 'stp3-2',
    type: 'choice',
    question: '',
    questionLatex: '\\sqrt{2} \\;\\rule{2em}{0.4pt}\\; \\mathbb{Q}',
    options: [
      { label: 'A', value: '∈' },
      { label: 'B', value: '∉' },
    ],
    correctAnswer: '∉',
    explanation: '√2 是无理数，不属于有理数集 ℚ。',
  },
  {
    id: 'stp3-3',
    type: 'choice',
    question: '',
    questionLatex: '\\pi \\;\\rule{2em}{0.4pt}\\; \\mathbb{R}',
    options: [
      { label: 'A', value: '∈' },
      { label: 'B', value: '∉' },
    ],
    correctAnswer: '∈',
    explanation: 'π 是无理数，但属于实数集 ℝ。',
  },
];

// 第4节：子集关系
export const setsPractice4: QuizQuestionData[] = [
  {
    id: 'stp4-1',
    type: 'choice',
    question: '',
    questionLatex: '\\{1,2\\} \\subseteq \\{1,2,3\\} \\text{ 对吗？}',
    options: [
      { label: 'A', value: '对' },
      { label: 'B', value: '不对' },
    ],
    correctAnswer: '对',
    explanation: '{1,2} 的每个元素都在 {1,2,3} 中，所以是子集。',
  },
  {
    id: 'stp4-2',
    type: 'choice',
    question: '',
    questionLatex: '\\{1,2,3\\} \\subsetneq \\{1,2,3\\} \\text{ 对吗？}',
    options: [
      { label: 'A', value: '对' },
      { label: 'B', value: '不对' },
    ],
    correctAnswer: '不对',
    explanation: '真子集要求不相等，{1,2,3} = {1,2,3}，所以不是真子集。',
  },
  {
    id: 'stp4-3',
    type: 'choice',
    question: '',
    questionLatex: '\\varnothing \\text{ 和 } \\{0\\} \\text{ 一样吗？}',
    options: [
      { label: 'A', value: '一样' },
      { label: 'B', value: '不一样' },
    ],
    correctAnswer: '不一样',
    explanation: '∅ 是空集（0个元素），{0} 含有元素 0（1个元素）。',
  },
  {
    id: 'stp4-4',
    type: 'blank',
    question: '{1, 2} 的子集有几个？',
    correctAnswer: '4',
    explanation: '2² = 4 个子集：∅, {1}, {2}, {1,2}。',
  },
];

// 第5节：集合运算
export const setsPractice5: QuizQuestionData[] = [
  {
    id: 'stp5-1',
    type: 'blank',
    question: '',
    questionLatex: 'A = \\{1,3,5,7\\}\\text{，}B = \\{3,5,8\\}\\text{，}A \\cap B = \\text{?}',
    correctAnswer: '{3,5}',
    acceptableAnswers: ['{3, 5}', '{5,3}', '{5, 3}'],
    explanation: '交集取公共元素：3 和 5。',
  },
  {
    id: 'stp5-2',
    type: 'blank',
    question: '',
    questionLatex: 'U = \\{1,2,3,4,5\\}\\text{，}A = \\{2,4\\}\\text{，}\\complement_U A = \\text{?}',
    correctAnswer: '{1,3,5}',
    acceptableAnswers: ['{1, 3, 5}', '{3,1,5}', '{5,3,1}'],
    explanation: '补集 = 全集中去掉 A 的元素：{1, 3, 5}。',
  },
  {
    id: 'stp5-3',
    type: 'blank',
    question: '',
    questionLatex: 'A = \\{x \\mid -1 \\leq x < 3\\}\\text{，}B = \\{x \\mid 2 < x \\leq 5\\}\\text{，}A \\cap B = \\text{?}',
    correctAnswer: '(2,3)',
    acceptableAnswers: ['(2, 3)'],
    explanation: '取两个区间的重叠部分：2 < x < 3，即 (2, 3)。',
  },
];
