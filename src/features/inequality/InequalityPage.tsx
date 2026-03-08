import { Math, QuizPanel, Collapsible, SpeakButton, PageHeader, LessonLayout, CalloutCard, PracticeCard, ExportButton, PageBreak } from '@/components/shared';
import { inequalityNarrations } from './data/narrations';
import { ineqPractice1, ineqPractice2 } from './data/practice';
import { useProgress, usePrintMode } from '@/hooks';
import { scrollToId } from '@/lib/scroll';
import { inequalityQuizQuestions } from './data/quiz';
import { inequalityProgressItems } from './data/progress';

export function InequalityPage() {
  const { items, toggle } = useProgress('inequality', inequalityProgressItems);
  const { isPrinting, printOptions } = usePrintMode();

  return (
    <div>
      <PageHeader
        stage="第二阶段 · 不等式"
        title="2.1 不等式"
        narration={inequalityNarrations.intro}
        subtitle="从零到满分 · 2-3小时搞定"
        tags={[
          { label: '难度 ★★★☆☆', color: 'amber' },
          { label: '高考必考 5-10分', color: 'blue' },
          { label: '约2-3小时', color: 'purple' },
        ]}
      />

      <div className="flex justify-end mb-4 print:hidden">
        <ExportButton title="2.1 不等式" />
      </div>

      {/* 前置知识引用 */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
        <p className="text-amber-900 font-bold mb-1">📌 前置知识</p>
        <p className="text-amber-800 leading-7">本章需要你会：正负数乘除、解一元一次方程、数轴上表示大小关系。</p>
        <p className="text-amber-700 leading-7">不确定自己会不会？→ 先去看 <a href="/math/inequality-prereq" className="text-blue-600 underline font-bold">2.0 不等式前置知识</a>，做完自测再回来。</p>
      </div>

      {/* 知识地图 */}
      <div className="bg-gray-50 rounded-xl p-5 mb-6 text-base text-gray-600">
        <p className="font-bold text-gray-800 mb-3 text-lg">📋 知识地图</p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 leading-7">
          <button onClick={() => scrollToId('ineq-props')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">一、不等式的性质 → 解题的规则基础</button>
          <button onClick={() => scrollToId('ineq-linear')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">二、一元一次不等式 → 和方程一样解</button>
          <button onClick={() => scrollToId('ineq-amgm')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">三、基本不等式 → 求最值的神器</button>
          <button onClick={() => scrollToId('ineq-quadratic')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">四、一元二次不等式 → 画图秒解</button>
          <button onClick={() => scrollToId('ineq-summary')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">五、知识总结卡片 → 考前速看</button>
          <button onClick={() => scrollToId('ineq-quiz')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">六、综合测试（12题）→ 高考真题 + 精华题</button>
        </div>
      </div>

      {/* 速通路线图 */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-5 mb-5">
        <p className="font-black text-blue-900 text-xl mb-1">速通路线图：这节课就 3 个核心知识点</p>
        <p className="text-blue-700 text-base mb-3">每个知识点只需要记 1 个核心规则，剩下的全是套路！</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-base">
          <div className="bg-white rounded-xl p-4 border border-blue-100 min-h-[80px]">
            <p className="font-bold text-gray-800 text-base">① 不等式性质</p>
            <p className="text-gray-500 mt-2 leading-7">核心：<strong className="text-red-600">乘除负数，变方向</strong></p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-blue-100 min-h-[80px]">
            <p className="font-bold text-gray-800 text-base">② 基本不等式</p>
            <p className="text-gray-500 mt-2 leading-7">核心：<strong className="text-red-600">一正二定三相等</strong></p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-blue-100 min-h-[80px]">
            <p className="font-bold text-gray-800 text-base">③ 一元二次不等式</p>
            <p className="text-gray-500 mt-2 leading-7">核心：<strong className="text-red-600">大于取两边，小于取中间</strong></p>
          </div>
        </div>
      </div>

      {/* 必背清单 */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 mb-6">
        <p className="font-bold text-gray-800 mb-2 text-lg">📝 必背清单：只背这 5 条，高考就够了</p>
        <p className="text-base text-gray-500 mb-3">不等式考的不是思维，是规则！背熟规则，套就行。</p>
        <div className="space-y-2 text-base text-gray-700 leading-7">
          <p>1️⃣ 不等式两边 <strong>加减同一个数</strong> → 不等号方向 <strong>不变</strong></p>
          <p>2️⃣ 不等式两边 <strong>乘除正数</strong> → 不等号方向 <strong>不变</strong></p>
          <p>3️⃣ 不等式两边 <strong>乘除负数</strong> → 不等号方向 <strong>反转</strong> ⚠️</p>
          <p>4️⃣ 基本不等式：<Math tex="a + b \geq 2\sqrt{ab}" />（<strong>一正二定三相等</strong>，和定积最大，积定和最小）</p>
          <p>5️⃣ 一元二次不等式：找两根，画抛物线 → <strong>大于取两边，小于取中间</strong></p>
        </div>
      </div>

      <LessonLayout progressItems={items} onToggle={toggle}>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 1: 不等式的性质 */}
      {/* ════════════════════════════════════════════════════════ */}
      <PageBreak label="不等式的性质" />
      <section id="ineq-props" className="mb-8 scroll-mt-4">
        <Collapsible title="一、不等式的性质" defaultOpen storageKey="ineq:props">
          <p className="text-blue-600 font-bold mb-4 text-base leading-7">
            🎯 学完你能：说出不等式的5条基本性质，知道什么时候不等号要变方向。
          </p>
          <SpeakButton text={inequalityNarrations.properties} />

          <div className="space-y-5 mt-4">
            {/* 生活类比引入 */}
            <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
              <p className="font-bold text-blue-900 text-lg mb-2">🌟 不等式 = 不平衡的天平</p>
              <p className="text-gray-700 leading-7 mb-2">
                等式就像天平平衡了：左边 = 右边。<strong>不等式就是天平不平衡</strong>：一边重一边轻。
              </p>
              <p className="text-gray-700 leading-7">
                关键问题是：我对天平做什么操作，它的倾斜方向会变？
              </p>
            </div>

            {/* 性质1-3: 不变号 */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <p className="font-bold text-gray-800 text-lg mb-3">📖 不变号的情况（和等式一样）</p>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-bold text-gray-800 mb-2">性质1：两边加（或减）同一个数，不等号方向不变</p>
                  <div className="pl-3 border-l-2 border-blue-300 space-y-1">
                    <p className="text-gray-700 leading-7">举例：<Math tex="5 > 3" /></p>
                    <p className="text-gray-700 leading-7">两边都 <strong>+10</strong>：<Math tex="5 + 10 > 3 + 10" /></p>
                    <p className="text-gray-700 leading-7">算出来：<Math tex="15 > 13" /> ✅ 还是大于号，方向没变</p>
                    <p className="text-gray-700 leading-7 mt-2">两边都 <strong>−7</strong>：<Math tex="5 - 7 > 3 - 7" /></p>
                    <p className="text-gray-700 leading-7">算出来：<Math tex="-2 > -4" /> ✅ 还是大于号，方向没变</p>
                    <p className="text-gray-500 leading-7">天平两边都放同样的砝码，倾斜方向当然不变。</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-bold text-gray-800 mb-2">性质2：两边乘（或除以）同一个<strong className="text-green-600">正数</strong>，不等号方向不变</p>
                  <div className="pl-3 border-l-2 border-green-300 space-y-1">
                    <p className="text-gray-700 leading-7">举例：<Math tex="5 > 3" /></p>
                    <p className="text-gray-700 leading-7">两边都 <strong>×2</strong>：<Math tex="5 \times 2 > 3 \times 2" /></p>
                    <p className="text-gray-700 leading-7">算出来：<Math tex="10 > 6" /> ✅ 还是大于号，方向没变</p>
                    <p className="text-gray-700 leading-7 mt-2">两边都 <strong>÷2</strong>：<Math tex="5 \div 2 > 3 \div 2" /></p>
                    <p className="text-gray-700 leading-7">算出来：<Math tex="2.5 > 1.5" /> ✅ 还是大于号，方向没变</p>
                    <p className="text-gray-500 leading-7">乘以正数 = 天平两边等比例放大，重的那边还是更重。</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-bold text-gray-800 mb-2">性质3：同向的不等式可以相加</p>
                  <div className="pl-3 border-l-2 border-blue-300 space-y-1">
                    <p className="text-gray-700 leading-7">举例：<Math tex="5 > 3" /> 并且 <Math tex="7 > 2" /></p>
                    <p className="text-gray-700 leading-7">加在一起：<Math tex="5 + 7 > 3 + 2" /></p>
                    <p className="text-gray-700 leading-7">算出来：<Math tex="12 > 5" /> ✅ 还是大于号</p>
                    <p className="text-gray-500 leading-7">两个天平都是左边重，合在一起左边还是更重。</p>
                  </div>
                </div>
              </div>
            </div>

            <PageBreak label="要变号的情况" />

            {/* 性质4-5: 要变号！ */}
            <div className="bg-red-50 rounded-xl border-2 border-red-300 p-4">
              <p className="font-bold text-red-800 text-lg mb-2">⚠️ 要变号的情况（和等式不一样！）</p>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-3 border border-red-200">
                  <p className="font-bold text-gray-800 mb-1">性质4：两边乘（或除以）同一个<strong className="text-red-600">负数</strong>，不等号方向<strong className="text-red-600">反转</strong></p>
                  <div className="pl-3 border-l-2 border-red-400 space-y-1">
                    <p className="text-gray-700 leading-7">举例：<Math tex="5 > 3" /></p>
                    <p className="text-gray-700 leading-7">两边都 <strong>×(−1)</strong>：</p>
                    <p className="text-gray-700 leading-7 pl-4"><Math tex="5 \times (-1) = -5" /></p>
                    <p className="text-gray-700 leading-7 pl-4"><Math tex="3 \times (-1) = -3" /></p>
                    <p className="text-gray-700 leading-7">结果：<Math tex="-5 < -3" /> ⚠️ <strong className="text-red-600">大于号变成了小于号！</strong></p>
                    <p className="text-red-600 font-bold leading-7">这是整章最重要的一条！乘除负数 = 不等号翻转！</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3 border border-red-200">
                  <p className="font-bold text-gray-800 mb-1">性质5：两边取倒数（都是正数时），不等号方向反转</p>
                  <div className="pl-3 border-l-2 border-red-400 space-y-1">
                    <p className="text-gray-700 leading-7">举例：<Math tex="5 > 2" /></p>
                    <p className="text-gray-700 leading-7">取倒数：</p>
                    <p className="text-gray-700 leading-7 pl-4"><Math tex="\frac{1}{5} = 0.2" /></p>
                    <p className="text-gray-700 leading-7 pl-4"><Math tex="\frac{1}{2} = 0.5" /></p>
                    <p className="text-gray-700 leading-7">结果：<Math tex="0.2 < 0.5" /> ⚠️ <strong className="text-red-600">大于号变成了小于号！</strong></p>
                    <p className="text-gray-500 leading-7">正数越大，倒数越小。数字越大分的份数越多，每份就越小。</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 对比记忆表 */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <p className="font-bold text-gray-800 text-lg mb-2">📊 等式 vs 不等式 对比表</p>
              <div className="overflow-x-auto">
                <table className="w-full text-base border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">操作</th>
                      <th className="border border-gray-300 px-4 py-2 text-center">等式</th>
                      <th className="border border-gray-300 px-4 py-2 text-center">不等式</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">两边 + 或 - 同一个数</td>
                      <td className="border border-gray-300 px-4 py-2 text-center text-green-600 font-bold">= 不变</td>
                      <td className="border border-gray-300 px-4 py-2 text-center text-green-600 font-bold">方向不变 ✓</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">两边 × 或 ÷ 正数</td>
                      <td className="border border-gray-300 px-4 py-2 text-center text-green-600 font-bold">= 不变</td>
                      <td className="border border-gray-300 px-4 py-2 text-center text-green-600 font-bold">方向不变 ✓</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">两边 × 或 ÷ <strong>负数</strong></td>
                      <td className="border border-gray-300 px-4 py-2 text-center text-green-600 font-bold">= 不变</td>
                      <td className="border border-gray-300 px-4 py-2 text-center text-red-600 font-bold">方向反转 ⚠️</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-red-600 font-bold mt-2 text-base">💡 记住：唯一的区别就是「乘除负数要变方向」，这是不等式和等式最大的不同！</p>
            </div>

            {/* 快速判断强化 */}
            <div className="bg-green-50 rounded-xl border border-green-200 p-3">
              <p className="font-bold text-green-800 mb-2">⚡ 快速判断：不等号会不会变方向？</p>
              <p className="text-gray-600 text-sm mb-2">已知 <Math tex="a > b" />，做以下操作后，不等号方向变不变？</p>
              <div className="space-y-1 text-base">
                <div className="flex items-center gap-3 bg-white rounded px-3 py-1">
                  <span className="font-bold text-gray-700 w-36">两边都 +5</span>
                  <span className="text-green-600 font-bold">不变 ✅</span>
                  <span className="text-gray-400 text-sm">加减不影响</span>
                </div>
                <div className="flex items-center gap-3 bg-white rounded px-3 py-1">
                  <span className="font-bold text-gray-700 w-36">两边都 ×3</span>
                  <span className="text-green-600 font-bold">不变 ✅</span>
                  <span className="text-gray-400 text-sm">乘正数不影响</span>
                </div>
                <div className="flex items-center gap-3 bg-white rounded px-3 py-1">
                  <span className="font-bold text-gray-700 w-36">两边都 ×(−2)</span>
                  <span className="text-red-600 font-bold">反转 ⚠️</span>
                  <span className="text-gray-400 text-sm">乘负数要变！</span>
                </div>
                <div className="flex items-center gap-3 bg-white rounded px-3 py-1">
                  <span className="font-bold text-gray-700 w-36">两边都 ÷(−1)</span>
                  <span className="text-red-600 font-bold">反转 ⚠️</span>
                  <span className="text-gray-400 text-sm">除负数要变！</span>
                </div>
                <div className="flex items-center gap-3 bg-white rounded px-3 py-1">
                  <span className="font-bold text-gray-700 w-36">两边都 −100</span>
                  <span className="text-green-600 font-bold">不变 ✅</span>
                  <span className="text-gray-400 text-sm">减法不影响</span>
                </div>
              </div>
              <p className="text-green-700 font-bold mt-2 text-sm">规律：只有<strong className="text-red-600">「乘或除以负数」</strong>时才变方向，其他都不变！</p>
            </div>
          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 2: 一元一次不等式 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="ineq-linear" className="mb-8 scroll-mt-4">
        <Collapsible title="二、一元一次不等式" defaultOpen storageKey="ineq:linear">
          <p className="text-blue-600 font-bold mb-4 text-base leading-7">
            🎯 学完你能：像解方程一样解不等式，知道什么时候要翻转不等号。
          </p>
          <SpeakButton text={inequalityNarrations.linearInequality} />

          <div className="space-y-5 mt-4">
            {/* 解题步骤 */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <p className="font-bold text-gray-800 text-lg mb-3">🔧 解一元一次不等式 = 解方程（多一步注意）</p>
              <p className="text-gray-600 leading-7 mb-3">步骤完全一样，只有一个区别：<strong className="text-red-600">除以负数时，不等号要反转</strong>。</p>
              <div className="space-y-2 text-base">
                <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-3">
                  <span className="w-7 h-7 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">1</span>
                  <p className="leading-7"><strong>去分母</strong>：两边乘以最小公倍数</p>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-3">
                  <span className="w-7 h-7 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">2</span>
                  <p className="leading-7"><strong>去括号</strong>：注意负号分配</p>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-3">
                  <span className="w-7 h-7 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">3</span>
                  <p className="leading-7"><strong>移项</strong>：含 x 的移到左边，常数移到右边（变号）</p>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-3">
                  <span className="w-7 h-7 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">4</span>
                  <p className="leading-7"><strong>合并同类项</strong></p>
                </div>
                <div className="flex items-start gap-3 bg-red-50 rounded-lg p-3 border border-red-200">
                  <span className="w-7 h-7 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">5</span>
                  <p className="leading-7"><strong>系数化为1</strong>：除以 x 的系数 → <strong className="text-red-600">如果系数是负数，不等号反转！</strong></p>
                </div>
              </div>
            </div>

            {/* 例题 */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <p className="font-bold text-gray-800 text-lg mb-3">✍️ 例题演示</p>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-bold text-gray-800 mb-2">例1（普通）：解 <Math tex="3x - 5 > 7" /></p>
                  <div className="pl-3 border-l-2 border-blue-300 space-y-1">
                    <p className="leading-7"><span className="text-blue-600 font-bold">移项</span>：<Math tex="3x > 7 + 5 = 12" /></p>
                    <p className="leading-7"><span className="text-blue-600 font-bold">系数化为1</span>：<Math tex="x > \frac{12}{3} = 4" />（除以正数3，不变号 ✓）</p>
                  </div>
                  <p className="text-green-600 font-bold mt-2">解集：<Math tex="x > 4" />，数轴上 4 处画 ○，箭头向右 →</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-bold text-gray-800 mb-2">例2（负系数⚠️）：解 <Math tex="-2x + 6 \leq 0" /></p>
                  <div className="pl-3 border-l-2 border-red-400 space-y-1">
                    <p className="leading-7"><span className="text-blue-600 font-bold">移项</span>：<Math tex="-2x \leq -6" /></p>
                    <p className="leading-7"><span className="text-red-600 font-bold">系数化为1</span>：<Math tex="x \geq \frac{-6}{-2} = 3" />（除以<strong>负数</strong> -2，不等号<strong className="text-red-600">反转</strong> ⚠️）</p>
                  </div>
                  <p className="text-green-600 font-bold mt-2">解集：<Math tex="x \geq 3" />，数轴上 3 处画 ●（含等号），箭头向右 →</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-bold text-gray-800 mb-2">例3（有分母）：解 <Math tex="\frac{2x-1}{3} > \frac{x+2}{2}" /></p>
                  <div className="pl-3 border-l-2 border-blue-300 space-y-1">
                    <p className="leading-7"><span className="text-blue-600 font-bold">去分母</span>（×6）：<Math tex="2(2x-1) > 3(x+2)" /></p>
                    <p className="leading-7"><span className="text-blue-600 font-bold">去括号</span>：<Math tex="4x - 2 > 3x + 6" /></p>
                    <p className="leading-7"><span className="text-blue-600 font-bold">移项</span>：<Math tex="4x - 3x > 6 + 2" /></p>
                    <p className="leading-7"><span className="text-blue-600 font-bold">合并</span>：<Math tex="x > 8" /></p>
                  </div>
                </div>
              </div>
            </div>

            <PracticeCard
              title="✏️ 即时练习：不等式性质 + 一元一次不等式"
              questions={ineqPractice1}
            />

            <CalloutCard variant="warning" title="⚠️ 易错点">
              <div className="space-y-2 text-base leading-7">
                <p><strong>最常犯的错：除以负数忘记变号</strong>。<Math tex="-3x > 6" /> → <Math tex="x < -2" />（不是 <Math tex="x > -2" />！）</p>
                <p><strong>移项忘记变号</strong>：移过去的数正负要变。<Math tex="x - 3 > 5" /> → <Math tex="x > 5 + 3" />，不是 <Math tex="x > 5 - 3" /></p>
              </div>
            </CalloutCard>
          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 3: 基本不等式 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="ineq-amgm" className="mb-8 scroll-mt-4">
        <Collapsible title="三、基本不等式（求最值神器）" defaultOpen storageKey="ineq:amgm">
          <p className="text-blue-600 font-bold mb-4 text-base leading-7">
            🎯 学完你能：用基本不等式求最大值和最小值，记住"一正二定三相等"。
          </p>
          <SpeakButton text={inequalityNarrations.basicInequality} />

          <div className="space-y-5 mt-4">
            {/* 公式引入 */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-5">
              <p className="font-bold text-purple-900 text-xl mb-3">🌟 基本不等式（AM-GM不等式）</p>
              <div className="bg-white rounded-lg p-4 mb-3 text-center">
                <p className="text-xl"><Math tex="\frac{a + b}{2} \geq \sqrt{ab} \quad (a > 0, \, b > 0)" /></p>
                <p className="text-gray-500 mt-2">算术平均数 ≥ 几何平均数</p>
              </div>
              <p className="text-gray-700 leading-7 mb-2">等价形式（更常用）：</p>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-xl"><Math tex="a + b \geq 2\sqrt{ab} \quad (a > 0, \, b > 0)" /></p>
                <p className="text-purple-700 font-bold mt-2">等号成立条件：<Math tex="a = b" /></p>
              </div>
            </div>

            {/* 通俗理解 */}
            <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
              <p className="font-bold text-blue-900 text-lg mb-2">🤔 大白话理解</p>
              <p className="text-gray-700 leading-7 mb-2">想象你有一根绳子，总长 10 米（<Math tex="a + b = 10" />），要围成一个矩形（面积 = <Math tex="ab" />）。</p>
              <p className="text-gray-700 leading-7 mb-2">什么时候面积最大？<strong>正方形</strong>！也就是 <Math tex="a = b = 5" /> 时，面积 <Math tex="= 25" />。</p>
              <p className="text-gray-700 leading-7">这就是基本不等式在说的事：<strong>和固定时，越"均匀"积越大</strong>。</p>
            </div>

            {/* 使用条件 */}
            <div className="bg-red-50 rounded-xl border-2 border-red-300 p-5">
              <p className="font-bold text-red-800 text-lg mb-3">⚠️ 使用三条件：一正二定三相等（缺一不可！）</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-bold shrink-0">正</span>
                  <div>
                    <p className="font-bold text-gray-800">一正：a, b 都必须是正数</p>
                    <p className="text-gray-600 leading-7">如果有负数，<Math tex="\sqrt{ab}" /> 可能无意义</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-bold shrink-0">定</span>
                  <div>
                    <p className="font-bold text-gray-800">二定：和（a+b）或积（ab）中必须有一个是定值</p>
                    <p className="text-gray-600 leading-7">否则不等式右边不是固定的数，没法说"最小值是多少"</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-bold shrink-0">等</span>
                  <div>
                    <p className="font-bold text-gray-800">三相等：a = b 这个条件必须能取到</p>
                    <p className="text-gray-600 leading-7">如果题目限制了 a ≠ b，那等号取不到，只有 ≥ 没有 =，最值不存在</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 两个方向 */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <p className="font-bold text-gray-800 text-lg mb-3">📊 两种题型：和定求积 vs 积定求和</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <p className="font-bold text-green-800 mb-2">和定 → 积最大</p>
                  <p className="text-gray-700 leading-7"><Math tex="a + b = S \text{（定值）}" /></p>
                  <p className="text-gray-700 leading-7 mt-1"><Math tex="ab \leq \left(\frac{S}{2}\right)^2" /></p>
                  <p className="text-green-700 font-bold mt-1">当 <Math tex="a = b = \frac{S}{2}" /> 时取最大值</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                  <p className="font-bold text-orange-800 mb-2">积定 → 和最小</p>
                  <p className="text-gray-700 leading-7"><Math tex="ab = P \text{（定值）}" /></p>
                  <p className="text-gray-700 leading-7 mt-1"><Math tex="a + b \geq 2\sqrt{P}" /></p>
                  <p className="text-orange-700 font-bold mt-1">当 <Math tex="a = b = \sqrt{P}" /> 时取最小值</p>
                </div>
              </div>
            </div>

            {/* 例题 */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <p className="font-bold text-gray-800 text-lg mb-3">✍️ 经典例题</p>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-bold text-gray-800 mb-2">例1：已知 <Math tex="x > 0" />，求 <Math tex="x + \frac{4}{x}" /> 的最小值</p>
                  <div className="pl-3 border-l-2 border-purple-300 space-y-1">
                    <p className="leading-7">检查三条件：✅ <Math tex="x > 0" />（正）；✅ <Math tex="x \cdot \frac{4}{x} = 4" />（积为定值）；✅ <Math tex="x = \frac{4}{x}" /> 时 <Math tex="x = 2" />（等号可取）</p>
                    <p className="leading-7"><Math tex="x + \frac{4}{x} \geq 2\sqrt{x \cdot \frac{4}{x}} = 2\sqrt{4} = 4" /></p>
                  </div>
                  <p className="text-green-600 font-bold mt-2">最小值 = 4，当 x = 2 时取到</p>
                </div>

                <PageBreak label="基本不等式例题" />
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-bold text-gray-800 mb-2">例2：已知 <Math tex="a > 0, b > 0, a + b = 6" />，求 <Math tex="ab" /> 的最大值</p>
                  <div className="pl-3 border-l-2 border-purple-300 space-y-1">
                    <p className="leading-7">和定积最大：<Math tex="a + b = 6 \geq 2\sqrt{ab}" /></p>
                    <p className="leading-7"><Math tex="3 \geq \sqrt{ab}" />，所以 <Math tex="ab \leq 9" /></p>
                  </div>
                  <p className="text-green-600 font-bold mt-2">最大值 = 9，当 a = b = 3 时取到</p>
                </div>
              </div>
            </div>

            <PracticeCard
              title="✏️ 即时练习：基本不等式"
              questions={ineqPractice2}
            />

            <CalloutCard variant="warning" title="⚠️ 易错点">
              <div className="space-y-2 text-base leading-7">
                <p><strong>忘记检查"一正"</strong>：题目没说 a, b {'>'} 0 就不能直接用基本不等式！</p>
                <p><strong>忘记检查"三相等"</strong>：如果等号条件与题目矛盾，最值不存在。比如 a + b = 6 且 a ≠ b，那 ab 没有最大值（只能无限接近但取不到9）。</p>
                <p><strong>和定积最大 vs 积定和最小搞混</strong>：口诀"和定积大，积定和小"。</p>
              </div>
            </CalloutCard>
          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 4: 一元二次不等式 */}
      {/* ════════════════════════════════════════════════════════ */}
      <PageBreak label="一元二次不等式" />
      <section id="ineq-quadratic" className="mb-8 scroll-mt-4">
        <Collapsible title="四、一元二次不等式（最重要！）" defaultOpen storageKey="ineq:quadratic">
          <p className="text-blue-600 font-bold mb-4 text-base leading-7">
            🎯 学完你能：用"大于取两边，小于取中间"秒解一元二次不等式。
          </p>
          <SpeakButton text={inequalityNarrations.quadraticInequality} />

          <div className="space-y-5 mt-4">
            {/* 三胞胎关系 */}
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-xl p-5">
              <p className="font-bold text-indigo-900 text-xl mb-3">🔗 "三胞胎"关系：函数、方程、不等式</p>
              <p className="text-gray-700 leading-7 mb-3">同一个二次表达式 <Math tex="ax^2 + bx + c" />，可以出现在三种场景中：</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-white rounded-lg p-4 border border-indigo-100 text-center">
                  <p className="font-bold text-indigo-800 mb-1">二次函数</p>
                  <p><Math tex="y = ax^2 + bx + c" /></p>
                  <p className="text-gray-500 mt-1">→ 画图像（抛物线）</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-indigo-100 text-center">
                  <p className="font-bold text-indigo-800 mb-1">二次方程</p>
                  <p><Math tex="ax^2 + bx + c = 0" /></p>
                  <p className="text-gray-500 mt-1">→ 找根（与x轴交点）</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-indigo-100 text-center">
                  <p className="font-bold text-indigo-800 mb-1">二次不等式</p>
                  <p><Math tex="ax^2 + bx + c > 0" /></p>
                  <p className="text-gray-500 mt-1">→ 找图像在x轴上方的部分</p>
                </div>
              </div>
              <p className="text-indigo-800 font-bold mt-3 text-center text-base">解不等式 = 在函数图像上找满足条件的 x 的范围</p>
            </div>

            {/* 解题三步法 */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <p className="font-bold text-gray-800 text-lg mb-3">🔧 解一元二次不等式：三步法</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 bg-blue-50 rounded-lg p-4">
                  <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold shrink-0">1</span>
                  <div>
                    <p className="font-bold text-gray-800">化标准形式</p>
                    <p className="text-gray-600 leading-7">让最高次系数 <Math tex="a > 0" />。如果 <Math tex="a < 0" />，两边乘以 -1（不等号反转）</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-blue-50 rounded-lg p-4">
                  <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold shrink-0">2</span>
                  <div>
                    <p className="font-bold text-gray-800">解对应方程，找两个根</p>
                    <p className="text-gray-600 leading-7">用因式分解或求根公式 <Math tex="x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}" /></p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-red-50 rounded-lg p-4 border border-red-200">
                  <span className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-bold shrink-0">3</span>
                  <div>
                    <p className="font-bold text-gray-800">画图写解集</p>
                    <p className="text-red-600 font-bold leading-7"><Math tex="> 0" />（在x轴上方）→ <strong>大于取两边</strong>：<Math tex="x < x_1" /> 或 <Math tex="x > x_2" /></p>
                    <p className="text-blue-600 font-bold leading-7"><Math tex="< 0" />（在x轴下方）→ <strong>小于取中间</strong>：<Math tex="x_1 < x < x_2" /></p>
                  </div>
                </div>
              </div>
            </div>

            {/* 口诀卡片 */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-400 rounded-xl px-4 py-2 text-center">
              <p className="text-lg font-black text-yellow-800">🔑 口诀：<span className="text-gray-800">大于取两边，小于取中间</span></p>
              <p className="text-gray-500 text-sm">（前提：最高次系数 <Math tex="a > 0" />，即抛物线开口向上）</p>
            </div>

            {/* 例题 */}
            <PageBreak label="一元二次不等式例题" />
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <p className="font-bold text-gray-800 text-lg mb-2">✍️ 例题演示</p>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold text-gray-800 mb-1">例1：解 <Math tex="x^2 - 5x + 6 > 0" /></p>
                  <div className="pl-3 border-l-2 border-blue-300 space-y-1">
                    <p className="leading-7">① 已经是标准形式（<Math tex="a = 1 > 0" />）✓</p>
                    <p className="leading-7">② 解方程：<Math tex="x^2 - 5x + 6 = (x-2)(x-3) = 0" />，根为 <Math tex="x_1 = 2, x_2 = 3" /></p>
                    <p className="leading-7">③ {'>'} 0 取两边：<Math tex="x < 2" /> 或 <Math tex="x > 3" /></p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold text-gray-800 mb-1">例2：解 <Math tex="x^2 - 4x + 3 \leq 0" /></p>
                  <div className="pl-3 border-l-2 border-blue-300 space-y-1">
                    <p className="leading-7">① 标准形式 ✓</p>
                    <p className="leading-7">② <Math tex="(x-1)(x-3) = 0" />，根为 <Math tex="x_1 = 1, x_2 = 3" /></p>
                    <p className="leading-7">③ ≤ 0 取中间（含端点）：<Math tex="1 \leq x \leq 3" /></p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold text-gray-800 mb-1">例3（最高次系数为负⚠️）：解 <Math tex="-x^2 + 2x + 3 > 0" /></p>
                  <div className="pl-3 border-l-2 border-red-400 space-y-1">
                    <p className="leading-7">① <strong className="text-red-600">两边乘以 -1</strong>：<Math tex="x^2 - 2x - 3 < 0" />（注意不等号反转！）</p>
                    <p className="leading-7">② <Math tex="(x+1)(x-3) = 0" />，根为 <Math tex="x_1 = -1, x_2 = 3" /></p>
                    <p className="leading-7">③ {'<'} 0 取中间：<Math tex="-1 < x < 3" /></p>
                  </div>
                </div>
              </div>
            </div>

            {/* 特殊情况：Δ < 0 */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <p className="font-bold text-gray-800 text-lg mb-2">🔍 特殊情况：方程无实数根（Δ {'<'} 0）</p>
              <p className="text-gray-600 leading-7 mb-2">当判别式 <Math tex="\Delta = b^2 - 4ac < 0" /> 时，抛物线不与 x 轴相交。</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                  <p className="font-bold text-green-800 mb-1"><Math tex="a > 0, \Delta < 0" /></p>
                  <p className="text-gray-700 leading-7">抛物线全在 x 轴上方</p>
                  <p className="text-gray-700 leading-7"><Math tex="> 0" /> → 解集 = <Math tex="\mathbb{R}" />（全体实数）</p>
                  <p className="text-gray-700 leading-7"><Math tex="< 0" /> → 解集 = <Math tex="\varnothing" />（空集）</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
                  <p className="font-bold text-orange-800 mb-1"><Math tex="a < 0, \Delta < 0" /></p>
                  <p className="text-gray-700 leading-7">抛物线全在 x 轴下方</p>
                  <p className="text-gray-700 leading-7"><Math tex="> 0" /> → 解集 = <Math tex="\varnothing" /></p>
                  <p className="text-gray-700 leading-7"><Math tex="< 0" /> → 解集 = <Math tex="\mathbb{R}" /></p>
                </div>
              </div>
            </div>

            <CalloutCard variant="warning" title="⚠️ 易错点">
              <div className="space-y-1 text-base leading-7">
                <p><strong>最高次系数为负忘翻转</strong>：<Math tex="-x^2 + 4 > 0" /> 必须先变成 <Math tex="x^2 - 4 < 0" />（乘 -1，反转），再用口诀。</p>
                <p><strong>口诀用反</strong>：记住"大于取两边，小于取中间"。</p>
                <p><strong>等号区别</strong>：<Math tex="\leq" /> 端点取（闭区间 <Math tex="[\ ]" />），<Math tex="<" /> 端点不取（开区间 <Math tex="(\ )" />）。</p>
              </div>
            </CalloutCard>
          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 5: 知识总结卡片 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="ineq-summary" className="mb-4 scroll-mt-4">
        <Collapsible title="五、知识总结卡片（考前速看）" defaultOpen storageKey="ineq:summary">
          <SpeakButton text={inequalityNarrations.summary} />
          <div className="mt-2">
            <div className="bg-green-50 border border-green-200 text-gray-800 rounded-2xl p-4">
              <p className="font-black text-green-800 text-base mb-2">📋 考前速记卡</p>
              <div className="space-y-1.5 leading-7">
                <p><span className="text-green-700 font-bold">性质：</span>加减不变号 | 乘除正数不变号 | <strong className="text-red-600">乘除负数变号</strong></p>
                <p><span className="text-green-700 font-bold">基本不等式：</span><Math tex="a + b \geq 2\sqrt{ab}" />（<Math tex="a,b > 0" />）一正二定三相等 | 和定积大 | 积定和小</p>
                <p><span className="text-green-700 font-bold">二次不等式：</span><Math tex="> 0" /> → <strong className="text-orange-600">取两边</strong>，<Math tex="< 0" /> → <strong className="text-blue-600">取中间</strong>，<Math tex="\Delta < 0" /> 时看开口方向</p>
                <p><span className="text-green-700 font-bold">陷阱：</span><span className="text-red-600">① 乘除负数忘变号 ② 条件不全 ③ 系数负没处理 ④ 开闭区间搞混</span></p>
              </div>
            </div>
          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 6: 综合测试 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="ineq-quiz" className="mb-4 scroll-mt-4">
        <Collapsible title="六、综合测试（高考真题 + 精华题·12题）" defaultOpen storageKey="ineq:quiz">
          <QuizPanel module="inequality" questions={inequalityQuizQuestions} title="不等式综合测试" />
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* 打印模式答案区 */}
      {/* ════════════════════════════════════════════════════════ */}
      {isPrinting && printOptions.showAnswers && (
        <>
          <PageBreak label="答案与解析" />
          <section className="mb-8 print-answers">
            <h2 className="text-xl font-bold text-gray-900 mb-4">📝 答案与解析</h2>

            {[
              { label: '一、不等式性质 + 一元一次不等式 — 即时练习', questions: ineqPractice1 },
              { label: '三、基本不等式 — 即时练习', questions: ineqPractice2 },
              { label: '综合测试（高考真题 + 精华题）', questions: inequalityQuizQuestions },
            ].map((section) => (
              <div key={section.label} className="mb-3">
                <p className="font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">{section.label}</p>
                <div className="space-y-2 text-gray-700">
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
