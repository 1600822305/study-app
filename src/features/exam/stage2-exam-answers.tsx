import type { ReactNode } from 'react';
import { Math as MathTex, PageBreak } from '@/components/shared';
import {
  stage2InequalityQuestions,
  stage2QuadraticQuestions,
} from './data/stage2-exam';
import type { QuizQuestionData } from '@/types';

// ══════════════════════════════════════════════════════════
// 解析内容（唯一数据源）— 交互 + 打印共用
// ══════════════════════════════════════════════════════════

export const stage2Explanations: Record<string, ReactNode> = {
  // ── 一、不等式 ──
  's2e-i1': (
    <>
      <p className="mt-1"><MathTex tex="a > b > 0" /> 两边同为正</p>
      <p className="mt-1"><MathTex tex="a - b > 0" /> 显然成立</p>
    </>
  ),
  's2e-i2': (
    <>
      <p className="mt-1">分子分母同号时分式 &gt; 0</p>
      <p className="mt-1">① <MathTex tex="x-1>0" /> 且 <MathTex tex="x+2>0\Rightarrow x>1" /></p>
      <p className="mt-1">② <MathTex tex="x-1<0" /> 且 <MathTex tex="x+2<0\Rightarrow x<-2" /></p>
      <p className="mt-1">解集：<MathTex tex="x>1" /> 或 <MathTex tex="x<-2" /></p>
    </>
  ),
  's2e-i3': (
    <>
      <p className="mt-1">基本不等式：<MathTex tex="a+b\geq2\sqrt{ab}" /></p>
      <p className="mt-1"><MathTex tex="4\geq2\sqrt{ab}\Rightarrow\sqrt{ab}\leq2\Rightarrow ab\leq4" /></p>
      <p className="mt-1">等号条件：<MathTex tex="a=b=2" /> 时取到</p>
    </>
  ),
  's2e-i4': (
    <>
      <p className="mt-1">基本不等式：<MathTex tex="x+\dfrac{1}{x}\geq2\sqrt{x\cdot\dfrac{1}{x}}=2" /></p>
      <p className="mt-1">等号条件：<MathTex tex="x=\dfrac{1}{x}\Rightarrow x=1" /> 时取到</p>
    </>
  ),
  's2e-i5': (
    <>
      <p className="mt-1"><MathTex tex="x^2-5x+6=(x-2)(x-3)>0" /></p>
      <p className="mt-1"><MathTex tex="x>3" /> 或 <MathTex tex="x<2" /></p>
    </>
  ),
  's2e-i6': (
    <>
      <p className="mt-1"><MathTex tex="a>b" /> 两边乘 <MathTex tex="c<0" />，不等号变向</p>
      <p className="mt-1"><MathTex tex="\therefore ac<bc" /></p>
      <p className="mt-1">A、C 除以负数也变向，D 减法不变向方向反了</p>
    </>
  ),
  's2e-i7': (
    <>
      <p className="mt-1">恒成立 → <MathTex tex="\Delta\leq0" /></p>
      <p className="mt-1"><MathTex tex="\Delta=m^2-4\leq0\Rightarrow-2\leq m\leq2" /></p>
    </>
  ),
  's2e-i8': (
    <>
      <p className="mt-1">1 的代换：<MathTex tex="a+b=(a+b)\!\left(\dfrac{1}{a}+\dfrac{4}{b}\right)" /></p>
      <p className="mt-1"><MathTex tex="=1+\dfrac{4a}{b}+\dfrac{b}{a}+4=5+\dfrac{4a}{b}+\dfrac{b}{a}" /></p>
      <p className="mt-1"><MathTex tex="\geq5+2\sqrt{\dfrac{4a}{b}\cdot\dfrac{b}{a}}=5+4=9" /></p>
      <p className="mt-1">等号：<MathTex tex="\dfrac{4a}{b}=\dfrac{b}{a}\Rightarrow b=2a" />，代入得 <MathTex tex="a=\dfrac{1}{3},\;b=\dfrac{2}{3}" /></p>
    </>
  ),

  // ── 二、二次函数 ──
  's2e-q1': (
    <>
      <p className="mt-1"><MathTex tex="f(x)=(x-2)^2-1" /></p>
      <p className="mt-1">顶点 <MathTex tex="(2,-1)" /></p>
    </>
  ),
  's2e-q2': (
    <>
      <p className="mt-1">开口向下：<MathTex tex="a<0" /></p>
      <p className="mt-1">对称轴 <MathTex tex="x=-\dfrac{b}{2a}=1\Rightarrow b=-2a" /></p>
      <p className="mt-1"><MathTex tex="a<0\Rightarrow b=-2a>0" /></p>
    </>
  ),
  's2e-q3': (
    <>
      <p className="mt-1">韦达定理：<MathTex tex="x_1+x_2=-\dfrac{b}{a}=-\dfrac{-3}{2}=\dfrac{3}{2}" /></p>
    </>
  ),
  's2e-q4': (
    <>
      <p className="mt-1">韦达定理：<MathTex tex="x_1+x_2=3,\;x_1x_2=1" /></p>
      <p className="mt-1"><MathTex tex="x_1^2+x_2^2=(x_1+x_2)^2-2x_1x_2=9-2=7" /></p>
    </>
  ),
  's2e-q5': (
    <>
      <p className="mt-1"><MathTex tex="f(x)=-(x-1)^2+4" />，顶点 <MathTex tex="(1,4)" /></p>
      <p className="mt-1"><MathTex tex="x=1\in[0,3]" />，最大值 <MathTex tex="f(1)=4" /></p>
    </>
  ),
  's2e-q6': (
    <>
      <p className="mt-1">两不等实根：<MathTex tex="\Delta>0" /></p>
      <p className="mt-1"><MathTex tex="\Delta=4-4k>0\Rightarrow k<1" /></p>
    </>
  ),
  's2e-q7': (
    <>
      <p className="mt-1">韦达定理：<MathTex tex="b=-(x_1+x_2)=-(-1+3)=-2" /></p>
      <p className="mt-1"><MathTex tex="c=x_1\cdot x_2=(-1)\times3=-3" /></p>
      <p className="mt-1"><MathTex tex="b+c=-2+(-3)=-5" /></p>
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
                答案：{q.options?.find(o => o.value === q.correctAnswer)?.label ?? q.correctAnswer}
              </p>
              {stage2Explanations[q.id] && <div className="mt-1">{stage2Explanations[q.id]}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * 第二阶段考试 — 答案与解析（独立组件）
 */
export function Stage2ExamAnswers() {
  return (
    <section className="mb-8 print-answers">
      <PageBreak label="答案与解析" />
      <h2 className="text-xl font-bold text-gray-900 mb-4">📝 第二阶段考试 — 答案与解析</h2>

      <AnswerSection title="一、不等式" questions={stage2InequalityQuestions} />
      <AnswerSection title="二、二次函数" questions={stage2QuadraticQuestions} startNum={9} />

      <PageBreak label="解答题答案" />

      {/* ═══════════ 三、综合题（4 题）═══════════ */}
      <div className="mb-5">
        <p className="font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">三、综合题</p>

        <div className="columns-2 gap-6 text-gray-700 [&_.katex]:text-[1.15em]" style={{ columnRule: '1px solid #e5e7eb' }}>

          <div className="mb-4 pb-3 border-b border-gray-200">
            <p className="font-bold text-gray-900 mb-2">16.（15 分）</p>
            <p className="font-bold mt-2">（1）求 <MathTex tex="ab" /> 的最大值</p>
            <p className="mt-1.5"><MathTex tex="2a+b\geq2\sqrt{2ab}=1" /></p>
            <p className="mt-1.5"><MathTex tex="\sqrt{2ab}\leq\dfrac{1}{2}\Rightarrow ab\leq\dfrac{1}{8}" /></p>
            <p className="mt-1.5">等号：<MathTex tex="2a=b,\;4a=1\Rightarrow a=\dfrac{1}{4},\;b=\dfrac{1}{2}" /></p>

            <p className="font-bold mt-3">（2）求 <MathTex tex="\dfrac{2}{a}+\dfrac{1}{b}" /> 的最小值</p>
            <p className="mt-1.5"><MathTex tex="\left(\dfrac{2}{a}+\dfrac{1}{b}\right)(2a+b)=4+\dfrac{2b}{a}+\dfrac{2a}{b}+1" /></p>
            <p className="mt-1.5"><MathTex tex="\geq5+2\sqrt{4}=9" /></p>
            <p className="mt-1.5">等号：<MathTex tex="a=b=\dfrac{1}{3}" /></p>
          </div>

          <div className="mb-4 pb-3 border-b border-gray-200">
            <p className="font-bold text-gray-900 mb-2">17.（15 分）</p>
            <p className="font-bold mt-2">（1）两个正实根</p>
            <p className="mt-1.5">韦达定理：<MathTex tex="x_1+x_2=2a>0,\;x_1x_2=a+2>0" /></p>
            <p className="mt-1.5"><MathTex tex="\Delta=4a^2-4(a+2)\geq0\Rightarrow a^2-a-2\geq0" /></p>
            <p className="mt-1.5"><MathTex tex="(a-2)(a+1)\geq0\Rightarrow a\leq-1" /> 或 <MathTex tex="a\geq2" /></p>
            <p className="mt-1.5">与 <MathTex tex="a>0" /> 取交集：<MathTex tex="a\geq2" /></p>

            <p className="font-bold mt-3">（2）恒成立</p>
            <p className="mt-1.5"><MathTex tex="\Delta\leq0\Rightarrow a^2-a-2\leq0" /></p>
            <p className="mt-1.5"><MathTex tex="-1\leq a\leq2" /></p>
          </div>

          <div className="mb-4 pb-3 border-b border-gray-200">
            <p className="font-bold text-gray-900 mb-2">18.（15 分）</p>
            <p className="font-bold mt-2">（1）求 <MathTex tex="b,c" /></p>
            <p className="mt-1.5"><MathTex tex="x=-1,\;x=3" /> 是 <MathTex tex="x^2+bx+c=0" /> 的两根</p>
            <p className="mt-1.5">韦达：<MathTex tex="-1+3=-b\Rightarrow b=-2" /></p>
            <p className="mt-1.5"><MathTex tex="(-1)\times3=c\Rightarrow c=-3" /></p>

            <p className="font-bold mt-3">（2）解不等式</p>
            <p className="mt-1.5"><MathTex tex="-3x^2-2x+1>0\Rightarrow3x^2+2x-1<0" /></p>
            <p className="mt-1.5"><MathTex tex="(3x-1)(x+1)<0\Rightarrow-1<x<\dfrac{1}{3}" /></p>
          </div>

          <div className="mb-4 pb-3 border-b border-gray-200">
            <p className="font-bold text-gray-900 mb-2">19.（15 分）</p>
            <p className="font-bold mt-2">（1）求两根</p>
            <p className="mt-1.5"><MathTex tex="-x^2+4x-3=0\Rightarrow x^2-4x+3=0" /></p>
            <p className="mt-1.5"><MathTex tex="(x-1)(x-3)=0\Rightarrow x_1=1,\;x_2=3" /></p>

            <p className="font-bold mt-3">（2）<MathTex tex="[0,3]" /> 上最值</p>
            <p className="mt-1.5"><MathTex tex="f(x)=-(x-2)^2+1" />，对称轴 <MathTex tex="x=2\in[0,3]" /></p>
            <p className="mt-1.5">最大值：<MathTex tex="f(2)=1" /></p>
            <p className="mt-1.5"><MathTex tex="f(0)=-3,\;f(3)=0" /></p>
            <p className="mt-1.5">最小值：<MathTex tex="f(0)=-3" /></p>
          </div>

        </div>
      </div>

    </section>
  );
}
