// ============================================================
// SettingsPage — 设置主页（一级页面）
// 参考 AetherLink 设置页面，分类卡片式导航
// ============================================================

import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Zap, Volume2, ChevronRight, Info } from 'lucide-react';

interface SettingsCategory {
  id: string;
  path: string;
  label: string;
  desc: string;
  icon: React.ReactNode;
  iconBg: string;
}

const categories: SettingsCategory[] = [
  {
    id: 'ai',
    path: '/settings/ai',
    label: 'AI 模型配置',
    desc: '管理 AI 供应商、API Key、模型列表',
    icon: <Zap size={20} />,
    iconBg: 'bg-purple-100 text-purple-600',
  },
  {
    id: 'tts',
    path: '/settings/tts',
    label: '语音合成 (TTS)',
    desc: '配置语音朗读的引擎、音色和参数',
    icon: <Volume2 size={20} />,
    iconBg: 'bg-blue-100 text-blue-600',
  },
];

export function SettingsPage() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <button
          onClick={() => navigate('/')}
          className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-bold text-gray-900">设置</h1>
      </div>

      {/* Category List */}
      <div className="space-y-3">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => navigate(cat.path)}
            className="w-full flex items-center gap-4 px-5 py-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 cursor-pointer transition-all text-left group"
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${cat.iconBg}`}>
              {cat.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-900">{cat.label}</p>
              <p className="text-sm text-gray-500 mt-0.5">{cat.desc}</p>
            </div>
            <ChevronRight size={20} className="text-gray-300 group-hover:text-gray-500 transition-colors shrink-0" />
          </button>
        ))}
      </div>

      {/* App Info */}
      <div className="mt-10 flex items-center gap-2 text-xs text-gray-400">
        <Info size={14} />
        <span>StudyGoGoGo v0.1.0 · Tauri + React + AI SDK</span>
      </div>
    </div>
  );
}
