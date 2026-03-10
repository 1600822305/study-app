import type { QuizQuestionData } from '@/types';

// ── 综合自测（8题·高考选择题基础档） ──
export const derivPrereqQuizQuestions: QuizQuestionData[] = [
  // Q1 极限陷阱：0.999...=1，考概念理解
  {
    id: 'dpq-1',
    question: '',
    questionLatex: '\\text{下列说法中，}\\ \\textbf{错误}\\ \\text{的是？}',
    type: 'choice',
    options: [
      { label: 'A', value: '0.\\overline{9} = 1', isLatex: true },
      { label: 'B', value: '\\text{极限等于某个值，不代表数列中某项等于该值}', isLatex: true },
      { label: 'C', value: '\\text{趋近于 1 的数列，每一项都小于 1}', isLatex: true },
      { label: 'D', value: '\\text{常数列 }5, 5, 5, \\cdots\\text{ 的极限是 5}', isLatex: true },
    ],
    correctAnswer: '\\text{趋近于 1 的数列，每一项都小于 1}',
    explanation: '',
    explanationLatex: '\\text{C 错：}2, 1.5, 1.25, \\cdots\\text{ 趋近 1，但每项都大于 1}\\\\[4pt]\\text{也可以从两侧交替趋近，如 }0.9, 1.1, 0.99, 1.01, \\cdots\\\\[4pt]\\text{A 对：数学上 }0.\\overline{9} = 1\\\\[4pt]\\text{B 对：如 }\\dfrac{1}{2}, \\dfrac{2}{3}, \\cdots\\text{ 趋近 1 但永远不等于 1}\\\\[4pt]\\text{D 对：常数列极限就是它本身}',
  },
  // Q2 平均变化率计算 + 陷阱（分子分母顺序）
  {
    id: 'dpq-2',
    question: '',
    questionLatex: '\\text{函数 }f(x) = x^2 + 2x\\text{ 从 }x = 1\\text{ 到 }x = 4\\text{ 的平均变化率是？}',
    type: 'choice',
    options: [
      { label: 'A', value: '5', isLatex: true },
      { label: 'B', value: '7', isLatex: true },
      { label: 'C', value: '21', isLatex: true },
      { label: 'D', value: '8', isLatex: true },
    ],
    correctAnswer: '7',
    explanation: '',
    explanationLatex: 'f(1) = 1 + 2 = 3,\\quad f(4) = 16 + 8 = 24\\\\[4pt]\\dfrac{f(4) - f(1)}{4 - 1} = \\dfrac{24 - 3}{3} = \\dfrac{21}{3} = 7\\\\[4pt]\\text{陷阱：C 选项 21 是分子 }\\Delta y\\text{，忘了除以 }\\Delta x',
  },
  // Q3 反向推理：已知平均变化率求参数
  {
    id: 'dpq-3',
    question: '',
    questionLatex: '\\text{函数 }f(x) = x^2 + ax\\text{ 在 }[1, 3]\\text{ 上的平均变化率为 6，则 }a = \\text{？}',
    type: 'choice',
    options: [
      { label: 'A', value: '1', isLatex: true },
      { label: 'B', value: '2', isLatex: true },
      { label: 'C', value: '3', isLatex: true },
      { label: 'D', value: '4', isLatex: true },
    ],
    correctAnswer: '2',
    explanation: '',
    explanationLatex: 'f(1) = 1 + a,\\quad f(3) = 9 + 3a\\\\[4pt]\\dfrac{f(3)-f(1)}{3-1} = \\dfrac{(9+3a)-(1+a)}{2} = \\dfrac{8+2a}{2} = 4+a\\\\[4pt]4+a = 6 \\implies a = 2',
  },
  // Q4 一次函数陷阱：区间变了，平均变化率变不变？
  {
    id: 'dpq-4',
    question: '',
    questionLatex: '\\text{函数 }f(x) = 3x - 1\\text{ 在 }[1,5]\\text{ 和 }[2,100]\\text{ 上的平均变化率分别为 }k_1, k_2\\text{，则？}',
    type: 'choice',
    options: [
      { label: 'A', value: 'k_1 > k_2', isLatex: true },
      { label: 'B', value: 'k_1 < k_2', isLatex: true },
      { label: 'C', value: 'k_1 = k_2 = 3', isLatex: true },
      { label: 'D', value: '\\text{无法确定}', isLatex: true },
    ],
    correctAnswer: 'k_1 = k_2 = 3',
    explanation: '',
    explanationLatex: '\\text{一次函数 }y = kx + b\\text{ 的平均变化率恒等于斜率 }k\\\\[4pt]\\text{不管选哪个区间，结果都是 }k = 3\\\\[4pt]\\text{这是一次函数的特殊性质：割线就是它自己}',
  },
  // Q5 Δx→0 推理：需要先化简再代入
  {
    id: 'dpq-5',
    question: '',
    questionLatex: 'f(x) = x^2\\text{ 在 }x = 3\\text{ 到 }x = 3 + \\Delta x\\text{ 的平均变化率为？}',
    type: 'choice',
    options: [
      { label: 'A', value: '6', isLatex: true },
      { label: 'B', value: '6 + \\Delta x', isLatex: true },
      { label: 'C', value: '3 + \\Delta x', isLatex: true },
      { label: 'D', value: '9 + \\Delta x', isLatex: true },
    ],
    correctAnswer: '6 + \\Delta x',
    explanation: '',
    explanationLatex: '\\dfrac{f(3+\\Delta x) - f(3)}{\\Delta x} = \\dfrac{(3+\\Delta x)^2 - 9}{\\Delta x}\\\\[4pt]= \\dfrac{9 + 6\\Delta x + (\\Delta x)^2 - 9}{\\Delta x} = \\dfrac{6\\Delta x + (\\Delta x)^2}{\\Delta x} = 6 + \\Delta x\\\\[4pt]\\text{当 }\\Delta x \\rightarrow 0\\text{ 时，平均变化率 }\\rightarrow 6\\text{（即 }f\'(3) = 6\\text{）}',
  },
  // Q6 几何意义经典陷阱："在某点的切线" vs "过某点的切线"
  {
    id: 'dpq-6',
    question: '',
    questionLatex: '\\text{下列关于切线的说法，}\\ \\textbf{正确}\\ \\text{的是？}',
    type: 'choice',
    options: [
      { label: 'A', value: '\\text{切线一定只和曲线有一个交点}', isLatex: true },
      { label: 'B', value: '\\text{"在点 P 处的切线"和"过点 P 的切线"是同一回事}', isLatex: true },
      { label: 'C', value: '\\text{切线斜率等于该点处的导数值}', isLatex: true },
      { label: 'D', value: '\\text{切线不可能和曲线再有其他交点}', isLatex: true },
    ],
    correctAnswer: '\\text{切线斜率等于该点处的导数值}',
    explanation: '',
    explanationLatex: '\\text{C 对：切线斜率 }= f\'(x_0)\\text{，这是导数的几何意义}\\\\[4pt]\\text{A 错：切线可能在其他地方和曲线再相交（如 }y = x^3\\text{）}\\\\[4pt]\\text{B 错：高考经典陷阱！"在 P 处"指切点是 P；"过 P"指切线经过 P，P 不一定是切点}\\\\[4pt]\\text{D 错：同 A 的理由}',
  },
  // Q7 综合：割线→切线的本质
  {
    id: 'dpq-7',
    question: '',
    questionLatex: '\\text{曲线 }y = x^2\\text{ 上，点 }A(2,4)\\text{ 处的切线斜率为 4。}\\\\\\text{以下哪个过程能得到这个结果？}',
    type: 'choice',
    options: [
      { label: 'A', value: '\\text{计算 }A\\text{ 和 }B(3,9)\\text{ 连线的斜率}', isLatex: true },
      { label: 'B', value: '\\text{让 }B\\text{ 沿曲线无限靠近 }A\\text{，割线斜率的极限}', isLatex: true },
      { label: 'C', value: '\\text{计算 }f(2) \\div 2', isLatex: true },
      { label: 'D', value: '\\text{计算 }f(4) - f(2)', isLatex: true },
    ],
    correctAnswer: '\\text{让 }B\\text{ 沿曲线无限靠近 }A\\text{，割线斜率的极限}',
    explanation: '',
    explanationLatex: '\\text{B 对：这正是导数的定义过程}\\\\[4pt]\\text{当 B 无限靠近 A 时，}\\Delta x \\rightarrow 0\\\\[4pt]\\text{割线斜率 }\\rightarrow\\text{ 切线斜率 }= f\'(2) = 4\\\\[4pt]\\text{A 错：那只是一条特定割线的斜率（= 5），不是切线}\\\\[4pt]\\text{C 错：}f(2) \\div 2 = 2\\text{，和导数无关}\\\\[4pt]\\text{D 错：}f(4)-f(2) = 12\\text{，是函数值的差，不是斜率}',
  },
  // Q8 多选项辨析：考综合理解
  {
    id: 'dpq-8',
    question: '',
    questionLatex: '\\text{关于 }f(x) = x^2\\text{ 在 }x = 2\\text{ 处的导数，下列说法正确的有几个？}\\\\\\text{① 导数 }f\'(2) = 4\\quad\\text{② 切线方程为 }y = 4x - 4\\\\\\text{③ 导数表示曲线在该点的瞬时变化率}\\quad\\text{④ 导数等于 }f(2)\\text{ 的值}',
    type: 'choice',
    options: [
      { label: 'A', value: '1 \\text{ 个}', isLatex: true },
      { label: 'B', value: '2 \\text{ 个}', isLatex: true },
      { label: 'C', value: '3 \\text{ 个}', isLatex: true },
      { label: 'D', value: '4 \\text{ 个}', isLatex: true },
    ],
    correctAnswer: '3 \\text{ 个}',
    explanation: '',
    explanationLatex: '\\text{① 对：}f\'(x) = 2x \\implies f\'(2) = 4\\\\[4pt]\\text{② 对：过 }(2,4)\\text{，斜率 4 }\\implies y - 4 = 4(x-2) \\implies y = 4x-4\\\\[4pt]\\text{③ 对：导数 = 瞬时变化率，这是定义}\\\\[4pt]\\text{④ 错：}f(2) = 4\\text{ 是函数值，}f\'(2) = 4\\text{ 是导数值}\\\\\\text{数值碰巧相等，但含义完全不同！}\\\\[4pt]\\text{正确的有 ①②③ 共 3 个}',
  },
];
