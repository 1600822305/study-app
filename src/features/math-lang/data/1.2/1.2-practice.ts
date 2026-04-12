import type { QuizQuestionData } from '@/types';

// ── 第1节：解方程（覆盖方法零~方法三） ──
export const setsPrereqPractice1: QuizQuestionData[] = [
  // 方法零/一：开平方+配方
  {
    id: 'sp1-1',
    type: 'blank',
    question: '',
    questionLatex: '(x-2)^2 = 9 \\text{，} x = \\text{?}',
    correctAnswer: '5或-1',
    acceptableAnswers: ['x=5或x=-1', '5 或 -1', '-1或5', '-1 或 5', '5,-1', '-1,5'],
  },
  // 方法二：因式分解（十字相乘）
  {
    id: 'sp1-2',
    type: 'blank',
    question: '',
    questionLatex: 'x^2 - 7x + 12 = 0 \\text{，} x = \\text{?}',
    correctAnswer: '3或4',
    acceptableAnswers: ['x=3或x=4', '3 或 4', '4或3', '4 或 3', '3,4', '4,3'],
  },
  // 方法三：公式法
  {
    id: 'sp1-3',
    type: 'blank',
    question: '',
    questionLatex: 'x^2 - 2x - 2 = 0 \\text{，} x = \\text{?}',
    correctAnswer: '1±√3',
    acceptableAnswers: ['1+√3或1-√3', '1-√3或1+√3', '1±√3', 'x=1±√3', '1+根号3或1-根号3'],
  },
];

// ── 第1节补充：方法零+方法一（填第1页底部） ──
export const setsPrereqPractice1a: QuizQuestionData[] = [
  {
    id: 'sp1a-1',
    type: 'blank',
    question: '',
    questionLatex: '3x^2 = 27 \\text{，} x = \\text{?}',
    correctAnswer: '±3',
    acceptableAnswers: ['x=±3', '3或-3', '-3或3', '±3', 'x=3或x=-3'],
  },
  {
    id: 'sp1a-2',
    type: 'blank',
    question: '',
    questionLatex: '(x+1)^2 = 7 \\text{，} x = \\text{?}',
    correctAnswer: '-1±√7',
    acceptableAnswers: ['-1+√7或-1-√7', '-1-√7或-1+√7', 'x=-1±√7', '-1±根号7'],
  },
  {
    id: 'sp1a-3',
    type: 'blank',
    question: '',
    questionLatex: 'x^2 + 4x - 5 = 0 \\text{（用配方法），} x = \\text{?}',
    correctAnswer: '1或-5',
    acceptableAnswers: ['x=1或x=-5', '-5或1', '1 或 -5', '-5 或 1', '1,-5', '-5,1'],
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
      { label: 'A', value: '2 < x < 3', isLatex: true },
      { label: 'B', value: 'x < 2 \\text{ 或 } x > 3', isLatex: true },
      { label: 'C', value: '2 \\leq x \\leq 3', isLatex: true },
      { label: 'D', value: 'x \\leq 2 \\text{ 或 } x \\geq 3', isLatex: true },
    ],
    correctAnswer: '2 < x < 3',
    printCols: 4,
  },
  {
    id: 'sp2-2',
    type: 'choice',
    question: '',
    questionLatex: 'x^2 + 2x - 15 > 0 \\text{ 的解集是？}',
    options: [
      { label: 'A', value: '-5 < x < 3', isLatex: true },
      { label: 'B', value: 'x < -5 \\text{ 或 } x > 3', isLatex: true },
      { label: 'C', value: 'x \\leq -5 \\text{ 或 } x \\geq 3', isLatex: true },
      { label: 'D', value: '-3 < x < 5', isLatex: true },
    ],
    correctAnswer: 'x < -5 \\text{ 或 } x > 3',
    printCols: 4,
  },
  {
    id: 'sp2-3',
    type: 'choice',
    question: '',
    questionLatex: 'x^2 - 4 \\geq 0 \\text{ 的解集是？}',
    options: [
      { label: 'A', value: 'x \\leq -2 \\text{ 或 } x \\geq 2', isLatex: true },
      { label: 'B', value: '-2 \\leq x \\leq 2', isLatex: true },
      { label: 'C', value: 'x < -2 \\text{ 或 } x > 2', isLatex: true },
      { label: 'D', value: '-2 < x < 2', isLatex: true },
    ],
    correctAnswer: 'x \\leq -2 \\text{ 或 } x \\geq 2',
    printCols: 4,
  },
  {
    id: 'sp2-4',
    type: 'choice',
    question: '',
    questionLatex: 'x^2 - 2x - 8 \\leq 0 \\text{ 的解集是？}',
    options: [
      { label: 'A', value: '-2 \\leq x \\leq 4', isLatex: true },
      { label: 'B', value: 'x \\leq -2 \\text{ 或 } x \\geq 4', isLatex: true },
      { label: 'C', value: '-2 < x < 4', isLatex: true },
      { label: 'D', value: 'x < -2 \\text{ 或 } x > 4', isLatex: true },
    ],
    correctAnswer: '-2 \\leq x \\leq 4',
    printCols: 4,
  },
];

// ── 第3节：数轴表示 ──
export const setsPrereqPractice3: QuizQuestionData[] = [
  {
    id: 'sp3-1',
    type: 'choice',
    question: '',
    questionLatex: '-2 \\leq x < 5 \\text{ 在数轴上，端点怎么画？}',
    options: [
      { label: 'A', value: '-2 实心 ●，5 空心 ○' },
      { label: 'B', value: '-2 空心 ○，5 实心 ●' },
      { label: 'C', value: '都是实心 ●' },
      { label: 'D', value: '都是空心 ○' },
    ],
    correctAnswer: '-2 实心 ●，5 空心 ○',
    printCols: 2,
  },
  {
    id: 'sp3-2',
    type: 'choice',
    question: '',
    questionLatex: 'x > 3 \\text{ 在数轴上应该怎么画？}',
    options: [
      { label: 'A', value: '3 处空心 ○，向右涂色' },
      { label: 'B', value: '3 处实心 ●，向右涂色' },
      { label: 'C', value: '3 处空心 ○，向左涂色' },
      { label: 'D', value: '3 处实心 ●，向左涂色' },
    ],
    correctAnswer: '3 处空心 ○，向右涂色',
    printCols: 2,
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
  },
  {
    id: 'sp4-2',
    type: 'blank',
    question: '',
    questionLatex: '\\{x \\mid x \\geq 3\\} \\text{ 用区间表示 = ?}',
    correctAnswer: '[3,+∞)',
    acceptableAnswers: ['[3, +∞)', '[3,+∞)', '[3, +infinity)', '[3,∞)', '[3, ∞)'],
  },
  {
    id: 'sp4-3',
    type: 'blank',
    question: '',
    questionLatex: 'x < 2 \\text{ 或 } x \\geq 5 \\text{ 用区间表示 = ?}',
    correctAnswer: '(-∞,2)∪[5,+∞)',
    acceptableAnswers: ['(-∞, 2) ∪ [5, +∞)', '(-∞,2)U[5,+∞)', '(-∞, 2) U [5, +∞)', '(-inf,2)∪[5,+inf)', '(-∞,2)∪[5,∞)'],
  },
];

