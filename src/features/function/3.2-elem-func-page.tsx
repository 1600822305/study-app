import { Math, Collapsible, PageHeader, LessonLayout, ExportButton, PageBreak, UnifiedDebugToggle } from '@/components/shared';
import { elemFuncProgressItems } from './data/3.2/3.2-elem-func-progress';
import { useProgress } from '@/hooks';

export function ElementaryFuncPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('elem-func', elemFuncProgressItems);

  return (
    <div>
      <PageHeader
        stage="第三阶段 · 函数思维"
        title="3.2 基本初等函数"
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
        <Collapsible title="分组一、对数运算法则" defaultOpen storageKey="elem-func:log-rules">
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


</div>
      </LessonLayout>
    </div>
  );
}
