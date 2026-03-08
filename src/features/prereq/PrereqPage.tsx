import { Math, Collapsible, SpeakButton, QuizPanel, PageHeader, CalloutCard, PracticeCard, LessonLayout, ExportButton, PageBreak } from '@/components/shared';
import { prereqNarrations } from './data/narrations';
import { prereqSelfTest } from './data/selftest';
import { prereqPractice1, prereqPractice2, prereqPractice3, prereqPractice4, prereqPractice5, prereqPractice6, prereqPractice7 } from './data/practice';
import { prereqProgressItems } from './data/progress';
import { useProgress } from '@/hooks';
import { usePrintMode } from '@/hooks/usePrintMode';

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
      <div className="bg-gray-50 rounded-xl p-3 mb-3 text-sm text-gray-600 print:p-2 print:mb-2">
        <p className="font-bold text-gray-800 mb-1">📋 知识地图</p>
        <div className="grid grid-cols-2 gap-1">
          <button onClick={() => document.getElementById('prereq-numclass')?.scrollIntoView({ behavior: 'smooth' })} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">一、数的分类 → 复数在数系中的位置</button>
          <button onClick={() => document.getElementById('prereq-square')?.scrollIntoView({ behavior: 'smooth' })} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">二、平方与平方根 → 计算复数模的基础</button>
          <button onClick={() => document.getElementById('prereq-sqtable')?.scrollIntoView({ behavior: 'smooth' })} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">三、常用平方数 → 心算提速</button>
          <button onClick={() => document.getElementById('prereq-fraction')?.scrollIntoView({ behavior: 'smooth' })} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">四、分数运算 → 复数除法结果经常是分数</button>
          <button onClick={() => document.getElementById('prereq-poly')?.scrollIntoView({ behavior: 'smooth' })} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">五、多项式展开 → 复数乘法的核心</button>
          <button onClick={() => document.getElementById('prereq-negative')?.scrollIntoView({ behavior: 'smooth' })} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">六、负数运算 → i²=-1 必须处理负数</button>
          <button onClick={() => document.getElementById('prereq-remainder')?.scrollIntoView({ behavior: 'smooth' })} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">七、除以4求余数 → 判断 i 的幂次</button>
        </div>
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>
      <section id="prereq-numclass" className="mb-6 scroll-mt-4">
        <Collapsible title="一、数的分类" defaultOpen storageKey="prereq:num-class" headerExtra={<SpeakButton text={prereqNarrations.numClass} />}>
          <p className="text-blue-600 mb-3">🎯 学完你能：说出 5 种数的名字和包含关系，理解为什么需要复数。</p>

          {/* 一览表 */}
          <div className="mb-4">
            <p className="font-bold text-gray-800 text-lg mb-2">先看全局：5 种数一览表</p>
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
                  <tr><td className="border border-gray-200 px-3 py-2 text-center">1</td><td className="border border-gray-200 px-3 py-2">自然数</td><td className="border border-gray-200 px-3 py-2 text-gray-500">0, 1, 2, 3 …</td><td className="border border-gray-200 px-3 py-2">数东西用的数</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-200 px-3 py-2 text-center">2</td><td className="border border-gray-200 px-3 py-2">整数</td><td className="border border-gray-200 px-3 py-2 text-gray-500">…-2, -1, 0, 1, 2…</td><td className="border border-gray-200 px-3 py-2">自然数 + 负数</td></tr>
                  <tr><td className="border border-gray-200 px-3 py-2 text-center">3</td><td className="border border-gray-200 px-3 py-2">有理数</td><td className="border border-gray-200 px-3 py-2 text-gray-500">½, -¾, 0.75</td><td className="border border-gray-200 px-3 py-2">能写成分数的数</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-200 px-3 py-2 text-center">4</td><td className="border border-gray-200 px-3 py-2">实数</td><td className="border border-gray-200 px-3 py-2 text-gray-500">√2, π, 所有小数</td><td className="border border-gray-200 px-3 py-2">数轴上所有的点</td></tr>
                  <tr className="bg-blue-50"><td className="border border-gray-200 px-3 py-2 text-center font-bold">5</td><td className="border border-gray-200 px-3 py-2 font-bold text-blue-700">复数</td><td className="border border-gray-200 px-3 py-2 text-gray-500">3+2i, -i</td><td className="border border-gray-200 px-3 py-2">实数 + 虚数（你要学的）</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 mt-2">每一层都<strong>包含</strong>上一层。复数最大，自然数最小。</p>
          </div>

          {/* 升级故事 */}
          <div className="mb-4">
            <p className="font-bold text-gray-800 text-lg mb-2">为什么要一层层升级？</p>
            <p className="text-gray-700 mb-2">每次升级，都是因为<strong>旧的数解决不了新问题</strong>：</p>

            <div className="space-y-2">
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

          <PracticeCard questions={prereqPractice1} />

          <CalloutCard variant="warning" title="易错点" className="mt-4">
            <p>• <strong>0 是自然数</strong>，也是整数、有理数、实数</p>
            <p>• 无限不循环小数（如 √2、π）是<strong>无理数</strong>，不是有理数</p>
            <p>• 每层都<strong>包含</strong>上一层：复数 ⊃ 实数 ⊃ 有理数 ⊃ 整数 ⊃ 自然数</p>
          </CalloutCard>
        </Collapsible>
      </section>

      <PageBreak label="平方与平方根" />

      <section id="prereq-square" className="mb-6 scroll-mt-4">
        <Collapsible title="二、平方与平方根" defaultOpen storageKey="prereq:square" headerExtra={<SpeakButton text={prereqNarrations.square} />}>
          <p className="text-xs text-blue-600 mb-3">🎯 学完你能：计算任意数的平方和开方，理解"实数平方≥0"为什么需要引入 i。</p>
          <div className="space-y-4 text-sm text-gray-700">
            <div>
              <p className="font-bold mb-1">平方：</p>
              <p className="text-gray-500 mb-2">生活理解：一块正方形瓷砖，边长3厘米，面积就是 3×3 = 9 平方厘米。“平方”就是<strong>一个数乘以自己</strong>。</p>
              <div className="bg-gray-50 rounded-lg p-3 space-y-1 font-mono">
                <p><Math tex="3^2 = 3 \times 3 = 9" /></p>
                <p><Math tex="(-3)^2 = (-3) \times (-3) = 9" /></p>
                <p><Math tex="5^2 = 25" /></p>
                <p><Math tex="0.1^2 = 0.01" /></p>
              </div>
            </div>
            <div>
              <p className="font-bold mb-2">关键性质：任何实数的平方 <Math tex="\geq 0" /></p>
              <div className="bg-gray-50 rounded-lg p-3 space-y-1 font-mono">
                <p>正数² = 正数</p>
                <p>负数² = 正数</p>
                <p>0² = 0</p>
              </div>
              <p className="mt-2 text-gray-600">所以实数范围内<strong>不存在平方等于负数的数</strong> → 需要发明 <Math tex="i" />（<Math tex="i^2 = -1" />）</p>
            </div>

            <div>
              <p className="font-bold mb-2 text-red-600">⚠️ 括号陷阱（高频易错）</p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-center">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-200 px-3 py-2">写法</th>
                      <th className="border border-gray-200 px-3 py-2">含义</th>
                      <th className="border border-gray-200 px-3 py-2">结果</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-green-50">
                      <td className="border border-gray-200 px-3 py-2"><Math tex="(-3)^2" /></td>
                      <td className="border border-gray-200 px-3 py-2">先取负3，再平方</td>
                      <td className="border border-gray-200 px-3 py-2 font-bold text-green-700"><Math tex="(-3) \times (-3) = 9" /></td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="border border-gray-200 px-3 py-2"><Math tex="-3^2" /></td>
                      <td className="border border-gray-200 px-3 py-2">先算 <Math tex="3^2" />，再取负</td>
                      <td className="border border-gray-200 px-3 py-2 font-bold text-red-700"><Math tex="-(3 \times 3) = -9" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-gray-700"><strong>口诀：有括号，整体平方；没括号，先算幂再加负号。</strong></p>
            </div>

            <div>
              <p className="font-bold mb-1">平方根：</p>
              <p className="text-gray-500 mb-2">生活理解：瓷砖面积是9平方厘米，边长是多少？答：3厘米。这就是平方根——<strong>已知面积，反过来求边长</strong>。</p>
              <div className="bg-gray-50 rounded-lg p-3 space-y-1 font-mono">
                <p><Math tex="\sqrt{9} = 3" />（面积9 → 边长3）</p>
                <p><Math tex="\sqrt{25} = 5" />（面积25 → 边长5）</p>
                <p><Math tex="\sqrt{2} \approx 1.414" />（无理数，记个大概）</p>
                <p><Math tex="\sqrt{0} = 0" /></p>
              </div>
              <p className="mt-2 text-gray-500">注意：<Math tex="\sqrt{\phantom{x}}" /> 号默认取正值（算术平方根）</p>
            </div>
            <div>
              <p className="font-bold mb-1">绝对值符号 <Math tex="|\;\;|" />：</p>
              <div className="bg-gray-50 rounded-lg p-3 space-y-1">
                <p>初中里表示<strong>绝对值</strong>（一个数到0的距离，取正）：</p>
                <p className="pl-4"><Math tex="|5| = 5" />，<Math tex="|-3| = 3" />，<Math tex="|0| = 0" /></p>
                <p className="text-gray-500 mt-1">简单说：<strong>去掉符号只看大小</strong></p>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-blue-800">
              <p><strong>复数中会用到：</strong>这个符号叫<strong>模</strong>，含义类似——表示复数的"大小"。</p>
              <Math tex="|3 + 4i| = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5" display />
              <p className="text-sm text-gray-600 mt-1">你现在不需要理解为什么这么算，只要知道 <Math tex="|\;\;|" /> 在复数里表示大小，计算时需要平方和开方。</p>
            </div>
          </div>
          <PageBreak label="即时练习" />
          <PracticeCard questions={prereqPractice2} />
          <CalloutCard variant="warning" title="易错点" className="mt-3">
            <p>• <strong><Math tex="(-3)^2 = 9" /></strong>，不是 -9！括号很重要：<Math tex="-3^2 = -(3^2) = -9" /></p>
            <p>• <strong><Math tex="\sqrt{\phantom{x}}" /> 号默认取正值</strong>：<Math tex="\sqrt{9} = 3" />，不是 ±3</p>
            <p>• | | 在初中是绝对值，在复数里是模，计算方法不同但含义类似</p>
          </CalloutCard>
        </Collapsible>
      </section>

      <PageBreak label="常用平方数" />

      <section id="prereq-sqtable" className="mb-6 scroll-mt-4">
        <Collapsible title="三、常用平方数" defaultOpen storageKey="prereq:square-table" headerExtra={<SpeakButton text={prereqNarrations.squareTable} />}>
          <p className="text-xs text-blue-600 mb-2">🎯 学完你能：脱口而出 1²~13² 的值，快速心算复数模。</p>
          <div className="space-y-2 text-sm text-gray-700">
            <p className="font-bold">背熟，计算提速：</p>
            <div className="grid grid-cols-4 gap-2 text-sm text-center">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((n) => (
                <div key={n} className="bg-white rounded px-2 py-1 border border-gray-200">
                  <Math tex={`${n}^2=${n * n}`} />
                </div>
              ))}
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-2 text-blue-800">
              <p className="font-bold mb-1">高频组合（计算复数模时会反复遇到）：</p>
              <div className="space-y-0">
                <p><Math tex="3^2+4^2 = 9+16 = 25" />，即 <Math tex="\sqrt{25}=5" /></p>
                <p><Math tex="5^2+12^2 = 25+144 = 169" />，即 <Math tex="\sqrt{169}=13" /></p>
                <p><Math tex="1^2+1^2 = 1+1 = 2" />，即 <Math tex="\sqrt{2} \approx 1.414" /></p>
                <p><Math tex="1^2+2^2 = 1+4 = 5" />，即 <Math tex="\sqrt{5} \approx 2.236" /></p>
              </div>
            </div>
          </div>
          <PracticeCard questions={prereqPractice3} />
        </Collapsible>
      </section>

      <PageBreak label="分数运算" />

      <section id="prereq-fraction" className="mb-6 scroll-mt-4">
        <Collapsible title="四、分数运算" defaultOpen storageKey="prereq:fraction" headerExtra={<SpeakButton text={prereqNarrations.fraction} />}>
          <p className="text-xs text-blue-600 mb-3">🎯 学完你能：熟练计算分数加减乘除和约分，为复数除法做准备。</p>
          <div className="space-y-3 text-sm text-gray-700">
            <p className="text-gray-500">生活理解：一个蛋糕切成4块，你吃了1块，就吃了 <Math tex="\frac{1}{4}" />。分数就是<strong>"整体的一部分"</strong>——分母是切成几块，分子是取几块。</p>
            <div>
              <p className="font-bold mb-1">加减：</p>
              <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                <p><strong>同分母</strong>：切法一样，直接数块数</p>
                <Math tex="\frac{2}{5} + \frac{1}{5} = \frac{3}{5}" display />
                <p><strong>异分母</strong>：先通分（把蛋糕切成一样大的块）</p>
                <div className="bg-white rounded p-2 text-gray-600 space-y-1 text-center">
                  <p><Math tex="\frac{1}{2}" /> 是蛋糕切<strong>2块</strong>取1块，<Math tex="\frac{1}{3}" /> 是切<strong>3块</strong>取1块——块大小不同，没法直接加</p>
                  <p>通分：找公倍数 <Math tex="6" />（2和3都能整除6）</p>
                  <p><Math tex="\frac{1}{2} = \frac{3}{6}" />（切6块取3块），<Math tex="\frac{1}{3} = \frac{2}{6}" />（切6块取2块）</p>
                  <p>现在能加了：<Math tex="\frac{3}{6} + \frac{2}{6} = \frac{5}{6}" /></p>
                </div>
              </div>
            </div>
            <div>
              <p className="font-bold mb-1">乘法（分子乘分子，分母乘分母）：</p>
              <div className="bg-gray-50 rounded-lg p-3">
                <Math tex="\frac{2}{3} \times \frac{4}{5} = \frac{8}{15}" display />
              </div>
            </div>
            <div>
              <p className="font-bold mb-1">除法（乘以倒数）：</p>
              <div className="bg-gray-50 rounded-lg p-3">
                <Math tex="\frac{2}{3} \div \frac{4}{5} = \frac{2}{3} \times \frac{5}{4} = \frac{10}{12} = \frac{5}{6}" display />
              </div>
            </div>
            <div>
              <p className="font-bold mb-1">约分（找公因数，同时除掉）：</p>
              <div className="bg-gray-50 rounded-lg p-3 grid grid-cols-5 gap-2 text-center">
                <p><Math tex="\frac{4}{6} = \frac{2}{3}" /><br /><span className="text-gray-600 text-xs">÷2</span></p>
                <p><Math tex="\frac{6}{10} = \frac{3}{5}" /><br /><span className="text-gray-600 text-xs">÷2</span></p>
                <p><Math tex="\frac{12}{15} = \frac{4}{5}" /><br /><span className="text-gray-600 text-xs">÷3</span></p>
                <p><Math tex="\frac{8}{12} = \frac{2}{3}" /><br /><span className="text-gray-600 text-xs">÷4</span></p>
                <p><Math tex="\frac{15}{25} = \frac{3}{5}" /><br /><span className="text-gray-600 text-xs">÷5</span></p>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-blue-800">
              <p><strong>复数中的例子：</strong></p>
              <Math tex="\frac{4-2i}{2} = \frac{4}{2} - \frac{2}{2}i = 2 - i" display />
            </div>
          </div>
          <div className="mt-4 mb-2">
            <p className="font-bold text-gray-800 mb-2">运算口诀速查</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-200 px-3 py-2 text-left w-16">运算</th>
                    <th className="border border-gray-200 px-3 py-2 text-left">口诀</th>
                    <th className="border border-gray-200 px-3 py-2 text-left">例子</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-200 px-3 py-2">加减</td><td className="border border-gray-200 px-3 py-2">先通分，再加减分子</td><td className="border border-gray-200 px-3 py-2"><Math tex="\frac{1}{2}+\frac{1}{3}=\frac{5}{6}" /></td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-200 px-3 py-2">乘法</td><td className="border border-gray-200 px-3 py-2">分子×分子，分母×分母</td><td className="border border-gray-200 px-3 py-2"><Math tex="\frac{2}{3}\times\frac{4}{5}=\frac{8}{15}" /></td></tr>
                  <tr><td className="border border-gray-200 px-3 py-2">除法</td><td className="border border-gray-200 px-3 py-2">翻转后面，变乘法</td><td className="border border-gray-200 px-3 py-2"><Math tex="\frac{2}{3}\div\frac{4}{5}=\frac{2}{3}\times\frac{5}{4}" /></td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-200 px-3 py-2">约分</td><td className="border border-gray-200 px-3 py-2">找最大公因数，同时除</td><td className="border border-gray-200 px-3 py-2"><Math tex="\frac{18}{24}=\frac{3}{4}" />（÷6）</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <PageBreak label="即时练习" />
          <PracticeCard questions={prereqPractice4} />
          <CalloutCard variant="warning" title="易错点" className="mt-3">
            <p>• 异分母<strong>不能直接加分子</strong>：<Math tex="\frac{1}{2} + \frac{1}{3} \neq \frac{2}{5}" />，必须先通分</p>
            <p>• 除以分数 = 乘以<strong>倒数</strong>，别忘了翻转</p>
            <p>• 约分要找<strong>最大公因数</strong>，一次除到底</p>
          </CalloutCard>
        </Collapsible>
      </section>

      <PageBreak label="多项式展开" />

      <section id="prereq-poly" className="mb-6 scroll-mt-4">
        <Collapsible title="五、多项式展开（复数乘法的核心）" defaultOpen storageKey="prereq:polynomial" headerExtra={<SpeakButton text={prereqNarrations.polynomial} />}>
          <p className="text-xs text-blue-600 mb-3">🎯 学完你能：用分配律、FOIL法、完全平方和平方差公式展开任意两个括号的乘法。</p>
          <div className="space-y-4 text-sm text-gray-700">
            <div>
              <p className="font-bold mb-1">分配律：</p>
              <Math tex="a(b+c) = ab + ac" display />
              <div className="bg-gray-50 rounded-lg p-3 mt-1 space-y-1">
                <p>例：<Math tex="3(x+2) = 3x + 6" /></p>
                <p>例：<Math tex="2(1+i) = 2 + 2i" /></p>
              </div>
            </div>
            <div>
              <p className="font-bold mb-1">两括号相乘（FOIL）：</p>
              <Math tex="(a+b)(c+d) = ac + ad + bc + bd" display />
              <p className="text-gray-500 mb-2">口诀：首首 + 首尾 + 尾首 + 尾尾</p>
              <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                <div>
                  <p className="font-bold">例1：</p>
                  <Math tex="(2+3)(4+5) = 2{\times}4 + 2{\times}5 + 3{\times}4 + 3{\times}5 = 8+10+12+15 = 45" display />
                </div>
                <div>
                  <p className="font-bold">例2（复数乘法！）：</p>
                  <Math tex="(2+i)(3-i) = 6-2i+3i-i^2 = 6+i-(-1) = 7+i" display />
                </div>
              </div>
            </div>
            <div>
              <p className="font-bold mb-1">完全平方公式：</p>
              <Math tex="(a+b)^2 = a^2 + 2ab + b^2" display />
              <Math tex="(a-b)^2 = a^2 - 2ab + b^2" display />
              <div className="bg-gray-50 rounded-lg p-3 mt-1">
                <p className="font-bold">例：</p>
                <Math tex="(1+i)^2 = 1^2 + 2(1)(i) + i^2 = 1 + 2i + (-1) = 2i" display />
              </div>
            </div>
            <CalloutCard variant="danger" title="平方差公式（复数除法的核心！）">
              <Math tex="(a+b)(a-b) = a^2 - b^2" display />
              <div className="mt-2 space-y-1">
                <p><Math tex="(1+i)(1-i) = 1^2 - i^2 = 1-(-1) = 2" /></p>
                <p><Math tex="(2+3i)(2-3i) = 4 - 9i^2 = 4+9 = 13" /></p>
                <p><Math tex="(a+bi)(a-bi) = a^2 - b^2 i^2 = a^2 + b^2" /> → 总是正实数！</p>
              </div>
              <p className="mt-2">
                这就是为什么除法要"乘以共轭复数"——<strong>用平方差公式把分母变成实数</strong>。
              </p>
            </CalloutCard>
          </div>
          <div className="mt-4 mb-2">
            <p className="font-bold text-gray-800 mb-2">展开公式速查表</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-200 px-3 py-2 text-left w-28">公式</th>
                    <th className="border border-gray-200 px-3 py-2 text-left">展开结果</th>
                    <th className="border border-gray-200 px-3 py-2 text-left">复数例子</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-200 px-3 py-2">分配律</td><td className="border border-gray-200 px-3 py-2"><Math tex="a(b+c)=ab+ac" /></td><td className="border border-gray-200 px-3 py-2"><Math tex="2(1+i)=2+2i" /></td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-200 px-3 py-2">FOIL</td><td className="border border-gray-200 px-3 py-2"><Math tex="(a+b)(c+d)" /></td><td className="border border-gray-200 px-3 py-2"><Math tex="(2+i)(3-i)=7+i" /></td></tr>
                  <tr><td className="border border-gray-200 px-3 py-2">完全平方</td><td className="border border-gray-200 px-3 py-2"><Math tex="(a+b)^2=a^2+2ab+b^2" /></td><td className="border border-gray-200 px-3 py-2"><Math tex="(1+i)^2=2i" /></td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-200 px-3 py-2">平方差</td><td className="border border-gray-200 px-3 py-2"><Math tex="(a+b)(a-b)=a^2-b^2" /></td><td className="border border-gray-200 px-3 py-2"><Math tex="(1+i)(1-i)=2" /></td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <PageBreak label="即时练习" />
          <PracticeCard questions={prereqPractice5} />
          <CalloutCard variant="warning" title="易错点" className="mt-3">
            <p>• 两个括号相乘<strong>不能只乘第一项</strong>：<Math tex="(a+b)(c+d) \neq ac+bd" /></p>
            <p>• 遇到 <Math tex="i^2" /> 一定要<strong>立刻替换成 -1</strong>，别漏了</p>
            <p>• 平方差公式的结果<strong>没有虚部</strong>，一定是正实数</p>
          </CalloutCard>
          <div className="mt-4 bg-purple-50 border border-purple-200 rounded-lg p-3">
            <p className="font-bold text-purple-800 mb-2">💡 i 的幂次规律（展开时经常用到）</p>
            <div className="grid grid-cols-4 gap-2 text-center text-sm mb-2">
              <div className="bg-white rounded px-2 py-1 border border-purple-200"><Math tex="i^1 = i" /></div>
              <div className="bg-white rounded px-2 py-1 border border-purple-200"><Math tex="i^2 = -1" /></div>
              <div className="bg-white rounded px-2 py-1 border border-purple-200"><Math tex="i^3 = -i" /></div>
              <div className="bg-white rounded px-2 py-1 border border-purple-200"><Math tex="i^4 = 1" /></div>
            </div>
            <p className="text-purple-700"><strong>每4次一循环</strong>：<Math tex="i \to -1 \to -i \to 1 \to i \to \cdots" /></p>
            <p className="text-gray-600 mt-1">技巧：看指数除以4的余数。余1得 <Math tex="i" />，余2得 <Math tex="-1" />，余3得 <Math tex="-i" />，余0得 <Math tex="1" /></p>
          </div>
        </Collapsible>
      </section>

      <PageBreak label="负数运算" />

      <section id="prereq-negative" className="mb-6 scroll-mt-4">
        <Collapsible title="六、负数运算" defaultOpen storageKey="prereq:negative" headerExtra={<SpeakButton text={prereqNarrations.negative} />}>
          <p className="text-xs text-blue-600 mb-2">🎯 学完你能：熟练处理负数加减乘除，不在 i²=-1 的符号变化上犯错。</p>
          <div className="space-y-2 text-sm text-gray-700">
            <div>
              <p className="font-bold mb-1">负数的加减：</p>
              <div className="bg-gray-50 rounded-lg p-2 space-y-0">
                <p>正 + 负：看谁绝对值大</p>
                <p className="pl-4"><Math tex="5 + (-3) = 2" /></p>
                <p className="pl-4"><Math tex="3 + (-7) = -4" /></p>
                <p>负 + 负：绝对值相加，结果取负</p>
                <p className="pl-4"><Math tex="(-3) + (-5) = -8" /></p>
                <p>减去负数 = 加上正数</p>
                <p className="pl-4"><Math tex="5 - (-3) = 5 + 3 = 8" /></p>
              </div>
            </div>
            <div>
              <p className="font-bold mb-1">负数的乘除：</p>
              <div className="bg-gray-50 rounded-lg p-2 font-mono">
                <p>正 × 正 = 正　　正 × 负 = 负</p>
                <p>负 × 正 = 负　　负 × 负 = 正</p>
              </div>
              <p className="mt-1 text-gray-500">口诀：同号得正，异号得负</p>
            </div>
            <div>
              <p className="font-bold mb-1">复数中常见的情况：</p>
              <div className="space-y-1">
                <p><Math tex="i^2 = -1" /></p>
                <p><Math tex="3i^2 = 3 \times (-1) = -3" /></p>
                <p><Math tex="-2i^2 = -2 \times (-1) = 2" /> ← 负负得正！</p>
                <p><Math tex="i^2 + 1 = -1 + 1 = 0" /></p>
                <p><Math tex="2 - i^2 = 2 - (-1) = 2 + 1 = 3" /></p>
              </div>
            </div>
            <CalloutCard variant="warning" title="最容易犯的错" icon={null}>
              <p>忘记 <Math tex="i^2 = -1" /> 带入时的符号变化。</p>
            </CalloutCard>
          </div>
          <PracticeCard questions={prereqPractice6} />
          <CalloutCard variant="warning" title="易错点" className="mt-2">
            <p>• <strong>减去负数 = 加正数</strong>：5 - (-3) = 8，不是 2</p>
            <p>• <strong>负 × 负 = 正</strong>：(-1)×(-1) = 1</p>
            <p>• <Math tex="i^2" /> 带入时<strong>先写括号</strong>：<Math tex="2-i^2 = 2-(-1) = 3" />，别写成 2-1=1</p>
          </CalloutCard>
        </Collapsible>
      </section>

      <PageBreak label="除以4求余数" />

      <section id="prereq-remainder" className="mb-6 scroll-mt-4">
        <Collapsible title="七、除以4求余数" defaultOpen storageKey="prereq:remainder" headerExtra={<SpeakButton text={prereqNarrations.remainder} />}>
          <p className="text-xs text-blue-600 mb-3">🎯 学完你能：用"除以4看余数"的方法，秒算 i 的任意次幂。</p>
          <div className="space-y-3 text-sm text-gray-700">
            <div>
              <p className="font-bold mb-1">先看一个规律：<Math tex="i" /> 的幂次每4个一循环</p>
              <div className="bg-gray-50 rounded-lg p-3 grid grid-cols-4 gap-2 text-center">
                <div className="bg-white rounded p-2 border border-gray-200">
                  <Math tex="i^1 = i" />
                  <br /><span className="text-gray-600 text-xs">余1</span>
                </div>
                <div className="bg-white rounded p-2 border border-gray-200">
                  <Math tex="i^2 = -1" />
                  <br /><span className="text-gray-600 text-xs">余2</span>
                </div>
                <div className="bg-white rounded p-2 border border-gray-200">
                  <Math tex="i^3 = -i" />
                  <br /><span className="text-gray-600 text-xs">余3</span>
                </div>
                <div className="bg-white rounded p-2 border border-gray-200">
                  <Math tex="i^4 = 1" />
                  <br /><span className="text-gray-600 text-xs">余0</span>
                </div>
              </div>
              <p className="text-gray-500 mt-2">然后又回到 <Math tex="i^5 = i" />，<Math tex="i^6 = -1" />……永远重复这4个结果。</p>
            </div>
            <div>
              <p className="font-bold mb-1">所以：用指数 ÷ 4，看余数就知道答案</p>
              <div className="bg-gray-50 rounded-lg p-3 space-y-2 text-center">
                <p><Math tex="i^{17}" />：17 ÷ 4 = 4 余 <strong>1</strong>，查上表余1 → <Math tex="i^{17} = i" /></p>
                <p><Math tex="i^{22}" />：22 ÷ 4 = 5 余 <strong>2</strong>，查上表余2 → <Math tex="i^{22} = -1" /></p>
                <p><Math tex="i^{100}" />：100 ÷ 4 = 25 余 <strong>0</strong>，查上表余0 → <Math tex="i^{100} = 1" /></p>
                <p><Math tex="i^{2025}" />：2025 ÷ 4 = 506 余 <strong>1</strong>，查上表余1 → <Math tex="i^{2025} = i" /></p>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-blue-800">
              <p className="font-bold mb-1">大数快速求余数：只看最后两位</p>
              <p className="text-gray-600 mb-1">最后两位 ÷ 4 的余数 = 整个数 ÷ 4 的余数</p>
              <div className="space-y-1 text-center">
                <p>2025 → 最后两位 25 ÷ 4 = 6 余 <strong>1</strong></p>
                <p>2024 → 最后两位 24 ÷ 4 = 6 余 <strong>0</strong></p>
              </div>
            </div>
          </div>
          <PracticeCard questions={prereqPractice7} />
          <div className="mt-3 bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm">
            <p className="font-bold text-amber-800 mb-1">⚠️ 易错点</p>
            <p className="text-gray-700">• <strong>余0 对应 <Math tex="i^4 = 1" /></strong>，不是 <Math tex="i^0" /></p>
            <p className="text-gray-700">• 大数先看<strong>最后两位</strong>再除以4，别硬算</p>
          </div>
        </Collapsible>
      </section>

      <PageBreak label="公式速查表" />

      {/* Formula Cheat Sheet */}
      <section className="mb-6">
        <Collapsible title="📌 公式速查表" storageKey="prereq:cheatsheet">
          <div className="space-y-3 text-sm text-gray-700">
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-bold mb-1">平方与平方根</p>
              <p>任何实数² ≥ 0　　<Math tex="i^2 = -1" />　　<Math tex="\sqrt{\phantom{x}}" /> 号默认取正值</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-bold mb-1">常用平方数</p>
              <div className="grid grid-cols-7 gap-1 text-center text-xs">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((n) => (
                  <span key={n}>{n}²={n * n}</span>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-bold mb-1">高频组合</p>
              <div className="grid grid-cols-2 gap-1 text-xs">
                <p>3²+4²=25 → √25=5</p>
                <p>5²+12²=169 → √169=13</p>
                <p>1²+1²=2 → √2≈1.414</p>
                <p>1²+2²=5 → √5≈2.236</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-bold mb-1">多项式公式</p>
              <div className="space-y-1">
                <p>分配律：<Math tex="a(b+c) = ab + ac" /></p>
                <p>FOIL：<Math tex="(a+b)(c+d) = ac+ad+bc+bd" /></p>
                <p>完全平方：<Math tex="(a+b)^2 = a^2+2ab+b^2" /></p>
                <p>平方差：<Math tex="(a+b)(a-b) = a^2-b^2" /></p>
                <p className="text-red-600 font-medium">复数关键：<Math tex="(a+bi)(a-bi) = a^2+b^2" />（总是正实数）</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-bold mb-1">分数运算</p>
              <p>同分母加减：直接加减分子｜异分母：先通分</p>
              <p>乘法：分子×分子 / 分母×分母｜除法：乘以倒数</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-bold mb-1">负数运算</p>
              <p>同号得正，异号得负｜减去负数 = 加正数</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-bold mb-1">i 的幂次循环</p>
              <p>余1→<Math tex="i" />　余2→<Math tex="-1" />　余3→<Math tex="-i" />　余0→<Math tex="1" />　｜快速求余：看最后两位÷4</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-bold mb-1">数的分类</p>
              <p>自然数 ⊂ 整数 ⊂ 有理数 ⊂ 实数 ⊂ <strong>复数</strong></p>
              <p className="mt-1">复数 = 实部 + 虚部：<Math tex="a + bi" />（<Math tex="a,b" /> 为实数，<Math tex="i^2=-1" />）</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 text-purple-800">
              <p className="font-bold mb-1">🎯 本章核心能力清单</p>
              <div className="grid grid-cols-2 gap-1 text-xs text-gray-700">
                <p>✅ 区分实数与复数</p>
                <p>✅ 脱口而出 1²~13²</p>
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
        />
      </section>

      {/* 答案与解析版块 — 仅打印时显示 */}
      {isPrinting && printOptions.showAnswers && (
        <>
          <PageBreak label="答案与解析" />
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">📝 答案与解析</h2>

            {[
              { label: '一、数的分类 — 即时练习', questions: prereqPractice1 },
              { label: '二、平方与平方根 — 即时练习', questions: prereqPractice2 },
              { label: '三、常用平方数 — 即时练习', questions: prereqPractice3 },
              { label: '四、分数运算 — 即时练习', questions: prereqPractice4 },
              { label: '五、多项式展开 — 即时练习', questions: prereqPractice5 },
              { label: '六、负数运算 — 即时练习', questions: prereqPractice6 },
              { label: '七、除以4求余数 — 即时练习', questions: prereqPractice7 },
              { label: '自测清单', questions: prereqSelfTest },
            ].map((section) => (
              <div key={section.label} className="mb-4">
                <p className="font-bold text-gray-800 mb-1 text-sm border-b border-gray-200 pb-1">{section.label}</p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-700">
                  {section.questions.map((q, idx) => (
                    <div key={q.id} className="flex gap-1 items-baseline">
                      <span className="text-blue-600 font-medium shrink-0">{idx + 1}.</span>
                      <span>
                        <span className="font-medium">{q.correctAnswer}</span>
                        {q.explanationLatex ? (
                          <span className="text-gray-500 ml-1">— <Math tex={q.explanationLatex} /></span>
                        ) : q.explanation ? (
                          <span className="text-gray-500 ml-1">— {q.explanation}</span>
                        ) : null}
                      </span>
                    </div>
                  ))}
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
