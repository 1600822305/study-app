import type { Table } from 'dexie';

import { getDatabase } from '../database';
import { BaseRepository } from './base';

import type { AssistantRecord } from '../types';

// ============================================================
// Assistant Repository
// ============================================================

const DEFAULT_ASSISTANTS: Omit<AssistantRecord, 'createdAt' | 'updatedAt'>[] = [
  {
    id: 'default',
    name: '默认助手',
    emoji: '😀',
    description: '通用 AI 助手，可以回答各种问题',
    systemPrompt: '你是一个有帮助的AI助手。请用中文回答用户的问题。',
    topicIds: [],
    isSystem: true,
  },
  {
    id: 'math-tutor',
    name: '数学辅导',
    emoji: '📐',
    description: '专注数学学习辅导，擅长公式推导与解题',
    systemPrompt: '你是一位专业的数学辅导老师。请用清晰的步骤和公式（LaTeX格式）帮助学生理解数学概念和解题方法。',
    topicIds: [],
    isSystem: true,
  },
];

export class AssistantRepository extends BaseRepository<AssistantRecord, string> {
  protected readonly tableName = 'assistants';

  protected getTable(): Table<AssistantRecord> {
    return getDatabase().assistants;
  }

  /** 初始化预置助手（首次启动时） */
  async initDefaults(): Promise<void> {
    try {
      const count = await this.getTable().count();
      if (count > 0) return;

      this.log('initDefaults', 'creating default assistants');
      const now = new Date();
      for (const preset of DEFAULT_ASSISTANTS) {
        await this.getTable().put({
          ...preset,
          createdAt: now,
          updatedAt: now,
        });
      }
    } catch (e) {
      this.handleError('initDefaults', e);
    }
  }

  /** 获取所有助手（系统 + 用户），按更新时间倒序 */
  async getAll(): Promise<AssistantRecord[]> {
    try {
      this.log('getAll');
      return await this.getTable().orderBy('updatedAt').reverse().toArray();
    } catch (e) {
      this.handleError('getAll', e);
    }
  }

  /** 根据 ID 获取助手 */
  async getById(id: string): Promise<AssistantRecord | undefined> {
    try {
      return await this.getTable().get(id);
    } catch (e) {
      this.handleError('getById', e);
    }
  }

  /** 创建或更新助手 */
  async save(assistant: AssistantRecord): Promise<void> {
    try {
      this.log('save', assistant.id);
      assistant.updatedAt = new Date();
      await this.getTable().put(assistant);
    } catch (e) {
      this.handleError('save', e);
    }
  }

  /** 删除助手（系统助手不可删除） */
  async remove(id: string): Promise<void> {
    try {
      const record = await this.getTable().get(id);
      if (record?.isSystem) throw new Error('系统助手不可删除');
      this.log('remove', id);
      await this.getTable().delete(id);
    } catch (e) {
      this.handleError('remove', e);
    }
  }

  /** 更新助手的话题 ID 列表 */
  async addTopicId(assistantId: string, topicId: string): Promise<void> {
    try {
      const record = await this.getTable().get(assistantId);
      if (!record) throw new Error(`助手 ${assistantId} 不存在`);
      if (record.topicIds.includes(topicId)) return;
      record.topicIds.push(topicId);
      record.updatedAt = new Date();
      await this.getTable().put(record);
    } catch (e) {
      this.handleError('addTopicId', e);
    }
  }

  /** 从助手移除话题 ID */
  async removeTopicId(assistantId: string, topicId: string): Promise<void> {
    try {
      const record = await this.getTable().get(assistantId);
      if (!record) return;
      record.topicIds = record.topicIds.filter((id) => id !== topicId);
      record.updatedAt = new Date();
      await this.getTable().put(record);
    } catch (e) {
      this.handleError('removeTopicId', e);
    }
  }
}
