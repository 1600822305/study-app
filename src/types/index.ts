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

/** 选择题 */
export interface QuizQuestionData {
  id: string;
  question: string;
  questionLatex?: string;
  options: QuizOption[];
  correctAnswer: string;
  explanation: string;
  explanationLatex?: string;
  explanationDiagram?: string;
}

/** 学习进度条目 */
export interface ProgressItem {
  id: string;
  label: string;
  checked: boolean;
}

/** 可折叠区域样式 */
export type CollapsibleVariant = 'default' | 'answer' | 'tip';
