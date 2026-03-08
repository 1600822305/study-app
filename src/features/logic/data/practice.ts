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
    explanation: '检查：1 在 B 中？在。2 在 B 中？在。A 的每个元素都在 B 中，且 B 还多了个 3，所以 A ≠ B，是真子集 A ⊂ B。',
    explanationLatex: '\\{1,2\\} \\subset \\{1,2,3\\}',
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
    explanation: '画数轴：A 从 -1 到 3，B 从 -2 到 5。A 整个区间都在 B 里面，所以 A ⊂ B。判断技巧：左端点 A 的 -1 > B 的 -2，右端点 A 的 3 < B 的 5，A 更窄，在 B 里面。',
    explanationLatex: '(-1,3) \\subset (-2,5)',
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
    explanation: 'A = (3, +∞)，B = (1, +∞)。A 的范围更小，完全在 B 里面，所以 A ⊂ B。记住：范围小的是子集。',
    explanationLatex: 'A=(3,+\\infty) \\subset B=(1,+\\infty)',
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
    explanation: '空集是任何非空集合的真子集。∅ 没有元素，"∅ 的每个元素都在 B 中"这句话自动成立（因为没有反例），且 ∅ ≠ {1,2,3}，所以 ∅ ⊂ {1,2,3}。',
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
    explanation: '因式分解：(x-2)(x-3) < 0，两根是 2 和 3。小于零取中间（两根之间），所以 2 < x < 3。口诀：大于取两边，小于取中间。',
    explanationLatex: 'x^2-5x+6=(x-2)(x-3)<0 \\Rightarrow 2<x<3',
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
    explanation: '因式分解：(x-1)(x+1) ≥ 0，两根是 -1 和 1。大于等于零取两边（远离两根），注意 ≥ 要取等号，所以 x ≤ -1 或 x ≥ 1。选 C 的同学注意：≥ 不是 >，端点要包含。',
    explanationLatex: 'x^2-1=(x+1)(x-1)\\geq 0 \\Rightarrow x\\leq -1 \\text{ or } x\\geq 1',
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
    explanation: '< 号，用夹中间。去绝对值：-3 < x+2 < 3。解普通不等式：三边同时 -2，得 -5 < x < 1。选 B 的同学注意：是 x+2 不是 x-2，别搞反符号。',
    explanationLatex: '|x+2|<3 \\Rightarrow -3<x+2<3 \\xRightarrow{-2} -5<x<1',
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
    explanation: '> 号，用拆两边。去绝对值：x-3 < -2 或 x-3 > 2。解普通不等式：左边 +3 得 x < 1，右边 +3 得 x > 5。选 A 的同学搞反了，那是 < 夹中间的结果。',
    explanationLatex: '|x-3|>2 \\Rightarrow x-3<-2 \\text{ or } x-3>2 \\xRightarrow{+3} x<1 \\text{ or } x>5',
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
    explanation: '≤ 号，用夹中间。去绝对值：-6 ≤ 2x-4 ≤ 6。解普通不等式：三边 +4 得 -2 ≤ 2x ≤ 10，再三边 ÷2 得 -1 ≤ x ≤ 5。注意系数要除干净，别漏了 ÷2。',
    explanationLatex: '|2x-4|\\leq 6 \\Rightarrow -6\\leq 2x-4\\leq 6 \\xRightarrow{+4} -2\\leq 2x\\leq 10 \\xRightarrow{\\div 2} -1\\leq x\\leq 5',
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
    explanation: '绝对值前面有 +3，先移项把它去掉：|x+1| > 4。然后 > 号拆两边：x+1 < -4 或 x+1 > 4。左边 -1 得 x < -5，右边 -1 得 x > 3。选 C 的同学忘了移项，直接用 7 去算了。',
    explanationLatex: '|x+1|+3>7 \\xRightarrow{-3} |x+1|>4 \\Rightarrow x+1<-4 \\text{ or } x+1>4 \\xRightarrow{-1} x<-5 \\text{ or } x>3',
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
    explanation: '因式分解：(x-1)(x-3) > 0，两根是 1 和 3。大于零取两边（远离两根），所以 x < 1 或 x > 3。注意是 > 不是 ≥，端点不包含。选 A 的同学记反了口诀。',
    explanationLatex: 'x^2-4x+3=(x-1)(x-3)>0 \\Rightarrow x<1 \\text{ or } x>3',
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
    explanation: 'p 的范围是 (5,+∞)，q 的范围是 (3,+∞)。p 在 q 里面（小范围），所以 p→q 能推出。反过来 q→p 推不出，反例：x=4 满足 x>3 但不满足 x>5。',
    explanationLatex: 'p:(5,+\\infty) \\subset q:(3,+\\infty) \\Rightarrow p\\to q \\text{ \\checkmark}',
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
    explanation: '经典陷阱题！x²=4 的解是 x=2 或 x=-2，p 的范围是 {2,-2}，比 q 的 {2} 大。大→小推不出。反例：x=-2 满足 x²=4 但不满足 x=2。很多人直觉觉得"成立"，但忘了负数解。',
    explanationLatex: 'x^2=4 \\Rightarrow x=\\pm 2 \\text{，反例：} x=-2',
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
    explanation: '正方形一定有四个直角（小范围→大范围，能推出）。但反过来不行：有四个直角的不一定是正方形，长方形也有四个直角（反例），所以大→小推不出。',
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
    explanation: 'p→q：x=1 代入 x²=1²=1，一定成立，所以 p→q ✓。q→p：x²=1 的解是 x=1 或 x=-1，p 只有 x=1。反例：x=-1 满足 q 但不满足 p，所以 q→p ✗。和第2题对比：这次是小→大能推出。',
    explanationLatex: 'p:\\{1\\} \\subset q:\\{1,-1\\} \\Rightarrow p\\to q \\text{ \\checkmark, } q\\to p \\text{ \\times}',
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
    explanation: 'A=(3,+∞)，B=(1,+∞)，A 在 B 里面，即 A⊂B。所以 x∈A 一定能推出 x∈B。核心结论：子集关系等价于推出关系，A⊂B 就是 x∈A ⇒ x∈B。',
    explanationLatex: 'A=(3,+\\infty) \\subset B=(1,+\\infty) \\Leftrightarrow x\\in A \\Rightarrow x\\in B',
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
    explanation: '"5是质数"是一个陈述句，而且能明确判断真假（5只能被1和5整除，确实是质数），所以它是真命题。命题的关键：① 必须是陈述句 ② 能判断真假。',
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
    explanation: 'x 是未知数，当 x=-1 时等式成立（真），当 x=0 时不成立（假）。真假不确定，所以不是命题。注意：含未知数的等式/不等式通常不是命题，除非前面加了量词（如"∀x"或"∃x"）。',
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
    explanation: '1+1=3 明显是错的（应该=2），但"错"不代表"不是命题"。它是陈述句，能明确判断真假（假），所以是假命题。易错点：很多人觉得"错的就不是命题"，但假命题也是命题！',
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
    explanation: '逆命题 = 条件和结论互换。原命题"若p则q"→ 逆命题"若q则p"。所以把"x=2"和"x²=4"互换即可。注意：这个逆命题是假命题（x=-2 时 x²=4 但 x≠2），B 是否命题，C 是逆否命题。',
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
    explanation: '逆否命题 = "若非q则非p"（条件结论互换 + 都取反）。原命题"若x=2则x²=4"→ 逆否"若x²≠4则x≠2"。核心定理：原命题和逆否命题一定同真同假，原命题为真所以逆否也为真。A 是逆命题，B 是否命题。',
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
    explanation: '用集合法：p 的集合 A={2}，q 解方程 x²-4=0 得 x=±2，B={2,-2}。A⊂B（A 更小），谁小谁充分，所以 p 是 q 的充分不必要条件。验证：x=2→x²-4=0 ✓（充分成立），但 x=-2 也满足 q 却不满足 p（必要不成立）。',
    explanationLatex: 'A=\\{2\\} \\subset B=\\{2,-2\\} \\Rightarrow \\text{充分不必要}',
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
    explanation: '用集合法：A=(3,+∞)，B=(1,+∞)。A⊂B（A 更小），谁小谁充分。验证：x>3 一定能推出 x>1（充分 ✓），但 x=2>1 却不满足 x>3（必要 ✗）。所以 p 是 q 的充分不必要条件。',
    explanationLatex: 'A=(3,+\\infty) \\subset B=(1,+\\infty) \\Rightarrow \\text{充分不必要}',
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
    explanation: '先解 p：x²<4 → -2<x<2，A=(-2,2)。q 的范围 B=(-1,1)。B⊂A（B 更小），谁小谁充分 → q 充分、p 必要。验证：x=1.5 满足 p 但不满足 q（p→q 不成立），x∈(-1,1) 一定满足 x²<4（q→p 成立）。',
    explanationLatex: 'A=(-2,2),\\; B=(-1,1),\\; B \\subset A \\Rightarrow \\text{p 必要不充分}',
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
    explanation: '解 p：|x|<2 的意思是 x 到原点的距离小于2，即 -2<x<2，所以 A=(-2,2)。q 的范围也是 B=(-2,2)。A=B，两个集合完全相同，互推都成立，所以是充要条件。',
    explanationLatex: 'A=(-2,2) = B=(-2,2) \\Rightarrow \\text{充要条件}',
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
    explanation: 'A=(5,+∞)，B=(-∞,2)，两个集合完全不相交（交集为空）。x>5 推不出 x<2（充分 ✗），x<2 也推不出 x>5（必要 ✗）。两个方向都推不出，所以既不充分也不必要。',
    explanationLatex: 'A=(5,+\\infty),\\; B=(-\\infty,2),\\; A \\cap B = \\emptyset \\Rightarrow \\text{既不充分也不必要}',
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
    explanation: '两步操作：① 量词取反 ∀→∃ ② 条件取反 ≥→<。A 选项错在量词没变（还是∀），C 选项错在条件没变（还是≥）。补充：x²-x+1=(x-½)²+¾≥¾>0 恒成立，所以原命题为真，否定为假命题。',
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
    explanation: '两步操作：① 量词取反 ∃→∀（"存在"→"所有"） ② 条件取反"不等于"→"等于"。B 选项错在量词没变（还是"存在"），C 选项错在条件没变（还是"不等于"）。这道题的否定恰好是真命题（三角形内角和确实都等于180°）。',
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
    explanation: '两步操作：① 量词取反 ∃→∀ ② 条件取反 ≤→>。B 选项错在量词没变（还是∃），C 选项错在条件没变（还是≤）。补充：x²+2x+1=(x+1)²，当 x=-1 时等于0，原命题为真（∃x 使≤0成立），否定为假。',
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
    explanation: '两步操作：① "所有"→"存在"（即"有人"） ② "到齐"→"没到"。A "所有人都没到齐"错：否定不是把结论改成"全部取反"，而是"存在一个反例就够了"。C "没有人到"太极端，否定只需要"有人没到"。这是高考常考的生活化量词否定题。',
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
    explanation: '"且"的真值表：全真才真，一假就假。p=真，q=假，有一个假 → p且q=假。口诀：且像"严格老师"，全对才给分，有一个错就不及格。',
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
    explanation: '"或"的真值表：一真就真，全假才假。p=假，q=真，有一个真 → p或q=真。口诀：或像"宽容老师"，有一个对就给分，全错才不及格。',
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
    explanation: '两步操作：① 联结词取反"或"→"且" ② 每个条件取反：≤→>，>→≤。所以"x≤-1 或 x>5"→"x>-1 且 x≤5"。B 选项错在没把"或"变成"且"，C 选项错在条件没取反。用区间理解：原命题是(-∞,-1]∪(5,+∞)，否定是(-1,5]，正好互补。',
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
    explanation: '两步操作：① 联结词取反"且"→"或" ② 每个条件取反：>→≤，<→≥。所以"x>0 且 x<3"→"x≤0 或 x≥3"。A 选项错在没把"且"变成"或"，C 选项错在条件没取反。用区间理解：原命题是(0,3)，否定是(-∞,0]∪[3,+∞)，正好互补。',
  },
];
