import { Math, Collapsible, SpeakButton, PageHeader, LessonLayout, ExportButton } from '@/components/shared';
import { vectorTrigPrereqNarrations } from './data/trig-prereq-narrations';
import { vectorTrigPrereqProgressItems } from './data/trig-prereq-progress';
import { useProgress } from '@/hooks';
import { scrollToId } from '@/lib/scroll';

export function VectorTrigPrereqPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('vector-trig-prereq', vectorTrigPrereqProgressItems);

  return (
    <div>
      <PageHeader
        stage="前置准备"
        variant="prereq"
        title="4.2 三角函数速成（向量专用）"
        narration={vectorTrigPrereqNarrations.intro}
        subtitle="只学向量要用到的 cos，10分钟搞定"
        tags={[
          { label: '约10分钟', color: 'amber' },
          { label: '为数量积做准备', color: 'blue' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="4.2 三角函数速成" />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-3 mb-0">
        <p className="font-bold text-gray-800 mb-2">📋 知识地图</p>
        <div className="text-gray-600 space-y-1">
          <button onClick={() => scrollToId('trig-what')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">一、cos 是什么</button>
          <button onClick={() => scrollToId('trig-values')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">二、特殊角的 cos 值</button>
        </div>
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 1: cos 是什么 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="trig-what" className="mb-3 scroll-mt-4">
        <Collapsible title="一、cos 是什么" defaultOpen storageKey="vector-trig:what" headerExtra={<SpeakButton text={vectorTrigPrereqNarrations.whatIsCos} />}>
          <p className="text-blue-600 mb-2">🎯 学完你能：理解 cos 接收角度、输出数字的含义。</p>
          <div className="space-y-0.5 text-gray-700">

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-2">
              <p className="font-bold text-lg text-blue-800 mb-1">一句话解释</p>
              <p><Math tex="\cos\theta" /> 是一个<strong>函数</strong>：你给它一个<strong>角度 θ</strong>，它给你一个<strong>数字</strong>（在 -1 到 1 之间）</p>
              <div className="bg-white rounded-lg p-2 border border-blue-100 mt-1">
                <p className="text-center text-lg"><Math tex="\text{角度} \xrightarrow{\cos} \text{数字（-1 到 1）}" /></p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-2">
              <p className="font-bold text-gray-800 mb-1">这个数字有什么含义？</p>
              <p>cos 的值告诉你<strong>两个方向的"一致程度"</strong>：</p>
              <div className="grid grid-cols-3 gap-1 mt-1">
                <div className="bg-white rounded-lg p-2 border border-green-200 text-center">
                  <p className="text-2xl">→→</p>
                  <p className="font-bold mt-1">夹角 0°</p>
                  <p className="text-gray-500 text-sm">完全同方向</p>
                  <p className="text-green-700 mt-1"><Math tex="\cos 0° = 1" /></p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-blue-200 text-center">
                  <p className="text-2xl">→↑</p>
                  <p className="font-bold mt-1">夹角 90°</p>
                  <p className="text-gray-500 text-sm">完全垂直</p>
                  <p className="text-blue-700 mt-1"><Math tex="\cos 90° = 0" /></p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-red-200 text-center">
                  <p className="text-2xl">→←</p>
                  <p className="font-bold mt-1">夹角 180°</p>
                  <p className="text-gray-500 text-sm">完全反方向</p>
                  <p className="text-red-700 mt-1"><Math tex="\cos 180° = -1" /></p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-2">
              <p className="font-bold text-amber-800">💡 记忆技巧</p>
              <p>cos 值越大 → 越"同方向"；cos 值越小 → 越"反方向"；cos = 0 → 垂直</p>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 2: 特殊角的 cos 值 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="trig-values" className="mb-3 scroll-mt-4">
        <Collapsible title="二、特殊角的 cos 值" defaultOpen storageKey="vector-trig:values" headerExtra={<SpeakButton text={vectorTrigPrereqNarrations.specialAngles} />}>
          <p className="text-blue-600 mb-2">🎯 学完你能：记住几个关键角度的 cos 值。</p>
          <div className="space-y-0.5 text-gray-700">

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-2">
              <p className="font-bold text-lg text-blue-800 mb-1">必背速查表</p>
              <p className="text-blue-700 mb-1">向量中最常用的就这几个，背下来就够了：</p>
              <div className="bg-white rounded-lg p-2 border border-blue-100">
                <table className="w-full text-center">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-1 font-bold text-gray-700">角度 θ</th>
                      <th className="py-1">0°</th>
                      <th className="py-1">30°</th>
                      <th className="py-1">45°</th>
                      <th className="py-1">60°</th>
                      <th className="py-1">90°</th>
                      <th className="py-1">120°</th>
                      <th className="py-1">180°</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-1 font-bold text-gray-700"><Math tex="\cos\theta" /></td>
                      <td className="py-1 text-green-700">1</td>
                      <td className="py-1"><Math tex="\frac{\sqrt{3}}{2}" /></td>
                      <td className="py-1"><Math tex="\frac{\sqrt{2}}{2}" /></td>
                      <td className="py-1"><Math tex="\frac{1}{2}" /></td>
                      <td className="py-1 text-blue-700">0</td>
                      <td className="py-1"><Math tex="-\frac{1}{2}" /></td>
                      <td className="py-1 text-red-700">-1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-2">
              <p className="font-bold text-gray-800 mb-1">规律</p>
              <div className="grid grid-cols-2 gap-1">
                <div className="bg-white rounded-lg p-2 border border-gray-200">
                  <p className="text-center"><strong>角度从 0° → 180°</strong></p>
                  <p className="text-center text-gray-500 mt-1">cos 值从 1 → -1，一路递减</p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-gray-200">
                  <p className="text-center"><strong>90° 是分界线</strong></p>
                  <p className="text-center text-gray-500 mt-1">锐角 cos &gt; 0，钝角 cos &lt; 0</p>
                </div>
              </div>
            </div>


          </div>
        </Collapsible>
      </section>

      </LessonLayout>
    </div>
  );
}
