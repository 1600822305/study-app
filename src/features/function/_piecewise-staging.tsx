/**
 * 暂存区：从 3.1-concept-page.tsx 单调性章节移出的分段函数内容
 * 将来用于独立的"分段函数"章节
 * 
 * 包含：
 * 0. 四个图判断增函数（从单调性章节移出）
 * 1. 分段函数单调性（两个条件）
 * 2. 分段函数单调性例题（求参数 a 的范围）
 * 3. 借助单调性求参例题（分段函数 f(2-a²)>f(a)）
 * 
 * 依赖的 diagram: monoQuiz1, monoQuiz2, monoQuiz3, monoQuiz4, linearIncDiagram, piecewiseIncDiagram
 * 来自: ./data/3.1/3.1-concept-diagrams
 */

// ============================================================
// 片段 0: 四个图判断增函数 (从单调性章节移出)
// 依赖的 diagram: monoQuiz1, monoQuiz2, monoQuiz3, monoQuiz4
// 来自: ./data/3.1/3.1-concept-diagrams
// ============================================================
/*
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🤔 下面四个图，哪一个可以叫做 <Math tex="\mathbb{R}" /> 上的增函数？</div>
              <div className="grid grid-cols-4 divide-x divide-gray-300 py-2">
                <div className="flex flex-col items-center">
                  <DebugGeo2dSvg data={monoQuiz1} width={100} height={75} />
                  <p className="font-bold mt-1">①</p>
                </div>
                <div className="flex flex-col items-center">
                  <DebugGeo2dSvg data={monoQuiz4} width={100} height={75} />
                  <p className="font-bold mt-1">②</p>
                </div>
                <div className="flex flex-col items-center">
                  <DebugGeo2dSvg data={monoQuiz3} width={100} height={75} />
                  <p className="font-bold mt-1">③</p>
                </div>
                <div className="flex flex-col items-center">
                  <DebugGeo2dSvg data={monoQuiz2} width={100} height={75} />
                  <p className="font-bold mt-1">④</p>
                </div>
              </div>
              <div className="grid grid-cols-4 divide-x divide-gray-300 border-t border-gray-300">
                <div className="px-2 py-1.5 text-sm">
                  <p><span className="text-orange-700 font-bold">✗ 不是</span>　有升有降</p>
                </div>
                <div className="px-2 py-1.5 text-sm">
                  <p><span className="text-orange-700 font-bold">✗ 不是</span>　中间断裂跳低</p>
                </div>
                <div className="px-2 py-1.5 text-sm">
                  <p><span className="text-green-700 font-bold">✓ 也是</span>　有跳跃但满足定义</p>
                </div>
                <div className="px-2 py-1.5 text-sm">
                  <p><span className="text-green-700 font-bold">✓ 正确</span>　连续光滑始终上走</p>
                </div>
              </div>
            </div>
*/

// ============================================================
// 片段 1: 分段函数单调性 + 例题 (原 lines 1036-1071)
// ============================================================
/*
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📝 分段函数单调性</div>
              <div className="px-3 py-2 space-y-1 leading-8">
                <p className="font-bold">分段函数在整个定义域上单调递增，需要同时满足：</p>
                <p>①<strong>各自单调</strong>：每一段在自己的区间上是增函数　②<strong>分界处衔接</strong>：左段终值 <Math tex="\leqslant" /> 右段起始值（不能跳低）</p>
              </div>
            </div>

            <PageBreak label="分段函数例题" />

            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-3 py-2 space-y-1 leading-8">
                <p className="font-bold">【例】若函数 <Math tex="f(x) = \begin{cases} (a-1)x + a - 2, & x > 0 \\ -x^2 + (3-a)x, & x \leqslant 0 \end{cases}" /> 是 <Math tex="\mathbb{R}" /> 上的增函数，则实数 <Math tex="a" /> 的取值范围是</p>
                <div className="flex items-start gap-2 mt-2">
                  <div className="flex-1 space-y-1">
                    <p>第一段 <Math tex="(a-1)x + a - 2" /> 可以看成一次函数 <Math tex="kx + b" /> 的形式，其中 <Math tex="k = a-1" />，<Math tex="b = a-2" /></p>
                    <p>作为一次函数想要递增，得满足 <Math tex="k > 0" />，也就是 <Math tex="a - 1 > 0" />，即 <strong className="text-orange-700"><Math tex="a > 1" /></strong></p>
                    <p>第二段 <Math tex="-x^2 + (3-a)x" /> 是二次函数，<Math tex="x^2" /> 前面的系数是 <Math tex="-1 < 0" />，所以开口向下</p>
                  </div>
                  <div className="flex-shrink-0 overflow-hidden" style={{ width: 110, height: 85 }}>
                    <div style={{ position: 'relative', left: -5, top: -2 }}>
                      <DebugGeo2dSvg data={linearIncDiagram} width={120} height={90} />
                    </div>
                  </div>
                </div>
                <p>对称轴：<Math tex="x = -\dfrac{b}{2a} = -\dfrac{3-a}{2 \times (-1)} = \dfrac{3-a}{2}" /></p>
                <p>因为 <Math tex="x \leqslant 0" /> 且开口向下，对称轴右边是递减的，所以只能看对称轴左边（递增部分）</p>
                <p>要让 <Math tex="x \leqslant 0" /> 整段都在递增区间内，对称轴必须在 <Math tex="x = 0" /> 的位置或者在右边，这样对称轴左边都是单调递增</p>
                <p>即 <Math tex="\dfrac{3-a}{2} \geqslant 0 \Rightarrow" /> <strong className="text-orange-700"><Math tex="a \leqslant 3" /></strong></p>

                <p className="font-bold mt-2">②分界处衔接：左段终值 <Math tex="\leqslant" /> 右段起始值</p>
                <p>在分界处令 <Math tex="x = 0" /> 代入分段函数：<Math tex="x > 0" /> 那边得 <Math tex="a - 2" />，<Math tex="x \leqslant 0" /> 那边得 <Math tex="0" />，左段 <Math tex="\leqslant" /> 右段：<Math tex="0 \leqslant a - 2" />，即 <strong className="text-orange-700"><Math tex="a \geqslant 2" /></strong></p>

                <p className="font-bold mt-2">综合：<Math tex="a > 1" /> 且 <Math tex="a \leqslant 3" /> 且 <Math tex="a \geqslant 2" />　→　<strong className="text-orange-700"><Math tex="a \in [2, 3]" /></strong></p>
              </div>
            </div>
*/

// ============================================================
// 片段 2: 借助单调性求参（分段函数）(原 lines 1118-1138)
// ============================================================
/*
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📝 借助单调性求参</div>
              <div className="px-3 py-2 space-y-1 leading-8">
                <p>已知函数 <Math tex="f(x) = \begin{cases} x^2 + 4x, & x \geqslant 0 \\ 4x - x^2, & x < 0 \end{cases}" />，若 <Math tex="f(2 - a^2) > f(a)" />，则实数 <Math tex="a" /> 的取值范围是</p>

                <div className="flex items-start gap-2 mt-2">
                  <div className="flex-1 space-y-1">
                    <p>上段因式分解：<Math tex="x(x+4)" />，零点 <Math tex="x = 0" /> 和 <Math tex="x = -4" />，但 <Math tex="x \geqslant 0" /> 所以只画右边</p>
                    <p>下段因式分解：<Math tex="x(4-x)" />，零点 <Math tex="x = 0" /> 和 <Math tex="x = 4" />，但 <Math tex="x < 0" /> 所以只画左边</p>
                    <p>从图像可以看出 <Math tex="f(x)" /> 在 <Math tex="\mathbb{R}" /> 上单调递增</p>
                  </div>
                  <div className="flex-shrink-0 overflow-hidden" style={{ width: 160, height: 130 }}>
                    <DebugGeo2dSvg data={piecewiseIncDiagram} width={160} height={130} />
                  </div>
                </div>

                <p>既然单调递增，x 越大 y 越大，反过来 y 越大 x 也越大</p>
                <p>因为增函数定义：<Math tex="f(x_1) > f(x_2) \Leftrightarrow x_1 > x_2" />，所以 <Math tex="f(2 - a^2) > f(a) \Leftrightarrow 2 - a^2 > a" /></p>
                <p><Math tex="a^2 + a - 2 < 0" />，因式分解得 <Math tex="(a+2)(a-1) < 0" />，解得 <strong className="text-orange-700"><Math tex="-2 < a < 1" /></strong></p>
              </div>
            </div>
*/
