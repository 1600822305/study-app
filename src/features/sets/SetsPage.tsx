import { Flame, AlertTriangle } from 'lucide-react';

import { Math, Collapsible, ProgressTracker, SpeakButton, QuizPanel } from '@/components/shared';
import { setsNarrations } from './data/narrations';
import { useProgress } from '@/hooks';
import { setsQuizQuestions } from './data/quiz';
import { setsProgressItems } from './data/progress';

export function SetsPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('sets', setsProgressItems);

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-blue-600 mb-2">
          <Flame size={16} />
          <span>第一阶段 · 数学语言</span>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-black text-gray-900 mb-2">1.2 集合</h1>
          <SpeakButton text={setsNarrations.intro} />
        </div>
        <p className="text-gray-700">从零到满分 · 2-3小时搞定高考必拿5分</p>
        <div className="flex flex-wrap gap-3 mt-3">
          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
            难度 ★☆☆☆☆
          </span>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
            高考必考 5分
          </span>
          <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
            约2-3小时
          </span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main content */}
        <div className="flex-1 min-w-0">
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
          <section className="mb-6">
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

                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="font-bold text-green-800 mb-1">✏️ 即时练习</p>
                  <p className="text-gray-700">1. A = &#123;2, 4, 6, 8&#125;，8 ____ A　答案：<strong>∈</strong></p>
                  <p className="text-gray-700">2. B = &#123;x | x {'>'} 5&#125;，3 ____ B　答案：<strong>∉</strong>（3 不大于 5）</p>
                </div>
              </div>
            </Collapsible>
          </section>

          {/* Section 2: 三大性质 */}
          <section className="mb-6">
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

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                  <div className="flex items-start gap-2">
                    <AlertTriangle size={16} className="text-amber-600 shrink-0 mt-0.5" />
                    <div className="text-amber-700 text-sm space-y-1">
                      <p className="font-bold">⚠️ 高考陷阱</p>
                      <p>题目说"集合 A = &#123;a, b, c&#125;"，则 a、b、c <strong>一定互不相等</strong>。互异性经常藏着出题陷阱。</p>
                    </div>
                  </div>
                </div>

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

                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="font-bold text-green-800 mb-1">✏️ 即时练习</p>
                  <p className="text-gray-700">1. 下列能构成集合的是？A. 好看的花　B. 不超过10的自然数 → 答案：<strong>B</strong></p>
                  <p className="text-gray-700">2. &#123;1, 2, 3&#125; 和 &#123;3, 2, 1&#125; 是同一个集合吗？→ 答案：<strong>是</strong>（无序性）</p>
                  <p className="text-gray-700">3. 集合 <Math tex="B = \{2,\; m,\; m^2 - m\}" />，m 不能取哪些值？→ 答案：<strong>m ≠ 2, m ≠ 0, m ≠ -1</strong>（分别让三对元素相等解出来，再排除）</p>
                </div>
              </div>
            </Collapsible>
          </section>

          {/* Section 3: 表示方法 */}
          <section className="mb-6">
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
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                      <div className="flex items-start gap-2">
                        <AlertTriangle size={16} className="text-amber-600 shrink-0 mt-0.5" />
                        <div className="text-amber-700 text-sm">
                          <p className="font-bold">⚠️ 重要区分</p>
                          <p><Math tex="\{x \mid x^2 - 4 = 0\}" /> 是<strong>数的集合</strong> = <Math tex="\{-2, 2\}" /></p>
                          <p><Math tex="\{(x,y) \mid y = x^2\}" /> 是<strong>点的集合</strong>（坐标点）</p>
                          <p>看清竖线前面是 x 还是 (x,y)！</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Collapsible>

                <Collapsible title="方法三：Venn 图（韦恩图）—— 画个圈" storageKey="sets:rep-venn">
                  <div className="space-y-4 text-sm text-gray-700">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="text-blue-700">用封闭曲线（通常是圆或椭圆）表示集合，直观展示集合间的关系。</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {/* A ⊆ U 子集 */}
                      <div className="bg-gray-50 rounded-xl p-4">
                        <p className="text-center font-bold text-gray-700 text-sm mb-2"><Math tex="A \subseteq U" />（子集）</p>
                        <svg viewBox="0 0 180 130" className="w-full">
                          <rect x="4" y="4" width="172" height="122" rx="8" fill="#f0f9ff" stroke="#93c5fd" strokeWidth="1.5" />
                          <text x="160" y="20" fontSize="14" fill="#3b82f6" fontWeight="bold">U</text>
                          <circle cx="80" cy="72" r="38" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
                          <text x="80" y="78" fontSize="18" fill="#1d4ed8" fontWeight="bold" textAnchor="middle">A</text>
                        </svg>
                      </div>

                      {/* A ∩ B 交集 */}
                      <div className="bg-gray-50 rounded-xl p-4">
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
                      <div className="bg-gray-50 rounded-xl p-4">
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
                      <div className="bg-gray-50 rounded-xl p-4">
                        <p className="text-center font-bold text-gray-700 text-sm mb-2"><Math tex="\complement_U A" />（补集）</p>
                        <svg viewBox="0 0 180 130" className="w-full">
                          <rect x="4" y="4" width="172" height="122" rx="8" fill="#fde68a" stroke="#f59e0b" strokeWidth="1.5" />
                          <text x="160" y="20" fontSize="14" fill="#b45309" fontWeight="bold">U</text>
                          <circle cx="80" cy="70" r="36" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.5" />
                          <text x="80" y="76" fontSize="18" fill="#3b82f6" fontWeight="bold" textAnchor="middle">A</text>
                          <text x="150" y="115" fontSize="14" fill="#b45309" fontWeight="bold" textAnchor="middle">补集</text>
                        </svg>
                      </div>
                    </div>

                    <p className="text-xs text-gray-700">Venn 图在做交集、并集、补集运算时特别直观，后面集合运算会大量使用。</p>
                  </div>
                </Collapsible>

                <Collapsible title="方法四：区间表示法 —— 数轴上的一段" storageKey="sets:rep-interval">
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="text-blue-700">当集合是<strong>数轴上连续的一段</strong>时，可以用区间来表示，比描述法更简洁。</p>
                      <p className="text-blue-600 text-xs mt-1">后面做交集、并集、补集运算时，到处都用区间，必须学会！</p>
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
                        <tbody className="text-xs">
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

                    <div className="bg-[#F5E6D3] rounded-xl p-3 text-xs space-y-1">
                      <p className="font-bold text-[#7A5C3E]">一句话记住：</p>
                      <p className="text-[#7A5C3E]"><strong>小括号 ( ) = 不含端点</strong>（空心圆 ○）</p>
                      <p className="text-[#7A5C3E]"><strong>中括号 [ ] = 含端点</strong>（实心圆 ●）</p>
                      <p className="text-[#7A5C3E]"><strong>∞ 永远用小括号</strong>（无穷大不是具体的数，不能"含"）</p>
                    </div>

                    <div className="bg-white rounded-lg border p-3">
                      <p className="font-bold text-xs mb-2">数轴上长什么样：</p>
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

                    <div className="bg-gray-50 rounded-lg p-3 space-y-1 text-xs">
                      <p className="font-bold">转换练习：</p>
                      <p><Math tex="\{x \mid 1 < x \leq 5\}" /> = <strong>(1, 5]</strong>　左不含用(，右含用]</p>
                      <p><Math tex="\{x \mid x \geq 3\}" /> = <strong>[3, +∞)</strong>　左含用[，∞用)</p>
                      <p><Math tex="\{x \mid x < 0\}" /> = <strong>(-∞, 0)</strong>　∞用(，右不含用)</p>
                    </div>
                  </div>
                </Collapsible>

                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="font-bold text-green-800 mb-1">✏️ 即时练习</p>
                  <p className="text-gray-700">1. 用列举法表示"不超过 5 的正整数" → 答案：<strong>&#123;1, 2, 3, 4, 5&#125;</strong></p>
                  <p className="text-gray-700">2. <Math tex="\{x \mid x^2 = 1\}" /> 用列举法 → 答案：<strong><Math tex="\{-1, 1\}" /></strong></p>
                  <p className="text-gray-700">3. 把 <Math tex="\{x \mid -3 \leq x < 2\}" /> 写成区间 → 答案：<strong>[-3, 2)</strong></p>
                  <p className="text-gray-700">4. 把 <Math tex="\{x \mid x > 5\}" /> 写成区间 → 答案：<strong>(5, +∞)</strong></p>
                </div>
              </div>
            </Collapsible>
          </section>

          {/* Section 4: 常见数集 */}
          <section className="mb-6">
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

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                  <div className="flex items-start gap-2">
                    <AlertTriangle size={16} className="text-amber-600 shrink-0 mt-0.5" />
                    <div className="text-amber-700 text-sm">
                      <p className="font-bold">⚠️ 高考知识点</p>
                      <p><strong>0 是自然数！</strong> <Math tex="0 \in \mathbb{N}" /> ✓，<Math tex="0 \notin \mathbb{N}^*" /> ✓</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="font-bold text-green-800 mb-1">✏️ 即时练习</p>
                  <p className="text-gray-700">1. <Math tex="-3" /> ____ <Math tex="\mathbb{Z}" />　答案：<strong>∈</strong></p>
                  <p className="text-gray-700">2. <Math tex="\sqrt{2}" /> ____ <Math tex="\mathbb{Q}" />　答案：<strong>∉</strong>（√2 是无理数）</p>
                  <p className="text-gray-700">3. <Math tex="\pi" /> ____ <Math tex="\mathbb{R}" />　答案：<strong>∈</strong>（π 是实数）</p>
                </div>
              </div>
            </Collapsible>
          </section>

          {/* Section 5: 集合间的关系 */}
          <section className="mb-6">
            <Collapsible title="五、集合间的关系" defaultOpen storageKey="sets:relations" headerExtra={<SpeakButton text={setsNarrations.subsets} />}>
              <p className="text-xs text-blue-600 mb-3">🎯 学完你能：判断子集和真子集关系，计算子集个数，记住空集铁律。</p>
              <div className="space-y-4 text-sm text-gray-700">

                <div className="bg-gray-50 rounded-lg p-4">
                  <p>前面学了「<strong>元素 ∈ 集合</strong>」— 判断一个东西在不在袋子里。</p>
                  <p className="mt-1">现在要学的是：<strong>两个袋子之间</strong>是什么关系？</p>
                  <p className="mt-2 text-gray-500 text-xs">就三种可能：一样大 / 一个装在另一个里面 / 没关系。往下一个一个看 ↓</p>
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
                  <p className="text-gray-500 text-xs">就这么简单，打开两个袋子看看，东西一样就相等。</p>
                </div>

                {/* ───── ② 子集 ───── */}
                <div className="border-l-4 border-green-400 pl-4 space-y-2">
                  <p className="font-bold text-green-700 text-base">② 子集 ⊆：小袋子装在大袋子里</p>
                  <p>如果 A 的<strong>每一个</strong>元素都能在 B 里找到 → A 是 B 的子集，写作 <Math tex="A \subseteq B" /></p>

                  <div className="bg-white rounded-lg border p-3">
                    <p className="font-bold text-sm mb-2">怎么判断？逐个检查 A 的元素：</p>
                    <div className="space-y-2">
                      <div className="bg-green-50 rounded-lg p-2">
                        <p className="text-green-700 font-bold text-xs mb-1">A = &#123;1, 2&#125;，B = &#123;1, 2, 3&#125;</p>
                        <p className="text-xs">1 在 B 里？<strong className="text-green-600">✓</strong>　2 在 B 里？<strong className="text-green-600">✓</strong>　→ 全在！<strong className="text-green-600">A ⊆ B ✓</strong></p>
                      </div>
                      <div className="bg-red-50 rounded-lg p-2">
                        <p className="text-red-600 font-bold text-xs mb-1">A = &#123;1, 4&#125;，B = &#123;1, 2, 3&#125;</p>
                        <p className="text-xs">1 在 B 里？<strong className="text-green-600">✓</strong>　4 在 B 里？<strong className="text-red-500">✗</strong>　→ 有一个不在！<strong className="text-red-500">A ⊆ B ✗</strong></p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                    <p className="text-amber-800 font-bold text-xs">⚠ 关键点：自己是自己的子集！</p>
                    <p className="text-amber-700 text-xs mt-1"><Math tex="\{1,2,3\} \subseteq \{1,2,3\}" /> ✓ — 每个元素当然都在自己里面</p>
                  </div>

                  <p className="text-gray-500 text-xs">生活类比：你班的男同学 ⊆ 你班的所有同学（男同学全在班里）</p>
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
                    <p className="font-bold text-[#7A5C3E] text-xs">一句话区分：</p>
                    <p className="text-[#7A5C3E] text-xs"><strong>子集 ⊆</strong>：全在里面就行（<strong>允许</strong>一模一样）</p>
                    <p className="text-[#7A5C3E] text-xs"><strong>真子集 ⊊</strong>：全在里面，而且<strong>不能</strong>一模一样（B 必须比 A 大）</p>
                  </div>
                </div>

                {/* ───── ④ 空集 ───── */}
                <div className="border-l-4 border-red-400 pl-4 space-y-2">
                  <p className="font-bold text-red-700 text-base">④ 空集 ∅：空袋子的特殊规矩</p>
                  <p><Math tex="\varnothing" /> 就是一个<strong>什么都没有</strong>的集合，空袋子。</p>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
                    <p className="font-bold text-blue-800 mb-2">空集铁律（必须背！高考必考）</p>
                    <p className="text-blue-700"><Math tex="\varnothing \subseteq A" />　空集是<strong>任何</strong>集合的子集</p>
                    <p className="text-blue-700 mt-1"><Math tex="\varnothing \subsetneq A" />　只要 A 不是空集，空集就是 A 的真子集</p>
                  </div>

                  <div className="bg-white rounded-lg border p-3 text-xs space-y-1">
                    <p className="font-bold">为什么空集是任何集合的子集？</p>
                    <p>子集的定义是「A 的<strong>每个</strong>元素都在 B 里」。</p>
                    <p>空集<strong>没有元素</strong>，所以这个条件自动满足（没有元素能违反条件）。</p>
                    <p className="text-gray-500">就好像说"这个空教室里的<strong>每个人</strong>都会飞" — 没人在里面，所以这句话不算错。</p>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                    <div className="flex items-start gap-2">
                      <AlertTriangle size={16} className="text-amber-600 shrink-0 mt-0.5" />
                      <div className="text-amber-700 text-xs space-y-1">
                        <p className="font-bold">⚠ 高考经典陷阱</p>
                        <p>题目说 A ⊆ B，很多人忘了 <strong>A 可能是 ∅</strong>！</p>
                        <p>比如 A = &#123;x | x²+1=0&#125;，这个方程无实数解 → A = ∅</p>
                        <p><strong>做子集题，第一步永远是：别忘了空集！</strong></p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-xs space-y-1">
                    <p className="font-bold text-red-700">⚠ ∅ 和 &#123;0&#125; 不一样！</p>
                    <p className="text-red-600">∅ 里面<strong>什么都没有</strong>（0 个元素）</p>
                    <p className="text-red-600">&#123;0&#125; 里面<strong>有一个元素 0</strong>（1 个元素）</p>
                  </div>
                </div>

                {/* ───── ⑤ 子集个数 ───── */}
                <div className="border-l-4 border-amber-400 pl-4 space-y-2">
                  <p className="font-bold text-amber-700 text-base">⑤ 子集个数公式</p>
                  <p>一个有 <strong>n 个元素</strong>的集合，它的子集个数有规律：</p>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <div className="grid grid-cols-[auto_auto_auto] gap-x-2 gap-y-1 text-blue-700 text-xs w-fit">
                      <span className="text-right font-bold">子集</span><span>=</span><span><Math tex="2^n" /> 个</span>
                      <span className="text-right font-bold">真子集</span><span>=</span><span><Math tex="2^n - 1" /> 个（去掉自身）</span>
                      <span className="text-right font-bold">非空子集</span><span>=</span><span><Math tex="2^n - 1" /> 个（去掉 ∅）</span>
                      <span className="text-right font-bold">非空真子集</span><span>=</span><span><Math tex="2^n - 2" /> 个（去掉自身和 ∅）</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg border p-3 text-xs">
                    <p className="font-bold mb-1">例：A = &#123;a, b, c&#125;（3 个元素）</p>
                    <p>全部子集 = 2³ = <strong>8</strong> 个：∅, &#123;a&#125;, &#123;b&#125;, &#123;c&#125;, &#123;a,b&#125;, &#123;a,c&#125;, &#123;b,c&#125;, &#123;a,b,c&#125;</p>
                    <p className="mt-1">真子集 = 8 - 1 = <strong>7</strong> 个（去掉 &#123;a,b,c&#125; 自己）</p>
                    <p>非空子集 = 8 - 1 = <strong>7</strong> 个（去掉 ∅）</p>
                    <p>非空真子集 = 8 - 2 = <strong>6</strong> 个（两头都去掉）</p>
                  </div>

                  <div className="bg-[#F5E6D3] rounded-xl p-3 text-xs">
                    <p className="font-bold text-[#7A5C3E]">为什么「真子集」和「非空子集」个数一样（都是 2ⁿ-1）？</p>
                    <p className="text-[#7A5C3E] mt-1">真子集 = 全部 - <strong>自身</strong>（去掉最大的那个）</p>
                    <p className="text-[#7A5C3E]">非空子集 = 全部 - <strong>∅</strong>（去掉最小的那个）</p>
                    <p className="text-[#7A5C3E]">各减 1，当然一样多！</p>
                  </div>
                </div>

                {/* ───── ⑥ A⊆B 参数题 ───── */}
                <div className="border-l-4 border-indigo-400 pl-4 space-y-2">
                  <p className="font-bold text-indigo-700 text-base">⑥ A⊆B 求参数范围（高考经典题型）</p>
                  <p>学会了子集的概念，现在看怎么用它来<strong>做题</strong>。</p>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-xs">
                    <p className="font-bold text-blue-800">核心思路：A ⊆ B 就是 A 完全在 B 里面。画数轴，看端点！</p>
                  </div>

                  <div className="bg-white rounded-lg border p-3 text-xs space-y-2">
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

                {/* ───── 即时练习 ───── */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 space-y-1">
                  <p className="font-bold text-green-800 mb-1">✏️ 即时练习（学完上面再做）</p>
                  <p className="text-gray-700">1. &#123;1,2&#125; ⊆ &#123;1,2,3&#125; 对吗？&#123;1,2,3&#125; ⊆ &#123;1,2,3&#125; 呢？→ <strong>都对</strong>（自己也是自己的子集）</p>
                  <p className="text-gray-700">2. &#123;1,2,3&#125; ⊊ &#123;1,2,3&#125; 对吗？→ <strong>不对</strong>（相等不算真子集）</p>
                  <p className="text-gray-700">3. ∅ 和 &#123;0&#125; 一样吗？→ <strong>不一样</strong>（∅ 是 0 个元素，&#123;0&#125; 有 1 个元素）</p>
                  <p className="text-gray-700">4. &#123;1, 2&#125; 的子集有几个？→ <strong>2² = 4 个</strong>（∅, &#123;1&#125;, &#123;2&#125;, &#123;1,2&#125;）</p>
                  <p className="text-gray-700">5. &#123;1, 2&#125; 的非空子集有几个？→ <strong>2² - 1 = 3 个</strong>（&#123;1&#125;, &#123;2&#125;, &#123;1,2&#125;）</p>
                  <p className="text-gray-700">6. &#123;1, 2&#125; 的非空真子集有几个？→ <strong>2² - 2 = 2 个</strong>（&#123;1&#125;, &#123;2&#125;）</p>
                  <p className="text-gray-700">7. A = &#123;x | x {'<'} a&#125;，B = &#123;x | x {'<'} 3&#125;，若 B ⊆ A，则 a 的范围？→ <strong>a ≥ 3</strong></p>
                </div>
              </div>
            </Collapsible>
          </section>

          {/* Section 6: 集合的运算 */}
          <section className="mb-6">
            <Collapsible title="六、集合的运算（高考核心！）" defaultOpen storageKey="sets:operations" headerExtra={<SpeakButton text={setsNarrations.operations} />}>
              <p className="text-xs text-blue-600 mb-3">🎯 学完你能：熟练做交集、并集、补集运算，掌握混合运算技巧。</p>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="font-bold text-blue-800">核心方法</p>
                  <p className="text-blue-700">遇到不等式集合 → <strong>画数轴</strong> → 一目了然。数轴法是做集合运算的核武器！</p>
                </div>

                <Collapsible title="交集 ∩ —— 取公共部分" storageKey="sets:intersection" headerExtra={<SpeakButton text={setsNarrations.intersection} />}>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center gap-4 flex-wrap">
                        <div className="flex-1 min-w-[200px]">
                          <p className="font-bold text-blue-800 mb-2">定义</p>
                          <Math tex="A \cap B = \{x \mid x \in A \text{ 且 } x \in B\}" display />
                          <p className="text-blue-600 text-xs mt-2">口诀：交集 = <strong>两个都要有</strong></p>
                        </div>
                        <svg viewBox="0 0 160 110" className="w-28 shrink-0">
                          <rect x="3" y="3" width="154" height="104" rx="6" fill="#f0f9ff" stroke="#93c5fd" strokeWidth="1" />
                          <circle cx="58" cy="55" r="32" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.2" fillOpacity="0.4" />
                          <circle cx="98" cy="55" r="32" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.2" fillOpacity="0.4" />
                          <clipPath id="opClipA"><circle cx="58" cy="55" r="32" /></clipPath>
                          <circle cx="98" cy="55" r="32" fill="#bbf7d0" fillOpacity="0.8" clipPath="url(#opClipA)" />
                          <text x="42" y="59" fontSize="12" fill="#1d4ed8" fontWeight="bold" textAnchor="middle">A</text>
                          <text x="114" y="59" fontSize="12" fill="#b45309" fontWeight="bold" textAnchor="middle">B</text>
                        </svg>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                      <p className="font-bold text-gray-800">例1（列举法）：</p>
                      <p><Math tex="A = \{1,2,3,5\}" />，<Math tex="B = \{2,4,5,6\}" /></p>
                      <p>找两个都有的 → <Math tex="A \cap B = \{2, 5\}" /></p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                      <p className="font-bold text-gray-800">例2（数轴法）：</p>
                      <p><Math tex="A = \{x \mid 1 < x < 5\}" />，<Math tex="B = \{x \mid 3 < x < 8\}" /></p>
                      <div className="font-mono text-xs bg-white rounded p-2 border">
                        <p>A: &nbsp;&nbsp;(1────────5)</p>
                        <p>B: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(3────────8)</p>
                        <p>重叠：&nbsp;&nbsp;&nbsp;&nbsp;(3────5)</p>
                      </div>
                      <p><Math tex="A \cap B = \{x \mid 3 < x < 5\}" /></p>
                    </div>
                  </div>
                </Collapsible>

                <Collapsible title="A∩B=∅ 求参数范围（高考高频题型）" storageKey="sets:intersection-empty">
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="font-bold text-blue-800">核心思路</p>
                      <p className="text-blue-700"><Math tex="A \cap B = \varnothing" /> 就是 A 和 B <strong>完全没有公共部分</strong>，在数轴上<strong>完全分开</strong>。</p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                      <p className="font-bold text-gray-800">例：<Math tex="A = \{x \mid 1 \leq x \leq 3\}" />，<Math tex="B = \{x \mid x > a\}" />，若 <Math tex="A \cap B = \varnothing" />，求 a</p>
                      <div className="pl-3 border-l-2 border-blue-300 space-y-2 text-xs">
                        <div>
                          <p className="text-blue-600 font-bold">第①步：画数轴</p>
                          <div className="bg-white rounded-lg p-2 border mt-1">
                            <svg viewBox="0 0 360 80" className="w-full">
                              <line x1="20" y1="25" x2="340" y2="25" stroke="#d1d5db" strokeWidth="1" />
                              <line x1="20" y1="50" x2="340" y2="50" stroke="#d1d5db" strokeWidth="1" />
                              <line x1="100" y1="19" x2="100" y2="31" stroke="#6b7280" strokeWidth="1" />
                              <line x1="200" y1="19" x2="200" y2="31" stroke="#6b7280" strokeWidth="1" />
                              <line x1="240" y1="44" x2="240" y2="56" stroke="#6b7280" strokeWidth="1" />
                              <text x="100" y="72" fontSize="10" fill="#374151" textAnchor="middle">1</text>
                              <text x="200" y="72" fontSize="10" fill="#374151" textAnchor="middle">3</text>
                              <text x="240" y="72" fontSize="10" fill="#374151" textAnchor="middle">a</text>
                              {/* A: [1,3] */}
                              <line x1="100" y1="25" x2="200" y2="25" stroke="#3b82f6" strokeWidth="3" />
                              <circle cx="100" cy="25" r="3" fill="#3b82f6" />
                              <circle cx="200" cy="25" r="3" fill="#3b82f6" />
                              <text x="150" y="18" fontSize="10" fill="#3b82f6" fontWeight="bold" textAnchor="middle">A: [1, 3]</text>
                              {/* B: (a, +∞) */}
                              <line x1="240" y1="50" x2="340" y2="50" stroke="#f59e0b" strokeWidth="3" />
                              <circle cx="240" cy="50" r="3" fill="white" stroke="#f59e0b" strokeWidth="1.5" />
                              <text x="290" y="44" fontSize="10" fill="#f59e0b" fontWeight="bold" textAnchor="middle">B: (a, +∞)</text>
                            </svg>
                          </div>
                        </div>
                        <div>
                          <p className="text-blue-600 font-bold">第②步：要完全分开 → B 的左端 a 必须在 A 的右边</p>
                          <p className="text-gray-600 mt-1">a = 2 → B = (2, +∞)，A 里的 2.5 和 B 重叠了 ✗</p>
                          <p className="text-gray-600">a = 3 → B = (3, +∞)，A 最大是 3（含），B 从 3 开始（不含），刚好不重叠 ✓</p>
                          <p className="text-gray-800 mt-1">答案：<strong><Math tex="a \geq 3" /></strong></p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#F5E6D3] rounded-xl p-3 text-xs space-y-1">
                      <p className="font-bold text-[#7A5C3E]">口诀：A∩B=∅ → 数轴上完全分开 → 看端点够不够远</p>
                      <p className="text-[#9A7B5B]">注意开闭区间！端点一个含一个不含时，刚好"挨着"算分开。</p>
                    </div>
                  </div>
                </Collapsible>

                <Collapsible title="并集 ∪ —— 取所有的" storageKey="sets:union" headerExtra={<SpeakButton text={setsNarrations.union} />}>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center gap-4 flex-wrap">
                        <div className="flex-1 min-w-[200px]">
                          <p className="font-bold text-blue-800 mb-2">定义</p>
                          <Math tex="A \cup B = \{x \mid x \in A \text{ 或 } x \in B\}" display />
                          <p className="text-blue-600 text-xs mt-2">口诀：并集 = <strong>只要有一个就行</strong>（去重）</p>
                        </div>
                        <svg viewBox="0 0 160 110" className="w-28 shrink-0">
                          <rect x="3" y="3" width="154" height="104" rx="6" fill="#f0f9ff" stroke="#93c5fd" strokeWidth="1" />
                          <circle cx="58" cy="55" r="32" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.2" fillOpacity="0.6" />
                          <circle cx="98" cy="55" r="32" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.2" fillOpacity="0.6" />
                          <text x="42" y="59" fontSize="12" fill="#15803d" fontWeight="bold" textAnchor="middle">A</text>
                          <text x="114" y="59" fontSize="12" fill="#15803d" fontWeight="bold" textAnchor="middle">B</text>
                        </svg>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                      <p className="font-bold text-gray-800">例（列举法）：</p>
                      <p><Math tex="\{1,2,3\} \cup \{2,4,5\} = \{1,2,3,4,5\}" /></p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                      <p className="font-bold text-gray-800">例（数轴法）：</p>
                      <p><Math tex="A = \{x \mid 1 < x < 5\}" />，<Math tex="B = \{x \mid 3 < x < 8\}" /></p>
                      <p>合起来 → <Math tex="A \cup B = \{x \mid 1 < x < 8\}" /></p>
                    </div>
                  </div>
                </Collapsible>

                <Collapsible title="补集 ∁ᵤA —— 取剩下的" storageKey="sets:complement" headerExtra={<SpeakButton text={setsNarrations.complement} />}>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center gap-4 flex-wrap">
                        <div className="flex-1 min-w-[200px]">
                          <p className="font-bold text-blue-800 mb-2">定义</p>
                          <Math tex="\complement_U A = \{x \mid x \in U \text{ 且 } x \notin A\}" display />
                          <p className="text-blue-600 text-xs mt-2">口诀：补集 = <strong>U 里去掉 A 剩下的</strong>（必须有全集 U！）</p>
                        </div>
                        <svg viewBox="0 0 160 110" className="w-28 shrink-0">
                          <rect x="3" y="3" width="154" height="104" rx="6" fill="#fde68a" stroke="#f59e0b" strokeWidth="1.2" />
                          <text x="145" y="18" fontSize="11" fill="#b45309" fontWeight="bold">U</text>
                          <circle cx="72" cy="55" r="30" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.2" />
                          <text x="72" y="59" fontSize="12" fill="#3b82f6" fontWeight="bold" textAnchor="middle">A</text>
                          <text x="135" y="98" fontSize="10" fill="#b45309" fontWeight="bold" textAnchor="middle">补集</text>
                        </svg>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                      <p className="font-bold text-gray-800">例（列举法）：</p>
                      <p>U = &#123;1,2,3,4,5&#125;，A = &#123;1,3,5&#125; → <Math tex="\complement_U A = \{2, 4\}" /></p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                      <p className="font-bold text-gray-800">例（数轴法 · 图解）：</p>
                      <p><Math tex="U = \mathbb{R}" />，<Math tex="A = \{x \mid 1 \leq x < 5\}" />，求 <Math tex="\complement_U A" /></p>

                      <div className="bg-white rounded-lg p-3 border">
                        <p className="text-xs text-gray-700 mb-2 font-bold">第①步：画出 A 的范围</p>
                        <svg viewBox="0 0 340 50" className="w-full">
                          <line x1="20" y1="30" x2="320" y2="30" stroke="#d1d5db" strokeWidth="1.5" />
                          {/* ticks */}
                          <line x1="100" y1="24" x2="100" y2="36" stroke="#6b7280" strokeWidth="1.5" />
                          <text x="100" y="46" fontSize="11" fill="#374151" textAnchor="middle">1</text>
                          <line x1="240" y1="24" x2="240" y2="36" stroke="#6b7280" strokeWidth="1.5" />
                          <text x="240" y="46" fontSize="11" fill="#374151" textAnchor="middle">5</text>
                          {/* A range */}
                          <line x1="100" y1="30" x2="240" y2="30" stroke="#3b82f6" strokeWidth="4" />
                          <circle cx="100" cy="30" r="4" fill="#3b82f6" />
                          <circle cx="240" cy="30" r="4" fill="white" stroke="#3b82f6" strokeWidth="2" />
                          <text x="170" y="20" fontSize="11" fill="#3b82f6" fontWeight="bold" textAnchor="middle">A：[1, 5)</text>
                          {/* endpoint labels */}
                          <text x="100" y="14" fontSize="9" fill="#3b82f6" textAnchor="middle">实心=含1</text>
                          <text x="240" y="14" fontSize="9" fill="#f59e0b" textAnchor="middle">空心=不含5</text>
                        </svg>
                      </div>

                      <div className="bg-white rounded-lg p-3 border">
                        <p className="text-xs text-gray-700 mb-2 font-bold">第②步：补集 = 数轴上剩下的部分，端点反转！</p>
                        <svg viewBox="0 0 340 50" className="w-full">
                          <line x1="20" y1="30" x2="320" y2="30" stroke="#d1d5db" strokeWidth="1.5" />
                          <line x1="100" y1="24" x2="100" y2="36" stroke="#6b7280" strokeWidth="1.5" />
                          <text x="100" y="46" fontSize="11" fill="#374151" textAnchor="middle">1</text>
                          <line x1="240" y1="24" x2="240" y2="36" stroke="#6b7280" strokeWidth="1.5" />
                          <text x="240" y="46" fontSize="11" fill="#374151" textAnchor="middle">5</text>
                          {/* complement left */}
                          <line x1="20" y1="30" x2="100" y2="30" stroke="#ef4444" strokeWidth="4" />
                          <circle cx="100" cy="30" r="4" fill="white" stroke="#ef4444" strokeWidth="2" />
                          <text x="20" y="20" fontSize="10" fill="#ef4444" fontWeight="bold">←</text>
                          {/* complement right */}
                          <line x1="240" y1="30" x2="320" y2="30" stroke="#ef4444" strokeWidth="4" />
                          <circle cx="240" cy="30" r="4" fill="#ef4444" />
                          <text x="318" y="20" fontSize="10" fill="#ef4444" fontWeight="bold">→</text>
                          {/* labels */}
                          <text x="60" y="18" fontSize="10" fill="#ef4444" fontWeight="bold" textAnchor="middle">x {'<'} 1</text>
                          <text x="280" y="18" fontSize="10" fill="#ef4444" fontWeight="bold" textAnchor="middle">x ≥ 5</text>
                          <text x="100" y="14" fontSize="9" fill="#ef4444" textAnchor="middle">空心=不含1</text>
                          <text x="240" y="14" fontSize="9" fill="#ef4444" textAnchor="middle">实心=含5</text>
                        </svg>
                      </div>

                      <p className="text-sm">结果：<Math tex="\complement_U A = \{x \mid x < 1 \text{ 或 } x \geq 5\}" /></p>
                    </div>

                    <div className="bg-[#F5E6D3] rounded-xl p-5">
                      <p className="font-bold text-[#7A5C3E] mb-3 text-center">补集端点规律（必记！）</p>
                      <div className="grid grid-cols-[auto_auto_auto_auto] gap-x-3 gap-y-2 w-fit mx-auto text-sm">
                        <span className="font-bold text-[#7A5C3E]">A 的端点</span><span></span><span className="font-bold text-[#7A5C3E]">补集端点</span><span className="font-bold text-[#7A5C3E]">图上看</span>
                        <span>{'<'}（不含）</span><span>→</span><span>≥（含）</span><span className="text-gray-700">空心 → 实心</span>
                        <span>≤（含）</span><span>→</span><span>{'>'}（不含）</span><span className="text-gray-700">实心 → 空心</span>
                      </div>
                      <p className="text-[#9A7B5B] font-bold text-center mt-3">口诀：<strong className="text-[#7A5C3E]">开变闭，闭变开</strong>（空心变实心，实心变空心）</p>
                    </div>
                  </div>
                </Collapsible>

                <Collapsible title="交并补混合运算（高考最爱考！）" storageKey="sets:mixed-ops">
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="bg-[#F5E6D3] rounded-xl p-4">
                      <p className="font-bold text-[#7A5C3E] mb-2">解题模板（三步走）</p>
                      <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-sm text-[#7A5C3E]">
                        <span className="font-bold">①</span><span>看清求什么 → 找出运算顺序（先括号内，再括号外）</span>
                        <span className="font-bold">②</span><span>遇到补集 → 端点反转（开变闭，闭变开）</span>
                        <span className="font-bold">③</span><span>遇到交/并 → 画数轴，交取重叠，并取全部</span>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                      <p className="font-bold text-gray-800">例1：<Math tex="U = \mathbb{R}" />，<Math tex="A = \{x \mid x \leq 1\}" />，<Math tex="B = \{x \mid x > -1\}" /></p>
                      <p className="font-bold">求 <Math tex="A \cap (\complement_U B)" /></p>
                      <div className="pl-3 border-l-2 border-blue-300 space-y-3">
                        <div>
                          <p><span className="text-blue-600 font-bold">第①步</span>：先求 <Math tex="\complement_U B" />（端点反转）</p>
                          <p className="pl-4">B = &#123;x | x {'>'} -1&#125; → 补集 = <Math tex="\{x \mid x \leq -1\}" /></p>
                        </div>
                        <div>
                          <p><span className="text-blue-600 font-bold">第②步</span>：画数轴求 <Math tex="A \cap (\complement_U B)" /></p>
                          <div className="bg-white rounded-lg p-3 border">
                            <svg viewBox="0 0 340 70" className="w-full">
                              <line x1="20" y1="20" x2="320" y2="20" stroke="#d1d5db" strokeWidth="1" />
                              <line x1="20" y1="45" x2="320" y2="45" stroke="#d1d5db" strokeWidth="1" />
                              {/* tick at -1 */}
                              <line x1="120" y1="14" x2="120" y2="26" stroke="#6b7280" strokeWidth="1" />
                              <line x1="120" y1="39" x2="120" y2="51" stroke="#6b7280" strokeWidth="1" />
                              {/* tick at 1 */}
                              <line x1="220" y1="14" x2="220" y2="26" stroke="#6b7280" strokeWidth="1" />
                              <text x="120" y="64" fontSize="10" fill="#374151" textAnchor="middle">-1</text>
                              <text x="220" y="64" fontSize="10" fill="#374151" textAnchor="middle">1</text>
                              {/* A: x ≤ 1 */}
                              <line x1="20" y1="20" x2="220" y2="20" stroke="#3b82f6" strokeWidth="3" />
                              <circle cx="220" cy="20" r="3" fill="#3b82f6" />
                              <text x="22" y="14" fontSize="9" fill="#3b82f6" fontWeight="bold">← A : x ≤ 1</text>
                              {/* 补B: x ≤ -1 */}
                              <line x1="20" y1="45" x2="120" y2="45" stroke="#ef4444" strokeWidth="3" />
                              <circle cx="120" cy="45" r="3" fill="#ef4444" />
                              <text x="22" y="39" fontSize="9" fill="#ef4444" fontWeight="bold">← 补B : x ≤ -1</text>
                            </svg>
                          </div>
                          <p className="pl-4">重叠部分 = <Math tex="\{x \mid x \leq -1\}" /></p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                      <p className="font-bold text-gray-800">例2：<Math tex="U = \mathbb{R}" />，<Math tex="A = \{x \mid 1 < x \leq 4\}" />，<Math tex="B = \{x \mid 2 \leq x < 5\}" /></p>
                      <p className="font-bold">求 <Math tex="\complement_U(A \cap B)" /></p>
                      <div className="pl-3 border-l-2 border-blue-300 space-y-3">
                        <div>
                          <p><span className="text-blue-600 font-bold">第①步</span>：先求括号内 <Math tex="A \cap B" /></p>
                          <div className="bg-white rounded-lg p-3 border">
                            <svg viewBox="0 0 340 70" className="w-full">
                              <line x1="20" y1="20" x2="320" y2="20" stroke="#d1d5db" strokeWidth="1" />
                              <line x1="20" y1="45" x2="320" y2="45" stroke="#d1d5db" strokeWidth="1" />
                              {/* ticks 1,2,4,5 */}
                              <line x1="70" y1="14" x2="70" y2="26" stroke="#6b7280" strokeWidth="1" />
                              <line x1="130" y1="14" x2="130" y2="51" stroke="#6b7280" strokeWidth="1" />
                              <line x1="250" y1="14" x2="250" y2="51" stroke="#6b7280" strokeWidth="1" />
                              <line x1="310" y1="39" x2="310" y2="51" stroke="#6b7280" strokeWidth="1" />
                              <text x="70" y="64" fontSize="10" fill="#374151" textAnchor="middle">1</text>
                              <text x="130" y="64" fontSize="10" fill="#374151" textAnchor="middle">2</text>
                              <text x="250" y="64" fontSize="10" fill="#374151" textAnchor="middle">4</text>
                              <text x="310" y="64" fontSize="10" fill="#374151" textAnchor="middle">5</text>
                              {/* A: (1,4] */}
                              <line x1="70" y1="20" x2="250" y2="20" stroke="#3b82f6" strokeWidth="3" />
                              <circle cx="70" cy="20" r="3" fill="white" stroke="#3b82f6" strokeWidth="1.5" />
                              <circle cx="250" cy="20" r="3" fill="#3b82f6" />
                              <text x="160" y="14" fontSize="9" fill="#3b82f6" fontWeight="bold" textAnchor="middle">A: (1, 4]</text>
                              {/* B: [2,5) */}
                              <line x1="130" y1="45" x2="310" y2="45" stroke="#f59e0b" strokeWidth="3" />
                              <circle cx="130" cy="45" r="3" fill="#f59e0b" />
                              <circle cx="310" cy="45" r="3" fill="white" stroke="#f59e0b" strokeWidth="1.5" />
                              <text x="220" y="39" fontSize="9" fill="#f59e0b" fontWeight="bold" textAnchor="middle">B: [2, 5)</text>
                            </svg>
                          </div>
                          <p className="pl-4">重叠 = <Math tex="A \cap B = \{x \mid 2 \leq x \leq 4\} = [2, 4]" /></p>
                        </div>
                        <div>
                          <p><span className="text-blue-600 font-bold">第②步</span>：再求补集（端点反转）</p>
                          <p className="pl-4"><Math tex="\complement_U(A \cap B) = \{x \mid x < 2 \text{ 或 } x > 4\}" /></p>
                          <p className="pl-4 text-xs text-gray-700">[2,4] → 补集两端：2 的 ≤ 变 {'<'}，4 的 ≤ 变 {'>'}</p>
                        </div>
                      </div>
                    </div>

                    <Collapsible title="📎 拓展了解：德摩根定律（高考不直接考）" storageKey="sets:demorgan" defaultOpen={false}>
                      <div className="space-y-3 text-sm">
                        <div className="space-y-1 text-gray-700">
                          <p><Math tex="\complement_U(A \cup B) = (\complement_U A) \cap (\complement_U B)" /> — 并的补 = 补的交</p>
                          <p><Math tex="\complement_U(A \cap B) = (\complement_U A) \cup (\complement_U B)" /> — 交的补 = 补的并</p>
                          <p>记法：<strong>补号穿进括号，∩ 和 ∪ 互换</strong></p>
                        </div>

                        <div className="bg-green-50 border border-green-200 rounded-lg p-4 space-y-3">
                          <p className="font-bold text-green-800">验证公式1：并的补 = 补的交</p>
                          <p><strong>题目：</strong>U = &#123;1,2,3,4,5,6&#125;，A = &#123;1,2,3&#125;，B = &#123;2,3,4&#125;，求 <Math tex="\complement_U(A \cup B)" /></p>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-white rounded-lg p-3 border space-y-1">
                              <p className="font-bold text-blue-700">常规：先并再补</p>
                              <p>A ∪ B = &#123;1,2,3,4&#125;</p>
                              <p>U 中去掉 &#123;1,2,3,4&#125;</p>
                              <p>= <strong className="text-blue-700">&#123;5, 6&#125;</strong></p>
                            </div>
                            <div className="bg-white rounded-lg p-3 border space-y-1">
                              <p className="font-bold text-purple-700">德摩根捷径</p>
                              <p>补A = &#123;4,5,6&#125;</p>
                              <p>补B = &#123;1,5,6&#125;</p>
                              <p>补A ∩ 补B = <strong className="text-purple-700">&#123;5, 6&#125;</strong> ✓</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 space-y-3">
                          <p className="font-bold text-orange-800">验证公式2：交的补 = 补的并</p>
                          <p><strong>题目：</strong>U = &#123;1,2,3,4,5,6&#125;，A = &#123;1,2,3&#125;，B = &#123;2,3,4&#125;，求 <Math tex="\complement_U(A \cap B)" /></p>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-white rounded-lg p-3 border space-y-1">
                              <p className="font-bold text-blue-700">常规：先交再补</p>
                              <p>A ∩ B = &#123;2,3&#125;</p>
                              <p>U 中去掉 &#123;2,3&#125;</p>
                              <p>= <strong className="text-blue-700">&#123;1,4,5,6&#125;</strong></p>
                            </div>
                            <div className="bg-white rounded-lg p-3 border space-y-1">
                              <p className="font-bold text-purple-700">德摩根捷径</p>
                              <p>补A = &#123;4,5,6&#125;</p>
                              <p>补B = &#123;1,5,6&#125;</p>
                              <p>补A ∪ 补B = <strong className="text-purple-700">&#123;1,4,5,6&#125;</strong> ✓</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                          <p className="text-blue-700">💡 高考做题<strong>直接用常规方法</strong>（先算括号内，再取补集）就够了，步骤清晰不容易错。</p>
                        </div>
                      </div>
                    </Collapsible>
                  </div>
                </Collapsible>

                <Collapsible title="运算法则速查" storageKey="sets:op-laws">
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="bg-gray-50 rounded-lg p-4 space-y-1">
                      <p><Math tex="A \cap A = A" /> 　 <Math tex="A \cup A = A" /></p>
                      <p><Math tex="A \cap \varnothing = \varnothing" /> 　 <Math tex="A \cup \varnothing = A" /></p>
                      <p><Math tex="A \cap U = A" /> 　 <Math tex="A \cup U = U" /></p>
                      <p><Math tex="A \cap B = B \cap A" /> 　 <Math tex="A \cup B = B \cup A" />（交换律）</p>
                      <p><Math tex="A \cap (\complement_U A) = \varnothing" /> 　 <Math tex="A \cup (\complement_U A) = U" />（互补）</p>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="text-blue-700 text-xs"><strong>快速判断：</strong>如果 <Math tex="A \subseteq B" />，则 <Math tex="A \cap B = A" />，<Math tex="A \cup B = B" /></p>
                    </div>
                  </div>
                </Collapsible>

                <Collapsible title="集合计数——容斥原理（韦恩图应用）" storageKey="sets:inclusion-exclusion">
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-2">
                      <p className="font-bold text-blue-800">核心公式</p>
                      <Math tex="|A \cup B| = |A| + |B| - |A \cap B|" display />
                      <p className="text-blue-700 text-xs">口诀：<strong>加了两个再减掉重复的</strong>（因为重叠部分被加了两次）</p>
                    </div>

                    <div className="flex justify-center">
                      <svg viewBox="0 0 280 160" className="w-full max-w-xs">
                        <rect x="3" y="3" width="274" height="154" rx="8" fill="#f9fafb" stroke="#d1d5db" strokeWidth="1" />
                        <circle cx="105" cy="80" r="50" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" strokeWidth="1.5" />
                        <circle cx="175" cy="80" r="50" fill="rgba(234,179,8,0.15)" stroke="#eab308" strokeWidth="1.5" />
                        <text x="80" y="78" fontSize="13" fontWeight="bold" fill="#2563eb" textAnchor="middle">只A</text>
                        <text x="140" y="72" fontSize="12" fontWeight="bold" fill="#7c3aed" textAnchor="middle">A∩B</text>
                        <text x="140" y="88" fontSize="10" fill="#7c3aed" textAnchor="middle">(重叠)</text>
                        <text x="200" y="78" fontSize="13" fontWeight="bold" fill="#ca8a04" textAnchor="middle">只B</text>
                        <text x="70" y="40" fontSize="12" fill="#3b82f6">A</text>
                        <text x="200" y="40" fontSize="12" fill="#ca8a04">B</text>
                        <text x="140" y="148" fontSize="11" fill="#6b7280" textAnchor="middle">两个都没参加 = 总数 - |A∪B|</text>
                      </svg>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                      <p className="font-bold text-gray-800">例题：某班 50 人，数学兴趣组 30 人，物理兴趣组 25 人，两个都参加 15 人</p>
                      <div className="pl-3 border-l-2 border-blue-300 space-y-1">
                        <p><span className="text-blue-600 font-bold">第①步</span>：求参加了至少一个的人数</p>
                        <p className="pl-4"><Math tex="|A \cup B| = 30 + 25 - 15 = 40" /></p>
                        <p><span className="text-blue-600 font-bold">第②步</span>：总数减去参加了的</p>
                        <p className="pl-4">两个都没参加 = 50 - 40 = <strong className="text-green-700">10 人</strong></p>
                      </div>
                    </div>

                    <div className="bg-[#F5E6D3] rounded-xl p-4">
                      <p className="font-bold text-[#7A5C3E] mb-1">记忆技巧</p>
                      <p className="text-[#7A5C3E]">想象两个圆重叠——直接加会<strong>多算一次重叠区</strong>，所以要<strong>减掉一次</strong>。</p>
                    </div>
                  </div>
                </Collapsible>

                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="font-bold text-green-800 mb-1">✏️ 即时练习</p>
                  <p className="text-gray-700">1. A = &#123;1,3,5,7&#125;，B = &#123;3,5,8&#125;，A ∩ B = ____　答案：<strong>&#123;3, 5&#125;</strong></p>
                  <p className="text-gray-700">2. U = &#123;1,2,3,4,5&#125;，A = &#123;2,4&#125;，∁ᵤA = ____　答案：<strong>&#123;1, 3, 5&#125;</strong></p>
                  <p className="text-gray-700">3. A = &#123;x | -1 ≤ x {'<'} 3&#125;，B = &#123;x | 2 {'<'} x ≤ 5&#125;，A ∩ B = ____　答案：<strong>(2, 3)</strong></p>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                  <div className="flex items-start gap-2">
                    <AlertTriangle size={16} className="text-amber-600 shrink-0 mt-0.5" />
                    <div className="text-amber-700 text-sm space-y-1">
                      <p className="font-bold">⚠️ 易错点</p>
                      <p>补集<strong>必须说明全集 U</strong>，没有全集就没有补集</p>
                      <p>端点开闭要看清：<Math tex="[1,3) \cap (2,5] = (2,3)" /> 注意中间是开区间</p>
                      <p>混合运算<strong>先算括号内</strong>，通常先求补集</p>
                    </div>
                  </div>
                </div>
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
                          <p className="text-gray-700 mt-1">A = &#123;1, -a, 0&#125;　B = &#123;0, a², -a&#125;</p>
                          <p className="text-gray-700">-a 在两边都有 ✓ → 剩下 &#123;1, 0&#125; = &#123;0, a²&#125; → <strong>a² = 1</strong></p>
                        </div>
                        <div>
                          <p className="text-blue-600 font-bold">第③步：解 a² = 1 并验证互异性</p>
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
              </div>
            </Collapsible>
          </section>

          {/* 公式速查表 */}
          <section className="mb-6">
            <Collapsible title="📌 公式速查表" storageKey="sets:cheatsheet">
              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <p className="font-bold text-gray-800 mb-2">集合关系</p>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                    <p><Math tex="A \subseteq B" />：A 的每个元素都在 B 中（子集）</p>
                    <p><Math tex="A \subsetneq B" />：子集但不相等（真子集）</p>
                    <p><Math tex="\varnothing \subseteq A" />：空集是任何集合的子集</p>
                    <p>n 个元素 → <Math tex="2^n" /> 个子集</p>
                  </div>
                </div>
                <div>
                  <p className="font-bold text-gray-800 mb-2">集合运算</p>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                    <p><Math tex="A \cap B" />：公共部分（两个都有）</p>
                    <p><Math tex="A \cup B" />：全部合起来（去重）</p>
                    <p><Math tex="\complement_U A" />：U 里去掉 A 剩下的</p>
                  </div>
                </div>
                <div>
                  <p className="font-bold text-gray-800 mb-2">补集端点</p>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                    <p>{'<'} → ≥，≤ → {'>'}，{'>'} → ≤，≥ → {'<'}</p>
                    <p className="text-xs text-gray-700">口诀：<strong className="text-gray-700">开变闭，闭变开</strong></p>
                  </div>
                </div>
                <div>
                  <p className="font-bold text-gray-800 mb-2">等价转换</p>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                    <p><Math tex="A \cap B = A \;\Leftrightarrow\; A \subseteq B" /></p>
                    <p><Math tex="A \cup B = B \;\Leftrightarrow\; A \subseteq B" /></p>
                    <p><Math tex="A \cap (\complement_U A) = \varnothing" />，<Math tex="A \cup (\complement_U A) = U" /></p>
                  </div>
                </div>
                <div>
                  <p className="font-bold text-gray-800 mb-2">高考陷阱清单</p>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                    <p>① 0 是自然数（<Math tex="0 \in \mathbb{N}" />）</p>
                    <p>② 子集问题别忘空集</p>
                    <p>③ 互异性：集合元素不能重复</p>
                    <p>④ 描述法看清 x 还是 (x,y)</p>
                  </div>
                </div>
              </div>
            </Collapsible>
          </section>

          {/* Section 8: Quiz */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-green-500 text-white flex items-center justify-center text-sm font-bold">
                8
              </span>
              高考真题实战
            </h2>
            <QuizPanel module="sets" questions={setsQuizQuestions} title="集合真题实战" description="22道选择题，覆盖高考集合全部题型" />
          </section>

          {/* Section 9: 知识总结卡片 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-purple-500 text-white flex items-center justify-center text-sm font-bold">
                9
              </span>
              知识总结卡片
              <SpeakButton text={setsNarrations.summary} />
            </h2>
            <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-4 text-sm">
              {/* 第一行：概念基础 */}
              <div>
                <p className="text-slate-400 text-xs font-bold mb-2 uppercase tracking-wider">概念基础</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-slate-800 rounded-lg p-3">
                    <p className="text-slate-400 text-xs mb-1">集合</p>
                    <p>一堆<strong className="text-blue-300">确定的</strong>东西</p>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-3">
                    <p className="text-slate-400 text-xs mb-1">三大性质</p>
                    <p>确定性 · 互异性 · 无序性</p>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-3">
                    <p className="text-slate-400 text-xs mb-1">表示方法</p>
                    <p>列举法 · 描述法 · Venn图 · 区间</p>
                  </div>
                </div>
              </div>

              {/* 第二行：区间 + 数集 */}
              <div>
                <p className="text-slate-400 text-xs font-bold mb-2 uppercase tracking-wider">区间 & 数集</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-slate-800 rounded-lg p-3 space-y-1">
                    <p className="text-slate-400 text-xs mb-1">区间表示法</p>
                    <p><strong className="text-blue-300">( )</strong> 不含端点 · <strong className="text-green-300">[ ]</strong> 含端点 · <strong className="text-amber-300">∞ 永远用 ( )</strong></p>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-3 space-y-1">
                    <p className="text-slate-400 text-xs mb-1">常见数集</p>
                    <p><Math tex="\mathbb{N}^* \subset \mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}" /></p>
                    <p className="text-xs text-slate-400">正→自→整→有→实</p>
                  </div>
                </div>
              </div>

              {/* 第三行：关系 */}
              <div>
                <p className="text-slate-400 text-xs font-bold mb-2 uppercase tracking-wider">集合关系</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-slate-800 rounded-lg p-3 space-y-1">
                    <p><Math tex="A \subseteq B" /> 子集：全在里面（<strong className="text-green-300">允许</strong>相等）</p>
                    <p><Math tex="A \subsetneq B" /> 真子集：全在里面（<strong className="text-red-300">不能</strong>相等）</p>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-3 space-y-1">
                    <p className="text-slate-400 text-xs mb-1">子集个数公式</p>
                    <p>子集 <Math tex="2^n" /> · 真子集 <Math tex="2^n\!-\!1" /> · 非空 <Math tex="2^n\!-\!1" /> · 非空真 <Math tex="2^n\!-\!2" /></p>
                  </div>
                </div>
                <div className="bg-slate-800 rounded-lg p-3 mt-3 space-y-1">
                  <p className="text-slate-400 text-xs mb-1">空集铁律（必记！）</p>
                  <p><Math tex="\varnothing \subseteq A" />（任何集合）　<Math tex="\varnothing \subsetneq A" />（A 非空时）　<strong className="text-amber-300">∅ ≠ &#123;0&#125;</strong></p>
                </div>
              </div>

              {/* 第四行：运算 */}
              <div>
                <p className="text-slate-400 text-xs font-bold mb-2 uppercase tracking-wider">集合运算</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-slate-800 rounded-lg p-3">
                    <p><Math tex="A \cap B" /> 交集</p>
                    <p className="text-xs text-slate-400">两个都有的</p>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-3">
                    <p><Math tex="A \cup B" /> 并集</p>
                    <p className="text-xs text-slate-400">合起来（去重）</p>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-3">
                    <p><Math tex="\complement_U A" /> 补集</p>
                    <p className="text-xs text-slate-400">U 去掉 A 剩的</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                  <div className="bg-slate-800 rounded-lg p-3 space-y-1">
                    <p className="text-slate-400 text-xs mb-1">补集端点规律</p>
                    <p><strong className="text-green-300">开变闭，闭变开</strong>（{'<'} ↔ ≥，≤ ↔ {'>'}）</p>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-3 space-y-1">
                    <p className="text-slate-400 text-xs mb-1">容斥原理</p>
                    <p><Math tex="|A \cup B| = |A| + |B| - |A \cap B|" /></p>
                  </div>
                </div>
              </div>

              {/* 第五行：等价转换 + 解题 */}
              <div>
                <p className="text-slate-400 text-xs font-bold mb-2 uppercase tracking-wider">等价转换 & 解题</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-slate-800 rounded-lg p-3 space-y-1">
                    <p><Math tex="A \cap B = A \;\Leftrightarrow\; A \subseteq B" /></p>
                    <p><Math tex="A \cup B = B \;\Leftrightarrow\; A \subseteq B" /></p>
                    <p><Math tex="A \cap B = \varnothing \;\Leftrightarrow" /> 数轴完全分开</p>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-3 space-y-1">
                    <p className="text-slate-400 text-xs mb-1">核心解题方法</p>
                    <p>① <strong className="text-blue-300">画数轴</strong>（不等式集合必画）</p>
                    <p>② A⊆B / A∩B=∅ → <strong className="text-blue-300">看端点</strong></p>
                    <p>③ 含参集合 → <strong className="text-blue-300">互异性</strong>两两不等</p>
                  </div>
                </div>
              </div>

              {/* 陷阱清单 */}
              <div className="border-t border-slate-700 pt-3">
                <p className="text-amber-400 font-bold text-xs mb-2">⚠ 高考陷阱清单</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs text-amber-300">
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
