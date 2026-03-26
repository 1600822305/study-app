/**
 * Geo2dDebug — Geo2dSvg 调试工具
 *
 * 用法：
 *   1. 在页面底部加 <Geo2dDebugToggle />
 *   2. <Geo2dSvg data={...}> 替换成 <DebugGeo2dSvg data={...}>
 *   3. 右下角出现 📏 按钮，点击开启调试模式
 *   4. 每个图出现 🛠 按钮，点击进入全屏调试
 *   5. 拖拽标签调整 offset，拖拽顶点调整坐标，复制数据
 */
import { useState, useRef, useCallback, useSyncExternalStore } from 'react';
import { Geo2dSvg, type Diagram2DData, type Point2D } from './Geo2dSvg';

/* ── 全局调试开关 ── */
let _debug2d = false;
const _listeners2d = new Set<() => void>();
function _subscribe2d(cb: () => void) { _listeners2d.add(cb); return () => _listeners2d.delete(cb); }
function _getSnapshot2d() { return _debug2d; }
function _toggle2d() { _debug2d = !_debug2d; _listeners2d.forEach(l => l()); }

export function useGeo2dDebug() { return useSyncExternalStore(_subscribe2d, _getSnapshot2d); }

export function Geo2dDebugToggle() {
  const on = useGeo2dDebug();
  return (
    <button
      onClick={_toggle2d}
      className={`fixed bottom-4 right-28 z-50 px-3 py-2 rounded-full shadow-lg text-sm font-bold print:hidden transition-all ${
        on ? 'bg-teal-500 text-white hover:bg-teal-600' : 'bg-gray-200 text-gray-500 hover:bg-gray-300 opacity-50 hover:opacity-100'
      }`}
    >
      {on ? '📏 2D ON' : '📏'}
    </button>
  );
}

/* ── 调试面板 ── */
function DebugPanel({ data, strokeColor, onClose }: {
  data: Diagram2DData;
  strokeColor: string;
  onClose: () => void;
}) {
  const [vertices, setVertices] = useState<Point2D[]>(
    data.vertices.map(v => [...v] as Point2D)
  );
  const [labelOffsets, setLabelOffsets] = useState<[number, number][]>(
    data.freeLabels.map(fl => [...(fl.offset ?? [0, 0])] as [number, number])
  );
  const svgRef = useRef<SVGSVGElement>(null);
  const dragRef = useRef<{
    type: 'label' | 'vertex';
    idx: number;
    startSvg: [number, number];
    startValue: [number, number];
  } | null>(null);

  // viewBox 计算
  const allX: number[] = [];
  const allY: number[] = [];
  vertices.forEach(([x, y]) => { allX.push(x); allY.push(y); });
  data.freeLabels.forEach((fl, i) => {
    const [ox, oy] = labelOffsets[i];
    allX.push(fl.pos[0] + ox);
    allY.push(fl.pos[1] + oy);
  });
  (data.circles ?? []).forEach(c => {
    allX.push(c.center[0] - c.radius, c.center[0] + c.radius);
    allY.push(c.center[1] - c.radius, c.center[1] + c.radius);
  });

  if (allX.length === 0) return null;

  const pad = 40;
  const xMin = Math.min(...allX) - pad;
  const yMin = Math.min(...allY) - pad;
  const vbW = Math.max(...allX) - Math.min(...allX) + pad * 2;
  const vbH = Math.max(...allY) - Math.min(...allY) + pad * 2;
  const viewBox = `${xMin} ${yMin} ${vbW} ${vbH}`;

  const screenToSvg = useCallback((clientX: number, clientY: number): [number, number] => {
    if (!svgRef.current) return [0, 0];
    const ctm = svgRef.current.getScreenCTM()?.inverse();
    if (!ctm) return [0, 0];
    const pt = new DOMPoint(clientX, clientY).matrixTransform(ctm);
    return [pt.x, pt.y];
  }, []);

  const handleMouseDown = useCallback((type: 'label' | 'vertex', idx: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const svgPt = screenToSvg(e.clientX, e.clientY);
    const startValue: [number, number] = type === 'label'
      ? [...labelOffsets[idx]] as [number, number]
      : [...vertices[idx]] as [number, number];
    dragRef.current = { type, idx, startSvg: svgPt, startValue };

    const onMove = (ev: MouseEvent) => {
      if (!dragRef.current) return;
      const cur = screenToSvg(ev.clientX, ev.clientY);
      const dx = cur[0] - dragRef.current.startSvg[0];
      const dy = cur[1] - dragRef.current.startSvg[1];

      if (dragRef.current.type === 'label') {
        setLabelOffsets(prev => {
          const next = [...prev];
          next[dragRef.current!.idx] = [
            Math.round(dragRef.current!.startValue[0] + dx),
            Math.round(dragRef.current!.startValue[1] + dy),
          ];
          return next;
        });
      } else {
        setVertices(prev => {
          const next = [...prev];
          next[dragRef.current!.idx] = [
            Math.round(dragRef.current!.startValue[0] + dx),
            Math.round(dragRef.current!.startValue[1] + dy),
          ];
          return next;
        });
      }
    };
    const onUp = () => {
      dragRef.current = null;
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  }, [screenToSvg, labelOffsets, vertices]);

  // 用当前拖拽的顶点构建临时 data
  const liveData: Diagram2DData = {
    ...data,
    vertices,
    freeLabels: data.freeLabels.map((fl, i) => ({
      ...fl,
      // 如果 freeLabel 引用了顶点坐标，用更新后的
      offset: labelOffsets[i],
    })),
  };

  const generateCopyText = () => {
    const lines: string[] = [
      `// 图: ${data.name || '未命名'}`,
      '',
      'vertices: [',
    ];
    vertices.forEach((v, i) => {
      lines.push(`  [${v[0]}, ${v[1]}],  // ${i}`);
    });
    lines.push('],');
    lines.push('');
    lines.push('freeLabels: [');
    data.freeLabels.forEach((fl, i) => {
      const [ox, oy] = labelOffsets[i];
      const parts = [`pos: [${fl.pos.join(', ')}]`, `text: '${fl.text}'`, `offset: [${ox}, ${oy}]`];
      if (fl.tex) parts.push(`tex: '${fl.tex}'`);
      if (fl.fontSize) parts.push(`fontSize: ${fl.fontSize}`);
      if (fl.color) parts.push(`color: '${fl.color}'`);
      if (fl.dot !== undefined && fl.dot !== false) parts.push(`dot: ${typeof fl.dot === 'string' ? `'${fl.dot}'` : fl.dot}`);
      lines.push(`  { ${parts.join(', ')} },`);
    });
    lines.push('],');
    return lines.join('\n');
  };

  const svgW = Math.min(800, window.innerWidth - 40);
  const svgH = Math.min(500, window.innerHeight - 300);

  // 角弧、tick、直角用 liveData 的 vertices
  const { edges, polygons, angleArcs = [], tickMarks = [], rightAngles = [], circles = [], arcs = [] } = liveData;

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col print:hidden">
      {/* 顶栏 */}
      <div className="flex justify-between items-center px-4 py-2 border-b">
        <h3 className="font-bold text-lg">📏 Geo2D 调试</h3>
        <div className="flex items-center gap-4 text-sm">
          <span className="font-mono text-gray-500">拖拽顶点/标签调整坐标</span>
        </div>
        <button onClick={onClose} className="bg-red-500 text-white px-3 py-1 rounded text-sm font-bold">✕ 关闭</button>
      </div>

      {/* SVG 区域 */}
      <div className="flex-1 flex items-center justify-center bg-gray-50 overflow-hidden">
        <svg ref={svgRef} width={svgW} height={svgH} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">

          {/* 网格（辅助） */}
          <defs>
            <pattern id="grid2d" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect x={xMin} y={yMin} width={vbW} height={vbH} fill="url(#grid2d)" />

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
            const x1 = cx + r * Math.cos(startRad);
            const y1 = cy + r * Math.sin(startRad);
            const x2 = cx + r * Math.cos(endRad);
            const y2 = cy + r * Math.sin(endRad);
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
            return (
              <line key={`e-${i}`} x1={x1} y1={y1} x2={x2} y2={y2}
                stroke={e.color ?? strokeColor} strokeWidth={e.strokeWidth ?? 2}
                strokeDasharray={e.dashed ? '5 4' : undefined} />
            );
          })}

          {/* 直角标记 */}
          {rightAngles.map((ra, i) => {
            const [vx, vy] = vertices[ra.vertex];
            const [ax, ay] = vertices[ra.from];
            const [bx, by] = vertices[ra.to];
            const size = ra.size ?? 10;
            const dx1 = ax - vx, dy1 = ay - vy;
            const len1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
            const dx2 = bx - vx, dy2 = by - vy;
            const len2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
            if (len1 === 0 || len2 === 0) return null;
            const ux1 = (dx1 / len1) * size, uy1 = (dy1 / len1) * size;
            const ux2 = (dx2 / len2) * size, uy2 = (dy2 / len2) * size;
            const d = `M ${vx + ux1} ${vy + uy1} L ${vx + ux1 + ux2} ${vy + uy1 + uy2} L ${vx + ux2} ${vy + uy2}`;
            return <path key={`ra-${i}`} d={d} fill="none" stroke={ra.color ?? strokeColor} strokeWidth={1.5} />;
          })}

          {/* 角弧 */}
          {angleArcs.map((arc, i) => {
            const [vx, vy] = vertices[arc.vertex];
            const [ax, ay] = vertices[arc.from];
            const [bx, by] = vertices[arc.to];
            const r = arc.radius ?? 15;
            const color = arc.color ?? strokeColor;
            const a1 = Math.atan2(ay - vy, ax - vx);
            const a2 = Math.atan2(by - vy, bx - vx);
            let start = a1, end = a2;
            let diff = end - start;
            if (diff < 0) diff += 2 * Math.PI;
            if (diff > Math.PI) { start = a2; end = a1; diff = 2 * Math.PI - diff; }
            const x1 = vx + r * Math.cos(start);
            const y1 = vy + r * Math.sin(start);
            const x2 = vx + r * Math.cos(end);
            const y2 = vy + r * Math.sin(end);
            const largeArc = diff > Math.PI ? 1 : 0;
            const arcD = `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2}`;
            const mid = start + (end - start < 0 ? end - start + 2 * Math.PI : end - start) / 2;
            const lx = vx + (r + 10) * Math.cos(mid);
            const ly = vy + (r + 10) * Math.sin(mid);
            return (
              <g key={`aa-${i}`}>
                <path d={arcD} fill="none" stroke={color} strokeWidth={1.2} />
                {arc.label && <text x={lx} y={ly} textAnchor="middle" dominantBaseline="middle" fontSize={12} fill={color}>{arc.label}</text>}
              </g>
            );
          })}

          {/* tick marks */}
          {tickMarks.map((tm, i) => {
            const [ax, ay] = vertices[tm.from];
            const [bx, by] = vertices[tm.to];
            const dx = bx - ax, dy = by - ay;
            const len = Math.sqrt(dx * dx + dy * dy);
            if (len === 0) return null;
            const nx = -dy / len, ny = dx / len;
            const tickLen = 6, gap = 4;
            const startOff = -((tm.count - 1) * gap) / 2;
            const mx = (ax + bx) / 2, my = (ay + by) / 2;
            return (
              <g key={`tm-${i}`}>
                {Array.from({ length: tm.count }, (_, j) => {
                  const offset = startOff + j * gap;
                  const cx = mx + (dx / len) * offset;
                  const cy = my + (dy / len) * offset;
                  return (
                    <line key={j}
                      x1={cx + nx * tickLen} y1={cy + ny * tickLen}
                      x2={cx - nx * tickLen} y2={cy - ny * tickLen}
                      stroke={tm.color ?? '#dc2626'} strokeWidth={1.5} />
                  );
                })}
              </g>
            );
          })}

          {/* 顶点 + 索引 + 拖拽手柄 */}
          {vertices.map(([px, py], i) => (
            <g key={`vd-${i}`}>
              <circle cx={px} cy={py} r={3} fill={strokeColor} />
              <text x={px + 4} y={py - 8} fontSize={9} fill="#ef4444" fontFamily="monospace" fontWeight="bold">{i}</text>
              {/* 拖拽手柄 */}
              <circle cx={px} cy={py} r={8} fill="rgba(239,68,68,0.1)" stroke="#ef4444"
                strokeWidth={1.5} strokeDasharray="3 2" style={{ cursor: 'grab' }}
                onMouseDown={(e) => handleMouseDown('vertex', i, e)} />
            </g>
          ))}

          {/* freeLabels + 拖拽手柄 */}
          {data.freeLabels.map((fl, i) => {
            const [px, py] = fl.pos;
            const [ox, oy] = labelOffsets[i];
            const labelColor = fl.color ?? strokeColor;
            const dotColor = typeof fl.dot === 'string' ? fl.dot : (fl.dot ? labelColor : undefined);
            return (
              <g key={`fl-${i}`}>
                <line x1={px} y1={py} x2={px + ox} y2={py + oy} stroke="#94a3b8" strokeWidth={0.5} strokeDasharray="2 2" />
                {dotColor && <circle cx={px} cy={py} r={3.5} fill={dotColor} />}
                {fl.tex ? (
                  <text x={px + ox} y={py + oy} textAnchor="middle" dominantBaseline="middle"
                    fontSize={fl.fontSize ?? 18} fontFamily="KaTeX_Math, serif" fontStyle="italic" fontWeight="bold"
                    fill={labelColor}>{fl.tex}</text>
                ) : (
                  <text x={px + ox} y={py + oy} textAnchor="middle" dominantBaseline="middle"
                    fontSize={fl.fontSize ?? 18} fontFamily="serif" fontStyle="italic" fontWeight="bold"
                    fill={labelColor}>{fl.text}</text>
                )}
                <circle cx={px + ox} cy={py + oy} r={8} fill="rgba(59,130,246,0.1)" stroke="#3b82f6"
                  strokeWidth={1.5} strokeDasharray="3 2" style={{ cursor: 'grab' }}
                  onMouseDown={(e) => handleMouseDown('label', i, e)} />
                <text x={px + ox + 12} y={py + oy + 4} fontSize={7} fill="#6b7280" fontFamily="monospace">
                  [{ox},{oy}]
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* 底部面板 */}
      <div className="border-t flex" style={{ height: '25vh' }}>
        <div className="flex-1 bg-gray-900 text-green-400 font-mono text-xs p-3 overflow-auto">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-500">vertices + freeLabels 坐标</span>
            <button onClick={() => navigator.clipboard.writeText(generateCopyText())}
              className="bg-green-700 text-white px-2 py-0.5 rounded text-xs hover:bg-green-600">📋 复制</button>
          </div>
          <pre className="whitespace-pre-wrap select-all">{generateCopyText()}</pre>
        </div>
        <div className="w-72 border-l bg-gray-50 p-3 text-xs overflow-auto">
          <p className="font-bold text-gray-700 mb-2">顶点坐标（红色数字 = 索引，可拖拽）</p>
          {vertices.map((v, i) => (
            <p key={i} className="text-gray-600 font-mono">
              <span className="text-red-500 font-bold">{i}</span>: [{v[0]}, {v[1]}]
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── DebugGeo2dSvg 包装器 ── */
interface DebugGeo2dSvgProps {
  data: Diagram2DData;
  width?: number;
  height?: number;
  strokeColor?: string;
  className?: string;
}

export function DebugGeo2dSvg({ data, width = 160, height = 140, strokeColor = '#334155', className }: DebugGeo2dSvgProps) {
  const globalOn = useGeo2dDebug();
  const [debug, setDebug] = useState(false);

  if (debug) {
    return <DebugPanel data={data} strokeColor={strokeColor} onClose={() => setDebug(false)} />;
  }

  return (
    <div className="relative inline-block">
      {globalOn && (
        <button
          onClick={() => setDebug(true)}
          className="absolute top-0 right-0 z-10 text-xs px-1 py-0.5 rounded bg-gray-200 text-gray-600 hover:bg-gray-300 print:hidden opacity-40 hover:opacity-100"
        >
          🛠
        </button>
      )}
      <Geo2dSvg data={data} width={width} height={height} strokeColor={strokeColor} className={className} />
    </div>
  );
}
