import type { QuizQuestionData } from '@/types';

export const complexQuizQuestions: QuizQuestionData[] = [
  {
    id: 'q1',
    question: '（2025·全国一卷·第1题）复数',
    questionLatex: '\\dfrac{2+i}{1-2i}',
    options: [
      { label: 'A', value: '-2' },
      { label: 'B', value: '0' },
      { label: 'C', value: '1' },
      { label: 'D', value: '6' },
    ],
    correctAnswer: '1',
    explanation: '分母实数化：上下同乘 (1+2i)，分母变成 1+4=5',
    explanationLatex:
      '\\frac{(2+i)(1+2i)}{(1-2i)(1+2i)} = \\frac{2+4i+i+2i^2}{5} = \\frac{5i}{5} = i \\quad \\text{虚部为 } 1',
  },
  {
    id: 'q2',
    question: '（2024·新高考Ⅱ卷·第1题）已知 z = 1+i，求 z + 1/z =',
    options: [
      { label: 'A', value: '0' },
      { label: 'B', value: '1' },
      { label: 'C', value: '√2' },
      { label: 'D', value: '2' },
    ],
    correctAnswer: '2',
    explanation: 'z = 1+i，1/z = 1/(1+i) = (1-i)/2',
    explanationLatex:
      'z + \\frac{1}{z} = (1+i) + \\frac{1-i}{2} = \\frac{2+2i+1-i}{2} = \\frac{3+i}{2}',
  },
  {
    id: 'q3',
    question: '（2023·新高考Ⅱ卷·第1题）复数 (1+3i)/(1+i) 在复平面内对应的点位于？',
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
    question: '（2020·新高考Ⅰ卷·第2题）求 (1+i)·i³ 的值',
    options: [
      { label: 'A', value: '1+i' },
      { label: 'B', value: '-1+i' },
      { label: 'C', value: '-1-i' },
      { label: 'D', value: '1-i' },
    ],
    correctAnswer: '1-i',
    explanation: 'i³ = -i，然后展开：',
    explanationLatex: '(1+i) \\cdot (-i) = -i - i^2 = -i + 1 = 1 - i',
  },
  {
    id: 'q5',
    question: '复数 z = 3 - 2i 的虚部是？',
    options: [
      { label: 'A', value: '-2i' },
      { label: 'B', value: '2i' },
      { label: 'C', value: '-2' },
      { label: 'D', value: '2' },
    ],
    correctAnswer: '-2',
    explanation: '虚部是 i 前面的系数，包含符号。z = 3 + (-2)i，所以虚部是 -2，不是 -2i。',
  },
];
