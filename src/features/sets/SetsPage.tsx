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

                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="font-bold text-green-800 mb-1">✏️ 即时练习</p>
                  <p className="text-gray-700">1. 下列能构成集合的是？A. 好看的花　B. 不超过10的自然数 → 答案：<strong>B</strong></p>
                  <p className="text-gray-700">2. &#123;1, 2, 3&#125; 和 &#123;3, 2, 1&#125; 是同一个集合吗？→ 答案：<strong>是</strong>（无序性）</p>
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

                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="font-bold text-green-800 mb-1">✏️ 即时练习</p>
                  <p className="text-gray-700">1. 用列举法表示"不超过 5 的正整数" → 答案：<strong>&#123;1, 2, 3, 4, 5&#125;</strong></p>
                  <p className="text-gray-700">2. <Math tex="\{x \mid x^2 = 1\}" /> 用列举法 → 答案：<strong><Math tex="\{-1, 1\}" /></strong></p>
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
              <div className="space-y-3 text-sm text-gray-700">
                <Collapsible title="子集 ⊆ 和真子集 ⊊" storageKey="sets:subset">
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="font-bold text-blue-800 mb-2">定义</p>
                      <p className="text-blue-700 mb-1"><strong>子集 ⊆</strong>：A 中的每个元素都在 B 中 → <Math tex="A \subseteq B" /></p>
                      <p className="text-blue-700"><strong>真子集 ⊊</strong>：A 是 B 的子集，但 A ≠ B → <Math tex="A \subsetneq B" /></p>
                      <div className="bg-white rounded-lg p-3 border border-blue-100 mt-2 text-xs text-gray-600">
                        <p className="font-bold mb-1">生活类比：</p>
                        <p>你班上的男同学 ⊆ 你班上的所有同学</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-green-50 rounded-xl p-3 border border-green-200">
                        <p className="text-center font-bold text-green-700 text-xs mb-2">A 比 B 小</p>
                        <svg viewBox="0 0 120 100" className="w-full">
                          <circle cx="60" cy="45" r="35" fill="rgba(59,130,246,0.1)" stroke="#3b82f6" strokeWidth="1.5" />
                          <circle cx="60" cy="55" r="16" fill="rgba(234,179,8,0.2)" stroke="#eab308" strokeWidth="1.5" />
                          <text x="60" y="30" fontSize="12" fill="#2563eb" fontWeight="bold" textAnchor="middle">B</text>
                          <text x="60" y="60" fontSize="10" fill="#ca8a04" fontWeight="bold" textAnchor="middle">A</text>
                        </svg>
                        <p className="text-center text-xs text-green-700 mt-1"><Math tex="A \subseteq B" /> ✓</p>
                        <p className="text-center text-xs text-green-700"><Math tex="A \subsetneq B" /> ✓</p>
                      </div>
                      <div className="bg-amber-50 rounded-xl p-3 border border-amber-200">
                        <p className="text-center font-bold text-amber-700 text-xs mb-2">A 和 B 相等</p>
                        <svg viewBox="0 0 120 100" className="w-full">
                          <circle cx="60" cy="48" r="30" fill="rgba(59,130,246,0.1)" stroke="#3b82f6" strokeWidth="1.5" />
                          <circle cx="60" cy="48" r="30" fill="rgba(234,179,8,0.08)" stroke="#eab308" strokeWidth="1.5" strokeDasharray="4 3" />
                          <text x="48" y="44" fontSize="11" fill="#2563eb" fontWeight="bold" textAnchor="middle">B</text>
                          <text x="72" y="56" fontSize="11" fill="#ca8a04" fontWeight="bold" textAnchor="middle">A</text>
                        </svg>
                        <p className="text-center text-xs text-green-700 mt-1"><Math tex="A \subseteq B" /> ✓</p>
                        <p className="text-center text-xs text-red-500"><Math tex="A \subsetneq B" /> ✗</p>
                      </div>
                      <div className="bg-red-50 rounded-xl p-3 border border-red-200">
                        <p className="text-center font-bold text-red-600 text-xs mb-2">A 有元素不在 B</p>
                        <svg viewBox="0 0 120 100" className="w-full">
                          <circle cx="45" cy="48" r="28" fill="rgba(59,130,246,0.1)" stroke="#3b82f6" strokeWidth="1.5" />
                          <circle cx="75" cy="48" r="28" fill="rgba(234,179,8,0.15)" stroke="#eab308" strokeWidth="1.5" />
                          <text x="32" y="42" fontSize="11" fill="#2563eb" fontWeight="bold" textAnchor="middle">B</text>
                          <text x="88" y="42" fontSize="11" fill="#ca8a04" fontWeight="bold" textAnchor="middle">A</text>
                        </svg>
                        <p className="text-center text-xs text-red-500 mt-1"><Math tex="A \subseteq B" /> ✗</p>
                        <p className="text-center text-xs text-red-500"><Math tex="A \subsetneq B" /> ✗</p>
                      </div>
                    </div>
                    <div className="bg-[#F5E6D3] rounded-xl p-3 text-xs space-y-1">
                      <p className="text-[#7A5C3E]"><strong>一句话记住区别：</strong></p>
                      <p className="text-[#7A5C3E]">子集 ⊆ = A 的元素<strong>全在</strong> B 里（允许相等）</p>
                      <p className="text-[#7A5C3E]">真子集 ⊊ = A 的元素全在 B 里，<strong>而且 B 还多出来一些</strong></p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-3 space-y-1">
                      <p><Math tex="\{1, 2\} \subseteq \{1, 2, 3\}" /> ✓（1 和 2 都在右边）</p>
                      <p><Math tex="\{1, 2, 3\} \subseteq \{1, 2, 3\}" /> ✓（<strong>完全相等也算子集</strong>）</p>
                      <p><Math tex="\{1, 2, 3\} \subsetneq \{1, 2, 3\}" /> ✗（相等不是真子集）</p>
                      <p><Math tex="\{1, 4\} \subseteq \{1, 2, 3\}" /> ✗（4 不在右边）</p>
                    </div>
                  </div>
                </Collapsible>

                <Collapsible title="集合相等 =" storageKey="sets:equal">
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="font-bold text-blue-800 mb-2">定义</p>
                      <p className="text-blue-700"><Math tex="A = B \;\Leftrightarrow\; A \subseteq B \text{ 且 } B \subseteq A" /></p>
                      <p className="text-blue-600 text-xs mt-1">两个集合的元素<strong>完全一样</strong>（顺序、形式无所谓）</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 space-y-1">
                      <p><Math tex="\{1, 2, 3\} = \{3, 1, 2\}" /> ✓（顺序不影响）</p>
                      <p><Math tex="\{1, 1, 2\} = \{1, 2\}" /> ✓（重复元素自动去掉）</p>
                      <p><Math tex="\{x \mid x^2=1\} = \{-1, 1\}" /> ✓（描述法和列举法可以相等）</p>
                    </div>
                  </div>
                </Collapsible>

                <Collapsible title="空集 ∅（非常重要！）" storageKey="sets:empty">
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="font-bold text-blue-800 mb-2">空集 = 没有任何元素的集合 = 空袋子</p>
                      <p className="text-blue-700"><Math tex="\varnothing = \{\}" /> ← 里面什么都没有</p>
                    </div>
                    <div className="bg-[#F5E6D3] rounded-xl p-5 text-center">
                      <p className="text-sm text-[#9A7B5B] mb-2">空集两条铁律（高考必考！）</p>
                      <p className="mb-2"><Math tex="\varnothing \subseteq A" />　（对<strong>任意</strong>集合 A 都成立）</p>
                      <p><Math tex="\varnothing \subsetneq A" />　（只要 A 不是空集）</p>
                    </div>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                      <div className="flex items-start gap-2">
                        <AlertTriangle size={16} className="text-amber-600 shrink-0 mt-0.5" />
                        <div className="text-amber-700 text-sm space-y-1">
                          <p className="font-bold">⚠️ 高考经典陷阱</p>
                          <p>题目说"A ⊆ B"，很多人忘了 <strong>A 可能是空集</strong>！</p>
                          <p>比如 A = &#123;x | x²+ax+1=0&#125; ⊆ B，需要考虑方程无解时 A = ∅。</p>
                          <p><strong>做子集题，第一步永远是：别忘了空集！</strong></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Collapsible>

                <Collapsible title="子集个数公式（背就行）" storageKey="sets:subset-count">
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="font-bold text-blue-800 mb-2">集合有 n 个元素：</p>
                      <div className="grid grid-cols-[auto_auto_auto] gap-x-2 gap-y-1 text-blue-700 w-fit">
                        <span className="text-right">子集个数</span><span>=</span><span><Math tex="2^n" /></span>
                        <span className="text-right">真子集个数</span><span>=</span><span><Math tex="2^n - 1" />（去掉自身）</span>
                        <span className="text-right">非空子集个数</span><span>=</span><span><Math tex="2^n - 1" />（去掉 ∅）</span>
                        <span className="text-right">非空真子集个数</span><span>=</span><span><Math tex="2^n - 2" />（去掉自身和 ∅）</span>
                      </div>
                    </div>
                    <div className="bg-[#F5E6D3] rounded-xl p-4">
                      <p className="font-bold text-[#7A5C3E] mb-1">为什么真子集和非空子集个数一样？</p>
                      <p className="text-[#7A5C3E]">真子集 = 全部子集 - <strong>自身</strong>（去掉一头）</p>
                      <p className="text-[#7A5C3E]">非空子集 = 全部子集 - <strong>空集</strong>（去掉另一头）</p>
                      <p className="text-[#7A5C3E]">两个各减 1，所以结果一样！</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="font-bold text-gray-800 mb-2">例：A = &#123;a, b, c&#125;，3个元素</p>
                      <div className="grid grid-cols-[auto_auto_auto_1fr] gap-x-2 gap-y-1 w-fit">
                        <span className="text-right">子集</span><span>=</span><span>2³ = <strong>8</strong> 个</span><span className="text-gray-700">∅, &#123;a&#125;, &#123;b&#125;, &#123;c&#125;, &#123;a,b&#125;, &#123;a,c&#125;, &#123;b,c&#125;, &#123;a,b,c&#125;</span>
                        <span className="text-right">真子集</span><span>=</span><span>8 - 1 = <strong>7</strong></span><span className="text-gray-700">（去掉&#123;a,b,c&#125;本身）</span>
                        <span className="text-right">非空子集</span><span>=</span><span>8 - 1 = <strong>7</strong></span><span className="text-gray-700">（去掉∅）</span>
                        <span className="text-right">非空真子集</span><span>=</span><span>8 - 2 = <strong>6</strong></span><span className="text-gray-700">（去掉∅和&#123;a,b,c&#125;）</span>
                      </div>
                    </div>
                  </div>
                </Collapsible>

                <Collapsible title="A⊆B 求参数范围（高考经典题型！）" storageKey="sets:subset-param">
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="font-bold text-blue-800 mb-2">解题思路</p>
                      <p className="text-blue-700">A ⊆ B 意味着 <strong>A 完全在 B 里面</strong>。画数轴，看 A 的端点是否被 B「罩住」。</p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                      <p className="font-bold text-gray-800">例：<Math tex="A = \{x \mid -2 < x < 4\},\; B = \{x \mid x < a\},\; A \subseteq B" />，求 a 的范围</p>
                      <div className="pl-3 border-l-2 border-blue-300 space-y-2">
                        <div>
                          <p><span className="text-blue-600 font-bold">第①步</span>：画数轴看两个集合的位置</p>
                          <div className="bg-white rounded-lg p-3 border">
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
                          <p><span className="text-blue-600 font-bold">第②步</span>：A 的右端点是 4（不含），B 要把它「罩住」→ <Math tex="a \geq 4" /></p>
                          <p className="text-xs text-gray-700 mt-1">a = 3 时 B = (-∞,3)，A 里的 3.5 没被包住 ✗</p>
                          <p className="text-xs text-gray-700">a = 4 时 B = (-∞,4)，A = (-2,4) 全在 B 里 ✓</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#F5E6D3] rounded-xl p-4">
                      <p className="font-bold text-[#7A5C3E] mb-1">做 A⊆B 参数题的口诀</p>
                      <p className="text-[#7A5C3E]"><strong>画数轴 → 看端点 → A 的边必须在 B 的边「里面」</strong></p>
                      <p className="text-[#9A7B5B] text-xs mt-1">别忘了考虑 A = ∅ 的情况！</p>
                    </div>
                  </div>
                </Collapsible>

                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="font-bold text-green-800 mb-1">✏️ 即时练习</p>
                  <p className="text-gray-700">1. 集合 &#123;1, 2&#125; 的子集有几个？→ 答案：<strong>2² = 4 个</strong></p>
                  <p className="text-gray-700">2. ∅ 和 &#123;0&#125; 是同一个集合吗？→ 答案：<strong>不是</strong>（∅没有元素，&#123;0&#125;有一个元素0）</p>
                  <p className="text-gray-700">3. &#123;1,2&#125; ⊆ &#123;1,2,3&#125; 对吗？&#123;1,2,3&#125; ⊆ &#123;1,2,3&#125; 呢？→ 答案：<strong>都对</strong>（自身也是子集）</p>
                  <p className="text-gray-700">4. A = &#123;x | x {'<'} a&#125;，B = &#123;x | x {'<'} 3&#125;，若 B ⊆ A，则 a 的范围？→ 答案：<strong>a ≥ 3</strong></p>
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
                  <p className="font-bold text-blue-800 mb-2">技巧一：数轴法（最常用）</p>
                  <p className="text-blue-700">遇到不等式集合 → 画数轴 → 看重叠（交集）/ 合起来（并集）/ 剩下的（补集）</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="font-bold text-blue-800 mb-2">技巧二：方程型先解方程</p>
                  <p className="text-blue-700"><Math tex="\{x \mid x^2 - 3x + 2 = 0\}" /> → 先解出 x=1, x=2 → <Math tex="\{1, 2\}" /></p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="font-bold text-blue-800 mb-2">技巧三：子集问题别忘空集</p>
                  <p className="text-blue-700">"若 A ⊆ B" → 分两种：A = ∅ 和 A ≠ ∅</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="font-bold text-blue-800 mb-2">技巧四：含参数问题的等价转换</p>
                  <div className="text-blue-700 space-y-1">
                    <p>"<Math tex="A \cap B = \varnothing" />" → A 和 B 在数轴上完全分开</p>
                    <p>"<Math tex="A \cap B = A" />" → 等价于 <Math tex="A \subseteq B" /></p>
                    <p>"<Math tex="A \cup B = B" />" → 等价于 <Math tex="A \subseteq B" /></p>
                  </div>
                </div>
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
            <QuizPanel module="sets" questions={setsQuizQuestions} title="集合真题实战" description="13道选择题，覆盖高考集合全部题型" />
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
            <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-3 text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-slate-300 text-xs mb-1">概念</p>
                  <p>集合 = 一堆确定的东西</p>
                </div>
                <div>
                  <p className="text-slate-300 text-xs mb-1">三大性质</p>
                  <p>确定性、互异性、无序性</p>
                </div>
                <div>
                  <p className="text-slate-300 text-xs mb-1">运算</p>
                  <p><Math tex="\cap" /> 公共部分 · <Math tex="\cup" /> 全部 · <Math tex="\complement_U" /> 剩下的</p>
                </div>
                <div>
                  <p className="text-slate-300 text-xs mb-1">核心方法</p>
                  <p>画数轴！</p>
                </div>
                <div>
                  <p className="text-slate-300 text-xs mb-1">补集端点</p>
                  <p>开变闭，闭变开</p>
                </div>
                <div>
                  <p className="text-slate-300 text-xs mb-1">子集个数</p>
                  <p><Math tex="n" /> 个元素 → <Math tex="2^n" /> 个子集</p>
                </div>
              </div>
              <div className="border-t border-slate-700 pt-3 mt-3">
                <p className="text-amber-400 font-bold text-xs">
                  ⚠ 高考陷阱：0是自然数 · 子集别忘空集 · 互异性 · 描述法看清 x 还是 (x,y)
                </p>
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
