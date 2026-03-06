import type { Table } from 'dexie';

import { getDatabase } from '../database';
import { BaseRepository } from './base';

import type { UIStateRecord } from '../types';

// ============================================================
// UI State Repository
// ============================================================

export class UIStateRepository extends BaseRepository<UIStateRecord> {
  protected readonly tableName = 'uiState';

  protected getTable(): Table<UIStateRecord> {
    return getDatabase().uiState;
  }

  /** Get a raw string value */
  async getValue(key: string): Promise<string | undefined> {
    try {
      this.log('getValue', key);
      const record = await this.getTable().get(key);
      return record?.value;
    } catch (e) {
      this.handleError('getValue', e);
    }
  }

  /** Set a raw string value */
  async setValue(key: string, value: string): Promise<void> {
    try {
      this.log('setValue', key);
      await this.getTable().put({ key, value, updatedAt: new Date() });
    } catch (e) {
      this.handleError('setValue', e);
    }
  }

  /** Get a JSON-parsed value with type safety */
  async getJSON<T>(key: string, fallback: T): Promise<T> {
    const raw = await this.getValue(key);
    if (!raw) return fallback;
    try {
      return JSON.parse(raw) as T;
    } catch {
      return fallback;
    }
  }

  /** Set a JSON-serialized value */
  async setJSON<T>(key: string, value: T): Promise<void> {
    await this.setValue(key, JSON.stringify(value));
  }

  /** Delete a UI state entry */
  async remove(key: string): Promise<void> {
    try {
      this.log('remove', key);
      await this.getTable().delete(key);
    } catch (e) {
      this.handleError('remove', e);
    }
  }

  /** Get all UI state keys matching a prefix */
  async getByPrefix(prefix: string): Promise<UIStateRecord[]> {
    try {
      this.log('getByPrefix', prefix);
      return await this.getTable()
        .filter((r) => r.key.startsWith(prefix))
        .toArray();
    } catch (e) {
      this.handleError('getByPrefix', e);
    }
  }
}
