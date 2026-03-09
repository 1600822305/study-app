// ============================================================
// 3.1.5 基本初等函数前置知识 - 即时练习题
// 分三组：指数运算、根式与分数指数、对数
// ============================================================

import type { QuizQuestionData } from '@/types';

// ── 第一组：指数运算（覆盖五大法则 + 零指数 + 负指数） ──
export const elemPrereqPractice1: QuizQuestionData[] = [
  {
    id: 'epp1-1',
    question: '化简',
    questionLatex: '(3a)^2 = ?',
    options: [
      { label: 'A', value: '9a^2', isLatex: true },
      { label: 'B', value: '3a^2', isLatex: true },
      { label: 'C', value: '6a', isLatex: true },
      { label: 'D', value: '9a', isLatex: true },
    ],
    correctAnswer: '9a^2',
    explanation: '',
    explanationLatex: '\\text{积的幂 = 幂的积：}(3a)^2 = 3^2 \\cdot a^2 = 9a^2\\\\[4pt]\\text{注意：系数和字母都要平方！}',
  },
  {
    id: 'epp1-2',
    question: '计算',
    questionLatex: '\\left(\\dfrac{2}{5}\\right)^3 = ?',
    options: [
      { label: 'A', value: '\\dfrac{8}{125}', isLatex: true },
      { label: 'B', value: '\\dfrac{6}{15}', isLatex: true },
      { label: 'C', value: '\\dfrac{2}{125}', isLatex: true },
      { label: 'D', value: '\\dfrac{8}{15}', isLatex: true },
    ],
    correctAnswer: '\\dfrac{8}{125}',
    explanation: '',
    explanationLatex: '\\text{商的幂 = 幂的商：}\\left(\\dfrac{2}{5}\\right)^3 = \\dfrac{2^3}{5^3} = \\dfrac{8}{125}',
  },
  {
    id: 'epp1-3',
    question: '化简',
    questionLatex: '2^5 \\times 2^{-3} = ?',
    options: [
      { label: 'A', value: '4' },
      { label: 'B', value: '2^8', isLatex: true },
      { label: 'C', value: '2^{-15}', isLatex: true },
      { label: 'D', value: '\\dfrac{1}{4}', isLatex: true },
    ],
    correctAnswer: '4',
    explanation: '',
    explanationLatex: '\\text{同底相乘，指数相加：}2^5 \\times 2^{-3} = 2^{5+(-3)} = 2^2 = 4\\\\[4pt]\\text{负指数也能直接用法则！}',
  },
  {
    id: 'epp1-4',
    question: '化简',
    questionLatex: '\\dfrac{(a^2)^3}{a^4} = ?',
    options: [
      { label: 'A', value: 'a^2', isLatex: true },
      { label: 'B', value: 'a^{10}', isLatex: true },
      { label: 'C', value: 'a^3', isLatex: true },
      { label: 'D', value: 'a^{24}', isLatex: true },
    ],
    correctAnswer: 'a^2',
    explanation: '',
    explanationLatex: '\\text{先幂的幂：}(a^2)^3 = a^{2 \\times 3} = a^6\\\\[4pt]\\text{再同底相除：}\\dfrac{a^6}{a^4} = a^{6-4} = a^2',
  },
  {
    id: 'epp1-5',
    question: '计算',
    questionLatex: '(-1)^0 + 3^{-1} = ?',
    options: [
      { label: 'A', value: '\\dfrac{4}{3}', isLatex: true },
      { label: 'B', value: '0' },
      { label: 'C', value: '\\dfrac{2}{3}', isLatex: true },
      { label: 'D', value: '-\\dfrac{2}{3}', isLatex: true },
    ],
    correctAnswer: '\\dfrac{4}{3}',
    explanation: '',
    explanationLatex: '(-1)^0 = 1\\text{（零指数幂）}\\\\[4pt]3^{-1} = \\dfrac{1}{3}\\text{（负指数幂）}\\\\[4pt]\\text{所以 }1 + \\dfrac{1}{3} = \\dfrac{4}{3}',
  },
];

// ── 第二组：根式与分数指数幂 ──
export const elemPrereqPractice2: QuizQuestionData[] = [
  {
    id: 'epp2-1',
    question: '计算',
    questionLatex: '\\sqrt{16} = ?',
    options: [
      { label: 'A', value: '4' },
      { label: 'B', value: '8' },
      { label: 'C', value: '2' },
      { label: 'D', value: '256' },
    ],
    correctAnswer: '4',
    explanation: '',
    explanationLatex: '\\sqrt{16} = 4\\text{，因为 }4^2 = 16',
  },
  {
    id: 'epp2-2',
    question: '计算',
    questionLatex: '\\sqrt[3]{27} = ?',
    options: [
      { label: 'A', value: '3' },
      { label: 'B', value: '9' },
      { label: 'C', value: '\\sqrt{27}', isLatex: true },
      { label: 'D', value: '27' },
    ],
    correctAnswer: '3',
    explanation: '',
    explanationLatex: '\\sqrt[3]{27} = 3\\text{，因为 }3^3 = 27',
  },
  {
    id: 'epp2-3',
    question: '计算',
    questionLatex: '8^{\\frac{1}{3}} = ?',
    options: [
      { label: 'A', value: '2' },
      { label: 'B', value: '\\dfrac{8}{3}', isLatex: true },
      { label: 'C', value: '24' },
      { label: 'D', value: '4' },
    ],
    correctAnswer: '2',
    explanation: '',
    explanationLatex: '8^{\\frac{1}{3}} = \\sqrt[3]{8} = 2\\text{，因为 }2^3 = 8',
  },
  {
    id: 'epp2-4',
    question: '计算',
    questionLatex: '4^{\\frac{3}{2}} = ?',
    options: [
      { label: 'A', value: '8' },
      { label: 'B', value: '6' },
      { label: 'C', value: '16' },
      { label: 'D', value: '2' },
    ],
    correctAnswer: '8',
    explanation: '',
    explanationLatex: '4^{\\frac{3}{2}} = (4^{\\frac{1}{2}})^3 = (\\sqrt{4})^3 = 2^3 = 8',
  },
  {
    id: 'epp2-5',
    question: '计算',
    questionLatex: '9^{-\\frac{1}{2}} = ?',
    options: [
      { label: 'A', value: '\\dfrac{1}{3}', isLatex: true },
      { label: 'B', value: '-3' },
      { label: 'C', value: '\\dfrac{1}{81}', isLatex: true },
      { label: 'D', value: '3' },
    ],
    correctAnswer: '\\dfrac{1}{3}',
    explanation: '',
    explanationLatex: '9^{-\\frac{1}{2}} = \\dfrac{1}{9^{\\frac{1}{2}}} = \\dfrac{1}{\\sqrt{9}} = \\dfrac{1}{3}',
  },
];

// ── 第三组：对数基础 ──
export const elemPrereqPractice3: QuizQuestionData[] = [
  {
    id: 'epp3-1',
    question: '计算',
    questionLatex: '\\log_2 8 = ?',
    options: [
      { label: 'A', value: '3' },
      { label: 'B', value: '4' },
      { label: 'C', value: '2' },
      { label: 'D', value: '6' },
    ],
    correctAnswer: '3',
    explanation: '',
    explanationLatex: '\\log_2 8 = 3\\text{，因为 }2^3 = 8',
  },
  {
    id: 'epp3-2',
    question: '计算',
    questionLatex: '\\log_3 1 = ?',
    options: [
      { label: 'A', value: '0' },
      { label: 'B', value: '1' },
      { label: 'C', value: '3' },
      { label: 'D', value: '无意义' },
    ],
    correctAnswer: '0',
    explanation: '',
    explanationLatex: '\\log_3 1 = 0\\text{，因为 }3^0 = 1\\\\[4pt]\\text{铁律：}\\log_a 1 = 0',
  },
  {
    id: 'epp3-3',
    question: '计算',
    questionLatex: '\\log_5 5 = ?',
    options: [
      { label: 'A', value: '1' },
      { label: 'B', value: '0' },
      { label: 'C', value: '5' },
      { label: 'D', value: '25' },
    ],
    correctAnswer: '1',
    explanation: '',
    explanationLatex: '\\log_5 5 = 1\\text{，因为 }5^1 = 5\\\\[4pt]\\text{铁律：}\\log_a a = 1',
  },
  {
    id: 'epp3-4',
    question: '计算',
    questionLatex: '\\lg 100 = ?',
    options: [
      { label: 'A', value: '2' },
      { label: 'B', value: '10' },
      { label: 'C', value: '100' },
      { label: 'D', value: '1' },
    ],
    correctAnswer: '2',
    explanation: '',
    explanationLatex: '\\lg 100 = \\log_{10} 100 = 2\\text{，因为 }10^2 = 100',
  },
  {
    id: 'epp3-5',
    question: '计算',
    questionLatex: '\\log_4 16 = ?',
    options: [
      { label: 'A', value: '2' },
      { label: 'B', value: '4' },
      { label: 'C', value: '8' },
      { label: 'D', value: '3' },
    ],
    correctAnswer: '2',
    explanation: '',
    explanationLatex: '\\log_4 16 = 2\\text{，因为 }4^2 = 16',
  },
];
