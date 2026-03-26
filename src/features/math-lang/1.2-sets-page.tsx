import { Math, Collapsible, SpeakButton, QuizPanel, PageHeader, LessonLayout, PracticeCard, ExportButton, PageBreak } from '@/components/shared';
import { setsNarrations } from './data/1.2/1.2-narrations';
import { setsPractice3 } from './data/1.2/1.2-practice';
import { useProgress, usePrintMode } from '@/hooks';
import { scrollToId } from '@/lib/scroll';
import { setsQuizQuestions } from './data/1.2/1.2-quiz';
import { setsProgressItems } from './data/1.2/1.2-progress';
import { SetsAnswers, setsExplanations } from './1.2-sets-answers';

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
      <div className="bg-gray-50 rounded p-3 mb-3 text-gray-800 print:p-1 print:mb-0.5">
        <p className="font-bold text-gray-800 mb-1 print:mb-0.5">📋 知识地图</p>
        <div className="grid grid-cols-2 gap-1 print:gap-y-0.5">
          <button onClick={() => scrollToId('sets-what')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">一、集合是什么：定义 + ∈ 和 ∉</button>
          <button onClick={() => scrollToId('sets-props')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">二、三大性质：确定性·互异性·无序性</button>
          <button onClick={() => scrollToId('sets-repr')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">三、集合的表示：列举法、描述法、区间</button>
          <button onClick={() => scrollToId('sets-numsets')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">四、常见数集：ℕ, ℤ, ℚ, ℝ</button>
          <button onClick={() => scrollToId('sets-subset')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">五、子集与真子集：⊆ 和 ⊂</button>
          <button onClick={() => scrollToId('sets-ops')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">六、集合的运算：交集、并集、补集</button>
          <button onClick={() => scrollToId('sets-quiz')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">七、高考真题实战：真题模拟</button>
        </div>
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>
          {/* 符号速查 */}
          <section className="mb-0">
            <Collapsible title="📖 符号速查卡（看不懂符号先看这里）" storageKey="sets:symbols" defaultOpen={false}>
              <div className="space-y-1 text-lg text-gray-800">
                <div className="grid grid-cols-2 gap-2">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-blue-50">
                        <th className="border border-blue-200 px-2 py-1 text-center text-blue-800">符号</th>
                        <th className="border border-blue-200 px-2 py-1 text-left text-blue-800">含义</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\in" /></td><td className="border border-gray-200 px-2 py-1">属于：<Math tex="3 \in \{1,2,3\}" /></td></tr>
                      <tr><td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\notin" /></td><td className="border border-gray-200 px-2 py-1">不属于：<Math tex="4 \notin \{1,2,3\}" /></td></tr>
                      <tr><td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\subseteq" /></td><td className="border border-gray-200 px-2 py-1">子集：A 全在 B 里</td></tr>
                      <tr><td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\subsetneq" /></td><td className="border border-gray-200 px-2 py-1">真子集：A 在 B 里且 A≠B</td></tr>
                      <tr><td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\cap" /></td><td className="border border-gray-200 px-2 py-1">交集：两个都有的</td></tr>
                      <tr><td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\cup" /></td><td className="border border-gray-200 px-2 py-1">并集：合起来（去重）</td></tr>
                      <tr><td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\complement_U A" /></td><td className="border border-gray-200 px-2 py-1">补集：U 去掉 A 剩的</td></tr>
                    </tbody>
                  </table>
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-blue-50">
                        <th className="border border-blue-200 px-2 py-1 text-center text-blue-800">符号</th>
                        <th className="border border-blue-200 px-2 py-1 text-left text-blue-800">含义</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\varnothing" /></td><td className="border border-gray-200 px-2 py-1">空集：什么都没有</td></tr>
                      <tr><td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\mathbb{R}" /></td><td className="border border-gray-200 px-2 py-1">实数集：所有实数</td></tr>
                      <tr><td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\mathbb{Z}" /></td><td className="border border-gray-200 px-2 py-1">整数集：…-2,-1,0,1,2…</td></tr>
                      <tr><td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\mathbb{N}" /></td><td className="border border-gray-200 px-2 py-1">自然数集：0,1,2,3…</td></tr>
                      <tr><td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\mathbb{N}^*" /></td><td className="border border-gray-200 px-2 py-1">正整数集：1,2,3…（不含0）</td></tr>
                      <tr><td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\mathbb{Q}" /></td><td className="border border-gray-200 px-2 py-1">有理数集：整数和分数</td></tr>
                      <tr><td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\{x \mid \ldots\}" /></td><td className="border border-gray-200 px-2 py-1">描述法：满足…的 x</td></tr>
                    </tbody>
                  </table>
                </div>

              </div>
            </Collapsible>
          </section>

          {/* Section 1: 集合是什么 */}
          <section id="sets-what" className="mb-0 scroll-mt-4">
            <Collapsible title="一、集合是什么？" defaultOpen storageKey="sets:what-is-set" headerExtra={<SpeakButton text={setsNarrations.whatIsSet} />}>
              <p className="text-blue-600 mb-1">🎯 学完你能：理解集合的概念，区分元素和集合的关系。</p>
              <div className="space-y-0 text-lg text-gray-800">
                <div className="bg-blue-50 border border-blue-200 rounded p-2">
                  <p className="font-bold text-blue-800 mb-1">什么是集合？</p>
                  <p className="text-blue-700">集合 = <strong>一堆确定的东西装在一起</strong>。</p>
                  <p className="text-blue-700 mt-1">就这么简单。把一些东西放到一个“袋子”里，这个“袋子”就叫集合。</p>
                  <div className="bg-white rounded p-2 border border-blue-100 mt-1">
                    <p className="text-gray-800 font-bold mb-1">正式说法：</p>
                    <p className="text-gray-700">由一些<strong>确定的对象</strong>组成的整体叫集合。里面的每个对象叫<strong>元素</strong>。</p>
                    <p className="text-gray-700 mt-1">集合用大写字母：A, B, C, U …　元素用小写字母：a, b, c, x …</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded p-2 space-y-1">
                  <p><strong>生活中的"集合"：</strong>你书包里的东西 = &#123;课本, 笔, 橡皮, 手机&#125;</p>
                  <p>所有偶数 = <Math tex="\{0, 2, 4, 6, 8, \ldots\}" />　　比3大的数 = <Math tex="\{x \mid x > 3\}" /></p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded p-2">
                  <p className="font-bold text-blue-800 mb-1">元素和集合的关系（只有两种）</p>
                  <div className="space-y-1">
                    <p><strong>属于：</strong><Math tex="a \in A" /> 读作“a 属于 A”，意思是“a 在集合 A 里面”</p>
                    <p><strong>不属于：</strong><Math tex="a \notin A" /> 读作“a 不属于 A”，意思是“a 不在集合 A 里面”</p>
                  </div>
                  <div className="bg-white rounded p-2 border border-blue-100 mt-1 text-gray-800">
                    <p>例：A = &#123;1, 3, 5, 7&#125;，则 <Math tex="3 \in A" /> ✓，<Math tex="4 \notin A" /> ✓</p>
                  </div>
                </div>

              </div>
            </Collapsible>
          </section>

          <PageBreak label="三大性质" />

          {/* Section 2: 三大性质 */}
          <section id="sets-props" className="mb-0 scroll-mt-4">
            <Collapsible title="二、集合的三大性质（必须记住！）" defaultOpen storageKey="sets:properties" headerExtra={<SpeakButton text={setsNarrations.threeProperties} />}>
              <p className="text-blue-600 mb-1">🎯 学完你能：判断一组对象能否构成集合，识别高考中的互异性陷阱。</p>

              {/* 三大性质表格 */}
              <div className="border border-gray-400 rounded overflow-hidden">
                <div className="grid grid-cols-3">
                  <div className="px-2 py-1 font-bold text-blue-700 border-b border-r border-gray-400 bg-blue-50">① 确定性</div>
                  <div className="px-2 py-1 font-bold text-purple-700 border-b border-r border-gray-400 bg-purple-50">② 互异性</div>
                  <div className="px-2 py-1 font-bold text-green-700 border-b border-gray-400 bg-green-50">③ 无序性</div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="px-2 py-1.5 border-r border-gray-300 space-y-0.5">
                    <p>标准必须明确：要么在，要么不在</p>
                    <p className="text-green-700">✓ "所有偶数"</p>
                    <p className="text-red-600">✗ "好看的人"（没标准）</p>
                    <p className="text-red-600">✗ "差不多高的人"</p>
                  </div>
                  <div className="px-2 py-1.5 border-r border-gray-300 space-y-0.5">
                    <p>元素<strong>互不相同</strong>，不能重复</p>
                    <p className="text-green-700">✓ <Math tex="\{1, 2, 3\}" /></p>
                    <p className="text-red-600">✗ <Math tex="\{1, 1, 2, 3\}" /> ← 1 重复</p>
                  </div>
                  <div className="px-2 py-1.5 space-y-0.5">
                    <p>排列顺序无所谓</p>
                    <p><Math tex="\{1,2,3\} = \{3,1,2\}" /></p>
                    <p>元素相同 = 同一集合</p>
                  </div>
                </div>
              </div>

              {/* 高考陷阱 */}
              <div className="bg-amber-50 border border-amber-300 rounded p-2 mt-1">
                <p><strong className="text-amber-700">⚠ 高考陷阱：</strong>题目说"集合 A = &#123;a, b, c&#125;"，则 a、b、c <strong>一定互不相等</strong>。互异性经常藏着出题陷阱。</p>
              </div>

              {/* 含参集合例题 */}
              <div className="border border-gray-400 rounded overflow-hidden mt-1">
                <div className="px-2 py-1 font-bold bg-gray-50 border-b border-gray-400">含参集合 + 互异性（高考经典题型）</div>
                <div className="px-2 py-1.5 border-b border-gray-300">
                  <p className="font-bold">例：集合 <Math tex="A = \{a,\; a^2 + a,\; -1\}" />，求 a 的取值范围。</p>
                </div>

                {/* 读题教学 */}
                <div className="px-2 py-1.5 border-b border-gray-300 bg-blue-50 space-y-0.5">
                  <p className="font-bold text-blue-700">第①步：读题 — 翻译题目在说什么</p>
                  <p>题目给了一个集合 A，里面有 <strong>3 个元素</strong>：第一个是 <Math tex="a" />，第二个是 <Math tex="a^2 + a" />，第三个是 <Math tex="-1" /></p>
                  <p>题目问"a 的取值范围"，意思是 <strong>a 不能取哪些值</strong>，才能让 A 是一个合法的集合</p>
                  <p className="text-blue-700">关键词"<strong>集合</strong>"，立刻想到<strong>互异性</strong>：三个元素必须两两不等！</p>
                </div>

                {/* 解题步骤 */}
                <div className="px-2 py-1.5 space-y-0.5">
                  <p className="font-bold text-blue-700">第②步：列出所有"两两不等"的条件</p>
                  <p>3 个元素，两两组合一共 3 对：</p>

                  <div className="pl-3 border-l-2 border-blue-300 space-y-1 mt-1">
                    <div>
                      <p><strong>条件1：</strong>第1个 ≠ 第2个，即 <Math tex="a \neq a^2 + a" /></p>
                      <p className="pl-4">两边消掉 a，得 <Math tex="0 \neq a^2" />，即 <Math tex="a^2 \neq 0" />，所以 <strong className="text-red-600">a ≠ 0</strong></p>
                    </div>
                    <div>
                      <p><strong>条件2：</strong>第1个 ≠ 第3个，即 <Math tex="a \neq -1" />，所以 <strong className="text-red-600">a ≠ -1</strong></p>
                    </div>
                    <div>
                      <p><strong>条件3：</strong>第2个 ≠ 第3个，即 <Math tex="a^2 + a \neq -1" />，移项得 <Math tex="a^2 + a + 1 \neq 0" /></p>
                      <p className="pl-4">判别式 <Math tex="\Delta = 1 - 4 = -3 < 0" />，方程无实数根，对任意实数 a 都成立。<strong className="text-green-700">自动满足，不用管</strong></p>
                    </div>
                  </div>

                  <p className="font-bold mt-1.5">第③步：合并所有条件，写答案</p>
                  <p>条件1 + 条件2，得 <strong><Math tex="a \neq 0" /> 且 <Math tex="a \neq -1" /></strong></p>

                  <div className="bg-[#F5E6D3] rounded p-1.5 mt-1.5">
                    <p className="font-bold text-[#7A5C3E]">做题套路：看到"集合 &#123;含参数&#125;"，① 互异性 ② 列所有"两两不等" ③ 逐个解 ④ 合并</p>
                  </div>
                </div>
              </div>

              {/* 三性质综合小题 */}
              <div className="border border-gray-400 rounded overflow-hidden mt-1">
                <div className="px-2 py-1 font-bold bg-green-50 border-b border-gray-400 text-green-800">再练一道：三性质综合判断</div>
                <div className="px-2 py-1.5 border-b border-gray-300">
                  <p className="font-bold">例：集合 <Math tex="M = \{3,\; 2a-1,\; a^2\}" />，<Math tex="N = \{a^2,\; 3,\; 2a-1\}" />，问 M 和 N 是同一个集合吗？a 能取哪些值？</p>
                </div>
                <div className="px-2 py-1.5 space-y-0.5">
                  <p className="font-bold text-green-700">无序性检查：M = N？</p>
                  <p>M 和 N 里的元素完全一样（都是 <Math tex="3,\; 2a-1,\; a^2" />），只是写的顺序不同。根据无序性，<strong>M = N</strong>，是同一个集合。</p>

                  <p className="font-bold text-purple-700 mt-1">互异性检查：a 不能取什么值？</p>
                  <div className="pl-3 border-l-2 border-purple-300 space-y-0.5">
                    <p><strong>条件1：</strong><Math tex="3 \neq 2a-1" />，解得 <Math tex="2a \neq 4" />，即 <strong className="text-red-600">a ≠ 2</strong></p>
                    <p><strong>条件2：</strong><Math tex="3 \neq a^2" />，即 <strong className="text-red-600"><Math tex="a \neq \pm\sqrt{3}" /></strong></p>
                    <p><strong>条件3：</strong><Math tex="2a-1 \neq a^2" />，即 <Math tex="a^2 - 2a + 1 \neq 0" />，<Math tex="(a-1)^2 \neq 0" />，即 <strong className="text-red-600">a ≠ 1</strong></p>
                  </div>

                  <p className="font-bold text-blue-700 mt-1">确定性检查：</p>
                  <p>a 确定后，<Math tex="2a-1" /> 和 <Math tex="a^2" /> 都是确定的数，满足确定性 ✓</p>

                  <p className="font-bold mt-1">答案：M = N。a 的取值需满足 <Math tex="a \neq 2" /> 且 <Math tex="a \neq \pm\sqrt{3}" /> 且 <Math tex="a \neq 1" /></p>
                </div>
              </div>



            </Collapsible>
          </section>

          <PageBreak label="表示方法" />

          {/* Section 3: 表示方法 */}
          <section id="sets-repr" className="mb-0 scroll-mt-4">
            <Collapsible title="三、集合的表示方法" defaultOpen storageKey="sets:representation" headerExtra={<SpeakButton text={setsNarrations.representation} />}>
              <p className="text-blue-600 mb-1">🎯 学完你能：用列举法和描述法表示集合，读懂 Venn 图。</p>

              {/* 列举法 + 描述法 双列 */}
              <div className="border border-gray-400 rounded overflow-hidden">
                <div className="grid grid-cols-2">
                  <div className="px-2 py-1 font-bold text-blue-700 border-b border-r border-gray-400 bg-blue-50">方法一：列举法 — 直接写出来</div>
                  <div className="px-2 py-1 font-bold text-purple-700 border-b border-gray-400 bg-purple-50">方法二：描述法 — 用条件描述</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-2 py-1.5 border-r border-gray-300 space-y-0.5">
                    <p>把元素写在大括号里，逗号隔开</p>
                    <p><Math tex="A = \{1, 2, 3, 4, 5\}" /></p>
                    <p><Math tex="B = \{0, 2, 4, 6, 8, \ldots\}" /></p>
                    <p className="text-gray-500">适合：元素不多或有规律</p>
                  </div>
                  <div className="px-2 py-1.5 space-y-0.5">
                    <p>格式：<Math tex="\{x \mid x \text{ 满足的条件}\}" /></p>
                    <p><Math tex="\{x \mid x > 3\}" /> 所有大于 3 的数</p>
                    <p><Math tex="\{x \mid x^2 - 4 = 0\}" /> 就是 <Math tex="\{-2, 2\}" /></p>
                    <p className="text-gray-500">适合：元素无限或太多</p>
                  </div>
                </div>
                <div className="px-2 py-1 border-t border-gray-300 bg-amber-50">
                  <p><strong className="text-amber-700">⚠ 重要区分：</strong><Math tex="\{x \mid \ldots\}" /> 是<strong>数的集合</strong>，<Math tex="\{(x,y) \mid \ldots\}" /> 是<strong>点的集合</strong>。看清竖线前面是 x 还是 (x,y)！</p>
                </div>
              </div>

              {/* 列举 vs 描述 对比表 */}
              <div className="border border-gray-400 rounded overflow-hidden mt-1">
                <div className="px-2 py-1 font-bold bg-gray-50 border-b border-gray-400">列举法 vs 描述法 对比</div>
                <table className="w-full border-collapse text-sm">
                  <tbody>
                    <tr>
                      <td className="border-b border-r border-gray-300 px-2 py-1 font-bold text-center w-16">写法</td>
                      <td className="border-b border-r border-gray-300 px-2 py-1 text-center"><Math tex="\{1, 2, 3\}" /></td>
                      <td className="border-b border-gray-300 px-2 py-1 text-center"><Math tex="\{x \mid 1 \leq x \leq 3, x \in \mathbb{Z}\}" /></td>
                    </tr>
                    <tr>
                      <td className="border-b border-r border-gray-300 px-2 py-1 font-bold text-center">适用</td>
                      <td className="border-b border-r border-gray-300 px-2 py-1 text-center">元素<strong>有限且少</strong></td>
                      <td className="border-b border-gray-300 px-2 py-1 text-center">元素<strong>无限或多</strong></td>
                    </tr>
                    <tr>
                      <td className="border-r border-gray-300 px-2 py-1 font-bold text-center">例</td>
                      <td className="border-r border-gray-300 px-2 py-1 text-center"><Math tex="\{2, 4, 6, 8\}" /></td>
                      <td className="px-2 py-1 text-center"><Math tex="\{x \mid x = 2k, 1 \leq k \leq 4\}" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 互转练习 */}
              <div className="border border-gray-400 rounded overflow-hidden mt-1">
                <div className="px-2 py-1 font-bold bg-gray-50 border-b border-gray-400">互转练习</div>
                <div className="px-2 py-1.5 space-y-0.5">
                  <p>列举转描述：<Math tex="\{1, 3, 5, 7, 9\}" /> = <Math tex="\{x \mid x = 2k-1, 1 \leq k \leq 5\}" /></p>
                  <p>描述转列举：<Math tex="\{x \mid x^2 - 5x + 6 = 0\}" /> = <Math tex="\{2, 3\}" /></p>
                  <p>描述转列举：<Math tex="\{x \mid x \text{ 是质数且 } x < 10\}" /> = <Math tex="\{2, 3, 5, 7\}" /></p>
                </div>
                <div className="px-2 py-1 border-t border-gray-300 bg-[#F5E6D3]">
                  <p className="font-bold text-[#7A5C3E]">口诀：元素少就列举，元素多就描述，两种方法表达的是同一个集合！</p>
                </div>
              </div>

              {/* 方法三：Venn 图 */}
              <div className="border border-gray-400 rounded overflow-hidden mt-1">
                <div className="px-2 py-1 font-bold text-green-700 border-b border-gray-400 bg-green-50">方法三：Venn 图（韦恩图）— 画个圈</div>
                <div className="px-2 py-1 border-b border-gray-300">
                  <p>用封闭曲线（圆或椭圆）表示集合，直观展示集合间的关系。</p>
                </div>
                <div className="p-1.5">
                  <div className="grid grid-cols-3 gap-1.5">
                      {/* A ⊆ U 子集 */}
                      <div className="bg-gray-50 rounded p-1">
                        <p className="text-center font-bold text-gray-700 text-sm mb-1"><Math tex="A \subseteq U" />（子集）</p>
                        <svg viewBox="0 0 180 130" className="w-full h-20">
                          <rect x="4" y="4" width="172" height="122" rx="8" fill="#f0f9ff" stroke="#93c5fd" strokeWidth="1.5" />
                          <text x="160" y="20" fontSize="14" fill="#3b82f6" fontWeight="bold">U</text>
                          <circle cx="80" cy="72" r="38" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
                          <text x="80" y="78" fontSize="18" fill="#1d4ed8" fontWeight="bold" textAnchor="middle">A</text>
                        </svg>
                      </div>

                      {/* A ∩ B 交集 */}
                      <div className="bg-gray-50 rounded p-1">
                        <p className="text-center font-bold text-gray-700 text-sm mb-1"><Math tex="A \cap B" />（交集）</p>
                        <svg viewBox="0 0 180 130" className="w-full h-20">
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
                      <div className="bg-gray-50 rounded p-1">
                        <p className="text-center font-bold text-gray-700 text-sm mb-1"><Math tex="A \cup B" />（并集）</p>
                        <svg viewBox="0 0 180 130" className="w-full h-20">
                          <rect x="4" y="4" width="172" height="122" rx="8" fill="#f0f9ff" stroke="#93c5fd" strokeWidth="1.5" />
                          <text x="160" y="20" fontSize="14" fill="#3b82f6" fontWeight="bold">U</text>
                          <circle cx="65" cy="70" r="36" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5" fillOpacity="0.6" />
                          <circle cx="110" cy="70" r="36" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5" fillOpacity="0.6" />
                          <text x="48" y="76" fontSize="16" fill="#15803d" fontWeight="bold" textAnchor="middle">A</text>
                          <text x="127" y="76" fontSize="16" fill="#15803d" fontWeight="bold" textAnchor="middle">B</text>
                        </svg>
                      </div>

                      {/* ∁ᵤA 补集 */}
                      <div className="bg-gray-50 rounded p-1">
                        <p className="text-center font-bold text-gray-700 text-sm mb-1"><Math tex="\complement_U A" />（补集）</p>
                        <svg viewBox="0 0 180 130" className="w-full h-20">
                          <rect x="4" y="4" width="172" height="122" rx="8" fill="#fde68a" stroke="#f59e0b" strokeWidth="1.5" />
                          <text x="160" y="20" fontSize="14" fill="#b45309" fontWeight="bold">U</text>
                          <circle cx="80" cy="70" r="36" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.5" />
                          <text x="80" y="76" fontSize="18" fill="#3b82f6" fontWeight="bold" textAnchor="middle">A</text>
                          <text x="150" y="115" fontSize="14" fill="#b45309" fontWeight="bold" textAnchor="middle">补集</text>
                        </svg>
                      </div>

                      {/* A ∩ B = ∅ 不相交 */}
                      <div className="bg-gray-50 rounded p-1">
                        <p className="text-center font-bold text-gray-700 text-sm mb-1"><Math tex="A \cap B = \varnothing" />（不相交）</p>
                        <svg viewBox="0 0 180 130" className="w-full h-20">
                          <rect x="4" y="4" width="172" height="122" rx="8" fill="#f0f9ff" stroke="#93c5fd" strokeWidth="1.5" />
                          <text x="160" y="20" fontSize="14" fill="#3b82f6" fontWeight="bold">U</text>
                          <circle cx="55" cy="70" r="30" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" fillOpacity="0.5" />
                          <circle cx="130" cy="70" r="30" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5" fillOpacity="0.5" />
                          <text x="55" y="76" fontSize="16" fill="#1d4ed8" fontWeight="bold" textAnchor="middle">A</text>
                          <text x="130" y="76" fontSize="16" fill="#b45309" fontWeight="bold" textAnchor="middle">B</text>
                        </svg>
                      </div>

                      {/* A ⊂ B 真子集 */}
                      <div className="bg-gray-50 rounded p-1">
                        <p className="text-center font-bold text-gray-700 text-sm mb-1"><Math tex="A \subset B" />（真子集）</p>
                        <svg viewBox="0 0 180 130" className="w-full h-20">
                          <rect x="4" y="4" width="172" height="122" rx="8" fill="#f0f9ff" stroke="#93c5fd" strokeWidth="1.5" />
                          <text x="160" y="20" fontSize="14" fill="#3b82f6" fontWeight="bold">U</text>
                          <circle cx="85" cy="68" r="42" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5" fillOpacity="0.5" />
                          <circle cx="75" cy="72" r="22" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" fillOpacity="0.7" />
                          <text x="75" y="78" fontSize="14" fill="#1d4ed8" fontWeight="bold" textAnchor="middle">A</text>
                          <text x="112" y="52" fontSize="16" fill="#b45309" fontWeight="bold" textAnchor="middle">B</text>
                        </svg>
                      </div>
                  </div>
                </div>
                <table className="w-full border-collapse text-sm border-t border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border-b border-r border-gray-300 px-2 py-1 text-center">图形</th>
                      <th className="border-b border-r border-gray-300 px-2 py-1 text-center">符号</th>
                      <th className="border-b border-r border-gray-300 px-2 py-1 text-center">含义</th>
                      <th className="border-b border-gray-300 px-2 py-1 text-center">阴影区域</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b border-r border-gray-300 px-2 py-1 text-center">两圆重叠</td>
                      <td className="border-b border-r border-gray-300 px-2 py-1 text-center"><Math tex="A \cap B" /></td>
                      <td className="border-b border-r border-gray-300 px-2 py-1">A 和 B 的<strong>公共部分</strong></td>
                      <td className="border-b border-gray-300 px-2 py-1 text-center text-green-600">重叠区域</td>
                    </tr>
                    <tr>
                      <td className="border-b border-r border-gray-300 px-2 py-1 text-center">两圆合起来</td>
                      <td className="border-b border-r border-gray-300 px-2 py-1 text-center"><Math tex="A \cup B" /></td>
                      <td className="border-b border-r border-gray-300 px-2 py-1">A 和 B <strong>合起来</strong>全部</td>
                      <td className="border-b border-gray-300 px-2 py-1 text-center text-green-600">两圆覆盖的所有</td>
                    </tr>
                    <tr>
                      <td className="border-b border-r border-gray-300 px-2 py-1 text-center">圆外部分</td>
                      <td className="border-b border-r border-gray-300 px-2 py-1 text-center"><Math tex="\complement_U A" /></td>
                      <td className="border-b border-r border-gray-300 px-2 py-1">U 中<strong>不属于</strong> A 的</td>
                      <td className="border-b border-gray-300 px-2 py-1 text-center text-amber-600">圆外、矩形内</td>
                    </tr>
                    <tr>
                      <td className="border-r border-gray-300 px-2 py-1 text-center">小圆在大圆里</td>
                      <td className="border-r border-gray-300 px-2 py-1 text-center"><Math tex="A \subset B" /></td>
                      <td className="border-r border-gray-300 px-2 py-1">A 全在 B 里，B 比 A 多</td>
                      <td className="px-2 py-1 text-center text-blue-600">小圆在大圆内</td>
                    </tr>
                  </tbody>
                </table>
                <div className="px-2 py-1.5 border-t border-gray-300 space-y-0.5">
                  <p className="font-bold">实战演示：</p>
                  <p>设 <Math tex="U = \{1,2,3,4,5,6,7\}" />，<Math tex="A = \{1,3,5,7\}" />，<Math tex="B = \{3,4,5,6\}" /></p>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <p className="text-center"><strong className="text-blue-600"><Math tex="A \cap B" /></strong> = <Math tex="\{3, 5\}" /></p>
                    <p className="text-center"><strong className="text-green-600"><Math tex="A \cup B" /></strong> = <Math tex="\{1,3,4,5,6,7\}" /></p>
                    <p className="text-center"><strong className="text-amber-600"><Math tex="\complement_U A" /></strong> = <Math tex="\{2, 4, 6\}" /></p>
                  </div>
                </div>
                <div className="px-2 py-1 border-t border-gray-300 bg-[#F5E6D3]">
                  <p className="font-bold text-[#7A5C3E]">做题技巧：遇到集合运算题，先画 Venn 图，标数据，阴影部分就是答案。</p>
                </div>
              </div>

              <PageBreak />

              {/* 方法四：区间表示法 */}
              <div className="border border-gray-400 rounded overflow-hidden">
                <div className="px-2 py-1 font-bold text-orange-700 border-b border-gray-400 bg-orange-50">方法四：区间表示法 — 数轴上的一段</div>
                <div className="px-2 py-1 border-b border-gray-300">
                  <p>当集合是<strong>数轴上连续的一段</strong>时，用区间表示比描述法更简洁。后面交并补运算到处都用！</p>
                </div>
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border-b border-r border-gray-300 px-2 py-1 text-center">名称</th>
                      <th className="border-b border-r border-gray-300 px-2 py-1 text-center">符号</th>
                      <th className="border-b border-r border-gray-300 px-2 py-1 text-center">意思</th>
                      <th className="border-b border-gray-300 px-2 py-1 text-center">端点</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b border-r border-gray-300 px-2 py-1 text-center">开区间</td>
                      <td className="border-b border-r border-gray-300 px-2 py-1 text-center"><Math tex="(a, b)" /></td>
                      <td className="border-b border-r border-gray-300 px-2 py-1"><Math tex="a < x < b" /></td>
                      <td className="border-b border-gray-300 px-2 py-1 text-center text-red-600">两头都<strong>不含</strong></td>
                    </tr>
                    <tr>
                      <td className="border-b border-r border-gray-300 px-2 py-1 text-center">闭区间</td>
                      <td className="border-b border-r border-gray-300 px-2 py-1 text-center"><Math tex="[a, b]" /></td>
                      <td className="border-b border-r border-gray-300 px-2 py-1"><Math tex="a \leq x \leq b" /></td>
                      <td className="border-b border-gray-300 px-2 py-1 text-center text-blue-600">两头都<strong>含</strong></td>
                    </tr>
                    <tr>
                      <td className="border-b border-r border-gray-300 px-2 py-1 text-center">半开半闭</td>
                      <td className="border-b border-r border-gray-300 px-2 py-1 text-center"><Math tex="[a, b)" /> 或 <Math tex="(a, b]" /></td>
                      <td className="border-b border-r border-gray-300 px-2 py-1"><Math tex="a \leq x < b" /> 或 <Math tex="a < x \leq b" /></td>
                      <td className="border-b border-gray-300 px-2 py-1 text-center">一头含一头不含</td>
                    </tr>
                    <tr>
                      <td className="border-r border-gray-300 px-2 py-1 text-center">无穷区间</td>
                      <td className="border-r border-gray-300 px-2 py-1 text-center"><Math tex="(-\infty, a)" /> 或 <Math tex="[a, +\infty)" /></td>
                      <td className="border-r border-gray-300 px-2 py-1">x {'<'} a 或 x ≥ a</td>
                      <td className="px-2 py-1 text-center text-red-600">∞ 那头<strong>永远不含</strong></td>
                    </tr>
                  </tbody>
                </table>
                <div className="px-2 py-1 border-t border-gray-300 bg-[#F5E6D3] space-y-0.5">
                  <p className="text-[#7A5C3E]"><strong>小括号 ( ) = 不含端点</strong>（空心 ○）　<strong>中括号 [ ] = 含端点</strong>（实心 ●）　<strong>∞ 永远用小括号</strong></p>
                </div>
              </div>

              {/* 数轴示意图 */}
              <div className="border border-gray-400 rounded overflow-hidden mt-1">
                <div className="px-2 py-1 font-bold bg-gray-50 border-b border-gray-400">数轴上长什么样</div>
                <div className="grid grid-cols-3 gap-0">
                  <div className="border-r border-gray-300 p-1">
                    <svg viewBox="0 0 200 50" className="w-full">
                      <line x1="10" y1="30" x2="190" y2="30" stroke="#d1d5db" strokeWidth="1" />
                      <line x1="60" y1="30" x2="150" y2="30" stroke="#3b82f6" strokeWidth="3" />
                      <circle cx="60" cy="30" r="4" fill="white" stroke="#3b82f6" strokeWidth="2" />
                      <circle cx="150" cy="30" r="4" fill="white" stroke="#3b82f6" strokeWidth="2" />
                      <text x="60" y="48" fontSize="11" fill="#374151" textAnchor="middle">a</text>
                      <text x="150" y="48" fontSize="11" fill="#374151" textAnchor="middle">b</text>
                      <text x="105" y="18" fontSize="12" fill="#3b82f6" fontWeight="bold" textAnchor="middle">(a, b) 开区间</text>
                    </svg>
                  </div>
                  <div className="border-r border-gray-300 p-1">
                    <svg viewBox="0 0 200 50" className="w-full">
                      <line x1="10" y1="30" x2="190" y2="30" stroke="#d1d5db" strokeWidth="1" />
                      <line x1="60" y1="30" x2="150" y2="30" stroke="#16a34a" strokeWidth="3" />
                      <circle cx="60" cy="30" r="4" fill="#16a34a" />
                      <circle cx="150" cy="30" r="4" fill="#16a34a" />
                      <text x="60" y="48" fontSize="11" fill="#374151" textAnchor="middle">a</text>
                      <text x="150" y="48" fontSize="11" fill="#374151" textAnchor="middle">b</text>
                      <text x="105" y="18" fontSize="12" fill="#16a34a" fontWeight="bold" textAnchor="middle">[a, b] 闭区间</text>
                    </svg>
                  </div>
                  <div className="p-1">
                    <svg viewBox="0 0 200 50" className="w-full">
                      <line x1="10" y1="30" x2="190" y2="30" stroke="#d1d5db" strokeWidth="1" />
                      <line x1="10" y1="30" x2="150" y2="30" stroke="#ef4444" strokeWidth="3" />
                      <circle cx="150" cy="30" r="4" fill="white" stroke="#ef4444" strokeWidth="2" />
                      <text x="12" y="22" fontSize="10" fill="#ef4444" fontWeight="bold">← -∞</text>
                      <text x="150" y="48" fontSize="11" fill="#374151" textAnchor="middle">b</text>
                      <text x="90" y="18" fontSize="12" fill="#ef4444" fontWeight="bold" textAnchor="middle">(-∞, b)</text>
                    </svg>
                  </div>
                </div>
              </div>

              {/* 转换练习 + 易错 */}
              <div className="border border-gray-400 rounded overflow-hidden mt-1">
                <div className="px-2 py-1 font-bold bg-gray-50 border-b border-gray-400">转换练习</div>
                <div className="grid grid-cols-2 gap-x-4 px-2 py-1.5 text-sm">
                  <div className="space-y-0.5">
                    <p><Math tex="\{x \mid 1 < x \leq 5\}" /> = <strong>(1, 5]</strong></p>
                    <p><Math tex="\{x \mid x \geq 3\}" /> = <strong>[3, +∞)</strong></p>
                    <p><Math tex="\{x \mid x < 0\}" /> = <strong>(-∞, 0)</strong></p>
                  </div>
                  <div className="space-y-0.5">
                    <p><Math tex="\{x \mid -2 \leq x \leq 4\}" /> = <strong>[-2, 4]</strong></p>
                    <p><Math tex="\{x \mid x > 1\}" /> = <strong>(1, +∞)</strong></p>
                    <p><Math tex="\{x \mid x \leq -1\}" /> = <strong>(-∞, -1]</strong></p>
                  </div>
                </div>
                <div className="px-2 py-1 border-t border-gray-300 bg-amber-50">
                  <p><strong className="text-amber-700">⚠ 高考易错：</strong><strong>区间只能表示连续的数</strong>，<Math tex="\{1,2,3\}" /> 不能写成 [1,3]。不连续的要用 ∪ 连接：<Math tex="(-\infty, -2] \cup [3, +\infty)" /></p>
                </div>
              </div>

            </Collapsible>
          </section>


          {/* Section 4: 常见数集 */}
          <section id="sets-numsets" className="mb-0 scroll-mt-4">
            <Collapsible title="四、常见的数集（背下来）" defaultOpen storageKey="sets:number-sets" headerExtra={<SpeakButton text={setsNarrations.numberSets} />}>
              <p className="text-blue-600 mb-1">🎯 学完你能：记住 N, N*, Z, Q, R 各代表什么，判断元素属于哪个数集。</p>
              <div className="space-y-0 text-lg text-gray-800">
                <div className="border border-gray-400 rounded overflow-hidden">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border-b border-r border-gray-300 px-2 py-1 text-center">符号</th>
                        <th className="border-b border-r border-gray-300 px-2 py-1 text-left">名称</th>
                        <th className="border-b border-r border-gray-300 px-2 py-1 text-left">记法</th>
                        <th className="border-b border-r border-gray-300 px-2 py-1 text-left">包含什么</th>
                        <th className="border-b border-r border-gray-300 px-2 py-1 text-left">例子</th>
                        <th className="border-b border-gray-300 px-2 py-1 text-center">易错</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border-b border-r border-gray-300 px-2 py-1 text-center"><Math tex="\mathbb{N}" /></td>
                        <td className="border-b border-r border-gray-300 px-2 py-1">自然数集</td>
                        <td className="border-b border-r border-gray-300 px-2 py-1 text-gray-500"><strong>N</strong>atural（自然）</td>
                        <td className="border-b border-r border-gray-300 px-2 py-1">0, 1, 2, 3, …</td>
                        <td className="border-b border-r border-gray-300 px-2 py-1"><Math tex="0 \in \mathbb{N}" /> ✓</td>
                        <td className="border-b border-gray-300 px-2 py-1 text-center text-red-600 font-bold">含 0</td>
                      </tr>
                      <tr>
                        <td className="border-b border-r border-gray-300 px-2 py-1 text-center"><Math tex="\mathbb{N}^*" /></td>
                        <td className="border-b border-r border-gray-300 px-2 py-1">正整数集</td>
                        <td className="border-b border-r border-gray-300 px-2 py-1 text-gray-500">N 加星 = 去掉 0</td>
                        <td className="border-b border-r border-gray-300 px-2 py-1">1, 2, 3, …</td>
                        <td className="border-b border-r border-gray-300 px-2 py-1"><Math tex="0 \notin \mathbb{N}^*" /> ✓</td>
                        <td className="border-b border-gray-300 px-2 py-1 text-center text-red-600 font-bold">不含 0</td>
                      </tr>
                      <tr>
                        <td className="border-b border-r border-gray-300 px-2 py-1 text-center"><Math tex="\mathbb{Z}" /></td>
                        <td className="border-b border-r border-gray-300 px-2 py-1">整数集</td>
                        <td className="border-b border-r border-gray-300 px-2 py-1 text-gray-500"><strong>Z</strong>ahlen（德语）= <strong>整</strong>(Zhěng)</td>
                        <td className="border-b border-r border-gray-300 px-2 py-1">…, -2, -1, 0, 1, 2, …</td>
                        <td className="border-b border-r border-gray-300 px-2 py-1"><Math tex="-3 \in \mathbb{Z}" /> ✓</td>
                        <td className="border-b border-gray-300 px-2 py-1 text-center">含负数</td>
                      </tr>
                      <tr>
                        <td className="border-b border-r border-gray-300 px-2 py-1 text-center"><Math tex="\mathbb{Q}" /></td>
                        <td className="border-b border-r border-gray-300 px-2 py-1">有理数集</td>
                        <td className="border-b border-r border-gray-300 px-2 py-1 text-gray-500"><strong>Q</strong>uotient = 商（分数）</td>
                        <td className="border-b border-r border-gray-300 px-2 py-1">能写成分数的数</td>
                        <td className="border-b border-r border-gray-300 px-2 py-1"><Math tex="\frac{1}{3} \in \mathbb{Q}" /> ✓</td>
                        <td className="border-b border-gray-300 px-2 py-1 text-center text-red-600 font-bold"><Math tex="\sqrt{2} \notin \mathbb{Q}" /></td>
                      </tr>
                      <tr>
                        <td className="border-b border-r border-gray-300 px-2 py-1 text-center"><Math tex="\mathbb{R}" /></td>
                        <td className="border-b border-r border-gray-300 px-2 py-1">实数集</td>
                        <td className="border-b border-r border-gray-300 px-2 py-1 text-gray-500"><strong>R</strong>eal = 真实（实数）</td>
                        <td className="border-b border-r border-gray-300 px-2 py-1">数轴上所有点</td>
                        <td className="border-b border-r border-gray-300 px-2 py-1"><Math tex="\sqrt{2} \in \mathbb{R}" /> ✓</td>
                        <td className="border-b border-gray-300 px-2 py-1 text-center">有理+无理</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="px-2 py-1 border-t border-gray-300 bg-purple-50 text-center">
                    <p><strong>包含关系：</strong><Math tex="\mathbb{N}^* \subset \mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}" />　（正 ⊂ 自 ⊂ 整 ⊂ 有 ⊂ 实）</p>
                  </div>
                </div>

                <PracticeCard questions={setsPractice3} explanations={setsExplanations} optionCols={4} printOptionCols={4} />
              </div>
            </Collapsible>
          </section>

          <PageBreak label="集合间的关系" />

          {/* Section 5: 集合间的关系 */}
          <section id="sets-subset" className="mb-0 scroll-mt-4">
            <Collapsible title="五、集合间的关系" defaultOpen storageKey="sets:relations" headerExtra={<SpeakButton text={setsNarrations.subsets} />}>
              <p className="text-blue-600 mb-1">🎯 学完你能：判断子集和真子集关系，计算子集个数，记住空集铁律。</p>
              <div className="space-y-0 text-lg text-gray-800">

                {/* 引入 */}
                <div className="bg-blue-50 border border-blue-200 rounded p-2">
                  <p className="font-bold text-blue-800 mb-1">先看一个例子</p>
                  <p className="text-blue-700">A = <Math tex="\{1, 3\}" />，B = <Math tex="\{1, 2, 3, 4\}" /></p>
                  <p className="text-blue-700 mt-1">A 里的<strong>每一个元素</strong>（1 和 3），B 里面都有。我们就说：<strong>A "包含在" B 里面</strong>。</p>
                  <p className="text-blue-700">数学上写成：<Math tex="A \subseteq B" />。这就是<strong>子集</strong>。</p>
                </div>

                {/* ⊆ vs ∈ 区分（提前、显眼） */}
                <div className="bg-amber-50 border border-amber-300 rounded p-2">
                  <p className="font-bold text-amber-700 mb-1">⚠ 先搞清两个符号，后面全靠它们</p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white rounded p-2 border border-amber-200">
                      <p className="font-bold text-center text-blue-700 mb-1"><Math tex="\in" />　属于</p>
                      <p className="text-center"><strong>一个元素</strong>在集合里</p>
                      <p className="text-center text-gray-600 mt-1"><Math tex="3 \in \{1,2,3\}" /> ✓</p>
                      <p className="text-center text-gray-500 text-sm">（元素 和 集合 的关系）</p>
                    </div>
                    <div className="bg-white rounded p-2 border border-amber-200">
                      <p className="font-bold text-center text-green-700 mb-1"><Math tex="\subseteq" />　子集</p>
                      <p className="text-center"><strong>一个集合</strong>整个在另一个集合里</p>
                      <p className="text-center text-gray-600 mt-1"><Math tex="\{1,3\} \subseteq \{1,2,3\}" /> ✓</p>
                      <p className="text-center text-gray-500 text-sm">（集合 和 集合 的关系）</p>
                    </div>
                  </div>
                  <p className="text-amber-700 mt-1 text-center"><strong>∈ 问的是"一个元素在不在集合里"，⊆ 问的是"一个集合是不是另一个集合的一部分"。别搞混！</strong></p>
                </div>

                {/* ①② 子集 vs 真子集 左右布局 */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="grid grid-cols-2">
                    <div className="px-2 py-1 font-bold text-green-700 border-b border-r border-gray-400 bg-green-50">子集 ⊆ — A 全在 B 里面</div>
                    <div className="px-2 py-1 font-bold text-purple-700 border-b border-gray-400 bg-purple-50">真子集 ⊊ — 全在里面，但还差点</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-2 py-1.5 border-r border-b border-gray-300 space-y-0.5">
                      <p><Math tex="A \subseteq B" /> 读作"A 是 B 的子集"</p>
                      <p><strong>A 里面的每一个元素，B 里面都有。</strong></p>
                      <p className="mt-1">A = <Math tex="\{1, 3\}" />，B = <Math tex="\{1, 2, 3, 4\}" /></p>
                      <p>1 在 B？<strong className="text-green-600">✓</strong>　3 在 B？<strong className="text-green-600">✓</strong></p>
                      <p>全部都在，所以 <strong className="text-green-600">A ⊆ B ✓</strong></p>
                    </div>
                    <div className="px-2 py-1.5 border-b border-gray-300 space-y-0.5">
                      <p><Math tex="A \subsetneq B" /> 读作"A 是 B 的真子集"</p>
                      <p>A 全在 B 里，<strong>而且 B 比 A 多元素</strong></p>
                      <p className="mt-1">A = <Math tex="\{1, 3\}" />，B = <Math tex="\{1, 2, 3, 4\}" /></p>
                      <p>A 全在 B 里，B 还多了 2 和 4</p>
                      <p>所以 <strong className="text-purple-600">A ⊊ B ✓</strong></p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-2 py-1.5 border-r border-b border-gray-300 space-y-0.5">
                      <p className="font-bold">完全一样也算子集！</p>
                      <p>A = &#123;1, 2, 3&#125;，B = &#123;1, 2, 3&#125;</p>
                      <p><strong className="text-green-600">A ⊆ B ✓</strong>（允许相等）</p>
                    </div>
                    <div className="px-2 py-1.5 border-b border-gray-300 space-y-0.5">
                      <p className="font-bold">完全一样就不算真子集！</p>
                      <p>A = &#123;1, 2, 3&#125;，B = &#123;1, 2, 3&#125;</p>
                      <p><strong className="text-red-500">A ⊊ B ✗</strong>（B 没多任何东西）</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-2 py-1 border-r border-gray-300 bg-[#F5E6D3]">
                      <p className="text-[#7A5C3E]"><strong>⊆ 像 ≤</strong>（小于等于，允许相等）</p>
                    </div>
                    <div className="px-2 py-1 bg-[#F5E6D3]">
                      <p className="text-[#7A5C3E]"><strong>⊊ 像 {'<'}</strong>（严格小于，不能相等）</p>
                    </div>
                  </div>
                </div>

                {/* ③ 集合相等 */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-blue-50">集合相等 = — 元素完全相同</div>
                  <div className="px-2 py-1 space-y-0.5">
                    <p><Math tex="A = B" /> 就是说：A 和 B 的元素<strong>一模一样</strong>（顺序无所谓，第二节学过）</p>
                    <p><Math tex="\{1,2,3\} = \{3,1,2\}" /> ✓　元素相同，只是写的顺序不同。</p>
                    <p className="text-gray-500 text-sm mt-1">判断相等的另一种方式：<Math tex="A \subseteq B" /> 且 <Math tex="B \subseteq A" />，即互为子集。</p>
                  </div>
                </div>

                {/* 三种关系对比总结 */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold border-b border-gray-400 bg-gray-50">三种关系对比总结</div>
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border-b border-r border-gray-300 px-2 py-1 text-center">关系</th>
                        <th className="border-b border-r border-gray-300 px-2 py-1 text-center">符号</th>
                        <th className="border-b border-r border-gray-300 px-2 py-1 text-left">含义</th>
                        <th className="border-b border-gray-300 px-2 py-1 text-left">例子</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border-b border-r border-gray-300 px-2 py-1 text-center font-bold text-green-700">子集</td>
                        <td className="border-b border-r border-gray-300 px-2 py-1 text-center"><Math tex="A \subseteq B" /></td>
                        <td className="border-b border-r border-gray-300 px-2 py-1">A 全在 B 里（<strong>允许相等</strong>）</td>
                        <td className="border-b border-gray-300 px-2 py-1"><Math tex="\{1,2\} \subseteq \{1,2,3\}" /></td>
                      </tr>
                      <tr>
                        <td className="border-b border-r border-gray-300 px-2 py-1 text-center font-bold text-purple-700">真子集</td>
                        <td className="border-b border-r border-gray-300 px-2 py-1 text-center"><Math tex="A \subsetneq B" /></td>
                        <td className="border-b border-r border-gray-300 px-2 py-1">A 全在 B 里，且 B <strong>更大</strong></td>
                        <td className="border-b border-gray-300 px-2 py-1"><Math tex="\{1,2\} \subsetneq \{1,2,3\}" /></td>
                      </tr>
                      <tr>
                        <td className="border-r border-gray-300 px-2 py-1 text-center font-bold text-blue-700">相等</td>
                        <td className="border-r border-gray-300 px-2 py-1 text-center"><Math tex="A = B" /></td>
                        <td className="border-r border-gray-300 px-2 py-1">元素<strong>完全相同</strong></td>
                        <td className="px-2 py-1"><Math tex="\{1,2,3\} = \{3,1,2\}" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-gray-50 rounded p-2 text-sm">
                  <p className="font-bold mb-0.5">快速判断：A = <Math tex="\{1, 2\}" />，B = <Math tex="\{1, 2, 3\}" />，C = <Math tex="\{2, 1\}" /></p>
                  <p><Math tex="A \subseteq B" /> <strong className="text-green-600">✓</strong>　　<Math tex="A \subsetneq B" /> <strong className="text-green-600">✓</strong>　　<Math tex="A = C" /> <strong className="text-green-600">✓</strong>　　<Math tex="B \subseteq A" /> <strong className="text-red-500">✗</strong>（3 不在 A 里）</p>
                  <p><Math tex="2 \in B" /> <strong className="text-green-600">✓</strong>　　<Math tex="\{2\} \in B" /> <strong className="text-red-500">✗</strong>（<Math tex="\{2\}" /> 是集合不是元素）　　<Math tex="\{2\} \subseteq B" /> <strong className="text-green-600">✓</strong>　　<Math tex="A \subseteq C" /> <strong className="text-green-600">✓</strong>（A = C，互为子集）</p>
                  <p className="text-gray-500 mt-0.5">注意第二个：∈ 左边必须是<strong>元素</strong>，不能放集合。<Math tex="\{2\}" /> 是集合，要用 ⊆。</p>
                </div>

                <PageBreak label="空集" />

                {/* ④ 空集 — 拆成两个独立卡片 */}
                {/* 空集卡片1：定义 + 例子 */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold border-b border-gray-400 bg-gray-50">空集 ∅ — 什么都没有的集合</div>
                  <div className="px-2 py-1 border-b border-gray-300 space-y-0.5">
                    <p><strong>定义：</strong>不含任何元素的集合叫空集，记作 <Math tex="\varnothing" /></p>
                    <p>没有任何元素，但它仍然是一个集合。</p>
                  </div>
                  <div className="px-2 py-1 border-b border-gray-300 text-sm">
                    <p className="font-bold mb-0.5">哪些集合是空集？</p>
                    <table className="w-full border-collapse">
                      <tbody>
                        <tr>
                          <td className="border-b border-r border-gray-200 px-1 py-0.5"><Math tex="\{x \mid x^2+1=0\}" /></td>
                          <td className="border-b border-gray-200 px-1 py-0.5">无实数解，是 <Math tex="\varnothing" /></td>
                        </tr>
                        <tr>
                          <td className="border-b border-r border-gray-200 px-1 py-0.5"><Math tex="\{x \mid x > 5 \text{ 且 } x < 2\}" /></td>
                          <td className="border-b border-gray-200 px-1 py-0.5">矛盾，不存在，是 <Math tex="\varnothing" /></td>
                        </tr>
                        <tr>
                          <td className="border-r border-gray-200 px-1 py-0.5"><Math tex="\{x \in \mathbb{N} \mid 3 < x < 4\}" /></td>
                          <td className="px-1 py-0.5">3 和 4 之间没有自然数，是 <Math tex="\varnothing" /></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="px-2 py-1 bg-amber-50">
                    <p className="text-amber-700"><strong>⚠ 易混：</strong><Math tex="\varnothing" /> 是空的（0 个元素），<Math tex="\{0\}" /> 里面有 1 个元素（数字 0）。它们<strong>不一样</strong>！</p>
                    <p className="text-amber-700">同理，<Math tex="\{\varnothing\}" /> 也不是空集——里面有 1 个元素（空集本身）。</p>
                  </div>
                </div>

                {/* 空集卡片2：空集铁律 */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold border-b border-gray-400 bg-gray-50">空集铁律（必背！高考必考）</div>
                  <div className="px-2 py-1 border-b border-gray-300 space-y-0.5">
                    <p><strong>铁律1：</strong><Math tex="\varnothing \subseteq A" />　空集是<strong>任何</strong>集合的子集</p>
                    <p className="text-gray-500 ml-5 text-sm">为什么？因为 ∅ 里<strong>没有元素</strong>，所以"∅ 的每个元素都在 A 里"这句话找不到反例，自动成立。</p>
                    <p className="mt-1"><strong>铁律2：</strong><Math tex="\varnothing \subsetneq A" />（当 A ≠ ∅ 时）　空集是任何<strong>非空</strong>集合的真子集</p>
                    <p className="text-gray-500 ml-5 text-sm">空集全在 A 里（铁律1），而 A 比空集多了元素，所以是真子集。</p>
                  </div>
                  <div className="px-2 py-1 border-b border-gray-300 text-sm">
                    <p className="font-bold mb-0.5">判断对错（用铁律 + ∈ vs ⊆ 区分来判断）</p>
                    <div className="space-y-0.5">
                      <p><Math tex="\varnothing \subseteq \{1,2,3\}" /> <strong className="text-green-600">✓</strong> 铁律1，空集是任何集合的子集</p>
                      <p><Math tex="\varnothing \in \{1,2,3\}" /> <strong className="text-red-500">✗</strong> ∈ 问的是"∅ 是不是里面的元素"，里面只有 1、2、3，没有 ∅</p>
                      <p><Math tex="\varnothing \subseteq \varnothing" /> <strong className="text-green-600">✓</strong> 铁律1，<strong>任何</strong>集合包括空集自己</p>
                      <p><Math tex="\varnothing \subsetneq \varnothing" /> <strong className="text-red-500">✗</strong> 完全相等了，不满足"B 比 A 大"</p>
                    </div>
                  </div>
                  <div className="px-2 py-1 bg-[#F5E6D3]">
                    <p className="text-[#7A5C3E]"><strong>⚠ 高考陷阱：</strong>题目说"A ⊆ B"，别忘了 A 可能是空集！很多人只考虑 A 非空的情况就丢分了。</p>
                  </div>
                </div>

                {/* ⑤ 子集个数公式 */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold border-b border-gray-400 bg-gray-50">子集个数公式</div>
                  <div className="px-2 py-1 border-b border-gray-300 space-y-0.5">
                    <p className="font-bold">为什么是 <Math tex="2^n" />？</p>
                    <p>想象你站在超市，面前有 n 个商品。每个商品你都有<strong>两种选择</strong>：<strong>拿</strong>或<strong>不拿</strong>。</p>
                    <p>3 个商品：每个 2 种选择，一共 <Math tex="2 \times 2 \times 2 = 2^3 = 8" /> 种组合方式。</p>
                    <p>子集也一样：每个元素<strong>选或不选</strong>，n 个元素就有 <Math tex="2^n" /> 个子集。</p>
                  </div>
                  <div className="px-2 py-1 border-b border-gray-300">
                    <p><strong>例：</strong>A = &#123;a, b, c&#125;，3 个元素，列出所有子集：</p>
                    <p className="ml-5">都不选：∅　　选1个：&#123;a&#125;, &#123;b&#125;, &#123;c&#125;　　选2个：&#123;a,b&#125;, &#123;a,c&#125;, &#123;b,c&#125;　　全选：&#123;a,b,c&#125;</p>
                    <p className="ml-5">总共 1 + 3 + 3 + 1 = <strong>8</strong> 个，正好 <Math tex="2^3 = 8" /> ✓</p>
                  </div>
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border-b border-r border-gray-300 px-2 py-1 text-center">类型</th>
                        <th className="border-b border-r border-gray-300 px-2 py-1 text-center">公式</th>
                        <th className="border-b border-gray-300 px-2 py-1 text-left">说明</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border-b border-r border-gray-300 px-2 py-1 text-center font-bold">子集</td>
                        <td className="border-b border-r border-gray-300 px-2 py-1 text-center"><Math tex="2^n" /></td>
                        <td className="border-b border-gray-300 px-2 py-1">每个元素选或不选，所有情况</td>
                      </tr>
                      <tr>
                        <td className="border-b border-r border-gray-300 px-2 py-1 text-center font-bold">真子集</td>
                        <td className="border-b border-r border-gray-300 px-2 py-1 text-center"><Math tex="2^n - 1" /></td>
                        <td className="border-b border-gray-300 px-2 py-1"><Math tex="2^n" /> 减去 A 本身（A 不是自己的真子集）</td>
                      </tr>
                      <tr>
                        <td className="border-b border-r border-gray-300 px-2 py-1 text-center font-bold">非空子集</td>
                        <td className="border-b border-r border-gray-300 px-2 py-1 text-center"><Math tex="2^n - 1" /></td>
                        <td className="border-b border-gray-300 px-2 py-1"><Math tex="2^n" /> 减去空集 ∅</td>
                      </tr>
                      <tr>
                        <td className="border-r border-gray-300 px-2 py-1 text-center font-bold">非空真子集</td>
                        <td className="border-r border-gray-300 px-2 py-1 text-center"><Math tex="2^n - 2" /></td>
                        <td className="px-2 py-1"><Math tex="2^n" /> 同时减去 ∅ 和 A 本身</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="px-2 py-1 border-t border-gray-300">
                    <p><strong>验证：</strong>A = &#123;a, b, c&#125; 有 <Math tex="2^3 = 8" /> 个子集</p>
                    <p>子集 <strong>8</strong> 个　　真子集 8−1 = <strong>7</strong> 个（去掉 &#123;a,b,c&#125;）　　非空子集 8−1 = <strong>7</strong> 个（去掉 ∅）　　非空真子集 8−2 = <strong>6</strong> 个</p>
                    <p><strong>记法：</strong>先算 <Math tex="2^n" />，要去自身就 −1，要去空集也 −1，两个都去就 −2。</p>
                  </div>
                </div>

              </div>
            </Collapsible>
          </section>

          <PageBreak label="集合运算" />

          {/* Section 6: 集合的运算 */}
          <section id="sets-ops" className="mb-0 scroll-mt-4">
            <Collapsible title="六、集合的运算（高考核心！）" defaultOpen storageKey="sets:operations" headerExtra={<SpeakButton text={setsNarrations.operations} />}>
              <p className="text-blue-600 mb-1">🎯 学完你能：熟练做交集、并集、补集运算，掌握混合运算技巧。</p>
              <div className="space-y-1 text-lg text-gray-800">

                {/* 核心方法 */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold border-b border-gray-400 bg-gray-50">集合运算核心方法</div>
                  <table className="w-full border-collapse">
                    <tbody>
                      <tr>
                        <td className="border-b border-r border-gray-300 px-2 py-1 text-center font-bold w-24">有限集</td>
                        <td className="border-b border-gray-300 px-2 py-1">画 <strong>Venn 图</strong>，一个一个找</td>
                      </tr>
                      <tr>
                        <td className="border-r border-gray-300 px-2 py-1 text-center font-bold">不等式集</td>
                        <td className="px-2 py-1">画 <strong>数轴</strong>，看线段重叠/合并/剩余</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* ==================== 交集 / 并集 / 补集 定义并排 ==================== */}
                <div className="grid grid-cols-3 gap-1">
                  {/* 交集定义 */}
                  <div className="border border-gray-400 rounded overflow-hidden">
                    <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-50 text-center text-lg">交集 <Math tex="\cap" /></div>
                    <div className="flex justify-center p-2">
                      <svg viewBox="0 0 160 100" className="w-full">
                        <rect x="3" y="3" width="154" height="94" rx="6" fill="#f9fafb" stroke="#d1d5db" strokeWidth="1" />
                        <circle cx="58" cy="50" r="30" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.2" fillOpacity="0.4" />
                        <circle cx="98" cy="50" r="30" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.2" fillOpacity="0.4" />
                        <clipPath id="opClipA"><circle cx="58" cy="50" r="30" /></clipPath>
                        <circle cx="98" cy="50" r="30" fill="#bbf7d0" fillOpacity="0.8" clipPath="url(#opClipA)" />
                        <text x="42" y="54" fontSize="11" fill="#1d4ed8" fontWeight="bold" textAnchor="middle">A</text>
                        <text x="114" y="54" fontSize="11" fill="#b45309" fontWeight="bold" textAnchor="middle">B</text>
                        <text x="78" y="88" fontSize="9" fill="#15803d" fontWeight="bold" textAnchor="middle">绿色=A∩B</text>
                      </svg>
                    </div>
                    <div className="px-2 py-1 border-t border-gray-300 text-center">
                      <p className="text-lg"><strong>两个都有的</strong></p>
                    </div>
                  </div>
                  {/* 并集定义 */}
                  <div className="border border-gray-400 rounded overflow-hidden">
                    <div className="px-2 py-1 font-bold text-green-700 border-b border-gray-400 bg-gray-50 text-center text-lg">并集 <Math tex="\cup" /></div>
                    <div className="flex justify-center p-2">
                      <svg viewBox="0 0 160 100" className="w-full">
                        <rect x="3" y="3" width="154" height="94" rx="6" fill="#f9fafb" stroke="#d1d5db" strokeWidth="1" />
                        <circle cx="58" cy="50" r="30" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.2" fillOpacity="0.6" />
                        <circle cx="98" cy="50" r="30" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.2" fillOpacity="0.6" />
                        <text x="42" y="54" fontSize="11" fill="#15803d" fontWeight="bold" textAnchor="middle">A</text>
                        <text x="114" y="54" fontSize="11" fill="#15803d" fontWeight="bold" textAnchor="middle">B</text>
                        <text x="78" y="88" fontSize="9" fill="#15803d" fontWeight="bold" textAnchor="middle">全绿=A∪B</text>
                      </svg>
                    </div>
                    <div className="px-2 py-1 border-t border-gray-300 text-center">
                      <p className="text-lg"><strong>有一个就行</strong></p>
                    </div>
                  </div>
                  {/* 补集定义 */}
                  <div className="border border-gray-400 rounded overflow-hidden">
                    <div className="px-2 py-1 font-bold text-red-700 border-b border-gray-400 bg-gray-50 text-center text-lg">补集 <Math tex="\complement_U A" /></div>
                    <div className="flex justify-center p-2">
                      <svg viewBox="0 0 160 100" className="w-full">
                        <rect x="3" y="3" width="154" height="94" rx="6" fill="#fde68a" stroke="#f59e0b" strokeWidth="1.2" />
                        <text x="145" y="16" fontSize="10" fill="#b45309" fontWeight="bold">U</text>
                        <circle cx="72" cy="50" r="28" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.2" />
                        <text x="72" y="54" fontSize="11" fill="#3b82f6" fontWeight="bold" textAnchor="middle">A</text>
                        <text x="130" y="88" fontSize="9" fill="#b45309" fontWeight="bold" textAnchor="middle">黄色=补集</text>
                      </svg>
                    </div>
                    <div className="px-2 py-1 border-t border-gray-300 text-center">
                      <p className="text-lg"><strong>U 里去掉 A</strong></p>
                    </div>
                  </div>
                </div>

                {/* 交集 vs 并集 vs 补集 对比表 */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold border-b border-gray-400 bg-gray-50">交集 vs 并集 vs 补集 对比</div>
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border-b border-r border-gray-300 px-2 py-1 text-center"></th>
                        <th className="border-b border-r border-gray-300 px-2 py-1 text-center text-blue-700">交集 <Math tex="A \cap B" /></th>
                        <th className="border-b border-r border-gray-300 px-2 py-1 text-center text-green-700">并集 <Math tex="A \cup B" /></th>
                        <th className="border-b border-gray-300 px-2 py-1 text-center text-red-700">补集 <Math tex="\complement_U A" /></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border-b border-r border-gray-300 px-2 py-1 font-bold text-center">定义</td>
                        <td className="border-b border-r border-gray-300 px-2 py-1 text-center"><Math tex="x \in A" /> <strong>且</strong> <Math tex="x \in B" /></td>
                        <td className="border-b border-r border-gray-300 px-2 py-1 text-center"><Math tex="x \in A" /> <strong>或</strong> <Math tex="x \in B" /></td>
                        <td className="border-b border-gray-300 px-2 py-1 text-center"><Math tex="x \in U" /> <strong>且</strong> <Math tex="x \notin A" /></td>
                      </tr>
                      <tr>
                        <td className="border-b border-r border-gray-300 px-2 py-1 font-bold text-center">意思</td>
                        <td className="border-b border-r border-gray-300 px-2 py-1 text-center">两个<strong>都有</strong></td>
                        <td className="border-b border-r border-gray-300 px-2 py-1 text-center"><strong>至少一个有</strong></td>
                        <td className="border-b border-gray-300 px-2 py-1 text-center">U 里<strong>不在 A</strong> 的</td>
                      </tr>
                      <tr>
                        <td className="border-b border-r border-gray-300 px-2 py-1 font-bold text-center">有限集</td>
                        <td className="border-b border-r border-gray-300 px-2 py-1 text-center"><strong>逐个检查</strong>两边都有的</td>
                        <td className="border-b border-r border-gray-300 px-2 py-1 text-center"><strong>合在一起</strong>去重</td>
                        <td className="border-b border-gray-300 px-2 py-1 text-center">从 U 里<strong>逐个排除</strong></td>
                      </tr>
                      <tr>
                        <td className="border-b border-r border-gray-300 px-2 py-1 font-bold text-center">数轴</td>
                        <td className="border-b border-r border-gray-300 px-2 py-1 text-center">取<strong>重叠</strong></td>
                        <td className="border-b border-r border-gray-300 px-2 py-1 text-center">取<strong>全部</strong></td>
                        <td className="border-b border-gray-300 px-2 py-1 text-center">取<strong>没涂色</strong>的</td>
                      </tr>
                      <tr>
                        <td className="border-r border-gray-300 px-2 py-1 font-bold text-center">记忆</td>
                        <td className="border-r border-gray-300 px-2 py-1 text-center"><Math tex="\cap" /> 碗<strong>扣下来</strong></td>
                        <td className="border-r border-gray-300 px-2 py-1 text-center"><Math tex="\cup" /> 碗<strong>装东西</strong></td>
                        <td className="px-2 py-1 text-center">C 像<strong>剔掉</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* ==================== 补集+交并混合教学（梯度递进） ==================== */}

                {/* 有限集的交/并/补 */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-50 text-lg">有限集的交/并/补（逐个找）</div>
                  <div className="px-2 py-1 border-b border-gray-300">
                    <p>已知 <Math tex="U = \{1, 2, 3, 4, 5\}" />，<Math tex="A = \{1, 2, 3\}" />，<Math tex="B = \{2, 4, 5\}" /></p>
                  </div>
                  <div className="px-2 py-1 space-y-1">
                    <p><strong><Math tex="A \cap B" /> = ？</strong></p>
                    <p className="ml-4">A 和 B <strong>都有</strong>的：逐个看，只有 2 两边都有</p>
                    <p className="ml-4">答案：<strong><Math tex="A \cap B = \{2\}" /></strong></p>

                    <p><strong><Math tex="A \cup B" /> = ？</strong></p>
                    <p className="ml-4">A 和 B <strong>合在一起</strong>去重：1, 2, 3, 4, 5</p>
                    <p className="ml-4">答案：<strong><Math tex="A \cup B = \{1, 2, 3, 4, 5\}" /></strong></p>

                    <p><strong><Math tex="\complement_U A" /> = ？</strong></p>
                    <p className="ml-4">U 里<strong>不在 A</strong> 的：U 有 1,2,3,4,5，A 有 1,2,3，剩下 4,5</p>
                    <p className="ml-4">答案：<strong><Math tex="\complement_U A = \{4, 5\}" /></strong></p>
                  </div>
                  <div className="px-2 py-1 border-t border-gray-300 bg-blue-50">
                    <p className="text-blue-700">有限集很简单：<strong>一个一个找就行</strong>，不需要任何技巧。</p>
                  </div>
                </div>

                <PageBreak />

                {/* 补集的端点规律 */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-red-700 border-b border-gray-400 bg-gray-50 text-lg">补集的端点规律（开变闭，闭变开）</div>
                  <div className="px-2 py-1 space-y-1">
                    <p>补集就是"U 里<strong>不在 A</strong> 的部分"，端点<strong>开变闭，闭变开</strong>。下面是完整的对照表：</p>
                    <table className="w-full border-collapse text-center">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border-b border-r border-gray-300 px-2 py-1">A</th>
                          <th className="border-b border-r border-gray-300 px-2 py-1">补集 <Math tex="\complement_U A" /></th>
                          <th className="border-b border-gray-300 px-2 py-1">端点变化</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border-b border-r border-gray-300 px-2 py-1"><Math tex="\{x \mid x > 2\}" /></td>
                          <td className="border-b border-r border-gray-300 px-2 py-1"><Math tex="\{x \mid x \leq 2\}" /></td>
                          <td className="border-b border-gray-300 px-2 py-1">{'>'} 变 ≤（开变闭）</td>
                        </tr>
                        <tr>
                          <td className="border-b border-r border-gray-300 px-2 py-1"><Math tex="\{x \mid x \leq 3\}" /></td>
                          <td className="border-b border-r border-gray-300 px-2 py-1"><Math tex="\{x \mid x > 3\}" /></td>
                          <td className="border-b border-gray-300 px-2 py-1">≤ 变 {'>'}（闭变开）</td>
                        </tr>
                        <tr>
                          <td className="border-b border-r border-gray-300 px-2 py-1"><Math tex="(2, +\infty)" /></td>
                          <td className="border-b border-r border-gray-300 px-2 py-1"><Math tex="(-\infty, 2]" /></td>
                          <td className="border-b border-gray-300 px-2 py-1">( 变 ]</td>
                        </tr>
                        <tr>
                          <td className="border-b border-r border-gray-300 px-2 py-1"><Math tex="(-\infty, 3]" /></td>
                          <td className="border-b border-r border-gray-300 px-2 py-1"><Math tex="(3, +\infty)" /></td>
                          <td className="border-b border-gray-300 px-2 py-1">] 变 (</td>
                        </tr>
                        <tr>
                          <td className="border-b border-r border-gray-300 px-2 py-1"><Math tex="(1, 4]" /></td>
                          <td className="border-b border-r border-gray-300 px-2 py-1"><Math tex="(-\infty, 1] \cup (4, +\infty)" /></td>
                          <td className="border-b border-gray-300 px-2 py-1">( 变 ]，] 变 (</td>
                        </tr>
                        <tr>
                          <td className="border-r border-gray-300 px-2 py-1"><Math tex="[2, 5)" /></td>
                          <td className="border-r border-gray-300 px-2 py-1"><Math tex="(-\infty, 2) \cup [5, +\infty)" /></td>
                          <td className="px-2 py-1">[ 变 )，) 变 [</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="px-2 py-1 border-t border-gray-300 bg-[#F5E6D3]">
                    <p className="text-[#7A5C3E]">口诀：<strong>开变闭，闭变开，方向全反转</strong>。在数轴上就是"没涂色的部分"。</p>
                  </div>
                </div>

                {/* 补集具体例子（左右布局，图占一半） */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-red-700 border-b border-gray-400 bg-gray-50">补集例题（<Math tex="U = \mathbb{R}" />）</div>
                  {/* 例1: x < -1，开 */}
                  <div className="flex items-center border-b border-gray-300">
                    <div className="flex-1 px-2 py-1 space-y-0.5">
                      <p><strong>例1：</strong><Math tex="A = \{x \mid x < -1\}" /></p>
                      <p>端点 -1：A 开（○），补集<strong>闭</strong>（●）</p>
                      <p>答案：<strong><Math tex="[-1, +\infty)" /></strong></p>
                    </div>
                    <svg viewBox="0 0 200 60" className="w-[40%] shrink-0">
                      {/* Axis */}
                      <line x1="10" y1="45" x2="190" y2="45" stroke="#9ca3af" strokeWidth="1.5" />
                      <polygon points="190,42 198,45 190,48" fill="#9ca3af" />
                      <line x1="100" y1="42" x2="100" y2="48" stroke="#374151" strokeWidth="1" />
                      <text x="100" y="58" fontSize="10" fill="#374151" textAnchor="middle">-1</text>
                      
                      {/* A (blue): L-ray left */}
                      <polyline points="10,20 100,20 100,45" fill="none" stroke="#3b82f6" strokeWidth="2" />
                      <polygon points="15,17 7,20 15,23" fill="#3b82f6" />
                      <circle cx="100" cy="45" r="3.5" fill="white" stroke="#3b82f6" strokeWidth="1.5" />
                      <text x="55" y="15" fontSize="10" fill="#3b82f6" fontWeight="bold" textAnchor="middle">A</text>
                      
                      {/* 补集 (red): on axis right */}
                      <line x1="100" y1="45" x2="190" y2="45" stroke="#ef4444" strokeWidth="3" />
                      <polygon points="190,41 198,45 190,49" fill="#ef4444" />
                      <circle cx="100" cy="45" r="3.5" fill="#ef4444" />
                      <text x="145" y="38" fontSize="10" fill="#ef4444" fontWeight="bold" textAnchor="middle">补集</text>
                    </svg>
                  </div>
                  {/* 例2: x ≥ 5，闭 */}
                  <div className="flex items-center border-b border-gray-300">
                    <div className="flex-1 px-2 py-1 space-y-0.5">
                      <p><strong>例2：</strong><Math tex="A = \{x \mid x \geq 5\}" /></p>
                      <p>端点 5：A 闭（●），补集<strong>开</strong>（○）</p>
                      <p>答案：<strong><Math tex="(-\infty, 5)" /></strong></p>
                    </div>
                    <svg viewBox="0 0 200 60" className="w-[40%] shrink-0">
                      {/* Axis */}
                      <line x1="10" y1="45" x2="190" y2="45" stroke="#9ca3af" strokeWidth="1.5" />
                      <polygon points="190,42 198,45 190,48" fill="#9ca3af" />
                      <line x1="100" y1="42" x2="100" y2="48" stroke="#374151" strokeWidth="1" />
                      <text x="100" y="58" fontSize="10" fill="#374151" textAnchor="middle">5</text>
                      
                      {/* A (blue): L-ray right */}
                      <polyline points="100,45 100,20 190,20" fill="none" stroke="#3b82f6" strokeWidth="2" />
                      <polygon points="185,17 193,20 185,23" fill="#3b82f6" />
                      <circle cx="100" cy="45" r="3.5" fill="#3b82f6" />
                      <text x="145" y="15" fontSize="10" fill="#3b82f6" fontWeight="bold" textAnchor="middle">A</text>
                      
                      {/* 补集 (red): on axis left */}
                      <line x1="10" y1="45" x2="100" y2="45" stroke="#ef4444" strokeWidth="3" />
                      <polygon points="10,41 2,45 10,49" fill="#ef4444" />
                      <circle cx="100" cy="45" r="3.5" fill="white" stroke="#ef4444" strokeWidth="1.5" />
                      <text x="55" y="38" fontSize="10" fill="#ef4444" fontWeight="bold" textAnchor="middle">补集</text>
                    </svg>
                  </div>
                  {/* 例3: [-2, 3)，双端 */}
                  <div className="flex items-center">
                    <div className="flex-1 px-2 py-1 space-y-0.5">
                      <p><strong>例3：</strong><Math tex="A = [-2, 3)" /></p>
                      <p>端点 -2：A 闭（●），补集<strong>开</strong>（○）</p>
                      <p>端点 3：A 开（○），补集<strong>闭</strong>（●）</p>
                      <p>答案：<strong><Math tex="(-\infty, -2) \cup [3, +\infty)" /></strong></p>
                    </div>
                    <svg viewBox="0 0 200 60" className="w-[40%] shrink-0">
                      {/* Axis */}
                      <line x1="10" y1="45" x2="190" y2="45" stroke="#9ca3af" strokeWidth="1.5" />
                      <polygon points="190,42 198,45 190,48" fill="#9ca3af" />
                      <line x1="60" y1="42" x2="60" y2="48" stroke="#374151" strokeWidth="1" />
                      <line x1="140" y1="42" x2="140" y2="48" stroke="#374151" strokeWidth="1" />
                      <text x="60" y="58" fontSize="10" fill="#374151" textAnchor="middle">-2</text>
                      <text x="140" y="58" fontSize="10" fill="#374151" textAnchor="middle">3</text>
                      
                      {/* A (blue): U-shape */}
                      <polyline points="60,45 60,20 140,20 140,45" fill="none" stroke="#3b82f6" strokeWidth="2" />
                      <circle cx="60" cy="45" r="3.5" fill="#3b82f6" />
                      <circle cx="140" cy="45" r="3.5" fill="white" stroke="#3b82f6" strokeWidth="1.5" />
                      <text x="100" y="15" fontSize="10" fill="#3b82f6" fontWeight="bold" textAnchor="middle">A</text>
                      
                      {/* 补集 (red): left ray */}
                      <line x1="10" y1="45" x2="60" y2="45" stroke="#ef4444" strokeWidth="3" />
                      <polygon points="10,41 2,45 10,49" fill="#ef4444" />
                      <circle cx="60" cy="45" r="3.5" fill="white" stroke="#ef4444" strokeWidth="1.5" />
                      <text x="35" y="38" fontSize="10" fill="#ef4444" fontWeight="bold" textAnchor="middle">补集</text>
                      
                      {/* 补集 (red): right ray */}
                      <line x1="140" y1="45" x2="190" y2="45" stroke="#ef4444" strokeWidth="3" />
                      <polygon points="190,41 198,45 190,49" fill="#ef4444" />
                      <circle cx="140" cy="45" r="3.5" fill="#ef4444" />
                      <text x="165" y="38" fontSize="10" fill="#ef4444" fontWeight="bold" textAnchor="middle">补集</text>
                    </svg>
                  </div>
                </div>

                {/* 不等式集的交/并 */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-green-700 border-b border-gray-400 bg-gray-50 text-lg">不等式集的交/并（画数轴！）</div>
                  <div className="px-2 py-1 space-y-1 border-b border-gray-300">
                    <p>不等式集不能逐个找，要<strong>画数轴</strong>：</p>
                    <div className="flex gap-6">
                      <p><strong><Math tex="A \cap B" /></strong>（交集）：两条线<strong>重叠</strong>的部分</p>
                      <p><strong><Math tex="A \cup B" /></strong>（并集）：两条线<strong>合起来</strong>覆盖的部分</p>
                    </div>
                  </div>
                  {/* 例1 */}
                  <div className="px-2 py-1 border-b border-gray-300">
                    <p className="font-bold text-green-700">例1：<Math tex="A = \{x \mid x < 4\}" />，<Math tex="B = \{x \mid x \geq -1\}" /></p>
                  </div>
                  <div className="flex items-start border-b border-gray-300">
                    <div className="flex-1 px-2 py-1 space-y-0.5">
                      <p><strong><Math tex="A \cap B" /></strong> = 重叠 = <strong><Math tex="[-1, 4)" /></strong></p>
                      <p><strong><Math tex="A \cup B" /></strong> = 合起来 = <strong><Math tex="\mathbb{R}" /></strong>（整条数轴）</p>
                    </div>
                    <svg viewBox="0 0 220 80" className="w-[40%] shrink-0">
                      <line x1="10" y1="55" x2="210" y2="55" stroke="#9ca3af" strokeWidth="1.5" />
                      <polygon points="10,52 2,55 10,58" fill="#9ca3af" />
                      <polygon points="210,52 218,55 210,58" fill="#9ca3af" />
                      <line x1="70" y1="52" x2="70" y2="58" stroke="#374151" strokeWidth="1" />
                      <line x1="150" y1="52" x2="150" y2="58" stroke="#374151" strokeWidth="1" />
                      <text x="70" y="70" fontSize="9" fill="#374151" textAnchor="middle">-1</text>
                      <text x="150" y="70" fontSize="9" fill="#374151" textAnchor="middle">4</text>
                      <polyline points="10,38 150,38 150,55" fill="none" stroke="#3b82f6" strokeWidth="2" />
                      <polygon points="15,35 7,38 15,41" fill="#3b82f6" />
                      <circle cx="150" cy="55" r="3.5" fill="white" stroke="#3b82f6" strokeWidth="1.5" />
                      <text x="80" y="33" fontSize="9" fill="#3b82f6" fontWeight="bold" textAnchor="middle">A</text>
                      <polyline points="70,55 70,18 210,18" fill="none" stroke="#f59e0b" strokeWidth="2" />
                      <polygon points="205,15 213,18 205,21" fill="#f59e0b" />
                      <circle cx="70" cy="55" r="3.5" fill="#f59e0b" />
                      <text x="140" y="12" fontSize="9" fill="#f59e0b" fontWeight="bold" textAnchor="middle">B</text>
                      <rect x="70" y="51" width="80" height="8" rx="2" fill="#10b981" opacity="0.3" />
                      <line x1="70" y1="55" x2="150" y2="55" stroke="#10b981" strokeWidth="4" />
                      <circle cx="70" cy="55" r="3.5" fill="#10b981" />
                      <circle cx="150" cy="55" r="3.5" fill="white" stroke="#10b981" strokeWidth="1.5" />
                      <text x="110" y="47" fontSize="8" fill="#10b981" fontWeight="bold" textAnchor="middle">交集</text>
                    </svg>
                  </div>
                  {/* 例2 */}
                  <div className="px-2 py-1 border-b border-gray-300">
                    <p className="font-bold text-green-700">例2：<Math tex="A = (-2, 1]" />，<Math tex="B = [0, 3)" /></p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-1 px-2 py-1 space-y-0.5">
                      <p><strong><Math tex="A \cap B" /></strong> = 重叠 = <strong><Math tex="[0, 1]" /></strong></p>
                      <p><strong><Math tex="A \cup B" /></strong> = 合起来 = <strong><Math tex="(-2, 3)" /></strong></p>
                    </div>
                    <svg viewBox="0 0 220 80" className="w-[40%] shrink-0">
                      <line x1="10" y1="55" x2="210" y2="55" stroke="#9ca3af" strokeWidth="1.5" />
                      <polygon points="210,52 218,55 210,58" fill="#9ca3af" />
                      <line x1="40" y1="52" x2="40" y2="58" stroke="#374151" strokeWidth="1" />
                      <line x1="90" y1="52" x2="90" y2="58" stroke="#374151" strokeWidth="1" />
                      <line x1="120" y1="52" x2="120" y2="58" stroke="#374151" strokeWidth="1" />
                      <line x1="170" y1="52" x2="170" y2="58" stroke="#374151" strokeWidth="1" />
                      <text x="40" y="70" fontSize="9" fill="#374151" textAnchor="middle">-2</text>
                      <text x="90" y="70" fontSize="9" fill="#374151" textAnchor="middle">0</text>
                      <text x="120" y="70" fontSize="9" fill="#374151" textAnchor="middle">1</text>
                      <text x="170" y="70" fontSize="9" fill="#374151" textAnchor="middle">3</text>
                      <polyline points="40,55 40,38 120,38 120,55" fill="none" stroke="#3b82f6" strokeWidth="2" />
                      <circle cx="40" cy="55" r="3.5" fill="white" stroke="#3b82f6" strokeWidth="1.5" />
                      <circle cx="120" cy="55" r="3.5" fill="#3b82f6" />
                      <text x="80" y="33" fontSize="9" fill="#3b82f6" fontWeight="bold" textAnchor="middle">A</text>
                      <polyline points="90,55 90,18 170,18 170,55" fill="none" stroke="#f59e0b" strokeWidth="2" />
                      <circle cx="90" cy="55" r="3.5" fill="#f59e0b" />
                      <circle cx="170" cy="55" r="3.5" fill="white" stroke="#f59e0b" strokeWidth="1.5" />
                      <text x="130" y="12" fontSize="9" fill="#f59e0b" fontWeight="bold" textAnchor="middle">B</text>
                      <rect x="90" y="51" width="30" height="8" rx="2" fill="#10b981" opacity="0.3" />
                      <line x1="90" y1="55" x2="120" y2="55" stroke="#10b981" strokeWidth="4" />
                      <circle cx="90" cy="55" r="3.5" fill="#10b981" />
                      <circle cx="120" cy="55" r="3.5" fill="#10b981" />
                      <text x="105" y="47" fontSize="8" fill="#10b981" fontWeight="bold" textAnchor="middle">交集</text>
                    </svg>
                  </div>
                </div>

                {/* 混合运算 */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-purple-700 border-b border-gray-400 bg-gray-50 text-lg">补集 + 交并混合（高考最爱考！）</div>
                  <div className="px-2 py-1 space-y-1 border-b border-gray-300">
                    <p><strong>做题步骤：</strong>① 看清运算顺序：<strong>先算括号里面的</strong> ② 遇到补集：用<strong>端点规律</strong> ③ 遇到交/并：<strong>画数轴</strong></p>
                  </div>
                  {/* 例1：先补再交 */}
                  <div className="px-2 py-1 border-b border-gray-300">
                    <p className="font-bold text-purple-700">例1：<Math tex="A \cap (\complement_U B)" />（先补再交）</p>
                    <p className="text-gray-600"><Math tex="U = \mathbb{R}" />，<Math tex="A = \{x \mid x \leq 1\}" />，<Math tex="B = \{x \mid x > -1\}" /></p>
                  </div>
                  <div className="px-2 py-1 flex items-center border-b border-gray-300">
                    <div className="flex-1 space-y-0.5 pr-2">
                      <p><strong>①</strong> B: <Math tex="x > -1" />，补集：<Math tex="\complement_U B = \{x \mid x \leq -1\}" /></p>
                      <p><strong>②</strong> A ∩ 补B：重叠部分 = <strong><Math tex="(-\infty, -1]" /></strong></p>
                    </div>
                    <svg viewBox="0 -10 200 85" className="w-[38%] shrink-0">
                      <line x1="10" y1="60" x2="190" y2="60" stroke="#9ca3af" strokeWidth="1.5" />
                      <polygon points="190,57 198,60 190,63" fill="#9ca3af" />
                      <line x1="100" y1="57" x2="100" y2="63" stroke="#374151" strokeWidth="1" />
                      <line x1="160" y1="57" x2="160" y2="63" stroke="#374151" strokeWidth="1" />
                      <text x="100" y="73" fontSize="9" fill="#374151" textAnchor="middle">-1</text>
                      <text x="160" y="73" fontSize="9" fill="#374151" textAnchor="middle">1</text>
                      <polyline points="100,60 100,8 190,8" fill="none" stroke="#f59e0b" strokeWidth="2" />
                      <polygon points="185,5 193,8 185,11" fill="#f59e0b" />
                      <circle cx="100" cy="60" r="3.5" fill="white" stroke="#f59e0b" strokeWidth="1.5" />
                      <text x="145" y="3" fontSize="9" fill="#f59e0b" fontWeight="bold" textAnchor="middle">B</text>
                      <polyline points="10,25 160,25 160,60" fill="none" stroke="#3b82f6" strokeWidth="2" />
                      <polygon points="15,22 7,25 15,28" fill="#3b82f6" />
                      <circle cx="160" cy="60" r="3.5" fill="#3b82f6" />
                      <text x="145" y="19" fontSize="9" fill="#3b82f6" fontWeight="bold" textAnchor="middle">A</text>
                      <polyline points="10,42 100,42 100,60" fill="none" stroke="#ef4444" strokeWidth="2" />
                      <polygon points="15,39 7,42 15,45" fill="#ef4444" />
                      <circle cx="100" cy="60" r="3.5" fill="#ef4444" />
                      <text x="80" y="36" fontSize="9" fill="#ef4444" fontWeight="bold" textAnchor="middle">补B</text>
                      <rect x="10" y="56" width="90" height="8" rx="2" fill="#10b981" opacity="0.25" />
                      <line x1="10" y1="60" x2="100" y2="60" stroke="#10b981" strokeWidth="3" />
                      <circle cx="100" cy="60" r="3.5" fill="#10b981" />
                      <text x="50" y="52" fontSize="8" fill="#10b981" fontWeight="bold" textAnchor="middle">交集</text>
                    </svg>
                  </div>
                  {/* 例2：先交再补 */}
                  <div className="px-2 py-1 border-b border-gray-300">
                    <p className="font-bold text-purple-700">例2：<Math tex="\complement_U(A \cap B)" />（先交再补）</p>
                    <p className="text-gray-600"><Math tex="U = \mathbb{R}" />，<Math tex="A = (1, 4]" />，<Math tex="B = [2, 5)" /></p>
                  </div>
                  <div className="px-2 py-1 flex items-center border-b border-gray-300">
                    <div className="flex-1 space-y-0.5 pr-2">
                      <p><strong>①</strong> <Math tex="A \cap B" /> = [2, 4]</p>
                      <p><strong>②</strong> 补集 = <strong className="text-red-600"><Math tex="(-\infty, 2) \cup (4, +\infty)" /></strong></p>
                    </div>
                    <svg viewBox="0 0 200 80" className="w-[38%] shrink-0">
                      <line x1="10" y1="60" x2="190" y2="60" stroke="#9ca3af" strokeWidth="1.5" />
                      <polygon points="190,57 198,60 190,63" fill="#9ca3af" />
                      <line x1="40" y1="57" x2="40" y2="63" stroke="#374151" strokeWidth="1" />
                      <line x1="80" y1="57" x2="80" y2="63" stroke="#374151" strokeWidth="1" />
                      <line x1="140" y1="57" x2="140" y2="63" stroke="#374151" strokeWidth="1" />
                      <line x1="170" y1="57" x2="170" y2="63" stroke="#374151" strokeWidth="1" />
                      <text x="40" y="73" fontSize="8" fill="#374151" textAnchor="middle">1</text>
                      <text x="80" y="73" fontSize="8" fill="#374151" textAnchor="middle">2</text>
                      <text x="140" y="73" fontSize="8" fill="#374151" textAnchor="middle">4</text>
                      <text x="170" y="73" fontSize="8" fill="#374151" textAnchor="middle">5</text>
                      <polyline points="40,60 40,22 140,22 140,60" fill="none" stroke="#3b82f6" strokeWidth="2" />
                      <circle cx="40" cy="60" r="3.5" fill="white" stroke="#3b82f6" strokeWidth="1.5" />
                      <circle cx="140" cy="60" r="3.5" fill="#3b82f6" />
                      <text x="90" y="16" fontSize="9" fill="#3b82f6" fontWeight="bold" textAnchor="middle">A</text>
                      <polyline points="80,60 80,40 170,40 170,60" fill="none" stroke="#f59e0b" strokeWidth="2" />
                      <circle cx="80" cy="60" r="3.5" fill="#f59e0b" />
                      <circle cx="170" cy="60" r="3.5" fill="white" stroke="#f59e0b" strokeWidth="1.5" />
                      <text x="125" y="34" fontSize="9" fill="#f59e0b" fontWeight="bold" textAnchor="middle">B</text>
                      <rect x="80" y="56" width="60" height="8" rx="2" fill="#10b981" opacity="0.25" />
                      <line x1="80" y1="60" x2="140" y2="60" stroke="#10b981" strokeWidth="3" />
                      <circle cx="80" cy="60" r="3.5" fill="#10b981" />
                      <circle cx="140" cy="60" r="3.5" fill="#10b981" />
                      <text x="110" y="52" fontSize="8" fill="#10b981" fontWeight="bold" textAnchor="middle">交集</text>
                    </svg>
                  </div>
                  {/* 例3：有限集混合 */}
                  <div className="px-2 py-1 border-b border-gray-300">
                    <p className="font-bold text-purple-700">例3：有限集 <Math tex="(\complement_U A) \cap B" /></p>
                    <p className="text-gray-600"><Math tex="U = \{1, 2, 3, 4, 5, 6\}" />，<Math tex="A = \{1, 3, 5\}" />，<Math tex="B = \{2, 3, 4\}" /></p>
                  </div>
                  <div className="px-2 py-1">
                    <p><strong>①</strong> 补A = {'{'}2, 4, 6{'}'} <strong>②</strong> 补A ∩ B = <strong><Math tex="\{2, 4\}" /></strong></p>
                  </div>
                  <div className="px-2 py-1 border-t border-gray-300 bg-[#F5E6D3]">
                    <p className="text-[#7A5C3E]"><strong>注意：</strong>永远<strong>先看括号里面的</strong>，先交再补 ≠ 先补再交</p>
                  </div>
                </div>

                {/* 专题：交集为空 */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-orange-700 border-b border-gray-400 bg-gray-50 text-lg">专题：交集为空 <Math tex="A \cap B = \varnothing" />（高考常考！）</div>
                  <div className="px-2 py-1 space-y-1 border-b border-gray-300">
                    <p><strong>含义：</strong>A 和 B <strong>没有公共元素</strong>，在数轴上就是<strong>不重叠</strong>。</p>
                    <div className="flex gap-6">
                      <p><strong>有限集：</strong>逐个检查，没有相同元素</p>
                      <p><strong>区间：</strong>画数轴，两段不重叠（可以刚好挨着）</p>
                    </div>
                  </div>
                  {/* 例1 */}
                  <div className="px-2 py-1 border-b border-gray-300">
                    <p className="font-bold text-orange-700">例1：<Math tex="A = [1, 3]" />，<Math tex="B = (a, +\infty)" />，若 <Math tex="A \cap B = \varnothing" />，求 a</p>
                  </div>
                  <div className="flex items-center px-2 py-1 border-b border-gray-300">
                    <div className="flex-1 space-y-0.5">
                      <p>A 是 [1, 3]，B 是 a 右边的射线</p>
                      <p>要不重叠，B 必须完全在 A 右边，即 a ≥ 3</p>
                      <p>答案：<strong><Math tex="a \geq 3" /></strong></p>
                    </div>
                    <svg viewBox="0 0 200 55" className="w-[35%] shrink-0">
                      <line x1="10" y1="38" x2="190" y2="38" stroke="#9ca3af" strokeWidth="1.5" />
                      <polygon points="190,35 198,38 190,41" fill="#9ca3af" />
                      <line x1="50" y1="35" x2="50" y2="41" stroke="#374151" strokeWidth="1" />
                      <line x1="110" y1="35" x2="110" y2="41" stroke="#374151" strokeWidth="1" />
                      <text x="50" y="50" fontSize="9" fill="#374151" textAnchor="middle">1</text>
                      <text x="110" y="50" fontSize="9" fill="#374151" textAnchor="middle">3</text>
                      <line x1="50" y1="38" x2="110" y2="38" stroke="#3b82f6" strokeWidth="4" />
                      <circle cx="50" cy="38" r="3" fill="#3b82f6" />
                      <circle cx="110" cy="38" r="3" fill="#3b82f6" />
                      <text x="80" y="31" fontSize="9" fill="#3b82f6" fontWeight="bold" textAnchor="middle">A</text>
                      <line x1="110" y1="18" x2="190" y2="18" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4,2" />
                      <polygon points="185,15 193,18 185,21" fill="#f59e0b" />
                      <circle cx="110" cy="18" r="3" fill="white" stroke="#f59e0b" strokeWidth="1.5" />
                      <text x="150" y="12" fontSize="9" fill="#f59e0b" fontWeight="bold" textAnchor="middle">B（临界）</text>
                    </svg>
                  </div>
                  {/* 例2 */}
                  <div className="px-2 py-1 border-b border-gray-300">
                    <p className="font-bold text-orange-700">例2：<Math tex="A = (-\infty, 2)" />，<Math tex="B = [a, a+3]" />，若 <Math tex="A \cap B = \varnothing" />，求 a</p>
                  </div>
                  <div className="flex items-center px-2 py-1">
                    <div className="flex-1 space-y-0.5">
                      <p>A 是 2 左边（不含 2），B 是长度为 3 的闭区间</p>
                      <p>要不重叠，B 的左端点 a 至少要 ≥ 2</p>
                      <p>答案：<strong><Math tex="a \geq 2" /></strong></p>
                    </div>
                    <svg viewBox="0 0 200 55" className="w-[35%] shrink-0">
                      <line x1="10" y1="38" x2="190" y2="38" stroke="#9ca3af" strokeWidth="1.5" />
                      <polygon points="190,35 198,38 190,41" fill="#9ca3af" />
                      <line x1="80" y1="35" x2="80" y2="41" stroke="#374151" strokeWidth="1" />
                      <text x="80" y="50" fontSize="9" fill="#374151" textAnchor="middle">2</text>
                      <line x1="10" y1="38" x2="80" y2="38" stroke="#3b82f6" strokeWidth="4" />
                      <polygon points="10,35 2,38 10,41" fill="#3b82f6" />
                      <circle cx="80" cy="38" r="3" fill="white" stroke="#3b82f6" strokeWidth="1.5" />
                      <text x="45" y="31" fontSize="9" fill="#3b82f6" fontWeight="bold" textAnchor="middle">A</text>
                      <line x1="80" y1="18" x2="140" y2="18" stroke="#f59e0b" strokeWidth="3" strokeDasharray="4,2" />
                      <circle cx="80" cy="18" r="3" fill="#f59e0b" />
                      <circle cx="140" cy="18" r="3" fill="#f59e0b" />
                      <text x="110" y="12" fontSize="9" fill="#f59e0b" fontWeight="bold" textAnchor="middle">B（临界）</text>
                    </svg>
                  </div>
                </div>

                {/* 交集非空例题 */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-green-700 border-b border-gray-400 bg-gray-50">反过来：<Math tex="A \cap B \neq \varnothing" />（交集非空）</div>
                  <div className="px-2 py-1 border-b border-gray-300">
                    <p><Math tex="A = [1, 3]" />，<Math tex="B = (a, +\infty)" />，若 <Math tex="A \cap B \neq \varnothing" />，求 a</p>
                  </div>
                  <div className="px-2 py-1">
                    <p><strong>分析：</strong>要有重叠，B 的左端点必须在 A 的右端点<strong>左边</strong>，即 <Math tex="a < 3" /></p>
                    <p>临界情况：<Math tex="a = 3" /> 时，B 从 3 右边开始，和 A 刚好不碰，交集为空</p>
                    <p>答案：<strong><Math tex="a < 3" /></strong>（和交集为空的 <Math tex="a \geq 3" /> 正好<strong>相反</strong>）</p>
                  </div>
                </div>

                <PageBreak />

                {/* 专题：子集与交并的联系 */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-cyan-700 border-b border-gray-400 bg-gray-50 text-lg">专题：子集与交并的联系</div>
                  <div className="px-2 py-1 space-y-1 border-b border-gray-300">
                    <p>若 <Math tex="A \subseteq B" />（A 是 B 的子集，A 在 B 里面），则：</p>
                    <div className="flex gap-8 ml-4">
                      <p><Math tex="A \cap B = A" />（交集取小的）</p>
                      <p><Math tex="A \cup B = B" />（并集取大的）</p>
                    </div>
                    <p className="text-gray-600">理解：小碗在大碗里，两碗重叠部分就是小碗，合起来就是大碗。</p>
                  </div>
                  {/* 例题 */}
                  <div className="px-2 py-1 border-b border-gray-300">
                    <p className="font-bold text-cyan-700">例：<Math tex="A = [1, 2]" />，<Math tex="B = (-\infty, a)" />，若 <Math tex="A \cap B = A" />，求 a</p>
                  </div>
                  <div className="flex items-center px-2 py-1">
                    <div className="flex-1 space-y-0.5">
                      <p><strong>转化：</strong><Math tex="A \cap B = A" /> 说明 <Math tex="A \subseteq B" /></p>
                      <p>A 整个在 B 里面，A 的右端点 2 必须在 B 内，需要 a {'>'} 2</p>
                      <p>答案：<strong><Math tex="a > 2" /></strong></p>
                    </div>
                    <svg viewBox="0 0 200 55" className="w-[35%] shrink-0">
                      <line x1="10" y1="38" x2="190" y2="38" stroke="#9ca3af" strokeWidth="1.5" />
                      <polygon points="190,35 198,38 190,41" fill="#9ca3af" />
                      <line x1="60" y1="35" x2="60" y2="41" stroke="#374151" strokeWidth="1" />
                      <line x1="100" y1="35" x2="100" y2="41" stroke="#374151" strokeWidth="1" />
                      <text x="60" y="50" fontSize="9" fill="#374151" textAnchor="middle">1</text>
                      <text x="100" y="50" fontSize="9" fill="#374151" textAnchor="middle">2</text>
                      <line x1="60" y1="38" x2="100" y2="38" stroke="#3b82f6" strokeWidth="4" />
                      <circle cx="60" cy="38" r="3" fill="#3b82f6" />
                      <circle cx="100" cy="38" r="3" fill="#3b82f6" />
                      <text x="80" y="31" fontSize="9" fill="#3b82f6" fontWeight="bold" textAnchor="middle">A</text>
                      <line x1="10" y1="18" x2="120" y2="18" stroke="#f59e0b" strokeWidth="2" />
                      <polygon points="10,15 2,18 10,21" fill="#f59e0b" />
                      <circle cx="120" cy="18" r="3" fill="white" stroke="#f59e0b" strokeWidth="1.5" />
                      <text x="65" y="12" fontSize="9" fill="#f59e0b" fontWeight="bold" textAnchor="middle">B（a在2右边）</text>
                    </svg>
                  </div>
                  <div className="px-2 py-1 border-t border-gray-300 bg-cyan-50">
                    <p className="text-cyan-700"><strong>技巧：</strong>看到 <Math tex="A \cap B = A" /> 或 <Math tex="A \cup B = B" />，立刻转化为 <Math tex="A \subseteq B" /></p>
                  </div>
                </div>

                {/* ==================== 容斥原理 ==================== */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-teal-700 border-b border-gray-400 bg-gray-50 text-lg">容斥原理 — 解决"重复计数"问题</div>
                  <div className="px-2 py-1 flex items-center gap-3 border-b border-gray-300">
                    <div className="flex-1 space-y-0.5">
                      <p>两个集合有重叠时，直接加会多算重叠部分，所以要减掉一次：</p>
                      <p><Math tex="|A \cup B| = |A| + |B| - |A \cap B|" /></p>
                    </div>
                    <svg viewBox="0 0 180 100" className="w-32 shrink-0">
                      <rect x="3" y="3" width="174" height="94" rx="6" fill="#f9fafb" stroke="#d1d5db" strokeWidth="1" />
                      <circle cx="68" cy="50" r="32" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" strokeWidth="1.2" />
                      <circle cx="112" cy="50" r="32" fill="rgba(234,179,8,0.15)" stroke="#eab308" strokeWidth="1.2" />
                      <text x="50" y="54" fontSize="10" fontWeight="bold" fill="#2563eb" textAnchor="middle">只A</text>
                      <text x="90" y="50" fontSize="9" fontWeight="bold" fill="#7c3aed" textAnchor="middle">A∩B</text>
                      <text x="130" y="54" fontSize="10" fontWeight="bold" fill="#ca8a04" textAnchor="middle">只B</text>
                    </svg>
                  </div>
                  <div className="grid grid-cols-2 text-sm border-b border-gray-300">
                    <div className="border-r border-gray-300 px-2 py-1"><strong>只A</strong> = |A| - |A∩B|</div>
                    <div className="px-2 py-1"><strong>只B</strong> = |B| - |A∩B|</div>
                    <div className="border-r border-t border-gray-300 px-2 py-1"><strong>至少一个</strong> = |A|+|B|-|A∩B|</div>
                    <div className="border-t border-gray-300 px-2 py-1"><strong>都没有</strong> = 总数 - |A∪B|</div>
                  </div>
                  {/* 例1 */}
                  <div className="px-2 py-1 border-b border-gray-300">
                    <p className="font-bold text-teal-700">例1：全班 50 人，数学组 30 人，物理组 25 人，两个都参加 15 人</p>
                  </div>
                  <div className="px-2 py-1 space-y-0.5 border-b border-gray-300">
                    <p>至少参加一个：<Math tex="|A \cup B| = 30 + 25 - 15 = 40" /> 人</p>
                    <p>两个都没参加：50 - 40 = <strong>10 人</strong></p>
                  </div>
                  {/* 例2 */}
                  <div className="px-2 py-1 border-b border-gray-300">
                    <p className="font-bold text-teal-700">例2：某校 200 人，语文及格 160 人，数学及格 140 人，两科都及格 120 人</p>
                  </div>
                  <div className="px-2 py-1 space-y-0.5">
                    <p>至少一科及格：<Math tex="160 + 140 - 120 = 180" /> 人，两科都不及格：200 - 180 = <strong className="text-red-600">20 人</strong></p>
                    <p>只语文及格：160 - 120 = <strong>40 人</strong>，只数学及格：140 - 120 = <strong>20 人</strong></p>
                  </div>
                </div>

                {/* ==================== 运算法则速查 ==================== */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold border-b border-gray-400 bg-gray-50">运算法则速查</div>
                  <table className="w-full border-collapse text-center">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border-b border-r border-gray-300 px-2 py-1 text-blue-700">交集 ∩</th>
                        <th className="border-b border-r border-gray-300 px-2 py-1 text-green-700">并集 ∪</th>
                        <th className="border-b border-gray-300 px-2 py-1">理解</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border-b border-r border-gray-300 px-2 py-1"><Math tex="A \cap A = A" /></td>
                        <td className="border-b border-r border-gray-300 px-2 py-1"><Math tex="A \cup A = A" /></td>
                        <td className="border-b border-gray-300 px-2 py-1">自己和自己</td>
                      </tr>
                      <tr>
                        <td className="border-b border-r border-gray-300 px-2 py-1"><Math tex="A \cap \varnothing = \varnothing" /></td>
                        <td className="border-b border-r border-gray-300 px-2 py-1"><Math tex="A \cup \varnothing = A" /></td>
                        <td className="border-b border-gray-300 px-2 py-1">和空集</td>
                      </tr>
                      <tr>
                        <td className="border-b border-r border-gray-300 px-2 py-1"><Math tex="A \cap U = A" /></td>
                        <td className="border-b border-r border-gray-300 px-2 py-1"><Math tex="A \cup U = U" /></td>
                        <td className="border-b border-gray-300 px-2 py-1">和全集</td>
                      </tr>
                      <tr>
                        <td className="border-r border-gray-300 px-2 py-1" colSpan={2}><Math tex="A \cap (\complement_U A) = \varnothing" />，<Math tex="A \cup (\complement_U A) = U" /></td>
                        <td className="px-2 py-1">互补</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="px-2 py-1 border-t border-gray-300 bg-[#F5E6D3]">
                    <p className="text-[#7A5C3E]"><strong>快速判断：</strong>若 <Math tex="A \subseteq B" />，则 <Math tex="A \cap B = A" />，<Math tex="A \cup B = B" />（小的在大的里面）</p>
                  </div>
                </div>

                {/* ==================== 德摩根定律 ==================== */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold border-b border-gray-400 bg-gray-50">📎 拓展：德摩根定律（了解即可）</div>
                  <div className="px-2 py-1 space-y-0.5">
                    <p><Math tex="\complement_U(A \cup B) = (\complement_U A) \cap (\complement_U B)" /> — 并的补 = 补的交</p>
                    <p><Math tex="\complement_U(A \cap B) = (\complement_U A) \cup (\complement_U B)" /> — 交的补 = 补的并</p>
                    <p className="text-gray-500 text-sm">记法：补号穿进括号，∩ 和 ∪ 互换。高考直接用常规方法就够。</p>
                  </div>
                </div>

                <PageBreak />

                {/* ===== 大题1：有限集（3个小问覆盖3种题型）===== */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-50">大题1（有限集）：一道题变三种考法</div>
                  <div className="px-2 py-1 border-b border-gray-300">
                    <p>已知 <Math tex="A = \{x \mid x^2 - 5x + 6 = 0\}" />，<Math tex="B = \{x \mid ax - 2 = 0\}" /></p>
                  </div>
                  <div className="px-2 py-1 space-y-1">
                    {/* 小问(1) */}
                    <div className="space-y-0.5">
                      <p className="font-bold">(1) 当 a = 1 时，判断 A 与 B 的关系</p>
                      <p><strong>第一步：解方程，把集合写成具体元素</strong></p>
                      <p className="ml-5">A：<Math tex="x^2 - 5x + 6 = 0" />，分解因式 <Math tex="(x-2)(x-3) = 0" /></p>
                      <p className="ml-5">解得 x = 2 或 x = 3，所以 <strong>A = &#123;2, 3&#125;</strong></p>
                      <p className="ml-5">B：a = 1 代入，<Math tex="1 \cdot x - 2 = 0" />，解得 x = 2，所以 <strong>B = &#123;2&#125;</strong></p>
                      <p><strong>第二步：逐个检查元素</strong></p>
                      <p className="ml-5">B 只有一个元素 2，2 在 A 里吗？在 ✓</p>
                      <p className="ml-5">所以 B 的<strong>每个元素都在 A 里</strong>，即 B ⊆ A</p>
                      <p className="ml-5">又因为 A 有 3 而 B 没有，所以 B ≠ A，因此 <strong>B 是 A 的真子集</strong></p>
                    </div>
                    {/* 小问(2) */}
                    <div className="border-t border-gray-200 pt-1 space-y-0.5">
                      <p className="font-bold">(2) 若 B ⊆ A，求 a 的所有可能值</p>
                      <p>题意：B 里的元素必须<strong>全部在 A = &#123;2, 3&#125; 里面</strong></p>
                      <p className="mt-1"><strong>分类讨论：B 的方程是 ax - 2 = 0，按 a 是否为 0 分两种情况</strong></p>
                      {/* 分支图：SVG连线 + foreignObject放Math */}
                      <svg viewBox="0 0 500 155" style={{ overflow: 'visible' }} className="w-full" xmlns="http://www.w3.org/2000/svg">
                        {/* 连线 */}
                        <line x1="250" y1="24" x2="120" y2="38" stroke="#9ca3af" strokeWidth="1.5" />
                        <line x1="250" y1="24" x2="380" y2="38" stroke="#9ca3af" strokeWidth="1.5" />
                        <line x1="380" y1="80" x2="320" y2="105" stroke="#9ca3af" strokeWidth="1.5" />
                        <line x1="380" y1="80" x2="440" y2="105" stroke="#9ca3af" strokeWidth="1.5" />
                        <line x1="120" y1="82" x2="120" y2="105" stroke="#9ca3af" strokeWidth="1.5" />
                        {/* 根节点 */}
                        <rect x="140" y="2" width="220" height="22" rx="4" fill="#f3f4f6" stroke="#6b7280" strokeWidth="1" />
                        <foreignObject x="140" y="2" width="220" height="22">
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '22px', fontSize: '11px', fontWeight: 'bold', color: '#374151' }}>B ⊆ A，方程 <Math tex="ax-2=0" /></div>
                        </foreignObject>
                        {/* 左：a=0 */}
                        <rect x="40" y="38" width="160" height="52" rx="4" fill="#fef2f2" stroke="#dc2626" strokeWidth="1" />
                        <foreignObject x="40" y="38" width="160" height="52">
                          <div style={{ textAlign: 'center', fontSize: '10px', padding: '4px' }}>
                            <div style={{ fontWeight: 'bold', color: '#dc2626', fontSize: '12px' }}>a = 0</div>
                            <div style={{ color: '#374151' }}>方程变成 -2=0，矛盾，无解</div>
                            <div style={{ color: '#374151' }}>B = ∅，∅ ⊆ A 自动成立</div>
                          </div>
                        </foreignObject>
                        {/* 左结论 */}
                        <rect x="50" y="105" width="140" height="22" rx="4" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
                        <foreignObject x="50" y="105" width="140" height="22">
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '22px', fontSize: '12px', fontWeight: 'bold', color: '#16a34a' }}>✓ a = 0 保留</div>
                        </foreignObject>
                        {/* 右：a≠0 */}
                        <rect x="280" y="38" width="200" height="42" rx="4" fill="#eff6ff" stroke="#2563eb" strokeWidth="1" />
                        <foreignObject x="280" y="38" width="200" height="42">
                          <div style={{ textAlign: 'center', fontSize: '10px', padding: '2px 4px' }}>
                            <div style={{ fontWeight: 'bold', color: '#2563eb', fontSize: '12px' }}>a ≠ 0</div>
                            <div style={{ color: '#374151', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2px' }}>B = &#123;<Math tex="\frac{2}{a}" />&#125;，必须在 A = &#123;2,3&#125; 里</div>
                          </div>
                        </foreignObject>
                        {/* 右下左 */}
                        <rect x="255" y="105" width="130" height="24" rx="4" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
                        <foreignObject x="255" y="105" width="130" height="24">
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '24px', fontSize: '11px', fontWeight: 'bold', color: '#16a34a', gap: '2px' }}><Math tex="\frac{2}{a}=2" />，✓ a=1</div>
                        </foreignObject>
                        {/* 右下右 */}
                        <rect x="395" y="105" width="100" height="24" rx="4" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
                        <foreignObject x="395" y="105" width="100" height="24">
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '24px', fontSize: '11px', fontWeight: 'bold', color: '#16a34a', gap: '2px' }}><Math tex="\frac{2}{a}=3" />，✓ <Math tex="a=\frac{2}{3}" /></div>
                        </foreignObject>
                      </svg>
                      <p><strong>合并所有绿色框：</strong><Math tex="a \in \{0,\; \frac{2}{3},\; 1\}" /></p>
                      <p className="text-red-600 text-sm">易错点：很多人忘了左边那条路（a = 0），直接丢掉一个答案！</p>
                    </div>
                    {/* 小问(3) */}
                    <div className="border-t border-gray-200 pt-1 space-y-0.5">
                      <p className="font-bold">(3) 若 <Math tex="A \cap B = \varnothing" />，求 a 的所有可能值</p>
                      <p>题意：A 和 B <strong>没有任何公共元素</strong>（交集为空）</p>
                      <p className="mt-1"><strong>分类讨论：和 (2) 一样分两种情况，但判断标准相反</strong></p>
                      {/* 分支图：SVG连线 + foreignObject放Math */}
                      <svg viewBox="0 0 500 135" style={{ overflow: 'visible' }} className="w-full" xmlns="http://www.w3.org/2000/svg">
                        {/* 连线 */}
                        <line x1="250" y1="24" x2="120" y2="38" stroke="#9ca3af" strokeWidth="1.5" />
                        <line x1="250" y1="24" x2="380" y2="38" stroke="#9ca3af" strokeWidth="1.5" />
                        <line x1="380" y1="76" x2="320" y2="105" stroke="#9ca3af" strokeWidth="1.5" />
                        <line x1="380" y1="76" x2="440" y2="105" stroke="#9ca3af" strokeWidth="1.5" />
                        <line x1="120" y1="74" x2="120" y2="105" stroke="#9ca3af" strokeWidth="1.5" />
                        {/* 根节点 */}
                        <rect x="130" y="2" width="240" height="22" rx="4" fill="#f3f4f6" stroke="#6b7280" strokeWidth="1" />
                        <foreignObject x="130" y="2" width="240" height="22">
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '22px', fontSize: '11px', fontWeight: 'bold', color: '#374151', gap: '2px' }}><Math tex="A \cap B = \varnothing" />，方程 <Math tex="ax-2=0" /></div>
                        </foreignObject>
                        {/* 左：a=0 */}
                        <rect x="40" y="38" width="160" height="36" rx="4" fill="#fef2f2" stroke="#dc2626" strokeWidth="1" />
                        <foreignObject x="40" y="38" width="160" height="36">
                          <div style={{ textAlign: 'center', fontSize: '10px', padding: '2px 4px' }}>
                            <div style={{ fontWeight: 'bold', color: '#dc2626', fontSize: '12px' }}>a = 0</div>
                            <div style={{ color: '#374151', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2px' }}>B = ∅，<Math tex="A \cap \varnothing = \varnothing" /> ✓</div>
                          </div>
                        </foreignObject>
                        {/* 左结论 */}
                        <rect x="50" y="105" width="140" height="22" rx="4" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
                        <foreignObject x="50" y="105" width="140" height="22">
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '22px', fontSize: '12px', fontWeight: 'bold', color: '#16a34a' }}>✓ a = 0 保留</div>
                        </foreignObject>
                        {/* 右：a≠0 */}
                        <rect x="280" y="38" width="200" height="38" rx="4" fill="#eff6ff" stroke="#2563eb" strokeWidth="1" />
                        <foreignObject x="280" y="38" width="200" height="38">
                          <div style={{ textAlign: 'center', fontSize: '10px', padding: '2px 4px' }}>
                            <div style={{ fontWeight: 'bold', color: '#2563eb', fontSize: '12px' }}>a ≠ 0</div>
                            <div style={{ color: '#374151', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2px' }}>B = &#123;<Math tex="\frac{2}{a}" />&#125;，<strong>不能在</strong> A = &#123;2,3&#125; 里</div>
                          </div>
                        </foreignObject>
                        {/* 右下左 */}
                        <rect x="255" y="105" width="130" height="24" rx="4" fill="#fef2f2" stroke="#dc2626" strokeWidth="1.5" />
                        <foreignObject x="255" y="105" width="130" height="24">
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '24px', fontSize: '11px', fontWeight: 'bold', color: '#dc2626', gap: '2px' }}><Math tex="\frac{2}{a}=2" /> 即 a=1 ✗</div>
                        </foreignObject>
                        {/* 右下右 */}
                        <rect x="395" y="105" width="100" height="24" rx="4" fill="#fef2f2" stroke="#dc2626" strokeWidth="1.5" />
                        <foreignObject x="395" y="105" width="100" height="24">
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '24px', fontSize: '11px', fontWeight: 'bold', color: '#dc2626', gap: '2px' }}><Math tex="\frac{2}{a}=3" /> 即 <Math tex="a=\frac{2}{3}" /> ✗</div>
                        </foreignObject>
                      </svg>
                      <p><strong>合并：</strong>排除红色框的 a = 1 和 <Math tex="a = \frac{2}{3}" />，其余全部保留</p>
                      <p className="ml-5">答案：<strong><Math tex="a \in \mathbb{R}" /> 且 <Math tex="a \neq 1" /> 且 <Math tex="a \neq \frac{2}{3}" /></strong></p>
                    </div>
                    {/* 对比总结 */}
                    <div className="border-t border-gray-200 pt-1">
                      <p className="text-gray-500 text-sm"><strong>对比 (2) 和 (3)：</strong>(2) 要 B 的元素在 A 里，得 a ∈ &#123;0, 2/3, 1&#125;；(3) 要 B 的元素不在 A 里，除了 2/3 和 1 都行。正好互补！</p>
                    </div>
                  </div>
                </div>

                <PageBreak />

                {/* ===== 大题2：区间集（3个小问揭示本质相同）===== */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-green-700 border-b border-gray-400 bg-gray-50">大题2（区间集）：三种问法，同一个答案！</div>
                  <div className="px-2 py-1 border-b border-gray-300">
                    <p>已知 <Math tex="A = \{x \mid 1 \leq x \leq a\}" />，<Math tex="B = \{x \mid 0 < x \leq 5\}" /></p>
                  </div>
                  <div className="px-2 py-1 space-y-1">
                    {/* 小问(1) */}
                    <div className="space-y-0.5">
                      <p className="font-bold">(1) 若 A ⊆ B，求 a 的范围</p>
                      <p>题意：A ⊆ B，就是 A 里的<strong>每一个数都必须在 B 里面</strong>，A 要被 B 完全"装下"</p>
                      <p><strong>第一步：把集合写成区间形式</strong></p>
                      <p className="ml-5">A：1 ≤ x ≤ a，写成区间就是 <strong>A = [1, a]</strong>（从 1 到 a，两端都含）</p>
                      <p className="ml-5">B：0 {'<'} x ≤ 5，写成区间就是 <strong>B = (0, 5]</strong>（从 0 到 5，不含 0，含 5）</p>
                      <p><strong>第二步：画数轴</strong></p>
                      <svg viewBox="0 0 340 60" className="w-full">
                        <line x1="20" y1="20" x2="320" y2="20" stroke="#d1d5db" strokeWidth="1" />
                        <line x1="20" y1="42" x2="320" y2="42" stroke="#d1d5db" strokeWidth="1" />
                        <line x1="70" y1="20" x2="270" y2="20" stroke="#16a34a" strokeWidth="3" />
                        <circle cx="70" cy="20" r="3.5" fill="white" stroke="#16a34a" strokeWidth="1.5" />
                        <circle cx="270" cy="20" r="3.5" fill="#16a34a" />
                        <text x="70" y="14" fontSize="10" fill="#374151" textAnchor="middle">0</text>
                        <text x="270" y="14" fontSize="10" fill="#374151" textAnchor="middle">5</text>
                        <text x="170" y="10" fontSize="10" fill="#16a34a" fontWeight="bold" textAnchor="middle">B: (0, 5]</text>
                        <line x1="110" y1="42" x2="210" y2="42" stroke="#2563eb" strokeWidth="3" />
                        <circle cx="110" cy="42" r="3.5" fill="#2563eb" />
                        <circle cx="210" cy="42" r="3.5" fill="#2563eb" />
                        <text x="110" y="55" fontSize="10" fill="#374151" textAnchor="middle">1</text>
                        <text x="210" y="55" fontSize="10" fill="#374151" textAnchor="middle">a</text>
                        <text x="160" y="37" fontSize="10" fill="#2563eb" fontWeight="bold" textAnchor="middle">A: [1, a]</text>
                      </svg>
                      <p><strong>第三步：看图分析</strong>（A ⊆ B 意思是蓝色线段要<strong>完全被绿色线段盖住</strong>）</p>
                      <svg viewBox="0 0 500 150" style={{ overflow: 'visible' }} className="w-full" xmlns="http://www.w3.org/2000/svg">
                        {/* 根节点 */}
                        <rect x="115" y="2" width="270" height="22" rx="4" fill="#f3f4f6" stroke="#6b7280" strokeWidth="1" />
                        <foreignObject x="115" y="2" width="270" height="22">
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '22px', fontSize: '11px', fontWeight: 'bold', color: '#374151' }}>A ⊆ B：蓝色 [1, a] 要被绿色 (0, 5] 盖住</div>
                        </foreignObject>
                        {/* 三条分支线 */}
                        <line x1="200" y1="24" x2="80" y2="40" stroke="#9ca3af" strokeWidth="1.5" />
                        <line x1="250" y1="24" x2="250" y2="40" stroke="#9ca3af" strokeWidth="1.5" />
                        <line x1="300" y1="24" x2="420" y2="40" stroke="#9ca3af" strokeWidth="1.5" />
                        {/* 左：A要有意义 */}
                        <rect x="5" y="40" width="150" height="46" rx="4" fill="#fef2f2" stroke="#dc2626" strokeWidth="1" />
                        <foreignObject x="5" y="40" width="150" height="46">
                          <div style={{ textAlign: 'center', fontSize: '10px', padding: '2px 4px' }}>
                            <div style={{ fontWeight: 'bold', color: '#dc2626', fontSize: '11px' }}>A 不能是空集</div>
                            <div style={{ color: '#374151' }}>如 a=0.5 时 A=[1, 0.5]</div>
                            <div style={{ color: '#374151' }}>找不到 x≥1 且 x≤0.5 的数</div>
                          </div>
                        </foreignObject>
                        <line x1="80" y1="86" x2="80" y2="100" stroke="#9ca3af" strokeWidth="1.5" />
                        <rect x="15" y="100" width="130" height="20" rx="4" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
                        <foreignObject x="15" y="100" width="130" height="20">
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '20px', fontSize: '11px', fontWeight: 'bold', color: '#16a34a' }}>所以 a ≥ 1</div>
                        </foreignObject>
                        {/* 中：看左端 */}
                        <rect x="170" y="40" width="160" height="38" rx="4" fill="#eff6ff" stroke="#2563eb" strokeWidth="1" />
                        <foreignObject x="170" y="40" width="160" height="38">
                          <div style={{ textAlign: 'center', fontSize: '10px', padding: '2px 4px' }}>
                            <div style={{ fontWeight: 'bold', color: '#2563eb', fontSize: '11px' }}>看蓝色左端：1</div>
                            <div style={{ color: '#374151' }}>B 从 0 开始，1 在 (0,5] 内</div>
                          </div>
                        </foreignObject>
                        <line x1="250" y1="78" x2="250" y2="100" stroke="#9ca3af" strokeWidth="1.5" />
                        <rect x="195" y="100" width="110" height="20" rx="4" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
                        <foreignObject x="195" y="100" width="110" height="20">
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '20px', fontSize: '11px', fontWeight: 'bold', color: '#16a34a' }}>没问题 ✓</div>
                        </foreignObject>
                        {/* 右：看右端 */}
                        <rect x="345" y="40" width="150" height="38" rx="4" fill="#eff6ff" stroke="#2563eb" strokeWidth="1" />
                        <foreignObject x="345" y="40" width="150" height="38">
                          <div style={{ textAlign: 'center', fontSize: '10px', padding: '2px 4px' }}>
                            <div style={{ fontWeight: 'bold', color: '#2563eb', fontSize: '11px' }}>看蓝色右端：a</div>
                            <div style={{ color: '#374151' }}>B 到 5 结束，要盖住需 a≤5</div>
                          </div>
                        </foreignObject>
                        <line x1="420" y1="78" x2="420" y2="100" stroke="#9ca3af" strokeWidth="1.5" />
                        <rect x="355" y="100" width="130" height="20" rx="4" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
                        <foreignObject x="355" y="100" width="130" height="20">
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '20px', fontSize: '11px', fontWeight: 'bold', color: '#16a34a' }}>所以 a ≤ 5</div>
                        </foreignObject>
                        {/* 合并结论 */}
                        <rect x="150" y="128" width="200" height="20" rx="4" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.5" />
                        <foreignObject x="150" y="128" width="200" height="20">
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '20px', fontSize: '12px', fontWeight: 'bold', color: '#854d0e' }}>合并三个绿色框：<Math tex="1 \leq a \leq 5" /></div>
                        </foreignObject>
                        {/* 三条汇聚线到合并框 */}
                        <line x1="80" y1="120" x2="200" y2="128" stroke="#ca8a04" strokeWidth="1" strokeDasharray="3" />
                        <line x1="250" y1="120" x2="250" y2="128" stroke="#ca8a04" strokeWidth="1" strokeDasharray="3" />
                        <line x1="420" y1="120" x2="300" y2="128" stroke="#ca8a04" strokeWidth="1" strokeDasharray="3" />
                      </svg>
                    </div>
                    {/* 小问(2) */}
                    <div className="border-t border-gray-200 pt-1 space-y-0.5">
                      <p className="font-bold">(2) 若 <Math tex="A \cap B = A" />，求 a 的范围</p>
                      <p><strong>先翻译条件：</strong><Math tex="A \cap B = A" /> 是什么意思？</p>
                      <p className="ml-5"><Math tex="A \cap B" /> 就是"A 和 B 的公共部分"</p>
                      <p className="ml-5"><Math tex="A \cap B = A" /> 就是说：A 和 B 的公共部分 = A 本身</p>
                      <p className="ml-5">也就是说 A 的<strong>所有元素都在公共部分里</strong>，即 A 的所有元素都在 B 里</p>
                      <p className="ml-5">这不就是 <strong>A ⊆ B</strong> 吗！</p>
                      <p>和第 (1) 问完全一样！答案：<strong><Math tex="1 \leq a \leq 5" /></strong></p>
                    </div>
                    {/* 小问(3) */}
                    <div className="border-t border-gray-200 pt-1 space-y-0.5">
                      <p className="font-bold">(3) 若 <Math tex="A \cup B = B" />，求 a 的范围</p>
                      <p><strong>先翻译条件：</strong><Math tex="A \cup B = B" /> 是什么意思？</p>
                      <p className="ml-5"><Math tex="A \cup B" /> 就是"把 A 和 B 合并在一起"</p>
                      <p className="ml-5"><Math tex="A \cup B = B" /> 就是说：合并之后还是 B，没变大</p>
                      <p className="ml-5">说明 A 没有给 B 带来<strong>任何新的元素</strong></p>
                      <p className="ml-5">A 的元素<strong>本来就全在 B 里</strong>，还是 <strong>A ⊆ B</strong>！</p>
                      <p>和第 (1) 问完全一样！答案：<strong><Math tex="1 \leq a \leq 5" /></strong></p>
                    </div>
                  </div>
                  <div className="px-2 py-1 border-t border-gray-300 bg-[#F5E6D3]">
                    <p className="text-[#7A5C3E]"><strong>三种写法，一个意思：</strong><Math tex="A \subseteq B \;\Leftrightarrow\; A \cap B = A \;\Leftrightarrow\; A \cup B = B" /></p>
                    <p className="text-[#7A5C3E]">高考看到这三个条件中的任何一个，第一反应：<strong>这就是 A ⊆ B</strong>，然后画数轴！</p>
                  </div>
                </div>

              </div>
            </Collapsible>
          </section>

          {/* Section 7: 解题核心技巧 */}
          <section className="mb-0">
            <Collapsible title="七、解题技巧速查" defaultOpen storageKey="sets:techniques" headerExtra={<SpeakButton text={setsNarrations.techniques} />}>
              <div className="space-y-2 text-lg text-gray-800">

                {/* 五大核心技巧表格 */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-50 text-lg">高考集合五大核心技巧</div>
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border-b border-r border-gray-300 px-2 py-1.5 text-left w-28">技巧</th>
                        <th className="border-b border-r border-gray-300 px-2 py-1.5 text-left">适用场景</th>
                        <th className="border-b border-gray-300 px-2 py-1.5 text-left">操作要点</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border-b border-r border-gray-300 px-2 py-1.5 font-bold text-blue-700">① 数轴法</td>
                        <td className="border-b border-r border-gray-300 px-2 py-1.5">区间集合的交、并、补</td>
                        <td className="border-b border-gray-300 px-2 py-1.5">画数轴，标端点，看重叠/合并/剩余</td>
                      </tr>
                      <tr>
                        <td className="border-b border-r border-gray-300 px-2 py-1.5 font-bold text-green-700">② 先解方程</td>
                        <td className="border-b border-r border-gray-300 px-2 py-1.5"><Math tex="\{x \mid f(x)=0\}" /> 型</td>
                        <td className="border-b border-gray-300 px-2 py-1.5">解出具体元素，化成列举法</td>
                      </tr>
                      <tr>
                        <td className="border-b border-r border-gray-300 px-2 py-1.5 font-bold text-orange-700">③ 空集讨论</td>
                        <td className="border-b border-r border-gray-300 px-2 py-1.5">含参数的 A⊆B 问题</td>
                        <td className="border-b border-gray-300 px-2 py-1.5">先讨论 A=∅，再讨论 A≠∅</td>
                      </tr>
                      <tr>
                        <td className="border-b border-r border-gray-300 px-2 py-1.5 font-bold text-purple-700">④ 等价转换</td>
                        <td className="border-b border-r border-gray-300 px-2 py-1.5">A∩B=A 或 A∪B=B</td>
                        <td className="border-b border-gray-300 px-2 py-1.5">立刻转化为 A⊆B，再画数轴</td>
                      </tr>
                      <tr>
                        <td className="border-r border-gray-300 px-2 py-1.5 font-bold text-red-700">⑤ 端点规则</td>
                        <td className="border-r border-gray-300 px-2 py-1.5">补集、交并集端点判断</td>
                        <td className="px-2 py-1.5">补集开闭互换；交集取严，并集取松</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* 等价转换公式 */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-purple-700 border-b border-gray-400 bg-gray-50">等价转换公式（必记！）</div>
                  <div className="px-2 py-1.5 flex flex-wrap gap-x-6 gap-y-1">
                    <p><Math tex="A \cap B = A \;\Leftrightarrow\; A \subseteq B" /></p>
                    <p><Math tex="A \cup B = B \;\Leftrightarrow\; A \subseteq B" /></p>
                    <p><Math tex="A \cap B = \varnothing \;\Leftrightarrow" /> A、B 不重叠</p>
                  </div>
                </div>

                {/* 常见丢分点 */}
                <div className="border border-red-300 rounded overflow-hidden bg-red-50">
                  <div className="px-2 py-1 font-bold text-red-700 border-b border-red-300 bg-red-100">高考常见丢分点</div>
                  <div className="px-2 py-1.5 grid grid-cols-2 gap-x-4 gap-y-1 text-red-700">
                    <p><strong>①</strong> 忘讨论空集（A=∅ 也满足 A⊆B）</p>
                    <p><strong>②</strong> 忘检查互异性（集合元素不能重复）</p>
                    <p><strong>③</strong> 端点开闭搞反（补集要反转！）</p>
                    <p><strong>④</strong> 没看清全集（补集必须有 U）</p>
                  </div>
                </div>

              </div>
            </Collapsible>
          </section>

          {/* Section 8: 知识速查表 */}
          <section className="mb-0">
            <h2 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span className="w-8 h-8 rounded bg-purple-500 text-white flex items-center justify-center text-sm font-bold">
                8
              </span>
              集合知识速查表
              <SpeakButton text={setsNarrations.summary} />
            </h2>
            <div className="space-y-2">
              {/* 核心公式表 */}
              <div className="border border-gray-400 rounded overflow-hidden">
                <div className="px-2 py-1 font-bold text-purple-700 border-b border-gray-400 bg-gray-50 text-lg">核心公式速查</div>
                <table className="w-full border-collapse">
                  <tbody>
                    <tr>
                      <td className="border-b border-r border-gray-300 px-2 py-1.5 font-bold text-blue-700 w-24">交集</td>
                      <td className="border-b border-r border-gray-300 px-2 py-1.5"><Math tex="A \cap B" /> = 两边都有</td>
                      <td className="border-b border-gray-300 px-2 py-1.5">数轴：看<strong>重叠</strong>部分</td>
                    </tr>
                    <tr>
                      <td className="border-b border-r border-gray-300 px-2 py-1.5 font-bold text-green-700">并集</td>
                      <td className="border-b border-r border-gray-300 px-2 py-1.5"><Math tex="A \cup B" /> = 合起来</td>
                      <td className="border-b border-gray-300 px-2 py-1.5">数轴：<strong>合并</strong>全部覆盖</td>
                    </tr>
                    <tr>
                      <td className="border-b border-r border-gray-300 px-2 py-1.5 font-bold text-red-700">补集</td>
                      <td className="border-b border-r border-gray-300 px-2 py-1.5"><Math tex="\complement_U A" /> = U 去掉 A</td>
                      <td className="border-b border-gray-300 px-2 py-1.5">端点：<strong>开闭互换</strong></td>
                    </tr>
                    <tr>
                      <td className="border-b border-r border-gray-300 px-2 py-1.5 font-bold text-purple-700">子集</td>
                      <td className="border-b border-r border-gray-300 px-2 py-1.5"><Math tex="A \subseteq B" /> = A 在 B 里面</td>
                      <td className="border-b border-gray-300 px-2 py-1.5">端点：A 的端点<strong>不能超出</strong> B</td>
                    </tr>
                    <tr>
                      <td className="border-r border-gray-300 px-2 py-1.5 font-bold text-orange-700">容斥</td>
                      <td className="border-r border-gray-300 px-2 py-1.5"><Math tex="|A \cup B| = |A| + |B| - |A \cap B|" /></td>
                      <td className="px-2 py-1.5">重叠部分只算一次</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 等价转换 + 子集公式 */}
              <div className="grid grid-cols-2 gap-2">
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-cyan-700 border-b border-gray-400 bg-gray-50">等价转换（三句话同义）</div>
                  <div className="px-2 py-1.5 space-y-1">
                    <p><Math tex="A \subseteq B" /></p>
                    <p><Math tex="A \cap B = A" /></p>
                    <p><Math tex="A \cup B = B" /></p>
                  </div>
                </div>
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-teal-700 border-b border-gray-400 bg-gray-50">子集个数公式（n 个元素）</div>
                  <div className="px-2 py-1.5 space-y-1">
                    <p>子集：<Math tex="2^n" />　真子集：<Math tex="2^n - 1" /></p>
                    <p>非空子集：<Math tex="2^n - 1" />　非空真子集：<Math tex="2^n - 2" /></p>
                  </div>
                </div>
              </div>

              {/* 数集 + 区间 */}
              <div className="grid grid-cols-2 gap-2">
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-50">常见数集包含关系</div>
                  <div className="px-2 py-1.5">
                    <p><Math tex="\mathbb{N}^* \subset \mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}" /></p>
                    <p className="text-gray-600 mt-1">正整数 ⊂ 自然数 ⊂ 整数 ⊂ 有理数 ⊂ 实数</p>
                  </div>
                </div>
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-green-700 border-b border-gray-400 bg-gray-50">区间端点符号</div>
                  <div className="px-2 py-1.5">
                    <p><strong>[ ]</strong> 含端点（实心）　<strong>( )</strong> 不含端点（空心）</p>
                    <p className="text-orange-600 mt-1"><strong>∞ 永远用 ( )</strong>，因为无穷大取不到</p>
                  </div>
                </div>
              </div>

              {/* 空集铁律 */}
              <div className="border border-orange-300 rounded overflow-hidden bg-orange-50">
                <div className="px-2 py-1 font-bold text-orange-700 border-b border-orange-300 bg-orange-100">空集铁律（必记！）</div>
                <div className="px-2 py-1.5 flex gap-6 text-orange-700">
                  <p><Math tex="\varnothing \subseteq A" />（空集是任何集合的子集）</p>
                  <p><Math tex="\varnothing \neq \{0\}" />（空集 ≠ 含0的集合）</p>
                </div>
              </div>
            </div>
          </section>

          <PageBreak />

          {/* Section 9: Quiz */}
          <section id="sets-quiz" className="mb-0 scroll-mt-4">
            <h2 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span className="w-8 h-8 rounded bg-green-500 text-white flex items-center justify-center text-sm font-bold">
                9
              </span>
              高考真题实战
            </h2>
            <QuizPanel module="sets" questions={setsQuizQuestions} title="集合真题实战" description="12道精选题，覆盖高考集合全部题型" explanations={setsExplanations} />
          </section>

      {isPrinting && printOptions.showAnswers && <SetsAnswers />}
      </LessonLayout>
    </div>
  );
}
