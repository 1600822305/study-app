---
description: 教学页面 A4 打印排版优化流程
---

# A4 打印排版优化流程

当需要优化某个教学页面的打印布局时，按以下步骤操作。

## 1. 基础检查

- 确认页面已导入 `PageBreak` 组件：`import { PageHeader, ExportButton, PageBreak } from '@/components/shared';`
- 确认页面有 `<ExportButton />` 按钮（带 `print:hidden` class）
- 确认 `src/index.css` 中的 `@page` 和 `@media print` 规则存在

## 2. 全局 CSS 规则（已配置，勿重复添加）

```css
@page {
  size: A4 portrait;
  margin: 8mm 5mm 8mm 5mm;  /* 上 右 下 左 */
}
```

关键 print CSS 规则位于 `src/index.css`：
- `h1, h2, h3, h4` → `break-after: avoid`（标题不单独留在页尾）
- `table, figure, img` → `break-inside: avoid`（表格/图片不截断）
- `[class*="bg-white"][class*="rounded-lg/xl"]` → `break-inside: avoid`（白底小卡片不截断）
- `.fixed` → `display: none`（隐藏浮动按钮等）

## 3. 分页策略

### 3.1 使用 PageBreak 组件强制分页
```tsx
<PageBreak label="章节标题" />
```
- 在大章节之间插入，确保新章节从新页开始
- `label` 参数可选，仅在预览模式显示

### 3.2 防止内容被切割
对于不希望跨页的块，添加内联样式：
```tsx
<div style={{ breakInside: 'avoid' }}>
  {/* 内容 */}
</div>
```
**注意**：CSS 的 `break-inside: avoid` 对较大的容器可能被浏览器忽略。如果仍然被切割，改用 `<PageBreak />` 在该块前面强制分页。

### 3.3 不要在 CSS 中对大容器用 break-inside: avoid
只对小卡片（`bg-white rounded-lg`）用。大的彩色 section 容器（如 `bg-red-50 rounded-xl`）如果内容超过半页高度，浏览器会忽略 avoid 规则。

## 4. 填充空白页尾的方法（按优先级排序）

1. **增大间距**：`space-y-2 → space-y-3`、`p-3 → p-4`、`mb-4 → mb-6`
2. **增大 padding**：容器 `p-4 → p-5`，卡片 `p-2 → p-3`
3. **移动内容**：把后面章节的小块内容提前到当前页
4. **添加内容**：作为最后手段，添加补充说明或总结框

## 5. 压缩溢出内容的方法

当某页内容超出一页时：
1. **减小间距**：`space-y-3 → space-y-1`、`p-5 → p-3`、`mb-4 → mb-2`
2. **减小 padding**：容器 `p-5 → p-3`，卡片 `p-3 → p-2`
3. **缩小字号**：标题 `text-lg → text-base`，正文 `text-base → text-sm`
4. **压缩后仍溢出**：用 `<PageBreak />` 把溢出部分推到下一页

## 6. 迭代调试流程

1. 用浏览器打印预览（Ctrl+P）查看实际效果
2. 一次只调整一页，从第一页开始往后推
3. 每调完一页让用户确认"定死"后再处理下一页
4. 注意：屏幕预览和实际打印预览可能有偏差，以 **Ctrl+P 打印预览** 为准

## 7. 常见陷阱

- **重复内容**：如果把某个 section 移到前面页面，记得从原位置删除
- **编号错乱**：移动 section 后要更新所有后续 section 的编号
- **浮动元素**：`position: fixed` 的元素（如聊天按钮）需要在 print CSS 中隐藏
- **大容器 break-inside**：浏览器可能忽略，用 PageBreak 更可靠
- **import 未使用**：添加 PageBreak import 后要立即使用，否则 lint 报警告
