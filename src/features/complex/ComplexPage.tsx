import { AlertTriangle } from 'lucide-react';

import { Math, QuizPanel, Collapsible, SpeakButton, PageHeader, LessonLayout, CalloutCard, PracticeCard, ExportButton, PageBreak } from '@/components/shared';
import { complexNarrations } from './data/narrations';
import { complexPractice1, complexPractice2, complexPractice3, complexPractice4, complexPractice5 } from './data/practice';
import { useProgress, usePrintMode } from '@/hooks';
import { scrollToId } from '@/lib/scroll';
import { complexQuizQuestions } from './data/quiz';
import { complexProgressItems } from './data/progress';

export function ComplexPage() {
  const { items, toggle } = useProgress('complex', complexProgressItems);
  const { isPrinting, printOptions } = usePrintMode();

  return (
    <div>
      <PageHeader
        stage="第一阶段 · 数学语言"
        title="1.1 复数"
        narration={complexNarrations.intro}
        subtitle="从零到满分 · 2小时搞定高考必拿5分"
        tags={[
          { label: '难度 ★☆☆☆☆', color: 'green' },
          { label: '高考必考 5分', color: 'blue' },
          { label: '约2小时', color: 'purple' },
        ]}
      />

      <div className="flex justify-end mb-4 print:hidden">
        <ExportButton title="1.1 复数" />
      </div>

      {/* Knowledge Map */}
      <div className="bg-gray-50 rounded-xl p-4 mb-6 text-sm text-gray-600">
        <p className="font-bold text-gray-800 mb-2">📋 知识地图</p>
        <div className="grid grid-cols-2 gap-1">
          <button onClick={() => scrollToId('complex-why')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">一、为什么要发明复数 → i²=-1 的由来</button>
          <button onClick={() => scrollToId('complex-what')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">二、什么是复数 → 标准形式 a+bi</button>
          <button onClick={() => scrollToId('complex-equality')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">三、复数的相等 → 实部=实部，虚部=虚部</button>
          <button onClick={() => scrollToId('complex-ops')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">四、四则运算 → 加减乘除，把i当字母</button>
          <button onClick={() => scrollToId('complex-plane')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">五、复平面 → 几何意义，判断象限</button>
          <button onClick={() => scrollToId('complex-tips')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">⚡ 考场技巧 → 速算秒来5招</button>
          <button onClick={() => scrollToId('complex-quiz')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">七、高考真题实战 → 真题模拟</button>
        </div>
      </div>

      {/* 速通路线图 */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-5 mb-6">
        <p className="font-black text-blue-900 text-lg mb-1">速通路线图：复数就 3 个核心</p>
        <p className="text-blue-700 text-sm mb-4">把 i 当字母算，遇到 i² 换成 -1，就这么简单！高考稳拿 5 分。</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
          <div className="bg-white rounded-xl p-3 border border-blue-100">
            <p className="font-bold text-gray-800">① i² = -1</p>
            <p className="text-gray-500 mt-1">整个复数的根基，记住就行</p>
          </div>
          <div className="bg-white rounded-xl p-3 border border-blue-100">
            <p className="font-bold text-gray-800">② 四则运算</p>
            <p className="text-gray-500 mt-1">加减看对应，乘法展开，除法乘共轭</p>
          </div>
          <div className="bg-white rounded-xl p-3 border border-blue-100">
            <p className="font-bold text-gray-800">③ 复平面</p>
            <p className="text-gray-500 mt-1">a+bi → 点(a,b)，判断象限看正负</p>
          </div>
          <div className="bg-white rounded-xl p-3 border border-blue-100">
            <p className="font-bold text-gray-800">④ i 的幂次</p>
            <p className="text-gray-500 mt-1">4个一循环：i, -1, -i, 1</p>
          </div>
          <div className="bg-white rounded-xl p-3 border border-blue-100">
            <p className="font-bold text-gray-800">⑤ 共轭复数</p>
            <p className="text-gray-500 mt-1">a+bi 的共轭 = a-bi，虚部变号</p>
          </div>
          <div className="bg-yellow-50 rounded-xl p-3 border border-yellow-200">
            <p className="font-bold text-yellow-800">核心秘密</p>
            <p className="text-yellow-700 mt-1">复数题 = 计算题，不考思维，算对就满分！</p>
          </div>
        </div>
      </div>

      <LessonLayout progressItems={items} onToggle={toggle}>
          {/* Part 1: Why */}
          <section id="complex-why" className="mb-8 scroll-mt-4">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                1
              </span>
              为什么要发明复数？
              <SpeakButton text={complexNarrations.whyComplex} />
            </h2>

            <div className="bg-white rounded-xl border border-gray-200 p-4 mb-3">
              <p className="text-gray-700 mb-3">你学过解方程：</p>
              <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm space-y-2 mb-3">
                <div className="flex items-center gap-3">
                  <Math tex="x + 3 = 5" />
                  <span className="text-gray-400">→</span>
                  <Math tex="x = 2" />
                  <span className="text-green-500 font-bold">✓</span>
                </div>
                <div className="flex items-center gap-3">
                  <Math tex="x^2 = 4" />
                  <span className="text-gray-400">→</span>
                  <Math tex="x = \pm 2" />
                  <span className="text-green-500 font-bold">✓</span>
                </div>
                <div className="flex items-center gap-3">
                  <Math tex="x^2 = -1" />
                  <span className="text-gray-400">→</span>
                  <Math tex="x = \;?" />
                  <span className="text-red-500 font-bold">✗ 没有实数解！</span>
                </div>
              </div>

              <p className="text-gray-700 mb-2">
                数学家说：既然没有，那就<strong>造一个</strong>。
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
                <p className="text-blue-800 text-sm">
                  就像人类发明了"0"来表示"没有"，发明了"负数"来表示"欠债"，
                  现在发明一个新数 <Math tex="i" /> 来表示“平方等于 <Math tex="-1" /> 的数”。
                </p>
              </div>

              <div className="bg-slate-900 text-white rounded-xl p-4 text-center break-inside-avoid" style={{ breakInside: 'avoid' }}>
                <p className="text-sm text-slate-400 mb-2">核心定义（整个复数的根基）</p>
                <Math tex="i^2 = -1" display className="text-2xl" />
                <p className="text-sm text-slate-400 mt-2">
                  就这一条，整个复数体系都从这里长出来。
                </p>
              </div>
            </div>

            <PracticeCard questions={complexPractice1} />
            <CalloutCard variant="warning" title="易错点" className="mt-3">
              <p>• <strong>i² = -1</strong>，不是 i = -1（i 本身不等于 -1）</p>
              <p>• i 不在数轴上，不能和实数比大小</p>
            </CalloutCard>
          </section>

          {/* Part 2: What */}
          <section id="complex-what" className="mb-4 scroll-mt-4">
            <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                2
              </span>
              什么是复数？
              <SpeakButton text={complexNarrations.whatIsComplex} />
            </h2>

            <div className="bg-white rounded-xl border border-gray-200 p-3 mb-3">
              <div className="bg-gray-50 rounded-lg p-3 text-center mb-3">
                <Math tex="z = a + bi" display />
                <div className="flex justify-center gap-8 mt-2 text-sm text-gray-600">
                  <span>
                    <Math tex="a" /> = 实部
                  </span>
                  <span>
                    <Math tex="b" /> = 虚部（系数！）
                  </span>
                  <span>
                    <Math tex="i" /> = 虚数单位
                  </span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-2 py-1 text-left">复数 <Math tex="z" /></th>
                      <th className="border border-gray-200 px-2 py-1 text-center">实部 <Math tex="a" /></th>
                      <th className="border border-gray-200 px-2 py-1 text-center">虚部 <Math tex="b" /></th>
                      <th className="border border-gray-200 px-2 py-1 text-left">类型</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['3 + 2i', '3', '2', '虚数'],
                      ['5 - 4i', '5', '-4', '虚数'],
                      ['7', '7', '0', '实数'],
                      ['3i', '0', '3', '纯虚数'],
                      ['0', '0', '0', '实数（也是复数）'],
                    ].map(([z, a, b, type], idx) => (
                      <tr key={idx} className="hover:bg-blue-50">
                        <td className="border border-gray-200 px-2 py-1">
                          <Math tex={z} />
                        </td>
                        <td className="border border-gray-200 px-2 py-1 text-center"><Math tex={a} /></td>
                        <td className="border border-gray-200 px-2 py-1 text-center"><Math tex={b} /></td>
                        <td className="border border-gray-200 px-2 py-1">{type}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 mb-3">
              <p className="font-bold text-blue-800 mb-2">📂 复数的分类</p>
              <div className="bg-white rounded-lg p-3 text-sm text-center font-mono">
                <p className="mb-1">复数 <Math tex="z = a + bi" /></p>
                <p className="text-gray-400 mb-1">┌─────────┴─────────┐</p>
                <div className="flex justify-center gap-12 mb-1">
                  <span><Math tex="b = 0" /></span>
                  <span><Math tex="b \neq 0" /></span>
                </div>
                <div className="flex justify-center gap-16 mb-1">
                  <span className="text-green-700 font-bold">实数</span>
                  <span className="text-purple-700 font-bold">虚数</span>
                </div>
                <p className="text-gray-400 mb-1 ml-24">┌─────┴─────┐</p>
                <div className="flex justify-center gap-4 ml-24">
                  <div className="text-center">
                    <p><Math tex="a \neq 0" /></p>
                    <p className="text-blue-700 font-bold">一般虚数</p>
                  </div>
                  <div className="text-center">
                    <p><Math tex="a = 0" /></p>
                    <p className="text-red-600 font-bold">纯虚数</p>
                  </div>
                </div>
              </div>
              <p className="text-blue-700 text-xs mt-2">💡 实数也是复数（虚部为0的复数）；0 既是实数也是复数，但<strong>不是</strong>纯虚数。</p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-3 flex items-start gap-2">
              <AlertTriangle size={20} className="text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-red-700 text-sm">高考陷阱</p>
                <p className="text-red-700 text-sm mt-1">
                  虚部是系数 <Math tex="b" />，不是 <Math tex="bi" />！ 例：
                  <Math tex="z = 3 + 5i" /> 的虚部是 <Math tex="5" />，不是 <Math tex="5i" />。每年都有人栽。
                </p>
              </div>
            </div>

            <PracticeCard questions={complexPractice2} />
          </section>

          {/* Part 3: Equality */}
          <section id="complex-equality" className="mb-4 scroll-mt-4">
            <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                3
              </span>
              复数的相等
              <SpeakButton text={complexNarrations.equality} />
            </h2>

            <div className="bg-white rounded-xl border border-gray-200 p-4 mb-3">
              <p className="text-gray-700 mb-2">两个复数相等的条件：</p>
              <div className="bg-gray-50 rounded-lg p-3 mb-3">
                <Math tex="a + bi = c + di \iff a = c \;\text{且}\; b = d" display />
              </div>
              <p className="text-gray-700 mb-2"><strong>实部等于实部，虚部等于虚部。</strong></p>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-sm text-gray-600 mb-2">例：已知 <Math tex="(2x-1) + (y+3)i = 0" />，求 x, y。</p>
                <p className="text-sm text-gray-700">实部：<Math tex="2x - 1 = 0 \Rightarrow x = \tfrac{1}{2}" /></p>
                <p className="text-sm text-gray-700">虚部：<Math tex="y + 3 = 0 \Rightarrow y = -3" /></p>
              </div>
            </div>

            <PracticeCard questions={complexPractice3} />
            <CalloutCard variant="warning" title="易错点" className="mt-2">
              <p>• <strong>虚数不能比大小！</strong> 3+2i 和 1+5i 谁大？没有意义，只有实数才能比大小</p>
              <p>• 复数等于0 ⇔ <strong>实部和虚部都等于0</strong></p>
            </CalloutCard>
          </section>

          <PageBreak label="复数运算" />

          {/* Part 4: Operations */}
          <section id="complex-ops" className="mb-8 scroll-mt-4">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                4
              </span>
              四则运算
              <SpeakButton text={complexNarrations.operationIntro} />
            </h2>

            <CalloutCard variant="tip" title="核心思想（第一性原理）" className="mb-4">
              <p>
                把 <Math tex="i" /> 当成一个字母（像 <Math tex="x" /> 一样），按多项式运算规则来算，遇到 <Math tex="i^2" /> 就替换成 <Math tex="-1" />。
                <strong>就这一条，你就会算所有复数运算了。</strong>
              </p>
            </CalloutCard>

            <Collapsible title="加法和减法" defaultOpen storageKey="complex:add-sub" headerExtra={<SpeakButton text={complexNarrations.addSub} />}>
              <p className="text-sm text-gray-700 mb-3"><strong>规则：实部加实部，虚部加虚部</strong></p>
              <div className="bg-gray-50 rounded-lg p-4 mb-3 space-y-1">
                <Math tex="(a + bi) + (c + di) = (a+c) + (b+d)i" display />
                <Math tex="(a + bi) - (c + di) = (a-c) + (b-d)i" display />
              </div>
              <div className="space-y-3 text-sm">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold mb-1">例1：</p>
                  <Math tex="(3+2i) + (1+4i) = (3{+}1) + (2{+}4)i = 4 + 6i" display />
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold mb-1">例2：</p>
                  <Math tex="(5+3i) - (2-i) = (5{-}2) + (3{-}({-}1))i = 3 + 4i" display />
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-3">跟合并同类项一模一样，没什么新东西。</p>
            </Collapsible>

            <Collapsible title="乘法" defaultOpen storageKey="complex:mul" headerExtra={<SpeakButton text={complexNarrations.multiply} />}>
              <p className="text-sm text-gray-700 mb-3"><strong>规则：展开括号（像多项式乘法），遇到 <Math tex="i^2" /> 换成 <Math tex="-1" /></strong></p>
              <p className="text-sm text-gray-500 mb-3">不用背公式！直接展开就行。</p>
              <div className="space-y-3 text-sm">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold mb-1">例1：<Math tex="(2+3i)(1+i)" /></p>
                  <div className="space-y-1 text-gray-700">
                    <p><Math tex="= 2 \cdot 1 + 2 \cdot i + 3i \cdot 1 + 3i \cdot i" /></p>
                    <p><Math tex="= 2 + 2i + 3i + 3i^2" /></p>
                    <p><Math tex="= 2 + 5i + 3(-1) = -1 + 5i" /></p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold mb-1">例2：<Math tex="(1+i)^2" /></p>
                  <div className="space-y-1 text-gray-700">
                    <p><Math tex="= 1 + i + i + i^2" /></p>
                    <p><Math tex="= 1 + 2i + (-1) = 2i" /></p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold mb-1">例3：<Math tex="(1-i)^2" /></p>
                  <div className="space-y-1 text-gray-700">
                    <p><Math tex="= 1 - i - i + i^2" /></p>
                    <p><Math tex="= 1 - 2i + (-1) = -2i" /></p>
                  </div>
                </div>
              </div>
              <PageBreak label="必记结论 + 高次幂" />

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-3">
                <p className="text-blue-800 text-sm font-bold mb-1">🔑 必记结论（高考常用）：</p>
                <div className="flex gap-6">
                  <Math tex="(1+i)^2 = 2i" />
                  <Math tex="(1-i)^2 = -2i" />
                </div>
              </div>

              <div className="mt-4 border-t border-gray-200 pt-4">
                <p className="text-sm font-bold text-gray-900 mb-2">高次幂怎么算？——拆成"已知结论"反复用</p>
                <p className="text-sm text-gray-500 mb-3">思路：先算平方，再用平方结论往上叠。</p>
                <div className="space-y-3 text-sm">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="font-bold mb-1">例4：求 <Math tex="(1-i)^4" /></p>
                    <div className="space-y-1 text-gray-700">
                      <p>第一步：先用已知结论 <Math tex="(1-i)^2 = -2i" /></p>
                      <p>第二步：<Math tex="(1-i)^4 = \left[(1-i)^2\right]^2 = (-2i)^2" /></p>
                      <p>第三步：<Math tex="(-2i)^2 = 4i^2 = 4 \times (-1) = -4" /></p>
                      <p className="font-bold text-blue-700">答案：<Math tex="(1-i)^4 = -4" /></p>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="font-bold mb-1">例5：求 <Math tex="(1+i)^4" /></p>
                    <div className="space-y-1 text-gray-700">
                      <p><Math tex="(1+i)^4 = \left[(1+i)^2\right]^2 = (2i)^2 = 4i^2 = -4" /></p>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="font-bold mb-1">例6：求 <Math tex="(1+i)^8" /></p>
                    <div className="space-y-1 text-gray-700">
                      <p><Math tex="(1+i)^8 = \left[(1+i)^4\right]^2 = (-4)^2 = 16" /></p>
                    </div>
                  </div>
                </div>
                <CalloutCard variant="tip" icon={null} className="mt-3">
                  <p>💡 <strong>套路：</strong>高次幂 → 先拆成平方的幂 → 用已知结论代入 → 化简。遇到 <Math tex="i^2" /> 就换成 <Math tex="-1" />，万变不离其宗。</p>
                </CalloutCard>
              </div>
            </Collapsible>

            <Collapsible title="i 的幂次规律（必背）" defaultOpen storageKey="complex:i-powers" headerExtra={<SpeakButton text={complexNarrations.iPowers} />}>
              <div className="overflow-x-auto">
                <table className="text-sm border-collapse mb-3">
                  <tbody>
                    <tr>
                      {[
                        ['i^1', 'i'],
                        ['i^2', '-1'],
                        ['i^3', '-i'],
                        ['i^4', '1'],
                      ].map(([power, result], idx) => (
                        <td
                          key={idx}
                          className="border border-gray-200 px-4 py-2 text-center"
                        >
                          <Math tex={`${power} = ${result}`} />
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-700 mb-2">
                <strong>每4个一循环！</strong>快速求法：指数除以4看余数
              </p>
              <div className="text-sm text-gray-600 space-y-1">
                <p>
                  例1：<Math tex="i^{17}" />，17 ÷ 4 余 <strong>1</strong> → <Math tex="i^{17} = i" />
                </p>
                <p>
                  例2：<Math tex="i^{22}" />，22 ÷ 4 余 <strong>2</strong> → <Math tex="i^{22} = -1" />
                </p>
                <p>
                  例3：<Math tex="i^{67}" />，67 ÷ 4 余 <strong>3</strong> → <Math tex="i^{67} = -i" />
                </p>
                <p>
                  例4：<Math tex="i^{100}" />，100 ÷ 4 余 <strong>0</strong> → <Math tex="i^{100} = 1" />
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-3 text-sm text-blue-800">
                <p className="font-bold mb-1">连续4个 <Math tex="i" /> 的幂相加 <Math tex="= 0" /></p>
                <p className="mb-1">为什么？因为4个一组刚好凑成：</p>
                <Math tex="i + (-1) + (-i) + 1 = 0" display />
                <p className="text-blue-600 mt-1">
                  所以 <Math tex="i^n + i^{n+1} + i^{n+2} + i^{n+3} = 0" />，不管 n 是几都成立。
                </p>
              </div>
            </Collapsible>

            <PageBreak label="共轭复数" />

            <Collapsible title="共轭复数" defaultOpen storageKey="complex:conjugate" headerExtra={<SpeakButton text={complexNarrations.conjugate} />}>
              <p className="text-sm text-gray-700 mb-3"><strong>定义：实部相同，虚部相反</strong>的两个复数互为共轭复数。</p>
              <div className="bg-gray-50 rounded-lg p-4 mb-3">
                <Math tex="z = a + bi \quad \Rightarrow \quad \bar{z} = a - bi" display />
              </div>
              <div className="space-y-1 text-sm text-gray-700 mb-4">
                <p>例：<Math tex="3+2i" /> 的共轭是 <Math tex="3-2i" /></p>
                <p>例：<Math tex="1-5i" /> 的共轭是 <Math tex="1+5i" /></p>
                <p>例：<Math tex="4" />（实数）的共轭是 <Math tex="4" />（本身）</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
                <p className="text-blue-800 text-sm font-bold mb-1">🔑 关键性质：</p>
                <Math tex="z \cdot \bar{z} = (a+bi)(a-bi) = a^2 + b^2" display />
                <p className="text-blue-700 text-sm mt-2 mb-1">为什么？用平方差公式展开：</p>
                <Math tex="(a+bi)(a-bi) = a^2 - (bi)^2 = a^2 - b^2 i^2 = a^2 - b^2(-1) = a^2 + b^2" display />
                <p className="text-blue-800 text-sm mt-2">
                  结果一定是<strong>非负实数</strong>！这就是除法要"乘共轭"的原因——<strong>分母变成实数</strong>。
                </p>
              </div>
            </Collapsible>

            <Collapsible title="除法（最重要的运算技巧）" defaultOpen storageKey="complex:division" headerExtra={<SpeakButton text={complexNarrations.division} />}>
              <p className="text-sm text-gray-700 mb-3"><strong>核心方法：分母实数化——上下同乘分母的共轭复数</strong></p>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <Math tex="\frac{a+bi}{c+di} = \frac{(a+bi)(c-di)}{(c+di)(c-di)} = \frac{(a+bi)(c-di)}{c^2+d^2}" display />
                <p className="text-sm text-gray-500 mt-2 text-center">分母变成 <Math tex="c^2+d^2" />（实数！）</p>
              </div>
              <div className="space-y-3 text-sm">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold mb-1">例1：计算 <Math tex="\dfrac{1+i}{1-i}" /></p>
                  <div className="space-y-1 text-gray-700">
                    <p>分母共轭：<Math tex="1+i" /></p>
                    <p><Math tex="= \dfrac{(1+i)(1+i)}{(1-i)(1+i)} = \dfrac{(1+i)^2}{1^2+1^2} = \dfrac{2i}{2} = i" /></p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold mb-1">例2：计算 <Math tex="\dfrac{3+i}{1+i}" /></p>
                  <div className="space-y-1 text-gray-700">
                    <p>分母共轭：<Math tex="1-i" /></p>
                    <p><Math tex="= \dfrac{(3+i)(1-i)}{(1+i)(1-i)} = \dfrac{3-3i+i-i^2}{1+1} = \dfrac{4-2i}{2} = 2-i" /></p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-100 rounded-lg p-4 text-sm mt-3">
                <p className="font-bold mb-2">除法三步走（步骤固定，死记硬背都行）：</p>
                <ol className="list-decimal list-inside space-y-1 text-gray-700">
                  <li>写出分母的共轭复数</li>
                  <li>分子分母同时乘以这个共轭复数</li>
                  <li>展开计算，整理成 <Math tex="a + bi" /> 的形式</li>
                </ol>
              </div>
            </Collapsible>

            <Collapsible title="复数的模（大小/长度）" defaultOpen storageKey="complex:modulus" headerExtra={<SpeakButton text={complexNarrations.modulus} />}>
              <p className="text-sm text-gray-700 mb-3"><strong>定义：复数 z = a + bi 的模，表示复数的"大小"</strong></p>
              <div className="bg-gray-50 rounded-lg p-4 mb-3">
                <Math tex="|z| = |a + bi| = \sqrt{a^2 + b^2}" display />
              </div>
              <CalloutCard variant="tip" title="为什么是这个公式？" className="mb-4">
                <p className="mb-2">
                  复数 <Math tex="z = a + bi" /> 在复平面上对应点 <Math tex="(a, b)" />。
                  模就是这个点到原点的<strong>距离</strong>，用勾股定理：
                </p>
                <Math tex="|z| = \sqrt{a^2 + b^2}" display />
                <p className="mt-2 mb-1">
                  还可以用共轭来推：
                </p>
                <Math tex="z \cdot \bar{z} = (a+bi)(a-bi) = a^2 + b^2" display />
                <p className="mt-1">
                  所以 <Math tex="|z|^2 = z \cdot \bar{z}" />，两边开方就得到 <Math tex="|z| = \sqrt{a^2 + b^2}" />。
                </p>
              </CalloutCard>
              <div className="space-y-3 text-sm">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold mb-1">例1：</p>
                  <Math tex="|3+4i| = \sqrt{9+16} = \sqrt{25} = 5" display />
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold mb-1">例2：</p>
                  <Math tex="|1-i| = \sqrt{1+1} = \sqrt{2}" display />
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold mb-1">例3（实数）：</p>
                  <Math tex="|5| = \sqrt{25+0} = 5" display />
                  <p className="text-gray-500 mt-1">实数的模就是绝对值。</p>
                </div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-3 text-sm">
                <p className="text-blue-800 font-bold mb-1">🔑 模的性质：</p>
                <div className="space-y-1 text-blue-700">
                  <p><Math tex="|z|^2 = z \cdot \bar{z} = a^2 + b^2" /></p>
                  <p><Math tex="|z_1 \cdot z_2| = |z_1| \cdot |z_2|" /></p>
                  <p><Math tex="\left|\dfrac{z_1}{z_2}\right| = \dfrac{|z_1|}{|z_2|}" /></p>
                </div>
              </div>
            </Collapsible>

            <PageBreak label="四则运算练习" />

            <PracticeCard questions={complexPractice4} />
            <CalloutCard variant="warning" title="易错点" className="mt-3">
              <p>• 遇到 <Math tex="i^2" /> <strong>必须立刻换成 -1</strong></p>
              <p>• 除法三步走：写共轭 → 上下同乘 → 整理成 <Math tex="a+bi" /></p>
              <p>• <strong>虚部是 <Math tex="b" />，不是 <Math tex="bi" /></strong></p>
              <p>• i 的幂次：<strong>除以4看余数</strong>，余1→i，余2→-1，余3→-i，余0→1</p>
              <p>• 共轭相乘 <Math tex="z \cdot \bar{z} = a^2+b^2" />，结果一定是<strong>非负实数</strong></p>
            </CalloutCard>
          </section>

          <PageBreak label="复平面" />

          {/* Part 5: Complex Plane */}
          <section id="complex-plane" className="mb-8 scroll-mt-4">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                5
              </span>
              复平面（几何意义）
              <SpeakButton text={complexNarrations.complexPlane} />
            </h2>

            <div className="bg-white rounded-xl border border-gray-200 p-4 mb-3">
              <p className="text-gray-700 mb-2">
                每个复数 <Math tex="z = a + bi" /> 对应复平面上的一个点 <Math tex="(a, b)" />：
              </p>
              {/* 纯 HTML+CSS 复平面 */}
              <div className="mb-3 rounded-lg border border-gray-200 bg-white relative" style={{ height: 220 }}>
                {/* 网格容器 */}
                <div className="absolute inset-0" style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gridTemplateRows: 'repeat(6, 1fr)' }}>
                  {Array.from({ length: 48 }).map((_, i) => (
                    <div key={i} style={{ border: '1px solid #f0f0f0' }} />
                  ))}
                </div>
                {/* x轴 */}
                <div className="absolute left-0 right-0" style={{ top: '50%', height: 2, backgroundColor: '#374151' }} />
                {/* y轴 */}
                <div className="absolute top-0 bottom-0" style={{ left: '50%', width: 2, backgroundColor: '#374151' }} />
                {/* x轴刻度标签 */}
                {[-3, -2, -1, 1, 2, 3].map(n => (
                  <span key={`x${n}`} className="absolute text-xs text-gray-500" style={{ left: `${50 + n * 12.5}%`, top: '52%', transform: 'translateX(-50%)' }}>{n}</span>
                ))}
                {/* y轴刻度标签 */}
                {[-2, -1, 1, 2].map(n => (
                  <span key={`y${n}`} className="absolute text-xs text-gray-500" style={{ top: `${50 - n * 16.67}%`, left: '52%', transform: 'translateY(-50%)' }}>{n}i</span>
                ))}
                {/* 轴标签 */}
                <span className="absolute text-xs font-bold text-gray-600" style={{ right: 8, top: '52%' }}>实轴</span>
                <span className="absolute text-xs font-bold text-gray-600" style={{ left: '52%', top: 4 }}>虚轴</span>
                {/* z₁ = 3+2i 点 */}
                <div className="absolute w-3 h-3 rounded-full bg-blue-500" style={{ left: `${50 + 3 * 12.5}%`, top: `${50 - 2 * 16.67}%`, transform: 'translate(-50%, -50%)' }} />
                <span className="absolute text-xs font-bold text-blue-600" style={{ left: `${50 + 3 * 12.5 + 2}%`, top: `${50 - 2 * 16.67 - 5}%` }}>z₁ = 3+2i</span>
                {/* z₂ = -2-2i 点 */}
                <div className="absolute w-3 h-3 rounded-full bg-red-500" style={{ left: `${50 + (-2) * 12.5}%`, top: `${50 - (-2) * 16.67}%`, transform: 'translate(-50%, -50%)' }} />
                <span className="absolute text-xs font-bold text-red-500" style={{ left: `${50 + (-2) * 12.5 - 14}%`, top: `${50 - (-2) * 16.67 + 2}%` }}>z₂ = -2-2i</span>
                {/* 2i 纯虚数 */}
                <div className="absolute w-2.5 h-2.5 rounded-full bg-purple-500" style={{ left: '50%', top: `${50 - 2 * 16.67}%`, transform: 'translate(-50%, -50%)' }} />
                <span className="absolute text-xs text-purple-600" style={{ left: '53%', top: `${50 - 2 * 16.67 - 5}%` }}>2i（纯虚数）</span>
                {/* -1 实数 */}
                <div className="absolute w-2.5 h-2.5 rounded-full bg-green-600" style={{ left: `${50 + (-1) * 12.5}%`, top: '50%', transform: 'translate(-50%, -50%)' }} />
                <span className="absolute text-xs text-green-700" style={{ left: `${50 + (-1) * 12.5 - 6}%`, top: '55%' }}>-1（实数）</span>
                {/* 象限标注 */}
                <span className="absolute text-xs text-gray-400" style={{ left: '68%', top: '25%' }}>第一象限</span>
                <span className="absolute text-xs text-gray-400" style={{ left: '18%', top: '25%' }}>第二象限</span>
                <span className="absolute text-xs text-gray-400" style={{ left: '18%', top: '70%' }}>第三象限</span>
                <span className="absolute text-xs text-gray-400" style={{ left: '68%', top: '70%' }}>第四象限</span>
              </div>
              <div className="text-sm space-y-1 mb-2">
                <p className="text-gray-700">• <strong>x轴 = 实轴</strong>：上面的点都是实数</p>
                <p className="text-gray-700">• <strong>y轴 = 虚轴</strong>：上面的点（除原点）都是纯虚数</p>
                <p className="text-gray-700">• <Math tex="|z|" /> = 点到原点的距离</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm">
                <p className="text-blue-800 font-bold mb-1">判断象限方法：</p>
                <p className="text-blue-700 mb-1">先化简成 <Math tex="a + bi" />，然后看 <Math tex="(a, b)" /> 在哪个象限：</p>
                <div className="grid grid-cols-2 gap-1 text-blue-700">
                  <p><Math tex="a>0,b>0" /> → 第一象限</p>
                  <p><Math tex="a<0,b>0" /> → 第二象限</p>
                  <p><Math tex="a<0,b<0" /> → 第三象限</p>
                  <p><Math tex="a>0,b<0" /> → 第四象限</p>
                </div>
              </div>
            </div>

            <PracticeCard questions={complexPractice5} />
            <CalloutCard variant="warning" title="易错点" className="mt-2">
              <p>• 实部是 x 坐标，虚部是 y 坐标，<strong>别搞反</strong></p>
              <p>• 点在坐标轴上<strong>不属于任何象限</strong></p>
            </CalloutCard>
          </section>

          <PageBreak label="技巧速查" />

          {/* Part 6: Tips & Tricks */}
          <section id="complex-tips" className="mb-8 scroll-mt-4">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-orange-500 text-white flex items-center justify-center text-sm font-bold">
                ⚡
              </span>
              考场技巧（速算秒杀）
              <SpeakButton text={complexNarrations.tricks} />
            </h2>

            <Collapsible title="技巧1：凑因子法（除法秒杀）" defaultOpen storageKey="complex:trick-factor">
              <p className="text-sm text-gray-700 mb-3">
                拿到除法题，先观察<strong>分子是不是分母的简单倍数</strong>。如果是，直接约掉，秒出答案。
              </p>
              <div className="bg-gray-50 rounded-lg p-3 mb-3 text-sm">
                <p className="font-bold mb-1">例：（2025·全国一卷）求 <Math tex="\dfrac{2+i}{1-2i}" /> 的虚部</p>
                <p className="text-gray-500 mb-2">观察：分子能不能写成 分母 × 某个简单因子？</p>
                <div className="space-y-1 text-gray-700">
                  <p>试试乘 <Math tex="i" />：<Math tex="i \times (1-2i) = i - 2i^2 = i + 2 = 2 + i" /> ✓ 凑上了！</p>
                  <p>所以 <Math tex="\dfrac{2+i}{1-2i} = \dfrac{i(1-2i)}{1-2i} = i" />，虚部 = <strong>1</strong></p>
                </div>
              </div>
              <CalloutCard variant="tip" icon={null}>
                <p>⏱ 常规三步走要30秒，凑因子法只要5秒。但不是每题都能凑，凑不出就老实乘共轭。</p>
              </CalloutCard>
            </Collapsible>

            <Collapsible title="技巧2：模的速算（不用化简）" defaultOpen storageKey="complex:trick-modulus">
              <p className="text-sm text-gray-700 mb-3">
                求 <Math tex="\left|\dfrac{z_1}{z_2}\right|" /> 时，<strong>不需要先做除法再求模</strong>，直接用性质：
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-3">
                <Math tex="\left|\frac{z_1}{z_2}\right| = \frac{|z_1|}{|z_2|}" display />
              </div>
              <div className="bg-gray-50 rounded-lg p-3 mb-2 text-sm">
                <p className="font-bold mb-1">例：求 <Math tex="\left|\dfrac{2+i}{1+i}\right|" /></p>
                <div className="space-y-0.5 text-gray-700">
                  <p><Math tex="|2+i| = \sqrt{4+1} = \sqrt{5}" /></p>
                  <p><Math tex="|1+i| = \sqrt{1+1} = \sqrt{2}" /></p>
                  <p>所以 <Math tex="\left|\dfrac{2+i}{1+i}\right| = \dfrac{\sqrt{5}}{\sqrt{2}} = \dfrac{\sqrt{10}}{2}" /></p>
                </div>
              </div>
              <CalloutCard variant="tip" icon={null}>
                <p>⏱ 比先化简除法再求模快得多！只要题目问的是<strong>模</strong>，就用这招。</p>
              </CalloutCard>
            </Collapsible>

            <Collapsible title="技巧3：共轭的妙用" defaultOpen storageKey="complex:trick-conjugate">
              <p className="text-sm text-gray-700 mb-2">共轭有3个速算公式，高考经常直接考：</p>
              <div className="bg-gray-50 rounded-lg p-3 mb-2 space-y-1 text-sm">
                <p>① <Math tex="z + \bar{z} = 2a" />（实部的两倍）</p>
                <p>② <Math tex="z - \bar{z} = 2bi" />（虚部的两倍 × i）</p>
                <p>③ <Math tex="z \cdot \bar{z} = a^2 + b^2 = |z|^2" /></p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 text-sm">
                <p className="font-bold mb-1">例：已知 <Math tex="z = 1+i" />，求 <Math tex="z + \bar{z}" /></p>
                <p className="text-gray-700">直接用公式①：<Math tex="z + \bar{z} = 2 \times 1 = 2" />，不用算 <Math tex="\bar{z}" /></p>
              </div>
            </Collapsible>

            <Collapsible title="技巧4：(1+i) 家族速查" defaultOpen storageKey="complex:trick-1i">
              <p className="text-sm text-gray-700 mb-3">这几个结论高考反复考，直接记住省时间：</p>
              <div className="bg-gray-50 rounded-lg p-4 text-sm">
                <div className="grid grid-cols-2 gap-2">
                  <p><Math tex="(1+i)^2 = 2i" /></p>
                  <p><Math tex="(1-i)^2 = -2i" /></p>
                  <p><Math tex="(1+i)(1-i) = 2" /></p>
                  <p><Math tex="\dfrac{1+i}{1-i} = i" /></p>
                  <p><Math tex="\dfrac{1-i}{1+i} = -i" /></p>
                  <p><Math tex="|1+i| = |1-i| = \sqrt{2}" /></p>
                </div>
              </div>
            </Collapsible>

            <Collapsible title="技巧5：纯虚数条件速列" defaultOpen storageKey="complex:trick-pure-imaginary">
              <p className="text-sm text-gray-700 mb-3">
                题目说"z 是纯虚数"，立刻列两个条件：
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-3">
                <Math tex="\text{实部} = 0 \quad \text{且} \quad \text{虚部} \neq 0" display />
              </div>
              <div className="bg-gray-50 rounded-lg p-3 text-sm">
                <p className="font-bold mb-1">例：<Math tex="z = (m^2-1) + (m+1)i" /> 是纯虚数，求 m</p>
                <div className="space-y-1 text-gray-700">
                  <p>实部 = 0：<Math tex="m^2 - 1 = 0 \Rightarrow m = \pm 1" /></p>
                  <p>虚部 ≠ 0：<Math tex="m + 1 \neq 0 \Rightarrow m \neq -1" /></p>
                  <p>所以 <Math tex="m = 1" />（排除 m = -1）</p>
                </div>
              </div>
              <CalloutCard variant="warning" icon={null} className="mt-3">
                <p>⚠️ 很多人只列了实部=0，忘了检查虚部≠0，白送分！</p>
              </CalloutCard>
            </Collapsible>
          </section>

          {/* Part 7: Quiz */}
          <section id="complex-quiz" className="mb-8 scroll-mt-4">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-green-500 text-white flex items-center justify-center text-sm font-bold">
                7
              </span>
              高考真题实战
            </h2>

            <QuizPanel
              module="complex"
              questions={complexQuizQuestions}
              title="复数真题"
              description="16道高考真题，覆盖全部复数考法。"
            />
          </section>

          {/* Part 7: Formula Sheet */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-purple-500 text-white flex items-center justify-center text-sm font-bold">
                📌
              </span>
              公式速查表
              <SpeakButton text={complexNarrations.summary} />
            </h2>
            <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-3 text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-slate-400 text-xs mb-1">定义</p>
                  <p>
                    <Math tex="z = a + bi" /> （<Math tex="a" /> 实部，<Math tex="b" /> 虚部）
                  </p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs mb-1">核心</p>
                  <p>
                    <Math tex="i^2 = -1" />
                  </p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs mb-1">运算</p>
                  <p>把 <Math tex="i" /> 当字母，展开计算，<Math tex="i^2" /> 换成 <Math tex="-1" /></p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs mb-1">除法</p>
                  <p>上下同乘分母的共轭</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs mb-1">共轭性质</p>
                  <p><Math tex="z \cdot \bar{z} = a^2 + b^2" /></p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs mb-1">模</p>
                  <p>
                    <Math tex="|z| = \sqrt{a^2 + b^2}" />
                  </p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs mb-1"><Math tex="i" /> 的周期</p>
                  <p>
                    <Math tex="i \to -1 \to -i \to 1 \to i \to \cdots" />
                  </p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs mb-1">必记</p>
                  <p>
                    <Math tex="(1+i)^2=2i" />，<Math tex="(1-i)^2=-2i" />
                  </p>
                </div>
              </div>
              <div className="border-t border-slate-700 pt-3 mt-3">
                <p className="text-amber-400 font-bold text-xs">
                  ⚠ 虚部是 <Math tex="b" />，不是 <Math tex="bi" /> ← 高考最大陷阱！
                </p>
              </div>
            </div>
          </section>

      {isPrinting && printOptions.showAnswers && (
        <>
          <PageBreak label="答案与解析" />
          <section className="mb-8 print-answers">
            <h2 className="text-xl font-bold text-gray-900 mb-4">📝 1.1 复数 — 答案与解析</h2>

            {[
              { label: '一、虚数单位 i — 即时练习', questions: complexPractice1 },
              { label: '二、复数的概念 — 即时练习', questions: complexPractice2 },
              { label: '三、复数的相等 — 即时练习', questions: complexPractice3 },
              { label: '四、四则运算 — 即时练习', questions: complexPractice4 },
              { label: '五、复平面 — 即时练习', questions: complexPractice5 },
              { label: '高考真题实战', questions: complexQuizQuestions },
            ].map((section) => (
              <div key={section.label} className="mb-4">
                <p className="font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">{section.label}</p>
                <div className="space-y-3 text-gray-700">
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
