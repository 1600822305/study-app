import type { QuizQuestionData } from '@/types';

export const complexQuizQuestions: QuizQuestionData[] = [
  {
    id: 'q1',
    question: '（2025·全国一卷·第1题）复数',
    questionLatex: '\\dfrac{2+i}{1-2i} \\text{ 的虚部为}',
    options: [
      { label: 'A', value: '-2', isLatex: true },
      { label: 'B', value: '0', isLatex: true },
      { label: 'C', value: '1', isLatex: true },
      { label: 'D', value: '6', isLatex: true },
    ],
    correctAnswer: '1',
    explanation: '分母实数化：上下同乘 (1+2i)，分母变成 1+4=5',
    explanationLatex:
      '\\frac{(2+i)(1+2i)}{(1-2i)(1+2i)} = \\frac{2+4i+i+2i^2}{5} = \\frac{5i}{5} = i \\quad \\text{虚部为 } 1',
  },
  {
    id: 'q2',
    question: '（2024·新高考Ⅰ卷·第2题）若',
    questionLatex: 'z = \\dfrac{1+i}{1-i} \\text{，则 } z =',
    options: [
      { label: 'A', value: '-1', isLatex: true },
      { label: 'B', value: '1', isLatex: true },
      { label: 'C', value: '-i', isLatex: true },
      { label: 'D', value: 'i', isLatex: true },
    ],
    correctAnswer: 'i',
    explanation: '分母实数化：上下同乘 (1+i)',
    explanationLatex:
      '\\frac{(1+i)(1+i)}{(1-i)(1+i)} = \\frac{(1+i)^2}{2} = \\frac{2i}{2} = i',
  },
  {
    id: 'q3',
    question: '（2023·新高考Ⅱ卷·第1题）复数',
    questionLatex: '\\dfrac{1+3i}{1+i} \\text{ 在复平面内对应的点位于？}',
    options: [
      { label: 'A', value: '第一象限' },
      { label: 'B', value: '第二象限' },
      { label: 'C', value: '第三象限' },
      { label: 'D', value: '第四象限' },
    ],
    correctAnswer: '第一象限',
    explanation: '分母实数化：',
    explanationLatex:
      '\\frac{(1+3i)(1-i)}{(1+i)(1-i)} = \\frac{1-i+3i-3i^2}{2} = \\frac{4+2i}{2} = 2+i \\quad \\text{点 (2,1) 在第一象限}',
  },
  {
    id: 'q4',
    question: '（2020·新高考Ⅰ卷·第2题）求',
    questionLatex: '(1+i) \\cdot i^3 \\text{ 的值}',
    options: [
      { label: 'A', value: '1+i', isLatex: true },
      { label: 'B', value: '-1+i', isLatex: true },
      { label: 'C', value: '-1-i', isLatex: true },
      { label: 'D', value: '1-i', isLatex: true },
    ],
    correctAnswer: '1-i',
    explanation: 'i³ = -i，然后展开：',
    explanationLatex: '(1+i) \\cdot (-i) = -i - i^2 = -i + 1 = 1 - i',
  },
  {
    id: 'q5',
    question: '复数',
    questionLatex: 'z = 3 - 2i \\text{ 的虚部是？}',
    options: [
      { label: 'A', value: '-2i', isLatex: true },
      { label: 'B', value: '2i', isLatex: true },
      { label: 'C', value: '-2', isLatex: true },
      { label: 'D', value: '2', isLatex: true },
    ],
    correctAnswer: '-2',
    explanation: '虚部是 i 前面的系数，包含符号。',
    explanationLatex: 'z = 3 + (-2)i \\text{，所以虚部是 } -2 \\text{，不是 } -2i',
  },
  {
    id: 'q6',
    question: '（2021·新高考Ⅰ卷·第2题）已知',
    questionLatex: 'z = \\dfrac{2+i}{1+i} \\text{，求 } |z|',
    options: [
      { label: 'A', value: '1', isLatex: true },
      { label: 'B', value: '\\dfrac{\\sqrt{10}}{2}', isLatex: true },
      { label: 'C', value: '\\sqrt{2}', isLatex: true },
      { label: 'D', value: '2', isLatex: true },
    ],
    correctAnswer: '\\dfrac{\\sqrt{10}}{2}',
    explanation: '先化简 z，再求模',
    explanationLatex:
      'z = \\frac{(2+i)(1-i)}{(1+i)(1-i)} = \\frac{3-i}{2} = \\frac{3}{2}-\\frac{1}{2}i \\Rightarrow |z| = \\sqrt{\\frac{9}{4}+\\frac{1}{4}} = \\frac{\\sqrt{10}}{2}',
  },
  {
    id: 'q7',
    question: '（2020·全国卷Ⅱ·第2题）求',
    questionLatex: '(1-i)^4 \\text{ 的值}',
    options: [
      { label: 'A', value: '-4', isLatex: true },
      { label: 'B', value: '-2', isLatex: true },
      { label: 'C', value: '2', isLatex: true },
      { label: 'D', value: '4', isLatex: true },
    ],
    correctAnswer: '-4',
    explanation: '先算 (1-i)²，再平方',
    explanationLatex:
      '(1-i)^2 = 1-2i+i^2 = -2i \\Rightarrow (1-i)^4 = (-2i)^2 = 4i^2 = -4',
  },
  {
    id: 'q8',
    question: '（2020·全国卷Ⅲ·第2题）复数',
    questionLatex: '\\dfrac{2}{1+i} \\text{ 的虚部为}',
    options: [
      { label: 'A', value: '-1', isLatex: true },
      { label: 'B', value: '-i', isLatex: true },
      { label: 'C', value: '1', isLatex: true },
      { label: 'D', value: 'i', isLatex: true },
    ],
    correctAnswer: '-1',
    explanation: '分母实数化后看虚部系数',
    explanationLatex:
      '\\frac{2}{1+i} = \\frac{2(1-i)}{(1+i)(1-i)} = \\frac{2-2i}{2} = 1-i \\quad \\text{虚部为 } -1',
  },
  {
    id: 'q9',
    question: '（2022·新高考Ⅰ卷·第2题）若',
    questionLatex: 'i(1-z) = 1 \\text{，则 } z + \\bar{z} =',
    options: [
      { label: 'A', value: '0', isLatex: true },
      { label: 'B', value: '1', isLatex: true },
      { label: 'C', value: '\\sqrt{2}', isLatex: true },
      { label: 'D', value: '2', isLatex: true },
    ],
    correctAnswer: '2',
    explanation: '先解出 z，再求 z + z̄',
    explanationLatex:
      '1-z = \\frac{1}{i} = -i \\Rightarrow z = 1+i \\Rightarrow \\bar{z} = 1-i \\Rightarrow z+\\bar{z} = 2',
  },
  {
    id: 'q10',
    question: '（2021·新高考Ⅱ卷·第1题）复数',
    questionLatex: '\\dfrac{2-i}{1-3i} \\text{ 在复平面内对应的点所在的象限为？}',
    options: [
      { label: 'A', value: '第一象限' },
      { label: 'B', value: '第二象限' },
      { label: 'C', value: '第三象限' },
      { label: 'D', value: '第四象限' },
    ],
    correctAnswer: '第一象限',
    explanation: '分母实数化后看对应点的坐标',
    explanationLatex:
      '\\frac{(2-i)(1+3i)}{(1-3i)(1+3i)} = \\frac{2+6i-i-3i^2}{10} = \\frac{5+5i}{10} = \\frac{1}{2}+\\frac{1}{2}i \\quad \\text{点 } (\\frac{1}{2},\\frac{1}{2}) \\text{ 在第一象限}',
  },
  {
    id: 'q11',
    question: '（2023·全国甲卷）若复数',
    questionLatex: '(a+i)(1-ai) = 2 \\text{，} a \\in \\mathbb{R} \\text{，则 } a =',
    options: [
      { label: 'A', value: '-1', isLatex: true },
      { label: 'B', value: '0', isLatex: true },
      { label: 'C', value: '1', isLatex: true },
      { label: 'D', value: '2', isLatex: true },
    ],
    correctAnswer: '1',
    explanation: '展开后令虚部为0，再验证实部',
    explanationLatex:
      '(a+i)(1-ai) = 2a + (1-a^2)i = 2 \\Rightarrow 1-a^2=0,\\; a=\\pm 1;\\; 2a=2 \\Rightarrow a=1',
  },
  {
    id: 'q12',
    question: '若复数',
    questionLatex:
      'z = (m^2-1) + (m+1)i \\text{ 是纯虚数，则实数 } m =',
    options: [
      { label: 'A', value: '1', isLatex: true },
      { label: 'B', value: '-1', isLatex: true },
      { label: 'C', value: '\\pm 1', isLatex: true },
      { label: 'D', value: '0', isLatex: true },
    ],
    correctAnswer: '1',
    explanation: '纯虚数：实部=0 且 虚部≠0',
    explanationLatex:
      'm^2-1=0 \\Rightarrow m=\\pm 1 \\text{；但 } m=-1 \\text{ 时虚部 } m+1=0 \\text{（变成0，不是纯虚数）} \\Rightarrow m=1',
  },
  {
    id: 'q13',
    question: '计算',
    questionLatex: '(2+3i)(1-i) =',
    options: [
      { label: 'A', value: '5+i', isLatex: true },
      { label: 'B', value: '-1+i', isLatex: true },
      { label: 'C', value: '5-i', isLatex: true },
      { label: 'D', value: '-1-i', isLatex: true },
    ],
    correctAnswer: '5+i',
    explanation: '展开，遇到 i² 换成 -1',
    explanationLatex:
      '(2+3i)(1-i) = 2-2i+3i-3i^2 = 2+i+3 = 5+i',
  },
  {
    id: 'q14',
    question: '若',
    questionLatex:
      'z = 1+2i \\text{，则 } z \\cdot \\bar{z} =',
    options: [
      { label: 'A', value: '3', isLatex: true },
      { label: 'B', value: '5', isLatex: true },
      { label: 'C', value: '3+4i', isLatex: true },
      { label: 'D', value: '\\sqrt{5}', isLatex: true },
    ],
    correctAnswer: '5',
    explanation: 'z·z̄ = |z|²，这是重要公式',
    explanationLatex:
      'z \\cdot \\bar{z} = (1+2i)(1-2i) = 1+4 = 5 = |z|^2',
  },
  {
    id: 'q15',
    question: '求',
    questionLatex: 'i + i^2 + i^3 + \\cdots + i^{2024} =',
    options: [
      { label: 'A', value: '0', isLatex: true },
      { label: 'B', value: '1', isLatex: true },
      { label: 'C', value: 'i', isLatex: true },
      { label: 'D', value: '-1', isLatex: true },
    ],
    correctAnswer: '0',
    explanation: '每4个连续i的幂之和为0',
    explanationLatex:
      'i+i^2+i^3+i^4 = i-1-i+1 = 0 \\text{，共 } 2024 \\div 4 = 506 \\text{ 组，总和为 } 0',
  },
  {
    id: 'q16',
    question: '若复数 z 满足',
    questionLatex:
      '(x+yi)(1+i) = 2 \\text{（} x,y \\in \\mathbb{R} \\text{），则 } x+y =',
    options: [
      { label: 'A', value: '0', isLatex: true },
      { label: 'B', value: '1', isLatex: true },
      { label: 'C', value: '2', isLatex: true },
      { label: 'D', value: '-1', isLatex: true },
    ],
    correctAnswer: '0',
    explanation: '展开后实部虚部分别相等，列方程组',
    explanationLatex:
      '(x-y)+(x+y)i = 2 \\Rightarrow x-y=2,\\; x+y=0 \\Rightarrow x=1,\\; y=-1',
  },
];
