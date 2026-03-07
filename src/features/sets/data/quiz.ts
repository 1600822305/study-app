import type { QuizQuestionData } from '@/types';

export const setsQuizQuestions: QuizQuestionData[] = [
  {
    id: 'sq1',
    question: '（2020·新高考Ⅰ卷）已知 A = {2, 3, 5, 7}，B = {x | 1 < x < 6}，则 A ∩ B =',
    questionLatex: 'A = \\{2, 3, 5, 7\\},\\; B = \\{x \\mid 1 < x < 6\\},\\; A \\cap B =',
    options: [
      { label: 'A', value: '\\{2, 3\\}', isLatex: true },
      { label: 'B', value: '\\{3, 5\\}', isLatex: true },
      { label: 'C', value: '\\{2, 3, 5\\}', isLatex: true },
      { label: 'D', value: '\\{2, 3, 5, 7\\}', isLatex: true },
    ],
    correctAnswer: '\\{2, 3, 5\\}',
    explanation: 'B 包含 1 到 6 之间的数，A 中 2、3、5 都在此范围内，7 > 6 不在。',
    explanationLatex:
      '2,3,5 \\in (1,6) \\;\\checkmark,\\quad 7 \\notin (1,6) \\;\\times \\quad \\Rightarrow A \\cap B = \\{2,3,5\\}',
  },
  {
    id: 'sq2',
    question: '（2023·新高考Ⅰ卷）已知',
    questionLatex:
      'A = \\{x \\mid -2 < x < 4\\},\\; B = \\{x \\mid x^2 - 2x - 3 \\leq 0\\},\\; A \\cap B =',
    options: [
      { label: 'A', value: '\\{x \\mid -2 < x \\leq 3\\}', isLatex: true },
      { label: 'B', value: '\\{x \\mid -1 \\leq x \\leq 3\\}', isLatex: true },
      { label: 'C', value: '\\{x \\mid -1 \\leq x < 4\\}', isLatex: true },
      { label: 'D', value: '\\{x \\mid -2 < x < 4\\}', isLatex: true },
    ],
    correctAnswer: '\\{x \\mid -1 \\leq x \\leq 3\\}',
    explanation: '先解 B 的不等式，再画数轴取交集。',
    explanationLatex:
      'x^2-2x-3 \\leq 0 \\Rightarrow (x-3)(x+1) \\leq 0 \\Rightarrow B=[-1,3] \\quad A \\cap B = [-1,3]',
  },
  {
    id: 'sq3',
    question: '（2022·新高考Ⅰ卷）已知 U = R，',
    questionLatex:
      'U = \\mathbb{R},\\; A = \\{x \\mid x^2 - x - 2 \\geq 0\\},\\; \\complement_U A =',
    options: [
      { label: 'A', value: '\\{x \\mid -1 < x < 2\\}', isLatex: true },
      { label: 'B', value: '\\{x \\mid -1 \\leq x \\leq 2\\}', isLatex: true },
      { label: 'C', value: '\\{x \\mid x < -1 \\text{ 或 } x > 2\\}', isLatex: true },
      { label: 'D', value: '\\{x \\mid x \\leq -1 \\text{ 或 } x \\geq 2\\}', isLatex: true },
    ],
    correctAnswer: '\\{x \\mid -1 < x < 2\\}',
    explanation: '先解 A 的不等式，再取补集（端点开闭互换）。',
    explanationLatex:
      'x^2-x-2 \\geq 0 \\Rightarrow (x-2)(x+1) \\geq 0 \\Rightarrow A=(-\\infty,-1] \\cup [2,+\\infty) \\quad \\complement_U A = (-1,2)',
  },
  {
    id: 'sq4',
    question: '（2021·新高考Ⅰ卷）',
    questionLatex:
      'U = \\mathbb{R},\\; A = \\{x \\mid x < 2\\},\\; B = \\{x \\mid 0 \\leq x \\leq 3\\},\\; A \\cap (\\complement_U B) =',
    options: [
      { label: 'A', value: '\\{x \\mid x < 0\\}', isLatex: true },
      { label: 'B', value: '\\{x \\mid x < 2\\}', isLatex: true },
      { label: 'C', value: '\\{x \\mid 0 \\leq x < 2\\}', isLatex: true },
      { label: 'D', value: '\\{x \\mid 2 \\leq x \\leq 3\\}', isLatex: true },
    ],
    correctAnswer: '\\{x \\mid x < 0\\}',
    explanation: '先求补集，再与 A 取交集。',
    explanationLatex:
      '\\complement_U B = (-\\infty,0) \\cup (3,+\\infty) \\quad A \\cap \\complement_U B = (-\\infty,0)',
  },
  {
    id: 'sq5',
    question: '已知',
    questionLatex:
      'A = \\{x \\mid x^2 - 5x + 6 = 0\\},\\; B = \\{x \\mid x^2 - 3x + 2 = 0\\},\\; A \\cap B =',
    options: [
      { label: 'A', value: '\\{1\\}', isLatex: true },
      { label: 'B', value: '\\{2\\}', isLatex: true },
      { label: 'C', value: '\\{1, 2\\}', isLatex: true },
      { label: 'D', value: '\\{2, 3\\}', isLatex: true },
    ],
    correctAnswer: '\\{2\\}',
    explanation: '分别解方程，找公共元素。',
    explanationLatex:
      'A: (x-2)(x-3)=0 \\Rightarrow \\{2,3\\} \\quad B: (x-1)(x-2)=0 \\Rightarrow \\{1,2\\} \\quad A \\cap B = \\{2\\}',
  },
  {
    id: 'sq6',
    question: '',
    questionLatex: 'U = \\{1,2,3,4,5\\},\\; A = \\{1,3,5\\},\\; B = \\{2,4\\},\\; (\\complement_U A) \\cup B =',
    options: [
      { label: 'A', value: '\\{2, 4\\}', isLatex: true },
      { label: 'B', value: '\\{1, 3, 5\\}', isLatex: true },
      { label: 'C', value: '\\{2, 4, 5\\}', isLatex: true },
      { label: 'D', value: '\\{1, 2, 3, 4, 5\\}', isLatex: true },
    ],
    correctAnswer: '\\{2, 4\\}',
    explanation: '先求补集，再求并集。',
    explanationLatex:
      '\\complement_U A = \\{2,4\\} \\quad (\\complement_U A) \\cup B = \\{2,4\\} \\cup \\{2,4\\} = \\{2,4\\}',
  },
  {
    id: 'sq7',
    question: '',
    questionLatex: 'A = \\{a, b, c\\} \\text{ 的子集个数为}',
    options: [
      { label: 'A', value: '6' },
      { label: 'B', value: '7' },
      { label: 'C', value: '8' },
      { label: 'D', value: '9' },
    ],
    correctAnswer: '8',
    explanation: 'n 个元素的集合有 2ⁿ 个子集。',
    explanationLatex: '2^3 = 8',
  },
  {
    id: 'sq8',
    question: '已知',
    questionLatex:
      'A = \\{x \\mid x^2 - 4x + 3 \\leq 0\\},\\; B = \\{x \\mid x > 2\\},\\; A \\cap B =',
    options: [
      { label: 'A', value: '(2, 3]', isLatex: true },
      { label: 'B', value: '[1, 2)', isLatex: true },
      { label: 'C', value: '[1, 3]', isLatex: true },
      { label: 'D', value: '(2, +\\infty)', isLatex: true },
    ],
    correctAnswer: '(2, 3]',
    explanation: '先解 A 的不等式，再与 B 取交集。',
    explanationLatex:
      'A: (x-1)(x-3) \\leq 0 \\Rightarrow [1,3] \\quad A \\cap B = (2,3]',
  },
  {
    id: 'sq9',
    question: '下列关于空集的说法，正确的是',
    options: [
      { label: 'A', value: '\\varnothing = \\{0\\}', isLatex: true },
      { label: 'B', value: '\\text{空集没有子集}', isLatex: true },
      { label: 'C', value: '\\text{空集是任何集合的子集}', isLatex: true },
      { label: 'D', value: '\\text{空集是任何集合的元素}', isLatex: true },
    ],
    correctAnswer: '\\text{空集是任何集合的子集}',
    explanation: '空集 ∅ 是任何集合的子集，这是集合论的基本公理。',
  },
  {
    id: 'sq10',
    question: '',
    questionLatex:
      'U = \\mathbb{R},\\; A = \\{x \\mid -1 \\leq x < 3\\},\\; B = \\{x \\mid 2 < x \\leq 5\\},\\; A \\cup B =',
    options: [
      { label: 'A', value: '\\{x \\mid -1 \\leq x \\leq 5\\}', isLatex: true },
      { label: 'B', value: '\\{x \\mid 2 < x < 3\\}', isLatex: true },
      { label: 'C', value: '\\{x \\mid -1 \\leq x < 3\\}', isLatex: true },
      { label: 'D', value: '\\{x \\mid -1 < x \\leq 5\\}', isLatex: true },
    ],
    correctAnswer: '\\{x \\mid -1 \\leq x \\leq 5\\}',
    explanation: '并集取所有元素的范围。',
    explanationLatex:
      'A \\cup B = [-1,3) \\cup (2,5] = [-1,5]',
  },
  {
    id: 'sq11',
    question: '下列关系正确的是',
    options: [
      { label: 'A', value: '0 \\in \\mathbb{N}^*', isLatex: true },
      { label: 'B', value: '\\sqrt{2} \\in \\mathbb{Q}', isLatex: true },
      { label: 'C', value: '-3 \\in \\mathbb{Z}', isLatex: true },
      { label: 'D', value: '\\pi \\in \\mathbb{Q}', isLatex: true },
    ],
    correctAnswer: '-3 \\in \\mathbb{Z}',
    explanation: '-3 是整数，属于整数集 Z。0 不属于正整数集 N*；√2 和 π 都是无理数，不属于有理数集 Q。',
  },
  {
    id: 'sq12',
    question: '已知集合 A = {1, a, b}，且',
    questionLatex:
      'A = \\{1, a, b\\},\\; a^2 \\in A,\\; b^2 \\in A,\\; \\text{则 } a + b =',
    options: [
      { label: 'A', value: '0' },
      { label: 'B', value: '-1' },
      { label: 'C', value: '1' },
      { label: 'D', value: '-2' },
    ],
    correctAnswer: '-1',
    explanation: '由互异性：a²∈A 且 a≠1（否则重复），所以 a=-1，a²=1∈A ✓。b²∈A，b²=b → b=0（b≠1 互异），0²=0∈A ✓。a+b=-1+0=-1。',
    explanationLatex:
      'a \\neq 1 \\text{（互异性）},\\; a^2=1 \\Rightarrow a=-1 \\quad b^2 \\in \\{1,-1,b\\},\\; b^2=b \\Rightarrow b=0 \\quad a+b=-1',
  },
  {
    id: 'sq13',
    question: '已知',
    questionLatex:
      'A = \\{x \\mid x^2 - 2x - 3 \\leq 0\\},\\; B = \\{x \\mid x \\geq a\\},\\; A \\cap B \\neq \\varnothing,\\; \\text{则 a 的范围是}',
    options: [
      { label: 'A', value: 'a \\leq 3', isLatex: true },
      { label: 'B', value: 'a < 3', isLatex: true },
      { label: 'C', value: 'a \\geq -1', isLatex: true },
      { label: 'D', value: 'a > -1', isLatex: true },
    ],
    correctAnswer: 'a \\leq 3',
    explanation: 'A=[-1,3]，B=[a,+∞)，要有交集只需 a ≤ A 的右端点 3。',
    explanationLatex:
      'A=[-1,3],\\; B=[a,+\\infty) \\quad A \\cap B \\neq \\varnothing \\Leftrightarrow a \\leq 3',
  },
];
