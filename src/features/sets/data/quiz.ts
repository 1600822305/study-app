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
    explanation: 'B 包含 1 到 6 之间的数，A 中 2、3、5 都在此范围内，7 > 6 不在。',
    explanationLatex:
      '2,3,5 \\in (1,6) \\;\\checkmark,\\quad 7 \\notin (1,6) \\;\\times \\quad \\Rightarrow A \\cap B = \\{2,3,5\\}',
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
    explanation: '先解 B 的不等式，再画数轴取交集。',
    explanationLatex:
      'x^2-2x-3 \\leq 0 \\Rightarrow (x-3)(x+1) \\leq 0 \\Rightarrow B=[-1,3] \\quad A \\cap B = [-1,3]',
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
    explanation: '先解 A 的不等式，再取补集（端点开闭互换）。',
    explanationLatex:
      'x^2-x-2 \\geq 0 \\Rightarrow (x-2)(x+1) \\geq 0 \\Rightarrow A=(-\\infty,-1] \\cup [2,+\\infty) \\quad \\complement_U A = (-1,2)',
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
    explanation: '先求补集，再与 A 取交集。',
    explanationLatex:
      '\\complement_U B = (-\\infty,0) \\cup (3,+\\infty) \\quad A \\cap \\complement_U B = (-\\infty,0)',
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
    explanation: '分别解方程，找公共元素。',
    explanationLatex:
      'A: (x-2)(x-3)=0 \\Rightarrow \\{2,3\\} \\quad B: (x-1)(x-2)=0 \\Rightarrow \\{1,2\\} \\quad A \\cap B = \\{2\\}',
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
    explanation: '先求补集，再求并集。',
    explanationLatex:
      '\\complement_U A = \\{2,4\\} \\quad (\\complement_U A) \\cup B = \\{2,4\\} \\cup \\{2,4\\} = \\{2,4\\}',
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
    explanation: 'n 个元素的集合有 2ⁿ 个子集。',
    explanationLatex: '2^3 = 8',
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
    explanation: '先解 A 的不等式，再与 B 取交集。',
    explanationLatex:
      'A: (x-1)(x-3) \\leq 0 \\Rightarrow [1,3] \\quad A \\cap B = (2,3]',
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
    explanation: '空集 ∅ 是任何集合的子集，这是集合论的基本公理。',
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
    explanation: '并集取所有元素的范围。',
    explanationLatex:
      'A \\cup B = [-1,3) \\cup (2,5] = [-1,5]',
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
    explanation: '-3 是整数，属于整数集 Z。0 不属于正整数集 N*；√2 和 π 都是无理数，不属于有理数集 Q。',
  },
  {
    id: 'sq12',
    question: '已知集合 A = {1, a, b}，且',
    questionLatex:
      'A = \\{1, a, b\\},\\; a^2 \\in A,\\; b^2 \\in A,\\; \\text{则 } a + b =',
    options: [
      { label: 'A', value: '0' },
      { label: 'B', value: '-1' },
      { label: 'C', value: '1' },
      { label: 'D', value: '-2' },
    ],
    correctAnswer: '-1',
    explanation: '由互异性：a²∈A 且 a≠1（否则重复），所以 a=-1，a²=1∈A ✓。b²∈A，b²=b → b=0（b≠1 互异），0²=0∈A ✓。a+b=-1+0=-1。',
    explanationLatex:
      'a \\neq 1 \\text{（互异性）},\\; a^2=1 \\Rightarrow a=-1 \\quad b^2 \\in \\{1,-1,b\\},\\; b^2=b \\Rightarrow b=0 \\quad a+b=-1',
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
    explanation: 'A=[-1,3]，B=[a,+∞)，要有交集只需 a ≤ A 的右端点 3。',
    explanationLatex:
      'A=[-1,3],\\; B=[a,+\\infty) \\quad A \\cap B \\neq \\varnothing \\Leftrightarrow a \\leq 3',
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
    explanation: 'A⊆B = A 要完全在 B 里面。A 最大到 4（不含），B = (-∞, a) 要把 A 全包住，a 至少取 4。比如 a=3 时 B 太小包不住，a=4 或 a=100 都行。',
    explanationLatex:
      'A=(-2,4),\\; B=(-\\infty,a) \\quad A \\subseteq B \\Leftrightarrow a \\geq 4',
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
    explanation: 'A∪B = (-∞,1] ∪ (-2,+∞) = ℝ（全覆盖了），所以补集 = ∅。',
    explanationLatex:
      'A \\cup B = (-\\infty,1] \\cup (-2,+\\infty) = \\mathbb{R} \\quad \\complement_U(A \\cup B) = \\varnothing',
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
    explanation: '容斥原理：|A∪B| = |A| + |B| - |A∩B| = 30 + 25 - 15 = 40，都没参加 = 50 - 40 = 10。',
    explanationLatex:
      '|A \\cup B| = 30 + 25 - 15 = 40 \\quad \\text{都没参加} = 50 - 40 = 10',
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
    explanation: 'A∩B=∅ 意味着数轴上完全分开。A=[1,3]，B=(a,+∞)。B 的左端 a 必须 ≥ A 的右端 3，因为 B 不含 a，a=3 时 B=(3,+∞) 和 A=[1,3] 刚好不重叠。',
    explanationLatex:
      'A=[1,3],\\; B=(a,+\\infty) \\quad A \\cap B = \\varnothing \\Leftrightarrow a \\geq 3',
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
    explanation: '-3 不含用小括号 (，5 含用中括号 ]。',
    explanationLatex:
      '-3 \\text{ 不含} \\Rightarrow ( \\quad 5 \\text{ 含} \\Rightarrow ] \\quad \\Rightarrow (-3, 5]',
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
    explanation: '3 个元素 → 子集 2³=8 个，去掉空集和自身 → 非空真子集 = 8-2 = 6 个。',
    explanationLatex:
      '2^3 - 2 = 8 - 2 = 6',
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
    explanation: '竖线前面是 (x,y) 时，集合里的元素是坐标点，不是数。其他三个竖线前面都是 x，是数的集合。',
    explanationLatex:
      '\\{(x,y) \\mid \\ldots\\} \\text{ 是点集}，\\{x \\mid \\ldots\\} \\text{ 是数集，两者完全不同！}',
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
    explanation: '0∈B 且 A=B → 0∈A → b/a=0 → b=0。代入后 A={1,-a,0}，B={0,a²,-a}，对应得 a²=1。a=1 满足互异性，a=-1 导致 A 有重复元素。故 a=1, b=0，答案=1。',
    explanationLatex:
      'b=0,\\; a^2=1 \\Rightarrow a=1\\;(a=-1\\text{ 时 }A\\text{ 有重复}) \\quad 1^{2025}+0^{2025}=1',
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
    explanation: '先因式分解：x²-ax+a-1 = (x-1)(x-a+1)，三个根为 a, 1, a-1。当三根不同时 2a=3 → a=3/2；当 a=2 时 1 和 a-1 重合，M={2,1}，和=3 也满足。',
    explanationLatex:
      '(x-a)(x-1)(x-a+1)=0 \\quad \\text{根不同: } 2a=3 \\Rightarrow a=\\tfrac{3}{2} \\quad a=2\\text{ 时 }M=\\{2,1\\},\\text{和}=3\\;\\checkmark',
  },
];
