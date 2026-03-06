import type { Table } from 'dexie';

import { getDatabase } from '../database';
import { BaseRepository } from './base';

import type { ProgressRecord } from '../types';

// ============================================================
// Progress Repository
// ============================================================

export class ProgressRepository extends BaseRepository<ProgressRecord> {
  protected readonly tableName = 'progress';

  protected getTable(): Table<ProgressRecord> {
    return getDatabase().progress;
  }

  /** Get all checked item IDs for a module */
  async getCheckedIds(module: string): Promise<string[]> {
    try {
      this.log('getCheckedIds', module);
      const records = await this.getTable()
        .where('module')
        .equals(module)
        .filter((r) => r.checked)
        .toArray();
      return records.map((r) => r.itemId);
    } catch (e) {
      this.handleError('getCheckedIds', e);
    }
  }

  /** Toggle a progress item, returns new checked state */
  async toggle(module: string, itemId: string): Promise<boolean> {
    try {
      this.log('toggle', `${module}:${itemId}`);
      const existing = await this.getTable()
        .where('[module+itemId]')
        .equals([module, itemId])
        .first();

      const now = new Date();

      if (existing) {
        const newChecked = !existing.checked;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        await this.getTable().update(existing.id!, { checked: newChecked, updatedAt: now } as any);
        return newChecked;
      } else {
        await this.getTable().add({
          module,
          itemId,
          checked: true,
          createdAt: now,
          updatedAt: now,
        });
        return true;
      }
    } catch (e) {
      this.handleError('toggle', e);
    }
  }

  /** Get completion stats for a module */
  async getStats(module: string, totalItems: number): Promise<{ completed: number; total: number; percent: number }> {
    const checked = await this.getCheckedIds(module);
    const completed = checked.length;
    return {
      completed,
      total: totalItems,
      percent: totalItems > 0 ? Math.round((completed / totalItems) * 100) : 0,
    };
  }

  /** Reset all progress for a module */
  async resetModule(module: string): Promise<void> {
    try {
      this.log('resetModule', module);
      await this.getTable().where('module').equals(module).delete();
    } catch (e) {
      this.handleError('resetModule', e);
    }
  }
}
