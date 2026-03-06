// ============================================================
// AIProviderPage — 供应商详情配置（三级页面）
// 参考 AetherLink ModelProviders/index.tsx 设计
// ============================================================

import { useState, useEffect, useCallback, useMemo } from 'react';
import {
  ArrowLeft, Save, Plus, Trash2, Loader2, ExternalLink,
  Eye, EyeOff, Edit, Download, CheckCircle, XCircle, Search, X, ChevronDown,
} from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

import {
  providerRegistry, testModelConnection, fetchModelsFromAPI,
  getCompleteApiUrl, PRESET_PROVIDERS,
} from '@/lib/ai';
import type { AIProvider, AIModel } from '@/lib/ai';

export function AIProviderPage() {
  const nav = useNavigate();
  const { providerId } = useParams<{ providerId: string }>();

  const [provider, setProvider] = useState<AIProvider | null>(null);
  const [pageLoading, setPageLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [dirty, setDirty] = useState(false);

  const [apiKeyVisible, setApiKeyVisible] = useState(false);

  // 单模型测试状态: modelId → { testing, result }
  const [modelTests, setModelTests] = useState<Map<string, { testing: boolean; result?: { ok: boolean; error?: string } }>>(new Map());

  // 模型管理对话框（从 API 获取）
  const [mgmtDialogOpen, setMgmtDialogOpen] = useState(false);

  // 手动添加模型对话框
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [inputModelId, setInputModelId] = useState('');
  const [inputModelName, setInputModelName] = useState('');

  const [modelBeingEdited, setModelBeingEdited] = useState<AIModel | null>(null);
  const [editId, setEditId] = useState('');
  const [editName, setEditName] = useState('');

  const presetInfo = PRESET_PROVIDERS.find((p) => p.id === provider?.id)?.websites;

  // --- Load provider from registry ---
  useEffect(() => {
    if (!providerId) return;
    (async () => {
      await providerRegistry.initFromPresets();
      const found = await providerRegistry.getById(providerId);
      setProvider(found || null);
      setPageLoading(false);
    })();
  }, [providerId]);

  // --- Patch helper ---
  const patch = useCallback((updates: Partial<AIProvider>) => {
    setProvider((prev) => prev ? { ...prev, ...updates } : prev);
    setDirty(true);
    setSaved(false);
  }, []);

  // --- Persist ---
  const doSave = useCallback(async () => {
    if (!provider) return;
    setSaving(true);
    try {
      await providerRegistry.upsert(provider);
      setDirty(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } finally {
      setSaving(false);
    }
  }, [provider]);

  // --- Delete ---
  const doDelete = useCallback(async () => {
    if (!provider) return;
    if (!window.confirm(`确定要删除供应商「${provider.name}」吗？此操作不可恢复。`)) return;
    await providerRegistry.remove(provider.id);
    nav('/settings/ai', { replace: true });
  }, [provider, nav]);

  // --- Test single model connection ---
  const doTestModel = useCallback(async (modelId: string) => {
    if (!provider) return;
    await providerRegistry.upsert(provider);
    setModelTests((prev) => {
      const next = new Map(prev);
      next.set(modelId, { testing: true });
      return next;
    });
    const res = await testModelConnection(provider.id, modelId);
    setModelTests((prev) => {
      const next = new Map(prev);
      next.set(modelId, { testing: false, result: res });
      return next;
    });
  }, [provider]);

  // --- Open model management dialog (从 API 获取) ---
  const openModelMgmt = useCallback(async () => {
    if (!provider) return;
    await providerRegistry.upsert(provider); // persist latest config
    setMgmtDialogOpen(true);
  }, [provider]);

  // --- Batch add from dialog ---
  const doBatchAddModels = useCallback((models: Array<{ id: string; name: string }>) => {
    if (!provider) return;
    const existingIds = new Set(provider.models.map((m) => m.id));
    const additions: AIModel[] = models
      .filter((m) => !existingIds.has(m.id))
      .map((m) => ({ id: m.id, name: m.name || m.id, providerId: provider.id }));
    if (additions.length > 0) {
      patch({ models: [...provider.models, ...additions] });
    }
    setMgmtDialogOpen(false);
  }, [provider, patch]);

  // --- Manual model add (dialog) ---
  const doAddModel = useCallback(() => {
    if (!provider || !inputModelId.trim()) return;
    const trimmedId = inputModelId.trim();
    if (provider.models.some((m) => m.id === trimmedId)) {
      window.alert('该模型 ID 已存在，请勿重复添加');
      return;
    }
    const newModel: AIModel = {
      id: trimmedId,
      name: inputModelName.trim() || trimmedId,
      providerId: provider.id,
    };
    patch({ models: [...provider.models, newModel] });
    setInputModelId('');
    setInputModelName('');
    setAddDialogOpen(false);
  }, [provider, inputModelId, inputModelName, patch]);

  // --- Edit model ---
  const doSaveModelEdit = useCallback(() => {
    if (!provider || !modelBeingEdited || !editId.trim()) return;
    patch({
      models: provider.models.map((m) =>
        m.id === modelBeingEdited.id
          ? { ...m, id: editId.trim(), name: editName.trim() || editId.trim() }
          : m,
      ),
    });
    setModelBeingEdited(null);
  }, [provider, modelBeingEdited, editId, editName, patch]);

  // --- Remove model ---
  const doRemoveModel = useCallback((mid: string) => {
    if (!provider) return;
    patch({ models: provider.models.filter((m) => m.id !== mid) });
  }, [provider, patch]);

  // ============================================================
  // Loading / Not Found states
  // ============================================================
  if (pageLoading) {
    return (
      <div className="flex items-center justify-center py-20 text-gray-400 gap-2">
        <Loader2 size={22} className="animate-spin" />
        <span className="text-sm">加载中...</span>
      </div>
    );
  }

  if (!provider) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => nav('/settings/ai')} className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-bold text-red-500">供应商未找到</h1>
        </div>
        <p className="text-gray-500 text-sm">该供应商不存在或已被删除，请返回列表重新选择。</p>
      </div>
    );
  }

  // ============================================================
  // Main Render
  // ============================================================
  return (
    <div className="max-w-4xl mx-auto pb-8">
      {/* === Page Header === */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <button onClick={() => nav('/settings/ai')} className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
            <ArrowLeft size={20} />
          </button>
          <span className="text-2xl">{provider.icon || '🤖'}</span>
          <h1 className="text-xl font-bold text-gray-900 truncate">{provider.name}</h1>
        </div>
        <button onClick={doSave} disabled={saving || !dirty}
          className="flex items-center gap-1.5 px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer transition-colors disabled:opacity-40 disabled:cursor-not-allowed font-medium shadow-sm">
          <Save size={15} />
          {saving ? '保存中...' : saved ? '已保存 ✓' : '保存配置'}
        </button>
      </div>

      {/* === Section: 基本信息 === */}
      <SettingsCard title="基本信息">
        <FieldGroup label="供应商名称">
          <input type="text" value={provider.name} onChange={(e) => patch({ name: e.target.value })}
            className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400" />
        </FieldGroup>

        <div className="flex items-center justify-between py-1">
          <div>
            <p className="text-sm font-medium text-gray-700">启用此供应商</p>
            <p className="text-xs text-gray-400 mt-0.5">关闭后该供应商下的所有模型将不可选用</p>
          </div>
          <ToggleSwitch checked={provider.enabled} onChange={(v) => patch({ enabled: v })} />
        </div>
      </SettingsCard>

      {/* === Section: API 配置 === */}
      <SettingsCard title="API 配置">
        {/* API Key */}
        <FieldGroup label="API Key" trailing={
          presetInfo?.apiKey ? (
            <a href={presetInfo.apiKey} target="_blank" rel="noreferrer"
              className="text-xs text-blue-500 hover:underline inline-flex items-center gap-1">
              获取 Key <ExternalLink size={10} />
            </a>
          ) : undefined
        }>
          <div className="relative">
            <input
              type={apiKeyVisible ? 'text' : 'password'}
              value={provider.apiKey}
              onChange={(e) => patch({ apiKey: e.target.value })}
              placeholder="sk-..."
              className="w-full px-3 py-2 pr-10 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 font-mono"
            />
            <button onClick={() => setApiKeyVisible(!apiKeyVisible)}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors">
              {apiKeyVisible ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </FieldGroup>

        {/* Base URL */}
        <FieldGroup label="API 地址 (Base URL)">
          <input type="text" value={provider.apiHost}
            onChange={(e) => patch({ apiHost: e.target.value })}
            placeholder="https://api.openai.com"
            className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 font-mono" />
          {provider.apiHost && (
            <p className="mt-1.5 text-[11px] text-gray-400 font-mono bg-gray-50 px-2.5 py-1.5 rounded border border-gray-100">
              完整请求地址：{getCompleteApiUrl(provider.apiHost)}
            </p>
          )}
        </FieldGroup>

      </SettingsCard>

      {/* === Section: 模型管理 === */}
      <SettingsCard title={`模型列表 (${provider.models.length})`} headerRight={
        <div className="flex items-center gap-2">
          <button onClick={openModelMgmt}
            disabled={!provider.apiKey || !provider.apiHost}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 cursor-pointer transition-colors disabled:opacity-40 disabled:cursor-not-allowed font-medium">
            <Download size={13} /> 从 API 获取
          </button>
          <button onClick={() => { setAddDialogOpen(true); setInputModelId(''); setInputModelName(''); }}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 cursor-pointer transition-colors font-medium">
            <Plus size={13} /> 手动添加
          </button>
        </div>
      }>
        {/* Model list */}
        <div className="space-y-1.5">
          {provider.models.map((m) => {
            const testState = modelTests.get(m.id);
            return (
              <div key={m.id}
                className="flex items-center justify-between px-3 py-2.5 bg-gray-50 rounded-lg text-sm group hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-2 min-w-0 flex-1">
                  <span className="text-gray-800 font-medium truncate">{m.name}</span>
                  {m.name !== m.id && <span className="text-[10px] text-gray-400 font-mono truncate">{m.id}</span>}
                  {m.isReasoning && <span className="text-[10px] px-1.5 py-0.5 bg-amber-100 text-amber-700 rounded font-medium shrink-0">推理</span>}
                  {/* Per-model test result badge */}
                  {testState?.result && (
                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium shrink-0 inline-flex items-center gap-0.5 ${
                      testState.result.ok ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-500'
                    }`}>
                      {testState.result.ok ? <CheckCircle size={10} /> : <XCircle size={10} />}
                      {testState.result.ok ? '通过' : '失败'}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-0.5 shrink-0">
                  {/* Test button */}
                  <button onClick={() => doTestModel(m.id)}
                    disabled={!provider.apiKey || testState?.testing}
                    className="p-1.5 text-gray-400 hover:text-emerald-600 cursor-pointer rounded hover:bg-emerald-50 opacity-0 group-hover:opacity-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    title="测试此模型">
                    {testState?.testing ? <Loader2 size={14} className="animate-spin text-emerald-500" /> : <CheckCircle size={14} />}
                  </button>
                  <button onClick={() => { setModelBeingEdited(m); setEditId(m.id); setEditName(m.name); }}
                    className="p-1.5 text-gray-400 hover:text-blue-500 cursor-pointer rounded hover:bg-blue-50 opacity-0 group-hover:opacity-100 transition-all" title="编辑模型">
                    <Edit size={14} />
                  </button>
                  <button onClick={() => doRemoveModel(m.id)}
                    className="p-1.5 text-gray-400 hover:text-red-500 cursor-pointer rounded hover:bg-red-50 opacity-0 group-hover:opacity-100 transition-all" title="移除模型">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            );
          })}
          {provider.models.length === 0 && (
            <div className="text-center py-8 text-gray-400">
              <p className="text-sm">暂无模型</p>
              <p className="text-xs mt-1">使用「从 API 获取」自动拉取，或「手动添加」</p>
            </div>
          )}
        </div>
      </SettingsCard>

      {/* === Section: 危险操作 === */}
      <section className="bg-white rounded-xl border border-red-200 shadow-sm overflow-hidden">
        <div className="px-5 py-3 bg-red-50/50 border-b border-red-100">
          <h2 className="text-sm font-semibold text-red-600">危险操作</h2>
        </div>
        <div className="px-5 py-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-700">删除供应商「{provider.name}」</p>
            <p className="text-xs text-gray-400 mt-0.5">将同时清除所有模型配置，不可恢复</p>
          </div>
          <button onClick={doDelete}
            className="flex items-center gap-1.5 px-4 py-2 text-xs bg-red-50 text-red-600 rounded-lg hover:bg-red-100 cursor-pointer transition-colors font-medium border border-red-200">
            <Trash2 size={13} /> 删除
          </button>
        </div>
        {presetInfo?.docs && (
          <div className="px-5 py-2.5 border-t border-red-100 bg-gray-50/30">
            <a href={presetInfo.docs} target="_blank" rel="noreferrer"
              className="text-xs text-gray-400 hover:text-blue-500 inline-flex items-center gap-1">
              查看供应商文档 <ExternalLink size={10} />
            </a>
          </div>
        )}
      </section>

      {/* ===== Model Management Dialog (从 API 获取) ===== */}
      {mgmtDialogOpen && (
        <ModelManagementDialog
          providerId={provider.id}
          existingModelIds={new Set(provider.models.map((m) => m.id))}
          onConfirm={doBatchAddModels}
          onClose={() => setMgmtDialogOpen(false)}
        />
      )}

      {/* ===== Add Model Dialog (手动添加) ===== */}
      {addDialogOpen && (
        <DialogOverlay onClose={() => setAddDialogOpen(false)}>
          <div className="px-5 py-4 border-b border-gray-100">
            <h3 className="text-base font-semibold text-gray-900">手动添加模型</h3>
          </div>
          <div className="px-5 py-4 space-y-3">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1.5">模型 ID</label>
              <input type="text" value={inputModelId} onChange={(e) => setInputModelId(e.target.value)}
                autoFocus placeholder="例如 gpt-4o-mini"
                className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 font-mono"
                onKeyDown={(e) => e.key === 'Enter' && doAddModel()} />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1.5">显示名称（可选）</label>
              <input type="text" value={inputModelName} onChange={(e) => setInputModelName(e.target.value)}
                placeholder="留空则与 ID 相同"
                className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400"
                onKeyDown={(e) => e.key === 'Enter' && doAddModel()} />
            </div>
          </div>
          <div className="px-5 py-3 border-t border-gray-100 flex justify-end gap-2 bg-gray-50/50">
            <button onClick={() => setAddDialogOpen(false)}
              className="px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
              取消
            </button>
            <button onClick={doAddModel} disabled={!inputModelId.trim()}
              className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer transition-colors disabled:opacity-50 font-medium">
              添加
            </button>
          </div>
        </DialogOverlay>
      )}

      {/* ===== Edit Model Dialog ===== */}
      {modelBeingEdited && (
        <DialogOverlay onClose={() => setModelBeingEdited(null)}>
          <div className="px-5 py-4 border-b border-gray-100">
            <h3 className="text-base font-semibold text-gray-900">编辑模型</h3>
          </div>
          <div className="px-5 py-4 space-y-3">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1.5">模型 ID</label>
              <input type="text" value={editId} onChange={(e) => setEditId(e.target.value)}
                autoFocus
                className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 font-mono"
                onKeyDown={(e) => e.key === 'Enter' && doSaveModelEdit()} />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1.5">显示名称</label>
              <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)}
                placeholder="留空则与 ID 相同"
                className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400"
                onKeyDown={(e) => e.key === 'Enter' && doSaveModelEdit()} />
            </div>
          </div>
          <div className="px-5 py-3 border-t border-gray-100 flex justify-end gap-2 bg-gray-50/50">
            <button onClick={() => setModelBeingEdited(null)}
              className="px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
              取消
            </button>
            <button onClick={doSaveModelEdit} disabled={!editId.trim()}
              className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer transition-colors disabled:opacity-50 font-medium">
              保存
            </button>
          </div>
        </DialogOverlay>
      )}
    </div>
  );
}

// ============================================================
// 可复用子组件
// ============================================================

function SettingsCard({ title, headerRight, children }: {
  title: string;
  headerRight?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white rounded-xl border border-gray-200 shadow-sm mb-4 overflow-hidden">
      <div className="px-5 py-3 bg-gray-50/80 border-b border-gray-100 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-gray-700">{title}</h2>
        {headerRight}
      </div>
      <div className="px-5 py-4 space-y-4">{children}</div>
    </section>
  );
}

function FieldGroup({ label, trailing, children }: {
  label: string;
  trailing?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <label className="text-xs font-medium text-gray-500">{label}</label>
        {trailing}
      </div>
      {children}
    </div>
  );
}

function ToggleSwitch({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button onClick={() => onChange(!checked)}
      className={`w-12 h-6 rounded-full transition-colors cursor-pointer relative ${checked ? 'bg-green-500' : 'bg-gray-300'}`}>
      <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-all ${checked ? 'left-7' : 'left-1'}`} />
    </button>
  );
}

// ============================================================
// DialogOverlay — 通用模态弹窗容器
// ============================================================

function DialogOverlay({ onClose, children, wide }: {
  onClose: () => void;
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className={`relative bg-white rounded-xl shadow-2xl mx-4 overflow-hidden ${wide ? 'w-full max-w-2xl' : 'w-full max-w-md'}`}>
        {children}
      </div>
    </div>
  );
}

// ============================================================
// ModelManagementDialog — 从 API 获取模型的全功能对话框
// 参考 AetherLink ModelManagementDialogSolid
// 功能：搜索过滤、已添加标识、全选/反选、批量添加
// ============================================================

// 根据模型 ID 提取分组名（取前缀）
function deriveGroupName(modelId: string): string {
  // 常见分隔: "gpt-4o-mini" → "gpt-4o", "deepseek-chat" → "deepseek"
  // 策略: 按 "-" 分割，保留前 1~2 段作为组名
  const parts = modelId.split(/[-/]/);
  if (parts.length <= 1) return modelId;
  // 如果第二段是版本号样式（纯数字开头），则只保留第一段
  if (/^\d/.test(parts[1])) return parts[0];
  // 否则保留前两段
  return `${parts[0]}-${parts[1]}`;
}

function ModelManagementDialog({ providerId, existingModelIds, onConfirm, onClose }: {
  providerId: string;
  existingModelIds: Set<string>;
  onConfirm: (models: Array<{ id: string; name: string }>) => void;
  onClose: () => void;
}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [allModels, setAllModels] = useState<Array<{ id: string; name: string }>>([]);
  const [search, setSearch] = useState('');
  const [picked, setPicked] = useState<Set<string>>(new Set());
  const [collapsedGroups, setCollapsedGroups] = useState<Set<string>>(new Set());

  // Fetch models on mount
  useEffect(() => {
    (async () => {
      setLoading(true);
      setError('');
      const res = await fetchModelsFromAPI(providerId);
      if (res.ok && res.models) {
        setAllModels(res.models);
      } else {
        setError(res.error || '获取模型列表失败');
      }
      setLoading(false);
    })();
  }, [providerId]);

  // Filter by search
  const filtered = allModels.filter((m) =>
    m.id.toLowerCase().includes(search.toLowerCase()) ||
    m.name.toLowerCase().includes(search.toLowerCase()),
  );

  // Group models
  const grouped = useMemo(() => {
    const map = new Map<string, Array<{ id: string; name: string }>>();
    for (const m of filtered) {
      const group = deriveGroupName(m.id);
      if (!map.has(group)) map.set(group, []);
      map.get(group)!.push(m);
    }
    // Sort: groups with more models first
    return Array.from(map.entries()).sort((a, b) => b[1].length - a[1].length);
  }, [filtered]);

  // Only pickable (not yet added)
  const pickable = filtered.filter((m) => !existingModelIds.has(m.id));

  const toggleOne = (id: string) => {
    if (existingModelIds.has(id)) return;
    setPicked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const toggleGroup = (groupName: string) => {
    setCollapsedGroups((prev) => {
      const next = new Set(prev);
      next.has(groupName) ? next.delete(groupName) : next.add(groupName);
      return next;
    });
  };

  // Select/deselect all pickable in a group
  const toggleGroupSelect = (models: Array<{ id: string; name: string }>) => {
    const groupPickable = models.filter((m) => !existingModelIds.has(m.id));
    const allPicked = groupPickable.every((m) => picked.has(m.id));
    setPicked((prev) => {
      const next = new Set(prev);
      groupPickable.forEach((m) => allPicked ? next.delete(m.id) : next.add(m.id));
      return next;
    });
  };

  const selectAllPickable = () => {
    if (picked.size === pickable.length && pickable.length > 0) {
      setPicked(new Set());
    } else {
      setPicked(new Set(pickable.map((m) => m.id)));
    }
  };

  const handleConfirm = () => {
    const selected = allModels.filter((m) => picked.has(m.id));
    onConfirm(selected);
  };

  return (
    <DialogOverlay onClose={onClose} wide>
      {/* Header */}
      <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
        <div>
          <h3 className="text-base font-semibold text-gray-900">从 API 获取模型</h3>
          <p className="text-xs text-gray-400 mt-0.5">
            {loading ? '正在加载...' : `共 ${allModels.length} 个模型（${grouped.length} 个分组），${existingModelIds.size} 个已添加`}
          </p>
        </div>
        <button onClick={onClose} className="p-1.5 text-gray-400 hover:text-gray-600 cursor-pointer rounded-lg hover:bg-gray-100">
          <X size={18} />
        </button>
      </div>

      {/* Search bar */}
      {!loading && allModels.length > 0 && (
        <div className="px-5 py-3 border-b border-gray-100">
          <div className="relative">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
              placeholder="搜索模型..."
              className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400" />
          </div>
        </div>
      )}

      {/* Body */}
      <div className="px-5 py-3 max-h-[400px] overflow-y-auto">
        {loading && (
          <div className="flex items-center justify-center py-12 text-gray-400 gap-2">
            <Loader2 size={20} className="animate-spin" />
            <span className="text-sm">正在从 API 获取模型列表...</span>
          </div>
        )}

        {error && (
          <div className="bg-red-50 text-red-600 text-sm p-4 rounded-lg border border-red-100 text-center">
            <XCircle size={20} className="mx-auto mb-2 text-red-400" />
            <p className="font-medium">获取失败</p>
            <p className="text-xs mt-1 text-red-500">{error}</p>
          </div>
        )}

        {!loading && !error && filtered.length === 0 && (
          <div className="text-center py-10 text-gray-400">
            <p className="text-sm">{search ? '没有匹配的模型' : '没有发现任何模型'}</p>
          </div>
        )}

        {!loading && !error && grouped.length > 0 && (
          <div className="space-y-2">
            {grouped.map(([groupName, models]) => {
              const isCollapsed = collapsedGroups.has(groupName);
              const groupPickable = models.filter((m) => !existingModelIds.has(m.id));
              const allGroupPicked = groupPickable.length > 0 && groupPickable.every((m) => picked.has(m.id));
              const someGroupPicked = groupPickable.some((m) => picked.has(m.id));
              const existingCount = models.length - groupPickable.length;

              return (
                <div key={groupName} className="border border-gray-200 rounded-lg overflow-hidden">
                  {/* Group header */}
                  <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
                    onClick={() => toggleGroup(groupName)}>
                    <ChevronDown size={14} className={`text-gray-400 transition-transform shrink-0 ${isCollapsed ? '-rotate-90' : ''}`} />
                    <span className="text-xs font-semibold text-gray-700 flex-1">{groupName}</span>
                    <span className="text-[10px] text-gray-400">{models.length} 个</span>
                    {existingCount > 0 && (
                      <span className="text-[10px] px-1.5 py-0.5 bg-green-50 text-green-600 rounded font-medium">{existingCount} 已添加</span>
                    )}
                    {groupPickable.length > 0 && (
                      <button onClick={(e) => { e.stopPropagation(); toggleGroupSelect(models); }}
                        className={`text-[10px] px-1.5 py-0.5 rounded font-medium cursor-pointer transition-colors ${
                          allGroupPicked
                            ? 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                            : someGroupPicked
                              ? 'bg-blue-50 text-blue-500 hover:bg-blue-100'
                              : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                        }`}>
                        {allGroupPicked ? '取消' : '全选'}
                      </button>
                    )}
                  </div>

                  {/* Group models */}
                  {!isCollapsed && (
                    <div className="divide-y divide-gray-100">
                      {models.map((m) => {
                        const isExisting = existingModelIds.has(m.id);
                        const isChecked = picked.has(m.id);
                        return (
                          <label key={m.id}
                            onClick={(e) => { e.preventDefault(); toggleOne(m.id); }}
                            className={`flex items-center gap-3 px-3 py-2 cursor-pointer transition-colors ${
                              isExisting
                                ? 'opacity-50 cursor-not-allowed bg-white'
                                : isChecked
                                  ? 'bg-blue-50/50'
                                  : 'bg-white hover:bg-gray-50'
                            }`}>
                            <input type="checkbox"
                              checked={isExisting || isChecked}
                              disabled={isExisting}
                              readOnly
                              className="w-3.5 h-3.5 rounded border-gray-300 text-blue-500 focus:ring-blue-400 shrink-0 cursor-pointer disabled:cursor-not-allowed" />
                            <span className="text-[13px] font-mono text-gray-700 truncate flex-1">{m.id}</span>
                            {m.name && m.name !== m.id && (
                              <span className="text-[11px] text-gray-400 truncate max-w-[120px]">{m.name}</span>
                            )}
                            {isExisting && (
                              <span className="text-[10px] px-1.5 py-0.5 bg-green-50 text-green-600 rounded font-medium shrink-0">已添加</span>
                            )}
                          </label>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-5 py-3 border-t border-gray-100 flex items-center justify-between bg-gray-50/50">
        <div className="flex items-center gap-3">
          {!loading && pickable.length > 0 && (
            <button onClick={selectAllPickable}
              className="text-xs text-blue-500 hover:underline cursor-pointer font-medium">
              {picked.size === pickable.length ? '取消全选' : `全选可添加 (${pickable.length})`}
            </button>
          )}
        </div>
        <div className="flex gap-2">
          <button onClick={onClose}
            className="px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
            取消
          </button>
          <button onClick={handleConfirm}
            disabled={picked.size === 0}
            className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer transition-colors disabled:opacity-50 font-medium">
            添加选中的 {picked.size > 0 ? picked.size : ''} 个模型
          </button>
        </div>
      </div>
    </DialogOverlay>
  );
}
