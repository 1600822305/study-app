// 类型
export type {
  Point2D,
  Edge2D,
  Polygon2D,
  FreeLabel2D,
  AngleArc,
  TickMark,
  RightAngle,
  Ellipse2D,
  Circle2D,
  Arc2D,
  FreePath2D,
  Dimension2D,
  CoordinateSystem2D,
  Axes2D,
  VennSet,
  VennRegion,
  VennElement,
  VennDiagram2D,
  FunctionCurve2D,
  NumberLineRay,
  NumberLineCap,
  Diagram2DData,
} from './types';

// 工具函数
export { toPixel, scaleLen, arcAngles, angleArcPath, angleLabelPos, tickMarkPaths, rightAnglePath } from './utils';

// 主组件
export { Geo2dSvg } from './Geo2dSvg';

// 调试工具
export { DebugGeo2dSvg, Geo2dDebugToggle, useGeo2dDebug, _toggle2d } from './Geo2dDebug';

// 渲染器（供扩展或自定义组合）
export { EdgesRenderer, EdgeArrowDefs } from './renderers/EdgesRenderer';
export { PolygonsRenderer } from './renderers/PolygonsRenderer';
export { CirclesRenderer } from './renderers/CirclesRenderer';
export { LabelsRenderer } from './renderers/LabelsRenderer';
export { MarkersRenderer } from './renderers/MarkersRenderer';
export { AxesRenderer } from './renderers/AxesRenderer';
export { DimensionsRenderer } from './renderers/DimensionsRenderer';
export { PathsRenderer } from './renderers/PathsRenderer';
export { VennRenderer } from './renderers/VennRenderer';
export { FunctionsRenderer } from './renderers/FunctionsRenderer';
