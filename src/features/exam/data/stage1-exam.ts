import type { QuizQuestionData } from '@/types';
import type { EssayQuestion } from '@/components/shared/ExamPaper';

import { complexQuizQuestions } from '@/features/complex/data/quiz';
import { setsQuizQuestions } from '@/features/sets/data/quiz';
import { logicQuizQuestions } from '@/features/logic/data/quiz';

// ── 第一阶段考试：数学语言（复数 + 集合 + 逻辑用语） ──
// 从各模块的自测题中精选，组成综合考试

/** 按 ID 从题库中筛选 */
function pick(pool: QuizQuestionData[], ids: string[]): QuizQuestionData[] {
  const idSet = new Set(ids);
  return pool.filter((q) => idSet.has(q.id));
}

// 复数精选（8题）：涵盖四则运算、虚部判断、模、共轭、复平面、纯虚数
const complexPicks = pick(complexQuizQuestions, [
  'q1',  // 虚部（2025高考）
  'q3',  // 复平面象限
  'q4',  // i^3 运算
  'q6',  // 模的计算
  'q9',  // z + z̄
  'q11', // 实数条件求参数
  'q12', // 纯虚数条件
  'q15', // i 的幂次周期
]);

// 集合精选（10题）：涵盖交并补、子集、区间、容斥、含参问题
const setsPicks = pick(setsQuizQuestions, [
  'sq1',  // 有限集交集（高考真题）
  'sq2',  // 交集（解不等式）
  'sq3',  // 补集
  'sq4',  // 复合运算
  'sq7',  // 子集个数
  'sq8',  // 区间交集
  'sq10', // 并集（区间）
  'sq12', // 互异性
  'sq13', // 含参交集非空
  'sq16', // 容斥原理
]);

// 逻辑精选（6题）：涵盖充要条件、四种命题、全称/存在量词否定
const logicPicks = pick(logicQuizQuestions, [
  'lq1', // 充要条件（集合法）
  'lq3', // 必要不充分
  'lq4', // 全称命题否定
  'lq5', // 存在命题否定
  'lq6', // 或→且取反
  'lq7', // 四种命题真假
]);

// 加前缀避免 ID 冲突
function prefixIds(questions: QuizQuestionData[], prefix: string): QuizQuestionData[] {
  return questions.map((q) => ({ ...q, id: `${prefix}-${q.id}` }));
}

// 分节导出（供 ExamPaper 使用）
export const stage1ComplexQuestions = prefixIds(complexPicks, 's1e');
export const stage1SetsQuestions = prefixIds(setsPicks, 's1e');
export const stage1LogicQuestions = prefixIds(logicPicks, 's1e');

// 合并导出（供 QuizPanel 使用）
export const stage1ExamQuestions: QuizQuestionData[] = [
  ...stage1ComplexQuestions,
  ...stage1SetsQuestions,
  ...stage1LogicQuestions,
];

// ── 综合题（解答题，仅打印试卷使用） ──
export const stage1EssayQuestions: EssayQuestion[] = [
  {
    id: 's1e-essay-1',
    questionLatex:
      '\\text{已知复数 } z = \\dfrac{a + 2i}{1 + i} \\text{（} a \\in \\mathbb{R} \\text{）为纯虚数。}\\\\[6pt]' +
      '\\text{（1）求 } a \\text{ 的值；}\\\\[4pt]' +
      '\\text{（2）求 } |z^2| \\text{ 的值。}',
    score: 12,
    lines: 10,
    answerLatex:
      '\\text{（1）}z = \\dfrac{a+2i}{1+i} = \\dfrac{(a+2i)(1-i)}{(1+i)(1-i)} = \\dfrac{a+2+(2-a)i}{2}' +
      ' = \\dfrac{a+2}{2} + \\dfrac{2-a}{2}i \\\\[6pt]' +
      '\\text{z 为纯虚数} \\Rightarrow \\text{实部}=0 \\text{ 且虚部} \\neq 0' +
      ' \\Rightarrow \\dfrac{a+2}{2}=0 \\Rightarrow a=-2 \\\\[4pt]' +
      '\\text{验证：虚部} = \\dfrac{2-(-2)}{2} = 2 \\neq 0 \\checkmark \\\\[6pt]' +
      '\\text{（2）}z = 2i,\\; z^2 = (2i)^2 = -4 \\\\[4pt]' +
      '|z^2| = |-4| = 4',
  },
  {
    id: 's1e-essay-2',
    pageBreak: true,
    questionLatex:
      '\\text{已知集合 } A = \\{x \\mid x^2 - 2x - 3 \\leq 0\\},\\; B = \\{x \\mid x > a\\}\\text{。}\\\\[6pt]' +
      '\\text{（1）若 } A \\cap B = (1, 3]\\text{，求 } a \\text{ 的值；}\\\\[4pt]' +
      '\\text{（2）若 } A \\subseteq B\\text{，求 } a \\text{ 的取值范围。}',
    score: 12,
    lines: 9,
    answerLatex:
      '\\text{先解 A：} x^2-2x-3 \\leq 0 \\Rightarrow (x-3)(x+1) \\leq 0 \\Rightarrow A=[-1,3] \\\\[6pt]' +
      '\\text{（1）} B=(a,+\\infty),\\; A \\cap B = (a,3] \\\\[4pt]' +
      '\\text{已知 } A \\cap B = (1,3] \\Rightarrow a=1 \\\\[6pt]' +
      '\\text{（2）} A \\subseteq B \\text{ 即 } [-1,3] \\subseteq (a,+\\infty) \\\\[4pt]' +
      '\\text{需要 } a < -1 \\\\[4pt]' +
      '\\therefore a \\text{ 的取值范围为 } (-\\infty, -1)',
  },
  {
    id: 's1e-essay-3',
    questionLatex:
      '\\text{设 } p: |x - 1| \\leq 2,\\; q: x^2 - 2x + 1 - m^2 \\leq 0 \\;(m > 0)\\text{。}\\\\[6pt]' +
      '\\text{（1）若 } m = 1\\text{，判断 p 是 q 的什么条件（充分/必要/充要），并说明理由；}\\\\[4pt]' +
      '\\text{（2）若 p 是 q 的充分不必要条件，求 } m \\text{ 的取值范围。}',
    score: 12,
    lines: 11,
    answerLatex:
      '\\text{解 p：} |x-1| \\leq 2 \\Rightarrow -1 \\leq x \\leq 3,\\; P=[-1,3] \\\\[4pt]' +
      '\\text{解 q：} (x-1)^2 \\leq m^2 \\Rightarrow |x-1| \\leq m \\Rightarrow 1-m \\leq x \\leq 1+m,\\; Q=[1-m,1+m] \\\\[6pt]' +
      '\\text{（1）} m=1 \\text{ 时 } Q=[0,2] \\\\[4pt]' +
      'P=[-1,3] \\not\\subseteq Q=[0,2] \\text{（如 } x=-1 \\in P \\text{ 但 } -1 \\notin Q\\text{）} \\\\[4pt]' +
      'Q=[0,2] \\subseteq P=[-1,3] \\checkmark \\\\[4pt]' +
      '\\text{q} \\Rightarrow \\text{p 成立，p} \\Rightarrow \\text{q 不一定成立} \\\\[4pt]' +
      '\\therefore \\text{p 是 q 的必要不充分条件} \\\\[6pt]' +
      '\\text{（2）p 是 q 的充分不必要条件} \\Rightarrow P \\subsetneq Q \\\\[4pt]' +
      '\\begin{cases} 1-m \\leq -1 \\\\ 1+m \\geq 3 \\end{cases} \\text{且不全取等} \\Rightarrow m \\geq 2 \\text{（取等时 } P=Q \\text{ 为充要）} \\\\[4pt]' +
      '\\therefore m > 2,\\; \\text{即 } m \\in (2, +\\infty)',
  },
  {
    id: 's1e-essay-4',
    questionLatex:
      '\\text{已知 } U = \\mathbb{R},\\; A = \\{x \\mid x^2 - 4 \\leq 0\\},\\; B = \\{x \\mid 2x - a \\geq 0\\}\\text{。}\\\\[6pt]' +
      '\\text{（1）当 } a = 2 \\text{ 时，求 } A \\cap (\\complement_U B)\\text{；}\\\\[4pt]' +
      '\\text{（2）若 } A \\cup B = B\\text{，求实数 } a \\text{ 的取值范围。}',
    score: 12,
    lines: 10,
    answerLatex:
      '\\text{解 A：} x^2-4 \\leq 0 \\Rightarrow (x-2)(x+2) \\leq 0 \\Rightarrow A=[-2,2] \\\\[4pt]' +
      '\\text{解 B：} 2x-a \\geq 0 \\Rightarrow x \\geq \\dfrac{a}{2} \\Rightarrow B=[\\dfrac{a}{2},+\\infty) \\\\[6pt]' +
      '\\text{（1）} a=2 \\text{ 时 } B=[1,+\\infty),\\; \\complement_U B = (-\\infty,1) \\\\[4pt]' +
      'A \\cap (\\complement_U B) = [-2,2] \\cap (-\\infty,1) = [-2,1) \\\\[6pt]' +
      '\\text{（2）} A \\cup B = B \\Leftrightarrow A \\subseteq B \\\\[4pt]' +
      '[-2,2] \\subseteq [\\dfrac{a}{2},+\\infty) \\Rightarrow \\dfrac{a}{2} \\leq -2 \\Rightarrow a \\leq -4 \\\\[4pt]' +
      '\\therefore a \\text{ 的取值范围为 } (-\\infty, -4]',
  },
];
