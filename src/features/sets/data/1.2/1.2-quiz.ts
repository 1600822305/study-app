import type { QuizQuestionData } from '@/types';

// 精选12道题，覆盖全部高考核心知识点
export const setsQuizQuestions: QuizQuestionData[] = [
  // ── 1. 交集（有限集∩区间）──
  {
    id: 'sq1',
    question: '（2020·新高考Ⅰ卷）',
    questionLatex: 'A = \\{2, 3, 5, 7\\},\\; B = \\{x \\mid 1 < x < 6\\},\\; A \\cap B =',
    options: [
      { label: 'A', value: '\\{2, 3\\}', isLatex: true },
      { label: 'B', value: '\\{3, 5\\}', isLatex: true },
      { label: 'C', value: '\\{2, 3, 5\\}', isLatex: true },
      { label: 'D', value: '\\{2, 3, 5, 7\\}', isLatex: true },
    ],
    correctAnswer: '\\{2, 3, 5\\}',
  },
  // ── 2. 交集（区间，需解方程）──
  {
    id: 'sq2',
    question: '（2023·新高考Ⅰ卷）',
    questionLatex: 'A = \\{x \\mid -2 < x < 4\\},\\; B = \\{x \\mid x^2 - 2x - 3 \\leq 0\\},\\; A \\cap B =',
    options: [
      { label: 'A', value: '\\{x \\mid -2 < x \\leq 3\\}', isLatex: true },
      { label: 'B', value: '\\{x \\mid -1 \\leq x \\leq 3\\}', isLatex: true },
      { label: 'C', value: '\\{x \\mid -1 \\leq x < 4\\}', isLatex: true },
      { label: 'D', value: '\\{x \\mid -2 < x < 4\\}', isLatex: true },
    ],
    correctAnswer: '\\{x \\mid -1 \\leq x \\leq 3\\}',
  },
  // ── 3. 补集（区间，端点反转）──
  {
    id: 'sq3',
    question: '（2022·新高考Ⅰ卷）',
    questionLatex: 'U = \\mathbb{R},\\; A = \\{x \\mid x^2 - x - 2 \\geq 0\\},\\; \\complement_U A =',
    options: [
      { label: 'A', value: '\\{x \\mid -1 < x < 2\\}', isLatex: true },
      { label: 'B', value: '\\{x \\mid -1 \\leq x \\leq 2\\}', isLatex: true },
      { label: 'C', value: '\\{x \\mid x < -1 \\text{ 或 } x > 2\\}', isLatex: true },
      { label: 'D', value: '\\{x \\mid x \\leq -1 \\text{ 或 } x \\geq 2\\}', isLatex: true },
    ],
    correctAnswer: '\\{x \\mid -1 < x < 2\\}',
  },
  // ── 4. 混合运算（先补再交）──
  {
    id: 'sq4',
    question: '（2021·新高考Ⅰ卷）',
    questionLatex: 'U = \\mathbb{R},\\; A = \\{x \\mid x < 2\\},\\; B = \\{x \\mid 0 \\leq x \\leq 3\\},\\; A \\cap (\\complement_U B) =',
    options: [
      { label: 'A', value: '\\{x \\mid x < 0\\}', isLatex: true },
      { label: 'B', value: '\\{x \\mid x < 2\\}', isLatex: true },
      { label: 'C', value: '\\{x \\mid 0 \\leq x < 2\\}', isLatex: true },
      { label: 'D', value: '\\{x \\mid 2 \\leq x \\leq 3\\}', isLatex: true },
    ],
    correctAnswer: '\\{x \\mid x < 0\\}',
  },
  // ── 5. 并集（区间）──
  {
    id: 'sq5',
    question: '',
    questionLatex: 'A = \\{x \\mid -1 \\leq x < 3\\},\\; B = \\{x \\mid 2 < x \\leq 5\\},\\; A \\cup B =',
    options: [
      { label: 'A', value: '\\{x \\mid -1 \\leq x \\leq 5\\}', isLatex: true },
      { label: 'B', value: '\\{x \\mid 2 < x < 3\\}', isLatex: true },
      { label: 'C', value: '\\{x \\mid -1 \\leq x < 3\\}', isLatex: true },
      { label: 'D', value: '\\{x \\mid -1 < x \\leq 5\\}', isLatex: true },
    ],
    correctAnswer: '\\{x \\mid -1 \\leq x \\leq 5\\}',
  },
  // ── 6. 子集个数公式 ──
  {
    id: 'sq6',
    question: '',
    questionLatex: '\\text{集合 } \\{a, b, c\\} \\text{ 的子集个数为}',
    options: [
      { label: 'A', value: '6' },
      { label: 'B', value: '7' },
      { label: 'C', value: '8' },
      { label: 'D', value: '9' },
    ],
    correctAnswer: '8',
  },
  // ── 7. 空集知识 ──
  {
    id: 'sq7',
    question: '下列关于空集的说法，正确的是',
    options: [
      { label: 'A', value: '\\varnothing = \\{0\\}', isLatex: true },
      { label: 'B', value: '\\text{空集没有子集}', isLatex: true },
      { label: 'C', value: '\\text{空集是任何集合的子集}', isLatex: true },
      { label: 'D', value: '\\text{空集是任何集合的元素}', isLatex: true },
    ],
    correctAnswer: '\\text{空集是任何集合的子集}',
  },
  // ── 8. 常见数集 ──
  {
    id: 'sq8',
    question: '下列关系正确的是',
    options: [
      { label: 'A', value: '0 \\in \\mathbb{N}^*', isLatex: true },
      { label: 'B', value: '\\sqrt{2} \\in \\mathbb{Q}', isLatex: true },
      { label: 'C', value: '-3 \\in \\mathbb{Z}', isLatex: true },
      { label: 'D', value: '\\pi \\in \\mathbb{Q}', isLatex: true },
    ],
    correctAnswer: '-3 \\in \\mathbb{Z}',
  },
  // ── 9. 含参数（A⊆B）──
  {
    id: 'sq9',
    question: '',
    questionLatex: 'A = \\{x \\mid -2 < x < 4\\},\\; B = \\{x \\mid x < a\\},\\; A \\subseteq B,\\; \\text{则 a 的范围是}',
    options: [
      { label: 'A', value: 'a \\geq 4', isLatex: true },
      { label: 'B', value: 'a > 4', isLatex: true },
      { label: 'C', value: 'a \\geq -2', isLatex: true },
      { label: 'D', value: 'a > -2', isLatex: true },
    ],
    correctAnswer: 'a \\geq 4',
  },
  // ── 10. 含参数（A∩B=∅）──
  {
    id: 'sq10',
    question: '',
    questionLatex: 'A = \\{x \\mid 1 \\leq x \\leq 3\\},\\; B = \\{x \\mid x > a\\},\\; A \\cap B = \\varnothing,\\; \\text{则 a 的范围是}',
    options: [
      { label: 'A', value: 'a \\geq 3', isLatex: true },
      { label: 'B', value: 'a > 3', isLatex: true },
      { label: 'C', value: 'a \\geq 1', isLatex: true },
      { label: 'D', value: 'a < 1', isLatex: true },
    ],
    correctAnswer: 'a \\geq 3',
  },
  // ── 11. 容斥原理 ──
  {
    id: 'sq11',
    question: '某班 50 人，参加数学兴趣小组 30 人，参加物理兴趣小组 25 人，两个都参加的有 15 人，则两个都没参加的人数为',
    options: [
      { label: 'A', value: '5' },
      { label: 'B', value: '10' },
      { label: 'C', value: '15' },
      { label: 'D', value: '20' },
    ],
    correctAnswer: '10',
  },
  // ── 12. 区间表示 ──
  {
    id: 'sq12',
    question: '',
    questionLatex: '\\text{用区间表示 } \\{x \\mid -3 < x \\leq 5\\} =',
    options: [
      { label: 'A', value: '[-3, 5]', isLatex: false },
      { label: 'B', value: '(-3, 5]', isLatex: false },
      { label: 'C', value: '(-3, 5)', isLatex: false },
      { label: 'D', value: '[-3, 5)', isLatex: false },
    ],
    correctAnswer: '(-3, 5]',
  },
];
