import { Math as MathTex, PageBreak } from '@/components/shared';

// ══════════════════════════════════════════════════════════
// 7.2 空间向量法 — 答案与解析
// 解答题直接写 JSX，打印共用
// ══════════════════════════════════════════════════════════

export function Geo3dVectorAnswers() {
  return (
    <section className="mb-8 print-answers">
      <PageBreak label="答案与解析" />
      <h2 className="text-xl font-bold text-gray-900 mb-4">📝 7.2 空间向量法 — 答案与解析</h2>

      <div className="columns-2 gap-6 text-gray-700 [&_.katex]:text-[1.15em]" style={{ columnRule: '1px solid #e5e7eb' }}>

        {/* 大题1 */}
        <div className="mb-4 pb-3 border-b border-gray-200">
          <p className="font-bold text-gray-900 mb-2">大题1.（12 分）</p>
          <p className="font-bold">建系</p>
          <p className="mt-1.5">以 A 为原点，AB 为 x 轴，AD 为 y 轴，AP 为 z 轴</p>
          <p className="mt-1.5"><MathTex tex="A(0,0,0)" />，<MathTex tex="B(2,0,0)" />，<MathTex tex="C(2,2,0)" />，<MathTex tex="D(0,2,0)" />，<MathTex tex="P(0,0,2)" /></p>

          <p className="font-bold mt-3">（1）证明 <MathTex tex="BD \perp" /> 面 <MathTex tex="PAC" /></p>
          <p className="mt-1.5"><MathTex tex="\overrightarrow{BD} = (-2, 2, 0)" /></p>
          <p className="mt-1.5">面 PAC 内取两个向量：<MathTex tex="\overrightarrow{AC} = (2, 2, 0)" />，<MathTex tex="\overrightarrow{AP} = (0, 0, 2)" /></p>
          <p className="mt-1.5"><MathTex tex="\overrightarrow{BD} \cdot \overrightarrow{AC} = (-2) \times 2 + 2 \times 2 + 0 \times 0 = 0" /> ✓</p>
          <p className="mt-1.5"><MathTex tex="\overrightarrow{BD} \cdot \overrightarrow{AP} = (-2) \times 0 + 2 \times 0 + 0 \times 2 = 0" /> ✓</p>
          <p className="mt-1.5">所以 <strong><MathTex tex="BD \perp" /> 面 PAC</strong></p>

          <p className="font-bold mt-3">（2）求二面角 <MathTex tex="P\text{-}BC\text{-}A" /> 的余弦值</p>
          <p className="mt-1.5">面 PBC 的法向量：取 <MathTex tex="\overrightarrow{BP} = (-2, 0, 2)" />，<MathTex tex="\overrightarrow{BC} = (0, 2, 0)" /></p>
          <p className="mt-1.5 ml-4">设 <MathTex tex="\vec{n_1} = (x, y, z)" /></p>
          <p className="mt-1.5 ml-4"><MathTex tex="\vec{n_1} \cdot \overrightarrow{BP} = -2x + 2z = 0" />，得 <MathTex tex="x = z" /></p>
          <p className="mt-1.5 ml-4"><MathTex tex="\vec{n_1} \cdot \overrightarrow{BC} = 2y = 0" />，得 <MathTex tex="y = 0" /></p>
          <p className="mt-1.5 ml-4">取 <MathTex tex="x = 1" />，得 <MathTex tex="\vec{n_1} = (1, 0, 1)" /></p>
          <p className="mt-1.5">面 ABC 的法向量：<MathTex tex="\vec{n_2} = (0, 0, 1)" />（底面法向量）</p>
          <p className="mt-1.5"><MathTex tex="\cos\theta = \dfrac{|\vec{n_1} \cdot \vec{n_2}|}{|\vec{n_1}| \cdot |\vec{n_2}|} = \dfrac{|1|}{\sqrt{2} \times 1} = \dfrac{\sqrt{2}}{2}" /></p>
          <p className="mt-1.5">所以二面角的余弦值为 <MathTex tex="\dfrac{\sqrt{2}}{2}" /></p>
        </div>

        {/* 大题2 */}
        <div className="mb-4 pb-3 border-b border-gray-200">
          <p className="font-bold text-gray-900 mb-2">大题2.（12 分）</p>
          <p className="font-bold">建系</p>
          <p className="mt-1.5">以 A 为原点，AB 为 x 轴，AD 为 y 轴，AP 为 z 轴</p>
          <p className="mt-1.5"><MathTex tex="A(0,0,0)" />，<MathTex tex="B(2,0,0)" />，<MathTex tex="C(2,2,0)" />，<MathTex tex="D(0,2,0)" />，<MathTex tex="P(0,0,2)" /></p>
          <p className="mt-1.5"><MathTex tex="E" /> 是 PC 中点：<MathTex tex="E = \left(\dfrac{0+2}{2},\, \dfrac{0+2}{2},\, \dfrac{2+0}{2}\right) = (1, 1, 1)" /></p>

          <p className="font-bold mt-3">（1）证明 <MathTex tex="PA \parallel" /> 面 <MathTex tex="BDE" /></p>
          <p className="mt-1.5">面 BDE 内取两个向量：<MathTex tex="\overrightarrow{BD} = (-2, 2, 0)" />，<MathTex tex="\overrightarrow{BE} = (-1, 1, 1)" /></p>
          <p className="mt-1.5 ml-4">设 <MathTex tex="\vec{n} = (x, y, z)" /></p>
          <p className="mt-1.5 ml-4"><MathTex tex="\vec{n} \cdot \overrightarrow{BD} = -2x + 2y = 0" />，得 <MathTex tex="x = y" /></p>
          <p className="mt-1.5 ml-4"><MathTex tex="\vec{n} \cdot \overrightarrow{BE} = -x + y + z = 0" />，代入 <MathTex tex="x = y" />，得 <MathTex tex="z = 0" /></p>
          <p className="mt-1.5 ml-4">取 <MathTex tex="x = 1" />，得 <MathTex tex="\vec{n} = (1, 1, 0)" /></p>
          <p className="mt-1.5"><MathTex tex="\overrightarrow{PA} = (0, 0, -2)" /></p>
          <p className="mt-1.5"><MathTex tex="\overrightarrow{PA} \cdot \vec{n} = 0 \times 1 + 0 \times 1 + (-2) \times 0 = 0" /> ✓</p>
          <p className="mt-1.5">且 PA 不在面 BDE 内，所以 <strong><MathTex tex="PA \parallel" /> 面 BDE</strong></p>

          <p className="font-bold mt-3">（2）求直线 BE 与底面所成角的正弦值</p>
          <p className="mt-1.5"><MathTex tex="\overrightarrow{BE} = (-1, 1, 1)" />，底面法向量 <MathTex tex="\vec{n} = (0, 0, 1)" /></p>
          <p className="mt-1.5"><MathTex tex="\sin\theta = \dfrac{|\overrightarrow{BE} \cdot \vec{n}|}{|\overrightarrow{BE}| \cdot |\vec{n}|} = \dfrac{|1|}{\sqrt{3} \times 1} = \dfrac{\sqrt{3}}{3}" /></p>
          <p className="mt-1.5">所以所成角的正弦值为 <MathTex tex="\dfrac{\sqrt{3}}{3}" /></p>
        </div>

        {/* 大题3 */}
        <div className="mb-4 pb-3 border-b border-gray-200">
          <p className="font-bold text-gray-900 mb-2">大题3.（12 分）</p>
          <p className="font-bold">建系</p>
          <p className="mt-1.5">以 A 为原点，AB 为 x 轴，AD 为 y 轴，<MathTex tex="AA_1" /> 为 z 轴</p>
          <p className="mt-1.5"><MathTex tex="A(0,0,0)" />，<MathTex tex="B(2,0,0)" />，<MathTex tex="C(2,2,0)" />，<MathTex tex="D(0,2,0)" /></p>
          <p className="mt-1.5"><MathTex tex="B_1(2,0,2)" />，<MathTex tex="C_1(2,2,2)" />，<MathTex tex="D_1(0,2,2)" /></p>
          <p className="mt-1.5"><MathTex tex="E" /> 是 <MathTex tex="DD_1" /> 中点：<MathTex tex="E(0, 2, 1)" /></p>

          <p className="font-bold mt-3">（1）求异面直线 AE 与 <MathTex tex="B_1C" /> 所成角</p>
          <p className="mt-1.5"><MathTex tex="\overrightarrow{AE} = (0, 2, 1)" />，<MathTex tex="\overrightarrow{B_1C} = (0, 2, -2)" /></p>
          <p className="mt-1.5"><MathTex tex="\overrightarrow{AE} \cdot \overrightarrow{B_1C} = 0 \times 0 + 2 \times 2 + 1 \times (-2) = 2" /></p>
          <p className="mt-1.5"><MathTex tex="|\overrightarrow{AE}| = \sqrt{0+4+1} = \sqrt{5}" />，<MathTex tex="|\overrightarrow{B_1C}| = \sqrt{0+4+4} = 2\sqrt{2}" /></p>
          <p className="mt-1.5"><MathTex tex="\cos\theta = \dfrac{|\overrightarrow{AE} \cdot \overrightarrow{B_1C}|}{|\overrightarrow{AE}| \cdot |\overrightarrow{B_1C}|} = \dfrac{2}{\sqrt{5} \times 2\sqrt{2}} = \dfrac{2}{2\sqrt{10}} = \dfrac{\sqrt{10}}{10}" /></p>
          <p className="mt-1.5">所以所成角的余弦值为 <MathTex tex="\dfrac{\sqrt{10}}{10}" /></p>

          <p className="font-bold mt-3">（2）求点 B 到平面 <MathTex tex="AEC_1" /> 的距离</p>
          <p className="mt-1.5">面 <MathTex tex="AEC_1" /> 内取：<MathTex tex="\overrightarrow{AE} = (0, 2, 1)" />，<MathTex tex="\overrightarrow{AC_1} = (2, 2, 2)" /></p>
          <p className="mt-1.5 ml-4">设 <MathTex tex="\vec{n} = (x, y, z)" /></p>
          <p className="mt-1.5 ml-4"><MathTex tex="\vec{n} \cdot \overrightarrow{AE} = 2y + z = 0" />，得 <MathTex tex="z = -2y" /></p>
          <p className="mt-1.5 ml-4"><MathTex tex="\vec{n} \cdot \overrightarrow{AC_1} = 2x + 2y + 2z = 0" />，代入得 <MathTex tex="2x + 2y - 4y = 0" />，即 <MathTex tex="x = y" /></p>
          <p className="mt-1.5 ml-4">取 <MathTex tex="y = 1" />，得 <MathTex tex="\vec{n} = (1, 1, -2)" />，<MathTex tex="|\vec{n}| = \sqrt{1+1+4} = \sqrt{6}" /></p>
          <p className="mt-1.5">取平面上一点 A，则 <MathTex tex="\overrightarrow{AB} = (2, 0, 0)" /></p>
          <p className="mt-1.5"><MathTex tex="d = \dfrac{|\overrightarrow{AB} \cdot \vec{n}|}{|\vec{n}|} = \dfrac{|2 \times 1 + 0 + 0|}{\sqrt{6}} = \dfrac{2}{\sqrt{6}} = \dfrac{\sqrt{6}}{3}" /></p>
          <p className="mt-1.5">所以距离为 <MathTex tex="\dfrac{\sqrt{6}}{3}" /></p>
        </div>

        {/* 大题4 */}
        <div className="mb-4 pb-3 border-b border-gray-200">
          <p className="font-bold text-gray-900 mb-2">大题4.（12 分）</p>
          <p className="font-bold">建系</p>
          <p className="mt-1.5">以 B 为原点，BA 为 x 轴，BC 为 y 轴，<MathTex tex="BB_1" /> 为 z 轴</p>
          <p className="mt-1.5"><MathTex tex="B(0,0,0)" />，<MathTex tex="A(2,0,0)" />，<MathTex tex="C(0,2,0)" /></p>
          <p className="mt-1.5"><MathTex tex="B_1(0,0,2)" />，<MathTex tex="A_1(2,0,2)" />，<MathTex tex="C_1(0,2,2)" /></p>
          <p className="mt-1.5"><MathTex tex="E" /> 是 <MathTex tex="AA_1" /> 中点：<MathTex tex="E(2, 0, 1)" /></p>
          <p className="mt-1.5"><MathTex tex="F" /> 是 <MathTex tex="CC_1" /> 中点：<MathTex tex="F(0, 2, 1)" /></p>

          <p className="font-bold mt-3">（1）证明 <MathTex tex="EF \parallel AC" /></p>
          <p className="mt-1.5"><MathTex tex="\overrightarrow{EF} = F - E = (0-2,\, 2-0,\, 1-1) = (-2, 2, 0)" /></p>
          <p className="mt-1.5"><MathTex tex="\overrightarrow{AC} = C - A = (0-2,\, 2-0,\, 0-0) = (-2, 2, 0)" /></p>
          <p className="mt-1.5">因为 <MathTex tex="\overrightarrow{EF} = \overrightarrow{AC}" />，方向向量相同</p>
          <p className="mt-1.5">且 E 不在直线 AC 上，所以 <strong><MathTex tex="EF \parallel AC" /></strong></p>

          <p className="font-bold mt-3">（2）证明 <MathTex tex="AB_1 \perp A_1C" /></p>
          <p className="mt-1.5"><MathTex tex="\overrightarrow{AB_1} = B_1 - A = (0-2,\, 0-0,\, 2-0) = (-2, 0, 2)" /></p>
          <p className="mt-1.5"><MathTex tex="\overrightarrow{A_1C} = C - A_1 = (0-2,\, 2-0,\, 0-2) = (-2, 2, -2)" /></p>
          <p className="mt-1.5"><MathTex tex="\overrightarrow{AB_1} \cdot \overrightarrow{A_1C} = (-2) \times (-2) + 0 \times 2 + 2 \times (-2) = 4 + 0 - 4 = 0" /></p>
          <p className="mt-1.5">因为点乘为 0，所以 <strong><MathTex tex="AB_1 \perp A_1C" /></strong></p>
        </div>

      </div>
    </section>
  );
}
