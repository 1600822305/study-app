// ═══════════════════════════════════════════════════════════════
// 草稿文件：从 3.6-deriv-application-2-page.tsx 1.3 第一类抽出
// 用于后续重新设计"不单调 / 有极值"题型，最终会迁入 §2 极值与最值
// 当前仅复制第一类相关纯净内容，原文件未改动
// ═══════════════════════════════════════════════════════════════

import { Math } from '@/components/shared';

export function ExtremaDraft() {
  return (
    <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

      {/* ── 题型对照（迁自原 1.3 总览表 🔵 第一类部分） ── */}
      <div className="border border-gray-400 rounded overflow-hidden">
        <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📖 题型 → 导数条件 → 本质（图形化对照）</div>
        <table className="w-full border-collapse text-center [&_tr>*:first-child]:border-l-0 [&_tr>*:last-child]:border-r-0">
          <thead className="bg-gray-50">
            <tr>
              <th className="border border-gray-300 px-2 py-0.5 w-[32%]">题型</th>
              <th className="border border-gray-300 px-2 py-0.5 w-[32%]">导数条件</th>
              <th className="border border-gray-300 px-2 py-0.5">本质（看 <Math tex="f'" /> 图像）</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-blue-50">
              <td colSpan={3} className="border border-gray-300 px-2 py-0.5 text-left font-bold text-blue-800">🔵 找 <Math tex="f'=0" /> 变号零点 — 导数<strong>穿过</strong> <Math tex="x" /> 轴</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-2 py-0.5 text-left"><strong>不单调</strong></td>
              <td className="border border-gray-300 px-2 py-0.5"><Math tex="f'(x)=0" /> 有变号零点</td>
              <td className="border border-gray-300 px-2 py-0.5 text-left">导数<strong>穿过 <Math tex="x" /> 轴</strong></td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-2 py-0.5 text-left"><strong>有极值</strong></td>
              <td className="border border-gray-300 px-2 py-0.5"><Math tex="f'(x)=0" /> 有变号零点</td>
              <td className="border border-gray-300 px-2 py-0.5 text-left">导数<strong>穿过 <Math tex="x" /> 轴</strong></td>
            </tr>
          </tbody>
        </table>
        <div className="px-2 py-1 border-t border-gray-300 text-[0.85rem] text-gray-700">
          <p>ℹ️ <strong>不单调 vs 有极值 细微差别</strong>：「不单调」只要求 <Math tex="f'" /> 在区间内<strong>有变号零点</strong>；<br />「有极值」额外要求该零点<strong>在定义域内</strong>，且函数值确实构成极值。高考一般两者等价，极少数边界题需注意。</p>
        </div>
      </div>

      {/* ── 第一类专属：找 f'=0 变号零点 ── */}
      <div className="border border-blue-400 rounded overflow-hidden -mt-px">
        <div className="px-2 py-1 font-bold text-blue-900 border-b border-blue-400 bg-blue-100">🔵 第一类专属：找 <Math tex="f'(x)=0" /> 变号零点（不单调 / 有极值）</div>
        <div className="px-2 py-1 space-y-1">
          <p className="font-bold">📐 核心条件（两个都要满足）：</p>
          <p className="pl-2">① <strong><Math tex="\Delta>0" /></strong>：保证 <Math tex="f'=0" /> 有<strong>两个不同实根</strong>（重根不变号）</p>
          <p className="pl-2">② <strong>区间内有变号零点</strong>：根含参 <Math tex="a" />，要让它"进得了"指定区间</p>

          <div className="border-t border-gray-300 pt-1">
            <p className="font-bold">🛠️ 统一流程（先并集，后 Δ 剔除）：</p>
            <p className="pl-2"><strong>Step 1　求根</strong>：求 <Math tex="f'(x)" />，解 <Math tex="f'=0" /> 得到所有根（一般含参 <Math tex="a" />）。</p>
            <p className="pl-2"><strong>Step 2　筛根</strong>：不含参且<strong>永远不在区间内</strong>的根 → <strong>直接排除</strong>（永远进不来，对题目无影响）；</p>
            <p style={{ paddingLeft: 'calc(0.5rem + 7em)' }}>其他根 → 全部保留。</p>
            <p className="pl-2"><strong>Step 3　各根写条件</strong>：每个保留的根都写"在区间内"的条件，<strong>化成对 <Math tex="a" /> 的纯不等式</strong>（脱掉 <Math tex="\sqrt{a}" />、分式等）。</p>
            <p className="pl-2"><strong>Step 4　取并集 ∪</strong>：所有根的条件<strong>合并</strong>——"至少一根进区间"等价于并集。</p>
            <p className="pl-2"><strong>Step 5　Δ 剔除（交集 ∩）</strong>：与 <Math tex="\Delta>0" /> 取交集，砍掉"两根不存在或重根"的部分。</p>
          </div>

          <div className="border-t border-gray-300 pt-1 bg-amber-50 -mx-2 px-2 py-1">
            <p className="font-bold">🎯 心法（只盯<strong>含参</strong>的根，3 步搞定）：</p>
            <p className="pl-2"><strong>① 写条件</strong>：每个含参根 → "在区间内" → 化成纯 <Math tex="a" /> 不等式</p>
            <p className="pl-2"><strong>② 求并集</strong>：所有含参根的条件合并（"至少一根进区间"）</p>
            <p className="pl-2"><strong>③ Δ 剔除</strong>：与 <Math tex="\Delta>0" /> 取交集（剔重根 / 无根）</p>
          </div>
        </div>
      </div>

      {/* ── 例 1（不单调 (1,2)，两方法对照） ── */}
      <div className="border border-gray-400 rounded overflow-hidden -mt-px">
        <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：<strong>例 1</strong>　<Math tex="f(x)=x^3-ax^2+1" /> 在 <Math tex="(1,2)" /> 上<strong>不单调</strong>，求 <Math tex="a" /> 范围</div>
        <div className="px-2 py-0.5 space-y-1">
          <p className="font-bold text-blue-800">📘 方法 1：求根 + 落区间（5 步标准流程）</p>
          <p className="pl-2"><strong>① 求导</strong>：<Math tex="f'(x)=3x^2-2ax=x(3x-2a)" />，零点 <Math tex="x=0" /> 和 <Math tex="x=\dfrac{2a}{3}" />。</p>
          <p className="pl-2"><strong>② 翻译</strong>：在 <Math tex="(1,2)" /> 不单调，即 <Math tex="f'(x)=0" /> 在 <Math tex="(1,2)" /> 内有变号零点。</p>
          <p className="pl-2"><strong>③ 筛根</strong>：<Math tex="x=0" /> 不在区间 <Math tex="(1,2)" /> 内 → 排除；<Math tex="x=\dfrac{2a}{3}" /> 含参 → 保留。</p>
          <p className="pl-2"><strong>④ 写条件</strong>：要 <Math tex="\dfrac{2a}{3}\in(1,2)" />，即 <Math tex="1<\dfrac{2a}{3}<2" />，三边乘 3 得 <Math tex="3<2a<6" />，再除以 2 得 <Math tex="\dfrac{3}{2}<a<3" />。</p>
          <p className="pl-2"><strong>⑤ Δ 剔除</strong>：<Math tex="\Delta=(-2a)^2-4\cdot 3\cdot 0=4a^2" />。要 <Math tex="\Delta>0" />，即 <Math tex="4a^2>0" />，解得 <strong><Math tex="a>0" /> 或 <Math tex="a<0" /></strong>（即 <Math tex="a\ne 0" />）。</p>
          <p style={{ paddingLeft: 'calc(0.5rem + 6em)' }}>与 <Math tex="\dfrac{3}{2}<a<3" /> 取交集，得 <Math tex="\dfrac{3}{2}<a<3" />。</p>
          <p className="pl-2"><strong>答</strong>：<strong><Math tex="\dfrac{3}{2}<a<3" /></strong>。</p>
          <hr className="border-gray-300" />
          <p className="font-bold text-emerald-800">📗 方法 2：参变分离 + 数形结合（参数在一次项时更快）</p>
          <p className="pl-2"><strong>① 求导 + 翻译</strong>：<Math tex="f'(x)=3x^2-2ax=0" /> 在 <Math tex="(1,2)" /> 内有变号零点。</p>
          <p className="pl-2"><strong>② 分参</strong>：参数 <Math tex="a" /> 在一次项，在 <Math tex="(1,2)" /> 上 <Math tex="x\ne 0" />，两边除以 <Math tex="x" /> 得 <Math tex="3x-2a=0\;\Rightarrow\;a=\dfrac{3x}{2}" />。</p>
          <p className="pl-2"><strong>③ 数形结合</strong>：令 <Math tex="g(x)=\dfrac{3x}{2}" />，要 <Math tex="g(x)=a" /> 在 <Math tex="(1,2)" /> 内有解，即 <Math tex="a" /> 落在 <Math tex="g" /> 的值域内。</p>
          <p style={{ paddingLeft: 'calc(0.5rem + 6em)' }}><Math tex="g(x)=\dfrac{3x}{2}" /> 在 <Math tex="(1,2)" /> 上单调递增，<Math tex="g(1)=\dfrac{3}{2}" />，<Math tex="g(2)=3" />，所以值域 <Math tex="\left(\dfrac{3}{2},3\right)" />。</p>
          <p className="pl-2"><strong>④ Δ 剔除</strong>：同方法 1，自动满足。</p>
          <p className="pl-2"><strong>答</strong>：<strong><Math tex="\dfrac{3}{2}<a<3" /></strong>（与方法 1 一致）。</p>
        </div>
      </div>

      {/* ── 第一类高频踩坑（迁自原 §2 三个高频踩坑 ②③） ── */}
      <div className="border border-gray-400 rounded overflow-hidden -mt-px">
        <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">⚠️ 第一类高频踩坑</div>
        <div className="px-2 py-0.5 grid grid-cols-2 [&>div]:px-2 [&>div]:py-1 text-[0.85rem]">
          <div className="border-r border-gray-300">
            <p className="font-bold">① 忘了"变号"</p>
            <p><Math tex="f'=0" /> 在区间内有根<strong>不等于</strong>有极值——还要变号。<Math tex="\Delta=0" /> 的<strong>重根不变号</strong>，要剔除。</p>
          </div>
          <div>
            <p className="font-bold">② 闭/开区间端点</p>
            <p>极值<strong>不能</strong>在端点处出现，所以要求"<Math tex="(a,b)" /> 内有极值"时端点要单独验：根落在端点上不算。</p>
          </div>
        </div>
      </div>

      {/* ── 例 4（R 上有极值，对称轴法） ── */}
      <div className="border border-gray-400 rounded overflow-hidden -mt-px">
        <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">📍 详解：<strong>例 4</strong>　<Math tex="f(x)=x^3-3x^2+ax+1" /> 在 <Math tex="\mathbb{R}" /> 上<strong>有极值</strong>，求 <Math tex="a" /><span className="font-normal ml-2">——对称轴法</span></div>
        <div className="px-2 py-0.5 space-y-1">
          <p className="pl-2"><strong>① 求导</strong>：<Math tex="f'(x)=3x^2-6x+a" />（开口向上的二次函数）。</p>
          <hr className="border-gray-300" />
          <p className="pl-2"><strong>② 翻译</strong>：在 <Math tex="\mathbb{R}" /> 上有极值 <Math tex="\Leftrightarrow" /> <Math tex="f'(x)=0" /> 在 <Math tex="\mathbb{R}" /> 上有变号零点 <Math tex="\Leftrightarrow" /> 抛物线 <Math tex="f'(x)" /> 与 <Math tex="x" /> 轴<strong>有两个交点</strong>（穿过 <Math tex="x" /> 轴）。</p>
          <hr className="border-gray-300" />
          <p className="pl-2"><strong>③ 对称轴法</strong>：开口向上的抛物线穿过 <Math tex="x" /> 轴 <Math tex="\Leftrightarrow" /> <strong>最小值 <Math tex="<0" /></strong>（最低点要掉到 <Math tex="x" /> 轴下面）。</p>
          <p className="pl-4">最小值在对称轴 <Math tex="x=-\dfrac{B}{2A}=-\dfrac{-6}{2\cdot 3}=1" /> 处取到。</p>
          <hr className="border-gray-300" />
          <p className="pl-2"><strong>④ 求解</strong>：<Math tex="f'(1)=3\cdot 1^2-6\cdot 1+a=a-3<0" />，解得 <Math tex="a<3" />。<strong>答</strong>：<strong><Math tex="a<3" /></strong>。</p>
        </div>
      </div>

    </div>
  );
}
