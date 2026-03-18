import type { QuizQuestionData } from '@/types';

// ── 即时练习（数列基本概念） ──
export const sequencePrereqPractice: QuizQuestionData[] = [
  {
    id: 'seq-p1',
    question: '数列 3, 6, 9, 12, 15, … 的第 4 项是',
    options: [
      { label: 'A', value: '9', isLatex: false },
      { label: 'B', value: '12', isLatex: false },
      { label: 'C', value: '15', isLatex: false },
      { label: 'D', value: '18', isLatex: false },
    ],
    correctAnswer: '12',
  },
  {
    id: 'seq-p2',
    question: '数列 2, 4, 6, 8, … 的通项公式是',
    questionLatex: '\\text{数列 } 2, 4, 6, 8, \\ldots \\text{ 的通项公式是}',
    options: [
      { label: 'A', value: 'a_n = n', isLatex: true },
      { label: 'B', value: 'a_n = 2n', isLatex: true },
      { label: 'C', value: 'a_n = n + 2', isLatex: true },
      { label: 'D', value: 'a_n = 2n + 1', isLatex: true },
    ],
    correctAnswer: 'a_n = 2n',
  },
  {
    id: 'seq-p3',
    question: '已知通项公式 aₙ = 3n - 1，则第 5 项 a₅ =',
    questionLatex: '\\text{已知 } a_n = 3n - 1\\text{，则 } a_5 =',
    options: [
      { label: 'A', value: '12', isLatex: false },
      { label: 'B', value: '14', isLatex: false },
      { label: 'C', value: '15', isLatex: false },
      { label: 'D', value: '16', isLatex: false },
    ],
    correctAnswer: '14',
  },
  {
    id: 'seq-p4',
    question: '数列 1, 3, 5, 7 的前 4 项和 S₄ =',
    questionLatex: '\\text{数列 } 1, 3, 5, 7 \\text{ 的前 4 项和 } S_4 =',
    options: [
      { label: 'A', value: '12', isLatex: false },
      { label: 'B', value: '14', isLatex: false },
      { label: 'C', value: '16', isLatex: false },
      { label: 'D', value: '18', isLatex: false },
    ],
    correctAnswer: '16',
  },
  {
    id: 'seq-p5',
    question: '已知 S₃ = 10，S₂ = 6，则 a₃ =',
    questionLatex: '\\text{已知 } S_3 = 10,\\; S_2 = 6\\text{，则 } a_3 =',
    options: [
      { label: 'A', value: '3', isLatex: false },
      { label: 'B', value: '4', isLatex: false },
      { label: 'C', value: '6', isLatex: false },
      { label: 'D', value: '10', isLatex: false },
    ],
    correctAnswer: '4',
  },
];

// ── 自测题（综合：概念、通项、前 n 项和、递推、Σ） ──
export const sequencePrereqQuiz: QuizQuestionData[] = [
  {
    id: 'seq-q1',
    question: '数列 1, 4, 9, 16, 25, … 的通项公式是',
    questionLatex: '\\text{数列 } 1, 4, 9, 16, 25, \\ldots \\text{ 的通项公式是}',
    options: [
      { label: 'A', value: 'a_n = 2n', isLatex: true },
      { label: 'B', value: 'a_n = n^2', isLatex: true },
      { label: 'C', value: 'a_n = n^2 + 1', isLatex: true },
      { label: 'D', value: 'a_n = 2^n', isLatex: true },
    ],
    correctAnswer: 'a_n = n^2',
  },
  {
    id: 'seq-q2',
    question: '已知 aₙ = 2ⁿ，则 a₁ + a₂ + a₃ =',
    questionLatex: '\\text{已知 } a_n = 2^n\\text{，则 } a_1 + a_2 + a_3 =',
    options: [
      { label: 'A', value: '6', isLatex: false },
      { label: 'B', value: '8', isLatex: false },
      { label: 'C', value: '14', isLatex: false },
      { label: 'D', value: '16', isLatex: false },
    ],
    correctAnswer: '14',
  },
  {
    id: 'seq-q3',
    question: '数列满足递推关系 aₙ₊₁ = aₙ + 5，a₁ = 3，则 a₃ =',
    questionLatex: '\\text{已知 } a_{n+1} = a_n + 5,\\; a_1 = 3\\text{，则 } a_3 =',
    options: [
      { label: 'A', value: '8', isLatex: false },
      { label: 'B', value: '10', isLatex: false },
      { label: 'C', value: '13', isLatex: false },
      { label: 'D', value: '15', isLatex: false },
    ],
    correctAnswer: '13',
  },
  {
    id: 'seq-q4',
    question: '已知 Sₙ = n² + n，则 a₃ =',
    questionLatex: '\\text{已知 } S_n = n^2 + n\\text{，则 } a_3 =',
    options: [
      { label: 'A', value: '5', isLatex: false },
      { label: 'B', value: '6', isLatex: false },
      { label: 'C', value: '7', isLatex: false },
      { label: 'D', value: '12', isLatex: false },
    ],
    correctAnswer: '6',
  },
  {
    id: 'seq-q5',
    question: '下面哪个是数列 1, 1/2, 1/3, 1/4, … 的通项公式？',
    questionLatex: '\\text{数列 } 1,\\; \\dfrac{1}{2},\\; \\dfrac{1}{3},\\; \\dfrac{1}{4},\\; \\ldots \\text{ 的通项公式是}',
    options: [
      { label: 'A', value: 'a_n = \\dfrac{1}{n}', isLatex: true },
      { label: 'B', value: 'a_n = \\dfrac{1}{n+1}', isLatex: true },
      { label: 'C', value: 'a_n = \\dfrac{n}{n+1}', isLatex: true },
      { label: 'D', value: 'a_n = 1 - \\dfrac{1}{n}', isLatex: true },
    ],
    correctAnswer: 'a_n = \\dfrac{1}{n}',
  },
  {
    id: 'seq-q6',
    question: 'Σ(i=1 到 4) i² 等于多少？',
    questionLatex: '\\displaystyle\\sum_{i=1}^{4} i^2 = \\;?',
    options: [
      { label: 'A', value: '10', isLatex: false },
      { label: 'B', value: '20', isLatex: false },
      { label: 'C', value: '30', isLatex: false },
      { label: 'D', value: '36', isLatex: false },
    ],
    correctAnswer: '30',
  },
  {
    id: 'seq-q7',
    question: '数列满足 aₙ₊₁ = 2aₙ，a₁ = 1，则 a₄ =',
    questionLatex: '\\text{已知 } a_{n+1} = 2a_n,\\; a_1 = 1\\text{，则 } a_4 =',
    options: [
      { label: 'A', value: '4', isLatex: false },
      { label: 'B', value: '6', isLatex: false },
      { label: 'C', value: '8', isLatex: false },
      { label: 'D', value: '16', isLatex: false },
    ],
    correctAnswer: '8',
  },
  {
    id: 'seq-q8',
    question: '已知 Sₙ = 3n，则这个数列是',
    questionLatex: '\\text{已知 } S_n = 3n\\text{，则 } a_n =',
    options: [
      { label: 'A', value: 'a_n = 3', isLatex: true },
      { label: 'B', value: 'a_n = 3n', isLatex: true },
      { label: 'C', value: 'a_n = n', isLatex: true },
      { label: 'D', value: 'a_n = 3n - 3', isLatex: true },
    ],
    correctAnswer: 'a_n = 3',
  },
];
