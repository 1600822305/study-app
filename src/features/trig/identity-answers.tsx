import { Math as MathTex, PageBreak } from '@/components/shared';

export function TrigIdentityAnswers() {
  return (
    <section className="mb-8 print-answers">
      <PageBreak label="答案与解析" />
      <h2 className="text-xl font-bold text-gray-900 mb-4">📝 5.2 三角恒等变换 — 答案与解析</h2>

      {/* ═══════════ 一、和差公式（5 题）═══════════ */}
      <div className="mb-5">
        <p className="font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">一、和差公式</p>
        <div className="columns-2 gap-4 text-gray-700">

          {/* 第 1 题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">1.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：A（<MathTex tex="\dfrac{\sqrt{6}+\sqrt{2}}{4}" />）</p>
              <p className="mt-1"><strong>第①步 凑角：</strong><MathTex tex="75°=45°+30°" /></p>
              <p className="mt-1"><strong>第②步 套正弦和角公式：</strong></p>
              <p className="text-center"><MathTex tex="\sin 75°=\sin 45°\cos 30°+\cos 45°\sin 30°" /></p>
              <p className="mt-1"><strong>第③步 代入特殊值：</strong></p>
              <p className="text-center"><MathTex tex="=\dfrac{\sqrt{2}}{2}\cdot\dfrac{\sqrt{3}}{2}+\dfrac{\sqrt{2}}{2}\cdot\dfrac{1}{2}=\dfrac{\sqrt{6}+\sqrt{2}}{4}" /></p>
            </div>
          </div>

          {/* 第 2 题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">2.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：B（<MathTex tex="\dfrac{\sqrt{6}+\sqrt{2}}{4}" />）</p>
              <p className="mt-1"><strong>第①步 凑角：</strong><MathTex tex="15°=45°-30°" /></p>
              <p className="mt-1"><strong>第②步 套余弦差角公式</strong>（注意余弦符号相反）<strong>：</strong></p>
              <p className="text-center"><MathTex tex="\cos 15°=\cos 45°\cos 30°+\sin 45°\sin 30°" /></p>
              <p className="text-center"><MathTex tex="=\dfrac{\sqrt{2}}{2}\cdot\dfrac{\sqrt{3}}{2}+\dfrac{\sqrt{2}}{2}\cdot\dfrac{1}{2}=\dfrac{\sqrt{6}+\sqrt{2}}{4}" /></p>
              <p className="mt-1"><strong>注意：</strong><MathTex tex="\cos(\alpha-\beta)" /> 中间是 + 号！</p>
            </div>
          </div>

          {/* 第 3 题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">3.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：B（<MathTex tex="2-\sqrt{3}" />）</p>
              <p className="mt-1"><strong>第①步 凑角：</strong><MathTex tex="15°=45°-30°" /></p>
              <p className="mt-1"><strong>第②步 套正切差角公式：</strong></p>
              <p className="text-center"><MathTex tex="\tan 15°=\dfrac{\tan 45°-\tan 30°}{1+\tan 45°\cdot\tan 30°}=\dfrac{1-\frac{\sqrt{3}}{3}}{1+\frac{\sqrt{3}}{3}}" /></p>
              <p className="mt-1"><strong>第③步 通分化简 + 有理化：</strong></p>
              <p className="text-center"><MathTex tex="=\dfrac{3-\sqrt{3}}{3+\sqrt{3}}\cdot\dfrac{3-\sqrt{3}}{3-\sqrt{3}}=\dfrac{12-6\sqrt{3}}{6}=2-\sqrt{3}" /></p>
            </div>
          </div>

          {/* 第 4 题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">4.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：A（<MathTex tex="\dfrac{56}{65}" />）</p>
              <p className="mt-1"><strong>第①步 补全</strong>（一象限取正）<strong>：</strong></p>
              <p className="text-center"><MathTex tex="\cos\alpha=\dfrac{3}{5},\;\sin\beta=\dfrac{12}{13}" /></p>
              <p className="mt-1"><strong>第②步 套正弦和角公式：</strong></p>
              <p className="text-center"><MathTex tex="\sin(\alpha+\beta)=\dfrac{4}{5}\cdot\dfrac{5}{13}+\dfrac{3}{5}\cdot\dfrac{12}{13}=\dfrac{20+36}{65}=\dfrac{56}{65}" /></p>
            </div>
          </div>

          {/* 第 5 题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">5.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：B（<MathTex tex="\dfrac{\sqrt{2}-\sqrt{6}}{4}" />）</p>
              <p className="mt-1"><strong>第①步 凑角：</strong><MathTex tex="105°=60°+45°" /></p>
              <p className="mt-1"><strong>第②步 套余弦和角公式</strong>（注意 + 号变 −）<strong>：</strong></p>
              <p className="text-center"><MathTex tex="\cos 105°=\cos 60°\cos 45°-\sin 60°\sin 45°" /></p>
              <p className="text-center"><MathTex tex="=\dfrac{1}{2}\cdot\dfrac{\sqrt{2}}{2}-\dfrac{\sqrt{3}}{2}\cdot\dfrac{\sqrt{2}}{2}=\dfrac{\sqrt{2}-\sqrt{6}}{4}" /></p>
              <p className="mt-1"><strong>易错点：</strong><MathTex tex="\cos(\alpha+\beta)" /> 中间是减号！</p>
            </div>
          </div>

        </div>
      </div>

      {/* ═══════════ 二、二倍角公式（2 题）═══════════ */}
      <div className="mb-5">
        <p className="font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">二、二倍角公式</p>
        <div className="columns-2 gap-4 text-gray-700">

          {/* 第 1 题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">1.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：A（<MathTex tex="\dfrac{24}{25},\;\dfrac{7}{25}" />）</p>
              <p className="mt-1"><strong>第①步 补全：</strong>一象限 <MathTex tex="\cos\alpha=\dfrac{4}{5}" /></p>
              <p className="mt-1"><strong>第②步 <MathTex tex="\sin 2\alpha" />：</strong></p>
              <p className="text-center"><MathTex tex="=2\cdot\dfrac{3}{5}\cdot\dfrac{4}{5}=\dfrac{24}{25}" /></p>
              <p className="mt-1"><strong>第③步 <MathTex tex="\cos 2\alpha" /></strong>（用 <MathTex tex="\cos^2\alpha-\sin^2\alpha" />）<strong>：</strong></p>
              <p className="text-center"><MathTex tex="=\dfrac{16}{25}-\dfrac{9}{25}=\dfrac{7}{25}" /></p>
            </div>
          </div>

          {/* 第 2 题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">2.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：A（<MathTex tex="\dfrac{\sqrt{3}+\sqrt{2}}{2}" />）</p>
              <p className="mt-1"><strong>逆用二倍角公式：</strong></p>
              <p className="mt-1">前半：<MathTex tex="\cos^2 15°-\sin^2 15°=\cos 30°=\dfrac{\sqrt{3}}{2}" /></p>
              <p className="mt-1">后半：<MathTex tex="2\sin 22.5°\cos 22.5°=\sin 45°=\dfrac{\sqrt{2}}{2}" /></p>
              <p className="text-center"><MathTex tex="\text{合计：}\dfrac{\sqrt{3}}{2}+\dfrac{\sqrt{2}}{2}=\dfrac{\sqrt{3}+\sqrt{2}}{2}" /></p>
            </div>
          </div>

        </div>
      </div>

      {/* ═══════════ 三、降幂公式（4 题）═══════════ */}
      <div className="mb-5">
        <p className="font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">三、降幂公式</p>
        <div className="columns-2 gap-4 text-gray-700">

          {/* 第 1 题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">1.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：A（<MathTex tex="\dfrac{2-\sqrt{3}}{4}" />）</p>
              <p className="mt-1">套降幂公式 <MathTex tex="\sin^2\alpha=\dfrac{1-\cos 2\alpha}{2}" />：</p>
              <p className="text-center"><MathTex tex="\sin^2 15°=\dfrac{1-\cos 30°}{2}=\dfrac{1-\frac{\sqrt{3}}{2}}{2}=\dfrac{2-\sqrt{3}}{4}" /></p>
              <p className="mt-1">口诀：sin² → "1减"除以2</p>
            </div>
          </div>

          {/* 第 2 题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">2.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：A（<MathTex tex="\dfrac{2-\sqrt{3}}{4}" />）</p>

              <p className="mt-2"><strong>第①步 套降幂公式：</strong></p>
              <p className="ml-4">公式：<MathTex tex="\cos^2\alpha=\dfrac{1+\cos 2\alpha}{2}" />（口诀：cos² → "1加"除以2）</p>
              <p className="ml-4">代入 <MathTex tex="\alpha=75°" />：</p>
              <p className="text-center"><MathTex tex="\cos^2 75°=\dfrac{1+\cos 150°}{2}" /></p>

              <p className="mt-2"><strong>第②步 求 <MathTex tex="\cos 150°" />：</strong></p>
              <p className="ml-4"><MathTex tex="150°=180°-30°" />，用诱导公式：</p>
              <p className="text-center"><MathTex tex="\cos 150°=-\cos 30°=-\dfrac{\sqrt{3}}{2}" /></p>

              <p className="mt-2"><strong>第③步 代回计算：</strong></p>
              <p className="text-center"><MathTex tex="\cos^2 75°=\dfrac{1+\left(-\dfrac{\sqrt{3}}{2}\right)}{2}=\dfrac{1-\dfrac{\sqrt{3}}{2}}{2}=\dfrac{\dfrac{2-\sqrt{3}}{2}}{2}=\dfrac{2-\sqrt{3}}{4}" /></p>
            </div>
          </div>

          {/* 第 3 题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">3.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：A（<MathTex tex="\cos 2\alpha" />）</p>
              <p className="mt-1">降幂公式反过来用：</p>
              <p className="text-center"><MathTex tex="\cos^2\alpha=\dfrac{1+\cos 2\alpha}{2}" /></p>
              <p className="mt-1">两边乘 2 再移项：</p>
              <p className="text-center"><MathTex tex="2\cos^2\alpha-1=\cos 2\alpha" /></p>
              <p className="mt-1">这就是二倍角 cos 的形式②！正用降幂，反用升角</p>
            </div>
          </div>

          {/* 第 4 题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">4.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：A（<MathTex tex="\dfrac{\sqrt{2}}{2}" />）</p>
              <p className="mt-1">识别公式：<MathTex tex="1-2\sin^2\alpha=\cos 2\alpha" /></p>
              <p className="mt-1">代入 <MathTex tex="\alpha=\dfrac{\pi}{8}" />：</p>
              <p className="text-center"><MathTex tex="1-2\sin^2\dfrac{\pi}{8}=\cos\dfrac{\pi}{4}=\dfrac{\sqrt{2}}{2}" /></p>
            </div>
          </div>

        </div>
      </div>

      {/* ═══════════ 四、半角公式（3 题）═══════════ */}
      <div className="mb-5">
        <p className="font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">四、半角公式</p>
        <div className="columns-2 gap-4 text-gray-700">

          {/* 第 1 题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">1.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：A（<MathTex tex="\dfrac{3}{5}" />）</p>
              <p className="mt-1"><strong>第①步 判象限定正负：</strong><MathTex tex="\dfrac{\alpha}{2}\in(0,\dfrac{\pi}{2})" /> → 一象限，取正号</p>
              <p className="mt-1"><strong>第②步 套半角公式：</strong></p>
              <p className="text-center"><MathTex tex="\sin\dfrac{\alpha}{2}=\sqrt{\dfrac{1-\cos\alpha}{2}}=\sqrt{\dfrac{1-\frac{7}{25}}{2}}=\sqrt{\dfrac{9}{25}}=\dfrac{3}{5}" /></p>
            </div>
          </div>

          {/* 第 2 题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">2.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：A（<MathTex tex="2-\sqrt{3}" />）</p>
              <p className="mt-1">思路：<MathTex tex="15°=\dfrac{30°}{2}" />，用 tan 半角公式（不带±）</p>
              <p className="text-center"><MathTex tex="\tan\dfrac{\alpha}{2}=\dfrac{1-\cos\alpha}{\sin\alpha}" /></p>
              <p className="mt-1">代入 <MathTex tex="\alpha=30°" />：</p>
              <p className="text-center"><MathTex tex="\tan 15°=\dfrac{1-\cos 30°}{\sin 30°}=\dfrac{1-\frac{\sqrt{3}}{2}}{\frac{1}{2}}=2-\sqrt{3}" /></p>
            </div>
          </div>

          {/* 第 3 题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">3.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：B（负）</p>
              <p className="mt-1"><strong>第①步：</strong><MathTex tex="\dfrac{\alpha}{2}\in\left(\dfrac{\pi}{2},\pi\right)" /> → 第二象限</p>
              <p className="mt-1"><strong>第②步：</strong>第二象限 sin &gt; 0，cos &lt; 0，tan &lt; 0</p>
              <p className="mt-1"><strong>结论：</strong><MathTex tex="\cos\dfrac{\alpha}{2}<0" />，取负号</p>
              <p className="mt-1">口诀：半角公式先判象限定正负，再套公式算数值</p>
            </div>
          </div>

        </div>
      </div>

      {/* ═══════════ 五、辅助角公式（5 题）═══════════ */}
      <div className="mb-5">
        <p className="font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">五、辅助角公式</p>
        <div className="columns-2 gap-4 text-gray-700">

          {/* 第 1 题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">1.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：A（<MathTex tex="2\sin\!\left(x+\dfrac{\pi}{6}\right)" />）</p>
              <p className="mt-1"><strong>第①步 识别：</strong><MathTex tex="a=\sqrt{3}" />（sin系数），<MathTex tex="b=1" />（cos系数）</p>
              <p className="mt-1"><strong>第②步 求振幅：</strong><MathTex tex="R=\sqrt{3+1}=2" /></p>
              <p className="mt-1"><strong>第③步 求φ：</strong><MathTex tex="\cos\varphi=\dfrac{\sqrt{3}}{2},\;\sin\varphi=\dfrac{1}{2} \Rightarrow \varphi=\dfrac{\pi}{6}" /></p>
            </div>
          </div>

          {/* 第 2 题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">2.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：A（<MathTex tex="2\sin\!\left(x-\dfrac{\pi}{3}\right)" />）</p>
              <p className="mt-1"><strong>第①步 识别</strong>（注意负号！）<strong>：</strong><MathTex tex="a=1,\;b=-\sqrt{3}" /></p>
              <p className="mt-1"><strong>第②步：</strong><MathTex tex="R=2" /></p>
              <p className="mt-1"><strong>第③步：</strong><MathTex tex="\cos\varphi=\dfrac{1}{2},\;\sin\varphi=-\dfrac{\sqrt{3}}{2}" /> → 第四象限</p>
              <p className="text-center"><MathTex tex="\varphi=-\dfrac{\pi}{3}" /></p>
              <p className="mt-1"><strong>易错点：</strong><MathTex tex="b=-\sqrt{3}" /> 不是 <MathTex tex="\sqrt{3}" />！</p>
            </div>
          </div>

          {/* 第 3 题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">3.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：A（<MathTex tex="2\sin\!\left(2x-\dfrac{\pi}{6}\right)" />）</p>
              <p className="mt-1"><strong>第①步 识别</strong>（ω=2 保持不变！）<strong>：</strong><MathTex tex="a=\sqrt{3},\;b=-1" /></p>
              <p className="mt-1"><strong>第②步：</strong><MathTex tex="R=2" /></p>
              <p className="mt-1"><strong>第③步：</strong><MathTex tex="\cos\varphi=\dfrac{\sqrt{3}}{2},\;\sin\varphi=-\dfrac{1}{2} \Rightarrow \varphi=-\dfrac{\pi}{6}" /></p>
              <p className="mt-1"><strong>注意：</strong>是 <MathTex tex="2x" /> 不是 <MathTex tex="x" />！ω 不能丢</p>
            </div>
          </div>

          {/* 第 4 题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">4.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：A（<MathTex tex="\left[-\dfrac{3\pi}{4},\;\dfrac{\pi}{4}\right]" />）</p>
              <p className="mt-1"><strong>第①步 辅助角化简：</strong></p>
              <p className="text-center"><MathTex tex="f(x)=\sqrt{2}\sin\!\left(x-\dfrac{\pi}{4}\right)" /></p>
              <p className="mt-1"><strong>第②步 求递增区间</strong>（令 sin 内层在 <MathTex tex="[-\frac{\pi}{2},\frac{\pi}{2}]" />）<strong>：</strong></p>
              <p className="text-center"><MathTex tex="-\dfrac{\pi}{2}\leq x-\dfrac{\pi}{4}\leq\dfrac{\pi}{2}" /></p>
              <p className="mt-1"><strong>第③步 解出 x：</strong></p>
              <p className="text-center"><MathTex tex="-\dfrac{3\pi}{4}\leq x\leq\dfrac{\pi}{4}" /></p>
            </div>
          </div>

          {/* 第 5 题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">5.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：A（<MathTex tex="2\sin\!\left(2x-\dfrac{\pi}{6}\right)" />）</p>

              <p className="mt-2"><strong>第①步 降幂：</strong>把 <MathTex tex="\sin^2 x" /> 降成一次</p>
              <p className="ml-4">降幂公式：<MathTex tex="\sin^2 x=\dfrac{1-\cos 2x}{2}" /></p>
              <p className="ml-4">所以 <MathTex tex="2\sin^2 x=1-\cos 2x" /></p>

              <p className="mt-2"><strong>第②步 二倍角：</strong>把 <MathTex tex="2\sin x\cos x" /> 升成二倍角</p>
              <p className="ml-4">公式：<MathTex tex="2\sin x\cos x=\sin 2x" /></p>
              <p className="ml-4">所以 <MathTex tex="2\sqrt{3}\sin x\cos x=\sqrt{3}\cdot\sin 2x" /></p>

              <p className="mt-2"><strong>第③步 代入原式合并：</strong></p>
              <p className="text-center"><MathTex tex="f(x)=(1-\cos 2x)+\sqrt{3}\sin 2x-1" /></p>
              <p className="text-center"><MathTex tex="=\sqrt{3}\sin 2x-\cos 2x" /></p>

              <p className="mt-2"><strong>第④步 辅助角公式：</strong></p>
              <p className="ml-4">识别：<MathTex tex="a=\sqrt{3}" />（sin系数），<MathTex tex="b=-1" />（cos系数）</p>
              <p className="ml-4">振幅：<MathTex tex="R=\sqrt{(\sqrt{3})^2+(-1)^2}=\sqrt{4}=2" /></p>
              <p className="ml-4">求 <MathTex tex="\varphi" />：<MathTex tex="\cos\varphi=\dfrac{\sqrt{3}}{2},\;\sin\varphi=\dfrac{-1}{2}" /></p>
              <p className="ml-4"><MathTex tex="\Rightarrow \varphi=-\dfrac{\pi}{6}" />（第四象限）</p>

              <p className="mt-2 font-bold text-center"><MathTex tex="\therefore f(x)=2\sin\!\left(2x-\dfrac{\pi}{6}\right)" /></p>
            </div>
          </div>

        </div>
      </div>

      {/* ═══════════ 六、综合应用（5 题）═══════════ */}
      <div className="mb-5">
        <p className="font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">六、综合应用</p>

        {/* 第 1-2 题：短题，双列 */}
        <div className="columns-2 gap-4 text-gray-700">
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">1.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：A（<MathTex tex="-\dfrac{24}{25}" />）</p>
              <p className="mt-1"><strong>第①步 补全</strong>（二象限 <MathTex tex="\cos\alpha<0" />）<strong>：</strong><MathTex tex="\cos\alpha=-\dfrac{3}{5}" /></p>
              <p className="mt-1"><strong>第②步 套二倍角 sin：</strong></p>
              <p className="text-center"><MathTex tex="\sin 2\alpha=2\cdot\dfrac{4}{5}\cdot\left(-\dfrac{3}{5}\right)=-\dfrac{24}{25}" /></p>
              <p className="mt-1"><strong>易错点：</strong>二象限 <MathTex tex="\cos\alpha" /> 是负数！</p>
            </div>
          </div>

          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">2.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：B（2）</p>
              <p className="mt-1"><strong>第①步：</strong><MathTex tex="\tan(\alpha+\beta)=1" /></p>
              <p className="mt-1"><strong>第②步：</strong><MathTex tex="\tan\alpha+\tan\beta=1-\tan\alpha\tan\beta\;\cdots(*)" /></p>
              <p className="mt-1"><strong>第③步 代入(*)：</strong></p>
              <p className="ml-4"><MathTex tex="(1+\tan\alpha)(1+\tan\beta)" /></p>
              <p className="ml-4"><MathTex tex="=1+(1-\tan\alpha\tan\beta)+\tan\alpha\tan\beta=2" /></p>
            </div>
          </div>
        </div>

        {/* 第 3-4 题：中等题，双列 */}
        <div className="columns-2 gap-4 text-gray-700">
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">3.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：A（<MathTex tex="2\sin\!\left(2x+\dfrac{\pi}{3}\right)" />）</p>
              <p className="mt-1"><strong>第①步 二倍角化简：</strong></p>
              <p className="ml-4"><MathTex tex="2\sin x\cos x=\sin 2x" /></p>
              <p className="ml-4"><MathTex tex="2\sqrt{3}\cos^2 x=\sqrt{3}(1+\cos 2x)" /></p>
              <p className="mt-1"><strong>第②步 合并：</strong><MathTex tex="=\sin 2x+\sqrt{3}\cos 2x" /></p>
              <p className="mt-1"><strong>第③步 辅助角：</strong><MathTex tex="R=2,\;\varphi=\dfrac{\pi}{3}" /></p>
              <p className="text-center"><MathTex tex="\therefore 2\sin\!\left(2x+\dfrac{\pi}{3}\right)" /></p>
            </div>
          </div>

          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">4.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：B（<MathTex tex="\pi,\;3" />）</p>
              <p className="mt-1"><strong>第①步 化简：</strong><MathTex tex="f(x)=1+2\sin\!\left(2x-\dfrac{\pi}{6}\right)" /></p>
              <p className="mt-1"><strong>第②步 周期：</strong><MathTex tex="T=\dfrac{2\pi}{2}=\pi" /></p>
              <p className="mt-1"><strong>第③步 最大值：</strong>sin 最大 = 1 → <MathTex tex="f_{\max}=1+2=3" /></p>
            </div>
          </div>
        </div>

        {/* 第 5 题：独立小块 */}
        <div className="flex gap-2 items-start mb-3 text-gray-700" style={{ breakInside: 'avoid' }}>
          <span className="text-blue-600 font-bold shrink-0">5.</span>
          <div className="min-w-0">
            <p className="font-bold text-gray-900">答案：A（<MathTex tex="\left[0,\;\dfrac{\pi}{6}\right]" />）</p>
            <p className="mt-1"><strong>第①步 递增条件：</strong><MathTex tex="-\dfrac{\pi}{2}\leq 2x+\dfrac{\pi}{6}\leq\dfrac{\pi}{2}" /></p>
            <p className="mt-1"><strong>第②步 解出 x：</strong>两边减 <MathTex tex="\dfrac{\pi}{6}" /> 再除以 2</p>
            <p className="text-center"><MathTex tex="-\dfrac{\pi}{3}\leq x\leq\dfrac{\pi}{6}" /></p>
            <p className="mt-1"><strong>第③步 与 <MathTex tex="[0,\pi]" /> 取交集：</strong></p>
            <p className="text-center"><MathTex tex="\left[-\dfrac{\pi}{3},\dfrac{\pi}{6}\right]\cap[0,\pi]=\left[0,\;\dfrac{\pi}{6}\right]" /></p>
          </div>
        </div>
      </div>

    </section>
  );
}
