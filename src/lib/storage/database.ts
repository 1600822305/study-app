import Dexie from 'dexie';

import type { Table } from 'dexie';
import type {
  ProgressRecord,
  QuizAttempt,
  UIStateRecord,
  StudySession,
  SettingRecord,
  AIChatMessage,
  AssistantRecord,
  TopicRecord,
  ChatMessageRecord,
  OperationLog,
} from './types';

// ============================================================
// Database Definition + Schema Migrations
// ============================================================

class StudyDatabase extends Dexie {
  progress!: Table<ProgressRecord>;
  quizAttempts!: Table<QuizAttempt>;
  uiState!: Table<UIStateRecord>;
  studySessions!: Table<StudySession>;
  settings!: Table<SettingRecord>;
  aiChatMessages!: Table<AIChatMessage>;
  assistants!: Table<AssistantRecord>;
  topics!: Table<TopicRecord>;
  chatMessages!: Table<ChatMessageRecord>;
  operationLogs!: Table<OperationLog>;

  constructor() {
    super('StudyGoGoGo');

    // ----- Version 1: Initial schema -----
    this.version(1).stores({
      progress: '++id, module, [module+itemId], updatedAt',
      quizAttempts: '++id, module, questionId, [module+questionId], attemptedAt',
      uiState: 'key, updatedAt',
      studySessions: '++id, module, startedAt',
      settings: 'key, updatedAt',
      aiChatMessages: '++id, sessionId, module, role, createdAt',
      operationLogs: '++id, table, operation, timestamp',
    });

    // ----- Version 2: 助手 + 话题 + 聊天消息 -----
    this.version(2).stores({
      progress: '++id, module, [module+itemId], updatedAt',
      quizAttempts: '++id, module, questionId, [module+questionId], attemptedAt',
      uiState: 'key, updatedAt',
      studySessions: '++id, module, startedAt',
      settings: 'key, updatedAt',
      aiChatMessages: '++id, sessionId, module, role, createdAt',
      assistants: 'id, isSystem, updatedAt',
      topics: 'id, assistantId, updatedAt, lastMessageAt',
      chatMessages: 'id, topicId, assistantId, createdAt',
      operationLogs: '++id, table, operation, timestamp',
    });
  }
}

// Singleton instance
let dbInstance: StudyDatabase | null = null;

export function getDatabase(): StudyDatabase {
  if (!dbInstance) {
    dbInstance = new StudyDatabase();
  }
  return dbInstance;
}

export async function resetDatabase(): Promise<void> {
  const db = getDatabase();
  await db.delete();
  dbInstance = null;
}

export type { StudyDatabase };
