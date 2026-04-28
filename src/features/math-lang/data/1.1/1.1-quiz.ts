import type { QuizQuestionData } from '@/types';

// 新高考复数真题精选（2020-2024）+ 2026预测，覆盖全部典型考法
// 顺序：填空题在前，选择题在后
export const complexQuizQuestions: QuizQuestionData[] = [
  // ═══════════ 填空题 ═══════════
  // ① 方程求 z（除法 + 共轭）
  {
    id: 'cq-1',
    type: 'blank',
    question: '（2024·新高考I卷改编）已知',
    questionLatex: 'i(z+1)=1+i \\text{，则 } z =',
    correctAnswer: '-i',
    acceptableAnswers: ['-i', '0-i'],
  },
  // ② 除法 → 求模
  {
    id: 'cq-3',
    type: 'blank',
    question: '（2023·新高考I卷改编）已知复数',
    questionLatex: 'z \\text{ 满足 } (1+i)z=2i \\text{，则 } |z| =',
    correctAnswer: '\\sqrt{2}',
    acceptableAnswers: ['\\sqrt{2}', '\\sqrt 2'],
  },
  // ③ 方程 → z+z̄
  {
    id: 'cq-4',
    type: 'blank',
    question: '（2022·新高考I卷）若',
    questionLatex: 'i(1-z) = 1 \\text{，则 } z + \\bar{z} =',
    correctAnswer: '2',
  },
  // ④ 运算 → 求模
  {
    id: 'cq-5',
    type: 'blank',
    question: '（2024·新高考II卷改编）已知',
    questionLatex: 'z=1+i \\text{，则 } |z^2-2z| =',
    correctAnswer: '2',
  },
  // ⑤ 除法 → 求模（模的速算）
  {
    id: 'cq-6',
    type: 'blank',
    question: '（2021·新高考I卷）已知',
    questionLatex: 'z = \\dfrac{2+i}{1+i} \\text{，则 } |z| =',
    correctAnswer: '\\dfrac{\\sqrt{10}}{2}',
    acceptableAnswers: ['\\dfrac{\\sqrt{10}}{2}', '\\frac{\\sqrt{10}}{2}', '\\sqrt{10}/2'],
  },
  // ⑥ 乘积为实数 → 求参数
  {
    id: 'cq-9',
    type: 'blank',
    question: '（2023·全国甲卷）若复数',
    questionLatex: '(a+i)(1-ai) = 2 \\text{（} a \\in \\mathbb{R} \\text{），则 } a =',
    correctAnswer: '1',
  },
  // ⑦ 幂次 → 求值
  {
    id: 'cq-10',
    type: 'blank',
    question: '（2020·全国卷II）求',
    questionLatex: '(1-i)^4 =',
    correctAnswer: '-4',
  },
  // ⑧ 纯 i 幂次求和
  {
    id: 'cq-14',
    type: 'blank',
    question: '（高频考点）求',
    questionLatex: 'i^{2025} + i^{2026} =',
    correctAnswer: 'i-1',
    acceptableAnswers: ['i-1', '-1+i', 'i+(-1)'],
  },
  // ⑨ 纯虚数条件求参
  {
    id: 'cq-15',
    type: 'blank',
    question: '（高频考点）若',
    questionLatex: 'z = (m^2-4) + (m+2)i \\text{（} m \\in \\mathbb{R} \\text{）是纯虚数，则 } m =',
    correctAnswer: '2',
  },
  // ⑩ 两点距离（几何意义）
  {
    id: 'cq-16',
    type: 'blank',
    question: '（2026预测·几何意义）已知复数',
    questionLatex: 'z_1=2+3i \\text{，} z_2=-1-i \\text{，则 } |z_1-z_2| =',
    correctAnswer: '5',
  },

  // ═══════════ 选择题 ═══════════
  // ⑧ 乘法 → 判象限
  {
    id: 'cq-2',
    type: 'choice',
    question: '（2023·新高考II卷）在复平面内，',
    questionLatex: '(1+3i)(3-i) \\text{ 对应的点位于}',
    options: [
      { label: 'A', value: '第一象限' },
      { label: 'B', value: '第二象限' },
      { label: 'C', value: '第三象限' },
      { label: 'D', value: '第四象限' },
    ],
    correctAnswer: '第一象限',
  },
  // ⑨ 乘法 + i 的幂次
  {
    id: 'cq-7',
    type: 'choice',
    question: '（2020·新高考I卷）求',
    questionLatex: '(1+i) \\cdot i^3 =',
    options: [
      { label: 'A', value: '1+i', isLatex: true },
      { label: 'B', value: '-1+i', isLatex: true },
      { label: 'C', value: '-1-i', isLatex: true },
      { label: 'D', value: '1-i', isLatex: true },
    ],
    correctAnswer: '1-i',
  },
  // ⑩ 除法 → 判象限
  {
    id: 'cq-8',
    type: 'choice',
    question: '（2022·新高考II卷改编）复数',
    questionLatex: 'z = \\dfrac{3+i}{1+i} \\text{ 在复平面内对应的点所在象限为}',
    options: [
      { label: 'A', value: '第一象限' },
      { label: 'B', value: '第二象限' },
      { label: 'C', value: '第三象限' },
      { label: 'D', value: '第四象限' },
    ],
    correctAnswer: '第四象限',
  },
  // ⑪ 2026 预测：复数 + 方程根的交汇
  {
    id: 'cq-12',
    type: 'choice',
    question: '（2026预测）已知复数 z 是方程',
    questionLatex: 'x^2 - 2x + 2 = 0 \\text{ 的一个根，则 } |z| =',
    options: [
      { label: 'A', value: '1', isLatex: true },
      { label: 'B', value: '\\sqrt{2}', isLatex: true },
      { label: 'C', value: '2', isLatex: true },
      { label: 'D', value: '\\sqrt{5}', isLatex: true },
    ],
    correctAnswer: '\\sqrt{2}',
  },
  // ⑫ 2026 预测：复数 + 复平面几何
  {
    id: 'cq-13',
    type: 'choice',
    question: '（2026预测）在复平面内，复数',
    questionLatex: 'z_1 = 2+3i \\text{，} z_2 = -1+i \\text{ 对应的点分别为 } A, B \\text{，则向量 } \\overrightarrow{AB} \\text{ 对应的复数为}',
    options: [
      { label: 'A', value: '-3-2i', isLatex: true },
      { label: 'B', value: '3+2i', isLatex: true },
      { label: 'C', value: '1+4i', isLatex: true },
      { label: 'D', value: '-1+4i', isLatex: true },
    ],
    correctAnswer: '-3-2i',
  },
];
