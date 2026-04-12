export type Point2D = [number, number];

export interface Edge2D {
  from: number;
  to: number;
  dashed?: boolean;
  color?: string;
  strokeWidth?: number;
  arrow?: 'end' | 'start' | 'both';
}

export interface Polygon2D {
  points: number[];
  fill: string;
  opacity: number;
}

export interface FreeLabel2D {
  pos: Point2D;
  text?: string;
  tex?: string;
  offset?: [number, number];
  fontSize?: number;
  color?: string;
  dot?: boolean | string;
}

export interface AngleArc {
  vertex: number;
  from: number;
  to: number;
  radius?: number;
  label?: string;
  color?: string;
}

export interface TickMark {
  from: number;
  to: number;
  count: number;
  color?: string;
}

export interface RightAngle {
  vertex: number;
  from: number;
  to: number;
  size?: number;
  color?: string;
}

export interface Ellipse2D {
  center: Point2D;
  rx: number;
  ry: number;
  color?: string;
  strokeWidth?: number;
  dashed?: boolean;
  fill?: string;
  fillOpacity?: number;
}

export interface Circle2D {
  center: Point2D;
  radius: number;
  color?: string;
  strokeWidth?: number;
  dashed?: boolean;
  fill?: string;
  fillOpacity?: number;
}

export interface Arc2D {
  center: Point2D;
  radius: number;
  startAngle: number;   // 角度制（0~360）
  endAngle: number;
  color?: string;
  strokeWidth?: number;
  fill?: string;
  fillOpacity?: number;
}

/** 花括号标注 */
export interface Brace2D {
  /** 起点（有坐标系时为数学坐标，否则为像素） */
  from: Point2D;
  /** 终点 */
  to: Point2D;
  /** 文字标注 */
  label?: string;
  /** LaTeX 标注 */
  tex?: string;
  /** 花括号朝哪边，默认 top */
  side?: 'top' | 'bottom' | 'left' | 'right';
  /** 花括号高度（像素），默认 12 */
  height?: number;
  /** 颜色 */
  color?: string;
  /** 标注字号，默认 14 */
  fontSize?: number;
}

export interface FreePath2D {
  d: string;
  color?: string;
  strokeWidth?: number;
  dashed?: boolean;
  fill?: string;
  fillOpacity?: number;
}

/** 函数曲线（需配合 coordinateSystem + axes 使用） */
export interface FunctionCurve2D {
  /** 函数表达式，接收数学坐标 x，返回 y */
  fn: (x: number) => number;
  /** 颜色 */
  color?: string;
  /** 线宽，默认 2 */
  strokeWidth?: number;
  /** 虚线 */
  dashed?: boolean;
  /** x 采样范围 [min, max]，默认使用 axes.xRange */
  xRange?: [number, number];
  /** 采样点数，默认 200 */
  samples?: number;
}

export interface Dimension2D {
  from: Point2D;
  to: Point2D;
  label?: string;
  tex?: string;
  color?: string;
  offset?: number;
}

/** 坐标系配置：启用后所有坐标按数学坐标处理，自动转像素 */
export interface CoordinateSystem2D {
  /** 原点在像素空间中的位置 */
  origin: Point2D;
  /** 每个数学单位对应的像素数 [scaleX, scaleY]。y 通常为负（数学 y 向上，像素 y 向下） */
  scale: Point2D;
}

/** 数轴盖帽线段（两端点向上升起，顶部连线，表示区间） */
export interface NumberLineCap {
  /** 左端点 x 坐标（数学坐标） */
  from: number;
  /** 右端点 x 坐标（数学坐标） */
  to: number;
  /** 左端点是否为空心圆（true = 开区间），默认 false */
  openFrom?: boolean;
  /** 右端点是否为空心圆（true = 开区间），默认 false */
  openTo?: boolean;
  /** 颜色，默认 #dc2626 */
  color?: string;
  /** 垂直上升高度（像素），默认 18 */
  riseHeight?: number;
}

/** 数轴倒 L 形射线（从某点垂直下降，再水平延伸带箭头） */
export interface NumberLineRay {
  /** 射线起点的 x 坐标（数学坐标） */
  x: number;
  /** 射线方向 */
  direction: 'left' | 'right';
  /** 起点是否为空心圆（true = 开区间，false = 闭区间），默认 false */
  open?: boolean;
  /** 颜色，默认 #dc2626 */
  color?: string;
  /** 垂直下降高度（像素），默认 18 */
  dropHeight?: number;
}

/** 坐标轴配置 */
export interface Axes2D {
  /** x 轴刻度范围 [min, max]（数学坐标） */
  xRange: [number, number];
  /** y 轴刻度范围 [min, max]（数学坐标） */
  yRange: [number, number];
  /** 刻度步长，默认 1 */
  step?: number;
  /** 轴线颜色，默认 #334155 */
  color?: string;
  /** 是否显示刻度数字，默认 true */
  showNumbers?: boolean;
  /** 是否显示网格，默认 false */
  showGrid?: boolean;
  /** 指定 x 轴只显示这些刻度数字（不设则显示所有整数刻度） */
  xTicks?: number[];
  /** 指定 y 轴只显示这些刻度数字（不设则显示所有整数刻度） */
  yTicks?: number[];
  /** 是否显示原点 O 标签，默认 true */
  showOriginLabel?: boolean;
  /** 刻度数字 font-weight，默认 'normal' */
  tickFontWeight?: string;
  /** 刻度数字颜色（覆盖轴线颜色） */
  tickColor?: string;
  /** 自定义 x 轴刻度文字，如 { 4: 'a' } 会把 x=4 处显示为 a */
  xTickLabels?: Record<number, string>;
  /** x 轴刻度方向：'both'(默认) | 'up' | 'down' */
  xTickSide?: 'both' | 'up' | 'down';
  /** 是否显示 x 轴，默认 true */
  showXAxis?: boolean;
  /** 是否显示 y 轴，默认 true */
  showYAxis?: boolean;
}

/** 韦恩图集合圆 */
export interface VennSet {
  /** 圆心（像素坐标） */
  center: Point2D;
  /** 半径 */
  radius: number;
  /** 集合标签（如 "A"） */
  label?: string;
  /** 标签 LaTeX */
  tex?: string;
  /** 标签偏移（相对圆心） */
  labelOffset?: [number, number];
  /** 圆边框颜色 */
  color?: string;
  /** 填充色 */
  fill?: string;
  /** 填充透明度，默认 0.15 */
  fillOpacity?: number;
  /** 虚线 */
  dashed?: boolean;
}

/** 韦恩图高亮区域 */
export interface VennRegion {
  /** 区域类型 */
  type:
    | 'intersection'    // A ∩ B（两圆交集）
    | 'union'           // A ∪ B
    | 'differenceA'     // A - B（A 减 B）
    | 'differenceB'     // B - A
    | 'complement'      // 全集 - 所有圆
    | 'intersectionAB'  // 同 intersection（三圆时：A ∩ B 不含 C）
    | 'intersectionAC'  // 三圆：A ∩ C 不含 B
    | 'intersectionBC'  // 三圆：B ∩ C 不含 A
    | 'intersectionABC' // 三圆交集 A ∩ B ∩ C
    | 'onlyA'           // 三圆：仅 A（不含 B、C）
    | 'onlyB'           // 三圆：仅 B
    | 'onlyC';          // 三圆：仅 C
  /** 填充色 */
  fill: string;
  /** 填充透明度，默认 0.25 */
  fillOpacity?: number;
}

/** 韦恩图元素标签（放在区域内的文字） */
export interface VennElement {
  /** 位置（像素坐标） */
  pos: Point2D;
  /** 纯文本 */
  text?: string;
  /** LaTeX */
  tex?: string;
  /** 字号，默认 14 */
  fontSize?: number;
  /** 颜色 */
  color?: string;
  /** 字重 */
  fontWeight?: 'bold' | 'normal';
}

/** 韦恩图 */
export interface VennDiagram2D {
  /** 全集矩形左上角 */
  rectOrigin: Point2D;
  /** 全集矩形宽高 */
  rectSize: [number, number];
  /** 全集标签（默认 "U"），右上角 */
  universalLabel?: string;
  /** 全集边框颜色 */
  rectColor?: string;
  /** 全集矩形圆角，默认 0 */
  rectRx?: number;
  /** 全集矩形背景填充 */
  rectFill?: string;
  /** 全集矩形背景填充透明度 */
  rectFillOpacity?: number;
  /** 集合圆（1~3 个） */
  sets: VennSet[];
  /** 高亮区域 */
  regions?: VennRegion[];
  /** 区域内元素标签 */
  elements?: VennElement[];
}

export interface Diagram2DData {
  name?: string;
  /** 可选坐标系。提供后 vertices/freeLabels.pos/circles.center/dimensions.from|to/arcs.center 均视为数学坐标 */
  coordinateSystem?: CoordinateSystem2D;
  /** 可选坐标轴。需同时提供 coordinateSystem */
  axes?: Axes2D;
  vertices: Point2D[];
  edges: Edge2D[];
  polygons: Polygon2D[];
  freeLabels: FreeLabel2D[];
  angleArcs?: AngleArc[];
  tickMarks?: TickMark[];
  rightAngles?: RightAngle[];
  ellipses?: Ellipse2D[];
  circles?: Circle2D[];
  arcs?: Arc2D[];
  dimensions?: Dimension2D[];
  paths?: FreePath2D[];
  functions?: FunctionCurve2D[];
  braces?: Brace2D[];
  /** 数轴倒 L 形射线 */
  rays?: NumberLineRay[];
  /** 数轴盖帽线段 */
  caps?: NumberLineCap[];
  venn?: VennDiagram2D;
}
