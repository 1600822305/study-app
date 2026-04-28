import type { ReactNode } from 'react';
import { Math as MathTex, PageBreak } from '@/components/shared';
import { piecewisePractice1, piecewiseDomainPractice, piecewiseMonoPractice, piecewiseParityPractice, piecewiseEquationPractice } from './data/3.1.3/3.1.3-piecewise-practice';
import type { QuizQuestionData } from '@/types';

// ══════════════════════════════════════════════
// 解析内容（唯一数据源）— 交互 + 打印共用
// ══════════════════════════════════════════════

export const piecewiseExplanations: Record<string, ReactNode> = {
  'pw1-1': (
    <>
      <p className="mt-1"><strong>算 <MathTex tex="f(-2)" />：</strong><MathTex tex="-2<0" />，用第一段，得 <MathTex tex="f(-2)=2 \times (-2)+1=-3" /></p>
      <p className="mt-1"><strong>算 <MathTex tex="f(3)" />：</strong><MathTex tex="3 \geqslant 0" />，用第二段，得 <MathTex tex="f(3)=3^2-1=8" /></p>
      <p className="mt-1">结论：<MathTex tex="f(-2)+f(3)=-3+8=5" /></p>
    </>
  ),
  'pw1-2': (
    <>
      <p className="mt-1"><strong>思路：</strong>两段分别令等于 2 解方程，解完验证是否满足该段区间</p>
      <p className="mt-1"><strong>情况一：</strong>设 <MathTex tex="a<1" />，用第一段 <MathTex tex="a+2=2" />，得 <MathTex tex="a=0" /></p>
      <p className="mt-1">验证：<MathTex tex="0<1" /> ✓，保留</p>
      <p className="mt-1"><strong>情况二：</strong>设 <MathTex tex="a \geqslant 1" />，用第二段 <MathTex tex="a^2-2=2" />，得 <MathTex tex="a^2=4" />，<MathTex tex="a=\pm 2" /></p>
      <p className="mt-1">验证：<MathTex tex="a=2" /> 满足 <MathTex tex="a \geqslant 1" /> ✓；<MathTex tex="a=-2" /> 不满足，舍去</p>
      <p className="mt-1">结论：<MathTex tex="a=0" /> 或 <MathTex tex="a=2" /></p>
    </>
  ),
  'pw1-3': (
    <>
      <p className="mt-1"><strong>第一步：</strong>算内层 <MathTex tex="f(-2)" /></p>
      <p className="mt-1"><MathTex tex="-2<0" />，用第一段，得 <MathTex tex="f(-2)=-2+3=1" /></p>
      <p className="mt-1"><strong>第二步：</strong>算外层 <MathTex tex="f(1)" /></p>
      <p className="mt-1"><MathTex tex="1 \geqslant 0" />，用第二段，得 <MathTex tex="f(1)=1^2+1=2" /></p>
      <p className="mt-1">结论：<MathTex tex="f(f(-2))=2" /></p>
    </>
  ),
  'pw1-4': (
    <>
      <p className="mt-1"><strong>思路：</strong>递归型——<MathTex tex="x<4" /> 时 <MathTex tex="f(x)=f(x+2)" />，反复代入直到 <MathTex tex="x \geqslant 4" /></p>
      <p className="mt-1"><strong>第一步：</strong><MathTex tex="1<4" />，用第二段，得 <MathTex tex="f(1)=f(1+2)=f(3)" /></p>
      <p className="mt-1"><strong>第二步：</strong><MathTex tex="3<4" />，继续用第二段，得 <MathTex tex="f(3)=f(3+2)=f(5)" /></p>
      <p className="mt-1"><strong>第三步：</strong><MathTex tex="5 \geqslant 4" />，用第一段，得 <MathTex tex="f(5)=5+1=6" /></p>
      <p className="mt-1">结论：<MathTex tex="f(1)=6" /></p>
    </>
  ),
  'pw1-5': (
    <>
      <p className="mt-1"><strong>思路：</strong>含 <MathTex tex="|x+1|" /> 的函数本质是分段函数，按 <MathTex tex="x+1" /> 正负分情况去绝对值</p>
      <p className="mt-1"><strong>算 <MathTex tex="f(-3)" />：</strong><MathTex tex="-3+1=-2<0" />，所以 <MathTex tex="|{-3}+1|=2" />，得 <MathTex tex="f(-3)=2-(-3)=5" /></p>
      <p className="mt-1"><strong>算 <MathTex tex="f(2)" />：</strong><MathTex tex="2+1=3>0" />，所以 <MathTex tex="|2+1|=3" />，得 <MathTex tex="f(2)=3-2=1" /></p>
      <p className="mt-1">结论：<MathTex tex="f(-3)+f(2)=5+1=6" /></p>
    </>
  ),
  'pw1-6': (
    <>
      <p className="mt-1"><strong>思路：</strong>设 <MathTex tex="t=g(a)" />，则 <MathTex tex="g(t)=3" />，先解 <MathTex tex="t" />，再解 <MathTex tex="a" /></p>
      <p className="mt-1"><strong>第一步：</strong>解外层 <MathTex tex="g(t)=3" /></p>
      <p className="mt-1">第一段：设 <MathTex tex="t<0" />，<MathTex tex="t+2=3" />，得 <MathTex tex="t=1" />，不满足 <MathTex tex="t<0" />，舍去</p>
      <p className="mt-1">第二段：设 <MathTex tex="t \geqslant 0" />，<MathTex tex="t^2-1=3" />，得 <MathTex tex="t^2=4" />，<MathTex tex="t=\pm 2" />，只 <MathTex tex="t=2" /> 满足 ✓</p>
      <p className="mt-1">所以 <MathTex tex="g(a)=2" /></p>
      <p className="mt-1"><strong>第二步：</strong>解 <MathTex tex="g(a)=2" /></p>
      <p className="mt-1">第一段：设 <MathTex tex="a<0" />，<MathTex tex="a+2=2" />，得 <MathTex tex="a=0" />，不满足 <MathTex tex="a<0" />，舍去</p>
      <p className="mt-1">第二段：设 <MathTex tex="a \geqslant 0" />，<MathTex tex="a^2-1=2" />，得 <MathTex tex="a^2=3" />，<MathTex tex="a=\pm\sqrt{3}" />，只 <MathTex tex="a=\sqrt{3}" /> 满足 ✓</p>
      <p className="mt-1">结论：<MathTex tex="a=\sqrt{3}" /></p>
    </>
  ),
  'pw3-1': (
    <>
      <p className="mt-1"><strong>定义域：</strong>第一段 <MathTex tex="[-2,\,1)" />，第二段 <MathTex tex="[1,\,3]" />，并集 <MathTex tex="[-2,\,3]" /></p>
      <p className="mt-1"><strong>值域：</strong></p>
      <p className="mt-1">第一段 <MathTex tex="x+3" />：代入左端 <MathTex tex="x=-2" /> 得 <MathTex tex="y=1" />，代入右端 <MathTex tex="x=1" /> 得 <MathTex tex="y=4" />（取不到），递增，值域 <MathTex tex="[1,\,4)" /></p>
      <p className="mt-1">第二段 <MathTex tex="-2x+6" />：代入左端 <MathTex tex="x=1" /> 得 <MathTex tex="y=4" />，代入右端 <MathTex tex="x=3" /> 得 <MathTex tex="y=0" />，递减，值域 <MathTex tex="[0,\,4]" /></p>
      <p className="mt-1">并集 <MathTex tex="[1,\,4) \cup [0,\,4] = [0,\,4]" /></p>
      <p className="mt-1">结论：定义域 <MathTex tex="[-2,\,3]" />，值域 <MathTex tex="[0,\,4]" />。</p>
    </>
  ),
  'pw3-2': (
    <>
      <p className="mt-1"><strong>定义域：</strong>第一段 <MathTex tex="[0,\,2)" />，第二段 <MathTex tex="[2,\,5]" />，并集 <MathTex tex="[0,\,5]" /></p>
      <p className="mt-1"><strong>值域：</strong></p>
      <p className="mt-1">第一段 <MathTex tex="3x" />：代入左端 <MathTex tex="x=0" /> 得 <MathTex tex="y=0" />，代入右端 <MathTex tex="x=2" /> 得 <MathTex tex="y=6" />（取不到），递增，值域 <MathTex tex="[0,\,6)" /></p>
      <p className="mt-1">第二段 <MathTex tex="-x+8" />：代入左端 <MathTex tex="x=2" /> 得 <MathTex tex="y=6" />，代入右端 <MathTex tex="x=5" /> 得 <MathTex tex="y=3" />，递减，值域 <MathTex tex="[3,\,6]" /></p>
      <p className="mt-1">并集 <MathTex tex="[0,\,6) \cup [3,\,6] = [0,\,6]" /></p>
      <p className="mt-1">结论：定义域 <MathTex tex="[0,\,5]" />，值域 <MathTex tex="[0,\,6]" />。</p>
    </>
  ),
  'pw3-3': (
    <>
      <p className="mt-1"><strong>思路：</strong>先算不含参段，再由并集等式反推含参段</p>
      <p className="mt-1"><strong>第一步：</strong>第一段 <MathTex tex="-x^2+2" />（<MathTex tex="x \leqslant 0" />）：<MathTex tex="x=0" /> 时取最大值 <MathTex tex="y=2" />，向左 <MathTex tex="-x^2 \to -\infty" />，值域为 <MathTex tex="(-\infty,\,2]" /></p>
      <p className="mt-1"><strong>第二步：</strong>第二段 <MathTex tex="-x+a" />（<MathTex tex="x>0" />）：因为 <MathTex tex="x>0" />，得 <MathTex tex="-x<0" />，所以 <MathTex tex="f(x) < a" />（取不到 <MathTex tex="a" />），向右 <MathTex tex="-x \to -\infty" />，值域为 <MathTex tex="(-\infty,\,a)" /></p>
      <p className="mt-1"><strong>第三步：</strong>两段值域取并集应等于 <MathTex tex="(-\infty,\,2]" />。第一段已贡献 <MathTex tex="(-\infty,\,2]" />，所以第二段的 <MathTex tex="(-\infty,\,a)" /> 必须是 <MathTex tex="(-\infty,\,2]" /> 的子集</p>
      <p className="mt-1">即 <MathTex tex="(-\infty,\,a) \subseteq (-\infty,\,2]" />，需要 <MathTex tex="a \leqslant 2" /></p>
      <p className="mt-1">结论：<MathTex tex="a" /> 的取值范围为 <MathTex tex="(-\infty,\,2]" />。</p>
    </>
  ),
  'pw4-1': (
    <>
      <p className="mt-1"><strong>思路：</strong>两组不等式——各段递减 + 分界点衔接</p>
      <p className="mt-1"><strong>第一步：每段递减</strong></p>
      <p className="mt-1">第一段 <MathTex tex="-2x+a" /> 斜率 <MathTex tex="-2<0" />，本身递减，无参数约束</p>
      <p className="mt-1">第二段 <MathTex tex="(a-3)x-1" /> 斜率 <MathTex tex="a-3<0" />，得 <MathTex tex="a<3" /></p>
      <p className="mt-1"><strong>第二步：分界点 <MathTex tex="x=0" /> 衔接（递减需 <MathTex tex="y_{\text{左}} \geqslant y_{\text{右}}" />）</strong></p>
      <p className="mt-1">左段 <MathTex tex="y_{\text{左}}=-2 \times 0+a=a" />，右段 <MathTex tex="y_{\text{右}}=(a-3) \times 0-1=-1" /></p>
      <p className="mt-1">需要 <MathTex tex="a \geqslant -1" /></p>
      <p className="mt-1"><strong>第三步：</strong>取交集，得 <MathTex tex="-1 \leqslant a < 3" /></p>
      <p className="mt-1">结论：<MathTex tex="a" /> 的取值范围为 <MathTex tex="[-1,\,3)" />。</p>
    </>
  ),
  'pw4-2': (
    <>
      <p className="mt-1"><strong>思路：</strong>两组不等式——各段递减 + 分界点衔接</p>
      <p className="mt-1"><strong>第一步：每段递减</strong></p>
      <p className="mt-1">第一段 <MathTex tex="(3a-1)x+4a" /> 斜率 <MathTex tex="3a-1<0" />，得 <MathTex tex="a<\tfrac{1}{3}" /></p>
      <p className="mt-1">第二段 <MathTex tex="-ax" /> 斜率 <MathTex tex="-a<0" />，得 <MathTex tex="a>0" /></p>
      <p className="mt-1"><strong>第二步：分界点 <MathTex tex="x=1" /> 衔接（递减需 <MathTex tex="y_{\text{左}} \geqslant y_{\text{右}}" />）</strong></p>
      <p className="mt-1">左段 <MathTex tex="y_{\text{左}}=(3a-1) \times 1+4a=7a-1" />，右段 <MathTex tex="y_{\text{右}}=-a \times 1=-a" /></p>
      <p className="mt-1">需要 <MathTex tex="7a-1 \geqslant -a" />，得 <MathTex tex="a \geqslant \tfrac{1}{8}" /></p>
      <p className="mt-1"><strong>第三步：</strong>三个条件取交集，得 <MathTex tex="\tfrac{1}{8} \leqslant a < \tfrac{1}{3}" /></p>
      <p className="mt-1">结论：<MathTex tex="a" /> 的取值范围为 <MathTex tex="\left[\tfrac{1}{8},\,\tfrac{1}{3}\right)" />。</p>
    </>
  ),
  'pw4-3': (
    <>
      <p className="mt-1"><strong>思路：</strong>三段题——3 段单调 + 2 个分界点衔接</p>
      <p className="mt-1"><strong>第一步：每段递增</strong></p>
      <p className="mt-1">第一段 <MathTex tex="3x+1" /> 斜率 <MathTex tex="3>0" />，递增 ✓</p>
      <p className="mt-1">第二段 <MathTex tex="x^2+1" /> 对称轴 <MathTex tex="x=0" />，区间 <MathTex tex="[0,1]" /> 在对称轴右侧，递增 ✓</p>
      <p className="mt-1">第三段 <MathTex tex="ax-2" /> 要递增，<MathTex tex="a>0" /></p>
      <p className="mt-1"><strong>第二步：两个分界点衔接（递增需 <MathTex tex="y_{\text{左}} \leqslant y_{\text{右}}" />）</strong></p>
      <p className="mt-1">分界点 <MathTex tex="x=0" />：左段 <MathTex tex="y_{\text{左}}=1" />，右段 <MathTex tex="y_{\text{右}}=1" />，<MathTex tex="1 \leqslant 1" /> ✓ 自动成立</p>
      <p className="mt-1">分界点 <MathTex tex="x=1" />：左段 <MathTex tex="y_{\text{左}}=2" />，右段 <MathTex tex="y_{\text{右}}=a-2" /></p>
      <p className="mt-1">需 <MathTex tex="2 \leqslant a-2" />，得 <MathTex tex="a \geqslant 4" /></p>
      <p className="mt-1"><strong>第三步：</strong>取交集，得 <MathTex tex="a \geqslant 4" /></p>
      <p className="mt-1">结论：<MathTex tex="a" /> 的取值范围为 <MathTex tex="[4,\,+\infty)" />。</p>
    </>
  ),
  'pw5-1': (
    <>
      <p className="mt-1"><strong>最大的坑：</strong>求 <MathTex tex="f(-x)" /> 要「换段」。别看两段像是一对反数就误判为奇函数！</p>
      <p className="mt-1"><strong>第一步：查定义域</strong></p>
      <p className="mt-1">定义域 <MathTex tex="(-\infty,\,0) \cup (0,\,+\infty)" />，关于原点对称 ✓</p>
      <p className="mt-1"><strong>第二步：分类验证</strong></p>
      <p className="mt-1">设 <MathTex tex="x>0" />（<MathTex tex="-x<0" />）：用 <MathTex tex="x>0" /> 那段 <MathTex tex="f(x)=x+2" />；用 <MathTex tex="x<0" /> 那段 <MathTex tex="f(-x)=-(-x)-2=x-2" /></p>
      <p className="mt-1">比对：<MathTex tex="f(-x)=x-2" />，<MathTex tex="f(x)=x+2" />，<MathTex tex="-f(x)=-x-2" /></p>
      <p className="mt-1"><MathTex tex="f(-x) \neq f(x)" />，也 <MathTex tex="f(-x) \neq -f(x)" />，不满足奇或偶</p>
      <p className="mt-1"><strong>结论：非奇非偶函数（选 D）</strong></p>
    </>
  ),
  'pw5-2': (
    <>
      <p className="mt-1"><strong>套路：</strong>设 <MathTex tex="x>0" />，用 <MathTex tex="x>0" /> 那段算 <MathTex tex="f(x)" />，用 <MathTex tex="x<0" /> 那段算 <MathTex tex="f(-x)" />，由 <MathTex tex="f(-x)=-f(x)" /> 得系数等式</p>
      <p className="mt-1"><strong>第一步：</strong>设 <MathTex tex="x>0" />，用 <MathTex tex="x>0" /> 那段得 <MathTex tex="f(x)=x^2+ax+b" /></p>
      <p className="mt-1"><strong>第二步：</strong><MathTex tex="-x<0" />，用 <MathTex tex="x<0" /> 那段得 <MathTex tex="f(-x)=-(-x)^2+2(-x)-1=-x^2-2x-1" /></p>
      <p className="mt-1"><strong>第三步：</strong>奇函数要求 <MathTex tex="f(-x)=-f(x)" /></p>
      <p className="mt-1"><MathTex tex="-x^2-2x-1=-(x^2+ax+b)=-x^2-ax-b" /></p>
      <p className="mt-1">对比系数：<MathTex tex="-2=-a" /> 得 <MathTex tex="a=2" />；<MathTex tex="-1=-b" /> 得 <MathTex tex="b=1" /></p>
      <p className="mt-1"><strong>结论：</strong><MathTex tex="a+b=2+1=3" /></p>
    </>
  ),
  'pw5-3': (
    <>
      <p className="mt-1"><strong>坑点：</strong>公式看着"奇对称"，但定义域含 0 时必须查 <MathTex tex="f(0)=0" /></p>
      <p className="mt-1"><strong>第一步：查定义域</strong></p>
      <p className="mt-1">定义域为 <MathTex tex="\mathbb{R}" />，关于原点对称 ✓</p>
      <p className="mt-1"><strong>第二步：分类验证</strong></p>
      <p className="mt-1">设 <MathTex tex="x>0" />（<MathTex tex="-x<0" />）：用 <MathTex tex="x \geqslant 0" /> 那段 <MathTex tex="f(x)=x^2+1" />；用 <MathTex tex="x<0" /> 那段 <MathTex tex="f(-x)=-(-x)^2-1=-x^2-1=-(x^2+1)=-f(x)" /> ✓</p>
      <p className="mt-1">设 <MathTex tex="x<0" />（<MathTex tex="-x>0" />）：用 <MathTex tex="x<0" /> 那段 <MathTex tex="f(x)=-x^2-1" />；用 <MathTex tex="x \geqslant 0" /> 那段 <MathTex tex="f(-x)=(-x)^2+1=x^2+1=-(-x^2-1)=-f(x)" /> ✓</p>
      <p className="mt-1">两类都满足 <MathTex tex="f(-x)=-f(x)" />，形式上像奇函数</p>
      <p className="mt-1"><strong>第三步：定义域含 0，补查 <MathTex tex="f(0)" /></strong></p>
      <p className="mt-1"><MathTex tex="x=0" /> 归第一段（带等号），<MathTex tex="f(0)=0^2+1=1" /></p>
      <p className="mt-1">奇函数要求 <MathTex tex="f(0)=0" />，但这里 <MathTex tex="f(0)=1 \neq 0" />，否定奇函数</p>
      <p className="mt-1"><strong>结论：非奇非偶函数（选 D）</strong>——形式对称 ≠ 奇函数，<MathTex tex="f(0)=0" /> 是硬性条件</p>
    </>
  ),
  'pw6-1': (
    <>
      <p className="mt-1"><strong>思路：</strong>零点即 <MathTex tex="f(x)=0" />，两段分别列方程，解后段内验证</p>
      <p className="mt-1"><strong>第一段（<MathTex tex="x<0" />）：</strong></p>
      <p className="mt-1"><MathTex tex="x^2+2x-3=0" />，因式分解得 <MathTex tex="(x+3)(x-1)=0" />，解出 <MathTex tex="x=-3" /> 或 <MathTex tex="x=1" /></p>
      <p className="mt-1">段内验证：<MathTex tex="x=-3<0" /> ✓，保留；<MathTex tex="x=1" /> 不满足 <MathTex tex="x<0" />，舍去</p>
      <p className="mt-1"><strong>第二段（<MathTex tex="x \geqslant 0" />）：</strong></p>
      <p className="mt-1"><MathTex tex="x-2=0" /> 得 <MathTex tex="x=2" />，满足 <MathTex tex="x \geqslant 0" /> ✓，保留</p>
      <p className="mt-1"><strong>结论：</strong>零点为 <MathTex tex="x=-3" /> 和 <MathTex tex="x=2" /></p>
    </>
  ),
  'pw6-2': (
    <>
      <p className="mt-1"><strong>思路：</strong>两段分别列不等式，段内取交，合并取并</p>
      <p className="mt-1"><strong>第一段（<MathTex tex="x<0" />）：</strong></p>
      <p className="mt-1"><MathTex tex="x^2-1 \geqslant 0" /> 得 <MathTex tex="x \leqslant -1" /> 或 <MathTex tex="x \geqslant 1" /></p>
      <p className="mt-1">段内取交（与 <MathTex tex="x<0" />）：得 <MathTex tex="x \leqslant -1" /></p>
      <p className="mt-1"><strong>第二段（<MathTex tex="x \geqslant 0" />）：</strong></p>
      <p className="mt-1"><MathTex tex="2x-1 \geqslant 0" /> 得 <MathTex tex="x \geqslant \tfrac{1}{2}" /></p>
      <p className="mt-1">段内取交（与 <MathTex tex="x \geqslant 0" />）：得 <MathTex tex="x \geqslant \tfrac{1}{2}" /></p>
      <p className="mt-1"><strong>取并集结论：</strong>解集为 <MathTex tex="(-\infty,\,-1] \cup \left[\tfrac{1}{2},\,+\infty\right)" /></p>
    </>
  ),
  'pw6-3': (
    <>
      <p className="mt-1"><strong>思路：</strong>数形结合——求各段值域找分界值，代入验算确定归属</p>
      <p className="mt-1"><strong>第一步：分析两段值域</strong></p>
      <p className="mt-1">第一段 <MathTex tex="-x^2+4x=-(x-2)^2+4" />（<MathTex tex="x \leqslant 2" />）：顶点 <MathTex tex="x=2" /> 在区间端点上取得最大值 <MathTex tex="y=4" />，向左 <MathTex tex="y \to -\infty" />，值域 <MathTex tex="(-\infty,\,4]" />；在 <MathTex tex="x \leqslant 2" /> 上单调递增，每个 <MathTex tex="a \leqslant 4" /> 对应 <strong>1 个解</strong></p>
      <p className="mt-1">第二段 <MathTex tex="2-x" />（<MathTex tex="x>2" />）：<MathTex tex="x=2" /> 时 <MathTex tex="y=0" /> 取不到，向右 <MathTex tex="y \to -\infty" />，值域 <MathTex tex="(-\infty,\,0)" />；每个 <MathTex tex="a<0" /> 对应 <strong>1 个解</strong></p>
      <p className="mt-1"><strong>第二步：代入分界值验算</strong></p>
      <p className="mt-1">分界值 <MathTex tex="a=0" />：第一段 <MathTex tex="-x^2+4x=0" />，得 <MathTex tex="x=0" /> 或 <MathTex tex="x=4" />，只 <MathTex tex="x=0" /> 满足 <MathTex tex="x \leqslant 2" />，1 解；第二段 <MathTex tex="2-x=0" /> 得 <MathTex tex="x=2" /> 不满足 <MathTex tex="x>2" />，0 解 → 共 <strong>1 解</strong></p>
      <p className="mt-1">分界值 <MathTex tex="a=4" />：第一段 <MathTex tex="x=2" /> ✓ 1 解；第二段 <MathTex tex="2-x=4" /> 得 <MathTex tex="x=-2" /> 不满足 <MathTex tex="x>2" />，0 解 → 共 <strong>1 解</strong></p>
      <p className="mt-1"><strong>第三步：按 <MathTex tex="a" /> 分类数解</strong></p>
      <p className="mt-1"><MathTex tex="a<0" />：第一段 1 解 + 第二段 1 解 = 2 解</p>
      <p className="mt-1"><MathTex tex="0 \leqslant a \leqslant 4" />：第一段 1 解 + 第二段 0 解 = <strong>1 解</strong>（两分界值同归 1 解，合并区间）</p>
      <p className="mt-1"><MathTex tex="a>4" />：第一段 0 解 + 第二段 0 解 = 0 解</p>
      <p className="mt-1"><strong>结论：</strong><MathTex tex="f(x)=a" /> 恰有 1 解 <MathTex tex="\iff a \in [0,\,4]" /></p>
    </>
  ),
  'pw6-4': (
    <>
      <p className="mt-1"><strong>思路：</strong>分界值归属不同型——两个分界值对应的解数不同，要分开归入不同区间，注意开闭</p>
      <p className="mt-1"><strong>第一步：分析两段值域</strong></p>
      <p className="mt-1">第一段 <MathTex tex="-x^2+1" />（<MathTex tex="x \leqslant 0" />）：<MathTex tex="x=0" /> 时 <MathTex tex="y=1" /> 取得（最大值），向左 <MathTex tex="y \to -\infty" />，值域 <MathTex tex="(-\infty,\,1]" />；在 <MathTex tex="x \leqslant 0" /> 上单调递增，每个 <MathTex tex="a \leqslant 1" /> 对应 <strong>1 个解</strong></p>
      <p className="mt-1">第二段 <MathTex tex="x-1" />（<MathTex tex="x>0" />）：<MathTex tex="x=0" /> 时 <MathTex tex="y=-1" /> 取不到，向右 <MathTex tex="y \to +\infty" />，值域 <MathTex tex="(-1,\,+\infty)" />；每个 <MathTex tex="a>-1" /> 对应 <strong>1 个解</strong></p>
      <p className="mt-1"><strong>第二步：代入分界值验算</strong></p>
      <p className="mt-1">分界值 <MathTex tex="a=-1" />：第一段 <MathTex tex="-x^2+1=-1" /> 得 <MathTex tex="x^2=2" />，<MathTex tex="x=-\sqrt{2}" /> 满足 <MathTex tex="x \leqslant 0" />，1 解；第二段 <MathTex tex="x-1=-1" /> 得 <MathTex tex="x=0" /> 不满足 <MathTex tex="x>0" />，0 解 → 共 <strong>1 解</strong></p>
      <p className="mt-1">分界值 <MathTex tex="a=1" />：第一段 <MathTex tex="x=0" /> ✓ 1 解；第二段 <MathTex tex="x-1=1" /> 得 <MathTex tex="x=2" /> 满足 <MathTex tex="x>0" />，1 解 → 共 <strong>2 解</strong></p>
      <p className="mt-1"><strong>两分界值结果不同：</strong><MathTex tex="a=-1" /> 归 1 解、<MathTex tex="a=1" /> 归 2 解，分别归到不同区间</p>
      <p className="mt-1"><strong>第三步：按 <MathTex tex="a" /> 分类数解</strong></p>
      <p className="mt-1"><MathTex tex="a \leqslant -1" />：第一段 1 解 + 第二段 0 解 = 1 解</p>
      <p className="mt-1"><MathTex tex="-1<a \leqslant 1" />：第一段 1 解 + 第二段 1 解 = <strong>2 解</strong></p>
      <p className="mt-1"><MathTex tex="a>1" />：第一段 0 解 + 第二段 1 解 = 1 解</p>
      <p className="mt-1"><strong>结论：</strong><MathTex tex="f(x)=a" /> 恰有 2 解 <MathTex tex="\iff a \in (-1,\,1]" />（左开右闭，对应 <MathTex tex="a=-1" /> 取不到、<MathTex tex="a=1" /> 取得到）</p>
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
              <p className="font-bold text-gray-900">
                答案：{q.options?.find(o => o.value === q.correctAnswer)?.label ?? q.correctAnswer}
              </p>
              {piecewiseExplanations[q.id] && <div className="mt-1">{piecewiseExplanations[q.id]}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PiecewiseAnswers() {
  return (
    <section className="mb-8 print-answers">
      <PageBreak label="答案与解析" />
      <h2 className="text-xl font-bold text-gray-900 mb-4">📝 3.1.3 分段函数 — 答案与解析</h2>
      <AnswerSection title="一、求分段函数的值（填空）" questions={piecewisePractice1} />
      <AnswerSection title="二、定义域与值域（填空）" questions={piecewiseDomainPractice} />
      <AnswerSection title="三、单调性求参数（填空）" questions={piecewiseMonoPractice} />
      <AnswerSection title="四、奇偶性" questions={piecewiseParityPractice} />
      <AnswerSection title="五、零点、方程与不等式" questions={piecewiseEquationPractice} />
    </section>
  );
}
