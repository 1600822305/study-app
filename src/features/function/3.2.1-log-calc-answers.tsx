import type { ReactNode } from 'react';
import { Math as MathTex, PageBreak } from '@/components/shared';
import { logDefinitionPractice, logParamPractice, logIdentityPractice, logRulePractice, logChangeBasePractice, logSubstitutionPractice, logDerivPractice } from './data/3.2.1/3.2.1-log-calc-practice';
import type { QuizQuestionData } from '@/types';

// ══════════════════════════════════════════════
// 解析内容（唯一数据源）— 交互 + 打印共用
// ══════════════════════════════════════════════

export const logCalcExplanations: Record<string, ReactNode> = {
  // ── 分组一：定义与互化 ──
  'logdef-1': (
    <>
      <p><strong>思路</strong>：用对数表示 <MathTex tex="a" /> 就是把指数式 <MathTex tex="e^a = 3" /> 互化为对数式</p>
      <p><strong>结论</strong>：<MathTex tex="a = \ln 3" /></p>
    </>
  ),
  'logdef-2': (
    <>
      <p><strong>第一步</strong>：由 <MathTex tex="\log_a 64 = 2" /> 互化为指数式，得 <MathTex tex="a^2 = 64" /></p>
      <p><strong>第二步</strong>：解得 <MathTex tex="a = \pm 8" /></p>
      <p><strong>第三步</strong>：对数的底数要求 <MathTex tex="a > 0" /> 且 <MathTex tex="a \neq 1" />，舍去 <MathTex tex="a = -8" /></p>
      <p><strong>结论</strong>：<MathTex tex="a = 8" /></p>
    </>
  ),
  'logdef-3': (
    <>
      <p><strong>第一步</strong>：令 <MathTex tex="x = \log_{\sqrt{3}} 81" />，由互化得 <MathTex tex="(\sqrt{3})^x = 81" /></p>
      <p><strong>第二步</strong>：化根号为分数指数幂 <MathTex tex="\sqrt{3} = 3^{1/2}" />，即 <MathTex tex="3^{x/2} = 3^4" /></p>
      <p><strong>第三步</strong>：由指数相等 <MathTex tex="\tfrac{x}{2} = 4" />，得 <MathTex tex="x = 8" /></p>
    </>
  ),
  'logdef-4': (
    <>
      <p><strong>第一步</strong>：令 <MathTex tex="x = \log_4 \tfrac{1}{8}" />，由互化得 <MathTex tex="4^x = \tfrac{1}{8}" /></p>
      <p><strong>第二步</strong>：化同底为 <MathTex tex="2" />，即 <MathTex tex="2^{2x} = 2^{-3}" /></p>
      <p><strong>第三步</strong>：由指数相等 <MathTex tex="2x = -3" />，得 <MathTex tex="x = -\tfrac{3}{2}" /></p>
    </>
  ),

  // ── 分组二：求参数取值范围 ──
  'logparam-1': (
    <>
      <p><strong>第一步</strong>：识别参数位置。真数 <MathTex tex="x^2 - 5x + 6" /> 含变量，底数 <MathTex tex="3" /> 是常数，只查真数条件</p>
      <p><strong>第二步</strong>：由真数 <MathTex tex="> 0" />，列不等式 <MathTex tex="x^2 - 5x + 6 > 0" /></p>
      <p><strong>第三步</strong>：因式分解 <MathTex tex="(x - 2)(x - 3) > 0" />，解得 <MathTex tex="x < 2" /> 或 <MathTex tex="x > 3" /></p>
      <p><strong>结论</strong>：定义域为 <MathTex tex="(-\infty, 2) \cup (3, +\infty)" /></p>
    </>
  ),
  'logparam-2': (
    <>
      <p><strong>第一步</strong>：由真数 <MathTex tex="> 0" />，列不等式 <MathTex tex="\dfrac{3 - x}{x + 2} > 0" /></p>
      <p><strong>第二步</strong>：分式 <MathTex tex="> 0" /> 等价于分子分母同号，即 <MathTex tex="(3 - x)(x + 2) > 0" /></p>
      <p><strong>第三步</strong>：分析同号情况</p>
      <p className="pl-4">若 <MathTex tex="3 - x > 0" /> 且 <MathTex tex="x + 2 > 0" />，得 <MathTex tex="-2 < x < 3" /></p>
      <p className="pl-4">若 <MathTex tex="3 - x < 0" /> 且 <MathTex tex="x + 2 < 0" />，无解</p>
      <p><strong>结论</strong>：定义域为 <MathTex tex="(-2, 3)" /></p>
    </>
  ),
  'logparam-3': (
    <>
      <p><strong>第一步</strong>：底数和真数都含参数 <MathTex tex="a" />，列三条件</p>
      <p className="pl-4">① 底数正：<MathTex tex="2a - 1 > 0" />，得 <MathTex tex="a > \tfrac{1}{2}" /></p>
      <p className="pl-4">② 底数非一：<MathTex tex="2a - 1 \neq 1" />，得 <MathTex tex="a \neq 1" /></p>
      <p className="pl-4">③ 真数正：<MathTex tex="3 - a > 0" />，得 <MathTex tex="a < 3" /></p>
      <p><strong>第二步</strong>：求交集 <MathTex tex="\tfrac{1}{2} < a < 3" />，再扣除 <MathTex tex="a = 1" /></p>
      <p><strong>结论</strong>：<MathTex tex="a \in \left(\tfrac{1}{2}, 1\right) \cup (1, 3)" /></p>
    </>
  ),
  'logparam-4': (
    <>
      <p><strong>第一步</strong>：列三条件</p>
      <p className="pl-4">① 底数正：<MathTex tex="a - 1 > 0" />，得 <MathTex tex="a > 1" /></p>
      <p className="pl-4">② 底数非一：<MathTex tex="a - 1 \neq 1" />，得 <MathTex tex="a \neq 2" /></p>
      <p className="pl-4">③ 真数正：<MathTex tex="a^2 - 3a + 2 > 0" />，因式分解 <MathTex tex="(a - 1)(a - 2) > 0" />，得 <MathTex tex="a < 1" /> 或 <MathTex tex="a > 2" /></p>
      <p><strong>第二步</strong>：求交集</p>
      <p className="pl-4"><MathTex tex="a > 1" /> 与 "<MathTex tex="a < 1" /> 或 <MathTex tex="a > 2" />" 交集，得 <MathTex tex="a > 2" /></p>
      <p className="pl-4">扣除 <MathTex tex="a = 2" />（<MathTex tex="a > 2" /> 已自动满足）</p>
      <p><strong>结论</strong>：<MathTex tex="a \in (2, +\infty)" /></p>
    </>
  ),

  // ── 分组三：4 个对数恒等式 ──
  'logid-2': (
    <>
      <p><strong>第一步</strong>：<MathTex tex="\log_2 8 = \log_2 2^3 = 3" />（恒等式 <MathTex tex="\log_a a^n = n" />）</p>
      <p><strong>第二步</strong>：<MathTex tex="\lg 100 = \lg 10^2 = 2" />（同上）</p>
      <p><strong>第三步</strong>：<MathTex tex="\ln e^2 = 2" />（同上）</p>
      <p><strong>结论</strong>：原式 <MathTex tex="= 3 + 2 - 2 = 3" /></p>
    </>
  ),
  'logid-3': (
    <>
      <p><strong>第一步</strong>：拆指数 <MathTex tex="a^{2m+1} = a^{2m} \cdot a = (a^m)^2 \cdot a" /></p>
      <p><strong>第二步</strong>：由 <MathTex tex="\log_a 2 = m" />，得 <MathTex tex="a^m = a^{\log_a 2} = 2" />（恒等式 <MathTex tex="a^{\log_a N} = N" />）</p>
      <p><strong>第三步</strong>：代入得 <MathTex tex="a^{2m+1} = 2^2 \cdot a = 4a" /></p>
      <p><strong>结论</strong>：<MathTex tex="a^{2m+1} = 4a" /></p>
    </>
  ),
  'logid-4': (
    <>
      <p><strong>第一项</strong>：把底数 <MathTex tex="27" /> 化为 <MathTex tex="3^3" /></p>
      <p className="pl-4"><MathTex tex="27^{\log_3 2} = (3^3)^{\log_3 2} = \left(3^{\log_3 2}\right)^3" /></p>
      <p className="pl-4">由恒等式 <MathTex tex="a^{\log_a N} = N" />，<MathTex tex="3^{\log_3 2} = 2" />，所以 <MathTex tex="27^{\log_3 2} = 2^3 = 8" /></p>
      <p><strong>第二项</strong>：<MathTex tex="2^{\log_2 6} = 6" />（直接套恒等式 <MathTex tex="a^{\log_a N} = N" />）</p>
      <p><strong>结论</strong>：原式 <MathTex tex="= 8 + 6 = 14" /></p>
    </>
  ),
  'logid-5': (
    <>
      <p><strong>思路</strong>：从外向内层层剥开，每层用对数恒等式反推</p>
      <p><strong>第一层</strong>：由 <MathTex tex="\log_3 M = 0" /> 得 <MathTex tex="M = 1" />（恒等式 <MathTex tex="\log_a 1 = 0" /> 反用）</p>
      <p className="pl-4">即 <MathTex tex="\log_2 (\log_4 x) = 1" /></p>
      <p><strong>第二层</strong>：由 <MathTex tex="\log_2 M = 1" /> 得 <MathTex tex="M = 2" />（恒等式 <MathTex tex="\log_a a = 1" /> 反用）</p>
      <p className="pl-4">即 <MathTex tex="\log_4 x = 2" /></p>
      <p><strong>第三层</strong>：由对数定义互化，<MathTex tex="\log_4 x = 2" /> 等价于 <MathTex tex="x = 4^2 = 16" /></p>
      <p><strong>结论</strong>：<MathTex tex="x = 16" /></p>
    </>
  ),

  // ── 分组四：对数运算三法则（顺序：正用拆分 → 开方派生 → 除减逆用 → 乘加逆用 → 幂乘逆用+凑整 → 综合） ──
  'logrule-1': (
    <>
      <p><strong>思路</strong>：正用拆分。先把 <MathTex tex="18" /> 分解为 <MathTex tex="2" />、<MathTex tex="3" /> 的乘积</p>
      <p><strong>第一步</strong>：<MathTex tex="18 = 2 \times 9 = 2 \times 3^2" /></p>
      <p><strong>第二步</strong>：用乘加法则拆开 <MathTex tex="\lg 18 = \lg 2 + \lg 3^2" /></p>
      <p><strong>第三步</strong>：用幂乘法则把指数移到前面 <MathTex tex="\lg 3^2 = 2 \lg 3" /></p>
      <p><strong>结论</strong>：<MathTex tex="\lg 18 = \lg 2 + 2 \lg 3" /></p>
    </>
  ),
  'logrule-2': (
    <>
      <p><strong>第一步</strong>：根号化为分数指数幂，<MathTex tex="\sqrt{8} = 8^{1/2}" /></p>
      <p><strong>第二步</strong>：用幂乘法则，<MathTex tex="\log_2 8^{1/2} = \dfrac{1}{2} \log_2 8" /></p>
      <p><strong>第三步</strong>：<MathTex tex="\log_2 8 = \log_2 2^3 = 3" />（恒等式 3）</p>
      <p><strong>结论</strong>：原式 <MathTex tex="= \dfrac{1}{2} \times 3 = \dfrac{3}{2}" /></p>
    </>
  ),
  'logrule-3': (
    <>
      <p><strong>思路</strong>：除减逆用，<MathTex tex="\log_a M - \log_a N = \log_a \dfrac{M}{N}" /></p>
      <p><strong>第一步</strong>：合并为一个对数 <MathTex tex="\log_3 6 - \log_3 2 = \log_3 \dfrac{6}{2} = \log_3 3" /></p>
      <p><strong>第二步</strong>：<MathTex tex="\log_3 3 = 1" />（恒等式 <MathTex tex="\log_a a = 1" />）</p>
      <p><strong>结论</strong>：原式 <MathTex tex="= 1" /></p>
    </>
  ),
  'logrule-4': (
    <>
      <p><strong>思路</strong>：乘加逆用，<MathTex tex="\log_a M + \log_a N = \log_a (MN)" /></p>
      <p><strong>第一步</strong>：识别凑整对子。<MathTex tex="5 \times 20 = 100" />，能凑成 <MathTex tex="\lg 100" /></p>
      <p><strong>第二步</strong>：合并 <MathTex tex="\lg 5 + \lg 20 = \lg(5 \times 20) = \lg 100" /></p>
      <p><strong>第三步</strong>：<MathTex tex="\lg 100 = \lg 10^2 = 2" />（恒等式 <MathTex tex="\log_a a^n = n" />）</p>
      <p><strong>结论</strong>：原式 <MathTex tex="= 2" /></p>
    </>
  ),
  'logrule-5': (
    <>
      <p><strong>思路</strong>：幂乘逆用 + 凑整对子。先把系数 <MathTex tex="2" /> 用幂乘收进真数，再用乘加合并</p>
      <p><strong>第一步</strong>：幂乘逆用 <MathTex tex="2 \lg 5 = \lg 5^2 = \lg 25" /></p>
      <p><strong>第二步</strong>：识别凑整对子。<MathTex tex="25 \times 4 = 100" />，能凑成 <MathTex tex="\lg 100" /></p>
      <p><strong>第三步</strong>：乘加合并 <MathTex tex="\lg 25 + \lg 4 = \lg(25 \times 4) = \lg 100" /></p>
      <p><strong>结论</strong>：<MathTex tex="\lg 100 = 2" />（恒等式 3）</p>
    </>
  ),
  'logrule-6': (
    <>
      <p><strong>思路</strong>：分两部分处理，开方派生 + 乘加逆用</p>
      <p><strong>第一步</strong>：处理 <MathTex tex="\lg \sqrt{100}" /></p>
      <p className="pl-4">由开方派生 <MathTex tex="\lg \sqrt{100} = \dfrac{1}{2} \lg 100 = \dfrac{1}{2} \times 2 = 1" /></p>
      <p><strong>第二步</strong>：处理 <MathTex tex="\lg 2 + \lg 5" /></p>
      <p className="pl-4">由乘加逆用 <MathTex tex="\lg 2 + \lg 5 = \lg 10 = 1" /></p>
      <p><strong>结论</strong>：原式 <MathTex tex="= 1 + 1 = 2" /></p>
    </>
  ),

  // ── 分组五：换底公式（顺序：基础换底 2 + 链式 4） ──
  'logcb-1': (
    <>
      <p><strong>第一步</strong>：用主公式换底为 lg，<MathTex tex="\log_2 5 = \dfrac{\lg 5}{\lg 2}" /></p>
      <p><strong>第二步</strong>：拆分 <MathTex tex="\lg 5 = \lg \dfrac{10}{2} = \lg 10 - \lg 2 = 1 - a" /></p>
      <p><strong>结论</strong>：<MathTex tex="\log_2 5 = \dfrac{1 - a}{a}" /></p>
    </>
  ),
  'logcb-2': (
    <>
      <p><strong>第一步</strong>：底数 <MathTex tex="9 = 3^2" />，用系数提取（n = 2）</p>
      <p className="pl-4"><MathTex tex="\log_9 12 = \log_{3^2} 12 = \dfrac{1}{2} \log_3 12" /></p>
      <p><strong>第二步</strong>：拆分真数 <MathTex tex="12 = 4 \times 3" />，用乘加 + 幂乘法则</p>
      <p className="pl-4"><MathTex tex="\log_3 12 = \log_3 4 + \log_3 3 = 2 \log_3 2 + 1 = 2m + 1" /></p>
      <p><strong>结论</strong>：<MathTex tex="\log_9 12 = \dfrac{2m + 1}{2} = m + \dfrac{1}{2}" /></p>
    </>
  ),
  'logcb-3': (
    <>
      <p><strong>第一步</strong>：每项用主公式换底为 lg</p>
      <p className="pl-4"><MathTex tex="= \dfrac{\lg 4}{\lg 3} \cdot \dfrac{\lg 5}{\lg 4} \cdot \dfrac{\lg 6}{\lg 5} \cdot \dfrac{\lg 27}{\lg 6}" /></p>
      <p><strong>第二步</strong>：链式相消（中间 <MathTex tex="\lg 4" />、<MathTex tex="\lg 5" />、<MathTex tex="\lg 6" /> 抵消）</p>
      <p className="pl-4"><MathTex tex="= \dfrac{\lg 27}{\lg 3} = \log_3 27 = \log_3 3^3 = 3" /></p>
    </>
  ),
  'logcb-4': (
    <>
      <p><strong>第一步</strong>：用系数提取，<MathTex tex="9 = 3^2" />、<MathTex tex="4 = 2^2" /></p>
      <p className="pl-4"><MathTex tex="\log_2 9 = 2 \log_2 3" />，<MathTex tex="\log_3 4 = 2 \log_3 2" /></p>
      <p><strong>第二步</strong>：用互为倒数 <MathTex tex="\log_2 3 \cdot \log_3 2 = 1" /></p>
      <p className="pl-4"><MathTex tex="2 \log_2 3 \cdot 2 \log_3 2 = 4 \cdot 1 = 4" /></p>
    </>
  ),
  'logcb-5': (
    <>
      <p><strong>思路</strong>：四项分别用系数提取，再用互为倒数</p>
      <p><strong>第一步</strong>：系数提取每一项</p>
      <p className="pl-4"><MathTex tex="\log_2 9 = 2 \log_2 3" />，<MathTex tex="\log_4 3 = \dfrac{1}{2} \log_2 3" /></p>
      <p className="pl-4"><MathTex tex="\log_3 4 = 2 \log_3 2" />，<MathTex tex="\log_9 2 = \dfrac{1}{2} \log_3 2" /></p>
      <p><strong>第二步</strong>：分别合并两个括号</p>
      <p className="pl-4"><MathTex tex="\log_2 9 + \log_4 3 = 2 \log_2 3 + \dfrac{1}{2} \log_2 3 = \dfrac{5}{2} \log_2 3" /></p>
      <p className="pl-4"><MathTex tex="\log_3 4 + \log_9 2 = 2 \log_3 2 + \dfrac{1}{2} \log_3 2 = \dfrac{5}{2} \log_3 2" /></p>
      <p><strong>第三步</strong>：相乘 + 互为倒数</p>
      <p className="pl-4"><MathTex tex="\dfrac{5}{2} \log_2 3 \cdot \dfrac{5}{2} \log_3 2 = \dfrac{25}{4} \cdot 1 = \dfrac{25}{4}" /></p>
    </>
  ),
  'logcb-6': (
    <>
      <p><strong>第一步</strong>：用幂乘法则，<MathTex tex="\log_5 4 = \log_5 2^2 = 2 \log_5 2" /></p>
      <p><strong>第二步</strong>：用互为倒数变形 <MathTex tex="\log_5 2 = \dfrac{1}{\log_2 5} = \dfrac{1}{a}" /></p>
      <p><strong>结论</strong>：<MathTex tex="\log_5 4 = 2 \cdot \dfrac{1}{a} = \dfrac{2}{a}" /></p>
    </>
  ),

  // ── 分组六：设元法与综合化简（设元区 3 + 因式分解区 3） ──
  'logsub-1': (
    <>
      <p><strong>思路</strong>：单变量指数设元。先从 <MathTex tex="3^a = 4" /> 指对互化得到用 <MathTex tex="a" /> 表示 <MathTex tex="\log_3 2" /></p>
      <p><strong>第一步</strong>：指对互化，<MathTex tex="3^a = 4" /> 等价于 <MathTex tex="\log_3 4 = a" /></p>
      <p><strong>第二步</strong>：幂乘拆解，<MathTex tex="\log_3 4 = \log_3 2^2 = 2 \log_3 2 = a" />，所以 <MathTex tex="\log_3 2 = \dfrac{a}{2}" /></p>
      <p><strong>第三步</strong>：<MathTex tex="\log_3 32 = \log_3 2^5 = 5 \log_3 2 = 5 \cdot \dfrac{a}{2} = \dfrac{5a}{2}" /></p>
      <p><strong>结论</strong>：<MathTex tex="\log_3 32 = \dfrac{5a}{2}" /></p>
    </>
  ),
  'logsub-2': (
    <>
      <p><strong>思路</strong>：单变量对数设元 + 换底。关键凑整 <MathTex tex="\lg 5 = 1 - \lg 2 = 1 - a" /></p>
      <p><strong>第一步</strong>：主公式换底为 lg，<MathTex tex="\log_{25} 8 = \dfrac{\lg 8}{\lg 25}" /></p>
      <p><strong>第二步</strong>：拆分子。<MathTex tex="\lg 8 = \lg 2^3 = 3 \lg 2 = 3a" /></p>
      <p><strong>第三步</strong>：拆分母。<MathTex tex="\lg 25 = \lg 5^2 = 2 \lg 5 = 2(1 - a) = 2 - 2a" /></p>
      <p><strong>结论</strong>：<MathTex tex="\log_{25} 8 = \dfrac{3a}{2 - 2a} = \dfrac{3a}{2(1 - a)}" /></p>
    </>
  ),
  'logsub-3': (
    <>
      <p><strong>思路</strong>：双变量换底压轴。先把陌生底 <MathTex tex="15" /> 换为已知底 <MathTex tex="2" />，再用链式换底 <MathTex tex="\log_2 5 = \log_2 3 \cdot \log_3 5 = ab" /></p>
      <p><strong>第一步</strong>：主公式换底到 <MathTex tex="c = 2" />，<MathTex tex="\log_{15} 20 = \dfrac{\log_2 20}{\log_2 15}" /></p>
      <p><strong>第二步</strong>：用链式换底求 <MathTex tex="\log_2 5" /></p>
      <p className="pl-4"><MathTex tex="\log_3 5 = \dfrac{\log_2 5}{\log_2 3} = b" />，得 <MathTex tex="\log_2 5 = b \log_2 3 = ab" /></p>
      <p><strong>第三步</strong>：拆分子。<MathTex tex="\log_2 20 = \log_2(4 \times 5) = 2 + \log_2 5 = 2 + ab" /></p>
      <p><strong>第四步</strong>：拆分母。<MathTex tex="\log_2 15 = \log_2(3 \times 5) = \log_2 3 + \log_2 5 = a + ab" /></p>
      <p><strong>结论</strong>：<MathTex tex="\log_{15} 20 = \dfrac{2 + ab}{a + ab}" /></p>
    </>
  ),
  'logsub-4': (
    <>
      <p><strong>思路</strong>：直接型镜像。前两项都含 <MathTex tex="\lg 5" />，提公因式</p>
      <p><strong>第一步</strong>：提公因式 <MathTex tex="\lg 5" /></p>
      <p className="pl-4"><MathTex tex="(\lg 5)^2 + \lg 2 \cdot \lg 5 = \lg 5 \cdot (\lg 5 + \lg 2)" /></p>
      <p><strong>第二步</strong>：用 <MathTex tex="\lg 2 + \lg 5 = 1" /> 抵消</p>
      <p className="pl-4"><MathTex tex="\lg 5 \cdot (\lg 5 + \lg 2) = \lg 5 \cdot 1 = \lg 5" /></p>
      <p><strong>结论</strong>：原式 <MathTex tex="= \lg 5 + \lg 2 = 1" /></p>
    </>
  ),
  'logsub-5': (
    <>
      <p><strong>思路</strong>：拆分型，先拆 <MathTex tex="\lg 50 = \lg 5 + 1" /></p>
      <p><strong>第一步</strong>：<MathTex tex="\lg 50 = \lg(5 \times 10) = \lg 5 + 1" /></p>
      <p><strong>第二步</strong>：代入展开</p>
      <p className="pl-4"><MathTex tex="\lg 2 \cdot (\lg 5 + 1) + (\lg 5)^2 = \lg 2 \cdot \lg 5 + \lg 2 + (\lg 5)^2" /></p>
      <p><strong>第三步</strong>：含 <MathTex tex="\lg 5" /> 的两项提公因式</p>
      <p className="pl-4"><MathTex tex="\lg 5 \cdot (\lg 2 + \lg 5) + \lg 2 = \lg 5 \cdot 1 + \lg 2" /></p>
      <p><strong>结论</strong>：原式 <MathTex tex="= \lg 5 + \lg 2 = 1" /></p>
    </>
  ),
  'logsub-6': (
    <>
      <p><strong>思路</strong>：拆分型压轴。先拆 <MathTex tex="\lg 50 = \lg 5 + 1" /> 和 <MathTex tex="\lg 25 = 2 \lg 5" />，再展开重组</p>
      <p><strong>第一步</strong>：两个拆分。<MathTex tex="\lg 50 = \lg 5 + 1" />、<MathTex tex="\lg 25 = \lg 5^2 = 2 \lg 5" /></p>
      <p><strong>第二步</strong>：代入展开</p>
      <p className="pl-4"><MathTex tex="(\lg 2)^2 + \lg 2 \cdot (\lg 5 + 1) + 2 \lg 5" /></p>
      <p className="pl-4"><MathTex tex="= (\lg 2)^2 + \lg 2 \cdot \lg 5 + \lg 2 + 2 \lg 5" /></p>
      <p><strong>第三步</strong>：前两项提公因式 <MathTex tex="\lg 2" /></p>
      <p className="pl-4"><MathTex tex="\lg 2 \cdot (\lg 2 + \lg 5) + (\lg 2 + 2 \lg 5) = \lg 2 + \lg 2 + 2 \lg 5 = 2 \lg 2 + 2 \lg 5" /></p>
      <p><strong>第四步</strong>：再凑整一次</p>
      <p className="pl-4"><MathTex tex="2 \lg 2 + 2 \lg 5 = 2 (\lg 2 + \lg 5) = 2 \times 1 = 2" /></p>
      <p><strong>结论</strong>：原式 <MathTex tex="= 2" /></p>
    </>
  ),
  'logsub-7': (
    <>
      <p><strong>思路</strong>：设元 + 系数提取。底真都带指数，直接套系数提取公式</p>
      <p><strong>第一步</strong>：识别指数，<MathTex tex="27 = 3^3" />、<MathTex tex="25 = 5^2" /></p>
      <p><strong>第二步</strong>：用系数提取（真数指数 <MathTex tex="m = 2" /> 在分子、底数指数 <MathTex tex="n = 3" /> 在分母）</p>
      <p className="pl-4"><MathTex tex="\log_{27} 25 = \log_{3^3} 5^2 = \dfrac{2}{3} \log_3 5" /></p>
      <p><strong>第三步</strong>：代入 <MathTex tex="\log_3 5 = a" /></p>
      <p><strong>结论</strong>：<MathTex tex="\log_{27} 25 = \dfrac{2a}{3}" /></p>
    </>
  ),

  // ── 分组七：对数函数求导 ──
  'logderiv-1': (
    <>
      <p><strong>第一步</strong>：识别为 <MathTex tex="y = \log_a x" /> 类型，<MathTex tex="a = 5" /></p>
      <p><strong>第二步</strong>：套公式 <MathTex tex="y' = \dfrac{1}{x \ln a} = \dfrac{1}{x \ln 5}" /></p>
    </>
  ),
  'logderiv-2': (
    <>
      <p><strong>第一步</strong>：识别为 <MathTex tex="y = \ln f(x)" /> 类型，内函数 <MathTex tex="f(x) = 3x - 1" /></p>
      <p><strong>第二步</strong>：求 <MathTex tex="f'(x) = 3" /></p>
      <p><strong>第三步</strong>：套公式 <MathTex tex="y' = \dfrac{f'(x)}{f(x)} = \dfrac{3}{3x - 1}" /></p>
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
              {logCalcExplanations[q.id]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LogCalcAnswers() {
  return (
    <section className="mb-8 print-answers">
      <PageBreak label="答案与解析" />
      <h2 className="text-xl font-bold text-gray-900 mb-4">📝 3.2.1 对数与运算 — 答案与解析</h2>
      <AnswerSection title="一、定义与互化" questions={logDefinitionPractice} />
      <AnswerSection title="二、求参数取值范围" questions={logParamPractice} />
      <AnswerSection title="三、4 个对数恒等式" questions={logIdentityPractice} />
      <AnswerSection title="四、对数运算三法则" questions={logRulePractice} />
      <AnswerSection title="五、换底公式" questions={logChangeBasePractice} />
      <AnswerSection title="六、设元法与综合化简" questions={logSubstitutionPractice} />
      <AnswerSection title="七、对数函数的求导" questions={logDerivPractice} />
    </section>
  );
}
