import type { ReactNode } from 'react';
import { Math as MathTex, PageBreak } from '@/components/shared';
import { derivPrereqPractice1, derivPrereqPractice2, derivPrereqPractice3 } from './data/3.3.5/3.3.5-deriv-prereq-practice';
import { derivPrereqQuizQuestions } from './data/3.3.5/3.3.5-deriv-prereq-quiz';
import type { QuizQuestionData } from '@/types';

export const derivativePrereqExplanations: Record<string, ReactNode> = {
  'dpp1-1': <><p className="mt-2">每次缩小一半：</p><p className="text-center mt-1"><MathTex tex="1,\frac12,\frac14,\frac18,\cdots" /></p><p className="mt-2">所以越来越接近 0。</p></>,
  'dpp1-2': <><p className="mt-2"><MathTex tex="\frac12,\frac23,\frac34,\frac45,\cdots" /> 都比分母少 1。</p><p className="mt-2">分子分母越来越接近，所以极限是 1。</p></>,
  'dpp1-3': <><p className="mt-2">极限的核心是“无限接近”。</p><p className="mt-2">不一定等于，也不一定永远不等于。</p></>,
  'dpp1-4': <><p className="mt-2"><MathTex tex="0.9=1-0.1,\ 0.99=1-0.01,\cdots" /></p><p className="mt-2">和 1 的差距趋近于 0，所以极限是 1。</p></>,
  'dpp1-5': <><p className="mt-2">连续函数直接代入：</p><p className="text-center mt-1"><MathTex tex="3\times 2+1=7" /></p></>,
  'dpp2-1': <><p className="text-center mt-1"><MathTex tex="\text{平均速度}=\dfrac{30}{2}=15\text{ km/h}" /></p></>,
  'dpp2-2': <><p className="text-center mt-1"><MathTex tex="\dfrac{f(3)-f(1)}{3-1}=\dfrac{9-1}{2}=4" /></p></>,
  'dpp2-3': <><p className="text-center mt-1"><MathTex tex="\dfrac{(2x_2+1)-(2x_1+1)}{x_2-x_1}=2" /></p><p className="mt-2">一次函数的平均变化率恒等于斜率。</p></>,
  'dpp2-4': <><p className="text-center mt-1"><MathTex tex="\dfrac{4.41-4}{0.1}=4.1" /></p></>,
  'dpp2-5': <><p className="mt-2">平均变化率是连接两点的直线斜率。</p><p className="mt-2">也就是割线斜率。</p></>,
  'dpp3-1': <><p className="mt-2">平均变化率为 <MathTex tex="4+\Delta x" /></p><p className="text-center mt-1"><MathTex tex="\Delta x\to 0\Rightarrow 4+\Delta x\to 4" /></p></>,
  'dpp3-2': <><p className="mt-2">两点无限接近时，割线趋近于切线。</p></>,
  'dpp3-3': <><p className="mt-2">瞬时变化率对应图像上的切线斜率。</p></>,
  'dpp3-4': <><p className="mt-2">速度表显示的是“此时此刻”的速度。</p><p className="mt-2">即瞬时速度。</p></>,
  'dpp3-5': <><p className="mt-2">导数是平均变化率在 <MathTex tex="\Delta x\to0" /> 时的极限。</p></>,
  'dpq-1': <><p className="mt-2">趋近于 1 的数列不一定每项都小于 1，也可以从上方或两侧逼近。</p></>,
  'dpq-2': <><p className="text-center mt-1"><MathTex tex="f(1)=3,\ f(4)=24,\ \dfrac{24-3}{4-1}=7" /></p></>,
  'dpq-3': <><p className="text-center mt-1"><MathTex tex="\dfrac{f(3)-f(1)}{2}=\dfrac{(9+3a)-(1+a)}{2}=4+a" /></p><p className="text-center mt-1"><MathTex tex="4+a=6\Rightarrow a=2" /></p></>,
  'dpq-4': <><p className="mt-2">一次函数平均变化率恒等于斜率。</p><p className="text-center mt-1"><MathTex tex="k_1=k_2=3" /></p></>,
  'dpq-5': <><p className="text-center mt-1"><MathTex tex="\dfrac{(3+\Delta x)^2-9}{\Delta x}=6+\Delta x" /></p></>,
  'dpq-6': <><p className="mt-2">正确说法是：切线斜率等于该点处的导数值。</p><p className="mt-2">切线还可能在别处与曲线再相交。</p></>,
  'dpq-7': <><p className="mt-2">让点 <MathTex tex="B" /> 沿曲线无限靠近 <MathTex tex="A" />。</p><p className="mt-2">割线斜率的极限就是切线斜率。</p></>,
  'dpq-8': <><p className="mt-2">①②③ 正确，④错误。</p><p className="mt-2">导数值和函数值含义不同，只是这里数值碰巧相等。</p></>,
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
              {derivativePrereqExplanations[q.id] && <div className="mt-1">{derivativePrereqExplanations[q.id]}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DerivativePrereqAnswers() {
  return (
    <section className="print-answers">
      <PageBreak label="答案与解析" />
      <h2 className="text-xl font-bold text-gray-900 mb-4">📝 3.3.5 导数前置知识 — 答案与解析</h2>
      <AnswerSection title="第一节：极限思想入门" questions={derivPrereqPractice1} />
      <AnswerSection title="第二节：平均变化率" questions={derivPrereqPractice2} />
      <AnswerSection title="第三节：从平均到瞬时" questions={derivPrereqPractice3} />
      <AnswerSection title="自测题答案" questions={derivPrereqQuizQuestions} />
    </section>
  );
}
