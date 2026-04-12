/**
 * Geo3dSvg — 轻量 3D→SVG 投影组件
 * 用斜二测画法（oblique projection）把 3D 坐标投影到 2D SVG
 * 输出纯 SVG，打印友好，零外部依赖
 */

import { Math as MathTex } from './Math';

export type Point3D = [number, number, number];
type Point2D = [number, number];

export interface Edge {
  from: number;
  to: number;
  hidden?: boolean;
  color?: string;
  strokeWidth?: number;
  arrow?: boolean;
}

interface ProjectedEdge {
  x1: number;
  y1: number;
  x2: number;
  arrow?: boolean;
  y2: number;
  hidden: boolean;
  color?: string;
  strokeWidth?: number;
}

interface Label {
  point: number;
  text: string;
  offset?: [number, number];
}

interface EllipseArc {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  hidden?: boolean;
  startAngle?: number;
  endAngle?: number;
}

export interface Polygon3D {
  points: number[];
  fill: string;
  opacity: number;
}

export interface FreeLabel {
  pos: Point3D;
  text: string;
  tex?: string;
  offset?: [number, number];
  fontSize?: number;
  color?: string;
  dot?: boolean | string;
}

export interface DiagramData {
  name?: string;  // 图的名称，用于调试时识别
  vertices: Point3D[];
  edges: Edge[];
  polygons: Polygon3D[];
  freeLabels: FreeLabel[];
}

// ─── Projection ────────────────────────────────────────────
// JSXGraph-style parallel projection: azimuth (水平旋转) + elevation (俯仰)
// 角度单位: 度。参考 JSXGraph view3d.js getRotationFromAngles()
export type Rotation3D = { az: number; el: number };

function project(p: Point3D, rotation?: Rotation3D): Point2D {
  const [x, y, z] = p;
  
  if (rotation) {
    // JSXGraph parallel projection
    const az = (rotation.az * Math.PI) / 180;
    const el = (rotation.el * Math.PI) / 180;
    const cosAz = Math.cos(az);
    const sinAz = Math.sin(az);
    const sinEl = Math.sin(el);
    const cosEl = Math.cos(el);
    
    const px = -cosAz * x + sinAz * y;
    // SVG y轴向下，取反 JSXGraph 的 screen Y
    const py = sinEl * sinAz * x + sinEl * cosAz * y - cosEl * z;
    return [px, py];
  }
  
  // 默认斜二测
  const cos45 = Math.SQRT2 / 2;
  const scale_y = 0.5;
  const px = x - y * cos45 * scale_y;
  const py = -(z - y * cos45 * scale_y); // SVG y轴向下，取反；y深度方向→左下45°
  return [px, py];
}

// ─── Ellipse path (for arcs) ───────────────────────────────
function ellipseArcPath(
  cx: number, cy: number, rx: number, ry: number,
  startDeg: number, endDeg: number
): string {
  const startRad = (startDeg * Math.PI) / 180;
  const endRad = (endDeg * Math.PI) / 180;
  const x1 = cx + rx * Math.cos(startRad);
  const y1 = cy + ry * Math.sin(startRad);
  const x2 = cx + rx * Math.cos(endRad);
  const y2 = cy + ry * Math.sin(endRad);
  const sweep = endDeg - startDeg;
  const largeArc = Math.abs(sweep) > 180 ? 1 : 0;
  const sweepFlag = sweep > 0 ? 1 : 0;
  return `M ${x1} ${y1} A ${rx} ${ry} 0 ${largeArc} ${sweepFlag} ${x2} ${y2}`;
}

// ─── Shape generators ──────────────────────────────────────

function generatePrism(n: number, radius: number, height: number) {
  const vertices: Point3D[] = [];
  const edges: Edge[] = [];
  const labels: Label[] = [];

  // bottom face
  for (let i = 0; i < n; i++) {
    const angle = (2 * Math.PI * i) / n - Math.PI / 2;
    vertices.push([radius * Math.cos(angle), radius * Math.sin(angle), 0]);
  }
  // top face
  for (let i = 0; i < n; i++) {
    const angle = (2 * Math.PI * i) / n - Math.PI / 2;
    vertices.push([radius * Math.cos(angle), radius * Math.sin(angle), height]);
  }

  // bottom edges
  for (let i = 0; i < n; i++) {
    const next = (i + 1) % n;
    const midY = (vertices[i][1] + vertices[next][1]) / 2;
    edges.push({ from: i, to: next, hidden: midY > 0 });
  }
  // top edges
  for (let i = 0; i < n; i++) {
    const next = (i + 1) % n;
    edges.push({ from: n + i, to: n + next });
  }
  // vertical edges
  for (let i = 0; i < n; i++) {
    const hidden = vertices[i][1] > 0;
    edges.push({ from: i, to: n + i, hidden });
  }

  // labels for top vertices
  const topLabels = ['A', 'B', 'C', 'D', 'E', 'F'];
  const bottomLabels = ['A₁', 'B₁', 'C₁', 'D₁', 'E₁', 'F₁'];
  for (let i = 0; i < Math.min(n, 6); i++) {
    labels.push({ point: n + i, text: topLabels[i], offset: [0, -8] });
    labels.push({ point: i, text: bottomLabels[i], offset: [0, 10] });
  }

  return { vertices, edges, labels };
}

function generatePyramid(n: number, radius: number, height: number) {
  const vertices: Point3D[] = [];
  const edges: Edge[] = [];
  const labels: Label[] = [];

  // apex
  vertices.push([0, 0, height]);
  // base
  for (let i = 0; i < n; i++) {
    const angle = (2 * Math.PI * i) / n - Math.PI / 2;
    vertices.push([radius * Math.cos(angle), radius * Math.sin(angle), 0]);
  }

  // base edges
  for (let i = 0; i < n; i++) {
    const next = (i + 1) % n;
    const midY = (vertices[1 + i][1] + vertices[1 + next][1]) / 2;
    edges.push({ from: 1 + i, to: 1 + next, hidden: midY > 0 });
  }
  // lateral edges
  for (let i = 0; i < n; i++) {
    const v = vertices[1 + i];
    const hidden = v[1] > 0.3 * radius;
    edges.push({ from: 0, to: 1 + i, hidden });
  }

  labels.push({ point: 0, text: 'S', offset: [0, -10] });
  const baseLabels = ['A', 'B', 'C', 'D', 'E', 'F'];
  for (let i = 0; i < Math.min(n, 6); i++) {
    labels.push({ point: 1 + i, text: baseLabels[i], offset: [0, 10] });
  }

  return { vertices, edges, labels };
}

interface CurveShape {
  vertices: Point3D[];
  edges: Edge[];
  labels: Label[];
  ellipses: EllipseArc[];
}

function generateCylinder(radius: number, height: number): CurveShape {
  const vertices: Point3D[] = [
    [-radius, 0, 0],    // 0: bottom left
    [radius, 0, 0],     // 1: bottom right
    [-radius, 0, height], // 2: top left
    [radius, 0, height],  // 3: top right
  ];
  const edges: Edge[] = [
    { from: 0, to: 2 }, // left edge
    { from: 1, to: 3 }, // right edge
  ];
  const labels: Label[] = [];

  // project center of top and bottom
  const [tcx, tcy] = project([0, 0, height]);
  const [bcx, bcy] = project([0, 0, 0]);
  const cos45 = Math.SQRT2 / 2;
  const projRx = radius;
  const projRy = radius * cos45 * 0.5;

  const ellipses: EllipseArc[] = [
    // top full ellipse
    { cx: tcx, cy: tcy, rx: projRx, ry: projRy },
    // bottom front half (visible)
    { cx: bcx, cy: bcy, rx: projRx, ry: projRy, startAngle: 0, endAngle: 180 },
    // bottom back half (hidden)
    { cx: bcx, cy: bcy, rx: projRx, ry: projRy, startAngle: 180, endAngle: 360, hidden: true },
  ];

  return { vertices, edges, labels, ellipses };
}

function generateCone(radius: number, height: number): CurveShape {
  const vertices: Point3D[] = [
    [0, 0, height],      // 0: apex
    [-radius, 0, 0],     // 1: bottom left tangent
    [radius, 0, 0],      // 2: bottom right tangent
  ];
  const edges: Edge[] = [
    { from: 0, to: 1 }, // left slant
    { from: 0, to: 2 }, // right slant
  ];
  const labels: Label[] = [
    { point: 0, text: 'S', offset: [0, -10] },
  ];

  const [bcx, bcy] = project([0, 0, 0]);
  const cos45 = Math.SQRT2 / 2;
  const projRx = radius;
  const projRy = radius * cos45 * 0.5;

  const ellipses: EllipseArc[] = [
    { cx: bcx, cy: bcy, rx: projRx, ry: projRy, startAngle: 0, endAngle: 180 },
    { cx: bcx, cy: bcy, rx: projRx, ry: projRy, startAngle: 180, endAngle: 360, hidden: true },
  ];

  return { vertices, edges, labels, ellipses };
}

function generateSphere(radius: number): CurveShape {
  const vertices: Point3D[] = [];
  const edges: Edge[] = [];
  const labels: Label[] = [];

  const [cx, cy] = project([0, 0, 0]);
  const cos45 = Math.SQRT2 / 2;
  const projRy = radius * cos45 * 0.5;

  const ellipses: EllipseArc[] = [
    // outer circle
    { cx, cy, rx: radius, ry: radius },
    // equator front (visible)
    { cx, cy, rx: radius, ry: projRy, startAngle: 0, endAngle: 180 },
    // equator back (hidden)
    { cx, cy, rx: radius, ry: projRy, startAngle: 180, endAngle: 360, hidden: true },
  ];

  return { vertices, edges, labels, ellipses };
}

// ─── Preset types ──────────────────────────────────────────

type ShapePreset =
  | { type: 'prism'; n: number; radius?: number; height?: number }
  | { type: 'pyramid'; n: number; radius?: number; height?: number }
  | { type: 'cylinder'; radius?: number; height?: number }
  | { type: 'cone'; radius?: number; height?: number }
  | { type: 'sphere'; radius?: number };

interface Geo3dSvgProps {
  shape?: ShapePreset;
  data?: DiagramData;
  width?: number;
  height?: number;
  strokeColor?: string;
  className?: string;
  rotation?: Rotation3D;  // 可选视角旋转，如 { az: 63, el: 46 }
}

export function Geo3dSvg({
  shape,
  data,
  width = 160,
  height = 140,
  strokeColor = '#334155',
  className,
  rotation,
}: Geo3dSvgProps) {
  let vertices: Point3D[] = [];
  let edges: Edge[] = [];
  let labels: Label[] = [];
  let ellipses: EllipseArc[] = [];
  let polygons: Polygon3D[] = [];
  let freeLabels: FreeLabel[] = [];
  let showDots = true;

  if (data) {
    // Direct DiagramData — from modular data files
    vertices = data.vertices; edges = data.edges;
    polygons = data.polygons; freeLabels = data.freeLabels;
    showDots = false;
  } else if (shape?.type === 'prism') {
    const r = shape.radius ?? 40; const h = shape.height ?? 70;
    const d = generatePrism(shape.n, r, h);
    vertices = d.vertices; edges = d.edges; labels = d.labels;
  } else if (shape?.type === 'pyramid') {
    const r = shape.radius ?? 40; const h = shape.height ?? 70;
    const d = generatePyramid(shape.n, r, h);
    vertices = d.vertices; edges = d.edges; labels = d.labels;
  } else if (shape?.type === 'cylinder') {
    const r = shape.radius ?? 40; const h = shape.height ?? 70;
    const d = generateCylinder(r, h);
    vertices = d.vertices; edges = d.edges; labels = d.labels; ellipses = d.ellipses;
  } else if (shape?.type === 'cone') {
    const r = shape.radius ?? 40; const h = shape.height ?? 70;
    const d = generateCone(r, h);
    vertices = d.vertices; edges = d.edges; labels = d.labels; ellipses = d.ellipses;
  } else if (shape?.type === 'sphere') {
    const r = shape.radius ?? 40;
    const d = generateSphere(r);
    vertices = d.vertices; edges = d.edges; labels = d.labels; ellipses = d.ellipses;
  }

  // Project all vertices
  const projected = vertices.map(v => project(v, rotation));

  // Calculate bounding box
  const allX: number[] = [];
  const allY: number[] = [];
  projected.forEach(([px, py]) => { allX.push(px); allY.push(py); });
  ellipses.forEach(e => {
    allX.push(e.cx - e.rx, e.cx + e.rx);
    allY.push(e.cy - e.ry, e.cy + e.ry);
  });
  freeLabels.forEach(fl => {
    const [px, py] = project(fl.pos, rotation);
    const [ox, oy] = fl.offset ?? [0, 0];
    allX.push(px + ox); allY.push(py + oy);
  });

  if (allX.length === 0) return null;

  const minX = Math.min(...allX);
  const maxX = Math.max(...allX);
  const minY = Math.min(...allY);
  const maxY = Math.max(...allY);
  const contentW = maxX - minX;
  const contentH = maxY - minY;
  const pad = 20;
  const viewBox = `${minX - pad} ${minY - pad} ${contentW + pad * 2} ${contentH + pad * 2}`;

  // Project edges
  const projectedEdges: ProjectedEdge[] = edges.map(e => ({
    x1: projected[e.from][0],
    y1: projected[e.from][1],
    x2: projected[e.to][0],
    y2: projected[e.to][1],
    hidden: !!e.hidden,
    color: e.color,
    strokeWidth: e.strokeWidth,
    arrow: e.arrow,
  }));

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      className={`geo-diagram${className ? ' ' + className : ''}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Arrow markers */}
      <defs>
        {projectedEdges.filter(e => e.arrow && e.color).map((e, i) => (
          <marker key={`am-${i}`} id={`arrow-${e.color!.replace('#','')}`} markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <path d={`M0,0 L8,3 L0,6`} fill={e.color} />
          </marker>
        ))}
      </defs>

      {/* Filled polygons (planes) */}
      {polygons.map((p, i) => {
        const pts = p.points.map(idx => projected[idx]);
        const d = pts.map(([x, y], j) => `${j === 0 ? 'M' : 'L'} ${x} ${y}`).join(' ') + ' Z';
        return <path key={`pg-${i}`} d={d} fill={p.fill} opacity={p.opacity} />;
      })}

      {/* Hidden edges (dashed) */}
      {projectedEdges.filter(e => e.hidden).map((e, i) => (
        <line
          key={`h-${i}`}
          x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2}
          stroke={e.color ?? strokeColor}
          strokeWidth={e.strokeWidth ?? 1}
          strokeDasharray="4 3"
          opacity={e.color ? 0.7 : 0.4}
        />
      ))}

      {/* Hidden ellipse arcs */}
      {ellipses.filter(e => e.hidden).map((e, i) => {
        if (e.startAngle !== undefined && e.endAngle !== undefined) {
          return (
            <path
              key={`eh-${i}`}
              d={ellipseArcPath(e.cx, e.cy, e.rx, e.ry, e.startAngle, e.endAngle)}
              fill="none"
              stroke={strokeColor}
              strokeWidth={1}
              strokeDasharray="4 3"
              opacity={0.4}
            />
          );
        }
        return (
          <ellipse
            key={`eh-${i}`}
            cx={e.cx} cy={e.cy} rx={e.rx} ry={e.ry}
            fill="none"
            stroke={strokeColor}
            strokeWidth={1}
            strokeDasharray="4 3"
            opacity={0.4}
          />
        );
      })}

      {/* Visible edges */}
      {projectedEdges.filter(e => !e.hidden).map((e, i) => (
        <line
          key={`v-${i}`}
          x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2}
          stroke={e.color ?? strokeColor}
          strokeWidth={e.strokeWidth ?? 1.5}
          markerEnd={e.arrow && e.color ? `url(#arrow-${e.color.replace('#','')})` : undefined}
        />
      ))}

      {/* Visible ellipse arcs */}
      {ellipses.filter(e => !e.hidden).map((e, i) => {
        if (e.startAngle !== undefined && e.endAngle !== undefined) {
          return (
            <path
              key={`ev-${i}`}
              d={ellipseArcPath(e.cx, e.cy, e.rx, e.ry, e.startAngle, e.endAngle)}
              fill="none"
              stroke={strokeColor}
              strokeWidth={1.5}
            />
          );
        }
        return (
          <ellipse
            key={`ev-${i}`}
            cx={e.cx} cy={e.cy} rx={e.rx} ry={e.ry}
            fill="none"
            stroke={strokeColor}
            strokeWidth={1.5}
          />
        );
      })}

      {/* Vertex dots */}
      {showDots && projected.map(([px, py], i) => (
        <circle key={`d-${i}`} cx={px} cy={py} r={3} fill={strokeColor} />
      ))}

      {/* Vertex-indexed labels */}
      {labels.map((l, i) => {
        const [px, py] = projected[l.point];
        const [ox, oy] = l.offset ?? [0, 0];
        return (
          <text
            key={`l-${i}`}
            x={px + ox}
            y={py + oy}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={18}
            fontFamily="KaTeX_Math, serif"
            fontStyle="italic"
            fill={strokeColor}
          >
            {l.text}
          </text>
        );
      })}

      {/* Free-positioned labels */}
      {freeLabels.map((fl, i) => {
        const [px, py] = project(fl.pos, rotation);
        const [ox, oy] = fl.offset ?? [0, 0];
        const labelColor = fl.color ?? strokeColor;
        const dotColor = typeof fl.dot === 'string' ? fl.dot : (fl.dot ? labelColor : undefined);
        return (
          <g key={`fl-${i}`}>
            {dotColor && <circle cx={px} cy={py} r={3.5} fill={dotColor} />}
            {fl.tex ? (
              <foreignObject x={px + ox - 30} y={py + oy - 12} width={60} height={24} style={{ overflow: 'visible' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: labelColor, fontSize: fl.fontSize ?? 16 }}>
                  <MathTex tex={fl.tex} />
                </div>
              </foreignObject>
            ) : (
              <text
                x={px + ox}
                y={py + oy}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={fl.fontSize ?? 20}
                fontFamily="KaTeX_Math, serif"
                fontStyle="italic"
                fill={labelColor}
              >
                {fl.text}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}
