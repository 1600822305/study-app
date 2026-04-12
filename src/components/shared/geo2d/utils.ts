import type { Point2D, CoordinateSystem2D } from './types';

/* ── 坐标转换 ── */

export const toPixel = (p: Point2D, cs?: CoordinateSystem2D): Point2D =>
  cs ? [cs.origin[0] + p[0] * cs.scale[0], cs.origin[1] + p[1] * cs.scale[1]] : p;

export const scaleLen = (r: number, axis: 'x' | 'y' = 'x', cs?: CoordinateSystem2D) =>
  cs ? Math.abs(r * cs.scale[axis === 'x' ? 0 : 1]) : r;

/* ── 角弧角度计算 ── */
export function arcAngles(vx: number, vy: number, ax: number, ay: number, bx: number, by: number) {
  const a1 = Math.atan2(ay - vy, ax - vx);
  const a2 = Math.atan2(by - vy, bx - vx);
  let start = a1, end = a2;
  let diff = end - start;
  if (diff < 0) diff += 2 * Math.PI;
  if (diff > Math.PI) { const t = start; start = end; end = t; }
  return { start, end };
}

/* ── 角弧 SVG path ── */
export function angleArcPath(vx: number, vy: number, ax: number, ay: number, bx: number, by: number, radius: number): string {
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
export function angleLabelPos(vx: number, vy: number, ax: number, ay: number, bx: number, by: number, radius: number): [number, number] {
  const { start, end } = arcAngles(vx, vy, ax, ay, bx, by);
  const diff = end - start < 0 ? end - start + 2 * Math.PI : end - start;
  const mid = start + diff / 2;
  return [vx + (radius + 10) * Math.cos(mid), vy + (radius + 10) * Math.sin(mid)];
}

/* ── tick marks 计算 ── */
export function tickMarkPaths(ax: number, ay: number, bx: number, by: number, count: number): string[] {
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
export function rightAnglePath(vx: number, vy: number, ax: number, ay: number, bx: number, by: number, size: number): string {
  const dx1 = ax - vx, dy1 = ay - vy, len1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
  const dx2 = bx - vx, dy2 = by - vy, len2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
  if (len1 === 0 || len2 === 0) return '';
  const ux1 = (dx1 / len1) * size, uy1 = (dy1 / len1) * size;
  const ux2 = (dx2 / len2) * size, uy2 = (dy2 / len2) * size;
  return `M ${vx + ux1} ${vy + uy1} L ${vx + ux1 + ux2} ${vy + uy1 + uy2} L ${vx + ux2} ${vy + uy2}`;
}
