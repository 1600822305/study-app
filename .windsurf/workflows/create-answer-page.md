---
description: 为教学模块创建独立答案页组件（单一数据源架构：解析 JSX 写一次，交互+打印共用）
---

## 创建答案页组件流程

### 架构原则
- **解析内容只写一次**：在答案文件中定义 `Record<string, ReactNode>` 对象
- **交互模式**：PracticeCard / QuizPanel 通过 `explanations` prop 读取解析 JSX
- **打印模式**：答案组件从同一个对象循环渲染，布局自己控制
- **数据源零解析**：`xxx-questions.ts` 只存题目数据，不存 explanation / explanationLatex

### 前置条件
- 目标模块已有题库文件 `features/xxx/data/xxx-questions.ts`
- 目标模块主页面 `xxxPage.tsx` 使用 PracticeCard 或 QuizPanel 渲染题目

### 步骤

1. **读取题库文件**，确认题目 ID、分组、correctAnswer 和选项
   - ❗ **correctAnswer 必须等于正确选项的 `value`，不是 `label`**（QuizPanel 用 `selected === correctAnswer` 判对错）
   - 例如：option `{ label: 'A', value: '(7,-6)' }` → `correctAnswer: '(7,-6)'`，不是 `'A'`
   - 填空题 `correctAnswer` 是用户填写的文本，不受此规则影响

2. **清理数据源**：新建干净的 `xxx-questions.ts`（不含 explanation / explanationLatex 字段），删旧文件后改名
   - 直接新建 `xxx-questions-clean.ts`，写入纯题目数据
   - 删除旧 `xxx-questions.ts`，将 clean 文件重命名

3. **新建/重写答案组件** `features/xxx/xxx-answers.tsx`，结构如下：

```tsx
import type { ReactNode } from 'react';
import { Math as MathTex, PageBreak } from '@/components/shared';
import { questionGroup1, questionGroup2 } from './data/xxx-questions';
import type { QuizQuestionData } from '@/types';

// ══════════════════════════════════════════════
// 解析内容（唯一数据源）— 交互 + 打印共用
// ══════════════════════════════════════════════

export const xxxExplanations: Record<string, ReactNode> = {
  'q-id-1': (
    <>
      <p>解析文字 + <MathTex tex="公式" /></p>
      <p className="text-center"><MathTex tex="居中公式" /></p>
    </>
  ),
  'q-id-2': ( ... ),
};

// ══════════════════════════════════════════════
// 打印答案组件 — 布局自由控制，内容从 explanations 取
// ══════════════════════════════════════════════

function AnswerSection({ title, questions }: { title: string; questions: QuizQuestionData[] }) {
  return (
    <div className="mb-5">
      <p className="font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">{title}</p>
      <div className="columns-2 gap-4 text-gray-700">
        {questions.map((q, i) => (
          <div key={q.id} className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">{i + 1}.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">
                答案：{q.options?.find(o => o.value === q.correctAnswer)?.label ?? q.correctAnswer}
              </p>
              {xxxExplanations[q.id] && <div className="mt-1">{xxxExplanations[q.id]}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function XxxAnswers() {
  return (
    <section className="mb-8 print-answers">
      <PageBreak label="答案与解析" />
      <h2 className="text-xl font-bold text-gray-900 mb-4">📝 X.X 模块名 — 答案与解析</h2>
      <AnswerSection title="一、分组标题" questions={questionGroup1} />
      <AnswerSection title="二、分组标题" questions={questionGroup2} />
    </section>
  );
}
```

4. **逐题写解析 JSX**（在 `xxxExplanations` 对象中）：
   - 数学表达式用 `<MathTex tex="..." />`
   - 居中公式用 `<p className="text-center"><MathTex tex="..." /></p>`
   - 分步骤用 `<strong>第①步：xxx</strong>`
   - 每题的 key 必须与 `xxx-questions.ts` 中的 `id` 完全一致
   - ❗ **解析必须有结论**：不能只写推导过程不写答案，每道题解析末尾要有明确结论
   - 例如：因式分解后要写“零点为 x=1 和 x=3”，不能只写一行公式

5. **修改主页面** `xxxPage.tsx`：
   - 添加 import: `import { XxxAnswers, xxxExplanations } from './xxx-answers';`
   - 给每个 PracticeCard / QuizPanel 传入: `explanations={xxxExplanations}`
   - 确认打印答案区: `{isPrinting && printOptions.showAnswers && <XxxAnswers />}`

6. **验证编译**：
// turbo
```
npx tsc --noEmit
```

### 布局规范
- 容器: `columns-2 gap-4 text-gray-700` + `style={{ columnRule: '1px solid #e5e7eb' }}`（列间竖线）
- 每题: `flex gap-2 items-start mb-3` + `style={{ breakInside: 'avoid' }}`
- 题号: `text-blue-600 font-bold shrink-0`
- 答案行: `font-bold text-gray-900`
- 分页: `<PageBreak />` 按需添加，不强制
- 禁止: `text-sm`、`text-xs`、Unicode 符号（❌✅→）在 LaTeX 中

### 组件 prop 说明
- `PracticeCard`: `explanations?: Record<string, ReactNode>` — 答完一题后显示对应 JSX 解析
- `QuizPanel`: `explanations?: Record<string, ReactNode>` — 同上，答题反馈 + 错题回顾都用

### 考试模块特有规则
- 阶段考试不用 `shuffle`，按原始顺序出题
- 描述文字用“按顺序答题”而不是“随机打乱”
- 解答题不强制分页（不加 `pageBreak: true`），由 ExamPaper 自然流布局

### 参考实例
- `features/trig/solve-answers.tsx` + `features/trig/data/solve-questions.ts`（教学模块迁移示例）
- `features/exam/stage5-exam-answers.tsx` + `features/exam/data/stage5-exam.ts`（考试模块迁移示例，含解答题保留原始 JSX）
- `features/exam/stage3-exam-answers.tsx` + `features/exam/data/stage3-exam.ts`（纯选择题考试示例）
- `features/exam/stage4-exam-answers.tsx` + `features/exam/data/stage4-exam.ts`（选择+填空题考试示例）
- `features/trig/SolveTrianglePage.tsx`（主页面传 explanations 的示例）

### 常见坑（必读）
1. **correctAnswer 存 label 而不是 value** — 导致所有选择题永远判错。QuizPanel 用 `selected === correctAnswer`，`selected` 是 option 的 `value`
2. **解析只写一半** — 只有公式推导没有结论，用户会问“这和答案有什么关系”
3. **AnswerSection 显示答案时用 label** — `q.options?.find(o => o.value === q.correctAnswer)?.label` 显示 A/B/C/D，不显示原始 value
