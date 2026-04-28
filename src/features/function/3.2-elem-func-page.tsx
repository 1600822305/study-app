import { Mafs, Coordinates, Plot, Point } from 'mafs';
import { Math, Collapsible, SpeakButton, PageHeader, LessonLayout, PracticeCard, ExportButton, PageBreak, DebugGeo2dSvg, UnifiedDebugToggle } from '@/components/shared';
import { elemFuncNarrations } from './data/3.2/3.2-elem-func-narrations';
import { elemFuncProgressItems } from './data/3.2/3.2-elem-func-progress';
import { elemFuncPractice2, elemFuncPractice3, elemFuncPractice4 } from './data/3.2/3.2-elem-func-practice';
import { useProgress, usePrintMode } from '@/hooks';
import { ElementaryFuncAnswers, elementaryFuncExplanations } from './3.2-elem-func-answers';
import { expIncDiagram, expDecDiagram, logIncDiagram, logDecDiagram } from './data/3.2/3.2-elem-func-diagrams';

export function ElementaryFuncPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('elem-func', elemFuncProgressItems);
  const { isPrinting, printOptions } = usePrintMode();

  return (
    <div>
      <PageHeader
        stage="第三阶段 · 函数思维"
        title="3.2 基本初等函数"
        narration={elemFuncNarrations.intro}
        tags={[
          { label: '难度 ★★★☆☆', color: 'amber' },
          { label: '必考', color: 'blue' },
          { label: '约8-10小时', color: 'purple' },
        ]}
      />

      <div className="flex justify-end gap-2 print:hidden">
        <UnifiedDebugToggle />
        <ExportButton title="3.2 基本初等函数" />
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>
        <div className="[&_.rounded-xl]:mb-0 [&_.rounded-xl>.flex.items-center]:py-0.5 [&_.rounded-xl>div:last-child]:px-0 [&_.rounded-xl>div:last-child]:pt-0 [&_.rounded-xl>div:last-child]:pb-0">

      {/* ════════════════════════════════════════════════════════════ */}
      {/* Section 1: 对数运算法则 */}
      {/* ════════════════════════════════════════════════════════════ */}
      <section id="ef-log-rules" className="mb-0 scroll-mt-4">
        <Collapsible title="分组一、对数运算法则" defaultOpen storageKey="elem-func:log-rules" headerExtra={<SpeakButton text={elemFuncNarrations.logRules} />}>
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">先回顾：对数是什么？</div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div className="px-3 py-0.5">
                  <p><Math tex="\log_2 8 = 3" /> 的意思是：</p>
                  <p><strong>以 2 为底 8 的对数等于 3</strong>（即 2 的 3 次方等于 8）</p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="px-3 py-0.5">
                  <p><strong>为什么要学运算法则？</strong></p>
                  <p>运算法则就是<strong>快捷方式</strong>，不用查值就能直接算出结果</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-2 py-0.5 text-center">对数式 <Math tex="\log_3 9 = 2" /></th>
                    <th className="border border-gray-300 px-2 py-0.5 text-center">⟷</th>
                    <th className="border border-gray-300 px-2 py-0.5 text-center">指数式 <Math tex="3^2 = 9" /></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-2 py-0.5 text-center">3 — 底数</td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center">=</td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center">3 — 底数</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-0.5 text-center">9 — 真数</td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center">=</td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center">9 — 幂（结果）</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-0.5 text-center">2 — 对数值</td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center">=</td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center">2 — 指数（次方）</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">先记住这几个常用的对数值（后面做题要用）</div>
              <div className="grid grid-cols-2">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-2 py-1 text-center">式子</th>
                      <th className="border border-gray-300 px-2 py-1 text-center">意思</th>
                      <th className="border border-gray-300 px-2 py-1 text-center">结果</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-gray-300 px-2 py-1 text-center"><Math tex="\lg 10" /></td><td className="border border-gray-300 px-2 py-1 text-center">10 的几次方等于 10？</td><td className="border border-gray-300 px-2 py-1 text-center font-bold">1</td></tr>
                    <tr><td className="border border-gray-300 px-2 py-1 text-center"><Math tex="\lg 100" /></td><td className="border border-gray-300 px-2 py-1 text-center">10 的几次方等于 100？</td><td className="border border-gray-300 px-2 py-1 text-center font-bold">2</td></tr>
                    <tr><td className="border border-gray-300 px-2 py-1 text-center"><Math tex="\lg 1000" /></td><td className="border border-gray-300 px-2 py-1 text-center">10 的几次方等于 1000？</td><td className="border border-gray-300 px-2 py-1 text-center font-bold">3</td></tr>
                    <tr><td className="border border-gray-300 px-2 py-1 text-center"><Math tex="\log_a 1" /></td><td className="border border-gray-300 px-2 py-1 text-center">任何数的 0 次方都等于 1</td><td className="border border-gray-300 px-2 py-1 text-center font-bold">0</td></tr>
                  </tbody>
                </table>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-2 py-1 text-center">式子</th>
                      <th className="border border-gray-300 px-2 py-1 text-center">意思</th>
                      <th className="border border-gray-300 px-2 py-1 text-center">结果</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-gray-300 px-2 py-1 text-center"><Math tex="\log_2 8" /></td><td className="border border-gray-300 px-2 py-1 text-center">2 的几次方等于 8？</td><td className="border border-gray-300 px-2 py-1 text-center font-bold">3</td></tr>
                    <tr><td className="border border-gray-300 px-2 py-1 text-center"><Math tex="\log_2 4" /></td><td className="border border-gray-300 px-2 py-1 text-center">2 的几次方等于 4？</td><td className="border border-gray-300 px-2 py-1 text-center font-bold">2</td></tr>
                    <tr><td className="border border-gray-300 px-2 py-1 text-center"><Math tex="\log_3 9" /></td><td className="border border-gray-300 px-2 py-1 text-center">3 的几次方等于 9？</td><td className="border border-gray-300 px-2 py-1 text-center font-bold">2</td></tr>
                    <tr><td className="border border-gray-300 px-2 py-1 text-center"><Math tex="\log_a a" /></td><td className="border border-gray-300 px-2 py-1 text-center">任何数的 1 次方就是它本身</td><td className="border border-gray-300 px-2 py-1 text-center font-bold">1</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">对数法则不是凭空冒出来的 — 对数是指数的逆运算，所以<strong>指数律"反过来读"就变成了对数法则</strong></div>
              <div className="px-3 py-0.5">
                <p><strong>准备工作</strong>：设 <Math tex="\log_a M = m" />，<Math tex="\log_a N = n" />（前提：底数 <Math tex="a" /> 相同），翻译成指数式就是 <Math tex="a^m = M" />，<Math tex="a^n = N" /></p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">法则① — 积的对数等于对数之和</div>
              <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50 flex items-center justify-center gap-6">
                <Math tex="\log_a M + \log_a N = \log_a(MN)" />
                <span>例：<Math tex="\log_2 3 + \log_2 5 = \log_2(3 \times 5) = \log_2 15" /></span>
              </div>
              <div className="grid grid-cols-[1fr_auto_2fr]">
                <div className="px-3 py-0.5">
                  <p><strong>你学过的指数律</strong>：<Math tex="a^m \times a^n = a^{m+n}" /></p>
                  <p>（同底数幂相乘，指数相加）</p>
                  <p className="mt-0.5">例：<Math tex="2^2 \times 2^3 = 2^{2+3} = 2^5" /></p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="px-3 py-0.5">
                  <p><strong>反过来问</strong>：<Math tex="a^{m+n}" /> 的对数是多少？根据定义，<Math tex="\log_a(a^{m+n}) = m+n" /></p>
                  <p>而 <Math tex="a^{m+n} = a^m \times a^n" />，即 <Math tex="a^{m+n} = M \times N" />（因为 <Math tex="a^m = M" />，<Math tex="a^n = N" />）</p>
                  <p>所以 <Math tex="\log_a(MN) = m+n = \log_a M + \log_a N" /></p>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">法则② — 商的对数等于对数之差</div>
              <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50 flex items-center justify-center gap-6">
                <Math tex="\log_a M - \log_a N = \log_a\frac{M}{N}" />
                <span>例：<Math tex="\log_2 8 - \log_2 4 = \log_2 2 = 1" /></span>
              </div>
              <div className="grid grid-cols-[1fr_auto_2fr]">
                <div className="px-3 py-0.5">
                  <p><strong>你学过的指数律</strong>：<Math tex="a^m \div a^n = a^{m-n}" /></p>
                  <p>（同底数幂相除，指数相减）</p>
                  <p className="mt-0.5">例：<Math tex="2^3 \div 2^2 = 2^{3-2} = 2^1" /></p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="px-3 py-0.5">
                  <p><strong>反过来问</strong>：<Math tex="a^{m-n}" /> 的对数是多少？根据定义，<Math tex="\log_a(a^{m-n}) = m-n" /></p>
                  <p>而 <Math tex="a^{m-n} = a^m \div a^n" />，即 <Math tex="a^{m-n} = M \div N" />（因为 <Math tex="a^m = M" />，<Math tex="a^n = N" />）</p>
                  <p>所以 <Math tex="\log_a\frac{M}{N} = m-n = \log_a M - \log_a N" /></p>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">法则③ — 幂的对数等于指数乘以对数</div>
              <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50 flex items-center justify-center gap-6">
                <Math tex="n\log_a M = \log_a M^n" />
                <span>例：<Math tex="3\lg 10 = \lg 10^3 = 3" /></span>
              </div>
              <div className="grid grid-cols-[1fr_auto_2fr]">
                <div className="px-3 py-0.5">
                  <p><strong>你学过的指数律</strong>：<Math tex="(a^m)^n = a^{mn}" /></p>
                  <p>（幂的幂，指数相乘）</p>
                  <p className="mt-0.5">例：<Math tex="(2^3)^2 = 2^{3 \times 2} = 2^6" /></p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="px-3 py-0.5">
                  <p><strong>反过来问</strong>：<Math tex="a^{mn}" /> 的对数是多少？根据定义，<Math tex="\log_a(a^{mn}) = mn" /></p>
                  <p>而 <Math tex="a^{mn} = (a^m)^n" />，即 <Math tex="a^{mn} = M^n" />（因为 <Math tex="a^m = M" />）</p>
                  <p>所以 <Math tex="\log_a M^n = mn = n \cdot m = n \cdot \log_a M" /></p>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-3 py-0.5">
                <p>三条法则的本质：<strong>对数把高级运算变成低级运算</strong></p>
                <table className="w-full border-collapse mt-0.5">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-2 py-0.5">原来的运算</th>
                      <th className="border border-gray-300 px-2 py-0.5">取对数后变成</th>
                      <th className="border border-gray-300 px-2 py-0.5">公式</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-gray-300 px-2 py-0.5 text-center">乘法 <Math tex="MN" /></td><td className="border border-gray-300 px-2 py-0.5 text-center">加法</td><td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="\log_a M + \log_a N = \log_a(MN)" /></td></tr>
                    <tr><td className="border border-gray-300 px-2 py-0.5 text-center">除法 <Math tex="\dfrac{M}{N}" /></td><td className="border border-gray-300 px-2 py-0.5 text-center">减法</td><td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="\log_a M - \log_a N = \log_a\dfrac{M}{N}" /></td></tr>
                    <tr><td className="border border-gray-300 px-2 py-0.5 text-center">乘方 <Math tex="M^n" /></td><td className="border border-gray-300 px-2 py-0.5 text-center">乘法</td><td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="n\log_a M = \log_a M^n" /></td></tr>
                  </tbody>
                </table>
                <p className="mt-0.5">（注意：加减法要求<strong>底数相同</strong>才能用！底数不同的情况后面讲换底公式）</p>
              </div>
            </div>

            <PageBreak />
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">恒等式① — 先对后指（底数相同）：<Math tex="a^{\log_a N} = N \quad (N > 0)" /></div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div className="px-3 py-0.5">
                  <p><Math tex="\log_a N" /> 问的是：<strong><Math tex="a" /> 的几次方等于 <Math tex="N" />？</strong></p>
                  <p>设答案为 <Math tex="x" />，即 <Math tex="\log_a N = x" />，根据定义就是 <Math tex="a^x = N" /></p>
                  <p>所以 <Math tex="a^{\log_a N} = a^x = N" />（把 <Math tex="\log_a N" /> 换成它等于的那个数 <Math tex="x" />）</p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="px-3 py-0.5">
                  <p><strong>例</strong>：求 <Math tex="2^{\log_2 8}" />，直接代入公式得答案为真数，也就是 8</p>
                  <p><strong>验证</strong>：<Math tex="\log_2 8" /> 问的是：2 的几次方等于 8？</p>
                  <p>设答案为 <Math tex="x" />，即 <Math tex="2^x = 8" />，所以 <Math tex="x = 3" />，所以 <Math tex="2^{\log_2 8} = 2^3 = 8" /></p>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">恒等式② — 先指后对（底数相同）：<Math tex="\log_a a^n = n" /></div>
              <div className="grid grid-cols-[48fr_auto_52fr]">
                <div className="px-3 py-0.5">
                  <p><Math tex="\log_a a^n" /> 问的是：<strong><Math tex="a" /> 的几次方等于 <Math tex="a^n" />？</strong></p>
                  <p>答案显然是 <Math tex="n" />（<Math tex="a" /> 的 <Math tex="n" /> 次方就是 <Math tex="a^n" />），所以 <Math tex="\log_a a^n = n" /></p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="px-3 py-0.5">
                  <p><strong>例</strong>：求 <Math tex="\log_2 2^5" />，直接代入公式得答案为指数，也就是 5</p>
                  <p><strong>验证</strong>：<Math tex="\log_2 2^5" /> 问的是：2 的几次方等于 <Math tex="2^5" />？所以 <Math tex="\log_2 2^5 = 5" /></p>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-3 py-0.5 text-center">
                <strong>口诀：底数一样，指数和对数连用，互相抵消</strong>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div>
                  <div className="px-2 py-0.5 font-bold text-gray-800 border-b border-gray-300 bg-gray-100">例. <Math tex="\lg 4 + \lg 25" /> 等于多少？</div>
                  <div className="px-3 py-0.5">
                    <p>第①步：看到两个对数<strong>相加</strong>，用法则①（加法，真数相乘）</p>
                    <p>第②步：<Math tex="\lg 4 + \lg 25 = \lg(4 \times 25) = \lg 100 = \log_{10} 100" /></p>
                    <p>第③步：<Math tex="\log_{10} 100 = 2" />（因为 <Math tex="10^2 = 100" />）</p>
                  </div>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div>
                  <div className="px-2 py-0.5 font-bold text-gray-800 border-b border-gray-300 bg-gray-100">例. <Math tex="\lg 8000 - 3\lg 2" /> 等于多少？</div>
                  <div className="px-3 py-0.5">
                    <p>第①步（法则③）：<Math tex="3\lg 2 = \lg 2^3 = \lg 8" /></p>
                    <p>第②步（法则②）：<Math tex="\lg 8000 - \lg 8 = \lg \frac{8000}{8} = \lg 1000" /></p>
                    <p>第③步：<Math tex="\lg 1000 = \log_{10} 1000 = 3" /></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">换底公式 — 底数不同怎么办？</div>
              <div className="px-3 py-0.5 border-b border-gray-300">
                <p>前面三条法则都要求<strong>底数相同</strong>才能用，但如果遇到 <Math tex="\log_2 3 \times \log_3 5" /> 这种底数不同的式子，就需要换底公式把它们统一成相同底数</p>
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div className="px-3 py-0.5">
                  <p><strong>★ 换底公式</strong>：<Math tex="\log_a b = \dfrac{\log_c b}{\log_c a}" /></p>
                  <p>记忆口诀：真上底下，新底统一</p>
                  <p>例：<Math tex="\log_2 5 = \dfrac{\log_{10} 5}{\log_{10} 2}" /></p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="px-3 py-0.5">
                  <p><strong>证明</strong>：设 <Math tex="\log_a b = x" />，即 <Math tex="a^x = b" /></p>
                  <p>两边取以 <Math tex="c" /> 为底的对数，得 <Math tex="\log_c a^x = \log_c b" /></p>
                  <p>由法则③（<Math tex="\log_a M^n = n\log_a M" />），得</p>
                  <p><Math tex="x \cdot \log_c a = \log_c b" />，即 <Math tex="x = \dfrac{\log_c b}{\log_c a}" /></p>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">换底公式的三个重要推论（高考常用）</div>
              <div className="grid grid-cols-[1fr_1px_1fr] items-stretch">
                {/* 第一行：推论公式 */}
                <div className="px-3 py-0.5"><p><strong>推论 ①</strong>（底真互换的乘积为1）：<Math tex="\log_a b \cdot \log_b a = 1" /></p></div>
                <div className="bg-gray-300"></div>
                <div className="px-3 py-0.5"><p><strong>推论 ②</strong>　指数提到前面：<Math tex="\log_{a^m} b^n = \dfrac{n}{m} \log_a b" /></p></div>

                {/* 横分割线 */}
                <div className="col-span-3 border-t border-gray-300"></div>

                {/* 第二行：推导 */}
                <div className="px-3 py-0.5"><p>推导：<Math tex="\log_a b = \dfrac{\log_b b}{\log_b a} = \dfrac{1}{\log_b a}" />，两边同乘分母，得推论①</p></div>
                <div className="bg-gray-300"></div>
                <div className="px-3 py-0.5"><p>推导：全换底到 a，得 <Math tex="\dfrac{\log_a b^n}{\log_a a^m} = \dfrac{n\log_a b}{m \cdot 1} = \dfrac{n}{m}\log_a b" /></p></div>

                {/* 横分割线 */}
                <div className="col-span-3 border-t border-gray-300"></div>

                {/* 第三行：例 */}
                <div className="px-3 py-0.5"><p>例：<Math tex="\log_2 3 \times \log_3 2 = 1" /></p></div>
                <div className="bg-gray-300"></div>
                <div className="px-3 py-0.5"><p>例：<Math tex="\log_4 8 = \log_{2^2} 2^3 = \dfrac{3}{2}" /></p></div>

                {/* 横分割线（进入推论③） */}
                <div className="col-span-3 border-t border-gray-300"></div>

                {/* 第四行：推论 ③ + 练一练 */}
                <div className="col-span-3 grid grid-cols-[7fr_1px_3fr]">
                  <div className="px-3 py-0.5">
                    <p><strong>推论 ③</strong>　链式恒等式（中间消）：<Math tex="\log_a b \cdot \log_b c = \log_a c" /></p>
                    <p>推导：<Math tex="\dfrac{\lg b}{\lg a} \cdot \dfrac{\lg c}{\lg b} = \dfrac{\lg c}{\lg a} = \log_a c" />　　例：<Math tex="\log_2 3 \cdot \log_3 8 = \log_2 8 = 3" /></p>
                  </div>
                  <div className="bg-gray-300"></div>
                  <div className="px-3 py-0.5 bg-amber-50">
                    <p className="font-bold">练一练</p>
                    <p>① <Math tex="\log_3 7 \cdot \log_7 9 = \underline{\qquad\qquad}" /></p>
                    <p>② <Math tex="\log_2 9 \cdot \log_3 4 = \underline{\qquad\qquad}" /></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-0.5 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">综合例. <Math tex="\log_2 9 \times \log_3 5 \times \log_{\sqrt{5}} 8 - \lg 4 - 2\lg 5" /> 等于多少？</div>
              <div className="px-3 py-0.5">
                <p><strong>第①步</strong>（法则③ + 链式）：<Math tex="\log_2 9 \times \log_3 5 = 2\log_2 3 \times \log_3 5 = 2\log_2 5" /></p>
                <p><strong>第②步</strong>（推论②）：<Math tex="\log_{\sqrt{5}} 8 = \log_{5^{\frac{1}{2}}} 2^3 = \dfrac{3}{\,\frac{1}{2}\,}\log_5 2 = 6\log_5 2" /></p>
                <p className="border-t border-gray-200 pt-0.5"><strong>第③步</strong>（链式）：<Math tex="2\log_2 5 \times 6\log_5 2 = 12 \times \log_2 5 \cdot \log_5 2 = 12 \times \log_2 2 = 12 \times 1 = 12" /></p>
                <p className="border-t border-gray-200 pt-0.5"><strong>第④步</strong>：后半部分提负号：<Math tex="-\lg 4 - 2\lg 5 = -(\lg 4 + 2\lg 5)" />，其中（法则③）：<Math tex="2\lg 5 = \lg 5^2 = \lg 25" /></p>
                <p className="border-t border-gray-200 pt-0.5"><strong>第⑤步</strong>（法则①，加变乘）：<Math tex="\lg 4 + \lg 25 = \lg(4 \times 25) = \lg 100 = 2" />，所以原式 <Math tex="= 12 - 2 = 10" /></p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-3 py-0.5 bg-amber-50 grid grid-cols-[auto_1fr_1fr] gap-x-4">
                <p className="font-bold">练一练</p>
                <p>① <Math tex="\lg^2 5 + \lg 2 \cdot \lg 50 = \underline{\qquad\qquad}" /></p>
                <p>② <Math tex="3^{\log_3 2} - \log_2 \frac{1}{4} = \underline{\qquad\qquad}" /></p>
                <span></span>
                <p>③ <Math tex="\log_3 4 \times \log_8 27 = \underline{\qquad\qquad}" /></p>
                <p>④ <Math tex="\lg 25 + \lg 2 \cdot \lg 50 = \underline{\qquad\qquad}" /></p>
                <span></span>
                <p>⑤ <Math tex="\log_{\sqrt{2}} 8 = \underline{\qquad\qquad}" /></p>
                <p>⑥ <Math tex="\log_2 5 \cdot \log_{25} 8 + 5^{\log_5 3} = \underline{\qquad\qquad}" /></p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">本页公式汇总</div>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-2 py-0.5 text-center">名称</th>
                    <th className="border border-gray-300 px-2 py-0.5 text-center">公式</th>
                    <th className="border border-gray-300 px-2 py-0.5 text-center">名称</th>
                    <th className="border border-gray-300 px-2 py-0.5 text-center">公式</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-2 py-0.5 text-center">恒等式①（先对后指）</td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="a^{\log_a N} = N" /></td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center">恒等式②（先指后对）</td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="\log_a a^n = n" /></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-0.5 text-center">换底公式</td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="\log_a b = \dfrac{\log_c b}{\log_c a}" /></td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center">推论①（底真互换）</td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="\log_a b \cdot \log_b a = 1" /></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-0.5 text-center">推论②（指数提前）</td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="\log_{a^m} b^n = \dfrac{n}{m} \log_a b" /></td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center">推论③（链式恒等式）</td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="\log_a b \cdot \log_b c = \log_a c" /></td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* Section 2: 指数对数综合运算 */}
      {/* ════════════════════════════════════════════════════════════ */}
      <section id="ef-combined" className="mb-0 scroll-mt-4">
        <Collapsible title="分组二、指数对数综合运算" defaultOpen storageKey="elem-func:combined">
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">核心思路：指数和对数可以互相转化，遇到混合运算时统一成同一种形式</div>
              <div className="px-3 py-0.5">
                <p>① 指数式 → 对数式（或反过来），让已知条件变成可用的对数形式</p>
                <p>② 换底公式统一底数，把不同底的对数都换成同一个底</p>
                <p>③ 用法则拆分合并，凑已知条件求结果</p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-0.5 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例1. 已知 <Math tex="2^a = 5^b = 100" />，求 <Math tex="\dfrac{1}{a} + \dfrac{1}{b}" /> 的值　<span className="font-normal">思路：指数式转对数式，再利用对数法则合并</span></div>
              <div className="px-3 py-0.5">
                <p><strong>第①步</strong>（指数式 → 对数式，再用推论①底真互换：<Math tex="\dfrac{1}{\log_a b} = \log_b a" />）：</p>
                <p><Math tex="2^a = 100" />，得 <Math tex="a = \log_2 100" />，即 <Math tex="\dfrac{1}{a} = \dfrac{1}{\log_2 100} = \log_{100} 2" /></p>
                <p className="border-t border-gray-200 pt-0.5"><Math tex="5^b = 100" />，得 <Math tex="b = \log_5 100" />，即 <Math tex="\dfrac{1}{b} = \dfrac{1}{\log_5 100} = \log_{100} 5" /></p>
                <p className="border-t border-gray-200 pt-0.5"><strong>第②步</strong>（法则①，加法变乘法）：</p>
                <p><Math tex="\dfrac{1}{a} + \dfrac{1}{b} = \log_{100} 2 + \log_{100} 5 = \log_{100}(2 \times 5) = \log_{10^2} 10 = \dfrac{1}{2}\log_{10} 10 = \dfrac{1}{2} \times 1 = \dfrac{1}{2}" /></p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-0.5 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例2. 已知 <Math tex="\log_{18} 9 = a" />，<Math tex="18^b = 5" />，求 <Math tex="\log_{36} 45" />　<span className="font-normal">思路：统一换成以 18 为底，用 a、b 表示</span></div>
              <div className="px-3 py-0.5">
                <p><strong>第①步</strong>（整理已知）：<Math tex="\log_{18} 9 = a" />，<Math tex="18^b = 5" /> 转成对数式得 <Math tex="\log_{18} 5 = b" /></p>
                <p className="border-t border-gray-200 pt-0.5"><strong>第②步</strong>（换底公式，统一成以 18 为底）：</p>
                <table className="my-0.5"><tbody>
                  <tr><td rowSpan={2} className="pr-1 align-middle"><Math tex="\log_{36} 45 =" /></td><td className="pr-1 border-b border-gray-400"><Math tex="\log_{18} 45" /></td><td className="pl-2 border-b border-gray-300">← <strong>第③步</strong>（法则①）：<Math tex="= \log_{18}(9 \times 5) = \log_{18} 9 + \log_{18} 5 = a + b" /></td></tr>
                  <tr><td className="pr-1"><Math tex="\log_{18} 36" /></td><td className="pl-2">← <strong>第④步</strong>（法则①）：<Math tex="= \log_{18}(18 \times 2) = \log_{18} 18 + \log_{18} 2 = 1 + \log_{18} 2" /></td></tr>
                </tbody></table>
                <p>其中 <Math tex="\log_{18} 2" /> 无法直接算出，但我们可以利用法则②，结合已知条件：<Math tex="2 = \dfrac{18}{9}" /></p>
                <p>得 <Math tex="\log_{18} 2 = \log_{18} \dfrac{18}{9} = \log_{18} 18 - \log_{18} 9 = 1 - a" />，所以分母 <Math tex="= 1 + (1 - a) = 2 - a" /></p>
                <p className="border-t border-gray-200 pt-0.5"><strong>结论</strong>：<Math tex="\log_{36} 45 = \dfrac{a + b}{2 - a}" /></p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-0.5 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例3. 已知 <Math tex="2^a = 3" />，<Math tex="3^b = 5" />，求 <Math tex="\log_{30} 45" />　<span className="font-normal">思路：指数转对数，换底统一，拆分凑条件</span></div>
              <div className="px-3 py-0.5">
                <p><strong>第①步</strong>（指数式 → 对数式）：<Math tex="2^a = 3" /> 得 <Math tex="a = \log_2 3" />，<Math tex="3^b = 5" /> 得 <Math tex="b = \log_3 5" /></p>
                <p className="border-t border-gray-200 pt-0.5"><strong>第②步</strong>（换底公式，统一成以 2 为底）：</p>
                <p>先把 b 也换成以 2 为底：<Math tex="b = \log_3 5 = \dfrac{\log_2 5}{\log_2 3} = \dfrac{\log_2 5}{a}" />，得 <Math tex="\log_2 5 = ab" /></p>
                <p className="border-t border-gray-200 pt-0.5"><strong>第③步</strong>（拆目标，换底成以 2 为底）：</p>
                <table className="my-0.5"><tbody>
                  <tr><td rowSpan={2} className="pr-1 align-middle"><Math tex="\log_{30} 45 =" /></td><td className="pr-1 border-b border-gray-400"><Math tex="\log_2 45" /></td><td className="pl-2 border-b border-gray-300">← <strong>第④步</strong>（法则①③）：<Math tex="= \log_2(9 \times 5) = \log_2 3^2 + \log_2 5 = 2a + ab" /></td></tr>
                  <tr><td className="pr-1"><Math tex="\log_2 30" /></td><td className="pl-2">← <strong>第⑤步</strong>（法则①）：<Math tex="= \log_2(2 \times 3 \times 5) = 1 + a + ab" /></td></tr>
                </tbody></table>
                <p className="border-t border-gray-200 pt-0.5"><strong>结论</strong>：<Math tex="\log_{30} 45 = \dfrac{2a + ab}{1 + a + ab}" /></p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-0.5 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例4. 已知 <Math tex="125^x = 12.5^y = 1000" />，求 <Math tex="\dfrac{y - x}{xy}" />　<span className="font-normal">思路：拆目标式，推论①互换，法则②合并</span></div>
              <div className="px-3 py-0.5">
                <div className="grid grid-cols-2">
                  <div><p><strong>第①步</strong>（指数式 → 对数式）：</p>
                  <p><Math tex="125^x = 1000" />，得 <Math tex="x = \log_{125} 1000" /></p>
                  <p><Math tex="12.5^y = 1000" />，得 <Math tex="y = \log_{12.5} 1000" /></p></div>
                  <p><strong>第②步</strong>（拆目标）：<Math tex="\dfrac{y - x}{xy} = \dfrac{1}{x} - \dfrac{1}{y}" /></p>
                </div>
                <p className="border-t border-gray-200 pt-0.5"><strong>第③步</strong>（用推论①底真互换）：</p>
                <p><Math tex="\dfrac{1}{x} = \dfrac{1}{\log_{125} 1000} = \log_{1000} 125" />，<Math tex="\dfrac{1}{y} = \dfrac{1}{\log_{12.5} 1000} = \log_{1000} 12.5" /></p>
                <p className="border-t border-gray-200 pt-0.5"><strong>第④步</strong>（法则②，减法变除法）：<Math tex="\dfrac{1}{x} - \dfrac{1}{y} = \log_{1000} 125 - \log_{1000} 12.5 = \log_{1000} \dfrac{125}{12.5} = \log_{1000} 10 = \dfrac{1}{3}" /></p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">动手算一算</div>
              <div className="px-3 py-0.5 grid grid-cols-2 gap-x-4 gap-y-0.5 text-base">
                <p>1. 已知 <Math tex="3^a = 2" />，求 <Math tex="\log_9 8" /></p>
                <p>2. 已知 <Math tex="\lg 2 = a" />，求 <Math tex="\lg 50" /></p>
                <p>3. <Math tex="\log_2 3 \cdot \log_3 7 \cdot \log_7 8 =" /></p>
                <p>4. <Math tex="2^{1+\log_2 3} =" /></p>
                <p>5. 已知 <Math tex="2^a = 5^b = 10" />，求 <Math tex="\dfrac{1}{a} + \dfrac{1}{b}" /></p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak />
      {/* ════════════════════════════════════════════════════════════ */}
      {/* Section 3: 指数函数 */}
      {/* ════════════════════════════════════════════════════════════ */}
      <section id="ef-exp-func" className="mb-0 scroll-mt-4">
        <Collapsible title="三、指数函数" defaultOpen storageKey="elem-func:exp-func" headerExtra={<SpeakButton text={elemFuncNarrations.exponentialFunc} />}>
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">指数函数性质总结</div>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-2 py-1 text-left">性质</th>
                    <th className="border border-gray-300 px-2 py-1 text-center">底数 <Math tex="a" /> &gt; 1</th>
                    <th className="border border-gray-300 px-2 py-1 text-center">0 &lt; 底数 <Math tex="a" /> &lt; 1</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 font-bold align-middle">图像</td>
                    <td className="border border-gray-300 px-2 py-1 text-center"><DebugGeo2dSvg data={expIncDiagram} width={140} height={108} /></td>
                    <td className="border border-gray-300 px-2 py-1 text-center"><DebugGeo2dSvg data={expDecDiagram} width={140} height={108} /></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 font-bold">定义域</td>
                    <td className="border border-gray-300 px-2 py-1 text-center" colSpan={2}><Math tex="\mathbb{R}" />（任何实数）</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 font-bold">值域</td>
                    <td className="border border-gray-300 px-2 py-1 text-center" colSpan={2}><Math tex="(0, +\infty)" />（永远大于 0）</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 font-bold">过定点</td>
                    <td className="border border-gray-300 px-2 py-1 text-center" colSpan={2}><strong>所有指数函数都过点 <Math tex="(0, 1)" /></strong>（因为 <Math tex="a^0 = 1" />，高考高频考点！）</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 font-bold">单调性</td>
                    <td className="border border-gray-300 px-2 py-1 text-center"><strong>增函数</strong>（<Math tex="x" /> 越大，<Math tex="y" /> 也越大）</td>
                    <td className="border border-gray-300 px-2 py-1 text-center"><strong>减函数</strong>（<Math tex="x" /> 越大，<Math tex="y" /> 反而越小）</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 font-bold">图像特征</td>
                    <td className="border border-gray-300 px-2 py-1 text-center">向右急速上升，向左贴着 <Math tex="x" /> 轴走</td>
                    <td className="border border-gray-300 px-2 py-1 text-center">向左急速上升，向右贴着 <Math tex="x" /> 轴走</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 font-bold">奇偶性</td>
                    <td className="border border-gray-300 px-2 py-1 text-center" colSpan={2}>非奇非偶（图像不关于原点或 <Math tex="y" /> 轴对称）</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 font-bold">对称</td>
                    <td className="border border-gray-300 px-2 py-1 text-center" colSpan={2}>底数互为倒数时（如 <Math tex="2" /> 和 <Math tex="\frac{1}{2}" />），图像关于 <Math tex="y" /> 轴对称</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">先认识三个名字（后面会反复用到）</div>
              <div className="py-1 text-center text-lg">
                <Math tex="y = {\underbrace{a}_{\mathclap{\text{底数（常数）}}}}{\vphantom{a}}^{\,\overbrace{x}^{\text{指数（变量）}}}" />
              </div>
              <div className="grid grid-cols-3 border-t border-gray-300">
                <div className="px-1 py-0.5 text-center border-r border-gray-300">
                  <p><strong>底数 <Math tex="a" /></strong>：固定不变的常数</p>
                </div>
                <div className="px-1 py-0.5 text-center border-r border-gray-300">
                  <p><strong>指数 <Math tex="x" /></strong>：变量，写在右上角</p>
                </div>
                <div className="px-1 py-0.5 text-center">
                  <p><strong><Math tex="y" /></strong>：函数值（结果）</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 text-gray-800 border-b border-gray-400 bg-gray-100 flex items-center justify-center gap-6">
                <span>指数函数的标准形式</span>
                <Math tex="\boldsymbol{y = a^x \quad (a > 0 \text{ 且 } a \neq 1)}" />
              </div>
              <div className="px-3 py-0.5">
                <p><Math tex="a > 0" />：底数必须是<strong>正数</strong>。如果 <Math tex="a < 0" />，比如 <Math tex="(-2)^{0.5} = \sqrt{-2}" />，在实数范围内无意义</p>
                <p className="pl-[3.9em]">如果 <Math tex="a = 0" />，比如 <Math tex="0^{-1} = \frac{1}{0}" />，同样无意义。只有 <Math tex="a > 0" /> 才能保证对任意实数 <Math tex="x" /> 都能算出结果</p>
                <p><Math tex="a \neq 1" />：如果 <Math tex="a = 1" />，<Math tex="1^x" /> 永远等于 1，是条水平线，没研究价值</p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">算几个值，看看规律</div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div className="px-3 py-0.5">
                  <p className="font-bold mb-0.5"><Math tex="y = 2^x" />（<Math tex="\text{底数 } 2 > 1" />）</p>
                  <table className="w-full border-collapse">
                    <thead><tr className="bg-blue-50">
                      <th className="border border-gray-300 px-1.5 py-0.5 text-center"><Math tex="x" /></th>
                      <th className="border border-gray-300 px-1.5 py-0.5 text-center">-2</th>
                      <th className="border border-gray-300 px-1.5 py-0.5 text-center">-1</th>
                      <th className="border border-gray-300 px-1.5 py-0.5 text-center">0</th>
                      <th className="border border-gray-300 px-1.5 py-0.5 text-center">1</th>
                      <th className="border border-gray-300 px-1.5 py-0.5 text-center">2</th>
                      <th className="border border-gray-300 px-1.5 py-0.5 text-center">3</th>
                    </tr></thead>
                    <tbody><tr>
                      <td className="border border-gray-300 px-1.5 py-0.5 text-center font-bold"><Math tex="y" /></td>
                      <td className="border border-gray-300 px-1.5 py-0.5 text-center"><Math tex="\frac{1}{4}" /></td>
                      <td className="border border-gray-300 px-1.5 py-0.5 text-center"><Math tex="\frac{1}{2}" /></td>
                      <td className="border border-gray-300 px-1.5 py-0.5 text-center font-bold text-blue-700">1</td>
                      <td className="border border-gray-300 px-1.5 py-0.5 text-center">2</td>
                      <td className="border border-gray-300 px-1.5 py-0.5 text-center">4</td>
                      <td className="border border-gray-300 px-1.5 py-0.5 text-center">8</td>
                    </tr></tbody>
                  </table>
                  <p className="mt-0.5"><Math tex="x" /> 越大，<Math tex="y" /> 越大（<strong>增函数</strong>）</p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="px-3 py-0.5">
                  <p className="font-bold mb-0.5"><Math tex="y = \left(\frac{1}{2}\right)^x" />（<Math tex="0 < \text{底数 } 0.5 < 1" />）</p>
                  <table className="w-full border-collapse">
                    <thead><tr className="bg-green-50">
                      <th className="border border-gray-300 px-1.5 py-0.5 text-center"><Math tex="x" /></th>
                      <th className="border border-gray-300 px-1.5 py-0.5 text-center">-2</th>
                      <th className="border border-gray-300 px-1.5 py-0.5 text-center">-1</th>
                      <th className="border border-gray-300 px-1.5 py-0.5 text-center">0</th>
                      <th className="border border-gray-300 px-1.5 py-0.5 text-center">1</th>
                      <th className="border border-gray-300 px-1.5 py-0.5 text-center">2</th>
                      <th className="border border-gray-300 px-1.5 py-0.5 text-center">3</th>
                    </tr></thead>
                    <tbody><tr>
                      <td className="border border-gray-300 px-1.5 py-0.5 text-center font-bold"><Math tex="y" /></td>
                      <td className="border border-gray-300 px-1.5 py-0.5 text-center">4</td>
                      <td className="border border-gray-300 px-1.5 py-0.5 text-center">2</td>
                      <td className="border border-gray-300 px-1.5 py-0.5 text-center font-bold text-green-700">1</td>
                      <td className="border border-gray-300 px-1.5 py-0.5 text-center"><Math tex="\frac{1}{2}" /></td>
                      <td className="border border-gray-300 px-1.5 py-0.5 text-center"><Math tex="\frac{1}{4}" /></td>
                      <td className="border border-gray-300 px-1.5 py-0.5 text-center"><Math tex="\frac{1}{8}" /></td>
                    </tr></tbody>
                  </table>
                  <p className="mt-0.5"><Math tex="x" /> 越大，<Math tex="y" /> 越小（<strong>减函数</strong>）</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-3 py-0.5">
                <p><strong>特性</strong>：不管底数是多少，<Math tex="x = 0" /> 时 <Math tex="y" /> 都等于 1，因为任何正数的 0 次方都是 1，即 <Math tex="a^0 = 1" /></p>
              </div>
            </div>

            <PageBreak />
            <div className="text-base">
              <PracticeCard
                title="即时练习：指数函数（7题）"
                questions={elemFuncPractice2}
                optionCols={4}
                printOptionCols={4}
                explanations={elementaryFuncExplanations}
              />
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">知识串联：指数与对数的关系</div>
              <div className="px-3 py-0.5">
                <p>指数和对数是<strong>互逆运算</strong>，就像加法和减法、乘法和除法一样：</p>
                <p className="text-center my-0.5"><Math tex="a^b = N \;\Longleftrightarrow\; \log_a N = b" /></p>
                <p>例：<Math tex="2^3 = 8 \;\Longleftrightarrow\; \log_2 8 = 3" />（"2 的 3 次方等于 8" ↔ "8 以 2 为底的对数是 3"）</p>
                <p className="font-bold">记住这个关系，指数对数混合题就不难了！</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* Section 3: 对数函数 */}
      {/* ════════════════════════════════════════════════════════════ */}
      <section id="ef-log-func" className="mb-0 scroll-mt-4">
        <Collapsible title="四、对数函数" defaultOpen storageKey="elem-func:log-func" headerExtra={<SpeakButton text={elemFuncNarrations.logarithmicFunc} />}>
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">对数函数性质总结</div>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-2 py-1 text-left">性质</th>
                    <th className="border border-gray-300 px-2 py-1 text-center">底数 <Math tex="a" /> &gt; 1</th>
                    <th className="border border-gray-300 px-2 py-1 text-center">0 &lt; 底数 <Math tex="a" /> &lt; 1</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 font-bold align-middle">图像</td>
                    <td className="border border-gray-300 px-2 py-1 text-center"><DebugGeo2dSvg data={logIncDiagram} width={140} height={108} /></td>
                    <td className="border border-gray-300 px-2 py-1 text-center"><DebugGeo2dSvg data={logDecDiagram} width={140} height={108} /></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 font-bold">定义域</td>
                    <td className="border border-gray-300 px-2 py-1 text-center" colSpan={2}><Math tex="(0, +\infty)" />（<Math tex="x" /> 必须大于 0，负数和 0 没有对数）</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 font-bold">值域</td>
                    <td className="border border-gray-300 px-2 py-1 text-center" colSpan={2}><Math tex="\mathbb{R}" />（<Math tex="y" /> 可以是任何实数，正负都可以）</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 font-bold">过定点</td>
                    <td className="border border-gray-300 px-2 py-1 text-center" colSpan={2}><strong>所有对数函数都过点 <Math tex="(1, 0)" /></strong>（因为 <Math tex="\log_a 1 = 0" />，高考高频考点！）</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 font-bold">单调性</td>
                    <td className="border border-gray-300 px-2 py-1 text-center"><strong>增函数</strong>（<Math tex="x" /> 越大，<Math tex="y" /> 也越大）</td>
                    <td className="border border-gray-300 px-2 py-1 text-center"><strong>减函数</strong>（<Math tex="x" /> 越大，<Math tex="y" /> 反而越小）</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 font-bold"><Math tex="y" /> 的正负</td>
                    <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="x > 1" /> 时 <Math tex="y > 0" />；<Math tex="0 < x < 1" /> 时 <Math tex="y < 0" /></td>
                    <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="x > 1" /> 时 <Math tex="y < 0" />；<Math tex="0 < x < 1" /> 时 <Math tex="y > 0" /></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">先认识三个名字（后面会反复用到）</div>
              <div className="py-1 text-center text-lg">
                <Math tex="y = \log_{\underbrace{a}_{\mathclap{\text{底数（常数）}}}} \overbrace{x}^{\text{真数（变量）}}" />
              </div>
              <div className="grid grid-cols-3 border-t border-gray-300">
                <div className="px-1 py-0.5 text-center border-r border-gray-300">
                  <p><strong>底数 <Math tex="a" /></strong>：写在 log 右下角的常数</p>
                </div>
                <div className="px-1 py-0.5 text-center border-r border-gray-300">
                  <p><strong>真数 <Math tex="x" /></strong>：log 后面跟着的数，是变量</p>
                </div>
                <div className="px-1 py-0.5 text-center">
                  <p><strong><Math tex="y" /></strong>：对数值（结果）</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 text-gray-800 border-b border-gray-400 bg-gray-100 flex items-center justify-center gap-6">
                <span>对数函数的标准形式</span>
                <Math tex="\boldsymbol{y = \log_a x \quad (a > 0 \text{ 且 } a \neq 1,\ x > 0)}" />
              </div>
              <div className="px-3 py-0.5">
                <p><Math tex="a > 0" /> 且 <Math tex="a \neq 1" />：和指数函数一样的限制（因为对数是指数的逆运算）</p>
                <p><Math tex="x > 0" />：<strong>真数必须是正数</strong>。原因是 <Math tex="\log_2 x" /> 问"2 的几次方等于 <Math tex="x" />"，而底数永远大于 0 且不等于 1，所以 <Math tex="x" /> 不可能为 0 或负数</p>
                <p>常用简写：<Math tex="\lg x = \log_{10} x" />（以 10 为底），<Math tex="\ln x = \log_e x" />（以 <Math tex="e \approx 2.718" /> 为底）</p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">算几个值，看看规律</div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div className="px-3 py-0.5">
                  <p className="font-bold mb-0.5"><Math tex="y = \log_2 x" />（底数 2，比 1 大）</p>
                  <table className="w-full border-collapse">
                    <thead><tr className="bg-blue-50">
                      <th className="border border-gray-300 px-1.5 py-0.5 text-center"><Math tex="x" /></th>
                      <th className="border border-gray-300 px-1.5 py-0.5 text-center"><Math tex="\tfrac{1}{4}" /></th>
                      <th className="border border-gray-300 px-1.5 py-0.5 text-center"><Math tex="\tfrac{1}{2}" /></th>
                      <th className="border border-gray-300 px-1.5 py-0.5 text-center">1</th>
                      <th className="border border-gray-300 px-1.5 py-0.5 text-center">2</th>
                      <th className="border border-gray-300 px-1.5 py-0.5 text-center">4</th>
                      <th className="border border-gray-300 px-1.5 py-0.5 text-center">8</th>
                    </tr></thead>
                    <tbody><tr>
                      <td className="border border-gray-300 px-1.5 py-0.5 text-center font-bold"><Math tex="y" /></td>
                      <td className="border border-gray-300 px-1.5 py-0.5 text-center">-2</td>
                      <td className="border border-gray-300 px-1.5 py-0.5 text-center">-1</td>
                      <td className="border border-gray-300 px-1.5 py-0.5 text-center font-bold text-blue-700">0</td>
                      <td className="border border-gray-300 px-1.5 py-0.5 text-center">1</td>
                      <td className="border border-gray-300 px-1.5 py-0.5 text-center">2</td>
                      <td className="border border-gray-300 px-1.5 py-0.5 text-center">3</td>
                    </tr></tbody>
                  </table>
                  <p className="mt-0.5"><Math tex="x" /> 越大，<Math tex="y" /> 越大（<strong>增函数</strong>）</p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="px-3 py-0.5">
                  <p className="font-bold mb-0.5"><Math tex="y = \log_{0.5} x" />（底数 0.5，比 1 小）</p>
                  <table className="w-full border-collapse">
                    <thead><tr className="bg-green-50">
                      <th className="border border-gray-300 px-1.5 py-0.5 text-center"><Math tex="x" /></th>
                      <th className="border border-gray-300 px-1.5 py-0.5 text-center"><Math tex="\tfrac{1}{4}" /></th>
                      <th className="border border-gray-300 px-1.5 py-0.5 text-center"><Math tex="\tfrac{1}{2}" /></th>
                      <th className="border border-gray-300 px-1.5 py-0.5 text-center">1</th>
                      <th className="border border-gray-300 px-1.5 py-0.5 text-center">2</th>
                      <th className="border border-gray-300 px-1.5 py-0.5 text-center">4</th>
                      <th className="border border-gray-300 px-1.5 py-0.5 text-center">8</th>
                    </tr></thead>
                    <tbody><tr>
                      <td className="border border-gray-300 px-1.5 py-0.5 text-center font-bold"><Math tex="y" /></td>
                      <td className="border border-gray-300 px-1.5 py-0.5 text-center">2</td>
                      <td className="border border-gray-300 px-1.5 py-0.5 text-center">1</td>
                      <td className="border border-gray-300 px-1.5 py-0.5 text-center font-bold text-green-700">0</td>
                      <td className="border border-gray-300 px-1.5 py-0.5 text-center">-1</td>
                      <td className="border border-gray-300 px-1.5 py-0.5 text-center">-2</td>
                      <td className="border border-gray-300 px-1.5 py-0.5 text-center">-3</td>
                    </tr></tbody>
                  </table>
                  <p className="mt-0.5"><Math tex="x" /> 越大，<Math tex="y" /> 越小（<strong>减函数</strong>）</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-3 py-0.5">
                <p><strong>特性</strong>：不管底数是多少，<Math tex="x = 1" /> 时 <Math tex="y" /> 都等于 0，因为任何正数的对数在真数为 1 时都是 0，即 <Math tex="\log_a 1 = 0" /></p>
              </div>
            </div>


            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">怎么比较两个对数值的大小？— 估值定位法（万能）</div>
              <div className="px-3 py-0.5">
                <p><strong>核心思路</strong>：找到底数的哪两个连续幂把真数夹住，对应的指数就是值的范围</p>
                <p className="pl-4">例如 <Math tex="\log_2 5" />：找到 <Math tex="2^2\!=\!4 < 5 < 8\!=\!2^3" />，取对数得 <Math tex="2 < \log_2 5 < 3" /></p>
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div className="pl-3 py-0.5">
                  <p><strong>例1：</strong>比较 <Math tex="\log_2 3" /> 和 <Math tex="\log_3 2" /></p>
                  <p className="pl-4"><Math tex="\log_2 3" />：<Math tex="2^1\!=\!2 < 3 < 4\!=\!2^2" />，值在 1 到 2 之间（<strong>大于 1</strong>）</p>
                  <p className="pl-4"><Math tex="\log_3 2" />：<Math tex="1 < 2 < 3\!=\!3^1" />，值在 0 到 1 之间（<strong>小于 1</strong>）</p>
                  <p className="pl-4">一个大于 1 一个小于 1，得 <Math tex="\log_2 3 > \log_3 2" /></p>
                </div>
                <div className="w-px bg-gray-300 self-stretch"></div>
                <div className="pr-3 py-0.5">
                  <p><strong>例2：</strong>比较 <Math tex="\log_2 5" /> 和 <Math tex="\log_2 3" /></p>
                  <p className="pl-4"><Math tex="\log_2 5" />：<Math tex="2^2\!=\!4 < 5 < 8\!=\!2^3" />，值在 2 到 3 之间</p>
                  <p className="pl-4"><Math tex="\log_2 3" />：<Math tex="2^1\!=\!2 < 3 < 4\!=\!2^2" />，值在 1 到 2 之间</p>
                  <p className="pl-4">一个大于 2 一个小于 2，得 <Math tex="\log_2 5 > \log_2 3" /></p>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">定位后区间相同怎么办？— 记住 lg2 和 lg3，换底硬算</div>
              <div className="px-3 py-0.5">
                <p>只需记住两个数：<Math tex="\lg 2 \approx 0.30" />，<Math tex="\lg 3 \approx 0.48" />，然后利用对数法则，其他都能推出来：</p>
                <div className="grid grid-cols-2 pl-4">
                  <p><Math tex="\lg 4 = \lg 2 + \lg 2 = 0.60" /></p>
                  <p><Math tex="\lg 5 = \lg \tfrac{10}{2} = \lg 10 - \lg 2 = 1 - \lg 2 = 0.70" /></p>
                  <p><Math tex="\lg 6 = \lg 2 + \lg 3 = 0.78" /></p>
                  <p><Math tex="\lg 8 = 3\lg 2 = 0.90" /></p>
                  <p><Math tex="\lg 9 = 2\lg 3 = 0.96" /></p>
                </div>
                <p className="border-t border-gray-300 pt-0.5 mt-0.5">例：比较 <Math tex="\log_5 8" /> 和 <Math tex="\log_7 11" />。先定位：都在 1 到 2 之间，分不出来</p>
                <p className="pl-4">换底硬算：<Math tex="\log_5 8 = \dfrac{\lg 8}{\lg 5} = \dfrac{0.90}{0.70} \approx 1.29" />，<Math tex="\log_7 11 = \dfrac{\lg 11}{\lg 7} \approx \dfrac{1.04}{0.85} \approx 1.22" /></p>
                <p className="pl-4">得 <Math tex="\log_5 8 > \log_7 11" /></p>
                <p className="border-t border-gray-300 pt-0.5 mt-0.5"><strong>试一试</strong>：</p>
                <p className="pl-4">①  比较 <Math tex="\log_2 3" /> 和 <Math tex="\log_3 5" /> 的大小</p>
                <p className="pl-4">②  比较 <Math tex="\log_4 6" /> 和 <Math tex="\log_3 4" /> 的大小</p>
              </div>
            </div>

            <p className="font-bold text-center my-2">记忆口诀：先定位（跟 0、1、2 比），分不出就换底硬算（记住 lg2 和 lg3）</p>


            <div className="text-base">
              <PracticeCard
                title="即时练习：对数函数（7题）"
                questions={elemFuncPractice3}
                optionCols={4}
                printOptionCols={4}
                explanations={elementaryFuncExplanations}
              />
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">指数函数 vs 对数函数——对比记忆</div>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-2 py-1 text-left"></th>
                    <th className="border border-gray-300 px-2 py-1 text-center">指数函数 <Math tex="y = a^x" /></th>
                    <th className="border border-gray-300 px-2 py-1 text-center">对数函数 <Math tex="y = \log_a x" /></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 font-bold">定义域</td>
                    <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="\mathbb{R}" /></td>
                    <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="(0, +\infty)" /></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 font-bold">值域</td>
                    <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="(0, +\infty)" /></td>
                    <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="\mathbb{R}" /></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 font-bold">过定点</td>
                    <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="(0, 1)" /></td>
                    <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="(1, 0)" /></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 font-bold">单调性</td>
                    <td className="border border-gray-300 px-2 py-1 text-center" colSpan={2}><Math tex="a > 1" /> 增，<Math tex="0 < a < 1" /> 减（<strong>规则完全一样</strong>）</td>
                  </tr>
                </tbody>
              </table>
              <div className="px-3 py-0.5 border-t border-gray-300 text-center"><strong>定义域和值域互换；过的定点 <Math tex="x" /> 和 <Math tex="y" /> 互换</strong></div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* Section 4: 幂函数 */}
      {/* ════════════════════════════════════════════════════════════ */}
      <section id="ef-power-func" className="mb-0 scroll-mt-4">
        <Collapsible title="五、幂函数" defaultOpen storageKey="elem-func:power-func" headerExtra={<SpeakButton text={elemFuncNarrations.powerFunc} />}>
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">你其实早就认识幂函数了！</div>
              <div className="px-3 py-0.5">
                <p><Math tex="y = x" />（正比例函数）、<Math tex="y = x^2" />（抛物线）、<Math tex="y = \frac{1}{x}" />（反比例）—— 这些都是<strong>幂函数</strong>！</p>
                <p>它们的共同特点：<strong>底数是 <Math tex="x" />（变量）</strong>，指数是一个<strong>固定的常数</strong></p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">幂函数的标准形式</div>
              <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50 text-center">
                <Math tex="y = x^{\alpha} \quad (\alpha \text{ 是常数})" />
              </div>
              <div className="px-3 py-0.5">
                <p><Math tex="x" /> 是底数（<strong>变量</strong>），<Math tex="\alpha" /> 是指数（<strong>常数</strong>）</p>
                <p><strong>系数必须是 <Math tex="1" /></strong>：形如 <Math tex="y = 2x^2" />、<Math tex="y = -x^2" /> 的都不是幂函数，也不能有 <Math tex="+1" />、<Math tex="-3" /> 等加减项</p>
                <p>和指数函数 <Math tex="y = a^x" /> 正好<strong>反过来</strong>：指数函数底数是常数、指数是变量</p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">幂函数 vs 指数函数长得很像，怎么区分？</div>
              <div className="px-3 py-0.5">
                <p><strong>指数函数</strong> <Math tex="y = 2^x" />：底数是常数（<Math tex="2" />），指数是变量（<Math tex="x" />），即 <strong>常数在下</strong></p>
                <p><strong>幂函数</strong> <Math tex="y = x^2" />：底数是变量（<Math tex="x" />），指数是常数（<Math tex="2" />），即 <strong>常数在上</strong></p>
                <p className="font-bold">口诀：常数在上 = 幂函数，常数在下 = 指数函数</p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">高中常考的 5 种幂函数（都是老朋友）</div>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-2 py-1"><Math tex="\alpha" /></th>
                    <th className="border border-gray-300 px-2 py-1 text-center">函数</th>
                    <th className="border border-gray-300 px-2 py-1 text-center">你认识它吗？</th>
                    <th className="border border-gray-300 px-2 py-1 text-center">定义域</th>
                    <th className="border border-gray-300 px-2 py-1 text-center">在 <Math tex="(0,+\infty)" /></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="1" /></td>
                    <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="y = x" /></td>
                    <td className="border border-gray-300 px-2 py-1">正比例函数（直线）</td>
                    <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="\mathbb{R}" /></td>
                    <td className="border border-gray-300 px-2 py-1 text-center text-blue-700">增</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="2" /></td>
                    <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="y = x^2" /></td>
                    <td className="border border-gray-300 px-2 py-1">抛物线（二次函数）</td>
                    <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="\mathbb{R}" /></td>
                    <td className="border border-gray-300 px-2 py-1 text-center text-blue-700">增</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="3" /></td>
                    <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="y = x^3" /></td>
                    <td className="border border-gray-300 px-2 py-1">三次曲线</td>
                    <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="\mathbb{R}" /></td>
                    <td className="border border-gray-300 px-2 py-1 text-center text-blue-700">增</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="\frac{1}{2}" /></td>
                    <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="y = \sqrt{x}" /></td>
                    <td className="border border-gray-300 px-2 py-1">开根号</td>
                    <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="[0, +\infty)" /></td>
                    <td className="border border-gray-300 px-2 py-1 text-center text-blue-700">增</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="-1" /></td>
                    <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="y = \dfrac{1}{x}" /></td>
                    <td className="border border-gray-300 px-2 py-1">反比例函数</td>
                    <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="x \neq 0" /></td>
                    <td className="border border-gray-300 px-2 py-1 text-center text-red-600">减</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">为什么定义域不统一？</div>
              <div className="px-3 py-0.5">
                <p><Math tex="y = x^2" />：任何数都能平方 <Math tex="\Longrightarrow" /> 定义域 <Math tex="\mathbb{R}" /></p>
                <p><Math tex="y = \sqrt{x}" />：负数不能开根号 <Math tex="\Longrightarrow" /> 定义域 <Math tex="[0, +\infty)" /></p>
                <p><Math tex="y = \frac{1}{x}" />：分母不能为 <Math tex="0" /> <Math tex="\Longrightarrow" /> 定义域 <Math tex="x \neq 0" /></p>
                <p className="font-bold">结论：幂函数的定义域取决于 <Math tex="\alpha" /> 的值，没有统一答案！但都在 <Math tex="(0,+\infty)" /> 上有定义</p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">5种幂函数的图像长什么样？</div>
              <div className="grid grid-cols-5 gap-1 p-1">
                <div className="rounded overflow-hidden border border-gray-200 text-center">
                  <Mafs viewBox={{ x: [-2, 3], y: [-2, 3] }} height={100}>
                    <Coordinates.Cartesian xAxis={{ lines: false, labels: () => '' }} yAxis={{ lines: false, labels: () => '' }} />
                    <Plot.OfX y={(x: number) => x} color="#6b7280" weight={2.5} />
                    <Point x={1} y={1} color="#ef4444" />
                  </Mafs>
                  <p className="text-xs py-0.5"><Math tex="y = x" /></p>
                </div>
                <div className="rounded overflow-hidden border border-blue-200 text-center">
                  <Mafs viewBox={{ x: [-2, 2], y: [-0.5, 4] }} height={100}>
                    <Coordinates.Cartesian xAxis={{ lines: false, labels: () => '' }} yAxis={{ lines: false, labels: () => '' }} />
                    <Plot.OfX y={(x: number) => x ** 2} color="#3b82f6" weight={2.5} />
                    <Point x={1} y={1} color="#ef4444" />
                  </Mafs>
                  <p className="text-xs py-0.5"><Math tex="y = x^2" /></p>
                </div>
                <div className="rounded overflow-hidden border border-purple-200 text-center">
                  <Mafs viewBox={{ x: [-1.5, 1.5], y: [-3, 3] }} height={100}>
                    <Coordinates.Cartesian xAxis={{ lines: false, labels: () => '' }} yAxis={{ lines: false, labels: () => '' }} />
                    <Plot.OfX y={(x: number) => x ** 3} color="#8b5cf6" weight={2.5} />
                    <Point x={1} y={1} color="#ef4444" />
                  </Mafs>
                  <p className="text-xs py-0.5"><Math tex="y = x^3" /></p>
                </div>
                <div className="rounded overflow-hidden border border-green-200 text-center">
                  <Mafs viewBox={{ x: [-0.5, 4], y: [-0.5, 3] }} height={100}>
                    <Coordinates.Cartesian xAxis={{ lines: false, labels: () => '' }} yAxis={{ lines: false, labels: () => '' }} />
                    <Plot.OfX y={(x: number) => x > 0 ? x ** 0.5 : NaN} color="#22c55e" weight={2.5} />
                    <Point x={1} y={1} color="#ef4444" />
                  </Mafs>
                  <p className="text-xs py-0.5"><Math tex="y = \sqrt{x}" /></p>
                </div>
                <div className="rounded overflow-hidden border border-red-200 text-center">
                  <Mafs viewBox={{ x: [-0.5, 4], y: [-1, 5] }} height={100}>
                    <Coordinates.Cartesian xAxis={{ lines: false, labels: () => '' }} yAxis={{ lines: false, labels: () => '' }} />
                    <Plot.OfX y={(x: number) => x > 0.08 ? 1 / x : NaN} color="#ef4444" weight={2.5} />
                    <Point x={1} y={1} color="#ef4444" />
                  </Mafs>
                  <p className="text-xs py-0.5"><Math tex="y = \frac{1}{x}" /></p>
                </div>
              </div>
              <div className="px-3 py-0.5 border-t border-gray-300 text-center">红色点 = 公共定点 <Math tex="(1, 1)" />，前4个 <Math tex="\alpha > 0" /> 递增，最后1个 <Math tex="\alpha < 0" /> 递减</div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">幂函数核心性质（4条铁律）</div>
              <div className="px-3 py-0.5">
                <p><strong>①</strong> 所有幂函数在 <Math tex="(0, +\infty)" /> 上都有定义（不管 <Math tex="\alpha" /> 是多少）</p>
                <p><strong>②</strong> 所有幂函数都过点 <Math tex="(1, 1)" />（因为 <Math tex="1^{\alpha} = 1" />，1 的任何次方都是 1）</p>
                <p><strong>③</strong> <Math tex="\alpha > 0" /> → 在 <Math tex="(0, +\infty)" /> 上<strong>递增</strong>（<Math tex="\alpha = 1, 2, 3, \frac{1}{2}" /> 都是增函数）</p>
                <p><strong>④</strong> <Math tex="\alpha < 0" /> → 在 <Math tex="(0, +\infty)" /> 上<strong>递减</strong>（如 <Math tex="\alpha = -1" /> 的 <Math tex="\frac{1}{x}" />）</p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-3 py-0.5 bg-blue-50 text-center">
                <p><strong>一句话记住增减：<Math tex="\alpha" /> 为正 → 增函数，<Math tex="\alpha" /> 为负 → 减函数（在第一象限）</strong></p>
                <p>和前面的规则完全不同：幂函数<strong>看 <Math tex="\alpha" /> 的正负</strong>，不看底数！</p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">三种函数的"定点"对比（必记！）</div>
              <div className="grid grid-cols-3 border-t border-gray-300">
                <div className="px-3 py-0.5 text-center border-r border-gray-300">指数函数过 <Math tex="(0, 1)" /></div>
                <div className="px-3 py-0.5 text-center border-r border-gray-300">对数函数过 <Math tex="(1, 0)" /></div>
                <div className="px-3 py-0.5 text-center">幂函数过 <Math tex="(1, 1)" /></div>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-0.5 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">综合例题</div>
              <div className="px-3 py-0.5">
                <p><strong>例1.</strong> 比较 <Math tex="3^{0.5}" /> 和 <Math tex="0.5^3" /> 的大小</p>
                <p className="pl-4"><Math tex="3^{0.5} = \sqrt{3} \approx 1.73" />（底数 <Math tex="> 1" /> 且指数 <Math tex="> 0" />，所以结果 <Math tex="> 1" />）</p>
                <p className="pl-4"><Math tex="0.5^3 = 0.125" />（底数在 <Math tex="(0, 1)" /> 且指数 <Math tex="> 0" />，所以结果 <Math tex="< 1" />）</p>
                <p className="pl-4 font-bold">结论：<Math tex="3^{0.5} > 1 > 0.5^3" />（技巧：和 1 比较！）</p>
              </div>
              <div className="px-3 py-0.5 border-t border-gray-300">
                <p><strong>例2.</strong> 判断 <Math tex="y = x^{-2}" /> 在 <Math tex="(0, +\infty)" /> 上的单调性</p>
                <p className="pl-4"><Math tex="\alpha = -2 < 0" /> → 在 <Math tex="(0, +\infty)" /> 上是<strong>减函数</strong></p>
                <p className="pl-4">验证：<Math tex="x=1 \to y=1" />，<Math tex="x=2 \to y=0.25" />，<Math tex="x=3 \to y \approx 0.11" />，越来越小</p>
              </div>
              <div className="px-3 py-0.5 border-t border-gray-300">
                <p><strong>例3.</strong> 判断 <Math tex="y = 3x^2" /> 是不是幂函数</p>
                <p className="pl-4">不是！幂函数要求 <Math tex="y = x^{\alpha}" /> 形式，系数只能是 <Math tex="1" />。这里系数是 <Math tex="3" /></p>
              </div>
            </div>

            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">四种基本初等函数大总结</div>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-2 py-1">函数</th>
                    <th className="border border-gray-300 px-2 py-1">形式</th>
                    <th className="border border-gray-300 px-2 py-1">谁是变量？</th>
                    <th className="border border-gray-300 px-2 py-1">过定点</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-300 px-2 py-1">指数函数</td><td className="border border-gray-300 px-2 py-1 text-center"><Math tex="y = a^x" /></td><td className="border border-gray-300 px-2 py-1"><Math tex="x" /> 在指数位置</td><td className="border border-gray-300 px-2 py-1 text-center"><Math tex="(0, 1)" /></td></tr>
                  <tr><td className="border border-gray-300 px-2 py-1">对数函数</td><td className="border border-gray-300 px-2 py-1 text-center"><Math tex="y = \log_a x" /></td><td className="border border-gray-300 px-2 py-1"><Math tex="x" /> 在真数位置</td><td className="border border-gray-300 px-2 py-1 text-center"><Math tex="(1, 0)" /></td></tr>
                  <tr><td className="border border-gray-300 px-2 py-1">幂函数</td><td className="border border-gray-300 px-2 py-1 text-center"><Math tex="y = x^{\alpha}" /></td><td className="border border-gray-300 px-2 py-1"><Math tex="x" /> 在底数位置</td><td className="border border-gray-300 px-2 py-1 text-center"><Math tex="(1, 1)" /></td></tr>
                </tbody>
              </table>
            </div>

            <div className="text-base">
              <PracticeCard
                title="即时练习：综合（10题，覆盖对数运算 / 指数 / 对数 / 幂函数）"
                questions={elemFuncPractice4}
                optionCols={4}
                printOptionCols={4}
                explanations={elementaryFuncExplanations}
              />
            </div>

            {/* ════════════════════════════════════════════════════════════ */}
            {/* 大总结卡片 */}
            {/* ════════════════════════════════════════════════════════════ */}
            <div className="border-2 border-gray-500 rounded overflow-hidden mt-2">
              <div className="px-3 py-1 font-bold text-gray-900 border-b-2 border-gray-500 bg-amber-50 text-center">3.2 基本初等函数 · 一表全掌握</div>

              {/* 对数公式速记 */}
              <div className="px-2 py-0.5 font-bold text-gray-800 border-b border-gray-300 bg-gray-100">对数公式速记（底数 <Math tex="a > 0,\ a \neq 1" />，真数 <Math tex="M, N > 0" />）</div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 px-3 py-1">
                <p><strong>积</strong>：<Math tex="\log_a(MN) = \log_a M + \log_a N" /></p>
                <p><strong>商</strong>：<Math tex="\log_a\dfrac{M}{N} = \log_a M - \log_a N" /></p>
                <p><strong>幂</strong>：<Math tex="\log_a M^n = n\log_a M" /></p>
                <p><strong>换底</strong>：<Math tex="\log_a N = \dfrac{\log_c N}{\log_c a}" /></p>
                <p><strong>恒等式</strong>：<Math tex="a^{\log_a N} = N" /></p>
                <p><strong>恒等式</strong>：<Math tex="\log_a a^n = n" /></p>
              </div>

              {/* 三大函数对比表 */}
              <div className="px-2 py-0.5 font-bold text-gray-800 border-y border-gray-300 bg-gray-100">三大函数对比</div>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-2 py-0.5 text-left w-28">项目</th>
                    <th className="border border-gray-300 px-2 py-0.5 text-center">指数函数 <Math tex="y = a^x" /></th>
                    <th className="border border-gray-300 px-2 py-0.5 text-center">对数函数 <Math tex="y = \log_a x" /></th>
                    <th className="border border-gray-300 px-2 py-0.5 text-center">幂函数 <Math tex="y = x^{\alpha}" /></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-2 py-0.5 font-bold">定义域</td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="\mathbb{R}" /></td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="(0, +\infty)" /></td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center">由 <Math tex="\alpha" /> 决定（恒含 <Math tex="(0,+\infty)" />）</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-0.5 font-bold">值域</td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="(0, +\infty)" /></td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="\mathbb{R}" /></td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center">由 <Math tex="\alpha" /> 决定</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-0.5 font-bold">过定点</td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center font-bold text-blue-700"><Math tex="(0, 1)" /></td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center font-bold text-blue-700"><Math tex="(1, 0)" /></td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center font-bold text-blue-700"><Math tex="(1, 1)" /></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-0.5 font-bold">参数限制</td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="a > 0,\ a \neq 1" /></td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="a > 0,\ a \neq 1" /></td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="\alpha" /> 为常数（系数必须为 1）</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-0.5 font-bold">增函数条件</td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="a > 1" /></td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="a > 1" /></td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="\alpha > 0" />（在 <Math tex="(0, +\infty)" />）</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-0.5 font-bold">减函数条件</td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="0 < a < 1" /></td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="0 < a < 1" /></td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="\alpha < 0" />（在 <Math tex="(0, +\infty)" />）</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-0.5 font-bold">图像特征</td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center">永远在 <Math tex="x" /> 轴上方，不穿过</td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center">只在 <Math tex="y" /> 轴右侧，会穿过 <Math tex="x" /> 轴</td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center">都经过 <Math tex="(1, 1)" /> 且在第一象限有定义</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-0.5 font-bold">变量位置</td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="x" /> 在指数位置（常数在下）</td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="x" /> 在真数位置</td>
                    <td className="border border-gray-300 px-2 py-0.5 text-center"><Math tex="x" /> 在底数位置（常数在上）</td>
                  </tr>
                </tbody>
              </table>

              {/* 易错/关键口诀 */}
              <div className="px-2 py-0.5 font-bold text-gray-800 border-y border-gray-300 bg-gray-100">三条高频考点口诀</div>
              <div className="px-3 py-1">
                <p><strong>①</strong> 指数和对数看<strong>底数 <Math tex="a" /></strong> 判单调，幂函数看<strong>指数 <Math tex="\alpha" /></strong> 判单调</p>
                <p><strong>②</strong> 三类定点别搞混：指数过 <Math tex="(0,1)" />、对数过 <Math tex="(1,0)" />、幂函数过 <Math tex="(1,1)" /></p>
                <p><strong>③</strong> 指数与对数<strong>互为逆运算</strong>：<Math tex="a^b = N \;\Longleftrightarrow\; \log_a N = b" />；恒等式 <Math tex="a^{\log_a N} = N" /> 和 <Math tex="\log_a a^n = n" /> 是高考"送分题"</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* 打印模式答案区 */}
      {isPrinting && printOptions.showAnswers && <ElementaryFuncAnswers />}

</div>
      </LessonLayout>
    </div>
  );
}
