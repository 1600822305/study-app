import type { ReactNode } from 'react';
import { Math as MathTex, PageBreak } from '@/components/shared';
import { trigGraphPractice, trigFuncExam } from './data/5.1/5.1-func-questions';
import type { QuizQuestionData } from '@/types';

// ══════════════════════════════════════════════════════════
// 解析内容（唯一数据源）— 交互 + 打印共用
// ══════════════════════════════════════════════════════════

export const trigFuncExplanations: Record<string, ReactNode> = {
  // ── 即时训练 — 图像性质 ──
  'tg-p1': (
    <>
      <p className="mt-2"><MathTex tex="\cos x" /> 在 <MathTex tex="[2k\pi,\;\pi+2k\pi]" /> 上递减</p>
      <p className="mt-2">取 <MathTex tex="k=0" />，得 <MathTex tex="[0,\;\pi]" /></p>
    </>
  ),
  'tg-p2': (
    <>
      <p className="mt-2"><MathTex tex="\sin x" /> 在 <MathTex tex="\left[0,\;\dfrac{\pi}{2}\right]" /> 上递增</p>
      <p className="mt-2"><MathTex tex="\dfrac{\pi}{3} > \dfrac{\pi}{4} \Rightarrow \sin\dfrac{\pi}{3} > \sin\dfrac{\pi}{4}" /></p>
    </>
  ),
  'tg-p3': (
    <>
      <p className="mt-2"><MathTex tex="\cos\dfrac{\pi}{2}=0" />（过零点）→ 对称中心</p>
      <p className="mt-2">cos 的对称中心为 <MathTex tex="\left(\dfrac{\pi}{2}+k\pi,\;0\right)" /></p>
    </>
  ),
  'tg-p4': (
    <>
      <p className="mt-2"><MathTex tex="\sin\dfrac{\pi}{2}=1" />（波峰）→ 对称轴</p>
      <p className="mt-2">sin 的对称轴为 <MathTex tex="x=\dfrac{\pi}{2}+k\pi" />（波峰/波谷处）</p>
    </>
  ),

  // ── 高考真题 & 精华题 ──
  'tf-e1': (
    <>
      <p className="mt-2">由诱导公式：</p>
      <p className="text-center mt-1"><MathTex tex="\sin\!\left(\dfrac{\pi}{2} + \alpha\right) = \cos\alpha" /></p>
      <p className="text-center mt-1"><MathTex tex="\therefore \cos\alpha = \dfrac{3}{5}" /></p>
    </>
  ),
  'tf-e2': (
    <>
      <p className="mt-2">公式 <MathTex tex="T = \dfrac{2\pi}{\omega}" />，其中 <MathTex tex="\omega = 2" /></p>
      <p className="text-center mt-1"><MathTex tex="T = \dfrac{2\pi}{2} = \pi" /></p>
    </>
  ),
  'tf-e3': (
    <>
      <p className="mt-2">令 sin 内层在 <MathTex tex="\left[-\dfrac{\pi}{2},\;\dfrac{\pi}{2}\right]" />：</p>
      <p className="text-center mt-1"><MathTex tex="-\dfrac{\pi}{2} \leq 2x-\dfrac{\pi}{6} \leq \dfrac{\pi}{2}" /></p>
      <p className="mt-2">加 <MathTex tex="\dfrac{\pi}{6}" /> 后除以 2：</p>
      <p className="text-center mt-1"><MathTex tex="-\dfrac{\pi}{6}+k\pi \leq x \leq \dfrac{\pi}{3}+k\pi" /></p>
    </>
  ),
  'tf-e4': (
    <>
      <p className="mt-2"><strong>路线一（先平移后伸缩）：</strong></p>
      <p className="mt-2">(1) <MathTex tex="y=\sin x \xrightarrow{\text{左移 }\frac{\pi}{3}} y=\sin\!\left(x+\dfrac{\pi}{3}\right)" /></p>
      <p className="mt-2">(2) <MathTex tex="\xrightarrow{\text{横坐标}\div 2} y=\sin\!\left(2x+\dfrac{\pi}{3}\right)" /></p>
    </>
  ),
  'tf-e5': (
    <>
      <p className="mt-2">(1) 最大值 = 2 <MathTex tex="\Rightarrow A=2" /></p>
      <p className="mt-2">(2) 相邻最高点距离 = <MathTex tex="T=\pi \Rightarrow \omega=\dfrac{2\pi}{\pi}=2" /></p>
      <p className="mt-2">(3) <MathTex tex="f(0)=2\sin\varphi=1 \Rightarrow \sin\varphi=\dfrac{1}{2} \Rightarrow \varphi=\dfrac{\pi}{6}" /></p>
      <p className="text-center mt-1"><MathTex tex="\therefore f(x)=2\sin\!\left(2x+\dfrac{\pi}{6}\right)" /></p>
    </>
  ),
  'tf-e6': (
    <>
      <p className="mt-2">令 <MathTex tex="2x+\dfrac{\pi}{6}=\dfrac{\pi}{2}+k\pi" /></p>
      <p className="text-center mt-1"><MathTex tex="x=\dfrac{\pi}{6}+\dfrac{k\pi}{2}" /></p>
      <p className="mt-2">取 <MathTex tex="k=0" />，得 <MathTex tex="x=\dfrac{\pi}{6}" /></p>
    </>
  ),
  'tf-e7': (
    <>
      <p className="mt-2"><MathTex tex="x\in\left[0,\dfrac{\pi}{2}\right] \Rightarrow u=2x+\dfrac{\pi}{6}\in\left[\dfrac{\pi}{6},\dfrac{7\pi}{6}\right]" /></p>
      <p className="mt-2">在此范围内 <MathTex tex="\sin u" /> 的最小值在 <MathTex tex="u=\dfrac{7\pi}{6}" /> 处取得：</p>
      <p className="text-center mt-1"><MathTex tex="\sin\dfrac{7\pi}{6}=-\dfrac{1}{2} \Rightarrow f=-1" /></p>
      <p className="mt-2">注意：不是 −2，因为区间内 <MathTex tex="\sin u" /> 没到 −1</p>
    </>
  ),
  'tf-e8': (
    <>
      <p className="mt-2">逐项化简：</p>
      <p className="ml-4 mt-1"><MathTex tex="\sin(\pi-\alpha)=\sin\alpha,\quad \cos(2\pi-\alpha)=\cos\alpha" /></p>
      <p className="ml-4 mt-1"><MathTex tex="\cos(\pi+\alpha)=-\cos\alpha,\quad \sin(\alpha-\pi)=-\sin\alpha" /></p>
      <p className="mt-2">代入原式：</p>
      <p className="text-center mt-1"><MathTex tex="=\sin\alpha\cos\alpha+(-\cos\alpha)(-\sin\alpha)=2\sin\alpha\cos\alpha=\sin 2\alpha" /></p>
    </>
  ),
};

// ══════════════════════════════════════════════════════════
// 打印答案组件 — 布局自由控制，内容从 explanations 取
// ══════════════════════════════════════════════════════════

function AnswerLabel({ q }: { q: QuizQuestionData }) {
  if (q.type === 'blank') {
    return <>答案：<MathTex tex={q.acceptableAnswers?.[0] ?? q.correctAnswer} /></>;
  }
  const opt = q.options?.find(o => o.value === q.correctAnswer);
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
              <p className="font-bold text-gray-900">
                <AnswerLabel q={q} />
              </p>
              {trigFuncExplanations[q.id] && <div className="mt-1">{trigFuncExplanations[q.id]}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TrigFuncAnswers() {
  return (
    <section className="mb-8 print-answers">
      <PageBreak label="答案与解析" />
      <h2 className="text-xl font-bold text-gray-900 mb-4">📝 5.1 三角函数 — 答案与解析</h2>
      <AnswerSection title="即时训练 — 图像性质" questions={trigGraphPractice} />
      <AnswerSection title="高考真题 & 精华题" questions={trigFuncExam} />
    </section>
  );
}
