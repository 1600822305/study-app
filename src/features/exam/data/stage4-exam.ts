import type { QuizQuestionData } from '@/types';
import type { EssayQuestion } from '@/components/shared/ExamPaper';

// ── 第四阶段考试：平面向量（全部独立自编，按高考考点分布） ──
// 选择题 8×5 = 40分，填空题 6×5 = 30分，解答题 12+12+13+13 = 50分，共 120 分
// 答案与解析统一在 stage4-exam-answers.tsx 中，此文件只存题目数据

// ── 选择题（8 题，从易到难） ──
export const stage4ChoiceQuestions: QuizQuestionData[] = [
  // 1. 向量基本概念（共线/相等）
  {
    id: 's4e-c1',
    question: '向量基本概念',
    questionLatex:
      '\\text{下列说法正确的是}',
    type: 'choice',
    options: [
      { label: 'A', value: '\\text{零向量没有方向}', isLatex: true },
      { label: 'B', value: '\\text{模相等的两个向量是相等向量}', isLatex: true },
      { label: 'C', value: '\\text{共线向量一定在同一直线上}', isLatex: true },
      { label: 'D', value: '\\text{不共线的两个非零向量可以作为一组基底}', isLatex: true },
    ],
    correctAnswer: 'D',
    explanation: '',
    explanationLatex: '',
  },
  // 2. 向量线性运算（坐标）
  {
    id: 's4e-c2',
    question: '向量线性运算',
    questionLatex:
      '\\text{已知 } \\vec{a}=(2,-1),\\; \\vec{b}=(-3,4)\\text{，则 } 2\\vec{a}-\\vec{b} =',
    type: 'choice',
    options: [
      { label: 'A', value: '(7,-6)', isLatex: true },
      { label: 'B', value: '(1,-6)', isLatex: true },
      { label: 'C', value: '(7,2)', isLatex: true },
      { label: 'D', value: '(1,2)', isLatex: true },
    ],
    correctAnswer: 'A',
    explanation: '',
    explanationLatex: '',
  },
  // 3. 平行判定求参数
  {
    id: 's4e-c3',
    question: '平行判定',
    questionLatex:
      '\\text{若 } \\vec{a}=(2,3),\\; \\vec{b}=(m,-2)\\text{，且 } \\vec{a} \\parallel \\vec{b}\\text{，则 } m =',
    type: 'choice',
    options: [
      { label: 'A', value: '-\\dfrac{4}{3}', isLatex: true },
      { label: 'B', value: '\\dfrac{4}{3}', isLatex: true },
      { label: 'C', value: '-\\dfrac{3}{2}', isLatex: true },
      { label: 'D', value: '\\dfrac{3}{2}', isLatex: true },
    ],
    correctAnswer: 'A',
    explanation: '',
    explanationLatex: '',
  },
  // 4. 垂直判定求参数（高频考点）
  {
    id: 's4e-c4',
    question: '垂直判定',
    questionLatex:
      '\\text{已知 } \\vec{a}=(1,2),\\; \\vec{b}=(x,1)\\text{，若 } \\vec{a} \\perp (\\vec{a}+\\vec{b})\\text{，则 } x =',
    type: 'choice',
    options: [
      { label: 'A', value: '-7' },
      { label: 'B', value: '-6' },
      { label: 'C', value: '7' },
      { label: 'D', value: '6' },
    ],
    correctAnswer: 'A',
    explanation: '',
    explanationLatex: '',
  },
  // 5. 数量积与夹角
  {
    id: 's4e-c5',
    question: '数量积求夹角',
    questionLatex:
      '\\text{已知 } \\vec{a}=(1,\\sqrt{3}),\\; \\vec{b}=(\\sqrt{3},1)\\text{，则 } \\vec{a} \\text{ 与 } \\vec{b} \\text{ 的夹角为}',
    type: 'choice',
    options: [
      { label: 'A', value: '30\\degree', isLatex: true },
      { label: 'B', value: '45\\degree', isLatex: true },
      { label: 'C', value: '60\\degree', isLatex: true },
      { label: 'D', value: '90\\degree', isLatex: true },
    ],
    correctAnswer: 'A',
    explanation: '',
    explanationLatex: '',
  },
  // 6. 模的展开计算
  {
    id: 's4e-c6',
    question: '模的展开',
    questionLatex:
      '\\text{已知 } |\\vec{a}|=2,\\; |\\vec{b}|=1,\\; \\vec{a}\\cdot\\vec{b}=-1\\text{，则 } |\\vec{a}-2\\vec{b}| =',
    type: 'choice',
    options: [
      { label: 'A', value: '2', isLatex: true },
      { label: 'B', value: '2\\sqrt{2}', isLatex: true },
      { label: 'C', value: '3', isLatex: true },
      { label: 'D', value: '2\\sqrt{3}', isLatex: true },
    ],
    correctAnswer: 'D',
    explanation: '',
    explanationLatex: '',
  },
  // 7. 垂直条件+展开（综合）
  {
    id: 's4e-c7',
    question: '垂直+展开综合',
    questionLatex:
      '\\text{已知 } |\\vec{a}|=2,\\; |\\vec{b}|=1\\text{，且 } \\vec{a} \\perp (\\vec{a}-2\\vec{b})\\text{，则 } |\\vec{a}-\\vec{b}| =',
    type: 'choice',
    options: [
      { label: 'A', value: '1', isLatex: true },
      { label: 'B', value: '\\sqrt{2}', isLatex: true },
      { label: 'C', value: '\\sqrt{3}', isLatex: true },
      { label: 'D', value: '2', isLatex: true },
    ],
    correctAnswer: 'A',
    explanation: '',
    explanationLatex: '',
  },
  // 8.（2023高考改编）含参垂直
  {
    id: 's4e-c8',
    question: '（2023高考改编）含参垂直',
    questionLatex:
      '\\text{已知 } \\vec{a}=(1,1),\\; \\vec{b}=(1,-1)\\text{，若 } (\\vec{a}+\\lambda\\vec{b}) \\perp (\\vec{a}+\\mu\\vec{b})\\text{，则}',
    type: 'choice',
    options: [
      { label: 'A', value: '\\lambda + \\mu = 1', isLatex: true },
      { label: 'B', value: '\\lambda + \\mu = -1', isLatex: true },
      { label: 'C', value: '\\lambda\\mu = 1', isLatex: true },
      { label: 'D', value: '\\lambda\\mu = -1', isLatex: true },
    ],
    correctAnswer: 'D',
    explanation: '',
    explanationLatex: '',
  },
];

// ── 填空题（6 题） ──
export const stage4BlankQuestions: QuizQuestionData[] = [
  // 9. 向量加法求模
  {
    id: 's4e-b1',
    question: '向量加法求模',
    questionLatex:
      '\\text{已知 } \\vec{a}=(1,2),\\; \\vec{b}=(x,1)\\text{，若 } |\\vec{a}+\\vec{b}|=\\sqrt{10}\\text{，则 } x = \\underline{\\qquad}',
    type: 'blank',
    correctAnswer: '0或-2',
    acceptableAnswers: ['0 或 -2', '-2或0', '-2 或 0', '0,-2', '-2,0'],
    explanation: '',
    explanationLatex: '',
  },
  // 10. 平行四边形求顶点
  {
    id: 's4e-b2',
    question: '平行四边形求顶点',
    questionLatex:
      '\\text{平行四边形 } ABCD \\text{ 中，} A(1,2),\\; B(4,3),\\; C(6,7)\\text{，则 } D = \\underline{\\qquad}',
    type: 'blank',
    correctAnswer: '(3,6)',
    acceptableAnswers: ['(3, 6)', '3,6', 'D(3,6)', 'D(3, 6)'],
    explanation: '',
    explanationLatex: '',
  },
  // 11. 数量积求夹角余弦
  {
    id: 's4e-b3',
    question: '数量积求夹角余弦',
    questionLatex:
      '\\text{已知 } |\\vec{a}|=3,\\; |\\vec{b}|=4,\\; \\vec{a}\\cdot\\vec{b}=6\\text{，则 } \\cos\\langle\\vec{a},\\vec{b}\\rangle = \\underline{\\qquad}',
    type: 'blank',
    correctAnswer: '1/2',
    acceptableAnswers: ['0.5', '½', '\\frac{1}{2}'],
    explanation: '',
    explanationLatex: '',
  },
  // 12. 向量投影
  {
    id: 's4e-b4',
    question: '向量投影',
    questionLatex:
      '\\text{已知 } \\vec{a}=(3,4),\\; \\vec{b}=(1,0)\\text{，则 } \\vec{a} \\text{ 在 } \\vec{b} \\text{ 方向上的投影为 } \\underline{\\qquad}',
    type: 'blank',
    correctAnswer: '3',
    acceptableAnswers: ['3.0'],
    explanation: '',
    explanationLatex: '',
  },
  // 13. 中点向量
  {
    id: 's4e-b5',
    question: '中点向量',
    questionLatex:
      '\\text{已知 } A(1,3),\\; B(5,7)\\text{，} M \\text{ 为 } AB \\text{ 中点，} O \\text{ 为原点，则 } \\overrightarrow{OM} = \\underline{\\qquad}',
    type: 'blank',
    correctAnswer: '(3,5)',
    acceptableAnswers: ['(3, 5)', '3,5'],
    explanation: '',
    explanationLatex: '',
  },
  // 14. 基底表示（综合）
  {
    id: 's4e-b6',
    question: '基底表示',
    questionLatex:
      '\\text{在 } \\triangle ABC \\text{ 中，} D \\text{ 是 } BC \\text{ 的中点，} E \\text{ 在 } AB \\text{ 上且 } \\overrightarrow{AE}=\\dfrac{1}{3}\\overrightarrow{AB}\\text{。}\\\\[4pt]\\text{用 } \\overrightarrow{AB},\\; \\overrightarrow{AC} \\text{ 表示 } \\overrightarrow{DE} = \\underline{\\qquad}',
    type: 'blank',
    correctAnswer: '-1/6 AB - 1/2 AC',
    acceptableAnswers: ['-⅙AB-½AC', '-1/6AB-1/2AC'],
    explanation: '',
    explanationLatex: '',
  },
];

// 合并导出（供 QuizPanel 使用）
export const stage4ExamQuestions: QuizQuestionData[] = [
  ...stage4ChoiceQuestions,
  ...stage4BlankQuestions,
];

// ── 解答题（仅打印试卷使用，答案在 stage4-exam-answers.tsx）──
export const stage4EssayQuestions: EssayQuestion[] = [
  // 15（12分）：数量积+垂直+夹角综合
  {
    id: 's4e-essay-1',
    questionLatex:
      '\\text{已知向量 } \\vec{a}=(1,2),\\; \\vec{b}=(3,1)\\text{。}\\\\[6pt]' +
      '\\text{（1）求 } \\vec{a} \\cdot \\vec{b} \\text{ 和 } |\\vec{a}+\\vec{b}|\\text{；}\\\\[4pt]' +
      '\\text{（2）若 } \\vec{c} = \\vec{a} + t\\vec{b}\\text{，且 } \\vec{c} \\perp \\vec{a}\\text{，求实数 } t \\text{ 的值；}\\\\[4pt]' +
      '\\text{（3）求 } \\vec{a} \\text{ 与 } \\vec{b} \\text{ 的夹角 } \\theta\\text{。}',
    score: 12,
    lines: 12,
  },
  // 16（12分）：平行四边形坐标综合
  {
    id: 's4e-essay-2',
    questionDiagram: 'essay-parallelogram',
    questionLatex:
      '\\text{如图，在平行四边形 } ABCD \\text{ 中，} A(0,0),\\; B(4,2),\\; D(1,3)\\text{。}\\\\[6pt]' +
      '\\text{（1）求 } C \\text{ 的坐标及对角线交点 } O \\text{ 的坐标；}\\\\[4pt]' +
      '\\text{（2）求 } \\overrightarrow{AC} \\cdot \\overrightarrow{BD}\\text{；}\\\\[4pt]' +
      '\\text{（3）若点 } P \\text{ 在线段 } AB \\text{ 上，且 } \\overrightarrow{DP} \\perp \\overrightarrow{AB}\\text{，求 } P \\text{ 的坐标。}',
    score: 12,
    lines: 14,
  },
  // 17（13分）：三角形坐标+数量积+中线
  {
    id: 's4e-essay-3',
    pageBreak: true,
    questionDiagram: 'essay-triangle-abc',
    questionLatex:
      '\\text{如图，在 } \\triangle ABC \\text{ 中，} A(2,1),\\; B(6,3),\\; C(4,7)\\text{。}\\\\[6pt]' +
      '\\text{（1）求 } \\overrightarrow{AB} \\cdot \\overrightarrow{AC}\\text{，并判断 } \\triangle ABC \\text{ 是否为直角三角形；}\\\\[4pt]' +
      '\\text{（2）设 } M \\text{ 是 } BC \\text{ 的中点，求 } |\\overrightarrow{AM}|\\text{；}\\\\[4pt]' +
      '\\text{（3）求 } \\cos\\angle BAC \\text{ 的值。}',
    score: 13,
    lines: 15,
  },
  // 18（13分）：基底表示+共线证明
  {
    id: 's4e-essay-4',
    questionDiagram: 'essay-triangle-mid-n',
    questionLatex:
      '\\text{如图，在 } \\triangle OAB \\text{ 中，} \\overrightarrow{OA} = \\vec{a},\\; \\overrightarrow{OB} = \\vec{b}\\text{，}' +
      'M \\text{ 是 } OA \\text{ 的中点，} N \\text{ 在 } AB \\text{ 上且 } \\overrightarrow{AN} = \\dfrac{1}{3}\\overrightarrow{AB}\\text{。}\\\\[6pt]' +
      '\\text{（1）用 } \\vec{a},\\; \\vec{b} \\text{ 表示 } \\overrightarrow{OM} \\text{ 和 } \\overrightarrow{ON}\\text{；}\\\\[4pt]' +
      '\\text{（2）用 } \\vec{a},\\; \\vec{b} \\text{ 表示 } \\overrightarrow{MN}\\text{；}\\\\[4pt]' +
      '\\text{（3）证明 } MN \\text{ 与 } OB \\text{ 不平行。}',
    score: 13,
    lines: 16,
  },
];
