import type { Table } from 'dexie';

import { getDatabase } from '../database';
import { BaseRepository } from './base';

import type { TopicRecord } from '../types';

// ============================================================
// Topic Repository
// ============================================================

export class TopicRepository extends BaseRepository<TopicRecord, string> {
  protected readonly tableName = 'topics';

  protected getTable(): Table<TopicRecord> {
    return getDatabase().topics;
  }

  /** 获取某个助手的所有话题，按更新时间倒序 */
  async getByAssistantId(assistantId: string): Promise<TopicRecord[]> {
    try {
      this.log('getByAssistantId', assistantId);
      const topics = await this.getTable()
        .where('assistantId')
        .equals(assistantId)
        .toArray();
      // 置顶在前，然后按时间倒序
      topics.sort((a, b) => {
        if (a.pinned && !b.pinned) return -1;
        if (!a.pinned && b.pinned) return 1;
        return (b.lastMessageAt ?? b.updatedAt).getTime() - (a.lastMessageAt ?? a.updatedAt).getTime();
      });
      return topics;
    } catch (e) {
      this.handleError('getByAssistantId', e);
    }
  }

  /** 创建话题 */
  async create(assistantId: string, name?: string): Promise<TopicRecord> {
    try {
      const now = new Date();
      const topic: TopicRecord = {
        id: `topic-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        name: name || `新对话 ${now.toLocaleDateString()}`,
        assistantId,
        messageIds: [],
        createdAt: now,
        updatedAt: now,
      };
      this.log('create', topic.id);
      await this.getTable().put(topic);
      return topic;
    } catch (e) {
      this.handleError('create', e);
    }
  }

  /** 更新话题名称 */
  async rename(id: string, name: string): Promise<void> {
    try {
      this.log('rename', `${id} -> ${name}`);
      await this.getTable().update(id, { name, updatedAt: new Date() } as any);
    } catch (e) {
      this.handleError('rename', e);
    }
  }

  /** 添加消息 ID 到话题 */
  async addMessageId(topicId: string, messageId: string): Promise<void> {
    try {
      const record = await this.getTable().get(topicId);
      if (!record) throw new Error(`话题 ${topicId} 不存在`);
      record.messageIds.push(messageId);
      record.updatedAt = new Date();
      record.lastMessageAt = new Date();
      await this.getTable().put(record);
    } catch (e) {
      this.handleError('addMessageId', e);
    }
  }

  /** 切换置顶状态 */
  async togglePin(id: string): Promise<boolean> {
    try {
      const record = await this.getTable().get(id);
      if (!record) throw new Error(`话题 ${id} 不存在`);
      const pinned = !record.pinned;
      await this.getTable().update(id, { pinned, updatedAt: new Date() } as any);
      return pinned;
    } catch (e) {
      this.handleError('togglePin', e);
    }
  }

  /** 删除话题 */
  async remove(id: string): Promise<void> {
    try {
      this.log('remove', id);
      await this.getTable().delete(id);
    } catch (e) {
      this.handleError('remove', e);
    }
  }

  /** 删除某个助手的所有话题 */
  async removeByAssistantId(assistantId: string): Promise<void> {
    try {
      this.log('removeByAssistantId', assistantId);
      await this.getTable().where('assistantId').equals(assistantId).delete();
    } catch (e) {
      this.handleError('removeByAssistantId', e);
    }
  }
}
