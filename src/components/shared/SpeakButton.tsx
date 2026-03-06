import { Volume2, VolumeX } from 'lucide-react';

import { useTTS } from '@/hooks/useTTS';

interface SpeakButtonProps {
  text: string;
  className?: string;
  size?: number;
}

/**
 * 朗读按钮：点击播放/停止 TTS
 * 未配置 API 时隐藏
 */
export function SpeakButton({ text, className = '', size = 18 }: SpeakButtonProps) {
  const { isPlaying, toggle, isConfigured } = useTTS();

  if (!isConfigured) return null;

  return (
    <button
      type="button"
      onClick={() => toggle(text)}
      title={isPlaying ? '停止朗读' : '朗读'}
      className={`inline-flex items-center justify-center p-1.5 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-blue-50 cursor-pointer transition-colors ${className}`}
    >
      {isPlaying ? (
        <VolumeX size={size} />
      ) : (
        <Volume2 size={size} />
      )}
    </button>
  );
}
