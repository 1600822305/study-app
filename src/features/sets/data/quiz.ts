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
  },
  {
    id: 'sq12',
    question: '已知集合 A = {1, a, b}，且',
    questionLatex:
      'A = \\{1, a, b\\}\\;(a \\neq b),\\; a^2 \\in A,\\; b^2 \\in A,\\; \\text{则 } a + b =',
    options: [
      { label: 'A', value: '0' },
      { label: 'B', value: '-1' },
      { label: 'C', value: '1' },
      { label: 'D', value: '-2' },
    ],
    correctAnswer: '-1',
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
  },
  {
    id: 'sq14',
    question: '',
    questionLatex:
      'A = \\{x \\mid -2 < x < 4\\},\\; B = \\{x \\mid x < a\\},\\; A \\subseteq B,\\; \\text{则 a 的范围是}',
    options: [
      { label: 'A', value: 'a \\geq 4', isLatex: true },
      { label: 'B', value: 'a > 4', isLatex: true },
      { label: 'C', value: 'a \\geq -2', isLatex: true },
      { label: 'D', value: 'a > -2', isLatex: true },
    ],
    correctAnswer: 'a \\geq 4',
  },
  {
    id: 'sq15',
    question: '',
    questionLatex:
      'U = \\mathbb{R},\\; A = \\{x \\mid x \\leq 1\\},\\; B = \\{x \\mid x > -2\\},\\; \\complement_U(A \\cup B) =',
    options: [
      { label: 'A', value: '\\varnothing', isLatex: true },
      { label: 'B', value: '\\{x \\mid x > 1\\}', isLatex: true },
      { label: 'C', value: '\\{x \\mid -2 < x \\leq 1\\}', isLatex: true },
      { label: 'D', value: '\\{x \\mid x \\leq -2\\}', isLatex: true },
    ],
    correctAnswer: '\\varnothing',
  },
  {
    id: 'sq16',
    question: '某班 50 人，参加数学兴趣小组 30 人，参加物理兴趣小组 25 人，两个都参加的有 15 人，则两个都没参加的人数为',
    options: [
      { label: 'A', value: '5' },
      { label: 'B', value: '10' },
      { label: 'C', value: '15' },
      { label: 'D', value: '20' },
    ],
    correctAnswer: '10',
  },
  {
    id: 'sq17',
    question: '已知',
    questionLatex:
      'A = \\{x \\mid 1 \\leq x \\leq 3\\},\\; B = \\{x \\mid x > a\\},\\; A \\cap B = \\varnothing,\\; \\text{则 a 的范围是}',
    options: [
      { label: 'A', value: 'a \\geq 3', isLatex: true },
      { label: 'B', value: 'a > 3', isLatex: true },
      { label: 'C', value: 'a \\geq 1', isLatex: true },
      { label: 'D', value: 'a < 1', isLatex: true },
    ],
    correctAnswer: 'a \\geq 3',
  },
  {
    id: 'sq18',
    question: '',
    questionLatex:
      '\\text{用区间表示 } \\{x \\mid -3 < x \\leq 5\\} =',
    options: [
      { label: 'A', value: '[-3, 5]', isLatex: false },
      { label: 'B', value: '(-3, 5]', isLatex: false },
      { label: 'C', value: '(-3, 5)', isLatex: false },
      { label: 'D', value: '[-3, 5)', isLatex: false },
    ],
    correctAnswer: '(-3, 5]',
  },
  {
    id: 'sq19',
    question: '',
    questionLatex:
      '\\text{集合 } \\{a, b, c\\} \\text{ 的非空真子集共有几个？}',
    options: [
      { label: 'A', value: '5' },
      { label: 'B', value: '6' },
      { label: 'C', value: '7' },
      { label: 'D', value: '8' },
    ],
    correctAnswer: '6',
  },
  {
    id: 'sq20',
    question: '下列集合中，表示的是点的集合（而不是数的集合）的是',
    options: [
      { label: 'A', value: '\\{x \\mid x^2 - 1 = 0\\}', isLatex: true },
      { label: 'B', value: '\\{x \\mid x > 2\\}', isLatex: true },
      { label: 'C', value: '\\{(x,y) \\mid y = 2x + 1\\}', isLatex: true },
      { label: 'D', value: '\\{x \\mid x \\in \\mathbb{Z}\\}', isLatex: true },
    ],
    correctAnswer: '\\{(x,y) \\mid y = 2x + 1\\}',
  },
  {
    id: 'sq21',
    question: '已知集合',
    questionLatex:
      'A = \\{1,\\; -a,\\; \\tfrac{b}{a}\\},\\; B = \\{0,\\; a^2,\\; b-a\\},\\; A = B,\\; \\text{则 } a^{2025} + b^{2025} =',
    options: [
      { label: 'A', value: '0' },
      { label: 'B', value: '1' },
      { label: 'C', value: '-1' },
      { label: 'D', value: '2' },
    ],
    correctAnswer: '1',
  },
  {
    id: 'sq22',
    question: '已知集合',
    questionLatex:
      'M = \\{x \\mid (x-a)(x^2 - ax + a - 1) = 0\\},\\; \\text{各元素之和为 3，则 a 的所有可能值为}',
    options: [
      { label: 'A', value: '\\dfrac{3}{2}', isLatex: true },
      { label: 'B', value: '2', isLatex: false },
      { label: 'C', value: '\\dfrac{3}{2} \\text{ 或 } 2', isLatex: true },
      { label: 'D', value: '1 \\text{ 或 } \\dfrac{3}{2}', isLatex: true },
    ],
    correctAnswer: '\\dfrac{3}{2} \\text{ 或 } 2',
  },
];
