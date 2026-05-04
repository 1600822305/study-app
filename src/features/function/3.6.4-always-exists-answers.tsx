import { Math as MathTex, PageBreak } from '@/components/shared';

export const alwaysExistsExplanations: Record<string, React.ReactNode> = {
  // ── 例 1 同款练习（恒成立·最值转化） ──
  'aex1-1': <><p className="mt-2"><strong>① 转化</strong>：恒有 <MathTex tex="f(x)\ge 0" /> 在 <MathTex tex="[0,5]" /> 上成立，等价于 <MathTex tex="f_{\min}\ge 0" />。<br /><strong>② 求最小值</strong>：<MathTex tex="f'(x)=2x-4" />，令 <MathTex tex="f'(x)=0" />，得驻点 <MathTex tex="x=2" />（在 <MathTex tex="[0,5]" /> 内 ✓）。候选点 <MathTex tex="0,2,5" />。代入：<MathTex tex="f(0)=a" />，<MathTex tex="f(2)=4-8+a=a-4" />，<MathTex tex="f(5)=25-20+a=a+5" />。最小值为 <MathTex tex="a-4" />。<br /><strong>③ 解参数</strong>：由 <MathTex tex="a-4\ge 0" />，得 <MathTex tex="a\ge 4" />。</p></>,

  // ── 例 2 同款练习（存在性·最值转化） ──
  'aex2-1': <><p className="mt-2"><strong>① 转化</strong>：存在 <MathTex tex="x\in[0,5]" /> 使 <MathTex tex="f(x)\le 0" />，等价于 <MathTex tex="f_{\min}\le 0" />。<br /><strong>② 求最小值</strong>：<MathTex tex="f'(x)=2x-4" />，令 <MathTex tex="f'(x)=0" />，得驻点 <MathTex tex="x=2" />（在 <MathTex tex="[0,5]" /> 内 ✓）。候选点 <MathTex tex="0,2,5" />。代入：<MathTex tex="f(0)=a" />，<MathTex tex="f(2)=a-4" />，<MathTex tex="f(5)=a+5" />。最小值为 <MathTex tex="a-4" />。<br /><strong>③ 解参数</strong>：由 <MathTex tex="a-4\le 0" />，得 <MathTex tex="a\le 4" />。</p></>,

  // ── 例 3 同款练习（分离参数法） ──
  'aex3-1': <><p className="mt-2"><strong>① 分参</strong>：<MathTex tex="\ln x\le ax+1" /> 即 <MathTex tex="\ln x-1\le ax" />。当 <MathTex tex="x>0" />，两边除以 <MathTex tex="x" />（恒正）：<MathTex tex="a\ge \dfrac{\ln x-1}{x}" /> 恒成立，等价于 <MathTex tex="a\ge \max g(x)" />，其中 <MathTex tex="g(x)=\dfrac{\ln x-1}{x}" />。<br /><strong>② 求 <MathTex tex="g(x)" /> 最大值</strong>：商法则求导 <MathTex tex="g'(x)=\dfrac{\frac{1}{x}\cdot x-(\ln x-1)\cdot 1}{x^2}=\dfrac{2-\ln x}{x^2}" />。分母 <MathTex tex="x^2>0" /> 恒正可约，看分子 <MathTex tex="2-\ln x" />。令 <MathTex tex="2-\ln x=0" />，得 <MathTex tex="\ln x=2" />，即 <MathTex tex="x=e^2" />。<br /><strong>判号</strong>：<MathTex tex="0<x<e^2" /> 时 <MathTex tex="\ln x<2" />，<MathTex tex="g'>0" /> 递增；<MathTex tex="x>e^2" /> 时 <MathTex tex="g'<0" /> 递减。所以 <MathTex tex="x=e^2" /> 处取得最大值 <MathTex tex="g(e^2)=\dfrac{2-1}{e^2}=\dfrac{1}{e^2}" />。<br /><strong>③ 解参数</strong>：<MathTex tex="a\ge \dfrac{1}{e^2}" />，最小值为 <MathTex tex="\dfrac{1}{e^2}" />。</p></>,
};

export function AlwaysExistsAnswers() {
  return (
    <section className="print-answers">
      <PageBreak label="答案与解析" />
      <h2 className="text-xl font-bold text-gray-900 mb-4">📝 3.6.4 恒成立与存在性 — 答案与解析</h2>
      <div className="space-y-2 text-[0.95rem]">
        {Object.entries(alwaysExistsExplanations).map(([id, expl]) => (
          <div key={id} className="border-b border-gray-200 pb-1">
            <span className="font-bold text-gray-800 mr-2">{id}</span>
            {expl}
          </div>
        ))}
      </div>
    </section>
  );
}
