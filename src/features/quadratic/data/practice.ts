import type { QuizQuestionData } from '@/types';

// ══════════════════════════════════════
//  2.2 二次函数 - 即时练习
// ══════════════════════════════════════

// ── 第1节：三种形式 + 图像 ──
export const quadPractice1: QuizQuestionData[] = [
  {
    id: 'qp1-1',
    type: 'choice',
    question: '',
    questionLatex: '\\text{将 } y = x^2 + 4x + 7 \\text{ 化为顶点式，其顶点坐标为}',
    options: [
      { label: 'A', value: '(2,\\; 3)', isLatex: true },
      { label: 'B', value: '(-2,\\; 3)', isLatex: true },
      { label: 'C', value: '(-2,\\; -3)', isLatex: true },
      { label: 'D', value: '(2,\\; -3)', isLatex: true },
    ],
    correctAnswer: '(-2,\\; 3)',
    explanation: '',
    explanationLatex: 'y = x^2 + 4x + 7 = (x^2 + 4x + 4) + 3 = (x+2)^2 + 3 \\\\[4pt] \\text{顶点式 } y = (x - (-2))^2 + 3 \\text{，顶点 } (-2,\\; 3) \\\\[4pt] \\text{注意：} (x+2)^2 \\text{ 中 } h = -2 \\text{，不是 } 2 \\text{！}',
  },
  {
    id: 'qp1-2',
    type: 'choice',
    question: '',
    questionLatex: '\\text{二次函数 } y = -2x^2 + 8x - 5 \\text{ 的对称轴和与 } x \\text{ 轴交点个数分别是}',
    options: [
      { label: 'A', value: 'x = 2 \\text{，两个交点}', isLatex: true },
      { label: 'B', value: 'x = -2 \\text{，两个交点}', isLatex: true },
      { label: 'C', value: 'x = 2 \\text{，无交点}', isLatex: true },
      { label: 'D', value: 'x = 4 \\text{，一个交点}', isLatex: true },
    ],
    correctAnswer: 'x = 2 \\text{，两个交点}',
    explanation: '',
    explanationLatex: '\\text{对称轴 } x = -\\frac{8}{2 \\times (-2)} = 2 \\\\[4pt] \\Delta = 8^2 - 4(-2)(-5) = 64 - 40 = 24 > 0 \\\\[4pt] \\text{所以有两个不等实根，即两个交点}',
  },
  {
    id: 'qp1-3',
    type: 'choice',
    question: '',
    questionLatex: '\\text{函数 } y = -x^2 + 6x - 1 \\text{ 在 } x > 3 \\text{ 时}',
    options: [
      { label: 'A', value: '\\text{递增}', isLatex: true },
      { label: 'B', value: '\\text{递减}', isLatex: true },
      { label: 'C', value: '\\text{先增后减}', isLatex: true },
      { label: 'D', value: '\\text{无法判断}', isLatex: true },
    ],
    correctAnswer: '\\text{递减}',
    explanation: '',
    explanationLatex: 'a = -1 < 0 \\text{，开口向下} \\\\[4pt] \\text{对称轴 } x = -\\frac{6}{2 \\times (-1)} = 3 \\\\[4pt] \\text{开口向下 → 对称轴右侧递减，所以 } x > 3 \\text{ 时递减}',
  },
  {
    id: 'qp1-4',
    type: 'choice',
    question: '',
    questionLatex: '\\text{函数 } y = 2x^2 - 8x + 3 \\text{ 在 } [0, 3] \\text{ 上的最小值为}',
    options: [
      { label: 'A', value: '-5', isLatex: true },
      { label: 'B', value: '3', isLatex: true },
      { label: 'C', value: '-1', isLatex: true },
      { label: 'D', value: '0', isLatex: true },
    ],
    correctAnswer: '-5',
    explanation: '',
    explanationLatex: '\\text{对称轴 } x = -\\frac{-8}{2 \\times 2} = 2 \\in [0, 3] \\\\[4pt] \\text{对称轴在区间内 → 顶点处取最小值} \\\\[4pt] y_{\\min} = y(2) = 2 \\times 4 - 16 + 3 = -5',
  },
];

// ── 第2节：判别式 + 韦达定理 ──
export const quadPractice2: QuizQuestionData[] = [
  {
    id: 'qp2-1',
    type: 'choice',
    question: '',
    questionLatex: '\\text{方程 } 2x^2 - 3x + 5 = 0 \\text{ 的根的情况是}',
    options: [
      { label: 'A', value: '\\text{两个不等实根}', isLatex: true },
      { label: 'B', value: '\\text{两个相等实根（重根）}', isLatex: true },
      { label: 'C', value: '\\text{无实根}', isLatex: true },
      { label: 'D', value: '\\text{只有一个实根}', isLatex: true },
    ],
    correctAnswer: '\\text{无实根}',
    explanation: '',
    explanationLatex: '\\Delta = b^2 - 4ac = (-3)^2 - 4 \\times 2 \\times 5 = 9 - 40 = -31 < 0 \\\\[4pt] \\text{判别式小于零，方程无实数根}',
  },
  {
    id: 'qp2-2',
    type: 'choice',
    question: '',
    questionLatex: '\\text{已知方程 } x^2 - 5x + 6 = 0 \\text{ 的两根为 } x_1, x_2 \\text{，则 } x_1^2 + x_2^2 =',
    options: [
      { label: 'A', value: '13', isLatex: false },
      { label: 'B', value: '25', isLatex: false },
      { label: 'C', value: '11', isLatex: false },
      { label: 'D', value: '19', isLatex: false },
    ],
    correctAnswer: '13',
    explanation: '',
    explanationLatex: '\\text{韦达定理：} x_1 + x_2 = 5,\\; x_1 x_2 = 6 \\\\[6pt] x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1 x_2 = 25 - 12 = 13 \\\\[4pt] \\text{技巧：遇到 } x_1^2 + x_2^2 \\text{，用"和的平方减两倍积"转化}',
  },
  {
    id: 'qp2-3',
    type: 'choice',
    question: '',
    questionLatex: '\\text{若两根之和为 } 3 \\text{，两根之积为 } -4 \\text{，则原方程为}',
    options: [
      { label: 'A', value: 'x^2 - 3x - 4 = 0', isLatex: true },
      { label: 'B', value: 'x^2 + 3x - 4 = 0', isLatex: true },
      { label: 'C', value: 'x^2 - 3x + 4 = 0', isLatex: true },
      { label: 'D', value: 'x^2 + 3x + 4 = 0', isLatex: true },
    ],
    correctAnswer: 'x^2 - 3x - 4 = 0',
    explanation: '',
    explanationLatex: '\\text{由韦达定理逆用：} x^2 - (x_1+x_2)x + x_1 x_2 = 0 \\\\[4pt] \\text{代入：} x^2 - 3x + (-4) = 0 \\Rightarrow x^2 - 3x - 4 = 0 \\\\[4pt] \\text{验证：} (x-4)(x+1) = 0 \\Rightarrow x = 4 \\text{ 或 } x = -1 \\;\\text{✓}',
  },
  {
    id: 'qp2-4',
    type: 'choice',
    question: '',
    questionLatex: '\\text{方程 } x^2 - 2kx + k^2 - 1 = 0 \\text{ 的两根平方和 } x_1^2 + x_2^2 =',
    options: [
      { label: 'A', value: '2k^2 + 2', isLatex: true },
      { label: 'B', value: '2k^2 - 2', isLatex: true },
      { label: 'C', value: '4k^2 - 2', isLatex: true },
      { label: 'D', value: '2', isLatex: false },
    ],
    correctAnswer: '2k^2 + 2',
    explanation: '',
    explanationLatex: '\\text{① 判别式：} \\Delta = (-2k)^2 - 4(k^2-1) = 4k^2 - 4k^2 + 4 = 4 > 0 \\\\[4pt] \\text{∴ 方程恒有两个不等实根} \\\\[6pt] \\text{② 韦达定理：} x_1+x_2 = 2k,\\; x_1 x_2 = k^2-1 \\\\[6pt] \\text{③ 平方和：} x_1^2+x_2^2 = (2k)^2 - 2(k^2-1) = 4k^2-2k^2+2 = 2k^2+2',
  },
  {
    id: 'qp2-5',
    type: 'choice',
    question: '',
    questionLatex: '\\text{两根为 } x_1 = 1,\\; x_2 = -2 \\text{，原方程及其判别式为}',
    options: [
      { label: 'A', value: 'x^2 + x - 2 = 0,\\; \\Delta = 9', isLatex: true },
      { label: 'B', value: 'x^2 - x - 2 = 0,\\; \\Delta = 9', isLatex: true },
      { label: 'C', value: 'x^2 + x + 2 = 0,\\; \\Delta = -7', isLatex: true },
      { label: 'D', value: 'x^2 - x + 2 = 0,\\; \\Delta = -7', isLatex: true },
    ],
    correctAnswer: 'x^2 + x - 2 = 0,\\; \\Delta = 9',
    explanation: '',
    explanationLatex: '\\text{① 韦达逆用：和 } = 1+(-2) = -1,\\; \\text{积 } = 1 \\times (-2) = -2 \\\\[4pt] \\text{方程：} x^2 - (-1)x + (-2) = 0 \\Rightarrow x^2 + x - 2 = 0 \\\\[6pt] \\text{② 验证 } \\Delta = 1^2 - 4 \\times 1 \\times (-2) = 1 + 8 = 9 > 0 \\;\\text{✓}',
  },
];
