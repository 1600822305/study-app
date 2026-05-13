import { Math, Collapsible, PageHeader, LessonLayout, ExportButton, UnifiedDebugToggle, PracticeCard, PrintQuestions } from '@/components/shared';
import { DebugGeo2dSvg } from '@/components/shared/geo2d';
import { useProgress, usePrintMode } from '@/hooks';
import { powerDefPractice, powerGraphPractice, powerOddEvenPractice, powerSummaryPractice } from './data/3.2.3/3.2.3-power-practice';
import {
  powerAlpha1Diagram,
  powerAlpha2Diagram,
  powerAlpha3Diagram,
  powerAlphaThirdDiagram,
  powerAlphaHalfDiagram,
  powerAlphaNeg1Diagram,
  powerAlphaNeg2Diagram,
  powerGt1ShapeDiagram,
  powerLt1ShapeDiagram,
} from './data/3.2.3/3.2.3-power-diagrams';
import { PowerAnswers, powerExplanations } from './3.2.3-power-answers';

const powerProgressItems = [
  { id: 'pf1', label: '理解幂函数定义、标准形式、与指数函数的区分' },
  { id: 'pf2', label: '记住 7 类典型幂函数的图像与性质' },
  { id: 'pf3', label: '会判断 α=p/q 形式的奇偶性，会比较大小（含与指对、三角综合）' },
  { id: 'pf4', label: '掌握指 / 对 / 幂三类函数对比，会处理章节综合题' },
];

export function PowerPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('power-func', powerProgressItems);
  const { isPrinting, printOptions } = usePrintMode();

  return (
    <div>
      <div className="[&_h1]:!mb-1 [&_.flex-wrap]:!mt-1.5">
        <PageHeader
          stage="第三阶段 · 函数思维"
          title="3.2.3 幂函数与总结"
          tags={[
            { label: '难度 ★★☆☆☆', color: 'amber' },
            { label: '必考', color: 'blue' },
            { label: '约2小时', color: 'purple' },
          ]}
        />
      </div>

      <div className="flex justify-end gap-2 print:hidden">
        <UnifiedDebugToggle />
        <ExportButton title="3.2.3 幂函数与总结" />
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>
        <div className="[&_.rounded-xl]:mb-0 [&_.rounded-xl>.flex.items-center]:py-0.5 [&_.rounded-xl>div:last-child]:px-0 [&_.rounded-xl>div:last-child]:pt-0 [&_.rounded-xl>div:last-child]:pb-0 [&_.rounded-xl_button>span]:font-bold [&_.rounded-xl_button>span]:text-gray-900">

        <Collapsible title="一、什么是幂函数" defaultOpen storageKey="power-page:what">
          <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

            {/* 卡片 1：你早就认识幂函数了 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">你早就认识幂函数了</div>
              <div className="px-3 py-1">
                <p>初中和高一遇到过很多形如 <Math tex="y = x^\alpha" /> 的函数：</p>
                <div className="grid grid-cols-3 gap-x-4 pl-4 mt-1">
                  <p><Math tex="y = x" />（一次函数）</p>
                  <p><Math tex="y = x^2" />（抛物线）</p>
                  <p><Math tex="y = x^3" />（三次曲线）</p>
                  <p><Math tex="y = \sqrt{x}" />（开根号）</p>
                  <p><Math tex="y = \dfrac{1}{x}" />（反比例）</p>
                  <p><Math tex="y = \dfrac{1}{x^2}" /></p>
                </div>
                <p className="mt-1">这些函数的<strong>共同点</strong>：底数都是变量 <Math tex="x" />，指数是固定的常数</p>
                <p className="mt-1">这就是<strong>幂函数</strong>。它们差别只在于指数 <Math tex="\alpha" /> 不同</p>
              </div>
            </div>

            {/* 卡片 2：标准形式 + 三要素 */}
            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 text-gray-800 border-b border-gray-400 bg-gray-100 flex items-center justify-center gap-6">
                <span className="font-bold">标准形式</span>
                <Math tex="\boldsymbol{y = x^\alpha \quad (\alpha \text{ 是常数})}" />
              </div>
              <div className="grid grid-cols-3 border-t border-gray-300">
                <div className="px-2 py-1 text-center border-r border-gray-300">
                  <p><strong>底数 <Math tex="x" /></strong></p>
                  <p>变量，写在下面</p>
                </div>
                <div className="px-2 py-1 text-center border-r border-gray-300">
                  <p><strong>指数 <Math tex="\alpha" /></strong></p>
                  <p>常数，写在右上角</p>
                </div>
                <div className="px-2 py-1 text-center">
                  <p><strong>系数</strong></p>
                  <p>必须是 <Math tex="1" /></p>
                </div>
              </div>
              <div className="px-3 py-1 border-t border-gray-300 bg-blue-50">
                <p><strong>三个"不是幂函数"的反例</strong>：</p>
                <div className="grid grid-cols-3 gap-x-4 pl-4">
                  <p><Math tex="y = 2x^2" />：系数不是 1</p>
                  <p><Math tex="y = x^2 + 1" />：多了常数项</p>
                  <p><Math tex="y = (x + 1)^2" />：底数不是 <Math tex="x" /> 本身</p>
                </div>
              </div>
            </div>

            {/* 卡片 3：和指数函数别搞混 */}
            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">和指数函数别搞混</div>
              <div className="grid grid-cols-[1fr_auto_1fr]">
                <div className="px-3 py-1 text-center">
                  <p className="flex items-center justify-center gap-3"><span className="font-bold">幂函数</span><Math tex="y = x^\alpha" /></p>
                  <p>底数 <Math tex="x" /> 是变量，指数 <Math tex="\alpha" /> 是常数</p>
                  <p>例：<Math tex="y = x^2" /></p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="px-3 py-1 text-center">
                  <p className="flex items-center justify-center gap-3"><span className="font-bold">指数函数</span><Math tex="y = a^x" /></p>
                  <p>底数 <Math tex="a" /> 是常数，指数 <Math tex="x" /> 是变量</p>
                  <p>例：<Math tex="y = 2^x" /></p>
                </div>
              </div>
              <div className="px-3 py-1 border-t border-gray-300 bg-amber-50">
                <p><strong>区分口诀</strong>：<strong>常数在上 = 幂函数</strong>，<strong>常数在下 = 指数函数</strong></p>
              </div>
            </div>

            {/* 卡片 4：例 2 求解析式（双栏） */}
            <div className="grid grid-cols-[1fr_auto_1fr] border border-gray-400 rounded overflow-hidden -mt-px">
              <div>
                <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例 1. 已知幂函数 <Math tex="f(x)" /> 的图像过点 <Math tex="(2, 4)" />，求 <Math tex="f(x)" /></div>
                <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                  <p><strong>思路</strong>：设 <Math tex="f(x) = x^\alpha" />，把点代入解 <Math tex="\alpha" /></p>
                </div>
                <div className="px-3 py-1">
                  <p><strong>第一步</strong>：设 <Math tex="f(x) = x^\alpha" /></p>
                  <p><strong>第二步</strong>：代入 <Math tex="(2, 4)" />，得 <Math tex="2^\alpha = 4" /></p>
                  <p><strong>第三步</strong>：因为 <Math tex="4 = 2^2" />，所以 <Math tex="2^\alpha = 2^2" />，得 <Math tex="\alpha = 2" /></p>
                  <p><strong>答案</strong>：<Math tex="f(x) = x^2" /></p>
                </div>
              </div>
              <div className="w-px bg-gray-300"></div>
              <div>
                <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例 1. 已知幂函数 <Math tex="f(x)" /> 的图像过点 <Math tex="\left(4, \tfrac{1}{2}\right)" />，求 <Math tex="f(x)" /></div>
                <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                  <p><strong>思路</strong>：含分数答案的题，化同底是关键</p>
                </div>
                <div className="px-3 py-1">
                  <p><strong>第一步</strong>：设 <Math tex="f(x) = x^\alpha" />，代入 <Math tex="\left(4, \tfrac{1}{2}\right)" />，得 <Math tex="4^\alpha = \tfrac{1}{2}" /></p>
                  <p><strong>第二步</strong>：化同底，<Math tex="4 = 2^2" />，<Math tex="\tfrac{1}{2} = 2^{-1}" /></p>
                  <p>所以 <Math tex="(2^2)^\alpha = 2^{-1}" />，即 <Math tex="2^{2\alpha} = 2^{-1}" />，得 <Math tex="2\alpha = -1" />，<Math tex="\alpha = -\tfrac{1}{2}" /></p>
                  <p><strong>答案</strong>：<Math tex="f(x) = x^{-1/2}" /></p>
                </div>
              </div>
            </div>

            {/* 即时练习 */}
            <div className="text-[0.85rem] print:hidden">
              <PracticeCard title="✈️ 练习（什么是幂函数）" questions={powerDefPractice} explanations={powerExplanations} hideBlankLine columns={2}
                renderItem={(q, idx) => (
                  <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                    <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                    {q.questionLatex && <Math tex={q.questionLatex} />}
                  </p>
                )}
              />
            </div>
            <div className="text-[0.85rem] hidden print:block">
              <PrintQuestions questions={powerDefPractice} columns={2} />
            </div>

          </div>
        </Collapsible>

        <Collapsible title="二、图谱与性质" defaultOpen storageKey="power-page:graph">
          <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

            {/* 卡片 1：7 函数速查表 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">高中常考的 7 个幂函数（一表全掌握）</div>
              <table className="w-full border-collapse text-center [&_th]:border [&_th]:border-gray-300 [&_th]:px-2 [&_th]:py-1 [&_td]:border [&_td]:border-gray-300 [&_td]:px-2 [&_td]:py-1">
                <thead className="bg-gray-50">
                    <tr>
                      <th><Math tex="\alpha" /></th>
                      <th>函数</th>
                      <th>你认识它吗？</th>
                      <th>定义域</th>
                      <th>奇偶性</th>
                      <th>在 <Math tex="(0, +\infty)" /></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><Math tex="1" /></td>
                      <td><Math tex="y = x" /></td>
                      <td>正比例函数（直线）</td>
                      <td><Math tex="\mathbb{R}" /></td>
                      <td><strong>奇</strong></td>
                      <td><strong>增</strong></td>
                    </tr>
                    <tr>
                      <td><Math tex="2" /></td>
                      <td><Math tex="y = x^2" /></td>
                      <td>抛物线（二次函数）</td>
                      <td><Math tex="\mathbb{R}" /></td>
                      <td><strong>偶</strong></td>
                      <td><strong>增</strong></td>
                    </tr>
                    <tr>
                      <td><Math tex="3" /></td>
                      <td><Math tex="y = x^3" /></td>
                      <td>三次曲线</td>
                      <td><Math tex="\mathbb{R}" /></td>
                      <td><strong>奇</strong></td>
                      <td><strong>增</strong></td>
                    </tr>
                    <tr>
                      <td><Math tex="\tfrac{1}{3}" /></td>
                      <td><Math tex="y = \sqrt[3]{x}" /></td>
                      <td>立方根（奇函数 S 形）</td>
                      <td><Math tex="\mathbb{R}" /></td>
                      <td><strong>奇</strong></td>
                      <td><strong>增</strong></td>
                    </tr>
                    <tr>
                      <td><Math tex="\tfrac{1}{2}" /></td>
                      <td><Math tex="y = \sqrt{x}" /></td>
                      <td>开根号</td>
                      <td><Math tex="[0, +\infty)" /></td>
                      <td><strong>非奇非偶</strong></td>
                      <td><strong>增</strong></td>
                    </tr>
                    <tr>
                      <td><Math tex="-1" /></td>
                      <td><Math tex="y = \dfrac{1}{x}" /></td>
                      <td>反比例函数</td>
                      <td><Math tex="x \neq 0" /></td>
                      <td><strong>奇</strong></td>
                      <td><strong>减</strong></td>
                    </tr>
                    <tr>
                      <td><Math tex="-2" /></td>
                      <td><Math tex="y = \dfrac{1}{x^2}" /></td>
                      <td>—</td>
                      <td><Math tex="x \neq 0" /></td>
                      <td><strong>偶</strong></td>
                      <td><strong>减</strong></td>
                    </tr>
                  </tbody>
                </table>
              <div className="px-3 py-1 border-t border-gray-300 bg-amber-50 text-[0.85rem]">
                <p><strong>观察规律</strong>：<Math tex="\alpha > 0" /> 时在 <Math tex="(0, +\infty)" /> 上递增（前 5 行），<Math tex="\alpha < 0" /> 时递减（后 2 行）。这就是节三要用的"<strong>同指比底</strong>"的依据。</p>
              </div>
            </div>

            {/* 卡片 2：7 张典型幂函数图 */}
            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">7 张典型幂函数图（红点 = 公共定点 <Math tex="(1, 1)" />）</div>
              <div className="p-2 space-y-2">
                {/* 第一行：α = 1, 2, 3, 1/3（全定义域在 ℝ） */}
                <div className="grid grid-cols-4 gap-2">
                  <div className="flex flex-col items-center">
                    <DebugGeo2dSvg data={powerAlpha1Diagram} width={100.8} height={86.4} />
                    <p className="mt-0.5 text-center"><Math tex="\alpha = 1,\;\; y = x" /></p>
                  </div>
                  <div className="flex flex-col items-center">
                    <DebugGeo2dSvg data={powerAlpha2Diagram} width={100.8} height={86.4} />
                    <p className="mt-0.5 text-center"><Math tex="\alpha = 2,\;\; y = x^2" /></p>
                  </div>
                  <div className="flex flex-col items-center">
                    <DebugGeo2dSvg data={powerAlpha3Diagram} width={100.8} height={86.4} />
                    <p className="mt-0.5 text-center"><Math tex="\alpha = 3,\;\; y = x^3" /></p>
                  </div>
                  <div className="flex flex-col items-center">
                    <DebugGeo2dSvg data={powerAlphaThirdDiagram} width={100.8} height={86.4} />
                    <p className="mt-0.5 text-center"><Math tex="\alpha = \tfrac{1}{3},\;\; y = \sqrt[3]{x}" /></p>
                  </div>
                </div>
                {/* 第二行：α = 1/2, -1, -2 */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="flex flex-col items-center">
                    <DebugGeo2dSvg data={powerAlphaHalfDiagram} width={100.8} height={86.4} />
                    <p className="mt-0.5 text-center"><Math tex="\alpha = \tfrac{1}{2},\;\; y = \sqrt{x}" /></p>
                  </div>
                  <div className="flex flex-col items-center">
                    <DebugGeo2dSvg data={powerAlphaNeg1Diagram} width={100.8} height={86.4} />
                    <p className="mt-0.5 text-center"><Math tex="\alpha = -1,\;\; y = \dfrac{1}{x}" /></p>
                  </div>
                  <div className="flex flex-col items-center">
                    <DebugGeo2dSvg data={powerAlphaNeg2Diagram} width={100.8} height={86.4} />
                    <p className="mt-0.5 text-center"><Math tex="\alpha = -2,\;\; y = \dfrac{1}{x^2}" /></p>
                  </div>
                </div>
              </div>
            </div>

            {/* 卡片 3：四条铁律 */}
            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">四条铁律（所有幂函数都满足）</div>
              <div className="px-3 py-1">
                <p><strong>① 都过点 <Math tex="(1, 1)" /></strong>：因为 <Math tex="1^\alpha = 1" />，<Math tex="1" /> 的任何次方都是 <Math tex="1" /></p>
                <p className="mt-0.5"><strong>② 都在 <Math tex="(0, +\infty)" /> 上有定义</strong>：不管 <Math tex="\alpha" /> 是正整数、负整数、分数还是无理数，正数总能做任意次方</p>
                <p className="mt-0.5"><strong>③ 看 <Math tex="\alpha" /> 的正负判单调</strong>：<Math tex="\alpha > 0" /> 时在 <Math tex="(0, +\infty)" /> 上<strong>递增</strong>；<Math tex="\alpha < 0" /> 时在 <Math tex="(0, +\infty)" /> 上<strong>递减</strong></p>
                <p className="mt-0.5"><strong>④ 指大图高 / 指大图低</strong>（比较同指不同底 <Math tex="a^c" /> 与 <Math tex="b^c" /> 的核心规律）：当 <Math tex="x \in (0, 1)" /> 时，<strong>指数越大，曲线越靠近 <Math tex="x" /> 轴</strong>（指大图低）；当 <Math tex="x \in (1, +\infty)" /> 时，<strong>指数越大，曲线越远离 <Math tex="x" /> 轴</strong>（指大图高）</p>
              </div>
            </div>

            {/* 卡片 4：例 1 看 α 选图（双栏 52:48） */}
            <div className="grid grid-cols-[52fr_auto_48fr] border border-gray-400 rounded overflow-hidden -mt-px">
              <div>
                <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例 1. 判断 <Math tex="y = x^{\pi}" /> 在 <Math tex="(0, +\infty)" /> 上的单调性</div>
                <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                  <p><strong>思路</strong>：遇到无理数指数也别慌，同样用铁律③</p>
                </div>
                <div className="px-3 py-1">
                  <p><strong>第一步</strong>：识别指数 <Math tex="\alpha = \pi" /></p>
                  <p><strong>第二步</strong>：因为 <Math tex="\pi \approx 3.14 > 0" />，由铁律③知在 <Math tex="(0, +\infty)" /> 上<strong>递增</strong></p>
                  <p><strong>结论</strong>：<Math tex="y = x^{\pi}" /> 在 <Math tex="(0, +\infty)" /> 上递增</p>
                </div>
              </div>
              <div className="w-px bg-gray-300"></div>
              <div>
                <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例 2. 判断 <Math tex="y = x^{-3}" /> 在 <Math tex="(0, +\infty)" /> 上的单调性</div>
                <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                  <p><strong>思路</strong>：负指数同样看铁律③</p>
                </div>
                <div className="px-3 py-1">
                  <p><strong>第一步</strong>：识别指数 <Math tex="\alpha = -3" /></p>
                  <p><strong>第二步</strong>：因为 <Math tex="-3 < 0" />，由铁律③知在 <Math tex="(0, +\infty)" /> 上<strong>递减</strong></p>
                  <p><strong>结论</strong>：<Math tex="y = x^{-3}" /> 在 <Math tex="(0, +\infty)" /> 上递减</p>
                </div>
              </div>
            </div>

            {/* 卡片 5：例 3 + 例 4 看图选 α（上下两块 · 左文右图） */}
            <div className="grid grid-cols-[1fr_auto] border border-gray-400 rounded overflow-hidden -mt-px">
              <div>
                <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例 3. 如图，幂函数 <Math tex="y = x^\alpha" /> 的图像过 <Math tex="(1, 1)" />（红点），求 <Math tex="\alpha" /> 的范围</div>
                <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                  <p><strong>思路</strong>：以蓝色 <Math tex="y = x" /> 作参照，看黑色曲线在 <Math tex="x > 1" /> 时在参照线的上方还是下方</p>
                </div>
                <div className="px-3 py-1">
                  <p><strong>第一步</strong>：观察 <Math tex="x = 2" /> 附近，黑色曲线的 <Math tex="y" /> 值明显大于参照线 <Math tex="y = x" /> 的值 <Math tex="2" /></p>
                  <p><strong>第二步</strong>：这说明 <Math tex="y = x^\alpha" /> 在 <Math tex="(1, +\infty)" /> 上比 <Math tex="y = x" /> 增长得更快</p>
                  <p><strong>第三步</strong>：幂函数 <Math tex="y = x^\alpha" /> 的增速快于 <Math tex="y = x" /> 当且仅当 <Math tex="\alpha > 1" />（比如 <Math tex="\alpha = 2, 3, \pi" /> 等）</p>
                  <p><strong>结论</strong>：<Math tex="\alpha > 1" /></p>
                </div>
              </div>
              <div className="border-l border-gray-300 flex items-center justify-center p-2">
                <DebugGeo2dSvg data={powerGt1ShapeDiagram} width={160} height={120} />
              </div>
            </div>

            <div className="grid grid-cols-[1fr_auto] border border-gray-400 rounded overflow-hidden -mt-px">
              <div>
                <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例 4. 如图，幂函数 <Math tex="y = x^\alpha" /> 的图像过 <Math tex="(1, 1)" />（红点），求 <Math tex="\alpha" /> 的范围</div>
                <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                  <p><strong>思路</strong>：同样以 <Math tex="y = x" /> 作参照，看曲线与参照线的上下关系</p>
                </div>
                <div className="px-3 py-1">
                  <p><strong>第一步</strong>：观察 <Math tex="x = 2" /> 附近，黑色曲线的 <Math tex="y" /> 值明显小于参照线 <Math tex="y = x" /> 的值 <Math tex="2" /></p>
                  <p><strong>第二步</strong>：曲线仍递增但"增得更慢"，说明 <Math tex="\alpha > 0" />（由铁律③得递增）且比 <Math tex="y = x" /> 慢</p>
                  <p><strong>第三步</strong>：幂函数 <Math tex="y = x^\alpha" /> 的增速慢于 <Math tex="y = x" /> 当且仅当 <Math tex="0 < \alpha < 1" />（比如 <Math tex="\alpha = \tfrac{1}{2}, \tfrac{1}{3}" /> 等）</p>
                  <p><strong>结论</strong>：<Math tex="0 < \alpha < 1" /></p>
                </div>
              </div>
              <div className="border-l border-gray-300 flex items-center justify-center p-2">
                <DebugGeo2dSvg data={powerLt1ShapeDiagram} width={160} height={120} />
              </div>
            </div>

            {/* 即时练习（2 题 · 对应例 1 / 例 2 类型） */}
            <div className="text-[0.85rem] print:hidden">
              <PracticeCard title="✈️ 练习（图谱与性质）" questions={powerGraphPractice} explanations={powerExplanations} hideBlankLine columns={2}
                renderItem={(q, idx) => (
                  <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                    <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                    {q.questionLatex && <Math tex={q.questionLatex} />}
                  </p>
                )}
              />
            </div>
            <div className="text-[0.85rem] hidden print:block">
              <PrintQuestions questions={powerGraphPractice} columns={2} />
            </div>

          </div>
        </Collapsible>

        <Collapsible title="三、奇偶性与比较大小" defaultOpen storageKey="power-page:odd-even">
          <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

            {/* 卡片 1：奇偶性 α=p/q 分类速查表 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">奇偶性分类速查表（把 <Math tex="\alpha" /> 写成最简分数 <Math tex="\dfrac{p}{q}" />，<Math tex="p, q" /> 互质，<Math tex="q > 0" />）</div>
              <table className="w-full border-collapse text-center [&_th]:border [&_th]:border-gray-300 [&_th]:px-2 [&_th]:py-1 [&_td]:border [&_td]:border-gray-300 [&_td]:px-2 [&_td]:py-1">
                <thead className="bg-gray-50">
                  <tr>
                    <th><Math tex="q" />（分母）</th>
                    <th><Math tex="p" />（分子）</th>
                    <th>函数定义域</th>
                    <th>奇偶性</th>
                    <th>典型例</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>奇</td>
                    <td>奇</td>
                    <td><Math tex="\mathbb{R}" /></td>
                    <td><strong>奇函数</strong></td>
                    <td><Math tex="y = x^{\tfrac{1}{3}}" />（<Math tex="\alpha = \tfrac{1}{3}" />）</td>
                  </tr>
                  <tr>
                    <td>奇</td>
                    <td>偶</td>
                    <td><Math tex="\mathbb{R}" /></td>
                    <td><strong>偶函数</strong></td>
                    <td><Math tex="y = x^{\tfrac{2}{3}}" />（<Math tex="\alpha = \tfrac{2}{3}" />）</td>
                  </tr>
                  <tr>
                    <td>偶</td>
                    <td>奇 / 偶</td>
                    <td><Math tex="[0, +\infty)" /></td>
                    <td><strong>非奇非偶</strong>（定义域不对称）</td>
                    <td><Math tex="y = x^{\tfrac{1}{2}}" />、<Math tex="y = x^{\tfrac{1}{4}}" /></td>
                  </tr>
                  <tr>
                    <td colSpan={2}><Math tex="\alpha" /> 为无理数</td>
                    <td><Math tex="(0, +\infty)" /></td>
                    <td><strong>非奇非偶</strong>（定义域只在正半轴）</td>
                    <td><Math tex="y = x^{\pi}" />、<Math tex="y = x^{\sqrt{2}}" /></td>
                  </tr>
                </tbody>
              </table>
              <div className="px-3 py-1 bg-yellow-50 border-t border-gray-300 text-[0.85rem]">
                <p><strong>口诀</strong>：<strong>分母决定定义域，分子决定奇偶</strong>。分母偶 <Math tex="\Rightarrow" /> 只能在 <Math tex="[0, +\infty)" />；分母奇时再看分子定奇偶；<Math tex="\alpha" /> 无理 <Math tex="\Rightarrow" /> 定义域仅在正半轴。</p>
              </div>
            </div>

            {/* 卡片 2：比较大小五招速查表 */}
            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">比较大小五招速查表（覆盖所有题型）</div>
              <table className="w-full border-collapse text-[0.82rem] [&_th]:border [&_th]:border-gray-300 [&_th]:px-2 [&_th]:py-1 [&_td]:border [&_td]:border-gray-300 [&_td]:px-2 [&_td]:py-1">
                <thead className="bg-gray-50 text-center">
                  <tr>
                    <th className="w-[18%]">方法</th>
                    <th className="w-[32%]">适用情形</th>
                    <th>具体做法</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center"><strong>同指比底</strong></td>
                    <td>指数相同，底数不同</td>
                    <td>
                      <div className="flex">
                        <span className="shrink-0">看指数正负：</span>
                        <div>
                          <div><Math tex="\alpha > 0" /> 用幂函数 <Math tex="y = x^\alpha" /> 在 <Math tex="(0, +\infty)" /> 递增；</div>
                          <div><Math tex="\alpha < 0" /> 递减。按底数大小判结果</div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center"><strong>化同底</strong></td>
                    <td>底数有倍数关系（如 <Math tex="4 = 2^2" />、<Math tex="8 = 2^3" />）</td>
                    <td>把所有数化成同底数指数形式，再用指数函数单调性比较指数大小</td>
                  </tr>
                  <tr>
                    <td className="text-center"><strong>化同指</strong></td>
                    <td>指数有倍数关系</td>
                    <td>把指数都化成同一个数，再用幂函数单调性比较底数大小</td>
                  </tr>
                  <tr>
                    <td className="text-center"><strong>搭桥（用 0、1）</strong></td>
                    <td>指数、对数、幂三类混合</td>
                    <td>每个数分别与 0、1 比较，分到 <Math tex="(-\infty, 0)" />、<Math tex="(0, 1)" />、<Math tex="(1, +\infty)" /> 三段；不同段直接比较（左段&lt;中段&lt;右段），同段内再用前 3 招细比</td>
                  </tr>
                  <tr>
                    <td className="text-center"><strong>中间值 / 构造函数</strong></td>
                    <td>同底同指都不一样（如 <Math tex="0.7^{0.8}" /> 与 <Math tex="0.8^{0.7}" />）</td>
                    <td>
                      <div>取中间值（如 <Math tex="0.7^{0.7}" /> 或 <Math tex="0.8^{0.8}" />）搭桥；</div>
                      <div>或构造一个单调函数，把要比较的数变成它的两个函数值</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="px-3 py-1 bg-yellow-50 border-t border-gray-300 text-[0.85rem]">
                <p><strong>选招顺序</strong>：先看能不能<strong>同指比底</strong>，再看能不能<strong>化同底 / 化同指</strong>，遇到指对幂混合用<strong>搭桥</strong>，实在没办法才用<strong>中间值 / 构造函数</strong>。</p>
              </div>
            </div>

            {/* 卡片 3：例 1 + 例 2 奇偶判断（双栏 1:1） */}
            <div className="grid grid-cols-[1fr_auto_1fr] border border-gray-400 rounded overflow-hidden -mt-px">
              <div>
                <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例 1. 判断 <Math tex="y = x^{\tfrac{2}{3}}" /> 的奇偶性</div>
                <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                  <p><strong>思路</strong>：把 <Math tex="\alpha" /> 写成最简分数 <Math tex="\tfrac{p}{q}" />，对照卡 1 速查表</p>
                </div>
                <div className="px-3 py-1">
                  <p><strong>第一步</strong>：<Math tex="\alpha = \dfrac{2}{3}" /> 已是最简，<Math tex="q = 3" />（奇），<Math tex="p = 2" />（偶）</p>
                  <p><strong>第二步</strong>：q 奇 p 偶 <Math tex="\Rightarrow" /> <strong>偶函数</strong>，定义域 <Math tex="\mathbb{R}" /></p>
                  <p><strong>第三步</strong>：<Math tex="f(-x) = (-x)^{\tfrac{2}{3}} = \sqrt[3]{x^2} = x^{\tfrac{2}{3}} = f(x)" /></p>
                  <p><strong>结论</strong>：<Math tex="y = x^{\tfrac{2}{3}}" /> 是<strong>偶函数</strong>（图像关于 <Math tex="y" /> 轴对称）</p>
                </div>
              </div>
              <div className="w-px bg-gray-300"></div>
              <div>
                <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例 2. 判断 <Math tex="y = x^{-\tfrac{1}{3}}" /> 的奇偶性</div>
                <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                  <p><strong>思路</strong>：同样查卡 1 速查表，负指数把负号留给分子</p>
                </div>
                <div className="px-3 py-1">
                  <p><strong>第一步</strong>：<Math tex="\alpha = -\dfrac{1}{3} = \dfrac{-1}{3}" />，<Math tex="q = 3" />（奇），<Math tex="p = -1" />（奇）</p>
                  <p><strong>第二步</strong>：q 奇 p 奇 <Math tex="\Rightarrow" /> <strong>奇函数</strong>，定义域 <Math tex="\{x \mid x \ne 0\}" /></p>
                  <p><strong>第三步</strong>：<Math tex="f(-x) = (-x)^{-\tfrac{1}{3}} = -x^{-\tfrac{1}{3}} = -f(x)" /></p>
                  <p><strong>结论</strong>：<Math tex="y = x^{-\tfrac{1}{3}}" /> 是<strong>奇函数</strong>（图像类似 <Math tex="y = \dfrac{1}{x}" /> 但更陡）</p>
                </div>
              </div>
            </div>

            {/* 卡片 4：例 3 + 例 4 比较大小（上下布局） */}
            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div>
                <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例 3. 比较 <Math tex="a = 4^{0.4}" />、<Math tex="b = 2.5^{0.5}" />、<Math tex="c = 8^{0.3}" /> 的大小（2024 天津 T2 改编）</div>
                <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                  <p><strong>思路</strong>：底数 4、8 都是 2 的幂，优先<strong>化同底</strong>；剩下的 b 用<strong>化同指</strong>处理</p>
                </div>
                <div className="px-3 py-1">
                  <p><strong>第一步</strong>（化同底处理 a、c）：<Math tex="a = 4^{0.4} = (2^2)^{0.4} = 2^{0.8}" /> 和 <Math tex="c = 8^{0.3} = (2^3)^{0.3} = 2^{0.9}" /></p>
                  <hr className="border-t border-gray-200 !my-1" />
                  <p><strong>第二步</strong>：由 <Math tex="y = 2^x" /> 在 <Math tex="\mathbb{R}" /> 递增、<Math tex="0.8 < 0.9" />，所以 <Math tex="a < c" /></p>
                  <hr className="border-t border-gray-200 !my-1" />
                  <p><strong>第三步</strong>（化同指比较 <Math tex="a" />、<Math tex="b" />）：把 <Math tex="a" />、<Math tex="b" /> 都化成 <Math tex="0.5" /> 次方。利用 <Math tex="(x^k)^{0.5} = x^{0.5k}" />，设 <Math tex="0.5k = 0.8" />，解得 <Math tex="k = 1.6" />：</p>
                  <div className="flex gap-6 my-1 ml-4 text-[0.85rem]">
                    <table className="border-collapse [&_th]:border [&_th]:border-gray-300 [&_th]:px-2 [&_th]:py-0.5 [&_th]:bg-gray-50 [&_td]:border [&_td]:border-gray-300 [&_td]:px-2 [&_td]:py-0.5 [&_td]:text-center">
                      <thead>
                        <tr>
                          <th>变量</th>
                          <th>原式</th>
                          <th>化为 <Math tex="0.5" /> 次方</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><Math tex="a" /></td>
                          <td><Math tex="2^{0.8}" /></td>
                          <td><Math tex="(2^{1.6})^{0.5}" /></td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="self-center"><Math tex="b = 2.5^{0.5}" /> 本身已是 <Math tex="0.5" /> 次方，无需化简</p>
                  </div>
                  <hr className="border-t border-gray-200 !my-1" />
                  <p><strong>第四步</strong>：由幂函数 <Math tex="y = x^{0.5}" /> 在 <Math tex="(0, +\infty)" /> 递增，比较 a、b 等价于比较底数 <Math tex="2^{1.6}" /> 与 <Math tex="2.5" /></p>
                  <p><strong>第五步</strong>：<Math tex="2^{1.6} = 2 \cdot 2^{0.6}" />，而 <Math tex="2^{0.6} > 2^{0.5} = \sqrt{2} \approx 1.41 > 1.25" />，所以 <Math tex="2^{1.6} > 2.5" />，得 <Math tex="a > b" />，<strong>结论</strong>：<Math tex="b < a < c" /></p>
                </div>
              </div>
              <div>
                <div className="px-2 py-1 font-bold text-gray-800 border-y border-gray-400 bg-gray-100">例 4. 比较 <Math tex="a = 2^{0.5}" />、<Math tex="b = 0.5^2" />、<Math tex="c = \log_2 0.5" /> 的大小（2025 新课标 I 类比改编）</div>
                <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                  <p><strong>思路</strong>：指数、幂、对数三类混合，用<strong>搭桥法（0、1）</strong>分三段</p>
                </div>
                <div className="px-3 py-1">
                  <p><strong>第一步</strong>（看 a）：<Math tex="a = 2^{0.5} > 2^0 = 1" />，所以 <Math tex="a > 1" />，落在 <Math tex="(1, +\infty)" /></p>
                  <p><strong>第二步</strong>（看 b）：<Math tex="b = 0.5^2 = 0.25" />，落在 <Math tex="(0, 1)" /></p>
                  <p><strong>第三步</strong>（看 c）：<Math tex="c = \log_2 0.5 = \log_2 2^{-1} = -1" />，落在 <Math tex="(-\infty, 0)" /></p>
                  <p><strong>第四步</strong>（串起来）：三段顺序 <Math tex="(-\infty, 0) < (0, 1) < (1, +\infty)" />，<strong>结论</strong>：<Math tex="c < b < a" /></p>
                </div>
              </div>
            </div>

            {/* 卡片 5：例 5 多选综合（独占整宽） */}
            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例 5（多选 · 类 2022 新高考 I T12 改编）. 已知幂函数 <Math tex="f(x) = x^\alpha" />（<Math tex="\alpha" /> 为常数）满足 <Math tex="f\!\left(\tfrac{1}{2}\right) > f(2)" />，下列结论正确的是</div>
              <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                <p><strong>思路</strong>：多选题<strong>反例优先</strong> —— 绝对化陈述（"整个定义域都减""图象关于原点对称"）用反例最快推翻</p>
              </div>
              <div className="px-3 py-1">
                <div className="grid grid-cols-2 gap-x-4">
                  <p><strong>A.</strong> <Math tex="\alpha < 0" /></p>
                  <p><strong>B.</strong> <Math tex="f(x)" /> 在整个定义域上是减函数</p>
                  <p><strong>C.</strong> <Math tex="f(x)" /> 的图象关于原点对称</p>
                  <p><strong>D.</strong> 方程 <Math tex="f(x) = x" /> 在 <Math tex="(0, +\infty)" /> 上有且仅有 1 个根 <Math tex="x = 1" /></p>
                </div>
                <hr className="border-t border-gray-200 !my-1" />
                <p><strong>第一步</strong>（定 <Math tex="\alpha" /> 范围）：由 <Math tex="f\!\left(\tfrac{1}{2}\right) > f(2)" /> 且 <Math tex="\tfrac{1}{2} < 2" />，说明 <Math tex="f" /> 在 <Math tex="(0, +\infty)" /> 上不是增函数。由铁律③，<Math tex="\alpha < 0" />，<strong>A 对</strong></p>
                <hr className="border-t border-gray-200 !my-1" />
                <p><strong>第二步</strong>（判 B · 找反例）：<Math tex="\alpha < 0" /> 时 <Math tex="f" /> 在 <Math tex="(-\infty, 0)" /> 和 <Math tex="(0, +\infty)" /> 分别递减，<strong>但整体不是减函数</strong>。</p>
                <p>反例：取 <Math tex="\alpha = -1" />，<Math tex="f(-1) = -1" />、<Math tex="f(1) = 1" />，有 <Math tex="f(-1) < f(1)" />，违反减函数定义。<strong>B 错</strong></p>
                <hr className="border-t border-gray-200 !my-1" />
                <p><strong>第三步</strong>（判 C · 找反例）：<Math tex="\alpha < 0" /> 时奇偶性取决于 <Math tex="\alpha = \tfrac{p}{q}" /> 的 <Math tex="p, q" /> 奇偶，<strong>不一定关于原点对称</strong>。</p>
                <p>反例：取 <Math tex="\alpha = -2" />，<Math tex="f(x) = x^{-2}" /> 是偶函数，图象关于 <Math tex="y" /> 轴对称，不是原点对称。<strong>C 错</strong></p>
                <hr className="border-t border-gray-200 !my-1" />
                <p><strong>第四步</strong>（判 D · 解方程）：在 <Math tex="(0, +\infty)" /> 上解 <Math tex="x^\alpha = x" /></p>
                <p>两边除以 <Math tex="x" />（<Math tex="x > 0" />）得 <Math tex="x^{\alpha - 1} = 1" />。又 <Math tex="\alpha < 0" /> 故 <Math tex="\alpha - 1 \ne 0" />，所以唯一解 <Math tex="x = 1" />。<strong>D 对</strong></p>
                <hr className="border-t border-gray-200 !my-1" />
                <p><strong>结论</strong>：答案 <strong>AD</strong></p>
              </div>
            </div>

            {/* 即时练习（7 题 · 奇偶 2 + 同指比底 2 + 多选混合 1 + 中间值 1 + 幂三角 1） */}
            <div className="text-[0.85rem] print:hidden">
              <PracticeCard title="✈️ 练习（奇偶性与比较大小）" questions={powerOddEvenPractice} explanations={powerExplanations} hideBlankLine columns={2}
                renderItem={(q, idx) => (
                  <p className="text-gray-800 py-1 border-b border-gray-200" style={{ breakInside: 'avoid' }}>
                    <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                    {q.questionLatex && <Math tex={q.questionLatex} />}
                  </p>
                )}
              />
            </div>
            <div className="text-[0.85rem] hidden print:block">
              <PrintQuestions questions={powerOddEvenPractice} columns={2} />
            </div>

          </div>
        </Collapsible>

        <Collapsible title="四、3.2 总收官（指 / 对 / 幂三大函数大对比）" defaultOpen storageKey="power-page:summary">
          <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

            {/* 卡片 1：三大函数对比大表（9 行） */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">三大函数全维度对比（指数 / 对数 / 幂函数）</div>
              <table className="w-full border-collapse text-center [&_th]:border [&_th]:border-gray-300 [&_th]:px-2 [&_th]:py-1 [&_td]:border [&_td]:border-gray-300 [&_td]:px-2 [&_td]:py-1">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="w-[24%]">项目</th>
                    <th>指数函数 <Math tex="y = a^x" /></th>
                    <th>对数函数 <Math tex="y = \log_a x" /></th>
                    <th>幂函数 <Math tex="y = x^\alpha" /></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>定义域</strong></td>
                    <td><Math tex="\mathbb{R}" /></td>
                    <td><Math tex="(0, +\infty)" /></td>
                    <td>由 <Math tex="\alpha" /> 决定（恒含 <Math tex="(0, +\infty)" />）</td>
                  </tr>
                  <tr>
                    <td><strong>值域</strong></td>
                    <td><Math tex="(0, +\infty)" /></td>
                    <td><Math tex="\mathbb{R}" /></td>
                    <td>由 <Math tex="\alpha" /> 决定</td>
                  </tr>
                  <tr>
                    <td><strong>过定点</strong></td>
                    <td><strong><Math tex="(0, 1)" /></strong></td>
                    <td><strong><Math tex="(1, 0)" /></strong></td>
                    <td><strong><Math tex="(1, 1)" /></strong></td>
                  </tr>
                  <tr>
                    <td><strong>参数限制</strong></td>
                    <td><Math tex="a > 0,\; a \ne 1" /></td>
                    <td><Math tex="a > 0,\; a \ne 1" /></td>
                    <td><Math tex="\alpha" /> 为常数，系数 = 1</td>
                  </tr>
                  <tr>
                    <td><strong>增函数条件</strong></td>
                    <td><Math tex="a > 1" /></td>
                    <td><Math tex="a > 1" /></td>
                    <td><Math tex="\alpha > 0" />（在 <Math tex="(0, +\infty)" />）</td>
                  </tr>
                  <tr>
                    <td><strong>减函数条件</strong></td>
                    <td><Math tex="0 < a < 1" /></td>
                    <td><Math tex="0 < a < 1" /></td>
                    <td><Math tex="\alpha < 0" />（在 <Math tex="(0, +\infty)" />）</td>
                  </tr>
                  <tr>
                    <td><strong>图像特征</strong></td>
                    <td>不穿 <Math tex="x" /> 轴</td>
                    <td>只在 <Math tex="y" /> 轴右、穿 <Math tex="x" /> 轴</td>
                    <td>必过 <Math tex="(1, 1)" /></td>
                  </tr>
                  <tr>
                    <td><strong>变量位置</strong></td>
                    <td><Math tex="x" /> 在指数</td>
                    <td><Math tex="x" /> 在真数</td>
                    <td><Math tex="x" /> 在底数</td>
                  </tr>
                  <tr>
                    <td><strong>增长速度（<Math tex="x \to +\infty" />）</strong></td>
                    <td><strong>最快</strong></td>
                    <td><strong>最慢</strong></td>
                    <td><strong>居中</strong></td>
                  </tr>
                </tbody>
              </table>
              <div className="px-3 py-1 border-t border-gray-300 bg-amber-50 text-[0.85rem]">
                <p><strong>核心口诀</strong>（<Math tex="x \to +\infty,\; a > 1,\; n > 0" />）：<Math tex="\log_a x \;\ll\; x^n \;\ll\; a^x" />，即<strong>对数 &lt; 幂 &lt; 指数</strong>。这是新教材明确表述、2026 高频考点。</p>
              </div>
            </div>

            {/* 卡片 2：对数公式速记（6 条） */}
            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">对数公式速记（6 条 · 高考送分点）</div>
              <div>
                <div className="grid grid-cols-[1fr_auto_1fr]">
                  <div className="px-3 py-1">
                    <p><strong>积的对数</strong></p>
                    <p><Math tex="\log_a(MN) = \log_a M + \log_a N" /></p>
                  </div>
                  <div className="w-px bg-gray-300" />
                  <div className="px-3 py-1">
                    <p><strong>商的对数</strong></p>
                    <p><Math tex="\log_a\!\dfrac{M}{N} = \log_a M - \log_a N" /></p>
                  </div>
                </div>
                <div className="h-px bg-gray-300" />
                <div className="grid grid-cols-[1fr_auto_1fr]">
                  <div className="px-3 py-1">
                    <p><strong>幂的对数</strong></p>
                    <p><Math tex="\log_a M^n = n \log_a M" /></p>
                  </div>
                  <div className="w-px bg-gray-300" />
                  <div className="px-3 py-1">
                    <p><strong>换底公式</strong></p>
                    <p><Math tex="\log_a N = \dfrac{\log_c N}{\log_c a}" />（<Math tex="c > 0, c \ne 1" />）</p>
                  </div>
                </div>
                <div className="h-px bg-gray-300" />
                <div className="grid grid-cols-[1fr_auto_1fr]">
                  <div className="px-3 py-1">
                    <p><strong>恒等式①</strong>（指对互消）</p>
                    <p><Math tex="a^{\log_a N} = N" /></p>
                  </div>
                  <div className="w-px bg-gray-300" />
                  <div className="px-3 py-1">
                    <p><strong>恒等式②</strong>（对指互消）</p>
                    <p><Math tex="\log_a a^n = n" /></p>
                  </div>
                </div>
              </div>
              <div className="px-3 py-1 border-t border-gray-300 bg-amber-50 text-[0.85rem]">
                <p><strong>使用前提</strong>：所有公式中 <Math tex="a > 0,\; a \ne 1" />，且 <Math tex="M, N > 0" />。看到对数题先核对真数为正、底数合法。</p>
              </div>
            </div>

            {/* 卡片 3：三条高频口诀 */}
            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">三条高频口诀（每年都会用到）</div>
              <div className="px-3 py-1">
                <p><strong>口诀①</strong>　<strong>看底数还是看指数判单调</strong>：</p>
                <p className="pl-4">指数，　对数函数都<strong>看底数 <Math tex="a" /></strong>由 <Math tex="a > 1" /> 增、<Math tex="0 < a < 1" /> 减</p>
                <p className="pl-4">幂函数<strong>看指数 <Math tex="\alpha" /></strong>由 <Math tex="\alpha > 0" /> 在 <Math tex="(0, +\infty)" /> 递增、<Math tex="\alpha < 0" /> 递减</p>
              </div>
              <hr className="border-t border-gray-300 !my-0" />
              <div className="px-3 py-1">
                <p><strong>口诀②</strong>　<strong>三类定点别搞混</strong>：指数过 <strong><Math tex="(0, 1)" /></strong>　·　对数过 <strong><Math tex="(1, 0)" /></strong>　·　幂函数过 <strong><Math tex="(1, 1)" /></strong></p>
                <p className="pl-4 text-[0.85rem]">记忆法：「<strong>指 0 入 1，对 1 入 0，幂 1 入 1</strong>」（前数是自变量、后数是函数值）</p>
              </div>
              <hr className="border-t border-gray-300 !my-0" />
              <div className="px-3 py-1">
                <p><strong>口诀③</strong>　<strong>指数与对数互为逆运算</strong>：<Math tex="a^b = N \;\Longleftrightarrow\; \log_a N = b" /></p>
                <p className="pl-4">两个常用恒等式：<Math tex="a^{\log_a N} = N" />（先对后指消掉）、<Math tex="\log_a a^n = n" />（先指后对消掉）—— <strong>高考送分题</strong></p>
              </div>
            </div>

            {/* 卡片 4：综合例题（抽象函数 + 幂函数） */}
            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例 1. 已知 <Math tex="f(x)" /> 是 <Math tex="\mathbb{R}" /> 上的奇函数，当 <Math tex="x \ge 0" /> 时 <Math tex="f(x) = \sqrt{x} + x" />，求 <Math tex="f(-4)" /> 与 <Math tex="x < 0" /> 时的解析式</div>
              <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                <p><strong>思路</strong>：奇函数 <Math tex="f(-x) = -f(x)" />，先用 <Math tex="x \ge 0" /> 时的解析式求 <Math tex="f(4)" />，再用奇性反推</p>
              </div>
              <div className="px-3 py-1">
                <p><strong>第一步</strong>：先求 <Math tex="f(4)" />。把 <Math tex="x = 4" /> 代入 <Math tex="x \ge 0" /> 时的解析式，得 <Math tex="f(4) = \sqrt{4} + 4 = 2 + 4 = 6" /></p>
                <p>再由奇函数性质，<Math tex="f(-4) = -f(4)" />，即 <Math tex="f(-4) = -6" /></p>
                <hr className="border-t border-gray-200 !my-1" />
                <p><strong>第二步</strong>（求 <Math tex="x < 0" /> 解析式）：设 <Math tex="x < 0" />，则 <Math tex="-x > 0" />，可以把 <Math tex="-x" /> 代入已知解析式 <Math tex="f(x) = \sqrt{x} + x" /></p>
                <p>得 <Math tex="f(-x) = \sqrt{-x} + (-x) = \sqrt{-x} - x" />，由奇函数 <Math tex="f(x) = -f(-x) = -\sqrt{-x} + x = x - \sqrt{-x}" /></p>
                <p><strong>结论</strong>：<Math tex="f(-4) = -6" />；当 <Math tex="x < 0" /> 时 <Math tex="f(x) = x - \sqrt{-x}" /></p>
              </div>
            </div>

            {/* 卡片 5：幂函数 8 大易错点清单 */}
            <div className="border border-gray-400 rounded overflow-hidden -mt-px">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">幂函数 8 大易错点（每条配 1 反例）</div>
              <table className="w-full border-collapse [&_th]:border [&_th]:border-gray-300 [&_th]:px-2 [&_th]:py-1 [&_td]:border [&_td]:border-gray-300 [&_td]:px-2 [&_td]:py-1">
                <thead className="bg-gray-50 text-center">
                  <tr>
                    <th className="w-[5%]">#</th>
                    <th className="w-[35%]">易错点</th>
                    <th>反例 / 防错提醒</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">1</td>
                    <td>把 <Math tex="y = 2x^3" /> 当幂函数</td>
                    <td>系数必须为 <Math tex="1" />，<Math tex="2x^3" /> 系数是 2，不是幂函数</td>
                  </tr>
                  <tr>
                    <td className="text-center">2</td>
                    <td>说 <Math tex="y = x^{-1}" /> 在整个定义域上是减函数</td>
                    <td>反例：<Math tex="f(-1) = -1" />、<Math tex="f(1) = 1" />，有 <Math tex="f(-1) < f(1)" />；只能在 <Math tex="(-\infty, 0)" />、<Math tex="(0, +\infty)" /> <strong>分别递减</strong></td>
                  </tr>
                  <tr>
                    <td className="text-center">3</td>
                    <td>把 <Math tex="y = x^{\tfrac{2}{3}}" /> 判为非奇非偶</td>
                    <td>错；<Math tex="q = 3" /> 奇、<Math tex="p = 2" /> 偶 <strong>得偶函数</strong>，定义域是 <Math tex="\mathbb{R}" /></td>
                  </tr>
                  <tr>
                    <td className="text-center">4</td>
                    <td>解 <Math tex="f(2 - a) > f(a)" /> 时直接去掉 <Math tex="f" /></td>
                    <td>必须看奇偶性：<strong>偶函数</strong> 转 <Math tex="|2 - a| > |a|" />；<strong>奇/单调</strong> 才能转 <Math tex="2 - a > a" /></td>
                  </tr>
                  <tr>
                    <td className="text-center">5</td>
                    <td>比较 <Math tex="0.7^{0.8}" /> 与 <Math tex="0.8^{0.7}" /> 找不到桥</td>
                    <td>底数、指数都不同：取<strong>中间值</strong> <Math tex="0.7^{0.7}" />（同底）或 <Math tex="0.8^{0.8}" />（同指）搭桥</td>
                  </tr>
                  <tr>
                    <td className="text-center">6</td>
                    <td>化简前不看原函数定义域</td>
                    <td><Math tex="\sqrt{x^2} = |x|" /> 不是 <Math tex="x" />；<Math tex="x^{\tfrac{2}{4}} \ne x^{\tfrac{1}{2}}" />（前者要 <Math tex="x \ge 0" />、后者已经隐含）</td>
                  </tr>
                  <tr>
                    <td className="text-center">7</td>
                    <td>求 <Math tex="\alpha" /> 后不代回验证</td>
                    <td>含参题（如 <Math tex="m^2 - m - 1 = 1" /> 解出 <Math tex="m = 2" /> 或 <Math tex="-1" />）<strong>必须代回检验</strong>单调性 / 定义域要求，剔除增根</td>
                  </tr>
                  <tr>
                    <td className="text-center">8</td>
                    <td>"指大图高 / 指大图低"用反</td>
                    <td>必须先看 <Math tex="x" /> 是否在 <Math tex="(0, 1)" /> 内：<Math tex="x \in (0, 1)" /> 指大图低、<Math tex="x \in (1, +\infty)" /> 指大图高（节二卡 3 第④铁律）</td>
                  </tr>
                </tbody>
              </table>
              <div className="px-3 py-1 border-t border-gray-300 bg-amber-50 text-[0.85rem]">
                <p><strong>过坑顺口溜</strong>：<strong>看系数、看定义域、看奇偶、看分类讨论</strong>。每道幂函数题做完，过一遍这四看，绝大多数坑都能避开。</p>
              </div>
            </div>

            {/* 即时练习（11 题 · 3 单选 + 3 多选 + 2 填空 + 3 综合·含压轴） */}
            <div className="text-[0.98rem] print:hidden">
              <PracticeCard title="✈️ 练习（3.2 总收官综合）" questions={powerSummaryPractice} explanations={powerExplanations} hideBlankLine columns={2}
                renderItem={(q, idx) => {
                  const parts = (q.questionLatex ?? '').split(/\\\\/);
                  return (
                    <>
                      {idx > 0 && <div className="border-t border-gray-400 mt-2 pt-2" />}
                      <p className="text-gray-800" style={{ breakInside: 'avoid' }}>
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {parts.map((p, i) => (
                          <span key={i}>
                            {i > 0 && <br />}
                            <Math tex={p} />
                          </span>
                        ))}
                      </p>
                    </>
                  );
                }}
              />
            </div>
            <div className="text-[0.98rem] hidden print:block">
              <PrintQuestions questions={powerSummaryPractice} columns={2}
                renderItem={(q, idx) => {
                  const parts = (q.questionLatex ?? '').split(/\\\\/);
                  return (
                    <>
                      {idx > 0 && <div className="border-t border-gray-400 mt-2 pt-2" />}
                      <p className="text-gray-800">
                        <span className="text-gray-800 mr-2 font-medium">{idx + 1}.</span>
                        {parts.map((p, i) => (
                          <span key={i}>
                            {i > 0 && <br />}
                            <Math tex={p} />
                          </span>
                        ))}
                      </p>
                    </>
                  );
                }}
              />
            </div>

          </div>
        </Collapsible>

        </div>
      </LessonLayout>
      {isPrinting && printOptions.showAnswers && <PowerAnswers />}
    </div>
  );
}
