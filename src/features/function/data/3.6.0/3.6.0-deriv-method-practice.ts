import type { QuizQuestionData } from '@/types';

// ══════════════════════════════════════════════════════════════
// 3.6.0 单调性入门 · 1.1 求不含参函数的单调区间
// ══════════════════════════════════════════════════════════════

// ── 1.1 · 随手算（warmup） ──
export const derivMono1Warmup: QuizQuestionData[] = [
  {
    id: 'dm1w-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=2x^3-3x^2-12x+5\\text{ 的单调区间}',
    correctAnswer: '增:(-\\infty,-1),(2,+\\infty); 减:(-1,2)',
    acceptableAnswers: ['增:(-\\infty,-1),(2,+\\infty); 减:(-1,2)', '增(-∞,-1),(2,+∞);减(-1,2)'],
  },
  {
    id: 'dm1w-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=x^4-2x^2\\text{ 的单调区间}',
    correctAnswer: '增:(-1,0),(1,+\\infty); 减:(-\\infty,-1),(0,1)',
    acceptableAnswers: ['增:(-1,0),(1,+\\infty); 减:(-\\infty,-1),(0,1)', '增(-1,0),(1,+∞);减(-∞,-1),(0,1)'],
  },
];

// ── 1.1 · 例 3 & 例 4 综合练习（分式断点 + 恒正因子）──
export const derivMono34Practice: QuizQuestionData[] = [
  {
    id: 'dm34-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=\\dfrac{x^2}{x-1}\\text{ 的单调区间}',
    correctAnswer: '增:(-\\infty,0),(2,+\\infty); 减:(0,1),(1,2)',
    acceptableAnswers: ['增:(-\\infty,0),(2,+\\infty); 减:(0,1),(1,2)', '增(-∞,0),(2,+∞);减(0,1),(1,2)'],
  },
  {
    id: 'dm34-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=x+\\dfrac{1}{x}\\text{ 的单调区间}',
    correctAnswer: '增:(-\\infty,-1),(1,+\\infty); 减:(-1,0),(0,1)',
    acceptableAnswers: ['增:(-\\infty,-1),(1,+\\infty); 减:(-1,0),(0,1)', '增(-∞,-1),(1,+∞);减(-1,0),(0,1)'],
  },
  {
    id: 'dm34-3',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=(x+1)e^x\\text{ 的单调区间}',
    correctAnswer: '增:(-2,+\\infty); 减:(-\\infty,-2)',
    acceptableAnswers: ['增:(-2,+\\infty); 减:(-\\infty,-2)', '增(-2,+∞);减(-∞,-2)'],
  },
  {
    id: 'dm34-4',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=x^2 e^x\\text{ 的单调区间}',
    correctAnswer: '增:(-\\infty,-2),(0,+\\infty); 减:(-2,0)',
    acceptableAnswers: ['增:(-\\infty,-2),(0,+\\infty); 减:(-2,0)', '增(-∞,-2),(0,+∞);减(-2,0)'],
  },
];

export const derivMono2Variants: QuizQuestionData[] = [
  {
    id: 'dm2v-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=2x-\\ln x\\text{ 的单调区间}',
    correctAnswer: '增:(\\dfrac{1}{2},+\\infty); 减:(0,\\dfrac{1}{2})',
    acceptableAnswers: ['增:(\\dfrac{1}{2},+\\infty); 减:(0,\\dfrac{1}{2})', '增(1/2,+∞);减(0,1/2)'],
  },
  {
    id: 'dm2v-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=x-2\\ln x\\text{ 的单调区间}',
    correctAnswer: '增:(2,+\\infty); 减:(0,2)',
    acceptableAnswers: ['增:(2,+\\infty); 减:(0,2)', '增(2,+∞);减(0,2)'],
  },
];

export const derivMono56Practice: QuizQuestionData[] = [
  {
    id: 'dm56-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=x^3-6x^2+9x\\text{ 的单调区间}',
    correctAnswer: '增:(-\\infty,1),(3,+\\infty); 减:(1,3)',
    acceptableAnswers: ['增:(-\\infty,1),(3,+\\infty); 减:(1,3)', '增(-∞,1),(3,+∞);减(1,3)'],
  },
  {
    id: 'dm56-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=x\\ln x-x\\text{ 的单调区间}',
    correctAnswer: '增:(1,+\\infty); 减:(0,1)',
    acceptableAnswers: ['增:(1,+\\infty); 减:(0,1)', '增(1,+∞);减(0,1)'],
  },
];

export const derivThreadPractice: QuizQuestionData[] = [
  {
    id: 'dmthread-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{已知 }f^{\\prime}(x)=(x+1)^2(x-2)\\text{，判断 }f(x)\\text{ 的单调区间}',
    correctAnswer: '增:(2,+\\infty); 减:(-\\infty,-1),(-1,2)',
    acceptableAnswers: ['增:(2,+\\infty); 减:(-\\infty,-1),(-1,2)', '增(2,+∞);减(-∞,-1),(-1,2)'],
  },
];

export const derivHiddenZeroPractice: QuizQuestionData[] = [
  {
    id: 'dmhidden-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=e^x+x^2-4x\\text{ 的单调区间}',
    correctAnswer: '设f\\prime(x_0)=0, x_0\\in(0,1); 增:(x_0,+\\infty); 减:(-\\infty,x_0)',
    acceptableAnswers: ['设f\\prime(x_0)=0, x_0\\in(0,1); 增:(x_0,+\\infty); 减:(-\\infty,x_0)', '增(x0,+∞);减(-∞,x0)'],
  },
  {
    id: 'dmhidden-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=-e^x-x^2+4x\\text{ 的单调区间}',
    correctAnswer: '设f\\prime(x_0)=0, x_0\\in(0,1); 增:(-\\infty,x_0); 减:(x_0,+\\infty)',
    acceptableAnswers: ['设f\\prime(x_0)=0, x_0\\in(0,1); 增:(-\\infty,x_0); 减:(x_0,+\\infty)', '增(-∞,x0);减(x0,+∞)'],
  },
];