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
import type { Diagram2DData, Point2D } from './types';
import { toPixel, scaleLen } from './utils';
import { EdgeArrowDefs, EdgesRenderer } from './renderers/EdgesRenderer';
import { PolygonsRenderer } from './renderers/PolygonsRenderer';
import { CirclesRenderer } from './renderers/CirclesRenderer';
import { LabelsRenderer } from './renderers/LabelsRenderer';
import { MarkersRenderer } from './renderers/MarkersRenderer';
import { AxesRenderer } from './renderers/AxesRenderer';
import { DimensionsRenderer } from './renderers/DimensionsRenderer';
import { PathsRenderer } from './renderers/PathsRenderer';
import { VennRenderer } from './renderers/VennRenderer';
import { FunctionsRenderer } from './renderers/FunctionsRenderer';
import { BracesRenderer } from './renderers/BracesRenderer';

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
  const { coordinateSystem: cs, axes, edges, polygons, freeLabels: rawFreeLabels, angleArcs = [], tickMarks = [], rightAngles = [], ellipses: rawEllipses = [], circles: rawCircles = [], arcs: rawArcs = [], dimensions: rawDimensions = [], paths: freePaths = [], functions: fnCurves = [], braces: rawBraces = [] } = data;

  // 坐标转换
  const tp = (p: Point2D): Point2D => toPixel(p, cs);
  const sl = (r: number, axis: 'x' | 'y' = 'x') => scaleLen(r, axis, cs);

  // 转换所有坐标
  const vertices = data.vertices.map(tp);
  const freeLabels = rawFreeLabels.map(fl => ({ ...fl, pos: tp(fl.pos) as Point2D }));
  const circles = rawCircles.map(c => ({ ...c, center: tp(c.center) as Point2D, radius: sl(c.radius) }));
  const arcs = rawArcs.map(a => ({ ...a, center: tp(a.center) as Point2D, radius: sl(a.radius) }));
  const ellipses = rawEllipses.map(e => ({ ...e, center: tp(e.center) as Point2D, rx: sl(e.rx, 'x'), ry: sl(e.ry, 'y') }));
  const dimensions = rawDimensions.map(d => ({ ...d, from: tp(d.from) as Point2D, to: tp(d.to) as Point2D }));
  const braces = rawBraces.map(b => ({ ...b, from: tp(b.from) as Point2D, to: tp(b.to) as Point2D }));

  // Mafs 同款策略：viewBox = "0 0 width height"，像素 1:1 无缩放
  const viewBox = `${xOff} ${yOff} ${width} ${height}`;
  const markerId = data.name ? `arrow-${data.name.replace(/\s/g, '')}` : 'arrow-2d';

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      className={`geo-diagram${className ? ' ' + className : ''}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      <defs>
        <EdgeArrowDefs edges={edges} strokeColor={strokeColor} markerId={markerId} />
      </defs>

      {cs && axes && <AxesRenderer cs={cs} axes={axes} strokeColor={strokeColor} markerId={markerId} rays={data.rays} caps={data.caps} />}

      <CirclesRenderer circles={circles} ellipses={ellipses} arcs={arcs} strokeColor={strokeColor} />

      <PolygonsRenderer polygons={polygons} vertices={vertices} />

      <EdgesRenderer edges={edges} vertices={vertices} strokeColor={strokeColor} markerId={markerId} />

      <MarkersRenderer vertices={vertices} angleArcs={angleArcs} tickMarks={tickMarks} rightAngles={rightAngles} strokeColor={strokeColor} />

      <LabelsRenderer freeLabels={freeLabels} strokeColor={strokeColor} />

      <PathsRenderer paths={freePaths} strokeColor={strokeColor} />

      {cs && axes && fnCurves.length > 0 && <FunctionsRenderer functions={fnCurves} cs={cs} axes={axes} strokeColor={strokeColor} />}

      <DimensionsRenderer dimensions={dimensions} />

      {braces.length > 0 && <BracesRenderer braces={braces} strokeColor={strokeColor} />}

      {data.venn && <VennRenderer venn={data.venn} strokeColor={strokeColor} />}
    </svg>
  );
});
