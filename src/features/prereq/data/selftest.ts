import type { QuizQuestionData } from '@/types';

export const prereqSelfTest: QuizQuestionData[] = [
  {
    id: 'prereq-1',
    question: '',
    questionLatex: '(-3)^2 = ?',
    options: [
      { label: 'A', value: '9', isLatex: false },
      { label: 'B', value: '-9', isLatex: false },
      { label: 'C', value: '6', isLatex: false },
      { label: 'D', value: '-6', isLatex: false },
    ],
    correctAnswer: '9',
  },
  {
    id: 'prereq-2',
    question: '',
    questionLatex: '\\sqrt{9+16} = ?',
    options: [
      { label: 'A', value: '5', isLatex: false },
      { label: 'B', value: '7', isLatex: false },
      { label: 'C', value: '25', isLatex: false },
      { label: 'D', value: '\\sqrt{7}', isLatex: true },
    ],
    correctAnswer: '5',
  },
  {
    id: 'prereq-3',
    question: '',
    questionLatex: '(2+3)(4-1) = ?',
    options: [
      { label: 'A', value: '15', isLatex: false },
      { label: 'B', value: '12', isLatex: false },
      { label: 'C', value: '9', isLatex: false },
      { label: 'D', value: '20', isLatex: false },
    ],
    correctAnswer: '15',
  },
  {
    id: 'prereq-4',
    question: '',
    questionLatex: '(a+b)(a-b) = ?',
    options: [
      { label: 'A', value: 'a^2 - b^2', isLatex: true },
      { label: 'B', value: 'a^2 + b^2', isLatex: true },
      { label: 'C', value: '2a - 2b', isLatex: true },
      { label: 'D', value: 'a^2 - 2ab + b^2', isLatex: true },
    ],
    correctAnswer: 'a^2 - b^2',
  },
  {
    id: 'prereq-5',
    question: '',
    questionLatex: '(1+x)^2 = ?',
    options: [
      { label: 'A', value: '1 + 2x + x^2', isLatex: true },
      { label: 'B', value: '1 + x^2', isLatex: true },
      { label: 'C', value: '1 + 2x', isLatex: true },
      { label: 'D', value: '2 + 2x + x^2', isLatex: true },
    ],
    correctAnswer: '1 + 2x + x^2',
  },
  {
    id: 'prereq-6',
    question: '',
    questionLatex: '5 - (-3) = ?',
    options: [
      { label: 'A', value: '8', isLatex: false },
      { label: 'B', value: '2', isLatex: false },
      { label: 'C', value: '-8', isLatex: false },
      { label: 'D', value: '15', isLatex: false },
    ],
    correctAnswer: '8',
  },
  {
    id: 'prereq-7',
    question: '',
    questionLatex: '(-2) \\times (-5) = ?',
    options: [
      { label: 'A', value: '10', isLatex: false },
      { label: 'B', value: '-10', isLatex: false },
      { label: 'C', value: '7', isLatex: false },
      { label: 'D', value: '-7', isLatex: false },
    ],
    correctAnswer: '10',
  },
  {
    id: 'prereq-8',
    question: '',
    questionLatex: '\\frac{3}{4} + \\frac{1}{6} = ?',
    options: [
      { label: 'A', value: '\\frac{11}{12}', isLatex: true },
      { label: 'B', value: '\\frac{4}{10}', isLatex: true },
      { label: 'C', value: '\\frac{7}{12}', isLatex: true },
      { label: 'D', value: '\\frac{1}{2}', isLatex: true },
    ],
    correctAnswer: '\\frac{11}{12}',
  },
  {
    id: 'prereq-9',
    question: '67 ÷ 4 的余数是？',
    options: [
      { label: 'A', value: '3', isLatex: false },
      { label: 'B', value: '1', isLatex: false },
      { label: 'C', value: '2', isLatex: false },
      { label: 'D', value: '0', isLatex: false },
    ],
    correctAnswer: '3',
  },
  {
    id: 'prereq-10',
    question: '',
    questionLatex: '(-1) \\times (-1) = ?',
    options: [
      { label: 'A', value: '1', isLatex: false },
      { label: 'B', value: '-1', isLatex: false },
      { label: 'C', value: '0', isLatex: false },
      { label: 'D', value: '2', isLatex: false },
    ],
    correctAnswer: '1',
  },
];
