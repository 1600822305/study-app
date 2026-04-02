/**
 * Geo2dSvg — 轻量 2D 平面几何组件
 *
 * 采用 Mafs 同款渲染策略：
 *   - SVG viewBox = width×height（像素 1:1，无缩放）
 *   - 文字用 SVG <text>（vectorEffect: non-scaling-stroke）
 *   - tex 公式用 foreignObject（无缩放所以不模糊）
 * 数据接口 Diagram2DData 完全不变
 */

import { memo } from 'react';
import { Math as MathTex } from './Math';

export type Point2D = [number, number];

export interface Edge2D {
  from: number;
  to: number;
  dashed?: boolean;
  color?: string;
  strokeWidth?: number;
  arrow?: 'end' | 'start' | 'both';
}

export interface Polygon2D {
  points: number[];
  fill: string;
  opacity: number;
}

export interface FreeLabel2D {
  pos: Point2D;
  text?: string;
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

export interface Ellipse2D {
  center: Point2D;
  rx: number;
  ry: number;
  color?: string;
  strokeWidth?: number;
  dashed?: boolean;
  fill?: string;
  fillOpacity?: number;
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

export interface FreePath2D {
  d: string;
  color?: string;
  strokeWidth?: number;
  dashed?: boolean;
  fill?: string;
  fillOpacity?: number;
}

export interface Dimension2D {
  from: Point2D;
  to: Point2D;
  label?: string;
  tex?: string;
  color?: string;
  offset?: number;
}

/** 坐标系配置：启用后所有坐标按数学坐标处理，自动转像素 */
export interface CoordinateSystem2D {
  /** 原点在像素空间中的位置 */
  origin: Point2D;
  /** 每个数学单位对应的像素数 [scaleX, scaleY]。y 通常为负（数学 y 向上，像素 y 向下） */
  scale: Point2D;
}

/** 坐标轴配置 */
export interface Axes2D {
  /** x 轴刻度范围 [min, max]（数学坐标） */
  xRange: [number, number];
  /** y 轴刻度范围 [min, max]（数学坐标） */
  yRange: [number, number];
  /** 刻度步长，默认 1 */
  step?: number;
  /** 轴线颜色，默认 #334155 */
  color?: string;
  /** 是否显示刻度数字，默认 true */
  showNumbers?: boolean;
  /** 是否显示网格，默认 false */
  showGrid?: boolean;
}

export interface Diagram2DData {
  name?: string;
  /** 可选坐标系。提供后 vertices/freeLabels.pos/circles.center/dimensions.from|to/arcs.center 均视为数学坐标 */
  coordinateSystem?: CoordinateSystem2D;
  /** 可选坐标轴。需同时提供 coordinateSystem */
  axes?: Axes2D;
  vertices: Point2D[];
  edges: Edge2D[];
  polygons: Polygon2D[];
  freeLabels: FreeLabel2D[];
  angleArcs?: AngleArc[];
  tickMarks?: TickMark[];
  rightAngles?: RightAngle[];
  ellipses?: Ellipse2D[];
  circles?: Circle2D[];
  arcs?: Arc2D[];
  dimensions?: Dimension2D[];
  paths?: FreePath2D[];
}

/* ── 角弧角度计算 ── */
function arcAngles(vx: number, vy: number, ax: number, ay: number, bx: number, by: number) {
  const a1 = Math.atan2(ay - vy, ax - vx);
  const a2 = Math.atan2(by - vy, bx - vx);
  let start = a1, end = a2;
  let diff = end - start;
  if (diff < 0) diff += 2 * Math.PI;
  if (diff > Math.PI) { const t = start; start = end; end = t; }
  return { start, end };
}

/* ── 角弧 SVG path ── */
function angleArcPath(vx: number, vy: number, ax: number, ay: number, bx: number, by: number, radius: number): string {
  const { start, end } = arcAngles(vx, vy, ax, ay, bx, by);
  let diff = end - start;
  if (diff < 0) diff += 2 * Math.PI;
  const x1 = vx + radius * Math.cos(start);
  const y1 = vy + radius * Math.sin(start);
  const x2 = vx + radius * Math.cos(end);
  const y2 = vy + radius * Math.sin(end);
  const largeArc = diff > Math.PI ? 1 : 0;
  return `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`;
}

/* ── 角弧标签位置 ── */
function angleLabelPos(vx: number, vy: number, ax: number, ay: number, bx: number, by: number, radius: number): [number, number] {
  const { start, end } = arcAngles(vx, vy, ax, ay, bx, by);
  const diff = end - start < 0 ? end - start + 2 * Math.PI : end - start;
  const mid = start + diff / 2;
  return [vx + (radius + 10) * Math.cos(mid), vy + (radius + 10) * Math.sin(mid)];
}

/* ── tick marks 计算 ── */
function tickMarkPaths(ax: number, ay: number, bx: number, by: number, count: number): string[] {
  const mx = (ax + bx) / 2, my = (ay + by) / 2;
  const dx = bx - ax, dy = by - ay;
  const len = Math.sqrt(dx * dx + dy * dy);
  if (len === 0) return [];
  const nx = -dy / len, ny = dx / len, tickLen = 6, gap = 4;
  const paths: string[] = [];
  const startOffset = -((count - 1) * gap) / 2;
  for (let i = 0; i < count; i++) {
    const offset = startOffset + i * gap;
    const cx = mx + (dx / len) * offset, cy = my + (dy / len) * offset;
    paths.push(`M ${cx + nx * tickLen} ${cy + ny * tickLen} L ${cx - nx * tickLen} ${cy - ny * tickLen}`);
  }
  return paths;
}

/* ── 直角标记路径 ── */
function rightAnglePath(vx: number, vy: number, ax: number, ay: number, bx: number, by: number, size: number): string {
  const dx1 = ax - vx, dy1 = ay - vy, len1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
  const dx2 = bx - vx, dy2 = by - vy, len2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
  if (len1 === 0 || len2 === 0) return '';
  const ux1 = (dx1 / len1) * size, uy1 = (dy1 / len1) * size;
  const ux2 = (dx2 / len2) * size, uy2 = (dy2 / len2) * size;
  return `M ${vx + ux1} ${vy + uy1} L ${vx + ux1 + ux2} ${vy + uy1 + uy2} L ${vx + ux2} ${vy + uy2}`;
}

/* ── 主组件 ── */
interface Geo2dSvgProps {
  data: Diagram2DData;
  width?: number;
  height?: number;
  /** viewBox 水平偏移（裁剪左侧） */
  xOff?: number;
  /** viewBox 垂直偏移（裁剪顶部） */
  yOff?: number;
  strokeColor?: string;
  className?: string;
}

export const Geo2dSvg = memo(function Geo2dSvg({ data, width = 160, height = 140, xOff = 0, yOff = 0, strokeColor = '#334155', className }: Geo2dSvgProps) {
  const { coordinateSystem: cs, axes, edges, polygons, freeLabels: rawFreeLabels, angleArcs = [], tickMarks = [], rightAngles = [], ellipses: rawEllipses = [], circles: rawCircles = [], arcs: rawArcs = [], dimensions: rawDimensions = [], paths: freePaths = [] } = data;

  // 数学坐标 → 像素坐标转换（无 coordinateSystem 时为恒等变换）
  const toPixel = (p: Point2D): Point2D =>
    cs ? [cs.origin[0] + p[0] * cs.scale[0], cs.origin[1] + p[1] * cs.scale[1]] : p;
  const scaleLen = (r: number, axis: 'x' | 'y' = 'x') =>
    cs ? Math.abs(r * cs.scale[axis === 'x' ? 0 : 1]) : r;

  // 转换所有坐标
  const vertices = data.vertices.map(toPixel);
  const freeLabels = rawFreeLabels.map(fl => ({ ...fl, pos: toPixel(fl.pos) as Point2D }));
  const circles = rawCircles.map(c => ({ ...c, center: toPixel(c.center) as Point2D, radius: scaleLen(c.radius) }));
  const arcs = rawArcs.map(a => ({ ...a, center: toPixel(a.center) as Point2D, radius: scaleLen(a.radius) }));
  const ellipses = rawEllipses.map(e => ({ ...e, center: toPixel(e.center) as Point2D, rx: scaleLen(e.rx, 'x'), ry: scaleLen(e.ry, 'y') }));
  const dimensions = rawDimensions.map(d => ({ ...d, from: toPixel(d.from) as Point2D, to: toPixel(d.to) as Point2D }));

  // Mafs 同款策略：viewBox = "0 0 width height"，像素 1:1 无缩放
  const viewBox = `${xOff} ${yOff} ${width} ${height}`;
  const markerId = data.name ? `arrow-${data.name.replace(/\s/g, '')}` : 'arrow-2d';

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      {/* 箭头 marker */}
      <defs>
        {Array.from(new Set(edges.filter(e => e.arrow).map(e => e.color ?? strokeColor))).map(color => (
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
      </defs>

      {/* 坐标轴 */}
      {cs && axes && (() => {
        const axColor = axes.color ?? strokeColor;
        const step = axes.step ?? 1;
        const showNumbers = axes.showNumbers !== false;
        const showGrid = axes.showGrid ?? false;
        const [ox, oy] = cs.origin;
        const [sx, sy] = cs.scale;
        // 轴线像素范围（延伸到刻度外半格）
        const xMinPx = ox + axes.xRange[0] * sx - 8;
        const xMaxPx = ox + axes.xRange[1] * sx + 8;
        const yMinPx = oy + axes.yRange[1] * sy - 8;  // yRange[1] 是最大值，sy 为负所以像素最小
        const yMaxPx = oy + axes.yRange[0] * sy + 8;
        // 刻度
        const xTicks: number[] = [];
        for (let v = Math.ceil(axes.xRange[0] / step) * step; v <= axes.xRange[1]; v += step) {
          if (Math.abs(v) > 0.001) xTicks.push(v);
        }
        const yTicks: number[] = [];
        for (let v = Math.ceil(axes.yRange[0] / step) * step; v <= axes.yRange[1]; v += step) {
          if (Math.abs(v) > 0.001) yTicks.push(v);
        }
        const axMid = `${markerId}-axes`;
        return (
          <g className="axes">
            {/* 轴箭头 marker */}
            <defs>
              <marker id={axMid} viewBox="0 0 10 6" refX="10" refY="3" markerWidth="7" markerHeight="5" orient="auto-start-reverse">
                <path d="M 0 0 L 10 3 L 0 6 Z" fill={axColor} />
              </marker>
            </defs>
            {/* 网格 */}
            {showGrid && xTicks.map(v => {
              const px = ox + v * sx;
              return <line key={`gx-${v}`} x1={px} y1={yMinPx + 8} x2={px} y2={yMaxPx - 8} stroke="#e5e7eb" strokeWidth={0.8} />;
            })}
            {showGrid && yTicks.map(v => {
              const py = oy + v * sy;
              return <line key={`gy-${v}`} x1={xMinPx + 8} y1={py} x2={xMaxPx - 8} y2={py} stroke="#e5e7eb" strokeWidth={0.8} />;
            })}
            {/* x 轴 */}
            <line x1={xMinPx} y1={oy} x2={xMaxPx} y2={oy} stroke={axColor} strokeWidth={1.5} markerEnd={`url(#${axMid})`} />
            {/* y 轴 */}
            <line x1={ox} y1={yMaxPx} x2={ox} y2={yMinPx} stroke={axColor} strokeWidth={1.5} markerEnd={`url(#${axMid})`} />
            {/* x 刻度 */}
            {xTicks.map(v => {
              const px = ox + v * sx;
              return (
                <g key={`xt-${v}`}>
                  <line x1={px} y1={oy - 3} x2={px} y2={oy + 3} stroke={axColor} strokeWidth={1} />
                  {showNumbers && <text x={px} y={oy + 14} textAnchor="middle" fontSize={10} fill={axColor}>{v}</text>}
                </g>
              );
            })}
            {/* y 刻度 */}
            {yTicks.map(v => {
              const py = oy + v * sy;
              return (
                <g key={`yt-${v}`}>
                  <line x1={ox - 3} y1={py} x2={ox + 3} y2={py} stroke={axColor} strokeWidth={1} />
                  {showNumbers && <text x={ox - 8} y={py + 3} textAnchor="end" fontSize={10} fill={axColor}>{v}</text>}
                </g>
              );
            })}
            {/* 轴标签 */}
            <text x={xMaxPx + 2} y={oy + 14} fontSize={12} fill={axColor} fontStyle="italic">x</text>
            <text x={ox + 8} y={yMinPx - 2} fontSize={12} fill={axColor} fontStyle="italic">y</text>
            {/* 原点 O */}
            <text x={ox - 10} y={oy + 14} fontSize={11} fill={axColor} fontStyle="italic">O</text>
          </g>
        );
      })()}

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
        const color = e.color ?? strokeColor;
        const mid = `${markerId}-${color.replace('#', '')}`;
        return <line key={`e-${i}`} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke={color} strokeWidth={e.strokeWidth ?? 2}
          strokeDasharray={e.dashed ? '5 4' : undefined}
          markerEnd={(e.arrow === 'end' || e.arrow === 'both') ? `url(#${mid})` : undefined}
          markerStart={(e.arrow === 'start' || e.arrow === 'both') ? `url(#${mid})` : undefined} />;
      })}

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

      {/* 自由路径 */}
      {freePaths.map((p, i) => (
        <path key={`fp-${i}`} d={p.d} fill={p.fill ?? 'none'} fillOpacity={p.fillOpacity ?? 1}
          stroke={p.color ?? strokeColor} strokeWidth={p.strokeWidth ?? 2}
          strokeDasharray={p.dashed ? '5 4' : undefined} />
      ))}

      {/* 标注线 */}
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
    </svg>
  );
});
