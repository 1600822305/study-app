// ============================================================
// 3.1.5 基本初等函数前置知识 - 自测题（6题混合）
// ============================================================

import type { QuizQuestionData } from '@/types';

export const elemPrereqQuizQuestions: QuizQuestionData[] = [
  {
    id: 'epq-1',
    question: '化简',
    questionLatex: '\\dfrac{a^3 \\times a^4}{a^2} = ?',
    options: [
      { label: 'A', value: 'a^5', isLatex: true },
      { label: 'B', value: 'a^9', isLatex: true },
      { label: 'C', value: 'a^{24}', isLatex: true },
      { label: 'D', value: 'a^6', isLatex: true },
    ],
    correctAnswer: 'a^5',
    explanation: '',
    explanationLatex: '\\text{先算分子：}a^3 \\times a^4 = a^{3+4} = a^7\\\\[4pt]\\text{再除：}\\dfrac{a^7}{a^2} = a^{7-2} = a^5',
  },
  {
    id: 'epq-2',
    question: '计算',
    questionLatex: '\\left(\\dfrac{1}{2}\\right)^{-2} = ?',
    options: [
      { label: 'A', value: '4' },
      { label: 'B', value: '\\dfrac{1}{4}', isLatex: true },
      { label: 'C', value: '-1' },
      { label: 'D', value: '2' },
    ],
    correctAnswer: '4',
    explanation: '',
    explanationLatex: '\\left(\\dfrac{1}{2}\\right)^{-2} = \\left(\\dfrac{2}{1}\\right)^{2} = 2^2 = 4\\\\[4pt]\\text{负指数 = 取倒数再乘方}',
  },
  {
    id: 'epq-3',
    question: '将根式转化为分数指数幂',
    questionLatex: '\\sqrt[3]{a^2} = ?',
    options: [
      { label: 'A', value: 'a^{\\frac{2}{3}}', isLatex: true },
      { label: 'B', value: 'a^{\\frac{3}{2}}', isLatex: true },
      { label: 'C', value: 'a^6', isLatex: true },
      { label: 'D', value: 'a^{\\frac{1}{3}}', isLatex: true },
    ],
    correctAnswer: 'a^{\\frac{2}{3}}',
    explanation: '',
    explanationLatex: '\\sqrt[n]{a^m} = a^{\\frac{m}{n}}\\\\[4pt]\\text{所以 }\\sqrt[3]{a^2} = a^{\\frac{2}{3}}',
  },
  {
    id: 'epq-4',
    question: '计算',
    questionLatex: '27^{\\frac{2}{3}} = ?',
    options: [
      { label: 'A', value: '9' },
      { label: 'B', value: '18' },
      { label: 'C', value: '3' },
      { label: 'D', value: '81' },
    ],
    correctAnswer: '9',
    explanation: '',
    explanationLatex: '27^{\\frac{2}{3}} = (27^{\\frac{1}{3}})^2 = (\\sqrt[3]{27})^2 = 3^2 = 9',
  },
  {
    id: 'epq-5',
    question: '计算',
    questionLatex: '\\log_2 32 = ?',
    options: [
      { label: 'A', value: '5' },
      { label: 'B', value: '4' },
      { label: 'C', value: '16' },
      { label: 'D', value: '6' },
    ],
    correctAnswer: '5',
    explanation: '',
    explanationLatex: '\\log_2 32 = 5\\text{，因为 }2^5 = 32',
  },
  {
    id: 'epq-6',
    question: '计算',
    questionLatex: '\\lg 0.01 = ?',
    options: [
      { label: 'A', value: '-2' },
      { label: 'B', value: '2' },
      { label: 'C', value: '-1' },
      { label: 'D', value: '0.01' },
    ],
    correctAnswer: '-2',
    explanation: '',
    explanationLatex: '\\lg 0.01 = \\log_{10} 0.01 = \\log_{10} 10^{-2} = -2',
  },
];
