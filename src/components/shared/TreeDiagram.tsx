import { type ReactNode, useState } from 'react';
import { useGeo2dDebug } from './geo2d/Geo2dDebug';

/* ── 类型 ── */

export type TreeNodeVariant = 'default' | 'success' | 'error';

export interface TreeNodeData {
  /** 节点主内容（支持 JSX，可含 MathTex） */
  label: ReactNode;
  /** 节点描述（显示在 label 下方） */
  description?: ReactNode;
  /** 样式变体：default 中性灰 | success 绿色 | error 红色 */
  variant?: TreeNodeVariant;
  /** 子节点 */
  children?: TreeNodeData[];
}

export interface TreeLayoutConfig {
  /** 竖线高度 px（默认 20） */
  lineH?: number;
  /** 子节点之间水平间距 px（默认 8） */
  gapX?: number;
  /** 节点文字大小 px（默认 14） */
  fontSize?: number;
  /** 节点最大宽度 px（默认 220，控制换行） */
  nodeMaxW?: number;
  /** 节点水平内边距 px（默认 12） */
  nodePadX?: number;
  /** 节点垂直内边距 px（默认 6） */
  nodePadY?: number;
}

/* ── 变体样式 ── */

const variantClass: Record<TreeNodeVariant, string> = {
  default: 'border-gray-300 bg-gray-50 text-gray-800',
  success: 'border-green-500 bg-green-50 text-green-800',
  error:   'border-red-400 bg-red-50 text-red-700',
};

/* ── 内部配置 ── */

interface FullLayout { lineH: number; gapX: number; fontSize: number; nodeMaxW: number; nodePadX: number; nodePadY: number }

function resolveLayout(c?: TreeLayoutConfig): FullLayout {
  return { lineH: c?.lineH ?? 20, gapX: c?.gapX ?? 8, fontSize: c?.fontSize ?? 14, nodeMaxW: c?.nodeMaxW ?? 220, nodePadX: c?.nodePadX ?? 12, nodePadY: c?.nodePadY ?? 6 };
}

/* ── 递归分支 ── */

function Branch({ node, L }: { node: TreeNodeData; L: FullLayout }) {
  const v = node.variant ?? 'default';
  const kids = node.children ?? [];

  return (
    <div className="flex flex-col items-center flex-1">
      {/* 节点盒子包装：flex-1 + items-end 让较矮的兄弟节点底部对齐 */}
      <div className="flex-1 flex items-end justify-center w-full">
        <div
          className={`rounded-lg border-2 text-center ${variantClass[v]}`}
          style={{ maxWidth: (node.description || kids.length > 0) ? L.nodeMaxW : undefined, padding: `${L.nodePadY}px ${L.nodePadX}px`, fontSize: L.fontSize, whiteSpace: (!node.description && kids.length === 0) ? 'nowrap' : undefined }}
        >
          <div className="font-bold">{node.label}</div>
          {node.description && <div className="mt-0.5">{node.description}</div>}
        </div>
      </div>

      {/* 子树 */}
      {kids.length > 0 && (
        <>
          {/* SVG 连接线：父竖线 + 横杠 + 子竖线，全部在一个 SVG 里 */}
          <svg
            width="100%"
            style={{ height: L.lineH * 2 + 2, flexShrink: 0, overflow: 'visible', display: 'block' }}
          >
            {/* 父节点向下竖线 */}
            <line x1="50%" y1="0" x2="50%" y2={L.lineH} stroke="#9ca3af" strokeWidth="2" />
            {/* 横向连接线 */}
            {kids.length > 1 && (
              <line
                x1={`${(0.5 / kids.length) * 100}%`} y1={L.lineH}
                x2={`${((kids.length - 0.5) / kids.length) * 100}%`} y2={L.lineH}
                stroke="#9ca3af" strokeWidth="2"
              />
            )}
            {/* 每个子节点的竖线 */}
            {kids.map((_, i) => {
              const cx = `${((i + 0.5) / kids.length) * 100}%`;
              return (
                <line key={i} x1={cx} y1={L.lineH} x2={cx} y2={L.lineH * 2 + 2} stroke="#9ca3af" strokeWidth="2" />
              );
            })}
          </svg>

          {/* 子节点行 */}
          <div className="flex justify-center items-stretch">
            {kids.map((child, i) => (
              <div key={i} className="flex flex-col items-center flex-1 min-w-0" style={{ padding: `0 ${L.gapX / 2}px` }}>
                <Branch node={child} L={L} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/* ── 主组件 ── */

export function TreeDiagram({ root, className = '', layout }: { root: TreeNodeData; className?: string; layout?: TreeLayoutConfig }) {
  const L = resolveLayout(layout);
  return (
    <div className={`inline-flex justify-center ${className}`} style={{ breakInside: 'avoid' }}>
      <Branch node={root} L={L} />
    </div>
  );
}

/* ── 全屏调试面板 ── */

function TreeDebugPanel({ root, onClose, initLayout }: { root: TreeNodeData; onClose: () => void; initLayout?: TreeLayoutConfig }) {
  const init = resolveLayout(initLayout);
  const [lineH, setLineH] = useState(init.lineH);
  const [gapX, setGapX] = useState(init.gapX);
  const [fontSize, setFontSize] = useState(init.fontSize);
  const [nodeMaxW, setNodeMaxW] = useState(init.nodeMaxW);
  const [nodePadX, setNodePadX] = useState(init.nodePadX);
  const [nodePadY, setNodePadY] = useState(init.nodePadY);

  const layout: TreeLayoutConfig = { lineH, gapX, fontSize, nodeMaxW, nodePadX, nodePadY };

  const copyText = () => {
    const parts: string[] = [];
    if (lineH !== 20) parts.push(`lineH: ${lineH}`);
    if (gapX !== 8) parts.push(`gapX: ${gapX}`);
    if (fontSize !== 14) parts.push(`fontSize: ${fontSize}`);
    if (nodeMaxW !== 220) parts.push(`nodeMaxW: ${nodeMaxW}`);
    if (nodePadX !== 12) parts.push(`nodePadX: ${nodePadX}`);
    if (nodePadY !== 6) parts.push(`nodePadY: ${nodePadY}`);
    const str = parts.length > 0 ? `layout={{ ${parts.join(', ')} }}` : '// 默认布局';
    navigator.clipboard.writeText(str);
  };

  const Slider = ({ label, value, set, min, max }: { label: string; value: number; set: (v: number) => void; min: number; max: number }) => (
    <label className="flex items-center gap-1.5">
      <span className="text-slate-500 w-16 text-right">{label}</span>
      <input type="range" min={min} max={max} value={value} onChange={e => set(Number(e.target.value))} className="w-24 h-3" />
      <input type="number" min={min} max={max} value={value} onChange={e => set(Number(e.target.value))}
        className="w-12 border border-slate-200 rounded px-1 py-0.5 text-slate-700 text-center" />
    </label>
  );

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col print:hidden">
      {/* 顶栏 */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-slate-200 bg-slate-50 shrink-0">
        <span className="font-bold text-slate-700 text-sm">🌲 树形图调试</span>
        <div className="flex items-center gap-2">
          <button onClick={copyText} className="px-2 py-1 rounded bg-blue-500 text-white text-xs hover:bg-blue-600">复制 layout</button>
          <button onClick={onClose} className="px-2 py-1 rounded bg-slate-200 text-slate-600 text-xs hover:bg-slate-300">关闭</button>
        </div>
      </div>

      {/* 主体：左侧预览 + 右侧控件 */}
      <div className="flex flex-1 min-h-0">
        {/* 预览区 */}
        <div className="flex-1 overflow-auto p-6 flex items-start justify-center">
          <TreeDiagram root={root} layout={layout} />
        </div>

        {/* 控制面板 */}
        <div className="w-64 shrink-0 border-l border-slate-200 bg-slate-50 p-3 overflow-y-auto text-[12px] font-mono space-y-2">
          <p className="text-[10px] text-slate-400 font-bold mb-1">布局参数</p>
          <Slider label="竖线高度" value={lineH} set={setLineH} min={4} max={60} />
          <Slider label="子间距X" value={gapX} set={setGapX} min={0} max={48} />
          <div className="border-t border-slate-200 pt-2 mt-2" />
          <p className="text-[10px] text-slate-400 font-bold mb-1">节点样式</p>
          <Slider label="字号" value={fontSize} set={setFontSize} min={8} max={24} />
          <Slider label="最大宽度" value={nodeMaxW} set={setNodeMaxW} min={80} max={400} />
          <Slider label="内边距X" value={nodePadX} set={setNodePadX} min={2} max={32} />
          <Slider label="内边距Y" value={nodePadY} set={setNodePadY} min={2} max={24} />
        </div>
      </div>
    </div>
  );
}

/* ── 水平树（左→右）── */

function HBranch({ node, L }: { node: TreeNodeData; L: FullLayout }) {
  const v = node.variant ?? 'default';
  const kids = node.children ?? [];
  const lc = '#9ca3af';

  return (
    <div className="flex items-center">
      {/* 节点 */}
      <div
        className={`rounded-lg border-2 text-center shrink-0 ${variantClass[v]}`}
        style={{ padding: `${L.nodePadY}px ${L.nodePadX}px`, fontSize: L.fontSize, maxWidth: (node.description || kids.length > 0) ? L.nodeMaxW : undefined, whiteSpace: (!node.description && kids.length === 0) ? 'nowrap' : undefined }}
      >
        <div className="font-bold">{node.label}</div>
        {node.description && <div className="mt-0.5">{node.description}</div>}
      </div>

      {/* 子分支 */}
      {kids.length > 0 && (
        <>
          {/* 水平连线：节点 → 分叉点 */}
          <div style={{ width: L.lineH, borderTop: `2px solid ${lc}`, flexShrink: 0 }} />
          {/* 子节点纵向排列 */}
          <div className="flex flex-col">
            {kids.map((child, i) => (
              <div key={i} className="flex items-stretch">
                {/* 竖线 + 横线连接器 */}
                <div style={{ width: L.lineH, flexShrink: 0, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ flex: 1, borderLeft: i > 0 ? `2px solid ${lc}` : 'none', borderBottom: `2px solid ${lc}` }} />
                  <div style={{ flex: 1, borderLeft: i < kids.length - 1 ? `2px solid ${lc}` : 'none' }} />
                </div>
                {/* 子节点内容（加垂直间距） */}
                <div style={{ padding: `${L.gapX / 2}px 0` }}>
                  <HBranch node={child} L={L} />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function HTreeDiagram({ root, className = '', layout }: { root: TreeNodeData; className?: string; layout?: TreeLayoutConfig }) {
  const L = resolveLayout(layout);
  return (
    <div className={`inline-flex ${className}`} style={{ breakInside: 'avoid' }}>
      <HBranch node={root} L={L} />
    </div>
  );
}

/* ── 调试包装器（上下树） ── */

export function DebugTreeDiagram({ root, className = '', layout }: { root: TreeNodeData; className?: string; layout?: TreeLayoutConfig }) {
  const globalOn = useGeo2dDebug();
  const [debug, setDebug] = useState(false);

  if (debug) {
    return <TreeDebugPanel root={root} initLayout={layout} onClose={() => setDebug(false)} />;
  }

  return (
    <div className={`relative inline-block${globalOn ? ' outline outline-1 outline-dashed outline-teal-400' : ''}`}>
      {globalOn && (
        <button
          onClick={() => setDebug(true)}
          className="absolute top-0 right-0 z-10 text-xs px-1 py-0.5 rounded bg-gray-200 text-gray-600 hover:bg-gray-300 print:hidden opacity-40 hover:opacity-100"
        >🛠</button>
      )}
      <TreeDiagram root={root} className={className} layout={layout} />
    </div>
  );
}
