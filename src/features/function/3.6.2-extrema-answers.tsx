import { Math as MathTex, PageBreak } from '@/components/shared';

export const extremaExplanations: Record<string, React.ReactNode> = {
  // ── 2.1 例 1 后即时练习（求多项式极值） ──
  'dex1-1': <><p className="mt-2"><MathTex tex="f'(x)=6x^2-18x+12=6(x-1)(x-2)" />，驻点 <MathTex tex="x=1,\,2" />。<br /><strong>判号</strong>：<MathTex tex="x<1" /> 时 <MathTex tex="f'>0" />；<MathTex tex="1<x<2" /> 时 <MathTex tex="f'<0" />；<MathTex tex="x>2" /> 时 <MathTex tex="f'>0" />。<br /><MathTex tex="x=1" /> 处左正右负 → <strong>极大值</strong> <MathTex tex="f(1)=2-9+12-3=2" />；<MathTex tex="x=2" /> 处左负右正 → <strong>极小值</strong> <MathTex tex="f(2)=16-36+24-3=1" />。</p></>,
  'dex1-2': <><p className="mt-2"><MathTex tex="f'(x)=3x^2-3=3(x-1)(x+1)" />，驻点 <MathTex tex="x=\pm 1" />。<br /><strong>判号</strong>：<MathTex tex="x<-1" /> 时 <MathTex tex="f'>0" />；<MathTex tex="-1<x<1" /> 时 <MathTex tex="f'<0" />；<MathTex tex="x>1" /> 时 <MathTex tex="f'>0" />。<br /><MathTex tex="x=-1" /> 处左正右负 → <strong>极大值</strong> <MathTex tex="f(-1)=-1+3+1=3" />；<MathTex tex="x=1" /> 处左负右正 → <strong>极小值</strong> <MathTex tex="f(1)=1-3+1=-1" />。</p></>,
  // ── 例 3 后即时练习（含参讨论极值点） ──
  'dex3-1': <><p className="mt-2"><MathTex tex="f'(x)=3x^2+a" />，令 <MathTex tex="f'(x)=0" /> 得 <MathTex tex="x^2=-\dfrac{a}{3}" />。<br />要有两个不同实数解（即有极值点），需要 <MathTex tex="-\dfrac{a}{3}>0" />，即 <MathTex tex="a<0" />。</p></>,
  'dex3-2': <><p className="mt-2"><MathTex tex="f'(x)=3x^2-2ax=x(3x-2a)" />，令 <MathTex tex="f'(x)=0" /> 得 <MathTex tex="x=0" /> 或 <MathTex tex="x=\dfrac{2a}{3}" />。<br />要有两个不同极值点，需要两个驻点不重合，即 <MathTex tex="\dfrac{2a}{3}\ne 0" />，即 <MathTex tex="a\ne 0" />。</p></>,
  // ── 例 4 后即时练习（已知极值点反求参数） ──
  'dex4-1': <><p className="mt-2"><MathTex tex="f'(x)=3x^2-2ax+3" />，由 <MathTex tex="x=1" /> 是极值点，得 <MathTex tex="f'(1)=3-2a+3=0" />，解得 <MathTex tex="a=3" />。</p></>,
  'dex4-2': <><p className="mt-2"><MathTex tex="f'(x)=3x^2+2ax" />，由 <MathTex tex="f'(1)=0" /> 得 <MathTex tex="3+2a=0" />，即 <MathTex tex="a=-\dfrac{3}{2}" />。<br />由 <MathTex tex="f(1)=0" /> 得 <MathTex tex="1+a+b=0" />，代入 <MathTex tex="a=-\dfrac{3}{2}" /> 得 <MathTex tex="b=\dfrac{1}{2}" />。</p></>,
};

export function ExtremaAnswers() {
  return (
    <section className="print-answers">
      <PageBreak label="答案与解析" />
      <h2 className="text-xl font-bold text-gray-900 mb-4">📝 3.6.2 极值 — 答案与解析</h2>
      <div className="space-y-2 text-[0.95rem]">
        {Object.entries(extremaExplanations).map(([id, expl]) => (
          <div key={id} className="border-b border-gray-200 pb-1">
            <span className="font-bold text-gray-800 mr-2">{id}</span>
            {expl}
          </div>
        ))}
      </div>
    </section>
  );
}
