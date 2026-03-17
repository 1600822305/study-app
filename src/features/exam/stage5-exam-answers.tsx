import type { ReactNode } from 'react';
import { Math as MathTex, PageBreak } from '@/components/shared';
import { stage5ChoiceQuestions, stage5BlankQuestions } from './data/stage5-exam';
import type { QuizQuestionData } from '@/types';

// ══════════════════════════════════════════════════════════
// 解析内容（唯一数据源）— 交互 + 打印共用
// 选择题 + 填空题的解析，key = 题目 id
// ══════════════════════════════════════════════════════════

export const stage5Explanations: Record<string, ReactNode> = {
  // ── 选择题 ──
  's5e-c1': (
    <>
      <p className="mt-1.5"><MathTex tex="\cos(\pi-\alpha)=-\cos\alpha" /></p>
      <p className="mt-1.5"><MathTex tex="\sin\!\left(\dfrac{\pi}{2}-\alpha\right)=\cos\alpha" /></p>
      <p className="mt-1.5"><MathTex tex="\therefore\;\text{原式}=-\cos\alpha+\cos\alpha=0" /></p>
      <p className="mt-1 text-gray-500">与 <MathTex tex="\sin\alpha" /> 的值无关！</p>
    </>
  ),
  's5e-c2': (
    <>
      <p className="mt-1.5"><MathTex tex="\sin 75°=\sin(45°+30°)" /></p>
      <p className="mt-1.5"><MathTex tex="=\dfrac{\sqrt{2}}{2}\cdot\dfrac{\sqrt{3}}{2}+\dfrac{\sqrt{2}}{2}\cdot\dfrac{1}{2}=\dfrac{\sqrt{6}+\sqrt{2}}{4}" /></p>
    </>
  ),
  's5e-c3': (
    <>
      <p className="mt-1">与余弦定理对比：</p>
      <p className="mt-1.5"><MathTex tex="-2bc\cos A=-bc \Rightarrow \cos A=\dfrac{1}{2} \Rightarrow A=60°" /></p>
    </>
  ),
  's5e-c4': (
    <>
      <p className="mt-1.5"><MathTex tex="S=\dfrac{1}{2}\cdot 8\cdot 5\cdot\sin 30°=20\times\dfrac{1}{2}=10" /></p>
    </>
  ),
  's5e-c5': (
    <>
      <p className="mt-1.5"><MathTex tex="\alpha" /> 在第二象限 <MathTex tex="\Rightarrow \cos\alpha=-\dfrac{3}{5}" /></p>
      <p className="mt-1.5"><MathTex tex="\sin 2\alpha=2\cdot\dfrac{4}{5}\cdot\!\left(-\dfrac{3}{5}\right)=-\dfrac{24}{25}" /></p>
    </>
  ),
  's5e-c6': (
    <>
      <p className="mt-1.5"><MathTex tex="\cos^2\alpha-\sin^2\alpha=\cos 2\alpha" />（和差化积）</p>
      <p className="mt-1">而 <MathTex tex="\cos 2\alpha=1-2\sin^2\alpha" />（二倍角余弦第二形式）</p>
      <p className="mt-1">所以 A 和 C 表达的是同一个值，都对。</p>
    </>
  ),
  's5e-c7': (
    <>
      <p className="mt-1">先平移后伸缩：</p>
      <p className="mt-1.5"><MathTex tex="y=\sin x \xrightarrow{\text{左移}\frac{\pi}{3}} \sin\!\left(x+\frac{\pi}{3}\right) \xrightarrow{\text{横}\div 2} \sin\!\left(2x+\frac{\pi}{3}\right)" /></p>
    </>
  ),
  's5e-c8': (
    <>
      <p className="mt-1.5"><MathTex tex="x\in[0,\frac{\pi}{2}] \Rightarrow 2x+\frac{\pi}{6}\in[\frac{\pi}{6},\frac{7\pi}{6}]" /></p>
      <p className="mt-1.5"><MathTex tex="\sin\frac{7\pi}{6}=-\frac{1}{2},\; f_{\min}=2\times\!\left(-\frac{1}{2}\right)=-1" /></p>
      <p className="mt-1">注意不是 <MathTex tex="-2" />，区间内 sin 没到 <MathTex tex="-1" /></p>
    </>
  ),
  's5e-c9': (
    <>
      <p className="mt-1.5"><MathTex tex="\dfrac{\sin B}{b}=\dfrac{\sin A}{a} \Rightarrow \sin B=\dfrac{\sqrt{3}}{2}" /></p>
      <p className="mt-1.5"><MathTex tex="B=60° \text{ 或 } 120°" /></p>
      <p className="mt-1">两者均满足 <MathTex tex="A+B<180°" />，有 2 解</p>
    </>
  ),
  's5e-c10': (
    <>
      <p className="mt-1">tan 函数的对称中心在零点处：</p>
      <p className="mt-1.5"><MathTex tex="\tan\!\left(a-\dfrac{\pi}{3}\right)=0 \Rightarrow a=k\pi+\dfrac{\pi}{3}" /></p>
      <p className="mt-1.5"><MathTex tex="a>0 \Rightarrow a_{\min}=\dfrac{\pi}{3}" /></p>
    </>
  ),

  // ── 填空题 ──
  's5e-b1': (
    <>
      <p className="mt-1.5"><MathTex tex="150°=150\times\dfrac{\pi}{180}=\dfrac{5\pi}{6}" /></p>
    </>
  ),
  's5e-b2': (
    <>
      <p className="mt-1.5"><MathTex tex="T=\dfrac{2\pi}{\omega}=\dfrac{2\pi}{2}=\pi" /></p>
    </>
  ),
  's5e-b3': (
    <>
      <p className="mt-1">半角公式：<MathTex tex="\sin^2\dfrac{\alpha}{2}=\dfrac{1-\cos\alpha}{2}" /></p>
      <p className="mt-1.5"><MathTex tex="=\dfrac{1-\frac{7}{25}}{2}=\dfrac{\frac{18}{25}}{2}=\dfrac{9}{25}" /></p>
      <p className="mt-1.5"><MathTex tex="\alpha\in(0,\pi) \Rightarrow \dfrac{\alpha}{2}\in(0,\dfrac{\pi}{2}) \Rightarrow \sin\dfrac{\alpha}{2}>0" /></p>
      <p className="mt-1.5"><MathTex tex="\therefore \sin\dfrac{\alpha}{2}=\dfrac{3}{5}" /></p>
    </>
  ),
  's5e-b4': (
    <>
      <p className="mt-1">零点 <MathTex tex="x=\dfrac{2k\pi}{\omega}" />，在 <MathTex tex="[0,2\pi]" /> 上恰 3 个：</p>
      <p className="mt-1.5"><MathTex tex="x=0,\;\dfrac{2\pi}{\omega},\;\dfrac{4\pi}{\omega}" /></p>
      <p className="mt-1.5"><MathTex tex="\dfrac{4\pi}{\omega}\leq 2\pi \Rightarrow \omega\geq 2" />；<MathTex tex="\dfrac{6\pi}{\omega}>2\pi \Rightarrow \omega<3" /></p>
    </>
  ),
  's5e-b5': (
    <>
      <p className="mt-1.5"><MathTex tex="R=\sqrt{(\sqrt{3})^2+1^2}=2" /></p>
      <p className="mt-1.5"><MathTex tex="\tan\varphi=\dfrac{1}{\sqrt{3}} \Rightarrow \varphi=\dfrac{\pi}{6}" /></p>
    </>
  ),
  's5e-b6': (
    <>
      <p className="mt-1.5"><MathTex tex="a^2=9+25-2\times 3\times 5\times\cos 60°=34-15=19" /></p>
      <p className="mt-1.5"><MathTex tex="\therefore a=\sqrt{19}" /></p>
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
              {stage5Explanations[q.id] && <div className="mt-1">{stage5Explanations[q.id]}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * 第五阶段考试 — 答案与解析（独立组件）
 *
 * 选择题+填空题从 explanations 对象循环渲染，解答题保持原始 JSX
 */
export function Stage5ExamAnswers() {
  return (
    <section className="mb-8 print-answers">
      <PageBreak label="答案与解析" />
      <h2 className="text-xl font-bold text-gray-900 mb-4">📝 第五阶段考试 — 答案与解析</h2>

      <AnswerSection title="一、选择题" questions={stage5ChoiceQuestions} />
      <AnswerSection title="二、填空题" questions={stage5BlankQuestions} startNum={11} />

      {/* ═══════════ 三、解答题（5 题，每题 8 分）═══════════ */}
      <div className="mb-5">
        <p className="font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">三、解答题</p>

        <div className="columns-2 gap-6 text-gray-700 [&_.katex]:text-[1.15em]" style={{ columnRule: '1px solid #e5e7eb' }}>

          <div className="mb-4 pb-3 border-b border-gray-200">
            <p className="font-bold text-gray-900 mb-2">17.（8 分）</p>
            <p className="font-bold mt-2">（1）化简函数</p>
            <p className="mt-1.5"><MathTex tex="2\sin^2x=1-\cos2x" /></p>
            <p className="mt-1.5"><MathTex tex="f(x)=\sqrt{3}\sin2x-(1-\cos2x)=\sqrt{3}\sin2x+\cos2x-1" /></p>
            <p className="mt-1.5">把前两项化为一个正弦：</p>
            <p className="mt-1.5"><MathTex tex="\sqrt{3}\sin2x+\cos2x=2\sin\!\left(2x+\dfrac{\pi}{6}\right)" /></p>
            <p className="mt-1.5"><MathTex tex="\therefore f(x)=2\sin\!\left(2x+\dfrac{\pi}{6}\right)-1" /></p>

            <p className="font-bold mt-3">（2）求不等式解集</p>
            <p className="mt-1.5"><MathTex tex="f(x)\ge -1 \Rightarrow 2\sin\!\left(2x+\dfrac{\pi}{6}\right)-1\ge -1" /></p>
            <p className="mt-1.5"><MathTex tex="\Rightarrow \sin\!\left(2x+\dfrac{\pi}{6}\right)\ge 0" /></p>
            <p className="mt-1.5"><MathTex tex="2k\pi\le 2x+\dfrac{\pi}{6}\le \pi+2k\pi" /></p>
            <p className="mt-1.5"><MathTex tex="\Rightarrow -\dfrac{\pi}{12}+k\pi\le x\le \dfrac{5\pi}{12}+k\pi\quad(k\in\mathbb{Z})" /></p>

            <p className="font-bold mt-3">（3）求值域</p>
            <p className="mt-1.5"><MathTex tex="x\in\left[0,\dfrac{\pi}{2}\right]\Rightarrow 2x+\dfrac{\pi}{6}\in\left[\dfrac{\pi}{6},\dfrac{7\pi}{6}\right]" /></p>
            <p className="mt-1.5">在这个区间上：</p>
            <p className="mt-1.5"><MathTex tex="\sin\!\left(2x+\dfrac{\pi}{6}\right)\in\left[-\dfrac{1}{2},1\right]" /></p>
            <p className="mt-1.5"><MathTex tex="\therefore f(x)=2\sin\!\left(2x+\dfrac{\pi}{6}\right)-1\in[-2,1]" /></p>
          </div>

          <div className="mb-4 pb-3 border-b border-gray-200">
            <p className="font-bold text-gray-900 mb-2">18.（8 分）</p>
            <p className="font-bold mt-2">（1）求角 <MathTex tex="A" /></p>
            <p className="mt-1.5"><MathTex tex="\sin A\cos C+\cos A\sin C=\sin(A+C)" /></p>
            <p className="mt-1.5">又因为三角形内角和为 <MathTex tex="\pi" />，所以</p>
            <p className="mt-1.5"><MathTex tex="A+C=\pi-B\Rightarrow \sin(A+C)=\sin(\pi-B)=\sin B" /></p>
            <p className="mt-1.5">原式化为</p>
            <p className="mt-1.5"><MathTex tex="2\sin B\cos A=\sin B" /></p>
            <p className="mt-1.5">三角形中 <MathTex tex="\sin B\ne 0" />，故</p>
            <p className="mt-1.5"><MathTex tex="2\cos A=1\Rightarrow \cos A=\dfrac12\Rightarrow A=\dfrac{\pi}{3}" /></p>

            <p className="font-bold mt-3">（2）求 <MathTex tex="b+c" /></p>
            <p className="mt-1.5">由面积公式</p>
            <p className="mt-1.5"><MathTex tex="S=\dfrac12bc\sin A=\sqrt3" /></p>
            <p className="mt-1.5">代入 <MathTex tex="\sin A=\sin\dfrac{\pi}{3}=\dfrac{\sqrt3}{2}" />，得</p>
            <p className="mt-1.5"><MathTex tex="\dfrac12bc\cdot\dfrac{\sqrt3}{2}=\sqrt3\Rightarrow bc=4" /></p>
            <p className="mt-1.5">再由余弦定理</p>
            <p className="mt-1.5"><MathTex tex="a^2=b^2+c^2-2bc\cos A" /></p>
            <p className="mt-1.5">代入 <MathTex tex="a=2,\ bc=4,\ \cos A=\dfrac12" />：</p>
            <p className="mt-1.5"><MathTex tex="4=b^2+c^2-2\times4\times\dfrac12=b^2+c^2-4" /></p>
            <p className="mt-1.5"><MathTex tex="\Rightarrow b^2+c^2=8" /></p>
            <p className="mt-1.5"><MathTex tex="(b+c)^2=b^2+c^2+2bc=8+8=16" /></p>
            <p className="mt-1.5">因为边长为正，所以</p>
            <p className="mt-1.5"><MathTex tex="b+c=4" /></p>
          </div>

          <div className="mb-4 pb-3 border-b border-gray-200">
            <p className="font-bold text-gray-900 mb-2">19.（8 分）</p>
            <p className="font-bold mt-2">（1）求 <MathTex tex="\sin\alpha\cos\alpha" /></p>
            <p className="mt-1.5"><MathTex tex="(\sin\alpha+\cos\alpha)^2=\dfrac13" /></p>
            <p className="mt-1.5"><MathTex tex="\sin^2\alpha+\cos^2\alpha+2\sin\alpha\cos\alpha=\dfrac13" /></p>
            <p className="mt-1.5"><MathTex tex="1+2\sin\alpha\cos\alpha=\dfrac13" /></p>
            <p className="mt-1.5"><MathTex tex="\therefore \sin\alpha\cos\alpha=-\dfrac13" /></p>

            <p className="font-bold mt-3">（2）求 <MathTex tex="\sin\alpha-\cos\alpha" /></p>
            <p className="mt-1.5"><MathTex tex="(\sin\alpha-\cos\alpha)^2=\sin^2\alpha+\cos^2\alpha-2\sin\alpha\cos\alpha" /></p>
            <p className="mt-1.5"><MathTex tex="=1-2\left(-\dfrac13\right)=\dfrac53" /></p>
            <p className="mt-1.5"><MathTex tex="\alpha" /> 在第二象限，所以 <MathTex tex="\sin\alpha>0,\ \cos\alpha<0" />，于是</p>
            <p className="mt-1.5"><MathTex tex="\sin\alpha-\cos\alpha>0" /></p>
            <p className="mt-1.5"><MathTex tex="\therefore \sin\alpha-\cos\alpha=\sqrt{\dfrac53}=\dfrac{\sqrt{15}}{3}" /></p>

            <p className="font-bold mt-3">（3）求原式值</p>
            <p className="mt-1.5"><MathTex tex="\dfrac{\sin\alpha}{1-\frac1{\tan\alpha}}=\dfrac{\sin\alpha}{1-\frac{\cos\alpha}{\sin\alpha}}=\dfrac{\sin^2\alpha}{\sin\alpha-\cos\alpha}" /></p>
            <p className="mt-1.5">由</p>
            <p className="mt-1.5"><MathTex tex="\sin\alpha+\cos\alpha=\dfrac{\sqrt3}{3},\qquad \sin\alpha-\cos\alpha=\dfrac{\sqrt{15}}{3}" /></p>
            <p className="mt-1.5">两式相加得</p>
            <p className="mt-1.5"><MathTex tex="2\sin\alpha=\dfrac{\sqrt3+\sqrt{15}}{3}" /></p>
            <p className="mt-1.5"><MathTex tex="\Rightarrow \sin\alpha=\dfrac{\sqrt3+\sqrt{15}}{6}" /></p>
            <p className="mt-1.5"><MathTex tex="\sin^2\alpha=\dfrac{(\sqrt3+\sqrt{15})^2}{36}=\dfrac{18+6\sqrt5}{36}=\dfrac{3+\sqrt5}{6}" /></p>
            <p className="mt-1.5">所以原式</p>
            <p className="mt-1.5"><MathTex tex="=\dfrac{\frac{3+\sqrt5}{6}}{\frac{\sqrt{15}}{3}}=\dfrac{3+\sqrt5}{2\sqrt{15}}=\dfrac{3\sqrt{15}+5\sqrt3}{30}" /></p>
          </div>

          <div className="mb-4 pb-3 border-b border-gray-200">
            <p className="font-bold text-gray-900 mb-2">20.（8 分）</p>
            <p className="font-bold mt-2">（1）求角 <MathTex tex="C" /></p>
            <p className="mt-1.5">由</p>
            <p className="mt-1.5"><MathTex tex="\cos2A+\cos2B+2\sin C=2" /></p>
            <p className="mt-1.5">把二倍角展开：</p>
            <p className="mt-1.5"><MathTex tex="1-2\sin^2A+1-2\sin^2B+2\sin C=2" /></p>
            <p className="mt-1.5"><MathTex tex="\Rightarrow \sin^2A+\sin^2B=\sin C\qquad (1)" /></p>
            <p className="mt-1.5">若 <MathTex tex="C=\dfrac{\pi}{2}" />，则 <MathTex tex="B=\dfrac{\pi}{2}-A" />，于是</p>
            <p className="mt-1.5"><MathTex tex="\sin^2A+\sin^2B=\sin^2A+\cos^2A=1=\sin\dfrac{\pi}{2}" /></p>
            <p className="mt-1.5">再看第二个条件：</p>
            <p className="mt-1.5"><MathTex tex="\cos A\cos B\sin C=\dfrac14" /></p>
            <p className="mt-1.5">代入 <MathTex tex="B=\dfrac{\pi}{2}-A,\ C=\dfrac{\pi}{2}" /> 得</p>
            <p className="mt-1.5"><MathTex tex="\cos A\sin A=\dfrac14" /></p>
            <p className="mt-1.5"><MathTex tex="\dfrac12\sin2A=\dfrac14\Rightarrow \sin2A=\dfrac12" /></p>
            <p className="mt-1.5">存在满足条件的三角形，因此</p>
            <p className="mt-1.5"><MathTex tex="\therefore C=\dfrac{\pi}{2}" /></p>

            <p className="font-bold mt-3">（2）求 <MathTex tex="AB" /></p>
            <p className="mt-1.5">由面积为 <MathTex tex="\dfrac14" />，且 <MathTex tex="C=\dfrac{\pi}{2}" />，有</p>
            <p className="mt-1.5"><MathTex tex="S=\dfrac12ab\sin C=\dfrac12ab=\dfrac14" /></p>
            <p className="mt-1.5"><MathTex tex="\Rightarrow ab=\dfrac12" /></p>
            <p className="mt-1.5">设斜边 <MathTex tex="AB=c" />，则在直角三角形中</p>
            <p className="mt-1.5"><MathTex tex="a=c\sin A,\qquad b=c\cos A" /></p>
            <p className="mt-1.5"><MathTex tex="ab=c^2\sin A\cos A=\dfrac{c^2}{2}\sin2A" /></p>
            <p className="mt-1.5">又由上面已得 <MathTex tex="\sin2A=\dfrac12" />，所以</p>
            <p className="mt-1.5"><MathTex tex="\dfrac12=\dfrac{c^2}{2}\cdot\dfrac12=\dfrac{c^2}{4}" /></p>
            <p className="mt-1.5"><MathTex tex="\Rightarrow c^2=2\Rightarrow AB=c=\sqrt2" /></p>
          </div>

          <div className="mb-4 pb-3 border-b border-gray-200">
            <p className="font-bold text-gray-900 mb-2">21.（8 分）</p>
            <p className="font-bold mt-2">（1）求 <MathTex tex="\sin A" /></p>
            <p className="mt-1.5"><MathTex tex="A+B=3C,\qquad A+B+C=\pi" /></p>
            <p className="mt-1.5">两式联立：</p>
            <p className="mt-1.5"><MathTex tex="3C+C=\pi\Rightarrow C=\dfrac{\pi}{4}" /></p>
            <p className="mt-1.5">又因为</p>
            <p className="mt-1.5"><MathTex tex="2\sin(A-C)=\sin B" /></p>
            <p className="mt-1.5">而 <MathTex tex="B=\pi-A-C" />，故</p>
            <p className="mt-1.5"><MathTex tex="\sin B=\sin(\pi-A-C)=\sin(A+C)" /></p>
            <p className="mt-1.5">所以</p>
            <p className="mt-1.5"><MathTex tex="2\sin(A-C)=\sin(A+C)" /></p>
            <p className="mt-1.5">展开得</p>
            <p className="mt-1.5"><MathTex tex="2(\sin A\cos C-\cos A\sin C)=\sin A\cos C+\cos A\sin C" /></p>
            <p className="mt-1.5"><MathTex tex="\Rightarrow \sin A\cos C=3\cos A\sin C" /></p>
            <p className="mt-1.5"><MathTex tex="\Rightarrow \tan A=3\tan C=3" /></p>
            <p className="mt-1.5">设直角三角形三边比为 <MathTex tex="3:1:\sqrt{10}" />，则</p>
            <p className="mt-1.5"><MathTex tex="\sin A=\dfrac{3}{\sqrt{10}}=\dfrac{3\sqrt{10}}{10}" /></p>

            <p className="font-bold mt-3">（2）求高 <MathTex tex="h" /></p>
            <p className="mt-1.5">已知 <MathTex tex="c=AB=5,\ C=\dfrac{\pi}{4}" />，由正弦定理得</p>
            <p className="mt-1.5"><MathTex tex="2R=\dfrac{c}{\sin C}=\dfrac{5}{\frac{\sqrt2}{2}}=5\sqrt2" /></p>
            <p className="mt-1.5">由（1）知 <MathTex tex="\sin A=\dfrac{3\sqrt{10}}{10}" />，且由 <MathTex tex="\tan A=3" /> 可得</p>
            <p className="mt-1.5"><MathTex tex="\cos A=\dfrac{\sqrt{10}}{10}" /></p>
            <p className="mt-1.5">因为 <MathTex tex="B=\pi-A-C" />，所以</p>
            <p className="mt-1.5"><MathTex tex="\sin B=\sin(A+C)=\sin A\cos C+\cos A\sin C" /></p>
            <p className="mt-1.5"><MathTex tex="=\dfrac{3\sqrt{10}}{10}\cdot\dfrac{\sqrt2}{2}+\dfrac{\sqrt{10}}{10}\cdot\dfrac{\sqrt2}{2}=\dfrac{2\sqrt5}{5}" /></p>
            <p className="mt-1.5">于是</p>
            <p className="mt-1.5"><MathTex tex="b=2R\sin B=5\sqrt2\cdot\dfrac{2\sqrt5}{5}=2\sqrt{10}" /></p>
            <p className="mt-1.5">高是边 <MathTex tex="b" /> 在边 <MathTex tex="AB" /> 上的竖直分量，所以</p>
            <p className="mt-1.5"><MathTex tex="h=b\sin A=2\sqrt{10}\cdot\dfrac{3\sqrt{10}}{10}=6" /></p>
          </div>

        </div>
      </div>

    </section>
  );
}
