// ============================================================
// ModelSelectorDialog — 模型选择对话框
// 按供应商分组展示所有已启用的模型，点击切换
// ============================================================

import { useState, useEffect, useCallback } from 'react';
import { X, Check, Cpu, ChevronDown, ChevronRight, Search } from 'lucide-react';
import { providerRegistry } from '@/lib/ai';
import type { AIProvider } from '@/lib/ai';
import type { SelectedModel } from '../useChatPage';

interface ModelSelectorDialogProps {
  open: boolean;
  onClose: () => void;
  selectedModel: SelectedModel | null;
  onSelect: (model: SelectedModel) => void;
}

export function ModelSelectorDialog({
  open, onClose, selectedModel, onSelect,
}: ModelSelectorDialogProps) {
  const [providers, setProviders] = useState<AIProvider[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  // 加载已启用的供应商
  useEffect(() => {
    if (!open) return;
    setLoading(true);
    (async () => {
      await providerRegistry.initFromPresets();
      const enabled = await providerRegistry.getEnabled();
      setProviders(enabled.filter((p) => p.models.length > 0));
      // 默认展开所有供应商
      setExpandedIds(new Set(enabled.map((p) => p.id)));
      setLoading(false);
    })();
  }, [open]);

  const toggleExpand = useCallback((id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  const handleSelect = useCallback((provider: AIProvider, modelId: string, modelName: string) => {
    onSelect({
      providerId: provider.id,
      providerName: provider.name,
      modelId,
      modelName,
    });
    onClose();
  }, [onSelect, onClose]);

  // ESC 关闭
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, onClose]);

  if (!open) return null;

  const searchLower = search.toLowerCase().trim();

  return (
    // 遮罩层
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}
    >
      {/* 对话框 */}
      <div
        className="bg-white rounded-xl shadow-2xl w-[480px] max-h-[70vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 标题栏 */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <Cpu size={18} className="text-blue-500" />
            <h2 className="text-sm font-semibold text-gray-800">切换模型</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* 搜索框 */}
        <div className="px-4 pt-3 pb-2">
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="搜索模型..."
              className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg
                focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              autoFocus
            />
          </div>
        </div>

        {/* 模型列表 */}
        <div className="flex-1 overflow-y-auto px-4 pb-4">
          {loading ? (
            <div className="text-center text-sm text-gray-400 py-8">加载中...</div>
          ) : providers.length === 0 ? (
            <div className="text-center text-sm text-gray-400 py-8">
              暂无可用供应商，请先在设置中启用并配置 API Key
            </div>
          ) : (
            providers.map((provider) => {
              const filteredModels = searchLower
                ? provider.models.filter(
                    (m) => m.name.toLowerCase().includes(searchLower) || m.id.toLowerCase().includes(searchLower),
                  )
                : provider.models;

              if (filteredModels.length === 0) return null;
              const expanded = expandedIds.has(provider.id);

              return (
                <div key={provider.id} className="mt-2">
                  {/* 供应商标题 */}
                  <button
                    onClick={() => toggleExpand(provider.id)}
                    className="w-full flex items-center gap-2 px-2 py-1.5 text-xs font-medium text-gray-500
                      hover:text-gray-700 cursor-pointer transition-colors"
                  >
                    {expanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                    {provider.icon && <span className="text-sm">{provider.icon}</span>}
                    <span className="uppercase tracking-wider">{provider.name}</span>
                    <span className="text-gray-300 font-normal">({filteredModels.length})</span>
                  </button>

                  {/* 模型列表 */}
                  {expanded && (
                    <div className="space-y-0.5 ml-1">
                      {filteredModels.map((model) => {
                        const isSelected =
                          selectedModel?.providerId === provider.id && selectedModel?.modelId === model.id;

                        return (
                          <button
                            key={model.id}
                            onClick={() => handleSelect(provider, model.id, model.name)}
                            className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left text-[13px]
                              cursor-pointer transition-colors
                              ${isSelected
                                ? 'bg-blue-50 text-blue-700 border border-blue-200'
                                : 'text-gray-700 hover:bg-gray-50 border border-transparent'
                              }
                            `}
                          >
                            <span className="flex-1 truncate">{model.name}</span>
                            {model.isReasoning && (
                              <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-50 text-amber-600 shrink-0">
                                推理
                              </span>
                            )}
                            {isSelected && <Check size={14} className="text-blue-500 shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* 底部当前选择提示 */}
        {selectedModel && (
          <div className="px-5 py-3 border-t border-gray-100 bg-gray-50/50">
            <div className="text-xs text-gray-400">
              当前：<span className="text-gray-600 font-medium">{selectedModel.providerName}</span>
              {' / '}
              <span className="text-gray-600 font-medium">{selectedModel.modelName}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
