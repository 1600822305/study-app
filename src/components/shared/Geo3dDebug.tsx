/**
 * Geo3dDebug — Geo3dSvg 调试工具
 *
 * 用法：
 *   1. 在页面底部加 <Geo3dDebugToggle />
 *   2. <Geo3dSvg data={...}> 替换成 <DebugGeo3dSvg data={...}>
 *   3. 右下角出现 📐 按钮，点击开启调试模式
 *   4. 每个图出现 🛠 按钮，点击进入全屏调试
 *   5. 拖拽标签调整 offset，复制坐标数据
 */
import { useState, useRef, useCallback, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import { Geo3dSvg, type DiagramData, type Point3D } from './Geo3dSvg';
import { Math as MathTex } from './Math';

/* ── 全局调试开关 ── */
let _debug = false;
const _listeners = new Set<() => void>();
function _subscribe(cb: () => void) { _listeners.add(cb); return () => _listeners.delete(cb); }
function _getSnapshot() { return _debug; }
export function _toggle3d() { _debug = !_debug; _listeners.forEach(l => l()); }

export function useGeo3dDebug() { return useSyncExternalStore(_subscribe, _getSnapshot); }

export function Geo3dDebugToggle() {
  const on = useGeo3dDebug();
  return (
    <button
      onClick={_toggle3d}
      className={`fixed bottom-4 right-16 z-50 text-[11px] font-mono px-3 py-1.5 rounded-md shadow-md print:hidden transition-all border ${
        on
          ? 'bg-orange-500 text-white border-orange-400 hover:bg-orange-600'
          : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400 hover:text-slate-700 opacity-60 hover:opacity-100'
      }`}
    >
      📐 {on ? 'ON' : '3D'}
    </button>
  );
}

/* ── 标准斜二测投影（与 Geo3dSvg 一致） ── */
function projectOblique(p: Point3D): [number, number] {
  const [x, y, z] = p;
  const cos45 = Math.SQRT2 / 2;
  const scale_y = 0.5;
  return [x - y * cos45 * scale_y, -(z - y * cos45 * scale_y)];
}

/* ── JSXGraph-style parallel projection (azimuth + elevation) ── */
function projectParallel(p: Point3D, az: number, el: number): [number, number] {
  const [x, y, z] = p;
  const azRad = (az * Math.PI) / 180;
  const elRad = (el * Math.PI) / 180;
  const cosAz = Math.cos(azRad);
  const sinAz = Math.sin(azRad);
  const sinEl = Math.sin(elRad);
  const cosEl = Math.cos(elRad);
  const px = -cosAz * x + sinAz * y;
  const py = sinEl * sinAz * x + sinEl * cosAz * y - cosEl * z;
  return [px, py];
}

/* ── 2D屏幕位移 → 3D坐标变化（保持y不变） ── */
function screenDeltaTo3d_oblique(dpx: number, dpy: number): [number, number, number] {
  // oblique: px = x - y*cos45*0.5, py = -(z - y*cos45*0.5)
  // y fixed => dpx = dx, dpy = -dz
  return [dpx, 0, -dpy];
}
function screenDeltaTo3d_parallel(dpx: number, dpy: number, az: number, el: number): [number, number, number] {
  const azRad = (az * Math.PI) / 180;
  const elRad = (el * Math.PI) / 180;
  const cosAz = Math.cos(azRad);
  const sinAz = Math.sin(azRad);
  const sinEl = Math.sin(elRad);
  const cosEl = Math.cos(elRad);
  // px = -cosAz*x + sinAz*y, py = sinEl*sinAz*x + sinEl*cosAz*y - cosEl*z
  // y fixed => dpx = -cosAz*dx, dpy = sinEl*sinAz*dx - cosEl*dz
  const dx = Math.abs(cosAz) > 0.01 ? -dpx / cosAz : 0;
  const dz = Math.abs(cosEl) > 0.01 ? (sinEl * sinAz * dx - dpy) / cosEl : 0;
  return [dx, 0, dz];
}

/* ── 调试面板 ── */
function DebugPanel({ data, strokeColor, onClose, initialRotation, initW, initH }: {
  data: DiagramData;
  strokeColor: string;
  onClose: () => void;
  initialRotation?: { az: number; el: number };
  initW: number;
  initH: number;
}) {
  const [vertices, setVertices] = useState<Point3D[]>(
    data.vertices.map(v => [...v] as Point3D)
  );
  const [labelOffsets, setLabelOffsets] = useState<[number, number][]>(
    data.freeLabels.map(fl => [...(fl.offset ?? [0, 0])] as [number, number])
  );
  const [activeLabelIdx, setActiveLabelIdx] = useState<number | null>(null);
  const [showRings, setShowRings] = useState(false);
  // 如果传入了 rotation，默认用 3D 模式并显示该角度
  const [useOblique, setUseOblique] = useState(!initialRotation);
  const [az, setAz] = useState(initialRotation?.az ?? 63);
  const [el, setEl] = useState(initialRotation?.el ?? 46);
  const [previewW, setPreviewW] = useState(initW);
  const [previewH, setPreviewH] = useState(initH);
  const svgRef = useRef<SVGSVGElement>(null);
  const dragRef = useRef<{ type: 'label' | 'vertex'; idx: number; startSvg: [number, number]; startValue: [number, number] | Point3D } | null>(null);
  const rotateRef = useRef<{ startX: number; startY: number; startAz: number; startEl: number } | null>(null);

  const doProject = (p: Point3D) => useOblique ? projectOblique(p) : projectParallel(p, az, el);
  const projected = vertices.map(v => doProject(v));

  // 计算 viewBox（与 Geo3dSvg 一致）
  const allX: number[] = [];
  const allY: number[] = [];
  projected.forEach(([px, py]) => { allX.push(px); allY.push(py); });
  data.freeLabels.forEach((fl, i) => {
    const [px, py] = doProject(fl.pos);
    const [ox, oy] = labelOffsets[i];
    allX.push(px + ox); allY.push(py + oy);
  });

  if (allX.length === 0) return null;

  const pad = 30;
  const xMin = Math.min(...allX) - pad;
  const yMin = Math.min(...allY) - pad;
  const vbW = Math.max(...allX) - Math.min(...allX) + pad * 2;
  const vbH = Math.max(...allY) - Math.min(...allY) + pad * 2;
  const viewBox = `${xMin} ${yMin} ${vbW} ${vbH}`;

  // 屏幕坐标 → SVG 坐标
  const screenToSvg = useCallback((clientX: number, clientY: number): [number, number] => {
    if (!svgRef.current) return [0, 0];
    const ctm = svgRef.current.getScreenCTM()?.inverse();
    if (!ctm) return [0, 0];
    const pt = new DOMPoint(clientX, clientY).matrixTransform(ctm);
    return [pt.x, pt.y];
  }, []);

  // 拖拽标签
  const handleLabelMouseDown = useCallback((idx: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const svgPt = screenToSvg(e.clientX, e.clientY);
    dragRef.current = { type: 'label', idx, startSvg: svgPt, startValue: [...labelOffsets[idx]] as [number, number] };

    const onMove = (ev: MouseEvent) => {
      if (!dragRef.current || dragRef.current.type !== 'label') return;
      const cur = screenToSvg(ev.clientX, ev.clientY);
      const dx = cur[0] - dragRef.current.startSvg[0];
      const dy = cur[1] - dragRef.current.startSvg[1];
      const drag = dragRef.current;
      setLabelOffsets(prev => {
        const next = [...prev];
        next[drag.idx] = [
          Math.round((drag.startValue as [number, number])[0] + dx),
          Math.round((drag.startValue as [number, number])[1] + dy),
        ];
        return next;
      });
    };
    const onUp = () => {
      dragRef.current = null;
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  }, [screenToSvg, labelOffsets]);

  // 拖拽顶点
  const handleVertexMouseDown = useCallback((idx: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const svgPt = screenToSvg(e.clientX, e.clientY);
    dragRef.current = { type: 'vertex', idx, startSvg: svgPt, startValue: [...vertices[idx]] as Point3D };

    const onMove = (ev: MouseEvent) => {
      if (!dragRef.current || dragRef.current.type !== 'vertex') return;
      const cur = screenToSvg(ev.clientX, ev.clientY);
      const dpx = cur[0] - dragRef.current.startSvg[0];
      const dpy = cur[1] - dragRef.current.startSvg[1];
      const [d3x, , d3z] = useOblique
        ? screenDeltaTo3d_oblique(dpx, dpy)
        : screenDeltaTo3d_parallel(dpx, dpy, az, el);
      const start = dragRef.current.startValue as Point3D;
      setVertices(prev => {
        const next = [...prev];
        next[dragRef.current!.idx] = [
          Math.round(start[0] + d3x),
          start[1],
          Math.round(start[2] + d3z),
        ];
        return next;
      });
    };
    const onUp = () => {
      dragRef.current = null;
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  }, [screenToSvg, vertices, useOblique, az, el]);

  // 构建 liveData（用拖拽后的顶点）
  const liveData: DiagramData = {
    ...data,
    vertices,
    freeLabels: data.freeLabels.map((fl, i) => ({ ...fl, offset: labelOffsets[i] })),
  };

  // 生成可复制的代码
  const generateCopyText = () => {
    const lines: string[] = [
      `基于最新数据更新图表参数：`,
      `// 图: ${data.name || '未命名'}`,
      useOblique ? `// 视角: 斜二测` : `// 视角: az=${Math.round(az)}°, el=${Math.round(el)}°`,
      `// 输出尺寸: width=${previewW} height=${previewH}`,
      '',
      'vertices: [',
    ];
    vertices.forEach((v, i) => {
      lines.push(`  [${v[0]}, ${v[1]}, ${v[2]}],  // ${i}`);
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

  // 投影后的边（用 mutable vertices）
  const projEdges = data.edges.map(e => ({
    x1: projected[e.from][0], y1: projected[e.from][1],
    x2: projected[e.to][0], y2: projected[e.to][1],
    hidden: !!e.hidden, color: e.color, strokeWidth: e.strokeWidth,
    arrow: e.arrow,
  }));

  const svgW = Math.min(800, window.innerWidth - 40);
  const svgH = Math.min(500, window.innerHeight - 300);

  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col print:hidden">
      {/* 顶栏 */}
      <div className="h-10 shrink-0 flex items-center justify-between px-4 border-b border-slate-700 bg-slate-900">
        <div className="flex items-center gap-2.5">
          <span className="text-slate-300 text-xs font-mono font-semibold tracking-wide">Geo3D</span>
          {data.name && (
            <span className="text-[11px] font-mono bg-slate-700 text-slate-200 px-2 py-0.5 rounded">
              {data.name}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setUseOblique(true)}
            className={`text-[11px] px-2.5 py-1 rounded border transition-colors ${
              useOblique
                ? 'bg-blue-600 text-white border-blue-500'
                : 'bg-slate-800 text-slate-400 border-slate-600 hover:border-slate-400 hover:text-slate-200'
            }`}
          >斜二测</button>
          <button
            onClick={() => setUseOblique(false)}
            className={`text-[11px] px-2.5 py-1 rounded border transition-colors ${
              !useOblique
                ? 'bg-blue-600 text-white border-blue-500'
                : 'bg-slate-800 text-slate-400 border-slate-600 hover:border-slate-400 hover:text-slate-200'
            }`}
          >3D旋转</button>
          {!useOblique && (
            <span className="text-[11px] font-mono text-slate-500">az:{Math.round(az)}° el:{Math.round(el)}°</span>
          )}
          <button
            onClick={() => setShowRings(r => !r)}
            className={`text-[10px] font-mono px-2 py-0.5 rounded border transition-colors ${
              showRings
                ? 'border-teal-500 bg-teal-600 text-white hover:bg-teal-500'
                : 'border-slate-600 bg-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            {showRings ? '⭕ 环' : '○ 环'}
          </button>
        </div>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white text-xs px-3 py-1 rounded border border-slate-700 hover:border-slate-500 hover:bg-slate-700 transition-colors"
        >
          关闭
        </button>
      </div>

      {/* SVG 区域 */}
      <div 
        className={`flex-1 flex items-center justify-center bg-white overflow-hidden relative ${!useOblique ? 'cursor-grab active:cursor-grabbing' : ''}`}
        onMouseDown={(e) => {
          if (useOblique) return;  // 标准模式不拖拽旋转
          if ((e.target as HTMLElement).closest('circle[style*="cursor: grab"]')) return;
          rotateRef.current = { startX: e.clientX, startY: e.clientY, startAz: az, startEl: el };
          const onMove = (ev: MouseEvent) => {
            if (!rotateRef.current) return;
            const dx = ev.clientX - rotateRef.current.startX;
            const dy = ev.clientY - rotateRef.current.startY;
            setAz(rotateRef.current.startAz + dx * 0.5);
            setEl(Math.max(0, Math.min(90, rotateRef.current.startEl - dy * 0.5)));
          };
          const onUp = () => {
            rotateRef.current = null;
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseup', onUp);
          };
          window.addEventListener('mousemove', onMove);
          window.addEventListener('mouseup', onUp);
        }}
      >
        {/* 尺寸预览浮层 - 左上角 */}
        <div className="absolute top-2 left-2 z-10 bg-white border border-slate-200 rounded-lg shadow-md p-2 text-xs" style={{ minWidth: 200 }}>
          <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1.5">输出尺寸预览</p>
          <div className="grid grid-cols-2 gap-x-2 gap-y-1 mb-2">
            {([['宽W', previewW, setPreviewW], ['高H', previewH, setPreviewH]] as const).map(([label, val, setter]) => (
              <div key={label} className="flex items-center gap-1">
                <label className="text-slate-400 w-10 shrink-0">{label}</label>
                <input type="number" value={val} min={40} max={600}
                  onChange={e => (setter as (v: number) => void)(Number(e.target.value))}
                  className="w-14 border border-slate-200 rounded px-1 py-0.5 font-mono text-xs text-slate-700" />
              </div>
            ))}
          </div>
          <div className="border border-dashed border-slate-300 inline-block overflow-hidden" style={{ width: previewW, height: previewH }}>
            <Geo3dSvg data={liveData} width={previewW} height={previewH} strokeColor={strokeColor} rotation={useOblique ? undefined : { az, el }} />
          </div>
        </div>
        {/* 标签面板浮层 - 右上角 */}
        <div className="absolute top-2 right-2 z-10 bg-white border border-slate-200 rounded-lg shadow-md p-2 text-xs" style={{ minWidth: 180 }}>
          <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1.5">标签 <span className="normal-case text-slate-300">点击激活可拖</span></p>
          <div className="space-y-1">
            {data.freeLabels.map((fl, i) => {
              const [ox, oy] = labelOffsets[i];
              const isActive = activeLabelIdx === i;
              return (
                <div key={i}
                  onClick={() => setActiveLabelIdx(isActive ? null : i)}
                  className={`flex items-center gap-1.5 rounded px-1.5 py-1 cursor-pointer transition-colors ${
                    isActive ? 'bg-blue-50 ring-1 ring-blue-300' : 'hover:bg-slate-50'
                  }`}
                >
                  <span className={`w-4 h-4 rounded text-[10px] font-bold flex items-center justify-center shrink-0 ${
                    isActive ? 'bg-blue-500 text-white' : 'bg-blue-50 text-blue-500'
                  }`}>{i}</span>
                  <span className={`flex-1 truncate font-mono text-[11px] ${
                    isActive ? 'text-blue-700 font-semibold' : 'text-slate-600'
                  }`}>{fl.tex ?? fl.text ?? '?'}</span>
                  <span className="text-[10px] font-mono text-slate-400">[{ox},{oy}]</span>
                </div>
              );
            })}
          </div>
        </div>
        <svg ref={svgRef} width={svgW} height={svgH} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
          {/* 填充多边形 */}
          {data.polygons.map((p, i) => {
            const pts = p.points.map(idx => projected[idx]);
            const d = pts.map(([x, y], j) => `${j === 0 ? 'M' : 'L'} ${x} ${y}`).join(' ') + ' Z';
            return <path key={`pg-${i}`} d={d} fill={p.fill} opacity={p.opacity} />;
          })}

          {/* 隐藏边（虚线） */}
          {projEdges.filter(e => e.hidden).map((e, i) => (
            <line key={`h-${i}`} x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2}
              stroke={e.color ?? strokeColor} strokeWidth={e.strokeWidth ?? 1}
              strokeDasharray="4 3" opacity={e.color ? 0.7 : 0.4} />
          ))}

          {/* 可见边 */}
          {projEdges.filter(e => !e.hidden).map((e, i) => (
            <line key={`v-${i}`} x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2}
              stroke={e.color ?? strokeColor} strokeWidth={e.strokeWidth ?? 1.5} />
          ))}

          {/* 非激活标签（底层，不拦截鼠标） */}
          {data.freeLabels.map((fl, i) => {
            if (i === activeLabelIdx) return null;
            const [px, py] = doProject(fl.pos);
            const [ox, oy] = labelOffsets[i];
            const labelColor = fl.color ?? strokeColor;
            const dotColor = typeof fl.dot === 'string' ? fl.dot : (fl.dot ? labelColor : undefined);
            return (
              <g key={`fl-${i}`} style={{ pointerEvents: 'none' }}>
                <line x1={px} y1={py} x2={px + ox} y2={py + oy} stroke="#94a3b8" strokeWidth={0.5} strokeDasharray="2 2" />
                {dotColor && <circle cx={px} cy={py} r={3.5} fill={dotColor} />}
                {fl.tex ? (
                  <foreignObject x={px + ox - 60} y={py + oy - 15} width={120} height={30} style={{ overflow: 'visible', pointerEvents: 'none' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', fontSize: fl.fontSize ?? 16, color: labelColor, whiteSpace: 'nowrap', pointerEvents: 'none' }}>
                      <MathTex tex={fl.tex} />
                    </div>
                  </foreignObject>
                ) : (
                  <text x={px + ox} y={py + oy} textAnchor="middle" dominantBaseline="middle"
                    fontSize={fl.fontSize ?? 20} fontFamily="serif" fontStyle="italic" fontWeight="bold"
                    fill={labelColor}>{fl.text}</text>
                )}
                {showRings && <>
                  <circle cx={px + ox} cy={py + oy} r={8} fill="rgba(59,130,246,0.08)" stroke="#3b82f6"
                    strokeWidth={1} strokeDasharray="3 2" />
                  <text x={px + ox + 12} y={py + oy + 4} fontSize={7} fill="#6b7280" fontFamily="monospace">
                    [{ox},{oy}]
                  </text>
                </>}
              </g>
            );
          })}

          {/* 顶点手柄（中层，可拖拽） */}
          {projected.map(([px, py], i) => (
            <g key={`vd-${i}`}>
              <circle cx={px} cy={py} r={3} fill={strokeColor} />
              {showRings && <text x={px + 4} y={py - 8} fontSize={9} fill="#ef4444" fontFamily="monospace" fontWeight="bold">{i}</text>}
              <circle cx={px} cy={py} r={8} fill={showRings ? 'rgba(239,68,68,0.1)' : 'transparent'} stroke={showRings ? '#ef4444' : 'transparent'}
                strokeWidth={1.5} strokeDasharray="3 2" style={{ cursor: 'grab' }}
                onMouseDown={(e) => handleVertexMouseDown(i, e)} />
            </g>
          ))}

          {/* 激活标签（最顶层，始终可拖） */}
          {activeLabelIdx !== null && (() => {
            const i = activeLabelIdx;
            const fl = data.freeLabels[i];
            const [px, py] = doProject(fl.pos);
            const [ox, oy] = labelOffsets[i];
            const labelColor = fl.color ?? strokeColor;
            const dotColor = typeof fl.dot === 'string' ? fl.dot : (fl.dot ? labelColor : undefined);
            return (
              <g key={`fl-active-${i}`}>
                <line x1={px} y1={py} x2={px + ox} y2={py + oy} stroke="#3b82f6" strokeWidth={1} strokeDasharray="2 2" />
                {dotColor && <circle cx={px} cy={py} r={3.5} fill={dotColor} />}
                {fl.tex ? (
                  <foreignObject x={px + ox - 60} y={py + oy - 15} width={120} height={30} style={{ overflow: 'visible' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', fontSize: fl.fontSize ?? 16, color: labelColor, whiteSpace: 'nowrap' }}>
                      <MathTex tex={fl.tex} />
                    </div>
                  </foreignObject>
                ) : (
                  <text x={px + ox} y={py + oy} textAnchor="middle" dominantBaseline="middle"
                    fontSize={fl.fontSize ?? 20} fontFamily="serif" fontStyle="italic" fontWeight="bold"
                    fill={labelColor}>{fl.text}</text>
                )}
                <circle cx={px + ox} cy={py + oy} r={10} fill="rgba(59,130,246,0.2)" stroke="#3b82f6"
                  strokeWidth={2} style={{ cursor: 'grab' }}
                  onMouseDown={(e) => handleLabelMouseDown(i, e)} />
                <text x={px + ox + 13} y={py + oy + 4} fontSize={7} fill="#3b82f6" fontFamily="monospace" fontWeight="bold">
                  [{ox},{oy}]
                </text>
              </g>
            );
          })()}
        </svg>
      </div>

      {/* 底部面板 */}
      <div className="border-t border-slate-200 flex shrink-0" style={{ height: '28vh', minHeight: 160 }}>
        {/* 左：代码输出 */}
        <div className="flex-1 bg-slate-950 text-emerald-400 font-mono text-xs p-3 overflow-auto flex flex-col gap-2">
          <div className="flex items-center justify-between shrink-0">
            <span className="text-[10px] uppercase tracking-widest text-slate-500">output</span>
            <button
              onClick={() => navigator.clipboard.writeText(generateCopyText())}
              className="text-[10px] px-2.5 py-1 rounded border border-emerald-800 bg-emerald-950 text-emerald-400 hover:bg-emerald-900 hover:text-emerald-300 transition-colors"
            >
              复制
            </button>
          </div>
          <pre className="whitespace-pre-wrap select-all leading-relaxed">{generateCopyText()}</pre>
        </div>
        {/* 右：顶点 */}
        <div className="w-60 border-l border-slate-100 bg-white flex flex-col overflow-hidden text-xs">
          <div className="px-3 pt-3 pb-2 border-b border-slate-100 shrink-0">
            <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-2">顶点 <span className="normal-case text-slate-300">拖拽调整 x,z（y 不变）</span></p>
            <div className="space-y-0.5 overflow-auto">
              {vertices.map((v, i) => (
                <div key={i} className="flex items-center gap-2 font-mono">
                  <span className="w-4 h-4 rounded text-[10px] font-bold bg-red-50 text-red-500 flex items-center justify-center shrink-0">{i}</span>
                  <span className="text-slate-500">[{v[0]}, {v[1]}, {v[2]}]</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── DebugGeo3dSvg 包装器 ── */
interface DebugGeo3dSvgProps {
  data: DiagramData;
  width?: number;
  height?: number;
  strokeColor?: string;
  className?: string;
  rotation?: { az: number; el: number };
}

export function DebugGeo3dSvg({ data, width = 160, height = 140, strokeColor = '#334155', className, rotation }: DebugGeo3dSvgProps) {
  const globalOn = useGeo3dDebug();
  const [debug, setDebug] = useState(false);

  if (debug) {
    return createPortal(
      <DebugPanel data={data} strokeColor={strokeColor} onClose={() => setDebug(false)} initialRotation={rotation} initW={width} initH={height} />,
      document.body,
    );
  }

  return (
    <div className={`relative inline-block${globalOn ? ' outline outline-1 outline-dashed outline-teal-400' : ''}`}>
      {globalOn && (
        <button
          onClick={() => setDebug(true)}
          className="absolute top-0 right-0 z-10 text-xs px-1 py-0.5 rounded bg-gray-200 text-gray-600 hover:bg-gray-300 print:hidden opacity-40 hover:opacity-100"
        >
          🛠
        </button>
      )}
      <Geo3dSvg data={data} width={width} height={height} strokeColor={strokeColor} className={className} rotation={rotation} />
    </div>
  );
}
