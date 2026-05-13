import type { ReactNode } from 'react';
import { Math as MathTex, PageBreak } from '@/components/shared';
import { logFuncDefinitionPractice, logFuncGraphPractice, logFuncComparePractice, logFuncIneqPractice, logFuncMonoPractice, logFuncRangePractice, logFuncParamPractice, logFuncGraphicPractice } from './data/3.2.2/3.2.2-log-func-practice';
import type { QuizQuestionData } from '@/types';

// ══════════════════════════════════════════════
// 解析内容（唯一数据源）— 交互 + 打印共用
// ══════════════════════════════════════════════

export const logFuncExplanations: Record<string, ReactNode> = {
  // ── 分组一：对数函数定义与基础运算 ──
  'logfn-1': (
    <>
      <p><strong>第一步</strong>：代入 <MathTex tex="x = 5" />，得 <MathTex tex="f(5) = \log_2 (5 - 1) = \log_2 4" /></p>
      <p><strong>第二步</strong>：由 <MathTex tex="\log_2 4 = \log_2 2^2 = 2" /></p>
      <p><strong>结论</strong>：<MathTex tex="f(5) = 2" /></p>
    </>
  ),
  'logfn-2': (
    <>
      <p><strong>第一步</strong>：由 <MathTex tex="f(x) = 2" />，得 <MathTex tex="\log_3 (2x - 1) = 2" /></p>
      <p><strong>第二步</strong>：化为指数式 <MathTex tex="2x - 1 = 3^2 = 9" /></p>
      <p><strong>第三步</strong>：解得 <MathTex tex="2x = 10" />，即 <MathTex tex="x = 5" /></p>
      <p><strong>第四步</strong>：检查定义域 <MathTex tex="2x - 1 > 0" />，即 <MathTex tex="x > \tfrac{1}{2}" />，<MathTex tex="x = 5" /> 满足</p>
      <p><strong>结论</strong>：<MathTex tex="x = 5" /></p>
    </>
  ),
  'logfn-3': (
    <>
      <p><strong>第一步</strong>：由 <MathTex tex="f(16) = 4" />，得 <MathTex tex="\log_a 16 = 4" /></p>
      <p><strong>第二步</strong>：化为指数式 <MathTex tex="a^4 = 16" />，解得 <MathTex tex="a = 2" />（因 <MathTex tex="a > 0" />）</p>
      <p><strong>第三步</strong>：所以 <MathTex tex="f(x) = \log_2 x" /></p>
      <p><strong>第四步</strong>：<MathTex tex="f(8) = \log_2 8 = \log_2 2^3 = 3" /></p>
      <p><strong>结论</strong>：<MathTex tex="f(8) = 3" /></p>
    </>
  ),
  'logfn-4': (
    <>
      <p><strong>第一步</strong>：由对数函数要求真数 <MathTex tex="> 0" />，列不等式 <MathTex tex="x + 5 > 0" /></p>
      <p><strong>第二步</strong>：解得 <MathTex tex="x > -5" /></p>
      <p><strong>结论</strong>：定义域为 <MathTex tex="(-5, +\infty)" /></p>
    </>
  ),
  'logfn-5': (
    <>
      <p><strong>思路</strong>：对数函数要求底数必须大于 0 且不等于 1，对底数 <MathTex tex="a - 2" /> 列这两个条件</p>
      <p><strong>第一步</strong>：由底数 <MathTex tex="a - 2 > 0" />，得 <MathTex tex="a > 2" /></p>
      <p><strong>第二步</strong>：由底数 <MathTex tex="a - 2 \neq 1" />，得 <MathTex tex="a \neq 3" /></p>
      <p><strong>第三步</strong>：综合两个条件，<MathTex tex="a > 2" /> 且 <MathTex tex="a \neq 3" /></p>
      <p><strong>结论</strong>：<MathTex tex="a \in (2, 3) \cup (3, +\infty)" /></p>
    </>
  ),
  // ── 分组二：图像与性质 ──
  'lfg-1': (
    <>
      <p><strong>第一步</strong>：让真数等于 1，列方程 <MathTex tex="2x - 6 = 1" />，得 <MathTex tex="x = \tfrac{7}{2}" /></p>
      <p><strong>第二步</strong>：代入得 <MathTex tex="y = \log_a 1 + 3 = 0 + 3 = 3" /></p>
      <p><strong>结论</strong>：恒过定点 <MathTex tex="\left(\tfrac{7}{2}, 3\right)" /></p>
    </>
  ),
  'lfg-2': (
    <>
      <p><strong>第一步</strong>：图像经过 <MathTex tex="(2, -1)" />，代入得 <MathTex tex="\log_a 2 = -1" /></p>
      <p><strong>第二步</strong>：化为指数式 <MathTex tex="a^{-1} = 2" />，即 <MathTex tex="\dfrac{1}{a} = 2" />，所以 <MathTex tex="a = \tfrac{1}{2}" /></p>
      <p><strong>结论</strong>：<MathTex tex="a = \tfrac{1}{2}" /></p>
    </>
  ),
  'lfg-3': (
    <>
      <p><strong>第一步</strong>：由真数大于 0，列不等式 <MathTex tex="2x - x^2 > 0" /></p>
      <p><strong>第二步</strong>：提公因式得 <MathTex tex="x(2 - x) > 0" />，等价于 <MathTex tex="x(x - 2) < 0" /></p>
      <p><strong>第三步</strong>：解二次不等式，得 <MathTex tex="0 < x < 2" /></p>
      <p><strong>结论</strong>：定义域为 <MathTex tex="(0, 2)" /></p>
    </>
  ),
  'lfg-4': (
    <>
      <p><strong>第一步</strong>：底数 <MathTex tex="\tfrac{1}{2} < 1" />，外函数 <MathTex tex="\log_{\frac{1}{2}} t" /> 是减函数；内函数 <MathTex tex="x + 1" /> 是增函数，由"同增异减"得 <MathTex tex="f(x)" /> 是减函数，端点反过来取最值</p>
      <p><strong>第二步</strong>：<MathTex tex="x = 1" /> 时，<MathTex tex="f(1) = \log_{\frac{1}{2}} 2 = -1" />（最大值）</p>
      <p><strong>第三步</strong>：<MathTex tex="x = 7" /> 时，<MathTex tex="f(7) = \log_{\frac{1}{2}} 8 = -3" />（最小值）</p>
      <p><strong>结论</strong>：值域为 <MathTex tex="[-3, -1]" /></p>
    </>
  ),
  'lfg-5': (
    <>
      <p><strong>第一步</strong>：内函数 <MathTex tex="x - 3" /> 关于 <MathTex tex="x" /> 是增函数</p>
      <p><strong>第二步</strong>：要 <MathTex tex="f(x)" /> 是减函数，由"同增异减"，外函数 <MathTex tex="\log_a t" /> 必须是减函数，即底数满足 <MathTex tex="0 < a < 1" /></p>
      <p><strong>结论</strong>：<MathTex tex="a \in (0, 1)" /></p>
    </>
  ),
  'lfg-6': (
    <>
      <p><strong>第一步</strong>：定义域优先，由真数大于 0 得 <MathTex tex="x - 1 > 0" />，即 <MathTex tex="x > 1" /></p>
      <p><strong>第二步</strong>：化同底，把 2 改写为 <MathTex tex="\log_2 4" />，原不等式变为 <MathTex tex="\log_2 (x - 1) < \log_2 4" /></p>
      <p><strong>第三步</strong>：底数 <MathTex tex="2 > 1" />，对数函数是增函数，所以 <MathTex tex="x - 1 < 4" />，得 <MathTex tex="x < 5" /></p>
      <p><strong>第四步</strong>：综合两个条件，<MathTex tex="1 < x < 5" /></p>
      <p><strong>结论</strong>：解集为 <MathTex tex="(1, 5)" /></p>
    </>
  ),
  'lfg-7': (
    <>
      <p><strong>第一步</strong>：把 0 改写为 <MathTex tex="\log_a 1" />，原不等式变为 <MathTex tex="\log_a 5 < \log_a 1" /></p>
      <p><strong>第二步</strong>：真数 <MathTex tex="5 > 1" />，但 <MathTex tex="\log_a 5 < \log_a 1" />，说明对数函数是减函数，所以底数满足 <MathTex tex="0 < a < 1" /></p>
      <p><strong>结论</strong>：<MathTex tex="a \in (0, 1)" /></p>
    </>
  ),
  // ── 分组三：比较大小 ──
  'lfc-1': (
    <>
      <p><strong>第一步</strong>：底数 <MathTex tex="5 > 1" />，所以 <MathTex tex="y = \log_5 x" /> 是增函数</p>
      <p><strong>第二步</strong>：比较真数 <MathTex tex="3 < 6" /></p>
      <p><strong>结论</strong>：增函数真数大的值也大，所以 <MathTex tex="\log_5 3 < \log_5 6" /></p>
    </>
  ),
  'lfc-2': (
    <>
      <p><strong>第一步</strong>：底数 <MathTex tex="0 < \tfrac{1}{3} < 1" />，所以 <MathTex tex="y = \log_{\frac{1}{3}} x" /> 是减函数</p>
      <p><strong>第二步</strong>：比较真数 <MathTex tex="4 < 5" /></p>
      <p><strong>结论</strong>：减函数真数大的值反而小，所以 <MathTex tex="\log_{\frac{1}{3}} 4 > \log_{\frac{1}{3}} 5" /></p>
    </>
  ),
  'lfc-3': (
    <>
      <p><strong>第一步</strong>：换底为 <MathTex tex="\lg" /></p>
      <p className="pl-4"><MathTex tex="\log_2 0.5 = \dfrac{\lg 0.5}{\lg 2}" />，<MathTex tex="\log_3 0.5 = \dfrac{\lg 0.5}{\lg 3}" /></p>
      <p><strong>第二步</strong>：分子 <MathTex tex="\lg 0.5 < 0" /> 相同，分母 <MathTex tex="0 < \lg 2 < \lg 3" />（都为正）</p>
      <p><strong>结论</strong>：分子负、分母正，整体为负；分母越大，负数越靠近 0（数值越大），所以 <MathTex tex="\log_2 0.5 < \log_3 0.5" /></p>
    </>
  ),
  'lfc-4': (
    <>
      <p><strong>第一步</strong>：化同底为 2。底数 <MathTex tex="4 = 2^2" />、真数 <MathTex tex="25 = 5^2" />，用系数提取</p>
      <p className="pl-4"><MathTex tex="\log_4 25 = \log_{2^2} 5^2 = \tfrac{2}{2} \log_2 5 = \log_2 5" /></p>
      <p><strong>结论</strong>：两式化简后相同，<MathTex tex="\log_2 5 = \log_4 25" /></p>
    </>
  ),
  'lfc-5': (
    <>
      <p><strong>第一步</strong>：比较 <MathTex tex="\log_3 5" /> 和 <MathTex tex="\log_3 3 = 1" />，同底 <MathTex tex="3 > 1" /> 增函数</p>
      <p>真数大值大，<MathTex tex="5 > 3" />，所以 <MathTex tex="\log_3 5 > \log_3 3 = 1" /></p>
      <p><strong>第二步</strong>：比较 <MathTex tex="\log_5 3" /> 和 <MathTex tex="\log_5 5 = 1" />，同底 <MathTex tex="5 > 1" /> 增函数</p>
      <p>真数大值大，<MathTex tex="3 < 5" />，所以 <MathTex tex="\log_5 3 < \log_5 5 = 1" /></p>
      <p><strong>结论</strong>：<MathTex tex="\log_3 5 > 1 > \log_5 3" /></p>
    </>
  ),
  'lfc-6': (
    <>
      <p><strong>第一步</strong>：比较 <MathTex tex="\log_5 0.5" /> 和 <MathTex tex="\log_5 1 = 0" />，同底 <MathTex tex="5 > 1" /> 增函数</p>
      <p>真数大值大，<MathTex tex="0.5 < 1" />，所以 <MathTex tex="\log_5 0.5 < \log_5 1 = 0" /></p>
      <p><strong>第二步</strong>：比较 <MathTex tex="\log_2 5" /> 和 <MathTex tex="\log_2 2 = 1" />，同底 <MathTex tex="2 > 1" /> 增函数</p>
      <p>真数大值大，<MathTex tex="5 > 2" />，所以 <MathTex tex="\log_2 5 > \log_2 2 = 1" /></p>
      <p><strong>结论</strong>：<MathTex tex="\log_5 0.5 < 0 < 1 < \log_2 5" />，即 <MathTex tex="\log_5 0.5 < \log_2 5" /></p>
    </>
  ),
  'lfc-7': (
    <>
      <p><strong>第一步</strong>：比较 <MathTex tex="2^{0.3}" /> 和 <MathTex tex="2^0 = 1" />，底 <MathTex tex="2 > 1" /> 增函数</p>
      <p>指数大值大，<MathTex tex="0.3 > 0" />，所以 <MathTex tex="2^{0.3} > 2^0 = 1" /></p>
      <p><strong>第二步</strong>：比较 <MathTex tex="\log_3 0.5" /> 和 <MathTex tex="\log_3 1 = 0" />，底 <MathTex tex="3 > 1" /> 增函数</p>
      <p>真数大值大，<MathTex tex="0.5 < 1" />，所以 <MathTex tex="\log_3 0.5 < \log_3 1 = 0" /></p>
      <p><strong>结论</strong>：<MathTex tex="2^{0.3} > 1 > 0 > \log_3 0.5" />，即 <MathTex tex="2^{0.3} > \log_3 0.5" /></p>
    </>
  ),
  'lfc-8': (
    <>
      <p><strong>第一步</strong>：比较 <MathTex tex="\log_{0.5} 2" /> 和 <MathTex tex="\log_{0.5} 1 = 0" />，底 <MathTex tex="0 < 0.5 < 1" /> 减函数</p>
      <p>真数大值小，<MathTex tex="2 > 1" />，所以 <MathTex tex="\log_{0.5} 2 < \log_{0.5} 1 = 0" /></p>
      <p><strong>第二步</strong>：<MathTex tex="\left(\tfrac{1}{3}\right)^{0.5}" /> 是指数函数值，恒为正，所以 <MathTex tex="\left(\tfrac{1}{3}\right)^{0.5} > 0" /></p>
      <p><strong>结论</strong>：<MathTex tex="\log_{0.5} 2 < 0 < \left(\tfrac{1}{3}\right)^{0.5}" />，即 <MathTex tex="\log_{0.5} 2 < \left(\tfrac{1}{3}\right)^{0.5}" /></p>
    </>
  ),
  // ── 分组四：对数不等式 ──
  'lfi-1': (
    <>
      <p><strong>第一步</strong>：真数 <MathTex tex="> 0" />，列不等式 <MathTex tex="x - 2 > 0" />，得 <MathTex tex="x > 2" />（定义域）</p>
      <p><strong>第二步</strong>：化同底，把 2 改写为 <MathTex tex="\log_3 9" />，原不等式变为 <MathTex tex="\log_3(x - 2) < \log_3 9" /></p>
      <p><strong>第三步</strong>：底数 <MathTex tex="3 > 1" />，底大同向，所以 <MathTex tex="x - 2 < 9" />，解得 <MathTex tex="x < 11" /></p>
      <p><strong>第四步</strong>：与定义域 <MathTex tex="x > 2" /> 求交集，得 <MathTex tex="2 < x < 11" />，所以解集为 <MathTex tex="(2, 11)" /></p>
    </>
  ),
  'lfi-2': (
    <>
      <p><strong>第一步</strong>：真数 <MathTex tex="> 0" />，列不等式 <MathTex tex="x + 1 > 0" />，得 <MathTex tex="x > -1" />（定义域）</p>
      <p><strong>第二步</strong>：化同底，把 <MathTex tex="-3" /> 改写为 <MathTex tex="\log_{\frac{1}{2}} 8" />（因为 <MathTex tex="\left(\tfrac{1}{2}\right)^{-3} = 8" />），原不等式变为 <MathTex tex="\log_{\frac{1}{2}}(x + 1) \geq \log_{\frac{1}{2}} 8" /></p>
      <p><strong>第三步</strong>：底数 <MathTex tex="0 < \tfrac{1}{2} < 1" />，底小反向，所以 <MathTex tex="x + 1 \leq 8" />，解得 <MathTex tex="x \leq 7" /></p>
      <p><strong>第四步</strong>：与定义域 <MathTex tex="x > -1" /> 求交集，得 <MathTex tex="-1 < x \leq 7" />，所以解集为 <MathTex tex="(-1, 7]" /></p>
    </>
  ),
  'lfi-3': (
    <>
      <p><strong>第一步</strong>：列两个真数大于 0。<MathTex tex="x - 1 > 0" /> 且 <MathTex tex="3 - x > 0" />，得定义域 <MathTex tex="1 < x < 3" /></p>
      <p><strong>情形一：<MathTex tex="a > 1" /></strong>。底大同向，<MathTex tex="x - 1 > 3 - x" />，解得 <MathTex tex="x > 2" />。与定义域求交集，得解集 <MathTex tex="(2, 3)" /></p>
      <p><strong>情形二：<MathTex tex="0 < a < 1" /></strong>。底小反向，<MathTex tex="x - 1 < 3 - x" />，解得 <MathTex tex="x < 2" />。与定义域求交集，得解集 <MathTex tex="(1, 2)" /></p>
      <p><strong>结论</strong>：<MathTex tex="a > 1" /> 时解集为 <MathTex tex="(2, 3)" />；<MathTex tex="0 < a < 1" /> 时解集为 <MathTex tex="(1, 2)" /></p>
    </>
  ),
  'lfi-4': (
    <>
      <p><strong>第一步</strong>：列真数大于 0，<MathTex tex="x + 1 > 0" />，得定义域 <MathTex tex="x > -1" />（右边真数 2 为正常数，不需再列条件）</p>
      <p><strong>情形一：<MathTex tex="a > 1" /></strong>。底大同向，<MathTex tex="x + 1 > 2" />，解得 <MathTex tex="x > 1" />。与定义域求交集，得解集 <MathTex tex="(1, +\infty)" /></p>
      <p><strong>情形二：<MathTex tex="0 < a < 1" /></strong>。底小反向，<MathTex tex="x + 1 < 2" />，解得 <MathTex tex="x < 1" />。与定义域求交集，得解集 <MathTex tex="(-1, 1)" /></p>
      <p><strong>结论</strong>：<MathTex tex="a > 1" /> 时解集为 <MathTex tex="(1, +\infty)" />；<MathTex tex="0 < a < 1" /> 时解集为 <MathTex tex="(-1, 1)" /></p>
    </>
  ),
  'lfi-5': (
    <>
      <p><strong>第一步</strong>：定义域 <MathTex tex="x > 0" />。令 <MathTex tex="t = \log_2 x" />，原不等式变为 <MathTex tex="t^2 - t - 2 < 0" /></p>
      <p><strong>第二步</strong>：因式分解 <MathTex tex="(t - 2)(t + 1) < 0" />，得 <MathTex tex="-1 < t < 2" /></p>
      <p><strong>第三步</strong>：回代 <MathTex tex="t = \log_2 x" />，得 <MathTex tex="-1 < \log_2 x < 2" />，即 <MathTex tex="\log_2 \tfrac{1}{2} < \log_2 x < \log_2 4" /></p>
      <p><strong>第四步</strong>：底数 <MathTex tex="2 > 1" />，底大同向，得 <MathTex tex="\tfrac{1}{2} < x < 4" />（在定义域内）</p>
      <p><strong>结论</strong>：解集为 <MathTex tex="\left(\tfrac{1}{2},\, 4\right)" /></p>
    </>
  ),
  'lfi-6': (
    <>
      <p><strong>第一步</strong>：定义域 <MathTex tex="x > 0" />。令 <MathTex tex="t = \log_3 x" />，原不等式变为 <MathTex tex="t^2 - 2t \leq 0" /></p>
      <p><strong>第二步</strong>：提公因式 <MathTex tex="t(t - 2) \leq 0" />，得 <MathTex tex="0 \leq t \leq 2" /></p>
      <p><strong>第三步</strong>：回代 <MathTex tex="t = \log_3 x" />，得 <MathTex tex="0 \leq \log_3 x \leq 2" />，即 <MathTex tex="\log_3 1 \leq \log_3 x \leq \log_3 9" /></p>
      <p><strong>第四步</strong>：底数 <MathTex tex="3 > 1" />，底大同向，得 <MathTex tex="1 \leq x \leq 9" />（在定义域内）</p>
      <p><strong>结论</strong>：解集为 <MathTex tex="[1,\, 9]" /></p>
    </>
  ),
  'lfi-7': (
    <>
      <p><strong>第一步</strong>：定义域。<MathTex tex="x + 2 > 0" /> 且 <MathTex tex="2x - 1 > 0" />，取交集得 <MathTex tex="x > \tfrac{1}{2}" /></p>
      <p><strong>情形一：<MathTex tex="a > 1" /></strong>。两边同取 <MathTex tex="a^x" />，<MathTex tex="a^x" /> 是增函数，方向不变，得 <MathTex tex="x + 2 > 2x - 1" />，解得 <MathTex tex="x < 3" />。与定义域求交集，得解集 <MathTex tex="\left(\tfrac{1}{2},\, 3\right)" /></p>
      <p><strong>情形二：<MathTex tex="0 < a < 1" /></strong>。两边同取 <MathTex tex="a^x" />，<MathTex tex="a^x" /> 是减函数，方向反转，得 <MathTex tex="x + 2 < 2x - 1" />，解得 <MathTex tex="x > 3" />。与定义域求交集，得解集 <MathTex tex="(3, +\infty)" /></p>
      <p><strong>结论</strong>：<MathTex tex="a > 1" /> 时解集为 <MathTex tex="\left(\tfrac{1}{2},\, 3\right)" />；<MathTex tex="0 < a < 1" /> 时解集为 <MathTex tex="(3, +\infty)" /></p>
    </>
  ),
  'lfi-8': (
    <>
      <p><strong>第一步</strong>：两边同取 <MathTex tex="\ln" />。<MathTex tex="\ln" /> 是增函数，方向不变</p>
      <p><strong>第二步</strong>：得 <MathTex tex="\ln (e^{x-1}) \geq \ln 2" />，即 <MathTex tex="x - 1 \geq \ln 2" /></p>
      <p><strong>第三步</strong>：解得 <MathTex tex="x \geq 1 + \ln 2" /></p>
      <p><strong>结论</strong>：解集为 <MathTex tex="[1 + \ln 2,\, +\infty)" /></p>
    </>
  ),
  // ── 分组五：复合对数函数 — 单调性 ──
  'lfm-1': (
    <>
      <p><strong>第一步</strong>：把 <MathTex tex="\log" /> 里的真数 <MathTex tex="3x - 1" /> 看成中间变量 <MathTex tex="t" /></p>
      <p><strong>第二步</strong>：内函数 <MathTex tex="t = 3x - 1" />，外函数 <MathTex tex="y = \log_2 t" /></p>
      <p><strong>结论</strong>：内函数 <MathTex tex="t = 3x - 1" /></p>
    </>
  ),
  'lfm-2': (
    <>
      <p><strong>第一步</strong>：把 <MathTex tex="\log" /> 里的真数 <MathTex tex="x^2 + 2" /> 看成中间变量 <MathTex tex="t" /></p>
      <p><strong>第二步</strong>：内函数 <MathTex tex="t = x^2 + 2" />，外函数 <MathTex tex="y = \log_5 t" /></p>
      <p><strong>结论</strong>：外函数 <MathTex tex="y = \log_5 t" /></p>
    </>
  ),
  'lfm-3': (
    <>
      <p><strong>第一步</strong>：求定义域。<MathTex tex="x^2 - 4 > 0" />，得 <MathTex tex="x < -2" /> 或 <MathTex tex="x > 2" /></p>
      <p><strong>第二步</strong>：外函数 <MathTex tex="y = \log_3 t" />，底 <MathTex tex="3 > 1" />，增函数；内函数 <MathTex tex="t = x^2 - 4" /> 开口向上，对称轴 <MathTex tex="x = 0" /></p>
      <p>在 <MathTex tex="(-\infty, -2)" /> 上：区间在对称轴左侧，内减；在 <MathTex tex="(2, +\infty)" /> 上：区间在对称轴右侧，内增</p>
      <p><strong>第三步</strong>：用同增异减</p>
      <p>在 <MathTex tex="(-\infty, -2)" /> 上：内减、外增，整体<strong>减</strong></p>
      <p>在 <MathTex tex="(2, +\infty)" /> 上：内增、外增，整体<strong>增</strong></p>
      <p><strong>结论</strong>：减区间 <MathTex tex="(-\infty, -2)" />，增区间 <MathTex tex="(2, +\infty)" /></p>
    </>
  ),
  'lfm-4': (
    <>
      <p><strong>第一步</strong>：求定义域。<MathTex tex="-x^2 + 2x + 3 > 0" />，等价于 <MathTex tex="(x - 3)(x + 1) < 0" />，得 <MathTex tex="-1 < x < 3" /></p>
      <p><strong>第二步</strong>：外函数 <MathTex tex="y = \log_2 t" />，底 <MathTex tex="2 > 1" />，增函数；内函数 <MathTex tex="t = -x^2 + 2x + 3" /> 开口向下，对称轴 <MathTex tex="x = 1" />（在定义域内）</p>
      <p>开口向下时左侧递增、右侧递减。在 <MathTex tex="(-1, 1]" /> 上内增；在 <MathTex tex="[1, 3)" /> 上内减</p>
      <p><strong>第三步</strong>：用同增异减</p>
      <p>在 <MathTex tex="(-1, 1]" /> 上：内增、外增，整体<strong>增</strong></p>
      <p>在 <MathTex tex="[1, 3)" /> 上：内减、外增，整体<strong>减</strong></p>
      <p><strong>结论</strong>：增区间 <MathTex tex="(-1, 1]" />，减区间 <MathTex tex="[1, 3)" /></p>
    </>
  ),
  'lfm-9': (
    <>
      <p><strong>思路</strong>：整体减有两种情形（外增内减 / 外减内增），分情形讨论三约束</p>
      <p><strong>情形一：<MathTex tex="a > 1" />（外增 + 内减）</strong></p>
      <p className="pl-4">内函数 <MathTex tex="t = x^2 - ax + 2" /> 开口向上，在 <MathTex tex="[1, +\infty)" /> 上不可能单调递减（必然进入递增段），<strong>无解</strong></p>
      <p><strong>情形二：<MathTex tex="0 < a < 1" />（外减 + 内增）</strong></p>
      <p className="pl-4">内单调约束：内函数在 <MathTex tex="[1, +\infty)" /> 上递增，需对称轴 <MathTex tex="\tfrac{a}{2} \leq 1" />，得 <MathTex tex="a \leq 2" /></p>
      <p className="pl-4">定义域约束：<MathTex tex="t(1) = 1 - a + 2 = 3 - a > 0" />，得 <MathTex tex="a < 3" /></p>
      <p className="pl-4">综上：三个条件取交集，得 <MathTex tex="0 < a < 1" /></p>
      <p><strong>结论</strong>：<MathTex tex="a \in (0, 1)" /></p>
    </>
  ),
  'lfm-5': (
    <>
      <p><strong>第一步</strong>：求定义域。<MathTex tex="3^x - 9 > 0" />，得 <MathTex tex="3^x > 9" />，解出 <MathTex tex="x > 2" /></p>
      <p><strong>第二步</strong>：外函数 <MathTex tex="y = \log_2 t" />，底 <MathTex tex="2 > 1" />，增函数；内函数 <MathTex tex="t = 3^x - 9" />，<MathTex tex="3^x" /> 是增函数，减常数不影响，所以内函数<strong>增</strong></p>
      <p><strong>第三步</strong>：内增、外增，整体<strong>增</strong></p>
      <p><strong>结论</strong>：增区间 <MathTex tex="(2, +\infty)" /></p>
    </>
  ),
  'lfm-6': (
    <>
      <p><strong>第一步</strong>：求定义域。<MathTex tex="x^2 - 6x + 5 > 0" />，即 <MathTex tex="(x - 1)(x - 5) > 0" />，得 <MathTex tex="x < 1" /> 或 <MathTex tex="x > 5" /></p>
      <p><strong>第二步</strong>：外函数 <MathTex tex="y = \log_{\frac{1}{2}} t" />，底 <MathTex tex="0 < \tfrac{1}{2} < 1" />，减函数；内函数 <MathTex tex="t = x^2 - 6x + 5" /> 开口向上，对称轴 <MathTex tex="x = 3" /></p>
      <p>在 <MathTex tex="(-\infty, 1)" /> 上：区间在对称轴左侧，内减；在 <MathTex tex="(5, +\infty)" /> 上：区间在对称轴右侧，内增</p>
      <p><strong>第三步</strong>：用同增异减</p>
      <p>在 <MathTex tex="(-\infty, 1)" /> 上：内减、外减，整体<strong>增</strong></p>
      <p>在 <MathTex tex="(5, +\infty)" /> 上：内增、外减，整体<strong>减</strong></p>
      <p><strong>结论</strong>：增区间 <MathTex tex="(-\infty, 1)" />，减区间 <MathTex tex="(5, +\infty)" /></p>
    </>
  ),
  'lfm-7': (
    <>
      <p><strong>第一步</strong>：求定义域。<MathTex tex="x^2 + 4x + 13 = (x + 2)^2 + 9 > 0" /> 恒成立，定义域为 <MathTex tex="\mathbb{R}" /></p>
      <p><strong>第二步</strong>：外函数 <MathTex tex="y = \lg t" />，底 <MathTex tex="10 > 1" />，增函数；内函数 <MathTex tex="t = x^2 + 4x + 13" /> 开口向上，对称轴 <MathTex tex="x = -2" /></p>
      <p>在 <MathTex tex="(-\infty, -2]" /> 上：内减；在 <MathTex tex="[-2, +\infty)" /> 上：内增</p>
      <p><strong>第三步</strong>：用同增异减</p>
      <p>在 <MathTex tex="(-\infty, -2]" /> 上：内减、外增，整体<strong>减</strong></p>
      <p>在 <MathTex tex="[-2, +\infty)" /> 上：内增、外增，整体<strong>增</strong></p>
      <p><strong>结论</strong>：减区间 <MathTex tex="(-\infty, -2]" />，增区间 <MathTex tex="[-2, +\infty)" /></p>
    </>
  ),
  'lfm-8': (
    <>
      <p><strong>第一步</strong>：求定义域。<MathTex tex="-x^2 + 4x > 0" />，即 <MathTex tex="x(4 - x) > 0" />，得 <MathTex tex="0 < x < 4" /></p>
      <p><strong>第二步</strong>：外函数 <MathTex tex="y = \log_{\frac{1}{2}} t" />，底 <MathTex tex="0 < \tfrac{1}{2} < 1" />，减函数；内函数 <MathTex tex="t = -x^2 + 4x" /> 开口向下，对称轴 <MathTex tex="x = 2" />（在定义域内）</p>
      <p>开口向下时左侧递增、右侧递减。在 <MathTex tex="(0, 2]" /> 上内增；在 <MathTex tex="[2, 4)" /> 上内减</p>
      <p><strong>第三步</strong>：用同增异减</p>
      <p>在 <MathTex tex="(0, 2]" /> 上：内增、外减，整体<strong>减</strong></p>
      <p>在 <MathTex tex="[2, 4)" /> 上：内减、外减，整体<strong>增</strong></p>
      <p><strong>结论</strong>：减区间 <MathTex tex="(0, 2]" />，增区间 <MathTex tex="[2, 4)" /></p>
    </>
  ),
  // ── 分组六：复合对数函数 — 值域与最值 ──
  'lfr-1': (
    <>
      <p><strong>第一步</strong>：求定义域。真数 <MathTex tex="x^2 + 2x + 5 = (x + 1)^2 + 4 \geq 4 > 0" /> 对任意 <MathTex tex="x" /> 都成立，定义域为 <MathTex tex="\mathbb{R}" /></p>
      <p><strong>第二步</strong>：设内函数 <MathTex tex="t = (x + 1)^2 + 4" />，当 <MathTex tex="x = -1" /> 时 <MathTex tex="t" /> 取最小值 <MathTex tex="4" />，所以 <MathTex tex="t \in [4, +\infty)" /></p>
      <p><strong>第三步</strong>：外函数 <MathTex tex="y = \log_2 t" />，底 <MathTex tex="2 > 1" /> 递增。<MathTex tex="t = 4" /> 时 <MathTex tex="y = \log_2 4 = 2" />，<MathTex tex="t" /> 越大 <MathTex tex="y" /> 越大</p>
      <p><strong>结论</strong>：值域为 <MathTex tex="[2, +\infty)" /></p>
    </>
  ),
  'lfr-2': (
    <>
      <p><strong>第一步</strong>：求定义域。真数 <MathTex tex="x^2 - 2x + 2 = (x - 1)^2 + 1 \geq 1 > 0" /> 对任意 <MathTex tex="x" /> 都成立，定义域为 <MathTex tex="\mathbb{R}" /></p>
      <p><strong>第二步</strong>：设内函数 <MathTex tex="t = (x - 1)^2 + 1" />，当 <MathTex tex="x = 1" /> 时 <MathTex tex="t" /> 取最小值 <MathTex tex="1" />，所以 <MathTex tex="t \in [1, +\infty)" /></p>
      <p><strong>第三步</strong>：外函数 <MathTex tex="y = \log_{\frac{1}{2}} t" />，底 <MathTex tex="0 < \tfrac{1}{2} < 1" /> 递减。<MathTex tex="t = 1" /> 时 <MathTex tex="y" /> 取最大值 <MathTex tex="\log_{\frac{1}{2}} 1 = 0" />；<MathTex tex="t" /> 越大 <MathTex tex="y" /> 越小</p>
      <p><strong>结论</strong>：值域为 <MathTex tex="(-\infty, 0]" /></p>
    </>
  ),
  'lfr-3': (
    <>
      <p><strong>第一步</strong>：求定义域。真数 <MathTex tex="4 - x^2 > 0" />，即 <MathTex tex="x^2 < 4" />，解得 <MathTex tex="-2 < x < 2" /></p>
      <p><strong>第二步</strong>：设内函数 <MathTex tex="t = 4 - x^2 = -(x^2) + 4" />，开口向下，<MathTex tex="x = 0" /> 时取最大值 <MathTex tex="4" />；<MathTex tex="x \to \pm 2" /> 时 <MathTex tex="t \to 0^+" />，所以 <MathTex tex="t \in (0, 4]" /></p>
      <p><strong>第三步</strong>：外函数 <MathTex tex="y = \log_3 t" />，底 <MathTex tex="3 > 1" /> 递增。<MathTex tex="t = 4" /> 时 <MathTex tex="y" /> 取最大值 <MathTex tex="\log_3 4" />；<MathTex tex="t \to 0^+" /> 时 <MathTex tex="y \to -\infty" /></p>
      <p><strong>结论</strong>：值域为 <MathTex tex="(-\infty, \log_3 4]" /></p>
    </>
  ),
  'lfr-4': (
    <>
      <p><strong>第一步</strong>：求定义域。<MathTex tex="x^2 - 2x + 3 = (x - 1)^2 + 2 \geq 2 > 0" /> 恒成立；题目限定 <MathTex tex="x \in [0, 3]" />，定义域取 <MathTex tex="[0, 3]" /></p>
      <p><strong>第二步</strong>：设内函数 <MathTex tex="t = (x - 1)^2 + 2" />，对称轴 <MathTex tex="x = 1" /> 在区间内。代入：<MathTex tex="x = 1" /> 时 <MathTex tex="t = 2" />（最小）；<MathTex tex="x = 0" /> 时 <MathTex tex="t = 3" />；<MathTex tex="x = 3" /> 时 <MathTex tex="t = 6" />（最大）。所以 <MathTex tex="t \in [2, 6]" /></p>
      <p><strong>第三步</strong>：外函数 <MathTex tex="y = \log_{\frac{1}{3}} t" />，底 <MathTex tex="0 < \tfrac{1}{3} < 1" /> 递减。<MathTex tex="t = 2" /> 时 <MathTex tex="y" /> 最大 <MathTex tex="= \log_{\frac{1}{3}} 2" />；<MathTex tex="t = 6" /> 时 <MathTex tex="y" /> 最小 <MathTex tex="= \log_{\frac{1}{3}} 6" /></p>
      <p><strong>结论</strong>：最大值 <MathTex tex="\log_{\frac{1}{3}} 2" />，最小值 <MathTex tex="\log_{\frac{1}{3}} 6" /></p>
    </>
  ),
  'lfr-5': (
    <>
      <p><strong>第一步</strong>：求定义域。<MathTex tex="x^2 + 4 \geq 4 > 0" /> 恒成立，定义域为 <MathTex tex="\mathbb{R}" /></p>
      <p><strong>第二步</strong>：设内函数 <MathTex tex="t = x^2 + 4" />，当 <MathTex tex="x = 0" /> 时 <MathTex tex="t" /> 取最小值 <MathTex tex="4" />，所以 <MathTex tex="t \in [4, +\infty)" /></p>
      <p><strong>第三步</strong>：底数 <MathTex tex="a" /> 含参，分两种情形讨论</p>
      <p><strong>情形一：<MathTex tex="a > 1" /></strong>。外函数递增，<MathTex tex="t = 4" /> 时 <MathTex tex="y" /> 取最小值 <MathTex tex="\log_a 4" />，<MathTex tex="t" /> 越大 <MathTex tex="y" /> 越大。值域 <MathTex tex="[\log_a 4, +\infty)" /></p>
      <p><strong>情形二：<MathTex tex="0 < a < 1" /></strong>。外函数递减，<MathTex tex="t = 4" /> 时 <MathTex tex="y" /> 取最大值 <MathTex tex="\log_a 4" />，<MathTex tex="t" /> 越大 <MathTex tex="y" /> 越小。值域 <MathTex tex="(-\infty, \log_a 4]" /></p>
      <p><strong>结论</strong>：<MathTex tex="a > 1" /> 时值域 <MathTex tex="[\log_a 4, +\infty)" />；<MathTex tex="0 < a < 1" /> 时值域 <MathTex tex="(-\infty, \log_a 4]" /></p>
    </>
  ),
  'lfr-6': (
    <>
      <p><strong>第一步</strong>：求定义域。<MathTex tex="-x^2 + 4x + 5 > 0" />，即 <MathTex tex="x^2 - 4x - 5 < 0" />，因式分解 <MathTex tex="(x - 5)(x + 1) < 0" />，得 <MathTex tex="-1 < x < 5" /></p>
      <p><strong>第二步</strong>：设内函数 <MathTex tex="t = -x^2 + 4x + 5 = -(x - 2)^2 + 9" />，开口向下，<MathTex tex="x = 2" /> 时取最大值 <MathTex tex="9" />；<MathTex tex="x \to -1" /> 或 <MathTex tex="x \to 5" /> 时 <MathTex tex="t \to 0^+" />，所以 <MathTex tex="t \in (0, 9]" /></p>
      <p><strong>第三步</strong>：底数 <MathTex tex="a" /> 含参，分两种情形讨论</p>
      <p><strong>情形一：<MathTex tex="a > 1" /></strong>。外函数递增，<MathTex tex="t = 9" /> 时 <MathTex tex="y" /> 取最大值 <MathTex tex="\log_a 9 = 2\log_a 3" />；<MathTex tex="t \to 0^+" /> 时 <MathTex tex="y \to -\infty" />。值域 <MathTex tex="(-\infty, 2\log_a 3]" /></p>
      <p><strong>情形二：<MathTex tex="0 < a < 1" /></strong>。外函数递减，<MathTex tex="t = 9" /> 时 <MathTex tex="y" /> 取最小值 <MathTex tex="\log_a 9 = 2\log_a 3" />；<MathTex tex="t \to 0^+" /> 时 <MathTex tex="y \to +\infty" />。值域 <MathTex tex="[2\log_a 3, +\infty)" /></p>
      <p><strong>结论</strong>：<MathTex tex="a > 1" /> 时值域 <MathTex tex="(-\infty, 2\log_a 3]" />；<MathTex tex="0 < a < 1" /> 时值域 <MathTex tex="[2\log_a 3, +\infty)" /></p>
    </>
  ),
  // ── 节七：含参反推 — 定义域与值域 ──
  'lfp-1': (
    <>
      <p><strong>第一步</strong>：真数 <MathTex tex="g(x) = x^2 + 2x + a" /> 开口向上，要恒正需 <MathTex tex="\Delta < 0" /></p>
      <p><strong>第二步</strong>：<MathTex tex="\Delta = 4 - 4a < 0" />，解得 <MathTex tex="a > 1" /></p>
      <p><strong>结论</strong>：<MathTex tex="a \in (1, +\infty)" /></p>
    </>
  ),
  'lfp-2': (
    <>
      <p><strong>情形一</strong>：<MathTex tex="a = 0" /> 时，<MathTex tex="g(x) = 1 > 0" /> 恒成立，满足</p>
      <p><strong>情形二</strong>：<MathTex tex="a \neq 0" /> 时，需 <MathTex tex="a > 0" />（开口向上）且 <MathTex tex="\Delta = 4a^2 - 4a < 0" /></p>
      <p>即 <MathTex tex="4a(a - 1) < 0" />，因 <MathTex tex="a > 0" /> 得 <MathTex tex="a < 1" />，所以 <MathTex tex="0 < a < 1" /></p>
      <p><strong>结论</strong>：综合两种情形，<MathTex tex="a \in [0, 1)" /></p>
    </>
  ),
  'lfp-3': (
    <>
      <p><strong>第一步</strong>：真数 <MathTex tex="g(x) = x^2 - 4x + a" /> 开口向上，值域为 <MathTex tex="\mathbb{R}" /> 需 <MathTex tex="\Delta \geq 0" /></p>
      <p><strong>第二步</strong>：<MathTex tex="\Delta = 16 - 4a \geq 0" />，解得 <MathTex tex="a \leq 4" /></p>
      <p><strong>结论</strong>：<MathTex tex="a \in (-\infty, 4]" /></p>
    </>
  ),
  'lfp-4': (
    <>
      <p><strong>第一步</strong>：真数 <MathTex tex="g(x) = x^2 + ax - a" /> 开口向上，值域为 <MathTex tex="\mathbb{R}" /> 需 <MathTex tex="\Delta \geq 0" /></p>
      <p><strong>第二步</strong>：<MathTex tex="\Delta = a^2 + 4a \geq 0" />，即 <MathTex tex="a(a + 4) \geq 0" /></p>
      <p>解得 <MathTex tex="a \leq -4" /> 或 <MathTex tex="a \geq 0" /></p>
      <p><strong>结论</strong>：<MathTex tex="a \in (-\infty, -4] \cup [0, +\infty)" /></p>
    </>
  ),
  'lfp-5': (
    <>
      <p><strong>第一步</strong>：真数 <MathTex tex="g(x) = x^2 + (a-1)x + a" /> 开口向上，要恒正需 <MathTex tex="\Delta < 0" /></p>
      <p><strong>第二步</strong>：<MathTex tex="\Delta = (a-1)^2 - 4a = a^2 - 6a + 1 < 0" /></p>
      <p>用求根公式解 <MathTex tex="a^2 - 6a + 1 = 0" />，得 <MathTex tex="a = 3 \pm 2\sqrt{2}" /></p>
      <p><strong>结论</strong>：<MathTex tex="a \in (3 - 2\sqrt{2},\; 3 + 2\sqrt{2})" /></p>
    </>
  ),
  // ── 分组八：图像法与多选综合 ──
  'lf8-1': (
    <>
      <p><strong>第一步</strong>：<MathTex tex="\lg x" /> 在 <MathTex tex="(0, +\infty)" /> 上递增，<MathTex tex="x" /> 也递增，所以 <MathTex tex="f(x) = \lg x + x - 2" /> 单调递增</p>
      <p><strong>第二步</strong>：<MathTex tex="f(1) = 0 + 1 - 2 = -1 < 0" /></p>
      <p><strong>第三步</strong>：<MathTex tex="f(2) = \lg 2 + 2 - 2 = \lg 2 \approx 0.3 > 0" /></p>
      <p><strong>第四步</strong>：<MathTex tex="f(1) \cdot f(2) < 0" />，由零点存在定理，零点在 <MathTex tex="(1, 2)" /> 内，又单调递增，所以唯一</p>
      <p><strong>结论</strong>：零点所在区间为 <MathTex tex="(1, 2)" /></p>
    </>
  ),
  'lf8-2': (
    <>
      <p><strong>第一步</strong>：分离变量，画 <MathTex tex="y = \log_3 x" /> 和 <MathTex tex="y = 3 - x" /></p>
      <p><strong>第二步</strong>：<MathTex tex="y = \log_3 x" /> 递增，过 <MathTex tex="(1, 0)" />、<MathTex tex="(3, 1)" />；<MathTex tex="y = 3 - x" /> 递减，过 <MathTex tex="(0, 3)" />、<MathTex tex="(3, 0)" /></p>
      <p><strong>第三步</strong>：<MathTex tex="x = 1" /> 时 <MathTex tex="\log_3 1 = 0 < 2 = 3 - 1" />，直线在上；<MathTex tex="x = 3" /> 时 <MathTex tex="\log_3 3 = 1 > 0 = 3 - 3" />，对数在上</p>
      <p><strong>第四步</strong>：一增一减，在 <MathTex tex="(1, 3)" /> 内恰有一个交点，其余区间不再相交</p>
      <p><strong>结论</strong>：1 个交点 = 1 个实数根</p>
    </>
  ),
  'lf8-3': (
    <>
      <p><strong>A</strong>：真数 <MathTex tex="x^2 - 2x > 0" />，即 <MathTex tex="x(x - 2) > 0" />，解得 <MathTex tex="x < 0" /> 或 <MathTex tex="x > 2" />，定义域是 <MathTex tex="(-\infty, 0) \cup (2, +\infty)" />，不是 <MathTex tex="\{x \mid x \neq 0, x \neq 2\}" />。<strong>❌</strong></p>
      <p><strong>B</strong>：在 <MathTex tex="(2, +\infty)" /> 上，内函数 <MathTex tex="x^2 - 2x" /> 递增，外函数 <MathTex tex="\log_2 t" /> 递增，同增得整体递增。<strong>✅</strong></p>
      <p><strong>C</strong>：内函数 <MathTex tex="(x-1)^2 - 1" /> 在 <MathTex tex="x = 1" /> 处取最小值 <MathTex tex="-1" />，但 <MathTex tex="x = 1" /> 不在定义域内；在定义域边界 <MathTex tex="x \to 0^-" /> 或 <MathTex tex="x \to 2^+" /> 时真数趋向 <MathTex tex="0^+" />，<MathTex tex="f(x) \to -\infty" />，无最小值。<strong>❌</strong></p>
      <p><strong>D</strong>：<MathTex tex="f(x) = 3" /> 即 <MathTex tex="x^2 - 2x = 8" />，解得 <MathTex tex="x = 4" /> 或 <MathTex tex="x = -2" />，两个都在定义域内。<strong>✅</strong></p>
      <p><strong>结论</strong>：选 <strong>BD</strong></p>
    </>
  ),
};

// ══════════════════════════════════════════════
// 打印答案组件
// ══════════════════════════════════════════════

function AnswerSection({ title, questions }: { title: string; questions: QuizQuestionData[] }) {
  return (
    <div className="mb-5">
      <p className="font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">{title}</p>
      <div className="columns-2 gap-4 text-gray-700" style={{ columnRule: '1px solid #e5e7eb' }}>
        {questions.map((q, i) => (
          <div key={q.id} className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">{i + 1}.</span>
            <div className="min-w-0">
              {logFuncExplanations[q.id]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LogFuncAnswers() {
  return (
    <section className="mb-8 print-answers">
      <PageBreak label="答案与解析" />
      <h2 className="text-xl font-bold text-gray-900 mb-4">📝 3.2.2 对数函数 — 答案与解析</h2>
      <AnswerSection title="一、什么是对数函数" questions={logFuncDefinitionPractice} />
      <AnswerSection title="二、图像与性质" questions={logFuncGraphPractice} />
      <AnswerSection title="三、比较大小" questions={logFuncComparePractice} />
      <AnswerSection title="四、对数不等式" questions={logFuncIneqPractice} />
      <AnswerSection title="五、复合对数函数 — 单调性" questions={logFuncMonoPractice} />
      <AnswerSection title="六、复合对数函数 — 值域与最值" questions={logFuncRangePractice} />
      <AnswerSection title="七、含参反推 — 定义域与值域" questions={logFuncParamPractice} />
      <AnswerSection title="八、图像法与多选综合" questions={logFuncGraphicPractice} />
    </section>
  );
}
