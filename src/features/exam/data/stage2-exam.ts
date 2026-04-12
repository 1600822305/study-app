import type { QuizQuestionData } from '@/types';
import type { EssayQuestion } from '@/components/shared/ExamPaper';

// ── 第二阶段考试：计算工具（不等式） ──
// 全部独立自编，高考标准，不从题库选取

// ═══════ 一、不等式（8 题） ═══════
export const stage2InequalityQuestions: QuizQuestionData[] = [
  {
    id: 's2e-i1',
    question: '',
    questionLatex: '\\text{若 } a > b > 0\\text{，则下列不等式一定成立的是}',
    type: 'choice',
    options: [
      { label: 'A', value: 'a - b > 0', isLatex: true },
      { label: 'B', value: 'a + b < 0', isLatex: true },
      { label: 'C', value: 'ab < 0', isLatex: true },
      { label: 'D', value: '\\dfrac{a}{b} < 1', isLatex: true },
    ],
    correctAnswer: 'a - b > 0',
  },
  {
    id: 's2e-i2',
    question: '',
    questionLatex: '\\text{不等式 } \\dfrac{x-1}{x+2} > 0 \\text{ 的解集为}',
    type: 'choice',
    options: [
      { label: 'A', value: '\\{x \\mid x > 1 \\text{ 或 } x < -2\\}', isLatex: true },
      { label: 'B', value: '\\{x \\mid -2 < x < 1\\}', isLatex: true },
      { label: 'C', value: '\\{x \\mid x > 1\\}', isLatex: true },
      { label: 'D', value: '\\{x \\mid x < -2\\}', isLatex: true },
    ],
    correctAnswer: '\\{x \\mid x > 1 \\text{ 或 } x < -2\\}',
  },
  {
    id: 's2e-i3',
    question: '',
    questionLatex: '\\text{若 } a > 0,\\; b > 0,\\; a + b = 4\\text{，则 } ab \\text{ 的最大值为}',
    type: 'choice',
    options: [
      { label: 'A', value: '2' },
      { label: 'B', value: '4' },
      { label: 'C', value: '8' },
      { label: 'D', value: '16' },
    ],
    correctAnswer: '4',
  },
  {
    id: 's2e-i4',
    question: '',
    questionLatex: '\\text{若 } x > 0\\text{，则 } x + \\dfrac{1}{x} \\text{ 的最小值为}',
    type: 'choice',
    options: [
      { label: 'A', value: '1' },
      { label: 'B', value: '2' },
      { label: 'C', value: '\\dfrac{1}{2}', isLatex: true },
      { label: 'D', value: '4' },
    ],
    correctAnswer: '2',
  },
  {
    id: 's2e-i5',
    question: '',
    questionLatex: '\\text{不等式 } x^2 - 5x + 6 > 0 \\text{ 的解集为}',
    type: 'choice',
    options: [
      { label: 'A', value: '\\{x \\mid x > 3 \\text{ 或 } x < 2\\}', isLatex: true },
      { label: 'B', value: '\\{x \\mid 2 < x < 3\\}', isLatex: true },
      { label: 'C', value: '\\{x \\mid x > 3\\}', isLatex: true },
      { label: 'D', value: '\\{x \\mid x < 2\\}', isLatex: true },
    ],
    correctAnswer: '\\{x \\mid x > 3 \\text{ 或 } x < 2\\}',
  },
  {
    id: 's2e-i6',
    question: '',
    questionLatex: '\\text{若 } a > b\\text{，} c < 0\\text{，则下列正确的是}',
    type: 'choice',
    options: [
      { label: 'A', value: 'ac > bc', isLatex: true },
      { label: 'B', value: 'ac < bc', isLatex: true },
      { label: 'C', value: '\\dfrac{a}{c} > \\dfrac{b}{c}', isLatex: true },
      { label: 'D', value: 'a - c < b - c', isLatex: true },
    ],
    correctAnswer: 'ac < bc',
  },
  {
    id: 's2e-i7',
    question: '',
    questionLatex: '\\text{若不等式 } x^2 + mx + 1 \\geq 0 \\text{ 对一切实数 } x \\text{ 恒成立，则 } m \\text{ 的取值范围为}',
    type: 'choice',
    options: [
      { label: 'A', value: '-2 \\leq m \\leq 2', isLatex: true },
      { label: 'B', value: 'm \\leq -2 \\text{ 或 } m \\geq 2', isLatex: true },
      { label: 'C', value: '-2 < m < 2', isLatex: true },
      { label: 'D', value: 'm > 2', isLatex: true },
    ],
    correctAnswer: '-2 \\leq m \\leq 2',
  },
  {
    id: 's2e-i8',
    question: '',
    questionLatex: '\\text{已知 } a > 0,\\; b > 0,\\; \\dfrac{1}{a} + \\dfrac{4}{b} = 1\\text{，则 } a + b \\text{ 的最小值为}',
    type: 'choice',
    options: [
      { label: 'A', value: '5' },
      { label: 'B', value: '9' },
      { label: 'C', value: '8' },
      { label: 'D', value: '10' },
    ],
    correctAnswer: '9',
  },
];

// 合并导出（供 QuizPanel 使用）
export const stage2ExamQuestions: QuizQuestionData[] = [
  ...stage2InequalityQuestions,
];

// ── 综合题（解答题，仅打印试卷使用） ──
export const stage2EssayQuestions: EssayQuestion[] = [
  {
    id: 's2e-essay-1',
    questionLatex:
      '\\text{已知 } a > 0,\\; b > 0,\\; 2a + b = 1\\text{。}\\\\[6pt]' +
      '\\text{（1）求 } ab \\text{ 的最大值；}\\\\[4pt]' +
      '\\text{（2）求 } \\dfrac{2}{a} + \\dfrac{1}{b} \\text{ 的最小值。}',
    score: 15,
    lines: 10,
  },
  {
    id: 's2e-essay-3',
    questionLatex:
      '\\text{已知不等式 } x^2 + bx + c \\leq 0 \\text{ 的解集为 } [-1, 3]\\text{。}\\\\[6pt]' +
      '\\text{（1）求 } b, c \\text{ 的值；}\\\\[4pt]' +
      '\\text{（2）解不等式 } cx^2 + bx + 1 > 0\\text{。}',
    score: 15,
    lines: 10,
  },
];
