import type { QuizQuestionData } from '@/types';

// ── 第1节：虚数单位 i ──
export const complexPractice1: QuizQuestionData[] = [
  {
    id: 'cp1-1',
    type: 'blank',
    question: '',
    questionLatex: 'i^2 = \\text{?}',
    correctAnswer: '-1',
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
  },
];

// ── 第2节：复数的概念（2道基础 + 3道高考难度）──
export const complexPractice2: QuizQuestionData[] = [
  // 基础题
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
  },
  // 高考难度题
  {
    id: 'cp2-3',
    type: 'choice',
    question: '',
    questionLatex: '\\text{若 } z = (m^2-1)+(m-1)i \\text{ 是纯虚数，则实数 } m = \\text{？}',
    options: [
      { label: 'A', value: '1' },
      { label: 'B', value: '-1' },
      { label: 'C', value: '±1', isLatex: true },
      { label: 'D', value: '0' },
    ],
    correctAnswer: '-1',
  },
  {
    id: 'cp2-4',
    type: 'choice',
    question: '',
    questionLatex: '\\text{下列复数中，是实数的是}',
    options: [
      { label: 'A', value: '1+i', isLatex: true },
      { label: 'B', value: 'i^2', isLatex: true },
      { label: 'C', value: '\\sqrt{2}\\,i', isLatex: true },
      { label: 'D', value: '1-i', isLatex: true },
    ],
    correctAnswer: 'i^2',
  },
  {
    id: 'cp2-5',
    type: 'choice',
    question: '',
    questionLatex: '\\text{若 } z = a+bi\\;(a,b\\in\\mathbb{R}) \\text{ 满足 } z = \\bar{z}\\text{，则}',
    options: [
      { label: 'A', value: 'z 是实数' },
      { label: 'B', value: 'z 是纯虚数' },
      { label: 'C', value: 'z = 0' },
      { label: 'D', value: 'z 是虚数' },
    ],
    correctAnswer: 'z 是实数',
  },
];

// ── 第3节：复数相等（2道基础 + 3道高考难度）──
export const complexPractice3: QuizQuestionData[] = [
  // 基础题
  {
    id: 'cp3-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{已知 } a+bi = 2-3i \\text{，则 } b = \\text{?}',
    correctAnswer: '-3',
  },
  {
    id: 'cp3-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{已知 } (3x-6) + (2y+4)i = 0 \\text{，则 } x = \\text{?}',
    correctAnswer: '2',
  },
  // 高考难度题
  {
    id: 'cp3-3',
    type: 'choice',
    question: '',
    questionLatex: '\\text{若 } (x+1) + (x^2-1)i = 0 \\text{（}x\\in\\mathbb{R}\\text{），则 } x = \\text{？}',
    options: [
      { label: 'A', value: '1' },
      { label: 'B', value: '-1' },
      { label: 'C', value: '±1', isLatex: true },
      { label: 'D', value: '0' },
    ],
    correctAnswer: '-1',
  },
  {
    id: 'cp3-4',
    type: 'choice',
    question: '',
    questionLatex: '\\text{若 } (a^2-4) + (a+2)i = bi \\text{（}a,b\\in\\mathbb{R},\\; b\\neq 0\\text{），则 } a+b = \\text{？}',
    options: [
      { label: 'A', value: '2' },
      { label: 'B', value: '-2' },
      { label: 'C', value: '6' },
      { label: 'D', value: '-6' },
    ],
    correctAnswer: '6',
  },
  {
    id: 'cp3-5',
    type: 'choice',
    question: '',
    questionLatex: '\\text{若复数 } z \\text{ 满足 } z + 2\\bar{z} = 3 + i \\text{，则 } z = \\text{？}',
    options: [
      { label: 'A', value: '1+i', isLatex: true },
      { label: 'B', value: '1-i', isLatex: true },
      { label: 'C', value: '3+i', isLatex: true },
      { label: 'D', value: '3-i', isLatex: true },
    ],
    correctAnswer: '1-i',
  },
];

// ── 第4节：复数运算（3道混合选择 + 2道填空大题）──
export const complexPractice4: QuizQuestionData[] = [
  // 选择题1：乘法 + i²代入
  {
    id: 'cp4-1',
    type: 'choice',
    question: '',
    questionLatex: '(2-i)(1+3i) = \\text{？}',
    options: [
      { label: 'A', value: '5+5i', isLatex: true },
      { label: 'B', value: '-1+5i', isLatex: true },
      { label: 'C', value: '5-5i', isLatex: true },
      { label: 'D', value: '-1-5i', isLatex: true },
    ],
    correctAnswer: '5+5i',
  },
  // 选择题2：除法 + 共轭 → 求虚部
  {
    id: 'cp4-2',
    type: 'choice',
    question: '',
    questionLatex: '\\dfrac{3+i}{1+i} \\text{ 的虚部是？}',
    options: [
      { label: 'A', value: '1', isLatex: true },
      { label: 'B', value: '-1', isLatex: true },
      { label: 'C', value: '2', isLatex: true },
      { label: 'D', value: '-2', isLatex: true },
    ],
    correctAnswer: '-1',
  },
  // 选择题3：i 的幂次 + 连续求和
  {
    id: 'cp4-3',
    type: 'choice',
    question: '',
    questionLatex: '1 + i + i^2 + i^3 = \\text{？}',
    options: [
      { label: 'A', value: '0', isLatex: true },
      { label: 'B', value: '1', isLatex: true },
      { label: 'C', value: 'i', isLatex: true },
      { label: 'D', value: '-1', isLatex: true },
    ],
    correctAnswer: '0',
  },
  // 大题1：除法 + 模
  {
    id: 'cp4-4',
    type: 'blank',
    question: '',
    questionLatex: '\\left|\\dfrac{(1+i)^2}{1-i}\\right| = \\text{?}',
    correctAnswer: '√2',
    acceptableAnswers: ['√2', '\\sqrt{2}', 'sqrt(2)', 'sqrt2'],
  },
  // 大题2：乘法 + 加法 + 共轭
  {
    id: 'cp4-5',
    type: 'blank',
    question: '',
    questionLatex: '\\text{已知 } z = (2+i)(1-i) \\text{，求 } z + \\bar{z} = \\text{?}',
    correctAnswer: '6',
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
  },
];
