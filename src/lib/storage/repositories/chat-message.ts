import type { Table } from 'dexie';

import { getDatabase } from '../database';
import { BaseRepository } from './base';

import type { ChatMessageRecord } from '../types';

// ============================================================
// Chat Message Repository
// ============================================================

export class ChatMessageRepository extends BaseRepository<ChatMessageRecord, string> {
  protected readonly tableName = 'chatMessages';

  protected getTable(): Table<ChatMessageRecord> {
    return getDatabase().chatMessages;
  }

  /** 获取某个话题的所有消息，按时间正序 */
  async getByTopicId(topicId: string): Promise<ChatMessageRecord[]> {
    try {
      this.log('getByTopicId', topicId);
      return await this.getTable()
        .where('topicId')
        .equals(topicId)
        .sortBy('createdAt');
    } catch (e) {
      this.handleError('getByTopicId', e);
    }
  }

  /** 添加消息 */
  async addMessage(
    topicId: string,
    assistantId: string,
    role: ChatMessageRecord['role'],
    content: string,
    modelId?: string,
    reasoning?: string,
  ): Promise<ChatMessageRecord> {
    try {
      const msg: ChatMessageRecord = {
        id: `msg-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        topicId,
        assistantId,
        role,
        content,
        reasoning,
        modelId,
        createdAt: new Date(),
      };
      this.log('addMessage', `${topicId}:${role}`);
      await this.getTable().put(msg);
      return msg;
    } catch (e) {
      this.handleError('addMessage', e);
    }
  }

  /** 更新消息内容（流式完成后） */
  async updateContent(id: string, content: string): Promise<void> {
    try {
      await this.getTable().update(id, { content } as any);
    } catch (e) {
      this.handleError('updateContent', e);
    }
  }

  /** 删除某个话题的所有消息 */
  async deleteByTopicId(topicId: string): Promise<void> {
    try {
      this.log('deleteByTopicId', topicId);
      await this.getTable().where('topicId').equals(topicId).delete();
    } catch (e) {
      this.handleError('deleteByTopicId', e);
    }
  }

  /** 获取话题的消息数量 */
  async countByTopicId(topicId: string): Promise<number> {
    try {
      return await this.getTable().where('topicId').equals(topicId).count();
    } catch (e) {
      this.handleError('countByTopicId', e);
    }
  }
}
