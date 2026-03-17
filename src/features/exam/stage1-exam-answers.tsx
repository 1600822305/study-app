import type { ReactNode } from 'react';
import { Math as MathTex, PageBreak } from '@/components/shared';
import {
  stage1ComplexQuestions,
  stage1SetsQuestions,
  stage1LogicQuestions,
} from './data/stage1-exam';
import type { QuizQuestionData } from '@/types';

// ══════════════════════════════════════════════════════════
// 解析内容（唯一数据源）— 交互 + 打印共用
// ══════════════════════════════════════════════════════════

export const stage1Explanations: Record<string, ReactNode> = {
  // ── 一、复数 ──
  's1e-c1': (
    <>
      <p className="mt-1"><MathTex tex="\dfrac{1+3i}{1-i}=\dfrac{(1+3i)(1+i)}{(1-i)(1+i)}=\dfrac{1+i+3i+3i^2}{1-i^2}" /></p>
      <p className="mt-1"><MathTex tex="=\dfrac{1+4i-3}{2}=\dfrac{-2+4i}{2}=-1+2i" /></p>
      <p className="mt-1">虚部为 <MathTex tex="2" /></p>
    </>
  ),
  's1e-c2': (
    <>
      <p className="mt-1"><MathTex tex="i^1=i,\;i^2=-1,\;i^3=-i,\;i^4=1" /></p>
      <p className="mt-1"><MathTex tex="i+(-1)+(-i)+1=0" /></p>
    </>
  ),
  's1e-c3': (
    <>
      <p className="mt-1"><MathTex tex="(2-i)(1+i)=2+2i-i-i^2=2+i+1=3+i" /></p>
      <p className="mt-1">对应点 <MathTex tex="(3,1)" />，在第一象限</p>
    </>
  ),
  's1e-c4': (
    <>
      <p className="mt-1"><MathTex tex="z\cdot\bar{z}=(a+bi)(a-bi)=a^2-(bi)^2=a^2+b^2" /></p>
      <p className="mt-1">即 <MathTex tex="|z|^2=a^2+b^2" /></p>
    </>
  ),
  's1e-c5': (
    <>
      <p className="mt-1"><MathTex tex="|z|^2=3^2+b^2=9+b^2=25" /></p>
      <p className="mt-1"><MathTex tex="b^2=16,\;b>0\Rightarrow b=4" /></p>
    </>
  ),
  's1e-c6': (
    <>
      <p className="mt-1"><MathTex tex="\dfrac{a+i}{i}=\dfrac{(a+i)(-i)}{i\cdot(-i)}=\dfrac{-ai+1}{1}=1-ai" /></p>
      <p className="mt-1"><MathTex tex="1-ai=1+i\Rightarrow -a=1\Rightarrow a=-1" /></p>
    </>
  ),
  's1e-c7': (
    <>
      <p className="mt-1">纯虚数：实部 <MathTex tex="=0" />，虚部 <MathTex tex="\neq0" /></p>
      <p className="mt-1"><MathTex tex="m^2-1=0\Rightarrow m=\pm1" /></p>
      <p className="mt-1"><MathTex tex="m+1\neq0\Rightarrow m\neq-1" /></p>
      <p className="mt-1"><MathTex tex="\therefore m=1" /></p>
    </>
  ),
  's1e-c8': (
    <>
      <p className="mt-1"><MathTex tex="\bar{z}_2=3+4i" /></p>
      <p className="mt-1"><MathTex tex="z_1+\bar{z}_2=(1+2i)+(3+4i)=4+6i" /></p>
    </>
  ),

  // ── 二、集合 ──
  's1e-s1': (
    <>
      <p className="mt-1"><MathTex tex="A\cap B" /> 取公共元素</p>
      <p className="mt-1"><MathTex tex="\{1,2,4\}\cap\{2,4,5\}=\{2,4\}" /></p>
    </>
  ),
  's1e-s2': (
    <>
      <p className="mt-1"><MathTex tex="\complement_U A = U \setminus A" /></p>
      <p className="mt-1"><MathTex tex="=\{1,2,3,4,5\}\setminus\{1,3,5\}=\{2,4\}" /></p>
    </>
  ),
  's1e-s3': (
    <>
      <p className="mt-1"><MathTex tex="A:\;x^2-3x+2=0\Rightarrow(x-1)(x-2)=0\Rightarrow A=\{1,2\}" /></p>
      <p className="mt-1"><MathTex tex="B:\;x^2-2x=0\Rightarrow x(x-2)=0\Rightarrow B=\{0,2\}" /></p>
      <p className="mt-1"><MathTex tex="A\cup B=\{0,1,2\}" /></p>
    </>
  ),
  's1e-s4': (
    <>
      <p className="mt-1"><MathTex tex="A=[1,3),\;B=(2,5]" /></p>
      <p className="mt-1">取交集：<MathTex tex="A\cap B=(2,3)" /></p>
    </>
  ),
  's1e-s5': (
    <>
      <p className="mt-1"><MathTex tex="A=\{x\mid x\geq1\}=[1,+\infty)" /></p>
      <p className="mt-1"><MathTex tex="\complement_U A=(-\infty,1)=\{x\mid x<1\}" /></p>
    </>
  ),
  's1e-s6': (
    <>
      <p className="mt-1">含 <MathTex tex="n" /> 个元素的集合有 <MathTex tex="2^n" /> 个子集</p>
      <p className="mt-1"><MathTex tex="n=2\Rightarrow 2^2=4" /></p>
      <p className="mt-1">子集：<MathTex tex="\emptyset,\{1\},\{2\},\{1,2\}" /></p>
    </>
  ),
  's1e-s7': (
    <>
      <p className="mt-1"><MathTex tex="A=(-1,2],\;B=(-\infty,1]" /></p>
      <p className="mt-1"><MathTex tex="B" /> 包含 <MathTex tex="(-\infty,-1]" /> 部分，<MathTex tex="A" /> 补上 <MathTex tex="(1,2]" /></p>
      <p className="mt-1"><MathTex tex="A\cup B=(-\infty,2]" /></p>
    </>
  ),
  's1e-s8': (
    <>
      <p className="mt-1"><MathTex tex="x^2-x-6\leq0\Rightarrow(x-3)(x+2)\leq0" /></p>
      <p className="mt-1"><MathTex tex="-2\leq x\leq3\Rightarrow A=[-2,3]" /></p>
    </>
  ),
  's1e-s9': (
    <>
      <p className="mt-1"><MathTex tex="A\cap B=A" /> 说明 <MathTex tex="A" /> 的元素都在 <MathTex tex="B" /> 中</p>
      <p className="mt-1"><MathTex tex="\therefore A\subseteq B" /></p>
    </>
  ),
  's1e-s10': (
    <>
      <p className="mt-1"><MathTex tex="A\subseteq B" /> 即 <MathTex tex="\{x\mid x>1\}\subseteq\{x\mid x>a\}" /></p>
      <p className="mt-1">需要 <MathTex tex="B" /> 更大（起点更小）：<MathTex tex="a\leq1" /></p>
    </>
  ),

  // ── 三、逻辑用语 ──
  's1e-l1': (
    <>
      <p className="mt-1"><MathTex tex="x=1\Rightarrow x^2=1" /> ✓ 充分</p>
      <p className="mt-1"><MathTex tex="x^2=1\Rightarrow x=\pm1" />，不一定 <MathTex tex="x=1" /> → 不必要</p>
      <p className="mt-1">充分不必要条件</p>
    </>
  ),
  's1e-l2': (
    <>
      <p className="mt-1">原命题：若 <MathTex tex="x>1" />，则 <MathTex tex="x>0" /></p>
      <p className="mt-1">逆否命题：条件和结论同时取反并交换</p>
      <p className="mt-1">若 <MathTex tex="x\leq0" />，则 <MathTex tex="x\leq1" /></p>
    </>
  ),
  's1e-l3': (
    <>
      <p className="mt-1">全称命题的否定：<MathTex tex="\forall\to\exists" />，结论取反</p>
      <p className="mt-1"><MathTex tex="\exists x_0\in\mathbb{R},\;x_0^2<0" /></p>
    </>
  ),
  's1e-l4': (
    <>
      <p className="mt-1"><MathTex tex="x>2\Rightarrow x^2>4" /> ✓ 充分</p>
      <p className="mt-1"><MathTex tex="x^2>4\Rightarrow x>2" /> 或 <MathTex tex="x<-2" /> → 不必要</p>
      <p className="mt-1">充分不必要条件</p>
    </>
  ),
  's1e-l5': (
    <>
      <p className="mt-1"><MathTex tex="\Delta=1-4=-3<0" /></p>
      <p className="mt-1"><MathTex tex="x^2+x+1>0" /> 恒成立，不存在使它 <MathTex tex="<0" /> 的 <MathTex tex="x_0" /></p>
      <p className="mt-1">是假命题</p>
    </>
  ),
  's1e-l6': (
    <>
      <p className="mt-1">否命题：条件和结论同时否定（不交换）</p>
      <p className="mt-1">条件否定：<MathTex tex="x^2+y^2\neq0" /></p>
      <p className="mt-1">结论否定："<MathTex tex="x=0" /> 且 <MathTex tex="y=0" />"的否定 → "<MathTex tex="x\neq0" /> 或 <MathTex tex="y\neq0" />"</p>
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
              {stage1Explanations[q.id] && <div className="mt-1">{stage1Explanations[q.id]}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * 第一阶段考试 — 答案与解析（独立组件）
 *
 * 选择题从 explanations 对象循环渲染，解答题保持原始 JSX
 */
export function Stage1ExamAnswers() {
  return (
    <section className="mb-8 print-answers">
      <PageBreak label="答案与解析" />
      <h2 className="text-xl font-bold text-gray-900 mb-4">📝 第一阶段考试 — 答案与解析</h2>

      <AnswerSection title="一、复数" questions={stage1ComplexQuestions} />
      <AnswerSection title="二、集合" questions={stage1SetsQuestions} startNum={9} />
      <AnswerSection title="三、逻辑用语" questions={stage1LogicQuestions} startNum={19} />

      <PageBreak label="解答题答案" />

      {/* ═══════════ 四、综合题（4 题）═══════════ */}
      <div className="mb-5">
        <p className="font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">四、综合题</p>

        <div className="columns-2 gap-6 text-gray-700 [&_.katex]:text-[1.15em]" style={{ columnRule: '1px solid #e5e7eb' }}>

          <div className="mb-4 pb-3 border-b border-gray-200">
            <p className="font-bold text-gray-900 mb-2">25.（12 分）</p>
            <p className="font-bold mt-2">（1）求 <MathTex tex="a" /></p>
            <p className="mt-1.5"><MathTex tex="z=\dfrac{a+2i}{1+i}=\dfrac{(a+2i)(1-i)}{2}=\dfrac{a+2+(2-a)i}{2}" /></p>
            <p className="mt-1.5">纯虚数 → 实部 <MathTex tex="=0" />：<MathTex tex="\dfrac{a+2}{2}=0\Rightarrow a=-2" /></p>
            <p className="mt-1.5">验证虚部 <MathTex tex="=\dfrac{2-(-2)}{2}=2\neq0" /> ✓</p>

            <p className="font-bold mt-3">（2）求 <MathTex tex="|z^2|" /></p>
            <p className="mt-1.5"><MathTex tex="z=2i,\;z^2=-4,\;|z^2|=4" /></p>
          </div>

          <div className="mb-4 pb-3 border-b border-gray-200">
            <p className="font-bold text-gray-900 mb-2">26.（12 分）</p>
            <p className="font-bold mt-2">（1）求 <MathTex tex="a" /></p>
            <p className="mt-1.5">解 <MathTex tex="A" />：<MathTex tex="x^2-2x-3\leq0\Rightarrow A=[-1,3]" /></p>
            <p className="mt-1.5"><MathTex tex="A\cap B=(a,3]=(1,3]\Rightarrow a=1" /></p>

            <p className="font-bold mt-3">（2）求 <MathTex tex="a" /> 的范围</p>
            <p className="mt-1.5"><MathTex tex="A\subseteq B\Rightarrow[-1,3]\subseteq(a,+\infty)" /></p>
            <p className="mt-1.5"><MathTex tex="a<-1\Rightarrow a\in(-\infty,-1)" /></p>
          </div>

          <div className="mb-4 pb-3 border-b border-gray-200">
            <p className="font-bold text-gray-900 mb-2">27.（12 分）</p>
            <p className="font-bold mt-2">（1）<MathTex tex="m=1" /> 时</p>
            <p className="mt-1.5">解 <MathTex tex="p" />：<MathTex tex="P=[-1,3]" /></p>
            <p className="mt-1.5">解 <MathTex tex="q" />：<MathTex tex="(x-1)^2\leq1\Rightarrow Q=[0,2]" /></p>
            <p className="mt-1.5"><MathTex tex="Q\subseteq P" /> 但 <MathTex tex="P\not\subseteq Q" /></p>
            <p className="mt-1.5">∴ <MathTex tex="p" /> 是 <MathTex tex="q" /> 的必要不充分条件</p>

            <p className="font-bold mt-3">（2）求 <MathTex tex="m" /> 的范围</p>
            <p className="mt-1.5"><MathTex tex="p" /> 充分不必要 → <MathTex tex="P\subsetneq Q" /></p>
            <p className="mt-1.5"><MathTex tex="1-m\leq-1" /> 且 <MathTex tex="1+m\geq3\Rightarrow m\geq2" /></p>
            <p className="mt-1.5">不全取等 → <MathTex tex="m>2" /></p>
          </div>

          <div className="mb-4 pb-3 border-b border-gray-200">
            <p className="font-bold text-gray-900 mb-2">28.（12 分）</p>
            <p className="font-bold mt-2">（1）<MathTex tex="a=2" /> 时</p>
            <p className="mt-1.5"><MathTex tex="A=[-2,2],\;B=[1,+\infty)" /></p>
            <p className="mt-1.5"><MathTex tex="\complement_U B=(-\infty,1)" /></p>
            <p className="mt-1.5"><MathTex tex="A\cap(\complement_U B)=[-2,1)" /></p>

            <p className="font-bold mt-3">（2）求 <MathTex tex="a" /> 的范围</p>
            <p className="mt-1.5"><MathTex tex="A\cup B=B\Leftrightarrow A\subseteq B" /></p>
            <p className="mt-1.5"><MathTex tex="[-2,2]\subseteq[\dfrac{a}{2},+\infty)\Rightarrow\dfrac{a}{2}\leq-2\Rightarrow a\leq-4" /></p>
          </div>

        </div>
      </div>

    </section>
  );
}
