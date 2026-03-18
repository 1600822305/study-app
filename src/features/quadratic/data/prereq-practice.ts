import type { QuizQuestionData } from '@/types';

// ══════════════════════════════════════
//  2.2 二次函数前置知识 - 即时练习
// ══════════════════════════════════════

// ── 第1节：乘法公式 + 因式分解 ──
export const quadPrereqPractice1: QuizQuestionData[] = [
  {
    id: 'qpp1-1',
    type: 'choice',
    question: '',
    questionLatex: '(x + 3)^2 = \\text{?}',
    options: [
      { label: 'A', value: 'x^2 + 6x + 9', isLatex: true },
      { label: 'B', value: 'x^2 + 3x + 9', isLatex: true },
      { label: 'C', value: 'x^2 + 9', isLatex: true },
      { label: 'D', value: 'x^2 + 6x + 3', isLatex: true },
    ],
    correctAnswer: 'x^2 + 6x + 9',
  },
  {
    id: 'qpp1-2',
    type: 'choice',
    question: '',
    questionLatex: '\\text{因式分解：} x^2 - 9 = \\text{?}',
    options: [
      { label: 'A', value: '(x+3)(x-3)', isLatex: true },
      { label: 'B', value: '(x-3)^2', isLatex: true },
      { label: 'C', value: '(x+9)(x-1)', isLatex: true },
      { label: 'D', value: '(x-9)(x+1)', isLatex: true },
    ],
    correctAnswer: '(x+3)(x-3)',
  },
  {
    id: 'qpp1-3',
    type: 'choice',
    question: '',
    questionLatex: '\\text{因式分解：} x^2 + 5x + 6 = \\text{?}',
    options: [
      { label: 'A', value: '(x+2)(x+3)', isLatex: true },
      { label: 'B', value: '(x+1)(x+6)', isLatex: true },
      { label: 'C', value: '(x-2)(x-3)', isLatex: true },
      { label: 'D', value: '(x+5)(x+1)', isLatex: true },
    ],
    correctAnswer: '(x+2)(x+3)',
  },
];

// ── 第2节：解一元二次方程 ──
export const quadPrereqPractice2: QuizQuestionData[] = [
  {
    id: 'qpp2-1',
    type: 'choice',
    question: '',
    questionLatex: '\\text{解方程：} x^2 - 5x + 6 = 0',
    options: [
      { label: 'A', value: 'x = 2 \\text{ 或 } x = 3', isLatex: true },
      { label: 'B', value: 'x = -2 \\text{ 或 } x = -3', isLatex: true },
      { label: 'C', value: 'x = 1 \\text{ 或 } x = 6', isLatex: true },
      { label: 'D', value: 'x = -1 \\text{ 或 } x = -6', isLatex: true },
    ],
    correctAnswer: 'x = 2 \\text{ 或 } x = 3',
  },
  {
    id: 'qpp2-2',
    type: 'choice',
    question: '',
    questionLatex: '\\text{解方程：} 2x^2 + 3x - 2 = 0',
    options: [
      { label: 'A', value: 'x = \\dfrac{1}{2} \\text{ 或 } x = -2', isLatex: true },
      { label: 'B', value: 'x = -\\dfrac{1}{2} \\text{ 或 } x = 2', isLatex: true },
      { label: 'C', value: 'x = 1 \\text{ 或 } x = -2', isLatex: true },
      { label: 'D', value: 'x = 2 \\text{ 或 } x = -\\dfrac{3}{2}', isLatex: true },
    ],
    correctAnswer: 'x = \\dfrac{1}{2} \\text{ 或 } x = -2',
  },
  {
    id: 'qpp2-3',
    type: 'choice',
    question: '',
    questionLatex: '\\text{用求根公式解：} x^2 - 4x + 1 = 0',
    options: [
      { label: 'A', value: 'x = 2 \\pm \\sqrt{3}', isLatex: true },
      { label: 'B', value: 'x = 4 \\pm \\sqrt{3}', isLatex: true },
      { label: 'C', value: 'x = 2 \\pm \\sqrt{5}', isLatex: true },
      { label: 'D', value: 'x = 1 \\pm \\sqrt{3}', isLatex: true },
    ],
    correctAnswer: 'x = 2 \\pm \\sqrt{3}',
  },
];
