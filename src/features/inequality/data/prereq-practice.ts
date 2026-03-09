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
    explanation: '',
    explanationLatex: '(-3) \\times (-5) = +15 \\\\[4pt] \\text{同号相乘，结果为正（负负得正）}',
  },
  {
    id: 'ip1-2',
    type: 'blank',
    question: '',
    questionLatex: '(-8) \\div 2 = \\text{?}',
    correctAnswer: '-4',
    acceptableAnswers: [],
    explanation: '',
    explanationLatex: '(-8) \\div 2 = -4 \\\\[4pt] \\text{异号相除，结果为负}',
  },
  {
    id: 'ip1-3',
    type: 'blank',
    question: '',
    questionLatex: '(-2) \\times 3 \\times (-1) = \\text{?}',
    correctAnswer: '6',
    acceptableAnswers: ['+6'],
    explanation: '',
    explanationLatex: '(-2) \\times 3 \\times (-1) = (-6) \\times (-1) = 6 \\\\[4pt] \\text{2个负号，偶数个，结果为正}',
  },
  {
    id: 'ip1-4',
    type: 'blank',
    question: '',
    questionLatex: '(-3)^2 = \\text{?}\\text{（注意有括号）}',
    correctAnswer: '9',
    acceptableAnswers: ['+9'],
    explanation: '',
    explanationLatex: '(-3)^2 = (-3) \\times (-3) = 9 \\\\[4pt] \\text{有括号：整体平方，同号得正} \\\\[4pt] \\text{没括号：} -3^2 = -(3^2) = -9 \\text{，完全不同！}',
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
    explanation: '',
    explanationLatex: '2x = 7 - 3 = 4 \\Rightarrow x = 2',
  },
  {
    id: 'ip2-2',
    type: 'blank',
    question: '',
    questionLatex: '3x - 5 = x + 1 \\text{，} x = \\text{?}',
    correctAnswer: '3',
    acceptableAnswers: ['x=3'],
    explanation: '',
    explanationLatex: '\\text{移项：含}x\\text{的移到左边，常数移到右边} \\\\[4pt] 3x - x = 1 + 5 \\Rightarrow 2x = 6 \\Rightarrow x = 3',
  },
  {
    id: 'ip2-3',
    type: 'blank',
    question: '',
    questionLatex: '-2x + 4 = 0 \\text{，} x = \\text{?}',
    correctAnswer: '2',
    acceptableAnswers: ['x=2'],
    explanation: '',
    explanationLatex: '-2x = -4 \\Rightarrow x = \\dfrac{-4}{-2} = 2 \\\\[4pt] \\text{注意：这里是方程，除以负数等号不变}',
  },
];

