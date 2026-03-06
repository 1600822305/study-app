import type { Table } from 'dexie';

import { StorageError } from '../errors';
import { storageLogger } from '../logger';

// ============================================================
// Abstract Base Repository
// ============================================================

export abstract class BaseRepository<T> {
  protected abstract readonly tableName: string;
  protected abstract getTable(): Table<T>;

  protected log(op: string, detail?: string) {
    storageLogger.debug(this.tableName, op, detail);
  }

  protected handleError(op: string, error: unknown): never {
    const message = error instanceof Error ? error.message : String(error);
    storageLogger.error(this.tableName, op, message);
    throw new StorageError(message, this.tableName, op, error);
  }

  async getAll(): Promise<T[]> {
    try {
      this.log('getAll');
      return await this.getTable().toArray();
    } catch (e) {
      this.handleError('getAll', e);
    }
  }

  async getById(id: number): Promise<T | undefined> {
    try {
      this.log('getById', String(id));
      return await this.getTable().get(id);
    } catch (e) {
      this.handleError('getById', e);
    }
  }

  async add(record: T): Promise<number> {
    try {
      this.log('add');
      const id = await this.getTable().add(record);
      return id as number;
    } catch (e) {
      this.handleError('add', e);
    }
  }

  async put(record: T): Promise<void> {
    try {
      this.log('put');
      await this.getTable().put(record);
    } catch (e) {
      this.handleError('put', e);
    }
  }

  async update(id: number, changes: Partial<T>): Promise<void> {
    try {
      this.log('update', String(id));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await this.getTable().update(id, changes as any);
    } catch (e) {
      this.handleError('update', e);
    }
  }

  async deleteById(id: number): Promise<void> {
    try {
      this.log('delete', String(id));
      await this.getTable().delete(id);
    } catch (e) {
      this.handleError('delete', e);
    }
  }

  async count(): Promise<number> {
    try {
      return await this.getTable().count();
    } catch (e) {
      this.handleError('count', e);
    }
  }

  async clear(): Promise<void> {
    try {
      this.log('clear', 'ALL RECORDS');
      await this.getTable().clear();
    } catch (e) {
      this.handleError('clear', e);
    }
  }
}
