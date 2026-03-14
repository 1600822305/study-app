import { Math as MathTex, Collapsible, SpeakButton, PageHeader, LessonLayout, ExportButton } from '@/components/shared';
import { trigSolveNarrations } from './data/solve-narrations';
import { trigSolveProgressItems } from './data/solve-progress';
import { useProgress } from '@/hooks';
import { scrollToId } from '@/lib/scroll';

export function SolveTrianglePage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('trig-solve', trigSolveProgressItems);

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

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="5.3 解三角形" />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-3 mb-0">
        <p className="font-bold text-gray-800 mb-2">📋 知识地图</p>
        <div className="text-gray-600 space-y-1">
          <button onClick={() => scrollToId('ts-intro')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">零、什么是"解三角形"</button>
          <button onClick={() => scrollToId('ts-sine')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">一、正弦定理</button>
          <button onClick={() => scrollToId('ts-cosine')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">二、余弦定理</button>
          <button onClick={() => scrollToId('ts-area')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">三、面积公式</button>
          <button onClick={() => scrollToId('ts-choose')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">四、选正弦还是余弦定理？</button>
          <button onClick={() => scrollToId('ts-practice')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">五、高考大题综合实战</button>
        </div>
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 0: 什么是解三角形 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="ts-intro" className="mb-3 scroll-mt-4">
        <Collapsible title={'零、什么是"解三角形"'} defaultOpen storageKey="trig-solve:intro">
          <div className="space-y-2 text-gray-700">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <p className="font-bold text-amber-800 mb-1">💡 先搞懂概念</p>
              <p>三角形有 <strong>6 个元素</strong>：3 条边（a, b, c）和 3 个角（A, B, C）。</p>
              <p className="mt-1"><strong>约定：</strong>大写字母表示角，小写字母表示<strong>对边</strong>。比如角 A 的对边是 a，角 B 的对边是 b。</p>
              <p className="mt-1"><strong>"解三角形"</strong>就是：已知其中几个元素，求出剩下的元素。</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="font-bold text-blue-800 mb-1">📌 基础知识回顾</p>
              <div className="space-y-1">
                <p><strong>内角和：</strong><MathTex tex="A + B + C = \pi\;(180°)" /> → 知道两个角就能求第三个</p>
                <p><strong>大边对大角：</strong>边越长，对面的角越大</p>
                <p><strong>三角不等式：</strong>任意两边之和大于第三边</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
              <p className="font-bold text-gray-800 mb-1">🔧 解三角形的三大工具</p>
              <div className="grid grid-cols-3 gap-2 mt-1">
                <div className="bg-red-50 rounded-lg p-2 border border-red-200 text-center">
                  <p className="font-bold text-red-700">正弦定理</p>
                  <p className="text-sm text-gray-600 mt-1">边角对应关系</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-2 border border-blue-200 text-center">
                  <p className="font-bold text-blue-700">余弦定理</p>
                  <p className="text-sm text-gray-600 mt-1">三边与角的关系</p>
                </div>
                <div className="bg-green-50 rounded-lg p-2 border border-green-200 text-center">
                  <p className="font-bold text-green-700">面积公式</p>
                  <p className="text-sm text-gray-600 mt-1">两边夹角求面积</p>
                </div>
              </div>
              <p className="mt-2 text-gray-600">就这三个工具，高考解三角形的题全靠它们。学完这节你就齐活了。</p>
            </div>
          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 1: 正弦定理 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="ts-sine" className="mb-3 scroll-mt-4">
        <Collapsible title="一、正弦定理" defaultOpen storageKey="trig-solve:sine" headerExtra={<SpeakButton text={trigSolveNarrations.sineLaw} />}>
          <p className="text-blue-600 mb-1">🎯 学完你能：用正弦定理在边和角之间互相转化。</p>
          <p className="text-gray-600 mb-2 text-sm">为什么要学？高考大题第一问经常需要"边化角"或"角化边"，正弦定理是核心工具。</p>
          <div className="space-y-2 text-gray-700">

            {/* 公式 */}
            <div className="bg-red-50 border-2 border-red-300 rounded-xl p-3">
              <p className="font-bold text-lg text-red-700 mb-2">🔑 正弦定理</p>
              <div className="bg-white rounded-lg p-3 border border-red-200 mb-2">
                <p className="text-xl text-center"><MathTex tex="\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R" /></p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-2 border border-yellow-200">
                <p className="font-bold text-yellow-800 mb-1">🧠 翻译成人话</p>
                <p>每条<strong>边</strong>除以它<strong>对角的 sin 值</strong>，得到的结果都<strong>一样</strong>。</p>
                <p className="mt-1">这个公共的值等于 <strong>2R</strong>（R 是三角形外接圆的半径）。</p>
                <p className="mt-1 text-gray-600">高考一般不考 2R，但"三个比值相等"这一点必须记住。</p>
              </div>
            </div>

            {/* 正弦定理的变形 */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
              <p className="font-bold text-lg text-blue-800 mb-2">📋 正弦定理的两种用法</p>
              <div className="space-y-2">
                <div className="bg-white rounded-lg p-2 border border-blue-100">
                  <p className="font-bold text-blue-700">用法① 已知角求边（角化边）</p>
                  <p className="text-lg mt-1"><MathTex tex="a = \frac{b \cdot \sin A}{\sin B}" /></p>
                  <p className="text-gray-600 mt-1">知道 b、角 A、角 B → 求 a</p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-blue-100">
                  <p className="font-bold text-blue-700">用法② 已知边求角（边化角）</p>
                  <p className="text-lg mt-1"><MathTex tex="\sin A = \frac{a \cdot \sin B}{b}" /></p>
                  <p className="text-gray-600 mt-1">知道 a、b、角 B → 求 sinA → 求角 A</p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-blue-100">
                  <p className="font-bold text-red-700">⭐ 用法③ 边角互化（高考最常用！）</p>
                  <p className="mt-1">由正弦定理可得 <MathTex tex="a = 2R\sin A,\; b = 2R\sin B,\; c = 2R\sin C" /></p>
                  <p className="mt-1">所以在等式中可以<strong>直接把 a 替换成 sinA，b 替换成 sinB</strong>（比例相同，2R 抵消）</p>
                  <p className="mt-1 text-red-600 font-bold">高考大题第一问给的条件常常是边和角混在一起的等式，用这个方法全部统一成角，就能化简求解。</p>
                </div>
              </div>
            </div>

            {/* 实战例题 */}
            <div className="bg-white rounded-lg p-2 border border-blue-200">
              <p className="font-bold text-blue-800 mb-1">📝 实战例题 — 正弦定理</p>

              <p className="font-bold text-gray-700 mb-0.5">例 1：在 △ABC 中，A = 30°，B = 45°，a = 2，求 b</p>
              <div className="space-y-1 mb-2">
                <div className="border-l-4 border-red-300 pl-2">
                  <p><strong>用正弦定理：</strong><MathTex tex="\frac{a}{\sin A} = \frac{b}{\sin B}" /></p>
                </div>
                <div className="border-l-4 border-blue-300 pl-2">
                  <p className="text-lg"><MathTex tex="\frac{2}{\sin 30°} = \frac{b}{\sin 45°}" /></p>
                </div>
                <div className="border-l-4 border-green-300 pl-2">
                  <p className="text-lg"><MathTex tex="b = \frac{2 \cdot \sin 45°}{\sin 30°} = \frac{2 \cdot \frac{\sqrt{2}}{2}}{\frac{1}{2}} = 2\sqrt{2}" /></p>
                </div>
              </div>

              <p className="font-bold text-gray-700 mb-0.5">例 2（边化角）：在 △ABC 中，已知 <MathTex tex="a\cos B = b\cos A" />，判断三角形形状</p>
              <div className="space-y-1 mb-2">
                <div className="border-l-4 border-red-300 pl-2">
                  <p><strong>边化角：</strong>把 a → sinA，b → sinB</p>
                  <p className="text-lg"><MathTex tex="\sin A \cos B = \sin B \cos A" /></p>
                </div>
                <div className="border-l-4 border-blue-300 pl-2">
                  <p><strong>整理：</strong></p>
                  <p className="text-lg"><MathTex tex="\sin A \cos B - \cos A \sin B = 0" /></p>
                  <p className="text-lg"><MathTex tex="\sin(A - B) = 0" /></p>
                </div>
                <div className="border-l-4 border-green-300 pl-2">
                  <p>∴ A - B = 0，即 <strong>A = B</strong> → 等腰三角形（a = b）</p>
                </div>
              </div>

              <p className="font-bold text-gray-700 mb-0.5">例 3：在 △ABC 中，A = 60°，b = 4，<MathTex tex="c = 2\sqrt{3}" />，求 a</p>
              <div className="bg-gray-50 rounded p-1.5 mb-1">
                <p><strong>思路：</strong>已知两边和夹角，用<strong>余弦定理</strong>更方便（但用正弦定理也行，需先求另一个角）</p>
                <p>这道题放在这里是为了提醒你：<strong>并不是所有题都适合用正弦定理</strong>，下一节学的余弦定理有时更直接。</p>
              </div>
            </div>

            {/* 易错点 */}
            <div className="bg-red-50 rounded-lg p-2 border border-red-200">
              <p className="font-bold text-red-700 mb-1">⚠️ 易错点 — "已知两边和一边的对角"有可能两解！</p>
              <div className="space-y-1">
                <p>比如：已知 a、b、A（其中 a 是 A 的对边），求 B。</p>
                <p>用 <MathTex tex="\sin B = \frac{b\sin A}{a}" /> 求出 sinB 后：</p>
                <p>• 如果 sinB = 1 → B = 90°（唯一解）</p>
                <p>• 如果 0 {'<'} sinB {'<'} 1 → B 可能是<strong>锐角</strong>或<strong>钝角</strong>（两个解！）</p>
                <p className="font-bold text-red-700 mt-1">必须检验：两个 B 是否都能让 A + B {'<'} 180°。不满足的解要丢弃。</p>
                <p className="mt-1">这叫做<strong>"三角形的模糊情形"（SSA）</strong>，高考爱在这里设陷阱。</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 2: 余弦定理 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="ts-cosine" className="mb-3 scroll-mt-4">
        <Collapsible title="二、余弦定理" defaultOpen storageKey="trig-solve:cosine" headerExtra={<SpeakButton text={trigSolveNarrations.cosineLaw} />}>
          <p className="text-blue-600 mb-1">🎯 学完你能：用余弦定理求第三边、求角度。</p>
          <p className="text-gray-600 mb-2 text-sm">为什么要学？遇到"已知三边"或"已知两边及夹角"的问题，余弦定理是唯一选择。</p>
          <div className="space-y-2 text-gray-700">

            {/* 引入 */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <p className="font-bold text-amber-800 mb-1">💡 从勾股定理说起</p>
              <p>初中学过：直角三角形中 <MathTex tex="a^2 + b^2 = c^2" />（其中 C = 90°）</p>
              <p className="mt-1">但如果 C <strong>不是</strong> 90° 呢？需要一个修正项。</p>
              <p className="mt-1">余弦定理就是<strong>勾股定理的推广版</strong>：</p>
              <p className="text-lg mt-1"><MathTex tex="c^2 = a^2 + b^2 - 2ab\cos C" /></p>
              <p className="mt-1 text-gray-600">当 C = 90° 时，cos90° = 0，修正项消失，就退化成勾股定理。</p>
            </div>

            {/* 公式 */}
            <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-3">
              <p className="font-bold text-lg text-blue-700 mb-2">🔑 余弦定理（三种形式）</p>
              <div className="bg-white rounded-lg p-3 border border-blue-200 space-y-2">
                <p className="text-xl text-center"><MathTex tex="a^2 = b^2 + c^2 - 2bc\cos A" /></p>
                <p className="text-xl text-center"><MathTex tex="b^2 = a^2 + c^2 - 2ac\cos B" /></p>
                <p className="text-xl text-center"><MathTex tex="c^2 = a^2 + b^2 - 2ab\cos C" /></p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-2 border border-yellow-200 mt-2">
                <p className="font-bold text-yellow-800 mb-1">🧠 记忆技巧</p>
                <p>三个公式结构完全一样，只是字母轮换。</p>
                <p className="mt-1">规律：<strong>左边是某边的平方</strong>，右边 = 另两边的平方和 - 2 × 另两边 × cos（左边那个角）</p>
                <p className="mt-1">记住一个就够了，其他两个换字母。</p>
              </div>
            </div>

            {/* 变形：求角 */}
            <div className="bg-green-50 border border-green-300 rounded-xl p-3">
              <p className="font-bold text-lg text-green-700 mb-2">📋 余弦定理的变形 — 求角公式</p>
              <div className="bg-white rounded-lg p-3 border border-green-200">
                <p className="text-xl text-center"><MathTex tex="\cos A = \frac{b^2 + c^2 - a^2}{2bc}" /></p>
              </div>
              <p className="mt-2 text-gray-600">已知三边，直接套这个公式就能求出任意一个角的 cos 值 → 再求角。</p>
              <p className="mt-1"><strong>特别有用：</strong>判断角是锐角还是钝角 → cosA {'>'} 0 则锐角，cosA {'<'} 0 则钝角。</p>
            </div>

            {/* 实战例题 */}
            <div className="bg-white rounded-lg p-2 border border-blue-200">
              <p className="font-bold text-blue-800 mb-1">📝 实战例题 — 余弦定理</p>

              <p className="font-bold text-gray-700 mb-0.5">例 1：在 △ABC 中，b = 3，c = 5，A = 120°，求 a</p>
              <div className="space-y-1 mb-2">
                <div className="border-l-4 border-blue-300 pl-2">
                  <p><strong>用余弦定理：</strong></p>
                  <p className="text-lg"><MathTex tex="a^2 = b^2 + c^2 - 2bc\cos A = 9 + 25 - 2 \cdot 3 \cdot 5 \cdot \cos 120°" /></p>
                </div>
                <div className="border-l-4 border-green-300 pl-2">
                  <p className="text-lg"><MathTex tex="= 34 - 30 \cdot (-\frac{1}{2}) = 34 + 15 = 49" /></p>
                  <p className="text-lg"><MathTex tex="a = 7" /></p>
                </div>
                <p className="text-gray-600 mt-1">注意：cos120° = <strong>-½</strong>，是负的！所以减号变加号，a² 变大了。钝角对边最长，合理。</p>
              </div>

              <p className="font-bold text-gray-700 mb-0.5">例 2：已知 △ABC 中 a = 7，b = 5，c = 3，求最大角 A</p>
              <div className="space-y-1 mb-2">
                <div className="border-l-4 border-blue-300 pl-2">
                  <p><strong>用求角公式：</strong></p>
                  <p className="text-lg"><MathTex tex="\cos A = \frac{b^2 + c^2 - a^2}{2bc} = \frac{25 + 9 - 49}{2 \cdot 5 \cdot 3} = \frac{-15}{30} = -\frac{1}{2}" /></p>
                </div>
                <div className="border-l-4 border-green-300 pl-2">
                  <p>cosA = -½ → <strong>A = 120°</strong>（钝角）</p>
                </div>
              </div>

              <p className="font-bold text-gray-700 mb-0.5">例 3：在 △ABC 中，A = 60°，b = 4，<MathTex tex="c = 2\sqrt{3}" />，求 a</p>
              <div className="space-y-1">
                <div className="border-l-4 border-blue-300 pl-2">
                  <p className="text-lg"><MathTex tex="a^2 = 16 + 12 - 2 \cdot 4 \cdot 2\sqrt{3} \cdot \cos 60°" /></p>
                  <p className="text-lg"><MathTex tex="= 28 - 16\sqrt{3} \cdot \frac{1}{2} = 28 - 8\sqrt{3}" /></p>
                </div>
                <div className="border-l-4 border-green-300 pl-2">
                  <p className="text-lg"><MathTex tex="a = \sqrt{28 - 8\sqrt{3}} = 2\sqrt{7 - 2\sqrt{3}}" /></p>
                </div>
                <p className="text-gray-600 mt-1">这就是上一节"例 3"说的那道题——已知两边夹角，余弦定理直接求，比正弦定理方便多了。</p>
              </div>
            </div>

            {/* 易错点 */}
            <div className="bg-red-50 rounded-lg p-2 border border-red-200">
              <p className="font-bold text-red-700 mb-1">⚠️ 易错点</p>
              <div className="space-y-1">
                <p>1. <strong>cos 的符号！</strong>钝角的 cos 是负数。cos120° = -½，cos150° = -√3/2。减号乘负号变加号，很容易算错。</p>
                <p>2. <strong>公式中的角必须是两边的夹角。</strong><MathTex tex="c^2 = a^2+b^2-2ab\cos C" /> 中，C 是 a 和 b 的夹角，不是 c 的对角（其实是一回事）。</p>
                <p>3. <strong>已知两边和一边对角</strong>也可以用余弦定理！把未知边设为 x，列方程 <MathTex tex="a^2 = b^2 + x^2 - 2bx\cos A" />，这是关于 x 的一元二次方程，有可能两解。</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 3: 面积公式 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="ts-area" className="mb-3 scroll-mt-4">
        <Collapsible title="三、面积公式" defaultOpen storageKey="trig-solve:area" headerExtra={<SpeakButton text={trigSolveNarrations.area} />}>
          <p className="text-blue-600 mb-1">🎯 学完你能：用两边及夹角快速求三角形面积。</p>
          <p className="text-gray-600 mb-2 text-sm">为什么要学？高考大题第二问经常要求面积，这个公式是唯一工具。</p>
          <div className="space-y-2 text-gray-700">

            {/* 公式 */}
            <div className="bg-green-50 border-2 border-green-300 rounded-xl p-3">
              <p className="font-bold text-lg text-green-700 mb-2">🔑 三角形面积公式</p>
              <div className="bg-white rounded-lg p-3 border border-green-200 space-y-2">
                <p className="text-xl text-center"><MathTex tex="S = \frac{1}{2}ab\sin C" /></p>
                <p className="text-xl text-center"><MathTex tex="S = \frac{1}{2}ac\sin B" /></p>
                <p className="text-xl text-center"><MathTex tex="S = \frac{1}{2}bc\sin A" /></p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-2 border border-yellow-200 mt-2">
                <p className="font-bold text-yellow-800 mb-1">🧠 翻译成人话</p>
                <p>面积 = <strong>½ × 两边之积 × 夹角的 sin</strong></p>
                <p className="mt-1">这三个公式就是换不同的"两边+夹角"组合，结果一样。</p>
                <p className="mt-1 text-gray-600">和初中的 S = ½ × 底 × 高 本质一样：高 = 另一边 × sinC（高就是用 sin 算出来的）。</p>
              </div>
            </div>

            {/* 实战例题 */}
            <div className="bg-white rounded-lg p-2 border border-blue-200">
              <p className="font-bold text-blue-800 mb-1">📝 实战例题 — 面积公式</p>

              <p className="font-bold text-gray-700 mb-0.5">例 1：在 △ABC 中，a = 6，b = 4，C = 30°，求面积 S</p>
              <div className="space-y-1 mb-2">
                <div className="border-l-4 border-green-300 pl-2">
                  <p className="text-lg"><MathTex tex="S = \frac{1}{2} \cdot 6 \cdot 4 \cdot \sin 30° = \frac{1}{2} \cdot 6 \cdot 4 \cdot \frac{1}{2} = 6" /></p>
                </div>
              </div>

              <p className="font-bold text-gray-700 mb-0.5">例 2：在 △ABC 中，已知 <MathTex tex="\sin A = \frac{4}{5}" />，b = 3，c = 5，求面积 S</p>
              <div className="space-y-1 mb-2">
                <div className="border-l-4 border-green-300 pl-2">
                  <p className="text-lg"><MathTex tex="S = \frac{1}{2}bc\sin A = \frac{1}{2} \cdot 3 \cdot 5 \cdot \frac{4}{5} = 6" /></p>
                </div>
                <p className="text-gray-600 mt-1">注意：给的是 sinA 不是角 A，但面积公式里正好需要 sinA，直接用！</p>
              </div>

              <p className="font-bold text-gray-700 mb-0.5">例 3：在 △ABC 中，a = 5，b = 8，c = 7，求面积 S</p>
              <div className="space-y-1">
                <div className="border-l-4 border-red-300 pl-2">
                  <p><strong>思路：</strong>已知三边，没有角 → 先用余弦定理求一个角的 cos → 再求 sin → 代入面积公式</p>
                </div>
                <div className="border-l-4 border-blue-300 pl-2">
                  <p><strong>求 cosC：</strong></p>
                  <p className="text-lg"><MathTex tex="\cos C = \frac{a^2+b^2-c^2}{2ab} = \frac{25+64-49}{2 \cdot 5 \cdot 8} = \frac{40}{80} = \frac{1}{2}" /></p>
                </div>
                <div className="border-l-4 border-green-300 pl-2">
                  <p>cosC = ½ → C = 60° → sinC = √3/2</p>
                  <p className="text-lg"><MathTex tex="S = \frac{1}{2} \cdot 5 \cdot 8 \cdot \frac{\sqrt{3}}{2} = 10\sqrt{3}" /></p>
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 4: 选正弦还是余弦定理 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="ts-choose" className="mb-3 scroll-mt-4">
        <Collapsible title="四、选正弦还是余弦定理？" defaultOpen storageKey="trig-solve:choose" headerExtra={<SpeakButton text={trigSolveNarrations.choose} />}>
          <p className="text-blue-600 mb-1">🎯 学完你能：看到题目条件立刻判断该用哪个定理。</p>
          <div className="space-y-2 text-gray-700">

            {/* 选择决策表 */}
            <div className="bg-gray-50 rounded-lg p-2">
              <p className="font-bold text-gray-800 mb-1">📊 定理选择决策表（核心！）</p>
              <table className="w-full text-base border-collapse">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 p-1.5 text-left">已知条件</th>
                    <th className="border border-gray-300 p-1.5 text-left">选用定理</th>
                    <th className="border border-gray-300 p-1.5 text-left">说明</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-1.5">两角 + 一边</td>
                    <td className="border border-gray-300 p-1.5 font-bold text-red-600">正弦定理</td>
                    <td className="border border-gray-300 p-1.5">第三角用内角和求，再用正弦定理求边</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="border border-gray-300 p-1.5">两边 + 对角</td>
                    <td className="border border-gray-300 p-1.5 font-bold text-red-600">正弦定理</td>
                    <td className="border border-gray-300 p-1.5">注意可能两解（SSA模糊情形）</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-1.5">两边 + 夹角</td>
                    <td className="border border-gray-300 p-1.5 font-bold text-blue-600">余弦定理</td>
                    <td className="border border-gray-300 p-1.5">直接求第三边</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="border border-gray-300 p-1.5">三边</td>
                    <td className="border border-gray-300 p-1.5 font-bold text-blue-600">余弦定理</td>
                    <td className="border border-gray-300 p-1.5">用变形公式求角</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-1.5">边角混合等式</td>
                    <td className="border border-gray-300 p-1.5 font-bold text-purple-600">先边化角</td>
                    <td className="border border-gray-300 p-1.5">正弦定理 a→sinA，再三角化简</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 一句话总结 */}
            <div className="bg-red-50 border-2 border-red-300 rounded-xl p-3">
              <p className="font-bold text-lg text-red-700 mb-1">⚡ 一句话总结</p>
              <p className="text-lg">有<strong>"边和对角"的对应关系</strong> → <strong className="text-red-600">正弦定理</strong></p>
              <p className="text-lg">有<strong>"三边"或"两边+夹角"</strong> → <strong className="text-blue-600">余弦定理</strong></p>
              <p className="text-lg">有<strong>边角混合的等式</strong> → 先用正弦定理<strong className="text-purple-600">边化角</strong>，再化简</p>
            </div>

            {/* 边角互化详解 */}
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-3">
              <p className="font-bold text-lg text-purple-800 mb-2">🔑 边角互化 — 高考大题第一问的核心技巧</p>
              <div className="space-y-2">
                <div className="bg-white rounded-lg p-2 border border-purple-100">
                  <p className="font-bold text-purple-700">方法① 边化角（最常用）</p>
                  <p>看到等式中有 a、b、c，全部用正弦定理替换成 sinA、sinB、sinC</p>
                  <p className="mt-1">然后用 5.2 学的三角恒等变换（和差角公式等）化简</p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-purple-100">
                  <p className="font-bold text-purple-700">方法② 角化边</p>
                  <p>看到等式中有 sinA、sinB，用正弦定理替换成 a、b</p>
                  <p className="mt-1">然后配合余弦定理化简</p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-purple-100">
                  <p className="font-bold text-purple-700">方法③ 余弦定理直接展开</p>
                  <p>如果等式中出现 a²、b²、c²，优先考虑余弦定理展开</p>
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 5: 高考大题综合实战 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="ts-practice" className="mb-3 scroll-mt-4">
        <Collapsible title="五、高考大题综合实战" defaultOpen storageKey="trig-solve:practice" headerExtra={<SpeakButton text={trigSolveNarrations.practice} />}>
          <p className="text-blue-600 mb-1">🎯 高考解三角形大题的标准套路和完整解题过程。</p>
          <div className="space-y-2 text-gray-700">

            {/* 大题套路 */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <p className="font-bold text-amber-800 mb-1">💡 高考解三角形大题的标准结构</p>
              <div className="space-y-1 mt-1">
                <div className="flex items-start gap-2">
                  <span className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">1</span>
                  <p><strong>第一问（求角）：</strong>给一个边角混合等式 → 边化角/角化边 → 三角恒等变换 → 求出某个角</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">2</span>
                  <p><strong>第二问（求值）：</strong>再给一些条件 → 用正余弦定理求边/面积/周长最值</p>
                </div>
              </div>
            </div>

            {/* 例题 1 */}
            <div className="bg-white rounded-lg p-2 border border-blue-200">
              <p className="font-bold text-blue-800 mb-1">📝 综合例题 1（标准两问大题）</p>
              <p className="font-bold text-gray-700 mb-0.5">在 △ABC 中，已知 <MathTex tex="2b\cos A = 2c - \sqrt{3}a" /></p>
              <p className="text-gray-700 mb-1">(1) 求角 B；(2) 若 b = 2，求 △ABC 面积的最大值</p>

              <div className="bg-gray-50 rounded p-1.5 mb-1">
                <p className="font-bold text-red-700">第一问：求角 B</p>
              </div>
              <div className="space-y-1 mb-2">
                <div className="border-l-4 border-red-300 pl-2">
                  <p><strong>第①步 边化角：</strong>a → sinA，b → sinB，c → sinC</p>
                  <p className="text-lg"><MathTex tex="2\sin B\cos A = 2\sin C - \sqrt{3}\sin A" /></p>
                </div>
                <div className="border-l-4 border-blue-300 pl-2">
                  <p><strong>第②步 用 C = π-A-B：</strong></p>
                  <p className="text-lg"><MathTex tex="2\sin B\cos A = 2\sin(A+B) - \sqrt{3}\sin A" /></p>
                  <p className="text-lg"><MathTex tex="= 2\sin A\cos B + 2\cos A\sin B - \sqrt{3}\sin A" /></p>
                </div>
                <div className="border-l-4 border-green-300 pl-2">
                  <p><strong>第③步 化简：</strong>两边都有 2cosA·sinB，消掉</p>
                  <p className="text-lg"><MathTex tex="0 = 2\sin A\cos B - \sqrt{3}\sin A" /></p>
                  <p className="text-lg"><MathTex tex="\sin A(2\cos B - \sqrt{3}) = 0" /></p>
                </div>
                <div className="border-l-4 border-purple-300 pl-2">
                  <p>因为 sinA ≠ 0（三角形中角不为 0），所以 <MathTex tex="2\cos B = \sqrt{3}" /> → <MathTex tex="\cos B = \frac{\sqrt{3}}{2}" /></p>
                </div>
                <p className="font-bold text-green-700 bg-green-50 p-1.5 rounded text-lg">∴ <MathTex tex="B = \frac{\pi}{6}\;(30°)" /></p>
              </div>

              <div className="bg-gray-50 rounded p-1.5 mb-1">
                <p className="font-bold text-red-700">第二问：b = 2，求面积最大值</p>
              </div>
              <div className="space-y-1">
                <div className="border-l-4 border-red-300 pl-2">
                  <p><strong>第①步 用余弦定理：</strong></p>
                  <p className="text-lg"><MathTex tex="b^2 = a^2 + c^2 - 2ac\cos B" /></p>
                  <p className="text-lg"><MathTex tex="4 = a^2 + c^2 - 2ac \cdot \frac{\sqrt{3}}{2} = a^2 + c^2 - \sqrt{3}ac" /></p>
                </div>
                <div className="border-l-4 border-blue-300 pl-2">
                  <p><strong>第②步 用均值不等式：</strong><MathTex tex="a^2 + c^2 \geq 2ac" /></p>
                  <p className="text-lg"><MathTex tex="4 \geq 2ac - \sqrt{3}ac = (2-\sqrt{3})ac" /></p>
                  <p className="text-lg"><MathTex tex="ac \leq \frac{4}{2-\sqrt{3}} = 4(2+\sqrt{3}) = 8 + 4\sqrt{3}" /></p>
                </div>
                <div className="border-l-4 border-green-300 pl-2">
                  <p><strong>第③步 求面积：</strong></p>
                  <p className="text-lg"><MathTex tex="S = \frac{1}{2}ac\sin B = \frac{1}{2}ac \cdot \frac{1}{2} = \frac{ac}{4}" /></p>
                  <p className="text-lg"><MathTex tex="S_{\max} = \frac{8+4\sqrt{3}}{4} = 2 + \sqrt{3}" /></p>
                </div>
              </div>
            </div>

            {/* 例题 2 */}
            <div className="bg-white rounded-lg p-2 border border-blue-200">
              <p className="font-bold text-blue-800 mb-1">📝 综合例题 2（余弦定理 + 面积）</p>
              <p className="font-bold text-gray-700 mb-0.5">在 △ABC 中，a = 2，b + c = 4，A = 60°，求 △ABC 的面积</p>

              <div className="space-y-1">
                <div className="border-l-4 border-red-300 pl-2">
                  <p><strong>第①步 用余弦定理：</strong></p>
                  <p className="text-lg"><MathTex tex="a^2 = b^2 + c^2 - 2bc\cos A" /></p>
                  <p className="text-lg"><MathTex tex="4 = b^2 + c^2 - 2bc \cdot \frac{1}{2} = b^2 + c^2 - bc" /></p>
                </div>
                <div className="border-l-4 border-blue-300 pl-2">
                  <p><strong>第②步 利用 b+c = 4：</strong></p>
                  <p className="text-lg"><MathTex tex="(b+c)^2 = b^2 + c^2 + 2bc = 16" /></p>
                  <p>所以 <MathTex tex="b^2 + c^2 = 16 - 2bc" /></p>
                  <p>代入①：<MathTex tex="4 = 16 - 2bc - bc = 16 - 3bc" /></p>
                  <p className="text-lg"><MathTex tex="bc = 4" /></p>
                </div>
                <div className="border-l-4 border-green-300 pl-2">
                  <p><strong>第③步 求面积：</strong></p>
                  <p className="text-lg"><MathTex tex="S = \frac{1}{2}bc\sin A = \frac{1}{2} \cdot 4 \cdot \frac{\sqrt{3}}{2} = \sqrt{3}" /></p>
                </div>
              </div>
            </div>

            {/* 例题 3 */}
            <div className="bg-white rounded-lg p-2 border border-blue-200">
              <p className="font-bold text-blue-800 mb-1">📝 综合例题 3（判断三角形形状）</p>
              <p className="font-bold text-gray-700 mb-0.5">在 △ABC 中，已知 <MathTex tex="a^2 = b^2 + bc" />，A = 2B，求角 B</p>

              <div className="space-y-1">
                <div className="border-l-4 border-red-300 pl-2">
                  <p><strong>方法：角化边</strong>（等式中有 a²、b²，用余弦定理）</p>
                  <p>由余弦定理：<MathTex tex="a^2 = b^2 + c^2 - 2bc\cos A" /></p>
                  <p>代入条件 a² = b² + bc：</p>
                  <p className="text-lg"><MathTex tex="b^2 + bc = b^2 + c^2 - 2bc\cos A" /></p>
                  <p className="text-lg"><MathTex tex="bc = c^2 - 2bc\cos A" /></p>
                </div>
                <div className="border-l-4 border-blue-300 pl-2">
                  <p>又 A = 2B，用正弦定理 a/sinA = b/sinB → a/sin2B = b/sinB</p>
                  <p className="text-lg"><MathTex tex="a = \frac{b\sin 2B}{\sin B} = \frac{2b\sin B\cos B}{\sin B} = 2b\cos B" /></p>
                </div>
                <div className="border-l-4 border-green-300 pl-2">
                  <p>代入 a² = b² + bc：<MathTex tex="4b^2\cos^2 B = b^2 + bc" /></p>
                  <p>两边除以 b：<MathTex tex="4b\cos^2 B = b + c" /></p>
                  <p>再由余弦定理求 c… 或直接代入简化，最终得 <strong>B = π/6 (30°)</strong></p>
                </div>
              </div>
            </div>

            {/* 解题思路总结 */}
            <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
              <p className="font-bold text-gray-800 mb-2">🗺️ 解三角形"通用解题路线"</p>
              <div className="space-y-1">
                <div className="flex items-start gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">1</span>
                  <p><strong>看到边角混合等式 →</strong> 边化角（a→sinA）或角化边，统一后化简求角</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">2</span>
                  <p><strong>看到 a²、b²、c² →</strong> 优先考虑余弦定理展开</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">3</span>
                  <p><strong>求面积 →</strong> S = ½ab·sinC，需要两边和夹角</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">4</span>
                  <p><strong>求最值 →</strong> 余弦定理列关系式 + 均值不等式</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">5</span>
                  <p><strong>两解问题 →</strong> SSA 情形注意检验 A+B {'<'} 180°</p>
                </div>
              </div>
              <p className="mt-2 text-red-700 font-bold">高考大题套路：第一问边化角求角 → 第二问用余弦定理+面积公式求值。这套路年年都考！</p>
            </div>

            {/* 全章公式速查表 */}
            <div className="bg-blue-50 rounded-lg p-2 border border-blue-200">
              <p className="font-bold text-blue-800 mb-1">📋 5.3 全章公式速查表</p>
              <table className="w-full text-base border-collapse">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="border border-blue-200 p-1.5 text-left">类别</th>
                    <th className="border border-blue-200 p-1.5 text-left">公式</th>
                    <th className="border border-blue-200 p-1.5 text-left">适用场景</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-blue-200 p-1.5 font-bold text-red-600" rowSpan={2}>正弦定理</td>
                    <td className="border border-blue-200 p-1.5"><MathTex tex="\dfrac{a}{\sin A}=\dfrac{b}{\sin B}=\dfrac{c}{\sin C}" /></td>
                    <td className="border border-blue-200 p-1.5">边角互化</td>
                  </tr>
                  <tr>
                    <td className="border border-blue-200 p-1.5"><MathTex tex="a = 2R\sin A" /></td>
                    <td className="border border-blue-200 p-1.5">边化角替换</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="border border-blue-200 p-1.5 font-bold text-blue-600" rowSpan={2}>余弦定理</td>
                    <td className="border border-blue-200 p-1.5"><MathTex tex="a^2=b^2+c^2-2bc\cos A" /></td>
                    <td className="border border-blue-200 p-1.5">已知两边夹角求第三边</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="border border-blue-200 p-1.5"><MathTex tex="\cos A=\dfrac{b^2+c^2-a^2}{2bc}" /></td>
                    <td className="border border-blue-200 p-1.5">已知三边求角</td>
                  </tr>
                  <tr>
                    <td className="border border-blue-200 p-1.5 font-bold text-green-600">面积公式</td>
                    <td className="border border-blue-200 p-1.5"><MathTex tex="S=\dfrac{1}{2}ab\sin C" /></td>
                    <td className="border border-blue-200 p-1.5">两边+夹角求面积</td>
                  </tr>
                  <tr className="bg-orange-50">
                    <td className="border border-blue-200 p-1.5 font-bold text-orange-600">射影定理</td>
                    <td className="border border-blue-200 p-1.5"><MathTex tex="a = b\cos C + c\cos B" /></td>
                    <td className="border border-blue-200 p-1.5">高考偶尔出现的补充公式</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </Collapsible>
      </section>

      </LessonLayout>
    </div>
  );
}
