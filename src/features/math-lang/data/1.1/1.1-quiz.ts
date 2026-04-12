import type { QuizQuestionData } from '@/types';

// 精选 7 道高考真题，每道代表一种典型考法
export const complexQuizQuestions: QuizQuestionData[] = [
  // ① 除法 → 求虚部（凑因子 / 乘共轭）
  {
    id: 'q1',
    question: '（2025·全国一卷）复数',
    questionLatex: '\\dfrac{2+i}{1-2i} \\text{ 的虚部为}',
    options: [
      { label: 'A', value: '-2', isLatex: true },
      { label: 'B', value: '0', isLatex: true },
      { label: 'C', value: '1', isLatex: true },
      { label: 'D', value: '6', isLatex: true },
    ],
    correctAnswer: '1',
  },
  // ② 除法 → 判象限
  {
    id: 'q2',
    question: '（2023·新高考Ⅱ卷）复数',
    questionLatex: '\\dfrac{1+3i}{1+i} \\text{ 在复平面内对应的点位于？}',
    options: [
      { label: 'A', value: '第一象限' },
      { label: 'B', value: '第二象限' },
      { label: 'C', value: '第三象限' },
      { label: 'D', value: '第四象限' },
    ],
    correctAnswer: '第一象限',
  },
  // ③ 乘法 + i 的幂次
  {
    id: 'q3',
    question: '（2020·新高考Ⅰ卷）求',
    questionLatex: '(1+i) \\cdot i^3 \\text{ 的值}',
    options: [
      { label: 'A', value: '1+i', isLatex: true },
      { label: 'B', value: '-1+i', isLatex: true },
      { label: 'C', value: '-1-i', isLatex: true },
      { label: 'D', value: '1-i', isLatex: true },
    ],
    correctAnswer: '1-i',
  },
  // ④ 除法 → 求模（模的速算）
  {
    id: 'q4',
    question: '（2021·新高考Ⅰ卷）已知',
    questionLatex: 'z = \\dfrac{2+i}{1+i} \\text{，求 } |z|',
    options: [
      { label: 'A', value: '1', isLatex: true },
      { label: 'B', value: '\\dfrac{\\sqrt{10}}{2}', isLatex: true },
      { label: 'C', value: '\\sqrt{2}', isLatex: true },
      { label: 'D', value: '2', isLatex: true },
    ],
    correctAnswer: '\\dfrac{\\sqrt{10}}{2}',
  },
  // ⑤ 幂次 + (1±i) 家族
  {
    id: 'q5',
    question: '（2020·全国卷Ⅱ）求',
    questionLatex: '(1-i)^4 \\text{ 的值}',
    options: [
      { label: 'A', value: '-4', isLatex: true },
      { label: 'B', value: '-2', isLatex: true },
      { label: 'C', value: '2', isLatex: true },
      { label: 'D', value: '4', isLatex: true },
    ],
    correctAnswer: '-4',
  },
  // ⑥ 方程 + 共轭
  {
    id: 'q6',
    question: '（2022·新高考Ⅰ卷）若',
    questionLatex: 'i(1-z) = 1 \\text{，则 } z + \\bar{z} =',
    options: [
      { label: 'A', value: '0', isLatex: true },
      { label: 'B', value: '1', isLatex: true },
      { label: 'C', value: '\\sqrt{2}', isLatex: true },
      { label: 'D', value: '2', isLatex: true },
    ],
    correctAnswer: '2',
  },
  // ⑦ 乘法 = 实数 → 求参数
  {
    id: 'q7',
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
  // ⑧ 加减法 → 求实部
  {
    id: 'q8',
    question: '（2019·湖南模拟）计算',
    questionLatex: '(3+2i) - (1-3i) \\text{ 的实部为}',
    options: [
      { label: 'A', value: '1', isLatex: true },
      { label: 'B', value: '2', isLatex: true },
      { label: 'C', value: '3', isLatex: true },
      { label: 'D', value: '5', isLatex: true },
    ],
    correctAnswer: '2',
  },
  // ⑨ 纯虚数 → 求参数
  {
    id: 'q9',
    question: '（2021·湖南模拟）已知复数',
    questionLatex: 'z = (m^2-1)+(m+1)i\\;（m \\in \\mathbb{R}）\\text{ 是纯虚数，则 } m =',
    options: [
      { label: 'A', value: '-1', isLatex: true },
      { label: 'B', value: '0', isLatex: true },
      { label: 'C', value: '1', isLatex: true },
      { label: 'D', value: '\\pm 1', isLatex: true },
    ],
    correctAnswer: '1',
  },
  // ⑩ 复平面对称 → 关于虚轴
  {
    id: 'q10',
    question: '（2022·湖南模拟）复数',
    questionLatex: 'z = 1-2i \\text{ 关于虚轴对称的复数是}',
    options: [
      { label: 'A', value: '1+2i', isLatex: true },
      { label: 'B', value: '-1+2i', isLatex: true },
      { label: 'C', value: '-1-2i', isLatex: true },
      { label: 'D', value: '2-i', isLatex: true },
    ],
    correctAnswer: '-1+2i',
  },
];
