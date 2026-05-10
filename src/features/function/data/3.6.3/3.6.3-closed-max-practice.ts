import type { QuizQuestionData } from '@/types';

export const closedMaxExample1Practice: QuizQuestionData[] = [
  {
    id: 'cmax1-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=x^3-3x^2-9x+1\\text{ 在 }[-2,4]\\text{ 上的最值}',
    correctAnswer: '\\text{最大值 }6,\\text{ 最小值 }-26',
    acceptableAnswers: [
      '\\text{最大值 }6,\\text{ 最小值 }-26',
      '最大值6;最小值-26',
      '最大6,最小-26',
    ],
  },
];

// ── 4.2 例 2 同款练习（含 ln 闭区间最值） ──
export const closedMaxExample2Practice: QuizQuestionData[] = [
  {
    id: 'cmax2-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=\\dfrac{\\ln x}{x}\\text{ 在 }[1,e^2]\\text{ 上的最值}',
    correctAnswer: '\\text{最大值 }\\dfrac{1}{e},\\text{ 最小值 }0',
    acceptableAnswers: [
      '\\text{最大值 }\\dfrac{1}{e},\\text{ 最小值 }0',
      '最大值1/e;最小值0',
      '最大1/e,最小0',
    ],
  },
];

// ── 4.2 例 3 同款练习（含 e^x 闭区间最值） ──
export const closedMaxExample3Practice: QuizQuestionData[] = [
  {
    id: 'cmax3-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=x\\,e^x\\text{ 在 }[-2,1]\\text{ 上的最值}',
    correctAnswer: '\\text{最大值 }e,\\text{ 最小值 }-\\dfrac{1}{e}',
    acceptableAnswers: [
      '\\text{最大值 }e,\\text{ 最小值 }-\\dfrac{1}{e}',
      '最大值e;最小值-1/e',
      '最大e,最小-1/e',
    ],
  },
  {
    id: 'cmax3-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=e^{2x}-4x\\text{ 在 }[0,1]\\text{ 上的最值}',
    correctAnswer: '\\text{最大值 }e^2-4,\\text{ 最小值 }2-2\\ln 2',
    acceptableAnswers: [
      '\\text{最大值 }e^2-4,\\text{ 最小值 }2-2\\ln 2',
      '最大值e²-4;最小值2-2ln2',
      '最大e^2-4,最小2-2ln2',
    ],
  },
];

// ── 4.2 例 4 同款练习（含参讨论闭区间最值） ──
export const closedMaxExample4Practice: QuizQuestionData[] = [
  {
    id: 'cmax4-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=x^3-3ax\\text{ 在 }[0,2]\\text{ 上的最小值（按 }a\\text{ 分类）}',
    correctAnswer: 'a\\le 0:\\,0;\\ 0<a<4:\\,-2a\\sqrt{a};\\ a\\ge 4:\\,8-6a',
    acceptableAnswers: [
      'a\\le 0:\\,0;\\ 0<a<4:\\,-2a\\sqrt{a};\\ a\\ge 4:\\,8-6a',
    ],
  },
];

// ── 4.2 例 5 同款练习（分式型闭区间最值） ──
export const closedMaxExample5Practice: QuizQuestionData[] = [
  {
    id: 'cmax5-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=\\dfrac{x^2+1}{x}\\text{ 在 }[1,3]\\text{ 上的最值}',
    correctAnswer: '\\text{最大值 }\\dfrac{10}{3},\\text{ 最小值 }2',
    acceptableAnswers: [
      '\\text{最大值 }\\dfrac{10}{3},\\text{ 最小值 }2',
      '最大值10/3;最小值2',
      '最大10/3,最小2',
    ],
  },
];

