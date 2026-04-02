import type { ReactNode } from 'react';
import { Math as MathTex } from '@/components/shared';

export const circleAnswers: Record<string, ReactNode> = {
  /* ── 圆的方程 & 点圆位置 ── */
  'cp-1': (
    <>
      <p>令括号等于零得圆心：<MathTex tex="x-2=0\Rightarrow x=2" />，<MathTex tex="y+3=0\Rightarrow y=-3" />，圆心 <MathTex tex="(2,-3)" /></p>
      <p><MathTex tex="r^2=16\Rightarrow r=4" />（取算术平方根）</p>
    </>
  ),
  'cp-3': (
    <>
      <p>圆心 <MathTex tex="(0,0)" />，<MathTex tex="r=2" />，代入标准方程：</p>
      <MathTex tex="x^2+y^2=r^2=2^2=4" display />
    </>
  ),
  'cp-4': (
    <>
      <p>标准方程要求 <MathTex tex="r^2>0" />。C 中 <MathTex tex="r^2=0" />，轨迹只有一个点 <MathTex tex="(1,2)" />，不是圆。</p>
    </>
  ),
  'cp-5': (
    <>
      <p>P 在圆内 <MathTex tex="\Leftrightarrow" /> 代入圆方程左边 <MathTex tex="< r^2" />：</p>
      <MathTex tex="(3-1)^2+(a-2)^2 < 8" display />
      <MathTex tex="4+(a-2)^2 < 8\;\Rightarrow\;(a-2)^2<4" display />
      <MathTex tex="-2<a-2<2\;\Rightarrow\;0<a<4" display />
      <p>严格不等号，点在圆内不含边界。</p>
    </>
  ),
  'cp-6': (
    <>
      <p>代入标准方程 <MathTex tex="(x-a)^2+(y-b)^2=r^2" />，其中 <MathTex tex="a=-1,\,b=2,\,r=3" />：</p>
      <MathTex tex="(x+1)^2+(y-2)^2=9" display />
    </>
  ),

  /* ── 求圆方程 ── */
  'ceq-3': (
    <>
      <p>设圆心 <MathTex tex="M(0,b)" />（在 y 轴上）。两点等距：</p>
      <MathTex tex="1+(b-3)^2=9+(b-1)^2" display />
      <MathTex tex="1+b^2-6b+9=9+b^2-2b+1\;\Rightarrow\;-4b=0\;\Rightarrow\;b=0" display />
      <p>圆心 <MathTex tex="(0,0)" />，<MathTex tex="r^2=1^2+3^2=10" />，方程 <MathTex tex="x^2+y^2=10" /></p>
    </>
  ),
  'ceq-4': (
    <>
      <p>设圆心 <MathTex tex="M(a,b)" />。由 <MathTex tex="2a-b+1=0" /> 得 <MathTex tex="b=2a+1" /></p>
      <p>由 <MathTex tex="|MO|=|MA|" /> 得：</p>
      <MathTex tex="a^2+b^2=(a-2)^2+b^2\;\Rightarrow\;4a=4\;\Rightarrow\;a=1,\;b=3" display />
      <p><MathTex tex="r^2=1^2+3^2=10" />，方程 <MathTex tex="(x-1)^2+(y-3)^2=10" /></p>
    </>
  ),

  /* ── 弦长 ── */
  'ce4-1': (
    <>
      <p>圆心 <MathTex tex="(0,0)" />，<MathTex tex="r=\sqrt{5}" />；圆心到直线距离：</p>
      <MathTex tex="d=\frac{|3\times0+4\times0+5|}{\sqrt{9+16}}=\frac{5}{5}=1" display />
      <p><MathTex tex="d=1<\sqrt{5}=r" />，相交，代入弦长公式：</p>
      <MathTex tex="|AB|=2\sqrt{r^2-d^2}=2\sqrt{5-1}=2\times2=4" display />
    </>
  ),

  /* ── 切线（圆上点） ── */
  'ct1-1': (
    <>
      <p>验证 P 在圆上：<MathTex tex="2^2+3^2=13=r^2\;\checkmark" /></p>
      <p>代入切线公式 <MathTex tex="xm+yn=r^2" />，<MathTex tex="m=2,\,n=3,\,r^2=13" />：</p>
      <MathTex tex="2x+3y=13\;\Rightarrow\;2x+3y-13=0" display />
    </>
  ),

  /* ── 原点圆切线（两小问） ── */
  'cts-1': (
    <>
      <p>（1）验证 A 在圆上：<MathTex tex="3^2+(-4)^2=9+16=25=r^2" />，代入切线公式 <MathTex tex="xm+yn=r^2" />：</p>
      <MathTex tex="3x+(-4)y=25\;\Rightarrow\;3x-4y-25=0" display />
      <p>（2）验证 Q 在圆外：<MathTex tex="7^2+1^2=50>25" />。切点法，设切点 <MathTex tex="T(m,n)" />：</p>
      <MathTex tex="\text{条件①：}m^2+n^2=25" display />
      <MathTex tex="\text{条件②（将 Q(7,1) 代入切线公式）：}7m+n=25" display />
      <p>由条件②得 <MathTex tex="n=25-7m" />，代入条件①：</p>
      <MathTex tex="m^2+(25-7m)^2=25\;\Rightarrow\;50m^2-350m+600=0\;\Rightarrow\;m^2-7m+12=0" display />
      <MathTex tex="(m-3)(m-4)=0" display />
      <p><MathTex tex="m=3,\,n=4" /> 时，切线 <MathTex tex="3x+4y-25=0" /></p>
      <p><MathTex tex="m=4,\,n=-3" /> 时，切线 <MathTex tex="4x-3y-25=0" /></p>
    </>
  ),

  /* ── 切线综合（两小问合并） ── */
  'cts-combo': (
    <>
      <p>（1）验证 T 在圆上：<MathTex tex="(4-3)^2+(3-1)^2=1+4=5=r^2" />，代入一般圆切线公式：</p>
      <MathTex tex="(4-3)(x-3)+(3-1)(y-1)=5" display />
      <MathTex tex="(x-3)+2(y-1)=5\;\Rightarrow\;x+2y-10=0" display />
      <p>（2）验证 P 在圆外：<MathTex tex="(6-3)^2+(2-1)^2=10>5" />。切点法，设切点 <MathTex tex="T(m,n)" />：</p>
      <MathTex tex="\text{条件①：}(m-3)^2+(n-1)^2=5" display />
      <MathTex tex="\text{条件②（将 P(6,2) 代入切线公式）：}3(m-3)+(n-1)=5\;\Rightarrow\;3m+n=15" display />
      <p>由条件②得 <MathTex tex="n=15-3m" />，代入条件①展开：</p>
      <MathTex tex="(m-3)^2+(14-3m)^2=5" display />
      <MathTex tex="m^2-6m+9+9m^2-84m+196=5\;\Rightarrow\;10m^2-90m+200=0\;\Rightarrow\;m^2-9m+20=0" display />
      <MathTex tex="(m-4)(m-5)=0" display />
      <p><MathTex tex="m=4,\,n=3" /> 时，切线 <MathTex tex="x+2y-10=0" /></p>
      <p><MathTex tex="m=5,\,n=0" /> 时，切线 <MathTex tex="2(x-3)+(-1)(y-1)=5\;\Rightarrow\;2x-y-10=0" /></p>
    </>
  ),

  /* ── 切线长 ── */
  'cts-len': (
    <>
      <p>圆心 <MathTex tex="C(1,2)" />，<MathTex tex="r=2" />，P 到圆心距离：</p>
      <MathTex tex="|PC|^2=(4-1)^2+(6-2)^2=9+16=25" display />
      <p>因为 <MathTex tex="25>4=r^2" />，P 在圆外，切线长 <MathTex tex="=\sqrt{25-4}=\sqrt{21}" /></p>
    </>
  ),

  /* ── 已知斜率求切线 ── */
  'cts-slope': (
    <>
      <p>设直线 <MathTex tex="y=x+b" />，即 <MathTex tex="x-y+b=0" />，圆心 <MathTex tex="(0,0)" />，<MathTex tex="r=2" /></p>
      <p>由 <MathTex tex="d=r" />：</p>
      <MathTex tex="\frac{|b|}{\sqrt{1^2+(-1)^2}}=2\;\Rightarrow\;\frac{|b|}{\sqrt{2}}=2\;\Rightarrow\;|b|=2\sqrt{2}" display />
      <p>所以 <MathTex tex="b=2\sqrt{2}" /> 或 <MathTex tex="b=-2\sqrt{2}" />，切线为 <MathTex tex="y=x\pm 2\sqrt{2}" /></p>
    </>
  ),

  /* ── 圆的一般方程 ── */
  'gf-1': (
    <>
      <p>配方：</p>
      <p><MathTex tex="(x^2-4x+4)+(y^2+2y+1)=4+4+1=9" /></p>
      <p>即 <MathTex tex="(x-2)^2+(y+1)^2=9" />，圆心 <MathTex tex="(2,-1)" />，<MathTex tex="r=3" /></p>
    </>
  ),
  'gf-2': (
    <>
      <p>配方：<MathTex tex="(x+1)^2+(y-2)^2=-5+1+4=0" /></p>
      <p>右边等于 0，轨迹只有一个点 <MathTex tex="(-1,2)" />，不是圆。</p>
    </>
  ),
  'gf-3': (
    <>
      <p>设圆的一般方程 <MathTex tex="x^2+y^2+Dx+Ey+F=0" /></p>
      <p>代入 <MathTex tex="O(0,0)" />：<MathTex tex="F=0" /></p>
      <p>代入 <MathTex tex="A(2,0)" />：<MathTex tex="4+2D=0\Rightarrow D=-2" /></p>
      <p>代入 <MathTex tex="B(0,4)" />：<MathTex tex="16+4E=0\Rightarrow E=-4" /></p>
      <p>一般方程：<MathTex tex="x^2+y^2-2x-4y=0" />，配方得 <MathTex tex="(x-1)^2+(y-2)^2=5" /></p>
    </>
  ),
  'gf-4': (
    <>
      <p>这里 <MathTex tex="D=k,\,E=2,\,F=k+1" />，能表示圆需 <MathTex tex="D^2+E^2-4F>0" /></p>
      <MathTex tex="k^2+4-4(k+1)>0" display />
      <MathTex tex="k^2-4k>0\;\Rightarrow\;k(k-4)>0" display />
      <p>所以 <MathTex tex="k<0" /> 或 <MathTex tex="k>4" /></p>
    </>
  ),

  /* ── 圆与圆的位置关系 ── */
  'cc-1': (
    <>
      <p><MathTex tex="C_1: (x-1)^2+y^2=1" />，圆心 <MathTex tex="(1,0)" />，<MathTex tex="r_1=1" /></p>
      <p><MathTex tex="C_2: x^2+(y+2)^2=4" />，圆心 <MathTex tex="(0,-2)" />，<MathTex tex="r_2=2" /></p>
      <p>圆心距 <MathTex tex="d=\sqrt{1^2+2^2}=\sqrt{5}" />，<MathTex tex="|r_1-r_2|=1 < \sqrt{5} < 3=r_1+r_2" />，相交</p>
    </>
  ),
  'cc-2': (
    <>
      <p><MathTex tex="C_1" /> 圆心 <MathTex tex="(0,0)" />，<MathTex tex="r_1=2" />；<MathTex tex="C_2" /> 圆心 <MathTex tex="(a,0)" />，<MathTex tex="r_2=1" /></p>
      <p>外切 <MathTex tex="d=r_1+r_2" />：<MathTex tex="|a|=3" />，<MathTex tex="a=\pm 3" /></p>
    </>
  ),

  /* ── 公共弦 ── */
  'ccc-1': (
    <>
      <p>两圆方程相减（消去 <MathTex tex="x^2,\,y^2" />）：</p>
      <MathTex tex="(x^2+y^2-25)-(x^2+y^2-4x-2y-15)=0" display />
      <p>化简得 <MathTex tex="4x+2y-10=0" />，即 <MathTex tex="2x+y-5=0" /></p>
    </>
  ),

  /* ── 公切线条数 ── */
  'ctc-1': (
    <>
      <p><MathTex tex="C_1" />：圆心 <MathTex tex="(0,0)" />，<MathTex tex="R=1" />；<MathTex tex="C_2" />：圆心 <MathTex tex="(3,0)" />，<MathTex tex="r=2" /></p>
      <p>圆心距 <MathTex tex="d=3" />，<MathTex tex="R+r=3" />，因为 <MathTex tex="d=R+r" />，两圆<strong>外切</strong>，共 <strong>3</strong> 条公切线。</p>
    </>
  ),
  'ctc-2': (
    <>
      <p><MathTex tex="C_1" /> 配方，得圆心 <MathTex tex="(1,0)" />，<MathTex tex="r_1=1" />；<MathTex tex="C_2" /> 配方，得圆心 <MathTex tex="(2,2)" />，<MathTex tex="r_2=2" /></p>
      <p>圆心距 <MathTex tex="d=\sqrt{(2-1)^2+(2-0)^2}=\sqrt{5}\approx2.24" /></p>
      <p>因为 <MathTex tex="|r_1-r_2|=1 < \sqrt{5} < 3=r_1+r_2" />，两圆<strong>相交</strong>，共 <strong>2</strong> 条公切线。</p>
    </>
  ),
  'ctc-3': (
    <>
      <p>口诀：外离4、外切3、相交2、内切1、内含0。</p>
      <p>3条公切线对应<strong>外切</strong>（<MathTex tex="d=R+r" />）。</p>
    </>
  ),
  'ctc-4': (
    <>
      <p><MathTex tex="C_1" /> 圆心 <MathTex tex="(0,0)" />，<MathTex tex="r_1=1" />；<MathTex tex="C_2" /> 圆心 <MathTex tex="(a,0)" />，<MathTex tex="r_2=2" />，圆心距 <MathTex tex="d=|a|" /></p>
      <p>相交条件：<MathTex tex="|r_1-r_2|<d<r_1+r_2" />，即 <MathTex tex="1<|a|<3" /></p>
    </>
  ),

  /* ── 弦中点求直线 ── */
  'cmc-1': (
    <>
      <p>圆心 <MathTex tex="C(1,2)" />，中点 <MathTex tex="M(4,6)" /></p>
      <p>CM 斜率 <MathTex tex="k_{CM}=\dfrac{6-2}{4-1}=\dfrac{4}{3}" />，弦⊥CM，弦斜率 <MathTex tex="k=-\dfrac{3}{4}" /></p>
      <MathTex tex="y-6=-\dfrac{3}{4}(x-4)\;\Rightarrow\;3x+4y-36=0" display />
    </>
  ),

  /* ── 圆关于直线的对称 ── */
  'csym-1': (
    <>
      <p>配方得圆心 <MathTex tex="C(1,0)" />，<MathTex tex="r=1" />。设对称圆心 <MathTex tex="C'(a,b)" />，两个条件：</p>
      <p>条件①，<MathTex tex="CC'" /> 的中点 <MathTex tex="\left(\dfrac{a+1}{2},\,\dfrac{b}{2}\right)" /> 在直线 <MathTex tex="y=x+1" /> 上：</p>
      <MathTex tex="\frac{b}{2}=\frac{a+1}{2}+1\;\Rightarrow\;b=a+3" display />
      <p>条件②，<MathTex tex="CC'\perp" /> 直线，直线斜率为 1，故 <MathTex tex="CC'" /> 斜率为 <MathTex tex="-1" />：</p>
      <MathTex tex="\frac{b-0}{a-1}=-1\;\Rightarrow\;b=1-a" display />
      <p>联立 <MathTex tex="b=a+3" /> 与 <MathTex tex="b=1-a" />，得 <MathTex tex="a+3=1-a\Rightarrow a=-1,\;b=2" /></p>
      <p>对称圆心 <MathTex tex="C'(-1,2)" />，半径不变 <MathTex tex="r=1" />，方程为 <MathTex tex="(x+1)^2+(y-2)^2=1" /></p>
    </>
  ),
  'csym-2': (
    <>
      <p>配方：<MathTex tex="(x-2)^2+(y-1)^2=5" />，圆心 <MathTex tex="C(2,1)" />，<MathTex tex="r=\sqrt{5}" />。设对称圆心 <MathTex tex="C'(a,b)" />：</p>
      <p>条件①，中点 <MathTex tex="\left(\dfrac{a+2}{2},\,\dfrac{b+1}{2}\right)" /> 在直线 <MathTex tex="x+y-1=0" /> 上：</p>
      <MathTex tex="\frac{a+2}{2}+\frac{b+1}{2}-1=0\;\Rightarrow\;a+b+1=0" display />
      <p>条件②，<MathTex tex="CC'\perp" /> 直线，直线斜率为 <MathTex tex="-1" />，故 <MathTex tex="CC'" /> 斜率为 1：</p>
      <MathTex tex="\frac{b-1}{a-2}=1\;\Rightarrow\;b=a-1" display />
      <p>代入条件①：<MathTex tex="a+(a-1)+1=0\Rightarrow 2a=0\Rightarrow a=0,\;b=-1" /></p>
      <p>对称圆心 <MathTex tex="C'(0,-1)" />，答案为 <MathTex tex="(0,-1)" /></p>
    </>
  ),

  /* ── 含参数的直线与圆 ── */
  'cparam-1': (
    <>
      <p>圆心 <MathTex tex="(0,0)" />，<MathTex tex="r=\sqrt{2}" />，直线 <MathTex tex="x+y+m=0" /></p>
      <MathTex tex="d=\frac{|0+0+m|}{\sqrt{1^2+1^2}}=\frac{|m|}{\sqrt{2}}" display />
      <p>相切，则 <MathTex tex="d=r" />，即 <MathTex tex="\frac{|m|}{\sqrt{2}}=\sqrt{2}" />，解得 <MathTex tex="|m|=2" />，<MathTex tex="m=\pm 2" /></p>
    </>
  ),
  'cparam-2': (
    <>
      <p>圆心 <MathTex tex="(0,0)" />，<MathTex tex="r=1" />，直线化为 <MathTex tex="x-y+a=0" /></p>
      <MathTex tex="d=\frac{|a|}{\sqrt{2}}" display />
      <p>相交，则 <MathTex tex="d<r" />，即 <MathTex tex="\frac{|a|}{\sqrt{2}}<1" />，解得 <MathTex tex="|a|<\sqrt{2}" />，即 <MathTex tex="-\sqrt{2}<a<\sqrt{2}" /></p>
    </>
  ),
  'cparam-3': (
    <>
      <p>圆心 <MathTex tex="(a,0)" />，<MathTex tex="r=\sqrt{2}" />，直线 <MathTex tex="x+y-1=0" /></p>
      <MathTex tex="d=\frac{|a+0-1|}{\sqrt{2}}=\frac{|a-1|}{\sqrt{2}}" display />
      <p>相切，则 <MathTex tex="d=r" />，即 <MathTex tex="\frac{|a-1|}{\sqrt{2}}=\sqrt{2}" />，得 <MathTex tex="|a-1|=2" /></p>
      <p><MathTex tex="a-1=2" /> 得 <MathTex tex="a=3" />；<MathTex tex="a-1=-2" /> 得 <MathTex tex="a=-1" /></p>
    </>
  ),
  'cparam-4': (
    <>
      <p>圆心 <MathTex tex="(0,0)" />，<MathTex tex="r=2" />，直线 <MathTex tex="x-y+m=0" /></p>
      <MathTex tex="d=\frac{|m|}{\sqrt{2}}" display />
      <p>弦长公式 <MathTex tex="|AB|=2\sqrt{r^2-d^2}=2" />，即 <MathTex tex="\sqrt{4-\frac{m^2}{2}}=1" /></p>
      <p>两边平方得 <MathTex tex="4-\frac{m^2}{2}=1" />，解得 <MathTex tex="m^2=6" />，<MathTex tex="m=\pm\sqrt{6}" /></p>
    </>
  ),

  /* ── 点到圆上距离 ── */
  'ce3-1': (
    <>
      <p>最小圆以 AB 为直径，圆心 C 为 AB 中点：</p>
      <MathTex tex="C=\left(\frac{1+5}{2},\,\frac{1+1}{2}\right)=(3,1),\quad r=\frac{|AB|}{2}=2" display />
      <p>P(3,6) 到圆心距离：<MathTex tex="|PC|=\sqrt{0^2+5^2}=5>2=r" />，P 在圆外</p>
      <MathTex tex="|PM|_{\min}=|PC|-r=5-2=3,\quad|PM|_{\max}=|PC|+r=5+2=7" display />
      <p>范围 <MathTex tex="[3,7]" /></p>
    </>
  ),
};
