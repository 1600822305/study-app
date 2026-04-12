import { Math as MathTex } from '../../Math';
import type { Dimension2D } from '../types';

interface DimensionsRendererProps {
  dimensions: Dimension2D[];
}

export function DimensionsRenderer({ dimensions }: DimensionsRendererProps) {
  return (
    <>
      {dimensions.map((dim, i) => {
        const [fx, fy] = dim.from;
        const [tx, ty] = dim.to;
        const color = dim.color ?? '#6b7280';
        const mx = (fx + tx) / 2, my = (fy + ty) / 2;
        const off = dim.offset ?? 0;
        const dx = tx - fx, dy = ty - fy, len = Math.sqrt(dx * dx + dy * dy);
        const nx = len > 0 ? (-dy / len) * off : 0, ny = len > 0 ? (dx / len) * off : 0;
        return (
          <g key={`dim-${i}`}>
            <line x1={fx + nx} y1={fy + ny} x2={tx + nx} y2={ty + ny} stroke={color} strokeWidth={1.2} strokeDasharray="4 3" />
            <line x1={fx} y1={fy} x2={fx + nx} y2={fy + ny} stroke={color} strokeWidth={0.8} />
            <line x1={tx} y1={ty} x2={tx + nx} y2={ty + ny} stroke={color} strokeWidth={0.8} />
            {dim.tex ? (
              <foreignObject x={mx + nx - 40} y={my + ny - 12} width={80} height={24} style={{ overflow: 'visible' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', fontSize: 14, color, whiteSpace: 'nowrap' }}>
                  <MathTex tex={dim.tex} />
                </div>
              </foreignObject>
            ) : dim.label ? (
              <text x={mx + nx} y={my + ny} textAnchor="middle" dominantBaseline="middle" fontSize={13} fill={color} fontFamily="KaTeX_Math, serif" fontStyle="italic">{dim.label}</text>
            ) : null}
          </g>
        );
      })}
    </>
  );
}
