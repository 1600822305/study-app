import type { ReactNode } from 'react';
import { Math as MathTex, PageBreak } from '@/components/shared';
import { piecewisePractice1, piecewiseDomainPractice } from './data/3.1.3/3.1.3-piecewise-practice';
import type { QuizQuestionData } from '@/types';

// ══════════════════════════════════════════════
// 解析内容（唯一数据源）— 交互 + 打印共用
// ══════════════════════════════════════════════

export const piecewiseExplanations: Record<string, ReactNode> = {
  'pw1-1': (
    <>
      <p className="mt-1"><MathTex tex="x = 2 \geqslant 0" />，用第一段</p>
      <p className="text-center mt-1"><MathTex tex="f(2) = 2^2 - 1 = 4 - 1 = 3" /></p>
      <p className="mt-1">结论：<MathTex tex="f(2) = 3" />。</p>
    </>
  ),
  'pw1-2': (
    <>
      <p className="mt-1"><MathTex tex="x = -1 < 0" />，用第二段</p>
      <p className="text-center mt-1"><MathTex tex="f(-1) = 2 \times (-1) + 3 = -2 + 3 = 1" /></p>
      <p className="mt-1">结论：<MathTex tex="f(-1) = 1" />。</p>
    </>
  ),
  'pw1-3': (
    <>
      <p className="mt-1"><strong>情况一：</strong>设 <MathTex tex="a \geqslant 0" />，用第一段</p>
      <p className="text-center mt-1"><MathTex tex="a^2 - 1 = 8 \Rightarrow a^2 = 9 \Rightarrow a = \pm 3" /></p>
      <p className="mt-1">因为 <MathTex tex="a \geqslant 0" />，所以 <MathTex tex="a = 3" /> 满足，<MathTex tex="a = -3" /> 舍去</p>
      <p className="mt-1"><strong>情况二：</strong>设 <MathTex tex="a < 0" />，用第二段</p>
      <p className="text-center mt-1"><MathTex tex="2a + 3 = 8 \Rightarrow a = \tfrac{5}{2}" /></p>
      <p className="mt-1">因为 <MathTex tex="\tfrac{5}{2} > 0" />，不满足 <MathTex tex="a < 0" />，舍去</p>
      <p className="mt-1">结论：<MathTex tex="a = 3" />。</p>
    </>
  ),
  'pw1-4': (
    <>
      <p className="mt-1"><strong>第一步：</strong>算内层 <MathTex tex="f(-2)" /></p>
      <p className="mt-1"><MathTex tex="-2 < 0" />，用第二段，得 <MathTex tex="f(-2) = 2 \times (-2) + 3 = -1" /></p>
      <p className="mt-1"><strong>第二步：</strong>算外层 <MathTex tex="f(-1)" /></p>
      <p className="mt-1"><MathTex tex="-1 < 0" />，用第二段，得 <MathTex tex="f(-1) = 2 \times (-1) + 3 = 1" /></p>
      <p className="mt-1">结论：<MathTex tex="f(f(-2)) = 1" />。</p>
    </>
  ),
  'pw3-1': (
    <>
      <p className="mt-1"><strong>定义域：</strong>第一段 <MathTex tex="[-2,\,1)" />，第二段 <MathTex tex="[1,\,3]" />，并集 <MathTex tex="[-2,\,3]" /></p>
      <p className="mt-1"><strong>值域：</strong></p>
      <p className="mt-1">第一段 <MathTex tex="x+3" />：代入左端 <MathTex tex="x=-2" /> 得 <MathTex tex="y=1" />，代入右端 <MathTex tex="x=1" /> 得 <MathTex tex="y=4" />（取不到），递增，值域 <MathTex tex="[1,\,4)" /></p>
      <p className="mt-1">第二段 <MathTex tex="-2x+6" />：代入左端 <MathTex tex="x=1" /> 得 <MathTex tex="y=4" />，代入右端 <MathTex tex="x=3" /> 得 <MathTex tex="y=0" />，递减，值域 <MathTex tex="[0,\,4]" /></p>
      <p className="mt-1">并集 <MathTex tex="[1,\,4) \cup [0,\,4] = [0,\,4]" /></p>
      <p className="mt-1">结论：定义域 <MathTex tex="[-2,\,3]" />，值域 <MathTex tex="[0,\,4]" />。</p>
    </>
  ),
  'pw3-2': (
    <>
      <p className="mt-1"><strong>定义域：</strong>第一段 <MathTex tex="[0,\,2)" />，第二段 <MathTex tex="[2,\,5]" />，并集 <MathTex tex="[0,\,5]" /></p>
      <p className="mt-1"><strong>值域：</strong></p>
      <p className="mt-1">第一段 <MathTex tex="3x" />：代入左端 <MathTex tex="x=0" /> 得 <MathTex tex="y=0" />，代入右端 <MathTex tex="x=2" /> 得 <MathTex tex="y=6" />（取不到），递增，值域 <MathTex tex="[0,\,6)" /></p>
      <p className="mt-1">第二段 <MathTex tex="-x+8" />：代入左端 <MathTex tex="x=2" /> 得 <MathTex tex="y=6" />，代入右端 <MathTex tex="x=5" /> 得 <MathTex tex="y=3" />，递减，值域 <MathTex tex="[3,\,6]" /></p>
      <p className="mt-1">并集 <MathTex tex="[0,\,6) \cup [3,\,6] = [0,\,6]" /></p>
      <p className="mt-1">结论：定义域 <MathTex tex="[0,\,5]" />，值域 <MathTex tex="[0,\,6]" />。</p>
    </>
  ),
};

// ══════════════════════════════════════════════
// 打印答案组件
// ══════════════════════════════════════════════

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
                答案：{q.options?.find(o => o.value === q.correctAnswer)?.label ?? q.correctAnswer}
              </p>
              {piecewiseExplanations[q.id] && <div className="mt-1">{piecewiseExplanations[q.id]}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PiecewiseAnswers() {
  return (
    <section className="mb-8 print-answers">
      <PageBreak label="答案与解析" />
      <h2 className="text-xl font-bold text-gray-900 mb-4">📝 3.1.3 分段函数 — 答案与解析</h2>
      <AnswerSection title="一、求分段函数的值（填空）" questions={piecewisePractice1} />
      <AnswerSection title="二、定义域与值域（填空）" questions={piecewiseDomainPractice} />
    </section>
  );
}
