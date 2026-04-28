import type { ReactNode } from 'react';
import { Math as MathTex, PageBreak } from '@/components/shared';
import { graphPractice1, graphPractice2, graphPractice3 } from './data/3.3/3.3-graph-practice';
import type { QuizQuestionData } from '@/types';

export const functionGraphExplanations: Record<string, ReactNode> = {
  'fgp1-1': <><p className="mt-2">零点是<strong>数</strong>，不是点！</p><p className="mt-2">解方程 <MathTex tex="x^2 - 4 = 0" />，得 <MathTex tex="x = \pm 2" />。</p></>,
  'fgp1-2': <><p className="mt-2"><MathTex tex="\Delta = (-2)^2 - 4 \times 1 \times 1 = 0" /></p><p className="mt-2"><MathTex tex="\Delta = 0" />，所以有 1 个零点（重根）。</p></>,
  'fgp1-3': <><p className="mt-2"><MathTex tex="f(1) = -1 < 0,\ f(2) = 5 > 0" /></p><p className="mt-2">多项式连续，端点异号，所以 <MathTex tex="(1, 2)" /> 内一定有零点。</p></>,
  'fgp1-4': <><p className="mt-2"><MathTex tex="f(1) = e - 3 \approx -0.28 < 0" /></p><p className="mt-2"><MathTex tex="f(2) = e^2 - 4 \approx 3.39 > 0" /></p><p className="mt-2">连续且异号，零点在 <MathTex tex="(1, 2)" />。</p></>,
  'fgp1-5': <><p className="mt-2"><MathTex tex="f(2) = \ln 2 + 4 - 6 = \ln 2 - 2 < 0" /></p><p className="mt-2"><MathTex tex="f(3) = \ln 3 + 6 - 6 = \ln 3 > 0" /></p><p className="mt-2">连续且异号，零点在 <MathTex tex="(2, 3)" />。</p></>,
  'fgp2-1': <><p className="mt-2">拆成 <MathTex tex="y_1 = \ln x" /> 和 <MathTex tex="y_2 = 2 - x" />。</p><p className="mt-2">一增一减，最多 1 个交点；从图像看确实相交，所以恰好 1 个根。</p></>,
  'fgp2-2': <><p className="mt-2">拆成 <MathTex tex="y_1 = e^x" /> 和 <MathTex tex="y_2 = x + 2" />。</p><p className="mt-2">两个都是增函数，由图可以判定出有两个交点，所以有 2 个根。</p></>,
  'fgp2-3': <><p className="mt-2">拆成 <MathTex tex="y_1 = x^2" />（抛物线）和 <MathTex tex="y_2 = 2^x" />（指数曲线）。</p><p className="mt-2">由图可以判定出 <MathTex tex="x = 2" />、<MathTex tex="x = 4" /> 和 <MathTex tex="x \approx -0.77" /> 处各有一个交点，共 3 个根。</p></>,
  'fgp2-4': <><p className="mt-2">拆成 <MathTex tex="y_1 = \log_2 x" /> 和 <MathTex tex="y_2 = 4 - x" />。</p><p className="mt-2">一增一减，最多 1 个交点；从图像看确实相交，所以恰好 1 个零点。</p></>,
  'fgp3-1': <><p className="mt-2"><MathTex tex="f(1) = -1 < 0" />，<MathTex tex="f(1.5) > 0" />，异号。</p><p className="mt-2">零点在左半边 <MathTex tex="(1, 1.5)" />。</p></>,
  'fgp3-2': <><p className="mt-2"><MathTex tex="f(1.5) < 0" /> 与 <MathTex tex="f(2) > 0" /> 异号。</p><p className="mt-2">零点在 <MathTex tex="(1.5, 2)" />。</p></>,
  'fgp3-3': <><p className="mt-2">构造 <MathTex tex="f(x) = 2^x - 3" />，<MathTex tex="f(1.5) < 0" /> 与 <MathTex tex="f(2) > 0" /> 异号。</p><p className="mt-2">零点在 <MathTex tex="(1.5, 2)" />。</p></>,
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
      <AnswerSection title="第一节：零点与零点区间" questions={graphPractice1} />
      <AnswerSection title="第二节：数形结合" questions={graphPractice2} />
      <AnswerSection title="第三节：二分法" questions={graphPractice3} />
    </section>
  );
}
