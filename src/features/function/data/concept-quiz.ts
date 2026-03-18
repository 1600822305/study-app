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
  },
];
