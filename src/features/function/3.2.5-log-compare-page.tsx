import { Math, Collapsible, PageHeader, ExportButton, PageBreak } from '@/components/shared';

export function LogComparePage() {
  return (
    <div>
      <PageHeader
        stage="第三阶段 · 函数思维"
        title="3.2.5 指数对数比大小"
        subtitle="系统掌握指数、对数值比较的所有方法，选你顺手的用"
        tags={[
          { label: '难度 ★★★☆☆', color: 'amber' },
          { label: '必考', color: 'blue' },
          { label: '约2小时', color: 'purple' },
        ]}
      />

      <div className="flex justify-end gap-2 print:hidden">
        <ExportButton title="3.2.5 指数对数比大小" />
      </div>

        <div className="[&_.rounded-xl]:mb-0 [&_.rounded-xl>.flex.items-center]:py-0.5 [&_.rounded-xl>div:last-child]:px-0 [&_.rounded-xl>div:last-child]:pt-0 [&_.rounded-xl>div:last-child]:pb-0 [&_.rounded-xl_button>span]:font-bold [&_.rounded-xl_button>span]:text-gray-900">

      <section id="lc-methods" className="mb-0 scroll-mt-4">
        <Collapsible title="对数比大小的 6 种方法" defaultOpen storageKey="log-compare:methods">
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-2 py-1 text-center w-12">编号</th>
                  <th className="border border-gray-300 px-2 py-1 text-center">方法</th>
                  <th className="border border-gray-300 px-2 py-1 text-center">适用场景</th>
                  <th className="border border-gray-300 px-2 py-1 text-center">核心需要会</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-2 py-1 text-center font-bold">①</td>
                  <td className="border border-gray-300 px-2 py-1 font-bold">同底比真数</td>
                  <td className="border border-gray-300 px-2 py-1">底数相同</td>
                  <td className="border border-gray-300 px-2 py-1">对数函数单调性：<Math tex="a > 1" /> 增，<Math tex="0 < a < 1" /> 减</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1 text-center font-bold">②</td>
                  <td className="border border-gray-300 px-2 py-1 font-bold">同真数比底数</td>
                  <td className="border border-gray-300 px-2 py-1">真数相同</td>
                  <td className="border border-gray-300 px-2 py-1">对数函数图像族：真数 &gt; 1 底大值小，真数 &lt; 1 底大值大</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1 text-center font-bold">③</td>
                  <td className="border border-gray-300 px-2 py-1 font-bold">中间值（介值法）</td>
                  <td className="border border-gray-300 px-2 py-1">底数真数都不同</td>
                  <td className="border border-gray-300 px-2 py-1">判断对数值正负、与 1 的关系（什么时候 = 0，什么时候 = 1）</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1 text-center font-bold">④</td>
                  <td className="border border-gray-300 px-2 py-1 font-bold">估值定位法</td>
                  <td className="border border-gray-300 px-2 py-1">底数真数都不同</td>
                  <td className="border border-gray-300 px-2 py-1">用底数的整数次幂夹真数，定区间</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1 text-center font-bold">⑤</td>
                  <td className="border border-gray-300 px-2 py-1 font-bold">换底硬算</td>
                  <td className="border border-gray-300 px-2 py-1">区间定位后仍分不出</td>
                  <td className="border border-gray-300 px-2 py-1">换底公式 + 记住 <Math tex="\lg 2 \approx 0.30" />、<Math tex="\lg 3 \approx 0.48" /></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1 text-center font-bold">⑥</td>
                  <td className="border border-gray-300 px-2 py-1 font-bold">作差法 / 作商法</td>
                  <td className="border border-gray-300 px-2 py-1">万能兜底</td>
                  <td className="border border-gray-300 px-2 py-1">对数运算法则（乘除变加减）</td>
                </tr>
              </tbody>
            </table>

          </div>
        </Collapsible>
      </section>

      <section id="lc-same-base" className="mb-0 scroll-mt-4">
        <Collapsible title="方法一：同底比真数" defaultOpen storageKey="log-compare:same-base">
          <div className="border border-gray-400 rounded overflow-hidden text-[0.9rem] text-gray-800">

            <div className="px-2 py-1 font-bold text-gray-800 bg-gray-100"><strong>什么时候用？</strong>— 两个对数<strong>底数相同</strong>，直接比真数，不用算。原理：对数函数的<strong>单调性</strong>（3.2 已学）</div>

            <div className="border-t border-gray-400">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">规则</div>
              <div className="grid grid-cols-[3fr_1px_3.5fr_1px_3.2fr_1px_4fr] text-[0.82rem]">
                <div className="px-1.5 py-0.5">
                  <p className="font-bold">底数 <Math tex="a > 1" /> 时（增函数）</p>
                  <p><strong>真数越大，对数值越大</strong></p>
                </div>
                <div className="bg-gray-300"></div>
                <div className="px-1.5 py-0.5">
                  <p>例：<Math tex="\log_2 2" /> 和 <Math tex="\log_2 4" /></p>
                  <p>真数 <Math tex="2 < 4" />，所以 <Math tex="\log_2 2 < \log_2 4" /></p>
                </div>
                <div className="bg-gray-300"></div>
                <div className="px-1.5 py-0.5">
                  <p className="font-bold">底数 <Math tex="0 < a < 1" /> 时（减函数）</p>
                  <p><strong>真数越大，对数值越小</strong></p>
                </div>
                <div className="bg-gray-300"></div>
                <div className="px-1.5 py-0.5">
                  <p>例：<Math tex="\log_{0.5} 1" /> 和 <Math tex="\log_{0.5} 4" /></p>
                  <p>真数 <Math tex="1 < 4" />，所以 <Math tex="\log_{0.5} 1 > \log_{0.5} 4" /></p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-400">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例题</div>
              <div className="grid grid-cols-[43fr_auto_57fr]">
                <div className="px-3 py-0.5">
                  <p><strong>例1：</strong>比较 <Math tex="\log_2 3" /> 和 <Math tex="\log_2 5" /></p>
                  <p>底数都是 2，且 <Math tex="2 > 1" />，对数函数递增</p>
                  <p>真数 <Math tex="3 < 5" />，所以 <Math tex="\log_2 3 < \log_2 5" /></p>
                </div>
                <div className="w-px bg-gray-300 self-stretch"></div>
                <div className="px-3 py-0.5">
                  <p><strong>例2：</strong>比较 <Math tex="\log_{0.5} 3" /> 和 <Math tex="\log_{0.5} 7" /></p>
                  <p>底数都是 0.5，且 <Math tex="0 < 0.5 < 1" />，对数函数递减</p>
                  <p>真数 <Math tex="3 < 7" />，所以 <Math tex="\log_{0.5} 3 > \log_{0.5} 7" />（减函数，真数大的值反而小）</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-400">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">进阶：真数不直观时，先化简再比</div>
              <div className="grid grid-cols-[48fr_auto_52fr]">
                <div className="px-0.5 py-0.5">
                  <p><strong>例3：</strong>比较 <Math tex="\log_2 3" /> 和 <Math tex="\log_4 5" />（底数不同，换底统一为 2）</p>
                  <p><Math tex="\log_4 5 = \dfrac{\log_2 5}{\log_2 4} = \dfrac{\log_2 5}{2} = \frac{1}{2}\log_2 5" />（底数都 &gt; 1，增函数）</p>
                  <p>现在比 <Math tex="\log_2 3" /> 和 <Math tex="\frac{1}{2}\log_2 5 = \log_2 5^{\frac{1}{2}} = \log_2 \sqrt{5}" /></p>
                  <p>因为 <Math tex="3 > \sqrt{5} \approx 2.24" />，得 <Math tex="\log_2 3 > \log_4 5" /></p>
                </div>
                <div className="w-px bg-gray-300 self-stretch"></div>
                <div className="px-0.5 py-0.5">
                  <p><strong>例4：</strong>比较 <Math tex="\log_5 2" /> 和 <Math tex="\frac{1}{2}\log_5 10" /></p>
                  <p>底数都是 5，且 <Math tex="5 > 1" />，增函数。<Math tex="\frac{1}{2}\log_5 10 = \log_5 \sqrt{10}" /></p>
                  <p>比真数：因为 <Math tex="\sqrt{9} = 3" />，而 <Math tex="\sqrt{9} < \sqrt{10}" />，所以 <Math tex="2 < 3 < \sqrt{10}" /></p>
                  <p>因为 <Math tex="2 < \sqrt{10}" />，所以 <Math tex="\log_5 2 < \log_5 \sqrt{10}" /></p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-400 px-3 py-1">
              <p className="font-bold text-center">口诀：同底比真数 — 增函数真数越大值越大，减函数真数越大值越小</p>
            </div>

            <div className="border-t border-gray-400 px-3 py-0.5 bg-amber-50">
              <div className="grid grid-cols-[auto_1fr_1fr] gap-x-4">
                <p className="font-bold">试一试</p>
                <p>① 比较 <Math tex="\log_3 5" /> 和 <Math tex="\log_3 2" /> 的大小</p>
                <p>② 比较 <Math tex="\log_{0.3} 4" /> 和 <Math tex="\log_{0.3} 6" /> 的大小</p>
                <span></span>
                <p>③ 比较 <Math tex="\lg 3" /> 和 <Math tex="\lg 8" /> 的大小</p>
                <p>④ 比较 <Math tex="\ln 0.5" /> 和 <Math tex="\ln 0.3" /> 的大小</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <section id="lc-same-arg" className="mb-0 scroll-mt-4">
        <Collapsible title="方法二：同真数比底数" defaultOpen storageKey="log-compare:same-arg">
          <div className="border border-gray-400 rounded overflow-hidden text-[0.9rem] text-gray-800">

            <div className="px-2 py-1 font-bold text-gray-800 bg-gray-100"><strong>什么时候用？</strong>— 两个对数<strong>真数相同</strong>，直接比底数，不用算</div>

            <div className="border-t border-gray-400">
              <div className="grid grid-cols-[3fr_1px_3.5fr_1px_3.2fr_1px_4fr] text-[0.82rem]">
                <div className="px-1.5 py-0.5">
                  <p className="font-bold">真数 <Math tex="N > 1" /> 时</p>
                  <p><strong>底数越大，对数值越小</strong></p>
                </div>
                <div className="bg-gray-300"></div>
                <div className="px-1.5 py-0.5">
                  <p>例：<Math tex="\log_2 4" /> 和 <Math tex="\log_4 4" /></p>
                  <p>底数 <Math tex="2 < 4" />，所以 <Math tex="\log_2 4 > \log_4 4" /></p>
                </div>
                <div className="bg-gray-300"></div>
                <div className="px-1.5 py-0.5">
                  <p className="font-bold">真数 <Math tex="0 < N < 1" /> 时</p>
                  <p><strong>底数越大，对数值越大</strong></p>
                </div>
                <div className="bg-gray-300"></div>
                <div className="px-1.5 py-0.5">
                  <p>例：<Math tex="\log_2 \frac{1}{2}" /> 和 <Math tex="\log_4 \frac{1}{2}" /></p>
                  <p>底数 <Math tex="2 < 4" />，所以 <Math tex="\log_2 \frac{1}{2} < \log_4 \frac{1}{2}" /></p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-400">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例题</div>
              <div className="grid grid-cols-[43fr_auto_57fr]">
                <div className="px-3 py-0.5">
                  <p><strong>例1：</strong>比较 <Math tex="\log_2 5" /> 和 <Math tex="\log_3 5" /></p>
                  <p>真数都是 5，底数不同</p>
                  <p>底数 <Math tex="2 < 3" />，所以 <Math tex="\log_2 5 > \log_3 5" /></p>
                </div>
                <div className="w-px bg-gray-300 self-stretch"></div>
                <div className="px-3 py-0.5">
                  <p><strong>例2：</strong>比较 <Math tex="\log_3 0.5" /> 和 <Math tex="\log_5 0.5" /></p>
                  <p>真数都是 0.5，底数不同</p>
                  <p>底数 <Math tex="3 < 5" />，所以 <Math tex="\log_3 0.5 < \log_5 0.5" /></p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-400 px-3 py-1">
              <p className="font-bold text-center">口诀：同真比底数 — 真数 &gt; 1 底数越大值越小，真数 &lt; 1 底数越大值越大</p>
            </div>

            <div className="border-t border-gray-400 px-3 py-0.5 bg-amber-50">
              <div className="grid grid-cols-[auto_1fr_1fr] gap-x-4">
                <p className="font-bold">试一试</p>
                <p>① 比较 <Math tex="\log_2 7" /> 和 <Math tex="\log_3 7" /> 的大小</p>
                <p>② 比较 <Math tex="\log_4 0.2" /> 和 <Math tex="\log_2 0.2" /> 的大小</p>
                <span></span>
                <p>③ 比较 <Math tex="\log_5 3" /> 和 <Math tex="\log_{10} 3" /> 的大小</p>
                <p>④ 比较 <Math tex="\log_3 0.1" /> 和 <Math tex="\log_7 0.1" /> 的大小</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <section id="lc-mid-value" className="mb-0 scroll-mt-4">
        <Collapsible title="方法三：中间值（介值法）" defaultOpen storageKey="log-compare:mid-value">
          <div className="border border-gray-400 rounded overflow-hidden text-[0.9rem] text-gray-800">

            <div className="px-2 py-1 font-bold text-gray-800 bg-gray-100"><strong>什么时候用？</strong>— 底数、真数都不同，找一个<strong>中间值</strong>（常用 0 或 1）把两个对数隔开</div>

            <div className="border-t border-gray-400 px-3 py-0.5">
              <p><strong>核心思路：</strong>先判断每个对数值大于 1、在 0 和 1 之间、还是小于 0，再用中间值隔开</p>
              <p>常用中间值：<strong>0</strong>（隔开正负）、<strong>1</strong>（隔开大于1和小于1）</p>
            </div>

            <div className="border-t border-gray-400">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例题</div>
              <div className="grid grid-cols-[43fr_auto_57fr]">
                <div className="px-3 py-0.5">
                  <p><strong>例1：</strong>比较 <Math tex="\log_2 3" /> 和 <Math tex="\log_3 2" /></p>
                  <p><Math tex="\log_2 3" />：因为 <Math tex="\log_2 2 = 1" />，而 <Math tex="3 > 2" /></p>
                  <p>所以 <Math tex="\log_2 3 > \log_2 2" />，即 <Math tex="\log_2 3 > 1" /></p>
                  <hr className="border-gray-300 my-0.5" />
                  <p><Math tex="\log_3 2" />：因为 <Math tex="\log_3 3 = 1" />，而 <Math tex="2 < 3" /></p>
                  <p>所以 <Math tex="\log_3 2 < \log_3 3" />，即 <Math tex="\log_3 2 < 1" /></p>
                  <p>因此 <Math tex="\log_3 2 < 1 < \log_2 3" /></p>
                </div>
                <div className="w-px bg-gray-300 self-stretch"></div>
                <div className="px-3 py-0.5">
                  <p><strong>例2：</strong>比较 <Math tex="\log_{0.5} 3" /> 和 <Math tex="\log_3 4" /></p>
                  <p><Math tex="\log_{0.5} 3" />：因为 <Math tex="\log_{0.5} 1 = 0" />，而 <Math tex="3 > 1" />，底数 <Math tex="0.5 < 1" /> 递减</p>
                  <p>所以 <Math tex="\log_{0.5} 3 < \log_{0.5} 1" />，即 <Math tex="\log_{0.5} 3 < 0" /></p>
                  <hr className="border-gray-300 my-0.5" />
                  <p><Math tex="\log_3 4" />：因为 <Math tex="\log_3 1 = 0" />，而 <Math tex="4 > 1" /></p>
                  <p>所以 <Math tex="\log_3 4 > \log_3 1" />，即 <Math tex="\log_3 4 > 0" /></p>
                  <p>因此 <Math tex="\log_{0.5} 3 < 0 < \log_3 4" /></p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-400 px-3 py-0.5">
              <p className="font-bold text-center">口诀：中间值法 — 找 0 或 1 做桥梁，一正一负、一大一小，直接判</p>
            </div>
            <div className="border-t border-gray-400 px-3 py-0.5 bg-amber-50">
              <div className="grid grid-cols-[auto_1fr_1fr] gap-x-4">
                <p className="font-bold">试一试</p>
                <p>① 比较 <Math tex="\log_3 5" /> 和 <Math tex="\log_5 3" /> 的大小</p>
                <p>② 比较 <Math tex="\log_{0.3} 2" /> 和 <Math tex="\log_2 5" /> 的大小</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <section id="lc-estimate" className="mb-0 scroll-mt-4">
        <Collapsible title="方法四：估值定位法" defaultOpen storageKey="log-compare:estimate">
          <div className="border border-gray-400 rounded overflow-hidden text-[0.9rem] text-gray-800">

            <div className="px-2 py-1 font-bold text-gray-800 bg-gray-100"><strong>什么时候用？</strong>— 万能方法，任何两个对数都能用，特别是底数、真数都不同时</div>

            <div className="border-t border-gray-400 px-3 py-0.5">
              <p><strong>核心思路：</strong>找底数的连续整数次幂，把真数夹在中间。例如 <Math tex="\log_2 3" />，底数是 2，真数是 3</p>
              <p>找 2 的几次方能把 3 夹住？<Math tex="2^1 = 2" />，<Math tex="2^2 = 4" />，刚好 <Math tex="2 < 3 < 4" />。写成对数：<Math tex="\log_2 2 < \log_2 3 < \log_2 4" />，即 <Math tex="1 < \log_2 3 < 2" /></p>
            </div>

            <div className="border-t border-gray-400">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例题</div>
              <div className="grid grid-cols-[43fr_auto_57fr]">
                <div className="px-3 py-0.5">
                  <p><strong>例1：</strong>比较 <Math tex="\log_2 3" /> 和 <Math tex="\log_3 2" /></p>
                  <p><Math tex="\log_2 3" />：左边 <Math tex="\log_2 2 = 1" />，右边 <Math tex="\log_2 4 = 2" /></p>
                  <p>所以 <Math tex="\log_2 2 < \log_2 3 < \log_2 4" />，即 <Math tex="1 < \log_2 3 < 2" /></p>
                  <hr className="border-gray-300 my-0.5" />
                  <p><Math tex="\log_3 2" />：左边 <Math tex="\log_3 1 = 0" />，右边 <Math tex="\log_3 3 = 1" /></p>
                  <p>所以 <Math tex="\log_3 1 < \log_3 2 < \log_3 3" />，即 <Math tex="0 < \log_3 2 < 1" /></p>
                  <hr className="border-gray-300 my-0.5" />
                  <p>答：<Math tex="\log_3 2 < 1 < \log_2 3" /></p>
                </div>
                <div className="w-px bg-gray-300 self-stretch"></div>
                <div className="px-3 py-0.5">
                  <p><strong>例2：</strong>比较 <Math tex="\log_2 5" /> 和 <Math tex="\log_3 8" /></p>
                  <p><Math tex="\log_2 5" />：左边 <Math tex="\log_2 4 = 2" />，右边 <Math tex="\log_2 8 = 3" /></p>
                  <p>所以 <Math tex="\log_2 4 < \log_2 5 < \log_2 8" />，即 <Math tex="2 < \log_2 5 < 3" /></p>
                  <hr className="border-gray-300 my-0.5" />
                  <p><Math tex="\log_3 8" />：左边 <Math tex="\log_3 3 = 1" />，右边 <Math tex="\log_3 9 = 2" /></p>
                  <p>所以 <Math tex="\log_3 3 < \log_3 8 < \log_3 9" />，即 <Math tex="1 < \log_3 8 < 2" /></p>
                  <hr className="border-gray-300 my-0.5" />
                  <p>答：<Math tex="\log_3 8 < 2 < \log_2 5" /></p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-400">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">进阶：二分取幂法 — 区间重叠时继续缩半</div>
              <div className="px-3 py-0.5">
                <div className="flex">
                  <p className="shrink-0"><strong>核心思路：</strong></p>
                  <div>
                    <p>方法四定位到整数区间后，二分取中点，化成同底对数比真数</p>
                    <p>遇到分数指数就乘方消掉（如比 <Math tex="a" /> 和 <Math tex="b^{\frac{m}{n}}" />，两边取 <Math tex="n" /> 次方得 <Math tex="a^n" /> 和 <Math tex="b^m" />），最后比的都是整数</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-400">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">对数：二分 + 平方消根号</div>
              <div className="grid grid-cols-[52fr_auto_48fr]">
                <div className="px-3 py-0.5">
                  <p><strong>例3：</strong>精确定位 <Math tex="\log_2 3" /> 的值</p>
                  <p><Math tex="\log_2 3" /> 肯定在 <Math tex="\log_2 2 = 1" /> 和 <Math tex="\log_2 4 = 2" /> 之间，即 <Math tex="(1,\, 2)" /> 之间</p>
                  <p>二分，得中点 <Math tex="\dfrac{3}{2}" />，把它化成对数形式 <Math tex="\dfrac{3}{2} = \dfrac{3}{2} \cdot \log_2 2 = \log_2 2^{\frac{3}{2}}" /></p>
                  <hr className="border-gray-300 my-0.5" />
                  <p>现在同底了，比真数：<Math tex="\log_2 3" /> 的真数是 <Math tex="3" />，<Math tex="\log_2 2^{\frac{3}{2}}" /> 的真数是 <Math tex="2^{\frac{3}{2}}" /></p>
                  <hr className="border-gray-300 my-0.5" />
                  <p>也就是比 <Math tex="3" /> 和 <Math tex="2^{\frac{3}{2}}" />，但是右边不好算</p>
                  <p>所以两边的次方都同乘 <Math tex="2" />，化简为 <Math tex="3^2" /> 和 <Math tex="2^3" /></p>
                  <p>也就是 <Math tex="9" /> 和 <Math tex="8" />，<Math tex="9 > 8" />，所以 <Math tex="\log_2 3 > \dfrac{3}{2}" /></p>
                  <p>区间缩半：<Math tex="\log_2 3 \in \left(\tfrac{3}{2},\, 2\right)" /></p>
                </div>
                <div className="w-px bg-gray-300 self-stretch"></div>
                <div className="px-3 py-0.5">
                  <p><strong>例4：</strong>比较 <Math tex="\log_2 3" /> 和 <Math tex="\log_3 5" />，由方法四得都在 <Math tex="(1,\, 2)" /> 之间</p>
                  <hr className="border-gray-300 my-0.5" />
                  <p>对 <Math tex="\log_2 3" /> 二分：刚证了 <Math tex="\log_2 3 > \dfrac{3}{2}" /></p>
                  <p>对 <Math tex="\log_3 5" /> 二分，得中点 <Math tex="\dfrac{3}{2} = \dfrac{3}{2} \cdot \log_3 3 = \log_3 3^{\frac{3}{2}}" /></p>
                  <p>比真数 <Math tex="5" /> 和 <Math tex="3^{\frac{3}{2}}" />，两边平方：<Math tex="5^2 = 25" />，<Math tex="(3^{\frac{3}{2}})^2 = 3^3 = 27" /></p>
                  <p><Math tex="25 < 27" />，即 <Math tex="\log_3 5 < \dfrac{3}{2}" /></p>
                  <hr className="border-gray-300 my-0.5" />
                  <p>答：<Math tex="\log_3 5 < \tfrac{3}{2} < \log_2 3" /></p>
                  <hr className="border-gray-300 my-0.5" />
                  <p>（换底硬算法：<Math tex="\dfrac{0.48}{0.30} = 1.6" /> 和 <Math tex="\dfrac{0.70}{0.48} \approx 1.46" />，结论一致）</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-400">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">指数：找公倍数幂，小数指数变整数</div>
              <div className="grid grid-cols-[53fr_auto_47fr]">
                <div className="px-3 py-0.5">
                  <p><strong>例5：</strong>比较 <Math tex="2^{0.3}" /> 和 <Math tex="3^{0.2}" /></p>
                  <p>小数指数不好比，找一个整数幂把小数消掉</p>
                  <p><Math tex="0.3" /> 和 <Math tex="0.2" /> 的公倍数是 <Math tex="10" />（即 <Math tex="0.3 \times 10 = 3" />，<Math tex="0.2 \times 10 = 2" />）</p>
                  <hr className="border-gray-300 my-0.5" />
                  <p>两边取 <Math tex="10" /> 次方：左：<Math tex="(2^{0.3})^{10} = 2^3 = 8" />，右：<Math tex="(3^{0.2})^{10} = 3^2 = 9" /></p>
                  <p>因为 <Math tex="8 < 9" />，所以 <Math tex="2^{0.3} < 3^{0.2}" /></p>
                </div>
                <div className="w-px bg-gray-300 self-stretch"></div>
                <div className="px-3 py-0.5">
                  <p><strong>例6：</strong>比较 <Math tex="2^{0.5}" /> 和 <Math tex="\log_2 3" />（指数 vs 对数）</p>
                  <p>例3已经证了 <Math tex="\log_2 3 > \tfrac{3}{2}" />，所以只需要比 <Math tex="2^{0.5}" /> 和 <Math tex="\tfrac{3}{2}" /></p>
                  <hr className="border-gray-300 my-0.5" />
                  <p>两边平方：<Math tex="(2^{0.5})^2 = 2" />，<Math tex="\left(\dfrac{3}{2}\right)^2 = \dfrac{9}{4} = 2.25" /></p>
                  <p><Math tex="2 < 2.25" />，所以 <Math tex="2^{0.5} < \tfrac{3}{2}" /></p>
                  <hr className="border-gray-300 my-0.5" />
                  <p>答：<Math tex="2^{0.5} < \tfrac{3}{2} < \log_2 3" /></p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-400 px-3 py-1">
              <p className="font-bold text-center">万能思路：遇到分数指数或小数指数，取幂变整数，最后比的都是整数次幂</p>
            </div>

            <div className="border-t border-gray-400 px-3 py-0.5 bg-amber-50">
              <div className="grid grid-cols-[auto_1fr_1fr] gap-x-4">
                <p className="font-bold">试一试</p>
                <p>① 比较 <Math tex="\log_5 3" /> 和 <Math tex="\log_3 2" /> 的大小</p>
                <p>② 比较 <Math tex="\log_2 7" /> 和 <Math tex="\log_3 10" /> 的大小</p>
                <span></span>
                <p>③ 比较 <Math tex="\log_2 5" /> 和 <Math tex="\log_3 7" /> 的大小</p>
                <p>④ 比较 <Math tex="\log_2 5" /> 和 <Math tex="\log_3 8" /> 的大小</p>
                <span></span>
                <p>⑤ 比较 <Math tex="2^{0.5}" /> 和 <Math tex="3^{0.3}" /> 的大小</p>
                <p>⑥ 比较 <Math tex="5^{0.2}" /> 和 <Math tex="2^{0.4}" /> 的大小</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <section id="lc-change-base" className="mb-0 scroll-mt-4">
        <Collapsible title="方法五：换底硬算法" defaultOpen storageKey="log-compare:change-base">
          <div className="border border-gray-400 rounded overflow-hidden text-[0.9rem] text-gray-800">

            <div className="px-2 py-1 font-bold text-gray-800 bg-gray-100"><strong>什么时候用？</strong>— 估值定位后区间相同，分不出大小，用换底公式算出近似值</div>

            <div className="border-t border-gray-400 px-3 py-0.5">
              <p><strong>核心思路：</strong>记住 <Math tex="\lg 2 \approx 0.30" />，<Math tex="\lg 3 \approx 0.48" />，利用对数法则推出其他：</p>
              <div className="grid grid-cols-3 pl-4">
                <p><Math tex="\lg 4 = \lg 2 + \lg 2 = 0.60" /></p>
                <p className="col-span-2"><Math tex="\lg 5 = \lg \tfrac{10}{2} = \lg 10 - \lg 2 = 1 - \lg 2 = 0.70" /></p>
                <p><Math tex="\lg 6 = \lg 2 + \lg 3 = 0.78" /></p>
                <p><Math tex="\lg 8 = \lg 2 + \lg 2 + \lg 2 = 0.90" /></p>
                <p><Math tex="\lg 9 = 2\lg 3 = 0.96" /></p>
              </div>
            </div>

            <div className="border-t border-gray-400">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例题</div>
              <div className="grid grid-cols-[43fr_auto_57fr]">
                <div className="px-3 py-0.5">
                  <p><strong>例1：</strong>比较 <Math tex="\log_4 9" /> 和 <Math tex="\log_5 8" /></p>
                  <p>先定位：都在 1 到 2 之间，分不出来</p>
                  <p>换底：<Math tex="\log_4 9 = \dfrac{\lg 9}{\lg 4} = \dfrac{0.96}{0.60} = 1.6" /></p>
                  <hr className="border-gray-300 my-0.5" />
                  <p>换底：<Math tex="\log_5 8 = \dfrac{\lg 8}{\lg 5} = \dfrac{0.90}{0.70} \approx 1.29" /></p>
                  <p>因此 <Math tex="\log_4 9 > \log_5 8" /></p>
                </div>
                <div className="w-px bg-gray-300 self-stretch"></div>
                <div className="px-3 py-0.5">
                  <p><strong>例2：</strong>比较 <Math tex="\log_2 3" /> 和 <Math tex="\log_3 5" /></p>
                  <p>先定位：都在 1 到 2 之间，分不出来</p>
                  <p>换底：<Math tex="\log_2 3 = \dfrac{\lg 3}{\lg 2} = \dfrac{0.48}{0.30} = 1.6" /></p>
                  <hr className="border-gray-300 my-0.5" />
                  <p>换底：<Math tex="\log_3 5 = \dfrac{\lg 5}{\lg 3} = \dfrac{0.70}{0.48} \approx 1.46" /></p>
                  <p>因此 <Math tex="\log_2 3 > \log_3 5" /></p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-400 px-3 py-1">
              <p className="font-bold text-center">口诀：记住 lg2 和 lg3，换底公式算近似值，谁大一目了然</p>
            </div>

            <div className="border-t border-gray-400 px-3 py-0.5 bg-amber-50">
              <div className="grid grid-cols-[auto_1fr_1fr] gap-x-4">
                <p className="font-bold">试一试</p>
                <p>① 比较 <Math tex="\log_2 3" /> 和 <Math tex="\log_3 5" /> 的大小</p>
                <p>② 比较 <Math tex="\log_4 6" /> 和 <Math tex="\log_3 4" /> 的大小</p>
                <span></span>
                <p>③ 比较 <Math tex="\log_5 7" /> 和 <Math tex="\log_3 4" /> 的大小</p>
                <p>④ 比较 <Math tex="\log_2 5" /> 和 <Math tex="\log_3 8" /> 的大小</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <section id="lc-diff-ratio" className="mb-0 scroll-mt-4">
        <Collapsible title="方法六：作差法 / 作商法" defaultOpen storageKey="log-compare:diff-ratio">
          <div className="border border-gray-400 rounded overflow-hidden text-[0.9rem] text-gray-800">

            <div className="px-2 py-1 font-bold text-gray-800 bg-gray-100"><strong>什么时候用？</strong>— 万能兜底，前面方法都不好用时，直接算差或算商</div>

            <div className="border-t border-gray-400 px-3 py-0.5">
              <p><strong>核心思路：</strong>比较 <Math tex="A" /> 和 <Math tex="B" /> 的大小，转化为判断差或商</p>
              <p><strong>作差法：</strong>算 <Math tex="A - B" />，结果 <Math tex="> 0" /> 则 <Math tex="A > B" />，结果 <Math tex="< 0" /> 则 <Math tex="A < B" /></p>
              <p><strong>作商法：</strong>算 <Math tex="\dfrac{A}{B}" />（<Math tex="B > 0" /> 时），商 <Math tex="> 1" /> 则 <Math tex="A > B" />，商 <Math tex="< 1" /> 则 <Math tex="A < B" /></p>
            </div>

            <div className="border-t border-gray-400">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例题</div>
              <div className="grid grid-cols-[43fr_auto_57fr]">
                <div className="px-3 py-0.5">
                  <p><strong>例1（作差法）：</strong>比较 <Math tex="\log_2 3" /> 和 <Math tex="\log_2 5 - 1" /></p>
                  <hr className="border-gray-300 my-0.5" />
                  <p>作差：<Math tex="\log_2 3 - (\log_2 5 - 1)" /></p>
                  <p><Math tex="= \log_2 3 - \log_2 5 + 1" /></p>
                  <p><Math tex="= \log_2 \dfrac{3}{5} + \log_2 2 = \log_2 \dfrac{6}{5}" /></p>
                  <hr className="border-gray-300 my-0.5" />
                  <p>因为 <Math tex="\dfrac{6}{5} > 1" />，所以 <Math tex="\log_2 \dfrac{6}{5} > 0" /></p>
                  <hr className="border-gray-300 my-0.5" />
                  <p>答：<Math tex="\log_2 3 > \log_2 5 - 1" /></p>
                </div>
                <div className="w-px bg-gray-300 self-stretch"></div>
                <div className="px-3 py-0.5">
                  <p><strong>例2（作商法）：</strong>比较 <Math tex="\log_2 6" /> 和 <Math tex="\log_4 9" /></p>
                  <hr className="border-gray-300 my-0.5" />
                  <p>两者都 &gt; 0，可以作商。先换底：<Math tex="\log_4 9 = \dfrac{\log_2 9}{\log_2 4} = \dfrac{\log_2 9}{2}" /></p>
                  <hr className="border-gray-300 my-0.5" />
                  <p>作商（上下同乘2）：<Math tex="\dfrac{\log_2 6}{\frac{\log_2 9}{2}} = \dfrac{2\log_2 6}{\log_2 9} = \dfrac{\log_2 6^2}{\log_2 9} = \dfrac{\log_2 36}{\log_2 9}" /></p>
                  <p>因为 <Math tex="36 > 9" />，底数 <Math tex="2 > 1" />，所以 <Math tex="\log_2 36 > \log_2 9 > 1" /></p>
                  <hr className="border-gray-300 my-0.5" />
                  <p>即分子 &gt; 分母 &gt; 1，所以 <Math tex="\dfrac{A}{B} = \dfrac{\log_2 36}{\log_2 9} > 1" />，答：<Math tex="\log_2 6 > \log_4 9" /></p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-400 px-3 py-1">
              <p className="font-bold text-center">口诀：作差看正负，作商看与 1 的关系</p>
            </div>

            <div className="border-t border-gray-400 px-3 py-0.5 bg-amber-50">
              <div className="grid grid-cols-[auto_1fr_1fr] gap-x-4">
                <p className="font-bold">试一试</p>
                <p>① 比较 <Math tex="\log_3 2" /> 和 <Math tex="\log_9 5" /> 的大小</p>
                <p>② 比较 <Math tex="\log_2 3" /> 和 <Math tex="\log_4 5" /> 的大小</p>
              </div>
            </div>

            <div className="border-t border-gray-400">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🔍 做题选方法流程</div>
              <div className="px-3 py-0.5">
                <p><strong>拿到两个对数 A 和 B</strong></p>
                <p className="pl-4">├─ 底数相同？ → <strong>① 同底比真数</strong></p>
                <p className="pl-4">├─ 真数相同？ → <strong>② 同真比底数</strong></p>
                <p className="pl-4">├─ 能快速判断正负 / 与 1 的关系？ → <strong>③ 中间值法</strong></p>
                <p className="pl-4">└─ 都不行？→ <strong>万能方法三选一</strong>：④ 估值定位 + 二分（纯推理，不用记数值）</p>
                <p className="pl-[14.3rem]">⑤ 换底硬算（记 lg2、lg3）</p>
                <p className="pl-[14.3rem]">⑥ 作差 / 作商（代数技巧）</p>
              </div>
              <div className="border-t border-gray-300 px-3 py-0.5">
                <p className="text-center"><strong>①②③ 快捷方法，秒出结果 ｜ ④⑤⑥ 万能方法，选你顺手的</strong></p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak />
      <section id="lc-exp" className="mb-0 scroll-mt-4">
        <Collapsible title="指数比大小" defaultOpen storageKey="log-compare:exp">
          <div className="border border-gray-400 rounded overflow-hidden text-[0.9rem] text-gray-800">

            <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">怎么比较两个指数值的大小？</div>
            <div className="grid grid-cols-[1fr_auto_1fr]">
              <div className="pl-3 py-0.5">
                <p><strong>情况1：底数相同，比指数</strong></p>
                <p className="pl-4">例：<Math tex="2^3" /> 和 <Math tex="2^5" /> 谁大？底数 2 &gt; 1，增函数（<Math tex="x" /> 越大，<Math tex="y" /> 越大）</p>
                <p className="pl-4">指数越大函数值越大，所以 <Math tex="2^5 > 2^3" /></p>
                <p className="pl-4 mt-0.5">例2：<Math tex="\left(\frac{1}{2}\right)^3" /> 和 <Math tex="\left(\frac{1}{2}\right)^5" /> 谁大？底数 <Math tex="\frac{1}{2}" /> &lt; 1，减函数</p>
                <p className="pl-4">指数越大函数值反而越小，所以 <Math tex="\left(\frac{1}{2}\right)^3 > \left(\frac{1}{2}\right)^5" /></p>
              </div>
              <div className="w-px bg-gray-300 self-stretch"></div>
              <div className="pr-3 py-0.5">
                <p><strong>情况2：指数相同，比底数</strong></p>
                <p className="pl-4">例：<Math tex="2^3" /> 和 <Math tex="3^3" /> 谁大？指数都是 3，底数越大值越大</p>
                <p className="pl-4">所以 <Math tex="3^3 > 2^3" />（即 <Math tex="27 > 8" />）</p>
                <p className="pl-4 mt-0.5">例2：<Math tex="2^{-2}" /> 和 <Math tex="3^{-2}" /> 谁大？指数都是 -2，底数越大值反而越小</p>
                <p className="pl-4">所以 <Math tex="3^{-2} < 2^{-2}" />（即 <Math tex="\frac{1}{9} < \frac{1}{4}" />）</p>
              </div>
            </div>

            <div className="border-t border-gray-400">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">情况3：底数和指数都不同 — 利用定点 (0, 1)，两个数分别跟 1 比大小</div>
              <div className="px-3 py-0.5">
                <p>例：比较 <Math tex="2^{0.3}" /> 和 <Math tex="0.3^2" /> 的大小。每个指数函数都过定点 <Math tex="(0, 1)" />，即 <Math tex="a^0 = 1" />，把每个数凑出"同底、另一个指数是 0"的对比：</p>
                <p className="pl-4 border-t border-gray-300 pt-0.5 mt-0.5"><Math tex="2^{0.3}" /> 和 <Math tex="2^0 = 1" /> 比：同底且大于 1，是增函数，对比指数 <Math tex="0.3 > 0" />，所以 <Math tex="2^{0.3} > 2^0" />（即 <Math tex="2^{0.3} > 1" />）</p>
                <p className="pl-4"><Math tex="0.3^2" /> 和 <Math tex="0.3^0 = 1" /> 比：同底且小于 1，是减函数，对比指数 <Math tex="2 > 0" />，所以 <Math tex="0.3^2 < 0.3^0" />（即 <Math tex="0.3^2 < 1" />）</p>
                <p className="pl-4">所以 <Math tex="0.3^2 < 1 < 2^{0.3}" /></p>
              </div>
            </div>

            <div className="border-t border-gray-400 px-3 py-1">
              <p className="font-bold text-center">记忆口诀：同底比指数，同指比底数，都不同找定点</p>
            </div>

            <div className="border-t border-gray-400">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">情况4：指数和对数混合比较 — 各自跟 0 或 1 比</div>
              <div className="px-3 py-0.5">
                <p><strong>核心思路：</strong>一个是指数值、一个是对数值，没法直接比，分别跟 0 或 1 比大小，用中间值隔开</p>
                <hr className="border-gray-300 my-0.5" />
                <p><strong>例1：</strong>比较 <Math tex="2^{0.3}" /> 和 <Math tex="\log_2 0.3" /> 的大小</p>
                <p className="pl-4"><Math tex="2^{0.3}" />：底数 <Math tex="2 > 1" />，指数 <Math tex="0.3 > 0" />，所以 <Math tex="2^{0.3} > 2^0 = 1" />，即 <Math tex="2^{0.3} > 1" /></p>
                <p className="pl-4"><Math tex="\log_2 0.3" />：底数 <Math tex="2 > 1" />，真数 <Math tex="0.3 < 1" />，所以 <Math tex="\log_2 0.3 < \log_2 1 = 0" />，即 <Math tex="\log_2 0.3 < 0" /></p>
                <p className="pl-4">因此 <Math tex="\log_2 0.3 < 0 < 1 < 2^{0.3}" /></p>
                <hr className="border-gray-300 my-0.5" />
                <p><strong>例2：</strong>比较 <Math tex="0.5^{0.1}" /> 和 <Math tex="\log_3 2" /> 的大小</p>
                <p className="pl-4"><Math tex="0.5^{0.1}" />：底数 <Math tex="0.5 < 1" />，指数 <Math tex="0.1 > 0" />，所以 <Math tex="0.5^{0.1} < 0.5^0 = 1" />，即 <Math tex="0.5^{0.1} < 1" /></p>
                <p className="pl-4"><Math tex="\log_3 2" />：底数 <Math tex="3 > 1" />，真数 <Math tex="1 < 2 < 3" />，所以 <Math tex="0 < \log_3 2 < 1" /></p>
                <p className="pl-4">两个都在 0 到 1 之间，需要进一步比较：</p>
                <p className="pl-4"><Math tex="0.5^{0.1}" /> 很接近 1（底数的很小次幂），而 <Math tex="\log_3 2 \approx 0.63" />（因为 <Math tex="3^{0.63} \approx 2" />）</p>
                <p className="pl-4"><Math tex="0.5^{0.1} = \left(\frac{1}{2}\right)^{0.1} \approx 0.93" />，所以 <Math tex="0.5^{0.1} > \log_3 2" /></p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <section id="lc-tricks" className="mb-0 scroll-mt-4">
        <Collapsible title="对数秒杀技巧" defaultOpen storageKey="log-compare:tricks">
          <div className="border border-gray-400 rounded overflow-hidden text-[0.9rem] text-gray-800">

            <div className="grid grid-cols-[1fr_auto_1fr]">
              <div>
                <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">秒杀1：<Math tex="\log_x(x+1)" /> 型 — 底数小的更大</div>
                <div className="px-3 py-0.5">
                  <p><strong>特征：</strong>真数 = 底数 + 1，如 <Math tex="\log_2 3" />、<Math tex="\log_3 4" />、<Math tex="\log_4 5" /></p>
                  <p><strong>结论：</strong>底数越小，值越大。即 <Math tex="\log_2 3 > \log_3 4 > \log_4 5 > \cdots" /></p>
                  <hr className="border-gray-300 my-0.5" />
                  <p><strong>为什么？</strong>令 <Math tex="f(x) = \log_x(x+1) = 1 + \log_x\!\left(1 + \tfrac{1}{x}\right)" /></p>
                  <p className="pl-4">因为 <Math tex="x+1 > x" />，所以 <Math tex="\log_x(x+1) > 1" />（所有值都大于 1）</p>
                  <p className="pl-4"><Math tex="x" /> 越大，<Math tex="\tfrac{1}{x}" /> 越小，<Math tex="\log_x\!\left(1+\tfrac{1}{x}\right)" /> 越趋向 0，整体趋向 1</p>
                  <p className="pl-4">所以 <Math tex="f(x)" /> 关于 <Math tex="x" /> 单调递减，底数小的值更大</p>
                  <hr className="border-gray-300 my-0.5" />
                  <p><strong>例：</strong>比较 <Math tex="\log_3 4" /> 和 <Math tex="\log_5 6" /></p>
                  <p className="pl-4">都是 <Math tex="\log_x(x+1)" /> 型，底数 <Math tex="3 < 5" />，所以 <Math tex="\log_3 4 > \log_5 6" /></p>
                </div>
              </div>
              <div className="w-px bg-gray-400 self-stretch"></div>
              <div>
                <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">秒杀2：<Math tex="\log_x(x-1)" /> 型 — 底数大的更大</div>
                <div className="px-3 py-0.5">
                  <p><strong>特征：</strong>真数 = 底数 - 1，如 <Math tex="\log_3 2" />、<Math tex="\log_4 3" />、<Math tex="\log_5 4" /></p>
                  <p><strong>结论：</strong>底数越大，值越大。即 <Math tex="\log_3 2 < \log_4 3 < \log_5 4 < \cdots" /></p>
                  <hr className="border-gray-300 my-0.5" />
                  <p><strong>为什么？</strong><Math tex="f(x) = \log_x(x-1) = 1 + \log_x\!\left(1 - \tfrac{1}{x}\right)" /></p>
                  <p className="pl-4">因为 <Math tex="x-1 < x" />，所以 <Math tex="\log_x(x-1) < 1" />（所有值都小于 1，且大于 0）</p>
                  <p className="pl-4"><Math tex="x" /> 越大，<Math tex="1-\tfrac{1}{x}" /> 越接近 1，<Math tex="\log_x\!\left(1-\tfrac{1}{x}\right)" /> 越趋向 0，整体趋向 1</p>
                  <p className="pl-4">所以 <Math tex="f(x)" /> 关于 <Math tex="x" /> 单调递增，底数大的值更大</p>
                  <hr className="border-gray-300 my-0.5" />
                  <p><strong>例：</strong>比较 <Math tex="\log_3 2" /> 和 <Math tex="\log_5 4" /></p>
                  <p className="pl-4">都是 <Math tex="\log_x(x-1)" /> 型，底数 <Math tex="3 < 5" />，所以 <Math tex="\log_3 2 < \log_5 4" /></p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-400">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">秒杀3：通用比较 — 底数小、比值大的赢</div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div className="px-3 py-0.5">
                  <p>比较 <Math tex="\log_A B" /> 和 <Math tex="\log_C D" />，若同时满足：</p>
                  <p className="pl-4">① <Math tex="A, B, C, D > 1" /></p>
                  <p className="pl-4">② <Math tex="A < C" />（底数更小）</p>
                  <p className="pl-4">③ <Math tex="\dfrac{B}{A} > \dfrac{D}{C} > 1" />（比值更大）</p>
                  <p>则 <Math tex="\log_A B > \log_C D" />（必须 3 个条件同时满足才可以用）</p>
                </div>
                <div className="w-px bg-gray-300 self-stretch"></div>
                <div className="px-3 py-0.5">
                  <p><strong>例：</strong>比较 <Math tex="\log_2 5" /> 和 <Math tex="\log_3 6" /></p>
                  <p>① <Math tex="2, 5, 3, 6" /> 都大于 1，满足</p>
                  <p>② 底数：<Math tex="2 < 3" />，满足</p>
                  <p>③ 比值：<Math tex="\dfrac{5}{2} = 2.5 > \dfrac{6}{3} = 2 > 1" />，满足</p>
                  <p>三个条件都满足，所以 <Math tex="\log_2 5 > \log_3 6" /></p>
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

        </div>
    </div>
  );
}
