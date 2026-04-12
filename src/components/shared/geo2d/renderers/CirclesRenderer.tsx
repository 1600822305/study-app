import type { Circle2D, Ellipse2D, Arc2D } from '../types';

interface CirclesRendererProps {
  circles: Circle2D[];
  ellipses: Ellipse2D[];
  arcs: Arc2D[];
  strokeColor: string;
}

export function CirclesRenderer({ circles, ellipses, arcs, strokeColor }: CirclesRendererProps) {
  return (
    <>
      {/* 椭圆 */}
      {ellipses.map((e, i) => (
        <ellipse key={`el-${i}`} cx={e.center[0]} cy={e.center[1]} rx={e.rx} ry={e.ry}
          fill={e.fill ?? 'none'} fillOpacity={e.fillOpacity ?? 1}
          stroke={e.color ?? strokeColor} strokeWidth={e.strokeWidth ?? 2}
          strokeDasharray={e.dashed ? '5 4' : undefined} />
      ))}

      {/* 圆 */}
      {circles.map((c, i) => (
        <circle key={`ci-${i}`} cx={c.center[0]} cy={c.center[1]} r={c.radius}
          fill={c.fill ?? 'none'} fillOpacity={c.fillOpacity ?? 1}
          stroke={c.color ?? strokeColor} strokeWidth={c.strokeWidth ?? 2}
          strokeDasharray={c.dashed ? '5 4' : undefined} />
      ))}

      {/* 弧/扇形 */}
      {arcs.map((a, i) => {
        const [cx, cy] = a.center;
        const r = a.radius;
        const startRad = -(a.startAngle * Math.PI) / 180;
        const endRad = -(a.endAngle * Math.PI) / 180;
        const x1 = cx + r * Math.cos(startRad), y1 = cy + r * Math.sin(startRad);
        const x2 = cx + r * Math.cos(endRad), y2 = cy + r * Math.sin(endRad);
        let sweep = a.endAngle - a.startAngle;
        if (sweep < 0) sweep += 360;
        const largeArc = sweep > 180 ? 1 : 0;
        const hasFill = !!a.fill;
        const d = hasFill
          ? `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 0 ${x2} ${y2} Z`
          : `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 0 ${x2} ${y2}`;
        return <path key={`arc-${i}`} d={d} fill={a.fill ?? 'none'} fillOpacity={a.fillOpacity ?? 0.3}
          stroke={a.color ?? strokeColor} strokeWidth={a.strokeWidth ?? 2} />;
      })}
    </>
  );
}
