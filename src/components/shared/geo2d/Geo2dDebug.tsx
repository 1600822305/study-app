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
import { useState, useRef, useCallback, useSyncExternalStore, memo } from 'react';
import { createPortal } from 'react-dom';
import { Geo2dSvg } from './Geo2dSvg';
import type { Diagram2DData, Point2D, FreePath2D } from './types';
import { Math as MathTex } from '../Math';
import { VennRenderer } from './renderers/VennRenderer';

/* ── 全局调试开关 ── */
let _debug2d = false;
const _listeners2d = new Set<() => void>();
function _subscribe2d(cb: () => void) { _listeners2d.add(cb); return () => _listeners2d.delete(cb); }
function _getSnapshot2d() { return _debug2d; }
export function _toggle2d() { _debug2d = !_debug2d; _listeners2d.forEach(l => l()); }

export function useGeo2dDebug() { return useSyncExternalStore(_subscribe2d, _getSnapshot2d); }

export function Geo2dDebugToggle() {
  const on = useGeo2dDebug();
  return (
    <button
      onClick={_toggle2d}
      className={`fixed bottom-4 right-28 z-50 text-[11px] font-mono px-3 py-1.5 rounded-md shadow-md print:hidden transition-all border ${
        on
          ? 'bg-teal-500 text-white border-teal-400 hover:bg-teal-600'
          : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400 hover:text-slate-700 opacity-60 hover:opacity-100'
      }`}
    >
      📏 {on ? 'ON' : '2D'}
    </button>
  );
}

/* ── 调试面板 ── */
function DebugPanel({ data, strokeColor, onClose, initW, initH }: {
  data: Diagram2DData;
  strokeColor: string;
  onClose: () => void;
  initW: number;
  initH: number;
}) {
  // coordinateSystem 坐标转换
  const cs = data.coordinateSystem;
  const toPixel = (p: Point2D): Point2D =>
    cs ? [cs.origin[0] + p[0] * cs.scale[0], cs.origin[1] + p[1] * cs.scale[1]] : p;
  const fromPixel = (p: Point2D): Point2D =>
    cs ? [Math.round(((p[0] - cs.origin[0]) / cs.scale[0]) * 1000) / 1000, Math.round(((p[1] - cs.origin[1]) / cs.scale[1]) * 1000) / 1000] : p;
  const scaleLen = (r: number) => cs ? Math.abs(r * cs.scale[0]) : r;

  const [vertices, setVertices] = useState<Point2D[]>(
    data.vertices.map(v => toPixel([...v] as Point2D))
  );
  const [labelOffsets, setLabelOffsets] = useState<[number, number][]>(
    data.freeLabels.map(fl => [...(fl.offset ?? [0, 0])] as [number, number])
  );
  const [labelFontSizes, setLabelFontSizes] = useState<number[]>(
    data.freeLabels.map(fl => fl.fontSize ?? 12)
  );
  const [previewW, setPreviewW] = useState(initW);
  const [previewH, setPreviewH] = useState(initH);
  const [xOff, setXOff] = useState(0);
  const [yOff, setYOff] = useState(0);
  const [activeLabelIdx, setActiveLabelIdx] = useState<number | null>(null);
  const [showRings, setShowRings] = useState(false);
  // Venn 调试状态
  const hasVenn = !!data.venn;
  const [vennScale, setVennScale] = useState(1);
  const [vennCenters, setVennCenters] = useState<Point2D[]>(
    (data.venn?.sets ?? []).map(s => [...s.center] as Point2D)
  );
  const [vennRadii, setVennRadii] = useState<number[]>(
    (data.venn?.sets ?? []).map(s => s.radius)
  );
  const [vennElPositions, setVennElPositions] = useState<Point2D[]>(
    (data.venn?.elements ?? []).map(el => [...el.pos] as Point2D)
  );
  const [vennElFontSizes, setVennElFontSizes] = useState<number[]>(
    (data.venn?.elements ?? []).map(el => el.fontSize ?? 14)
  );
  // 转换 freeLabels.pos 到像素，若 pos 匹配某 vertex 则跟随拖拽
  const origVertices = data.vertices.map(v => toPixel([...v] as Point2D));
  const labelPositions = data.freeLabels.map(fl => {
    const px = toPixel(fl.pos);
    const matchIdx = origVertices.findIndex(ov => Math.abs(ov[0] - px[0]) < 0.5 && Math.abs(ov[1] - px[1]) < 0.5);
    return matchIdx >= 0 ? vertices[matchIdx] : px;
  });

  const svgRef = useRef<SVGSVGElement>(null);
  const dragRef = useRef<{
    type: 'label' | 'vertex' | 'vennCenter' | 'vennElement';
    idx: number;
    startSvg: [number, number];
    startValue: [number, number];
  } | null>(null);

  // viewBox 计算
  const allX: number[] = [];
  const allY: number[] = [];
  vertices.forEach(([x, y]) => { allX.push(x); allY.push(y); });
  data.freeLabels.forEach((_fl, i) => {
    const [ox, oy] = labelOffsets[i];
    const lp = labelPositions[i];
    allX.push(lp[0] + ox);
    allY.push(lp[1] + oy);
  });
  (data.circles ?? []).forEach(c => {
    const cp = toPixel(c.center);
    const r = scaleLen(c.radius);
    allX.push(cp[0] - r, cp[0] + r);
    allY.push(cp[1] - r, cp[1] + r);
  });
  if (data.venn) {
    const [vx, vy] = data.venn.rectOrigin;
    const [vw, vh] = data.venn.rectSize;
    const sv = vennScale;
    allX.push(vx * sv, (vx + vw) * sv);
    allY.push(vy * sv, (vy + vh) * sv);
  }

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

  const handleMouseDown = useCallback((type: 'label' | 'vertex' | 'vennCenter' | 'vennElement', idx: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const svgPt = screenToSvg(e.clientX, e.clientY);
    const startValue: [number, number] =
      type === 'label' ? [...labelOffsets[idx]] as [number, number]
      : type === 'vennCenter' ? [...vennCenters[idx]] as [number, number]
      : type === 'vennElement' ? [...vennElPositions[idx]] as [number, number]
      : [...vertices[idx]] as [number, number];
    dragRef.current = { type, idx, startSvg: svgPt, startValue };

    const onMove = (ev: MouseEvent) => {
      if (!dragRef.current) return;
      const cur = screenToSvg(ev.clientX, ev.clientY);
      const dx = cur[0] - dragRef.current.startSvg[0];
      const dy = cur[1] - dragRef.current.startSvg[1];
      const { type, idx, startValue } = dragRef.current;

      if (type === 'label') {
        setLabelOffsets(prev => {
          const next = [...prev];
          next[idx] = [Math.round(startValue[0] + dx), Math.round(startValue[1] + dy)];
          return next;
        });
      } else if (type === 'vennCenter') {
        const s = vennScale || 1;
        setVennCenters(prev => {
          const next = [...prev];
          next[idx] = [Math.round(startValue[0] + dx / s), Math.round(startValue[1] + dy / s)];
          return next;
        });
      } else if (type === 'vennElement') {
        const s = vennScale || 1;
        setVennElPositions(prev => {
          const next = [...prev];
          next[idx] = [Math.round(startValue[0] + dx / s), Math.round(startValue[1] + dy / s)];
          return next;
        });
      } else {
        setVertices(prev => {
          const next = [...prev];
          next[idx] = [Math.round(startValue[0] + dx), Math.round(startValue[1] + dy)];
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
  }, [screenToSvg, labelOffsets, vertices, vennCenters, vennElPositions, vennScale]);

  // 用当前拖拽的顶点构建临时 data
  // vertices 已是像素坐标，去掉 coordinateSystem 避免 Geo2dSvg 再转一次
  const sv = vennScale;
  const liveVenn = data.venn ? {
    ...data.venn,
    rectOrigin: [data.venn.rectOrigin[0] * sv, data.venn.rectOrigin[1] * sv] as Point2D,
    rectSize: [data.venn.rectSize[0] * sv, data.venn.rectSize[1] * sv] as [number, number],
    rectRx: data.venn.rectRx ? data.venn.rectRx * sv : undefined,
    sets: data.venn.sets.map((s, i) => ({
      ...s,
      center: [vennCenters[i][0] * sv, vennCenters[i][1] * sv] as Point2D,
      radius: vennRadii[i] * sv,
      labelOffset: s.labelOffset ? [s.labelOffset[0] * sv, s.labelOffset[1] * sv] as [number, number] : undefined,
    })),
    elements: (data.venn.elements ?? []).map((el, i) => ({
      ...el,
      pos: [vennElPositions[i][0] * sv, vennElPositions[i][1] * sv] as Point2D,
      fontSize: vennElFontSizes[i],
    })),
  } : undefined;

  // 预计算函数曲线为像素空间路径，供 preview 使用
  const fnPaths: FreePath2D[] = [];
  if (cs && data.axes && data.functions) {
    for (const curve of data.functions) {
      const [xMin, xMax] = curve.xRange ?? data.axes.xRange;
      const samples = curve.samples ?? 200;
      const fnStep = (xMax - xMin) / samples;
      const segs: string[] = [];
      let cur = '';
      for (let s = 0; s <= samples; s++) {
        const x = xMin + s * fnStep;
        const y = curve.fn(x);
        if (!Number.isFinite(y)) { if (cur) { segs.push(cur); cur = ''; } continue; }
        const [px, py] = toPixel([x, y]);
        cur = cur ? cur + ` L ${px} ${py}` : `M ${px} ${py}`;
      }
      if (cur) segs.push(cur);
      for (const d of segs) {
        fnPaths.push({ d, color: curve.color, strokeWidth: curve.strokeWidth, dashed: curve.dashed });
      }
    }
  }

  const liveData: Diagram2DData = {
    ...data,
    coordinateSystem: undefined,
    axes: undefined,
    vertices,
    freeLabels: data.freeLabels.map((fl, i) => ({
      ...fl,
      pos: labelPositions[i] as Point2D,
      offset: labelOffsets[i],
      fontSize: labelFontSizes[i],
    })),
    circles: (data.circles ?? []).map(c => ({ ...c, center: toPixel(c.center) as Point2D, radius: scaleLen(c.radius) })),
    arcs: (data.arcs ?? []).map(a => ({ ...a, center: toPixel(a.center) as Point2D, radius: scaleLen(a.radius) })),
    ellipses: (data.ellipses ?? []).map(e => ({ ...e, center: toPixel(e.center) as Point2D, rx: scaleLen(e.rx), ry: cs ? Math.abs(e.ry * cs.scale[1]) : e.ry })),
    dimensions: (data.dimensions ?? []).map(d => ({ ...d, from: toPixel(d.from) as Point2D, to: toPixel(d.to) as Point2D })),
    paths: [...(data.paths ?? []), ...fnPaths],
    functions: undefined,
    venn: liveVenn,
  };

  const generateCopyText = () => {
    const lines: string[] = [
      `基于最新数据更新图表参数：`,
      `// 图: ${data.name || '未命名'}`,
      `// 输出尺寸: width=${previewW} height=${previewH}  xOff=${xOff} yOff=${yOff}`,
      '',
      'vertices: [',
    ];
    vertices.forEach((v, i) => {
      const out = cs ? fromPixel(v) : v;
      lines.push(`  [${out[0]}, ${out[1]}],  // ${i}`);
    });
    lines.push('],');
    lines.push('');
    lines.push('freeLabels: [');
    data.freeLabels.forEach((fl, i) => {
      const [ox, oy] = labelOffsets[i];
      const lp = cs ? fromPixel(labelPositions[i]) : labelPositions[i];
      const parts = [`pos: [${lp[0]}, ${lp[1]}]`, `text: '${fl.text}'`, `offset: [${ox}, ${oy}]`];
      if (fl.tex) parts.push(`tex: '${fl.tex}'`);
      parts.push(`fontSize: ${labelFontSizes[i]}`);
      if (fl.color) parts.push(`color: '${fl.color}'`);
      if (fl.dot !== undefined && fl.dot !== false) parts.push(`dot: ${typeof fl.dot === 'string' ? `'${fl.dot}'` : fl.dot}`);
      lines.push(`  { ${parts.join(', ')} },`);
    });
    lines.push('],');
    if (data.venn) {
      const sv = vennScale;
      const vo = data.venn.rectOrigin;
      const vs = data.venn.rectSize;
      lines.push('');
      lines.push('venn: {');
      lines.push(`  rectOrigin: [${Math.round(vo[0] * sv)}, ${Math.round(vo[1] * sv)}], rectSize: [${Math.round(vs[0] * sv)}, ${Math.round(vs[1] * sv)}],`);
      if (data.venn.rectRx) lines.push(`  rectRx: ${Math.round(data.venn.rectRx * sv)},`);
      if (data.venn.rectFill) lines.push(`  rectFill: '${data.venn.rectFill}',`);
      if (data.venn.rectColor) lines.push(`  rectColor: '${data.venn.rectColor}',`);
      lines.push('  sets: [');
      vennCenters.forEach((c, i) => {
        const s = data.venn!.sets[i];
        const parts = [`center: [${Math.round(c[0] * sv)}, ${Math.round(c[1] * sv)}]`, `radius: ${Math.round(vennRadii[i] * sv)}`];
        if (s.label) parts.push(`label: '${s.label}'`);
        if (s.color) parts.push(`color: '${s.color}'`);
        if (s.fill) parts.push(`fill: '${s.fill}'`);
        if (s.fillOpacity !== undefined) parts.push(`fillOpacity: ${s.fillOpacity}`);
        if (s.labelOffset) parts.push(`labelOffset: [${Math.round(s.labelOffset[0] * sv)}, ${Math.round(s.labelOffset[1] * sv)}]`);
        lines.push(`    { ${parts.join(', ')} },`);
      });
      lines.push('  ],');
      if ((data.venn.elements ?? []).length > 0) {
        lines.push('  elements: [');
        vennElPositions.forEach((p, i) => {
          const el = data.venn!.elements![i];
          const parts = [`pos: [${Math.round(p[0] * sv)}, ${Math.round(p[1] * sv)}]`];
          if (el.text) parts.push(`text: '${el.text}'`);
          if (el.tex) parts.push(`tex: '${el.tex}'`);
          parts.push(`fontSize: ${vennElFontSizes[i]}`);
          if (el.fontWeight) parts.push(`fontWeight: '${el.fontWeight}'`);
          if (el.color) parts.push(`color: '${el.color}'`);
          lines.push(`    { ${parts.join(', ')} },`);
        });
        lines.push('  ],');
      }
      if (data.venn.regions && data.venn.regions.length > 0) {
        lines.push('  regions: [');
        data.venn.regions.forEach(r => {
          const parts = [`type: '${r.type}'`, `fill: '${r.fill}'`];
          if (r.fillOpacity !== undefined) parts.push(`fillOpacity: ${r.fillOpacity}`);
          lines.push(`    { ${parts.join(', ')} },`);
        });
        lines.push('  ],');
      }
      lines.push('},');
    }
    return lines.join('\n');
  };

  const svgW = Math.min(800, window.innerWidth - 40);
  const svgH = Math.min(500, window.innerHeight - 300);

  // 角弧、tick、直角用 liveData 的 vertices
  const { edges, polygons, angleArcs = [], tickMarks = [], rightAngles = [] } = liveData;

  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col print:hidden">
      {/* 顶栏 */}
      <div className="h-10 shrink-0 flex items-center justify-between px-4 border-b border-slate-700 bg-slate-900">
        <div className="flex items-center gap-2.5">
          <span className="text-slate-300 text-xs font-mono font-semibold tracking-wide">Geo2D</span>
          {data.name && (
            <span className="text-[11px] font-mono bg-slate-700 text-slate-200 px-2 py-0.5 rounded">
              {data.name}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[11px] text-slate-500 hidden sm:block">拖拽顶点坐标 / 右侧点击标签激活后拖拽</span>
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
      <div className="flex-1 flex items-center justify-center bg-white overflow-hidden relative">
        {/* 尺寸预览浮层 - 左上角 */}
        <div className="absolute top-2 left-2 z-10 bg-white border border-slate-200 rounded-lg shadow-md p-2 text-xs" style={{ minWidth: 200 }}>
          <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1.5">输出尺寸预览</p>
          <div className="grid grid-cols-2 gap-x-2 gap-y-1 mb-2">
            {([['X偏移', xOff, setXOff], ['Y偏移', yOff, setYOff], ['宽W', previewW, setPreviewW], ['高H', previewH, setPreviewH]] as const).map(([label, val, setter]) => (
              <div key={label} className="flex items-center gap-1">
                <label className="text-slate-400 w-10 shrink-0">{label}</label>
                <input type="number" value={val} min={-200} max={600}
                  onChange={e => (setter as (v: number) => void)(Number(e.target.value))}
                  className="w-14 border border-slate-200 rounded px-1 py-0.5 font-mono text-xs text-slate-700" />
              </div>
            ))}
          </div>
          <div className="border border-dashed border-slate-300 inline-block overflow-hidden" style={{ width: previewW, height: previewH }}>
            <div style={{ position: 'relative', left: -xOff, top: -yOff }}>
              <Geo2dSvg data={liveData} width={previewW + xOff} height={previewH + yOff} strokeColor={strokeColor} />
            </div>
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
                  <div className="flex items-center gap-0.5" onClick={e => e.stopPropagation()}>
                    <button onClick={() => setLabelFontSizes(prev => { const n = [...prev]; n[i] = Math.max(6, n[i] - 1); return n; })}
                      className="w-4 h-4 rounded bg-slate-100 hover:bg-slate-200 text-slate-600 text-[10px] font-bold flex items-center justify-center">−</button>
                    <span className="w-5 text-center font-mono text-[10px] text-slate-700">{labelFontSizes[i]}</span>
                    <button onClick={() => setLabelFontSizes(prev => { const n = [...prev]; n[i] = n[i] + 1; return n; })}
                      className="w-4 h-4 rounded bg-slate-100 hover:bg-slate-200 text-slate-600 text-[10px] font-bold flex items-center justify-center">+</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <svg ref={svgRef} width={svgW} height={svgH} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">

          {/* 箭头 marker */}
          <defs>
            {Array.from(new Set(edges.filter(e => e.arrow).map(e => e.color ?? strokeColor))).map(color => (
              <marker
                key={`dbg-arrow-${color}`}
                id={`dbg-arrow-${color.replace('#', '')}`}
                viewBox="0 0 10 6"
                refX="10" refY="3"
                markerWidth="8" markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 3 L 0 6 Z" fill={color} />
              </marker>
            ))}
          </defs>
          {/* 网格（辅助） */}
          <defs>
            <pattern id="grid2d" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect x={xMin} y={yMin} width={vbW} height={vbH} fill="url(#grid2d)" />

          {/* 坐标轴（有 coordinateSystem + axes 时绘制） */}
          {cs && data.axes && (() => {
            const ax = data.axes;
            const axColor = ax.color ?? '#334155';
            const step = ax.step ?? 1;
            const showNumbers = ax.showNumbers !== false;
            const [ox, oy] = cs.origin;
            const [sx, sy] = cs.scale;
            const xMinPx = ox + ax.xRange[0] * sx - 8;
            const xMaxPx = ox + ax.xRange[1] * sx + 8;
            const yMinPx2 = oy + ax.yRange[1] * sy - 8;
            const yMaxPx = oy + ax.yRange[0] * sy + 8;
            const xTicks: number[] = [];
            for (let v = Math.ceil(ax.xRange[0] / step) * step; v <= ax.xRange[1]; v += step) {
              if (Math.abs(v) > 0.001) xTicks.push(v);
            }
            const yTicks: number[] = [];
            for (let v = Math.ceil(ax.yRange[0] / step) * step; v <= ax.yRange[1]; v += step) {
              if (Math.abs(v) > 0.001) yTicks.push(v);
            }
            return (
              <g className="debug-axes" opacity={0.5}>
                <line x1={xMinPx} y1={oy} x2={xMaxPx} y2={oy} stroke={axColor} strokeWidth={1} />
                <line x1={ox} y1={yMaxPx} x2={ox} y2={yMinPx2} stroke={axColor} strokeWidth={1} />
                {xTicks.map(v => {
                  const px = ox + v * sx;
                  return <g key={`dxt-${v}`}><line x1={px} y1={oy - 3} x2={px} y2={oy + 3} stroke={axColor} strokeWidth={0.8} />
                    {showNumbers && <text x={px} y={oy + 12} textAnchor="middle" fontSize={8} fill={axColor}>{v}</text>}</g>;
                })}
                {yTicks.map(v => {
                  const py = oy + v * sy;
                  return <g key={`dyt-${v}`}><line x1={ox - 3} y1={py} x2={ox + 3} y2={py} stroke={axColor} strokeWidth={0.8} />
                    {showNumbers && <text x={ox - 6} y={py + 3} textAnchor="end" fontSize={8} fill={axColor}>{v}</text>}</g>;
                })}
                <text x={xMaxPx + 2} y={oy + 12} fontSize={9} fill={axColor} fontStyle="italic">x</text>
                <text x={ox + 6} y={yMinPx2 - 2} fontSize={9} fill={axColor} fontStyle="italic">y</text>
                <text x={ox - 8} y={oy + 12} fontSize={8} fill={axColor} fontStyle="italic">O</text>
              </g>
            );
          })()}

          {/* 椭圆 */}
          {(data.ellipses ?? []).map((e, i) => {
            const cp = toPixel(e.center);
            const rx = scaleLen(e.rx);
            const ry = cs ? Math.abs(e.ry * cs.scale[1]) : e.ry;
            return (
              <ellipse key={`el-${i}`} cx={cp[0]} cy={cp[1]} rx={rx} ry={ry}
                fill={e.fill ?? 'none'} fillOpacity={e.fillOpacity ?? 1}
                stroke={e.color ?? strokeColor} strokeWidth={e.strokeWidth ?? 2}
                strokeDasharray={e.dashed ? '5 4' : undefined} />
            );
          })}

          {/* 圆 */}
          {(data.circles ?? []).map((c, i) => {
            const cp = toPixel(c.center);
            const r = scaleLen(c.radius);
            return (
              <circle key={`ci-${i}`} cx={cp[0]} cy={cp[1]} r={r}
                fill={c.fill ?? 'none'} fillOpacity={c.fillOpacity ?? 1}
                stroke={c.color ?? strokeColor} strokeWidth={c.strokeWidth ?? 2}
                strokeDasharray={c.dashed ? '5 4' : undefined} />
            );
          })}

          {/* 弧/扇形 */}
          {(data.arcs ?? []).map((a, i) => {
            const cp = toPixel(a.center);
            const [cx, cy] = cp;
            const r = scaleLen(a.radius);
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
            const color = e.color ?? strokeColor;
            const mid = `dbg-arrow-${color.replace('#', '')}`;
            return (
              <line key={`e-${i}`} x1={x1} y1={y1} x2={x2} y2={y2}
                stroke={color} strokeWidth={e.strokeWidth ?? 2}
                strokeDasharray={e.dashed ? '5 4' : undefined}
                markerEnd={(e.arrow === 'end' || e.arrow === 'both') ? `url(#${mid})` : undefined}
                markerStart={(e.arrow === 'start' || e.arrow === 'both') ? `url(#${mid})` : undefined} />
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

          {/* 标注线 */}
          {(data.dimensions ?? []).map((dim, i) => {
            const [fx, fy] = toPixel(dim.from);
            const [tx, ty] = toPixel(dim.to);
            const color = dim.color ?? '#6b7280';
            const mx = (fx + tx) / 2;
            const my = (fy + ty) / 2;
            const off = dim.offset ?? 0;
            const dx = tx - fx, dy = ty - fy;
            const len = Math.sqrt(dx * dx + dy * dy);
            const nx = len > 0 ? (-dy / len) * off : 0;
            const ny = len > 0 ? (dx / len) * off : 0;
            return (
              <g key={`dim-${i}`}>
                <line x1={fx + nx} y1={fy + ny} x2={tx + nx} y2={ty + ny} stroke={color} strokeWidth={1.2} strokeDasharray="4 3" />
                <line x1={fx} y1={fy} x2={fx + nx} y2={fy + ny} stroke={color} strokeWidth={0.8} />
                <line x1={tx} y1={ty} x2={tx + nx} y2={ty + ny} stroke={color} strokeWidth={0.8} />
                {dim.label && <text x={mx + nx} y={my + ny} textAnchor="middle" dominantBaseline="middle" fontSize={13} fill={color} fontFamily="KaTeX_Math, serif" fontStyle="italic">{dim.label}</text>}
              </g>
            );
          })}

          {/* 自由路径 */}
          {(data.paths ?? []).map((p, i) => (
            <path key={`fp-${i}`} d={p.d} fill={p.fill ?? 'none'} fillOpacity={p.fillOpacity ?? 1}
              stroke={p.color ?? strokeColor} strokeWidth={p.strokeWidth ?? 2}
              strokeDasharray={p.dashed ? '5 4' : undefined} />
          ))}

          {/* 函数曲线 */}
          {cs && data.axes && (data.functions ?? []).map((curve, fi) => {
            const [xMin, xMax] = curve.xRange ?? data.axes!.xRange;
            const samples = curve.samples ?? 200;
            const fnStep = (xMax - xMin) / samples;
            const segs: string[] = [];
            let cur = '';
            for (let s = 0; s <= samples; s++) {
              const x = xMin + s * fnStep;
              const y = curve.fn(x);
              if (!Number.isFinite(y)) { if (cur) { segs.push(cur); cur = ''; } continue; }
              const [px, py] = toPixel([x, y]);
              cur = cur ? cur + ` L ${px} ${py}` : `M ${px} ${py}`;
            }
            if (cur) segs.push(cur);
            return segs.map((d, j) => (
              <path key={`fn-${fi}-${j}`} d={d} fill="none"
                stroke={curve.color ?? strokeColor} strokeWidth={curve.strokeWidth ?? 2}
                strokeDasharray={curve.dashed ? '5 4' : undefined} />
            ));
          })}

          {/* 韦恩图 */}
          {liveVenn && <VennRenderer venn={liveVenn} strokeColor={strokeColor} />}

          {/* 韦恩图集合手柄 */}
          {liveVenn && vennCenters.map(([cx, cy], i) => {
            const sx = cx * sv, sy = cy * sv;
            return (
              <g key={`vc-${i}`}>
                <circle cx={sx} cy={sy} r={4} fill="#8b5cf6" />
                <circle cx={sx} cy={sy} r={10} fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"
                  strokeWidth={1.5} strokeDasharray="3 2" style={{ cursor: 'grab' }}
                  onMouseDown={(e) => handleMouseDown('vennCenter', i, e)} />
                {showRings && <text x={sx + 12} y={sy - 4} fontSize={8} fill="#8b5cf6" fontFamily="monospace">
                  S{i} [{Math.round(sx)},{Math.round(sy)}] r={Math.round(vennRadii[i] * sv)}
                </text>}
              </g>
            );
          })}

          {/* 韦恩图元素手柄 */}
          {liveVenn && vennElPositions.map(([ex, ey], i) => {
            const sx = ex * sv, sy = ey * sv;
            return (
              <g key={`ve-${i}`}>
                <circle cx={sx} cy={sy} r={3} fill="#f59e0b" />
                <circle cx={sx} cy={sy} r={8} fill="rgba(245,158,11,0.15)" stroke="#f59e0b"
                  strokeWidth={1.5} strokeDasharray="3 2" style={{ cursor: 'grab' }}
                  onMouseDown={(e) => handleMouseDown('vennElement', i, e)} />
                {showRings && <text x={sx + 10} y={sy - 4} fontSize={8} fill="#f59e0b" fontFamily="monospace">
                  E{i} [{Math.round(sx)},{Math.round(sy)}]
                </text>}
              </g>
            );
          })}

          {/* 非激活标签（底层） */}
          {data.freeLabels.map((fl, i) => {
            if (i === activeLabelIdx) return null;
            const [px, py] = labelPositions[i];
            const [ox, oy] = labelOffsets[i];
            const labelColor = fl.color ?? strokeColor;
            const dotColor = typeof fl.dot === 'string' ? fl.dot : (fl.dot ? labelColor : undefined);
            return (
              <g key={`fl-${i}`} style={{ pointerEvents: 'none' }}>
                <line x1={px} y1={py} x2={px + ox} y2={py + oy} stroke="#94a3b8" strokeWidth={0.5} strokeDasharray="2 2" />
                {dotColor && <circle cx={px} cy={py} r={3.5} fill={dotColor} />}
                {fl.tex ? (
                  <foreignObject x={px + ox - 60} y={py + oy - 15} width={120} height={30} style={{ overflow: 'visible', pointerEvents: 'none' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', fontSize: labelFontSizes[i] ?? 16, color: labelColor, whiteSpace: 'nowrap', pointerEvents: 'none' }}>
                      <MathTex tex={fl.tex} />
                    </div>
                  </foreignObject>
                ) : (
                  <text x={px + ox} y={py + oy} textAnchor="middle" dominantBaseline="middle"
                    fontSize={fl.fontSize ?? 18} fontFamily="serif" fontStyle="italic" fontWeight="bold"
                    fill={labelColor}>{fl.text}</text>
                )}
                {showRings && <>
                  <circle cx={px + ox} cy={py + oy} r={8} fill="rgba(59,130,246,0.08)" stroke="#3b82f6"
                    strokeWidth={1} strokeDasharray="3 2" style={{ cursor: 'default', pointerEvents: 'none' }} />
                  <text x={px + ox + 12} y={py + oy + 4} fontSize={7} fill="#6b7280" fontFamily="monospace">
                    [{ox},{oy}]
                  </text>
                </>}
              </g>
            );
          })}

          {/* 顶点手柄（中层） */}
          {vertices.map(([px, py], i) => (
            <g key={`vd-${i}`}>
              <circle cx={px} cy={py} r={3} fill={strokeColor} />
              {showRings && <text x={px + 4} y={py - 8} fontSize={9} fill="#ef4444" fontFamily="monospace" fontWeight="bold">{i}</text>}
              <circle cx={px} cy={py} r={8} fill={showRings ? 'rgba(239,68,68,0.1)' : 'transparent'} stroke={showRings ? '#ef4444' : 'transparent'}
                strokeWidth={1.5} strokeDasharray="3 2" style={{ cursor: 'grab' }}
                onMouseDown={(e) => handleMouseDown('vertex', i, e)} />
            </g>
          ))}

          {/* 激活标签（最顶层，始终可拖） */}
          {activeLabelIdx !== null && (() => {
            const i = activeLabelIdx;
            const fl = data.freeLabels[i];
            const [px, py] = labelPositions[i];
            const [ox, oy] = labelOffsets[i];
            const labelColor = fl.color ?? strokeColor;
            const dotColor = typeof fl.dot === 'string' ? fl.dot : (fl.dot ? labelColor : undefined);
            return (
              <g key={`fl-active-${i}`}>
                <line x1={px} y1={py} x2={px + ox} y2={py + oy} stroke="#3b82f6" strokeWidth={1} strokeDasharray="2 2" />
                {dotColor && <circle cx={px} cy={py} r={3.5} fill={dotColor} />}
                {fl.tex ? (
                  <foreignObject x={px + ox - 60} y={py + oy - 15} width={120} height={30} style={{ overflow: 'visible' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', fontSize: labelFontSizes[i] ?? 16, color: labelColor, whiteSpace: 'nowrap' }}>
                      <MathTex tex={fl.tex} />
                    </div>
                  </foreignObject>
                ) : (
                  <text x={px + ox} y={py + oy} textAnchor="middle" dominantBaseline="middle"
                    fontSize={fl.fontSize ?? 18} fontFamily="serif" fontStyle="italic" fontWeight="bold"
                    fill={labelColor}>{fl.text}</text>
                )}
                <circle cx={px + ox} cy={py + oy} r={10} fill="rgba(59,130,246,0.2)" stroke="#3b82f6"
                  strokeWidth={2} style={{ cursor: 'grab' }}
                  onMouseDown={(e) => handleMouseDown('label', i, e)} />
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
        {/* 右：控制面板 */}
        <div className="w-60 border-l border-slate-100 bg-white flex flex-col overflow-hidden text-xs">
          {/* 顶点 */}
          <div className="px-3 pt-3 pb-2 border-b border-slate-100 shrink-0">
            <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-2">顶点</p>
            <div className="space-y-0.5">
              {vertices.map((v, i) => (
                <div key={i} className="flex items-center gap-2 font-mono">
                  <span className="w-4 h-4 rounded text-[10px] font-bold bg-red-50 text-red-500 flex items-center justify-center shrink-0">{i}</span>
                  <span className="text-slate-500">[{v[0]}, {v[1]}]</span>
                </div>
              ))}
            </div>
          </div>
          {/* 韦恩图控制 */}
          {hasVenn && (
            <div className="px-3 pt-2 pb-2 border-b border-slate-100 shrink-0 overflow-y-auto flex-1">
              <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-2">韦恩图</p>
              <div className="flex items-center gap-1.5 mb-2">
                <label className="text-slate-400 shrink-0">缩放</label>
                <input type="range" min={0.3} max={2} step={0.05} value={vennScale}
                  onChange={e => setVennScale(Number(e.target.value))}
                  className="flex-1 h-4 accent-purple-500" />
                <span className="font-mono text-slate-600 w-8 text-right">{vennScale.toFixed(2)}</span>
              </div>
              <p className="text-[10px] text-slate-400 mb-1">集合</p>
              <div className="space-y-1 mb-2">
                {vennCenters.map((c, i) => {
                  const s = data.venn!.sets[i];
                  return (
                    <div key={i} className="flex items-center gap-1 font-mono text-[11px]">
                      <span className="w-4 h-4 rounded text-[10px] font-bold bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">{i}</span>
                      <span className="text-slate-600 w-4">{s.label ?? '?'}</span>
                      <span className="text-slate-400">[{Math.round(c[0] * vennScale)},{Math.round(c[1] * vennScale)}]</span>
                      <span className="text-slate-400 ml-auto">r</span>
                      <input type="number" value={vennRadii[i]} min={5} max={200}
                        onChange={e => setVennRadii(prev => { const n = [...prev]; n[i] = Number(e.target.value); return n; })}
                        className="w-10 border border-slate-200 rounded px-1 py-0.5 text-[11px] text-slate-700" />
                    </div>
                  );
                })}
              </div>
              {vennElPositions.length > 0 && <>
                <p className="text-[10px] text-slate-400 mb-1">元素</p>
                <div className="space-y-0.5">
                  {vennElPositions.map((p, i) => {
                    const el = data.venn!.elements![i];
                    return (
                      <div key={i} className="flex items-center gap-1 font-mono text-[11px]">
                        <span className="w-4 h-4 rounded text-[10px] font-bold bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">{i}</span>
                        <span className="text-slate-500 truncate max-w-12">{el.text ?? el.tex ?? '?'}</span>
                        <span className="text-slate-400">[{Math.round(p[0] * vennScale)},{Math.round(p[1] * vennScale)}]</span>
                        <span className="text-slate-400 ml-auto">F</span>
                        <input type="number" value={vennElFontSizes[i]} min={6} max={32}
                          onChange={e => setVennElFontSizes(prev => { const n = [...prev]; n[i] = Number(e.target.value); return n; })}
                          className="w-8 border border-slate-200 rounded px-0.5 py-0.5 text-[11px] text-slate-700" />
                      </div>
                    );
                  })}
                </div>
              </>}
            </div>
          )}
          {/* 字号（保留在底部面板供备用） */}
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
  xOff?: number;
  yOff?: number;
  strokeColor?: string;
  className?: string;
}

export const DebugGeo2dSvg = memo(function DebugGeo2dSvg({ data, width = 160, height = 140, xOff = 0, yOff = 0, strokeColor = '#334155', className }: DebugGeo2dSvgProps) {
  const globalOn = useGeo2dDebug();
  const [debug, setDebug] = useState(false);

  if (debug) {
    return createPortal(
      <DebugPanel data={data} strokeColor={strokeColor} onClose={() => setDebug(false)} initW={width} initH={height} />,
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
      <Geo2dSvg data={data} width={width} height={height} xOff={xOff} yOff={yOff} strokeColor={strokeColor} className={className} />
    </div>
  );
});
