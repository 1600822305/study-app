import type { QuizQuestionData } from '@/types';

export const logicQuizQuestions: QuizQuestionData[] = [
  {
    id: 'lq1',
    question: '（2023·新高考Ⅰ卷）p: x > 1，q: x² - 2x > 0，则 p 是 q 的',
    questionLatex: 'p: x > 1,\\; q: x^2 - 2x > 0,\\; \\text{则 p 是 q 的}',
    options: [
      { label: 'A', value: '充分不必要条件' },
      { label: 'B', value: '必要不充分条件' },
      { label: 'C', value: '充要条件' },
      { label: 'D', value: '既不充分也不必要条件' },
    ],
    correctAnswer: '既不充分也不必要条件',
    explanation: '用集合法：A = (1,+∞)，B = (-∞,0)∪(2,+∞)，互不包含。',
    explanationLatex:
      'A=(1,+\\infty),\\; B=(-\\infty,0)\\cup(2,+\\infty) \\quad A \\not\\subseteq B,\\; B \\not\\subseteq A',
  },
  {
    id: 'lq2',
    question: '（2022·新高考Ⅰ卷）p: a > 0 且 b > 0，q: a + b > 0，则 p 是 q 的',
    options: [
      { label: 'A', value: '充分不必要条件' },
      { label: 'B', value: '必要不充分条件' },
      { label: 'C', value: '充要条件' },
      { label: 'D', value: '既不充分也不必要条件' },
    ],
    correctAnswer: '充分不必要条件',
    explanation: 'a>0且b>0 → a+b>0 ✓；a+b>0 不一定 a>0且b>0（如a=3,b=-1）✗',
  },
  {
    id: 'lq3',
    question: '已知',
    questionLatex: 'p: |x| < 2,\\; q: x^2 - x - 2 < 0,\\; \\text{则 p 是 q 的}',
    options: [
      { label: 'A', value: '充分不必要条件' },
      { label: 'B', value: '必要不充分条件' },
      { label: 'C', value: '充要条件' },
      { label: 'D', value: '既不充分也不必要条件' },
    ],
    correctAnswer: '必要不充分条件',
    explanation: '集合法比大小。',
    explanationLatex:
      'A=(-2,2),\\; B: (x-2)(x+1)<0 \\Rightarrow (-1,2) \\quad B \\subset A \\Rightarrow \\text{p 是 q 的必要不充分条件}',
  },
  {
    id: 'lq4',
    question: '（2021·新高考Ⅱ卷）命题"∀ x ∈ R，x² + 1 > 0"的否定是',
    questionLatex: '\\text{命题 } "\\forall x \\in \\mathbb{R},\\; x^2 + 1 > 0" \\text{ 的否定是}',
    options: [
      { label: 'A', value: '\\forall x \\in \\mathbb{R},\\; x^2 + 1 \\leq 0', isLatex: true },
      { label: 'B', value: '\\forall x \\in \\mathbb{R},\\; x^2 + 1 < 0', isLatex: true },
      { label: 'C', value: '\\exists x_0 \\in \\mathbb{R},\\; x_0^2 + 1 \\leq 0', isLatex: true },
      { label: 'D', value: '\\exists x_0 \\in \\mathbb{R},\\; x_0^2 + 1 < 0', isLatex: true },
    ],
    correctAnswer: '\\exists x_0 \\in \\mathbb{R},\\; x_0^2 + 1 \\leq 0',
    explanation: '全称命题的否定：∀ 变 ∃，条件取反（> 变 ≤）。',
  },
  {
    id: 'lq5',
    question: '命题"∃ x₀ ∈ R，x₀² - x₀ - 1 > 0"的否定是',
    questionLatex: '\\text{命题 } "\\exists x_0 \\in \\mathbb{R},\\; x_0^2 - x_0 - 1 > 0" \\text{ 的否定是}',
    options: [
      { label: 'A', value: '\\forall x \\in \\mathbb{R},\\; x^2 - x - 1 > 0', isLatex: true },
      { label: 'B', value: '\\forall x \\in \\mathbb{R},\\; x^2 - x - 1 \\leq 0', isLatex: true },
      { label: 'C', value: '\\exists x_0 \\in \\mathbb{R},\\; x_0^2 - x_0 - 1 \\leq 0', isLatex: true },
      { label: 'D', value: '\\exists x_0 \\in \\mathbb{R},\\; x_0^2 - x_0 - 1 < 0', isLatex: true },
    ],
    correctAnswer: '\\forall x \\in \\mathbb{R},\\; x^2 - x - 1 \\leq 0',
    explanation: '特称命题的否定：∃ 变 ∀，条件取反（> 变 ≤）。',
  },
  {
    id: 'lq6',
    question: 'p: x² - 3x + 2 = 0，q: x = 1 或 x = 2，则 p 是 q 的',
    questionLatex: 'p: x^2 - 3x + 2 = 0,\; q: x = 1 \\text{ 或 } x = 2,\; \\text{则 p 是 q 的}',
    options: [
      { label: 'A', value: '充分不必要条件' },
      { label: 'B', value: '必要不充分条件' },
      { label: 'C', value: '充要条件' },
      { label: 'D', value: '既不充分也不必要条件' },
    ],
    correctAnswer: '充要条件',
    explanation: 'x²-3x+2=0 解为 x=1 或 x=2，与 q 完全相同，互推成立。',
    explanationLatex:
      'x^2-3x+2=0 \\Rightarrow (x-1)(x-2)=0 \\Rightarrow x=1 \\text{ 或 } x=2 \\quad A=B \\Rightarrow \\text{充要条件}',
  },
  {
    id: 'lq7',
    question: '下列命题中，是真命题的是',
    options: [
      { label: 'A', value: '若 x²=1，则 x=1' },
      { label: 'B', value: '若 x=1，则 x²=1' },
      { label: 'C', value: '若 x²≠1，则 x=1' },
      { label: 'D', value: '若 x≠1，则 x²=1' },
    ],
    correctAnswer: '若 x=1，则 x²=1',
    explanation: 'B 是原命题为真。A 的逆命题不一定成立（x 也可能=-1）。',
  },
  {
    id: 'lq8',
    question: '"x > 0 且 x < 3"的否定是',
    questionLatex: '"x > 0 \\text{ 且 } x < 3" \\text{ 的否定是}',
    options: [
      { label: 'A', value: 'x \\leq 0 \\text{ 且 } x \\geq 3', isLatex: true },
      { label: 'B', value: 'x \\leq 0 \\text{ 或 } x \\geq 3', isLatex: true },
      { label: 'C', value: 'x > 0 \\text{ 或 } x < 3', isLatex: true },
      { label: 'D', value: 'x < 0 \\text{ 且 } x > 3', isLatex: true },
    ],
    correctAnswer: 'x \\leq 0 \\text{ 或 } x \\geq 3',
    explanation: '否定时：且变或，> 变 ≤，< 变 ≥。',
  },
  {
    id: 'lq9',
    question: '若 p: 1 ≤ x ≤ 5，q: x > a，且 p 是 q 的充分条件，则 a 的取值范围是',
    questionLatex: 'p: 1 \\leq x \\leq 5,\\; q: x > a,\\; \\text{p 是 q 的充分条件，则 a 的范围是}',
    options: [
      { label: 'A', value: 'a < 1', isLatex: true },
      { label: 'B', value: 'a \\leq 1', isLatex: true },
      { label: 'C', value: 'a \\geq 5', isLatex: true },
      { label: 'D', value: 'a < 5', isLatex: true },
    ],
    correctAnswer: 'a < 1',
    explanation: 'p充分→A⊆B，A=[1,5]，B=(a,+∞)，A的最小值1必须>a，即a<1。',
    explanationLatex:
      'A=[1,5] \\subseteq B=(a,+\\infty) \\Rightarrow 1 > a \\Rightarrow a < 1',
  },
  {
    id: 'lq10',
    question: '"若 x² = 1，则 x = 1"的逆否命题是',
    options: [
      { label: 'A', value: '若 x ≠ 1，则 x² ≠ 1' },
      { label: 'B', value: '若 x² ≠ 1，则 x ≠ 1' },
      { label: 'C', value: '若 x = 1，则 x² = 1' },
      { label: 'D', value: '若 x ≠ 1，则 x² = 1' },
    ],
    correctAnswer: '若 x ≠ 1，则 x² ≠ 1',
    explanation: '逆否命题：条件和结论互换并取反。原命题"若p则q"的逆否命题是"若非q则非p"。',
  },
  {
    id: 'lq11',
    question: '下列哪个是命题？',
    options: [
      { label: 'A', value: 'x > 3' },
      { label: 'B', value: '请关门！' },
      { label: 'C', value: '4 是偶数' },
      { label: 'D', value: '明天会下雨吗？' },
    ],
    correctAnswer: '4 是偶数',
    explanation: '"4是偶数"能明确判断真假（真命题），是命题。其余：x>3 真假不确定、"请关门"是祈使句、"明天会下雨吗？"是疑问句，都不是命题。',
  },
  {
    id: 'lq12',
    question: 'p: "2 > 1"（真），q: "5 是偶数"（假），则下列正确的是',
    options: [
      { label: 'A', value: 'p 且 q 为真' },
      { label: 'B', value: 'p 或 q 为假' },
      { label: 'C', value: 'p 且 q 为假，p 或 q 为真' },
      { label: 'D', value: 'p 且 q 为真，p 或 q 为假' },
    ],
    correctAnswer: 'p 且 q 为假，p 或 q 为真',
    explanation: '且：全真才真，一假就假 → p且q=假。或：一真就真 → p或q=真。',
  },
];
