import { Math, Collapsible, SpeakButton, QuizPanel, PageHeader, LessonLayout, CalloutCard, PracticeCard, ExportButton, PageBreak } from '@/components/shared';
import { logicPrereqNarrations } from './data/prereq-narrations';
import { logicPrereqPractice1, logicPrereqPractice2, logicPrereqPractice3 } from './data/practice';
import { logicPrereqProgressItems } from './data/prereq-progress';
import { logicPrereqQuizQuestions } from './data/prereq-quiz';
import { useProgress, usePrintMode } from '@/hooks';
import { scrollToId } from '@/lib/scroll';

export function LogicPrereqPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('logic-prereq', logicPrereqProgressItems);
  const { isPrinting, printOptions } = usePrintMode();

  return (
    <div>
      <PageHeader
        stage="前置准备"
        variant="prereq"
        title="1.2.5 逻辑用语前置知识"
        narration={logicPrereqNarrations.intro}
        subtitle="学逻辑之前，先确保子集关系、解不等式、基本推理没问题"
        tags={[
          { label: '约15-20分钟', color: 'amber' },
          { label: '集合基础', color: 'green' },
        ]}
      />

      <div className="flex justify-end mb-4 print:hidden">
        <ExportButton title="1.2.5 逻辑用语前置知识" />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-5 mb-6">
        <p className="font-bold text-gray-800 mb-2">📋 知识地图</p>
        <div className="text-sm text-gray-600 space-y-1">
          <button onClick={() => scrollToId('lp-subset')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">一、集合的子集关系 ── 判断“谁包含谁”，这是充分必要条件的基础</button>
          <button onClick={() => scrollToId('lp-inequality')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">二、解不等式 ── 把条件转成集合，比较范围大小</button>
          <button onClick={() => scrollToId('lp-reasoning')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">三、基本推理能力 ── 判断“p 能不能推出 q”</button>
          <button onClick={() => scrollToId('lp-cheatsheet')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">四、公式速查表 ── 一页纸总结</button>
          <button onClick={() => scrollToId('lp-quiz')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">五、选择题自测（8题）</button>
        </div>
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      {/* Section 1: Subset Relations */}
      <section id="lp-subset" className="mb-6 scroll-mt-4">
        <Collapsible title="一、集合的子集关系" defaultOpen storageKey="logic-prereq:subset" headerExtra={<SpeakButton text={logicPrereqNarrations.subset} />}>
          <p className="text-xs text-blue-600 mb-3">🎯 学完你能：用数轴快速判断两个区间的包含关系，说出"A⊂B"还是"B⊂A"。</p>
          <div className="space-y-3 text-sm text-gray-700">
            <p>充分必要条件的判断，本质就是<strong>比较两个集合的大小</strong>。</p>

            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
              <p className="font-bold mb-2">子集回顾</p>
              <p>如果 A 里的每个元素<strong>都能在 B 里找到</strong>，就说 A 是 B 的子集，写作 <Math tex="A \subseteq B" /></p>
              <p>如果 A 是 B 的子集，而且 A 和 B <strong>不完全一样</strong>（B 比 A 多东西），就叫真子集，写作 <Math tex="A \subset B" /></p>
              <p>如果两个集合的元素<strong>完全相同</strong>，就是相等，写作 <Math tex="A = B" /></p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-bold mb-3">用数轴比较区间大小</p>
              <p className="mb-3">A = (2, 5)，B = (1, 6)，谁包含谁？</p>

              {/* 数轴图解 - 盖子样式 */}
              <div className="bg-white rounded-lg px-5 pt-2 pb-4">
                {/* B 盖子（上方大弧） */}
                <div className="relative h-10 mx-6">
                  <div className="absolute bottom-0 border-t-[3px] border-l-[3px] border-r-[3px] border-blue-500 rounded-t-lg" style={{ left: `${1 * (100 / 7)}%`, right: `${100 - 6 * (100 / 7)}%`, height: '100%' }} />
                  <span className="absolute top-0 text-sm font-bold text-blue-600" style={{ left: `${3.5 * (100 / 7)}%`, transform: 'translateX(-50%)' }}>B = (1, 6)</span>
                </div>

                {/* 数轴 */}
                <div className="relative h-8 mx-6 my-1">
                  <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gray-400" />
                  {[0, 1, 2, 3, 4, 5, 6, 7].map((n) => (
                    <div key={n} className="absolute top-1/2 flex flex-col items-center" style={{ left: `${n * (100 / 7)}%`, transform: 'translateX(-50%)' }}>
                      <div className="w-[1.5px] h-3 bg-gray-500 -translate-y-1/2" />
                      <span className="text-sm font-medium text-gray-600 mt-2">{n}</span>
                    </div>
                  ))}
                </div>

                {/* A 盖子（下方小弧，翻转） */}
                <div className="relative h-10 mx-6">
                  <div className="absolute top-0 border-b-[3px] border-l-[3px] border-r-[3px] border-red-500 rounded-b-lg" style={{ left: `${2 * (100 / 7)}%`, right: `${100 - 5 * (100 / 7)}%`, height: '100%' }} />
                  <span className="absolute bottom-0 text-sm font-bold text-red-600" style={{ left: `${3.5 * (100 / 7)}%`, transform: 'translateX(-50%)' }}>A = (2, 5)</span>
                </div>
              </div>

              <p className="mt-3 text-sm"><span className="text-red-600 font-bold">A</span> 完全被 <span className="text-blue-600 font-bold">B</span> 包住 → <Math tex="A \subset B" /></p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-blue-800 text-sm">
                <strong>预告：</strong>学逻辑用语时，你会用到"<Math tex="A \subset B" /> 则 p 是 q 的充分条件"。
                现在先记住怎么判断谁包含谁。
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
              <p className="font-bold text-orange-800 mb-3">📌 子集判断口诀速查</p>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold shrink-0">①</span>
                  <p><strong>有限集</strong>：逐个检查 A 的元素是否都在 B 中 → 都在就是 <Math tex="A \subseteq B" /></p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold shrink-0">②</span>
                  <p><strong>区间</strong>：画数轴，看谁被谁"罩住" → 被罩住的是子集</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold shrink-0">③</span>
                  <p><strong>空集</strong>：<Math tex="\varnothing" /> 是任何集合的子集（<Math tex="\varnothing \subseteq A" /> 恒成立）</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold shrink-0">④</span>
                  <p><strong>⊆ vs ⊂</strong>：<Math tex="A \subseteq B" /> 允许相等，<Math tex="A \subset B" /> 必须不等（真子集）</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold shrink-0">⑤</span>
                  <p><strong>范围大小</strong>：范围小 ⊂ 范围大（小的是子集，大的是超集）</p>
                </div>
              </div>
            </div>

            <PageBreak />

            <PracticeCard questions={logicPrereqPractice1} />

            <CalloutCard variant="warning" title="易错点">
              <p><strong>⊂ 和 ⊆ 的区别</strong>：⊂ 是真子集（不能相等），⊆ 是子集（可以相等）</p>
              <p>比较区间时<strong>画数轴</strong>最靠谱，不要只看端点数字大小</p>
            </CalloutCard>
          </div>
        </Collapsible>
      </section>

      {/* Section 2: Solving Inequalities */}
      <section id="lp-inequality" className="mb-6 scroll-mt-4">
        <Collapsible title="二、解不等式" defaultOpen storageKey="logic-prereq:inequality" headerExtra={<SpeakButton text={logicPrereqNarrations.inequalityReview} />}>
          <p className="text-xs text-blue-600 mb-3">🎯 学完你能：快速解一元二次不等式和绝对值不等式，写成集合或区间。</p>
          <div className="space-y-4 text-sm text-gray-700">
            <div>
              <p className="font-bold mb-2">一元二次不等式速查</p>
              <div className="bg-gray-50 rounded-lg p-4 space-y-1">
                <p><Math tex="ax^2+bx+c > 0 \;\Rightarrow\; x < x_1 \text{ 或 } x > x_2" />（取两边）</p>
                <p><Math tex="ax^2+bx+c < 0 \;\Rightarrow\; x_1 < x < x_2" />（取中间）</p>
              </div>
              <p className="mt-2 text-gray-600">口诀：<strong>大于取两边，小于取中间</strong></p>
            </div>

            <div>
              <p className="font-bold mb-2">例</p>
              <div className="bg-gray-50 rounded-lg p-3 space-y-1">
                <p><Math tex="x^2 - 3x + 2 < 0 \;\Rightarrow\; (x-1)(x-2) < 0 \;\Rightarrow\; 1 < x < 2" /></p>
                <p><Math tex="x^2 - 4 \geq 0 \;\Rightarrow\; (x-2)(x+2) \geq 0 \;\Rightarrow\; x \leq -2 \text{ 或 } x \geq 2" /></p>
              </div>
            </div>

            <div>
              <p className="font-bold mb-2">绝对值不等式</p>

              {/* 核心方法：去绝对值 */}
              <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-4 mb-3">
                <p className="text-lg font-bold text-blue-800 mb-2">核心思路：去掉绝对值 → 变成普通不等式</p>
                <p className="text-blue-700 mb-3">绝对值不等式看起来吓人，其实只要<strong>去掉 | |</strong>，就变成你已经会解的普通不等式了。去绝对值只有<strong>两句话</strong>：</p>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                    <p className="font-bold text-green-700 mb-1"><Math tex="|东西| < a" /> → 去掉 | |，<strong className="text-green-600">夹在中间</strong></p>
                    <div className="bg-green-50 rounded-lg p-2 mt-2 text-center">
                      <Math tex="-a < 东西 < a" />
                    </div>
                    <p className="text-gray-600 mt-2">就是把"东西"<strong>夹在 -a 和 a 之间</strong>，绝对值就没了</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                    <p className="font-bold text-red-600 mb-1"><Math tex="|东西| > a" /> → 去掉 | |，<strong className="text-red-600">拆成两边</strong></p>
                    <div className="bg-red-50 rounded-lg p-2 mt-2 text-center">
                      <Math tex="东西 < -a" /> <strong className="mx-2">或</strong> <Math tex="东西 > a" />
                    </div>
                    <p className="text-gray-600 mt-2">要么<strong>小于 -a</strong>，要么<strong>大于 a</strong>，绝对值就没了</p>
                  </div>
                </div>
              </div>

              {/* 做题两步 */}
              <div className="bg-orange-50 border-2 border-orange-300 rounded-xl p-3 mb-3">
                <p className="font-bold text-orange-800 mb-2">做题就两步：</p>
                <div className="space-y-1.5 text-orange-700">
                  <p><strong>① 去绝对值：</strong>看是 {'<'} 还是 {'>'}，用上面的规则去掉 | |</p>
                  <p><strong>② 解普通不等式：</strong>移项、化简，得出答案</p>
                </div>
                <p className="text-orange-600 text-xs mt-2 font-bold">绝对值不等式 = 去绝对值 + 解普通不等式，没了！</p>
              </div>

              {/* 口诀速查 */}
              <div className="bg-gray-50 rounded-xl p-3 mb-3">
                <p className="font-bold text-gray-800 mb-2">口诀速查</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white rounded-lg p-3 text-center">
                    <p className="font-bold text-green-700">{'<'} → 夹中间</p>
                    <p className="text-gray-500 text-sm mt-1"><Math tex="-a < 东西 < a" /></p>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center">
                    <p className="font-bold text-red-600">{'>'} → 拆两边</p>
                    <p className="text-gray-500 text-sm mt-1">东西{'<'}-a 或 东西{'>'}a</p>
                  </div>
                </div>
              </div>

              {/* 快速示范 */}
              <div className="bg-gray-50 rounded-xl p-3 mb-2">
                <p className="font-bold text-gray-800 mb-2">快速示范</p>
                <div className="space-y-2">
                  <div className="bg-white rounded-lg p-3">
                    <p className="font-bold text-gray-700 mb-1"><Math tex="|x - 1| < 3" /></p>
                    <div className="pl-3 border-l-2 border-green-400 space-y-1">
                      <p className="text-gray-600">{'<'} → 夹中间 → <Math tex="-3 < x - 1 < 3" /></p>
                      <p className="text-gray-600">三边同时 +1 → <Math tex="-2 < x < 4" /> ✓</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="font-bold text-gray-700 mb-1"><Math tex="|x + 2| > 5" /></p>
                    <div className="pl-3 border-l-2 border-red-400 space-y-1">
                      <p className="text-gray-600">{'>'} → 拆两边 → <Math tex="x + 2 < -5" /> 或 <Math tex="x + 2 > 5" /></p>
                      <p className="text-gray-600">各自 -2 → <Math tex="x < -7" /> 或 <Math tex="x > 3" /> ✓</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 深层理解（距离法）- 折叠 */}
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-3 mb-2">
                <p className="font-bold text-purple-800 mb-1">💡 想知道"为什么"？（选看）</p>
                <p className="text-purple-700 text-sm mb-2">|x - a| 的本质是 x 到 a 在数轴上的<strong>距离</strong>。</p>
                <div className="text-purple-600 text-sm space-y-1">
                  <p>• |x-3| {'<'} 2 = "x 到 3 的距离小于 2" → x 在 3 附近 → <Math tex="1 < x < 5" /></p>
                  <p>• |x| {'>'} 3 = "x 到 0 的距离大于 3" → x 离 0 很远 → <Math tex="x < -3" /> 或 <Math tex="x > 3" /></p>
                </div>
                <p className="text-purple-500 text-xs mt-2">理解了距离，"夹中间"和"拆两边"就不用背了——近就在中间，远就在两边，画数轴一看便知。</p>
              </div>

              <p className="text-lg font-bold text-gray-800 mb-0">实战演练（按题型分类，覆盖所有变形）</p>

              <PageBreak />

              {/* 实战演练 - 按题型分类 */}
              <div className="space-y-3 mb-3">
                <p className="text-green-700 font-bold">类型一：{'<'} / ≤ → 夹中间</p>

                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold text-gray-800 mb-1">① <Math tex="|x| < 5" /><span className="text-gray-400 text-sm ml-2">最基础</span></p>
                  <div className="pl-3 border-l-2 border-green-400">
                    <p>夹中间 → <Math tex="-5 < x < 5" /></p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold text-gray-800 mb-1">② <Math tex="|x - 2| \leq 3" /><span className="text-gray-400 text-sm ml-2">| | 里是 x-a</span></p>
                  <div className="pl-3 border-l-2 border-green-400 space-y-1">
                    <p>夹中间 → <Math tex="-3 \leq x - 2 \leq 3" /></p>
                    <p>三边 +2 → <Math tex="-1 \leq x \leq 5" /></p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold text-gray-800 mb-1">③ <Math tex="|x + 4| < 1" /><span className="text-gray-400 text-sm ml-2">| | 里是 x+a</span></p>
                  <div className="pl-3 border-l-2 border-green-400 space-y-1">
                    <p>夹中间 → <Math tex="-1 < x + 4 < 1" /></p>
                    <p>三边 -4 → <Math tex="-5 < x < -3" /></p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold text-gray-800 mb-1">④ <Math tex="|2x - 6| < 4" /><span className="text-gray-400 text-sm ml-2">| | 里有系数</span></p>
                  <div className="pl-3 border-l-2 border-green-400 space-y-1">
                    <p>夹中间 → <Math tex="-4 < 2x - 6 < 4" /></p>
                    <p>三边 +6 → <Math tex="2 < 2x < 10" /> → 三边 ÷2 → <Math tex="1 < x < 5" /></p>
                  </div>
                </div>

                <p className="text-red-600 font-bold mt-1">类型二：{'>'} / ≥ → 拆两边</p>

                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold text-gray-800 mb-1">⑤ <Math tex="|x| > 2" /><span className="text-gray-400 text-sm ml-2">最基础</span></p>
                  <div className="pl-3 border-l-2 border-red-400">
                    <p>拆两边 → <Math tex="x < -2" /> 或 <Math tex="x > 2" /></p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold text-gray-800 mb-1">⑥ <Math tex="|x - 5| \geq 3" /><span className="text-gray-400 text-sm ml-2">| | 里是 x-a</span></p>
                  <div className="pl-3 border-l-2 border-red-400 space-y-1">
                    <p>拆两边 → <Math tex="x - 5 \leq -3" /> 或 <Math tex="x - 5 \geq 3" /></p>
                    <p>各自 +5 → <Math tex="x \leq 2" /> 或 <Math tex="x \geq 8" /></p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold text-gray-800 mb-1">⑦ <Math tex="|x + 1| > 4" /><span className="text-gray-400 text-sm ml-2">| | 里是 x+a</span></p>
                  <div className="pl-3 border-l-2 border-red-400 space-y-1">
                    <p>拆两边 → <Math tex="x + 1 < -4" /> 或 <Math tex="x + 1 > 4" /></p>
                    <p>各自 -1 → <Math tex="x < -5" /> 或 <Math tex="x > 3" /></p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold text-gray-800 mb-1">⑧ <Math tex="|3x + 9| > 6" /><span className="text-gray-400 text-sm ml-2">| | 里有系数</span></p>
                  <div className="pl-3 border-l-2 border-red-400 space-y-1">
                    <p>拆两边 → <Math tex="3x + 9 < -6" /> 或 <Math tex="3x + 9 > 6" /></p>
                    <p>各自 -9 → <Math tex="3x < -15" /> 或 <Math tex="3x > -3" /></p>
                    <p>各自 ÷3 → <Math tex="x < -5" /> 或 <Math tex="x > -1" /></p>
                  </div>
                </div>

                <p className="text-orange-600 font-bold mt-1">类型三：先变形，再去绝对值</p>

                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold text-gray-800 mb-1">⑨ <Math tex="|x - 1| + 2 \leq 5" /><span className="text-gray-400 text-sm ml-2">移项</span></p>
                  <div className="pl-3 border-l-2 border-orange-400 space-y-1">
                    <p>先移项 → <Math tex="|x - 1| \leq 3" /></p>
                    <p>夹中间 → <Math tex="-3 \leq x - 1 \leq 3" /> → 三边 +1 → <Math tex="-2 \leq x \leq 4" /></p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold text-gray-800 mb-1">⑩ <Math tex="2|x + 3| - 1 < 7" /><span className="text-gray-400 text-sm ml-2">系数在外+移项</span></p>
                  <div className="pl-3 border-l-2 border-orange-400 space-y-1">
                    <p>先移项 → <Math tex="2|x + 3| < 8" /> → 两边 ÷2 → <Math tex="|x + 3| < 4" /></p>
                    <p>夹中间 → <Math tex="-4 < x + 3 < 4" /> → 三边 -3 → <Math tex="-7 < x < 1" /></p>
                  </div>
                </div>
              </div>

            </div>

            <PageBreak />

            <PracticeCard questions={logicPrereqPractice2} />

            <CalloutCard variant="warning" title="易错点">
              <p><strong>开闭区间别搞混</strong>：{'<'} 用开区间 ()，≤ 用闭区间 []</p>
              <p>绝对值不等式 |x-b| {'<'} a，<strong>中心是 b 不是 0</strong>，别算错</p>
            </CalloutCard>
          </div>
        </Collapsible>
      </section>

      <PageBreak label="第3页 · 基本推理" />

      {/* Section 3: Basic Reasoning */}
      <section id="lp-reasoning" className="mb-6 scroll-mt-4">
        <Collapsible title="三、基本推理能力" defaultOpen storageKey="logic-prereq:reasoning" headerExtra={<SpeakButton text={logicPrereqNarrations.reasoning} />}>
          <p className="text-xs text-blue-600 mb-3">🎯 学完你能：3秒判断"A 能不能推出 B"。</p>
          <div className="space-y-4 text-sm text-gray-700">

            {/* Step 1: 生活直觉 */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="font-bold text-blue-800 mb-2">先用生活例子理解</p>
              <p className="text-blue-700 mb-2">"推出"就是<strong>"如果 A 成立，B 是不是一定成立？"</strong></p>
              <div className="bg-white rounded-lg p-3 space-y-2">
                <p>🐱 "它是猫" → "它是动物"　<strong className="text-green-600">✓ 能推出</strong>（猫一定是动物）</p>
                <p>🐾 "它是动物" → "它是猫"　<strong className="text-red-600">✗ 推不出</strong>（狗也是动物啊）</p>
              </div>
              <p className="mt-3 text-blue-700">看到了吗？<strong>反过来就不成立了</strong>。这就是"推出"的核心——<strong>有方向的</strong>。</p>
            </div>

            {/* Step 2: 一句话口诀 */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
              <p className="font-bold text-orange-800 text-base mb-1">判断口诀（背这一句就够了）</p>
              <p className="text-orange-700 text-base font-bold">小范围 → 大范围：<span className="text-green-600">能推出 ✓</span></p>
              <p className="text-orange-700 text-base font-bold">大范围 → 小范围：<span className="text-red-600">推不出 ✗</span></p>
              <p className="text-orange-600 text-xs mt-2">（"猫"是小范围，"动物"是大范围，猫→动物 ✓，动物→猫 ✗）</p>
            </div>

            {/* Step 3: 用到数学上 */}
            <div>
              <p className="font-bold mb-2">用到数学上</p>
              <div className="bg-gray-50 rounded-lg p-4 space-y-4">

                {/* 例1：集合圈图 */}
                <div>
                  <p className="font-bold text-gray-800 mb-1">例1：数字版</p>
                  <p className="mb-2">"x = 2" → "x 是偶数"？</p>
                  <div className="bg-white rounded-lg p-4 flex items-center justify-center">
                    <div className="relative">
                      {/* 大圈：偶数 */}
                      <div className="w-48 h-28 rounded-full border-[3px] border-blue-400 bg-blue-50 flex items-end justify-center pb-1">
                        <span className="text-xs text-blue-500">偶数：2, 4, 6, 8, 10...</span>
                      </div>
                      {/* 小圈：x=2 */}
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border-[3px] border-red-400 bg-red-50 flex items-center justify-center">
                        <span className="text-sm font-bold text-red-600">x=2</span>
                      </div>
                    </div>
                    <div className="ml-4 text-sm space-y-1">
                      <p><span className="text-red-600 font-bold">小圈</span>在<span className="text-blue-600 font-bold">大圈</span>里面</p>
                      <p>小→大，<strong className="text-green-600">能推出 ✓</strong></p>
                    </div>
                  </div>
                </div>

                {/* 例2：数轴盖子 */}
                <div className="border-t border-gray-200 pt-3">
                  <p className="font-bold text-gray-800 mb-1">例2：不等式版</p>
                  <p className="mb-2">"x {'>'} 3" → "x {'>'} 1"？</p>
                  <div className="bg-white rounded-lg px-5 pt-2 pb-3">
                    {/* x>1 大盖子 */}
                    <div className="relative h-8 mx-6">
                      <div className="absolute bottom-0 border-t-[3px] border-l-[3px] border-blue-500 rounded-tl-lg" style={{ left: `${1 * (100 / 6)}%`, right: 0, height: '100%' }} />
                      <span className="absolute top-0 text-xs font-bold text-blue-600" style={{ left: `${3.5 * (100 / 6)}%`, transform: 'translateX(-50%)' }}>x {'>'} 1（大范围）</span>
                    </div>
                    {/* 数轴 */}
                    <div className="relative h-7 mx-6 my-1">
                      <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gray-400" />
                      {[0, 1, 2, 3, 4, 5, 6].map((n) => (
                        <div key={n} className="absolute top-1/2 flex flex-col items-center" style={{ left: `${n * (100 / 6)}%`, transform: 'translateX(-50%)' }}>
                          <div className="w-[1.5px] h-2.5 bg-gray-500 -translate-y-1/2" />
                          <span className="text-xs text-gray-600 mt-1.5">{n}</span>
                        </div>
                      ))}
                      <div className="absolute top-1/2 -translate-y-1/2 right-0 text-gray-400 text-xs">→</div>
                    </div>
                    {/* x>3 小盖子 */}
                    <div className="relative h-8 mx-6">
                      <div className="absolute top-0 border-b-[3px] border-l-[3px] border-red-500 rounded-bl-lg" style={{ left: `${3 * (100 / 6)}%`, right: 0, height: '100%' }} />
                      <span className="absolute bottom-0 text-xs font-bold text-red-600" style={{ left: `${4.5 * (100 / 6)}%`, transform: 'translateX(-50%)' }}>x {'>'} 3（小范围）</span>
                    </div>
                  </div>
                  <p className="mt-1 text-center"><span className="text-red-600 font-bold">小</span>在<span className="text-blue-600 font-bold">大</span>里面 → <strong className="text-green-600">能推出 ✓</strong></p>
                </div>

                {/* 反过来 */}
                <div className="border-t border-gray-200 pt-3">
                  <p className="font-bold text-gray-800 mb-1">反过来呢？</p>
                  <p>"x {'>'} 1" → "x {'>'} 3"？</p>
                  <div className="bg-white rounded-lg p-3 mt-2 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-orange-100 border-2 border-orange-400 flex items-center justify-center text-sm font-bold text-orange-600 shrink-0">2</div>
                    <div className="text-sm">
                      <p>x=2 满足 x{'>'}1 ✓　但不满足 x{'>'}3 ✗</p>
                      <p className="text-gray-500 text-xs">找到反例了！</p>
                    </div>
                  </div>
                  <p className="mt-2">大→小，<strong className="text-red-600">推不出 ✗</strong></p>
                </div>
              </div>
            </div>

            <PageBreak />

            {/* Step 4: 怎么快速判断 */}
            <div>
              <p className="font-bold mb-2">遇到题怎么判断？两个绝招</p>
              <div className="space-y-2">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold text-gray-800">绝招1：想范围大小</p>
                  <p className="text-gray-600">谁的范围小？小的能推出大的，大的推不出小的</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold text-gray-800">绝招2：找反例（推不出时用）</p>
                  <p className="text-gray-600">能找到<strong>一个</strong> A 成立但 B 不成立的例子 → 推不出</p>
                  <p className="text-gray-500 text-xs mt-1">（比如"动物→猫"推不出，因为"狗"就是反例：狗是动物但不是猫）</p>
                </div>
              </div>
            </div>

            {/* Step 5: 数学符号（最后才引入） */}
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-bold text-gray-800 mb-1">最后认识一下符号</p>
              <p>"A 推出 B" 写成 <Math tex="A \Rightarrow B" />，读作"若 A 则 B"</p>
              <p className="text-gray-500 text-xs mt-1">就这么简单，箭头方向就是推出方向</p>
            </div>

            <CalloutCard variant="warning" title="易错点">
              <p><strong>方向别搞反</strong>：问"A→B"就是问"A 成立时 B 是否一定成立"，不是反过来</p>
              <p>找反例只需要<strong>一个</strong>就够了（狗是动物但不是猫 → 一个反例搞定）</p>
            </CalloutCard>

            <PracticeCard questions={logicPrereqPractice3} title="✏️ 即时练习（想想范围大小就行）" />
          </div>
        </Collapsible>
      </section>

      <PageBreak label="公式速查表" />

      {/* Section 4: 公式速查表 */}
      <section id="lp-cheatsheet" className="mb-6 scroll-mt-4">
        <Collapsible title="📌 公式速查表" storageKey="logic-prereq:cheatsheet">
          <p className="text-xs text-gray-500 mb-3">考前翻一翻，30秒回忆全部知识点</p>
          <div className="grid grid-cols-2 gap-3">

            {/* 卡片1：子集 */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="font-bold text-blue-800 mb-2 text-sm">子集关系</p>
              <div className="space-y-1.5 text-sm">
                <p><Math tex="A \subseteq B" /> 子集（可以相等）</p>
                <p><Math tex="A \subset B" /> 真子集（不能相等）</p>
                <p><Math tex="\varnothing \subset A" /> 空集是任何非空集合的真子集</p>
                <p className="text-blue-600 text-xs font-bold mt-2">方法：画数轴看谁包含谁</p>
              </div>
            </div>

            {/* 卡片2：二次不等式 */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
              <p className="font-bold text-orange-800 mb-2 text-sm">一元二次不等式</p>
              <div className="space-y-1.5 text-sm">
                <p>{'>'} 0 → <strong>取两边</strong>（远离两根）</p>
                <p>{'<'} 0 → <strong>取中间</strong>（两根之间）</p>
                <p>先因式分解找根，再定区间</p>
                <p className="text-orange-600 text-xs font-bold mt-2">口诀：大于取两边，小于取中间</p>
              </div>
            </div>

            {/* 卡片3：绝对值 */}
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
              <p className="font-bold text-purple-800 mb-2 text-sm">绝对值不等式</p>
              <div className="space-y-1.5 text-sm">
                <p><Math tex="|x| < a" /> → 夹中间：<Math tex="-a < x < a" /></p>
                <p><Math tex="|x| > a" /> → 拆两边：<Math tex="x<-a" /> 或 <Math tex="x>a" /></p>
                <p><Math tex="|x\!-\!b| < a" /> → 中心 b，半径 a</p>
                <p>做题两步：去绝对值 → 解普通不等式</p>
                <p className="text-purple-600 text-xs font-bold mt-2">本质：到某点的距离</p>
              </div>
            </div>

            {/* 卡片4：推出 */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="font-bold text-green-800 mb-2 text-sm">推出判断</p>
              <div className="space-y-1.5 text-sm">
                <p><Math tex="p \Rightarrow q \;\Leftrightarrow\;" /> p的集合 <Math tex="\subseteq" /> q的集合</p>
                <p>小范围 → 大范围　<strong className="text-green-600">✓ 能推出</strong></p>
                <p>大范围 → 小范围　<strong className="text-red-600">✗ 推不出</strong></p>
                <p className="text-green-600 text-xs font-bold mt-2">绝招：想范围大小 / 找反例</p>
              </div>
            </div>
          </div>

          {/* 易混淆对比 */}
          <div className="mt-3 bg-red-50 border border-red-200 rounded-xl p-4">
            <p className="font-bold text-red-800 mb-2 text-sm">易混淆对比速查</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
              <p>{'<'} 用<strong>开区间</strong> ( )</p>
              <p>≤ 用<strong>闭区间</strong> [ ]</p>
              <p><Math tex="x^2\!>\!0" /> 取两边（远离根）</p>
              <p><Math tex="|x|\!>\!a" /> 拆两边（远离中心）</p>
              <p><Math tex="x^2\!<\!0" /> 取中间（两根之间）</p>
              <p><Math tex="|x|\!<\!a" /> 夹中间（靠近中心）</p>
              <p>p→q：看 p 是否<strong>更小</strong></p>
              <p>A⊂B：A 在 B <strong>里面</strong></p>
            </div>
          </div>
        </Collapsible>
      </section>

      <PageBreak label="选择题自测" />

      {/* Section 5: Quiz */}
      <section id="lp-quiz" className="mb-8 scroll-mt-4">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-green-500 text-white flex items-center justify-center text-sm font-bold">
            5
          </span>
          选择题自测
        </h2>
        <QuizPanel module="logic-prereq" questions={logicPrereqQuizQuestions} title="前置知识自测" description="8道选择题，覆盖子集关系、解不等式、推出判断全部知识点" />
      </section>

      {isPrinting && printOptions.showAnswers && (
        <>
          <PageBreak label="答案与解析" />
          <section className="mb-8 print-answers">
            <h2 className="text-xl font-bold text-gray-900 mb-4">📝 答案与解析</h2>

            {[
              { label: '一、集合包含关系 — 即时练习', questions: logicPrereqPractice1 },
              { label: '二、解不等式 — 即时练习', questions: logicPrereqPractice2 },
            ].map((section) => (
              <div key={section.label} className="mb-4">
                <p className="font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">{section.label}</p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-gray-700">
                  {section.questions.map((q, idx) => {
                    const hasLatexAnswer = /[\\^_{}]/.test(q.correctAnswer);
                    const isSimpleFractionAnswer = /^-?\d+\/\d+$/.test(q.correctAnswer);
                    const answerTex = isSimpleFractionAnswer
                      ? q.correctAnswer.replace(/(-?\d+)\/(\d+)/, '\\frac{$1}{$2}')
                      : q.correctAnswer;
                    return (
                      <div key={q.id} className="flex gap-2 items-start" style={{ breakInside: 'avoid' }}>
                        <span className="text-blue-600 font-bold shrink-0">{idx + 1}.</span>
                        <div className="min-w-0">
                          <p className="font-bold text-gray-900">
                            答案：{hasLatexAnswer || isSimpleFractionAnswer ? <Math tex={answerTex} /> : q.correctAnswer}
                          </p>
                          {q.explanationLatex && (
                            <div className="text-gray-700 mt-1">
                              <Math tex={q.explanationLatex} />
                            </div>
                          )}
                          {q.explanation && (
                            <p className="text-gray-700 mt-1">{q.explanation}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </section>

          <PageBreak />

          <section className="mb-8 print-answers">
            {[
              { label: '三、基本推理 — 即时练习', questions: logicPrereqPractice3 },
              { label: '选择题自测', questions: logicPrereqQuizQuestions },
            ].map((section) => (
              <div key={section.label} className="mb-4">
                <p className="font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">{section.label}</p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-gray-700">
                  {section.questions.map((q, idx) => {
                    const hasLatexAnswer = /[\\^_{}]/.test(q.correctAnswer);
                    const isSimpleFractionAnswer = /^-?\d+\/\d+$/.test(q.correctAnswer);
                    const answerTex = isSimpleFractionAnswer
                      ? q.correctAnswer.replace(/(-?\d+)\/(\d+)/, '\\frac{$1}{$2}')
                      : q.correctAnswer;
                    return (
                      <div key={q.id} className="flex gap-2 items-start" style={{ breakInside: 'avoid' }}>
                        <span className="text-blue-600 font-bold shrink-0">{idx + 1}.</span>
                        <div className="min-w-0">
                          <p className="font-bold text-gray-900">
                            答案：{hasLatexAnswer || isSimpleFractionAnswer ? <Math tex={answerTex} /> : q.correctAnswer}
                          </p>
                          {q.explanationLatex && (
                            <div className="text-gray-700 mt-1">
                              <Math tex={q.explanationLatex} />
                            </div>
                          )}
                          {q.explanation && (
                            <p className="text-gray-700 mt-1">{q.explanation}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </section>
        </>
      )}

      </LessonLayout>
    </div>
  );
}
