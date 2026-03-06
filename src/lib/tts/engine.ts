import { adaptiveFetch } from '@/lib/env';

import type { TTSConfig, TTSSynthesisResult } from './types';

// ============================================================
// 火山引擎 TTS Engine
// ============================================================

const API_URL = 'https://openspeech.bytedance.com/api/v1/tts';

function generateRequestId(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function buildRequestBody(text: string, config: TTSConfig): Record<string, unknown> {
  const body: Record<string, unknown> = {
    app: {
      appid: config.appId,
      token: config.accessToken,
      cluster: 'volcano_tts',
    },
    user: {
      uid: 'studygogogo_user',
    },
    audio: {
      voice_type: config.voiceType,
      encoding: config.encoding || 'mp3',
      speed_ratio: config.speed ?? 1.0,
      volume_ratio: config.volume ?? 1.0,
      pitch_ratio: config.pitch ?? 1.0,
    },
    request: {
      reqid: generateRequestId(),
      text,
      text_type: 'plain',
      operation: 'query',
    },
  };

  if (config.emotion) {
    (body.audio as Record<string, unknown>).emotion = config.emotion;
  }

  return body;
}

function base64ToArrayBuffer(base64: string): ArrayBuffer {
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}

function getMimeType(encoding: string): string {
  switch (encoding) {
    case 'mp3':
      return 'audio/mpeg';
    case 'ogg_opus':
      return 'audio/ogg';
    case 'wav':
      return 'audio/wav';
    default:
      return 'audio/mpeg';
  }
}

const MAX_CHUNK_LENGTH = 250;

/** 将长文本按句子边界拆分为不超过 MAX_CHUNK_LENGTH 的段 */
function splitTextIntoChunks(text: string): string[] {
  if (text.length <= MAX_CHUNK_LENGTH) return [text];

  const sentences = text.split(/(?<=[。！？；\n])/g).filter((s) => s.trim());
  const chunks: string[] = [];
  let current = '';

  for (const sentence of sentences) {
    if (sentence.length > MAX_CHUNK_LENGTH) {
      if (current) { chunks.push(current); current = ''; }
      const parts = sentence.split(/(?<=[，、：])/g).filter((s) => s.trim());
      for (const part of parts) {
        if ((current + part).length > MAX_CHUNK_LENGTH && current) {
          chunks.push(current); current = '';
        }
        current += part;
      }
      if (current) { chunks.push(current); current = ''; }
    } else if ((current + sentence).length > MAX_CHUNK_LENGTH) {
      if (current) chunks.push(current);
      current = sentence;
    } else {
      current += sentence;
    }
  }
  if (current) chunks.push(current);
  return chunks.length > 0 ? chunks : [text];
}

/** 合成单段文本 */
async function synthesizeChunk(text: string, config: TTSConfig): Promise<TTSSynthesisResult> {
  const requestBody = buildRequestBody(text, config);

  const response = await adaptiveFetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer;${config.accessToken}`,
    },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    return { success: false, error: `TTS 请求失败: HTTP ${response.status}` };
  }

  const result = await response.json();

  if (result.code !== 3000) {
    return { success: false, error: `TTS 错误: ${result.message || '未知错误'} (code: ${result.code})` };
  }

  if (!result.data) {
    return { success: false, error: '未收到音频数据' };
  }

  return {
    success: true,
    audioData: base64ToArrayBuffer(result.data),
    mimeType: getMimeType(config.encoding),
  };
}

/** 拼接多段音频 ArrayBuffer */
function concatAudioBuffers(buffers: ArrayBuffer[]): ArrayBuffer {
  const totalLength = buffers.reduce((sum, buf) => sum + buf.byteLength, 0);
  const result = new Uint8Array(totalLength);
  let offset = 0;
  for (const buf of buffers) {
    result.set(new Uint8Array(buf), offset);
    offset += buf.byteLength;
  }
  return result.buffer;
}

/** 调用火山引擎 TTS API 合成语音（自动分段） */
export async function synthesize(text: string, config: TTSConfig): Promise<TTSSynthesisResult> {
  if (!config.appId || !config.accessToken) {
    return { success: false, error: 'App ID 或 Access Token 未设置' };
  }

  if (!text.trim()) {
    return { success: false, error: '文本为空' };
  }

  try {
    const chunks = splitTextIntoChunks(text);

    if (chunks.length === 1) {
      return synthesizeChunk(chunks[0], config);
    }

    console.log(`[TTS] 长文本分 ${chunks.length} 段合成`);
    const audioBuffers: ArrayBuffer[] = [];
    let mimeType = getMimeType(config.encoding);

    for (const chunk of chunks) {
      const result = await synthesizeChunk(chunk, config);
      if (!result.success || !result.audioData) {
        return result;
      }
      audioBuffers.push(result.audioData);
      mimeType = result.mimeType || mimeType;
    }

    return {
      success: true,
      audioData: concatAudioBuffers(audioBuffers),
      mimeType,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}
