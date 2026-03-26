/**
 * Geo2dSvg — 轻量 2D 平面几何 SVG 组件
 *
 * 与 Geo3dSvg 类似的数据驱动渲染，但无 3D 投影
 * 支持角弧标记、等边标记、直角标记等 2D 专属功能
 */

import { Math as MathTex } from './Math';

export type Point2D = [number, number];

export interface Edge2D {
  from: number;
  to: number;
  dashed?: boolean;
  color?: string;
  strokeWidth?: number;
}

export interface Polygon2D {
  points: number[];
  fill: string;
  opacity: number;
}

export interface FreeLabel2D {
  pos: Point2D;
  text: string;
  tex?: string;
  offset?: [number, number];
  fontSize?: number;
  color?: string;
  dot?: boolean | string;
}

export interface AngleArc {
  vertex: number;
  from: number;
  to: number;
  radius?: number;
  label?: string;
  color?: string;
}

export interface TickMark {
  from: number;
  to: number;
  count: number;
  color?: string;
}

export interface RightAngle {
  vertex: number;
  from: number;
  to: number;
  size?: number;
  color?: string;
}

export interface Circle2D {
  center: Point2D;
  radius: number;
  color?: string;
  strokeWidth?: number;
  dashed?: boolean;
  fill?: string;
  fillOpacity?: number;
}

export interface Arc2D {
  center: Point2D;
  radius: number;
  startAngle: number;   // 角度制（0~360）
  endAngle: number;
  color?: string;
  strokeWidth?: number;
  fill?: string;
  fillOpacity?: number;
}

export interface Diagram2DData {
  name?: string;
  vertices: Point2D[];
  edges: Edge2D[];
  polygons: Polygon2D[];
  freeLabels: FreeLabel2D[];
  angleArcs?: AngleArc[];
  tickMarks?: TickMark[];
  rightAngles?: RightAngle[];
  circles?: Circle2D[];
  arcs?: Arc2D[];
}

/* ── 角弧路径计算 ── */
function angleArcPath(
  vx: number, vy: number,
  ax: number, ay: number,
  bx: number, by: number,
  radius: number,
): string {
  // 计算从 vertex 到 a 和 b 的方向角
  const angle1 = Math.atan2(ay - vy, ax - vx);
  const angle2 = Math.atan2(by - vy, bx - vx);

  // 确保角度差为正方向（逆时针）
  let start = angle1;
  let end = angle2;
  let diff = end - start;
  if (diff < 0) diff += 2 * Math.PI;
  if (diff > Math.PI) {
    // 换方向，取小角
    const tmp = start;
    start = end;
    end = tmp;
    diff = 2 * Math.PI - diff;
  }

  const x1 = vx + radius * Math.cos(start);
  const y1 = vy + radius * Math.sin(start);
  const x2 = vx + radius * Math.cos(end);
  const y2 = vy + radius * Math.sin(end);
  const largeArc = diff > Math.PI ? 1 : 0;

  return `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`;
}

/* ── 角弧标签位置 ── */
function angleLabelPos(
  vx: number, vy: number,
  ax: number, ay: number,
  bx: number, by: number,
  radius: number,
): [number, number] {
  const angle1 = Math.atan2(ay - vy, ax - vx);
  const angle2 = Math.atan2(by - vy, bx - vx);

  let start = angle1;
  let end = angle2;
  let diff = end - start;
  if (diff < 0) diff += 2 * Math.PI;
  if (diff > Math.PI) {
    const tmp = start;
    start = end;
    end = tmp;
  }

  const mid = start + (end - start < 0 ? end - start + 2 * Math.PI : end - start) / 2;
  return [
    vx + (radius + 10) * Math.cos(mid),
    vy + (radius + 10) * Math.sin(mid),
  ];
}

/* ── tick marks 计算 ── */
function tickMarkPaths(
  ax: number, ay: number,
  bx: number, by: number,
  count: number,
): string[] {
  const mx = (ax + bx) / 2;
  const my = (ay + by) / 2;
  const dx = bx - ax;
  const dy = by - ay;
  const len = Math.sqrt(dx * dx + dy * dy);
  if (len === 0) return [];

  // 垂直方向
  const nx = -dy / len;
  const ny = dx / len;
  const tickLen = 6;
  const gap = 4;

  const paths: string[] = [];
  const startOffset = -((count - 1) * gap) / 2;

  for (let i = 0; i < count; i++) {
    const offset = startOffset + i * gap;
    const cx = mx + (dx / len) * offset;
    const cy = my + (dy / len) * offset;
    paths.push(
      `M ${cx + nx * tickLen} ${cy + ny * tickLen} L ${cx - nx * tickLen} ${cy - ny * tickLen}`
    );
  }
  return paths;
}

/* ── 直角标记路径 ── */
function rightAnglePath(
  vx: number, vy: number,
  ax: number, ay: number,
  bx: number, by: number,
  size: number,
): string {
  const dx1 = ax - vx;
  const dy1 = ay - vy;
  const len1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
  const dx2 = bx - vx;
  const dy2 = by - vy;
  const len2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
  if (len1 === 0 || len2 === 0) return '';

  const ux1 = (dx1 / len1) * size;
  const uy1 = (dy1 / len1) * size;
  const ux2 = (dx2 / len2) * size;
  const uy2 = (dy2 / len2) * size;

  const p1x = vx + ux1;
  const p1y = vy + uy1;
  const p2x = vx + ux1 + ux2;
  const p2y = vy + uy1 + uy2;
  const p3x = vx + ux2;
  const p3y = vy + uy2;

  return `M ${p1x} ${p1y} L ${p2x} ${p2y} L ${p3x} ${p3y}`;
}

/* ── 主组件 ── */
interface Geo2dSvgProps {
  data: Diagram2DData;
  width?: number;
  height?: number;
  strokeColor?: string;
  className?: string;
}

export function Geo2dSvg({
  data,
  width = 160,
  height = 140,
  strokeColor = '#334155',
  className,
}: Geo2dSvgProps) {
  const { vertices, edges, polygons, freeLabels, angleArcs = [], tickMarks = [], rightAngles = [], circles = [], arcs = [] } = data;

  // SVG 坐标系 y 轴向下，但数学坐标 y 轴向上
  // 我们用 transform="scale(1,-1)" 翻转，或者让用户直接用 SVG 坐标（y 向下）
  // 为了简单，直接用 SVG 坐标（y 向下），用户定义时 y 越大越往下

  // 计算 bounding box
  const allX: number[] = [];
  const allY: number[] = [];
  vertices.forEach(([x, y]) => { allX.push(x); allY.push(y); });
  freeLabels.forEach(fl => {
    const [ox, oy] = fl.offset ?? [0, 0];
    allX.push(fl.pos[0] + ox);
    allY.push(fl.pos[1] + oy);
  });
  circles.forEach(c => {
    allX.push(c.center[0] - c.radius, c.center[0] + c.radius);
    allY.push(c.center[1] - c.radius, c.center[1] + c.radius);
  });

  if (allX.length === 0) return null;

  const pad = 20;
  const minX = Math.min(...allX) - pad;
  const minY = Math.min(...allY) - pad;
  const contentW = Math.max(...allX) - Math.min(...allX) + pad * 2;
  const contentH = Math.max(...allY) - Math.min(...allY) + pad * 2;
  const viewBox = `${minX} ${minY} ${contentW} ${contentH}`;

  return (
    <svg width={width} height={height} viewBox={viewBox} className={className} xmlns="http://www.w3.org/2000/svg">

      {/* 圆 */}
      {circles.map((c, i) => (
        <circle
          key={`ci-${i}`}
          cx={c.center[0]} cy={c.center[1]} r={c.radius}
          fill={c.fill ?? 'none'}
          fillOpacity={c.fillOpacity ?? 1}
          stroke={c.color ?? strokeColor}
          strokeWidth={c.strokeWidth ?? 2}
          strokeDasharray={c.dashed ? '5 4' : undefined}
        />
      ))}

      {/* 弧/扇形 — 角度采用数学惯例：0°向右，逆时针为正；SVG y轴向下所以取负sin */}
      {arcs.map((a, i) => {
        const [cx, cy] = a.center;
        const r = a.radius;
        const startRad = -(a.startAngle * Math.PI) / 180;
        const endRad = -(a.endAngle * Math.PI) / 180;
        const x1 = cx + r * Math.cos(startRad);
        const y1 = cy + r * Math.sin(startRad);
        const x2 = cx + r * Math.cos(endRad);
        const y2 = cy + r * Math.sin(endRad);
        let sweep = a.endAngle - a.startAngle;
        if (sweep < 0) sweep += 360;
        const largeArc = sweep > 180 ? 1 : 0;
        // sweep-flag=0 因为角度取了负（顺时针 in SVG = 逆时针 in math）
        const hasFill = !!a.fill;
        const d = hasFill
          ? `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 0 ${x2} ${y2} Z`
          : `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 0 ${x2} ${y2}`;
        return (
          <path
            key={`arc-${i}`}
            d={d}
            fill={a.fill ?? 'none'}
            fillOpacity={a.fillOpacity ?? 0.3}
            stroke={a.color ?? strokeColor}
            strokeWidth={a.strokeWidth ?? 2}
          />
        );
      })}

      {/* 填充多边形 */}
      {polygons.map((p, i) => {
        const pts = p.points.map(idx => vertices[idx]);
        const d = pts.map(([x, y], j) => `${j === 0 ? 'M' : 'L'} ${x} ${y}`).join(' ') + ' Z';
        return <path key={`pg-${i}`} d={d} fill={p.fill} opacity={p.opacity} />;
      })}

      {/* 边 */}
      {edges.map((e, i) => {
        const [x1, y1] = vertices[e.from];
        const [x2, y2] = vertices[e.to];
        return (
          <line
            key={`e-${i}`}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={e.color ?? strokeColor}
            strokeWidth={e.strokeWidth ?? 2}
            strokeDasharray={e.dashed ? '5 4' : undefined}
          />
        );
      })}

      {/* 直角标记 */}
      {rightAngles.map((ra, i) => {
        const [vx, vy] = vertices[ra.vertex];
        const [ax, ay] = vertices[ra.from];
        const [bx, by] = vertices[ra.to];
        return (
          <path
            key={`ra-${i}`}
            d={rightAnglePath(vx, vy, ax, ay, bx, by, ra.size ?? 10)}
            fill="none"
            stroke={ra.color ?? strokeColor}
            strokeWidth={1.5}
          />
        );
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
            {arc.label && (
              <text x={lx} y={ly} textAnchor="middle" dominantBaseline="middle" fontSize={12} fill={color}>
                {arc.label}
              </text>
            )}
          </g>
        );
      })}

      {/* 等边标记 */}
      {tickMarks.map((tm, i) => {
        const [ax, ay] = vertices[tm.from];
        const [bx, by] = vertices[tm.to];
        const paths = tickMarkPaths(ax, ay, bx, by, tm.count);
        return (
          <g key={`tm-${i}`}>
            {paths.map((d, j) => (
              <path key={j} d={d} stroke={tm.color ?? '#dc2626'} strokeWidth={1.5} />
            ))}
          </g>
        );
      })}

      {/* freeLabels */}
      {freeLabels.map((fl, i) => {
        const [px, py] = fl.pos;
        const [ox, oy] = fl.offset ?? [0, 0];
        const labelColor = fl.color ?? strokeColor;
        const dotColor = typeof fl.dot === 'string' ? fl.dot : (fl.dot ? labelColor : undefined);
        return (
          <g key={`fl-${i}`}>
            {dotColor && <circle cx={px} cy={py} r={3.5} fill={dotColor} />}
            {fl.tex ? (
              <foreignObject x={px + ox - 30} y={py + oy - 12} width={60} height={24} style={{ overflow: 'visible' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: labelColor, fontSize: fl.fontSize ?? 16 }}>
                  <MathTex tex={fl.tex} />
                </div>
              </foreignObject>
            ) : (
              <text
                x={px + ox}
                y={py + oy}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={fl.fontSize ?? 18}
                fontFamily="KaTeX_Math, serif"
                fontStyle="italic"
                fontWeight="bold"
                fill={labelColor}
              >
                {fl.text}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}
