import { useId } from 'react';
import { Math as MathTex } from '../../Math';
import type { VennDiagram2D, Point2D } from '../types';

interface VennRendererProps {
  venn: VennDiagram2D;
  strokeColor: string;
}

/** 两圆交点 */
function circleIntersections(
  c1: Point2D, r1: number, c2: Point2D, r2: number
): [Point2D, Point2D] | null {
  const dx = c2[0] - c1[0], dy = c2[1] - c1[1];
  const d = Math.sqrt(dx * dx + dy * dy);
  if (d > r1 + r2 || d < Math.abs(r1 - r2) || d === 0) return null;
  const a = (r1 * r1 - r2 * r2 + d * d) / (2 * d);
  const h = Math.sqrt(r1 * r1 - a * a);
  const px = c1[0] + (a * dx) / d, py = c1[1] + (a * dy) / d;
  const nx = (h * dy) / d, ny = (h * dx) / d;
  return [[px + nx, py - ny], [px - nx, py + ny]];
}

/** 两圆相交的 lens 形 clip-path（A ∩ B） */
function lensPath(c1: Point2D, r1: number, c2: Point2D, r2: number): string {
  const pts = circleIntersections(c1, r1, c2, r2);
  if (!pts) return '';
  const [p1, p2] = pts;
  // 从 p1 沿圆1 弧到 p2，再沿圆2 弧回 p1
  return `M ${p1[0]} ${p1[1]} A ${r1} ${r1} 0 0 1 ${p2[0]} ${p2[1]} A ${r2} ${r2} 0 0 1 ${p1[0]} ${p1[1]} Z`;
}

export function VennRenderer({ venn, strokeColor }: VennRendererProps) {
  const { rectOrigin, rectSize, universalLabel = 'U', rectColor = strokeColor, rectRx = 0, rectFill, rectFillOpacity, sets, regions = [], elements = [] } = venn;
  const [rx, ry] = rectOrigin;
  const [rw, rh] = rectSize;

  // 为 clip-path 生成唯一 id（useId 确保同页多图不冲突）
  const clipId = useId();

  return (
    <g className="venn-diagram">
      {/* 区域高亮（用 clip-path 实现） */}
      <defs>
        {sets.map((s, i) => (
          <clipPath key={`clip-${i}`} id={`${clipId}-set${i}`}>
            <circle cx={s.center[0]} cy={s.center[1]} r={s.radius} />
          </clipPath>
        ))}
        {/* 全集矩形 clip */}
        <clipPath id={`${clipId}-rect`}>
          <rect x={rx} y={ry} width={rw} height={rh} />
        </clipPath>
      </defs>

      {/* 全集矩形 */}
      <rect x={rx} y={ry} width={rw} height={rh} rx={rectRx}
        fill={rectFill ?? 'none'} fillOpacity={rectFillOpacity ?? 1}
        stroke={rectColor} strokeWidth={1.5} />
      {/* U 标签 */}
      <text x={rx + rw - 6} y={ry + 16} textAnchor="end" fontSize={16}
        fontFamily="KaTeX_Math, serif" fontStyle="italic" fontWeight="bold" fill={rectColor}>
        {universalLabel}
      </text>

      {/* 区域高亮 */}
      {regions.map((region, ri) => {
        const opacity = region.fillOpacity ?? 0.25;
        const s0 = sets[0], s1 = sets[1], s2 = sets[2];

        // complement 适用于任意数量的集合
        if (region.type === 'complement') {
          return (
            <g key={ri} clipPath={`url(#${clipId}-rect)`}>
              <rect x={rx} y={ry} width={rw} height={rh} fill={region.fill} fillOpacity={opacity} />
              {sets.map((s, si) => (
                <circle key={si} cx={s.center[0]} cy={s.center[1]} r={s.radius} fill="white" fillOpacity={1} />
              ))}
            </g>
          );
        }

        // 两圆情况
        if (sets.length >= 2 && s1) {
          switch (region.type) {
            case 'intersection': {
              const d = lensPath(s0.center, s0.radius, s1.center, s1.radius);
              return d ? <path key={ri} d={d} fill={region.fill} fillOpacity={opacity} /> : null;
            }
            case 'union':
              return (
                <g key={ri}>
                  <circle cx={s0.center[0]} cy={s0.center[1]} r={s0.radius} fill={region.fill} fillOpacity={opacity} />
                  <circle cx={s1.center[0]} cy={s1.center[1]} r={s1.radius} fill={region.fill} fillOpacity={opacity} />
                </g>
              );
            case 'differenceA': {
              const d = lensPath(s0.center, s0.radius, s1.center, s1.radius);
              return (
                <g key={ri}>
                  <circle cx={s0.center[0]} cy={s0.center[1]} r={s0.radius} fill={region.fill} fillOpacity={opacity} />
                  {d && <path d={d} fill="white" fillOpacity={1} />}
                </g>
              );
            }
            case 'differenceB': {
              const d = lensPath(s0.center, s0.radius, s1.center, s1.radius);
              return (
                <g key={ri}>
                  <circle cx={s1.center[0]} cy={s1.center[1]} r={s1.radius} fill={region.fill} fillOpacity={opacity} />
                  {d && <path d={d} fill="white" fillOpacity={1} />}
                </g>
              );
            }
            default:
              break;
          }
        }

        // 三圆情况
        if (sets.length === 3 && s2) {
          switch (region.type) {
            case 'intersectionABC': {
              // A ∩ B ∩ C: 三圆重叠的中心区域
              // 用 clip-path 叠加实现
              return (
                <g key={ri} clipPath={`url(#${clipId}-set0)`}>
                  <g clipPath={`url(#${clipId}-set1)`}>
                    <circle cx={s2.center[0]} cy={s2.center[1]} r={s2.radius} fill={region.fill} fillOpacity={opacity} />
                  </g>
                </g>
              );
            }
            case 'intersectionAB':
            case 'intersection': {
              // A ∩ B 不含 C
              const d = lensPath(s0.center, s0.radius, s1.center, s1.radius);
              return d ? (
                <g key={ri}>
                  <path d={d} fill={region.fill} fillOpacity={opacity} />
                  <g clipPath={`url(#${clipId}-set2)`}>
                    <path d={d} fill="white" fillOpacity={1} />
                  </g>
                </g>
              ) : null;
            }
            case 'intersectionAC': {
              const d = lensPath(s0.center, s0.radius, s2.center, s2.radius);
              return d ? (
                <g key={ri}>
                  <path d={d} fill={region.fill} fillOpacity={opacity} />
                  <g clipPath={`url(#${clipId}-set1)`}>
                    <path d={d} fill="white" fillOpacity={1} />
                  </g>
                </g>
              ) : null;
            }
            case 'intersectionBC': {
              const d = lensPath(s1.center, s1.radius, s2.center, s2.radius);
              return d ? (
                <g key={ri}>
                  <path d={d} fill={region.fill} fillOpacity={opacity} />
                  <g clipPath={`url(#${clipId}-set0)`}>
                    <path d={d} fill="white" fillOpacity={1} />
                  </g>
                </g>
              ) : null;
            }
            case 'onlyA': {
              return (
                <g key={ri}>
                  <circle cx={s0.center[0]} cy={s0.center[1]} r={s0.radius} fill={region.fill} fillOpacity={opacity} />
                  <g clipPath={`url(#${clipId}-set1)`}>
                    <circle cx={s0.center[0]} cy={s0.center[1]} r={s0.radius} fill="white" fillOpacity={1} />
                  </g>
                  <g clipPath={`url(#${clipId}-set2)`}>
                    <circle cx={s0.center[0]} cy={s0.center[1]} r={s0.radius} fill="white" fillOpacity={1} />
                  </g>
                </g>
              );
            }
            case 'onlyB': {
              return (
                <g key={ri}>
                  <circle cx={s1.center[0]} cy={s1.center[1]} r={s1.radius} fill={region.fill} fillOpacity={opacity} />
                  <g clipPath={`url(#${clipId}-set0)`}>
                    <circle cx={s1.center[0]} cy={s1.center[1]} r={s1.radius} fill="white" fillOpacity={1} />
                  </g>
                  <g clipPath={`url(#${clipId}-set2)`}>
                    <circle cx={s1.center[0]} cy={s1.center[1]} r={s1.radius} fill="white" fillOpacity={1} />
                  </g>
                </g>
              );
            }
            case 'onlyC': {
              return (
                <g key={ri}>
                  <circle cx={s2.center[0]} cy={s2.center[1]} r={s2.radius} fill={region.fill} fillOpacity={opacity} />
                  <g clipPath={`url(#${clipId}-set0)`}>
                    <circle cx={s2.center[0]} cy={s2.center[1]} r={s2.radius} fill="white" fillOpacity={1} />
                  </g>
                  <g clipPath={`url(#${clipId}-set1)`}>
                    <circle cx={s2.center[0]} cy={s2.center[1]} r={s2.radius} fill="white" fillOpacity={1} />
                  </g>
                </g>
              );
            }
            default:
              return null;
          }
        }

        return null;
      })}

      {/* 集合圆 */}
      {sets.map((s, i) => {
        const color = s.color ?? strokeColor;
        return (
          <g key={`vset-${i}`}>
            {s.fill && (
              <circle cx={s.center[0]} cy={s.center[1]} r={s.radius}
                fill={s.fill} fillOpacity={s.fillOpacity ?? 0.15} />
            )}
            <circle cx={s.center[0]} cy={s.center[1]} r={s.radius}
              fill="none" stroke={color} strokeWidth={1.8}
              strokeDasharray={s.dashed ? '5 4' : undefined} />
            {/* 集合标签 */}
            {s.tex ? (
              <foreignObject
                x={s.center[0] + (s.labelOffset?.[0] ?? 0) - 30}
                y={s.center[1] + (s.labelOffset?.[1] ?? -s.radius - 18) - 10}
                width={60} height={20}
                style={{ overflow: 'visible' }}
              >
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', fontSize: 16, color, whiteSpace: 'nowrap' }}>
                  <MathTex tex={s.tex} />
                </div>
              </foreignObject>
            ) : s.label ? (
              <text
                x={s.center[0] + (s.labelOffset?.[0] ?? 0)}
                y={s.center[1] + (s.labelOffset?.[1] ?? -s.radius - 8)}
                textAnchor="middle" dominantBaseline="middle"
                fontSize={16} fontFamily="KaTeX_Math, serif" fontStyle="italic" fontWeight="bold"
                fill={color}
              >
                {s.label}
              </text>
            ) : null}
          </g>
        );
      })}

      {/* 区域内元素标签 */}
      {elements.map((el, i) => {
        const color = el.color ?? strokeColor;
        if (el.tex) {
          return (
            <foreignObject key={`vel-${i}`}
              x={el.pos[0] - 40} y={el.pos[1] - 10}
              width={80} height={20}
              style={{ overflow: 'visible' }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', fontSize: el.fontSize ?? 14, color, whiteSpace: 'nowrap' }}>
                <MathTex tex={el.tex} />
              </div>
            </foreignObject>
          );
        }
        return (
          <text key={`vel-${i}`}
            x={el.pos[0]} y={el.pos[1]}
            textAnchor="middle" dominantBaseline="middle"
            fontSize={el.fontSize ?? 14} fontWeight={el.fontWeight ?? 'normal'} fill={color}
          >
            {el.text}
          </text>
        );
      })}
    </g>
  );
}
