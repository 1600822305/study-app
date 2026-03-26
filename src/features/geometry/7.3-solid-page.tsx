import { Math as MathTex, Collapsible, PageHeader, LessonLayout, ExportButton, PageBreak, Geo3dSvg } from '@/components/shared';
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
          { label: '约1天', color: 'blue' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="7.3 空间几何体" />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-3 mb-0">
        <p className="font-bold text-gray-800 mb-2">📋 知识地图</p>
        <div className="text-gray-600 grid grid-cols-2 gap-x-4 gap-y-1">
          <button onClick={() => scrollToId('classify')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">一、几何体分类</button>
          <button onClick={() => scrollToId('volume')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">四、体积公式</button>
          <button onClick={() => scrollToId('views')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">二、三视图</button>
          <button onClick={() => scrollToId('sphere')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">五、球的相关问题</button>
          <button onClick={() => scrollToId('surface')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors block">三、表面积公式</button>
        </div>
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 1: 几何体分类 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="classify" className="mb-3 scroll-mt-4">
        <Collapsible title="一、几何体分类" defaultOpen storageKey="geo3d-solid:classify">
          <div className="space-y-0 text-lg text-gray-800">

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">两大类</div>
              <div className="px-3 py-2 space-y-0">
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-blue-50 rounded-lg p-2 border border-blue-200 text-center">
                    <p className="font-bold text-blue-700">多面体</p>
                    <p>所有面都是<strong>平面</strong></p>
                    <p>棱柱、棱锥、棱台</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-2 border border-green-200 text-center">
                    <p className="font-bold text-green-700">旋转体</p>
                    <p>有<strong>曲面</strong></p>
                    <p>圆柱、圆锥、圆台、球</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">棱柱</div>
              <div className="px-3 py-2 space-y-0">
                <p><strong>特征</strong>：上下两个底面完全相同且平行，侧面都是平行四边形</p>
                <div className="grid grid-cols-3 gap-2 mt-1">
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
                <p className="mt-1"><strong>直棱柱</strong>：侧棱垂直于底面（高考最常见）</p>
                <p><strong>正棱柱</strong>：直棱柱 + 底面是正多边形</p>
              </div>
            </div>

            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">棱锥</div>
              <div className="px-3 py-2 space-y-0">
                <p><strong>特征</strong>：一个底面是多边形，其余各面是共顶点的三角形</p>
                <div className="grid grid-cols-2 gap-2 mt-1">
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
                <p className="mt-1"><strong>正棱锥</strong>：底面是正多边形，顶点在底面中心正上方</p>
              </div>
            </div>

            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-800 border-b border-purple-300 bg-purple-100 text-lg">旋转体</div>
              <div className="px-3 py-2 space-y-0">
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-gray-50 rounded p-2 border border-gray-200 text-center">
                    <Geo3dSvg shape={{ type: 'cylinder' }} className="mx-auto" />
                    <p className="font-bold">圆柱</p>
                    <p>矩形绕一边旋转</p>
                  </div>
                  <div className="bg-gray-50 rounded p-2 border border-gray-200 text-center">
                    <Geo3dSvg shape={{ type: 'cone' }} className="mx-auto" />
                    <p className="font-bold">圆锥</p>
                    <p>直角△绕直角边旋转</p>
                  </div>
                  <div className="bg-gray-50 rounded p-2 border border-gray-200 text-center">
                    <Geo3dSvg shape={{ type: 'sphere' }} className="mx-auto" />
                    <p className="font-bold">球</p>
                    <p>半圆绕直径旋转</p>
                  </div>
                </div>
                <p className="mt-1"><strong>母线</strong>：旋转时画出曲面的线段（圆柱母线 = 侧面高，圆锥母线 = 斜边）</p>
              </div>
            </div>

            <div className="border border-red-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-red-800 border-b border-red-300 bg-red-100 text-lg">棱台与圆台</div>
              <div className="px-3 py-2 space-y-0">
                <p><strong>棱台</strong>：用平行于底面的平面截棱锥，截面与底面之间的部分</p>
                <p><strong>圆台</strong>：用平行于底面的平面截圆锥，截面与底面之间的部分</p>
                <p className="mt-1 font-bold">记忆：台 = 锥被削掉顶部后剩下的</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 2: 三视图 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="views" className="mb-3 scroll-mt-4">
        <Collapsible title="二、三视图" defaultOpen storageKey="geo3d-solid:views">
          <div className="space-y-0 text-lg text-gray-800">

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">三个视图</div>
              <div className="px-3 py-2 space-y-0">
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-blue-50 rounded-lg p-2 border border-blue-200 text-center">
                    <p className="font-bold text-blue-700">正视图</p>
                    <p>从<strong>正前方</strong>看</p>
                    <p>反映高度和长度</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-2 border border-green-200 text-center">
                    <p className="font-bold text-green-700">侧视图</p>
                    <p>从<strong>左侧</strong>看</p>
                    <p>反映高度和宽度</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-2 border border-purple-200 text-center">
                    <p className="font-bold text-purple-700">俯视图</p>
                    <p>从<strong>上方</strong>看</p>
                    <p>反映长度和宽度</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">三视图的对应关系</div>
              <div className="px-3 py-2 space-y-0">
                <p><strong>长对正</strong>：正视图与俯视图，长度相等且对齐</p>
                <p className="mt-1"><strong>高平齐</strong>：正视图与侧视图，高度相等且对齐</p>
                <p className="mt-1"><strong>宽相等</strong>：俯视图与侧视图，宽度相等</p>
              </div>
            </div>

            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">常见几何体的三视图</div>
              <div className="px-3 py-2 space-y-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-center">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="py-1">几何体</th>
                        <th className="py-1">正视图</th>
                        <th className="py-1">侧视图</th>
                        <th className="py-1">俯视图</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 font-bold">球</td>
                        <td className="py-1">圆</td>
                        <td className="py-1">圆</td>
                        <td className="py-1">圆</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 font-bold">圆柱</td>
                        <td className="py-1">矩形</td>
                        <td className="py-1">矩形</td>
                        <td className="py-1">圆</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 font-bold">圆锥</td>
                        <td className="py-1">等腰三角形</td>
                        <td className="py-1">等腰三角形</td>
                        <td className="py-1">圆（+圆心）</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 font-bold">正方体</td>
                        <td className="py-1">正方形</td>
                        <td className="py-1">正方形</td>
                        <td className="py-1">正方形</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">正三棱锥</td>
                        <td className="py-1">等腰三角形</td>
                        <td className="py-1">等腰三角形</td>
                        <td className="py-1">正三角形（+中心）</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="border border-gray-300 rounded overflow-hidden" style={{ breakInside: 'avoid' }}>
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">高考考法</div>
              <div className="px-3 py-2 space-y-0">
                <p>① 给三视图，求<strong>表面积或体积</strong>（最常见，选择/填空 5 分）</p>
                <p className="mt-1">② 给三视图，还原几何体（第一步，还原后才能算）</p>
                <p className="mt-1 font-bold">解题关键：从三视图读出长、宽、高，还原出几何体形状</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 3: 表面积公式 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="surface" className="mb-3 scroll-mt-4">
        <Collapsible title="三、表面积公式" defaultOpen storageKey="geo3d-solid:surface">
          <div className="space-y-0 text-lg text-gray-800">

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">核心思路</div>
              <div className="px-3 py-2 space-y-0">
                <p className="font-bold">表面积 = 所有面的面积之和</p>
                <p className="mt-1">多面体：把每个面的面积加起来</p>
                <p>旋转体：侧面展开 + 底面</p>
              </div>
            </div>

            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">圆柱</div>
              <div className="px-3 py-2 space-y-0">
                <p>底面半径 <MathTex tex="r" />，高 <MathTex tex="h" />，母线长 <MathTex tex="l = h" /></p>
                <p className="mt-1"><strong>侧面积</strong>（展开为矩形）：<MathTex tex="S_\text{侧} = 2\pi r h" /></p>
                <p className="mt-1"><strong>全面积</strong>：<MathTex tex="S = 2\pi r h + 2\pi r^2" /></p>
              </div>
            </div>

            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">圆锥</div>
              <div className="px-3 py-2 space-y-0">
                <p>底面半径 <MathTex tex="r" />，母线长 <MathTex tex="l" />（<MathTex tex="l = \sqrt{r^2 + h^2}" />）</p>
                <p className="mt-1"><strong>侧面积</strong>（展开为扇形）：<MathTex tex="S_\text{侧} = \pi r l" /></p>
                <p className="mt-1"><strong>全面积</strong>：<MathTex tex="S = \pi r l + \pi r^2" /></p>
              </div>
            </div>

            <div className="border border-purple-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-800 border-b border-purple-300 bg-purple-100 text-lg">圆台</div>
              <div className="px-3 py-2 space-y-0">
                <p>上底半径 <MathTex tex="r'" />，下底半径 <MathTex tex="r" />，母线长 <MathTex tex="l" /></p>
                <p className="mt-1"><strong>侧面积</strong>：<MathTex tex="S_\text{侧} = \pi(r + r')l" /></p>
                <p className="mt-1"><strong>全面积</strong>：<MathTex tex="S = \pi(r + r')l + \pi r^2 + \pi r'^2" /></p>
              </div>
            </div>

            <div className="border border-red-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-red-800 border-b border-red-300 bg-red-100 text-lg">球</div>
              <div className="px-3 py-2 space-y-0">
                <p>半径 <MathTex tex="R" /></p>
                <p className="mt-1 text-xl"><MathTex tex="S = 4\pi R^2" /></p>
              </div>
            </div>

            <div className="border border-gray-300 rounded overflow-hidden" style={{ breakInside: 'avoid' }}>
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">速记口诀</div>
              <div className="px-3 py-2 space-y-0">
                <p><strong>柱侧</strong> = 底周长 × 高 = <MathTex tex="2\pi rh" /></p>
                <p className="mt-1"><strong>锥侧</strong> = 半周长 × 母线 = <MathTex tex="\pi rl" /></p>
                <p className="mt-1"><strong>台侧</strong> = 半周长之和 × 母线 = <MathTex tex="\pi(r+r')l" /></p>
                <p className="mt-1"><strong>球面</strong> = <MathTex tex="4\pi R^2" />（四倍大圆面积）</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 4: 体积公式 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="volume" className="mb-3 scroll-mt-4">
        <Collapsible title="四、体积公式" defaultOpen storageKey="geo3d-solid:volume">
          <div className="space-y-0 text-lg text-gray-800">

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">柱体（棱柱 / 圆柱）</div>
              <div className="px-3 py-2 space-y-0">
                <p className="text-xl"><MathTex tex="V = Sh" /></p>
                <p className="mt-1"><MathTex tex="S" /> = 底面积，<MathTex tex="h" /> = 高（两底面之间的距离）</p>
                <p className="mt-1">圆柱：<MathTex tex="V = \pi r^2 h" /></p>
              </div>
            </div>

            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">锥体（棱锥 / 圆锥）</div>
              <div className="px-3 py-2 space-y-0">
                <p className="text-xl"><MathTex tex="V = \dfrac{1}{3}Sh" /></p>
                <p className="mt-1"><MathTex tex="S" /> = 底面积，<MathTex tex="h" /> = 高（顶点到底面的距离）</p>
                <p className="mt-1">圆锥：<MathTex tex="V = \dfrac{1}{3}\pi r^2 h" /></p>
                <p className="mt-2 font-bold">记忆：锥 = 柱 × ⅓</p>
              </div>
            </div>

            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">台体（棱台 / 圆台）</div>
              <div className="px-3 py-2 space-y-0">
                <p className="text-xl"><MathTex tex="V = \dfrac{1}{3}h(S_1 + \sqrt{S_1 S_2} + S_2)" /></p>
                <p className="mt-1"><MathTex tex="S_1" /> = 上底面积，<MathTex tex="S_2" /> = 下底面积，<MathTex tex="h" /> = 高</p>
                <p className="mt-2"><strong>验证</strong>：当 <MathTex tex="S_1 = 0" /> 时退化为锥体公式 <MathTex tex="\dfrac{1}{3}S_2 h" /></p>
                <p>当 <MathTex tex="S_1 = S_2" /> 时退化为柱体公式 <MathTex tex="S \cdot h" /></p>
              </div>
            </div>

            <div className="border border-red-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-red-800 border-b border-red-300 bg-red-100 text-lg">球</div>
              <div className="px-3 py-2 space-y-0">
                <p className="text-xl"><MathTex tex="V = \dfrac{4}{3}\pi R^3" /></p>
              </div>
            </div>

            <div className="border border-gray-300 rounded overflow-hidden" style={{ breakInside: 'avoid' }}>
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">公式速查表</div>
              <div className="px-3 py-2 space-y-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-center">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="py-1">几何体</th>
                        <th className="py-1">表面积</th>
                        <th className="py-1">体积</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 font-bold">圆柱</td>
                        <td className="py-1"><MathTex tex="2\pi rh + 2\pi r^2" /></td>
                        <td className="py-1"><MathTex tex="\pi r^2 h" /></td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 font-bold">圆锥</td>
                        <td className="py-1"><MathTex tex="\pi rl + \pi r^2" /></td>
                        <td className="py-1"><MathTex tex="\frac{1}{3}\pi r^2 h" /></td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 font-bold">圆台</td>
                        <td className="py-1"><MathTex tex="\pi(r+r')l + \pi r^2 + \pi r'^2" /></td>
                        <td className="py-1"><MathTex tex="\frac{1}{3}\pi h(r^2+rr'+r'^2)" /></td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">球</td>
                        <td className="py-1"><MathTex tex="4\pi R^2" /></td>
                        <td className="py-1"><MathTex tex="\frac{4}{3}\pi R^3" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 5: 球的相关问题 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="sphere" className="mb-3 scroll-mt-4">
        <Collapsible title="五、球的相关问题" defaultOpen storageKey="geo3d-solid:sphere">
          <div className="space-y-0 text-lg text-gray-800">

            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-800 border-b border-blue-300 bg-blue-100 text-lg">球的截面</div>
              <div className="px-3 py-2 space-y-0">
                <p>用平面截球，截面一定是<strong>圆</strong></p>
                <p className="mt-1">设球心到截面的距离为 <MathTex tex="d" />，球半径 <MathTex tex="R" />，截面圆半径 <MathTex tex="r" /></p>
                <p className="mt-1 text-xl"><MathTex tex="r = \sqrt{R^2 - d^2}" /></p>
                <p className="mt-1">当 <MathTex tex="d = 0" /> 时，截面过球心，<MathTex tex="r = R" />，称为<strong>大圆</strong>（面积最大的截面）</p>
              </div>
            </div>

            <div className="border border-green-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-800 border-b border-green-300 bg-green-100 text-lg">外接球</div>
              <div className="px-3 py-2 space-y-0">
                <p><strong>定义</strong>：几何体的所有顶点都在球面上，这个球就是外接球</p>
                <p className="mt-1"><strong>长方体外接球</strong>：对角线 = 外接球直径</p>
                <p className="ml-4">设长方体三边为 <MathTex tex="a, b, c" />，则 <MathTex tex="2R = \sqrt{a^2 + b^2 + c^2}" /></p>
                <p className="mt-1"><strong>正方体外接球</strong>：边长为 <MathTex tex="a" />，则 <MathTex tex="R = \dfrac{\sqrt{3}}{2}a" /></p>
                <p className="mt-1"><strong>正四面体外接球</strong>：边长为 <MathTex tex="a" />，则 <MathTex tex="R = \dfrac{\sqrt{6}}{4}a" /></p>
              </div>
            </div>

            <div className="border border-amber-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-amber-800 border-b border-amber-300 bg-amber-100 text-lg">内切球</div>
              <div className="px-3 py-2 space-y-0">
                <p><strong>定义</strong>：球与几何体的每个面都相切，这个球就是内切球</p>
                <p className="mt-1"><strong>正方体内切球</strong>：边长为 <MathTex tex="a" />，则 <MathTex tex="r = \dfrac{a}{2}" /></p>
                <p className="mt-1"><strong>正四面体内切球</strong>：边长为 <MathTex tex="a" />，则 <MathTex tex="r = \dfrac{\sqrt{6}}{12}a" /></p>
                <p className="mt-2"><strong>通用方法</strong>：<MathTex tex="V = \dfrac{1}{3} r \cdot S_\text{全}" /></p>
                <p className="ml-4">（几何体体积 = ⅓ × 内切球半径 × 全面积，由此可求 <MathTex tex="r" />）</p>
              </div>
            </div>

            <div className="border border-gray-300 rounded overflow-hidden" style={{ breakInside: 'avoid' }}>
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-300 bg-gray-100 text-lg">高考常考题型</div>
              <div className="px-3 py-2 space-y-0">
                <p>① 给三视图 → 还原几何体 → 求表面积/体积</p>
                <p className="mt-1">② 求几何体的外接球表面积/体积</p>
                <p className="mt-1">③ 组合体的表面积/体积（柱上放锥、挖去部分等）</p>
                <p className="mt-1">④ 球的截面问题（球内接/外切几何体）</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      </LessonLayout>
    </div>
  );
}
