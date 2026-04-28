import { Math as MathTex, PageBreak } from '@/components/shared';

export const derivativeBasicExplanations: Record<string, React.ReactNode> = {
  'dlf-1': <><p className="mt-2">套万能公式 <MathTex tex="(\alpha-\beta)f'(x_0)" />：<MathTex tex="\alpha=3,\beta=-2" />，得 <MathTex tex="(3-(-2))\cdot 3=5\cdot 3=15" />。</p></>,
  'dlf-2': <><p className="mt-2">分子增量 <MathTex tex="-\Delta x" />，分母 <MathTex tex="\Delta x" />，系数 <MathTex tex="k=-1" />，得 <MathTex tex="-1\cdot f'(1)=-1\cdot(-2)=2" />。</p></>,
  'dlf-4': <><p className="mt-2">分子 <MathTex tex="f(x_0)-f(x_0-3h)" /> 顺序反+负增量，等价于 <MathTex tex="\lim\dfrac{f(x_0-3h)-f(x_0)}{-h}" />（同乘 <MathTex tex="-1" />），<MathTex tex="k=3" />，得 <MathTex tex="3f'(x_0)=15" />。</p></>,
  'dbp1-1': <><p className="mt-2">常数归零：<MathTex tex="(C)'=0" />。所以 <MathTex tex="f'(x)=0" />（不是 <MathTex tex="5" />）。</p></>,
  'dbp1-2': <><p className="mt-2">先改写：<MathTex tex="\sqrt{x}=x^{\frac{1}{2}}" />。套幂函数公式 <MathTex tex="f'(x)=\tfrac{1}{2}x^{-\frac{1}{2}}=\dfrac{1}{2\sqrt{x}}" />。</p></>,
  'dbp1-3': <><p className="mt-2"><MathTex tex="(e^x)'=e^x" />。代入 <MathTex tex="x=\ln 2" />，得 <MathTex tex="f'(\ln 2)=e^{\ln 2}=2" />。</p></>,
  'dbp1-4': <><p className="mt-2">通用指数公式 <MathTex tex="(a^x)'=a^x\ln a" />，这里 <MathTex tex="a=2" />，所以 <MathTex tex="f'(x)=2^x\ln 2" />。</p></>,
  'dbp1-5': <><p className="mt-2"><MathTex tex="(\ln x)'=\dfrac{1}{x}" />。代入 <MathTex tex="x=2" />，得 <MathTex tex="f'(2)=\dfrac{1}{2}" />。</p></>,
  'dbp1-6': <><p className="mt-2">通用对数公式 <MathTex tex="(\log_a x)'=\dfrac{1}{x\ln a}" />，这里 <MathTex tex="a=2" />，所以 <MathTex tex="f'(x)=\dfrac{1}{x\ln 2}" />。</p></>,
  'dbp1-7': <><p className="mt-2"><MathTex tex="(\sin x)'=\cos x" />。代入 <MathTex tex="x=\dfrac{\pi}{3}" />，得 <MathTex tex="f'\!\left(\tfrac{\pi}{3}\right)=\cos\tfrac{\pi}{3}=\dfrac{1}{2}" />。</p></>,
  'dbp1-8': <><p className="mt-2"><MathTex tex="(\cos x)'=-\sin x" />（<strong>带负号</strong>）。代入 <MathTex tex="x=\dfrac{\pi}{6}" />：<MathTex tex="f'\!\left(\tfrac{\pi}{6}\right)=-\sin\tfrac{\pi}{6}=-\dfrac{1}{2}" />。</p></>,
  'drp1-1': <><p className="mt-2">和差法则逐项求导：<MathTex tex="(3x^2)'=6x" />，<MathTex tex="(-4x)'=-4" />，<MathTex tex="(1)'=0" />。相加得 <MathTex tex="f'(x)=6x-4" />。</p></>,
  'drp1-2': <><p className="mt-2"><MathTex tex="(2x^3)'=6x^2" />，<MathTex tex="(-\sin x)'=-\cos x" />。所以 <MathTex tex="f'(x)=6x^2-\cos x" />。</p></>,
  'drp1-3': <><p className="mt-2">先求导：<MathTex tex="f'(x)=3e^x+\dfrac{2}{x}" />。代入 <MathTex tex="x=1" />：<MathTex tex="f'(1)=3e+2" />。</p></>,
  'drp1-4': <><p className="mt-2">把 <MathTex tex="a,b,c" /> 当常数，对 <MathTex tex="x" /> 求导：<MathTex tex="(ax^2)'=2ax" />，<MathTex tex="(bx)'=b" />，<MathTex tex="(c)'=0" />。所以 <MathTex tex="f'(x)=2ax+b" />。</p></>,
};

export function DerivativeBasicAnswers() {
  return (
    <section className="print-answers">
      <PageBreak label="答案与解析" />
      <h2 className="text-xl font-bold text-gray-900 mb-4">📝 3.4 导数基础 — 答案与解析</h2>
      <div className="space-y-2 text-[0.95rem]">
        {Object.entries(derivativeBasicExplanations).map(([id, expl]) => (
          <div key={id} className="border-b border-gray-200 pb-1">
            <span className="font-bold text-gray-800 mr-2">{id}</span>
            {expl}
          </div>
        ))}
      </div>
    </section>
  );
}
