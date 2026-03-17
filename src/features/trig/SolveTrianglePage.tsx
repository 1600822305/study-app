import { Math as MathTex, Collapsible, SpeakButton, PageHeader, LessonLayout, ExportButton, PageBreak } from '@/components/shared';
import { PracticeCard } from '@/components/shared/lesson/PracticeCard';
import { trigSolveNarrations } from './data/solve-narrations';
import { trigSolveProgressItems } from './data/solve-progress';
import { sineLawPractice, cosineLawPractice, areaPractice, comprehensivePractice } from './data/solve-questions';
import { useProgress, usePrintMode } from '@/hooks';
import { scrollToId } from '@/lib/scroll';
import { SolveTriGeneric, SolveTriEx1, SolveTriEx2, SolveTriSineLaw1, SolveTriSSA, SolveTriObtuse120, SolveTriAreaHeight, CosineLawDiagram, SolveTriCosineAngle, SolveTriTypeJudge } from './solve-diagrams';
import { SolveTriangleAnswers, solveTriExplanations } from './solve-answers';

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

            <PracticeCard title="✏️ 正弦定理即时训练" questions={sineLawPractice} optionCols={4} printOptionCols={4} explanations={solveTriExplanations} />
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

            <div className="flex gap-2 items-center">
              <div className="flex-1 bg-white rounded p-1.5 border border-blue-200">
                <p className="font-bold text-blue-800 mb-0.5">📝 例题2：已知三边求角</p>
                <p>在 <MathTex tex="\triangle ABC" /> 中，<MathTex tex="a=\sqrt{13}, b=3, c=1" />，求 <MathTex tex="\angle A" /></p>
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
              <div className="shrink-0 w-[230px]"><SolveTriCosineAngle /></div>
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

            <div className="flex gap-2 items-center">
              <div className="flex-1 bg-white rounded p-1.5 border border-blue-200">
                <p className="font-bold text-blue-800 mb-0.5">📝 例题3：判断三角形类型</p>
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
              <div className="shrink-0 w-[230px]"><SolveTriTypeJudge /></div>
            </div>

            {/* ───── 第六层：射影定理 + 对比 ───── */}
            <div className="bg-gray-50 rounded p-1.5 border border-gray-200">
              <p className="font-bold text-gray-800 mb-0.5">📎 补充：射影定理（选填偶尔出现，了解即可）</p>
              <p className="text-center"><MathTex tex="a = b\cos C + c\cos B" /></p>
              <p>这是余弦定理的推论。如果题目里出现 <MathTex tex="a\cos B + b\cos A" /> 这种"边×cos对方角"的组合，直接套这个公式就行。</p>
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
            <PracticeCard title="✏️ 余弦定理即时训练" questions={cosineLawPractice} optionCols={4} printOptionCols={4} explanations={solveTriExplanations} />

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
              <p className="font-bold text-red-800 mb-0.5">📌 先记一个主公式</p>
              <p className="text-center text-lg"><MathTex tex="S = \dfrac{1}{2}ab\sin C" /></p>
              <p className="mt-0.5"><strong>只先记这一条就够了。</strong></p>
              <p>意思就是：<strong>两边相乘，再乘这两边夹角的 <MathTex tex="\sin" />，最后除以 2。</strong></p>
              <p className="mt-0.5"><strong>口诀：</strong>面积 = <MathTex tex="\tfrac{1}{2}" /> × 两边 × 夹角的 <MathTex tex="\sin" /></p>
            </div>

            <div className="rounded p-1.5 border border-gray-300">
              <p className="font-bold text-gray-800 mb-0.5">🤔 为什么会有这个公式？</p>
              <div className="flex gap-2 items-start">
                <div className="flex-1 space-y-0.5">
                  <p>你原来学过的面积公式是 <MathTex tex="S = \frac{1}{2} \times \text{底} \times \text{高}" />。</p>
                  <p>现在把 <MathTex tex="a" /> 看成底，那么红色那条高就是 <MathTex tex="h" />。</p>
                  <p>而在这个图里，高不是直接给你的，但它可以写成 <MathTex tex="h=b\sin C" />。</p>
                  <p>所以：</p>
                  <p><MathTex tex="S = \frac{1}{2}\times a \times h = \frac{1}{2}\times a \times b\sin C = \frac{1}{2}ab\sin C" /></p>
                </div>
                <div className="shrink-0 w-[160px]"><SolveTriAreaHeight /></div>
              </div>
            </div>

            <div className="rounded p-1.5 border border-gray-300">
              <div className="flex gap-3 items-start">
                <div className="flex-1 space-y-0.5">
                  <p><strong>另外两种写法其实是同一个意思。</strong></p>
                  <p>如果你换一组边当“底”和“另一条边”，公式就会变成另外两种写法。</p>
                  <p>其实本质完全没变，只是“选的两条边”不同了。</p>
                  <p><strong>记住一句话：</strong>哪两条边相乘，就配它们的夹角。</p>
                </div>
                <div className="shrink-0 w-[280px]">
                  <table className="w-full text-base border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 p-1 text-center">两边</th>
                        <th className="border border-gray-300 p-1 text-center">夹角</th>
                        <th className="border border-gray-300 p-1 text-center">公式</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-1 text-center"><MathTex tex="ab" /></td>
                        <td className="border border-gray-300 p-1 text-center"><MathTex tex="C" /></td>
                        <td className="border border-gray-300 p-1 text-center"><MathTex tex="S=\dfrac{1}{2}ab\sin C" /></td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-1 text-center"><MathTex tex="bc" /></td>
                        <td className="border border-gray-300 p-1 text-center"><MathTex tex="A" /></td>
                        <td className="border border-gray-300 p-1 text-center"><MathTex tex="S=\dfrac{1}{2}bc\sin A" /></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-1 text-center"><MathTex tex="ac" /></td>
                        <td className="border border-gray-300 p-1 text-center"><MathTex tex="B" /></td>
                        <td className="border border-gray-300 p-1 text-center"><MathTex tex="S=\dfrac{1}{2}ac\sin B" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="rounded p-1.5 border border-gray-300">
              <p className="font-bold text-red-800 mb-0.5">⚠️ 最容易错的地方</p>
              <p>① 不是随便抓两条边就能往公式里塞，必须配上这两条边中间夹着的那个角</p>
              <p>② <MathTex tex="ab" /> 要配 <MathTex tex="C" />，因为 <MathTex tex="C" /> 是边 <MathTex tex="a,b" /> 的夹角</p>
              <p>③ 题目如果告诉你“两条边”，还告诉你“这两条边中间夹着的那个角”，那就直接用这个公式求面积</p>
            </div>

            {/* 例题1 */}
            <div className="bg-white rounded p-1.5 border border-blue-200">
              <p className="font-bold text-blue-800 mb-0.5">📝 例题1：直接代公式</p>
              <div className="flex gap-2 items-start">
                <div className="flex-1 space-y-0.5">
                  <p>在 <MathTex tex="\triangle ABC" /> 中，<MathTex tex="a=6, b=4, C=30^\circ" />，求面积 <MathTex tex="S" /></p>
                  <div className="border-l-4 border-red-300 pl-2">
                    <p><strong>先看条件：</strong>已知两边 <MathTex tex="a,b" />（蓝色），还知道它们的夹角 <MathTex tex="C" />（红色）。</p>
                  </div>
                  <div className="border-l-4 border-blue-300 pl-2">
                    <p><strong>所以直接用：</strong><MathTex tex="S=\frac{1}{2}ab\sin C" /></p>
                  </div>
                  <div className="border-l-4 border-green-300 pl-2">
                    <p><MathTex tex="S=\frac{1}{2}\times 6\times 4\times \sin 30^\circ" /></p>
                    <p><MathTex tex="=\frac{1}{2}\times 6\times 4\times \frac{1}{2}=6" /></p>
                  </div>
                </div>
                <div className="shrink-0 w-[150px]">
                  <SolveTriEx1 />
                </div>
              </div>
            </div>

            {/* 例题2 */}
            <div className="bg-white rounded p-1.5 border border-blue-200">
              <p className="font-bold text-blue-800 mb-0.5">📝 例题2：题目没给角怎么办？</p>
              <div className="flex gap-2 items-start">
                <div className="flex-1 space-y-0.5">
                  <p>在 <MathTex tex="\triangle ABC" /> 中，<MathTex tex="a=5, b=8, c=7" />，求面积 <MathTex tex="S" /></p>
                  <div className="border-l-4 border-red-300 pl-2">
                    <p><strong>面积公式需要"两边 + 夹角"。</strong>三边都知道，但角不知道，先求红色的角 <MathTex tex="C" />。</p>
                  </div>
                  <div className="border-l-4 border-blue-300 pl-2">
                    <p><strong>先用余弦定理求 <MathTex tex="C" />：</strong></p>
                    <p><MathTex tex="\cos C=\frac{a^2+b^2-c^2}{2ab}=\frac{25+64-49}{80}=\frac{1}{2}" /></p>
                    <p>所以 <MathTex tex="C=60^\circ" />。</p>
                  </div>
                  <div className="border-l-4 border-green-300 pl-2">
                    <p><strong>再代回面积公式：</strong></p>
                    <p><MathTex tex="S=\frac{1}{2}\times 5\times 8\times \sin 60^\circ=10\sqrt{3}" /></p>
                  </div>
                </div>
                <div className="shrink-0 w-[150px]">
                  <SolveTriEx2 />
                </div>
              </div>
            </div>

            <PageBreak label="面积公式带图大题" />

            <div className="bg-white rounded p-1.5 border border-purple-200">
              <p className="font-bold text-purple-800 mb-0.5">📝 带图大题：由面积反推角，再求第三边</p>
              <div className="flex gap-3 items-start">
                <div className="flex-1 space-y-0.5">
                  <p>如图，在 <MathTex tex="\triangle ABC" /> 中，<MathTex tex="b=6,\;c=8,\;S=12\sqrt{3}" />，且 <MathTex tex="A" /> 为锐角。</p>
                  <p>求：</p>
                  <p>（1）角 <MathTex tex="A" /></p>
                  <p>（2）边 <MathTex tex="a" /></p>

                  <div className="border-l-4 border-red-300 pl-2 mt-0.5">
                    <p><strong>第①问：先由面积公式反推出角 <MathTex tex="A" /></strong></p>
                    <p><MathTex tex="S=\frac{1}{2}bc\sin A" /></p>
                    <p><MathTex tex="12\sqrt{3}=\frac{1}{2}\times 6\times 8\times \sin A" /></p>
                    <p><MathTex tex="12\sqrt{3}=24\sin A" /></p>
                    <p><MathTex tex="\sin A=\frac{\sqrt{3}}{2}" /></p>
                    <p>因为题目告诉你 <MathTex tex="A" /> 是锐角，所以 <MathTex tex="A=60^\circ" />。</p>
                  </div>

                  <div className="border-l-4 border-blue-300 pl-2 mt-0.5">
                    <p><strong>第②问：再求第三边 <MathTex tex="a" /></strong></p>
                    <p><MathTex tex="a^2=b^2+c^2-2bc\cos A" /></p>
                    <p><MathTex tex="=6^2+8^2-2\times 6\times 8\times \cos 60^\circ" /></p>
                    <p><MathTex tex="=36+64-96\times \frac{1}{2}=52" /></p>
                    <p><MathTex tex="a=\sqrt{52}=2\sqrt{13}" /></p>
                  </div>

                  <div className="border-l-4 border-green-300 pl-2 mt-0.5">
                    <p><strong>这题覆盖的知识点：</strong>先用面积公式 <MathTex tex="S=\frac{1}{2}bc\sin A" /> 反推角，再把这个角交给余弦定理去求第三边。</p>
                  </div>
                </div>
                <div className="shrink-0 w-[170px]">
                  <SolveTriGeneric />
                </div>
              </div>
            </div>

            <div className="rounded p-1.5 border border-gray-300 bg-gray-50">
              <p className="font-bold text-gray-700 mb-0.5">📋 遇到"面积 + 两边"时的做题步骤</p>
              <p>① 代入面积公式 <MathTex tex="S=\frac{1}{2}bc\sin A" />，把 <MathTex tex="\sin A" /> 解出来</p>
              <p>② 根据锐角/钝角条件，确定角 <MathTex tex="A" /> 的值</p>
              <p>③ 代入余弦定理 <MathTex tex="a^2=b^2+c^2-2bc\cos A" />，求出 <MathTex tex="a" /></p>
            </div>

            <PracticeCard title="✏️ 面积公式即时训练" questions={areaPractice} optionCols={4} printOptionCols={4} explanations={solveTriExplanations} />
          </div>
        </Collapsible>
      </section>

      <PageBreak label="面积公式 → 定理选择" />

      {/* ══════════════ Section 4: 选正弦还是余弦 ══════════════ */}
      <section id="ts-choose" className="scroll-mt-4">
        <Collapsible title="四、选正弦还是余弦定理？" defaultOpen>
          <SpeakButton text={trigSolveNarrations.choose} />
          <div className="space-y-0.5 text-gray-700">

            <p>做解三角形的题，第一步永远是：<strong>看已知条件，决定用哪个公式。</strong>下面这张表帮你一秒做出判断。</p>

            {/* 选择表 */}
            <div className="bg-blue-50 rounded p-1.5 border border-blue-200">
              <p className="font-bold text-blue-800 mb-0.5">📋 一张表搞定选择</p>
              <table className="w-full text-base border-collapse">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="border border-blue-200 p-1 text-left">题目告诉你什么</th>
                    <th className="border border-blue-200 p-1 text-left">用什么</th>
                    <th className="border border-blue-200 p-1 text-left">能求出什么</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-blue-200 p-1">知道两个角 + 一条边</td>
                    <td className="border border-blue-200 p-1 text-red-600 font-bold">正弦定理</td>
                    <td className="border border-blue-200 p-1">另一条边</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-blue-200 p-1">知道两条边 + 其中一边的对角</td>
                    <td className="border border-blue-200 p-1 text-red-600 font-bold">正弦定理</td>
                    <td className="border border-blue-200 p-1">另一个角<span className="text-red-600">（可能两解⚠️）</span></td>
                  </tr>
                  <tr>
                    <td className="border border-blue-200 p-1">知道两条边 + 夹角</td>
                    <td className="border border-blue-200 p-1 text-blue-600 font-bold">余弦定理</td>
                    <td className="border border-blue-200 p-1">第三条边</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-blue-200 p-1">知道三条边</td>
                    <td className="border border-blue-200 p-1 text-blue-600 font-bold">余弦定理</td>
                    <td className="border border-blue-200 p-1">任意一个角</td>
                  </tr>
                  <tr>
                    <td className="border border-blue-200 p-1">知道两条边 + 面积</td>
                    <td className="border border-blue-200 p-1 text-green-600 font-bold">面积公式</td>
                    <td className="border border-blue-200 p-1">夹角</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-blue-200 p-1">等式里出现 <MathTex tex="a^2, b^2, c^2" /></td>
                    <td className="border border-blue-200 p-1 text-blue-600 font-bold">余弦定理</td>
                    <td className="border border-blue-200 p-1">展开化简</td>
                  </tr>
                  <tr>
                    <td className="border border-blue-200 p-1">等式里出现 <MathTex tex="\sin A, \sin B" /></td>
                    <td className="border border-blue-200 p-1 text-red-600 font-bold">正弦定理</td>
                    <td className="border border-blue-200 p-1">把边换成角（边化角）</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="font-bold text-red-700">一句话口诀：看到角 → 正弦定理，看到边的平方 → 余弦定理，看到面积 → 面积公式。</p>

            {/* 两解提醒 */}
            <div className="rounded p-1.5 border border-red-200 bg-red-50">
              <p className="font-bold text-red-800 mb-0.5">⚠️ 什么时候会出现"两解"？</p>
              <p>当你知道<strong>两条边和其中一边的对角</strong>（不是夹角）时，用正弦定理求出的角可能有两个值。</p>
              <p>比如 <MathTex tex="\sin B = \frac{\sqrt{3}}{2}" />，那 <MathTex tex="B" /> 可以是 <MathTex tex="60^\circ" /> 也可以是 <MathTex tex="120^\circ" />。</p>
              <p><strong>怎么判断？</strong>把两个值都试一下，如果三个角加起来超过 <MathTex tex="180^\circ" />，那个解就要扔掉。</p>
            </div>

            {/* 边角互化 */}
            <div className="bg-amber-50 rounded p-1.5 border border-amber-200">
              <p className="font-bold text-amber-800 mb-0.5">🔄 边角互化（高考第①问的核心技巧）</p>
              <p className="mb-0.5">高考经常给你一个"边和角混在一起"的等式，你需要把它统一成纯角或纯边，才能继续算。</p>
              <div className="space-y-0.5">
                <div className="border-l-4 border-red-300 pl-2">
                  <p><strong>边化角（最常用）：</strong>把边 <MathTex tex="a" /> 换成 <MathTex tex="2R\sin A" /></p>
                  <p className="text-gray-500">原理：正弦定理 <MathTex tex="\frac{a}{\sin A}=2R" /> → 所以 <MathTex tex="a=2R\sin A" /></p>
                  <p>替换之后等式里全是角的 <MathTex tex="\sin" />，再用三角恒等变换求角</p>
                </div>
                <div className="border-l-4 border-blue-300 pl-2">
                  <p><strong>角化边：</strong>把 <MathTex tex="\cos A" /> 换成 <MathTex tex="\frac{b^2+c^2-a^2}{2bc}" /></p>
                  <p className="text-gray-500">原理：余弦定理变形 → <MathTex tex="\cos A=\frac{b^2+c^2-a^2}{2bc}" /></p>
                  <p>替换之后等式里全是边，直接化简</p>
                </div>
                <div className="border-l-4 border-green-300 pl-2">
                  <p><strong>怎么判断用哪种？</strong>看等式里"边"和"角"是怎么混的：</p>
                  <p>· 等式里有 <MathTex tex="a" /> 和 <MathTex tex="\sin A" /> → <strong>边化角</strong>（把 <MathTex tex="a" /> 换掉）</p>
                  <p>· 等式里有 <MathTex tex="a^2" /> 和 <MathTex tex="\cos A" /> → <strong>角化边</strong>（把 <MathTex tex="\cos A" /> 换掉）</p>
                </div>
              </div>
            </div>

            {/* 判断例题 */}
            <div className="bg-white rounded p-1.5 border border-blue-200">
              <p className="font-bold text-blue-800 mb-0.5">📝 例题：拿到题先判断用哪个定理</p>
              <p>在 <MathTex tex="\triangle ABC" /> 中，<MathTex tex="a=2,\;b=3,\;B=60^\circ" />，求 <MathTex tex="A" /></p>
              <div className="space-y-0.5 mt-0.5">
                <div className="border-l-4 border-red-300 pl-2">
                  <p><strong>第①步 看条件：</strong>已知两条边 <MathTex tex="a,b" /> 和角 <MathTex tex="B" />。<MathTex tex="B" /> 是边 <MathTex tex="b" /> 的对角，不是 <MathTex tex="a,b" /> 的夹角 → 查表第2行 → <strong>用正弦定理</strong></p>
                </div>
                <div className="border-l-4 border-blue-300 pl-2">
                  <p><strong>第②步 代入：</strong><MathTex tex="\frac{a}{\sin A}=\frac{b}{\sin B}" /> → <MathTex tex="\frac{2}{\sin A}=\frac{3}{\sin 60^\circ}" /></p>
                  <p><MathTex tex="\sin A=\frac{2\sin 60^\circ}{3}=\frac{2 \times \frac{\sqrt{3}}{2}}{3}=\frac{\sqrt{3}}{3}" /></p>
                </div>
                <div className="border-l-4 border-green-300 pl-2">
                  <p><strong>第③步 确定角：</strong>因为 <MathTex tex="\sin A=\frac{\sqrt{3}}{3}" /> 只对应一个锐角值，所以 <MathTex tex="A=\arcsin\frac{\sqrt{3}}{3}" /></p>
                  <p>这里不存在两解，因为 <MathTex tex="a \lt b" />（2 &lt; 3），所以 <MathTex tex="A \lt B" />，<MathTex tex="A" /> 一定是锐角。</p>
                </div>
              </div>
            </div>

            {/* 多步组合提醒 */}
            <div className="rounded p-1.5 border border-gray-300 bg-gray-50">
              <p className="font-bold text-gray-700 mb-0.5">💡 高考大题经常是"两步走"</p>
              <p>① 先用一个定理求出中间量（比如求出某个角）</p>
              <p>② 再用另一个定理求最终答案（比如用余弦定理求边，或用面积公式求面积）</p>
              <p>所以不要指望一个公式搞定整道题，<strong>做完一步之后再重新看条件，决定下一步用什么。</strong></p>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak label="定理选择 → 综合实战" />

      {/* ══════════════ Section 5: 综合实战 ══════════════ */}
      <section id="ts-practice" className="scroll-mt-4">
        <Collapsible title="五、高考大题综合实战" defaultOpen>
          <SpeakButton text={trigSolveNarrations.practice} />
          <div className="space-y-0.5 text-gray-700">

            {/* 高考题型结构 */}
            <div className="bg-amber-50 rounded p-1.5 border border-amber-200">
              <p className="font-bold text-amber-800 mb-0.5">📋 高考解答题长什么样？（12分，固定两问）</p>
              <p><strong>第①问（6分）：</strong>给一个含边和角的等式 → 求某个角（答案通常是 <MathTex tex="60^\circ" /> 或 <MathTex tex="30^\circ" />）</p>
              <p><strong>第②问（6分）：</strong>再给你一些条件 → 求面积 / 求边长 / 求最值</p>
              <p className="text-red-600 font-bold">下面四道例题覆盖四种最常考的出题模式。</p>
            </div>

            {/* 综合例题1：余弦定理求角 + 面积 */}
            <div className="bg-white rounded p-1.5 border border-blue-200">
              <p className="font-bold text-blue-800 mb-0.5">📝 例题1：条件含 <MathTex tex="a^2, b^2, c^2" /> → 余弦定理求角 → 面积公式求面积</p>
              <p><MathTex tex="\triangle ABC" /> 中，<MathTex tex="b^2+c^2-a^2 = bc" /></p>
              <p>（1）求 <MathTex tex="A" />　（2）若 <MathTex tex="a=2,\;b+c=4" />，求面积 <MathTex tex="S" /></p>
              <div className="space-y-0.5 mt-0.5">
                <div className="border-l-4 border-red-300 pl-2">
                  <p><strong>（1）看到 <MathTex tex="b^2+c^2-a^2" /> → 想到余弦定理求角公式</strong></p>
                  <p><MathTex tex="\cos A = \frac{b^2+c^2-a^2}{2bc} = \frac{bc}{2bc} = \frac{1}{2}" /></p>
                  <p>所以 <MathTex tex="A = 60^\circ" /></p>
                </div>
                <div className="border-l-4 border-blue-300 pl-2">
                  <p><strong>（2）已知 <MathTex tex="A" />，需要 <MathTex tex="bc" /> 才能算面积。用余弦定理建方程：</strong></p>
                  <p><MathTex tex="a^2 = b^2+c^2-2bc\cos A" /> → <MathTex tex="4 = (b+c)^2-2bc-2bc\cdot\frac{1}{2} = 16-3bc" /></p>
                  <p>解得 <MathTex tex="bc = 4" /></p>
                </div>
                <div className="border-l-4 border-green-300 pl-2">
                  <p><MathTex tex="S = \frac{1}{2}bc\sin A = \frac{1}{2}\times 4\times\frac{\sqrt{3}}{2} = \sqrt{3}" /></p>
                </div>
              </div>
            </div>

            {/* 综合例题2：边化角求角 + 面积 */}
            <div className="bg-white rounded p-1.5 border border-blue-200">
              <p className="font-bold text-blue-800 mb-0.5">📝 例题2：条件含 <MathTex tex="\sin" /> → 边化角求角 → 面积公式求面积</p>
              <p><MathTex tex="\triangle ABC" /> 中，<MathTex tex="(2a-c)\cos B = b\cos C" /></p>
              <p>（1）求 <MathTex tex="B" />　（2）若 <MathTex tex="b=\sqrt{3},\;a+c=2\sqrt{3}" />，求面积 <MathTex tex="S" /></p>
              <div className="space-y-0.5 mt-0.5">
                <div className="border-l-4 border-red-300 pl-2">
                  <p><strong>（1）等式里 <MathTex tex="a, b, c" /> 和 <MathTex tex="\cos" /> 混在一起 → 边化角</strong></p>
                  <p>用正弦定理 <MathTex tex="a=2R\sin A,\;b=2R\sin B,\;c=2R\sin C" /> 替换：</p>
                  <p><MathTex tex="(2\sin A - \sin C)\cos B = \sin B\cos C" /></p>
                  <p>展开：<MathTex tex="2\sin A\cos B = \sin C\cos B + \sin B\cos C = \sin(B+C)" /></p>
                  <p>因为 <MathTex tex="A+B+C=\pi" />，所以 <MathTex tex="\sin(B+C)=\sin A" /></p>
                  <p><MathTex tex="2\sin A\cos B = \sin A" /> → <MathTex tex="2\cos B = 1" /> → <MathTex tex="\cos B = \frac{1}{2}" /> → <MathTex tex="B = 60^\circ" /></p>
                </div>
                <div className="border-l-4 border-blue-300 pl-2">
                  <p><strong>（2）和例题1 一样的套路：先用余弦定理求 <MathTex tex="ac" /></strong></p>
                  <p><MathTex tex="b^2 = a^2+c^2-2ac\cos B" /> → <MathTex tex="3 = (a+c)^2-2ac-2ac\cdot\frac{1}{2} = 12-3ac" /></p>
                  <p>解得 <MathTex tex="ac = 3" /></p>
                </div>
                <div className="border-l-4 border-green-300 pl-2">
                  <p><MathTex tex="S = \frac{1}{2}ac\sin B = \frac{1}{2}\times 3\times\frac{\sqrt{3}}{2} = \frac{3\sqrt{3}}{4}" /></p>
                </div>
              </div>
            </div>

            {/* 综合例题3：正弦定理两解 */}
            <div className="bg-white rounded p-1.5 border border-blue-200">
              <p className="font-bold text-blue-800 mb-0.5">📝 例题3：正弦定理求角 → 注意两解</p>
              <p><MathTex tex="\triangle ABC" /> 中，<MathTex tex="a=2,\;b=2\sqrt{3},\;A=30^\circ" /></p>
              <p>（1）求 <MathTex tex="B" />　（2）求 <MathTex tex="\triangle ABC" /> 的面积</p>
              <div className="space-y-0.5 mt-0.5">
                <div className="border-l-4 border-red-300 pl-2">
                  <p><strong>（1）已知两边 + 对角 → 正弦定理（注意两解！）</strong></p>
                  <p><MathTex tex="\frac{a}{\sin A}=\frac{b}{\sin B}" /> → <MathTex tex="\sin B = \frac{b\sin A}{a} = \frac{2\sqrt{3}\times\frac{1}{2}}{2} = \frac{\sqrt{3}}{2}" /></p>
                  <p>所以 <MathTex tex="B = 60^\circ" /> 或 <MathTex tex="B = 120^\circ" /></p>
                </div>
                <div className="border-l-4 border-blue-300 pl-2">
                  <p><strong>检验两解：</strong><MathTex tex="A+B" /> 是否 <MathTex tex="< 180^\circ" /></p>
                  <p><MathTex tex="B=60^\circ" />：<MathTex tex="30^\circ+60^\circ=90^\circ < 180^\circ" /> ✓</p>
                  <p><MathTex tex="B=120^\circ" />：<MathTex tex="30^\circ+120^\circ=150^\circ < 180^\circ" /> ✓</p>
                  <p>两个解都成立！</p>
                </div>
                <div className="border-l-4 border-green-300 pl-2">
                  <p><strong>（2）分两种情况求面积：</strong></p>
                  <p>当 <MathTex tex="B=60^\circ" /> 时：<MathTex tex="S=\frac{1}{2}ab\sin C=\frac{1}{2}\times 2\times 2\sqrt{3}\times\sin 90^\circ = 2\sqrt{3}" /></p>
                  <p>当 <MathTex tex="B=120^\circ" /> 时：<MathTex tex="S=\frac{1}{2}ab\sin C=\frac{1}{2}\times 2\times 2\sqrt{3}\times\sin 30^\circ = \sqrt{3}" /></p>
                </div>
              </div>
            </div>

            <PageBreak label="综合例题 → 面积反推" />

            {/* 综合例题4：面积反推 + 余弦定理 */}
            <div className="bg-white rounded p-1.5 border border-blue-200">
              <p className="font-bold text-blue-800 mb-0.5">📝 例题4：面积公式反推角 → 余弦定理求边</p>
              <p><MathTex tex="\triangle ABC" /> 中，<MathTex tex="A=\frac{\pi}{3},\;b=1" />，面积 <MathTex tex="S=\frac{\sqrt{3}}{4}" />，求 <MathTex tex="a" /></p>
              <div className="space-y-0.5 mt-0.5">
                <div className="border-l-4 border-red-300 pl-2">
                  <p><strong>第①步 面积公式求 <MathTex tex="c" />：</strong></p>
                  <p><MathTex tex="S = \frac{1}{2}bc\sin A" /> → <MathTex tex="\frac{\sqrt{3}}{4} = \frac{1}{2}\times 1\times c\times\frac{\sqrt{3}}{2}" /></p>
                  <p>解得 <MathTex tex="c = 1" /></p>
                </div>
                <div className="border-l-4 border-green-300 pl-2">
                  <p><strong>第②步 余弦定理求 <MathTex tex="a" />：</strong></p>
                  <p><MathTex tex="a^2 = b^2+c^2-2bc\cos A = 1+1-2\times 1\times 1\times\frac{1}{2} = 1" /></p>
                  <p>所以 <MathTex tex="a = 1" />（这其实是等边三角形！）</p>
                </div>
              </div>
            </div>

            {/* 解题路线总结 */}
            <div className="bg-gray-50 rounded p-1.5 border border-gray-200">
              <p className="font-bold text-gray-800 mb-0.5">🗺️ 遇到大题怎么想？</p>
              <p>① 条件里有 <MathTex tex="a^2, b^2, c^2" /> → <strong>余弦定理</strong>求角</p>
              <p>② 条件里有 <MathTex tex="a, \sin A" /> 混在一起 → <strong>边化角</strong>（正弦定理替换）求角</p>
              <p>③ 条件里有面积 + 两边 → <strong>面积公式</strong>反推角或边。第②问通常用<strong>余弦定理建方程 + 面积公式</strong>出结果</p>
              <p className="text-red-700 font-bold">高考套路：第①问求角 → 第②问求面积/边长。年年都考！</p>
            </div>

            <PracticeCard title="✏️ 综合实战训练" questions={comprehensivePractice} optionCols={4} printOptionCols={4} explanations={solveTriExplanations} />

            {/* 全章速查表 */}
            <div className="bg-blue-50 rounded p-2 border border-blue-200">
              <p className="font-bold text-blue-800 text-lg mb-1">📋 5.3 全章公式速查表</p>
              <table className="w-full text-lg border-collapse">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="border border-blue-200 p-1.5 text-left">公式</th>
                    <th className="border border-blue-200 p-1.5 text-left">内容</th>
                    <th className="border border-blue-200 p-1.5 text-left">什么时候用</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-blue-200 p-1.5 font-bold text-red-600">正弦定理</td>
                    <td className="border border-blue-200 p-1.5"><MathTex tex="\dfrac{a}{\sin A}=\dfrac{b}{\sin B}=\dfrac{c}{\sin C}" /></td>
                    <td className="border border-blue-200 p-1.5">边化角 / 两角求边</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-blue-200 p-1.5 font-bold text-blue-600">余弦定理</td>
                    <td className="border border-blue-200 p-1.5"><MathTex tex="a^2=b^2+c^2-2bc\cos A" /></td>
                    <td className="border border-blue-200 p-1.5">两边夹角求边 / 三边求角</td>
                  </tr>
                  <tr>
                    <td className="border border-blue-200 p-1.5 font-bold text-blue-600">余弦求角</td>
                    <td className="border border-blue-200 p-1.5"><MathTex tex="\cos A=\dfrac{b^2+c^2-a^2}{2bc}" /></td>
                    <td className="border border-blue-200 p-1.5">含 <MathTex tex="a^2,b^2,c^2" /> 的等式</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-blue-200 p-1.5 font-bold text-green-600">面积公式</td>
                    <td className="border border-blue-200 p-1.5"><MathTex tex="S=\dfrac{1}{2}ab\sin C" /></td>
                    <td className="border border-blue-200 p-1.5">两边 + 夹角 / 面积反推角</td>
                  </tr>
                  <tr>
                    <td className="border border-blue-200 p-1.5 font-bold text-red-600">边化角</td>
                    <td className="border border-blue-200 p-1.5"><MathTex tex="a = 2R\sin A" /></td>
                    <td className="border border-blue-200 p-1.5">边角混合等式 → 统一成角</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-blue-200 p-1.5 font-bold text-red-600">外接圆半径</td>
                    <td className="border border-blue-200 p-1.5"><MathTex tex="R = \dfrac{a}{2\sin A}" /></td>
                    <td className="border border-blue-200 p-1.5">求外接圆半径</td>
                  </tr>
                  <tr>
                    <td className="border border-blue-200 p-1.5 font-bold text-amber-600">判断类型</td>
                    <td className="border border-blue-200 p-1.5"><MathTex tex="a^2+b^2 \gtrless c^2" /></td>
                    <td className="border border-blue-200 p-1.5">锐角 / 直角 / 钝角三角形</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-blue-200 p-1.5 font-bold text-gray-600">射影定理</td>
                    <td className="border border-blue-200 p-1.5"><MathTex tex="a = b\cos C + c\cos B" /></td>
                    <td className="border border-blue-200 p-1.5">见到"边×cos对方角"直接用</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ══════════════ 打印模式答案区 ══════════════ */}
      {isPrinting && printOptions.showAnswers && <SolveTriangleAnswers />}

      </LessonLayout>
    </div>
  );
}
