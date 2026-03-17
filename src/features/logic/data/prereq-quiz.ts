import type { QuizQuestionData } from '@/types';

export const logicPrereqQuizQuestions: QuizQuestionData[] = [
  {
    id: 'lpq1',
    question: 'A = (1, 4)，B = (0, 5)，A 和 B 谁包含谁？',
    options: [
      { label: 'A', value: 'A \\subset B', isLatex: true },
      { label: 'B', value: 'B \\subset A', isLatex: true },
      { label: 'C', value: 'A = B', isLatex: true },
      { label: 'D', value: '互不包含' },
    ],
    correctAnswer: 'A \\subset B',
  },
  {
    id: 'lpq2',
    question: '',
    questionLatex: '\\text{解不等式 } x^2 - 5x + 4 \\leq 0',
    options: [
      { label: 'A', value: '[1, 4]', isLatex: false },
      { label: 'B', value: '(1, 4)', isLatex: false },
      { label: 'C', value: '(-\\infty, 1] \\cup [4, +\\infty)', isLatex: true },
      { label: 'D', value: '(-4, -1)', isLatex: false },
    ],
    correctAnswer: '[1, 4]',
  },
  {
    id: 'lpq3',
    question: '',
    questionLatex: '\\text{解不等式 } |x + 2| < 3',
    options: [
      { label: 'A', value: '(-5, 1)', isLatex: false },
      { label: 'B', value: '[-5, 1]', isLatex: false },
      { label: 'C', value: '(-1, 5)', isLatex: false },
      { label: 'D', value: '(-3, 3)', isLatex: false },
    ],
    correctAnswer: '(-5, 1)',
  },
  {
    id: 'lpq4',
    question: 'p: "x = 1"，q: "x² = 1"，下列正确的是',
    options: [
      { label: 'A', value: 'p→q 且 q→p' },
      { label: 'B', value: 'p→q 但 q↛p' },
      { label: 'C', value: 'q→p 但 p↛q' },
      { label: 'D', value: '都推不出' },
    ],
    correctAnswer: 'p→q 但 q↛p',
  },
  {
    id: 'lpq5',
    question: 'p: "x > 5"，q: "x > 2"，则',
    options: [
      { label: 'A', value: 'p→q 且 q→p' },
      { label: 'B', value: 'p→q 但 q↛p' },
      { label: 'C', value: 'q→p 但 p↛q' },
      { label: 'D', value: '都推不出' },
    ],
    correctAnswer: 'p→q 但 q↛p',
  },
  {
    id: 'lpq6',
    question: 'A = [2, 6]，B = (1, 5)，A⊂B 吗？',
    options: [
      { label: 'A', value: '是' },
      { label: 'B', value: '不是' },
      { label: 'C', value: '无法判断' },
      { label: 'D', value: 'A = B' },
    ],
    correctAnswer: '不是',
  },
  {
    id: 'lpq7',
    question: '',
    questionLatex: '\\text{解不等式 } x^2 + 2x - 3 > 0',
    options: [
      { label: 'A', value: '(-3, 1)', isLatex: false },
      { label: 'B', value: '\\{x \\mid x < -3 \\text{ 或 } x > 1\\}', isLatex: true },
      { label: 'C', value: '[-3, 1]', isLatex: false },
      { label: 'D', value: '\\{x \\mid x \\leq -3 \\text{ 或 } x \\geq 1\\}', isLatex: true },
    ],
    correctAnswer: '\\{x \\mid x < -3 \\text{ 或 } x > 1\\}',
  },
  {
    id: 'lpq8',
    question: '',
    questionLatex: '|x - 3| \\geq 2 \\text{ 的解集为}',
    options: [
      { label: 'A', value: '[1, 5]', isLatex: false },
      { label: 'B', value: '(1, 5)', isLatex: false },
      { label: 'C', value: '\\{x \\mid x \\leq 1 \\text{ 或 } x \\geq 5\\}', isLatex: true },
      { label: 'D', value: '\\{x \\mid x < 1 \\text{ 或 } x > 5\\}', isLatex: true },
    ],
    correctAnswer: '\\{x \\mid x \\leq 1 \\text{ 或 } x \\geq 5\\}',
  },
  {
    id: 'lpq9',
    question: '',
    questionLatex: '|x - 9| < |x - 1| \\text{ 的解集为}',
    options: [
      { label: 'A', value: '(5, +\\infty)', isLatex: true },
      { label: 'B', value: '(-\\infty, 5)', isLatex: true },
      { label: 'C', value: '(1, 9)', isLatex: false },
      { label: 'D', value: '(-\\infty, 1) \\cup (9, +\\infty)', isLatex: true },
    ],
    correctAnswer: '(5, +\\infty)',
  },
];
