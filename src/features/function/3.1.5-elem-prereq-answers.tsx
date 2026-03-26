import type { ReactNode } from 'react';
import { Math as MathTex, PageBreak } from '@/components/shared';
import { elemPrereqPractice1, elemPrereqPractice2, elemPrereqPractice3 } from './data/3.1.5/3.1.5-elem-prereq-practice';
import { elemPrereqQuizQuestions } from './data/3.1.5/3.1.5-elem-prereq-quiz';
import type { QuizQuestionData } from '@/types';

export const elementaryFuncPrereqExplanations: Record<string, ReactNode> = {
  'epp1-1': (
    <>
      <p className="mt-2">积的幂 = 幂的积</p>
      <p className="text-center mt-1"><MathTex tex="(3a)^2 = 3^2 \cdot a^2 = 9a^2" /></p>
      <p className="mt-2">结论：选 <MathTex tex="9a^2" />。</p>
    </>
  ),
  'epp1-2': (
    <>
      <p className="mt-2">商的幂 = 幂的商</p>
      <p className="text-center mt-1"><MathTex tex="\left(\dfrac{2}{5}\right)^3 = \dfrac{2^3}{5^3} = \dfrac{8}{125}" /></p>
    </>
  ),
  'epp1-3': (
    <>
      <p className="mt-2">同底相乘，指数相加</p>
      <p className="text-center mt-1"><MathTex tex="2^5 \times 2^{-3} = 2^{5+(-3)} = 2^2 = 4" /></p>
    </>
  ),
  'epp1-4': (
    <>
      <p className="mt-2">先幂的幂，再同底相除</p>
      <p className="text-center mt-1"><MathTex tex="(a^2)^3 = a^{2 \times 3} = a^6" /></p>
      <p className="text-center mt-1"><MathTex tex="\dfrac{a^6}{a^4} = a^{6-4} = a^2" /></p>
    </>
  ),
  'epp1-5': (
    <>
      <p className="mt-2"><MathTex tex="(-1)^0 = 1" />，<MathTex tex="3^{-1} = \dfrac{1}{3}" /></p>
      <p className="text-center mt-1"><MathTex tex="1 + \dfrac{1}{3} = \dfrac{4}{3}" /></p>
    </>
  ),
  'epp2-1': (
    <>
      <p className="mt-2">公式：<MathTex tex="\sqrt[n]{a^m} = a^{\frac{m}{n}}" /></p>
      <p className="text-center mt-1"><MathTex tex="\sqrt[3]{a^2} = a^{\frac{2}{3}}" /></p>
    </>
  ),
  'epp2-2': (
    <>
      <p className="mt-2">先开三次方，再平方</p>
      <p className="text-center mt-1"><MathTex tex="27^{\frac{2}{3}} = (27^{\frac{1}{3}})^2 = 3^2 = 9" /></p>
    </>
  ),
  'epp2-3': (
    <>
      <p className="mt-2">先转成分数指数</p>
      <p className="text-center mt-1"><MathTex tex="\sqrt{a} = a^{\frac{1}{2}},\quad \sqrt[3]{a} = a^{\frac{1}{3}}" /></p>
      <p className="text-center mt-1"><MathTex tex="a^{\frac{1}{2}} \cdot a^{\frac{1}{3}} = a^{\frac{5}{6}}" /></p>
    </>
  ),
  'epp2-4': (
    <>
      <p className="mt-2"><MathTex tex="\sqrt[4]{16} = 2" /></p>
      <p className="text-center mt-1"><MathTex tex="\dfrac{1}{\sqrt[4]{16}} = \dfrac{1}{2}" /></p>
    </>
  ),
  'epp2-5': (
    <>
      <p className="mt-2">同底相除，指数相减</p>
      <p className="text-center mt-1"><MathTex tex="\dfrac{a^{\frac{3}{2}}}{a^{\frac{1}{2}}} = a^{\frac{3}{2}-\frac{1}{2}} = a" /></p>
    </>
  ),
  'epp3-1': (
    <>
      <p className="mt-2">指数式与对数式互化</p>
      <p className="text-center mt-1"><MathTex tex="a^x = N \Leftrightarrow \log_a N = x" /></p>
      <p className="text-center mt-1"><MathTex tex="2^5 = 32 \Rightarrow \log_2 32 = 5" /></p>
    </>
  ),
  'epp3-2': (
    <>
      <p className="mt-2"><MathTex tex="\lg 0.01 = \log_{10} 10^{-2}" /></p>
      <p className="text-center mt-1"><MathTex tex="= -2" /></p>
    </>
  ),
  'epp3-3': (
    <>
      <p className="mt-2">恒等式：<MathTex tex="a^{\log_a N} = N" /></p>
      <p className="text-center mt-1"><MathTex tex="3^{\log_3 7} = 7" /></p>
    </>
  ),
  'epp3-4': (
    <>
      <p className="mt-2">A 真数小于 0，无意义</p>
      <p className="mt-2">B 底数等于 1，不允许</p>
      <p className="mt-2">C <MathTex tex="\ln e^3" /> 合法，且等于 <MathTex tex="3" /></p>
      <p className="mt-2">D 真数等于 0，无意义</p>
      <p className="mt-2">结论：选 <MathTex tex="C" />。</p>
    </>
  ),
  'epp3-5': (
    <>
      <p className="mt-2">设 <MathTex tex="\log_9 3 = x" />，则 <MathTex tex="9^x = 3" /></p>
      <p className="text-center mt-1"><MathTex tex="(3^2)^x = 3^1 \Rightarrow 2x = 1 \Rightarrow x = \dfrac{1}{2}" /></p>
    </>
  ),
  'epq-1': (
    <>
      <p className="mt-2"><MathTex tex="(2a^2)^3 = 2^3 \cdot (a^2)^3 = 8a^6" /></p>
      <p className="text-center mt-1"><MathTex tex="\dfrac{8a^6}{4a^3} = 2a^{6-3} = 2a^3" /></p>
    </>
  ),
  'epq-2': (
    <>
      <p className="mt-2"><MathTex tex="\left(\dfrac{2}{3}\right)^{-1} = \dfrac{3}{2}" />，<MathTex tex="6^0 = 1" /></p>
      <p className="text-center mt-1"><MathTex tex="\dfrac{3}{2} \times 1 = \dfrac{3}{2}" /></p>
    </>
  ),
  'epq-3': (
    <>
      <p className="mt-2">提公因式 <MathTex tex="3^n" /></p>
      <p className="text-center mt-1"><MathTex tex="\dfrac{3^{n+2} - 3^n}{3^n} = \dfrac{3^n(3^2-1)}{3^n} = 9-1 = 8" /></p>
    </>
  ),
  'epq-4': (
    <>
      <p className="mt-2"><MathTex tex="\sqrt{a^3} = a^{\frac{3}{2}}" /></p>
      <p className="text-center mt-1"><MathTex tex="a^{\frac{3}{2}} \cdot a^{-\frac{1}{2}} = a^{1} = a" /></p>
    </>
  ),
  'epq-5': (
    <>
      <p className="mt-2">先开四次方，再立方</p>
      <p className="text-center mt-1"><MathTex tex="16^{\frac{3}{4}} = (16^{\frac{1}{4}})^3 = 2^3 = 8" /></p>
    </>
  ),
  'epq-6': (
    <>
      <p className="mt-2"><MathTex tex="\sqrt[6]{a^3} = a^{\frac{1}{2}},\quad \sqrt[3]{a} = a^{\frac{1}{3}}" /></p>
      <p className="text-center mt-1"><MathTex tex="\dfrac{a^{\frac{1}{2}}}{a^{\frac{1}{3}}} = a^{\frac{1}{6}} = \sqrt[6]{a}" /></p>
    </>
  ),
  'epq-7': (
    <>
      <p className="mt-2"><MathTex tex="\log_4 2 = \dfrac{1}{2},\quad \log_4 8 = \dfrac{3}{2}" /></p>
      <p className="text-center mt-1"><MathTex tex="\dfrac{1}{2} + \dfrac{3}{2} = 2" /></p>
    </>
  ),
  'epq-8': (
    <>
      <p className="mt-2"><MathTex tex="10^{1+\lg 2} = 10^1 \cdot 10^{\lg 2}" /></p>
      <p className="text-center mt-1"><MathTex tex="= 10 \times 2 = 20" /></p>
    </>
  ),
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
              {elementaryFuncPrereqExplanations[q.id] && <div className="mt-1">{elementaryFuncPrereqExplanations[q.id]}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ElementaryFuncPrereqAnswers() {
  return (
    <section className="print-answers">
      <PageBreak label="答案与解析" />
      <h2 className="text-xl font-bold text-gray-900 mb-4">📝 3.1.5 基本初等函数前置知识 — 答案与解析</h2>
      <AnswerSection title="第一节：指数运算" questions={elemPrereqPractice1} />
      <AnswerSection title="第二节：根式与分数指数幂" questions={elemPrereqPractice2} />
      <AnswerSection title="第三节：对数基础" questions={elemPrereqPractice3} />
      <AnswerSection title="自测题答案" questions={elemPrereqQuizQuestions} />
    </section>
  );
}
