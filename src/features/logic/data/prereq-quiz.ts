import type { QuizQuestionData } from '@/types';

export const logicPrereqQuizQuestions: QuizQuestionData[] = [
  // 子集关系
  {
    id: 'lpq1',
    question: 'A = {1, 2}，B = {1, 2, 3}，关系是？',
    options: [
      { label: 'A', value: 'A⊂B' },
      { label: 'B', value: 'B⊂A' },
      { label: 'C', value: 'A=B' },
      { label: 'D', value: '无关系' },
    ],
    correctAnswer: 'A⊂B',
    printCols: 2,
  },
  {
    id: 'lpq2',
    question: 'A = (1, 4)，B = (0, 5)，关系是？',
    options: [
      { label: 'A', value: 'A⊂B' },
      { label: 'B', value: 'B⊂A' },
      { label: 'C', value: 'A=B' },
      { label: 'D', value: '无关系' },
    ],
    correctAnswer: 'A⊂B',
    printCols: 2,
  },
  // 一元二次不等式
  {
    id: 'lpq3',
    question: '',
    questionLatex: 'x^2 - 5x + 6 < 0 \\text{ 的解集是？}',
    options: [
      { label: 'A', value: '(2, 3)' },
      { label: 'B', value: 'x<2或x>3' },
      { label: 'C', value: '[2, 3]' },
      { label: 'D', value: 'x≤2或x≥3' },
    ],
    correctAnswer: '(2, 3)',
    printCols: 2,
  },
  {
    id: 'lpq4',
    question: '',
    questionLatex: 'x^2 - 4 \\geq 0 \\text{ 的解集是？}',
    options: [
      { label: 'A', value: '(-2, 2)' },
      { label: 'B', value: '[-2, 2]' },
      { label: 'C', value: 'x≤-2或x≥2' },
      { label: 'D', value: 'x<-2或x>2' },
    ],
    correctAnswer: 'x≤-2或x≥2',
    printCols: 2,
  },
  // 绝对值不等式
  {
    id: 'lpq5',
    question: '',
    questionLatex: '|x + 2| < 3 \\text{ 的解集是？}',
    options: [
      { label: 'A', value: '(-5, 1)' },
      { label: 'B', value: '(-1, 5)' },
      { label: 'C', value: 'x<-5或x>1' },
      { label: 'D', value: '[-5, 1]' },
    ],
    correctAnswer: '(-5, 1)',
    printCols: 2,
  },
  {
    id: 'lpq6',
    question: '',
    questionLatex: '|x - 1| > 2 \\text{ 的解集是？}',
    options: [
      { label: 'A', value: '(-1, 3)' },
      { label: 'B', value: 'x<-1或x>3' },
      { label: 'C', value: '[-1, 3]' },
      { label: 'D', value: 'x≤-1或x≥3' },
    ],
    correctAnswer: 'x<-1或x>3',
    printCols: 2,
  },
  // 推出判断
  {
    id: 'lpq7',
    question: 'p: "x > 5"，q: "x > 2"，正确的是？',
    options: [
      { label: 'A', value: 'p→q ✓' },
      { label: 'B', value: 'q→p ✓' },
      { label: 'C', value: '都成立' },
      { label: 'D', value: '都不成立' },
    ],
    correctAnswer: 'p→q ✓',
    printCols: 2,
  },
  {
    id: 'lpq8',
    question: 'p: "x = 1"，q: "x² = 1"，正确的是？',
    options: [
      { label: 'A', value: 'p→q ✓' },
      { label: 'B', value: 'q→p ✓' },
      { label: 'C', value: '都成立' },
      { label: 'D', value: '都不成立' },
    ],
    correctAnswer: 'p→q ✓',
    printCols: 2,
  },
];
