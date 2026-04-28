import { Math, Collapsible, SpeakButton, PageHeader, PracticeCard, LessonLayout, ExportButton } from '@/components/shared';
import { prereqNarrations } from './data/1.0/1.0-narrations';
import { prereqPractice2, prereqPractice4, prereqPractice5, prereqPractice6 } from './data/1.0/1.0-practice';
import { prereqProgressItems } from './data/1.0/1.0-progress';
import { PrereqAnswers, prereqExplanations } from './1.0-prereq-answers';
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
        tags={[
          { label: '约30分钟', color: 'amber' },
          { label: '初中基础', color: 'green' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="1.0 前置知识回顾" />
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>
        <div className="[&_.rounded-xl]:mb-0 [&_.rounded-xl>.flex.items-center]:py-1 [&_.rounded-xl>div:last-child]:px-0 [&_.rounded-xl>div:last-child]:pt-0 [&_.rounded-xl>div:last-child]:pb-0">

          {/* ═══════════════════════════════════════════════════════ */}
          {/* Section 1: 数的分类 */}
          {/* ═══════════════════════════════════════════════════════ */}
          <section id="prereq-numclass" className="mb-0 scroll-mt-4">
            <Collapsible title="一、数的分类" defaultOpen storageKey="prereq:num-class" headerExtra={<SpeakButton text={prereqNarrations.numClass} />}>
              <div className="space-y-0 text-[0.9rem] text-gray-800">

                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">5 种数一览表</div>
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-2 py-1 text-center w-14">层级</th>
                        <th className="border border-gray-300 px-2 py-1 text-center">名称</th>
                        <th className="border border-gray-300 px-2 py-1 text-center">举例</th>
                        <th className="border border-gray-300 px-2 py-1 text-center">一句话解释</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="border border-gray-300 px-2 py-1 text-center">1</td><td className="border border-gray-300 px-2 py-1 text-center">自然数</td><td className="border border-gray-300 px-2 py-1 text-center">0, 1, 2, 3 …</td><td className="border border-gray-300 px-2 py-1">用于计数的数</td></tr>
                      <tr><td className="border border-gray-300 px-2 py-1 text-center">2</td><td className="border border-gray-300 px-2 py-1 text-center">整数</td><td className="border border-gray-300 px-2 py-1 text-center">…-2, -1, 0, 1, 2…</td><td className="border border-gray-300 px-2 py-1">自然数 + 负整数</td></tr>
                      <tr><td className="border border-gray-300 px-2 py-1 text-center">3</td><td className="border border-gray-300 px-2 py-1 text-center">有理数</td><td className="border border-gray-300 px-2 py-1 text-center"><Math tex="\dfrac{1}{2},\ -\dfrac{3}{4},\ 0.75" /></td><td className="border border-gray-300 px-2 py-1">整数 + 分数 + 有限小数</td></tr>
                      <tr><td className="border border-gray-300 px-2 py-1 text-center">4</td><td className="border border-gray-300 px-2 py-1 text-center">实数</td><td className="border border-gray-300 px-2 py-1 text-center"><Math tex="\sqrt{2},\ \pi" /></td><td className="border border-gray-300 px-2 py-1">有理数 + 无理数</td></tr>
                      <tr className="bg-blue-50"><td className="border border-gray-300 px-2 py-1 text-center font-bold">5</td><td className="border border-gray-300 px-2 py-1 text-center font-bold text-blue-700">复数</td><td className="border border-gray-300 px-2 py-1 text-center"><Math tex="3+2i,\ -i" /></td><td className="border border-gray-300 px-2 py-1">实数 + 虚数（你要学的）</td></tr>
                    </tbody>
                  </table>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">为什么要一层层升级？</div>
                  <div className="px-3 py-0.5">
                    <p>每次升级，都是因为<strong>旧的数解决不了新问题</strong>：</p>
                  </div>
                  <table className="w-full border-collapse">
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-2 py-1 font-bold text-center w-20">第1次</td>
                        <td className="border border-gray-300 px-2 py-1">自然数不够用：<Math tex="3 - 5 = ?" /> 算不了，加入<strong>负数</strong>，变成整数</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-1 font-bold text-center">第2次</td>
                        <td className="border border-gray-300 px-2 py-1">整数不够用：<Math tex="1 \div 3 = ?" /> 算不了，加入<strong>分数</strong>，变成有理数</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-1 font-bold text-center">第3次</td>
                        <td className="border border-gray-300 px-2 py-1">有理数不够用：<Math tex="\sqrt{2}" /> 写不成分数，加入<strong>无理数</strong>，变成实数</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="border border-gray-300 px-2 py-1 font-bold text-center text-blue-700">第4次</td>
                        <td className="border border-gray-300 px-2 py-1"><Math tex="x^2 = -1" /> 实数平方都 <Math tex="\geqslant 0" />，解不了，发明虚数单位 <Math tex="i" />，规定 <Math tex="i^2 = -1" />，实数和虚数组合写成 <Math tex="a + bi" />，就是<strong>复数</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-3 py-1 text-center font-bold">
                    自然数 <Math tex="\subset" /> 整数 <Math tex="\subset" /> 有理数 <Math tex="\subset" /> 实数 <Math tex="\subset" /> <span className="text-blue-600">复数</span>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-3 py-0.5 space-y-0">
                    <p><strong>⚠️ ① 0 是自然数</strong>，也是整数、有理数、实数</p>
                    <p className="pl-6"><strong>② 无限不循环小数</strong>（如 <Math tex="\sqrt{2}" />、<Math tex="\pi" />）是<strong>无理数</strong>，不是有理数</p>
                    <p className="pl-6"><strong>③ 每层都包含上一层：</strong><Math tex="\text{复数} \supset \text{实数} \supset \text{有理数} \supset \text{整数} \supset \text{自然数}" /></p>
                  </div>
                </div>

              </div>
            </Collapsible>
          </section>

          {/* ═══════════════════════════════════════════════════════ */}
          {/* Section 2: 平方与平方根 */}
          {/* ═══════════════════════════════════════════════════════ */}
          <section id="prereq-square" className="mb-0 scroll-mt-4">
            <Collapsible title="二、平方与平方根" defaultOpen storageKey="prereq:square" headerExtra={<SpeakButton text={prereqNarrations.square} />}>
              <div className="space-y-0 text-[0.9rem] text-gray-800">

                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">定义</div>
                  <div className="px-3 py-0.5">
                    <p>如果一个数 <Math tex="x" /> 满足 <Math tex="x^2 = a" />，则称 <Math tex="x" /> 是 <Math tex="a" /> 的<strong>平方根</strong>。</p>
                    <p className="mt-0.5">其中 <Math tex="\sqrt{a}" />（根号 <Math tex="a" />）表示 <Math tex="a" /> 的<strong>算术平方根</strong>，即非负的那个平方根。</p>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="grid grid-cols-[1fr_auto_1fr]">
                    <div className="px-3 py-0.5 space-y-0">
                      <p><strong>平方 = 自己乘自己</strong></p>
                      <p><Math tex="3^2 = 3 \times 3 = 9" /></p>
                      <p><Math tex="(-3)^2 = (-3)\times(-3) = 9" /></p>
                      <p><Math tex="0.1^2 = 0.1 \times 0.1 = 0.01" /></p>
                    </div>
                    <div className="w-px bg-gray-300"></div>
                    <div className="px-3 py-0.5 space-y-0">
                      <p><strong>平方根：已知平方，求原数</strong></p>
                      <p><Math tex="\sqrt{9} = 3" />，因为 <Math tex="3^2 = 9" /></p>
                      <p><Math tex="\sqrt{0} = 0" /></p>
                      <p><Math tex="\sqrt{2} \approx 1.414" />（无理数）</p>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">最重要的结论</div>
                  <div className="px-3 py-0.5">
                    <div className="grid grid-cols-3 gap-0 text-center">
                      <div className="border border-gray-300 px-2 py-0.5"><Math tex="\text{正数}^2 > 0" /></div>
                      <div className="border border-gray-300 px-2 py-0.5"><Math tex="\text{负数}^2 > 0" /></div>
                      <div className="border border-gray-300 px-2 py-0.5"><Math tex="0^2 = 0" /></div>
                    </div>
                    <p className="mt-0.5"><strong>任意实数平方都不可能小于 0</strong>。这就是为何遇到 <Math tex="x^2=-1" /> 时，实数解不出来，才引入 <Math tex="i" />，并规定 <Math tex="i^2=-1" /></p>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-0.5 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">括号陷阱：这个最容易错</div>
                  <div className="grid grid-cols-[1fr_auto_1fr]">
                    <div className="px-3 py-0.5 space-y-0">
                      <p><Math tex="(-3)^2 = (-3)\times(-3)=9" /></p>
                      <p>先把 <Math tex="-3" /> 当成整体</p>
                    </div>
                    <div className="w-px bg-gray-300"></div>
                    <div className="px-3 py-0.5 space-y-0">
                      <p><Math tex="-3^2 = -(3^2)=-9" /></p>
                      <p>先算幂，再加负号</p>
                    </div>
                  </div>
                  <div className="px-3 py-0.5 border-t border-gray-300 font-bold">口诀：有括号，整体平方；没括号，先算幂再带符号。</div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="grid grid-cols-[1fr_auto_1fr]">
                    <div className="px-3 py-0.5 space-y-0">
                      <p><strong>绝对值与模</strong></p>
                      <p><Math tex="|-3|=3" /> 是绝对值（取正）</p>
                      <p><Math tex="|3+4i|=5" /> 叫模（复数的大小）</p>
                    </div>
                    <div className="w-px bg-gray-300"></div>
                    <div className="px-3 py-0.5 space-y-0">
                      <p><strong>根号默认取正值</strong></p>
                      <p><Math tex="\sqrt{9} = 3" />，不是 <Math tex="\pm 3" /></p>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">常用平方数：顺手背熟</div>
                  <div className="grid grid-cols-4 gap-0 text-center">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((n) => (
                      <div key={n} className="border border-gray-300 px-2 py-0.5">
                        <Math tex={`${n}^2=${n * n}`} />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">高频组合（算复数模时反复遇到）</div>
                  <div className="px-3 py-0.5 grid grid-cols-2 gap-x-4 gap-y-0.5">
                    <p><Math tex="3^2 + 4^2 = 25" />，<Math tex="\sqrt{25} = 5" /></p>
                    <p><Math tex="5^2 + 12^2 = 169" />，<Math tex="\sqrt{169} = 13" /></p>
                    <p><Math tex="1^2 + 1^2 = 2" />，<Math tex="\sqrt{2} \approx 1.414" /></p>
                    <p><Math tex="1^2 + 2^2 = 5" />，<Math tex="\sqrt{5} \approx 2.236" /></p>
                  </div>
                </div>

                <PracticeCard title="" questions={prereqPractice2} explanations={prereqExplanations} hideBlankLine columns={2}
                  renderItem={(q, idx) => (
                    <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                      <span className="text-green-600 mr-2 font-medium">{idx + 1}.</span>
                      {q.questionLatex && <Math tex={q.questionLatex} />}
                    </p>
                  )}
                />

              </div>
            </Collapsible>
          </section>

          {/* ═══════════════════════════════════════════════════════ */}
          {/* Section 4: 分数运算 */}
          {/* ═══════════════════════════════════════════════════════ */}
          <section id="prereq-fraction" className="mb-0 scroll-mt-4">
            <Collapsible title="四、分数运算" defaultOpen storageKey="prereq:fraction" headerExtra={<SpeakButton text={prereqNarrations.fraction} />}>
              <div className="space-y-0 text-[0.9rem] text-gray-800">

                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">基本概念</div>
                  <div className="px-3 py-0.5">
                    <p>分数 <Math tex="\dfrac{\text{分子}}{\text{分母}}" /> 表示把整体平均分成<strong>分母份</strong>，取其中<strong>分子份</strong>。</p>
                    <p className="mt-0.5"><strong>分式的特性：</strong>分子、分母同乘或同除以同一个<strong>非零数</strong>，分数值不变：<Math tex="\dfrac{a}{b} = \dfrac{a \times k}{b \times k} = \dfrac{a \div k}{b \div k} \quad (k \neq 0)" /></p>
                    <p className="mt-0.5"><strong>约分：</strong>找到分子和分母的公因数，同时除掉，化为<strong>最简分数</strong>（分母不能为 0）。</p>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="grid grid-cols-[1fr_auto_1fr]">
                    <div className="px-3 py-0.5 space-y-0">
                      <p><strong>加减法 同分母：</strong>分母不变，分子直接加减</p>
                      <p><Math tex="\dfrac{3}{7} + \dfrac{2}{7} = \dfrac{3+2}{7} = \dfrac{5}{7}" /></p>
                      <p className="border-t border-gray-200 pt-0.5"><strong>异分母：</strong>先通分，再加减</p>
                      <p><Math tex="\dfrac{2}{3} + \dfrac{3}{5}" />，通分得 <Math tex="\dfrac{10}{15} + \dfrac{9}{15} = \dfrac{19}{15}" /></p>
                      <p>结果需化为<strong>最简分数</strong></p>
                    </div>
                    <div className="w-px bg-gray-300"></div>
                    <div className="px-3 py-0.5 space-y-0">
                      <p><strong>乘除法 分数乘分数：</strong>分子相乘，分母相乘</p>
                      <p><Math tex="\dfrac{2}{3} \times \dfrac{3}{5} = \dfrac{6}{15} = \dfrac{2}{5}" /></p>
                      <p className="border-t border-gray-200 pt-0.5"><strong>除以分数：</strong>乘以该分数的倒数</p>
                      <p><Math tex="2 \div \dfrac{3}{4} = 2 \times \dfrac{4}{3} = \dfrac{8}{3}" /></p>
                      <p><strong>复数中的例子：</strong><Math tex="\dfrac{4-2i}{2} = 2-i" /></p>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">通分怎么做</div>
                  <div className="grid grid-cols-[1fr_auto_1fr]">
                    <div className="px-3 py-0.5 space-y-0">
                      <p><strong>目标：</strong>异分母变同分母，才能加减</p>
                      <p><strong>方法：</strong>分母相乘得公分母，分子交叉乘</p>
                      <p className="mt-0.5"><strong>⚠️ 不能直接加分子：</strong></p>
                      <p><Math tex="\dfrac{1}{2} + \dfrac{1}{3} \neq \dfrac{2}{5}" /></p>
                    </div>
                    <div className="w-px bg-gray-300"></div>
                    <div className="px-3 py-0.5 space-y-0 divide-y divide-gray-200">
                      <p className="py-0.5"><strong>例：</strong><Math tex="\dfrac{1}{2} + \dfrac{1}{3}" />，公分母 <Math tex="2 \times 3 = 6" /></p>
                      <p className="py-0.5"><Math tex="\dfrac{1}{2} = \dfrac{1 \times 3}{2 \times 3} = \dfrac{3}{6}" />，<Math tex="\dfrac{1}{3} = \dfrac{1 \times 2}{3 \times 2} = \dfrac{2}{6}" /></p>
                      <p className="py-0.5">所以 <Math tex="\dfrac{3}{6} + \dfrac{2}{6} = \dfrac{5}{6}" /></p>
                    </div>
                  </div>
                </div>

                <PracticeCard title="" questions={prereqPractice4} explanations={prereqExplanations} hideBlankLine columns={2}
                  renderItem={(q, idx) => (
                    <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                      <span className="text-green-600 mr-2 font-medium">{idx + 1}.</span>
                      {q.questionLatex && <Math tex={q.questionLatex} />}
                    </p>
                  )}
                />

              </div>
            </Collapsible>
          </section>

          {/* ═══════════════════════════════════════════════════════ */}
          {/* Section 5: 多项式展开 */}
          {/* ═══════════════════════════════════════════════════════ */}
          <section id="prereq-poly" className="mb-0 scroll-mt-4">
            <Collapsible title="五、多项式展开（复数乘法的核心）" defaultOpen storageKey="prereq:polynomial" headerExtra={<SpeakButton text={prereqNarrations.polynomial} />}>
              <div className="space-y-0 text-[0.9rem] text-gray-800">

                <div className="border border-gray-400 rounded overflow-hidden">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-2 py-1 text-center">公式</th>
                        <th className="border border-gray-300 px-2 py-1 text-center">展开结果</th>
                        <th className="border border-gray-300 px-2 py-1 text-center">复数例子</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-2 py-1 font-bold text-center">分配律</td>
                        <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="a(b+c)=ab+ac" /></td>
                        <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="2(1+i)=2+2i" /></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-1 font-bold text-center">FOIL</td>
                        <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="(a+b)(c+d)=ac+ad+bc+bd" /></td>
                        <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="(2+i)(3-i)=7+i" /></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-1 font-bold text-center">完全平方</td>
                        <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="(a+b)^2=a^2+2ab+b^2" /></td>
                        <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="(1+i)^2=2i" /></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-1 font-bold text-center">平方差</td>
                        <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="(a+b)(a-b)=a^2-b^2" /></td>
                        <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="(1+i)(1-i)=2" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="grid grid-cols-[1fr_auto_1fr]">
                    <div className="px-3 py-0.5 space-y-0">
                      <p><strong>分配律</strong></p>
                      <p><Math tex="a(b+c) = ab + ac" /></p>
                      <p>例：<Math tex="3(x+2) = 3x + 6" /></p>
                      <p>例：<Math tex="2(1+i) = 2 + 2i" /></p>
                      <p className="border-t border-gray-200 pt-0.5"><strong>FOIL（两括号相乘）</strong></p>
                      <p>口诀：首首 + 首尾 + 尾首 + 尾尾</p>
                      <p><Math tex="(2+3)(4+5) = 8+10+12+15 = 45" /></p>
                      <p><Math tex="(2+i)(3-i) = 6-2i+3i-i^2 = 7+i" /></p>
                    </div>
                    <div className="w-px bg-gray-300"></div>
                    <div className="px-3 py-0.5 space-y-0">
                      <p><strong>完全平方公式</strong></p>
                      <p><Math tex="(a+b)^2 = a^2 + 2ab + b^2" /></p>
                      <p><Math tex="(a-b)^2 = a^2 - 2ab + b^2" /></p>
                      <p>例：<Math tex="(1+i)^2 = 1 + 2i + i^2 = 2i" /></p>
                      <p className="border-t border-gray-200 pt-0.5"><strong>平方差公式：复数除法的关键</strong></p>
                      <p><Math tex="(a+b)(a-b) = a^2 - b^2" /></p>
                      <p><Math tex="(1+i)(1-i) = 1 - i^2 = 2" /></p>
                      <p><Math tex="(a+bi)(a-bi) = a^2 + b^2" />，总是正实数</p>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-3 py-0.5 space-y-0">
                    <p><strong>⚠️ ① 两个括号相乘不能只乘第一项：</strong><Math tex="(a+b)(c+d) \neq ac+bd" /></p>
                    <p className="pl-6"><strong>② 遇到 <Math tex="i^2" /> 一定要立刻替换成 <Math tex="-1" /></strong>，别漏了</p>
                    <p className="pl-6"><strong>③ 平方差结果没有虚部</strong>，一定是正实数</p>
                  </div>
                </div>

                <PracticeCard title="" questions={prereqPractice5} explanations={prereqExplanations} hideBlankLine columns={2}
                  renderItem={(q, idx) => (
                    <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                      <span className="text-green-600 mr-2 font-medium">{idx + 1}.</span>
                      {q.questionLatex && <Math tex={q.questionLatex} />}
                    </p>
                  )}
                />

              </div>
            </Collapsible>
          </section>

          {/* ═══════════════════════════════════════════════════════ */}
          {/* Section 6: 负数与 i 的幂次 */}
          {/* ═══════════════════════════════════════════════════════ */}
          <section id="prereq-negative" className="mb-0 scroll-mt-4">
            <Collapsible title="六、负数与 i 的幂次" defaultOpen storageKey="prereq:negative" headerExtra={<SpeakButton text={`${prereqNarrations.negative} ${prereqNarrations.remainder}`} />}>
              <div className="space-y-0 text-[0.9rem] text-gray-800">

                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="grid grid-cols-[1fr_auto_1fr]">
                    <div className="px-3 py-0.5 space-y-0">
                      <p><strong>负数核心规则</strong></p>
                      <p>减去负数 = 加正数：<Math tex="5-(-3)=8" /></p>
                      <p>同号得正，异号得负：<Math tex="(-4)\times(-3)=12" /></p>
                    </div>
                    <div className="w-px bg-gray-300"></div>
                    <div className="px-3 py-0.5 space-y-0">
                      <p><strong><Math tex="i^2=-1" /> 代入时的符号</strong></p>
                      <p><Math tex="2-i^2 = 2-(-1)=3" /></p>
                      <p><Math tex="3i^2 = 3\times(-1) = -3" /></p>
                      <p><Math tex="-2i^2 = -2\times(-1) = 2" /></p>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100"><Math tex="i" /> 的幂次：每 4 个一循环</div>
                  <div className="grid grid-cols-[1fr_auto_1fr]">
                    <div className="px-3 py-0.5">
                      <div className="grid grid-cols-4 gap-1 text-center">
                        <div className="border border-gray-300 rounded px-1 py-0.5"><Math tex="i^1=i" /><div className="text-gray-700">余1</div></div>
                        <div className="border border-gray-300 rounded px-1 py-0.5"><Math tex="i^2=-1" /><div className="text-gray-700">余2</div></div>
                        <div className="border border-gray-300 rounded px-1 py-0.5"><Math tex="i^3=-i" /><div className="text-gray-700">余3</div></div>
                        <div className="border border-gray-300 rounded px-1 py-0.5"><Math tex="i^4=1" /><div className="text-gray-700">余0</div></div>
                      </div>
                    </div>
                    <div className="w-px bg-gray-300"></div>
                    <div className="px-3 py-0.5 space-y-0">
                      <p><strong>除以 4 看余数</strong></p>
                      <p><Math tex="17\div4" /> 余 1，所以 <Math tex="i^{17}=i" /></p>
                      <p><Math tex="22\div4" /> 余 2，所以 <Math tex="i^{22}=-1" /></p>
                      <p><Math tex="100\div4" /> 余 0，所以 <Math tex="i^{100}=1" /></p>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-3 py-0.5 space-y-0">
                    <p><strong>⚠️ ① 余 0 对应 <Math tex="i^4 = 1" /></strong>，不是 <Math tex="i^0" /></p>
                    <p className="pl-6"><strong>② <Math tex="i^2" /> 代入时先写括号：</strong><Math tex="2-i^2 = 2-(-1) = 3" />，别写成 <Math tex="2-1=1" /></p>
                    <p className="pl-6"><strong>③ 大数先看最后两位再除以 4</strong>，别硬算</p>
                  </div>
                </div>

                <PracticeCard title="" questions={prereqPractice6} explanations={prereqExplanations} hideBlankLine columns={2}
                  renderItem={(q, idx) => (
                    <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                      <span className="text-green-600 mr-2 font-medium">{idx + 1}.</span>
                      {q.questionLatex && <Math tex={q.questionLatex} />}
                    </p>
                  )}
                />

              </div>
            </Collapsible>
          </section>

          {/* 打印模式答案区 */}
          {isPrinting && printOptions.showAnswers && <PrereqAnswers />}

        </div>
      </LessonLayout>
    </div>
  );
}
