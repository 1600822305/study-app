import type { QuizQuestionData } from '@/types';

export const inequalityPrereqQuizQuestions: QuizQuestionData[] = [
  {
    id: 'ipq1',
    question: '(-2)³ × (-3) ÷ (-6) = ?',
    questionLatex: '(-2)^3 \\times (-3) \\div (-6) = \\text{?}',
    options: [
      { label: 'A', value: '4' },
      { label: 'B', value: '-4' },
      { label: 'C', value: '2' },
      { label: 'D', value: '-2' },
    ],
    correctAnswer: '-4',
  },
  {
    id: 'ipq2',
    question: '解方程 -3(2x + 1) = x - 10，x = ?',
    questionLatex: '\\text{解方程 } -3(2x + 1) = x - 10 \\text{，} x = \\text{?}',
    options: [
      { label: 'A', value: '1' },
      { label: 'B', value: '-1' },
      { label: 'C', value: '7' },
      { label: 'D', value: '-7' },
    ],
    correctAnswer: '1',
  },
  {
    id: 'ipq3',
    question: '(-4)² 和 -4² 哪个大？在数轴上哪个在右边？',
    questionLatex: '(-4)^2 \\text{ 和 } -4^2 \\text{ 哪个大？}',
    options: [
      { label: 'A', value: '(-4)^2 > -4^2 \\text{，} (-4)^2 \\text{ 在右边}', isLatex: true },
      { label: 'B', value: '-4^2 > (-4)^2 \\text{，} -4^2 \\text{ 在右边}', isLatex: true },
      { label: 'C', value: '\\text{两个一样大}', isLatex: true },
      { label: 'D', value: '\\text{无法比较}', isLatex: true },
    ],
    correctAnswer: '(-4)^2 > -4^2 \\text{，} (-4)^2 \\text{ 在右边}',
  },
  {
    id: 'ipq4',
    question: '解方程 2x - 5 = -3x + 10 后，x 应该在数轴上画 ○ 还是 ●？',
    questionLatex: '\\text{解方程 } 2x - 5 = -3x + 10 \\text{ 后，若改成 } 2x - 5 > -3x + 10 \\text{，解集在数轴上 } x=3 \\text{ 处画什么？}',
    options: [
      { label: 'A', value: '● 实心圆，箭头向右', isLatex: false },
      { label: 'B', value: '○ 空心圆，箭头向右', isLatex: false },
      { label: 'C', value: '● 实心圆，箭头向左', isLatex: false },
      { label: 'D', value: '○ 空心圆，箭头向左', isLatex: false },
    ],
    correctAnswer: '○ 空心圆，箭头向右',
  },
  {
    id: 'ipq5',
    question: '(-1)×(-2)×(-3)×(-4) 的结果和 -24 比，哪个大？',
    questionLatex: '(-1) \\times (-2) \\times (-3) \\times (-4) \\text{ 和 } -24 \\text{ 比，哪个大？}',
    options: [
      { label: 'A', value: '\\text{相等，都是 } -24', isLatex: true },
      { label: 'B', value: '\\text{前者大，前者} = 24 > -24', isLatex: true },
      { label: 'C', value: '\\text{后者大，前者} = -24', isLatex: true },
      { label: 'D', value: '\\text{前者大，前者} = 48', isLatex: true },
    ],
    correctAnswer: '\\text{前者大，前者} = 24 > -24',
  },
];
