import type { ReactNode } from 'react';
import { Math as MathTex, PageBreak } from '@/components/shared';
import { setsPractice0, setsPractice1, setsPractice2, setsPractice3, setsPractice4, setsPractice5 } from './data/practice';
import { setsQuizQuestions } from './data/quiz';
import type { QuizQuestionData } from '@/types';

// ══════════════════════════════════════════════════════════
// 解析内容（唯一数据源）— 交互 + 打印共用
// ══════════════════════════════════════════════════════════

export const setsExplanations: Record<string, ReactNode> = {
  // ── 元素与集合 ──
  'stp0-1': (
    <>
      <p className="mt-2">8 在集合里 → <MathTex tex="8 \in A" /></p>
    </>
  ),
  'stp0-2': (
    <>
      <p className="mt-2">3 不大于 5，不满足条件 → <MathTex tex="3 \notin B" /></p>
    </>
  ),

  // ── 集合基础 ──
  'stp1-1': (
    <>
      <p className="mt-2">"比较高""好看""比较大"没有明确标准，不确定 → 不是集合</p>
      <p className="mt-2">"大于5的自然数"标准明确 → 是集合</p>
    </>
  ),
  'stp1-2': (
    <>
      <p className="mt-2">无序性：排列顺序不影响集合</p>
      <p className="text-center mt-1"><MathTex tex="\{1,2,3\} = \{3,1,2\}" /></p>
    </>
  ),
  'stp1-3': (
    <>
      <p className="mt-2">互异性：元素不能重复，1 出现两次 → 应写成 <MathTex tex="\{1, 2\}" /></p>
    </>
  ),
  'stp1-4': (
    <>
      <p className="mt-2">互异性要求 <MathTex tex="a \neq b,\; a \neq c,\; b \neq c" /></p>
    </>
  ),
  'stp1-5': (
    <>
      <p className="mt-2">"接近"没有明确标准 → 违反确定性 → 不能构成集合</p>
    </>
  ),

  // ── 集合的表示 ──
  'stp2-1': (
    <>
      <p className="mt-2">不超过 5 的正整数：1, 2, 3, 4, 5</p>
    </>
  ),
  'stp2-2': (
    <>
      <p className="mt-2"><MathTex tex="x^2 = 1 \Rightarrow x = \pm 1" /></p>
    </>
  ),
  'stp2-3': (
    <>
      <p className="mt-2">≤ → 方括号 [；&lt; → 小括号 )</p>
    </>
  ),
  'stp2-4': (
    <>
      <p className="mt-2">&gt; 不含端点 → 小括号；<MathTex tex="\infty" /> 永远 → 小括号</p>
    </>
  ),
  'stp2-5': (
    <>
      <p className="mt-2"><MathTex tex="(x+2)(x-2)=0 \Rightarrow x=-2 \text{ 或 } x=2" /></p>
      <p className="mt-2">注意 D 是区间，不是列举法！</p>
    </>
  ),
  'stp2-6': (
    <>
      <p className="mt-2">≤ 含端点 → ]；<MathTex tex="-\infty" /> → (</p>
    </>
  ),
  'stp2-7': (
    <>
      <p className="mt-2">[ → 含左端点（≤），) → 不含右端点（&lt;）</p>
      <p className="text-center mt-1"><MathTex tex="[2,5) \Rightarrow 2 \leq x < 5" /></p>
    </>
  ),
  'stp2-8': (
    <>
      <p className="mt-2">偶数 = 2 的倍数：<MathTex tex="x = 2k,\; k \in \mathbb{Z}" /></p>
    </>
  ),

  // ── 常用数集 ──
  'stp3-1': (
    <>
      <p className="mt-2"><MathTex tex="-3" /> 是整数 → <MathTex tex="-3 \in \mathbb{Z}" /></p>
    </>
  ),
  'stp3-2': (
    <>
      <p className="mt-2"><MathTex tex="\sqrt{2}" /> 是无理数 → <MathTex tex="\sqrt{2} \notin \mathbb{Q}" /></p>
    </>
  ),
  'stp3-3': (
    <>
      <p className="mt-2"><MathTex tex="\pi" /> 是无理数，但属于实数集 → <MathTex tex="\pi \in \mathbb{R}" /></p>
    </>
  ),

  // ── 子集关系 ──
  'stp4-1': (
    <>
      <p className="mt-2"><MathTex tex="\{1,2\}" /> 的每个元素都在 <MathTex tex="\{1,2,3\}" /> 中 → 是子集</p>
    </>
  ),
  'stp4-2': (
    <>
      <p className="mt-2">真子集要求不相等，两个集合相同 → 不是真子集</p>
    </>
  ),
  'stp4-3': (
    <>
      <p className="mt-2"><MathTex tex="\varnothing" /> 是空集（0个元素），<MathTex tex="\{0\}" /> 有 1 个元素</p>
    </>
  ),
  'stp4-4': (
    <>
      <p className="mt-2"><MathTex tex="2^2 = 4" /> 个子集：<MathTex tex="\varnothing,\; \{1\},\; \{2\},\; \{1,2\}" /></p>
    </>
  ),

  // ── 集合运算 ──
  'stp5-1': (
    <>
      <p className="mt-2">交集取公共元素：3 和 5</p>
    </>
  ),
  'stp5-2': (
    <>
      <p className="mt-2">补集 = 全集去掉 A → <MathTex tex="\{1, 3, 5\}" /></p>
    </>
  ),
  'stp5-3': (
    <>
      <p className="mt-2">取重叠部分：<MathTex tex="2 < x < 3" />，即 <MathTex tex="(2, 3)" /></p>
    </>
  ),

  // ── 高考真题 ──
  'sq1': (
    <>
      <p className="mt-2"><MathTex tex="B=(1,6)" />，逐个检验 A 中元素：</p>
      <p className="text-center mt-1"><MathTex tex="2,3,5 \in (1,6)\;\checkmark \quad 7 \notin (1,6)" /></p>
      <p className="mt-2">所以 <MathTex tex="A \cap B = \{2,3,5\}" /></p>
    </>
  ),
  'sq2': (
    <>
      <p className="mt-2">先解 B：<MathTex tex="(x-3)(x+1) \leq 0 \Rightarrow B=[-1,3]" /></p>
      <p className="mt-2"><MathTex tex="A=(-2,4)" />，取重叠 → <MathTex tex="A \cap B = [-1,3]" /></p>
    </>
  ),
  'sq3': (
    <>
      <p className="mt-2"><MathTex tex="(x-2)(x+1) \geq 0 \Rightarrow A=(-\infty,-1] \cup [2,+\infty)" /></p>
      <p className="mt-2">补集端点开闭互换：<MathTex tex="\complement_U A = (-1,2)" /></p>
    </>
  ),
  'sq4': (
    <>
      <p className="mt-2"><MathTex tex="\complement_U B = (-\infty,0) \cup (3,+\infty)" /></p>
      <p className="mt-2"><MathTex tex="A=(-\infty,2)" />，取交集 → <MathTex tex="(-\infty,0)" /></p>
    </>
  ),
  'sq5': (
    <>
      <p className="mt-2"><MathTex tex="A=\{2,3\},\; B=\{1,2\}" /></p>
      <p className="mt-2">公共元素只有 2 → <MathTex tex="A \cap B = \{2\}" /></p>
    </>
  ),
  'sq6': (
    <>
      <p className="mt-2"><MathTex tex="\complement_U A = \{2,4\}" /></p>
      <p className="mt-2"><MathTex tex="\{2,4\} \cup \{2,4\} = \{2,4\}" /></p>
    </>
  ),
  'sq7': (
    <>
      <p className="mt-2">公式：<MathTex tex="n" /> 个元素 → <MathTex tex="2^n" /> 个子集</p>
      <p className="text-center mt-1"><MathTex tex="2^3 = 8" /></p>
    </>
  ),
  'sq8': (
    <>
      <p className="mt-2"><MathTex tex="(x-1)(x-3) \leq 0 \Rightarrow A=[1,3]" /></p>
      <p className="mt-2"><MathTex tex="B=(2,+\infty)" />，取重叠 → <MathTex tex="(2,3]" /></p>
    </>
  ),
  'sq9': (
    <>
      <p className="mt-2"><MathTex tex="\varnothing \neq \{0\}" />，空集有子集（自身），空集是任何集合的子集</p>
    </>
  ),
  'sq10': (
    <>
      <p className="mt-2"><MathTex tex="A=[-1,3),\; B=(2,5]" /></p>
      <p className="mt-2">并集取全部覆盖 → <MathTex tex="[-1,5]" /></p>
    </>
  ),
  'sq11': (
    <>
      <p className="mt-2"><MathTex tex="0 \notin \mathbb{N}^*" />，<MathTex tex="\sqrt{2} \notin \mathbb{Q}" />，<MathTex tex="\pi \notin \mathbb{Q}" /></p>
      <p className="mt-2"><MathTex tex="-3 \in \mathbb{Z}" /> ✓</p>
    </>
  ),
  'sq12': (
    <>
      <p className="mt-2"><MathTex tex="a^2=1,\; a \neq 1 \Rightarrow a=-1" /></p>
      <p className="mt-2"><MathTex tex="b^2=b \Rightarrow b=0" /></p>
      <p className="mt-2"><MathTex tex="a+b = -1+0 = -1" /></p>
    </>
  ),
  'sq13': (
    <>
      <p className="mt-2"><MathTex tex="A=[-1,3],\; B=[a,+\infty)" /></p>
      <p className="mt-2">有交集 → B 左端不超过 A 右端 → <MathTex tex="a \leq 3" /></p>
    </>
  ),
  'sq14': (
    <>
      <p className="mt-2"><MathTex tex="A=(-2,4),\; B=(-\infty,a)" /></p>
      <p className="mt-2"><MathTex tex="A \subseteq B \Rightarrow a \geq 4" /></p>
    </>
  ),
  'sq15': (
    <>
      <p className="mt-2"><MathTex tex="A=(-\infty,1],\; B=(-2,+\infty)" /></p>
      <p className="mt-2"><MathTex tex="A \cup B = \mathbb{R}" /> → 补集 = <MathTex tex="\varnothing" /></p>
    </>
  ),
  'sq16': (
    <>
      <p className="mt-2">容斥原理：</p>
      <p className="text-center mt-1"><MathTex tex="|A \cup B| = 30+25-15 = 40" /></p>
      <p className="mt-2">都没参加 = 50 - 40 = 10</p>
    </>
  ),
  'sq17': (
    <>
      <p className="mt-2"><MathTex tex="A=[1,3],\; B=(a,+\infty)" /></p>
      <p className="mt-2">交集为空 → B 左端不小于 A 右端 → <MathTex tex="a \geq 3" /></p>
    </>
  ),
  'sq18': (
    <>
      <p className="mt-2">&lt; → 小括号 (；≤ → 方括号 ]</p>
      <p className="text-center mt-1"><MathTex tex="(-3, 5]" /></p>
    </>
  ),
  'sq19': (
    <>
      <p className="mt-2">非空真子集 = 去掉 <MathTex tex="\varnothing" /> 和自身</p>
      <p className="text-center mt-1"><MathTex tex="2^3 - 2 = 6" /></p>
    </>
  ),
  'sq20': (
    <>
      <p className="mt-2">竖线前是 <MathTex tex="(x,y)" /> → 点集；前是 <MathTex tex="x" /> → 数集</p>
    </>
  ),
  'sq21': (
    <>
      <p className="mt-2"><MathTex tex="b/a=0 \Rightarrow b=0" /></p>
      <p className="mt-2"><MathTex tex="a^2=1,\; a=-1" /> 有重复 → <MathTex tex="a=1" /></p>
      <p className="mt-2"><MathTex tex="1^{2025}+0^{2025}=1" /></p>
    </>
  ),
  'sq22': (
    <>
      <p className="mt-2">三根 <MathTex tex="a,\;1,\;a-1" /></p>
      <p className="mt-2">三根不同：<MathTex tex="2a=3 \Rightarrow a=\tfrac{3}{2}" /> ✓</p>
      <p className="mt-2"><MathTex tex="a=2" /> 时有重根，<MathTex tex="M=\{1,2\}" />，和 = 3 ✓</p>
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
      <AnswerSection title="一、元素与集合 — 即时练习" questions={setsPractice0} />
      <AnswerSection title="二、集合的概念 — 即时练习" questions={setsPractice1} />
      <AnswerSection title="三、集合的表示 — 即时练习" questions={setsPractice2} />
      <AnswerSection title="四、常用数集 — 即时练习" questions={setsPractice3} />
      <AnswerSection title="五、集合间的关系 — 即时练习" questions={setsPractice4} />
      <AnswerSection title="六、集合的运算 — 即时练习" questions={setsPractice5} />
      <AnswerSection title="高考真题实战" questions={setsQuizQuestions} />
    </section>
  );
}
