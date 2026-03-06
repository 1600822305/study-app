import { useEffect, useRef } from 'react';
import { X, Pause, Play } from 'lucide-react';

import { useTTS } from '@/hooks/useTTS';

/**
 * 底部浮动字幕面板：TTS 播放时显示，逐句高亮跟随
 */
export function SubtitlePanel() {
  const { isPlaying, isPaused, sentences, currentSentenceIndex, stop, pause, resume } = useTTS();
  const activeRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to current sentence
  useEffect(() => {
    if (activeRef.current && containerRef.current) {
      activeRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      });
    }
  }, [currentSentenceIndex]);

  if (!isPlaying || sentences.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none">
      <div className="max-w-2xl mx-auto px-4 pb-4 pointer-events-auto">
        <div className="bg-gray-900/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden">
          {/* Controls bar */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700/50">
            <div className="flex items-center gap-2 text-gray-400 text-xs">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>字幕</span>
              <span className="text-gray-600">
                {currentSentenceIndex + 1}/{sentences.length}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => (isPaused ? resume() : pause())}
                className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700/50 transition-colors"
                title={isPaused ? '继续' : '暂停'}
              >
                {isPaused ? <Play size={14} /> : <Pause size={14} />}
              </button>
              <button
                type="button"
                onClick={stop}
                className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700/50 transition-colors"
                title="关闭"
              >
                <X size={14} />
              </button>
            </div>
          </div>

          {/* Subtitle text */}
          <div
            ref={containerRef}
            className="px-4 py-3 max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700"
          >
            <p className="text-sm leading-relaxed">
              {sentences.map((sentence, i) => (
                <span
                  key={i}
                  ref={i === currentSentenceIndex ? activeRef : undefined}
                  className={`transition-colors duration-300 ${
                    i === currentSentenceIndex
                      ? 'text-white font-medium'
                      : i < currentSentenceIndex
                        ? 'text-gray-500'
                        : 'text-gray-600'
                  }`}
                >
                  {sentence}
                </span>
              ))}
            </p>
          </div>

          {/* Progress bar */}
          <div className="h-0.5 bg-gray-800">
            <div
              className="h-full bg-blue-500 transition-all duration-300"
              style={{ width: `${sentences.length > 0 ? ((currentSentenceIndex + 1) / sentences.length) * 100 : 0}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
