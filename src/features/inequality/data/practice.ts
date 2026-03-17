import type { QuizQuestionData } from '@/types';

// ══════════════════════════════════════
//  2.1 不等式 - 即时练习
// ══════════════════════════════════════

// ── 第1节：不等式的性质 + 一元一次不等式 ──
export const ineqPractice1: QuizQuestionData[] = [
  {
    id: 'iq1-1',
    type: 'choice',
    question: '',
    questionLatex: '\\text{解不等式 } 3x - 5 > 7',
    options: [
      { label: 'A', value: 'x > 4', isLatex: true },
      { label: 'B', value: 'x > 2', isLatex: true },
      { label: 'C', value: 'x < 4', isLatex: true },
      { label: 'D', value: 'x > -4', isLatex: true },
    ],
    correctAnswer: 'x > 4',
  },
  {
    id: 'iq1-2',
    type: 'choice',
    question: '',
    questionLatex: '\\text{解不等式 } -2x + 6 \\leq 0',
    options: [
      { label: 'A', value: 'x \\leq 3', isLatex: true },
      { label: 'B', value: 'x \\geq 3', isLatex: true },
      { label: 'C', value: 'x \\leq -3', isLatex: true },
      { label: 'D', value: 'x \\geq -3', isLatex: true },
    ],
    correctAnswer: 'x \\geq 3',
  },
  {
    id: 'iq1-3',
    type: 'choice',
    question: '已知 a > b，下列哪个一定成立？',
    questionLatex: '\\text{已知 } a > b \\text{，下列哪个一定成立？}',
    options: [
      { label: 'A', value: '2a > 2b', isLatex: true },
      { label: 'B', value: '-a > -b', isLatex: true },
      { label: 'C', value: 'a^2 > b^2', isLatex: true },
      { label: 'D', value: '\\frac{1}{a} < \\frac{1}{b}', isLatex: true },
    ],
    correctAnswer: '2a > 2b',
  },
];

// ── 第2节：基本不等式（高考风格） ──
export const ineqPractice2: QuizQuestionData[] = [
  {
    id: 'iq2-1',
    type: 'choice',
    question: '',
    questionLatex: '\\text{对任意 } x \\neq 0 \\text{，} x + \\dfrac{4}{x} \\text{ 的最小值为}',
    options: [
      { label: 'A', value: '4' },
      { label: 'B', value: '-4' },
      { label: 'C', value: '2' },
      { label: 'D', value: '\\text{不存在}', isLatex: true },
    ],
    correctAnswer: '\\text{不存在}',
  },
  {
    id: 'iq2-3',
    type: 'choice',
    question: '',
    questionLatex: '\\text{已知 } x > 3 \\text{，则 } x + \\dfrac{4}{x-3} \\text{ 的最小值为}',
    options: [
      { label: 'A', value: '4' },
      { label: 'B', value: '5' },
      { label: 'C', value: '7' },
      { label: 'D', value: '8' },
    ],
    correctAnswer: '7',
  },
  {
    id: 'iq2-4',
    type: 'choice',
    question: '',
    questionLatex: '\\text{已知 } a > 0,\\, b > 0,\\, a + b = 1 \\text{，则 } \\dfrac{4}{a} + \\dfrac{1}{b} \\text{ 的最小值为}',
    options: [
      { label: 'A', value: '5' },
      { label: 'B', value: '7' },
      { label: 'C', value: '9' },
      { label: 'D', value: '12' },
    ],
    correctAnswer: '9',
  },
];
