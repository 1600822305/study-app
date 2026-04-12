import type { ReactNode } from 'react';
import { Math as MathTex, PageBreak } from '@/components/shared';
import { amgmBasicFill, amgmTransformFill, amgmReverseFill, amgmNonHomoFill, amgmHomoFill } from './data/2.1/2.1-practice';
import type { QuizQuestionData } from '@/types';

// ══════════════════════════════════════════════
// 解析内容（唯一数据源）— 交互 + 打印共用
// ══════════════════════════════════════════════

export const inequalityExplanations: Record<string, ReactNode> = {
  // ── 超基础填空（3题）──
  'iq-bf1': (
    <>
      <p className="mt-2">积定求和，<MathTex tex="a+b \geq 2\sqrt{ab} = 2\sqrt{9} = 6" /></p>
      <p className="mt-1">最小值为 <strong>6</strong></p>
    </>
  ),
  'iq-bf2': (
    <>
      <p className="mt-2">和定求积，<MathTex tex="10 \geq 2\sqrt{ab}" />，两边平方得 <MathTex tex="ab \leq 25" /></p>
      <p className="mt-1">最大值为 <strong>25</strong></p>
    </>
  ),
  'iq-bf3': (
    <>
      <p className="mt-2"><MathTex tex="x \cdot \dfrac{4}{x} = 4" /> 是定值，<MathTex tex="x+\dfrac{4}{x} \geq 2\sqrt{4} = 4" /></p>
      <p className="mt-1">最小值为 <strong>4</strong></p>
    </>
  ),
  // ── 小变形填空（3题）──
  'iq-tf1': (
    <>
      <p className="mt-2"><MathTex tex="a^2+b^2 \geq 2ab" />，代入得 <MathTex tex="9 \geq 2ab" />，即 <MathTex tex="ab \leq \dfrac{9}{2}" /></p>
      <p className="mt-1">最大值为 <MathTex tex="\dfrac{9}{2}" /></p>
    </>
  ),
  'iq-tf2': (
    <>
      <p className="mt-2"><MathTex tex="\dfrac{1}{a} \cdot \dfrac{4}{b} = \dfrac{4}{ab} = \dfrac{4}{9}" /> 是定值</p>
      <p className="mt-1"><MathTex tex="\dfrac{1}{a}+\dfrac{4}{b} \geq 2\sqrt{\dfrac{4}{9}} = \dfrac{4}{3}" />，最小值为 <MathTex tex="\dfrac{4}{3}" /></p>
    </>
  ),
  'iq-tf3': (
    <>
      <p className="mt-2">展开 <MathTex tex="(a+2)(b+2) = ab+2a+2b+4 = 1+2(a+b)+4" /></p>
      <p className="mt-1"><MathTex tex="a+b \geq 2\sqrt{ab} = 2" />，所以原式 <MathTex tex="\geq 1+4+4 = 9" /></p>
      <p className="mt-1">最小值为 <strong>9</strong></p>
    </>
  ),
  // ── 逆向思维填空（2题）──
  'iq-rf1': (
    <>
      <p className="mt-2"><MathTex tex="(a+2)+(b+3) \geq 2\sqrt{(a+2)(b+3)} = 2\sqrt{25} = 10" /></p>
      <p className="mt-1"><MathTex tex="a+b+5 \geq 10" />，所以 <MathTex tex="a+b \geq 5" />，最小值为 <strong>5</strong></p>
    </>
  ),
  'iq-rf2': (
    <>
      <p className="mt-2"><MathTex tex="(a+3)+(b+1) \geq 2\sqrt{(a+3)(b+1)} = 2\sqrt{9} = 6" /></p>
      <p className="mt-1"><MathTex tex="a+b+4 \geq 6" />，所以 <MathTex tex="a+b \geq 2" />，最小值为 <strong>2</strong></p>
    </>
  ),
  // ── 非齐次式填空（2题）──
  'iq-nhf1': (
    <>
      <p className="mt-2"><MathTex tex="x \cdot \dfrac{4}{x} = 4" /> 是定值，<MathTex tex="x+\dfrac{4}{x} \geq 2\sqrt{4} = 4" /></p>
      <p className="mt-1">最小值为 <strong>4</strong></p>
    </>
  ),
  'iq-nhf2': (
    <>
      <p className="mt-2">凑配：<MathTex tex="2x = 2(x-1)+2" /></p>
      <p className="mt-1">原式 <MathTex tex="= 2(x-1)+\dfrac{1}{x-1}+2" />，套公式得 <MathTex tex="2(x-1)+\dfrac{1}{x-1} \geq 2\sqrt{2}" /></p>
      <p className="mt-1">最小值为 <MathTex tex="2\sqrt{2}+2" /></p>
    </>
  ),
  // ── 齐次式 & 齐次化填空（4题）──
  'iq-hf1': (
    <>
      <p className="mt-2"><MathTex tex="\dfrac{a}{b} \cdot \dfrac{4b}{a} = 4" /> 是定值，<MathTex tex="\dfrac{a}{b}+\dfrac{4b}{a} \geq 2\sqrt{4} = 4" /></p>
      <p className="mt-1">最小值为 <strong>4</strong></p>
    </>
  ),
  'iq-hf2': (
    <>
      <p className="mt-2">齐次化：<MathTex tex="\dfrac{2a+b}{ab} = \dfrac{2}{b}+\dfrac{1}{a}" />，代入 <MathTex tex="a+b=1" /></p>
      <p className="mt-1"><MathTex tex="= 3+\dfrac{2a}{b}+\dfrac{b}{a} \geq 3+2\sqrt{2}" /></p>
      <p className="mt-1">最小值为 <MathTex tex="3+2\sqrt{2}" /></p>
    </>
  ),
  'iq-hf3': (
    <>
      <p className="mt-2">齐次化：代入 <MathTex tex="a+b=3" />，<MathTex tex="\dfrac{1}{a}+\dfrac{1}{b} = \dfrac{2}{3}+\dfrac{a}{3b}+\dfrac{b}{3a}" /></p>
      <p className="mt-1"><MathTex tex="\dfrac{a}{3b}+\dfrac{b}{3a} \geq \dfrac{2}{3}" />，所以原式 <MathTex tex="\geq \dfrac{4}{3}" /></p>
      <p className="mt-1">最小值为 <MathTex tex="\dfrac{4}{3}" /></p>
    </>
  ),
  'iq-hf4': (
    <>
      <p className="mt-2"><MathTex tex="(x-2)+(8-x) = 6" /> 是定值，<MathTex tex="6 \geq 2\sqrt{(x-2)(8-x)}" /></p>
      <p className="mt-1">两边平方得 <MathTex tex="(x-2)(8-x) \leq 9" />，最大值为 <strong>9</strong></p>
    </>
  ),
};

// ══════════════════════════════════════════════
// 打印答案组件
// ══════════════════════════════════════════════

function AnswerLabel({ q }: { q: QuizQuestionData }) {
  if (q.type === 'blank') {
    const raw = q.acceptableAnswers?.[0] ?? q.correctAnswer;
    const isSimpleFraction = /^-?\d+\/\d+$/.test(q.correctAnswer);
    const displayTex = isSimpleFraction ? q.correctAnswer.replace(/(-?\d+)\/(\d+)/, '\\frac{$1}{$2}') : raw;
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
              <p className="font-bold text-gray-900"><AnswerLabel q={q} /></p>
              {inequalityExplanations[q.id] && <div className="mt-1">{inequalityExplanations[q.id]}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function InequalityAnswers() {
  return (
    <>
      <PageBreak label="答案与解析" />
      <section className="mb-8 print-answers">
        <h2 className="text-xl font-bold text-gray-900 mb-4">📝 2.1 不等式 — 答案与解析</h2>
        <AnswerSection title="超基础填空" questions={amgmBasicFill} />
        <AnswerSection title="小变形填空" questions={amgmTransformFill} />
        <AnswerSection title="逆向思维填空" questions={amgmReverseFill} />
        <AnswerSection title="非齐次式填空" questions={amgmNonHomoFill} />
        <AnswerSection title="齐次式 & 齐次化填空" questions={amgmHomoFill} />
      </section>
    </>
  );
}
