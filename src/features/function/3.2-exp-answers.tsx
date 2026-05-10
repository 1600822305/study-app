import type { ReactNode } from 'react';
import { Math as MathTex, PageBreak } from '@/components/shared';
import { expComparePractice, expIneqPractice, expCompositePractice, expRangePractice, expDerivPractice } from './data/3.2/3.2-exp-practice';
import type { QuizQuestionData } from '@/types';

// ══════════════════════════════════════════════
// 解析内容（唯一数据源）— 交互 + 打印共用
// ══════════════════════════════════════════════

export const expExplanations: Record<string, ReactNode> = {
  // ── 比较大小 ──
  'expcmp-1': (
    <>
      <p><strong>第一步</strong>：底数 <MathTex tex="3 > 1" />，<MathTex tex="y = 3^x" /> 是增函数</p>
      <p><strong>第二步</strong>：比较指数 <MathTex tex="0.4 < 0.8" /></p>
      <p><strong>结论</strong>：增函数指数大的值大，所以 <MathTex tex="3^{0.4} < 3^{0.8}" /></p>
    </>
  ),
  'expcmp-2': (
    <>
      <p><strong>第一步</strong>：底数 <MathTex tex="0 < 0.7 < 1" />，<MathTex tex="y = 0.7^x" /> 是减函数</p>
      <p><strong>第二步</strong>：比较指数 <MathTex tex="0.3 < 0.5" /></p>
      <p><strong>结论</strong>：减函数指数大的值反而小，所以 <MathTex tex="0.7^{0.3} > 0.7^{0.5}" /></p>
    </>
  ),
  'expcmp-3': (
    <>
      <p><strong>第一步</strong>：指数 <MathTex tex="-0.5 < 0" />，<MathTex tex="y = x^{-0.5}" /> 在正数上是减函数</p>
      <p><strong>第二步</strong>：比较底数 <MathTex tex="3 < 5" /></p>
      <p><strong>结论</strong>：减函数底数大的值反而小，所以 <MathTex tex="3^{-0.5} > 5^{-0.5}" /></p>
    </>
  ),
  'expcmp-4': (
    <>
      <p><strong>第一步</strong>：化同底，<MathTex tex="9^{0.3} = (3^2)^{0.3} = 3^{0.6}" /></p>
      <p><strong>第二步</strong>：底数 <MathTex tex="3 > 1" />，增函数，<MathTex tex="0.6 < 0.7" /></p>
      <p><strong>结论</strong>：<MathTex tex="3^{0.6} < 3^{0.7}" />，即 <MathTex tex="9^{0.3} < 3^{0.7}" /></p>
    </>
  ),
  'expcmp-5': (
    <>
      <p><strong>第一步</strong>：<MathTex tex="2^{0.5}" /> 和 <MathTex tex="2^0 = 1" /> 同底，<MathTex tex="2 > 1" /> 增函数，<MathTex tex="0.5 > 0" />，所以 <MathTex tex="2^{0.5} > 1" /></p>
      <p><strong>第二步</strong>：<MathTex tex="0.5^2" /> 和 <MathTex tex="0.5^0 = 1" /> 同底，<MathTex tex="0 < 0.5 < 1" /> 减函数，<MathTex tex="2 > 0" />，所以 <MathTex tex="0.5^2 < 1" /></p>
      <p><strong>结论</strong>：<MathTex tex="2^{0.5} > 1 > 0.5^2" /></p>
    </>
  ),
  'expcmp-6': (
    <>
      <p><strong>第一步</strong>：化同底，<MathTex tex="4^{0.5} = (2^2)^{0.5} = 2^1" />，<MathTex tex="8^{0.3} = (2^3)^{0.3} = 2^{0.9}" /></p>
      <p><strong>第二步</strong>：底数 <MathTex tex="2 > 1" />，增函数，<MathTex tex="1 > 0.9" /></p>
      <p><strong>结论</strong>：<MathTex tex="2^1 > 2^{0.9}" />，即 <MathTex tex="4^{0.5} > 8^{0.3}" /></p>
    </>
  ),

  // ── 指数不等式 ──
  'expineq-1': (
    <>
      <p><strong>第一步</strong>：化同底，<MathTex tex="9 = 3^2" />，原式变为 <MathTex tex="3^{x+1} > 3^2" /></p>
      <p><strong>第二步</strong>：底数 <MathTex tex="3 > 1" />，底大同向，<MathTex tex="x + 1 > 2" /></p>
      <p>得 <MathTex tex="x > 1" />，答案 <MathTex tex="x \in (1, +\infty)" /></p>
    </>
  ),
  'expineq-2': (
    <>
      <p><strong>第一步</strong>：化同底，<MathTex tex="4 = 2^2 = \left(\tfrac{1}{2}\right)^{-2}" /></p>
      <p>原式变为 <MathTex tex="\left(\tfrac{1}{2}\right)^{2x-1} \geq \left(\tfrac{1}{2}\right)^{-2}" /></p>
      <p><strong>第二步</strong>：底数 <MathTex tex="0 < \tfrac{1}{2} < 1" />，底小反向，<MathTex tex="2x - 1 \leq -2" /></p>
      <p>得 <MathTex tex="x \leq -\tfrac{1}{2}" />，答案 <MathTex tex="x \in \left(-\infty, -\tfrac{1}{2}\right]" /></p>
    </>
  ),
  'expineq-3': (
    <>
      <p><strong>第一步</strong>：令 <MathTex tex="t = 2^x" />（<MathTex tex="t > 0" />），<MathTex tex="4^x = t^2" />，原式变为 <MathTex tex="t^2 - 5t + 4 < 0" /></p>
      <p><strong>第二步</strong>：因式分解 <MathTex tex="(t - 1)(t - 4) < 0" />，解得 <MathTex tex="1 < t < 4" /></p>
      <p><strong>第三步</strong>：还原 <MathTex tex="1 < 2^x < 4" />，即 <MathTex tex="2^0 < 2^x < 2^2" /></p>
      <p>底数 <MathTex tex="2 > 1" />，底大同向，得 <MathTex tex="0 < x < 2" />，答案 <MathTex tex="x \in (0, 2)" /></p>
    </>
  ),
  'expineq-4': (
    <>
      <p><strong>第一步</strong>：令 <MathTex tex="t = 3^x" />（<MathTex tex="t > 0" />），<MathTex tex="9^x = t^2" />，原式变为 <MathTex tex="t^2 - 2t - 3 > 0" /></p>
      <p><strong>第二步</strong>：因式分解 <MathTex tex="(t - 3)(t + 1) > 0" />，解得 <MathTex tex="t > 3" /> 或 <MathTex tex="t < -1" /></p>
      <p><strong>第三步</strong>：因为 <MathTex tex="t = 3^x > 0" />，舍去 <MathTex tex="t < -1" />，只取 <MathTex tex="t > 3" /></p>
      <p>即 <MathTex tex="3^x > 3^1" />，底数 <MathTex tex="3 > 1" />，底大同向，得 <MathTex tex="x > 1" />，答案 <MathTex tex="x \in (1, +\infty)" /></p>
    </>
  ),

  // ── 复合函数单调性 ──
  'expcomp-1': (
    <>
      <p><strong>第一步</strong>：外函数底数 <MathTex tex="3 > 1" />，是增函数</p>
      <p><strong>第二步</strong>：内函数 <MathTex tex="t = x^2 + 2x" />，开口向上，对称轴 <MathTex tex="x = -1" /></p>
      <p>在 <MathTex tex="(-\infty, -1]" /> 上为减函数，在 <MathTex tex="[-1, +\infty)" /> 上为增函数</p>
      <p><strong>第三步</strong>：用同增异减</p>
      <p>在 <MathTex tex="(-\infty, -1]" /> 上：内减外增（不同），整体减</p>
      <p>在 <MathTex tex="[-1, +\infty)" /> 上：内增外增（相同），整体增</p>
      <p><strong>答案</strong>：减区间 <MathTex tex="(-\infty, -1]" />，增区间 <MathTex tex="[-1, +\infty)" /></p>
    </>
  ),
  'expcomp-2': (
    <>
      <p><strong>第一步</strong>：外函数底数 <MathTex tex="2 > 1" />，是增函数</p>
      <p><strong>第二步</strong>：内函数 <MathTex tex="t = -x^2 + 6x" />，开口向下，对称轴 <MathTex tex="x = 3" /></p>
      <p>在 <MathTex tex="(-\infty, 3]" /> 上为增函数，在 <MathTex tex="[3, +\infty)" /> 上为减函数</p>
      <p><strong>第三步</strong>：用同增异减</p>
      <p>在 <MathTex tex="(-\infty, 3]" /> 上：内增外增（相同），整体增</p>
      <p>在 <MathTex tex="[3, +\infty)" /> 上：内减外增（不同），整体减</p>
      <p><strong>答案</strong>：增区间 <MathTex tex="(-\infty, 3]" />，减区间 <MathTex tex="[3, +\infty)" /></p>
    </>
  ),
  'expcomp-3': (
    <>
      <p><strong>第一步</strong>：外函数底数 <MathTex tex="0 < \tfrac{1}{3} < 1" />，是减函数</p>
      <p><strong>第二步</strong>：内函数 <MathTex tex="t = x^2 - 4x" />，开口向上，对称轴 <MathTex tex="x = 2" /></p>
      <p>在 <MathTex tex="(-\infty, 2]" /> 上为减函数，在 <MathTex tex="[2, +\infty)" /> 上为增函数</p>
      <p><strong>第三步</strong>：用同增异减</p>
      <p>在 <MathTex tex="(-\infty, 2]" /> 上：内减外减（相同），整体增</p>
      <p>在 <MathTex tex="[2, +\infty)" /> 上：内增外减（不同），整体减</p>
      <p><strong>答案</strong>：增区间 <MathTex tex="(-\infty, 2]" />，减区间 <MathTex tex="[2, +\infty)" /></p>
    </>
  ),
  'expcomp-4': (
    <>
      <p><strong>第一步</strong>：外函数底数 <MathTex tex="0 < \tfrac{1}{2} < 1" />，是减函数</p>
      <p><strong>第二步</strong>：内函数 <MathTex tex="t = -x^2 + 2x" />，开口向下，对称轴 <MathTex tex="x = 1" /></p>
      <p>在 <MathTex tex="(-\infty, 1]" /> 上为增函数，在 <MathTex tex="[1, +\infty)" /> 上为减函数</p>
      <p><strong>第三步</strong>：用同增异减</p>
      <p>在 <MathTex tex="(-\infty, 1]" /> 上：内增外减（不同），整体减</p>
      <p>在 <MathTex tex="[1, +\infty)" /> 上：内减外减（相同），整体增</p>
      <p><strong>答案</strong>：减区间 <MathTex tex="(-\infty, 1]" />，增区间 <MathTex tex="[1, +\infty)" /></p>
    </>
  ),

  // ── 复合函数值域 ──
  'exprng-1': (
    <>
      <p><strong>第一步</strong>：令 <MathTex tex="t = x^2 - 2x + 2 = (x - 1)^2 + 1" />，开口向上，顶点 <MathTex tex="(1, 1)" /></p>
      <p>所以 <MathTex tex="t \geq 1" /></p>
      <p><strong>第二步</strong>：外函数 <MathTex tex="y = 3^t" />，底数 <MathTex tex="3 > 1" />，是增函数</p>
      <p>当 <MathTex tex="t = 1" /> 时 <MathTex tex="y = 3" />（最小）；<MathTex tex="t \to +\infty" /> 时 <MathTex tex="y \to +\infty" /></p>
      <p><strong>答案</strong>：值域为 <MathTex tex="[3, +\infty)" /></p>
    </>
  ),
  'exprng-2': (
    <>
      <p><strong>第一步</strong>：令 <MathTex tex="t = -x^2 + 2x = -(x - 1)^2 + 1" />，开口向下，顶点 <MathTex tex="(1, 1)" /></p>
      <p>所以 <MathTex tex="t \leq 1" /></p>
      <p><strong>第二步</strong>：外函数 <MathTex tex="y = \left(\tfrac{1}{2}\right)^t" />，底数 <MathTex tex="0 < \tfrac{1}{2} < 1" />，是减函数</p>
      <p>当 <MathTex tex="t = 1" /> 时 <MathTex tex="y = \tfrac{1}{2}" />（最小）；<MathTex tex="t \to -\infty" /> 时 <MathTex tex="y \to +\infty" /></p>
      <p><strong>答案</strong>：值域为 <MathTex tex="\left[\tfrac{1}{2}, +\infty\right)" /></p>
    </>
  ),
  'exprng-3': (
    <>
      <p><strong>第一步</strong>：令 <MathTex tex="t = x + 1" />，斜率 <MathTex tex="1 > 0" />，是增函数</p>
      <p><MathTex tex="x = -1" /> 时 <MathTex tex="t = 0" />（最小）；<MathTex tex="x = 2" /> 时 <MathTex tex="t = 3" />（最大）</p>
      <p>所以 <MathTex tex="t \in [0, 3]" /></p>
      <p><strong>第二步</strong>：外函数 <MathTex tex="y = 2^t" />，底数 <MathTex tex="2 > 1" />，是增函数</p>
      <p><MathTex tex="t = 0" /> 时 <MathTex tex="y = 1" />（最小）；<MathTex tex="t = 3" /> 时 <MathTex tex="y = 8" />（最大）</p>
      <p><strong>答案</strong>：值域为 <MathTex tex="[1, 8]" /></p>
    </>
  ),
  'exprng-4': (
    <>
      <p><strong>第一步</strong>：令 <MathTex tex="t = x^2 - 4x + 3 = (x - 2)^2 - 1" />，对称轴 <MathTex tex="x = 2" />（在区间 <MathTex tex="[0, 4]" /> 内）</p>
      <p><MathTex tex="x = 2" /> 时 <MathTex tex="t = -1" />（最小）；端点 <MathTex tex="x = 0" /> 或 <MathTex tex="x = 4" /> 时 <MathTex tex="t = 3" />（最大）</p>
      <p>所以 <MathTex tex="t \in [-1, 3]" /></p>
      <p><strong>第二步</strong>：外函数 <MathTex tex="y = \left(\tfrac{1}{3}\right)^t" />，底数 <MathTex tex="0 < \tfrac{1}{3} < 1" />，是减函数</p>
      <p><MathTex tex="t = -1" /> 时 <MathTex tex="y = 3" />（最大）；<MathTex tex="t = 3" /> 时 <MathTex tex="y = \tfrac{1}{27}" />（最小）</p>
      <p><strong>答案</strong>：值域为 <MathTex tex="\left[\tfrac{1}{27}, 3\right]" /></p>
    </>
  ),

  // ── 指数函数求导 ──
  'expderiv-1': (
    <>
      <p><strong>第一步</strong>：识别为 <MathTex tex="y = a^x" /> 类型，<MathTex tex="a = 5" /></p>
      <p><strong>第二步</strong>：套公式 <MathTex tex="y' = a^x \ln a = 5^x \ln 5" /></p>
    </>
  ),
  'expderiv-2': (
    <>
      <p><strong>第一步</strong>：识别为 <MathTex tex="y = a^{f(x)}" /> 类型，<MathTex tex="a = 3" />，内函数 <MathTex tex="f(x) = 2x - 1" /></p>
      <p><strong>第二步</strong>：求 <MathTex tex="f'(x) = 2" /></p>
      <p><strong>第三步</strong>：套公式 <MathTex tex="y' = a^{f(x)} \cdot \ln a \cdot f'(x) = 3^{2x-1} \cdot \ln 3 \cdot 2 = 2 \cdot 3^{2x-1} \ln 3" /></p>
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
              {expExplanations[q.id]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ExpAnswers() {
  return (
    <section className="mb-8 print-answers">
      <PageBreak label="答案与解析" />
      <h2 className="text-xl font-bold text-gray-900 mb-4">📝 3.2 指数函数 — 答案与解析</h2>
      <AnswerSection title="三、比较大小" questions={expComparePractice} />
      <AnswerSection title="四、指数不等式" questions={expIneqPractice} />
      <AnswerSection title="五、复合函数单调性" questions={expCompositePractice} />
      <AnswerSection title="六、复合函数值域" questions={expRangePractice} />
      <AnswerSection title="七、指数函数的求导" questions={expDerivPractice} />
    </section>
  );
}
