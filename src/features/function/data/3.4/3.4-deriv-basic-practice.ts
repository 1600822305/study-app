import type { QuizQuestionData } from '@/types';

// ── 第零节：导数定义变形识别 ──
export const derivLimitFormsPractice: QuizQuestionData[] = [
  {
    id: 'dlf-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{若 }f\'(2)=3\\text{，则 }\\lim\\limits_{h\\to 0}\\dfrac{f(2+3h)-f(2-2h)}{h}=\\underline{\\qquad\\qquad}',
    correctAnswer: '15',
    acceptableAnswers: ['15'],
  },
  {
    id: 'dlf-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{若 }f\'(1)=-2\\text{，则 }\\lim\\limits_{\\Delta x\\to 0}\\dfrac{f(1-\\Delta x)-f(1)}{\\Delta x}=\\underline{\\qquad\\qquad}',
    correctAnswer: '2',
    acceptableAnswers: ['2'],
  },
  {
    id: 'dlf-4',
    type: 'blank',
    question: '',
    questionLatex: '\\text{若 }f\'(x_0)=5\\text{，则 }\\lim\\limits_{h\\to 0}\\dfrac{f(x_0)-f(x_0-3h)}{h}=\\underline{\\qquad\\qquad}',
    correctAnswer: '15',
    acceptableAnswers: ['15'],
  },
];

// ── 第一节：基本求导公式（8 题对应 8 公式）──
export const derivBasicPractice1: QuizQuestionData[] = [
  {
    id: 'dbp1-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{设 }f(x)=5\\text{（常数），则 }f\'(x)=\\underline{\\qquad\\qquad}',
    correctAnswer: '0',
    acceptableAnswers: ['0'],
  },
  {
    id: 'dbp1-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{设 }f(x)=\\sqrt{x}\\text{，则 }f\'(x)=\\underline{\\qquad\\qquad}',
    correctAnswer: '\\dfrac{1}{2\\sqrt{x}}',
    acceptableAnswers: ['\\dfrac{1}{2\\sqrt{x}}', '\\frac{1}{2\\sqrt{x}}', '\\tfrac{1}{2}x^{-1/2}'],
  },
  {
    id: 'dbp1-3',
    type: 'blank',
    question: '',
    questionLatex: '\\text{设 }f(x)=e^x\\text{，则 }f\'(\\ln 2)=\\underline{\\qquad\\qquad}',
    correctAnswer: '2',
    acceptableAnswers: ['2'],
  },
  {
    id: 'dbp1-4',
    type: 'blank',
    question: '',
    questionLatex: '\\text{设 }f(x)=2^x\\text{，则 }f\'(x)=\\underline{\\qquad\\qquad}',
    correctAnswer: '2^x\\ln 2',
    acceptableAnswers: ['2^x\\ln 2', '2^{x}\\ln 2', '(\\ln 2)\\cdot 2^x', '\\ln 2\\cdot 2^x'],
  },
  {
    id: 'dbp1-5',
    type: 'blank',
    question: '',
    questionLatex: '\\text{设 }f(x)=\\ln x\\text{，则 }f\'(2)=\\underline{\\qquad\\qquad}',
    correctAnswer: '\\dfrac{1}{2}',
    acceptableAnswers: ['\\dfrac{1}{2}', '\\frac{1}{2}', '0.5'],
  },
  {
    id: 'dbp1-6',
    type: 'blank',
    question: '',
    questionLatex: '\\text{设 }f(x)=\\log_2 x\\text{，则 }f\'(x)=\\underline{\\qquad\\qquad}',
    correctAnswer: '\\dfrac{1}{x\\ln 2}',
    acceptableAnswers: ['\\dfrac{1}{x\\ln 2}', '\\frac{1}{x\\ln 2}', '\\dfrac{1}{(\\ln 2)x}'],
  },
  {
    id: 'dbp1-7',
    type: 'blank',
    question: '',
    questionLatex: '\\text{设 }f(x)=\\sin x\\text{，则 }f\'\\left(\\dfrac{\\pi}{3}\\right)=\\underline{\\qquad\\qquad}',
    correctAnswer: '\\dfrac{1}{2}',
    acceptableAnswers: ['\\dfrac{1}{2}', '\\frac{1}{2}', '0.5'],
  },
  {
    id: 'dbp1-8',
    type: 'blank',
    question: '',
    questionLatex: '\\text{设 }f(x)=\\cos x\\text{，则 }f\'\\left(\\dfrac{\\pi}{6}\\right)=\\underline{\\qquad\\qquad}',
    correctAnswer: '-\\dfrac{1}{2}',
    acceptableAnswers: ['-\\dfrac{1}{2}', '-\\frac{1}{2}', '-0.5'],
  },
];

// ── 第二节 2.1：随手算两道（例 2 后热身）──
export const derivRulesWarmup: QuizQuestionData[] = [
  {
    id: 'drw-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }(4x^3-6x^2+2)\'=\\underline{\\qquad\\qquad}',
    correctAnswer: '12x^2-12x',
    acceptableAnswers: ['12x^2-12x', '12x^{2}-12x', '-12x+12x^2'],
  },
  {
    id: 'drw-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }(3\\sin x-2\\ln x+e^x)\'=\\underline{\\qquad\\qquad}',
    correctAnswer: '3\\cos x-\\frac{2}{x}+e^x',
    acceptableAnswers: [
      '3\\cos x-\\frac{2}{x}+e^x',
      '3\\cos x-\\dfrac{2}{x}+e^x',
      '3\\cos x-2/x+e^x',
      'e^x+3\\cos x-\\frac{2}{x}',
    ],
  },
];

// ── 第二节 2.1：和差法则 + 常数倍法则 ──
export const derivRulesPractice1: QuizQuestionData[] = [
  {
    id: 'drp1-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{设 }f(x)=3x^2-4x+1\\text{，则 }f\'(x)=\\underline{\\qquad\\qquad}',
    correctAnswer: '6x-4',
    acceptableAnswers: ['6x-4', '-4+6x'],
  },
  {
    id: 'drp1-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{设 }f(x)=2x^3-\\sin x\\text{，则 }f\'(x)=\\underline{\\qquad\\qquad}',
    correctAnswer: '6x^2-\\cos x',
    acceptableAnswers: ['6x^2-\\cos x', '6x^{2}-\\cos x', '-\\cos x+6x^2'],
  },
  {
    id: 'drp1-3',
    type: 'blank',
    question: '',
    questionLatex: '\\text{设 }f(x)=3e^x+2\\ln x\\text{，则 }f\'(1)=\\underline{\\qquad\\qquad}',
    correctAnswer: '3e+2',
    acceptableAnswers: ['3e+2', '2+3e'],
  },
  {
    id: 'drp1-4',
    type: 'blank',
    question: '',
    questionLatex: '\\text{设 }f(x)=\\sin x+\\cos x\\text{，则 }f\'\\bigl(\\tfrac{\\pi}{4}\\bigr)=\\underline{\\qquad\\qquad}',
    correctAnswer: '0',
    acceptableAnswers: ['0'],
  },
  {
    id: 'drp1-5',
    type: 'blank',
    question: '',
    questionLatex: '\\text{设 }a,b,c\\text{ 为常数，}f(x)=ax^2+bx+c\\text{，则 }f\'(x)=\\underline{\\qquad\\qquad}',
    correctAnswer: '2ax+b',
    acceptableAnswers: ['2ax+b', 'b+2ax'],
    fullRow: true,
  },
];

// ── 第二节 2.2：乘积法则 · 随手算 ──
export const derivRulesWarmup2: QuizQuestionData[] = [
  {
    id: 'drw2-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }(x\\sin x)\'=\\underline{\\qquad\\qquad}',
    correctAnswer: '\\sin x+x\\cos x',
    acceptableAnswers: [
      '\\sin x+x\\cos x',
      'x\\cos x+\\sin x',
    ],
  },
  {
    id: 'drw2-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }\\bigl((x+1)e^x\\bigr)\'=\\underline{\\qquad\\qquad}',
    correctAnswer: '(x+2)e^x',
    acceptableAnswers: [
      '(x+2)e^x',
      'e^x+(x+1)e^x',
      '(2+x)e^x',
    ],
  },
];

// ── 第二节 2.2：乘积法则 · 主练习（服务例 3/4：对比题 + 代值题）──
export const derivRulesPractice2: QuizQuestionData[] = [
  {
    id: 'drp2-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{设 }f(x)=x^2\\sin x\\text{，则 }f\'\\bigl(\\tfrac{\\pi}{2}\\bigr)=\\underline{\\qquad\\qquad}',
    correctAnswer: '\\pi',
    acceptableAnswers: ['\\pi', 'π'],
  },
  {
    id: 'drp2-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{设 }f(x)=(x-1)e^x\\text{，则 }f\'(0)=\\underline{\\qquad\\qquad}',
    correctAnswer: '0',
    acceptableAnswers: ['0'],
  },
  {
    id: 'drp2-3',
    type: 'blank',
    question: '',
    questionLatex: '\\text{设 }f(x)=(2x-1)(x^2+3)\\text{，用乘积法则求 }f\'(x)=\\underline{\\qquad\\qquad}',
    correctAnswer: '6x^2-2x+6',
    acceptableAnswers: [
      '6x^2-2x+6',
      '6x^{2}-2x+6',
      '6+6x^2-2x',
    ],
    fullRow: true,
  },
];

// ── 第二节 2.3：商法则 · 随手算 ──
export const derivRulesWarmup3: QuizQuestionData[] = [
  {
    id: 'drw3-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }\\left(\\dfrac{\\ln x}{x}\\right)\'=\\underline{\\qquad\\qquad}',
    correctAnswer: '\\dfrac{1-\\ln x}{x^2}',
    acceptableAnswers: [
      '\\dfrac{1-\\ln x}{x^2}',
      '\\frac{1-\\ln x}{x^2}',
      '(1-\\ln x)/x^2',
    ],
  },
  {
    id: 'drw3-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }\\left(\\dfrac{x+2}{x}\\right)\'=\\underline{\\qquad\\qquad}',
    correctAnswer: '-\\dfrac{2}{x^2}',
    acceptableAnswers: [
      '-\\dfrac{2}{x^2}',
      '-\\frac{2}{x^2}',
      '-2/x^2',
    ],
  },
];

// ── 第二节 2.3：商法则 · 主练习 ──
export const derivRulesPractice3: QuizQuestionData[] = [
  {
    id: 'drp3-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{设 }f(x)=\\dfrac{\\cos x}{x}\\text{，则 }f\'(\\pi)=\\underline{\\qquad\\qquad}',
    correctAnswer: '\\dfrac{1}{\\pi^2}',
    acceptableAnswers: [
      '\\dfrac{1}{\\pi^2}',
      '\\frac{1}{\\pi^2}',
      '1/\\pi^2',
      '\\pi^{-2}',
    ],
  },
  {
    id: 'drp3-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{设 }f(x)=\\dfrac{x}{x^2+1}\\text{，则 }f\'(x)=\\underline{\\qquad\\qquad}',
    correctAnswer: '\\dfrac{1-x^2}{(x^2+1)^2}',
    acceptableAnswers: [
      '\\dfrac{1-x^2}{(x^2+1)^2}',
      '\\frac{1-x^2}{(x^2+1)^2}',
      '(1-x^2)/(x^2+1)^2',
    ],
  },
  {
    id: 'drp3-3',
    type: 'blank',
    question: '',
    questionLatex: '\\text{设 }f(x)=\\dfrac{\\ln x}{x}\\text{，则 }f\'(e)=\\underline{\\qquad\\qquad}',
    correctAnswer: '0',
    acceptableAnswers: ['0'],
  },
  {
    id: 'drp3-4',
    type: 'blank',
    question: '',
    questionLatex: '\\text{设 }f(x)=\\dfrac{2x-1}{x+1}\\text{，则 }f\'(0)=\\underline{\\qquad\\qquad}',
    correctAnswer: '3',
    acceptableAnswers: ['3'],
  },
  {
    id: 'drp3-5',
    type: 'blank',
    question: '',
    questionLatex: '\\text{设 }a\\text{ 为常数，}f(x)=\\dfrac{x^2-a}{x}\\text{，则 }f\'(x)=\\underline{\\qquad\\qquad}',
    correctAnswer: '1+\\dfrac{a}{x^2}',
    acceptableAnswers: [
      '1+\\dfrac{a}{x^2}',
      '1+\\frac{a}{x^2}',
      '\\dfrac{x^2+a}{x^2}',
      '(x^2+a)/x^2',
      '1+a/x^2',
    ],
    fullRow: true,
  },
];

// ── 第二节 2.4：复合函数求导（链式法则）· 随手算 ──
export const derivRulesWarmup4: QuizQuestionData[] = [
  {
    id: 'drw4-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }[\\cos(3x)]\'=\\underline{\\qquad\\qquad}',
    correctAnswer: '-3\\sin(3x)',
    acceptableAnswers: [
      '-3\\sin(3x)',
      '-3\\sin 3x',
      '-3\\sin3x',
    ],
  },
  {
    id: 'drw4-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }[(x^2+1)^3]\'=\\underline{\\qquad\\qquad}',
    correctAnswer: '6x(x^2+1)^2',
    acceptableAnswers: [
      '6x(x^2+1)^2',
      '6x(x^{2}+1)^{2}',
      '6x(1+x^2)^2',
    ],
  },
];

// ── 第二节 2.4：复合函数求导（链式法则）· 主练习 ──
export const derivRulesPractice4: QuizQuestionData[] = [
  {
    id: 'drp4-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }[\\sin(5x)]\'=\\underline{\\qquad\\qquad}',
    correctAnswer: '5\\cos(5x)',
    acceptableAnswers: [
      '5\\cos(5x)',
      '5\\cos 5x',
      '5\\cos5x',
    ],
  },
  {
    id: 'drp4-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{求 }[\\ln(2x+3)]\'=\\underline{\\qquad\\qquad}',
    correctAnswer: '\\dfrac{2}{2x+3}',
    acceptableAnswers: [
      '\\dfrac{2}{2x+3}',
      '\\frac{2}{2x+3}',
      '2/(2x+3)',
    ],
  },
  {
    id: 'drp4-3',
    type: 'blank',
    question: '',
    questionLatex: '\\text{设 }f(x)=e^{2x+1}\\text{，则 }f\'(0)=\\underline{\\qquad\\qquad}',
    correctAnswer: '2e',
    acceptableAnswers: ['2e'],
  },
  {
    id: 'drp4-4',
    type: 'blank',
    question: '',
    questionLatex: '\\text{设 }f(x)=\\sqrt{x^2+3}\\text{，则 }f\'(1)=\\underline{\\qquad\\qquad}',
    correctAnswer: '\\dfrac{1}{2}',
    acceptableAnswers: [
      '\\dfrac{1}{2}',
      '\\frac{1}{2}',
      '1/2',
      '0.5',
    ],
  },
  {
    id: 'drp4-5',
    type: 'blank',
    question: '',
    questionLatex: '\\text{设 }a\\text{ 为常数，}f(x)=\\ln(ax+1)\\text{，则 }f\'(x)=\\underline{\\qquad\\qquad}',
    correctAnswer: '\\dfrac{a}{ax+1}',
    acceptableAnswers: [
      '\\dfrac{a}{ax+1}',
      '\\frac{a}{ax+1}',
      'a/(ax+1)',
    ],
    fullRow: true,
  },
];

