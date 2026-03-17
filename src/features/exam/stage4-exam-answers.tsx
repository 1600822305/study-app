import type { ReactNode } from 'react';
import { Math as MathTex, PageBreak } from '@/components/shared';
import { stage4ChoiceQuestions, stage4BlankQuestions } from './data/stage4-exam';
import type { QuizQuestionData } from '@/types';

// ══════════════════════════════════════════════════════════
// 解析内容（唯一数据源）— 交互 + 打印共用
// 选择题 + 填空题的解析，key = 题目 id
// ══════════════════════════════════════════════════════════

export const stage4Explanations: Record<string, ReactNode> = {
  // ── 选择题 ──
  's4e-c1': (
    <>
      <p className="mt-1">A 错：零向量方向是任意的，不是没有</p>
      <p className="mt-1">B 错：模相等方向不同不是相等向量</p>
      <p className="mt-1">C 错：共线向量方向平行，不一定在同一直线</p>
      <p className="mt-1">D 对：不共线的两个非零向量可以作基底</p>
    </>
  ),
  's4e-c2': (
    <>
      <p className="mt-1"><MathTex tex="2\vec{a}-\vec{b}=2(2,-1)-(-3,4)" /></p>
      <p className="mt-1"><MathTex tex="=(4,-2)-(-3,4)=(7,-6)" /></p>
    </>
  ),
  's4e-c3': (
    <>
      <p className="mt-1">平行条件：<MathTex tex="x_1y_2-x_2y_1=0" /></p>
      <p className="mt-1"><MathTex tex="2\times(-2)-m\times3=0" /></p>
      <p className="mt-1"><MathTex tex="-4-3m=0\Rightarrow m=-\dfrac{4}{3}" /></p>
    </>
  ),
  's4e-c4': (
    <>
      <p className="mt-1"><MathTex tex="\vec{a}+\vec{b}=(1+x,\;3)" /></p>
      <p className="mt-1"><MathTex tex="\vec{a}\perp(\vec{a}+\vec{b})\Rightarrow\vec{a}\cdot(\vec{a}+\vec{b})=0" /></p>
      <p className="mt-1"><MathTex tex="1(1+x)+2\times3=0" /></p>
      <p className="mt-1"><MathTex tex="1+x+6=0\Rightarrow x=-7" /></p>
    </>
  ),
  's4e-c5': (
    <>
      <p className="mt-1"><MathTex tex="\vec{a}\cdot\vec{b}=\sqrt{3}+\sqrt{3}=2\sqrt{3}" /></p>
      <p className="mt-1"><MathTex tex="|\vec{a}|=2,\;|\vec{b}|=2" /></p>
      <p className="mt-1"><MathTex tex="\cos\theta=\dfrac{2\sqrt{3}}{4}=\dfrac{\sqrt{3}}{2}\Rightarrow\theta=30\degree" /></p>
    </>
  ),
  's4e-c6': (
    <>
      <p className="mt-1"><MathTex tex="|\vec{a}-2\vec{b}|^2=|\vec{a}|^2-4\vec{a}\cdot\vec{b}+4|\vec{b}|^2" /></p>
      <p className="mt-1"><MathTex tex="=4-4(-1)+4=12" /></p>
      <p className="mt-1"><MathTex tex="|\vec{a}-2\vec{b}|=2\sqrt{3}" /></p>
    </>
  ),
  's4e-c7': (
    <>
      <p className="mt-1"><MathTex tex="\vec{a}\perp(\vec{a}-2\vec{b})\Rightarrow|\vec{a}|^2-2\vec{a}\cdot\vec{b}=0" /></p>
      <p className="mt-1"><MathTex tex="4-2\vec{a}\cdot\vec{b}=0\Rightarrow\vec{a}\cdot\vec{b}=2" /></p>
      <p className="mt-1"><MathTex tex="|\vec{a}-\vec{b}|^2=4-4+1=1" /></p>
    </>
  ),
  's4e-c8': (
    <>
      <p className="mt-1"><MathTex tex="\vec{a}+\lambda\vec{b}=(1+\lambda,\;1-\lambda)" /></p>
      <p className="mt-1"><MathTex tex="\vec{a}+\mu\vec{b}=(1+\mu,\;1-\mu)" /></p>
      <p className="mt-1">垂直：<MathTex tex="2+2\lambda\mu=0\Rightarrow\lambda\mu=-1" /></p>
    </>
  ),

  // ── 填空题 ──
  's4e-b1': (
    <>
      <p className="mt-1"><MathTex tex="\vec{a}+\vec{b}=(1+x,\;3)" /></p>
      <p className="mt-1"><MathTex tex="(1+x)^2+9=10\Rightarrow(1+x)^2=1" /></p>
      <p className="mt-1"><MathTex tex="x=0\text{ 或 }x=-2" /></p>
    </>
  ),
  's4e-b2': (
    <>
      <p className="mt-1">对角线互相平分，AC 中点 = BD 中点</p>
      <p className="mt-1"><MathTex tex="\dfrac{4+x}{2}=\dfrac{1+6}{2}\Rightarrow x=3" /></p>
      <p className="mt-1"><MathTex tex="\dfrac{3+y}{2}=\dfrac{2+7}{2}\Rightarrow y=6" /></p>
    </>
  ),
  's4e-b3': (
    <>
      <p className="mt-1"><MathTex tex="\cos\theta=\dfrac{\vec{a}\cdot\vec{b}}{|\vec{a}||\vec{b}|}=\dfrac{6}{3\times4}=\dfrac{1}{2}" /></p>
    </>
  ),
  's4e-b4': (
    <>
      <p className="mt-1">投影 = <MathTex tex="\dfrac{\vec{a}\cdot\vec{b}}{|\vec{b}|}=\dfrac{3\times1+4\times0}{1}=3" /></p>
    </>
  ),
  's4e-b5': (
    <>
      <p className="mt-1"><MathTex tex="M=\left(\dfrac{1+5}{2},\;\dfrac{3+7}{2}\right)=(3,5)" /></p>
      <p className="mt-1"><MathTex tex="\overrightarrow{OM}=(3,5)" /></p>
    </>
  ),
  's4e-b6': (
    <>
      <p className="mt-1"><MathTex tex="\overrightarrow{AD}=\dfrac{1}{2}\overrightarrow{AB}+\dfrac{1}{2}\overrightarrow{AC}" /></p>
      <p className="mt-1"><MathTex tex="\overrightarrow{AE}=\dfrac{1}{3}\overrightarrow{AB}" /></p>
      <p className="mt-1"><MathTex tex="\overrightarrow{DE}=\overrightarrow{AE}-\overrightarrow{AD}=-\dfrac{1}{6}\overrightarrow{AB}-\dfrac{1}{2}\overrightarrow{AC}" /></p>
    </>
  ),
};

// ══════════════════════════════════════════════════════════
// 打印答案组件 — 布局自由控制，内容从 explanations 取
// ══════════════════════════════════════════════════════════

function AnswerSection({ title, questions, startNum = 1 }: { title: string; questions: QuizQuestionData[]; startNum?: number }) {
  return (
    <div className="mb-5">
      <p className="font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">{title}</p>
      <div className="columns-2 gap-4 text-gray-700" style={{ columnRule: '1px solid #e5e7eb' }}>
        {questions.map((q, i) => (
          <div key={q.id} className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">{startNum + i}.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">
                答案：{q.type === 'blank' ? q.correctAnswer : (q.options?.find(o => o.value === q.correctAnswer)?.label ?? q.correctAnswer)}
              </p>
              {stage4Explanations[q.id] && <div className="mt-1">{stage4Explanations[q.id]}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * 第四阶段考试 — 答案与解析（独立组件）
 *
 * 选择题+填空题从 explanations 对象循环渲染，解答题保持原始 JSX
 */
export function Stage4ExamAnswers() {
  return (
    <section className="mb-8 print-answers">
      <PageBreak label="答案与解析" />
      <h2 className="text-xl font-bold text-gray-900 mb-4">📝 第四阶段考试 — 答案与解析</h2>

      <AnswerSection title="一、选择题" questions={stage4ChoiceQuestions} />
      <AnswerSection title="二、填空题" questions={stage4BlankQuestions} startNum={9} />

      <PageBreak label="解答题答案" />

      {/* ═══════════ 三、解答题（4 题）═══════════ */}
      <div className="mb-5">
        <p className="font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">三、解答题</p>

        <div className="columns-2 gap-6 text-gray-700 [&_.katex]:text-[1.15em]" style={{ columnRule: '1px solid #e5e7eb' }}>

          <div className="mb-4 pb-3 border-b border-gray-200">
            <p className="font-bold text-gray-900 mb-2">15.（12 分）</p>
            <p className="font-bold mt-2">（1）求 <MathTex tex="\vec{a}\cdot\vec{b}" /> 和 <MathTex tex="|\vec{a}+\vec{b}|" /></p>
            <p className="mt-1.5"><MathTex tex="\vec{a}\cdot\vec{b}=1\times3+2\times1=5" /></p>
            <p className="mt-1.5"><MathTex tex="\vec{a}+\vec{b}=(4,3)" /></p>
            <p className="mt-1.5"><MathTex tex="|\vec{a}+\vec{b}|=\sqrt{16+9}=5" /></p>

            <p className="font-bold mt-3">（2）求 <MathTex tex="t" /></p>
            <p className="mt-1.5"><MathTex tex="\vec{c}=\vec{a}+t\vec{b}=(1+3t,\;2+t)" /></p>
            <p className="mt-1.5"><MathTex tex="\vec{c}\perp\vec{a}\Rightarrow\vec{c}\cdot\vec{a}=0" /></p>
            <p className="mt-1.5"><MathTex tex="1(1+3t)+2(2+t)=5+5t=0" /></p>
            <p className="mt-1.5"><MathTex tex="t=-1" /></p>

            <p className="font-bold mt-3">（3）求夹角 <MathTex tex="\theta" /></p>
            <p className="mt-1.5"><MathTex tex="|\vec{a}|=\sqrt{5},\;|\vec{b}|=\sqrt{10}" /></p>
            <p className="mt-1.5"><MathTex tex="\cos\theta=\dfrac{5}{\sqrt{5}\times\sqrt{10}}=\dfrac{\sqrt{2}}{2}" /></p>
            <p className="mt-1.5"><MathTex tex="\therefore\theta=45\degree" /></p>
          </div>

          <div className="mb-4 pb-3 border-b border-gray-200">
            <p className="font-bold text-gray-900 mb-2">16.（12 分）</p>
            <p className="font-bold mt-2">（1）求 <MathTex tex="C" /> 和 <MathTex tex="O" /> 的坐标</p>
            <p className="mt-1.5"><MathTex tex="\overrightarrow{AB}=(4,2),\;\overrightarrow{AD}=(1,3)" /></p>
            <p className="mt-1.5"><MathTex tex="\overrightarrow{AC}=\overrightarrow{AB}+\overrightarrow{AD}=(5,5)" /></p>
            <p className="mt-1.5"><MathTex tex="\Rightarrow C(5,5)" /></p>
            <p className="mt-1.5"><MathTex tex="O=\text{AC 中点}=\left(\dfrac{5}{2},\;\dfrac{5}{2}\right)" /></p>

            <p className="font-bold mt-3">（2）求 <MathTex tex="\overrightarrow{AC}\cdot\overrightarrow{BD}" /></p>
            <p className="mt-1.5"><MathTex tex="\overrightarrow{BD}=D-B=(-3,1)" /></p>
            <p className="mt-1.5"><MathTex tex="\overrightarrow{AC}\cdot\overrightarrow{BD}=5(-3)+5(1)=-10" /></p>

            <p className="font-bold mt-3">（3）求 <MathTex tex="P" /> 的坐标</p>
            <p className="mt-1.5">设 <MathTex tex="P=A+t\overrightarrow{AB}=(4t,\;2t)" /></p>
            <p className="mt-1.5"><MathTex tex="\overrightarrow{DP}=(4t-1,\;2t-3)" /></p>
            <p className="mt-1.5"><MathTex tex="\overrightarrow{DP}\perp\overrightarrow{AB}" />：<MathTex tex="4(4t-1)+2(2t-3)=0" /></p>
            <p className="mt-1.5"><MathTex tex="20t-10=0\Rightarrow t=\dfrac{1}{2}" /></p>
            <p className="mt-1.5"><MathTex tex="\therefore P=(2,\;1)" /></p>
          </div>

          <div className="mb-4 pb-3 border-b border-gray-200">
            <p className="font-bold text-gray-900 mb-2">17.（13 分）</p>
            <p className="font-bold mt-2">（1）判断直角三角形</p>
            <p className="mt-1.5"><MathTex tex="\overrightarrow{AB}=(4,2),\;\overrightarrow{AC}=(2,6)" /></p>
            <p className="mt-1.5"><MathTex tex="\overrightarrow{AB}\cdot\overrightarrow{AC}=8+12=20\neq0" /></p>
            <p className="mt-1.5"><MathTex tex="\overrightarrow{BC}=(-2,4)" /></p>
            <p className="mt-1.5"><MathTex tex="\overrightarrow{AB}\cdot\overrightarrow{BC}=4(-2)+2(4)=0" /></p>
            <p className="mt-1.5"><MathTex tex="\therefore\angle ABC=90\degree" />，是直角三角形</p>

            <p className="font-bold mt-3">（2）求 <MathTex tex="|\overrightarrow{AM}|" /></p>
            <p className="mt-1.5"><MathTex tex="M=\left(\dfrac{6+4}{2},\;\dfrac{3+7}{2}\right)=(5,5)" /></p>
            <p className="mt-1.5"><MathTex tex="\overrightarrow{AM}=(3,4)" /></p>
            <p className="mt-1.5"><MathTex tex="|\overrightarrow{AM}|=\sqrt{9+16}=5" /></p>

            <p className="font-bold mt-3">（3）求 <MathTex tex="\cos\angle BAC" /></p>
            <p className="mt-1.5"><MathTex tex="|\overrightarrow{AB}|=2\sqrt{5},\;|\overrightarrow{AC}|=2\sqrt{10}" /></p>
            <p className="mt-1.5"><MathTex tex="\cos\angle BAC=\dfrac{20}{2\sqrt{5}\times2\sqrt{10}}=\dfrac{\sqrt{2}}{2}" /></p>
            <p className="mt-1.5"><MathTex tex="\therefore\angle BAC=45\degree" /></p>
          </div>

          <div className="mb-4 pb-3 border-b border-gray-200">
            <p className="font-bold text-gray-900 mb-2">18.（13 分）</p>
            <p className="font-bold mt-2">（1）用 <MathTex tex="\vec{a},\vec{b}" /> 表示</p>
            <p className="mt-1.5"><MathTex tex="\overrightarrow{OM}=\dfrac{1}{2}\vec{a}" /></p>
            <p className="mt-1.5"><MathTex tex="\overrightarrow{ON}=\vec{a}+\dfrac{1}{3}(\vec{b}-\vec{a})=\dfrac{2}{3}\vec{a}+\dfrac{1}{3}\vec{b}" /></p>

            <p className="font-bold mt-3">（2）求 <MathTex tex="\overrightarrow{MN}" /></p>
            <p className="mt-1.5"><MathTex tex="\overrightarrow{MN}=\overrightarrow{ON}-\overrightarrow{OM}" /></p>
            <p className="mt-1.5"><MathTex tex="=\dfrac{2}{3}\vec{a}+\dfrac{1}{3}\vec{b}-\dfrac{1}{2}\vec{a}=\dfrac{1}{6}\vec{a}+\dfrac{1}{3}\vec{b}" /></p>

            <p className="font-bold mt-3">（3）证明不平行</p>
            <p className="mt-1.5">若 <MathTex tex="\overrightarrow{MN}\parallel\overrightarrow{OB}" />，则 <MathTex tex="\overrightarrow{MN}=k\vec{b}" /></p>
            <p className="mt-1.5">需 <MathTex tex="\vec{a}" /> 系数 <MathTex tex="\dfrac{1}{6}=0" />，矛盾</p>
            <p className="mt-1.5"><MathTex tex="\therefore MN" /> 与 <MathTex tex="OB" /> 不平行</p>
          </div>

        </div>
      </div>

    </section>
  );
}
