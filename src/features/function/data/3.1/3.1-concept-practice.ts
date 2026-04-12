import type { QuizQuestionData } from '@/types';

// ── 精华练习：函数的概念与性质 10 道 ──

// ── 定义域即时填空（2题）──
export const domainFill: QuizQuestionData[] = [
  {
    id: 'fc-df1',
    type: 'blank',
    question: '函数 f(x) = √(2x-1) + 1/(x-3) 的定义域为 ____',
    questionLatex: 'f(x) = \\sqrt{2x-1} + \\dfrac{1}{x-3}\\text{ 的定义域为 }\\underline{\\phantom{00000000}}',
    correctAnswer: '[\\frac{1}{2},3)\\cup(3,+\\infty)',
    acceptableAnswers: ['[1/2,3)∪(3,+∞)', '[1/2, 3) ∪ (3, +∞)'],
  },
  {
    id: 'fc-df2',
    type: 'blank',
    question: '已知 f(x) 的定义域为 [1,4]，则 f(3x+1) 的定义域为 ____',
    questionLatex: '\\text{已知 }f(x)\\text{ 的定义域为 }[1,\\,4]\\text{，则 }f(3x+1)\\text{ 的定义域为 }\\underline{\\phantom{00000000}}',
    correctAnswer: '[0,1]',
    acceptableAnswers: ['[0,1]', '[0, 1]'],
  },
];

// ── 求解析式即时填空（4题）──
export const expressionFill: QuizQuestionData[] = [
  {
    id: 'fc-ef1',
    type: 'blank',
    question: '已知 f(x) 是二次函数，f(0)=1，且 f(x+1)-f(x)=2x，则 f(x) = ____',
    questionLatex: '\\text{已知 }f(x)\\text{ 是二次函数，}f(0)=1\\text{，且 }f(x+1)-f(x)=2x\\text{，则 }f(x) = \\underline{\\phantom{00000000}}',
    correctAnswer: 'x^2+1',
    acceptableAnswers: ['x²+1', 'x^2+1'],
  },
  {
    id: 'fc-ef2',
    type: 'blank',
    question: '已知 f(√x - 1) = x + 2√x，则 f(x) = ____',
    questionLatex: '\\text{已知 }f(\\sqrt{x}-1) = x + 2\\sqrt{x}\\text{，则 }f(x) = \\underline{\\phantom{00000000}}',
    correctAnswer: '(x+1)^2+2(x+1)',
    acceptableAnswers: ['x²+4x+3', 'x^2+4x+3', '(x+1)^2+2(x+1)', '(x+1)²+2(x+1)'],
  },
  {
    id: 'fc-ef3',
    type: 'blank',
    question: '已知 f(2x+1) = 3x-2，则 f(x) = ____',
    questionLatex: '\\text{已知 }f(2x+1) = 3x - 2\\text{，则 }f(x) = \\underline{\\phantom{00000000}}',
    correctAnswer: '\\frac{3}{2}x-\\frac{7}{2}',
    acceptableAnswers: ['3/2·x-7/2', '(3x-7)/2', '3x/2-7/2'],
  },
  {
    id: 'fc-ef4',
    type: 'blank',
    question: '已知 2f(x)-f(-x)=3x+1，则 f(x) = ____',
    questionLatex: '\\text{已知 }2f(x) - f(-x) = 3x + 1\\text{，则 }f(x) = \\underline{\\phantom{00000000}}',
    correctAnswer: 'x+1',
    acceptableAnswers: ['x+1'],
  },
  {
    id: 'fc-ef5',
    type: 'blank',
    question: '已知 f(x+1) = x² + 2x，则 f(x) = ____',
    questionLatex: '\\text{已知 }f(x+1) = x^2 + 2x\\text{，则 }f(x) = \\underline{\\phantom{00000000}}',
    correctAnswer: 'x^2-1',
    acceptableAnswers: ['x²-1', 'x^2-1', '(x+1)(x-1)'],
  },
  {
    id: 'fc-ef6',
    type: 'blank',
    question: '已知 f(x) 是一次函数，且 f(f(x)) = 9x + 4，则 f(x) = ____',
    questionLatex: '\\text{已知 }f(x)\\text{ 是一次函数，且 }f(f(x)) = 9x + 4\\text{，则 }f(x) = \\underline{\\phantom{00000000}}',
    correctAnswer: '3x+1',
    acceptableAnswers: ['3x+1', '3x + 1', '-3x-2'],
  },
];

// ── 求值域即时填空（4题，高考难度，多方法可解）──
export const rangeFill: QuizQuestionData[] = [
  {
    id: 'fc-rf1',
    type: 'blank',
    question: '求函数 y = x + √(3-2x) 的值域',
    questionLatex: '\\text{求 }y = x + \\sqrt{3-2x}\\text{ 的值域 }\\underline{\\phantom{00000000}}',
    correctAnswer: '(-\\infty, \\frac{7}{2}]',
    acceptableAnswers: ['(-∞, 7/2]', '(-inf, 7/2]', '(-∞,7/2]'],
  },
  {
    id: 'fc-rf2',
    type: 'blank',
    question: '求函数 y = (x²+2x+3)/(x²+1) 的值域',
    questionLatex: '\\text{求 }y = \\dfrac{x^2+2x+3}{x^2+1}\\text{ 的值域 }\\underline{\\phantom{00000000}}',
    correctAnswer: '[1, 1+\\sqrt{2}]',
    acceptableAnswers: ['[1, 1+√2]', '[1,1+√2]'],
  },
  {
    id: 'fc-rf3',
    type: 'blank',
    question: '求函数 y = 2x - √(x-1) 的值域',
    questionLatex: '\\text{求 }y = 2x - \\sqrt{x-1}\\text{ 的值域 }\\underline{\\phantom{00000000}}',
    correctAnswer: '[\\frac{15}{8}, +\\infty)',
    acceptableAnswers: ['[15/8, +∞)', '[15/8,+∞)', '[15/8, +inf)'],
  },
  {
    id: 'fc-rf4',
    type: 'blank',
    question: '求函数 y = (2x-1)/(x+1)（x ∈ [1, 3]）的值域',
    questionLatex: '\\text{求 }y = \\dfrac{2x-1}{x+1}\\text{（}x \\in [1,\\,3]\\text{）的值域 }\\underline{\\phantom{00000000}}',
    correctAnswer: '[\\frac{1}{2}, \\frac{5}{4}]',
    acceptableAnswers: ['[1/2, 5/4]', '[1/2,5/4]'],
  },
];

// ── 复合函数单调性变式（1题）──
export const compositeMonoFill: QuizQuestionData[] = [
  {
    id: 'fc-cm1',
    type: 'choice',
    multiSelect: true,
    question: '已知 f(x) = -2x² + 4x + 3 的定义域为 (-1, 4)，则 f(|x|) 的单调递增区间是（多选）',
    questionLatex: '\\text{已知 }f(x) = -2x^2 + 4x + 3\\text{ 的定义域为 }(-1,\\,4)\\text{，则 }f(|x|)\\text{ 的单调递增区间是（多选）}',
    options: [
      { label: 'A', value: '(-4, -1)', isLatex: true },
      { label: 'B', value: '(-1, 0)', isLatex: true },
      { label: 'C', value: '(0, 1)', isLatex: true },
      { label: 'D', value: '(1, 4)', isLatex: true },
    ],
    correctAnswer: 'A,C',
  },
];

export const conceptPractice: QuizQuestionData[] = [];
