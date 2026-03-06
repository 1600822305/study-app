// ============================================================
// Storage Entity Types
// ============================================================

/** 学习进度记录 */
export interface ProgressRecord {
  id?: number;
  module: string;
  itemId: string;
  checked: boolean;
  createdAt: Date;
  updatedAt: Date;
}

/** 答题记录 */
export interface QuizAttempt {
  id?: number;
  module: string;
  questionId: string;
  selectedAnswer: string;
  correctAnswer: string;
  correct: boolean;
  timeSpentMs?: number;
  attemptedAt: Date;
}

/** UI 状态持久化（折叠、滚动位置等） */
export interface UIStateRecord {
  key: string;
  value: string;
  updatedAt: Date;
}

/** 学习会话 */
export interface StudySession {
  id?: number;
  module: string;
  startedAt: Date;
  endedAt?: Date;
  durationMinutes?: number;
}

/** 用户设置 */
export interface SettingRecord {
  key: string;
  value: string;
  updatedAt: Date;
}

/** AI 对话记录 */
export interface AIChatMessage {
  id?: number;
  sessionId: string;
  module?: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  createdAt: Date;
}

/** 操作日志 */
export interface OperationLog {
  id?: number;
  table: string;
  operation: 'create' | 'update' | 'delete' | 'read';
  recordId?: string;
  detail?: string;
  timestamp: Date;
}

// ============================================================
// Query Types
// ============================================================

export interface PaginationOptions {
  page: number;
  pageSize: number;
}

export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface DateRange {
  from?: Date;
  to?: Date;
}
