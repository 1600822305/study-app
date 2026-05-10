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



// ── 例 3 后即时练习（含参讨论极值点） ──
export const derivExtremaExample3Practice: QuizQuestionData[] = [
  {
    id: 'dex3-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{若 }f(x)=x^3+ax\\text{ 有极值点，求 }a\\text{ 的取值范围}',
    correctAnswer: 'a<0',
    acceptableAnswers: [
      'a<0',
      'a < 0',
      '(-\\infty,0)',
    ],
  },
  {
    id: 'dex3-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{若 }f(x)=x^3-ax^2\\text{ 有两个极值点，求 }a\\text{ 的取值范围}',
    correctAnswer: 'a\\ne 0',
    acceptableAnswers: [
      'a\\ne 0',
      'a≠0',
      'a不等于0',
    ],
  },
];

// ── 例 4 后即时练习（已知极值点反求参数） ──
export const derivExtremaExample4Practice: QuizQuestionData[] = [
  {
    id: 'dex4-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{已知 }f(x)=x^3-ax^2+3x\\text{ 在 }x=1\\text{ 处取得极值，求 }a',
    correctAnswer: 'a=3',
    acceptableAnswers: [
      'a=3',
      'a = 3',
      '3',
    ],
  },
  {
    id: 'dex4-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{已知 }f(x)=x^3+ax^2+b\\text{ 在 }x=1\\text{ 处取得极小值 }0\\text{，求 }a,b',
    correctAnswer: 'a=-\\dfrac{3}{2},\\,b=\\dfrac{1}{2}',
    acceptableAnswers: [
      'a=-\\dfrac{3}{2},\\,b=\\dfrac{1}{2}',
      'a=-3/2,b=1/2',
      'a=-1.5,b=0.5',
    ],
  },
];
