import type { ReactNode } from 'react';
import { Math as MathTex, PageBreak } from '@/components/shared';
import { elemFuncPractice1, elemFuncPractice2, elemFuncPractice3, elemFuncPractice4 } from './data/elem-func-practice';
import { elemFuncQuizQuestions } from './data/elem-func-quiz';
import type { QuizQuestionData } from '@/types';

export const elementaryFuncExplanations: Record<string, ReactNode> = {
  'efp1-1': <><p className="mt-2">积的对数 = 对数的和</p><p className="text-center mt-1"><MathTex tex="\lg 2 + \lg 5 = \lg(2 \times 5) = \lg 10 = 1" /></p></>,
  'efp1-2': <><p className="mt-2">商的对数 = 对数的差</p><p className="text-center mt-1"><MathTex tex="\log_2 24 - \log_2 3 = \log_2 \dfrac{24}{3} = \log_2 8 = 3" /></p></>,
  'efp1-3': <><p className="mt-2">幂的对数 = 指数乘对数</p><p className="text-center mt-1"><MathTex tex="\lg 2^5 = 5\lg 2" /></p></>,
  'efp1-4': <><p className="mt-2">换底公式</p><p className="text-center mt-1"><MathTex tex="\log_4 8 = \dfrac{\lg 8}{\lg 4} = \dfrac{3\lg 2}{2\lg 2} = \dfrac{3}{2}" /></p></>,
  'efp2-1': <><p className="mt-2">所有指数函数都过 <MathTex tex="(0,1)" /></p><p className="text-center mt-1"><MathTex tex="5^0 = 1" /></p></>,
  'efp2-2': <><p className="mt-2">底数 <MathTex tex="0.3" /> 满足 <MathTex tex="0<a<1" /></p><p className="mt-2">所以是减函数。</p></>,
  'efp2-3': <><p className="mt-2">底数 <MathTex tex="3>1" />，函数递增</p><p className="text-center mt-1"><MathTex tex="0.2<0.7 \Rightarrow 3^{0.2} < 3^{0.7}" /></p></>,
  'efp2-4': <><p className="mt-2">指数函数值域恒为 <MathTex tex="(0,+\infty)" /></p><p className="mt-2"><MathTex tex="a^x>0" />，永远不等于 0。</p></>,
  'efp2-5': <><p className="mt-2"><MathTex tex="2^{0.5}>1" />，而 <MathTex tex="0.5^2<1" /></p><p className="text-center mt-1"><MathTex tex="2^{0.5} > 0.5^2" /></p></>,
  'efp2-6': <><p className="mt-2">先算指数部分</p><p className="text-center mt-1"><MathTex tex="\lg 2 + \lg 5 = \lg 10 = 1" /></p><p className="text-center mt-1"><MathTex tex="2^1 = 2" /></p></>,
  'efp2-7': <><p className="mt-2"><MathTex tex="3^x=9=3^2 \Rightarrow x=2" /></p><p className="text-center mt-1"><MathTex tex="\log_3 9 = 2" /></p></>,
  'efp3-1': <><p className="mt-2">所有对数函数都过 <MathTex tex="(1,0)" /></p><p className="text-center mt-1"><MathTex tex="\log_3 1 = 0" /></p></>,
  'efp3-2': <><p className="mt-2">底数 <MathTex tex="0.5" /> 满足 <MathTex tex="0<a<1" /></p><p className="mt-2">所以是减函数。</p></>,
  'efp3-3': <><p className="mt-2">借助 1 比较</p><p className="text-center mt-1"><MathTex tex="\log_2 3 > \log_2 2 = 1" /></p><p className="text-center mt-1"><MathTex tex="\log_3 2 < \log_3 3 = 1" /></p></>,
  'efp3-4': <><p className="mt-2">真数必须大于 0</p><p className="text-center mt-1"><MathTex tex="3-x>0 \Rightarrow x<3" /></p><p className="mt-2">定义域是 <MathTex tex="(-\infty,3)" />。</p></>,
  'efp3-5': <><p className="mt-2">所有对数函数值域都是 <MathTex tex="\mathbb{R}" /></p><p className="mt-2"><MathTex tex="x>1" /> 时为正，<MathTex tex="0<x<1" /> 时为负。</p></>,
  'efp3-6': <><p className="mt-2">对数加法法则</p><p className="text-center mt-1"><MathTex tex="\lg 2 + \lg 5 = \lg 10 = 1" /></p></>,
  'efp3-7': <><p className="mt-2">指数与对数互逆</p><p className="text-center mt-1"><MathTex tex="2^{\log_2 5} = 5" /></p></>,
  'efp4-1': <><p className="mt-2">幂函数标准形式是 <MathTex tex="y=x^{\alpha}" /></p><p className="mt-2">只有 <MathTex tex="y=x^2" /> 符合。</p></>,
  'efp4-2': <><p className="mt-2"><MathTex tex="1^{\alpha}=1" /></p><p className="mt-2">所以所有幂函数都过 <MathTex tex="(1,1)" />。</p></>,
  'efp4-3': <><p className="mt-2"><MathTex tex="\alpha=-1<0" /></p><p className="mt-2">所以 <MathTex tex="y=x^{-1}" /> 在 <MathTex tex="(0,+\infty)" /> 上递减。</p></>,
  'efp4-4': <><p className="mt-2">根号下要求非负</p><p className="text-center mt-1"><MathTex tex="x\ge 0" /></p><p className="mt-2">定义域是 <MathTex tex="[0,+\infty)" />。</p></>,
  'efp4-5': <><p className="mt-2">对数加法法则</p><p className="text-center mt-1"><MathTex tex="\lg 2 + \lg 50 = \lg 100 = 2" /></p></>,
  'efp4-6': <><p className="mt-2">只有对数函数定义域是 <MathTex tex="(0,+\infty)" /></p><p className="mt-2">结论：选 <MathTex tex="y=\log_2 x" />。</p></>,
  'efp4-7': <><p className="mt-2">前三个都增，只有 <MathTex tex="y=x^{-1}" /> 递减</p><p className="mt-2">因为 <MathTex tex="\alpha=-1<0" />。</p></>,
  'efq-1': <><p className="mt-2"><MathTex tex="\lg 25 + \lg 4 = \lg(25\times 4) = \lg 100 = 2" /></p></>,
  'efq-2': <><p className="mt-2">换底</p><p className="text-center mt-1"><MathTex tex="\log_4 8 = \dfrac{\lg 8}{\lg 4} = \dfrac{3}{2}" /></p></>,
  'efq-3': <><p className="mt-2">底数 <MathTex tex="0.6" /> 在 <MathTex tex="(0,1)" /> 内，函数递减</p><p className="text-center mt-1"><MathTex tex="1.5<2.5 \Rightarrow 0.6^{1.5}>0.6^{2.5}" /></p></>,
  'efq-4': <><p className="mt-2"><MathTex tex="a^3=8 \Rightarrow a=2" /></p><p className="text-center mt-1"><MathTex tex="f(1)=a^1=2" /></p></>,
  'efq-5': <><p className="mt-2">前三个都大于 0</p><p className="mt-2">而 <MathTex tex="\log_3 \dfrac12" /> 中底数大于 1、真数小于 1，所以结果为负。</p></>,
  'efq-6': <><p className="mt-2">代入点 <MathTex tex="(4,2)" /></p><p className="text-center mt-1"><MathTex tex="2=4^{\alpha}" /></p><p className="text-center mt-1"><MathTex tex="4^{\frac12}=2 \Rightarrow \alpha=\frac12" /></p></>,
  'efq-7': <><p className="mt-2"><MathTex tex="\log_2 0.3<0" />，<MathTex tex="0.3^2=0.09" />，<MathTex tex="2^{0.3}>1" /></p><p className="text-center mt-1"><MathTex tex="\log_2 0.3 < 0.3^2 < 2^{0.3}" /></p></>,
  'efq-8': <><p className="mt-2"><MathTex tex="3^{2a}=(3^a)^2=2^2=4" /></p></>,
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
              {elementaryFuncExplanations[q.id] && <div className="mt-1">{elementaryFuncExplanations[q.id]}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ElementaryFuncAnswers() {
  return (
    <section className="print-answers">
      <PageBreak label="答案与解析" />
      <h2 className="text-xl font-bold text-gray-900 mb-4">📝 3.2 基本初等函数 — 答案与解析</h2>
      <AnswerSection title="第一节：对数运算法则" questions={elemFuncPractice1} />
      <AnswerSection title="第二节：指数函数" questions={elemFuncPractice2} />
      <AnswerSection title="第三节：对数函数" questions={elemFuncPractice3} />
      <AnswerSection title="第四节：幂函数" questions={elemFuncPractice4} />
      <AnswerSection title="高考真题答案" questions={elemFuncQuizQuestions} />
    </section>
  );
}
