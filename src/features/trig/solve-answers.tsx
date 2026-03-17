import type { ReactNode } from 'react';
import { Math as MathTex, PageBreak } from '@/components/shared';
import { sineLawPractice, cosineLawPractice, areaPractice, comprehensivePractice } from './data/solve-questions';
import type { QuizQuestionData } from '@/types';

// ══════════════════════════════════════════════════════════
// 解析内容（唯一数据源）— 交互 + 打印共用
// ══════════════════════════════════════════════════════════

export const solveTriExplanations: Record<string, ReactNode> = {
  // ── 一、正弦定理训练 ──
  'st-sl-1': (
    <>
      <p>先找对边对角：边 <MathTex tex="a" /> 对角 <MathTex tex="A" />，边 <MathTex tex="b" /> 对角 <MathTex tex="B" /></p>
      <p className="mt-1">由正弦定理：</p>
      <p className="text-center"><MathTex tex="\dfrac{a}{\sin A}=\dfrac{b}{\sin B} \Rightarrow b=\dfrac{a\sin B}{\sin A}" /></p>
      <p className="mt-1">代入 <MathTex tex="a=2,\;A=30°,\;B=45°" />：</p>
      <p className="text-center"><MathTex tex="b=\dfrac{2\cdot\sin 45°}{\sin 30°}=\dfrac{2\cdot\frac{\sqrt{2}}{2}}{\frac{1}{2}}=2\sqrt{2}" /></p>
    </>
  ),
  'st-sl-2': (
    <>
      <p>正弦定理告诉我们：</p>
      <p className="text-center"><MathTex tex="a:b:c = \sin A:\sin B:\sin C" /></p>
      <p className="mt-1">三边都同时乘了同一个数 <MathTex tex="2R" />，比值不变</p>
      <p className="mt-1"><MathTex tex="\therefore a:b:c = 2:3:4" /></p>
    </>
  ),
  'st-sl-3': (
    <>
      <p>由 <MathTex tex="\dfrac{a}{\sin A}=2R" /> 可得 <MathTex tex="a=2R\sin A" /></p>
      <p className="mt-1">代入 <MathTex tex="R=1,\;A=30°" />：</p>
      <p className="text-center"><MathTex tex="a=2\cdot 1\cdot\sin 30°=2\cdot\dfrac{1}{2}=1" /></p>
    </>
  ),
  'st-sl-5': (
    <>
      <p><strong>第①步：</strong>用正弦定理求 <MathTex tex="\sin B" /></p>
      <p className="text-center"><MathTex tex="\dfrac{\sin B}{b}=\dfrac{\sin A}{a} \Rightarrow \sin B=\dfrac{b\sin A}{a}" /></p>
      <p className="text-center"><MathTex tex="=\dfrac{\sqrt{3}\cdot\sin 30°}{1}=\dfrac{\sqrt{3}\cdot\frac{1}{2}}{1}=\dfrac{\sqrt{3}}{2}" /></p>
      <p className="mt-2"><strong>第②步：</strong>判断 <MathTex tex="B" /> 有几个值</p>
      <p className="ml-4 mt-1"><MathTex tex="\sin B=\dfrac{\sqrt{3}}{2}" /> 对应两个角：</p>
      <p className="ml-4"><MathTex tex="B_1=60°" /> 或 <MathTex tex="B_2=120°" /></p>
      <p className="mt-2"><strong>第③步：</strong>检验内角和</p>
      <p className="ml-4 mt-1"><MathTex tex="A+B_1=30°+60°=90°<180°" /> — 成立</p>
      <p className="ml-4"><MathTex tex="A+B_2=30°+120°=150°<180°" /> — 也成立</p>
      <p className="mt-2 font-bold"><MathTex tex="\therefore B" /> 一共有 2 个可能值</p>
    </>
  ),
  'st-sl-6': (
    <>
      <p>已知边 <MathTex tex="b=2" /> 和它的对角 <MathTex tex="B=45°" />，求 <MathTex tex="a" />（对角 <MathTex tex="A=60°" />）</p>
      <p className="mt-1">由正弦定理：</p>
      <p className="text-center"><MathTex tex="a=\dfrac{b\sin A}{\sin B}=\dfrac{2\cdot\sin 60°}{\sin 45°}" /></p>
      <p className="mt-1">分别代入特殊角的值：</p>
      <p className="text-center"><MathTex tex="=\dfrac{2\cdot\dfrac{\sqrt{3}}{2}}{\dfrac{\sqrt{2}}{2}}=\dfrac{\sqrt{3}}{\dfrac{\sqrt{2}}{2}}=\dfrac{2\sqrt{3}}{\sqrt{2}}=\sqrt{6}" /></p>
      <p className="mt-1 font-bold"><MathTex tex="\therefore a=\sqrt{6}" /></p>
    </>
  ),

  // ── 二、余弦定理训练 ──
  'st-cl-1': (
    <>
      <p>已知两边和夹角，直接用余弦定理：</p>
      <p className="text-center"><MathTex tex="a^2=b^2+c^2-2bc\cos A" /></p>
      <p className="text-center"><MathTex tex="=9+25-30\cdot\left(-\dfrac{1}{2}\right)=34+15=49" /></p>
    </>
  ),
  'st-cl-2': (
    <>
      <p>余弦定理求对边 <MathTex tex="a" />：</p>
      <p className="text-center"><MathTex tex="a^2=36+64-96\cdot\dfrac{1}{2}=100-48=52" /></p>
      <p className="text-center"><MathTex tex="\therefore a=\sqrt{52}=2\sqrt{13}" /></p>
    </>
  ),
  'st-cl-3': (
    <>
      <p>已知三边求角，用余弦定理变形：</p>
      <p className="text-center"><MathTex tex="\cos A=\dfrac{b^2+c^2-a^2}{2bc}=\dfrac{9+1-13}{6}=-\dfrac{1}{2}" /></p>
      <p className="mt-1">而 <MathTex tex="\cos 120°=-\dfrac{1}{2}" />，所以 <MathTex tex="A=120°" /></p>
    </>
  ),
  'st-cl-4': (
    <>
      <p>把已知式和余弦定理对比：</p>
      <p className="text-center"><MathTex tex="b^2+c^2-2bc\cos A=b^2+c^2-bc" /></p>
      <p className="text-center"><MathTex tex="\Rightarrow 2\cos A=1 \Rightarrow \cos A=\dfrac{1}{2}" /></p>
      <p className="mt-1"><MathTex tex="\therefore A=60°" /></p>
    </>
  ),
  'st-cl-5': (
    <>
      <p>最大边 <MathTex tex="c=6" />，比较 <MathTex tex="a^2+b^2" /> 与 <MathTex tex="c^2" />：</p>
      <p className="text-center"><MathTex tex="50 > 36 \Rightarrow \cos C > 0 \Rightarrow C < 90°" /></p>
      <p className="mt-1">最大角都小于 90°，所以是锐角三角形</p>
    </>
  ),
  'st-cl-6': (
    <>
      <p>余弦定理变形：</p>
      <p className="text-center"><MathTex tex="\cos C=\dfrac{49+64-169}{112}=\dfrac{-56}{112}=-\dfrac{1}{4}" /></p>
    </>
  ),

  // ── 三、面积公式训练 ──
  'st-ar-1': (
    <>
      <p>面积公式 <MathTex tex="S=\dfrac{1}{2}ab\sin C" />，<MathTex tex="a,b" /> 是夹角 <MathTex tex="C" /> 的两边</p>
      <p className="text-center"><MathTex tex="S=\dfrac{1}{2}\cdot 8\cdot 5\cdot\sin 30°=20\cdot\dfrac{1}{2}=10" /></p>
    </>
  ),
  'st-ar-2': (
    <>
      <p>角 <MathTex tex="A" /> 夹在边 <MathTex tex="b,c" /> 之间：</p>
      <p className="text-center"><MathTex tex="S=\dfrac{1}{2}bc\sin A=\dfrac{1}{2}\cdot 10\cdot 4\cdot\dfrac{3}{5}=12" /></p>
    </>
  ),
  'st-ar-3': (
    <>
      <p>等边三角形每个角都是 <MathTex tex="60°" /></p>
      <p className="text-center"><MathTex tex="S=\dfrac{1}{2}\cdot 4\cdot 4\cdot\sin 60°=8\cdot\dfrac{\sqrt{3}}{2}=4\sqrt{3}" /></p>
    </>
  ),
  'st-ar-4': (
    <>
      <p>由面积公式 <MathTex tex="S=\dfrac{1}{2}ab\sin C" />：</p>
      <p className="text-center"><MathTex tex="6=12\sin C \Rightarrow \sin C=\dfrac{1}{2}" /></p>
    </>
  ),
  'st-ar-5': (
    <>
      <p>已知三边，先求角 <MathTex tex="C" /> 的三角函数：</p>
      <p className="text-center"><MathTex tex="\cos C=\dfrac{25+25-36}{50}=\dfrac{7}{25}" /></p>
      <p className="text-center"><MathTex tex="\sin C=\sqrt{1-\left(\dfrac{7}{25}\right)^2}=\dfrac{24}{25}" /></p>
      <p className="mt-1">再代入面积公式：</p>
      <p className="text-center"><MathTex tex="S=\dfrac{1}{2}\cdot 5\cdot 5\cdot\dfrac{24}{25}=12" /></p>
    </>
  ),
  'st-ar-6': (
    <>
      <p><strong>第①步：</strong>由面积公式求 <MathTex tex="\sin C" /></p>
      <p className="text-center"><MathTex tex="3\sqrt{3}=6\sin C \Rightarrow \sin C=\dfrac{\sqrt{3}}{2}" /></p>
      <p className="mt-1">若 <MathTex tex="C" /> 是锐角则 <MathTex tex="C=60°" />；题目说 <MathTex tex="C" /> 是钝角，所以 <MathTex tex="C=120°" /></p>
      <p className="mt-1"><strong>第②步：</strong>再用余弦定理求 <MathTex tex="c" /></p>
      <p className="text-center"><MathTex tex="c^2=9+16-24\cdot\left(-\dfrac{1}{2}\right)=25+12=37" /></p>
      <p className="text-center"><MathTex tex="\therefore c=\sqrt{37}" /></p>
    </>
  ),

  // ── 四、综合实战训练 ──
  'st-cp-1': (
    <>
      <p><strong>第①步：求角 A</strong></p>
      <p className="ml-4">把已知式和余弦定理 <MathTex tex="a^2=b^2+c^2-2bc\cos A" /> 对比：</p>
      <p className="text-center"><MathTex tex="b^2+c^2-2bc\cos A=b^2+c^2+bc" /></p>
      <p className="text-center"><MathTex tex="\Rightarrow -2bc\cos A=bc \Rightarrow \cos A=-\dfrac{1}{2}" /></p>
      <p className="text-center"><MathTex tex="\therefore A=120°" /></p>
      <p className="mt-1"><strong>第②步：求面积</strong></p>
      <p className="text-center"><MathTex tex="S=\dfrac{1}{2}bc\sin A=\dfrac{1}{2}\cdot 2\cdot 3\cdot\sin 120°=3\cdot\dfrac{\sqrt{3}}{2}=\dfrac{3\sqrt{3}}{2}" /></p>
    </>
  ),
  'st-cp-2': (
    <>
      <p><strong>关键结论：</strong>在三角形中 <MathTex tex="a\cos B+b\cos A=c" />（射影定理）</p>
      <p className="mt-1">代入原式：</p>
      <p className="text-center"><MathTex tex="2\cos C\cdot c=c" /></p>
      <p className="mt-1">三角形边长 <MathTex tex="c>0" />，两边除以 <MathTex tex="c" />：</p>
      <p className="text-center"><MathTex tex="2\cos C=1 \Rightarrow \cos C=\dfrac{1}{2} \Rightarrow C=\dfrac{\pi}{3}" /></p>
    </>
  ),
  'st-cp-3': (
    <>
      <p>由正弦定理 <MathTex tex="\dfrac{a}{\sin A}=2R" /></p>
      <p className="mt-1">题目又给 <MathTex tex="a=2\sin A" />，所以：</p>
      <p className="text-center"><MathTex tex="\dfrac{a}{\sin A}=\dfrac{2\sin A}{\sin A}=2" /></p>
      <p className="text-center"><MathTex tex="\therefore 2R=2 \Rightarrow R=1" /></p>
    </>
  ),
};

// ══════════════════════════════════════════════════════════
// 打印答案组件 — 布局自由控制，内容从 explanations 取
// ══════════════════════════════════════════════════════════

/** 渲染一个 section 的答案列表 */
function AnswerSection({ title, questions, startNum = 1 }: { title: string; questions: QuizQuestionData[]; startNum?: number }) {
  return (
    <div className="mb-5">
      <p className="font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">{title}</p>
      <div className="columns-2 gap-4 text-gray-700" style={{ columnRule: '1px solid #e5e7eb' }}>
        {questions.map((q, i) => (
          <div key={q.id} className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">{startNum + i}.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：{q.options?.find(o => o.value === q.correctAnswer)?.label ?? q.correctAnswer}</p>
              {solveTriExplanations[q.id] && <div className="mt-1">{solveTriExplanations[q.id]}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SolveTriangleAnswers() {
  return (
    <section className="mb-8 print-answers">
      <PageBreak label="答案与解析" />
      <h2 className="text-xl font-bold text-gray-900 mb-4">📝 5.3 解三角形 — 答案与解析</h2>

      <AnswerSection title="一、正弦定理训练" questions={sineLawPractice} />
      <AnswerSection title="二、余弦定理训练" questions={cosineLawPractice} />
      <AnswerSection title="三、面积公式训练" questions={areaPractice} />
      <AnswerSection title="四、综合实战训练" questions={comprehensivePractice} />
    </section>
  );
}
