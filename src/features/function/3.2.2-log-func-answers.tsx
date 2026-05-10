import type { ReactNode } from 'react';
import { Math as MathTex, PageBreak } from '@/components/shared';
import { elemFuncPractice3 } from './data/3.2/3.2-elem-func-practice';
import type { QuizQuestionData } from '@/types';

export const logFuncExplanations: Record<string, ReactNode> = {
  'efp3-1': <><p className="mt-2">所有对数函数都过 <MathTex tex="(1,0)" /></p><p className="text-center mt-1"><MathTex tex="\log_3 1 = 0" /></p></>,
  'efp3-2': <><p className="mt-2">底数 <MathTex tex="0.5" /> 满足 <MathTex tex="0<a<1" /></p><p className="mt-2">所以是减函数。</p></>,
  'efp3-3': <><p className="mt-2">借助 1 比较</p><p className="text-center mt-1"><MathTex tex="\log_2 3 > \log_2 2 = 1" /></p><p className="text-center mt-1"><MathTex tex="\log_3 2 < \log_3 3 = 1" /></p></>,
  'efp3-4': <><p className="mt-2">真数必须大于 0</p><p className="text-center mt-1"><MathTex tex="3-x>0 \Rightarrow x<3" /></p><p className="mt-2">定义域是 <MathTex tex="(-\infty,3)" />。</p></>,
  'efp3-5': <><p className="mt-2">所有对数函数值域都是 <MathTex tex="\mathbb{R}" /></p><p className="mt-2"><MathTex tex="x>1" /> 时为正，<MathTex tex="0<x<1" /> 时为负。</p></>,
  'efp3-6': <><p className="mt-2">对数加法法则</p><p className="text-center mt-1"><MathTex tex="\lg 2 + \lg 5 = \lg 10 = 1" /></p></>,
  'efp3-7': <><p className="mt-2">指数与对数互逆</p><p className="text-center mt-1"><MathTex tex="2^{\log_2 5} = 5" /></p></>,
};

function AnswerLabel({ q }: { q: QuizQuestionData }) {
  const opt = q.options?.find((o) => o.value === q.correctAnswer);
  if (!opt) return <>答案：{q.correctAnswer}</>;
  return <>{opt.label}（{opt.isLatex ? <MathTex tex={opt.value} /> : opt.value}）</>;
}

export function LogFuncAnswers() {
  return (
    <section className="print-answers">
      <PageBreak label="答案与解析" />
      <h2 className="text-xl font-bold text-gray-900 mb-4">3.2.2 对数函数 — 答案与解析</h2>
      <div className="columns-2 gap-4 text-gray-700" style={{ columnRule: '1px solid #e5e7eb' }}>
        {elemFuncPractice3.map((q, i) => (
          <div key={q.id} className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">{i + 1}.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900"><AnswerLabel q={q} /></p>
              {logFuncExplanations[q.id] && <div className="mt-1">{logFuncExplanations[q.id]}</div>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
