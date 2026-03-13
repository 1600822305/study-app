/**
 * DebugMafs 调试系统 — 通用 Mafs 标签位置调试工具
 *
 * 用法：
 *   1. <Mafs> 替换成 <DebugMafs>
 *   2. <MafsText> 替换成 <DText>
 *   3. <LaTeX> 替换成 <DLatex>
 *   4. 右上角出现 🛠 按钮，点击打开半屏调试
 *   5. 拖拽标签到目标位置，点击选中可编辑属性
 *   6. 复制坐标数据发给我即可
 */
import { createContext, useContext, useState, useRef, useCallback, useEffect, useId, useSyncExternalStore, type ReactNode, type ComponentProps } from 'react';
import { Mafs, useMovablePoint, Text as MafsText, LaTeX as MafsLaTeX } from 'mafs';

/* ── 全局调试开关 ── */
let _debugGlobal = false;
const _listeners = new Set<() => void>();
function _subscribe(cb: () => void) { _listeners.add(cb); return () => _listeners.delete(cb); }
function _getSnapshot() { return _debugGlobal; }
function _toggle() { _debugGlobal = !_debugGlobal; _listeners.forEach(l => l()); }

export function useDebugEnabled() { return useSyncExternalStore(_subscribe, _getSnapshot); }

export function DebugToggle() {
  const on = useDebugEnabled();
  return (
    <button
      onClick={_toggle}
      className={`fixed bottom-4 right-4 z-50 px-3 py-2 rounded-full shadow-lg text-sm font-bold print:hidden transition-all ${
        on ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-gray-200 text-gray-500 hover:bg-gray-300 opacity-50 hover:opacity-100'
      }`}
    >
      {on ? '🛠 调试 ON' : '🛠'}
    </button>
  );
}

/* ── 类型 ── */
interface LabelInfo {
  label: string;
  type: 'text' | 'latex';
  x: number;
  y: number;
  size: number;
  color: string;
}
type RegisterFn = (id: string, info: LabelInfo) => void;
type SelectFn = (id: string) => void;
type OverrideMap = Map<string, { size?: number; color?: string; scale?: number }>;

/* ── 上下文 ── */
export const MafsDebugCtx = createContext(false);
const DebugRegisterCtx = createContext<RegisterFn | null>(null);
const DebugSelectCtx = createContext<SelectFn | null>(null);
const DebugSelectedCtx = createContext<string | null>(null);
const DebugOverrideCtx = createContext<OverrideMap>(new Map());

/* ── 辅助：LaTeX → 可读名 ── */
function texToName(s: string) {
  return s
    .replace(/\\frac\{\\pi\}\{2\}/g, 'π/2')
    .replace(/\\frac\{3\\pi\}\{2\}/g, '3π/2')
    .replace(/\\frac\{\\pi\}\{(\d+)\}/g, 'π/$1')
    .replace(/\\pi/g, 'π');
}

/* ── 调试面板 ── */
function DebugPanel({ mafsProps, onClose, children, origWidth }: {
  mafsProps: ComponentProps<typeof Mafs>;
  onClose: () => void;
  children: ReactNode;
  origWidth: number;
}) {
  const posRef = useRef<Map<string, LabelInfo>>(new Map());
  const [snapshot, setSnapshot] = useState('');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedInfo, setSelectedInfo] = useState<LabelInfo | null>(null);
  const [overrides, setOverrides] = useState<OverrideMap>(new Map());

  const origVB = mafsProps.viewBox as { x: [number, number]; y: [number, number] } | undefined;
  const [zoom, setZoom] = useState(1);
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);

  const vb = origVB ? {
    x: [origVB.x[0] / zoom + panX, origVB.x[1] / zoom + panX] as [number, number],
    y: [origVB.y[0] / zoom + panY, origVB.y[1] / zoom + panY] as [number, number],
  } : undefined;

  const register: RegisterFn = useCallback((id, info) => {
    posRef.current.set(id, info);
  }, []);

  const select: SelectFn = useCallback((id) => {
    setSelectedId(id);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      const entries = Array.from(posRef.current.entries());
      const viewLine = (zoom !== 1 || panX !== 0 || panY !== 0)
        ? `[视图] 缩放=${zoom.toFixed(1)}x 水平=${panX.toFixed(1)} 垂直=${panY.toFixed(1)}\n---\n`
        : '';
      const lines = entries
        .map(([id, p]) => {
          const name = texToName(p.label);
          const ov = overrides.get(id);
          const sizeStr = ov?.size ? ` size={${ov.size}}` : (p.size ? ` size={${p.size}}` : '');
          const colorStr = ov?.color ? ` color="${ov.color}"` : (p.color ? ` color="${p.color}"` : '');
          return `"${name}" → x={${p.x.toFixed(2)}} y={${p.y.toFixed(2)}}${sizeStr}${colorStr}`;
        })
        .join('\n');
      setSnapshot(viewLine + lines);
      if (selectedId) {
        const info = posRef.current.get(selectedId);
        if (info) setSelectedInfo({ ...info });
      }
    }, 300);
    return () => clearInterval(t);
  }, [selectedId, overrides, zoom, panX, panY]);

  const handleCopy = () => { navigator.clipboard.writeText(snapshot); };
  const handleReset = () => { setZoom(1); setPanX(0); setPanY(0); };

  const updateOverride = (key: 'size' | 'color' | 'scale', value: number | string) => {
    if (!selectedId) return;
    setOverrides(prev => {
      const next = new Map(prev);
      const cur = next.get(selectedId) || {};
      next.set(selectedId, { ...cur, [key]: value });
      return next;
    });
  };

  const curOverride = selectedId ? overrides.get(selectedId) : null;

  return (
    <DebugRegisterCtx.Provider value={register}>
    <DebugSelectCtx.Provider value={select}>
    <DebugSelectedCtx.Provider value={selectedId}>
    <DebugOverrideCtx.Provider value={overrides}>
      <div className="fixed inset-0 z-50 bg-white flex flex-col print:hidden">
        {/* 顶栏 */}
        <div className="flex justify-between items-center px-4 py-2 border-b">
          <h3 className="font-bold">🛠 调试模式</h3>
          <div className="flex items-center gap-3">
            <button onClick={handleReset} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs hover:bg-gray-300">↺ 重置视图</button>
            <button onClick={onClose} className="bg-red-500 text-white px-3 py-1 rounded text-sm font-bold">✕ 关闭</button>
          </div>
        </div>

        {/* 控制栏 */}
        <div className="flex items-center gap-4 px-4 py-1.5 border-b bg-gray-50 text-sm">
          <label className="flex items-center gap-2">
            <span className="text-gray-600 w-8">缩放</span>
            <input type="range" min="0.3" max="3" step="0.1" value={zoom} onChange={e => setZoom(+e.target.value)} className="w-28" />
            <span className="text-gray-500 w-10 font-mono">{zoom.toFixed(1)}x</span>
          </label>
          <label className="flex items-center gap-2">
            <span className="text-gray-600 w-10">水平移</span>
            <input type="range" min="-5" max="5" step="0.1" value={panX} onChange={e => setPanX(+e.target.value)} className="w-24" />
            <span className="text-gray-500 w-10 font-mono">{panX.toFixed(1)}</span>
          </label>
          <label className="flex items-center gap-2">
            <span className="text-gray-600 w-10">垂直移</span>
            <input type="range" min="-3" max="3" step="0.1" value={panY} onChange={e => setPanY(+e.target.value)} className="w-24" />
            <span className="text-gray-500 w-10 font-mono">{panY.toFixed(1)}</span>
          </label>
        </div>

        {/* 图表 — 保持与正常模式相同的宽高，支持拖拽平移 */}
        <div
          style={{ overflow: 'hidden', width: origWidth || '100%', margin: '0 auto', cursor: 'grab' }}
          onMouseDown={e => {
            if (e.button !== 0) return;
            const startX = e.clientX, startY = e.clientY;
            const startPanX = panX, startPanY = panY;
            const xRange = origVB ? (origVB.x[1] - origVB.x[0]) / zoom : 8;
            const yRange = origVB ? (origVB.y[1] - origVB.y[0]) / zoom : 4;
            const w = (e.currentTarget as HTMLElement).offsetWidth;
            const h = (e.currentTarget as HTMLElement).offsetHeight;
            const el = e.currentTarget as HTMLElement;
            el.style.cursor = 'grabbing';
            const onMove = (ev: MouseEvent) => {
              const dx = ev.clientX - startX;
              const dy = ev.clientY - startY;
              setPanX(startPanX - (dx / w) * xRange);
              setPanY(startPanY + (dy / h) * yRange);
            };
            const onUp = () => {
              el.style.cursor = 'grab';
              window.removeEventListener('mousemove', onMove);
              window.removeEventListener('mouseup', onUp);
            };
            window.addEventListener('mousemove', onMove);
            window.addEventListener('mouseup', onUp);
          }}
          onWheel={e => {
            e.preventDefault();
            setZoom(z => Math.max(0.3, Math.min(3, z * (e.deltaY < 0 ? 1.1 : 0.9))));
          }}
        >
          <Mafs {...mafsProps} viewBox={vb} width={origWidth || undefined}>
            {children}
          </Mafs>
        </div>

        {/* 底部面板：坐标 + 属性编辑 */}
        <div className="border-t flex" style={{ height: '35vh' }}>
          {/* 左：坐标列表 */}
          <div className="flex-1 bg-gray-900 text-green-400 font-mono text-xs p-3 overflow-auto">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-500">实时坐标</span>
              <button onClick={handleCopy} className="bg-green-700 text-white px-2 py-0.5 rounded text-xs hover:bg-green-600">📋 复制</button>
            </div>
            <pre className="whitespace-pre-wrap select-all">{snapshot || '拖拽标签后显示...'}</pre>
          </div>

          {/* 右：属性编辑面板 */}
          <div className="w-64 border-l bg-gray-50 p-3 text-sm overflow-auto">
            {selectedInfo ? (
              <>
                <p className="font-bold mb-2 text-gray-800">✏️ {texToName(selectedInfo.label)}</p>
                <div className="space-y-2">
                  {selectedInfo.type === 'text' ? (
                  <label className="flex items-center gap-2">
                    <span className="text-gray-600 w-12">大小</span>
                    <input
                      type="range" min="8" max="30" step="1"
                      value={curOverride?.size ?? selectedInfo.size ?? 14}
                      onChange={e => updateOverride('size', +e.target.value)}
                      className="flex-1"
                    />
                    <span className="font-mono w-8 text-right">{curOverride?.size ?? selectedInfo.size ?? 14}</span>
                  </label>
                  ) : (
                  <label className="flex items-center gap-2">
                    <span className="text-gray-600 w-12">缩放</span>
                    <input
                      type="range" min="0" max="6" step="1"
                      value={curOverride?.scale ?? 3}
                      onChange={e => updateOverride('scale', +e.target.value)}
                      className="flex-1"
                    />
                    <span className="font-mono w-16 text-right text-xs">{LATEX_SIZES[curOverride?.scale ?? 3]}</span>
                  </label>
                  )}
                  <label className="flex items-center gap-2">
                    <span className="text-gray-600 w-12">颜色</span>
                    <input
                      type="color"
                      value={curOverride?.color ?? selectedInfo.color ?? '#000000'}
                      onChange={e => updateOverride('color', e.target.value)}
                      className="w-8 h-8 rounded border cursor-pointer"
                    />
                    <span className="font-mono text-xs">{curOverride?.color ?? selectedInfo.color}</span>
                  </label>
                  <div className="mt-2 pt-2 border-t text-xs text-gray-500">
                    <p>位置: ({selectedInfo.x.toFixed(2)}, {selectedInfo.y.toFixed(2)})</p>
                    <p>类型: {selectedInfo.type === 'latex' ? 'LaTeX' : '文字'}</p>
                  </div>
                </div>
              </>
            ) : (
              <p className="text-gray-400 text-center mt-8">点击图中标签选中后<br/>可编辑属性</p>
            )}
          </div>
        </div>
      </div>
    </DebugOverrideCtx.Provider>
    </DebugSelectedCtx.Provider>
    </DebugSelectCtx.Provider>
    </DebugRegisterCtx.Provider>
  );
}

/* ── DebugMafs 包装器 ── */
type DebugMafsProps = ComponentProps<typeof Mafs> & { children?: ReactNode };

export function DebugMafs({ children, ...mafsProps }: DebugMafsProps) {
  const globalOn = useDebugEnabled();
  const [debug, setDebug] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [origWidth, setOrigWidth] = useState(0);

  if (debug) {
    return (
      <MafsDebugCtx.Provider value={true}>
        <DebugPanel mafsProps={mafsProps} onClose={() => setDebug(false)} origWidth={origWidth}>
          {children}
        </DebugPanel>
      </MafsDebugCtx.Provider>
    );
  }

  return (
    <MafsDebugCtx.Provider value={false}>
      <div className="relative" ref={containerRef}>
        {globalOn && (
          <button
            onClick={() => {
              if (containerRef.current) setOrigWidth(containerRef.current.offsetWidth);
              setDebug(true);
            }}
            className="absolute top-1 right-1 z-10 text-xs px-1.5 py-0.5 rounded bg-gray-200 text-gray-600 hover:bg-gray-300 print:hidden opacity-40 hover:opacity-100"
          >
            🛠
          </button>
        )}
        <Mafs {...mafsProps}>
          {children}
        </Mafs>
      </div>
    </MafsDebugCtx.Provider>
  );
}

/* ── DText — 可调试的 MafsText ── */
export function DText(props: ComponentProps<typeof MafsText>) {
  const debug = useContext(MafsDebugCtx);
  const register = useContext(DebugRegisterCtx);
  const selectFn = useContext(DebugSelectCtx);
  const selectedId = useContext(DebugSelectedCtx);
  const overrideMap = useContext(DebugOverrideCtx);
  const id = useId();
  const { x, y, children, size, color, ...rest } = props;
  const point = useMovablePoint([x, y]);
  const label = typeof children === 'string' ? children : String(children);
  const prevPos = useRef([x, y]);

  const ov = overrideMap.get(id);
  const finalSize = ov?.size ?? size;
  const finalColor = ov?.color ?? color;

  useEffect(() => {
    if (debug && register) register(id, { label, type: 'text', x: point.x, y: point.y, size: finalSize as number, color: finalColor as string });
    if (debug && selectFn && (point.x !== prevPos.current[0] || point.y !== prevPos.current[1])) {
      selectFn(id);
      prevPos.current = [point.x, point.y];
    }
  });

  if (!debug) {
    return <MafsText x={x} y={y} size={size} color={color} {...rest}>{children}</MafsText>;
  }

  const isSelected = selectedId === id;

  return (
    <>
      {point.element}
      <MafsText x={point.x} y={point.y} size={finalSize} color={finalColor} {...rest}>{children}</MafsText>
      {isSelected && (
        <circle cx={0} cy={0} r={12} fill="none" stroke="#3b82f6" strokeWidth={2} transform={`translate(${point.x}, ${point.y})`} style={{ pointerEvents: 'none' }} />
      )}
    </>
  );
}

/* ── DLatex — 可调试的 LaTeX ── */
const LATEX_SIZES = ['\\tiny', '\\scriptsize', '\\small', '(normal)', '\\large', '\\Large', '\\LARGE'];

export function DLatex({ at, tex, color }: { at: [number, number]; tex: string; color?: string }) {
  const debug = useContext(MafsDebugCtx);
  const register = useContext(DebugRegisterCtx);
  const selectFn = useContext(DebugSelectCtx);
  const selectedId = useContext(DebugSelectedCtx);
  const overrideMap = useContext(DebugOverrideCtx);
  const id = useId();
  const point = useMovablePoint(at);
  const prevPos = useRef<[number, number]>(at);

  const ov = overrideMap.get(id);
  const finalColor = ov?.color ?? color;
  const scaleIdx = ov?.scale ?? 3;
  const sizeCmd = LATEX_SIZES[scaleIdx];
  const scaledTex = scaleIdx === 3 ? tex : `{${sizeCmd} ${tex}}`;

  useEffect(() => {
    if (debug && register) register(id, { label: tex, type: 'latex', x: point.x, y: point.y, size: scaleIdx, color: finalColor as string });
    if (debug && selectFn && (point.x !== prevPos.current[0] || point.y !== prevPos.current[1])) {
      selectFn(id);
      prevPos.current = [point.x, point.y];
    }
  });

  if (!debug) {
    return <MafsLaTeX at={at} tex={tex} color={color} />;
  }

  const isSelected = selectedId === id;

  return (
    <>
      {point.element}
      <MafsLaTeX at={point.point} tex={scaledTex} color={finalColor} />
      {isSelected && (
        <circle cx={0} cy={0} r={12} fill="none" stroke="#3b82f6" strokeWidth={2} transform={`translate(${point.x}, ${point.y})`} style={{ pointerEvents: 'none' }} />
      )}
    </>
  );
}
