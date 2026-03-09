import type { QuizQuestionData } from '@/types';

// ── 精华练习：函数的概念与性质 10 道 ──

export const conceptPractice: QuizQuestionData[] = [
  // ─── 1. 组合限制求定义域 ───
  {
    id: 'fp-1',
    type: 'choice',
    question: '函数',
    questionLatex:
      'f(x) = \\dfrac{\\sqrt{x-1}}{x-2} \\text{ 的定义域为}',
    options: [
      { label: 'A', value: '[1,2)\\cup(2,+\\infty)', isLatex: true },
      { label: 'B', value: '(1,2)\\cup(2,+\\infty)', isLatex: true },
      { label: 'C', value: '[1,+\\infty)', isLatex: true },
      { label: 'D', value: '(1,+\\infty)', isLatex: true },
    ],
    correctAnswer: '[1,2)\\cup(2,+\\infty)',
    explanation: '',
    explanationLatex:
      '\\text{根号内} \\geq 0 \\Rightarrow x \\geq 1\\text{，分母} \\neq 0 \\Rightarrow x \\neq 2 \\\\[4pt] \\text{取交集：} [1,2)\\cup(2,+\\infty)',
  },

  // ─── 2. 抽象函数定义域（高频考点！） ───
  {
    id: 'fp-2',
    type: 'choice',
    question: '已知',
    questionLatex:
      'f(x) \\text{ 的定义域为 } [0,2]\\text{，则 } f(2x-1) \\text{ 的定义域为}',
    options: [
      { label: 'A', value: '[0,2]', isLatex: true },
      { label: 'B', value: '[\\frac{1}{2}, \\frac{3}{2}]', isLatex: true },
      { label: 'C', value: '[-1,3]', isLatex: true },
      { label: 'D', value: '[1,5]', isLatex: true },
    ],
    correctAnswer: '[\\frac{1}{2}, \\frac{3}{2}]',
    explanation: '',
    explanationLatex:
      'f(x) \\text{ 定义域 } [0,2] \\Rightarrow 0 \\leq x \\leq 2 \\\\[4pt] \\text{令 } 0 \\leq 2x-1 \\leq 2 \\Rightarrow 1 \\leq 2x \\leq 3 \\Rightarrow \\frac{1}{2} \\leq x \\leq \\frac{3}{2} \\\\[4pt] \\text{关键：把括号里整体替换 } x \\text{，解不等式}',
  },

  // ─── 3. 判断同一函数 ───
  {
    id: 'fp-3',
    type: 'choice',
    question: '下列哪组函数是同一函数？',
    questionLatex:
      '\\text{下列哪组中的两个函数是同一函数？}',
    options: [
      { label: 'A', value: 'f(x)=x,\\; g(x)=\\dfrac{x^2}{x}', isLatex: true },
      { label: 'B', value: 'f(x)=|x|,\\; g(x)=\\sqrt{x^2}', isLatex: true },
      { label: 'C', value: 'f(x)=x^2,\\; g(t)=t^2', isLatex: true },
      { label: 'D', value: 'f(x)=1,\\; g(x)=x^0', isLatex: true },
    ],
    correctAnswer: 'f(x)=|x|,\\; g(x)=\\sqrt{x^2}',
    explanation: '',
    explanationLatex:
      '\\text{判断同一函数看三要素：定义域、值域、对应关系} \\\\[4pt] \\text{A：} g(x)=x^2/x \\text{ 在 } x=0 \\text{ 无意义，定义域不同 } \\times \\\\[4pt] \\text{B：} |x| = \\sqrt{x^2}\\text{，定义域都是 } \\mathbb{R}\\text{，对应关系相同 } \\checkmark \\\\[4pt] \\text{C：同一函数，字母不同不影响 } \\checkmark \\text{（但B更典型）} \\\\[4pt] \\text{D：} x^0 \\text{ 在 } x=0 \\text{ 无意义，定义域不同 } \\times',
  },

  // ─── 4. 分段函数求值 ───
  {
    id: 'fp-4',
    type: 'blank',
    question: '',
    questionLatex:
      'f(x) = \\begin{cases} x+1, & x \\leq 0 \\\\ 2^x, & x > 0 \\end{cases} \\text{，则 } f(f(-1)) = \\text{?}',
    correctAnswer: '1',
    explanation: '',
    explanationLatex:
      'f(-1)\\text{：} -1 \\leq 0 \\Rightarrow f(-1) = -1+1 = 0 \\\\[4pt] f(f(-1)) = f(0)\\text{：} 0 \\leq 0 \\Rightarrow f(0) = 0+1 = 1',
  },

  // ─── 5. 配方法求值域 ───
  {
    id: 'fp-5',
    type: 'choice',
    question: '函数',
    questionLatex:
      'f(x) = -x^2 + 4x - 1 \\;(x \\in [0,3]) \\text{ 的值域为}',
    options: [
      { label: 'A', value: '[-1,3]', isLatex: true },
      { label: 'B', value: '(-\\infty, 3]', isLatex: true },
      { label: 'C', value: '[2,3]', isLatex: true },
      { label: 'D', value: '[-1,+\\infty)', isLatex: true },
    ],
    correctAnswer: '[-1,3]',
    explanation: '',
    explanationLatex:
      'f(x) = -(x^2 - 4x) - 1 = -(x-2)^2 + 3 \\\\[4pt] \\text{对称轴 } x=2 \\in [0,3]\\text{，开口向下} \\\\[4pt] \\text{最大值：} f(2) = 3 \\\\[4pt] \\text{比较端点：} f(0) = -1,\\; f(3) = -9+12-1 = 2 \\\\[4pt] \\text{最小值：} f(0) = -1 \\quad \\Rightarrow \\text{值域 } [-1, 3]',
  },

  // ─── 6. 分式函数求值域（反解法） ───
  {
    id: 'fp-6',
    type: 'choice',
    question: '函数',
    questionLatex:
      'f(x) = \\dfrac{2x+1}{x-1} \\;(x \\neq 1) \\text{ 的值域为}',
    options: [
      { label: 'A', value: '\\mathbb{R}', isLatex: true },
      { label: 'B', value: '(-\\infty, 2)\\cup(2,+\\infty)', isLatex: true },
      { label: 'C', value: '(-\\infty, 1)\\cup(1,+\\infty)', isLatex: true },
      { label: 'D', value: '[2,+\\infty)', isLatex: true },
    ],
    correctAnswer: '(-\\infty, 2)\\cup(2,+\\infty)',
    explanation: '',
    explanationLatex:
      '\\text{反解法：令 } y = \\frac{2x+1}{x-1} \\Rightarrow y(x-1) = 2x+1 \\\\[4pt] yx - y = 2x + 1 \\Rightarrow x(y-2) = y+1 \\Rightarrow x = \\frac{y+1}{y-2} \\\\[4pt] \\text{分母} \\neq 0 \\Rightarrow y \\neq 2 \\quad \\Rightarrow \\text{值域为 } \\{y \\mid y \\neq 2\\}',
  },

  // ─── 7. 定义法证明单调性 ───
  {
    id: 'fp-7',
    type: 'choice',
    question: '用定义法证明',
    questionLatex:
      'f(x) = x + \\dfrac{1}{x} \\text{ 在 } (1, +\\infty) \\text{ 上单调递增，取 } x_1 < x_2\\text{，则 } f(x_1)-f(x_2) \\text{ 化简后为}',
    options: [
      { label: 'A', value: '(x_1-x_2)\\left(1 - \\dfrac{1}{x_1 x_2}\\right)', isLatex: true },
      { label: 'B', value: '(x_1-x_2)\\left(1 + \\dfrac{1}{x_1 x_2}\\right)', isLatex: true },
      { label: 'C', value: '\\dfrac{x_1 - x_2}{x_1 x_2}', isLatex: true },
      { label: 'D', value: '(x_2-x_1)\\left(1 - \\dfrac{1}{x_1 x_2}\\right)', isLatex: true },
    ],
    correctAnswer: '(x_1-x_2)\\left(1 - \\dfrac{1}{x_1 x_2}\\right)',
    explanation: '',
    explanationLatex:
      'f(x_1)-f(x_2) = \\left(x_1 + \\frac{1}{x_1}\\right) - \\left(x_2 + \\frac{1}{x_2}\\right) \\\\[4pt] = (x_1 - x_2) + \\frac{x_2 - x_1}{x_1 x_2} = (x_1 - x_2)\\left(1 - \\frac{1}{x_1 x_2}\\right) \\\\[4pt] x_1, x_2 > 1 \\Rightarrow x_1 x_2 > 1 \\Rightarrow 1 - \\frac{1}{x_1 x_2} > 0 \\\\[4pt] x_1 < x_2 \\Rightarrow x_1 - x_2 < 0 \\Rightarrow f(x_1)-f(x_2) < 0 \\Rightarrow \\text{递增}',
  },

  // ─── 8. 已知一半求另一半（奇偶性应用） ───
  {
    id: 'fp-10',
    type: 'blank',
    question: '',
    questionLatex:
      '\\text{已知 } f(x) \\text{ 是偶函数，当 } x \\geq 0 \\text{ 时，} f(x) = x^2 - 2x \\\\[4pt] \\text{则 } f(-3) = \\text{?}',
    correctAnswer: '3',
    explanation: '',
    explanationLatex:
      '\\text{偶函数：} f(-x) = f(x) \\\\[4pt] f(-3) = f(3) = 3^2 - 2 \\times 3 = 9 - 6 = 3',
  },

  // ─── 11. 奇偶性 + 单调性综合 ───
  {
    id: 'fp-11',
    type: 'choice',
    question: '已知',
    questionLatex:
      'f(x) \\text{ 是定义在 } \\mathbb{R} \\text{ 上的偶函数，在 } [0,+\\infty) \\text{ 上单调递增。} \\\\[4pt] \\text{若 } f(a) \\leq f(2)\\text{，则 } a \\text{ 的取值范围为}',
    options: [
      { label: 'A', value: 'a \\leq 2', isLatex: true },
      { label: 'B', value: '-2 \\leq a \\leq 2', isLatex: true },
      { label: 'C', value: 'a \\geq -2', isLatex: true },
      { label: 'D', value: 'a \\leq -2 \\text{ 或 } a \\geq 2', isLatex: true },
    ],
    correctAnswer: '-2 \\leq a \\leq 2',
    explanation: '',
    explanationLatex:
      '\\text{偶函数} \\Rightarrow f(a) = f(|a|) \\\\[4pt] f(|a|) \\leq f(2)\\text{，在 } [0,+\\infty) \\text{ 上递增} \\\\[4pt] \\Rightarrow |a| \\leq 2 \\Rightarrow -2 \\leq a \\leq 2',
  },

  // ─── 12. 抽象函数定义域进阶 ───
  {
    id: 'fp-12',
    type: 'choice',
    question: '已知',
    questionLatex:
      'f(2x+1) \\text{ 的定义域为 } [-1,3]\\text{，则 } f(x) \\text{ 的定义域为}',
    options: [
      { label: 'A', value: '[-1,7]', isLatex: true },
      { label: 'B', value: '[-1,3]', isLatex: true },
      { label: 'C', value: '[0,3]', isLatex: true },
      { label: 'D', value: '[-3,5]', isLatex: true },
    ],
    correctAnswer: '[-1,7]',
    explanation: '',
    explanationLatex:
      'f(2x+1) \\text{ 定义域 } [-1,3] \\Rightarrow -1 \\leq x \\leq 3 \\\\[4pt] \\text{括号里的 } 2x+1 \\text{ 的范围：} \\\\[4pt] 2(-1)+1 \\leq 2x+1 \\leq 2(3)+1 \\Rightarrow -1 \\leq 2x+1 \\leq 7 \\\\[4pt] \\therefore f(x) \\text{ 的定义域为 } [-1, 7] \\\\[4pt] \\text{关键区别：已知 } f(2x+1) \\text{ 的定义域} \\rightarrow \\text{求括号里的范围}',
  },
];
