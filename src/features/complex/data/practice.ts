import type { QuizQuestionData } from '@/types';

// ── 第1节：虚数单位 i ──
export const complexPractice1: QuizQuestionData[] = [
  {
    id: 'cp1-1',
    type: 'blank',
    question: '',
    questionLatex: 'i^2 = \\text{?}',
    correctAnswer: '-1',
    explanation: 'i 的定义就是 i² = -1。',
  },
  {
    id: 'cp1-2',
    type: 'choice',
    question: '',
    questionLatex: 'x^2 = -1 \\text{ 在实数范围内有解吗？}',
    options: [
      { label: 'A', value: '有' },
      { label: 'B', value: '没有' },
    ],
    correctAnswer: '没有',
    explanation: '实数的平方 ≥ 0，所以 x² = -1 在实数范围内无解。',
  },
];

// ── 第2节：复数的概念 ──
export const complexPractice2: QuizQuestionData[] = [
  {
    id: 'cp2-1',
    type: 'choice',
    question: '',
    questionLatex: 'z = 5 - 4i \\text{ 的实部和虚部分别是？}',
    options: [
      { label: 'A', value: '实部 5，虚部 4' },
      { label: 'B', value: '实部 5，虚部 -4' },
      { label: 'C', value: '实部 -4，虚部 5' },
      { label: 'D', value: '实部 5，虚部 -4i' },
    ],
    correctAnswer: '实部 5，虚部 -4',
    explanation: 'z = a+bi 中，a 是实部，b 是虚部。注意虚部是 -4 不是 -4i。',
  },
  {
    id: 'cp2-2',
    type: 'choice',
    question: '',
    questionLatex: 'z = 2i \\text{ 是什么数？}',
    options: [
      { label: 'A', value: '实数' },
      { label: 'B', value: '纯虚数' },
      { label: 'C', value: '零' },
      { label: 'D', value: '不是复数' },
    ],
    correctAnswer: '纯虚数',
    explanation: '实部=0，虚部=2≠0，所以是纯虚数。',
  },
];

// ── 第3节：复数相等 ──
export const complexPractice3: QuizQuestionData[] = [
  {
    id: 'cp3-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{已知 } (3x-6) + (2y+4)i = 0 \\text{，求 } x = \\text{?}',
    correctAnswer: '2',
    explanation: '实部 3x-6=0 → x=2；虚部 2y+4=0 → y=-2。',
  },
  {
    id: 'cp3-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{已知 } a+bi = 2-3i \\text{，求 } b = \\text{?}',
    correctAnswer: '-3',
    explanation: '实部对应实部：a=2；虚部对应虚部：b=-3。',
  },
];

// ── 第4节：复数运算 ──
export const complexPractice4: QuizQuestionData[] = [
  {
    id: 'cp4-1',
    type: 'blank',
    question: '',
    questionLatex: '(3+2i)+(1-5i) = \\text{?}',
    correctAnswer: '4-3i',
    acceptableAnswers: ['4 - 3i', '4- 3i', '4 -3i'],
    explanation: '实部相加 3+1=4，虚部相加 2+(-5)=-3，结果 4-3i。',
  },
  {
    id: 'cp4-2',
    type: 'blank',
    question: '',
    questionLatex: '\\dfrac{1+i}{1-i} = \\text{?}',
    correctAnswer: 'i',
    explanation: '分子分母同乘 (1+i)：(1+i)²/((1-i)(1+i)) = (1+2i-1)/(1+1) = 2i/2 = i。',
    explanationLatex: '\\frac{(1+i)^2}{(1-i)(1+i)} = \\frac{2i}{2} = i',
  },
  {
    id: 'cp4-3',
    type: 'blank',
    question: '',
    questionLatex: '|3+4i| = \\text{?}',
    correctAnswer: '5',
    explanation: '|3+4i| = √(3²+4²) = √(9+16) = √25 = 5。',
    explanationLatex: '\\sqrt{3^2+4^2} = \\sqrt{25} = 5',
  },
  {
    id: 'cp4-4',
    type: 'blank',
    question: '',
    questionLatex: 'i^{67} = \\text{?}',
    correctAnswer: '-i',
    acceptableAnswers: ['- i'],
    explanation: '67÷4=16余3，查表余3 → -i。',
  },
];

// ── 第5节：复平面 ──
export const complexPractice5: QuizQuestionData[] = [
  {
    id: 'cp5-1',
    type: 'choice',
    question: '',
    questionLatex: 'z = -2+3i \\text{ 对应的点在第几象限？}',
    options: [
      { label: 'A', value: '第一象限' },
      { label: 'B', value: '第二象限' },
      { label: 'C', value: '第三象限' },
      { label: 'D', value: '第四象限' },
    ],
    correctAnswer: '第二象限',
    explanation: '对应点 (-2, 3)，x<0, y>0，在第二象限。',
  },
  {
    id: 'cp5-2',
    type: 'choice',
    question: '',
    questionLatex: 'z = 4-i \\text{ 对应的点在第几象限？}',
    options: [
      { label: 'A', value: '第一象限' },
      { label: 'B', value: '第二象限' },
      { label: 'C', value: '第三象限' },
      { label: 'D', value: '第四象限' },
    ],
    correctAnswer: '第四象限',
    explanation: '对应点 (4, -1)，x>0, y<0，在第四象限。',
  },
];
