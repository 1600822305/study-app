import type { QuizQuestionData } from '@/types';

// ── 第2节：平方、开方、绝对值 ──
export const prereqPractice2: QuizQuestionData[] = [
  { id: 'sq-1', type: 'choice', question: '', questionLatex: '(-6)^2 = \\text{?}', options: [{ label: 'A', value: '36' }, { label: 'B', value: '-36' }, { label: 'C', value: '12' }, { label: 'D', value: '-12' }], correctAnswer: '36' },
  { id: 'sq-2', type: 'choice', question: '', questionLatex: '-6^2 = \\text{?}', options: [{ label: 'A', value: '36' }, { label: 'B', value: '-36' }, { label: 'C', value: '12' }, { label: 'D', value: '-12' }], correctAnswer: '-36' },
  { id: 'sq-3', type: 'choice', question: '', questionLatex: '\\sqrt{49} = \\text{?}', options: [{ label: 'A', value: '7' }, { label: 'B', value: '-7' }, { label: 'C', value: '\\pm 7', isLatex: true }, { label: 'D', value: '14' }], correctAnswer: '7' },
  { id: 'sq-4', type: 'choice', question: '', questionLatex: '\\sqrt{(-3)^2} = \\text{?}', options: [{ label: 'A', value: '-3' }, { label: 'B', value: '3' }, { label: 'C', value: '\\pm 3', isLatex: true }, { label: 'D', value: '9' }], correctAnswer: '3' },
  { id: 'sq-5', type: 'choice', question: '', questionLatex: '|-8| = \\text{?}', options: [{ label: 'A', value: '-8' }, { label: 'B', value: '8' }, { label: 'C', value: '0' }, { label: 'D', value: '64' }], correctAnswer: '8' },
  { id: 'sq-6', type: 'choice', question: '', questionLatex: '14^2 = \\text{?}', options: [{ label: 'A', value: '186' }, { label: 'B', value: '196' }, { label: 'C', value: '144' }, { label: 'D', value: '169' }], correctAnswer: '196' },
  { id: 'sq-7', type: 'choice', question: '', questionLatex: '5^2 + 12^2 = \\text{?}', options: [{ label: 'A', value: '144' }, { label: 'B', value: '169' }, { label: 'C', value: '196' }, { label: 'D', value: '125' }], correctAnswer: '169' },
];

// ── 第4节：分数运算（混合前置知识） ──
export const prereqPractice4: QuizQuestionData[] = [
  {
    id: 'pp4-1',
    type: 'choice',
    question: '',
    questionLatex: '-\\dfrac{2}{5} + \\dfrac{4}{5} = \\text{?}',
    options: [
      { label: 'A', value: '-\\dfrac{6}{5}', isLatex: true },
      { label: 'B', value: '\\dfrac{2}{5}', isLatex: true },
      { label: 'C', value: '-\\dfrac{2}{5}', isLatex: true },
      { label: 'D', value: '\\dfrac{6}{5}', isLatex: true },
    ],
    correctAnswer: '\\dfrac{2}{5}',
  },
  {
    id: 'pp4-2',
    type: 'choice',
    question: '',
    questionLatex: '\\dfrac{4^2 - 3^2}{4^2 + 3^2} = \\text{?}',
    options: [
      { label: 'A', value: '\\dfrac{7}{25}', isLatex: true },
      { label: 'B', value: '\\dfrac{1}{5}', isLatex: true },
      { label: 'C', value: '7', isLatex: false },
      { label: 'D', value: '\\dfrac{1}{7}', isLatex: true },
    ],
    correctAnswer: '\\dfrac{7}{25}',
  },
  {
    id: 'pp4-3',
    type: 'choice',
    question: '',
    questionLatex: '\\dfrac{\\sqrt{9}}{\\sqrt{16}} = \\text{?}',
    options: [
      { label: 'A', value: '\\dfrac{9}{16}', isLatex: true },
      { label: 'B', value: '\\dfrac{3}{4}', isLatex: true },
      { label: 'C', value: '\\dfrac{3}{16}', isLatex: true },
      { label: 'D', value: '\\dfrac{4}{3}', isLatex: true },
    ],
    correctAnswer: '\\dfrac{3}{4}',
  },
  {
    id: 'pp4-4',
    type: 'choice',
    question: '',
    questionLatex: '\\dfrac{(-2)^2}{(-3)^2} = \\text{?}',
    options: [
      { label: 'A', value: '-\\dfrac{4}{9}', isLatex: true },
      { label: 'B', value: '\\dfrac{4}{9}', isLatex: true },
      { label: 'C', value: '-\\dfrac{2}{3}', isLatex: true },
      { label: 'D', value: '\\dfrac{2}{3}', isLatex: true },
    ],
    correctAnswer: '\\dfrac{4}{9}',
  },
  {
    id: 'pp4-5',
    type: 'choice',
    question: '',
    questionLatex: '\\dfrac{1}{2} - \\dfrac{1}{3} \\times \\dfrac{3}{4} = \\text{?}',
    options: [
      { label: 'A', value: '\\dfrac{1}{4}', isLatex: true },
      { label: 'B', value: '\\dfrac{3}{8}', isLatex: true },
      { label: 'C', value: '\\dfrac{1}{12}', isLatex: true },
      { label: 'D', value: '\\dfrac{1}{8}', isLatex: true },
    ],
    correctAnswer: '\\dfrac{1}{4}',
  },
];

// ── 第5节：展开式（混合前置知识） ──
export const prereqPractice5: QuizQuestionData[] = [
  {
    id: 'pp5-1',
    type: 'choice',
    question: '',
    questionLatex: '(5+3)(5-3) = \\text{?}',
    options: [
      { label: 'A', value: '4', isLatex: false },
      { label: 'B', value: '16', isLatex: false },
      { label: 'C', value: '8', isLatex: false },
      { label: 'D', value: '6', isLatex: false },
    ],
    correctAnswer: '16',
  },
  {
    id: 'pp5-2',
    type: 'choice',
    question: '',
    questionLatex: '(2-i)^2 = \\text{?}',
    options: [
      { label: 'A', value: '4-4i', isLatex: true },
      { label: 'B', value: '3-4i', isLatex: true },
      { label: 'C', value: '3+4i', isLatex: true },
      { label: 'D', value: '4+4i', isLatex: true },
    ],
    correctAnswer: '3-4i',
  },
  {
    id: 'pp5-3',
    type: 'choice',
    question: '',
    questionLatex: '(\\sqrt{3}+1)(\\sqrt{3}-1) = \\text{?}',
    options: [
      { label: 'A', value: '2', isLatex: false },
      { label: 'B', value: '4', isLatex: false },
      { label: 'C', value: '\\sqrt{2}', isLatex: true },
      { label: 'D', value: '3', isLatex: false },
    ],
    correctAnswer: '2',
  },
  {
    id: 'pp5-4',
    type: 'choice',
    question: '',
    questionLatex: '-2(3-2i) = \\text{?}',
    options: [
      { label: 'A', value: '-6+4i', isLatex: true },
      { label: 'B', value: '6-4i', isLatex: true },
      { label: 'C', value: '-6-4i', isLatex: true },
      { label: 'D', value: '-5+4i', isLatex: true },
    ],
    correctAnswer: '-6+4i',
  },
  {
    id: 'pp5-5',
    type: 'choice',
    question: '',
    questionLatex: '(1+i)^2 + (1-i)^2 = \\text{?}',
    options: [
      { label: 'A', value: '4', isLatex: false },
      { label: 'B', value: '2i', isLatex: true },
      { label: 'C', value: '0', isLatex: false },
      { label: 'D', value: '-2i', isLatex: true },
    ],
    correctAnswer: '0',
  },
];

// ── 第6节：负数与 i 的幂次（混合前置知识） ──
export const prereqPractice6: QuizQuestionData[] = [
  {
    id: 'pp6-1',
    type: 'choice',
    question: '',
    questionLatex: '(-4)^2 + (-3)^2 = \\text{?}',
    options: [
      { label: 'A', value: '25', isLatex: false },
      { label: 'B', value: '-25', isLatex: false },
      { label: 'C', value: '7', isLatex: false },
      { label: 'D', value: '1', isLatex: false },
    ],
    correctAnswer: '25',
  },
  {
    id: 'pp6-2',
    type: 'choice',
    question: '',
    questionLatex: '\\dfrac{i^2 + 1}{i^2 - 1} = \\text{?}',
    options: [
      { label: 'A', value: '0', isLatex: false },
      { label: 'B', value: '1', isLatex: false },
      { label: 'C', value: '-1', isLatex: false },
      { label: 'D', value: '2', isLatex: false },
    ],
    correctAnswer: '0',
  },
  {
    id: 'pp6-3',
    type: 'choice',
    question: '',
    questionLatex: '(1+i)^2 \\times i = \\text{?}',
    options: [
      { label: 'A', value: '2i', isLatex: true },
      { label: 'B', value: '-2', isLatex: false },
      { label: 'C', value: '2', isLatex: false },
      { label: 'D', value: '-2i', isLatex: true },
    ],
    correctAnswer: '-2',
  },
  {
    id: 'pp6-4',
    type: 'choice',
    question: '',
    questionLatex: 'i^{47} = \\text{?}',
    options: [
      { label: 'A', value: 'i', isLatex: true },
      { label: 'B', value: '-1', isLatex: false },
      { label: 'C', value: '-i', isLatex: true },
      { label: 'D', value: '1', isLatex: false },
    ],
    correctAnswer: '-i',
  },
  {
    id: 'pp6-5',
    type: 'choice',
    question: '',
    questionLatex: '\\dfrac{(-2)^3}{i^2} = \\text{?}',
    options: [
      { label: 'A', value: '8', isLatex: false },
      { label: 'B', value: '-8', isLatex: false },
      { label: 'C', value: '4', isLatex: false },
      { label: 'D', value: '-4', isLatex: false },
    ],
    correctAnswer: '8',
  },
];
