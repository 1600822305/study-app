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
  },
];
