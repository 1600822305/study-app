import { useState, useEffect, useCallback } from 'react';

import { ttsService } from '@/lib/tts';

import type { TTSPlaybackState } from '@/lib/tts';

/**
 * Hook to interact with the TTS service.
 * Provides speak/stop/pause/resume functions and current playback state.
 */
export function useTTS() {
  const [state, setState] = useState<TTSPlaybackState>(ttsService.state);

  useEffect(() => {
    // Load config on mount
    ttsService.loadConfig();

    const unsubscribe = ttsService.on(() => {
      setState(ttsService.state);
    });
    return unsubscribe;
  }, []);

  const speak = useCallback(async (text: string) => {
    return ttsService.speak(text);
  }, []);

  const stop = useCallback(() => {
    ttsService.stop();
  }, []);

  const pause = useCallback(() => {
    ttsService.pause();
  }, []);

  const resume = useCallback(() => {
    ttsService.resume();
  }, []);

  const toggle = useCallback(
    async (text: string) => {
      if (state.isPlaying) {
        stop();
      } else {
        await speak(text);
      }
    },
    [state.isPlaying, speak, stop],
  );

  return {
    ...state,
    speak,
    stop,
    pause,
    resume,
    toggle,
    isConfigured: ttsService.isConfigured,
  };
}
