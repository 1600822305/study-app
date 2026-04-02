import type { QuizQuestionData } from '@/types';

/** 两直线位置关系 即时训练（7 题） */
export const lineRelationPractice: QuizQuestionData[] = [
  {
    id: 'lr-1',
    question: '直线 y = 3x + 1 与 y = 3x - 5 的位置关系是',
    questionLatex: '\\text{直线 }y=3x+1\\text{ 与 }y=3x-5\\text{ 的位置关系是}',
    options: [
      { label: 'A', value: '平行' },
      { label: 'B', value: '垂直' },
      { label: 'C', value: '相交' },
      { label: 'D', value: '重合' },
    ],
    correctAnswer: '平行',
  },
  {
    id: 'lr-2',
    question: '直线 2x + y - 1 = 0 与 x - 2y + 3 = 0 的位置关系是',
    questionLatex: '\\text{直线 }2x+y-1=0\\text{ 与 }x-2y+3=0\\text{ 的位置关系是}',
    options: [
      { label: 'A', value: '平行' },
      { label: 'B', value: '垂直' },
      { label: 'C', value: '相交但不垂直' },
      { label: 'D', value: '重合' },
    ],
    correctAnswer: '垂直',
  },
  {
    id: 'lr-3',
    question: '过点 (2, 1) 且平行于直线 x + 2y - 3 = 0 的直线方程是',
    questionLatex: '\\text{过点 }(2,1)\\text{ 且平行于直线 }x+2y-3=0\\text{ 的直线方程是}',
    options: [
      { label: 'A', value: 'x+2y-4=0', isLatex: true },
      { label: 'B', value: 'x+2y-3=0', isLatex: true },
      { label: 'C', value: '2x-y-3=0', isLatex: true },
      { label: 'D', value: 'x+2y+4=0', isLatex: true },
    ],
    correctAnswer: 'x+2y-4=0',
  },
  {
    id: 'lr-4',
    question: '过点 (1, 3) 且垂直于直线 3x - y + 2 = 0 的直线方程是',
    questionLatex: '\\text{过点 }(1,3)\\text{ 且垂直于直线 }3x-y+2=0\\text{ 的直线方程是}',
    options: [
      { label: 'A', value: 'x+3y-10=0', isLatex: true },
      { label: 'B', value: '3x-y=0', isLatex: true },
      { label: 'C', value: 'x+3y-4=0', isLatex: true },
      { label: 'D', value: 'x-3y+8=0', isLatex: true },
    ],
    correctAnswer: 'x+3y-10=0',
  },
  {
    id: 'lr-5',
    question: '直线 x + y - 1 = 0 与 x - y + 3 = 0 的交点坐标是',
    questionLatex: '\\text{直线 }x+y-1=0\\text{ 与 }x-y+3=0\\text{ 的交点坐标是}',
    options: [
      { label: 'A', value: '(-1, 2)', isLatex: true },
      { label: 'B', value: '(1, 0)', isLatex: true },
      { label: 'C', value: '(2, -1)', isLatex: true },
      { label: 'D', value: '(-1, -2)', isLatex: true },
    ],
    correctAnswer: '(-1, 2)',
  },
  {
    id: 'lr-6',
    question: '直线 2x - 4y + 1 = 0 与 x - 2y - 3 = 0 的位置关系是',
    questionLatex: '\\text{直线 }2x-4y+1=0\\text{ 与 }x-2y-3=0\\text{ 的位置关系是}',
    options: [
      { label: 'A', value: '平行' },
      { label: 'B', value: '垂直' },
      { label: 'C', value: '相交' },
      { label: 'D', value: '重合' },
    ],
    correctAnswer: '平行',
  },
  {
    id: 'lr-7',
    question: '直线 2x + y - 4 = 0 与 x - y + 1 = 0 的交点坐标是',
    questionLatex: '\\text{直线 }2x+y-4=0\\text{ 与 }x-y+1=0\\text{ 的交点坐标是}',
    options: [
      { label: 'A', value: '(1, 2)', isLatex: true },
      { label: 'B', value: '(2, 1)', isLatex: true },
      { label: 'C', value: '(3, -2)', isLatex: true },
      { label: 'D', value: '(-1, 2)', isLatex: true },
    ],
    correctAnswer: '(1, 2)',
  },
];
