import type { ReactNode } from 'react';
import { Math as MathTex, PageBreak } from '@/components/shared';
import { complexPractice1, complexPractice2, complexPractice3, complexPractice4, complexPractice5 } from './data/1.1/1.1-practice';
import { complexQuizQuestions } from './data/1.1/1.1-quiz';
import type { QuizQuestionData } from '@/types';

// ══════════════════════════════════════════════════════════
// 解析内容（唯一数据源）— 交互 + 打印共用
// ══════════════════════════════════════════════════════════

export const complexExplanations: Record<string, ReactNode> = {
  // ── 第1节：虚数单位 i ──
  'cp1-1': (
    <>
      <p className="mt-2"><MathTex tex="i^2 = -1" />，这是虚数单位的核心定义，必背</p>
    </>
  ),
  'cp1-2': (
    <>
      <p className="mt-2">实数的平方 <MathTex tex="\geq 0" />，不可能等于 <MathTex tex="-1" /></p>
      <p className="mt-2">所以 <MathTex tex="x^2=-1" /> 在实数范围内没有解</p>
    </>
  ),

  // ── 第2节：复数的概念 ──
  'cp2-2': (
    <>
      <p className="mt-2"><MathTex tex="z = 0 = 0 + 0i" />，实部 <MathTex tex="a=0" />，虚部 <MathTex tex="b=0" /></p>
      <p className="mt-2">虚部为 0，所以是实数</p>
    </>
  ),
  'cp2-3': (
    <>
      <p className="mt-2">纯虚数条件：实部 = 0 且虚部 <MathTex tex="\neq" /> 0</p>
      <p className="mt-2">实部 = 0，得 <MathTex tex="m^2-1=0" />，解得 <MathTex tex="m=\pm 1" /></p>
      <p className="mt-2">检查虚部：<MathTex tex="m-1 \neq 0" />，所以 <MathTex tex="m \neq 1" /></p>
      <p className="mt-2">因此 <MathTex tex="m = -1" /></p>
    </>
  ),
  'cp2-4': (
    <>
      <p className="mt-2"><MathTex tex="i^2 = -1" />，是实数</p>
      <p className="mt-2">其余选项都含 <MathTex tex="i" />，虚部不为 0，都是虚数</p>
    </>
  ),
  'cp2-5': (
    <>
      <p className="mt-2"><MathTex tex="z = i^2 + 2i = -1 + 2i" /></p>
      <p className="mt-2">实部 <MathTex tex="a=-1 \neq 0" />，虚部 <MathTex tex="b=2 \neq 0" /></p>
      <p className="mt-2">虚部不为 0 所以是虚数，实部不为 0 所以不是纯虚数</p>
    </>
  ),

  // ── 第3节：复数相等 ──
  'cp3-1': (
    <>
      <p className="mt-2">实部对实部，虚部对虚部：</p>
      <p className="mt-2"><MathTex tex="a+bi = 2+(-3)i" />，所以 <MathTex tex="b=-3" /></p>
    </>
  ),
  'cp3-2': (
    <>
      <p className="mt-2">复数等于 0，实部虚部都为 0：</p>
      <p className="mt-2"><MathTex tex="3x-6=0" />，解得 <MathTex tex="x=2" /></p>
    </>
  ),
  'cp3-3': (
    <>
      <p className="mt-2">复数等于 0，实部和虚部都等于 0：</p>
      <p className="mt-2">实部：<MathTex tex="x+1=0" />，得 <MathTex tex="x=-1" /></p>
      <p className="mt-2">验证虚部：<MathTex tex="x^2-1=(-1)^2-1=0" />，也为 0，满足</p>
      <p className="mt-2">若 <MathTex tex="x=1" />：实部 <MathTex tex="=2\neq 0" />，不满足</p>
    </>
  ),
  'cp3-4': (
    <>
      <p className="mt-2">左边 <MathTex tex="(a^2-4)+(a+2)i" />，右边 <MathTex tex="0+bi" /></p>
      <p className="mt-2">实部相等：<MathTex tex="a^2-4=0" />，得 <MathTex tex="a=\pm 2" /></p>
      <p className="mt-2">虚部相等：<MathTex tex="a+2=b" /></p>
      <p className="mt-2">当 <MathTex tex="a=-2" /> 时 <MathTex tex="b=0" />，但题目要求 <MathTex tex="b\neq 0" />，排除</p>
      <p className="mt-2">当 <MathTex tex="a=2" /> 时 <MathTex tex="b=4" />，所以 <MathTex tex="a+b=6" /></p>
    </>
  ),
  'cp3-5': (
    <>
      <p className="mt-2">设 <MathTex tex="z=a+bi" />，则 <MathTex tex="\bar{z}=a-bi" /></p>
      <p className="mt-2">代入，得 <MathTex tex="(a+bi)+2(a-bi)=3a-bi=3+i" /></p>
      <p className="mt-2">实部：<MathTex tex="3a=3" />，得 <MathTex tex="a=1" /></p>
      <p className="mt-2">虚部：<MathTex tex="-b=1" />，得 <MathTex tex="b=-1" /></p>
      <p className="mt-2">所以 <MathTex tex="z=1-i" /></p>
    </>
  ),

  // ── 第4节：复数运算 ──
  'cp4-1': (
    <>
      <p className="mt-2">实部减实部，虚部减虚部：</p>
      <p className="mt-2"><MathTex tex="(5-3i)-(2+i) = (5-2)+(-3-1)i = 3-4i" /></p>
    </>
  ),
  'cp4-2': (
    <>
      <p className="mt-2">展开，遇 <MathTex tex="i^2" /> 换 <MathTex tex="-1" />：</p>
      <p className="mt-2"><MathTex tex="(1+2i)^2 = 1+4i+4i^2 = 1+4i-4 = -3+4i" /></p>
    </>
  ),
  'cp4-3': (
    <>
      <p className="mt-2">上下同乘分母的共轭 <MathTex tex="1+i" />：</p>
      <p className="mt-2"><MathTex tex="\frac{(3+i)(1+i)}{(1-i)(1+i)} = \frac{3+3i+i+i^2}{1-i^2} = \frac{2+4i}{2} = 1+2i" /></p>
    </>
  ),
  'cp4-4': (
    <>
      <p className="mt-2"><MathTex tex="2025 \div 4" /> 余 1，所以 <MathTex tex="i^{2025} = i" /></p>
      <p className="mt-2"><MathTex tex="2026 \div 4" /> 余 2，所以 <MathTex tex="i^{2026} = -1" /></p>
      <p className="mt-2">因此 <MathTex tex="i^{2025}+i^{2026} = i+(-1) = i-1" /></p>
    </>
  ),
  'cp4-5': (
    <>
      <p className="mt-2">用模的乘法性质：<MathTex tex="|(1+i)(2-i)| = |1+i| \cdot |2-i|" /></p>
      <p className="mt-2"><MathTex tex="|1+i| = \sqrt{1^2+1^2} = \sqrt{2}" /></p>
      <p className="mt-2"><MathTex tex="|2-i| = \sqrt{2^2+(-1)^2} = \sqrt{5}" /></p>
      <p className="mt-2">所以 <MathTex tex="|(1+i)(2-i)| = \sqrt{2} \times \sqrt{5} = \sqrt{10}" /></p>
    </>
  ),
  'cp4-6': (
    <>
      <p className="mt-2"><MathTex tex="z \cdot \bar{z} = |z|^2 = a^2 + b^2" /></p>
      <p className="mt-2"><MathTex tex="= 2^2 + 1^2 = 4 + 1 = 5" /></p>
    </>
  ),

  // ── 第5节：复平面 ──
  'cp5-1': (
    <>
      <p className="mt-2"><MathTex tex="z=-2+3i" /> 对应点 <MathTex tex="(-2,3)" /></p>
      <p className="mt-2"><MathTex tex="a=-2<0,\; b=3>0" />，在第二象限</p>
    </>
  ),
  'cp5-2': (
    <>
      <p className="mt-2"><MathTex tex="z=4-i" /> 对应点 <MathTex tex="(4,-1)" /></p>
      <p className="mt-2"><MathTex tex="a=4>0,\; b=-1<0" />，在第四象限</p>
    </>
  ),

  // ── 高考真题 ──
  'cq-1': (
    <>
      <p className="mt-2">由 <MathTex tex="i(z+1)=1+i" />，得 <MathTex tex="z+1=\frac{1+i}{i}" /></p>
      <p className="mt-2">上下同乘 <MathTex tex="-i" />，得 <MathTex tex="z+1=\frac{(1+i)(-i)}{-i^2}=\frac{-i-i^2}{1}=1-i" /></p>
      <p className="mt-2">所以 <MathTex tex="z=1-i-1=-i" /></p>
    </>
  ),
  'cq-2': (
    <>
      <p className="mt-2">展开，遇 <MathTex tex="i^2" /> 换 <MathTex tex="-1" />：</p>
      <p className="mt-2"><MathTex tex="(1+3i)(3-i)=3-i+9i-3i^2=3+8i+3=6+8i" /></p>
      <p className="mt-2">对应点 <MathTex tex="(6,8)" />，在第一象限</p>
    </>
  ),
  'cq-3': (
    <>
      <p className="mt-2">先求 <MathTex tex="z" />：上下同乘共轭 <MathTex tex="1-i" /></p>
      <p className="mt-2"><MathTex tex="z=\frac{2i}{1+i}=\frac{2i(1-i)}{(1+i)(1-i)}=\frac{2i-2i^2}{2}=\frac{2+2i}{2}=1+i" /></p>
      <p className="mt-2"><MathTex tex="|z|=\sqrt{1^2+1^2}=\sqrt{2}" /></p>
    </>
  ),
  'cq-4': (
    <>
      <p className="mt-2">由 <MathTex tex="i(1-z)=1" />，得 <MathTex tex="1-z=\frac{1}{i}=\frac{i}{i^2}=-i" /></p>
      <p className="mt-2">所以 <MathTex tex="z=1+i" />，<MathTex tex="\bar{z}=1-i" /></p>
      <p className="mt-2"><MathTex tex="z+\bar{z}=(1+i)+(1-i)=2" /></p>
    </>
  ),
  'cq-5': (
    <>
      <p className="mt-2"><MathTex tex="z^2=(1+i)^2=2i" /></p>
      <p className="mt-2"><MathTex tex="z^2-2z=2i-2(1+i)=2i-2-2i=-2" /></p>
      <p className="mt-2"><MathTex tex="|z^2-2z|=|-2|=2" /></p>
    </>
  ),
  'cq-6': (
    <>
      <p className="mt-2">模的速算，不用先算出 <MathTex tex="z" />：</p>
      <p className="mt-2"><MathTex tex="|z|=\frac{|2+i|}{|1+i|}=\frac{\sqrt{5}}{\sqrt{2}}=\frac{\sqrt{10}}{2}" /></p>
    </>
  ),
  'cq-7': (
    <>
      <p className="mt-2"><MathTex tex="i^3=-i" />，所以</p>
      <p className="mt-2"><MathTex tex="(1+i)(-i)=-i-i^2=-i+1=1-i" /></p>
    </>
  ),
  'cq-8': (
    <>
      <p className="mt-2">上下同乘共轭 <MathTex tex="1-i" />：</p>
      <p className="mt-2"><MathTex tex="\frac{(3+i)(1-i)}{(1+i)(1-i)}=\frac{3-3i+i-i^2}{2}=\frac{4-2i}{2}=2-i" /></p>
      <p className="mt-2">对应点 <MathTex tex="(2,-1)" />，在第四象限</p>
    </>
  ),
  'cq-9': (
    <>
      <p className="mt-2">展开，得 <MathTex tex="(a+i)(1-ai)=a-a^2i+i-ai^2=2a+(1-a^2)i" /></p>
      <p className="mt-2">结果是实数 2，所以虚部 = 0，得 <MathTex tex="1-a^2=0" />，<MathTex tex="a=\pm 1" /></p>
      <p className="mt-2">实部 = 2，得 <MathTex tex="2a=2" />，所以 <MathTex tex="a=1" /></p>
    </>
  ),
  'cq-10': (
    <>
      <p className="mt-2">先算 <MathTex tex="(1-i)^2=1-2i+i^2=-2i" /></p>
      <p className="mt-2">再平方，得 <MathTex tex="(-2i)^2=4i^2=-4" /></p>
    </>
  ),
  'cq-12': (
    <>
      <p className="mt-2">用求根公式：<MathTex tex="x=\frac{2 \pm \sqrt{4-8}}{2}=\frac{2 \pm 2i}{2}=1 \pm i" /></p>
      <p className="mt-2">所以 <MathTex tex="z=1+i" /> 或 <MathTex tex="z=1-i" /></p>
      <p className="mt-2"><MathTex tex="|z|=\sqrt{1^2+1^2}=\sqrt{2}" /></p>
      <p className="mt-2"><strong>速算技巧：</strong>实系数方程的两根互为共轭，由韦达定理 <MathTex tex="z \cdot \bar{z}=2" />，即 <MathTex tex="|z|^2=2" />，所以 <MathTex tex="|z|=\sqrt{2}" /></p>
    </>
  ),
  'cq-13': (
    <>
      <p className="mt-2">向量 <MathTex tex="\overrightarrow{AB}" /> 对应的复数 = 终点 - 起点 = <MathTex tex="z_2 - z_1" /></p>
      <p className="mt-2"><MathTex tex="z_2-z_1=(-1+i)-(2+3i)=-3-2i" /></p>
      <p className="mt-2"><strong>几何意义：</strong>复数的减法对应复平面上的向量，这是 2026 可能考的交汇考法</p>
    </>
  ),
  'cq-14': (
    <>
      <p className="mt-2"><MathTex tex="2025 \div 4" /> 余 <strong>1</strong>，所以 <MathTex tex="i^{2025} = i" /></p>
      <p className="mt-2"><MathTex tex="2026 \div 4" /> 余 <strong>2</strong>，所以 <MathTex tex="i^{2026} = -1" /></p>
      <p className="mt-2">因此 <MathTex tex="i^{2025}+i^{2026} = i+(-1) = i-1" /></p>
    </>
  ),
  'cq-15': (
    <>
      <p className="mt-2">纯虚数条件：实部 = 0 <strong>且</strong> 虚部 <MathTex tex="\neq" /> 0</p>
      <p className="mt-2">实部 = 0：<MathTex tex="m^2-4=0" />，得 <MathTex tex="m=\pm 2" /></p>
      <p className="mt-2">检查虚部：<MathTex tex="m+2 \neq 0" />，所以 <MathTex tex="m \neq -2" /></p>
      <p className="mt-2">取交集，得 <MathTex tex="m = 2" /></p>
    </>
  ),
  'cq-16': (
    <>
      <p className="mt-2"><MathTex tex="|z_1-z_2|" /> 的几何意义：复平面上两点之间的距离</p>
      <p className="mt-2"><MathTex tex="z_1-z_2=(2+3i)-(-1-i)=3+4i" /></p>
      <p className="mt-2"><MathTex tex="|z_1-z_2|=\sqrt{3^2+4^2}=\sqrt{25}=5" /></p>
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
              {complexExplanations[q.id] && <div className="mt-1">{complexExplanations[q.id]}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ComplexAnswers() {
  return (
    <section className="mb-8 print-answers">
      <PageBreak label="答案与解析" />
      <h2 className="text-xl font-bold text-gray-900 mb-4">📝 1.1 复数 — 答案与解析</h2>
      <AnswerSection title="一、虚数单位 i — 即时练习" questions={complexPractice1} />
      <AnswerSection title="二、复数的概念 — 即时练习" questions={complexPractice2} />
      <AnswerSection title="三、复数的相等 — 即时练习" questions={complexPractice3} />
      <AnswerSection title="四、四则运算 — 即时练习" questions={complexPractice4} />
      <AnswerSection title="五、复平面 — 即时练习" questions={complexPractice5} />
      <AnswerSection title="高考真题练习" questions={complexQuizQuestions} />
    </section>
  );
}
