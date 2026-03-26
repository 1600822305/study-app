import { Math, QuizPanel, Collapsible, SpeakButton, PageHeader, LessonLayout, PracticeCard, ExportButton, PageBreak } from '@/components/shared';
import { Coordinates, Point } from 'mafs';
import { DebugMafs, DText, DebugToggle } from '../trig/MafsDebug';
import { complexNarrations } from './data/1.1/1.1-narrations';
import { complexPractice1, complexPractice2, complexPractice3, complexPractice4, complexPractice5 } from './data/1.1/1.1-practice';
import { useProgress, usePrintMode } from '@/hooks';
import { scrollToId } from '@/lib/scroll';
import { complexQuizQuestions } from './data/1.1/1.1-quiz';
import { complexProgressItems } from './data/1.1/1.1-progress';
import { ComplexAnswers, complexExplanations } from './1.1-complex-answers';

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

      <div className="flex justify-end mb-1 print:hidden">
        <ExportButton title="1.1 复数" />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-2 mb-0">
        <p className="font-bold text-gray-800 mb-1">📋 知识地图</p>
        <div className="text-gray-600 grid grid-cols-2 gap-x-4 gap-y-0.5">
          {[
            ['complex-why', '一、为什么要发明复数'],
            ['complex-what', '二、什么是复数'],
            ['complex-equality', '三、复数的相等'],
            ['complex-ops', '四、四则运算'],
            ['complex-plane', '五、复平面'],
            ['complex-tips', '⚡ 考场技巧'],
            ['complex-quiz', '七、高考真题实战'],
          ].map(([id, label]) => (
            <button key={id} onClick={() => scrollToId(id)} className="block text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">{label}</button>
          ))}
        </div>
      </div>

      <LessonLayout progressItems={items} onToggle={toggle}>

      {/* ══════════════ Section 1: 为什么要发明复数 ══════════════ */}
      <section id="complex-why" className="scroll-mt-4">
        <Collapsible title="一、为什么要发明复数？" defaultOpen>
          <SpeakButton text={complexNarrations.whyComplex} />
          <div className="space-y-1 text-gray-700">
            <p>你学过解方程：</p>
            <div className="bg-gray-50 rounded p-1.5 font-mono space-y-1">
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

            <p>数学家说：既然没有，那就<strong>造一个</strong>。</p>

            <div className="bg-blue-50 border border-blue-200 rounded p-1.5">
              <p className="text-blue-800">
                就像人类发明了"0"来表示"没有"，发明了"负数"来表示"欠债"，
                现在发明一个新数 <Math tex="i" /> 来表示"平方等于 <Math tex="-1" /> 的数"。
              </p>
            </div>

            <div className="rounded p-1.5 border border-gray-300 text-center break-inside-avoid" style={{ breakInside: 'avoid' }}>
              <p className="font-bold text-red-800 mb-0.5">核心定义（整个复数的根基）</p>
              <Math tex="i^2 = -1" display className="text-2xl" />
              <p className="text-gray-500 mt-0.5">
                就这一条，整个复数体系都从这里长出来。
              </p>
            </div>

            <PracticeCard questions={complexPractice1} explanations={complexExplanations} optionCols={2} printOptionCols={2} />

            <div className="rounded p-1.5 border border-red-200 bg-red-50">
              <p className="font-bold text-red-800 mb-0.5">⚠️ 易错点</p>
              <p>• <Math tex="i^2 = -1" />，不是 <Math tex="i = -1" />（<Math tex="i" /> 本身不等于 <Math tex="-1" />）</p>
              <p>• <Math tex="i" /> 不在数轴上，不能和实数比大小</p>
              <p>• <Math tex="x^2 = -1" /> 的解是 <Math tex="x = \pm\,i" />，但 <Math tex="\sqrt{-1}" /> 只写 <Math tex="i" />（正的那个，和实数的 <Math tex="\sqrt{4}=2" /> 同理）</p>
            </div>

            <div className="bg-gray-50 rounded p-1.5 border border-gray-200 text-lg text-gray-800">
              <p className="font-bold mb-0.5">📖 数系扩展的历程</p>
              <p>自然数 <Math tex="\xrightarrow{\text{减法}}" /> 整数 <Math tex="\xrightarrow{\text{除法}}" /> 有理数 <Math tex="\xrightarrow{\text{开方}}" /> 实数 <Math tex="\xrightarrow{x^2=-1}" /> <strong>复数</strong></p>
              <p className="text-gray-600">每次扩展都是为了让某个"做不了的运算"变得"做得了"。复数是最后一站——之后不用再扩展了。</p>
            </div>
          </div>
        </Collapsible>
      </section>

      <PageBreak label="什么是复数" />

      {/* ══════════════ Section 2: 什么是复数 ══════════════ */}
      <section id="complex-what" className="scroll-mt-4">
        <Collapsible title="二、什么是复数？" defaultOpen>
          <SpeakButton text={complexNarrations.whatIsComplex} />
          <div className="space-y-1 text-gray-700">

            <div className="bg-gray-50 rounded p-1.5 text-center text-gray-800">
              <Math tex="z = a + bi" display className="text-2xl" />
              <div className="flex justify-center gap-8 mt-1 text-lg">
                <span><Math tex="a" /> = 实部</span>
                <span><Math tex="b" /> = 虚部（系数！）</span>
                <span><Math tex="i" /> = 虚数单位</span>
              </div>
            </div>

            <table className="w-full text-base border-collapse">
              <thead>
                <tr className="bg-blue-50">
                  <th className="border border-blue-200 p-1.5 text-left font-bold">复数 <Math tex="z" /></th>
                  <th className="border border-blue-200 p-1.5 text-center font-bold">实部 <Math tex="a" /></th>
                  <th className="border border-blue-200 p-1.5 text-center font-bold">虚部 <Math tex="b" /></th>
                  <th className="border border-blue-200 p-1.5 text-left font-bold">类型</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['3 + 2i', '3', '2', '虚数', ''],
                  ['5 - 4i', '5', '-4', '虚数', ''],
                  ['7', '7', '0', '实数', 'bg-green-50'],
                  ['3i', '0', '3', '纯虚数', 'bg-purple-50'],
                  ['0', '0', '0', '实数（也是复数）', 'bg-green-50'],
                ].map(([z, a, b, type, bg], idx) => (
                  <tr key={idx} className={bg}>
                    <td className="border border-gray-200 p-1.5"><Math tex={z} /></td>
                    <td className="border border-gray-200 p-1.5 text-center"><Math tex={a} /></td>
                    <td className="border border-gray-200 p-1.5 text-center"><Math tex={b} /></td>
                    <td className="border border-gray-200 p-1.5 font-bold">{type}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="bg-blue-50 border border-blue-200 rounded p-1.5">
              <p className="font-bold text-blue-800 mb-0.5">📂 复数的分类</p>
              <div className="bg-white rounded p-1.5 text-center font-mono">
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
              <p className="text-blue-700 mt-0.5">💡 实数也是复数（虚部为0的复数）；0 既是实数也是复数，但<strong>不是</strong>纯虚数。</p>
            </div>

            <div className="rounded p-1.5 border border-red-200 bg-red-50">
              <p className="font-bold text-red-800 mb-0.5">⚠️ 高考陷阱</p>
              <p>
                虚部是系数 <Math tex="b" />，不是 <Math tex="bi" />！ 例：
                <Math tex="z = 3 + 5i" /> 的虚部是 <Math tex="5" />，不是 <Math tex="5i" />。每年都有人栽。
              </p>
            </div>

            <PracticeCard questions={complexPractice2} explanations={complexExplanations} optionCols={4} printOptionCols={4} />
          </div>
        </Collapsible>
      </section>

      {/* ══════════════ Section 3: 复数的相等 ══════════════ */}
      <section id="complex-equality" className="scroll-mt-4">
        <Collapsible title="三、复数的相等" defaultOpen>
          <SpeakButton text={complexNarrations.equality} />
          <div className="space-y-1 text-gray-700">

            <div className="bg-amber-50 rounded p-1.5 border border-amber-200">
              <p className="font-bold text-amber-800 mb-0.5">💡 直觉理解</p>
              <p>
                复数有两个"零件"：实部和虚部。就像坐标 <Math tex="(x, y)" />，要判断两个点一样，
                必须 <strong>x 相等且 y 相等</strong>。复数也一样——<strong>实部等于实部，虚部等于虚部</strong>，缺一不可。
              </p>
            </div>

            <div className="bg-gray-50 rounded p-1.5 text-center">
              <Math tex="a + bi = c + di \iff a = c \;\text{且}\; b = d" display className="text-xl" />
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-1.5">
              <p className="font-bold text-blue-800 mb-0.5">🔑 特别重要：复数等于 0</p>
              <p>
                <Math tex="a + bi = 0" /> 意味着 <Math tex="a + bi = 0 + 0i" />，所以 <strong>实部 = 0 且 虚部 = 0</strong>。
              </p>
              <p>这是高考最常用的结论，记住这个就能解80%的复数相等题。</p>
            </div>

            <div className="bg-white rounded p-1.5 border border-blue-200 space-y-1">
              <p className="font-bold text-blue-800 mb-0.5">📝 综合例题</p>
              <p>已知 <Math tex="(x+1) + 2yi = 3 + (x-1)i" />（<Math tex="x,y \in \mathbb{R}" />），求 <Math tex="x" />, <Math tex="y" />。</p>
              <p><strong>第一步：读题，找出左边和右边的实部、虚部</strong></p>
              <p>左边：实部 = <Math tex="x+1" />，虚部 = <Math tex="2y" /></p>
              <p>右边：实部 = <Math tex="3" />，虚部 = <Math tex="x-1" /></p>
              <p><strong>第二步：实部 = 实部，虚部 = 虚部，列方程组</strong></p>
              <div className="bg-gray-50 rounded p-1.5">
                <p>实部：<Math tex="x + 1 = 3 \Rightarrow x = 2" /></p>
                <p>虚部：<Math tex="2y = x - 1 = 2 - 1 = 1 \Rightarrow y = \tfrac{1}{2}" /></p>
              </div>
              <p><strong>特别地</strong>：如果右边是 0（即 <Math tex="a+bi=0" />），就相当于 <Math tex="a+bi = 0+0i" />，所以实部 = 0 且虚部 = 0。</p>
            </div>

            <PracticeCard questions={complexPractice3} explanations={complexExplanations} optionCols={4} printOptionCols={4} />

            <div className="rounded p-1.5 border border-red-200 bg-red-50 text-lg">
              <p className="font-bold text-red-800 mb-0.5">⚠️ 易错点</p>
              <p>• <Math tex="a+bi = 0" /> 必须<strong>实部和虚部都等于 0</strong>，不能只让一个等于 0</p>
              <p>• 虚部是 <Math tex="i" /> 前面的<strong>系数</strong>，例如 <Math tex="3+5i" /> 的虚部是 <Math tex="5" /> 而不是 <Math tex="5i" /></p>
              <p>• <strong>虚数不能比大小！</strong>只有实数才能比大小，<Math tex="3+2i" /> 和 <Math tex="1+5i" /> 不存在谁大谁小</p>
            </div>
          </div>
        </Collapsible>
      </section>

      {/* ══════════════ Section 4: 四则运算 ══════════════ */}
      <section id="complex-ops" className="scroll-mt-4">
        <Collapsible title="四、四则运算" defaultOpen>
          <SpeakButton text={complexNarrations.operationIntro} />
          <div className="space-y-0 text-gray-700">

            <div className="rounded p-1.5 border border-gray-400 mb-1">
              <p className="font-bold text-blue-700 mb-0.5">💡 核心思想（一条规则走天下）</p>
              <p>
                把 <Math tex="i" /> 当成一个字母（像 <Math tex="x" /> 一样），按你熟悉的多项式规则来算，
                遇到 <Math tex="i^2" /> 就替换成 <Math tex="-1" />。<strong>就这一条，所有复数运算都能算。</strong>
              </p>
            </div>

            {/* ── 加减法卡片 ── */}
            <div className="border border-gray-400 overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400">加法和减法</div>
              <div className="grid grid-cols-2">
                <div className="p-2 space-y-1 border-r border-gray-300">
                  <p className="font-bold">规则</p>
                  <p><strong>实部加实部，虚部加虚部</strong></p>
                  <div className="rounded p-1.5">
                    <Math tex="(a+bi)+(c+di) = (a{+}c)+(b{+}d)i" display />
                  </div>
                  <p>跟合并同类项一模一样</p>
                </div>
                <div className="p-2 space-y-1">
                  <p className="font-bold">📝 例题</p>
                  <p><Math tex="(3+2i) + (1-5i)" /></p>
                  <p>实部：<Math tex="3+1 = 4" /></p>
                  <p>虚部：<Math tex="2+(-5) = -3" /></p>
                  <p><strong>结果：<Math tex="4-3i" /></strong></p>
                </div>
              </div>
            </div>

            {/* ── 乘法卡片 ── */}
            <div className="border border-gray-400 border-t-0 overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-700 border-b border-gray-400">乘法</div>
              <div className="grid grid-cols-2">
                <div className="p-2 space-y-1 border-r border-gray-300">
                  <p className="font-bold">规则</p>
                  <p><strong>展开括号，遇 <Math tex="i^2" /> 换 <Math tex="-1" /></strong></p>
                  <div className="rounded p-1.5">
                    <p className="font-bold">🔑 必记结论</p>
                    <p><Math tex="(1+i)^2 = 2i" /></p>
                    <p><Math tex="(1-i)^2 = -2i" /></p>
                    <p className="mt-1">高次幂往上叠：</p>
                    <p><Math tex="(1+i)^4 = (2i)^2 = -4" /></p>
                  </div>
                </div>
                <div className="p-2 space-y-1">
                  <p className="font-bold">📝 例题：<Math tex="(2+3i)(1+i)" /></p>
                  <p>展开 <Math tex="= 2{\cdot}1 + 2{\cdot}i + 3i{\cdot}1 + 3i{\cdot}i" /></p>
                  <p><Math tex="= 2 + 2i + 3i + 3i^2" /></p>
                  <p>把 <Math tex="i^2 = -1" /> 代入：</p>
                  <p><Math tex="= 2 + 2i + 3i + 3(-1)" /></p>
                  <p><Math tex="= 2 + 5i - 3" /></p>
                  <p><strong><Math tex="= -1 + 5i" /></strong></p>
                </div>
              </div>
            </div>

            {/* ── i 的幂次卡片 ── */}
            <div className="border border-gray-400 border-t-0 overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-700 border-b border-gray-400"><Math tex="i" /> 的幂次规律（必背）</div>

              {/* 先推导，让学生看到"为什么"是这个循环 */}
              <div className="px-2 py-1.5 border-b border-gray-300 space-y-1">
                <p className="font-bold">先推导一遍，看看 <Math tex="i" /> 的幂次是怎么变化的：</p>
                <p><Math tex="i^1 = i" />（就是它自己）</p>
                <p><Math tex="i^2 = -1" />（这是定义，整个复数的根基）</p>
                <p><Math tex="i^3 = i^2 \cdot i = (-1) \cdot i = -i" />（用 <Math tex="i^2=-1" /> 代入）</p>
                <p><Math tex="i^4 = i^2 \cdot i^2 = (-1)(-1) = 1" />（又回到了正实数！）</p>
                <p><Math tex="i^5 = i^4 \cdot i = 1 \cdot i = i" />（和 <Math tex="i^1" /> 一样，<strong>循环开始了！</strong>）</p>
              </div>

              <div className="grid" style={{ gridTemplateColumns: '6fr 4fr' }}>
                <div className="p-2 space-y-1.5 border-r border-gray-300">
                  <p className="font-bold">规律：每4个一循环</p>
                  <div className="flex items-center justify-center gap-2 py-1">
                    <span className="inline-flex items-center justify-center w-16 h-10 border border-gray-400 rounded font-bold"><Math tex="i" /></span>
                    <span>→</span>
                    <span className="inline-flex items-center justify-center w-16 h-10 border border-gray-400 rounded font-bold"><Math tex="-1" /></span>
                    <span>→</span>
                    <span className="inline-flex items-center justify-center w-16 h-10 border border-gray-400 rounded font-bold"><Math tex="-i" /></span>
                    <span>→</span>
                    <span className="inline-flex items-center justify-center w-16 h-10 border border-gray-400 rounded font-bold"><Math tex="1" /></span>
                    <span>→ 回到 <Math tex="i" /></span>
                  </div>

                  <p className="font-bold">快速求法：指数 ÷ 4 看余数</p>
                  <table className="text-base border-collapse w-full">
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-2 py-1 text-center font-bold">余数</td>
                        <td className="border border-gray-300 px-2 py-1 text-center">1</td>
                        <td className="border border-gray-300 px-2 py-1 text-center">2</td>
                        <td className="border border-gray-300 px-2 py-1 text-center">3</td>
                        <td className="border border-gray-300 px-2 py-1 text-center">0</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-1 text-center font-bold">结果</td>
                        <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="i" /></td>
                        <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="-1" /></td>
                        <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="-i" /></td>
                        <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="1" /></td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="rounded p-1.5 border border-gray-300">
                    <p className="font-bold">🧠 记忆口诀</p>
                    <p><strong>一i二负三负i，四回原点重头起</strong></p>
                    <p>（余1得i，余2得-1，余3得-i，余0得1）</p>
                  </div>
                </div>
                <div className="p-2 space-y-1.5">
                  <p className="font-bold">📝 例题1：<Math tex="i^{67}" /> = ？</p>
                  <p><Math tex="67 \div 4 = 16" /> 余 <strong>3</strong></p>
                  <p>查表：余3 → <strong><Math tex="i^{67} = -i" /></strong></p>

                  <p className="font-bold">📝 例题2：<Math tex="i^{2024}" /> = ？</p>
                  <p><Math tex="2024 \div 4 = 506" /> 余 <strong>0</strong></p>
                  <p>查表：余0 → <strong><Math tex="i^{2024} = 1" /></strong></p>

                  <div className="rounded p-1.5 border border-gray-300 mt-1">
                    <p className="font-bold">连续4个幂相加 = 0（常考）</p>
                    <p><Math tex="i + i^2 + i^3 + i^4 = i-1-i+1 = 0" /></p>
                    <p>所以 <Math tex="i^n{+}i^{n+1}{+}i^{n+2}{+}i^{n+3}=0" /></p>
                  </div>
                </div>
              </div>
            </div>

            <PageBreak label="四则运算（续）" />

            {/* ── 除法卡片（含共轭） ── */}
            <div className="border border-gray-400 overflow-hidden">
              <div className="px-2 py-1 font-bold text-orange-700 border-b border-gray-400">除法（含共轭复数）</div>
              <div className="px-2 py-1 border-b border-gray-300">
                <p>除法的难点：分母有 <Math tex="i" />，结果不是 <Math tex="a+bi" /> 形式。<strong>→ 把分母变成实数！</strong></p>
              </div>
              <div className="grid" style={{ gridTemplateColumns: '45fr 55fr' }}>
                <div className="p-2 space-y-1 border-r border-gray-300">
                  <div className="rounded p-1.5">
                    <p className="font-bold">💡 共轭复数</p>
                    <p><strong>实部不变，虚部取反</strong>，记 <Math tex="\bar{z}" /></p>
                    <p><Math tex="3+2i" /> → <Math tex="3-2i" /></p>
                    <p><Math tex="1-i" /> → <Math tex="1+i" /></p>
                    <p><strong>性质：</strong><Math tex="z \cdot \bar{z} = a^2{+}b^2" /></p>
                    <p>（结果是实数！）</p>
                  </div>
                  <div className="rounded p-1.5">
                    <p className="font-bold">除法三步走</p>
                    <p><strong>①</strong> 写出分母的共轭</p>
                    <p><strong>②</strong> 上下同乘共轭</p>
                    <p><strong>③</strong> 展开，整理成 <Math tex="a{+}bi" /></p>
                  </div>
                </div>
                <div className="p-2 space-y-1">
                  <p className="font-bold">📝 例题：<Math tex="\dfrac{3+i}{1+i}" /></p>
                  <p className="font-bold">读题：</p>
                  <p>分母有 <Math tex="i" />，不是标准形式 → 用「除法三步走」化成 <Math tex="a+bi" /></p>
                  <p className="font-bold">解题：</p>
                  <p><strong>①</strong> 分母是 <Math tex="1+i" />，它的共轭是 <Math tex="1-i" /></p>
                  <p><strong>②</strong> 上下同乘 <Math tex="1-i" />：</p>
                  <p><Math tex="\dfrac{(3+i)(1-i)}{(1+i)(1-i)}" /></p>
                  <p><strong>③</strong> 分别展开：</p>
                  <p>分子：<Math tex="3{-}3i{+}i{-}i^2 = 4{-}2i" /></p>
                  <p>分母：<Math tex="1^2{+}1^2 = 2" /></p>
                  <p><strong>结果：<Math tex="\dfrac{4-2i}{2} = 2-i" /></strong></p>
                </div>
              </div>
            </div>

            {/* ── 模卡片 ── */}
            <div className="border border-gray-400 border-t-0 overflow-hidden">
              <div className="px-2 py-1 font-bold text-cyan-700 border-b border-gray-400">复数的模（大小）</div>
              <div className="grid grid-cols-2">
                <div className="p-2 space-y-1 border-r border-gray-300">
                  <p><strong>定义：</strong>点 <Math tex="(a,b)" /> 到原点的<strong>距离</strong>（勾股定理）</p>
                  <Math tex="|z| = \sqrt{a^2 + b^2}" display className="text-xl" />
                  <div className="rounded p-1.5">
                    <p className="font-bold">🔑 重要</p>
                    <p><Math tex="|z|^2 = z \cdot \bar{z} = a^2{+}b^2" /></p>
                    <p><Math tex="|z_1 z_2| = |z_1||z_2|" /></p>
                  </div>
                </div>
                <div className="p-2 space-y-1">
                  <p className="font-bold">📝 例题</p>
                  <p><Math tex="|3+4i| = \sqrt{3^2+4^2} = \sqrt{25} = 5" /></p>
                  <p><Math tex="|1-i| = \sqrt{1^2+(-1)^2} = \sqrt{2}" /></p>
                  <p><Math tex="|5| = \sqrt{5^2+0^2} = 5" />（实数的模 = 绝对值）</p>
                  <p><Math tex="|-3i| = \sqrt{0^2+3^2} = 3" /></p>
                  <p><Math tex="|3+4i|^2 = 3^2+4^2 = 25" /></p>
                  <p><Math tex="(3+4i)(3-4i) = 9+16 = 25 = |3+4i|^2" /> ✓</p>
                </div>
              </div>
            </div>

            {/* ── 综合实战大题 ── */}
            <div className="rounded border-2 border-gray-500 overflow-hidden mt-1">
              <div className="px-2 py-1 font-bold text-gray-900 text-lg border-b border-gray-500">🔥 综合实战（一题串联全部知识点）</div>
              <div className="px-2 py-1 border-b border-gray-300">
                <p className="font-bold">题目：已知 <Math tex="z_1 = (1+i)^2" />，<Math tex="z_2 = \dfrac{3+i}{1-i}" />，求 <Math tex="\left|z_1 + z_2\right| + i^{2025}" />。</p>
              </div>
              <div className="px-2 py-1 border-b border-gray-300">
                <p className="font-bold text-gray-900">第零步：读题，拆解任务</p>
                <p>要算的东西有两部分：<Math tex="|z_1+z_2|" />（模）和 <Math tex="i^{2025}" />（i 的幂次）。先分别算 <Math tex="z_1" />、<Math tex="z_2" />，再加起来求模，最后处理 <Math tex="i^{2025}" /></p>
              </div>
              <div className="grid grid-cols-2">
                <div className="p-2 space-y-1 border-r border-gray-300">
                  <p className="font-bold text-gray-900">第一步：算 <Math tex="z_1" />（乘法）</p>
                  <p><Math tex="z_1 = (1+i)^2 = 1 + 2i + i^2" />（展开）</p>
                  <p><Math tex="= 1 + 2i + (-1) = 2i" />（<Math tex="i^2=-1" /> 代入）</p>

                  <p className="font-bold text-gray-900">第二步：算 <Math tex="z_2" />（除法 + 共轭）</p>
                  <p>分母共轭 <Math tex="1+i" />，上下同乘：</p>
                  <p><Math tex="z_2 = \dfrac{(3+i)(1+i)}{(1-i)(1+i)}" /></p>
                  <p><Math tex="= \dfrac{3+4i-1}{2} = 1+2i" /></p>

                  <p className="font-bold text-gray-900">第三步：加法</p>
                  <p><Math tex="z_1{+}z_2 = 2i{+}(1{+}2i) = 1{+}4i" /></p>
                </div>
                <div className="p-2 space-y-1">
                  <p className="font-bold text-gray-900">第四步：求模</p>
                  <p><Math tex="|1+4i| = \sqrt{1^2+4^2} = \sqrt{17}" /></p>

                  <p className="font-bold text-gray-900">第五步：<Math tex="i" /> 的幂次</p>
                  <p><Math tex="2025 \div 4 = 506" /> 余 <strong>1</strong></p>
                  <p>查表：余1 → <Math tex="i^{2025} = i" /></p>

                  <p className="font-bold text-gray-900">最终结果</p>
                  <p className="text-lg"><strong><Math tex="\sqrt{17} + i" /></strong></p>

                  <div className="rounded p-1.5 border border-gray-300 mt-1">
                    <p><strong>串联：</strong>乘法 → 除法（共轭） → 加法 → 模 → i 的幂次</p>
                  </div>
                </div>
              </div>
            </div>

            <PracticeCard questions={complexPractice4} explanations={complexExplanations} optionCols={4} printOptionCols={4} />

            <div className="rounded p-1.5 border border-gray-400 text-lg mt-1">
              <p className="font-bold text-red-700 mb-0.5">⚠️ 易错点</p>
              <p>• 遇到 <Math tex="i^2" /> <strong>必须立刻换成 <Math tex="-1" /></strong>，这是最常见的计算失误</p>
              <p>• 除法一定要<strong>分母实数化</strong>，上下同乘共轭，不能直接硬除</p>
              <p>• <Math tex="i" /> 的幂次：<strong>除以4看余数</strong>，余1是<Math tex="i" />，余2是<Math tex="-1" />，余3是<Math tex="-i" />，余0是<Math tex="1" /></p>
              <p>• 求模别忘了<strong>开根号</strong>：<Math tex="|z| = \sqrt{a^2+b^2}" />，不是 <Math tex="a^2+b^2" /></p>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ══════════════ Section 5: 复平面 ══════════════ */}
      <section id="complex-plane" className="scroll-mt-4">
        <Collapsible title="五、复平面（几何意义）" defaultOpen>
          <SpeakButton text={complexNarrations.complexPlane} />
          <div className="space-y-1 text-gray-700">
            <p>每个复数 <Math tex="z = a + bi" /> 对应复平面上的一个点 <Math tex="(a, b)" />：</p>
            {/* Mafs 复平面 */}
            <div className="rounded-lg border border-gray-200 bg-white overflow-hidden">
              <DebugMafs viewBox={{ x: [-4, 4], y: [-3, 3], padding: 0 }} preserveAspectRatio={false} height={220}>
                <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
                {/* 轴标签 */}
                <DText x={0.77} y={-0.52} size={12}>x（实轴）</DText>
                <DText x={0.48} y={2.41} size={12}>y（虚轴）</DText>
                {/* z₁ = 3+2i */}
                <Point x={3} y={2} color="#3b82f6" />
                <DText x={2.99} y={2.66} size={14} color="#2563eb">z₁ = 3+2i</DText>
                {/* z₂ = -2-2i */}
                <Point x={-2} y={-2} color="#ef4444" />
                <DText x={-2.01} y={-2.59} size={15} color="#ef4444">z₂ = -2-2i</DText>
                {/* 2i 纯虚数 */}
                <Point x={0} y={2} color="#a855f7" />
                <DText x={-0.42} y={1.94} size={13} color="#9333ea">2i（纯虚数）</DText>
                {/* -1 实数 */}
                <Point x={-1} y={0} color="#16a34a" />
                <DText x={-0.99} y={0.68} size={14} color="#15803d">-1（实数）</DText>
                {/* 象限标注 */}
                <DText x={2} y={1.2} size={11} color="#9ca3af">第一象限</DText>
                <DText x={-2} y={1.2} size={11} color="#9ca3af">第二象限</DText>
                <DText x={-2} y={-1.2} size={11} color="#9ca3af">第三象限</DText>
                <DText x={2} y={-1.2} size={11} color="#9ca3af">第四象限</DText>
              </DebugMafs>
            </div>
            <div className="space-y-0.5">
              <p>• <strong>x轴 = 实轴</strong>：上面的点都是实数</p>
              <p>• <strong>y轴 = 虚轴</strong>：上面的点（除原点）都是纯虚数</p>
              <p>• <Math tex="|z|" /> = 点到原点的距离</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded p-1.5">
              <p className="font-bold text-blue-800 mb-0.5">判断象限方法：</p>
              <p className="text-blue-700">先化简成 <Math tex="a + bi" />，然后看 <Math tex="(a, b)" /> 在哪个象限：</p>
              <div className="grid grid-cols-2 gap-0.5 text-blue-700">
                <p><Math tex="a>0,b>0" /> → 第一象限</p>
                <p><Math tex="a<0,b>0" /> → 第二象限</p>
                <p><Math tex="a<0,b<0" /> → 第三象限</p>
                <p><Math tex="a>0,b<0" /> → 第四象限</p>
              </div>
            </div>

            <PracticeCard questions={complexPractice5} explanations={complexExplanations} optionCols={4} printOptionCols={4} />

            <div className="rounded p-1.5 border border-red-200 bg-red-50">
              <p className="font-bold text-red-800 mb-0.5">⚠️ 易错点</p>
              <p>• 实部是 x 坐标，虚部是 y 坐标，<strong>别搞反</strong></p>
              <p>• 点在坐标轴上<strong>不属于任何象限</strong></p>
            </div>
          </div>
        </Collapsible>
      </section>

      {/* ══════════════ Section 6: 考场技巧 ══════════════ */}
      <section id="complex-tips" className="scroll-mt-4">
        <Collapsible title="⚡ 考场技巧（速算秒杀）" defaultOpen>
          <SpeakButton text={complexNarrations.tricks} />
          <div className="text-gray-700 border border-gray-300 rounded">
            <div className="grid grid-cols-2">

              {/* 技巧1：凑因子法 */}
              <div className="p-2 space-y-1 border-b border-r border-gray-300">
                <p className="font-bold text-blue-800">技巧1：凑因子法（除法秒杀）</p>
                <p>拿到除法题，先观察<strong>分子是不是分母的简单倍数</strong></p>
                <div className="bg-gray-50 rounded p-1.5 space-y-1">
                  <p className="font-bold">例：求 <Math tex="\dfrac{2+i}{1-2i}" /> 的虚部</p>
                  <p>试乘 <Math tex="i" />：<Math tex="i(1{-}2i) = 2{+}i" /> ✓</p>
                  <p>所以 <Math tex="= \dfrac{i(1-2i)}{1-2i} = i" />，虚部 = <strong>1</strong></p>
                </div>
                <p className="text-gray-500">凑不出就老实乘共轭</p>
              </div>

              {/* 技巧2：模的速算 */}
              <div className="p-2 space-y-1 border-b border-gray-300">
                <p className="font-bold text-blue-800">技巧2：模的速算（不用化简）</p>
                <p>求模时<strong>不需要先做除法</strong>，直接拆：</p>
                <div className="bg-gray-50 rounded p-1.5">
                  <Math tex="\left|\frac{z_1}{z_2}\right| = \frac{|z_1|}{|z_2|}" display />
                  <Math tex="|z_1 \cdot z_2| = |z_1| \cdot |z_2|" display />
                </div>
                <div className="bg-gray-50 rounded p-1.5 space-y-1">
                  <p className="font-bold">例：求 <Math tex="\left|\dfrac{2+i}{1+i}\right|" /></p>
                  <p><Math tex="= \dfrac{\sqrt{5}}{\sqrt{2}} = \dfrac{\sqrt{10}}{2}" /></p>
                </div>
              </div>

              {/* 技巧3：共轭速算 */}
              <div className="p-2 space-y-1 border-b border-r border-gray-300">
                <p className="font-bold text-green-800">技巧3：共轭速算公式</p>
                <p>看到 <Math tex="\bar{z}" /> 相关题，直接套公式：</p>
                <div className="bg-gray-50 rounded p-1.5 space-y-1">
                  <p><Math tex="z + \bar{z} = 2a" />（实部的两倍）</p>
                  <p><Math tex="z - \bar{z} = 2bi" />（虚部的两倍 × <Math tex="i" />）</p>
                  <p><Math tex="z \cdot \bar{z} = a^2 + b^2 = |z|^2" /></p>
                </div>
                <div className="bg-gray-50 rounded p-1.5">
                  <p className="font-bold">例：<Math tex="z = 1+i" />，求 <Math tex="z + \bar{z}" /></p>
                  <p>直接：<Math tex="2 \times 1 = 2" />，不用算 <Math tex="\bar{z}" /></p>
                </div>
              </div>

              {/* 技巧4：(1±i) 家族 */}
              <div className="p-2 space-y-1 border-b border-gray-300">
                <p className="font-bold text-green-800">技巧4：(1±i) 家族速查</p>
                <p>高考反复考，直接<strong>背结论</strong>秒出：</p>
                <div className="bg-gray-50 rounded p-1.5 space-y-1">
                  <p><Math tex="(1+i)^2 = 2i" /></p>
                  <p><Math tex="(1-i)^2 = -2i" /></p>
                  <p><Math tex="(1+i)(1-i) = 2" /></p>
                  <p><Math tex="\dfrac{1+i}{1-i} = i" />，<Math tex="\dfrac{1-i}{1+i} = -i" /></p>
                  <p><Math tex="|1+i| = |1-i| = \sqrt{2}" /></p>
                </div>
              </div>

              {/* 技巧5：纯虚数/实数条件 */}
              <div className="p-2 space-y-1 border-r border-gray-300">
                <p className="font-bold text-orange-800">技巧5：纯虚数/实数条件</p>
                <p>题目说"<Math tex="z" /> 是纯虚数"，<strong>两个条件缺一不可</strong>：</p>
                <div className="bg-gray-50 rounded p-1.5 space-y-1">
                  <p><strong>纯虚数：</strong>实部 = 0 <strong>且</strong> 虚部 ≠ 0</p>
                  <p><strong>实数：</strong>虚部 = 0</p>
                </div>
                <div className="bg-red-50 rounded p-1.5 border border-red-200">
                  <p>⚠️ 忘检查"虚部≠0"是最常见失分点！</p>
                </div>
              </div>

              {/* 技巧6：i幂次求和 */}
              <div className="p-2 space-y-1">
                <p className="font-bold text-orange-800">技巧6：<Math tex="i" /> 的幂次求和</p>
                <p>连续4个 <Math tex="i" /> 的幂相加恒为0：</p>
                <div className="bg-gray-50 rounded p-1.5 space-y-1">
                  <p><Math tex="i^n + i^{n+1} + i^{n+2} + i^{n+3} = 0" /></p>
                </div>
                <div className="bg-gray-50 rounded p-1.5 space-y-1">
                  <p className="font-bold">例：<Math tex="i + i^2 + \cdots + i^{2024}" /></p>
                  <p><Math tex="2024 \div 4 = 506" /> 组，每组和为 0</p>
                  <p>答案：<strong>0</strong></p>
                </div>
              </div>

            </div>
          </div>
        </Collapsible>
      </section>

      {/* ══════════════ Section 7: 高考真题实战 ══════════════ */}
      <section id="complex-quiz" className="scroll-mt-4">
        <Collapsible title="七、高考真题实战" defaultOpen>
          <QuizPanel
            module="complex"
            questions={complexQuizQuestions}
            title="复数真题"
            description="7道高考真题精选，每道代表一种典型考法。"
            explanations={complexExplanations}
          />
        </Collapsible>
      </section>

      {/* ══════════════ 公式速查表 ══════════════ */}
      <section className="scroll-mt-4">
        <Collapsible title="📌 公式速查表" defaultOpen>
          <SpeakButton text={complexNarrations.summary} />
          <div className="bg-blue-50 rounded p-2 border border-blue-200">
            <p className="font-bold text-blue-800 text-lg mb-1">📋 1.1 复数全章公式速查表</p>
            <table className="w-full text-base border-collapse">
              <thead>
                <tr className="bg-blue-100">
                  <th className="border border-blue-200 p-1 text-left">公式</th>
                  <th className="border border-blue-200 p-1 text-left">内容</th>
                  <th className="border border-blue-200 p-1 text-left">什么时候用</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-blue-200 p-1 font-bold text-red-600">定义</td>
                  <td className="border border-blue-200 p-1"><Math tex="z = a + bi" /></td>
                  <td className="border border-blue-200 p-1"><Math tex="a" /> 实部，<Math tex="b" /> 虚部</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-blue-200 p-1 font-bold text-red-600">核心</td>
                  <td className="border border-blue-200 p-1"><Math tex="i^2 = -1" /></td>
                  <td className="border border-blue-200 p-1">遇到 <Math tex="i^2" /> 就换成 <Math tex="-1" /></td>
                </tr>
                <tr>
                  <td className="border border-blue-200 p-1 font-bold text-blue-600">除法</td>
                  <td className="border border-blue-200 p-1">上下同乘分母的共轭</td>
                  <td className="border border-blue-200 p-1">分母实数化</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-blue-200 p-1 font-bold text-blue-600">共轭性质</td>
                  <td className="border border-blue-200 p-1"><Math tex="z \cdot \bar{z} = a^2 + b^2" /></td>
                  <td className="border border-blue-200 p-1">分母消虚数 / 求模</td>
                </tr>
                <tr>
                  <td className="border border-blue-200 p-1 font-bold text-green-600">模</td>
                  <td className="border border-blue-200 p-1"><Math tex="|z| = \sqrt{a^2 + b^2}" /></td>
                  <td className="border border-blue-200 p-1">点到原点距离</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-blue-200 p-1 font-bold text-green-600">i 的周期</td>
                  <td className="border border-blue-200 p-1"><Math tex="i \to -1 \to -i \to 1 \to \cdots" /></td>
                  <td className="border border-blue-200 p-1">除以4看余数</td>
                </tr>
                <tr>
                  <td className="border border-blue-200 p-1 font-bold text-amber-600">必记</td>
                  <td className="border border-blue-200 p-1"><Math tex="(1+i)^2=2i" />，<Math tex="(1-i)^2=-2i" /></td>
                  <td className="border border-blue-200 p-1">高考常考结论</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-blue-200 p-1 font-bold text-red-600">⚠ 陷阱</td>
                  <td className="border border-blue-200 p-1">虚部是 <Math tex="b" />，不是 <Math tex="bi" /></td>
                  <td className="border border-blue-200 p-1">每年高考最大陷阱！</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Collapsible>
      </section>

      {isPrinting && printOptions.showAnswers && <ComplexAnswers />}
      </LessonLayout>
      <DebugToggle />
    </div>
  );
}
