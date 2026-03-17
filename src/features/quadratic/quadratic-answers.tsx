import type { ReactNode } from 'react';
import { Math as MathTex, PageBreak } from '@/components/shared';
import { quadPractice1, quadPractice2 } from './data/practice';
import { quadraticQuizQuestions } from './data/quiz';
import type { QuizQuestionData } from '@/types';

export const quadraticExplanations: Record<string, ReactNode> = {
  'qp1-1': (
    <>
      <p className="mt-2">配方：<MathTex tex="x^2+4x+7=(x^2+4x+4)+3" /></p>
      <p className="text-center mt-1"><MathTex tex="y=(x+2)^2+3" /></p>
      <p className="mt-2">所以顶点是 <MathTex tex="(-2,3)" /></p>
    </>
  ),
  'qp1-2': (
    <>
      <p className="mt-2">对称轴：<MathTex tex="x=-\dfrac{b}{2a}=-\dfrac{8}{2\times(-2)}=2" /></p>
      <p className="mt-2">判别式 <MathTex tex="\Delta=64-40=24>0" /></p>
      <p className="mt-2">所以有两个交点</p>
    </>
  ),
  'qp1-3': (
    <>
      <p className="mt-2"><MathTex tex="a=-1<0" />，开口向下</p>
      <p className="mt-2">对称轴 <MathTex tex="x=3" /></p>
      <p className="mt-2">开口向下时，对称轴右侧递减</p>
    </>
  ),
  'qp1-4': (
    <>
      <p className="mt-2">对称轴：<MathTex tex="x=\dfrac{8}{4}=2" />，且 <MathTex tex="2\in[0,3]" /></p>
      <p className="mt-2">开口向上，区间最小值在顶点取到</p>
      <p className="text-center mt-1"><MathTex tex="y(2)=2\times4-16+3=-5" /></p>
    </>
  ),
  'qp2-1': (
    <>
      <p className="mt-2">判别式：<MathTex tex="\Delta=(-3)^2-4\times2\times5=9-40=-31<0" /></p>
      <p className="mt-2">所以无实根</p>
    </>
  ),
  'qp2-2': (
    <>
      <p className="mt-2">韦达：<MathTex tex="x_1+x_2=5,\ x_1x_2=6" /></p>
      <p className="text-center mt-1"><MathTex tex="x_1^2+x_2^2=(x_1+x_2)^2-2x_1x_2=25-12=13" /></p>
    </>
  ),
  'qp2-3': (
    <>
      <p className="mt-2">韦达逆用：<MathTex tex="x^2-(x_1+x_2)x+x_1x_2=0" /></p>
      <p className="text-center mt-1"><MathTex tex="x^2-3x-4=0" /></p>
    </>
  ),
  'qp2-4': (
    <>
      <p className="mt-2">韦达：<MathTex tex="x_1+x_2=2k,\ x_1x_2=k^2-1" /></p>
      <p className="text-center mt-1"><MathTex tex="x_1^2+x_2^2=(2k)^2-2(k^2-1)=2k^2+2" /></p>
    </>
  ),
  'qp2-5': (
    <>
      <p className="mt-2">根是 <MathTex tex="1,-2" />，则和为 <MathTex tex="-1" />，积为 <MathTex tex="-2" /></p>
      <p className="text-center mt-1"><MathTex tex="x^2-(-1)x+(-2)=x^2+x-2=0" /></p>
      <p className="mt-2">判别式：<MathTex tex="\Delta=1+8=9" /></p>
    </>
  ),
  'qqz1': (
    <>
      <p className="mt-2">配方：<MathTex tex="x^2-6x+5=(x-3)^2-4" /></p>
      <p className="mt-2">顶点是 <MathTex tex="(3,-4)" /></p>
    </>
  ),
  'qqz2': (
    <>
      <p className="mt-2">开口向下，所以 <MathTex tex="a<0" /></p>
      <p className="mt-2">对称轴 <MathTex tex="x=-\dfrac{b}{2a}=1" />，得 <MathTex tex="b=-2a" /></p>
      <p className="mt-2">因为 <MathTex tex="a<0" />，所以 <MathTex tex="b>0" /></p>
    </>
  ),
  'qqz3': (
    <>
      <p className="mt-2">对称轴 <MathTex tex="x=2" /> 在区间内</p>
      <p className="mt-2">开口向上，最小值在顶点</p>
      <p className="text-center mt-1"><MathTex tex="y(2)=8-16+3=-5" /></p>
    </>
  ),
  'qqz4': (
    <>
      <p className="mt-2">两个不等实根要求 <MathTex tex="\Delta>0" /></p>
      <p className="text-center mt-1"><MathTex tex="4-4k>0\Rightarrow k<1" /></p>
    </>
  ),
  'qqz6': (
    <>
      <p className="mt-2">相切就是只有一个交点，所以 <MathTex tex="\Delta=0" /></p>
      <p className="text-center mt-1"><MathTex tex="4-4m=0\Rightarrow m=1" /></p>
    </>
  ),
  'qqz7': (
    <>
      <p className="mt-2">韦达：<MathTex tex="x_1+x_2=3,\ x_1x_2=1" /></p>
      <p className="text-center mt-1"><MathTex tex="\dfrac1{x_1}+\dfrac1{x_2}=\dfrac{x_1+x_2}{x_1x_2}=3" /></p>
    </>
  ),
  'qqz8': (
    <>
      <p className="mt-2">根为 <MathTex tex="2,-5" /></p>
      <p className="mt-2">和是 <MathTex tex="-3" />，积是 <MathTex tex="-10" /></p>
      <p className="text-center mt-1"><MathTex tex="x^2+3x-10=0" /></p>
    </>
  ),
  'qqz9': (
    <>
      <p className="mt-2">韦达：<MathTex tex="x_1+x_2=-4,\ x_1x_2=-3" /></p>
      <p className="text-center mt-1"><MathTex tex="(x_1-x_2)^2=(x_1+x_2)^2-4x_1x_2=16+12=28" /></p>
    </>
  ),
  'qqz10': (
    <>
      <p className="mt-2">先因式分解：<MathTex tex="x^2-2x-3=(x+1)(x-3)" /></p>
      <p className="mt-2">开口向上，<MathTex tex=">0" /> 取两边</p>
      <p className="text-center mt-1"><MathTex tex="(-\infty,-1)\cup(3,+\infty)" /></p>
    </>
  ),
  'qqz11': (
    <>
      <p className="mt-2">韦达：<MathTex tex="x_1+x_2=\dfrac52,\ x_1x_2=\dfrac12" /></p>
      <p className="text-center mt-1"><MathTex tex="x_1^2+x_2^2=\left(\dfrac52\right)^2-2\cdot\dfrac12=\dfrac{21}{4}" /></p>
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
              {quadraticExplanations[q.id] && <div className="mt-1">{quadraticExplanations[q.id]}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function QuadraticAnswers() {
  return (
    <>
      <PageBreak label="答案与解析" />
      <section className="mb-8 print-answers">
        <h2 className="text-xl font-bold text-gray-900 mb-4">📝 2.3 二次函数 — 答案与解析</h2>
        <AnswerSection title="一、三种形式 + 图像 — 即时练习" questions={quadPractice1} />
        <AnswerSection title="四、判别式 + 韦达定理 — 即时练习" questions={quadPractice2} />
        <AnswerSection title="综合测试（高考真题 + 精华题）" questions={quadraticQuizQuestions} />
      </section>
    </>
  );
}
