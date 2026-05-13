import type { QuizQuestionData } from '@/types';

// ── 分组一：定义与互化（4 题互补） ──
export const logDefinitionPractice: QuizQuestionData[] = [
  {
    id: 'logdef-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{若 }e^a = 3\\text{，用对数表示 }a',
    correctAnswer: 'a = \\ln 3',
    acceptableAnswers: ['a=\\ln 3', '\\ln 3', 'ln 3', 'ln3'],
  },
  {
    id: 'logdef-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{若 }\\log_a 64 = 2\\text{，求 }a\\text{ 的值}',
    correctAnswer: 'a = 8',
    acceptableAnswers: ['a=8', '8'],
  },
  {
    id: 'logdef-3',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }\\log_{\\sqrt{3}} 81\\text{ 的值}',
    correctAnswer: '8',
    acceptableAnswers: ['8'],
  },
  {
    id: 'logdef-4',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }\\log_4 \\tfrac{1}{8}\\text{ 的值}',
    correctAnswer: '-\\tfrac{3}{2}',
    acceptableAnswers: ['-3/2', '-1.5', '-\\frac{3}{2}', '-\\dfrac{3}{2}'],
  },
];

// ── 分组二：求参数取值范围（4 题，高考难度递进） ──
export const logParamPractice: QuizQuestionData[] = [
  {
    id: 'logparam-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x) = \\log_3 (x^2 - 5x + 6)\\text{ 的定义域}',
    correctAnswer: '(-\\infty, 2) \\cup (3, +\\infty)',
    acceptableAnswers: ['(-∞,2)∪(3,+∞)', 'x<2 或 x>3', '(-\\infty,2)\\cup(3,+\\infty)'],
  },
  {
    id: 'logparam-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x) = \\log_2 \\dfrac{3 - x}{x + 2}\\text{ 的定义域}',
    correctAnswer: '(-2, 3)',
    acceptableAnswers: ['-2<x<3', '(-2,3)'],
  },
  {
    id: 'logparam-3',
    type: 'blank',
    question: '',
    questionLatex: '\\text{若 }y = \\log_{2a-1}(3 - a)\\text{ 有意义，求 }a\\text{ 的取值范围}',
    correctAnswer: 'a \\in \\left(\\tfrac{1}{2}, 1\\right) \\cup (1, 3)',
    acceptableAnswers: ['(1/2,1)∪(1,3)', '1/2<a<3 且 a≠1', 'a\\in(1/2,1)\\cup(1,3)'],
  },
  {
    id: 'logparam-4',
    type: 'blank',
    question: '',
    questionLatex: '\\text{若 }y = \\log_{a-1}(a^2 - 3a + 2)\\text{ 有意义，求 }a\\text{ 的取值范围}',
    correctAnswer: 'a \\in (2, +\\infty)',
    acceptableAnswers: ['a>2', '(2,+∞)', '(2,+\\infty)'],
  },
];

// ── 分组三：4 个对数恒等式（4 题，综合 → 含字母 → 化同底 → 嵌套对数压轴） ──
export const logIdentityPractice: QuizQuestionData[] = [
  {
    id: 'logid-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }\\log_2 8 + \\lg 100 - \\ln e^2\\text{ 的值}',
    correctAnswer: '3',
    acceptableAnswers: ['3'],
  },
  {
    id: 'logid-3',
    type: 'blank',
    question: '',
    questionLatex: '\\text{若 }\\log_a 2 = m\\text{，化简 }a^{2m+1}',
    correctAnswer: '4a',
    acceptableAnswers: ['4a', '4 a', '4\\cdot a', '4 \\cdot a'],
  },
  {
    id: 'logid-4',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }27^{\\log_3 2} + 2^{\\log_2 6}\\text{ 的值}',
    correctAnswer: '14',
    acceptableAnswers: ['14'],
  },
  {
    id: 'logid-5',
    type: 'blank',
    question: '',
    questionLatex: '\\text{解方程 }\\log_3 (\\log_2 (\\log_4 x)) = 0\\text{，求 }x',
    correctAnswer: 'x = 16',
    acceptableAnswers: ['16', 'x=16', 'x = 16'],
  },
];

// ── 分组四：对数运算三法则（6 题，正用拆分 → 开方派生 → 除减逆用 → 乘加逆用 → 幂乘逆用+凑整 → 综合） ──
export const logRulePractice: QuizQuestionData[] = [
  {
    id: 'logrule-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{用 }\\lg 2\\text{ 和 }\\lg 3\\text{ 表示 }\\lg 18',
    correctAnswer: '\\lg 2 + 2\\lg 3',
    acceptableAnswers: ['lg2+2lg3', 'lg 2+2 lg 3', '\\lg 2+2\\lg 3', '2\\lg 3+\\lg 2'],
  },
  {
    id: 'logrule-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }\\log_2 \\sqrt{8}\\text{ 的值}',
    correctAnswer: '\\dfrac{3}{2}',
    acceptableAnswers: ['3/2', '1.5', '\\frac{3}{2}', '\\tfrac{3}{2}'],
  },
  {
    id: 'logrule-3',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }\\log_3 6 - \\log_3 2\\text{ 的值}',
    correctAnswer: '1',
    acceptableAnswers: ['1'],
  },
  {
    id: 'logrule-4',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }\\lg 5 + \\lg 20\\text{ 的值}',
    correctAnswer: '2',
    acceptableAnswers: ['2'],
  },
  {
    id: 'logrule-5',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }2\\lg 5 + \\lg 4\\text{ 的值}',
    correctAnswer: '2',
    acceptableAnswers: ['2'],
  },
  {
    id: 'logrule-6',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }\\lg 2 + \\lg 5 + \\lg \\sqrt{100}\\text{ 的值}',
    correctAnswer: '2',
    acceptableAnswers: ['2'],
  },
];

// ── 分组五：换底公式（6 题，基础区 2 + 链式区 4） ──
export const logChangeBasePractice: QuizQuestionData[] = [
  {
    id: 'logcb-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{已知 }\\lg 2 = a\\text{，用 }a\\text{ 表示 }\\log_2 5',
    correctAnswer: '\\dfrac{1-a}{a}',
    acceptableAnswers: ['(1-a)/a', '\\frac{1-a}{a}', '\\tfrac{1-a}{a}', '1/a-1', '\\dfrac{1}{a}-1'],
  },
  {
    id: 'logcb-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{已知 }\\log_3 2 = m\\text{，用 }m\\text{ 表示 }\\log_9 12',
    correctAnswer: 'm + \\dfrac{1}{2}',
    acceptableAnswers: ['m+1/2', 'm+\\frac{1}{2}', 'm+\\tfrac{1}{2}', '(2m+1)/2', '\\dfrac{2m+1}{2}'],
  },
  {
    id: 'logcb-3',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }\\log_3 4 \\cdot \\log_4 5 \\cdot \\log_5 6 \\cdot \\log_6 27\\text{ 的值}',
    correctAnswer: '3',
    acceptableAnswers: ['3'],
  },
  {
    id: 'logcb-4',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }\\log_2 9 \\cdot \\log_3 4\\text{ 的值}',
    correctAnswer: '4',
    acceptableAnswers: ['4'],
  },
  {
    id: 'logcb-5',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }(\\log_2 9 + \\log_4 3)(\\log_3 4 + \\log_9 2)\\text{ 的值}',
    correctAnswer: '\\dfrac{25}{4}',
    acceptableAnswers: ['25/4', '6.25', '\\frac{25}{4}', '\\tfrac{25}{4}'],
  },
  {
    id: 'logcb-6',
    type: 'blank',
    question: '',
    questionLatex: '\\text{已知 }\\log_2 5 = a\\text{，用 }a\\text{ 表示 }\\log_5 4',
    correctAnswer: '\\dfrac{2}{a}',
    acceptableAnswers: ['2/a', '\\frac{2}{a}', '\\tfrac{2}{a}'],
  },
];

// ── 分组六：设元法与综合化简（6 题，设元区 3 + 因式分解区 3） ──
export const logSubstitutionPractice: QuizQuestionData[] = [
  {
    id: 'logsub-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{已知 }3^a = 4\\text{，用 }a\\text{ 表示 }\\log_3 32',
    correctAnswer: '\\dfrac{5a}{2}',
    acceptableAnswers: ['5a/2', '\\frac{5a}{2}', '\\tfrac{5a}{2}', '\\frac{5}{2}a', '\\tfrac{5}{2}a', '2.5a'],
  },
  {
    id: 'logsub-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{已知 }\\lg 2 = a\\text{，用 }a\\text{ 表示 }\\log_{25} 8',
    correctAnswer: '\\dfrac{3a}{2(1 - a)}',
    acceptableAnswers: ['3a/(2(1-a))', '3a/(2-2a)', '\\frac{3a}{2(1-a)}', '\\tfrac{3a}{2(1-a)}', '\\frac{3a}{2-2a}', '\\dfrac{3a}{2-2a}'],
  },
  {
    id: 'logsub-3',
    type: 'blank',
    question: '',
    questionLatex: '\\text{已知 }\\log_2 3 = a\\text{、}\\log_3 5 = b\\text{，用 }a\\text{、}b\\text{ 表示 }\\log_{15} 20',
    correctAnswer: '\\dfrac{2 + ab}{a + ab}',
    acceptableAnswers: ['(2+ab)/(a+ab)', '\\frac{2+ab}{a+ab}', '\\tfrac{2+ab}{a+ab}', '(2+ab)/(a(1+b))', '\\dfrac{2+ab}{a(1+b)}', '\\frac{2+ab}{a(1+b)}'],
    fullRow: true,
  },
  {
    id: 'logsub-4',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }(\\lg 5)^2 + \\lg 2 \\cdot \\lg 5 + \\lg 2\\text{ 的值}',
    correctAnswer: '1',
    acceptableAnswers: ['1'],
  },
  {
    id: 'logsub-5',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }\\lg 2 \\cdot \\lg 50 + (\\lg 5)^2\\text{ 的值}',
    correctAnswer: '1',
    acceptableAnswers: ['1'],
  },
  {
    id: 'logsub-6',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }(\\lg 2)^2 + \\lg 2 \\cdot \\lg 50 + \\lg 25\\text{ 的值}',
    correctAnswer: '2',
    acceptableAnswers: ['2'],
  },
  {
    id: 'logsub-7',
    type: 'blank',
    question: '',
    questionLatex: '\\text{已知 }\\log_3 5 = a\\text{，求 }\\log_{27} 25',
    correctAnswer: '\\dfrac{2a}{3}',
    acceptableAnswers: ['2a/3', '\\frac{2a}{3}', '\\tfrac{2a}{3}', '(2/3)a', '\\frac{2}{3}a'],
  },
];

// ── 分组七：对数函数求导（2 题，对称指数分组七） ──
export const logDerivPractice: QuizQuestionData[] = [
  {
    id: 'logderiv-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }y = \\log_5 x\\text{ 的导数}',
    correctAnswer: '\\dfrac{1}{x \\ln 5}',
    acceptableAnswers: ['1/(x\\ln5)', '1/(x ln 5)', '\\frac{1}{x\\ln5}', '\\dfrac{1}{x\\ln5}'],
  },
  {
    id: 'logderiv-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }y = \\ln(3x - 1)\\text{ 的导数}',
    correctAnswer: '\\dfrac{3}{3x - 1}',
    acceptableAnswers: ['3/(3x-1)', '\\frac{3}{3x-1}', '\\dfrac{3}{3x-1}'],
  },
];
