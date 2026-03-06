import type { Table } from 'dexie';

import { getDatabase } from '../database';
import { BaseRepository } from './base';

import type { AIChatMessage } from '../types';

// ============================================================
// AI Chat Repository
// ============================================================

export class AIChatRepository extends BaseRepository<AIChatMessage> {
  protected readonly tableName = 'aiChatMessages';

  protected getTable(): Table<AIChatMessage> {
    return getDatabase().aiChatMessages;
  }

  /** Get all messages in a session, ordered by time */
  async getSession(sessionId: string): Promise<AIChatMessage[]> {
    try {
      this.log('getSession', sessionId);
      return await this.getTable()
        .where('sessionId')
        .equals(sessionId)
        .sortBy('createdAt');
    } catch (e) {
      this.handleError('getSession', e);
    }
  }

  /** Add a message to a session */
  async addMessage(
    sessionId: string,
    role: AIChatMessage['role'],
    content: string,
    module?: string,
  ): Promise<number> {
    try {
      this.log('addMessage', `${sessionId}:${role}`);
      return await this.getTable().add({
        sessionId,
        role,
        content,
        module,
        createdAt: new Date(),
      });
    } catch (e) {
      this.handleError('addMessage', e);
    }
  }

  /** Get all unique session IDs, most recent first */
  async getSessionIds(): Promise<string[]> {
    try {
      this.log('getSessionIds');
      const all = await this.getTable().orderBy('createdAt').reverse().toArray();
      const seen = new Set<string>();
      const result: string[] = [];
      for (const msg of all) {
        if (!seen.has(msg.sessionId)) {
          seen.add(msg.sessionId);
          result.push(msg.sessionId);
        }
      }
      return result;
    } catch (e) {
      this.handleError('getSessionIds', e);
    }
  }

  /** Delete an entire session */
  async deleteSession(sessionId: string): Promise<void> {
    try {
      this.log('deleteSession', sessionId);
      await this.getTable().where('sessionId').equals(sessionId).delete();
    } catch (e) {
      this.handleError('deleteSession', e);
    }
  }

  /** Get message count for a session */
  async getSessionMessageCount(sessionId: string): Promise<number> {
    try {
      return await this.getTable().where('sessionId').equals(sessionId).count();
    } catch (e) {
      this.handleError('getSessionMessageCount', e);
    }
  }
}
