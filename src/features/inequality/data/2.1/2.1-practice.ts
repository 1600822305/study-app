import type { QuizQuestionData } from '@/types';

// ══════════════════════════════════════
//  2.1 不等式 - 基本不等式即时练习（6题）
// ══════════════════════════════════════

// ══════════════════════════════════════
//  超基础填空训练（3题）
// ══════════════════════════════════════
export const amgmBasicFill: QuizQuestionData[] = [
  {
    id: 'iq-bf1',
    type: 'blank',
    question: '已知 a,b>0，ab=9，则 a+b 的最小值为 ____',
    questionLatex: '\\text{已知 }a,b>0,\\;ab=9\\text{，则 }a+b\\text{ 的最小值为 }\\underline{\\phantom{00000000}}',
    correctAnswer: '6',
    acceptableAnswers: ['6'],
  },
  {
    id: 'iq-bf2',
    type: 'blank',
    question: '已知 a,b>0，a+b=10，则 ab 的最大值为 ____',
    questionLatex: '\\text{已知 }a,b>0,\\;a+b=10\\text{，则 }ab\\text{ 的最大值为 }\\underline{\\phantom{00000000}}',
    correctAnswer: '25',
    acceptableAnswers: ['25'],
  },
  {
    id: 'iq-bf3',
    type: 'blank',
    question: '已知 x>0，则 x+4/x 的最小值为 ____',
    questionLatex: '\\text{已知 }x>0\\text{，则 }x+\\dfrac{4}{x}\\text{ 的最小值为 }\\underline{\\phantom{00000000}}',
    correctAnswer: '4',
    acceptableAnswers: ['4'],
  },
];

// ══════════════════════════════════════
//  小变形填空训练（3题）
// ══════════════════════════════════════
export const amgmTransformFill: QuizQuestionData[] = [
  {
    id: 'iq-tf1',
    type: 'blank',
    question: '已知 a,b>0，a²+b²=9，则 ab 的最大值为 ____',
    questionLatex: '\\text{已知 }a,b>0,\\;a^2+b^2=9\\text{，则 }ab\\text{ 的最大值为 }\\underline{\\phantom{00000000}}',
    correctAnswer: '\\dfrac{9}{2}',
    acceptableAnswers: ['9/2', '4.5'],
  },
  {
    id: 'iq-tf2',
    type: 'blank',
    question: '已知 a,b>0，ab=9，则 1/a+4/b 的最小值为 ____',
    questionLatex: '\\text{已知 }a,b>0,\\;ab=9\\text{，则 }\\dfrac{1}{a}+\\dfrac{4}{b}\\text{ 的最小值为 }\\underline{\\phantom{00000000}}',
    correctAnswer: '\\dfrac{4}{3}',
    acceptableAnswers: ['4/3'],
  },
  {
    id: 'iq-tf3',
    type: 'blank',
    question: '已知 a,b>0，ab=1，则 (a+2)(b+2) 的最小值为 ____',
    questionLatex: '\\text{已知 }a,b>0,\\;ab=1\\text{，则 }(a+2)(b+2)\\text{ 的最小值为 }\\underline{\\phantom{00000000}}',
    correctAnswer: '9',
    acceptableAnswers: ['9'],
  },
];

// ══════════════════════════════════════
//  逆向思维填空训练（1题）
// ══════════════════════════════════════
export const amgmReverseFill: QuizQuestionData[] = [
  {
    id: 'iq-rf1',
    type: 'blank',
    question: '已知正实数 a,b 满足 (a+2)(b+3)=25，则 a+b 的最小值为 ____',
    questionLatex: '\\text{已知 }a,b>0,\\;(a+2)(b+3)=25\\text{，则 }a+b\\text{ 的最小值为 }\\underline{\\phantom{00000000}}',
    correctAnswer: '5',
    acceptableAnswers: ['5'],
  },
  {
    id: 'iq-rf2',
    type: 'blank',
    question: '已知正实数 a,b 满足 (a+3)(b+1)=9，则 a+b 的最小值为 ____',
    questionLatex: '\\text{已知 }a,b>0,\\;(a+3)(b+1)=9\\text{，则 }a+b\\text{ 的最小值为 }\\underline{\\phantom{00000000}}',
    correctAnswer: '2',
    acceptableAnswers: ['2'],
  },
];

// ══════════════════════════════════════
//  非齐次式填空训练（2题）
// ══════════════════════════════════════
export const amgmNonHomoFill: QuizQuestionData[] = [
  {
    id: 'iq-nhf1',
    type: 'blank',
    question: '设 x>0，则 x+4/x 的最小值为 ____',
    questionLatex: '\\text{设 }x>0\\text{，则 }x + \\dfrac{4}{x}\\text{ 的最小值为 }\\underline{\\phantom{00000000}}',
    correctAnswer: '4',
    acceptableAnswers: ['4'],
  },
  {
    id: 'iq-nhf2',
    type: 'blank',
    question: '设 x>1，则 2x+1/(x-1) 的最小值为 ____',
    questionLatex: '\\text{设 }x>1\\text{，则 }2x + \\dfrac{1}{x-1}\\text{ 的最小值为 }\\underline{\\phantom{00000000}}',
    correctAnswer: '2\\sqrt{2}+2',
    acceptableAnswers: ['2√2+2', '2+2√2'],
  },
];

// ══════════════════════════════════════
//  齐次式 & 齐次化 & 和定求积 填空训练（4题）
// ══════════════════════════════════════
export const amgmHomoFill: QuizQuestionData[] = [
  {
    id: 'iq-hf1',
    type: 'blank',
    question: '设 a,b>0，求 a/b + 4b/a 的最小值为 ____',
    questionLatex: '\\text{设 }a,b>0\\text{，则 }\\dfrac{a}{b} + \\dfrac{4b}{a}\\text{ 的最小值为 }\\underline{\\phantom{00000000}}',
    correctAnswer: '4',
    acceptableAnswers: ['4'],
  },
  {
    id: 'iq-hf2',
    type: 'blank',
    question: '设 a,b>0 且 a+b=1，求 (2a+b)/(ab) 的最小值为 ____',
    questionLatex: '\\text{设 }a,b>0,\\;a+b=1\\text{，则 }\\dfrac{2a+b}{ab}\\text{ 的最小值为 }\\underline{\\phantom{00000000}}',
    correctAnswer: '3+2\\sqrt{2}',
    acceptableAnswers: ['3+2√2', '3+2根号2'],
  },
  {
    id: 'iq-hf3',
    type: 'blank',
    question: '设 a,b>0 且 a+b=3，求 1/a + 1/b 的最小值为 ____',
    questionLatex: '\\text{设 }a,b>0,\\;a+b=3\\text{，则 }\\dfrac{1}{a}+\\dfrac{1}{b}\\text{ 的最小值为 }\\underline{\\phantom{00000000}}',
    correctAnswer: '\\dfrac{4}{3}',
    acceptableAnswers: ['4/3'],
  },
  {
    id: 'iq-hf4',
    type: 'blank',
    question: '已知 2<x<8，求 (x-2)(8-x) 的最大值为 ____',
    questionLatex: '\\text{已知 }2<x<8\\text{，则 }(x-2)(8-x)\\text{ 的最大值为 }\\underline{\\phantom{00000000}}',
    correctAnswer: '9',
    acceptableAnswers: ['9'],
  },
];
