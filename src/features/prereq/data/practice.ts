import type { QuizQuestionData } from '@/types';

// ── 第1节：数的分类 ──
export const prereqPractice1: QuizQuestionData[] = [
  {
    id: 'pp1-1',
    type: 'choice',
    question: '',
    questionLatex: '\\sqrt{2} \\text{ 是什么数？}',
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
    questionLatex: '-3 \\text{ 是什么数？}',
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
    questionLatex: '2 + 3i \\text{ 是什么数？}',
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
    questionLatex: '0 \\text{ 属于以下哪些数？}',
    options: [
      { label: 'A', value: '自然数、整数、有理数、实数' },
      { label: 'B', value: '整数、有理数（不是自然数）' },
      { label: 'C', value: '只是整数' },
      { label: 'D', value: '无理数' },
    ],
    correctAnswer: '自然数、整数、有理数、实数',
  },
];

// ── 第2节：平方、开方、绝对值 ──
export const prereqPractice2: QuizQuestionData[] = [
  {
    id: 'pp2-1',
    type: 'blank',
    question: '',
    questionLatex: '(-5)^2 = \\text{?}',
    correctAnswer: '25',
  },
  {
    id: 'pp2-2',
    type: 'blank',
    question: '',
    questionLatex: '\\sqrt{16+9} = \\text{?}',
    correctAnswer: '5',
  },
  {
    id: 'pp2-3',
    type: 'blank',
    question: '',
    questionLatex: '|-7| = \\text{?}',
    correctAnswer: '7',
  },
  {
    id: 'pp2-4',
    type: 'blank',
    question: '',
    questionLatex: '-4^2 = \\text{?}',
    correctAnswer: '-16',
  },
  {
    id: 'pp2-5',
    type: 'blank',
    question: '',
    questionLatex: '\\sqrt{49} = \\text{?}',
    correctAnswer: '7',
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
    type: 'blank',
    question: '',
    questionLatex: '\\sqrt{(-3)^2} = \\text{?}',
    correctAnswer: '3',
  },
];

// ── 第3节：勾股定理方向 ──
export const prereqPractice3: QuizQuestionData[] = [
  {
    id: 'pp3-1',
    type: 'blank',
    question: '',
    questionLatex: '7^2 = \\text{?}',
    correctAnswer: '49',
  },
  {
    id: 'pp3-2',
    type: 'blank',
    question: '',
    questionLatex: '\\sqrt{144} = \\text{?}',
    correctAnswer: '12',
  },
  {
    id: 'pp3-3',
    type: 'blank',
    question: '',
    questionLatex: '5^2 + 12^2 = \\text{?}',
    correctAnswer: '169',
  },
  {
    id: 'pp3-4',
    type: 'blank',
    question: '',
    questionLatex: '11^2 = \\text{?}',
    correctAnswer: '121',
  },
  {
    id: 'pp3-5',
    type: 'blank',
    question: '',
    questionLatex: '3^2 + 4^2 = \\text{?}',
    correctAnswer: '25',
  },
  {
    id: 'pp3-6',
    type: 'blank',
    question: '',
    questionLatex: '\\sqrt{81} = \\text{?}',
    correctAnswer: '9',
  },
];

// ── 第4节：分数运算 ──
export const prereqPractice4: QuizQuestionData[] = [
  {
    id: 'pp4-1',
    type: 'blank',
    question: '',
    questionLatex: '\\dfrac{2}{3} + \\dfrac{1}{4} = \\text{?}',
    correctAnswer: '11/12',
    acceptableAnswers: ['11／12'],
  },
  {
    id: 'pp4-2',
    type: 'blank',
    question: '',
    questionLatex: '\\dfrac{3}{5} \\times \\dfrac{2}{7} = \\text{?}',
    correctAnswer: '6/35',
    acceptableAnswers: ['6／35'],
  },
  {
    id: 'pp4-3',
    type: 'blank',
    question: '',
    questionLatex: '\\dfrac{18}{24} \\text{ 约分} = \\text{?}',
    correctAnswer: '3/4',
    acceptableAnswers: ['3／4'],
  },
  {
    id: 'pp4-4',
    type: 'blank',
    question: '',
    questionLatex: '\\dfrac{1}{2} - \\dfrac{1}{5} = \\text{?}',
    correctAnswer: '3/10',
    acceptableAnswers: ['3／10'],
  },
  {
    id: 'pp4-5',
    type: 'blank',
    question: '',
    questionLatex: '\\dfrac{3}{4} \\div \\dfrac{1}{2} = \\text{?}',
    correctAnswer: '3/2',
    acceptableAnswers: ['3／2', '1.5'],
  },
  {
    id: 'pp4-6',
    type: 'blank',
    question: '',
    questionLatex: '\\dfrac{5}{6} - \\dfrac{1}{3} = \\text{?}',
    correctAnswer: '1/2',
    acceptableAnswers: ['1／2', '0.5'],
  },
  {
    id: 'pp4-7',
    type: 'blank',
    question: '',
    questionLatex: '\\dfrac{2}{9} \\div \\dfrac{1}{3} = \\text{?}',
    correctAnswer: '2/3',
    acceptableAnswers: ['2／3'],
  },
  {
    id: 'pp4-8',
    type: 'blank',
    question: '',
    questionLatex: '\\dfrac{14}{21} \\text{ 约分} = \\text{?}',
    correctAnswer: '2/3',
    acceptableAnswers: ['2／3'],
  },
];

// ── 第5节：展开式 ──
export const prereqPractice5: QuizQuestionData[] = [
  {
    id: 'pp5-1',
    type: 'blank',
    question: '',
    questionLatex: '(3+i)(2-i) = \\text{?}',
    correctAnswer: '7-i',
    acceptableAnswers: ['7 - i', '7- i', '7 -i'],
  },
  {
    id: 'pp5-2',
    type: 'blank',
    question: '',
    questionLatex: '(1+i)^2 = \\text{?}',
    correctAnswer: '2i',
    acceptableAnswers: ['2 i'],
  },
  {
    id: 'pp5-3',
    type: 'blank',
    question: '',
    questionLatex: '(3+2i)(3-2i) = \\text{?}',
    correctAnswer: '13',
  },
  {
    id: 'pp5-4',
    type: 'blank',
    question: '',
    questionLatex: '(1-i)^2 = \\text{?}',
    correctAnswer: '-2i',
    acceptableAnswers: ['-2 i', '- 2i'],
  },
  {
    id: 'pp5-5',
    type: 'blank',
    question: '',
    questionLatex: '(4+i)(4-i) = \\text{?}',
    correctAnswer: '17',
  },
  {
    id: 'pp5-6',
    type: 'blank',
    question: '',
    questionLatex: '3(2-i) = \\text{?}',
    correctAnswer: '6-3i',
    acceptableAnswers: ['6 - 3i', '6- 3i', '6 -3i'],
  },
  {
    id: 'pp5-7',
    type: 'blank',
    question: '',
    questionLatex: '(2+i)(1+i) = \\text{?}',
    correctAnswer: '1+3i',
    acceptableAnswers: ['1 + 3i', '1+ 3i', '1 +3i'],
  },
];

// ── 第6节：负数运算 ──
export const prereqPractice6: QuizQuestionData[] = [
  {
    id: 'pp6-1',
    type: 'blank',
    question: '',
    questionLatex: '-3 - (-7) = \\text{?}',
    correctAnswer: '4',
  },
  {
    id: 'pp6-2',
    type: 'blank',
    question: '',
    questionLatex: '(-4) \\times (-3) = \\text{?}',
    correctAnswer: '12',
  },
  {
    id: 'pp6-3',
    type: 'blank',
    question: '',
    questionLatex: '2 - i^2 = \\text{?}',
    correctAnswer: '3',
  },
];

// ── 第7节：i 的幂次 ──
export const prereqPractice7: QuizQuestionData[] = [
  {
    id: 'pp7-1',
    type: 'blank',
    question: '',
    questionLatex: 'i^{53} = \\text{?}',
    correctAnswer: 'i',
  },
  {
    id: 'pp7-2',
    type: 'blank',
    question: '',
    questionLatex: 'i^{100} = \\text{?}',
    correctAnswer: '1',
  },
  {
    id: 'pp7-3',
    type: 'blank',
    question: '',
    questionLatex: 'i^{7} = \\text{?}',
    correctAnswer: '-i',
    acceptableAnswers: ['- i'],
  },
  {
    id: 'pp7-4',
    type: 'blank',
    question: '',
    questionLatex: 'i^{2025} + i^{2024} = \\text{?}',
    correctAnswer: '1+i',
    acceptableAnswers: ['1 + i', '1+ i', '1 +i', 'i+1', 'i + 1'],
  },
];
