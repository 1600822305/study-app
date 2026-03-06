// ============================================================
// TTS Service Types
// ============================================================

export interface TTSConfig {
  enabled: boolean;
  appId: string;
  accessToken: string;
  voiceType: string;
  voiceName: string;
  emotion: string;
  speed: number;
  volume: number;
  pitch: number;
  encoding: 'mp3' | 'ogg_opus' | 'wav';
}

export interface TTSSynthesisResult {
  success: boolean;
  audioData?: ArrayBuffer;
  mimeType?: string;
  error?: string;
}

export interface TTSPlaybackState {
  isPlaying: boolean;
  isPaused: boolean;
  error: string | null;
  sentences: string[];
  currentSentenceIndex: number;
}

export type TTSEventType = 'start' | 'end' | 'error' | 'pause' | 'resume' | 'subtitle';

export interface TTSEvent {
  type: TTSEventType;
  error?: string;
}

export type TTSEventHandler = (event: TTSEvent) => void;

/** 火山引擎音色定义 */
export interface VoiceOption {
  label: string;
  value: string;
  category: string;
}

export const DEFAULT_TTS_CONFIG: TTSConfig = {
  enabled: false,
  appId: '',
  accessToken: '',
  voiceType: 'BV001_streaming',
  voiceName: '通用女声',
  emotion: '',
  speed: 1.0,
  volume: 1.0,
  pitch: 1.0,
  encoding: 'mp3',
};
