import type { QuizQuestionData } from '@/types';

// ══════════════════════════════════════
//  LogicPrereqPage 即时练习
// ══════════════════════════════════════

// ── 第1节：集合包含关系 ──
export const logicPrereqPractice1: QuizQuestionData[] = [
  {
    id: 'lpp1-1',
    type: 'choice',
    question: '',
    questionLatex: 'A = \\{1,2\\}\\text{，}B = \\{1,2,3\\}\\text{，关系是？}',
    options: [
      { label: 'A', value: 'A ⊂ B' },
      { label: 'B', value: 'B ⊂ A' },
      { label: 'C', value: 'A = B' },
      { label: 'D', value: '无包含关系' },
    ],
    correctAnswer: 'A ⊂ B',
    explanation: 'A 的每个元素都在 B 中，且 A ≠ B，所以 A ⊂ B。',
  },
  {
    id: 'lpp1-2',
    type: 'choice',
    question: '',
    questionLatex: 'A = (-1, 3)\\text{，}B = (-2, 5)\\text{，谁包含谁？}',
    options: [
      { label: 'A', value: 'A ⊂ B' },
      { label: 'B', value: 'B ⊂ A' },
      { label: 'C', value: 'A = B' },
    ],
    correctAnswer: 'A ⊂ B',
    explanation: '(-1,3) 完全在 (-2,5) 里面，A ⊂ B。',
  },
  {
    id: 'lpp1-3',
    type: 'choice',
    question: '',
    questionLatex: 'A = [1, 4]\\text{，}B = [1, 4]\\text{，关系是？}',
    options: [
      { label: 'A', value: 'A ⊂ B' },
      { label: 'B', value: 'A = B' },
      { label: 'C', value: '无包含关系' },
    ],
    correctAnswer: 'A = B',
    explanation: '两个集合完全相同，A = B。',
  },
];

// ── 第2节：解不等式 ──
export const logicPrereqPractice2: QuizQuestionData[] = [
  {
    id: 'lpp2-1',
    type: 'choice',
    question: '',
    questionLatex: 'x^2 - 5x + 6 < 0 \\text{ 的解集是？}',
    options: [
      { label: 'A', value: 'x < 2 或 x > 3' },
      { label: 'B', value: '2 < x < 3' },
      { label: 'C', value: 'x ≤ 2 或 x ≥ 3' },
    ],
    correctAnswer: '2 < x < 3',
    explanation: '小于零取中间（两根之间）：2 < x < 3。',
  },
  {
    id: 'lpp2-2',
    type: 'choice',
    question: '',
    questionLatex: 'x^2 - 1 \\geq 0 \\text{ 的解集是？}',
    options: [
      { label: 'A', value: '-1 ≤ x ≤ 1' },
      { label: 'B', value: 'x ≤ -1 或 x ≥ 1' },
      { label: 'C', value: 'x < -1 或 x > 1' },
    ],
    correctAnswer: 'x ≤ -1 或 x ≥ 1',
    explanation: '大于等于零取两边（远离两根）：x ≤ -1 或 x ≥ 1。',
  },
  {
    id: 'lpp2-3',
    type: 'choice',
    question: '',
    questionLatex: '|x + 2| < 3 \\text{ 的解集是？}',
    options: [
      { label: 'A', value: '-5 < x < 1' },
      { label: 'B', value: '-1 < x < 5' },
      { label: 'C', value: 'x < -5 或 x > 1' },
    ],
    correctAnswer: '-5 < x < 1',
    explanation: '|x+2| < 3 即 -3 < x+2 < 3，解得 -5 < x < 1。',
  },
];

// ── 第3节：推理方向 ──
export const logicPrereqPractice3: QuizQuestionData[] = [
  {
    id: 'lpp3-1',
    type: 'choice',
    question: '"它是正方形" → "它是矩形"，能推出吗？',
    options: [
      { label: 'A', value: '能' },
      { label: 'B', value: '不能' },
    ],
    correctAnswer: '能',
    explanation: '正方形范围更小，一定是矩形。小范围→大范围，可以推出。',
  },
  {
    id: 'lpp3-2',
    type: 'choice',
    question: '',
    questionLatex: 'p\\text{: "} x = 1 \\text{"，}q\\text{: "} x^2 = 1 \\text{"，}p \\to q \\text{ 成立吗？}',
    options: [
      { label: 'A', value: '成立' },
      { label: 'B', value: '不成立' },
    ],
    correctAnswer: '成立',
    explanation: 'x=1 时 x²=1 一定成立。但反过来 x=-1 也满足 x²=1，所以 q→p 不成立。',
  },
  {
    id: 'lpp3-3',
    type: 'choice',
    question: '',
    questionLatex: 'p\\text{: "} x > 5 \\text{"，}q\\text{: "} x > 3 \\text{"，}p \\to q \\text{ 成立吗？}',
    options: [
      { label: 'A', value: '成立' },
      { label: 'B', value: '不成立' },
    ],
    correctAnswer: '成立',
    explanation: 'x > 5 的范围更小，一定满足 x > 3。小范围→大范围。',
  },
];

// ══════════════════════════════════════
//  LogicPage 即时练习
// ══════════════════════════════════════

// ── 第1节：命题判断 ──
export const logicPractice1: QuizQuestionData[] = [
  {
    id: 'lp1-1',
    type: 'choice',
    question: '"5 是质数" 是命题吗？',
    options: [
      { label: 'A', value: '是命题（真命题）' },
      { label: 'B', value: '是命题（假命题）' },
      { label: 'C', value: '不是命题' },
    ],
    correctAnswer: '是命题（真命题）',
    explanation: '5 确实是质数，能判断真假，是真命题。',
  },
  {
    id: 'lp1-2',
    type: 'choice',
    question: '"x + 1 = 0" 是命题吗？',
    options: [
      { label: 'A', value: '是命题（真命题）' },
      { label: 'B', value: '是命题（假命题）' },
      { label: 'C', value: '不是命题' },
    ],
    correctAnswer: '不是命题',
    explanation: 'x 不确定，无法判断真假，不是命题。',
  },
  {
    id: 'lp1-3',
    type: 'choice',
    question: '"1 + 1 = 3" 是命题吗？',
    options: [
      { label: 'A', value: '是命题（真命题）' },
      { label: 'B', value: '是命题（假命题）' },
      { label: 'C', value: '不是命题' },
    ],
    correctAnswer: '是命题（假命题）',
    explanation: '1+1=3 是错误的，但能判断真假，所以是假命题。',
  },
];

// ── 第2节：四种命题 ──
export const logicPractice2: QuizQuestionData[] = [
  {
    id: 'lp2-1',
    type: 'choice',
    question: '原命题"若 x=2，则 x²=4"的逆命题是？',
    options: [
      { label: 'A', value: '若 x²=4，则 x=2' },
      { label: 'B', value: '若 x≠2，则 x²≠4' },
      { label: 'C', value: '若 x²≠4，则 x≠2' },
    ],
    correctAnswer: '若 x²=4，则 x=2',
    explanation: '逆命题把条件和结论互换。这个逆命题是假命题（x也可能=-2）。',
  },
  {
    id: 'lp2-2',
    type: 'choice',
    question: '原命题"若 x=2，则 x²=4"的逆否命题是？',
    options: [
      { label: 'A', value: '若 x²=4，则 x=2' },
      { label: 'B', value: '若 x≠2，则 x²≠4' },
      { label: 'C', value: '若 x²≠4，则 x≠2' },
    ],
    correctAnswer: '若 x²≠4，则 x≠2',
    explanation: '逆否命题：条件结论互换再取否。和原命题同真同假（都是真命题）。',
  },
];

// ── 第3节：充要条件 ──
export const logicPractice3: QuizQuestionData[] = [
  {
    id: 'lp3-1',
    type: 'choice',
    question: '',
    questionLatex: 'p\\text{: }x = 2\\text{，}q\\text{: }x^2 - 4 = 0\\text{。}p \\text{ 是 } q \\text{ 的什么条件？}',
    options: [
      { label: 'A', value: '充分不必要条件' },
      { label: 'B', value: '必要不充分条件' },
      { label: 'C', value: '充要条件' },
      { label: 'D', value: '既不充分也不必要' },
    ],
    correctAnswer: '充分不必要条件',
    explanation: 'x=2→x²-4=0 ✓（充分），但 x=-2 也满足 q（不必要）。',
  },
  {
    id: 'lp3-2',
    type: 'choice',
    question: '',
    questionLatex: 'p\\text{: }x > 3\\text{，}q\\text{: }x > 1\\text{。}p \\text{ 是 } q \\text{ 的什么条件？}',
    options: [
      { label: 'A', value: '充分不必要条件' },
      { label: 'B', value: '必要不充分条件' },
      { label: 'C', value: '充要条件' },
      { label: 'D', value: '既不充分也不必要' },
    ],
    correctAnswer: '充分不必要条件',
    explanation: 'A⊂B（小范围推大范围），p→q ✓，q→p ✗（x=2满足q但不满足p）。',
  },
];

// ── 第4节：量词命题的否定 ──
export const logicPractice4: QuizQuestionData[] = [
  {
    id: 'lp4-1',
    type: 'choice',
    question: '',
    questionLatex: '\\text{"} \\forall x \\in \\mathbb{R},\\; 2x > 0 \\text{" 的否定是？}',
    options: [
      { label: 'A', value: '∀x∈ℝ, 2x ≤ 0', isLatex: false },
      { label: 'B', value: '∃x∈ℝ, 2x ≤ 0', isLatex: false },
      { label: 'C', value: '∃x∈ℝ, 2x > 0', isLatex: false },
    ],
    correctAnswer: '∃x∈ℝ, 2x ≤ 0',
    explanation: '∀变∃，> 变 ≤。',
  },
  {
    id: 'lp4-2',
    type: 'choice',
    question: '"存在一个三角形，内角和不等于180°" 的否定是？',
    options: [
      { label: 'A', value: '所有三角形的内角和都等于180°' },
      { label: 'B', value: '存在一个三角形，内角和等于180°' },
      { label: 'C', value: '所有三角形的内角和都不等于180°' },
    ],
    correctAnswer: '所有三角形的内角和都等于180°',
    explanation: '∃变∀，"不等于"变"等于"。',
  },
];

// ── 第5节：逻辑联结词 ──
export const logicPractice5: QuizQuestionData[] = [
  {
    id: 'lp5-1',
    type: 'choice',
    question: 'p: 5是奇数（真），q: 4<3（假），"p 且 q" = ？',
    options: [
      { label: 'A', value: '真' },
      { label: 'B', value: '假' },
    ],
    correctAnswer: '假',
    explanation: '"且"需要两个都真才为真，q为假所以"p且q"为假。',
  },
  {
    id: 'lp5-2',
    type: 'choice',
    question: 'p: 5是奇数（真），q: 4<3（假），"p 或 q" = ？',
    options: [
      { label: 'A', value: '真' },
      { label: 'B', value: '假' },
    ],
    correctAnswer: '真',
    explanation: '"或"只要有一个真就为真，p为真所以"p或q"为真。',
  },
  {
    id: 'lp5-3',
    type: 'choice',
    question: '"x ≤ -1 或 x > 5" 的否定是？',
    options: [
      { label: 'A', value: 'x > -1 且 x ≤ 5' },
      { label: 'B', value: 'x > -1 或 x ≤ 5' },
      { label: 'C', value: 'x ≤ -1 且 x > 5' },
    ],
    correctAnswer: 'x > -1 且 x ≤ 5',
    explanation: '否定"或"变"且"，≤变>，>变≤。',
  },
];
