import type { ReactNode } from 'react';
import { Math as MathTex, PageBreak } from '@/components/shared';
import { elemFuncPractice2, elemFuncPractice3, elemFuncPractice4 } from './data/3.2/3.2-elem-func-practice';
import type { QuizQuestionData } from '@/types';

export const elementaryFuncExplanations: Record<string, ReactNode> = {
  'efp2-1': <><p className="mt-2">所有指数函数都过 <MathTex tex="(0,1)" /></p><p className="text-center mt-1"><MathTex tex="4^0 = 1" /></p></>,
  'efp2-2': <><p className="mt-2">底数 <MathTex tex="\tfrac{2}{3}" /> 满足 <MathTex tex="0<a<1" /></p><p className="mt-2">所以是减函数。</p></>,
  'efp2-3': <><p className="mt-2">指数函数值域恒为 <MathTex tex="(0,+\infty)" /></p><p className="mt-2"><MathTex tex="5^x>0" />，永远不等于 0，也取不到 0。</p></>,
  'efp2-4': <><p className="mt-2">底数 <MathTex tex="2>1" />，<MathTex tex="y=2^x" /> 是增函数</p><p className="mt-2">指数 <MathTex tex="-0.3<0.3" />，增函数指数小的值小</p><p className="text-center mt-1"><MathTex tex="2^{-0.3} < 2^{0.3}" /></p></>,
  'efp2-5': <><p className="mt-2"><MathTex tex="3^{0.1}" />：底数 <MathTex tex="3>1" />，指数 <MathTex tex="0.1>0" />，所以 <MathTex tex="3^{0.1}>3^0=1" /></p><p className="mt-2"><MathTex tex="0.1^3" />：底数 <MathTex tex="0.1<1" />，指数 <MathTex tex="3>0" />，所以 <MathTex tex="0.1^3<0.1^0=1" /></p><p className="text-center mt-1"><MathTex tex="3^{0.1} > 1 > 0.1^3" /></p></>,
  'efp2-6': <><p className="mt-2">指数与对数互逆抵消</p><p className="text-center mt-1"><MathTex tex="a^{\log_a N} = N" /></p><p className="text-center mt-1"><MathTex tex="3^{\log_3 5} = 5" /></p></>,
  'efp2-7': <><p className="mt-2">把 16 写成 2 的幂</p><p className="text-center mt-1"><MathTex tex="2^{x+1} = 16 = 2^4" /></p><p className="mt-2">底数相同，指数相等</p><p className="text-center mt-1"><MathTex tex="x+1=4,\ x=3" /></p></>,
  'efp3-1': <><p className="mt-2">所有对数函数都过 <MathTex tex="(1,0)" /></p><p className="text-center mt-1"><MathTex tex="\log_3 1 = 0" /></p></>,
  'efp3-2': <><p className="mt-2">底数 <MathTex tex="0.5" /> 满足 <MathTex tex="0<a<1" /></p><p className="mt-2">所以是减函数。</p></>,
  'efp3-3': <><p className="mt-2">借助 1 比较</p><p className="text-center mt-1"><MathTex tex="\log_2 3 > \log_2 2 = 1" /></p><p className="text-center mt-1"><MathTex tex="\log_3 2 < \log_3 3 = 1" /></p></>,
  'efp3-4': <><p className="mt-2">真数必须大于 0</p><p className="text-center mt-1"><MathTex tex="3-x>0 \Rightarrow x<3" /></p><p className="mt-2">定义域是 <MathTex tex="(-\infty,3)" />。</p></>,
  'efp3-5': <><p className="mt-2">所有对数函数值域都是 <MathTex tex="\mathbb{R}" /></p><p className="mt-2"><MathTex tex="x>1" /> 时为正，<MathTex tex="0<x<1" /> 时为负。</p></>,
  'efp3-6': <><p className="mt-2">对数加法法则</p><p className="text-center mt-1"><MathTex tex="\lg 2 + \lg 5 = \lg 10 = 1" /></p></>,
  'efp3-7': <><p className="mt-2">指数与对数互逆</p><p className="text-center mt-1"><MathTex tex="2^{\log_2 5} = 5" /></p></>,
  'efp4-1': <><p className="mt-2">幂函数标准形式 <MathTex tex="y=x^{\alpha}" />：系数必须是 1，不能有加减项</p><p className="mt-2"><MathTex tex="y=2^x" /> 是指数函数；<MathTex tex="y=2x^2" /> 系数不为 1；<MathTex tex="y=x^2+1" /> 多了 <MathTex tex="+1" /></p><p className="mt-2">只有 <MathTex tex="y=x^2" /> 符合。</p></>,
  'efp4-2': <><p className="mt-2">三个标准定点：</p><p className="text-center mt-1">指数函数过 <MathTex tex="(0,1)" />；对数函数过 <MathTex tex="(1,0)" />；幂函数过 <MathTex tex="(1,1)" /></p><p className="mt-2">D 错：对数函数不过 <MathTex tex="(0,0)" />（<MathTex tex="x=0" /> 处对数无定义）</p></>,
  'efp4-3': <><p className="mt-2">底数 <MathTex tex="\tfrac{1}{2}" /> 满足 <MathTex tex="0<a<1" /></p><p className="mt-2">所以 <MathTex tex="y=\left(\tfrac{1}{2}\right)^x" /> 在 <MathTex tex="\mathbb{R}" /> 上是减函数。</p></>,
  'efp4-4': <><p className="mt-2">对数真数必须大于 0</p><p className="text-center mt-1"><MathTex tex="x-3>0" /></p><p className="mt-2">得 <MathTex tex="x>3" />，定义域 <MathTex tex="(3,+\infty)" />。</p></>,
  'efp4-5': <><p className="mt-2"><MathTex tex="y=x^{-1}" /> 是幂函数，指数 <MathTex tex="\alpha=-1<0" /></p><p className="mt-2">所以在 <MathTex tex="(0,+\infty)" /> 上是减函数。</p></>,
  'efp4-6': <><p className="mt-2">逐项估算：</p><p className="mt-2"><MathTex tex="2^{0.3}\approx 1.23" />；<MathTex tex="0.3^2=0.09" />；<MathTex tex="\log_2 3\approx 1.58" />；<MathTex tex="\log_2 0.3<0" /></p><p className="mt-2"><MathTex tex="\log_2 3" /> 最大。</p></>,
  'efp4-7': <><p className="mt-2">分别代入：</p><p className="text-center mt-1"><MathTex tex="f(2)=2^3=8" /></p><p className="text-center mt-1"><MathTex tex="g(3)=2^3=8" /></p><p className="text-center mt-1"><MathTex tex="h(4)=\log_2 4=2" /></p><p className="text-center mt-1"><MathTex tex="f(2)+g(3)-h(4)=8+8-2=14" /></p></>,
  'efp4-8': <><p className="mt-2">积的对数等于对数之和（法则①）</p><p className="text-center mt-1"><MathTex tex="\lg 25 + \lg 4 = \lg(25 \times 4) = \lg 100 = 2" /></p></>,
  'efp4-9': <><p className="mt-2">换底到 2 为底</p><p className="text-center mt-1"><MathTex tex="\log_4 8 = \dfrac{\log_2 8}{\log_2 4} = \dfrac{3}{2}" /></p></>,
  'efp4-10': <><p className="mt-2">把点 <MathTex tex="(4, 2)" /> 代入 <MathTex tex="y = x^{\alpha}" /></p><p className="text-center mt-1"><MathTex tex="2 = 4^{\alpha}" /></p><p className="mt-2">又 <MathTex tex="4^{\frac{1}{2}} = \sqrt{4} = 2" />，所以 <MathTex tex="\alpha = \dfrac{1}{2}" /></p></>,
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
      <AnswerSection title="第一节：指数函数" questions={elemFuncPractice2} />
      <AnswerSection title="第二节：对数函数" questions={elemFuncPractice3} />
      <AnswerSection title="第三节：幂函数" questions={elemFuncPractice4} />
    </section>
  );
}
