import type { QuizQuestionData } from '@/types';

// ══════════════════════════════════════
//  2.2 二次函数前置知识 - 自测题
// ══════════════════════════════════════

export const quadraticPrereqQuizQuestions: QuizQuestionData[] = [
  {
    id: 'qpq1',
    question: '',
    questionLatex: '(2x - 3)^2 = \\text{?}',
    options: [
      { label: 'A', value: '4x^2 - 12x + 9', isLatex: true },
      { label: 'B', value: '4x^2 - 6x + 9', isLatex: true },
      { label: 'C', value: '2x^2 - 12x + 9', isLatex: true },
      { label: 'D', value: '4x^2 - 12x + 3', isLatex: true },
    ],
    correctAnswer: '4x^2 - 12x + 9',
  },
  {
    id: 'qpq2',
    question: '',
    questionLatex: '\\text{因式分解：} 3x^2 - 12 = \\text{?}',
    options: [
      { label: 'A', value: '3(x+2)(x-2)', isLatex: true },
      { label: 'B', value: '(3x+4)(x-3)', isLatex: true },
      { label: 'C', value: '3(x-2)^2', isLatex: true },
      { label: 'D', value: '(x+2)(3x-6)', isLatex: true },
    ],
    correctAnswer: '3(x+2)(x-2)',
  },
  {
    id: 'qpq3',
    question: '',
    questionLatex: '\\text{因式分解：} x^2 - 3x - 10 = \\text{?}',
    options: [
      { label: 'A', value: '(x-5)(x+2)', isLatex: true },
      { label: 'B', value: '(x+5)(x-2)', isLatex: true },
      { label: 'C', value: '(x-10)(x+1)', isLatex: true },
      { label: 'D', value: '(x+10)(x-1)', isLatex: true },
    ],
    correctAnswer: '(x-5)(x+2)',
  },
  {
    id: 'qpq4',
    question: '',
    questionLatex: '\\text{解方程：} x^2 + 2x - 8 = 0',
    options: [
      { label: 'A', value: 'x = 2 \\text{ 或 } x = -4', isLatex: true },
      { label: 'B', value: 'x = -2 \\text{ 或 } x = 4', isLatex: true },
      { label: 'C', value: 'x = 1 \\text{ 或 } x = -8', isLatex: true },
      { label: 'D', value: 'x = 8 \\text{ 或 } x = -1', isLatex: true },
    ],
    correctAnswer: 'x = 2 \\text{ 或 } x = -4',
  },
  {
    id: 'qpq5',
    question: '',
    questionLatex: '\\text{用求根公式解：} x^2 + 6x + 5 = 0 \\text{，两根分别是}',
    options: [
      { label: 'A', value: 'x = -1 \\text{ 和 } x = -5', isLatex: true },
      { label: 'B', value: 'x = 1 \\text{ 和 } x = 5', isLatex: true },
      { label: 'C', value: 'x = -1 \\text{ 和 } x = 5', isLatex: true },
      { label: 'D', value: 'x = 1 \\text{ 和 } x = -5', isLatex: true },
    ],
    correctAnswer: 'x = -1 \\text{ 和 } x = -5',
  },
];
