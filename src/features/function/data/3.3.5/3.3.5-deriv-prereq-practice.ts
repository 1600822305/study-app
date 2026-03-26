import type { QuizQuestionData } from '@/types';

// ── 第一节：极限思想入门（5题） ──
export const derivPrereqPractice1: QuizQuestionData[] = [
  {
    id: 'dpp1-1',
    question: '',
    questionLatex: '\\text{数列 }1,\\; \\dfrac{1}{2},\\; \\dfrac{1}{4},\\; \\dfrac{1}{8},\\; \\cdots\\text{ 的各项越来越接近哪个数？}',
    type: 'choice',
    options: [
      { label: 'A', value: '1', isLatex: true },
      { label: 'B', value: '0', isLatex: true },
      { label: 'C', value: '\\dfrac{1}{2}', isLatex: true },
      { label: 'D', value: '-1', isLatex: true },
    ],
    correctAnswer: '0',
  },
  {
    id: 'dpp1-2',
    question: '',
    questionLatex: '\\text{数列 }\\dfrac{1}{2},\\; \\dfrac{2}{3},\\; \\dfrac{3}{4},\\; \\dfrac{4}{5},\\; \\cdots\\text{ 的各项趋近于？}',
    type: 'choice',
    options: [
      { label: 'A', value: '0', isLatex: true },
      { label: 'B', value: '\\dfrac{1}{2}', isLatex: true },
      { label: 'C', value: '1', isLatex: true },
      { label: 'D', value: '2', isLatex: true },
    ],
    correctAnswer: '1',
  },
  {
    id: 'dpp1-3',
    question: '',
    questionLatex: '\\text{关于极限，下列说法正确的是？}',
    type: 'choice',
    options: [
      { label: 'A', value: '\\text{趋近于某个数 = 等于那个数}', isLatex: true },
      { label: 'B', value: '\\text{趋近于某个数 = 永远不等于那个数}', isLatex: true },
      { label: 'C', value: '\\text{趋近于某个数 = 可以无限接近那个数}', isLatex: true },
      { label: 'D', value: '\\text{极限只存在于无穷大的情况}', isLatex: true },
    ],
    correctAnswer: '\\text{趋近于某个数 = 可以无限接近那个数}',
  },
  {
    id: 'dpp1-4',
    question: '',
    questionLatex: '0.9,\\; 0.99,\\; 0.999,\\; 0.9999,\\; \\cdots\\text{ 这个数列的极限是？}',
    type: 'choice',
    options: [
      { label: 'A', value: '0.9', isLatex: true },
      { label: 'B', value: '\\text{无限接近 1 但不等于 1}', isLatex: true },
      { label: 'C', value: '1', isLatex: true },
      { label: 'D', value: '\\text{不存在}', isLatex: true },
    ],
    correctAnswer: '1',
  },
  {
    id: 'dpp1-5',
    question: '',
    questionLatex: '\\text{当 }x \\rightarrow 2\\text{ 时，}f(x) = 3x + 1\\text{ 趋近于？}',
    type: 'choice',
    options: [
      { label: 'A', value: '5', isLatex: true },
      { label: 'B', value: '6', isLatex: true },
      { label: 'C', value: '7', isLatex: true },
      { label: 'D', value: '8', isLatex: true },
    ],
    correctAnswer: '7',
  },
];

// ── 第二节：平均变化率（5题） ──
export const derivPrereqPractice2: QuizQuestionData[] = [
  {
    id: 'dpp2-1',
    question: '',
    questionLatex: '\\text{小明骑车 }2\\text{ 小时走了 }30\\text{ 公里，他的平均速度是？}',
    type: 'choice',
    options: [
      { label: 'A', value: '10\\text{ km/h}', isLatex: true },
      { label: 'B', value: '15\\text{ km/h}', isLatex: true },
      { label: 'C', value: '20\\text{ km/h}', isLatex: true },
      { label: 'D', value: '30\\text{ km/h}', isLatex: true },
    ],
    correctAnswer: '15\\text{ km/h}',
  },
  {
    id: 'dpp2-2',
    question: '',
    questionLatex: '\\text{函数 }f(x) = x^2\\text{ 从 }x = 1\\text{ 到 }x = 3\\text{ 的平均变化率是？}',
    type: 'choice',
    options: [
      { label: 'A', value: '2', isLatex: true },
      { label: 'B', value: '4', isLatex: true },
      { label: 'C', value: '6', isLatex: true },
      { label: 'D', value: '8', isLatex: true },
    ],
    correctAnswer: '4',
  },
  {
    id: 'dpp2-3',
    question: '',
    questionLatex: '\\text{函数 }f(x) = 2x + 1\\text{ 在任意区间上的平均变化率是？}',
    type: 'choice',
    options: [
      { label: 'A', value: '1', isLatex: true },
      { label: 'B', value: '2', isLatex: true },
      { label: 'C', value: '3', isLatex: true },
      { label: 'D', value: '\\text{不确定}', isLatex: true },
    ],
    correctAnswer: '2',
  },
  {
    id: 'dpp2-4',
    question: '',
    questionLatex: '\\text{函数 }f(x) = x^2\\text{ 从 }x = 2\\text{ 到 }x = 2.1\\text{ 的平均变化率是？}',
    type: 'choice',
    options: [
      { label: 'A', value: '4', isLatex: true },
      { label: 'B', value: '4.1', isLatex: true },
      { label: 'C', value: '4.01', isLatex: true },
      { label: 'D', value: '0.41', isLatex: true },
    ],
    correctAnswer: '4.1',
  },
  {
    id: 'dpp2-5',
    question: '',
    questionLatex: '\\text{平均变化率在函数图像上的几何意义是？}',
    type: 'choice',
    options: [
      { label: 'A', value: '\\text{切线的斜率}', isLatex: true },
      { label: 'B', value: '\\text{割线的斜率}', isLatex: true },
      { label: 'C', value: '\\text{函数值}', isLatex: true },
      { label: 'D', value: '\\text{面积}', isLatex: true },
    ],
    correctAnswer: '\\text{割线的斜率}',
  },
];

// ── 第三节：从平均到瞬时（5题） ──
export const derivPrereqPractice3: QuizQuestionData[] = [
  {
    id: 'dpp3-1',
    question: '',
    questionLatex: '\\text{函数 }f(x) = x^2\\text{，从 }x = 2\\text{ 到 }x = 2 + \\Delta x\\text{ 的平均变化率}\\\\\\text{为 }4 + \\Delta x\\text{。当 }\\Delta x \\rightarrow 0\\text{ 时，平均变化率趋近于？}',
    type: 'choice',
    options: [
      { label: 'A', value: '0', isLatex: true },
      { label: 'B', value: '2', isLatex: true },
      { label: 'C', value: '4', isLatex: true },
      { label: 'D', value: '8', isLatex: true },
    ],
    correctAnswer: '4',
  },
  {
    id: 'dpp3-2',
    question: '',
    questionLatex: '\\text{当 }\\Delta x\\text{ 越来越小时，割线会变成？}',
    type: 'choice',
    options: [
      { label: 'A', value: '\\text{平行线}', isLatex: true },
      { label: 'B', value: '\\text{切线}', isLatex: true },
      { label: 'C', value: '\\text{法线}', isLatex: true },
      { label: 'D', value: '\\text{渐近线}', isLatex: true },
    ],
    correctAnswer: '\\text{切线}',
  },
  {
    id: 'dpp3-3',
    question: '',
    questionLatex: '\\text{瞬时变化率在图像上等于什么？}',
    type: 'choice',
    options: [
      { label: 'A', value: '\\text{割线斜率}', isLatex: true },
      { label: 'B', value: '\\text{切线斜率}', isLatex: true },
      { label: 'C', value: '\\text{函数值}', isLatex: true },
      { label: 'D', value: '\\text{截距}', isLatex: true },
    ],
    correctAnswer: '\\text{切线斜率}',
  },
  {
    id: 'dpp3-4',
    question: '',
    questionLatex: '\\text{汽车的里程表记录总路程，速度表显示的是？}',
    type: 'choice',
    options: [
      { label: 'A', value: '\\text{平均速度}', isLatex: true },
      { label: 'B', value: '\\text{瞬时速度}', isLatex: true },
      { label: 'C', value: '\\text{加速度}', isLatex: true },
      { label: 'D', value: '\\text{总路程}', isLatex: true },
    ],
    correctAnswer: '\\text{瞬时速度}',
  },
  {
    id: 'dpp3-5',
    question: '',
    questionLatex: '\\text{下列关于导数的说法，正确的是？}',
    type: 'choice',
    options: [
      { label: 'A', value: '\\text{导数就是平均变化率}', isLatex: true },
      { label: 'B', value: '\\text{导数是平均变化率当 }\\Delta x \\rightarrow 0\\text{ 的极限}', isLatex: true },
      { label: 'C', value: '\\text{导数就是函数值}', isLatex: true },
      { label: 'D', value: '\\text{导数是两个函数值的差}', isLatex: true },
    ],
    correctAnswer: '\\text{导数是平均变化率当 }\\Delta x \\rightarrow 0\\text{ 的极限}',
  },
];
