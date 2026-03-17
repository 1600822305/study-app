import type { ReactNode } from 'react';
import { Math as MathTex, PageBreak } from '@/components/shared';
import { ineqPrereqPractice1, ineqPrereqPractice2 } from './data/prereq-practice';
import { inequalityPrereqQuizQuestions } from './data/prereq-quiz';
import type { QuizQuestionData } from '@/types';

export const inequalityPrereqExplanations: Record<string, ReactNode> = {
  'ip1-1': (
    <>
      <p className="mt-2">负 × 负 = 正</p>
      <p className="text-center mt-1"><MathTex tex="(-3)\times(-5)=15" /></p>
    </>
  ),
  'ip1-2': (
    <>
      <p className="mt-2">负 ÷ 正 = 负</p>
      <p className="text-center mt-1"><MathTex tex="(-8)\div 2=-4" /></p>
    </>
  ),
  'ip1-3': (
    <>
      <p className="mt-2">先算前两个：<MathTex tex="(-2)\times 3=-6" /></p>
      <p className="mt-2">再算：<MathTex tex="(-6)\times(-1)=6" /></p>
      <p className="mt-2">2 个负号，偶数个，结果为正</p>
    </>
  ),
  'ip1-4': (
    <>
      <p className="mt-2">有括号，表示整个 <MathTex tex="-3" /> 平方</p>
      <p className="text-center mt-1"><MathTex tex="(-3)^2=(-3)\times(-3)=9" /></p>
      <p className="mt-2">注意：<MathTex tex="-3^2=-9" />，和这题不同</p>
    </>
  ),
  'ip2-1': (
    <>
      <p className="mt-2">移项：<MathTex tex="2x=7-3=4" /></p>
      <p className="text-center mt-1"><MathTex tex="x=2" /></p>
    </>
  ),
  'ip2-2': (
    <>
      <p className="mt-2">含 <MathTex tex="x" /> 的移左边，常数移右边</p>
      <p className="text-center mt-1"><MathTex tex="3x-x=1+5\Rightarrow 2x=6\Rightarrow x=3" /></p>
    </>
  ),
  'ip2-3': (
    <>
      <p className="mt-2">先移项：<MathTex tex="-2x=-4" /></p>
      <p className="text-center mt-1"><MathTex tex="x=\dfrac{-4}{-2}=2" /></p>
      <p className="mt-2">这是方程，除以负数等号不变</p>
    </>
  ),
  'ipq1': (
    <>
      <p className="mt-2">先算幂：<MathTex tex="(-2)^3=-8" /></p>
      <p className="mt-2">再算乘除：<MathTex tex="(-8)\times(-3)=24" />，<MathTex tex="24\div(-6)=-4" /></p>
      <p className="mt-2">结论：答案是 <MathTex tex="-4" /></p>
    </>
  ),
  'ipq2': (
    <>
      <p className="mt-2">去括号：<MathTex tex="-6x-3=x-10" /></p>
      <p className="mt-2">移项：<MathTex tex="-6x-x=-10+3" /></p>
      <p className="text-center mt-1"><MathTex tex="-7x=-7\Rightarrow x=1" /></p>
    </>
  ),
  'ipq3': (
    <>
      <p className="text-center mt-1"><MathTex tex="(-4)^2=16,\quad -4^2=-16" /></p>
      <p className="mt-2"><MathTex tex="16>-16" />，所以 <MathTex tex="(-4)^2" /> 更大，在数轴右边</p>
    </>
  ),
  'ipq4': (
    <>
      <p className="mt-2">先按方程解：<MathTex tex="2x-5=-3x+10\Rightarrow 5x=15\Rightarrow x=3" /></p>
      <p className="mt-2">如果改成 <MathTex tex=">" />，就是 <MathTex tex="x>3" /></p>
      <p className="mt-2">没等号，用空心圆；大于，箭头向右</p>
    </>
  ),
  'ipq5': (
    <>
      <p className="mt-2">4 个负号，偶数个，结果为正</p>
      <p className="text-center mt-1"><MathTex tex="(-1)(-2)(-3)(-4)=24" /></p>
      <p className="mt-2"><MathTex tex="24>-24" />，所以前者更大</p>
    </>
  ),
};

function AnswerLabel({ q }: { q: QuizQuestionData }) {
  if (q.type === 'blank') {
    return <>答案：<MathTex tex={q.acceptableAnswers?.[0] ?? q.correctAnswer} /></>;
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
              {inequalityPrereqExplanations[q.id] && <div className="mt-1">{inequalityPrereqExplanations[q.id]}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function InequalityPrereqAnswers() {
  return (
    <section className="mb-8 print-answers">
      <PageBreak label="答案与解析" />
      <h2 className="text-xl font-bold text-gray-900 mb-4">📝 2.0 不等式前置知识 — 答案与解析</h2>
      <AnswerSection title="一、正负数运算 — 即时练习" questions={ineqPrereqPractice1} />
      <AnswerSection title="二、解一元一次方程 — 即时练习" questions={ineqPrereqPractice2} />
      <AnswerSection title="选择题自测" questions={inequalityPrereqQuizQuestions} />
    </section>
  );
}
