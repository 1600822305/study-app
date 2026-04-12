import { Math as MathTex } from '../../Math';
import type { FreeLabel2D } from '../types';

interface LabelsRendererProps {
  freeLabels: FreeLabel2D[];
  strokeColor: string;
}

export function LabelsRenderer({ freeLabels, strokeColor }: LabelsRendererProps) {
  return (
    <>
      {freeLabels.map((fl, i) => {
        const [px, py] = fl.pos;
        const [ox, oy] = fl.offset ?? [0, 0];
        const labelColor = fl.color ?? strokeColor;
        const dotColor = typeof fl.dot === 'string' ? fl.dot : (fl.dot ? labelColor : undefined);
        return (
          <g key={`fl-${i}`}>
            {dotColor && <circle cx={px} cy={py} r={3.5} fill={dotColor} />}
            {fl.tex ? (
              <foreignObject x={px + ox - 60} y={py + oy - 15} width={120} height={30} style={{ overflow: 'visible' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', fontSize: fl.fontSize ?? 16, color: labelColor, whiteSpace: 'nowrap' }}>
                  <MathTex tex={fl.tex} />
                </div>
              </foreignObject>
            ) : fl.text ? (
              <text x={px + ox} y={py + oy} textAnchor="middle" dominantBaseline="middle"
                fontSize={fl.fontSize ?? 18}
                fontFamily={fl.text.length <= 1 ? 'KaTeX_Math, serif' : 'system-ui, sans-serif'}
                fontStyle={fl.text.length <= 1 ? 'italic' : 'normal'}
                fontWeight="bold"
                fill={labelColor} style={{ vectorEffect: 'non-scaling-stroke' as const }}>
                {fl.text}
              </text>
            ) : null}
          </g>
        );
      })}
    </>
  );
}
