import type { ReactNode } from 'react';
import { Math as MathTex, PageBreak } from '@/components/shared';
import { complexPractice1, complexPractice2, complexPractice3, complexPractice4, complexPractice5 } from './data/practice';
import { complexQuizQuestions } from './data/quiz';
import type { QuizQuestionData } from '@/types';

// ══════════════════════════════════════════════════════════
// 解析内容（唯一数据源）— 交互 + 打印共用
// ══════════════════════════════════════════════════════════

export const complexExplanations: Record<string, ReactNode> = {
  // ── 第1节：虚数单位 i ──
  'cp1-1': (
    <>
      <p className="mt-2"><MathTex tex="i^2 = -1" /> ← 核心定义，必背</p>
    </>
  ),
  'cp1-2': (
    <>
      <p className="mt-2"><MathTex tex="x \in \mathbb{R} \Rightarrow x^2 \geq 0 > -1" /></p>
      <p className="mt-2">所以 <MathTex tex="x^2=-1" /> 无实数解，需要虚数 <MathTex tex="i" /></p>
    </>
  ),

  // ── 第2节：复数的概念 ──
  'cp2-1': (
    <>
      <p className="mt-2"><MathTex tex="z = 5+(-4)i" />，实部 <MathTex tex="a=5" />，虚部 <MathTex tex="b=-4" /></p>
      <p className="mt-2">注意：虚部是 <MathTex tex="-4" />，不是 <MathTex tex="-4i" />！</p>
    </>
  ),
  'cp2-2': (
    <>
      <p className="mt-2"><MathTex tex="z = 0 + 2i" />，<MathTex tex="a=0,\; b=2 \neq 0" /> → 纯虚数</p>
    </>
  ),

  // ── 第3节：复数相等 ──
  'cp3-1': (
    <>
      <p className="mt-2">复数 = 0 → 实部虚部都为 0：</p>
      <p className="text-center mt-1"><MathTex tex="\begin{cases} 3x-6=0 \Rightarrow x=2 \\ 2y+4=0 \Rightarrow y=-2 \end{cases}" /></p>
    </>
  ),
  'cp3-2': (
    <>
      <p className="mt-2">实部对实部，虚部对虚部：</p>
      <p className="text-center mt-1"><MathTex tex="a+bi = 2+(-3)i \Rightarrow a=2,\; b=-3" /></p>
    </>
  ),

  // ── 第4节：复数运算 ──
  'cp4-1': (
    <>
      <p className="mt-2">实部加实部，虚部加虚部：</p>
      <p className="text-center mt-1"><MathTex tex="(3+1)+(2-5)i = 4-3i" /></p>
    </>
  ),
  'cp4-2': (
    <>
      <p className="mt-2">分母实数化：上下同乘共轭</p>
      <p className="text-center mt-1"><MathTex tex="\frac{(1+i)^2}{(1-i)(1+i)} = \frac{2i}{2} = i" /></p>
    </>
  ),
  'cp4-3': (
    <>
      <p className="mt-2">模的公式：</p>
      <p className="text-center mt-1"><MathTex tex="|3+4i| = \sqrt{9+16} = \sqrt{25} = 5" /></p>
    </>
  ),
  'cp4-4': (
    <>
      <p className="mt-2"><MathTex tex="67 \div 4 = 16 \cdots\cdots 3 \Rightarrow i^{67} = i^3 = -i" /></p>
    </>
  ),

  // ── 第5节：复平面 ──
  'cp5-1': (
    <>
      <p className="mt-2"><MathTex tex="z=-2+3i" /> → 点 <MathTex tex="(-2,3)" /></p>
      <p className="mt-2"><MathTex tex="a=-2<0,\; b=3>0" /> → 第二象限</p>
    </>
  ),
  'cp5-2': (
    <>
      <p className="mt-2"><MathTex tex="z=4-i" /> → 点 <MathTex tex="(4,-1)" /></p>
      <p className="mt-2"><MathTex tex="a=4>0,\; b=-1<0" /> → 第四象限</p>
    </>
  ),

  // ── 高考真题 ──
  'q1': (
    <>
      <p className="mt-2">分母实数化：上下同乘 <MathTex tex="(1+2i)" /></p>
      <p className="text-center mt-1"><MathTex tex="\frac{(2+i)(1+2i)}{5} = \frac{5i}{5} = i" />，虚部为 1</p>
    </>
  ),
  'q2': (
    <>
      <p className="mt-2">上下同乘 <MathTex tex="(1+i)" />：</p>
      <p className="text-center mt-1"><MathTex tex="\frac{(1+i)^2}{2} = \frac{2i}{2} = i" /></p>
    </>
  ),
  'q3': (
    <>
      <p className="mt-2">分母实数化：</p>
      <p className="text-center mt-1"><MathTex tex="\frac{(1+3i)(1-i)}{2} = \frac{4+2i}{2} = 2+i" />，点 (2,1) 在第一象限</p>
    </>
  ),
  'q4': (
    <>
      <p className="mt-2"><MathTex tex="i^3 = -i" />，展开：</p>
      <p className="text-center mt-1"><MathTex tex="(1+i)(-i) = -i - i^2 = -i + 1 = 1 - i" /></p>
    </>
  ),
  'q5': (
    <>
      <p className="mt-2"><MathTex tex="z = 3 + (-2)i" />，虚部是 <MathTex tex="-2" />，不是 <MathTex tex="-2i" /></p>
    </>
  ),
  'q6': (
    <>
      <p className="mt-2">先化简再求模：</p>
      <p className="text-center mt-1"><MathTex tex="z = \frac{3-i}{2} \Rightarrow |z| = \sqrt{\frac{9}{4}+\frac{1}{4}} = \frac{\sqrt{10}}{2}" /></p>
    </>
  ),
  'q7': (
    <>
      <p className="mt-2">先算 <MathTex tex="(1-i)^2" />，再平方：</p>
      <p className="text-center mt-1"><MathTex tex="(1-i)^2 = -2i \Rightarrow (-2i)^2 = 4i^2 = -4" /></p>
    </>
  ),
  'q8': (
    <>
      <p className="mt-2">分母实数化后看虚部系数：</p>
      <p className="text-center mt-1"><MathTex tex="\frac{2(1-i)}{2} = 1-i" />，虚部为 <MathTex tex="-1" /></p>
    </>
  ),
  'q9': (
    <>
      <p className="mt-2">先解出 <MathTex tex="z" />：</p>
      <p className="text-center mt-1"><MathTex tex="1-z = \frac{1}{i} = -i \Rightarrow z = 1+i \Rightarrow z+\bar{z} = 2" /></p>
    </>
  ),
  'q10': (
    <>
      <p className="mt-2">分母实数化：</p>
      <p className="text-center mt-1"><MathTex tex="\frac{(2-i)(1+3i)}{10} = \frac{5+5i}{10} = \frac{1}{2}+\frac{1}{2}i" />，第一象限</p>
    </>
  ),
  'q11': (
    <>
      <p className="mt-2">展开后令虚部为 0：</p>
      <p className="text-center mt-1"><MathTex tex="(a+i)(1-ai) = 2a + (1-a^2)i = 2" /></p>
      <p className="mt-2"><MathTex tex="1-a^2=0 \Rightarrow a=\pm 1" />；<MathTex tex="2a=2 \Rightarrow a=1" /></p>
    </>
  ),
  'q12': (
    <>
      <p className="mt-2">纯虚数：实部 = 0 且虚部 ≠ 0</p>
      <p className="text-center mt-1"><MathTex tex="m^2-1=0 \Rightarrow m=\pm 1" /></p>
      <p className="mt-2"><MathTex tex="m=-1" /> 时虚部 = 0（不是纯虚数），故 <MathTex tex="m=1" /></p>
    </>
  ),
  'q13': (
    <>
      <p className="mt-2">展开，<MathTex tex="i^2 \to -1" />：</p>
      <p className="text-center mt-1"><MathTex tex="(2+3i)(1-i) = 2-2i+3i-3i^2 = 2+i+3 = 5+i" /></p>
    </>
  ),
  'q14': (
    <>
      <p className="mt-2">重要公式 <MathTex tex="z \cdot \bar{z} = |z|^2" />：</p>
      <p className="text-center mt-1"><MathTex tex="(1+2i)(1-2i) = 1+4 = 5" /></p>
    </>
  ),
  'q15': (
    <>
      <p className="mt-2">每 4 个连续 <MathTex tex="i" /> 的幂之和为 0：</p>
      <p className="text-center mt-1"><MathTex tex="i+i^2+i^3+i^4 = 0" />，共 506 组，总和 = 0</p>
    </>
  ),
  'q16': (
    <>
      <p className="mt-2">展开后实部虚部分别相等：</p>
      <p className="text-center mt-1"><MathTex tex="(x-y)+(x+y)i = 2 \Rightarrow x+y=0" /></p>
    </>
  ),
};

// ══════════════════════════════════════════════════════════
// 打印答案组件 — 布局自由控制，内容从 explanations 取
// ══════════════════════════════════════════════════════════

function AnswerLabel({ q }: { q: QuizQuestionData }) {
  if (q.type === 'blank') {
    const tex = q.acceptableAnswers?.[0] ?? q.correctAnswer;
    const isSimpleFraction = /^-?\d+\/\d+$/.test(q.correctAnswer);
    const displayTex = isSimpleFraction
      ? q.correctAnswer.replace(/(-?\d+)\/(\d+)/, '\\frac{$1}{$2}')
      : tex;
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
              {complexExplanations[q.id] && <div className="mt-1">{complexExplanations[q.id]}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ComplexAnswers() {
  return (
    <section className="mb-8 print-answers">
      <PageBreak label="答案与解析" />
      <h2 className="text-xl font-bold text-gray-900 mb-4">📝 1.1 复数 — 答案与解析</h2>
      <AnswerSection title="一、虚数单位 i — 即时练习" questions={complexPractice1} />
      <AnswerSection title="二、复数的概念 — 即时练习" questions={complexPractice2} />
      <AnswerSection title="三、复数的相等 — 即时练习" questions={complexPractice3} />
      <AnswerSection title="四、四则运算 — 即时练习" questions={complexPractice4} />
      <AnswerSection title="五、复平面 — 即时练习" questions={complexPractice5} />
      <AnswerSection title="高考真题实战" questions={complexQuizQuestions} />
    </section>
  );
}
