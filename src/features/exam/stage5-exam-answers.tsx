import { Math as MathTex, PageBreak } from '@/components/shared';

/**
 * 第五阶段考试 — 答案与解析（独立组件）
 *
 * 纯 JSX 自由布局，选择题+填空题双列，解答题单列
 */
export function Stage5ExamAnswers() {
  return (
    <section className="mb-8 print-answers">
      <PageBreak label="答案与解析" />
      <h2 className="text-xl font-bold text-gray-900 mb-4">📝 第五阶段考试 — 答案与解析</h2>

      {/* ═══════════ 一、选择题（10 题）═══════════ */}
      <div className="mb-5">
        <p className="font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">一、选择题</p>

        <div className="columns-2 gap-4 text-gray-700">

          {/* 第 1 题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">1.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：C</p>
              <p className="mt-1"><MathTex tex="135°=180°-45°" /></p>
              <p className="mt-1"><MathTex tex="\sin(180°-\theta)=\sin\theta" /></p>
              <p className="mt-1"><MathTex tex="\sin 135°=\sin 45°=\dfrac{\sqrt{2}}{2}" /></p>
            </div>
          </div>

          {/* 第 2 题 — 2025高考 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">2.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：B</p>
              <p className="mt-1">tan 函数的对称中心在零点处：</p>
              <p className="mt-1"><MathTex tex="\tan\!\left(a-\dfrac{\pi}{3}\right)=0 \Rightarrow a=k\pi+\dfrac{\pi}{3}" /></p>
              <p className="mt-1"><MathTex tex="a>0 \Rightarrow a_{\min}=\dfrac{\pi}{3}" /></p>
            </div>
          </div>

          {/* 第 3 题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">3.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：A</p>
              <p className="mt-1">先平移后伸缩：</p>
              <p className="mt-1"><MathTex tex="y=\sin x \xrightarrow{\text{左移}\frac{\pi}{3}} \sin\!\left(x+\frac{\pi}{3}\right) \xrightarrow{\text{横}\div 2} \sin\!\left(2x+\frac{\pi}{3}\right)" /></p>
            </div>
          </div>

          {/* 第 4 题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">4.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：B（<MathTex tex="-1" />）</p>
              <p className="mt-1"><MathTex tex="x\in[0,\frac{\pi}{2}] \Rightarrow 2x+\frac{\pi}{6}\in[\frac{\pi}{6},\frac{7\pi}{6}]" /></p>
              <p className="mt-1"><MathTex tex="\sin\frac{7\pi}{6}=-\frac{1}{2},\; f_{\min}=2\times(-\frac{1}{2})=-1" /></p>
              <p className="mt-1">注意不是 <MathTex tex="-2" />，区间内 sin 没到 <MathTex tex="-1" /></p>
            </div>
          </div>

          {/* 第 5 题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">5.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：A</p>
              <p className="mt-1"><MathTex tex="\sin 75°=\sin(45°+30°)" /></p>
              <p className="mt-1"><MathTex tex="=\dfrac{\sqrt{2}}{2}\cdot\dfrac{\sqrt{3}}{2}+\dfrac{\sqrt{2}}{2}\cdot\dfrac{1}{2}=\dfrac{\sqrt{6}+\sqrt{2}}{4}" /></p>
            </div>
          </div>

          {/* 第 6 题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">6.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：A</p>
              <p className="mt-1"><MathTex tex="\alpha" /> 在第二象限 <MathTex tex="\Rightarrow \cos\alpha=-\dfrac{3}{5}" /></p>
              <p className="mt-1"><MathTex tex="\sin 2\alpha=2\cdot\dfrac{4}{5}\cdot(-\dfrac{3}{5})=-\dfrac{24}{25}" /></p>
            </div>
          </div>

          {/* 第 7 题 — 2023真题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">7.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：B</p>
              <p className="mt-1"><MathTex tex="\sin\alpha\cos\beta=\dfrac{1}{3}+\dfrac{1}{6}=\dfrac{1}{2}" /></p>
              <p className="mt-1"><MathTex tex="\sin(\alpha+\beta)=\dfrac{1}{2}+\dfrac{1}{6}=\dfrac{2}{3}" /></p>
              <p className="mt-1"><MathTex tex="\cos(2\alpha+2\beta)=1-2\times\dfrac{4}{9}=\dfrac{1}{9}" /></p>
            </div>
          </div>

          {/* 第 8 题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">8.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：B（60°）</p>
              <p className="mt-1">与余弦定理对比：</p>
              <p className="mt-1"><MathTex tex="-2bc\cos A=-bc \Rightarrow \cos A=\dfrac{1}{2} \Rightarrow A=60°" /></p>
            </div>
          </div>

          {/* 第 9 题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">9.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：C（2 个）</p>
              <p className="mt-1"><MathTex tex="\sin B=\dfrac{\sqrt{3}}{2} \Rightarrow B=60° \text{ 或 } 120°" /></p>
              <p className="mt-1">两者均满足 <MathTex tex="A+B<180°" /></p>
            </div>
          </div>

          {/* 第 10 题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">10.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：A（10）</p>
              <p className="mt-1"><MathTex tex="S=\dfrac{1}{2}\cdot 8\cdot 5\cdot\sin 30°=20\times\dfrac{1}{2}=10" /></p>
            </div>
          </div>

        </div>
      </div>

      {/* ═══════════ 二、填空题（6 题）═══════════ */}
      <div className="mb-5">
        <p className="font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">二、填空题</p>

        <div className="columns-2 gap-4 text-gray-700">

          {/* 第 11 题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">11.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：<MathTex tex="\dfrac{5\pi}{6}" /></p>
              <p className="mt-1"><MathTex tex="150°=150\times\dfrac{\pi}{180}=\dfrac{5\pi}{6}" /></p>
            </div>
          </div>

          {/* 第 12 题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">12.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：<MathTex tex="T=\pi,\;A=3" /></p>
              <p className="mt-1"><MathTex tex="T=\dfrac{2\pi}{\omega}=\dfrac{2\pi}{2}=\pi" />，振幅即系数 3</p>
            </div>
          </div>

          {/* 第 13 题 — 2023真题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">13.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：<MathTex tex="[2,\,3)" /></p>
              <p className="mt-1">零点 <MathTex tex="x=\dfrac{2k\pi}{\omega}" />，在 <MathTex tex="[0,2\pi]" /> 上恰 3 个：</p>
              <p className="mt-1"><MathTex tex="x=0,\;\dfrac{2\pi}{\omega},\;\dfrac{4\pi}{\omega}" /></p>
              <p className="mt-1"><MathTex tex="\dfrac{4\pi}{\omega}\leq 2\pi \Rightarrow \omega\geq 2" />；<MathTex tex="\dfrac{6\pi}{\omega}>2\pi \Rightarrow \omega<3" /></p>
            </div>
          </div>

          {/* 第 14 题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">14.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：<MathTex tex="\dfrac{24}{25}" /></p>
              <p className="mt-1"><MathTex tex="\sin 2\alpha=2\times\dfrac{3}{5}\times\dfrac{4}{5}=\dfrac{24}{25}" /></p>
            </div>
          </div>

          {/* 第 15 题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">15.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：<MathTex tex="2\sin\!\left(x+\dfrac{\pi}{6}\right)" /></p>
              <p className="mt-1"><MathTex tex="R=\sqrt{3+1}=2,\;\tan\varphi=\dfrac{1}{\sqrt{3}} \Rightarrow \varphi=\dfrac{\pi}{6}" /></p>
            </div>
          </div>

          {/* 第 16 题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">16.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：<MathTex tex="\sqrt{19}" /></p>
              <p className="mt-1"><MathTex tex="a^2=9+25-30\times\dfrac{1}{2}=19" /></p>
              <p className="mt-1"><MathTex tex="\therefore a=\sqrt{19}" /></p>
            </div>
          </div>

        </div>
      </div>

      <PageBreak label="解答题答案" />

      {/* ═══════════ 三、解答题（5 题）═══════════ */}
      <div className="mb-5">
        <p className="font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">三、解答题</p>

        <div className="text-gray-700">

          {/* 第 17 题（10分） */}
          <div className="mb-4" style={{ breakInside: 'avoid' }}>
            <p className="font-bold text-gray-900 mb-2">17.（10 分）</p>

            <p className="font-bold mt-1">（1）</p>
            <p className="mt-1">降幂：<MathTex tex="2\sin^2 x=1-\cos 2x" /></p>
            <p className="mt-1"><MathTex tex="f(x)=\sqrt{3}\sin 2x-(1-\cos 2x)=\sqrt{3}\sin 2x+\cos 2x-1" /></p>
            <p className="mt-1">辅助角：<MathTex tex="\sqrt{3}\sin 2x+\cos 2x=2\sin\!\left(2x+\dfrac{\pi}{6}\right)" /></p>
            <p className="mt-1"><MathTex tex="\therefore f(x)=2\sin\!\left(2x+\dfrac{\pi}{6}\right)-1" /></p>

            <p className="font-bold mt-2">（2）</p>
            <p className="mt-1"><MathTex tex="-\dfrac{\pi}{2}+2k\pi\leq 2x+\dfrac{\pi}{6}\leq\dfrac{\pi}{2}+2k\pi" /></p>
            <p className="mt-1"><MathTex tex="\Rightarrow -\dfrac{\pi}{3}+k\pi\leq x\leq\dfrac{\pi}{6}+k\pi\;(k\in\mathbb{Z})" /></p>

            <p className="font-bold mt-2">（3）</p>
            <p className="mt-1"><MathTex tex="x\in[0,\frac{\pi}{2}] \Rightarrow 2x+\frac{\pi}{6}\in[\frac{\pi}{6},\frac{7\pi}{6}]" /></p>
            <p className="mt-1"><MathTex tex="\sin\!\left(2x+\frac{\pi}{6}\right)\in[-\frac{1}{2},\;1]" /></p>
            <p className="mt-1"><MathTex tex="\therefore f(x)\in[-2,\;1]" /></p>
          </div>

          {/* 第 18 题（10分） */}
          <div className="mb-4" style={{ breakInside: 'avoid' }}>
            <p className="font-bold text-gray-900 mb-2">18.（10 分）</p>

            <p className="font-bold mt-1">（1）</p>
            <p className="mt-1"><MathTex tex="\sin A\cos C+\cos A\sin C=\sin(A+C)=\sin(\pi-B)=\sin B" /></p>
            <p className="mt-1">原式 <MathTex tex="2\sin B\cos A=\sin B" />，<MathTex tex="\sin B\neq 0" /></p>
            <p className="mt-1"><MathTex tex="\cos A=\dfrac{1}{2} \Rightarrow A=\dfrac{\pi}{3}" /></p>

            <p className="font-bold mt-2">（2）</p>
            <p className="mt-1"><MathTex tex="S=\dfrac{\sqrt{3}}{4}bc=\sqrt{3} \Rightarrow bc=4" /></p>
            <p className="mt-1"><MathTex tex="a^2=b^2+c^2-2bc\cos A=b^2+c^2-4" /></p>
            <p className="mt-1"><MathTex tex="4=b^2+c^2-4 \Rightarrow b^2+c^2=8" /></p>
            <p className="mt-1"><MathTex tex="(b+c)^2=8+2\times 4=16 \Rightarrow b+c=4" /></p>
          </div>

          {/* 第 19 题（8分） */}
          <div className="mb-4" style={{ breakInside: 'avoid' }}>
            <p className="font-bold text-gray-900 mb-2">19.（8 分）</p>

            <p className="font-bold mt-1">（1）</p>
            <p className="mt-1"><MathTex tex="(\sin\alpha+\cos\alpha)^2=\dfrac{1}{3}" /></p>
            <p className="mt-1"><MathTex tex="1+2\sin\alpha\cos\alpha=\dfrac{1}{3} \Rightarrow \sin\alpha\cos\alpha=-\dfrac{1}{3}" /></p>

            <p className="font-bold mt-2">（2）</p>
            <p className="mt-1"><MathTex tex="(\sin\alpha-\cos\alpha)^2=1+\dfrac{2}{3}=\dfrac{5}{3}" /></p>
            <p className="mt-1"><MathTex tex="\alpha" /> 在第二象限 <MathTex tex="\Rightarrow \sin\alpha-\cos\alpha>0" /></p>
            <p className="mt-1"><MathTex tex="\therefore \sin\alpha-\cos\alpha=\dfrac{\sqrt{15}}{3}" /></p>

            <p className="font-bold mt-2">（3）</p>
            <p className="mt-1"><MathTex tex="\text{原式}=\dfrac{\sin^2\alpha}{\sin\alpha-\cos\alpha}" /></p>
            <p className="mt-1"><MathTex tex="\sin\alpha=\dfrac{\sqrt{3}+\sqrt{15}}{6},\;\sin^2\alpha=\dfrac{3+\sqrt{5}}{6}" /></p>
            <p className="mt-1"><MathTex tex="\text{原式}=\dfrac{\frac{3+\sqrt{5}}{6}}{\frac{\sqrt{15}}{3}}=\dfrac{3+\sqrt{5}}{2\sqrt{15}}=\dfrac{3\sqrt{15}+5\sqrt{3}}{30}" /></p>
          </div>

          {/* 第 20 题（6分）— 2025高考改编 */}
          <div className="mb-4" style={{ breakInside: 'avoid' }}>
            <p className="font-bold text-gray-900 mb-2">20.（6 分）</p>

            <p className="font-bold mt-1">（1）</p>
            <p className="mt-1"><MathTex tex="\cos 2A+\cos 2B+2\sin C=2" /></p>
            <p className="mt-1"><MathTex tex="(1-2\sin^2 A)+(1-2\sin^2 B)+2\sin C=2" /></p>
            <p className="mt-1"><MathTex tex="\sin^2 A+\sin^2 B=\sin C\;\cdots(*)" /></p>
            <p className="mt-1">设 <MathTex tex="C=\dfrac{\pi}{2}" />：<MathTex tex="\sin C=1" />，则 <MathTex tex="(*)" /> 变为 <MathTex tex="\sin^2 A+\cos^2 A=1\;\checkmark" /></p>
            <p className="mt-1">验证：<MathTex tex="\cos A\cos B\sin C=\cos A\sin A=\dfrac{1}{2}\sin 2A=\dfrac{1}{4} \Rightarrow \sin 2A=\dfrac{1}{2}\;\checkmark" /></p>
            <p className="mt-1"><MathTex tex="\therefore C=\dfrac{\pi}{2}" /></p>

            <p className="font-bold mt-2">（2）</p>
            <p className="mt-1"><MathTex tex="S=\dfrac{1}{2}ab=\dfrac{1}{4} \Rightarrow ab=\dfrac{1}{2}" /></p>
            <p className="mt-1"><MathTex tex="a^2+b^2=4R^2=2\;(\text{由 }R^2=\dfrac{1}{2})" /></p>
            <p className="mt-1"><MathTex tex="AB=c=\sqrt{a^2+b^2}=\sqrt{2}" /></p>
          </div>

          {/* 第 21 题（6分）— 2023真题 */}
          <div className="mb-4" style={{ breakInside: 'avoid' }}>
            <p className="font-bold text-gray-900 mb-2">21.（6 分）</p>

            <p className="font-bold mt-1">（1）</p>
            <p className="mt-1"><MathTex tex="A+B=3C,\;A+B+C=\pi \Rightarrow 4C=\pi \Rightarrow C=\dfrac{\pi}{4}" /></p>
            <p className="mt-1"><MathTex tex="2\sin(A-C)=\sin B=\sin(A+C)" /></p>
            <p className="mt-1">展开整理：<MathTex tex="\sin A\cos C=3\cos A\sin C" /></p>
            <p className="mt-1"><MathTex tex="\tan A=3\tan\dfrac{\pi}{4}=3 \Rightarrow \sin A=\dfrac{3\sqrt{10}}{10}" /></p>

            <p className="font-bold mt-2">（2）</p>
            <p className="mt-1">由正弦定理 <MathTex tex="\dfrac{c}{\sin C}=\dfrac{5}{\sin\frac{\pi}{4}}=5\sqrt{2}" /></p>
            <p className="mt-1"><MathTex tex="a=3\sqrt{5},\;b=2\sqrt{10}" /></p>
            <p className="mt-1"><MathTex tex="S=\dfrac{1}{2}ab\sin C=15" /></p>
            <p className="mt-1"><MathTex tex="h=\dfrac{2S}{AB}=\dfrac{30}{5}=6" /></p>
          </div>

        </div>
      </div>

    </section>
  );
}
