import type { Table } from 'dexie';

import { getDatabase } from '../database';
import { BaseRepository } from './base';

import type { StudySession, DateRange } from '../types';

// ============================================================
// Study Session Repository
// ============================================================

export class SessionRepository extends BaseRepository<StudySession> {
  protected readonly tableName = 'studySessions';

  protected getTable(): Table<StudySession> {
    return getDatabase().studySessions;
  }

  /** Start a new study session */
  async start(module: string): Promise<number> {
    try {
      this.log('start', module);
      return await this.getTable().add({
        module,
        startedAt: new Date(),
      });
    } catch (e) {
      this.handleError('start', e);
    }
  }

  /** End an active session */
  async end(sessionId: number): Promise<void> {
    try {
      this.log('end', String(sessionId));
      const session = await this.getTable().get(sessionId);
      if (!session) return;

      const endedAt = new Date();
      const durationMinutes = Math.round(
        (endedAt.getTime() - session.startedAt.getTime()) / 60000,
      );
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await this.getTable().update(sessionId, { endedAt, durationMinutes } as any);
    } catch (e) {
      this.handleError('end', e);
    }
  }

  /** Get total study time for a module (in minutes) */
  async getTotalMinutes(module: string): Promise<number> {
    try {
      this.log('getTotalMinutes', module);
      const sessions = await this.getTable().where('module').equals(module).toArray();
      return sessions.reduce((sum, s) => sum + (s.durationMinutes ?? 0), 0);
    } catch (e) {
      this.handleError('getTotalMinutes', e);
    }
  }

  /** Get sessions in a date range */
  async getByDateRange(range: DateRange): Promise<StudySession[]> {
    try {
      this.log('getByDateRange');
      let collection = this.getTable().orderBy('startedAt');

      if (range.from && range.to) {
        collection = this.getTable().where('startedAt').between(range.from, range.to);
      }

      const results = await collection.toArray();

      if (range.from && !range.to) {
        return results.filter((s) => s.startedAt >= range.from!);
      }
      if (!range.from && range.to) {
        return results.filter((s) => s.startedAt <= range.to!);
      }
      return results;
    } catch (e) {
      this.handleError('getByDateRange', e);
    }
  }

  /** Get today's total study time across all modules */
  async getTodayMinutes(): Promise<number> {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const sessions = await this.getByDateRange({ from: today });
    return sessions.reduce((sum, s) => sum + (s.durationMinutes ?? 0), 0);
  }
}
