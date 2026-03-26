# Geo3dSvg 通用坐标系图像画法

## 投影方式
斜二测画法（oblique projection）：
- x → 水平向右
- z → 竖直向上
- y → 左下 45° 方向，缩放 0.5

## 坐标轴颜色规范
- **x 轴**: `#ef4444` (红色)
- **y 轴**: `#16a34a` (绿色)
- **z 轴**: `#2563eb` (蓝色)

## 线段粗细规范
- 坐标轴/高亮边: `strokeWidth: 2` 或 `strokeWidth: 2.5`
- 轴延伸段: `strokeWidth: 1.5`
- 普通边（非坐标轴）: `strokeWidth: 2`，颜色 `#334155`（深灰）

## 坐标轴延伸段
带箭头的延伸段，从顶点向外延伸：
```typescript
{ from: vertexIdx, to: extIdx, color: '#ef4444', strokeWidth: 1.5, arrow: true }
```

## 标签规范
1. **顶点标签**: 直接放在顶点位置，用 offset 微调
2. **轴标签** (x, y, z): 放在轴延伸端，带对应颜色
3. **边长标签** (如 "1"): 放在边中点，fontSize: 18，color: `#334155`

## 典型结构

### 直角三棱锥建系（O 为原点，三边互垂）
```typescript
const len = 72;   // 棱长
const ext = 115;  // 轴延伸端

vertices: [
  [0, 0, 0],       // O
  [len, 0, 0],     // A (x轴方向)
  [0, len, 0],     // B (y轴方向)
  [0, 0, len],     // C (z轴方向)
  [ext, 0, 0],     // x轴延伸
  [0, ext, 0],     // y轴延伸
  [0, 0, ext],     // z轴延伸
]

edges: [
  // 三条坐标轴棱（着色）
  { from: 0, to: 1, color: '#ef4444', strokeWidth: 2 },  // x
  { from: 0, to: 2, color: '#16a34a', strokeWidth: 2 },  // y
  { from: 0, to: 3, color: '#2563eb', strokeWidth: 2 },  // z
  // 轴延伸（带箭头）
  { from: 1, to: 4, color: '#ef4444', strokeWidth: 1.5, arrow: true },
  { from: 2, to: 5, color: '#16a34a', strokeWidth: 1.5, arrow: true },
  { from: 3, to: 6, color: '#2563eb', strokeWidth: 1.5, arrow: true },
  // 其他边（深灰加粗）
  { from: 1, to: 2, color: '#334155', strokeWidth: 2 },
  ...
]
```

### 长方体建系（顶点为原点，三条棱为轴）
使用 `makeCuboid` 辅助函数：
```typescript
const base = makeCuboid(
  [[0, 1, '#ef4444'], [0, 3, '#16a34a'], [0, 4, '#2563eb']],  // 高亮边 [from, to, color]
  [],  // 高亮面
);
// 添加轴延伸点和边
```

## 常见问题
1. **线段太浅**: 所有非背景边都要指定 color 和 strokeWidth
2. **标签被遮挡**: 调整 offset，y 轴方向标签往往需要特殊处理
3. **轴延伸方向**: 延伸点坐标要沿着原轴方向继续，不要乱偏
