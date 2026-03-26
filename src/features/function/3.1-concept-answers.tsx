import type { ReactNode } from 'react';
import { Math as MathTex, PageBreak } from '@/components/shared';
import { conceptPractice } from './data/3.1/3.1-concept-practice';
import { conceptQuizQuestions } from './data/3.1/3.1-concept-quiz';
import type { QuizQuestionData } from '@/types';

export const functionConceptExplanations: Record<string, ReactNode> = {
  'fp-1': (
    <>
      <div className="mt-1"><MathTex tex="\text{根号内} \geq 0 \Rightarrow x \geq 1\text{，分母} \neq 0 \Rightarrow x \neq 2" display /></div>
      <div className="mt-1"><MathTex tex="\text{取交集：} [1,2)\cup(2,+\infty)" display /></div>
    </>
  ),
  'fp-2': (
    <>
      <div className="mt-1"><MathTex tex="f(x) \text{ 定义域 } [0,2] \Rightarrow 0 \leq x \leq 2" display /></div>
      <div className="mt-1"><MathTex tex="\text{令 } 0 \leq 2x-1 \leq 2 \Rightarrow 1 \leq 2x \leq 3 \Rightarrow \frac{1}{2} \leq x \leq \frac{3}{2}" display /></div>
      <p className="mt-2">结论：定义域是 <MathTex tex="[\frac{1}{2},\frac{3}{2}]" /></p>
    </>
  ),
  'fp-3': (
    <>
      <div className="mt-1"><MathTex tex="\text{判断同一函数看三要素：定义域、值域、对应关系}" display /></div>
      <div className="mt-1"><MathTex tex="\text{A：} g(x)=x^2/x \text{ 在 } x=0 \text{ 无意义，定义域不同 } \times" display /></div>
      <div className="mt-1"><MathTex tex="\text{B：} |x| = \sqrt{x^2}\text{，定义域都是 } \mathbb{R}\text{，对应关系相同 } \checkmark" display /></div>
      <div className="mt-1"><MathTex tex="\text{D：} x^0 \text{ 在 } x=0 \text{ 无意义，定义域不同 } \times" display /></div>
      <p className="mt-2">结论：选 <MathTex tex="B" />。</p>
    </>
  ),
  'fp-4': (
    <>
      <div className="mt-1"><MathTex tex="f(-1)\text{：} -1 \leq 0 \Rightarrow f(-1) = -1+1 = 0" display /></div>
      <div className="mt-1"><MathTex tex="f(f(-1)) = f(0)\text{：} 0 \leq 0 \Rightarrow f(0) = 0+1 = 1" display /></div>
    </>
  ),
  'fp-5': (
    <>
      <div className="mt-1"><MathTex tex="f(x) = -(x^2 - 4x) - 1 = -(x-2)^2 + 3" display /></div>
      <div className="mt-1"><MathTex tex="\text{对称轴 } x=2 \in [0,3]\text{，开口向下}" display /></div>
      <div className="mt-1"><MathTex tex="\text{最大值：} f(2) = 3" display /></div>
      <div className="mt-1"><MathTex tex="\text{比较端点：} f(0) = -1,\; f(3) = 2" display /></div>
      <p className="mt-2">结论：值域是 <MathTex tex="[-1,3]" />。</p>
    </>
  ),
  'fp-6': (
    <>
      <div className="mt-1"><MathTex tex="\text{反解法：令 } y = \frac{2x+1}{x-1} \Rightarrow y(x-1) = 2x+1" display /></div>
      <div className="mt-1"><MathTex tex="yx - y = 2x + 1 \Rightarrow x(y-2) = y+1 \Rightarrow x = \frac{y+1}{y-2}" display /></div>
      <div className="mt-1"><MathTex tex="\text{分母} \neq 0 \Rightarrow y \neq 2" display /></div>
      <p className="mt-2">结论：值域是 <MathTex tex="(-\infty,2)\cup(2,+\infty)" />。</p>
    </>
  ),
  'fp-7': (
    <>
      <div className="mt-1"><MathTex tex="f(x_1)-f(x_2) = \left(x_1 + \frac{1}{x_1}\right) - \left(x_2 + \frac{1}{x_2}\right)" display /></div>
      <div className="mt-1"><MathTex tex="= (x_1 - x_2) + \frac{x_2 - x_1}{x_1 x_2} = (x_1 - x_2)\left(1 - \frac{1}{x_1 x_2}\right)" display /></div>
      <div className="mt-1"><MathTex tex="x_1, x_2 > 1 \Rightarrow 1 - \frac{1}{x_1 x_2} > 0" display /></div>
      <div className="mt-1"><MathTex tex="x_1 < x_2 \Rightarrow x_1 - x_2 < 0 \Rightarrow f(x_1)-f(x_2) < 0" display /></div>
      <p className="mt-2">结论：化简结果选 <MathTex tex="A" />，并且函数递增。</p>
    </>
  ),
  'fp-10': (
    <>
      <div className="mt-1"><MathTex tex="\text{偶函数：} f(-x) = f(x)" display /></div>
      <div className="mt-1"><MathTex tex="f(-3) = f(3) = 3^2 - 2 \times 3 = 9 - 6 = 3" display /></div>
    </>
  ),
  'fp-11': (
    <>
      <div className="mt-1"><MathTex tex="\text{偶函数} \Rightarrow f(a) = f(|a|)" display /></div>
      <div className="mt-1"><MathTex tex="f(|a|) \leq f(2)\text{，在 } [0,+\infty) \text{ 上递增} \Rightarrow |a| \leq 2" display /></div>
      <div className="mt-1"><MathTex tex="\Rightarrow -2 \leq a \leq 2" display /></div>
    </>
  ),
  'fp-12': (
    <>
      <div className="mt-1"><MathTex tex="f(2x+1) \text{ 定义域 } [-1,3] \Rightarrow -1 \leq x \leq 3" display /></div>
      <div className="mt-1"><MathTex tex="2(-1)+1 \leq 2x+1 \leq 2(3)+1 \Rightarrow -1 \leq 2x+1 \leq 7" display /></div>
      <p className="mt-2">结论：<MathTex tex="f(x)" /> 的定义域是 <MathTex tex="[-1,7]" />。</p>
    </>
  ),
  'fq-1': (
    <>
      <div className="mt-1"><MathTex tex="y = 2^t \text{ 是增函数，要使 } f(x) = 2^{x(x-a)} \text{ 在 } (0,1) \text{ 递减}" display /></div>
      <div className="mt-1"><MathTex tex="\text{需要内层 } t = x(x-a) = x^2 - ax \text{ 在 } (0,1) \text{ 递减}" display /></div>
      <div className="mt-1"><MathTex tex="t = x^2 - ax \text{ 对称轴 } x = \frac{a}{2}\text{，在 } (0,1) \text{ 递减需 } \frac{a}{2} \geq 1" display /></div>
      <div className="mt-1"><MathTex tex="\therefore a \geq 2" display /></div>
    </>
  ),
  'fq-2': (
    <>
      <div className="mt-1"><MathTex tex="\text{偶函数：} f(-\tfrac{3}{4}) = f(\tfrac{3}{4})" display /></div>
      <div className="mt-1"><MathTex tex="\text{周期为 2：} f(\tfrac{3}{4}) = f(\tfrac{11}{4})" display /></div>
      <div className="mt-1"><MathTex tex="\tfrac{11}{4} \in [2,3]\text{，代入 } f(x) = 5 - 2x" display /></div>
      <div className="mt-1"><MathTex tex="f(\tfrac{11}{4}) = 5 - \tfrac{11}{2} = -\tfrac{1}{2}" display /></div>
    </>
  ),
  'fq-3': (
    <>
      <div className="mt-1"><MathTex tex="\text{设公共值为 } k\text{，则 } x = 2^{k-2},\; y = 3^{k-3},\; z = 5^{k-5}" display /></div>
      <div className="mt-1"><MathTex tex="\text{当 } k \text{ 取不同值时，} x,y,z \text{ 的大小关系变化}" display /></div>
      <p className="mt-2">结论：不可能的是 <MathTex tex="y > x > z" />。</p>
    </>
  ),
  'fq-4': (
    <>
      <div className="mt-1"><MathTex tex="\text{(1) } x \geq 0 \text{ 部分：} f'(x) = e^x + \frac{1}{x+1} > 0" display /></div>
      <div className="mt-1"><MathTex tex="\text{(2) } x < 0 \text{ 部分：} f'(x) = -2x - 2a > 0 \Rightarrow x < -a" display /></div>
      <div className="mt-1"><MathTex tex="\text{在 } x < 0 \text{ 上递增需 } a \leq 0" display /></div>
      <div className="mt-1"><MathTex tex="\text{(3) 衔接处：} -a \leq 1 \Rightarrow a \geq -1" display /></div>
      <p className="mt-2">结论：<MathTex tex="a \in [-1,0]" />。</p>
    </>
  ),
  'fq-5': (
    <>
      <div className="mt-1"><MathTex tex="f(x) > f(x-1) + f(x-2)" display /></div>
      <div className="mt-1"><MathTex tex="f(3) > 3,\; f(4) > 5,\; f(5) > 8" display /></div>
      <div className="mt-1"><MathTex tex="\text{增速类似 Fibonacci，指数级增长}" display /></div>
      <p className="mt-2">结论：一定正确的是 <MathTex tex="f(10) > 100" />。</p>
    </>
  ),
  'fq-6': (
    <>
      <div className="mt-1"><MathTex tex="\text{令 } x = y = 0\text{：} f(0)=0 \quad \text{A}\checkmark" display /></div>
      <div className="mt-1"><MathTex tex="\text{令 } y = 1\text{：} f(x)=f(x)+x^2f(1) \Rightarrow f(1)=0 \quad \text{B}\checkmark" display /></div>
      <div className="mt-1"><MathTex tex="\text{再令 } y=-1\text{，可得 } f(-x)=f(x) \quad \text{C}\checkmark" display /></div>
      <p className="mt-2">结论：本题选 <MathTex tex="ABC" />。</p>
    </>
  ),
  'fq-7': (
    <>
      <div className="mt-1"><MathTex tex="f(x+2) = -f(x) \Rightarrow f(x+4)=f(x)" display /></div>
      <div className="mt-1"><MathTex tex="\text{周期为 4：} f(8.5)=f(0.5)" display /></div>
      <div className="mt-1"><MathTex tex="0.5 \in [0,1] \Rightarrow f(0.5)=0.5" display /></div>
    </>
  ),
  'fq-8': (
    <>
      <div className="mt-1"><MathTex tex="\text{奇函数：} f(-3)=0 \Rightarrow f(3)=0" display /></div>
      <div className="mt-1"><MathTex tex="\frac{f(x)}{x}<0 \text{ 即 } f(x) \text{ 与 } x \text{ 异号}" display /></div>
      <div className="mt-1"><MathTex tex="x>0\text{ 时 } f(x)<0 \Rightarrow x \in (0,3)" display /></div>
      <div className="mt-1"><MathTex tex="x<0\text{ 时 } f(x)>0 \Rightarrow x \in (-3,0)" display /></div>
      <p className="mt-2">结论：解集是 <MathTex tex="(-3,0)\cup(0,3)" />。</p>
    </>
  ),
};

function AnswerLabel({ q }: { q: QuizQuestionData }) {
  if (q.type === 'blank') {
    return <>答案：<MathTex tex={q.acceptableAnswers?.[0] ?? q.correctAnswer} /></>;
  }
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
              {functionConceptExplanations[q.id] && <div className="mt-1">{functionConceptExplanations[q.id]}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FunctionConceptAnswers() {
  return (
    <section className="mb-8 print-answers">
      <PageBreak label="答案与解析" />
      <h2 className="text-xl font-bold text-gray-900 mb-4">📝 3.1 函数的概念与性质 — 答案与解析</h2>
      <AnswerSection title="精华练习" questions={conceptPractice} />
      <AnswerSection title="高考真题实战" questions={conceptQuizQuestions} />
    </section>
  );
}
