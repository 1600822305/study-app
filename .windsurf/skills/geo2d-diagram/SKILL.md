# Geo2dSvg 2D 平面几何图形画法

## 坐标系
直接使用 SVG 坐标系：
- x → 水平向右
- y → 竖直**向下**（注意：不是数学坐标系的向上）
- 所以三角形顶点 y 值最小（在上方）

## 数据结构
```typescript
import type { Diagram2DData } from '@/components/shared/Geo2dSvg';

const myDiagram: Diagram2DData = {
  name: '图名（调试面板显示）',
  vertices: [
    [70, 10],   // 0: 顶点A（上方）
    [10, 95],   // 1: 顶点B（左下）
    [130, 95],  // 2: 顶点C（右下）
  ],
  edges: [
    { from: 0, to: 1 },                              // 普通实线
    { from: 0, to: 3, dashed: true, color: '#3b82f6' }, // 蓝色虚线
    { from: 1, to: 2, color: '#dc2626', strokeWidth: 2.5 }, // 红色粗线
  ],
  polygons: [
    { points: [0, 1, 2], fill: '#f0fdf4', opacity: 0.8 }, // 半透明填充
  ],
  freeLabels: [
    { pos: [70, 10], text: 'A', offset: [0, -12], dot: true },
    { pos: [15, 50], text: 'a', offset: [-12, 0], fontSize: 15, color: '#3b82f6' },
    // tex 模式（KaTeX 公式）:
    { pos: [80, 60], text: '', tex: '\\vec{n}', offset: [0, -15], color: '#dc2626' },
  ],
  angleArcs: [
    { vertex: 0, from: 1, to: 2, radius: 14, label: '60°', color: '#334155' },
  ],
  tickMarks: [
    { from: 0, to: 1, count: 2, color: '#dc2626' },  // 2条等边标记
  ],
  rightAngles: [
    { vertex: 0, from: 1, to: 2, size: 10, color: '#3b82f6' },
  ],
};
```

## 2D 专属功能（Geo3dSvg 没有的）

### angleArcs — 角弧标记
- `vertex`: 角的顶点索引
- `from` / `to`: 角的两条边分别指向的顶点索引
- `radius`: 弧的半径（默认 15）
- `label`: 可选文字（如 "60°"），自动定位在弧外侧
- 自动取小角（< 180°）

### tickMarks — 等边标记
- `from` / `to`: 边的两个端点索引
- `count`: 标记数量（1 = 一条杠，2 = 两条杠，3 = 三条杠）
- 自动画在边的中点，垂直于边

### rightAngles — 直角标记
- `vertex`: 直角所在的顶点索引
- `from` / `to`: 两条直角边分别指向的顶点索引
- `size`: 方框大小（默认 10）

## 使用方式
```tsx
// 页面中使用（支持调试）
import { DebugGeo2dSvg, Geo2dDebugToggle } from '@/components/shared';

<DebugGeo2dSvg data={myDiagram} width={140} height={110} className="shrink-0" />
<DebugGeo2dSvg data={myDiagram} width={90} height={80} strokeColor="#16a34a" />

// 页面底部（LessonLayout 之后、</div> 之前）
<Geo2dDebugToggle />
```

## 调试流程
1. 页面右下角点 📏 开启 2D 调试模式
2. 每个图出现 🛠 按钮
3. 点击进入全屏调试面板
4. **拖拽红色圆圈**：移动顶点
5. **拖拽蓝色圆圈**：移动标签 offset
6. 底部面板显示代码，点击 📋 复制

## 数据文件命名
`features/geometry/data/X.X/X.X-xxx-diagrams.ts`

## 常见模式

### 三角形 + 顶点标签
```typescript
vertices: [[70, 10], [10, 95], [130, 95]],
edges: [{ from: 0, to: 1 }, { from: 1, to: 2 }, { from: 0, to: 2 }],
freeLabels: [
  { pos: [70, 10], text: 'A', offset: [0, -12], dot: true },
  { pos: [10, 95], text: 'B', offset: [-12, 8], dot: true },
  { pos: [130, 95], text: 'C', offset: [12, 8], dot: true },
],
```

### 直角三角形 + 直角标记
```typescript
rightAngles: [{ vertex: 0, from: 1, to: 2, size: 12 }],
```

### 等腰三角形 + tick marks
```typescript
tickMarks: [
  { from: 0, to: 1, count: 2 },
  { from: 0, to: 2, count: 2 },
],
```

### 中位线（红色粗线 + 中点标记）
```typescript
edges: [..., { from: 3, to: 4, color: '#dc2626', strokeWidth: 2.5 }],
freeLabels: [
  { pos: [42, 53], text: 'M', offset: [-14, -4], dot: '#dc2626', color: '#dc2626' },
],
```
