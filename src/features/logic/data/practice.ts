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
  },
  {
    id: 'lpp1-4',
    type: 'choice',
    question: '',
    questionLatex: 'A = \\{x \\mid x > 3\\}\\text{，}B = \\{x \\mid x > 1\\}\\text{，关系是？}',
    options: [
      { label: 'A', value: 'A ⊂ B' },
      { label: 'B', value: 'B ⊂ A' },
      { label: 'C', value: 'A = B' },
      { label: 'D', value: '无包含关系' },
    ],
    correctAnswer: 'A ⊂ B',
  },
  {
    id: 'lpp1-5',
    type: 'choice',
    question: '空集 ∅ 和集合 {1, 2, 3} 的关系是？',
    options: [
      { label: 'A', value: '∅ ⊂ {1,2,3}' },
      { label: 'B', value: '{1,2,3} ⊂ ∅' },
      { label: 'C', value: '∅ = {1,2,3}' },
      { label: 'D', value: '无包含关系' },
    ],
    correctAnswer: '∅ ⊂ {1,2,3}',
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
  },
  {
    id: 'lpp2-4',
    type: 'choice',
    question: '',
    questionLatex: '|x - 3| > 2 \\text{ 的解集是？}',
    options: [
      { label: 'A', value: '1 < x < 5' },
      { label: 'B', value: 'x < 1 或 x > 5' },
      { label: 'C', value: 'x ≤ 1 或 x ≥ 5' },
    ],
    correctAnswer: 'x < 1 或 x > 5',
  },
  {
    id: 'lpp2-5',
    type: 'choice',
    question: '',
    questionLatex: '|2x - 4| \\leq 6 \\text{ 的解集是？}',
    options: [
      { label: 'A', value: '-1 ≤ x ≤ 5' },
      { label: 'B', value: '-5 ≤ x ≤ 1' },
      { label: 'C', value: 'x ≤ -1 或 x ≥ 5' },
    ],
    correctAnswer: '-1 ≤ x ≤ 5',
  },
  {
    id: 'lpp2-6',
    type: 'choice',
    question: '',
    questionLatex: '|x + 1| + 3 > 7 \\text{ 的解集是？}',
    options: [
      { label: 'A', value: '-5 < x < 3' },
      { label: 'B', value: 'x < -5 或 x > 3' },
      { label: 'C', value: 'x < -4 或 x > 4' },
    ],
    correctAnswer: 'x < -5 或 x > 3',
  },
  {
    id: 'lpp2-7',
    type: 'choice',
    question: '',
    questionLatex: 'x^2 - 4x + 3 > 0 \\text{ 的解集是？}',
    options: [
      { label: 'A', value: '1 < x < 3' },
      { label: 'B', value: 'x < 1 或 x > 3' },
      { label: 'C', value: 'x ≤ 1 或 x ≥ 3' },
    ],
    correctAnswer: 'x < 1 或 x > 3',
  },
];

// ── 第3节：推理方向（精华题） ──
export const logicPrereqPractice3: QuizQuestionData[] = [
  {
    id: 'lpp3-1',
    type: 'choice',
    question: '',
    questionLatex: 'p\\text{: "} x > 5 \\text{"，}q\\text{: "} x > 3 \\text{"，下列正确的是？}',
    options: [
      { label: 'A', value: 'p→q 成立，q→p 也成立' },
      { label: 'B', value: 'p→q 成立，q→p 不成立' },
      { label: 'C', value: 'p→q 不成立，q→p 成立' },
    ],
    correctAnswer: 'p→q 成立，q→p 不成立',
  },
  {
    id: 'lpp3-2',
    type: 'choice',
    question: '',
    questionLatex: 'p\\text{: "} x^2 = 4 \\text{"，}q\\text{: "} x = 2 \\text{"，}p \\to q \\text{ 成立吗？}',
    options: [
      { label: 'A', value: '成立' },
      { label: 'B', value: '不成立' },
    ],
    correctAnswer: '不成立',
  },
  {
    id: 'lpp3-3',
    type: 'choice',
    question: '"它是正方形" → "它有四个直角"，能推出吗？',
    options: [
      { label: 'A', value: '能推出' },
      { label: 'B', value: '推不出' },
    ],
    correctAnswer: '能推出',
  },
  {
    id: 'lpp3-4',
    type: 'choice',
    question: '',
    questionLatex: 'p\\text{: "} x = 1 \\text{"，}q\\text{: "} x^2 = 1 \\text{"。下列正确的是？}',
    options: [
      { label: 'A', value: 'p→q 成立，q→p 也成立' },
      { label: 'B', value: 'p→q 成立，q→p 不成立' },
      { label: 'C', value: 'p→q 不成立，q→p 成立' },
    ],
    correctAnswer: 'p→q 成立，q→p 不成立',
  },
  {
    id: 'lpp3-5',
    type: 'choice',
    question: '',
    questionLatex: 'A = \\{x \\mid x > 3\\},\\; B = \\{x \\mid x > 1\\}\\text{。}x \\in A \\Rightarrow x \\in B \\text{ 成立吗？}',
    options: [
      { label: 'A', value: '成立' },
      { label: 'B', value: '不成立' },
    ],
    correctAnswer: '成立',
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
  },
  {
    id: 'lp2-3',
    type: 'choice',
    question: '"它是正方形" → "它有四个直角"，能推出吗？',
    options: [
      { label: 'A', value: '能推出' },
      { label: 'B', value: '推不出' },
    ],
    correctAnswer: '能推出',
  },
  {
    id: 'lp2-4',
    type: 'choice',
    question: '',
    questionLatex: 'p\\text{: "} x = 1 \\text{"，}q\\text{: "} x^2 = 1 \\text{"。下列正确的是？}',
    options: [
      { label: 'A', value: 'p→q 成立，q→p 也成立' },
      { label: 'B', value: 'p→q 成立，q→p 不成立' },
      { label: 'C', value: 'p→q 不成立，q→p 成立' },
    ],
    correctAnswer: 'p→q 成立，q→p 不成立',
  },
  {
    id: 'lp2-5',
    type: 'choice',
    question: '',
    questionLatex: 'A = \\{x \\mid x > 3\\},\\; B = \\{x \\mid x > 1\\}\\text{。}x \\in A \\Rightarrow x \\in B \\text{ 成立吗？}',
    options: [
      { label: 'A', value: '成立' },
      { label: 'B', value: '不成立' },
    ],
    correctAnswer: '成立',
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
  },
  {
    id: 'lp3-3',
    type: 'choice',
    question: '',
    questionLatex: 'p\\text{: }x^2 < 4\\text{，}q\\text{: }-1 < x < 1\\text{。}p \\text{ 是 } q \\text{ 的什么条件？}',
    options: [
      { label: 'A', value: '充分不必要条件' },
      { label: 'B', value: '必要不充分条件' },
      { label: 'C', value: '充要条件' },
      { label: 'D', value: '既不充分也不必要' },
    ],
    correctAnswer: '必要不充分条件',
  },
  {
    id: 'lp3-4',
    type: 'choice',
    question: '',
    questionLatex: 'p\\text{: }|x| < 2\\text{，}q\\text{: }-2 < x < 2\\text{。}p \\text{ 是 } q \\text{ 的什么条件？}',
    options: [
      { label: 'A', value: '充分不必要条件' },
      { label: 'B', value: '必要不充分条件' },
      { label: 'C', value: '充要条件' },
      { label: 'D', value: '既不充分也不必要' },
    ],
    correctAnswer: '充要条件',
  },
  {
    id: 'lp3-5',
    type: 'choice',
    question: '',
    questionLatex: 'p\\text{: }x > 5\\text{，}q\\text{: }x < 2\\text{。}p \\text{ 是 } q \\text{ 的什么条件？}',
    options: [
      { label: 'A', value: '充分不必要条件' },
      { label: 'B', value: '必要不充分条件' },
      { label: 'C', value: '充要条件' },
      { label: 'D', value: '既不充分也不必要' },
    ],
    correctAnswer: '既不充分也不必要',
  },
];

// ── 第4节：量词命题的否定 ──
export const logicPractice4: QuizQuestionData[] = [
  {
    id: 'lp4-1',
    type: 'choice',
    question: '',
    questionLatex: '\\text{"} \\forall x \\in \\mathbb{R},\\; x^2 - x + 1 \\geq 0 \\text{" 的否定是？}',
    options: [
      { label: 'A', value: '∀x∈ℝ, x²-x+1 < 0' },
      { label: 'B', value: '∃x∈ℝ, x²-x+1 < 0' },
      { label: 'C', value: '∃x∈ℝ, x²-x+1 ≥ 0' },
    ],
    correctAnswer: '∃x∈ℝ, x²-x+1 < 0',
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
  },
  {
    id: 'lp4-3',
    type: 'choice',
    question: '',
    questionLatex: '\\text{"} \\exists x \\in \\mathbb{R},\\; x^2 + 2x + 1 \\leq 0 \\text{" 的否定是？}',
    options: [
      { label: 'A', value: '\\forall x \\in \\mathbb{R},\\; x^2+2x+1 > 0', isLatex: true },
      { label: 'B', value: '\\exists x \\in \\mathbb{R},\\; x^2+2x+1 > 0', isLatex: true },
      { label: 'C', value: '\\forall x \\in \\mathbb{R},\\; x^2+2x+1 \\leq 0', isLatex: true },
    ],
    correctAnswer: '\\forall x \\in \\mathbb{R},\\; x^2+2x+1 > 0',
  },
  {
    id: 'lp4-4',
    type: 'choice',
    question: '"所有人都到齐了" 的否定是？（注意不是"否命题"！）',
    options: [
      { label: 'A', value: '所有人都没到齐' },
      { label: 'B', value: '有人没到' },
      { label: 'C', value: '没有人到' },
    ],
    correctAnswer: '有人没到',
  },
];

// ── 第5节：逻辑联结词 ──
export const logicPractice5: QuizQuestionData[] = [
  {
    id: 'lp5-1',
    type: 'choice',
    question: 'p: 2是偶数（真），q: 3>5（假）。"p 且 q" 的真假是？',
    options: [
      { label: 'A', value: '真' },
      { label: 'B', value: '假' },
    ],
    correctAnswer: '假',
  },
  {
    id: 'lp5-2',
    type: 'choice',
    question: 'p: 1>2（假），q: 4是偶数（真）。"p 或 q" 的真假是？',
    options: [
      { label: 'A', value: '真' },
      { label: 'B', value: '假' },
    ],
    correctAnswer: '真',
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
  },
  {
    id: 'lp5-4',
    type: 'choice',
    question: '"x > 0 且 x < 3" 的否定是？',
    options: [
      { label: 'A', value: 'x ≤ 0 且 x ≥ 3' },
      { label: 'B', value: 'x ≤ 0 或 x ≥ 3' },
      { label: 'C', value: 'x > 0 或 x < 3' },
    ],
    correctAnswer: 'x ≤ 0 或 x ≥ 3',
  },
];
