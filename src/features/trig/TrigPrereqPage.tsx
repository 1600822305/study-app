import { Math as MathTex, Collapsible, SpeakButton, PageHeader, LessonLayout, ExportButton, PracticeCard, PageBreak } from '@/components/shared';
import { trigPrereqNarrations } from './data/prereq-narrations';
import { trigPrereqProgressItems } from './data/prereq-progress';
import { trigPrereqPractice } from './data/prereq-questions';
import { TrigPrereqAnswers } from './prereq-answers';
import { useProgress } from '@/hooks';
import { usePrintMode } from '@/hooks/usePrintMode';
import { scrollToId } from '@/lib/scroll';
import { UnitCircleDiagram, QuadrantSignDiagram } from './trig-diagrams';

export function TrigPrereqPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('trig-prereq', trigPrereqProgressItems);
  const { isPrinting, printOptions } = usePrintMode();

  return (
    <div>
      <PageHeader
        stage="第五阶段 · 三角世界"
        variant="prereq"
        title="5.0 三角前置知识"
        narration={trigPrereqNarrations.intro}
        subtitle="弧度制、单位圆、特殊角——三角函数的基石"
        tags={[
          { label: '难度 ★☆☆☆☆', color: 'green' },
          { label: '前置知识', color: 'purple' },
          { label: '约1小时', color: 'blue' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="5.0 三角前置知识" />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-3 mb-0">
        <p className="font-bold text-gray-800 mb-2">📋 知识地图</p>
        <div className="text-gray-600 space-y-1">
          <button onClick={() => scrollToId('trig-radian')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">一、弧度制</button>
          <button onClick={() => scrollToId('trig-unit-circle')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">二、单位圆与三角函数定义</button>
          <button onClick={() => scrollToId('trig-special')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">三、特殊角的三角函数值</button>
          <button onClick={() => scrollToId('trig-signs')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">四、各象限的符号规律</button>
          <button onClick={() => scrollToId('trig-props')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">五、函数性质术语回顾</button>
        </div>
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 1: 弧度制 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="trig-radian" className="mb-3 scroll-mt-4">
        <Collapsible title="一、弧度制" defaultOpen storageKey="trig-prereq:radian" headerExtra={<SpeakButton text={trigPrereqNarrations.radian} />}>
          <p className="text-blue-600 mb-2">🎯 学完你能：在度数和弧度之间自由换算。</p>
          <div className="space-y-1 text-gray-700">

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
              <p className="font-bold text-lg text-blue-800 mb-2">核心公式（只有一个）</p>
              <div className="bg-white rounded-lg p-3 border border-blue-100 text-center">
                <p className="text-xl"><MathTex tex="\pi \text{ 弧度} = 180°" /></p>
              </div>
              <p className="text-blue-700 mt-2">就像 1 米 = 100 厘米，弧度只是角度的另一种"单位"</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-bold text-gray-800 mb-2">换算方法</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <p className="font-bold text-center mb-1">度 → 弧度</p>
                  <p className="text-center"><MathTex tex="\text{弧度} = \text{度数} \times \dfrac{\pi}{180°}" /></p>
                  <p className="text-gray-500 mt-2 text-center">例：<MathTex tex="60° = 60 \times \dfrac{\pi}{180} = \dfrac{\pi}{3}" /></p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <p className="font-bold text-center mb-1">弧度 → 度</p>
                  <p className="text-center"><MathTex tex="\text{度数} = \text{弧度} \times \dfrac{180°}{\pi}" /></p>
                  <p className="text-gray-500 mt-2 text-center">例：<MathTex tex="\dfrac{\pi}{4} = \dfrac{\pi}{4} \times \dfrac{180°}{\pi} = 45°" /></p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="font-bold text-green-800 mb-2">必背对照表</p>
              <div className="bg-white rounded-lg p-2 border border-green-100">
                <table className="w-full text-center">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-1.5 font-bold text-gray-700">度数</th>
                      <th className="py-1.5">0°</th>
                      <th className="py-1.5">30°</th>
                      <th className="py-1.5">45°</th>
                      <th className="py-1.5">60°</th>
                      <th className="py-1.5">90°</th>
                      <th className="py-1.5">120°</th>
                      <th className="py-1.5">150°</th>
                      <th className="py-1.5">180°</th>
                      <th className="py-1.5">360°</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-1.5 font-bold text-gray-700">弧度</td>
                      <td className="py-1.5">0</td>
                      <td className="py-1.5"><MathTex tex="\frac{\pi}{6}" /></td>
                      <td className="py-1.5"><MathTex tex="\frac{\pi}{4}" /></td>
                      <td className="py-1.5"><MathTex tex="\frac{\pi}{3}" /></td>
                      <td className="py-1.5"><MathTex tex="\frac{\pi}{2}" /></td>
                      <td className="py-1.5"><MathTex tex="\frac{2\pi}{3}" /></td>
                      <td className="py-1.5"><MathTex tex="\frac{5\pi}{6}" /></td>
                      <td className="py-1.5"><MathTex tex="\pi" /></td>
                      <td className="py-1.5"><MathTex tex="2\pi" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <p className="font-bold text-amber-800">💡 记忆技巧</p>
              <p>先记住 <MathTex tex="\pi = 180°" />，然后所有的都靠"除法"推出来：</p>
              <p className="mt-1"><MathTex tex="\dfrac{\pi}{2} = 90°,\quad \dfrac{\pi}{3} = 60°,\quad \dfrac{\pi}{4} = 45°,\quad \dfrac{\pi}{6} = 30°" /></p>
              <p className="text-amber-700 mt-1">分母越大，角度越小——就是把 180° 分成几份</p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="font-bold text-red-800 mb-1">✏️ 马上练一练（心算即可）</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                <p>1. <MathTex tex="90° = \underline{\quad}" /> 弧度 <span className="text-gray-400 text-sm">（答：<MathTex tex="\frac{\pi}{2}" />）</span></p>
                <p>2. <MathTex tex="\frac{\pi}{3} = \underline{\quad}" />° <span className="text-gray-400 text-sm">（答：60°）</span></p>
                <p>3. <MathTex tex="120° = \underline{\quad}" /> 弧度 <span className="text-gray-400 text-sm">（答：<MathTex tex="\frac{2\pi}{3}" />）</span></p>
                <p>4. <MathTex tex="\frac{5\pi}{6} = \underline{\quad}" />° <span className="text-gray-400 text-sm">（答：150°）</span></p>
                <p>5. <MathTex tex="360° = \underline{\quad}" /> 弧度 <span className="text-gray-400 text-sm">（答：<MathTex tex="2\pi" />）</span></p>
                <p>6. <MathTex tex="\frac{3\pi}{4} = \underline{\quad}" />° <span className="text-gray-400 text-sm">（答：135°）</span></p>
              </div>
              <p className="text-red-700 mt-1 text-sm">💡 都能秒答说明弧度制已掌握！如果卡壳，翻回上面的对照表多看两遍。</p>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 2: 单位圆与三角函数定义 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="trig-unit-circle" className="mb-3 scroll-mt-4">
        <Collapsible title="二、单位圆与三角函数定义" defaultOpen storageKey="trig-prereq:unit-circle" headerExtra={<SpeakButton text={trigPrereqNarrations.unitCircle} />}>
          <p className="text-blue-600 mb-1">🎯 学完你能：用单位圆理解 sin、cos、tan 的几何含义。</p>
          <div className="space-y-0.5 text-gray-700">

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-2">
              <p className="font-bold text-lg text-blue-800 mb-1">单位圆是什么？</p>
              <div className="flex gap-2 items-center">
                <div className="flex-1">
                  <p>以原点 O 为圆心、半径 <MathTex tex="r = 1" /> 的圆</p>
                  <p className="mt-0.5">从 x 轴正方向出发，逆时针转角 θ，到达圆上一点 P</p>
                </div>
                <div className="flex-1">
                  <UnitCircleDiagram />
                </div>
              </div>
              <div className="bg-white rounded-lg p-2 border border-blue-100 mt-1 text-center">
                <p className="text-lg"><MathTex tex="P \text{ 的坐标} = (\cos\theta,\; \sin\theta)" /></p>
              </div>
              <p className="text-blue-700 mt-1">怎么读这个图？D 是 P 往下"踩"到 x 轴的点，<strong>OD</strong>（蓝色虚线）= cos θ，<strong>DP</strong>（绿色虚线）= sin θ</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-2">
              <p className="font-bold text-gray-800 mb-1">三个函数的定义（对照上面的图看）</p>
              <div className="flex gap-1.5 items-stretch">
                <div className="flex-1 flex flex-col gap-1">
                  <div className="bg-white rounded-lg p-2 border-l-4 border-blue-500 flex-1">
                    <p className="font-bold text-blue-700 mb-0.5"><MathTex tex="\cos\theta" />（余弦）</p>
                    <p>看图上的<strong className="text-blue-700">蓝色虚线 OD</strong>——从原点 O 到 D 的距离</p>
                    <p className="mt-0.5">P 偏右 → cos 是正数；P 偏左 → cos 是负数</p>
                    <p className="text-gray-500 mt-0.5">范围：最左 -1 到最右 +1</p>
                  </div>
                  <div className="bg-white rounded-lg p-2 border-l-4 border-green-500 flex-1">
                    <p className="font-bold text-green-700 mb-0.5"><MathTex tex="\sin\theta" />（正弦）</p>
                    <p>看图上的<strong className="text-green-700">绿色虚线 DP</strong>——从 D 到 P 的距离</p>
                    <p className="mt-0.5">P 在上面 → sin 是正数；P 在下面 → sin 是负数</p>
                    <p className="text-gray-500 mt-0.5">范围：最低 -1 到最高 +1</p>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-white rounded-lg p-2 border-l-4 border-purple-500 h-full">
                    <p className="font-bold text-purple-700 mb-0.5"><MathTex tex="\tan\theta" />（正切）</p>
                    <p>就是 sin 除以 cos：<MathTex tex="\tan\theta = \dfrac{\sin\theta}{\cos\theta}" /></p>
                    <p className="mt-1">可以理解为：从原点到 P 那条线有多"陡"（斜率）</p>
                    <p className="text-gray-500 mt-1">当 <MathTex tex="\cos\theta = 0" /> 时（P 在最上或最下），tan 无定义</p>
                    <div className="bg-purple-50 rounded p-1.5 mt-1 text-sm">
                      <p className="font-bold text-purple-700 mb-0.5">例子：</p>
                      <p><MathTex tex="\tan 45° = \dfrac{\sin 45°}{\cos 45°} = \dfrac{\frac{\sqrt{2}}{2}}{\frac{\sqrt{2}}{2}} = 1" /></p>
                      <p className="mt-0.5">（45° 的线刚好是对角线，斜率=1）</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-2">
              <p className="font-bold text-purple-800 mb-0.5">一个必须记住的公式</p>
              <div className="bg-white rounded-lg p-1.5 border border-purple-100 text-center">
                <p className="text-lg"><MathTex tex="\sin^2\theta + \cos^2\theta = 1" /></p>
              </div>
              <p className="text-purple-700 mt-0.5">因为圆上的点到原点距离等于 1：<MathTex tex="x^2 + y^2 = 1" /></p>
              <p className="text-purple-700">这就是<strong>勾股定理</strong>在单位圆上的体现！</p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-2">
              <p className="font-bold text-amber-800">💡 直觉理解</p>
              <div className="grid grid-cols-4 gap-1.5 mt-0.5">
                <div className="bg-white rounded-lg p-1.5 border border-amber-100 text-center">
                  <p className="font-bold">θ = 0°</p>
                  <p className="text-gray-500 text-sm">最右边 (1,0)</p>
                  <p className="text-sm"><MathTex tex="\cos=1,\;\sin=0" /></p>
                </div>
                <div className="bg-white rounded-lg p-1.5 border border-amber-100 text-center">
                  <p className="font-bold">θ = 90°</p>
                  <p className="text-gray-500 text-sm">最上面 (0,1)</p>
                  <p className="text-sm"><MathTex tex="\cos=0,\;\sin=1" /></p>
                </div>
                <div className="bg-white rounded-lg p-1.5 border border-amber-100 text-center">
                  <p className="font-bold">θ = 180°</p>
                  <p className="text-gray-500 text-sm">最左边 (-1,0)</p>
                  <p className="text-sm"><MathTex tex="\cos=-1,\;\sin=0" /></p>
                </div>
                <div className="bg-white rounded-lg p-1.5 border border-amber-100 text-center">
                  <p className="font-bold">θ = 270°</p>
                  <p className="text-gray-500 text-sm">最下面 (0,-1)</p>
                  <p className="text-sm"><MathTex tex="\cos=0,\;\sin=-1" /></p>
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 3: 特殊角的三角函数值 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="trig-special" className="mb-3 scroll-mt-4">
        <Collapsible title="三、特殊角的三角函数值" defaultOpen storageKey="trig-prereq:special" headerExtra={<SpeakButton text={trigPrereqNarrations.specialValues} />}>
          <p className="text-blue-600 mb-2">🎯 学完你能：秒查任意特殊角的 sin、cos、tan 值。</p>
          <div className="space-y-1 text-gray-700">

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
              <p className="font-bold text-lg text-blue-800 mb-2">完整特殊角值表（必背）</p>
              <div className="bg-white rounded-lg p-2 border border-blue-100 overflow-x-auto">
                <table className="w-full text-center text-base">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="py-2 font-bold text-gray-700 text-left pl-2">角度</th>
                      <th className="py-2">0°</th>
                      <th className="py-2">30°</th>
                      <th className="py-2">45°</th>
                      <th className="py-2">60°</th>
                      <th className="py-2">90°</th>
                      <th className="py-2">120°</th>
                      <th className="py-2">135°</th>
                      <th className="py-2">150°</th>
                      <th className="py-2">180°</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 font-bold text-green-700 text-left pl-2">sin</td>
                      <td className="py-2">0</td>
                      <td className="py-2"><MathTex tex="\frac{1}{2}" /></td>
                      <td className="py-2"><MathTex tex="\frac{\sqrt{2}}{2}" /></td>
                      <td className="py-2"><MathTex tex="\frac{\sqrt{3}}{2}" /></td>
                      <td className="py-2">1</td>
                      <td className="py-2"><MathTex tex="\frac{\sqrt{3}}{2}" /></td>
                      <td className="py-2"><MathTex tex="\frac{\sqrt{2}}{2}" /></td>
                      <td className="py-2"><MathTex tex="\frac{1}{2}" /></td>
                      <td className="py-2">0</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 font-bold text-blue-700 text-left pl-2">cos</td>
                      <td className="py-2">1</td>
                      <td className="py-2"><MathTex tex="\frac{\sqrt{3}}{2}" /></td>
                      <td className="py-2"><MathTex tex="\frac{\sqrt{2}}{2}" /></td>
                      <td className="py-2"><MathTex tex="\frac{1}{2}" /></td>
                      <td className="py-2">0</td>
                      <td className="py-2"><MathTex tex="-\frac{1}{2}" /></td>
                      <td className="py-2"><MathTex tex="-\frac{\sqrt{2}}{2}" /></td>
                      <td className="py-2"><MathTex tex="-\frac{\sqrt{3}}{2}" /></td>
                      <td className="py-2">-1</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-bold text-purple-700 text-left pl-2">tan</td>
                      <td className="py-2">0</td>
                      <td className="py-2"><MathTex tex="\frac{\sqrt{3}}{3}" /></td>
                      <td className="py-2">1</td>
                      <td className="py-2"><MathTex tex="\sqrt{3}" /></td>
                      <td className="py-2 text-red-500">—</td>
                      <td className="py-2"><MathTex tex="-\sqrt{3}" /></td>
                      <td className="py-2">-1</td>
                      <td className="py-2"><MathTex tex="-\frac{\sqrt{3}}{3}" /></td>
                      <td className="py-2">0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="font-bold text-green-800 mb-2">🔥 秒记口诀：sin、cos、tan 的值</p>
              <p>0°、30°、45°、60°、90° 的值，根号下 0→4 递增，全部除以 2：</p>
              <div className="bg-white rounded-lg p-3 border border-green-100 mt-1 text-center space-y-1">
                <p className="text-lg"><MathTex tex="\sin: \quad \frac{\sqrt{0}}{2},\; \frac{\sqrt{1}}{2},\; \frac{\sqrt{2}}{2},\; \frac{\sqrt{3}}{2},\; \frac{\sqrt{4}}{2}" /></p>
                <p className="text-lg"><MathTex tex="\cos: \quad \frac{\sqrt{4}}{2},\; \frac{\sqrt{3}}{2},\; \frac{\sqrt{2}}{2},\; \frac{\sqrt{1}}{2},\; \frac{\sqrt{0}}{2}" /></p>
                <p className="text-green-700 mt-1">cos 就是 sin <strong>反过来</strong>——根号下 4→0 递减</p>
              </div>
              <p className="mt-2">tan 不用单独记，直接用 sin ÷ cos 算出来：</p>
              <div className="bg-white rounded-lg p-3 border border-green-100 mt-1 text-center">
                <p className="text-lg"><MathTex tex="\tan: \quad 0,\; \frac{\sqrt{3}}{3},\; 1,\; \sqrt{3},\; \text{无定义}" /></p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-bold text-gray-800 mb-2">120°、135°、150° 怎么算？</p>
              <p>它们和 60°、45°、30° 关于 90° <strong>对称</strong>：</p>
              <div className="space-y-1 mt-2">
                <div className="bg-white rounded-lg p-2 border border-gray-200">
                  <p><MathTex tex="120° = 180° - 60°" /> → sin 同，cos 变负</p>
                  <p className="text-gray-500 mt-0.5"><MathTex tex="\sin 120° = \sin 60° = \frac{\sqrt{3}}{2},\quad \cos 120° = -\cos 60° = -\frac{1}{2}" /></p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-gray-200">
                  <p><MathTex tex="135° = 180° - 45°" /> → sin 同，cos 变负</p>
                  <p className="text-gray-500 mt-0.5"><MathTex tex="\sin 135° = \frac{\sqrt{2}}{2},\quad \cos 135° = -\frac{\sqrt{2}}{2}" /></p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-gray-200">
                  <p><MathTex tex="150° = 180° - 30°" /> → sin 同，cos 变负</p>
                  <p className="text-gray-500 mt-0.5"><MathTex tex="\sin 150° = \frac{1}{2},\quad \cos 150° = -\frac{\sqrt{3}}{2}" /></p>
                </div>
              </div>
              <p className="text-gray-600 mt-2">规律：<MathTex tex="\sin(180°-\theta) = \sin\theta,\quad \cos(180°-\theta) = -\cos\theta" /></p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="font-bold text-red-800 mb-1">⚠️ 常见错误 & 自查</p>
              <p>❌ sin 30° 和 cos 30° 搞反 → <strong>sin 从小到大</strong>（0→1），<strong>cos 从大到小</strong>（1→0）</p>
              <p>❌ tan 90° 无定义（cos 90° = 0，分母不能为 0）；120° 的 cos 忘加负号（第二象限 cos 为负）</p>
              <p>✅ 自查：算完验算 <MathTex tex="\sin^2\theta + \cos^2\theta = 1" /> 是否成立，例如 <MathTex tex="\frac{1}{4} + \frac{3}{4} = 1" /> ✓</p>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 4: 各象限的符号规律 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="trig-signs" className="mb-3 scroll-mt-4">
        <Collapsible title="四、各象限的符号规律" defaultOpen storageKey="trig-prereq:signs" headerExtra={<SpeakButton text={trigPrereqNarrations.tanDef} />}>
          <p className="text-blue-600 mb-1">🎯 学完你能：快速判断任意角的 sin/cos/tan 是正还是负。</p>
          <p className="text-gray-600 mb-2 text-sm">为什么要学？做题时经常需要判断答案的正负号——比如 cos 120° 是正还是负？知道象限规律就能秒答，不用算具体值。</p>
          <div className="space-y-1 text-gray-700">

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
              <p className="font-bold text-lg text-blue-800 mb-2">口诀：一全正，二正弦，三正切，四余弦</p>

              <QuadrantSignDiagram />

              <div className="grid grid-cols-2 gap-2 mt-1">
                <div className="bg-white rounded-lg p-3 border border-green-200 text-center">
                  <p className="font-bold text-green-700 text-lg">第一象限（0°~90°）</p>
                  <p className="mt-1">sin + , cos + , tan +</p>
                  <p className="text-gray-500 text-sm mt-0.5">全部为正</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-blue-200 text-center">
                  <p className="font-bold text-blue-700 text-lg">第二象限（90°~180°）</p>
                  <p className="mt-1">sin + , cos − , tan −</p>
                  <p className="text-gray-500 text-sm mt-0.5">只有 sin 为正</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-purple-200 text-center">
                  <p className="font-bold text-purple-700 text-lg">第三象限（180°~270°）</p>
                  <p className="mt-1">sin − , cos − , tan +</p>
                  <p className="text-gray-500 text-sm mt-0.5">只有 tan 为正</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-amber-200 text-center">
                  <p className="font-bold text-amber-700 text-lg">第四象限（270°~360°）</p>
                  <p className="mt-1">sin − , cos + , tan −</p>
                  <p className="text-gray-500 text-sm mt-0.5">只有 cos 为正</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <p className="font-bold text-amber-800">💡 为什么这样？</p>
              <p>回到单位圆：cos = x 坐标，sin = y 坐标</p>
              <div className="mt-1 space-y-0.5">
                <p>第一象限：x &gt; 0, y &gt; 0 → cos +, sin +</p>
                <p>第二象限：x &lt; 0, y &gt; 0 → cos −, sin +</p>
                <p>第三象限：x &lt; 0, y &lt; 0 → cos −, sin −</p>
                <p>第四象限：x &gt; 0, y &lt; 0 → cos +, sin −</p>
              </div>
              <p className="mt-1">tan = sin/cos，同号为正、异号为负</p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-2">
              <p className="font-bold text-red-800 mb-1">✏️ 快速判断练习（心算即可）</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                <p>1. sin 200° 是正还是负？ <span className="text-gray-400 text-sm">（200° 在第三象限 → <strong>负</strong>）</span></p>
                <p>2. cos 300° 是正还是负？ <span className="text-gray-400 text-sm">（300° 在第四象限 → <strong>正</strong>）</span></p>
                <p>3. tan 150° 是正还是负？ <span className="text-gray-400 text-sm">（150° 在第二象限 → <strong>负</strong>）</span></p>
                <p>4. sin 350° 是正还是负？ <span className="text-gray-400 text-sm">（350° 在第四象限 → <strong>负</strong>）</span></p>
                <p>5. cos 100° 是正还是负？ <span className="text-gray-400 text-sm">（100° 在第二象限 → <strong>负</strong>）</span></p>
                <p>6. tan 250° 是正还是负？ <span className="text-gray-400 text-sm">（250° 在第三象限 → <strong>正</strong>）</span></p>
              </div>
              <p className="text-red-700 mt-1 text-sm">💡 做题步骤：先看角度在第几象限，再用"一全正二正弦三正切四余弦"判断正负。</p>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 5: 函数性质术语回顾 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="trig-props" className="mb-3 scroll-mt-4">
        <Collapsible title="五、函数性质术语回顾" defaultOpen storageKey="trig-prereq:props">
          <p className="text-blue-600 mb-1">🎯 下一节要用这些术语来描述三角函数的图像，提前搞懂它们！</p>
          <div className="space-y-1 text-gray-700">

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-2">
              <p className="font-bold text-lg text-blue-800 mb-1">七个术语一次讲清</p>
              <p className="mb-1">这些概念你在"函数"那章可能学过。不管学没学过，这里用<strong>最通俗的语言</strong>再讲一遍。</p>

              {/* 定义域 */}
              <div className="border-l-4 border-blue-500 pl-3 mb-1.5">
                <p className="font-bold text-blue-700">① 定义域 — "x 能取哪些值？"</p>
                <p>就是函数"接受"的 x 范围。</p>
                <p className="mt-0.5">例：<MathTex tex="y = \sin x" /> 的定义域是 <MathTex tex="(-\infty, +\infty)" />，x 取什么都行。</p>
                <p>但 <MathTex tex="y = \tan x" /> 就不能取 <MathTex tex="x = 90°" />（分母为 0）。</p>
              </div>

              {/* 值域 */}
              <div className="border-l-4 border-green-500 pl-3 mb-1.5">
                <p className="font-bold text-green-700">② 值域 — "y 能到多大多小？"</p>
                <p>函数输出的 y 值范围。</p>
                <p className="mt-0.5">例：sin 和 cos 的值域都是 <MathTex tex="[-1, 1]" />（最低 -1，最高 1）。</p>
              </div>

              {/* 周期 */}
              <div className="border-l-4 border-purple-500 pl-3 mb-1.5">
                <p className="font-bold text-purple-700">③ 周期 — "多久重复一次？"</p>
                <p>函数图像每隔多远就完全重复。像心电图一样，一个波形反复出现。</p>
                <p className="mt-0.5">例：sin x 每隔 <MathTex tex="2\pi" />（约 6.28）重复一次，所以周期 <MathTex tex="T = 2\pi" />。</p>
              </div>

              {/* 奇偶性 */}
              <div className="border-l-4 border-red-500 pl-3 mb-1.5">
                <p className="font-bold text-red-700">④ 奇偶性 — "图像关于谁对称？"</p>
                <div className="grid grid-cols-2 gap-1.5 mt-0.5">
                  <div className="bg-white rounded-lg p-1.5 border border-red-100">
                    <p className="font-bold">偶函数</p>
                    <p><MathTex tex="f(-x) = f(x)" /></p>
                    <p className="text-gray-600">图像关于 <strong>y 轴</strong>对称</p>
                    <p className="text-gray-500">例：cos x（左右一样）</p>
                  </div>
                  <div className="bg-white rounded-lg p-1.5 border border-red-100">
                    <p className="font-bold">奇函数</p>
                    <p><MathTex tex="f(-x) = -f(x)" /></p>
                    <p className="text-gray-600">图像关于 <strong>原点</strong>对称</p>
                    <p className="text-gray-500">例：sin x（旋转 180° 不变）</p>
                  </div>
                </div>
              </div>

              {/* 单调性 */}
              <div className="border-l-4 border-amber-500 pl-3 mb-1.5">
                <p className="font-bold text-amber-700">⑤ 单调区间 — "在哪段上升/下降？"</p>
                <p><strong>递增</strong>：x 增大 → y 也增大（图像在<strong>上坡</strong>）。<strong>递减</strong>：x 增大 → y 反而减小（图像在<strong>下坡</strong>）。</p>
                <p className="mt-0.5 text-gray-600">例：sin x 在 <MathTex tex="[-90°, 90°]" /> 上递增（从 -1 升到 1）。</p>
              </div>

              {/* 对称轴 */}
              <div className="border-l-4 border-cyan-500 pl-3 mb-1.5">
                <p className="font-bold text-cyan-700">⑥ 对称轴 — "沿哪条竖线折叠后两边重合？"</p>
                <p>就像蝴蝶翅膀的中线。图像沿这条线<strong>左右对称</strong>。</p>
                <p className="mt-0.5">出现在哪？<strong>波峰或波谷</strong>处——最高点/最低点那条竖线就是对称轴。</p>
              </div>

              {/* 对称中心 */}
              <div className="border-l-4 border-orange-500 pl-3 mb-1.5">
                <p className="font-bold text-orange-700">⑦ 对称中心 — "绕哪个点转 180° 后图像不变？"</p>
                <p>不是一条线，而是<strong>一个点</strong>。图像绕这个点旋转半圈后完全重合。</p>
                <p className="mt-0.5">出现在哪？<strong>过零点</strong>处（图像穿过 x 轴的地方）。</p>
              </div>

              {/* 渐近线 */}
              <div className="border-l-4 border-gray-500 pl-3 mb-1.5">
                <p className="font-bold text-gray-700">⑧ 渐近线 — "图像永远靠近但永远碰不到的线"</p>
                <p>有些函数的图像会无限接近某条直线，但永远不会碰到它。这条线就是渐近线。</p>
                <p className="mt-0.5">例：tan x 在 <MathTex tex="x = 90°" /> 处有一条竖直渐近线——图像在这里飞向无穷大。</p>
              </div>

              {/* 最值 */}
              <div className="border-l-4 border-pink-500 pl-3">
                <p className="font-bold text-pink-700">⑨ 最值 — "在某段范围内的最大值和最小值"</p>
                <p><strong>最大值</strong>：区间内最高的 y。<strong>最小值</strong>：区间内最低的 y。注意：最值跟<strong>区间有关</strong>！</p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-2">
              <p className="font-bold text-amber-800 mb-0.5">💡 对称轴 vs 对称中心，一句话区分</p>
              <p><strong>对称轴</strong> = 一条<strong>竖线</strong>（波峰/波谷处）→ 左右折叠重合</p>
              <p><strong>对称中心</strong> = 一个<strong>点</strong>（过零点处）→ 旋转 180° 重合</p>
              <p className="text-gray-600 mt-0.5">两者<strong>交替出现</strong>：对称轴和对称中心之间刚好隔半个周期。</p>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* 练习 + 自测 */}
      {/* ════════════════════════════════════════════════════════ */}
      <PracticeCard title="✅ 综合练习（10 题）" questions={trigPrereqPractice} printOptionCols={4} />

      {/* ═══ 打印模式：答案与解析 ═══ */}
      {isPrinting && printOptions.showAnswers && <TrigPrereqAnswers />}

      </LessonLayout>
    </div>
  );
}
