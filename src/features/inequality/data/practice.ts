import type { QuizQuestionData } from '@/types';

// ══════════════════════════════════════
//  2.1 不等式 - 即时练习
// ══════════════════════════════════════

// ── 第1节：不等式的性质 + 一元一次不等式 ──
export const ineqPractice1: QuizQuestionData[] = [
  {
    id: 'iq1-1',
    type: 'choice',
    question: '',
    questionLatex: '\\text{解不等式 } 3x - 5 > 7',
    options: [
      { label: 'A', value: 'x > 4', isLatex: true },
      { label: 'B', value: 'x > 2', isLatex: true },
      { label: 'C', value: 'x < 4', isLatex: true },
      { label: 'D', value: 'x > -4', isLatex: true },
    ],
    correctAnswer: 'x > 4',
    explanation: '',
    explanationLatex: '3x-5>7 \\Rightarrow 3x>12 \\Rightarrow x>4 \\\\[4pt] \\text{除以正数，不等号方向不变}',
  },
  {
    id: 'iq1-2',
    type: 'choice',
    question: '',
    questionLatex: '\\text{解不等式 } -2x + 6 \\leq 0',
    options: [
      { label: 'A', value: 'x \\leq 3', isLatex: true },
      { label: 'B', value: 'x \\geq 3', isLatex: true },
      { label: 'C', value: 'x \\leq -3', isLatex: true },
      { label: 'D', value: 'x \\geq -3', isLatex: true },
    ],
    correctAnswer: 'x \\geq 3',
    explanation: '',
    explanationLatex: '-2x+6 \\leq 0 \\Rightarrow -2x \\leq -6 \\Rightarrow x \\geq 3 \\\\[4pt] \\text{除以负数，不等号反向（"乘除负数变方向"）}',
  },
  {
    id: 'iq1-3',
    type: 'choice',
    question: '已知 a > b，下列哪个一定成立？',
    questionLatex: '\\text{已知 } a > b \\text{，下列哪个一定成立？}',
    options: [
      { label: 'A', value: '2a > 2b', isLatex: true },
      { label: 'B', value: '-a > -b', isLatex: true },
      { label: 'C', value: 'a^2 > b^2', isLatex: true },
      { label: 'D', value: '\\frac{1}{a} < \\frac{1}{b}', isLatex: true },
    ],
    correctAnswer: '2a > 2b',
    explanation: '',
    explanationLatex: 'A:\\; a>b \\Rightarrow 2a>2b \\;\\text{（同乘正数，不变号 ✓）} \\\\[4pt] B:\\; a>b \\Rightarrow -a<-b \\;\\text{（乘负数要变号 ✗）} \\\\[4pt] C:\\; a=1,b=-2 \\text{ 时 } a^2=1<4=b^2 \\;\\text{（平方不保序 ✗）} \\\\[4pt] D:\\; a=1,b=-1 \\text{ 时 } \\dfrac{1}{a}=1>-1=\\dfrac{1}{b} \\;\\text{（异号不能取倒数 ✗）}',
  },
];

// ── 第2节：基本不等式（高考风格） ──
export const ineqPractice2: QuizQuestionData[] = [
  {
    id: 'iq2-1',
    type: 'choice',
    question: '',
    questionLatex: '\\text{对任意 } x \\neq 0 \\text{，} x + \\dfrac{4}{x} \\text{ 的最小值为}',
    options: [
      { label: 'A', value: '4' },
      { label: 'B', value: '-4' },
      { label: 'C', value: '2' },
      { label: 'D', value: '\\text{不存在}', isLatex: true },
    ],
    correctAnswer: '\\text{不存在}',
    explanation: '',
    explanationLatex: '\\text{【陷阱！】题目只说了 } x \\neq 0 \\text{，没说 } x > 0 \\text{！} \\\\[6pt] \\text{当 } x > 0 \\text{ 时：} x + \\dfrac{4}{x} \\geq 2\\sqrt{4} = 4 \\text{（有最小值）} \\\\[6pt] \\text{但当 } x < 0 \\text{ 时，比如 } x = -0.01 \\text{：} \\\\[4pt] -0.01 + \\dfrac{4}{-0.01} = -0.01 - 400 = -400.01 \\\\[6pt] x \\text{ 越接近 } 0^- \\text{，值越小，没有下限！} \\\\[6pt] \\text{⚠ 教训：用基本不等式之前，先检查"一正"条件！}',
  },
  {
    id: 'iq2-3',
    type: 'choice',
    question: '',
    questionLatex: '\\text{已知 } x > 3 \\text{，则 } x + \\dfrac{4}{x-3} \\text{ 的最小值为}',
    options: [
      { label: 'A', value: '4' },
      { label: 'B', value: '5' },
      { label: 'C', value: '7' },
      { label: 'D', value: '8' },
    ],
    correctAnswer: '7',
    explanation: '',
    explanationLatex: '\\text{【换元凑形】分母是 } x{-}3 \\text{，所以把 } x \\text{ 凑出 } x{-}3 \\\\[6pt] x = (x{-}3) + 3 \\text{，代入：} \\\\[4pt] x + \\dfrac{4}{x{-}3} = (x{-}3) + \\dfrac{4}{x{-}3} + 3 \\\\[6pt] \\text{验证：} (x{-}3) \\cdot \\dfrac{4}{x{-}3} = 4 \\text{（固定的 ✓）} \\\\[4pt] (x{-}3) + \\dfrac{4}{x{-}3} \\geq 2\\sqrt{4} = 4 \\\\[6pt] \\text{加回常数 3：原式} \\geq 4 + 3 = 7 \\\\[6pt] \\text{等号：} x{-}3 = \\dfrac{4}{x{-}3} \\Rightarrow x = 5 \\text{ ✓}',
  },
  {
    id: 'iq2-4',
    type: 'choice',
    question: '',
    questionLatex: '\\text{已知 } a > 0,\\, b > 0,\\, a + b = 1 \\text{，则 } \\dfrac{4}{a} + \\dfrac{1}{b} \\text{ 的最小值为}',
    options: [
      { label: 'A', value: '5' },
      { label: 'B', value: '7' },
      { label: 'C', value: '9' },
      { label: 'D', value: '12' },
    ],
    correctAnswer: '9',
    explanation: '',
    explanationLatex: '\\text{【1的代换】} a+b=1 \\text{，原式乘以 } (a+b) = 1 \\text{，值不变} \\\\[6pt] \\dfrac{4}{a}+\\dfrac{1}{b} = \\left(\\dfrac{4}{a}+\\dfrac{1}{b}\\right)(a+b) \\\\[6pt] \\text{展开四项：} = 4 + \\dfrac{4b}{a} + \\dfrac{a}{b} + 1 = 5 + \\dfrac{4b}{a} + \\dfrac{a}{b} \\\\[6pt] \\text{验证：} \\dfrac{4b}{a} \\cdot \\dfrac{a}{b} = 4 \\text{（固定的 ✓）} \\\\[4pt] \\dfrac{4b}{a} + \\dfrac{a}{b} \\geq 2\\sqrt{4} = 4 \\\\[6pt] \\text{所以原式} \\geq 5 + 4 = 9 \\\\[6pt] \\text{等号：} \\dfrac{4b}{a} = \\dfrac{a}{b} \\Rightarrow a=2b \\text{，代入 } a+b=1 \\Rightarrow b=\\dfrac{1}{3},\\, a=\\dfrac{2}{3} \\text{ ✓}',
  },
];

