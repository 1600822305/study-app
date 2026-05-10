import type { QuizQuestionData } from '@/types';

// ── 分类讨论练习 ──
export const absClassifyPractice: QuizQuestionData[] = [
  {
    id: 'absclf-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{化简 }|x + 1| - 2x\\text{（写成分段函数形式）}',
    correctAnswer: '\\begin{cases} -x+1, & x \\geq -1 \\\\ -3x-1, & x < -1 \\end{cases}',
    acceptableAnswers: [
      '\\begin{cases} -x+1, & x \\geq -1 \\\\ -3x-1, & x < -1 \\end{cases}',
      '1-x (x≥-1), -3x-1 (x<-1)',
    ],
  },
  {
    id: 'absclf-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{化简 }|2x - 4| + x\\text{（写成分段函数形式）}',
    correctAnswer: '\\begin{cases} 3x-4, & x \\geq 2 \\\\ -x+4, & x < 2 \\end{cases}',
    acceptableAnswers: [
      '\\begin{cases} 3x-4, & x \\geq 2 \\\\ -x+4, & x < 2 \\end{cases}',
      '3x-4 (x≥2), -x+4 (x<2)',
    ],
  },
];

// ── 绝对值方程练习 ──
export const absEquationPractice: QuizQuestionData[] = [
  {
    id: 'abseq-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{解方程 }|x + 3| = 2x - 1',
    correctAnswer: 'x = 4',
    acceptableAnswers: [
      'x = 4',
      '4',
    ],
  },
  {
    id: 'abseq-3',
    type: 'blank',
    question: '',
    questionLatex: '\\text{解方程 }|2x - 1| = |x + 3|',
    correctAnswer: 'x = 4 \\text{ 或 } x = -\\dfrac{2}{3}',
    acceptableAnswers: [
      'x = 4 \\text{ 或 } x = -\\dfrac{2}{3}',
      'x=4或x=-2/3',
      '4, -2/3',
    ],
  },
];

// ── 绝对值不等式练习 ──
export const absInequalityPractice: QuizQuestionData[] = [
  {
    id: 'absineq-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{解不等式 }|2x - 5| < 3',
    correctAnswer: 'x \\in (1, 4)',
    acceptableAnswers: [
      'x \\in (1, 4)',
      '(1,4)',
      '1<x<4',
    ],
  },
  {
    id: 'absineq-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{解不等式 }|x + 3| \\geq 4',
    correctAnswer: 'x \\in (-\\infty, -7] \\cup [1, +\\infty)',
    acceptableAnswers: [
      'x \\in (-\\infty, -7] \\cup [1, +\\infty)',
      '(-∞,-7]∪[1,+∞)',
      'x≤-7或x≥1',
    ],
  },
  {
    id: 'absineq-3',
    type: 'blank',
    question: '',
    questionLatex: '\\text{解不等式 }|x + 2| \\leq 3x',
    correctAnswer: 'x \\in [1, +\\infty)',
    acceptableAnswers: [
      'x \\in [1, +\\infty)',
      '[1,+∞)',
      'x≥1',
    ],
  },
  {
    id: 'absineq-4',
    type: 'blank',
    question: '',
    questionLatex: '\\text{解不等式 }|3x - 1| > x + 5',
    correctAnswer: 'x \\in (-\\infty, -1) \\cup (3, +\\infty)',
    acceptableAnswers: [
      'x \\in (-\\infty, -1) \\cup (3, +\\infty)',
      '(-∞,-1)∪(3,+∞)',
      'x<-1或x>3',
    ],
  },
];

// ── 三角不等式练习 ──
export const absTrianglePractice: QuizQuestionData[] = [
  {
    id: 'abstri-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }|x - 2| + |x + 5|\\text{ 的最小值}',
    correctAnswer: '7',
    acceptableAnswers: ['7'],
  },
  {
    id: 'abstri-4',
    type: 'blank',
    question: '',
    questionLatex: '\\text{已知 }|x - 2| \\leq 1\\text{，求 }|x + 1|\\text{ 的范围}',
    correctAnswer: '2 \\leq |x+1| \\leq 4',
    acceptableAnswers: [
      '2 \\leq |x+1| \\leq 4',
      '[2,4]',
      '2≤|x+1|≤4',
    ],
  },
  {
    id: 'abstri-3',
    type: 'blank',
    question: '',
    questionLatex: '\\text{已知 }|x| \\leq 3\\text{，求 }|x + 5|\\text{ 的范围}',
    correctAnswer: '2 \\leq |x+5| \\leq 8',
    acceptableAnswers: [
      '2 \\leq |x+5| \\leq 8',
      '[2,8]',
      '2≤|x+5|≤8',
    ],
  },
  {
    id: 'abstri-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }|2x + 1| + |2x - 3|\\text{ 的最小值}',
    correctAnswer: '4',
    acceptableAnswers: ['4'],
  },
];

// ── 含参绝对值不等式练习 ──
export const absParamPractice: QuizQuestionData[] = [
  {
    id: 'absparam-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{解不等式 }|x - 2| + |x + 1| \\leq 5',
    correctAnswer: '-2 \\leq x \\leq 3',
    acceptableAnswers: [
      '-2 \\leq x \\leq 3',
      '[-2,3]',
      '-2≤x≤3',
    ],
  },
  {
    id: 'absparam-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{解不等式 }|x + 1| + |x - 4| \\geq 7',
    correctAnswer: 'x \\leq -2 \\text{ 或 } x \\geq 5',
    acceptableAnswers: [
      'x \\leq -2 \\text{ 或 } x \\geq 5',
      'x≤-2或x≥5',
      '(-∞,-2]∪[5,+∞)',
    ],
  },
  {
    id: 'absparam-3',
    type: 'blank',
    question: '',
    fullRow: true,
    questionLatex: '\\text{若 }|x + 2| + |x - 3| \\geq m\\text{ 对一切 }x\\text{ 恒成立，求 }m\\text{ 的范围}',
    correctAnswer: 'm \\leq 5',
    acceptableAnswers: [
      'm \\leq 5',
      'm≤5',
      '(-∞,5]',
    ],
  },
];

// ── 绝对值定义应用练习 ──
export const absDefinitionPractice: QuizQuestionData[] = [
  {
    id: 'absdef-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{已知实数 }x\\text{、}y\\text{ 满足 }|3x - y| = 3x - y\\text{ 且 }|x - 2y + 4| = -(x - 2y + 4)\\text{，求 }x + y\\text{ 的取值范围}',
    correctAnswer: '\\left[\\dfrac{16}{5}, +\\infty\\right)',
    acceptableAnswers: [
      '\\left[\\dfrac{16}{5}, +\\infty\\right)',
      '[16/5,+∞)',
      'x+y≥16/5',
    ],
  },
  {
    id: 'absdef-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{已知 }|a - 1| = a - 1\\text{ 且 }|2a - b| = -(2a - b)\\text{，求 }a - b\\text{ 的取值范围}',
    correctAnswer: '(-\\infty, -1]',
    acceptableAnswers: [
      '(-\\infty, -1]',
      '(-∞,-1]',
      'a-b≤-1',
    ],
  },
];
