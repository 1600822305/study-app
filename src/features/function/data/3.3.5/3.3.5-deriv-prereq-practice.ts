import type { QuizQuestionData } from '@/types';

// ── 第一节：函数值的代入与化简（6题）──
export const derivPrereqPractice1: QuizQuestionData[] = [
  {
    id: 'dpp1-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{若 }f(x)=x^2+1\\text{，则 }f(x+\\Delta x)=\\underline{\\qquad\\qquad}',
    correctAnswer: '(x+\\Delta x)^2+1',
    acceptableAnswers: ['(x+\\Delta x)^2+1', 'x^2+2x\\Delta x+(\\Delta x)^2+1'],
  },
  {
    id: 'dpp1-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{若 }f(x)=2x^2\\text{，化简 }f(x+\\Delta x)-f(x)=\\underline{\\qquad\\qquad}',
    correctAnswer: '4x\\Delta x+2(\\Delta x)^2',
    acceptableAnswers: ['4x\\Delta x+2(\\Delta x)^2', '2(\\Delta x)^2+4x\\Delta x', '2\\Delta x(2x+\\Delta x)'],
  },
  {
    id: 'dpp1-3',
    type: 'blank',
    question: '',
    questionLatex: '\\text{若 }f(x)=x^3\\text{，化简 }\\dfrac{f(x+\\Delta x)-f(x)}{\\Delta x}=\\underline{\\qquad\\qquad}',
    correctAnswer: '3x^2+3x\\Delta x+(\\Delta x)^2',
    acceptableAnswers: ['3x^2+3x\\Delta x+(\\Delta x)^2', '3x^2+3x\\Delta x+\\Delta x^2'],
  },
  {
    id: 'dpp1-4',
    type: 'blank',
    question: '',
    questionLatex: '\\text{若 }f(x)=\\dfrac{2}{x}\\text{，化简 }f(x+\\Delta x)-f(x)=\\underline{\\qquad\\qquad}',
    correctAnswer: '\\dfrac{-2\\Delta x}{x(x+\\Delta x)}',
    acceptableAnswers: [
      '\\dfrac{-2\\Delta x}{x(x+\\Delta x)}',
      '-\\dfrac{2\\Delta x}{x(x+\\Delta x)}',
      '\\dfrac{-2\\Delta x}{x^2+x\\Delta x}',
    ],
  },
  {
    id: 'dpp1-5',
    type: 'blank',
    question: '',
    questionLatex: '\\text{若 }f(x)=\\sqrt{x+1}\\text{，化简 }f(x+\\Delta x)-f(x)=\\underline{\\qquad\\qquad}',
    correctAnswer: '\\dfrac{\\Delta x}{\\sqrt{x+1+\\Delta x}+\\sqrt{x+1}}',
    acceptableAnswers: [
      '\\dfrac{\\Delta x}{\\sqrt{x+1+\\Delta x}+\\sqrt{x+1}}',
      '\\dfrac{\\Delta x}{\\sqrt{x+\\Delta x+1}+\\sqrt{x+1}}',
    ],
  },
];

// ── 第二节：直线斜率与点斜式（4题）──
export const derivPrereqPractice2: QuizQuestionData[] = [
  {
    id: 'dpp2-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{过 }(2,3)\\text{、}(5,12)\\text{ 两点的直线斜率 }k=\\underline{\\qquad\\qquad}',
    correctAnswer: '3',
    acceptableAnswers: ['3'],
  },
  {
    id: 'dpp2-3',
    type: 'blank',
    question: '',
    questionLatex: '\\text{过点 }(1,-2)\\text{，斜率为 }4\\text{ 的直线方程是 }y=\\underline{\\qquad\\qquad}',
    correctAnswer: '4x-6',
    acceptableAnswers: ['4x-6', '-6+4x'],
  },
  {
    id: 'dpp2-4',
    type: 'blank',
    question: '',
    questionLatex: '\\text{若曲线在点 }(x_1, f(x_1))\\text{ 处的切线斜率为 }2\\text{，写出切线方程（点斜式）：}y-f(x_1)=\\underline{\\qquad\\qquad}',
    correctAnswer: '2(x-x_1)',
    acceptableAnswers: ['2(x-x_1)', '2x-2x_1'],
  },
];
// ── 第三节：平均变化率（4题）──
export const derivPrereqPractice3: QuizQuestionData[] = [
  {
    id: 'dpp3-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{函数 }f(x)=x^2\\text{，从 }x=1\\text{ 到 }x=3\\text{ 的平均变化率 }=\\underline{\\qquad\\qquad}',
    correctAnswer: '4',
    acceptableAnswers: ['4'],
  },
  {
    id: 'dpp3-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{函数 }f(x)=x^2\\text{，从 }x_1\\text{ 到 }x_1+\\Delta x\\text{ 的平均变化率 }=\\underline{\\qquad\\qquad}',
    correctAnswer: '2x_1+\\Delta x',
    acceptableAnswers: ['2x_1+\\Delta x', '\\Delta x+2x_1'],
  },
  {
    id: 'dpp3-3',
    type: 'blank',
    question: '',
    questionLatex: '\\text{物体路程 }s(t)=t^2+t\\text{（米），从 }t=1\\text{ 到 }t=2\\text{（秒）的平均速度 }=\\underline{\\qquad\\qquad}\\text{ 米/秒}',
    correctAnswer: '4',
    acceptableAnswers: ['4'],
  },
  {
    id: 'dpp3-4',
    type: 'choice',
    question: '',
    questionLatex: '\\text{平均变化率 }\\dfrac{f(x_1+\\Delta x)-f(x_1)}{\\Delta x}\\text{ 的几何意义是}',
    options: [
      { label: 'A', value: '\\text{曲线在 }x_1\\text{ 处的切线斜率}', isLatex: true },
      { label: 'B', value: '\\text{曲线上两点连线（割线）的斜率}', isLatex: true },
      { label: 'C', value: '\\text{曲线本身的斜率}', isLatex: true },
      { label: 'D', value: '\\text{函数值}', isLatex: true },
    ],
    correctAnswer: '\\text{曲线上两点连线（割线）的斜率}',
  },
];

// ── 第四节（前半）：极限计算（⑤ 示例前自测）──
export const derivPrereqPractice4a: QuizQuestionData[] = [
  {
    id: 'dpp4-1',
    type: 'blank',
    question: '',
    questionLatex: '\\lim\\limits_{\\Delta x\\to 0}(3+\\Delta x)=\\underline{\\qquad\\qquad}',
    correctAnswer: '3',
    acceptableAnswers: ['3'],
  },
  {
    id: 'dpp4-2',
    type: 'blank',
    question: '',
    questionLatex: '\\lim\\limits_{\\Delta x\\to 0}(2x_1+\\Delta x)=\\underline{\\qquad\\qquad}',
    correctAnswer: '2x_1',
    acceptableAnswers: ['2x_1'],
  },
  {
    id: 'dpp4-a3',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=x^2\\text{ 在 }x=1\\text{ 处的导数 }f\'(1)=\\underline{\\qquad\\qquad}\\text{（套四步法自己做，翻页对照 ⑤ 的方法）}',
    correctAnswer: '2',
    acceptableAnswers: ['2'],
  },
];

// ── 第四节（后半）：求导 + 几何意义（⑤ 示例后练手）──
export const derivPrereqPractice4: QuizQuestionData[] = [];

