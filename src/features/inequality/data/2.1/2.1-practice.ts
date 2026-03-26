import type { QuizQuestionData } from '@/types';

// ══════════════════════════════════════
//  2.1 不等式 - 基本不等式即时练习（6题）
// ══════════════════════════════════════

export const amgmPractice: QuizQuestionData[] = [
  // ── 基础题（2题）──
  {
    id: 'iq-p1',
    question: '已知 a,b>0，ab=16，求 a+b 的最小值',
    questionLatex: '\\text{已知 }a,b>0,\\;ab=16\\text{，求 }a+b\\text{ 的最小值}',
    options: [
      { label: 'A', value: '4', isLatex: false },
      { label: 'B', value: '8', isLatex: false },
      { label: 'C', value: '16', isLatex: false },
      { label: 'D', value: '32', isLatex: false },
    ],
    correctAnswer: '8',
  },
  {
    id: 'iq-p2',
    question: '已知 a,b>0，a+b=8，求 ab 的最大值',
    questionLatex: '\\text{已知 }a,b>0,\\;a+b=8\\text{，求 }ab\\text{ 的最大值}',
    options: [
      { label: 'A', value: '8', isLatex: false },
      { label: 'B', value: '12', isLatex: false },
      { label: 'C', value: '16', isLatex: false },
      { label: 'D', value: '64', isLatex: false },
    ],
    correctAnswer: '16',
  },
  // ── 正常难度（2题）──
  {
    id: 'iq-p3',
    question: '已知 x>0，求 x+9/x 的最小值',
    questionLatex: '\\text{已知 }x>0\\text{，求 }x+\\dfrac{9}{x}\\text{ 的最小值}',
    options: [
      { label: 'A', value: '3', isLatex: false },
      { label: 'B', value: '6', isLatex: false },
      { label: 'C', value: '9', isLatex: false },
      { label: 'D', value: '18', isLatex: false },
    ],
    correctAnswer: '6',
  },
  {
    id: 'iq-p4',
    question: '已知 0<x<4，求 x(4-x) 的最大值',
    questionLatex: '\\text{已知 }0<x<4\\text{，求 }x(4-x)\\text{ 的最大值}',
    options: [
      { label: 'A', value: '2', isLatex: false },
      { label: 'B', value: '4', isLatex: false },
      { label: 'C', value: '8', isLatex: false },
      { label: 'D', value: '16', isLatex: false },
    ],
    correctAnswer: '4',
  },
  // ── 高考难度（2题）──
  {
    id: 'iq-p5',
    question: '已知 x>2，求 x+1/(x-2) 的最小值',
    questionLatex: '\\text{已知 }x>2\\text{，求 }x+\\dfrac{1}{x-2}\\text{ 的最小值}',
    options: [
      { label: 'A', value: '3', isLatex: false },
      { label: 'B', value: '4', isLatex: false },
      { label: 'C', value: '2+2\\sqrt{2}', isLatex: true },
      { label: 'D', value: '2\\sqrt{2}', isLatex: true },
    ],
    correctAnswer: '4',
  },
  {
    id: 'iq-p6',
    question: '已知 a>0,b>0，a+2b=1，求 1/a+1/b 的最小值',
    questionLatex: '\\text{已知 }a>0,b>0,\\;a+2b=1\\text{，求 }\\dfrac{1}{a}+\\dfrac{1}{b}\\text{ 的最小值}',
    options: [
      { label: 'A', value: '3+2\\sqrt{2}', isLatex: true },
      { label: 'B', value: '4', isLatex: false },
      { label: 'C', value: '3+\\sqrt{2}', isLatex: true },
      { label: 'D', value: '9', isLatex: false },
    ],
    correctAnswer: '3+2\\sqrt{2}',
  },
];
