import { Math, Collapsible, SpeakButton, PracticeCard, PrintQuestions, PageHeader, LessonLayout, ExportButton, PageBreak, HTreeDiagram } from '@/components/shared';
import { setsNarrations } from './data/1.2/1.2-narrations';
import { useProgress, usePrintMode } from '@/hooks';
import { scrollToId } from '@/lib/scroll';
import { setsQuizQuestions } from './data/1.2/1.2-quiz';
import { setsProgressItems } from './data/1.2/1.2-progress';
import { SetsAnswers, setsExplanations } from './1.2-sets-answers';
import { DebugGeo2dSvg } from '@/components/shared/geo2d/Geo2dDebug';
import { UnifiedDebugToggle } from '@/components/shared';
import {
  vennSubset, vennIntersection, vennUnion, vennComplement, vennDisjoint, vennProperSubset,
  NumberLineOpenSvg, NumberLineClosedSvg, NumberLineInfiniteSvg,
  opIntersection, opUnion, opComplement,
  ComplementEx1Svg, ComplementEx2Svg, ComplementEx3Svg,
  IneqEx2Svg,
  MixedOp1Svg,
  EmptyIntersect1Svg,
  SubsetRelationSvg, vennInclusionExclusion3,
  bigQ1Branch1Tree, bigQ1Branch2Tree, BigQ2NumberLineSvg, bigQ2BranchTree,
} from './1.2-sets-diagrams';

export function SetsPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('sets', setsProgressItems);
  const { isPrinting, printOptions } = usePrintMode();

  return (
    <div style={{ zoom: 0.9 }}>
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
              <div className="space-y-1 text-gray-800">
                <div className="grid grid-cols-2 gap-2">
                  <table className="w-full border-collapse">
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
                      <tr><td className="border border-gray-200 px-2 py-1 text-center"><Math tex="\complement_U A" /></td><td className="border border-gray-200 px-2 py-1">补集：全集U里去掉集合A</td></tr>
                    </tbody>
                  </table>
                  <table className="w-full border-collapse">
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
              <div className="space-y-0 text-gray-800">
                <div className="border border-gray-300 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-blue-800 border-b border-gray-300 bg-gray-50">什么是集合？</div>
                  <div className="flex">
                    <div className="flex-1 px-2 py-1.5">
                      <p className="font-bold mb-1">通俗说法：</p>
                      <p className="text-blue-700">集合 = <strong>一堆确定的东西装在一起</strong>。</p>
                      <p className="text-blue-700 mt-1">就这么简单。把一些东西放到一个"袋子"里，这个"袋子"就叫集合。</p>
                    </div>
                    <div className="flex-1 px-2 py-1.5 border-l border-gray-300">
                      <p className="font-bold mb-1">正式说法：</p>
                      <p>由一些<strong>确定的对象</strong>组成的整体叫集合。里面的每个对象叫<strong>元素</strong>。</p>
                      <p className="mt-1">集合用大写字母：A, B, C, U …　元素用小写字母：a, b, c, x …</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded p-2">
                  <p><strong>生活中的"集合"：</strong>你书包里的东西 = &#123;课本, 笔, 橡皮, 手机&#125;　　所有偶数 = <Math tex="\{0, 2, 4, 6, 8, \ldots\}" />　　比3大的数 = <Math tex="\{x \mid x > 3\}" /></p>
                </div>

                <div className="border border-gray-300 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-blue-800 border-b border-gray-300 bg-gray-50">元素和集合的关系（只有两种）</div>
                  <div className="flex">
                    <div className="flex-1 px-2 py-1.5">
                      <p><strong>属于：</strong><Math tex="a \in A" /> 读作"a 属于 A"，意思是"a 在集合 A 里面"</p>
                      <p className="mt-1">例：A = &#123;1, 3, 5, 7&#125;，则 <Math tex="3 \in A" /> ✓</p>
                    </div>
                    <div className="flex-1 px-2 py-1.5 border-l border-gray-300">
                      <p><strong>不属于：</strong><Math tex="a \notin A" /> 读作"a 不属于 A"，意思是"a 不在集合 A 里面"</p>
                      <p className="mt-1">例：A = &#123;1, 3, 5, 7&#125;，则 <Math tex="4 \notin A" /> ✓</p>
                    </div>
                  </div>
                </div>

              </div>
            </Collapsible>
          </section>


          {/* Section 2: 三大性质 */}
          <section id="sets-props" className="mb-0 scroll-mt-4">
            <Collapsible title="二、集合的三大性质（必须记住！）" defaultOpen storageKey="sets:properties" headerExtra={<SpeakButton text={setsNarrations.threeProperties} />}>

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
                    <p>集合中的元素是唯一的，不能重复出现</p>
                    <p className="text-green-700">✓ <Math tex="\{1, 2, 3\}" /></p>
                    <p className="text-red-600">✗ <Math tex="\{1, 1, 2, 3\}" /> ← 1 重复</p>
                  </div>
                  <div className="px-2 py-1.5 space-y-0.5">
                    <p>集合中的元素没有固定的顺序</p>
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
                <table className="w-full border-collapse">
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
                <div className="p-1.5 pb-0">
                  <div className="grid grid-cols-3 gap-x-1.5 gap-y-0">
                      {/* A ⊆ U 子集 */}
                      <div className="bg-gray-50 rounded p-1 text-center">
                        <p className="font-bold text-gray-700 mb-1"><Math tex="A \subseteq U" />（子集）</p>
                        <DebugGeo2dSvg data={vennSubset} width={126} height={91} />
                      </div>

                      {/* A ∩ B 交集 */}
                      <div className="bg-gray-50 rounded p-1 text-center">
                        <p className="font-bold text-gray-700 mb-1"><Math tex="A \cap B" />（交集）</p>
                        <DebugGeo2dSvg data={vennIntersection} width={126} height={91} />
                      </div>

                      {/* A ∪ B 并集 */}
                      <div className="bg-gray-50 rounded p-1 text-center">
                        <p className="font-bold text-gray-700 mb-1"><Math tex="A \cup B" />（并集）</p>
                        <DebugGeo2dSvg data={vennUnion} width={126} height={91} />
                      </div>

                      {/* ∁ᵤA 补集 */}
                      <div className="bg-gray-50 rounded p-1 text-center">
                        <p className="font-bold text-gray-700 mb-1"><Math tex="\complement_U A" />（补集）</p>
                        <DebugGeo2dSvg data={vennComplement} width={126} height={91} />
                      </div>

                      {/* A ∩ B = ∅ 不相交 */}
                      <div className="bg-gray-50 rounded p-1 text-center">
                        <p className="font-bold text-gray-700 mb-1"><Math tex="A \cap B = \varnothing" />（不相交）</p>
                        <DebugGeo2dSvg data={vennDisjoint} width={126} height={91} />
                      </div>

                      {/* A ⊂ B 真子集 */}
                      <div className="bg-gray-50 rounded p-1 text-center">
                        <p className="font-bold text-gray-700 mb-1"><Math tex="A \subsetneq B" />（真子集）</p>
                        <DebugGeo2dSvg data={vennProperSubset} width={126} height={91} />
                      </div>
                  </div>
                </div>
                <div className="px-2 py-1.5 border-t border-gray-300 space-y-0.5">
                  <p className="font-bold">实战演示：</p>
                  <p>设 <Math tex="U = \{1,2,3,4,5,6,7\}" />，<Math tex="A = \{1,3,5,7\}" />，<Math tex="B = \{3,4,5,6\}" />，<Math tex="C = \{2,6\}" /></p>
                  <div className="grid grid-cols-3 gap-x-4 gap-y-0.5">
                    <p><strong>子集：</strong><Math tex="A \subseteq U" /> ✓（A 的元素全在 U 里）</p>
                    <p><strong>交集：</strong><Math tex="A \cap B = \{3,5\}" /></p>
                    <p><strong>并集：</strong><Math tex="A \cup B = \{1,3,4,5,6,7\}" /></p>
                    <p><strong>补集：</strong><Math tex="\complement_U A = \{2,4,6\}" /></p>
                    <p><strong>不相交：</strong><Math tex="A \cap C = \varnothing" /></p>
                    <p><strong>真子集：</strong><Math tex="A \subsetneq U" />（A 在 U 里且 A ≠ U）</p>
                  </div>
                </div>
                <div className="px-2 py-1 border-t border-gray-300 bg-[#F5E6D3]">
                  <p className="font-bold text-[#7A5C3E]">做题技巧：遇到集合运算题，先画 Venn 图，标数据，阴影部分就是答案。</p>
                </div>
              </div>


              {/* 方法四：区间表示法 */}
              <div className="border border-gray-400 rounded overflow-hidden">
                <div className="px-2 py-1 font-bold text-orange-700 border-b border-gray-400 bg-orange-50">方法四：区间表示法 — 数轴上的一段</div>
                <div className="px-2 py-1 border-b border-gray-300">
                  <p>当集合是<strong>数轴上连续的一段</strong>时，用区间表示比描述法更简洁。后面交并补运算到处都用！</p>
                </div>
                <table className="w-full border-collapse">
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
                    <NumberLineOpenSvg />
                  </div>
                  <div className="border-r border-gray-300 p-1">
                    <NumberLineClosedSvg />
                  </div>
                  <div className="p-1">
                    <NumberLineInfiniteSvg />
                  </div>
                </div>
              </div>

              {/* 转换练习 + 易错 */}
              <div className="border border-gray-400 rounded overflow-hidden mt-1">
                <div className="px-2 py-1 font-bold bg-gray-50 border-b border-gray-400">转换练习</div>
                <div className="grid grid-cols-2 gap-x-4 px-2 py-1.5">
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
                <div className="px-2 py-1 border-t border-gray-300 bg-amber-50 space-y-0.5">
                  <p><strong className="text-amber-700">⚠ 高考易错：</strong><strong>用区间写的话，只能表示连续的数</strong>，<Math tex="\{1,2,3\}" /> 不能写成 [1,3]。</p>
                  <p className="text-amber-700">[1,3] 表示 1 到 3 之间<strong>所有实数</strong>（包括 1.5、2.7 等），而 <Math tex="\{1,2,3\}" /> 只有三个整数。</p>
                  <p className="text-amber-700">不连续的要用 ∪ 连接：<Math tex="(-\infty, -2] \cup [3, +\infty)" /></p>
                </div>
              </div>

            </Collapsible>
          </section>


          {/* Section 4: 常见数集 */}
          <section id="sets-numsets" className="mb-0 scroll-mt-4">
            <Collapsible title="四、常见的数集（背下来）" defaultOpen storageKey="sets:number-sets" headerExtra={<SpeakButton text={setsNarrations.numberSets} />}>
              <p className="text-blue-600 mb-1">🎯 学完你能：记住 N, N*, Z, Q, R 各代表什么，判断元素属于哪个数集。</p>
              <div className="space-y-0 text-gray-800">
                <div className="border border-gray-400 rounded overflow-hidden">
                  <table className="w-full border-collapse">
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
                        <td className="border-b border-r border-gray-300 px-2 py-1 text-center"><Math tex="\mathbb{N}^*" /></td>
                        <td className="border-b border-r border-gray-300 px-2 py-1">正整数集</td>
                        <td className="border-b border-r border-gray-300 px-2 py-1 text-gray-500">N 加星 = 去掉 0</td>
                        <td className="border-b border-r border-gray-300 px-2 py-1">1, 2, 3, …</td>
                        <td className="border-b border-r border-gray-300 px-2 py-1"><Math tex="0 \notin \mathbb{N}^*" /> ✓</td>
                        <td className="border-b border-gray-300 px-2 py-1 text-center text-red-600 font-bold">不含 0</td>
                      </tr>
                      <tr>
                        <td className="border-b border-r border-gray-300 px-2 py-1 text-center"><Math tex="\mathbb{N}" /></td>
                        <td className="border-b border-r border-gray-300 px-2 py-1">自然数集</td>
                        <td className="border-b border-r border-gray-300 px-2 py-1 text-gray-500"><strong>N</strong>atural（自然）</td>
                        <td className="border-b border-r border-gray-300 px-2 py-1">0, 1, 2, 3, …</td>
                        <td className="border-b border-r border-gray-300 px-2 py-1"><Math tex="0 \in \mathbb{N}" /> ✓</td>
                        <td className="border-b border-gray-300 px-2 py-1 text-center text-red-600 font-bold">含 0</td>
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
                </div>
              </div>
            </Collapsible>
          </section>


          {/* Section 5: 集合间的关系 */}
          <section id="sets-subset" className="mb-0 scroll-mt-4">
            <Collapsible title="五、集合间的关系" defaultOpen storageKey="sets:relations" headerExtra={<SpeakButton text={setsNarrations.subsets} />}>
              <div className="space-y-0 text-gray-800">

                {/* 子集 vs 真子集 */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="grid grid-cols-2">
                    <div className="px-2 py-1 font-bold text-green-700 border-b border-r border-gray-400 bg-green-50">子集 ⊆</div>
                    <div className="px-2 py-1 font-bold text-purple-700 border-b border-gray-400 bg-purple-50">真子集 ⊊</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-2 py-1.5 border-r border-gray-300 space-y-0.5">
                      <p>一个集合的<strong>所有元素</strong>都包含在另一个集合中，<Math tex="A \subseteq B" /></p>
                      <p>若 A 的每个元素都在 B 里，则 A 是 B 的子集，A 与 B 可以相等。</p>
                      <p className="mt-1">例：<Math tex="\{1,3\} \subseteq \{1,2,3,4\}" /> ✓</p>
                      <p><Math tex="\{1,2,3\} \subseteq \{1,2,3\}" /> ✓（相等也算）</p>
                    </div>
                    <div className="px-2 py-1.5 space-y-0.5">
                      <p>一个特殊的子集，要求该子集<strong>不能等于</strong>原集合，<Math tex="A \subsetneq B" /></p>
                      <p>若 <Math tex="A \subseteq B" /> 且 <Math tex="A \neq B" />，则 A 是 B 的真子集，A 与 B 不相等。</p>
                      <p className="mt-1">例：<Math tex="\{1,3\} \subsetneq \{1,2,3,4\}" /> ✓</p>
                      <p><Math tex="\{1,2,3\} \subsetneq \{1,2,3\}" /> ✗（相等就不算）</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 border-t border-gray-300 bg-[#F5E6D3]">
                    <div className="px-2 py-1 border-r border-gray-300">
                      <p className="text-[#7A5C3E]"><strong>⊆ 像 ≤</strong>（小于等于，允许相等）</p>
                    </div>
                    <div className="px-2 py-1">
                      <p className="text-[#7A5C3E]"><strong>⊊ 像 {'<'}</strong>（严格小于，不能相等）</p>
                    </div>
                  </div>
                </div>

                {/* ③ 集合相等 */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-blue-50">集合相等 = — 元素完全相同</div>
                  <div className="px-2 py-1 space-y-0.5">
                    <p>两个集合相等是指它们包含的<strong>所有元素完全相同</strong>，记作 <Math tex="A = B" /></p>
                    <p><Math tex="\{1,2,3\} = \{3,1,2\}" /> ✓　元素相同，只是写的顺序不同。</p>
                    <p className="text-gray-500 mt-1">判断相等的另一种方式：<Math tex="A \subseteq B" /> 且 <Math tex="B \subseteq A" />，即互为子集。</p>
                  </div>
                </div>


                {/* 三种关系对比总结 */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold border-b border-gray-400 bg-gray-50">三种关系对比总结</div>
                  <table className="w-full border-collapse">
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
                        <td className="border-b border-r border-gray-300 px-2 py-1">A 全在 B 里，且 <strong>A ≠ B</strong></td>
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


                {/* ④ 空集 — 拆成两个独立卡片 */}
                {/* 空集卡片1：定义 + 例子 */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold border-b border-gray-400 bg-gray-50">空集 ∅ — 什么都没有的集合</div>
                  <div className="px-2 py-1 border-b border-gray-300 space-y-0.5">
                    <p><strong>定义：</strong>空集是一个不含任何元素的集合，符号表示为 <Math tex="\varnothing" /> 或 &#123; &#125;。</p>
                  </div>
                  <div className="px-2 py-1 border-b border-gray-300 space-y-0.5">
                    <p className="font-bold">空集的性质：</p>
                    <p><strong>子集关系：</strong>空集是任何集合的子集（<Math tex="\varnothing \subseteq A" />），也是任何非空集合的真子集。</p>
                    <p><strong>唯一性：</strong>所有空集都是同一个，空集只有一个。</p>
                    <p><strong>集合运算：</strong>并集 <Math tex="\varnothing \cup A = A" />　　交集 <Math tex="\varnothing \cap A = \varnothing" /></p>
                  </div>
                  <div className="px-2 py-1 border-b border-gray-300 bg-blue-50">
                    <p className="text-blue-700"><strong>理解空集：</strong>可以把集合想象成一个装元素的袋子，空集的袋子是空的，但袋子本身确实存在。空集与数字 0 不同，0 是一个具体的数，而空集是一个没有元素的集合。</p>
                  </div>
                  <div className="px-2 py-1 border-b border-gray-300">
                    <p><strong>例：</strong>方程 <Math tex="x^2 + 1 = 0" /> 在实数范围内无解，所以 <Math tex="\{x \in \mathbb{R} \mid x^2+1=0\} = \varnothing" /></p>
                    <p><strong>反例：</strong><Math tex="\{x \in \mathbb{R} \mid x^2 - 1 = 0\} = \{-1, 1\}" />，有解就不是空集。</p>
                  </div>
                  <div className="px-2 py-1 border-b border-gray-300 bg-amber-50">
                    <p className="text-amber-700"><strong>⚠ 易混：</strong><Math tex="\varnothing" /> 是空的（0 个元素），<Math tex="\{0\}" /> 里面有 1 个元素（数字 0）。它们<strong>不一样</strong>！</p>
                    <p className="text-amber-700">同理，<Math tex="\{\varnothing\}" /> 也不是空集——里面有 1 个元素（空集本身）。</p>
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
                    <p>对于一个包含 n 个元素的集合，每个元素都有<strong>两种状态</strong>：要么包含在子集中，要么不包含在子集中。</p>
                    <p>因此每个元素的选择有 2 种可能性，总共有 n 个元素，所以子集的总数为 <Math tex="2^n" />。</p>
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


          {/* Section 6: 集合的运算 */}
          <section id="sets-ops" className="mb-0 scroll-mt-4">
            <Collapsible title="六、集合的运算（高考核心！）" defaultOpen storageKey="sets:operations" headerExtra={<SpeakButton text={setsNarrations.operations} />}>
              <div className="space-y-1 text-gray-800">

                {/* 核心方法 */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold border-b border-gray-400 bg-gray-50">集合运算核心方法</div>
                  <table className="w-full border-collapse">
                    <tbody>
                      <tr>
                        <td className="border-r border-gray-300 px-2 py-1 text-center font-bold w-24">有限集</td>
                        <td className="border-r border-gray-300 px-2 py-1">画 <strong>Venn 图</strong>，一个一个找</td>
                        <td className="border-r border-gray-300 px-2 py-1 text-center font-bold w-24">不等式集</td>
                        <td className="px-2 py-1">画 <strong>数轴</strong>，看线段重叠/合并/剩余</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* ==================== 交集 / 并集 / 补集 定义并排 ==================== */}
                <div className="grid grid-cols-3 gap-1">
                  {/* 交集定义 */}
                  <div className="border border-gray-400 rounded overflow-hidden">
                    <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-50 text-center">交集 <Math tex="\cap" /></div>
                    <div className="flex justify-center p-2">
                      <DebugGeo2dSvg data={opIntersection} width={160} height={100} />
                    </div>
                    <div className="px-2 py-1 border-t border-gray-300 text-center">
                      <p className=""><strong>两个都有的</strong></p>
                    </div>
                  </div>
                  {/* 并集定义 */}
                  <div className="border border-gray-400 rounded overflow-hidden">
                    <div className="px-2 py-1 font-bold text-green-700 border-b border-gray-400 bg-gray-50 text-center">并集 <Math tex="\cup" /></div>
                    <div className="flex justify-center p-2">
                      <DebugGeo2dSvg data={opUnion} width={160} height={100} />
                    </div>
                    <div className="px-2 py-1 border-t border-gray-300 text-center">
                      <p className=""><strong>有一个就行</strong></p>
                    </div>
                  </div>
                  {/* 补集定义 */}
                  <div className="border border-gray-400 rounded overflow-hidden">
                    <div className="px-2 py-1 font-bold text-red-700 border-b border-gray-400 bg-gray-50 text-center">补集 <Math tex="\complement_U A" /></div>
                    <div className="flex justify-center p-2">
                      <DebugGeo2dSvg data={opComplement} width={160} height={100} />
                    </div>
                    <div className="px-2 py-1 border-t border-gray-300 text-center">
                      <p className=""><strong>U 里去掉 A</strong></p>
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
                  <div className="px-2 py-1 border-b border-gray-300">
                    <p>已知 <Math tex="U = \{1, 2, 3, 4, 5\}" />，<Math tex="A = \{1, 2, 3\}" />，<Math tex="B = \{2, 4, 5\}" /></p>
                  </div>
                  <div className="px-2 py-1">
                    <div className="grid grid-cols-2 gap-x-4 space-y-0">
                      <div className="space-y-0.5">
                        <p><strong><Math tex="A \cap B" /> = ？</strong></p>
                        <p className="ml-4">A 和 B <strong>都有</strong>的：逐个看，只有 2 两边都有</p>
                        <p className="ml-4">答案：<strong><Math tex="A \cap B = \{2\}" /></strong></p>
                      </div>
                      <div className="space-y-0.5">
                        <p><strong><Math tex="A \cup B" /> = ？</strong></p>
                        <p className="ml-4">A 和 B <strong>合在一起</strong>去重：1, 2, 3, 4, 5</p>
                        <p className="ml-4">答案：<strong><Math tex="A \cup B = \{1, 2, 3, 4, 5\}" /></strong></p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-x-4 mt-1">
                      <div>
                        <p><strong><Math tex="\complement_U A" /> = ？</strong></p>
                        <p className="ml-4">U 里<strong>不在 A</strong> 的：U 有 1,2,3,4,5，A 有 1,2,3，剩下 4,5</p>
                        <p className="ml-4">答案：<strong><Math tex="\complement_U A = \{4, 5\}" /></strong></p>
                      </div>
                      <div>
                        <p><strong><Math tex="\complement_U B" /> = ？</strong></p>
                        <p className="ml-4">U 里<strong>不在 B</strong> 的：U 有 1,2,3,4,5，B 有 2,4,5，剩下 1,3</p>
                        <p className="ml-4">答案：<strong><Math tex="\complement_U B = \{1, 3\}" /></strong></p>
                      </div>
                    </div>
                  </div>
                  <div className="px-2 py-1 border-t border-gray-300 bg-blue-50">
                    <p className="text-blue-700">有限集很简单：<strong>一个一个找就行</strong>，不需要任何技巧。</p>
                  </div>
                </div>


                {/* 补集的端点规律 */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-red-700 border-b border-gray-400 bg-gray-50 ">补集的端点规律（开变闭，闭变开）</div>
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
                    <ComplementEx1Svg />
                  </div>
                  {/* 例2: x ≥ 5，闭 */}
                  <div className="flex items-center border-b border-gray-300">
                    <div className="flex-1 px-2 py-1 space-y-0.5">
                      <p><strong>例2：</strong><Math tex="A = \{x \mid x \geq 5\}" /></p>
                      <p>端点 5：A 闭（●），补集<strong>开</strong>（○）</p>
                      <p>答案：<strong><Math tex="(-\infty, 5)" /></strong></p>
                    </div>
                    <ComplementEx2Svg />
                  </div>
                  {/* 例3: [-2, 3)，双端 */}
                  <div className="flex items-center">
                    <div className="flex-1 px-2 py-1 space-y-0.5">
                      <p><strong>例3：</strong><Math tex="A = [-2, 3)" /></p>
                      <p>端点 -2：A 闭（●），补集<strong>开</strong>（○）</p>
                      <p>端点 3：A 开（○），补集<strong>闭</strong>（●）</p>
                      <p>答案：<strong><Math tex="(-\infty, -2) \cup [3, +\infty)" /></strong></p>
                    </div>
                    <ComplementEx3Svg />
                  </div>
                </div>

                {/* 不等式集的交/并 */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-green-700 border-b border-gray-400 bg-gray-50 ">不等式集的交/并（画数轴！）</div>
                  <div className="px-2 py-1 space-y-1 border-b border-gray-300">
                    <p>不等式集不能逐个找，要<strong>画数轴</strong>：</p>
                    <div className="flex gap-6">
                      <p><strong><Math tex="A \cap B" /></strong>（交集）：两条线<strong>重叠</strong>的部分</p>
                      <p><strong><Math tex="A \cup B" /></strong>（并集）：两条线<strong>合起来</strong>覆盖的部分</p>
                    </div>
                  </div>
                  {/* 例 */}
                  <div className="px-2 py-1 border-b border-gray-300">
                    <p className="font-bold text-green-700">例：<Math tex="A = (-2, 1]" />，<Math tex="B = [0, 3)" /></p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-1 px-2 py-1 space-y-0.5">
                      <p><strong><Math tex="A \cap B" /></strong> = 重叠 = <strong><Math tex="[0, 1]" /></strong></p>
                      <p><strong><Math tex="A \cup B" /></strong> = 合起来 = <strong><Math tex="(-2, 3)" /></strong></p>
                    </div>
                    <IneqEx2Svg />
                  </div>
                </div>

                {/* 混合运算 */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-purple-700 border-b border-gray-400 bg-gray-50 ">补集 + 交并混合（高考最爱考！）</div>
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
                    <MixedOp1Svg />
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
                  <div className="px-2 py-1 font-bold text-orange-700 border-b border-gray-400 bg-gray-50 ">专题：交集为空 <Math tex="A \cap B = \varnothing" />（高考常考！）</div>
                  <div className="px-2 py-1 space-y-1 border-b border-gray-300">
                    <p><strong>含义：</strong>A 和 B <strong>没有公共元素</strong>，在数轴上就是<strong>不重叠</strong>。</p>
                    <div className="flex gap-6">
                      <p><strong>有限集：</strong>逐个检查，没有相同元素</p>
                      <p><strong>区间：</strong>画数轴，两段不重叠（可以刚好挨着）</p>
                    </div>
                  </div>
                  {/* 例题 */}
                  <div className="px-2 py-1 border-b border-gray-300">
                    <p className="font-bold text-orange-700">例：<Math tex="A = [1, 3]" />，<Math tex="B = (a, +\infty)" />，若 <Math tex="A \cap B = \varnothing" />，求 a</p>
                  </div>
                  <div className="flex items-start px-2 py-1 border-b border-gray-300">
                    <div className="flex-1 space-y-0.5">
                      <p><strong>看符号：</strong>A = <strong>[</strong>1, 3<strong>]</strong> 包含 1 到 3 的所有数；B = <strong>(</strong>a, +∞<strong>)</strong> 圆括号，<strong>不含 a</strong></p>
                      <p><strong>临界分析：</strong>B 不能碰到 A，B 的起点 a 至少到 A 的右端 3</p>
                      <p>当 a = 3 时，B = (3, +∞) 不含 3，A 含 3，没有公共点 ✓</p>
                      <p>答案：<strong><Math tex="a \geq 3" /></strong></p>
                    </div>
                    <EmptyIntersect1Svg />
                  </div>
                  <div className="px-2 py-1 border-b border-gray-300 bg-amber-50">
                    <p><strong>对比：</strong>如果 B 改成 <strong>[</strong>a, +∞)，a = 3 时 B <strong>含</strong> 3，A 也含 3，交集 = {'{'} 3 {'}'} ，所以答案变成 <strong>a {'>'} 3</strong>。一个括号改变答案！</p>
                  </div>
                  <div className="px-2 py-1 border-b border-gray-300 bg-green-50">
                    <p><strong>反过来：</strong>若 <Math tex="A \cap B \neq \varnothing" />（交集非空），就是上面的<strong>反面</strong>：交集为空是 a ≥ 3，所以交集非空就是 <strong><Math tex="a < 3" /></strong></p>
                  </div>
                </div>


                {/* 专题：子集与交并的联系 */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-cyan-700 border-b border-gray-400 bg-gray-50 ">专题：子集与交并的联系</div>
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
                    <SubsetRelationSvg />
                  </div>
                </div>

                {/* ==================== 容斥原理 ==================== */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-teal-700 border-b border-gray-400 bg-gray-50 ">容斥原理 — 解决"重复计数"问题</div>
                  <div className="px-2 py-1 flex items-start gap-3 border-b border-gray-300">
                    <div className="flex-1 space-y-1">
                      <p><strong>核心思路：</strong>直接把各集合人数加起来，重叠的人会被多算，所以要减回去。</p>
                      <p><strong>三集合公式：</strong></p>
                      <p><Math tex="|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C|" /></p>
                      <p className="text-xs">两集合更简单：<Math tex="|A \cup B| = |A| + |B| - |A \cap B|" />（去掉 C 相关项即可）</p>
                    </div>
                    <DebugGeo2dSvg data={vennInclusionExclusion3} width={176} height={126} />
                  </div>
                  <table className="w-full border-collapse border-b border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border-b border-r border-gray-300 px-2 py-1 text-left w-1/3">区域</th>
                        <th className="border-b border-r border-gray-300 px-2 py-1 text-left">三集合</th>
                        <th className="border-b border-gray-300 px-2 py-1 text-left">两集合（去掉 C）</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border-r border-gray-300 px-2 py-1"><strong>只A</strong></td>
                        <td className="border-r border-gray-300 px-2 py-1"><Math tex="|A| - |A \cap B| - |A \cap C| + |A \cap B \cap C|" /></td>
                        <td className="px-2 py-1"><Math tex="|A| - |A \cap B|" /></td>
                      </tr>
                      <tr>
                        <td className="border-r border-t border-gray-300 px-2 py-1"><strong>只B</strong></td>
                        <td className="border-r border-t border-gray-300 px-2 py-1"><Math tex="|B| - |A \cap B| - |B \cap C| + |A \cap B \cap C|" /></td>
                        <td className="border-t border-gray-300 px-2 py-1"><Math tex="|B| - |A \cap B|" /></td>
                      </tr>
                      <tr>
                        <td className="border-r border-t border-gray-300 px-2 py-1"><strong>只C</strong></td>
                        <td className="border-r border-t border-gray-300 px-2 py-1"><Math tex="|C| - |A \cap C| - |B \cap C| + |A \cap B \cap C|" /></td>
                        <td className="border-t border-gray-300 px-2 py-1">—</td>
                      </tr>
                      <tr>
                        <td className="border-r border-t border-gray-300 px-2 py-1"><strong>恰好两项</strong></td>
                        <td className="border-r border-t border-gray-300 px-2 py-1"><Math tex="|A \cap B| + |A \cap C| + |B \cap C| - 3|A \cap B \cap C|" /></td>
                        <td className="border-t border-gray-300 px-2 py-1">—</td>
                      </tr>
                      <tr>
                        <td className="border-r border-t border-gray-300 px-2 py-1"><strong>至少一个</strong></td>
                        <td className="border-r border-t border-gray-300 px-2 py-1"><Math tex="|A \cup B \cup C|" />（套公式）</td>
                        <td className="border-t border-gray-300 px-2 py-1"><Math tex="|A| + |B| - |A \cap B|" /></td>
                      </tr>
                      <tr>
                        <td className="border-r border-t border-gray-300 px-2 py-1"><strong>都没有</strong></td>
                        <td className="border-r border-t border-gray-300 px-2 py-1">总数 - <Math tex="|A \cup B \cup C|" /></td>
                        <td className="border-t border-gray-300 px-2 py-1">总数 - <Math tex="|A \cup B|" /></td>
                      </tr>
                    </tbody>
                  </table>
                  {/* 例题 */}
                  <div className="px-2 py-1 border-b border-gray-300">
                    <p className="font-bold text-teal-700">例：某校 100 人参加课外活动调查。参加篮球 A = 50 人，足球 B = 40 人，乒乓球 C = 30 人。同时参加 A 和 B 的 15 人，同时参加 A 和 C 的 10 人，同时参加 B 和 C 的 8 人，三项都参加的 3 人。求：</p>
                  </div>
                  <div className="px-2 py-1 space-y-0.5">
                    <p><strong>(1) 至少参加一项的有多少人？</strong></p>
                    <p className="ml-4">套公式：<Math tex="|A \cup B \cup C| = 50 + 40 + 30 - 15 - 10 - 8 + 3 = 90" /> 人</p>
                    <p><strong>(2) 一项都没参加的有多少人？</strong></p>
                    <p className="ml-4">总数 - 至少一项 = <Math tex="100 - 90 = 10" /> <strong className="text-red-600">人</strong></p>
                    <p><strong>(3) 只参加篮球的有多少人？</strong></p>
                    <p className="ml-4">只A = <Math tex="|A| - |A \cap B| - |A \cap C| + |A \cap B \cap C| = 50 - 15 - 10 + 3 = 28" /> <strong>人</strong></p>
                    <p className="text-xs">（减掉和 B、C 的重叠，但三者交集被多减了一次，要加回来）</p>
                    <p><strong>(4) 恰好参加两项的有多少人？</strong></p>
                    <p className="ml-4">恰好两项 = <Math tex="(|A \cap B| + |A \cap C| + |B \cap C|) - 3 \times |A \cap B \cap C| = (15+10+8) - 3 \times 3 = 24" /> <strong>人</strong></p>
                    <p className="text-xs">（每个两两交集包含了三者交集，要各减一次）</p>
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
                    <p className="text-gray-500">记法：补号穿进括号，∩ 和 ∪ 互换。高考直接用常规方法就够。</p>
                  </div>
                </div>


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
                      <div className="flex gap-3">
                        <div className="flex-1 space-y-0.5">
                          <p><strong>第一步：解方程，把集合写成具体元素</strong></p>
                          <p className="ml-5">A：<Math tex="x^2 - 5x + 6 = 0" />，分解因式 <Math tex="(x-2)(x-3) = 0" /></p>
                          <p className="ml-5">得 <Math tex="x = 2" /> 或 <Math tex="x = 3" />，所以 <strong><Math tex="A = \{2, 3\}" /></strong></p>
                          <p className="ml-5">B：<Math tex="a = 1" /> 代入，<Math tex="1 \cdot x - 2 = 0" />，得 <Math tex="x = 2" />，所以 <strong><Math tex="B = \{2\}" /></strong></p>
                        </div>
                        <div className="flex-1 space-y-0.5">
                          <p><strong>第二步：逐个检查，写出所有关系</strong>（<Math tex="A = \{2, 3\}" />，<Math tex="B = \{2\}" />）</p>
                          <p className="ml-5">B 的元素都在 A 里，即 <Math tex="B \subseteq A" />（B 是 A 的子集）</p>
                          <p className="ml-5">但 <Math tex="B \neq A" />，所以 <Math tex="B \subsetneq A" />（B 是 A 的真子集）</p>
                          <p className="ml-5">反过来 A 有 3 不在 B 里，所以 A 不是 B 的子集</p>
                        </div>
                      </div>
                    </div>
                    {/* 小问(2) */}
                    <div className="border-t border-gray-200 pt-1 space-y-0.5">
                      <p className="font-bold">(2) 若 <Math tex="B \subseteq A" />，求 a 的所有可能值</p>
                      <p>题意：B 里的元素必须<strong>全部在 <Math tex="A = \{2, 3\}" /> 里面</strong></p>
                      <p className="mt-1"><strong>分类讨论：B 的方程是 <Math tex="ax - 2 = 0" />，按 a 是否为 0 分两种情况</strong></p>
                      {/* 分支图：SVG连线 + foreignObject放Math */}
                      <HTreeDiagram root={bigQ1Branch1Tree} className="w-full" layout={{ lineH: 18, gapX: 4, nodeMaxW: 400, nodePadX: 12, nodePadY: 2 }} />
                      <p><strong>合并所有绿色框：</strong><Math tex="a \in \{0,\; \frac{2}{3},\; 1\}" /></p>
                      <p className="text-red-600">易错点：很多人忘了左边那条路（<Math tex="a = 0" />），直接丢掉一个答案！</p>
                    </div>
                    {/* 小问(3) */}
                    <div className="border-t border-gray-200 pt-1 space-y-0.5">
                      <p className="font-bold">(3) 若 <Math tex="A \cap B = \varnothing" />，求 a 的所有可能值</p>
                      <p>题意：A 和 B <strong>没有任何公共元素</strong>（交集为空）</p>
                      <p className="mt-1"><strong>分类讨论：和 (2) 一样分两种情况，但判断标准相反</strong></p>
                      {/* 分支图：SVG连线 + foreignObject放Math */}
                      <HTreeDiagram root={bigQ1Branch2Tree} className="w-full" layout={{ lineH: 18, gapX: 4, nodeMaxW: 400, nodePadX: 12, nodePadY: 2 }} />
                      <div className="bg-blue-50 rounded p-1.5">
                        <p><strong>为什么 a = 0 时成立？</strong>代入 a = 0，方程变成 <Math tex="0 \cdot x - 2 = 0" />，即 -2 = 0，矛盾，无解，所以 B = ∅。而 <Math tex="A \cap \varnothing = \varnothing" />，交集为空自动成立</p>
                      </div>
                      <p><strong>合并两条路：</strong><Math tex="a = 0" /> ✓，<Math tex="a \neq 0" /> 时需 <Math tex="a \neq 1" /> 且 <Math tex="a \neq \frac{2}{3}" /></p>
                      <p className="ml-5">答案：<strong><Math tex="a \neq 1" /> 且 <Math tex="a \neq \frac{2}{3}" /></strong></p>
                    </div>
                  </div>
                </div>


                {/* ===== 大题2：区间集（3个小问揭示本质相同）===== */}
                <PageBreak />
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-green-700 border-b border-gray-400 bg-gray-50">大题2（区间集）：三种问法，同一个答案！</div>
                  <div className="px-2 py-1 border-b border-gray-300">
                    <p>已知 <Math tex="A = \{x \mid a \leq x \leq b\}" />，<Math tex="B = \{x \mid 0 < x \leq 5\}" /></p>
                  </div>
                  <div className="px-2 py-1 space-y-1">
                    {/* 小问(1) */}
                    <div className="space-y-0.5">
                      <p className="font-bold">(1) 若 A ⊆ B，求 a, b 的范围</p>
                      <p>题意：A ⊆ B，就是 A 里的<strong>每一个数都必须在 B 里面</strong>，A 要被 B 完全"装下"</p>
                      <p><strong>第一步：把集合写成区间形式</strong></p>
                      <p className="ml-5">A：<Math tex="a \leq x \leq b" />，写成区间就是 <strong>A = [a, b]</strong>（从 a 到 b，两端都含）</p>
                      <p className="ml-5">B：0 {'<'} x ≤ 5，写成区间就是 <strong>B = (0, 5]</strong>（从 0 到 5，不含 0，含 5）</p>
                      <p><strong>第二步：画数轴</strong></p>
                      <BigQ2NumberLineSvg />
                      <p><strong>第三步：看图分析</strong>（A ⊆ B 意思是蓝色线段要<strong>完全被绿色线段盖住</strong>）</p>
                      <p className="text-red-600">注意：这题有两个参数 a 和 b，要先讨论 A 是否为空集！</p>
                      <HTreeDiagram root={bigQ2BranchTree} className="w-full" layout={{ lineH: 18, gapX: 4, nodeMaxW: 400, nodePadX: 12, nodePadY: 2 }} />
                      <div className="bg-blue-50 rounded p-1.5 space-y-0.5">
                        <p><strong>为什么 a {'>'} b 时 A = ∅？</strong>A = &#123;x | a ≤ x ≤ b&#125;，当 a {'>'} b 时，不可能有数同时 ≥ a 又 ≤ b，所以 A 里没有任何元素，A = ∅</p>
                        <p><strong>为什么 ∅ ⊆ B 成立？</strong>空集是任何集合的子集（第五节空集性质），所以 A ⊆ B 自动成立</p>
                      </div>
                      <p><strong>合并：</strong><Math tex="a > b" />（A 为空集），或 <Math tex="0 < a \leq b \leq 5" />（A 非空）</p>
                    </div>
                    {/* 小问(2) + 小问(3) 左右布局 */}
                    <div className="border-t border-gray-200 pt-1 grid grid-cols-2 gap-2">
                      <div className="space-y-0.5">
                        <p className="font-bold">(2) 若 <Math tex="A \cap B = A" />，求 a, b 的范围</p>
                        <p><strong>先翻译条件：</strong><Math tex="A \cap B = A" /> 是什么意思？</p>
                        <p className="ml-5"><Math tex="A \cap B" /> 就是"A 和 B 的公共部分"</p>
                        <p className="ml-5"><Math tex="A \cap B = A" /> 就是说：A 和 B 的公共部分 = A 本身</p>
                        <p className="ml-5">也就是说 A 的<strong>所有元素都在公共部分里</strong>，即 A 的所有元素都在 B 里</p>
                        <p className="ml-5">这不就是 <strong>A ⊆ B</strong> 吗！</p>
                        <p>和第 (1) 问完全一样！答案：<strong><Math tex="a > b" />，或 <Math tex="0 < a \leq b \leq 5" /></strong></p>
                      </div>
                      <div className="space-y-0.5 border-l border-gray-200 pl-2">
                        <p className="font-bold">(3) 若 <Math tex="A \cup B = B" />，求 a, b 的范围</p>
                        <p><strong>先翻译条件：</strong><Math tex="A \cup B = B" /> 是什么意思？</p>
                        <p className="ml-5"><Math tex="A \cup B" /> 就是"把 A 和 B 合并在一起"</p>
                        <p className="ml-5"><Math tex="A \cup B = B" /> 就是说：合并之后还是 B，没变大</p>
                        <p className="ml-5">说明 A 没有给 B 带来<strong>任何新的元素</strong></p>
                        <p className="ml-5">A 的元素<strong>本来就全在 B 里</strong>，还是 <strong>A ⊆ B</strong>！</p>
                        <p>和第 (1) 问完全一样！答案：<strong><Math tex="a > b" />，或 <Math tex="0 < a \leq b \leq 5" /></strong></p>
                      </div>
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

          {/* 等价转化表 */}
          <section className="mb-0 scroll-mt-4">
          <div className="border border-gray-400 rounded overflow-hidden bg-white mt-2">
            <div className="px-2 py-1 font-bold text-purple-700 border-b border-gray-400 bg-gray-100">集合等价转化表（必记！）</div>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border-b border-r border-gray-300 px-2 py-1 text-left">条件</th>
                  <th className="border-b border-r border-gray-300 px-2 py-1 text-left">等价于</th>
                  <th className="border-b border-gray-300 px-2 py-1 text-left">直觉理解</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-r border-gray-300 px-2 py-1"><Math tex="A \cap B = A" /></td>
                  <td className="border-b border-r border-gray-300 px-2 py-1"><Math tex="A \subseteq B" /></td>
                  <td className="border-b border-gray-300 px-2 py-1">A 和 B 的公共部分就是 A 本身，说明 A 全在 B 里</td>
                </tr>
                <tr>
                  <td className="border-b border-r border-gray-300 px-2 py-1"><Math tex="A \cup B = B" /></td>
                  <td className="border-b border-r border-gray-300 px-2 py-1"><Math tex="A \subseteq B" /></td>
                  <td className="border-b border-gray-300 px-2 py-1">合并后还是 B，说明 A 没带来新元素，A 全在 B 里</td>
                </tr>
                <tr>
                  <td className="border-b border-r border-gray-300 px-2 py-1"><Math tex="A \cap B = B" /></td>
                  <td className="border-b border-r border-gray-300 px-2 py-1"><Math tex="B \subseteq A" /></td>
                  <td className="border-b border-gray-300 px-2 py-1">公共部分就是 B 本身，说明 B 全在 A 里</td>
                </tr>
                <tr>
                  <td className="border-b border-r border-gray-300 px-2 py-1"><Math tex="A \cup B = A" /></td>
                  <td className="border-b border-r border-gray-300 px-2 py-1"><Math tex="B \subseteq A" /></td>
                  <td className="border-b border-gray-300 px-2 py-1">合并后还是 A，说明 B 没带来新元素，B 全在 A 里</td>
                </tr>
                <tr>
                  <td className="border-b border-r border-gray-300 px-2 py-1"><Math tex="A \cap B = \varnothing" /></td>
                  <td className="border-b border-r border-gray-300 px-2 py-1">A、B 无公共元素</td>
                  <td className="border-b border-gray-300 px-2 py-1">两个集合完全不重叠</td>
                </tr>
                <tr>
                  <td className="border-b border-r border-gray-300 px-2 py-1"><Math tex="\complement_U A = B" /></td>
                  <td className="border-b border-r border-gray-300 px-2 py-1"><Math tex="A \cap B = \varnothing" /> 且 <Math tex="A \cup B = U" /></td>
                  <td className="border-b border-gray-300 px-2 py-1">A 和 B 互补：不重叠，合起来刚好填满 U</td>
                </tr>
                <tr>
                  <td className="border-b border-r border-gray-300 px-2 py-1"><Math tex="A = B" /></td>
                  <td className="border-b border-r border-gray-300 px-2 py-1"><Math tex="A \subseteq B" /> 且 <Math tex="B \subseteq A" /></td>
                  <td className="border-b border-gray-300 px-2 py-1">互相包含，说明完全相同</td>
                </tr>
                <tr>
                  <td className="border-b border-r border-gray-300 px-2 py-1"><Math tex="\complement_U(A \cap B)" /></td>
                  <td className="border-b border-r border-gray-300 px-2 py-1"><Math tex="(\complement_U A) \cup (\complement_U B)" /></td>
                  <td className="border-b border-gray-300 px-2 py-1">交集的补 = 补集的并（德摩根）</td>
                </tr>
                <tr>
                  <td className="border-r border-gray-300 px-2 py-1"><Math tex="\complement_U(A \cup B)" /></td>
                  <td className="border-r border-gray-300 px-2 py-1"><Math tex="(\complement_U A) \cap (\complement_U B)" /></td>
                  <td className="px-2 py-1">并集的补 = 补集的交（德摩根）</td>
                </tr>
              </tbody>
            </table>
          </div>
          </section>

          {/* Section 7: 高考真题实战 */}
          <PageBreak />
          <section id="sets-quiz" className="mb-0 scroll-mt-4">
            <Collapsible title="七、高考真题实战" defaultOpen storageKey="sets:quiz">
              <div className="text-base print:hidden">
                <PracticeCard title="" questions={setsQuizQuestions} explanations={setsExplanations} optionCols={4} printOptionCols={4} />
              </div>
              <div className="text-base hidden print:block">
                <PrintQuestions questions={setsQuizQuestions} printOptionCols={4} />
              </div>
            </Collapsible>
          </section>

      {isPrinting && printOptions.showAnswers && <SetsAnswers />}
      </LessonLayout>
      <UnifiedDebugToggle />
    </div>
  );
}
