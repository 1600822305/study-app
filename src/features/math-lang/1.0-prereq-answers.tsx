import type { ReactNode } from 'react';
import { Math as MathTex, PageBreak } from '@/components/shared';
import { prereqPractice2, prereqPractice4, prereqPractice5, prereqPractice6 } from './data/1.0/1.0-practice';
import { prereqSelfTest } from './data/1.0/1.0-selftest';
import type { QuizQuestionData } from '@/types';

// ══════════════════════════════════════════════════════════
// 解析内容（唯一数据源）— 交互 + 打印共用
// ══════════════════════════════════════════════════════════

export const prereqExplanations: Record<string, ReactNode> = {
  // ── 第1节：数的分类 ──
  'pp1-1': (
    <>
      <p className="mt-2"><MathTex tex="\sqrt{2} = 1.41421\cdots" />（无限不循环）→ 无理数</p>
      <p className="mt-2">无理数也是实数，但不是有理数</p>
    </>
  ),
  'pp1-2': (
    <>
      <p className="mt-2"><MathTex tex="-3 \in \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}" /></p>
      <p className="mt-2">整数 ⊂ 有理数 ⊂ 实数</p>
    </>
  ),
  'pp1-3': (
    <>
      <p className="mt-2"><MathTex tex="2+3i" />：虚部 <MathTex tex="b=3 \neq 0" /> → 复数（且不是实数）</p>
    </>
  ),
  'pp1-4': (
    <>
      <p className="mt-2"><MathTex tex="0 \in \mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}" /></p>
      <p className="mt-2">0 是自然数（我国规定），同时属于整数、有理数、实数</p>
    </>
  ),

  // ── 第2节：平方、开方、绝对值（混合题） ──
  'sq-1': (
    <>
      <p className="mt-2">先算平方再求和，最后开方：</p>
      <p className="text-center mt-1"><MathTex tex="\sqrt{5^2 + 12^2} = \sqrt{25+144} = \sqrt{169} = 13" /></p>
      <p className="mt-2">注意不能拆开算：<MathTex tex="\sqrt{25}+\sqrt{144}=5+12=17" /> 是错的</p>
    </>
  ),
  'sq-3': (
    <>
      <p className="mt-2">先算括号内的平方，再减，最后取绝对值：</p>
      <p className="text-center mt-1"><MathTex tex="(-5)^2 = 25" />，<MathTex tex="25 - 30 = -5" />，<MathTex tex="|-5| = 5" /></p>
    </>
  ),
  'sq-4': (
    <>
      <p className="mt-2"><MathTex tex="\sqrt{(-13)^2} = \sqrt{169} = 13" />（开方消平方，取正值）</p>
      <p className="mt-2"><MathTex tex="|-12| = 12" />，所以 <MathTex tex="13 - 12 = 1" /></p>
    </>
  ),
  'sq-5': (
    <>
      <p className="mt-2">分别算每一项（括号内先算）：</p>
      <p className="text-center mt-1"><MathTex tex="(-2)^4 = 16" />，<MathTex tex="(-3)^2 = 9" />，<MathTex tex="\sqrt{16} = 4" /></p>
      <p className="text-center mt-1"><MathTex tex="16 + 9 - 4 = 21" /></p>
    </>
  ),

  // ── 第4节：分数运算（混合前置知识） ──
  'pp4-2': (
    <>
      <p className="mt-2">先算平方数，再做分数运算：</p>
      <p className="text-center mt-1"><MathTex tex="\dfrac{4^2-3^2}{4^2+3^2} = \dfrac{16-9}{16+9} = \dfrac{7}{25}" /></p>
    </>
  ),
  'pp4-4': (
    <>
      <p className="mt-2">负数平方结果为正：</p>
      <p className="text-center mt-1"><MathTex tex="\dfrac{(-2)^2}{(-3)^2} = \dfrac{4}{9}" /></p>
    </>
  ),
  'pp4-5': (
    <>
      <p className="mt-2">先乘除后加减，先算乘法部分：</p>
      <p className="text-center mt-1"><MathTex tex="\dfrac{1}{3} \times \dfrac{3}{4} = \dfrac{1}{4}" /></p>
      <p className="text-center mt-1"><MathTex tex="\dfrac{1}{2} - \dfrac{1}{4} = \dfrac{1}{4}" /></p>
    </>
  ),
  'pp4-6': (
    <>
      <p className="mt-2">先算除法（乘以倒数），再通分加：</p>
      <p className="text-center mt-1"><MathTex tex="\dfrac{1}{4} \div \dfrac{1}{2} = \dfrac{1}{4} \times 2 = \dfrac{1}{2}" /></p>
      <p className="text-center mt-1"><MathTex tex="\dfrac{2}{3} + \dfrac{1}{2} = \dfrac{4}{6} + \dfrac{3}{6} = \dfrac{7}{6}" /></p>
    </>
  ),

  // ── 第5节：多项式展开（混合前置知识） ──
  'pp5-1': (
    <>
      <p className="mt-2">分配律，每一项都要乘：</p>
      <p className="text-center mt-1"><MathTex tex="3(2x-5) = 6x - 15" /></p>
    </>
  ),
  'pp5-2': (
    <>
      <p className="mt-2">FOIL 展开：首首 + 首尾 + 尾首 + 尾尾</p>
      <p className="text-center mt-1"><MathTex tex="(x+4)(x-3) = x^2 - 3x + 4x - 12 = x^2 + x - 12" /></p>
    </>
  ),
  'pp5-3': (
    <>
      <p className="mt-2">FOIL 展开，遇到 <MathTex tex="i^2" /> 替换为 <MathTex tex="-1" />：</p>
      <p className="text-center mt-1"><MathTex tex="(2+i)(3-i) = 6 - 2i + 3i - i^2 = 6 + i + 1 = 7 + i" /></p>
    </>
  ),
  'pp5-4': (
    <>
      <p className="mt-2">完全平方公式展开：</p>
      <p className="text-center mt-1"><MathTex tex="(3+2i)^2 = 9 + 12i + 4i^2 = 9 + 12i - 4 = 5 + 12i" /></p>
    </>
  ),
  'pp5-5': (
    <>
      <p className="mt-2">平方差公式：</p>
      <p className="text-center mt-1"><MathTex tex="(\sqrt{5}+2)(\sqrt{5}-2) = (\sqrt{5})^2 - 2^2 = 5 - 4 = 1" /></p>
    </>
  ),
  'pp5-6': (
    <>
      <p className="mt-2">两个平方差分别算，再相加：</p>
      <p className="text-center mt-1"><MathTex tex="(1+i)(1-i) = 1 - i^2 = 2" /></p>
      <p className="text-center mt-1"><MathTex tex="(2+i)(2-i) = 4 - i^2 = 5" /></p>
      <p className="text-center mt-1"><MathTex tex="2 + 5 = 7" /></p>
    </>
  ),

  // ── 第6节：负数与 i 的幂次（混合前置知识） ──
  'pp6-1': (
    <>
      <p className="mt-2">负数括号平方变正，分别算再相加：</p>
      <p className="text-center mt-1"><MathTex tex="(-4)^2+(-3)^2=16+9=25" /></p>
    </>
  ),
  'pp6-2': (
    <>
      <p className="mt-2">把 <MathTex tex="i^2=-1" /> 代入分子分母：</p>
      <p className="text-center mt-1"><MathTex tex="\dfrac{-1+1}{-1-1}=\dfrac{0}{-2}=0" /></p>
    </>
  ),
  'pp6-3': (
    <>
      <p className="mt-2">先展开平方，再乘 <MathTex tex="i" />：</p>
      <p className="text-center mt-1"><MathTex tex="(1+i)^2=2i" /></p>
      <p className="text-center mt-1"><MathTex tex="2i\times i=2i^2=2\times(-1)=-2" /></p>
    </>
  ),
  'pp6-4': (
    <>
      <p className="mt-2"><MathTex tex="47\div4" /> 余 3，所以：</p>
      <p className="text-center mt-1"><MathTex tex="i^{47}=i^3=-i" /></p>
    </>
  ),
  'pp6-5': (
    <>
      <p className="mt-2">分别算分子和分母：</p>
      <p className="text-center mt-1"><MathTex tex="(-2)^3=-8,\quad i^2=-1" /></p>
      <p className="text-center mt-1"><MathTex tex="\dfrac{-8}{-1}=8" /></p>
    </>
  ),
  'pp6-6': (
    <>
      <p className="mt-2">每 4 个一循环，和为 0：</p>
      <p className="text-center mt-1"><MathTex tex="i + i^2 + i^3 + i^4 = i + (-1) + (-i) + 1 = 0" /></p>
    </>
  ),

  // ── 自测清单 ──
  'prereq-1': (
    <>
      <p className="mt-2"><MathTex tex="\sqrt{2}" /> 不能写成两个整数的比，所以是无理数。</p>
    </>
  ),
  'prereq-2': (
    <>
      <p className="mt-2"><MathTex tex="\sqrt{5^2+12^2} = \sqrt{25+144} = \sqrt{169} = 13" /></p>
    </>
  ),
  'prereq-3': (
    <>
      <p className="mt-2"><MathTex tex="11^2 = (10+1)^2 = 100+20+1 = 121" /></p>
    </>
  ),
  'prereq-4': (
    <>
      <p className="mt-2">分数乘法：分子乘分子，分母乘分母</p>
      <p className="text-center mt-1"><MathTex tex="\dfrac{2}{3} \times \dfrac{5}{4} = \dfrac{10}{12} = \dfrac{5}{6}" /></p>
    </>
  ),
  'prereq-5': (
    <>
      <p className="mt-2">通分（公倍数 12）：</p>
      <p className="text-center mt-1"><MathTex tex="\dfrac{5}{6} - \dfrac{1}{4} = \dfrac{10}{12} - \dfrac{3}{12} = \dfrac{7}{12}" /></p>
    </>
  ),
  'prereq-6': (
    <>
      <p className="mt-2">平方差公式：<MathTex tex="(3+2i)(3-2i) = 3^2-(2i)^2 = 9-4i^2 = 9+4 = 13" /></p>
    </>
  ),
  'prereq-7': (
    <>
      <p className="mt-2">完全平方公式：</p>
      <p className="text-center mt-1"><MathTex tex="(x-1)^2 = x^2 - 2x + 1" /></p>
    </>
  ),
  'prereq-8': (
    <>
      <p className="mt-2"><MathTex tex="-4 \times (-3) + (-2) = 12 + (-2) = 10" /></p>
    </>
  ),
  'prereq-9': (
    <>
      <p className="mt-2"><MathTex tex="3 - i^2 = 3 - (-1) = 3 + 1 = 4" /></p>
    </>
  ),
  'prereq-10': (
    <>
      <p className="mt-2"><MathTex tex="73 \div 4 = 18 \cdots\cdots 1 \Rightarrow i^{73} = i^1 = i" /></p>
    </>
  ),
  'prereq-11': (
    <>
      <p className="mt-2">复数定义：<MathTex tex="x+yi" /> 中 <MathTex tex="x, y" /> 必须是实数。</p>
    </>
  ),
  'prereq-12': (
    <>
      <p className="mt-2"><MathTex tex="2024 \div 4 \text{ 余 } 0,\quad 2025 \div 4 \text{ 余 } 1" /></p>
      <p className="mt-2"><MathTex tex="i^{2024}=1,\quad i^{2025}=i \Rightarrow 1+i" /></p>
    </>
  ),
};

// ══════════════════════════════════════════════════════════
// 打印答案组件 — 布局自由控制，内容从 explanations 取
// ══════════════════════════════════════════════════════════

function AnswerLabel({ q }: { q: QuizQuestionData }) {
  if (q.type === 'blank') {
    const tex = q.acceptableAnswers?.[0] ?? q.correctAnswer;
    const isSimpleFraction = /^-?\d+\/\d+$/.test(q.correctAnswer);
    const displayTex = isSimpleFraction
      ? q.correctAnswer.replace(/(-?\d+)\/(\d+)/, '\\dfrac{$1}{$2}')
      : tex;
    return <>答案：{/[\\^_{}]/.test(displayTex) ? <MathTex tex={displayTex} /> : displayTex}</>;
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
              {prereqExplanations[q.id] && <div className="mt-1">{prereqExplanations[q.id]}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PrereqAnswers() {
  return (
    <section className="mb-8 print-answers">
      <PageBreak label="答案与解析" />
      <h2 className="text-xl font-bold text-gray-900 mb-4">📝 1.0 复数前置知识 — 答案与解析</h2>
      <AnswerSection title="二、平方与平方根（含常用平方数）— 即时练习" questions={prereqPractice2} />
      <AnswerSection title="四、分数运算 — 即时练习" questions={prereqPractice4} />
      <AnswerSection title="五、多项式展开 — 即时练习" questions={prereqPractice5} />
      <AnswerSection title="六、负数与 i 的幂次 — 即时练习" questions={prereqPractice6} />
      <AnswerSection title="自测清单" questions={prereqSelfTest} />
    </section>
  );
}
