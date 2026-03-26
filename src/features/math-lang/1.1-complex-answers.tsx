import type { ReactNode } from 'react';
import { Math as MathTex, PageBreak } from '@/components/shared';
import { complexPractice1, complexPractice2, complexPractice3, complexPractice4, complexPractice5 } from './data/1.1/1.1-practice';
import { complexQuizQuestions } from './data/1.1/1.1-quiz';
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
  'cp2-3': (
    <>
      <p className="mt-2">纯虚数条件：实部 = 0 且虚部 ≠ 0</p>
      <p className="text-center mt-1"><MathTex tex="m^2-1=0 \Rightarrow m=\pm 1" /></p>
      <p className="mt-2">检查虚部：<MathTex tex="m-1 \neq 0 \Rightarrow m \neq 1" /></p>
      <p className="mt-2">所以 <MathTex tex="m = -1" /></p>
    </>
  ),
  'cp2-4': (
    <>
      <p className="mt-2"><MathTex tex="i^2 = -1" />，是实数</p>
      <p className="mt-2">其余选项都含 <MathTex tex="i" />，虚部不为 0，是虚数</p>
    </>
  ),
  'cp2-5': (
    <>
      <p className="mt-2"><MathTex tex="z = \bar{z} \Rightarrow a+bi = a-bi \Rightarrow 2bi = 0 \Rightarrow b = 0" /></p>
      <p className="mt-2">虚部为 0，所以 <MathTex tex="z" /> 是实数</p>
    </>
  ),

  // ── 第3节：复数相等 ──
  'cp3-1': (
    <>
      <p className="mt-2">实部对实部，虚部对虚部：</p>
      <p className="text-center mt-1"><MathTex tex="a+bi = 2+(-3)i \Rightarrow a=2,\; b=-3" /></p>
    </>
  ),
  'cp3-2': (
    <>
      <p className="mt-2">复数 = 0 → 实部虚部都为 0：</p>
      <p className="text-center mt-1"><MathTex tex="3x-6=0 \Rightarrow x=2" /></p>
      <p className="text-center mt-1"><MathTex tex="2y+4=0 \Rightarrow y=-2" /></p>
    </>
  ),
  'cp3-3': (
    <>
      <p className="mt-2">实部和虚部都等于 0：</p>
      <p className="text-center mt-1"><MathTex tex="x+1=0 \Rightarrow x=-1" /></p>
      <p className="mt-2">验证虚部：<MathTex tex="x^2-1=(-1)^2-1=0" />，也为 0 ✓</p>
      <p className="mt-2">若 <MathTex tex="x=1" />：实部 <MathTex tex="=2\neq 0" />，不满足</p>
    </>
  ),
  'cp3-4': (
    <>
      <p className="mt-2">两边化成 <MathTex tex="a+bi" /> 形式再比较：</p>
      <p className="mt-2">左边：<MathTex tex="(a^2-4)+(a+2)i" />，右边：<MathTex tex="0+bi" /></p>
      <p className="mt-2">实部相等：<MathTex tex="a^2-4=0 \Rightarrow a=\pm 2" /></p>
      <p className="mt-2">虚部相等：<MathTex tex="a+2=b" /></p>
      <p className="mt-2">当 <MathTex tex="a=-2" /> 时 <MathTex tex="b=0" />，但题目要求 <MathTex tex="b\neq 0" />，排除</p>
      <p className="mt-2">当 <MathTex tex="a=2" /> 时 <MathTex tex="b=4" />，所以 <MathTex tex="a+b=6" /></p>
    </>
  ),
  'cp3-5': (
    <>
      <p className="mt-2">设 <MathTex tex="z=a+bi" />，则 <MathTex tex="\bar{z}=a-bi" /></p>
      <p className="mt-2">代入：<MathTex tex="(a+bi)+2(a-bi)=3a-bi=3+i" /></p>
      <p className="mt-2">实部：<MathTex tex="3a=3 \Rightarrow a=1" /></p>
      <p className="mt-2">虚部：<MathTex tex="-b=1 \Rightarrow b=-1" /></p>
      <p className="mt-2">所以 <MathTex tex="z=1-i" /></p>
    </>
  ),

  // ── 第4节：复数运算 ──
  'cp4-1': (
    <>
      <p className="mt-2">展开，遇 <MathTex tex="i^2" /> 换 <MathTex tex="-1" />：</p>
      <p className="text-center mt-1"><MathTex tex="2+6i-i-3i^2 = 2+5i+3 = 5+5i" /></p>
    </>
  ),
  'cp4-2': (
    <>
      <p className="mt-2">上下同乘共轭 <MathTex tex="1-i" />：</p>
      <p className="text-center mt-1"><MathTex tex="\frac{(3+i)(1-i)}{2} = \frac{4-2i}{2} = 2-i" /></p>
      <p className="mt-2">虚部是 <MathTex tex="-1" />（不是 <MathTex tex="-i" />）</p>
    </>
  ),
  'cp4-3': (
    <>
      <p className="mt-2">代入：<MathTex tex="1+i+(-1)+(-i) = 0" /></p>
      <p className="mt-2">连续4个 <MathTex tex="i" /> 的幂之和恒为 0</p>
    </>
  ),
  'cp4-4': (
    <>
      <p className="mt-2">分子 <MathTex tex="(1+i)^2 = 2i" />，所以 <MathTex tex="z = \frac{2i}{1-i}" /></p>
      <p className="mt-2">上下同乘 <MathTex tex="1+i" />：<MathTex tex="z = \frac{2i(1+i)}{2} = -1+i" /></p>
      <p className="mt-2"><MathTex tex="|z| = \sqrt{1+1} = \sqrt{2}" /></p>
    </>
  ),
  'cp4-5': (
    <>
      <p className="mt-2">先算 <MathTex tex="z" />：<MathTex tex="(2+i)(1-i) = 2-2i+i-i^2 = 3-i" /></p>
      <p className="mt-2"><MathTex tex="\bar{z} = 3+i" /></p>
      <p className="mt-2"><MathTex tex="z+\bar{z} = (3-i)+(3+i) = 6" /></p>
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
      <p className="mt-2">凑因子：<MathTex tex="i(1-2i) = 2+i" />，所以</p>
      <p className="text-center mt-1"><MathTex tex="\frac{2+i}{1-2i} = i" />，虚部为 <strong>1</strong></p>
    </>
  ),
  'q2': (
    <>
      <p className="mt-2">上下同乘 <MathTex tex="1-i" />：</p>
      <p className="text-center mt-1"><MathTex tex="\frac{(1+3i)(1-i)}{2} = \frac{4+2i}{2} = 2+i" /></p>
      <p className="mt-2">点 <MathTex tex="(2,1)" />，在第一象限</p>
    </>
  ),
  'q3': (
    <>
      <p className="mt-2"><MathTex tex="i^3 = -i" />，展开：</p>
      <p className="text-center mt-1"><MathTex tex="(1+i)(-i) = -i - i^2 = 1 - i" /></p>
    </>
  ),
  'q4': (
    <>
      <p className="mt-2">模的速算：<MathTex tex="|z| = \frac{|2+i|}{|1+i|} = \frac{\sqrt{5}}{\sqrt{2}} = \frac{\sqrt{10}}{2}" /></p>
    </>
  ),
  'q5': (
    <>
      <p className="mt-2">先算 <MathTex tex="(1-i)^2 = -2i" />，再平方：</p>
      <p className="text-center mt-1"><MathTex tex="(-2i)^2 = 4i^2 = -4" /></p>
    </>
  ),
  'q6': (
    <>
      <p className="mt-2">先解 <MathTex tex="z" />：<MathTex tex="1-z = \frac{1}{i} = -i" /></p>
      <p className="mt-2">所以 <MathTex tex="z = 1+i" />，<MathTex tex="z+\bar{z} = 2" /></p>
    </>
  ),
  'q7': (
    <>
      <p className="mt-2">展开：<MathTex tex="(a+i)(1-ai) = 2a + (1-a^2)i = 2" /></p>
      <p className="mt-2">虚部 = 0：<MathTex tex="a = \pm 1" />；实部 = 2：<MathTex tex="a = 1" /></p>
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
