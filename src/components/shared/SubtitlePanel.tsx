import { useState } from 'react';
import { X, Pause, Play } from 'lucide-react';

import { useTTS } from '@/hooks/useTTS';

/**
 * 底部单行字幕条：像视频字幕一样，只显示当前句
 * 点击文字区域切换 暂停/继续，右侧关闭按钮
 */
export function SubtitlePanel() {
  const { isPlaying, isPaused, sentences, currentSentenceIndex, stop, pause, resume } = useTTS();
  const [hidden, setHidden] = useState(false);

  // Reset hidden state when new playback starts
  const [lastPlaying, setLastPlaying] = useState(false);
  if (isPlaying && !lastPlaying) setHidden(false);
  if (isPlaying !== lastPlaying) setLastPlaying(isPlaying);

  if (!isPlaying || sentences.length === 0 || hidden) return null;

  const currentText = sentences[currentSentenceIndex] || '';
  const progress = sentences.length > 0 ? ((currentSentenceIndex + 1) / sentences.length) * 100 : 0;

  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-[90vw] md:max-w-2xl"
      style={{ paddingBottom: 'var(--sab, 0px)' }}
    >
      {/* Single-line subtitle */}
      <div className="relative bg-black/75 backdrop-blur-sm rounded-full px-5 py-2.5 shadow-lg flex items-center gap-3">
        {/* Pause/Play toggle */}
        <button
          type="button"
          onClick={() => (isPaused ? resume() : pause())}
          className="shrink-0 text-white/60 hover:text-white transition-colors cursor-pointer"
          title={isPaused ? '继续' : '暂停'}
        >
          {isPaused ? <Play size={14} /> : <Pause size={14} />}
        </button>

        {/* Current sentence */}
        <span className="text-white text-sm leading-snug select-none truncate">
          {currentText}
        </span>

        {/* Counter */}
        <span className="shrink-0 text-white/30 text-xs tabular-nums">
          {currentSentenceIndex + 1}/{sentences.length}
        </span>

        {/* Close */}
        <button
          type="button"
          onClick={() => { stop(); setHidden(true); }}
          className="shrink-0 text-white/40 hover:text-white transition-colors cursor-pointer"
          title="关闭"
        >
          <X size={14} />
        </button>

        {/* Progress bar at bottom */}
        <div className="absolute bottom-0 left-5 right-5 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-400 transition-all duration-300 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
