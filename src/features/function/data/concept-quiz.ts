import type { QuizQuestionData } from '@/types';

// ── 高考真题：函数的概念与性质 8 道 ──

export const conceptQuizQuestions: QuizQuestionData[] = [
  // ─── 1. 2023·新高考Ⅰ卷·第4题 — 复合函数单调性 ───
  {
    id: 'fq-1',
    question: '（2023·新高考Ⅰ卷·第4题）',
    questionLatex:
      '\\text{设函数 } f(x) = 2^{x(x-a)} \\text{ 在区间 } (0,1) \\text{ 单调递减，则 } a \\text{ 的取值范围是}',
    options: [
      { label: 'A', value: '(-\\infty, -2]', isLatex: true },
      { label: 'B', value: '[-2, 0)', isLatex: true },
      { label: 'C', value: '(0, 2]', isLatex: true },
      { label: 'D', value: '[2, +\\infty)', isLatex: true },
    ],
    correctAnswer: '[2, +\\infty)',
    explanation: '',
    explanationLatex:
      'y = 2^t \\text{ 是增函数，要使 } f(x) = 2^{x(x-a)} \\text{ 在 } (0,1) \\text{ 递减} \\\\[4pt] \\text{需要内层 } t = x(x-a) = x^2 - ax \\text{ 在 } (0,1) \\text{ 递减} \\\\[4pt] t = x^2 - ax \\text{ 对称轴 } x = \\frac{a}{2}\\text{，在 } (0,1) \\text{ 递减需 } \\frac{a}{2} \\geq 1 \\\\[4pt] \\therefore a \\geq 2 \\quad \\text{选 D}',
  },

  // ─── 2. 2025·新高考Ⅰ卷·第5题 — 偶函数+周期+分段求值 ───
  {
    id: 'fq-2',
    question: '（2025·新高考Ⅰ卷·第5题）',
    questionLatex:
      '\\text{设 } f(x) \\text{ 是定义在 } \\mathbb{R} \\text{ 上且周期为 } 2 \\text{ 的偶函数，} \\\\[4pt] \\text{当 } 2 \\leq x \\leq 3 \\text{ 时，} f(x) = 5-2x\\text{，则 } f\\!\\left(-\\dfrac{3}{4}\\right) =',
    options: [
      { label: 'A', value: '-\\dfrac{1}{2}', isLatex: true },
      { label: 'B', value: '-\\dfrac{1}{4}', isLatex: true },
      { label: 'C', value: '\\dfrac{1}{4}', isLatex: true },
      { label: 'D', value: '\\dfrac{1}{2}', isLatex: true },
    ],
    correctAnswer: '-\\dfrac{1}{2}',
    explanation: '',
    explanationLatex:
      '\\text{偶函数：} f(-\\tfrac{3}{4}) = f(\\tfrac{3}{4}) \\\\[4pt] \\text{周期为 2：} f(\\tfrac{3}{4}) = f(\\tfrac{3}{4} + 2) = f(\\tfrac{11}{4}) \\\\[4pt] \\tfrac{11}{4} = 2.75 \\in [2,3]\\text{，代入 } f(x) = 5 - 2x \\\\[4pt] f(\\tfrac{11}{4}) = 5 - 2 \\times \\tfrac{11}{4} = 5 - \\tfrac{11}{2} = -\\tfrac{1}{2}',
  },

  // ─── 3. 2025·新高考Ⅰ卷·第8题 — 对数/单调性比大小 ───
  {
    id: 'fq-3',
    question: '（2025·新高考Ⅰ卷·第8题）',
    questionLatex:
      '\\text{若实数 } x, y, z \\text{ 满足 } 2 + \\log_2 x = 3 + \\log_3 y = 5 + \\log_5 z\\text{，} \\\\[4pt] \\text{则 } x, y, z \\text{ 的大小关系不可能是}',
    options: [
      { label: 'A', value: 'x > y > z', isLatex: true },
      { label: 'B', value: 'x > z > y', isLatex: true },
      { label: 'C', value: 'y > x > z', isLatex: true },
      { label: 'D', value: 'y > z > x', isLatex: true },
    ],
    correctAnswer: 'y > x > z',
    explanation: '',
    explanationLatex:
      '\\text{设公共值为 } k\\text{，则} \\\\[4pt] x = 2^{k-2},\\; y = 3^{k-3},\\; z = 5^{k-5} \\\\[4pt] \\text{当 } k \\text{ 取不同值时，} x,y,z \\text{ 的大小关系变化} \\\\[4pt] \\text{通过分析各函数增长速率，可排除选项 C}',
  },

  // ─── 4. 2024·新高考Ⅰ卷·第6题 — 分段函数+单调递增+含参 ───
  {
    id: 'fq-4',
    question: '（2024·新高考Ⅰ卷·第6题）',
    questionLatex:
      '\\text{已知函数 } f(x) = \\begin{cases} -x^2 - 2ax - a, & x < 0 \\\\ e^x + \\ln(x+1), & x \\geq 0 \\end{cases} \\\\[4pt] \\text{在 } \\mathbb{R} \\text{ 上单调递增，则 } a \\text{ 的取值范围是}',
    options: [
      { label: 'A', value: '(-\\infty, 0]', isLatex: true },
      { label: 'B', value: '[-1, 0]', isLatex: true },
      { label: 'C', value: '[-1, 1]', isLatex: true },
      { label: 'D', value: '[0, +\\infty)', isLatex: true },
    ],
    correctAnswer: '[-1, 0]',
    explanation: '',
    explanationLatex:
      '\\text{(1) } x \\geq 0 \\text{ 部分：} f\'(x) = e^x + \\frac{1}{x+1} > 0 \\text{，恒递增} \\\\[4pt] \\text{(2) } x < 0 \\text{ 部分：} f\'(x) = -2x - 2a > 0 \\Rightarrow x < -a \\\\[4pt] \\text{在 } x < 0 \\text{ 上递增需 } -a \\geq 0 \\Rightarrow a \\leq 0 \\\\[4pt] \\text{(3) 衔接处：} \\lim_{x \\to 0^-} f(x) \\leq f(0) \\Rightarrow -a \\leq 1 \\Rightarrow a \\geq -1 \\\\[4pt] \\therefore a \\in [-1, 0]',
  },

  // ─── 5. 2024·新高考Ⅰ卷·第8题 — 抽象函数递推比大小 ───
  {
    id: 'fq-5',
    question: '（2024·新高考Ⅰ卷·第8题）',
    questionLatex:
      '\\text{已知函数 } f(x) \\text{ 的定义域为 } \\mathbb{R}\\text{，} f(x) > f(x-1) + f(x-2)\\text{，} \\\\[4pt] \\text{当 } x < 3 \\text{ 时，} f(x) = x\\text{，则下列结论中一定正确的是}',
    options: [
      { label: 'A', value: 'f(10) > 100', isLatex: true },
      { label: 'B', value: 'f(20) > 1000', isLatex: true },
      { label: 'C', value: 'f(10) < 1000', isLatex: true },
      { label: 'D', value: 'f(20) < 10000', isLatex: true },
    ],
    correctAnswer: 'f(10) > 100',
    explanation: '',
    explanationLatex:
      'f(x) > f(x-1) + f(x-2)\\text{，从 } x=3 \\text{ 开始递推：} \\\\[4pt] f(3) > f(2) + f(1) = 2 + 1 = 3 \\\\[4pt] f(4) > f(3) + f(2) > 3 + 2 = 5 \\\\[4pt] f(5) > f(4) + f(3) > 5 + 3 = 8 \\\\[4pt] \\text{增速类似 Fibonacci，指数级增长} \\\\[4pt] \\text{可验证 } f(10) > 100 \\text{ 一定成立}',
  },

  // ─── 6. 2023·新高考Ⅰ卷·第11题（多选）— 抽象函数性质 ───
  {
    id: 'fq-6',
    question: '（2023·新高考Ⅰ卷·第11题·多选）',
    questionLatex:
      '\\text{已知函数 } f(x) \\text{ 的定义域为 } \\mathbb{R}\\text{，} f(xy) = y^2 f(x) + x^2 f(y)\\text{，则}',
    options: [
      { label: 'A', value: 'f(0) = 0', isLatex: true },
      { label: 'B', value: 'f(1) = 0', isLatex: true },
      { label: 'C', value: 'f(x) \\text{ 是偶函数}', isLatex: true },
      { label: 'D', value: 'x = 0 \\text{ 为 } f(x) \\text{ 的极小值点}', isLatex: true },
    ],
    correctAnswer: 'ABC',
    explanation: '',
    explanationLatex:
      '\\text{令 } x = y = 0\\text{：} f(0) = 0 \\cdot f(0) + 0 \\cdot f(0) = 0 \\quad \\text{A}\\checkmark \\\\[4pt] \\text{令 } y = 1\\text{：} f(x) = f(x) + x^2 f(1) \\Rightarrow x^2 f(1) = 0 \\\\[4pt] \\text{对所有 } x \\text{ 成立} \\Rightarrow f(1) = 0 \\quad \\text{B}\\checkmark \\\\[4pt] \\text{令 } y = -1\\text{：} f(-x) = f(x) + x^2 f(-1) \\\\[4pt] \\text{令 } x = y = -1\\text{：} f(1) = f(-1) + f(-1) = 2f(-1) \\\\[4pt] f(1) = 0 \\Rightarrow f(-1) = 0 \\Rightarrow f(-x) = f(x) \\quad \\text{C}\\checkmark \\\\[4pt] \\text{本题选 ABC}',
  },

  // ─── 7. 2022·新高考Ⅱ卷·第8题 — 奇偶性+已知一半求另一半 ───
  {
    id: 'fq-7',
    question: '（2022·新高考Ⅱ卷·第8题）',
    questionLatex:
      '\\text{已知 } f(x) \\text{ 是定义在 } \\mathbb{R} \\text{ 上的奇函数，} f(x+2) = -f(x)\\text{，} \\\\[4pt] \\text{当 } 0 \\leq x \\leq 1 \\text{ 时，} f(x) = x\\text{，则 } f(8.5) =',
    options: [
      { label: 'A', value: '0.5', isLatex: true },
      { label: 'B', value: '-0.5', isLatex: true },
      { label: 'C', value: '1.5', isLatex: true },
      { label: 'D', value: '-1.5', isLatex: true },
    ],
    correctAnswer: '0.5',
    explanation: '',
    explanationLatex:
      'f(x+2) = -f(x) \\Rightarrow f(x+4) = -f(x+2) = f(x) \\\\[4pt] \\text{周期为 4：} f(8.5) = f(8.5 - 8) = f(0.5) \\\\[4pt] 0.5 \\in [0,1] \\Rightarrow f(0.5) = 0.5 \\\\[4pt] \\text{选 A}',
  },

  // ─── 8. 2021·新高考Ⅰ卷·第5题 — 奇偶性+单调性综合 ───
  {
    id: 'fq-8',
    question: '（2021·新高考Ⅰ卷·第5题）',
    questionLatex:
      '\\text{已知函数 } f(x) \\text{ 为奇函数，且在 } (0, +\\infty) \\text{ 上单调递增，} \\\\[4pt] f(-3) = 0\\text{，则不等式 } \\dfrac{f(x)}{x} < 0 \\text{ 的解集为}',
    options: [
      { label: 'A', value: '(-3,0)\\cup(3,+\\infty)', isLatex: true },
      { label: 'B', value: '(-3,0)\\cup(0,3)', isLatex: true },
      { label: 'C', value: '(-\\infty,-3)\\cup(0,3)', isLatex: true },
      { label: 'D', value: '(-\\infty,-3)\\cup(3,+\\infty)', isLatex: true },
    ],
    correctAnswer: '(-3,0)\\cup(0,3)',
    explanation: '',
    explanationLatex:
      '\\text{奇函数：} f(-3) = 0 \\Rightarrow f(3) = -f(-3) = 0 \\\\[4pt] \\frac{f(x)}{x} < 0 \\text{ 即 } f(x) \\text{ 与 } x \\text{ 异号} \\\\[4pt] \\text{当 } x > 0\\text{：需 } f(x) < 0\\text{，递增+}f(3)=0 \\Rightarrow x \\in (0,3) \\\\[4pt] \\text{当 } x < 0\\text{：需 } f(x) > 0\\text{，奇函数在 } (-\\infty,0) \\text{ 也递增} \\\\[4pt] f(-3) = 0 \\Rightarrow f(x) > 0 \\text{ 当 } x \\in (-3, 0) \\\\[4pt] \\text{解集：} (-3,0)\\cup(0,3)',
  },
];
