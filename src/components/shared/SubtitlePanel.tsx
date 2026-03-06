import { useEffect, useRef, useState, useCallback } from 'react';
import { X, Pause, Play, Minimize2, Maximize2, GripHorizontal } from 'lucide-react';

import { useTTS } from '@/hooks/useTTS';
import { isMobile as checkMobile } from '@/lib/env';

/**
 * 底部浮动字幕面板
 * - 桌面端：可拖拽移动 + 收缩/展开
 * - 移动端：底部全宽 + 收缩/展开 + 安全区域适配
 */
export function SubtitlePanel() {
  const { isPlaying, isPaused, sentences, currentSentenceIndex, stop, pause, resume } = useTTS();
  const activeRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const [collapsed, setCollapsed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0, px: 0, py: 0 });

  const mobile = checkMobile();

  // Auto-scroll to current sentence
  useEffect(() => {
    if (!collapsed && activeRef.current && containerRef.current) {
      activeRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      });
    }
  }, [currentSentenceIndex, collapsed]);

  // Reset position when panel appears
  useEffect(() => {
    if (isPlaying && sentences.length > 0) {
      setPosition({ x: 0, y: 0 });
      setCollapsed(false);
    }
  }, [isPlaying, sentences.length]);

  // --- Drag handlers (desktop only) ---
  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (mobile) return;
    e.preventDefault();
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY, px: position.x, py: position.y };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }, [mobile, position]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    setPosition({ x: dragStart.current.px + dx, y: dragStart.current.py + dy });
  }, [isDragging]);

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  if (!isPlaying || sentences.length === 0) return null;

  const progress = sentences.length > 0 ? ((currentSentenceIndex + 1) / sentences.length) * 100 : 0;
  const btnClass = 'p-2 md:p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700/50 active:bg-gray-600/50 transition-colors cursor-pointer';
  const iconSize = mobile ? 18 : 14;

  // --- Collapsed mode ---
  if (collapsed) {
    return (
      <div
        className="fixed z-50"
        style={mobile
          ? { bottom: 0, left: 0, right: 0, paddingBottom: 'var(--sab, 0px)' }
          : { bottom: '16px', left: '50%', transform: `translate(calc(-50% + ${position.x}px), ${position.y}px)` }
        }
      >
        <div className={`bg-gray-900/95 backdrop-blur-sm shadow-2xl border border-gray-700/50 overflow-hidden ${mobile ? 'rounded-t-xl' : 'rounded-2xl'}`}>
          <div className="flex items-center gap-2 px-3 py-2">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
            <span className="text-gray-300 text-xs truncate flex-1 max-w-48 md:max-w-64">
              {sentences[currentSentenceIndex] || ''}
            </span>
            <span className="text-gray-600 text-xs shrink-0">{currentSentenceIndex + 1}/{sentences.length}</span>
            <button type="button" onClick={() => (isPaused ? resume() : pause())} className={btnClass} title={isPaused ? '继续' : '暂停'}>
              {isPaused ? <Play size={iconSize} /> : <Pause size={iconSize} />}
            </button>
            <button type="button" onClick={() => setCollapsed(false)} className={btnClass} title="展开">
              <Maximize2 size={iconSize} />
            </button>
            <button type="button" onClick={stop} className={btnClass} title="关闭">
              <X size={iconSize} />
            </button>
          </div>
          <div className="h-0.5 bg-gray-800">
            <div className="h-full bg-blue-500 transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>
    );
  }

  // --- Expanded mode ---
  return (
    <div
      ref={panelRef}
      className="fixed z-50"
      style={mobile
        ? { bottom: 0, left: 0, right: 0, paddingBottom: 'var(--sab, 0px)' }
        : { bottom: '16px', left: '50%', transform: `translate(calc(-50% + ${position.x}px), ${position.y}px)`, width: '100%', maxWidth: '42rem' }
      }
    >
      <div className={`bg-gray-900/95 backdrop-blur-sm shadow-2xl border border-gray-700/50 overflow-hidden ${mobile ? 'rounded-t-2xl' : 'rounded-2xl mx-4'}`}>
        {/* Drag handle + Controls bar */}
        <div
          className={`flex items-center justify-between px-3 md:px-4 py-2 border-b border-gray-700/50 ${!mobile ? 'cursor-grab active:cursor-grabbing' : ''}`}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          style={{ touchAction: 'none' }}
        >
          <div className="flex items-center gap-2 text-gray-400 text-xs select-none">
            {!mobile && <GripHorizontal size={14} className="text-gray-600" />}
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>字幕</span>
            <span className="text-gray-600">{currentSentenceIndex + 1}/{sentences.length}</span>
          </div>
          <div className="flex items-center gap-0.5">
            <button type="button" onClick={() => (isPaused ? resume() : pause())} className={btnClass} title={isPaused ? '继续' : '暂停'}>
              {isPaused ? <Play size={iconSize} /> : <Pause size={iconSize} />}
            </button>
            <button type="button" onClick={() => setCollapsed(true)} className={btnClass} title="收缩">
              <Minimize2 size={iconSize} />
            </button>
            <button type="button" onClick={stop} className={btnClass} title="关闭">
              <X size={iconSize} />
            </button>
          </div>
        </div>

        {/* Subtitle text */}
        <div
          ref={containerRef}
          className="px-3 md:px-4 py-3 max-h-28 md:max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700"
        >
          <p className="text-sm md:text-sm leading-relaxed">
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
          <div className="h-full bg-blue-500 transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}
