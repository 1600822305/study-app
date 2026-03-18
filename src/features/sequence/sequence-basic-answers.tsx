import type { ReactNode } from 'react';
import { Math as MathTex, PageBreak } from '@/components/shared';
import { sequenceBasicPractice, sequenceBasicQuiz } from './data/basic-questions';
import type { QuizQuestionData } from '@/types';

export const sequenceBasicExplanations: Record<string, ReactNode> = {
  'sb-p1': <><p className="text-center mt-1"><MathTex tex="d=a_2-a_1=5-2=3" /></p></>,
  'sb-p2': <><p className="text-center mt-1"><MathTex tex="a_{10}=a_1+(10-1)d=3+9\times4=39" /></p></>,
  'sb-p3': <><p className="text-center mt-1"><MathTex tex="S_5=\dfrac{5(1+9)}2=25" /></p></>,
  'sb-p4': <><p className="text-center mt-1"><MathTex tex="q=\dfrac{a_2}{a_1}=\dfrac62=3" /></p></>,
  'sb-p5': <><p className="text-center mt-1"><MathTex tex="a_5=a_1q^{5-1}=2\times3^4=162" /></p></>,
  'sb-q1': <><p className="text-center mt-1"><MathTex tex="a_5=a_1+4d\Rightarrow 14=2+4d\Rightarrow d=3" /></p></>,
  'sb-q2': <><p className="text-center mt-1"><MathTex tex="S_{10}=10\times1+\dfrac{10\times9}{2}\times2=100" /></p></>,
  'sb-q3': <><p className="mt-2">等差数列性质：</p><p className="text-center mt-1"><MathTex tex="a_3+a_7=2a_5\Rightarrow 20=2a_5\Rightarrow a_5=10" /></p></>,
  'sb-q4': <><p className="text-center mt-1"><MathTex tex="a_4=a_1q^3=1\times(-2)^3=-8" /></p></>,
  'sb-q5': <><p className="text-center mt-1"><MathTex tex="S_4=\dfrac{1(1-2^4)}{1-2}=15" /></p></>,
  'sb-q6': <><p className="text-center mt-1"><MathTex tex="a_4=a_2q^2\Rightarrow 54=6q^2\Rightarrow q^2=9\Rightarrow q=\pm3" /></p></>,
  'sb-q7': <><p className="text-center mt-1"><MathTex tex="a_n=20+(n-1)(-3)=23-3n" /></p><p className="text-center mt-1"><MathTex tex="23-3n<0\Rightarrow n>\frac{23}{3}" /></p><p className="mt-2">所以从第 8 项开始为负数。</p></>,
  'sb-q8': <><p className="mt-2">只有常数列 <MathTex tex="1,1,1,1,\ldots" /> 同时满足：</p><p className="text-center mt-1"><MathTex tex="d=0,\ q=1" /></p></>,
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
              {sequenceBasicExplanations[q.id] && <div className="mt-1">{sequenceBasicExplanations[q.id]}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SequenceBasicAnswers() {
  return (
    <section className="print-answers">
      <PageBreak label="答案与解析" />
      <h2 className="text-xl font-bold text-gray-900 mb-4">📝 6.1 等差数列与等比数列 — 答案与解析</h2>
      <AnswerSection title="练一练" questions={sequenceBasicPractice} />
      <AnswerSection title="自测题答案" questions={sequenceBasicQuiz} />
    </section>
  );
}
