import type { ReactNode } from 'react';
import { Math as MathTex, PageBreak } from '@/components/shared';
import { setsPrereqPractice1, setsPrereqPractice2, setsPrereqPractice3, setsPrereqPractice4 } from './data/practice';
import { setsPrereqQuizQuestions } from './data/prereq-quiz';
import type { QuizQuestionData } from '@/types';

// ══════════════════════════════════════════════════════════
// 解析内容（唯一数据源）— 交互 + 打印共用
// ══════════════════════════════════════════════════════════

export const setsPrereqExplanations: Record<string, ReactNode> = {
  // ── 第1节：解方程 ──
  'sp1-1': (
    <>
      <p className="mt-2">找乘积 = -6、加和 = -1 的两数：-3 和 2</p>
      <p className="text-center mt-1"><MathTex tex="(x-3)(x+2)=0 \Rightarrow x=3 \text{ 或 } x=-2" /></p>
    </>
  ),
  'sp1-2': (
    <>
      <p className="mt-2">认出完全平方：</p>
      <p className="text-center mt-1"><MathTex tex="(x+1)^2 = 0 \Rightarrow x=-1" />（重根）</p>
    </>
  ),
  'sp1-3': (
    <>
      <p className="mt-2">平方差公式：</p>
      <p className="text-center mt-1"><MathTex tex="(x+3)(x-3) = 0 \Rightarrow x=3 \text{ 或 } x=-3" /></p>
    </>
  ),

  // ── 第2节：解不等式 ──
  'sp2-1': (
    <>
      <p className="mt-2"><MathTex tex="(x-2)(x-3)=0" />，根 <MathTex tex="x=2,3" /></p>
      <p className="mt-2">&lt; 0 取中间 → <MathTex tex="2<x<3" /></p>
    </>
  ),
  'sp2-2': (
    <>
      <p className="mt-2"><MathTex tex="(x+5)(x-3)=0" />，根 <MathTex tex="x=-5,3" /></p>
      <p className="mt-2">&gt; 0 取两边 → <MathTex tex="x<-5 \text{ 或 } x>3" /></p>
    </>
  ),
  'sp2-3': (
    <>
      <p className="mt-2"><MathTex tex="(x+2)(x-2)=0" />，根 <MathTex tex="x=-2,2" /></p>
      <p className="mt-2">≥ 0 取两边 → <MathTex tex="x \leq -2 \text{ 或 } x \geq 2" /></p>
    </>
  ),
  'sp2-4': (
    <>
      <p className="mt-2"><MathTex tex="(x-4)(x+2)=0" />，根 <MathTex tex="x=-2,4" /></p>
      <p className="mt-2">≤ 0 取中间 → <MathTex tex="-2 \leq x \leq 4" /></p>
    </>
  ),

  'sp2-5': (
    <>
      <p className="mt-2">先乘 -1：<MathTex tex="x^2-4x-5<0" /></p>
      <p className="mt-2"><MathTex tex="(x-5)(x+1)=0" />，根 <MathTex tex="x=-1,5" /></p>
      <p className="mt-2">&lt; 0 取中间 → <MathTex tex="-1<x<5" /></p>
    </>
  ),

  // ── 第3节：数轴表示 ──
  'sp3-1': (
    <>
      <p className="mt-2">≤ 包含等号 → -2 取到 → 实心 ●</p>
      <p className="mt-2">&lt; 不含等号 → 5 取不到 → 空心 ○</p>
    </>
  ),
  'sp3-2': (
    <>
      <p className="mt-2">&gt; 不含等号 → 3 处空心 ○</p>
      <p className="mt-2">x &gt; 3 表示比 3 大 → 向右涂色</p>
    </>
  ),

  // ── 第4节：区间记号 ──
  'sp4-1': (
    <>
      <p className="mt-2">&lt; 不含 → 小括号 (；≤ 包含 → 方括号 ]</p>
      <p className="text-center mt-1"><MathTex tex="(-3, 5]" /></p>
    </>
  ),
  'sp4-2': (
    <>
      <p className="mt-2">≥ 含端点 → [；<MathTex tex="+\infty" /> 永远 → )</p>
      <p className="text-center mt-1"><MathTex tex="[3, +\infty)" /></p>
    </>
  ),
  'sp4-3': (
    <>
      <p className="mt-2">两段用 ∪ 连接：</p>
      <p className="text-center mt-1"><MathTex tex="(-\infty,2) \cup [5,+\infty)" /></p>
    </>
  ),

  // ── 选择题自测 ──
  'spq1': (
    <>
      <p className="text-center mt-2"><MathTex tex="(x-3)(x-4)=0 \Rightarrow x=3 \text{ 或 } x=4" /></p>
    </>
  ),
  'spq2': (
    <>
      <p className="text-center mt-2"><MathTex tex="(2x+1)(x-2)=0 \Rightarrow x=2 \text{ 或 } x=-\frac{1}{2}" /></p>
    </>
  ),
  'spq3': (
    <>
      <p className="mt-2"><MathTex tex="(x-1)(x-4)=0" />，小于取中间 → <MathTex tex="1 < x < 4" /></p>
    </>
  ),
  'spq4': (
    <>
      <p className="mt-2"><MathTex tex="(x+2)(x-2)=0" />，大于取两边含等号</p>
      <p className="text-center mt-1"><MathTex tex="x \leq -2 \text{ 或 } x \geq 2" /></p>
    </>
  ),
  'spq5': (
    <>
      <p className="mt-2">&lt; 不含 → (；≤ 含 → ]。答案 <MathTex tex="(-2, 5]" /></p>
    </>
  ),
  'spq6': (
    <>
      <p className="mt-2">≥ 含 → [；<MathTex tex="\infty" /> 永远 → )。答案 <MathTex tex="[3, +\infty)" /></p>
    </>
  ),
  'spq7': (
    <>
      <p className="mt-2">≤ 包含等号 → 实心圆 ●</p>
    </>
  ),
  'spq8': (
    <>
      <p className="mt-2">≤ 含等号 → 实心 ●；&lt; 不含 → 空心 ○</p>
    </>
  ),
};

// ══════════════════════════════════════════════════════════
// 打印答案组件
// ══════════════════════════════════════════════════════════

function AnswerLabel({ q }: { q: QuizQuestionData }) {
  if (q.type === 'blank') {
    const raw = q.acceptableAnswers?.[0] ?? q.correctAnswer;
    const isSimpleFraction = /^-?\d+\/\d+$/.test(q.correctAnswer);
    const displayTex = isSimpleFraction
      ? q.correctAnswer.replace(/(-?\d+)\/(\d+)/, '\\frac{$1}{$2}')
      : raw;
    return <>答案：{/[\\^_{}]/.test(displayTex) ? <MathTex tex={displayTex} /> : displayTex}</>;
  }
  const opt = q.options?.find(o => o.value === q.correctAnswer);
  if (!opt) return <>答案：{q.correctAnswer}</>;
  return <>{opt.label}（{opt.isLatex ? <MathTex tex={opt.value} /> : opt.value}）</>;
}

function AnswerSection({ title, questions }: { title: string; questions: QuizQuestionData[] }) {
  return (
    <div className="mb-5">
      <p className="font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">{title}</p>
      <div className="columns-2 gap-4 text-gray-700" style={{ columnRule: '1px solid #e5e7eb' }}>
        {questions.map((q, i) => (
          <div key={q.id} className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">{i + 1}.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">
                <AnswerLabel q={q} />
              </p>
              {setsPrereqExplanations[q.id] && <div className="mt-1">{setsPrereqExplanations[q.id]}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SetsPrereqAnswers() {
  return (
    <section className="mb-8 print-answers">
      <PageBreak label="答案与解析" />
      <h2 className="text-xl font-bold text-gray-900 mb-4">📝 1.1.5 集合前置知识 — 答案与解析</h2>
      <AnswerSection title="一、解方程 — 即时练习" questions={setsPrereqPractice1} />
      <AnswerSection title="二、解不等式 — 即时练习" questions={setsPrereqPractice2} />
      <AnswerSection title="三、数轴 — 即时练习" questions={setsPrereqPractice3} />
      <AnswerSection title="四、区间表示法 — 即时练习" questions={setsPrereqPractice4} />
      <AnswerSection title="选择题自测" questions={setsPrereqQuizQuestions} />
    </section>
  );
}
