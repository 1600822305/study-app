/**
 * 暂存区：从 3.1-concept-page.tsx 移出的复合函数内容
 * 将来用于独立的"复合函数"章节
 * 
 * 包含：
 * 1. 什么是复合函数（概念 + 同增异减规则）
 * 2. 经典例题 —— 复合函数的单调性（填空）+ 绝对值知识卡
 * 3. 经典例题 —— 复合函数的单调性（多选）
 * 4. PracticeCard compositeMonoFill
 * 
 * 依赖:
 * - compositeMonoFill 来自 ./data/3.1/3.1-concept-practice
 * - functionConceptExplanations 来自 ./3.1-concept-answers
 */

// ============================================================
// 1. 什么是复合函数
// ============================================================
/*
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📝 什么是复合函数</div>
              <div className="grid grid-cols-[3fr_2fr]">
                <div className="pl-3 pr-0 py-2 space-y-0.5 leading-7 border-r border-gray-300">
                  <p>复合函数就是"函数套函数"，把一个函数的输出当作另一个函数的输入</p>
                  <p>比如 <Math tex="y = \sqrt{2x+1}" />，可以拆成两步：</p>
                  <p className="pl-4">先算内层：<Math tex="t = 2x + 1" />（一次函数）</p>
                  <p className="pl-4">再算外层：<Math tex="y = \sqrt{t}" />（根号函数）</p>
                  <p>其中内层 <Math tex="g(x) = 2x + 1 = t" />，外层 <Math tex="f(t) = \sqrt{t}" /></p>
                  <p>写成复合形式就是 <Math tex="y = f(g(x))" /></p>
                  <p className="font-bold mt-1">关键</p>
                  <p>先找出"内层是谁、外层是谁"，再分别看各自的单调性</p>
                  <p className="font-bold mt-1">总结</p>
                  <p>复合函数的单调性由内外层函数共同决定，当内外层函数单调性相同时，函数单调递增，相反时单调递减</p>
                </div>
                <div className="pl-3 pr-3 py-2 space-y-0.5 leading-7">
                  <p className="font-bold">同增异减 — 乘法规则</p>
                  <p>增 = 正号(+)，减 = 负号(-)</p>
                  <p>逐层相乘判断整体单调性：</p>
                  <p className="pl-4">增 × 增 = <strong className="text-orange-700">增</strong>　　增 × 减 = <strong className="text-orange-700">减</strong></p>
                  <p className="pl-4">减 × 增 = <strong className="text-orange-700">减</strong>　　减 × 减 = <strong className="text-orange-700">增</strong></p>
                  <p>三层及以上也一样，数"减"的个数：</p>
                  <p className="pl-4"><strong>偶数个减，得增；奇数个减，得减</strong></p>
                  <hr className="border-dashed border-gray-300" />
                  <p>哪一层不是全局单调的，就对那层分区间讨论</p>
                  <p className="pl-4">如二次函数：顶点两侧一增一减</p>
                  <p className="pl-4">如绝对值：<Math tex="t \geq 0" /> 时 <Math tex="|t| = t" /></p>
                  <p className="pl-4">　　　　　<Math tex="t < 0" /> 时 <Math tex="|t| = -t" /></p>
                </div>
              </div>
            </div>
*/

// ============================================================
// 2. 经典例题 —— 复合函数的单调性（填空）
// ============================================================
/*
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">经典例题 —— 复合函数的单调性（填空）</div>
              <div className="grid grid-cols-[11fr_9fr]">
                <div className="pl-3 pr-0 py-2 space-y-1 leading-7 border-r border-gray-300">
                  <p>函数 <Math tex="f(x) = \sqrt{x^2 + 2x - 3}" /> 的单调递减区间是 ______</p>
                  <div className="border-t border-dashed border-gray-300 pt-1 mt-1"></div>
                  <p><strong>第一步</strong>：确定内外层</p>
                  <p>内层 <Math tex="t = x^2 + 2x - 3" />，外层 <Math tex="y = \sqrt{t}" /></p>

                  <p><strong>第二步</strong>：求定义域。根号内需 <Math tex="\geq 0" />，即 <Math tex="x^2 + 2x - 3 \geq 0" /></p>
                  <p>因式分解得 <Math tex="(x+3)(x-1) \geq 0" />，得 <Math tex="x \leq -3" /> 或 <Math tex="x \geq 1" /></p>

                  <p><strong>第三步</strong>：分析内层单调性</p>
                  <p>内层是开口向上的二次函数，对称轴 <Math tex="x = -\dfrac{b}{2a} = -\dfrac{2}{2} = -1" /></p>
                  <p>在 <Math tex="(-\infty, -1)" /> 上递减，在 <Math tex="(-1, +\infty)" /> 上递增</p>
                  <p>结合定义域：<Math tex="(-\infty, -3]" /> 上递减，<Math tex="[1, +\infty)" /> 上递增</p>

                  <p><strong>第四步</strong>：外层 <Math tex="\sqrt{t}" /> 永远是增函数</p>

                  <p><strong>第五步</strong>：同增异减　　<Math tex="(-\infty, -3]" /> 递减↘ × 外层增↗ = <strong className="text-orange-700">减</strong></p>
                  <p>　　　　　　　　　　<Math tex="[1, +\infty)" /> 递增↗ × 外层增↗ = <strong className="text-orange-700">增</strong></p>
                  <p>所以单调递减区间为 <strong className="text-orange-700"><Math tex="(-\infty, -3]" /></strong></p>
                </div>
                <div className="pl-3 pr-3 py-2 space-y-1 leading-7">
                  <p className="font-bold">绝对值 = 离 0 有多远</p>
                  <p>结果永远 <Math tex="\geq 0" />，不可能是负数</p>
                  <p><Math tex="|3| = 3" />，<Math tex="|-3| = 3" />，<Math tex="|0| = 0" /></p>
                  <hr className="border-dashed border-gray-300" />
                  <p className="font-bold">去绝对值的规则</p>
                  <p><Math tex="t \geq 0" /> 时，<Math tex="|t| = t" />（本身就是正数，直接去掉）</p>
                  <p>例：<Math tex="|5| = 5" /></p>
                  <p><Math tex="t < 0" /> 时，<Math tex="|t| = -t" />（乘以 -1 把负数翻正）</p>
                  <p>例：<Math tex="|-3| = -(-3) = 3" /> ✓</p>
                  <p>平方去绝对值：<Math tex="|t|^2 = t^2" />（平方后一样）</p>
                  <hr className="border-dashed border-gray-300" />
                  <p className="font-bold">单调性</p>
                  <p><Math tex="|t| = t" /> 时系数 +1，增函数</p>
                  <p><Math tex="|t| = -t" /> 时系数 -1，减函数</p>
                  <p>所以绝对值不是全局单调的，需要分区间讨论</p>
                </div>
              </div>
            </div>
*/

// ============================================================
// 3. 经典例题 —— 复合函数的单调性（多选）
// ============================================================
/*
            <PageBreak label="复合函数单调性（多选）" />

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">经典例题 —— 复合函数的单调性（多选）</div>
              <div className="px-3 py-2 space-y-1">
                <p>已知函数 <Math tex="f(x) = -x^2 + 2x + 1" /> 的定义域为 <Math tex="(-2, 3)" />，则属于函数 <Math tex="f(|x|)" /> 的单调递增区间是（　　）</p>
                <p>A. <Math tex="(-\infty, -1)" />　　B. <Math tex="(-3, -1)" />　　C. <Math tex="(0, 1)" />　　D. <Math tex="(1, 3)" /></p>
                <div className="border-t border-dashed border-gray-300 pt-1 mt-1"></div>
                <p><strong>第一步</strong>：把 <Math tex="|x|" /> 直接代入 <Math tex="f" /> 的公式</p>
                <p><Math tex="f(x) = -x^2 + 2x + 1" />，把所有 <Math tex="x" /> 换成 <Math tex="|x|" />，得 <Math tex="f(|x|) = -|x|^2 + 2|x| + 1" /></p>
                <p>因为 <Math tex="|x|^2 = x^2" />（不管正负，平方后一样），所以 <Math tex="f(|x|) = -x^2 + 2|x| + 1" /></p>

                <p><strong>第二步</strong>：确定定义域。原来 <Math tex="f(x)" /> 的定义域是 <Math tex="(-2, 3)" />，现在 <Math tex="|x|" /> 要落在这个范围里</p>
                <p>因为 <Math tex="|x| \geq 0" />，所以 <Math tex="0 \leq |x| < 3" />，即 <Math tex="-3 < x < 3" />，定义域为 <Math tex="(-3, 3)" /></p>

                <p><strong>第三步</strong>：分 <Math tex="x \geq 0" /> 和 <Math tex="x < 0" /> 去掉绝对值，变成普通函数</p>
                <p>当 <Math tex="x \geq 0" /> 时，绝对值可以直接去掉，<Math tex="|x| = x" />，代入得 <Math tex="f(|x|) = -x^2 + 2x + 1 = -(x-1)^2 + 2" /></p>
                <p>开口向下，顶点 <Math tex="x = 1" />，在 <Math tex="[0, 1]" /> 上递增，在 <Math tex="[1, 3)" /> 上递减</p>
                <p>当 <Math tex="x < 0" /> 时，<Math tex="x" /> 是负数，加个负号才能变正，所以 <Math tex="|x| = -x" />（例如 <Math tex="x = -3" /> 时，<Math tex="|{-3}| = -(-3) = 3" />）</p>
                <p>代入得 <Math tex="f(|x|) = -x^2 + 2(-x) + 1 = -x^2 - 2x + 1 = -(x+1)^2 + 2" /></p>
                <p>开口向下，顶点 <Math tex="x = -1" />，在 <Math tex="(-3, -1)" /> 上递增，在 <Math tex="(-1, 0)" /> 上递减</p>

                <p><strong>第四步</strong>：逐个验证选项</p>
                <p><strong>A</strong> <Math tex="(-\infty, -1)" /> 超出定义域 <strong className="text-orange-700">✗</strong>　　<strong>B</strong> <Math tex="(-3, -1)" /> 递增区间 <strong className="text-orange-700">✓</strong>　　<strong>C</strong> <Math tex="(0, 1)" /> 递增区间 <strong className="text-orange-700">✓</strong>　　<strong>D</strong> <Math tex="(1, 3)" /> 递减区间 <strong className="text-orange-700">✗</strong></p>
              </div>
            </div>

            <PracticeCard questions={compositeMonoFill} title="" explanations={functionConceptExplanations} hideBlankLine optionCols={4} printOptionCols={4} />
*/
