import type { QuizQuestionData } from '@/types';

// ── 1.1 在某点处求切线 · 随手算 ──
export const derivTangent1Warmup: QuizQuestionData[] = [
  {
    id: 'dt1w-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=x^2\\text{ 在 }x=2\\text{ 处的切线方程}',
    correctAnswer: 'y=4x-4',
    acceptableAnswers: ['y=4x-4', 'y = 4x - 4'],
  },
  {
    id: 'dt1w-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=\\ln x\\text{ 在 }x=e\\text{ 处的切线方程}',
    correctAnswer: 'y=\\dfrac{x}{e}',
    acceptableAnswers: ['y=\\dfrac{x}{e}', 'y=\\frac{x}{e}', 'y=x/e'],
  },
];

// ── 1.1 在某点处求切线 · 即时练习 ──
export const derivTangent1Practice: QuizQuestionData[] = [
  {
    id: 'dt1p-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=x^3\\text{ 在点 }(1,1)\\text{ 处的切线方程}',
    correctAnswer: 'y=3x-2',
    acceptableAnswers: ['y=3x-2', 'y = 3x - 2'],
  },
  {
    id: 'dt1p-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=e^x\\text{ 在 }x=0\\text{ 处的切线方程}',
    correctAnswer: 'y=x+1',
    acceptableAnswers: ['y=x+1', 'y = x + 1'],
  },
  {
    id: 'dt1p-3',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=\\sin x\\text{ 在 }x=0\\text{ 处的切线方程}',
    correctAnswer: 'y=x',
    acceptableAnswers: ['y=x', 'y = x'],
  },
  {
    id: 'dt1p-4',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }f(x)=\\dfrac{1}{x}\\text{ 在 }x=1\\text{ 处的切线方程}',
    correctAnswer: 'y=-x+2',
    acceptableAnswers: ['y=-x+2', 'y=2-x', 'y = -x + 2'],
  },
];

// ── 1.2 过某点求切线 · 随手算 ──
export const derivTangent2Warmup: QuizQuestionData[] = [
  {
    id: 'dt2w-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{过点 }(3,8)\\text{ 作 }y=x^2\\text{ 的切线方程}',
    correctAnswer: 'y=4x-4;y=8x-16',
    acceptableAnswers: ['y=4x-4;y=8x-16', 'y=8x-16;y=4x-4', 'y=4x-4,y=8x-16', 'y=8x-16,y=4x-4'],
  },
  {
    id: 'dt2w-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{过原点 }(0,0)\\text{ 作 }y=e^x\\text{ 的切线方程}',
    correctAnswer: 'y=ex',
    acceptableAnswers: ['y=ex', 'y=e x', 'y=e\\cdot x', 'y=ex ', 'y = ex'],
  },
];

// ── 1.2 过某点求切线 · 即时练习 ──
export const derivTangent2Practice: QuizQuestionData[] = [
  {
    id: 'dt2p-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{过点 }(0,-4)\\text{ 作 }y=x^2\\text{ 的切线方程}',
    correctAnswer: 'y=4x-4;y=-4x-4',
    acceptableAnswers: ['y=4x-4;y=-4x-4', 'y=-4x-4;y=4x-4', 'y=4x-4,y=-4x-4', 'y=-4x-4,y=4x-4'],
  },
  {
    id: 'dt2p-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{过原点 }(0,0)\\text{ 作 }y=\\ln x\\text{ 的切线方程}',
    correctAnswer: 'y=\\dfrac{x}{e}',
    acceptableAnswers: ['y=\\dfrac{x}{e}', 'y=\\frac{x}{e}', 'y=x/e'],
  },
  {
    id: 'dt2p-3',
    type: 'blank',
    question: '',
    questionLatex: '\\text{过点 }(2,0)\\text{ 作 }y=x^3\\text{ 的切线方程}',
    correctAnswer: 'y=0;y=27x-54',
    acceptableAnswers: ['y=0;y=27x-54', 'y=27x-54;y=0', 'y=0,y=27x-54', 'y=27x-54,y=0'],
  },
  {
    id: 'dt2p-4',
    type: 'blank',
    question: '',
    questionLatex: '\\text{过原点 }(0,0)\\text{ 作 }y=xe^x\\text{ 的切线方程}',
    correctAnswer: 'y=x',
    acceptableAnswers: ['y=x', 'y = x'],
  },
];

// ── 1.3 已知切线（或斜率）求参 · 随手算 ──
export const derivTangent3Warmup: QuizQuestionData[] = [
  {
    id: 'dt3w-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{曲线 }y=x^2+a\\text{ 的一条切线为 }y=4x-3\\text{，求 }a',
    correctAnswer: 'a=1',
    acceptableAnswers: ['a=1', '1'],
  },
  {
    id: 'dt3w-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{曲线 }y=ax^2+1\\text{ 在 }x=1\\text{ 处切线斜率为 }2\\text{，求 }a',
    correctAnswer: 'a=1',
    acceptableAnswers: ['a=1', '1'],
  },
];

// ── 1.3 已知切线（或斜率）求参 · 即时练习（短题，2 列）──
export const derivTangent3PracticeShort: QuizQuestionData[] = [
  {
    id: 'dt3p-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{曲线 }y=x^3+a\\text{ 的一条切线为 }y=3x+2\\text{，求 }a',
    correctAnswer: 'a=0 或 a=4',
    acceptableAnswers: ['a=0或a=4', 'a=4或a=0', 'a=0,a=4', 'a=4,a=0', 'a=0;a=4', 'a=4;a=0', '0或4', '4或0'],
  },
  {
    id: 'dt3p-5',
    type: 'blank',
    question: '',
    questionLatex: '\\text{曲线 }y=x^2+a\\text{ 的一条切线为 }y=2x-3\\text{，求 }a',
    correctAnswer: 'a=-2',
    acceptableAnswers: ['a=-2', '-2'],
  },
];

// ── 1.4 公切线 · 随手算 ──
export const derivCommonTangentWarmup: QuizQuestionData[] = [
  {
    id: 'dt4w-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{曲线 }y=\\cos\\tfrac{\\pi}{3}\\cdot x^2+x\\text{ 在 }(0,0)\\text{ 处的切线也是曲线 }y=\\ln x+a\\text{ 的切线，求 }a',
    correctAnswer: 'a=1',
    acceptableAnswers: ['a=1', '1'],
  },
];

// ── 1.4 公切线 · 即时练习（1 列长题）──
// A 型 1 道 + B 型 2 道 + C 型 2 道（warmup 已含 A 型 1 道，合计 A 2 + B 2 + C 2）
export const derivCommonTangentPractice: QuizQuestionData[] = [
  // A 型
  {
    id: 'dt4p-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{曲线 }y=e^x\\text{ 在 }(0,1)\\text{ 处的切线也是 }y=ax^2\\text{ 的切线，求 }a',
    correctAnswer: 'a=-\\dfrac{1}{4}',
    acceptableAnswers: ['a=-\\dfrac{1}{4}', 'a=-1/4', '-1/4'],
  },
  // B 型
  {
    id: 'dt4p-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }y=x^2+1\\text{ 与 }y=x^2+4x+1\\text{ 的公切线方程}',
    correctAnswer: 'y=2x',
    acceptableAnswers: ['y=2x'],
  },
  {
    id: 'dt4p-3',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }y=x^2\\text{ 与 }y=-x^2+4x-4\\text{ 的公切线方程}',
    correctAnswer: 'y=0;y=4x-4',
    acceptableAnswers: ['y=0;y=4x-4', 'y=4x-4;y=0', 'y=0,y=4x-4', 'y=4x-4,y=0'],
  },
  // C 型
  {
    id: 'dt4p-4',
    type: 'blank',
    question: '',
    questionLatex: '\\text{若 }y=x^2\\text{ 与 }y=-x^2+2x+a\\text{ 恰有 }2\\text{ 条公切线，求 }a\\text{ 的取值范围}',
    correctAnswer: 'a<-\\dfrac{1}{2}',
    acceptableAnswers: ['a<-\\dfrac{1}{2}', 'a<-1/2', 'a < -1/2'],
  },
  {
    id: 'dt4p-5',
    type: 'blank',
    question: '',
    questionLatex: '\\text{讨论 }y=x^2\\text{ 与 }y=-x^2+a\\text{ 的公切线条数}',
    correctAnswer: 'a<0:2;a=0:1;a>0:0',
    acceptableAnswers: ['a<0时2条,a=0时1条,a>0时0条', 'a<0:2;a=0:1;a>0:0', 'a<0,2;a=0,1;a>0,0'],
  },
];

// ── 1.3 已知切线（或斜率）求参 · 即时练习（长题，1 列）──
export const derivTangent3PracticeLong: QuizQuestionData[] = [
  {
    id: 'dt3p-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{若直线 }y=2x+5\\text{ 是曲线 }y=e^x+x+a\\text{ 的切线，求 }a\\quad\\text{（2025 高考真题）}',
    correctAnswer: 'a=4',
    acceptableAnswers: ['a=4', '4'],
  },
  {
    id: 'dt3p-3',
    type: 'blank',
    question: '',
    questionLatex: '\\text{曲线 }y=x^3+ax+b\\text{ 在点 }(0,b)\\text{ 处切线为 }x-y+1=0\\text{，求 }a,\\,b',
    correctAnswer: 'a=1,b=1',
    acceptableAnswers: ['a=1,b=1', 'a=1;b=1', 'b=1,a=1'],
  },
];
