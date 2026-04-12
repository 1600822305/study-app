import type { Point2D, Edge2D } from '../types';

interface EdgesRendererProps {
  edges: Edge2D[];
  vertices: Point2D[];
  strokeColor: string;
  markerId: string;
}

export function EdgesRenderer({ edges, vertices, strokeColor, markerId }: EdgesRendererProps) {
  return (
    <>
      {edges.map((e, i) => {
        const [x1, y1] = vertices[e.from];
        const [x2, y2] = vertices[e.to];
        const color = e.color ?? strokeColor;
        const mid = `${markerId}-${color.replace('#', '')}`;
        return <line key={`e-${i}`} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke={color} strokeWidth={e.strokeWidth ?? 2}
          strokeDasharray={e.dashed ? '5 4' : undefined}
          markerEnd={(e.arrow === 'end' || e.arrow === 'both') ? `url(#${mid})` : undefined}
          markerStart={(e.arrow === 'start' || e.arrow === 'both') ? `url(#${mid})` : undefined} />;
      })}
    </>
  );
}

/** 箭头 marker defs */
export function EdgeArrowDefs({ edges, strokeColor, markerId }: { edges: Edge2D[]; strokeColor: string; markerId: string }) {
  const colors = Array.from(new Set(edges.filter(e => e.arrow).map(e => e.color ?? strokeColor)));
  if (colors.length === 0) return null;
  return (
    <>
      {colors.map(color => (
        <marker
          key={`${markerId}-${color}`}
          id={`${markerId}-${color.replace('#', '')}`}
          viewBox="0 0 10 6"
          refX="10" refY="3"
          markerWidth="8" markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 3 L 0 6 Z" fill={color} />
        </marker>
      ))}
    </>
  );
}
