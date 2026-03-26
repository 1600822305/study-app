import type { QuizQuestionData } from '@/types';

/** 和差公式即时训练（5 题） */
export const sumDiffPractice: QuizQuestionData[] = [
  {
    id: 'ti-sd-1',
    question: 'sin 75° 的精确值是',
    questionLatex: '\\sin 75° \\text{ 的精确值是}',
    options: [
      { label: 'A', value: '\\dfrac{\\sqrt{6}+\\sqrt{2}}{4}', isLatex: true },
      { label: 'B', value: '\\dfrac{\\sqrt{6}-\\sqrt{2}}{4}', isLatex: true },
      { label: 'C', value: '\\dfrac{\\sqrt{3}+1}{4}', isLatex: true },
      { label: 'D', value: '\\dfrac{\\sqrt{2}}{2}', isLatex: true },
    ],
    correctAnswer: '\\dfrac{\\sqrt{6}+\\sqrt{2}}{4}',
  },
  {
    id: 'ti-sd-2',
    question: 'cos 15° 的精确值是',
    questionLatex: '\\cos 15° \\text{ 的精确值是}',
    options: [
      { label: 'A', value: '\\dfrac{\\sqrt{6}-\\sqrt{2}}{4}', isLatex: true },
      { label: 'B', value: '\\dfrac{\\sqrt{6}+\\sqrt{2}}{4}', isLatex: true },
      { label: 'C', value: '\\dfrac{\\sqrt{3}}{2}', isLatex: true },
      { label: 'D', value: '\\dfrac{1}{2}', isLatex: true },
    ],
    correctAnswer: '\\dfrac{\\sqrt{6}+\\sqrt{2}}{4}',
  },
  {
    id: 'ti-sd-3',
    question: 'tan 15° 的精确值是',
    questionLatex: '\\tan 15° \\text{ 的精确值是}',
    options: [
      { label: 'A', value: '2+\\sqrt{3}', isLatex: true },
      { label: 'B', value: '2-\\sqrt{3}', isLatex: true },
      { label: 'C', value: '\\sqrt{3}-1', isLatex: true },
      { label: 'D', value: '\\dfrac{\\sqrt{3}}{3}', isLatex: true },
    ],
    correctAnswer: '2-\\sqrt{3}',
  },
  {
    id: 'ti-sd-4',
    question: '已知 sinα = 4/5，cosβ = 5/13（α、β 均为第一象限角），则 sin(α+β) =',
    questionLatex: '\\text{已知 }\\sin\\alpha=\\dfrac{4}{5},\\;\\cos\\beta=\\dfrac{5}{13}\\text{（α、β 均为一象限角），则 }\\sin(\\alpha+\\beta)=',
    options: [
      { label: 'A', value: '\\dfrac{56}{65}', isLatex: true },
      { label: 'B', value: '\\dfrac{63}{65}', isLatex: true },
      { label: 'C', value: '\\dfrac{33}{65}', isLatex: true },
      { label: 'D', value: '\\dfrac{16}{65}', isLatex: true },
    ],
    correctAnswer: '\\dfrac{56}{65}',
  },
  {
    id: 'ti-sd-5',
    question: 'cos 105° 的精确值是',
    questionLatex: '\\cos 105° \\text{ 的精确值是}',
    options: [
      { label: 'A', value: '\\dfrac{\\sqrt{6}+\\sqrt{2}}{4}', isLatex: true },
      { label: 'B', value: '\\dfrac{\\sqrt{2}-\\sqrt{6}}{4}', isLatex: true },
      { label: 'C', value: '-\\dfrac{\\sqrt{3}}{2}', isLatex: true },
      { label: 'D', value: '\\dfrac{\\sqrt{6}-\\sqrt{2}}{4}', isLatex: true },
    ],
    correctAnswer: '\\dfrac{\\sqrt{2}-\\sqrt{6}}{4}',
  },
];

/** 二倍角公式即时训练（2 题） */
export const doubleAnglePractice: QuizQuestionData[] = [
  {
    id: 'ti-da-1',
    question: '已知 sinα = 3/5（α 为第一象限角），则 sin2α 和 cos2α 分别是',
    questionLatex: '\\text{已知 }\\sin\\alpha=\\dfrac{3}{5}\\text{（一象限角），则 }\\sin 2\\alpha,\\;\\cos 2\\alpha\\text{ 分别是}',
    options: [
      { label: 'A', value: '\\dfrac{24}{25},\\;\\dfrac{7}{25}', isLatex: true },
      { label: 'B', value: '\\dfrac{24}{25},\\;\\dfrac{9}{25}', isLatex: true },
      { label: 'C', value: '\\dfrac{12}{25},\\;\\dfrac{7}{25}', isLatex: true },
      { label: 'D', value: '\\dfrac{6}{5},\\;\\dfrac{7}{25}', isLatex: true },
    ],
    correctAnswer: '\\dfrac{24}{25},\\;\\dfrac{7}{25}',
  },
  {
    id: 'ti-da-2',
    question: '化简 cos²15° − sin²15° + 2sin22.5°cos22.5° =',
    questionLatex: '\\cos^2 15° - \\sin^2 15° + 2\\sin 22.5°\\cos 22.5° =',
    options: [
      { label: 'A', value: '\\dfrac{\\sqrt{3}+\\sqrt{2}}{2}', isLatex: true },
      { label: 'B', value: '\\dfrac{\\sqrt{3}}{2}', isLatex: true },
      { label: 'C', value: '1+\\dfrac{\\sqrt{2}}{2}', isLatex: true },
      { label: 'D', value: '\\sqrt{3}', isLatex: true },
    ],
    correctAnswer: '\\dfrac{\\sqrt{3}+\\sqrt{2}}{2}',
  },
];

/** 降幂公式即时训练（4 题） */
export const powerReductionPractice: QuizQuestionData[] = [
  {
    id: 'ti-pr-1',
    question: 'sin²15° 的精确值是',
    questionLatex: '\\sin^2 15° \\text{ 的精确值是}',
    options: [
      { label: 'A', value: '\\dfrac{2-\\sqrt{3}}{4}', isLatex: true },
      { label: 'B', value: '\\dfrac{2+\\sqrt{3}}{4}', isLatex: true },
      { label: 'C', value: '\\dfrac{1}{4}', isLatex: true },
      { label: 'D', value: '\\dfrac{\\sqrt{3}}{4}', isLatex: true },
    ],
    correctAnswer: '\\dfrac{2-\\sqrt{3}}{4}',
  },
  {
    id: 'ti-pr-2',
    question: 'cos²75° 的精确值是',
    questionLatex: '\\cos^2 75° \\text{ 的精确值是}',
    options: [
      { label: 'A', value: '\\dfrac{2-\\sqrt{3}}{4}', isLatex: true },
      { label: 'B', value: '\\dfrac{2+\\sqrt{3}}{4}', isLatex: true },
      { label: 'C', value: '\\dfrac{\\sqrt{3}}{4}', isLatex: true },
      { label: 'D', value: '\\dfrac{1}{4}', isLatex: true },
    ],
    correctAnswer: '\\dfrac{2-\\sqrt{3}}{4}',
  },
  {
    id: 'ti-pr-3',
    question: '化简 2cos²α − 1 =',
    questionLatex: '2\\cos^2\\alpha - 1 =',
    options: [
      { label: 'A', value: '\\cos 2\\alpha', isLatex: true },
      { label: 'B', value: '\\sin 2\\alpha', isLatex: true },
      { label: 'C', value: '1', isLatex: false },
      { label: 'D', value: '-\\cos 2\\alpha', isLatex: true },
    ],
    correctAnswer: '\\cos 2\\alpha',
  },
  {
    id: 'ti-pr-4',
    question: '化简 1 − 2sin²(π/8) =',
    questionLatex: '1 - 2\\sin^2\\dfrac{\\pi}{8} =',
    options: [
      { label: 'A', value: '\\dfrac{\\sqrt{2}}{2}', isLatex: true },
      { label: 'B', value: '\\dfrac{1}{2}', isLatex: true },
      { label: 'C', value: '\\dfrac{\\sqrt{3}}{2}', isLatex: true },
      { label: 'D', value: '0', isLatex: false },
    ],
    correctAnswer: '\\dfrac{\\sqrt{2}}{2}',
  },
];

/** 半角公式即时训练（3 题） */
export const halfAnglePractice: QuizQuestionData[] = [
  {
    id: 'ti-ha-1',
    question: '已知 cosα = 7/25 且 α/2 ∈ (0, π/2)，则 sin(α/2) =',
    questionLatex: '\\text{已知 }\\cos\\alpha=\\dfrac{7}{25}\\text{ 且 }\\dfrac{\\alpha}{2}\\in\\left(0,\\dfrac{\\pi}{2}\\right)\\text{，则 }\\sin\\dfrac{\\alpha}{2}=',
    options: [
      { label: 'A', value: '\\dfrac{3}{5}', isLatex: true },
      { label: 'B', value: '\\dfrac{4}{5}', isLatex: true },
      { label: 'C', value: '\\dfrac{3}{25}', isLatex: true },
      { label: 'D', value: '\\dfrac{9}{25}', isLatex: true },
    ],
    correctAnswer: '\\dfrac{3}{5}',
  },
  {
    id: 'ti-ha-2',
    question: 'tan15° 用半角公式计算等于',
    questionLatex: '\\tan 15° \\text{ 用半角公式计算等于}',
    options: [
      { label: 'A', value: '2-\\sqrt{3}', isLatex: true },
      { label: 'B', value: '2+\\sqrt{3}', isLatex: true },
      { label: 'C', value: '\\sqrt{3}-1', isLatex: true },
      { label: 'D', value: '\\dfrac{\\sqrt{3}}{3}', isLatex: true },
    ],
    correctAnswer: '2-\\sqrt{3}',
  },
  {
    id: 'ti-ha-3',
    question: '已知 cosα = −1/2 且 α/2 ∈ (π/2, π)，则 cos(α/2) 的符号是',
    questionLatex: '\\text{已知 }\\cos\\alpha=-\\dfrac{1}{2}\\text{ 且 }\\dfrac{\\alpha}{2}\\in\\left(\\dfrac{\\pi}{2},\\pi\\right)\\text{，则 }\\cos\\dfrac{\\alpha}{2}\\text{ 的符号是}',
    options: [
      { label: 'A', value: '正', isLatex: false },
      { label: 'B', value: '负', isLatex: false },
      { label: 'C', value: '零', isLatex: false },
      { label: 'D', value: '无法确定', isLatex: false },
    ],
    correctAnswer: '负',
    printCols: 4,
  },
];

/** 辅助角公式即时训练（5 题） */
export const auxiliaryPractice: QuizQuestionData[] = [
  {
    id: 'ti-aux-1',
    question: '√3 sin x + cos x 化为 R sin(x+φ) 的结果是',
    questionLatex: '\\sqrt{3}\\sin x + \\cos x \\text{ 化为 }R\\sin(x+\\varphi)\\text{ 的结果是}',
    options: [
      { label: 'A', value: '2\\sin\\!\\left(x+\\dfrac{\\pi}{6}\\right)', isLatex: true },
      { label: 'B', value: '2\\sin\\!\\left(x+\\dfrac{\\pi}{3}\\right)', isLatex: true },
      { label: 'C', value: '\\sqrt{2}\\sin\\!\\left(x+\\dfrac{\\pi}{4}\\right)', isLatex: true },
      { label: 'D', value: '2\\sin\\!\\left(x-\\dfrac{\\pi}{6}\\right)', isLatex: true },
    ],
    correctAnswer: '2\\sin\\!\\left(x+\\dfrac{\\pi}{6}\\right)',
  },
  {
    id: 'ti-aux-2',
    question: 'sin x − √3 cos x 化为 R sin(x+φ) 的结果是',
    questionLatex: '\\sin x - \\sqrt{3}\\cos x \\text{ 化为 }R\\sin(x+\\varphi)\\text{ 的结果是}',
    options: [
      { label: 'A', value: '2\\sin\\!\\left(x-\\dfrac{\\pi}{3}\\right)', isLatex: true },
      { label: 'B', value: '2\\sin\\!\\left(x+\\dfrac{\\pi}{3}\\right)', isLatex: true },
      { label: 'C', value: '2\\sin\\!\\left(x-\\dfrac{\\pi}{6}\\right)', isLatex: true },
      { label: 'D', value: '2\\sin\\!\\left(x+\\dfrac{\\pi}{6}\\right)', isLatex: true },
    ],
    correctAnswer: '2\\sin\\!\\left(x-\\dfrac{\\pi}{3}\\right)',
  },
  {
    id: 'ti-aux-3',
    question: '√3 sin 2x − cos 2x 化为 R sin(2x+φ) 的结果是',
    questionLatex: '\\sqrt{3}\\sin 2x - \\cos 2x \\text{ 化为 }R\\sin(2x+\\varphi)\\text{ 的结果是}',
    options: [
      { label: 'A', value: '2\\sin\\!\\left(2x-\\dfrac{\\pi}{6}\\right)', isLatex: true },
      { label: 'B', value: '2\\sin\\!\\left(2x+\\dfrac{\\pi}{6}\\right)', isLatex: true },
      { label: 'C', value: '2\\sin\\!\\left(2x-\\dfrac{\\pi}{3}\\right)', isLatex: true },
      { label: 'D', value: '2\\sin\\!\\left(2x+\\dfrac{\\pi}{3}\\right)', isLatex: true },
    ],
    correctAnswer: '2\\sin\\!\\left(2x-\\dfrac{\\pi}{6}\\right)',
  },
  {
    id: 'ti-aux-4',
    question: 'f(x) = sin x − cos x 的一个单调递增区间是',
    questionLatex: 'f(x) = \\sin x - \\cos x \\text{ 的一个单调递增区间是}',
    options: [
      { label: 'A', value: '\\left[-\\dfrac{3\\pi}{4},\\;\\dfrac{\\pi}{4}\\right]', isLatex: true },
      { label: 'B', value: '\\left[-\\dfrac{\\pi}{4},\\;\\dfrac{3\\pi}{4}\\right]', isLatex: true },
      { label: 'C', value: '\\left[\\dfrac{\\pi}{4},\\;\\dfrac{5\\pi}{4}\\right]', isLatex: true },
      { label: 'D', value: '\\left[-\\dfrac{\\pi}{2},\\;\\dfrac{\\pi}{2}\\right]', isLatex: true },
    ],
    correctAnswer: '\\left[-\\dfrac{3\\pi}{4},\\;\\dfrac{\\pi}{4}\\right]',
  },
  {
    id: 'ti-aux-5',
    question: '（高考真题改编）f(x) = 2sin²x + 2√3 sinxcosx − 1 化简后等于',
    questionLatex: '\\text{（真题改编）}f(x) = 2\\sin^2 x + 2\\sqrt{3}\\sin x\\cos x - 1 \\text{ 化简后等于}',
    options: [
      { label: 'A', value: '2\\sin\\!\\left(2x-\\dfrac{\\pi}{6}\\right)', isLatex: true },
      { label: 'B', value: '2\\sin\\!\\left(2x+\\dfrac{\\pi}{6}\\right)', isLatex: true },
      { label: 'C', value: '2\\sin\\!\\left(2x-\\dfrac{\\pi}{3}\\right)', isLatex: true },
      { label: 'D', value: '2\\sin\\!\\left(2x+\\dfrac{\\pi}{3}\\right)', isLatex: true },
    ],
    correctAnswer: '2\\sin\\!\\left(2x-\\dfrac{\\pi}{6}\\right)',
  },
];

/** 综合应用即时训练（5 题） */
export const comprehensivePractice: QuizQuestionData[] = [
  {
    id: 'ti-comp-1',
    question: '已知 sinα = 4/5（α 为第二象限角），则 sin2α =',
    questionLatex: '\\text{已知 }\\sin\\alpha=\\dfrac{4}{5}\\text{（α 为二象限角），则 }\\sin 2\\alpha=',
    options: [
      { label: 'A', value: '-\\dfrac{24}{25}', isLatex: true },
      { label: 'B', value: '\\dfrac{24}{25}', isLatex: true },
      { label: 'C', value: '-\\dfrac{12}{25}', isLatex: true },
      { label: 'D', value: '\\dfrac{12}{25}', isLatex: true },
    ],
    correctAnswer: '-\\dfrac{24}{25}',
  },
  {
    id: 'ti-comp-2',
    question: '已知 α+β = π/4，则 (1+tanα)(1+tanβ) =',
    questionLatex: '\\text{已知 }\\alpha+\\beta=\\dfrac{\\pi}{4}\\text{，则 }(1+\\tan\\alpha)(1+\\tan\\beta)=',
    options: [
      { label: 'A', value: '1', isLatex: false },
      { label: 'B', value: '2', isLatex: false },
      { label: 'C', value: '3', isLatex: false },
      { label: 'D', value: '\\sqrt{2}', isLatex: true },
    ],
    correctAnswer: '2',
    printCols: 4,
  },
  {
    id: 'ti-comp-3',
    question: '化简 2sinxcosx + 2√3cos²x − √3 =',
    questionLatex: '2\\sin x\\cos x + 2\\sqrt{3}\\cos^2 x - \\sqrt{3} =',
    options: [
      { label: 'A', value: '2\\sin\\!\\left(2x+\\dfrac{\\pi}{3}\\right)', isLatex: true },
      { label: 'B', value: '2\\sin\\!\\left(2x+\\dfrac{\\pi}{6}\\right)', isLatex: true },
      { label: 'C', value: '2\\cos\\!\\left(2x+\\dfrac{\\pi}{6}\\right)', isLatex: true },
      { label: 'D', value: '\\sin 2x+\\sqrt{3}\\cos 2x', isLatex: true },
    ],
    correctAnswer: '2\\sin\\!\\left(2x+\\dfrac{\\pi}{3}\\right)',
  },
  {
    id: 'ti-comp-4',
    question: 'f(x) = 2sin²x + 2√3 sinxcosx 的最小正周期和最大值分别是',
    questionLatex: 'f(x)=2\\sin^2 x+2\\sqrt{3}\\sin x\\cos x \\text{ 的最小正周期和最大值分别是}',
    options: [
      { label: 'A', value: '\\pi,\\;2', isLatex: true },
      { label: 'B', value: '\\pi,\\;3', isLatex: true },
      { label: 'C', value: '2\\pi,\\;2', isLatex: true },
      { label: 'D', value: '2\\pi,\\;3', isLatex: true },
    ],
    correctAnswer: '\\pi,\\;3',
  },
  {
    id: 'ti-comp-5',
    question: '（真题改编）f(x) = 2sin(2x+π/6) 在 [0,π] 上的单调递增区间是',
    questionLatex: '\\text{（真题改编）}f(x)=2\\sin\\!\\left(2x+\\dfrac{\\pi}{6}\\right)\\text{ 在 }[0,\\pi]\\text{ 上的单调递增区间是}',
    options: [
      { label: 'A', value: '\\left[0,\\;\\dfrac{\\pi}{6}\\right]', isLatex: true },
      { label: 'B', value: '\\left[\\dfrac{\\pi}{6},\\;\\dfrac{2\\pi}{3}\\right]', isLatex: true },
      { label: 'C', value: '\\left[0,\\;\\dfrac{\\pi}{3}\\right]', isLatex: true },
      { label: 'D', value: '\\left[\\dfrac{\\pi}{3},\\;\\dfrac{5\\pi}{6}\\right]', isLatex: true },
    ],
    correctAnswer: '\\left[0,\\;\\dfrac{\\pi}{6}\\right]',
  },
];
