// ============================================================
// Storage Layer - Public API
// ============================================================
//
// Usage:
//   import { storage } from '@/lib/storage';
//   const ids = await storage.progress.getCheckedIds('complex');
//   await storage.quiz.record('complex', 'q1', 'A', 'B', false);
//   await storage.ui.setJSON('prereq:collapsibles', { ... });
//   await storage.settings.setValue('theme', 'dark');
//   await storage.session.start('complex');
//   await storage.aiChat.addMessage(sessionId, 'user', 'hello');
//
// Architecture:
//   Component → Hook → storage.xxx → Repository → Dexie (IndexedDB)
//
// Adding a new repository:
//   1. Define entity type in types.ts
//   2. Add table to database.ts (bump version if schema changes)
//   3. Create repository class extending BaseRepository
//   4. Export singleton instance below
// ============================================================

import { ProgressRepository } from './repositories/progress';
import { QuizRepository } from './repositories/quiz';
import { UIStateRepository } from './repositories/ui-state';
import { SessionRepository } from './repositories/session';
import { SettingsRepository } from './repositories/settings';
import { AIChatRepository } from './repositories/ai-chat';
import { AssistantRepository } from './repositories/assistant';
import { TopicRepository } from './repositories/topic';
import { ChatMessageRepository } from './repositories/chat-message';

export { getDatabase, resetDatabase } from './database';
export { storageLogger } from './logger';
export { StorageError, RecordNotFoundError, ValidationError, MigrationError } from './errors';
export type {
  ProgressRecord,
  QuizAttempt,
  UIStateRecord,
  StudySession,
  SettingRecord,
  AIChatMessage,
  AssistantRecord,
  TopicRecord,
  ChatMessageRecord,
  PaginationOptions,
  PaginatedResult,
  DateRange,
} from './types';

/** Singleton storage service — the only entry point for all data operations */
export const storage = {
  progress: new ProgressRepository(),
  quiz: new QuizRepository(),
  ui: new UIStateRepository(),
  session: new SessionRepository(),
  settings: new SettingsRepository(),
  aiChat: new AIChatRepository(),
  assistants: new AssistantRepository(),
  topics: new TopicRepository(),
  chatMessages: new ChatMessageRepository(),
} as const;
