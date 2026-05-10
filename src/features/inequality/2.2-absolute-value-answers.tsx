import { Math as MathTex, PageBreak } from '@/components/shared';
import type { QuizQuestionData } from '@/types';
import { absDefinitionPractice, absClassifyPractice, absEquationPractice, absInequalityPractice, absTrianglePractice, absParamPractice } from './data/2.2/2.2-absolute-value-practice';

export const absTriangleExplanations: Record<string, React.ReactNode> = {
  'abstri-1': <><p className="mt-2"><MathTex tex="|x-2|+|x+5| = |x-2|+|x-(-5)|" />，表示 <MathTex tex="x" /> 到 <MathTex tex="2" /> 和 <MathTex tex="-5" /> 的距离之和</p><p>当 <MathTex tex="-5 \leq x \leq 2" /> 时，距离之和最小</p><p>最小值 <MathTex tex="= |2-(-5)| = |2+5| = 7" /></p><p><strong>答</strong>：最小值为 <MathTex tex="7" /></p></>,
  'abstri-2': <><p className="mt-2">令 <MathTex tex="u = 2x" />，原式 <MathTex tex="= |u+1|+|u-3| = |u-(-1)|+|u-3|" /></p><p>表示 <MathTex tex="u" /> 到 <MathTex tex="-1" /> 和 <MathTex tex="3" /> 的距离之和</p><p>当 <MathTex tex="-1 \leq u \leq 3" />（即 <MathTex tex="-\dfrac{1}{2} \leq x \leq \dfrac{3}{2}" />）时，距离之和最小</p><p>最小值 <MathTex tex="= |3-(-1)| = |3+1| = 4" /></p><p><strong>答</strong>：最小值为 <MathTex tex="4" /></p></>,
  'abstri-3': <><p className="mt-2">上界：<MathTex tex="|x+5| \leq |x|+5 \leq 3+5 = 8" /></p><p>下界：<MathTex tex="|x+5| \geq 5-|x| \geq 5-3 = 2" /></p><p><strong>答</strong>：<MathTex tex="2 \leq |x+5| \leq 8" /></p></>,
  'abstri-4': <><p className="mt-2">变形凑出 <MathTex tex="x-2" />，得 <MathTex tex="|x+1| = |(x-2)+3|" /></p><p>上界：<MathTex tex="|(x-2)+3| \leq |x-2|+3 \leq 1+3 = 4" /></p><p>下界：<MathTex tex="|(x-2)+3| \geq 3-|x-2| \geq 3-1 = 2" /></p><p><strong>答</strong>：<MathTex tex="2 \leq |x+1| \leq 4" /></p></>,
};

export const absParamExplanations: Record<string, React.ReactNode> = {
  'absparam-1': <><p className="mt-2">定义域 <MathTex tex="x \in \mathbb{R}" />，分界点 <MathTex tex="x = 2" />，<MathTex tex="x = -1" /></p><p>当 <MathTex tex="x < -1" /> 时，<MathTex tex="x-2 < 0" />，<MathTex tex="x+1 < 0" />，则 <MathTex tex="-(x-2)+[-(x+1)] \leq 5" />，得 <MathTex tex="-2x+1 \leq 5" />，解得 <MathTex tex="x \geq -2" /></p><p>取交集得 <MathTex tex="-2 \leq x < -1" /></p><p>当 <MathTex tex="-1 \leq x < 2" /> 时，<MathTex tex="x-2 < 0" />，<MathTex tex="x+1 \geq 0" />，则 <MathTex tex="-(x-2)+(x+1) \leq 5" />，得 <MathTex tex="3 \leq 5" />，恒成立</p><p>当 <MathTex tex="x \geq 2" /> 时，<MathTex tex="x-2 \geq 0" />，<MathTex tex="x+1 > 0" />，则 <MathTex tex="(x-2)+(x+1) \leq 5" />，得 <MathTex tex="2x-1 \leq 5" />，解得 <MathTex tex="x \leq 3" /></p><p>取交集得 <MathTex tex="2 \leq x \leq 3" /></p><p><strong>答</strong>：<MathTex tex="-2 \leq x \leq 3" /></p></>,
  'absparam-2': <><p className="mt-2">分界点 <MathTex tex="x = -1" />，<MathTex tex="x = 4" /></p><p>当 <MathTex tex="x < -1" /> 时，<MathTex tex="x+1 < 0" />，<MathTex tex="x-4 < 0" />，则 <MathTex tex="-(x+1)+[-(x-4)] \geq 7" />，得 <MathTex tex="-2x+3 \geq 7" />，解得 <MathTex tex="x \leq -2" /></p><p>当 <MathTex tex="-1 \leq x \leq 4" /> 时，则 <MathTex tex="(x+1)+[-(x-4)] \geq 7" />，得 <MathTex tex="5 \geq 7" />，不成立</p><p>当 <MathTex tex="x > 4" /> 时，<MathTex tex="x+1 > 0" />，<MathTex tex="x-4 > 0" />，则 <MathTex tex="(x+1)+(x-4) \geq 7" />，得 <MathTex tex="2x-3 \geq 7" />，解得 <MathTex tex="x \geq 5" /></p><p><strong>答</strong>：<MathTex tex="x \leq -2" /> 或 <MathTex tex="x \geq 5" /></p></>,
  'absparam-3': <><p className="mt-2"><MathTex tex="|x+2|+|x-3| = |x-(-2)|+|x-3|" />，表示 <MathTex tex="x" /> 到 <MathTex tex="-2" /> 和 <MathTex tex="3" /> 的距离之和</p><p>最小值 <MathTex tex="= |3-(-2)| = 5" /></p><p>恒成立，则最小值 <MathTex tex="\geq m" />，即 <MathTex tex="5 \geq m" /></p><p><strong>答</strong>：<MathTex tex="m \leq 5" /></p></>,
};

export const absInequalityExplanations: Record<string, React.ReactNode> = {
  'absineq-1': <><p className="mt-2"><strong>小于取中间</strong>：<MathTex tex="|2x-5| < 3" /> 等价于 <MathTex tex="-3 < 2x-5 < 3" /><br />各部分加5：<MathTex tex="2 < 2x < 8" /><br />各部分除以2：<MathTex tex="1 < x < 4" /><br /><strong>答</strong>：<MathTex tex="x \in (1, 4)" /></p></>,
  'absineq-2': <><p className="mt-2"><strong>大于取两边</strong>：<MathTex tex="|x+3| \geq 4" /> 等价于 <MathTex tex="x+3 \geq 4" /> 或 <MathTex tex="x+3 \leq -4" /><br />解得：<MathTex tex="x \geq 1" /> 或 <MathTex tex="x \leq -7" /><br /><strong>答</strong>：<MathTex tex="x \in (-\infty, -7] \cup [1, +\infty)" /></p></>,
  'absineq-3': <><p className="mt-2"><strong>类型三（小于）</strong>：<MathTex tex="|x+2| \leq 3x" />，小于取中间：<MathTex tex="-3x \leq x+2 \leq 3x" /><br />左边：<MathTex tex="-3x \leq x+2" />，得 <MathTex tex="x \geq -\dfrac{1}{2}" /><br />右边：<MathTex tex="x+2 \leq 3x" />，得 <MathTex tex="x \geq 1" /><br />取交集：<MathTex tex="x \geq 1" /><br /><strong>答</strong>：<MathTex tex="x \in [1, +\infty)" /></p></>,
  'absineq-4': <><p className="mt-2"><strong>类型三（大于）</strong>：<MathTex tex="|3x-1| > x+5" />，大于取两边：<MathTex tex="3x-1 > x+5" /> 或 <MathTex tex="3x-1 < -(x+5)" /><br />左边：<MathTex tex="2x > 6" />，得 <MathTex tex="x > 3" /><br />右边：<MathTex tex="4x < -4" />，得 <MathTex tex="x < -1" /><br />取并集：<MathTex tex="x < -1" /> 或 <MathTex tex="x > 3" /><br /><strong>答</strong>：<MathTex tex="x \in (-\infty, -1) \cup (3, +\infty)" /></p></>,
};

export const absEquationExplanations: Record<string, React.ReactNode> = {
  'abseq-2': <><p className="mt-2"><strong>类型二</strong>：<MathTex tex="|x+3|=2x-1" />，拆成两个方程：<br /><MathTex tex="x+3=2x-1" />，得 <MathTex tex="x=4" />，验证 <MathTex tex="2x-1=7>0" /> ✓<br /><MathTex tex="x+3=-(2x-1)" />，得 <MathTex tex="x=-\dfrac{2}{3}" />，验证 <MathTex tex="2x-1=-\dfrac{7}{3}<0" /> ✗ 舍去<br /><strong>答</strong>：<MathTex tex="x=4" /></p></>,
  'abseq-3': <><p className="mt-2"><strong>类型三</strong>：<MathTex tex="|2x-1|=|x+3|" />，里面要么相等，要么互为相反数：<br /><MathTex tex="2x-1=x+3" />，得 <MathTex tex="x=4" /><br /><MathTex tex="2x-1=-(x+3)" />，得 <MathTex tex="3x=-2" />，即 <MathTex tex="x=-\dfrac{2}{3}" /><br /><strong>答</strong>：<MathTex tex="x=4" /> 或 <MathTex tex="x=-\dfrac{2}{3}" /></p></>,
};

export const absClassifyExplanations: Record<string, React.ReactNode> = {
  'absclf-1': <><p className="mt-2"><strong>分界点</strong>：令 <MathTex tex="x+1=0" />，得 <MathTex tex="x=-1" /><br /><strong>当 <MathTex tex="x \geq -1" /></strong> 时，<MathTex tex="x+1 \geq 0" />，去绝对值得 <MathTex tex="(x+1)-2x = -x+1" /><br /><strong>当 <MathTex tex="x < -1" /></strong> 时，<MathTex tex="x+1 < 0" />，去绝对值得 <MathTex tex="-(x+1)-2x = -3x-1" /><br /><strong>结果</strong>：<MathTex tex="|x+1|-2x = \begin{cases} -x+1, & x \geq -1 \\ -3x-1, & x < -1 \end{cases}" /></p></>,
  'absclf-2': <><p className="mt-2"><strong>分界点</strong>：令 <MathTex tex="2x-4=0" />，得 <MathTex tex="x=2" /><br /><strong>当 <MathTex tex="x \geq 2" /></strong> 时，<MathTex tex="2x-4 \geq 0" />，去绝对值得 <MathTex tex="(2x-4)+x = 3x-4" /><br /><strong>当 <MathTex tex="x < 2" /></strong> 时，<MathTex tex="2x-4 < 0" />，去绝对值得 <MathTex tex="-(2x-4)+x = -x+4" /><br /><strong>结果</strong>：<MathTex tex="|2x-4|+x = \begin{cases} 3x-4, & x \geq 2 \\ -x+4, & x < 2 \end{cases}" /></p></>,
};

export const absDefinitionExplanations: Record<string, React.ReactNode> = {
  'absdef-1': <><p className="mt-2"><strong>第一步</strong>：<MathTex tex="|3x-y|=3x-y" />，由定义 <MathTex tex="|t|=t \Leftrightarrow t \geq 0" />，得 <MathTex tex="3x-y \geq 0" />，即 <MathTex tex="y \leq 3x" /> ①<br /><strong>第二步</strong>：<MathTex tex="|x-2y+4|=-(x-2y+4)" />，由定义 <MathTex tex="|t|=-t \Leftrightarrow t \leq 0" />，得 <MathTex tex="x-2y+4 \leq 0" />，即 <MathTex tex="x \leq 2y-4" /> ②<br /><strong>第三步</strong>：由 ① 得 <MathTex tex="x \geq \dfrac{y}{3}" />，联立 ② 得 <MathTex tex="\dfrac{y}{3} \leq x \leq 2y-4" />。<br />要使 <MathTex tex="x" /> 存在，需 <MathTex tex="\dfrac{y}{3} \leq 2y-4" />，解得 <MathTex tex="y \geq \dfrac{12}{5}" />。<br /><strong>求 <MathTex tex="x+y" /> 最小值</strong>：当 <MathTex tex="y=\dfrac{12}{5}" /> 时，<MathTex tex="x=\dfrac{y}{3}=\dfrac{4}{5}" />，<MathTex tex="x+y=\dfrac{16}{5}" />。<br />又 <MathTex tex="x+y" /> 可以任意大（<MathTex tex="y" /> 无上界），故取值范围为 <MathTex tex="\left[\dfrac{16}{5},+\infty\right)" />。</p></>,
  'absdef-2': <><p className="mt-2"><strong>第一步</strong>：<MathTex tex="|a-1|=a-1" />，由定义 <MathTex tex="|t|=t \Leftrightarrow t \geq 0" />，得 <MathTex tex="a-1 \geq 0" />，即 <MathTex tex="a \geq 1" /> ①<br /><strong>第二步</strong>：<MathTex tex="|2a-b|=-(2a-b)" />，由定义 <MathTex tex="|t|=-t \Leftrightarrow t \leq 0" />，得 <MathTex tex="2a-b \leq 0" />，即 <MathTex tex="b \geq 2a" /> ②<br /><strong>第三步</strong>：由 ① 得 <MathTex tex="a \geq 1" />，代入 ② 得 <MathTex tex="b \geq 2a \geq 2" />。<br /><MathTex tex="a-b = a-b" />，由 ② 得 <MathTex tex="b \geq 2a" />，即 <MathTex tex="-b \leq -2a" />，所以 <MathTex tex="a-b \leq a-2a = -a \leq -1" />（因为 <MathTex tex="a \geq 1" />）。<br /><strong>结论</strong>：<MathTex tex="a-b" /> 的取值范围为 <MathTex tex="(-\infty, -1]" />。</p></>,
};

// ══════════════════════════════════════════════
// 所有解析汇总（供 AnswerSection 查找）
// ══════════════════════════════════════════════
const allExplanations: Record<string, React.ReactNode> = {
  ...absDefinitionExplanations,
  ...absClassifyExplanations,
  ...absEquationExplanations,
  ...absInequalityExplanations,
  ...absTriangleExplanations,
  ...absParamExplanations,
};

// ══════════════════════════════════════════════
// 打印答案组件
// ══════════════════════════════════════════════

function AnswerLabel({ q }: { q: QuizQuestionData }) {
  if (q.type === 'blank') {
    const raw = q.acceptableAnswers?.[0] ?? q.correctAnswer;
    const isSimpleFraction = /^-?\d+\/\d+$/.test(q.correctAnswer);
    const displayTex = isSimpleFraction ? q.correctAnswer.replace(/(-?\d+)\/(\d+)/, '\\frac{$1}{$2}') : raw;
    return <>答案：{/[\\^_{}]/.test(displayTex) ? <MathTex tex={displayTex} /> : displayTex}</>;
  }
  const opt = q.options?.find(o => o.value === q.correctAnswer);
  if (!opt) return <>答案：{q.correctAnswer}</>;
  return <>{opt.label}（{opt.isLatex ? <MathTex tex={opt.value} /> : opt.value}）</>;
}

function AnswerSection({ title, questions, columns = 2, pairRows, className }: { title: string; questions: QuizQuestionData[]; columns?: number; pairRows?: boolean; className?: string }) {
  return (
    <div className={`mb-2${className ? ` ${className}` : ''}`}>
      <p className="font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">{title}</p>
      {pairRows ? (
        <div className="text-gray-700">
          {Array.from({ length: Math.ceil(questions.length / 2) }, (_, row) => {
            const pair = questions.slice(row * 2, row * 2 + 2);
            return (
              <div key={row} className="grid grid-cols-2 gap-4 mb-3" style={{ breakInside: 'avoid' }}>
                {pair.map((q, j) => (
                  <div key={q.id} className="flex gap-2 items-start">
                    <span className="text-blue-600 font-bold shrink-0">{row * 2 + j + 1}.</span>
                    <div className="min-w-0">
                      <p className="font-bold text-gray-900"><AnswerLabel q={q} /></p>
                      {allExplanations[q.id] && <div className="mt-1">{allExplanations[q.id]}</div>}
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      ) : (
        <div className={`${columns === 1 ? 'columns-1' : 'columns-2'} gap-4 text-gray-700`} style={columns === 2 ? { columnRule: '1px solid #e5e7eb' } : undefined}>
          {questions.map((q, i) => (
            <div key={q.id} className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
              <span className="text-blue-600 font-bold shrink-0">{i + 1}.</span>
              <div className="min-w-0">
                <p className="font-bold text-gray-900"><AnswerLabel q={q} /></p>
                {allExplanations[q.id] && <div className="mt-1">{allExplanations[q.id]}</div>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function AbsoluteValueAnswers() {
  return (
    <>
      <PageBreak label="答案与解析" />
      <section className="mb-8 print-answers">
        <h2 className="text-xl font-bold text-gray-900 mb-4">📝 2.2 绝对值 — 答案与解析</h2>
        <AnswerSection title="绝对值定义应用" questions={absDefinitionPractice} columns={1} className="text-[0.9rem]" />
        <AnswerSection title="分类讨论去绝对值" questions={absClassifyPractice} className="text-[0.9rem]" />
        <AnswerSection title="绝对值方程" questions={absEquationPractice} className="text-[0.9rem]" />
        <AnswerSection title="绝对值不等式" questions={absInequalityPractice} pairRows />
        <AnswerSection title="三角不等式" questions={absTrianglePractice} className="text-[0.9rem]" />
        <AnswerSection title="含参绝对值不等式" questions={absParamPractice} columns={1} />
      </section>
    </>
  );
}
