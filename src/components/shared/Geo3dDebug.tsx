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
import { Geo3dSvg, type DiagramData, type Point3D } from './Geo3dSvg';

/* ── 全局调试开关 ── */
let _debug = false;
const _listeners = new Set<() => void>();
function _subscribe(cb: () => void) { _listeners.add(cb); return () => _listeners.delete(cb); }
function _getSnapshot() { return _debug; }
function _toggle() { _debug = !_debug; _listeners.forEach(l => l()); }

export function useGeo3dDebug() { return useSyncExternalStore(_subscribe, _getSnapshot); }

export function Geo3dDebugToggle() {
  const on = useGeo3dDebug();
  return (
    <button
      onClick={_toggle}
      className={`fixed bottom-4 right-16 z-50 px-3 py-2 rounded-full shadow-lg text-sm font-bold print:hidden transition-all ${
        on ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-gray-200 text-gray-500 hover:bg-gray-300 opacity-50 hover:opacity-100'
      }`}
    >
      {on ? '📐 3D ON' : '📐'}
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

/* ── 3D 旋转投影（自由视角） ── */
function project3D(p: Point3D, rotY: number, rotX: number): [number, number] {
  const [x, y, z] = p;
  const radY = (rotY * Math.PI) / 180;
  const radX = (rotX * Math.PI) / 180;
  const x1 = x * Math.cos(radY) - y * Math.sin(radY);
  const y1 = x * Math.sin(radY) + y * Math.cos(radY);
  const z2 = y1 * Math.sin(radX) + z * Math.cos(radX);
  return [x1, -z2];
}

/* ── 调试面板 ── */
function DebugPanel({ data, strokeColor, onClose, initialRotation }: {
  data: DiagramData;
  strokeColor: string;
  onClose: () => void;
  initialRotation?: { rotY: number; rotX: number };
}) {
  const [labelOffsets, setLabelOffsets] = useState<[number, number][]>(
    data.freeLabels.map(fl => [...(fl.offset ?? [0, 0])] as [number, number])
  );
  // 如果传入了 rotation，默认用 3D 模式并显示该角度
  const [useOblique, setUseOblique] = useState(!initialRotation);
  const [rotY, setRotY] = useState(initialRotation?.rotY ?? 45);
  const [rotX, setRotX] = useState(initialRotation?.rotX ?? 30);
  const svgRef = useRef<SVGSVGElement>(null);
  const dragRef = useRef<{ idx: number; startSvg: [number, number]; startOffset: [number, number] } | null>(null);
  const rotateRef = useRef<{ startX: number; startY: number; startRotY: number; startRotX: number } | null>(null);

  const doProject = (p: Point3D) => useOblique ? projectOblique(p) : project3D(p, rotY, rotX);
  const projected = data.vertices.map(v => doProject(v));

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
  const handleMouseDown = useCallback((idx: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const svgPt = screenToSvg(e.clientX, e.clientY);
    dragRef.current = { idx, startSvg: svgPt, startOffset: [...labelOffsets[idx]] as [number, number] };

    const onMove = (ev: MouseEvent) => {
      if (!dragRef.current) return;
      const cur = screenToSvg(ev.clientX, ev.clientY);
      const dx = cur[0] - dragRef.current.startSvg[0];
      const dy = cur[1] - dragRef.current.startSvg[1];
      setLabelOffsets(prev => {
        const next = [...prev];
        next[dragRef.current!.idx] = [
          Math.round(dragRef.current!.startOffset[0] + dx),
          Math.round(dragRef.current!.startOffset[1] + dy),
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

  // 生成可复制的代码
  const generateCopyText = () => {
    const lines: string[] = [
      `// 图: ${data.name || '未命名'}`,
      `// 视角: rotY=${Math.round(rotY)}°, rotX=${Math.round(rotX)}°`,
      '',
      'freeLabels: ['
    ];
    data.freeLabels.forEach((fl, i) => {
      const [ox, oy] = labelOffsets[i];
      const parts = [`pos: [${fl.pos.join(', ')}]`, `text: '${fl.text}'`, `offset: [${ox}, ${oy}]`];
      if (fl.fontSize) parts.push(`fontSize: ${fl.fontSize}`);
      if (fl.color) parts.push(`color: '${fl.color}'`);
      if (fl.dot !== undefined && fl.dot !== false) parts.push(`dot: ${typeof fl.dot === 'string' ? `'${fl.dot}'` : fl.dot}`);
      lines.push(`  { ${parts.join(', ')} },`);
    });
    lines.push('],');
    return lines.join('\n');
  };

  // 投影后的边
  const projEdges = data.edges.map(e => ({
    x1: projected[e.from][0], y1: projected[e.from][1],
    x2: projected[e.to][0], y2: projected[e.to][1],
    hidden: !!e.hidden, color: e.color, strokeWidth: e.strokeWidth,
  }));

  const svgW = Math.min(800, window.innerWidth - 40);
  const svgH = Math.min(500, window.innerHeight - 300);

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col print:hidden">
      {/* 顶栏 */}
      <div className="flex justify-between items-center px-4 py-2 border-b">
        <h3 className="font-bold text-lg">📐 Geo3D 调试</h3>
        <div className="flex items-center gap-4 text-sm">
          <button 
            onClick={() => setUseOblique(true)} 
            className={`text-xs px-2 py-0.5 rounded ${useOblique ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          >标准斜二测</button>
          <button 
            onClick={() => setUseOblique(false)} 
            className={`text-xs px-2 py-0.5 rounded ${!useOblique ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          >3D旋转</button>
          {!useOblique && (
            <span className="font-mono text-gray-500">Y:{Math.round(rotY)}° X:{Math.round(rotX)}° 拖拽旋转</span>
          )}
        </div>
        <button onClick={onClose} className="bg-red-500 text-white px-3 py-1 rounded text-sm font-bold">✕ 关闭</button>
      </div>

      {/* SVG 区域 */}
      <div 
        className={`flex-1 flex items-center justify-center bg-gray-50 overflow-hidden ${!useOblique ? 'cursor-grab active:cursor-grabbing' : ''}`}
        onMouseDown={(e) => {
          if (useOblique) return;  // 标准模式不拖拽旋转
          if ((e.target as HTMLElement).closest('circle[style*="cursor: grab"]')) return;
          rotateRef.current = { startX: e.clientX, startY: e.clientY, startRotY: rotY, startRotX: rotX };
          const onMove = (ev: MouseEvent) => {
            if (!rotateRef.current) return;
            const dx = ev.clientX - rotateRef.current.startX;
            const dy = ev.clientY - rotateRef.current.startY;
            setRotY(rotateRef.current.startRotY + dx * 0.5);
            setRotX(Math.max(-90, Math.min(90, rotateRef.current.startRotX - dy * 0.5)));
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

          {/* 顶点 + 索引 */}
          {projected.map(([px, py], i) => (
            <g key={`vd-${i}`}>
              <circle cx={px} cy={py} r={3} fill={strokeColor} />
              <text x={px + 2} y={py - 6} fontSize={9} fill="#ef4444" fontFamily="monospace" fontWeight="bold">{i}</text>
            </g>
          ))}

          {/* freeLabels：可拖拽 */}
          {data.freeLabels.map((fl, i) => {
            const [px, py] = doProject(fl.pos);
            const [ox, oy] = labelOffsets[i];
            const labelColor = fl.color ?? strokeColor;
            const dotColor = typeof fl.dot === 'string' ? fl.dot : (fl.dot ? labelColor : undefined);
            return (
              <g key={`fl-${i}`}>
                {/* 锚点到标签的引导线 */}
                <line x1={px} y1={py} x2={px + ox} y2={py + oy} stroke="#94a3b8" strokeWidth={0.5} strokeDasharray="2 2" />
                {dotColor && <circle cx={px} cy={py} r={3.5} fill={dotColor} />}
                <text x={px + ox} y={py + oy} textAnchor="middle" dominantBaseline="middle"
                  fontSize={fl.fontSize ?? 20} fontFamily="serif" fontStyle="italic" fontWeight="bold"
                  fill={labelColor}>{fl.text}</text>
                {/* 拖拽手柄 */}
                <circle cx={px + ox} cy={py + oy} r={8} fill="rgba(59,130,246,0.1)" stroke="#3b82f6"
                  strokeWidth={1.5} strokeDasharray="3 2" style={{ cursor: 'grab' }}
                  onMouseDown={(e) => handleMouseDown(i, e)} />
                {/* offset 数值 */}
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
        {/* 左：代码输出 */}
        <div className="flex-1 bg-gray-900 text-green-400 font-mono text-xs p-3 overflow-auto">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-500">freeLabels 坐标（拖拽标签调整 offset）</span>
            <button onClick={() => navigator.clipboard.writeText(generateCopyText())}
              className="bg-green-700 text-white px-2 py-0.5 rounded text-xs hover:bg-green-600">📋 复制</button>
          </div>
          <pre className="whitespace-pre-wrap select-all">{generateCopyText()}</pre>
        </div>
        {/* 右：顶点参考 */}
        <div className="w-72 border-l bg-gray-50 p-3 text-xs overflow-auto">
          <p className="font-bold text-gray-700 mb-2">顶点坐标（红色数字 = 索引）</p>
          {data.vertices.map((v, i) => {
            const [px, py] = projected[i];
            return (
              <p key={i} className="text-gray-600 font-mono">
                <span className="text-red-500 font-bold">{i}</span>: [{v.join(', ')}] → ({px.toFixed(1)}, {py.toFixed(1)})
              </p>
            );
          })}
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
  rotation?: { rotY: number; rotX: number };
}

export function DebugGeo3dSvg({ data, width = 160, height = 140, strokeColor = '#334155', className, rotation }: DebugGeo3dSvgProps) {
  const globalOn = useGeo3dDebug();
  const [debug, setDebug] = useState(false);

  if (debug) {
    return <DebugPanel data={data} strokeColor={strokeColor} onClose={() => setDebug(false)} initialRotation={rotation} />;
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
      <Geo3dSvg data={data} width={width} height={height} strokeColor={strokeColor} className={className} rotation={rotation} />
    </div>
  );
}
