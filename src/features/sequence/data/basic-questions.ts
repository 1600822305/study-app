import type { QuizQuestionData } from '@/types';

// ── 即时练习（等差数列 + 等比数列基础） ──
export const sequenceBasicPractice: QuizQuestionData[] = [
  {
    id: 'sb-p1',
    question: '等差数列 2, 5, 8, 11, … 的公差 d =',
    questionLatex: '\\text{等差数列 } 2, 5, 8, 11, \\ldots \\text{ 的公差 } d =',
    options: [
      { label: 'A', value: '2', isLatex: false },
      { label: 'B', value: '3', isLatex: false },
      { label: 'C', value: '5', isLatex: false },
      { label: 'D', value: '7', isLatex: false },
    ],
    correctAnswer: '3',
  },
  {
    id: 'sb-p2',
    question: '等差数列首项 a₁ = 3，公差 d = 4，则 a₁₀ =',
    questionLatex: '\\text{等差数列 } a_1 = 3,\\; d = 4\\text{，则 } a_{10} =',
    options: [
      { label: 'A', value: '36', isLatex: false },
      { label: 'B', value: '39', isLatex: false },
      { label: 'C', value: '40', isLatex: false },
      { label: 'D', value: '43', isLatex: false },
    ],
    correctAnswer: '39',
  },
  {
    id: 'sb-p3',
    question: '等差数列 1, 3, 5, 7, 9 的前 5 项和 S₅ =',
    questionLatex: '\\text{等差数列 } 1, 3, 5, 7, 9 \\text{ 的前 5 项和 } S_5 =',
    options: [
      { label: 'A', value: '20', isLatex: false },
      { label: 'B', value: '25', isLatex: false },
      { label: 'C', value: '30', isLatex: false },
      { label: 'D', value: '35', isLatex: false },
    ],
    correctAnswer: '25',
  },
  {
    id: 'sb-p4',
    question: '等比数列 2, 6, 18, 54, … 的公比 q =',
    questionLatex: '\\text{等比数列 } 2, 6, 18, 54, \\ldots \\text{ 的公比 } q =',
    options: [
      { label: 'A', value: '2', isLatex: false },
      { label: 'B', value: '3', isLatex: false },
      { label: 'C', value: '4', isLatex: false },
      { label: 'D', value: '6', isLatex: false },
    ],
    correctAnswer: '3',
  },
  {
    id: 'sb-p5',
    question: '等比数列 a₁ = 2，q = 3，则 a₅ =',
    questionLatex: '\\text{等比数列 } a_1 = 2,\\; q = 3\\text{，则 } a_5 =',
    options: [
      { label: 'A', value: '54', isLatex: false },
      { label: 'B', value: '81', isLatex: false },
      { label: 'C', value: '162', isLatex: false },
      { label: 'D', value: '243', isLatex: false },
    ],
    correctAnswer: '162',
  },
];

// ── 自测题（综合：等差 + 等比 + 性质） ──
export const sequenceBasicQuiz: QuizQuestionData[] = [
  {
    id: 'sb-q1',
    question: '等差数列中，a₁ = 2，a₅ = 14，则公差 d =',
    questionLatex: '\\text{等差数列中，} a_1 = 2,\\; a_5 = 14\\text{，则公差 } d =',
    options: [
      { label: 'A', value: '2', isLatex: false },
      { label: 'B', value: '3', isLatex: false },
      { label: 'C', value: '4', isLatex: false },
      { label: 'D', value: '6', isLatex: false },
    ],
    correctAnswer: '3',
  },
  {
    id: 'sb-q2',
    question: '等差数列 a₁ = 1，d = 2，求 S₁₀',
    questionLatex: '\\text{等差数列 } a_1 = 1,\\; d = 2\\text{，求 } S_{10}',
    options: [
      { label: 'A', value: '80', isLatex: false },
      { label: 'B', value: '90', isLatex: false },
      { label: 'C', value: '100', isLatex: false },
      { label: 'D', value: '110', isLatex: false },
    ],
    correctAnswer: '100',
  },
  {
    id: 'sb-q3',
    question: '等差数列中，a₃ + a₇ = 20，则 a₅ =',
    questionLatex: '\\text{等差数列中，} a_3 + a_7 = 20\\text{，则 } a_5 =',
    options: [
      { label: 'A', value: '5', isLatex: false },
      { label: 'B', value: '8', isLatex: false },
      { label: 'C', value: '10', isLatex: false },
      { label: 'D', value: '20', isLatex: false },
    ],
    correctAnswer: '10',
  },
  {
    id: 'sb-q4',
    question: '等比数列中，a₁ = 1，q = -2，则 a₄ =',
    questionLatex: '\\text{等比数列中，} a_1 = 1,\\; q = -2\\text{，则 } a_4 =',
    options: [
      { label: 'A', value: '-4', isLatex: false },
      { label: 'B', value: '-8', isLatex: false },
      { label: 'C', value: '4', isLatex: false },
      { label: 'D', value: '8', isLatex: false },
    ],
    correctAnswer: '-8',
  },
  {
    id: 'sb-q5',
    question: '等比数列 1, 2, 4, 8 的前 4 项和 S₄ =',
    questionLatex: '\\text{等比数列 } 1, 2, 4, 8 \\text{ 的前 4 项和 } S_4 =',
    options: [
      { label: 'A', value: '14', isLatex: false },
      { label: 'B', value: '15', isLatex: false },
      { label: 'C', value: '16', isLatex: false },
      { label: 'D', value: '31', isLatex: false },
    ],
    correctAnswer: '15',
  },
  {
    id: 'sb-q6',
    question: '等比数列中，a₂ = 6，a₄ = 54，则公比 q =',
    questionLatex: '\\text{等比数列中，} a_2 = 6,\\; a_4 = 54\\text{，则公比 } q =',
    options: [
      { label: 'A', value: '\\pm 2', isLatex: true },
      { label: 'B', value: '\\pm 3', isLatex: true },
      { label: 'C', value: '3', isLatex: false },
      { label: 'D', value: '9', isLatex: false },
    ],
    correctAnswer: '\\pm 3',
  },
  {
    id: 'sb-q7',
    question: '已知等差数列 a₁ = 20，d = -3，从第几项开始为负数？',
    questionLatex: '\\text{已知等差数列 } a_1 = 20,\\; d = -3\\text{，从第几项开始为负数？}',
    options: [
      { label: 'A', value: '\\text{第 7 项}', isLatex: true },
      { label: 'B', value: '\\text{第 8 项}', isLatex: true },
      { label: 'C', value: '\\text{第 9 项}', isLatex: true },
      { label: 'D', value: '\\text{第 10 项}', isLatex: true },
    ],
    correctAnswer: '\\text{第 8 项}',
  },
  {
    id: 'sb-q8',
    question: '下列数列中，既是等差数列又是等比数列的是',
    options: [
      { label: 'A', value: '1, 1, 1, 1, ...', isLatex: false },
      { label: 'B', value: '1, 2, 3, 4, ...', isLatex: false },
      { label: 'C', value: '1, 2, 4, 8, ...', isLatex: false },
      { label: 'D', value: '0, 0, 0, 0, ...', isLatex: false },
    ],
    correctAnswer: '1, 1, 1, 1, ...',
  },
];
