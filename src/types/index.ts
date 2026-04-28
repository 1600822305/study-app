// ============================================================
// Global type definitions
// ============================================================

/** 科目 */
export type Subject = 'math' | 'physics' | 'chemistry' | 'english';

/** 学习模块 */
export interface Module {
  id: string;
  subject: Subject;
  title: string;
  subtitle?: string;
  path: string;
  duration: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  points: number;
  status: 'locked' | 'available' | 'in_progress' | 'completed';
  order: number;
}

/** 选择题选项 */
export interface QuizOption {
  label: string;
  value: string;
  isLatex?: boolean;
}

/** 题目类型 */
export type QuizQuestionType = 'choice' | 'blank';

import type { ReactNode } from 'react';

/** 题目数据（选择题 / 填空题通用） */
export interface QuizQuestionData {
  id: string;
  /** 题型，默认 'choice' */
  type?: QuizQuestionType;
  question: string;
  questionLatex?: string;
  /** 混合渲染（JSX），优先于 questionLatex / question */
  questionNode?: ReactNode;
  /** 选择题选项（type='choice' 时必填） */
  options?: QuizOption[];
  /** 标准答案 */
  correctAnswer: string;
  /** 填空题可接受的其他正确答案 */
  acceptableAnswers?: string[];
  explanation?: string;
  explanationLatex?: string;
  explanationDiagram?: string;
  /** 题目配图（QuizDiagrams key） */
  questionDiagram?: string;
  /** 打印时在此题前分页 */
  pageBreak?: boolean;
  /** 打印模式下此题选项列数（覆盖 PracticeCard 的 printOptionCols） */
  printCols?: 1 | 2 | 4;
  /** 交互模式下此题选项列数（覆盖 PracticeCard 的 optionCols） */
  cols?: 1 | 2 | 4;
  /** 多选题（选择题专用），correctAnswer 存逗号分隔的选项 label，如 "A,C" */
  multiSelect?: boolean;
  /** 打印模式下此题占满整行（columns=2 时生效） */
  fullRow?: boolean;
}

/** 学习进度条目 */
export interface ProgressItem {
  id: string;
  label: string;
  checked: boolean;
}

/** 可折叠区域样式 */
export type CollapsibleVariant = 'default' | 'answer' | 'tip';
