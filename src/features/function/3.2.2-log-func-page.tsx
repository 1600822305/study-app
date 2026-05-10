import { Math, PageHeader, PracticeCard, ExportButton, DebugGeo2dSvg, UnifiedDebugToggle } from '@/components/shared';
import { elemFuncPractice3 } from './data/3.2/3.2-elem-func-practice';
import { usePrintMode } from '@/hooks';
import { LogFuncAnswers, logFuncExplanations } from './3.2.2-log-func-answers';
import { logIncDiagram, logDecDiagram } from './data/3.2/3.2-elem-func-diagrams';

export function LogFuncPage() {
  const { isPrinting, printOptions } = usePrintMode();

  return (
    <div>
      <PageHeader
        stage="第三阶段 · 函数思维"
        title="3.2.2 对数函数"
        tags={[
          { label: '难度 ★★☆☆☆', color: 'amber' },
          { label: '必考', color: 'blue' },
          { label: '约2小时', color: 'purple' },
        ]}
      />

      <div className="flex justify-end gap-2 print:hidden">
        <UnifiedDebugToggle />
        <ExportButton title="3.2.2 对数函数" />
      </div>

      <div className="space-y-0 text-[0.9rem] text-gray-800 mt-2">

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
                explanations={logFuncExplanations}
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

      {isPrinting && printOptions.showAnswers && <LogFuncAnswers />}
    </div>
  );
}
