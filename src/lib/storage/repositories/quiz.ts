import type { Table } from 'dexie';

import { getDatabase } from '../database';
import { BaseRepository } from './base';

import type { QuizAttempt, PaginationOptions, PaginatedResult, DateRange } from '../types';

// ============================================================
// Quiz Repository
// ============================================================

export class QuizRepository extends BaseRepository<QuizAttempt> {
  protected readonly tableName = 'quizAttempts';

  protected getTable(): Table<QuizAttempt> {
    return getDatabase().quizAttempts;
  }

  /** Record a quiz attempt */
  async record(
    module: string,
    questionId: string,
    selectedAnswer: string,
    correctAnswer: string,
    correct: boolean,
    timeSpentMs?: number,
  ): Promise<number> {
    try {
      this.log('record', `${module}:${questionId}`);
      return await this.getTable().add({
        module,
        questionId,
        selectedAnswer,
        correctAnswer,
        correct,
        timeSpentMs,
        attemptedAt: new Date(),
      });
    } catch (e) {
      this.handleError('record', e);
    }
  }

  /** Get stats for a module: correct count, total count, accuracy */
  async getModuleStats(module: string): Promise<{
    correct: number;
    total: number;
    accuracy: number;
  }> {
    try {
      this.log('getModuleStats', module);
      const attempts = await this.getTable().where('module').equals(module).toArray();
      const correct = attempts.filter((a) => a.correct).length;
      const total = attempts.length;
      return {
        correct,
        total,
        accuracy: total > 0 ? Math.round((correct / total) * 100) : 0,
      };
    } catch (e) {
      this.handleError('getModuleStats', e);
    }
  }

  /** Get the latest attempt for each question in a module */
  async getLatestAttempts(module: string): Promise<Map<string, QuizAttempt>> {
    try {
      this.log('getLatestAttempts', module);
      const attempts = await this.getTable()
        .where('module')
        .equals(module)
        .reverse()
        .sortBy('attemptedAt');

      const latest = new Map<string, QuizAttempt>();
      for (const attempt of attempts) {
        if (!latest.has(attempt.questionId)) {
          latest.set(attempt.questionId, attempt);
        }
      }
      return latest;
    } catch (e) {
      this.handleError('getLatestAttempts', e);
    }
  }

  /** Get wrong answers for review */
  async getWrongAnswers(module?: string): Promise<QuizAttempt[]> {
    try {
      this.log('getWrongAnswers', module);
      let collection = this.getTable().orderBy('attemptedAt').reverse();
      if (module) {
        collection = this.getTable().where('module').equals(module).reverse();
      }
      return await collection.filter((a) => !a.correct).toArray();
    } catch (e) {
      this.handleError('getWrongAnswers', e);
    }
  }

  /** Paginated query for history */
  async getHistory(
    options: PaginationOptions,
    filters?: { module?: string; dateRange?: DateRange },
  ): Promise<PaginatedResult<QuizAttempt>> {
    try {
      this.log('getHistory', JSON.stringify(options));
      let collection = this.getTable().orderBy('attemptedAt').reverse();

      if (filters?.module) {
        collection = this.getTable().where('module').equals(filters.module).reverse();
      }

      let results = await collection.toArray();

      if (filters?.dateRange?.from) {
        const from = filters.dateRange.from;
        results = results.filter((r) => r.attemptedAt >= from);
      }
      if (filters?.dateRange?.to) {
        const to = filters.dateRange.to;
        results = results.filter((r) => r.attemptedAt <= to);
      }

      const total = results.length;
      const totalPages = Math.ceil(total / options.pageSize);
      const start = (options.page - 1) * options.pageSize;
      const data = results.slice(start, start + options.pageSize);

      return { data, total, page: options.page, pageSize: options.pageSize, totalPages };
    } catch (e) {
      this.handleError('getHistory', e);
    }
  }

  /** Reset all quiz data for a module */
  async resetModule(module: string): Promise<void> {
    try {
      this.log('resetModule', module);
      await this.getTable().where('module').equals(module).delete();
    } catch (e) {
      this.handleError('resetModule', e);
    }
  }
}
