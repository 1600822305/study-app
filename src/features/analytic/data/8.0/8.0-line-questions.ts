import type { QuizQuestionData } from '@/types';

/** 即时训练 — 倾斜角、斜率、直线方程、两直线关系（8 题） */
export const lineRelationPractice: QuizQuestionData[] = [
  // ── 一、倾斜角与斜率 ──
  {
    id: 'lr-1',
    question: '直线的倾斜角 α 的取值范围是',
    questionLatex: '\\text{直线的倾斜角 }\\alpha\\text{ 的取值范围是}',
    options: [
      { label: 'A', value: '[0°, 180°)', isLatex: true },
      { label: 'B', value: '[0°, 180°]', isLatex: true },
      { label: 'C', value: '(0°, 180°)', isLatex: true },
      { label: 'D', value: '[0°, 360°)', isLatex: true },
    ],
    correctAnswer: '[0°, 180°)',
  },
  {
    id: 'lr-2',
    type: 'blank',
    question: '已知 A(1, 3)，B(4, 9)，则直线 AB 的斜率 k = ______',
    questionLatex: '\\text{已知 }A(1,3)\\text{，}B(4,9)\\text{，则直线 }AB\\text{ 的斜率 }k = \\underline{\\qquad}',
    correctAnswer: '2',
  },
  // ── 二、直线方程五种形式 ──
  {
    id: 'lr-3',
    type: 'blank',
    question: '过点 (2, 3)，斜率为 -2 的直线方程是 ______',
    questionLatex: '\\text{过点 }(2,3)\\text{，斜率为 }-2\\text{ 的直线方程是 }\\underline{\\qquad\\qquad}',
    correctAnswer: '2x+y-7=0',
    acceptableAnswers: ['2x + y - 7 = 0', 'y=-2x+7'],
  },
  {
    id: 'lr-4',
    type: 'blank',
    question: '直线 3x - y + 6 = 0 的斜率 k = ______，y 轴截距 b = ______',
    questionLatex: '\\text{直线 }3x - y + 6 = 0\\text{ 的斜率 }k = \\underline{\\quad}\\text{，}y\\text{ 轴截距 }b = \\underline{\\quad}',
    correctAnswer: 'k=3, b=6',
    acceptableAnswers: ['k=3,b=6', '3, 6', '3，6', 'k=3，b=6'],
  },
  {
    id: 'lr-5',
    type: 'blank',
    question: '在 x 轴上截距为 2，在 y 轴上截距为 -3 的直线方程是 ______',
    questionLatex: '\\text{在 }x\\text{ 轴上截距为 }2\\text{，在 }y\\text{ 轴上截距为 }-3\\text{ 的直线方程是 }\\underline{\\qquad\\qquad}',
    correctAnswer: '3x-2y-6=0',
    acceptableAnswers: ['3x - 2y - 6 = 0'],
  },
  // ── 三、两直线位置关系 ──
  {
    id: 'lr-6',
    type: 'blank',
    question: '直线 y = 3x + 1 与 y = 3x - 5 的位置关系是 ______',
    questionLatex: '\\text{直线 }y=3x+1\\text{ 与 }y=3x-5\\text{ 的位置关系是 }\\underline{\\qquad}',
    correctAnswer: '平行',
  },
  {
    id: 'lr-7',
    type: 'blank',
    question: '过点 (2, 1) 且平行于直线 x + 2y - 3 = 0 的直线方程是 ______',
    questionLatex: '\\text{过点 }(2,1)\\text{ 且平行于直线 }x+2y-3=0\\text{ 的直线方程是 }\\underline{\\qquad\\qquad}',
    correctAnswer: 'x+2y-4=0',
    acceptableAnswers: ['x + 2y - 4 = 0'],
  },
  {
    id: 'lr-8',
    type: 'blank',
    question: '直线 x + y - 1 = 0 与 x - y + 3 = 0 的交点坐标是 ______',
    questionLatex: '\\text{直线 }x+y-1=0\\text{ 与 }x-y+3=0\\text{ 的交点坐标是 }\\underline{\\qquad\\qquad}',
    correctAnswer: '(-1, 2)',
    acceptableAnswers: ['(-1,2)', '(-1 , 2)'],
  },
  {
    id: 'lr-9',
    type: 'blank',
    question: '过点 (1, 3) 且垂直于直线 3x - y + 2 = 0 的直线方程是 ______',
    questionLatex: '\\text{过点 }(1,3)\\text{ 且垂直于直线 }3x-y+2=0\\text{ 的直线方程是 }\\underline{\\qquad\\qquad}',
    correctAnswer: 'x+3y-10=0',
    acceptableAnswers: ['x + 3y - 10 = 0'],
  },
];

/** 即时训练 — 点关于直线对称 + 直线关于点对称（4 题） */
export const lineSymPractice: QuizQuestionData[] = [
  {
    id: 'ls-1',
    type: 'blank',
    question: '求点 (3, -1) 关于直线 y = x 的对称点',
    questionLatex: '\\text{求点 }(3,-1)\\text{ 关于直线 }y = x\\text{ 的对称点}\\underline{\\qquad\\qquad}',
    correctAnswer: '(-1, 3)',
    acceptableAnswers: ['(-1,3)', '(-1 , 3)'],
  },
  {
    id: 'ls-2',
    type: 'blank',
    question: '求点 A(2, 1) 关于直线 x + y - 4 = 0 的对称点',
    questionLatex: '\\text{求点 }A(2,1)\\text{ 关于直线 }x + y - 4 = 0\\text{ 的对称点}\\underline{\\qquad\\qquad}',
    correctAnswer: '(3, 2)',
    acceptableAnswers: ['(3,2)', '(3 , 2)'],
  },
  {
    id: 'ls-3',
    type: 'blank',
    question: '求直线 x + 2y - 3 = 0 关于点 C(2, 1) 的对称直线方程',
    questionLatex: '\\text{求直线 }x + 2y - 3 = 0\\text{ 关于点 }C(2,1)\\text{ 的对称直线方程}\\underline{\\qquad\\qquad}',
    correctAnswer: 'x+2y-5=0',
    acceptableAnswers: ['x + 2y - 5 = 0'],
  },
  {
    id: 'ls-4',
    type: 'blank',
    question: '求直线 3x - y + 2 = 0 关于点 C(1, -1) 的对称直线方程',
    questionLatex: '\\text{求直线 }3x - y + 2 = 0\\text{ 关于点 }C(1,-1)\\text{ 的对称直线方程}\\underline{\\qquad\\qquad}',
    correctAnswer: '3x-y-10=0',
    acceptableAnswers: ['3x - y - 10 = 0'],
  },
];

/** 即时训练 — 直线关于直线对称（相交）（4 题） */
export const lineSymIntersectPractice: QuizQuestionData[] = [
  {
    id: 'lsi-1',
    type: 'blank',
    question: '求直线 3x + y + 3 = 0 关于直线 x - y + 1 = 0 的对称直线方程',
    questionLatex: '\\text{求直线 }3x + y + 3 = 0\\text{ 关于直线 }x - y + 1 = 0\\text{ 的对称直线方程}\\underline{\\qquad\\qquad}',
    correctAnswer: 'x+3y+1=0',
    acceptableAnswers: ['x + 3y + 1 = 0'],
  },
  {
    id: 'lsi-2',
    type: 'blank',
    question: '已知直线 y = kx + 1 关于直线 y = x 对称的直线过点 (3, 1)，求 k 的值',
    questionLatex: '\\text{已知 }y = kx + 1\\text{ 关于 }y = x\\text{ 对称的直线过点 }(3,\\,1)\\text{，求 }k = \\underline{\\qquad}',
    correctAnswer: '2',
  },
  {
    id: 'lsi-3',
    type: 'blank',
    question: '求直线 x + 2y - 5 = 0 关于直线 x + y - 2 = 0 的对称直线方程',
    questionLatex: '\\text{求直线 }x + 2y - 5 = 0\\text{ 关于直线 }x + y - 2 = 0\\text{ 的对称直线方程}\\underline{\\qquad\\qquad}',
    correctAnswer: '2x+y-1=0',
    acceptableAnswers: ['2x + y - 1 = 0'],
  },
  {
    id: 'lsi-4',
    type: 'blank',
    question: '已知直线 x + 2y - 1 = 0 关于直线 y = x + b 对称后得到 2x + y + 1 = 0，求 b 的值',
    questionLatex: '\\text{已知 }x + 2y - 1 = 0\\text{ 关于 }y = x + b\\text{ 对称后得到 }2x + y + 1 = 0\\text{，求 }b = \\underline{\\qquad}',
    correctAnswer: '2',
  },
];

/** 即时训练 — 直线关于直线对称（平行）（4 题） */
export const lineSymParallelPractice: QuizQuestionData[] = [
  {
    id: 'lsp-1',
    type: 'blank',
    question: '求直线 2x + y - 3 = 0 关于直线 2x + y + 1 = 0 的对称直线方程',
    questionLatex: '\\text{求直线 }2x + y - 3 = 0\\text{ 关于直线 }2x + y + 1 = 0\\text{ 的对称直线方程}\\underline{\\qquad\\qquad}',
    correctAnswer: '2x+y+5=0',
    acceptableAnswers: ['2x + y + 5 = 0'],
  },
  {
    id: 'lsp-2',
    type: 'blank',
    question: '求直线 x - 2y + 6 = 0 关于直线 x - 2y + 2 = 0 的对称直线方程',
    questionLatex: '\\text{求直线 }x - 2y + 6 = 0\\text{ 关于直线 }x - 2y + 2 = 0\\text{ 的对称直线方程}\\underline{\\qquad\\qquad}',
    correctAnswer: 'x-2y-2=0',
    acceptableAnswers: ['x - 2y - 2 = 0'],
  },
  {
    id: 'lsp-3',
    type: 'blank',
    question: '已知直线 3x + y - 2 = 0 关于直线 l 对称后得到 3x + y + 4 = 0，求对称轴 l 的方程',
    questionLatex: '\\text{已知 }3x + y - 2 = 0\\text{ 关于 }l\\text{ 对称后得到 }3x + y + 4 = 0\\text{，求 }l\\text{ 的方程}\\underline{\\qquad\\qquad}',
    correctAnswer: '3x+y+1=0',
    acceptableAnswers: ['3x + y + 1 = 0'],
  },
  {
    id: 'lsp-4',
    type: 'blank',
    question: '已知直线 x + y + 1 = 0 关于直线 x + y + b = 0 对称后得到 x + y - 5 = 0，求 b 的值',
    questionLatex: '\\text{已知 }x + y + 1 = 0\\text{ 关于 }x + y + b = 0\\text{ 对称后得到 }x + y - 5 = 0\\text{，求 }b = \\underline{\\qquad}',
    correctAnswer: '-2',
  },
];

/** 即时训练 — 夹角公式 + 点关于点对称（6 题） */
export const angleSymPractice: QuizQuestionData[] = [
  {
    id: 'as-1',
    type: 'blank',
    question: '直线 y = 2x + 1 与 y = 3x - 2 的夹角 θ 满足 tanθ = ______',
    questionLatex: '\\text{直线 }y=2x+1\\text{ 与 }y=3x-2\\text{ 的夹角 }\\theta\\text{ 满足 }\\tan\\theta = \\underline{\\qquad}',
    correctAnswer: '1/7',
    acceptableAnswers: ['\\frac{1}{7}', '1/7'],
  },
  {
    id: 'as-2',
    type: 'blank',
    question: '直线 y = x 与 y = -√3/3 x 的夹角为 ______°',
    questionLatex: '\\text{直线 }y=x\\text{ 与 }y=-\\dfrac{\\sqrt{3}}{3}x\\text{ 的夹角为 }\\underline{\\quad}°',
    correctAnswer: '75',
  },
  {
    id: 'as-3',
    type: 'blank',
    question: '点 A(4, -2) 关于点 C(1, 3) 的对称点为 ______',
    questionLatex: '\\text{点 }A(4,-2)\\text{ 关于点 }C(1,3)\\text{ 的对称点为 }\\underline{\\qquad\\qquad}',
    correctAnswer: '(-2, 8)',
    acceptableAnswers: ['(-2,8)', '(-2 , 8)'],
  },
  {
    id: 'as-4',
    type: 'blank',
    question: '若点 B 关于点 M(2, 0) 的对称点为 B\'(5, -3)，则 B = ______',
    questionLatex: '\\text{若点 }B\\text{ 关于点 }M(2,0)\\text{ 的对称点为 }B\'(5,-3)\\text{，则 }B = \\underline{\\qquad\\qquad}',
    correctAnswer: '(-1, 3)',
    acceptableAnswers: ['(-1,3)', '(-1 , 3)'],
  },
  {
    id: 'as-5',
    type: 'blank',
    question: '直线 l₁: y = ½x + 3 与 l₂: y = -2x + 1 的夹角 θ = ______°',
    questionLatex: '\\text{直线 }l_1{:}\\; y = \\dfrac{1}{2}x + 3\\text{ 与 }l_2{:}\\; y = -2x + 1\\text{ 的夹角 }\\theta = \\underline{\\quad}°',
    correctAnswer: '90',
  },
  {
    id: 'as-6',
    type: 'blank',
    question: '已知点 P(2, -1) 关于点 Q 的对称点为 P\'(-4, 5)，则点 Q 的坐标为 ______',
    questionLatex: '\\text{已知点 }P(2,-1)\\text{ 关于点 }Q\\text{ 的对称点为 }P\'(-4,5)\\text{，则点 }Q\\text{ 的坐标为 }\\underline{\\qquad\\qquad}',
    correctAnswer: '(-1, 2)',
    acceptableAnswers: ['(-1,2)', '(-1 , 2)'],
  },
];
