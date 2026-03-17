import type { QuizQuestionData } from '@/types';
import type { EssayQuestion } from '@/components/shared/ExamPaper';

// ── 第五阶段考试：三角世界（全部独立自编 + 高考真题） ──
// 选择题 10×5 = 50分，填空题 6×5 = 30分，解答题 10+10+8+6+6 = 40分，共 120 分
// 答案与解析统一在 stage5-exam-answers.tsx 中，此文件只存题目数据

// ── 选择题（10 题） ──
export const stage5ChoiceQuestions: QuizQuestionData[] = [
  // 1. 诱导公式
  {
    id: 's5e-c1',
    question: 'sin 135° 的值是',
    questionLatex: '\\sin 135° =',
    type: 'choice',
    options: [
      { label: 'A', value: '\\dfrac{1}{2}', isLatex: true },
      { label: 'B', value: '-\\dfrac{\\sqrt{2}}{2}', isLatex: true },
      { label: 'C', value: '\\dfrac{\\sqrt{2}}{2}', isLatex: true },
      { label: 'D', value: '\\dfrac{\\sqrt{3}}{2}', isLatex: true },
    ],
    correctAnswer: 'C',
    explanation: '',
  },
  // 2.【2025高考第4题】tan 对称中心
  {
    id: 's5e-c2',
    question: '（2025高考）若点(a,0)(a>0)是函数 y=2tan(x−π/3) 图象的一个对称中心，则 a 的最小值为',
    questionLatex:
      '\\text{（2025高考）若点 } (a,0)\\;(a>0) \\text{ 是函数 } y=2\\tan\\!\\left(x-\\dfrac{\\pi}{3}\\right) \\text{ 图象的一个对称中心，则 } a \\text{ 的最小值为}',
    type: 'choice',
    options: [
      { label: 'A', value: '\\dfrac{\\pi}{6}', isLatex: true },
      { label: 'B', value: '\\dfrac{\\pi}{3}', isLatex: true },
      { label: 'C', value: '\\dfrac{\\pi}{2}', isLatex: true },
      { label: 'D', value: '\\dfrac{4\\pi}{3}', isLatex: true },
    ],
    correctAnswer: 'B',
    explanation: '',
  },
  // 3. 图像变换（先平移后伸缩）
  {
    id: 's5e-c3',
    question: '图像变换',
    questionLatex:
      '\\text{将 } y=\\sin x \\text{ 向左平移 } \\dfrac{\\pi}{3} \\text{，再将横坐标缩短为原来的 } \\dfrac{1}{2}\\text{，所得函数为}',
    type: 'choice',
    options: [
      { label: 'A', value: 'y=\\sin\\!\\left(2x+\\dfrac{\\pi}{3}\\right)', isLatex: true },
      { label: 'B', value: 'y=\\sin\\!\\left(2x+\\dfrac{\\pi}{6}\\right)', isLatex: true },
      { label: 'C', value: 'y=\\sin\\!\\left(2x+\\dfrac{2\\pi}{3}\\right)', isLatex: true },
      { label: 'D', value: 'y=\\sin\\!\\left(\\dfrac{x}{2}+\\dfrac{\\pi}{3}\\right)', isLatex: true },
    ],
    correctAnswer: 'A',
    explanation: '',
  },
  // 4. 闭区间上的最值
  {
    id: 's5e-c4',
    question: '闭区间上最值',
    questionLatex:
      'f(x)=2\\sin\\!\\left(2x+\\dfrac{\\pi}{6}\\right) \\text{ 在 } \\left[0,\\;\\dfrac{\\pi}{2}\\right] \\text{ 上的最小值为}',
    type: 'choice',
    options: [
      { label: 'A', value: '-2' },
      { label: 'B', value: '-1' },
      { label: 'C', value: '0' },
      { label: 'D', value: '1' },
    ],
    correctAnswer: 'B',
    explanation: '',
  },
  // 5. sin75° 精确值（和角公式）
  {
    id: 's5e-c5',
    question: 'sin75° 的精确值',
    questionLatex: '\\sin 75° =',
    type: 'choice',
    options: [
      { label: 'A', value: '\\dfrac{\\sqrt{6}+\\sqrt{2}}{4}', isLatex: true },
      { label: 'B', value: '\\dfrac{\\sqrt{6}-\\sqrt{2}}{4}', isLatex: true },
      { label: 'C', value: '\\dfrac{\\sqrt{3}+1}{4}', isLatex: true },
      { label: 'D', value: '\\dfrac{\\sqrt{2}}{2}', isLatex: true },
    ],
    correctAnswer: 'A',
    explanation: '',
  },
  // 6. sin2α（二象限+二倍角）
  {
    id: 's5e-c6',
    question: 'sin2α',
    questionLatex:
      '\\text{已知 } \\sin\\alpha=\\dfrac{4}{5}\\text{（}\\alpha \\text{ 为第二象限角），则 } \\sin 2\\alpha =',
    type: 'choice',
    options: [
      { label: 'A', value: '-\\dfrac{24}{25}', isLatex: true },
      { label: 'B', value: '\\dfrac{24}{25}', isLatex: true },
      { label: 'C', value: '-\\dfrac{12}{25}', isLatex: true },
      { label: 'D', value: '\\dfrac{12}{25}', isLatex: true },
    ],
    correctAnswer: 'A',
    explanation: '',
  },
  // 7.【2023新课标I第8题】和差角+二倍角
  {
    id: 's5e-c7',
    question: '（2023新课标I）cos(2α+2β)',
    questionLatex:
      '\\text{（2023新课标I）已知 } \\sin(\\alpha-\\beta)=\\dfrac{1}{3}\\text{，}\\cos\\alpha\\sin\\beta=\\dfrac{1}{6}\\text{，则 } \\cos(2\\alpha+2\\beta)=',
    type: 'choice',
    options: [
      { label: 'A', value: '\\dfrac{7}{9}', isLatex: true },
      { label: 'B', value: '\\dfrac{1}{9}', isLatex: true },
      { label: 'C', value: '-\\dfrac{1}{9}', isLatex: true },
      { label: 'D', value: '-\\dfrac{7}{9}', isLatex: true },
    ],
    correctAnswer: 'B',
    explanation: '',
  },
  // 8. 余弦定理对比求角
  {
    id: 's5e-c8',
    question: '余弦定理求角',
    questionLatex:
      '\\text{在 }\\triangle ABC\\text{ 中，}a^2=b^2+c^2-bc\\text{，则 }\\angle A=',
    type: 'choice',
    options: [
      { label: 'A', value: '30°' },
      { label: 'B', value: '60°' },
      { label: 'C', value: '90°' },
      { label: 'D', value: '120°' },
    ],
    correctAnswer: 'B',
    explanation: '',
  },
  // 9. 正弦定理解的个数
  {
    id: 's5e-c9',
    question: '解的个数',
    questionLatex:
      '\\text{在 }\\triangle ABC\\text{ 中，}a=1,\\;b=\\sqrt{3},\\;A=30°\\text{，则 }B\\text{ 的可能值有}',
    type: 'choice',
    options: [
      { label: 'A', value: '0 个' },
      { label: 'B', value: '1 个' },
      { label: 'C', value: '2 个' },
      { label: 'D', value: '3 个' },
    ],
    correctAnswer: 'C',
    explanation: '',
  },
  // 10. 面积公式
  {
    id: 's5e-c10',
    question: '三角形面积',
    questionLatex:
      '\\text{在 }\\triangle ABC\\text{ 中，}a=8,\\;b=5,\\;C=30°\\text{，则面积 }S=',
    type: 'choice',
    options: [
      { label: 'A', value: '10' },
      { label: 'B', value: '20' },
      { label: 'C', value: '10\\sqrt{3}', isLatex: true },
      { label: 'D', value: '20\\sqrt{3}', isLatex: true },
    ],
    correctAnswer: 'A',
    explanation: '',
  },
];

// ── 填空题（6 题） ──
export const stage5BlankQuestions: QuizQuestionData[] = [
  // 11. 弧度制转换
  {
    id: 's5e-b1',
    question: '弧度制转换',
    questionLatex: '150° = \\underline{\\qquad}\\text{ rad}',
    type: 'blank',
    correctAnswer: '5π/6',
    acceptableAnswers: ['\\frac{5\\pi}{6}', '\\dfrac{5\\pi}{6}', '5π/6'],
    explanation: '',
  },
  // 12. 周期与振幅
  {
    id: 's5e-b2',
    question: '周期与振幅',
    questionLatex:
      '\\text{函数 } y=3\\sin\\!\\left(2x-\\dfrac{\\pi}{4}\\right) \\text{ 的最小正周期 } T=\\underline{\\qquad}\\text{，振幅 } A=\\underline{\\qquad}',
    type: 'blank',
    correctAnswer: 'π, 3',
    acceptableAnswers: ['\\pi,3', 'π,3', 'T=π,A=3'],
    explanation: '',
  },
  // 13.【2023新课标I改编】三角函数零点
  {
    id: 's5e-b3',
    question: '三角函数零点（2023新课标I改编）',
    questionLatex:
      '\\text{已知 } f(x)=\\cos\\omega x-1\\;(\\omega>0) \\text{ 在 } [0,\\,2\\pi] \\text{ 上有且仅有 } 3 \\text{ 个零点，则 } \\omega \\text{ 的取值范围是 } \\underline{\\qquad}',
    type: 'blank',
    correctAnswer: '[2, 3)',
    acceptableAnswers: ['[2,3)', '2≤ω<3', '2\\leq\\omega<3'],
    explanation: '',
  },
  // 14. 二倍角
  {
    id: 's5e-b4',
    question: '二倍角',
    questionLatex:
      '\\text{已知 } \\sin\\alpha=\\dfrac{3}{5},\\;\\cos\\alpha=\\dfrac{4}{5}\\text{，则 } \\sin 2\\alpha=\\underline{\\qquad}',
    type: 'blank',
    correctAnswer: '24/25',
    acceptableAnswers: ['\\frac{24}{25}', '\\dfrac{24}{25}', '0.96', '24/25'],
    explanation: '',
  },
  // 15. 辅助角公式
  {
    id: 's5e-b5',
    question: '辅助角公式',
    questionLatex:
      '\\sqrt{3}\\sin x+\\cos x = \\underline{\\qquad}\\;\\sin(x+\\underline{\\qquad})',
    type: 'blank',
    correctAnswer: '2, π/6',
    acceptableAnswers: ['2\\sin(x+\\frac{\\pi}{6})', '2, \\frac{\\pi}{6}', '2,π/6'],
    explanation: '',
  },
  // 16. 余弦定理求边
  {
    id: 's5e-b6',
    question: '余弦定理求边',
    questionLatex:
      '\\text{在 }\\triangle ABC\\text{ 中，}b=3,\\;c=5,\\;A=60°\\text{，则 }a=\\underline{\\qquad}',
    type: 'blank',
    correctAnswer: '√19',
    acceptableAnswers: ['\\sqrt{19}'],
    explanation: '',
  },
];

// 合并导出（供 QuizPanel 使用）
export const stage5ExamQuestions: QuizQuestionData[] = [
  ...stage5ChoiceQuestions,
  ...stage5BlankQuestions,
];

// ── 解答题（仅打印试卷使用，答案在 stage5-exam-answers.tsx）──
export const stage5EssayQuestions: EssayQuestion[] = [
  // 17（10分）：降幂+辅助角→性质综合
  {
    id: 's5e-essay-1',
    questionLatex:
      '\\text{已知函数 } f(x) = \\sqrt{3}\\sin 2x - 2\\sin^2 x\\text{。}\\\\[6pt]' +
      '\\text{（1）将 } f(x) \\text{ 化为 } A\\sin(\\omega x + \\varphi) + B \\text{ 的形式；}\\\\[4pt]' +
      '\\text{（2）求 } f(x) \\text{ 的单调递增区间；}\\\\[4pt]' +
      '\\text{（3）当 } x \\in \\left[0,\\;\\dfrac{\\pi}{2}\\right] \\text{ 时，求 } f(x) \\text{ 的值域。}',
    score: 10,
    lines: 20,
  },
  // 18（10分）：条件等式推角→正弦定理+面积
  {
    id: 's5e-essay-2',
    questionLatex:
      '\\text{在 } \\triangle ABC \\text{ 中，角 } A,B,C \\text{ 的对边分别为 } a,b,c\\text{，}' +
      '\\text{已知 } 2\\sin B\\cos A = \\sin A\\cos C + \\cos A\\sin C\\text{。}\\\\[6pt]' +
      '\\text{（1）求角 } A \\text{ 的大小；}\\\\[4pt]' +
      '\\text{（2）若 } a = 2\\text{，}\\triangle ABC \\text{ 的面积为 } \\sqrt{3}\\text{，求 } b + c \\text{ 的值。}',
    score: 10,
    lines: 17,
  },
  // 19（8分）：诱导公式+二倍角化简→求值
  {
    id: 's5e-essay-3',
    questionLatex:
      '\\text{已知 } \\alpha \\text{ 为第二象限角，且 } \\sin\\alpha + \\cos\\alpha = \\dfrac{\\sqrt{3}}{3}\\text{。}\\\\[6pt]' +
      '\\text{（1）求 } \\sin\\alpha\\cos\\alpha \\text{ 的值；}\\\\[4pt]' +
      '\\text{（2）求 } \\sin\\alpha - \\cos\\alpha \\text{ 的值；}\\\\[4pt]' +
      '\\text{（3）求 } \\dfrac{\\sin\\alpha}{1 - \\dfrac{1}{\\tan\\alpha}} \\text{ 的值。}',
    score: 8,
    lines: 16,
  },
  // 20（6分）：2025高考改编→cos2A+cos2B+面积条件求C和AB
  {
    id: 's5e-essay-4',
    pageBreak: true,
    questionLatex:
      '\\text{（2025高考改编）已知 } \\triangle ABC \\text{ 的面积为 } \\dfrac{1}{4}\\text{，且满足}\\\\[6pt]' +
      '\\cos 2A + \\cos 2B + 2\\sin C = 2\\text{，}\\quad \\cos A\\cos B\\sin C = \\dfrac{1}{4}\\text{。}\\\\[6pt]' +
      '\\text{（1）求角 } C \\text{ 的大小；}\\\\[4pt]' +
      '\\text{（2）求 } AB \\text{ 的值。}',
    score: 6,
    lines: 18,
  },
  // 21（6分）：2023新课标I→解三角形
  {
    id: 's5e-essay-5',
    questionLatex:
      '\\text{（2023 新课标 I）在 } \\triangle ABC \\text{ 中，} A + B = 3C\\text{，}2\\sin(A-C) = \\sin B\\text{。}\\\\[6pt]' +
      '\\text{（1）求 } \\sin A \\text{；}\\\\[4pt]' +
      '\\text{（2）设 } AB = 5\\text{，求 } AB \\text{ 边上的高。}',
    score: 6,
    lines: 16,
  },
];
