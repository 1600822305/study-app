import type { ReactNode } from 'react';
import { Math as MathTex, PageBreak } from '@/components/shared';
import { logicPractice1, logicPractice2, logicPractice3, logicPractice4, logicPractice5 } from './data/1.3/1.3-practice';
import { logicQuizQuestions } from './data/1.3/1.3-quiz';
import type { QuizQuestionData } from '@/types';

// ══════════════════════════════════════════════════════════
// 解析内容（唯一数据源）— 交互 + 打印共用
// ══════════════════════════════════════════════════════════

export const logicExplanations: Record<string, ReactNode> = {
  // ── 第1节：命题判断 ──
  'lp1-1': (
    <>
      <p className="mt-2">陈述句 + 能判断真假 = 命题</p>
      <p className="mt-2">2 能被 2 整除，确实是偶数 → 真命题</p>
    </>
  ),
  'lp1-2': (
    <>
      <p className="mt-2">3 {'>'} 5 是错的，但能判断真假（假）→ 假命题</p>
      <p className="mt-2">假命题也是命题！</p>
    </>
  ),
  'lp1-3': (
    <>
      <p className="mt-2">祈使句，不能判断真假 → 不是命题</p>
      <p className="mt-2">疑问句、祈使句、感叹句都不是命题</p>
    </>
  ),
  'lp1-4': (
    <>
      <p className="mt-2">x 是未知数，真假不确定 → 不是命题</p>
      <p className="mt-2">除非加量词（如 <MathTex tex="\forall x" /> 或 <MathTex tex="\exists x" />）</p>
    </>
  ),
  'lp1-5': (
    <>
      <p className="mt-2"><MathTex tex="\pi" /> 确实是无理数，能判断真假 → 真命题</p>
      <p className="mt-2">陈述句 + 能判断真假 = 命题</p>
    </>
  ),

  // ── 第2节：四种命题 ──
  'lp2-1': (
    <>
      <p className="mt-2">逆命题 = 条件和结论互换</p>
      <p className="mt-2">"若 p 则 q" → "若 q 则 p"</p>
    </>
  ),
  'lp2-2': (
    <>
      <p className="mt-2">逆否命题 = "若非q则非p"</p>
      <p className="mt-2">原命题和逆否命题一定同真同假</p>
    </>
  ),

  'lp2-3': (
    <>
      <p className="mt-2">正方形 → 四个直角 ✓（小范围→大范围）</p>
      <p className="mt-2">反过来不行：长方形也有四个直角</p>
    </>
  ),
  'lp2-4': (
    <>
      <p className="mt-2"><MathTex tex="x=1 \Rightarrow x^2=1" /> ✓</p>
      <p className="mt-2"><MathTex tex="x^2=1 \Rightarrow x=\pm 1" />，反例 <MathTex tex="x=-1" /></p>
    </>
  ),
  'lp2-5': (
    <>
      <p className="mt-2"><MathTex tex="A=(3,+\infty) \subset B=(1,+\infty)" /></p>
      <p className="mt-2">子集关系 = 推出关系</p>
    </>
  ),

  // ── 第3节：充要条件 ──
  'lp3-1': (
    <>
      <p className="mt-2">集合法：<MathTex tex="A=\{2\} \subset B=\{2,-2\}" /></p>
      <p className="mt-2">谁小谁充分 → p 是 q 的充分不必要条件</p>
    </>
  ),
  'lp3-2': (
    <>
      <p className="mt-2"><MathTex tex="A=(3,+\infty) \subset B=(1,+\infty)" /></p>
      <p className="mt-2">A 更小 → p 充分不必要</p>
    </>
  ),
  'lp3-3': (
    <>
      <p className="mt-2"><MathTex tex="A=(-2,2),\; B=(-1,1)" /></p>
      <p className="mt-2"><MathTex tex="B \subset A" /> → q 充分、p 必要</p>
    </>
  ),
  'lp3-4': (
    <>
      <p className="mt-2"><MathTex tex="|x|<2 \Rightarrow -2<x<2" /></p>
      <p className="mt-2"><MathTex tex="A=B=(-2,2)" /> → 充要条件</p>
    </>
  ),
  'lp3-5': (
    <>
      <p className="mt-2"><MathTex tex="A=(5,+\infty),\; B=(-\infty,2)" /></p>
      <p className="mt-2"><MathTex tex="A \cap B = \varnothing" /> → 既不充分也不必要</p>
    </>
  ),
  'lp3-6': (
    <>
      <p className="mt-2"><MathTex tex="A=\{1\},\; B=\{1,-1\}" /></p>
      <p className="mt-2"><MathTex tex="A \subset B" /> → p 充分不必要</p>
    </>
  ),

  // ── 第4节：量词命题的否定 ──
  'lp4-1': (
    <>
      <p className="mt-2">① "所有" 变 "存在"</p>
      <p className="mt-2">② "到齐" 变 "没到"</p>
    </>
  ),
  'lp4-2': (
    <>
      <p className="mt-2">① <MathTex tex="\forall" /> 变 <MathTex tex="\exists" /></p>
      <p className="mt-2">② <MathTex tex="\geq" /> 变 <MathTex tex="<" /></p>
    </>
  ),
  'lp4-3': (
    <>
      <p className="mt-2">① "存在" 变 "所有"</p>
      <p className="mt-2">② "迟到" 变 "没迟到"</p>
    </>
  ),

  // ── 第5节：逻辑联结词 ──
  'lp5-1': (
    <>
      <p className="mt-2">"且"：全真才真，一假就假</p>
      <p className="mt-2">p 真 q 假 → p 且 q = 假</p>
    </>
  ),
  'lp5-2': (
    <>
      <p className="mt-2">"或"：一真就真，全假才假</p>
      <p className="mt-2">p 假 q 真 → p 或 q = 真</p>
    </>
  ),
  'lp5-3': (
    <>
      <p className="mt-2">① "或" → "且" ② 每个条件取反</p>
      <p className="mt-2"><MathTex tex="\leq \to >" />，<MathTex tex="> \to \leq" /></p>
    </>
  ),
  'lp5-4': (
    <>
      <p className="mt-2">① "且" → "或" ② 每个条件取反</p>
      <p className="mt-2"><MathTex tex="> \to \leq" />，<MathTex tex="< \to \geq" /></p>
    </>
  ),

  // ── 高考真题（9道） ──
  'lq1': (
    <>
      <p className="mt-2">C "4是偶数" 是陈述句，能判断真假</p>
      <p className="mt-2">A含未知数、B祈使句、D疑问句都不是命题</p>
    </>
  ),
  'lq2': (
    <>
      <p className="mt-2">逆否命题 = "若非q则非p"</p>
      <p className="mt-2"><MathTex tex="x=1" /> 变 <MathTex tex="x \neq 1" />，<MathTex tex="x^2=1" /> 变 <MathTex tex="x^2 \neq 1" /></p>
    </>
  ),
  'lq3': (
    <>
      <p className="mt-2"><MathTex tex="A=(2,+\infty) \subset B=(1,+\infty)" /></p>
      <p className="mt-2">A更小，所以p充分不必要</p>
    </>
  ),
  'lq4': (
    <>
      <p className="mt-2"><MathTex tex="A=(-2,2),\; B=(-1,1)" /></p>
      <p className="mt-2"><MathTex tex="B \subset A" />，B更小，所以p必要不充分</p>
    </>
  ),
  'lq5': (
    <>
      <p className="mt-2">① <MathTex tex="\forall" /> 变 <MathTex tex="\exists" /></p>
      <p className="mt-2">② <MathTex tex=">" /> 变 <MathTex tex="\leq" /></p>
    </>
  ),
  'lq6': (
    <>
      <p className="mt-2">① <MathTex tex="\exists" /> 变 <MathTex tex="\forall" /></p>
      <p className="mt-2">② <MathTex tex=">" /> 变 <MathTex tex="\leq" /></p>
    </>
  ),
  'lq7': (
    <>
      <p className="mt-2">p真q假：且 = 全真才真</p>
      <p className="mt-2">有一个假，所以p且q为假</p>
    </>
  ),
  'lq8': (
    <>
      <p className="mt-2">"且" 变 "或"</p>
      <p className="mt-2"><MathTex tex=">" /> 变 <MathTex tex="\leq" />，<MathTex tex="<" /> 变 <MathTex tex="\geq" /></p>
    </>
  ),
  'lq9': (
    <>
      <p className="mt-2">p充分 = <MathTex tex="A \subseteq B" /></p>
      <p className="mt-2"><MathTex tex="[1,5] \subseteq (a,+\infty)" /> 需要 <MathTex tex="a < 1" /></p>
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
              {logicExplanations[q.id] && <div className="mt-1">{logicExplanations[q.id]}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LogicAnswers() {
  return (
    <>
      <PageBreak label="答案与解析" />
      <section className="mb-8 print-answers">
        <h2 className="text-xl font-bold text-gray-900 mb-4">📝 1.3 逻辑用语 — 答案与解析</h2>
        <AnswerSection title="一、命题判断 — 即时练习" questions={logicPractice1} />
        <AnswerSection title="二、四种命题 — 即时练习" questions={logicPractice2} />
        <AnswerSection title="三、充分必要条件 — 即时练习" questions={logicPractice3} />
        <AnswerSection title="四、量词与否定 — 即时练习" questions={logicPractice4} />
        <AnswerSection title="五、逻辑联结词 — 即时练习" questions={logicPractice5} />
        <AnswerSection title="高考真题实战" questions={logicQuizQuestions} />
      </section>
    </>
  );
}
