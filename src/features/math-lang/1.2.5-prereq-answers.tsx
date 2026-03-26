import type { ReactNode } from 'react';
import { Math as MathTex, PageBreak } from '@/components/shared';
import { logicPrereqPractice1, logicPrereqPractice2, logicPrereqPractice3 } from './data/1.3/1.3-practice';
import { logicPrereqQuizQuestions } from './data/1.2.5/1.2.5-prereq-quiz';
import type { QuizQuestionData } from '@/types';

// ══════════════════════════════════════════════════════════
// 解析内容（唯一数据源）— 交互 + 打印共用
// ══════════════════════════════════════════════════════════

export const logicPrereqExplanations: Record<string, ReactNode> = {
  // ── 集合包含关系 ──
  'lpp1-1': (
    <>
      <p className="mt-2">A 的每个元素都在 B 中，且 B 多了 3</p>
      <p className="text-center mt-1"><MathTex tex="\{1,2\} \subset \{1,2,3\}" /></p>
    </>
  ),
  'lpp1-2': (
    <>
      <p className="mt-2">数轴上 A 整个在 B 里面</p>
      <p className="text-center mt-1"><MathTex tex="(-1,3) \subset (-2,5)" /></p>
    </>
  ),
  'lpp1-4': (
    <>
      <p className="mt-2">A 范围更小，完全在 B 里面</p>
      <p className="text-center mt-1"><MathTex tex="(3,+\infty) \subset (1,+\infty)" /></p>
    </>
  ),
  'lpp1-5': (
    <>
      <p className="mt-2">空集是任何非空集合的真子集</p>
      <p className="text-center mt-1"><MathTex tex="\varnothing \subset \{1,2,3\}" /></p>
    </>
  ),

  // ── 解不等式 ──
  'lpp2-1': (
    <>
      <p className="mt-2">小于零取中间（口诀：小于取中间）</p>
      <p className="text-center mt-1"><MathTex tex="(x-2)(x-3)<0 \Rightarrow 2<x<3" /></p>
    </>
  ),
  'lpp2-2': (
    <>
      <p className="mt-2">大于等于零取两边，含等号</p>
      <p className="text-center mt-1"><MathTex tex="(x+1)(x-1) \geq 0 \Rightarrow x \leq -1 \text{ 或 } x \geq 1" /></p>
    </>
  ),
  'lpp2-3': (
    <>
      <p className="mt-2">&lt; 号 → 夹中间</p>
      <p className="text-center mt-1"><MathTex tex="|x+2|<3 \Rightarrow -5<x<1" /></p>
    </>
  ),
  'lpp2-4': (
    <>
      <p className="mt-2">&gt; 号 → 拆两边</p>
      <p className="text-center mt-1"><MathTex tex="|x-3|>2 \Rightarrow x<1 \text{ 或 } x>5" /></p>
    </>
  ),
  'lpp2-5': (
    <>
      <p className="mt-2">≤ 号 → 夹中间，注意除以系数 2</p>
      <p className="text-center mt-1"><MathTex tex="|2x-4| \leq 6 \Rightarrow -1 \leq x \leq 5" /></p>
    </>
  ),
  'lpp2-6': (
    <>
      <p className="mt-2">先移项：<MathTex tex="|x+1| > 4" />，再拆两边</p>
      <p className="text-center mt-1"><MathTex tex="x<-5 \text{ 或 } x>3" /></p>
    </>
  ),
  'lpp2-7': (
    <>
      <p className="mt-2">大于零取两边，不含端点</p>
      <p className="text-center mt-1"><MathTex tex="(x-1)(x-3)>0 \Rightarrow x<1 \text{ 或 } x>3" /></p>
    </>
  ),

  // ── 推理方向 ──
  'lpp3-1': (
    <>
      <p className="mt-2">小范围 → 大范围能推出</p>
      <p className="text-center mt-1"><MathTex tex="(5,+\infty) \subset (3,+\infty) \Rightarrow p \to q \;\checkmark" /></p>
    </>
  ),
  'lpp3-2': (
    <>
      <p className="mt-2"><MathTex tex="x^2=4 \Rightarrow x=\pm 2" />，反例：<MathTex tex="x=-2" /></p>
      <p className="mt-2">大范围 → 小范围推不出</p>
    </>
  ),
  'lpp3-3': (
    <>
      <p className="mt-2">正方形 → 四个直角 ✓（小范围→大范围）</p>
      <p className="mt-2">反过来不行：长方形也有四个直角</p>
    </>
  ),
  'lpp3-4': (
    <>
      <p className="mt-2"><MathTex tex="p:\{1\} \subset q:\{1,-1\}" /></p>
      <p className="mt-2">小→大能推出，大→小推不出</p>
    </>
  ),
  'lpp3-5': (
    <>
      <p className="mt-2"><MathTex tex="A=(3,+\infty) \subset B=(1,+\infty)" /></p>
      <p className="mt-2">子集关系 = 推出关系：<MathTex tex="x \in A \Rightarrow x \in B" /></p>
    </>
  ),

  // ── 前置知识自测 ──
  'lpq1': <p className="mt-2">A 的每个元素都在 B 中，A⊂B</p>,
  'lpq2': <p className="mt-2">数轴上 (1,4) 完全在 (0,5) 里面</p>,
  'lpq3': <p className="mt-2">&lt;0 取中间，(2,3)</p>,
  'lpq4': <p className="mt-2">≥0 取两边，含端点</p>,
  'lpq5': <p className="mt-2">&lt; 夹中间，-5&lt;x&lt;1</p>,
  'lpq6': <p className="mt-2">&gt; 拆两边，x&lt;-1 或 x&gt;3</p>,
  'lpq7': <p className="mt-2">小范围→大范围能推出</p>,
  'lpq8': <p className="mt-2">x=1→x²=1 ✓，反过来有反例 x=-1</p>,
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
              {logicPrereqExplanations[q.id] && <div className="mt-1">{logicPrereqExplanations[q.id]}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LogicPrereqAnswers() {
  return (
    <>
      <PageBreak label="答案与解析" />
      <section className="mb-8 print-answers">
        <h2 className="text-xl font-bold text-gray-900 mb-4">📝 1.2.5 逻辑前置知识 — 答案与解析</h2>
        <AnswerSection title="一、集合包含关系 — 即时练习" questions={logicPrereqPractice1} />
        <AnswerSection title="二、解不等式 — 即时练习" questions={logicPrereqPractice2} />
        <AnswerSection title="三、基本推理 — 即时练习" questions={logicPrereqPractice3} />
        <AnswerSection title="选择题自测" questions={logicPrereqQuizQuestions} />
      </section>
    </>
  );
}
