import { Math as MathTex, PageBreak } from '@/components/shared';

export const extremaExplanations: Record<string, React.ReactNode> = {
  // ── 2.1 例 1 后即时练习（求多项式极值） ──
  'dex1-1': <><p className="mt-2"><MathTex tex="f'(x)=6x^2-18x+12=6(x-1)(x-2)" />，驻点 <MathTex tex="x=1,\,2" />。<br /><strong>判号</strong>：<MathTex tex="x<1" /> 时 <MathTex tex="f'>0" />；<MathTex tex="1<x<2" /> 时 <MathTex tex="f'<0" />；<MathTex tex="x>2" /> 时 <MathTex tex="f'>0" />。<br /><MathTex tex="x=1" /> 处左正右负 → <strong>极大值</strong> <MathTex tex="f(1)=2-9+12-3=2" />；<MathTex tex="x=2" /> 处左负右正 → <strong>极小值</strong> <MathTex tex="f(2)=16-36+24-3=1" />。</p></>,
  'dex1-2': <><p className="mt-2"><MathTex tex="f'(x)=3x^2-3=3(x-1)(x+1)" />，驻点 <MathTex tex="x=\pm 1" />。<br /><strong>判号</strong>：<MathTex tex="x<-1" /> 时 <MathTex tex="f'>0" />；<MathTex tex="-1<x<1" /> 时 <MathTex tex="f'<0" />；<MathTex tex="x>1" /> 时 <MathTex tex="f'>0" />。<br /><MathTex tex="x=-1" /> 处左正右负 → <strong>极大值</strong> <MathTex tex="f(-1)=-1+3+1=3" />；<MathTex tex="x=1" /> 处左负右正 → <strong>极小值</strong> <MathTex tex="f(1)=1-3+1=-1" />。</p></>,
  'dex2-1': <><p className="mt-2"><strong>定义域</strong>：<MathTex tex="\ln x" /> 要求 <MathTex tex="x>0" />，所以定义域为 <MathTex tex="(0,+\infty)" />。<br /><MathTex tex="f'(x)=\dfrac{1}{x}-1=\dfrac{1-x}{x}" />。分母 <MathTex tex="x>0" /> 恒正可约，看分子 <MathTex tex="1-x" />。令 <MathTex tex="f'(x)=0" /> 得驻点 <MathTex tex="x=1" />（在定义域内 ✓）。<br /><strong>判号</strong>：<MathTex tex="0<x<1" /> 时 <MathTex tex="1-x>0" />，<MathTex tex="f'>0" />；<MathTex tex="x>1" /> 时 <MathTex tex="1-x<0" />，<MathTex tex="f'<0" />。<br /><MathTex tex="x=1" /> 处左正右负 → <strong>极大值</strong> <MathTex tex="f(1)=\ln 1-1=-1" />；没有左负右正的位置 → <strong>无极小值</strong>。</p></>,
  'dex3-1': <><p className="mt-2"><strong>定义域</strong>：<MathTex tex="\mathbb{R}" />。<br /><strong>求导</strong>（商法则）：<MathTex tex="f'(x)=\dfrac{x'\cdot e^x-x\cdot(e^x)'}{(e^x)^2}=\dfrac{e^x-xe^x}{e^{2x}}=\dfrac{1-x}{e^x}" />。<br />分母 <MathTex tex="e^x>0" /> 恒正可约，看分子 <MathTex tex="1-x" />。令 <MathTex tex="f'(x)=0" /> 得驻点 <MathTex tex="x=1" />。<br /><strong>判号</strong>：<MathTex tex="x<1" /> 时 <MathTex tex="1-x>0" />，<MathTex tex="f'>0" />；<MathTex tex="x>1" /> 时 <MathTex tex="1-x<0" />，<MathTex tex="f'<0" />。<br /><MathTex tex="x=1" /> 处左正右负 → <strong>极大值</strong> <MathTex tex="f(1)=\dfrac{1}{e}" />；无左负右正位置 → <strong>无极小值</strong>。</p></>,
  'dex3-2': <><p className="mt-2"><strong>定义域</strong>：<MathTex tex="\mathbb{R}" />。<br /><strong>求导</strong>（乘积法则）：<MathTex tex="f'(x)=(x-2)'\cdot e^x+(x-2)\cdot(e^x)'=e^x+(x-2)e^x=(x-1)e^x" />。<br /><MathTex tex="e^x>0" /> 恒正可约，看 <MathTex tex="x-1" />。令 <MathTex tex="f'(x)=0" /> 得驻点 <MathTex tex="x=1" />。<br /><strong>判号</strong>：<MathTex tex="x<1" /> 时 <MathTex tex="x-1<0" />，<MathTex tex="f'<0" />；<MathTex tex="x>1" /> 时 <MathTex tex="x-1>0" />，<MathTex tex="f'>0" />。<br /><MathTex tex="x=1" /> 处左负右正 → <strong>极小值</strong> <MathTex tex="f(1)=(1-2)e^1=-e" />；无左正右负位置 → <strong>无极大值</strong>。</p></>,
  'dex4-1': <><p className="mt-2"><strong>定义域</strong>：<MathTex tex="x>0" />。<br /><strong>求导</strong>（商法则）：<MathTex tex="f'(x)=\dfrac{(\ln x)'\cdot x-\ln x\cdot x'}{x^2}=\dfrac{1-\ln x}{x^2}" />。<br />分母 <MathTex tex="x^2>0" /> 恒正可约，看分子 <MathTex tex="1-\ln x" />。令 <MathTex tex="1-\ln x=0" />，<MathTex tex="\ln x=1" />，得驻点 <MathTex tex="x=e" />（在定义域内 ✓）。<br /><strong>判号</strong>：<MathTex tex="0<x<e" /> 时 <MathTex tex="\ln x<1" />，<MathTex tex="1-\ln x>0" />，<MathTex tex="f'>0" />；<MathTex tex="x>e" /> 时 <MathTex tex="\ln x>1" />，<MathTex tex="1-\ln x<0" />，<MathTex tex="f'<0" />。<br /><MathTex tex="x=e" /> 处左正右负 → <strong>极大值</strong> <MathTex tex="f(e)=\dfrac{\ln e}{e}=\dfrac{1}{e}" />；无左负右正位置 → <strong>无极小值</strong>。</p></>,
  'dex4-2': <><p className="mt-2"><strong>定义域</strong>：<MathTex tex="x\ne 1" />。<br /><strong>求导</strong>（商法则）：<MathTex tex="f'(x)=\dfrac{2x(x-1)-x^2\cdot 1}{(x-1)^2}=\dfrac{x^2-2x}{(x-1)^2}=\dfrac{x(x-2)}{(x-1)^2}" />。<br />分母 <MathTex tex="(x-1)^2>0" /> 恒正可约，看分子 <MathTex tex="x(x-2)" />。令 <MathTex tex="x(x-2)=0" /> 得驻点 <MathTex tex="x=0" />、<MathTex tex="x=2" />（均在定义域内 ✓）。<br /><strong>判号</strong>（注意 <MathTex tex="x=1" /> 是间断点不是驻点）：<br /><MathTex tex="x<0" />：<MathTex tex="x<0" />、<MathTex tex="x-2<0" />，分子正，<MathTex tex="f'>0" />。<br /><MathTex tex="0<x<1" />：<MathTex tex="x>0" />、<MathTex tex="x-2<0" />，分子负，<MathTex tex="f'<0" />。<br /><MathTex tex="1<x<2" />：同上，<MathTex tex="f'<0" />。<br /><MathTex tex="x>2" />：分子正，<MathTex tex="f'>0" />。<br /><MathTex tex="x=0" /> 处左正右负 → <strong>极大值</strong> <MathTex tex="f(0)=\dfrac{0}{-1}=0" />；<MathTex tex="x=2" /> 处左负右正 → <strong>极小值</strong> <MathTex tex="f(2)=\dfrac{4}{1}=4" />。<br /><span className="text-red-700"><strong>⚠️</strong> 极大值 <MathTex tex="0" /> 小于极小值 <MathTex tex="4" /> —— 这是合法的，因为间断点 <MathTex tex="x=1" /> 把定义域切成两段，极值是<strong>局部</strong>概念。</span></p></>,
};

export function ExtremaAnswers() {
  return (
    <section className="print-answers">
      <PageBreak label="答案与解析" />
      <h2 className="text-xl font-bold text-gray-900 mb-4">📝 3.6.2 极值与最值 — 答案与解析</h2>
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
