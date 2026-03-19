import { Math, Collapsible, SpeakButton, QuizPanel, PageHeader, CalloutCard, PracticeCard, LessonLayout, ExportButton, PageBreak } from '@/components/shared';
import { prereqNarrations } from './data/narrations';
import { prereqSelfTest } from './data/selftest';
import { prereqPractice1, prereqPractice2, prereqPractice4, prereqPractice5, prereqPractice6 } from './data/practice';
import { prereqProgressItems } from './data/progress';
import { PrereqAnswers, prereqExplanations } from './prereq-answers';
import { useProgress } from '@/hooks';
import { usePrintMode } from '@/hooks/usePrintMode';
import { scrollToId } from '@/lib/scroll';

export function PrereqPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('prereq', prereqProgressItems);
  const { isPrinting, printOptions } = usePrintMode();

  return (
    <div>
      <PageHeader
        stage="前置准备"
        variant="prereq"
        title="1.0 前置知识回顾"
        narration={prereqNarrations.intro}
        subtitle="学复数之前，先确保这些初中数学没问题"
        tags={[
          { label: '约30分钟', color: 'amber' },
          { label: '初中基础', color: 'green' },
        ]}
      />

      <div className="flex justify-end mb-4 print:hidden">
        <ExportButton title="1.0 前置知识回顾" />
      </div>

      {/* Knowledge Map */}
      <div className="bg-gray-50 rounded-xl p-3 mb-3 text-sm text-gray-600 print:p-1 print:mb-0.5">
        <p className="font-bold text-gray-800 mb-1 print:mb-0.5">📋 知识地图</p>
        <div className="grid grid-cols-2 gap-1 print:gap-y-0.5">
          <button onClick={() => scrollToId('prereq-numclass')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">一、数的分类 → 复数在数系中的位置</button>
          <button onClick={() => scrollToId('prereq-square')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">二、平方与平方根 → 计算复数模的基础</button>
          <button onClick={() => scrollToId('prereq-sqtable')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">三、常用平方数 → 心算提速</button>
          <button onClick={() => scrollToId('prereq-fraction')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">四、分数运算 → 复数除法结果经常是分数</button>
          <button onClick={() => scrollToId('prereq-poly')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">五、多项式展开 → 复数乘法的核心</button>
          <button onClick={() => scrollToId('prereq-negative')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">六、负数运算 → i²=−1 必须处理负数</button>
          <button onClick={() => scrollToId('prereq-remainder')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">七、除以4求余数 → 判断 i 的幂次</button>
        </div>
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>
      <section id="prereq-numclass" className="mb-6 scroll-mt-4 print:mb-4">
        <Collapsible title="一、数的分类" defaultOpen storageKey="prereq:num-class" headerExtra={<SpeakButton text={prereqNarrations.numClass} />}>
          {/* 一览表 */}
          <div className="mb-4 print:mb-2">
            <p className="font-bold text-gray-800 text-lg mb-2 print:mb-1">先看全局：5 种数一览表</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-200 px-3 py-2 text-center w-16">层级</th>
                    <th className="border border-gray-200 px-3 py-2 text-left">名称</th>
                    <th className="border border-gray-200 px-3 py-2 text-left">举例</th>
                    <th className="border border-gray-200 px-3 py-2 text-left">一句话解释</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-200 px-3 py-2 text-center">1</td><td className="border border-gray-200 px-3 py-2">自然数</td><td className="border border-gray-200 px-3 py-2 text-gray-700">0, 1, 2, 3 …</td><td className="border border-gray-200 px-3 py-2">数东西用的数</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-200 px-3 py-2 text-center">2</td><td className="border border-gray-200 px-3 py-2">整数</td><td className="border border-gray-200 px-3 py-2 text-gray-700">…-2, -1, 0, 1, 2…</td><td className="border border-gray-200 px-3 py-2">自然数 + 负数</td></tr>
                  <tr><td className="border border-gray-200 px-3 py-2 text-center">3</td><td className="border border-gray-200 px-3 py-2">有理数</td><td className="border border-gray-200 px-3 py-2 text-gray-700"><Math tex="\frac{1}{2},\ -\frac{3}{4},\ 0.75" /></td><td className="border border-gray-200 px-3 py-2">能写成分数的数</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-200 px-3 py-2 text-center">4</td><td className="border border-gray-200 px-3 py-2">实数</td><td className="border border-gray-200 px-3 py-2 text-gray-700"><Math tex="\sqrt{2},\ \pi" />，所有小数</td><td className="border border-gray-200 px-3 py-2">数轴上所有的点</td></tr>
                  <tr className="bg-blue-50"><td className="border border-gray-200 px-3 py-2 text-center font-bold">5</td><td className="border border-gray-200 px-3 py-2 font-bold text-blue-700">复数</td><td className="border border-gray-200 px-3 py-2 text-gray-700"><Math tex="3+2i,\ -i" /></td><td className="border border-gray-200 px-3 py-2">实数 + 虚数（你要学的）</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 mt-2 print:mt-1">每一层都<strong>包含</strong>上一层。复数最大，自然数最小。</p>
          </div>

          {/* 升级故事 */}
          <div className="mb-4 print:mb-3">
            <p className="font-bold text-gray-800 text-lg mb-2 print:mb-1">为什么要一层层升级？</p>
            <p className="text-gray-700 mb-2 print:mb-1">每次升级，都是因为<strong>旧的数解决不了新问题</strong>：</p>

            <div className="space-y-2 print:space-y-1.5">
              <div className="border-l-4 border-gray-300 pl-4">
                <p className="font-bold text-gray-800">第1次升级：自然数 → 整数</p>
                <p className="text-gray-600"><Math tex="3 - 5 = ?" /> 自然数算不了 → 加入<strong>负数</strong>，变成整数</p>
              </div>
              <div className="border-l-4 border-emerald-300 pl-4">
                <p className="font-bold text-gray-800">第2次升级：整数 → 有理数</p>
                <p className="text-gray-600"><Math tex="1 \div 3 = ?" /> 整数算不了 → 加入<strong>分数</strong>，变成有理数</p>
              </div>
              <div className="border-l-4 border-amber-300 pl-4">
                <p className="font-bold text-gray-800">第3次升级：有理数 → 实数</p>
                <p className="text-gray-600"><Math tex="\sqrt{2} = ?" /> 写不成分数 → 加入<strong>无理数</strong>，变成实数</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 rounded-r-lg py-3 pr-3" style={{ breakInside: 'avoid' }}>
                <p className="font-bold text-blue-700">第4次升级：实数 → 复数</p>
                <p className="text-gray-600 mb-1"><Math tex="x^2 = -1" /> 实数的平方都 ≥ 0，解不了</p>
                <p className="text-gray-600 mb-1">→ 发明<strong>虚数单位 <Math tex="i" /></strong>，规定 <Math tex="i^2 = -1" /></p>
                <p className="text-gray-600">→ 实数和虚数组合写成 <Math tex="a + bi" />，就是<strong>复数</strong></p>
              </div>
            </div>
          </div>

          {/* 进化链 */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-4 text-center mb-4">
            <p className="font-bold text-gray-700 mb-1">记住这条线</p>
            <p className="text-lg font-bold">
              自然数 → 整数 → 有理数 → 实数 → <span className="text-blue-600">复数</span>
            </p>
            <p className="text-gray-500 mt-2">遇到新问题，就升级工具箱。复数是数的<strong>第5次自然升级</strong>。</p>
          </div>

          <PracticeCard questions={prereqPractice1} explanations={prereqExplanations} optionCols={2} printOptionCols={2} />

          <CalloutCard variant="warning" title="易错点" className="mt-4">
            <p>• <strong>0 是自然数</strong>，也是整数、有理数、实数</p>
            <p>• 无限不循环小数（如 √2、π）是<strong>无理数</strong>，不是有理数</p>
            <p>• 每层都<strong>包含</strong>上一层：复数 ⊃ 实数 ⊃ 有理数 ⊃ 整数 ⊃ 自然数</p>
          </CalloutCard>
        </Collapsible>
      </section>

      <section id="prereq-square" className="mb-6 scroll-mt-4">
        <Collapsible title="二、平方与平方根" defaultOpen storageKey="prereq:square" headerExtra={<SpeakButton text={prereqNarrations.square} />}>
          <div className="space-y-2.5 text-base text-gray-700 print:space-y-2">
            <div className="grid grid-cols-2 gap-2 print:gap-2">
              <div className="border-l-4 border-gray-300 pl-3 py-1">
                <p className="font-bold text-gray-800 mb-1">1. 平方 = 自己乘自己</p>
                <div className="space-y-0.5 font-mono text-[15px] leading-6">
                  <p><Math tex="3^2 = 9" /></p>
                  <p><Math tex="(-3)^2 = 9" /></p>
                  <p><Math tex="5^2 = 25" /></p>
                  <p><Math tex="0.1^2 = 0.01" /></p>
                </div>
              </div>
              <div className="border-l-4 border-blue-300 pl-3 py-1">
                <p className="font-bold text-gray-800 mb-1">2. 平方根：已知平方，求原数</p>
                <div className="space-y-0.5 font-mono text-[15px] leading-6">
                  <p><Math tex="\sqrt{9} = 3" /></p>
                  <p><Math tex="\sqrt{25} = 5" /></p>
                  <p><Math tex="\sqrt{0} = 0" /></p>
                  <p><Math tex="\sqrt{2} \approx 1.414" /></p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-3 py-1">
              <p className="font-bold text-blue-800 mb-1">3. 最重要的结论</p>
              <div className="grid grid-cols-3 gap-1.5 text-center text-[15px] leading-6">
                <div className="rounded border border-gray-200 px-2 py-1"><Math tex="\text{正数}^2 > 0" /></div>
                <div className="rounded border border-gray-200 px-2 py-1"><Math tex="\text{负数}^2 > 0" /></div>
                <div className="rounded border border-gray-200 px-2 py-1"><Math tex="0^2 = 0" /></div>
              </div>
              <p className="mt-1.5">所以 <strong>任意实数平方都不可能小于 0</strong>。这就是为什么遇到 <Math tex="x^2=-1" /> 时，实数范围解不出来，后面才要引入 <Math tex="i" />，并规定 <Math tex="i^2=-1" />。</p>
            </div>

            <div className="grid grid-cols-[1.2fr_0.8fr] gap-2 print:gap-2">
              <div className="border-l-4 border-red-400 pl-3 py-1">
                <p className="font-bold text-red-700 mb-1">4. 括号陷阱：这个最容易错</p>
                <div className="space-y-1 text-[15px] leading-6">
                  <p><Math tex="(-3)^2 = (-3)\times(-3)=9" /> ：先把 <Math tex="-3" /> 当成整体</p>
                  <p><Math tex="-3^2 = -(3^2)=-9" /> ：先算幂，再加负号</p>
                </div>
                <p className="mt-1.5 font-bold text-gray-800">口诀：有括号，整体平方；没括号，先算幂再带符号。</p>
              </div>
              <div className="border-l-4 border-amber-400 pl-3 py-1">
                <p className="font-bold text-amber-800 mb-1">5. 两个顺手记忆</p>
                <div className="space-y-0.5 text-[15px] leading-6">
                  <p><Math tex="\sqrt{\phantom{x}}" /> 默认取正值</p>
                  <p><Math tex="|-3|=3" /> 是绝对值</p>
                  <p><Math tex="|3+4i|=5" /> 叫模</p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-emerald-400 pl-3 py-1">
              <p className="font-bold text-emerald-800 mb-1">6. 常用平方数：顺手背熟</p>
              <div className="grid grid-cols-4 gap-1.5 text-sm text-center">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((n) => (
                  <div key={n} className="rounded border border-gray-200 px-2 py-1 bg-white">
                    <Math tex={`${n}^2=${n * n}`} />
                  </div>
                ))}
              </div>
              <div className="mt-1.5 space-y-0.5 text-[15px] leading-6 text-gray-700">
                <p><Math tex="3^2+4^2=25\Rightarrow \sqrt{25}=5" /></p>
                <p><Math tex="5^2+12^2=169\Rightarrow \sqrt{169}=13" /></p>
                <p><Math tex="1^2+1^2=2\Rightarrow \sqrt{2}\approx1.414" /></p>
              </div>
            </div>
          </div>
          <PracticeCard questions={prereqPractice2} explanations={prereqExplanations} optionCols={4} printOptionCols={4} />
          <CalloutCard variant="warning" title="易错点" compact className="mt-2 text-base leading-6">
            <p>• <strong><Math tex="(-3)^2 = 9" /></strong>，不是 -9！括号很重要：<Math tex="-3^2 = -(3^2) = -9" /></p>
            <p>• <strong><Math tex="\sqrt{\phantom{x}}" /> 号默认取正值</strong>：<Math tex="\sqrt{9} = 3" />，不是 ±3</p>
            <p>• <Math tex="|\;|" /> 在初中是绝对值，在复数里是模，计算方法不同但含义类似</p>
          </CalloutCard>
        </Collapsible>
      </section>

      <PageBreak label="分数运算" />

      <section id="prereq-fraction" className="mb-6 scroll-mt-4">
        <Collapsible title="四、分数运算" defaultOpen storageKey="prereq:fraction" headerExtra={<SpeakButton text={prereqNarrations.fraction} />}>
          <p className="text-sm text-blue-600 mb-2">分数运算只记 4 件事：通分、乘法、除法、约分。</p>
          <div className="space-y-1.5 text-base text-gray-700">
            <p className="text-gray-700">分数就是<strong>“整体的一部分”</strong>：分母表示切成几份，分子表示取了几份。复数除法最后经常会落到分数，所以这里一定要熟。</p>
            <div className="grid grid-cols-2 gap-2.5 print:gap-2">
              <div className="space-y-1.5">
                <div>
                  <p className="font-bold text-gray-800 mb-1">1. 加减：先看分母一不一样</p>
                  <div className="bg-gray-50 rounded-lg p-2.5 space-y-2">
                    <p><strong>同分母</strong>：直接加减分子</p>
                    <Math tex="\frac{2}{5} + \frac{1}{5} = \frac{3}{5}" display />
                    <p><strong>异分母</strong>：先通分，再加减</p>
                    <div className="bg-white rounded-lg border border-gray-200 p-2.5 text-center text-gray-700 space-y-1">
                      <p><Math tex="\frac{1}{2} + \frac{1}{3}" /> 不能直接算，因为分母不同</p>
                      <p>通分到 <Math tex="6" />：<Math tex="\frac{1}{2} = \frac{3}{6},\ \frac{1}{3} = \frac{2}{6}" /></p>
                      <p><Math tex="\frac{3}{6} + \frac{2}{6} = \frac{5}{6}" /></p>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-2.5 text-blue-800">
                  <p className="font-bold mb-0.5">复数里为什么要会分数？</p>
                  <Math tex="\frac{4-2i}{2} = \frac{4}{2} - \frac{2}{2}i = 2 - i" display />
                </div>
              </div>
              <div className="space-y-1.5">
                <div>
                  <p className="font-bold text-gray-800 mb-1">2. 乘法：分子乘分子，分母乘分母</p>
                  <div className="bg-gray-50 rounded-lg p-2.5">
                    <Math tex="\frac{2}{3} \times \frac{4}{5} = \frac{8}{15}" display />
                  </div>
                </div>
                <div>
                  <p className="font-bold text-gray-800 mb-1">3. 除法：翻转后面，变乘法</p>
                  <div className="bg-gray-50 rounded-lg p-2.5">
                    <Math tex="\frac{2}{3} \div \frac{4}{5} = \frac{2}{3} \times \frac{5}{4} = \frac{10}{12} = \frac{5}{6}" display />
                  </div>
                </div>
                <div>
                  <p className="font-bold text-gray-800 mb-1">4. 约分：找公因数，一次除到底</p>
                  <div className="bg-gray-50 rounded-lg p-2.5 grid grid-cols-3 gap-1.5 text-center text-[15px]">
                    <p><Math tex="\frac{4}{6} = \frac{2}{3}" /><br /><span className="text-gray-700 text-sm">÷2</span></p>
                    <p><Math tex="\frac{6}{10} = \frac{3}{5}" /><br /><span className="text-gray-700 text-sm">÷2</span></p>
                    <p><Math tex="\frac{12}{15} = \frac{4}{5}" /><br /><span className="text-gray-700 text-sm">÷3</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3 mb-1.5">
            <p className="font-bold text-gray-800 text-lg mb-1.5">运算口诀速查</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-base">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-200 px-3 py-1.5 text-left w-16">运算</th>
                    <th className="border border-gray-200 px-3 py-1.5 text-left">口诀</th>
                    <th className="border border-gray-200 px-3 py-1.5 text-left">例子</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-200 px-3 py-1.5">加减</td><td className="border border-gray-200 px-3 py-1.5">先通分，再加减分子</td><td className="border border-gray-200 px-3 py-1.5"><Math tex="\frac{1}{2}+\frac{1}{3}=\frac{5}{6}" /></td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-200 px-3 py-1.5">乘法</td><td className="border border-gray-200 px-3 py-1.5">分子×分子，分母×分母</td><td className="border border-gray-200 px-3 py-1.5"><Math tex="\frac{2}{3}\times\frac{4}{5}=\frac{8}{15}" /></td></tr>
                  <tr><td className="border border-gray-200 px-3 py-1.5">除法</td><td className="border border-gray-200 px-3 py-1.5">翻转后面，变乘法</td><td className="border border-gray-200 px-3 py-1.5"><Math tex="\frac{2}{3}\div\frac{4}{5}=\frac{2}{3}\times\frac{5}{4}" /></td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-200 px-3 py-1.5">约分</td><td className="border border-gray-200 px-3 py-1.5">找最大公因数，同时除</td><td className="border border-gray-200 px-3 py-1.5"><Math tex="\frac{18}{24}=\frac{3}{4}" />（÷6）</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="text-lg">
            <PracticeCard questions={prereqPractice4} explanations={prereqExplanations} optionCols={4} printOptionCols={4} />
          </div>
        </Collapsible>
      </section>

      <PageBreak label="多项式展开" />

      <section id="prereq-poly" className="mb-6 scroll-mt-4">
        <Collapsible title="五、多项式展开（复数乘法的核心）" defaultOpen storageKey="prereq:polynomial" headerExtra={<SpeakButton text={prereqNarrations.polynomial} />}>
          <p className="text-base text-blue-700 mb-2">学会 4 个核心展开：分配律、FOIL、完全平方、平方差。</p>
          <div className="space-y-2.5 text-base text-gray-800">
            <div className="grid grid-cols-2 gap-3 print:gap-2.5">
              <div className="space-y-2.5">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold text-[17px] text-gray-900 mb-1.5">1. 分配律</p>
                  <Math tex="a(b+c) = ab + ac" display />
                  <div className="mt-1.5 space-y-1 text-gray-800">
                    <p><Math tex="3(x+2) = 3x + 6" /></p>
                    <p><Math tex="2(1+i) = 2 + 2i" /></p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold text-[17px] text-gray-900 mb-1.5">2. 两括号相乘（FOIL）</p>
                  <Math tex="(a+b)(c+d) = ac + ad + bc + bd" display />
                  <p className="text-gray-700 mb-1.5">口诀：首首 + 首尾 + 尾首 + 尾尾</p>
                  <div className="space-y-1.5 text-gray-800">
                    <p><Math tex="(2+3)(4+5) = 8+10+12+15 = 45" /></p>
                    <p><Math tex="(2+i)(3-i) = 6-2i+3i-i^2 = 7+i" /></p>
                  </div>
                </div>
              </div>
              <div className="space-y-2.5">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold text-[17px] text-gray-900 mb-1.5">3. 完全平方公式</p>
                  <div className="space-y-1">
                    <Math tex="(a+b)^2 = a^2 + 2ab + b^2" display />
                    <Math tex="(a-b)^2 = a^2 - 2ab + b^2" display />
                  </div>
                  <p className="mt-1.5 text-gray-800"><Math tex="(1+i)^2 = 1 + 2i + i^2 = 2i" /></p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-900">
                  <p className="font-bold text-[17px] mb-1.5">4. 平方差公式：复数除法的关键</p>
                  <Math tex="(a+b)(a-b) = a^2 - b^2" display />
                  <div className="space-y-1 mt-1.5">
                    <p><Math tex="(1+i)(1-i) = 1 - i^2 = 2" /></p>
                    <p><Math tex="(2+3i)(2-3i) = 4 - 9i^2 = 13" /></p>
                    <p><Math tex="(a+bi)(a-bi) = a^2 + b^2" />，结果总是正实数</p>
                  </div>
                  <p className="mt-1.5">除法乘共轭，本质就是把分母变成实数。</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3 mb-2">
            <p className="font-bold text-gray-900 text-lg mb-1.5">展开公式速查表</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-base text-gray-800">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-200 px-3 py-1.5 text-left w-28">公式</th>
                    <th className="border border-gray-200 px-3 py-1.5 text-left">展开结果</th>
                    <th className="border border-gray-200 px-3 py-1.5 text-left">复数例子</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-200 px-3 py-1.5">分配律</td><td className="border border-gray-200 px-3 py-1.5"><Math tex="a(b+c)=ab+ac" /></td><td className="border border-gray-200 px-3 py-1.5"><Math tex="2(1+i)=2+2i" /></td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-200 px-3 py-1.5">FOIL</td><td className="border border-gray-200 px-3 py-1.5"><Math tex="(a+b)(c+d)=ac+ad+bc+bd" /></td><td className="border border-gray-200 px-3 py-1.5"><Math tex="(2+i)(3-i)=7+i" /></td></tr>
                  <tr><td className="border border-gray-200 px-3 py-1.5">完全平方</td><td className="border border-gray-200 px-3 py-1.5"><Math tex="(a+b)^2=a^2+2ab+b^2" /></td><td className="border border-gray-200 px-3 py-1.5"><Math tex="(1+i)^2=2i" /></td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-200 px-3 py-1.5">平方差</td><td className="border border-gray-200 px-3 py-1.5"><Math tex="(a+b)(a-b)=a^2-b^2" /></td><td className="border border-gray-200 px-3 py-1.5"><Math tex="(1+i)(1-i)=2" /></td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <PracticeCard questions={prereqPractice5} explanations={prereqExplanations} optionCols={4} printOptionCols={4} />
        </Collapsible>
      </section>

      <PageBreak label="负数与 i 的幂次" />

      <section id="prereq-negative" className="mb-6 scroll-mt-4">
        <Collapsible title="六、负数与 i 的幂次" defaultOpen storageKey="prereq:negative" headerExtra={<SpeakButton text={`${prereqNarrations.negative} ${prereqNarrations.remainder}`} />}>
          <p className="text-base font-medium text-blue-700 mb-2">先把符号算对，再用“除以 4 看余数”秒算 <Math tex="i" /> 的高次幂。</p>
          <div className="space-y-3 text-base text-gray-800">
            {/* 上面一块：负数与符号 */}
            <div className="rounded-xl border border-gray-200 bg-gray-50/80 p-3 print:p-2.5">
              <div className="mb-2 border-b border-gray-200 pb-1.5">
                <h3 className="font-bold text-[19px] text-gray-900">负数与符号</h3>
              </div>
              <div className="grid grid-cols-2 gap-3 print:gap-2.5">
                <div className="rounded-lg bg-white border border-gray-200 p-2.5">
                  <p className="font-semibold text-gray-900 mb-2">核心规则</p>
                  <div className="space-y-1.5 leading-7">
                    <p>减去负数 = 加正数：<Math tex="5-(-3)=8" /></p>
                    <p>同号得正，异号得负：<Math tex="(-4)\times(-3)=12" /></p>
                  </div>
                </div>
                <div className="rounded-lg bg-white border border-gray-200 p-2.5">
                  <p className="font-semibold text-gray-900 mb-2"><Math tex="i^2=-1" /> 带入时的符号</p>
                  <div className="space-y-1.5 leading-7">
                    <p>先写括号：<Math tex="2-i^2 = 2-(-1)=3" /></p>
                    <p><Math tex="3i^2 = 3\times(-1) = -3" /></p>
                    <p><Math tex="-2i^2 = -2\times(-1) = 2" /></p>
                    <p><Math tex="i^2+1 = -1+1 = 0" /></p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 下面一块：i 的幂次与余数 */}
            <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-3 print:p-2.5">
              <div className="mb-2 border-b border-blue-200 pb-1.5">
                <h3 className="font-bold text-[19px] text-gray-900"><Math tex="i" /> 的幂次与余数</h3>
              </div>
              <div className="grid grid-cols-2 gap-3 print:gap-2.5">
                <div className="rounded-lg bg-white border border-blue-100 p-2.5">
                  <p className="font-semibold text-gray-900 mb-2">每 4 个一循环</p>
                  <div className="grid grid-cols-2 gap-2 text-center text-[15px] leading-6">
                    <div className="rounded-md border border-blue-100 bg-blue-50 px-2 py-1.5"><Math tex="i^1=i" /><div className="text-xs text-gray-600">余1</div></div>
                    <div className="rounded-md border border-blue-100 bg-blue-50 px-2 py-1.5"><Math tex="i^2=-1" /><div className="text-xs text-gray-600">余2</div></div>
                    <div className="rounded-md border border-blue-100 bg-blue-50 px-2 py-1.5"><Math tex="i^3=-i" /><div className="text-xs text-gray-600">余3</div></div>
                    <div className="rounded-md border border-blue-100 bg-blue-50 px-2 py-1.5"><Math tex="i^4=1" /><div className="text-xs text-gray-600">余0</div></div>
                  </div>
                </div>
                <div className="rounded-lg bg-white border border-blue-100 p-2.5">
                  <p className="font-semibold text-gray-900 mb-2">除以 4 看余数</p>
                  <div className="space-y-1.5 leading-7">
                    <p><Math tex="17\div4" /> 余 1 → <Math tex="i^{17}=i" /></p>
                    <p><Math tex="22\div4" /> 余 2 → <Math tex="i^{22}=-1" /></p>
                    <p><Math tex="100\div4" /> 余 0 → <Math tex="i^{100}=1" /></p>
                    <p>大数技巧：2025 → 25 ÷ 4 余 1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <PracticeCard questions={prereqPractice6} explanations={prereqExplanations} optionCols={4} printOptionCols={4} />
          </div>
        </Collapsible>
      </section>

      <PageBreak label="公式速查表" />

      {/* Formula Cheat Sheet */}
      <section className="mb-6">
        <Collapsible title="📌 公式速查表" storageKey="prereq:cheatsheet">
          <div className="space-y-3 text-base text-gray-800">
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-bold text-gray-900 mb-1">平方与平方根</p>
              <p>任何实数的平方 <Math tex="\geq 0" />　　<Math tex="i^2 = -1" />　　<Math tex="\sqrt{\phantom{x}}" /> 号默认取正值</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-bold text-gray-900 mb-1">常用平方数</p>
              <div className="grid grid-cols-7 gap-1 text-center text-sm text-gray-800">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((n) => (
                  <span key={n}><Math tex={`${n}^2=${n * n}`} /></span>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-bold text-gray-900 mb-1">高频组合</p>
              <div className="grid grid-cols-2 gap-1 text-sm text-gray-800">
                <p><Math tex="3^2+4^2=25 \to \sqrt{25}=5" /></p>
                <p><Math tex="5^2+12^2=169 \to \sqrt{169}=13" /></p>
                <p><Math tex="1^2+1^2=2 \to \sqrt{2}\approx 1.414" /></p>
                <p><Math tex="1^2+2^2=5 \to \sqrt{5}\approx 2.236" /></p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-bold text-gray-900 mb-1">多项式公式</p>
              <div className="space-y-1">
                <p>分配律：<Math tex="a(b+c) = ab + ac" /></p>
                <p>FOIL：<Math tex="(a+b)(c+d) = ac+ad+bc+bd" /></p>
                <p>完全平方：<Math tex="(a+b)^2 = a^2+2ab+b^2" /></p>
                <p>平方差：<Math tex="(a+b)(a-b) = a^2-b^2" /></p>
                <p className="text-red-600 font-medium">复数关键：<Math tex="(a+bi)(a-bi) = a^2+b^2" />（总是正实数）</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-bold text-gray-900 mb-1">分数运算</p>
              <p>同分母加减：直接加减分子｜异分母：先通分</p>
              <p>乘法：分子×分子 / 分母×分母｜除法：乘以倒数</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-bold text-gray-900 mb-1">负数运算</p>
              <p>同号得正，异号得负｜减去负数 = 加正数</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-bold text-gray-900 mb-1">i 的幂次循环</p>
              <p>余1→<Math tex="i" />　余2→<Math tex="-1" />　余3→<Math tex="-i" />　余0→<Math tex="1" />　｜快速求余：看最后两位÷4</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-bold text-gray-900 mb-1">数的分类</p>
              <p>自然数 ⊂ 整数 ⊂ 有理数 ⊂ 实数 ⊂ <strong>复数</strong></p>
              <p className="mt-1">复数 = 实部 + 虚部：<Math tex="a + bi" />（<Math tex="a,b" /> 为实数，<Math tex="i^2=-1" />）</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 text-purple-800">
              <p className="font-bold text-[17px] mb-1">🎯 本章核心能力清单</p>
              <div className="grid grid-cols-2 gap-1 text-sm text-gray-800">
                <p>✅ 区分实数与复数</p>
                <p>✅ 脱口而出 <Math tex="1^2" />~<Math tex="13^2" /></p>
                <p>✅ 分数加减乘除约分</p>
                <p>✅ 用 FOIL / 完全平方 / 平方差展开</p>
                <p>✅ 负数运算不出错</p>
                <p>✅ 秒算 <Math tex="i" /> 的任意次幂</p>
              </div>
            </div>
          </div>
        </Collapsible>
      </section>

      <PageBreak label="自测清单" />

      {/* Self test */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">自测清单</h2>
        <QuizPanel
          module="prereq"
          questions={prereqSelfTest}
          title="前置知识自测"
          description="10道选择题，确认初中基础没问题。"
          explanations={prereqExplanations}
        />
      </section>

      {/* 答案与解析版块 — 仅打印时显示 */}
      {isPrinting && printOptions.showAnswers && <PrereqAnswers />}
      </LessonLayout>
    </div>
  );
}
