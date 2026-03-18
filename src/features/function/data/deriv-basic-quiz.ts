import type { QuizQuestionData } from '@/types';

// ── 综合自测：7道高考真题 ──
export const derivBasicQuizQuestions: QuizQuestionData[] = [
  {
    id: 'dbq-1',
    question: '',
    questionLatex: '\\text{（2020 全国I）曲线 }y = x^3 + x + 1\\text{ 在点 }(0, 1)\\text{ 处的切线方程为}',
    type: 'choice',
    options: [
      { label: 'A', value: 'y = x + 1', isLatex: true },
      { label: 'B', value: 'y = 2x + 1', isLatex: true },
      { label: 'C', value: 'y = 3x + 1', isLatex: true },
      { label: 'D', value: 'y = 4x + 1', isLatex: true },
    ],
    correctAnswer: 'y = x + 1',
  },
  {
    id: 'dbq-2',
    question: '',
    questionLatex: '\\text{（2022 全国甲）函数 }f(x) = x^3 - 3x + 1\\text{ 的递减区间为}',
    type: 'choice',
    options: [
      { label: 'A', value: '(-\\infty, -1)', isLatex: true },
      { label: 'B', value: '(-1, 1)', isLatex: true },
      { label: 'C', value: '(1, +\\infty)', isLatex: true },
      { label: 'D', value: '(-\\infty, -1) \\cup (1, +\\infty)', isLatex: true },
    ],
    correctAnswer: '(-1, 1)',
  },
  {
    id: 'dbq-3',
    question: '',
    questionLatex: '\\text{（2021 新高考I）函数 }f(x) = (x-1)e^x\\text{ 的极小值为}',
    type: 'choice',
    options: [
      { label: 'A', value: '-e', isLatex: true },
      { label: 'B', value: '-1', isLatex: true },
      { label: 'C', value: '0', isLatex: true },
      { label: 'D', value: '-\\dfrac{1}{e}', isLatex: true },
    ],
    correctAnswer: '-1',
  },
  {
    id: 'dbq-4',
    question: '',
    questionLatex: '\\text{（2023 新高考I）函数 }f(x) = x - \\ln x\\text{ 的最小值为}',
    type: 'choice',
    options: [
      { label: 'A', value: '0', isLatex: true },
      { label: 'B', value: '1', isLatex: true },
      { label: 'C', value: 'e', isLatex: true },
      { label: 'D', value: '1 + \\ln 2', isLatex: true },
    ],
    correctAnswer: '1',
  },
  {
    id: 'dbq-5',
    question: '',
    questionLatex: '\\text{（2020 全国II）}f(x) = 2x^3 - 3x^2 - 12x + 5\\text{ 在 }[-2, 3]\\text{ 上的最大值为}',
    type: 'choice',
    options: [
      { label: 'A', value: '5', isLatex: true },
      { label: 'B', value: '12', isLatex: true },
      { label: 'C', value: '-15', isLatex: true },
      { label: 'D', value: '-4', isLatex: true },
    ],
    correctAnswer: '12',
  },
  {
    id: 'dbq-6',
    question: '',
    questionLatex: '\\text{（2022 新高考II）曲线 }y = e^x\\text{ 在点 }(1, e)\\text{ 处的切线方程为}',
    type: 'choice',
    options: [
      { label: 'A', value: 'y = ex', isLatex: true },
      { label: 'B', value: 'y = ex - e + 1', isLatex: true },
      { label: 'C', value: 'y = x + e - 1', isLatex: true },
      { label: 'D', value: 'y = ex + e', isLatex: true },
    ],
    correctAnswer: 'y = ex',
  },
  {
    id: 'dbq-7',
    question: '',
    questionLatex: '\\text{（2023 全国甲）关于 }f(x) = x^3 - 3x^2 + 1\\text{，下列正确的有几个？}\\\\[4pt]\\text{(1) }f(x)\\text{ 在 }(0, 2)\\text{ 上单调递减}\\\\[4pt]\\text{(2) }x = 0\\text{ 是极大值点}\\\\[4pt]\\text{(3) 极大值为 1，极小值为 }-3\\\\[4pt]\\text{(4) }f(x)\\text{ 在 }[-1, 3]\\text{ 上最大值为 1}',
    type: 'choice',
    options: [
      { label: 'A', value: '1\\text{ 个}', isLatex: true },
      { label: 'B', value: '2\\text{ 个}', isLatex: true },
      { label: 'C', value: '3\\text{ 个}', isLatex: true },
      { label: 'D', value: '4\\text{ 个}', isLatex: true },
    ],
    correctAnswer: '4\\text{ 个}',
  },
  // ─── 8. 2025·新高考Ⅰ卷·第12题（填空改编）— 已知切线求参数 ───
  {
    id: 'dbq-8',
    question: '',
    questionLatex: '\\text{（2025}\\cdot\\text{新高考I卷}\\cdot\\text{第12题）若直线 }y = 2x + 5\\text{ 是曲线 }y = e^x + x + a\\text{ 的切线，则 }a =',
    type: 'choice',
    options: [
      { label: 'A', value: '2', isLatex: true },
      { label: 'B', value: '3', isLatex: true },
      { label: 'C', value: '4', isLatex: true },
      { label: 'D', value: '5', isLatex: true },
    ],
    correctAnswer: '4',
  },
];
