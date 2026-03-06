# StudyGoGoGo 项目规范

## 一、目录结构

```
src/
├── assets/              # 静态资源（图片、字体、SVG）
├── components/          # 通用可复用组件
│   ├── ui/              # 基础 UI 组件（Button、Card、Modal 等）
│   └── shared/          # 业务通用组件（Math、Quiz、Collapsible 等）
├── hooks/               # 自定义 React Hooks
├── layouts/             # 布局组件（Sidebar、Header 等）
├── pages/               # 页面组件，按科目分子目录
│   ├── home/
│   └── math/
│       ├── complex/     # 复数模块
│       ├── sets/        # 集合模块
│       └── prereq/      # 前置知识
├── lib/                 # 工具函数、常量、配置
│   ├── utils.ts
│   └── constants.ts
├── stores/              # 状态管理（Zustand 或 Context）
├── types/               # TypeScript 类型定义
├── data/                # 静态学习数据（题目、知识点 JSON）
├── styles/              # 全局样式
├── App.tsx
├── main.tsx
└── index.css
```

## 二、命名规范

| 类别 | 规则 | 示例 |
|------|------|------|
| **组件文件** | PascalCase | `QuizQuestion.tsx` |
| **组件名** | PascalCase，与文件名一致 | `export function QuizQuestion()` |
| **Hook 文件** | camelCase，use 开头 | `useProgress.ts` |
| **工具函数文件** | camelCase | `formatScore.ts` |
| **类型文件** | camelCase 或 index.ts | `types/index.ts` |
| **常量** | UPPER_SNAKE_CASE | `const MAX_RETRY = 3` |
| **CSS 类名** | TailwindCSS 优先，不写自定义 class |  |
| **目录名** | kebab-case 或单个单词小写 | `components/`, `quiz-question/` |

## 三、导入规范

### 导入顺序（按分组，组间空行）

```tsx
// 1. React 及第三方库
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// 2. 内部模块（使用 @/ 别名）
import { Layout } from '@/layouts/Layout';
import { QuizQuestion } from '@/components/shared/QuizQuestion';

// 3. 类型（使用 type import）
import type { QuizQuestionData } from '@/types';

// 4. 样式和静态资源
import '@/styles/custom.css';
```

### 路径别名

- **必须使用 `@/` 别名**，禁止相对路径穿越超过一层
- ✅ `import { Math } from '@/components/shared/Math'`
- ❌ `import { Math } from '../../components/shared/Math'`

### 类型导入

- **必须使用 `import type`** 导入纯类型
- ESLint 规则 `@typescript-eslint/consistent-type-imports` 已启用

## 四、组件规范

### 4.1 组件结构

```tsx
// 1. 导入
import { useState } from 'react';
import type { SomeType } from '@/types';

// 2. 组件 Props 类型（紧贴组件定义之前）
interface MyComponentProps {
  title: string;
  onAction?: () => void;
}

// 3. 组件（使用命名导出，不用 default export）
export function MyComponent({ title, onAction }: MyComponentProps) {
  // hooks 在最上面
  const [state, setState] = useState(false);

  // 事件处理函数
  const handleClick = () => { ... };

  // render
  return <div>...</div>;
}
```

### 4.2 规则

- **命名导出** `export function X`，不使用 `export default`（App.tsx 除外）
- **Props 类型** 定义在同文件，命名为 `XxxProps`
- **不在组件内定义常量数据**，抽到 `data/` 或文件顶部
- **每个文件只导出一个组件**

## 五、状态管理与存储层

### 5.1 状态分层

| 范围 | 方案 |
|------|------|
| 组件内部状态 | `useState` |
| 跨组件简单共享 | React Context |
| 复杂全局状态 | Zustand（后续引入） |
| **持久化数据** | **Dexie.js (IndexedDB) + Repository 模式** |

### 5.2 存储层架构

```
┌─────────────────────────────────────┐
│  组件层                              │  → 只用 hooks，不碰存储细节
├─────────────────────────────────────┤
│  Hooks 层                            │  → useProgress(), useQuiz(), useUIState()
├─────────────────────────────────────┤
│  Storage Service (storage.xxx)       │  → storage.progress, storage.quiz, ...
├─────────────────────────────────────┤
│  Repository 层                       │  → 每个实体一个 Repository 类
├─────────────────────────────────────┤
│  Dexie.js → IndexedDB               │  → 实际存储引擎
└─────────────────────────────────────┘
```

### 5.3 目录结构

```
src/lib/storage/
├── index.ts              # 统一对外 API（唯一入口）
├── database.ts           # Dexie 定义 + Schema 版本迁移
├── types.ts              # 存储实体类型
├── errors.ts             # 自定义错误类型
├── logger.ts             # 操作日志
└── repositories/         # Repository 类
    ├── base.ts           # 抽象基类（CRUD）
    ├── progress.ts       # 学习进度
    ├── quiz.ts           # 答题记录
    ├── ui-state.ts       # UI 状态持久化
    ├── session.ts        # 学习会话时长
    ├── settings.ts       # 用户设置
    └── ai-chat.ts        # AI 对话记录
```

### 5.4 使用规则

```tsx
// ✅ 组件中通过 hooks 使用
import { useProgress, useQuiz, useUIState } from '@/hooks';

// ✅ 非组件代码直接用 storage service
import { storage } from '@/lib/storage';
await storage.progress.getCheckedIds('complex');

// ❌ 禁止直接 import database 或 repository
// ❌ 禁止使用裸 localStorage
// ❌ 禁止在组件中直接调用 Dexie API
```

### 5.5 添加新存储实体的流程

```
1. 在 types.ts 定义实体接口
2. 在 database.ts 添加 Table，升级 version
3. 创建 Repository 类，继承 BaseRepository
4. 在 index.ts 导出 singleton
5. 创建对应的 hook（如需在组件中使用）
```

### 5.6 Schema 迁移

```ts
// database.ts
this.version(1).stores({ ... });           // 初始 schema
this.version(2).stores({ ... })            // 加字段
    .upgrade(tx => { ... });               // 数据迁移逻辑
```

- 只能**追加** version，不能修改已有 version
- 迁移函数中处理旧数据转换

## 六、样式规范

- **TailwindCSS 优先**，不写自定义 CSS（除非 Tailwind 做不到）
- 响应式断点使用 Tailwind 默认：`sm:` `md:` `lg:` `xl:`
- 颜色使用 Tailwind 内置色板，不自定义颜色值
- 间距使用 Tailwind 单位（4px 倍数）

## 七、Git 规范

### Commit Message

```
<type>(<scope>): <subject>

type: feat | fix | refactor | style | docs | chore | test
scope: 可选，模块名如 complex, quiz, layout
subject: 简短描述，中英文均可
```

示例：
```
feat(complex): 添加复数除法交互练习
fix(layout): 修复双滚动条问题
refactor: 统一使用 @/ 路径别名
docs: 创建项目规范文档
```

### 分支

```
main        → 稳定版本
dev         → 开发分支
feat/xxx    → 功能分支
fix/xxx     → 修复分支
```

## 八、代码质量

| 工具 | 用途 | 命令 |
|------|------|------|
| **ESLint** | 代码检查 | `npm run lint` |
| **Prettier** | 代码格式化 | `npm run format` |
| **TypeScript** | 类型检查 | `npm run typecheck` |

### 提交前检查清单

```bash
npm run typecheck    # 类型无错
npm run lint         # 无 lint 错误
npm run format:check # 格式统一
```

## 九、数据与内容分离

学习内容（知识点、题目）与 UI 代码分离：

```
src/data/
├── math/
│   ├── complex.ts       # 复数知识点数据
│   ├── complex-quiz.ts  # 复数题目数据
│   ├── sets.ts
│   └── prereq.ts
```

数据文件导出类型化的常量数组，页面组件只负责渲染：

```tsx
// data/math/complex-quiz.ts
import type { QuizQuestionData } from '@/types';

export const complexQuizQuestions: QuizQuestionData[] = [
  { id: 'q1', question: '...', ... },
];

// pages/math/complex/index.tsx
import { complexQuizQuestions } from '@/data/math/complex-quiz';
```

## 十、模块化设计规范

### 10.1 核心原则

```
单一职责 → 每个模块只做一件事
开闭原则 → 对扩展开放，对修改关闭
依赖倒置 → 依赖抽象（接口/类型），不依赖具体实现
```

### 10.2 模块分层架构

```
┌──────────────────────────────────────────┐
│  Pages（页面层）                          │  → 组装模块，不写业务逻辑
│    只负责：路由 + 布局 + 组合组件          │
├──────────────────────────────────────────┤
│  Features（功能模块层）                   │  → 每个学习模块一个独立目录
│    包含：组件 + 数据 + hooks + 类型       │
├──────────────────────────────────────────┤
│  Components（通用组件层）                 │  → 跨模块复用的 UI 组件
│    无业务逻辑，纯展示 + 交互              │
├──────────────────────────────────────────┤
│  Lib / Hooks / Types（基础设施层）        │  → 工具函数、自定义 Hook、全局类型
│    零业务依赖，任何模块都能用              │
└──────────────────────────────────────────┘
```

### 10.3 功能模块（Feature Module）结构

每个学习模块是一个自包含的功能单元：

```
src/features/
├── complex/                    # 复数模块
│   ├── index.ts                # 模块公开 API（统一导出）
│   ├── ComplexPage.tsx          # 模块主页面
│   ├── components/             # 模块私有组件
│   │   ├── ComplexOperations.tsx
│   │   ├── ComplexPlane.tsx
│   │   └── PowersOfI.tsx
│   ├── data/                   # 模块数据
│   │   ├── quiz.ts
│   │   ├── progress.ts
│   │   └── knowledge.ts
│   └── hooks/                  # 模块私有 hooks
│       └── useComplexProgress.ts
│
├── sets/                       # 集合模块（同结构）
│   ├── index.ts
│   ├── SetsPage.tsx
│   ├── components/
│   ├── data/
│   └── hooks/
│
└── prereq/                     # 前置知识模块（同结构）
```

### 10.4 模块边界规则

```
✅ 允许的依赖方向：
  Page → Feature Module → Shared Components → Lib/Hooks/Types

❌ 禁止的依赖：
  Feature A → Feature B 的内部文件（模块间不直接引用）
  Component → Page（底层不依赖上层）
  Lib → Component（基础设施不依赖 UI）
```

**模块间通信方式：**

| 场景 | 方案 |
|------|------|
| 模块 A 需要模块 B 的数据 | 通过全局 Store 或 Context |
| 多模块共用 UI | 提取到 `components/shared/` |
| 多模块共用逻辑 | 提取到 `hooks/` 或 `lib/` |
| 模块间跳转 | 通过 Router path，不直接 import |

### 10.5 模块公开 API（index.ts）

每个功能模块通过 `index.ts` 控制对外暴露的内容：

```tsx
// features/complex/index.ts
// 只导出外部需要的内容，内部实现细节不暴露

export { ComplexPage } from './ComplexPage';
export { complexRoute } from './route';

// ❌ 不要导出内部组件
// export { PowersOfI } from './components/PowersOfI';
```

### 10.6 添加新科目/新模块的标准流程

```
1. 在 features/ 下创建模块目录，按标准结构
2. 创建 index.ts 定义公开 API
3. 在 data/ 中定义知识点和题目数据（类型化）
4. 在 components/ 中编写模块私有组件
5. 在模块主页面中组装组件
6. 在 App.tsx 中注册路由
7. 在 Layout 导航中添加入口
```

### 10.7 组件复用层级

```
Level 1 - UI 原子组件（components/ui/）
  Button, Card, Badge, Input...
  → 零业务语义，纯样式+交互

Level 2 - 业务通用组件（components/shared/）
  Math, QuizQuestion, Collapsible, ProgressTracker...
  → 有学习场景语义，但不绑定具体模块

Level 3 - 模块私有组件（features/xxx/components/）
  ComplexPlane, PowersOfI, SetVennDiagram...
  → 只在本模块使用，如果被第二个模块需要 → 升级到 Level 2
```

### 10.8 数据驱动渲染

页面组件不硬编码内容，所有学习内容通过数据文件驱动：

```tsx
// ❌ 错误：在组件里硬编码题目
function ComplexPage() {
  return <QuizQuestion question="求 (1+i)² 的值" ... />;
}

// ✅ 正确：数据与渲染分离
import { complexQuizQuestions } from './data/quiz';

function ComplexPage() {
  return complexQuizQuestions.map((q) => (
    <QuizQuestion key={q.id} {...q} />
  ));
}
```

这样做的好处：
- **加新题不碰组件代码**
- **数据可以从 API / JSON / 本地文件灵活切换**
- **支持后续接入 AI 动态出题**

## 十一、TTS 语音朗读与字幕

### 架构

```
src/lib/tts/
├── types.ts          # TTSConfig, TTSPlaybackState, TTSEvent, TTSEventType(含 subtitle)
├── engine.ts         # 火山引擎 TTS API 调用 + 长文本自动分段合成
├── audio-player.ts   # HTMLAudioElement 封装，含 onProgress 回调
├── tts-service.ts    # 单例服务：状态管理、句子分割、字幕进度跟踪
└── index.ts          # 统一导出 ttsService + voiceOptions + types

src/hooks/useTTS.ts                      # React Hook：订阅播放状态（含 sentences, currentSentenceIndex）
src/components/shared/SpeakButton.tsx    # 朗读按钮（传入 text 即可）
src/components/shared/SubtitlePanel.tsx  # 底部单行字幕条（全局挂载在 Layout）
src/features/xxx/data/narrations.ts      # 各模块的朗读文案
```

### 朗读文案编写规则（narrations.ts）

1. **紧贴原文结构**：听到的顺序、标题、关键词、例子必须与屏幕上的文档内容一一对应
2. **口语化转换**：LaTeX 公式转自然语言（`\sqrt{9}` → "根号9"），但保留原文结构标记
3. **不自由发挥**：不添加文档中没有的比喻、故事或解释，避免听读不同步导致走神
4. **包含文档中的标记**：学习目标（"学完你能"）、易错点、即时练习提示都要覆盖
5. **长度注意**：火山引擎 API 单次限制约 300 字，engine.ts 会自动按句号分段合成，无需手动控制

### 长文本分段合成（engine.ts）

- `splitTextIntoChunks()`：按 `。！？；` 分句，每段 ≤ 250 字
- 超长句子进一步按 `，、：` 拆分
- 多段依次调用 API → `concatAudioBuffers()` 拼接 → 播放
- 短文本（≤250字）走原路径，零额外开销

### 字幕面板（SubtitlePanel）

- **样式**：底部居中半透明黑色胶囊条（`bg-black/75 rounded-full`）
- **内容**：只显示当前句（单行 truncate），像视频字幕
- **控件**：左侧 ⏸/▶ + 右侧计数器 `3/12` + ✕ 关闭
- **进度**：底部 2px 蓝色进度条
- **字幕跟踪**：`tts-service.ts` 按字符比例估算时间边界，通过 `audio.ontimeupdate` 更新 `currentSentenceIndex`
- **全局挂载**：Layout.tsx 中渲染，TTS 播放时自动显示

### 同步规则

```
改 MD 文档 → 同步改 App 组件 → 同步改 narrations（紧贴新内容） → tsc → git push
```

## 十二、教学文档规范

教学 `.md` 文件的编写规范独立维护在：

```
数学/教学文档规范.md
```

该规范定义了所有教学文档的统一结构，包括：

| 模块 | 说明 |
|------|------|
| 📋 知识地图 | 文档开头的章节概览 |
| 🎯 学习目标 | 每节的能力目标 |
| ✏️ 即时练习 | 每节后的1-3道练习题 |
| ⚠️ 易错点 | 每节的常见错误警告 |
| 📌 公式速查表 | 末尾的打印友好公式总结 |

新增或修改教学文档时，**必须先阅读该规范**。

### MD ↔ App 同步规则

```
1. MD 文档是内容的 Single Source of Truth
2. 改 MD → 同步改 App 组件 → 同步改 narrations → tsc → git push
3. App 中对应：绿色卡片=练习，黄色卡片=易错，蓝色文字=目标
```
