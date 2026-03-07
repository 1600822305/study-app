import { AlertTriangle } from 'lucide-react';

import { Math, Collapsible, SpeakButton, ProgressTracker, QuizPanel } from '@/components/shared';
import { logicPrereqNarrations } from './data/prereq-narrations';
import { logicPrereqProgressItems } from './data/prereq-progress';
import { logicPrereqQuizQuestions } from './data/prereq-quiz';
import { useProgress } from '@/hooks';

export function LogicPrereqPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('logic-prereq', logicPrereqProgressItems);

  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-amber-600 mb-2">
          <span>📚</span>
          <span>前置准备</span>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-black text-gray-900 mb-2">1.2.5 逻辑用语前置知识</h1>
          <SpeakButton text={logicPrereqNarrations.intro} />
        </div>
        <p className="text-gray-500">学逻辑之前，先确保子集关系、解不等式、基本推理没问题</p>
        <div className="flex flex-wrap gap-3 mt-3">
          <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
            约15-20分钟
          </span>
          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
            集合基础
          </span>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-5 mb-6">
        <p className="font-bold text-gray-800 mb-2">📋 知识地图</p>
        <div className="text-sm text-gray-600 space-y-1">
          <p>一、集合的子集关系 ──── 判断"谁包含谁"，充分必要条件的基础</p>
          <p>二、解不等式 ──── 把条件转成集合，比较范围大小</p>
          <p>三、基本推理能力 ──── 判断"p 能不能推出 q"</p>
          <p>四、公式速查表 ──── 一页纸总结</p>
          <p>五、选择题自测（8题）</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main content */}
        <div className="flex-1 min-w-0">

      {/* Section 1: Subset Relations */}
      <section className="mb-6">
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

            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="font-bold text-green-800 mb-1">✏️ 即时练习</p>
              <p className="text-gray-700">1. A = &#123;1,2&#125;，B = &#123;1,2,3&#125;，关系？　答案：<strong>A ⊂ B</strong></p>
              <p className="text-gray-700">2. A = (-1, 3)，B = (-2, 5)，谁包含谁？　答案：<strong>A ⊂ B</strong></p>
              <p className="text-gray-700">3. A = [1, 4]，B = [1, 4]，关系？　答案：<strong>A = B</strong></p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <div className="flex items-start gap-2">
                <AlertTriangle size={16} className="text-amber-600 shrink-0 mt-0.5" />
                <div className="text-amber-700 text-sm space-y-1">
                  <p className="font-bold">⚠️ 易错点</p>
                  <p><strong>⊂ 和 ⊆ 的区别</strong>：⊂ 是真子集（不能相等），⊆ 是子集（可以相等）</p>
                  <p>比较区间时<strong>画数轴</strong>最靠谱，不要只看端点数字大小</p>
                </div>
              </div>
            </div>
          </div>
        </Collapsible>
      </section>

      {/* Section 2: Solving Inequalities */}
      <section className="mb-6">
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
              <p className="font-bold mb-2">绝对值不等式速查</p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
                <p className="font-bold text-blue-800 mb-1">先搞清楚：|x| 是什么？</p>
                <p className="text-blue-700"><Math tex="|x|" /> 就是 x <strong>到 0 的距离</strong>，永远是正数或零。</p>
                <p className="text-blue-700 mt-1">比如 <Math tex="|3| = 3" />，<Math tex="|-3| = 3" />（不管正负，距离都是 3）</p>
                <p className="text-blue-700 mt-2">所以 <Math tex="|x| < 3" /> 的意思就是：x 到 0 的距离<strong>不超过 3</strong> → x 在 -3 到 3 之间</p>
                <p className="text-blue-700"><Math tex="|x| > 3" /> 的意思就是：x 到 0 的距离<strong>超过 3</strong> → x 在 -3 左边或 3 右边</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 space-y-1">
                <p><Math tex="|x| < a \;\Rightarrow\; -a < x < a" />（距离不超过 a → 夹在中间）</p>
                <p><Math tex="|x| > a \;\Rightarrow\; x < -a \text{ 或 } x > a" />（距离超过 a → 在两边）</p>
                <p className="mt-2 pt-2 border-t border-gray-200"><Math tex="|x - b| < a" /> 就是 x 到 <strong>b</strong> 的距离不超过 a → <Math tex="b - a < x < b + a" /></p>
              </div>
              <p className="mt-2 text-gray-600">口诀：<strong>小于取中间，大于取两边</strong>（和二次不等式一样！）</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-bold text-gray-800 mb-1">例：<Math tex="|x - 1| < 3" />（x 到 1 的距离不超过 3）</p>
              <p><Math tex="1 - 3 < x < 1 + 3 \;\Rightarrow\; -2 < x < 4" /></p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="font-bold text-green-800 mb-1">✏️ 即时练习</p>
              <p className="text-gray-700">1. 解 <Math tex="x^2 - 5x + 6 < 0" /> → 答案：<strong>2 {'<'} x {'<'} 3</strong></p>
              <p className="text-gray-700">2. 解 <Math tex="x^2 - 1 \geq 0" /> → 答案：<strong>x ≤ -1 或 x ≥ 1</strong></p>
              <p className="text-gray-700">3. 解 <Math tex="|x + 2| < 3" /> → 答案：<strong>-5 {'<'} x {'<'} 1</strong></p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <div className="flex items-start gap-2">
                <AlertTriangle size={16} className="text-amber-600 shrink-0 mt-0.5" />
                <div className="text-amber-700 text-sm space-y-1">
                  <p className="font-bold">⚠️ 易错点</p>
                  <p><strong>开闭区间别搞混</strong>：{'<'} 用开区间 ()，≤ 用闭区间 []</p>
                  <p>绝对值不等式 |x-b| {'<'} a，<strong>中心是 b 不是 0</strong>，别算错</p>
                </div>
              </div>
            </div>
          </div>
        </Collapsible>
      </section>

      {/* Section 3: Basic Reasoning */}
      <section className="mb-6">
        <Collapsible title="三、基本推理能力" defaultOpen storageKey="logic-prereq:reasoning" headerExtra={<SpeakButton text={logicPrereqNarrations.reasoning} />}>
          <p className="text-xs text-blue-600 mb-3">🎯 学完你能：判断"p 能不能推出 q"，用举反例法或集合包含法。</p>
          <div className="space-y-4 text-sm text-gray-700">
            <div>
              <p className="font-bold mb-2">"推出"是什么意思？</p>
              <div className="bg-gray-50 rounded-lg p-4 space-y-1">
                <p><Math tex="p \Rightarrow q" /> 读作"p 推出 q"或"若 p 则 q"</p>
                <p className="text-gray-500">意思是：只要 p 成立，q 一定成立</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-bold text-gray-800 mb-2">例</p>
              <div className="space-y-1">
                <p>"x = 2" → "x 是偶数" ✓（能推出）</p>
                <p>"x 是偶数" → "x = 2" ✗（x=4 也是偶数，推不出）</p>
              </div>
            </div>

            <div>
              <p className="font-bold mb-2">判断能否推出的方法</p>
              <div className="space-y-2">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold text-gray-800">方法1：举反例</p>
                  <p className="text-gray-600">找到 p 成立但 q 不成立的例子 → 推不出</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold text-gray-800">方法2：集合包含</p>
                  <p className="text-gray-600">p 的范围（集合A）<Math tex="\subseteq" /> q 的范围（集合B）→ 能推出</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-blue-800 text-sm">
                <strong>核心：</strong>p 的范围 ⊆ q 的范围 → p 能推出 q（<strong>小推大能推，大推小推不出</strong>）
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-bold text-gray-800 mb-2">综合例</p>
              <p>p: "x {'>'} 3"，q: "x {'>'} 1"</p>
              <p className="text-gray-500 text-xs mt-1">p 的集合 = (3, +∞)，q 的集合 = (1, +∞)，p ⊂ q</p>
              <div className="mt-2 space-y-1">
                <p>p → q？x {'>'} 3 当然 x {'>'} 1 ✓（小范围满足大范围）</p>
                <p>q → p？x {'>'} 1 不一定 x {'>'} 3（如 x = 2）✗</p>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="font-bold text-green-800 mb-1">✏️ 即时练习</p>
              <p className="text-gray-700">1. p: "x = 1"，q: "x² = 1"，p→q？q→p？　答案：<strong>p→q ✓，q→p ✗</strong></p>
              <p className="text-gray-700">2. p: "x {'>'} 5"，q: "x {'>'} 3"，p→q？　答案：<strong>✓</strong></p>
              <p className="text-gray-700">3. p: "x² = 4"，q: "x = 2"，p→q？　答案：<strong>✗</strong>（x=-2也满足p）</p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <div className="flex items-start gap-2">
                <AlertTriangle size={16} className="text-amber-600 shrink-0 mt-0.5" />
                <div className="text-amber-700 text-sm space-y-1">
                  <p className="font-bold">⚠️ 易错点</p>
                  <p><strong>方向别搞反</strong>：p→q 问的是"p 成立时 q 是否一定成立"</p>
                  <p>举反例只需要<strong>一个</strong>就够了，不需要列出所有反例</p>
                </div>
              </div>
            </div>
          </div>
        </Collapsible>
      </section>

      {/* Section 4: 公式速查表 */}
      <section className="mb-6">
        <Collapsible title="📌 公式速查表" storageKey="logic-prereq:cheatsheet">
          <div className="space-y-4 text-sm text-gray-700">
            <div>
              <p className="font-bold text-gray-800 mb-2">子集关系</p>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <p><Math tex="A \subseteq B" />：A 的每个元素都在 B 里（含相等）</p>
                <p><Math tex="A \subset B" />：A 在 B 里面且 A ≠ B（真子集）</p>
                <p>判断方法：画数轴，看谁包含谁</p>
              </div>
            </div>
            <div>
              <p className="font-bold text-gray-800 mb-2">一元二次不等式（a {'>'} 0）</p>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <p>{'>'} 0 → 取两边：<Math tex="x < x_1 \text{ 或 } x > x_2" /></p>
                <p>{'<'} 0 → 取中间：<Math tex="x_1 < x < x_2" /></p>
                <p className="text-gray-500 text-xs">口诀：<strong className="text-gray-700">大于取两边，小于取中间</strong></p>
              </div>
            </div>
            <div>
              <p className="font-bold text-gray-800 mb-2">绝对值不等式</p>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <p><Math tex="|x| < a \;\Rightarrow\; -a < x < a" /></p>
                <p><Math tex="|x| > a \;\Rightarrow\; x < -a \text{ 或 } x > a" /></p>
                <p><Math tex="|x - b| < a \;\Rightarrow\; b - a < x < b + a" /></p>
              </div>
            </div>
            <div>
              <p className="font-bold text-gray-800 mb-2">推出关系</p>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <p><Math tex="p \Rightarrow q" /> ⟺ p 的集合 <Math tex="\subseteq" /> q 的集合</p>
                <p>小范围推大范围 ✓　大范围推小范围 ✗</p>
              </div>
            </div>
          </div>
        </Collapsible>
      </section>

      {/* Section 5: Quiz */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-green-500 text-white flex items-center justify-center text-sm font-bold">
            5
          </span>
          选择题自测
        </h2>
        <QuizPanel module="logic-prereq" questions={logicPrereqQuizQuestions} title="前置知识自测" description="8道选择题，覆盖子集关系、解不等式、推出判断全部知识点" />
      </section>
        </div>

        {/* Sidebar: Progress */}
        <div className="lg:w-72 shrink-0">
          <div className="lg:sticky lg:top-6">
            <ProgressTracker items={progressItems} onToggle={toggleProgress} />
          </div>
        </div>
      </div>
    </div>
  );
}
