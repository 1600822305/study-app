import { Math as MathTex, PageBreak } from '@/components/shared';

/**
 * 第三阶段考试 — 答案与解析（独立组件）
 *
 * 纯 JSX 自由布局，选择题双列，解答题双列流式
 */
export function Stage3ExamAnswers() {
  return (
    <section className="mb-8 print-answers">
      <PageBreak label="答案与解析" />
      <h2 className="text-xl font-bold text-gray-900 mb-4">📝 第三阶段考试 — 答案与解析</h2>

      {/* ═══════════ 一、函数概念与性质（6 题）═══════════ */}
      <div className="mb-5">
        <p className="font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">一、函数概念与性质</p>

        <div className="columns-2 gap-4 text-gray-700">

          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">1.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：A（<MathTex tex="[1,3)" />）</p>
              <p className="mt-1"><MathTex tex="x-1\geq0\Rightarrow x\geq1" /></p>
              <p className="mt-1"><MathTex tex="3-x>0\Rightarrow x<3" /></p>
              <p className="mt-1">取交集：<MathTex tex="[1,3)" /></p>
            </div>
          </div>

          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">2.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：A</p>
              <p className="mt-1">偶函数：<MathTex tex="f(-3)=f(3),\;f(-2)=f(2)" /></p>
              <p className="mt-1">在 <MathTex tex="[0,+\infty)" /> 递增：<MathTex tex="f(1)<f(2)<f(3)" /></p>
              <p className="mt-1"><MathTex tex="\therefore f(1)<f(-2)<f(-3)" /></p>
            </div>
          </div>

          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">3.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：A（<MathTex tex="x^2+2" />）</p>
              <p className="mt-1"><MathTex tex="f(x+1)=(x+1)^2-2(x+1)+3" /></p>
              <p className="mt-1"><MathTex tex="=x^2+2x+1-2x-2+3=x^2+2" /></p>
            </div>
          </div>

          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">4.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：B（7）</p>
              <p className="mt-1">令 <MathTex tex="g(x)=ax^3+bx" />，是奇函数</p>
              <p className="mt-1"><MathTex tex="f(-2)=g(-2)+1=-5\Rightarrow g(-2)=-6" /></p>
              <p className="mt-1"><MathTex tex="g(2)=6\Rightarrow f(2)=7" /></p>
            </div>
          </div>

          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">5.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：A（<MathTex tex="\{y\mid y\neq1\}" />）</p>
              <p className="mt-1"><MathTex tex="f(x)=1+\dfrac{1}{x-1}" /></p>
              <p className="mt-1"><MathTex tex="\dfrac{1}{x-1}\neq0\Rightarrow f(x)\neq1" /></p>
            </div>
          </div>

          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">6.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：B（2）</p>
              <p className="mt-1">偶函数要求奇数次项系数为 0</p>
              <p className="mt-1"><MathTex tex="k-2=0\Rightarrow k=2" /></p>
              <p className="mt-1">验证：<MathTex tex="f(x)=x^2+3" />，确实偶函数</p>
            </div>
          </div>

        </div>
      </div>

      {/* ═══════════ 二、基本初等函数（6 题）═══════════ */}
      <div className="mb-5">
        <p className="font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">二、基本初等函数</p>

        <div className="columns-2 gap-4 text-gray-700">

          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">7.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：B（<MathTex tex="\dfrac{5}{2}" />）</p>
              <p className="mt-1"><MathTex tex="\sqrt{32}=2^{5/2}" /></p>
              <p className="mt-1"><MathTex tex="\log_2 2^{5/2}=\dfrac{5}{2}" /></p>
            </div>
          </div>

          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">8.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：A（<MathTex tex="a>c>b" />）</p>
              <p className="mt-1"><MathTex tex="a=2^{0.5}\approx1.41" /></p>
              <p className="mt-1"><MathTex tex="b=(1/3)^{0.5}\approx0.58" /></p>
              <p className="mt-1"><MathTex tex="c=\log_3 2\approx0.63" /></p>
            </div>
          </div>

          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">9.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：B（2）</p>
              <p className="mt-1"><MathTex tex="y=(1/2)^x" /> 减函数</p>
              <p className="mt-1"><MathTex tex="x=-1" /> 时最大：<MathTex tex="(1/2)^{-1}=2" /></p>
            </div>
          </div>

          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">10.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：A（<MathTex tex="(1,2)" />）</p>
              <p className="mt-1"><MathTex tex="\log_a2>1=\log_a a" /></p>
              <p className="mt-1"><MathTex tex="a>1" /> 递增：<MathTex tex="2>a\Rightarrow1<a<2" /></p>
            </div>
          </div>

          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">11.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：B（<MathTex tex="\dfrac{1}{3}" />）</p>
              <p className="mt-1"><MathTex tex="8^\alpha=2\Rightarrow(2^3)^\alpha=2^1" /></p>
              <p className="mt-1"><MathTex tex="3\alpha=1\Rightarrow\alpha=\dfrac{1}{3}" /></p>
            </div>
          </div>

          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">12.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：C（<MathTex tex="\dfrac{15}{2}" />）</p>
              <p className="mt-1"><MathTex tex="2^{a+1}-2^{a-1}=2\cdot2^a-\dfrac{2^a}{2}" /></p>
              <p className="mt-1"><MathTex tex="=10-\dfrac{5}{2}=\dfrac{15}{2}" /></p>
            </div>
          </div>

        </div>
      </div>

      {/* ═══════════ 三、函数图像与零点（5 题）═══════════ */}
      <div className="mb-5">
        <p className="font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">三、函数图像与零点</p>

        <div className="columns-2 gap-4 text-gray-700">

          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">13.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：A（1 和 3）</p>
              <p className="mt-1"><MathTex tex="x^2-4x+3=(x-1)(x-3)=0" /></p>
            </div>
          </div>

          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">14.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：B（<MathTex tex="(0,1)" />）</p>
              <p className="mt-1"><MathTex tex="f(0)=1-2=-1<0" /></p>
              <p className="mt-1"><MathTex tex="f(1)=e-2\approx0.72>0" /></p>
              <p className="mt-1">异号，零点在 <MathTex tex="(0,1)" /></p>
            </div>
          </div>

          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">15.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：B（1 个）</p>
              <p className="mt-1"><MathTex tex="y_1=2^x" /> 递增，<MathTex tex="y_2=3-x" /> 递减</p>
              <p className="mt-1"><MathTex tex="x=1" /> 时 <MathTex tex="2^1=2=3-1" />，恰好相交</p>
            </div>
          </div>

          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">16.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：C（3 个）</p>
              <p className="mt-1"><MathTex tex="x^3-x=x(x-1)(x+1)=0" /></p>
              <p className="mt-1"><MathTex tex="x=0,\;1,\;-1" /></p>
            </div>
          </div>

          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">17.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：B（1 个）</p>
              <p className="mt-1"><MathTex tex="f'(x)=\dfrac{1}{x}+\dfrac{2}{x^2}>0" /> 恒正，严格递增</p>
              <p className="mt-1"><MathTex tex="f(1)=-2<0,\;f(e^2)\approx1.73>0" /></p>
              <p className="mt-1">异号 + 严格递增 → 恰好 1 个零点</p>
            </div>
          </div>

        </div>
      </div>

      {/* ═══════════ 四、导数基础（5 题）═══════════ */}
      <div className="mb-5">
        <p className="font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">四、导数基础</p>

        <div className="columns-2 gap-4 text-gray-700">

          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">18.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：B（12）</p>
              <p className="mt-1"><MathTex tex="y'=3x^2\Rightarrow y'(2)=12" /></p>
            </div>
          </div>

          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">19.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：A（<MathTex tex="(0,2)" />）</p>
              <p className="mt-1"><MathTex tex="f'(x)=3x^2-6x=3x(x-2)" /></p>
              <p className="mt-1"><MathTex tex="f'<0\Rightarrow0<x<2" /></p>
            </div>
          </div>

          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">20.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：A（-16）</p>
              <p className="mt-1"><MathTex tex="f'(x)=3x^2-12=0\Rightarrow x=\pm2" /></p>
              <p className="mt-1"><MathTex tex="f''(2)=12>0" />，<MathTex tex="x=2" /> 极小值</p>
              <p className="mt-1"><MathTex tex="f(2)=8-24=-16" /></p>
            </div>
          </div>

          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">21.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：A（<MathTex tex="(-1,+\infty)" />）</p>
              <p className="mt-1"><MathTex tex="f'(x)=(1+x)e^x" /></p>
              <p className="mt-1"><MathTex tex="e^x>0" />，故 <MathTex tex="f'>0\Leftrightarrow x>-1" /></p>
            </div>
          </div>

          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">22.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：A（-5）</p>
              <p className="mt-1"><MathTex tex="f'(x)=6x(x-1)=0\Rightarrow x=0,\;1" /></p>
              <p className="mt-1"><MathTex tex="f(-1)=-5,\;f(0)=0,\;f(1)=-1,\;f(2)=4" /></p>
              <p className="mt-1">最小值 <MathTex tex="f(-1)=-5" /></p>
            </div>
          </div>

        </div>
      </div>

      <PageBreak label="解答题答案" />

      {/* ═══════════ 五、综合题（6 题）═══════════ */}
      <div className="mb-5">
        <p className="font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">五、综合题</p>

        <div className="columns-2 gap-6 text-gray-700 [&_.katex]:text-[1.15em]" style={{ columnRule: '1px solid #e5e7eb' }}>

          <div className="mb-4 pb-3 border-b border-gray-200">
            <p className="font-bold text-gray-900 mb-2">23.（9 分）</p>
            <p className="font-bold mt-2">（1）计算</p>
            <p className="mt-1.5">利用对数幂法则：<MathTex tex="2\lg2=\lg4" /></p>
            <p className="mt-1.5">再利用乘法法则：</p>
            <p className="mt-1.5"><MathTex tex="\lg4+\lg25=\lg(4\times25)=\lg100=2" /></p>

            <p className="font-bold mt-3">（2）求 <MathTex tex="\log_94" /></p>
            <p className="mt-1.5">由 <MathTex tex="3^a=2" /> 得 <MathTex tex="a=\log_32" /></p>
            <p className="mt-1.5"><MathTex tex="\log_94=2\log_92=2\cdot\dfrac{\log_32}{\log_39}=2\cdot\dfrac{a}{2}=a" /></p>
          </div>

          <div className="mb-4 pb-3 border-b border-gray-200">
            <p className="font-bold text-gray-900 mb-2">24.（9 分）</p>
            <p className="font-bold mt-2">（1）求 <MathTex tex="f(-1)" /></p>
            <p className="mt-1.5">奇函数：<MathTex tex="f(-1)=-f(1)" /></p>
            <p className="mt-1.5"><MathTex tex="f(1)=1-2=-1" /></p>
            <p className="mt-1.5"><MathTex tex="\therefore f(-1)=1" /></p>

            <p className="font-bold mt-3">（2）写出解析式</p>
            <p className="mt-1.5"><MathTex tex="x>0" /> 时：<MathTex tex="f(x)=x^2-2x" /></p>
            <p className="mt-1.5"><MathTex tex="x=0" /> 时：<MathTex tex="f(0)=0" /></p>
            <p className="mt-1.5"><MathTex tex="x<0" /> 时：<MathTex tex="-x>0" /></p>
            <p className="mt-1.5"><MathTex tex="f(-x)=x^2+2x" /></p>
            <p className="mt-1.5"><MathTex tex="f(x)=-f(-x)=-x^2-2x" /></p>
          </div>

          <div className="mb-4 pb-3 border-b border-gray-200">
            <p className="font-bold text-gray-900 mb-2">25.（9 分）</p>
            <p className="font-bold mt-2">（1）求切线方程</p>
            <p className="mt-1.5"><MathTex tex="f'(x)=3x^2-3" /></p>
            <p className="mt-1.5"><MathTex tex="f'(1)=0" />（斜率为 0）</p>
            <p className="mt-1.5"><MathTex tex="f(1)=1-3+1=-1" /></p>
            <p className="mt-1.5">切线：<MathTex tex="y=-1" /></p>

            <p className="font-bold mt-3">（2）求单调递增区间</p>
            <p className="mt-1.5"><MathTex tex="f'(x)=3(x+1)(x-1)>0" /></p>
            <p className="mt-1.5"><MathTex tex="x<-1" /> 或 <MathTex tex="x>1" /> 时递增</p>
            <p className="mt-1.5">递增区间：<MathTex tex="(-\infty,-1)" /> 和 <MathTex tex="(1,+\infty)" /></p>
          </div>

          <div className="mb-4 pb-3 border-b border-gray-200">
            <p className="font-bold text-gray-900 mb-2">26.（9 分）</p>
            <p className="font-bold mt-2">（1）求极值</p>
            <p className="mt-1.5"><MathTex tex="f'(x)=3x^2-12x+9=3(x-1)(x-3)" /></p>
            <p className="mt-1.5"><MathTex tex="f'=0\Rightarrow x=1,\;3" /></p>
            <p className="mt-1.5">极大值：<MathTex tex="f(1)=1-6+9+1=5" /></p>
            <p className="mt-1.5">极小值：<MathTex tex="f(3)=27-54+27+1=1" /></p>

            <p className="font-bold mt-3">（2）<MathTex tex="[0,4]" /> 上最值</p>
            <p className="mt-1.5"><MathTex tex="f(0)=1,\;f(1)=5,\;f(3)=1,\;f(4)=5" /></p>
            <p className="mt-1.5">最大值 5，最小值 1</p>
          </div>

          <div className="mb-4 pb-3 border-b border-gray-200">
            <p className="font-bold text-gray-900 mb-2">27.（9 分）</p>
            <p className="font-bold mt-2">（1）证明有解</p>
            <p className="mt-1.5"><MathTex tex="f(e)=3-e\approx0.28>0" /></p>
            <p className="mt-1.5"><MathTex tex="f(e^2)=4-e^2\approx-3.39<0" /></p>
            <p className="mt-1.5">异号，由零点存在性定理，<MathTex tex="(e,e^2)" /> 内有解</p>

            <p className="font-bold mt-3">（2）求最大值</p>
            <p className="mt-1.5"><MathTex tex="f'(x)=\dfrac{1}{x}-1=\dfrac{1-x}{x}" /></p>
            <p className="mt-1.5"><MathTex tex="f'=0\Rightarrow x=1" /></p>
            <p className="mt-1.5"><MathTex tex="0<x<1" /> 递增，<MathTex tex="x>1" /> 递减</p>
            <p className="mt-1.5">最大值：<MathTex tex="f(1)=0-1+2=1" /></p>
          </div>

          <div className="mb-4 pb-3 border-b border-gray-200">
            <p className="font-bold text-gray-900 mb-2">28.（9 分）</p>
            <p className="font-bold mt-2">（1）判断奇偶性</p>
            <p className="mt-1.5"><MathTex tex="f(-x)=\dfrac{2^{-x}-1}{2^{-x}+1}" /></p>
            <p className="mt-1.5">分子分母同乘 <MathTex tex="2^x" />：</p>
            <p className="mt-1.5"><MathTex tex="=\dfrac{1-2^x}{1+2^x}=-\dfrac{2^x-1}{2^x+1}=-f(x)" /></p>
            <p className="mt-1.5"><MathTex tex="\therefore" /> 奇函数</p>

            <p className="font-bold mt-3">（2）证明单调递增</p>
            <p className="mt-1.5">设 <MathTex tex="x_1<x_2" />，则</p>
            <p className="mt-1.5"><MathTex tex="f(x_2)-f(x_1)=\dfrac{2(2^{x_2}-2^{x_1})}{(2^{x_2}+1)(2^{x_1}+1)}" /></p>
            <p className="mt-1.5"><MathTex tex="x_2>x_1\Rightarrow2^{x_2}>2^{x_1}" />，分子 &gt; 0，分母 &gt; 0</p>
            <p className="mt-1.5"><MathTex tex="\therefore f(x_2)>f(x_1)" />，单调递增</p>
          </div>

        </div>
      </div>

    </section>
  );
}
