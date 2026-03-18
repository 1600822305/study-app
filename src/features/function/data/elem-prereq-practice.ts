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
  },
];

// ── 第二组：根式与分数指数幂（转化 + 计算 + 混合运算） ──
export const elemPrereqPractice2: QuizQuestionData[] = [
  {
    id: 'epp2-1',
    question: '转化',
    questionLatex: '\\sqrt[3]{a^2}\\text{ 用分数指数幂表示为？}',
    options: [
      { label: 'A', value: 'a^{\\frac{2}{3}}', isLatex: true },
      { label: 'B', value: 'a^{\\frac{3}{2}}', isLatex: true },
      { label: 'C', value: 'a^{\\frac{1}{3}}', isLatex: true },
      { label: 'D', value: 'a^{\\frac{2}{1}}', isLatex: true },
    ],
    correctAnswer: 'a^{\\frac{2}{3}}',
  },
  {
    id: 'epp2-2',
    question: '计算',
    questionLatex: '27^{\\frac{2}{3}} = ?',
    options: [
      { label: 'A', value: '9' },
      { label: 'B', value: '18' },
      { label: 'C', value: '3' },
      { label: 'D', value: '\\dfrac{27}{3}', isLatex: true },
    ],
    correctAnswer: '9',
  },
  {
    id: 'epp2-3',
    question: '化简',
    questionLatex: '\\sqrt{a} \\cdot \\sqrt[3]{a} = ?',
    options: [
      { label: 'A', value: 'a^{\\frac{5}{6}}', isLatex: true },
      { label: 'B', value: 'a^{\\frac{1}{6}}', isLatex: true },
      { label: 'C', value: 'a^{\\frac{2}{3}}', isLatex: true },
      { label: 'D', value: 'a^2', isLatex: true },
    ],
    correctAnswer: 'a^{\\frac{5}{6}}',
  },
  {
    id: 'epp2-4',
    question: '计算',
    questionLatex: '\\dfrac{1}{\\sqrt[4]{16}} = ?',
    options: [
      { label: 'A', value: '\\dfrac{1}{2}', isLatex: true },
      { label: 'B', value: '\\dfrac{1}{4}', isLatex: true },
      { label: 'C', value: '2' },
      { label: 'D', value: '4' },
    ],
    correctAnswer: '\\dfrac{1}{2}',
  },
  {
    id: 'epp2-5',
    question: '化简',
    questionLatex: '\\dfrac{a^{\\frac{3}{2}}}{a^{\\frac{1}{2}}} = ?',
    options: [
      { label: 'A', value: 'a', isLatex: true },
      { label: 'B', value: 'a^2', isLatex: true },
      { label: 'C', value: 'a^{\\frac{3}{4}}', isLatex: true },
      { label: 'D', value: 'a^3', isLatex: true },
    ],
    correctAnswer: 'a',
  },
];

// ── 第三组：对数基础（定义转化 + 铁律 + 恒等式 + 特殊对数 + 限制条件） ──
export const elemPrereqPractice3: QuizQuestionData[] = [
  {
    id: 'epp3-1',
    question: '转化',
    questionLatex: '2^5 = 32\\text{ 写成对数式为？}',
    options: [
      { label: 'A', value: '\\log_2 32 = 5', isLatex: true },
      { label: 'B', value: '\\log_5 32 = 2', isLatex: true },
      { label: 'C', value: '\\log_{32} 2 = 5', isLatex: true },
      { label: 'D', value: '\\log_2 5 = 32', isLatex: true },
    ],
    correctAnswer: '\\log_2 32 = 5',
  },
  {
    id: 'epp3-2',
    question: '计算',
    questionLatex: '\\lg 0.01 = ?',
    options: [
      { label: 'A', value: '-2' },
      { label: 'B', value: '2' },
      { label: 'C', value: '-1' },
      { label: 'D', value: '0.01' },
    ],
    correctAnswer: '-2',
  },
  {
    id: 'epp3-3',
    question: '计算',
    questionLatex: '3^{\\log_3 7} = ?',
    options: [
      { label: 'A', value: '7' },
      { label: 'B', value: '3' },
      { label: 'C', value: '21' },
      { label: 'D', value: '\\log_3 7', isLatex: true },
    ],
    correctAnswer: '7',
  },
  {
    id: 'epp3-4',
    question: '判断',
    questionLatex: '\\text{以下哪个对数有意义？}',
    options: [
      { label: 'A', value: '\\log_2 (-4)', isLatex: true },
      { label: 'B', value: '\\log_1 5', isLatex: true },
      { label: 'C', value: '\\ln e^3', isLatex: true },
      { label: 'D', value: '\\log_3 0', isLatex: true },
    ],
    correctAnswer: '\\ln e^3',
  },
  {
    id: 'epp3-5',
    question: '计算',
    questionLatex: '\\log_9 3 = ?',
    options: [
      { label: 'A', value: '\\dfrac{1}{2}', isLatex: true },
      { label: 'B', value: '2' },
      { label: 'C', value: '3' },
      { label: 'D', value: '\\dfrac{1}{3}', isLatex: true },
    ],
    correctAnswer: '\\dfrac{1}{2}',
  },
];
