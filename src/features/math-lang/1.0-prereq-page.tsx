import { Math, Collapsible, SpeakButton, PageHeader, CalloutCard, PracticeCard, LessonLayout, ExportButton } from '@/components/shared';
import { prereqNarrations } from './data/1.0/1.0-narrations';
import { prereqPractice4, prereqPractice5, prereqPractice6 } from './data/1.0/1.0-practice';
import { prereqProgressItems } from './data/1.0/1.0-progress';
import { PrereqAnswers, prereqExplanations } from './1.0-prereq-answers';
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
        <div className="grid grid-cols-4 gap-1 print:gap-y-0.5">
          <button onClick={() => scrollToId('prereq-numclass')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">一、数的分类</button>
          <button onClick={() => scrollToId('prereq-square')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">二、平方与平方根</button>
          <button onClick={() => scrollToId('prereq-sqtable')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">三、常用平方数</button>
          <button onClick={() => scrollToId('prereq-fraction')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">四、分数运算</button>
          <button onClick={() => scrollToId('prereq-poly')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">五、多项式展开</button>
          <button onClick={() => scrollToId('prereq-negative')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">六、负数运算</button>
          <button onClick={() => scrollToId('prereq-remainder')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">七、除以4求余数</button>
        </div>
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>
      <section id="prereq-numclass" className="mb-6 scroll-mt-4 print:mb-4">
        <Collapsible title="一、数的分类" defaultOpen storageKey="prereq:num-class" headerExtra={<SpeakButton text={prereqNarrations.numClass} />}>
          {/* 一览表 */}
          <div className="mb-2 print:mb-2">
            <p className="font-bold text-gray-800 text-[0.9rem] mb-2 print:mb-1">先看全局：5 种数一览表</p>
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
                  <tr><td className="border border-gray-200 px-3 py-2 text-center">1</td><td className="border border-gray-200 px-3 py-2">自然数</td><td className="border border-gray-200 px-3 py-2 text-gray-700">0, 1, 2, 3 …</td><td className="border border-gray-200 px-3 py-2">用于计数的数</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-200 px-3 py-2 text-center">2</td><td className="border border-gray-200 px-3 py-2">整数</td><td className="border border-gray-200 px-3 py-2 text-gray-700">…-2, -1, 0, 1, 2…</td><td className="border border-gray-200 px-3 py-2">所有的自然数、0以及负整数</td></tr>
                  <tr><td className="border border-gray-200 px-3 py-2 text-center">3</td><td className="border border-gray-200 px-3 py-2">有理数</td><td className="border border-gray-200 px-3 py-2 text-gray-700"><Math tex="\dfrac{1}{2},\ -\dfrac{3}{4},\ 0.75" /></td><td className="border border-gray-200 px-3 py-2">包括整数、分数和有限小数</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-200 px-3 py-2 text-center">4</td><td className="border border-gray-200 px-3 py-2">实数</td><td className="border border-gray-200 px-3 py-2 text-gray-700"><Math tex="\sqrt{2},\ \pi" />，所有小数</td><td className="border border-gray-200 px-3 py-2">包括所有有理数和无理数</td></tr>
                  <tr className="bg-blue-50"><td className="border border-gray-200 px-3 py-2 text-center font-bold">5</td><td className="border border-gray-200 px-3 py-2 font-bold text-blue-700">复数</td><td className="border border-gray-200 px-3 py-2 text-gray-700"><Math tex="3+2i,\ -i" /></td><td className="border border-gray-200 px-3 py-2">实数 + 虚数（你要学的）</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 mt-2 print:mt-1">每一层都<strong>包含</strong>上一层。复数最大，自然数最小。</p>
          </div>

          {/* 升级故事 */}
          <div className="mb-0">
            <p className="font-bold text-gray-800 text-[0.9rem] mb-2 print:mb-1">为什么要一层层升级？</p>
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
            <p className="text-[0.9rem] font-bold">
              自然数 → 整数 → 有理数 → 实数 → <span className="text-blue-600">复数</span>
            </p>
            <p className="text-gray-500 mt-2">遇到新问题，就升级工具箱。复数是数的<strong>第5次自然升级</strong>。</p>
          </div>


          <CalloutCard variant="warning" title="易错点" compact className="mt-2">
            <p>• <strong>0 是自然数</strong>，也是整数、有理数、实数</p>
            <p>• 无限不循环小数（如 <Math tex="\sqrt{2}" />、<Math tex="\pi" />）是<strong>无理数</strong>，不是有理数</p>
            <p>• 每层都<strong>包含</strong>上一层：<Math tex="\text{复数} \supset \text{实数} \supset \text{有理数} \supset \text{整数} \supset \text{自然数}" /></p>
          </CalloutCard>
        </Collapsible>
      </section>

      <section id="prereq-square" className="mb-6 scroll-mt-4">
        <Collapsible title="二、平方与平方根" defaultOpen storageKey="prereq:square" headerExtra={<SpeakButton text={prereqNarrations.square} />}>
          <div className="space-y-0 text-base text-gray-700">
            <div className="border-l-4 border-blue-400 pl-3 pt-0 pb-0">
              <p className="font-bold text-gray-800 mb-1">定义</p>
              <p>如果一个数 <Math tex="x" /> 满足 <Math tex="x^2 = a" />，则称 <Math tex="x" /> 是 <Math tex="a" /> 的<strong>平方根</strong>。</p>
              <p className="mt-1">其中 <Math tex="\sqrt{a}" />（根号 <Math tex="a" />）表示 <Math tex="a" /> 的<strong>算术平方根</strong>，即非负的那个平方根。</p>
            </div>
            <div className="grid grid-cols-2 gap-2 print:gap-2">
              <div className="border-l-4 border-gray-300 pl-3 py-1">
                <p className="font-bold text-gray-800 mb-1">1. 平方 = 自己乘自己</p>
                <div className="space-y-0.5 font-mono text-[15px] leading-6">
                  <p><Math tex="3^2 = 3 \times 3 = 9" /></p>
                  <p><Math tex="(-3)^2 = (-3)\times(-3) = 9" /></p>
                  <p><Math tex="0.1^2 = 0.1 \times 0.1 = 0.01" /></p>
                </div>
              </div>
              <div className="border-l-4 border-blue-300 pl-3 py-1">
                <p className="font-bold text-gray-800 mb-1">2. 平方根：已知平方，求原数</p>
                <div className="space-y-0.5 font-mono text-[15px] leading-6">
                  <p><Math tex="\sqrt{9} = 3" />，因为 <Math tex="3^2 = 9" /></p>
                  <p><Math tex="\sqrt{0} = 0" /></p>
                  <p><Math tex="\sqrt{2} \approx 1.414" />（无理数）</p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-3 py-1">
              <p className="font-bold text-blue-800 mb-1">3. 最重要的结论</p>
              <div className="grid grid-cols-3 gap-0 text-center text-[15px] leading-5">
                <div className="rounded border border-gray-200 px-2 py-0.5"><Math tex="\text{正数}^2 > 0" /></div>
                <div className="rounded border border-gray-200 px-2 py-0.5"><Math tex="\text{负数}^2 > 0" /></div>
                <div className="rounded border border-gray-200 px-2 py-0.5"><Math tex="0^2 = 0" /></div>
              </div>
              <p className="mt-1.5">所以 <strong>任意实数平方都不可能小于 0</strong>。这就是为何遇到 <Math tex="x^2=-1" /> 时，实数解不出来，才引入 <Math tex="i" />，并规定 <Math tex="i^2=-1" /></p>
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
              <div className="grid grid-cols-4 gap-0 text-sm text-center">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((n) => (
                  <div key={n} className="rounded border border-gray-200 px-2 py-1 bg-white">
                    <Math tex={`${n}^2=${n * n}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Collapsible>
      </section>

      <section id="prereq-fraction" className="mb-6 scroll-mt-4">
        <Collapsible title="四、分数运算" defaultOpen storageKey="prereq:fraction" headerExtra={<SpeakButton text={prereqNarrations.fraction} />}>
          <div className="space-y-0 text-base text-gray-700">
            {/* 基本概念 */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-[15px] leading-6">
              <p><strong>基本概念</strong>：分数 <Math tex="\tfrac{\text{分子}}{\text{分母}}" /> 表示把整体平均分成<strong>分母份</strong>，取其中<strong>分子份</strong>。</p>
              <p className="mt-1.5 font-bold text-gray-800">分式的特性</p>
              <p>分子、分母同乘或同除以同一个<strong>非零数</strong>，分数值不变：</p>
              <p className="text-center mt-1"><Math tex="\dfrac{a}{b} = \dfrac{a \times k}{b \times k} = \dfrac{a \div k}{b \div k} \quad (k \neq 0)" /></p>
              <p className="mt-1.5">约分：找到分子和分母的公因数，同时除掉，化为<strong>最简分数</strong>（分母不能为 0）。</p>
            </div>

            {/* 加减法 */}
            <div className="grid grid-cols-2 gap-2 print:gap-2">
              <div className="border-l-4 border-gray-300 pl-3 py-1">
                <p className="font-bold text-gray-800 mb-1">1. 加减法</p>
                <div className="space-y-0.5 text-[15px] leading-6">
                  <p><strong>同分母</strong>：<br />分母不变，分子直接加减</p>
                  <p className="font-mono"><Math tex="\dfrac{3}{7} + \dfrac{2}{7} = \dfrac{3+2}{7} = \dfrac{5}{7}" /></p>
                  <p><strong>异分母</strong>：<br />先通分，再加减</p>
                  <p className="font-mono"><Math tex="\dfrac{2}{3} + \dfrac{3}{5}" />，通分得 <Math tex="\dfrac{10}{15} + \dfrac{9}{15} = \dfrac{19}{15}" /></p>
                  <p>化简：结果需化为<strong>最简分数</strong></p>
                </div>
              </div>

              {/* 乘除法 */}
              <div className="border-l-4 border-emerald-300 pl-3 py-1">
                <p className="font-bold text-gray-800 mb-1">2. 乘除法</p>
                <div className="space-y-0.5 text-[15px] leading-6">
                  <p><strong>分数乘整数</strong>：分子乘整数，分母不变</p>
                  <p className="font-mono"><Math tex="\dfrac{3}{4} \times 2 = \dfrac{6}{4} = \dfrac{3}{2}" /></p>
                  <p><strong>分数乘分数</strong>：分子相乘，分母相乘</p>
                  <p className="font-mono"><Math tex="\dfrac{2}{3} \times \dfrac{3}{5} = \dfrac{6}{15} = \dfrac{2}{5}" /></p>
                  <p><strong>除以整数</strong>：乘以该整数的倒数</p>
                  <p className="font-mono"><Math tex="\dfrac{3}{4} \div 2 = \dfrac{3}{4} \times \dfrac{1}{2} = \dfrac{3}{8}" /></p>
                  <p><strong>除以分数</strong>：乘以该分数的倒数</p>
                  <p className="font-mono"><Math tex="2 \div \dfrac{3}{4} = 2 \times \dfrac{4}{3} = \dfrac{8}{3}" /></p>
                </div>
              </div>
            </div>
          </div>
          <PracticeCard title="" questions={prereqPractice4} explanations={prereqExplanations} optionCols={4} printOptionCols={4} />
        </Collapsible>
      </section>

      <section id="prereq-poly" className="mb-6 scroll-mt-4">
        <Collapsible title="五、多项式展开（复数乘法的核心）" defaultOpen storageKey="prereq:polynomial" headerExtra={<SpeakButton text={prereqNarrations.polynomial} />}>
          <p className="text-base text-blue-700 mb-2">学会 4 个核心展开：分配律、FOIL、完全平方、平方差。</p>
          <div className="grid grid-cols-2 divide-x divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden text-base text-gray-800">
            {/* 1. 分配律 */}
            <div className="bg-gray-50 p-3">
              <p className="font-bold text-[17px] text-gray-900 mb-1.5">1. 分配律</p>
              <Math tex="a(b+c) = ab + ac" display />
              <div className="mt-1.5 space-y-1">
                <p><Math tex="3(x+2) = 3x + 6" /></p>
                <p><Math tex="2(1+i) = 2 + 2i" /></p>
              </div>
            </div>
            {/* 3. 完全平方公式 */}
            <div className="bg-gray-50 p-3">
              <p className="font-bold text-[17px] text-gray-900 mb-1.5">3. 完全平方公式</p>
              <div className="space-y-1">
                <Math tex="(a+b)^2 = a^2 + 2ab + b^2" display />
                <Math tex="(a-b)^2 = a^2 - 2ab + b^2" display />
              </div>
              <p className="mt-1.5"><Math tex="(1+i)^2 = 1 + 2i + i^2 = 2i" /></p>
            </div>
            {/* 2. FOIL */}
            <div className="bg-gray-50 p-3">
              <p className="font-bold text-[17px] text-gray-900 mb-1.5">2. 两括号相乘（FOIL）</p>
              <Math tex="(a+b)(c+d) = ac + ad + bc + bd" display />
              <p className="text-gray-700 mb-1.5">口诀：首首 + 首尾 + 尾首 + 尾尾</p>
              <div className="space-y-1">
                <p><Math tex="(2+3)(4+5) = 8+10+12+15 = 45" /></p>
                <p><Math tex="(2+i)(3-i) = 6-2i+3i-i^2 = 7+i" /></p>
              </div>
            </div>
            {/* 4. 平方差 */}
            <div className="bg-gray-50 p-3">
              <p className="font-bold text-[17px] text-gray-900 mb-1.5">4. 平方差公式：复数除法的关键</p>
              <Math tex="(a+b)(a-b) = a^2 - b^2" display />
              <div className="space-y-1 mt-1.5">
                <p><Math tex="(1+i)(1-i) = 1 - i^2 = 2" /></p>
                <p><Math tex="(2+3i)(2-3i) = 4 - 9i^2 = 13" /></p>
                <p><Math tex="(a+bi)(a-bi) = a^2 + b^2" />，结果总是正实数</p>
              </div>
            </div>
          </div>
          <div className="mt-3 mb-2">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-base text-gray-800">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-200 px-3 py-0.5 text-left w-28">公式</th>
                    <th className="border border-gray-200 px-3 py-0.5 text-left">展开结果</th>
                    <th className="border border-gray-200 px-3 py-0.5 text-left">复数例子</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-200 px-3 py-0.5">分配律</td><td className="border border-gray-200 px-3 py-0.5"><Math tex="a(b+c)=ab+ac" /></td><td className="border border-gray-200 px-3 py-0.5"><Math tex="2(1+i)=2+2i" /></td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-200 px-3 py-0.5">FOIL</td><td className="border border-gray-200 px-3 py-0.5"><Math tex="(a+b)(c+d)=ac+ad+bc+bd" /></td><td className="border border-gray-200 px-3 py-0.5"><Math tex="(2+i)(3-i)=7+i" /></td></tr>
                  <tr><td className="border border-gray-200 px-3 py-0.5">完全平方</td><td className="border border-gray-200 px-3 py-0.5"><Math tex="(a+b)^2=a^2+2ab+b^2" /></td><td className="border border-gray-200 px-3 py-0.5"><Math tex="(1+i)^2=2i" /></td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-200 px-3 py-0.5">平方差</td><td className="border border-gray-200 px-3 py-0.5"><Math tex="(a+b)(a-b)=a^2-b^2" /></td><td className="border border-gray-200 px-3 py-0.5"><Math tex="(1+i)(1-i)=2" /></td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <PracticeCard title="" questions={prereqPractice5} explanations={prereqExplanations} optionCols={4} printOptionCols={4} />
        </Collapsible>
      </section>

      <section id="prereq-negative" className="mb-6 scroll-mt-4">
        <Collapsible title="六、负数与 i 的幂次" defaultOpen storageKey="prereq:negative" headerExtra={<SpeakButton text={`${prereqNarrations.negative} ${prereqNarrations.remainder}`} />}>
          <div className="grid grid-cols-2 divide-x divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden text-base text-gray-800 mb-3">
            {/* 负数核心规则 */}
            <div className="bg-gray-50 p-3">
              <p className="font-bold text-[17px] text-gray-900 mb-1.5">负数核心规则</p>
              <div className="space-y-1">
                <p>减去负数 = 加正数：<Math tex="5-(-3)=8" /></p>
                <p>同号得正，异号得负：<Math tex="(-4)\times(-3)=12" /></p>
              </div>
            </div>
            {/* i 的幂次循环 */}
            <div className="bg-gray-50 p-3">
              <p className="font-bold text-[17px] text-gray-900 mb-1.5"><Math tex="i" /> 的幂次：每 4 个一循环</p>
              <div className="grid grid-cols-4 gap-1 text-center text-[15px]">
                <div className="border border-gray-200 rounded px-1 py-1"><Math tex="i^1=i" /><div className="text-xs text-gray-500">余1</div></div>
                <div className="border border-gray-200 rounded px-1 py-1"><Math tex="i^2=-1" /><div className="text-xs text-gray-500">余2</div></div>
                <div className="border border-gray-200 rounded px-1 py-1"><Math tex="i^3=-i" /><div className="text-xs text-gray-500">余3</div></div>
                <div className="border border-gray-200 rounded px-1 py-1"><Math tex="i^4=1" /><div className="text-xs text-gray-500">余0</div></div>
              </div>
            </div>
            {/* i² 代入符号 */}
            <div className="bg-gray-50 p-3">
              <p className="font-bold text-[17px] text-gray-900 mb-1.5"><Math tex="i^2=-1" /> 代入时的符号</p>
              <div className="space-y-1">
                <p><Math tex="2-i^2 = 2-(-1)=3" /></p>
                <p><Math tex="3i^2 = 3\times(-1) = -3" /></p>
                <p><Math tex="-2i^2 = -2\times(-1) = 2" /></p>
              </div>
            </div>
            {/* 除以4看余数 */}
            <div className="bg-gray-50 p-3">
              <p className="font-bold text-[17px] text-gray-900 mb-1.5">除以 4 看余数</p>
              <div className="space-y-1">
                <p><Math tex="17\div4" /> 余 1，所以 <Math tex="i^{17}=i" /></p>
                <p><Math tex="22\div4" /> 余 2，所以 <Math tex="i^{22}=-1" /></p>
                <p><Math tex="100\div4" /> 余 0，所以 <Math tex="i^{100}=1" /></p>
              </div>
            </div>
          </div>
          <PracticeCard title="" questions={prereqPractice6} explanations={prereqExplanations} optionCols={4} printOptionCols={4} />
        </Collapsible>
      </section>


      {/* 答案与解析版块 — 仅打印时显示 */}
      {isPrinting && printOptions.showAnswers && <PrereqAnswers />}
      </LessonLayout>
    </div>
  );
}
