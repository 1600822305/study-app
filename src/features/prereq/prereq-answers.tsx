import type { ReactNode } from 'react';
import { Math as MathTex, PageBreak } from '@/components/shared';
import { prereqPractice1, prereqPractice2, prereqPractice4, prereqPractice5, prereqPractice6, prereqPractice7 } from './data/practice';
import { prereqSelfTest } from './data/selftest';
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

  // ── 第2节：平方、开方、绝对值 ──
  'pp2-1': (
    <>
      <p className="mt-2"><MathTex tex="(-5)^2 = (-5) \times (-5) = 25" />（负负得正）</p>
    </>
  ),
  'pp2-2': (
    <>
      <p className="mt-2"><MathTex tex="\sqrt{16+9} = \sqrt{25} = 5" /></p>
      <p className="mt-2">注意：<MathTex tex="\neq \sqrt{16}+\sqrt{9}=7" />，不能拆开算！</p>
    </>
  ),
  'pp2-3': (
    <>
      <p className="mt-2"><MathTex tex="|-7| = 7" />（去掉负号，取距离）</p>
    </>
  ),
  'pp2-4': (
    <>
      <p className="mt-2"><MathTex tex="-4^2 = -(4^2) = -16" /></p>
      <p className="mt-2">没有括号！先算幂再加负号。<MathTex tex="\neq (-4)^2 = 16" /></p>
    </>
  ),
  'pp2-5': (
    <>
      <p className="mt-2"><MathTex tex="(-3)^2 = 9 \Rightarrow \sqrt{(-3)^2} = \sqrt{9} = 3" /></p>
      <p className="mt-2">注意 <MathTex tex="\sqrt{x^2}" /> 取的是非负值，所以结果是 3，不是 -3。</p>
    </>
  ),
  'pp2-6': (
    <>
      <p className="mt-2"><MathTex tex="(-2)^2 = (-2)\times(-2) = 4" /></p>
      <p className="mt-2"><MathTex tex="-2^2 = -(2^2) = -4" /></p>
      <p className="mt-2">括号决定一切！</p>
    </>
  ),
  'pp2-7': (
    <>
      <p className="mt-2"><MathTex tex="11^2 = 11\times 11 = 121" /></p>
    </>
  ),
  'pp2-8': (
    <>
      <p className="mt-2"><MathTex tex="3^2 + 4^2 = 9 + 16 = 25" /></p>
      <p className="mt-2">这个组合非常常见，因为 <MathTex tex="\sqrt{25}=5" />。</p>
    </>
  ),

  // ── 第4节：分数运算 ──
  'pp4-1': (
    <>
      <p className="mt-2">通分（公倍数 6）：</p>
      <p className="text-center mt-1"><MathTex tex="\frac{1}{3}+\frac{1}{6} = \frac{2}{6}+\frac{1}{6} = \frac{3}{6} = \frac{1}{2}" /></p>
    </>
  ),
  'pp4-2': (
    <>
      <p className="mt-2">分子乘分子，分母乘分母：</p>
      <p className="text-center mt-1"><MathTex tex="\frac{2}{5} \times \frac{3}{4} = \frac{2\times 3}{5\times 4} = \frac{6}{20} = \frac{3}{10}" /></p>
    </>
  ),
  'pp4-3': (
    <>
      <p className="mt-2">除以分数 = 乘以倒数：</p>
      <p className="text-center mt-1"><MathTex tex="\frac{2}{3} \div \frac{1}{4} = \frac{2}{3} \times \frac{4}{1} = \frac{8}{3}" /></p>
    </>
  ),
  'pp4-4': (
    <>
      <p className="mt-2">通分（公倍数 6）：</p>
      <p className="text-center mt-1"><MathTex tex="\frac{5}{6}-\frac{1}{3} = \frac{5}{6}-\frac{2}{6} = \frac{3}{6} = \frac{1}{2}" /></p>
    </>
  ),

  // ── 第5节：多项式展开 ──
  'pp5-1': (
    <>
      <p className="mt-2">分配律：实数分别乘括号里的每一项。</p>
      <p className="text-center mt-1"><MathTex tex="3(2-i)=6-3i" /></p>
    </>
  ),
  'pp5-2': (
    <>
      <p className="mt-2">FOIL 展开，最后把 <MathTex tex="i^2" /> 换成 <MathTex tex="-1" />。</p>
      <p className="text-center mt-1"><MathTex tex="(2+i)(3-i)=6-2i+3i-i^2=6+i+1=7+i" /></p>
    </>
  ),
  'pp5-3': (
    <>
      <p className="mt-2">完全平方公式：</p>
      <p className="text-center mt-1"><MathTex tex="(1+i)^2=1+2i+i^2=1+2i-1=2i" /></p>
    </>
  ),
  'pp5-4': (
    <>
      <p className="mt-2">平方差公式：</p>
      <p className="text-center mt-1"><MathTex tex="(3+2i)(3-2i)=3^2-(2i)^2=9-4i^2=9+4=13" /></p>
    </>
  ),
  'pp5-5': (
    <>
      <p className="mt-2">FOIL 展开：</p>
      <p className="text-center mt-1"><MathTex tex="(2+i)(1+i) = 2+2i+i+i^2 = 2+3i-1 = 1+3i" /></p>
    </>
  ),

  // ── 第6节：负数运算 ──
  'pp6-1': (
    <>
      <p className="mt-2"><MathTex tex="-3-(-7) = -3+7 = 4" />（减负得正）</p>
    </>
  ),
  'pp6-2': (
    <>
      <p className="mt-2"><MathTex tex="-2i^2 = -2\times(-1) = 2" />（负负得正）</p>
    </>
  ),
  'pp6-3': (
    <>
      <p className="mt-2"><MathTex tex="2-i^2 = 2-(-1) = 2+1 = 3" /></p>
    </>
  ),
  'pp6-4': (
    <>
      <p className="mt-2"><MathTex tex="53 \div 4 = 13 \cdots\cdots 1 \Rightarrow i^{53} = i^1 = i" /></p>
    </>
  ),
  'pp6-5': (
    <>
      <p className="mt-2"><MathTex tex="2025 \div 4 \text{ 余 } 1,\quad 2024 \div 4 \text{ 余 } 0" /></p>
      <p className="mt-2"><MathTex tex="i^{2025}=i,\quad i^{2024}=1,\quad \Rightarrow i^{2025}+i^{2024}=1+i" /></p>
    </>
  ),
  'pp6-6': (
    <>
      <p className="mt-2"><MathTex tex="14 \div 4 = 3 \cdots\cdots 2 \Rightarrow i^{14}=i^2=-1" /></p>
    </>
  ),

  // ── 第7节：i 的幂次 ──
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
      <p className="text-center mt-1"><MathTex tex="\frac{2}{3} \times \frac{5}{4} = \frac{10}{12} = \frac{5}{6}" /></p>
    </>
  ),
  'prereq-5': (
    <>
      <p className="mt-2">通分（公倍数 12）：</p>
      <p className="text-center mt-1"><MathTex tex="\frac{5}{6} - \frac{1}{4} = \frac{10}{12} - \frac{3}{12} = \frac{7}{12}" /></p>
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
      ? q.correctAnswer.replace(/(-?\d+)\/(\d+)/, '\\frac{$1}{$2}')
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
      <AnswerSection title="一、数的分类 — 即时练习" questions={prereqPractice1} />
      <AnswerSection title="二、平方与平方根（含常用平方数）— 即时练习" questions={prereqPractice2} />
      <AnswerSection title="四、分数运算 — 即时练习" questions={prereqPractice4} />
      <AnswerSection title="五、多项式展开 — 即时练习" questions={prereqPractice5} />
      <AnswerSection title="六、负数运算 — 即时练习" questions={prereqPractice6} />
      <AnswerSection title="七、除以4求余数 — 即时练习" questions={prereqPractice7} />
      <AnswerSection title="自测清单" questions={prereqSelfTest} />
    </section>
  );
}
