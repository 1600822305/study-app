import type { ReactNode } from 'react';
import { Math as MathTex, PageBreak } from '@/components/shared';
import { setsPractice3 } from './data/practice';
import { setsQuizQuestions } from './data/quiz';
import type { QuizQuestionData } from '@/types';

// ══════════════════════════════════════════════════════════
// 解析内容（唯一数据源）— 交互 + 打印共用
// ══════════════════════════════════════════════════════════

export const setsExplanations: Record<string, ReactNode> = {
  // ── 常用数集 ──
  'stp3-1': (
    <>
      <p className="mt-2">0 是自然数（<MathTex tex="0 \in \mathbb{N}" />），但不是正整数（<MathTex tex="0 \notin \mathbb{N}^*" />）</p>
      <p className="mt-1">-1 是负数不属于 N，0.5 是小数不属于 Z</p>
    </>
  ),
  'stp3-2': (
    <>
      <p className="mt-2"><MathTex tex="\sqrt{2}" /> 是无理数，不属于 N、Z、Q，但属于 R（实数 = 有理 + 无理）</p>
    </>
  ),
  'stp3-3': (
    <>
      <p className="mt-2">Q（有理数）包含所有整数和分数，范围比 Z 大，所以 Q ⊂ Z 是反的</p>
      <p className="mt-1">正确关系：<MathTex tex="\mathbb{Z} \subset \mathbb{Q}" /></p>
    </>
  ),


  // ── 高考真题（精选12道）──
  // 1. 交集（有限集∩区间）
  'sq1': (
    <>
      <p className="mt-2"><MathTex tex="B=(1,6)" />，逐个检验 A 中元素：</p>
      <p className="text-center mt-1"><MathTex tex="2,3,5 \in (1,6)\;\checkmark \quad 7 \notin (1,6)" /></p>
      <p className="mt-2">答案：<MathTex tex="A \cap B = \{2,3,5\}" /></p>
    </>
  ),
  // 2. 交集（区间，需解方程）
  'sq2': (
    <>
      <p className="mt-2">先解 B：<MathTex tex="(x-3)(x+1) \leq 0 \Rightarrow B=[-1,3]" /></p>
      <p className="mt-2"><MathTex tex="A=(-2,4)" />，取重叠 → <MathTex tex="A \cap B = [-1,3]" /></p>
    </>
  ),
  // 3. 补集（端点反转）
  'sq3': (
    <>
      <p className="mt-2"><MathTex tex="(x-2)(x+1) \geq 0 \Rightarrow A=(-\infty,-1] \cup [2,+\infty)" /></p>
      <p className="mt-2">补集端点开闭互换：<MathTex tex="\complement_U A = (-1,2)" /></p>
    </>
  ),
  // 4. 混合运算（先补再交）
  'sq4': (
    <>
      <p className="mt-2"><MathTex tex="\complement_U B = (-\infty,0) \cup (3,+\infty)" /></p>
      <p className="mt-2"><MathTex tex="A=(-\infty,2)" />，取交集 → <MathTex tex="(-\infty,0)" /></p>
    </>
  ),
  // 5. 并集（区间）
  'sq5': (
    <>
      <p className="mt-2"><MathTex tex="A=[-1,3),\; B=(2,5]" /></p>
      <p className="mt-2">并集取全部覆盖 → <MathTex tex="[-1,5]" /></p>
    </>
  ),
  // 6. 子集个数公式
  'sq6': (
    <>
      <p className="mt-2">公式：<MathTex tex="n" /> 个元素 → <MathTex tex="2^n" /> 个子集</p>
      <p className="text-center mt-1"><MathTex tex="2^3 = 8" /></p>
    </>
  ),
  // 7. 空集知识
  'sq7': (
    <>
      <p className="mt-2"><MathTex tex="\varnothing \neq \{0\}" />，空集有子集（自身），空集是任何集合的子集</p>
    </>
  ),
  // 8. 常见数集
  'sq8': (
    <>
      <p className="mt-2"><MathTex tex="0 \notin \mathbb{N}^*" />，<MathTex tex="\sqrt{2} \notin \mathbb{Q}" />，<MathTex tex="\pi \notin \mathbb{Q}" /></p>
      <p className="mt-2"><MathTex tex="-3 \in \mathbb{Z}" /> ✓</p>
    </>
  ),
  // 9. 含参数（A⊆B）
  'sq9': (
    <>
      <p className="mt-2"><MathTex tex="A=(-2,4),\; B=(-\infty,a)" /></p>
      <p className="mt-2">A 在 B 里面 → A 的右端 ≤ B 的右端 → <MathTex tex="a \geq 4" /></p>
    </>
  ),
  // 10. 含参数（A∩B=∅）
  'sq10': (
    <>
      <p className="mt-2"><MathTex tex="A=[1,3],\; B=(a,+\infty)" /></p>
      <p className="mt-2">交集为空 → B 在 A 右边 → <MathTex tex="a \geq 3" /></p>
    </>
  ),
  // 11. 容斥原理
  'sq11': (
    <>
      <p className="mt-2">容斥原理：<MathTex tex="|A \cup B| = 30+25-15 = 40" /></p>
      <p className="mt-2">都没参加 = 50 - 40 = <strong>10</strong></p>
    </>
  ),
  // 12. 区间表示
  'sq12': (
    <>
      <p className="mt-2">&lt; → 小括号 (；≤ → 方括号 ]</p>
      <p className="text-center mt-1"><MathTex tex="(-3, 5]" /></p>
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
              {setsExplanations[q.id] && <div className="mt-1">{setsExplanations[q.id]}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SetsAnswers() {
  return (
    <section className="mb-8 print-answers">
      <PageBreak label="答案与解析" />
      <h2 className="text-xl font-bold text-gray-900 mb-4">📝 1.2 集合 — 答案与解析</h2>
      <AnswerSection title="四、常用数集 — 即时练习" questions={setsPractice3} />
      <AnswerSection title="高考真题实战" questions={setsQuizQuestions} />
    </section>
  );
}
