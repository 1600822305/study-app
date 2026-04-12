import { Math, PageHeader, LessonLayout, ExportButton, Collapsible, PageBreak } from '@/components/shared';
import { DebugGeo2dSvg, Geo2dDebugToggle } from '@/components/shared/geo2d';
import { useProgress, usePrintMode } from '@/hooks';
import { absoluteValueProgressItems } from './data/2.2/2.2-progress';
import { absoluteValueNumberLine, boundaryPointsNumberLine, absGraphTransform } from './data/2.2/2.2-diagrams';


export function AbsoluteValuePage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('absolute-value', absoluteValueProgressItems);
  usePrintMode();

  return (
    <div>
      <PageHeader
        stage="第二阶段"
        title="2.2 绝对值"
        subtitle="搞清楚绝对值的本质，为复合函数单调性打基础"
        tags={[
          { label: '约30分钟', color: 'amber' },
          { label: '重要基础', color: 'green' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden gap-2">
        <Geo2dDebugToggle />
        <ExportButton title="2.2 绝对值" />
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>
        <div className="[&_.rounded-xl]:mb-0 [&_.rounded-xl>.flex.items-center]:py-1 [&_.rounded-xl>div:last-child]:pt-1 [&_.rounded-xl>div:last-child]:pb-1">

      {/* ═══════════════════════════════════════════════════════ */}
      {/* 分组一：绝对值 */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section id="abs-what" className="mb-0 scroll-mt-4">
        <Collapsible title="一、绝对值" defaultOpen storageKey="abs:what">
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-900 border-b border-gray-400 bg-gray-100">📖 定义</div>
              <div className="px-3 py-1 space-y-0.5 leading-6">
                <p>绝对值是指一个数到原点的距离，用"<Math tex="|\;|" />"来表示</p>
                <div className="flex justify-center">
                  <DebugGeo2dSvg data={absoluteValueNumberLine} width={400} height={90} />
                </div>
                <p>数 <Math tex="a" /> 到原点 <Math tex="0" /> 的距离，为 <Math tex="a" /> 的绝对值，也就是 <Math tex="|a|" /></p>
                <div className="grid grid-cols-2 gap-x-4">
                  <p><Math tex="\phantom{-}3" /> 到原点的距离是 <Math tex="3" />，所以 <Math tex="|3| = 3" /></p>
                  <p><Math tex="\phantom{-}5" /> 到原点的距离是 <Math tex="5" />，所以 <Math tex="|5| = 5" /></p>
                  <p><Math tex="-3" /> 到原点的距离是 <Math tex="3" />，所以 <Math tex="|-3| = 3" /></p>
                  <p><Math tex="-5" /> 到原点的距离是 <Math tex="5" />，所以 <Math tex="|-5| = 5" /></p>
                </div>
                <p>由以上例子可以看出，正数的绝对值等于它本身，而负数的绝对值就等于它的相反数</p>
                <p>那 <Math tex="0" /> 的绝对值呢？<Math tex="0" /> 到原点的距离就是 <Math tex="0" />，所以 <Math tex="|0| = 0" /></p>
                <p>那如果给你一个任意的数 <Math tex="a" />，它的绝对值是什么呢？</p>
                <div className="flex justify-center">
                  <Math tex="\text{任意的数}\;a\;\begin{cases} a > 0,\;|a| = a \\ a = 0,\;|a| = 0 \\ a < 0,\;|a| = -a \end{cases}" /></div>
                <div className="border border-gray-400 rounded overflow-hidden flex">
                  <div className="flex-[3] px-3 py-2 space-y-2">
                    <p className="font-bold">如果 <Math tex="|a| = a" />，那 <Math tex="a" /> 等于多少呢？</p>
                    <p><Math tex="a > 0" /> 时，<Math tex="|a| = a" />，满足；&nbsp;&nbsp;&nbsp;&nbsp;<Math tex="a = 0" /> 时呢？<Math tex="|a| = 0 = a" />，也满足</p>
                    <p>所以 <Math tex="a \geq 0" /> 时，<Math tex="|a| = a" /></p>
                    <p>大于等于 <Math tex="0" /> 的数统称为非负数，所以当 <Math tex="a" /> 是非负数的时候，<Math tex="a" /> 的绝对值才是它本身</p>
                  </div>
                  <div className="w-px bg-gray-400" />
                  <div className="flex-[1] px-3 py-2 space-y-2">
                    <p className="font-bold">如果 <Math tex="|a| = 3" />，那 <Math tex="a = \;?" /></p>
                    <p>由数轴可得，<Math tex="a = 3" /> 或 <Math tex="-3" /></p>
                    <p>也可以写成 <Math tex="a = \pm 3" /></p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-400 rounded overflow-hidden border-t-0 -mt-px">
                <div className="px-2 py-1 font-bold text-gray-900 border-b border-gray-400 bg-gray-100">✅ 绝对值的非负性</div>
                <div className="px-3 py-2 space-y-1.5 leading-6">
                  <p>绝对值的非负性指<strong>任意实数的绝对值都大于或等于零</strong>，即 <Math tex="|a| \geq 0" /></p>
                  <p>绝对值表示数轴上某个数到原点的<strong>距离</strong>，因此距离<strong>不可能为负数</strong>，所以任何数的绝对值都是<strong>非负的</strong>。具体来说：</p>
                  <p><strong>正数</strong>的绝对值等于其本身，如 <Math tex="|5| = 5" />，<Math tex="|2.7| = 2.7" />，<Math tex="|100| = 100" /></p>
                  <p><strong>零</strong>的绝对值为零，即 <Math tex="|0| = 0" /></p>
                  <p><strong>负数</strong>的绝对值等于其相反数，如 <Math tex="|-5| = 5" />，<Math tex="|-2.7| = 2.7" />，<Math tex="|-100| = 100" /></p>
                  <hr className="border-gray-400" />
                  <p className="font-bold">这个非负性能用来干嘛呢？</p>
                  <p><Math tex="|x|" /> 的<strong>最小值</strong>是多少？非负性告诉你，<Math tex="|x|" /> 必须大于等于 <Math tex="0" />，那他的<strong>最小值不就是 <Math tex="0" /></strong> 吗</p>
                  <p><Math tex="x" /> 等于多少的时候可以使 <Math tex="|x| = 0" /> 呢？当然是 <Math tex="x = 0" /> 的时候</p>
                  <div className="flex justify-center font-bold">
                    <Math tex="\boxed{|x| \geq 0} \;\;\text{最小值为}\;\; |x| = 0\text{，}\; x = 0" />
                  </div>
                  <div className="flex justify-center font-bold">
                    <Math tex="\boxed{|y| \geq 0} \;\;\text{最小值为}\;\; |y| = 0\text{，}\; y = 0" />
                  </div>
                  <p>因为 <Math tex="|x| \geq 0" />，<Math tex="|y| \geq 0" />，所以 <Math tex="|x| + |y| \geq 0" />（两个非负数相加大于等于 <Math tex="0" />）</p>
                  <div className="flex justify-center font-bold">
                    <Math tex="|x| + |y| = 0 \;\;\Rightarrow\;\; x = 0 \quad y = 0" />
                  </div>
                  <hr className="border-gray-400" />
                  <p className="font-bold"><Math tex="|-a| = |a|" />：绝对值只看距离，不看方向，所以加负号不影响结果</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <p>①  <Math tex="|-7| + |3| = " /> ___</p>
                <p>②  <Math tex="|x| + |-x| = " /> ___</p>
              </div>

              <PageBreak label="第2页" />

              <div className="border border-gray-400 rounded overflow-hidden">
                <div className="px-2 py-1 font-bold text-gray-900 border-b border-gray-400 bg-gray-100">💡 非负性应用</div>
                <div className="px-3 py-2 space-y-2 leading-7">
                  <div className="flex justify-center font-bold">
                    <Math tex="|x - 2| + |y - 3| = 0 \;\;\Rightarrow\;\; x = \_\_\_ \quad y = \_\_\_" />
                  </div>
                  <p>首先我们把这两个绝对值看成一个整体</p>
                  <div className="flex items-center gap-6">
                    <Math tex="\begin{cases} |x - 2| \geq 0 \\ |y - 3| \geq 0 \end{cases}" />
                    <span>又因为它两相加 <Math tex="= 0" />，所以</span>
                    <Math tex="\begin{cases} x - 2 = 0 \\ y - 3 = 0 \end{cases}" />
                    <span>解得</span>
                    <span className="font-bold"><Math tex="\begin{cases} x = 2 \\ y = 3 \end{cases}" /></span>
                  </div>
                  <p>由此我们可以得出一个结论：<strong>如果绝对值的和为 <Math tex="0" />，那它们都是 <Math tex="0" /></strong></p>
                  <div className="flex justify-center gap-12 font-bold">
                    <Math tex="|0| + |0| = 0" />
                    <Math tex="\text{非负} + \text{非负} = 0" />
                  </div>
                </div>
              </div>

              <div className="border border-gray-400 rounded overflow-hidden border-t-0 -mt-px">
                <div className="px-2 py-1 font-bold text-gray-900 border-b border-gray-400 bg-gray-100">🎯 绝对值零的唯一性</div>
                <div className="flex">
                  <div className="flex-[3] px-3 py-2 space-y-2 leading-7">
                    <p><strong>只有 <Math tex="0" /> 的绝对值等于 <Math tex="0" /></strong>，即 <Math tex="|a| = 0" /> 则 <Math tex="a = 0" /></p>
                    <p>任何非零数的绝对值都<strong>大于 <Math tex="0" /></strong></p>
                  </div>
                  <div className="w-px bg-gray-400" />
                  <div className="flex-[1] px-3 py-2 space-y-1 leading-7">
                    <p><Math tex="|a - 1| = 0" />，则 <Math tex="a = 1" /></p>
                    <p><Math tex="|x + 2| = 0" />，则 <Math tex="x = -2" /></p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-400 rounded overflow-hidden border-t-0 -mt-px">
                <div className="px-2 py-1 font-bold text-gray-900 border-b border-gray-400 bg-gray-100">🔢 绝对值的平方等价性</div>
                <div className="px-3 py-2 space-y-1 leading-7">
                  <p>绝对值的平方等于该数的平方，即 <Math tex="|a|^2 = a^2" />，可用于<strong>去绝对值</strong>或<strong>化简代数式</strong></p>
                  <p>例如：<Math tex="|-3|^2 = (-3)^2 = 9" />，&nbsp;&nbsp;<Math tex="|5|^2 = 5^2 = 25" />，&nbsp;&nbsp;<Math tex="|-7|^2 = (-7)^2 = 49" /></p>
                </div>
              </div>

              <div className="border border-gray-400 rounded overflow-hidden border-t-0 -mt-px">
                <div className="px-2 py-1 font-bold text-gray-900 border-b border-gray-400 bg-gray-100">🔄 对称性</div>
                <div className="px-3 py-2 leading-7">
                  <p>一个数和它的相反数的绝对值相等，即 <Math tex="|a| = |-a|" />。例如 <Math tex="|3| = |-3| = 3" />，<Math tex="|7| = |-7| = 7" /></p>
                </div>
              </div>

              <div className="border border-gray-400 rounded overflow-hidden border-t-0 -mt-px">
                <div className="px-2 py-1 font-bold text-gray-900 border-b border-gray-400 bg-gray-100">✖️ 乘法性</div>
                <div className="px-3 py-2 leading-7">
                  <p>两个数的积的绝对值等于它们绝对值的积，即 <Math tex="|ab| = |a| \cdot |b|" />。例如 <Math tex="|(-3) \times 5| = |-15| = 15 = |{-3}| \times |5|" /></p>
                </div>
              </div>

              <div className="border border-gray-400 rounded overflow-hidden border-t-0 -mt-px">
                <div className="px-2 py-1 font-bold text-gray-900 border-b border-gray-400 bg-gray-100">➗ 除法性</div>
                <div className="px-3 py-2 leading-7">
                  <p>两个数的商的绝对值等于它们绝对值的商（除数不为零），即 <Math tex="\left|\dfrac{a}{b}\right| = \dfrac{|a|}{|b|}" />（<Math tex="b \neq 0" />）。例如 <Math tex="\left|\dfrac{-6}{3}\right| = |-2| = 2 = \dfrac{|{-6}|}{|3|}" /></p>
                </div>
              </div>

              <div className="border border-gray-400 rounded overflow-hidden border-t-0 -mt-px">
                <div className="px-2 py-1 font-bold text-gray-900 border-b border-gray-400 bg-gray-100">📐 三角不等式</div>
                <div className="px-3 py-2 space-y-2 leading-7">
                  <p>两个数之和的绝对值<strong>小于等于</strong>它们绝对值之和</p>
                  <div className="flex justify-center font-bold">
                    <Math tex="\bigl||a| - |b|\bigr| \leq |a + b| \leq |a| + |b|" />
                  </div>
                  <div className="grid grid-cols-2 gap-x-6">
                    <div className="space-y-1">
                      <p className="font-bold">右半部分：<Math tex="|a + b| \leq |a| + |b|" /></p>
                      <p>例如 <Math tex="|3 + (-5)| = |-2| = 2" /></p>
                      <p>而 <Math tex="|3| + |-5| = 3 + 5 = 8" />，<Math tex="2 \leq 8" /> ✔</p>
                    </div>
                    <div className="space-y-1">
                      <p className="font-bold">左半部分：<Math tex="\bigl||a| - |b|\bigr| \leq |a + b|" /></p>
                      <p>例如 <Math tex="\bigl||3| - |-5|\bigr| = |3 - 5| = 2" /></p>
                      <p>而 <Math tex="|3 + (-5)| = |-2| = 2" />，<Math tex="2 \leq 2" /> ✔</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-gray-400 rounded overflow-hidden border-t-0 -mt-px">
                <div className="px-2 py-1 font-bold text-gray-900 border-b border-gray-400 bg-gray-100">⚡ 不等式应用</div>
                <div className="px-3 py-2 space-y-2 leading-7">
                  <p>绝对值非负性是求解绝对值不等式的基础，口诀：<strong>大于取两边，小于取中间</strong></p>
                  <div className="grid grid-cols-2 gap-x-6">
                    <div className="space-y-1">
                      <p className="font-bold">大于取两边：<Math tex="|x| > a" />（<Math tex="a > 0" />）</p>
                      <p className="font-bold">等价于 <Math tex="x > a" /> 或 <Math tex="x < -a" /></p>
                      <p>例如 <Math tex="|x| > 3" />，则 <Math tex="x > 3" /> 或 <Math tex="x < -3" /></p>
                    </div>
                    <div className="space-y-1">
                      <p className="font-bold">小于取中间：<Math tex="|x| < a" />（<Math tex="a > 0" />）</p>
                      <p className="font-bold">等价于 <Math tex="-a < x < a" /></p>
                      <p>例如 <Math tex="|x| < 3" />，则 <Math tex="-3 < x < 3" /></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-gray-400 rounded overflow-hidden border-t-0 -mt-px">
                <div className="px-2 py-1 font-bold text-gray-900 border-b border-gray-400 bg-gray-100">✏️ 练习</div>
                <div className="px-3 py-1.5 leading-7 flex gap-8">
                  <p>① <Math tex="|{-8}| =" /></p>
                  <p>② <Math tex="|3 - \pi| =" /></p>
                  <p>③ 若 <Math tex="|2x - 1| = 5" />，则 <Math tex="x =" /></p>
                  <p>④ 若 <Math tex="|a| + |b| = 0" />，则 <Math tex="a =" />，<Math tex="b =" /></p>
                </div>
              </div>

            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak label="第3页" />

      {/* ═══════════════════════════════════════════════════════ */}
      {/* 分组二：绝对值方程与不等式解法 */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section id="abs-solve" className="mb-0 scroll-mt-4">
        <Collapsible title="二、绝对值方程与不等式解法" defaultOpen storageKey="abs:solve">
          <div className="space-y-0 text-[0.9rem] text-gray-800">

              <div className="border border-gray-400 rounded overflow-hidden">
                <div className="px-2 py-1 font-bold text-gray-900 border-b border-gray-400 bg-gray-100">📝 绝对值方程与不等式的解法</div>
                <div className="px-3 py-1 space-y-1 leading-6">
                  <p className="font-bold">核心思路：大于取两边，小于取中间，等于取边界</p>
                  <p><Math tex="|x|" /> 的几何意义是 <Math tex="x" /> 到原点的<strong>距离</strong>。距离小于某个值，就是靠近原点（中间）；距离大于某个值，就是远离原点（两边）</p>
                  <div className="grid grid-cols-[auto_1fr_1fr] gap-x-4 gap-y-0.5 items-baseline">
                    <p className="font-bold">小于（<Math tex="<" /> 或 <Math tex="\leq" />）</p><p>距离小，取中间</p><p><Math tex="-a < f(x) < a" /></p>
                    <p className="font-bold">大于（<Math tex=">" /> 或 <Math tex="\geq" />）</p><p>距离大，取两边</p><p><Math tex="f(x) > a" /> 或 <Math tex="f(x) < -a" /></p>
                    <p className="font-bold">等于（<Math tex="=" />）</p><p>恰好在边界（也适用于 <Math tex="|f(x)| = |g(x)|" />）</p><p><Math tex="f(x) = a" /> 或 <Math tex="f(x) = -a" /></p>
                  </div>
                  <p>有没有等号（<Math tex="\leq" /> vs <Math tex="<" />）只影响端点取不取到，不影响"取中间还是取两边"的方向</p>
                  <hr className="border-gray-400" />
                  <p className="font-bold">例1：解方程 <Math tex="|2x - 1| = 5" /></p>
                  <p>等于取边界，得 <Math tex="2x - 1 = 5" /> 或 <Math tex="2x - 1 = -5" />，解得 <Math tex="x = 3" /> 或 <Math tex="x = -2" /></p>
                  <hr className="border-gray-400" />
                  <div className="grid grid-cols-2 gap-x-6">
                    <div className="space-y-1">
                      <p className="font-bold">例2：解不等式 <Math tex="|2x - 1| < 3" /></p>
                      <p>小于取中间：<Math tex="-3 < 2x - 1 < 3" /></p>
                      <p>各部分加 <Math tex="1" /> 再除以 <Math tex="2" />，化简得 <Math tex="-1 < x < 2" /></p>
                    </div>
                    <div className="space-y-1">
                      <p className="font-bold">例3：解不等式 <Math tex="|3x + 2| > 7" /></p>
                      <p>大于取两边：<Math tex="3x + 2 > 7" /> 或 <Math tex="3x + 2 < -7" /></p>
                      <p className="font-bold">解得 <Math tex="x > \dfrac{5}{3}" /> 或 <Math tex="x < -3" /></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-gray-400 rounded overflow-hidden border-t-0 -mt-px">
                <div className="px-2 py-1 font-bold text-gray-900 border-b border-gray-400 bg-gray-100">� 分界点：绝对值正负切换的关键</div>
                <div className="px-3 py-1 space-y-1 leading-6">
                  <p>前面的例题中，绝对值里都是简单的 <Math tex="|x|" />，可以直接用"大于取两边、小于取中间"</p>
                  <p>但如果绝对值里是 <Math tex="|x - 1|" />、<Math tex="|2x + 3|" /> 这样的式子，并且有多个绝对值相加，就需要<strong>分类讨论</strong></p>
                  <p className="font-bold">核心问题：怎么分？分几段？</p>
                  <p>绝对值的去法取决于里面的式子是正还是负。让绝对值里的式子等于 <Math tex="0" />，解出来的值就是<strong>分界点</strong>。分界点两侧正负不同，去绝对值的方式也不同。找到所有分界点后，把数轴分成几段，每段内正负确定，就能正确去绝对值了</p>
                  <p>（回顾：当绝对值内的式子 <Math tex="< 0" /> 时，去绝对值要加负号，即 <Math tex="|a| = -a" />（<Math tex="a < 0" /> 时），这样才能把负数变成正数）</p>
                  <p className="font-bold">区间怎么写等号？统一规则：等号跟左端点</p>
                  <p>分界点上式子等于 <Math tex="0" />，放进哪个区间结果都一样，所以等号归哪边都行</p>
                  <p>统一写法：第一段 <Math tex="<" />，中间每段 <Math tex="\leq \cdots <" />（左闭右开），最后一段 <Math tex="\geq" /></p>
                </div>
              </div>

              <div className="border border-gray-400 rounded overflow-hidden border-t-0 -mt-px">
                <div className="px-2 py-1 font-bold text-gray-900 border-b border-gray-400 bg-gray-100">📝 分类讨论法</div>
                <div className="px-3 py-1 space-y-1 leading-6">
                  <p className="font-bold">例4：解方程 <Math tex="|x - 1| + |x + 2| = 5" /></p>
                  <p><strong>第一步，找分界点：</strong>令 <Math tex="x - 1 = 0" /> 得 <Math tex="x = 1" />，令 <Math tex="x + 2 = 0" /> 得 <Math tex="x = -2" />，这两个分界点把数轴分成三个区间</p>
                  <div className="flex justify-center">
                    <DebugGeo2dSvg data={boundaryPointsNumberLine} width={440} height={75} />
                  </div>
                  <p><strong>第二步，逐个区间去绝对值求解：</strong>在每个区间内，代入一个具体数判断式子的正负。正的就原封不动去掉绝对值，负的就在外面套个负号</p>
                  <div className="grid grid-cols-3 gap-x-4">
                    <div className="space-y-1 border-r border-gray-300 pr-4">
                      <p className="font-bold">当 <Math tex="x < -2" />（代 <Math tex="x = -3" />）</p>
                      <p><Math tex="x - 1 < 0" />，<Math tex="x + 2 < 0" />，都是负的，加负号</p>
                      <p><Math tex="-(x-1) + (-(x+2)) = 5" /></p>
                      <p><Math tex="-2x - 1 = 5" /></p>
                      <p className="font-bold"><Math tex="x = -3" /> ✔</p>
                      <p>（<Math tex="-3 < -2" />，在区间内）</p>
                    </div>
                    <div className="space-y-1 border-r border-gray-300 pr-4">
                      <p className="font-bold">当 <Math tex="-2 \leq x < 1" />（代 <Math tex="x = 0" />）</p>
                      <p><Math tex="x - 1 < 0" />，<Math tex="x + 2 > 0" />，一负一正</p>
                      <p><Math tex="-(x-1) + (x+2) = 5" /></p>
                      <p><Math tex="3 = 5" /></p>
                      <p className="font-bold">矛盾，无解</p>
                    </div>
                    <div className="space-y-1">
                      <p className="font-bold">当 <Math tex="x \geq 1" />（代 <Math tex="x = 2" />）</p>
                      <p><Math tex="x - 1 > 0" />，<Math tex="x + 2 > 0" />，都是正的，直接去</p>
                      <p><Math tex="(x-1) + (x+2) = 5" /></p>
                      <p><Math tex="2x + 1 = 5" /></p>
                      <p className="font-bold"><Math tex="x = 2" /> ✔</p>
                      <p>（<Math tex="2 \geq 1" />，在区间内）</p>
                    </div>
                  </div>
                  <p>综合三个区间的结果（取每个区间内的有效解），所以 <Math tex="x = -3" /> 或 <Math tex="x = 2" /></p>
                </div>
              </div>

              <p className="font-bold mt-1">✏️ 练一练：解方程 <Math tex="|x + 3| + |x - 2| = 7" /></p>
              <p className="font-bold mt-1">✏️ 练一练：解不等式 <Math tex="|2x - 3| \leq 5" /></p>

              <PageBreak label="第4页" />

              <div className="border border-gray-400 rounded overflow-hidden">
                <div className="px-2 py-1 font-bold text-gray-900 border-b border-gray-400 bg-gray-100">📝 两个绝对值相等</div>
                <div className="px-3 py-1 space-y-1 leading-6">
                  <p><Math tex="|f(x)| = |g(x)|" /> 等价于 <Math tex="f(x) = g(x)" /> 或 <Math tex="f(x) = -g(x)" /></p>
                  <hr className="border-gray-400" />
                  <p className="font-bold">例5：解方程 <Math tex="|x - 1| = |2x + 3|" /></p>
                  <div className="grid grid-cols-2 gap-x-6">
                    <div>
                      <p><Math tex="x - 1 = 2x + 3" />，移项化简，解得 <Math tex="x = -4" /></p>
                    </div>
                    <div>
                      <p>或 <Math tex="x - 1 = -(2x + 3)" />，移项化简，解得 <Math tex="x = -\tfrac{2}{3}" /></p>
                    </div>
                  </div>
                  <p className="font-bold">所以 <Math tex="x = -4" /> 或 <Math tex="x = -\tfrac{2}{3}" /></p>
                </div>
              </div>

              <div className="border border-gray-400 rounded overflow-hidden border-t-0 -mt-px">
                <div className="px-2 py-1 font-bold text-gray-900 border-b border-gray-400 bg-gray-100">📝 含二次函数的绝对值</div>
                <div className="px-3 py-1 space-y-1 leading-6">
                  <div className="grid grid-cols-[1fr_auto] gap-x-4">
                    <div className="space-y-1">
                      <p className="font-bold">思路不变：去绝对值，转化为普通方程/不等式</p>
                      <hr className="border-gray-400" />
                      <p className="font-bold">例6：解方程 <Math tex="|x^2 - 4| = 3" /></p>
                      <div className="grid grid-cols-2 gap-x-6">
                        <div className="space-y-1">
                          <p><Math tex="x^2 - 4 = 3" /></p>
                          <p><Math tex="x^2 = 7" /></p>
                          <p className="font-bold"><Math tex="x = \pm\sqrt{7}" /></p>
                        </div>
                        <div className="space-y-1">
                          <p>或 <Math tex="x^2 - 4 = -3" /></p>
                          <p><Math tex="x^2 = 1" /></p>
                          <p className="font-bold"><Math tex="x = \pm 1" /></p>
                        </div>
                      </div>
                      <p>所以 <Math tex="x = \pm\sqrt{7}" /> 或 <Math tex="x = \pm 1" />（共4个解）</p>
                    </div>
                    <div className="border-l border-gray-300 pl-3 space-y-1 text-gray-800" style={{ minWidth: '160px' }}>
                      <p className="font-bold">解题前先看等式右边的值</p>
                      <p>值 <Math tex="> 0" />：正常解，两种情况</p>
                      <p>值 <Math tex="= 0" />：只有 <Math tex="f(x) = 0" /></p>
                      <p>值 <Math tex="< 0" />：直接无解</p>
                      <p>如 <Math tex="|x^2-4| = -3" />，无解</p>
                      <p>（绝对值永远 <Math tex="\geq 0" />，不可能等于负数）</p>
                    </div>
                  </div>
                  <hr className="border-gray-400" />
                  <p><span className="font-bold">例7：解不等式 <Math tex="|x^2 - 3x - 4| \leq 6" /></span>，小于取中间：<Math tex="-6 \leq x^2 - 3x - 4 \leq 6" /></p>
                  <div className="grid grid-cols-2 gap-x-6">
                    <div className="space-y-1">
                      <p>左半：<Math tex="x^2 - 3x - 4 \geq -6" /></p>
                      <p><Math tex="x^2 - 3x + 2 \geq 0" /></p>
                      <p><Math tex="(x-1)(x-2) \geq 0" /></p>
                      <p className="font-bold"><Math tex="x \leq 1" /> 或 <Math tex="x \geq 2" /></p>
                    </div>
                    <div className="space-y-1">
                      <p>右半：<Math tex="x^2 - 3x - 4 \leq 6" /></p>
                      <p><Math tex="x^2 - 3x - 10 \leq 0" /></p>
                      <p><Math tex="(x-5)(x+2) \leq 0" /></p>
                      <p className="font-bold"><Math tex="-2 \leq x \leq 5" /></p>
                    </div>
                  </div>
                  <p>左边有两段，分别和右边取<strong>交集</strong>：<Math tex="x \leq 1" /> 与 <Math tex="[-2, 5]" /> 交得 <Math tex="[-2, 1]" />，或 <Math tex="x \geq 2" /> 与 <Math tex="[-2, 5]" /> 交得 <Math tex="[2, 5]" /></p>
                  <p className="font-bold">所以 <Math tex="-2 \leq x \leq 1" /> 或 <Math tex="2 \leq x \leq 5" /></p>
                </div>
              </div>

          </div>
        </Collapsible>
      </section>

      <section id="abs-graph" className="mb-0 scroll-mt-4">
        <Collapsible title="三、绝对值与图像变换" defaultOpen storageKey="abs:graph">
          <div className="space-y-0 text-[0.9rem] text-gray-800">

              <div className="border border-gray-400 rounded overflow-hidden">
                <div className="px-2 py-1 font-bold text-gray-900 border-b border-gray-400 bg-gray-100">📝 <Math tex="y = |f(x)|" /> 的图像画法</div>
                <div className="px-3 py-1 space-y-1 leading-6">
                  <div className="grid grid-cols-[1fr_auto] gap-x-4">
                    <div className="space-y-1">
                      <p className="font-bold">画法：x 轴上方不动，下方翻上去</p>
                      <p>先画 <Math tex="y = f(x)" />，把 x 轴<strong>下方</strong>的部分关于 x 轴<strong>对称翻折</strong>到上方，上方的部分保持不动</p>
                      <p>原因：当 <Math tex="f(x) \geq 0" /> 时，<Math tex="|f(x)| = f(x)" />（不变）；当 <Math tex="f(x) < 0" /> 时，<Math tex="|f(x)| = -f(x)" />（取反，图像翻转到上方）</p>
                      <hr className="border-gray-400" />
                      <p className="font-bold">例：<Math tex="y = |x^2 - 4|" /></p>
                      <p>原函数 <Math tex="y = x^2 - 4" />（灰色虚线）在 <Math tex="(-2, 2)" /> 上为负</p>
                      <p>翻折后（蓝色实线），下方的抛物线翻到上方，形成 W 形</p>
                    </div>
                    <div>
                      <DebugGeo2dSvg data={absGraphTransform} width={208} height={192} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-gray-400 rounded overflow-hidden border-t-0 -mt-px">
                <div className="px-2 py-1 font-bold text-gray-900 border-b border-gray-400 bg-gray-100">📝 <Math tex="y = |f(x)|" /> 的单调性</div>
                <div className="px-3 py-1 space-y-1 leading-6">
                  <p className="font-bold">口诀：上方不变，下方反转<span className="font-normal">（单调性的详细定义和判断方法见 3.1）</span></p>
                  <div className="grid grid-cols-[auto_1fr_1fr] gap-x-4 gap-y-0.5 items-baseline">
                    <p className="font-bold"><Math tex="f(x) \geq 0" /> 的区间</p><p><Math tex="|f(x)| = f(x)" />，没变</p><p>单调性<strong>不变</strong></p>
                    <p className="font-bold"><Math tex="f(x) < 0" /> 的区间</p><p><Math tex="|f(x)| = -f(x)" />，乘了 <Math tex="-1" /></p><p>单调性<strong>反转</strong>（增变减，减变增）</p>
                  </div>
                  <hr className="border-gray-400" />
                  <p className="font-bold">例：<Math tex="y = |x^2 - 4|" /> 的单调性</p>
                  <p>零点为 <Math tex="x = \pm 2" />，对称轴 <Math tex="x = -\tfrac{b}{2a} = -\tfrac{0}{2} = 0" />，在 <Math tex="(-2, 2)" /> 上原函数为负，翻折后单调性反转</p>
                  <table className="border border-gray-400 border-collapse text-center">
                    <thead>
                      <tr className="border-b border-gray-400">
                        <th className="py-px px-1.5 border-r border-gray-400">区间</th>
                        <th className="py-px px-1.5 border-r border-gray-400">原函数单调性</th>
                        <th className="py-px px-1.5 border-r border-gray-400"><Math tex="f(x)" /> 正负</th>
                        <th className="py-px px-1.5"><Math tex="|f(x)|" /> 单调性</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-300">
                        <td className="py-px px-1.5 border-r border-gray-400"><Math tex="(-\infty, -2)" /></td>
                        <td className="py-px px-1.5 border-r border-gray-400">递减</td>
                        <td className="py-px px-1.5 border-r border-gray-400"><Math tex="> 0" /></td>
                        <td className="py-px px-1.5 font-bold">递减（不变）</td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <td className="py-px px-1.5 border-r border-gray-400"><Math tex="(-2, 0)" /></td>
                        <td className="py-px px-1.5 border-r border-gray-400">递减</td>
                        <td className="py-px px-1.5 border-r border-gray-400"><Math tex="< 0" /></td>
                        <td className="py-px px-1.5 font-bold">递增（反转）</td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <td className="py-px px-1.5 border-r border-gray-400"><Math tex="(0, 2)" /></td>
                        <td className="py-px px-1.5 border-r border-gray-400">递增</td>
                        <td className="py-px px-1.5 border-r border-gray-400"><Math tex="< 0" /></td>
                        <td className="py-px px-1.5 font-bold">递减（反转）</td>
                      </tr>
                      <tr>
                        <td className="py-px px-1.5 border-r border-gray-400"><Math tex="(2, +\infty)" /></td>
                        <td className="py-px px-1.5 border-r border-gray-400">递增</td>
                        <td className="py-px px-1.5 border-r border-gray-400"><Math tex="> 0" /></td>
                        <td className="py-px px-1.5 font-bold">递增（不变）</td>
                      </tr>
                    </tbody>
                  </table>
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
