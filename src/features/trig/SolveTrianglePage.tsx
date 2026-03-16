import { Math as MathTex, Collapsible, SpeakButton, PageHeader, LessonLayout, ExportButton, PageBreak } from '@/components/shared';
import { PracticeCard } from '@/components/shared/lesson/PracticeCard';
import { trigSolveNarrations } from './data/solve-narrations';
import { trigSolveProgressItems } from './data/solve-progress';
import { sineLawPractice, cosineLawPractice, areaPractice, comprehensivePractice } from './data/solve-questions';
import { useProgress, usePrintMode } from '@/hooks';
import { scrollToId } from '@/lib/scroll';
import { SolveTriGeneric, SolveTriSineLaw1, SolveTriSSA, SolveTriObtuse120, SolveTriAreaHeight, CosineLawDiagram } from './solve-diagrams';

export function SolveTrianglePage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('trig-solve', trigSolveProgressItems);
  const { isPrinting, printOptions } = usePrintMode();

  return (
    <div>
      <PageHeader
        stage="第五阶段 · 三角世界"
        title="5.3 解三角形"
        narration={trigSolveNarrations.intro}
        subtitle="正弦定理、余弦定理、面积公式——解答题常考"
        tags={[
          { label: '难度 ★★★☆☆', color: 'amber' },
          { label: '高考必考', color: 'blue' },
          { label: '约2天', color: 'purple' },
        ]}
      />

      <div className="flex justify-end mb-1 print:hidden">
        <ExportButton title="5.3 解三角形" />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-2 mb-0">
        <p className="font-bold text-gray-800 mb-1">📋 知识地图</p>
        <div className="text-gray-600 grid grid-cols-2 gap-x-4 gap-y-0.5">
          {[
            ['ts-intro', '零、什么是"解三角形"'],
            ['ts-sine', '一、正弦定理'],
            ['ts-cosine', '二、余弦定理'],
            ['ts-area', '三、面积公式'],
            ['ts-choose', '四、选正弦还是余弦定理？'],
            ['ts-practice', '五、高考大题综合实战'],
          ].map(([id, label]) => (
            <button key={id} onClick={() => scrollToId(id)} className="block text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">{label}</button>
          ))}
        </div>
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      {/* ══════════════ Section 0: 什么是解三角形 ══════════════ */}
      <section id="ts-intro" className="scroll-mt-4">
        <Collapsible title="零、什么是「解三角形」" defaultOpen>
          <div className="space-y-1 text-gray-700">
            <div className="flex gap-2 items-start">
              <div className="flex-1">
                <p>一个三角形有 <strong>6 个元素</strong>：三条边 <MathTex tex="a, b, c" /> 和三个角 <MathTex tex="A, B, C" />（大写字母是角，小写是对边）。</p>
                <p><strong>"解三角形"就是：已知其中几个，求出剩下的。</strong></p>
                <p>高考一般给 3 个条件，要你求剩下的边、角或面积。</p>
              </div>
              <div className="shrink-0 w-[160px]"><SolveTriGeneric /></div>
            </div>
            <div className="bg-amber-50 rounded p-1.5 border border-amber-200">
              <p className="font-bold text-amber-800 mb-0.5">🔧 三把钥匙（整章就学这三个公式）</p>
              <div className="space-y-0.5">
                <p><strong>① 正弦定理：</strong>边与对角的 sin 成比例 → 用于 <strong>边角互化</strong></p>
                <p><strong>② 余弦定理：</strong>勾股定理的升级版 → 用于 <strong>已知边求边/角</strong></p>
                <p><strong>③ 面积公式：</strong><MathTex tex="S=\tfrac{1}{2}ab\sin C" /> → 用于 <strong>求面积</strong></p>
              </div>
            </div>
            <p className="text-red-700 font-bold">高考解答题几乎每年都考解三角形，一般分两问：第①问求角，第②问求值（面积/边长/最值）。</p>
          </div>
        </Collapsible>
      </section>

      {/* ══════════════ Section 1: 正弦定理 ══════════════ */}
      <section id="ts-sine" className="scroll-mt-4">
        <Collapsible title="一、正弦定理" defaultOpen>
          <SpeakButton text={trigSolveNarrations.sineLaw} />
          <div className="space-y-0.5 text-gray-700">

            {/* 公式 */}
            <div className="rounded p-1.5 border border-gray-300">
              <p className="font-bold text-red-800 mb-0.5">📌 正弦定理</p>
              <p className="text-lg text-center"><MathTex tex="\dfrac{a}{\sin A} = \dfrac{b}{\sin B} = \dfrac{c}{\sin C} = 2R" />（<MathTex tex="R" /> 为外接圆半径）</p>
            </div>

            {/* 白话解释 */}
            <p><strong>白话：</strong>边越长，对面的角就越大，而且比值恒等于外接圆直径 <MathTex tex="2R" />。</p>

            {/* 三种用法 */}
            <div className="bg-blue-50 rounded p-1.5 border border-blue-200">
              <p className="font-bold text-blue-800 mb-0.5">🎯 三种核心用法</p>
              <div className="space-y-1">
                <div className="border-l-4 border-red-300 pl-2">
                  <p><strong>用法1 · 已知两角一边 → 求另一边</strong></p>
                  <p className="text-lg text-center"><MathTex tex="b = \dfrac{a \sin B}{\sin A}" /></p>
                </div>
                <div className="border-l-4 border-blue-300 pl-2">
                  <p><strong>用法2 · 已知两边和一个对角 → 求另一角</strong></p>
                  <p className="text-lg text-center"><MathTex tex="\sin B = \dfrac{b \sin A}{a}" /></p>
                  <p className="text-red-600 font-bold">⚠️ 这里可能有两个解！（SSA 模糊情形，下面详讲）</p>
                </div>
                <div className="border-l-4 border-green-300 pl-2">
                  <p><strong>用法3 · 边角互化（最常用！）</strong></p>
                  <p className="text-lg text-center"><MathTex tex="a : b : c = \sin A : \sin B : \sin C" /></p>
                  <p>高考第①问经常给一个含 <MathTex tex="a, b, c" /> 和 <MathTex tex="\sin A, \sin B, \sin C" /> 的等式，用这个替换统一后求角。</p>
                </div>
              </div>
            </div>
            <p className="text-red-700 font-bold">💡 记忆口诀：正弦定理看"对边对角"——题目里出现"一条边 + 它的对角"就用正弦定理。</p>
            <p><strong>第三个角怎么求？</strong>三角形内角和 <MathTex tex="A + B + C = 180°" />，知道两个角就能算第三个。</p>

            <PageBreak label="正弦定理公式 → 例题" />

            {/* 例题1 */}
            <div className="flex gap-2 items-start">
              <div className="flex-1 bg-white rounded p-1.5 border border-blue-200">
                <p className="font-bold text-blue-800 mb-0.5">📝 例题1：已知两角一边求另一边</p>
                <p>在 <MathTex tex="\triangle ABC" /> 中，<MathTex tex="A=30°, B=45°, a=2" />，求 <MathTex tex="b" /></p>
                <div className="border-l-4 border-green-300 pl-2 mt-0.5">
                  <p><MathTex tex="b = \dfrac{a\sin B}{\sin A} = \dfrac{2 \times \frac{\sqrt{2}}{2}}{\frac{1}{2}} = 2\sqrt{2}" /></p>
                </div>
              </div>
              <div className="shrink-0 w-[160px]"><SolveTriSineLaw1 /></div>
            </div>

            {/* 例题2 */}
            <div className="bg-white rounded p-1.5 border border-blue-200">
              <p className="font-bold text-blue-800 mb-0.5">📝 例题2：边角互化求角</p>
              <p>在 <MathTex tex="\triangle ABC" /> 中，<MathTex tex="a\cos B = b\cos A" />，判断三角形形状</p>
              <div className="border-l-4 border-green-300 pl-2 mt-0.5">
                <p><strong>边化角：</strong>由正弦定理 <MathTex tex="a = 2R\sin A,\; b = 2R\sin B" /></p>
                <p><MathTex tex="\sin A\cos B = \sin B\cos A" /></p>
                <p><MathTex tex="\sin A\cos B - \sin B\cos A = 0 \Rightarrow \sin(A-B) = 0" /></p>
                <p>所以 <MathTex tex="A = B" />，是<strong>等腰三角形</strong></p>
              </div>
            </div>

            {/* SSA 两解 */}
            <div className="rounded p-1.5 border border-gray-300">
              <p className="font-bold text-red-800 mb-0.5">⚠️ 什么时候会有两个解？</p>
              <p>用正弦定理求角时，算出 <MathTex tex="\sin B" /> 的值后，<strong>角 B 可能有两个答案</strong>：</p>
              <p>因为 <MathTex tex="\sin 60° = \sin 120°" />，所以 <MathTex tex="\sin B = \frac{\sqrt{3}}{2}" /> 时，<MathTex tex="B" /> 可能是 60° 也可能是 120°。</p>
              <p><strong>怎么判断保留哪个？</strong>把两个 B 分别加上已知角 A，看 <MathTex tex="A+B" /> 是否 <MathTex tex="< 180°" />，超了就扔掉。</p>
              <p className="text-red-700 font-bold">记住一句话：<strong>算出 sin 值后，别忘了检查补角！</strong></p>
            </div>

            {/* 例题3：两解 */}
            <div className="flex gap-2 items-center">
              <div className="flex-1 bg-white rounded p-1.5 border border-blue-200">
                <p className="font-bold text-blue-800 mb-0.5">📝 例题3：SSA 两解完整示范</p>
                <p>在 <MathTex tex="\triangle ABC" /> 中，<MathTex tex="a=1, b=\sqrt{3}, A=30°" />，求 <MathTex tex="B" /></p>
                <div className="space-y-0.5 mt-0.5">
                  <div className="border-l-4 border-red-300 pl-2">
                    <p><strong>第①步：</strong><MathTex tex="\sin B = \frac{b\sin A}{a} = \frac{\sqrt{3} \cdot \frac{1}{2}}{1} = \frac{\sqrt{3}}{2}" /></p>
                  </div>
                  <div className="border-l-4 border-blue-300 pl-2">
                    <p><strong>第②步：</strong><MathTex tex="B_1 = 60°" /> 或 <MathTex tex="B_2 = 180° - 60° = 120°" /></p>
                  </div>
                  <div className="border-l-4 border-green-300 pl-2">
                    <p><strong>第③步 验证：</strong></p>
                    <p><MathTex tex="B_1=60°" />：<MathTex tex="A+B_1=90° < 180°" /> ✓</p>
                    <p><MathTex tex="B_2=120°" />：<MathTex tex="A+B_2=150° < 180°" /> ✓</p>
                    <p><strong>两个都合法 → 有两个解</strong></p>
                  </div>
                </div>
              </div>
              <div className="shrink-0 w-[280px]"><SolveTriSSA /></div>
            </div>

            <PracticeCard title="✏️ 正弦定理即时训练" questions={sineLawPractice} optionCols={4} printOptionCols={4} />
          </div>
        </Collapsible>
      </section>

      <PageBreak label="正弦定理 → 余弦定理" />

      {/* ══════════════ Section 2: 余弦定理 ══════════════ */}
      <section id="ts-cosine" className="scroll-mt-4">
        <Collapsible title="二、余弦定理" defaultOpen>
          <SpeakButton text={trigSolveNarrations.cosineLaw} />
          <div className="space-y-1 text-gray-700">

            {/* ───── 第一层：引入 + 公式 ───── */}
            <p>你已经知道勾股定理：直角三角形中 <MathTex tex="c^2 = a^2 + b^2" />。</p>
            <p><strong>余弦定理就是勾股定理的"升级版"</strong>——对任意三角形都成立，多了一个修正项 <MathTex tex="-2bc\cos A" />：</p>

            <div className="flex gap-3 items-start">
              <div className="flex-1">
                <p className="font-bold text-red-800">📌 余弦定理公式表</p>
                <table className="w-full text-base border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 p-1.5 text-center w-1/2"><strong>求边（已知两边 + 夹角）</strong></th>
                      <th className="border border-gray-300 p-1.5 text-center w-1/2"><strong>求角（已知三边）← 移项变形</strong></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-1.5 text-center text-lg"><MathTex tex="a^2 = b^2 + c^2 - 2bc\cos A" /></td>
                      <td className="border border-gray-300 p-1.5 text-center text-lg"><MathTex tex="\cos A = \dfrac{b^2 + c^2 - a^2}{2bc}" /></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-1.5 text-center text-lg"><MathTex tex="b^2 = a^2 + c^2 - 2ac\cos B" /></td>
                      <td className="border border-gray-300 p-1.5 text-center text-lg"><MathTex tex="\cos B = \dfrac{a^2 + c^2 - b^2}{2ac}" /></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-1.5 text-center text-lg"><MathTex tex="c^2 = a^2 + b^2 - 2ab\cos C" /></td>
                      <td className="border border-gray-300 p-1.5 text-center text-lg"><MathTex tex="\cos C = \dfrac{a^2 + b^2 - c^2}{2ab}" /></td>
                    </tr>
                  </tbody>
                </table>
                <p><strong>口诀：</strong>左边是谁的平方，cos 就是谁的对角；求角时分子 = 另两边平方和 − 对边平方</p>
              </div>
              <div className="shrink-0 w-[180px]">
                <CosineLawDiagram />
              </div>
            </div>

            <p><strong>白话理解：</strong>公式就是在勾股定理 <MathTex tex="a^2 = b^2 + c^2" /> 后面补了一项 <MathTex tex="-2bc\cos A" />。</p>
            <p>当 <MathTex tex="A = 90°" /> 时，<MathTex tex="\cos 90° = 0" />，补的那项没了，就是勾股定理；当 <MathTex tex="A" /> 是钝角（如 120°），<MathTex tex="\cos A" /> 为负数，减去负数 = 加，所以 <MathTex tex="a^2" /> 更大（钝角对面的边最长）。</p>

            {/* ───── 第二层：用法1 · 已知两边夹角求第三边 ───── */}
            <div className="bg-blue-50 rounded p-1.5 border border-blue-200">
              <p className="font-bold text-blue-800 mb-0.5">🎯 用法1：已知两边 + 夹角 → 求第三边（直接代公式）</p>
              <p>这是余弦定理最直接的用法：知道 <MathTex tex="b, c, A" />，代入 <MathTex tex="a^2 = b^2+c^2-2bc\cos A" /> 就能算出 <MathTex tex="a" />。</p>
            </div>

            <div className="flex gap-2 items-center">
              <div className="flex-1 bg-white rounded p-1.5 border border-blue-200">
                <p className="font-bold text-blue-800 mb-0.5">◆ 例题1：已知两边夹角求第三边</p>
                <p>在 <MathTex tex="\triangle ABC" /> 中，<MathTex tex="b=3, c=5, A=120°" />，求 <MathTex tex="a" /></p>
                <div className="space-y-0.5 mt-0.5">
                  <div className="border-l-4 border-red-300 pl-2">
                    <p><strong>第①步 代入公式：</strong><MathTex tex="a^2 = b^2+c^2-2bc\cos A = 9+25-2(3)(5)\cos 120°" /></p>
                  </div>
                  <div className="border-l-4 border-blue-300 pl-2">
                    <p><strong>第②步 查表代值：</strong><MathTex tex="\cos 120° = -\frac{1}{2}" />（负值！）</p>
                    <p><MathTex tex="a^2 = 34 - 30 \times (-\tfrac{1}{2}) = 34 + 15 = 49" /></p>
                  </div>
                  <div className="border-l-4 border-green-300 pl-2">
                    <p><strong>第③步 开方：</strong><MathTex tex="a = 7" /></p>
                  </div>
                </div>
              </div>
              <div className="shrink-0 w-[260px]"><SolveTriObtuse120 /></div>
            </div>

            {/* ───── 第四层：用法2 · 已知三边求角 ───── */}
            <div className="bg-blue-50 rounded p-1.5 border border-blue-200">
              <p className="font-bold text-blue-800 mb-0.5">🎯 用法2：已知三边 → 求角</p>
              <p>直接用上面的求角变形公式：已知三条边，代入就能算出任意角。高考经常让你"判断角是锐角还是钝角"，就用这个。</p>
            </div>

            <div className="bg-white rounded p-1.5 border border-blue-200">
              <p className="font-bold text-blue-800 mb-0.5">📝 例题2：已知三边求角</p>
              <p>在 <MathTex tex="\triangle ABC" /> 中，<MathTex tex="a=\sqrt{13}, b=3, c=1" />，求 <MathTex tex="A" /></p>
              <div className="space-y-0.5 mt-0.5">
                <div className="border-l-4 border-red-300 pl-2">
                  <p><strong>第①步 代入求角公式：</strong></p>
                  <p><MathTex tex="\cos A = \dfrac{b^2+c^2-a^2}{2bc} = \dfrac{9+1-13}{2 \cdot 3 \cdot 1} = \dfrac{-3}{6} = -\dfrac{1}{2}" /></p>
                </div>
                <div className="border-l-4 border-green-300 pl-2">
                  <p><strong>第②步 查表反推：</strong><MathTex tex="\cos A = -\frac{1}{2}" /> → <MathTex tex="A = 120°" /></p>
                </div>
              </div>
            </div>

            {/* ───── 第五层：用法3 · 判断三角形类型 ───── */}
            <div className="bg-amber-50 rounded p-1.5 border border-amber-200">
              <p className="font-bold text-amber-800 mb-0.5">🎯 用法3：判断三角形类型（秒杀技巧）</p>
              <p>有了求角公式，判断三角形类型就不需要真的算角度了。设最大边为 <MathTex tex="c" />，只需看分子的正负：</p>
              <div className="space-y-0.5 mt-0.5">
                <p><MathTex tex="a^2 + b^2 > c^2" /> → 分子 {'>'} 0 → <MathTex tex="\cos C > 0" /> → <strong>锐角</strong>三角形</p>
                <p><MathTex tex="a^2 + b^2 = c^2" /> → 分子 = 0 → <MathTex tex="\cos C = 0" /> → <strong>直角</strong>三角形</p>
                <p><MathTex tex="a^2 + b^2 < c^2" /> → 分子 {'<'} 0 → <MathTex tex="\cos C < 0" /> → <strong>钝角</strong>三角形</p>
              </div>
            </div>

            <div className="bg-white rounded p-1.5 border border-blue-200">
              <p className="font-bold text-blue-800 mb-0.5">� 例题3：判断三角形类型</p>
              <p>三边为 <MathTex tex="3, 5, 7" />，判断三角形类型</p>
              <div className="space-y-0.5 mt-0.5">
                <div className="border-l-4 border-red-300 pl-2">
                  <p><strong>第①步 找最大边：</strong><MathTex tex="c=7" /></p>
                </div>
                <div className="border-l-4 border-blue-300 pl-2">
                  <p><strong>第②步 比较：</strong><MathTex tex="a^2+b^2 = 9+25 = 34" />，<MathTex tex="c^2 = 49" /></p>
                  <p><MathTex tex="34 < 49" /> → <MathTex tex="a^2+b^2 < c^2" /></p>
                </div>
                <div className="border-l-4 border-green-300 pl-2">
                  <p><strong>结论：</strong><MathTex tex="\cos C < 0" /> → <strong>钝角三角形</strong></p>
                </div>
              </div>
            </div>

            {/* ───── 第六层：易错 + 对比 ───── */}
            <div className="rounded p-1.5 border border-gray-300">
              <p className="font-bold text-red-800 mb-0.5">⚠️ 易错点</p>
              <p>① <MathTex tex="\cos 120° = -\frac{1}{2}" />，代入时 <MathTex tex="-2bc \times (-\frac{1}{2}) = +bc" />，<strong>负号别丢！</strong></p>
              <p>② 判断类型只看<strong>最大角</strong>（最大边的对角），不要拿小边去比</p>
            </div>

            <div className="bg-amber-50 rounded p-1.5 border border-amber-200">
              <p className="font-bold text-amber-800 mb-0.5">📋 余弦定理 vs 勾股定理</p>
              <table className="w-full text-base border-collapse">
                <thead>
                  <tr className="bg-amber-100">
                    <th className="border border-amber-200 p-1 text-left">对比</th>
                    <th className="border border-amber-200 p-1 text-left">勾股定理</th>
                    <th className="border border-amber-200 p-1 text-left">余弦定理</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-amber-200 p-1">适用</td>
                    <td className="border border-amber-200 p-1">仅直角三角形</td>
                    <td className="border border-amber-200 p-1 font-bold">任意三角形</td>
                  </tr>
                  <tr className="bg-amber-50">
                    <td className="border border-amber-200 p-1">公式</td>
                    <td className="border border-amber-200 p-1"><MathTex tex="c^2=a^2+b^2" /></td>
                    <td className="border border-amber-200 p-1"><MathTex tex="c^2=a^2+b^2-2ab\cos C" /></td>
                  </tr>
                  <tr>
                    <td className="border border-amber-200 p-1">关系</td>
                    <td className="border border-amber-200 p-1" colSpan={2}><MathTex tex="C=90°" /> 时 <MathTex tex="\cos C=0" />，余弦定理退化为勾股定理</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ───── 第七层：即时训练 + 高频变形 ───── */}
            <PracticeCard title="✏️ 余弦定理即时训练" questions={cosineLawPractice} optionCols={4} printOptionCols={4} />

            <div className="bg-blue-50 rounded p-1.5 border border-blue-200">
              <p className="font-bold text-blue-800 mb-0.5">🔑 余弦定理高频变形（高考套路）</p>
              <div className="space-y-0.5">
                <p><strong>套路1 · 条件含 <MathTex tex="a^2, b^2, c^2" /> 的等式：</strong>直接用求角公式替换</p>
                <p className="pl-2">例：<MathTex tex="a^2 = b^2 + c^2 + bc" /> → <MathTex tex="\cos A = \frac{-bc}{2bc} = -\frac{1}{2}" /> → <MathTex tex="A=120°" /></p>
                <p><strong>套路2 · 条件含 <MathTex tex="b^2+c^2-a^2" />：</strong>直接等于 <MathTex tex="2bc\cos A" /></p>
                <p className="pl-2">例：<MathTex tex="b^2+c^2-a^2 = bc" /> → <MathTex tex="2bc\cos A = bc" /> → <MathTex tex="\cos A = \frac{1}{2}" /> → <MathTex tex="A=60°" /></p>
                <p><strong>套路3 · 求最值：</strong>余弦定理建立关系 + 均值不等式</p>
                <p className="pl-2">例：已知 <MathTex tex="A=60°, a=\sqrt{3}" />，求 <MathTex tex="b+c" /> 最大值 → 先用余弦定理得 <MathTex tex="3=b^2+c^2-bc" /></p>
              </div>
            </div>
          </div>
        </Collapsible>
      </section>

      <PageBreak label="余弦定理 → 面积公式" />

      {/* ══════════════ Section 3: 面积公式 ══════════════ */}
      <section id="ts-area" className="scroll-mt-4">
        <Collapsible title="三、面积公式" defaultOpen>
          <SpeakButton text={trigSolveNarrations.area} />
          <div className="space-y-1 text-gray-700">

            <div className="rounded p-1.5 border border-gray-300">
              <p className="font-bold text-red-800 mb-0.5">📌 三角形面积公式（三种等价形式）</p>
              <div className="space-y-0.5 text-lg text-center">
                <p><MathTex tex="S = \dfrac{1}{2}ab\sin C = \dfrac{1}{2}bc\sin A = \dfrac{1}{2}ac\sin B" /></p>
              </div>
              <p className="text-center mt-0.5"><strong>口诀：面积 = ½ × 两边 × 夹角的 sin</strong></p>
            </div>

            <div className="flex gap-2 items-start">
              <p className="flex-1"><strong>本质：</strong>就是 <MathTex tex="S = \frac{1}{2} \times \text{底} \times \text{高}" /> 的三角函数写法。因为高 <MathTex tex="h = b\sin C" />，所以 <MathTex tex="S = \frac{1}{2}a \cdot b\sin C" />。</p>
              <div className="shrink-0 w-[160px]"><SolveTriAreaHeight /></div>
            </div>

            {/* 例题1 */}
            <div className="bg-white rounded p-1.5 border border-blue-200">
              <p className="font-bold text-blue-800 mb-0.5">📝 例题1：直接代公式</p>
              <p>在 <MathTex tex="\triangle ABC" /> 中，<MathTex tex="a=6, b=4, C=30°" />，求面积</p>
              <div className="border-l-4 border-green-300 pl-2 mt-0.5">
                <p><MathTex tex="S = \frac{1}{2} \times 6 \times 4 \times \sin 30° = \frac{1}{2} \times 6 \times 4 \times \frac{1}{2} = 6" /></p>
              </div>
            </div>

            {/* 例题2 */}
            <div className="bg-white rounded p-1.5 border border-blue-200">
              <p className="font-bold text-blue-800 mb-0.5">📝 例题2：和余弦定理联动（高考最爱）</p>
              <p>在 <MathTex tex="\triangle ABC" /> 中，<MathTex tex="a=5, b=8, c=7" />，求面积</p>
              <div className="space-y-0.5 mt-0.5">
                <div className="border-l-4 border-red-300 pl-2">
                  <p><strong>第①步 余弦定理求角：</strong></p>
                  <p><MathTex tex="\cos C = \frac{a^2+b^2-c^2}{2ab} = \frac{25+64-49}{80} = \frac{40}{80} = \frac{1}{2}" /> → <MathTex tex="C = 60°" /></p>
                </div>
                <div className="border-l-4 border-green-300 pl-2">
                  <p><strong>第②步 代入面积公式：</strong></p>
                  <p><MathTex tex="S = \frac{1}{2} \times 5 \times 8 \times \sin 60° = 20 \times \frac{\sqrt{3}}{2} = 10\sqrt{3}" /></p>
                </div>
              </div>
            </div>

            <PracticeCard title="✏️ 面积公式即时训练" questions={areaPractice} optionCols={4} printOptionCols={4} />
          </div>
        </Collapsible>
      </section>

      <PageBreak label="面积公式 → 定理选择" />

      {/* ══════════════ Section 4: 选正弦还是余弦 ══════════════ */}
      <section id="ts-choose" className="scroll-mt-4">
        <Collapsible title="四、选正弦还是余弦定理？" defaultOpen>
          <SpeakButton text={trigSolveNarrations.choose} />
          <div className="space-y-1 text-gray-700">

            <div className="bg-blue-50 rounded p-1.5 border border-blue-200">
              <p className="font-bold text-blue-800 mb-0.5">📋 一张表搞定选择</p>
              <table className="w-full text-base border-collapse">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="border border-blue-200 p-1 text-left">已知条件</th>
                    <th className="border border-blue-200 p-1 text-left">用什么</th>
                    <th className="border border-blue-200 p-1 text-left">求什么</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-blue-200 p-1">两角 + 一边（AAS/ASA）</td>
                    <td className="border border-blue-200 p-1 text-red-600 font-bold">正弦定理</td>
                    <td className="border border-blue-200 p-1">另一边</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-blue-200 p-1">两边 + 对角（SSA）</td>
                    <td className="border border-blue-200 p-1 text-red-600 font-bold">正弦定理</td>
                    <td className="border border-blue-200 p-1">另一角（注意两解！）</td>
                  </tr>
                  <tr>
                    <td className="border border-blue-200 p-1">两边 + 夹角（SAS）</td>
                    <td className="border border-blue-200 p-1 text-blue-600 font-bold">余弦定理</td>
                    <td className="border border-blue-200 p-1">第三边</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-blue-200 p-1">三边（SSS）</td>
                    <td className="border border-blue-200 p-1 text-blue-600 font-bold">余弦定理</td>
                    <td className="border border-blue-200 p-1">任意角</td>
                  </tr>
                  <tr>
                    <td className="border border-blue-200 p-1">含 <MathTex tex="a^2, b^2, c^2" /> 的等式</td>
                    <td className="border border-blue-200 p-1 text-blue-600 font-bold">余弦定理</td>
                    <td className="border border-blue-200 p-1">展开化简</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-blue-200 p-1">含 <MathTex tex="\sin A, \sin B" /> 的等式</td>
                    <td className="border border-blue-200 p-1 text-red-600 font-bold">正弦定理</td>
                    <td className="border border-blue-200 p-1">边化角（<MathTex tex="a \to \sin A" />）</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="font-bold text-red-700">一句话：看到角用正弦定理，看到边的平方用余弦定理，看到面积用面积公式。</p>

            {/* 边化角 vs 角化边 */}
            <div className="bg-amber-50 rounded p-1.5 border border-amber-200">
              <p className="font-bold text-amber-800 mb-0.5">🔄 边角互化（高考第①问的核心技巧）</p>
              <div className="space-y-0.5">
                <p><strong>边化角：</strong>用正弦定理把 <MathTex tex="a \to 2R\sin A" />，化成纯角的等式，然后用三角恒等变换求角</p>
                <p><strong>角化边：</strong>用余弦定理把 <MathTex tex="\cos A \to \frac{b^2+c^2-a^2}{2bc}" />，化成纯边的等式</p>
                <p className="text-red-600"><strong>判断标准：</strong>等式中 <MathTex tex="a, \sin A" /> 混在一起 → 边化角；等式中 <MathTex tex="a^2, \cos A" /> 混在一起 → 角化边</p>
              </div>
            </div>

            {/* 射影定理 */}
            <div className="bg-gray-50 rounded p-1.5 border border-gray-200">
              <p className="font-bold text-gray-800 mb-0.5">📎 补充：射影定理（偶尔出现）</p>
              <p className="text-center"><MathTex tex="a = b\cos C + c\cos B" /></p>
              <p>这是余弦定理的推论，把一条边分解为另两条边在它上面的投影之和。见到 <MathTex tex="a\cos B + b\cos A" /> 这类组合直接用。</p>
            </div>
          </div>
        </Collapsible>
      </section>

      <PageBreak label="定理选择 → 综合实战" />

      {/* ══════════════ Section 5: 综合实战 ══════════════ */}
      <section id="ts-practice" className="scroll-mt-4">
        <Collapsible title="五、高考大题综合实战" defaultOpen>
          <SpeakButton text={trigSolveNarrations.practice} />
          <div className="space-y-1 text-gray-700">

            {/* 高考题型结构 */}
            <div className="bg-amber-50 rounded p-1.5 border border-amber-200">
              <p className="font-bold text-amber-800 mb-0.5">📋 高考解答题典型结构</p>
              <p><strong>第①问（6分）：</strong>给一个边角关系等式 → 边化角求某个角（通常求出 <MathTex tex="A=\frac{\pi}{3}" /> 或 <MathTex tex="\frac{\pi}{6}" />）</p>
              <p><strong>第②问（6分）：</strong>再给条件 → 求面积/边长/周长最值</p>
            </div>

            {/* 综合例题1 */}
            <div className="bg-white rounded p-1.5 border border-blue-200">
              <p className="font-bold text-blue-800 mb-0.5">📝 综合例题1（边化角 + 面积）</p>
              <p><MathTex tex="\triangle ABC" /> 中，<MathTex tex="b^2+c^2-a^2 = bc" />。(1) 求 <MathTex tex="A" />；(2) 若 <MathTex tex="a=2, b+c=4" />，求面积 <MathTex tex="S" /></p>

              <div className="space-y-0.5 mt-0.5">
                <div className="border-l-4 border-red-300 pl-2">
                  <p><strong>(1) 角化边：</strong></p>
                  <p><MathTex tex="\cos A = \dfrac{b^2+c^2-a^2}{2bc} = \dfrac{bc}{2bc} = \dfrac{1}{2}" /></p>
                  <p>所以 <MathTex tex="A = \dfrac{\pi}{3}" />（即 60°）</p>
                </div>
                <div className="border-l-4 border-blue-300 pl-2">
                  <p><strong>(2) 求面积：</strong></p>
                  <p>由余弦定理：<MathTex tex="a^2 = b^2+c^2 - 2bc\cos A" /></p>
                  <p><MathTex tex="4 = (b+c)^2 - 2bc - 2bc \cdot \frac{1}{2} = 16 - 3bc" /></p>
                  <p>所以 <MathTex tex="bc = 4" /></p>
                </div>
                <div className="border-l-4 border-green-300 pl-2">
                  <p><MathTex tex="S = \frac{1}{2}bc\sin A = \frac{1}{2} \times 4 \times \frac{\sqrt{3}}{2} = \sqrt{3}" /></p>
                </div>
              </div>
            </div>

            {/* 综合例题2 */}
            <div className="bg-white rounded p-1.5 border border-blue-200">
              <p className="font-bold text-blue-800 mb-0.5">📝 综合例题2（判断三角形形状）</p>
              <p><MathTex tex="\triangle ABC" /> 中，<MathTex tex="a^2 = b^2 + bc" />，<MathTex tex="A = 2B" />，求 <MathTex tex="B" /></p>

              <div className="space-y-0.5 mt-0.5">
                <div className="border-l-4 border-red-300 pl-2">
                  <p><strong>第①步 正弦定理处理 A=2B：</strong></p>
                  <p><MathTex tex="\frac{a}{\sin A} = \frac{b}{\sin B}" /> → <MathTex tex="\frac{a}{\sin 2B} = \frac{b}{\sin B}" /></p>
                  <p><MathTex tex="a = \frac{b\sin 2B}{\sin B} = \frac{2b\sin B\cos B}{\sin B} = 2b\cos B" /></p>
                </div>
                <div className="border-l-4 border-blue-300 pl-2">
                  <p><strong>第②步 代入 <MathTex tex="a^2 = b^2 + bc" />：</strong></p>
                  <p><MathTex tex="4b^2\cos^2 B = b^2 + bc" /></p>
                  <p>两边除以 <MathTex tex="b" />：<MathTex tex="4b\cos^2 B = b + c" /></p>
                </div>
                <div className="border-l-4 border-green-300 pl-2">
                  <p><strong>第③步 再用余弦定理求 c：</strong></p>
                  <p>由 <MathTex tex="\cos B = \frac{a^2+c^2-b^2}{2ac}" /> 和 <MathTex tex="a=2b\cos B" />，代入整理后得</p>
                  <p><MathTex tex="\cos B = \frac{\sqrt{3}}{2}" /> → <MathTex tex="B = \frac{\pi}{6}" />（即 30°）</p>
                </div>
              </div>
            </div>

            {/* 综合例题3 */}
            <div className="bg-white rounded p-1.5 border border-blue-200">
              <p className="font-bold text-blue-800 mb-0.5">📝 综合例题3（面积反推边）</p>
              <p><MathTex tex="\triangle ABC" /> 中，<MathTex tex="A=\frac{\pi}{3}, b=1" />，面积 <MathTex tex="S=\frac{\sqrt{3}}{4}" />，求 <MathTex tex="a" /></p>

              <div className="space-y-0.5 mt-0.5">
                <div className="border-l-4 border-red-300 pl-2">
                  <p><strong>第①步 面积求 c：</strong></p>
                  <p><MathTex tex="S = \frac{1}{2}bc\sin A \Rightarrow \frac{\sqrt{3}}{4} = \frac{1}{2} \cdot 1 \cdot c \cdot \frac{\sqrt{3}}{2}" /></p>
                  <p>解得 <MathTex tex="c = 1" /></p>
                </div>
                <div className="border-l-4 border-green-300 pl-2">
                  <p><strong>第②步 余弦定理求 a：</strong></p>
                  <p><MathTex tex="a^2 = 1 + 1 - 2 \cdot 1 \cdot 1 \cdot \cos 60° = 2 - 1 = 1" /></p>
                  <p>所以 <MathTex tex="a = 1" />（这是一个等边三角形！）</p>
                </div>
              </div>
            </div>

            {/* 解题路线 */}
            <div className="bg-gray-50 rounded p-1.5 border border-gray-200">
              <p className="font-bold text-gray-800 mb-0.5">🗺️ 通用解题路线</p>
              <div className="space-y-0.5">
                <div className="flex items-start gap-1.5">
                  <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm font-bold shrink-0">1</span>
                  <p><strong>看到边角混合等式 →</strong> 边化角（<MathTex tex="a \to \sin A" />）或角化边，统一后求角</p>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm font-bold shrink-0">2</span>
                  <p><strong>看到 <MathTex tex="a^2, b^2, c^2" /> →</strong> 优先余弦定理展开</p>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm font-bold shrink-0">3</span>
                  <p><strong>求面积 →</strong> <MathTex tex="S = \frac{1}{2}ab\sin C" />，需要两边和夹角</p>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm font-bold shrink-0">4</span>
                  <p><strong>求最值 →</strong> 余弦定理列关系式 + 均值不等式</p>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm font-bold shrink-0">5</span>
                  <p><strong>两解问题 →</strong> SSA 情形注意检验 <MathTex tex="A+B < 180°" /></p>
                </div>
              </div>
              <p className="mt-0.5 text-red-700 font-bold">高考大题套路：第①问边化角/角化边求角 → 第②问余弦定理+面积公式求值。年年都考！</p>
            </div>

            <PracticeCard title="✏️ 综合实战训练" questions={comprehensivePractice} optionCols={4} printOptionCols={4} />

            {/* 全章速查表 */}
            <div className="bg-blue-50 rounded p-1.5 border border-blue-200">
              <p className="font-bold text-blue-800 mb-0.5">📋 5.3 全章公式速查表</p>
              <table className="w-full text-base border-collapse">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="border border-blue-200 p-1 text-left">公式</th>
                    <th className="border border-blue-200 p-1 text-left">内容</th>
                    <th className="border border-blue-200 p-1 text-left">适用</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-blue-200 p-1 font-bold text-red-600">正弦定理</td>
                    <td className="border border-blue-200 p-1"><MathTex tex="\frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C}=2R" /></td>
                    <td className="border border-blue-200 p-1">边角互化</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="border border-blue-200 p-1 font-bold text-blue-600">余弦定理</td>
                    <td className="border border-blue-200 p-1"><MathTex tex="a^2=b^2+c^2-2bc\cos A" /></td>
                    <td className="border border-blue-200 p-1">边与角的关系</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="border border-blue-200 p-1 font-bold text-blue-600">余弦求角</td>
                    <td className="border border-blue-200 p-1"><MathTex tex="\cos A=\frac{b^2+c^2-a^2}{2bc}" /></td>
                    <td className="border border-blue-200 p-1">三边求角</td>
                  </tr>
                  <tr>
                    <td className="border border-blue-200 p-1 font-bold text-green-600">面积公式</td>
                    <td className="border border-blue-200 p-1"><MathTex tex="S=\frac{1}{2}ab\sin C" /></td>
                    <td className="border border-blue-200 p-1">两边+夹角</td>
                  </tr>
                  <tr className="bg-orange-50">
                    <td className="border border-blue-200 p-1 font-bold text-orange-600">射影定理</td>
                    <td className="border border-blue-200 p-1"><MathTex tex="a=b\cos C+c\cos B" /></td>
                    <td className="border border-blue-200 p-1">补充公式</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ══════════════ 打印模式答案区 ══════════════ */}
      {isPrinting && printOptions.showAnswers && (
        <>
          <PageBreak label="答案与解析" />
          <section className="mb-1">
            <h2 className="text-xl font-bold text-gray-800 mb-2 border-b-2 border-gray-300 pb-1">📝 5.3 解三角形 — 答案与解析</h2>

            <h3 className="font-bold text-gray-700 mb-1">一、正弦定理训练</h3>
            <div className="space-y-1">
              {sineLawPractice.map((q, i) => (
                <div key={q.id} className="text-gray-700" style={{ breakInside: 'avoid' }}>
                  <p className="font-bold">第 {i + 1} 题　答案：<MathTex tex={typeof q.correctAnswer === 'string' ? q.correctAnswer : ''} /></p>
                  {q.explanationLatex && <div className="pl-2"><MathTex tex={q.explanationLatex} display /></div>}
                </div>
              ))}
            </div>

            <h3 className="font-bold text-gray-700 mb-1 mt-2">二、余弦定理训练</h3>
            <div className="space-y-1">
              {cosineLawPractice.map((q, i) => (
                <div key={q.id} className="text-gray-700" style={{ breakInside: 'avoid' }}>
                  <p className="font-bold">第 {i + 1} 题　答案：<MathTex tex={typeof q.correctAnswer === 'string' ? q.correctAnswer : ''} /></p>
                  {q.explanationLatex && <div className="pl-2"><MathTex tex={q.explanationLatex} display /></div>}
                </div>
              ))}
            </div>

            <h3 className="font-bold text-gray-700 mb-1 mt-2">三、面积公式训练</h3>
            <div className="space-y-1">
              {areaPractice.map((q, i) => (
                <div key={q.id} className="text-gray-700" style={{ breakInside: 'avoid' }}>
                  <p className="font-bold">第 {i + 1} 题　答案：<MathTex tex={typeof q.correctAnswer === 'string' ? q.correctAnswer : ''} /></p>
                  {q.explanationLatex && <div className="pl-2"><MathTex tex={q.explanationLatex} display /></div>}
                </div>
              ))}
            </div>

            <h3 className="font-bold text-gray-700 mb-1 mt-2">四、综合实战训练</h3>
            <div className="space-y-1">
              {comprehensivePractice.map((q, i) => (
                <div key={q.id} className="text-gray-700" style={{ breakInside: 'avoid' }}>
                  <p className="font-bold">第 {i + 1} 题　答案：<MathTex tex={typeof q.correctAnswer === 'string' ? q.correctAnswer : ''} /></p>
                  {q.explanationLatex && <div className="pl-2"><MathTex tex={q.explanationLatex} display /></div>}
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      </LessonLayout>
    </div>
  );
}
