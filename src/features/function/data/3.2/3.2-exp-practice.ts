import type { QuizQuestionData } from '@/types';

// ── 分组一：指数函数定义 ──
export const expDefinitionPractice: QuizQuestionData[] = [
  {
    id: 'expdef-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{若 }y = (a^2 - 1)^x\\text{ 是指数函数，求 }a\\text{ 的取值范围}',
    correctAnswer: 'a \\in (-\\infty, -\\sqrt{2}) \\cup (\\sqrt{2}, +\\infty) \\text{ 且 } a \\neq \\sqrt{2}',
    acceptableAnswers: [
      'a^2-1>0 且 a^2-1≠1',
      'a>√2 或 a<-√2，且 a≠±√2',
    ],
  },
  {
    id: 'expdef-2',
    type: 'choice',
    question: '',
    questionLatex: '\\text{设全集 }U = \\mathbb{N}^*\\text{，若 }y = (a - 3)^x\\text{ 是指数函数，}A = \\{a \\mid a \\in U\\}\\text{，}B = \\{2, 4, 6\\}\\text{，则 }\\complement_U A \\cap B\\text{ 等于}',
    options: [
      { label: 'A', value: '\\{2, 4\\}', isLatex: true },
      { label: 'B', value: '\\{2, 4, 6\\}', isLatex: true },
      { label: 'C', value: '\\{4, 6\\}', isLatex: true },
      { label: 'D', value: '\\{2\\}', isLatex: true },
    ],
    correctAnswer: '\\{2, 4\\}',
  },
];

// ── 分组二：性质与图像 ──
export const expPropertyPractice: QuizQuestionData[] = [
  {
    id: 'expprop-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{函数 }y = 3^{x+2} - 1\\text{ 恒过定点 }\\underline{\\qquad}',
    correctAnswer: '(-2, 0)',
    acceptableAnswers: ['(-2,0)', '(-2, 0)'],
  },
  {
    id: 'expprop-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }y = \\left(\\tfrac{1}{3}\\right)^x\\text{ 在 }[-1,\\, 2]\\text{ 上的值域}',
    correctAnswer: '\\left[\\dfrac{1}{9},\\, 3\\right]',
    acceptableAnswers: ['[1/9, 3]', '[\\frac{1}{9}, 3]'],
  },
];

// ── 分组三：比较大小（填 > 或 <） ──
export const expComparePractice: QuizQuestionData[] = [
  {
    id: 'expcmp-1',
    type: 'blank',
    question: '',
    questionLatex: '3^{0.4} \\;\\underline{\\quad}\\; 3^{0.8}',
    correctAnswer: '<',
    acceptableAnswers: ['<', '＜'],
  },
  {
    id: 'expcmp-2',
    type: 'blank',
    question: '',
    questionLatex: '0.7^{0.3} \\;\\underline{\\quad}\\; 0.7^{0.5}',
    correctAnswer: '>',
    acceptableAnswers: ['>', '＞'],
  },
  {
    id: 'expcmp-3',
    type: 'blank',
    question: '',
    questionLatex: '3^{-0.5} \\;\\underline{\\quad}\\; 5^{-0.5}',
    correctAnswer: '>',
    acceptableAnswers: ['>', '＞'],
  },
  {
    id: 'expcmp-4',
    type: 'blank',
    question: '',
    questionLatex: '9^{0.3} \\;\\underline{\\quad}\\; 3^{0.7}',
    correctAnswer: '<',
    acceptableAnswers: ['<', '＜'],
  },
  {
    id: 'expcmp-5',
    type: 'blank',
    question: '',
    questionLatex: '2^{0.5} \\;\\underline{\\quad}\\; 0.5^2',
    correctAnswer: '>',
    acceptableAnswers: ['>', '＞'],
  },
  {
    id: 'expcmp-6',
    type: 'blank',
    question: '',
    questionLatex: '4^{0.5} \\;\\underline{\\quad}\\; 8^{0.3}',
    correctAnswer: '>',
    acceptableAnswers: ['>', '＞'],
  },
];

// ── 分组四：指数不等式（填解集） ──
export const expIneqPractice: QuizQuestionData[] = [
  {
    id: 'expineq-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{解不等式 }3^{x+1} > 9',
    correctAnswer: '(1, +\\infty)',
    acceptableAnswers: ['(1,+\\infty)', 'x>1', '(1, +∞)'],
  },
  {
    id: 'expineq-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{解不等式 }\\left(\\tfrac{1}{2}\\right)^{2x-1} \\geq 4',
    correctAnswer: '(-\\infty, -\\tfrac{1}{2}]',
    acceptableAnswers: ['(-\\infty,-\\frac{1}{2}]', 'x\\leq -1/2', '(-∞, -1/2]'],
  },
  {
    id: 'expineq-3',
    type: 'blank',
    question: '',
    questionLatex: '\\text{解不等式 }4^x - 5 \\times 2^x + 4 < 0',
    correctAnswer: '(0, 2)',
    acceptableAnswers: ['0<x<2', '(0,2)'],
  },
  {
    id: 'expineq-4',
    type: 'blank',
    question: '',
    questionLatex: '\\text{解不等式 }9^x - 2 \\times 3^x - 3 > 0',
    correctAnswer: '(1, +\\infty)',
    acceptableAnswers: ['(1,+\\infty)', 'x>1', '(1, +∞)'],
  },
];

// ── 分组五：复合函数单调性（填单调区间） ──
export const expCompositePractice: QuizQuestionData[] = [
  {
    id: 'expcomp-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }y = 3^{x^2 + 2x}\\text{ 的单调区间}',
    correctAnswer: '\\text{减区间 }(-\\infty, -1]\\text{，增区间 }[-1, +\\infty)',
    acceptableAnswers: ['减区间(-∞,-1]，增区间[-1,+∞)'],
  },
  {
    id: 'expcomp-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }y = 2^{-x^2 + 6x}\\text{ 的单调区间}',
    correctAnswer: '\\text{增区间 }(-\\infty, 3]\\text{，减区间 }[3, +\\infty)',
    acceptableAnswers: ['增区间(-∞,3]，减区间[3,+∞)'],
  },
  {
    id: 'expcomp-3',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }y = \\left(\\tfrac{1}{3}\\right)^{x^2 - 4x}\\text{ 的单调区间}',
    correctAnswer: '\\text{增区间 }(-\\infty, 2]\\text{，减区间 }[2, +\\infty)',
    acceptableAnswers: ['增区间(-∞,2]，减区间[2,+∞)'],
  },
  {
    id: 'expcomp-4',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }y = \\left(\\tfrac{1}{2}\\right)^{-x^2 + 2x}\\text{ 的单调区间}',
    correctAnswer: '\\text{减区间 }(-\\infty, 1]\\text{，增区间 }[1, +\\infty)',
    acceptableAnswers: ['减区间(-∞,1]，增区间[1,+∞)'],
  },
];

// ── 分组七：指数函数求导（填导数） ──
export const expDerivPractice: QuizQuestionData[] = [
  {
    id: 'expderiv-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }y = 5^x\\text{ 的导数}',
    correctAnswer: '5^x \\ln 5',
    acceptableAnswers: ['5^x\\ln 5', '5^xln5'],
  },
  {
    id: 'expderiv-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }y = 3^{2x - 1}\\text{ 的导数}',
    correctAnswer: '2 \\cdot 3^{2x-1} \\ln 3',
    acceptableAnswers: ['2\\cdot 3^{2x-1}\\ln 3', '2*3^(2x-1)*ln3'],
  },
];

// ── 分组六：复合函数值域（填值域） ──
export const expRangePractice: QuizQuestionData[] = [
  {
    id: 'exprng-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }y = 3^{x^2 - 2x + 2}\\text{ 的值域}',
    correctAnswer: '[3, +\\infty)',
    acceptableAnswers: ['[3,+∞)', 'y\\geq 3'],
  },
  {
    id: 'exprng-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }y = \\left(\\tfrac{1}{2}\\right)^{-x^2 + 2x}\\text{ 的值域}',
    correctAnswer: '\\left[\\tfrac{1}{2}, +\\infty\\right)',
    acceptableAnswers: ['[1/2,+∞)', 'y\\geq 1/2'],
  },
  {
    id: 'exprng-3',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }y = 2^{x + 1}\\text{ 在 }x \\in [-1, 2]\\text{ 上的值域}',
    correctAnswer: '[1, 8]',
    acceptableAnswers: ['[1,8]'],
  },
  {
    id: 'exprng-4',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }y = \\left(\\tfrac{1}{3}\\right)^{x^2 - 4x + 3}\\text{ 在 }x \\in [0, 4]\\text{ 上的值域}',
    correctAnswer: '\\left[\\tfrac{1}{27}, 3\\right]',
    acceptableAnswers: ['[1/27,3]'],
  },
];
