import type { Point2D, Polygon2D } from '../types';

interface PolygonsRendererProps {
  polygons: Polygon2D[];
  vertices: Point2D[];
}

export function PolygonsRenderer({ polygons, vertices }: PolygonsRendererProps) {
  return (
    <>
      {polygons.map((p, i) => {
        const pts = p.points.map(idx => vertices[idx]);
        const d = pts.map(([x, y], j) => `${j === 0 ? 'M' : 'L'} ${x} ${y}`).join(' ') + ' Z';
        return <path key={`pg-${i}`} d={d} fill={p.fill} opacity={p.opacity} />;
      })}
    </>
  );
}
