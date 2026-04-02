import type { QuizQuestionData } from '@/types';

/** 椭圆 即时训练（5 题） */
export const ellipsePractice: QuizQuestionData[] = [
  {
    id: 'el-1',
    question: '椭圆 x²/9 + y²/4 = 1 的焦点坐标是',
    questionLatex: '\\text{椭圆 }\\dfrac{x^2}{9}+\\dfrac{y^2}{4}=1\\text{ 的焦点坐标是}',
    options: [
      { label: 'A', value: '(\\pm\\sqrt{5},\\, 0)', isLatex: true },
      { label: 'B', value: '(\\pm\\sqrt{13},\\, 0)', isLatex: true },
      { label: 'C', value: '(0,\\, \\pm\\sqrt{5})', isLatex: true },
      { label: 'D', value: '(\\pm 5,\\, 0)', isLatex: true },
    ],
    correctAnswer: '(\\pm\\sqrt{5},\\, 0)',
  },
  {
    id: 'el-2',
    question: '椭圆 x²/4 + y²/9 = 1 的长轴在',
    questionLatex: '\\text{椭圆 }\\dfrac{x^2}{4}+\\dfrac{y^2}{9}=1\\text{ 的长轴在}',
    options: [
      { label: 'A', value: 'x轴' },
      { label: 'B', value: 'y轴' },
      { label: 'C', value: '无法判断' },
      { label: 'D', value: '两轴上都有' },
    ],
    correctAnswer: 'y轴',
  },
  {
    id: 'el-3',
    question: '椭圆半长轴 a = 5，半焦距 c = 3，则半短轴 b =',
    questionLatex: '\\text{椭圆半长轴 }a=5\\text{，半焦距 }c=3\\text{，则半短轴 }b=',
    options: [
      { label: 'A', value: '2' },
      { label: 'B', value: '4' },
      { label: 'C', value: '\\sqrt{34}', isLatex: true },
      { label: 'D', value: '8' },
    ],
    correctAnswer: '4',
  },
  {
    id: 'el-4',
    question: '椭圆 x²/25 + y²/16 = 1 的离心率是',
    questionLatex: '\\text{椭圆 }\\dfrac{x^2}{25}+\\dfrac{y^2}{16}=1\\text{ 的离心率是}',
    options: [
      { label: 'A', value: '\\dfrac{4}{5}', isLatex: true },
      { label: 'B', value: '\\dfrac{3}{5}', isLatex: true },
      { label: 'C', value: '\\dfrac{5}{3}', isLatex: true },
      { label: 'D', value: '\\dfrac{3}{4}', isLatex: true },
    ],
    correctAnswer: '\\dfrac{3}{5}',
  },
  {
    id: 'el-5',
    question: '椭圆上一点 P 到两焦点的距离分别为 3 和 7，则该椭圆的长轴长为',
    questionLatex: '\\text{椭圆上点 }P\\text{ 到两焦点距离分别为 }3\\text{ 和 }7\\text{，长轴长为}',
    options: [
      { label: 'A', value: '5' },
      { label: 'B', value: '10' },
      { label: 'C', value: '4' },
      { label: 'D', value: '8' },
    ],
    correctAnswer: '10',
  },
];
