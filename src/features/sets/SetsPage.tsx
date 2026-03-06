import { Flame, Lightbulb, AlertTriangle } from 'lucide-react';

import { Math, QuizQuestion, Collapsible, ProgressTracker, SpeakButton } from '@/components/shared';
import { setsNarrations } from './data/narrations';
import { useProgress, useQuiz } from '@/hooks';
import { setsQuizQuestions } from './data/quiz';
import { setsProgressItems } from './data/progress';

export function SetsPage() {
  const { items, toggle } = useProgress('sets', setsProgressItems);
  const { stats: quizScore, recordAnswer } = useQuiz('sets');

  const handleQuizAnswer = (id: string, correct: boolean) => {
    const q = setsQuizQuestions.find((q) => q.id === id);
    if (q) recordAnswer(id, correct ? q.correctAnswer : '', q.correctAnswer, correct);
  };

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
        <p className="text-gray-500">从零到满分 · 2-3小时搞定高考必拿5分</p>
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
          {/* Part 1: What is a Set */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                1
              </span>
              集合是什么？
              <SpeakButton text={setsNarrations.whatIsSet} />
            </h2>

            <div className="bg-white rounded-xl border border-gray-200 p-5 mb-4">
              <p className="text-gray-700 mb-4 text-lg font-bold">集合 = 一堆东西装在一起。</p>
              <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm space-y-2 mb-4">
                <div>你书包里的东西 = <Math tex="\{课本, 笔, 橡皮\}" /></div>
                <div>所有偶数 = <Math tex="\{0, 2, 4, 6, 8, \ldots\}" /></div>
                <div>比3大的数 = <Math tex="\{x \mid x > 3\}" /></div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-600 mb-2">元素和集合的关系（只有两种）：</p>
                <div className="flex gap-8 text-sm">
                  <span><strong>属于：</strong><Math tex="a \in A" /> → "a 在 A 里面"</span>
                  <span><strong>不属于：</strong><Math tex="a \notin A" /> → "a 不在 A 里面"</span>
                </div>
              </div>
            </div>
          </section>

          {/* Part 2: Three Properties */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                2
              </span>
              集合的三大性质
              <SpeakButton text={setsNarrations.threeProperties} />
            </h2>

            <div className="space-y-3">
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <p className="font-bold text-gray-800 mb-2">① 确定性 —— 标准必须明确</p>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>✓ "所有偶数" → 任何数都能判断是不是偶数</p>
                  <p>✗ "好看的人" → 标准不确定，不能构成集合</p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <p className="font-bold text-gray-800 mb-2">② 互异性 —— 不能有重复</p>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>✓ <Math tex="\{1, 2, 3\}" /></p>
                  <p>✗ <Math tex="\{1, 1, 2, 3\}" /> ← 1 出现了两次，不行！</p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <p className="font-bold text-gray-800 mb-2">③ 无序性 —— 没有先后顺序</p>
                <div className="text-sm text-gray-600">
                  <Math tex="\{1, 2, 3\} = \{3, 1, 2\} = \{2, 3, 1\}" /> ← 都是同一个集合
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3 mt-4">
              <AlertTriangle size={20} className="text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-red-700 text-sm">高考陷阱</p>
                <p className="text-red-700 text-sm mt-1">
                  题目说"集合 A = &#123;a, b, c&#125;"，则 a、b、c 一定互不相等。互异性经常藏着出题陷阱。
                </p>
              </div>
            </div>
          </section>

          {/* Part 3: Representation */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                3
              </span>
              集合的表示方法
              <SpeakButton text={setsNarrations.representation} />
            </h2>

            <Collapsible title="列举法 —— 直接写出来" defaultOpen storageKey="sets:enumerate">
              <div className="space-y-2 text-sm">
                <p><Math tex="A = \{1, 2, 3, 4, 5\}" /></p>
                <p><Math tex="C = \{0, 2, 4, 6, 8, \ldots\}" /> ← 用省略号表示无限多</p>
              </div>
            </Collapsible>

            <Collapsible title="描述法 —— 用条件描述" defaultOpen storageKey="sets:describe">
              <div className="bg-gray-50 rounded-lg p-4 mb-3">
                <p className="text-sm text-gray-600 mb-2">格式：<Math tex="\{x \mid x \text{ 满足的条件}\}" /></p>
              </div>
              <div className="space-y-2 text-sm">
                <p><Math tex="\{x \mid x > 3\}" /> → 所有大于3的数</p>
                <p><Math tex="\{x \mid x^2 - 4 = 0\}" /> → 其实就是 <Math tex="\{-2, 2\}" /></p>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mt-3 flex items-start gap-3">
                <Lightbulb size={18} className="text-amber-600 shrink-0 mt-0.5" />
                <p className="text-amber-700 text-sm">
                  <strong>注意区分：</strong>
                  <Math tex="\{x \mid x^2 - 4 = 0\}" /> 是数的集合，
                  <Math tex="\{(x,y) \mid y = x^2\}" /> 是点的集合。看清竖线前面是 x 还是 (x,y)！
                </p>
              </div>
            </Collapsible>
          </section>

          {/* Part 4: Common Number Sets */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                4
              </span>
              常见数集（背下来）
            </h2>

            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-3 py-2 text-center">符号</th>
                      <th className="border border-gray-200 px-3 py-2 text-left">名称</th>
                      <th className="border border-gray-200 px-3 py-2 text-left">包含什么</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['\\mathbb{N}', '自然数集', '0, 1, 2, 3, …'],
                      ['\\mathbb{N}^*', '正整数集', '1, 2, 3, …（不含0）'],
                      ['\\mathbb{Z}', '整数集', '…, -2, -1, 0, 1, 2, …'],
                      ['\\mathbb{Q}', '有理数集', '所有分数和整数'],
                      ['\\mathbb{R}', '实数集', '数轴上所有点'],
                    ].map(([sym, name, desc], idx) => (
                      <tr key={idx} className="hover:bg-blue-50">
                        <td className="border border-gray-200 px-3 py-2 text-center"><Math tex={sym} /></td>
                        <td className="border border-gray-200 px-3 py-2">{name}</td>
                        <td className="border border-gray-200 px-3 py-2 text-gray-600">{desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-4">
                <p className="text-blue-800 text-sm">
                  <strong>注意：0 是自然数！</strong> <Math tex="0 \in \mathbb{N}" /> ✓，
                  <Math tex="0 \notin \mathbb{N}^*" /> ✓
                </p>
              </div>
            </div>
          </section>

          {/* Part 5: Set Relations */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                5
              </span>
              集合间的关系
              <SpeakButton text={setsNarrations.subsets} />
            </h2>

            <Collapsible title="子集 ⊆ 和真子集 ⊊" defaultOpen storageKey="sets:subset">
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm mb-2"><strong>子集：</strong>A 中的每个元素都在 B 中 → <Math tex="A \subseteq B" /></p>
                  <p className="text-sm"><strong>真子集：</strong>是子集但不相等 → <Math tex="A \subsetneq B" /></p>
                </div>
                <div className="text-sm space-y-1">
                  <p><Math tex="\{1, 2\} \subseteq \{1, 2, 3\}" /> ✓</p>
                  <p><Math tex="\{1, 2, 3\} \subseteq \{1, 2, 3\}" /> ✓（相等也算子集）</p>
                  <p><Math tex="\{1, 2, 3\} \subsetneq \{1, 2, 3\}" /> ✗（相等不是真子集）</p>
                </div>
              </div>
            </Collapsible>

            <Collapsible title="空集 ∅（重要！）" defaultOpen storageKey="sets:empty">
              <div className="bg-slate-900 text-white rounded-xl p-5 text-center mb-3">
                <p className="text-sm text-slate-400 mb-2">空集铁律</p>
                <Math tex="\varnothing \subseteq A \quad \text{（对任意集合 A 都成立）}" display />
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-red-700 text-sm">
                  <strong>高考陷阱：</strong>题目说"A ⊆ B"时，很多人忘了 A 可能是空集！
                  做子集题，第一步永远是：别忘了空集！
                </p>
              </div>
            </Collapsible>

            <Collapsible title="子集个数公式" storageKey="sets:subset-count">
              <div className="bg-gray-50 rounded-lg p-4 text-sm space-y-1">
                <p>集合有 <Math tex="n" /> 个元素：</p>
                <p>子集个数 = <Math tex="2^n" /></p>
                <p>真子集个数 = <Math tex="2^n - 1" /></p>
                <p>非空子集个数 = <Math tex="2^n - 1" /></p>
                <p>非空真子集个数 = <Math tex="2^n - 2" /></p>
              </div>
            </Collapsible>
          </section>

          {/* Part 6: Set Operations */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                6
              </span>
              集合的运算（高考核心！）
            </h2>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4 flex items-start gap-3">
              <Lightbulb size={20} className="text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-amber-800 text-sm">核心方法</p>
                <p className="text-amber-700 text-sm mt-1">
                  遇到不等式集合 → <strong>画数轴</strong> → 一目了然。数轴法是做集合运算的核武器！
                </p>
              </div>
            </div>

            <Collapsible title="交集 ∩ —— 取公共部分" defaultOpen storageKey="sets:intersection" headerExtra={<SpeakButton text={setsNarrations.intersection} />}>
              <div className="bg-gray-50 rounded-lg p-4 mb-3">
                <Math tex="A \cap B = \{x \mid x \in A \text{ 且 } x \in B\}" display />
              </div>
              <div className="space-y-2 text-sm">
                <p><strong>例：</strong><Math tex="A = \{1,2,3,5\}" />，<Math tex="B = \{2,4,5,6\}" /></p>
                <p>找两个都有的：<Math tex="A \cap B = \{2, 5\}" /></p>
              </div>
              <div className="mt-3 bg-gray-50 rounded-lg p-4 text-sm">
                <p className="mb-1"><strong>数轴例：</strong></p>
                <p><Math tex="A = \{x \mid 1 < x < 5\}" />，<Math tex="B = \{x \mid 3 < x < 8\}" /></p>
                <p className="mt-1">重叠部分：<Math tex="A \cap B = \{x \mid 3 < x < 5\}" /></p>
              </div>
            </Collapsible>

            <Collapsible title="并集 ∪ —— 取所有的" defaultOpen storageKey="sets:union" headerExtra={<SpeakButton text={setsNarrations.union} />}>
              <div className="bg-gray-50 rounded-lg p-4 mb-3">
                <Math tex="A \cup B = \{x \mid x \in A \text{ 或 } x \in B\}" display />
              </div>
              <div className="space-y-2 text-sm">
                <p><strong>例：</strong><Math tex="\{1,2,3\} \cup \{2,4,5\} = \{1,2,3,4,5\}" /></p>
              </div>
            </Collapsible>

            <Collapsible title="补集 ∁ᵤA —— 取剩下的" defaultOpen storageKey="sets:complement" headerExtra={<SpeakButton text={setsNarrations.complement} />}>
              <div className="bg-gray-50 rounded-lg p-4 mb-3">
                <Math tex="\complement_U A = \{x \mid x \in U \text{ 且 } x \notin A\}" display />
              </div>
              <div className="space-y-2 text-sm mb-3">
                <p><strong>例：</strong><Math tex="U = \mathbb{R}" />，<Math tex="A = \{x \mid 1 \leq x < 5\}" /></p>
                <p><Math tex="\complement_U A = \{x \mid x < 1 \text{ 或 } x \geq 5\}" /></p>
              </div>

              <div className="bg-slate-900 text-white rounded-xl p-5 text-center">
                <p className="text-sm text-slate-400 mb-2">补集端点规律（必记！）</p>
                <div className="text-sm space-y-1">
                  <p>原来 {'<'} 的 → 补集变成 ≥</p>
                  <p>原来 ≤ 的 → 补集变成 {'>'}</p>
                </div>
                <p className="text-amber-400 font-bold text-sm mt-3">口诀：开变闭，闭变开</p>
              </div>
            </Collapsible>
          </section>

          {/* Part 7: Key Techniques */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                7
              </span>
              解题核心技巧
            </h2>

            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-bold text-gray-800 mb-1">技巧一：数轴法（最常用）</p>
                  <p className="text-gray-600">遇到不等式集合 → 画数轴 → 看重叠/合起来/剩下的</p>
                </div>
                <div>
                  <p className="font-bold text-gray-800 mb-1">技巧二：方程型先解方程</p>
                  <p className="text-gray-600"><Math tex="\{x \mid x^2 - 3x + 2 = 0\}" /> → 先解出 <Math tex="x = 1, 2" /> → <Math tex="\{1, 2\}" /></p>
                </div>
                <div>
                  <p className="font-bold text-gray-800 mb-1">技巧三：子集问题别忘空集</p>
                  <p className="text-gray-600">"若 A ⊆ B" → 分两种：A = ∅ 和 A ≠ ∅</p>
                </div>
                <div>
                  <p className="font-bold text-gray-800 mb-1">技巧四：含参数问题的等价转换</p>
                  <div className="text-gray-600 space-y-1 mt-1">
                    <p><Math tex="A \cap B = A \iff A \subseteq B" /></p>
                    <p><Math tex="A \cup B = B \iff A \subseteq B" /></p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Part 8: Quiz */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-green-500 text-white flex items-center justify-center text-sm font-bold">
                8
              </span>
              高考真题实战
              {quizScore.total > 0 && (
                <span className="ml-auto text-sm font-normal text-gray-500">
                  {quizScore.correct}/{quizScore.total} 正确
                </span>
              )}
            </h2>

            {setsQuizQuestions.map((q) => (
              <QuizQuestion key={q.id} {...q} onAnswer={handleQuizAnswer} />
            ))}
          </section>

          {/* Part 9: Summary */}
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
                  <p className="text-slate-400 text-xs mb-1">概念</p>
                  <p>集合 = 一堆确定的东西</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs mb-1">三大性质</p>
                  <p>确定性、互异性、无序性</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs mb-1">运算</p>
                  <p><Math tex="\cap" /> 公共部分 · <Math tex="\cup" /> 全部 · <Math tex="\complement_U" /> 剩下的</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs mb-1">核心方法</p>
                  <p>画数轴！</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs mb-1">补集端点</p>
                  <p>开变闭，闭变开</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs mb-1">子集个数</p>
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
            <ProgressTracker items={items} onToggle={toggle} />
          </div>
        </div>
      </div>
    </div>
  );
}
