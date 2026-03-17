import type { QuizQuestionData } from '@/types';

// ── 第1节：正负数运算 ──
export const ineqPrereqPractice1: QuizQuestionData[] = [
  {
    id: 'ip1-1',
    type: 'blank',
    question: '',
    questionLatex: '(-3) \\times (-5) = \\text{?}',
    correctAnswer: '15',
    acceptableAnswers: ['+15'],
  },
  {
    id: 'ip1-2',
    type: 'blank',
    question: '',
    questionLatex: '(-8) \\div 2 = \\text{?}',
    correctAnswer: '-4',
    acceptableAnswers: [],
  },
  {
    id: 'ip1-3',
    type: 'blank',
    question: '',
    questionLatex: '(-2) \\times 3 \\times (-1) = \\text{?}',
    correctAnswer: '6',
    acceptableAnswers: ['+6'],
  },
  {
    id: 'ip1-4',
    type: 'blank',
    question: '',
    questionLatex: '(-3)^2 = \\text{?}\\text{（注意有括号）}',
    correctAnswer: '9',
    acceptableAnswers: ['+9'],
  },
];

// ── 第2节：解一元一次方程 ──
export const ineqPrereqPractice2: QuizQuestionData[] = [
  {
    id: 'ip2-1',
    type: 'blank',
    question: '',
    questionLatex: '2x + 3 = 7 \\text{，} x = \\text{?}',
    correctAnswer: '2',
    acceptableAnswers: ['x=2'],
  },
  {
    id: 'ip2-2',
    type: 'blank',
    question: '',
    questionLatex: '3x - 5 = x + 1 \\text{，} x = \\text{?}',
    correctAnswer: '3',
    acceptableAnswers: ['x=3'],
  },
  {
    id: 'ip2-3',
    type: 'blank',
    question: '',
    questionLatex: '-2x + 4 = 0 \\text{，} x = \\text{?}',
    correctAnswer: '2',
    acceptableAnswers: ['x=2'],
  },
];
