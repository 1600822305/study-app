import type { QuizQuestionData } from '@/types';

// ── 第2节：平方、开方、绝对值（填空题） ──
export const prereqPractice2: QuizQuestionData[] = [
  { id: 'sq-1', type: 'blank', question: '', questionLatex: '\\sqrt{5^2 + 12^2} = \\underline{\\qquad\\qquad}', correctAnswer: '13', acceptableAnswers: ['13'] },
  { id: 'sq-3', type: 'blank', question: '', questionLatex: '|(-5)^2 - 30| = \\underline{\\qquad\\qquad}', correctAnswer: '5', acceptableAnswers: ['5'] },
  { id: 'sq-4', type: 'blank', question: '', questionLatex: '\\sqrt{(-13)^2} - |-12| = \\underline{\\qquad\\qquad}', correctAnswer: '1', acceptableAnswers: ['1'] },
  { id: 'sq-5', type: 'blank', question: '', questionLatex: '(-2)^4 + (-3)^2 - \\sqrt{16} = \\underline{\\qquad\\qquad}', correctAnswer: '21', acceptableAnswers: ['21'] },
];

// ── 第4节：分数运算（填空题） ──
export const prereqPractice4: QuizQuestionData[] = [
  { id: 'pp4-2', type: 'blank', question: '', questionLatex: '\\dfrac{4^2 - 3^2}{4^2 + 3^2} = \\underline{\\qquad\\qquad}', correctAnswer: '7/25', acceptableAnswers: ['7/25', '\\dfrac{7}{25}'] },
  { id: 'pp4-4', type: 'blank', question: '', questionLatex: '\\dfrac{(-2)^2}{(-3)^2} = \\underline{\\qquad\\qquad}', correctAnswer: '4/9', acceptableAnswers: ['4/9', '\\dfrac{4}{9}'] },
  { id: 'pp4-5', type: 'blank', question: '', questionLatex: '\\dfrac{1}{2} - \\dfrac{1}{3} \\times \\dfrac{3}{4} = \\underline{\\qquad\\qquad}', correctAnswer: '1/4', acceptableAnswers: ['1/4', '\\dfrac{1}{4}', '0.25'] },
  { id: 'pp4-6', type: 'blank', question: '', questionLatex: '\\dfrac{2}{3} + \\dfrac{1}{4} \\div \\dfrac{1}{2} = \\underline{\\qquad\\qquad}', correctAnswer: '7/6', acceptableAnswers: ['7/6', '\\dfrac{7}{6}'] },
];

// ── 第5节：展开式（混合前置知识） ──
export const prereqPractice5: QuizQuestionData[] = [
  { id: 'pp5-1', type: 'blank', question: '', questionLatex: '3(2x - 5) = \\underline{\\qquad\\qquad}', correctAnswer: '6x-15', acceptableAnswers: ['6x-15', '6x - 15'] },
  { id: 'pp5-2', type: 'blank', question: '', questionLatex: '(x+4)(x-3) = \\underline{\\qquad\\qquad}', correctAnswer: 'x^2+x-12', acceptableAnswers: ['x^2+x-12', 'x²+x-12'] },
  { id: 'pp5-3', type: 'blank', question: '', questionLatex: '(2+i)(3-i) = \\underline{\\qquad\\qquad}', correctAnswer: '7+i', acceptableAnswers: ['7+i'] },
  { id: 'pp5-4', type: 'blank', question: '', questionLatex: '(3+2i)^2 = \\underline{\\qquad\\qquad}', correctAnswer: '5+12i', acceptableAnswers: ['5+12i'] },
  { id: 'pp5-5', type: 'blank', question: '', questionLatex: '(\\sqrt{5}+2)(\\sqrt{5}-2) = \\underline{\\qquad\\qquad}', correctAnswer: '1', acceptableAnswers: ['1'] },
  { id: 'pp5-6', type: 'blank', question: '', questionLatex: '(1+i)(1-i) + (2+i)(2-i) = \\underline{\\qquad\\qquad}', correctAnswer: '7', acceptableAnswers: ['7'] },
];

// ── 第6节：负数与 i 的幂次（混合前置知识） ──
export const prereqPractice6: QuizQuestionData[] = [
  { id: 'pp6-1', type: 'blank', question: '', questionLatex: '(-4)^2 + (-3)^2 = \\underline{\\qquad\\qquad}', correctAnswer: '25', acceptableAnswers: ['25'] },
  { id: 'pp6-2', type: 'blank', question: '', questionLatex: '\\dfrac{i^2 + 1}{i^2 - 1} = \\underline{\\qquad\\qquad}', correctAnswer: '0', acceptableAnswers: ['0'] },
  { id: 'pp6-3', type: 'blank', question: '', questionLatex: '(1+i)^2 \\times i = \\underline{\\qquad\\qquad}', correctAnswer: '-2', acceptableAnswers: ['-2'] },
  { id: 'pp6-4', type: 'blank', question: '', questionLatex: 'i^{47} = \\underline{\\qquad\\qquad}', correctAnswer: '-i', acceptableAnswers: ['-i'] },
  { id: 'pp6-5', type: 'blank', question: '', questionLatex: '\\dfrac{(-2)^3}{i^2} = \\underline{\\qquad\\qquad}', correctAnswer: '8', acceptableAnswers: ['8'] },
  { id: 'pp6-6', type: 'blank', question: '', questionLatex: 'i + i^2 + i^3 + i^4 = \\underline{\\qquad\\qquad}', correctAnswer: '0', acceptableAnswers: ['0'] },
];
