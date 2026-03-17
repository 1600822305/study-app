---
description: 为教学模块创建独立答案页组件（从旧的 explanationLatex 循环渲染迁移到纯 JSX 自由布局）
---

## 创建答案页组件流程

### 前置条件
- 目标模块已有题库文件 `features/xxx/data/xxx-questions.ts`
- 目标模块主页面 `xxxPage.tsx` 已有答案区（通常是 `isPrinting && printOptions.showAnswers` 条件渲染块）

### 步骤

1. **读取题库文件**，确认题目数量、分组（practice/quiz）、每题的 correctAnswer 和选项

2. **新建答案组件** `features/xxx/xxx-answers.tsx`，模板结构：
```tsx
import { Math as MathTex, PageBreak } from '@/components/shared';

export function XxxAnswers() {
  return (
    <section className="mb-8 print-answers">
      <PageBreak label="答案与解析" />
      <h2 className="text-xl font-bold text-gray-900 mb-4">📝 X.X 模块名 — 答案与解析</h2>

      <div className="mb-5">
        <p className="font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">一、分组标题</p>
        <div className="columns-2 gap-4 text-gray-700">
          {/* 每道题一个 div */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">1.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：X</p>
              <p className="mt-1">解析文字 + <MathTex tex="公式" /></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

3. **逐题写解析 JSX**：
   - 参考题库中的 `explanationLatex` 内容，但改写成 JSX 混排
   - 数学表达式用 `<MathTex tex="..." />`
   - 居中公式用 `<p className="text-center"><MathTex tex="..." /></p>`
   - 分步骤用 `<strong>第①步：xxx</strong>`
   - 短题自然双列，长题靠 `columns-2` 自动流式排列
   - 需要插图时直接 import 图表组件

4. **修改主页面** `xxxPage.tsx`：
   - 添加 import: `import { XxxAnswers } from './xxx-answers';`
   - 替换答案区为: `{isPrinting && printOptions.showAnswers && <XxxAnswers />}`
   - 删除旧的辅助代码（answerSections 数组、formatAnswerTex、renderAnswerValue 等）

5. **验证编译**：
// turbo
```
npx tsc -b --noEmit
```

### 布局规范
- 容器: `columns-2 gap-4 text-gray-700`
- 每题: `flex gap-2 items-start mb-3` + `style={{ breakInside: 'avoid' }}`
- 题号: `text-blue-600 font-bold shrink-0`
- 答案行: `font-bold text-gray-900`
- 分页: `<PageBreak />` 按需添加，不强制
- 禁止: `text-sm`、`text-xs`、Unicode 符号（❌✅→）在 LaTeX 中

### 参考实例
- `features/trig/solve-answers.tsx`（首个使用此架构的模块）
