import { Math as MathTex } from '../../Math';
import type { Brace2D, Point2D } from '../types';

interface BracesRendererProps {
  braces: Brace2D[];
  strokeColor: string;
}

/**
 * 标准花括号 SVG path
 *
 * 基于 Stack Overflow 经典方案（6 段路径）：
 *   端钩(C) → 水平臂(h) → 尖点入(S) → 尖点出(C) → 水平臂(h) → 端钩(S)
 *
 * 参考: https://stackoverflow.com/questions/15277448
 */
function bracePath(from: Point2D, to: Point2D, side: string, h: number): string {
  const [x1, y1] = from;
  const [x2, y2] = to;
  const w = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  if (w < 2) return '';

  // r = 端钩/尖点的圆角半径
  const r = Math.min(h / 2, w / 4);

  // 主轴单位向量
  const tx = (x2 - x1) / w, ty = (y2 - y1) / w;
  // 法线方向（花括号突出方向）
  let nx: number, ny: number;
  switch (side) {
    case 'bottom': nx = -ty; ny = tx;  break;  // 屏幕下方（正交左转）
    case 'left':   nx = ty;  ny = -tx; break;
    case 'right':  nx = -ty; ny = tx;  break;
    default:       nx = ty;  ny = -tx; break;  // top：屏幕上方（正交右转）
  }

  // 辅助：沿主轴 along、沿法线 perp 的绝对像素坐标
  const P = (along: number, perp: number): string => {
    return `${x1 + tx * along + nx * perp} ${y1 + ty * along + ny * perp}`;
  };

  // 6 段路径（SO 经典方案的参数化版本）
  // 段1: 左端钩 — 从基线弯向法线方向
  // 段2: 左水平臂
  // 段3: 尖点入 — 水平臂弯向尖点
  // 段4: 尖点出 — 尖点弯回水平臂
  // 段5: 右水平臂
  // 段6: 右端钩 — 从法线方向弯回基线
  return [
    `M ${P(0, 0)}`,
    `C ${P(0, r)} ${P(r, r)} ${P(r, r)}`,          // 段1: 左端钩
    `L ${P(w / 2 - r, r)}`,                          // 段2: 左臂
    `C ${P(w / 2 - r, r)} ${P(w / 2, r)} ${P(w / 2, 2 * r)}`, // 段3: 尖点入
    `C ${P(w / 2, r)} ${P(w / 2 + r, r)} ${P(w / 2 + r, r)}`, // 段4: 尖点出
    `L ${P(w - r, r)}`,                               // 段5: 右臂
    `C ${P(w - r, r)} ${P(w, r)} ${P(w, 0)}`,        // 段6: 右端钩
  ].join(' ');
}

export function BracesRenderer({ braces, strokeColor }: BracesRendererProps) {
  return (
    <>
      {braces.map((b, i) => {
        const [x1, y1] = b.from;
        const [x2, y2] = b.to;
        const side = b.side ?? 'top';
        const h = b.height ?? 12;
        const color = b.color ?? strokeColor;
        const fontSize = b.fontSize ?? 14;
        const d = bracePath(b.from, b.to, side, h);

        // 主轴与法线
        const w = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        const tx = w > 0 ? (x2 - x1) / w : 0, ty = w > 0 ? (y2 - y1) / w : 0;
        let nx: number, ny: number;
        switch (side) {
          case 'bottom': nx = -ty; ny = tx;  break;
          case 'left':   nx = ty;  ny = -tx; break;
          case 'right':  nx = -ty; ny = tx;  break;
          default:       nx = ty;  ny = -tx; break;
        }

        const r = Math.min(h / 2, w / 4);
        const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
        // 标签放在尖点外侧
        const labelDist = 2 * r + fontSize * 0.55;
        const lx = mx + nx * labelDist, ly = my + ny * labelDist;

        return (
          <g key={`brace-${i}`}>
            <path d={d} fill="none" stroke={color} strokeWidth={1.5} />
            {b.tex ? (
              <foreignObject x={lx - 40} y={ly - 12} width={80} height={24} style={{ overflow: 'visible' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', fontSize, color, whiteSpace: 'nowrap' }}>
                  <MathTex tex={b.tex} />
                </div>
              </foreignObject>
            ) : b.label ? (
              <text x={lx} y={ly} textAnchor="middle" dominantBaseline="middle" fontSize={fontSize} fill={color} fontWeight="bold">
                {b.label}
              </text>
            ) : null}
          </g>
        );
      })}
    </>
  );
}
