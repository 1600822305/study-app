import { Math, Collapsible, PageHeader, LessonLayout, ExportButton, UnifiedDebugToggle } from '@/components/shared';
import { reverseParamProgressItems } from './data/3.6.5/3.6.5-reverse-param-progress';
import { useProgress } from '@/hooks';

export function ReverseParamPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('reverse-param', reverseParamProgressItems);

  return (
    <div>
      <div className="[&_h1]:!mb-0 [&_.flex.flex-wrap]:!mt-1">
        <PageHeader
          stage="第三阶段 · 函数思维"
          title="3.6.5 反求参数"
          tags={[]}
        />
      </div>

      <LessonLayout
        progressItems={progressItems}
        onToggle={toggleProgress}
        sidebarTop={<ExportButton title="3.6.5 反求参数" />}
      >
        <div className="[&_.rounded-xl]:mb-0 [&_.rounded-xl>.flex.items-center]:py-0.5 [&_.rounded-xl>div:last-child]:px-0 [&_.rounded-xl>div:last-child]:pt-0 [&_.rounded-xl>div:last-child]:pb-0 [&_.rounded-xl_button>span]:font-bold [&_.rounded-xl_button>span]:text-gray-900">

          {/* ═══════════════════════════════════════════════════════ */}
          {/* Section 1: 总览 */}
          {/* ═══════════════════════════════════════════════════════ */}
          <section id="rp-overview" className="mb-0 scroll-mt-4">
            <Collapsible title="一、总览：反求 = 正向的逆运算" defaultOpen storageKey="reverse-param:overview">
              <div className="space-y-0 text-[0.9rem] text-gray-800 leading-snug [&_p]:!my-0 [&_.space-y-1>*+*]:!mt-0.5 [&_hr]:!my-0.5">

                {/* ── 高考定位 ── */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🎯 高考定位 · 反求参数</div>
                  <div className="grid grid-cols-[52fr_48fr]">
                    <div className="px-2 py-0.5 space-y-1 border-r border-gray-300">
                      <p><strong>考查频率</strong>：导数大题第（2）问<strong>高频</strong>，选择填空也常见。</p>
                      <p><strong>难度跨度</strong>：基础（列方程 1–2 步出答案）到压轴（求 <Math tex="a" /> 范围，需<strong>数形结合</strong>）。</p>
                      <p><strong>得分策略</strong>：</p>
                      <p className="pl-2">• <strong>必拿分</strong>：已知极值点/极值（列方程）</p>
                      <p className="pl-2">• <strong>力争分</strong>：已知最值（沿用 3.6 例 4 分类）</p>
                      <p className="pl-2">• <strong>易错点</strong>：<strong>不回代验证</strong>——<Math tex="f'(x_0)=0" /> 不一定是极值点</p>
                    </div>
                    <div className="px-2 py-0.5 space-y-1">
                      <p className="font-bold mb-0.5">📋 5 大常考题型</p>
                      <table className="w-full border-collapse text-[0.85rem] [&_tr>*:first-child]:border-l-0 [&_tr>*:last-child]:border-r-0">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="border border-gray-300 px-1 py-0.5">题型</th>
                            <th className="border border-gray-300 px-1 py-0.5">特征</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-1 py-0.5">① 已知极值点/极值</td>
                            <td className="border border-gray-300 px-1 py-0.5">列方程组 + 验证</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-1 py-0.5">② 已知最值</td>
                            <td className="border border-gray-300 px-1 py-0.5">候选点列方程</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-1 py-0.5">③ 已知单调区间</td>
                            <td className="border border-gray-300 px-1 py-0.5">端点是 <Math tex="f'=0" /> 的根</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-1 py-0.5">④ 已知零点个数</td>
                            <td className="border border-gray-300 px-1 py-0.5">分参 + 数形结合</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-1 py-0.5">⑤ 已知不等式恒成立</td>
                            <td className="border border-gray-300 px-1 py-0.5">转最值（3.6 已讲）</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* ── 本质：翻译 + 回代验证 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🌳 本节根心法：反求 = <strong>翻译</strong> + <strong>回代验证</strong></div>
                  <div className="px-2 py-1 space-y-1">
                    <p>反求题<strong>不是新方法</strong>，而是把 3.6 学过的工具<strong>反着用一遍</strong>。一句话总结：</p>
                    <div className="grid grid-cols-2">
                      <div className="px-2 py-0.5 space-y-0.5 border-r border-gray-300">
                        <p className="font-bold">▶ 正向题（3.6）：给 <Math tex="a" />，求性质</p>
                        <p className="pl-2">已知函数（含具体的 <Math tex="a" />），按流程求出极值/最值/单调性。</p>
                      </div>
                      <div className="px-2 py-0.5 space-y-0.5">
                        <p className="font-bold">◀ 反向题（本节）：给性质，求 <Math tex="a" /></p>
                        <p className="pl-2">把已知性质<strong>翻译成关于 <Math tex="a" /> 的等式或不等式</strong>，解出后<strong>回代验证</strong>。</p>
                      </div>
                    </div>
                    <p className="text-[0.9rem] text-gray-800 mt-1"><strong>💡 学习建议</strong>：每做一道反求题，都要在脑里把它和 3.6 的某道正向题"对照配对"——你会发现两者就是同一道题的两面。</p>
                  </div>
                </div>

                {/* ── 5 大题型 → 翻译模板速查表 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🗺 5 大题型 → 翻译模板速查表（本节例题就按这个顺序展开）</div>
                  <table className="w-full border-collapse text-[0.88rem] [&_tr>*:first-child]:border-l-0 [&_tr>*:last-child]:border-r-0">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-2 py-0.5 w-[6%]">类型</th>
                        <th className="border border-gray-300 px-2 py-0.5 w-[28%]">已知条件（高考原话）</th>
                        <th className="border border-gray-300 px-2 py-0.5">翻译方式</th>
                        <th className="border border-gray-300 px-2 py-0.5 w-[18%]">关键陷阱</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 text-center font-bold">①</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><Math tex="x_0" /> 是 <Math tex="f(x)" /> 的<strong>极值点</strong></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><Math tex="f'(x_0)=0" />（必要条件）</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left text-red-700">必须验证两侧变号</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 text-center font-bold">①'</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><Math tex="f(x)" /> 在 <Math tex="x_0" /> 处取<strong>极大/极小值</strong> <Math tex="v" /></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">联立 <Math tex="f'(x_0)=0" /> 与 <Math tex="f(x_0)=v" /> 解方程组</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left text-red-700">多组解需逐一回代</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 text-center font-bold">②</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><Math tex="f(x)" /> 在 <Math tex="[a,b]" /> 上<strong>最大/最小值</strong> = <Math tex="v" /></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">候选点 = 驻点+端点，函数值列方程</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left text-red-700">含参分类讨论</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 text-center font-bold">③</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><Math tex="f(x)" /> 的<strong>单调递增区间</strong>恰为 <Math tex="[m,n]" /></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><Math tex="m,n" /> 是 <Math tex="f'(x)=0" /> 的根（韦达定理列方程）</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left text-red-700">区分"在...单调"vs"区间恰为..."</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 text-center font-bold">④</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">方程 <Math tex="f(x)=0" /> 有 <Math tex="k" /> 个解</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">分参 <Math tex="a=g(x)" />，画 <Math tex="g(x)" /> 图，看 <Math tex="y=a" /> 横线交点数</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left text-red-700">必须标极值/端点极限</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 text-center font-bold">⑤</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left"><Math tex="f(x)\ge 0" /> 在 <Math tex="D" /> 上恒成立 / 有解</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">转最值（<strong>3.6 已讲</strong>，本节不重复）</td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left text-red-700">任意 vs 存在不可混</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* ── 统一四步模板 ── */}
                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">🔧 统一四步模板（任何反求题都套这个流程）</div>
                  <table className="w-full border-collapse text-center [&_tr>*:first-child]:border-l-0 [&_tr>*:last-child]:border-r-0">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-2 py-0.5 w-[8%]">步骤</th>
                        <th className="border border-gray-300 px-2 py-0.5 w-[22%]">做什么</th>
                        <th className="border border-gray-300 px-2 py-0.5">关键动作</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 font-bold">①</td>
                        <td className="border border-gray-300 px-2 py-0.5"><strong>识别已知</strong></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">是极值/最值/单调性/零点哪一类？看清"<strong>是极值点</strong>"还是"<strong>取得极值</strong>"——后者多一个等式。</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 font-bold">②</td>
                        <td className="border border-gray-300 px-2 py-0.5"><strong>翻译条件</strong></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">查上方速查表，写出关于 <Math tex="a" /> 的等式或不等式（可能是方程组）。</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-0.5 font-bold">③</td>
                        <td className="border border-gray-300 px-2 py-0.5"><strong>求解参数</strong></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">解方程或不等式。<strong>含参函数</strong>需沿用 3.6 的<strong>分类讨论</strong>，每类得一个候选 <Math tex="a" />。</td>
                      </tr>
                      <tr className="bg-amber-50">
                        <td className="border border-gray-300 px-2 py-0.5 font-bold text-red-700">④</td>
                        <td className="border border-gray-300 px-2 py-0.5"><strong>回代验证</strong></td>
                        <td className="border border-gray-300 px-2 py-0.5 text-left">把每个 <Math tex="a" /> 代回原函数，<strong>确认它真的产生题目要求的性质</strong>，剔除增根。<strong>这一步是阅卷给分点</strong>。</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="px-2 py-1 border-t border-gray-300 text-[0.85rem]"><strong>💡 第 ④ 步是反求题区别于正向题的灵魂</strong>。因为很多翻译只给"必要条件"（如 <Math tex="f'(x_0)=0" /> 不一定是极值点，反例 <Math tex="f(x)=x^3" /> 在 <Math tex="x=0" /> 处），不验证就会多算或少算 <Math tex="a" />。</p>
                </div>

              </div>
            </Collapsible>
          </section>

        </div>
      </LessonLayout>
      <UnifiedDebugToggle />
    </div>
  );
}
