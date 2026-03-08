import type { QuizQuestionData } from '@/types';

// ── 第1节：虚数单位 i ──
export const complexPractice1: QuizQuestionData[] = [
  {
    id: 'cp1-1',
    type: 'blank',
    question: '',
    questionLatex: 'i^2 = \\text{?}',
    correctAnswer: '-1',
    explanation: '虚数单位 i 的定义就是 i² = -1。这是整个复数体系的根基，必须记住。',
    explanationLatex: 'i^2 = -1 \\quad \\text{← 核心定义，必背}',
  },
  {
    id: 'cp1-2',
    type: 'choice',
    question: '',
    questionLatex: 'x^2 = -1 \\text{ 在实数范围内有解吗？}',
    options: [
      { label: 'A', value: '有' },
      { label: 'B', value: '没有' },
    ],
    correctAnswer: '没有',
    explanation: '实数的平方永远 ≥ 0，而 -1 < 0，所以不可能找到一个实数的平方等于 -1。这就是为什么要发明虚数 i 的原因。',
    explanationLatex: 'x \\in \\mathbb{R} \\Rightarrow x^2 \\geq 0 > -1 \\quad \\therefore x^2=-1 \\text{ 无实数解}',
  },
];

// ── 第2节：复数的概念 ──
export const complexPractice2: QuizQuestionData[] = [
  {
    id: 'cp2-1',
    type: 'choice',
    question: '',
    questionLatex: 'z = 5 - 4i \\text{ 的实部和虚部分别是？}',
    options: [
      { label: 'A', value: '实部 5，虚部 4' },
      { label: 'B', value: '实部 5，虚部 -4' },
      { label: 'C', value: '实部 -4，虚部 5' },
      { label: 'D', value: '实部 5，虚部 -4i' },
    ],
    correctAnswer: '实部 5，虚部 -4',
    explanation: 'z = a+bi 中，a=5 是实部，b=-4 是虚部。注意：虚部是 i 前面的系数 -4，不是 -4i！选B不选D就是因为这个。',
    explanationLatex: 'z = 5+(-4)i \\Rightarrow \\text{实部 } a=5,\\; \\text{虚部 } b=-4 \\quad (\\text{不是 } -4i\\text{！})',
  },
  {
    id: 'cp2-2',
    type: 'choice',
    question: '',
    questionLatex: 'z = 2i \\text{ 是什么数？}',
    options: [
      { label: 'A', value: '实数' },
      { label: 'B', value: '纯虚数' },
      { label: 'C', value: '零' },
      { label: 'D', value: '不是复数' },
    ],
    correctAnswer: '纯虚数',
    explanation: 'z=2i 就是 z=0+2i，实部a=0，虚部b=2≠0。纯虚数的定义：实部为0且虚部不为0的复数。所以是纯虚数。',
    explanationLatex: 'z = 0 + 2i \\Rightarrow a=0,\\; b=2 \\neq 0 \\quad \\therefore \\text{纯虚数}',
  },
];

// ── 第3节：复数相等 ──
export const complexPractice3: QuizQuestionData[] = [
  {
    id: 'cp3-1',
    type: 'blank',
    question: '',
    questionLatex: '\\text{已知 } (3x-6) + (2y+4)i = 0 \\text{，求 } x = \\text{?}',
    correctAnswer: '2',
    explanation: '复数=0 意味着实部和虚部都等于0。实部：3x-6=0，解得 x=2。虚部：2y+4=0，解得 y=-2。题目只问 x，所以答案是 2。',
    explanationLatex: '\\text{复数}=0 \\Rightarrow \\begin{cases} \\text{实部: } 3x-6=0 \\Rightarrow x=2 \\\\ \\text{虚部: } 2y+4=0 \\Rightarrow y=-2 \\end{cases}',
  },
  {
    id: 'cp3-2',
    type: 'blank',
    question: '',
    questionLatex: '\\text{已知 } a+bi = 2-3i \\text{，求 } b = \\text{?}',
    correctAnswer: '-3',
    explanation: '两个复数相等，实部对应实部，虚部对应虚部。a+bi = 2+(-3)i，所以 a=2，b=-3。',
    explanationLatex: 'a+bi = 2+(-3)i \\Rightarrow a=2,\\; b=-3',
  },
];

// ── 第4节：复数运算 ──
export const complexPractice4: QuizQuestionData[] = [
  {
    id: 'cp4-1',
    type: 'blank',
    question: '',
    questionLatex: '(3+2i)+(1-5i) = \\text{?}',
    correctAnswer: '4-3i',
    acceptableAnswers: ['4 - 3i', '4- 3i', '4 -3i'],
    explanation: '加法规则：实部加实部，虚部加虚部。实部：3+1=4，虚部：2+(-5)=-3，所以结果是 4-3i。',
    explanationLatex: '(3+2i)+(1-5i) = (3+1)+(2+(-5))i = 4+(-3)i = 4-3i',
  },
  {
    id: 'cp4-2',
    type: 'blank',
    question: '',
    questionLatex: '\\dfrac{1+i}{1-i} = \\text{?}',
    correctAnswer: 'i',
    explanation: '除法三步走：①写出分母的共轭(1+i) ②分子分母同乘(1+i) ③化简。分母变成 (1-i)(1+i)=1+1=2，分子 (1+i)²=1+2i+i²=2i，所以 2i/2=i。',
    explanationLatex: '\\frac{1+i}{1-i} = \\frac{(1+i)(1+i)}{(1-i)(1+i)} = \\frac{(1+i)^2}{1^2+1^2} = \\frac{1+2i+i^2}{2} = \\frac{2i}{2} = i',
  },
  {
    id: 'cp4-3',
    type: 'blank',
    question: '',
    questionLatex: '|3+4i| = \\text{?}',
    correctAnswer: '5',
    explanation: '模的公式：|a+bi|=√(a²+b²)。代入 a=3, b=4：√(9+16)=√25=5。',
    explanationLatex: '|3+4i| = \\sqrt{3^2+4^2} = \\sqrt{9+16} = \\sqrt{25} = 5',
  },
  {
    id: 'cp4-4',
    type: 'blank',
    question: '',
    questionLatex: 'i^{67} = \\text{?}',
    correctAnswer: '-i',
    acceptableAnswers: ['- i'],
    explanation: 'i的幂次每4个一循环：i¹=i, i²=-1, i³=-i, i⁴=1。用指数÷4看余数：67÷4=16余3，余数是3，查表得 i³=-i。',
    explanationLatex: '67 \\div 4 = 16 \\cdots\\cdots 3 \\quad \\Rightarrow \\quad i^{67} = i^3 = -i',
  },
];

// ── 第5节：复平面 ──
export const complexPractice5: QuizQuestionData[] = [
  {
    id: 'cp5-1',
    type: 'choice',
    question: '',
    questionLatex: 'z = -2+3i \\text{ 对应的点在第几象限？}',
    options: [
      { label: 'A', value: '第一象限' },
      { label: 'B', value: '第二象限' },
      { label: 'C', value: '第三象限' },
      { label: 'D', value: '第四象限' },
    ],
    correctAnswer: '第二象限',
    explanation: 'z=a+bi 对应点(a,b)。这里 a=-2<0, b=3>0，所以点(-2,3)在第二象限（左上方）。',
    explanationLatex: 'z=-2+3i \\Rightarrow \\text{点}(-2,3) \\quad a=-2<0,\\; b=3>0 \\quad \\therefore \\text{第二象限}',
  },
  {
    id: 'cp5-2',
    type: 'choice',
    question: '',
    questionLatex: 'z = 4-i \\text{ 对应的点在第几象限？}',
    options: [
      { label: 'A', value: '第一象限' },
      { label: 'B', value: '第二象限' },
      { label: 'C', value: '第三象限' },
      { label: 'D', value: '第四象限' },
    ],
    correctAnswer: '第四象限',
    explanation: 'z=4+(-1)i 对应点(4,-1)。a=4>0, b=-1<0，所以在第四象限（右下方）。',
    explanationLatex: 'z=4-i \\Rightarrow \\text{点}(4,-1) \\quad a=4>0,\\; b=-1<0 \\quad \\therefore \\text{第四象限}',
  },
];
