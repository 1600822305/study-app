import type { QuizQuestionData } from '@/types';

// ── 综合自测（8题·高考难度，覆盖全部3节） ──
export const graphPrereqQuizQuestions: QuizQuestionData[] = [
  // Q1 坐标系 + 象限 + 绝对值综合
  {
    id: 'gpq-1',
    question: '',
    questionLatex: '\\text{已知 }|a - 2| + (b + 3)^2 = 0\\text{，则点 }(a, b)\\text{ 在第几象限？}',
    type: 'choice',
    options: [
      { label: 'A', value: '\\text{第一象限}', isLatex: true },
      { label: 'B', value: '\\text{第二象限}', isLatex: true },
      { label: 'C', value: '\\text{第三象限}', isLatex: true },
      { label: 'D', value: '\\text{第四象限}', isLatex: true },
    ],
    correctAnswer: '\\text{第四象限}',
    explanation: '',
    explanationLatex: '|a-2| \\geq 0,\\;(b+3)^2 \\geq 0\\\\[4pt]\\text{两个非负数之和为 0 }\\rightarrow\\text{ 都为 0}\\\\[4pt]a - 2 = 0 \\Rightarrow a = 2\\\\[4pt]b + 3 = 0 \\Rightarrow b = -3\\\\[4pt](2, -3)\\text{：}x > 0,\\; y < 0 \\rightarrow\\text{ 第四象限}',
  },
  // Q2 对称 + 多步变换
  {
    id: 'gpq-2',
    question: '',
    questionLatex: '\\text{点 }A(-1, 4)\\text{ 关于 x 轴对称得 }B\\text{，再关于 y 轴对称得 }C\\text{，则 }C\\text{ 的坐标是？}',
    type: 'choice',
    options: [
      { label: 'A', value: '(1, 4)', isLatex: true },
      { label: 'B', value: '(1, -4)', isLatex: true },
      { label: 'C', value: '(-1, -4)', isLatex: true },
      { label: 'D', value: '(-1, 4)', isLatex: true },
    ],
    correctAnswer: '(1, -4)',
    explanation: '',
    explanationLatex: 'A(-1, 4) \\xrightarrow{x\\text{ 轴对称}} B(-1, -4)\\\\[4pt]B(-1, -4) \\xrightarrow{y\\text{ 轴对称}} C(1, -4)\\\\[4pt]\\text{x 轴对称：y 变号；y 轴对称：x 变号}',
  },
  // Q3 描点 + 交点个数 + 因式分解
  {
    id: 'gpq-3',
    question: '',
    questionLatex: '\\text{函数 }y = x^2 - 4x + 3\\text{ 与 x 轴交于哪两个点？}',
    type: 'choice',
    options: [
      { label: 'A', value: '(1, 0)\\text{ 和 }(3, 0)', isLatex: true },
      { label: 'B', value: '(-1, 0)\\text{ 和 }(-3, 0)', isLatex: true },
      { label: 'C', value: '(1, 0)\\text{ 和 }(-3, 0)', isLatex: true },
      { label: 'D', value: '(4, 0)\\text{ 和 }(3, 0)', isLatex: true },
    ],
    correctAnswer: '(1, 0)\\text{ 和 }(3, 0)',
    explanation: '',
    explanationLatex: '\\text{令 }y = 0\\text{：}x^2 - 4x + 3 = 0\\\\[4pt](x-1)(x-3) = 0\\\\[4pt]x = 1\\text{ 或 }x = 3\\\\[4pt]\\text{交点 }(1, 0)\\text{ 和 }(3, 0)',
  },
  // Q4 描点 + 最值 + 区间
  {
    id: 'gpq-4',
    question: '',
    questionLatex: '\\text{函数 }y = -x^2 + 2x\\text{ 在 }x \\in [0, 3]\\text{ 上的最大值是？}',
    type: 'choice',
    options: [
      { label: 'A', value: '0', isLatex: true },
      { label: 'B', value: '1', isLatex: true },
      { label: 'C', value: '-3', isLatex: true },
      { label: 'D', value: '2', isLatex: true },
    ],
    correctAnswer: '1',
    explanation: '',
    explanationLatex: 'y = -x^2 + 2x = -(x^2 - 2x) = -(x-1)^2 + 1\\\\[4pt]\\text{开口向下，顶点 }(1, 1)\\\\[4pt]1 \\in [0, 3]\\text{，所以最大值为 }1',
  },
  // Q5 图像增减性 + 联动3.0.5
  {
    id: 'gpq-5',
    question: '',
    questionLatex: '\\text{函数 }y = x^2 - 2x\\text{ 在哪个区间上是减函数？}',
    type: 'choice',
    options: [
      { label: 'A', value: 'x > 1', isLatex: true },
      { label: 'B', value: 'x < 1', isLatex: true },
      { label: 'C', value: 'x > 0', isLatex: true },
      { label: 'D', value: 'x < 0', isLatex: true },
    ],
    correctAnswer: 'x < 1',
    explanation: '',
    explanationLatex: 'y = x^2 - 2x = (x-1)^2 - 1\\\\[4pt]\\text{开口向上，对称轴 }x = 1\\\\[4pt]\\text{对称轴左侧下降 }\\rightarrow x < 1\\text{ 时为减函数}\\\\[4pt]\\text{对称轴右侧上升 }\\rightarrow x > 1\\text{ 时为增函数}',
  },
  // Q6 平移 + 逆向判断
  {
    id: 'gpq-6',
    question: '',
    questionLatex: '\\text{将某函数图像向左平移 2、向上平移 3 后得到 }y = (x+1)^2 + 5\\text{，则原函数是？}',
    type: 'choice',
    options: [
      { label: 'A', value: 'y = (x-1)^2 + 2', isLatex: true },
      { label: 'B', value: 'y = (x+3)^2 + 8', isLatex: true },
      { label: 'C', value: 'y = (x-1)^2 + 8', isLatex: true },
      { label: 'D', value: 'y = (x+3)^2 + 2', isLatex: true },
    ],
    correctAnswer: 'y = (x-1)^2 + 2',
    explanation: '',
    explanationLatex: '\\text{逆向还原：左移 2 的逆 = 右移 2，上移 3 的逆 = 下移 3}\\\\[4pt]y = (x+1)^2 + 5 \\xrightarrow{\\text{右移 2}} y = (x+1-2)^2 + 5 = (x-1)^2 + 5\\\\[4pt]\\xrightarrow{\\text{下移 3}} y = (x-1)^2 + 5 - 3 = (x-1)^2 + 2',
  },
  // Q7 平移 + 定义域变化 + 联动3.0.5
  {
    id: 'gpq-7',
    question: '',
    questionLatex: '\\text{函数 }y = \\sqrt{x + 2} - 1\\text{ 的图像过点 }(a, 0)\\text{，则 }a = ?',
    type: 'choice',
    options: [
      { label: 'A', value: '-2', isLatex: true },
      { label: 'B', value: '-1', isLatex: true },
      { label: 'C', value: '1', isLatex: true },
      { label: 'D', value: '2', isLatex: true },
    ],
    correctAnswer: '-1',
    explanation: '',
    explanationLatex: '\\text{过 }(a, 0)\\text{ 即 }y = 0\\text{：}\\\\[4pt]\\sqrt{a + 2} - 1 = 0\\\\[4pt]\\sqrt{a + 2} = 1 \\Rightarrow a + 2 = 1\\\\[4pt]a = -1',
  },
  // Q8 综合大题：平移 + 指数函数 + 定点 + 联动3.1
  {
    id: 'gpq-8',
    question: '',
    questionLatex: '\\text{将 }y = 3^x\\text{ 向右平移 1 个单位再向下平移 2 个单位，新函数过 }(1, a)\\text{，则 }a = ?',
    type: 'choice',
    options: [
      { label: 'A', value: '-2', isLatex: true },
      { label: 'B', value: '-1', isLatex: true },
      { label: 'C', value: '0', isLatex: true },
      { label: 'D', value: '1', isLatex: true },
    ],
    correctAnswer: '-1',
    explanation: '',
    explanationLatex: '\\text{右移 1：}y = 3^{x-1}\\\\[4pt]\\text{下移 2：}y = 3^{x-1} - 2\\\\[4pt]\\text{令 }x = 1\\text{：}y = 3^{1-1} - 2 = 3^0 - 2 = 1 - 2 = -1',
  },
];
