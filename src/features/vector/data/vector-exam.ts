import type { QuizQuestionData } from '@/types';

export const vectorExamQuestions: QuizQuestionData[] = [
  // ── 第1题：垂直判定求参数（最高频考点） ──
  {
    id: 'vex1',
    question: '已知向量 a=(1,1)，b=(1,-1)，若 (a+λb) ⊥ (a+μb)，则',
    questionLatex: '\\text{已知向量 } \\vec{a}=(1,1),\\; \\vec{b}=(1,-1)\\text{，若 } (\\vec{a}+\\lambda\\vec{b}) \\perp (\\vec{a}+\\mu\\vec{b})\\text{，则}',
    options: [
      { label: 'A', value: '\\lambda + \\mu = 1', isLatex: true },
      { label: 'B', value: '\\lambda + \\mu = -1', isLatex: true },
      { label: 'C', value: '\\lambda\\mu = 1', isLatex: true },
      { label: 'D', value: '\\lambda\\mu = -1', isLatex: true },
    ],
    correctAnswer: 'D',
    explanation: '',
    explanationLatex: '',
  },

  // ── 第2题：平行判定求参数 ──
  {
    id: 'vex2',
    question: '若向量 a=(2,3)，b=(m,-2)，且 a∥b，则 m =',
    questionLatex: '\\text{若向量 } \\vec{a}=(2,3),\\; \\vec{b}=(m,-2)\\text{，且 } \\vec{a} \\parallel \\vec{b}\\text{，则 } m =',
    options: [
      { label: 'A', value: '-\\dfrac{4}{3}', isLatex: true },
      { label: 'B', value: '\\dfrac{4}{3}', isLatex: true },
      { label: 'C', value: '-\\dfrac{3}{2}', isLatex: true },
      { label: 'D', value: '\\dfrac{3}{2}', isLatex: true },
    ],
    correctAnswer: 'A',
    explanation: '',
    explanationLatex: '',
  },

  // ── 第3题：数量积求夹角 ──
  {
    id: 'vex3',
    question: '已知向量 a=(1,√3)，b=(√3,1)，则 a 与 b 的夹角为',
    questionLatex: '\\text{已知向量 } \\vec{a}=(1,\\sqrt{3}),\\; \\vec{b}=(\\sqrt{3},1)\\text{，则 } \\vec{a} \\text{ 与 } \\vec{b} \\text{ 的夹角为}',
    options: [
      { label: 'A', value: '30\\degree', isLatex: true },
      { label: 'B', value: '45\\degree', isLatex: true },
      { label: 'C', value: '60\\degree', isLatex: true },
      { label: 'D', value: '90\\degree', isLatex: true },
    ],
    correctAnswer: 'A',
    explanation: '',
    explanationLatex: '',
  },

  // ── 第4题：|a+b| 展开求模 ──
  {
    id: 'vex4',
    question: '已知 |a|=2，|b|=1，a·b=-1，则 |a-2b| =',
    questionLatex: '\\text{已知 } |\\vec{a}|=2,\\; |\\vec{b}|=1,\\; \\vec{a}\\cdot\\vec{b}=-1\\text{，则 } |\\vec{a}-2\\vec{b}| =',
    options: [
      { label: 'A', value: '2', isLatex: true },
      { label: 'B', value: '2\\sqrt{2}', isLatex: true },
      { label: 'C', value: '3', isLatex: true },
      { label: 'D', value: '2\\sqrt{3}', isLatex: true },
    ],
    correctAnswer: 'D',
    explanation: '',
    explanationLatex: '',
  },

  // ── 第5题：向量坐标运算综合（填空） ──
  {
    id: 'vex5',
    type: 'blank',
    question: '已知向量 a=(1,2)，b=(x,1)，若 |a+b|=√10，则 x 的值为______',
    questionLatex: '\\text{已知向量 } \\vec{a}=(1,2),\\; \\vec{b}=(x,1)\\text{，若 } |\\vec{a}+\\vec{b}|=\\sqrt{10}\\text{，则 } x \\text{ 的值为\\underline{\\hspace{3em}}}',
    correctAnswer: '0或-2',
    acceptableAnswers: ['0 或 -2', '-2或0', '-2 或 0', '0,-2', '-2,0', 'x=0或x=-2'],
    explanation: '',
    explanationLatex: '',
  },

  // ── 第6题：向量+解析几何综合（填空） ──
  {
    id: 'vex6',
    type: 'blank',
    question: '平行四边形 ABCD 中，A(1,2)，B(4,3)，C(6,7)，则顶点 D 的坐标为______',
    questionLatex: '\\text{平行四边形 } ABCD \\text{ 中，} A(1,2),\\; B(4,3),\\; C(6,7)\\text{，则顶点 } D \\text{ 的坐标为\\underline{\\hspace{3em}}}',
    correctAnswer: '(3,6)',
    acceptableAnswers: ['(3, 6)', '3,6', 'D(3,6)', 'D(3, 6)'],
    explanation: '',
    explanationLatex: '',
  },

  // ── 第7题：三角形向量综合（带图） ──
  {
    id: 'vex7',
    type: 'blank',
    question: '如图，在△ABC中，D是BC的中点，E在AB上且AE=⅓AB。用向量AB、AC表示向量DE =______',
    questionLatex: '\\text{如图，在 } \\triangle ABC \\text{ 中，} D \\text{ 是 } BC \\text{ 的中点，} E \\text{ 在 } AB \\text{ 上且 } \\overrightarrow{AE} = \\dfrac{1}{3}\\overrightarrow{AB}\\text{。}\\\\[4pt]\\text{用 } \\overrightarrow{AB},\\; \\overrightarrow{AC} \\text{ 表示 } \\overrightarrow{DE} = \\text{\\underline{\\hspace{3em}}}',
    questionDiagram: 'vector-triangle-midpoint',
    correctAnswer: '-⅙AB-½AC',
    acceptableAnswers: ['-1/6AB-1/2AC', '-⅙AB-½AC', '-\\frac{1}{6}AB-\\frac{1}{2}AC'],
    explanation: '',
    explanationLatex: '',
  },

  // ── 第8题：平行四边形对角线综合（带图） ──
  {
    id: 'vex8',
    type: 'blank',
    question: '如图，平行四边形ABCD中，A(0,0)，B(4,0)，D(1,3)，对角线交于O。求C和O的坐标。C=______ O=______',
    questionLatex: '\\text{如图，平行四边形 } ABCD \\text{ 中，} A(0,0),\\; B(4,0),\\; D(1,3)\\text{，对角线交于 } O\\text{。}\\\\[4pt]\\text{求 } C \\text{ 和 } O \\text{ 的坐标。} C = \\text{\\underline{\\hspace{3em}}}\\;\\; O = \\text{\\underline{\\hspace{3em}}}',
    questionDiagram: 'vector-parallelogram-diag',
    correctAnswer: 'C(5,3) O(2.5,1.5)',
    acceptableAnswers: ['C(5,3),O(2.5,1.5)', '(5,3) (2.5,1.5)', 'C=(5,3) O=(2.5,1.5)', 'C(5,3)，O(2.5,1.5)'],
    explanation: '',
    explanationLatex: '',
  },

  // ── 第9题：向量夹角与数量积综合（带图） ──
  {
    id: 'vex9',
    question: '如图，O为圆心，A、B在圆上，∠AOB=120°，|OA|=2，则 OA·OB =',
    questionLatex: '\\text{如图，} O \\text{ 为圆心，} A,B \\text{ 在圆上，} \\angle AOB = 120\\degree,\\; |\\overrightarrow{OA}| = 2\\text{，则 } \\overrightarrow{OA} \\cdot \\overrightarrow{OB} =',
    questionDiagram: 'vector-angle-circle',
    options: [
      { label: 'A', value: '-2', isLatex: true },
      { label: 'B', value: '-1', isLatex: true },
      { label: 'C', value: '1', isLatex: true },
      { label: 'D', value: '2', isLatex: true },
    ],
    correctAnswer: 'A',
    explanation: '',
    explanationLatex: '',
  },

  // ── 第10题：垂直条件 + 展开求模（综合） ──
  {
    id: 'vex10',
    question: '已知 |a|=2，|b|=1，且 a⊥(a-2b)，则 |a-b| =',
    questionLatex: '\\text{已知 } |\\vec{a}|=2,\\; |\\vec{b}|=1\\text{，且 } \\vec{a} \\perp (\\vec{a}-2\\vec{b})\\text{，则 } |\\vec{a}-\\vec{b}| =',
    options: [
      { label: 'A', value: '1', isLatex: true },
      { label: 'B', value: '\\sqrt{2}', isLatex: true },
      { label: 'C', value: '\\sqrt{3}', isLatex: true },
      { label: 'D', value: '2', isLatex: true },
    ],
    correctAnswer: 'A',
    explanation: '',
    explanationLatex: '',
  },

  // ── 第11题：数量积求夹角余弦 ──
  {
    id: 'vex11',
    type: 'blank',
    question: '已知 |a|=3，|b|=4，a·b=6，则 a 与 b 的夹角 θ 的余弦值为______',
    questionLatex: '\\text{已知 } |\\vec{a}|=3,\\; |\\vec{b}|=4,\\; \\vec{a}\\cdot\\vec{b}=6\\text{，则 } \\vec{a} \\text{ 与 } \\vec{b} \\text{ 的夹角 } \\theta \\text{ 的余弦值为\\underline{\\hspace{3em}}}',
    correctAnswer: '1/2',
    acceptableAnswers: ['0.5', '½', '\\frac{1}{2}'],
    explanation: '',
    explanationLatex: '',
  },
];
