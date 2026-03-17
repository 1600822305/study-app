import type { QuizQuestionData } from '@/types';

// ── 即时练习（诱导公式 + 图像性质） ──
export const trigFuncPractice: QuizQuestionData[] = [
  {
    id: 'tf-p1',
    question: 'sin(π + α) 等于',
    questionLatex: '\\sin(\\pi + \\alpha) \\text{ 等于}',
    options: [
      { label: 'A', value: '\\sin\\alpha', isLatex: true },
      { label: 'B', value: '-\\sin\\alpha', isLatex: true },
      { label: 'C', value: '\\cos\\alpha', isLatex: true },
      { label: 'D', value: '-\\cos\\alpha', isLatex: true },
    ],
    correctAnswer: '-\\sin\\alpha',
  },
  {
    id: 'tf-p2',
    question: 'cos(π/2 + α) 等于',
    questionLatex: '\\cos\\!\\left(\\dfrac{\\pi}{2} + \\alpha\\right) \\text{ 等于}',
    options: [
      { label: 'A', value: '\\cos\\alpha', isLatex: true },
      { label: 'B', value: '-\\cos\\alpha', isLatex: true },
      { label: 'C', value: '\\sin\\alpha', isLatex: true },
      { label: 'D', value: '-\\sin\\alpha', isLatex: true },
    ],
    correctAnswer: '-\\sin\\alpha',
  },
  {
    id: 'tf-p3',
    question: 'sin 240° 的值是',
    questionLatex: '\\sin 240° \\text{ 的值是}',
    options: [
      { label: 'A', value: '\\dfrac{\\sqrt{3}}{2}', isLatex: true },
      { label: 'B', value: '-\\dfrac{\\sqrt{3}}{2}', isLatex: true },
      { label: 'C', value: '\\dfrac{1}{2}', isLatex: true },
      { label: 'D', value: '-\\dfrac{1}{2}', isLatex: true },
    ],
    correctAnswer: '-\\dfrac{\\sqrt{3}}{2}',
  },
  {
    id: 'tf-p4',
    question: 'y = sin x 的最小正周期是',
    questionLatex: 'y = \\sin x \\text{ 的最小正周期是}',
    options: [
      { label: 'A', value: '\\pi', isLatex: true },
      { label: 'B', value: '2\\pi', isLatex: true },
      { label: 'C', value: '\\dfrac{\\pi}{2}', isLatex: true },
      { label: 'D', value: '4\\pi', isLatex: true },
    ],
    correctAnswer: '2\\pi',
  },
  {
    id: 'tf-p5',
    question: 'y = cos x 是什么函数？',
    questionLatex: 'y = \\cos x \\text{ 是什么函数？}',
    options: [
      { label: 'A', value: '奇函数', isLatex: false },
      { label: 'B', value: '偶函数', isLatex: false },
      { label: 'C', value: '非奇非偶', isLatex: false },
      { label: 'D', value: '既奇又偶', isLatex: false },
    ],
    correctAnswer: '偶函数',
  },
];

// ── 即时训练（图像性质 + 五点作图） ──
export const trigGraphPractice: QuizQuestionData[] = [
  {
    id: 'tg-p1',
    question: 'y = cos x 在 [0, 2π] 上的单调递减区间是',
    questionLatex: 'y = \\cos x \\text{ 在 } [0,\\; 2\\pi] \\text{ 上的单调递减区间是}',
    options: [
      { label: 'A', value: '[0,\\; \\pi]', isLatex: true },
      { label: 'B', value: '[0,\\; 2\\pi]', isLatex: true },
      { label: 'C', value: '[\\pi,\\; 2\\pi]', isLatex: true },
      { label: 'D', value: '\\left[\\dfrac{\\pi}{2},\\; \\dfrac{3\\pi}{2}\\right]', isLatex: true },
    ],
    correctAnswer: '[0,\\; \\pi]',
  },
  {
    id: 'tg-p2',
    question: '比较大小：sin(π/3) 与 sin(π/4)',
    questionLatex: '\\text{比较大小：}\\sin\\dfrac{\\pi}{3} \\text{ 与 } \\sin\\dfrac{\\pi}{4}',
    options: [
      { label: 'A', value: '\\sin\\dfrac{\\pi}{3} > \\sin\\dfrac{\\pi}{4}', isLatex: true },
      { label: 'B', value: '\\sin\\dfrac{\\pi}{3} < \\sin\\dfrac{\\pi}{4}', isLatex: true },
      { label: 'C', value: '\\sin\\dfrac{\\pi}{3} = \\sin\\dfrac{\\pi}{4}', isLatex: true },
      { label: 'D', value: '\\text{无法比较}', isLatex: true },
    ],
    correctAnswer: '\\sin\\dfrac{\\pi}{3} > \\sin\\dfrac{\\pi}{4}',
  },
  {
    id: 'tg-p3',
    question: '(π/2, 0) 是 y = cos x 的',
    questionLatex: '\\left(\\dfrac{\\pi}{2},\\; 0\\right) \\text{ 是 } y = \\cos x \\text{ 的}',
    options: [
      { label: 'A', value: '\\text{对称轴}', isLatex: true },
      { label: 'B', value: '\\text{对称中心}', isLatex: true },
      { label: 'C', value: '\\text{最高点}', isLatex: true },
      { label: 'D', value: '\\text{以上都不是}', isLatex: true },
    ],
    correctAnswer: '\\text{对称中心}',
  },
  {
    id: 'tg-p4',
    question: 'y = sin x 在 x = π/2 处是',
    questionLatex: 'y = \\sin x \\text{ 在 } x = \\dfrac{\\pi}{2} \\text{ 处是}',
    options: [
      { label: 'A', value: '\\text{对称轴}', isLatex: true },
      { label: 'B', value: '\\text{对称中心}', isLatex: true },
      { label: 'C', value: '\\text{零点}', isLatex: true },
      { label: 'D', value: '\\text{以上都不是}', isLatex: true },
    ],
    correctAnswer: '\\text{对称轴}',
  },
];

// ── 高考真题 & 精华题 ──
export const trigFuncExam: QuizQuestionData[] = [
  {
    id: 'tf-e1',
    question: '诱导公式',
    questionLatex: '\\text{已知 } \\sin\\!\\left(\\dfrac{\\pi}{2} + \\alpha\\right) = \\dfrac{3}{5}\\text{，则 } \\cos\\alpha = \\text{？}',
    type: 'blank',
    correctAnswer: '3/5',
    acceptableAnswers: ['\\frac{3}{5}', '0.6'],
  },
  {
    id: 'tf-e2',
    question: '周期与 ω',
    questionLatex: '\\text{函数 } f(x) = \\sin\\!\\left(2x + \\dfrac{\\pi}{6}\\right) \\text{ 的最小正周期为}',
    options: [
      { label: 'A', value: '\\dfrac{\\pi}{2}', isLatex: true },
      { label: 'B', value: '\\pi', isLatex: true },
      { label: 'C', value: '2\\pi', isLatex: true },
      { label: 'D', value: '4\\pi', isLatex: true },
    ],
    correctAnswer: '\\pi',
  },
  {
    id: 'tf-e3',
    question: '单调递增区间',
    questionLatex: '\\text{函数 } f(x) = 2\\sin\\!\\left(2x - \\dfrac{\\pi}{6}\\right) \\text{ 的一个单调递增区间是}',
    options: [
      { label: 'A', value: '\\left[-\\dfrac{\\pi}{6}+k\\pi,\\;\\dfrac{\\pi}{3}+k\\pi\\right]', isLatex: true },
      { label: 'B', value: '\\left[-\\dfrac{\\pi}{3}+k\\pi,\\;\\dfrac{\\pi}{6}+k\\pi\\right]', isLatex: true },
      { label: 'C', value: '\\left[0,\\;\\dfrac{\\pi}{2}\\right]', isLatex: true },
      { label: 'D', value: '\\left[-\\dfrac{\\pi}{4},\\;\\dfrac{\\pi}{4}\\right]', isLatex: true },
    ],
    correctAnswer: '\\left[-\\dfrac{\\pi}{6}+k\\pi,\\;\\dfrac{\\pi}{3}+k\\pi\\right]',
  },
  {
    id: 'tf-e4',
    question: '图像变换',
    questionLatex: '\\text{将 } y = \\sin x \\text{ 向左平移 } \\dfrac{\\pi}{3}\\text{，再将横坐标缩短为原来的 } \\dfrac{1}{2}\\text{，所得函数为}',
    options: [
      { label: 'A', value: 'y = \\sin\\!\\left(2x + \\dfrac{\\pi}{3}\\right)', isLatex: true },
      { label: 'B', value: 'y = \\sin\\!\\left(2x + \\dfrac{\\pi}{6}\\right)', isLatex: true },
      { label: 'C', value: 'y = \\sin\\!\\left(2x + \\dfrac{2\\pi}{3}\\right)', isLatex: true },
      { label: 'D', value: 'y = \\sin\\!\\left(\\dfrac{x}{2} + \\dfrac{\\pi}{3}\\right)', isLatex: true },
    ],
    correctAnswer: 'y = \\sin\\!\\left(2x + \\dfrac{\\pi}{3}\\right)',
  },
  {
    id: 'tf-e5',
    question: '由图像求解析式',
    questionLatex: '\\text{已知 } f(x)=A\\sin(\\omega x+\\varphi)\\;(A>0,\\;\\omega>0,\\;|\\varphi|\\leq\\frac{\\pi}{2})\\text{，最大值为 2，相邻最高点距离为 }\\pi\\text{，且 }f(0)=1\\text{，则 }f(x)=',
    options: [
      { label: 'A', value: '2\\sin\\!\\left(2x+\\dfrac{\\pi}{6}\\right)', isLatex: true },
      { label: 'B', value: '2\\sin\\!\\left(2x+\\dfrac{\\pi}{3}\\right)', isLatex: true },
      { label: 'C', value: '2\\sin\\!\\left(x+\\dfrac{\\pi}{6}\\right)', isLatex: true },
      { label: 'D', value: '\\sin\\!\\left(2x+\\dfrac{\\pi}{6}\\right)', isLatex: true },
    ],
    correctAnswer: '2\\sin\\!\\left(2x+\\dfrac{\\pi}{6}\\right)',
  },
  {
    id: 'tf-e6',
    question: '对称轴',
    questionLatex: 'f(x)=\\sin\\!\\left(2x+\\dfrac{\\pi}{6}\\right) \\text{ 的一条对称轴是}',
    options: [
      { label: 'A', value: 'x = \\dfrac{\\pi}{6}', isLatex: true },
      { label: 'B', value: 'x = \\dfrac{\\pi}{3}', isLatex: true },
      { label: 'C', value: 'x = -\\dfrac{\\pi}{12}', isLatex: true },
      { label: 'D', value: 'x = \\dfrac{\\pi}{12}', isLatex: true },
    ],
    correctAnswer: 'x = \\dfrac{\\pi}{6}',
  },
  {
    id: 'tf-e7',
    question: '给定区间上的最值',
    questionLatex: 'f(x)=2\\sin\\!\\left(2x+\\dfrac{\\pi}{6}\\right) \\text{ 在 } \\left[0,\\;\\dfrac{\\pi}{2}\\right] \\text{ 上的最小值为}',
    options: [
      { label: 'A', value: '-2', isLatex: false },
      { label: 'B', value: '-1', isLatex: false },
      { label: 'C', value: '0', isLatex: false },
      { label: 'D', value: '1', isLatex: false },
    ],
    correctAnswer: '-1',
  },
  {
    id: 'tf-e8',
    question: '诱导公式链式化简',
    questionLatex: '\\sin(\\pi-\\alpha)\\cos(2\\pi-\\alpha)+\\cos(\\pi+\\alpha)\\sin(\\alpha-\\pi) =',
    options: [
      { label: 'A', value: '\\sin 2\\alpha', isLatex: true },
      { label: 'B', value: '-\\sin 2\\alpha', isLatex: true },
      { label: 'C', value: '\\cos 2\\alpha', isLatex: true },
      { label: 'D', value: '2\\sin\\alpha\\cos\\alpha', isLatex: true },
    ],
    correctAnswer: '\\sin 2\\alpha',
  },
];

// ── 自测题（Asin(ωx+φ) + 性质综合） ──
export const trigFuncQuiz: QuizQuestionData[] = [
  {
    id: 'tf-q1',
    question: 'y = 2sin(3x) 的最小正周期是',
    questionLatex: 'y = 2\\sin(3x) \\text{ 的最小正周期是}',
    options: [
      { label: 'A', value: '\\dfrac{\\pi}{3}', isLatex: true },
      { label: 'B', value: '\\dfrac{2\\pi}{3}', isLatex: true },
      { label: 'C', value: '2\\pi', isLatex: true },
      { label: 'D', value: '6\\pi', isLatex: true },
    ],
    correctAnswer: '\\dfrac{2\\pi}{3}',
  },
  {
    id: 'tf-q2',
    question: 'y = sin(2x + π/6) 的一条对称轴是',
    questionLatex: 'y = \\sin\\!\\left(2x + \\dfrac{\\pi}{6}\\right) \\text{ 的一条对称轴是}',
    options: [
      { label: 'A', value: 'x = \\dfrac{\\pi}{6}', isLatex: true },
      { label: 'B', value: 'x = \\dfrac{\\pi}{3}', isLatex: true },
      { label: 'C', value: 'x = \\dfrac{\\pi}{12}', isLatex: true },
      { label: 'D', value: 'x = \\dfrac{\\pi}{4}', isLatex: true },
    ],
    correctAnswer: 'x = \\dfrac{\\pi}{6}',
  },
  {
    id: 'tf-q3',
    question: 'y = sin(2x + π/6) 的单调递增区间是',
    questionLatex: 'y = \\sin\\!\\left(2x + \\dfrac{\\pi}{6}\\right) \\text{ 的一个单调递增区间是}',
    options: [
      { label: 'A', value: '\\left[-\\dfrac{\\pi}{3},\\;\\dfrac{\\pi}{6}\\right]', isLatex: true },
      { label: 'B', value: '\\left[0,\\;\\dfrac{\\pi}{2}\\right]', isLatex: true },
      { label: 'C', value: '\\left[-\\dfrac{\\pi}{6},\\;\\dfrac{\\pi}{3}\\right]', isLatex: true },
      { label: 'D', value: '\\left[-\\dfrac{\\pi}{4},\\;\\dfrac{\\pi}{4}\\right]', isLatex: true },
    ],
    correctAnswer: '\\left[-\\dfrac{\\pi}{3},\\;\\dfrac{\\pi}{6}\\right]',
  },
  {
    id: 'tf-q4',
    question: 'y = tan x 的周期是',
    questionLatex: 'y = \\tan x \\text{ 的最小正周期是}',
    options: [
      { label: 'A', value: '\\dfrac{\\pi}{2}', isLatex: true },
      { label: 'B', value: '\\pi', isLatex: true },
      { label: 'C', value: '2\\pi', isLatex: true },
      { label: 'D', value: '\\text{无周期}', isLatex: true },
    ],
    correctAnswer: '\\pi',
  },
  {
    id: 'tf-q5',
    question: '将 y = sin x 的图像向左平移 π/3，再将横坐标缩短为原来的 1/2，所得函数是',
    questionLatex: '\\text{将 } y = \\sin x \\text{ 的图像向左平移 } \\dfrac{\\pi}{3}\\text{，再将横坐标缩短为原来的 } \\dfrac{1}{2}\\text{，所得函数是}',
    options: [
      { label: 'A', value: 'y = \\sin\\!\\left(2x + \\dfrac{\\pi}{3}\\right)', isLatex: true },
      { label: 'B', value: 'y = \\sin\\!\\left(2x + \\dfrac{2\\pi}{3}\\right)', isLatex: true },
      { label: 'C', value: 'y = \\sin\\!\\left(\\dfrac{x}{2} + \\dfrac{\\pi}{3}\\right)', isLatex: true },
      { label: 'D', value: 'y = \\sin\\!\\left(2x + \\dfrac{\\pi}{6}\\right)', isLatex: true },
    ],
    correctAnswer: 'y = \\sin\\!\\left(2x + \\dfrac{\\pi}{3}\\right)',
  },
];
