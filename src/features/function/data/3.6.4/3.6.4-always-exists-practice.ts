import type { QuizQuestionData } from '@/types';

// ── 例 1 同款练习（恒成立·最值转化） ──
export const alwaysHoldExample1Practice: QuizQuestionData[] = [
  {
    id: 'aex1-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{已知 }f(x)=x^2-4x+a\\text{ 在 }[0,5]\\text{ 上恒有 }f(x)\\ge 0\\text{，求 }a\\text{ 的范围}',
    correctAnswer: 'a\\ge 4',
    acceptableAnswers: ['a\\ge 4', 'a≥4', '[4,+\\infty)'],
  },
];

// ── 例 2 同款练习（存在性·最值转化） ──
export const existsExample2Practice: QuizQuestionData[] = [
  {
    id: 'aex2-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{已知 }f(x)=x^2-4x+a\\text{ 在 }[0,5]\\text{ 上存在 }x\\text{ 使 }f(x)\\le 0\\text{，求 }a\\text{ 的范围}',
    correctAnswer: 'a\\le 4',
    acceptableAnswers: ['a\\le 4', 'a≤4', '(-\\infty,4]'],
  },
];

// ── 例 3 同款练习（分离参数法） ──
export const separateParamExample3Practice: QuizQuestionData[] = [
  {
    id: 'aex3-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{已知 }\\ln x\\le ax+1\\text{ 对 }x\\in(0,+\\infty)\\text{ 恒成立，求 }a\\text{ 的最小值}',
    correctAnswer: '\\dfrac{1}{e^2}',
    acceptableAnswers: ['\\dfrac{1}{e^2}', '1/e^2', '1/e²', 'e^{-2}'],
  },
];

// ── 例 4 同款练习（含 e^x 的分离参数，需分类讨论） ──
export const expSeparateParamExample5Practice: QuizQuestionData[] = [
  {
    id: 'aex5-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{已知 }e^x\\le ax\\text{ 对 }x\\in\\mathbb{R}\\text{ 恒成立，求 }a\\text{ 的范围}',
    correctAnswer: '\\text{不存在}',
    acceptableAnswers: ['不存在', '无解', '空集'],
  },
];
