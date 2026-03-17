import type { ReactNode } from 'react';
import { Math as MathTex, PageBreak } from '@/components/shared';
import { prereqPractice1, prereqPractice2, prereqPractice3, prereqPractice4, prereqPractice5, prereqPractice6, prereqPractice7 } from './data/practice';
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
      <p className="mt-2"><MathTex tex="7^2 = 49 \Rightarrow \sqrt{49} = 7" /></p>
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
      <p className="mt-2"><MathTex tex="\sqrt{(-3)^2} = \sqrt{9} = 3" />（√ 取正值）</p>
    </>
  ),

  // ── 第3节：常用平方数 ──
  'pp3-1': (
    <>
      <p className="mt-2"><MathTex tex="7^2 = 7 \times 7 = 49" /></p>
    </>
  ),
  'pp3-2': (
    <>
      <p className="mt-2"><MathTex tex="12^2 = 144 \Rightarrow \sqrt{144} = 12" /></p>
    </>
  ),
  'pp3-3': (
    <>
      <p className="mt-2"><MathTex tex="5^2 + 12^2 = 25 + 144 = 169" /></p>
      <p className="mt-2"><MathTex tex="\sqrt{169}=13" />，勾股数 (5,12,13)</p>
    </>
  ),
  'pp3-4': (
    <>
      <p className="mt-2"><MathTex tex="11^2 = 11 \times 11 = 121" /></p>
    </>
  ),
  'pp3-5': (
    <>
      <p className="mt-2"><MathTex tex="3^2 + 4^2 = 9 + 16 = 25" /></p>
      <p className="mt-2"><MathTex tex="\sqrt{25}=5" />，最经典的勾股数 (3,4,5)</p>
    </>
  ),
  'pp3-6': (
    <>
      <p className="mt-2"><MathTex tex="9^2 = 81 \Rightarrow \sqrt{81} = 9" /></p>
    </>
  ),

  // ── 第4节：分数运算 ──
  'pp4-1': (
    <>
      <p className="mt-2">通分（公倍数 12）：</p>
      <p className="text-center mt-1"><MathTex tex="\frac{2}{3}+\frac{1}{4} = \frac{8}{12}+\frac{3}{12} = \frac{11}{12}" /></p>
    </>
  ),
  'pp4-2': (
    <>
      <p className="mt-2">分子乘分子，分母乘分母：</p>
      <p className="text-center mt-1"><MathTex tex="\frac{3}{5} \times \frac{2}{7} = \frac{3\times 2}{5\times 7} = \frac{6}{35}" /></p>
    </>
  ),
  'pp4-3': (
    <>
      <p className="mt-2">最大公因数 6，分子分母同除：</p>
      <p className="text-center mt-1"><MathTex tex="\frac{18}{24} = \frac{18 \div 6}{24 \div 6} = \frac{3}{4}" /></p>
    </>
  ),
  'pp4-4': (
    <>
      <p className="mt-2">通分（公倍数 10）：</p>
      <p className="text-center mt-1"><MathTex tex="\frac{1}{2}-\frac{1}{5} = \frac{5}{10}-\frac{2}{10} = \frac{3}{10}" /></p>
    </>
  ),
  'pp4-5': (
    <>
      <p className="mt-2">除以分数 = 乘以倒数：</p>
      <p className="text-center mt-1"><MathTex tex="\frac{3}{4} \div \frac{1}{2} = \frac{3}{4} \times \frac{2}{1} = \frac{6}{4} = \frac{3}{2}" /></p>
    </>
  ),
  'pp4-6': (
    <>
      <p className="mt-2">通分后相减：</p>
      <p className="text-center mt-1"><MathTex tex="\frac{5}{6}-\frac{1}{3} = \frac{5}{6}-\frac{2}{6} = \frac{3}{6} = \frac{1}{2}" /></p>
    </>
  ),
  'pp4-7': (
    <>
      <p className="mt-2">除以分数 = 乘以倒数：</p>
      <p className="text-center mt-1"><MathTex tex="\frac{2}{9} \div \frac{1}{3} = \frac{2}{9} \times 3 = \frac{6}{9} = \frac{2}{3}" /></p>
    </>
  ),
  'pp4-8': (
    <>
      <p className="mt-2">最大公因数 7：</p>
      <p className="text-center mt-1"><MathTex tex="\frac{14}{21} = \frac{14 \div 7}{21 \div 7} = \frac{2}{3}" /></p>
    </>
  ),

  // ── 第5节：多项式展开 ──
  'pp5-1': (
    <>
      <p className="mt-2">FOIL 展开，<MathTex tex="i^2=-1" />：</p>
      <p className="text-center mt-1"><MathTex tex="(3+i)(2-i) = 6-3i+2i-i^2 = 6-i+1 = 7-i" /></p>
    </>
  ),
  'pp5-2': (
    <>
      <p className="mt-2">完全平方公式：</p>
      <p className="text-center mt-1"><MathTex tex="(1+i)^2 = 1+2i+i^2 = 1+2i-1 = 2i" /></p>
    </>
  ),
  'pp5-3': (
    <>
      <p className="mt-2">平方差公式：</p>
      <p className="text-center mt-1"><MathTex tex="(3+2i)(3-2i) = 9-(2i)^2 = 9-4i^2 = 9+4 = 13" /></p>
    </>
  ),
  'pp5-4': (
    <>
      <p className="mt-2">完全平方公式：</p>
      <p className="text-center mt-1"><MathTex tex="(1-i)^2 = 1-2i+i^2 = 1-2i-1 = -2i" /></p>
    </>
  ),
  'pp5-5': (
    <>
      <p className="mt-2">平方差公式：</p>
      <p className="text-center mt-1"><MathTex tex="(4+i)(4-i) = 16-i^2 = 16+1 = 17" /></p>
    </>
  ),
  'pp5-6': (
    <>
      <p className="mt-2">分配律：实数乘复数</p>
      <p className="text-center mt-1"><MathTex tex="3(2-i) = 6-3i" /></p>
    </>
  ),
  'pp5-7': (
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
      <p className="mt-2"><MathTex tex="(-4) \times (-3) = 12" />（负负得正）</p>
    </>
  ),
  'pp6-3': (
    <>
      <p className="mt-2"><MathTex tex="2-i^2 = 2-(-1) = 2+1 = 3" /></p>
    </>
  ),

  // ── 第7节：i 的幂次 ──
  'pp7-1': (
    <>
      <p className="mt-2"><MathTex tex="53 \div 4 = 13 \cdots\cdots 1 \Rightarrow i^{53} = i^1 = i" /></p>
    </>
  ),
  'pp7-2': (
    <>
      <p className="mt-2"><MathTex tex="100 \div 4 = 25 \cdots\cdots 0 \Rightarrow i^{100} = i^4 = 1" /></p>
    </>
  ),
  'pp7-3': (
    <>
      <p className="mt-2"><MathTex tex="7 \div 4 = 1 \cdots\cdots 3 \Rightarrow i^7 = i^3 = -i" /></p>
    </>
  ),
  'pp7-4': (
    <>
      <p className="mt-2"><MathTex tex="i^{2025}=i^1=i,\quad i^{2024}=i^0=1" /></p>
      <p className="mt-2"><MathTex tex="\Rightarrow i+1=1+i" /></p>
    </>
  ),

  // ── 自测清单 ──
  'prereq-1': (
    <>
      <p className="mt-2"><MathTex tex="(-3)^2 = (-3) \times (-3) = 9" />（负负得正）</p>
    </>
  ),
  'prereq-2': (
    <>
      <p className="mt-2"><MathTex tex="\sqrt{9+16} = \sqrt{25} = 5" /></p>
    </>
  ),
  'prereq-3': (
    <>
      <p className="mt-2"><MathTex tex="(2+3)(4-1) = 5 \times 3 = 15" /></p>
    </>
  ),
  'prereq-4': (
    <>
      <p className="mt-2">平方差公式：<MathTex tex="(a+b)(a-b) = a^2 - b^2" /></p>
    </>
  ),
  'prereq-5': (
    <>
      <p className="mt-2">完全平方公式：</p>
      <p className="text-center mt-1"><MathTex tex="(1+x)^2 = 1 + 2x + x^2" /></p>
    </>
  ),
  'prereq-6': (
    <>
      <p className="mt-2"><MathTex tex="5 - (-3) = 5 + 3 = 8" />（减负得正）</p>
    </>
  ),
  'prereq-7': (
    <>
      <p className="mt-2"><MathTex tex="(-2) \times (-5) = 10" />（同号得正）</p>
    </>
  ),
  'prereq-8': (
    <>
      <p className="mt-2">通分（公倍数 12）：</p>
      <p className="text-center mt-1"><MathTex tex="\frac{3}{4} + \frac{1}{6} = \frac{9}{12} + \frac{2}{12} = \frac{11}{12}" /></p>
    </>
  ),
  'prereq-9': (
    <>
      <p className="mt-2"><MathTex tex="67 \div 4 = 16 \cdots\cdots 3" /></p>
    </>
  ),
  'prereq-10': (
    <>
      <p className="mt-2"><MathTex tex="(-1) \times (-1) = 1" />（同号得正）</p>
      <p className="mt-2">这就是 <MathTex tex="i^4 = (i^2)^2 = (-1)^2 = 1" /> 的原理</p>
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
      <AnswerSection title="二、平方与平方根 — 即时练习" questions={prereqPractice2} />
      <AnswerSection title="三、常用平方数 — 即时练习" questions={prereqPractice3} />
      <AnswerSection title="四、分数运算 — 即时练习" questions={prereqPractice4} />
      <AnswerSection title="五、多项式展开 — 即时练习" questions={prereqPractice5} />
      <AnswerSection title="六、负数运算 — 即时练习" questions={prereqPractice6} />
      <AnswerSection title="七、除以4求余数 — 即时练习" questions={prereqPractice7} />
      <AnswerSection title="自测清单" questions={prereqSelfTest} />
    </section>
  );
}
