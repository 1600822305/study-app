import type { QuizQuestionData } from '@/types';

// ── 2.1 例 1 后即时练习（求多项式极值） ──
export const derivExtremaExample1Practice: QuizQuestionData[] = [
  {
    id: 'dex1-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=2x^3-9x^2+12x-3\\text{ 的极值}',
    correctAnswer: '\\text{极大值 }f(1)=2,\\text{ 极小值 }f(2)=1',
    acceptableAnswers: [
      '\\text{极大值 }f(1)=2,\\text{ 极小值 }f(2)=1',
      '极大值2;极小值1',
      '极大2,极小1',
    ],
  },
  {
    id: 'dex1-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=x^3-3x+1\\text{ 的极值}',
    correctAnswer: '\\text{极大值 }f(-1)=3,\\text{ 极小值 }f(1)=-1',
    acceptableAnswers: [
      '\\text{极大值 }f(-1)=3,\\text{ 极小值 }f(1)=-1',
      '极大值3;极小值-1',
      '极大3,极小-1',
    ],
  },
];

// ── 2.1 例 2 后即时练习（含 ln 求极值） ──
export const derivExtremaExample2Practice: QuizQuestionData[] = [
  {
    id: 'dex2-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=\\ln x-x\\text{ 的极值（注意定义域）}',
    correctAnswer: '\\text{极大值 }f(1)=-1,\\text{ 无极小值}',
    acceptableAnswers: [
      '\\text{极大值 }f(1)=-1,\\text{ 无极小值}',
      '极大值-1;无极小值',
      '极大-1,无极小',
    ],
  },
];

// ── 2.1 例 3 后即时练习（含 e^x 求极值） ──
export const derivExtremaExample3Practice: QuizQuestionData[] = [
  {
    id: 'dex3-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=\\dfrac{x}{e^x}\\text{ 的极值}',
    correctAnswer: '\\text{极大值 }f(1)=\\dfrac{1}{e},\\text{ 无极小值}',
    acceptableAnswers: [
      '\\text{极大值 }f(1)=\\dfrac{1}{e},\\text{ 无极小值}',
      '极大值1/e;无极小值',
      '极大1/e,无极小',
    ],
  },
  {
    id: 'dex3-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=(x-2)e^x\\text{ 的极值}',
    correctAnswer: '\\text{极小值 }f(1)=-e,\\text{ 无极大值}',
    acceptableAnswers: [
      '\\text{极小值 }f(1)=-e,\\text{ 无极大值}',
      '极小值-e;无极大值',
      '极小-e,无极大',
    ],
  },
];

// ── 2.1 例 4 后即时练习（分式 / 反比例型求极值） ──
export const derivExtremaExample4Practice: QuizQuestionData[] = [
  {
    id: 'dex4-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=\\dfrac{\\ln x}{x}\\text{ 的极值}',
    correctAnswer: '\\text{极大值 }f(e)=\\dfrac{1}{e},\\text{ 无极小值}',
    acceptableAnswers: [
      '\\text{极大值 }f(e)=\\dfrac{1}{e},\\text{ 无极小值}',
      '极大值1/e;无极小值',
      '极大1/e,无极小',
    ],
  },
  {
    id: 'dex4-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=\\dfrac{x^2}{x-1}\\text{ 的极值}',
    correctAnswer: '\\text{极大值 }f(0)=0,\\text{ 极小值 }f(2)=4',
    acceptableAnswers: [
      '\\text{极大值 }f(0)=0,\\text{ 极小值 }f(2)=4',
      '极大值0;极小值4',
      '极大0,极小4',
    ],
  },
];

