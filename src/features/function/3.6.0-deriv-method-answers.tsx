import { Math as MathTex, PageBreak } from '@/components/shared';
import { derivMono1Warmup, derivMono2Variants, derivMono34Practice, derivMono56Practice, derivThreadPractice, derivHiddenZeroPractice } from './data/3.6.0/3.6.0-deriv-method-practice';
import type { QuizQuestionData } from '@/types';

export const derivMethodExplanations: Record<string, React.ReactNode> = {
  // ── 1.1 求不含参函数的单调区间 ──
  'dm1w-1': <><p className="mt-2">定义域为 <MathTex tex="\mathbb{R}" />。<MathTex tex="f'(x)=6x^2-6x-12=6(x+1)(x-2)" />，零点 <MathTex tex="x=-1,\,2" />。<br />当 <MathTex tex="x<-1" /> 时，<MathTex tex="x+1<0" />，<MathTex tex="x-2<0" />，则 <MathTex tex="f'(x)>0" />，故 <MathTex tex="f(x)" /> 递增。<br />当 <MathTex tex="-1<x<2" /> 时，<MathTex tex="x+1>0" />，<MathTex tex="x-2<0" />，则 <MathTex tex="f'(x)<0" />，故 <MathTex tex="f(x)" /> 递减。<br />当 <MathTex tex="x>2" /> 时，<MathTex tex="x+1>0" />，<MathTex tex="x-2>0" />，则 <MathTex tex="f'(x)>0" />，故 <MathTex tex="f(x)" /> 递增。<br /><strong>增区间</strong> <MathTex tex="(-\infty,-1)" /> 和 <MathTex tex="(2,+\infty)" />，<strong>减区间</strong> <MathTex tex="(-1,2)" />。</p></>,
  'dm1w-2': <><p className="mt-2">定义域为 <MathTex tex="\mathbb{R}" />。<MathTex tex="f'(x)=4x^3-4x=4x(x+1)(x-1)" />，零点 <MathTex tex="x=-1,\,0,\,1" />。<br />当 <MathTex tex="x<-1" /> 时，<MathTex tex="x<0" />，<MathTex tex="x+1<0" />，<MathTex tex="x-1<0" />，则 <MathTex tex="f'(x)<0" />，故 <MathTex tex="f(x)" /> 递减。<br />当 <MathTex tex="-1<x<0" /> 时，<MathTex tex="x<0" />，<MathTex tex="x+1>0" />，<MathTex tex="x-1<0" />，则 <MathTex tex="f'(x)>0" />，故 <MathTex tex="f(x)" /> 递增。<br />当 <MathTex tex="0<x<1" /> 时，<MathTex tex="x>0" />，<MathTex tex="x+1>0" />，<MathTex tex="x-1<0" />，则 <MathTex tex="f'(x)<0" />，故 <MathTex tex="f(x)" /> 递减。<br />当 <MathTex tex="x>1" /> 时，<MathTex tex="x>0" />，<MathTex tex="x+1>0" />，<MathTex tex="x-1>0" />，则 <MathTex tex="f'(x)>0" />，故 <MathTex tex="f(x)" /> 递增。<br /><strong>增区间</strong> <MathTex tex="(-1,0)" /> 和 <MathTex tex="(1,+\infty)" />，<strong>减区间</strong> <MathTex tex="(-\infty,-1)" /> 和 <MathTex tex="(0,1)" />。</p></>,
  'dm2v-1': <><p className="mt-2">定义域 <MathTex tex="x>0" />。<MathTex tex="f'(x)=2-\dfrac{1}{x}=\dfrac{2x-1}{x}" />。分母 <MathTex tex="x>0" /> 恒正，令分子 <MathTex tex="2x-1=0" />，得 <MathTex tex="x=\dfrac{1}{2}" />。当 <MathTex tex="0<x<\dfrac{1}{2}" /> 时，<MathTex tex="2x-1<0" />，所以 <MathTex tex="f'(x)<0" />，函数递减；当 <MathTex tex="x>\dfrac{1}{2}" /> 时，<MathTex tex="2x-1>0" />，所以 <MathTex tex="f'(x)>0" />，函数递增。<br /><strong>增区间</strong> <MathTex tex="\left(\dfrac{1}{2},+\infty\right)" />，<strong>减区间</strong> <MathTex tex="\left(0,\dfrac{1}{2}\right)" />。</p></>,
  // ── 例 3 & 例 4 综合练习 ──
  'dm34-1': <><p className="mt-2">断点 <MathTex tex="x=1" />。<MathTex tex="f'(x)=\dfrac{2x(x-1)-x^2}{(x-1)^2}=\dfrac{x(x-2)}{(x-1)^2}" />。<MathTex tex="(x-1)^2" /> 恒正（<MathTex tex="x\ne 1" />），正负只看 <MathTex tex="x(x-2)" />，零点 <MathTex tex="x=0,\,2" />。<br />当 <MathTex tex="x<0" /> 时，<MathTex tex="x<0" />，<MathTex tex="x-2<0" />，则 <MathTex tex="f'(x)>0" />，递增。<br />当 <MathTex tex="0<x<1" /> 时，<MathTex tex="x>0" />，<MathTex tex="x-2<0" />，则 <MathTex tex="f'(x)<0" />，递减。<br />当 <MathTex tex="1<x<2" /> 时，<MathTex tex="x>0" />，<MathTex tex="x-2<0" />，则 <MathTex tex="f'(x)<0" />，递减。<br />当 <MathTex tex="x>2" /> 时，<MathTex tex="x>0" />，<MathTex tex="x-2>0" />，则 <MathTex tex="f'(x)>0" />，递增。<br /><strong>增区间</strong> <MathTex tex="(-\infty,0)" /> 和 <MathTex tex="(2,+\infty)" />，<strong>减区间</strong> <MathTex tex="(0,1)" /> 和 <MathTex tex="(1,2)" />（断点 <MathTex tex="x=1" /> 隔开，不能合并）。</p></>,
  'dm34-2': <><p className="mt-2">断点 <MathTex tex="x=0" />。<MathTex tex="f'(x)=1-\dfrac{1}{x^2}=\dfrac{x^2-1}{x^2}=\dfrac{(x-1)(x+1)}{x^2}" />。<MathTex tex="x^2" /> 恒正（<MathTex tex="x\ne 0" />），正负只看 <MathTex tex="(x-1)(x+1)" />，零点 <MathTex tex="x=\pm 1" />。<br />当 <MathTex tex="x<-1" /> 时，<MathTex tex="x-1<0" />，<MathTex tex="x+1<0" />，则 <MathTex tex="f'(x)>0" />，递增。<br />当 <MathTex tex="-1<x<0" /> 时，<MathTex tex="x-1<0" />，<MathTex tex="x+1>0" />，则 <MathTex tex="f'(x)<0" />，递减。<br />当 <MathTex tex="0<x<1" /> 时，<MathTex tex="x-1<0" />，<MathTex tex="x+1>0" />，则 <MathTex tex="f'(x)<0" />，递减。<br />当 <MathTex tex="x>1" /> 时，<MathTex tex="x-1>0" />，<MathTex tex="x+1>0" />，则 <MathTex tex="f'(x)>0" />，递增。<br /><strong>增区间</strong> <MathTex tex="(-\infty,-1)" /> 和 <MathTex tex="(1,+\infty)" />，<strong>减区间</strong> <MathTex tex="(-1,0)" /> 和 <MathTex tex="(0,1)" />（断点 <MathTex tex="x=0" /> 隔开，不能合并）。</p></>,
  'dm34-3': <><p className="mt-2">定义域为 <MathTex tex="\mathbb{R}" />。<MathTex tex="f'(x)=e^x+(x+1)e^x=(x+2)e^x" />。<MathTex tex="e^x" /> 恒为正，正负只看 <MathTex tex="x+2" />，零点 <MathTex tex="x=-2" />。<br />当 <MathTex tex="x<-2" /> 时，<MathTex tex="x+2<0" />，则 <MathTex tex="f'(x)<0" />，递减。<br />当 <MathTex tex="x>-2" /> 时，<MathTex tex="x+2>0" />，则 <MathTex tex="f'(x)>0" />，递增。<br /><strong>增区间</strong> <MathTex tex="(-2,+\infty)" />，<strong>减区间</strong> <MathTex tex="(-\infty,-2)" />。</p></>,
  'dm34-4': <><p className="mt-2">定义域为 <MathTex tex="\mathbb{R}" />。<MathTex tex="f'(x)=2xe^x+x^2 e^x=x(x+2)e^x" />。<MathTex tex="e^x" /> 恒为正，正负只看 <MathTex tex="x(x+2)" />，零点 <MathTex tex="x=-2,\,0" />。<br />当 <MathTex tex="x<-2" /> 时，<MathTex tex="x<0" />，<MathTex tex="x+2<0" />，则 <MathTex tex="f'(x)>0" />，递增。<br />当 <MathTex tex="-2<x<0" /> 时，<MathTex tex="x<0" />，<MathTex tex="x+2>0" />，则 <MathTex tex="f'(x)<0" />，递减。<br />当 <MathTex tex="x>0" /> 时，<MathTex tex="x>0" />，<MathTex tex="x+2>0" />，则 <MathTex tex="f'(x)>0" />，递增。<br /><strong>增区间</strong> <MathTex tex="(-\infty,-2)" /> 和 <MathTex tex="(0,+\infty)" />，<strong>减区间</strong> <MathTex tex="(-2,0)" />。</p></>,
  'dm2v-2': <><p className="mt-2">定义域 <MathTex tex="x>0" />。<MathTex tex="f'(x)=1-\dfrac{2}{x}=\dfrac{x-2}{x}" />。分母 <MathTex tex="x>0" /> 恒正，令分子 <MathTex tex="x-2=0" />，得 <MathTex tex="x=2" />。当 <MathTex tex="0<x<2" /> 时，<MathTex tex="x-2<0" />，所以 <MathTex tex="f'(x)<0" />，函数递减；当 <MathTex tex="x>2" /> 时，<MathTex tex="x-2>0" />，所以 <MathTex tex="f'(x)>0" />，函数递增。<br /><strong>增区间</strong> <MathTex tex="(2,+\infty)" />，<strong>减区间</strong> <MathTex tex="(0,2)" />。</p></>,
  'dm56-1': <><p className="mt-2">定义域为 <MathTex tex="\mathbb{R}" />。<MathTex tex="f'(x)=3x^2-12x+9=3(x-1)(x-3)" />。解 <MathTex tex="f'(x)>0" />，得 <MathTex tex="x<1" /> 或 <MathTex tex="x>3" />；解 <MathTex tex="f'(x)<0" />，得 <MathTex tex="1<x<3" />。<br /><strong>增区间</strong> <MathTex tex="(-\infty,1)" /> 和 <MathTex tex="(3,+\infty)" />，<strong>减区间</strong> <MathTex tex="(1,3)" />。</p></>,
  'dm56-2': <><p className="mt-2">定义域 <MathTex tex="x>0" />。<MathTex tex="f'(x)=\ln x+1-1=\ln x" />。令 <MathTex tex="f'(x)=0" />，得 <MathTex tex="\ln x=0" />，解得 <MathTex tex="x=1" />。当 <MathTex tex="0<x<1" /> 时，<MathTex tex="\ln x<0" />，函数递减；当 <MathTex tex="x>1" /> 时，<MathTex tex="\ln x>0" />，函数递增。<br /><strong>增区间</strong> <MathTex tex="(1,+\infty)" />，<strong>减区间</strong> <MathTex tex="(0,1)" />。</p></>,
  'dmthread-1': <><p className="mt-2">定义域为 <MathTex tex="\mathbb{R}" />。<MathTex tex="f'(x)=(x+1)^2(x-2)" />，<MathTex tex="x=-1" /> 是偶次根，<MathTex tex="x=2" /> 是单根。用穿针引线法，从最右侧上方开始，穿过 <MathTex tex="2" /> 到下方，遇到 <MathTex tex="-1" /> 弹回下方。<br />所以 <MathTex tex="f'(x)>0" /> 的区间是 <MathTex tex="(2,+\infty)" />，<MathTex tex="f(x)" /> 单调递增；<MathTex tex="f'(x)<0" /> 的区间是 <MathTex tex="(-\infty,-1)" /> 和 <MathTex tex="(-1,2)" />，<MathTex tex="f(x)" /> 单调递减。<br /><strong>增区间</strong> <MathTex tex="(2,+\infty)" />，<strong>减区间</strong> <MathTex tex="(-\infty,-1)" /> 和 <MathTex tex="(-1,2)" />。</p></>,
  'dmhidden-1': <><p className="mt-2">定义域为 <MathTex tex="\mathbb{R}" />。<MathTex tex="f'(x)=e^x+2x-4" />，<MathTex tex="f''(x)=e^x+2>0" />，所以 <MathTex tex="f'(x)" /> 单调递增。又 <MathTex tex="f'(0)=-3<0" />，<MathTex tex="f'(1)=e-2>0" />，所以 <MathTex tex="f'(x)=0" /> 在 <MathTex tex="(0,1)" /> 上有唯一零点，设为 <MathTex tex="x_0" />。当 <MathTex tex="x<x_0" /> 时，<MathTex tex="f'(x)<0" />，<MathTex tex="f(x)" /> 递减；当 <MathTex tex="x>x_0" /> 时，<MathTex tex="f'(x)>0" />，<MathTex tex="f(x)" /> 递增。<br /><strong>增区间</strong> <MathTex tex="(x_0,+\infty)" />，<strong>减区间</strong> <MathTex tex="(-\infty,x_0)" />，其中 <MathTex tex="x_0\in(0,1)" />。</p></>,
  'dmhidden-2': <><p className="mt-2">定义域为 <MathTex tex="\mathbb{R}" />。<MathTex tex="f'(x)=-e^x-2x+4" />，<MathTex tex="f''(x)=-e^x-2<0" />，所以 <MathTex tex="f'(x)" /> 单调递减。又 <MathTex tex="f'(0)=3>0" />，<MathTex tex="f'(1)=2-e<0" />，所以 <MathTex tex="f'(x)=0" /> 在 <MathTex tex="(0,1)" /> 上有唯一零点，设为 <MathTex tex="x_0" />。当 <MathTex tex="x<x_0" /> 时，<MathTex tex="f'(x)>0" />，<MathTex tex="f(x)" /> 递增；当 <MathTex tex="x>x_0" /> 时，<MathTex tex="f'(x)<0" />，<MathTex tex="f(x)" /> 递减。<br /><strong>增区间</strong> <MathTex tex="(-\infty,x_0)" />，<strong>减区间</strong> <MathTex tex="(x_0,+\infty)" />，其中 <MathTex tex="x_0\in(0,1)" />。</p></>,
};

function AnswerSection({ title, questions }: { title: string; questions: QuizQuestionData[] }) {
  return (
    <div className="mb-5">
      <p className="font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">{title}</p>
      <div className="text-gray-700">
        {questions.map((q, i) => (
          <div key={q.id} className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">{i + 1}.</span>
            <div className="min-w-0">
              {derivMethodExplanations[q.id]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DerivMethodAnswers() {
  return (
    <section className="mb-8 print-answers">
      <PageBreak label="答案与解析" />
      <h2 className="text-xl font-bold text-gray-900 mb-4">📝 3.6.0 单调性入门 — 答案与解析</h2>
      <AnswerSection title="随手算两道" questions={derivMono1Warmup} />
      <AnswerSection title="例 2 变式两道" questions={derivMono2Variants} />
      <AnswerSection title="例 3 & 例 4 综合练习" questions={derivMono34Practice} />
      <AnswerSection title="例 5 & 例 6 综合练习" questions={derivMono56Practice} />
      <AnswerSection title="穿针引线法练习" questions={derivThreadPractice} />
      <AnswerSection title="隐零点法练习" questions={derivHiddenZeroPractice} />
    </section>
  );
}
