import { Math, Collapsible, SpeakButton, QuizPanel, PageHeader, LessonLayout, ExportButton, PracticeCard, PrintQuestions, PageBreak } from '@/components/shared';
import { derivPrereqNarrations } from './data/3.3.5/3.3.5-deriv-prereq-narrations';
import { derivPrereqProgressItems } from './data/3.3.5/3.3.5-deriv-prereq-progress';
import { derivPrereqPractice1, derivPrereqPractice2, derivPrereqPractice3, derivPrereqPractice4a } from './data/3.3.5/3.3.5-deriv-prereq-practice';
import { derivPrereqQuizQuestions } from './data/3.3.5/3.3.5-deriv-prereq-quiz';
import { useProgress, usePrintMode } from '@/hooks';
import { DerivativePrereqAnswers, derivativePrereqExplanations } from './3.3.5-deriv-prereq-answers';

export function DerivativePrereqPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('deriv-prereq', derivPrereqProgressItems);
  const { isPrinting, printOptions } = usePrintMode();

  return (
    <div>
      <PageHeader
        stage="前置准备"
        variant="prereq"
        title="3.3.5 导数前置知识"
        narration={derivPrereqNarrations.intro}
        tags={[]}
      />

      <LessonLayout
        progressItems={progressItems}
        onToggle={toggleProgress}
        sidebarTop={<ExportButton title="3.3.5 导数前置知识" />}
      >
        <div className="[&_.rounded-xl]:mb-0 [&_.rounded-xl>.flex.items-center]:py-1 [&_.rounded-xl>div:last-child]:px-0 [&_.rounded-xl>div:last-child]:pt-0 [&_.rounded-xl>div:last-child]:pb-0">

          {/* ═══════════════════════════════════════════════════════ */}
          {/* Section 1: 函数值的代入与化简 */}
          {/* ═══════════════════════════════════════════════════════ */}
          <section id="dp-substitute" className="mb-0 scroll-mt-4">
            <Collapsible title="一、函数值的代入与化简" defaultOpen storageKey="deriv-prereq:substitute" headerExtra={<SpeakButton text={derivPrereqNarrations.substitute} />}>
              <div className="space-y-0 text-[0.9rem] text-gray-800">

                {/* ── 引入：这节到底在练什么 ── */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">一眼看清目标：化简 <Math tex="\dfrac{f(x+\Delta x)-f(x)}{\Delta x}" /></div>
                  <div className="grid grid-cols-[1fr_auto_1fr]">
                    <div className="px-3 py-1.5 space-y-1">
                      <p>导数的定义长这样（先认个脸，下节再讲）：</p>
                      <div className="text-lg [&_.katex-display]:!my-1"><Math tex="f'(x)=\lim_{\Delta x\to 0}\dfrac{f(x+\Delta x)-f(x)}{\Delta x}" display /></div>
                      <p>如果直接把 <Math tex="\Delta x=0" /> 代进分母，就是 <Math tex="\dfrac{0}{0}" />，算不出来。</p>
                      <p>所以必须先把分子<strong>化简</strong>成 <Math tex="\Delta x\cdot(\cdots)" /> 的形式，把分子的 <Math tex="\Delta x" /> 和分母的 <Math tex="\Delta x" /> 约掉。</p>
                    </div>
                    <div className="w-px bg-gray-300"></div>
                    <div className="px-3 py-1.5 space-y-1">
                      <p><strong>这一节只做一件事</strong>：不讲极限，不讲导数，只练</p>
                      <div className="rounded p-1.5 border border-gray-300 bg-gray-50 text-center">
                        把 <Math tex="f(x+\Delta x)-f(x)" /> 化成 <Math tex="\Delta x\cdot(\text{某表达式})" />
                      </div>
                      <p>高中最常遇到的三种类型：</p>
                      <p><strong>① 多项式</strong>：展开消同类项，提 <Math tex="\Delta x" /></p>
                      <p><strong>② 分式</strong>：通分，让分子自然出现 <Math tex="\Delta x" /></p>
                      <p><strong>③ 根式</strong>：分子有理化，让分子变成 <Math tex="\Delta x" /></p>
                    </div>
                  </div>
                </div>

                {/* ── 基础：正确代入（左右两张独立小卡） ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="grid grid-cols-[1fr_1fr] font-bold text-gray-800 border-b border-gray-400 bg-gray-100">
                    <div className="px-2 py-1 border-r border-gray-400">基础：把 <Math tex="x+\Delta x" /> 当整体代入</div>
                    <div className="px-2 py-1">以 <Math tex="f(x)=x^2" /> 为例，下面哪种写法对？</div>
                  </div>
                  <div className="grid grid-cols-[1fr_1fr]">
                    <div className="px-3 py-1.5 space-y-1 border-r border-gray-300">
                      <p>看到 <Math tex="f(x+\Delta x)" />，把整个 <Math tex="x+\Delta x" /> 当成一团东西，</p>
                      <p>塞到 <Math tex="f" /> 的每一个 <Math tex="x" /> 所在的位置。</p>
                      <p className="border-t border-gray-200 pt-1">例如 <Math tex="f(x)=x^2+3x" />：</p>
                      <p><Math tex="f(x+\Delta x)=(x+\Delta x)^2+3(x+\Delta x)" /></p>
                      <p>每一处 <Math tex="x" /> 都要替换，<strong>一个都不能漏</strong>。</p>
                    </div>
                    <div className="px-3 py-1.5 space-y-1">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-2 py-1 text-center">写法</th>
                            <th className="border border-gray-300 px-2 py-1 text-center">对错</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td className="border border-gray-300 px-2 py-1 text-center"><Math tex="f(x+\Delta x)=x^2+\Delta x" /></td><td className="border border-gray-300 px-2 py-1 text-center text-red-600 font-bold">错</td></tr>
                          <tr><td className="border border-gray-300 px-2 py-1 text-center"><Math tex="f(x+\Delta x)=f(x)+\Delta x" /></td><td className="border border-gray-300 px-2 py-1 text-center text-red-600 font-bold">错</td></tr>
                          <tr><td className="border border-gray-300 px-2 py-1 text-center"><Math tex="f(x+\Delta x)=(x+\Delta x)^2" /></td><td className="border border-gray-300 px-2 py-1 text-center text-green-700 font-bold">对</td></tr>
                        </tbody>
                      </table>
                      <p>口诀：<strong>看到括号，整体代入。</strong></p>
                    </div>
                  </div>
                </div>

                {/* ── 多项式型：主例 + 再做一个（双标题栏）+ 规律 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">类型一 · 多项式：展开 <Math tex="\rightarrow" /> 消同类项 <Math tex="\rightarrow" /> 提 <Math tex="\Delta x" /></div>
                  <div className="grid grid-cols-[1fr_1fr] font-bold text-gray-800 border-b border-gray-400 bg-gray-100">
                    <div className="px-2 py-1 border-r border-gray-400">设 <Math tex="f(x)=x^2" />，把 <Math tex="f(x+\Delta x)-f(x)" /> 化成 <Math tex="\Delta x\cdot(\quad\ )" /></div>
                    <div className="px-2 py-1">设 <Math tex="f(x)=x^3" />，把 <Math tex="f(x+\Delta x)-f(x)" /> 化成 <Math tex="\Delta x\cdot(\quad\ )" /></div>
                  </div>
                  <div className="grid grid-cols-[1fr_1fr]">
                    <div className="p-2 space-y-1 border-r border-gray-300">
                      <p>第一步，代入：<Math tex="f(x+\Delta x)=(x+\Delta x)^2" /></p>
                      <p>第二步，展开：<Math tex="(x+\Delta x)^2=x^2+2x\Delta x+(\Delta x)^2" /></p>
                      <p>第三步，作差：<Math tex="f(x+\Delta x)-f(x)=2x\Delta x+(\Delta x)^2" /></p>
                      <p className="text-red-700"><strong>注意：</strong>这里的 <Math tex="x^2" /> 是被<strong>减去的 <Math tex="f(x)=x^2" /></strong>抵消掉的。</p>
                      <p>第四步，提公因式：</p>
                      <p><Math tex="f(x+\Delta x)-f(x)=\Delta x\,(2x+\Delta x)" /></p>
                      <p>目标达成：分子化成了 <Math tex="\Delta x\cdot(\cdots)" />。</p>
                    </div>
                    <div className="p-2 space-y-1">
                      <p><Math tex="f(x+\Delta x)=(x+\Delta x)^3" /></p>
                      <p>用公式 <Math tex="(a+b)^3=a^3+3a^2b+3ab^2+b^3" />：</p>
                      <p><Math tex="=x^3+3x^2\Delta x+3x(\Delta x)^2+(\Delta x)^3" /></p>
                      <p>作差，<Math tex="x^3" /> 消掉：</p>
                      <p><Math tex="f(x+\Delta x)-f(x)=3x^2\Delta x+3x(\Delta x)^2+(\Delta x)^3" /></p>
                      <p>提 <Math tex="\Delta x" />：</p>
                      <p><Math tex="=\Delta x\bigl(3x^2+3x\Delta x+(\Delta x)^2\bigr)" /></p>
                    </div>
                  </div>
                  <div className="px-3 py-1 border-t border-gray-400 bg-gray-50">
                    <p><strong>规律：</strong>多项式作差后，<strong>不含 <Math tex="\Delta x" /> 的项一定互相消掉</strong>，剩下的每一项都带 <Math tex="\Delta x" />。</p>
                  </div>
                </div>

                {/* ── 分式型 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">类型二 · 分式：通分，让分子自然出现 <Math tex="\Delta x" /></div>
                  <div className="grid grid-cols-[9fr_16fr]">
                    <div className="p-2 space-y-1 border-r border-gray-300">
                      <p><strong>方法：</strong>当 <Math tex="f(x)" /> 为分式，且 <Math tex="x" /> 在分母</p>
                      <p>例如 <Math tex="f(x)=\dfrac{1}{x}" />，<Math tex="f(x)=\dfrac{2}{x+1}" /></p>
                      <hr className="border-gray-300" />
                      <p>作差后直接通分。</p>
                      <p>异分母：<Math tex="\dfrac{1}{A}-\dfrac{1}{B}=\dfrac{B-A}{AB}" /></p>
                      <p>分子是 <Math tex="B-A" />，而 <Math tex="A" /> 和 <Math tex="B" /> 只差一个 <Math tex="\Delta x" />，</p>
                      <p>所以 <strong>分子必然带 <Math tex="\Delta x" /></strong>。</p>
                    </div>
                    <div className="p-2 space-y-1">
                      <p className="font-bold">📝 设 <Math tex="f(x)=\dfrac{1}{x}" />，把 <Math tex="f(x+\Delta x)-f(x)" /> 化简</p>
                      <hr className="border-gray-300" />
                      <p>代入：<Math tex="f(x+\Delta x)=\dfrac{1}{x+\Delta x}" /></p>
                      <p>作差并通分（公分母 <Math tex="x(x+\Delta x)" />）：</p>
                      <p><Math tex="f(x+\Delta x)-f(x)=\dfrac{1}{x+\Delta x}-\dfrac{1}{x}=\dfrac{x-(x+\Delta x)}{x(x+\Delta x)}=\dfrac{-\Delta x}{x(x+\Delta x)}" /></p>
                      <p>分子出现 <Math tex="-\Delta x" />，目标达成。</p>
                    </div>
                  </div>
                </div>

                {/* ── 即时练习（多项式/分式，页底）── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="" questions={derivPrereqPractice1.slice(0, 3)} explanations={derivativePrereqExplanations} hideBlankLine optionCols={2} printOptionCols={2}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivPrereqPractice1.slice(0, 3)} printOptionCols={2} />
                </div>

                <PageBreak />
                {/* ── 根式型 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">类型三 · 根式：分子有理化，让分子变成 <Math tex="\Delta x" /></div>
                  <div className="p-2 space-y-1 border-b border-gray-300">
                    <p><strong>方法：</strong>遇到两个根式之差 <Math tex="\sqrt{A}-\sqrt{B}" />，乘<strong>共轭</strong> <Math tex="\sqrt{A}+\sqrt{B}" />（上下都乘，保持相等）：</p>
                    <div className="text-sm [&_.katex-display]:!my-1"><Math tex="\sqrt{A}-\sqrt{B}=\dfrac{(\sqrt{A}-\sqrt{B})(\sqrt{A}+\sqrt{B})}{\sqrt{A}+\sqrt{B}}=\dfrac{A-B}{\sqrt{A}+\sqrt{B}}" display /></div>
                    <p>根号没了，分子变成 <Math tex="A-B" />，一般就会出现 <Math tex="\Delta x" />。</p>
                  </div>
                  <div className="p-2 space-y-1">
                    <p className="font-bold">📝 设 <Math tex="f(x)=\sqrt{x}" />，把 <Math tex="f(x+\Delta x)-f(x)" /> 化简</p>
                    <hr className="border-gray-300" />
                    <p>代入并作差：<Math tex="f(x+\Delta x)-f(x)=\sqrt{x+\Delta x}-\sqrt{x}" /></p>
                    <hr className="border-gray-300" />
                    <p>乘共轭 <Math tex="\sqrt{x+\Delta x}+\sqrt{x}" />，得 <Math tex="\dfrac{(\sqrt{x+\Delta x}-\sqrt{x})(\sqrt{x+\Delta x}+\sqrt{x})}{\sqrt{x+\Delta x}+\sqrt{x}}=\dfrac{(x+\Delta x)-x}{\sqrt{x+\Delta x}+\sqrt{x}}=\dfrac{\Delta x}{\sqrt{x+\Delta x}+\sqrt{x}}" />，分子为 <Math tex="\Delta x" />。</p>
                  </div>
                </div>

                {/* ── 三型对照速查表 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">三型对照速查表</div>
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-2 py-0 text-center">函数类型</th>
                        <th className="border border-gray-300 px-2 py-0 text-center">关键技巧</th>
                        <th className="border border-gray-300 px-2 py-0 text-center">化简后分子形式</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0 text-center font-bold">多项式 <Math tex="x^n" /></td>
                        <td className="border border-gray-300 px-2 py-0 text-center">展开消同类项 <Math tex="\rightarrow" /> 提 <Math tex="\Delta x" /></td>
                        <td className="border border-gray-300 px-2 py-0 text-center"><Math tex="\Delta x\cdot(\cdots)" /></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0 text-center font-bold">分式 <Math tex="\dfrac{1}{g(x)}" /></td>
                        <td className="border border-gray-300 px-2 py-0 text-center">通分作差</td>
                        <td className="border border-gray-300 px-2 py-0 text-center"><Math tex="\dfrac{\pm\Delta x}{(\cdots)}" /></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0 text-center font-bold">根式 <Math tex="\sqrt{g(x)}" /></td>
                        <td className="border border-gray-300 px-2 py-0 text-center">分子有理化（乘共轭）</td>
                        <td className="border border-gray-300 px-2 py-0 text-center"><Math tex="\dfrac{\Delta x}{(\cdots)}" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>


                {/* ── 即时练习（分式/根式/综合）── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="" questions={derivPrereqPractice1.slice(3)} explanations={derivativePrereqExplanations} hideBlankLine optionCols={2} printOptionCols={2}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 4}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivPrereqPractice1.slice(3)} printOptionCols={2}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200">
                        <span className="text-gray-800 mr-2 font-medium">{idx + 4}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>

              </div>
            </Collapsible>
          </section>

          {/* ═══════════════════════════════════════════════════════ */}
          {/* Section 2: 直线斜率与点斜式 */}
          {/* ═══════════════════════════════════════════════════════ */}
          <section id="dp-slope" className="mb-0 scroll-mt-4">
            <Collapsible title="二、直线斜率与点斜式" defaultOpen storageKey="deriv-prereq:slope" headerExtra={<SpeakButton text={derivPrereqNarrations.slope} />}>
              <div className="space-y-0 text-[0.9rem] text-gray-800">

                {/* ── 引入：为什么导数前要讲这个 ── */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">为什么导数前要讲这个：导数的两个核心用途，都离不开直线</div>
                  <div className="px-3 py-1.5 space-y-1">
                    <p className="pl-4">① 导数 <Math tex="f'(x_0)" /> = <strong>切线的斜率</strong> —— 先得会算斜率。</p>
                    <p className="pl-4">② 写<strong>切线方程</strong> —— 要用点斜式。</p>
                  </div>
                </div>

                {/* ── 斜率公式 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">① 斜率公式：用两点算陡峭程度</div>
                  <div className="grid grid-cols-[3fr_2fr]">
                    <div className="p-2 space-y-1 border-r border-gray-300">
                      <p>已知直线上两点 <Math tex="(x_1, y_1)" /> 和 <Math tex="(x_2, y_2)" />：</p>
                      <div className="text-base [&_.katex-display]:!my-1"><Math tex="k=\dfrac{\Delta y}{\Delta x}=\dfrac{y_2-y_1}{x_2-x_1}" display /></div>
                      <hr className="border-gray-300" />
                      <p><strong>几何意义：</strong><Math tex="x" /> 每增加 1，<Math tex="y" /> 变化 <Math tex="k" />。</p>
                      <p><Math tex="k>0" />：上升；<Math tex="k<0" />：下降；<Math tex="k=0" />：水平。</p>
                    </div>
                    <div className="p-2 space-y-1">
                      <p className="font-bold">📝 过 <Math tex="(1,2)" />、<Math tex="(4,11)" /> 两点，求斜率</p>
                      <hr className="border-gray-300" />
                      <p>套公式：</p>
                      <p><Math tex="k=\dfrac{11-2}{4-1}=\dfrac{9}{3}=3" /></p>
                      <p>即 <Math tex="x" /> 每加 1，<Math tex="y" /> 加 3。</p>
                    </div>
                  </div>
                </div>

                {/* ── 点斜式 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">② 点斜式：已知一点和斜率，写直线方程</div>
                  <div className="grid grid-cols-[3fr_2fr]">
                    <div className="p-2 space-y-1 border-r border-gray-300">
                      <p>已知直线过点 <Math tex="(x_1, y_1)" />，斜率为 <Math tex="k" />：</p>
                      <div className="text-base [&_.katex-display]:!my-1"><Math tex="y-y_1=k(x-x_1)" display /></div>
                      <hr className="border-gray-300" />
                      <p><strong>适用：</strong>只知道<strong>一个点 + 一个斜率</strong>，就能写出方程。</p>
                      <p>导数里求切线方程正是这种情况：切点已知，斜率 = 导数值。</p>
                    </div>
                    <div className="p-2 space-y-1">
                      <p className="font-bold">📝 过 <Math tex="(2,5)" />，斜率 <Math tex="k=3" />，写方程</p>
                      <hr className="border-gray-300" />
                      <p>直接套公式：<Math tex="y-5=3(x-2)" /></p>
                      <p>整理得 <Math tex="y=3x-1" />。</p>
                    </div>
                  </div>
                </div>

                {/* ── 导数里怎么用 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">③ 导数里怎么用：切线方程的模板</div>
                  <div className="px-3 py-1.5 space-y-1">
                    <p>要写曲线 <Math tex="y=f(x)" /> 在点 <Math tex="x_1" /> 处的切线方程，固定三步：</p>
                    <p className="pl-4">第一步，算切点：<Math tex="(x_1,\ f(x_1))" /></p>
                    <p className="pl-4">第二步，算斜率：<Math tex="k=f'(x_1)" />（下一节学）</p>
                    <p className="pl-4">第三步，套点斜式：</p>
                    <div className="text-base [&_.katex-display]:!my-1 pl-4"><Math tex="y-f(x_1)=f'(x_1)\,(x-x_1)" display /></div>
                    <p className="text-gray-700">后面凡是"求切线方程"，都是这个模板，只差把 <Math tex="f'(x_1)" /> 算出来。</p>
                  </div>
                </div>

                {/* ── 即时练习 ── */}
                <div className="text-base print:hidden">
                  <PracticeCard title="" questions={derivPrereqPractice2} explanations={derivativePrereqExplanations} hideBlankLine optionCols={2} printOptionCols={2}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={derivPrereqPractice2} printOptionCols={2} />
                </div>

              </div>
            </Collapsible>
          </section>

          {/* ═══════════════════════════════════════════════════════ */}
          {/* Section 3: 平均变化率（割线斜率） */}
          {/* ═══════════════════════════════════════════════════════ */}
          <section id="dp-avg-rate" className="mb-0 scroll-mt-4">
            <Collapsible title="三、平均变化率（割线斜率）" defaultOpen storageKey="deriv-prereq:avg-rate" headerExtra={<SpeakButton text={derivPrereqNarrations.avgRate} />}>
              <div className="space-y-0 text-[0.9rem] text-gray-800">

                {/* ── 引入 ── */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">为什么学这个：导数是"瞬时变化率"，先得会算"平均变化率"</div>
                  <div className="px-3 py-1.5 space-y-1">
                    <p className="pl-4">① 几何上：平均变化率 = <strong>割线斜率</strong>（用第二节的 <Math tex="k" /> 公式）</p>
                    <p className="pl-4">② 让 <Math tex="\Delta x" /> 变得无限小（接近 0），割线变切线，就得到<strong>导数</strong>（第四节讲）</p>
                    <p>而且，平均变化率的表达式<strong>正是第一节练的那个化简式子</strong>。三节内容在这里汇合。</p>
                  </div>
                </div>

                {/* ── 增量 Δx 和 Δy ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px text-[0.92rem]">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">① 增量 <Math tex="\Delta x" /> 和 <Math tex="\Delta y" />：先把两个记号认清</div>
                  <div className="grid grid-cols-[3fr_2fr]">
                    <div className="p-2 space-y-1 border-r border-gray-300">
                      <p><Math tex="\Delta" />（delta）就是"<strong>变化量</strong>"的意思。</p>
                      <p><Math tex="\Delta x = x_2 - x_1" />（自变量的变化，横坐标变化）</p>
                      <p><Math tex="\Delta y = f(x_2) - f(x_1)" />（函数值的变化，纵坐标变化）</p>
                      <hr className="border-gray-300" />
                      <p><strong>注意：</strong><Math tex="\Delta x" /> 是一个<strong>整体记号</strong>，不是 <Math tex="\Delta" /> 乘 <Math tex="x" />。它可以是正、负或很小的数。</p>
                    </div>
                    <div className="p-2 space-y-1">
                      <p className="font-bold">📝 <Math tex="f(x)=x^2" />，从 <Math tex="x=1" /> 到 <Math tex="x=3" /></p>
                      <hr className="border-gray-300" />
                      <p><Math tex="\Delta x=3-1=2" /></p>
                      <p><Math tex="\Delta y=f(3)-f(1)=9-1=8" /></p>
                      <p className="text-gray-700">横坐标变化 2，纵坐标变化 8。</p>
                    </div>
                  </div>
                </div>

                {/* ── 平均变化率公式 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">② 平均变化率公式：就是割线斜率</div>
                  <div className="px-3 py-1.5 space-y-1">
                    <p>函数 <Math tex="y=f(x)" /> 从 <Math tex="x_1" /> 到 <Math tex="x_2" /> 的<strong>平均变化率</strong>：<span className="block text-center mt-1"><Math tex="\bar{v}=\dfrac{\Delta y}{\Delta x}=\dfrac{f(x_2)-f(x_1)}{x_2-x_1}" /></span></p>
                    <hr className="border-gray-300" />
                    <p><strong>几何意义：</strong>过曲线上 <Math tex="(x_1, f(x_1))" /> 和 <Math tex="(x_2, f(x_2))" /> 两点的<strong>割线斜率</strong>。</p>
                    <p className="text-gray-700">和第二节的斜率公式 <Math tex="k=\dfrac{y_2-y_1}{x_2-x_1}" /> 完全一样，只是这里两点都在曲线上。</p>
                  </div>
                </div>

                {/* ── 换个写法（承接第一节）── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">③ 换个写法：把 <Math tex="x_2" /> 换成 <Math tex="x_1+\Delta x" /></div>
                  <div className="px-3 py-1.5 space-y-1">
                    <p>如果只给起点 <Math tex="x_1" /> 和增量 <Math tex="\Delta x" />，那么终点就是 <Math tex="x_2 = x_1+\Delta x" />。代进上面公式：</p>
                    <div className="text-base [&_.katex-display]:!my-1"><Math tex="\bar{v}=\dfrac{f(x_1+\Delta x)-f(x_1)}{(x_1+\Delta x)-x_1}=\dfrac{f(x_1+\Delta x)-f(x_1)}{\Delta x}" display /></div>
                    <hr className="border-gray-300" />
                    <p><strong>为什么要换？</strong>后面学导数时要让"区间塌缩到一个点"，也就是让 <Math tex="\Delta x" /> 变得无限小（接近 0）。</p>
                    <p>用这种写法时，<Math tex="\Delta x" /> 是一个独立的变量，可以直接说"让它变小"，操作起来自然。</p>
                    <hr className="border-gray-300" />
                    <p className="text-red-700"><strong>⚡ 顿悟点：</strong>这里的<strong>分子</strong>就是<strong>第一节</strong>反复练的那一串！</p>
                  </div>
                </div>

                {/* ── 物理理解 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px text-[0.95rem]">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">④ 物理理解：就是平均速度</div>
                  <div className="grid grid-cols-[3fr_2fr]">
                    <div className="p-2 space-y-1 border-r border-gray-300">
                      <p>物体做直线运动，路程 <Math tex="s" /> 是时间 <Math tex="t" /> 的函数 <Math tex="s=s(t)" />。</p>
                      <p><strong>平均速度</strong> <Math tex="\bar{v}=\dfrac{\Delta s}{\Delta t}=\dfrac{s(t_2)-s(t_1)}{t_2-t_1}" /></p>
                      <hr className="border-gray-300" />
                      <p>平均变化率不只适用于路程对时间，适用于任何变量对任何变量。</p>
                    </div>
                    <div className="p-2 space-y-1">
                      <p className="font-bold">📝 <Math tex="s(t)=t^2" />，<Math tex="t=1" /> 到 <Math tex="t=3" /></p>
                      <hr className="border-gray-300" />
                      <p><Math tex="\bar{v}=\dfrac{s(3)-s(1)}{3-1}=\dfrac{9-1}{2}=4" /></p>
                      <p>即这段时间内平均每秒前进 4 单位。</p>
                    </div>
                  </div>
                </div>

                {/* ── 即时练习 ── */}
                <div className="text-[1rem] print:hidden">
                  <PracticeCard title="" questions={derivPrereqPractice3} explanations={derivativePrereqExplanations} hideBlankLine optionCols={2} printOptionCols={2}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-[1rem] hidden print:block">
                  <PrintQuestions questions={derivPrereqPractice3} printOptionCols={2} />
                </div>

              </div>
            </Collapsible>
          </section>

          {/* ═══════════════════════════════════════════════════════ */}
          {/* Section 4: 极限直觉与瞬时变化率 */}
          {/* ═══════════════════════════════════════════════════════ */}
          <section id="dp-limit" className="mb-0 scroll-mt-4">
            <Collapsible title="四、极限直觉与瞬时变化率" defaultOpen storageKey="deriv-prereq:limit" headerExtra={<SpeakButton text={derivPrereqNarrations.limit} />}>
              <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

                {/* ── 引入：回答上一节的悬念 ── */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">为什么学这个：上一节说"让 <Math tex="\Delta x" /> 变得无限小"——到底啥意思？</div>
                  <div className="px-3 py-1.5 space-y-1">
                    <p className="pl-4">• 直接让 <Math tex="\Delta x = 0" />？<strong>只有在分母不含 <Math tex="\Delta x" /> 时才行</strong>——否则代进平均变化率就会得到 <Math tex="\tfrac{0}{0}" />，分母为 0 无意义。</p>
                    <p className="pl-4">• 那让 <Math tex="\Delta x = 0.001" /> 行吗？不行——这只是一段很短区间的平均值，换成 0.0001 又变一个数，始终是"平均"而不是"瞬时"。</p>
                    <p>这节用<strong>极限</strong>解决这个悖论，然后正式给出<strong>导数定义</strong>。</p>
                  </div>
                </div>

                {/* ── 无限接近的直觉 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="grid grid-cols-[3fr_2fr] font-bold text-gray-800 border-b border-gray-400 bg-gray-100">
                    <div className="px-2 py-1 border-r border-gray-400">① "无限接近但不等于"的直觉</div>
                    <div className="px-2 py-1">📝 观察 <Math tex="2+\Delta x" /></div>
                  </div>
                  <div className="grid grid-cols-[3fr_2fr]">
                    <div className="p-2 space-y-1 border-r border-gray-300">
                      <p>让 <Math tex="\Delta x" /> 依次取 <Math tex="0.1,\ 0.01,\ 0.001,\ 0.0001,\ \ldots" /></p>
                      <p>它<strong>越来越接近 0，但永远不等于 0</strong>。</p>
                      <hr className="border-gray-300" />
                      <p>观察某个关于 <Math tex="\Delta x" /> 的表达式（比如 <Math tex="2+\Delta x" />），如果 <Math tex="\Delta x" /> 越来越小，这个表达式会<strong>稳定趋向</strong>一个数（比如趋向 2）。</p>
                      <p>这个"稳定趋向的数"就叫<strong>极限</strong>。</p>
                    </div>
                    <div className="px-2 pt-0 pb-2 space-y-1">
                      <table className="w-full text-center border border-gray-300 leading-tight">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="border border-gray-300 px-1 py-0"><Math tex="\Delta x" /></th>
                            <th className="border border-gray-300 px-1 py-0"><Math tex="2+\Delta x" /></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td className="border border-gray-300 px-1 py-0">0.1</td><td className="border border-gray-300 px-1 py-0">2.1</td></tr>
                          <tr><td className="border border-gray-300 px-1 py-0">0.01</td><td className="border border-gray-300 px-1 py-0">2.01</td></tr>
                          <tr><td className="border border-gray-300 px-1 py-0">0.001</td><td className="border border-gray-300 px-1 py-0">2.001</td></tr>
                          <tr><td className="border border-gray-300 px-1 py-0">0.0001</td><td className="border border-gray-300 px-1 py-0">2.0001</td></tr>
                        </tbody>
                      </table>
                      <p className="text-gray-700">结果越来越接近 <strong>2</strong>。</p>
                    </div>
                  </div>
                </div>

                {/* ── 极限记号 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">② 极限的记号 <Math tex="\lim" />（<em>limit</em> 的缩写，下标写变量怎么变）</div>
                  <div className="px-3 py-1.5 space-y-1">
                    <p>用数学符号写"让 <Math tex="\Delta x" /> 无限接近 0 时，<Math tex="2+\Delta x" /> 趋向 2"：</p>
                    <div className="text-base [&_.katex-display]:!my-1"><Math tex="\lim_{\Delta x\to 0}(2+\Delta x)=2" display /></div>
                    <hr className="border-gray-300" />
                    <p><strong>读作：</strong>"当 <Math tex="\Delta x" /> 趋近于 0 时，<Math tex="2+\Delta x" /> 的极限等于 2"。<span className="font-bold text-gray-900 ml-2">⚠️ 核心规则：什么时候能"直接代 0"？</span></p>
                    <p className="pl-4">✅ <strong>可以直接代</strong>：如果表达式里<strong>没有分母</strong>（或分母不含 <Math tex="\Delta x" />），直接把 <Math tex="\Delta x" /> 换成 0 就是极限。</p>
                    <p className="pl-6 text-gray-700">例：<Math tex="\lim\limits_{\Delta x\to 0}(2+\Delta x)=2+0=2" />，<Math tex="\lim\limits_{\Delta x\to 0}(2x+\Delta x)=2x+0=2x" />。</p>
                    <p className="pl-4">❌ <strong>不能直接代</strong>：如果代 0 会得到 <Math tex="\tfrac{0}{0}" />（分母也为 0），必须<strong>先化简</strong>（约掉分母的 <Math tex="\Delta x" />）再代。</p>
                    <p className="pl-6 text-gray-700">例：<Math tex="\lim\limits_{\Delta x\to 0}\dfrac{\Delta x(2x+\Delta x)}{\Delta x}" /> 如果直接代 0 是 <Math tex="\dfrac{0}{0}" />；先约掉 <Math tex="\Delta x" /> 得 <Math tex="2x+\Delta x" />，再代 0 得 <Math tex="2x" />。</p>
                    <hr className="border-gray-300" />
                    <p className="font-bold text-gray-900">所以<strong>第一节反复练"把分子拆成 <Math tex="\Delta x\cdot(\cdots)" />"</strong>就是为这一步铺路——只有化简后分母的 <Math tex="\Delta x" /> 才能被约掉，才能代 0 算极限。</p>
                  </div>
                </div>

                {/* ── 瞬时变化率 = 导数 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px text-[0.95rem]">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">③ 瞬时变化率 = 导数（正式定义 🎯）</div>
                  <div className="px-3 py-1.5 space-y-1">
                    <p><strong>瞬时变化率</strong> = 让平均变化率里的 <Math tex="\Delta x" /> 趋于 0 得到的极限：</p>
                    <div className="text-base [&_.katex-display]:!my-1"><Math tex="f'(x_1)=\lim_{\Delta x\to 0}\dfrac{f(x_1+\Delta x)-f(x_1)}{\Delta x}" display /></div>
                    <hr className="border-gray-300" />
                    <p>这个极限值就叫做函数 <Math tex="f(x)" /> 在 <Math tex="x_1" /> 处的<strong>导数</strong>，记作 <Math tex="f'(x_1)" />（读作"f 撇 x<sub>1</sub>"）。</p>
                    <p className="text-gray-700">若题目写作 <Math tex="y=f(x)" />，也可简写成 <Math tex="y'" />（即 <Math tex="f'(x)" />）。新高考主要用 <Math tex="f'(x)" /> 和 <Math tex="y'" />。</p>
                  </div>
                </div>

                {/* ── 几何意义 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">④ 几何意义：割线变切线，斜率变导数</div>
                  <div className="px-3 py-1.5 space-y-1">
                    <p><strong>先认清两个点：</strong>曲线 <Math tex="y=f(x)" /> 上的点都是 <Math tex="(x,\,y)" />，而 <Math tex="y=f(x)" />，所以两个点是 <Math tex="(x_1,\,f(x_1))" /> 和 <Math tex="(x_1+\Delta x,\,f(x_1+\Delta x))" />。</p>
                    <p className="pl-4">• <strong>第三节</strong>：平均变化率 = 过 <Math tex="(x_1, f(x_1))" /> 和 <Math tex="(x_1+\Delta x, f(x_1+\Delta x))" /> 的<strong>割线斜率</strong></p>
                    <p className="pl-4">• <strong>让 <Math tex="\Delta x" /> 无限小</strong>：两个点无限靠近，割线逐渐"贴合"曲线</p>
                    <p className="pl-4">• <strong>极限位置</strong>：割线变成<strong>切线</strong>，斜率变成<strong>导数</strong> <Math tex="f'(x_1)" /></p>
                    <hr className="border-gray-300" />
                    <p className="text-red-700"><strong>一句话：</strong>导数 <Math tex="f'(x_1)" /> 就是曲线在 <Math tex="x_1" /> 处的<strong>切线斜率</strong>。</p>
                    <p>所以第二节的点斜式终于派上用场了——有了切点 <Math tex="(x_1, f(x_1))" /> 和斜率 <Math tex="f'(x_1)" />，就能写切线方程。</p>
                  </div>
                </div>

                {/* ── 求导四步法 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px text-[0.95rem]">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🧭 求导四步法：记住这个模板，任何题都能做</div>
                  <div className="px-3 py-1 space-y-0.5">
                    <p>① <strong>写定义</strong>：套 <Math tex="f'(x)=\lim\limits_{\Delta x\to 0}\dfrac{f(x+\Delta x)-f(x)}{\Delta x}" /></p>
                    <p>② <strong>化简分子</strong>：把 <Math tex="f(x+\Delta x)-f(x)" /> 拆成 <Math tex="\Delta x\cdot(\cdots)" /></p>
                    <p>③ <strong>约掉 <Math tex="\Delta x" /></strong>：分子分母的 <Math tex="\Delta x" /> 相消，式子不再有分母</p>
                    <p>④ <strong>取极限</strong>：把剩下的 <Math tex="\Delta x" /> 当 0 代入，得到 <Math tex="f'(x)" />（如需点值，再代 <Math tex="x=x_0" />）</p>
                  </div>
                </div>

                {/* ── 自测（⑤ 示例前，先自己试）── */}
                <div className="text-[1rem] print:hidden">
                  <PracticeCard title="先自己试（翻页看详解）" questions={derivPrereqPractice4a} explanations={derivativePrereqExplanations} hideBlankLine optionCols={2} printOptionCols={2}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-[1rem] hidden print:block">
                  <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                    <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">✍️ 先自己试（翻页看详解）</div>
                    <div className="px-3 py-1 grid grid-cols-2 gap-x-4">
                      {derivPrereqPractice4a.map((q, idx) => (
                        <p key={q.id} className={`text-gray-800 py-1 border-b border-gray-200 ${idx === 2 ? 'col-span-2' : ''}`} style={{ breakInside: 'avoid' }}>
                          <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                          {q.questionLatex && <Math tex={q.questionLatex} />}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ── 完整示例：四节汇合 ── */}
                <PageBreak />
                <div className="border border-gray-400 rounded overflow-hidden text-[0.95rem]">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">⑤ 完整示例：求 <Math tex="f(x)=x^2" /> 在 <Math tex="x=2" /> 处的导数</div>
                  <div className="px-3 py-1.5 space-y-1">
                    <p><strong>目标：</strong>套导数定义 <Math tex="f'(x)=\lim\limits_{\Delta x\to 0}\dfrac{f(x+\Delta x)-f(x)}{\Delta x}" /> 算出来（四步法 ①）。</p>
                    <hr className="border-gray-300" />
                    <p><strong>② 化简分子 <Math tex="f(x+\Delta x)-f(x)" />（第一节学过）：</strong></p>
                    <p className="pl-4"><Math tex="f(x+\Delta x)-f(x)=(x+\Delta x)^2-x^2=2x\Delta x+(\Delta x)^2=\Delta x(2x+\Delta x)" /></p>
                    <hr className="border-gray-300" />
                    <p className="font-bold">③ 约掉分母 <Math tex="\Delta x" />（第三节学过）：</p>
                    <p className="pl-4"><Math tex="\dfrac{f(x+\Delta x)-f(x)}{\Delta x}=\dfrac{\Delta x(2x+\Delta x)}{\Delta x}=2x+\Delta x" /></p>
                    <hr className="border-gray-300" />
                    <p><strong>④ 让 <Math tex="\Delta x\to 0" /> 取极限（第四节学过）：</strong>分母已去除，可以直接把剩下的 <Math tex="\Delta x" /> 当 0。<Math tex="2x" /> 部分不变，<Math tex="\Delta x" /> 部分消失：</p>
                    <p className="pl-4"><Math tex="f'(x)=\lim\limits_{\Delta x\to 0}(2x+\Delta x)=2x+0=2x" /></p>
                    <hr className="border-gray-300" />
                    <p><strong>最后代入 <Math tex="x=2" />：</strong><Math tex="f'(2)=2\times 2=4" />。<span className="text-red-700 ml-2"><strong>🎯 四步法闭环</strong>：化简 → 约掉 → 取极限 → 代点。</span></p>
                  </div>
                </div>

                {/* ── 注意：f(a) vs f'(a) ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px text-[0.95rem]">
                  <div className="grid grid-cols-[3fr_2fr] font-bold text-gray-800 border-b border-gray-400 bg-gray-100">
                    <div className="px-2 py-1 border-r border-gray-400">⚠️ 注意：别混淆 <Math tex="f(a)" /> 和 <Math tex="f'(a)" /></div>
                    <div className="px-2 py-1">📊 对照速记</div>
                  </div>
                  <div className="grid grid-cols-[3fr_2fr]">
                    <div className="p-2 space-y-1 border-r border-gray-300">
                      <p>一撇之差，算法和结果完全不同。以 <Math tex="f(x)=x^2" /> 为例：</p>
                      <p className="pl-4">• <Math tex="f(3)" />（<strong>函数值</strong>）：直接代 <Math tex="x=3" /> 到 <Math tex="f(x)" />，得 <Math tex="3^2=9" /></p>
                      <p className="pl-4">• <Math tex="f'(3)" />（<strong>导数值</strong>）：先求导得 <Math tex="f'(x)=2x" />，再代 <Math tex="x=3" /> 得 <Math tex="2\times 3=6" /></p>
                      <p className="text-red-700"><strong>一句话：看到 <Math tex="'" />（撇），先求导再代值；没有 <Math tex="'" />，直接代值。</strong></p>
                    </div>
                    <div className="p-2 flex">
                      <table className="w-full h-full text-center border border-gray-300 leading-tight">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="border border-gray-300 px-1 py-0"></th>
                            <th className="border border-gray-300 px-1 py-0"><Math tex="f(a)" /></th>
                            <th className="border border-gray-300 px-1 py-0"><Math tex="f'(a)" /></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td className="border border-gray-300 px-1 py-0 font-bold">叫法</td><td className="border border-gray-300 px-1 py-0">函数值</td><td className="border border-gray-300 px-1 py-0">导数值</td></tr>
                          <tr><td className="border border-gray-300 px-1 py-0 font-bold">几何</td><td className="border border-gray-300 px-1 py-0">点的高度</td><td className="border border-gray-300 px-1 py-0">切线斜率</td></tr>
                          <tr><td className="border border-gray-300 px-1 py-0 font-bold">步骤</td><td className="border border-gray-300 px-1 py-0">直接代</td><td className="border border-gray-300 px-1 py-0">先求导再代</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

              </div>
            </Collapsible>
          </section>

          {/* ═══════════════════════════════════════════════════════ */}
          {/* Section 5: 综合自测 */}
          {/* ═══════════════════════════════════════════════════════ */}
          <section id="dp-quiz" className="mb-0 scroll-mt-4">
            <Collapsible title="五、综合自测" defaultOpen storageKey="deriv-prereq:quiz">
              <div className="print:hidden">
                <QuizPanel questions={derivPrereqQuizQuestions} module="deriv-prereq-quiz" explanations={derivativePrereqExplanations} title="" />
              </div>
              <div className="hidden print:block text-[0.95rem]">
                <div className="grid grid-cols-2 gap-x-4">
                  {derivPrereqQuizQuestions.map((q, idx) => (
                    <div key={q.id} className={`py-1 border-b border-gray-200 ${q.type !== 'blank' || idx === 2 || idx === 3 || idx === 10 ? 'col-span-2' : ''}`} style={{ breakInside: 'avoid' }}>
                      <p className="text-gray-800">
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                      {q.type !== 'blank' && q.options && (
                        <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 ml-5 mt-0.5">
                          {q.options.map((opt) => (
                            <div key={opt.value} className="flex items-center gap-1 text-gray-700">
                              <span className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center text-xs font-bold text-gray-600 shrink-0">{opt.label}</span>
                              <span>{opt.isLatex ? <Math tex={opt.value} /> : opt.value}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* ── 本章要点速查表 ── */}
              <div className="text-base">
                <div className="grid grid-cols-[3rem_13rem_1fr] bg-gray-100 border border-gray-400 font-bold text-gray-800">
                  <div className="px-2 py-0.5 text-center border-r border-gray-400">节</div>
                  <div className="px-2 py-0.5 text-center border-r border-gray-400">核心内容</div>
                  <div className="px-2 py-0.5 text-center">关键公式/动作</div>
                </div>
                {[
                  { t: '①', c: <>化简 <Math tex="f(x+\Delta x)-f(x)" /></>, f: <>拆成 <Math tex="\Delta x\cdot(\cdots)" />（多项式提项 / 分式通分 / 根式乘共轭）</> },
                  { t: '②', c: <>斜率 / 切线方程</>, f: <><Math tex="k=\dfrac{y_2-y_1}{x_2-x_1}" />；点斜式 <Math tex="y-y_1=k(x-x_1)" /></> },
                  { t: '③', c: <>平均变化率 = 割线斜率</>, f: <><Math tex="\bar{v}=\dfrac{f(x_1+\Delta x)-f(x_1)}{\Delta x}" /></> },
                  { t: '④', c: <>导数 = 瞬时变化率 = 切线斜率</>, f: <><Math tex="f'(x)=\lim\limits_{\Delta x\to 0}\dfrac{f(x+\Delta x)-f(x)}{\Delta x}" /></> },
                  { t: '🧭', c: <>求导四步法</>, f: <>① 写定义 → ② 化简分子 → ③ 约掉 <Math tex="\Delta x" /> → ④ 取极限</> },
                  { t: '⚠️', c: <>易错区分</>, f: <><Math tex="f(a)" /> = 函数值；<Math tex="f'(a)" /> = 导数值（看见 <Math tex="'" /> 先求导再代）</> },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-[3rem_13rem_1fr] border-l border-r border-b border-gray-400">
                    <div className="px-2 py-0.5 text-center font-bold border-r border-gray-300">{row.t}</div>
                    <div className="px-2 py-0.5 border-r border-gray-300">{row.c}</div>
                    <div className="px-2 py-0.5">{row.f}</div>
                  </div>
                ))}
              </div>
            </Collapsible>
          </section>

          {/* 打印模式答案区 */}
          {isPrinting && printOptions.showAnswers && <DerivativePrereqAnswers />}

        </div>
      </LessonLayout>
    </div>
  );
}
