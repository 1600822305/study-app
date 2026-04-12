import type { QuizQuestionData } from '@/types';

export const linearFill: QuizQuestionData[] = [
  {
    id: 'fr-lf1',
    type: 'blank',
    question: '一次函数 y = kx + 1 的图像过点 (2, 5)，则 k = ____',
    questionLatex: '\\text{一次函数 }y = kx + 1\\text{ 的图像过点 }(2,\\,5)\\text{，则 }k = \\underline{\\quad}',
    correctAnswer: '2',
    acceptableAnswers: ['2'],
  },
  {
    id: 'fr-lf2',
    type: 'blank',
    question: '已知一次函数 y = kx + b 的图像过点 (2, 5) 和 (4, 11)，则 k + b = ____',
    questionLatex: '\\text{已知一次函数 }y = kx + b\\text{ 过点 }(2,\\,5)\\text{ 和 }(4,\\,11)\\text{，则 }k + b = \\underline{\\phantom{00000000}}',
    correctAnswer: '2',
    acceptableAnswers: ['2'],
  },
  {
    id: 'fr-lf3',
    type: 'blank',
    question: '一次函数 y = -2x + 8 的图像与两坐标轴围成的三角形面积为 ____',
    questionLatex: '\\text{一次函数 }y = -2x + 8\\text{ 的图像与两坐标轴围成的三角形面积为 }\\underline{\\phantom{00000000}}',
    correctAnswer: '16',
    acceptableAnswers: ['16'],
  },
  {
    id: 'fr-lf4',
    type: 'blank',
    question: '一次函数 y = x + 1 和 y = -2x + 7 的交点坐标为 ____',
    questionLatex: '\\text{一次函数 }y = x + 1\\text{ 和 }y = -2x + 7\\text{ 的交点坐标为 }\\underline{\\phantom{00000000}}',
    correctAnswer: '(2,3)',
    acceptableAnswers: ['(2,3)', '(2, 3)'],
  },
];

export const quadraticFill: QuizQuestionData[] = [
  {
    id: 'fr-qf1',
    type: 'blank',
    question: '二次函数 y = 2x² - 8x + 5 的对称轴是 x = ____，顶点纵坐标为 ____',
    questionLatex: '\\text{二次函数 }y = 2x^2 - 8x + 5\\text{ 的对称轴是 }x = \\underline{\\quad}\\text{，顶点纵坐标为 }\\underline{\\phantom{0000}}',
    correctAnswer: '2，-3',
    acceptableAnswers: ['2，-3', '2, -3', '2；-3'],
  },
  {
    id: 'fr-qf2',
    type: 'blank',
    question: '二次函数 y = -x² + 2x + 3 与 x 轴的两个交点坐标为 ____',
    questionLatex: '\\text{二次函数 }y = -x^2 + 2x + 3\\text{ 与 }x\\text{ 轴的两个交点坐标为 }\\underline{\\phantom{00000000}}',
    correctAnswer: '(-1,0)和(3,0)',
    acceptableAnswers: ['(-1,0)和(3,0)', '(-1, 0)和(3, 0)', '(-1,0)(3,0)', '(3,0)和(-1,0)'],
  },
  {
    id: 'fr-qf3',
    type: 'blank',
    question: '二次函数 y = x² - 4x + 4 与 x 轴有 ____ 个交点',
    questionLatex: '\\text{二次函数 }y = x^2 - 4x + 4\\text{ 与 }x\\text{ 轴有 }\\underline{\\quad}\\text{ 个交点}',
    correctAnswer: '1',
    acceptableAnswers: ['1', '一'],
  },
  {
    id: 'fr-qf4',
    type: 'blank',
    question: '二次函数 y = x² + 2x - 8 的图像开口方向为 ____，当 x > ____ 时 y 随 x 增大而增大',
    questionLatex: '\\text{二次函数 }y = x^2 + 2x - 8\\text{ 的图像开口方向为}\\underline{\\phantom{0000}}\\text{，当 }x > \\underline{\\quad}\\text{ 时 }y\\text{ 随 }x\\text{ 增大而增大}',
    correctAnswer: '向上，-1',
    acceptableAnswers: ['向上，-1', '向上, -1', '向上；-1'],
  },
];

export const inverseFill: QuizQuestionData[] = [
  {
    id: 'fr-if1',
    type: 'blank',
    question: '反比例函数 y = k/x 的图像经过点 (3, -4)，则 k = ____',
    questionLatex: '\\text{反比例函数 }y = \\dfrac{k}{x}\\text{ 的图像经过点 }(3,\\,-4)\\text{，则 }k = \\underline{\\quad}',
    correctAnswer: '-12',
    acceptableAnswers: ['-12'],
  },
  {
    id: 'fr-if2',
    type: 'blank',
    question: '反比例函数 y = 6/x 中，当 x = -2 时 y = ____',
    questionLatex: '\\text{反比例函数 }y = \\dfrac{6}{x}\\text{ 中，当 }x = -2\\text{ 时 }y = \\underline{\\phantom{00000000}}',
    correctAnswer: '-3',
    acceptableAnswers: ['-3'],
  },
  {
    id: 'fr-if3',
    type: 'blank',
    question: '反比例函数 y = k/x 经过点 (-2, -6)，则当 x = 4 时 y = ____',
    questionLatex: '\\text{反比例函数 }y = \\dfrac{k}{x}\\text{ 经过点 }(-2,\\,-6)\\text{，则当 }x = 4\\text{ 时 }y = \\underline{\\phantom{00000000}}',
    correctAnswer: '3',
    acceptableAnswers: ['3'],
  },
];

export const proportionalFill: QuizQuestionData[] = [
  {
    id: 'fr-pf1',
    type: 'blank',
    question: '已知正比例函数 y=(2a-1)x 的图像经过一、三象限，且 x 从 -1 增加到 2 时 y 增加了 9，则 a = ____',
    questionLatex: '\\text{已知正比例函数 }y = (2a-1)x\\text{ 的图像经过一、三象限，且 }x\\text{ 从 }-1\\text{ 增加到 }2\\text{ 时 }y\\text{ 增加了 }9\\text{，则 }a = \\underline{\\quad}',
    correctAnswer: '2',
    acceptableAnswers: ['2'],
  },
  {
    id: 'fr-pf2',
    type: 'blank',
    question: '正比例函数 y = kx 中，当 x = 2 时 y = 8，则当 y = -12 时 x = ____',
    questionLatex: '\\text{正比例函数 }y = kx\\text{ 中，当 }x = 2\\text{ 时 }y = 8\\text{，则当 }y = -12\\text{ 时 }x = \\underline{\\phantom{00000000}}',
    correctAnswer: '-3',
    acceptableAnswers: ['-3'],
  },
  {
    id: 'fr-pf3',
    type: 'blank',
    question: '正比例函数 y = kx 经过二、四象限且过点 (-2, 6)，则当 x = 4 时 y = ____',
    questionLatex: '\\text{正比例函数 }y = kx\\text{ 经过二、四象限且过点 }(-2,\\,6)\\text{，则当 }x = 4\\text{ 时 }y = \\underline{\\phantom{00000000}}',
    correctAnswer: '-12',
    acceptableAnswers: ['-12'],
  },
];
