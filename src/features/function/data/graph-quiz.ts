import type { QuizQuestionData } from '@/types';

// ── 综合自测（8题·高考真题/改编，覆盖全部4节） ──
export const graphQuizQuestions: QuizQuestionData[] = [
  // Q1 (2019全国I改编) 零点区间
  {
    id: 'fgq-1',
    question: '',
    questionLatex: '\\text{【2019全国I改编】函数 }f(x) = e^x + x - 2\\text{ 的零点所在的区间是？}',
    type: 'choice',
    options: [
      { label: 'A', value: '(-1, 0)', isLatex: true },
      { label: 'B', value: '(0, 1)', isLatex: true },
      { label: 'C', value: '(1, 2)', isLatex: true },
      { label: 'D', value: '(2, 3)', isLatex: true },
    ],
    correctAnswer: '(0, 1)',
    explanation: '',
    explanationLatex: 'f(0) = e^0 + 0 - 2 = 1 - 2 = -1 < 0\\\\[4pt]f(1) = e + 1 - 2 = e - 1 \\approx 1.72 > 0\\\\[4pt]f(0) \\cdot f(1) < 0\\text{，且 }f(x)\\text{ 连续}\\\\[4pt]\\text{由零点存在性定理，零点在 }(0, 1)\\text{ 内}',
  },
  // Q2 (2017全国III改编) 零点区间
  {
    id: 'fgq-2',
    question: '',
    questionLatex: '\\text{【2017全国III改编】函数 }f(x) = 2x + 2^x - 6\\text{ 的零点所在的区间是？}',
    type: 'choice',
    options: [
      { label: 'A', value: '(0, 1)', isLatex: true },
      { label: 'B', value: '(1, 2)', isLatex: true },
      { label: 'C', value: '(2, 3)', isLatex: true },
      { label: 'D', value: '(3, 4)', isLatex: true },
    ],
    correctAnswer: '(1, 2)',
    explanation: '',
    explanationLatex: 'f(1) = 2 + 2 - 6 = -2 < 0\\\\[4pt]f(2) = 4 + 4 - 6 = 2 > 0\\\\[4pt]f(1) \\cdot f(2) < 0\\text{，且 }f(x)\\text{ 连续}\\\\[4pt]\\text{零点在 }(1, 2)\\text{ 内}',
  },
  // Q3 (2020新高考改编) 存在性定理理解
  {
    id: 'fgq-3',
    question: '',
    questionLatex: '\\text{【2020新高考改编】连续函数 }f(x)\\text{ 满足 }f(0) = -2,\\; f(2) = -1,\\; f(4) = 3\\text{，下列正确的是？}',
    type: 'choice',
    options: [
      { label: 'A', value: '\\text{在 }(0, 2)\\text{ 内一定有零点}', isLatex: true },
      { label: 'B', value: '\\text{在 }(2, 4)\\text{ 内一定有零点}', isLatex: true },
      { label: 'C', value: '\\text{在 }(0, 4)\\text{ 内一定没有零点}', isLatex: true },
      { label: 'D', value: '\\text{在 }(0, 2)\\text{ 和 }(2, 4)\\text{ 内各有零点}', isLatex: true },
    ],
    correctAnswer: '\\text{在 }(2, 4)\\text{ 内一定有零点}',
    explanation: '',
    explanationLatex: 'f(0) = -2,\\; f(2) = -1\\text{，同为负} \\rightarrow f(0) \\cdot f(2) > 0\\\\[4pt]\\text{不能保证 }(0, 2)\\text{ 内有零点，A 错}\\\\[4pt]f(2) = -1 < 0,\\; f(4) = 3 > 0 \\rightarrow f(2) \\cdot f(4) < 0\\\\[4pt]\\text{连续 + 异号} \\rightarrow (2, 4)\\text{ 内一定有零点，B 对}\\\\[4pt]\\text{D 错：}(0,2)\\text{ 内不一定有}',
  },
  // Q4 (高考高频题型) 数形结合
  {
    id: 'fgq-4',
    question: '',
    questionLatex: '\\text{【高考高频】方程 }\\log_2 x + x = 4\\text{ 的实数根的个数是？}',
    type: 'choice',
    options: [
      { label: 'A', value: '0', isLatex: true },
      { label: 'B', value: '1', isLatex: true },
      { label: 'C', value: '2', isLatex: true },
      { label: 'D', value: '3', isLatex: true },
    ],
    correctAnswer: '1',
    explanation: '',
    explanationLatex: '\\text{拆为 }y_1 = \\log_2 x\\text{（递增）和 }y_2 = 4 - x\\text{（递减）}\\\\[4pt]\\text{一增一减} \\rightarrow \\text{最多 1 个交点}\\\\[4pt]f(2) = 1 + 2 = 3 < 4\\\\[4pt]f(4) = 2 + 4 = 6 > 4\\\\[4pt]\\text{由存在性定理，}(2, 4)\\text{ 内恰有 1 个根}',
  },
  // Q5 (2018全国改编) 二分法
  {
    id: 'fgq-5',
    question: '',
    questionLatex: '\\text{【2018全国改编】}f(x) = 3^x - 5\\text{ 在 }(1, 2)\\text{ 内有零点。取中点 }x_0 = 1.5\\text{，}\\\\f(1.5) = 3^{1.5} - 5 \\approx 0.20 > 0\\text{，则零点所在的新区间是？}',
    type: 'choice',
    options: [
      { label: 'A', value: '(1,\\; 1.5)', isLatex: true },
      { label: 'B', value: '(1.5,\\; 2)', isLatex: true },
      { label: 'C', value: '(1,\\; 2)', isLatex: true },
      { label: 'D', value: '\\text{无法确定}', isLatex: true },
    ],
    correctAnswer: '(1,\\; 1.5)',
    explanation: '',
    explanationLatex: 'f(1) = 3 - 5 = -2 < 0\\\\[4pt]f(1.5) \\approx 0.20 > 0\\\\[4pt]f(1) < 0,\\; f(1.5) > 0 \\rightarrow \\text{异号}\\\\[4pt]\\text{零点在 }(1, 1.5)\\text{ 内继续二分}',
  },
  // Q6 (高考高频) 含参零点
  {
    id: 'fgq-6',
    question: '',
    questionLatex: '\\text{【高考高频】函数 }f(x) = x^2 - 2x + a\\text{ 没有零点的充要条件是？}',
    type: 'choice',
    options: [
      { label: 'A', value: 'a > 0', isLatex: true },
      { label: 'B', value: 'a > 1', isLatex: true },
      { label: 'C', value: 'a \\geq 1', isLatex: true },
      { label: 'D', value: 'a < 1', isLatex: true },
    ],
    correctAnswer: 'a > 1',
    explanation: '',
    explanationLatex: '\\text{没有零点} \\Leftrightarrow \\Delta < 0\\\\[4pt]\\Delta = (-2)^2 - 4a = 4 - 4a < 0\\\\[4pt]4a > 4 \\rightarrow a > 1\\\\[4pt]\\text{C 错：}a = 1\\text{ 时 }\\Delta = 0\\text{，有 1 个零点（重根）}',
  },
  // Q7 (2015全国改编) 数形结合
  {
    id: 'fgq-7',
    question: '',
    questionLatex: '\\text{【2015全国改编】方程 }2^{-x} = x - 1\\text{ 的实数根的个数是？}',
    type: 'choice',
    options: [
      { label: 'A', value: '0', isLatex: true },
      { label: 'B', value: '1', isLatex: true },
      { label: 'C', value: '2', isLatex: true },
      { label: 'D', value: '3', isLatex: true },
    ],
    correctAnswer: '1',
    explanation: '',
    explanationLatex: 'y_1 = 2^{-x}\\text{（递减指数，}x = 0\\text{ 时 }y = 1\\text{，}x \\to +\\infty\\text{ 时 }y \\to 0\\text{）}\\\\[4pt]y_2 = x - 1\\text{（递增直线，过 }(1, 0)\\text{）}\\\\[4pt]\\text{一减一增} \\rightarrow \\text{最多 1 个交点}\\\\[4pt]x = 1\\text{ 时：}2^{-1} = 0.5 > 0 \\rightarrow y_1 > y_2\\\\[4pt]x = 2\\text{ 时：}2^{-2} = 0.25 < 1 \\rightarrow y_1 < y_2\\\\[4pt]\\text{在 }(1, 2)\\text{ 内恰有 1 个交点}',
  },
  // Q8 (高考压轴改编) 综合·含参零点个数
  {
    id: 'fgq-8',
    question: '',
    questionLatex: '\\text{【高考改编】关于 }x\\text{ 的方程 }|x^2 - 4| = a\\text{ 有 4 个不同实数根，则 }a\\text{ 的范围是？}',
    type: 'choice',
    options: [
      { label: 'A', value: 'a > 0', isLatex: true },
      { label: 'B', value: '0 < a < 4', isLatex: true },
      { label: 'C', value: 'a = 4', isLatex: true },
      { label: 'D', value: '0 < a \\leq 4', isLatex: true },
    ],
    correctAnswer: '0 < a < 4',
    explanation: '',
    explanationLatex: 'y = |x^2 - 4|\\text{ 的图像呈"W"形：}\\\\[4pt]\\text{在 }x = \\pm 2\\text{ 处 }y = 0\\text{（谷底）}\\\\[4pt]\\text{在 }x = 0\\text{ 处 }y = 4\\text{（局部最高点）}\\\\[4pt]y = a\\text{ 是水平线，要与 W 形交 4 次}\\\\[4pt]\\text{当 }0 < a < 4\\text{ 时，水平线穿过 W 的四个"腰"} \\rightarrow \\text{4 个根}\\\\[4pt]a = 0\\text{ 时只有 2 根，}a = 4\\text{ 时只有 3 根，}a > 4\\text{ 时只有 2 根}',
  },
];
