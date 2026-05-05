import type { QuizQuestionData } from '@/types';

// ══════════════════════════════════════════════════════════════
// §1 含参单调性专题（1.1 已迁至 3.6.0）
// ══════════════════════════════════════════════════════════════

// ── 1.2 已知单调性求参数范围 · 随手算（3 题，分参法基础，多项式/ln/e^x 全覆盖） ──
export const derivMono2Warmup: QuizQuestionData[] = [
  {
    id: 'dm2w-1',
    type: 'blank',
    question: '',
    questionLatex: 'f(x)=x^3-ax+2\\text{ 在 }[1,+\\infty)\\text{ 上单调递增，求 }a\\text{ 的范围}',
    correctAnswer: 'a\\le 3',
    acceptableAnswers: ['a\\le 3', 'a≤3', '(-\\infty,3]'],
  },
  {
    id: 'dm2w-2',
    type: 'blank',
    question: '',
    questionLatex: 'f(x)=ax+2\\ln x\\text{ 在 }[1,e]\\text{ 上单调递增，求 }a\\text{ 的范围}',
    correctAnswer: 'a\\ge -\\dfrac{2}{e}',
    acceptableAnswers: ['a\\ge -\\dfrac{2}{e}', 'a≥-2/e', '\\left[-\\dfrac{2}{e},+\\infty\\right)'],
  },
  {
    id: 'dm2w-3',
    type: 'blank',
    question: '',
    questionLatex: 'f(x)=e^x-ax\\text{ 在 }[\\ln 2,\\ln 3]\\text{ 上单调递增，求 }a\\text{ 的范围}',
    correctAnswer: 'a\\le 2',
    acceptableAnswers: ['a\\le 2', 'a≤2', '(-\\infty,2]'],
  },
];

// ── 1.2 已知单调性求参数范围 · 即时练习（3 题，技巧综合：约因子 / Δ 法 / 通分+二次求最值） ──
export const derivMono2Practice: QuizQuestionData[] = [
  {
    id: 'dm2p-1',
    type: 'blank',
    question: '',
    questionLatex: 'f(x)=x^2+\\dfrac{a}{x}\\text{ 在 }[2,+\\infty)\\text{ 上单调递增，求 }a\\text{ 的范围}',
    correctAnswer: 'a\\le 16',
    acceptableAnswers: ['a\\le 16', 'a≤16', '(-\\infty,16]'],
  },
  {
    id: 'dm2p-2',
    type: 'blank',
    question: '',
    questionLatex: 'f(x)=x^3+ax^2+3x\\text{ 在 }\\mathbb{R}\\text{ 上单调递增，求 }a\\text{ 的范围}',
    correctAnswer: '-3\\le a\\le 3',
    acceptableAnswers: ['-3\\le a\\le 3', '-3≤a≤3', '[-3,3]'],
  },
  {
    id: 'dm2p-3',
    type: 'blank',
    question: '',
    questionLatex: 'f(x)=\\ln x+ax^2-2x\\text{ 在 }[1,e]\\text{ 上单调递增，求 }a\\text{ 的范围}',
    correctAnswer: 'a\\ge \\dfrac{1}{2}',
    acceptableAnswers: ['a\\ge \\dfrac{1}{2}', 'a≥1/2', '\\left[\\dfrac{1}{2},+\\infty\\right)'],
  },
];

// ── 1.3 存在单调子区间求参 · 即时练习（5 题，高考难度，覆盖多项式 / ln / e^x / 分式 / 三角）──
export const derivMono3Practice: QuizQuestionData[] = [
  {
    id: 'dm3p-1',
    type: 'blank',
    question: '',
    questionLatex: 'f(x)=x^3-ax+1\\text{ 在 }(1,2)\\text{ 内存在递减区间，求 }a\\text{ 的范围}',
    correctAnswer: 'a>3',
    acceptableAnswers: ['a>3', '(3,+\\infty)', 'a\\in(3,+\\infty)'],
  },
  {
    id: 'dm3p-2',
    type: 'blank',
    question: '',
    questionLatex: 'f(x)=ax-\\ln x\\text{ 在 }(1,e)\\text{ 内存在递减区间，求 }a\\text{ 的范围}',
    correctAnswer: 'a<1',
    acceptableAnswers: ['a<1', '(-\\infty,1)', 'a\\in(-\\infty,1)'],
  },
  {
    id: 'dm3p-3',
    type: 'blank',
    question: '',
    questionLatex: 'f(x)=e^x+ax\\text{ 在 }(0,\\ln 2)\\text{ 内存在递减区间，求 }a\\text{ 的范围}',
    correctAnswer: 'a<-1',
    acceptableAnswers: ['a<-1', '(-\\infty,-1)', 'a\\in(-\\infty,-1)'],
  },
  {
    id: 'dm3p-4',
    type: 'blank',
    question: '',
    questionLatex: 'f(x)=x^2+\\dfrac{a}{x}\\text{ 在 }(1,2)\\text{ 内存在递增区间，求 }a\\text{ 的范围}',
    correctAnswer: 'a<16',
    acceptableAnswers: ['a<16', '(-\\infty,16)', 'a\\in(-\\infty,16)'],
  },
  {
    id: 'dm3p-5',
    type: 'blank',
    question: '',
    questionLatex: 'f(x)=ax+\\sin x\\text{ 在 }(0,\\pi)\\text{ 内存在递减区间，求 }a\\text{ 的范围}',
    correctAnswer: 'a<1',
    acceptableAnswers: ['a<1', '(-\\infty,1)', 'a\\in(-\\infty,1)'],
  },
];

// ── 1.4 含参讨论单调性 · 即时练习（5 题，对应 4 大题型 + 1 综合压轴） ──
export const derivMonoDiscussPractice: QuizQuestionData[] = [
  {
    id: 'dm4-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{讨论 }f(x)=ax+\\ln x\\text{ 的单调性（按 }a\\text{ 分类）}\\quad\\text{【题型①一次型】}',
    correctAnswer: 'a\\ge 0:(0,+\\infty)\\text{ 增};a<0:(0,-1/a)\\text{ 增},(-1/a,+\\infty)\\text{ 减}',
    acceptableAnswers: [
      'a\\ge 0:(0,+\\infty)\\text{ 增};a<0:(0,-1/a)\\text{ 增},(-1/a,+\\infty)\\text{ 减}',
    ],
  },
  {
    id: 'dm4-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{讨论 }f(x)=\\dfrac{1}{3}x^3-ax^2+1\\text{ 的单调性（按 }a\\text{ 分类）}\\quad\\text{【题型②二次可分解】}',
    correctAnswer: 'a>0:(-\\infty,0),(2a,+\\infty)\\text{ 增},(0,2a)\\text{ 减};a=0:\\mathbb{R}\\text{ 增};a<0:(-\\infty,2a),(0,+\\infty)\\text{ 增},(2a,0)\\text{ 减}',
    acceptableAnswers: [
      'a>0:(-\\infty,0),(2a,+\\infty)\\text{ 增},(0,2a)\\text{ 减};a=0:\\mathbb{R}\\text{ 增};a<0:(-\\infty,2a),(0,+\\infty)\\text{ 增},(2a,0)\\text{ 减}',
    ],
  },
  {
    id: 'dm4-3',
    type: 'blank',
    question: '',
    questionLatex: '\\text{讨论 }f(x)=x^3-3ax^2\\text{ 在 }[1,2]\\text{ 上的单调性（按 }a\\text{ 分类）}\\quad\\text{【题型③二次+区间】}',
    correctAnswer: 'a\\le 1/2:[1,2]\\text{ 增};1/2<a<1:(1,2a)\\text{ 减},(2a,2)\\text{ 增};a\\ge 1:[1,2]\\text{ 减}',
    acceptableAnswers: [
      'a\\le 1/2:[1,2]\\text{ 增};1/2<a<1:(1,2a)\\text{ 减},(2a,2)\\text{ 增};a\\ge 1:[1,2]\\text{ 减}',
    ],
  },
  {
    id: 'dm4-4',
    type: 'blank',
    question: '',
    questionLatex: '\\text{讨论 }f(x)=\\dfrac{1}{2}x^2-ax+4\\ln x\\text{ 的单调性（按 }\\Delta\\text{ 分类）}\\quad\\text{【题型④含 ln + Δ 法】}',
    correctAnswer: 'a\\le 4:(0,+\\infty)\\text{ 增};a>4:(0,x_1),(x_2,+\\infty)\\text{ 增},(x_1,x_2)\\text{ 减},x_{1,2}=(a\\mp\\sqrt{a^2-16})/2',
    acceptableAnswers: [
      'a\\le 4:(0,+\\infty)\\text{ 增};a>4:(0,x_1),(x_2,+\\infty)\\text{ 增},(x_1,x_2)\\text{ 减}',
    ],
  },
  {
    id: 'dm4-exp',
    type: 'blank',
    question: '',
    questionLatex: '\\text{讨论 }f(x)=x-ae^x\\text{ 的单调性（按 }a\\text{ 分类）}\\quad\\text{【例 5 变式·指数型】}',
    correctAnswer: 'a\\le 0:\\mathbb{R}\\text{ 增};a>0:(-\\infty,-\\ln a)\\text{ 增},(-\\ln a,+\\infty)\\text{ 减}',
    acceptableAnswers: [
      'a\\le 0:\\mathbb{R}\\text{ 增};a>0:(-\\infty,-\\ln a)\\text{ 增},(-\\ln a,+\\infty)\\text{ 减}',
    ],
  },
  {
    id: 'dm4-5',
    type: 'blank',
    question: '',
    questionLatex: '\\text{讨论 }f(x)=\\dfrac{1}{2}x^2-(a+1)x+a\\ln x\\text{ 的单调性（按 }a\\text{ 分类）}\\quad\\text{【综合压轴】}',
    correctAnswer: 'a\\le 0:(0,1)\\text{ 减},(1,+\\infty)\\text{ 增};0<a<1:(0,a),(1,+\\infty)\\text{ 增},(a,1)\\text{ 减};a=1:(0,+\\infty)\\text{ 增};a>1:(0,1),(a,+\\infty)\\text{ 增},(1,a)\\text{ 减}',
    acceptableAnswers: [
      'a\\le 0:(0,1)\\text{ 减},(1,+\\infty)\\text{ 增};0<a<1:(0,a),(1,+\\infty)\\text{ 增},(a,1)\\text{ 减};a=1:(0,+\\infty)\\text{ 增};a>1:(0,1),(a,+\\infty)\\text{ 增},(1,a)\\text{ 减}',
    ],
  },
];

// ── 2.2 极值与最值 · 即时练习（占位） ──
export const derivExtremaPractice: QuizQuestionData[] = [];

// ── 综合自测（占位） ──
export const derivApplication2QuizQuestions: QuizQuestionData[] = [];
