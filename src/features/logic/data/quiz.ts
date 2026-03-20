import type { QuizQuestionData } from '@/types';

// 9道题覆盖5大考点：命题判断、四种命题、充要条件、量词否定、逻辑联结词
export const logicQuizQuestions: QuizQuestionData[] = [
  // 考点1：命题判断
  {
    id: 'lq1',
    question: '下列哪个是命题？',
    options: [
      { label: 'A', value: 'x > 3' },
      { label: 'B', value: '请关门！' },
      { label: 'C', value: '4 是偶数' },
      { label: 'D', value: '明天下雨吗？' },
    ],
    correctAnswer: '4 是偶数',
  },
  // 考点2：四种命题
  {
    id: 'lq2',
    question: '"若 x² = 1，则 x = 1" 的逆否命题是？',
    options: [
      { label: 'A', value: '若 x ≠ 1，则 x² ≠ 1' },
      { label: 'B', value: '若 x² ≠ 1，则 x ≠ 1' },
      { label: 'C', value: '若 x = 1，则 x² = 1' },
      { label: 'D', value: '若 x² = 1，则 x ≠ 1' },
    ],
    correctAnswer: '若 x ≠ 1，则 x² ≠ 1',
  },
  // 考点3：充要条件（基础）
  {
    id: 'lq3',
    question: '',
    questionLatex: 'p: x > 2,\\; q: x > 1,\\; \\text{则 p 是 q 的}',
    options: [
      { label: 'A', value: '充分不必要条件' },
      { label: 'B', value: '必要不充分条件' },
      { label: 'C', value: '充要条件' },
      { label: 'D', value: '既不充分也不必要' },
    ],
    correctAnswer: '充分不必要条件',
  },
  // 考点3：充要条件（进阶）
  {
    id: 'lq4',
    question: '',
    questionLatex: 'p: x^2 < 4,\\; q: -1 < x < 1,\\; \\text{则 p 是 q 的}',
    options: [
      { label: 'A', value: '充分不必要条件' },
      { label: 'B', value: '必要不充分条件' },
      { label: 'C', value: '充要条件' },
      { label: 'D', value: '既不充分也不必要' },
    ],
    correctAnswer: '必要不充分条件',
  },
  // 考点4：量词否定（∀）
  {
    id: 'lq5',
    question: '',
    questionLatex: '"\\forall x \\in \\mathbb{R},\\; x^2 + 1 > 0" \\text{ 的否定是}',
    options: [
      { label: 'A', value: '∀x∈ℝ, x²+1 ≤ 0' },
      { label: 'B', value: '∃x∈ℝ, x²+1 ≤ 0' },
      { label: 'C', value: '∃x∈ℝ, x²+1 > 0' },
      { label: 'D', value: '∀x∈ℝ, x²+1 < 0' },
    ],
    correctAnswer: '∃x∈ℝ, x²+1 ≤ 0',
  },
  // 考点4：量词否定（∃）
  {
    id: 'lq6',
    question: '',
    questionLatex: '"\\exists x \\in \\mathbb{R},\\; x^2 - x > 0" \\text{ 的否定是}',
    options: [
      { label: 'A', value: '∀x∈ℝ, x²-x > 0' },
      { label: 'B', value: '∀x∈ℝ, x²-x ≤ 0' },
      { label: 'C', value: '∃x∈ℝ, x²-x ≤ 0' },
      { label: 'D', value: '∃x∈ℝ, x²-x < 0' },
    ],
    correctAnswer: '∀x∈ℝ, x²-x ≤ 0',
  },
  // 考点5：逻辑联结词（真值）
  {
    id: 'lq7',
    question: 'p: "2 > 1"（真），q: "5 是偶数"（假），则',
    options: [
      { label: 'A', value: 'p 且 q 为真' },
      { label: 'B', value: 'p 或 q 为假' },
      { label: 'C', value: 'p 且 q 为假' },
      { label: 'D', value: '非 p 为真' },
    ],
    correctAnswer: 'p 且 q 为假',
  },
  // 考点5：逻辑联结词（否定）
  {
    id: 'lq8',
    question: '',
    questionLatex: '"x > 0 \\text{ 且 } x < 3" \\text{ 的否定是}',
    options: [
      { label: 'A', value: 'x ≤ 0 且 x ≥ 3' },
      { label: 'B', value: 'x ≤ 0 或 x ≥ 3' },
      { label: 'C', value: 'x > 0 或 x < 3' },
      { label: 'D', value: 'x < 0 且 x > 3' },
    ],
    correctAnswer: 'x ≤ 0 或 x ≥ 3',
  },
  // 综合：充要条件求参数
  {
    id: 'lq9',
    question: '',
    questionLatex: 'p: 1 \\leq x \\leq 5,\\; q: x > a,\\; \\text{若 p 是 q 的充分条件，则 a 的范围是}',
    options: [
      { label: 'A', value: 'a < 1' },
      { label: 'B', value: 'a ≤ 1' },
      { label: 'C', value: 'a ≥ 5' },
      { label: 'D', value: 'a < 5' },
    ],
    correctAnswer: 'a < 1',
  },
];
