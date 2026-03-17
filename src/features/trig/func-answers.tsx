import { Math as MathTex, PageBreak } from '@/components/shared';

export function TrigFuncAnswers() {
  return (
    <section className="mb-8 print-answers">
      <PageBreak label="答案与解析" />
      <h2 className="text-xl font-bold text-gray-900 mb-4">📝 5.1 三角函数 — 答案与解析</h2>

      {/* ═══════════ 即时训练 — 图像性质（4 题）═══════════ */}
      <div className="mb-5">
        <p className="font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">即时训练 — 图像性质</p>
        <div className="columns-2 gap-4 text-gray-700">

          {/* 第 1 题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">1.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：A（<MathTex tex="[0,\;\pi]" />）</p>
              <p className="mt-1"><MathTex tex="\cos x" /> 在 <MathTex tex="[2k\pi,\;\pi+2k\pi]" /> 上递减</p>
              <p className="mt-1">取 <MathTex tex="k=0" />，得 <MathTex tex="[0,\;\pi]" /></p>
            </div>
          </div>

          {/* 第 2 题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">2.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：A（<MathTex tex="\sin\dfrac{\pi}{3} > \sin\dfrac{\pi}{4}" />）</p>
              <p className="mt-1"><MathTex tex="\sin x" /> 在 <MathTex tex="\left[0,\;\dfrac{\pi}{2}\right]" /> 上递增</p>
              <p className="mt-1"><MathTex tex="\dfrac{\pi}{3} > \dfrac{\pi}{4} \Rightarrow \sin\dfrac{\pi}{3} > \sin\dfrac{\pi}{4}" /></p>
            </div>
          </div>

          {/* 第 3 题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">3.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：B（对称中心）</p>
              <p className="mt-1"><MathTex tex="\cos\dfrac{\pi}{2}=0" />（过零点）→ 对称中心</p>
              <p className="mt-1">cos 的对称中心为 <MathTex tex="\left(\dfrac{\pi}{2}+k\pi,\;0\right)" /></p>
            </div>
          </div>

          {/* 第 4 题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">4.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：A（对称轴）</p>
              <p className="mt-1"><MathTex tex="\sin\dfrac{\pi}{2}=1" />（波峰）→ 对称轴</p>
              <p className="mt-1">sin 的对称轴为 <MathTex tex="x=\dfrac{\pi}{2}+k\pi" />（波峰/波谷处）</p>
            </div>
          </div>

        </div>
      </div>

      {/* ═══════════ 高考真题 & 精华题（8 题）═══════════ */}
      <div className="mb-5">
        <p className="font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">高考真题 & 精华题</p>
        <div className="columns-2 gap-4 text-gray-700">

          {/* 第 1 题 — 诱导公式 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">1.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：<MathTex tex="\dfrac{3}{5}" /></p>
              <p className="mt-1">由诱导公式：</p>
              <p className="text-center"><MathTex tex="\sin\!\left(\dfrac{\pi}{2} + \alpha\right) = \cos\alpha" /></p>
              <p className="text-center"><MathTex tex="\therefore \cos\alpha = \dfrac{3}{5}" /></p>
            </div>
          </div>

          {/* 第 2 题 — 周期与 ω */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">2.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：B（<MathTex tex="\pi" />）</p>
              <p className="mt-1">公式 <MathTex tex="T = \dfrac{2\pi}{\omega}" />，其中 <MathTex tex="\omega = 2" /></p>
              <p className="text-center"><MathTex tex="T = \dfrac{2\pi}{2} = \pi" /></p>
            </div>
          </div>

          {/* 第 3 题 — 单调递增区间 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">3.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：A</p>
              <p className="mt-1">令 sin 内层在 <MathTex tex="\left[-\dfrac{\pi}{2},\;\dfrac{\pi}{2}\right]" />：</p>
              <p className="text-center"><MathTex tex="-\dfrac{\pi}{2} \leq 2x-\dfrac{\pi}{6} \leq \dfrac{\pi}{2}" /></p>
              <p className="mt-1">加 <MathTex tex="\dfrac{\pi}{6}" /> 后除以 2：</p>
              <p className="text-center"><MathTex tex="-\dfrac{\pi}{6}+k\pi \leq x \leq \dfrac{\pi}{3}+k\pi" /></p>
            </div>
          </div>

          {/* 第 4 题 — 图像变换 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">4.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：A</p>
              <p className="mt-1"><strong>路线一（先平移后伸缩）：</strong></p>
              <p className="mt-1">(1) <MathTex tex="y=\sin x \xrightarrow{\text{左移 }\frac{\pi}{3}} y=\sin\!\left(x+\dfrac{\pi}{3}\right)" /></p>
              <p className="mt-1">(2) <MathTex tex="\xrightarrow{\text{横坐标}\div 2} y=\sin\!\left(2x+\dfrac{\pi}{3}\right)" /></p>
            </div>
          </div>

          {/* 第 5 题 — 由图像求解析式 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">5.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：A（<MathTex tex="2\sin\!\left(2x+\dfrac{\pi}{6}\right)" />）</p>
              <p className="mt-1">(1) 最大值 = 2 <MathTex tex="\Rightarrow A=2" /></p>
              <p className="mt-1">(2) 相邻最高点距离 = <MathTex tex="T=\pi \Rightarrow \omega=\dfrac{2\pi}{\pi}=2" /></p>
              <p className="mt-1">(3) <MathTex tex="f(0)=2\sin\varphi=1 \Rightarrow \sin\varphi=\dfrac{1}{2} \Rightarrow \varphi=\dfrac{\pi}{6}" /></p>
              <p className="text-center"><MathTex tex="\therefore f(x)=2\sin\!\left(2x+\dfrac{\pi}{6}\right)" /></p>
            </div>
          </div>

          {/* 第 6 题 — 对称轴 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">6.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：A（<MathTex tex="x = \dfrac{\pi}{6}" />）</p>
              <p className="mt-1">令 <MathTex tex="2x+\dfrac{\pi}{6}=\dfrac{\pi}{2}+k\pi" /></p>
              <p className="text-center"><MathTex tex="x=\dfrac{\pi}{6}+\dfrac{k\pi}{2}" /></p>
              <p className="mt-1">取 <MathTex tex="k=0" />，得 <MathTex tex="x=\dfrac{\pi}{6}" /></p>
            </div>
          </div>

          {/* 第 7 题 — 给定区间上的最值 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">7.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：B（−1）</p>
              <p className="mt-1"><MathTex tex="x\in\left[0,\dfrac{\pi}{2}\right] \Rightarrow u=2x+\dfrac{\pi}{6}\in\left[\dfrac{\pi}{6},\dfrac{7\pi}{6}\right]" /></p>
              <p className="mt-1">在此范围内 <MathTex tex="\sin u" /> 的最小值在 <MathTex tex="u=\dfrac{7\pi}{6}" /> 处取得：</p>
              <p className="text-center"><MathTex tex="\sin\dfrac{7\pi}{6}=-\dfrac{1}{2} \Rightarrow f=-1" /></p>
              <p className="mt-1">注意：不是 −2，因为区间内 <MathTex tex="\sin u" /> 没到 −1</p>
            </div>
          </div>

          {/* 第 8 题 — 诱导公式链式化简 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">8.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：A（<MathTex tex="\sin 2\alpha" />）</p>
              <p className="mt-1">逐项化简：</p>
              <p className="ml-4"><MathTex tex="\sin(\pi-\alpha)=\sin\alpha" /></p>
              <p className="ml-4"><MathTex tex="\cos(2\pi-\alpha)=\cos\alpha" /></p>
              <p className="ml-4"><MathTex tex="\cos(\pi+\alpha)=-\cos\alpha" /></p>
              <p className="ml-4"><MathTex tex="\sin(\alpha-\pi)=-\sin\alpha" /></p>
              <p className="mt-1">代入原式：</p>
              <p className="text-center"><MathTex tex="=\sin\alpha\cos\alpha+(-\cos\alpha)(-\sin\alpha)=2\sin\alpha\cos\alpha=\sin 2\alpha" /></p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
