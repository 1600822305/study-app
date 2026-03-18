import type { ReactNode } from 'react';
import { Math as MathTex, PageBreak } from '@/components/shared';
import { sequencePrereqPractice, sequencePrereqQuiz } from './data/prereq-questions';
import type { QuizQuestionData } from '@/types';

export const sequencePrereqExplanations: Record<string, ReactNode> = {
  'seq-p1': <><p className="mt-2">按顺序数项即可，第 4 项是 12。</p><p className="text-center mt-1"><MathTex tex="a_1=3,\ a_2=6,\ a_3=9,\ a_4=12" /></p></>,
  'seq-p2': <><p className="mt-2">每一项都等于项数的 2 倍。</p><p className="text-center mt-1"><MathTex tex="a_n=2n" /></p></>,
  'seq-p3': <><p className="text-center mt-1"><MathTex tex="a_5=3\times 5-1=14" /></p></>,
  'seq-p4': <><p className="text-center mt-1"><MathTex tex="S_4=1+3+5+7=16" /></p></>,
  'seq-p5': <><p className="mt-2">前 3 项和减前 2 项和，剩下的就是第 3 项。</p><p className="text-center mt-1"><MathTex tex="a_3=S_3-S_2=10-6=4" /></p></>,
  'seq-q1': <><p className="mt-2">这是平方数列。</p><p className="text-center mt-1"><MathTex tex="1^2,2^2,3^2,4^2,5^2\Rightarrow a_n=n^2" /></p></>,
  'seq-q2': <><p className="text-center mt-1"><MathTex tex="a_1=2,\ a_2=4,\ a_3=8" /></p><p className="text-center mt-1"><MathTex tex="a_1+a_2+a_3=2+4+8=14" /></p></>,
  'seq-q3': <><p className="mt-2">按递推关系逐项往后推。</p><p className="text-center mt-1"><MathTex tex="a_2=3+5=8,\ a_3=8+5=13" /></p></>,
  'seq-q4': <><p className="text-center mt-1"><MathTex tex="a_3=S_3-S_2=(3^2+3)-(2^2+2)=12-6=6" /></p></>,
  'seq-q5': <><p className="mt-2">每一项分别是 <MathTex tex="1,\frac12,\frac13,\frac14" />，对应通项为 <MathTex tex="\frac1n" />。</p></>,
  'seq-q6': <><p className="text-center mt-1"><MathTex tex="\sum_{i=1}^{4}i^2=1^2+2^2+3^2+4^2=30" /></p></>,
  'seq-q7': <><p className="mt-2">每次都乘 2。</p><p className="text-center mt-1"><MathTex tex="1,2,4,8\Rightarrow a_4=8" /></p></>,
  'seq-q8': <><p className="mt-2">由前 n 项和求通项：</p><p className="text-center mt-1"><MathTex tex="a_n=S_n-S_{n-1}=3n-3(n-1)=3" /></p><p className="mt-2">所以是常数列。</p></>,
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
              {sequencePrereqExplanations[q.id] && <div className="mt-1">{sequencePrereqExplanations[q.id]}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SequencePrereqAnswers() {
  return (
    <section className="print-answers">
      <PageBreak label="答案与解析" />
      <h2 className="text-xl font-bold text-gray-900 mb-4">📝 6.0 数列前置知识 — 答案与解析</h2>
      <AnswerSection title="练一练" questions={sequencePrereqPractice} />
      <AnswerSection title="自测题答案" questions={sequencePrereqQuiz} />
    </section>
  );
}
