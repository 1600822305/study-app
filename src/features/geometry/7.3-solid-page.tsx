import { Math as MathTex, Collapsible, PageHeader, LessonLayout, ExportButton, Geo3dSvg } from '@/components/shared';
import { geo3dSolidProgressItems } from './data/7.3/7.3-solid-progress';
import { useProgress } from '@/hooks';
import { scrollToId } from '@/lib/scroll';

export function Geo3dSolidPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('geo3d-solid', geo3dSolidProgressItems);

  return (
    <div>
      <PageHeader
        stage="第七阶段 · 立体几何"
        title="7.3 空间几何体"
        subtitle="柱、锥、台、球——表面积与体积的计算"
        tags={[
          { label: '难度 ★★☆☆☆', color: 'green' },
          { label: '高考 5 分', color: 'red' },
          { label: '约1.5天', color: 'blue' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="7.3 空间几何体" />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-3 mb-0">
        <p className="font-bold text-gray-800 mb-2">知识地图</p>
        <div className="text-gray-800 grid grid-cols-2 gap-x-4 gap-y-1">
          <button onClick={() => scrollToId('classify')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">一、认识几何体</button>
          <button onClick={() => scrollToId('volume')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">四、体积公式</button>
          <button onClick={() => scrollToId('unfold')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">二、展开与测量</button>
          <button onClick={() => scrollToId('sphere')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">五、球的切接问题</button>
          <button onClick={() => scrollToId('surface')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">三、表面积公式</button>
          <button onClick={() => scrollToId('cheatsheet')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">六、公式速查表</button>
        </div>
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 1: 认识几何体 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="classify" className="mb-3 scroll-mt-4">
        <Collapsible title="一、认识几何体" defaultOpen storageKey="geo3d-solid:classify">
          <div className="space-y-0 text-lg text-gray-800">

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">两大分类</div>
              <div className="px-3 py-2 space-y-2">
                <p>空间几何体按照面的形状分为两大类：</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                    <p className="font-bold text-blue-700 text-center">多面体</p>
                    <p className="mt-1">每个面都是<strong>平的</strong>（多边形）</p>
                    <p className="mt-1">包括：棱柱、棱锥、棱台</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                    <p className="font-bold text-green-700 text-center">旋转体</p>
                    <p className="mt-1">有<strong>弯曲的面</strong></p>
                    <p className="mt-1">包括：圆柱、圆锥、圆台、球</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">棱柱：上下一样的柱子</div>
              <div className="px-3 py-2 space-y-2">
                <p><strong>特征</strong>：上下两个底面完全相同且平行，侧面都是平行四边形</p>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-gray-50 rounded p-2 border border-gray-200 text-center">
                    <Geo3dSvg shape={{ type: 'prism', n: 3 }} className="mx-auto" />
                    <p className="font-bold">三棱柱</p>
                  </div>
                  <div className="bg-gray-50 rounded p-2 border border-gray-200 text-center">
                    <Geo3dSvg shape={{ type: 'prism', n: 4 }} className="mx-auto" />
                    <p className="font-bold">四棱柱</p>
                  </div>
                  <div className="bg-gray-50 rounded p-2 border border-gray-200 text-center">
                    <Geo3dSvg shape={{ type: 'prism', n: 6 }} className="mx-auto" />
                    <p className="font-bold">六棱柱</p>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded p-2">
                  <p className="font-bold">三个容易混淆的概念</p>
                  <p className="mt-1"><strong>棱柱</strong>：侧棱可以歪斜，只要上下底面平行且相同即可</p>
                  <p className="mt-1"><strong>直棱柱</strong>：侧棱垂直于底面（侧面是矩形）。高考题几乎都是直棱柱</p>
                  <p className="mt-1"><strong>正棱柱</strong>：直棱柱 + 底面是正多边形（如正三棱柱、正方体）</p>
                </div>
              </div>
            </div>

            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">棱锥：有尖顶的锥子</div>
              <div className="px-3 py-2 space-y-2">
                <p><strong>特征</strong>：底面是多边形，侧面都是三角形，这些三角形共用一个顶点</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gray-50 rounded p-2 border border-gray-200 text-center">
                    <Geo3dSvg shape={{ type: 'pyramid', n: 3 }} className="mx-auto" />
                    <p className="font-bold">三棱锥（四面体）</p>
                    <p>高考最常考</p>
                  </div>
                  <div className="bg-gray-50 rounded p-2 border border-gray-200 text-center">
                    <Geo3dSvg shape={{ type: 'pyramid', n: 4 }} className="mx-auto" />
                    <p className="font-bold">四棱锥</p>
                    <p>金字塔形状</p>
                  </div>
                </div>
                <p><strong>正棱锥</strong>：底面是正多边形，顶点在底面中心的正上方</p>
                <p><strong>棱锥的高</strong>：从顶点向底面作垂线，垂线段的长度就是高</p>
              </div>
            </div>

            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-800 border-b border-purple-300 bg-purple-100 text-lg">旋转体：旋转出来的</div>
              <div className="px-3 py-2 space-y-2">
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-gray-50 rounded p-2 border border-gray-200 text-center">
                    <Geo3dSvg shape={{ type: 'cylinder' }} className="mx-auto" />
                    <p className="font-bold">圆柱</p>
                    <p>矩形绕一边旋转</p>
                  </div>
                  <div className="bg-gray-50 rounded p-2 border border-gray-200 text-center">
                    <Geo3dSvg shape={{ type: 'cone' }} className="mx-auto" />
                    <p className="font-bold">圆锥</p>
                    <p>直角三角形绕直角边旋转</p>
                  </div>
                  <div className="bg-gray-50 rounded p-2 border border-gray-200 text-center">
                    <Geo3dSvg shape={{ type: 'sphere' }} className="mx-auto" />
                    <p className="font-bold">球</p>
                    <p>半圆绕直径旋转</p>
                  </div>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded p-2">
                  <p className="font-bold">母线是什么？</p>
                  <p className="mt-1">旋转时画出曲面的那条线段，叫做<strong>母线</strong></p>
                  <p className="mt-1"><strong>圆柱</strong>的母线 = 侧面的高 = <MathTex tex="l" /></p>
                  <p className="mt-1"><strong>圆锥</strong>的母线 = 顶点到底面圆周的连线 = <MathTex tex="l" /></p>
                  <p className="mt-1">母线和高的关系：<MathTex tex="l^2 = r^2 + h^2" />（勾股定理）</p>
                </div>
              </div>
            </div>

            <div className="border border-red-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-red-800 border-b border-red-300 bg-red-100 text-lg">台体：削掉顶部的锥</div>
              <div className="px-3 py-2 space-y-2">
                <p>用一个平行于底面的平面去截锥体，截面和底面之间的部分就是<strong>台体</strong></p>
                <p><strong>棱台</strong>：截棱锥得到</p>
                <p><strong>圆台</strong>：截圆锥得到</p>
                <div className="bg-red-50 border border-red-200 rounded p-2">
                  <p className="font-bold">理解台体公式的窍门</p>
                  <p className="mt-1">台体 = 大锥 - 小锥</p>
                  <p className="mt-1">所以台体公式一定可以通过"大锥减小锥"来验证</p>
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 2: 展开与测量 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="unfold" className="mb-3 scroll-mt-4">
        <Collapsible title="二、展开与测量" defaultOpen storageKey="geo3d-solid:unfold">
          <div className="space-y-0 text-lg text-gray-800">

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">核心思路</div>
              <div className="px-3 py-2 space-y-2">
                <p className="font-bold">求表面积的关键：把立体展开成平面，然后算面积</p>
                <p>多面体的每个面本身就是平面图形，直接算面积再加起来</p>
                <p>旋转体的侧面是曲面，需要<strong>展开</strong>成平面才能算</p>
              </div>
            </div>

            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">圆柱侧面展开 = 矩形</div>
              <div className="px-3 py-2 space-y-2">
                <p>把圆柱的侧面沿着一条母线剪开，展平，得到一个<strong>矩形</strong></p>

                <div className="bg-green-50 border border-green-200 rounded p-3">
                  <p className="font-bold">矩形的长和宽分别是什么？</p>
                  <p className="mt-2"><strong>长</strong> = 底面圆的周长 = <MathTex tex="2\pi r" /></p>
                  <p className="mt-1"><strong>宽</strong> = 圆柱的高（也就是母线长） = <MathTex tex="h" /></p>
                  <p className="mt-2">所以 <MathTex tex="S_{\text{侧}} = 2\pi r \times h = 2\pi rh" /></p>
                </div>

                <p>理解方式：想象把一个纸筒沿竖线剪开，展开就是长方形</p>
              </div>
            </div>

            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">圆锥侧面展开 = 扇形</div>
              <div className="px-3 py-2 space-y-2">
                <p>把圆锥的侧面沿着一条母线剪开，展平，得到一个<strong>扇形</strong></p>

                <div className="bg-amber-50 border border-amber-200 rounded p-3">
                  <p className="font-bold">扇形的半径和弧长分别是什么？</p>
                  <p className="mt-2"><strong>扇形半径</strong> = 圆锥的母线长 = <MathTex tex="l" /></p>
                  <p className="mt-1"><strong>弧长</strong> = 底面圆的周长 = <MathTex tex="2\pi r" /></p>
                  <p className="mt-2">扇形面积 = <MathTex tex="\dfrac{1}{2} \times \text{弧长} \times \text{半径}" /></p>
                  <p className="mt-1">所以 <MathTex tex="S_{\text{侧}} = \dfrac{1}{2} \times 2\pi r \times l = \pi rl" /></p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded p-2">
                  <p className="font-bold">扇形面积公式哪来的？</p>
                  <p className="mt-1">回忆 7.0 学过的扇形面积：<MathTex tex="S = \dfrac{1}{2} l R" />（弧长 <MathTex tex="\times" /> 半径 <MathTex tex="\div 2" />）</p>
                  <p className="mt-1">这和三角形面积 = <MathTex tex="\dfrac{1}{2} \times" /> 底 <MathTex tex="\times" /> 高 很像</p>
                </div>
              </div>
            </div>

            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-800 border-b border-purple-300 bg-purple-100 text-lg">棱柱 / 棱锥的侧面</div>
              <div className="px-3 py-2 space-y-2">
                <p><strong>棱柱</strong>的每个侧面是平行四边形（直棱柱时是矩形）</p>
                <p>侧面积 = 各个侧面的面积之和，需要逐个计算</p>

                <p className="mt-1"><strong>棱锥</strong>的每个侧面是三角形</p>
                <p>侧面积 = 各个三角形面积之和</p>

                <div className="bg-purple-50 border border-purple-200 rounded p-2">
                  <p className="font-bold">正棱锥的简化</p>
                  <p className="mt-1">正棱锥的各侧面是全等的等腰三角形</p>
                  <p className="mt-1">侧面积 = <MathTex tex="\dfrac{1}{2} \times \text{底面周长} \times \text{斜高}" /></p>
                  <p className="mt-1">（<strong>斜高</strong>：从顶点到底面边的中点的距离，就是侧面三角形的高）</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-300 rounded overflow-hidden" style={{ breakInside: 'avoid' }}>
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">展开小结</div>
              <div className="px-3 py-2 space-y-2">
                <div className="overflow-x-auto">
                  <table className="w-full text-center">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="py-1 px-2">几何体</th>
                        <th className="py-1 px-2">侧面展开后</th>
                        <th className="py-1 px-2">侧面积</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 font-bold">圆柱</td>
                        <td className="py-1">矩形</td>
                        <td className="py-1"><MathTex tex="2\pi rh" /></td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 font-bold">圆锥</td>
                        <td className="py-1">扇形</td>
                        <td className="py-1"><MathTex tex="\pi rl" /></td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 font-bold">圆台</td>
                        <td className="py-1">扇环</td>
                        <td className="py-1"><MathTex tex="\pi(r+r')l" /></td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">正棱锥</td>
                        <td className="py-1">全等三角形</td>
                        <td className="py-1"><MathTex tex="\frac{1}{2}Ch'" />（<MathTex tex="C" />=周长，<MathTex tex="h'" />=斜高）</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 3: 表面积公式 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="surface" className="mb-3 scroll-mt-4">
        <Collapsible title="三、表面积公式" defaultOpen storageKey="geo3d-solid:surface">
          <div className="space-y-0 text-lg text-gray-800">

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">总公式</div>
              <div className="px-3 py-2 space-y-2">
                <p className="font-bold text-xl"><MathTex tex="S_{\text{全}} = S_{\text{侧}} + S_{\text{底}}" /></p>
                <p>侧面积在第二节已经学了，底面积就是底面图形的面积</p>
              </div>
            </div>

            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">圆柱</div>
              <div className="px-3 py-2 space-y-2">
                <div className="flex items-start gap-3">
                  <Geo3dSvg shape={{ type: 'cylinder', radius: 35, height: 60 }} width={120} height={110} className="shrink-0" />
                  <div>
                    <p>底面半径 <MathTex tex="r" />，高 <MathTex tex="h" /></p>
                    <p className="mt-1">侧面积 = <MathTex tex="2\pi rh" />（矩形）</p>
                    <p className="mt-1">两个底面 = <MathTex tex="2\pi r^2" /></p>
                    <p className="mt-2 font-bold"><MathTex tex="S_{\text{全}} = 2\pi rh + 2\pi r^2 = 2\pi r(h + r)" /></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">圆锥</div>
              <div className="px-3 py-2 space-y-2">
                <div className="flex items-start gap-3">
                  <Geo3dSvg shape={{ type: 'cone', radius: 35, height: 60 }} width={120} height={110} className="shrink-0" />
                  <div>
                    <p>底面半径 <MathTex tex="r" />，母线长 <MathTex tex="l" /></p>
                    <p className="mt-1">侧面积 = <MathTex tex="\pi rl" />（扇形）</p>
                    <p className="mt-1">一个底面 = <MathTex tex="\pi r^2" /></p>
                    <p className="mt-2 font-bold"><MathTex tex="S_{\text{全}} = \pi rl + \pi r^2 = \pi r(l + r)" /></p>
                  </div>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded p-2">
                  <p><strong>注意</strong>：母线 <MathTex tex="l" /> 不是高 <MathTex tex="h" />，它们的关系是 <MathTex tex="l = \sqrt{r^2 + h^2}" /></p>
                </div>
              </div>
            </div>

            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-800 border-b border-purple-300 bg-purple-100 text-lg">圆台</div>
              <div className="px-3 py-2 space-y-2">
                <p>上底半径 <MathTex tex="r'" />，下底半径 <MathTex tex="r" />，母线长 <MathTex tex="l" /></p>
                <p>侧面积 = <MathTex tex="\pi(r + r')l" />（扇环）</p>
                <p className="font-bold"><MathTex tex="S_{\text{全}} = \pi(r + r')l + \pi r^2 + \pi r'^2" /></p>
              </div>
            </div>

            <div className="border border-red-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-red-800 border-b border-red-300 bg-red-100 text-lg">球</div>
              <div className="px-3 py-2 space-y-2">
                <div className="flex items-start gap-3">
                  <Geo3dSvg shape={{ type: 'sphere', radius: 40 }} width={110} height={100} className="shrink-0" />
                  <div>
                    <p>半径 <MathTex tex="R" /></p>
                    <p className="mt-2 font-bold text-xl"><MathTex tex="S = 4\pi R^2" /></p>
                    <p className="mt-1">球的表面积 = 4 倍大圆面积</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-300 rounded overflow-hidden" style={{ breakInside: 'avoid' }}>
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">实战例题：求组合体表面积</div>
              <div className="px-3 py-2 space-y-2">
                <div className="bg-blue-50 border border-blue-300 rounded p-2">
                  <p className="font-bold">题目</p>
                  <p className="mt-1">一个圆柱的底面半径为 2，高为 3。在圆柱的上底面上放一个圆锥，圆锥底面半径也是 2，母线长为 <MathTex tex="\sqrt{5}" />。求这个组合体的表面积。</p>
                </div>

                <Collapsible title="完整解答" storageKey="geo3d-solid:surface-example">
                  <div className="space-y-2">
                    <p><strong>分析</strong>：组合体的表面由三部分组成：</p>
                    <p>圆柱侧面 + 圆柱下底面 + 圆锥侧面</p>
                    <p>（圆柱上底面被圆锥盖住了，所以不算）</p>

                    <p className="mt-2"><strong>第一步：圆柱侧面积</strong></p>
                    <p><MathTex tex="S_{\text{柱侧}} = 2\pi r h = 2\pi \times 2 \times 3 = 12\pi" /></p>

                    <p className="mt-2"><strong>第二步：圆柱下底面积</strong></p>
                    <p><MathTex tex="S_{\text{底}} = \pi r^2 = \pi \times 2^2 = 4\pi" /></p>

                    <p className="mt-2"><strong>第三步：圆锥侧面积</strong></p>
                    <p><MathTex tex="S_{\text{锥侧}} = \pi r l = \pi \times 2 \times \sqrt{5} = 2\sqrt{5}\pi" /></p>

                    <p className="mt-2"><strong>第四步：合计</strong></p>
                    <p><MathTex tex="S = 12\pi + 4\pi + 2\sqrt{5}\pi = (16 + 2\sqrt{5})\pi" /></p>
                  </div>
                </Collapsible>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 4: 体积公式 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="volume" className="mb-3 scroll-mt-4">
        <Collapsible title="四、体积公式" defaultOpen storageKey="geo3d-solid:volume">
          <div className="space-y-0 text-lg text-gray-800">

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">柱体体积</div>
              <div className="px-3 py-2 space-y-2">
                <p className="font-bold text-xl"><MathTex tex="V_{\text{柱}} = Sh" /></p>
                <p><MathTex tex="S" /> = 底面积，<MathTex tex="h" /> = 高（两底面之间的距离）</p>
                <p className="mt-1">圆柱：<MathTex tex="V = \pi r^2 h" /></p>
                <div className="bg-blue-50 border border-blue-200 rounded p-2">
                  <p><strong>注意</strong>：直棱柱的高 = 侧棱长，但斜棱柱的高不等于侧棱长</p>
                </div>
              </div>
            </div>

            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">锥体体积</div>
              <div className="px-3 py-2 space-y-2">
                <p className="font-bold text-xl"><MathTex tex="V_{\text{锥}} = \dfrac{1}{3}Sh" /></p>
                <p><MathTex tex="S" /> = 底面积，<MathTex tex="h" /> = 高（顶点到底面的距离）</p>
                <p className="mt-1">圆锥：<MathTex tex="V = \dfrac{1}{3}\pi r^2 h" /></p>
                <div className="bg-green-50 border border-green-200 rounded p-2">
                  <p className="font-bold">记忆：锥体体积 = 同底等高柱体的 <MathTex tex="\dfrac{1}{3}" /></p>
                </div>
              </div>
            </div>

            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">台体体积</div>
              <div className="px-3 py-2 space-y-2">
                <p className="font-bold"><MathTex tex="V_{\text{台}} = \dfrac{1}{3}h(S_1 + \sqrt{S_1 S_2} + S_2)" /></p>
                <p><MathTex tex="S_1" /> = 上底面积，<MathTex tex="S_2" /> = 下底面积，<MathTex tex="h" /> = 高</p>
                <div className="bg-amber-50 border border-amber-200 rounded p-2">
                  <p className="font-bold">验证：台体公式的两个极端</p>
                  <p className="mt-1">当 <MathTex tex="S_1 = 0" /> 时（上底缩成点），变成锥体公式 <MathTex tex="\dfrac{1}{3}S_2 h" /></p>
                  <p className="mt-1">当 <MathTex tex="S_1 = S_2" /> 时（上下底一样大），变成柱体公式 <MathTex tex="Sh" /></p>
                </div>
              </div>
            </div>

            <div className="border border-red-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-red-800 border-b border-red-300 bg-red-100 text-lg">球体积</div>
              <div className="px-3 py-2 space-y-2">
                <p className="font-bold text-xl"><MathTex tex="V = \dfrac{4}{3}\pi R^3" /></p>
                <p>球只有一个参数：半径 <MathTex tex="R" /></p>
              </div>
            </div>

            <div className="border border-indigo-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-indigo-800 border-b border-indigo-300 bg-indigo-100 text-lg">等体积法（重要技巧）</div>
              <div className="px-3 py-2 space-y-2">
                <p>同一个三棱锥，可以选择不同的面作底面</p>
                <p>不管怎么选，体积不变</p>

                <div className="bg-indigo-50 border border-indigo-200 rounded p-3">
                  <p className="font-bold">等体积法的核心</p>
                  <p className="mt-1">三棱锥 <MathTex tex="P\text{-}ABC" /> 的体积 = 三棱锥 <MathTex tex="A\text{-}PBC" /> 的体积</p>
                  <p className="mt-2">也就是说：</p>
                  <p className="mt-1"><MathTex tex="\dfrac{1}{3} S_{\triangle ABC} \times h_P = \dfrac{1}{3} S_{\triangle PBC} \times h_A" /></p>
                  <p className="mt-2"><strong>用途</strong>：当从某个顶点到对面的高不好求时，</p>
                  <p>可以换一个面作底面，选一个容易求高的方向</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-300 rounded overflow-hidden" style={{ breakInside: 'avoid' }}>
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">实战例题：等体积法求高</div>
              <div className="px-3 py-2 space-y-2">
                <div className="bg-blue-50 border border-blue-300 rounded p-2">
                  <p className="font-bold">题目</p>
                  <p className="mt-1">在三棱锥 <MathTex tex="P\text{-}ABC" /> 中，<MathTex tex="PA \perp" /> 底面 <MathTex tex="ABC" />，<MathTex tex="PA = 3" />，<MathTex tex="\triangle ABC" /> 是边长为 2 的等边三角形。求点 <MathTex tex="A" /> 到平面 <MathTex tex="PBC" /> 的距离。</p>
                </div>

                <Collapsible title="完整解答" storageKey="geo3d-solid:volume-example">
                  <div className="space-y-2">
                    <p><strong>思路</strong>：直接求 A 到面 PBC 的距离很难，用等体积法</p>

                    <p className="mt-2"><strong>第一步：以 ABC 为底面求体积</strong></p>
                    <p>底面是等边三角形，边长 = 2</p>
                    <p><MathTex tex="S_{\triangle ABC} = \dfrac{\sqrt{3}}{4} \times 2^2 = \sqrt{3}" /></p>
                    <p>高 = <MathTex tex="PA = 3" />（因为 <MathTex tex="PA \perp" /> 底面）</p>
                    <p><MathTex tex="V = \dfrac{1}{3} \times \sqrt{3} \times 3 = \sqrt{3}" /></p>

                    <p className="mt-2"><strong>第二步：以 PBC 为底面列等式</strong></p>
                    <p>需要先求 <MathTex tex="S_{\triangle PBC}" /></p>
                    <p>在 <MathTex tex="\triangle PBC" /> 中：<MathTex tex="PB = \sqrt{PA^2 + AB^2} = \sqrt{9+4} = \sqrt{13}" /></p>
                    <p>同理 <MathTex tex="PC = \sqrt{PA^2 + AC^2} = \sqrt{13}" />，<MathTex tex="BC = 2" /></p>
                    <p><MathTex tex="\triangle PBC" /> 是等腰三角形，底边 BC = 2</p>
                    <p>BC 上的高 = <MathTex tex="\sqrt{13 - 1} = \sqrt{12} = 2\sqrt{3}" /></p>
                    <p><MathTex tex="S_{\triangle PBC} = \dfrac{1}{2} \times 2 \times 2\sqrt{3} = 2\sqrt{3}" /></p>

                    <p className="mt-2"><strong>第三步：等体积法求距离</strong></p>
                    <p>设 A 到面 PBC 的距离为 <MathTex tex="d" /></p>
                    <p><MathTex tex="V = \dfrac{1}{3} S_{\triangle PBC} \times d" /></p>
                    <p><MathTex tex="\sqrt{3} = \dfrac{1}{3} \times 2\sqrt{3} \times d" /></p>
                    <p><MathTex tex="d = \dfrac{3\sqrt{3}}{2\sqrt{3}} = \dfrac{3}{2}" /></p>

                    <div className="bg-green-50 border border-green-200 rounded p-2 mt-1">
                      <p className="font-bold">答：A 到平面 PBC 的距离为 <MathTex tex="\dfrac{3}{2}" /></p>
                    </div>
                  </div>
                </Collapsible>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 5: 球的切接问题 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="sphere" className="mb-3 scroll-mt-4">
        <Collapsible title="五、球的切接问题（高考重点）" defaultOpen storageKey="geo3d-solid:sphere">
          <div className="space-y-0 text-lg text-gray-800">

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">球的截面公式</div>
              <div className="px-3 py-2 space-y-2">
                <p>用平面截球，截面一定是<strong>圆</strong></p>
                <p>设球半径为 <MathTex tex="R" />，球心到截面的距离为 <MathTex tex="d" />，截面圆的半径为 <MathTex tex="r" /></p>

                <div className="bg-blue-50 border border-blue-200 rounded p-3 text-center">
                  <p className="font-bold text-xl"><MathTex tex="r^2 + d^2 = R^2" /></p>
                  <p className="mt-1">这就是一个直角三角形（勾股定理）</p>
                </div>

                <p>当 <MathTex tex="d = 0" /> 时，截面过球心，<MathTex tex="r = R" />，这个截面叫<strong>大圆</strong></p>
              </div>
            </div>

            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">外接球：所有顶点都在球面上</div>
              <div className="px-3 py-2 space-y-2">
                <p><strong>定义</strong>：如果几何体的所有顶点都在同一个球面上，这个球就是外接球</p>

                <div className="bg-green-50 border border-green-200 rounded p-3">
                  <p className="font-bold text-lg">模型一：长方体模型（最常用）</p>
                  <p className="mt-2"><strong>结论</strong>：长方体的外接球的直径 = 体对角线</p>
                  <p className="mt-1">设长方体三边为 <MathTex tex="a, b, c" />：</p>
                  <p className="mt-1"><MathTex tex="(2R)^2 = a^2 + b^2 + c^2" /></p>
                  <p className="mt-1"><MathTex tex="R = \dfrac{\sqrt{a^2 + b^2 + c^2}}{2}" /></p>

                  <p className="mt-2"><strong>适用条件</strong>：有三条两两垂直的棱相交于一点的三棱锥</p>
                  <p>比如 <MathTex tex="PA \perp PB \perp PC" /> 两两垂直时，补成长方体</p>
                </div>

                <div className="bg-green-50 border border-green-200 rounded p-3">
                  <p className="font-bold text-lg">模型二：汉堡模型（棱柱外接球）</p>
                  <p className="mt-2"><strong>适用</strong>：直棱柱的外接球</p>
                  <p className="mt-1">球心在上下底面中心连线的中点</p>
                  <p className="mt-1">设底面外接圆半径为 <MathTex tex="r_0" />，棱柱高为 <MathTex tex="h" />：</p>
                  <p className="mt-1"><MathTex tex="R^2 = r_0^2 + \left(\dfrac{h}{2}\right)^2" /></p>

                  <p className="mt-2"><strong>解题步骤</strong>：</p>
                  <p>第一步：求底面三角形的外接圆半径 <MathTex tex="r_0" />（用正弦定理 <MathTex tex="\dfrac{a}{\sin A} = 2r_0" />）</p>
                  <p>第二步：用上面的公式求 <MathTex tex="R" /></p>
                </div>

                <div className="bg-green-50 border border-green-200 rounded p-3">
                  <p className="font-bold text-lg">模型三：垂面模型（一条线垂直于底面）</p>
                  <p className="mt-2"><strong>适用</strong>：三棱锥 <MathTex tex="P\text{-}ABC" />，其中 <MathTex tex="PA \perp" /> 底面 <MathTex tex="ABC" /></p>
                  <p className="mt-1">球心在底面外接圆圆心的正上方</p>
                  <p className="mt-1">设底面外接圆半径为 <MathTex tex="r_0" />，<MathTex tex="PA = h" />：</p>
                  <p className="mt-1"><MathTex tex="R^2 = r_0^2 + \left(\dfrac{h}{2}\right)^2" /></p>

                  <p className="mt-2">如果 P 的射影不是底面外接圆圆心：</p>
                  <p>设球心到底面的距离为 <MathTex tex="x" />，列两个方程：</p>
                  <p><MathTex tex="R^2 = r_0^2 + x^2" /></p>
                  <p><MathTex tex="R^2 = (h - x)^2 + a^2" />（<MathTex tex="a" /> 为射影到外心的距离）</p>
                  <p>两式联立即可求解</p>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded p-2">
                  <p className="font-bold">常用结论</p>
                  <p className="mt-1"><strong>正方体</strong>外接球：边长为 <MathTex tex="a" />，则 <MathTex tex="R = \dfrac{\sqrt{3}}{2}a" /></p>
                  <p className="mt-1"><strong>正四面体</strong>外接球：边长为 <MathTex tex="a" />，则 <MathTex tex="R = \dfrac{\sqrt{6}}{4}a" /></p>
                </div>
              </div>
            </div>

            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">内切球：等体积法是万能解法</div>
              <div className="px-3 py-2 space-y-2">
                <p><strong>定义</strong>：球与几何体的每个面都相切，这个球就是内切球</p>

                <div className="bg-amber-50 border border-amber-200 rounded p-3">
                  <p className="font-bold text-lg">等体积法求内切球半径</p>
                  <p className="mt-2">内切球球心到每个面的距离都等于内切球半径 <MathTex tex="r" /></p>
                  <p className="mt-1">连接球心与每个面，把几何体分成若干个小锥</p>
                  <p className="mt-1">这些小锥的高都是 <MathTex tex="r" />，底面是原几何体的各个面</p>

                  <p className="mt-2 font-bold"><MathTex tex="V = \dfrac{1}{3} r \cdot S_{\text{全}}" /></p>
                  <p className="mt-1">因此：<MathTex tex="r = \dfrac{3V}{S_{\text{全}}}" /></p>

                  <p className="mt-2">其中 <MathTex tex="V" /> 是几何体的体积，<MathTex tex="S_{\text{全}}" /> 是全部面的面积之和</p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded p-2">
                  <p className="font-bold">常用结论</p>
                  <p className="mt-1"><strong>正方体</strong>内切球：边长为 <MathTex tex="a" />，则 <MathTex tex="r = \dfrac{a}{2}" /></p>
                  <p className="mt-1"><strong>正四面体</strong>内切球：边长为 <MathTex tex="a" />，则 <MathTex tex="r = \dfrac{\sqrt{6}}{12}a" /></p>
                  <p className="mt-1">正四面体的 <MathTex tex="R = 3r" />（外接球半径是内切球半径的 3 倍）</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-300 rounded overflow-hidden" style={{ breakInside: 'avoid' }}>
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">实战例题：求外接球表面积</div>
              <div className="px-3 py-2 space-y-2">
                <div className="bg-blue-50 border border-blue-300 rounded p-2">
                  <p className="font-bold">题目</p>
                  <p className="mt-1">已知正三棱柱 <MathTex tex="ABC\text{-}A_1B_1C_1" /> 的底面边长为 <MathTex tex="\sqrt{3}" />，高为 2，求其外接球的表面积。</p>
                </div>

                <Collapsible title="完整解答" storageKey="geo3d-solid:sphere-example">
                  <div className="space-y-2">
                    <p><strong>分析</strong>：正三棱柱 = 直棱柱 + 底面正三角形，用汉堡模型</p>

                    <p className="mt-2"><strong>第一步：求底面外接圆半径</strong></p>
                    <p>底面是边长 <MathTex tex="a = \sqrt{3}" /> 的等边三角形</p>
                    <p>等边三角形外接圆半径 <MathTex tex="r_0 = \dfrac{\sqrt{3}}{3} a = \dfrac{\sqrt{3}}{3} \times \sqrt{3} = 1" /></p>

                    <p className="mt-2"><strong>第二步：用汉堡模型公式</strong></p>
                    <p><MathTex tex="R^2 = r_0^2 + \left(\dfrac{h}{2}\right)^2 = 1^2 + \left(\dfrac{2}{2}\right)^2 = 1 + 1 = 2" /></p>

                    <p className="mt-2"><strong>第三步：求表面积</strong></p>
                    <p><MathTex tex="S = 4\pi R^2 = 4\pi \times 2 = 8\pi" /></p>

                    <div className="bg-green-50 border border-green-200 rounded p-2 mt-1">
                      <p className="font-bold">答：外接球的表面积为 <MathTex tex="8\pi" /></p>
                    </div>
                  </div>
                </Collapsible>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 6: 公式速查表 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="cheatsheet" className="mb-3 scroll-mt-4">
        <Collapsible title="六、公式速查表" defaultOpen storageKey="geo3d-solid:cheatsheet">
          <div className="space-y-0 text-lg text-gray-800">

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">表面积与体积</div>
              <div className="px-3 py-2">
                <div className="overflow-x-auto">
                  <table className="w-full text-center">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="py-1 px-2">几何体</th>
                        <th className="py-1 px-2">侧面积</th>
                        <th className="py-1 px-2">体积</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 font-bold">圆柱</td>
                        <td className="py-2"><MathTex tex="2\pi rh" /></td>
                        <td className="py-2"><MathTex tex="\pi r^2 h" /></td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 font-bold">圆锥</td>
                        <td className="py-2"><MathTex tex="\pi rl" /></td>
                        <td className="py-2"><MathTex tex="\frac{1}{3}\pi r^2 h" /></td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 font-bold">圆台</td>
                        <td className="py-2"><MathTex tex="\pi(r+r')l" /></td>
                        <td className="py-2"><MathTex tex="\frac{1}{3}\pi h(r^2+rr'+r'^2)" /></td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 font-bold">球</td>
                        <td className="py-2"><MathTex tex="4\pi R^2" /></td>
                        <td className="py-2"><MathTex tex="\frac{4}{3}\pi R^3" /></td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 font-bold">棱柱</td>
                        <td className="py-2">逐面计算</td>
                        <td className="py-2"><MathTex tex="Sh" /></td>
                      </tr>
                      <tr>
                        <td className="py-2 font-bold">棱锥</td>
                        <td className="py-2">逐面计算</td>
                        <td className="py-2"><MathTex tex="\frac{1}{3}Sh" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">球相关公式</div>
              <div className="px-3 py-2">
                <div className="overflow-x-auto">
                  <table className="w-full text-center">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="py-1 px-2">项目</th>
                        <th className="py-1 px-2">公式</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 font-bold text-left px-2">截面</td>
                        <td className="py-2"><MathTex tex="r^2 + d^2 = R^2" /></td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 font-bold text-left px-2">长方体外接球</td>
                        <td className="py-2"><MathTex tex="(2R)^2 = a^2 + b^2 + c^2" /></td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 font-bold text-left px-2">棱柱外接球</td>
                        <td className="py-2"><MathTex tex="R^2 = r_0^2 + (h/2)^2" /></td>
                      </tr>
                      <tr>
                        <td className="py-2 font-bold text-left px-2">内切球半径</td>
                        <td className="py-2"><MathTex tex="r = 3V / S_{\text{全}}" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="border border-amber-300 rounded overflow-hidden" style={{ breakInside: 'avoid' }}>
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">易错点</div>
              <div className="px-3 py-2 space-y-2">
                <p><strong>1. 母线和高搞混</strong></p>
                <p className="ml-4">圆锥表面积用母线 <MathTex tex="l" />，体积用高 <MathTex tex="h" /></p>
                <p className="ml-4">关系：<MathTex tex="l^2 = r^2 + h^2" /></p>

                <p className="mt-1"><strong>2. 棱锥体积忘乘 <MathTex tex="\dfrac{1}{3}" /></strong></p>
                <p className="ml-4">柱体 = <MathTex tex="Sh" />，锥体 = <MathTex tex="\dfrac{1}{3}Sh" />，别忘了那个 <MathTex tex="\dfrac{1}{3}" /></p>

                <p className="mt-1"><strong>3. 求球表面积时直接用半径的平方</strong></p>
                <p className="ml-4">题目经常给的是直径或体对角线，要先求出 <MathTex tex="R" /> 再代入</p>

                <p className="mt-1"><strong>4. 组合体漏算或多算面</strong></p>
                <p className="ml-4">两个几何体拼合时，接触面不算在表面积里</p>

                <p className="mt-1"><strong>5. 外接球和内切球搞反</strong></p>
                <p className="ml-4">外接球：顶点在球面上（球包住几何体）</p>
                <p className="ml-4">内切球：面与球相切（球在几何体里面）</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      </LessonLayout>
    </div>
  );
}
