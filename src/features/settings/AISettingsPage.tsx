import { useState, useEffect, useCallback } from 'react';
import {
  ArrowLeft, Plus, ChevronRight, Zap, Settings, Trash2, X, CheckSquare,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { providerRegistry } from '@/lib/ai';
import type { AIProvider } from '@/lib/ai';

// ============================================================
// AISettingsPage — 供应商列表（二级页面）
// 参考 AetherLink DefaultModelSettings
// 功能：列表展示、启用/禁用、快速编辑、单个/批量删除
// 点击供应商 → 导航到 /settings/ai/provider/:id（三级页面）
// ============================================================

export function AISettingsPage() {
  const navigate = useNavigate();
  const [providers, setProviders] = useState<AIProvider[]>([]);

  // 编辑弹窗
  const [editOpen, setEditOpen] = useState(false);
  const [editTarget, setEditTarget] = useState<AIProvider | null>(null);
  const [editName, setEditName] = useState('');

  // 批量删除
  const [batchMode, setBatchMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);

  // --- Load ---
  const reload = useCallback(async () => {
    providerRegistry.invalidateCache();
    setProviders(await providerRegistry.getAll());
  }, []);

  useEffect(() => {
    (async () => {
      await providerRegistry.initFromPresets();
      setProviders(await providerRegistry.getAll());
    })();
  }, []);

  // --- Toggle enable/disable ---
  const toggleEnabled = async (id: string) => {
    const p = providers.find((x) => x.id === id);
    if (!p) return;
    const updated = { ...p, enabled: !p.enabled };
    await providerRegistry.upsert(updated);
    setProviders((prev) => prev.map((x) => (x.id === id ? updated : x)));
  };

  // --- Edit provider name ---
  const openEdit = (p: AIProvider, e: React.MouseEvent) => {
    e.stopPropagation();
    setEditTarget(p);
    setEditName(p.name);
    setEditOpen(true);
  };

  const saveEdit = async () => {
    if (!editTarget || !editName.trim()) return;
    const updated = { ...editTarget, name: editName.trim() };
    await providerRegistry.upsert(updated);
    setProviders((prev) => prev.map((x) => (x.id === editTarget.id ? updated : x)));
    setEditOpen(false);
    setEditTarget(null);
  };

  // --- Single delete ---
  const deleteSingle = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!window.confirm('确定删除此供应商？')) return;
    await providerRegistry.remove(id);
    await reload();
  };

  // --- Batch delete ---
  const toggleBatchMode = () => {
    setBatchMode(!batchMode);
    setSelectedIds(new Set());
  };

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const selectAll = () => {
    if (selectedIds.size === providers.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(providers.map((p) => p.id)));
    }
  };

  const confirmBatchDelete = async () => {
    for (const id of selectedIds) {
      await providerRegistry.remove(id);
    }
    setSelectedIds(new Set());
    setBatchMode(false);
    setDeleteConfirmOpen(false);
    await reload();
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* ===== Header ===== */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate('/settings')}
            className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
            <ArrowLeft size={20} />
          </button>
          <Zap size={22} className="text-purple-500" />
          <h1 className="text-xl font-bold text-gray-900">AI 模型配置</h1>
        </div>
        <div className="flex items-center gap-2">
          {batchMode ? (
            <>
              <button onClick={toggleBatchMode}
                className="flex items-center gap-1.5 px-3 py-2 text-sm bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 cursor-pointer transition-colors font-medium">
                <X size={15} /> 取消
              </button>
              <button onClick={() => setDeleteConfirmOpen(true)} disabled={selectedIds.size === 0}
                className="flex items-center gap-1.5 px-3 py-2 text-sm bg-red-50 text-red-600 rounded-lg hover:bg-red-100 cursor-pointer transition-colors font-medium disabled:opacity-40 disabled:cursor-not-allowed">
                <Trash2 size={15} /> 删除 ({selectedIds.size})
              </button>
            </>
          ) : (
            <>
              {providers.length > 0 && (
                <button onClick={toggleBatchMode}
                  className="flex items-center gap-1.5 px-3 py-2 text-sm bg-red-50 text-red-600 rounded-lg hover:bg-red-100 cursor-pointer transition-colors font-medium">
                  <Trash2 size={15} /> 批量删除
                </button>
              )}
              <button onClick={() => navigate('/settings/ai/add-provider')}
                className="flex items-center gap-1.5 px-4 py-2 text-sm bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 cursor-pointer transition-colors font-medium">
                <Plus size={16} /> 添加供应商
              </button>
            </>
          )}
        </div>
      </div>

      {/* ===== Provider List Card ===== */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-5 py-3 bg-gray-50/80 border-b border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-gray-700">供应商列表</p>
            <p className="text-xs text-gray-400 mt-0.5">
              {batchMode ? '勾选要删除的供应商' : '点击供应商进入详细配置页面'}
            </p>
          </div>
          {batchMode && providers.length > 0 && (
            <button onClick={selectAll}
              className="text-xs text-blue-500 hover:underline cursor-pointer font-medium">
              {selectedIds.size === providers.length ? '取消全选' : '全选'}
            </button>
          )}
        </div>

        <div className="divide-y divide-gray-100">
          {providers.map((provider) => (
            <div key={provider.id}
              onClick={() => batchMode ? toggleSelect(provider.id) : navigate(`/settings/ai/provider/${provider.id}`)}
              className={`flex items-center gap-3 px-5 py-3.5 cursor-pointer transition-colors group ${
                batchMode && selectedIds.has(provider.id)
                  ? 'bg-red-50/50'
                  : 'hover:bg-gray-50/80'
              }`}
            >
              {/* Checkbox in batch mode */}
              {batchMode && (
                <input type="checkbox" checked={selectedIds.has(provider.id)}
                  onChange={() => toggleSelect(provider.id)}
                  onClick={(e) => e.stopPropagation()}
                  className="w-4 h-4 rounded border-gray-300 text-red-500 focus:ring-red-400 shrink-0 cursor-pointer" />
              )}

              <span className="text-2xl shrink-0">{provider.icon || '🤖'}</span>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900 truncate">{provider.name}</span>
                  {provider.enabled ? (
                    <span className="text-[10px] px-1.5 py-0.5 bg-green-50 text-green-600 rounded font-medium">已启用</span>
                  ) : (
                    <span className="text-[10px] px-1.5 py-0.5 bg-gray-100 text-gray-400 rounded font-medium">已禁用</span>
                  )}
                  {provider.apiKey && (
                    <span className="text-[10px] px-1.5 py-0.5 bg-blue-50 text-blue-500 rounded font-medium">已配置</span>
                  )}
                </div>
                <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-3">
                  <span className="truncate">{provider.apiHost || '未设置 API 地址'}</span>
                  {provider.models.length > 0 && (
                    <span className="shrink-0">{provider.models.length} 个模型</span>
                  )}
                </p>
              </div>

              {/* Action buttons (non-batch mode) */}
              {!batchMode && (
                <div className="flex items-center gap-1 shrink-0">
                  {/* Enable/Disable Toggle */}
                  <button onClick={(e) => { e.stopPropagation(); toggleEnabled(provider.id); }}
                    className={`w-10 h-5 rounded-full transition-colors cursor-pointer relative mr-1 ${provider.enabled ? 'bg-green-500' : 'bg-gray-300'}`}
                    title={provider.enabled ? '点击禁用' : '点击启用'}>
                    <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-all ${provider.enabled ? 'left-[22px]' : 'left-0.5'}`} />
                  </button>

                  {/* Edit button */}
                  <button onClick={(e) => openEdit(provider, e)}
                    className="p-1.5 text-gray-400 hover:text-blue-500 cursor-pointer rounded-lg hover:bg-blue-50 opacity-0 group-hover:opacity-100 transition-all"
                    title="编辑名称">
                    <Settings size={15} />
                  </button>

                  {/* Delete button */}
                  <button onClick={(e) => deleteSingle(provider.id, e)}
                    className="p-1.5 text-gray-400 hover:text-red-500 cursor-pointer rounded-lg hover:bg-red-50 opacity-0 group-hover:opacity-100 transition-all"
                    title="删除">
                    <Trash2 size={15} />
                  </button>

                  <ChevronRight size={18} className="text-gray-300 group-hover:text-gray-500 transition-colors ml-1" />
                </div>
              )}

              {/* Checkbox icon in batch mode */}
              {batchMode && selectedIds.has(provider.id) && (
                <CheckSquare size={18} className="text-red-500 shrink-0" />
              )}
            </div>
          ))}

          {providers.length === 0 && (
            <div className="text-center py-10 text-gray-400">
              <p className="text-sm">暂无供应商</p>
              <p className="text-xs mt-1">点击右上角「添加供应商」开始配置</p>
            </div>
          )}
        </div>
      </div>

      {/* ===== Edit Dialog (modal overlay) ===== */}
      {editOpen && editTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/30" onClick={() => setEditOpen(false)} />
          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-100">
              <h3 className="text-base font-semibold text-gray-900">编辑供应商</h3>
            </div>
            <div className="px-5 py-4 space-y-3">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">供应商名称</label>
                <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)}
                  autoFocus
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400"
                  onKeyDown={(e) => e.key === 'Enter' && saveEdit()} />
              </div>
            </div>
            <div className="px-5 py-3 border-t border-gray-100 flex justify-end gap-2 bg-gray-50/50">
              <button onClick={() => setEditOpen(false)}
                className="px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                取消
              </button>
              <button onClick={saveEdit} disabled={!editName.trim()}
                className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer transition-colors disabled:opacity-50 font-medium">
                保存
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===== Batch Delete Confirm Dialog ===== */}
      {deleteConfirmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/30" onClick={() => setDeleteConfirmOpen(false)} />
          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-sm mx-4 overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-100">
              <h3 className="text-base font-semibold text-red-600">确认批量删除</h3>
            </div>
            <div className="px-5 py-4">
              <p className="text-sm text-gray-700">
                即将删除 <strong>{selectedIds.size}</strong> 个供应商及其所有模型配置，此操作不可撤销。
              </p>
            </div>
            <div className="px-5 py-3 border-t border-gray-100 flex justify-end gap-2 bg-gray-50/50">
              <button onClick={() => setDeleteConfirmOpen(false)}
                className="px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                取消
              </button>
              <button onClick={confirmBatchDelete}
                className="px-4 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 cursor-pointer transition-colors font-medium">
                确认删除
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
