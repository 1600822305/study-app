import type { QuizQuestionData } from '@/types';

// ══════════════════════════════════════════════════════════════
// §1 单调性
// ══════════════════════════════════════════════════════════════

// ── 1.1 求不含参函数的单调区间 · 随手算 ──
export const derivMono1Warmup: QuizQuestionData[] = [
  {
    id: 'dm1w-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=3x^2-x^3\\text{ 的单调区间}',
    correctAnswer: '增:(0,2); 减:(-\\infty,0),(2,+\\infty)',
    acceptableAnswers: ['增:(0,2); 减:(-\\infty,0),(2,+\\infty)', '增(0,2);减(-∞,0),(2,+∞)'],
  },
  {
    id: 'dm1w-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=\\ln(2x-1)\\text{ 的单调区间}',
    correctAnswer: '增:(\\dfrac{1}{2},+\\infty)',
    acceptableAnswers: ['增:(\\dfrac{1}{2},+\\infty)', '增(1/2,+∞)', '在(1/2,+∞)单调递增', '(1/2,+∞)'],
  },
];

// ── 1.1 求不含参函数的单调区间 · 即时练习 ──
export const derivMono1Practice: QuizQuestionData[] = [
  {
    id: 'dm1p-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=x^3-6x^2+9x\\text{ 的单调区间}',
    correctAnswer: '增:(-\\infty,1),(3,+\\infty); 减:(1,3)',
    acceptableAnswers: ['增:(-\\infty,1),(3,+\\infty); 减:(1,3)', '增(-∞,1),(3,+∞);减(1,3)'],
  },
  {
    id: 'dm1p-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=e^x-2x\\text{ 的单调区间}',
    correctAnswer: '增:(\\ln 2,+\\infty); 减:(-\\infty,\\ln 2)',
    acceptableAnswers: ['增:(\\ln 2,+\\infty); 减:(-\\infty,\\ln 2)', '增(ln2,+∞);减(-∞,ln2)'],
  },
  {
    id: 'dm1p-3',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=\\dfrac{\\ln x}{x}\\text{ 的单调区间}',
    correctAnswer: '增:(0,e); 减:(e,+\\infty)',
    acceptableAnswers: ['增:(0,e); 减:(e,+\\infty)', '增(0,e);减(e,+∞)'],
  },
  {
    id: 'dm1p-4',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=x+\\dfrac{1}{x}\\text{ 的单调区间}',
    correctAnswer: '增:(-\\infty,-1),(1,+\\infty); 减:(-1,0),(0,1)',
    acceptableAnswers: ['增:(-\\infty,-1),(1,+\\infty); 减:(-1,0),(0,1)', '增(-∞,-1),(1,+∞);减(-1,0),(0,1)'],
  },
];

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

// ── 2.1 例 1 后即时练习（求多项式极值） ──
export const derivExtremaExample1Practice: QuizQuestionData[] = [
  {
    id: 'dex1-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=2x^3-9x^2+12x-3\\text{ 的极值}',
    correctAnswer: '\\text{极大值 }f(1)=2,\\text{ 极小值 }f(2)=1',
    acceptableAnswers: [
      '\\text{极大值 }f(1)=2,\\text{ 极小值 }f(2)=1',
      '极大值2;极小值1',
      '极大2,极小1',
    ],
  },
  {
    id: 'dex1-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=x^3-3x+1\\text{ 的极值}',
    correctAnswer: '\\text{极大值 }f(-1)=3,\\text{ 极小值 }f(1)=-1',
    acceptableAnswers: [
      '\\text{极大值 }f(-1)=3,\\text{ 极小值 }f(1)=-1',
      '极大值3;极小值-1',
      '极大3,极小-1',
    ],
  },
];

// ── 2.1 例 2 后即时练习（含 ln 求极值） ──
export const derivExtremaExample2Practice: QuizQuestionData[] = [
  {
    id: 'dex2-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=\\ln x-x\\text{ 的极值（注意定义域）}',
    correctAnswer: '\\text{极大值 }f(1)=-1,\\text{ 无极小值}',
    acceptableAnswers: [
      '\\text{极大值 }f(1)=-1,\\text{ 无极小值}',
      '极大值-1;无极小值',
      '极大-1,无极小',
    ],
  },
];

// ── 2.1 例 3 后即时练习（含 e^x 求极值） ──
export const derivExtremaExample3Practice: QuizQuestionData[] = [
  {
    id: 'dex3-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=\\dfrac{x}{e^x}\\text{ 的极值}',
    correctAnswer: '\\text{极大值 }f(1)=\\dfrac{1}{e},\\text{ 无极小值}',
    acceptableAnswers: [
      '\\text{极大值 }f(1)=\\dfrac{1}{e},\\text{ 无极小值}',
      '极大值1/e;无极小值',
      '极大1/e,无极小',
    ],
  },
  {
    id: 'dex3-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=(x-2)e^x\\text{ 的极值}',
    correctAnswer: '\\text{极小值 }f(1)=-e,\\text{ 无极大值}',
    acceptableAnswers: [
      '\\text{极小值 }f(1)=-e,\\text{ 无极大值}',
      '极小值-e;无极大值',
      '极小-e,无极大',
    ],
  },
];

// ── 2.1 例 4 后即时练习（分式 / 反比例型求极值） ──
export const derivExtremaExample4Practice: QuizQuestionData[] = [
  {
    id: 'dex4-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=\\dfrac{\\ln x}{x}\\text{ 的极值}',
    correctAnswer: '\\text{极大值 }f(e)=\\dfrac{1}{e},\\text{ 无极小值}',
    acceptableAnswers: [
      '\\text{极大值 }f(e)=\\dfrac{1}{e},\\text{ 无极小值}',
      '极大值1/e;无极小值',
      '极大1/e,无极小',
    ],
  },
  {
    id: 'dex4-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=\\dfrac{x^2}{x-1}\\text{ 的极值}',
    correctAnswer: '\\text{极大值 }f(0)=0,\\text{ 极小值 }f(2)=4',
    acceptableAnswers: [
      '\\text{极大值 }f(0)=0,\\text{ 极小值 }f(2)=4',
      '极大值0;极小值4',
      '极大0,极小4',
    ],
  },
];

// ── 4.2 求最值 4 步流程 · 即时练习 ──
export const closedIntervalMaxStepsPractice: QuizQuestionData[] = [
  {
    id: 'dmax-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=x^3-3x^2\\text{ 在 }[-1,4]\\text{ 上的最值}',
    correctAnswer: '\\text{最大值 }16,\\text{ 最小值 }-4',
    acceptableAnswers: [
      '\\text{最大值 }16,\\text{ 最小值 }-4',
      '最大值16;最小值-4',
      '最大16,最小-4',
    ],
  },
  {
    id: 'dmax-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=x^3-3x+1\\text{ 在 }[0,2]\\text{ 上的最值}',
    correctAnswer: '\\text{最大值 }3,\\text{ 最小值 }-1',
    acceptableAnswers: [
      '\\text{最大值 }3,\\text{ 最小值 }-1',
      '最大值3;最小值-1',
      '最大3,最小-1',
    ],
  },
];

// ── 4.2 例 1 同款练习（多项式闭区间最值） ──
export const closedMaxExample1Practice: QuizQuestionData[] = [
  {
    id: 'cmax1-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=2x^3-3x^2-12x+5\\text{ 在 }[-2,3]\\text{ 上的最值}',
    correctAnswer: '\\text{最大值 }12,\\text{ 最小值 }-15',
    acceptableAnswers: [
      '\\text{最大值 }12,\\text{ 最小值 }-15',
      '最大值12;最小值-15',
      '最大12,最小-15',
    ],
  },
];

// ── 4.2 例 2 同款练习（含 ln 闭区间最值） ──
export const closedMaxExample2Practice: QuizQuestionData[] = [
  {
    id: 'cmax2-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=\\dfrac{\\ln x}{x}\\text{ 在 }[1,e^2]\\text{ 上的最值}',
    correctAnswer: '\\text{最大值 }\\dfrac{1}{e},\\text{ 最小值 }0',
    acceptableAnswers: [
      '\\text{最大值 }\\dfrac{1}{e},\\text{ 最小值 }0',
      '最大值1/e;最小值0',
      '最大1/e,最小0',
    ],
  },
];

// ── 4.2 例 3 同款练习（含 e^x 闭区间最值） ──
export const closedMaxExample3Practice: QuizQuestionData[] = [
  {
    id: 'cmax3-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=x\\,e^x\\text{ 在 }[-2,1]\\text{ 上的最值}',
    correctAnswer: '\\text{最大值 }e,\\text{ 最小值 }-\\dfrac{1}{e}',
    acceptableAnswers: [
      '\\text{最大值 }e,\\text{ 最小值 }-\\dfrac{1}{e}',
      '最大值e;最小值-1/e',
      '最大e,最小-1/e',
    ],
  },
  {
    id: 'cmax3-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=e^{2x}-4x\\text{ 在 }[0,1]\\text{ 上的最值}',
    correctAnswer: '\\text{最大值 }e^2-4,\\text{ 最小值 }2-2\\ln 2',
    acceptableAnswers: [
      '\\text{最大值 }e^2-4,\\text{ 最小值 }2-2\\ln 2',
      '最大值e²-4;最小值2-2ln2',
      '最大e^2-4,最小2-2ln2',
    ],
  },
];

// ── 4.2 例 4 同款练习（含参讨论闭区间最值） ──
export const closedMaxExample4Practice: QuizQuestionData[] = [
  {
    id: 'cmax4-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=x^3-3ax\\text{ 在 }[0,2]\\text{ 上的最小值（按 }a\\text{ 分类）}',
    correctAnswer: 'a\\le 0:\\,0;\\ 0<a<4:\\,-2a\\sqrt{a};\\ a\\ge 4:\\,8-6a',
    acceptableAnswers: [
      'a\\le 0:\\,0;\\ 0<a<4:\\,-2a\\sqrt{a};\\ a\\ge 4:\\,8-6a',
    ],
  },
];

// ── 4.2 例 5 同款练习（分式型闭区间最值） ──
export const closedMaxExample5Practice: QuizQuestionData[] = [
  {
    id: 'cmax5-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=\\dfrac{x^2+1}{x}\\text{ 在 }[1,3]\\text{ 上的最值}',
    correctAnswer: '\\text{最大值 }\\dfrac{10}{3},\\text{ 最小值 }2',
    acceptableAnswers: [
      '\\text{最大值 }\\dfrac{10}{3},\\text{ 最小值 }2',
      '最大值10/3;最小值2',
      '最大10/3,最小2',
    ],
  },
];

// ── 2.2 极值与最值 · 即时练习（占位） ──
export const derivExtremaPractice: QuizQuestionData[] = [];

// ── 综合自测（占位） ──
export const derivApplication2QuizQuestions: QuizQuestionData[] = [];
