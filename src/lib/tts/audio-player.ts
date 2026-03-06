// ============================================================
// Audio Player - 管理音频播放生命周期
// ============================================================

type AudioEventHandler = () => void;
type AudioErrorHandler = (error: Error) => void;

export class AudioPlayer {
  private audio: HTMLAudioElement | null = null;
  private objectUrl: string | null = null;
  private onEndCallback: AudioEventHandler | null = null;
  private onErrorCallback: AudioErrorHandler | null = null;

  /** 播放音频数据 */
  play(audioData: ArrayBuffer, mimeType: string): void {
    this.stop();

    const blob = new Blob([audioData], { type: mimeType });
    this.objectUrl = URL.createObjectURL(blob);
    this.audio = new Audio(this.objectUrl);

    this.audio.onended = () => {
      this.cleanup();
      this.onEndCallback?.();
    };

    this.audio.onerror = () => {
      const error = new Error('音频播放失败');
      this.cleanup();
      this.onErrorCallback?.(error);
    };

    this.audio.play().catch((err) => {
      this.cleanup();
      this.onErrorCallback?.(err instanceof Error ? err : new Error(String(err)));
    });
  }

  /** 暂停 */
  pause(): void {
    this.audio?.pause();
  }

  /** 恢复播放 */
  resume(): void {
    this.audio?.play();
  }

  /** 停止并释放资源 */
  stop(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.audio.onended = null;
      this.audio.onerror = null;
    }
    this.cleanup();
  }

  /** 是否正在播放 */
  get isPlaying(): boolean {
    return this.audio !== null && !this.audio.paused && !this.audio.ended;
  }

  onEnd(handler: AudioEventHandler): void {
    this.onEndCallback = handler;
  }

  onError(handler: AudioErrorHandler): void {
    this.onErrorCallback = handler;
  }

  private cleanup(): void {
    if (this.objectUrl) {
      URL.revokeObjectURL(this.objectUrl);
      this.objectUrl = null;
    }
    this.audio = null;
  }
}
