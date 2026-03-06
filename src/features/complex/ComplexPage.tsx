import { Flame, Lightbulb, AlertTriangle } from 'lucide-react';

import { Math, QuizPanel, Collapsible, ProgressTracker, SpeakButton } from '@/components/shared';
import { complexNarrations } from './data/narrations';
import { useProgress } from '@/hooks';
import { complexQuizQuestions } from './data/quiz';
import { complexProgressItems } from './data/progress';

export function ComplexPage() {
  const { items, toggle } = useProgress('complex', complexProgressItems);

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-blue-600 mb-2">
          <Flame size={16} />
          <span>第一阶段 · 数学语言</span>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-black text-gray-900 mb-2">1.1 复数</h1>
          <SpeakButton text={complexNarrations.intro} />
        </div>
        <p className="text-gray-500">从零到满分 · 2小时搞定高考必拿5分</p>
        <div className="flex flex-wrap gap-3 mt-3">
          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
            难度 ★☆☆☆☆
          </span>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
            高考必考 5分
          </span>
          <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
            约2小时
          </span>
        </div>
      </div>

      {/* Knowledge Map */}
      <div className="bg-gray-50 rounded-xl p-4 mb-6 text-sm text-gray-600">
        <p className="font-bold text-gray-800 mb-2">📋 知识地图</p>
        <div className="grid grid-cols-2 gap-1">
          <p>一、为什么要发明复数 → i²=-1 的由来</p>
          <p>二、什么是复数 → 标准形式 a+bi</p>
          <p>三、复数的相等 → 实部=实部，虚部=虚部</p>
          <p>四、四则运算 → 加减乘除，把i当字母</p>
          <p>五、复平面 → 几何意义，判断象限</p>
          <p>六、高考真题实战 → 真题模拟</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Part 1: Why */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                1
              </span>
              为什么要发明复数？
              <SpeakButton text={complexNarrations.whyComplex} />
            </h2>

            <div className="bg-white rounded-xl border border-gray-200 p-5 mb-4">
              <p className="text-gray-700 mb-4">你学过解方程：</p>
              <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm space-y-2 mb-4">
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

              <p className="text-gray-700 mb-3">
                数学家说：既然没有，那就<strong>造一个</strong>。
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <p className="text-blue-800 text-sm">
                  就像人类发明了"0"来表示"没有"，发明了"负数"来表示"欠债"，
                  现在发明一个新数 <Math tex="i" /> 来表示“平方等于 <Math tex="-1" /> 的数”。
                </p>
              </div>

              <div className="bg-slate-900 text-white rounded-xl p-5 text-center">
                <p className="text-sm text-slate-400 mb-2">核心定义（整个复数的根基）</p>
                <Math tex="i^2 = -1" display className="text-2xl" />
                <p className="text-sm text-slate-400 mt-3">
                  就这一条，整个复数体系都从这里长出来。
                </p>
              </div>
            </div>

            <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-3 text-sm">
              <p className="font-bold text-green-800 mb-1">✏️ 即时练习</p>
              <p className="text-gray-700">1. <Math tex="i^2" /> = ____　答案：<strong>-1</strong></p>
              <p className="text-gray-700">2. x² = -1 在实数范围内有解吗？　答案：<strong>没有</strong>，因为实数的平方 ≥ 0</p>
            </div>
            <div className="mt-3 bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm">
              <p className="font-bold text-amber-800 mb-1">⚠️ 易错点</p>
              <p className="text-gray-700">• <strong>i² = -1</strong>，不是 i = -1（i 本身不等于 -1）</p>
              <p className="text-gray-700">• i 不在数轴上，不能和实数比大小</p>
            </div>
          </section>

          {/* Part 2: What */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                2
              </span>
              什么是复数？
              <SpeakButton text={complexNarrations.whatIsComplex} />
            </h2>

            <div className="bg-white rounded-xl border border-gray-200 p-5 mb-4">
              <div className="bg-gray-50 rounded-lg p-4 text-center mb-4">
                <Math tex="z = a + bi" display />
                <div className="flex justify-center gap-8 mt-3 text-sm text-gray-600">
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
                      <th className="border border-gray-200 px-3 py-2 text-left">复数 <Math tex="z" /></th>
                      <th className="border border-gray-200 px-3 py-2 text-center">实部 <Math tex="a" /></th>
                      <th className="border border-gray-200 px-3 py-2 text-center">虚部 <Math tex="b" /></th>
                      <th className="border border-gray-200 px-3 py-2 text-left">类型</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['3 + 2i', '3', '2', '虚数'],
                      ['5 - 4i', '5', '-4', '虚数'],
                      ['7', '7', '0', '实数'],
                      ['3i', '0', '3', '纯虚数'],
                    ].map(([z, a, b, type], idx) => (
                      <tr key={idx} className="hover:bg-blue-50">
                        <td className="border border-gray-200 px-3 py-2">
                          <Math tex={z} />
                        </td>
                        <td className="border border-gray-200 px-3 py-2 text-center"><Math tex={a} /></td>
                        <td className="border border-gray-200 px-3 py-2 text-center"><Math tex={b} /></td>
                        <td className="border border-gray-200 px-3 py-2">{type}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
              <AlertTriangle size={20} className="text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-red-700 text-sm">高考陷阱</p>
                <p className="text-red-700 text-sm mt-1">
                  虚部是系数 <Math tex="b" />，不是 <Math tex="bi" />！ 例：
                  <Math tex="z = 3 + 5i" /> 的虚部是 <Math tex="5" />，不是 <Math tex="5i" />。每年都有人栽。
                </p>
              </div>
            </div>

            <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-3 text-sm">
              <p className="font-bold text-green-800 mb-1">✏️ 即时练习</p>
              <p className="text-gray-700">1. <Math tex="z = 5 - 4i" /> 的实部和虚部？　答案：实部 <strong>5</strong>，虚部 <strong>-4</strong></p>
              <p className="text-gray-700">2. <Math tex="z = 2i" /> 是什么数？　答案：<strong>纯虚数</strong>（实部=0，虚部≠0）</p>
            </div>
          </section>

          {/* Part 3: Equality */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                3
              </span>
              复数的相等
              <SpeakButton text={complexNarrations.equality} />
            </h2>

            <div className="bg-white rounded-xl border border-gray-200 p-5 mb-4">
              <p className="text-gray-700 mb-3">两个复数相等的条件：</p>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <Math tex="a + bi = c + di \iff a = c \;\text{且}\; b = d" display />
              </div>
              <p className="text-gray-700 mb-3"><strong>实部等于实部，虚部等于虚部。</strong></p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-2">例：已知 <Math tex="(2x-1) + (y+3)i = 0" />，求 x, y。</p>
                <p className="text-sm text-gray-700">实部：<Math tex="2x - 1 = 0 \Rightarrow x = \tfrac{1}{2}" /></p>
                <p className="text-sm text-gray-700">虚部：<Math tex="y + 3 = 0 \Rightarrow y = -3" /></p>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-sm">
              <p className="font-bold text-green-800 mb-1">✏️ 即时练习</p>
              <p className="text-gray-700">1. 已知 <Math tex="(3x-6) + (2y+4)i = 0" />，求 x, y　答案：x = <strong>2</strong>，y = <strong>-2</strong></p>
              <p className="text-gray-700">2. 已知 <Math tex="a+bi = 2-3i" />，求 a, b　答案：a = <strong>2</strong>，b = <strong>-3</strong></p>
            </div>
            <div className="mt-3 bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm">
              <p className="font-bold text-amber-800 mb-1">⚠️ 易错点</p>
              <p className="text-gray-700">• <strong>虚数不能比大小！</strong> 3+2i 和 1+5i 谁大？没有意义，只有实数才能比大小</p>
              <p className="text-gray-700">• 复数等于0 ⇔ <strong>实部和虚部都等于0</strong></p>
            </div>
          </section>

          {/* Part 4: Operations */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                4
              </span>
              四则运算
              <SpeakButton text={complexNarrations.operationIntro} />
            </h2>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4 flex items-start gap-3">
              <Lightbulb size={20} className="text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-amber-800 text-sm">核心思想（第一性原理）</p>
                <p className="text-amber-700 text-sm mt-1">
                  把 <Math tex="i" /> 当成一个字母（像 <Math tex="x" /> 一样），按多项式运算规则来算，遇到 <Math tex="i^2" /> 就替换成 <Math tex="-1" />。
                  <strong>就这一条，你就会算所有复数运算了。</strong>
                </p>
              </div>
            </div>

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
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-3">
                <p className="text-blue-800 text-sm font-bold mb-1">🔑 必记结论（高考常用）：</p>
                <div className="flex gap-6">
                  <Math tex="(1+i)^2 = 2i" />
                  <Math tex="(1-i)^2 = -2i" />
                </div>
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
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4 text-sm">
                <p className="font-bold text-amber-800 mb-2">为什么是这个公式？</p>
                <p className="text-gray-700 mb-2">
                  复数 <Math tex="z = a + bi" /> 在复平面上对应点 <Math tex="(a, b)" />。
                  模就是这个点到原点的<strong>距离</strong>，用勾股定理：
                </p>
                <Math tex="|z| = \sqrt{a^2 + b^2}" display />
                <p className="text-gray-700 mt-2 mb-1">
                  还可以用共轭来推：
                </p>
                <Math tex="z \cdot \bar{z} = (a+bi)(a-bi) = a^2 + b^2" display />
                <p className="text-gray-700 mt-1">
                  所以 <Math tex="|z|^2 = z \cdot \bar{z}" />，两边开方就得到 <Math tex="|z| = \sqrt{a^2 + b^2}" />。
                </p>
              </div>
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

            <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-3 text-sm">
              <p className="font-bold text-green-800 mb-1">✏️ 即时练习</p>
              <p className="text-gray-700">1. <Math tex="(3+2i)+(1-5i)" /> = ____　答案：<strong><Math tex="4-3i" /></strong></p>
              <p className="text-gray-700">2. <Math tex="\dfrac{1+i}{1-i}" /> = ____　答案：<strong><Math tex="i" /></strong></p>
              <p className="text-gray-700">3. <Math tex="|3+4i|" /> = ____　答案：<strong>5</strong></p>
              <p className="text-gray-700">4. <Math tex="i^{67}" /> = ____　答案：67÷4余3 → <strong><Math tex="-i" /></strong></p>
            </div>
            <div className="mt-3 bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm">
              <p className="font-bold text-amber-800 mb-1">⚠️ 易错点</p>
              <p className="text-gray-700">• 遇到 <Math tex="i^2" /> <strong>必须立刻换成 -1</strong></p>
              <p className="text-gray-700">• 除法三步走：写共轭 → 上下同乘 → 整理成 <Math tex="a+bi" /></p>
              <p className="text-gray-700">• i 的幂次：<strong>除以4看余数</strong>，余1→i，余2→-1，余3→-i，余0→1</p>
            </div>
          </section>

          {/* Part 5: Complex Plane */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                5
              </span>
              复平面（几何意义）
              <SpeakButton text={complexNarrations.complexPlane} />
            </h2>

            <div className="bg-white rounded-xl border border-gray-200 p-5 mb-4">
              <p className="text-gray-700 mb-3">
                每个复数 <Math tex="z = a + bi" /> 对应复平面上的一个点 <Math tex="(a, b)" />：
              </p>
              <div className="text-sm space-y-1 mb-4">
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

            <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-sm">
              <p className="font-bold text-green-800 mb-1">✏️ 即时练习</p>
              <p className="text-gray-700">1. <Math tex="z = -2+3i" /> 在第几象限？　答案：点 (-2, 3)，<strong>第二象限</strong></p>
              <p className="text-gray-700">2. <Math tex="z = 4-i" /> 在第几象限？　答案：点 (4, -1)，<strong>第四象限</strong></p>
            </div>
            <div className="mt-3 bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm">
              <p className="font-bold text-amber-800 mb-1">⚠️ 易错点</p>
              <p className="text-gray-700">• 实部是 x 坐标，虚部是 y 坐标，<strong>别搞反</strong></p>
              <p className="text-gray-700">• 点在坐标轴上<strong>不属于任何象限</strong></p>
            </div>
          </section>

          {/* Part 6: Quiz */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-green-500 text-white flex items-center justify-center text-sm font-bold">
                6
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
                  <p className="text-slate-400 text-xs mb-1">除法</p>
                  <p>上下同乘分母的共轭</p>
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
