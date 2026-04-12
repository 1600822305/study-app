import type { FreePath2D } from '../types';

interface PathsRendererProps {
  paths: FreePath2D[];
  strokeColor: string;
}

export function PathsRenderer({ paths, strokeColor }: PathsRendererProps) {
  return (
    <>
      {paths.map((p, i) => (
        <path key={`fp-${i}`} d={p.d} fill={p.fill ?? 'none'} fillOpacity={p.fillOpacity ?? 1}
          stroke={p.color ?? strokeColor} strokeWidth={p.strokeWidth ?? 2}
          strokeDasharray={p.dashed ? '5 4' : undefined} />
      ))}
    </>
  );
}
