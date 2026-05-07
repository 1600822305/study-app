import type { QuizQuestionData } from '@/types';

// ══════════════════════════════════════════════════════════════
// §0 恒成立专题（脱离导数，从头讲）
// ══════════════════════════════════════════════════════════════

// ── 0.3 不含参恒成立 · 练手（2 题，三步流程练手） ──
export const derivAlwaysHoldWarmup: QuizQuestionData[] = [
  {
    id: 'ah03-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{判断 }2x^2+1\\ge 0\\text{ 在 }\\mathbb{R}\\text{ 上是否恒成立}',
    correctAnswer: '恒成立',
    acceptableAnswers: ['恒成立', '是'],
  },
  {
    id: 'ah03-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{判断 }x^2+2x-3\\ge 0\\text{ 在 }\\mathbb{R}\\text{ 上是否恒成立}',
    correctAnswer: '不恒成立',
    acceptableAnswers: ['不恒成立', '否', '不是'],
  },
];

// ── 0.8 三种方法综合练习（6 题） ──
export const derivAlwaysHoldMethodPractice: QuizQuestionData[] = [
  // 1. Δ 法：二次式 ≥0 恒成立
  {
    id: 'ah08-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{不等式 }x^2+2ax+4\\ge 0\\text{ 在 }\\mathbb{R}\\text{ 上恒成立，求 }a\\text{ 的范围}',
    correctAnswer: '-2\\le a\\le 2',
    acceptableAnswers: ['-2\\le a\\le 2', '-2≤a≤2', 'a\\in[-2,2]', '[-2,2]'],
  },
  // 2. Δ 法：二次式 ≤0 恒成立（A<0）
  {
    id: 'ah08-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{不等式 }-x^2+ax-1\\le 0\\text{ 在 }\\mathbb{R}\\text{ 上恒成立，求 }a\\text{ 的范围}',
    correctAnswer: '-2\\le a\\le 2',
    acceptableAnswers: ['-2\\le a\\le 2', '-2≤a≤2', 'a\\in[-2,2]', '[-2,2]'],
  },
  // 3. 分参法：有区间限制，g(x) 递增
  {
    id: 'ah08-3',
    type: 'blank',
    question: '',
    questionLatex: '\\text{对 }x\\in[1,2]\\text{，不等式 }ax\\le x^2+2\\text{ 恒成立，求 }a\\text{ 的范围}',
    correctAnswer: 'a\\le 2\\sqrt{2}',
    acceptableAnswers: ['a\\le 2\\sqrt{2}', 'a≤2√2', '(-\\infty,2\\sqrt{2}]', 'a\\in(-\\infty,2\\sqrt{2}]'],
  },
  // 4. 分参法：除式要判正负
  {
    id: 'ah08-4',
    type: 'blank',
    question: '',
    questionLatex: '\\text{对 }x\\in[1,e]\\text{，不等式 }a\\le x+\\dfrac{1}{\\ln x+1}\\text{ 恒成立，求 }a\\text{ 的范围}',
    correctAnswer: 'a\\le 2',
    acceptableAnswers: ['a\\le 2', 'a≤2', '(-\\infty,2]', 'a\\in(-\\infty,2]'],
  },
  // 5. 直接最值法：配方求含 a 最值
  {
    id: 'ah08-5',
    type: 'blank',
    question: '',
    questionLatex: '\\text{不等式 }x^2-4ax+2\\ge 0\\text{ 在 }\\mathbb{R}\\text{ 上恒成立，求 }a\\text{ 的范围（用配方法）}',
    correctAnswer: '-\\dfrac{\\sqrt{2}}{2}\\le a\\le \\dfrac{\\sqrt{2}}{2}',
    acceptableAnswers: ['-\\dfrac{\\sqrt{2}}{2}\\le a\\le \\dfrac{\\sqrt{2}}{2}', 'a\\in\\left[-\\dfrac{\\sqrt{2}}{2},\\dfrac{\\sqrt{2}}{2}\\right]', '|a|\\le \\dfrac{\\sqrt{2}}{2}'],
  },
  // 6. 分参法：区间型，练完整流程
  {
    id: 'ah08-6',
    type: 'blank',
    question: '',
    questionLatex: '\\text{对 }x\\in[2,5]\\text{，不等式 }ax\\le x^2-3\\text{ 恒成立，求 }a\\text{ 的范围}',
    correctAnswer: 'a\\le \\dfrac{1}{2}',
    acceptableAnswers: ['a\\le \\dfrac{1}{2}', 'a≤1/2', 'a\\le \\frac{1}{2}', '(-\\infty,\\frac{1}{2}]'],
  },
];

// ══════════════════════════════════════════════════════════════
// §1 含参单调性专题（1.1 已迁至 3.6.0）
// ══════════════════════════════════════════════════════════════

// ── 1.2 例 A 变式（2 题，多项式·分参，有区间限制） ──
export const derivMono2VariantA: QuizQuestionData[] = [
  {
    id: 'dm2va-1',
    type: 'blank',
    question: '',
    questionLatex: 'f(x)=x^3+ax^2\\text{ 在 }[0,+\\infty)\\text{ 上单调递增，求 }a\\text{ 的范围}',
    correctAnswer: 'a\\ge 0',
    acceptableAnswers: ['a\\ge 0', 'a≥0', '[0,+\\infty)'],
  },
  {
    id: 'dm2va-2',
    type: 'blank',
    question: '',
    questionLatex: 'f(x)=-x^3+ax\\text{ 在 }(-1,1)\\text{ 上单调递减，求 }a\\text{ 的范围}',
    correctAnswer: 'a\\le 0',
    acceptableAnswers: ['a\\le 0', 'a≤0', '(-\\infty,0]'],
  },
];

// ── 1.2 例 B 变式（2 题，多项式·Δ 法，全 R） ──
export const derivMono2VariantB: QuizQuestionData[] = [
  {
    id: 'dm2vb-1',
    type: 'blank',
    question: '',
    questionLatex: 'f(x)=x^3-ax^2+3x\\text{ 在 }\\mathbb{R}\\text{ 上单调递增，求 }a\\text{ 的范围}',
    correctAnswer: '-3\\le a\\le 3',
    acceptableAnswers: ['-3\\le a\\le 3', '-3≤a≤3', 'a\\in[-3,3]', '[-3,3]'],
  },
  {
    id: 'dm2vb-2',
    type: 'blank',
    question: '',
    questionLatex: 'f(x)=-x^3+ax^2-x\\text{ 在 }\\mathbb{R}\\text{ 上单调递减，求 }a\\text{ 的范围}',
    correctAnswer: '-\\sqrt{3}\\le a\\le \\sqrt{3}',
    acceptableAnswers: ['-\\sqrt{3}\\le a\\le \\sqrt{3}', '-√3≤a≤√3', 'a\\in[-\\sqrt{3},\\sqrt{3}]'],
  },
];

// ── 1.2 例 C 变式（2 题，含 ln·分参 + 区间最值） ──
export const derivMono2VariantC: QuizQuestionData[] = [
  {
    id: 'dm2vc-1',
    type: 'blank',
    question: '',
    questionLatex: 'f(x)=ax-\\ln x\\text{ 在 }[1,e]\\text{ 上单调递增，求 }a\\text{ 的范围}',
    correctAnswer: 'a\\ge 1',
    acceptableAnswers: ['a\\ge 1', 'a≥1', '[1,+\\infty)', 'a\\in[1,+\\infty)'],
  },
  {
    id: 'dm2vc-2',
    type: 'blank',
    question: '',
    questionLatex: 'f(x)=2\\ln x-ax\\text{ 在 }[1,e]\\text{ 上单调递减，求 }a\\text{ 的范围}',
    correctAnswer: 'a\\ge 2',
    acceptableAnswers: ['a\\ge 2', 'a≥2', '[2,+\\infty)', 'a\\in[2,+\\infty)'],
  },
  {
    id: 'dm2vc-3',
    type: 'blank',
    question: '',
    questionLatex: 'f(x)=x^2+\\ln x-ax\\text{ 在 }[1,e]\\text{ 上单调递增，求 }a\\text{ 的范围}',
    correctAnswer: 'a\\le 3',
    acceptableAnswers: ['a\\le 3', 'a≤3', '(-\\infty,3]', 'a\\in(-\\infty,3]'],
  },
];

// ── 1.2 例 D 变式（2 题，含 e^x·分参 + 区间最值） ──
export const derivMono2VariantD: QuizQuestionData[] = [
  {
    id: 'dm2vd-1',
    type: 'blank',
    question: '',
    questionLatex: 'f(x)=ax-e^x\\text{ 在 }[0,\\ln 2]\\text{ 上单调递减，求 }a\\text{ 的范围}',
    correctAnswer: 'a\\le 1',
    acceptableAnswers: ['a\\le 1', 'a≤1', '(-\\infty,1]', 'a\\in(-\\infty,1]'],
  },
  {
    id: 'dm2vd-2',
    type: 'blank',
    question: '',
    questionLatex: 'f(x)=e^x+x^2-ax\\text{ 在 }[0,\\ln 3]\\text{ 上单调递增，求 }a\\text{ 的范围}',
    correctAnswer: 'a\\le 1',
    acceptableAnswers: ['a\\le 1', 'a≤1', '(-\\infty,1]', 'a\\in(-\\infty,1]'],
  },
];

// ── 1.2 例 E 变式（2 题，分式·通分约分母 + 区间最值） ──
export const derivMono2VariantE: QuizQuestionData[] = [
  {
    id: 'dm2ve-1',
    type: 'blank',
    question: '',
    questionLatex: 'f(x)=x+\\dfrac{a}{x}\\text{ 在 }[2,+\\infty)\\text{ 上单调递增，求 }a\\text{ 的范围}',
    correctAnswer: 'a\\le 4',
    acceptableAnswers: ['a\\le 4', 'a≤4', '(-\\infty,4]', 'a\\in(-\\infty,4]'],
  },
  {
    id: 'dm2ve-2',
    type: 'blank',
    question: '',
    questionLatex: 'f(x)=x^2+\\dfrac{a}{x}-3\\ln x\\text{ 在 }[1,2]\\text{ 上单调递增，求 }a\\text{ 的范围}',
    correctAnswer: 'a\\le -1',
    acceptableAnswers: ['a\\le -1', 'a≤-1', '(-\\infty,-1]', 'a\\in(-\\infty,-1]'],
  },
];

// ── 1.2.5 有解专题练习（1 题，纯不等式有解） ──
export const derivExistWarmup: QuizQuestionData[] = [
  {
    id: 'dexw-2',
    type: 'blank',
    question: '',
    questionLatex: 'a\\le x^2-2x\\text{ 在 }x\\in[0,3]\\text{ 上有解，求 }a\\text{ 的范围}',
    correctAnswer: 'a\\le 3',
    acceptableAnswers: ['a\\le 3', 'a≤3', '(-\\infty,3]', 'a\\in(-\\infty,3]'],
  },
];

// ── 1.3 例 B 变式（2 题，含 ln · 分参 + 闭区间最值，递增 + 递减各一） ──
export const derivMono3VariantB: QuizQuestionData[] = [
  {
    id: 'dm3vb-1',
    type: 'blank',
    question: '',
    questionLatex: 'f(x)=ax-\\ln x\\text{ 在 }[1,e]\\text{ 上存在递增子区间，求 }a\\text{ 的范围}',
    correctAnswer: 'a>\\dfrac{1}{e}',
    acceptableAnswers: ['a>\\dfrac{1}{e}', 'a>1/e', 'a\\in\\left(\\dfrac{1}{e},+\\infty\\right)', '(1/e,+\\infty)'],
  },
  {
    id: 'dm3vb-2',
    type: 'blank',
    question: '',
    questionLatex: 'f(x)=ax+\\ln x\\text{ 在 }[1,e^2]\\text{ 上存在递减子区间，求 }a\\text{ 的范围}',
    correctAnswer: 'a<-\\dfrac{1}{e^2}',
    acceptableAnswers: ['a<-\\dfrac{1}{e^2}', 'a<-1/e^2', 'a\\in\\left(-\\infty,-\\dfrac{1}{e^2}\\right)', '(-\\infty,-1/e^2)'],
  },
];

// ── 1.3 例 A 变式（2 题，多项式·分参，递增 + 递减各一） ──
export const derivMono3VariantA: QuizQuestionData[] = [
  {
    id: 'dm3va-1',
    type: 'blank',
    question: '',
    questionLatex: 'f(x)=x^3-ax\\text{ 在 }[-1,1]\\text{ 上存在递增子区间，求 }a\\text{ 的范围}',
    correctAnswer: 'a<3',
    acceptableAnswers: ['a<3', 'a\\in(-\\infty,3)', '(-\\infty,3)'],
  },
  {
    id: 'dm3va-2',
    type: 'blank',
    question: '',
    questionLatex: 'f(x)=2x^3-3ax^2\\text{ 在 }(1,+\\infty)\\text{ 上存在递减子区间，求 }a\\text{ 的范围}',
    correctAnswer: 'a>1',
    acceptableAnswers: ['a>1', 'a\\in(1,+\\infty)', '(1,+\\infty)'],
  },
];

// ── 1.3 例 C 变式（2 题，含 e^x · 含参乘积，递增 + 递减各一） ──
export const derivMono3VariantC: QuizQuestionData[] = [
  {
    id: 'dm3vc-1',
    type: 'blank',
    question: '',
    questionLatex: 'f(x)=(x-2)e^x+ax\\text{ 在 }[0,1]\\text{ 上存在递增子区间，求 }a\\text{ 的范围}',
    correctAnswer: 'a>0',
    acceptableAnswers: ['a>0', 'a\\in(0,+\\infty)', '(0,+\\infty)'],
  },
  {
    id: 'dm3vc-2',
    type: 'blank',
    question: '',
    questionLatex: 'f(x)=(x-1)e^x+ax\\text{ 在 }[0,2]\\text{ 上存在递减子区间，求 }a\\text{ 的范围}',
    correctAnswer: 'a<0',
    acceptableAnswers: ['a<0', 'a\\in(-\\infty,0)', '(-\\infty,0)'],
  },
];

// ── 1.3 例 D 变式（2 题，分式 · 通分约分母 + 开区间端点处理） ──
export const derivMono3VariantD: QuizQuestionData[] = [
  {
    id: 'dm3vd-1',
    type: 'blank',
    question: '',
    questionLatex: 'f(x)=x^2+\\dfrac{a}{x}\\text{ 在 }(1,2)\\text{ 上存在递减子区间，求 }a\\text{ 的范围}',
    correctAnswer: 'a>2',
    acceptableAnswers: ['a>2', 'a\\in(2,+\\infty)', '(2,+\\infty)'],
  },
  {
    id: 'dm3vd-2',
    type: 'blank',
    question: '',
    questionLatex: 'f(x)=\\dfrac{1}{3}x^3-x+\\dfrac{a}{x}\\text{ 在 }(1,2)\\text{ 上存在递增子区间，求 }a\\text{ 的范围}',
    correctAnswer: 'a<12',
    acceptableAnswers: ['a<12', 'a\\in(-\\infty,12)', '(-\\infty,12)'],
  },
];

// ── 1.3 例 E 变式（2 题，复合型 · e^x 与 ln/分式 同时出现） ──
export const derivMono3VariantE: QuizQuestionData[] = [
  {
    id: 'dm3ve-1',
    type: 'blank',
    question: '',
    questionLatex: 'f(x)=e^x+a\\ln x\\text{ 在 }(1,e)\\text{ 上存在递减子区间，求 }a\\text{ 的范围}',
    correctAnswer: 'a<-e',
    acceptableAnswers: ['a<-e', 'a\\in(-\\infty,-e)', '(-\\infty,-e)'],
  },
  {
    id: 'dm3ve-2',
    type: 'blank',
    question: '',
    questionLatex: 'f(x)=e^x-\\dfrac{a}{x}\\text{ 在 }(1,2)\\text{ 上存在递减子区间，求 }a\\text{ 的范围}',
    correctAnswer: 'a<-e',
    acceptableAnswers: ['a<-e', 'a\\in(-\\infty,-e)', '(-\\infty,-e)'],
  },
];

// ── 1.4 锚点 0 · 定义域形态练习（2 题） ──
export const derivAnchor0Practice: QuizQuestionData[] = [
  {
    id: 'da0-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{讨论 }f(x)=\\sqrt{ax-1}\\text{ 的单调区间（按 }a\\text{ 分类）}\\quad\\text{【锚点 0 基础】}',
    correctAnswer: 'a<0:(-\\infty,1/a]\\text{ 减};a=0:\\text{域为空};a>0:[1/a,+\\infty)\\text{ 增}',
    acceptableAnswers: [
      'a<0:(-\\infty,1/a]\\text{ 减};a=0:\\text{域为空};a>0:[1/a,+\\infty)\\text{ 增}',
    ],
  },
  {
    id: 'da0-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{讨论 }f(x)=\\sqrt{x^2-a}+\\ln x\\text{ 的单调区间（按 }a\\text{ 分类）}\\quad\\text{【锚点 0 交集】}',
    correctAnswer: 'a\\le 0:(0,+\\infty)\\text{ 增};a>0:[\\sqrt{a},+\\infty)\\text{ 增}',
    acceptableAnswers: [
      'a\\le 0:(0,+\\infty)\\text{ 增};a>0:[\\sqrt{a},+\\infty)\\text{ 增}',
    ],
  },
];

// ── 1.4 锚点 1 · a 符号练习（2 题） ──
export const derivAnchor1Practice: QuizQuestionData[] = [
  {
    id: 'da1-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{讨论 }f(x)=a\\ln x-x\\text{ 的单调区间（按 }a\\text{ 分类）}\\quad\\text{【纯一次型】}',
    correctAnswer: 'a\\le 0:(0,+\\infty)\\text{ 减};a>0:(0,a)\\text{ 增},(a,+\\infty)\\text{ 减}',
    acceptableAnswers: [
      'a\\le 0:(0,+\\infty)\\text{ 减};a>0:(0,a)\\text{ 增},(a,+\\infty)\\text{ 减}',
    ],
  },
  {
    id: 'da1-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{讨论 }f(x)=e^x-ax\\text{ 的单调区间（按 }a\\text{ 分类）}\\quad\\text{【广义一次型】}',
    correctAnswer: 'a\\le 0:\\mathbb{R}\\text{ 增};a>0:(-\\infty,\\ln a)\\text{ 减},(\\ln a,+\\infty)\\text{ 增}',
    acceptableAnswers: [
      'a\\le 0:\\mathbb{R}\\text{ 增};a>0:(-\\infty,\\ln a)\\text{ 减},(\\ln a,+\\infty)\\text{ 增}',
    ],
  },
];

// ── 1.4 锚点 2 · 两根大小练习（2 题） ──
export const derivAnchor2Practice: QuizQuestionData[] = [
  {
    id: 'da2-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{讨论 }f(x)=\\dfrac{1}{3}x^3-\\dfrac{a+2}{2}x^2+2ax\\text{ 的单调区间（按 }a\\text{ 分类）}\\quad\\text{【一根具体 }2\\text{、一根含参 }a\\text{】}',
    correctAnswer: 'a>2:(-\\infty,2),(a,+\\infty)\\text{ 增},(2,a)\\text{ 减};a=2:\\mathbb{R}\\text{ 增};a<2:(-\\infty,a),(2,+\\infty)\\text{ 增},(a,2)\\text{ 减}',
    acceptableAnswers: [
      'a>2:(-\\infty,2),(a,+\\infty)\\text{ 增},(2,a)\\text{ 减};a=2:\\mathbb{R}\\text{ 增};a<2:(-\\infty,a),(2,+\\infty)\\text{ 增},(a,2)\\text{ 减}',
    ],
  },
  {
    id: 'da2-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{讨论 }f(x)=\\dfrac{1}{3}x^3-\\dfrac{3a}{2}x^2+2a^2x\\text{ 的单调区间（按 }a\\text{ 分类）}\\quad\\text{【两根 }a, 2a\\text{ 都含参】}',
    correctAnswer: 'a>0:(-\\infty,a),(2a,+\\infty)\\text{ 增},(a,2a)\\text{ 减};a=0:\\mathbb{R}\\text{ 增};a<0:(-\\infty,2a),(a,+\\infty)\\text{ 增},(2a,a)\\text{ 减}',
    acceptableAnswers: [
      'a>0:(-\\infty,a),(2a,+\\infty)\\text{ 增},(a,2a)\\text{ 减};a=0:\\mathbb{R}\\text{ 增};a<0:(-\\infty,2a),(a,+\\infty)\\text{ 增},(2a,a)\\text{ 减}',
    ],
  },
];

// ── 1.4 锚点 3 · 判别式 Δ 练习（2 题） ──
export const derivAnchor3Practice: QuizQuestionData[] = [
  {
    id: 'da3-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{讨论 }f(x)=\\dfrac{1}{2}x^2-2ax+\\ln x\\text{ 的单调区间（按 }a\\text{ 分类）}',
    correctAnswer: 'a\\le 1:(0,+\\infty)\\text{ 增};a>1:(0,x_1),(x_2,+\\infty)\\text{ 增},(x_1,x_2)\\text{ 减}',
    acceptableAnswers: [
      'a\\le 1:(0,+\\infty)\\text{ 增};a>1:(0,x_1),(x_2,+\\infty)\\text{ 增},(x_1,x_2)\\text{ 减}',
    ],
  },
  {
    id: 'da3-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{讨论 }f(x)=\\dfrac{1}{2}x^2+ax-2\\ln x\\text{ 的单调区间（按 }a\\text{ 分类）}',
    correctAnswer: '(0,x_2)\\text{ 减},(x_2,+\\infty)\\text{ 增}, x_2=\\dfrac{-a+\\sqrt{a^2+8}}{2}',
    acceptableAnswers: [
      '(0,x_2)\\text{ 减},(x_2,+\\infty)\\text{ 增}, x_2=\\dfrac{-a+\\sqrt{a^2+8}}{2}',
    ],
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
