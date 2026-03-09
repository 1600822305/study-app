// ============================================================
// 3.1.5 基本初等函数前置知识 - 即时练习题
// 分三组：指数运算、根式与分数指数、对数
// ============================================================

import type { QuizQuestionData } from '@/types';

// ── 第一组：指数运算 ──
export const elemPrereqPractice1: QuizQuestionData[] = [
  {
    id: 'epp1-1',
    question: '计算',
    questionLatex: '2^3 \\times 2^4 = ?',
    options: [
      { label: 'A', value: '2^7', isLatex: true },
      { label: 'B', value: '2^{12}', isLatex: true },
      { label: 'C', value: '4^7', isLatex: true },
      { label: 'D', value: '2^1', isLatex: true },
    ],
    correctAnswer: '2^7',
    explanation: '',
    explanationLatex: '\\text{同底数幂相乘，底数不变指数相加：}2^3 \\times 2^4 = 2^{3+4} = 2^7',
  },
  {
    id: 'epp1-2',
    question: '化简',
    questionLatex: '\\dfrac{a^5}{a^2} = ?',
    options: [
      { label: 'A', value: 'a^3', isLatex: true },
      { label: 'B', value: 'a^7', isLatex: true },
      { label: 'C', value: 'a^{10}', isLatex: true },
      { label: 'D', value: 'a^{2.5}', isLatex: true },
    ],
    correctAnswer: 'a^3',
    explanation: '',
    explanationLatex: '\\text{同底数幂相除，底数不变指数相减：}\\dfrac{a^5}{a^2} = a^{5-2} = a^3',
  },
  {
    id: 'epp1-3',
    question: '计算',
    questionLatex: '(3^2)^3 = ?',
    options: [
      { label: 'A', value: '3^6', isLatex: true },
      { label: 'B', value: '3^5', isLatex: true },
      { label: 'C', value: '9^3', isLatex: true },
      { label: 'D', value: '3^8', isLatex: true },
    ],
    correctAnswer: '3^6',
    explanation: '',
    explanationLatex: '\\text{幂的幂，底数不变指数相乘：}(3^2)^3 = 3^{2 \\times 3} = 3^6',
  },
  {
    id: 'epp1-4',
    question: '计算',
    questionLatex: '5^0 = ?',
    options: [
      { label: 'A', value: '1' },
      { label: 'B', value: '0' },
      { label: 'C', value: '5' },
      { label: 'D', value: '无意义' },
    ],
    correctAnswer: '1',
    explanation: '',
    explanationLatex: '\\text{零指数幂：}a^0 = 1\\text{（}a \\neq 0\\text{）}\\\\[4pt]\\text{所以 }5^0 = 1',
  },
  {
    id: 'epp1-5',
    question: '计算',
    questionLatex: '2^{-3} = ?',
    options: [
      { label: 'A', value: '\\dfrac{1}{8}', isLatex: true },
      { label: 'B', value: '-8' },
      { label: 'C', value: '-6' },
      { label: 'D', value: '\\dfrac{1}{6}', isLatex: true },
    ],
    correctAnswer: '\\dfrac{1}{8}',
    explanation: '',
    explanationLatex: '\\text{负指数幂：}a^{-n} = \\dfrac{1}{a^n}\\\\[4pt]2^{-3} = \\dfrac{1}{2^3} = \\dfrac{1}{8}',
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
