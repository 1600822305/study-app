import type { QuizQuestionData } from '@/types';
import type { EssayQuestion } from '@/components/shared/ExamPaper';

import { inequalityQuizQuestions } from '@/features/inequality/data/quiz';
import { quadraticQuizQuestions } from '@/features/quadratic/data/quiz';

// ── 第二阶段考试：计算工具（不等式 + 二次函数） ──

/** 按 ID 从题库中筛选 */
function pick(pool: QuizQuestionData[], ids: string[]): QuizQuestionData[] {
  const idSet = new Set(ids);
  return pool.filter((q) => idSet.has(q.id));
}

// 不等式精选（7题）：不等式性质、基本不等式、一元二次不等式、恒成立
const inequalityPicks = pick(inequalityQuizQuestions, [
  'iqz1',  // 不等式性质（同向相加）
  'iqz2',  // 绝对值大小判断
  'iqz4',  // 基本不等式最小值
  'iqz5',  // 1的代换（经典）
  'iqz8',  // 因式型不等式
  'iqz9',  // 恒成立（判别式）
  'iqz10', // 集合∩不等式综合（2021真题改编）
]);

// 二次函数精选（8题）：图像性质、判别式、韦达定理、综合
const quadraticPicks = pick(quadraticQuizQuestions, [
  'qqz2',  // 开口方向+对称轴→ab符号
  'qqz3',  // 闭区间最值
  'qqz4',  // 判别式（两不等实根）
  'qqz7',  // 韦达定理（1/x₁+1/x₂）
  'qqz8',  // 韦达逆用
  'qqz9',  // (x₁-x₂)² 公式
  'qqz10', // 三位一体（f(x)>0解集）
  'qqz11', // x₁²+x₂² 韦达综合（2022真题改编）
]);

// 分模块导出（供 ExamPaper 使用）
export const stage2InequalityQuestions = inequalityPicks;
export const stage2QuadraticQuestions = quadraticPicks;

// 合并导出（供 QuizPanel 使用）
export const stage2ExamQuestions: QuizQuestionData[] = [
  ...stage2InequalityQuestions,
  ...stage2QuadraticQuestions,
];

// ── 综合题（解答题，仅打印试卷使用） ──
export const stage2EssayQuestions: EssayQuestion[] = [
  {
    id: 's2e-essay-1',
    questionLatex:
      '\\text{已知 } a > 0,\\; b > 0,\\; 2a + b = 1\\text{。}\\\\[6pt]' +
      '\\text{（1）求 } ab \\text{ 的最大值；}\\\\[4pt]' +
      '\\text{（2）求 } \\dfrac{2}{a} + \\dfrac{1}{b} \\text{ 的最小值。}',
    score: 15,
    lines: 10,
    answerLatex:
      '\\text{（1）由基本不等式：} 2a + b \\geq 2\\sqrt{2ab} = 1 \\\\[4pt]' +
      '\\sqrt{2ab} \\leq \\dfrac{1}{2} \\Rightarrow ab \\leq \\dfrac{1}{8} \\\\[4pt]' +
      '\\text{等号：} 2a = b,\\; 2a + b = 4a = 1 \\Rightarrow a = \\dfrac{1}{4},\\; b = \\dfrac{1}{2} \\\\[6pt]' +
      '\\text{（2）用 1 的代换：} \\dfrac{2}{a} + \\dfrac{1}{b} = \\left(\\dfrac{2}{a} + \\dfrac{1}{b}\\right)(2a + b) \\\\[4pt]' +
      '= 4 + \\dfrac{2b}{a} + \\dfrac{2a}{b} + 1 = 5 + \\dfrac{2b}{a} + \\dfrac{2a}{b} \\\\[4pt]' +
      '\\geq 5 + 2\\sqrt{\\dfrac{2b}{a} \\cdot \\dfrac{2a}{b}} = 5 + 2 \\times 2 = 9 \\\\[4pt]' +
      '\\text{等号：} \\dfrac{2b}{a} = \\dfrac{2a}{b} \\Rightarrow a = b,\\; 2a + a = 1 \\Rightarrow a = b = \\dfrac{1}{3}',
  },
  {
    id: 's2e-essay-2',
    pageBreak: true,
    questionLatex:
      '\\text{已知 } f(x) = x^2 - 2ax + a + 2\\text{。}\\\\[6pt]' +
      '\\text{（1）若方程 } f(x) = 0 \\text{ 有两个正实根，求 } a \\text{ 的取值范围；}\\\\[4pt]' +
      '\\text{（2）若 } f(x) \\geq 0 \\text{ 对一切实数 } x \\text{ 恒成立，求 } a \\text{ 的取值范围。}',
    score: 15,
    lines: 10,
    answerLatex:
      '\\text{设两根为 } x_1, x_2\\text{，韦达定理：} x_1 + x_2 = 2a,\\; x_1 x_2 = a + 2 \\\\[6pt]' +
      '\\text{（1）两个正实根需满足：} \\\\[4pt]' +
      '\\begin{cases} \\Delta = 4a^2 - 4(a+2) \\geq 0 \\\\ x_1 + x_2 = 2a > 0 \\\\ x_1 x_2 = a+2 > 0 \\end{cases}' +
      ' \\Rightarrow \\begin{cases} a^2 - a - 2 \\geq 0 \\\\ a > 0 \\\\ a > -2 \\end{cases} \\\\[4pt]' +
      'a^2 - a - 2 \\geq 0 \\Rightarrow (a-2)(a+1) \\geq 0 \\Rightarrow a \\leq -1 \\text{ 或 } a \\geq 2 \\\\[4pt]' +
      '\\text{与 } a > 0 \\text{ 取交集：} a \\geq 2 \\\\[6pt]' +
      '\\text{（2）} f(x) \\geq 0 \\text{ 恒成立} \\Leftrightarrow \\Delta \\leq 0 \\\\[4pt]' +
      '4a^2 - 4(a+2) \\leq 0 \\Rightarrow a^2 - a - 2 \\leq 0 \\Rightarrow (a-2)(a+1) \\leq 0 \\\\[4pt]' +
      '\\therefore -1 \\leq a \\leq 2',
  },
  {
    id: 's2e-essay-3',
    questionLatex:
      '\\text{已知不等式 } x^2 + bx + c \\leq 0 \\text{ 的解集为 } [-1, 3]\\text{。}\\\\[6pt]' +
      '\\text{（1）求 } b, c \\text{ 的值；}\\\\[4pt]' +
      '\\text{（2）解不等式 } cx^2 + bx + 1 > 0\\text{。}',
    score: 15,
    lines: 10,
    answerLatex:
      '\\text{（1）} x^2 + bx + c \\leq 0 \\text{ 的解集为 } [-1,3] \\\\[4pt]' +
      '\\text{则 } x = -1,\\; x = 3 \\text{ 是 } x^2 + bx + c = 0 \\text{ 的两根} \\\\[4pt]' +
      '\\text{韦达：} \\begin{cases} -1 + 3 = -b \\\\ (-1) \\times 3 = c \\end{cases}' +
      ' \\Rightarrow b = -2,\\; c = -3 \\\\[6pt]' +
      '\\text{（2）} cx^2 + bx + 1 > 0 \\Rightarrow -3x^2 - 2x + 1 > 0 \\\\[4pt]' +
      '\\text{两边除以 } -1 \\text{（变号）：} 3x^2 + 2x - 1 < 0 \\\\[4pt]' +
      '(3x - 1)(x + 1) < 0 \\Rightarrow -1 < x < \\dfrac{1}{3}',
  },
  {
    id: 's2e-essay-4',
    questionLatex:
      '\\text{已知函数 } f(x) = -x^2 + 4x - 3\\text{。}\\\\[6pt]' +
      '\\text{（1）用求根公式求 } f(x) = 0 \\text{ 的两根；}\\\\[4pt]' +
      '\\text{（2）求 } f(x) \\text{ 在区间 } [0, 3] \\text{ 上的最大值和最小值。}',
    score: 15,
    lines: 10,
    answerLatex:
      '\\text{（1）} -x^2 + 4x - 3 = 0 \\Rightarrow x^2 - 4x + 3 = 0 \\\\[4pt]' +
      'x = \\dfrac{4 \\pm \\sqrt{16 - 12}}{2} = \\dfrac{4 \\pm 2}{2} \\\\[4pt]' +
      '\\therefore x_1 = 1,\\; x_2 = 3 \\\\[6pt]' +
      '\\text{（2）} f(x) = -(x-2)^2 + 1\\text{，开口向下，对称轴 } x = 2 \\in [0, 3] \\\\[4pt]' +
      '\\text{最大值：} f(2) = -(2-2)^2 + 1 = 1 \\\\[4pt]' +
      '\\text{端点值：} f(0) = -3,\\; f(3) = -9 + 12 - 3 = 0 \\\\[4pt]' +
      '\\therefore \\text{最大值 } 1\\text{（} x=2 \\text{），最小值 } -3\\text{（} x=0 \\text{）}',
  },
];
