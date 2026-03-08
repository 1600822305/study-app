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
    explanation: '√2 是无限不循环小数，属于无理数（也是实数）。',
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
    explanation: '-3 是整数（也是有理数、实数）。',
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
    explanation: '含有虚部 3i，属于复数（不是实数）。',
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
    explanation: '(-5)² = (-5)×(-5) = 25，负数平方得正。',
  },
  {
    id: 'pp2-2',
    type: 'blank',
    question: '',
    questionLatex: '\\sqrt{16+9} = \\text{?}',
    correctAnswer: '5',
    explanation: '√(16+9) = √25 = 5。',
  },
  {
    id: 'pp2-3',
    type: 'blank',
    question: '',
    questionLatex: '|-7| = \\text{?}',
    correctAnswer: '7',
    explanation: '绝对值去掉负号，|-7| = 7。',
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
    explanation: '7² = 49。',
  },
  {
    id: 'pp3-2',
    type: 'blank',
    question: '',
    questionLatex: '\\sqrt{144} = \\text{?}',
    correctAnswer: '12',
    explanation: '√144 = 12（12² = 144）。',
  },
  {
    id: 'pp3-3',
    type: 'blank',
    question: '',
    questionLatex: '5^2 + 12^2 = \\text{?}',
    correctAnswer: '169',
    explanation: '25 + 144 = 169，即 √169 = 13。',
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
    explanation: '通分：8/12 + 3/12 = 11/12。',
    explanationLatex: '\\frac{8}{12} + \\frac{3}{12} = \\frac{11}{12}',
  },
  {
    id: 'pp4-2',
    type: 'blank',
    question: '',
    questionLatex: '\\dfrac{3}{5} \\times \\dfrac{2}{7} = \\text{?}',
    correctAnswer: '6/35',
    acceptableAnswers: ['6／35'],
    explanation: '分子乘分子、分母乘分母：3×2 / 5×7 = 6/35。',
    explanationLatex: '\\frac{3 \\times 2}{5 \\times 7} = \\frac{6}{35}',
  },
  {
    id: 'pp4-3',
    type: 'blank',
    question: '',
    questionLatex: '\\dfrac{18}{24} \\text{ 约分} = \\text{?}',
    correctAnswer: '3/4',
    acceptableAnswers: ['3／4'],
    explanation: '18 和 24 的最大公因数是 6，同除以 6 得 3/4。',
    explanationLatex: '\\frac{18 \\div 6}{24 \\div 6} = \\frac{3}{4}',
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
    explanation: '展开：6-3i+2i-i² = 6-i+1 = 7-i。',
    explanationLatex: '6-3i+2i-i^2 = 6-i+1 = 7-i',
  },
  {
    id: 'pp5-2',
    type: 'blank',
    question: '',
    questionLatex: '(1+i)^2 = \\text{?}',
    correctAnswer: '2i',
    acceptableAnswers: ['2 i'],
    explanation: '1+2i+i² = 1+2i-1 = 2i。',
    explanationLatex: '1+2i+i^2 = 1+2i-1 = 2i',
  },
  {
    id: 'pp5-3',
    type: 'blank',
    question: '',
    questionLatex: '(3+2i)(3-2i) = \\text{?}',
    correctAnswer: '13',
    explanation: '平方差公式：9-4i² = 9+4 = 13。',
    explanationLatex: '9-4i^2 = 9+4 = 13',
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
    explanation: '减去负数等于加正数：-3+7 = 4。',
    explanationLatex: '-3 - (-7) = -3 + 7 = 4',
  },
  {
    id: 'pp6-2',
    type: 'blank',
    question: '',
    questionLatex: '(-4) \\times (-3) = \\text{?}',
    correctAnswer: '12',
    explanation: '负负得正：(-4)×(-3) = 12。',
  },
  {
    id: 'pp6-3',
    type: 'blank',
    question: '',
    questionLatex: '2 - i^2 = \\text{?}',
    correctAnswer: '3',
    explanation: 'i²=-1，所以 2-(-1) = 3。',
    explanationLatex: '2 - i^2 = 2 - (-1) = 3',
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
    explanation: '53÷4=13余1，查表余1 → i。',
  },
  {
    id: 'pp7-2',
    type: 'blank',
    question: '',
    questionLatex: 'i^{100} = \\text{?}',
    correctAnswer: '1',
    explanation: '100÷4=25余0，查表余0 → 1。',
  },
  {
    id: 'pp7-3',
    type: 'blank',
    question: '',
    questionLatex: 'i^{7} = \\text{?}',
    correctAnswer: '-i',
    acceptableAnswers: ['- i'],
    explanation: '7÷4=1余3，查表余3 → -i。',
  },
];
