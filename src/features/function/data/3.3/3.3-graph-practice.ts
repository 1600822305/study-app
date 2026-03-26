import type { QuizQuestionData } from '@/types';

// ── 第一节：零点的概念（5题·高考难度） ──
export const graphPractice1: QuizQuestionData[] = [
  {
    id: 'fgp1-1',
    question: '',
    questionLatex: '\\text{函数 }f(x) = x^2 - 5x + 6\\text{ 的零点是？}',
    type: 'choice',
    options: [
      { label: 'A', value: 'x = 2\\text{ 和 }x = 3', isLatex: true },
      { label: 'B', value: '(2, 0)\\text{ 和 }(3, 0)', isLatex: true },
      { label: 'C', value: 'x = -2\\text{ 和 }x = -3', isLatex: true },
      { label: 'D', value: 'x = 1\\text{ 和 }x = 6', isLatex: true },
    ],
    correctAnswer: 'x = 2\\text{ 和 }x = 3',
  },
  {
    id: 'fgp1-2',
    question: '',
    questionLatex: '\\text{函数 }f(x) = 2^x - 2\\text{ 的零点个数是？}',
    type: 'choice',
    options: [
      { label: 'A', value: '0', isLatex: true },
      { label: 'B', value: '1', isLatex: true },
      { label: 'C', value: '2', isLatex: true },
      { label: 'D', value: '\\text{无法确定}', isLatex: true },
    ],
    correctAnswer: '1',
  },
  {
    id: 'fgp1-3',
    question: '',
    questionLatex: '\\text{方程 }x^2 - 2x - 3 = 0\\text{ 的根与函数 }f(x) = x^2 - 2x - 3\\text{ 的零点的关系是？}',
    type: 'choice',
    options: [
      { label: 'A', value: '\\text{方程的根就是函数的零点}', isLatex: true },
      { label: 'B', value: '\\text{方程的根是函数图像与 x 轴的交点}', isLatex: true },
      { label: 'C', value: '\\text{两者没有关系}', isLatex: true },
      { label: 'D', value: '\\text{方程的根比零点多}', isLatex: true },
    ],
    correctAnswer: '\\text{方程的根就是函数的零点}',
  },
  {
    id: 'fgp1-4',
    question: '',
    questionLatex: '\\text{函数 }f(x) = x^2 + 2x + 1\\text{ 的零点个数是？}',
    type: 'choice',
    options: [
      { label: 'A', value: '0', isLatex: true },
      { label: 'B', value: '1', isLatex: true },
      { label: 'C', value: '2', isLatex: true },
      { label: 'D', value: '\\text{无穷多个}', isLatex: true },
    ],
    correctAnswer: '1',
  },
  {
    id: 'fgp1-5',
    question: '',
    questionLatex: '\\text{函数 }f(x) = x^2 + 1\\text{ 的零点个数是？}',
    type: 'choice',
    options: [
      { label: 'A', value: '0', isLatex: true },
      { label: 'B', value: '1', isLatex: true },
      { label: 'C', value: '2', isLatex: true },
      { label: 'D', value: '\\text{无法确定}', isLatex: true },
    ],
    correctAnswer: '0',
  },
];

// ── 第二节：零点存在性定理（5题·高考难度） ──
export const graphPractice2: QuizQuestionData[] = [
  {
    id: 'fgp2-1',
    question: '',
    questionLatex: '\\text{函数 }f(x) = x^3 - x - 1\\text{，已知 }f(1) = -1,\\; f(2) = 5\\text{，则 }f(x)\\text{ 在 }(1, 2)\\text{ 内？}',
    type: 'choice',
    options: [
      { label: 'A', value: '\\text{一定有零点}', isLatex: true },
      { label: 'B', value: '\\text{一定没有零点}', isLatex: true },
      { label: 'C', value: '\\text{可能有也可能没有}', isLatex: true },
      { label: 'D', value: '\\text{无法判断}', isLatex: true },
    ],
    correctAnswer: '\\text{一定有零点}',
  },
  {
    id: 'fgp2-2',
    question: '',
    questionLatex: '\\text{函数 }f(x) = \\dfrac{1}{x}\\text{ 在 }[-1, 1]\\text{ 上满足 }f(-1) \\cdot f(1) < 0\\text{，能否用零点存在性定理？}',
    type: 'choice',
    options: [
      { label: 'A', value: '\\text{能，所以有零点}', isLatex: true },
      { label: 'B', value: '\\text{不能，因为 }f(x)\\text{ 在 }[-1,1]\\text{ 上不连续}', isLatex: true },
      { label: 'C', value: '\\text{不能，因为 }f(-1) \\cdot f(1) > 0', isLatex: true },
      { label: 'D', value: '\\text{能，所以有两个零点}', isLatex: true },
    ],
    correctAnswer: '\\text{不能，因为 }f(x)\\text{ 在 }[-1,1]\\text{ 上不连续}',
  },
  {
    id: 'fgp2-3',
    question: '',
    questionLatex: '\\text{函数 }f(x) = \\ln x + 2x - 6\\text{ 的零点所在的区间是？}',
    type: 'choice',
    options: [
      { label: 'A', value: '(1, 2)', isLatex: true },
      { label: 'B', value: '(2, 3)', isLatex: true },
      { label: 'C', value: '(3, 4)', isLatex: true },
      { label: 'D', value: '(4, 5)', isLatex: true },
    ],
    correctAnswer: '(2, 3)',
  },
  {
    id: 'fgp2-4',
    question: '',
    questionLatex: '\\text{函数 }f(x) = x^2\\text{ 在 }x = 0\\text{ 处有零点，但 }f(-1) \\cdot f(1) = 1 > 0\\text{。这说明？}',
    type: 'choice',
    options: [
      { label: 'A', value: '\\text{零点存在性定理是错的}', isLatex: true },
      { label: 'B', value: '\\text{不满足定理条件不代表没有零点}', isLatex: true },
      { label: 'C', value: 'f(x) = x^2\\text{ 没有零点}', isLatex: true },
      { label: 'D', value: '\\text{定理只对一次函数有效}', isLatex: true },
    ],
    correctAnswer: '\\text{不满足定理条件不代表没有零点}',
  },
  {
    id: 'fgp2-5',
    question: '',
    questionLatex: '\\text{函数 }f(x) = e^x - x - 2\\text{，已知 }f(0) = -1,\\; f(1) = e - 3 \\approx -0.28,\\; f(2) = e^2 - 4 \\approx 3.39\\text{，则零点在？}',
    type: 'choice',
    options: [
      { label: 'A', value: '(0, 1)', isLatex: true },
      { label: 'B', value: '(1, 2)', isLatex: true },
      { label: 'C', value: '(0, 1)\\text{ 和 }(1, 2)\\text{ 各有一个}', isLatex: true },
      { label: 'D', value: '(0, 2)\\text{ 内有一个}', isLatex: true },
    ],
    correctAnswer: '(1, 2)',
  },
];

// ── 第三节：二分法（5题·高考难度） ──
export const graphPractice3: QuizQuestionData[] = [
  {
    id: 'fgp3-1',
    question: '',
    questionLatex: '\\text{用二分法求 }f(x) = x^3 - 2\\text{ 在 }(1, 2)\\text{ 内的零点，第一次取中点 }x = 1.5\\text{，}f(1.5) = 1.375 > 0\\text{，则下一步应在？}',
    type: 'choice',
    options: [
      { label: 'A', value: '(1, 1.5)\\text{ 内继续}', isLatex: true },
      { label: 'B', value: '(1.5, 2)\\text{ 内继续}', isLatex: true },
      { label: 'C', value: '(1, 2)\\text{ 内重新开始}', isLatex: true },
      { label: 'D', value: '\\text{已找到零点}', isLatex: true },
    ],
    correctAnswer: '(1, 1.5)\\text{ 内继续}',
  },
  {
    id: 'fgp3-2',
    question: '',
    questionLatex: '\\text{用二分法在 }(1, 2)\\text{ 内求零点精确到 }0.1\\text{，至少需要二分几次？}',
    type: 'choice',
    options: [
      { label: 'A', value: '3\\text{ 次}', isLatex: true },
      { label: 'B', value: '4\\text{ 次}', isLatex: true },
      { label: 'C', value: '5\\text{ 次}', isLatex: true },
      { label: 'D', value: '10\\text{ 次}', isLatex: true },
    ],
    correctAnswer: '4\\text{ 次}',
  },
  {
    id: 'fgp3-3',
    question: '',
    questionLatex: '\\text{二分法的前提条件是？}',
    type: 'choice',
    options: [
      { label: 'A', value: '\\text{函数在区间上连续，且端点函数值异号}', isLatex: true },
      { label: 'B', value: '\\text{函数在区间上有定义即可}', isLatex: true },
      { label: 'C', value: '\\text{函数是一次函数}', isLatex: true },
      { label: 'D', value: '\\text{函数端点值异号即可}', isLatex: true },
    ],
    correctAnswer: '\\text{函数在区间上连续，且端点函数值异号}',
  },
  {
    id: 'fgp3-4',
    question: '',
    questionLatex: '\\text{用二分法求 }2^x = 3\\text{ 的近似解，第一步应该？}',
    type: 'choice',
    options: [
      { label: 'A', value: '\\text{直接算出 }x = \\log_2 3', isLatex: true },
      { label: 'B', value: '\\text{构造 }f(x) = 2^x - 3\\text{，找异号区间}', isLatex: true },
      { label: 'C', value: '\\text{画出 }y = 2^x\\text{ 的图像}', isLatex: true },
      { label: 'D', value: '\\text{用计算器}', isLatex: true },
    ],
    correctAnswer: '\\text{构造 }f(x) = 2^x - 3\\text{，找异号区间}',
  },
  {
    id: 'fgp3-5',
    question: '',
    questionLatex: '\\text{下列关于二分法的说法，正确的是？}',
    type: 'choice',
    options: [
      { label: 'A', value: '\\text{二分法能求出零点的精确值}', isLatex: true },
      { label: 'B', value: '\\text{二分法只能求近似值}', isLatex: true },
      { label: 'C', value: '\\text{二分法每次能将区间缩小到原来的 }\\dfrac{1}{3}', isLatex: true },
      { label: 'D', value: '\\text{二分法不需要函数连续}', isLatex: true },
    ],
    correctAnswer: '\\text{二分法只能求近似值}',
  },
];

// ── 第四节：数形结合求零点个数（5题·高考难度） ──
export const graphPractice4: QuizQuestionData[] = [
  {
    id: 'fgp4-1',
    question: '',
    questionLatex: '\\text{方程 }\\ln x = 2 - x\\text{ 的实数根的个数是？}',
    type: 'choice',
    options: [
      { label: 'A', value: '0', isLatex: true },
      { label: 'B', value: '1', isLatex: true },
      { label: 'C', value: '2', isLatex: true },
      { label: 'D', value: '3', isLatex: true },
    ],
    correctAnswer: '1',
  },
  {
    id: 'fgp4-2',
    question: '',
    questionLatex: '\\text{函数 }f(x) = e^x - \\dfrac{1}{x}\\text{（}x > 0\\text{）的零点个数是？}',
    type: 'choice',
    options: [
      { label: 'A', value: '0', isLatex: true },
      { label: 'B', value: '1', isLatex: true },
      { label: 'C', value: '2', isLatex: true },
      { label: 'D', value: '3', isLatex: true },
    ],
    correctAnswer: '1',
  },
  {
    id: 'fgp4-3',
    question: '',
    questionLatex: '\\text{方程 }x^2 = 2^x\\text{ 的实数根的个数是？}',
    type: 'choice',
    options: [
      { label: 'A', value: '1', isLatex: true },
      { label: 'B', value: '2', isLatex: true },
      { label: 'C', value: '3', isLatex: true },
      { label: 'D', value: '4', isLatex: true },
    ],
    correctAnswer: '3',
  },
  {
    id: 'fgp4-4',
    question: '',
    questionLatex: '\\text{函数 }f(x) = x^3 - 3x + 1\\text{ 的零点个数是？}',
    type: 'choice',
    options: [
      { label: 'A', value: '1', isLatex: true },
      { label: 'B', value: '2', isLatex: true },
      { label: 'C', value: '3', isLatex: true },
      { label: 'D', value: '0', isLatex: true },
    ],
    correctAnswer: '3',
  },
  {
    id: 'fgp4-5',
    question: '',
    questionLatex: '\\text{方程 }|x - 1| = \\lg x\\text{ 的实数根的个数是？}',
    type: 'choice',
    options: [
      { label: 'A', value: '0', isLatex: true },
      { label: 'B', value: '1', isLatex: true },
      { label: 'C', value: '2', isLatex: true },
      { label: 'D', value: '3', isLatex: true },
    ],
    correctAnswer: '1',
  },
  {
    id: 'fgp4-6',
    question: '',
    questionLatex: '\\text{方程 }\\ln x = \\dfrac{x}{e}\\text{ 的实数根的个数是？}',
    type: 'choice',
    options: [
      { label: 'A', value: '0', isLatex: true },
      { label: 'B', value: '1', isLatex: true },
      { label: 'C', value: '2', isLatex: true },
      { label: 'D', value: '3', isLatex: true },
    ],
    correctAnswer: '1',
  },
];
