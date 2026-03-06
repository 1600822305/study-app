// ============================================================
// Provider Registry — 供应商注册中心
// 管理所有 AI 供应商的增删改查，持久化到 IndexedDB
// ============================================================

import { storage } from '@/lib/storage';
import type { AIProvider, AIModel } from './types';
import { PRESET_PROVIDERS } from './presets';

const STORAGE_KEY = 'ai:providers';
const DELETED_PRESETS_KEY = 'ai:deleted-preset-ids';

/** 内存缓存 */
let _cache: AIProvider[] | null = null;
let _deletedPresetsCache: Set<string> | null = null;

/** 加载已删除的预置供应商 ID 集合 */
async function loadDeletedPresets(): Promise<Set<string>> {
  if (_deletedPresetsCache) return _deletedPresetsCache;
  const ids = await storage.settings.getTyped<string[]>(DELETED_PRESETS_KEY, []);
  _deletedPresetsCache = new Set(ids);
  return _deletedPresetsCache;
}

/** 持久化已删除的预置供应商 ID */
async function saveDeletedPresets(ids: Set<string>): Promise<void> {
  _deletedPresetsCache = ids;
  await storage.settings.setTyped(DELETED_PRESETS_KEY, Array.from(ids));
}

// ============================================================
// 读写层
// ============================================================

/** 从 IndexedDB 加载所有供应商 */
async function loadProviders(): Promise<AIProvider[]> {
  if (_cache) return _cache;
  const providers = await storage.settings.getTyped<AIProvider[]>(STORAGE_KEY, []);
  _cache = providers;
  return providers;
}

/** 持久化供应商列表 */
async function saveProviders(providers: AIProvider[]): Promise<void> {
  _cache = providers;
  await storage.settings.setTyped(STORAGE_KEY, providers);
}

// ============================================================
// Public API
// ============================================================

export const providerRegistry = {
  /** 获取所有供应商 */
  async getAll(): Promise<AIProvider[]> {
    return loadProviders();
  },

  /** 获取所有已启用的供应商 */
  async getEnabled(): Promise<AIProvider[]> {
    const all = await loadProviders();
    return all.filter((p) => p.enabled);
  },

  /** 根据 ID 获取供应商 */
  async getById(id: string): Promise<AIProvider | undefined> {
    const all = await loadProviders();
    return all.find((p) => p.id === id);
  },

  /** 添加或更新供应商 */
  async upsert(provider: AIProvider): Promise<void> {
    const all = await loadProviders();
    const idx = all.findIndex((p) => p.id === provider.id);
    if (idx >= 0) {
      all[idx] = provider;
    } else {
      all.push(provider);
    }
    await saveProviders(all);
  },

  /** 删除供应商 */
  async remove(id: string): Promise<void> {
    const all = await loadProviders();
    // 如果是预置供应商，记录到已删除列表防止 initFromPresets 复活
    const isPreset = PRESET_PROVIDERS.some((p) => p.id === id);
    if (isPreset) {
      const deleted = await loadDeletedPresets();
      deleted.add(id);
      await saveDeletedPresets(deleted);
    }
    await saveProviders(all.filter((p) => p.id !== id));
  },

  /** 启用/禁用供应商 */
  async setEnabled(id: string, enabled: boolean): Promise<void> {
    const all = await loadProviders();
    const provider = all.find((p) => p.id === id);
    if (provider) {
      provider.enabled = enabled;
      await saveProviders(all);
    }
  },

  /** 更新供应商的 API Key */
  async setApiKey(id: string, apiKey: string): Promise<void> {
    const all = await loadProviders();
    const provider = all.find((p) => p.id === id);
    if (provider) {
      provider.apiKey = apiKey;
      await saveProviders(all);
    }
  },

  /** 更新供应商的 API Host */
  async setApiHost(id: string, apiHost: string): Promise<void> {
    const all = await loadProviders();
    const provider = all.find((p) => p.id === id);
    if (provider) {
      provider.apiHost = apiHost;
      await saveProviders(all);
    }
  },

  /** 向供应商添加自定义模型 */
  async addModel(providerId: string, model: AIModel): Promise<void> {
    const all = await loadProviders();
    const provider = all.find((p) => p.id === providerId);
    if (provider) {
      const exists = provider.models.some((m) => m.id === model.id);
      if (!exists) {
        provider.models.push(model);
        await saveProviders(all);
      }
    }
  },

  /** 从供应商移除模型 */
  async removeModel(providerId: string, modelId: string): Promise<void> {
    const all = await loadProviders();
    const provider = all.find((p) => p.id === providerId);
    if (provider) {
      provider.models = provider.models.filter((m) => m.id !== modelId);
      await saveProviders(all);
    }
  },

  /**
   * 从预置模板初始化供应商（首次使用时调用）
   * 只添加不存在的预置供应商，不覆盖用户已有配置
   */
  async initFromPresets(): Promise<void> {
    const all = await loadProviders();
    const existingIds = new Set(all.map((p) => p.id));
    const deletedIds = await loadDeletedPresets();
    let changed = false;

    for (const preset of PRESET_PROVIDERS) {
      // 跳过用户已手动删除过的预置供应商
      if (deletedIds.has(preset.id)) continue;
      if (!existingIds.has(preset.id)) {
        all.push({
          id: preset.id,
          name: preset.name,
          type: preset.type,
          apiKey: '',
          apiHost: preset.apiHost,
          models: preset.models,
          enabled: false,
          isSystem: true,
          icon: preset.icon,
        });
        changed = true;
      }
    }

    if (changed) {
      await saveProviders(all);
    }
  },

  /** 获取所有可用模型（跨供应商） */
  async getAllModels(): Promise<(AIModel & { providerName: string })[]> {
    const enabled = await this.getEnabled();
    return enabled.flatMap((p) =>
      p.models.map((m) => ({ ...m, providerName: p.name })),
    );
  },

  /** 清除内存缓存（调试用） */
  invalidateCache(): void {
    _cache = null;
  },
} as const;
