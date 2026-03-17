import type { ReactNode } from 'react';
import { Math as MathTex, PageBreak } from '@/components/shared';
import { trigPrereqPractice } from './data/prereq-questions';
import type { QuizQuestionData } from '@/types';

// ══════════════════════════════════════════════════════════
// 解析内容（唯一数据源）— 交互 + 打印共用
// ══════════════════════════════════════════════════════════

export const trigPrereqExplanations: Record<string, ReactNode> = {
  // ── 一、弧度制 ──
  'tp-1': (
    <>
      <p className="mt-2">角度转弧度：乘以 <MathTex tex="\dfrac{\pi}{180}" /></p>
      <p className="text-center mt-1"><MathTex tex="120° = 120 \times \dfrac{\pi}{180} = \dfrac{2\pi}{3}" /></p>
    </>
  ),
  'tp-2': (
    <>
      <p className="mt-2">弧度转角度：乘以 <MathTex tex="\dfrac{180°}{\pi}" /></p>
      <p className="text-center mt-1"><MathTex tex="\dfrac{5\pi}{6} \times \dfrac{180°}{\pi} = \dfrac{5 \times 180°}{6} = 150°" /></p>
    </>
  ),

  // ── 二、单位圆与三角函数定义 ──
  'tp-3': (
    <>
      <p className="mt-2">单位圆上点 <MathTex tex="P = (\cos\theta,\;\sin\theta)" /></p>
      <p className="mt-2">x 坐标 = cos，y 坐标 = sin</p>
    </>
  ),
  'tp-4': (
    <>
      <p className="mt-2">勾股定理：单位圆上 <MathTex tex="x^2 + y^2 = 1" /></p>
      <p className="text-center mt-1"><MathTex tex="\therefore \sin^2\theta + \cos^2\theta = 1" /></p>
    </>
  ),

  // ── 三、特殊角的三角函数值 ──
  'tp-5': (
    <>
      <p className="mt-2">口诀：cos 从大到小（1→0），根号下 4→0 除以 2</p>
      <p className="text-center mt-1"><MathTex tex="\cos 60° = \dfrac{\sqrt{1}}{2} = \dfrac{1}{2}" /></p>
    </>
  ),
  'tp-6': (
    <>
      <p className="mt-2"><MathTex tex="135° = 180° - 45°" /></p>
      <p className="mt-2">诱导公式：<MathTex tex="\sin(180°-\theta) = \sin\theta" /></p>
      <p className="text-center mt-1"><MathTex tex="\sin 135° = \sin 45° = \dfrac{\sqrt{2}}{2}" /></p>
    </>
  ),

  // ── 四、各象限的符号规律 ──
  'tp-7': (
    <>
      <p className="mt-2">口诀：一全正，二正弦，三正切，四余弦</p>
      <p className="mt-2">第三象限：sin−, cos−，但 <MathTex tex="\tan = \dfrac{\sin}{\cos} = \dfrac{(-)}{(-)} = (+)" /></p>
    </>
  ),
  'tp-8': (
    <>
      <p className="mt-2"><MathTex tex="210°" /> 在第三象限（180°~270°）</p>
      <p className="mt-2">第三象限 cos &lt; 0（x 坐标为负）</p>
      <p className="text-center mt-1"><MathTex tex="\therefore \cos 210° < 0" /></p>
    </>
  ),

  // ── 五、函数性质术语 ──
  'tp-9': (
    <>
      <p className="mt-2">递增 = x 增大 → y 也增大（图像在"上坡"）</p>
    </>
  ),
  'tp-10': (
    <>
      <p className="mt-2">波峰/波谷处 = 对称轴（一条竖线，左右折叠重合）</p>
      <p className="mt-2">过零点处 = 对称中心（一个点，旋转 180° 重合）</p>
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
              {trigPrereqExplanations[q.id] && <div className="mt-1">{trigPrereqExplanations[q.id]}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TrigPrereqAnswers() {
  return (
    <section className="mb-8 print-answers">
      <PageBreak label="答案与解析" />
      <h2 className="text-xl font-bold text-gray-900 mb-4">📝 5.0 三角前置知识 — 答案与解析</h2>
      <AnswerSection title="综合练习" questions={trigPrereqPractice} />
    </section>
  );
}
