import type { QuizQuestionData } from '@/types';

// ── 5.0 三角前置知识 · 综合练习（合并练一练 + 自测） ──
// 覆盖五个知识点：弧度制、单位圆、特殊角、象限符号、函数性质术语
export const trigPrereqPractice: QuizQuestionData[] = [
  // ── 一、弧度制（2 题） ──
  {
    id: 'tp-1',
    question: '将 120° 转换为弧度制，结果是',
    questionLatex: '\\text{将 } 120° \\text{ 转换为弧度制，结果是}',
    options: [
      { label: 'A', value: '\\dfrac{\\pi}{3}', isLatex: true },
      { label: 'B', value: '\\dfrac{2\\pi}{3}', isLatex: true },
      { label: 'C', value: '\\dfrac{3\\pi}{4}', isLatex: true },
      { label: 'D', value: '\\dfrac{5\\pi}{6}', isLatex: true },
    ],
    correctAnswer: '\\dfrac{2\\pi}{3}',
    explanation: '',
    explanationLatex: '120° = 120 \\times \\dfrac{\\pi}{180} = \\dfrac{2\\pi}{3}',
  },
  {
    id: 'tp-2',
    question: '弧度 5π/6 等于多少度？',
    questionLatex: '\\dfrac{5\\pi}{6} \\text{ 弧度等于多少度？}',
    options: [
      { label: 'A', value: '120°', isLatex: false },
      { label: 'B', value: '135°', isLatex: false },
      { label: 'C', value: '150°', isLatex: false },
      { label: 'D', value: '160°', isLatex: false },
    ],
    correctAnswer: '150°',
    explanation: '',
    explanationLatex: '\\dfrac{5\\pi}{6} = \\dfrac{5\\pi}{6} \\times \\dfrac{180°}{\\pi} = \\dfrac{5 \\times 180°}{6} = 150°',
  },

  // ── 二、单位圆与三角函数定义（2 题） ──
  {
    id: 'tp-3',
    question: '在单位圆上，角 θ 对应的点 P 的坐标是',
    questionLatex: '\\text{在单位圆上，角 } \\theta \\text{ 对应的点 } P \\text{ 的坐标是}',
    options: [
      { label: 'A', value: '(\\sin\\theta,\\; \\cos\\theta)', isLatex: true },
      { label: 'B', value: '(\\cos\\theta,\\; \\sin\\theta)', isLatex: true },
      { label: 'C', value: '(\\tan\\theta,\\; \\sin\\theta)', isLatex: true },
      { label: 'D', value: '(1,\\; \\theta)', isLatex: true },
    ],
    correctAnswer: '(\\cos\\theta,\\; \\sin\\theta)',
    explanation: '',
    explanationLatex: '\\text{单位圆上 } P = (\\cos\\theta,\\; \\sin\\theta)\\\\[4pt]\\text{x 坐标 = cos，y 坐标 = sin}',
  },
  {
    id: 'tp-4',
    question: 'sin²θ + cos²θ 的值等于',
    questionLatex: '\\sin^2\\theta + \\cos^2\\theta \\text{ 的值等于}',
    options: [
      { label: 'A', value: '0', isLatex: false },
      { label: 'B', value: '1', isLatex: false },
      { label: 'C', value: '2', isLatex: false },
      { label: 'D', value: '不确定', isLatex: false },
    ],
    correctAnswer: '1',
    explanation: '',
    explanationLatex: '\\text{勾股定理：单位圆上 } x^2 + y^2 = 1\\\\[4pt]\\therefore \\sin^2\\theta + \\cos^2\\theta = 1',
  },

  // ── 三、特殊角的三角函数值（2 题） ──
  {
    id: 'tp-5',
    question: 'cos 60° 的值是',
    questionLatex: '\\cos 60° \\text{ 的值是}',
    options: [
      { label: 'A', value: '\\dfrac{1}{2}', isLatex: true },
      { label: 'B', value: '\\dfrac{\\sqrt{2}}{2}', isLatex: true },
      { label: 'C', value: '\\dfrac{\\sqrt{3}}{2}', isLatex: true },
      { label: 'D', value: '1', isLatex: false },
    ],
    correctAnswer: '\\dfrac{1}{2}',
    explanation: '',
    explanationLatex: '\\text{口诀：cos 从大到小（1→0），根号下 4→0 除以 2}\\\\[4pt]\\cos 60° = \\dfrac{\\sqrt{1}}{2} = \\dfrac{1}{2}',
  },
  {
    id: 'tp-6',
    question: 'sin 135° 的值是',
    questionLatex: '\\sin 135° \\text{ 的值是}',
    options: [
      { label: 'A', value: '\\dfrac{1}{2}', isLatex: true },
      { label: 'B', value: '-\\dfrac{\\sqrt{2}}{2}', isLatex: true },
      { label: 'C', value: '\\dfrac{\\sqrt{2}}{2}', isLatex: true },
      { label: 'D', value: '\\dfrac{\\sqrt{3}}{2}', isLatex: true },
    ],
    correctAnswer: '\\dfrac{\\sqrt{2}}{2}',
    explanation: '',
    explanationLatex: '135° = 180° - 45°\\\\[4pt]\\sin(180°-\\theta) = \\sin\\theta\\\\[4pt]\\sin 135° = \\sin 45° = \\dfrac{\\sqrt{2}}{2}',
  },

  // ── 四、各象限的符号规律（2 题） ──
  {
    id: 'tp-7',
    question: '在第三象限（180°~270°），下列哪个三角函数值为正？',
    options: [
      { label: 'A', value: 'sin θ', isLatex: false },
      { label: 'B', value: 'cos θ', isLatex: false },
      { label: 'C', value: 'tan θ', isLatex: false },
      { label: 'D', value: '以上都不是', isLatex: false },
    ],
    correctAnswer: 'tan θ',
    explanation: '',
    explanationLatex: '\\text{口诀：一全正，二正弦，三正切，四余弦}\\\\[4pt]\\text{第三象限：sin−, cos−, 但 tan = sin/cos = 负/负 = 正}',
  },
  {
    id: 'tp-8',
    question: 'cos 210° 的符号是',
    questionLatex: '\\cos 210° \\text{ 的符号是}',
    options: [
      { label: 'A', value: '正', isLatex: false },
      { label: 'B', value: '负', isLatex: false },
      { label: 'C', value: '零', isLatex: false },
      { label: 'D', value: '无法确定', isLatex: false },
    ],
    correctAnswer: '负',
    explanation: '',
    explanationLatex: '210° \\text{ 在第三象限（180°~270°）}\\\\[4pt]\\text{第三象限 cos < 0（x 坐标为负）}\\\\[4pt]\\therefore \\cos 210° < 0',
  },

  // ── 五、函数性质术语（2 题） ──
  {
    id: 'tp-9',
    question: '"函数在某区间上 x 增大时 y 也增大"描述的是哪个性质？',
    options: [
      { label: 'A', value: '周期性', isLatex: false },
      { label: 'B', value: '奇偶性', isLatex: false },
      { label: 'C', value: '单调递增', isLatex: false },
      { label: 'D', value: '对称性', isLatex: false },
    ],
    correctAnswer: '单调递增',
    explanation: '',
    explanationLatex: '\\text{递增 = x 增大 → y 也增大（图像在"上坡"）}',
  },
  {
    id: 'tp-10',
    question: '三角函数图像中，"波峰/波谷处"对应的是',
    options: [
      { label: 'A', value: '对称中心', isLatex: false },
      { label: 'B', value: '对称轴', isLatex: false },
      { label: 'C', value: '渐近线', isLatex: false },
      { label: 'D', value: '零点', isLatex: false },
    ],
    correctAnswer: '对称轴',
    explanation: '',
    explanationLatex: '\\text{波峰/波谷处 = 对称轴（一条竖线，左右折叠重合）}\\\\[4pt]\\text{过零点处 = 对称中心（一个点，旋转 180° 重合）}',
  },
];

// 保留 trigPrereqQuiz 为空数组（已合并到 practice）
export const trigPrereqQuiz: QuizQuestionData[] = [];
