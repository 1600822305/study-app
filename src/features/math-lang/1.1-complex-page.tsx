import { Math, Collapsible, PageHeader, LessonLayout, PracticeCard, ExportButton, DebugGeo2dSvg, UnifiedDebugToggle, PrintQuestions } from '@/components/shared';
import { complexPractice2, complexPractice3, complexPractice4, complexPractice5 } from './data/1.1/1.1-practice';
import { complexQuizQuestions } from './data/1.1/1.1-quiz';
import { complexPlaneDiagram } from './data/1.1/1.1-diagrams';
import { useProgress, usePrintMode } from '@/hooks';
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
        tags={[
          { label: '难度 ★☆☆☆☆', color: 'green' },
          { label: '高考必考 5分', color: 'blue' },
          { label: '约2小时', color: 'purple' },
        ]}
      />

      <div className="flex justify-end mb-1 print:hidden">
        <ExportButton title="1.1 复数" />
      </div>


      <LessonLayout progressItems={items} onToggle={toggle}>
        <div className="[&_.rounded-xl]:mb-0 [&_.rounded-xl>.flex.items-center]:py-1 [&_.rounded-xl>div:last-child]:px-0 [&_.rounded-xl>div:last-child]:pt-0 [&_.rounded-xl>div:last-child]:pb-0">


      {/* ══════════════ Section 1: 什么是复数 ══════════════ */}
      <section id="complex-what" className="mb-0 scroll-mt-4">
        <Collapsible title="一、什么是复数？">
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">定义</div>
              <div className="grid grid-cols-[58fr_auto_42fr]">
                <div className="px-3 py-1.5 space-y-1">
                  <p>复数（Complex Number）是一种数学概念，表示为</p>
                  <div className="text-2xl [&_.katex-display]:!my-1"><Math tex="z = a + bi" display /></div>
                  <p><Math tex="a" /> 是<strong>实部</strong>（实数部分），<Math tex="b" /> 是<strong>虚部</strong>（<Math tex="i" /> 前面的系数），<Math tex="i" /> 是<strong>虚数单位</strong>，<Math tex="i^2 = -1" /></p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="px-3 py-1.5 space-y-1">
                  <p>复数在17世纪首次由意大利数学家拉斐尔·邦贝利提出，用来解决三次方程的解。它在数学、物理学、工程学等多个领域有广泛应用，特别是在交流电、量子力学、信号处理等方面发挥了重要作用。</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">复数的分类</div>
              <div className="grid grid-cols-[54fr_auto_46fr]">
                <div className="px-3 py-0.5 text-center font-mono">
                  <p className="mb-0.5">复数 <Math tex="z = a + bi" />（<Math tex="a, b \in \mathbb{R}" />）</p>
                  <p className="text-gray-700 mb-0.5">┌─────────┴─────────┐</p>
                  <div className="flex justify-center gap-28 mb-0.5">
                    <span><Math tex="b = 0" /></span>
                    <span><Math tex="b \neq 0" /></span>
                  </div>
                  <div className="flex justify-center gap-32 mb-0.5">
                    <span className="text-green-700 font-bold">实数</span>
                    <span className="text-purple-700 font-bold">虚数</span>
                  </div>
                  <p className="text-gray-700 mb-0.5 ml-[10rem]">┌─────┴─────┐</p>
                  <div className="flex justify-center gap-4 ml-[10rem]">
                    <div className="text-center">
                      <p><Math tex="a \neq 0" /></p>
                      <p className="text-blue-700 font-bold">一般虚数</p>
                    </div>
                    <div className="text-center">
                      <p><Math tex="a = 0" /></p>
                      <p className="text-red-700 font-bold">纯虚数</p>
                    </div>
                  </div>
                  <p className="mt-0.5">实数是复数的特例（虚部为 0）；0 既是实数也是复数，但<strong>不是</strong>纯虚数</p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="flex items-stretch">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-2 py-1 text-center">复数 <Math tex="z" /></th>
                        <th className="border border-gray-300 px-2 py-1 text-center">实部 <Math tex="a" /></th>
                        <th className="border border-gray-300 px-2 py-1 text-center">虚部 <Math tex="b" /></th>
                        <th className="border border-gray-300 px-2 py-1 text-center">类型</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['3 + 2i', '3', '2', '虚数', ''],
                        ['5 - 4i', '5', '-4', '虚数', ''],
                        ['7', '7', '0', '实数', ''],
                        ['3i', '0', '3', '纯虚数', ''],
                        ['0', '0', '0', '实数（也是复数）', ''],
                      ].map(([z, a, b, type, bg], idx) => (
                        <tr key={idx} className={bg}>
                          <td className="border border-gray-300 px-2 py-1 text-center"><Math tex={z} /></td>
                          <td className="border border-gray-300 px-2 py-1 text-center"><Math tex={a} /></td>
                          <td className="border border-gray-300 px-2 py-1 text-center"><Math tex={b} /></td>
                          <td className="border border-gray-300 px-2 py-1 text-center font-bold">{type}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-3 py-0.5 space-y-0">
                <p><strong>⚠️ 高考陷阱：</strong>虚部是系数 <Math tex="b" />，不是 <Math tex="bi" />。例：<Math tex="z = 3 + 5i" /> 的虚部是 <Math tex="5" />，不是 <Math tex="5i" /></p>
              </div>
            </div>

            <div className="text-base print:hidden">
              <PracticeCard title="" questions={complexPractice2} explanations={complexExplanations} hideBlankLine optionCols={4} printOptionCols={4}
                renderItem={(q, idx) => (
                  <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                    <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                    {q.questionLatex && <Math tex={q.questionLatex} />}
                  </p>
                )}
              />
            </div>
            <div className="text-base hidden print:block">
              <PrintQuestions questions={complexPractice2} printOptionCols={4} />
            </div>
          </div>
        </Collapsible>
      </section>

      {/* ══════════════ Section 2: 复数的相等 ══════════════ */}
      <section id="complex-equality" className="mb-0 scroll-mt-4">
        <Collapsible title="二、复数的相等">
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">定义与判定条件</div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div className="px-3 py-1.5 space-y-1">
                  <p>两个复数相等，当且仅当它们的实部和虚部分别相等。</p>
                  <p>设复数 <Math tex="z_1 = a + bi" /> 和 <Math tex="z_2 = c + di" />（其中 <Math tex="a, b, c, d \in \mathbb{R}" />），</p>
                  <p>则：实部相等：<Math tex="a = c" />，虚部相等：<Math tex="b = d" /></p>
                  <hr className="border-gray-300" />
                  <p>只有当这两个条件同时满足时，才能断定 <Math tex="z_1 = z_2" />。</p>
                  <p>反之，如果两个复数的实部和虚部分别相等，它们也必然相等。</p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="px-3 py-1.5 space-y-1">
                  <p className="font-bold">特殊情况</p>
                  <p>零复数：当 <Math tex="a + bi = 0" /> 时，必须满足 <Math tex="a = 0" /> 且 <Math tex="b = 0" />。</p>
                  <p>实数复数：若虚部为零，则复数可直接按实数大小比较，</p>
                  <p>但含虚部的复数无法比较大小，如 <Math tex="1+i" /> 和 <Math tex="2-3i" /> 不能比大小</p>
                  <p>（复数是二维的，无法像数轴上的实数那样排出先后顺序）。</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">实战例题</div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div className="px-3 py-1.5 space-y-1">
                  <p className="font-bold">例1：已知 <Math tex="(m^2-4)+(m+2)i=0" />（<Math tex="m \in \mathbb{R}" />），求 <Math tex="m" /></p>
                  <p>实部 = 0：<Math tex="m^2 - 4 = 0" />，得 <Math tex="m = \pm 2" /></p>
                  <p>虚部 = 0：<Math tex="m + 2 = 0" />，得 <Math tex="m = -2" /></p>
                  <p>两个条件同时满足，所以 <Math tex="m = -2" /></p>
                  <p><strong>易错：</strong>只解一个方程就写答案</p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="px-3 py-1.5 space-y-1">
                  <p className="font-bold">例2：已知 <Math tex="z = (a^2-1)+(a-1)i" /> 是纯虚数（<Math tex="a \in \mathbb{R}" />），求 <Math tex="a" /></p>
                  <p>纯虚数要求：实部 = 0 <strong>且</strong> 虚部 <Math tex="\neq" /> 0</p>
                  <p>实部 = 0：<Math tex="a^2 - 1 = 0" />，得 <Math tex="a = \pm 1" /></p>
                  <p>虚部 <Math tex="\neq" /> 0：<Math tex="a - 1 \neq 0" />，得 <Math tex="a \neq 1" />，取交集：<Math tex="a = -1" /></p>
                  <p><strong>易错：</strong>忘记检查虚部 <Math tex="\neq" /> 0，错答 <Math tex="a = \pm 1" /></p>
                </div>
              </div>
            </div>

            <div className="text-base print:hidden">
              <PracticeCard title="" questions={complexPractice3} explanations={complexExplanations} hideBlankLine optionCols={4} printOptionCols={4}
                renderItem={(q, idx) => (
                  <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                    <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                    {q.questionLatex && <Math tex={q.questionLatex} />}
                  </p>
                )}
              />
            </div>
            <div className="text-lg hidden print:block">
              <PrintQuestions questions={complexPractice3} printOptionCols={4} />
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ══════════════ Section 3: 四则运算 ══════════════ */}
      <section id="complex-ops" className="mb-0 scroll-mt-4">
        <Collapsible title="三、四则运算">
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-3 py-1 text-center font-bold">
                💡 把 <Math tex="i" /> 当字母展开，遇到 <Math tex="i^2" /> 换成 <Math tex="-1" />，所有复数运算都能算
              </div>
            </div>

            {/* ── 加减法 ── */}
            <div className="border border-gray-400 overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">加法和减法</div>
              <div className="grid grid-cols-2">
                <div className="p-2 space-y-1 border-r border-gray-300">
                  <p className="font-bold">规则：实部加实部，虚部加虚部</p>
                  <div className="[&_.katex-display]:!my-0.5"><Math tex="(a+bi)+(c+di) = (a{+}c)+(b{+}d)i" display /></div>
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
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">乘法 ：多项式展开（FOIL）+ 把 <Math tex="i^2" /> 换成 <Math tex="-1" /></div>
              <div className="grid grid-cols-2">
                <div className="p-2 space-y-1 border-r border-gray-300">
                  <div className="[&_.katex-display]:!my-0.5"><Math tex="(a+bi)(c+di) = (ac-bd)+(ad+bc)i" display /></div>
                  <div className="rounded p-1.5 border border-gray-200 text-[0.85rem]">
                    <p>展开：<Math tex="ac + adi + bci + bdi^2" /></p>
                    <p>代入 <Math tex="i^2 = -1" />：<Math tex="ac + adi + bci - bd" /></p>
                    <p>合并：<Math tex="(ac-bd)+(ad+bc)i" /></p>
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
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100"><Math tex="i" /> 的幂次规律（必背）</div>
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
                <div className="p-2 pb-0 space-y-1">
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
                  <div className="rounded p-1 border border-gray-300 -mt-1">
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
            <div className="border border-gray-400 border-t-0 overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">除法（含共轭复数）</div>
              <div className="grid" style={{ gridTemplateColumns: '30fr 40fr 30fr' }}>
                <div className="border-r border-gray-300">
                  <div className="p-2">
                    <p className="font-bold">💡 共轭复数</p>
                    <p>实部不变，虚部取反，记作 <Math tex="\bar{z}" /></p>
                    <p><Math tex="3+2i" /> 的共轭是 <Math tex="3-2i" /></p>
                    <p><strong>性质：</strong><Math tex="z \cdot \bar{z} = a^2+b^2" />（结果是实数）</p>
                  </div>
                  <div className="p-2 border-t border-gray-300">
                    <p className="font-bold">除法三步走</p>
                    <p><strong>①</strong> 写出分母的共轭</p>
                    <p><strong>②</strong> 上下同乘共轭</p>
                    <p><strong>③</strong> 展开，化成 <Math tex="a+bi" /></p>
                  </div>
                </div>
                <div className="p-2 border-r border-gray-300 [&>p]:py-1 [&>p]:border-b [&>p]:border-gray-200 [&>p:last-child]:border-b-0">
                  <p className="font-bold">📝 例题：<Math tex="\dfrac{3+i}{1+i}" /></p>
                  <p>分母有 <Math tex="i" />，不是标准形式，用「除法三步走」</p>
                  <p><strong>①</strong> 分母 <Math tex="1+i" /> 的共轭是 <Math tex="1-i" /></p>
                  <p><strong>②</strong> 上下同乘 <Math tex="1-i" />，得 <Math tex="\dfrac{(3+i)(1-i)}{(1+i)(1-i)}" /></p>
                  <p><strong>③</strong> 展开：<Math tex="\dfrac{3 - 3i + i - i^2}{1 - i^2} = \dfrac{4-2i}{2} = 2-i" /></p>
                </div>
                <div className="p-2">
                  <p className="font-bold mb-1">🔑 共轭其他性质</p>
                  <table className="w-full border-collapse text-base">
                    <tbody>
                      <tr><td className="border border-gray-300 px-2 py-1"><Math tex="z + \bar{z} = 2a" /></td><td className="border border-gray-300 px-2 py-1">实部的 2 倍</td></tr>
                      <tr><td className="border border-gray-300 px-2 py-1"><Math tex="z - \bar{z} = 2bi" /></td><td className="border border-gray-300 px-2 py-1">虚部的 2i 倍</td></tr>
                      <tr><td className="border border-gray-300 px-2 py-1"><Math tex="|\bar{z}| = |z|" /></td><td className="border border-gray-300 px-2 py-1">模不变</td></tr>
                      <tr><td className="border border-gray-300 px-2 py-1"><Math tex="\bar{\bar{z}} = z" /></td><td className="border border-gray-300 px-2 py-1">共轭两次回自己</td></tr>
                      <tr><td className="border border-gray-300 px-2 py-1"><Math tex="z = \bar{z}" /></td><td className="border border-gray-300 px-2 py-1"><Math tex="z" /> 是实数</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* ── 模 ── */}
            <div className="border border-gray-400 border-t-0 overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">复数的模（大小）</div>
              <div className="grid grid-cols-2">
                <div className="p-2 space-y-0.5 border-r border-gray-300">
                  <p><strong>定义：</strong>点 <Math tex="(a,b)" /> 到原点的距离（<Math tex="b" /> 是虚部系数，勾股定理）</p>
                  <div className="[&_.katex-display]:!my-0.5 [&_.katex]:text-lg"><Math tex="|z| = \sqrt{a^2 + b^2}" display /></div>
                  <div className="rounded p-1.5 border border-gray-200 grid grid-cols-[auto_1fr_1fr] gap-x-4 gap-y-0.5">
                    <span className="font-bold border-b border-gray-200 pb-0.5">🔑 重要性质</span>
                    <span className="border-b border-gray-200 pb-0.5"><Math tex="|z|^2 = z \cdot \bar{z}" /></span>
                    <span className="border-b border-gray-200 pb-0.5"><Math tex="|z_1 z_2| = |z_1||z_2|" /></span>
                    <span />
                    <span><Math tex="\left|\dfrac{z_1}{z_2}\right| = \dfrac{|z_1|}{|z_2|}" /></span>
                    <span><Math tex="|z^n| = |z|^n" /></span>
                  </div>
                </div>
                <div className="p-2 [&>p]:py-1 [&>p]:border-b [&>p]:border-gray-200 [&>p:last-child]:border-b-0">
                  <p className="font-bold">📝 例题</p>
                  <p><Math tex="|3+4i| = \sqrt{9+16} = 5" /></p>
                  <p><Math tex="|(2+i)^2| = |2+i|^2 = (\sqrt{2^2+1^2})^2 = (\sqrt{5})^2 = 5" />（幂的模）</p>
                  <p><Math tex="\left|\dfrac{2+2i}{1+i}\right| = \dfrac{|2+2i|}{|1+i|} = \dfrac{\sqrt{8}}{\sqrt{2}} = 2" />（求商的模，不用化简）</p>
                </div>
              </div>
            </div>

            {/* ── 综合实战 ── */}
            <div className="border border-gray-400 overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🔥 综合实战（一题串联全部知识点）</div>
              <div className="flex">
                <div className="flex-1">
                  <div className="px-2 py-1 border-b border-gray-300">
                    <p className="font-bold">题目：已知 <Math tex="z_1 = (1+i)^2" />，<Math tex="z_2 = \dfrac{3+i}{1-i}" />，求 <Math tex="\left|z_1 + z_2\right| + i^{2025}" /></p>
                  </div>
                  <div className="grid" style={{ gridTemplateColumns: '44fr 56fr' }}>
                    <div className="p-2 space-y-0.5 border-r border-gray-300">
                    <p className="font-bold">第一步：算 <Math tex="z_1" />（乘法）</p>
                    <p>展开，得 <Math tex="1 + 2i + i^2 = 2i" /></p>
                    <p className="font-bold">第二步：算 <Math tex="z_2" />（除法）</p>
                    <p>分母共轭 <Math tex="1+i" />，上下同乘，得</p>
                    <p><Math tex="z_2 = \dfrac{(3+i)(1+i)}{2} = 1+2i" /></p>
                  </div>
                  <div className="p-2 space-y-0.5">
                    <p className="font-bold">第三步：加法</p>
                    <p><Math tex="z_1+z_2 = 2i + (1+2i) = 1+4i" /></p>
                    <p className="font-bold">第四步：求模</p>
                    <p><Math tex="|1+4i| = \sqrt{1+16} = \sqrt{17}" /></p>
                    <div className="flex gap-4">
                      <div>
                        <p className="font-bold">第五步：i 的幂次</p>
                        <p><Math tex="2025 \div 4" /> 余 <strong>1</strong>，得 <Math tex="i^{2025} = i" />，</p>
                      </div>
                      <div>
                        <p className="font-bold">最终结果</p>
                        <p><strong><Math tex="\sqrt{17} + i" /></strong></p>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="border-l border-gray-400 p-2 space-y-0.5" style={{ width: '41%', flexShrink: 0 }}>
                  <p className="font-bold">📝 例题：共轭与模的性质</p>
                  <p>已知 <Math tex="z = 1-2i" />，求 <Math tex="z+\bar{z}" />，<Math tex="z \cdot \bar{z}" />，<Math tex="|z^2|" /></p>
                  <p className="font-bold">第一步：求共轭</p>
                  <p>实部不变，虚部取反，得 <Math tex="\bar{z} = 1+2i" /></p>
                  <p className="font-bold">第二步：套公式</p>
                  <p><Math tex="z+\bar{z} = 2a = 2" />，<Math tex="z \cdot \bar{z} = a^2+b^2 = 1+4 = 5" /></p>
                  <p className="font-bold">第三步：模的幂次性质</p>
                  <p><Math tex="|z^2| = |z|^2 = (\sqrt{5})^2 = 5" /></p>
                </div>
              </div>
            </div>

            <div className="text-base print:hidden">
              <PracticeCard title="" questions={complexPractice4} explanations={complexExplanations} hideBlankLine optionCols={4} printOptionCols={4} />
            </div>
            <div className="text-base hidden print:block">
              <PrintQuestions questions={complexPractice4} columns={2} />
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-3 py-0.5 space-y-0">
                <p><strong>⚠️ ① 遇到 <Math tex="i^2" /> 必须立刻换成 <Math tex="-1" /></strong>，这是最常见的计算失误</p>
                <p className="pl-6"><strong>② 除法一定要分母实数化</strong>，上下同乘共轭，不能直接硬除</p>
                <p className="pl-6"><strong>③ <Math tex="i" /> 的幂次：</strong>除以 4 看余数，余 1 是 <Math tex="i" />，余 2 是 <Math tex="-1" />，余 3 是 <Math tex="-i" />，余 0 是 <Math tex="1" /></p>
                <p className="pl-6"><strong>④ 求模别忘开根号：</strong><Math tex="|z| = \sqrt{a^2+b^2}" />，不是 <Math tex="a^2+b^2" /></p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ══════════════ Section 4: 复平面 ══════════════ */}
      <section id="complex-plane" className="mb-0 scroll-mt-4">
        <Collapsible title="四、复平面（几何意义）">
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="grid grid-cols-[1fr_auto]">
                <div className="px-3 py-0.5 space-y-0">
                  <p>每个复数 <Math tex="z = a + bi" /> 对应复平面上的一个点 <Math tex="(a, b)" /></p>
                  <p><strong>x 轴 = 实轴</strong>：上面的点都是实数</p>
                  <p><strong>y 轴 = 虚轴</strong>：上面的点（除原点）都是纯虚数</p>
                  <p><Math tex="|z|" /> 等于点到原点的距离</p>
                  <div className="border-t border-gray-200 mt-0.5 pt-0.5">
                    <p><strong>判断象限方法：</strong>先化简成 <Math tex="a + bi" />，看 <Math tex="(a, b)" /> 在哪个象限</p>
                    <div className="grid grid-cols-2 gap-x-4">
                      <p><Math tex="a>0,\, b>0" /> → 第一象限</p>
                      <p><Math tex="a<0,\, b>0" /> → 第二象限</p>
                      <p><Math tex="a<0,\, b<0" /> → 第三象限</p>
                      <p><Math tex="a>0,\, b<0" /> → 第四象限</p>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0 border-l border-gray-300 flex items-center justify-center p-1" style={{ width: 290 }}>
                  <DebugGeo2dSvg data={complexPlaneDiagram} width={280} height={190} />
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-3 py-0.5 space-y-0">
                <p><strong>⚠️ </strong><Math tex="z = a+bi" /> 对应点 <Math tex="(a,b)" />，实部是横坐标、虚部是纵坐标，<strong>坐标轴上的点不属于任何象限</strong></p>
              </div>
            </div>

            <div className="text-[0.95rem] print:hidden">
              <PracticeCard title="" questions={complexPractice5} explanations={complexExplanations} optionCols={4} printOptionCols={4} />
            </div>
            <div className="text-[0.95rem] hidden print:block">
              <PrintQuestions questions={complexPractice5} printOptionCols={4} />
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ══════════════ Section 5: 考场技巧 ══════════════ */}
      <section id="complex-tips" className="mb-0 scroll-mt-4">
        <Collapsible title="⚡ 考场技巧（速算秒杀）">
          <div className="space-y-0 text-[0.9rem] text-gray-800">
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="px-3 py-0.5 space-y-0 border-r border-gray-300">
                  <p className="font-bold">技巧1：共轭速算公式</p>
                  <p>看到 <Math tex="\bar{z}" /> 相关题，直接套公式：</p>
                  <div className="border-t border-gray-200 mt-0.5 pt-0.5 space-y-0">
                    <p><Math tex="z + \bar{z} = 2a" />（实部的两倍）</p>
                    <p><Math tex="z - \bar{z} = 2bi" />（虚部的两倍 × <Math tex="i" />）</p>
                    <p><Math tex="z \cdot \bar{z} = a^2 + b^2 = |z|^2" /></p>
                  </div>
                  <div className="border-t border-gray-200 mt-0.5 pt-0.5">
                    <p><strong>例：</strong><Math tex="z = 1+i" />，求 <Math tex="z + \bar{z}" />，直接 <Math tex="2 \times 1 = 2" /></p>
                  </div>
                </div>
                <div className="px-3 py-0.5 space-y-0">
                  <p className="font-bold">技巧2：复平面对称</p>
                  <p>已知 <Math tex="z = a + bi" />，对称点直接写出：</p>
                  <div className="border-t border-gray-200 mt-0.5 pt-0.5 space-y-0">
                    <p><strong>关于实轴</strong>（x轴）对称：<Math tex="\bar{z} = a - bi" /></p>
                    <p><strong>关于虚轴</strong>（y轴）对称：<Math tex="-\bar{z} = -a + bi" /></p>
                    <p><strong>关于原点</strong>对称：<Math tex="-z = -a - bi" /></p>
                  </div>
                  <div className="border-t border-gray-200 mt-0.5 pt-0.5">
                    <p><strong>例：</strong><Math tex="z = 2 + 3i" />，关于虚轴对称，得 <Math tex="-\bar{z} = -2 + 3i" /></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📋 复数全部公式速查表</div>
              <table className="w-full border-collapse text-[0.97rem] font-semibold text-gray-900 print-break-allow [&_.katex]:!text-gray-900">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-2 py-1 text-left w-[120px]">分类</th>
                    <th className="border border-gray-300 px-2 py-1 text-left">公式 / 结论</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 font-bold align-top" rowSpan={3}>基本概念</td>
                    <td className="border border-gray-300 px-2 py-1">复数形式：<Math tex="z = a + bi" />（<Math tex="a,b \in \mathbb{R}" />），<Math tex="a" /> 是实部，<Math tex="b" /> 是虚部</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1"><Math tex="b=0" /> 是实数；<Math tex="b \neq 0" /> 是虚数；<Math tex="a=0,\,b \neq 0" /> 是纯虚数</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1">复数相等：<Math tex="a+bi = c+di \Leftrightarrow a=c,\; b=d" /></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 font-bold align-top" rowSpan={3}>四则运算</td>
                    <td className="border border-gray-300 px-2 py-1">加减：<Math tex="(a+bi) \pm (c+di) = (a \pm c)+(b \pm d)i" /></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1">乘法：展开后把 <Math tex="i^2" /> 换成 <Math tex="-1" /></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1">除法：上下同乘分母的共轭，分母实数化</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 font-bold align-top"><Math tex="i" /> 的幂次</td>
                    <td className="border border-gray-300 px-2 py-1">四个一循环：<Math tex="i^1=i,\; i^2=-1,\; i^3=-i,\; i^4=1" />，指数 ÷ 4 看余数</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 font-bold align-top" rowSpan={2}>共轭性质</td>
                    <td className="border border-gray-300 px-2 py-1"><div className="grid grid-cols-2 gap-4"><div><Math tex="z + \bar{z} = 2a" />（实部的 2 倍）</div><div><Math tex="z - \bar{z} = 2bi" />（虚部的 2 倍 × <Math tex="i" />）</div></div></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1"><div className="grid grid-cols-2 gap-4"><div><Math tex="z \cdot \bar{z} = a^2 + b^2 = |z|^2" /></div><div><Math tex="z = \bar{z} \Leftrightarrow z \in \mathbb{R}" />，<Math tex="z = -\bar{z} \Leftrightarrow" /> <Math tex="z" /> 是纯虚数或 0</div></div></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 font-bold align-top" rowSpan={2}>模</td>
                    <td className="border border-gray-300 px-2 py-1"><Math tex="|z| = \sqrt{a^2+b^2}" />，<Math tex="|z|^2 = z \cdot \bar{z}" /></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1"><Math tex="|z_1 z_2| = |z_1||z_2|" />，<Math tex="\left|\dfrac{z_1}{z_2}\right| = \dfrac{|z_1|}{|z_2|}" /></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 font-bold align-top">复平面对称</td>
                    <td className="border border-gray-300 px-2 py-1">实轴对称：<Math tex="\bar{z} = a - bi" />；虚轴对称：<Math tex="-\bar{z} = -a + bi" />；原点对称：<Math tex="-z = -a - bi" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Collapsible>
      </section>

      {/* ══════════════ Section 6: 满分解题流程图 ══════════════ */}
      <section id="complex-flow" className="mb-0 scroll-mt-4">
        <Collapsible title="六、🎯 满分解题流程图（关键词 → 方法 → 公式）">
          <div className="space-y-0 text-[0.9rem] text-gray-800">
            {/* 三步法总览 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">满分三步走</div>
              <div className="grid grid-cols-3 text-center">
                <div className="px-2 py-1.5 border-r border-gray-300">
                  <p className="font-bold text-blue-700 mb-0.5">①读题找关键词</p>
                  <p>抓题干中的 <Math tex="\bar{z}" />、<Math tex="|z|" />、分式、<Math tex="i^n" />、象限、纯虚数…</p>
                </div>
                <div className="px-2 py-1.5 border-r border-gray-300">
                  <p className="font-bold text-green-700 mb-0.5">②查下表选方法</p>
                  <p>不同关键词对应固定套路，直接套公式，不要硬算</p>
                </div>
                <div className="px-2 py-1.5">
                  <p className="font-bold text-purple-700 mb-0.5">③化为 <Math tex="a+bi" /> 验算</p>
                  <p>最后一步必须化到标准形式，核对实部/虚部/象限</p>
                </div>
              </div>
            </div>

            {/* 关键词 → 方法决策表 */}
            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">关键词 → 方法 → 核心公式</div>
              <table className="w-full border-collapse text-[0.97rem] font-semibold text-gray-900 print-break-allow [&_.katex]:!text-gray-900">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-2 py-1 text-left w-[210px]">看到什么关键词</th>
                    <th className="border border-gray-300 px-2 py-1 text-left w-[180px]">立刻想到</th>
                    <th className="border border-gray-300 px-2 py-1 text-left">核心公式 / 一句话做法</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1">分式、除法 <Math tex="\frac{...}{c+di}" /></td>
                    <td className="border border-gray-300 px-2 py-1">分母实数化</td>
                    <td className="border border-gray-300 px-2 py-1">上下同乘分母的共轭 <Math tex="c-di" /></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1"><Math tex="i^n" />（<Math tex="n" /> 较大）</td>
                    <td className="border border-gray-300 px-2 py-1">4 循环</td>
                    <td className="border border-gray-300 px-2 py-1">除 4 看余数：余 1→<Math tex="i" />，2→<Math tex="-1" />，3→<Math tex="-i" />，0→<Math tex="1" /></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1"><Math tex="(1 \pm i)^n" />、<Math tex="(1 \pm i)^2" /></td>
                    <td className="border border-gray-300 px-2 py-1">先平方降次</td>
                    <td className="border border-gray-300 px-2 py-1"><Math tex="(1+i)^2 = 2i" />，<Math tex="(1-i)^2 = -2i" /></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1">"纯虚数"</td>
                    <td className="border border-gray-300 px-2 py-1">实部 = 0 <strong>且</strong> 虚部 ≠ 0</td>
                    <td className="border border-gray-300 px-2 py-1">联立方程组，<strong>检查虚部 ≠ 0</strong> 排除一个解</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1">"实数"</td>
                    <td className="border border-gray-300 px-2 py-1">虚部 = 0</td>
                    <td className="border border-gray-300 px-2 py-1">直接设虚部 = 0 解方程，或用 <Math tex="z = \bar{z}" /></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1"><Math tex="\bar{z}" /> 相关（求 <Math tex="z+\bar{z}" />、<Math tex="z \cdot \bar{z}" />）</td>
                    <td className="border border-gray-300 px-2 py-1">共轭速算</td>
                    <td className="border border-gray-300 px-2 py-1"><Math tex="z+\bar{z}=2a" />，<Math tex="z \cdot \bar{z}=|z|^2=a^2+b^2" /></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1"><Math tex="|z|" />、求模</td>
                    <td className="border border-gray-300 px-2 py-1">先看能否速算</td>
                    <td className="border border-gray-300 px-2 py-1">模的乘除：<Math tex="|z_1 z_2|=|z_1||z_2|" />、<Math tex="\left|\dfrac{z_1}{z_2}\right|=\dfrac{|z_1|}{|z_2|}" /></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1">"对应的点位于第几象限"</td>
                    <td className="border border-gray-300 px-2 py-1">化简后看 <Math tex="(a,b)" /></td>
                    <td className="border border-gray-300 px-2 py-1">先化为 <Math tex="a+bi" />，实部正负 + 虚部正负定象限</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1">"乘积 / 商是实数"求参数</td>
                    <td className="border border-gray-300 px-2 py-1">虚部 = 0</td>
                    <td className="border border-gray-300 px-2 py-1">展开 → 整理为 <Math tex="a+bi" /> → 令虚部 = 0 解 <Math tex="a" /></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1">实系数方程的虚根</td>
                    <td className="border border-gray-300 px-2 py-1">共轭成对</td>
                    <td className="border border-gray-300 px-2 py-1">由韦达定理 <Math tex="z \cdot \bar{z} = |z|^2 = \dfrac{\text{常数项}}{\text{首项}}" /></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1">向量 <Math tex="\overrightarrow{AB}" /> 对应的复数</td>
                    <td className="border border-gray-300 px-2 py-1">终点 - 起点</td>
                    <td className="border border-gray-300 px-2 py-1"><Math tex="\overrightarrow{AB}" /> 对应 <Math tex="z_B - z_A" /></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1">复平面对称</td>
                    <td className="border border-gray-300 px-2 py-1">套对称公式</td>
                    <td className="border border-gray-300 px-2 py-1">实轴→<Math tex="\bar{z}=a-bi" />；虚轴→<Math tex="-\bar{z}=-a+bi" />；原点→<Math tex="-z=-a-bi" /></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 考前心态提醒 */}
            <div className="border border-amber-400 bg-amber-50 rounded overflow-hidden -mt-px">
              <div className="px-3 py-1 space-y-0">
                <p><strong>⏱ 做题目标：</strong>60 秒内做完，得分率 100%（这是高考第 1-2 题，送分题，稳字当头）</p>
                <p><strong>🧠 心态提醒：</strong>看到复数别慌，90% 的题用上表中一个套路就能秒杀，不要硬算、不要跳步</p>
              </div>
            </div>
          </div>
        </Collapsible>
      </section>

      {/* ══════════════ Section 7: 高考真题练习 ══════════════ */}
      <section id="complex-quiz" className="mb-0 scroll-mt-4">
        <Collapsible title="七、高考真题练习">
          <div className="space-y-0 text-[0.9rem] text-gray-800">
            <div className="text-base print:hidden">
              <PracticeCard title="" questions={complexQuizQuestions} explanations={complexExplanations} optionCols={4} printOptionCols={4} />
            </div>
            {/* 打印版：填空题双列（7道）、选择题单列（5道） */}
            <div className="text-base hidden print:block">
              <PrintQuestions questions={complexQuizQuestions.filter(q => q.type === 'blank')} columns={2} />
              <PrintQuestions questions={complexQuizQuestions.filter(q => q.type === 'choice')} printOptionCols={4} />
            </div>
          </div>
        </Collapsible>
      </section>

      {isPrinting && printOptions.showAnswers && <ComplexAnswers />}
        </div>
      </LessonLayout>
      <UnifiedDebugToggle />
    </div>
  );
}
