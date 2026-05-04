import { Math, Collapsible, PageHeader, LessonLayout, ExportButton, PracticeCard, PrintQuestions, UnifiedDebugToggle } from '@/components/shared';
import { alwaysExistsProgressItems } from './data/3.6.4/3.6.4-always-exists-progress';
import { alwaysHoldExample1Practice, existsExample2Practice, separateParamExample3Practice, expSeparateParamExample5Practice } from './data/3.6.4/3.6.4-always-exists-practice';
import { useProgress } from '@/hooks';
import { alwaysExistsExplanations } from './3.6.4-always-exists-answers';

export function AlwaysExistsPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('always-exists', alwaysExistsProgressItems);

  return (
    <div>
      <div className="[&_h1]:!mb-0 [&_.flex.flex-wrap]:!mt-1">
        <PageHeader
          stage="第三阶段 · 函数思维"
          title="3.6.4 恒成立与存在性"
          tags={[]}
        />
      </div>

      <LessonLayout
        progressItems={progressItems}
        onToggle={toggleProgress}
        sidebarTop={<ExportButton title="3.6.4 恒成立与存在性" />}
      >
        <div className="[&_.rounded-xl]:mb-0 [&_.rounded-xl>.flex.items-center]:py-0.5 [&_.rounded-xl>div:last-child]:px-0 [&_.rounded-xl>div:last-child]:pt-0 [&_.rounded-xl>div:last-child]:pb-0 [&_.rounded-xl_button>span]:font-bold [&_.rounded-xl_button>span]:text-gray-900">

          <section id="ae-main" className="mb-0 scroll-mt-4">
            <Collapsible title="一、恒成立与存在性（★ 高考高频应用）" defaultOpen storageKey="always-exists:main">
              <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📌 四句话总表：看清楚是恒成立还是存在</div>
                  <div>
                    <table className="w-full border-collapse text-[0.9rem] text-center bg-white [&_th]:border [&_th]:border-gray-400 [&_th]:px-2 [&_th]:py-0.5 [&_td]:border [&_td]:border-gray-400 [&_td]:px-2 [&_td]:py-0.5 [&_tr>*:first-child]:border-l-0 [&_tr>*:last-child]:border-r-0 [&_tr:last-child>*]:border-b-0">
                      <thead className="bg-gray-50">
                        <tr>
                          <th>题目条件</th>
                          <th>转化方式</th>
                          <th>读法</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>对任意 <Math tex="x\in D" />，<Math tex="f(x)\ge 0" /></td>
                          <td><Math tex="f_{\min}\ge 0" /></td>
                          <td>最小的都不小于零</td>
                        </tr>
                        <tr>
                          <td>对任意 <Math tex="x\in D" />，<Math tex="f(x)\le 0" /></td>
                          <td><Math tex="f_{\max}\le 0" /></td>
                          <td>最大的都不大于零</td>
                        </tr>
                        <tr>
                          <td>存在 <Math tex="x\in D" />，使 <Math tex="f(x)\ge 0" /></td>
                          <td><Math tex="f_{\max}\ge 0" /></td>
                          <td>只要最高处能到零以上</td>
                        </tr>
                        <tr>
                          <td>存在 <Math tex="x\in D" />，使 <Math tex="f(x)\le 0" /></td>
                          <td><Math tex="f_{\min}\le 0" /></td>
                          <td>只要最低处能到零以下</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🔧 标准流程：先翻译，再求最值，最后解参数</div>
                  <div className="px-2 py-1 space-y-0.5">
                    <p>① <strong>读量词</strong>：看清楚是“任意”还是“存在”，看清楚是不小于零还是不大于零。</p>
                    <p>② <strong>转最值</strong>：用上面的四句话，把不等式改成最大值或最小值条件。</p>
                    <p>③ <strong>求最值</strong>：回到 3.6，找驻点和端点，比较函数值。</p>
                    <p>④ <strong>解参数</strong>：把最值条件写成关于参数的不等式，解出参数范围。</p>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：例 1　已知 <Math tex="f(x)=x^2-2x+a" />，求下列情况下 <Math tex="a" /> 的范围</div>
                  <div className="px-2 py-1 space-y-0.5">
                    <div className="grid grid-cols-[auto_1fr] gap-x-2">
                      <div className="font-bold whitespace-nowrap">问题：</div>
                      <div className="space-y-0.5">
                        <p>（1）在 <Math tex="[0,3]" /> 上恒有 <Math tex="f(x)\ge 0" />；</p>
                        <p>（2）在 <Math tex="[0,3]" /> 上恒有 <Math tex="f(x)\le 0" />。</p>
                      </div>
                    </div>
                    <p>① <strong>求候选值</strong>：求导得 <Math tex="f'(x)=2x-2" />。令 <Math tex="f'(x)=0" />，得 <Math tex="x=1" />。因为 <Math tex="1\in[0,3]" />，所以候选点为 <Math tex="0,1,3" />。</p>
                    <hr className="border-gray-300" />
                    <div className="grid grid-cols-[auto_1fr] gap-4 items-start">
                      <table className="ml-4 mt-1 border-collapse text-center text-[0.81rem] bg-white [&_td]:border [&_td]:border-gray-400 [&_th]:border [&_th]:border-gray-400 [&_td]:px-2 [&_td]:py-0.5 [&_th]:px-2 [&_th]:py-0.5">
                        <thead className="bg-gray-50">
                          <tr>
                            <th>候选点</th>
                            <th>代入原函数</th>
                            <th>函数值</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><Math tex="0" /></td>
                            <td><Math tex="f(0)=0^2-2\cdot0+a" /></td>
                            <td><Math tex="a" /></td>
                          </tr>
                          <tr>
                            <td><Math tex="1" /></td>
                            <td><Math tex="f(1)=1^2-2\cdot1+a" /></td>
                            <td className="font-bold"><Math tex="a-1" /></td>
                          </tr>
                          <tr>
                            <td><Math tex="3" /></td>
                            <td><Math tex="f(3)=3^2-2\cdot3+a" /></td>
                            <td><Math tex="a+3" /></td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="space-y-0.5 pt-1">
                        <p><strong>（1）恒有 <Math tex="f(x)\ge 0" /></strong>：只要最小值大于等于 0，即 <Math tex="f_{\min}\ge 0" />。</p>
                        <p>三个候选值中最小的是 <Math tex="a-1" />，所以 <Math tex="a-1\ge 0" />，得 <Math tex="a\ge 1" />。</p>
                        <hr className="border-gray-300" />
                        <p><strong>（2）恒有 <Math tex="f(x)\le 0" /></strong>：只要最大值小于等于 0，即 <Math tex="f_{\max}\le 0" />。</p>
                        <p>三个候选值中最大的是 <Math tex="a+3" />，所以 <Math tex="a+3\le 0" />，得 <Math tex="a\le -3" />。</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-base print:hidden">
                  <PracticeCard title="✏️ 例 1 同款练习（恒成立·最值转化）" questions={alwaysHoldExample1Practice} explanations={alwaysExistsExplanations} hideBlankLine optionCols={1} printOptionCols={1}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={alwaysHoldExample1Practice} printOptionCols={1} columns={1} />
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：例 2　已知 <Math tex="f(x)=x^2-2x+a" />，求下列情况下 <Math tex="a" /> 的范围</div>
                  <div className="px-2 py-1 space-y-0.5">
                    <div className="grid grid-cols-[auto_1fr] gap-x-2">
                      <div className="font-bold whitespace-nowrap">问题：</div>
                      <div className="space-y-0.5">
                        <p>（1）存在 <Math tex="x\in[0,3]" /> 使 <Math tex="f(x)\le 0" />；</p>
                        <p>（2）存在 <Math tex="x\in[0,3]" /> 使 <Math tex="f(x)\ge 0" />。</p>
                      </div>
                    </div>
                    <p>① <strong>读题</strong>：<strong>存在</strong>意味着只要找到一个满足的 <Math tex="x" /> 就行，转化时往不等号同方向取最值即可。</p>
                    <p>② <strong>求候选值</strong>：求导得 <Math tex="f'(x)=2x-2" />。令 <Math tex="f'(x)=0" />，得 <Math tex="x=1" />。因为 <Math tex="1\in[0,3]" />，所以候选点为 <Math tex="0,1,3" />。</p>
                    <hr className="border-gray-300" />
                    <div className="grid grid-cols-[auto_1fr] gap-4 items-start">
                      <table className="ml-4 mt-1 border-collapse text-center text-[0.81rem] bg-white [&_td]:border [&_td]:border-gray-400 [&_th]:border [&_th]:border-gray-400 [&_td]:px-2 [&_td]:py-0.5 [&_th]:px-2 [&_th]:py-0.5">
                        <thead className="bg-gray-50">
                          <tr>
                            <th>候选点</th>
                            <th>代入原函数</th>
                            <th>函数值</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><Math tex="0" /></td>
                            <td><Math tex="f(0)=0^2-2\cdot0+a" /></td>
                            <td><Math tex="a" /></td>
                          </tr>
                          <tr>
                            <td><Math tex="1" /></td>
                            <td><Math tex="f(1)=1^2-2\cdot1+a" /></td>
                            <td className="font-bold"><Math tex="a-1" /></td>
                          </tr>
                          <tr>
                            <td><Math tex="3" /></td>
                            <td><Math tex="f(3)=3^2-2\cdot3+a" /></td>
                            <td className="font-bold"><Math tex="a+3" /></td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="space-y-0.5 pt-1">
                        <p><strong>（1）存在 <Math tex="f(x)\le 0" /></strong>：只要最小值小于等于 0，即 <Math tex="f_{\min}\le 0" />。</p>
                        <p>三个候选值中最小的是 <Math tex="a-1" />，所以 <Math tex="a-1\le 0" />，得 <Math tex="a\le 1" />。</p>
                        <hr className="border-gray-300" />
                        <p><strong>（2）存在 <Math tex="f(x)\ge 0" /></strong>：只要最大值大于等于 0，即 <Math tex="f_{\max}\ge 0" />。</p>
                        <p>三个候选值中最大的是 <Math tex="a+3" />，所以 <Math tex="a+3\ge 0" />，得 <Math tex="a\ge -3" />。</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-base print:hidden">
                  <PracticeCard title="✏️ 例 2 同款练习（存在性·最值转化）" questions={existsExample2Practice} explanations={alwaysExistsExplanations} hideBlankLine optionCols={1} printOptionCols={1}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={existsExample2Practice} printOptionCols={1} columns={1} />
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：例 3　已知 <Math tex="\ln x\le ax" /> 对 <Math tex="x\in(0,+\infty)" /> 恒成立，求 <Math tex="a" /> 的最小值<span className="font-normal ml-2">——分离参数法（高考压轴母题）</span></div>
                  <div className="px-2 py-1 space-y-0.5">
                    <p>① <strong>读题</strong>：要求对所有 <Math tex="x>0" />，<Math tex="\ln x\le ax" /> 恒成立。题目中 <Math tex="a" /> 与 <Math tex="x" /> 不能直接套四句话总表，需要先<strong>把 <Math tex="a" /> 单独移到一边</strong>。</p>
                    <p>② <strong>分参</strong>：因为 <Math tex="x>0" /> 恒正，两边除以 <Math tex="x" />，不等号方向不变：<Math tex="a\ge \dfrac{\ln x}{x}" /> 恒成立。</p>
                    <p className="pl-4">恒成立条件等价于 <Math tex="a\ge \max g(x)" />，其中 <Math tex="g(x)=\dfrac{\ln x}{x}" />。</p>
                    <hr className="border-gray-300" />
                    <p>③ <strong>求 <Math tex="g(x)" /> 的最大值</strong>（用商法则求导）：</p>
                    <p className="pl-2"><Math tex="g'(x)=\dfrac{\frac{1}{x}\cdot x-\ln x\cdot 1}{x^2}=\dfrac{1-\ln x}{x^2}" />，分母 <Math tex="x^2>0" /> 恒正可约，看分子 <Math tex="1-\ln x" />。令 <Math tex="1-\ln x=0" />，得 <Math tex="\ln x=1" />，</p>
                    <p className="pl-2">即驻点 <Math tex="x=e" />，且 <Math tex="e\approx 2.718" />，则驻点在定义域内，把定义域 <Math tex="(0,+\infty)" /> 分割成 <Math tex="(0,e)" /> 和 <Math tex="(e,+\infty)" /> 两个区间。</p>
                    <p className="pl-4">• 区间 <Math tex="(0,e)" />，即 <Math tex="0<x<e" />，两边取 ln，得 <Math tex="\ln x<\ln e" />，即 <Math tex="\ln x<1" />，移项得 <Math tex="1-\ln x>0" />，<Math tex="g'(x)>0" />，故 <Math tex="g(x)" /> 递增</p>
                    <p className="pl-4">• 区间 <Math tex="(e,+\infty)" />，即 <Math tex="x>e" />，两边取 ln，得 <Math tex="\ln x>\ln e" />，即 <Math tex="\ln x>1" />，移项得 <Math tex="1-\ln x<0" />，<Math tex="g'(x)<0" />，故 <Math tex="g(x)" /> 递减</p>
                    <p className="pl-2">所以 <Math tex="x=e" /> 处取得<strong>极大值即最大值</strong>。</p>
                    <p>④ <strong>代入求值</strong>：<Math tex="g_{\max}=g(e)=\dfrac{\ln e}{e}=\dfrac{1}{e}" />，由 <Math tex="a\ge \dfrac{1}{e}" />，得 <Math tex="a" /> 的最小值为 <Math tex="\dfrac{1}{e}" />。</p>
                  </div>
                </div>

                <div className="text-base print:hidden">
                  <PracticeCard title="✏️ 例 3 同款练习（分离参数法）" questions={separateParamExample3Practice} explanations={alwaysExistsExplanations} hideBlankLine optionCols={1} printOptionCols={1}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={separateParamExample3Practice} printOptionCols={1} columns={1} />
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：例 4　已知 <Math tex="e^x\ge ax" /> 对 <Math tex="x\in\mathbb{R}" /> 恒成立，求 <Math tex="a" /> 的范围<span className="font-normal ml-2">——含 <Math tex="e^x" /> 的分离参数（需分类讨论）</span></div>
                  <div className="px-2 py-1 space-y-0.5">
                    <p><strong>解</strong>：因 <Math tex="x" /> 可正可负可为零，需<strong>分类讨论</strong>。</p>
                    <hr className="border-gray-300" />
                    <p>（1）当 <Math tex="x=0" /> 时，<Math tex="e^0=1\ge 0" />，恒成立。</p>
                    <hr className="border-gray-300" />
                    <p>（2）当 <Math tex="x>0" /> 时，两边除以正数 <Math tex="x" />，不等号方向不变，原不等式等价于 <Math tex="a\le \dfrac{e^x}{x}" /> 在 <Math tex="(0,+\infty)" /> 上恒成立，即 <Math tex="a\le \min\limits_{x>0}\dfrac{e^x}{x}" />。</p>
                    <p className="pl-2">设 <Math tex="g(x)=\dfrac{e^x}{x}" />，由商法则求导得 <Math tex="g'(x)=\dfrac{xe^x-e^x}{x^2}=\dfrac{e^x(x-1)}{x^2}" />。分母 <Math tex="x^2>0" /> 恒正、分子 <Math tex="e^x>0" /> 恒正，</p>
                    <p className="pl-2">只需看 <Math tex="x-1" /> 的正负。令 <Math tex="x-1=0" />，得驻点 <Math tex="x=1" />，将区间 <Math tex="(0,+\infty)" /> 分成 <Math tex="(0,1)" /> 和 <Math tex="(1,+\infty)" />。</p>
                    <p className="pl-4">• 区间 <Math tex="(0,1)" />，即 <Math tex="0<x<1" /> 时，移项得 <Math tex="x-1<0" />，故 <Math tex="g'(x)<0" />，则 <Math tex="g(x)" /> 递减；</p>
                    <p className="pl-4">• 区间 <Math tex="(1,+\infty)" />，即 <Math tex="x>1" /> 时，移项得 <Math tex="x-1>0" />，故 <Math tex="g'(x)>0" />，则 <Math tex="g(x)" /> 递增。</p>
                    <p className="pl-2">所以 <Math tex="g(x)" /> 先递减后递增，在 <Math tex="x=1" /> 处取得<strong>极小值即最小值</strong>，<Math tex="\min\limits_{x>0}g(x)=g(1)=\dfrac{e^1}{1}=e" />，故 <Math tex="a\le e" />。</p>
                    <hr className="border-gray-300" />
                    <p>（3）当 <Math tex="x<0" /> 时，两边除以负数 <Math tex="x" />，不等号方向<strong>变号</strong>，原不等式等价于 <Math tex="a\ge \dfrac{e^x}{x}" /> 在 <Math tex="(-\infty,0)" /> 上恒成立。</p>
                    <p className="pl-2">因为 <Math tex="e^x>0" />，<Math tex="x<0" />，所以 <Math tex="\dfrac{e^x}{x}<0" />，且 <Math tex="\dfrac{e^x}{x}" /> 在 <Math tex="(-\infty,0)" /> 上的上界为 <Math tex="0" />。所以要使 <Math tex="a\ge\dfrac{e^x}{x}" /> 恒成立，只需 <Math tex="a\ge 0" />。</p>
                    <hr className="border-gray-300" />
                    <p><strong>综上所述</strong>，<Math tex="a" /> 需同时满足 <Math tex="a\ge 0" /> 且 <Math tex="a\le e" />，所以 <Math tex="0\le a\le e" />。因此，<Math tex="a" /> 的取值范围是 <Math tex="[0,e]" />。</p>
                  </div>
                </div>

                <div className="text-base print:hidden">
                  <PracticeCard title="✏️ 例 4 同款练习（含 eˣ 的分离参数）" questions={expSeparateParamExample5Practice} explanations={alwaysExistsExplanations} hideBlankLine optionCols={1} printOptionCols={1}
                    renderItem={(q, idx) => (
                      <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {q.questionLatex && <Math tex={q.questionLatex} />}
                      </p>
                    )}
                  />
                </div>
                <div className="text-base hidden print:block">
                  <PrintQuestions questions={expSeparateParamExample5Practice} printOptionCols={1} columns={1} />
                </div>

              </div>
            </Collapsible>
          </section>

        </div>
      </LessonLayout>
      <UnifiedDebugToggle />
    </div>
  );
}
