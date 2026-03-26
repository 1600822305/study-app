import type { ReactNode } from 'react';
import { Math as MathTex, PageBreak } from '@/components/shared';
import { derivBasicPractice1, derivBasicPractice2, derivBasicPractice3, derivBasicPractice4, derivBasicPractice5 } from './data/3.4/3.4-deriv-basic-practice';
import { derivBasicQuizQuestions } from './data/3.4/3.4-deriv-basic-quiz';
import type { QuizQuestionData } from '@/types';

export const derivativeBasicExplanations: Record<string, ReactNode> = {
  'dbp1-1': <><p className="mt-2">常数不变化，所以导数恒为 0。</p><p className="text-center mt-1"><MathTex tex="(C)'=0" /></p></>,
  'dbp1-2': <><p className="text-center mt-1"><MathTex tex="(x^n)'=nx^{n-1}\Rightarrow (x^3)'=3x^2" /></p></>,
  'dbp1-3': <><p className="text-center mt-1"><MathTex tex="\sqrt{x}=x^{1/2}\Rightarrow (x^{1/2})'=\dfrac{1}{2\sqrt{x}}" /></p></>,
  'dbp1-4': <><p className="text-center mt-1"><MathTex tex="(e^x)'=e^x" /></p></>,
  'dbp1-5': <><p className="text-center mt-1"><MathTex tex="(\ln x)'=\dfrac1x" /></p></>,
  'dbp1-6': <><p className="text-center mt-1"><MathTex tex="(\sin x)'=\cos x" /></p></>,
  'dbp1-7': <><p className="text-center mt-1"><MathTex tex="(\cos x)'=-\sin x" /></p></>,
  'dbp1-8': <><p className="mt-2">只有 A 正确。</p><p className="mt-2">其余分别错在：<MathTex tex="(e^x)'" />、<MathTex tex="(\cos x)'" /> 的负号、<MathTex tex="(\ln x)'" /> 公式。</p></>,
  'dbp2-1': <><p className="text-center mt-1"><MathTex tex="(3x^2+2x-1)'=6x+2" /></p></>,
  'dbp2-2': <><p className="text-center mt-1"><MathTex tex="(xe^x)'=1\cdot e^x+x\cdot e^x=(1+x)e^x" /></p></>,
  'dbp2-3': <><p className="text-center mt-1"><MathTex tex="\left(\dfrac{x}{x+1}\right)'=\dfrac{(x+1)-x}{(x+1)^2}=\dfrac1{(x+1)^2}" /></p></>,
  'dbp2-4': <><p className="text-center mt-1"><MathTex tex="[(2x+1)^3]'=3(2x+1)^2\cdot 2=6(2x+1)^2" /></p></>,
  'dbp2-5': <><p className="text-center mt-1"><MathTex tex="\left(\dfrac{e^x}{x}\right)'=\dfrac{xe^x-e^x}{x^2}=\dfrac{(x-1)e^x}{x^2}" /></p></>,
  'dbp2-6': <><p className="text-center mt-1"><MathTex tex="(xe^{2x})'=e^{2x}+2xe^{2x}=(1+2x)e^{2x}" /></p></>,
  'dbp3-1': <><p className="text-center mt-1"><MathTex tex="f'(x)=3(x+1)(x-1)" /></p><p className="mt-2"><MathTex tex="f'(x)>0" /> 时函数递增，所以递增区间是 <MathTex tex="(-\infty,-1)\cup(1,+\infty)" />。</p></>,
  'dbp3-2': <><p className="text-center mt-1"><MathTex tex="f'(x)=-2x+4<0\Rightarrow x>2" /></p></>,
  'dbp3-3': <><p className="text-center mt-1"><MathTex tex="f'(0)=3\cdot0^2-12=-12<0" /></p><p className="mt-2">所以在 <MathTex tex="x=0" /> 处递减。</p></>,
  'dbp3-4': <><p className="mt-2">核心定理：</p><p className="text-center mt-1"><MathTex tex="f'(x)>0\Rightarrow f(x)\text{单调递增}" /></p></>,
  'dbp3-5': <><p className="text-center mt-1"><MathTex tex="f'(x)=(1+x)e^x" /></p><p className="mt-2"><MathTex tex="e^x>0" />，所以符号只看 <MathTex tex="1+x" />，递减区间是 <MathTex tex="(-\infty,-1)" />。</p></>,
  'dbp3-6': <><p className="text-center mt-1"><MathTex tex="f'(x)=(x-1)e^x" /></p><p className="mt-2">递增区间是 <MathTex tex="(1,+\infty)" />。</p></>,
  'dbp3-7': <><p className="mt-2">最稳妥的方法是在每段区间取点代入 <MathTex tex="f'(x)" /> 判正负。</p></>,
  'dbp4-1': <><p className="text-center mt-1"><MathTex tex="f'(-1)=0,\ \text{且从正变负}" /></p><p className="text-center mt-1"><MathTex tex="f(-1)=2" /></p></>,
  'dbp4-2': <><p className="text-center mt-1"><MathTex tex="x=1\text{处从负变正}\Rightarrow \text{极小值 }f(1)=-2" /></p></>,
  'dbp4-3': <><p className="mt-2">闭区间最值要比较端点和极值点：</p><p className="text-center mt-1"><MathTex tex="f(-2)=-2,\ f(-1)=2,\ f(1)=-2,\ f(2)=2" /></p><p className="mt-2">最大值是 2。</p></>,
  'dbp4-4': <><p className="mt-2"><MathTex tex="f'(x_0)=0" /> 只是驻点，不一定是极值点。</p><p className="mt-2">还要看导数是否变号。</p></>,
  'dbp4-5': <><p className="text-center mt-1"><MathTex tex="f(0)=1,\ f(2)=5,\ f(3)=4" /></p><p className="mt-2">最小值是 1。</p></>,
  'dbp4-6': <><p className="text-center mt-1"><MathTex tex="f'(x)=xe^x,\ x=0\text{为极小值点}" /></p><p className="text-center mt-1"><MathTex tex="f(0)=-1" /></p></>,
  'dbp4-7': <><p className="mt-2">闭区间最值确实可能在端点取得。</p></>,
  'dbp5-1': <><p className="text-center mt-1"><MathTex tex="y'=2x,\ y'(1)=2" /></p></>,
  'dbp5-2': <><p className="text-center mt-1"><MathTex tex="y-1=2(x-1)\Rightarrow y=2x-1" /></p></>,
  'dbp5-3': <><p className="text-center mt-1"><MathTex tex="y'=3x^2,\ y'(1)=3" /></p><p className="text-center mt-1"><MathTex tex="y-1=3(x-1)\Rightarrow y=3x-2" /></p></>,
  'dbp5-4': <><p className="text-center mt-1"><MathTex tex="y'(0)=1,\ \text{切点}(0,1)" /></p><p className="text-center mt-1"><MathTex tex="y=x+1" /></p></>,
  'dbp5-5': <><p className="text-center mt-1"><MathTex tex="y'(1)=1,\ \text{切点}(1,0)" /></p><p className="text-center mt-1"><MathTex tex="y=x-1" /></p></>,
  'dbp5-6': <><p className="mt-2">“在 A 处”表示 A 就是切点；“过 A”只表示切线经过 A，A 不一定是切点。</p></>,
  'dbp5-7': <><p className="text-center mt-1"><MathTex tex="\text{设切点}(t,t^2),\ \text{切线}y=2tx-t^2" /></p><p className="text-center mt-1"><MathTex tex="(0,-1)\text{在切线上}\Rightarrow -1=-t^2\Rightarrow t=\pm1" /></p><p className="mt-2">所以有 2 条。</p></>,
  'dbq-1': <><p className="text-center mt-1"><MathTex tex="y'=3x^2+1,\ y'(0)=1" /></p><p className="text-center mt-1"><MathTex tex="y-1=x\Rightarrow y=x+1" /></p></>,
  'dbq-2': <><p className="text-center mt-1"><MathTex tex="f'(x)=3(x+1)(x-1)<0\Rightarrow -1<x<1" /></p></>,
  'dbq-3': <><p className="text-center mt-1"><MathTex tex="f'(x)=xe^x,\ x=0\text{为极小值点},\ f(0)=-1" /></p></>,
  'dbq-4': <><p className="text-center mt-1"><MathTex tex="f'(x)=\dfrac{x-1}{x}" /></p><p className="mt-2">在 <MathTex tex="x=1" /> 处取最小值，最小值为 1。</p></>,
  'dbq-5': <><p className="mt-2">比较 <MathTex tex="x=-2,-1,2,3" /> 四点函数值，最大值为 12。</p></>,
  'dbq-6': <><p className="text-center mt-1"><MathTex tex="y'(1)=e" /></p><p className="text-center mt-1"><MathTex tex="y-e=e(x-1)\Rightarrow y=ex" /></p></>,
  'dbq-7': <><p className="mt-2">四个判断都对，所以答案是 4 个。</p></>,
  'dbq-8': <><p className="text-center mt-1"><MathTex tex="y'=e^x+1,\ \text{切线斜率}=2\Rightarrow x_0=0" /></p><p className="text-center mt-1"><MathTex tex="1+a=5\Rightarrow a=4" /></p></>,
};

function AnswerLabel({ q }: { q: QuizQuestionData }) {
  const opt = q.options?.find((o) => o.value === q.correctAnswer);
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
              {derivativeBasicExplanations[q.id] && <div className="mt-1">{derivativeBasicExplanations[q.id]}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DerivativeBasicAnswers() {
  return (
    <section className="print-answers">
      <PageBreak label="答案与解析" />
      <h2 className="text-xl font-bold text-gray-900 mb-4">📝 3.4 导数基础 — 答案与解析</h2>
      <AnswerSection title="第一节：基本导数公式" questions={derivBasicPractice1} />
      <AnswerSection title="第二节：求导法则" questions={derivBasicPractice2} />
      <AnswerSection title="第三节：导数与单调性" questions={derivBasicPractice3} />
      <AnswerSection title="第四节：极值与最值" questions={derivBasicPractice4} />
      <AnswerSection title="第五节：切线方程" questions={derivBasicPractice5} />
      <AnswerSection title="高考真题答案" questions={derivBasicQuizQuestions} />
    </section>
  );
}
