// ============================================================
// 3.1.3 分段函数 - 即时练习题
// ============================================================

import type { QuizQuestionData } from '@/types';

// ── 第一组：定义与求值 ──
export const piecewisePractice1: QuizQuestionData[] = [
  // ① 正向求值
  {
    id: 'pw1-1',
    type: 'blank',
    question: '已知 f(x) = {2x+1 (x<0), x²-1 (x≥0)}，则 f(-2) + f(3) = ____',
    questionLatex: '\\text{已知 }f(x)=\\begin{cases}2x+1,&x<0\\\\x^2-1,&x\\geqslant 0\\end{cases}\\text{，则 }f(-2)+f(3)=\\underline{\\phantom{0000}}',
    correctAnswer: '5',
    acceptableAnswers: ['5'],
  },
  // ② 反向求值（含舍解）
  {
    id: 'pw1-2',
    type: 'blank',
    question: '已知 f(x) = {x+2 (x<1), x²-2 (x≥1)}，若 f(a) = 2，则 a = ____',
    questionLatex: '\\text{已知 }f(x)=\\begin{cases}x+2,&x<1\\\\x^2-2,&x\\geqslant 1\\end{cases}\\text{，若 }f(a)=2\\text{，则 }a=\\underline{\\phantom{0000}}',
    correctAnswer: 'a=0或a=2',
    acceptableAnswers: ['a=0或a=2', 'a=0,a=2', '0或2', '0,2', '0, 2', 'a=2或a=0', '2或0'],
  },
  // ③ 复合求值（数值型）
  {
    id: 'pw1-3',
    type: 'blank',
    question: '已知 f(x) = {x+3 (x<0), x²+1 (x≥0)}，则 f(f(-2)) = ____',
    questionLatex: '\\text{已知 }f(x)=\\begin{cases}x+3,&x<0\\\\x^2+1,&x\\geqslant 0\\end{cases}\\text{，则 }f(f(-2))=\\underline{\\phantom{0000}}',
    correctAnswer: '2',
    acceptableAnswers: ['2'],
  },
  // ④ 复合求值（递归型）
  {
    id: 'pw1-4',
    type: 'blank',
    question: '已知 f(x) = {x+1 (x≥4), f(x+2) (x<4)}，则 f(1) = ____',
    questionLatex: '\\text{已知 }f(x)=\\begin{cases}x+1,&x\\geqslant 4\\\\f(x+2),&x<4\\end{cases}\\text{，则 }f(1)=\\underline{\\phantom{0000}}',
    correctAnswer: '6',
    acceptableAnswers: ['6'],
  },
  // ⑤ 识别隐藏分段函数
  {
    id: 'pw1-5',
    type: 'blank',
    question: '已知 f(x) = |x+1| - x，则 f(-3) + f(2) = ____',
    questionLatex: '\\text{已知 }f(x)=|x+1|-x\\text{，则 }f(-3)+f(2)=\\underline{\\phantom{0000}}',
    correctAnswer: '6',
    acceptableAnswers: ['6'],
  },
  // ⑥ 含参复合求值
  {
    id: 'pw1-6',
    type: 'blank',
    question: '已知 g(x) = {x+2 (x<0), x²-1 (x≥0)}，若 g(g(a)) = 3，则 a = ____',
    questionLatex: '\\text{已知 }g(x)=\\begin{cases}x+2,&x<0\\\\x^2-1,&x\\geqslant 0\\end{cases}\\text{，若 }g(g(a))=3\\text{，则 }a=\\underline{\\phantom{0000}}',
    correctAnswer: '√3',
    acceptableAnswers: ['√3', 'sqrt(3)', 'a=√3', 'a=sqrt(3)'],
  },
];

// ── 第二组：定义域与值域（双问） ──
export const piecewiseDomainPractice: QuizQuestionData[] = [
  {
    id: 'pw3-1',
    type: 'blank',
    question: 'f(x) = {x+3 (-2≤x<1), -2x+6 (1≤x≤3)}，定义域为____，值域为____',
    questionLatex: 'f(x)=\\begin{cases}x+3,&-2\\leqslant x<1\\\\-2x+6,&1\\leqslant x\\leqslant 3\\end{cases}\\text{，定义域为 }\\underline{\\phantom{0000}}\\text{，值域为 }\\underline{\\phantom{0000}}',
    correctAnswer: '[-2,3]，[0,4]',
    acceptableAnswers: ['[-2,3]，[0,4]', '[-2,3], [0,4]', '[-2, 3], [0, 4]', '[-2,3],[0,4]'],
  },
  {
    id: 'pw3-2',
    type: 'blank',
    question: 'f(x) = {3x (0≤x<2), -x+8 (2≤x≤5)}，定义域为____，值域为____',
    questionLatex: 'f(x)=\\begin{cases}3x,&0\\leqslant x<2\\\\-x+8,&2\\leqslant x\\leqslant 5\\end{cases}\\text{，定义域为 }\\underline{\\phantom{0000}}\\text{，值域为 }\\underline{\\phantom{0000}}',
    correctAnswer: '[0,5]，[0,6]',
    acceptableAnswers: ['[0,5]，[0,6]', '[0,5], [0,6]', '[0, 5], [0, 6]', '[0,5],[0,6]'],
  },
  {
    id: 'pw3-3',
    type: 'blank',
    question: '已知 f(x) = {-x²+2 (x≤0), -x+a (x>0)} 的值域为 (-∞, 2]，求 a 的取值范围 ____',
    questionLatex: '\\text{已知 }f(x)=\\begin{cases}-x^2+2,&x\\leqslant 0\\\\-x+a,&x>0\\end{cases}\\text{ 的值域为 }(-\\infty,\\,2]\\text{，则 }a\\text{ 的取值范围是 }\\underline{\\phantom{0000}}',
    correctAnswer: 'a≤2',
    acceptableAnswers: ['a≤2', 'a<=2', '(-∞,2]', '(-∞, 2]'],
  },
];

// ── 第三组：单调性（已知单调求参数） ──
export const piecewiseMonoPractice: QuizQuestionData[] = [
  {
    id: 'pw4-1',
    type: 'blank',
    question: '已知 f(x) = {-2x+a (x<0), (a-3)x-1 (x≥0)} 在 R 上单调递减，求 a 的取值范围 ____',
    questionLatex: '\\text{已知 }f(x)=\\begin{cases}-2x+a,&x<0\\\\(a-3)x-1,&x\\geqslant 0\\end{cases}\\text{ 在 }\\mathbb{R}\\text{ 上单调递减，则 }a\\text{ 的取值范围是 }\\underline{\\phantom{0000}}',
    correctAnswer: '[-1,3)',
    acceptableAnswers: ['[-1,3)', '[-1, 3)', '-1≤a<3', '-1<=a<3'],
  },
  {
    id: 'pw4-2',
    type: 'blank',
    question: '已知 f(x) = {(3a-1)x+4a (x<1), -ax (x≥1)} 在 R 上单调递减，求 a 的取值范围 ____',
    questionLatex: '\\text{已知 }f(x)=\\begin{cases}(3a-1)x+4a,&x<1\\\\-ax,&x\\geqslant 1\\end{cases}\\text{ 在 }\\mathbb{R}\\text{ 上单调递减，则 }a\\text{ 的取值范围是 }\\underline{\\phantom{0000}}',
    correctAnswer: '[1/8,1/3)',
    acceptableAnswers: ['[1/8,1/3)', '[1/8, 1/3)', '1/8≤a<1/3', '1/8<=a<1/3'],
  },
  {
    id: 'pw4-3',
    type: 'blank',
    question: '（三段题）已知 f(x) = {3x+1 (x<0), x²+1 (0≤x≤1), ax-2 (x>1)} 在 R 上单调递增，求 a 的取值范围 ____',
    questionLatex: '\\text{（三段题）已知 }f(x)=\\begin{cases}3x+1,&x<0\\\\x^2+1,&0\\leqslant x\\leqslant 1\\\\ax-2,&x>1\\end{cases}\\text{ 在 }\\mathbb{R}\\text{ 上单调递增，则 }a\\text{ 的取值范围是 }\\underline{\\phantom{0000}}',
    correctAnswer: '[4,+∞)',
    acceptableAnswers: ['[4,+∞)', '[4, +∞)', 'a≥4', 'a>=4'],
  },
];

// ── 第四组：奇偶性 ──
export const piecewiseParityPractice: QuizQuestionData[] = [
  {
    id: 'pw5-1',
    type: 'choice',
    question: '函数 f(x) = {x+2 (x>0), -x-2 (x<0)} 的奇偶性是',
    questionLatex: '\\text{函数 }f(x)=\\begin{cases}x+2,&x>0\\\\-x-2,&x<0\\end{cases}\\text{ 的奇偶性是}',
    options: [
      { value: '奇函数', label: 'A' },
      { value: '偶函数', label: 'B' },
      { value: '既奇又偶', label: 'C' },
      { value: '非奇非偶', label: 'D' },
    ],
    correctAnswer: '非奇非偶',
  },
  {
    id: 'pw5-2',
    type: 'blank',
    question: '已知 f(x) = {x²+ax+b (x>0), -x²+2x-1 (x<0)} 是奇函数，求 a+b = ____',
    questionLatex: '\\text{已知 }f(x)=\\begin{cases}x^2+ax+b,&x>0\\\\-x^2+2x-1,&x<0\\end{cases}\\text{ 是奇函数，则 }a+b=\\underline{\\phantom{0000}}',
    correctAnswer: '3',
    acceptableAnswers: ['3'],
  },
  // ③ 含 f(0) 边界踩坑题
  {
    id: 'pw5-3',
    type: 'choice',
    question: '函数 f(x) = {x²+1 (x≥0), -x²-1 (x<0)} 的奇偶性是',
    questionLatex: '\\text{函数 }f(x)=\\begin{cases}x^2+1,&x\\geqslant 0\\\\-x^2-1,&x<0\\end{cases}\\text{ 的奇偶性是}',
    options: [
      { value: '奇函数', label: 'A' },
      { value: '偶函数', label: 'B' },
      { value: '既奇又偶', label: 'C' },
      { value: '非奇非偶', label: 'D' },
    ],
    correctAnswer: '非奇非偶',
  },
];

// ── 第五组：零点、方程与不等式 ──
export const piecewiseEquationPractice: QuizQuestionData[] = [
  // ① 求零点
  {
    id: 'pw6-1',
    type: 'blank',
    question: '（求零点）f(x) = {x²+2x-3 (x<0), x-2 (x≥0)} 的零点为 ____',
    questionLatex: '\\text{（求零点）}f(x)=\\begin{cases}x^2+2x-3,&x<0\\\\x-2,&x\\geqslant 0\\end{cases}\\text{ 的零点为 }\\underline{\\phantom{0000}}',
    correctAnswer: 'x=-3,x=2',
    acceptableAnswers: ['x=-3,x=2', 'x=-3, x=2', '-3,2', '-3, 2', 'x=-3或x=2', '2,-3', '2或-3'],
  },
  // ② 解不等式
  {
    id: 'pw6-2',
    type: 'blank',
    question: '（解不等式）f(x) = {x²-1 (x<0), 2x-1 (x≥0)}，解不等式 f(x) ≥ 0，解集为 ____',
    questionLatex: '\\text{（解不等式）}f(x)=\\begin{cases}x^2-1,&x<0\\\\2x-1,&x\\geqslant 0\\end{cases}\\text{，解 }f(x)\\geqslant 0\\text{，解集为 }\\underline{\\phantom{0000}}',
    correctAnswer: '(-∞,-1]∪[1/2,+∞)',
    acceptableAnswers: ['(-∞,-1]∪[1/2,+∞)', '(-∞, -1] ∪ [1/2, +∞)', '(-∞,-1]U[1/2,+∞)', 'x≤-1或x≥1/2'],
  },
  // ③ 数形结合（分界值同归）
  {
    id: 'pw6-3',
    type: 'blank',
    question: '（解个数·分界值同归）f(x) = {-x²+4x (x≤2), 2-x (x>2)}，若方程 f(x)=a 恰有 1 个解，求 a 的取值范围 ____',
    questionLatex: '\\text{已知 }f(x)=\\begin{cases}-x^2+4x,&x\\leqslant 2\\\\2-x,&x>2\\end{cases}\\text{，若 }f(x)=a\\text{ 恰有 1 个解，则 }a\\text{ 的取值范围是 }\\underline{\\phantom{0000}}',
    correctAnswer: '[0,4]',
    acceptableAnswers: ['[0,4]', '[0, 4]', '0≤a≤4', '0<=a<=4'],
  },
  // ④ 数形结合（分界值异归）
  {
    id: 'pw6-4',
    type: 'blank',
    question: '（解个数·分界值异归）f(x) = {-x²+1 (x≤0), x-1 (x>0)}，若方程 f(x)=a 恰有 2 个解，求 a 的取值范围 ____',
    questionLatex: '\\text{已知 }f(x)=\\begin{cases}-x^2+1,&x\\leqslant 0\\\\x-1,&x>0\\end{cases}\\text{，若 }f(x)=a\\text{ 恰有 2 个解，则 }a\\text{ 的取值范围是 }\\underline{\\phantom{0000}}',
    correctAnswer: '(-1,1]',
    acceptableAnswers: ['(-1,1]', '(-1, 1]', '-1<a≤1', '-1<a<=1'],
  },
];
