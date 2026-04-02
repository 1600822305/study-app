import type { QuizQuestionData } from '@/types';

export const circlePointPractice: QuizQuestionData[] = [
  {
    id: 'cp-1',
    printCols: 4,
    question: '圆 (x-2)²+(y+3)²=16 的圆心和半径分别是',
    questionLatex: '\\text{圆 }(x-2)^2+(y+3)^2=16\\text{ 的圆心和半径分别是}',
    options: [
      { label: 'A', value: '圆心(-2,3)，r=4' },
      { label: 'B', value: '圆心(2,-3)，r=16' },
      { label: 'C', value: '圆心(2,-3)，r=4' },
      { label: 'D', value: '圆心(-2,3)，r=16' },
    ],
    correctAnswer: '圆心(2,-3)，r=4',
    explanation: '令括号等于零得圆心(2,-3)；r²=16，r=4（取算术平方根）',
  },
  {
    id: 'cp-3',
    question: '以原点为圆心、半径为2的圆，标准方程是',
    questionLatex: '\\text{以原点为圆心、半径为 }2\\text{ 的圆，标准方程是}',
    options: [
      { label: 'A', value: 'x^2+y^2=2', isLatex: true },
      { label: 'B', value: '(x-2)^2+(y-2)^2=4', isLatex: true },
      { label: 'C', value: 'x^2+y^2=\\sqrt{2}', isLatex: true },
      { label: 'D', value: 'x^2+y^2=4', isLatex: true },
    ],
    correctAnswer: 'x^2+y^2=4',
    explanation: '圆心(0,0)，r=2，代入标准方程得 x²+y²=2²=4',
  },
  {
    id: 'cp-4',
    question: '下列方程中，不能表示圆的是',
    questionLatex: '\\text{下列方程中，不能表示圆的是}',
    options: [
      { label: 'A', value: 'x^2+y^2=1', isLatex: true },
      { label: 'B', value: 'x^2+(y-3)^2=5', isLatex: true },
      { label: 'C', value: '(x-1)^2+(y-2)^2=0', isLatex: true },
      { label: 'D', value: '(x+2)^2+y^2=4', isLatex: true },
    ],
    correctAnswer: '(x-1)^2+(y-2)^2=0',
    explanation: '圆的标准方程要求 r²>0，C 中 r²=0，轨迹只有一个点 (1,2)，不是圆',
  },
  {
    id: 'cp-5',
    printCols: 4,
    question: '已知点 A(3, a) 在圆 (x-1)²+(y-2)²=8 内，则 a 的取值范围是',
    cols: 2,
    options: [
      { label: 'A', value: '-4 < a < 4' },
      { label: 'B', value: 'a < 0 或 a > 4' },
      { label: 'C', value: '0 ≤ a ≤ 4' },
      { label: 'D', value: '0 < a < 4' },
    ],
    correctAnswer: '0 < a < 4',
    explanation: '代入不等式：(3-1)²+(a-2)²<8，即 4+(a-2)²<8，(a-2)²<4，解得 0<a<4（严格不等号，点在圆内不含边界）',
  },
  {
    id: 'cp-6',
    question: '圆心为 (-1, 2)，半径为 3，圆的标准方程是',
    questionLatex: '\\text{圆心为 }(-1,2)\\text{，半径为 }3\\text{，圆的标准方程是}',
    options: [
      { label: 'A', value: '(x-1)^2+(y+2)^2=9', isLatex: true },
      { label: 'B', value: '(x+1)^2+(y-2)^2=9', isLatex: true },
      { label: 'C', value: '(x-1)^2+(y+2)^2=3', isLatex: true },
      { label: 'D', value: '(x+1)^2+(y-2)^2=3', isLatex: true },
    ],
    correctAnswer: '(x+1)^2+(y-2)^2=9',
    explanation: '代入标准方程 (x-a)²+(y-b)²=r²，a=-1，b=2，r=3，得 (x+1)²+(y-2)²=9',
  },
];

export const circleEq2Practice: QuizQuestionData[] = [
  {
    id: 'ceq-3',
    question: '圆心在 y 轴上，且过点 (1,3) 和 (3,1)，则圆的方程是',
    questionLatex: '\\text{圆心在 }y\\text{ 轴上，且过点 }(1,3)\\text{ 和 }(3,1)\\text{，则圆的方程是}',
    options: [
      { label: 'A', value: 'x^2+y^2=10', isLatex: true },
      { label: 'B', value: 'x^2+(y-2)^2=5', isLatex: true },
      { label: 'C', value: 'x^2+y^2=\\sqrt{10}', isLatex: true },
      { label: 'D', value: '(x-2)^2+y^2=10', isLatex: true },
    ],
    correctAnswer: 'x^2+y^2=10',
    explanation: '设圆心 M(0,b)，由 |MA|=|MB| 得 1+(b−3)²=9+(b−1)²，展开得 10−6b=10−2b，解得 b=0；r²=1²+3²=10；方程为 x²+y²=10',
  },
  {
    id: 'ceq-4',
    question: '圆心M在直线 2x−y+1=0 上，且过原点和点 A(2,0)，则⊙M的方程是',
    questionLatex: '\\text{圆心 M 在直线 }2x{-}y{+}1{=}0\\text{ 上，且过原点和点 }A(2,0)\\text{，则 ⊙M 的方程是}',
    options: [
      { label: 'A', value: '(x-1)^2+(y-3)^2=10', isLatex: true },
      { label: 'B', value: '(x-1)^2+(y-3)^2=\\sqrt{10}', isLatex: true },
      { label: 'C', value: '(x+1)^2+(y-3)^2=10', isLatex: true },
      { label: 'D', value: '(x-1)^2+(y+3)^2=10', isLatex: true },
    ],
    correctAnswer: '(x-1)^2+(y-3)^2=10',
    explanation: '设圆心 M(a,b)，由 2a−b+1=0 得 b=2a+1；由 |MO|=|MA| 得 a²+b²=(a−2)²+b²，化简得 4a=4，a=1，b=3；r²=1²+3²=10；方程为 (x−1)²+(y−3)²=10',
  },
];

export const circleEx4Practice: QuizQuestionData[] = [
  {
    id: 'ce4-1',
    question: '直线 $3x+4y+5=0$ 与圆 $x^2+y^2=5$ 所截得的弦长为',
    options: [
      { label: 'A', value: '4', isLatex: false },
      { label: 'B', value: '2', isLatex: false },
      { label: 'C', value: '2\\sqrt{5}', isLatex: true },
      { label: 'D', value: '2\\sqrt{6}', isLatex: true },
    ],
    correctAnswer: '4',
    explanation: '圆心(0,0)，r=√5；d=|3·0+4·0+5|/√(9+16)=5/5=1；d=1<√5，相交；弦长=2√(r²−d²)=2√(5−1)=2√4=4',
  },
];

export const circleTangentOnPointPractice: QuizQuestionData[] = [
  {
    id: 'ct1-1',
    question: '已知圆 $x^2+y^2=13$，点 $P(2,3)$ 在圆上，求过 $P$ 的切线方程',
    options: [
      { label: 'A', value: '2x+3y-13=0', isLatex: false },
      { label: 'B', value: '3x+2y-13=0', isLatex: false },
      { label: 'C', value: '2x-3y+5=0', isLatex: false },
      { label: 'D', value: 'x+2y-8=0', isLatex: false },
    ],
    correctAnswer: '2x+3y-13=0',
    explanation: 'P(2,3)在圆上（4+9=13=r²），用切线公式 xm+yn=r²，代入 m=2,n=3,r²=13，得 2x+3y=13，即 2x+3y−13=0',
  },
];

export const circleTangentSummaryPractice: QuizQuestionData[] = [
  {
    id: 'cts-1',
    type: 'blank',
    question: '已知圆 $x^2+y^2=25$。（1）点 $A(3,-4)$ 在圆上，求过 A 的切线方程；（2）过圆外点 $Q(7,1)$ 作圆的切线，求两条切线方程',
    correctAnswer: '3x-4y-25=0；3x+4y-25=0和4x-3y-25=0',
    acceptableAnswers: ['3x-4y=25；3x+4y=25和4x-3y=25'],
  },
  {
    id: 'cts-combo',
    type: 'blank',
    question: '已知圆 C: (x-3)²+(y-1)²=5。（1）点 T(4,3) 在圆上，求过 T 的切线方程；（2）过圆外点 P(6,2) 作圆的切线，求两条切线方程',
    correctAnswer: 'x+2y-10=0；x+2y-10=0和2x-y-10=0',
    acceptableAnswers: ['x+2y=10；x+2y=10和2x-y=10'],
  },
  {
    id: 'cts-len',
    question: '圆 $(x-1)^2+(y-2)^2=4$，圆外点 $P(4,6)$，从 P 向圆作切线，切线长为',
    options: [
      { label: 'A', value: '\\sqrt{21}', isLatex: true },
      { label: 'B', value: '5' },
      { label: 'C', value: '\\sqrt{29}', isLatex: true },
      { label: 'D', value: '2\\sqrt{5}', isLatex: true },
    ],
    correctAnswer: '\\sqrt{21}',
  },
  {
    id: 'cts-slope',
    question: '与圆 $x^2+y^2=4$ 相切且斜率为 1 的直线方程为',
    options: [
      { label: 'A', value: 'y=x\\pm 2\\sqrt{2}', isLatex: true },
      { label: 'B', value: 'y=x\\pm 4', isLatex: true },
      { label: 'C', value: 'y=x\\pm 2', isLatex: true },
      { label: 'D', value: 'y=x\\pm \\sqrt{2}', isLatex: true },
    ],
    correctAnswer: 'y=x\\pm 2\\sqrt{2}',
  },
];

export const circleMidchordPractice: QuizQuestionData[] = [
  {
    id: 'cmc-1',
    question: '圆 $(x-1)^2+(y-2)^2=25$，弦 AB 的中点为 $M(4,6)$，则弦 AB 所在直线的方程是',
    options: [
      { label: 'A', value: '3x+4y-36=0', isLatex: true },
      { label: 'B', value: '4x-3y+2=0',  isLatex: true },
      { label: 'C', value: '3x-4y+12=0', isLatex: true },
      { label: 'D', value: '4x+3y-34=0', isLatex: true },
    ],
    correctAnswer: '3x+4y-36=0',
  },
];

export const circleGeneralFormPractice: QuizQuestionData[] = [
  {
    id: 'gf-1',
    question: '圆 $x^2+y^2-4x+2y-4=0$ 的圆心和半径是',
    options: [
      { label: 'A', value: '圆心(2,-1)，r=3' },
      { label: 'B', value: '圆心(-2,1)，r=3' },
      { label: 'C', value: '圆心(2,-1)，r=9' },
      { label: 'D', value: '圆心(4,-2)，r=4' },
    ],
    correctAnswer: '圆心(2,-1)，r=3',
  },
  {
    id: 'gf-2',
    question: '方程 $x^2+y^2+2x-4y+5=0$ 表示',
    options: [
      { label: 'A', value: '圆' },
      { label: 'B', value: '一个点' },
      { label: 'C', value: '不表示任何图形' },
      { label: 'D', value: '椭圆' },
    ],
    correctAnswer: '一个点',
  },
  {
    id: 'gf-3',
    type: 'blank',
    question: '过原点 $O(0,0)$、$A(2,0)$、$B(0,4)$ 三点的圆的标准方程是',
    correctAnswer: '(x-1)^2+(y-2)^2=5',
    acceptableAnswers: ['(x-1)²+(y-2)²=5'],
  },
  {
    id: 'gf-4',
    question: '方程 $x^2+y^2+kx+2y+(k+1)=0$ 能表示圆，则 $k$ 的取值范围是',
    options: [
      { label: 'A', value: 'k<0 或 k>4', isLatex: false },
      { label: 'B', value: '0<k<4', isLatex: false },
      { label: 'C', value: 'k\\leq 0 或 k\\geq 4', isLatex: true },
      { label: 'D', value: 'k\\neq 0 且 k\\neq 4', isLatex: true },
    ],
    correctAnswer: 'k<0 或 k>4',
  },
];

export const circleCirclePractice: QuizQuestionData[] = [
  {
    id: 'cc-1',
    question: '圆 $C_1: x^2+y^2-2x=0$ 与圆 $C_2: x^2+y^2+4y=0$ 的位置关系是',
    options: [
      { label: 'A', value: '外离' },
      { label: 'B', value: '外切' },
      { label: 'C', value: '相交' },
      { label: 'D', value: '内切' },
    ],
    correctAnswer: '相交',
  },
  {
    id: 'cc-2',
    question: '圆 $x^2+y^2=4$ 与圆 $(x-a)^2+y^2=1$ 外切，则 $a$ 的值为',
    options: [
      { label: 'A', value: '\\pm 3', isLatex: true },
      { label: 'B', value: '3' },
      { label: 'C', value: '\\pm\\sqrt{5}', isLatex: true },
      { label: 'D', value: '\\pm\\sqrt{3}', isLatex: true },
    ],
    correctAnswer: '\\pm 3',
  },
];

export const circleCommonChordPractice: QuizQuestionData[] = [
  {
    id: 'ccc-1',
    question: '圆 $x^2+y^2=25$ 与圆 $x^2+y^2-4x-2y-15=0$ 的公共弦所在直线方程是',
    options: [
      { label: 'A', value: '2x+y-5=0', isLatex: true },
      { label: 'B', value: '2x+y+5=0', isLatex: true },
      { label: 'C', value: '2x-y-5=0', isLatex: true },
      { label: 'D', value: 'x+2y-5=0', isLatex: true },
    ],
    correctAnswer: '2x+y-5=0',
  },
];

export const circleEx3Practice: QuizQuestionData[] = [
  {
    id: 'ce3-1',
    question: '圆 $C$ 为过点 $A(1,1)$、$B(5,1)$ 的圆中最小的圆，则圆 $C$ 上任意一点 $M$ 到点 $P(3,6)$ 的距离范围是',
    options: [
      { label: 'A', value: '[3,7]', isLatex: false },
      { label: 'B', value: '[1,9]', isLatex: false },
      { label: 'C', value: '[3,5]', isLatex: false },
      { label: 'D', value: '[5-\\sqrt{2},\\,5+\\sqrt{2}]', isLatex: true },
    ],
    correctAnswer: '[3,7]',
    explanation: '最小圆以 AB 为直径，圆心 C 为 AB 中点 (3,1)，r=|AB|/2=2；|PC|=√(0²+5²)=5>2，P 在圆外；范围 [|PC|−r, |PC|+r]=[5−2, 5+2]=[3, 7]',
  },
];

export const circleSymPractice: QuizQuestionData[] = [
  {
    id: 'csym-1',
    type: 'blank',
    question: '圆 $(x-1)^2+(y+2)^2=4$ 关于直线 $y=x$ 对称的圆的方程是',
    correctAnswer: '(x+2)^2+(y-1)^2=4',
    acceptableAnswers: ['(x+2)²+(y-1)²=4'],
  },
  {
    id: 'csym-2',
    type: 'blank',
    question: '圆 $x^2+y^2+2x-4y+1=0$ 关于直线 $x=1$ 对称的圆的方程是',
    correctAnswer: '(x-3)^2+(y-2)^2=4',
    acceptableAnswers: ['(x-3)²+(y-2)²=4'],
  },
  {
    id: 'csym-3',
    type: 'blank',
    question: '圆 $(x+2)^2+(y-1)^2=1$ 关于直线 $x-y-1=0$ 对称的圆的方程是',
    correctAnswer: '(x-2)^2+(y+3)^2=1',
    acceptableAnswers: ['(x-2)²+(y+3)²=1'],
  },
];

export const circlePointSymPractice: QuizQuestionData[] = [
  {
    id: 'cpsym-1',
    type: 'blank',
    question: '圆 $(x-3)^2+(y-1)^2=9$ 关于原点对称的圆的方程是',
    correctAnswer: '(x+3)^2+(y+1)^2=9',
    acceptableAnswers: ['(x+3)²+(y+1)²=9'],
  },
  {
    id: 'cpsym-2',
    type: 'blank',
    question: '圆 $x^2+y^2-6x+4y-3=0$ 关于点 $(1,\\,2)$ 对称的圆的方程是',
    correctAnswer: '(x+1)^2+(y-6)^2=16',
    acceptableAnswers: ['(x+1)²+(y-6)²=16'],
  },
  {
    id: 'cpsym-3',
    type: 'blank',
    question: '圆 $(x+1)^2+(y-3)^2=5$ 关于点 $(2,\\,1)$ 对称的圆的方程是',
    correctAnswer: '(x-5)^2+(y+1)^2=5',
    acceptableAnswers: ['(x-5)²+(y+1)²=5'],
  },
];

export const circleTangentCountPractice: QuizQuestionData[] = [
  {
    id: 'ctc-2',
    question: '圆 $C_1: x^2+y^2-2x=0$ 与圆 $C_2: x^2+y^2-4x-4y+4=0$，两圆公切线的条数为',
    options: [
      { label: 'A', value: '1' },
      { label: 'B', value: '2' },
      { label: 'C', value: '3' },
      { label: 'D', value: '4' },
    ],
    correctAnswer: '2',
  },
  {
    id: 'ctc-4',
    question: '圆 $C_1: x^2+y^2=1$ 与圆 $C_2: (x-a)^2+y^2=4$ 恰好相交，则 $a$ 的取值范围是',
    options: [
      { label: 'A', value: '|a|<1', isLatex: true },
      { label: 'B', value: '1<|a|<3', isLatex: true },
      { label: 'C', value: '|a|>3', isLatex: true },
      { label: 'D', value: '|a|=1 \\text{ 或 } 3', isLatex: true },
    ],
    correctAnswer: '1<|a|<3',
  },
];

export const circleParamPractice: QuizQuestionData[] = [
  {
    id: 'cparam-1',
    type: 'blank',
    question: '直线 $3x+4y+m=0$ 与圆 $x^2+y^2=4$ 相切，则 $m$ 的值为',
    correctAnswer: '\\pm 10',
    acceptableAnswers: ['10或-10', '-10或10'],
  },
  {
    id: 'cparam-2',
    type: 'blank',
    question: '直线 $x-y+1=0$ 与圆 $(x-a)^2+y^2=2$ 有公共点，则实数 $a$ 的取值范围是',
    correctAnswer: '[-3,1]',
  },
  {
    id: 'cparam-3',
    type: 'blank',
    question: '直线 $x+y+a=0$ 与圆 $x^2+y^2-2x+2y=2$ 相交，则 $a$ 的取值范围是',
    correctAnswer: '(-2\\sqrt{2}-2, 2\\sqrt{2}-2)',
  },
  {
    id: 'cparam-4',
    type: 'blank',
    question: '直线 $y=x+m$ 截圆 $x^2+y^2=9$ 所得弦长为 $4$，则 $m$ 的值为',
    correctAnswer: '\\pm\\sqrt{2}',
  },
  {
    id: 'cparam-5',
    type: 'blank',
    question: '直线 $x+my=1+m$ 与圆 $x^2+y^2-2x-4y+1=0$ 相交，则实数 $m$ 的取值范围是',
    correctAnswer: '(-\\infty,+\\infty)',
    acceptableAnswers: ['全体实数', 'R'],
  },
  {
    id: 'cparam-6',
    type: 'blank',
    question: '直线 $y=kx+1$ 与圆 $(x-2)^2+(y-3)^2=4$ 相离，则 $k$ 的取值范围是',
    correctAnswer: '(-\\infty,0)\\cup(\\frac{3}{4},+\\infty)',
  },
];
