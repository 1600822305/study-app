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
    explanation: '',
    explanationLatex: '(2x-3)^2 = (2x)^2 - 2(2x)(3) + 3^2 = 4x^2 - 12x + 9',
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
    explanation: '',
    explanationLatex: '3x^2 - 12 = 3(x^2 - 4) = 3(x+2)(x-2) \\\\[4pt] \\text{先提公因式 3，再用平方差公式}',
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
    explanation: '',
    explanationLatex: '\\text{找两个数：乘积} = -10\\text{，和} = -3 \\\\[4pt] (-5) \\times 2 = -10,\\quad (-5) + 2 = -3 \\;\\text{✓} \\\\[4pt] x^2 - 3x - 10 = (x-5)(x+2)',
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
    explanation: '',
    explanationLatex: 'x^2 + 2x - 8 = (x+4)(x-2) = 0 \\\\[4pt] x = -4 \\text{ 或 } x = 2',
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
    explanation: '',
    explanationLatex: '\\Delta = 36 - 20 = 16 \\\\[4pt] x = \\dfrac{-6 \\pm 4}{2} \\Rightarrow x_1 = \\dfrac{-2}{2} = -1,\\; x_2 = \\dfrac{-10}{2} = -5',
  },
];
