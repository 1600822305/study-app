import { Math as MathTex, PageBreak } from '@/components/shared';

export function TrigPrereqAnswers() {
  return (
    <section className="mb-8 print-answers">
      <PageBreak label="答案与解析" />
      <h2 className="text-xl font-bold text-gray-900 mb-4">📝 5.0 三角前置知识 — 答案与解析</h2>

      {/* ═══════════ 一、弧度制（2 题）═══════════ */}
      <div className="mb-5">
        <p className="font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">一、弧度制</p>
        <div className="columns-2 gap-4 text-gray-700">

          {/* 第 1 题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">1.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：B（<MathTex tex="\dfrac{2\pi}{3}" />）</p>
              <p className="mt-1">角度转弧度：乘以 <MathTex tex="\dfrac{\pi}{180}" /></p>
              <p className="text-center"><MathTex tex="120° = 120 \times \dfrac{\pi}{180} = \dfrac{2\pi}{3}" /></p>
            </div>
          </div>

          {/* 第 2 题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">2.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：C（150°）</p>
              <p className="mt-1">弧度转角度：乘以 <MathTex tex="\dfrac{180°}{\pi}" /></p>
              <p className="text-center"><MathTex tex="\dfrac{5\pi}{6} \times \dfrac{180°}{\pi} = \dfrac{5 \times 180°}{6} = 150°" /></p>
            </div>
          </div>

        </div>
      </div>

      {/* ═══════════ 二、单位圆与三角函数定义（2 题）═══════════ */}
      <div className="mb-5">
        <p className="font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">二、单位圆与三角函数定义</p>
        <div className="columns-2 gap-4 text-gray-700">

          {/* 第 3 题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">3.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：B（<MathTex tex="(\cos\theta,\;\sin\theta)" />）</p>
              <p className="mt-1">单位圆上点 <MathTex tex="P = (\cos\theta,\;\sin\theta)" /></p>
              <p className="mt-1">x 坐标 = cos，y 坐标 = sin</p>
            </div>
          </div>

          {/* 第 4 题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">4.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：B（1）</p>
              <p className="mt-1">勾股定理：单位圆上 <MathTex tex="x^2 + y^2 = 1" /></p>
              <p className="text-center"><MathTex tex="\therefore \sin^2\theta + \cos^2\theta = 1" /></p>
            </div>
          </div>

        </div>
      </div>

      {/* ═══════════ 三、特殊角的三角函数值（2 题）═══════════ */}
      <div className="mb-5">
        <p className="font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">三、特殊角的三角函数值</p>
        <div className="columns-2 gap-4 text-gray-700">

          {/* 第 5 题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">5.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：A（<MathTex tex="\dfrac{1}{2}" />）</p>
              <p className="mt-1">口诀：cos 从大到小（1→0），根号下 4→0 除以 2</p>
              <p className="text-center"><MathTex tex="\cos 60° = \dfrac{\sqrt{1}}{2} = \dfrac{1}{2}" /></p>
            </div>
          </div>

          {/* 第 6 题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">6.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：C（<MathTex tex="\dfrac{\sqrt{2}}{2}" />）</p>
              <p className="mt-1"><MathTex tex="135° = 180° - 45°" /></p>
              <p className="mt-1">诱导公式：<MathTex tex="\sin(180°-\theta) = \sin\theta" /></p>
              <p className="text-center"><MathTex tex="\sin 135° = \sin 45° = \dfrac{\sqrt{2}}{2}" /></p>
            </div>
          </div>

        </div>
      </div>

      {/* ═══════════ 四、各象限的符号规律（2 题）═══════════ */}
      <div className="mb-5">
        <p className="font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">四、各象限的符号规律</p>
        <div className="columns-2 gap-4 text-gray-700">

          {/* 第 7 题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">7.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：C（tan θ）</p>
              <p className="mt-1">口诀：一全正，二正弦，三正切，四余弦</p>
              <p className="mt-1">第三象限：sin−, cos−，但 <MathTex tex="\tan = \dfrac{\sin}{\cos} = \dfrac{(-)}{(-)} = (+)" /></p>
            </div>
          </div>

          {/* 第 8 题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">8.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：B（负）</p>
              <p className="mt-1"><MathTex tex="210°" /> 在第三象限（180°~270°）</p>
              <p className="mt-1">第三象限 cos &lt; 0（x 坐标为负）</p>
              <p className="text-center"><MathTex tex="\therefore \cos 210° < 0" /></p>
            </div>
          </div>

        </div>
      </div>

      {/* ═══════════ 五、函数性质术语（2 题）═══════════ */}
      <div className="mb-5">
        <p className="font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">五、函数性质术语</p>
        <div className="columns-2 gap-4 text-gray-700">

          {/* 第 9 题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">9.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：C（单调递增）</p>
              <p className="mt-1">递增 = x 增大 → y 也增大（图像在"上坡"）</p>
            </div>
          </div>

          {/* 第 10 题 */}
          <div className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">10.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">答案：B（对称轴）</p>
              <p className="mt-1">波峰/波谷处 = 对称轴（一条竖线，左右折叠重合）</p>
              <p className="mt-1">过零点处 = 对称中心（一个点，旋转 180° 重合）</p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
