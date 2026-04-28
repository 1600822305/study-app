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
  { id: 'cp2-2', type: 'blank', question: '', questionLatex: 'z = 0 \\text{ 是 } \\underline{\\qquad\\qquad} \\text{（实数/纯虚数/虚数）}', correctAnswer: '实数', acceptableAnswers: ['实数'] },
  { id: 'cp2-3', type: 'blank', question: '', questionLatex: '\\text{若 } z = (m^2-1)+(m-1)i \\text{ 是纯虚数，则 } m = \\underline{\\qquad\\qquad}', correctAnswer: '-1', acceptableAnswers: ['-1'] },
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
    questionLatex: 'z = i^2 + 2i \\text{ 是}',
    options: [
      { label: 'A', value: '实数' },
      { label: 'B', value: '纯虚数' },
      { label: 'C', value: '虚数（非纯虚数）' },
      { label: 'D', value: '以上都不是' },
    ],
    correctAnswer: '虚数（非纯虚数）',
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
    type: 'blank',
    question: '',
    questionLatex: '\\text{若 } (x+1) + (x^2-1)i = 0 \\text{（}x\\in\\mathbb{R}\\text{），则 } x = \\underline{\\qquad\\qquad}',
    correctAnswer: '-1',
    acceptableAnswers: ['-1'],
  },
  {
    id: 'cp3-4',
    type: 'blank',
    question: '',
    questionLatex: '\\text{若 } (a^2-4) + (a+2)i = bi \\text{（}a,b\\in\\mathbb{R},\\; b\\neq 0\\text{），则 } a+b = \\underline{\\qquad\\qquad}',
    correctAnswer: '6',
    acceptableAnswers: ['6'],
  },
  {
    id: 'cp3-5',
    type: 'blank',
    question: '',
    questionLatex: '\\text{若复数 } z \\text{ 满足 } z + 2\\bar{z} = 3 + i \\text{，则 } z = \\underline{\\qquad\\qquad}',
    correctAnswer: '1-i',
    acceptableAnswers: ['1-i'],
  },
];

// ── 第4节：复数运算（6道填空题，覆盖全部知识点）──
export const complexPractice4: QuizQuestionData[] = [
  // 加减法
  {
    id: 'cp4-1',
    type: 'blank',
    question: '',
    questionLatex: '(5-3i) - (2+i) = \\underline{\\qquad\\qquad}',
    correctAnswer: '3-4i',
    acceptableAnswers: ['3-4i'],
  },
  // 乘法（完全平方 + i²=-1）
  {
    id: 'cp4-2',
    type: 'blank',
    question: '',
    questionLatex: '(1+2i)^2 = \\underline{\\qquad\\qquad}',
    correctAnswer: '-3+4i',
    acceptableAnswers: ['-3+4i'],
  },
  // 除法（共轭、分母实数化）
  {
    id: 'cp4-3',
    type: 'blank',
    question: '',
    questionLatex: '\\dfrac{3+i}{1-i} = \\underline{\\qquad\\qquad}',
    correctAnswer: '1+2i',
    acceptableAnswers: ['1+2i'],
  },
  // i 的幂次
  {
    id: 'cp4-4',
    type: 'blank',
    question: '',
    questionLatex: 'i^{2025} + i^{2026} = \\underline{\\qquad\\qquad}',
    correctAnswer: 'i-1',
    acceptableAnswers: ['i-1', '-1+i'],
  },
  // 模的性质（|z₁z₂|=|z₁||z₂|）
  {
    id: 'cp4-5',
    type: 'blank',
    question: '',
    questionLatex: '|(1+i)(2-i)| = \\underline{\\qquad\\qquad}',
    correctAnswer: '√10',
    acceptableAnswers: ['√10', '\\sqrt{10}', 'sqrt(10)', 'sqrt10'],
  },
  // 共轭性质（z·z̄ = |z|²）
  {
    id: 'cp4-6',
    type: 'blank',
    question: '',
    questionLatex: '\\text{已知 } z = 2+i \\text{，则 } z \\cdot \\bar{z} = \\underline{\\qquad\\qquad}',
    correctAnswer: '5',
    acceptableAnswers: ['5'],
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
