import { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, Save, Play, Square, Volume2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { ttsService, VOLCANO_VOICES, VOLCANO_EMOTIONS, DEFAULT_TTS_CONFIG } from '@/lib/tts';

import type { TTSConfig } from '@/lib/tts';

export function TTSSettingsPage() {
  const navigate = useNavigate();
  const [config, setConfig] = useState<TTSConfig>({ ...DEFAULT_TTS_CONFIG });
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [testing, setTesting] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('通用');

  useEffect(() => {
    ttsService.loadConfig().then(() => {
      setConfig(ttsService.getConfig());
    });
  }, []);

  const updateField = <K extends keyof TTSConfig>(key: K, value: TTSConfig[K]) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
    setSaved(false);
  };

  const handleSave = useCallback(async () => {
    setSaving(true);
    setError('');
    try {
      await ttsService.saveConfig(config);
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch (e) {
      setError(e instanceof Error ? e.message : '保存失败');
    } finally {
      setSaving(false);
    }
  }, [config]);

  const handleTest = useCallback(async () => {
    if (testing) {
      ttsService.stop();
      setTesting(false);
      return;
    }

    setError('');
    // Save first so engine uses latest config
    await ttsService.saveConfig(config);
    setTesting(true);

    const success = await ttsService.speak('你好，我是你的数学学习助手，很高兴为你服务。');
    if (!success) {
      setError(ttsService.state.error || '测试失败');
    }

    // Wait for playback to end
    const unsub = ttsService.on((event) => {
      if (event.type === 'end' || event.type === 'error') {
        setTesting(false);
        if (event.error) setError(event.error);
        unsub();
      }
    });
  }, [config, testing]);

  // Group voices by category
  const categories = [...new Set(VOLCANO_VOICES.map((v) => v.category))];

  return (
    <div className="px-2">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <Volume2 size={24} className="text-blue-500" />
        <h1 className="text-xl font-bold text-gray-900">语音朗读设置</h1>
      </div>

      <div className="space-y-6">
        {/* API Config */}
        <section className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-base font-semibold text-gray-800 mb-4">火山引擎 TTS API</h2>
          <p className="text-xs text-gray-500 mb-4">
            需要在{' '}
            <a
              href="https://console.volcengine.com/speech/service/8"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 underline"
            >
              火山引擎控制台
            </a>{' '}
            创建应用获取 App ID 和 Access Token（有免费额度）
          </p>

          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">App ID</label>
              <input
                type="text"
                value={config.appId}
                onChange={(e) => updateField('appId', e.target.value)}
                placeholder="输入 App ID"
                className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Access Token</label>
              <input
                type="password"
                value={config.accessToken}
                onChange={(e) => updateField('accessToken', e.target.value)}
                placeholder="输入 Access Token"
                className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-blue-400"
              />
            </div>
          </div>
        </section>

        {/* Voice Selection - Tab Layout */}
        <section className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-base font-semibold text-gray-800 mb-4">
            音色选择
            {config.voiceName && (
              <span className="ml-2 text-sm font-normal text-blue-500">当前：{config.voiceName}</span>
            )}
          </h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1 mb-4 border-b border-gray-200 pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-3 py-1.5 text-xs rounded-t-lg cursor-pointer transition-colors ${
                  activeTab === cat
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-500 hover:text-gray-800 hover:bg-gray-100'
                }`}
              >
                {cat}
                {VOLCANO_VOICES.some((v) => v.category === cat && v.value === config.voiceType) && (
                  <span className="ml-1">·</span>
                )}
              </button>
            ))}
          </div>

          {/* Voice Buttons for Active Tab */}
          <div className="flex flex-wrap gap-2">
            {VOLCANO_VOICES.filter((v) => v.category === activeTab).map((voice) => (
              <button
                key={voice.value}
                onClick={() => {
                  updateField('voiceType', voice.value);
                  updateField('voiceName', voice.label);
                }}
                className={`px-3 py-1.5 text-sm rounded-lg border cursor-pointer transition-colors ${
                  config.voiceType === voice.value
                    ? 'bg-blue-500 text-white border-blue-500'
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                }`}
              >
                {voice.label}
              </button>
            ))}
          </div>
        </section>

        {/* Emotion Selection */}
        <section className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-base font-semibold text-gray-800 mb-4">情感风格（可选）</h2>
          <p className="text-xs text-gray-500 mb-3">部分音色支持情感控制，不需要可留空</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => updateField('emotion', '')}
              className={`px-3 py-1.5 text-sm rounded-lg border cursor-pointer transition-colors ${
                !config.emotion
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
              }`}
            >
              默认
            </button>
            {Object.entries(VOLCANO_EMOTIONS).map(([key, label]) => (
              <button
                key={key}
                onClick={() => updateField('emotion', key)}
                className={`px-3 py-1.5 text-sm rounded-lg border cursor-pointer transition-colors ${
                  config.emotion === key
                    ? 'bg-blue-500 text-white border-blue-500'
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </section>

        {/* Voice Params */}
        <section className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-base font-semibold text-gray-800 mb-4">语音参数</h2>

          <div className="space-y-4">
            <div>
              <label className="flex justify-between text-sm text-gray-700 mb-1">
                <span>语速</span>
                <span className="text-gray-400">{config.speed.toFixed(1)}</span>
              </label>
              <input
                type="range"
                min="0.5"
                max="2.0"
                step="0.1"
                value={config.speed}
                onChange={(e) => updateField('speed', parseFloat(e.target.value))}
                className="w-full"
              />
            </div>
            <div>
              <label className="flex justify-between text-sm text-gray-700 mb-1">
                <span>音量</span>
                <span className="text-gray-400">{config.volume.toFixed(1)}</span>
              </label>
              <input
                type="range"
                min="0.5"
                max="2.0"
                step="0.1"
                value={config.volume}
                onChange={(e) => updateField('volume', parseFloat(e.target.value))}
                className="w-full"
              />
            </div>
            <div>
              <label className="flex justify-between text-sm text-gray-700 mb-1">
                <span>音调</span>
                <span className="text-gray-400">{config.pitch.toFixed(1)}</span>
              </label>
              <input
                type="range"
                min="0.5"
                max="2.0"
                step="0.1"
                value={config.pitch}
                onChange={(e) => updateField('pitch', parseFloat(e.target.value))}
                className="w-full"
              />
            </div>
          </div>
        </section>

        {/* Error */}
        {error && (
          <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg border border-red-200">
            {error}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 px-5 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer transition-colors disabled:opacity-50"
          >
            <Save size={16} />
            {saving ? '保存中...' : saved ? '已保存 ✓' : '保存设置'}
          </button>
          <button
            onClick={handleTest}
            disabled={!config.appId || !config.accessToken}
            className="flex items-center gap-2 px-5 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 cursor-pointer transition-colors disabled:opacity-50"
          >
            {testing ? <Square size={16} /> : <Play size={16} />}
            {testing ? '停止' : '测试语音'}
          </button>
        </div>
      </div>
    </div>
  );
}
