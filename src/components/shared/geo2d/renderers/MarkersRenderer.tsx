import type { Point2D, AngleArc, TickMark, RightAngle } from '../types';
import { angleArcPath, angleLabelPos, tickMarkPaths, rightAnglePath } from '../utils';

interface MarkersRendererProps {
  vertices: Point2D[];
  angleArcs: AngleArc[];
  tickMarks: TickMark[];
  rightAngles: RightAngle[];
  strokeColor: string;
}

export function MarkersRenderer({ vertices, angleArcs, tickMarks, rightAngles, strokeColor }: MarkersRendererProps) {
  return (
    <>
      {/* 直角标记 */}
      {rightAngles.map((ra, i) => {
        const [vx, vy] = vertices[ra.vertex];
        const [ax, ay] = vertices[ra.from];
        const [bx, by] = vertices[ra.to];
        return <path key={`ra-${i}`} d={rightAnglePath(vx, vy, ax, ay, bx, by, ra.size ?? 10)}
          fill="none" stroke={ra.color ?? strokeColor} strokeWidth={1.5} />;
      })}

      {/* 角弧 */}
      {angleArcs.map((arc, i) => {
        const [vx, vy] = vertices[arc.vertex];
        const [ax, ay] = vertices[arc.from];
        const [bx, by] = vertices[arc.to];
        const r = arc.radius ?? 15;
        const color = arc.color ?? strokeColor;
        const [lx, ly] = arc.label ? angleLabelPos(vx, vy, ax, ay, bx, by, r) : [0, 0];
        return (
          <g key={`aa-${i}`}>
            <path d={angleArcPath(vx, vy, ax, ay, bx, by, r)} fill="none" stroke={color} strokeWidth={1.2} />
            {arc.label && <text x={lx} y={ly} textAnchor="middle" dominantBaseline="middle" fontSize={12} fill={color}>{arc.label}</text>}
          </g>
        );
      })}

      {/* 等边标记 */}
      {tickMarks.map((tm, i) => {
        const [ax, ay] = vertices[tm.from];
        const [bx, by] = vertices[tm.to];
        const paths = tickMarkPaths(ax, ay, bx, by, tm.count);
        return <g key={`tm-${i}`}>{paths.map((d, j) => <path key={j} d={d} stroke={tm.color ?? '#dc2626'} strokeWidth={1.5} />)}</g>;
      })}
    </>
  );
}
