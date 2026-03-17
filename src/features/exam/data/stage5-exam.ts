import type { QuizQuestionData } from '@/types';
import type { EssayQuestion } from '@/components/shared/ExamPaper';

import { trigPrereqPractice } from '@/features/trig/data/prereq-questions';
import { trigFuncExam, trigGraphPractice } from '@/features/trig/data/func-questions';
import {
  sumDiffPractice,
  comprehensivePractice,
} from '@/features/trig/data/identity-questions';
import {
  sineLawPractice,
  cosineLawPractice,
  areaPractice,
} from '@/features/trig/data/solve-questions';

// ── 第五阶段考试：三角世界 ──
// 选择题 10×5 = 50分，填空题 6×5 = 30分，解答题 10+10+8+6+6 = 40分，共 120 分

/** 按 ID 从题库中筛选 */
function pick(pool: QuizQuestionData[], ids: string[]): QuizQuestionData[] {
  const idSet = new Set(ids);
  return pool.filter((q) => idSet.has(q.id));
}

/** 加前缀避免 ID 冲突 */
function prefixIds(questions: QuizQuestionData[], prefix: string): QuizQuestionData[] {
  return questions.map((q) => ({ ...q, id: `${prefix}-${q.id}` }));
}

// ── 选择题精选（10 题） ──
// 覆盖：前置(1) + 三角函数(3) + 恒等变换(3) + 解三角形(3)
const choicePicks = [
  ...pick(trigPrereqPractice, [
    'tp-6',   // sin135° 诱导公式
  ]),
  ...pick(trigGraphPractice, [
    'tg-p1',  // cos x 递减区间
  ]),
  ...pick(trigFuncExam, [
    'tf-e4',  // 图像变换（先平移后伸缩）
    'tf-e7',  // 给定区间上的最值
  ]),
  ...pick(sumDiffPractice, [
    'ti-sd-1', // sin75° 精确值
  ]),
  ...pick(comprehensivePractice, [
    'ti-comp-1', // sin2α（二象限补全 + 二倍角）
    'ti-comp-2', // tan(α+β)=1 展开求值
  ]),
  ...pick(cosineLawPractice, [
    'st-cl-4', // a²=b²+c²-bc，求∠A（对比余弦定理）
  ]),
  ...pick(sineLawPractice, [
    'st-sl-5', // 正弦定理解的个数判断
  ]),
  ...pick(areaPractice, [
    'st-ar-1', // 面积公式直接代入
  ]),
];

// ── 填空题（6 题） ──
// 覆盖：前置(1) + 三角函数(2) + 恒等变换(2) + 解三角形(1)
const blankQuestions: QuizQuestionData[] = [
  {
    id: 's5b-1',
    question: '将 150° 转换为弧度制',
    questionLatex: '150° = \\underline{\\qquad}\\text{ rad}',
    type: 'blank',
    correctAnswer: '5π/6',
    acceptableAnswers: ['\\frac{5\\pi}{6}', '\\dfrac{5\\pi}{6}'],
    explanation: '',
    explanationLatex: '150° = 150 \\times \\dfrac{\\pi}{180} = \\dfrac{5\\pi}{6}',
  },
  {
    id: 's5b-2',
    question: '诱导公式',
    questionLatex: '\\sin\\!\\left(\\dfrac{\\pi}{2} + \\alpha\\right) = \\underline{\\qquad}',
    type: 'blank',
    correctAnswer: 'cosα',
    acceptableAnswers: ['\\cos\\alpha', 'cos α', 'cos\\alpha'],
    explanation: '',
    explanationLatex: '\\dfrac{\\pi}{2} \\text{ 是奇数个 } \\dfrac{\\pi}{2}\\text{，名互换 sin→cos；第一象限为正}\\\\[4pt]\\therefore \\sin\\!\\left(\\dfrac{\\pi}{2}+\\alpha\\right) = \\cos\\alpha',
  },
  {
    id: 's5b-3',
    question: '周期',
    questionLatex: '\\text{函数 } y = 3\\sin\\!\\left(2x - \\dfrac{\\pi}{4}\\right) \\text{ 的最小正周期 } T = \\underline{\\qquad}',
    type: 'blank',
    correctAnswer: 'π',
    acceptableAnswers: ['\\pi', 'pi'],
    explanation: '',
    explanationLatex: 'T = \\dfrac{2\\pi}{\\omega} = \\dfrac{2\\pi}{2} = \\pi',
  },
  {
    id: 's5b-4',
    question: '二倍角',
    questionLatex: '\\text{已知 } \\sin\\alpha = \\dfrac{3}{5}\\text{，}\\cos\\alpha = \\dfrac{4}{5}\\text{，则 } \\sin 2\\alpha = \\underline{\\qquad}',
    type: 'blank',
    correctAnswer: '24/25',
    acceptableAnswers: ['\\frac{24}{25}', '\\dfrac{24}{25}', '0.96'],
    explanation: '',
    explanationLatex: '\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha = 2 \\times \\dfrac{3}{5} \\times \\dfrac{4}{5} = \\dfrac{24}{25}',
  },
  {
    id: 's5b-5',
    question: '辅助角',
    questionLatex: '\\sqrt{3}\\sin x + \\cos x = \\underline{\\qquad}\\;\\sin(x + \\underline{\\qquad})',
    type: 'blank',
    correctAnswer: '2, π/6',
    acceptableAnswers: ['2\\sin(x+\\frac{\\pi}{6})', '2, \\frac{\\pi}{6}'],
    explanation: '',
    explanationLatex: 'a=\\sqrt{3},\\;b=1,\\; R=\\sqrt{3+1}=2,\\; \\tan\\varphi=\\dfrac{1}{\\sqrt{3}} \\Rightarrow \\varphi=\\dfrac{\\pi}{6}\\\\[4pt]\\therefore \\sqrt{3}\\sin x+\\cos x = 2\\sin\\!\\left(x+\\dfrac{\\pi}{6}\\right)',
  },
  {
    id: 's5b-6',
    question: '余弦定理求边',
    questionLatex: '\\text{在 }\\triangle ABC\\text{ 中，}b=3,\\;c=5,\\;A=60°\\text{，则 }a = \\underline{\\qquad}',
    type: 'blank',
    correctAnswer: '√19',
    acceptableAnswers: ['\\sqrt{19}'],
    explanation: '',
    explanationLatex: 'a^2 = b^2+c^2-2bc\\cos A = 9+25-2 \\times 3 \\times 5 \\times \\dfrac{1}{2} = 34-15 = 19\\\\[4pt]\\therefore a = \\sqrt{19}',
  },
];

// 分节导出（供 ExamPaper 使用）
export const stage5ChoiceQuestions = prefixIds(choicePicks, 's5e');
export const stage5BlankQuestions = prefixIds(blankQuestions, 's5e');

// 合并导出（供 QuizPanel 使用）
export const stage5ExamQuestions: QuizQuestionData[] = [
  ...stage5ChoiceQuestions,
  ...stage5BlankQuestions,
];

// ── 解答题（仅打印试卷使用）──
// 题 17（10分）：降幂+辅助角→性质综合（2023新课标I卷风格）
// 题 18（10分）：条件等式推角→正弦定理+面积（2024新课标I卷风格）
// 题 19（8分）：诱导公式+二倍角化简→已知值求值（综合运算）
// 题 20（6分）：三角函数图像→由图反求解析式+性质
// 题 21（6分）：解三角形→由面积+边角关系求边+判断三角形形状
export const stage5EssayQuestions: EssayQuestion[] = [
  {
    id: 's5e-essay-1',
    questionLatex:
      '\\text{已知函数 } f(x) = \\sqrt{3}\\sin 2x - 2\\sin^2 x\\text{。}\\\\[6pt]' +
      '\\text{（1）将 } f(x) \\text{ 化为 } A\\sin(\\omega x + \\varphi) + B \\text{ 的形式；}\\\\[4pt]' +
      '\\text{（2）求 } f(x) \\text{ 的单调递增区间；}\\\\[4pt]' +
      '\\text{（3）当 } x \\in \\left[0,\\;\\dfrac{\\pi}{2}\\right] \\text{ 时，求 } f(x) \\text{ 的值域。}',
    score: 10,
    lines: 20,
    answerLatex:
      '\\text{（1）降幂：} 2\\sin^2 x = 1-\\cos 2x \\\\[4pt]' +
      'f(x) = \\sqrt{3}\\sin 2x - (1-\\cos 2x) = \\sqrt{3}\\sin 2x + \\cos 2x - 1 \\\\[4pt]' +
      '\\text{辅助角：} \\sqrt{3}\\sin 2x+\\cos 2x = 2\\sin\\!\\left(2x+\\dfrac{\\pi}{6}\\right) \\\\[4pt]' +
      '\\therefore f(x) = 2\\sin\\!\\left(2x+\\dfrac{\\pi}{6}\\right) - 1 \\\\[6pt]' +
      '\\text{（2）令 } -\\dfrac{\\pi}{2}+2k\\pi \\leq 2x+\\dfrac{\\pi}{6} \\leq \\dfrac{\\pi}{2}+2k\\pi \\\\[4pt]' +
      '\\Rightarrow -\\dfrac{\\pi}{3}+k\\pi \\leq x \\leq \\dfrac{\\pi}{6}+k\\pi \\quad (k\\in\\mathbb{Z}) \\\\[6pt]' +
      '\\text{（3）} x\\in\\left[0,\\dfrac{\\pi}{2}\\right] \\Rightarrow 2x+\\dfrac{\\pi}{6} \\in \\left[\\dfrac{\\pi}{6},\\;\\dfrac{7\\pi}{6}\\right] \\\\[4pt]' +
      '\\sin\\!\\left(2x+\\dfrac{\\pi}{6}\\right) \\in \\left[-\\dfrac{1}{2},\\;1\\right] \\\\[4pt]' +
      '\\therefore f(x) \\in \\left[2\\!\\times\\!(-\\tfrac{1}{2})-1,\\; 2\\!\\times\\!1-1\\right] = [-2,\\;1]',
  },
  {
    id: 's5e-essay-2',
    questionLatex:
      '\\text{在 } \\triangle ABC \\text{ 中，角 } A,B,C \\text{ 的对边分别为 } a,b,c\\text{，}' +
      '\\text{已知 } 2\\sin B\\cos A = \\sin A\\cos C + \\cos A\\sin C\\text{。}\\\\[6pt]' +
      '\\text{（1）求角 } A \\text{ 的大小；}\\\\[4pt]' +
      '\\text{（2）若 } a = 2\\text{，}\\triangle ABC \\text{ 的面积为 } \\sqrt{3}\\text{，求 } b + c \\text{ 的值。}',
    score: 10,
    lines: 17,
    answerLatex:
      '\\text{（1）由和角公式：} \\sin A\\cos C+\\cos A\\sin C = \\sin(A+C) \\\\[4pt]' +
      '\\text{又 } A+B+C=\\pi \\Rightarrow A+C=\\pi-B \\\\[4pt]' +
      '\\therefore \\sin(A+C)=\\sin(\\pi-B)=\\sin B \\\\[4pt]' +
      '\\text{原式变为 } 2\\sin B\\cos A = \\sin B \\\\[4pt]' +
      '\\sin B \\neq 0 \\Rightarrow \\cos A = \\dfrac{1}{2} \\Rightarrow A = \\dfrac{\\pi}{3} \\\\[6pt]' +
      '\\text{（2）面积 } S = \\dfrac{1}{2}bc\\sin A = \\dfrac{1}{2}bc\\cdot\\dfrac{\\sqrt{3}}{2} = \\dfrac{\\sqrt{3}}{4}bc = \\sqrt{3} \\\\[4pt]' +
      '\\therefore bc = 4 \\\\[4pt]' +
      '\\text{由余弦定理 } a^2 = b^2+c^2-2bc\\cos A \\\\[4pt]' +
      '4 = b^2+c^2-2\\cdot 4\\cdot\\dfrac{1}{2} = b^2+c^2-4 \\\\[4pt]' +
      'b^2+c^2 = 8,\\quad (b+c)^2 = b^2+c^2+2bc = 8+8 = 16 \\\\[4pt]' +
      '\\therefore b+c = 4',
  },
  {
    id: 's5e-essay-3',
    questionLatex:
      '\\text{已知 } \\alpha \\text{ 为第二象限角，且 } \\sin\\alpha + \\cos\\alpha = \\dfrac{\\sqrt{3}}{3}\\text{。}\\\\[6pt]' +
      '\\text{（1）求 } \\sin\\alpha\\cos\\alpha \\text{ 的值；}\\\\[4pt]' +
      '\\text{（2）求 } \\sin\\alpha - \\cos\\alpha \\text{ 的值；}\\\\[4pt]' +
      '\\text{（3）求 } \\dfrac{\\sin\\alpha}{1 - \\dfrac{1}{\\tan\\alpha}} \\text{ 的值。}',
    score: 8,
    lines: 16,
    answerLatex:
      '\\text{（1）两边平方：} (\\sin\\alpha+\\cos\\alpha)^2 = \\dfrac{1}{3} \\\\[4pt]' +
      '\\sin^2\\alpha+2\\sin\\alpha\\cos\\alpha+\\cos^2\\alpha = \\dfrac{1}{3} \\\\[4pt]' +
      '1+2\\sin\\alpha\\cos\\alpha = \\dfrac{1}{3} \\Rightarrow \\sin\\alpha\\cos\\alpha = -\\dfrac{1}{3} \\\\[6pt]' +
      '\\text{（2）} (\\sin\\alpha-\\cos\\alpha)^2 = 1-2\\sin\\alpha\\cos\\alpha = 1+\\dfrac{2}{3} = \\dfrac{5}{3} \\\\[4pt]' +
      '\\alpha \\text{ 在第二象限} \\Rightarrow \\sin\\alpha>0,\\;\\cos\\alpha<0 \\Rightarrow \\sin\\alpha-\\cos\\alpha>0 \\\\[4pt]' +
      '\\therefore \\sin\\alpha-\\cos\\alpha = \\dfrac{\\sqrt{15}}{3} \\\\[6pt]' +
      '\\text{（3）原式} = \\dfrac{\\sin\\alpha}{1-\\frac{\\cos\\alpha}{\\sin\\alpha}} = \\dfrac{\\sin\\alpha}{\\frac{\\sin\\alpha-\\cos\\alpha}{\\sin\\alpha}} = \\dfrac{\\sin^2\\alpha}{\\sin\\alpha-\\cos\\alpha} \\\\[4pt]' +
      '\\text{由（1）（2）解方程组得 } \\sin\\alpha = \\dfrac{\\frac{\\sqrt{3}}{3}+\\frac{\\sqrt{15}}{3}}{2} = \\dfrac{\\sqrt{3}+\\sqrt{15}}{6} \\\\[4pt]' +
      '\\sin^2\\alpha = \\dfrac{(\\sqrt{3}+\\sqrt{15})^2}{36} = \\dfrac{3+2\\sqrt{45}+15}{36} = \\dfrac{18+6\\sqrt{5}}{36} = \\dfrac{3+\\sqrt{5}}{6} \\\\[4pt]' +
      '\\therefore \\text{原式} = \\dfrac{\\frac{3+\\sqrt{5}}{6}}{\\frac{\\sqrt{15}}{3}} = \\dfrac{3+\\sqrt{5}}{2\\sqrt{15}} = \\dfrac{(3+\\sqrt{5})\\sqrt{15}}{30} = \\dfrac{3\\sqrt{15}+\\sqrt{75}}{30} = \\dfrac{3\\sqrt{15}+5\\sqrt{3}}{30}',
  },
  {
    id: 's5e-essay-4',
    pageBreak: true,
    questionLatex:
      '\\text{已知函数 } f(x) = A\\sin(\\omega x+\\varphi)\\;(A>0,\\;\\omega>0,\\;|\\varphi|<\\dfrac{\\pi}{2})\\text{ 的}' +
      '\\text{相邻两条对称轴之间的距离为 } \\dfrac{\\pi}{2}\\text{，且 } f\\!\\left(\\dfrac{\\pi}{6}\\right) = \\sqrt{3}\\text{。}\\\\[6pt]' +
      '\\text{（1）求 } f(x) \\text{ 的解析式；}\\\\[4pt]' +
      '\\text{（2）求 } f(x) \\text{ 在 } \\left[-\\dfrac{\\pi}{4},\\;\\dfrac{\\pi}{4}\\right] \\text{ 上的最大值和最小值。}',
    score: 6,
    lines: 16,
    answerLatex:
      '\\text{（1）相邻对称轴距离} = \\dfrac{T}{2} = \\dfrac{\\pi}{2} \\Rightarrow T = \\pi \\Rightarrow \\omega = \\dfrac{2\\pi}{T} = 2 \\\\[4pt]' +
      'f\\!\\left(\\dfrac{\\pi}{6}\\right) = A\\sin\\!\\left(\\dfrac{\\pi}{3}+\\varphi\\right) = \\sqrt{3} \\\\[4pt]' +
      '\\text{尝试 } A=\\sqrt{3}\\text{：} \\sin\\!\\left(\\dfrac{\\pi}{3}+\\varphi\\right) = 1 \\Rightarrow \\dfrac{\\pi}{3}+\\varphi = \\dfrac{\\pi}{2} \\Rightarrow \\varphi = \\dfrac{\\pi}{6} \\\\[4pt]' +
      '\\text{验证 } |\\varphi| = \\dfrac{\\pi}{6} < \\dfrac{\\pi}{2} \\;\\checkmark \\\\[4pt]' +
      '\\therefore f(x) = \\sqrt{3}\\sin\\!\\left(2x+\\dfrac{\\pi}{6}\\right) \\\\[6pt]' +
      '\\text{（2）} x \\in \\left[-\\dfrac{\\pi}{4},\\dfrac{\\pi}{4}\\right] \\Rightarrow 2x+\\dfrac{\\pi}{6} \\in \\left[-\\dfrac{\\pi}{3},\\dfrac{2\\pi}{3}\\right] \\\\[4pt]' +
      '\\sin\\!\\left(2x+\\dfrac{\\pi}{6}\\right) \\in \\left[-\\dfrac{\\sqrt{3}}{2},\\;1\\right] \\\\[4pt]' +
      'f_{\\max} = \\sqrt{3},\\; f_{\\min} = \\sqrt{3}\\!\\times\\!\\left(-\\dfrac{\\sqrt{3}}{2}\\right) = -\\dfrac{3}{2}',
  },
  {
    id: 's5e-essay-5',
    questionLatex:
      '\\text{在 } \\triangle ABC \\text{ 中，角 } A,B,C \\text{ 的对边分别为 } a,b,c\\text{，}' +
      '\\text{已知 } b = 3\\text{，}c = 1\\text{，}A = 60°\\text{。}\\\\[6pt]' +
      '\\text{（1）求 } a \\text{ 的值；}\\\\[4pt]' +
      '\\text{（2）求 } \\sin C \\text{ 的值，并判断 } \\triangle ABC \\text{ 是锐角三角形还是钝角三角形。}',
    score: 6,
    lines: 14,
    answerLatex:
      '\\text{（1）由余弦定理 } a^2 = b^2+c^2-2bc\\cos A \\\\[4pt]' +
      '= 9+1-2\\times 3\\times 1\\times\\dfrac{1}{2} = 10-3 = 7 \\\\[4pt]' +
      '\\therefore a = \\sqrt{7} \\\\[6pt]' +
      '\\text{（2）由正弦定理 } \\dfrac{a}{\\sin A} = \\dfrac{c}{\\sin C} \\\\[4pt]' +
      '\\sin C = \\dfrac{c\\sin A}{a} = \\dfrac{1\\times\\frac{\\sqrt{3}}{2}}{\\sqrt{7}} = \\dfrac{\\sqrt{3}}{2\\sqrt{7}} = \\dfrac{\\sqrt{21}}{14} \\\\[4pt]' +
      '\\text{因为 } c=1 \\text{ 是最短边，} \\sin C = \\dfrac{\\sqrt{21}}{14} < \\dfrac{1}{2} \\Rightarrow C < 30° \\\\[4pt]' +
      '\\text{又 } A=60°,\\; B = 180°-60°-C > 90° \\\\[4pt]' +
      '\\therefore B \\text{ 为钝角，}\\triangle ABC \\text{ 是钝角三角形}',
  },
];
