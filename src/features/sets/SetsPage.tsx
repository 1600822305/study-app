import { Math, Collapsible, SpeakButton, QuizPanel, PageHeader, LessonLayout, CalloutCard, PracticeCard, ExportButton, PageBreak } from '@/components/shared';
import { setsNarrations } from './data/narrations';
import { setsPractice0, setsPractice1, setsPractice2, setsPractice3, setsPractice4, setsPractice5 } from './data/practice';
import { useProgress, usePrintMode } from '@/hooks';
import { scrollToId } from '@/lib/scroll';
import { setsQuizQuestions } from './data/quiz';
import { setsProgressItems } from './data/progress';
import { SetsAnswers, setsExplanations } from './sets-answers';

export function SetsPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('sets', setsProgressItems);
  const { isPrinting, printOptions } = usePrintMode();

  return (
    <div>
      <PageHeader
        stage="第一阶段 · 数学语言"
        title="1.2 集合"
        narration={setsNarrations.intro}
        subtitle="从零到满分 · 2-3小时搞定高考必拿5分"
        tags={[
          { label: '难度 ★☆☆☆☆', color: 'green' },
          { label: '高考必考 5分', color: 'blue' },
          { label: '约2-3小时', color: 'purple' },
        ]}
      />

      <div className="flex justify-end mb-4 print:hidden">
        <ExportButton title="1.2 集合" />
      </div>

      {/* 知识地图 */}
      <div className="bg-gray-50 rounded-xl p-3 mb-4 text-sm text-gray-600">
        <p className="font-bold text-gray-800 mb-2">📋 知识地图</p>
        <div className="grid grid-cols-2 gap-1">
          <button onClick={() => scrollToId('sets-what')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">一、集合是什么 → 定义 + ∈ 和 ∉</button>
          <button onClick={() => scrollToId('sets-props')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">二、三大性质 → 确定性·互异性·无序性</button>
          <button onClick={() => scrollToId('sets-repr')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">三、集合的表示 → 列举法、描述法、区间</button>
          <button onClick={() => scrollToId('sets-numsets')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">四、常见数集 → ℕ, ℤ, ℚ, ℝ</button>
          <button onClick={() => scrollToId('sets-subset')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">五、子集与真子集 → ⊆ 和 ⊂</button>
          <button onClick={() => scrollToId('sets-ops')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">六、集合的运算 → 交集、并集、补集</button>
          <button onClick={() => scrollToId('sets-quiz')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">七、高考真题实战 → 真题模拟</button>
        </div>
      </div>

      {/* 速通路线图 */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-4 mb-4">
        <p className="font-black text-blue-900 text-lg mb-1">速通路线图：集合就 6 个知识点</p>
        <p className="text-blue-700 text-sm mb-3">记住符号含义 + 画数轴，集合题就是送分题！</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
          <div className="bg-white rounded-xl p-2.5 border border-blue-100">
            <p className="font-bold text-gray-800">① 集合三性质</p>
            <p className="text-gray-500 mt-0.5">确定性、互异性、无序性</p>
          </div>
          <div className="bg-white rounded-xl p-2.5 border border-blue-100">
            <p className="font-bold text-gray-800">② ∈ 和 ⊆</p>
            <p className="text-gray-500 mt-0.5">∈ 是元素和集合的关系，⊆ 是集合和集合的关系</p>
          </div>
          <div className="bg-white rounded-xl p-2.5 border border-blue-100">
            <p className="font-bold text-gray-800">③ 表示方法</p>
            <p className="text-gray-500 mt-0.5">列举法、描述法、区间表示</p>
          </div>
          <div className="bg-white rounded-xl p-2.5 border border-blue-100">
            <p className="font-bold text-gray-800">④ 子集与真子集</p>
            <p className="text-gray-500 mt-0.5">n 个元素 → 2ⁿ 个子集</p>
          </div>
          <div className="bg-white rounded-xl p-2.5 border border-blue-100">
            <p className="font-bold text-gray-800">⑤ 交并补运算</p>
            <p className="text-gray-500 mt-0.5">交=都有，并=合起来，补=剩下的</p>
          </div>
          <div className="bg-yellow-50 rounded-xl p-2.5 border border-yellow-200">
            <p className="font-bold text-yellow-800">核心秘密</p>
            <p className="text-yellow-700 mt-0.5">集合题的万能方法：画数轴！</p>
          </div>
        </div>
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>
          {/* 符号速查 */}
          <section className="mb-6">
            <Collapsible title="📖 符号速查卡（看不懂符号先看这里）" storageKey="sets:symbols" defaultOpen={false}>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="font-bold text-blue-800 mb-3">集合里会用到的所有符号，一次搞定：</p>
                  <div className="grid grid-cols-[auto_auto_1fr] gap-x-4 gap-y-2">
                    <Math tex="\in" /><span className="font-bold">属于</span><span className="text-gray-600">元素在集合里：<Math tex="3 \in \{1,2,3\}" /></span>
                    <Math tex="\notin" /><span className="font-bold">不属于</span><span className="text-gray-600">元素不在集合里：<Math tex="4 \notin \{1,2,3\}" /></span>
                    <Math tex="\subseteq" /><span className="font-bold">子集</span><span className="text-gray-600">A 全在 B 里面：<Math tex="\{1,2\} \subseteq \{1,2,3\}" /></span>
                    <Math tex="\subsetneq" /><span className="font-bold">真子集</span><span className="text-gray-600">A 在 B 里面，但 A ≠ B</span>
                    <Math tex="\cap" /><span className="font-bold">交集</span><span className="text-gray-600">两个都有的部分</span>
                    <Math tex="\cup" /><span className="font-bold">并集</span><span className="text-gray-600">合在一起（去重）</span>
                    <Math tex="\complement_U A" /><span className="font-bold">补集</span><span className="text-gray-600">全集 U 里去掉 A 剩下的</span>
                    <Math tex="\varnothing" /><span className="font-bold">空集</span><span className="text-gray-600">什么都没有的集合</span>
                    <Math tex="\mathbb{R}" /><span className="font-bold">实数集</span><span className="text-gray-600">所有实数</span>
                    <Math tex="\mathbb{Z}" /><span className="font-bold">整数集</span><span className="text-gray-600">…-2, -1, 0, 1, 2…</span>
                    <Math tex="\mathbb{N}" /><span className="font-bold">自然数集</span><span className="text-gray-600">0, 1, 2, 3…</span>
                    <Math tex="\mathbb{N}^*" /><span className="font-bold">正整数集</span><span className="text-gray-600">1, 2, 3…（不含 0）</span>
                    <Math tex="\mathbb{Q}" /><span className="font-bold">有理数集</span><span className="text-gray-600">整数和分数</span>
                    <Math tex="\{x \mid \ldots\}" /><span className="font-bold">描述法</span><span className="text-gray-600">竖线读作"满足"：满足…条件的 x</span>
                  </div>
                </div>
                <div className="bg-[#F5E6D3] rounded-xl p-4">
                  <p className="font-bold text-[#7A5C3E] mb-1">不用死记！</p>
                  <p className="text-[#7A5C3E]">后面每个章节用到新符号时都会<strong>重新解释</strong>。这张表随时可以回来翻。</p>
                </div>
              </div>
            </Collapsible>
          </section>

          {/* Section 1: 集合是什么 */}
          <section id="sets-what" className="mb-6 scroll-mt-4">
            <Collapsible title="一、集合是什么？" defaultOpen storageKey="sets:what-is-set" headerExtra={<SpeakButton text={setsNarrations.whatIsSet} />}>
              <p className="text-xs text-blue-600 mb-3">🎯 学完你能：理解集合的概念，区分元素和集合的关系。</p>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="font-bold text-blue-800 mb-2">什么是集合？</p>
                  <p className="text-blue-700">集合 = <strong>一堆确定的东西装在一起</strong>。</p>
                  <p className="text-blue-700 text-xs mt-2">就这么简单。把一些东西放到一个"袋子"里，这个"袋子"就叫集合。</p>
                  <div className="bg-white rounded-lg p-3 border border-blue-100 mt-2">
                    <p className="text-gray-800 text-sm font-bold mb-1">正式说法：</p>
                    <p className="text-gray-700">由一些<strong>确定的对象</strong>组成的整体叫集合。里面的每个对象叫<strong>元素</strong>。</p>
                    <p className="text-gray-700 mt-1">集合用大写字母：A, B, C, U …　元素用小写字母：a, b, c, x …</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <p className="font-bold text-gray-800">生活中的"集合"：</p>
                  <p>你书包里的东西 = &#123;课本, 笔, 橡皮, 手机&#125;</p>
                  <p>所有偶数 = <Math tex="\{0, 2, 4, 6, 8, \ldots\}" /></p>
                  <p>比3大的数 = <Math tex="\{x \mid x > 3\}" /></p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="font-bold text-blue-800 mb-2">元素和集合的关系（只有两种）</p>
                  <div className="space-y-2">
                    <p><strong>属于：</strong><Math tex="a \in A" /> → "a 在集合 A 里面"</p>
                    <p><strong>不属于：</strong><Math tex="a \notin A" /> → "a 不在集合 A 里面"</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-blue-100 mt-2 text-xs text-gray-600">
                    <p>例：A = &#123;1, 3, 5, 7&#125;，则 <Math tex="3 \in A" /> ✓，<Math tex="4 \notin A" /> ✓</p>
                  </div>
                </div>

                <PracticeCard questions={setsPractice0} explanations={setsExplanations} />
              </div>
            </Collapsible>
          </section>

          <PageBreak label="三大性质" />

          {/* Section 2: 三大性质 */}
          <section id="sets-props" className="mb-6 scroll-mt-4">
            <Collapsible title="二、集合的三大性质（必须记住！）" defaultOpen storageKey="sets:properties" headerExtra={<SpeakButton text={setsNarrations.threeProperties} />}>
              <p className="text-xs text-blue-600 mb-3">🎯 学完你能：判断一组对象能否构成集合，识别高考中的互异性陷阱。</p>
              <div className="space-y-3 text-sm text-gray-700">
                <Collapsible title="① 确定性 —— 标准必须明确" storageKey="sets:prop-definite">
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="text-blue-700">任何一个对象，要么<strong>在</strong>集合里，要么<strong>不在</strong>，不能"可能在"。</p>
                    </div>
                    <p>✓ "所有偶数" → 任何数都能判断是不是偶数</p>
                    <p>✗ "好看的人" → 谁来定义"好看"？标准不确定，<strong>不能构成集合</strong></p>
                    <p>✗ "差不多高的人" → "差不多"没有标准</p>
                  </div>
                </Collapsible>

                <Collapsible title="② 互异性 —— 不能有重复" storageKey="sets:prop-distinct">
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="text-blue-700">集合里的元素<strong>互不相同</strong>，不能有重复。</p>
                    </div>
                    <p>✓ <Math tex="\{1, 2, 3\}" /></p>
                    <p>✗ <Math tex="\{1, 1, 2, 3\}" /> ← 1 出现了两次，不行！</p>
                  </div>
                </Collapsible>

                <Collapsible title="③ 无序性 —— 没有先后顺序" storageKey="sets:prop-unordered">
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="text-blue-700">元素的排列顺序无所谓，只要元素相同就是同一个集合。</p>
                    </div>
                    <p><Math tex="\{1, 2, 3\} = \{3, 1, 2\} = \{2, 3, 1\}" /> ← 都是同一个集合</p>
                  </div>
                </Collapsible>

                <CalloutCard variant="warning" title="高考陷阱">
                  <p>题目说“集合 A = &#123;a, b, c&#125;”，则 a、b、c <strong>一定互不相等</strong>。互异性经常藏着出题陷阱。</p>
                </CalloutCard>

                <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
                  <p className="font-bold text-gray-800">含参集合 + 互异性（高考经典题型）</p>
                  <p className="text-gray-700">例：集合 <Math tex="A = \{a,\; a^2 + a,\; -1\}" />，求 a 的取值范围。</p>
                  <div className="pl-3 border-l-2 border-blue-300 space-y-2 text-xs">
                    <div>
                      <p className="text-blue-600 font-bold">思路：三个元素必须互不相同</p>
                      <div className="bg-white rounded-lg p-2 border mt-1 space-y-1">
                        <p>① <Math tex="a \neq a^2 + a" /> → <Math tex="a^2 \neq 0" /> → <strong>a ≠ 0</strong></p>
                        <p>② <Math tex="a \neq -1" /> → <strong>a ≠ -1</strong></p>
                        <p>③ <Math tex="a^2 + a \neq -1" /> → <Math tex="a^2 + a + 1 \neq 0" /> → 判别式 <Math tex="\Delta = 1 - 4 = -3 < 0" />，方程无实根 → <strong>自动满足</strong></p>
                      </div>
                    </div>
                    <p className="text-gray-800">答案：<strong><Math tex="a \neq 0" /> 且 <Math tex="a \neq -1" /></strong>（即 a 是除 0 和 -1 以外的任意实数）</p>
                  </div>
                  <div className="bg-[#F5E6D3] rounded-xl p-3 text-xs mt-2">
                    <p className="font-bold text-[#7A5C3E]">做题套路：列出所有"两两不等"的条件 → 逐个解 → 取交集</p>
                  </div>
                </div>

                <PageBreak />
                <PracticeCard questions={setsPractice1} explanations={setsExplanations} />
              </div>
            </Collapsible>
          </section>

          <PageBreak label="表示方法" />

          {/* Section 3: 表示方法 */}
          <section id="sets-repr" className="mb-6 scroll-mt-4">
            <Collapsible title="三、集合的表示方法" defaultOpen storageKey="sets:representation" headerExtra={<SpeakButton text={setsNarrations.representation} />}>
              <p className="text-xs text-blue-600 mb-3">🎯 学完你能：用列举法和描述法表示集合，读懂 Venn 图。</p>
              <div className="space-y-3 text-sm text-gray-700">
                <Collapsible title="方法一：列举法 —— 直接写出来" storageKey="sets:rep-enumerate">
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="text-blue-700">把元素一个个写在大括号里，用逗号隔开。</p>
                      <p className="text-blue-600 text-xs mt-1">适合：元素不多，或者有明显规律的情况。</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 space-y-1">
                      <p><Math tex="A = \{1, 2, 3, 4, 5\}" /></p>
                      <p><Math tex="B = \{0, 2, 4, 6, 8, \ldots\}" /> ← 用省略号表示无限多</p>
                    </div>
                  </div>
                </Collapsible>

                <Collapsible title="方法二：描述法 —— 用条件描述" storageKey="sets:rep-describe">
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="text-blue-700">格式：<Math tex="\{x \mid x \text{ 满足的条件}\}" /></p>
                      <p className="text-blue-600 text-xs mt-1">读法：所有满足某某条件的 x 组成的集合</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 space-y-1">
                      <p><Math tex="\{x \mid x > 3\}" /> → 所有大于 3 的数</p>
                      <p><Math tex="\{x \mid x^2 - 4 = 0\}" /> → 其实就是 <Math tex="\{-2, 2\}" /></p>
                      <p><Math tex="\{(x,y) \mid y = 2x\}" /> → 直线 y=2x 上的所有<strong>点</strong></p>
                    </div>
                    <CalloutCard variant="warning" title="重要区分">
                      <p><Math tex="\{x \mid x^2 - 4 = 0\}" /> 是<strong>数的集合</strong> = <Math tex="\{-2, 2\}" /></p>
                      <p><Math tex="\{(x,y) \mid y = x^2\}" /> 是<strong>点的集合</strong>（坐标点）</p>
                      <p>看清竖线前面是 x 还是 (x,y)！</p>
                    </CalloutCard>
                  </div>
                </Collapsible>

                {/* 列举法 vs 描述法 对比 */}
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-200 px-3 py-2 text-center"></th>
                        <th className="border border-gray-200 px-3 py-2 text-center">列举法</th>
                        <th className="border border-gray-200 px-3 py-2 text-center">描述法</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 px-3 py-2 font-bold text-center">写法</td>
                        <td className="border border-gray-200 px-3 py-2 text-center"><Math tex="\{1, 2, 3\}" /></td>
                        <td className="border border-gray-200 px-3 py-2 text-center"><Math tex="\{x \mid 1 \leq x \leq 3, x \in \mathbb{Z}\}" /></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-3 py-2 font-bold text-center">适用</td>
                        <td className="border border-gray-200 px-3 py-2 text-center">元素<strong>有限且少</strong></td>
                        <td className="border border-gray-200 px-3 py-2 text-center">元素<strong>无限或多</strong></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-3 py-2 font-bold text-center">优点</td>
                        <td className="border border-gray-200 px-3 py-2 text-center">直观，一眼看出元素</td>
                        <td className="border border-gray-200 px-3 py-2 text-center">简洁，能表达无限集</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-3 py-2 font-bold text-center">例</td>
                        <td className="border border-gray-200 px-3 py-2 text-center"><Math tex="\{2, 4, 6, 8\}" /></td>
                        <td className="border border-gray-200 px-3 py-2 text-center"><Math tex="\{x \mid x = 2k, 1 \leq k \leq 4\}" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-gray-50 rounded-lg p-3 space-y-1">
                  <p className="font-bold text-gray-800">互转练习：</p>
                  <p>列举 → 描述：<Math tex="\{1, 3, 5, 7, 9\}" /> = <Math tex="\{x \mid x = 2k-1, 1 \leq k \leq 5\}" />（10以内奇数）</p>
                  <p>描述 → 列举：<Math tex="\{x \mid x^2 - 5x + 6 = 0\}" /> = <Math tex="\{2, 3\}" /></p>
                  <p>描述 → 列举：<Math tex="\{x \mid x \text{ 是质数且 } x < 10\}" /> = <Math tex="\{2, 3, 5, 7\}" /></p>
                </div>

                <div className="bg-[#F5E6D3] rounded-xl p-3 text-sm">
                  <p className="font-bold text-[#7A5C3E]">做题口诀：元素少就列举，元素多就描述，两种方法表达的是同一个集合！</p>
                </div>

                <PageBreak />
                <Collapsible title="方法三：Venn 图（韦恩图）—— 画个圈" storageKey="sets:rep-venn">
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="text-blue-700">用封闭曲线（通常是圆或椭圆）表示集合，直观展示集合间的关系。</p>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      {/* A ⊆ U 子集 */}
                      <div className="bg-gray-50 rounded-xl p-3">
                        <p className="text-center font-bold text-gray-700 text-sm mb-2"><Math tex="A \subseteq U" />（子集）</p>
                        <svg viewBox="0 0 180 130" className="w-full">
                          <rect x="4" y="4" width="172" height="122" rx="8" fill="#f0f9ff" stroke="#93c5fd" strokeWidth="1.5" />
                          <text x="160" y="20" fontSize="14" fill="#3b82f6" fontWeight="bold">U</text>
                          <circle cx="80" cy="72" r="38" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
                          <text x="80" y="78" fontSize="18" fill="#1d4ed8" fontWeight="bold" textAnchor="middle">A</text>
                        </svg>
                      </div>

                      {/* A ∩ B 交集 */}
                      <div className="bg-gray-50 rounded-xl p-3">
                        <p className="text-center font-bold text-gray-700 text-sm mb-2"><Math tex="A \cap B" />（交集）</p>
                        <svg viewBox="0 0 180 130" className="w-full">
                          <rect x="4" y="4" width="172" height="122" rx="8" fill="#f0f9ff" stroke="#93c5fd" strokeWidth="1.5" />
                          <text x="160" y="20" fontSize="14" fill="#3b82f6" fontWeight="bold">U</text>
                          <circle cx="65" cy="70" r="36" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" fillOpacity="0.5" />
                          <circle cx="110" cy="70" r="36" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5" fillOpacity="0.5" />
                          <clipPath id="vClipA"><circle cx="65" cy="70" r="36" /></clipPath>
                          <circle cx="110" cy="70" r="36" fill="#bbf7d0" fillOpacity="0.7" clipPath="url(#vClipA)" />
                          <text x="48" y="76" fontSize="16" fill="#1d4ed8" fontWeight="bold" textAnchor="middle">A</text>
                          <text x="127" y="76" fontSize="16" fill="#b45309" fontWeight="bold" textAnchor="middle">B</text>
                        </svg>
                      </div>

                      {/* A ∪ B 并集 */}
                      <div className="bg-gray-50 rounded-xl p-3">
                        <p className="text-center font-bold text-gray-700 text-sm mb-2"><Math tex="A \cup B" />（并集）</p>
                        <svg viewBox="0 0 180 130" className="w-full">
                          <rect x="4" y="4" width="172" height="122" rx="8" fill="#f0f9ff" stroke="#93c5fd" strokeWidth="1.5" />
                          <text x="160" y="20" fontSize="14" fill="#3b82f6" fontWeight="bold">U</text>
                          <circle cx="65" cy="70" r="36" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5" fillOpacity="0.6" />
                          <circle cx="110" cy="70" r="36" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5" fillOpacity="0.6" />
                          <text x="48" y="76" fontSize="16" fill="#15803d" fontWeight="bold" textAnchor="middle">A</text>
                          <text x="127" y="76" fontSize="16" fill="#15803d" fontWeight="bold" textAnchor="middle">B</text>
                        </svg>
                      </div>

                      {/* ∁ᵤA 补集 */}
                      <div className="bg-gray-50 rounded-xl p-3">
                        <p className="text-center font-bold text-gray-700 text-sm mb-2"><Math tex="\complement_U A" />（补集）</p>
                        <svg viewBox="0 0 180 130" className="w-full">
                          <rect x="4" y="4" width="172" height="122" rx="8" fill="#fde68a" stroke="#f59e0b" strokeWidth="1.5" />
                          <text x="160" y="20" fontSize="14" fill="#b45309" fontWeight="bold">U</text>
                          <circle cx="80" cy="70" r="36" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.5" />
                          <text x="80" y="76" fontSize="18" fill="#3b82f6" fontWeight="bold" textAnchor="middle">A</text>
                          <text x="150" y="115" fontSize="14" fill="#b45309" fontWeight="bold" textAnchor="middle">补集</text>
                        </svg>
                      </div>

                      {/* A ∩ B = ∅ 不相交 */}
                      <div className="bg-gray-50 rounded-xl p-3">
                        <p className="text-center font-bold text-gray-700 text-sm mb-2"><Math tex="A \cap B = \varnothing" />（不相交）</p>
                        <svg viewBox="0 0 180 130" className="w-full">
                          <rect x="4" y="4" width="172" height="122" rx="8" fill="#f0f9ff" stroke="#93c5fd" strokeWidth="1.5" />
                          <text x="160" y="20" fontSize="14" fill="#3b82f6" fontWeight="bold">U</text>
                          <circle cx="55" cy="70" r="30" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" fillOpacity="0.5" />
                          <circle cx="130" cy="70" r="30" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5" fillOpacity="0.5" />
                          <text x="55" y="76" fontSize="16" fill="#1d4ed8" fontWeight="bold" textAnchor="middle">A</text>
                          <text x="130" y="76" fontSize="16" fill="#b45309" fontWeight="bold" textAnchor="middle">B</text>
                        </svg>
                      </div>

                      {/* A ⊂ B 真子集 */}
                      <div className="bg-gray-50 rounded-xl p-3">
                        <p className="text-center font-bold text-gray-700 text-sm mb-2"><Math tex="A \subset B" />（真子集）</p>
                        <svg viewBox="0 0 180 130" className="w-full">
                          <rect x="4" y="4" width="172" height="122" rx="8" fill="#f0f9ff" stroke="#93c5fd" strokeWidth="1.5" />
                          <text x="160" y="20" fontSize="14" fill="#3b82f6" fontWeight="bold">U</text>
                          <circle cx="85" cy="68" r="42" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5" fillOpacity="0.5" />
                          <circle cx="75" cy="72" r="22" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" fillOpacity="0.7" />
                          <text x="75" y="78" fontSize="14" fill="#1d4ed8" fontWeight="bold" textAnchor="middle">A</text>
                          <text x="112" y="52" fontSize="16" fill="#b45309" fontWeight="bold" textAnchor="middle">B</text>
                        </svg>
                      </div>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-200 px-2 py-1.5 text-center">图形</th>
                            <th className="border border-gray-200 px-2 py-1.5 text-center">符号</th>
                            <th className="border border-gray-200 px-2 py-1.5 text-center">含义</th>
                            <th className="border border-gray-200 px-2 py-1.5 text-center">阴影区域</th>
                          </tr>
                        </thead>
                        <tbody className="text-xs">
                          <tr>
                            <td className="border border-gray-200 px-2 py-1.5 text-center">A 在 U 里</td>
                            <td className="border border-gray-200 px-2 py-1.5 text-center"><Math tex="A \subseteq U" /></td>
                            <td className="border border-gray-200 px-2 py-1.5">A 是全集 U 的子集</td>
                            <td className="border border-gray-200 px-2 py-1.5 text-center text-blue-600">圆 A 内部</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-200 px-2 py-1.5 text-center">两圆重叠</td>
                            <td className="border border-gray-200 px-2 py-1.5 text-center"><Math tex="A \cap B" /></td>
                            <td className="border border-gray-200 px-2 py-1.5">A 和 B 的<strong>公共部分</strong></td>
                            <td className="border border-gray-200 px-2 py-1.5 text-center text-green-600">重叠区域</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-200 px-2 py-1.5 text-center">两圆合在一起</td>
                            <td className="border border-gray-200 px-2 py-1.5 text-center"><Math tex="A \cup B" /></td>
                            <td className="border border-gray-200 px-2 py-1.5">A 和 B <strong>合起来</strong>的全部</td>
                            <td className="border border-gray-200 px-2 py-1.5 text-center text-green-600">两圆覆盖的所有区域</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-200 px-2 py-1.5 text-center">圆外部分</td>
                            <td className="border border-gray-200 px-2 py-1.5 text-center"><Math tex="\complement_U A" /></td>
                            <td className="border border-gray-200 px-2 py-1.5">U 中<strong>不属于</strong> A 的部分</td>
                            <td className="border border-gray-200 px-2 py-1.5 text-center text-amber-600">圆外、矩形内</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-200 px-2 py-1.5 text-center">两圆不接触</td>
                            <td className="border border-gray-200 px-2 py-1.5 text-center"><Math tex="A \cap B = \varnothing" /></td>
                            <td className="border border-gray-200 px-2 py-1.5">A 和 B <strong>没有公共元素</strong></td>
                            <td className="border border-gray-200 px-2 py-1.5 text-center text-gray-500">无重叠</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-200 px-2 py-1.5 text-center">小圆在大圆里</td>
                            <td className="border border-gray-200 px-2 py-1.5 text-center"><Math tex="A \subset B" /></td>
                            <td className="border border-gray-200 px-2 py-1.5">A 的元素 B <strong>都有</strong>，但 B 比 A 多</td>
                            <td className="border border-gray-200 px-2 py-1.5 text-center text-blue-600">小圆在大圆内部</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="bg-[#F5E6D3] rounded-xl p-3 text-sm">
                      <p className="font-bold text-[#7A5C3E]">做题技巧：遇到集合运算题，先画 Venn 图 → 标数据 → 阴影部分就是答案。</p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                      <p className="font-bold text-gray-800">实战演示：</p>
                      <p>设 <Math tex="U = \{1,2,3,4,5,6,7\}" />，<Math tex="A = \{1,3,5,7\}" />，<Math tex="B = \{3,4,5,6\}" /></p>
                      <div className="grid grid-cols-3 gap-2 text-sm">
                        <div className="text-center">
                          <p className="text-blue-600 font-bold"><Math tex="A \cap B" /></p>
                          <p>= <Math tex="\{3, 5\}" /></p>
                          <p className="text-xs text-gray-500">A 和 B 都有的</p>
                        </div>
                        <div className="text-center">
                          <p className="text-green-600 font-bold"><Math tex="A \cup B" /></p>
                          <p>= <Math tex="\{1,3,4,5,6,7\}" /></p>
                          <p className="text-xs text-gray-500">合在一起全部</p>
                        </div>
                        <div className="text-center">
                          <p className="text-amber-600 font-bold"><Math tex="\complement_U A" /></p>
                          <p>= <Math tex="\{2, 4, 6\}" /></p>
                          <p className="text-xs text-gray-500">U 中 A 没有的</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Collapsible>

                <PageBreak />
                <Collapsible title="方法四：区间表示法 —— 数轴上的一段" storageKey="sets:rep-interval">
                  <div className="space-y-3 text-gray-700">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="text-blue-700">当集合是<strong>数轴上连续的一段</strong>时，可以用区间来表示，比描述法更简洁。</p>
                      <p className="text-blue-600 text-sm mt-1">后面做交集、并集、补集运算时，到处都用区间，必须学会！</p>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-200 px-2 py-1.5 text-center">名称</th>
                            <th className="border border-gray-200 px-2 py-1.5 text-center">符号</th>
                            <th className="border border-gray-200 px-2 py-1.5 text-center">意思</th>
                            <th className="border border-gray-200 px-2 py-1.5 text-center">端点</th>
                          </tr>
                        </thead>
                        <tbody className="text-sm">
                          <tr>
                            <td className="border border-gray-200 px-2 py-1.5 text-center">开区间</td>
                            <td className="border border-gray-200 px-2 py-1.5 text-center"><Math tex="(a, b)" /></td>
                            <td className="border border-gray-200 px-2 py-1.5"><Math tex="a < x < b" /></td>
                            <td className="border border-gray-200 px-2 py-1.5 text-center text-red-600">两头都<strong>不含</strong></td>
                          </tr>
                          <tr>
                            <td className="border border-gray-200 px-2 py-1.5 text-center">闭区间</td>
                            <td className="border border-gray-200 px-2 py-1.5 text-center"><Math tex="[a, b]" /></td>
                            <td className="border border-gray-200 px-2 py-1.5"><Math tex="a \leq x \leq b" /></td>
                            <td className="border border-gray-200 px-2 py-1.5 text-center text-blue-600">两头都<strong>含</strong></td>
                          </tr>
                          <tr>
                            <td className="border border-gray-200 px-2 py-1.5 text-center">半开半闭</td>
                            <td className="border border-gray-200 px-2 py-1.5 text-center"><Math tex="[a, b)" /> 或 <Math tex="(a, b]" /></td>
                            <td className="border border-gray-200 px-2 py-1.5"><Math tex="a \leq x < b" /> 或 <Math tex="a < x \leq b" /></td>
                            <td className="border border-gray-200 px-2 py-1.5 text-center">一头含一头不含</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-200 px-2 py-1.5 text-center">无穷区间</td>
                            <td className="border border-gray-200 px-2 py-1.5 text-center"><Math tex="(-\infty, a)" /> 或 <Math tex="[a, +\infty)" /></td>
                            <td className="border border-gray-200 px-2 py-1.5">x {'<'} a 或 x ≥ a</td>
                            <td className="border border-gray-200 px-2 py-1.5 text-center text-red-600">∞ 那头<strong>永远不含</strong></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="bg-[#F5E6D3] rounded-xl p-3 text-sm space-y-1">
                      <p className="font-bold text-[#7A5C3E]">一句话记住：</p>
                      <p className="text-[#7A5C3E]"><strong>小括号 ( ) = 不含端点</strong>（空心圆 ○）</p>
                      <p className="text-[#7A5C3E]"><strong>中括号 [ ] = 含端点</strong>（实心圆 ●）</p>
                      <p className="text-[#7A5C3E]"><strong>∞ 永远用小括号</strong>（无穷大不是具体的数，不能"含"）</p>
                    </div>

                    <div className="bg-white rounded-lg border p-3">
                      <p className="font-bold text-sm mb-2">数轴上长什么样：</p>
                      <svg viewBox="0 0 340 110" className="w-full">
                        <line x1="20" y1="20" x2="320" y2="20" stroke="#d1d5db" strokeWidth="1" />
                        <line x1="20" y1="50" x2="320" y2="50" stroke="#d1d5db" strokeWidth="1" />
                        <line x1="20" y1="80" x2="320" y2="80" stroke="#d1d5db" strokeWidth="1" />
                        <line x1="100" y1="14" x2="100" y2="86" stroke="#e5e7eb" strokeWidth="1" />
                        <line x1="240" y1="14" x2="240" y2="56" stroke="#e5e7eb" strokeWidth="1" />
                        <text x="100" y="104" fontSize="10" fill="#374151" textAnchor="middle">a</text>
                        <text x="240" y="104" fontSize="10" fill="#374151" textAnchor="middle">b</text>
                        {/* (a, b) open */}
                        <line x1="100" y1="20" x2="240" y2="20" stroke="#3b82f6" strokeWidth="3" />
                        <circle cx="100" cy="20" r="3.5" fill="white" stroke="#3b82f6" strokeWidth="1.5" />
                        <circle cx="240" cy="20" r="3.5" fill="white" stroke="#3b82f6" strokeWidth="1.5" />
                        <text x="170" y="14" fontSize="10" fill="#3b82f6" fontWeight="bold" textAnchor="middle">(a, b) 开区间</text>
                        {/* [a, b] closed */}
                        <line x1="100" y1="50" x2="240" y2="50" stroke="#16a34a" strokeWidth="3" />
                        <circle cx="100" cy="50" r="3.5" fill="#16a34a" />
                        <circle cx="240" cy="50" r="3.5" fill="#16a34a" />
                        <text x="170" y="44" fontSize="10" fill="#16a34a" fontWeight="bold" textAnchor="middle">[a, b] 闭区间</text>
                        {/* (-∞, b) */}
                        <line x1="20" y1="80" x2="240" y2="80" stroke="#ef4444" strokeWidth="3" />
                        <circle cx="240" cy="80" r="3.5" fill="white" stroke="#ef4444" strokeWidth="1.5" />
                        <text x="22" y="74" fontSize="9" fill="#ef4444" fontWeight="bold">← -∞</text>
                        <text x="170" y="74" fontSize="10" fill="#ef4444" fontWeight="bold" textAnchor="middle">(-∞, b)</text>
                      </svg>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-3 space-y-1 text-sm">
                      <p className="font-bold">转换练习：</p>
                      <p><Math tex="\{x \mid 1 < x \leq 5\}" /> = <strong>(1, 5]</strong>　左不含用(，右含用]</p>
                      <p><Math tex="\{x \mid x \geq 3\}" /> = <strong>[3, +∞)</strong>　左含用[，∞用)</p>
                      <p><Math tex="\{x \mid x < 0\}" /> = <strong>(-∞, 0)</strong>　∞用(，右不含用)</p>
                      <p><Math tex="\{x \mid -2 \leq x \leq 4\}" /> = <strong>[-2, 4]</strong>　两头都含用[ ]</p>
                      <p><Math tex="\{x \mid x > 1\}" /> = <strong>(1, +∞)</strong>　左不含用(，∞用)</p>
                    </div>

                    <CalloutCard variant="warning" title="高考易错">
                      <p><strong>区间只能表示连续的数</strong>，不能表示离散的点！</p>
                      <p><Math tex="\{1, 2, 3\}" /> <strong>不能</strong>写成 [1, 3]（因为 [1,3] 包含 1.5 等小数）</p>
                      <p><Math tex="x \leq -2 \text{ 或 } x \geq 3" /> 要写成 <Math tex="(-\infty, -2] \cup [3, +\infty)" />，两段用 <strong>∪</strong> 连接</p>
                    </CalloutCard>
                  </div>
                </Collapsible>

                <PageBreak />
                <PracticeCard questions={setsPractice2} explanations={setsExplanations} />
              </div>
            </Collapsible>
          </section>

          <PageBreak label="常见数集" />

          {/* Section 4: 常见数集 */}
          <section id="sets-numsets" className="mb-6 scroll-mt-4">
            <Collapsible title="四、常见的数集（背下来）" defaultOpen storageKey="sets:number-sets" headerExtra={<SpeakButton text={setsNarrations.numberSets} />}>
              <p className="text-xs text-blue-600 mb-3">🎯 学完你能：记住 N, N*, Z, Q, R 各代表什么，判断元素属于哪个数集。</p>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-200 px-3 py-2 text-center">符号</th>
                        <th className="border border-gray-200 px-3 py-2 text-left">名称</th>
                        <th className="border border-gray-200 px-3 py-2 text-left">包含什么</th>
                        <th className="border border-gray-200 px-3 py-2 text-left">例子</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['\\mathbb{N}', '自然数集', '0, 1, 2, 3, …', '0 ∈ N ✓'],
                        ['\\mathbb{N}^*', '正整数集', '1, 2, 3, …（不含0）', '0 ∉ N* ✓'],
                        ['\\mathbb{Z}', '整数集', '…, -2, -1, 0, 1, 2, …', '-3 ∈ Z ✓'],
                        ['\\mathbb{Q}', '有理数集', '所有分数和整数', '⅓ ∈ Q ✓'],
                        ['\\mathbb{R}', '实数集', '数轴上所有点', '√2 ∈ R ✓'],
                      ].map(([sym, name, desc, ex], idx) => (
                        <tr key={idx} className="hover:bg-blue-50">
                          <td className="border border-gray-200 px-3 py-2 text-center"><Math tex={sym} /></td>
                          <td className="border border-gray-200 px-3 py-2">{name}</td>
                          <td className="border border-gray-200 px-3 py-2 text-gray-600">{desc}</td>
                          <td className="border border-gray-200 px-3 py-2 text-gray-700 text-xs">{ex}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <p className="font-bold text-purple-800 mb-2">🧠 记忆口诀：「N 自然，Z 整数，Q 商（分数），R 实数」</p>
                  <div className="space-y-1 text-sm text-purple-700">
                    <p><strong>N</strong> = <strong>N</strong>atural → 自然数（含 0）。N 加星号 <Math tex="\mathbb{N}^*" /> 去掉 0</p>
                    <p><strong>Z</strong> = 德语 <strong>Z</strong>ahlen（数）→ 整数。记法：<strong>Z = 整(Zhěng)</strong> 的拼音首字母</p>
                    <p><strong>Q</strong> = <strong>Q</strong>uotient（商）→ 有理数 = 能写成分数的数</p>
                    <p><strong>R</strong> = <strong>R</strong>eal → 实数 = 数轴上所有的点</p>
                  </div>
                  <div className="mt-3 bg-purple-100 rounded-lg p-3">
                    <p className="font-bold text-purple-800 text-xs mb-1">包含关系（从小到大，一层套一层）：</p>
                    <p className="text-center text-purple-700 font-mono"><Math tex="\mathbb{N}^* \subset \mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}" /></p>
                    <p className="text-xs text-purple-600 text-center mt-1">口诀：<strong>正→自→整→有→实</strong>，每一层都包含前面所有的</p>
                  </div>
                </div>

                <CalloutCard variant="warning" title="高考知识点">
                  <p><strong>0 是自然数！</strong> <Math tex="0 \in \mathbb{N}" /> ✓，<Math tex="0 \notin \mathbb{N}^*" /> ✓</p>
                </CalloutCard>

                <PracticeCard questions={setsPractice3} explanations={setsExplanations} />
              </div>
            </Collapsible>
          </section>

          <PageBreak label="集合间的关系" />

          {/* Section 5: 集合间的关系 */}
          <section id="sets-subset" className="mb-6 scroll-mt-4">
            <Collapsible title="五、集合间的关系" defaultOpen storageKey="sets:relations" headerExtra={<SpeakButton text={setsNarrations.subsets} />}>
              <p className="text-sm text-blue-600 mb-3">🎯 学完你能：判断子集和真子集关系，计算子集个数，记住空集铁律。</p>
              <div className="space-y-4 text-gray-700">

                <div className="bg-gray-50 rounded-lg p-4">
                  <p>前面学了「<strong>元素 ∈ 集合</strong>」— 判断一个东西在不在袋子里。</p>
                  <p className="mt-1">现在要学的是：<strong>两个袋子之间</strong>是什么关系？</p>
                  <p className="mt-2 text-gray-500 text-sm">就三种可能：一样大 / 一个装在另一个里面 / 没关系。往下一个一个看 ↓</p>
                </div>

                {/* ───── ① 集合相等 ───── */}
                <div className="border-l-4 border-blue-400 pl-4 space-y-2">
                  <p className="font-bold text-blue-700 text-base">① 集合相等：两个袋子里东西一模一样</p>
                  <p>不管顺序怎么排、写法是什么，只要<strong>元素完全相同</strong>就相等：</p>
                  <div className="bg-white rounded-lg border p-3 space-y-1">
                    <p><Math tex="\{1, 2, 3\} = \{3, 1, 2\}" /> ✓　顺序不影响</p>
                    <p><Math tex="\{1, 1, 2\} = \{1, 2\}" /> ✓　重复的自动去掉</p>
                    <p><Math tex="\{x \mid x^2=1\} = \{-1, 1\}" /> ✓　描述法和列举法可以相等</p>
                  </div>
                  <p className="text-gray-500 text-sm">就这么简单，打开两个袋子看看，东西一样就相等。</p>
                </div>

                {/* ───── ② 子集 ───── */}
                <div className="border-l-4 border-green-400 pl-4 space-y-2">
                  <p className="font-bold text-green-700 text-base">② 子集 ⊆：小袋子装在大袋子里</p>
                  <p>如果 A 的<strong>每一个</strong>元素都能在 B 里找到 → A 是 B 的子集，写作 <Math tex="A \subseteq B" /></p>

                  <div className="bg-white rounded-lg border p-3">
                    <p className="font-bold mb-2">怎么判断？逐个检查 A 的元素：</p>
                    <div className="space-y-2">
                      <div className="bg-green-50 rounded-lg p-2">
                        <p className="text-green-700 font-bold text-sm mb-1">A = &#123;1, 2&#125;，B = &#123;1, 2, 3&#125;</p>
                        <p className="text-sm">1 在 B 里？<strong className="text-green-600">✓</strong>　2 在 B 里？<strong className="text-green-600">✓</strong>　→ 全在！<strong className="text-green-600">A ⊆ B ✓</strong></p>
                      </div>
                      <div className="bg-red-50 rounded-lg p-2">
                        <p className="text-red-600 font-bold text-sm mb-1">A = &#123;1, 4&#125;，B = &#123;1, 2, 3&#125;</p>
                        <p className="text-sm">1 在 B 里？<strong className="text-green-600">✓</strong>　4 在 B 里？<strong className="text-red-500">✗</strong>　→ 有一个不在！<strong className="text-red-500">A ⊆ B ✗</strong></p>
                      </div>
                    </div>
                  </div>

                  <CalloutCard variant="warning" title="关键点：自己是自己的子集！" icon={null}>
                    <p><Math tex="\{1,2,3\} \subseteq \{1,2,3\}" /> ✓ — 每个元素当然都在自己里面</p>
                  </CalloutCard>

                  <p className="text-gray-500 text-sm">生活类比：你班的男同学 ⊆ 你班的所有同学（男同学全在班里）</p>
                </div>

                {/* ───── ③ 真子集 ───── */}
                <div className="border-l-4 border-purple-400 pl-4 space-y-2">
                  <p className="font-bold text-purple-700 text-base">③ 真子集 ⊊：子集 + 不相等</p>
                  <p>在②的基础上再加一个条件：A 全在 B 里面，<strong>而且 B 还多出来一些元素</strong>。</p>

                  <div className="bg-white rounded-lg border p-3 space-y-1">
                    <p><Math tex="\{1, 2\} \subsetneq \{1, 2, 3\}" /> ✓　A 全在 B 里，B 多了个 3</p>
                    <p><Math tex="\{1, 2, 3\} \subsetneq \{1, 2, 3\}" /> ✗　完全一样，没有「多出来的」→ 不是真子集</p>
                  </div>

                  <div className="bg-[#F5E6D3] rounded-xl p-3">
                    <p className="font-bold text-[#7A5C3E] text-sm">一句话区分：</p>
                    <p className="text-[#7A5C3E] text-sm"><strong>子集 ⊆</strong>：全在里面就行（<strong>允许</strong>一模一样）</p>
                    <p className="text-[#7A5C3E] text-sm"><strong>真子集 ⊊</strong>：全在里面，而且<strong>不能</strong>一模一样（B 必须比 A 大）</p>
                  </div>
                </div>

                <PageBreak />
                {/* ───── ④ 空集 ───── */}
                <div className="border-l-4 border-red-400 pl-4 space-y-2">
                  <p className="font-bold text-red-700 text-base">④ 空集 ∅：空袋子的特殊规矩</p>
                  <p><Math tex="\varnothing" /> 就是一个<strong>什么都没有</strong>的集合，空袋子。</p>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
                    <p className="font-bold text-blue-800 mb-2">空集铁律（必须背！高考必考）</p>
                    <p className="text-blue-700"><Math tex="\varnothing \subseteq A" />　空集是<strong>任何</strong>集合的子集</p>
                    <p className="text-blue-700 mt-1"><Math tex="\varnothing \subsetneq A" />　只要 A 不是空集，空集就是 A 的真子集</p>
                  </div>

                  <div className="bg-white rounded-lg border p-3 text-sm space-y-1">
                    <p className="font-bold">为什么空集是任何集合的子集？</p>
                    <p>子集的定义是「A 的<strong>每个</strong>元素都在 B 里」。</p>
                    <p>空集<strong>没有元素</strong>，所以这个条件自动满足（没有元素能违反条件）。</p>
                    <p className="text-gray-500">就好像说"这个空教室里的<strong>每个人</strong>都会飞" — 没人在里面，所以这句话不算错。</p>
                  </div>

                  <CalloutCard variant="warning" title="高考经典陷阱">
                    <p>题目说 A ⊆ B，很多人忘了 <strong>A 可能是 ∅</strong>！</p>
                    <p>比如 <Math tex="A = \{x \mid x^2+1=0\}" />，这个方程无实数解 → A = ∅</p>
                    <p><strong>做子集题，第一步永远是：别忘了空集！</strong></p>
                  </CalloutCard>

                  <CalloutCard variant="danger" title="∅ 和 &#123;0&#125; 不一样！" icon={null}>
                    <p>∅ 里面<strong>什么都没有</strong>（0 个元素）</p>
                    <p>&#123;0&#125; 里面<strong>有一个元素 0</strong>（1 个元素）</p>
                  </CalloutCard>
                </div>

                {/* ───── ⑤ 子集个数 ───── */}
                <div className="border-l-4 border-amber-400 pl-4 space-y-2">
                  <p className="font-bold text-amber-700 text-base">⑤ 子集个数公式</p>
                  <p>一个有 <strong>n 个元素</strong>的集合，它的子集个数有规律：</p>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <div className="grid grid-cols-[auto_auto_auto] gap-x-2 gap-y-1 text-blue-700 text-sm w-fit">
                      <span className="text-right font-bold">子集</span><span>=</span><span><Math tex="2^n" /> 个</span>
                      <span className="text-right font-bold">真子集</span><span>=</span><span><Math tex="2^n - 1" /> 个（去掉自身）</span>
                      <span className="text-right font-bold">非空子集</span><span>=</span><span><Math tex="2^n - 1" /> 个（去掉 ∅）</span>
                      <span className="text-right font-bold">非空真子集</span><span>=</span><span><Math tex="2^n - 2" /> 个（去掉自身和 ∅）</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg border p-3 text-sm">
                    <p className="font-bold mb-1">例：A = &#123;a, b, c&#125;（3 个元素）</p>
                    <p>全部子集 = <Math tex="2^3 = 8" /> 个：∅, &#123;a&#125;, &#123;b&#125;, &#123;c&#125;, &#123;a,b&#125;, &#123;a,c&#125;, &#123;b,c&#125;, &#123;a,b,c&#125;</p>
                    <p className="mt-1">真子集 = 8 - 1 = <strong>7</strong> 个（去掉 &#123;a,b,c&#125; 自己）</p>
                    <p>非空子集 = 8 - 1 = <strong>7</strong> 个（去掉 ∅）</p>
                    <p>非空真子集 = 8 - 2 = <strong>6</strong> 个（两头都去掉）</p>
                  </div>

                  <div className="bg-[#F5E6D3] rounded-xl p-3 text-sm">
                    <p className="font-bold text-[#7A5C3E]">为什么「真子集」和「非空子集」个数一样（都是 2ⁿ-1）？</p>
                    <p className="text-[#7A5C3E] mt-1">真子集 = 全部 - <strong>自身</strong>（去掉最大的那个）</p>
                    <p className="text-[#7A5C3E]">非空子集 = 全部 - <strong>∅</strong>（去掉最小的那个）</p>
                    <p className="text-[#7A5C3E]">各减 1，当然一样多！</p>
                  </div>
                </div>

                <PageBreak />
                {/* ───── ⑥ A⊆B 参数题 ───── */}
                <div className="border-l-4 border-indigo-400 pl-4 space-y-2">
                  <p className="font-bold text-indigo-700 text-base">⑥ A⊆B 求参数范围（高考经典题型）</p>
                  <p>学会了子集的概念，现在看怎么用它来<strong>做题</strong>。</p>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm">
                    <p className="font-bold text-blue-800">核心思路：A ⊆ B 就是 A 完全在 B 里面。画数轴，看端点！</p>
                  </div>

                  <div className="bg-white rounded-lg border p-3 text-sm space-y-2">
                    <p className="font-bold">例：<Math tex="A = \{x \mid -2 < x < 4\}" />，<Math tex="B = \{x \mid x < a\}" />，若 A ⊆ B，求 a</p>
                    <div className="pl-3 border-l-2 border-blue-300 space-y-2">
                      <div>
                        <p className="text-blue-600 font-bold">第①步：画数轴</p>
                        <div className="bg-gray-50 rounded-lg p-2 border mt-1">
                          <svg viewBox="0 0 360 80" className="w-full">
                            <line x1="20" y1="25" x2="340" y2="25" stroke="#d1d5db" strokeWidth="1" />
                            <line x1="20" y1="50" x2="340" y2="50" stroke="#d1d5db" strokeWidth="1" />
                            <line x1="80" y1="19" x2="80" y2="56" stroke="#6b7280" strokeWidth="1" />
                            <line x1="240" y1="19" x2="240" y2="31" stroke="#6b7280" strokeWidth="1" />
                            <line x1="280" y1="44" x2="280" y2="56" stroke="#6b7280" strokeWidth="1" />
                            <text x="80" y="72" fontSize="10" fill="#374151" textAnchor="middle">-2</text>
                            <text x="240" y="72" fontSize="10" fill="#374151" textAnchor="middle">4</text>
                            <text x="280" y="72" fontSize="10" fill="#374151" textAnchor="middle">a</text>
                            <line x1="80" y1="25" x2="240" y2="25" stroke="#2563eb" strokeWidth="3" />
                            <circle cx="80" cy="25" r="3" fill="white" stroke="#2563eb" strokeWidth="1.5" />
                            <circle cx="240" cy="25" r="3" fill="white" stroke="#2563eb" strokeWidth="1.5" />
                            <text x="160" y="18" fontSize="10" fill="#2563eb" fontWeight="bold" textAnchor="middle">A: (-2, 4)</text>
                            <line x1="20" y1="50" x2="280" y2="50" stroke="#16a34a" strokeWidth="3" />
                            <circle cx="280" cy="50" r="3" fill="white" stroke="#16a34a" strokeWidth="1.5" />
                            <text x="40" y="44" fontSize="9" fill="#16a34a" fontWeight="bold">← -∞</text>
                            <text x="300" y="44" fontSize="10" fill="#16a34a" fontWeight="bold">B</text>
                          </svg>
                        </div>
                      </div>
                      <div>
                        <p className="text-blue-600 font-bold">第②步：B 要把 A「罩住」→ a 必须 ≥ 4</p>
                        <p className="text-gray-600 mt-1">a = 3 → B = (-∞,3)，A 里的 3.5 没被罩住 ✗</p>
                        <p className="text-gray-600">a = 4 → B = (-∞,4)，A = (-2,4) 全在 B 里 ✓</p>
                        <p className="text-gray-800 mt-1">答案：<strong><Math tex="a \geq 4" /></strong></p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#F5E6D3] rounded-xl p-3 text-xs">
                    <p className="font-bold text-[#7A5C3E]">口诀：画数轴 → 看端点 → A 的边必须在 B 的边里面</p>
                    <p className="text-[#9A7B5B] mt-1">别忘了考虑 A = ∅ 的情况！</p>
                  </div>
                </div>

                <PracticeCard questions={setsPractice4} title="✏️ 即时练习（学完上面再做）" explanations={setsExplanations} />
              </div>
            </Collapsible>
          </section>

          <PageBreak label="集合运算" />

          {/* Section 6: 集合的运算 */}
          <section id="sets-ops" className="mb-6 scroll-mt-4">
            <Collapsible title="六、集合的运算（高考核心！）" defaultOpen storageKey="sets:operations" headerExtra={<SpeakButton text={setsNarrations.operations} />}>
              <p className="text-sm text-blue-600 mb-3">🎯 学完你能：熟练做交集、并集、补集运算，掌握混合运算技巧。</p>
              <div className="space-y-4 text-gray-700">

                {/* ===== 生活引入 ===== */}
                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <p>前面学了集合是什么、集合之间的关系。</p>
                  <p>现在要学的是：<strong>两个集合之间怎么"算"</strong>？</p>
                  <p className="text-gray-500 text-sm">就像数字可以加减乘除一样，集合也有自己的运算。一共就三种：<strong>交集、并集、补集</strong>。</p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="font-bold text-blue-800 mb-2">先记住核心方法</p>
                  <p className="text-blue-700"><strong>有限集</strong>（能列出元素的）→ 画 <strong>Venn 图</strong>，一个一个找</p>
                  <p className="text-blue-700"><strong>不等式集</strong>（连续区间的）→ 画 <strong>数轴</strong>，看线段重叠</p>
                  <p className="text-blue-700 mt-1 text-sm">数轴法是做集合运算的<strong>核武器</strong>！后面的例子会反复用到。</p>
                </div>

                {/* ==================== 交集 ==================== */}
                <Collapsible title="交集 ∩ —— 两个都有的" storageKey="sets:intersection" headerExtra={<SpeakButton text={setsNarrations.intersection} />}>
                  <div className="space-y-4 text-gray-700">

                    {/* 生活类比 */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 space-y-2">
                      <p className="font-bold text-green-800">先用生活理解</p>
                      <p>小明喜欢的水果：&#123;苹果, 香蕉, 葡萄, 西瓜&#125;</p>
                      <p>小红喜欢的水果：&#123;香蕉, 橘子, 西瓜, 草莓&#125;</p>
                      <p className="mt-1">他们<strong>都喜欢</strong>的水果是什么？→ <strong>&#123;香蕉, 西瓜&#125;</strong></p>
                      <p className="text-green-700 font-bold mt-1">这就是交集！找"两个人都有"的部分。</p>
                    </div>

                    {/* 定义 + Venn图 */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center gap-4 flex-wrap">
                        <div className="flex-1 min-w-[200px]">
                          <p className="font-bold text-blue-800 mb-2">数学定义</p>
                          <Math tex="A \cap B = \{x \mid x \in A \text{ 且 } x \in B\}" display />
                          <p className="text-blue-600 mt-2"><strong>∩ 读作"交"</strong>，口诀：<strong>两个都要有</strong></p>
                        </div>
                        <svg viewBox="0 0 160 110" className="w-32 shrink-0">
                          <rect x="3" y="3" width="154" height="104" rx="6" fill="#f0f9ff" stroke="#93c5fd" strokeWidth="1" />
                          <circle cx="58" cy="55" r="32" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.2" fillOpacity="0.4" />
                          <circle cx="98" cy="55" r="32" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.2" fillOpacity="0.4" />
                          <clipPath id="opClipA"><circle cx="58" cy="55" r="32" /></clipPath>
                          <circle cx="98" cy="55" r="32" fill="#bbf7d0" fillOpacity="0.8" clipPath="url(#opClipA)" />
                          <text x="42" y="59" fontSize="12" fill="#1d4ed8" fontWeight="bold" textAnchor="middle">A</text>
                          <text x="114" y="59" fontSize="12" fill="#b45309" fontWeight="bold" textAnchor="middle">B</text>
                          <text x="78" y="96" fontSize="10" fill="#15803d" fontWeight="bold" textAnchor="middle">绿色=A∩B</text>
                        </svg>
                      </div>
                    </div>

                    {/* 例1：有限集 */}
                    <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                      <p className="font-bold text-gray-800">例1：有限集（一个一个找）</p>
                      <p><Math tex="A = \{1, 2, 3, 5\}" />，<Math tex="B = \{2, 4, 5, 6\}" /></p>
                      <div className="pl-3 border-l-2 border-blue-300 space-y-1">
                        <p>1 在 B 里？✗　<strong>2 在 B 里？✓</strong>　3 在 B 里？✗　<strong>5 在 B 里？✓</strong></p>
                        <p className="font-bold text-blue-700">→ <Math tex="A \cap B = \{2, 5\}" /></p>
                      </div>
                    </div>

                    {/* 例2：有限集再练一个 */}
                    <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                      <p className="font-bold text-gray-800">例2：再练一个（方程型集合）</p>
                      <p><Math tex="A = \{x \mid x^2 - 5x + 6 = 0\}" />，<Math tex="B = \{1, 2, 3, 4\}" /></p>
                      <div className="pl-3 border-l-2 border-blue-300 space-y-1">
                        <p>先解方程：<Math tex="x^2 - 5x + 6 = (x-2)(x-3) = 0" /> → <Math tex="A = \{2, 3\}" /></p>
                        <p>2 在 B 里？✓　3 在 B 里？✓　→ 全在！</p>
                        <p className="font-bold text-blue-700">→ <Math tex="A \cap B = \{2, 3\}" /></p>
                      </div>
                    </div>

                    <PageBreak />

                    {/* 例3：数轴法 */}
                    <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                      <p className="font-bold text-gray-800">例3：不等式集（画数轴找重叠）</p>
                      <p><Math tex="A = \{x \mid 1 < x < 5\}" />，<Math tex="B = \{x \mid 3 < x < 8\}" /></p>
                      <div className="bg-white rounded-lg p-3 border mt-1">
                        <svg viewBox="0 0 360 75" className="w-full">
                          <line x1="20" y1="20" x2="340" y2="20" stroke="#d1d5db" strokeWidth="1" />
                          <line x1="20" y1="45" x2="340" y2="45" stroke="#d1d5db" strokeWidth="1" />
                          {/* ticks */}
                          <line x1="60" y1="14" x2="60" y2="51" stroke="#e5e7eb" strokeWidth="1" />
                          <line x1="160" y1="14" x2="160" y2="51" stroke="#e5e7eb" strokeWidth="1" />
                          <line x1="220" y1="14" x2="220" y2="26" stroke="#e5e7eb" strokeWidth="1" />
                          <line x1="310" y1="39" x2="310" y2="51" stroke="#e5e7eb" strokeWidth="1" />
                          <text x="60" y="68" fontSize="11" fill="#374151" textAnchor="middle">1</text>
                          <text x="160" y="68" fontSize="11" fill="#374151" textAnchor="middle">3</text>
                          <text x="220" y="68" fontSize="11" fill="#374151" textAnchor="middle">5</text>
                          <text x="310" y="68" fontSize="11" fill="#374151" textAnchor="middle">8</text>
                          {/* A */}
                          <line x1="60" y1="20" x2="220" y2="20" stroke="#3b82f6" strokeWidth="3" />
                          <circle cx="60" cy="20" r="3.5" fill="white" stroke="#3b82f6" strokeWidth="1.5" />
                          <circle cx="220" cy="20" r="3.5" fill="white" stroke="#3b82f6" strokeWidth="1.5" />
                          <text x="140" y="14" fontSize="11" fill="#3b82f6" fontWeight="bold" textAnchor="middle">A: (1, 5)</text>
                          {/* B */}
                          <line x1="160" y1="45" x2="310" y2="45" stroke="#f59e0b" strokeWidth="3" />
                          <circle cx="160" cy="45" r="3.5" fill="white" stroke="#f59e0b" strokeWidth="1.5" />
                          <circle cx="310" cy="45" r="3.5" fill="white" stroke="#f59e0b" strokeWidth="1.5" />
                          <text x="235" y="39" fontSize="11" fill="#f59e0b" fontWeight="bold" textAnchor="middle">B: (3, 8)</text>
                        </svg>
                      </div>
                      <p className="text-sm">两条线<strong>重叠的部分</strong>是 3 到 5 之间 →</p>
                      <p className="font-bold text-blue-700"><Math tex="A \cap B = \{x \mid 3 < x < 5\} = (3, 5)" /></p>
                    </div>

                    <div className="bg-[#F5E6D3] rounded-xl p-4">
                      <p className="font-bold text-[#7A5C3E]">一句话记住交集</p>
                      <p className="text-[#7A5C3E]"><strong>∩ 像一个碗扣下来</strong>，把两个集合的<strong>公共部分"扣"下来</strong>。</p>
                      <p className="text-[#7A5C3E] mt-1">有限集 → 逐个检查；不等式 → 数轴找重叠。</p>
                    </div>
                  </div>
                </Collapsible>

                {/* ==================== 并集 ==================== */}
                <Collapsible title="并集 ∪ —— 合在一起全要" storageKey="sets:union" headerExtra={<SpeakButton text={setsNarrations.union} />}>
                  <div className="space-y-4 text-gray-700">

                    {/* 生活类比 */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 space-y-2">
                      <p className="font-bold text-green-800">还是那个例子</p>
                      <p>小明喜欢：&#123;苹果, 香蕉, 葡萄, 西瓜&#125;</p>
                      <p>小红喜欢：&#123;香蕉, 橘子, 西瓜, 草莓&#125;</p>
                      <p className="mt-1">要买水果请他们两个，<strong>至少有一个人喜欢</strong>的都得买：</p>
                      <p className="text-green-700 font-bold">→ &#123;苹果, 香蕉, 葡萄, 西瓜, 橘子, 草莓&#125;（合在一起，去掉重复）</p>
                      <p className="text-green-700">这就是并集！把两个集合的元素<strong>全部合起来</strong>。</p>
                    </div>

                    {/* 定义 + Venn图 */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center gap-4 flex-wrap">
                        <div className="flex-1 min-w-[200px]">
                          <p className="font-bold text-blue-800 mb-2">数学定义</p>
                          <Math tex="A \cup B = \{x \mid x \in A \text{ 或 } x \in B\}" display />
                          <p className="text-blue-600 mt-2"><strong>∪ 读作"并"</strong>，口诀：<strong>只要有一个就行</strong></p>
                        </div>
                        <svg viewBox="0 0 160 110" className="w-32 shrink-0">
                          <rect x="3" y="3" width="154" height="104" rx="6" fill="#f0f9ff" stroke="#93c5fd" strokeWidth="1" />
                          <circle cx="58" cy="55" r="32" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.2" fillOpacity="0.6" />
                          <circle cx="98" cy="55" r="32" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.2" fillOpacity="0.6" />
                          <text x="42" y="59" fontSize="12" fill="#15803d" fontWeight="bold" textAnchor="middle">A</text>
                          <text x="114" y="59" fontSize="12" fill="#15803d" fontWeight="bold" textAnchor="middle">B</text>
                          <text x="78" y="96" fontSize="10" fill="#15803d" fontWeight="bold" textAnchor="middle">全绿=A∪B</text>
                        </svg>
                      </div>
                    </div>

                    {/* 例1：有限集 */}
                    <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                      <p className="font-bold text-gray-800">例1：有限集（全部合起来去重）</p>
                      <p><Math tex="A = \{1, 2, 3\}" />，<Math tex="B = \{2, 4, 5\}" /></p>
                      <p className="pl-3 border-l-2 border-blue-300">全部写出来，重复的只写一次 → <strong className="text-blue-700"><Math tex="A \cup B = \{1, 2, 3, 4, 5\}" /></strong></p>
                    </div>

                    <PageBreak />

                    {/* 例2：数轴法 */}
                    <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                      <p className="font-bold text-gray-800">例2：不等式集（数轴上合起来）</p>
                      <p><Math tex="A = \{x \mid 1 < x < 5\}" />，<Math tex="B = \{x \mid 3 < x < 8\}" /></p>
                      <div className="bg-white rounded-lg p-3 border mt-1">
                        <svg viewBox="0 0 360 50" className="w-full">
                          <line x1="20" y1="25" x2="340" y2="25" stroke="#d1d5db" strokeWidth="1" />
                          <line x1="60" y1="19" x2="60" y2="31" stroke="#e5e7eb" strokeWidth="1" />
                          <line x1="310" y1="19" x2="310" y2="31" stroke="#e5e7eb" strokeWidth="1" />
                          <text x="60" y="44" fontSize="11" fill="#374151" textAnchor="middle">1</text>
                          <text x="310" y="44" fontSize="11" fill="#374151" textAnchor="middle">8</text>
                          {/* 合起来 */}
                          <line x1="60" y1="25" x2="310" y2="25" stroke="#16a34a" strokeWidth="4" />
                          <circle cx="60" cy="25" r="3.5" fill="white" stroke="#16a34a" strokeWidth="1.5" />
                          <circle cx="310" cy="25" r="3.5" fill="white" stroke="#16a34a" strokeWidth="1.5" />
                          <text x="185" y="16" fontSize="12" fill="#16a34a" fontWeight="bold" textAnchor="middle">A∪B: (1, 8)</text>
                        </svg>
                      </div>
                      <p className="text-sm">两条线<strong>合起来的全部范围</strong>是 1 到 8 →</p>
                      <p className="font-bold text-green-700"><Math tex="A \cup B = \{x \mid 1 < x < 8\} = (1, 8)" /></p>
                    </div>

                    {/* 交集 vs 并集 对比 */}
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-200 px-3 py-2 text-center"></th>
                            <th className="border border-gray-200 px-3 py-2 text-center text-blue-700">交集 A∩B</th>
                            <th className="border border-gray-200 px-3 py-2 text-center text-green-700">并集 A∪B</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-200 px-3 py-2 font-bold text-center">意思</td>
                            <td className="border border-gray-200 px-3 py-2 text-center">两个<strong>都有</strong>（且）</td>
                            <td className="border border-gray-200 px-3 py-2 text-center"><strong>至少一个有</strong>（或）</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-200 px-3 py-2 font-bold text-center">数轴</td>
                            <td className="border border-gray-200 px-3 py-2 text-center">取<strong>重叠</strong>部分</td>
                            <td className="border border-gray-200 px-3 py-2 text-center">取<strong>全部</strong>范围</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-200 px-3 py-2 font-bold text-center">符号记忆</td>
                            <td className="border border-gray-200 px-3 py-2 text-center">∩ 像碗<strong>扣下来</strong></td>
                            <td className="border border-gray-200 px-3 py-2 text-center">∪ 像碗<strong>装东西</strong></td>
                          </tr>
                          <tr>
                            <td className="border border-gray-200 px-3 py-2 font-bold text-center">大小</td>
                            <td className="border border-gray-200 px-3 py-2 text-center"><Math tex="A \cap B \subseteq A" /></td>
                            <td className="border border-gray-200 px-3 py-2 text-center"><Math tex="A \subseteq A \cup B" /></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="bg-[#F5E6D3] rounded-xl p-4">
                      <p className="font-bold text-[#7A5C3E]">一句话记住并集</p>
                      <p className="text-[#7A5C3E]"><strong>∪ 像一个碗装东西</strong>，把两个集合的元素<strong>全部装进去</strong>（重复的只留一份）。</p>
                    </div>
                  </div>
                </Collapsible>

                {/* ==================== 补集 ==================== */}
                <Collapsible title="补集 ∁ᵤA —— U 里去掉 A 剩下的" storageKey="sets:complement" headerExtra={<SpeakButton text={setsNarrations.complement} />}>
                  <div className="space-y-4 text-gray-700">

                    {/* 生活类比 */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 space-y-2">
                      <p className="font-bold text-green-800">生活理解</p>
                      <p>全班 50 个同学（这就是<strong>全集 U</strong>）</p>
                      <p>数学兴趣组有 20 个同学（这就是<strong>集合 A</strong>）</p>
                      <p className="mt-1"><strong>没参加</strong>数学兴趣组的同学有几个？→ 50 - 20 = <strong>30 个</strong></p>
                      <p className="text-green-700 font-bold mt-1">这 30 个人就是 A 的补集！全集里"去掉 A 剩下的"。</p>
                    </div>

                    {/* 定义 + Venn图 */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center gap-4 flex-wrap">
                        <div className="flex-1 min-w-[200px]">
                          <p className="font-bold text-blue-800 mb-2">数学定义</p>
                          <Math tex="\complement_U A = \{x \mid x \in U \text{ 且 } x \notin A\}" display />
                          <p className="text-blue-600 mt-2">读作"<strong>A 关于 U 的补集</strong>"</p>
                          <p className="text-blue-600">口诀：<strong>U 里去掉 A，剩下的就是补集</strong></p>
                          <p className="text-red-600 font-bold mt-1 text-sm">注意：没有全集 U 就没有补集！</p>
                        </div>
                        <svg viewBox="0 0 160 110" className="w-32 shrink-0">
                          <rect x="3" y="3" width="154" height="104" rx="6" fill="#fde68a" stroke="#f59e0b" strokeWidth="1.2" />
                          <text x="145" y="18" fontSize="11" fill="#b45309" fontWeight="bold">U</text>
                          <circle cx="72" cy="55" r="30" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.2" />
                          <text x="72" y="59" fontSize="12" fill="#3b82f6" fontWeight="bold" textAnchor="middle">A</text>
                          <text x="130" y="92" fontSize="10" fill="#b45309" fontWeight="bold" textAnchor="middle">黄色=补集</text>
                        </svg>
                      </div>
                    </div>

                    <PageBreak />

                    {/* 例1：有限集 */}
                    <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                      <p className="font-bold text-gray-800">例1：有限集（逐个排除）</p>
                      <p>U = &#123;1, 2, 3, 4, 5&#125;，A = &#123;1, 3, 5&#125;</p>
                      <div className="pl-3 border-l-2 border-blue-300 space-y-1">
                        <p>U 里有 1,2,3,4,5 → 去掉 A 的 1,3,5 → 剩下 2, 4</p>
                        <p className="font-bold text-blue-700">→ <Math tex="\complement_U A = \{2, 4\}" /></p>
                      </div>
                    </div>

                    {/* 例2：数轴法 */}
                    <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                      <p className="font-bold text-gray-800">例2：不等式集（数轴法 · 分两步）</p>
                      <p><Math tex="U = \mathbb{R}" />（全体实数），<Math tex="A = \{x \mid 1 \leq x < 5\} = [1, 5)" /></p>

                      <div className="bg-white rounded-lg p-3 border">
                        <p className="text-sm text-gray-700 mb-2 font-bold">第①步：在数轴上画出 A 的范围</p>
                        <svg viewBox="0 0 340 50" className="w-full">
                          <line x1="20" y1="30" x2="320" y2="30" stroke="#d1d5db" strokeWidth="1.5" />
                          <line x1="100" y1="24" x2="100" y2="36" stroke="#6b7280" strokeWidth="1.5" />
                          <text x="100" y="46" fontSize="11" fill="#374151" textAnchor="middle">1</text>
                          <line x1="240" y1="24" x2="240" y2="36" stroke="#6b7280" strokeWidth="1.5" />
                          <text x="240" y="46" fontSize="11" fill="#374151" textAnchor="middle">5</text>
                          <line x1="100" y1="30" x2="240" y2="30" stroke="#3b82f6" strokeWidth="4" />
                          <circle cx="100" cy="30" r="4" fill="#3b82f6" />
                          <circle cx="240" cy="30" r="4" fill="white" stroke="#3b82f6" strokeWidth="2" />
                          <text x="170" y="20" fontSize="11" fill="#3b82f6" fontWeight="bold" textAnchor="middle">A：[1, 5)</text>
                          <text x="100" y="14" fontSize="9" fill="#3b82f6" textAnchor="middle">●含1</text>
                          <text x="240" y="14" fontSize="9" fill="#f59e0b" textAnchor="middle">○不含5</text>
                        </svg>
                      </div>

                      <div className="bg-white rounded-lg p-3 border">
                        <p className="text-sm text-gray-700 mb-2 font-bold">第②步：补集 = 数轴上没被涂色的部分（端点反转！）</p>
                        <svg viewBox="0 0 340 50" className="w-full">
                          <line x1="20" y1="30" x2="320" y2="30" stroke="#d1d5db" strokeWidth="1.5" />
                          <line x1="100" y1="24" x2="100" y2="36" stroke="#6b7280" strokeWidth="1.5" />
                          <text x="100" y="46" fontSize="11" fill="#374151" textAnchor="middle">1</text>
                          <line x1="240" y1="24" x2="240" y2="36" stroke="#6b7280" strokeWidth="1.5" />
                          <text x="240" y="46" fontSize="11" fill="#374151" textAnchor="middle">5</text>
                          <line x1="20" y1="30" x2="100" y2="30" stroke="#ef4444" strokeWidth="4" />
                          <circle cx="100" cy="30" r="4" fill="white" stroke="#ef4444" strokeWidth="2" />
                          <text x="20" y="20" fontSize="10" fill="#ef4444" fontWeight="bold">← -∞</text>
                          <line x1="240" y1="30" x2="320" y2="30" stroke="#ef4444" strokeWidth="4" />
                          <circle cx="240" cy="30" r="4" fill="#ef4444" />
                          <text x="318" y="20" fontSize="10" fill="#ef4444" fontWeight="bold">+∞ →</text>
                          <text x="60" y="18" fontSize="10" fill="#ef4444" fontWeight="bold" textAnchor="middle">x {'<'} 1</text>
                          <text x="280" y="18" fontSize="10" fill="#ef4444" fontWeight="bold" textAnchor="middle">x ≥ 5</text>
                          <text x="100" y="14" fontSize="9" fill="#ef4444" textAnchor="middle">○不含1</text>
                          <text x="240" y="14" fontSize="9" fill="#ef4444" textAnchor="middle">●含5</text>
                        </svg>
                      </div>

                      <p>A 涂了 [1,5)，剩下的就是两段红色 →</p>
                      <p className="font-bold text-red-600"><Math tex="\complement_U A = (-\infty, 1) \cup [5, +\infty)" /></p>
                    </div>

                    {/* 端点反转规律 */}
                    <div className="bg-[#F5E6D3] rounded-xl p-4">
                      <p className="font-bold text-[#7A5C3E] mb-3 text-center text-base">补集端点规律（必记！）</p>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-center">
                          <thead>
                            <tr className="bg-[#ECD8BC]">
                              <th className="border border-[#D4B896] px-3 py-2 text-[#7A5C3E]">A 的端点</th>
                              <th className="border border-[#D4B896] px-3 py-2 text-[#7A5C3E]"></th>
                              <th className="border border-[#D4B896] px-3 py-2 text-[#7A5C3E]">补集端点</th>
                              <th className="border border-[#D4B896] px-3 py-2 text-[#7A5C3E]">数轴上</th>
                            </tr>
                          </thead>
                          <tbody className="text-[#7A5C3E]">
                            <tr>
                              <td className="border border-[#D4B896] px-3 py-2">{'<'} 不含</td>
                              <td className="border border-[#D4B896] px-3 py-2">→</td>
                              <td className="border border-[#D4B896] px-3 py-2 font-bold">≥ 含</td>
                              <td className="border border-[#D4B896] px-3 py-2">○ → ●</td>
                            </tr>
                            <tr>
                              <td className="border border-[#D4B896] px-3 py-2">≤ 含</td>
                              <td className="border border-[#D4B896] px-3 py-2">→</td>
                              <td className="border border-[#D4B896] px-3 py-2 font-bold">{'>'} 不含</td>
                              <td className="border border-[#D4B896] px-3 py-2">● → ○</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="text-[#7A5C3E] font-bold text-center mt-3">口诀：<strong>开变闭，闭变开</strong>（空心变实心，实心变空心）</p>
                      <p className="text-[#9A7B5B] text-center text-sm mt-1">为什么反转？因为端点只能属于 A 或补集其中一个，不能两边都有。</p>
                    </div>
                  </div>
                </Collapsible>

                <PageBreak />

                {/* ==================== 混合运算 ==================== */}
                <Collapsible title="交并补混合运算（高考最爱考！）" storageKey="sets:mixed-ops">
                  <div className="space-y-4 text-gray-700">

                    {/* 解题思路 */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-2">
                      <p className="font-bold text-blue-800">混合运算怎么做？就像算数学先算括号一样！</p>
                      <p className="text-blue-700">看到 <Math tex="A \cap (\complement_U B)" /> 这种，先算<strong>括号里面的</strong>（补集），再算<strong>外面的</strong>（交集）。</p>
                    </div>

                    <div className="bg-[#F5E6D3] rounded-xl p-4">
                      <p className="font-bold text-[#7A5C3E] mb-2">解题三步走（背下来！）</p>
                      <div className="space-y-1 text-[#7A5C3E]">
                        <p><strong>①</strong> 看清求什么 → 找运算顺序（先括号内，再括号外）</p>
                        <p><strong>②</strong> 遇到补集 → 端点反转（开变闭，闭变开）</p>
                        <p><strong>③</strong> 遇到交/并 → 画数轴，交取重叠，并取全部</p>
                      </div>
                    </div>

                    {/* 例1 */}
                    <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                      <p className="font-bold text-gray-800">例1：<Math tex="U = \mathbb{R}" />，<Math tex="A = \{x \mid x \leq 1\}" />，<Math tex="B = \{x \mid x > -1\}" />，求 <Math tex="A \cap (\complement_U B)" /></p>
                      <div className="pl-3 border-l-2 border-blue-300 space-y-3">
                        <div>
                          <p><span className="text-blue-600 font-bold">第①步</span>：先算括号内 → 求 <Math tex="\complement_U B" /></p>
                          <p className="pl-4">B 是 x {'>'} -1（不含 -1） → 补集端点反转 → <Math tex="\complement_U B = \{x \mid x \leq -1\}" /></p>
                        </div>
                        <div>
                          <p><span className="text-blue-600 font-bold">第②步</span>：画数轴求交集（找重叠）</p>
                          <div className="bg-white rounded-lg p-3 border">
                            <svg viewBox="0 0 340 70" className="w-full">
                              <line x1="20" y1="20" x2="320" y2="20" stroke="#d1d5db" strokeWidth="1" />
                              <line x1="20" y1="45" x2="320" y2="45" stroke="#d1d5db" strokeWidth="1" />
                              <line x1="120" y1="14" x2="120" y2="51" stroke="#e5e7eb" strokeWidth="1" />
                              <line x1="220" y1="14" x2="220" y2="26" stroke="#e5e7eb" strokeWidth="1" />
                              <text x="120" y="64" fontSize="11" fill="#374151" textAnchor="middle">-1</text>
                              <text x="220" y="64" fontSize="11" fill="#374151" textAnchor="middle">1</text>
                              <line x1="20" y1="20" x2="220" y2="20" stroke="#3b82f6" strokeWidth="3" />
                              <circle cx="220" cy="20" r="3.5" fill="#3b82f6" />
                              <text x="22" y="14" fontSize="10" fill="#3b82f6" fontWeight="bold">← A : x ≤ 1</text>
                              <line x1="20" y1="45" x2="120" y2="45" stroke="#ef4444" strokeWidth="3" />
                              <circle cx="120" cy="45" r="3.5" fill="#ef4444" />
                              <text x="22" y="39" fontSize="10" fill="#ef4444" fontWeight="bold">← 补B : x ≤ -1</text>
                            </svg>
                          </div>
                          <p className="pl-4">两条线<strong>重叠的部分</strong>：从 -∞ 到 -1（含） →</p>
                          <p className="pl-4 font-bold text-blue-700"><Math tex="A \cap (\complement_U B) = \{x \mid x \leq -1\} = (-\infty, -1]" /></p>
                        </div>
                      </div>
                    </div>

                    {/* 例2 */}
                    <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                      <p className="font-bold text-gray-800">例2：<Math tex="U = \mathbb{R}" />，<Math tex="A = (1, 4]" />，<Math tex="B = [2, 5)" />，求 <Math tex="\complement_U(A \cap B)" /></p>
                      <div className="pl-3 border-l-2 border-blue-300 space-y-3">
                        <div>
                          <p><span className="text-blue-600 font-bold">第①步</span>：先算括号内 → 求 <Math tex="A \cap B" />（画数轴找重叠）</p>
                          <div className="bg-white rounded-lg p-3 border">
                            <svg viewBox="0 0 340 70" className="w-full">
                              <line x1="20" y1="20" x2="320" y2="20" stroke="#d1d5db" strokeWidth="1" />
                              <line x1="20" y1="45" x2="320" y2="45" stroke="#d1d5db" strokeWidth="1" />
                              <line x1="70" y1="14" x2="70" y2="26" stroke="#e5e7eb" strokeWidth="1" />
                              <line x1="130" y1="14" x2="130" y2="51" stroke="#e5e7eb" strokeWidth="1" />
                              <line x1="250" y1="14" x2="250" y2="51" stroke="#e5e7eb" strokeWidth="1" />
                              <line x1="310" y1="39" x2="310" y2="51" stroke="#e5e7eb" strokeWidth="1" />
                              <text x="70" y="64" fontSize="11" fill="#374151" textAnchor="middle">1</text>
                              <text x="130" y="64" fontSize="11" fill="#374151" textAnchor="middle">2</text>
                              <text x="250" y="64" fontSize="11" fill="#374151" textAnchor="middle">4</text>
                              <text x="310" y="64" fontSize="11" fill="#374151" textAnchor="middle">5</text>
                              <line x1="70" y1="20" x2="250" y2="20" stroke="#3b82f6" strokeWidth="3" />
                              <circle cx="70" cy="20" r="3.5" fill="white" stroke="#3b82f6" strokeWidth="1.5" />
                              <circle cx="250" cy="20" r="3.5" fill="#3b82f6" />
                              <text x="160" y="14" fontSize="10" fill="#3b82f6" fontWeight="bold" textAnchor="middle">A: (1, 4]</text>
                              <line x1="130" y1="45" x2="310" y2="45" stroke="#f59e0b" strokeWidth="3" />
                              <circle cx="130" cy="45" r="3.5" fill="#f59e0b" />
                              <circle cx="310" cy="45" r="3.5" fill="white" stroke="#f59e0b" strokeWidth="1.5" />
                              <text x="220" y="39" fontSize="10" fill="#f59e0b" fontWeight="bold" textAnchor="middle">B: [2, 5)</text>
                            </svg>
                          </div>
                          <p className="pl-4">重叠：从 2（含）到 4（含） → <Math tex="A \cap B = [2, 4]" /></p>
                        </div>
                        <div>
                          <p><span className="text-blue-600 font-bold">第②步</span>：再求补集（端点反转）</p>
                          <p className="pl-4">[2, 4] → 2 的 ≤ 变 {'<'}，4 的 ≤ 变 {'>'}</p>
                          <p className="pl-4 font-bold text-red-600"><Math tex="\complement_U(A \cap B) = (-\infty, 2) \cup (4, +\infty)" /></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Collapsible>

                {/* ==================== A∩B=∅ 参数题 ==================== */}
                <Collapsible title="A∩B=∅ 求参数范围（高考高频）" storageKey="sets:intersection-empty">
                  <div className="space-y-4 text-gray-700">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="font-bold text-blue-800">核心思路</p>
                      <p className="text-blue-700"><Math tex="A \cap B = \varnothing" /> 就是 A 和 B <strong>完全没有公共部分</strong>，在数轴上<strong>完全分开</strong>，没有任何重叠。</p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                      <p className="font-bold text-gray-800">例：<Math tex="A = [1, 3]" />，<Math tex="B = (a, +\infty)" />，若 <Math tex="A \cap B = \varnothing" />，求 a</p>
                      <div className="pl-3 border-l-2 border-blue-300 space-y-2">
                        <div>
                          <p className="text-blue-600 font-bold">第①步：画数轴</p>
                          <div className="bg-white rounded-lg p-2 border mt-1">
                            <svg viewBox="0 0 360 80" className="w-full">
                              <line x1="20" y1="25" x2="340" y2="25" stroke="#d1d5db" strokeWidth="1" />
                              <line x1="20" y1="50" x2="340" y2="50" stroke="#d1d5db" strokeWidth="1" />
                              <line x1="100" y1="19" x2="100" y2="31" stroke="#6b7280" strokeWidth="1" />
                              <line x1="200" y1="19" x2="200" y2="31" stroke="#6b7280" strokeWidth="1" />
                              <line x1="240" y1="44" x2="240" y2="56" stroke="#6b7280" strokeWidth="1" />
                              <text x="100" y="72" fontSize="11" fill="#374151" textAnchor="middle">1</text>
                              <text x="200" y="72" fontSize="11" fill="#374151" textAnchor="middle">3</text>
                              <text x="240" y="72" fontSize="11" fill="#374151" textAnchor="middle">a</text>
                              <line x1="100" y1="25" x2="200" y2="25" stroke="#3b82f6" strokeWidth="3" />
                              <circle cx="100" cy="25" r="3.5" fill="#3b82f6" />
                              <circle cx="200" cy="25" r="3.5" fill="#3b82f6" />
                              <text x="150" y="18" fontSize="11" fill="#3b82f6" fontWeight="bold" textAnchor="middle">A: [1, 3]</text>
                              <line x1="240" y1="50" x2="340" y2="50" stroke="#f59e0b" strokeWidth="3" />
                              <circle cx="240" cy="50" r="3.5" fill="white" stroke="#f59e0b" strokeWidth="1.5" />
                              <text x="290" y="44" fontSize="11" fill="#f59e0b" fontWeight="bold" textAnchor="middle">B: (a, +∞)</text>
                            </svg>
                          </div>
                        </div>
                        <div>
                          <p className="text-blue-600 font-bold">第②步：要完全分开 → B 的左端 a 必须 ≥ A 的右端 3</p>
                          <p className="text-gray-600 mt-1">a = 2 → B = (2, +∞)，和 A 有重叠 ✗</p>
                          <p className="text-gray-600">a = 3 → B = (3, +∞)，A 到 3 含，B 从 3 不含，刚好分开 ✓</p>
                          <p className="text-gray-800 mt-1 font-bold">答案：<Math tex="a \geq 3" /></p>
                        </div>
                      </div>
                    </div>

                    {/* 例2 */}
                    <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                      <p className="font-bold text-gray-800">例2：<Math tex="A = \{x \mid 2 \leq x \leq 5\}" />，<Math tex="B = \{x \mid x < a\}" />，若 <Math tex="A \cap B = \varnothing" />，求 a</p>
                      <div className="pl-3 border-l-2 border-blue-300 space-y-2">
                        <p>A 在数轴上是 [2, 5]，B 在数轴上是 (-∞, a)</p>
                        <p>要完全分开 → B 的右端 a 必须 ≤ A 的左端 2</p>
                        <p>a = 2 → B = (-∞, 2)，不含 2，A 从 2 开始含 2，刚好不重叠 ✓</p>
                        <p className="font-bold text-gray-800">答案：<Math tex="a \leq 2" /></p>
                      </div>
                    </div>

                    {/* 常见模式总结 */}
                    <div className="bg-[#F5E6D3] rounded-xl p-4 space-y-2">
                      <p className="font-bold text-[#7A5C3E]">A∩B=∅ 三种常见情况</p>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-center text-sm">
                          <thead>
                            <tr className="bg-[#ECD8BC]">
                              <th className="border border-[#D4B896] px-3 py-2 text-[#7A5C3E]">情况</th>
                              <th className="border border-[#D4B896] px-3 py-2 text-[#7A5C3E]">条件</th>
                              <th className="border border-[#D4B896] px-3 py-2 text-[#7A5C3E]">口诀</th>
                            </tr>
                          </thead>
                          <tbody className="text-[#7A5C3E]">
                            <tr>
                              <td className="border border-[#D4B896] px-3 py-2">B 在 A 右边</td>
                              <td className="border border-[#D4B896] px-3 py-2">B 的左端 ≥ A 的右端</td>
                              <td className="border border-[#D4B896] px-3 py-2">B 起点够右</td>
                            </tr>
                            <tr>
                              <td className="border border-[#D4B896] px-3 py-2">B 在 A 左边</td>
                              <td className="border border-[#D4B896] px-3 py-2">B 的右端 ≤ A 的左端</td>
                              <td className="border border-[#D4B896] px-3 py-2">B 终点够左</td>
                            </tr>
                            <tr>
                              <td className="border border-[#D4B896] px-3 py-2">开闭刚好挨着</td>
                              <td className="border border-[#D4B896] px-3 py-2">一个含一个不含</td>
                              <td className="border border-[#D4B896] px-3 py-2">也算分开</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                      <p className="text-amber-800"><strong>易错提醒：</strong>开闭区间决定 ≥ 还是 {'>'}。比如 A = [1,3]，B = (a,+∞)，分开条件是 a ≥ 3（不是 {'>'} 3），因为 B 不含 a。</p>
                    </div>
                  </div>
                </Collapsible>

                <PageBreak />

                {/* ==================== 容斥原理 ==================== */}
                <Collapsible title="集合计数——容斥原理（Venn图应用）" storageKey="sets:inclusion-exclusion">
                  <div className="space-y-3 text-gray-700">

                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 space-y-2">
                      <p className="font-bold text-green-800">生活场景</p>
                      <p>班上 50 人，参加数学组 30 人，参加物理组 25 人。30 + 25 = 55，比 50 还多？</p>
                      <p className="text-green-700 font-bold">因为有些人<strong>两个都参加了</strong>，被你数了两次！要减掉重复的。</p>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 space-y-2">
                      <p className="font-bold text-blue-800">容斥公式</p>
                      <Math tex="|A \cup B| = |A| + |B| - |A \cap B|" display />
                      <p className="text-blue-700">口诀：<strong>加了两个，减掉重复的</strong>（因为重叠部分被加了两次）</p>
                    </div>

                    <div className="flex justify-center">
                      <svg viewBox="0 0 280 150" className="w-full max-w-[20rem]">
                        <rect x="3" y="3" width="274" height="144" rx="8" fill="#f9fafb" stroke="#d1d5db" strokeWidth="1" />
                        <circle cx="105" cy="75" r="48" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" strokeWidth="1.5" />
                        <circle cx="175" cy="75" r="48" fill="rgba(234,179,8,0.15)" stroke="#eab308" strokeWidth="1.5" />
                        <text x="80" y="75" fontSize="13" fontWeight="bold" fill="#2563eb" textAnchor="middle">只A</text>
                        <text x="140" y="69" fontSize="12" fontWeight="bold" fill="#7c3aed" textAnchor="middle">A∩B</text>
                        <text x="140" y="83" fontSize="10" fill="#7c3aed" textAnchor="middle">(重复)</text>
                        <text x="200" y="75" fontSize="13" fontWeight="bold" fill="#ca8a04" textAnchor="middle">只B</text>
                        <text x="72" y="32" fontSize="12" fill="#3b82f6">A: 30人</text>
                        <text x="183" y="32" fontSize="12" fill="#ca8a04">B: 25人</text>
                        <text x="140" y="142" fontSize="11" fill="#6b7280" textAnchor="middle">两个都没参加 = 总数 - |A∪B|</text>
                      </svg>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                      <p className="font-bold text-gray-800">完整例题：全班 50 人，数学组 30 人，物理组 25 人，两个都参加 15 人</p>
                      <div className="pl-3 border-l-2 border-blue-300 space-y-1">
                        <p><span className="text-blue-600 font-bold">第①步</span>：至少参加一个的人数</p>
                        <p className="pl-4"><Math tex="|A \cup B| = 30 + 25 - 15 = 40 \text{ 人}" /></p>
                        <p><span className="text-blue-600 font-bold">第②步</span>：两个都没参加</p>
                        <p className="pl-4">50 - 40 = <strong className="text-green-700">10 人</strong></p>
                      </div>
                    </div>

                    {/* 例2 */}
                    <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                      <p className="font-bold text-gray-800">例2：某校 200 人，语文及格 160 人，数学及格 140 人，两科都及格 120 人</p>
                      <div className="pl-3 border-l-2 border-blue-300 space-y-1">
                        <p><span className="text-blue-600 font-bold">至少一科及格</span>：<Math tex="|A \cup B| = 160 + 140 - 120 = 180" /> 人</p>
                        <p><span className="text-blue-600 font-bold">两科都不及格</span>：200 - 180 = <strong className="text-red-600">20 人</strong></p>
                        <p><span className="text-blue-600 font-bold">只有语文及格</span>：160 - 120 = <strong>40 人</strong>（语文减掉两科都及格的）</p>
                        <p><span className="text-blue-600 font-bold">只有数学及格</span>：140 - 120 = <strong>20 人</strong></p>
                      </div>
                    </div>

                    <div className="bg-[#F5E6D3] rounded-xl p-3 space-y-1">
                      <p className="font-bold text-[#7A5C3E]">容斥四个量的关系（记住就够了）</p>
                      <div className="text-[#7A5C3E] space-y-1">
                        <p><strong>只A</strong> = |A| - |A∩B|</p>
                        <p><strong>只B</strong> = |B| - |A∩B|</p>
                        <p><strong>至少一个</strong> = |A| + |B| - |A∩B|</p>
                        <p><strong>都没有</strong> = 总数 - |A∪B|</p>
                      </div>
                    </div>
                  </div>
                </Collapsible>

                {/* ==================== 运算法则速查 ==================== */}
                <Collapsible title="运算法则速查（不用背，理解了自然会）" storageKey="sets:op-laws">
                  <div className="space-y-3 text-gray-700">
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-200 px-3 py-2 text-center text-blue-700">交集 ∩</th>
                            <th className="border border-gray-200 px-3 py-2 text-center text-green-700">并集 ∪</th>
                            <th className="border border-gray-200 px-3 py-2 text-center text-sm">理解</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-200 px-3 py-2 text-center"><Math tex="A \cap A = A" /></td>
                            <td className="border border-gray-200 px-3 py-2 text-center"><Math tex="A \cup A = A" /></td>
                            <td className="border border-gray-200 px-3 py-2 text-center text-sm">自己和自己</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-200 px-3 py-2 text-center"><Math tex="A \cap \varnothing = \varnothing" /></td>
                            <td className="border border-gray-200 px-3 py-2 text-center"><Math tex="A \cup \varnothing = A" /></td>
                            <td className="border border-gray-200 px-3 py-2 text-center text-sm">和空集</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-200 px-3 py-2 text-center"><Math tex="A \cap U = A" /></td>
                            <td className="border border-gray-200 px-3 py-2 text-center"><Math tex="A \cup U = U" /></td>
                            <td className="border border-gray-200 px-3 py-2 text-center text-sm">和全集</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-200 px-3 py-2 text-center" colSpan={2}><Math tex="A \cap (\complement_U A) = \varnothing" />，<Math tex="A \cup (\complement_U A) = U" /></td>
                            <td className="border border-gray-200 px-3 py-2 text-center text-sm">互补</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="text-blue-700"><strong>快速判断：</strong>如果 <Math tex="A \subseteq B" />，则 <Math tex="A \cap B = A" />，<Math tex="A \cup B = B" /></p>
                      <p className="text-blue-700 text-sm mt-1">（小的在大的里面 → 交集就是小的，并集就是大的）</p>
                    </div>
                  </div>
                </Collapsible>

                {/* ==================== 德摩根定律 ==================== */}
                <Collapsible title="📎 拓展：德摩根定律（了解即可）" storageKey="sets:demorgan" defaultOpen={false}>
                  <div className="space-y-3 text-gray-700">
                    <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                      <p><Math tex="\complement_U(A \cup B) = (\complement_U A) \cap (\complement_U B)" /> — 并的补 = 补的交</p>
                      <p><Math tex="\complement_U(A \cap B) = (\complement_U A) \cup (\complement_U B)" /> — 交的补 = 补的并</p>
                      <p className="text-sm text-gray-500 mt-1">记法：<strong>补号穿进括号，∩ 和 ∪ 互换</strong></p>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="text-blue-700">高考做题<strong>直接用常规方法</strong>（先算括号内，再取补集）就够了，不需要记这个公式。</p>
                    </div>
                  </div>
                </Collapsible>

                <PracticeCard questions={setsPractice5} explanations={setsExplanations} />

                <CalloutCard variant="warning" title="集合运算三大易错点">
                  <p><strong>① 补集必须有全集：</strong>没说 U 是什么就没法求补集</p>
                  <p><strong>② 端点开闭要看清：</strong><Math tex="[1,3) \cap (2,5] = (2,3)" /> — 两边都不含的就是开</p>
                  <p><strong>③ 混合运算先算括号：</strong>看清是先补再交，还是先交再补，顺序不同结果不同</p>
                </CalloutCard>
              </div>
            </Collapsible>
          </section>

          {/* Section 7: 解题核心技巧 */}
          <section className="mb-6">
            <Collapsible title="七、解题核心技巧" defaultOpen storageKey="sets:techniques" headerExtra={<SpeakButton text={setsNarrations.techniques} />}>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="font-bold text-blue-800 mb-2">技巧一：数轴法（最常用）<span className="ml-2 text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded">高考必用</span></p>
                  <p className="text-blue-700">遇到不等式集合 → 画数轴 → 看重叠（交集）/ 合起来（并集）/ 剩下的（补集）</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="font-bold text-blue-800 mb-2">技巧二：方程型先解方程 <span className="ml-1 text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded">高考必用</span></p>
                  <p className="text-blue-700"><Math tex="\{x \mid x^2 - 3x + 2 = 0\}" /> → 先解出 x=1, x=2 → <Math tex="\{1, 2\}" /></p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="font-bold text-blue-800 mb-2">技巧三：子集问题别忘空集 <span className="ml-1 text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded">高考必用</span></p>
                  <p className="text-blue-700">"若 A ⊆ B" → 分两种：A = ∅ 和 A ≠ ∅</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="font-bold text-blue-800 mb-2">技巧四：含参数问题的等价转换 <span className="ml-1 text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded">高考必用</span></p>
                  <div className="text-blue-700 space-y-1">
                    <p>"<Math tex="A \cap B = \varnothing" />" → A 和 B 在数轴上完全分开</p>
                    <p>"<Math tex="A \subseteq B" />" → A 的范围在 B 的范围里面（A 可以是空集）</p>
                    <p>"<Math tex="A \cap B = A" />" → 等价于 <Math tex="A \subseteq B" /></p>
                    <p>"<Math tex="A \cup B = B" />" → 等价于 <Math tex="A \subseteq B" /></p>
                  </div>
                </div>

                <Collapsible title="技巧五：集合相等 A=B → 元素一一对应（拓展提高）" storageKey="sets:technique-equal">
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="font-bold text-blue-800">核心思路</p>
                      <p className="text-blue-700">A = B → 两边元素<strong>完全相同</strong> → 逐个对应找参数 → 最后<strong>验证互异性</strong></p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                      <p className="font-bold text-gray-800">例：<Math tex="A = \{1,\; -a,\; \tfrac{b}{a}\}" />，<Math tex="B = \{0,\; a^2,\; b-a\}" />，若 A = B，求 <Math tex="a^{2025} + b^{2025}" /></p>
                      <div className="pl-3 border-l-2 border-blue-300 space-y-2 text-sm">
                        <div>
                          <p className="text-blue-600 font-bold">第①步：找突破口 — 0 在哪？</p>
                          <p className="text-gray-700 mt-1">0 ∈ B 且 A = B → 0 ∈ A → A 中谁 = 0？</p>
                          <p className="text-gray-700">1 ≠ 0　-a = 0 → a = 0 但 b/a 无意义 ✗　<strong>b/a = 0 → b = 0</strong>（a ≠ 0）</p>
                        </div>
                        <div>
                          <p className="text-blue-600 font-bold">第②步：b = 0 代入</p>
                          <p className="text-gray-700 mt-1">A = &#123;1, -a, 0&#125;　B = &#123;0, <Math tex="a^2" />, -a&#125;</p>
                          <p className="text-gray-700">-a 在两边都有 ✓ → 剩下 &#123;1, 0&#125; = &#123;0, <Math tex="a^2" />&#125; → <Math tex="a^2 = 1" /></p>
                        </div>
                        <div>
                          <p className="text-blue-600 font-bold">第③步：解 <Math tex="a^2 = 1" /> 并验证互异性</p>
                          <p className="text-gray-700 mt-1">a = 1：A = &#123;1, -1, 0&#125;，全部不重复 ✓</p>
                          <p className="text-gray-700">a = -1：A = &#123;1, <strong className="text-red-600">1</strong>, 0&#125;，1 重复了 ✗</p>
                        </div>
                        <p className="text-gray-800 font-bold mt-1">答案：a = 1, b = 0 → <Math tex="1^{2025} + 0^{2025} = \boxed{1}" /></p>
                      </div>
                    </div>

                    <div className="bg-[#F5E6D3] rounded-xl p-3 text-sm space-y-1">
                      <p className="font-bold text-[#7A5C3E]">做题套路（三步走）：</p>
                      <p className="text-[#9A7B5B]">① 找突破口（通常是 0 或特殊值在哪边）</p>
                      <p className="text-[#9A7B5B]">② 代入求参数（元素一一对应）</p>
                      <p className="text-[#9A7B5B]">③ <strong>验证互异性</strong>（多解时排除不满足的）</p>
                    </div>
                  </div>
                </Collapsible>

                <Collapsible title="进阶挑战：含参集合 + 分类讨论（拓展 · 高考选择题不考这么难）" storageKey="sets:technique-advanced">
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                      <p className="font-bold text-red-800">为什么难？</p>
                      <p className="text-red-700">方程的解的<strong>个数不确定</strong> → 集合的元素个数不确定 → 必须<strong>分类讨论</strong></p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                      <p className="font-bold text-gray-800">例：集合 <Math tex="M = \{x \mid (x-a)(x^2 - ax + a - 1) = 0\}" />，各元素之和为 3，求 a</p>
                      <div className="pl-3 border-l-2 border-blue-300 space-y-3 text-sm">
                        <div>
                          <p className="text-blue-600 font-bold">第①步：因式分解，找出所有根</p>
                          <p className="text-gray-700 mt-1"><Math tex="x^2 - ax + a - 1 = (x-1)(x-a+1)" /></p>
                          <p className="text-gray-700">所以方程变为 <Math tex="(x-a)(x-1)(x-a+1) = 0" /></p>
                          <p className="text-gray-700">三个根：<Math tex="x = a,\; x = 1,\; x = a-1" /></p>
                        </div>
                        <div>
                          <p className="text-blue-600 font-bold">第②步：分类讨论（根据根是否重复）</p>

                          <div className="bg-white rounded-lg p-3 border mt-1 space-y-3">
                            <div>
                              <p className="font-bold text-purple-700">情况一：三个根互不相同（a ≠ 1 且 a ≠ 2）</p>
                              <p className="text-gray-700">M = &#123;a, 1, a-1&#125;，元素和 = a + 1 + (a-1) = 2a = 3</p>
                              <p className="text-gray-700">→ <strong>a = 3/2</strong>　验证：M = &#123;3/2, 1, 1/2&#125;，全不重复 ✓</p>
                            </div>
                            <div>
                              <p className="font-bold text-purple-700">情况二：a = 1（则 a 和 1 重合）</p>
                              <p className="text-gray-700">M = &#123;1, 0&#125;，元素和 = 1 ✗</p>
                            </div>
                            <div>
                              <p className="font-bold text-purple-700">情况三：a = 2（则 1 和 a-1=1 重合）</p>
                              <p className="text-gray-700">M = &#123;2, 1&#125;，元素和 = 3 ✓ → <strong>a = 2</strong></p>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-800 font-bold">答案：<Math tex="a = \dfrac{3}{2}" /> 或 <Math tex="a = 2" /></p>
                      </div>
                    </div>

                    <div className="bg-[#F5E6D3] rounded-xl p-3 text-sm space-y-1">
                      <p className="font-bold text-[#7A5C3E]">为什么 99% 的人错？</p>
                      <p className="text-[#9A7B5B]">大多数人只算出 a = 3/2 就结束了，<strong>忘了讨论根重合的情况</strong>！</p>
                      <p className="text-[#9A7B5B]">→ <strong>含参集合必须分类讨论：先假设所有根不同解出来，再逐一检查根重合的可能！</strong></p>
                    </div>
                  </div>
                </Collapsible>

                {/* 考前提醒 */}
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 space-y-2">
                  <p className="font-bold text-amber-800">集合大题常见丢分点</p>
                  <div className="space-y-1 text-amber-700">
                    <p><strong>① 忘讨论空集：</strong>含参数时，解出的集合可能是 ∅，必须单独检验</p>
                    <p><strong>② 忘检查互异性：</strong>方程有重根时，集合元素不能重复</p>
                    <p><strong>③ 端点开闭搞反：</strong>补集端点反转（开↔闭），交并集端点取严/松</p>
                    <p><strong>④ 全集没看清：</strong>补集必须有全集 U，题目没给就不能做补集</p>
                  </div>
                </div>
              </div>
            </Collapsible>
          </section>

          {/* Section 8: 知识总结卡片 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-purple-500 text-white flex items-center justify-center text-sm font-bold">
                8
              </span>
              知识总结卡片
              <SpeakButton text={setsNarrations.summary} />
            </h2>
            <div className="bg-[#C7EDCC] text-gray-800 rounded-2xl p-6 space-y-4">
              {/* 概念基础 */}
              <div>
                <p className="text-green-800 text-xs font-bold mb-2 uppercase tracking-wider">概念基础</p>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white/60 rounded-lg p-3">
                    <p className="text-green-700 text-xs mb-1">集合</p>
                    <p>一堆<strong className="text-blue-600">确定的</strong>东西</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-3">
                    <p className="text-green-700 text-xs mb-1">三大性质</p>
                    <p>确定性 · 互异性 · 无序性</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-3">
                    <p className="text-green-700 text-xs mb-1">表示方法</p>
                    <p>列举法 · 描述法 · Venn图 · 区间</p>
                  </div>
                </div>
              </div>

              {/* 区间 + 数集 */}
              <div>
                <p className="text-green-800 text-xs font-bold mb-2 uppercase tracking-wider">区间 & 数集</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/60 rounded-lg p-3">
                    <p className="text-green-700 text-xs mb-1">区间表示法</p>
                    <p><strong className="text-blue-600">( )</strong> 不含端点 · <strong className="text-green-700">[ ]</strong> 含端点 · <strong className="text-amber-600">∞ 永远用 ( )</strong></p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-3">
                    <p className="text-green-700 text-xs mb-1">常见数集</p>
                    <p><Math tex="\mathbb{N}^* \subset \mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}" /></p>
                    <p className="text-xs text-green-700 mt-1">正→自→整→有→实</p>
                  </div>
                </div>
              </div>

              {/* 集合关系 */}
              <div>
                <p className="text-green-800 text-xs font-bold mb-2 uppercase tracking-wider">集合关系</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/60 rounded-lg p-3 space-y-1">
                    <p><Math tex="A \subseteq B" /> 子集：全在里面（<strong className="text-green-700">允许</strong>相等）</p>
                    <p><Math tex="A \subsetneq B" /> 真子集：全在里面（<strong className="text-red-600">不能</strong>相等）</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-3 space-y-1">
                    <p className="text-green-700 text-xs mb-1">子集个数公式</p>
                    <p>子集 <Math tex="2^n" /> · 真子集 <Math tex="2^n\!-\!1" /></p>
                    <p>非空 <Math tex="2^n\!-\!1" /> · 非空真 <Math tex="2^n\!-\!2" /></p>
                  </div>
                </div>
                <div className="bg-white/60 rounded-lg p-3 mt-3">
                  <p className="text-green-700 text-xs mb-1">空集铁律（必记！）</p>
                  <p><Math tex="\varnothing \subseteq A" />（任何集合）　<Math tex="\varnothing \subsetneq A" />（A 非空时）　<strong className="text-amber-600">∅ ≠ &#123;0&#125;</strong></p>
                </div>
              </div>

              {/* 集合运算 */}
              <div>
                <p className="text-green-800 text-xs font-bold mb-2 uppercase tracking-wider">集合运算</p>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white/60 rounded-lg p-3">
                    <p><Math tex="A \cap B" /> 交集</p>
                    <p className="text-xs text-green-700 mt-1">两个都有的</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-3">
                    <p><Math tex="A \cup B" /> 并集</p>
                    <p className="text-xs text-green-700 mt-1">合起来（去重）</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-3">
                    <p><Math tex="\complement_U A" /> 补集</p>
                    <p className="text-xs text-green-700 mt-1">U 去掉 A 剩的</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div className="bg-white/60 rounded-lg p-3">
                    <p className="text-green-700 text-xs mb-1">补集端点规律</p>
                    <p><strong className="text-green-700">开变闭，闭变开</strong>（{'<'} ↔ ≥，≤ ↔ {'>'}）</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-3">
                    <p className="text-green-700 text-xs mb-1">容斥原理</p>
                    <p><Math tex="|A \cup B| = |A| + |B| - |A \cap B|" /></p>
                  </div>
                </div>
              </div>

              {/* 等价转换 + 解题 */}
              <div>
                <p className="text-green-800 text-xs font-bold mb-2 uppercase tracking-wider">等价转换 & 解题</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/60 rounded-lg p-3 space-y-1">
                    <p><Math tex="A \cap B = A \;\Leftrightarrow\; A \subseteq B" /></p>
                    <p><Math tex="A \cup B = B \;\Leftrightarrow\; A \subseteq B" /></p>
                    <p><Math tex="A \cap (\complement_U A) = \varnothing" /></p>
                    <p><Math tex="A \cup (\complement_U A) = U" /></p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-3 space-y-1">
                    <p className="text-green-700 text-xs mb-1">核心解题方法</p>
                    <p>① <strong className="text-blue-600">画数轴</strong>（不等式集合必画）</p>
                    <p>② A⊆B / A∩B=∅ → <strong className="text-blue-600">看端点</strong></p>
                    <p>③ 含参集合 → <strong className="text-blue-600">互异性</strong>两两不等</p>
                    <p>④ 含参集合 → <strong className="text-blue-600">讨论空集</strong></p>
                  </div>
                </div>
              </div>

              {/* 记忆口诀 */}
              <div className="bg-white/60 rounded-lg p-3">
                <p className="text-green-800 font-bold text-xs mb-2">💡 一句话记忆口诀</p>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <p><strong className="text-green-800">交集</strong>：两边都要 → 范围<strong>缩小</strong></p>
                  <p><strong className="text-green-800">并集</strong>：有一个就行 → 范围<strong>扩大</strong></p>
                  <p><strong className="text-green-800">补集</strong>：反过来 → 端点<strong>开闭互换</strong></p>
                  <p><strong className="text-green-800">子集</strong>：小的在大的里面 → <strong>端点不能超</strong></p>
                </div>
              </div>

              {/* 陷阱清单 */}
              <div className="border-t border-green-300 pt-3">
                <p className="text-amber-700 font-bold text-xs mb-2">⚠ 高考陷阱清单</p>
                <div className="grid grid-cols-3 gap-2 text-xs text-amber-700">
                  <p>① 0 是自然数</p>
                  <p>② 子集别忘空集</p>
                  <p>③ 互异性不能重复</p>
                  <p>④ 描述法看清 x 还是 (x,y)</p>
                  <p>⑤ ∅ 和 &#123;0&#125; 不一样</p>
                  <p>⑥ 补集必须有全集 U</p>
                </div>
              </div>
            </div>
          </section>

          <PageBreak />

          {/* Section 9: Quiz */}
          <section id="sets-quiz" className="mb-8 scroll-mt-4">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-green-500 text-white flex items-center justify-center text-sm font-bold">
                9
              </span>
              高考真题实战
            </h2>
            <QuizPanel module="sets" questions={setsQuizQuestions} title="集合真题实战" description="22道选择题，覆盖高考集合全部题型" explanations={setsExplanations} />
          </section>

      {isPrinting && printOptions.showAnswers && <SetsAnswers />}
      </LessonLayout>
    </div>
  );
}
