import type { ReactNode } from 'react';
import { Math as MathTex, PageBreak } from '@/components/shared';
import { powerDefPractice, powerGraphPractice, powerOddEvenPractice, powerSummaryPractice } from './data/3.2.3/3.2.3-power-practice';
import type { QuizQuestionData } from '@/types';

// ══════════════════════════════════════════════
// 解析内容（唯一数据源）— 交互 + 打印共用
// ══════════════════════════════════════════════

export const powerExplanations: Record<string, ReactNode> = {
  // ── 节一：什么是幂函数 ──
  'pf1-1': (
    <>
      <p><strong>判别标准</strong>：幂函数的标准形式是 <MathTex tex="y = x^\alpha" />，<strong>系数必须为 1</strong>，指数 <MathTex tex="\alpha" /> 是常数，自变量 <MathTex tex="x" /> 在底数位置</p>
      <p><strong>A</strong> <MathTex tex="y = x^2" />：系数 1，指数 2 是常数，<strong>是</strong>幂函数</p>
      <p><strong>B</strong> <MathTex tex="y = 2x^3" />：系数 2，<strong>不是</strong>幂函数</p>
      <p><strong>C</strong> <MathTex tex="y = x^{-1}" />：系数 1，指数 -1 是常数，<strong>是</strong>幂函数</p>
      <p><strong>D</strong> <MathTex tex="y = (x+1)^2" />：底数是 <MathTex tex="x+1" /> 不是 <MathTex tex="x" />，<strong>不是</strong>幂函数</p>
      <p><strong>E</strong> <MathTex tex="y = \sqrt{x} = x^{1/2}" />：系数 1，指数 1/2 是常数，<strong>是</strong>幂函数</p>
      <p><strong>F</strong> <MathTex tex="y = 3^x" />：底数是常数 3，指数是变量 <MathTex tex="x" />，是指数函数<strong>不是</strong>幂函数</p>
      <p><strong>结论</strong>：选 <strong>A、C、E</strong></p>
    </>
  ),
  'pf1-2': (
    <>
      <p><strong>思路</strong>：含参条件题——先用「系数必须为 1」解出 <MathTex tex="m" /> 的候选值，再用「单调递增」代回检验</p>
      <p><strong>第一步</strong>：由幂函数定义，系数 <MathTex tex="m^2 - m - 1 = 1" />，整理得 <MathTex tex="m^2 - m - 2 = 0" /></p>
      <p><strong>第二步</strong>：因式分解 <MathTex tex="(m - 2)(m + 1) = 0" />，解得 <MathTex tex="m = 2" /> 或 <MathTex tex="m = -1" /></p>
      <p><strong>第三步</strong>：用单调递增条件检验（铁律③：在 <MathTex tex="(0, +\infty)" /> 递增要求指数 <MathTex tex="\alpha > 0" />）</p>
      <p className="pl-4">当 <MathTex tex="m = 2" /> 时，指数为 <MathTex tex="2m - 3 = 1 > 0" />，得 <MathTex tex="f(x) = x" />，在 <MathTex tex="(0, +\infty)" /> 递增，符合</p>
      <p className="pl-4">当 <MathTex tex="m = -1" /> 时，指数为 <MathTex tex="2m - 3 = -5 < 0" />，得 <MathTex tex="f(x) = x^{-5}" />，在 <MathTex tex="(0, +\infty)" /> 递减，舍去</p>
      <p><strong>结论</strong>：<MathTex tex="m = 2" /></p>
    </>
  ),
  'pf1-3': (
    <>
      <p><strong>思路</strong>：设幂函数标准形式 <MathTex tex="f(x) = x^\alpha" />，把已知点代入求 <MathTex tex="\alpha" /></p>
      <p><strong>第一步</strong>：设 <MathTex tex="f(x) = x^\alpha" />，由图像过点 <MathTex tex="(3, 27)" />，代入得 <MathTex tex="3^\alpha = 27" /></p>
      <p><strong>第二步</strong>：因为 <MathTex tex="27 = 3^3" />，所以 <MathTex tex="3^\alpha = 3^3" />，得 <MathTex tex="\alpha = 3" /></p>
      <p><strong>结论</strong>：<MathTex tex="f(x) = x^3" /></p>
    </>
  ),
  'pf1-4': (
    <>
      <p><strong>思路</strong>：设幂函数标准形式 <MathTex tex="f(x) = x^\alpha" />，把已知点代入求 <MathTex tex="\alpha" /></p>
      <p><strong>第一步</strong>：设 <MathTex tex="f(x) = x^\alpha" />，由图像过点 <MathTex tex="\left(\tfrac{1}{2},\, 8\right)" />，代入得 <MathTex tex="\left(\tfrac{1}{2}\right)^\alpha = 8" /></p>
      <p><strong>第二步</strong>：化同底，<MathTex tex="\tfrac{1}{2} = 2^{-1}" />，<MathTex tex="8 = 2^3" />，所以 <MathTex tex="2^{-\alpha} = 2^3" />，得 <MathTex tex="-\alpha = 3" />，即 <MathTex tex="\alpha = -3" /></p>
      <p><strong>结论</strong>：<MathTex tex="f(x) = x^{-3}" /></p>
    </>
  ),

  // ── 节二：图谱与性质 ──
  'pf2-1': (
    <>
      <p><strong>思路</strong>：用铁律③，看指数 <MathTex tex="\alpha" /> 的正负</p>
      <p><strong>第一步</strong>：识别指数 <MathTex tex="\alpha = \tfrac{2}{5}" /></p>
      <p><strong>第二步</strong>：因为 <MathTex tex="\tfrac{2}{5} > 0" />，由铁律③知在 <MathTex tex="(0, +\infty)" /> 上<strong>递增</strong></p>
      <p><strong>结论</strong>：<MathTex tex="y = x^{\tfrac{2}{5}}" /> 在 <MathTex tex="(0, +\infty)" /> 上<strong>递增</strong></p>
    </>
  ),
  'pf2-2': (
    <>
      <p><strong>思路</strong>：负指数同样看铁律③</p>
      <p><strong>第一步</strong>：识别指数 <MathTex tex="\alpha = -\tfrac{1}{2}" /></p>
      <p><strong>第二步</strong>：因为 <MathTex tex="-\tfrac{1}{2} < 0" />，由铁律③知在 <MathTex tex="(0, +\infty)" /> 上<strong>递减</strong></p>
      <p><strong>结论</strong>：<MathTex tex="y = x^{-\tfrac{1}{2}}" /> 在 <MathTex tex="(0, +\infty)" /> 上<strong>递减</strong></p>
    </>
  ),

  // ── 节三：奇偶性与比较大小 ──
  'pf3-1': (
    <>
      <p><strong>思路</strong>：把 <MathTex tex="\alpha" /> 写成最简分数 <MathTex tex="\tfrac{p}{q}" />，对照节三卡 1 速查表</p>
      <p><strong>第一步</strong>：<MathTex tex="\alpha = \dfrac{3}{5}" /> 已是最简，<MathTex tex="q = 5" />（奇），<MathTex tex="p = 3" />（奇）</p>
      <p><strong>第二步</strong>：q 奇 p 奇，得<strong>奇函数</strong>，定义域 <MathTex tex="\mathbb{R}" /></p>
      <p><strong>结论</strong>：<MathTex tex="y = x^{\tfrac{3}{5}}" /> 是<strong>奇函数</strong></p>
    </>
  ),
  'pf3-2': (
    <>
      <p><strong>思路</strong>：同样把 <MathTex tex="\alpha" /> 写成最简分数 <MathTex tex="\tfrac{p}{q}" />，对照速查表</p>
      <p><strong>第一步</strong>：<MathTex tex="\alpha = \dfrac{2}{5}" /> 已是最简，<MathTex tex="q = 5" />（奇），<MathTex tex="p = 2" />（偶）</p>
      <p><strong>第二步</strong>：q 奇 p 偶，得<strong>偶函数</strong>，定义域 <MathTex tex="\mathbb{R}" /></p>
      <p><strong>结论</strong>：<MathTex tex="y = x^{\tfrac{2}{5}}" /> 是<strong>偶函数</strong></p>
    </>
  ),
  'pf3-3': (
    <>
      <p><strong>思路</strong>：指数都是 <MathTex tex="0.3" />，用<strong>同指比底</strong>（构造幂函数 <MathTex tex="y = x^{0.3}" />）</p>
      <p><strong>第一步</strong>：构造 <MathTex tex="y = x^{0.3}" />，因为 <MathTex tex="0.3 > 0" />，由铁律③知在 <MathTex tex="(0, +\infty)" /> 上递增</p>
      <p><strong>第二步</strong>：因为 <MathTex tex="2 > 0.3" />，所以 <MathTex tex="2^{0.3} > 0.3^{0.3}" /></p>
      <p><strong>结论</strong>：<MathTex tex="a > b" /></p>
    </>
  ),
  'pf3-4': (
    <>
      <p><strong>思路</strong>：指数都是 <MathTex tex="-0.3" />，用<strong>同指比底</strong>（构造幂函数 <MathTex tex="y = x^{-0.3}" />）</p>
      <p><strong>第一步</strong>：构造 <MathTex tex="y = x^{-0.3}" />，因为 <MathTex tex="-0.3 < 0" />，由铁律③知在 <MathTex tex="(0, +\infty)" /> 上<strong>递减</strong></p>
      <p><strong>第二步</strong>：因为 <MathTex tex="2 < 3" />，递减函数下底数小的函数值大，所以 <MathTex tex="2^{-0.3} > 3^{-0.3}" /></p>
      <p><strong>结论</strong>：<MathTex tex="2^{-0.3} > 3^{-0.3}" /></p>
    </>
  ),
  'pf3-5': (
    <>
      <p><strong>思路</strong>：指数、幂、对数三类混合，用<strong>搭桥法（0、1）</strong>把三个数分到三段</p>
      <p><strong>第一步</strong>（看 a）：<MathTex tex="a = 3^{0.4} > 3^0 = 1" />，所以 <MathTex tex="a > 1" />，落在 <MathTex tex="(1, +\infty)" /></p>
      <p><strong>第二步</strong>（看 b）：<MathTex tex="b = 0.4^3 = 0.064" />，所以 <MathTex tex="0 < b < 1" />，落在 <MathTex tex="(0, 1)" /></p>
      <p><strong>第三步</strong>（看 c）：<MathTex tex="c = \log_3 0.4 < \log_3 1 = 0" />，所以 <MathTex tex="c < 0" />，落在 <MathTex tex="(-\infty, 0)" /></p>
      <p><strong>第四步</strong>（串起来）：<MathTex tex="c < 0 < b < 1 < a" /></p>
      <p><strong>逐项判定</strong>：</p>
      <p className="pl-4"><strong>A</strong> <MathTex tex="a > 1" />：第一步已证，<strong>对</strong></p>
      <p className="pl-4"><strong>B</strong> <MathTex tex="0 < c < 1" />：c 是负数（第三步），<strong>错</strong></p>
      <p className="pl-4"><strong>C</strong> <MathTex tex="c < 0 < b < 1 < a" />：第四步整串成立，<strong>对</strong></p>
      <p className="pl-4"><strong>D</strong> <MathTex tex="a > c > b" />：实际 <MathTex tex="b > c" />（b 正、c 负），<strong>错</strong></p>
      <p><strong>结论</strong>：选 <strong>A、C</strong></p>
    </>
  ),
  'pf3-6': (
    <>
      <p><strong>思路</strong>：底数和指数都不同，用<strong>中间值法</strong>，取 <MathTex tex="0.7^{0.7}" /> 作桥梁</p>
      <p><strong>第一步</strong>（比 <MathTex tex="0.7^{0.7}" /> 和 <MathTex tex="0.7^{0.8}" />，同底比指）：构造指数函数 <MathTex tex="y = 0.7^x" />，底数 <MathTex tex="0.7 \in (0, 1)" /> 故递减；因为 <MathTex tex="0.7 < 0.8" />，所以 <MathTex tex="0.7^{0.7} > 0.7^{0.8}" /></p>
      <p><strong>第二步</strong>（比 <MathTex tex="0.7^{0.7}" /> 和 <MathTex tex="0.8^{0.7}" />，同指比底）：构造幂函数 <MathTex tex="y = x^{0.7}" />，<MathTex tex="0.7 > 0" /> 故在 <MathTex tex="(0, +\infty)" /> 递增；因为 <MathTex tex="0.7 < 0.8" />，所以 <MathTex tex="0.7^{0.7} < 0.8^{0.7}" /></p>
      <p><strong>第三步</strong>（串起来）：<MathTex tex="0.7^{0.8} < 0.7^{0.7} < 0.8^{0.7}" /></p>
      <p><strong>结论</strong>：<MathTex tex="0.7^{0.8} < 0.7^{0.7} < 0.8^{0.7}" /></p>
    </>
  ),
  'pf3-7': (
    <>
      <p><strong>思路</strong>：判奇偶用定义验证 <MathTex tex="f(-x)" /> 与 <MathTex tex="f(x)" /> 的关系，再用奇函数性质求值</p>
      <p><strong>第一步</strong>（判奇偶）：定义域为 <MathTex tex="\mathbb{R}" />，关于原点对称。计算 <MathTex tex="f(-x) = (-x)^2 \sin(-x) = x^2 \cdot (-\sin x) = -x^2 \sin x = -f(x)" />，所以 <MathTex tex="f(x)" /> 是<strong>奇函数</strong></p>
      <p className="pl-4 text-[0.85rem] text-gray-600">（口诀速证：偶函数 <MathTex tex="\times" /> 奇函数 = 奇函数）</p>
      <p><strong>第二步</strong>（求值）：由奇函数 <MathTex tex="f(-\tfrac{\pi}{2}) = -f(\tfrac{\pi}{2})" />，而 <MathTex tex="f(\tfrac{\pi}{2}) = (\tfrac{\pi}{2})^2 \sin \tfrac{\pi}{2} = \tfrac{\pi^2}{4} \cdot 1 = \tfrac{\pi^2}{4}" /></p>
      <p><strong>结论</strong>：<MathTex tex="f(x)" /> 是<strong>奇函数</strong>，<MathTex tex="f\!\left(-\tfrac{\pi}{2}\right) = -\dfrac{\pi^2}{4}" /></p>
    </>
  ),

  // ── 节四：3.2 总收官综合练习 ──
  'pf4-1': (
    <>
      <p><strong>思路</strong>：「幂函数」要求系数 = 1 且标准形 <MathTex tex="y = x^\alpha" />；偶函数判别需看 <MathTex tex="\alpha = p/q" /> 的奇偶（节三卡 1）</p>
      <p><strong>A</strong> <MathTex tex="y = x^2 + 1" />：多了常数项，不是标准形，<strong>不是幂函数</strong></p>
      <p><strong>B</strong> <MathTex tex="y = x^{\tfrac{2}{3}}" />：系数 1。高中根式定义 <MathTex tex="x^{\tfrac{2}{3}} = \sqrt[3]{x^2}" />，定义域 <MathTex tex="\mathbb{R}" />；<MathTex tex="q = 3" /> 奇、<MathTex tex="p = 2" /> 偶 → <strong>偶函数</strong>，✅</p>
      <p><strong>C</strong> <MathTex tex="y = x^3" />：是幂函数但<strong>奇函数</strong>，不选</p>
      <p><strong>D</strong> <MathTex tex="y = 2x^2" />：系数 2 ≠ 1，<strong>不是幂函数</strong></p>
      <p><strong>结论</strong>：选 <strong>B</strong></p>
    </>
  ),
  'pf4-2': (
    <>
      <p><strong>思路</strong>：对数函数 <MathTex tex="y = \log_a x" /> 过定点 <MathTex tex="(1, 0)" />（口诀②），对准真数为 <MathTex tex="1" /> 反推 <MathTex tex="x" /></p>
      <p><strong>第一步</strong>：令真数 <MathTex tex="x - 1 = 1" />，得 <MathTex tex="x = 2" /></p>
      <p><strong>第二步</strong>：此时 <MathTex tex="y = \log_3 1 + 1 = 0 + 1 = 1" /></p>
      <p><strong>结论</strong>：恒过定点 <MathTex tex="(2, 1)" />，选 <strong>B</strong></p>
    </>
  ),
  'pf4-3': (
    <>
      <p><strong>思路</strong>：三类混合，用<strong>搭桥法</strong>把三个数分段判定</p>
      <p><strong>看 a</strong>：<MathTex tex="a = 2^{0.3}" />，由 <MathTex tex="2^0 = 1, 2^{0.5} = \sqrt{2} \approx 1.41" /> 得 <MathTex tex="1 < a < \sqrt{2} < 1.5" /></p>
      <p><strong>看 b</strong>：<MathTex tex="b = \log_2 3" />，由 <MathTex tex="\log_2 \sqrt{8} = 1.5" />（<MathTex tex="\sqrt{8} \approx 2.83 < 3" />）得 <MathTex tex="b > 1.5" /></p>
      <p><strong>看 c</strong>：<MathTex tex="c = 0.3^2 = 0.09 < 1" /></p>
      <p><strong>串起来</strong>：<MathTex tex="c < 1 < a < 1.5 < b" />，即 <MathTex tex="b > a > c" />，选 <strong>A</strong></p>
    </>
  ),
  'pf4-4': (
    <>
      <p><strong>思路</strong>：两个恒等式 <MathTex tex="a^{\log_a N} = N" /> 与 <MathTex tex="\log_a a^n = n" /> 逐项化简</p>
      <p><strong>第一项</strong>：由恒等式 <MathTex tex="a^{\log_a N} = N" />，得 <MathTex tex="2^{\log_2 5} = 5" /></p>
      <p><strong>第二项</strong>：<MathTex tex="\log_3 9 = \log_3 3^2 = 2" /></p>
      <p><strong>第三项</strong>：<MathTex tex="\log_5 25 = \log_5 5^2 = 2" /></p>
      <p><strong>结论</strong>：原式 <MathTex tex="= 5 + 2 - 2 = 5" /></p>
    </>
  ),
  'pf4-5': (
    <>
      <p><strong>思路</strong>：同样用两个恒等式 <MathTex tex="a^{\log_a N} = N" /> 与 <MathTex tex="\log_a a^n = n" /> 逐项化简</p>
      <p><strong>第一项</strong>：由恒等式 <MathTex tex="a^{\log_a N} = N" />，得 <MathTex tex="3^{\log_3 7} = 7" /></p>
      <p><strong>第二项</strong>：<MathTex tex="\log_2 8 = \log_2 2^3 = 3" /></p>
      <p><strong>第三项</strong>：<MathTex tex="\log_5 \tfrac{1}{25} = \log_5 5^{-2} = -2" /></p>
      <p><strong>结论</strong>：原式 <MathTex tex="= 7 - 3 + (-2) = 2" /></p>
    </>
  ),
  'pf4-6': (
    <>
      <p><strong>思路</strong>：逐项对照三大函数对比表（节四卡 1）</p>
      <p className="pl-4"><strong>A</strong>：判<MathTex tex="(0, 0)" />是否在三个函数上。<MathTex tex="g(x) = \log_2 x" /> 要求真数 <MathTex tex="x > 0" />，<MathTex tex="g(0)" /> <strong>未定义</strong>；又 <MathTex tex="f(0) = 2^0 = 1 \ne 0" />。只有 <MathTex tex="h(0) = 0" /> 过原点，<strong>错</strong></p>
      <p className="pl-4"><strong>B</strong>：<MathTex tex="f" /> 底数 <MathTex tex="2 > 1" /> 递增；<MathTex tex="g" /> 底数 <MathTex tex="2 > 1" /> 递增；<MathTex tex="h" /> 的 <MathTex tex="\alpha = 2 > 0" /> 在 <MathTex tex="(0, +\infty)" /> 递增，<strong>对</strong></p>
      <p className="pl-4"><strong>C</strong>：增长速度口诀 <MathTex tex="\log_a x \ll x^n \ll a^x" />，<MathTex tex="f(x) = 2^x" /> 最快，<strong>对</strong></p>
      <p className="pl-4"><strong>D</strong>：<MathTex tex="h(x) = x^2" /> 是<strong>偶函数</strong>，<strong>错</strong></p>
      <p><strong>结论</strong>：选 <strong>B、C</strong></p>
    </>
  ),
  'pf4-7': (
    <>
      <p><strong>思路</strong>：两条件并重，<strong>奇函数</strong>（<MathTex tex="q" /> 奇 + <MathTex tex="p" /> 奇）且 <strong><MathTex tex="\alpha > 0" /></strong>（铁律③）</p>
      <p className="pl-4"><strong>A</strong> <MathTex tex="y = x^3" />：<MathTex tex="q = 1" /> 奇、<MathTex tex="p = 3" /> 奇 → 奇；<MathTex tex="\alpha = 3 > 0" /> 递增，✅</p>
      <p className="pl-4"><strong>B</strong> <MathTex tex="y = x^{\tfrac{1}{3}}" />：<MathTex tex="q = 3" /> 奇、<MathTex tex="p = 1" /> 奇 → 奇；<MathTex tex="\alpha = \tfrac{1}{3} > 0" /> 递增，✅</p>
      <p className="pl-4"><strong>C</strong> <MathTex tex="y = x^{-1}" />：奇函数，但 <MathTex tex="\alpha = -1 < 0" /> 递减，错</p>
      <p className="pl-4"><strong>D</strong> <MathTex tex="y = x^{\tfrac{2}{3}}" />：<MathTex tex="q" /> 奇、<MathTex tex="p" /> 偶 → <strong>偶函数</strong>，错</p>
      <p><strong>结论</strong>：选 <strong>A、B</strong></p>
    </>
  ),
  'pf4-8': (
    <>
      <p><strong>思路</strong>：奇函数 <MathTex tex="f(-x) = -f(x)" />，先用 <MathTex tex="x \ge 0" /> 时的解析式求 <MathTex tex="f(3)" /></p>
      <p><strong>第一步</strong>：把 <MathTex tex="x = 3" /> 代入 <MathTex tex="x \ge 0" /> 时的解析式，得 <MathTex tex="f(3) = 2^3 - 1 = 7" /></p>
      <p><strong>第二步</strong>：由奇函数性质 <MathTex tex="f(-3) = -f(3) = -7" /></p>
      <p><strong>结论</strong>：<MathTex tex="f(-3) = -7" /></p>
    </>
  ),
  'pf4-9': (
    <>
      <p><strong>思路</strong>：先用 <MathTex tex="f(2) = 8" /> 定出 <MathTex tex="\alpha" />，再逐项验证</p>
      <p><strong>定 α</strong>：由 <MathTex tex="2^\alpha = 8 = 2^3" />，得 <MathTex tex="\alpha = 3" />，即 <MathTex tex="f(x) = x^3" /></p>
      <p className="pl-4"><strong>A</strong>：<MathTex tex="q = 1" /> 奇、<MathTex tex="p = 3" /> 奇 → <strong>奇函数</strong>，✅</p>
      <p className="pl-4"><strong>B</strong>：<MathTex tex="y = x^3" /> 在 <MathTex tex="\mathbb{R}" /> 上递增，✅</p>
      <p className="pl-4"><strong>C</strong>：奇函数图象关于原点对称，✅</p>
      <p className="pl-4"><strong>D</strong>：<MathTex tex="f(x) + f(-x) = 0" /> 是奇函数的「<strong>恒等式</strong>」（对定义域内<strong>所有</strong> <MathTex tex="x" /> 成立），解集是 <MathTex tex="\mathbb{R}" />；选项说「仅有解 <MathTex tex="x = 0" />」是把恒等式误当方程看，<strong>错</strong></p>
      <p><strong>结论</strong>：选 <strong>A、B、C</strong></p>
    </>
  ),
  'pf4-10': (
    <>
      <p><strong>思路</strong>：设元化为对数：<MathTex tex="a = \log_2 5" />、<MathTex tex="b = \log_3 5" />、<MathTex tex="c = \log_5 4" />；用 <MathTex tex="1, 2" /> 搭桥</p>
      <p><strong>看 a</strong>：<MathTex tex="2^2 = 4 < 5 < 2^3 = 8" />，所以 <MathTex tex="2 < a < 3" /></p>
      <p><strong>看 b</strong>：<MathTex tex="3^1 = 3 < 5 < 3^2 = 9" />，所以 <MathTex tex="1 < b < 2" /></p>
      <p><strong>看 c</strong>：<MathTex tex="4 < 5 = 5^1" />且 <MathTex tex="4 > 1 = 5^0" />，所以 <MathTex tex="0 < c < 1" /></p>
      <p><strong>串起来</strong>：<MathTex tex="a > 2 > b > 1 > c" />，即 <MathTex tex="a > b > c" />，选 <strong>A</strong></p>
    </>
  ),
  'pf4-11': (
    <>
      <p><strong>思路</strong>：幂函数、对数函数作不等式工具，分别解出 <MathTex tex="A, B" /> 再取交集</p>
      <p><strong>解 A</strong>：<MathTex tex="y = x^{\tfrac{1}{3}}" /> 在 <MathTex tex="\mathbb{R}" /> 上递增，两边立方得 <MathTex tex="x \le 2^3 = 8" />，即 <MathTex tex="A = (-\infty,\, 8]" /></p>
      <p><strong>解 B</strong>：对数需真数 <MathTex tex="x > 0" />；又 <MathTex tex="\log_2 x \le \log_2 4" /> 且 <MathTex tex="y = \log_2 x" /> 递增，得 <MathTex tex="x \le 4" />，即 <MathTex tex="B = (0,\, 4]" /></p>
      <p><strong>取交集</strong>：<MathTex tex="A \cap B = (0,\, 4]" /></p>
      <p><strong>结论</strong>：<MathTex tex="A \cap B = (0,\, 4]" /></p>
    </>
  ),
  'pf4-12': (
    <>
      <p><strong>思路</strong>：三个条件并重 —— 减函数（铁律③ → 指数 &lt; 0）、关于 <MathTex tex="y" /> 轴对称（偶函数 → 指数为偶数）、<MathTex tex="\alpha" /> 是整数。分步缩范围</p>
      <p><strong>第一步</strong>（减函数）：设指数 <MathTex tex="n = \alpha^2 - 2\alpha - 3" />，需 <MathTex tex="n < 0" />，即 <MathTex tex="(\alpha - 3)(\alpha + 1) < 0" />，解得 <MathTex tex="-1 < \alpha < 3" /></p>
      <p><strong>第二步</strong>（整数约束）：<MathTex tex="\alpha \in \mathbb{Z}" />，所以 <MathTex tex="\alpha \in \{0,\, 1,\, 2\}" /></p>
      <p><strong>第三步</strong>（偶函数验证）：由于 <MathTex tex="\alpha \in \mathbb{Z}" /> 是整数，指数 <MathTex tex="n" /> 也是整数。整数指数幂函数为偶函数 <MathTex tex="\Leftrightarrow" /> 指数 <MathTex tex="n" /> 为偶数</p>
      <p className="pl-4"><MathTex tex="\alpha = 0" />：<MathTex tex="n = 0 - 0 - 3 = -3" />（奇），舍</p>
      <p className="pl-4"><MathTex tex="\alpha = 1" />：<MathTex tex="n = 1 - 2 - 3 = -4" />（偶），✅</p>
      <p className="pl-4"><MathTex tex="\alpha = 2" />：<MathTex tex="n = 4 - 4 - 3 = -3" />（奇），舍</p>
      <p><strong>结论</strong>：<MathTex tex="\alpha = 1" />，此时 <MathTex tex="f(x) = x^{-4}" /></p>
    </>
  ),
  'pf4-13': (
    <>
      <p><strong>思路</strong>：<MathTex tex="f(xy) = f(x) + f(y)" /> 是<strong>对数型</strong>抽象函数（积转和）。先求 <MathTex tex="f(4)" />，再把不等式合并为 <MathTex tex="f(\cdot) < f(\cdot)" /> 用单调性去 f；最后别忘定义域</p>
      <p><strong>第一步</strong>（求 <MathTex tex="f(4)" />）：<MathTex tex="f(4) = f(2 \cdot 2) = f(2) + f(2) = 1 + 1 = 2" /></p>
      <p><strong>第二步</strong>（合并左边）：<MathTex tex="f(x + 1) + f(x - 1) = f\bigl((x + 1)(x - 1)\bigr) = f(x^2 - 1)" /></p>
      <p><strong>第三步</strong>（定义域）：<MathTex tex="f" /> 只在 <MathTex tex="(0, +\infty)" /> 有意义，需 <MathTex tex="x + 1 > 0" /> 且 <MathTex tex="x - 1 > 0" />，得 <MathTex tex="x > 1" /></p>
      <p><strong>第四步</strong>（用单调性）：不等式化为 <MathTex tex="f(x^2 - 1) < f(4)" />；<MathTex tex="f" /> 在 <MathTex tex="(0, +\infty)" /> 递增，去 f 得 <MathTex tex="x^2 - 1 < 4" />，即 <MathTex tex="x^2 < 5" />，解得 <MathTex tex="-\sqrt{5} < x < \sqrt{5}" /></p>
      <p><strong>第五步</strong>（取交集）：<MathTex tex="x > 1" /> 且 <MathTex tex="x < \sqrt{5}" />，得 <MathTex tex="1 < x < \sqrt{5}" /></p>
      <p><strong>结论</strong>：<MathTex tex="x \in (1, \sqrt{5})" /></p>
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
              {powerExplanations[q.id]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PowerAnswers() {
  return (
    <section className="mb-8 print-answers">
      <PageBreak label="答案与解析" />
      <h2 className="text-xl font-bold text-gray-900 mb-4">📝 3.2.3 幂函数 — 答案与解析</h2>
      <AnswerSection title="一、什么是幂函数" questions={powerDefPractice} />
      <AnswerSection title="二、图谱与性质" questions={powerGraphPractice} />
      <AnswerSection title="三、奇偶性与比较大小" questions={powerOddEvenPractice} />
      <AnswerSection title="四、3.2 总收官综合练习" questions={powerSummaryPractice} />
    </section>
  );
}
