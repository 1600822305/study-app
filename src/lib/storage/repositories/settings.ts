import type { Table } from 'dexie';

import { getDatabase } from '../database';
import { BaseRepository } from './base';

import type { SettingRecord } from '../types';

// ============================================================
// Settings Repository
// ============================================================

export class SettingsRepository extends BaseRepository<SettingRecord> {
  protected readonly tableName = 'settings';

  protected getTable(): Table<SettingRecord> {
    return getDatabase().settings;
  }

  /** Get a setting value */
  async getValue(key: string): Promise<string | undefined> {
    try {
      this.log('getValue', key);
      const record = await this.getTable().get(key);
      return record?.value;
    } catch (e) {
      this.handleError('getValue', e);
    }
  }

  /** Set a setting value */
  async setValue(key: string, value: string): Promise<void> {
    try {
      this.log('setValue', key);
      await this.getTable().put({ key, value, updatedAt: new Date() });
    } catch (e) {
      this.handleError('setValue', e);
    }
  }

  /** Get a typed setting with fallback */
  async getTyped<T>(key: string, fallback: T): Promise<T> {
    const raw = await this.getValue(key);
    if (!raw) return fallback;
    try {
      return JSON.parse(raw) as T;
    } catch {
      return fallback;
    }
  }

  /** Set a typed setting */
  async setTyped<T>(key: string, value: T): Promise<void> {
    await this.setValue(key, JSON.stringify(value));
  }

  /** Delete a setting */
  async remove(key: string): Promise<void> {
    try {
      this.log('remove', key);
      await this.getTable().delete(key);
    } catch (e) {
      this.handleError('remove', e);
    }
  }
}
