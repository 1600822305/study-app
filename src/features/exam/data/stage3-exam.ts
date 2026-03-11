import type { QuizQuestionData } from '@/types';
import type { EssayQuestion } from '@/components/shared/ExamPaper';

// ── 第三阶段考试：函数思维（原创题，不与练习题库重复） ──

// ═══════ 一、函数概念与性质（6 题） ═══════
export const stage3ConceptQuestions: QuizQuestionData[] = [
  {
    id: 's3e-c1',
    question: '',
    questionLatex: '\\text{函数 } f(x) = \\sqrt{x-1} + \\ln(3-x) \\text{ 的定义域为}',
    type: 'choice',
    options: [
      { label: 'A', value: '[1, 3)', isLatex: true },
      { label: 'B', value: '(1, 3)', isLatex: true },
      { label: 'C', value: '[1, 3]', isLatex: true },
      { label: 'D', value: '(1, 3]', isLatex: true },
    ],
    correctAnswer: 'A',
    explanation: '',
    explanationLatex: 'x-1 \\geq 0 \\Rightarrow x \\geq 1\\\\[4pt]3-x > 0 \\Rightarrow x < 3\\\\[4pt]\\text{取交集：}[1,3)',
  },
  {
    id: 's3e-c2',
    question: '',
    questionLatex: '\\text{设 } f(x) \\text{ 是定义在 } \\mathbb{R} \\text{ 上的偶函数，且在 } [0,+\\infty) \\text{ 上单调递增，则 } f(-3), f(1), f(-2) \\text{ 的大小关系为}',
    type: 'choice',
    options: [
      { label: 'A', value: 'f(1) < f(-2) < f(-3)', isLatex: true },
      { label: 'B', value: 'f(-3) < f(-2) < f(1)', isLatex: true },
      { label: 'C', value: 'f(-2) < f(1) < f(-3)', isLatex: true },
      { label: 'D', value: 'f(1) < f(-3) < f(-2)', isLatex: true },
    ],
    correctAnswer: 'A',
    explanation: '',
    explanationLatex: '\\text{偶函数：}f(-3)=f(3),\\;f(-2)=f(2)\\\\[4pt]\\text{在 }[0,+\\infty)\\text{ 递增：}f(1)<f(2)<f(3)\\\\[4pt]\\therefore f(1)<f(-2)<f(-3)',
  },
  {
    id: 's3e-c3',
    question: '',
    questionLatex: '\\text{若 } f(x) = x^2 - 2x + 3 \\text{，则 } f(x+1) = ',
    type: 'choice',
    options: [
      { label: 'A', value: 'x^2 + 2', isLatex: true },
      { label: 'B', value: 'x^2 + 2x + 2', isLatex: true },
      { label: 'C', value: 'x^2 - 4x + 6', isLatex: true },
      { label: 'D', value: 'x^2 + 4x + 6', isLatex: true },
    ],
    correctAnswer: 'A',
    explanation: '',
    explanationLatex: 'f(x+1) = (x+1)^2 - 2(x+1) + 3\\\\[4pt]= x^2 + 2x + 1 - 2x - 2 + 3 = x^2 + 2',
  },
  {
    id: 's3e-c4',
    question: '',
    questionLatex: '\\text{已知 } f(x) = ax^3 + bx + 1 \\text{，且 } f(-2) = -5 \\text{，则 } f(2) = ',
    type: 'choice',
    options: [
      { label: 'A', value: '5' },
      { label: 'B', value: '7' },
      { label: 'C', value: '-3' },
      { label: 'D', value: '3' },
    ],
    correctAnswer: 'B',
    explanation: '',
    explanationLatex: '\\text{令 }g(x) = ax^3 + bx\\text{，则 }g(x)\\text{ 是奇函数}\\\\[4pt]f(x) = g(x) + 1\\\\[4pt]f(-2) = g(-2) + 1 = -5 \\Rightarrow g(-2) = -6\\\\[4pt]g(2) = -g(-2) = 6\\\\[4pt]f(2) = g(2) + 1 = 7',
  },
  {
    id: 's3e-c5',
    question: '',
    questionLatex: '\\text{函数 } f(x) = \\dfrac{x}{x-1} \\text{ 的值域为}',
    type: 'choice',
    options: [
      { label: 'A', value: '\\{y \\mid y \\neq 1\\}', isLatex: true },
      { label: 'B', value: '\\{y \\mid y \\neq 0\\}', isLatex: true },
      { label: 'C', value: '\\{y \\mid y > 1\\}', isLatex: true },
      { label: 'D', value: '\\mathbb{R}', isLatex: true },
    ],
    correctAnswer: 'A',
    explanation: '',
    explanationLatex: 'f(x) = \\dfrac{x}{x-1} = 1 + \\dfrac{1}{x-1}\\\\[4pt]\\text{因 }x \\neq 1\\text{，所以 }\\dfrac{1}{x-1} \\neq 0\\\\[4pt]\\therefore f(x) \\neq 1\\text{，值域 }\\{y \\mid y \\neq 1\\}',
  },
  {
    id: 's3e-c6',
    question: '',
    questionLatex: '\\text{若函数 } f(x) = (k-1)x^2 + (k-2)x + (k^2-1) \\text{ 是偶函数，则 } k = ',
    type: 'choice',
    options: [
      { label: 'A', value: '1' },
      { label: 'B', value: '2' },
      { label: 'C', value: '-1' },
      { label: 'D', value: '0' },
    ],
    correctAnswer: 'B',
    explanation: '',
    explanationLatex: '\\text{偶函数要求 }f(-x) = f(x)\\text{，即奇数次项系数为 }0\\\\[4pt]k - 2 = 0 \\Rightarrow k = 2\\\\[4pt]\\text{验证：}k=2\\text{ 时 }f(x) = x^2 + 3\\text{，确实是偶函数}',
  },
];

// ═══════ 二、基本初等函数（6 题） ═══════
export const stage3ElemFuncQuestions: QuizQuestionData[] = [
  {
    id: 's3e-e1',
    question: '',
    questionLatex: '\\text{计算 } \\log_2 \\sqrt{32} = ',
    type: 'choice',
    options: [
      { label: 'A', value: '\\dfrac{3}{2}', isLatex: true },
      { label: 'B', value: '\\dfrac{5}{2}', isLatex: true },
      { label: 'C', value: '3', isLatex: true },
      { label: 'D', value: '5', isLatex: true },
    ],
    correctAnswer: 'B',
    explanation: '',
    explanationLatex: '\\sqrt{32} = 32^{1/2} = (2^5)^{1/2} = 2^{5/2}\\\\[4pt]\\log_2 2^{5/2} = \\dfrac{5}{2}',
  },
  {
    id: 's3e-e2',
    question: '',
    questionLatex: '\\text{设 } a = 2^{0.5},\\; b = \\left(\\dfrac{1}{3}\\right)^{0.5},\\; c = \\log_3 2\\text{，则}',
    type: 'choice',
    options: [
      { label: 'A', value: 'a > c > b', isLatex: true },
      { label: 'B', value: 'a > b > c', isLatex: true },
      { label: 'C', value: 'c > a > b', isLatex: true },
      { label: 'D', value: 'b > a > c', isLatex: true },
    ],
    correctAnswer: 'A',
    explanation: '',
    explanationLatex: 'a = 2^{0.5} \\approx 1.41\\\\[4pt]b = (1/3)^{0.5} \\approx 0.58\\\\[4pt]c = \\log_3 2 \\approx 0.63\\\\[4pt]\\therefore a > c > b',
  },
  {
    id: 's3e-e3',
    question: '',
    questionLatex: '\\text{函数 } y = \\left(\\dfrac{1}{2}\\right)^x \\text{ 在 } [-1, 2] \\text{ 上的最大值为}',
    type: 'choice',
    options: [
      { label: 'A', value: '4' },
      { label: 'B', value: '2' },
      { label: 'C', value: '\\dfrac{1}{4}', isLatex: true },
      { label: 'D', value: '\\dfrac{1}{2}', isLatex: true },
    ],
    correctAnswer: 'B',
    explanation: '',
    explanationLatex: 'y = (1/2)^x\\text{ 是减函数}\\\\[4pt]\\text{在 }[-1,2]\\text{ 上，}x=-1\\text{ 时最大}\\\\[4pt]y_{\\max} = (1/2)^{-1} = 2',
  },
  {
    id: 's3e-e4',
    question: '',
    questionLatex: '\\text{若 } \\log_a 2 > 1\\text{，则 } a \\text{ 的取值范围是}',
    type: 'choice',
    options: [
      { label: 'A', value: '(1, 2)', isLatex: true },
      { label: 'B', value: '(0, 2)', isLatex: true },
      { label: 'C', value: '(2, +\\infty)', isLatex: true },
      { label: 'D', value: '(0, 1)', isLatex: true },
    ],
    correctAnswer: 'A',
    explanation: '',
    explanationLatex: '\\log_a 2 > 1 = \\log_a a\\\\[4pt]\\text{若 }a > 1\\text{（递增）：}2 > a \\Rightarrow 1 < a < 2\\\\[4pt]\\text{若 }0 < a < 1\\text{（递减）：}2 < a\\text{，矛盾}\\\\[4pt]\\therefore a \\in (1, 2)',
  },
  {
    id: 's3e-e5',
    question: '',
    questionLatex: '\\text{幂函数 } y = x^\\alpha \\text{ 的图像过点 } (8, 2)\\text{，则 } \\alpha = ',
    type: 'choice',
    options: [
      { label: 'A', value: '3' },
      { label: 'B', value: '\\dfrac{1}{3}', isLatex: true },
      { label: 'C', value: '\\dfrac{1}{2}', isLatex: true },
      { label: 'D', value: '-\\dfrac{1}{3}', isLatex: true },
    ],
    correctAnswer: 'B',
    explanation: '',
    explanationLatex: '8^\\alpha = 2\\\\[4pt](2^3)^\\alpha = 2^1\\\\[4pt]3\\alpha = 1 \\Rightarrow \\alpha = \\dfrac{1}{3}',
  },
  {
    id: 's3e-e6',
    question: '',
    questionLatex: '\\text{已知 } 2^a = 5\\text{，则 } 2^{a+1} - 2^{a-1} = ',
    type: 'choice',
    options: [
      { label: 'A', value: '\\dfrac{5}{2}', isLatex: true },
      { label: 'B', value: '5', isLatex: true },
      { label: 'C', value: '\\dfrac{15}{2}', isLatex: true },
      { label: 'D', value: '10', isLatex: true },
    ],
    correctAnswer: 'C',
    explanation: '',
    explanationLatex: '2^{a+1} - 2^{a-1} = 2 \\cdot 2^a - \\dfrac{2^a}{2}\\\\[4pt]= 2 \\times 5 - \\dfrac{5}{2} = 10 - \\dfrac{5}{2} = \\dfrac{15}{2}',
  },
];

// ═══════ 三、函数图像与零点（5 题） ═══════
export const stage3GraphQuestions: QuizQuestionData[] = [
  {
    id: 's3e-g1',
    question: '',
    questionLatex: '\\text{函数 } f(x) = x^2 - 4x + 3 \\text{ 的零点为}',
    type: 'choice',
    options: [
      { label: 'A', value: '1 \\text{ 和 } 3', isLatex: true },
      { label: 'B', value: '-1 \\text{ 和 } -3', isLatex: true },
      { label: 'C', value: '1 \\text{ 和 } -3', isLatex: true },
      { label: 'D', value: '-1 \\text{ 和 } 3', isLatex: true },
    ],
    correctAnswer: 'A',
    explanation: '',
    explanationLatex: 'x^2 - 4x + 3 = (x-1)(x-3) = 0\\\\[4pt]x = 1 \\text{ 或 } x = 3',
  },
  {
    id: 's3e-g2',
    question: '',
    questionLatex: '\\text{函数 } f(x) = e^x - 2 \\text{ 的零点所在区间为}',
    type: 'choice',
    options: [
      { label: 'A', value: '(-1, 0)', isLatex: true },
      { label: 'B', value: '(0, 1)', isLatex: true },
      { label: 'C', value: '(1, 2)', isLatex: true },
      { label: 'D', value: '(-2, -1)', isLatex: true },
    ],
    correctAnswer: 'B',
    explanation: '',
    explanationLatex: 'f(0) = e^0 - 2 = -1 < 0\\\\[4pt]f(1) = e - 2 \\approx 0.72 > 0\\\\[4pt]\\text{异号，零点在 }(0, 1)\\text{ 内}',
  },
  {
    id: 's3e-g3',
    question: '',
    questionLatex: '\\text{方程 } 2^x = 3 - x \\text{ 的实数根的个数为}',
    type: 'choice',
    options: [
      { label: 'A', value: '0' },
      { label: 'B', value: '1' },
      { label: 'C', value: '2' },
      { label: 'D', value: '3' },
    ],
    correctAnswer: 'B',
    explanation: '',
    explanationLatex: '\\text{令 }y_1 = 2^x\\text{（递增）}, y_2 = 3-x\\text{（递减）}\\\\[4pt]\\text{一增一减，至多一个交点}\\\\[4pt]x=1\\text{ 时：}2^1=2,\\; 3-1=2\\text{，恰好相交}\\\\[4pt]\\therefore \\text{有且仅有 }1\\text{ 个实数根}',
  },
  {
    id: 's3e-g4',
    question: '',
    questionLatex: '\\text{若 } f(x) = x^3 - x \\text{，则 } f(x) \\text{ 在 } [-2, 2] \\text{ 上的零点个数为}',
    type: 'choice',
    options: [
      { label: 'A', value: '1' },
      { label: 'B', value: '2' },
      { label: 'C', value: '3' },
      { label: 'D', value: '4' },
    ],
    correctAnswer: 'C',
    explanation: '',
    explanationLatex: 'x^3 - x = x(x^2-1) = x(x-1)(x+1) = 0\\\\[4pt]x = 0,\\; 1,\\; -1\\\\[4pt]\\text{三个零点都在 }[-2,2]\\text{ 内}',
  },
  {
    id: 's3e-g5',
    question: '',
    questionLatex: '\\text{函数 } f(x) = \\ln x - \\dfrac{2}{x} \\text{ 在 }(0,+\\infty)\\text{ 上零点的个数为}',
    type: 'choice',
    options: [
      { label: 'A', value: '0' },
      { label: 'B', value: '1' },
      { label: 'C', value: '2' },
      { label: 'D', value: '3' },
    ],
    correctAnswer: 'B',
    explanation: '',
    explanationLatex: 'f(1) = 0 - 2 = -2 < 0\\\\[4pt]f(e^2) = 2 - 2/e^2 \\approx 1.73 > 0\\\\[4pt]f\'(x) = \\dfrac{1}{x} + \\dfrac{2}{x^2} > 0\\text{（恒正，严格递增）}\\\\[4pt]\\text{严格递增 + 异号 }\\Rightarrow\\text{ 恰好 }1\\text{ 个零点}',
  },
];

// ═══════ 四、导数基础（5 题） ═══════
export const stage3DerivQuestions: QuizQuestionData[] = [
  {
    id: 's3e-d1',
    question: '',
    questionLatex: '\\text{曲线 } y = x^3 \\text{ 在 } x = 2 \\text{ 处的切线斜率为}',
    type: 'choice',
    options: [
      { label: 'A', value: '8' },
      { label: 'B', value: '12' },
      { label: 'C', value: '6' },
      { label: 'D', value: '4' },
    ],
    correctAnswer: 'B',
    explanation: '',
    explanationLatex: 'y\' = 3x^2\\\\[4pt]y\'(2) = 3 \\times 4 = 12',
  },
  {
    id: 's3e-d2',
    question: '',
    questionLatex: '\\text{函数 } f(x) = x^3 - 3x^2 + 1 \\text{ 的单调递减区间为}',
    type: 'choice',
    options: [
      { label: 'A', value: '(0, 2)', isLatex: true },
      { label: 'B', value: '(-\\infty, 0) \\cup (2, +\\infty)', isLatex: true },
      { label: 'C', value: '(-\\infty, 0)', isLatex: true },
      { label: 'D', value: '(2, +\\infty)', isLatex: true },
    ],
    correctAnswer: 'A',
    explanation: '',
    explanationLatex: 'f\'(x) = 3x^2 - 6x = 3x(x-2)\\\\[4pt]f\' < 0 \\Rightarrow 0 < x < 2\\\\[4pt]\\text{递减区间 }(0, 2)',
  },
  {
    id: 's3e-d3',
    question: '',
    questionLatex: '\\text{函数 } f(x) = x^3 - 12x \\text{ 的极小值为}',
    type: 'choice',
    options: [
      { label: 'A', value: '-16' },
      { label: 'B', value: '16' },
      { label: 'C', value: '-2' },
      { label: 'D', value: '2' },
    ],
    correctAnswer: 'A',
    explanation: '',
    explanationLatex: 'f\'(x) = 3x^2 - 12 = 0 \\Rightarrow x = \\pm 2\\\\[4pt]f\'\'(x) = 6x\\\\[4pt]f\'\'(2) = 12 > 0 \\Rightarrow x=2\\text{ 是极小值点}\\\\[4pt]f(2) = 8 - 24 = -16',
  },
  {
    id: 's3e-d4',
    question: '',
    questionLatex: '\\text{函数 } f(x) = xe^x \\text{ 的单调递增区间为}',
    type: 'choice',
    options: [
      { label: 'A', value: '(-1, +\\infty)', isLatex: true },
      { label: 'B', value: '(-\\infty, -1)', isLatex: true },
      { label: 'C', value: '(0, +\\infty)', isLatex: true },
      { label: 'D', value: '(-\\infty, 0)', isLatex: true },
    ],
    correctAnswer: 'A',
    explanation: '',
    explanationLatex: 'f\'(x) = e^x + xe^x = (1+x)e^x\\\\[4pt]\\text{因 }e^x > 0\\text{，所以 }f\' > 0 \\Leftrightarrow 1+x > 0 \\Leftrightarrow x > -1\\\\[4pt]\\text{递增区间 }(-1, +\\infty)',
  },
  {
    id: 's3e-d5',
    question: '',
    questionLatex: '\\text{函数 } f(x) = 2x^3 - 3x^2 \\text{ 在 } [-1, 2] \\text{ 上的最小值为}',
    type: 'choice',
    options: [
      { label: 'A', value: '-5' },
      { label: 'B', value: '-1' },
      { label: 'C', value: '0' },
      { label: 'D', value: '4' },
    ],
    correctAnswer: 'A',
    explanation: '',
    explanationLatex: 'f\'(x) = 6x^2 - 6x = 6x(x-1) = 0 \\Rightarrow x=0,\\;1\\\\[4pt]f(-1) = -2 - 3 = -5\\\\[4pt]f(0) = 0\\\\[4pt]f(1) = 2 - 3 = -1\\\\[4pt]f(2) = 16 - 12 = 4\\\\[4pt]\\text{最小值 }f(-1) = -5',
  },
];

// 合并导出（供 QuizPanel 使用）
export const stage3ExamQuestions: QuizQuestionData[] = [
  ...stage3ConceptQuestions,
  ...stage3ElemFuncQuestions,
  ...stage3GraphQuestions,
  ...stage3DerivQuestions,
];

// ── 综合题（解答题，仅打印试卷使用） ──
export const stage3EssayQuestions: EssayQuestion[] = [
  {
    id: 's3e-essay-1',
    questionLatex:
      '\\text{（1）计算 } 2\\lg 2 + \\lg 25\\text{；}\\\\[6pt]' +
      '\\text{（2）已知 } 3^a = 2\\text{，求 } \\log_9 4 \\text{ 的值（用 } a \\text{ 表示）。}',
    score: 9,
    lines: 10,
    answerLatex: [
      '\\text{（1）解：}\\\\[4pt]' +
      '\\text{利用对数幂法则 }n\\lg a = \\lg a^n\\text{：}\\\\[4pt]' +
      '2\\lg 2 = \\lg 2^2 = \\lg 4 \\\\[4pt]' +
      '\\text{再利用对数乘法法则 }\\lg a + \\lg b = \\lg(ab)\\text{：}\\\\[4pt]' +
      '\\lg 4 + \\lg 25 = \\lg(4 \\times 25) = \\lg 100 = 2',
      '\\text{（2）解：}\\\\[4pt]' +
      '\\text{由 }3^a = 2\\text{，两边取以 3 为底的对数：}a = \\log_3 2 \\\\[4pt]' +
      '\\text{目标：}\\log_9 4\\text{，先拆 4 = }2^2\\text{：}\\\\[4pt]' +
      '\\log_9 4 = \\log_9 2^2 = 2\\log_9 2 \\\\[4pt]' +
      '\\text{用换底公式 }\\log_9 2 = \\dfrac{\\log_3 2}{\\log_3 9} = \\dfrac{a}{2}\\text{（因为 }\\log_3 9 = 2\\text{）}\\\\[4pt]' +
      '\\therefore \\log_9 4 = 2 \\times \\dfrac{a}{2} = a',
    ],
  },
  {
    id: 's3e-essay-2',
    questionLatex:
      '\\text{已知 } f(x) \\text{ 是定义在 } \\mathbb{R} \\text{ 上的奇函数，且当 } x > 0 \\text{ 时，} f(x) = x^2 - 2x\\text{。}\\\\[6pt]' +
      '\\text{（1）求 } f(-1) \\text{ 的值；}\\\\[4pt]' +
      '\\text{（2）写出 } f(x) \\text{ 在 } \\mathbb{R} \\text{ 上的解析式。}',
    score: 9,
    lines: 10,
    answerLatex: [
      '\\text{（1）解：}\\\\[4pt]' +
      '\\text{奇函数性质：}f(-x) = -f(x)\\\\[4pt]' +
      '\\text{即 }f(-1) = -f(1) \\\\[4pt]' +
      '\\text{先求 }f(1)\\text{：因为 }1 > 0\\text{，用已知公式}\\\\[4pt]' +
      'f(1) = 1^2 - 2 \\times 1 = 1 - 2 = -1 \\\\[4pt]' +
      '\\therefore f(-1) = -f(1) = -(-1) = 1',
      '\\text{（2）解：分三段讨论}\\\\[4pt]' +
      '\\textbf{\\text{当 }x > 0\\text{ 时：}}f(x) = x^2 - 2x\\text{（已知）}\\\\[4pt]' +
      '\\textbf{\\text{当 }x = 0\\text{ 时：}}\\text{奇函数必过原点，}f(0) = 0 \\\\[4pt]' +
      '\\textbf{\\text{当 }x < 0\\text{ 时：}}\\text{此时 }-x > 0\\text{，可以用已知公式}\\\\[4pt]' +
      'f(-x) = (-x)^2 - 2(-x) = x^2 + 2x \\\\[4pt]' +
      '\\text{由 }f(-x) = -f(x)\\text{，得：}\\\\[4pt]' +
      'f(x) = -f(-x) = -(x^2 + 2x) = -x^2 - 2x \\\\[4pt]' +
      '\\therefore f(x) = \\begin{cases} x^2 - 2x, & x > 0 \\\\ 0, & x = 0 \\\\ -x^2 - 2x, & x < 0 \\end{cases}',
    ],
  },
  {
    id: 's3e-essay-3',
    questionLatex:
      '\\text{已知 } f(x) = x^3 - 3x + 1\\text{。}\\\\[6pt]' +
      '\\text{（1）求曲线 } y = f(x) \\text{ 在 } x = 1 \\text{ 处的切线方程；}\\\\[4pt]' +
      '\\text{（2）求 } f(x) \\text{ 的单调递增区间。}',
    score: 9,
    lines: 12,
    answerLatex: [
      '\\text{（1）解：}\\\\[4pt]' +
      '\\text{第一步：求导}\\\\[4pt]' +
      'f\'(x) = 3x^2 - 3 \\\\[4pt]' +
      '\\text{第二步：求切点处的斜率和纵坐标}\\\\[4pt]' +
      'f\'(1) = 3 \\times 1^2 - 3 = 0\\text{（斜率为 0）}\\\\[4pt]' +
      'f(1) = 1^3 - 3 \\times 1 + 1 = -1 \\\\[4pt]' +
      '\\text{第三步：写切线方程（点斜式）}\\\\[4pt]' +
      '\\text{切点 }(1, -1)\\text{，斜率 }k = 0\\\\[4pt]' +
      '\\Rightarrow \\text{切线：}y = -1',
      '\\text{（2）解：}\\\\[4pt]' +
      '\\text{令 }f\'(x) > 0\\text{ 找递增区间：}\\\\[4pt]' +
      'f\'(x) = 3(x+1)(x-1) \\\\[4pt]' +
      '\\text{列符号表：}\\\\[4pt]' +
      'x < -1\\text{：}f\' > 0\\text{ \\checkmark}\\\\[4pt]' +
      '-1 < x < 1\\text{：}f\' < 0\\\\[4pt]' +
      'x > 1\\text{：}f\' > 0\\text{ \\checkmark}\\\\[4pt]' +
      '\\therefore \\text{递增区间：}(-\\infty, -1)\\text{ 和 }(1, +\\infty)',
    ],
  },
  {
    id: 's3e-essay-4',
    questionLatex:
      '\\text{已知 } f(x) = x^3 - 6x^2 + 9x + 1\\text{。}\\\\[6pt]' +
      '\\text{（1）求 } f(x) \\text{ 的极大值和极小值；}\\\\[4pt]' +
      '\\text{（2）求 } f(x) \\text{ 在 } [0, 4] \\text{ 上的最大值和最小值。}',
    score: 9,
    lines: 10,
    answerLatex: [
      '\\text{（1）解：}\\\\[4pt]' +
      'f\'(x) = 3x^2 - 12x + 9 = 3(x-1)(x-3) \\\\[4pt]' +
      'f\'(x) = 0 \\Rightarrow x = 1\\text{ 或 }x = 3 \\\\[4pt]' +
      '\\begin{array}{c|ccccc} x & (-\\infty,1) & 1 & (1,3) & 3 & (3,+\\infty) \\\\ \\hline f\' & + & 0 & - & 0 & + \\\\ f & \\nearrow & \\text{极大} & \\searrow & \\text{极小} & \\nearrow \\end{array} \\\\[4pt]' +
      '\\text{极大值：}f(1) = 1 - 6 + 9 + 1 = 5 \\\\[4pt]' +
      '\\text{极小值：}f(3) = 27 - 54 + 27 + 1 = 1',
      '\\text{（2）解：}\\\\[4pt]' +
      '\\text{闭区间最值 = 比较端点值和区间内极值}\\\\[4pt]' +
      'f(0) = 1 \\\\[4pt]' +
      'f(1) = 5\\text{（极大值点）}\\\\[4pt]' +
      'f(3) = 1\\text{（极小值点）}\\\\[4pt]' +
      'f(4) = 64 - 96 + 36 + 1 = 5 \\\\[4pt]' +
      '\\therefore \\text{最大值 }5\\text{，最小值 }1',
    ],
  },
  {
    id: 's3e-essay-5',
    questionLatex:
      '\\text{已知 } f(x) = \\ln x - x + 2\\text{。}\\\\[6pt]' +
      '\\text{（1）用零点存在性定理证明方程 } f(x) = 0 \\text{ 在 } (e,\\, e^2) \\text{ 内有解；}\\\\[4pt]' +
      '\\text{（2）求 } f(x) \\text{ 的最大值。}',
    score: 9,
    lines: 10,
    answerLatex: [
      '\\text{（1）解：}\\\\[4pt]' +
      'f(x) = \\ln x - x + 2\\text{ 在 }(0,+\\infty)\\text{ 上连续}\\\\[4pt]' +
      'f(e) = 1 - e + 2 = 3 - e \\approx 0.28 > 0 \\\\[4pt]' +
      'f(e^2) = 2 - e^2 + 2 = 4 - e^2 \\approx -3.39 < 0 \\\\[4pt]' +
      'f(e) \\cdot f(e^2) < 0 \\\\[4pt]' +
      '\\therefore \\text{由零点存在性定理，}\\\\[4pt]' +
      'f(x)=0\\text{ 在 }(e, e^2)\\text{ 内有解}',
      '\\text{（2）解：}\\\\[4pt]' +
      'f\'(x) = \\dfrac{1}{x} - 1 = \\dfrac{1 - x}{x}\\;(x > 0) \\\\[4pt]' +
      'f\'(x) = 0 \\Rightarrow x = 1 \\\\[4pt]' +
      '0 < x < 1\\text{ 时 }f\' > 0\\text{，递增}\\\\[4pt]' +
      'x > 1\\text{ 时 }f\' < 0\\text{，递减}\\\\[4pt]' +
      '\\text{所以 }x = 1\\text{ 是最大值点}\\\\[4pt]' +
      '\\therefore f(1) = \\ln 1 - 1 + 2 = 1',
    ],
  },
  {
    id: 's3e-essay-6',
    questionLatex:
      '\\text{已知 } f(x) = \\dfrac{2^x - 1}{2^x + 1}\\text{。}\\\\[6pt]' +
      '\\text{（1）判断 } f(x) \\text{ 的奇偶性，并证明；}\\\\[4pt]' +
      '\\text{（2）证明 } f(x) \\text{ 在 } \\mathbb{R} \\text{ 上单调递增。}',
    score: 9,
    lines: 10,
    answerLatex: [
      '\\text{（1）解：}\\\\[4pt]' +
      'f(-x) = \\dfrac{2^{-x} - 1}{2^{-x} + 1}\\\\[4pt]' +
      '\\text{分子分母同乘 }2^x\\text{：}\\\\[4pt]' +
      '= \\dfrac{1 - 2^x}{1 + 2^x} = -\\dfrac{2^x - 1}{2^x + 1}\\\\[4pt]' +
      '= -f(x)\\\\[4pt]' +
      '\\therefore f(x) \\text{ 是奇函数}',
      '\\text{（2）证明：设 }x_1 < x_2\\text{，则}\\\\[4pt]' +
      'f(x_2) - f(x_1) = \\dfrac{2^{x_2} - 1}{2^{x_2} + 1} - \\dfrac{2^{x_1} - 1}{2^{x_1} + 1}\\\\[4pt]' +
      '= \\dfrac{2(2^{x_2} - 2^{x_1})}{(2^{x_2} + 1)(2^{x_1} + 1)}\\\\[4pt]' +
      '\\text{因 }x_2 > x_1 \\Rightarrow 2^{x_2} > 2^{x_1}\\\\[4pt]' +
      '\\text{分子 > 0，分母 > 0}\\\\[4pt]' +
      '\\therefore f(x_2) > f(x_1)\\text{，单调递增}',
    ],
  },
];
