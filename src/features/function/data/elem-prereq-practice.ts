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
    explanation: '',
    explanationLatex: '\\sqrt[n]{a^m} = a^{\\frac{m}{n}}\\\\[4pt]\\text{分子是幂次 }m=2\\text{，分母是根次 }n=3\\\\[4pt]\\text{所以 }\\sqrt[3]{a^2} = a^{\\frac{2}{3}}',
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
    explanation: '',
    explanationLatex: '27^{\\frac{2}{3}} = (27^{\\frac{1}{3}})^2 = (\\sqrt[3]{27})^2 = 3^2 = 9',
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
    explanation: '',
    explanationLatex: '\\sqrt{a} = a^{\\frac{1}{2}}\\text{，}\\sqrt[3]{a} = a^{\\frac{1}{3}}\\\\[4pt]\\text{同底相乘：}a^{\\frac{1}{2}} \\cdot a^{\\frac{1}{3}} = a^{\\frac{1}{2}+\\frac{1}{3}} = a^{\\frac{3}{6}+\\frac{2}{6}} = a^{\\frac{5}{6}}',
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
    explanation: '',
    explanationLatex: '\\sqrt[4]{16} = 16^{\\frac{1}{4}} = (2^4)^{\\frac{1}{4}} = 2\\\\[4pt]\\text{所以 }\\dfrac{1}{\\sqrt[4]{16}} = \\dfrac{1}{2}',
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
    explanation: '',
    explanationLatex: '\\text{同底相除，指数相减：}a^{\\frac{3}{2}-\\frac{1}{2}} = a^{\\frac{2}{2}} = a^1 = a',
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
    explanation: '',
    explanationLatex: 'a^x = N \\Leftrightarrow \\log_a N = x\\\\[4pt]\\text{底数 }a=2\\text{，真数 }N=32\\text{，指数 }x=5\\\\[4pt]\\text{所以 }\\log_2 32 = 5',
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
    explanation: '',
    explanationLatex: '\\lg 0.01 = \\log_{10} 0.01 = \\log_{10} 10^{-2} = -2',
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
    explanation: '',
    explanationLatex: '\\text{对数恒等式：}a^{\\log_a N} = N\\\\[4pt]\\text{所以 }3^{\\log_3 7} = 7',
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
    explanation: '',
    explanationLatex: '\\text{A: 真数 }-4 < 0\\text{ 无意义}\\\\[4pt]\\text{B: 底数 }= 1\\text{ 不允许}\\\\[4pt]\\text{C: }\\ln e^3 = 3\\text{ 合法（底}e>0\\text{且}e\\neq1\\text{，真数}e^3>0\\text{）}\\\\[4pt]\\text{D: 真数 }= 0\\text{ 无意义}',
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
    explanation: '',
    explanationLatex: '\\text{设 }\\log_9 3 = x\\text{，则 }9^x = 3\\\\[4pt](3^2)^x = 3^1 \\Rightarrow 3^{2x} = 3^1 \\Rightarrow 2x = 1 \\Rightarrow x = \\dfrac{1}{2}',
  },
];
