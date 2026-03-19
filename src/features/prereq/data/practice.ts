import type { QuizQuestionData } from '@/types';

// ── 第1节：数的分类 ──
export const prereqPractice1: QuizQuestionData[] = [
  {
    id: 'pp1-1',
    type: 'choice',
    question: '',
    questionLatex: '\\sqrt{2} \\text{ 属于哪一类数？}',
    options: [
      { label: 'A', value: '自然数' },
      { label: 'B', value: '有理数' },
      { label: 'C', value: '无理数' },
      { label: 'D', value: '复数（非实数）' },
    ],
    correctAnswer: '无理数',
  },
  {
    id: 'pp1-2',
    type: 'choice',
    question: '',
    questionLatex: '-3 \\text{ 最小可以归到哪一类数？}',
    options: [
      { label: 'A', value: '自然数' },
      { label: 'B', value: '整数' },
      { label: 'C', value: '无理数' },
      { label: 'D', value: '复数（非实数）' },
    ],
    correctAnswer: '整数',
  },
  {
    id: 'pp1-3',
    type: 'choice',
    question: '',
    questionLatex: '2 + 3i \\text{ 属于哪一类数？}',
    options: [
      { label: 'A', value: '实数' },
      { label: 'B', value: '无理数' },
      { label: 'C', value: '整数' },
      { label: 'D', value: '复数' },
    ],
    correctAnswer: '复数',
  },
  {
    id: 'pp1-4',
    type: 'choice',
    question: '',
    questionLatex: '0 \\text{ 同时属于下面哪组数？}',
    options: [
      { label: 'A', value: '自然数、整数、有理数、实数' },
      { label: 'B', value: '整数、有理数（不是自然数）' },
      { label: 'C', value: '只是整数' },
      { label: 'D', value: '无理数' },
    ],
    correctAnswer: '自然数、整数、有理数、实数',
  },
  {
    id: 'pp1-5',
    type: 'choice',
    question: '',
    questionLatex: '\\pi \\text{ 属于哪一类数？}',
    options: [
      { label: 'A', value: '自然数' },
      { label: 'B', value: '整数' },
      { label: 'C', value: '有理数' },
      { label: 'D', value: '无理数' },
    ],
    correctAnswer: '无理数',
  },
  {
    id: 'pp1-6',
    type: 'choice',
    question: '',
    questionLatex: '\\text{下面关于数集包含关系的说法，哪一个正确？}',
    options: [
      { label: 'A', value: '自然数包含整数' },
      { label: 'B', value: '整数包含有理数' },
      { label: 'C', value: '复数包含实数' },
      { label: 'D', value: '有理数包含复数' },
    ],
    correctAnswer: '复数包含实数',
  },
];

// ── 第2节：平方、开方、绝对值 ──
export const prereqPractice2: QuizQuestionData[] = [
  {
    id: 'pp2-1',
    type: 'choice',
    question: '',
    questionLatex: '(-5)^2 = \\text{?}',
    options: [
      { label: 'A', value: '-25', isLatex: false },
      { label: 'B', value: '25', isLatex: false },
      { label: 'C', value: '10', isLatex: false },
      { label: 'D', value: '5', isLatex: false },
    ],
    correctAnswer: '25',
  },
  {
    id: 'pp2-2',
    type: 'choice',
    question: '',
    questionLatex: '\\sqrt{16+9} = \\text{?}',
    options: [
      { label: 'A', value: '5', isLatex: false },
      { label: 'B', value: '7', isLatex: false },
      { label: 'C', value: '25', isLatex: false },
      { label: 'D', value: '9', isLatex: false },
    ],
    correctAnswer: '5',
  },
  {
    id: 'pp2-3',
    type: 'choice',
    question: '',
    questionLatex: '|-7| = \\text{?}',
    options: [
      { label: 'A', value: '-7', isLatex: false },
      { label: 'B', value: '7', isLatex: false },
      { label: 'C', value: '0', isLatex: false },
      { label: 'D', value: '49', isLatex: false },
    ],
    correctAnswer: '7',
  },
  {
    id: 'pp2-4',
    type: 'choice',
    question: '',
    questionLatex: '-4^2 = \\text{?}',
    options: [
      { label: 'A', value: '16', isLatex: false },
      { label: 'B', value: '-16', isLatex: false },
      { label: 'C', value: '-8', isLatex: false },
      { label: 'D', value: '8', isLatex: false },
    ],
    correctAnswer: '-16',
  },
  {
    id: 'pp2-5',
    type: 'choice',
    question: '',
    questionLatex: '\\sqrt{(-3)^2} = \\text{?}',
    options: [
      { label: 'A', value: '-3', isLatex: false },
      { label: 'B', value: '3', isLatex: false },
      { label: 'C', value: '\\pm 3', isLatex: true },
      { label: 'D', value: '9', isLatex: false },
    ],
    correctAnswer: '3',
  },
  {
    id: 'pp2-6',
    type: 'choice',
    question: '',
    questionLatex: '(-2)^2 \\text{ 和 } -2^2 \\text{ 相等吗？}',
    options: [
      { label: 'A', value: '相等，都是 4' },
      { label: 'B', value: '相等，都是 -4' },
      { label: 'C', value: '不相等，一个是 4，一个是 -4' },
      { label: 'D', value: '不相等，一个是 -4，一个是 4' },
    ],
    correctAnswer: '不相等，一个是 4，一个是 -4',
  },
  {
    id: 'pp2-7',
    type: 'choice',
    question: '',
    questionLatex: '11^2 = \\text{?}',
    options: [
      { label: 'A', value: '111', isLatex: false },
      { label: 'B', value: '121', isLatex: false },
      { label: 'C', value: '131', isLatex: false },
      { label: 'D', value: '144', isLatex: false },
    ],
    correctAnswer: '121',
  },
  {
    id: 'pp2-8',
    type: 'choice',
    question: '',
    questionLatex: '3^2 + 4^2 = \\text{?}',
    options: [
      { label: 'A', value: '7', isLatex: false },
      { label: 'B', value: '12', isLatex: false },
      { label: 'C', value: '25', isLatex: false },
      { label: 'D', value: '49', isLatex: false },
    ],
    correctAnswer: '25',
  },
];

// ── 第4节：分数运算 ──
export const prereqPractice4: QuizQuestionData[] = [
  {
    id: 'pp4-1',
    type: 'choice',
    question: '',
    questionLatex: '\\frac{1}{3} + \\frac{1}{6} = \\text{?}',
    options: [
      { label: 'A', value: '\\frac{1}{2}', isLatex: true },
      { label: 'B', value: '\\frac{2}{9}', isLatex: true },
      { label: 'C', value: '\\frac{1}{9}', isLatex: true },
      { label: 'D', value: '\\frac{2}{6}', isLatex: true },
    ],
    correctAnswer: '\\frac{1}{2}',
  },
  {
    id: 'pp4-2',
    type: 'choice',
    question: '',
    questionLatex: '\\frac{2}{5} \\times \\frac{3}{4} = \\text{?}',
    options: [
      { label: 'A', value: '\\frac{5}{9}', isLatex: true },
      { label: 'B', value: '\\frac{6}{20}', isLatex: true },
      { label: 'C', value: '\\frac{3}{10}', isLatex: true },
      { label: 'D', value: '\\frac{5}{20}', isLatex: true },
    ],
    correctAnswer: '\\frac{3}{10}',
  },
  {
    id: 'pp4-3',
    type: 'choice',
    question: '',
    questionLatex: '\\frac{2}{3} \\div \\frac{1}{4} = \\text{?}',
    options: [
      { label: 'A', value: '\\frac{2}{12}', isLatex: true },
      { label: 'B', value: '\\frac{8}{3}', isLatex: true },
      { label: 'C', value: '\\frac{1}{6}', isLatex: true },
      { label: 'D', value: '\\frac{3}{8}', isLatex: true },
    ],
    correctAnswer: '\\frac{8}{3}',
  },
  {
    id: 'pp4-4',
    type: 'choice',
    question: '',
    questionLatex: '\\frac{5}{6} - \\frac{1}{3} = \\text{?}',
    options: [
      { label: 'A', value: '\\frac{4}{3}', isLatex: true },
      { label: 'B', value: '\\frac{1}{2}', isLatex: true },
      { label: 'C', value: '\\frac{2}{3}', isLatex: true },
      { label: 'D', value: '\\frac{4}{6}', isLatex: true },
    ],
    correctAnswer: '\\frac{1}{2}',
  },
];

// ── 第5节：展开式 ──
export const prereqPractice5: QuizQuestionData[] = [
  {
    id: 'pp5-1',
    type: 'choice',
    question: '',
    questionLatex: '3(2-i) = \\text{?}',
    options: [
      { label: 'A', value: '6-3i', isLatex: true },
      { label: 'B', value: '5-3i', isLatex: true },
      { label: 'C', value: '6-i', isLatex: true },
      { label: 'D', value: '3-2i', isLatex: true },
    ],
    correctAnswer: '6-3i',
  },
  {
    id: 'pp5-2',
    type: 'choice',
    question: '',
    questionLatex: '(2+i)(3-i) = \\text{?}',
    options: [
      { label: 'A', value: '5+i', isLatex: true },
      { label: 'B', value: '6+i', isLatex: true },
      { label: 'C', value: '7+i', isLatex: true },
      { label: 'D', value: '7-i', isLatex: true },
    ],
    correctAnswer: '7+i',
  },
  {
    id: 'pp5-3',
    type: 'choice',
    question: '',
    questionLatex: '(1+i)^2 = \\text{?}',
    options: [
      { label: 'A', value: '2i', isLatex: true },
      { label: 'B', value: '1+2i', isLatex: true },
      { label: 'C', value: '-2i', isLatex: true },
      { label: 'D', value: '2+2i', isLatex: true },
    ],
    correctAnswer: '2i',
  },
  {
    id: 'pp5-4',
    type: 'choice',
    question: '',
    questionLatex: '(3+2i)(3-2i) = \\text{?}',
    options: [
      { label: 'A', value: '5', isLatex: false },
      { label: 'B', value: '9', isLatex: false },
      { label: 'C', value: '13', isLatex: false },
      { label: 'D', value: '12', isLatex: false },
    ],
    correctAnswer: '13',
  },
  {
    id: 'pp5-5',
    type: 'choice',
    question: '',
    questionLatex: '(2+i)(1+i) = \\text{?}',
    options: [
      { label: 'A', value: '2+3i', isLatex: true },
      { label: 'B', value: '1+3i', isLatex: true },
      { label: 'C', value: '1+2i', isLatex: true },
      { label: 'D', value: '3+i', isLatex: true },
    ],
    correctAnswer: '1+3i',
  },
];

// ── 第6节：负数运算 ──
export const prereqPractice6: QuizQuestionData[] = [
  {
    id: 'pp6-1',
    type: 'choice',
    question: '',
    questionLatex: '-3 - (-7) = \\text{?}',
    options: [
      { label: 'A', value: '-10', isLatex: false },
      { label: 'B', value: '4', isLatex: false },
      { label: 'C', value: '10', isLatex: false },
      { label: 'D', value: '-4', isLatex: false },
    ],
    correctAnswer: '4',
  },
  {
    id: 'pp6-2',
    type: 'choice',
    question: '',
    questionLatex: '-2i^2 = \\text{?}',
    options: [
      { label: 'A', value: '-2', isLatex: false },
      { label: 'B', value: '2', isLatex: false },
      { label: 'C', value: '2i', isLatex: true },
      { label: 'D', value: '-2i', isLatex: true },
    ],
    correctAnswer: '2',
  },
  {
    id: 'pp6-3',
    type: 'choice',
    question: '',
    questionLatex: '2 - i^2 = \\text{?}',
    options: [
      { label: 'A', value: '1', isLatex: false },
      { label: 'B', value: '-3', isLatex: false },
      { label: 'C', value: '3', isLatex: false },
      { label: 'D', value: '-1', isLatex: false },
    ],
    correctAnswer: '3',
  },
  {
    id: 'pp6-4',
    type: 'choice',
    question: '',
    questionLatex: 'i^{53} = \\text{?}',
    options: [
      { label: 'A', value: 'i', isLatex: true },
      { label: 'B', value: '-1', isLatex: true },
      { label: 'C', value: '-i', isLatex: true },
      { label: 'D', value: '1', isLatex: true },
    ],
    correctAnswer: 'i',
  },
  {
    id: 'pp6-5',
    type: 'choice',
    question: '',
    questionLatex: 'i^{2025}+i^{2024} = \\text{?}',
    options: [
      { label: 'A', value: '1-i', isLatex: true },
      { label: 'B', value: 'i', isLatex: true },
      { label: 'C', value: '1+i', isLatex: true },
      { label: 'D', value: '-1+i', isLatex: true },
    ],
    correctAnswer: '1+i',
  },
  {
    id: 'pp6-6',
    type: 'choice',
    question: '',
    questionLatex: 'i^{14} = \\text{?}',
    options: [
      { label: 'A', value: '1', isLatex: true },
      { label: 'B', value: '-1', isLatex: true },
      { label: 'C', value: 'i', isLatex: true },
      { label: 'D', value: '-i', isLatex: true },
    ],
    correctAnswer: '-1',
  },
];

// ── 第7节：i 的幂次 ──
export const prereqPractice7: QuizQuestionData[] = [
  ...prereqPractice6,
];
