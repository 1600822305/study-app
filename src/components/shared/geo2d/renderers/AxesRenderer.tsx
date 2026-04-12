import { Math as MathTex } from '../../Math';
import type { CoordinateSystem2D, Axes2D, NumberLineRay, NumberLineCap } from '../types';

interface AxesRendererProps {
  cs: CoordinateSystem2D;
  axes: Axes2D;
  strokeColor: string;
  markerId: string;
  rays?: NumberLineRay[];
  caps?: NumberLineCap[];
}

export function AxesRenderer({ cs, axes, strokeColor, markerId, rays = [], caps = [] }: AxesRendererProps) {
  const axColor = axes.color ?? strokeColor;
  const step = axes.step ?? 1;
  const showNumbers = axes.showNumbers !== false;
  const showGrid = axes.showGrid ?? false;
  const showOriginLabel = axes.showOriginLabel !== false;
  const showXAxis = axes.showXAxis !== false;
  const showYAxis = axes.showYAxis !== false;
  const tickFW = axes.tickFontWeight ?? 'normal';
  const tickFill = axes.tickColor ?? axColor;
  const [ox, oy] = cs.origin;
  const [sx, sy] = cs.scale;
  // 轴线像素范围（延伸到刻度外半格）
  const xMinPx = ox + axes.xRange[0] * sx - 8;
  const xMaxPx = ox + axes.xRange[1] * sx + 8;
  const yMinPx = oy + axes.yRange[1] * sy - 8;  // yRange[1] 是最大值，sy 为负所以像素最小
  const yMaxPx = oy + axes.yRange[0] * sy + 8;
  // 刻度
  const xTicks: number[] = axes.xTicks ?? (() => {
    const arr: number[] = [];
    for (let v = Math.ceil(axes.xRange[0] / step) * step; v <= axes.xRange[1]; v += step) {
      if (Math.abs(v) > 0.001 || !showOriginLabel) arr.push(v);
    }
    return arr;
  })();
  const yTicks: number[] = axes.yTicks ?? (() => {
    const arr: number[] = [];
    for (let v = Math.ceil(axes.yRange[0] / step) * step; v <= axes.yRange[1]; v += step) {
      if (Math.abs(v) > 0.001) arr.push(v);
    }
    return arr;
  })();
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
      {showXAxis && <line x1={xMinPx} y1={oy} x2={xMaxPx} y2={oy} stroke={axColor} strokeWidth={2} markerEnd={`url(#${axMid})`} />}
      {/* y 轴 */}
      {showYAxis && <line x1={ox} y1={yMaxPx} x2={ox} y2={yMinPx} stroke={axColor} strokeWidth={2} markerEnd={`url(#${axMid})`} />}
      {/* x 刻度 */}
      {showXAxis && xTicks.map(v => {
        const px = ox + v * sx;
        const xts = axes.xTickSide ?? 'both';
        const ty1 = xts === 'down' ? oy : oy - 5;
        const ty2 = xts === 'up' ? oy : oy + 5;
        return (
          <g key={`xt-${v}`}>
            <line x1={px} y1={ty1} x2={px} y2={ty2} stroke={axColor} strokeWidth={1.5} />
            {showNumbers && (() => {
              const label = axes.xTickLabels?.[v] ?? String(v);
              return (
                <foreignObject x={px - 20} y={oy + 4} width={40} height={22} style={{ overflow: 'visible' }}>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', color: tickFill, fontWeight: tickFW as any }}>
                    <MathTex tex={label} />
                  </div>
                </foreignObject>
              );
            })()}
          </g>
        );
      })}
      {/* y 刻度 */}
      {showYAxis && yTicks.map(v => {
        const py = oy + v * sy;
        return (
          <g key={`yt-${v}`}>
            <line x1={ox - 3} y1={py} x2={ox + 3} y2={py} stroke={axColor} strokeWidth={1} />
            {showNumbers && <text x={ox - 8} y={py + 3} textAnchor="end" fontSize={10} fill={tickFill} fontWeight={tickFW}>{v}</text>}
          </g>
        );
      })}
      {/* 轴标签 */}
      {showXAxis && <text x={xMaxPx + 2} y={oy + 14} fontSize={12} fill={axColor} fontStyle="italic">x</text>}
      {showYAxis && <text x={ox + 8} y={yMinPx - 2} fontSize={12} fill={axColor} fontStyle="italic">y</text>}
      {/* 原点 O */}
      {showOriginLabel && <text x={ox - 10} y={oy + 14} fontSize={11} fill={axColor} fontStyle="italic">O</text>}
      {/* 倒 L 形射线 */}
      {rays.map((ray, i) => {
        const color = ray.color ?? '#dc2626';
        const rise = ray.dropHeight ?? 18;
        const px = ox + ray.x * sx;           // 起点 x 像素
        const topY = oy - rise;               // 垂直上升终点
        const botY = oy;                       // 数轴 y 像素
        const isLeft = ray.direction === 'left';
        const endX = isLeft ? xMinPx - 6 : xMaxPx + 6;  // 箭头终点（超出轴线一点）
        const rayMid = `${markerId}-ray-${i}`;
        const r = 3.5;                         // 圆点半径
        return (
          <g key={`ray-${i}`}>
            {/* 射线箭头 marker */}
            <defs>
              <marker id={rayMid} viewBox="0 0 10 6" refX="10" refY="3" markerWidth="7" markerHeight="5" orient="auto-start-reverse">
                <path d="M 0 0 L 10 3 L 0 6 Z" fill={color} />
              </marker>
            </defs>
            {/* 垂直上升线 */}
            <line x1={px} y1={botY} x2={px} y2={topY} stroke={color} strokeWidth={1.8} />
            {/* 水平射线（从顶部发出） */}
            <line x1={px} y1={topY} x2={endX} y2={topY} stroke={color} strokeWidth={1.8} markerEnd={`url(#${rayMid})`} />
            {/* 起点圆（空心 = 开区间，实心 = 闭区间） */}
            <circle cx={px} cy={botY} r={r} fill={ray.open ? 'white' : color} stroke={color} strokeWidth={1.8} />
          </g>
        );
      })}
      {/* 盖帽线段（区间） */}
      {caps.map((cap, i) => {
        const color = cap.color ?? '#dc2626';
        const rise = cap.riseHeight ?? 18;
        const pxL = ox + cap.from * sx;
        const pxR = ox + cap.to * sx;
        const topY = oy - rise;
        const r = 3.5;
        return (
          <g key={`cap-${i}`}>
            {/* 左侧垂直上升 */}
            <line x1={pxL} y1={oy} x2={pxL} y2={topY} stroke={color} strokeWidth={1.8} />
            {/* 顶部水平连线 */}
            <line x1={pxL} y1={topY} x2={pxR} y2={topY} stroke={color} strokeWidth={1.8} />
            {/* 右侧垂直下降 */}
            <line x1={pxR} y1={topY} x2={pxR} y2={oy} stroke={color} strokeWidth={1.8} />
            {/* 左端点圆 */}
            <circle cx={pxL} cy={oy} r={r} fill={cap.openFrom ? 'white' : color} stroke={color} strokeWidth={1.8} />
            {/* 右端点圆 */}
            <circle cx={pxR} cy={oy} r={r} fill={cap.openTo ? 'white' : color} stroke={color} strokeWidth={1.8} />
          </g>
        );
      })}
    </g>
  );
}
