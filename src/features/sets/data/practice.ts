import type { QuizQuestionData } from '@/types';

// ── 第1节：解方程 ──
export const setsPrereqPractice1: QuizQuestionData[] = [
  {
    id: 'sp1-1',
    type: 'blank',
    question: '',
    questionLatex: 'x^2 - x - 6 = 0 \\text{，} x = \\text{?}',
    correctAnswer: '3或-2',
    acceptableAnswers: ['x=3或x=-2', '3 或 -2', '-2或3', '-2 或 3', 'x=3,x=-2', '3,-2', '-2,3'],
    explanation: '找两个数，乘积为 -6，加和为 -1。那就是 -3 和 2（因为 -3×2=-6，-3+2=-1）。所以 (x-3)(x+2)=0，x=3 或 x=-2。',
    explanationLatex: 'x^2-x-6 = (x-3)(x+2)=0 \\Rightarrow x=3 \\text{ 或 } x=-2',
  },
  {
    id: 'sp1-2',
    type: 'blank',
    question: '',
    questionLatex: 'x^2 + 2x + 1 = 0 \\text{，} x = \\text{?}',
    correctAnswer: '-1',
    acceptableAnswers: ['x=-1'],
    explanation: '认出完全平方：x²+2x+1 = (x+1)²。令 (x+1)²=0，开根得 x+1=0，x=-1。只有一个根（重根）。',
    explanationLatex: 'x^2+2x+1 = (x+1)^2 = 0 \\Rightarrow x+1=0 \\Rightarrow x=-1',
  },
  {
    id: 'sp1-3',
    type: 'blank',
    question: '',
    questionLatex: 'x^2 - 9 = 0 \\text{，} x = \\text{?}',
    correctAnswer: '±3',
    acceptableAnswers: ['3或-3', '-3或3', '3,-3', '-3,3', 'x=±3', '+ 3 或 -3'],
    explanation: 'x²-9 是平方差：a²-b²=(a+b)(a-b)。这里 a=x, b=3，所以 (x+3)(x-3)=0，x=3 或 x=-3。',
    explanationLatex: 'x^2-9 = (x+3)(x-3) = 0 \\Rightarrow x=3 \\text{ 或 } x=-3',
  },
];

// ── 第2节：解不等式 ──
export const setsPrereqPractice2: QuizQuestionData[] = [
  {
    id: 'sp2-1',
    type: 'choice',
    question: '',
    questionLatex: 'x^2 - 5x + 6 < 0 \\text{ 的解集是？}',
    options: [
      { label: 'A', value: 'x < 2 或 x > 3', isLatex: false },
      { label: 'B', value: '2 < x < 3', isLatex: false },
      { label: 'C', value: 'x ≤ 2 或 x ≥ 3', isLatex: false },
      { label: 'D', value: '2 ≤ x ≤ 3', isLatex: false },
    ],
    correctAnswer: '2 < x < 3',
    explanation: '先解方程 x²-5x+6=0，因式分解 (x-2)(x-3)=0，根为 x=2, 3。原式是 < 0，“小于取中间”，解集为 2 < x < 3。',
    explanationLatex: '(x-2)(x-3)=0 \\Rightarrow x=2,3 \\quad \\text{“< 0 取中间”} \\Rightarrow 2<x<3',
  },
  {
    id: 'sp2-2',
    type: 'choice',
    question: '',
    questionLatex: 'x^2 - 4 \\geq 0 \\text{ 的解集是？}',
    options: [
      { label: 'A', value: '-2 ≤ x ≤ 2', isLatex: false },
      { label: 'B', value: 'x ≤ -2 或 x ≥ 2', isLatex: false },
      { label: 'C', value: 'x < -2 或 x > 2', isLatex: false },
      { label: 'D', value: '-2 < x < 2', isLatex: false },
    ],
    correctAnswer: 'x ≤ -2 或 x ≥ 2',
    explanation: 'x²-4 = (x+2)(x-2)=0，根为 x=-2, 2。原式是 ≥ 0，“大于取两边”（含等号），解集为 x ≤ -2 或 x ≥ 2。',
    explanationLatex: '(x+2)(x-2)=0 \\Rightarrow x=-2,2 \\quad \\text{“≥ 0 取两边”} \\Rightarrow x \\leq -2 \\text{ 或 } x \\geq 2',
  },
  {
    id: 'sp2-3',
    type: 'choice',
    question: '',
    questionLatex: 'x^2 + 3x - 10 > 0 \\text{ 的解集是？}',
    options: [
      { label: 'A', value: '-5 < x < 2', isLatex: false },
      { label: 'B', value: 'x < -5 或 x > 2', isLatex: false },
      { label: 'C', value: 'x ≤ -5 或 x ≥ 2', isLatex: false },
      { label: 'D', value: '-2 < x < 5', isLatex: false },
    ],
    correctAnswer: 'x < -5 或 x > 2',
    explanation: '先解方程 x²+3x-10=0，找两个数乘积 -10、加和 3，那就是 5 和 -2。因式分解 (x+5)(x-2)=0，根为 x=-5, 2。原式 > 0，“大于取两边”：x < -5 或 x > 2。',
    explanationLatex: '(x+5)(x-2)=0 \\Rightarrow x=-5,2 \\quad \\text{“> 0 取两边”} \\Rightarrow x<-5 \\text{ 或 } x>2',
  },
  {
    id: 'sp2-4',
    type: 'choice',
    question: '',
    questionLatex: 'x^2 - 2x - 8 \\leq 0 \\text{ 的解集是？}',
    options: [
      { label: 'A', value: 'x ≤ -2 或 x ≥ 4', isLatex: false },
      { label: 'B', value: '-2 ≤ x ≤ 4', isLatex: false },
      { label: 'C', value: '-2 < x < 4', isLatex: false },
      { label: 'D', value: 'x < -2 或 x > 4', isLatex: false },
    ],
    correctAnswer: '-2 ≤ x ≤ 4',
    explanation: '先解方程 x²-2x-8=0，找两个数乘积 -8、加和 -2，那就是 -4 和 2。因式分解 (x-4)(x+2)=0，根为 x=-2, 4。原式 ≤ 0，“小于取中间”（含等号）：-2 ≤ x ≤ 4。',
    explanationLatex: '(x-4)(x+2)=0 \\Rightarrow x=-2,4 \\quad \\text{“\\leq 0 取中间”} \\Rightarrow -2 \\leq x \\leq 4',
  },
];

// ── 第3节：数轴表示 ──
export const setsPrereqPractice3: QuizQuestionData[] = [
  {
    id: 'sp3-1',
    type: 'choice',
    question: '',
    questionLatex: 'x \\leq -1 \\text{ 在数轴上，-1 用什么圆？}',
    options: [
      { label: 'A', value: '空心圆 ○（不含端点）' },
      { label: 'B', value: '实心圆 ●（含端点）' },
    ],
    correctAnswer: '实心圆 ●（含端点）',
    explanation: '≤ 表示“小于或等于”，包含等号，所以端点 -1 要取到，用实心圆 ●。记住：有等号用实心，没等号用空心。',
  },
  {
    id: 'sp3-2',
    type: 'choice',
    question: '',
    questionLatex: '1 < x < 4 \\text{ 的两个端点分别用？}',
    options: [
      { label: 'A', value: '1 空心，4 空心' },
      { label: 'B', value: '1 实心，4 实心' },
      { label: 'C', value: '1 空心，4 实心' },
      { label: 'D', value: '1 实心，4 空心' },
    ],
    correctAnswer: '1 空心，4 空心',
    explanation: '1 < x < 4 中，1 和 4 都用 <（不含等号），所以两个端点都不取到，用空心圆 ○。如果是 1 ≤ x < 4 则 1 实心、4 空心。',
  },
];

// ── 第4节：区间记号 ──
export const setsPrereqPractice4: QuizQuestionData[] = [
  {
    id: 'sp4-1',
    type: 'blank',
    question: '',
    questionLatex: '\\{x \\mid -3 < x \\leq 5\\} \\text{ 用区间表示 = ?}',
    correctAnswer: '(-3,5]',
    acceptableAnswers: ['(-3, 5]', '( -3, 5]', '(-3 ,5]'],
    explanation: '-3 用 <（不含）→ 小括号 (；5 用 ≤（包含）→ 方括号 ]。所以写成 (-3, 5]。记住：小括号 = 不含，方括号 = 包含。',
    explanationLatex: '-3 \\text{ 用 } < \\to ( \\quad 5 \\text{ 用 } \\leq \\to ] \\quad \\Rightarrow (-3, 5]',
  },
  {
    id: 'sp4-2',
    type: 'blank',
    question: '',
    questionLatex: '\\{x \\mid x \\geq 3\\} \\text{ 用区间表示 = ?}',
    correctAnswer: '[3,+∞)',
    acceptableAnswers: ['[3, +∞)', '[3,+∞)', '[3, +infinity)', '[3,∞)', '[3, ∞)'],
    explanation: 'x ≥ 3 表示从 3 开始向右延伸到无穷大。≥ 包含 3 → 方括号 [；+∞ 永远取不到 → 小括号 )。所以 [3, +∞)。',
    explanationLatex: 'x \\geq 3 \\Rightarrow [3, +\\infty) \\quad (\\infty \\text{ 永远用小括号})',
  },
  {
    id: 'sp4-3',
    type: 'blank',
    question: '',
    questionLatex: 'x < 2 \\text{ 或 } x \\geq 5 \\text{ 用区间表示 = ?}',
    correctAnswer: '(-∞,2)∪[5,+∞)',
    acceptableAnswers: ['(-∞, 2) ∪ [5, +∞)', '(-∞,2)U[5,+∞)', '(-∞, 2) U [5, +∞)', '(-inf,2)∪[5,+inf)', '(-∞,2)∪[5,∞)'],
    explanation: '两段不相连的区间用并集符号 ∪ 连接。x<2 → 小括号(-∞, 2)；x≥5 → 方括号[5, +∞)。合并：(-∞, 2) ∪ [5, +∞)。∪ 读作“并”，表示“或”。',
    explanationLatex: 'x<2 \\to (-\\infty,2), \\quad x \\geq 5 \\to [5,+\\infty) \\quad \\Rightarrow (-\\infty,2) \\cup [5,+\\infty)',
  },
];

// ── SetsPage 即时练习 ──

// 第1节：集合基础
export const setsPractice1: QuizQuestionData[] = [
  {
    id: 'stp1-1',
    type: 'choice',
    question: '',
    questionLatex: '\\text{下列哪个是集合？}',
    options: [
      { label: 'A', value: '全班比较高的同学' },
      { label: 'B', value: '大于5的自然数' },
      { label: 'C', value: '好看的花' },
      { label: 'D', value: '比较大的数' },
    ],
    correctAnswer: '大于5的自然数',
    explanation: '集合要求元素确定。"比较高""好看""比较大"都没有明确标准，不确定。',
  },
  {
    id: 'stp1-2',
    type: 'choice',
    question: '',
    questionLatex: '\\text{集合 } \\{1, 2, 3\\} \\text{ 和 } \\{3, 1, 2\\} \\text{ 是同一个集合吗？}',
    options: [
      { label: 'A', value: '是' },
      { label: 'B', value: '不是' },
    ],
    correctAnswer: '是',
    explanation: '集合具有无序性：元素排列顺序不影响集合本身，{1,2,3}={3,1,2}={2,3,1}。',
  },
  {
    id: 'stp1-3',
    type: 'choice',
    question: '',
    questionLatex: '\\text{集合 } \\{1, 1, 2\\} \\text{ 的写法正确吗？}',
    options: [
      { label: 'A', value: '正确' },
      { label: 'B', value: '不正确，应写成 {1, 2}' },
    ],
    correctAnswer: '不正确，应写成 {1, 2}',
    explanation: '集合具有互异性：元素不能重复。1 出现了两次，违反互异性，正确写法是 {1, 2}。',
  },
  {
    id: 'stp1-4',
    type: 'choice',
    question: '',
    questionLatex: '\\text{若集合 } A = \\{a, b, c\\}\\text{，则 a、b、c 满足什么条件？}',
    options: [
      { label: 'A', value: 'a、b、c 可以相等' },
      { label: 'B', value: 'a、b、c 必须互不相等' },
      { label: 'C', value: 'a < b < c' },
      { label: 'D', value: 'a、b、c 必须是正数' },
    ],
    correctAnswer: 'a、b、c 必须互不相等',
    explanation: '集合的互异性要求：a≠b，a≠c，b≠c。这是高考常考陷阱！题目给集合 {a, a²+a, -1} 就要用互异性列不等式。',
  },
  {
    id: 'stp1-5',
    type: 'choice',
    question: '',
    questionLatex: '\\text{"接近 0 的数"能构成集合吗？}',
    options: [
      { label: 'A', value: '能' },
      { label: 'B', value: '不能' },
    ],
    correctAnswer: '不能',
    explanation: '"接近"没有明确标准，0.1 接近吗？0.001 呢？不确定→违反确定性→不能构成集合。',
  },
];

// 第1.5节：元素与集合的关系
export const setsPractice0: QuizQuestionData[] = [
  {
    id: 'stp0-1',
    type: 'choice',
    question: '',
    questionLatex: 'A = \\{2, 4, 6, 8\\}\\text{，}8 \\;\\rule{2em}{0.4pt}\\; A',
    options: [
      { label: 'A', value: '∈' },
      { label: 'B', value: '∉' },
    ],
    correctAnswer: '∈',
    explanation: '8 是集合 A 的元素，所以 8 ∈ A。',
  },
  {
    id: 'stp0-2',
    type: 'choice',
    question: '',
    questionLatex: 'B = \\{x \\mid x > 5\\}\\text{，}3 \\;\\rule{2em}{0.4pt}\\; B',
    options: [
      { label: 'A', value: '∈' },
      { label: 'B', value: '∉' },
    ],
    correctAnswer: '∉',
    explanation: '3 不大于 5，不满足条件，所以 3 ∉ B。',
  },
];

// 第2节：集合的表示方法
export const setsPractice2: QuizQuestionData[] = [
  {
    id: 'stp2-1',
    type: 'blank',
    question: '用列举法表示"不超过 5 的正整数"',
    correctAnswer: '{1,2,3,4,5}',
    acceptableAnswers: ['{1, 2, 3, 4, 5}', '{1,2,3,4,5}'],
    explanation: '不超过 5 的正整数就是 1, 2, 3, 4, 5。',
  },
  {
    id: 'stp2-2',
    type: 'blank',
    question: '',
    questionLatex: '\\{x \\mid x^2 = 1\\} \\text{ 用列举法 = ?}',
    correctAnswer: '{-1,1}',
    acceptableAnswers: ['{-1, 1}', '{1, -1}', '{1,-1}'],
    explanation: 'x² = 1 的解是 x = ±1。',
  },
  {
    id: 'stp2-3',
    type: 'blank',
    question: '',
    questionLatex: '\\{x \\mid -3 \\leq x < 2\\} \\text{ 写成区间 = ?}',
    correctAnswer: '[-3,2)',
    acceptableAnswers: ['[-3, 2)', '[-3 ,2)'],
    explanation: '≤ 用方括号，< 用小括号。',
  },
  {
    id: 'stp2-4',
    type: 'blank',
    question: '',
    questionLatex: '\\{x \\mid x > 5\\} \\text{ 写成区间 = ?}',
    correctAnswer: '(5,+∞)',
    acceptableAnswers: ['(5, +∞)', '(5,+infinity)', '(5,∞)'],
    explanation: '> 不含端点用小括号，∞ 永远用小括号。',
  },
  {
    id: 'stp2-5',
    type: 'choice',
    question: '',
    questionLatex: '\\{x \\mid x^2 - 4 = 0\\} \\text{ 用列举法表示为？}',
    options: [
      { label: 'A', value: '{-2, 2}' },
      { label: 'B', value: '{2}' },
      { label: 'C', value: '{4}' },
      { label: 'D', value: '[-2, 2]' },
    ],
    correctAnswer: '{-2, 2}',
    explanation: 'x²-4=0 → (x+2)(x-2)=0 → x=-2 或 x=2。注意 D 选项是区间（包含所有 -2 到 2 的数），不对！',
  },
  {
    id: 'stp2-6',
    type: 'blank',
    question: '',
    questionLatex: '\\{x \\mid x \\leq -1\\} \\text{ 写成区间 = ?}',
    correctAnswer: '(-∞,-1]',
    acceptableAnswers: ['(-∞, -1]', '(-infinity,-1]', '(-∞,-1]'],
    explanation: '≤ 含端点用方括号 ]，-∞ 永远用小括号 (。',
  },
  {
    id: 'stp2-7',
    type: 'choice',
    question: '',
    questionLatex: '\\text{区间 } [2, 5) \\text{ 表示的是？}',
    options: [
      { label: 'A', value: '2 ≤ x < 5' },
      { label: 'B', value: '2 < x ≤ 5' },
      { label: 'C', value: '2 < x < 5' },
      { label: 'D', value: '2 ≤ x ≤ 5' },
    ],
    correctAnswer: '2 ≤ x < 5',
    explanation: '[ 表示含左端点（≤），) 表示不含右端点（<）。所以 [2,5) 就是 2 ≤ x < 5。',
  },
  {
    id: 'stp2-8',
    type: 'blank',
    question: '用描述法表示"所有偶数"的集合',
    correctAnswer: '{x|x=2k,k∈Z}',
    acceptableAnswers: ['{x|x=2k,k∈Z}', '{x | x=2k, k∈Z}', '{x|x=2n,n∈Z}', '{x | x = 2k, k ∈ Z}'],
    explanation: '偶数就是 2 的倍数，写成 x=2k，其中 k 是任意整数。',
  },
];

// 第3节：常用数集
export const setsPractice3: QuizQuestionData[] = [
  {
    id: 'stp3-1',
    type: 'choice',
    question: '',
    questionLatex: '-3 \\;\\rule{2em}{0.4pt}\\; \\mathbb{Z}',
    options: [
      { label: 'A', value: '∈' },
      { label: 'B', value: '∉' },
    ],
    correctAnswer: '∈',
    explanation: '-3 是整数，属于整数集 ℤ。',
  },
  {
    id: 'stp3-2',
    type: 'choice',
    question: '',
    questionLatex: '\\sqrt{2} \\;\\rule{2em}{0.4pt}\\; \\mathbb{Q}',
    options: [
      { label: 'A', value: '∈' },
      { label: 'B', value: '∉' },
    ],
    correctAnswer: '∉',
    explanation: '√2 是无理数，不属于有理数集 ℚ。',
  },
  {
    id: 'stp3-3',
    type: 'choice',
    question: '',
    questionLatex: '\\pi \\;\\rule{2em}{0.4pt}\\; \\mathbb{R}',
    options: [
      { label: 'A', value: '∈' },
      { label: 'B', value: '∉' },
    ],
    correctAnswer: '∈',
    explanation: 'π 是无理数，但属于实数集 ℝ。',
  },
];

// 第4节：子集关系
export const setsPractice4: QuizQuestionData[] = [
  {
    id: 'stp4-1',
    type: 'choice',
    question: '',
    questionLatex: '\\{1,2\\} \\subseteq \\{1,2,3\\} \\text{ 对吗？}',
    options: [
      { label: 'A', value: '对' },
      { label: 'B', value: '不对' },
    ],
    correctAnswer: '对',
    explanation: '{1,2} 的每个元素都在 {1,2,3} 中，所以是子集。',
  },
  {
    id: 'stp4-2',
    type: 'choice',
    question: '',
    questionLatex: '\\{1,2,3\\} \\subsetneq \\{1,2,3\\} \\text{ 对吗？}',
    options: [
      { label: 'A', value: '对' },
      { label: 'B', value: '不对' },
    ],
    correctAnswer: '不对',
    explanation: '真子集要求不相等，{1,2,3} = {1,2,3}，所以不是真子集。',
  },
  {
    id: 'stp4-3',
    type: 'choice',
    question: '',
    questionLatex: '\\varnothing \\text{ 和 } \\{0\\} \\text{ 一样吗？}',
    options: [
      { label: 'A', value: '一样' },
      { label: 'B', value: '不一样' },
    ],
    correctAnswer: '不一样',
    explanation: '∅ 是空集（0个元素），{0} 含有元素 0（1个元素）。',
  },
  {
    id: 'stp4-4',
    type: 'blank',
    question: '{1, 2} 的子集有几个？',
    correctAnswer: '4',
    explanation: '2² = 4 个子集：∅, {1}, {2}, {1,2}。',
  },
];

// 第5节：集合运算
export const setsPractice5: QuizQuestionData[] = [
  {
    id: 'stp5-1',
    type: 'blank',
    question: '',
    questionLatex: 'A = \\{1,3,5,7\\}\\text{，}B = \\{3,5,8\\}\\text{，}A \\cap B = \\text{?}',
    correctAnswer: '{3,5}',
    acceptableAnswers: ['{3, 5}', '{5,3}', '{5, 3}'],
    explanation: '交集取公共元素：3 和 5。',
  },
  {
    id: 'stp5-2',
    type: 'blank',
    question: '',
    questionLatex: 'U = \\{1,2,3,4,5\\}\\text{，}A = \\{2,4\\}\\text{，}\\complement_U A = \\text{?}',
    correctAnswer: '{1,3,5}',
    acceptableAnswers: ['{1, 3, 5}', '{3,1,5}', '{5,3,1}'],
    explanation: '补集 = 全集中去掉 A 的元素：{1, 3, 5}。',
  },
  {
    id: 'stp5-3',
    type: 'blank',
    question: '',
    questionLatex: 'A = \\{x \\mid -1 \\leq x < 3\\}\\text{，}B = \\{x \\mid 2 < x \\leq 5\\}\\text{，}A \\cap B = \\text{?}',
    correctAnswer: '(2,3)',
    acceptableAnswers: ['(2, 3)'],
    explanation: '取两个区间的重叠部分：2 < x < 3，即 (2, 3)。',
  },
];
