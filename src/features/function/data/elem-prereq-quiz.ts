// ============================================================
// 3.1.5 基本初等函数前置知识 - 自测题（8题混合：指数3 + 根式3 + 对数2）
// ============================================================

import type { QuizQuestionData } from '@/types';

export const elemPrereqQuizQuestions: QuizQuestionData[] = [
  // ── 指数运算（3题） ──
  {
    id: 'epq-1',
    question: '化简',
    questionLatex: '\\dfrac{(2a^2)^3}{4a^3} = ?',
    options: [
      { label: 'A', value: '2a^3', isLatex: true },
      { label: 'B', value: '8a^3', isLatex: true },
      { label: 'C', value: '2a^6', isLatex: true },
      { label: 'D', value: '4a^3', isLatex: true },
    ],
    correctAnswer: '2a^3',
    explanation: '',
    explanationLatex: '(2a^2)^3 = 2^3 \\cdot (a^2)^3 = 8a^6\\\\[4pt]\\dfrac{8a^6}{4a^3} = 2a^{6-3} = 2a^3',
  },
  {
    id: 'epq-2',
    question: '计算',
    questionLatex: '\\left(\\dfrac{2}{3}\\right)^{-1} \\times 6^0 = ?',
    options: [
      { label: 'A', value: '\\dfrac{3}{2}', isLatex: true },
      { label: 'B', value: '0' },
      { label: 'C', value: '\\dfrac{2}{3}', isLatex: true },
      { label: 'D', value: '1' },
    ],
    correctAnswer: '\\dfrac{3}{2}',
    explanation: '',
    explanationLatex: '\\left(\\dfrac{2}{3}\\right)^{-1} = \\dfrac{3}{2}\\text{（负指数取倒数）}\\\\[4pt]6^0 = 1\\\\[4pt]\\dfrac{3}{2} \\times 1 = \\dfrac{3}{2}',
  },
  {
    id: 'epq-3',
    question: '化简',
    questionLatex: '\\dfrac{3^{n+2} - 3^n}{3^n} = ?',
    options: [
      { label: 'A', value: '8' },
      { label: 'B', value: '3^2', isLatex: true },
      { label: 'C', value: '6' },
      { label: 'D', value: '2' },
    ],
    correctAnswer: '8',
    explanation: '',
    explanationLatex: '\\dfrac{3^{n+2} - 3^n}{3^n} = \\dfrac{3^n(3^2 - 1)}{3^n} = 3^2 - 1 = 9 - 1 = 8',
  },
  // ── 根式与分数指数幂（3题） ──
  {
    id: 'epq-4',
    question: '化简',
    questionLatex: '\\sqrt{a^3} \\cdot a^{-\\frac{1}{2}} = ?',
    options: [
      { label: 'A', value: 'a', isLatex: true },
      { label: 'B', value: 'a^2', isLatex: true },
      { label: 'C', value: '\\sqrt{a}', isLatex: true },
      { label: 'D', value: 'a^{\\frac{3}{2}}', isLatex: true },
    ],
    correctAnswer: 'a',
    explanation: '',
    explanationLatex: '\\sqrt{a^3} = a^{\\frac{3}{2}}\\\\[4pt]a^{\\frac{3}{2}} \\cdot a^{-\\frac{1}{2}} = a^{\\frac{3}{2}-\\frac{1}{2}} = a^1 = a',
  },
  {
    id: 'epq-5',
    question: '计算',
    questionLatex: '16^{\\frac{3}{4}} = ?',
    options: [
      { label: 'A', value: '8' },
      { label: 'B', value: '12' },
      { label: 'C', value: '4' },
      { label: 'D', value: '64' },
    ],
    correctAnswer: '8',
    explanation: '',
    explanationLatex: '16^{\\frac{3}{4}} = (16^{\\frac{1}{4}})^3 = (\\sqrt[4]{16})^3 = 2^3 = 8',
  },
  {
    id: 'epq-6',
    question: '化简',
    questionLatex: '\\dfrac{\\sqrt[6]{a^3}}{\\sqrt[3]{a}} = ?',
    options: [
      { label: 'A', value: '\\sqrt[6]{a}', isLatex: true },
      { label: 'B', value: 'a^{\\frac{1}{6}}', isLatex: true },
      { label: 'C', value: '1' },
      { label: 'D', value: 'a^{\\frac{1}{2}}', isLatex: true },
    ],
    correctAnswer: '\\sqrt[6]{a}',
    explanation: '',
    explanationLatex: '\\sqrt[6]{a^3} = a^{\\frac{3}{6}} = a^{\\frac{1}{2}}\\\\[4pt]\\sqrt[3]{a} = a^{\\frac{1}{3}}\\\\[4pt]\\dfrac{a^{\\frac{1}{2}}}{a^{\\frac{1}{3}}} = a^{\\frac{1}{2}-\\frac{1}{3}} = a^{\\frac{1}{6}} = \\sqrt[6]{a}',
  },
  // ── 对数（2题） ──
  {
    id: 'epq-7',
    question: '计算',
    questionLatex: '\\log_4 2 + \\log_4 8 = ?',
    options: [
      { label: 'A', value: '2' },
      { label: 'B', value: '3' },
      { label: 'C', value: '\\dfrac{3}{2}', isLatex: true },
      { label: 'D', value: '1' },
    ],
    correctAnswer: '2',
    explanation: '',
    explanationLatex: '\\log_4 2 = \\dfrac{1}{2}\\text{（因为 }4^{\\frac{1}{2}} = 2\\text{）}\\\\[4pt]\\log_4 8 = \\dfrac{3}{2}\\text{（因为 }4^{\\frac{3}{2}} = (2^2)^{\\frac{3}{2}} = 2^3 = 8\\text{）}\\\\[4pt]\\dfrac{1}{2} + \\dfrac{3}{2} = 2',
  },
  {
    id: 'epq-8',
    question: '计算',
    questionLatex: '10^{1+\\lg 2} = ?',
    options: [
      { label: 'A', value: '20' },
      { label: 'B', value: '12' },
      { label: 'C', value: '102' },
      { label: 'D', value: '\\lg 20', isLatex: true },
    ],
    correctAnswer: '20',
    explanation: '',
    explanationLatex: '10^{1+\\lg 2} = 10^1 \\cdot 10^{\\lg 2} = 10 \\times 2 = 20\\\\[4pt]\\text{用了恒等式 }10^{\\lg N} = N',
  },
];
