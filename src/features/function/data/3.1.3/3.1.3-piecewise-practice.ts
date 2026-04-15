// ============================================================
// 3.1.3 分段函数 - 即时练习题
// ============================================================

import type { QuizQuestionData } from '@/types';

// ── 第一组：分段函数求值 ──
export const piecewisePractice1: QuizQuestionData[] = [
  {
    id: 'pw1-1',
    type: 'blank',
    question: '已知 f(x) = {x²-1 (x≥0), 2x+3 (x<0)}，求 f(2) = ____',
    questionLatex: '\\text{已知 }f(x)=\\begin{cases}x^2-1,&x\\geqslant 0\\\\2x+3,&x<0\\end{cases}\\text{，则 }f(2)=\\underline{\\phantom{0000}}',
    correctAnswer: '3',
    acceptableAnswers: ['3'],
  },
  {
    id: 'pw1-2',
    type: 'blank',
    question: '已知 f(x) = {x²-1 (x≥0), 2x+3 (x<0)}，求 f(-1) = ____',
    questionLatex: '\\text{已知 }f(x)=\\begin{cases}x^2-1,&x\\geqslant 0\\\\2x+3,&x<0\\end{cases}\\text{，则 }f(-1)=\\underline{\\phantom{0000}}',
    correctAnswer: '1',
    acceptableAnswers: ['1'],
  },
  {
    id: 'pw1-3',
    type: 'blank',
    question: '已知 f(x) = {x²-1 (x≥0), 2x+3 (x<0)}，若 f(a) = 8，则 a = ____',
    questionLatex: '\\text{已知 }f(x)=\\begin{cases}x^2-1,&x\\geqslant 0\\\\2x+3,&x<0\\end{cases}\\text{，若 }f(a)=8\\text{，则 }a=\\underline{\\phantom{0000}}',
    correctAnswer: '3',
    acceptableAnswers: ['3'],
  },
  {
    id: 'pw1-4',
    type: 'blank',
    question: '已知 f(x) = {x²-1 (x≥0), 2x+3 (x<0)}，则 f(f(-2)) = ____',
    questionLatex: '\\text{已知 }f(x)=\\begin{cases}x^2-1,&x\\geqslant 0\\\\2x+3,&x<0\\end{cases}\\text{，则 }f(f(-2))=\\underline{\\phantom{0000}}',
    correctAnswer: '1',
    acceptableAnswers: ['1'],
  },
];

// ── 第二组：定义域与值域（双问） ──
export const piecewiseDomainPractice: QuizQuestionData[] = [
  {
    id: 'pw3-1',
    type: 'blank',
    question: 'f(x) = {x+3 (-2≤x<1), -2x+6 (1≤x≤3)}，定义域为____，值域为____',
    questionLatex: 'f(x)=\\begin{cases}x+3,&-2\\leqslant x<1\\\\-2x+6,&1\\leqslant x\\leqslant 3\\end{cases}\\text{，定义域为 }\\underline{\\phantom{0000}}\\text{，值域为 }\\underline{\\phantom{0000}}',
    correctAnswer: '[-2,3]，[0,4]',
    acceptableAnswers: ['[-2,3]，[0,4]', '[-2,3], [0,4]', '[-2, 3], [0, 4]', '[-2,3],[0,4]'],
  },
  {
    id: 'pw3-2',
    type: 'blank',
    question: 'f(x) = {3x (0≤x<2), -x+8 (2≤x≤5)}，定义域为____，值域为____',
    questionLatex: 'f(x)=\\begin{cases}3x,&0\\leqslant x<2\\\\-x+8,&2\\leqslant x\\leqslant 5\\end{cases}\\text{，定义域为 }\\underline{\\phantom{0000}}\\text{，值域为 }\\underline{\\phantom{0000}}',
    correctAnswer: '[0,5]，[0,6]',
    acceptableAnswers: ['[0,5]，[0,6]', '[0,5], [0,6]', '[0, 5], [0, 6]', '[0,5],[0,6]'],
  },
];
