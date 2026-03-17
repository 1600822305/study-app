import { Mafs, Coordinates, Plot, Point, Text as MafsText } from 'mafs';
import { Math, QuizPanel, Collapsible, SpeakButton, PageHeader, LessonLayout, CalloutCard, PracticeCard, ExportButton, PageBreak } from '@/components/shared';
import { inequalityNarrations } from './data/narrations';
import { ineqPractice1, ineqPractice2 } from './data/practice';
import { useProgress, usePrintMode } from '@/hooks';
import { scrollToId } from '@/lib/scroll';
import { inequalityQuizQuestions } from './data/quiz';
import { inequalityProgressItems } from './data/progress';
import { InequalityAnswers, inequalityExplanations } from './inequality-answers';

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
      <section id="ineq-linear" className="mb-2 scroll-mt-4">
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
              explanations={inequalityExplanations}
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
      <section id="ineq-amgm" className="mb-2 scroll-mt-4">
        <Collapsible title="三、基本不等式（求最值神器）" defaultOpen storageKey="ineq:amgm">
          <p className="text-blue-600 font-bold mb-1 text-base leading-7">
            🎯 学完你能：用基本不等式求最大值和最小值，记住"一正二定三相等"。
          </p>
          <SpeakButton text={inequalityNarrations.basicInequality} />

          <div className="space-y-1.5 mt-1">
            {/* 核心公式 + 常用变式 */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-2">
              <p className="font-bold text-purple-900 text-lg leading-tight mb-0.5">🌟 基本不等式</p>
              <div className="bg-white rounded-lg p-1.5 mb-1 text-center">
                <p className="text-xl"><Math tex="a + b \geq 2\sqrt{ab} \quad (a > 0, \, b > 0, \; \text{当 } a = b \text{ 时取等})" /></p>
              </div>

              <p className="font-bold text-purple-800 text-sm mb-0.5">📌 常用变式（都是从上面这个公式变来的）</p>
              <div className="space-y-0.5">
                <div className="bg-white rounded-lg p-2 border border-purple-100 flex items-center gap-3">
                  <span className="text-purple-600 font-bold shrink-0">变式1</span>
                  <span className="leading-8"><Math tex="a^2 + b^2 \geq 2ab" />　← 把 <Math tex="a, b" /> 换成 <Math tex="a^2, b^2" /> 再开根号就回到原式</span>
                </div>
                <div className="bg-white rounded-lg p-2 border border-purple-100 flex items-center gap-3">
                  <span className="text-purple-600 font-bold shrink-0">变式2</span>
                  <span className="leading-8"><Math tex="\dfrac{a+b}{2} \geq \sqrt{ab}" />　← 两边除以 2，算术平均数 ≥ 几何平均数</span>
                </div>
                <div className="bg-white rounded-lg p-2 border border-purple-100 flex items-center gap-3">
                  <span className="text-purple-600 font-bold shrink-0">变式3</span>
                  <span className="leading-8"><Math tex="ab \leq \left(\dfrac{a+b}{2}\right)^2" />　← 变式2两边平方，用来求乘积最大值</span>
                </div>
                <div className="bg-white rounded-lg p-2 border border-purple-100 flex items-center gap-3">
                  <span className="text-purple-600 font-bold shrink-0">变式4</span>
                  <span className="leading-8"><Math tex="a + b + C \geq 2\sqrt{ab} + C" />　← <Math tex="C" /> 是常数（正负都行），不影响求最值，直接搬过去</span>
                </div>
              </div>
            </div>

            {/* 必背清单 */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl border-2 border-purple-300 p-2">
              <p className="font-black text-purple-900 text-lg mb-1">📋 基本不等式 · 必背清单</p>

              {/* 核心公式 */}
              <div className="bg-white rounded-lg p-1.5 border border-purple-200 text-center mb-1">
                <p className="text-xl leading-10"><Math tex="a + b \geq 2\sqrt{ab} \quad (a > 0, \; b > 0, \; \text{当 } a = b \text{ 时取等})" /></p>
              </div>

              {/* 使用条件 + 做题步骤 并排 */}
              <div className="grid grid-cols-2 gap-1.5 mb-1">
                <div className="bg-white rounded-lg p-2 border border-purple-200">
                  <p className="font-bold text-red-600 text-center mb-1">使用条件：一正 · 二定 · 三相等</p>
                  <div className="space-y-0.5 text-gray-700 leading-7">
                    <p><strong>一正</strong>：a、b 都必须是正数</p>
                    <p><strong>二定</strong>：加起来或乘起来，有一个是固定的数</p>
                    <p className="text-gray-500 text-sm pl-4">比如 <Math tex="a+b=2" /> → 和是固定的（=2）<br/>比如 <Math tex="ab=9" /> → 积是固定的（=9）</p>
                    <p><strong>三相等</strong>：a = b 这个条件能取到</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-2 border border-purple-200">
                  <p className="font-bold text-purple-700 text-center mb-1">做题三步走</p>
                  <div className="space-y-0.5 text-gray-700 leading-7">
                    <p><strong>①</strong> 检查正数条件 → 不是正数不能用</p>
                    <p><strong>②</strong> 看加起来还是乘起来是固定的 → 决定求最大还是最小</p>
                    <p><strong>③</strong> 验证 a = b 能否取到 → 取不到没最值</p>
                  </div>
                </div>
              </div>

              {/* 两个方向 + 数轴图解 */}
              <p className="font-bold text-blue-800 mb-1">🔑 一个公式，两个方向</p>
              <div className="grid grid-cols-2 gap-2">
                {/* ≥ → 最小值 */}
                <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
                  <p className="font-bold text-orange-800 mb-1">知道乘积，求和的<span className="text-red-600">最小值</span></p>
                  <p className="text-center leading-10"><Math tex="a+b \geq 2\sqrt{ab}" /></p>
                  <div className="relative mx-2" style={{height: 48}}>
                    <div className="absolute border-l-2 border-t-2 border-orange-400 rounded-tl-sm" style={{left: '50%', right: 0, top: 0, height: 10}}></div>
                    <div className="absolute text-orange-600 font-bold text-xs" style={{left: '56%', top: -2}}>≥ 4</div>
                    <div className="absolute left-0 right-0 bg-gray-300" style={{top: 22, height: 1}}></div>
                    {[0,2,4,6,8].map((n, i) => (
                      <div key={n} className="absolute flex flex-col items-center" style={{left: `${i * 25}%`, top: 18}}>
                        <div className={`w-px h-2 ${n === 4 ? 'bg-orange-500' : 'bg-gray-400'}`}></div>
                        <span className={`text-xs mt-0.5 ${n === 4 ? 'text-orange-600 font-bold' : 'text-gray-400'}`}>{n}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-orange-700 text-sm text-center font-bold"><Math tex="\geq" /> 就是最小值</p>
                </div>

                {/* ≤ → 最大值 */}
                <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                  <p className="font-bold text-green-800 mb-1">知道和，求积的<span className="text-red-600">最大值</span></p>
                  <p className="text-center leading-10"><Math tex="ab \leq \left(\dfrac{a+b}{2}\right)^2" /></p>
                  <div className="relative mx-2" style={{height: 48}}>
                    <div className="absolute border-r-2 border-t-2 border-green-400 rounded-tr-sm" style={{left: 0, right: '25%', top: 0, height: 10}}></div>
                    <div className="absolute text-green-600 font-bold text-xs" style={{right: '29%', top: -2}}>≤ 9</div>
                    <div className="absolute left-0 right-0 bg-gray-300" style={{top: 22, height: 1}}></div>
                    {[0,3,6,9,12].map((n, i) => (
                      <div key={n} className="absolute flex flex-col items-center" style={{left: `${i * 25}%`, top: 18}}>
                        <div className={`w-px h-2 ${n === 9 ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                        <span className={`text-xs mt-0.5 ${n === 9 ? 'text-green-600 font-bold' : 'text-gray-400'}`}>{n}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-green-700 text-sm text-center font-bold"><Math tex="\leq" /> 就是最大值</p>
                </div>
              </div>
            </div>

            {/* 例题 */}
            <div className="bg-white rounded-xl border border-gray-200 p-3">
              <p className="font-bold text-gray-800 text-lg leading-tight mb-2">✍️ 经典例题</p>
              <div className="space-y-2">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold text-gray-800 mb-1">例1：已知 <Math tex="x > 0" />，求 <Math tex="x + \frac{4}{x}" /> 的最小值</p>
                  <div className="pl-3 border-l-2 border-purple-300 space-y-0.5">
                    <p className="leading-7 text-red-600">❌ 分析：<Math tex="x \cdot \frac{4}{x} = 4" /> 是固定的，能用</p>
                    <p className="leading-7 text-green-700">✅ 套公式：<Math tex="x + \frac{4}{x} \geq 2\sqrt{4} = 4" /></p>
                    <p className="leading-7">验证等号：<Math tex="x = \frac{4}{x}" /> ⇒ <Math tex="x = 2" />（能取到 ✅）</p>
                  </div>
                  <p className="text-green-600 font-bold mt-1">最小值 = 4，当 x = 2 时取到</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold text-gray-800 mb-1">例2：已知 <Math tex="a > 0, b > 0, a + b = 6" />，求 <Math tex="ab" /> 的最大值</p>
                  <div className="pl-3 border-l-2 border-purple-300 space-y-0.5">
                    <p className="leading-7 text-red-600">❌ 分析：<Math tex="a+b=6" /> 是固定的，能用</p>
                    <p className="leading-7 text-green-700">✅ 套公式：<Math tex="a + b = 6 \geq 2\sqrt{ab}" /></p>
                    <p className="leading-7"><Math tex="3 \geq \sqrt{ab}" />，所以 <Math tex="ab \leq 9" /></p>
                  </div>
                  <p className="text-green-600 font-bold mt-1">最大值 = 9，当 a = b = 3 时取到</p>
                </div>
              </div>
            </div>

            {/* 做题决策流程 */}
            <div className="bg-blue-50 rounded-xl border border-blue-200 p-3">
              <p className="font-bold text-blue-800 text-lg leading-tight mb-2">🧭 遇到求最值的题，按这个流程走</p>
              <div className="space-y-1.5">
                <div className="flex items-start gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0 text-sm font-bold">1</span>
                  <div className="flex-1 bg-white rounded-lg p-2 border border-blue-100">
                    <p className="leading-7">检查 <strong className="text-red-600">a, b 是不是正数</strong> → 不是正数？<span className="text-red-500 font-bold">不能用基本不等式！</span></p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0 text-sm font-bold">2</span>
                  <div className="flex-1 bg-white rounded-lg p-2 border border-blue-100">
                    <p className="leading-7"><strong>乘起来</strong>是固定的？→ 套公式求<span className="text-orange-600 font-bold">和的最小值</span></p>
                    <p className="leading-7"><strong>加起来</strong>是固定的？→ 套公式求<span className="text-green-600 font-bold">积的最大值</span></p>
                    <p className="leading-7 text-gray-500">都不固定？→ 用<strong>换元凑形</strong>或<strong>1的代换</strong>先凑出来（见下页）</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0 text-sm font-bold">3</span>
                  <div className="flex-1 bg-white rounded-lg p-2 border border-blue-100">
                    <p className="leading-7">验证 <strong>a = b 能不能取到</strong> → 取不到就<span className="text-red-500 font-bold">没有最值</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* 进阶技巧 */}
            <PageBreak label="基本不等式进阶技巧" />
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border-2 border-amber-300 p-4">
              <p className="font-black text-amber-900 text-lg mb-1">🔥 进阶技巧：遇到不能直接套公式怎么办？</p>
              <p className="text-gray-600 mb-3">考试题往往不会直接给你"和"或"积"是固定的，需要你自己"凑"出来。</p>

              <div className="space-y-3">
                {/* 技巧1：换元凑形 */}
                <div className="bg-white rounded-lg p-4 border border-amber-200">
                  <p className="font-bold text-amber-800 text-base mb-1">技巧一：换元凑形</p>
                  <p className="text-gray-500 mb-2">看到 <Math tex="x + \frac{k}{x-a}" /> <span className="text-amber-700 font-bold">就要</span>把 <Math tex="x" /> 拆成 <Math tex="(x-a)+a" />，让乘起来变成固定的</p>

                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="font-bold text-gray-800 mb-1">例：已知 <Math tex="x > 1" />，求 <Math tex="x + \frac{4}{x-1}" /> 的最小值</p>
                    <div className="pl-3 border-l-2 border-amber-300 space-y-0.5">
                      <p className="leading-8 text-red-600">❌ 分析：<Math tex="x \cdot \frac{4}{x-1} = \frac{4x}{x-1}" /> 不是固定的，不能直接用</p>
                      <p className="leading-8 text-green-700">✅ <strong>第①步 拆</strong>：<Math tex="x = (x{-}1)+1" /><span className="text-gray-500">　（因为分母是 <Math tex="x{-}1" />，所以把 <Math tex="x" /> 也凑出 <Math tex="x{-}1" />）</span></p>
                      <p className="leading-8 pl-4"><Math tex="x + \frac{4}{x-1} \;=\; \underbrace{(x{-}1) + \frac{4}{x-1}}_{\text{只需求这部分的最小值}} + 1" /></p>
                      <p className="leading-8 text-gray-600">　　常数 <Math tex="+1" /> 不影响求最值，所以只要算 <Math tex="(x{-}1)+\frac{4}{x-1}" /> 的最小值，最后加1就行</p>
                      <p className="leading-8">　<strong>第②步 验证</strong>：<Math tex="(x{-}1) \cdot \frac{4}{x-1} = 4" /> <span className="text-green-600 font-bold">乘起来是固定的！可以套公式</span></p>
                      <p className="leading-8">　<strong>第③步 套公式</strong>：<Math tex="(x{-}1) + \frac{4}{x-1} \geq 2\sqrt{4} = 4" />，加上常数1，原式 <Math tex="\geq 4 + 1 = 5" /></p>
                      <p className="leading-8">　<strong>等号验证</strong>：<Math tex="x{-}1 = \frac{4}{x-1}" /> <span className="text-blue-600">解得</span> <Math tex="x = 3" /> ✓</p>
                    </div>
                  </div>
                </div>

                {/* 技巧2：1的代换 */}
                <div className="bg-white rounded-lg p-4 border border-amber-200">
                  <p className="font-bold text-amber-800 text-base mb-1">技巧二：1的代换</p>
                  <p className="text-gray-500 mb-2">已知 <Math tex="a+b=k" />，求含 <Math tex="\frac{1}{a},\frac{1}{b}" /> 的式子 <span className="text-amber-700 font-bold">就要</span>把 <Math tex="(a+b)" /> 乘进去（等于乘以 <Math tex="k" />）</p>

                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="font-bold text-gray-800 mb-1">例：已知 <Math tex="a > 0, b > 0, a+b=1" />，求 <Math tex="\frac{1}{a}+\frac{1}{b}" /> 的最小值</p>
                    <div className="pl-3 border-l-2 border-amber-300 space-y-0.5">
                      <p className="leading-8 text-red-600">❌ 分析：<Math tex="\frac{1}{a}" /> 和 <Math tex="\frac{1}{b}" /> 的和、积都不固定，不能直接用</p>
                      <p className="leading-8 text-green-700">✅ <strong>第①步 乘进去</strong>：因为 <Math tex="a{+}b=1" />，乘以它等于乘以1，值不变</p>
                      <p className="leading-8 pl-4"><Math tex="\frac{1}{a}+\frac{1}{b} = (\frac{1}{a}+\frac{1}{b}) \times (a+b)" /></p>
                      <p className="leading-8">　<strong>第②步 展开</strong>：<Math tex="= 1 + \frac{b}{a} + \frac{a}{b} + 1 = 2 + \frac{b}{a} + \frac{a}{b}" /></p>
                      <p className="leading-8">　<strong>第③步 验证</strong>：<Math tex="\frac{b}{a} \cdot \frac{a}{b} = 1" /> <span className="text-green-600">乘起来是固定的！</span></p>
                      <p className="leading-8">　<strong>第④步 套公式</strong>：<Math tex="\frac{b}{a}+\frac{a}{b} \geq 2\sqrt{1} = 2" /></p>
                      <p className="leading-8">　<strong>结论</strong>：<Math tex="\frac{1}{a}+\frac{1}{b} \geq 2+2 = 4" /></p>
                      <p className="leading-8">　<strong>等号验证</strong>：<Math tex="a=b=\frac{1}{2}" /> 时取等 ✓</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 技巧速查 */}
            <div className="bg-white rounded-xl border border-gray-200 p-3">
              <p className="font-bold text-gray-800 text-base mb-2">📋 技巧速查：看到什么题型，用什么招</p>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-200 p-2 text-left font-bold">题目长什么样</th>
                    <th className="border border-gray-200 p-2 text-left font-bold">用什么招</th>
                    <th className="border border-gray-200 p-2 text-left font-bold">关键动作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 p-2"><Math tex="x + \frac{k}{x}" />，积直接固定</td>
                    <td className="border border-gray-200 p-2 text-orange-700 font-bold">直接套公式</td>
                    <td className="border border-gray-200 p-2">验证乘积是常数，套 <Math tex="\geq 2\sqrt{k}" /></td>
                  </tr>
                  <tr className="bg-amber-50">
                    <td className="border border-gray-200 p-2"><Math tex="x + \frac{k}{x-a}" />，积不固定</td>
                    <td className="border border-gray-200 p-2 text-amber-700 font-bold">换元凑形</td>
                    <td className="border border-gray-200 p-2">拆 <Math tex="x=(x{-}a)+a" />，常数搬走</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-2">已知 <Math tex="a+b=k" />，求 <Math tex="\frac{1}{a}+\frac{1}{b}" /></td>
                    <td className="border border-gray-200 p-2 text-blue-700 font-bold">1的代换</td>
                    <td className="border border-gray-200 p-2">原式 <Math tex="\times (a+b) = k" />，展开配对</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <PageBreak label="即时练习：基本不等式" />
            <PracticeCard
              title="✏️ 即时练习：基本不等式"
              questions={ineqPractice2}
              explanations={inequalityExplanations}
            />

            <CalloutCard variant="warning" title="⚠️ 易错点">
              <div className="space-y-2 text-base leading-7">
                <p><strong>忘记检查"一正"</strong>：题目没说 a, b {'>'} 0 就不能直接用基本不等式！</p>
                <p><strong>忘记检查"三相等"</strong>：如果等号条件与题目矛盾，最值不存在。比如 a + b = 6 且 a ≠ b，那 ab 没有最大值（只能无限接近但取不到9）。</p>
                <p><strong>和定积最大 vs 积定和最小搞混</strong>：口诀"和定积大，积定和小"。</p>
              </div>
            </CalloutCard>

            {/* 自测清单 */}
            <div className="bg-green-50 rounded-xl border border-green-200 p-3">
              <p className="font-bold text-green-800 text-base mb-1">✅ 自测：全部打勾就过关</p>
              <div className="text-gray-700 leading-7 space-y-0.5">
                <p>□　积定求和最小，和定求积最大</p>
                <p>□　不能直接套公式时，会用换元凑形 / 1的代换</p>
                <p>□　做题第一步先检查<strong className="text-red-600">一正、二定、三相等</strong></p>
              </div>
            </div>
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
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-xl p-3">
              <p className="font-bold text-indigo-900 text-xl mb-1">🔗 "三胞胎"关系：函数、方程、不等式</p>
              <p className="text-gray-700 leading-7 mb-1">同一个二次表达式 <Math tex="ax^2 + bx + c" />，可以出现在三种场景中：</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <div className="bg-white rounded-lg p-2 border border-indigo-100 text-center">
                  <p className="font-bold text-indigo-800 mb-0.5">二次函数</p>
                  <p><Math tex="y = ax^2 + bx + c" /></p>
                  <p className="text-gray-500">→ 画图像（抛物线）</p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-indigo-100 text-center">
                  <p className="font-bold text-indigo-800 mb-0.5">二次方程</p>
                  <p><Math tex="ax^2 + bx + c = 0" /></p>
                  <p className="text-gray-500">→ 找根（与x轴交点）</p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-indigo-100 text-center">
                  <p className="font-bold text-indigo-800 mb-0.5">二次不等式</p>
                  <p><Math tex="ax^2 + bx + c > 0" /></p>
                  <p className="text-gray-500">→ 找图像在x轴上方的部分</p>
                </div>
              </div>
              <p className="text-indigo-800 font-bold mt-1.5 text-center text-base">解不等式 = 在函数图像上找满足条件的 x 的范围</p>
            </div>

            {/* 看图理解口诀 */}
            <div className="bg-white rounded-xl border border-gray-200 p-3">
              <p className="font-bold text-gray-800 text-lg mb-1">👀 看图秒懂：以 <Math tex="(x-1)(x-4)" /> 为例</p>
              <p className="text-gray-500 leading-6 mb-2">因式分解后根是 1 和 4，抛物线和 x 轴交于这两个点。<strong>看曲线在 x 轴的哪一边</strong>就知道答案：</p>

              {/* 两个图并排 */}
              <div className="grid grid-cols-2 gap-2 mb-2">
                {/* > 0：大于取两边 */}
                <div className="rounded-lg border-2 border-green-300 overflow-hidden">
                  <div className="bg-green-50 px-2 py-1 text-center">
                    <p className="font-bold text-green-700 text-sm"><Math tex="> 0" /> → 大于取<strong>两边</strong></p>
                  </div>
                  <Mafs viewBox={{ x: [-0.8, 5.8], y: [-2.8, 3] }} preserveAspectRatio={false} height={120}>
                    <Coordinates.Cartesian xAxis={{ lines: false, labels: (x) => ([1,2,3,4].includes(x) ? x : '') }} yAxis={{ lines: false, labels: () => '' }} />
                    <Plot.OfX y={(x) => (x - 1) * (x - 4)} color="#d1d5db" weight={1.5} />
                    <Plot.OfX y={(x) => (x - 1) * (x - 4)} domain={[-0.8, 1]} color="#22c55e" weight={3.5} />
                    <Plot.OfX y={(x) => (x - 1) * (x - 4)} domain={[4, 5.8]} color="#22c55e" weight={3.5} />
                    <Point x={1} y={0} color="#ef4444" />
                    <Point x={4} y={0} color="#ef4444" />
                    <MafsText x={-0.3} y={2} size={13} color="#22c55e">{'>0 ✓'}</MafsText>
                    <MafsText x={5.2} y={2} size={13} color="#22c55e">{'>0 ✓'}</MafsText>
                  </Mafs>
                  <p className="text-center text-green-700 font-bold text-sm py-0.5"><Math tex="x < 1" /> 或 <Math tex="x > 4" /></p>
                </div>
                {/* < 0：小于取中间 */}
                <div className="rounded-lg border-2 border-red-300 overflow-hidden">
                  <div className="bg-red-50 px-2 py-1 text-center">
                    <p className="font-bold text-red-700 text-sm"><Math tex="< 0" /> → 小于取<strong>中间</strong></p>
                  </div>
                  <Mafs viewBox={{ x: [-0.8, 5.8], y: [-2.8, 3] }} preserveAspectRatio={false} height={120}>
                    <Coordinates.Cartesian xAxis={{ lines: false, labels: (x) => ([1,2,3,4].includes(x) ? x : '') }} yAxis={{ lines: false, labels: () => '' }} />
                    <Plot.OfX y={(x) => (x - 1) * (x - 4)} color="#d1d5db" weight={1.5} />
                    <Plot.OfX y={(x) => (x - 1) * (x - 4)} domain={[1, 4]} color="#ef4444" weight={3.5} />
                    <Point x={1} y={0} color="#ef4444" />
                    <Point x={4} y={0} color="#ef4444" />
                    <MafsText x={2.5} y={-1.8} size={13} color="#ef4444">{'<0'}</MafsText>
                  </Mafs>
                  <p className="text-center text-red-700 font-bold text-sm py-0.5"><Math tex="1 < x < 4" /></p>
                </div>
              </div>

            </div>

            {/* 解集速查表（紧凑版） */}
            <div className="bg-white rounded-xl border border-gray-200 p-3">
              <p className="font-bold text-gray-800 text-base mb-1">📊 解集速查表（设 <Math tex="a > 0" />，根 <Math tex="x_1 < x_2" />）</p>
              <table className="w-full text-base border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-3 py-1.5 text-left">判别式</th>
                    <th className="border border-gray-300 px-3 py-1.5 text-center text-green-700"><Math tex="> 0" /> 的解集</th>
                    <th className="border border-gray-300 px-3 py-1.5 text-center text-red-700"><Math tex="< 0" /> 的解集</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-3 py-1.5 font-bold"><Math tex="\Delta > 0" /></td>
                    <td className="border border-gray-300 px-3 py-1.5 text-center"><Math tex="x < x_1" /> 或 <Math tex="x > x_2" /><br/><span className="text-green-600 font-bold text-sm">大于取两边</span></td>
                    <td className="border border-gray-300 px-3 py-1.5 text-center"><Math tex="x_1 < x < x_2" /><br/><span className="text-red-600 font-bold text-sm">小于取中间</span></td>
                  </tr>
                  <tr className="bg-amber-50">
                    <td className="border border-gray-300 px-3 py-1.5 font-bold"><Math tex="\Delta = 0" /></td>
                    <td className="border border-gray-300 px-3 py-1.5 text-center"><Math tex="x \neq x_0" /> 的所有实数</td>
                    <td className="border border-gray-300 px-3 py-1.5 text-center"><Math tex="\varnothing" />（空集）</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-1.5 font-bold"><Math tex="\Delta < 0" /></td>
                    <td className="border border-gray-300 px-3 py-1.5 text-center"><Math tex="\mathbb{R}" />（全体实数）</td>
                    <td className="border border-gray-300 px-3 py-1.5 text-center"><Math tex="\varnothing" />（空集）</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-red-600 font-bold mt-1.5 text-sm">⚠️ <Math tex="a < 0" /> 时先乘 <Math tex="-1" /> 翻转不等号，再查表。<Math tex="\leq / \geq" /> 时端点要取。</p>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 6: 综合测试 */}
      {/* ════════════════════════════════════════════════════════ */}
      <PageBreak label="综合测试" />
      <section id="ineq-quiz" className="mb-4 scroll-mt-4">
        <Collapsible title="六、综合测试（高考真题 + 精华题·11题）" defaultOpen storageKey="ineq:quiz">
          <QuizPanel module="inequality" questions={inequalityQuizQuestions} title="不等式综合测试" explanations={inequalityExplanations} />
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* 打印模式答案区 */}
      {/* ════════════════════════════════════════════════════════ */}
      {isPrinting && printOptions.showAnswers && <InequalityAnswers />}
    </LessonLayout>
  </div>
);
} 
