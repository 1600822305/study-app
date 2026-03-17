import type { QuizQuestionData } from '@/types';

/** ── 正弦定理即时训练（5 题）── */
export const sineLawPractice: QuizQuestionData[] = [
  {
    id: 'st-sl-1',
    question: '在 △ABC 中，A=30°，B=45°，a=2，则 b=?',
    questionLatex: '\\text{在 }\\triangle ABC\\text{ 中，}A=30°,\\;B=45°,\\;a=2\\text{，则 }b=\\text{？}',
    options: [
      { label: 'A', value: '\\sqrt{2}', isLatex: true },
      { label: 'B', value: '2\\sqrt{2}', isLatex: true },
      { label: 'C', value: '2', isLatex: true },
      { label: 'D', value: '\\sqrt{6}', isLatex: true },
    ],
    correctAnswer: '2\\sqrt{2}',
  },
  {
    id: 'st-sl-2',
    question: '在 △ABC 中，sinA:sinB:sinC=2:3:4，则 a:b:c=?',
    questionLatex: '\\text{在 }\\triangle ABC\\text{ 中，}\\sin A:\\sin B:\\sin C=2:3:4\\text{，则 }a:b:c=\\text{？}',
    options: [
      { label: 'A', value: '2:3:4', isLatex: false },
      { label: 'B', value: '4:9:16', isLatex: false },
      { label: 'C', value: '4:3:2', isLatex: false },
      { label: 'D', value: '1:2:3', isLatex: false },
    ],
    correctAnswer: '2:3:4',
  },
  {
    id: 'st-sl-3',
    question: '在 △ABC 中，a/sinA=b/sinB=2R，R 是外接圆半径。若 R=1，A=30°，则 a=?',
    questionLatex: '\\text{在 }\\triangle ABC\\text{ 中，}\\dfrac{a}{\\sin A}=2R\\text{，}R\\text{ 是外接圆半径。若 }R=1,\\;A=30°\\text{，则 }a=\\text{？}',
    options: [
      { label: 'A', value: '1', isLatex: false },
      { label: 'B', value: '2', isLatex: false },
      { label: 'C', value: '\\sqrt{3}', isLatex: true },
      { label: 'D', value: '\\dfrac{\\sqrt{3}}{2}', isLatex: true },
    ],
    correctAnswer: '1',
  },
  {
    id: 'st-sl-5',
    question: '在 △ABC 中，a=1，b=√3，A=30°，则 B 的可能值有几个？',
    questionLatex: '\\text{在 }\\triangle ABC\\text{ 中，}a=1,\\;b=\\sqrt{3},\\;A=30°\\text{，则 }B\\text{ 的可能值有几个？}',
    options: [
      { label: 'A', value: '0 \\text{ 个}', isLatex: true },
      { label: 'B', value: '1 \\text{ 个}', isLatex: true },
      { label: 'C', value: '2 \\text{ 个}', isLatex: true },
      { label: 'D', value: '3 \\text{ 个}', isLatex: true },
    ],
    correctAnswer: '2 \\text{ 个}',
  },
  {
    id: 'st-sl-6',
    question: '在 △ABC 中，A=60°，B=45°，b=2，则 a=?',
    questionLatex: '\\text{在 }\\triangle ABC\\text{ 中，}A=60°,\\;B=45°,\\;b=2\\text{，则 }a=\\text{？}',
    options: [
      { label: 'A', value: '\\sqrt{2}', isLatex: true },
      { label: 'B', value: '\\sqrt{3}', isLatex: true },
      { label: 'C', value: '\\sqrt{6}', isLatex: true },
      { label: 'D', value: '2\\sqrt{3}', isLatex: true },
    ],
    correctAnswer: '\\sqrt{6}',
  },
];

/** ── 余弦定理即时训练（6 题）── */
export const cosineLawPractice: QuizQuestionData[] = [
  {
    id: 'st-cl-1',
    question: '在 △ABC 中，b=3，c=5，A=120°，则 a²=?',
    questionLatex: '\\text{在 }\\triangle ABC\\text{ 中，}b=3,\\;c=5,\\;A=120°\\text{，则 }a^2=\\text{？}',
    options: [
      { label: 'A', value: '19', isLatex: false },
      { label: 'B', value: '34', isLatex: false },
      { label: 'C', value: '49', isLatex: false },
      { label: 'D', value: '64', isLatex: false },
    ],
    correctAnswer: '49',
  },
  {
    id: 'st-cl-2',
    question: '在 △ABC 中，b=6，c=8，A=60°，则 a=?',
    questionLatex: '\\text{在 }\\triangle ABC\\text{ 中，}b=6,\\;c=8,\\;A=60^\\circ\\text{，则 }a=\\text{？}',
    options: [
      { label: 'A', value: '2\\sqrt{7}', isLatex: true },
      { label: 'B', value: '2\\sqrt{13}', isLatex: true },
      { label: 'C', value: '10', isLatex: false },
      { label: 'D', value: '14', isLatex: false },
    ],
    correctAnswer: '2\\sqrt{13}',
  },
  {
    id: 'st-cl-3',
    question: '在 △ABC 中，a=\\sqrt{13}，b=3，c=1，则 ∠A=?',
    questionLatex: '\\text{在 }\\triangle ABC\\text{ 中，}a=\\sqrt{13},\\;b=3,\\;c=1\\text{，则 }\\angle A=\\text{？}',
    options: [
      { label: 'A', value: '60°', isLatex: false },
      { label: 'B', value: '90°', isLatex: false },
      { label: 'C', value: '120°', isLatex: false },
      { label: 'D', value: '150°', isLatex: false },
    ],
    correctAnswer: '120°',
  },
  {
    id: 'st-cl-4',
    question: '在 △ABC 中，a²=b²+c²-bc，则 ∠A=?',
    questionLatex: '\\text{在 }\\triangle ABC\\text{ 中，}a^2=b^2+c^2-bc\\text{，则 }\\angle A=\\text{？}',
    options: [
      { label: 'A', value: '30°', isLatex: false },
      { label: 'B', value: '60°', isLatex: false },
      { label: 'C', value: '90°', isLatex: false },
      { label: 'D', value: '120°', isLatex: false },
    ],
    correctAnswer: '60°',
  },
  {
    id: 'st-cl-5',
    question: '在 △ABC 中，a=5，b=5，c=6，则该三角形按角分类是',
    questionLatex: '\\text{在 }\\triangle ABC\\text{ 中，}a=5,\\;b=5,\\;c=6\\text{，则该三角形按角分类是}',
    options: [
      { label: 'A', value: '\\text{锐角三角形}', isLatex: true },
      { label: 'B', value: '\\text{直角三角形}', isLatex: true },
      { label: 'C', value: '\\text{钝角三角形}', isLatex: true },
      { label: 'D', value: '\\text{无法确定}', isLatex: true },
    ],
    correctAnswer: '\\text{锐角三角形}',
  },
  {
    id: 'st-cl-6',
    question: '在 △ABC 中，a=7，b=8，c=13，则 cosC=?',
    questionLatex: '\\text{在 }\\triangle ABC\\text{ 中，}a=7,\\;b=8,\\;c=13\\text{，则 }\\cos C=\\text{？}',
    options: [
      { label: 'A', value: '-\\dfrac{1}{4}', isLatex: true },
      { label: 'B', value: '-\\dfrac{3}{7}', isLatex: true },
      { label: 'C', value: '\\dfrac{1}{4}', isLatex: true },
      { label: 'D', value: '\\dfrac{3}{7}', isLatex: true },
    ],
    correctAnswer: '-\\dfrac{1}{4}',
  },
];

/** ── 面积公式即时训练（6 题）── */
export const areaPractice: QuizQuestionData[] = [
  {
    id: 'st-ar-1',
    question: '在 △ABC 中，a=8，b=5，C=30°，则面积 S=?',
    questionLatex: '\\text{在 }\\triangle ABC\\text{ 中，}a=8,\\;b=5,\\;C=30^\\circ\\text{，则面积 }S=\\text{？}',
    options: [
      { label: 'A', value: '10', isLatex: false },
      { label: 'B', value: '20', isLatex: false },
      { label: 'C', value: '10\\sqrt{3}', isLatex: true },
      { label: 'D', value: '20\\sqrt{3}', isLatex: true },
    ],
    correctAnswer: '10',
  },
  {
    id: 'st-ar-2',
    question: '在 △ABC 中，sinA=3/5，b=10，c=4，则面积 S=?',
    questionLatex: '\\text{在 }\\triangle ABC\\text{ 中，}\\sin A=\\dfrac{3}{5},\\;b=10,\\;c=4\\text{，则面积 }S=\\text{？}',
    options: [
      { label: 'A', value: '6', isLatex: false },
      { label: 'B', value: '12', isLatex: false },
      { label: 'C', value: '15', isLatex: false },
      { label: 'D', value: '20', isLatex: false },
    ],
    correctAnswer: '12',
  },
  {
    id: 'st-ar-3',
    question: '等边三角形边长为 4，则面积 S=?',
    questionLatex: '\\text{等边三角形边长为 }4\\text{，则面积 }S=\\text{？}',
    options: [
      { label: 'A', value: '2\\sqrt{3}', isLatex: true },
      { label: 'B', value: '3\\sqrt{3}', isLatex: true },
      { label: 'C', value: '4\\sqrt{3}', isLatex: true },
      { label: 'D', value: '8\\sqrt{3}', isLatex: true },
    ],
    correctAnswer: '4\\sqrt{3}',
  },
  {
    id: 'st-ar-4',
    question: '在 △ABC 中，S=6，a=4，b=6，则 sinC=?',
    questionLatex: '\\text{在 }\\triangle ABC\\text{ 中，}S=6,\\;a=4,\\;b=6\\text{，则 }\\sin C=\\text{？}',
    options: [
      { label: 'A', value: '\\dfrac{1}{4}', isLatex: true },
      { label: 'B', value: '\\dfrac{1}{2}', isLatex: true },
      { label: 'C', value: '\\dfrac{3}{4}', isLatex: true },
      { label: 'D', value: '1', isLatex: false },
    ],
    correctAnswer: '\\dfrac{1}{2}',
  },
  {
    id: 'st-ar-5',
    question: '在 △ABC 中，a=5，b=5，c=6，则面积 S=?',
    questionLatex: '\\text{在 }\\triangle ABC\\text{ 中，}a=5,\\;b=5,\\;c=6\\text{，则面积 }S=\\text{？}',
    options: [
      { label: 'A', value: '10', isLatex: false },
      { label: 'B', value: '12', isLatex: false },
      { label: 'C', value: '15', isLatex: false },
      { label: 'D', value: '6\\sqrt{3}', isLatex: true },
    ],
    correctAnswer: '12',
  },
  {
    id: 'st-ar-6',
    question: '在 △ABC 中，a=3，b=4，面积 S=3√3，且 C 为钝角，则 c=?',
    questionLatex: '\\text{在 }\\triangle ABC\\text{ 中，}a=3,\\;b=4,\\;S=3\\sqrt{3}\\text{，且 }C\\text{ 为钝角，则 }c=\\text{？}',
    options: [
      { label: 'A', value: '5', isLatex: false },
      { label: 'B', value: '\\sqrt{21}', isLatex: true },
      { label: 'C', value: '\\sqrt{37}', isLatex: true },
      { label: 'D', value: '7', isLatex: false },
    ],
    correctAnswer: '\\sqrt{37}',
  },
];

/** ── 综合实战即时训练（3 题）── */
export const comprehensivePractice: QuizQuestionData[] = [
  {
    id: 'st-cp-1',
    question: '在 △ABC 中，a²=b²+c²+bc，则 A=？又若 b=2, c=3，则面积 S=？',
    questionLatex: '\\text{在 }\\triangle ABC\\text{ 中，}a^2=b^2+c^2+bc\\text{，且 }b=2,\\;c=3\\text{，则面积 }S=\\text{？}',
    options: [
      { label: 'A', value: '\\dfrac{3\\sqrt{3}}{2}', isLatex: true },
      { label: 'B', value: '3\\sqrt{3}', isLatex: true },
      { label: 'C', value: '3', isLatex: false },
      { label: 'D', value: '2\\sqrt{3}', isLatex: true },
    ],
    correctAnswer: '\\dfrac{3\\sqrt{3}}{2}',
  },
  {
    id: 'st-cp-2',
    question: '在 △ABC 中，2cosC(acosB+bcosA)=c，则 C=?',
    questionLatex: '\\text{在 }\\triangle ABC\\text{ 中，}2\\cos C(a\\cos B+b\\cos A)=c\\text{，则 }C=\\text{？}',
    options: [
      { label: 'A', value: '\\dfrac{\\pi}{6}', isLatex: true },
      { label: 'B', value: '\\dfrac{\\pi}{3}', isLatex: true },
      { label: 'C', value: '\\dfrac{\\pi}{4}', isLatex: true },
      { label: 'D', value: '\\dfrac{2\\pi}{3}', isLatex: true },
    ],
    correctAnswer: '\\dfrac{\\pi}{3}',
  },
  {
    id: 'st-cp-3',
    question: '在 △ABC 中，a=2sinA，则外接圆半径 R=?',
    questionLatex: '\\text{在 }\\triangle ABC\\text{ 中，}a=2\\sin A\\text{，则外接圆半径 }R=\\text{？}',
    options: [
      { label: 'A', value: '\\dfrac{1}{2}', isLatex: true },
      { label: 'B', value: '1', isLatex: false },
      { label: 'C', value: '2', isLatex: false },
      { label: 'D', value: '\\text{无法确定}', isLatex: true },
    ],
    correctAnswer: '1',
  },
];
