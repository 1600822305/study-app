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
  },
];
