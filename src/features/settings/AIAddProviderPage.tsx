// ============================================================
// AIAddProviderPage — 添加供应商（三级页面）
// 参考 AetherLink AddProvider.tsx 设计
// 支持从预置列表选择或自定义 OpenAI 兼容供应商
// ============================================================

import { useState } from 'react';
import { ArrowLeft, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { providerRegistry, PRESET_PROVIDERS } from '@/lib/ai';
import type { AIProvider } from '@/lib/ai';

export function AIAddProviderPage() {
  const nav = useNavigate();
  const [customName, setCustomName] = useState('');
  const [customHost, setCustomHost] = useState('');
  const [existingIds, setExistingIds] = useState<Set<string>>(new Set());
  const [loaded, setLoaded] = useState(false);

  // 加载已有供应商 ID，用于过滤预置列表
  if (!loaded) {
    providerRegistry.getAll().then((all) => {
      setExistingIds(new Set(all.map((p) => p.id)));
      setLoaded(true);
    });
  }

  const availablePresets = PRESET_PROVIDERS.filter((p) => !existingIds.has(p.id));

  // 添加预置供应商
  const addPreset = async (presetId: string) => {
    const preset = PRESET_PROVIDERS.find((p) => p.id === presetId);
    if (!preset) return;
    const newProvider: AIProvider = {
      id: preset.id,
      name: preset.name,
      type: preset.type,
      apiKey: '',
      apiHost: preset.apiHost,
      models: [],
      enabled: true,
      isSystem: true,
      icon: preset.icon,
    };
    await providerRegistry.upsert(newProvider);
    // 添加后直接跳转到该供应商的详情配置页
    nav(`/settings/ai/provider/${newProvider.id}`, { replace: true });
  };

  // 添加自定义供应商
  const addCustom = async () => {
    const id = `custom-${Date.now()}`;
    const newProvider: AIProvider = {
      id,
      name: customName.trim() || '自定义供应商',
      type: 'openai',
      apiKey: '',
      apiHost: customHost.trim(),
      models: [],
      enabled: true,
      icon: '🔧',
    };
    await providerRegistry.upsert(newProvider);
    nav(`/settings/ai/provider/${id}`, { replace: true });
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button onClick={() => nav('/settings/ai')}
          className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-bold text-gray-900">添加供应商</h1>
      </div>

      {/* === 预置供应商列表 === */}
      <section className="bg-white rounded-xl border border-gray-200 shadow-sm mb-4 overflow-hidden">
        <div className="px-5 py-3 bg-gray-50/80 border-b border-gray-100">
          <h2 className="text-sm font-semibold text-gray-700">预置供应商</h2>
          <p className="text-xs text-gray-400 mt-0.5">选择一个快速添加，之后可在详情页配置 API Key</p>
        </div>
        <div className="p-4">
          {availablePresets.length > 0 ? (
            <div className="grid grid-cols-2 gap-2.5">
              {availablePresets.map((preset) => (
                <button key={preset.id} onClick={() => addPreset(preset.id)}
                  className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl hover:bg-blue-50 hover:border-blue-200 cursor-pointer transition-all text-left border border-transparent group">
                  <span className="text-2xl shrink-0">{preset.icon}</span>
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 group-hover:text-blue-600 text-sm">{preset.name}</p>
                    <p className="text-[11px] text-gray-400 truncate mt-0.5">{preset.apiHost}</p>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <p className="text-center text-sm text-gray-400 py-4">所有预置供应商均已添加</p>
          )}
        </div>
      </section>

      {/* === 自定义供应商 === */}
      <section className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-5 py-3 bg-gray-50/80 border-b border-gray-100">
          <h2 className="text-sm font-semibold text-gray-700">自定义供应商</h2>
          <p className="text-xs text-gray-400 mt-0.5">添加任意 OpenAI 兼容的 API 服务</p>
        </div>
        <div className="px-5 py-4 space-y-3">
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5">供应商名称</label>
            <input type="text" value={customName} onChange={(e) => setCustomName(e.target.value)}
              placeholder="例如：My API Service"
              className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5">API 地址（可选，稍后再填）</label>
            <input type="text" value={customHost} onChange={(e) => setCustomHost(e.target.value)}
              placeholder="https://api.example.com"
              className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 font-mono" />
          </div>
          <div className="pt-2 flex gap-2">
            <button onClick={addCustom}
              className="flex items-center gap-1.5 px-5 py-2.5 text-sm bg-purple-500 text-white rounded-lg hover:bg-purple-600 cursor-pointer transition-colors font-medium shadow-sm">
              <Plus size={15} /> 创建供应商
            </button>
            <button onClick={() => nav('/settings/ai')}
              className="px-5 py-2.5 text-sm bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 cursor-pointer transition-colors">
              取消
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
