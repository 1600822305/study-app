import type { ReactNode } from 'react';
import { Math as MathTex, PageBreak } from '@/components/shared';

export const derivativePrereqExplanations: Record<string, ReactNode> = {
  'dpp1-1': <><p className="mt-2">把整个 <MathTex tex="x+\Delta x" /> 当整体代入 <MathTex tex="f(x)=x^2+1" />。</p><p className="mt-1 text-center"><MathTex tex="f(x+\Delta x)=(x+\Delta x)^2+1" /></p></>,
  'dpp1-2': <><p className="mt-2"><MathTex tex="f(x+\Delta x)=2(x+\Delta x)^2=2x^2+4x\Delta x+2(\Delta x)^2" />。</p><p className="mt-1">作差 <MathTex tex="2x^2" /> 消掉：</p><p className="mt-1 text-center"><MathTex tex="f(x+\Delta x)-f(x)=4x\Delta x+2(\Delta x)^2" /></p></>,
  'dpp1-3': <><p className="mt-2">展开 <MathTex tex="(x+\Delta x)^3=x^3+3x^2\Delta x+3x(\Delta x)^2+(\Delta x)^3" />。</p><p className="mt-1">作差 <MathTex tex="x^3" /> 消掉，提 <MathTex tex="\Delta x" />：</p><p className="mt-1 text-center"><MathTex tex="\dfrac{f(x+\Delta x)-f(x)}{\Delta x}=3x^2+3x\Delta x+(\Delta x)^2" /></p></>,
  'dpp1-4': <><p className="mt-2">代入并通分（公分母 <MathTex tex="x(x+\Delta x)" />）：</p><p className="mt-1 text-center"><MathTex tex="\dfrac{2}{x+\Delta x}-\dfrac{2}{x}=\dfrac{2x-2(x+\Delta x)}{x(x+\Delta x)}=\dfrac{-2\Delta x}{x(x+\Delta x)}" /></p></>,
  'dpp1-5': <><p className="mt-2">作差：<MathTex tex="\sqrt{x+1+\Delta x}-\sqrt{x+1}" />，乘共轭 <MathTex tex="\sqrt{x+1+\Delta x}+\sqrt{x+1}" />：</p><p className="mt-1 text-center"><MathTex tex="=\dfrac{(x+1+\Delta x)-(x+1)}{\sqrt{x+1+\Delta x}+\sqrt{x+1}}=\dfrac{\Delta x}{\sqrt{x+1+\Delta x}+\sqrt{x+1}}" /></p></>,
  'dpp2-1': <><p className="mt-2">套斜率公式：</p><p className="mt-1 text-center"><MathTex tex="k=\dfrac{12-3}{5-2}=\dfrac{9}{3}=3" /></p></>,
  'dpp2-3': <><p className="mt-2">点斜式：<MathTex tex="y-(-2)=4(x-1)" />，即 <MathTex tex="y+2=4x-4" />。</p><p className="mt-1 text-center"><MathTex tex="y=4x-6" /></p></>,
  'dpp2-4': <><p className="mt-2">套点斜式 <MathTex tex="y-y_1=k(x-x_1)" />，这里 <MathTex tex="y_1=f(x_1)" />、<MathTex tex="k=2" />：</p><p className="mt-1 text-center"><MathTex tex="y-f(x_1)=2(x-x_1)" /></p></>,
  'dpp3-1': <><p className="mt-2">平均变化率：</p><p className="mt-1 text-center"><MathTex tex="\dfrac{f(3)-f(1)}{3-1}=\dfrac{9-1}{2}=4" /></p></>,
  'dpp3-2': <><p className="mt-2">用第一节的结果，展开 <MathTex tex="(x_1+\Delta x)^2-x_1^2=2x_1\Delta x+(\Delta x)^2=\Delta x(2x_1+\Delta x)" />：</p><p className="mt-1 text-center"><MathTex tex="\dfrac{\Delta x(2x_1+\Delta x)}{\Delta x}=2x_1+\Delta x" /></p></>,
  'dpp3-3': <><p className="mt-2">平均速度：</p><p className="mt-1 text-center"><MathTex tex="\bar{v}=\dfrac{s(2)-s(1)}{2-1}=\dfrac{6-2}{1}=4" /></p></>,
  'dpp3-4': <><p className="mt-2">这个表达式是过曲线上 <MathTex tex="(x_1, f(x_1))" /> 和 <MathTex tex="(x_1+\Delta x, f(x_1+\Delta x))" /> 两点的<strong>割线</strong>斜率（两点都在曲线上）。切线斜率要等 <MathTex tex="\Delta x" /> 变得无限小才能得到（下一节讲）。</p></>,
  'dpp4-1': <><p className="mt-2">让 <MathTex tex="\Delta x" /> 趋于 0，表达式 <MathTex tex="3+\Delta x" /> 趋向 3。</p></>,
  'dpp4-2': <><p className="mt-2">让 <MathTex tex="\Delta x" /> 趋于 0，<MathTex tex="2x_1" /> 不变，<MathTex tex="\Delta x" /> 部分消失，只剩 <MathTex tex="2x_1" />。</p></>,
  'dpp4-a3': <><p className="mt-2">套四步法：<MathTex tex="f(x+\Delta x)-f(x)=\Delta x(2x+\Delta x)" />，除以 <MathTex tex="\Delta x" /> 得 <MathTex tex="2x+\Delta x" />，取极限得 <MathTex tex="f'(x)=2x" />。</p><p className="mt-1">代入 <MathTex tex="x=1" />：<MathTex tex="f'(1)=2\times 1=2" /></p></>,
  'dpp4-3': <><p className="mt-2">根据上面示例的结果 <MathTex tex="f'(x_1)=2x_1" />，代入 <MathTex tex="x_1=3" />：</p><p className="mt-1 text-center"><MathTex tex="f'(3)=2\times 3=6" /></p></>,
  'dpp4-4': <><p className="mt-2">导数是平均变化率的极限（让 <MathTex tex="\Delta x\to 0" />）。平均变化率 = 割线斜率；取极限后，割线变切线，斜率变切线斜率。</p></>,
  'dpq-1': <><p className="mt-2"><MathTex tex="3(x+\Delta x)^2-3x^2=6x\Delta x+3(\Delta x)^2=\Delta x(6x+3\Delta x)" />。</p></>,
  'dpq-2': <><p className="mt-2">套斜率公式：<MathTex tex="k=\dfrac{-6-3}{4-1}=\dfrac{-9}{3}=-3" />。</p></>,
  'dpq-3': <><p className="mt-2">平均变化率 <MathTex tex="=\dfrac{f(5)-f(2)}{5-2}=\dfrac{25-4}{3}=7" />。</p></>,
  'dpq-4': <><p className="mt-2">分母无 <MathTex tex="\Delta x" />，把 <MathTex tex="\Delta x" /> 换 0：<MathTex tex="4+3\times 0=4" />。</p></>,
  'dpq-5': <><p className="mt-2">套四步法：分子 <MathTex tex="\Delta x(6x+3\Delta x)" />，除以 <MathTex tex="\Delta x" /> 得 <MathTex tex="6x+3\Delta x" />，取极限得 <MathTex tex="6x" />。</p></>,
  'dpq-6': <><p className="mt-2">直接代入 <MathTex tex="x=2" />：<MathTex tex="f'(2)=6\times 2=12" />。</p></>,
  'dpq-7': <><p className="mt-2">切点：<MathTex tex="(1,\,f(1))=(1,1)" />；斜率：<MathTex tex="f'(x)=2x" />，<MathTex tex="f'(1)=2" />。</p><p className="mt-1">点斜式：<MathTex tex="y-1=2(x-1)" />，整理：<MathTex tex="y=2x-1" />。</p></>,
  'dpq-8': <><p className="mt-2"><MathTex tex="f(4)=16" />，<MathTex tex="f'(x)=2x\Rightarrow f'(4)=8" />。</p><p className="mt-1"><MathTex tex="f(4)-f'(4)=16-8=8" />。</p></>,
  'dpq-9': <><p className="mt-2">导数是割线斜率取 <MathTex tex="\Delta x\to 0" /> 的极限，即<strong>切线斜率</strong>。</p></>,
  'dpq-10': <><p className="mt-2">A 错：函数值和导数值不同；C 错：求导必须化简分子才能约掉分母的 <MathTex tex="\Delta x" />；D 错：化简后极限就不是 <MathTex tex="\tfrac{0}{0}" />。B 正确。</p></>,
  'dpq-11': <><p className="mt-2">分子 <MathTex tex="(2+\Delta x)^2-4=4\Delta x+(\Delta x)^2=\Delta x(4+\Delta x)" />，约掉分母得 <MathTex tex="4+\Delta x" />，取极限得 <MathTex tex="4" />。</p><p className="mt-1 text-gray-700">这其实就是 <MathTex tex="f(x)=x^2" /> 在 <MathTex tex="x=2" /> 处的导数 <MathTex tex="f'(2)" />。</p></>,
};

export function DerivativePrereqAnswers() {
  return (
    <section className="print-answers">
      <PageBreak label="答案与解析" />
      <h2 className="text-xl font-bold text-gray-900 mb-4">📝 3.3.5 导数前置知识 — 答案与解析</h2>
      {/* 一、函数值的代入与化简 */}
      {/* 二、直线斜率与点斜式 */}
      {/* 三、平均变化率（割线斜率） */}
      {/* 四、极限直觉与瞬时变化率 */}
      {/* 五、综合自测 */}
    </section>
  );
}
