import { Math, QuizPanel, Collapsible, PageHeader, LessonLayout, PracticeCard, ExportButton, DebugGeo2dSvg, Geo2dDebugToggle } from '@/components/shared';
import { complexPractice2, complexPractice3, complexPractice4, complexPractice5 } from './data/1.1/1.1-practice';
import { complexPlaneDiagram } from './data/1.1/1.1-diagrams';
import { useProgress, usePrintMode } from '@/hooks';
import { scrollToId } from '@/lib/scroll';
import { complexQuizQuestions } from './data/1.1/1.1-quiz';
import { complexProgressItems } from './data/1.1/1.1-progress';
import { ComplexAnswers, complexExplanations } from './1.1-complex-answers';

export function ComplexPage() {
  const { items, toggle } = useProgress('complex', complexProgressItems);
  const { isPrinting, printOptions } = usePrintMode();

  return (
    <div style={{ zoom: 0.9 }}>
      <PageHeader
        stage="第一阶段 · 数学语言"
        title="1.1 复数"
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
        <div className="text-gray-800 grid grid-cols-4 gap-x-4 gap-y-0.5">
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
        <Collapsible title="一、为什么要发明复数？">
          <div className="space-y-2 text-gray-700">
            <p>你学过解方程，有些有解，有些没有：</p>
            <div className="bg-gray-50 rounded p-2 flex items-center justify-center gap-12">
              <div className="flex items-center gap-2">
                <Math tex="x^2 = 4" />
                <span>，得</span>
                <Math tex="x = \pm 2" />
                <span className="text-green-600 font-bold">✓ 有解</span>
              </div>
              <div className="flex items-center gap-2">
                <Math tex="x^2 = -1" />
                <span>，得</span>
                <Math tex="x = \;?" />
                <span className="text-red-600 font-bold">✗ 实数范围内无解！</span>
              </div>
            </div>

            <p>数学家说：既然没有，那就<strong>造一个</strong>。就像发明"0"表示"没有"，发明"负数"表示"欠债"，现在发明一个新数 <Math tex="i" /> 表示"平方等于 <Math tex="-1" /> 的数"。</p>

            <div className="rounded p-2 border border-blue-300 bg-blue-50 text-center" style={{ breakInside: 'avoid' }}>
              <p className="font-bold text-blue-900 mb-1">核心定义（整个复数的根基）</p>
              <Math tex="i^2 = -1" display />
              <p className="text-blue-800 mt-1">就这一条，整个复数体系都从这里长出来。</p>
            </div>

            <div className="rounded p-2 border border-red-200 bg-red-50 space-y-1">
              <p className="font-bold text-red-800">⚠️ 易错点</p>
              <p><Math tex="i^2 = -1" /> 是定义，不能写成 <Math tex="i = -1" />，<Math tex="i" /> 本身不是实数，不等于任何实数</p>
              <p><Math tex="i" /> 没有大小，不在数轴上，不能说 <Math tex="i > 0" /> 或 <Math tex="i < 0" /></p>
            </div>

            <div className="bg-gray-50 rounded p-2 border border-gray-200 text-gray-800">
              <p className="font-bold mb-1">📖 数系扩展的历程</p>
              <p>自然数 <Math tex="\xrightarrow{\text{减法}}" /> 整数 <Math tex="\xrightarrow{\text{除法}}" /> 有理数 <Math tex="\xrightarrow{\text{开方}}" /> 实数 <Math tex="\xrightarrow{x^2=-1}" /> <strong>复数</strong></p>
              <p className="mt-1">每次扩展都是为了让某个"做不了的运算"变得"做得了"。复数是最后一站——之后不用再扩展了。</p>
            </div>
          </div>
        </Collapsible>
      </section>

      {/* ══════════════ Section 2: 什么是复数 ══════════════ */}
      <section id="complex-what" className="scroll-mt-4">
        <Collapsible title="二、什么是复数？">
          <div className="space-y-2 text-gray-700">

            <div className="bg-gray-50 rounded p-2 border border-gray-200">
              <p className="font-bold text-gray-900 mb-1">复数的基本概念</p>
              <p>复数由两部分组成：实部和虚部。实部 <Math tex="a" /> 是普通的实数，虚部 <Math tex="b" /> 与虚数单位 <Math tex="i" /> 相乘形成虚数部分。</p>
              <p>复数的一般形式为 <Math tex="a + bi" />，当实部为 0 时称为<strong>纯虚数</strong>，当虚部为 0 时则退化为<strong>实数</strong>。</p>
              <p>两个复数相等的条件是它们的实部和虚部都相等。</p>
            </div>

            <div className="bg-gray-50 rounded px-2 py-1 text-center text-gray-800">
              <Math tex="z = a + bi" className="text-2xl" />
              <div className="flex justify-center gap-8">
                <span><Math tex="a" /> 是实部</span>
                <span><Math tex="b" /> 是虚部（系数！）</span>
                <span><Math tex="i" /> 是虚数单位</span>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-2">
              <p className="font-bold text-blue-800 mb-1">📂 复数的分类</p>
              <div className="bg-white rounded p-1.5 text-center font-mono">
                <p className="mb-1">复数 <Math tex="z = a + bi" />（<Math tex="a, b \in \mathbb{R}" />）</p>
                <p className="text-gray-700 mb-1">┌─────────┴─────────┐</p>
                <div className="flex justify-center gap-12 mb-1">
                  <span><Math tex="b = 0" /></span>
                  <span><Math tex="b \neq 0" /></span>
                </div>
                <div className="flex justify-center gap-16 mb-1">
                  <span className="text-green-700 font-bold">实数</span>
                  <span className="text-purple-700 font-bold">虚数</span>
                </div>
                <p className="text-gray-700 mb-1 ml-24">┌─────┴─────┐</p>
                <div className="flex justify-center gap-4 ml-24">
                  <div className="text-center">
                    <p><Math tex="a \neq 0" /></p>
                    <p className="text-blue-700 font-bold">一般虚数</p>
                  </div>
                  <div className="text-center">
                    <p><Math tex="a = 0" /></p>
                    <p className="text-red-700 font-bold">纯虚数</p>
                  </div>
                </div>
              </div>
              <p className="text-blue-800 mt-1">💡 实数是复数的特例（虚部为 0）；0 既是实数也是复数，但<strong>不是</strong>纯虚数。</p>
            </div>

            <table className="w-full border-collapse">
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

            <div className="rounded p-2 border border-red-200 bg-red-50">
              <p className="font-bold text-red-800 mb-0.5">⚠️ 高考陷阱</p>
              <p>虚部是系数 <Math tex="b" />，不是 <Math tex="bi" />。例：<Math tex="z = 3 + 5i" /> 的虚部是 <Math tex="5" />，不是 <Math tex="5i" />。每年都有人栽在这里。</p>
            </div>

            <PracticeCard questions={complexPractice2} explanations={complexExplanations} optionCols={4} printOptionCols={4} />
          </div>
        </Collapsible>
      </section>

      {/* ══════════════ Section 3: 复数的相等 ══════════════ */}
      <section id="complex-equality" className="scroll-mt-4">
        <Collapsible title="三、复数的相等">
          <div className="space-y-2 text-gray-700">

            <div className="bg-gray-50 rounded p-2 text-center">
              <Math tex="a + bi = c + di \iff a = c \;\text{且}\; b = d" display />
              <p>两个复数相等的充要条件是它们的实部和虚部分别相等。</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-2">
              <p className="font-bold text-blue-800 mb-0.5">🔑 特别重要：复数等于 0</p>
              <p><Math tex="a + bi = 0" /> 意味着 <Math tex="a + bi = 0 + 0i" />，所以实部 = 0 且虚部 = 0。</p>
              <p className="mt-1">这是高考最常用的结论，记住这个就能解 80% 的复数相等题。</p>
            </div>

            <div className="bg-white rounded p-2 border border-blue-200 space-y-1.5">
              <p className="font-bold text-blue-800">📝 综合例题</p>
              <p>已知 <Math tex="(x+1) + 2yi = 3 + (x-1)i" />（<Math tex="x, y \in \mathbb{R}" />），求 <Math tex="x" /> 和 <Math tex="y" />。</p>
              <p><strong>第一步：找出左右两边的实部和虚部</strong></p>
              <p>左边：实部 <Math tex="= x+1" />，虚部 <Math tex="= 2y" /></p>
              <p>右边：实部 <Math tex="= 3" />，虚部 <Math tex="= x-1" /></p>
              <p><strong>第二步：实部 = 实部，虚部 = 虚部，列方程组</strong></p>
              <div className="bg-gray-50 rounded p-1.5">
                <p>实部：<Math tex="x + 1 = 3" />，得 <Math tex="x = 2" /></p>
                <p>虚部：<Math tex="2y = x - 1 = 1" />，得 <Math tex="y = \tfrac{1}{2}" /></p>
              </div>
            </div>

            <PracticeCard questions={complexPractice3} explanations={complexExplanations} optionCols={4} printOptionCols={4} />

            <div className="rounded p-2 border border-red-200 bg-red-50 space-y-0.5">
              <p className="font-bold text-red-800">⚠️ 易错点</p>
              <p><Math tex="a+bi = 0" /> 必须<strong>实部和虚部都等于 0</strong>，不能只让一个等于 0</p>
              <p>虚部是 <Math tex="i" /> 前面的<strong>系数</strong>，<Math tex="3+5i" /> 的虚部是 <Math tex="5" /> 而不是 <Math tex="5i" /></p>
              <p><strong>虚数不能比大小！</strong>只有实数才能比大小</p>
            </div>
          </div>
        </Collapsible>
      </section>

      {/* ══════════════ Section 4: 四则运算 ══════════════ */}
      <section id="complex-ops" className="scroll-mt-4">
        <Collapsible title="四、四则运算">
          <div className="space-y-0 text-gray-700">

            <div className="rounded p-2 border border-gray-400 mb-1">
              <p className="font-bold text-blue-700 mb-0.5">💡 核心思想</p>
              <p>把 <Math tex="i" /> 当成字母（像 <Math tex="x" /> 一样），按多项式规则展开，遇到 <Math tex="i^2" /> 就换成 <Math tex="-1" />。<strong>就这一条，所有复数运算都能算。</strong></p>
            </div>

            {/* ── 加减法 ── */}
            <div className="border border-gray-400 overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400">加法和减法</div>
              <div className="grid grid-cols-2">
                <div className="p-2 space-y-1 border-r border-gray-300">
                  <p className="font-bold">规则：实部加实部，虚部加虚部</p>
                  <Math tex="(a+bi)+(c+di) = (a{+}c)+(b{+}d)i" display />
                  <p>跟合并同类项一模一样</p>
                </div>
                <div className="p-2 space-y-1">
                  <p className="font-bold">📝 例题：<Math tex="(3+2i) + (1-5i)" /></p>
                  <p>实部：<Math tex="3+1 = 4" />，虚部：<Math tex="2+(-5) = -3" /></p>
                  <p><strong>结果：<Math tex="4-3i" /></strong></p>
                </div>
              </div>
            </div>

            {/* ── 乘法 ── */}
            <div className="border border-gray-400 border-t-0 overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-700 border-b border-gray-400">乘法</div>
              <div className="grid grid-cols-2">
                <div className="p-2 space-y-1 border-r border-gray-300">
                  <p className="font-bold">规则：展开括号，遇 <Math tex="i^2" /> 换 <Math tex="-1" /></p>
                  <div className="rounded p-1.5 border border-gray-200">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <p className="font-bold">🔑 必记结论</p>
                        <p><Math tex="(1+i)^2 = 2i" /></p>
                        <p><Math tex="(1-i)^2 = -2i" /></p>
                      </div>
                      <div>
                        <p className="font-bold">高次幂叠加</p>
                        <p><Math tex="(1+i)^4 = (2i)^2 = -4" /></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-2 space-y-1">
                  <p className="font-bold">📝 例题：<Math tex="(2+3i)(1+i)" /></p>
                  <p>展开，得 <Math tex="2 + 2i + 3i + 3i^2" /></p>
                  <p>把 <Math tex="i^2 = -1" /> 代入，得 <Math tex="2 + 5i - 3" /></p>
                  <p><strong>结果：<Math tex="-1 + 5i" /></strong></p>
                </div>
              </div>
            </div>

            {/* ── i 的幂次 ── */}
            <div className="border border-gray-400 border-t-0 overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-700 border-b border-gray-400"><Math tex="i" /> 的幂次规律（必背）</div>
              {/* 上半：推导（左）+ 规律（右）*/}
              <div className="grid grid-cols-2 border-b border-gray-300">
                <div className="p-2 space-y-1 border-r border-gray-300">
                  <p className="font-bold">先推导一遍，看看 <Math tex="i" /> 的幂次怎么变化：</p>
                  <p><Math tex="i^1 = i" /></p>
                  <p><Math tex="i^2 = -1" />（定义）</p>
                  <p><Math tex="i^3 = i^2 \cdot i = (-1) \cdot i = -i" /></p>
                  <p><Math tex="i^4 = i^2 \cdot i^2 = (-1)(-1) = 1" /></p>
                  <p><Math tex="i^5 = i^4 \cdot i = i" />（和 <Math tex="i^1" /> 一样，<strong>循环！</strong>）</p>
                </div>
                <div className="p-2 space-y-1">
                  <p className="font-bold leading-none">规律：每 4 个一循环</p>
                  <div className="flex items-center justify-center gap-1 flex-wrap mt-0.5">
                    {([['i'],[ '-1'],['-i'],['1']] as [string][]).map(([tex], idx) => (
                      <span key={idx} className="inline-flex items-center gap-1">
                        <span className="inline-flex items-center justify-center w-12 h-7 border border-gray-400 rounded font-bold"><Math tex={tex} /></span>
                        {idx < 3 && <span className="text-gray-700 font-bold px-0.5">·</span>}
                      </span>
                    ))}
                    <span className="ml-1">循环</span>
                  </div>
                  <p className="font-bold">快速求法：指数 ÷ 4 看余数</p>
                  <table className="border-collapse w-full">
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 text-center font-bold">余数</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-center">1</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-center">2</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-center">3</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-center">0</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 text-center font-bold">结果</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="i" /></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="-1" /></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="-i" /></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="1" /></td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="rounded p-1 border border-gray-300">
                    <p><span className="font-bold">🧠 记忆口诀：</span><strong>一i二负三负i，四回原点重头起</strong></p>
                  </div>
                </div>
              </div>
              {/* 底部例题 */}
              <div className="grid grid-cols-2 border-t border-gray-300">
                <div className="px-2 py-1 border-r border-gray-300">
                  <p>📝 <Math tex="i^{2025}" />：2025 ÷ 4 余 <strong>1</strong>，得 <Math tex="i^{2025} = i" /></p>
                </div>
                <div className="px-2 py-1">
                  <p>📝 <Math tex="i^{100}" />：100 ÷ 4 余 <strong>0</strong>，得 <Math tex="i^{100} = 1" /></p>
                </div>
              </div>
            </div>

            {/* ── 除法 ── */}
            <div className="border border-gray-400 border-t-0 overflow-hidden" style={{ breakBefore: 'page' }}>
              <div className="px-2 py-1 font-bold text-orange-700 border-b border-gray-400">除法（含共轭复数）</div>
              <div className="grid" style={{ gridTemplateColumns: '45fr 55fr' }}>
                <div className="p-2 space-y-1.5 border-r border-gray-300">
                  <div className="rounded p-1.5 border border-gray-200">
                    <p className="font-bold">💡 共轭复数</p>
                    <p>实部不变，虚部取反，记作 <Math tex="\bar{z}" /></p>
                    <p><Math tex="3+2i" /> 的共轭是 <Math tex="3-2i" /></p>
                    <p className="mt-1"><strong>性质：</strong><Math tex="z \cdot \bar{z} = a^2+b^2" />（结果是实数）</p>
                  </div>
                  <div className="rounded p-1.5 border border-gray-200">
                    <p className="font-bold">除法三步走</p>
                    <p><strong>①</strong> 写出分母的共轭</p>
                    <p><strong>②</strong> 上下同乘共轭</p>
                    <p><strong>③</strong> 展开，化成 <Math tex="a+bi" /></p>
                  </div>
                </div>
                <div className="p-2 space-y-1">
                  <p className="font-bold">📝 例题：<Math tex="\dfrac{3+i}{1+i}" /></p>
                  <p>分母有 <Math tex="i" />，不是标准形式，用「除法三步走」</p>
                  <p><strong>①</strong> 分母 <Math tex="1+i" /> 的共轭是 <Math tex="1-i" /></p>
                  <p><strong>②</strong> 上下同乘 <Math tex="1-i" />，得 <Math tex="\dfrac{(3+i)(1-i)}{(1+i)(1-i)}" /></p>
                  <p><strong>③</strong> 展开：<Math tex="\dfrac{3 - 3i + i - i^2}{1 - i^2} = \dfrac{4-2i}{2} = 2-i" /></p>
                </div>
              </div>
            </div>

            {/* ── 模 ── */}
            <div className="border border-gray-400 border-t-0 overflow-hidden">
              <div className="px-2 py-1 font-bold text-cyan-700 border-b border-gray-400">复数的模（大小）</div>
              <div className="grid grid-cols-2">
                <div className="p-2 space-y-1 border-r border-gray-300">
                  <p><strong>定义：</strong>点 <Math tex="(a,b)" /> 到原点的距离（勾股定理）</p>
                  <Math tex="|z| = \sqrt{a^2 + b^2}" display />
                  <div className="rounded p-1.5 border border-gray-200">
                    <p className="font-bold">🔑 重要性质</p>
                    <p><Math tex="|z|^2 = z \cdot \bar{z} = a^2+b^2" /></p>
                    <p><Math tex="|z_1 z_2| = |z_1||z_2|" /></p>
                  </div>
                </div>
                <div className="p-2 space-y-1">
                  <p className="font-bold">📝 例题</p>
                  <p><Math tex="|3+4i| = \sqrt{9+16} = 5" /></p>

                  <p><Math tex="|(2+i)^2| = |2+i|^2 = (\sqrt{2^2+1^2})^2 = (\sqrt{5})^2 = 5" />（幂的模）</p>
                  <p><Math tex="\left|\dfrac{2+2i}{1+i}\right| = \dfrac{|2+2i|}{|1+i|} = \dfrac{\sqrt{8}}{\sqrt{2}} = 2" />（求商的模，不用化简）</p>
                </div>
              </div>
            </div>

            {/* ── 综合实战 ── */}
            <div className="rounded border-2 border-gray-500 overflow-hidden mt-1">
              <div className="px-2 py-1 font-bold text-gray-900 border-b border-gray-500">🔥 综合实战（一题串联全部知识点）</div>
              <div className="px-2 py-1 border-b border-gray-300">
                <p className="font-bold">题目：已知 <Math tex="z_1 = (1+i)^2" />，<Math tex="z_2 = \dfrac{3+i}{1-i}" />，求 <Math tex="\left|z_1 + z_2\right| + i^{2025}" /></p>
              </div>
              <div className="grid grid-cols-2">
                <div className="p-2 space-y-1 border-r border-gray-300">
                  <p className="font-bold">第一步：算 <Math tex="z_1" />（乘法）</p>
                  <p>展开，得 <Math tex="1 + 2i + i^2 = 2i" /></p>
                  <p className="font-bold">第二步：算 <Math tex="z_2" />（除法）</p>
                  <p>分母共轭 <Math tex="1+i" />，上下同乘，得</p>
                  <p><Math tex="z_2 = \dfrac{(3+i)(1+i)}{2} = 1+2i" /></p>
                  <p className="font-bold">第三步：加法</p>
                  <p><Math tex="z_1+z_2 = 2i + (1+2i) = 1+4i" /></p>
                </div>
                <div className="p-2 space-y-1">
                  <p className="font-bold">第四步：求模</p>
                  <p><Math tex="|1+4i| = \sqrt{1+16} = \sqrt{17}" /></p>
                  <p className="font-bold">第五步：i 的幂次</p>
                  <p><Math tex="2025 \div 4" /> 余 <strong>1</strong>，得 <Math tex="i^{2025} = i" /></p>
                  <p className="font-bold">最终结果</p>
                  <p><strong><Math tex="\sqrt{17} + i" /></strong></p>
                </div>
              </div>
            </div>

            <PracticeCard questions={complexPractice4} explanations={complexExplanations} optionCols={4} printOptionCols={4} />

            <div className="rounded p-2 border border-gray-400 space-y-0.5 mt-1">
              <p className="font-bold text-red-700">⚠️ 易错点</p>
              <p>遇到 <Math tex="i^2" /> <strong>必须立刻换成 <Math tex="-1" /></strong>，这是最常见的计算失误</p>
              <p>除法一定要<strong>分母实数化</strong>，上下同乘共轭，不能直接硬除</p>
              <p><Math tex="i" /> 的幂次：除以 4 看余数，余 1 是 <Math tex="i" />，余 2 是 <Math tex="-1" />，余 3 是 <Math tex="-i" />，余 0 是 <Math tex="1" /></p>
              <p>求模别忘了<strong>开根号</strong>：<Math tex="|z| = \sqrt{a^2+b^2}" />，不是 <Math tex="a^2+b^2" /></p>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ══════════════ Section 5: 复平面 ══════════════ */}
      <section id="complex-plane" className="scroll-mt-4">
        <Collapsible title="五、复平面（几何意义）">
          <div className="space-y-2 text-gray-700">
            <div className="flex items-start gap-2">
              <div className="flex-1 space-y-1">
                <p>每个复数 <Math tex="z = a + bi" /> 对应复平面上的一个点 <Math tex="(a, b)" />：</p>
                <p><strong>x 轴 = 实轴</strong>：上面的点都是实数</p>
                <p><strong>y 轴 = 虚轴</strong>：上面的点（除原点）都是纯虚数</p>
                <p><Math tex="|z|" /> 等于点到原点的距离</p>
                <div className="bg-blue-50 border border-blue-200 rounded p-1.5 mt-1">
                  <p><span className="font-bold text-blue-800">判断象限方法</span>：先化简成 <Math tex="a + bi" />，然后看 <Math tex="(a, b)" /> 在哪个象限：</p>
                  <div className="grid grid-cols-2 gap-0.5 mt-0.5">
                    <p><Math tex="a>0,\, b>0" />，在第一象限</p>
                    <p><Math tex="a<0,\, b>0" />，在第二象限</p>
                    <p><Math tex="a<0,\, b<0" />，在第三象限</p>
                    <p><Math tex="a>0,\, b<0" />，在第四象限</p>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0" style={{ width: 290, height: 195 }}>
                <DebugGeo2dSvg data={complexPlaneDiagram} width={290} height={195} />
              </div>
            </div>

            <PracticeCard questions={complexPractice5} explanations={complexExplanations} optionCols={4} printOptionCols={4} />

            <div className="rounded p-2 border border-red-200 bg-red-50">
              <p><strong className="text-red-800">⚠️ 易错点</strong>：<Math tex="z = a+bi" /> 对应点 <Math tex="(a,b)" />，实部是横坐标、虚部是纵坐标，<strong>坐标轴上的点不属于任何象限</strong></p>
            </div>
          </div>
        </Collapsible>
      </section>

      {/* ══════════════ Section 6: 考场技巧 ══════════════ */}
      <section id="complex-tips" className="scroll-mt-4">
        <Collapsible title="⚡ 考场技巧（速算秒杀）">
          <div className="text-gray-700 border border-gray-300 rounded">
            <div className="grid grid-cols-2">

              {/* 技巧1：共轭速算 */}
              <div className="p-2 space-y-1 border-r border-gray-300">
                <p className="font-bold text-green-800">技巧1：共轭速算公式</p>
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

              {/* 技巧2：复平面对称 */}
              <div className="p-2 space-y-1">
                <p className="font-bold text-blue-800">技巧2：复平面对称</p>
                <p>已知 <Math tex="z = a + bi" />，对称点直接写出：</p>
                <div className="bg-gray-50 rounded p-1.5 space-y-1">
                  <p><strong>关于实轴</strong>（x轴）对称：<Math tex="\bar{z} = a - bi" /></p>
                  <p><strong>关于虚轴</strong>（y轴）对称：<Math tex="-\bar{z} = -a + bi" /></p>
                  <p><strong>关于原点</strong>对称：<Math tex="-z = -a - bi" /></p>
                </div>
                <div className="bg-gray-50 rounded p-1.5 space-y-1">
                  <p className="font-bold">例：<Math tex="z = 2 + 3i" />，关于虚轴的对称点</p>
                  <p>直接写 <Math tex="-\bar{z} = -2 + 3i" />，对应点 <Math tex="(-2,\, 3)" /></p>
                </div>
              </div>

            </div>
          </div>
        </Collapsible>
      </section>

      {/* ══════════════ Section 7: 高考真题实战 ══════════════ */}
      <section id="complex-quiz" className="scroll-mt-4">
        <Collapsible title="七、高考真题实战">
          <QuizPanel
            module="complex"
            questions={complexQuizQuestions}
            title="复数真题"
            description="10道真题精选，覆盖所有典型考法。"
            explanations={complexExplanations}
          />
        </Collapsible>
      </section>

      {isPrinting && printOptions.showAnswers && <ComplexAnswers />}
      </LessonLayout>
      <Geo2dDebugToggle />
    </div>
  );
}
