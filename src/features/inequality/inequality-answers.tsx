import type { ReactNode } from 'react';
import { Math as MathTex, PageBreak } from '@/components/shared';
import { ineqPractice1, ineqPractice2 } from './data/practice';
import { inequalityQuizQuestions } from './data/quiz';
import type { QuizQuestionData } from '@/types';

export const inequalityExplanations: Record<string, ReactNode> = {
  'iq1-1': (
    <>
      <p className="mt-2">先移项：<MathTex tex="3x-5>7 \Rightarrow 3x>12" /></p>
      <p className="mt-2">除以正数 3，不等号方向不变</p>
      <p className="text-center mt-1"><MathTex tex="x>4" /></p>
    </>
  ),
  'iq1-2': (
    <>
      <p className="mt-2">先移项：<MathTex tex="-2x+6\le 0 \Rightarrow -2x\le -6" /></p>
      <p className="mt-2">除以负数 <MathTex tex="-2" />，不等号要反向</p>
      <p className="text-center mt-1"><MathTex tex="x\ge 3" /></p>
    </>
  ),
  'iq1-3': (
    <>
      <p className="mt-2">A：同乘正数，方向不变，所以一定成立</p>
      <p className="mt-2">B：乘负数应该变号</p>
      <p className="mt-2">C、D 都需要额外条件，不能保证</p>
      <p className="text-center mt-1"><MathTex tex="a>b \Rightarrow 2a>2b" /></p>
    </>
  ),
  'iq2-1': (
    <>
      <p className="mt-2">题目只说 <MathTex tex="x\ne 0" />，没说 <MathTex tex="x>0" /></p>
      <p className="mt-2">所以不一定能直接用基本不等式</p>
      <p className="mt-2">当 <MathTex tex="x\to 0^-" /> 时，原式会趋向负无穷</p>
      <p className="mt-2">结论：最小值不存在</p>
    </>
  ),
  'iq2-3': (
    <>
      <p className="mt-2">先凑形：<MathTex tex="x=(x-3)+3" /></p>
      <p className="text-center mt-1"><MathTex tex="x+\dfrac{4}{x-3}=(x-3)+\dfrac{4}{x-3}+3" /></p>
      <p className="mt-2">因为 <MathTex tex="x>3" />，所以 <MathTex tex="x-3>0" />，可用基本不等式</p>
      <p className="text-center mt-1"><MathTex tex="(x-3)+\dfrac{4}{x-3}\ge 2\sqrt4=4" /></p>
      <p className="mt-2">所以原式最小值是 <MathTex tex="7" /></p>
    </>
  ),
  'iq2-4': (
    <>
      <p className="mt-2">利用 <MathTex tex="a+b=1" /> 做“1 的代换”</p>
      <p className="text-center mt-1"><MathTex tex="\left(\dfrac{4}{a}+\dfrac{1}{b}\right)(a+b)=5+\dfrac{4b}{a}+\dfrac{a}{b}" /></p>
      <p className="mt-2">后两项乘积固定为 4，用基本不等式</p>
      <p className="text-center mt-1"><MathTex tex="\dfrac{4b}{a}+\dfrac{a}{b}\ge 2\sqrt4=4" /></p>
      <p className="mt-2">所以最小值是 <MathTex tex="9" /></p>
    </>
  ),
  'iqz1': (
    <>
      <p className="mt-2">同向不等式可以相加</p>
      <p className="text-center mt-1"><MathTex tex="a>b,\ c>d \Rightarrow a+c>b+d" /></p>
      <p className="mt-2">所以选 C</p>
    </>
  ),
  'iqz2': (
    <>
      <p className="mt-2"><MathTex tex="a<0<b" /> 且 <MathTex tex="|a|>|b|" /></p>
      <p className="mt-2">说明负数部分更“强”，相加仍为负</p>
      <p className="text-center mt-1"><MathTex tex="a+b<0" /></p>
    </>
  ),
  'iqz3': (
    <>
      <p className="mt-2">去分母乘 6：<MathTex tex="3(x+1)-2(x-2)\le 6" /></p>
      <p className="text-center mt-1"><MathTex tex="x+7\le 6 \Rightarrow x\le -1" /></p>
    </>
  ),
  'iqz4': (
    <>
      <p className="text-center mt-1"><MathTex tex="x+\dfrac{1}{2x}\ge 2\sqrt{x\cdot\dfrac{1}{2x}}=\sqrt2" /></p>
      <p className="mt-2">所以最小值是 <MathTex tex="\sqrt2" /></p>
    </>
  ),
  'iqz5': (
    <>
      <p className="mt-2">把条件 <MathTex tex="\dfrac1a+\dfrac4b=1" /> 乘进 <MathTex tex="a+b" /></p>
      <p className="text-center mt-1"><MathTex tex="a+b=5+\dfrac{4a}{b}+\dfrac{b}{a}" /></p>
      <p className="mt-2">后两项用基本不等式，最小得到 4</p>
      <p className="mt-2">所以 <MathTex tex="a+b\ge 9" /></p>
    </>
  ),
  'iqz7': (
    <>
      <p className="mt-2">设长宽为 <MathTex tex="a,b" />，则 <MathTex tex="ab=36" /></p>
      <p className="mt-2">周长 <MathTex tex="=2(a+b)" /></p>
      <p className="text-center mt-1"><MathTex tex="a+b\ge 2\sqrt{ab}=12" /></p>
      <p className="mt-2">所以周长最小值是 <MathTex tex="24" /></p>
    </>
  ),
  'iqz8': (
    <>
      <p className="mt-2">零点是 <MathTex tex="x=\dfrac12" /> 和 <MathTex tex="x=3" /></p>
      <p className="mt-2">大于零取中间</p>
      <p className="text-center mt-1"><MathTex tex="\left(\dfrac12,3\right)" /></p>
    </>
  ),
  'iqz9': (
    <>
      <p className="mt-2">恒大于零：开口向上且无实根</p>
      <p className="text-center mt-1"><MathTex tex="\Delta=4-4a<0 \Rightarrow a>1" /></p>
      <p className="mt-2">注意严格大于 0，所以不能取等号</p>
    </>
  ),
  'iqz10': (
    <>
      <p className="mt-2">先解集合 A</p>
      <p className="text-center mt-1"><MathTex tex="(x+1)(x-3)\le 0 \Rightarrow A=[-1,3]" /></p>
      <p className="mt-2">再与 <MathTex tex="B=[0,+\infty)" /> 取交集</p>
      <p className="text-center mt-1"><MathTex tex="A\cap B=[0,3]" /></p>
    </>
  ),
  'iqz11': (
    <>
      <p className="mt-2">先把 <MathTex tex="a+b=2" /> 变成 “1 的代换”</p>
      <p className="text-center mt-1"><MathTex tex="\dfrac{\left(\frac1a+\frac4b\right)(a+b)}{2}=\dfrac{5+\frac{4a}{b}+\frac{b}{a}}{2}" /></p>
      <p className="mt-2">后两项最小是 4</p>
      <p className="text-center mt-1"><MathTex tex="\dfrac{5+4}{2}=\dfrac92" /></p>
    </>
  ),
  'iqz12': (
    <>
      <p className="mt-2">因为 <MathTex tex="a\ne b" />，所以平方和严格大于二倍积</p>
      <p className="text-center mt-1"><MathTex tex="a^2+b^2>2ab" /></p>
      <p className="mt-2">其余选项都和已知矛盾</p>
    </>
  ),
};

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
        <AnswerSection title="一、不等式性质 + 一元一次不等式 — 即时练习" questions={ineqPractice1} />
        <AnswerSection title="三、基本不等式 — 即时练习" questions={ineqPractice2} />
        <AnswerSection title="综合测试（高考真题 + 精华题）" questions={inequalityQuizQuestions} />
      </section>
    </>
  );
}
