import type { ReactNode } from 'react';
import { Math as MathTex, PageBreak } from '@/components/shared';
import { graphPrereqPractice1, graphPrereqPractice2, graphPrereqPractice3 } from './data/graph-prereq-practice';
import { graphPrereqQuizQuestions } from './data/graph-prereq-quiz';
import type { QuizQuestionData } from '@/types';

export const functionGraphPrereqExplanations: Record<string, ReactNode> = {
  'gpp1-1': <><p className="mt-2"><MathTex tex="ab<0" /> 说明异号，<MathTex tex="a+b>0" /> 说明正数绝对值更大。</p><p className="text-center mt-1"><MathTex tex="a>0,\ b<0" /></p><p className="mt-2">所以在第四象限。</p></>,
  'gpp1-2': <><p className="mt-2"><MathTex tex="a^2+1\ge 1>0" />，所以纵坐标恒正。</p><p className="mt-2">横坐标可正可负也可为 0。</p><p className="mt-2">结论：在 <MathTex tex="y" /> 轴或第一、二象限。</p></>,
  'gpp1-3': <><p className="mt-2"><MathTex tex="A(3,1)\to B(-3,-1)\to C(3,-1)" /></p><p className="mt-2">原点对称：<MathTex tex="x,y" /> 都变号；<MathTex tex="y" /> 轴对称：<MathTex tex="x" /> 变号。</p></>,
  'gpp1-4': <><p className="mt-2">第二象限：<MathTex tex="a<0,b>0" /></p><p className="text-center mt-1"><MathTex tex="a=-3,\ b=5" /></p><p className="text-center mt-1"><MathTex tex="a+b=2" /></p></>,
  'gpp1-5': <><p className="mt-2"><MathTex tex="A(2,-3)\xrightarrow{x\text{轴对称}}B(2,3)" /></p><p className="text-center mt-1"><MathTex tex="B(2,3)\xrightarrow{左移4}C(-2,3)" /></p></>,
  'gpp2-1': <><p className="mt-2">令 <MathTex tex="y=0" /></p><p className="text-center mt-1"><MathTex tex="x^2-2x=0\Rightarrow x(x-2)=0" /></p><p className="mt-2">交点是 <MathTex tex="(0,0)" /> 和 <MathTex tex="(2,0)" />。</p></>,
  'gpp2-2': <><p className="mt-2"><MathTex tex="a=-1<0" />，开口向下。</p><p className="text-center mt-1"><MathTex tex="x=0\Rightarrow y=4" /></p><p className="mt-2">与 <MathTex tex="y" /> 轴交于 <MathTex tex="(0,4)" />。</p></>,
  'gpp2-3': <><p className="text-center mt-1"><MathTex tex="2a-3=5\Rightarrow 2a=8\Rightarrow a=4" /></p></>,
  'gpp2-4': <><p className="mt-2"><MathTex tex="x=0" /> 时最小为 <MathTex tex="0" />，<MathTex tex="x=\pm2" /> 时最大为 <MathTex tex="4" />。</p></>,
  'gpp2-5': <><p className="mt-2"><MathTex tex="y=x^2-1=x^2+(-1)" /></p><p className="mt-2">结论：整体向下平移 1 个单位。</p></>,
  'gpp2-6': <><p className="mt-2">根号下非负</p><p className="text-center mt-1"><MathTex tex="x-1\ge 0\Rightarrow x\ge 1" /></p></>,
  'gpp2-7': <><p className="mt-2">令 <MathTex tex="x=0" /></p><p className="text-center mt-1"><MathTex tex="y=2^0=1" /></p><p className="mt-2">所以 <MathTex tex="a=1" />。</p></>,
  'gpp3-1': <><p className="mt-2">上加下减</p><p className="text-center mt-1"><MathTex tex="y=x^2\to y=x^2+3" /></p></>,
  'gpp3-2': <><p className="mt-2">左加右减</p><p className="text-center mt-1"><MathTex tex="y=x^2\to y=(x+2)^2" /></p></>,
  'gpp3-3': <><p className="mt-2">先下移 3，再右移 1</p><p className="text-center mt-1"><MathTex tex="y=2x-3\to y=2(x-1)-3" /></p></>,
  'gpp3-4': <><p className="mt-2"><MathTex tex="(x+1)" /> 表示左移 1，<MathTex tex="-2" /> 表示下移 2。</p><p className="mt-2">结论：左移 1，下移 2。</p></>,
  'gpp3-5': <><p className="mt-2">左移 1 后得到 <MathTex tex="y=\sqrt{x+1}" /></p><p className="text-center mt-1"><MathTex tex="x+1\ge 0\Rightarrow x\ge -1" /></p></>,
  'gpp3-6': <><p className="mt-2">左移 1 后函数变为 <MathTex tex="y=2^{x+1}" /></p><p className="text-center mt-1"><MathTex tex="x=0\Rightarrow y=2^{1}=2" /></p></>,
  'gpp3-7': <><p className="mt-2"><MathTex tex="y=(x-3)^2+4" /> 表示右移 3、上移 4。</p><p className="mt-2">顶点 <MathTex tex="(3,4)" />，对称轴 <MathTex tex="x=3" />。</p></>,
  'gpq-1': <><p className="mt-2">两个非负数和为 0，则都为 0。</p><p className="text-center mt-1"><MathTex tex="a=2,\ b=-3" /></p><p className="mt-2">所以在第四象限。</p></>,
  'gpq-2': <><p className="text-center mt-1"><MathTex tex="A(-1,4)\to B(-1,-4)\to C(1,-4)" /></p></>,
  'gpq-3': <><p className="mt-2">令 <MathTex tex="y=0" /></p><p className="text-center mt-1"><MathTex tex="x^2-4x+3=(x-1)(x-3)=0" /></p><p className="mt-2">交点是 <MathTex tex="(1,0)" /> 和 <MathTex tex="(3,0)" />。</p></>,
  'gpq-4': <><p className="text-center mt-1"><MathTex tex="y=-(x-1)^2+1" /></p><p className="mt-2">顶点在 <MathTex tex="(1,1)" />，且 <MathTex tex="1\in[0,3]" />，所以最大值是 <MathTex tex="1" />。</p></>,
  'gpq-5': <><p className="mt-2"><MathTex tex="y=(x-1)^2-1" />，对称轴为 <MathTex tex="x=1" />。</p><p className="mt-2">左侧减，右侧增，所以减区间是 <MathTex tex="x<1" />。</p></>,
  'gpq-6': <><p className="mt-2">逆向还原：左移 2 的逆是右移 2，上移 3 的逆是下移 3。</p><p className="text-center mt-1"><MathTex tex="(x+1)^2+5\to (x-1)^2+2" /></p></>,
  'gpq-7': <><p className="mt-2">令 <MathTex tex="y=0" /></p><p className="text-center mt-1"><MathTex tex="\sqrt{a+2}-1=0\Rightarrow \sqrt{a+2}=1\Rightarrow a=-1" /></p></>,
  'gpq-8': <><p className="mt-2">右移 1、下移 2 后</p><p className="text-center mt-1"><MathTex tex="y=3^{x-1}-2" /></p><p className="text-center mt-1"><MathTex tex="x=1\Rightarrow y=3^0-2=-1" /></p></>,
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
              {functionGraphPrereqExplanations[q.id] && <div className="mt-1">{functionGraphPrereqExplanations[q.id]}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FunctionGraphPrereqAnswers() {
  return (
    <section className="print-answers">
      <PageBreak label="答案与解析" />
      <h2 className="text-xl font-bold text-gray-900 mb-4">📝 3.2.5 函数图像前置知识 — 答案与解析</h2>
      <AnswerSection title="第一节：坐标系回顾" questions={graphPrereqPractice1} />
      <AnswerSection title="第二节：描点法画图" questions={graphPrereqPractice2} />
      <AnswerSection title="第三节：图像平移变换" questions={graphPrereqPractice3} />
      <AnswerSection title="自测题答案" questions={graphPrereqQuizQuestions} />
    </section>
  );
}
