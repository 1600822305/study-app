import type { ReactNode } from 'react';
import { Math as MathTex, PageBreak } from '@/components/shared';
import { graphPractice1, graphPractice2, graphPractice3, graphPractice4 } from './data/3.3/3.3-graph-practice';
import { graphQuizQuestions } from './data/3.3/3.3-graph-quiz';
import type { QuizQuestionData } from '@/types';

export const functionGraphExplanations: Record<string, ReactNode> = {
  'fgp1-1': <><p className="mt-2"><MathTex tex="x^2-5x+6=0\Rightarrow (x-2)(x-3)=0" /></p><p className="mt-2">零点是数，所以为 <MathTex tex="x=2" /> 和 <MathTex tex="x=3" />。</p></>,
  'fgp1-2': <><p className="mt-2"><MathTex tex="2^x-2=0\Rightarrow 2^x=2\Rightarrow x=1" /></p><p className="mt-2">所以只有 1 个零点。</p></>,
  'fgp1-3': <><p className="mt-2">三者等价：</p><p className="text-center mt-1"><MathTex tex="f(x)\text{ 的零点}\Leftrightarrow f(x)=0\text{ 的根}\Leftrightarrow \text{图像与 }x\text{ 轴交点的横坐标}" /></p></>,
  'fgp1-4': <><p className="mt-2"><MathTex tex="f(x)=(x+1)^2" /></p><p className="text-center mt-1"><MathTex tex="(x+1)^2=0\Rightarrow x=-1" /></p><p className="mt-2">重根也只算 1 个零点。</p></>,
  'fgp1-5': <><p className="mt-2"><MathTex tex="x^2+1\ge 1>0" />，恒不为 0。</p><p className="mt-2">所以零点个数为 0。</p></>,
  'fgp2-1': <><p className="mt-2"><MathTex tex="f(1)=-1<0,\ f(2)=5>0" /></p><p className="mt-2">多项式连续，端点异号，所以 <MathTex tex="(1,2)" /> 内一定有零点。</p></>,
  'fgp2-2': <><p className="mt-2"><MathTex tex="f(x)=\dfrac1x" /> 在 <MathTex tex="x=0" /> 处无定义。</p><p className="mt-2">不连续，不能用零点存在性定理。</p></>,
  'fgp2-3': <><p className="mt-2"><MathTex tex="f(2)=\ln2-2<0,\ f(3)=\ln3>0" /></p><p className="mt-2">连续且异号，所以零点在 <MathTex tex="(2,3)" />。</p></>,
  'fgp2-4': <><p className="mt-2">定理是充分不必要条件。</p><p className="mt-2">不满足“端点异号”，不代表没有零点。</p></>,
  'fgp2-5': <><p className="mt-2"><MathTex tex="f(1)\approx -0.28<0,\ f(2)\approx 3.39>0" /></p><p className="mt-2">所以零点在 <MathTex tex="(1,2)" />。</p></>,
  'fgp3-1': <><p className="mt-2"><MathTex tex="f(1)=-1<0,\ f(1.5)>0" /></p><p className="mt-2">异号区间保留为 <MathTex tex="(1,1.5)" />。</p></>,
  'fgp3-2': <><p className="mt-2">初始长度为 1，每次减半。</p><p className="text-center mt-1"><MathTex tex="1\to 0.5\to 0.25\to 0.125\to 0.0625" /></p><p className="mt-2"><MathTex tex="0.0625<0.1" />，所以至少 4 次。</p></>,
  'fgp3-3': <><p className="mt-2">二分法前提：</p><p className="mt-2">函数在区间上连续，且端点函数值异号。</p></>,
  'fgp3-4': <><p className="mt-2">先构造</p><p className="text-center mt-1"><MathTex tex="f(x)=2^x-3" /></p><p className="mt-2">再找异号区间后才能二分。</p></>,
  'fgp3-5': <><p className="mt-2">二分法是逼近法，只能求近似值。</p><p className="mt-2">每次把区间缩小到原来的 <MathTex tex="\dfrac12" />。</p></>,
  'fgp4-1': <><p className="mt-2">看作 <MathTex tex="y=\ln x" /> 与 <MathTex tex="y=2-x" /> 的交点个数。</p><p className="mt-2">图像只有 1 个交点，所以有 1 个实根。</p></>,
  'fgp4-2': <><p className="mt-2">看作 <MathTex tex="y=e^x" /> 与 <MathTex tex="y=\dfrac1x" /> 在 <MathTex tex="x>0" /> 的交点。</p><p className="mt-2">一增一减，所以只有 1 个交点。</p></>,
  'fgp4-3': <><p className="mt-2">显然 <MathTex tex="x=2,4" /> 是两个根。</p><p className="mt-2">在负半轴还有 1 个交点，所以共 3 个。</p></>,
  'fgp4-4': <><p className="mt-2"><MathTex tex="f(-2)<0,\ f(0)>0,\ f(1)<0,\ f(2)>0" /></p><p className="mt-2">分别在 <MathTex tex="(-2,0),(0,1),(1,2)" /> 各有一个零点，共 3 个。</p></>,
  'fgp4-5': <><p className="mt-2"><MathTex tex="x=1" /> 时两边都为 0。</p><p className="mt-2"><MathTex tex="0<x<1" /> 时左边正右边负，不相交；<MathTex tex="x>1" /> 时左边增长更快，也不再相交。</p></>,
  'fgp4-6': <><p className="mt-2">设 <MathTex tex="g(x)=\ln x-\dfrac{x}{e}" /></p><p className="text-center mt-1"><MathTex tex="g'(x)=\dfrac1x-\dfrac1e=0\Rightarrow x=e" /></p><p className="text-center mt-1"><MathTex tex="g(e)=0" /></p><p className="mt-2">最大值恰好为 0，所以只有 1 个交点。</p></>,
  'fgq-1': <><p className="mt-2"><MathTex tex="f(0)=-1<0,\ f(1)=e-1>0" /></p><p className="mt-2">连续且异号，所以零点在 <MathTex tex="(0,1)" />。</p></>,
  'fgq-2': <><p className="mt-2"><MathTex tex="f(1)=-2<0,\ f(2)=2>0" /></p><p className="mt-2">所以零点在 <MathTex tex="(1,2)" />。</p></>,
  'fgq-3': <><p className="mt-2"><MathTex tex="f(0),f(2)" /> 同号，不能保证 <MathTex tex="(0,2)" /> 有零点。</p><p className="mt-2"><MathTex tex="f(2),f(4)" /> 异号，所以 <MathTex tex="(2,4)" /> 内一定有零点。</p></>,
  'fgq-4': <><p className="mt-2">看作 <MathTex tex="y=\log_2x" /> 与 <MathTex tex="y=4-x" />。</p><p className="mt-2">一增一减，最多 1 个交点；又在 <MathTex tex="(2,4)" /> 内存在交点，所以恰有 1 个。</p></>,
  'fgq-5': <><p className="mt-2"><MathTex tex="f(1)=-2<0,\ f(1.5)>0" /></p><p className="mt-2">新异号区间是 <MathTex tex="(1,1.5)" />。</p></>,
  'fgq-6': <><p className="mt-2">没有零点等价于判别式小于 0。</p><p className="text-center mt-1"><MathTex tex="\Delta=4-4a<0\Rightarrow a>1" /></p></>,
  'fgq-7': <><p className="mt-2">看作递减指数函数和递增直线的交点。</p><p className="mt-2">最多 1 个，又由 <MathTex tex="x=1,2" /> 两侧函数值比较知在 <MathTex tex="(1,2)" /> 内有交点，所以恰有 1 个。</p></>,
  'fgq-8': <><p className="mt-2"><MathTex tex="y=|x^2-4|" /> 是 W 形。</p><p className="mt-2">水平线 <MathTex tex="y=a" /> 要与它交 4 次，必须满足 <MathTex tex="0<a<4" />。</p></>,
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
              {functionGraphExplanations[q.id] && <div className="mt-1">{functionGraphExplanations[q.id]}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FunctionGraphAnswers() {
  return (
    <section className="print-answers">
      <PageBreak label="答案与解析" />
      <h2 className="text-xl font-bold text-gray-900 mb-4">📝 3.3 函数图像与零点 — 答案与解析</h2>
      <AnswerSection title="第一节：零点的概念" questions={graphPractice1} />
      <AnswerSection title="第二节：零点存在性定理" questions={graphPractice2} />
      <AnswerSection title="第三节：二分法" questions={graphPractice3} />
      <AnswerSection title="第四节：数形结合求零点个数" questions={graphPractice4} />
      <AnswerSection title="自测题答案" questions={graphQuizQuestions} />
    </section>
  );
}
