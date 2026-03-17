import type { QuizQuestionData } from '@/types';
import type { EssayQuestion } from '@/components/shared/ExamPaper';

// ── 第一阶段考试：数学语言（复数 · 集合 · 逻辑用语） ──
// 全部独立自编，高考标准，不从题库选取
// 选择题 24×3 = 72分，解答题 4×12 = 48分，共 120 分

// ═══════ 一、复数（8 题） ═══════
export const stage1ComplexQuestions: QuizQuestionData[] = [
  {
    id: 's1e-c1',
    question: '',
    questionLatex: '\\text{（2025 高考）复数 } z = \\dfrac{1+3i}{1-i} \\text{ 的虚部为}',
    type: 'choice',
    options: [
      { label: 'A', value: '-1+2i', isLatex: true },
      { label: 'B', value: '2', isLatex: true },
      { label: 'C', value: '2i', isLatex: true },
      { label: 'D', value: '-1', isLatex: true },
    ],
    correctAnswer: '2',
  },
  {
    id: 's1e-c2',
    question: '',
    questionLatex: '\\text{已知 } i \\text{ 是虚数单位，则 } i + i^2 + i^3 + i^4 =',
    type: 'choice',
    options: [
      { label: 'A', value: '0' },
      { label: 'B', value: '1' },
      { label: 'C', value: '-1' },
      { label: 'D', value: 'i', isLatex: true },
    ],
    correctAnswer: '0',
  },
  {
    id: 's1e-c3',
    question: '',
    questionLatex: '\\text{复数 } z = (2-i)(1+i) \\text{ 在复平面上对应的点位于}',
    type: 'choice',
    options: [
      { label: 'A', value: '\\text{第一象限}', isLatex: true },
      { label: 'B', value: '\\text{第二象限}', isLatex: true },
      { label: 'C', value: '\\text{第三象限}', isLatex: true },
      { label: 'D', value: '\\text{第四象限}', isLatex: true },
    ],
    correctAnswer: '\\text{第一象限}',
  },
  {
    id: 's1e-c4',
    question: '',
    questionLatex: '\\text{若复数 } z = a + bi\\text{（}a,b \\in \\mathbb{R}\\text{），则 } z \\cdot \\bar{z} =',
    type: 'choice',
    options: [
      { label: 'A', value: 'a^2 + b^2', isLatex: true },
      { label: 'B', value: 'a^2 - b^2', isLatex: true },
      { label: 'C', value: '(a+b)^2', isLatex: true },
      { label: 'D', value: '(a-b)^2', isLatex: true },
    ],
    correctAnswer: 'a^2 + b^2',
  },
  {
    id: 's1e-c5',
    question: '',
    questionLatex: '\\text{已知 } |z| = 5\\text{，且 } z = 3 + bi\\text{（}b > 0\\text{），则 } b =',
    type: 'choice',
    options: [
      { label: 'A', value: '2' },
      { label: 'B', value: '4' },
      { label: 'C', value: '\\sqrt{34}', isLatex: true },
      { label: 'D', value: '16' },
    ],
    correctAnswer: '4',
  },
  {
    id: 's1e-c6',
    question: '',
    questionLatex: '\\text{若 } \\dfrac{a + i}{i} = 1 + i\\text{（}a \\in \\mathbb{R}\\text{），则 } a =',
    type: 'choice',
    options: [
      { label: 'A', value: '-1' },
      { label: 'B', value: '1' },
      { label: 'C', value: '2' },
      { label: 'D', value: '-2' },
    ],
    correctAnswer: '-1',
  },
  {
    id: 's1e-c7',
    question: '',
    questionLatex: '\\text{若复数 } z = (m^2-1) + (m+1)i \\text{ 是纯虚数，则实数 } m =',
    type: 'choice',
    options: [
      { label: 'A', value: '1' },
      { label: 'B', value: '-1' },
      { label: 'C', value: '\\pm 1', isLatex: true },
      { label: 'D', value: '0' },
    ],
    correctAnswer: '1',
  },
  {
    id: 's1e-c8',
    question: '',
    questionLatex: '\\text{设 } z_1 = 1 + 2i,\\; z_2 = 3 - 4i\\text{，则 } z_1 + \\bar{z}_2 =',
    type: 'choice',
    options: [
      { label: 'A', value: '4 - 2i', isLatex: true },
      { label: 'B', value: '4 + 6i', isLatex: true },
      { label: 'C', value: '-2 + 6i', isLatex: true },
      { label: 'D', value: '-2 - 2i', isLatex: true },
    ],
    correctAnswer: '4 + 6i',
  },
];

// ═══════ 二、集合（10 题） ═══════
export const stage1SetsQuestions: QuizQuestionData[] = [
  {
    id: 's1e-s1',
    question: '',
    questionLatex: '\\text{（2024 高考）设集合 } A = \\{1,2,4\\},\\; B = \\{2,4,5\\}\\text{，则 } A \\cap B =',
    type: 'choice',
    options: [
      { label: 'A', value: '\\{2\\}', isLatex: true },
      { label: 'B', value: '\\{2,4\\}', isLatex: true },
      { label: 'C', value: '\\{1,2,4,5\\}', isLatex: true },
      { label: 'D', value: '\\{4,5\\}', isLatex: true },
    ],
    correctAnswer: '\\{2,4\\}',
  },
  {
    id: 's1e-s2',
    question: '',
    questionLatex: '\\text{设全集 } U = \\{1,2,3,4,5\\},\\; A = \\{1,3,5\\}\\text{，则 } \\complement_U A =',
    type: 'choice',
    options: [
      { label: 'A', value: '\\{2,4\\}', isLatex: true },
      { label: 'B', value: '\\{1,3\\}', isLatex: true },
      { label: 'C', value: '\\{2,3,4\\}', isLatex: true },
      { label: 'D', value: '\\{1,2,4\\}', isLatex: true },
    ],
    correctAnswer: '\\{2,4\\}',
  },
  {
    id: 's1e-s3',
    question: '',
    questionLatex: '\\text{设 } A = \\{x \\mid x^2 - 3x + 2 = 0\\},\\; B = \\{x \\mid x^2 - 2x = 0\\}\\text{，则 } A \\cup B =',
    type: 'choice',
    options: [
      { label: 'A', value: '\\{0,1,2\\}', isLatex: true },
      { label: 'B', value: '\\{1,2\\}', isLatex: true },
      { label: 'C', value: '\\{0,2\\}', isLatex: true },
      { label: 'D', value: '\\{2\\}', isLatex: true },
    ],
    correctAnswer: '\\{0,1,2\\}',
  },
  {
    id: 's1e-s4',
    question: '',
    questionLatex: '\\text{已知 } A = \\{x \\mid 1 \\leq x < 3\\},\\; B = \\{x \\mid 2 < x \\leq 5\\}\\text{，则 } A \\cap B =',
    type: 'choice',
    options: [
      { label: 'A', value: '(2,3)', isLatex: true },
      { label: 'B', value: '[2,3]', isLatex: true },
      { label: 'C', value: '(2,3]', isLatex: true },
      { label: 'D', value: '[2,3)', isLatex: true },
    ],
    correctAnswer: '(2,3)',
  },
  {
    id: 's1e-s5',
    question: '',
    questionLatex: '\\text{设全集 } U = \\mathbb{R},\\; A = \\{x \\mid x \\geq 1\\}\\text{，则 } \\complement_U A =',
    type: 'choice',
    options: [
      { label: 'A', value: '\\{x \\mid x < 1\\}', isLatex: true },
      { label: 'B', value: '\\{x \\mid x \\leq 1\\}', isLatex: true },
      { label: 'C', value: '\\{x \\mid x > 1\\}', isLatex: true },
      { label: 'D', value: '(-\\infty, 1]', isLatex: true },
    ],
    correctAnswer: '\\{x \\mid x < 1\\}',
  },
  {
    id: 's1e-s6',
    question: '',
    questionLatex: '\\text{集合 } \\{1, 2\\} \\text{ 的所有子集个数为}',
    type: 'choice',
    options: [
      { label: 'A', value: '2' },
      { label: 'B', value: '3' },
      { label: 'C', value: '4' },
      { label: 'D', value: '5' },
    ],
    correctAnswer: '4',
  },
  {
    id: 's1e-s7',
    question: '',
    questionLatex: '\\text{已知 } A = \\{x \\mid -1 < x \\leq 2\\},\\; B = \\{x \\mid x \\leq 1\\}\\text{，则 } A \\cup B =',
    type: 'choice',
    options: [
      { label: 'A', value: '(-1, 2]', isLatex: true },
      { label: 'B', value: '\\{x \\mid -1 < x \\leq 1\\}', isLatex: true },
      { label: 'C', value: '\\mathbb{R}', isLatex: true },
      { label: 'D', value: '(-\\infty, 2]', isLatex: true },
    ],
    correctAnswer: '(-\\infty, 2]',
  },
  {
    id: 's1e-s8',
    question: '',
    questionLatex: '\\text{已知集合 } A = \\{x \\mid x^2 - x - 6 \\leq 0\\}\\text{，则 } A =',
    type: 'choice',
    options: [
      { label: 'A', value: '[-3, 2]', isLatex: true },
      { label: 'B', value: '[-2, 3]', isLatex: true },
      { label: 'C', value: '(-3, 2)', isLatex: true },
      { label: 'D', value: '(-2, 3)', isLatex: true },
    ],
    correctAnswer: '[-2, 3]',
  },
  {
    id: 's1e-s9',
    question: '',
    questionLatex: '\\text{若 } A \\cap B = A\\text{，则下列一定成立的是}',
    type: 'choice',
    options: [
      { label: 'A', value: 'A = B', isLatex: true },
      { label: 'B', value: 'A \\subseteq B', isLatex: true },
      { label: 'C', value: 'B \\subseteq A', isLatex: true },
      { label: 'D', value: 'A \\cup B = A', isLatex: true },
    ],
    correctAnswer: 'A \\subseteq B',
  },
  {
    id: 's1e-s10',
    question: '',
    questionLatex: '\\text{已知集合 } A = \\{x \\mid x > 1\\},\\; B = \\{x \\mid x > a\\}\\text{，若 } A \\subseteq B\\text{，则 } a \\text{ 的取值范围为}',
    type: 'choice',
    options: [
      { label: 'A', value: 'a \\leq 1', isLatex: true },
      { label: 'B', value: 'a \\geq 1', isLatex: true },
      { label: 'C', value: 'a < 1', isLatex: true },
      { label: 'D', value: 'a > 1', isLatex: true },
    ],
    correctAnswer: 'a \\leq 1',
  },
];

// ═══════ 三、逻辑用语（6 题） ═══════
export const stage1LogicQuestions: QuizQuestionData[] = [
  {
    id: 's1e-l1',
    question: '',
    questionLatex: '\\text{"} x = 1 \\text{"是"} x^2 = 1 \\text{"的}',
    type: 'choice',
    options: [
      { label: 'A', value: '\\text{充分不必要条件}', isLatex: true },
      { label: 'B', value: '\\text{必要不充分条件}', isLatex: true },
      { label: 'C', value: '\\text{充要条件}', isLatex: true },
      { label: 'D', value: '\\text{既不充分也不必要条件}', isLatex: true },
    ],
    correctAnswer: '\\text{充分不必要条件}',
  },
  {
    id: 's1e-l2',
    question: '',
    questionLatex: '\\text{命题"若 } x > 1\\text{，则 } x > 0\\text{"的逆否命题为}',
    type: 'choice',
    options: [
      { label: 'A', value: '\\text{若 } x \\leq 0\\text{，则 } x \\leq 1', isLatex: true },
      { label: 'B', value: '\\text{若 } x > 0\\text{，则 } x > 1', isLatex: true },
      { label: 'C', value: '\\text{若 } x \\leq 1\\text{，则 } x \\leq 0', isLatex: true },
      { label: 'D', value: '\\text{若 } x < 0\\text{，则 } x < 1', isLatex: true },
    ],
    correctAnswer: '\\text{若 } x \\leq 0\\text{，则 } x \\leq 1',
  },
  {
    id: 's1e-l3',
    question: '',
    questionLatex: '\\text{命题"} \\forall x \\in \\mathbb{R},\\; x^2 \\geq 0 \\text{"的否定为}',
    type: 'choice',
    options: [
      { label: 'A', value: '\\forall x \\in \\mathbb{R},\\; x^2 < 0', isLatex: true },
      { label: 'B', value: '\\exists x_0 \\in \\mathbb{R},\\; x_0^2 < 0', isLatex: true },
      { label: 'C', value: '\\exists x_0 \\in \\mathbb{R},\\; x_0^2 \\leq 0', isLatex: true },
      { label: 'D', value: '\\forall x \\in \\mathbb{R},\\; x^2 \\leq 0', isLatex: true },
    ],
    correctAnswer: '\\exists x_0 \\in \\mathbb{R},\\; x_0^2 < 0',
  },
  {
    id: 's1e-l4',
    question: '',
    questionLatex: '\\text{"} x > 2 \\text{"是"} x^2 > 4 \\text{"的}',
    type: 'choice',
    options: [
      { label: 'A', value: '\\text{充分不必要条件}', isLatex: true },
      { label: 'B', value: '\\text{必要不充分条件}', isLatex: true },
      { label: 'C', value: '\\text{充要条件}', isLatex: true },
      { label: 'D', value: '\\text{既不充分也不必要条件}', isLatex: true },
    ],
    correctAnswer: '\\text{充分不必要条件}',
  },
  {
    id: 's1e-l5',
    question: '',
    questionLatex: '\\text{命题"} \\exists x_0 \\in \\mathbb{R},\\; x_0^2 + x_0 + 1 < 0 \\text{"是}',
    type: 'choice',
    options: [
      { label: 'A', value: '\\text{真命题}', isLatex: true },
      { label: 'B', value: '\\text{假命题}', isLatex: true },
      { label: 'C', value: '\\text{不能判断}', isLatex: true },
      { label: 'D', value: '\\text{以上都不对}', isLatex: true },
    ],
    correctAnswer: '\\text{假命题}',
  },
  {
    id: 's1e-l6',
    question: '',
    questionLatex: '\\text{命题"若 } x^2 + y^2 = 0\\text{，则 } x = 0 \\text{ 且 } y = 0\\text{"的否命题为}',
    type: 'choice',
    options: [
      { label: 'A', value: '\\text{若 } x^2 + y^2 \\neq 0\\text{，则 } x \\neq 0 \\text{ 且 } y \\neq 0', isLatex: true },
      { label: 'B', value: '\\text{若 } x^2 + y^2 \\neq 0\\text{，则 } x \\neq 0 \\text{ 或 } y \\neq 0', isLatex: true },
      { label: 'C', value: '\\text{若 } x = 0 \\text{ 且 } y = 0\\text{，则 } x^2 + y^2 = 0', isLatex: true },
      { label: 'D', value: '\\text{若 } x \\neq 0 \\text{ 或 } y \\neq 0\\text{，则 } x^2 + y^2 \\neq 0', isLatex: true },
    ],
    correctAnswer: '\\text{若 } x^2 + y^2 \\neq 0\\text{，则 } x \\neq 0 \\text{ 或 } y \\neq 0',
  },
];

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
  },
  {
    id: 's1e-essay-2',
    questionLatex:
      '\\text{已知集合 } A = \\{x \\mid x^2 - 2x - 3 \\leq 0\\},\\; B = \\{x \\mid x > a\\}\\text{。}\\\\[6pt]' +
      '\\text{（1）若 } A \\cap B = (1, 3]\\text{，求 } a \\text{ 的值；}\\\\[4pt]' +
      '\\text{（2）若 } A \\subseteq B\\text{，求 } a \\text{ 的取值范围。}',
    score: 12,
    lines: 10,
  },
  {
    id: 's1e-essay-3',
    questionLatex:
      '\\text{设 } p: |x - 1| \\leq 2,\\; q: x^2 - 2x + 1 - m^2 \\leq 0 \\;(m > 0)\\text{。}\\\\[6pt]' +
      '\\text{（1）若 } m = 1\\text{，判断 p 是 q 的什么条件，并说明理由；}\\\\[4pt]' +
      '\\text{（2）若 p 是 q 的充分不必要条件，求 } m \\text{ 的取值范围。}',
    score: 12,
    lines: 12,
  },
  {
    id: 's1e-essay-4',
    questionLatex:
      '\\text{已知 } U = \\mathbb{R},\\; A = \\{x \\mid x^2 - 4 \\leq 0\\},\\; B = \\{x \\mid 2x - a \\geq 0\\}\\text{。}\\\\[6pt]' +
      '\\text{（1）当 } a = 2 \\text{ 时，求 } A \\cap (\\complement_U B)\\text{；}\\\\[4pt]' +
      '\\text{（2）若 } A \\cup B = B\\text{，求实数 } a \\text{ 的取值范围。}',
    score: 12,
    lines: 10,
  },
];
