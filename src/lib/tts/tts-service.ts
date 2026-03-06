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
    sentences: [],
    currentSentenceIndex: -1,
  };
  private configLoaded = false;
  private sentenceBoundaries: number[] = [];

  constructor() {
    this.player.onEnd(() => {
      this._state = { isPlaying: false, isPaused: false, error: null, sentences: [], currentSentenceIndex: -1 };
      this.emit({ type: 'end' });
    });
    this.player.onError((err) => {
      this._state = { isPlaying: false, isPaused: false, error: err.message, sentences: [], currentSentenceIndex: -1 };
      this.emit({ type: 'error', error: err.message });
    });
    this.player.onProgress((currentTime, duration) => {
      if (duration <= 0 || this.sentenceBoundaries.length === 0) return;
      const progress = currentTime / duration;
      let idx = 0;
      for (let i = 0; i < this.sentenceBoundaries.length; i++) {
        if (progress >= this.sentenceBoundaries[i]) idx = i;
      }
      if (idx !== this._state.currentSentenceIndex) {
        this._state = { ...this._state, currentSentenceIndex: idx };
        this.emit({ type: 'subtitle' });
      }
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
      this._state = { isPlaying: false, isPaused: false, error: '请先配置 TTS API', sentences: [], currentSentenceIndex: -1 };
      this.emit({ type: 'error', error: '请先配置 TTS API' });
      return false;
    }

    // 停止当前播放
    this.stop();

    // 预处理文本：去掉 LaTeX 命令，保留可读部分
    const cleaned = preprocessMathText(text);
    if (!cleaned.trim()) return false;

    // Split text into sentences for subtitle display
    const sentences = splitSentences(text);
    this.sentenceBoundaries = computeBoundaries(sentences);

    this._state = { isPlaying: true, isPaused: false, error: null, sentences, currentSentenceIndex: 0 };
    this.emit({ type: 'start' });

    const result = await synthesize(cleaned, this.config);

    if (!result.success || !result.audioData) {
      this._state = { isPlaying: false, isPaused: false, error: result.error || '合成失败', sentences: [], currentSentenceIndex: -1 };
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
    this._state = { isPlaying: false, isPaused: false, error: null, sentences: [], currentSentenceIndex: -1 };
    this.sentenceBoundaries = [];
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

/** 将文本拆分为字幕句子（按句号、问号、感叹号分割） */
function splitSentences(text: string): string[] {
  // Split on sentence-ending punctuation, keep the punctuation with the sentence
  const raw = text.split(/(?<=[。！？])/g).map((s) => s.trim()).filter(Boolean);
  // If any segment is too long (>50 chars), further split on commas
  const result: string[] = [];
  for (const seg of raw) {
    if (seg.length > 50) {
      const parts = seg.split(/(?<=[，：；])/g).map((s) => s.trim()).filter(Boolean);
      result.push(...parts);
    } else {
      result.push(seg);
    }
  }
  return result.length > 0 ? result : [text];
}

/** 根据字符数比例估算每个句子的时间起点（0~1） */
function computeBoundaries(sentences: string[]): number[] {
  const totalChars = sentences.reduce((sum, s) => sum + s.length, 0);
  if (totalChars === 0) return sentences.map(() => 0);
  const boundaries: number[] = [];
  let cumulative = 0;
  for (const s of sentences) {
    boundaries.push(cumulative / totalChars);
    cumulative += s.length;
  }
  return boundaries;
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
