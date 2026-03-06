import { storage } from '@/lib/storage';

import { AudioPlayer } from './audio-player';
import { synthesize } from './engine';

import type { TTSConfig, TTSPlaybackState, TTSEvent, TTSEventHandler } from './types';
import { DEFAULT_TTS_CONFIG } from './types';

// ============================================================
// TTS Service - 统一对外接口（单例）
// ============================================================

class TTSService {
  private config: TTSConfig = { ...DEFAULT_TTS_CONFIG };
  private player = new AudioPlayer();
  private listeners: TTSEventHandler[] = [];
  private _state: TTSPlaybackState = {
    isPlaying: false,
    isPaused: false,
    error: null,
  };
  private configLoaded = false;

  constructor() {
    this.player.onEnd(() => {
      this._state = { isPlaying: false, isPaused: false, error: null };
      this.emit({ type: 'end' });
    });
    this.player.onError((err) => {
      this._state = { isPlaying: false, isPaused: false, error: err.message };
      this.emit({ type: 'error', error: err.message });
    });
  }

  /** 从 IndexedDB 加载配置 */
  async loadConfig(): Promise<void> {
    if (this.configLoaded) return;
    const saved = await storage.settings.getTyped<TTSConfig>('tts_config', DEFAULT_TTS_CONFIG);
    this.config = saved;
    this.configLoaded = true;
  }

  /** 保存配置到 IndexedDB */
  async saveConfig(config: Partial<TTSConfig>): Promise<void> {
    this.config = { ...this.config, ...config };
    await storage.settings.setTyped('tts_config', this.config);
  }

  /** 获取当前配置 */
  getConfig(): TTSConfig {
    return { ...this.config };
  }

  /** 是否已配置（有 API Key） */
  get isConfigured(): boolean {
    return !!this.config.appId && !!this.config.accessToken;
  }

  /** 播放文本 */
  async speak(text: string): Promise<boolean> {
    await this.loadConfig();

    if (!this.isConfigured) {
      this._state = { isPlaying: false, isPaused: false, error: '请先配置 TTS API' };
      this.emit({ type: 'error', error: '请先配置 TTS API' });
      return false;
    }

    // 停止当前播放
    this.stop();

    // 预处理文本：去掉 LaTeX 命令，保留可读部分
    const cleaned = preprocessMathText(text);
    if (!cleaned.trim()) return false;

    this._state = { isPlaying: true, isPaused: false, error: null };
    this.emit({ type: 'start' });

    const result = await synthesize(cleaned, this.config);

    if (!result.success || !result.audioData) {
      this._state = { isPlaying: false, isPaused: false, error: result.error || '合成失败' };
      this.emit({ type: 'error', error: result.error });
      return false;
    }

    this.player.play(result.audioData, result.mimeType!);
    return true;
  }

  /** 暂停 */
  pause(): void {
    if (this._state.isPlaying) {
      this.player.pause();
      this._state.isPaused = true;
      this.emit({ type: 'pause' });
    }
  }

  /** 恢复 */
  resume(): void {
    if (this._state.isPaused) {
      this.player.resume();
      this._state.isPaused = false;
      this.emit({ type: 'resume' });
    }
  }

  /** 停止 */
  stop(): void {
    this.player.stop();
    this._state = { isPlaying: false, isPaused: false, error: null };
    this.emit({ type: 'end' });
  }

  /** 播放状态 */
  get state(): TTSPlaybackState {
    return { ...this._state };
  }

  /** 监听事件 */
  on(handler: TTSEventHandler): () => void {
    this.listeners.push(handler);
    return () => {
      this.listeners = this.listeners.filter((h) => h !== handler);
    };
  }

  private emit(event: TTSEvent): void {
    this.listeners.forEach((h) => h(event));
  }
}

/** 预处理数学文本：将 LaTeX 转换为可朗读的文本 */
function preprocessMathText(text: string): string {
  return text
    .replace(/\$\$(.*?)\$\$/g, ' $1 ')
    .replace(/\$(.*?)\$/g, ' $1 ')
    .replace(/\\frac\{([^}]*)\}\{([^}]*)\}/g, '$1 分之 $2')
    .replace(/\\sqrt\{([^}]*)\}/g, '根号 $1')
    .replace(/\\times/g, '乘以')
    .replace(/\\div/g, '除以')
    .replace(/\\pm/g, '加减')
    .replace(/\\pi/g, 'π')
    .replace(/\\leq/g, '小于等于')
    .replace(/\\geq/g, '大于等于')
    .replace(/\\neq/g, '不等于')
    .replace(/\\cdot/g, '乘')
    .replace(/\\quad/g, ' ')
    .replace(/\\Rightarrow/g, '推出')
    .replace(/\\bar\{([^}]*)\}/g, '$1 的共轭')
    .replace(/\^{(\d+)}/g, '的$1次方')
    .replace(/\^(\d)/g, '的$1次方')
    .replace(/\\[a-zA-Z]+/g, ' ')
    .replace(/[{}]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// Singleton
export const ttsService = new TTSService();
