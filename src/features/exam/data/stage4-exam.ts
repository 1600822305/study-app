import type { QuizQuestionData } from '@/types';
import type { EssayQuestion } from '@/components/shared/ExamPaper';

import { vectorExamQuestions } from '@/features/vector/data/vector-exam';

// ── 第四阶段考试：平面向量 ──
// 选择题 6×5 = 30分，填空题 5×5 = 25分，解答题 20+15+15+15 = 65分，共 120 分

/** 按 ID 从题库中筛选 */
function pick(pool: QuizQuestionData[], ids: string[]): QuizQuestionData[] {
  const idSet = new Set(ids);
  return pool.filter((q) => idSet.has(q.id));
}

/** 加前缀避免 ID 冲突 */
function prefixIds(questions: QuizQuestionData[], prefix: string): QuizQuestionData[] {
  return questions.map((q) => ({ ...q, id: `${prefix}-${q.id}` }));
}

// 选择题精选（6题）：垂直判定、平行判定、夹角、展开求模、圆上向量、垂直+展开综合
const choicePicks = pick(vectorExamQuestions, [
  'vex1',  // 垂直判定求参数（2023真题）
  'vex2',  // 平行判定求参数
  'vex3',  // 数量积求夹角
  'vex4',  // |a-2b| 展开求模
  'vex9',  // 圆上向量数量积（带图）
  'vex10', // 垂直条件+展开求模综合
]);

// 填空题精选（5题）：坐标综合、平行四边形、三角形向量、对角线交点、夹角余弦
const blankPicks = pick(vectorExamQuestions, [
  'vex5',  // |a+b|=√10 求 x
  'vex6',  // 平行四边形求第四顶点
  'vex7',  // 三角形中 DE 用基底表示（带图）
  'vex8',  // 平行四边形对角线交点（带图）
  'vex11', // 数量积求夹角余弦
]);

// 分节导出（供 ExamPaper 使用）
export const stage4ChoiceQuestions = prefixIds(choicePicks, 's4e');
export const stage4BlankQuestions = prefixIds(blankPicks, 's4e');

// 合并导出（供 QuizPanel 使用）
export const stage4ExamQuestions: QuizQuestionData[] = [
  ...stage4ChoiceQuestions,
  ...stage4BlankQuestions,
];

// ── 解答题（仅打印试卷使用） ──
export const stage4EssayQuestions: EssayQuestion[] = [
  {
    id: 's4e-essay-1',
    questionLatex:
      '\\text{已知向量 } \\vec{a}=(1,2),\\; \\vec{b}=(3,1)\\text{。}\\\\[6pt]' +
      '\\text{（1）求 } \\vec{a} \\cdot \\vec{b} \\text{ 和 } |\\vec{a}+\\vec{b}|\\text{；}\\\\[4pt]' +
      '\\text{（2）若 } \\vec{c} = \\vec{a} + t\\vec{b}\\text{，且 } \\vec{c} \\perp \\vec{a}\\text{，求实数 } t \\text{ 的值；}\\\\[4pt]' +
      '\\text{（3）求 } \\vec{a} \\text{ 与 } \\vec{b} \\text{ 的夹角 } \\theta\\text{。}',
    score: 20,
    lines: 12,
    answerLatex:
      '\\text{（1）} \\vec{a} \\cdot \\vec{b} = 1 \\times 3 + 2 \\times 1 = 5 \\\\[4pt]' +
      '\\vec{a}+\\vec{b} = (4,3),\\; |\\vec{a}+\\vec{b}| = \\sqrt{16+9} = 5 \\\\[6pt]' +
      '\\text{（2）} \\vec{c} = \\vec{a}+t\\vec{b} = (1+3t,\\; 2+t) \\\\[4pt]' +
      '\\vec{c} \\perp \\vec{a} \\Rightarrow \\vec{c} \\cdot \\vec{a} = 0 \\\\[4pt]' +
      '1(1+3t) + 2(2+t) = 1+3t+4+2t = 5+5t = 0 \\\\[4pt]' +
      't = -1,\\; \\vec{c} = (-2,\\; 1) \\\\[4pt]' +
      '\\text{验证：} (-2)(1)+1(2)=0 \\;\\checkmark \\\\[6pt]' +
      '\\text{（3）} |\\vec{a}| = \\sqrt{5},\\; |\\vec{b}| = \\sqrt{10} \\\\[4pt]' +
      '\\cos\\theta = \\dfrac{5}{\\sqrt{5} \\times \\sqrt{10}} = \\dfrac{5}{\\sqrt{50}} = \\dfrac{5}{5\\sqrt{2}} = \\dfrac{\\sqrt{2}}{2} \\\\[4pt]' +
      '\\theta = 45\\degree',
  },
  {
    id: 's4e-essay-2',
    questionDiagram: 'essay-parallelogram',
    questionLatex:
      '\\text{如图，在平行四边形 } ABCD \\text{ 中，} A(0,0),\\; B(4,2),\\; D(1,3)\\text{。}\\\\[6pt]' +
      '\\text{（1）求 } C \\text{ 的坐标及对角线交点 } O \\text{ 的坐标；}\\\\[4pt]' +
      '\\text{（2）求 } \\overrightarrow{AC} \\cdot \\overrightarrow{BD}\\text{；}\\\\[4pt]' +
      '\\text{（3）若点 } P \\text{ 在线段 } AB \\text{ 上，且 } \\overrightarrow{DP} \\perp \\overrightarrow{AB}\\text{，求 } P \\text{ 的坐标。}',
    score: 15,
    lines: 14,
    answerLatex:
      '\\text{（1）} \\overrightarrow{AB}=(4,2),\\; \\overrightarrow{AD}=(1,3) \\\\[4pt]' +
      '\\overrightarrow{AC} = \\overrightarrow{AB}+\\overrightarrow{AD} = (5,5) \\Rightarrow C(5,5) \\\\[4pt]' +
      'O = \\text{AC中点} = \\left(\\dfrac{5}{2},\\; \\dfrac{5}{2}\\right) \\\\[6pt]' +
      '\\text{（2）} \\overrightarrow{AC}=(5,5),\\; \\overrightarrow{BD}=D-B=(1-4,\\;3-2)=(-3,1) \\\\[4pt]' +
      '\\overrightarrow{AC}\\cdot\\overrightarrow{BD} = 5 \\times (-3) + 5 \\times 1 = -15+5 = -10 \\\\[6pt]' +
      '\\text{（3）} P \\text{ 在 } AB \\text{ 上：} P = A + t\\overrightarrow{AB} = (4t,\\; 2t),\\; 0 \\leq t \\leq 1 \\\\[4pt]' +
      '\\overrightarrow{DP} = P - D = (4t-1,\\; 2t-3) \\\\[4pt]' +
      '\\overrightarrow{DP} \\perp \\overrightarrow{AB}：\\; 4(4t-1)+2(2t-3)=0 \\\\[4pt]' +
      '16t-4+4t-6=0 \\Rightarrow 20t=10 \\Rightarrow t=\\dfrac{1}{2} \\\\[4pt]' +
      'P = (2,\\; 1)',
  },
  {
    id: 's4e-essay-3',
    pageBreak: true,
    questionDiagram: 'essay-triangle-abc',
    questionLatex:
      '\\text{如图，在 } \\triangle ABC \\text{ 中，} A(2,1),\\; B(6,3),\\; C(4,7)\\text{。}\\\\[6pt]' +
      '\\text{（1）求 } \\overrightarrow{AB} \\cdot \\overrightarrow{AC}\\text{，并判断 } \\triangle ABC \\text{ 是否为直角三角形；}\\\\[4pt]' +
      '\\text{（2）设 } M \\text{ 是 } BC \\text{ 的中点，求 } |\\overrightarrow{AM}|\\text{；}\\\\[4pt]' +
      '\\text{（3）求 } \\cos\\angle BAC \\text{ 的值。}',
    score: 15,
    lines: 15,
    answerLatex:
      '\\overrightarrow{AB} = (4,2),\\; \\overrightarrow{AC} = (2,6) \\\\[6pt]' +
      '\\text{（1）} \\overrightarrow{AB}\\cdot\\overrightarrow{AC} = 4 \\times 2 + 2 \\times 6 = 8+12 = 20 \\neq 0 \\\\[4pt]' +
      '\\therefore \\angle BAC \\neq 90\\degree \\\\[4pt]' +
      '\\overrightarrow{AB}\\cdot\\overrightarrow{BC}：\\; \\overrightarrow{BC}=(-2,4),\\; 4(-2)+2(4)=0 \\\\[4pt]' +
      '\\therefore \\overrightarrow{AB} \\perp \\overrightarrow{BC},\\; \\angle ABC = 90\\degree\\text{，是直角三角形} \\\\[6pt]' +
      '\\text{（2）} M = \\left(\\dfrac{6+4}{2},\\; \\dfrac{3+7}{2}\\right) = (5,5) \\\\[4pt]' +
      '\\overrightarrow{AM} = (5-2,\\; 5-1) = (3,4) \\\\[4pt]' +
      '|\\overrightarrow{AM}| = \\sqrt{9+16} = 5 \\\\[6pt]' +
      '\\text{（3）} |\\overrightarrow{AB}| = \\sqrt{16+4} = 2\\sqrt{5},\\; |\\overrightarrow{AC}| = \\sqrt{4+36} = 2\\sqrt{10} \\\\[4pt]' +
      '\\cos\\angle BAC = \\dfrac{\\overrightarrow{AB}\\cdot\\overrightarrow{AC}}{|\\overrightarrow{AB}||\\overrightarrow{AC}|} = \\dfrac{20}{2\\sqrt{5} \\times 2\\sqrt{10}} = \\dfrac{20}{4\\sqrt{50}} = \\dfrac{20}{20\\sqrt{2}} = \\dfrac{\\sqrt{2}}{2} \\\\[4pt]' +
      '\\therefore \\angle BAC = 45\\degree',
  },
  {
    id: 's4e-essay-4',
    questionDiagram: 'essay-triangle-mid-n',
    questionLatex:
      '\\text{如图，在 } \\triangle OAB \\text{ 中，} \\overrightarrow{OA} = \\vec{a},\\; \\overrightarrow{OB} = \\vec{b}\\text{，}' +
      'M \\text{ 是 } OA \\text{ 的中点，} N \\text{ 在 } AB \\text{ 上且 } \\overrightarrow{AN} = \\dfrac{1}{3}\\overrightarrow{AB}\\text{。}\\\\[6pt]' +
      '\\text{（1）用 } \\vec{a},\\; \\vec{b} \\text{ 表示 } \\overrightarrow{OM} \\text{ 和 } \\overrightarrow{ON}\\text{；}\\\\[4pt]' +
      '\\text{（2）用 } \\vec{a},\\; \\vec{b} \\text{ 表示 } \\overrightarrow{MN}\\text{；}\\\\[4pt]' +
      '\\text{（3）证明 } MN \\text{ 与 } OB \\text{ 不平行。}',
    score: 15,
    lines: 16,
    answerLatex:
      '\\text{（1）} \\overrightarrow{OM} = \\dfrac{1}{2}\\overrightarrow{OA} = \\dfrac{1}{2}\\vec{a} \\\\[4pt]' +
      '\\overrightarrow{ON} = \\overrightarrow{OA} + \\overrightarrow{AN} = \\vec{a} + \\dfrac{1}{3}\\overrightarrow{AB} \\\\[4pt]' +
      '= \\vec{a} + \\dfrac{1}{3}(\\vec{b}-\\vec{a}) = \\dfrac{2}{3}\\vec{a} + \\dfrac{1}{3}\\vec{b} \\\\[6pt]' +
      '\\text{（2）} \\overrightarrow{MN} = \\overrightarrow{ON} - \\overrightarrow{OM} \\\\[4pt]' +
      '= \\dfrac{2}{3}\\vec{a} + \\dfrac{1}{3}\\vec{b} - \\dfrac{1}{2}\\vec{a} = \\dfrac{1}{6}\\vec{a} + \\dfrac{1}{3}\\vec{b} \\\\[6pt]' +
      '\\text{（3）若 } \\overrightarrow{MN} \\parallel \\overrightarrow{OB}\\text{，则 } \\overrightarrow{MN} = k\\vec{b} \\\\[4pt]' +
      '\\dfrac{1}{6}\\vec{a} + \\dfrac{1}{3}\\vec{b} = k\\vec{b} \\\\[4pt]' +
      '\\text{需要 } \\dfrac{1}{6} = 0\\text{（} \\vec{a} \\text{ 的系数），矛盾} \\\\[4pt]' +
      '\\therefore \\overrightarrow{MN} \\text{ 与 } \\overrightarrow{OB} \\text{ 不平行}',
  },
];
