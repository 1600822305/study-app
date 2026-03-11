import type { QuizQuestionData } from '@/types';

export const setsQuizQuestions: QuizQuestionData[] = [
  {
    id: 'sq1',
    question: '（2020·新高考Ⅰ卷）已知 A = {2, 3, 5, 7}，B = {x | 1 < x < 6}，则 A ∩ B =',
    questionLatex: 'A = \\{2, 3, 5, 7\\},\\; B = \\{x \\mid 1 < x < 6\\},\\; A \\cap B =',
    options: [
      { label: 'A', value: '\\{2, 3\\}', isLatex: true },
      { label: 'B', value: '\\{3, 5\\}', isLatex: true },
      { label: 'C', value: '\\{2, 3, 5\\}', isLatex: true },
      { label: 'D', value: '\\{2, 3, 5, 7\\}', isLatex: true },
    ],
    correctAnswer: '\\{2, 3, 5\\}',
    explanation: '答案：C。A 是有限集 {2,3,5,7}，B = (1,6) 是 1 到 6 之间的所有数（不含端点）。交集就是逐个检查 A 中哪些元素落在 B 的范围内：2∈(1,6)✓，3∈(1,6)✓，5∈(1,6)✓，7>6 所以 7∉(1,6)✗。因此 A∩B = {2,3,5}。',
    explanationLatex:
      'B=(1,6)\\text{，逐个检验：} 2\\in(1,6)\\checkmark,\\; 3\\in(1,6)\\checkmark,\\; 5\\in(1,6)\\checkmark,\\; 7\\notin(1,6)\\times \\\\[4pt] \\therefore A \\cap B = \\{2,3,5\\}',
  },
  {
    id: 'sq2',
    question: '（2023·新高考Ⅰ卷）已知',
    questionLatex:
      'A = \\{x \\mid -2 < x < 4\\},\\; B = \\{x \\mid x^2 - 2x - 3 \\leq 0\\},\\; A \\cap B =',
    options: [
      { label: 'A', value: '\\{x \\mid -2 < x \\leq 3\\}', isLatex: true },
      { label: 'B', value: '\\{x \\mid -1 \\leq x \\leq 3\\}', isLatex: true },
      { label: 'C', value: '\\{x \\mid -1 \\leq x < 4\\}', isLatex: true },
      { label: 'D', value: '\\{x \\mid -2 < x < 4\\}', isLatex: true },
    ],
    correctAnswer: '\\{x \\mid -1 \\leq x \\leq 3\\}',
    explanation: '答案：B。第一步：解 B 的不等式 x²-2x-3≤0，因式分解得 (x-3)(x+1)≤0，两根为 x=-1 和 x=3，不等号 ≤ 取两根之间（含端点），所以 B=[-1,3]。第二步：A=(-2,4)，在数轴上画出两个区间，交集取重叠部分。A 从 -2（不含）到 4（不含），B 从 -1（含）到 3（含），重叠部分是 [-1,3]。注意端点：-1 在 B 中含，在 A 中也在范围内，所以取 ≤；3 在 B 中含，在 A 中也在范围内，所以取 ≤。',
    explanationLatex:
      'x^2-2x-3 \\leq 0 \\Rightarrow (x-3)(x+1) \\leq 0 \\Rightarrow B=[-1,3] \\\\[4pt] A=(-2,4),\\; B=[-1,3] \\\\[4pt] A \\cap B = [-1,3]',
  },
  {
    id: 'sq3',
    question: '（2022·新高考Ⅰ卷）已知 U = R，',
    questionLatex:
      'U = \\mathbb{R},\\; A = \\{x \\mid x^2 - x - 2 \\geq 0\\},\\; \\complement_U A =',
    options: [
      { label: 'A', value: '\\{x \\mid -1 < x < 2\\}', isLatex: true },
      { label: 'B', value: '\\{x \\mid -1 \\leq x \\leq 2\\}', isLatex: true },
      { label: 'C', value: '\\{x \\mid x < -1 \\text{ 或 } x > 2\\}', isLatex: true },
      { label: 'D', value: '\\{x \\mid x \\leq -1 \\text{ 或 } x \\geq 2\\}', isLatex: true },
    ],
    correctAnswer: '\\{x \\mid -1 < x < 2\\}',
    explanation: '答案：A。第一步：解不等式 x²-x-2≥0，因式分解得 (x-2)(x+1)≥0，两根 x=-1 和 x=2。≥0 取两根外侧（含端点），所以 A=(-∞,-1]∪[2,+∞)。第二步：取补集就是把 A "反过来"——A 不包含的部分就是补集。A 包含 ≤-1 和 ≥2，所以补集是 -1 到 2 之间。关键点：补集端点开闭互换！A 中 -1 用 ≤（闭），补集变 >（开）；A 中 2 用 ≥（闭），补集变 <（开）。所以 ∁ᵤA = (-1,2)。',
    explanationLatex:
      'x^2-x-2 \\geq 0 \\Rightarrow (x-2)(x+1) \\geq 0 \\\\[4pt] A=(-\\infty,-1] \\cup [2,+\\infty) \\\\[4pt] \\text{补集端点开闭互换：} \\complement_U A = (-1,2)',
  },
  {
    id: 'sq4',
    question: '（2021·新高考Ⅰ卷）',
    questionLatex:
      'U = \\mathbb{R},\\; A = \\{x \\mid x < 2\\},\\; B = \\{x \\mid 0 \\leq x \\leq 3\\},\\; A \\cap (\\complement_U B) =',
    options: [
      { label: 'A', value: '\\{x \\mid x < 0\\}', isLatex: true },
      { label: 'B', value: '\\{x \\mid x < 2\\}', isLatex: true },
      { label: 'C', value: '\\{x \\mid 0 \\leq x < 2\\}', isLatex: true },
      { label: 'D', value: '\\{x \\mid 2 \\leq x \\leq 3\\}', isLatex: true },
    ],
    correctAnswer: '\\{x \\mid x < 0\\}',
    explanation: '答案：A。第一步：求 ∁ᵤB。B=[0,3]，全集 U=ℝ，补集就是 B 以外的部分：x<0 或 x>3，即 ∁ᵤB=(-∞,0)∪(3,+∞)。注意端点互换：B 含 0（≤），补集不含 0（<）；B 含 3（≤），补集不含 3（>）。第二步：求 A∩(∁ᵤB)。A=(-∞,2)，∁ᵤB=(-∞,0)∪(3,+∞)。在数轴上画出来，A 和 (-∞,0) 重叠部分是 (-∞,0)；A 和 (3,+∞) 没有重叠（A 只到 2）。所以结果是 (-∞,0)，即 {x|x<0}。',
    explanationLatex:
      'B=[0,3] \\Rightarrow \\complement_U B = (-\\infty,0) \\cup (3,+\\infty) \\\\[4pt] A=(-\\infty,2) \\\\[4pt] A \\cap \\complement_U B = (-\\infty,0) \\cap (-\\infty,2) = (-\\infty,0)',
  },
  {
    id: 'sq5',
    question: '已知',
    questionLatex:
      'A = \\{x \\mid x^2 - 5x + 6 = 0\\},\\; B = \\{x \\mid x^2 - 3x + 2 = 0\\},\\; A \\cap B =',
    options: [
      { label: 'A', value: '\\{1\\}', isLatex: true },
      { label: 'B', value: '\\{2\\}', isLatex: true },
      { label: 'C', value: '\\{1, 2\\}', isLatex: true },
      { label: 'D', value: '\\{2, 3\\}', isLatex: true },
    ],
    correctAnswer: '\\{2\\}',
    explanation: '答案：B。第一步：解 A 的方程 x²-5x+6=0，因式分解 (x-2)(x-3)=0，得 x=2 或 x=3，所以 A={2,3}。第二步：解 B 的方程 x²-3x+2=0，因式分解 (x-1)(x-2)=0，得 x=1 或 x=2，所以 B={1,2}。第三步：交集就是两个集合的公共元素。A={2,3} 和 B={1,2} 的公共元素只有 2，所以 A∩B={2}。',
    explanationLatex:
      'A: x^2-5x+6=0 \\Rightarrow (x-2)(x-3)=0 \\Rightarrow A=\\{2,3\\} \\\\[4pt] B: x^2-3x+2=0 \\Rightarrow (x-1)(x-2)=0 \\Rightarrow B=\\{1,2\\} \\\\[4pt] A \\cap B = \\{2\\}',
  },
  {
    id: 'sq6',
    question: '',
    questionLatex: 'U = \\{1,2,3,4,5\\},\\; A = \\{1,3,5\\},\\; B = \\{2,4\\},\\; (\\complement_U A) \\cup B =',
    options: [
      { label: 'A', value: '\\{2, 4\\}', isLatex: true },
      { label: 'B', value: '\\{1, 3, 5\\}', isLatex: true },
      { label: 'C', value: '\\{2, 4, 5\\}', isLatex: true },
      { label: 'D', value: '\\{1, 2, 3, 4, 5\\}', isLatex: true },
    ],
    correctAnswer: '\\{2, 4\\}',
    explanation: '答案：A。第一步：求 ∁ᵤA。U={1,2,3,4,5}，A={1,3,5}，补集就是 U 中去掉 A 的元素：去掉 1,3,5 剩下 2,4，所以 ∁ᵤA={2,4}。第二步：求并集 (∁ᵤA)∪B = {2,4}∪{2,4} = {2,4}（并集去重，但两个集合一模一样）。',
    explanationLatex:
      'U=\\{1,2,3,4,5\\},\\; A=\\{1,3,5\\} \\\\[4pt] \\complement_U A = U \\setminus A = \\{2,4\\} \\\\[4pt] (\\complement_U A) \\cup B = \\{2,4\\} \\cup \\{2,4\\} = \\{2,4\\}',
  },
  {
    id: 'sq7',
    question: '',
    questionLatex: 'A = \\{a, b, c\\} \\text{ 的子集个数为}',
    options: [
      { label: 'A', value: '6' },
      { label: 'B', value: '7' },
      { label: 'C', value: '8' },
      { label: 'D', value: '9' },
    ],
    correctAnswer: '8',
    explanation: '答案：C。公式：n 个元素的集合有 2ⁿ 个子集。A={a,b,c} 有 3 个元素，所以子集个数 = 2³ = 8。这 8 个子集分别是：∅, {a}, {b}, {c}, {a,b}, {a,c}, {b,c}, {a,b,c}。记忆技巧：每个元素都有「选」或「不选」两种状态，3 个元素就是 2×2×2 = 8 种选法。',
    explanationLatex: '\\text{n 个元素} \\Rightarrow 2^n \\text{ 个子集} \\\\[4pt] A=\\{a,b,c\\},\\; n=3 \\Rightarrow 2^3 = 8',
  },
  {
    id: 'sq8',
    question: '已知',
    questionLatex:
      'A = \\{x \\mid x^2 - 4x + 3 \\leq 0\\},\\; B = \\{x \\mid x > 2\\},\\; A \\cap B =',
    options: [
      { label: 'A', value: '(2, 3]', isLatex: true },
      { label: 'B', value: '[1, 2)', isLatex: true },
      { label: 'C', value: '[1, 3]', isLatex: true },
      { label: 'D', value: '(2, +\\infty)', isLatex: true },
    ],
    correctAnswer: '(2, 3]',
    explanation: '答案：A。第一步：解 A 的不等式 x²-4x+3≤0，因式分解 (x-1)(x-3)≤0，两根 1 和 3，≤0 取两根之间（含端点），所以 A=[1,3]。第二步：B=(2,+∞)。在数轴上画出 A=[1,3] 和 B=(2,+∞)，重叠部分是从 2（不含，因为 B 不含 2）到 3（含，因为 A 含 3），即 A∩B=(2,3]。端点判断：2 只在 B 的边界且 B 不含 2，所以用 (；3 在 A 中含，B 中 3>2 也满足，所以用 ]。',
    explanationLatex:
      'x^2-4x+3 \\leq 0 \\Rightarrow (x-1)(x-3) \\leq 0 \\Rightarrow A=[1,3] \\\\[4pt] B=(2,+\\infty) \\\\[4pt] A \\cap B = (2,3]',
  },
  {
    id: 'sq9',
    question: '下列关于空集的说法，正确的是',
    options: [
      { label: 'A', value: '\\varnothing = \\{0\\}', isLatex: true },
      { label: 'B', value: '\\text{空集没有子集}', isLatex: true },
      { label: 'C', value: '\\text{空集是任何集合的子集}', isLatex: true },
      { label: 'D', value: '\\text{空集是任何集合的元素}', isLatex: true },
    ],
    correctAnswer: '\\text{空集是任何集合的子集}',
    explanation: '答案：C。逐项分析：A 选项 ∅={0} 错误，∅ 是没有元素的集合，而 {0} 里有一个元素 0，两者完全不同。B 选项「空集没有子集」错误，∅ 是自己的子集（∅⊆∅ 成立）。C 选项「空集是任何集合的子集」正确，这是集合论的基本定理，记住 ∅⊆A 对任意集合 A 都成立。D 选项「空集是任何集合的元素」错误，子集和元素是两个概念，∅⊆A 不等于 ∅∈A。',
  },
  {
    id: 'sq10',
    question: '',
    questionLatex:
      'U = \\mathbb{R},\\; A = \\{x \\mid -1 \\leq x < 3\\},\\; B = \\{x \\mid 2 < x \\leq 5\\},\\; A \\cup B =',
    options: [
      { label: 'A', value: '\\{x \\mid -1 \\leq x \\leq 5\\}', isLatex: true },
      { label: 'B', value: '\\{x \\mid 2 < x < 3\\}', isLatex: true },
      { label: 'C', value: '\\{x \\mid -1 \\leq x < 3\\}', isLatex: true },
      { label: 'D', value: '\\{x \\mid -1 < x \\leq 5\\}', isLatex: true },
    ],
    correctAnswer: '\\{x \\mid -1 \\leq x \\leq 5\\}',
    explanation: '答案：A。A=[-1,3)，B=(2,5]。并集就是把两个区间合起来。在数轴上：A 从 -1（含）到 3（不含），B 从 2（不含）到 5（含）。两个区间有重叠（2 到 3 之间），合起来就是从最左端 -1（含）到最右端 5（含），即 [-1,5]。端点判断：-1 在 A 中含，用 ≤；5 在 B 中含，用 ≤。并集端点取「宽松」：只要有一边含就含。',
    explanationLatex:
      'A=[-1,3),\\; B=(2,5] \\\\[4pt] A \\cup B = [-1,3) \\cup (2,5] = [-1,5]',
  },
  {
    id: 'sq11',
    question: '下列关系正确的是',
    options: [
      { label: 'A', value: '0 \\in \\mathbb{N}^*', isLatex: true },
      { label: 'B', value: '\\sqrt{2} \\in \\mathbb{Q}', isLatex: true },
      { label: 'C', value: '-3 \\in \\mathbb{Z}', isLatex: true },
      { label: 'D', value: '\\pi \\in \\mathbb{Q}', isLatex: true },
    ],
    correctAnswer: '-3 \\in \\mathbb{Z}',
    explanation: '答案：C。逐项分析：A 选项 0∈ℕ* 错误，ℕ* 是正整数集（不含 0），0 属于自然数集 ℕ 但不属于 ℕ*。B 选项 √2∈ℚ 错误，√2 是无理数，不能表示为分数，不属于有理数集 ℚ。C 选项 -3∈ℤ 正确，-3 是负整数，属于整数集 ℤ。D 选项 π∈ℚ 错误，π 是无理数，不属于有理数集。记忆：ℕ*⊂ℕ⊂ℤ⊂ℚ⊂ℝ。',
  },
  {
    id: 'sq12',
    question: '已知集合 A = {1, a, b}，且',
    questionLatex:
      'A = \\{1, a, b\\}\\;(a \\neq b),\\; a^2 \\in A,\\; b^2 \\in A,\\; \\text{则 } a + b =',
    options: [
      { label: 'A', value: '0' },
      { label: 'B', value: '-1' },
      { label: 'C', value: '1' },
      { label: 'D', value: '-2' },
    ],
    correctAnswer: '-1',
    explanation: '答案：B。这是互异性经典题。A={1,a,b}，已知 a²∈A 且 b²∈A。第一步：a² 只能等于 1、a、b 中的某一个。如果 a²=a，则 a=0 或 a=1，但 a≠1（互异性，已有 1），所以 a=0，但那 a²=0=a，还是自己，没产生新信息。试 a²=1，则 a=±1，又 a≠1，所以 a=-1。第二步：此时 A={1,-1,b}，b²∈A。如果 b²=b，则 b=0（b≠1，互异性）。检验：A={1,-1,0}，0²=0∈A✓，互异性满足✓。所以 a+b=-1+0=-1。',
    explanationLatex:
      'a^2 \\in A,\\; a \\neq 1 \\text{（互异性）} \\\\[4pt] a^2=1 \\Rightarrow a=-1 \\\\[4pt] A=\\{1,-1,b\\},\\; b^2=b \\Rightarrow b=0 \\\\[4pt] a+b = -1+0 = -1',
  },
  {
    id: 'sq13',
    question: '已知',
    questionLatex:
      'A = \\{x \\mid x^2 - 2x - 3 \\leq 0\\},\\; B = \\{x \\mid x \\geq a\\},\\; A \\cap B \\neq \\varnothing,\\; \\text{则 a 的范围是}',
    options: [
      { label: 'A', value: 'a \\leq 3', isLatex: true },
      { label: 'B', value: 'a < 3', isLatex: true },
      { label: 'C', value: 'a \\geq -1', isLatex: true },
      { label: 'D', value: 'a > -1', isLatex: true },
    ],
    correctAnswer: 'a \\leq 3',
    explanation: '答案：A。第一步：解 A 的不等式 x²-2x-3≤0，因式分解 (x-3)(x+1)≤0，得 A=[-1,3]。第二步：B=[a,+∞)，要求 A∩B≠∅，即两个区间必须有重叠。在数轴上想：A 占据 [-1,3]，B 从 a 开始向右无限延伸。只要 B 的左端点 a 不超过 A 的右端点 3，两者就有重叠。当 a=3 时 B=[3,+∞)，和 A=[−1,3] 有公共点 3，A∩B={3}≠∅✓。当 a>3 时 B 在 A 右边，完全没有重叠。所以 a≤3。',
    explanationLatex:
      'A: (x-3)(x+1) \\leq 0 \\Rightarrow A=[-1,3] \\\\[4pt] B=[a,+\\infty),\\; A \\cap B \\neq \\varnothing \\\\[4pt] \\Leftrightarrow a \\leq 3',
  },
  {
    id: 'sq14',
    question: '',
    questionLatex:
      'A = \\{x \\mid -2 < x < 4\\},\\; B = \\{x \\mid x < a\\},\\; A \\subseteq B,\\; \\text{则 a 的范围是}',
    options: [
      { label: 'A', value: 'a \\geq 4', isLatex: true },
      { label: 'B', value: 'a > 4', isLatex: true },
      { label: 'C', value: 'a \\geq -2', isLatex: true },
      { label: 'D', value: 'a > -2', isLatex: true },
    ],
    correctAnswer: 'a \\geq 4',
    explanation: '答案：A。A=(-2,4)，B=(-∞,a)。A⊆B 意味着 A 完全在 B 里面，B 必须把 A 全部包住。在数轴上：A 从 -2（不含）到 4（不含），B 从负无穷到 a（不含）。B 左边是负无穷，肯定能包住 A 的左端。关键看右端：A 最右达到接近 4 的位置（但不含 4），B 的右端是 a（不含）。要保证 A 中所有元素都 < a，即 a 至少取 4。a=4 时 B=(-∞,4)，A=(-2,4)⊆(-∞,4)✓；a=3 时 B=(-∞,3)，但 A 中有 3.5 不在 B 中✗。所以 a≥4。',
    explanationLatex:
      'A=(-2,4),\\; B=(-\\infty,a) \\\\[4pt] A \\subseteq B \\Leftrightarrow a \\geq 4 \\\\[4pt] \\text{验证：}a=4\\text{ 时 }(-2,4) \\subseteq (-\\infty,4)\\;\\checkmark',
    explanationDiagram: 'subset-number-line',
  },
  {
    id: 'sq15',
    question: '',
    questionLatex:
      'U = \\mathbb{R},\\; A = \\{x \\mid x \\leq 1\\},\\; B = \\{x \\mid x > -2\\},\\; \\complement_U(A \\cup B) =',
    options: [
      { label: 'A', value: '\\varnothing', isLatex: true },
      { label: 'B', value: '\\{x \\mid x > 1\\}', isLatex: true },
      { label: 'C', value: '\\{x \\mid -2 < x \\leq 1\\}', isLatex: true },
      { label: 'D', value: '\\{x \\mid x \\leq -2\\}', isLatex: true },
    ],
    correctAnswer: '\\varnothing',
    explanation: '答案：A。A=(-∞,1]，B=(-2,+∞)。第一步：求 A∪B。A 从负无穷到 1（含），B 从 -2（不含）到正无穷。两个区间合起来，A 覆盖了左边无穷到 1，B 覆盖了 -2 到右边无穷，合起来已经把整个数轴都覆盖了，所以 A∪B = ℝ。第二步：∁ᵤ(A∪B) = ∁ᵤℝ = ∅（全集的补集是空集）。技巧：当两个区间的并集已经覆盖整个实数轴时，补集就是空集。',
    explanationLatex:
      'A=(-\\infty,1],\\; B=(-2,+\\infty) \\\\[4pt] A \\cup B = \\mathbb{R}\\text{（已覆盖整个数轴）} \\\\[4pt] \\complement_U(A \\cup B) = \\complement_U \\mathbb{R} = \\varnothing',
  },
  {
    id: 'sq16',
    question: '某班 50 人，参加数学兴趣小组 30 人，参加物理兴趣小组 25 人，两个都参加的有 15 人，则两个都没参加的人数为',
    options: [
      { label: 'A', value: '5' },
      { label: 'B', value: '10' },
      { label: 'C', value: '15' },
      { label: 'D', value: '20' },
    ],
    correctAnswer: '10',
    explanation: '答案：B。用容斥原理。设 A=参加数学的人，B=参加物理的人。|A|=30，|B|=25，|A∩B|=15（两个都参加的）。第一步：求「至少参加了一个」的人数，用容斥原理 |A∪B| = |A|+|B|-|A∩B| = 30+25-15 = 40 人。为什么要减去 15？因为两个都参加的 15 人在 A 中被算了一次、在 B 中又被算了一次，多算了一次，要减掉。第二步：都没参加的 = 总人数 - 至少参加一个的 = 50-40 = 10 人。',
    explanationLatex:
      '|A \\cup B| = |A|+|B|-|A \\cap B| = 30+25-15 = 40 \\\\[4pt] \\text{都没参加} = 50 - 40 = 10',
  },
  {
    id: 'sq17',
    question: '已知',
    questionLatex:
      'A = \\{x \\mid 1 \\leq x \\leq 3\\},\\; B = \\{x \\mid x > a\\},\\; A \\cap B = \\varnothing,\\; \\text{则 a 的范围是}',
    options: [
      { label: 'A', value: 'a \\geq 3', isLatex: true },
      { label: 'B', value: 'a > 3', isLatex: true },
      { label: 'C', value: 'a \\geq 1', isLatex: true },
      { label: 'D', value: 'a < 1', isLatex: true },
    ],
    correctAnswer: 'a \\geq 3',
    explanation: '答案：A。A=[1,3]，B=(a,+∞)。A∩B=∅ 意味着数轴上两个区间完全分开，没有任何重叠。B 在数轴上从 a 开始向右无限延伸（不含 a），要和 A=[1,3] 完全分开，B 的左端必须在 A 的右端或更右。当 a=3 时，B=(3,+∞)，和 A=[1,3] 刚好不重叠（A 最大到 3 含，B 从 3 不含开始）✓。当 a=2 时，B=(2,+∞)，A 中 2.5∈B，有交集✗。所以 a≥3。',
    explanationLatex:
      'A=[1,3],\\; B=(a,+\\infty) \\\\[4pt] A \\cap B = \\varnothing \\Leftrightarrow a \\geq 3 \\\\[4pt] \\text{验证：}a=3\\text{ 时 }B=(3,+\\infty),\\; A \\cap B=\\varnothing\\;\\checkmark',
  },
  {
    id: 'sq18',
    question: '',
    questionLatex:
      '\\text{用区间表示 } \\{x \\mid -3 < x \\leq 5\\} =',
    options: [
      { label: 'A', value: '[-3, 5]', isLatex: false },
      { label: 'B', value: '(-3, 5]', isLatex: false },
      { label: 'C', value: '(-3, 5)', isLatex: false },
      { label: 'D', value: '[-3, 5)', isLatex: false },
    ],
    correctAnswer: '(-3, 5]',
    explanation: '答案：B。区间表示法规则：< 或 > 用小括号 ( )（不含端点），≤ 或 ≥ 用中括号 [ ]（含端点）。题目中 -3 < x ≤ 5：左端 -3 用的是 <（不含），所以用小括号 (；右端 5 用的是 ≤（含），所以用中括号 ]。组合起来就是 (-3, 5]。记忆口诀：「小于小括号，小于等于中括号」。',
    explanationLatex:
      '-3 < x \\leq 5 \\\\[4pt] -3\\text{ 不含} \\Rightarrow ( \\quad 5\\text{ 含} \\Rightarrow ] \\\\[4pt] \\therefore (-3, 5]',
  },
  {
    id: 'sq19',
    question: '',
    questionLatex:
      '\\text{集合 } \\{a, b, c\\} \\text{ 的非空真子集共有几个？}',
    options: [
      { label: 'A', value: '5' },
      { label: 'B', value: '6' },
      { label: 'C', value: '7' },
      { label: 'D', value: '8' },
    ],
    correctAnswer: '6',
    explanation: '答案：B。公式：n 个元素的集合，子集有 2ⁿ 个，真子集 = 2ⁿ-1，非空子集 = 2ⁿ-1，非空真子集 = 2ⁿ-2。题目问「非空真子集」，就是去掉空集和集合本身。A={a,b,c} 有 3 个元素，子集共 2³=8 个，去掉空集∅和自身 {a,b,c}，剩下 8-2=6 个。它们是：{a}, {b}, {c}, {a,b}, {a,c}, {b,c}。',
    explanationLatex:
      '\\text{非空真子集} = 2^n - 2 = 2^3 - 2 = 6',
  },
  {
    id: 'sq20',
    question: '下列集合中，表示的是点的集合（而不是数的集合）的是',
    options: [
      { label: 'A', value: '\\{x \\mid x^2 - 1 = 0\\}', isLatex: true },
      { label: 'B', value: '\\{x \\mid x > 2\\}', isLatex: true },
      { label: 'C', value: '\\{(x,y) \\mid y = 2x + 1\\}', isLatex: true },
      { label: 'D', value: '\\{x \\mid x \\in \\mathbb{Z}\\}', isLatex: true },
    ],
    correctAnswer: '\\{(x,y) \\mid y = 2x + 1\\}',
    explanation: '答案：C。关键看描述法中竖线前面的「代表元素」是什么。A 选项 {x | x²-1=0} 竖线前是 x，元素是数，是数集。B 选项 {x | x>2} 同理，是数集。C 选项 {(x,y) | y=2x+1} 竖线前是 (x,y)，元素是坐标点，是点集。D 选项 {x | x∈ℤ} 竖线前是 x，是数集。这是高考常考陷阱：看清竖线前是 x 还是 (x,y)，决定了集合是数集还是点集！',
    explanationLatex:
      '\\{(x,y) \\mid \\ldots\\} \\text{ → 点集（元素是坐标点）} \\\\[4pt] \\{x \\mid \\ldots\\} \\text{ → 数集（元素是数）}',
  },
  {
    id: 'sq21',
    question: '已知集合',
    questionLatex:
      'A = \\{1,\\; -a,\\; \\tfrac{b}{a}\\},\\; B = \\{0,\\; a^2,\\; b-a\\},\\; A = B,\\; \\text{则 } a^{2025} + b^{2025} =',
    options: [
      { label: 'A', value: '0' },
      { label: 'B', value: '1' },
      { label: 'C', value: '-1' },
      { label: 'D', value: '2' },
    ],
    correctAnswer: '1',
    explanation: '答案：B。这是集合相等的经典难题。A={1,-a,b/a}，B={0,a²,b-a}，A=B 表示两个集合元素完全相同。第一步：0∈B 且 A=B，所以 0∈A。A 的元素是 1、-a、b/a，0 不等于 1，不等于 -a（否则 a=0，但 b/a 无意义），所以 b/a=0，即 b=0。第二步：b=0 代入，A={1,-a,0}，B={0,a²,-a}。对应元素，a² 必须等于 A 中的某个元素。若 a²=1，则 a=±1。a=1 时 A={1,-1,0}，B={0,1,-1}，A=B✓。a=-1 时 A={1,1,0}，有重复元素，违反互异性✗。所以 a=1，b=0，a²⁰²⁵+b²⁰²⁵ = 1+0 = 1。',
    explanationLatex:
      '0 \\in B,\\; A=B \\Rightarrow 0 \\in A \\Rightarrow \\tfrac{b}{a}=0 \\Rightarrow b=0 \\\\[4pt] A=\\{1,-a,0\\},\\; B=\\{0,a^2,-a\\} \\\\[4pt] a^2=1 \\Rightarrow a=1\\;(a=-1\\text{ 时 }A\\text{ 有重复元素}\\times) \\\\[4pt] 1^{2025}+0^{2025}=1',
  },
  {
    id: 'sq22',
    question: '已知集合',
    questionLatex:
      'M = \\{x \\mid (x-a)(x^2 - ax + a - 1) = 0\\},\\; \\text{各元素之和为 3，则 a 的所有可能值为}',
    options: [
      { label: 'A', value: '\\dfrac{3}{2}', isLatex: true },
      { label: 'B', value: '2', isLatex: false },
      { label: 'C', value: '\\dfrac{3}{2} \\text{ 或 } 2', isLatex: true },
      { label: 'D', value: '1 \\text{ 或 } \\dfrac{3}{2}', isLatex: true },
    ],
    correctAnswer: '\\dfrac{3}{2} \\text{ 或 } 2',
    explanation: '答案：C。这是集合中互异性的综合题。第一步：因式分解 x²-ax+a-1 = (x-1)(x-(a-1))，所以原方程变为 (x-a)(x-1)(x-(a-1))=0，三个根为 x=a、x=1、x=a-1。第二步：分情况讨论。情况一：三根互不相同，M={a,1,a-1}，元素之和 = a+1+(a-1) = 2a = 3，得 a=3/2。检验：M={3/2, 1, 1/2}，三个元素互不相同✓，和=3✓。情况二：有根重复。若 a=1，则三根为 1,1,0，互异性后 M={0,1}，和=1≠3✗。若 a=a-1，则 0=-1 矛盾。若 1=a-1，则 a=2，三根为 2,1,1，互异性后 M={1,2}，和=3✓。所以 a=3/2 或 a=2。',
    explanationLatex:
      'x^2-ax+a-1=(x-1)(x-a+1) \\\\[4pt] \\text{三根：}a,\\;1,\\;a-1 \\\\[4pt] \\text{情况1：三根不同，}2a=3 \\Rightarrow a=\\tfrac{3}{2}\\;\\checkmark \\\\[4pt] \\text{情况2：}a=2\\text{ 时 }M=\\{1,2\\},\\text{和}=3\\;\\checkmark',
  },
];
