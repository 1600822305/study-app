import { Math as MathTex, Collapsible, SpeakButton, PageHeader, LessonLayout, ExportButton } from '@/components/shared';
import { trigIdentityNarrations } from './data/identity-narrations';
import { trigIdentityProgressItems } from './data/identity-progress';
import { useProgress } from '@/hooks';
import { scrollToId } from '@/lib/scroll';

export function TrigIdentityPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('trig-identity', trigIdentityProgressItems);

  return (
    <div>
      <PageHeader
        stage="第五阶段 · 三角世界"
        title="5.2 三角恒等变换"
        narration={trigIdentityNarrations.intro}
        subtitle="和差角公式、倍角公式、辅助角公式——高考最爱考"
        tags={[
          { label: '难度 ★★★☆☆', color: 'amber' },
          { label: '高考必考', color: 'blue' },
          { label: '约2天', color: 'purple' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="5.2 三角恒等变换" />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-3 mb-0">
        <p className="font-bold text-gray-800 mb-2">📋 知识地图</p>
        <div className="text-gray-600 space-y-1">
          <button onClick={() => scrollToId('ti-sumdiff')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">一、两角和差公式</button>
          <button onClick={() => scrollToId('ti-double')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">二、二倍角公式</button>
          <button onClick={() => scrollToId('ti-power')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">三、降幂公式</button>
          <button onClick={() => scrollToId('ti-halfangle')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">四、半角公式</button>
          <button onClick={() => scrollToId('ti-universal')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">五、万能公式 <span className="text-gray-400">（非必考）</span></button>
          <button onClick={() => scrollToId('ti-prodsum')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">六、积化和差与和差化积 <span className="text-gray-400">（非必考）</span></button>
          <button onClick={() => scrollToId('ti-auxiliary')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">七、辅助角公式（高考最爱）</button>
          <button onClick={() => scrollToId('ti-practice')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">八、凑角求值与综合应用</button>
        </div>
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 1: 两角和差公式 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="ti-sumdiff" className="mb-3 scroll-mt-4">
        <Collapsible title="一、两角和差公式" defaultOpen storageKey="trig-identity:sumdiff" headerExtra={<SpeakButton text={trigIdentityNarrations.sumDiff} />}>
          <p className="text-blue-600 mb-1">🎯 学完你能：把 <MathTex tex="\sin(\alpha+\beta)" /> 这种"两角合体"拆开来算。</p>
          <p className="text-gray-600 mb-2 text-sm">为什么要学？这是所有三角恒等变换的地基，后面的倍角、辅助角全都从这里推出来。</p>
          <div className="space-y-2 text-gray-700">

            {/* 引入：为什么需要和差公式 */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <p className="font-bold text-amber-800 mb-1">💡 先搞懂一个问题</p>
              <p className="mb-1"><MathTex tex="\sin(30° + 60°) = \sin 90° = 1" /></p>
              <p className="mb-1">但是 <MathTex tex="\sin 30° + \sin 60° = \frac{1}{2} + \frac{\sqrt{3}}{2} \approx 1.37 \neq 1" /></p>
              <p className="font-bold text-red-700">所以 <MathTex tex="\sin(\alpha+\beta) \neq \sin\alpha + \sin\beta" /> ！不能直接拆！</p>
              <p className="mt-1">那 <MathTex tex="\sin(\alpha+\beta)" /> 到底等于什么？这就是和角公式要解决的问题。</p>
            </div>

            {/* 正弦和差公式 */}
            <div className="bg-red-50 border-2 border-red-300 rounded-xl p-3">
              <p className="font-bold text-lg text-red-700 mb-2">🔑 正弦和差公式（最核心，记住这一个！）</p>
              <div className="bg-white rounded-lg p-3 border border-red-200 mb-2">
                <p className="text-xl text-center mb-2"><MathTex tex="\sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta" /></p>
                <p className="text-xl text-center"><MathTex tex="\sin(\alpha - \beta) = \sin\alpha\cos\beta - \cos\alpha\sin\beta" /></p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-2 border border-yellow-200">
                <p className="font-bold text-yellow-800 mb-1">🧠 记忆口诀：</p>
                <p><MathTex tex="\sin(\alpha\pm\beta) = \sin\alpha\cos\beta \pm \cos\alpha\sin\beta" /></p>
                <p className="mt-1 text-gray-600">前面是“正余”（<MathTex tex="\sin\alpha\cdot\cos\beta" />），后面是“余正”（<MathTex tex="\cos\alpha\cdot\sin\beta" />），中间符号和括号里一样。</p>
                <p className="mt-1 text-gray-600">交叉相乘：一个取 sin 另一个取 cos，交叉配对。</p>
              </div>
            </div>

            {/* 余弦和差公式 */}
            <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-3">
              <p className="font-bold text-lg text-blue-700 mb-2">🔑 余弦和差公式</p>
              <div className="bg-white rounded-lg p-3 border border-blue-200 mb-2">
                <p className="text-xl text-center mb-2"><MathTex tex="\cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta" /></p>
                <p className="text-xl text-center"><MathTex tex="\cos(\alpha - \beta) = \cos\alpha\cos\beta + \sin\alpha\sin\beta" /></p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-2 border border-yellow-200">
                <p className="font-bold text-yellow-800 mb-1">🧠 记忆口诀：</p>
                <p><MathTex tex="\cos(\alpha\pm\beta) = \cos\alpha\cos\beta \mp \sin\alpha\sin\beta" /></p>
                <p className="mt-1 text-gray-600">前面是“余余”（<MathTex tex="\cos\alpha\cdot\cos\beta" />），后面是“正正”（<MathTex tex="\sin\alpha\cdot\sin\beta" />）。</p>
                <p className="mt-1 text-gray-600"><strong>注意：符号相反！</strong>加号变减号，减号变加号。这和正弦不一样。</p>
              </div>
            </div>

            {/* 正切和差公式 */}
            <div className="bg-green-50 border-2 border-green-300 rounded-xl p-3">
              <p className="font-bold text-lg text-green-700 mb-2">🔑 正切和差公式</p>
              <div className="bg-white rounded-lg p-3 border border-green-200 mb-2">
                <p className="text-xl text-center mb-2"><MathTex tex="\tan(\alpha + \beta) = \frac{\tan\alpha + \tan\beta}{1 - \tan\alpha\tan\beta}" /></p>
                <p className="text-xl text-center"><MathTex tex="\tan(\alpha - \beta) = \frac{\tan\alpha - \tan\beta}{1 + \tan\alpha\tan\beta}" /></p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-2 border border-yellow-200">
                <p className="font-bold text-yellow-800 mb-1">🧠 记忆技巧</p>
                <p>分子：两个 tan <strong>直接加减</strong>（和括号里的符号一样）</p>
                <p>分母：<MathTex tex="1 \mp \tan\alpha\cdot\tan\beta" />（符号和括号<strong>相反</strong>）</p>
                <p className="mt-1 text-gray-600">分子好记，分母注意"上下符号相反"。</p>
              </div>
            </div>

            {/* 对比总结表 */}
            <div className="bg-gray-50 rounded-lg p-2">
              <p className="font-bold text-gray-800 mb-1">📊 三组公式对比速查</p>
              <table className="w-full text-base border-collapse">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 p-1.5 text-left">公式</th>
                    <th className="border border-gray-300 p-1.5 text-left">展开形式</th>
                    <th className="border border-gray-300 p-1.5 text-left">记忆要点</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-1.5 font-bold text-red-600"><MathTex tex="\sin(\alpha \pm \beta)" /></td>
                    <td className="border border-gray-300 p-1.5"><MathTex tex="\sin\alpha\cos\beta \pm \cos\alpha\sin\beta" /></td>
                    <td className="border border-gray-300 p-1.5">交叉配对，符号相同</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="border border-gray-300 p-1.5 font-bold text-blue-600"><MathTex tex="\cos(\alpha \pm \beta)" /></td>
                    <td className="border border-gray-300 p-1.5"><MathTex tex="\cos\alpha\cos\beta \mp \sin\alpha\sin\beta" /></td>
                    <td className="border border-gray-300 p-1.5">同名配对，<strong>符号相反</strong></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-1.5 font-bold text-green-600"><MathTex tex="\tan(\alpha \pm \beta)" /></td>
                    <td className="border border-gray-300 p-1.5"><MathTex tex="\dfrac{\tan\alpha \pm \tan\beta}{1 \mp \tan\alpha\tan\beta}" /></td>
                    <td className="border border-gray-300 p-1.5">分子直接加减，分母符号反</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 实战例题 */}
            <div className="bg-white rounded-lg p-2 border border-blue-200">
              <p className="font-bold text-blue-800 mb-1">📝 实战例题 — 和差公式直接计算</p>

              <p className="font-bold text-gray-700 mb-0.5">例 1：求 <MathTex tex="\sin 75°" /> 的精确值</p>
              <div className="bg-gray-50 rounded p-1.5 mb-1">
                <p><strong>思路：</strong>75° = 45° + 30°，拆成两个特殊角</p>
              </div>
              <div className="space-y-1 mb-2">
                <div className="border-l-4 border-red-300 pl-2">
                  <p className="text-lg"><MathTex tex="\sin 75° = \sin(45° + 30°)" /></p>
                </div>
                <div className="border-l-4 border-blue-300 pl-2">
                  <p className="text-lg"><MathTex tex="= \sin 45°\cos 30° + \cos 45°\sin 30°" /></p>
                </div>
                <div className="border-l-4 border-green-300 pl-2">
                  <p className="text-lg"><MathTex tex="= \frac{\sqrt{2}}{2} \cdot \frac{\sqrt{3}}{2} + \frac{\sqrt{2}}{2} \cdot \frac{1}{2} = \frac{\sqrt{6} + \sqrt{2}}{4}" /></p>
                </div>
              </div>

              <p className="font-bold text-gray-700 mb-0.5">例 2：求 <MathTex tex="\cos 15°" /> 的精确值</p>
              <div className="bg-gray-50 rounded p-1.5 mb-1">
                <p><strong>思路：</strong>15° = 45° - 30°</p>
              </div>
              <div className="space-y-1 mb-2">
                <div className="border-l-4 border-red-300 pl-2">
                  <p className="text-lg"><MathTex tex="\cos 15° = \cos(45° - 30°)" /></p>
                </div>
                <div className="border-l-4 border-blue-300 pl-2">
                  <p className="text-lg"><MathTex tex="= \cos 45°\cos 30° + \sin 45°\sin 30°" /></p>
                </div>
                <div className="border-l-4 border-green-300 pl-2">
                  <p className="text-lg"><MathTex tex="= \frac{\sqrt{2}}{2} \cdot \frac{\sqrt{3}}{2} + \frac{\sqrt{2}}{2} \cdot \frac{1}{2} = \frac{\sqrt{6} + \sqrt{2}}{4}" /></p>
                </div>
                <p className="text-gray-600 mt-1">巧了！<MathTex tex="\cos 15° = \sin 75°" />，因为 <MathTex tex="15° + 75° = 90°" />（互余）。</p>
              </div>

              <p className="font-bold text-gray-700 mb-0.5">例 3：已知 <MathTex tex="\sin\alpha = \frac{3}{5}" />，<MathTex tex="\cos\beta = \frac{12}{13}" />（α、β 均为第一象限角），求 <MathTex tex="\sin(\alpha + \beta)" /></p>
              <div className="space-y-1">
                <div className="border-l-4 border-red-300 pl-2">
                  <p><strong>第①步 补全：</strong>用 <MathTex tex="\sin^2 + \cos^2 = 1" /> 求缺的值</p>
                  <p className="text-lg"><MathTex tex="\cos\alpha = \frac{4}{5},\quad \sin\beta = \frac{5}{13}" /></p>
                </div>
                <div className="border-l-4 border-blue-300 pl-2">
                  <p><strong>第②步 套公式：</strong></p>
                  <p className="text-lg"><MathTex tex="\sin(\alpha+\beta) = \frac{3}{5} \cdot \frac{12}{13} + \frac{4}{5} \cdot \frac{5}{13} = \frac{36}{65} + \frac{20}{65} = \frac{56}{65}" /></p>
                </div>
              </div>
            </div>

            {/* 易错点 */}
            <div className="bg-red-50 rounded-lg p-2 border border-red-200">
              <p className="font-bold text-red-700 mb-1">⚠️ 易错点</p>
              <div className="space-y-1">
                <p>1. <strong>cos 符号相反！</strong><MathTex tex="\cos(\alpha+\beta)" /> 中间是<strong>减号</strong>，<MathTex tex="\cos(\alpha-\beta)" /> 中间是<strong>加号</strong>。很多人搞反。</p>
                <p>2. <strong>补全时注意象限。</strong>比如 α 在第二象限，<MathTex tex="\cos\alpha" /> 是负的！不能直接开根号取正值。</p>
                <p>3. <strong>tan 公式分母不能为 0。</strong>当 <MathTex tex="\tan\alpha\cdot\tan\beta = 1" /> 时，<MathTex tex="\tan(\alpha+\beta)" /> 无意义（说明 <MathTex tex="\alpha+\beta = 90°" />）。</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 2: 二倍角公式 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="ti-double" className="mb-3 scroll-mt-4">
        <Collapsible title="二、二倍角公式" defaultOpen storageKey="trig-identity:double" headerExtra={<SpeakButton text={trigIdentityNarrations.doubleAngle} />}>
          <p className="text-blue-600 mb-1">🎯 学完你能：把 <MathTex tex="\sin 2\alpha" />、<MathTex tex="\cos 2\alpha" /> 展开，或者反过来把展开式合并。</p>
          <p className="text-gray-600 mb-2 text-sm">为什么要学？二倍角公式是高考化简的核心工具，几乎每年都考。</p>
          <div className="space-y-2 text-gray-700">

            {/* 推导思路 */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <p className="font-bold text-amber-800 mb-1">💡 从哪来的？</p>
              <p>二倍角公式<strong>不用额外记忆</strong>，它就是和角公式里 <strong>β = α</strong> 的特殊情况：</p>
              <p className="mt-1"><MathTex tex="\sin(\alpha + \alpha) = \sin\alpha\cos\alpha + \cos\alpha\sin\alpha = 2\sin\alpha\cos\alpha" /></p>
              <p className="mt-1">就这么简单！把两个角都写成 α，自然就推出来了。</p>
            </div>

            {/* sin2α */}
            <div className="bg-red-50 border-2 border-red-300 rounded-xl p-3">
              <p className="font-bold text-lg text-red-700 mb-2">🔑 sin2α（只有一种形式）</p>
              <div className="bg-white rounded-lg p-3 border border-red-200">
                <p className="text-xl text-center"><MathTex tex="\sin 2\alpha = 2\sin\alpha\cos\alpha" /></p>
              </div>
              <p className="mt-2 text-gray-600">口诀：<strong>"2倍 = 2·正·余"</strong>，就是把 <MathTex tex="\sin\alpha" /> 和 <MathTex tex="\cos\alpha" /> 乘起来再乘 2。</p>
            </div>

            {/* cos2α */}
            <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-3">
              <p className="font-bold text-lg text-blue-700 mb-2">🔑 cos2α（三种形式，必须全记！）</p>
              <div className="bg-white rounded-lg p-3 border border-blue-200 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-blue-700 whitespace-nowrap">形式①</span>
                  <p className="text-xl"><MathTex tex="\cos 2\alpha = \cos^2\alpha - \sin^2\alpha" /></p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-bold text-blue-700 whitespace-nowrap">形式②</span>
                  <p className="text-xl"><MathTex tex="\cos 2\alpha = 2\cos^2\alpha - 1" /></p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-bold text-blue-700 whitespace-nowrap">形式③</span>
                  <p className="text-xl"><MathTex tex="\cos 2\alpha = 1 - 2\sin^2\alpha" /></p>
                </div>
              </div>
              <div className="bg-yellow-50 rounded-lg p-2 border border-yellow-200 mt-2">
                <p className="font-bold text-yellow-800 mb-1">🧠 怎么记？</p>
                <p>形式①是原始版：<MathTex tex="\cos^2\alpha - \sin^2\alpha" />（直接从和角公式推出）</p>
                <p>形式②：把 <MathTex tex="\sin^2\alpha" /> 换成 <MathTex tex="1 - \cos^2\alpha" /> → 得到 <strong>只含 cos</strong> 的版本</p>
                <p>形式③：把 <MathTex tex="\cos^2\alpha" /> 换成 <MathTex tex="1 - \sin^2\alpha" /> → 得到 <strong>只含 sin</strong> 的版本</p>
                <p className="mt-1 text-red-600 font-bold">高考最爱用形式②和③！因为能降幂。</p>
              </div>
            </div>

            {/* tan2α */}
            <div className="bg-green-50 border-2 border-green-300 rounded-xl p-3">
              <p className="font-bold text-lg text-green-700 mb-2">🔑 tan2α</p>
              <div className="bg-white rounded-lg p-3 border border-green-200">
                <p className="text-xl text-center"><MathTex tex="\tan 2\alpha = \frac{2\tan\alpha}{1 - \tan^2\alpha}" /></p>
              </div>
              <p className="mt-2 text-gray-600">就是 <MathTex tex="\tan(\alpha+\alpha)" />，分子 <MathTex tex="2\tan\alpha" />，分母 <MathTex tex="1 - \tan^2\alpha" />。</p>
            </div>

            {/* 实战例题 */}
            <div className="bg-white rounded-lg p-2 border border-blue-200">
              <p className="font-bold text-blue-800 mb-1">📝 实战例题 — 二倍角公式应用</p>

              <p className="font-bold text-gray-700 mb-0.5">例 1：已知 <MathTex tex="\sin\alpha = \frac{3}{5}" />（α 为第一象限角），求 <MathTex tex="\sin 2\alpha" /> 和 <MathTex tex="\cos 2\alpha" /></p>
              <div className="space-y-1 mb-2">
                <div className="border-l-4 border-red-300 pl-2">
                  <p><strong>先补全：</strong><MathTex tex="\cos\alpha = \frac{4}{5}" />（第一象限，cos 为正）</p>
                </div>
                <div className="border-l-4 border-blue-300 pl-2">
                  <p><strong>求 <MathTex tex="\sin 2\alpha" />：</strong></p>
                  <p className="text-lg"><MathTex tex="\sin 2\alpha = 2 \cdot \frac{3}{5} \cdot \frac{4}{5} = \frac{24}{25}" /></p>
                </div>
                <div className="border-l-4 border-green-300 pl-2">
                  <p><strong>求 <MathTex tex="\cos 2\alpha" />（用形式①）：</strong></p>
                  <p className="text-lg"><MathTex tex="\cos 2\alpha = \left(\frac{4}{5}\right)^2 - \left(\frac{3}{5}\right)^2 = \frac{16}{25} - \frac{9}{25} = \frac{7}{25}" /></p>
                </div>
              </div>

              <p className="font-bold text-gray-700 mb-0.5">例 2：化简 <MathTex tex="\cos^2 15° - \sin^2 15°" /></p>
              <div className="space-y-1 mb-2">
                <div className="border-l-4 border-blue-300 pl-2">
                  <p><strong>识别：</strong>这就是 <MathTex tex="\cos 2\alpha" /> 形式①，其中 α = 15°</p>
                  <p className="text-lg"><MathTex tex="\cos^2 15° - \sin^2 15° = \cos(2 \times 15°) = \cos 30° = \frac{\sqrt{3}}{2}" /></p>
                </div>
                <p className="text-gray-600 mt-1">反向使用公式：看到 <MathTex tex="\cos^2\alpha - \sin^2\alpha" />，直接合并为 <MathTex tex="\cos 2\alpha" />。这是高考常考的"逆用"。</p>
              </div>

              <p className="font-bold text-gray-700 mb-0.5">例 3：化简 <MathTex tex="2\sin 22.5°\cos 22.5°" /></p>
              <div className="space-y-1">
                <div className="border-l-4 border-red-300 pl-2">
                  <p><strong>识别：</strong>这就是 <MathTex tex="\sin 2\alpha" /> 公式，其中 α = 22.5°</p>
                  <p className="text-lg"><MathTex tex="2\sin 22.5°\cos 22.5° = \sin(2 \times 22.5°) = \sin 45° = \frac{\sqrt{2}}{2}" /></p>
                </div>
              </div>
            </div>

            {/* 易错点 */}
            <div className="bg-red-50 rounded-lg p-2 border border-red-200">
              <p className="font-bold text-red-700 mb-1">⚠️ 易错点</p>
              <div className="space-y-1">
                <p>1. <strong><MathTex tex="\cos 2\alpha" /> 有三种形式，选哪个？</strong>看题目给了什么。给了 <MathTex tex="\sin\alpha" /> 就用形式③，给了 <MathTex tex="\cos\alpha" /> 就用形式②，都给了就用形式①。</p>
                <p>2. <strong>逆向识别！</strong>看到 <MathTex tex="2\sin\alpha\cos\alpha" /> → 合成 <MathTex tex="\sin 2\alpha" />；看到 <MathTex tex="\cos^2\alpha - \sin^2\alpha" /> → 合成 <MathTex tex="\cos 2\alpha" />。高考最爱考逆用。</p>
                <p>3. <MathTex tex="\sin 2\alpha \neq 2\sin\alpha" /><strong>！</strong><MathTex tex="\sin 2\alpha = 2\sin\alpha\cos\alpha" />，别忘了 <MathTex tex="\cos\alpha" />！</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 3: 降幂公式 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="ti-power" className="mb-3 scroll-mt-4">
        <Collapsible title="三、降幂公式" defaultOpen storageKey="trig-identity:power" headerExtra={<SpeakButton text={trigIdentityNarrations.powerReduction} />}>
          <p className="text-blue-600 mb-1">🎯 学完你能：把 <MathTex tex="\sin^2\alpha" />、<MathTex tex="\cos^2\alpha" /> 降成一次式来计算。</p>
          <p className="text-gray-600 mb-2 text-sm">为什么要学？遇到平方的三角函数，降幂后计算量大大减少。</p>
          <div className="space-y-2 text-gray-700">

            {/* 推导 */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <p className="font-bold text-amber-800 mb-1">💡 从哪来的？</p>
              <p>就是把 <MathTex tex="\cos 2\alpha" /> 的形式②和③<strong>反过来解</strong>：</p>
              <p className="mt-1">形式② <MathTex tex="\cos 2\alpha = 2\cos^2\alpha - 1" /> → 解出 <MathTex tex="\cos^2\alpha" /></p>
              <p>形式③ <MathTex tex="\cos 2\alpha = 1 - 2\sin^2\alpha" /> → 解出 <MathTex tex="\sin^2\alpha" /></p>
            </div>

            {/* 公式 */}
            <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-3">
              <p className="font-bold text-lg text-purple-700 mb-2">🔑 降幂公式</p>
              <div className="bg-white rounded-lg p-3 border border-purple-200 space-y-3">
                <div className="text-center">
                  <p className="text-xl"><MathTex tex="\sin^2\alpha = \frac{1 - \cos 2\alpha}{2}" /></p>
                  <p className="text-gray-500 mt-1"><MathTex tex="\sin^2" /> 用 <strong>“1 减”</strong></p>
                </div>
                <div className="text-center">
                  <p className="text-xl"><MathTex tex="\cos^2\alpha = \frac{1 + \cos 2\alpha}{2}" /></p>
                  <p className="text-gray-500 mt-1"><MathTex tex="\cos^2" /> 用 <strong>“1 加”</strong></p>
                </div>
              </div>
              <div className="bg-yellow-50 rounded-lg p-2 border border-yellow-200 mt-2">
                <p className="font-bold text-yellow-800 mb-1">🧠 记忆：正减余加</p>
                <p><MathTex tex="\sin^2\alpha" /> → <MathTex tex="1 - \cos 2\alpha" />（“正减”）</p>
                <p><MathTex tex="\cos^2\alpha" /> → <MathTex tex="1 + \cos 2\alpha" />（“余加”）</p>
                <p className="mt-1 text-gray-600">和 cos 的和差公式"符号相反"的规律一脉相承。</p>
              </div>
            </div>

            {/* 实战例题 */}
            <div className="bg-white rounded-lg p-2 border border-blue-200">
              <p className="font-bold text-blue-800 mb-1">📝 实战例题 — 降幂公式应用</p>

              <p className="font-bold text-gray-700 mb-0.5">例 1：求 <MathTex tex="\sin^2 15°" /> 的精确值</p>
              <div className="space-y-1 mb-2">
                <div className="border-l-4 border-purple-300 pl-2">
                  <p className="text-lg"><MathTex tex="\sin^2 15° = \frac{1 - \cos 30°}{2} = \frac{1 - \frac{\sqrt{3}}{2}}{2} = \frac{2 - \sqrt{3}}{4}" /></p>
                </div>
              </div>

              <p className="font-bold text-gray-700 mb-0.5">例 2：化简 <MathTex tex="\sin^2\alpha + \cos^2\alpha" />（用降幂公式验证）</p>
              <div className="space-y-1">
                <div className="border-l-4 border-purple-300 pl-2">
                  <p className="text-lg"><MathTex tex="\frac{1 - \cos 2\alpha}{2} + \frac{1 + \cos 2\alpha}{2} = \frac{2}{2} = 1" /></p>
                  <p className="mt-1 text-gray-600"><MathTex tex="\cos 2\alpha" /> 正好抵消了！验证了 <MathTex tex="\sin^2\alpha + \cos^2\alpha = 1" /> 恒成立。</p>
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 4: 半角公式 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="ti-halfangle" className="mb-3 scroll-mt-4">
        <Collapsible title="四、半角公式" defaultOpen storageKey="trig-identity:halfangle">
          <p className="text-blue-600 mb-1">🎯 学完你能：求 <MathTex tex="\sin\frac{\alpha}{2}" />、<MathTex tex="\cos\frac{\alpha}{2}" />、<MathTex tex="\tan\frac{\alpha}{2}" /> 的值。</p>
          <p className="text-gray-600 mb-2 text-sm">从降幂公式一步推出，口诀："降次必升角，降角必升次"。</p>
          <div className="space-y-2 text-gray-700">

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <p className="font-bold text-amber-800 mb-1">💡 从哪来的？</p>
              <p>降幂公式是：<MathTex tex="\sin^2\alpha = \dfrac{1 - \cos 2\alpha}{2}" /></p>
              <p className="mt-1">把 <MathTex tex="\alpha" /> 换成 <MathTex tex="\frac{\alpha}{2}" />：<MathTex tex="\sin^2\!\dfrac{\alpha}{2} = \dfrac{1 - \cos\alpha}{2}" /></p>
              <p className="mt-1">两边开根号就得到半角公式了！cos 同理。</p>
            </div>

            <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-3">
              <p className="font-bold text-lg text-purple-700 mb-2">🔑 半角公式</p>
              <div className="bg-white rounded-lg p-3 border border-purple-200 space-y-3">
                <div className="text-center">
                  <p className="text-xl"><MathTex tex="\sin\frac{\alpha}{2} = \pm\sqrt{\frac{1 - \cos\alpha}{2}}" /></p>
                </div>
                <div className="text-center">
                  <p className="text-xl"><MathTex tex="\cos\frac{\alpha}{2} = \pm\sqrt{\frac{1 + \cos\alpha}{2}}" /></p>
                </div>
                <div className="text-center">
                  <p className="text-xl"><MathTex tex="\tan\frac{\alpha}{2} = \pm\sqrt{\frac{1 - \cos\alpha}{1 + \cos\alpha}} = \frac{\sin\alpha}{1 + \cos\alpha} = \frac{1 - \cos\alpha}{\sin\alpha}" /></p>
                </div>
              </div>
              <div className="bg-yellow-50 rounded-lg p-2 border border-yellow-200 mt-2">
                <p className="font-bold text-yellow-800 mb-1">🧠 记忆要点</p>
                <p>和降幂公式一模一样，只是<strong>多了个 ± 号</strong>（开根号要判断正负）。</p>
                <p className="mt-1">正负号由 <strong><MathTex tex="\frac{\alpha}{2}" /> 所在象限</strong>决定，不是 <MathTex tex="\alpha" /> 的象限！</p>
                <p className="mt-1">tan 的半角公式<strong>后两种形式不带 ±</strong>，更实用。</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-2 border border-blue-200">
              <p className="font-bold text-blue-800 mb-1">📝 实战例题</p>

              <p className="font-bold text-gray-700 mb-0.5">例 1：已知 <MathTex tex="\cos\alpha = \frac{7}{25}" />，且 <MathTex tex="\frac{\alpha}{2} \in (0, \frac{\pi}{2})" />，求 <MathTex tex="\sin\frac{\alpha}{2}" /> 和 <MathTex tex="\cos\frac{\alpha}{2}" /></p>
              <div className="space-y-1 mb-2">
                <div className="border-l-4 border-purple-300 pl-2">
                  <p><strong><MathTex tex="\frac{\alpha}{2}" /> 在第一象限 → sin 和 cos 都取正</strong></p>
                </div>
                <div className="border-l-4 border-blue-300 pl-2">
                  <p className="text-lg"><MathTex tex="\sin\frac{\alpha}{2} = \sqrt{\frac{1 - \frac{7}{25}}{2}} = \sqrt{\frac{18}{50}} = \sqrt{\frac{9}{25}} = \frac{3}{5}" /></p>
                </div>
                <div className="border-l-4 border-green-300 pl-2">
                  <p className="text-lg"><MathTex tex="\cos\frac{\alpha}{2} = \sqrt{\frac{1 + \frac{7}{25}}{2}} = \sqrt{\frac{32}{50}} = \sqrt{\frac{16}{25}} = \frac{4}{5}" /></p>
                </div>
              </div>

              <p className="font-bold text-gray-700 mb-0.5">例 2：求 <MathTex tex="\tan 15°" /></p>
              <div className="space-y-1">
                <div className="border-l-4 border-purple-300 pl-2">
                  <p><strong>思路：</strong><MathTex tex="15° = \frac{30°}{2}" />，用 tan 半角公式的第三种形式</p>
                  <p className="text-lg"><MathTex tex="\tan 15° = \frac{1 - \cos 30°}{\sin 30°} = \frac{1 - \frac{\sqrt{3}}{2}}{\frac{1}{2}} = 2 - \sqrt{3}" /></p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-lg p-2 border border-red-200">
              <p className="font-bold text-red-700 mb-1">⚠️ 易错点</p>
              <div className="space-y-1">
                <p>1. <strong>± 号由 <MathTex tex="\frac{\alpha}{2}" /> 的象限决定，不是 <MathTex tex="\alpha" /> 的象限！</strong>比如 <MathTex tex="\alpha" /> 在第三象限，<MathTex tex="\frac{\alpha}{2}" /> 可能在第二象限。</p>
                <p>2. <strong>优先用 tan 的后两种形式</strong>（不带±），避免判断象限。</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 5: 万能公式（非必考） */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="ti-universal" className="mb-3 scroll-mt-4">
        <Collapsible title="五、万能公式（非必考·拓展）" storageKey="trig-identity:universal">
          <div className="bg-gray-100 border border-gray-300 rounded-lg p-2 mb-2">
            <p className="text-gray-500">📌 新高考很少直接考查，但了解后能加深对半角公式的理解，偶尔在填空题中出现。</p>
          </div>
          <div className="space-y-2 text-gray-700">

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <p className="font-bold text-amber-800 mb-1">💡 什么是万能公式？</p>
              <p>把 <MathTex tex="\sin\alpha" />、<MathTex tex="\cos\alpha" />、<MathTex tex="\tan\alpha" /> <strong>全部用 <MathTex tex="\tan\frac{\alpha}{2}" /> 来表示</strong>，所以叫"万能"——一个量搞定一切。</p>
            </div>

            <div className="bg-teal-50 border-2 border-teal-300 rounded-xl p-3">
              <p className="font-bold text-lg text-teal-700 mb-2">🔑 万能公式</p>
              <div className="bg-white rounded-lg p-3 border border-teal-200 space-y-3">
                <p className="text-center text-gray-500 mb-1">设 <MathTex tex="t = \tan\dfrac{\alpha}{2}" />，则：</p>
                <div className="text-center">
                  <p className="text-xl"><MathTex tex="\sin\alpha = \frac{2t}{1 + t^2}" /></p>
                </div>
                <div className="text-center">
                  <p className="text-xl"><MathTex tex="\cos\alpha = \frac{1 - t^2}{1 + t^2}" /></p>
                </div>
                <div className="text-center">
                  <p className="text-xl"><MathTex tex="\tan\alpha = \frac{2t}{1 - t^2}" /></p>
                </div>
              </div>
              <div className="bg-yellow-50 rounded-lg p-2 border border-yellow-200 mt-2">
                <p className="font-bold text-yellow-800 mb-1">🧠 记忆技巧</p>
                <p>tan 的万能公式就是 tan 的二倍角公式（把 <MathTex tex="\alpha" /> 换成 <MathTex tex="\frac{\alpha}{2}" />）。</p>
                <p className="mt-1">sin 和 cos 的分母都是 <strong>1 + t²</strong>。</p>
                <p className="mt-1">sin 分子 <strong>2t</strong>，cos 分子 <strong>1 - t²</strong>。</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-2 border border-blue-200">
              <p className="font-bold text-blue-800 mb-1">📝 简单例题</p>
              <p className="font-bold text-gray-700 mb-0.5">例：已知 <MathTex tex="\tan\dfrac{\alpha}{2} = 2" />，求 <MathTex tex="\sin\alpha" /> 和 <MathTex tex="\cos\alpha" /></p>
              <div className="space-y-1">
                <div className="border-l-4 border-teal-300 pl-2">
                  <p className="text-lg"><MathTex tex="\sin\alpha = \frac{2 \times 2}{1 + 4} = \frac{4}{5}" /></p>
                </div>
                <div className="border-l-4 border-blue-300 pl-2">
                  <p className="text-lg"><MathTex tex="\cos\alpha = \frac{1 - 4}{1 + 4} = -\frac{3}{5}" /></p>
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 6: 积化和差与和差化积（非必考） */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="ti-prodsum" className="mb-3 scroll-mt-4">
        <Collapsible title="六、积化和差与和差化积（非必考·拓展）" storageKey="trig-identity:prodsum">
          <div className="bg-gray-100 border border-gray-300 rounded-lg p-2 mb-2">
            <p className="text-gray-500">📌 新教材仅作为习题出现，高考极少直接考查。了解即可，不需要背。需要时能推导出来就行。</p>
          </div>
          <div className="space-y-2 text-gray-700">

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <p className="font-bold text-amber-800 mb-1">💡 解决什么问题？</p>
              <p><strong>积化和差：</strong>把两个三角函数的<strong>乘积</strong>变成<strong>和或差</strong>（乘法→加法）。</p>
              <p className="mt-1"><strong>和差化积：</strong>反过来，把<strong>和或差</strong>变成<strong>乘积</strong>（加法→乘法）。</p>
              <p className="mt-1 text-gray-600">什么时候用？遇到三角函数相乘需要化简，或者遇到两个三角函数相加需要因式分解时。</p>
            </div>

            {/* 积化和差 */}
            <div className="bg-orange-50 border-2 border-orange-300 rounded-xl p-3">
              <p className="font-bold text-lg text-orange-700 mb-2">🔑 积化和差公式（乘积→和差）</p>
              <div className="bg-white rounded-lg p-3 border border-orange-200 space-y-2">
                <p className="text-lg"><MathTex tex="\sin\alpha\cos\beta = \frac{1}{2}[\sin(\alpha+\beta) + \sin(\alpha-\beta)]" /></p>
                <p className="text-lg"><MathTex tex="\cos\alpha\sin\beta = \frac{1}{2}[\sin(\alpha+\beta) - \sin(\alpha-\beta)]" /></p>
                <p className="text-lg"><MathTex tex="\cos\alpha\cos\beta = \frac{1}{2}[\cos(\alpha+\beta) + \cos(\alpha-\beta)]" /></p>
                <p className="text-lg"><MathTex tex="\sin\alpha\sin\beta = -\frac{1}{2}[\cos(\alpha+\beta) - \cos(\alpha-\beta)]" /></p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-2 border border-yellow-200 mt-2">
                <p className="font-bold text-yellow-800 mb-1">🧠 怎么推导？不用死背！</p>
                <p>把和角公式 <MathTex tex="\sin(\alpha+\beta)" /> 和 <MathTex tex="\sin(\alpha-\beta)" /> <strong>相加或相减</strong>，就能推出来。</p>
                <p className="mt-1">比如：<MathTex tex="\sin(\alpha+\beta) + \sin(\alpha-\beta) = 2\sin\alpha\cos\beta" /> → 两边除以 2 就是第一个公式。</p>
              </div>
            </div>

            {/* 和差化积 */}
            <div className="bg-indigo-50 border-2 border-indigo-300 rounded-xl p-3">
              <p className="font-bold text-lg text-indigo-700 mb-2">🔑 和差化积公式（和差→乘积）</p>
              <div className="bg-white rounded-lg p-3 border border-indigo-200 space-y-2">
                <p className="text-lg"><MathTex tex="\sin\alpha + \sin\beta = 2\sin\frac{\alpha+\beta}{2}\cos\frac{\alpha-\beta}{2}" /></p>
                <p className="text-lg"><MathTex tex="\sin\alpha - \sin\beta = 2\cos\frac{\alpha+\beta}{2}\sin\frac{\alpha-\beta}{2}" /></p>
                <p className="text-lg"><MathTex tex="\cos\alpha + \cos\beta = 2\cos\frac{\alpha+\beta}{2}\cos\frac{\alpha-\beta}{2}" /></p>
                <p className="text-lg"><MathTex tex="\cos\alpha - \cos\beta = -2\sin\frac{\alpha+\beta}{2}\sin\frac{\alpha-\beta}{2}" /></p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-2 border border-yellow-200 mt-2">
                <p className="font-bold text-yellow-800 mb-1">🧠 记忆口诀</p>
                <p><strong>"正加正，正余余"</strong>：<MathTex tex="\sin\alpha + \sin\beta" /> → 2 <strong>sin</strong>·<strong>cos</strong></p>
                <p><strong>"正减正，余正正"</strong>：<MathTex tex="\sin\alpha - \sin\beta" /> → 2 <strong>cos</strong>·<strong>sin</strong></p>
                <p><strong>"余加余，余余余"</strong>：<MathTex tex="\cos\alpha + \cos\beta" /> → 2 <strong>cos</strong>·<strong>cos</strong></p>
                <p><strong>"余减余，负正正"</strong>：<MathTex tex="\cos\alpha - \cos\beta" /> → <strong>-</strong>2 <strong>sin</strong>·<strong>sin</strong>（注意负号！）</p>
                <p className="mt-1 text-gray-600">括号里都是 <MathTex tex="\frac{\alpha+\beta}{2}" /> 和 <MathTex tex="\frac{\alpha-\beta}{2}" />，一对"半和"一对"半差"。</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-2 border border-blue-200">
              <p className="font-bold text-blue-800 mb-1">📝 简单例题</p>
              <p className="font-bold text-gray-700 mb-0.5">例：求 <MathTex tex="\cos 20° \cdot \cos 40° \cdot \cos 80°" /> 的值</p>
              <div className="space-y-1">
                <div className="border-l-4 border-orange-300 pl-2">
                  <p><strong>技巧：</strong>分子分母同乘 <MathTex tex="2\sin 20°" /></p>
                  <p className="text-lg"><MathTex tex="= \frac{2\sin 20° \cdot \cos 20° \cdot \cos 40° \cdot \cos 80°}{2\sin 20°}" /></p>
                </div>
                <div className="border-l-4 border-blue-300 pl-2">
                  <p><strong>反复用 <MathTex tex="\sin 2\alpha = 2\sin\alpha\cos\alpha" />：</strong></p>
                  <p className="text-lg"><MathTex tex="= \frac{\sin 40° \cdot \cos 40° \cdot \cos 80°}{2\sin 20°} = \frac{\sin 80° \cdot \cos 80°}{4\sin 20°} = \frac{\sin 160°}{8\sin 20°}" /></p>
                </div>
                <div className="border-l-4 border-green-300 pl-2">
                  <p><MathTex tex="\sin 160° = \sin 20°" />，所以结果 = <strong>1/8</strong></p>
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 7: 辅助角公式 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="ti-auxiliary" className="mb-3 scroll-mt-4">
        <Collapsible title="七、辅助角公式（高考最爱）" defaultOpen storageKey="trig-identity:auxiliary" headerExtra={<SpeakButton text={trigIdentityNarrations.auxiliary} />}>
          <p className="text-blue-600 mb-1">🎯 学完你能：把 <MathTex tex="a\sin x + b\cos x" /> 合并成一个 sin，然后求最值、单调区间。</p>
          <p className="text-gray-600 mb-2 text-sm">为什么要学？高考解答题的三角函数大题，几乎每年都要用辅助角公式化简。</p>
          <div className="space-y-2 text-gray-700">

            {/* 引入 */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <p className="font-bold text-amber-800 mb-1">💡 解决什么问题？</p>
              <p>高考大题经常给你化简到这一步：</p>
              <p className="text-lg my-1"><MathTex tex="f(x) = \sin x + \sqrt{3}\cos x" /></p>
              <p>这是一个 <strong>sin 和 cos 的和</strong>，没法直接求最值、单调区间。</p>
              <p className="mt-1">辅助角公式能把它<strong>合并成一个 sin</strong>，然后就能用 5.1 学的图像性质了！</p>
            </div>

            {/* 公式 */}
            <div className="bg-red-50 border-2 border-red-300 rounded-xl p-3">
              <p className="font-bold text-lg text-red-700 mb-2">🔑 辅助角公式</p>
              <div className="bg-white rounded-lg p-3 border border-red-200 mb-2">
                <p className="text-xl text-center"><MathTex tex="a\sin x + b\cos x = \sqrt{a^2 + b^2}\;\sin(x + \varphi)" /></p>
                <p className="text-center mt-2">其中 <MathTex tex="\tan\varphi = \dfrac{b}{a}" /></p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-2 border border-yellow-200">
                <p className="font-bold text-yellow-800 mb-1">🧠 翻译成人话</p>
                <p><strong>前面的系数</strong> <MathTex tex="\sqrt{a^2 + b^2}" /> 就是新的振幅 A</p>
                <p className="mt-1"><strong>φ 怎么求？</strong><MathTex tex="\tan\varphi = \dfrac{b}{a}" />（b 是 cos 的系数，a 是 sin 的系数）</p>
                <p className="mt-1 text-red-600 font-bold">注意：是 b/a，不是 a/b！b 是 cos 前面的，a 是 sin 前面的。</p>
              </div>
            </div>

            {/* 高考标准解题步骤 */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
              <p className="font-bold text-lg text-blue-800 mb-2">📋 高考标准解题步骤（必须掌握）</p>
              <div className="space-y-2">
                <div className="bg-white rounded-lg p-2 border border-blue-100">
                  <p className="font-bold text-blue-700">第①步：提取公因子，凑出 <MathTex tex="\sin x + \sqrt{3}\cos x" /> 的形式</p>
                  <p className="text-gray-600 mt-1">如果系数不是 1，先提取公因子。比如 <MathTex tex="2\sin x + 2\sqrt{3}\cos x = 2(\sin x + \sqrt{3}\cos x)" /></p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-blue-100">
                  <p className="font-bold text-blue-700">第②步：算振幅 <MathTex tex="\sqrt{a^2 + b^2}" /></p>
                  <p className="text-gray-600 mt-1">比如 <MathTex tex="a = 1" />，<MathTex tex="b = \sqrt{3}" /> → <MathTex tex="\sqrt{1 + 3} = 2" /></p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-blue-100">
                  <p className="font-bold text-blue-700">第③步：用和角公式展开 <MathTex tex="\sin(x+\varphi)" /> 对比系数，求 φ</p>
                  <p className="text-gray-600 mt-1"><MathTex tex="\sin(x+\varphi) = \sin x\cos\varphi + \cos x\sin\varphi" /></p>
                  <p className="text-gray-600">对比得 <MathTex tex="\cos\varphi = \frac{a}{\sqrt{a^2+b^2}},\;\sin\varphi = \frac{b}{\sqrt{a^2+b^2}}" /></p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-blue-100">
                  <p className="font-bold text-blue-700">第④步：写出结果，然后用 5.1 的知识求性质</p>
                </div>
              </div>
            </div>

            {/* 实战例题 */}
            <div className="bg-white rounded-lg p-2 border border-blue-200">
              <p className="font-bold text-blue-800 mb-1">📝 实战例题 — 辅助角公式（完整过程）</p>

              <p className="font-bold text-gray-700 mb-0.5">例 1：把 <MathTex tex="f(x) = \sin x + \sqrt{3}\cos x" /> 化为 <MathTex tex="R\sin(x + \varphi)" /> 的形式</p>
              <div className="space-y-1 mb-2">
                <div className="border-l-4 border-red-300 pl-2">
                  <p><strong>第①步：</strong>识别 <MathTex tex="a = 1" />，<MathTex tex="b = \sqrt{3}" /></p>
                </div>
                <div className="border-l-4 border-blue-300 pl-2">
                  <p><strong>第②步 求振幅：</strong></p>
                  <p className="text-lg"><MathTex tex="R = \sqrt{1^2 + (\sqrt{3})^2} = \sqrt{1+3} = 2" /></p>
                </div>
                <div className="border-l-4 border-green-300 pl-2">
                  <p><strong>第③步 求 φ：</strong>提取 <MathTex tex="R = 2" /></p>
                  <p className="text-lg"><MathTex tex="f(x) = 2\!\left(\frac{1}{2}\sin x + \frac{\sqrt{3}}{2}\cos x\right)" /></p>
                  <p className="mt-1">对比：<MathTex tex="\cos\varphi = \frac{1}{2},\;\sin\varphi = \frac{\sqrt{3}}{2}" /> → <MathTex tex="\varphi = \frac{\pi}{3}" /></p>
                </div>
                <p className="font-bold text-green-700 bg-green-50 p-1.5 rounded text-lg">∴ <MathTex tex="f(x) = 2\sin\!\left(x + \frac{\pi}{3}\right)" /></p>
                <div className="bg-gray-50 rounded p-1.5 mt-1">
                  <p><strong>后续可求：</strong>最大值 2，最小值 -2，周期 <MathTex tex="2\pi" /></p>
                  <p>单调递增区间：令 <MathTex tex="-\frac{\pi}{2} \leq x + \frac{\pi}{3} \leq \frac{\pi}{2}" /> → <MathTex tex="-\frac{5\pi}{6} \leq x \leq \frac{\pi}{6}" /></p>
                </div>
              </div>

              <p className="font-bold text-gray-700 mb-0.5">例 2：把 <MathTex tex="f(x) = \sqrt{3}\sin 2x - \cos 2x" /> 化为 <MathTex tex="R\sin(2x + \varphi)" /></p>
              <div className="space-y-1">
                <div className="border-l-4 border-red-300 pl-2">
                  <p><strong>识别：</strong><MathTex tex="a = \sqrt{3}" />（<MathTex tex="\sin 2x" /> 的系数），<MathTex tex="b = -1" />（<MathTex tex="\cos 2x" /> 的系数）</p>
                  <p><strong>注意：</strong><MathTex tex="\cos 2x" /> 前面是负号，所以 <MathTex tex="b = -1" />！</p>
                </div>
                <div className="border-l-4 border-blue-300 pl-2">
                  <p><strong>求振幅：</strong><MathTex tex="R = \sqrt{3 + 1} = 2" /></p>
                </div>
                <div className="border-l-4 border-green-300 pl-2">
                  <p><strong>求 φ：</strong></p>
                  <p className="text-lg"><MathTex tex="f(x) = 2\!\left(\frac{\sqrt{3}}{2}\sin 2x - \frac{1}{2}\cos 2x\right)" /></p>
                  <p className="mt-1"><MathTex tex="\cos\varphi = \frac{\sqrt{3}}{2},\;\sin\varphi = \frac{-1}{2}" /> → <MathTex tex="\varphi = -\frac{\pi}{6}" /></p>
                </div>
                <p className="font-bold text-green-700 bg-green-50 p-1.5 rounded text-lg">∴ <MathTex tex="f(x) = 2\sin\!\left(2x - \frac{\pi}{6}\right)" /></p>
              </div>
            </div>

            {/* 常见搭配速查 */}
            <div className="bg-gray-50 rounded-lg p-2">
              <p className="font-bold text-gray-800 mb-1">⚡ 高考常见搭配速查（直接背）</p>
              <table className="w-full text-base border-collapse">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 p-1.5 text-left">原式</th>
                    <th className="border border-gray-300 p-1.5 text-left">合并结果</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-1.5"><MathTex tex="\sin x + \cos x" /></td>
                    <td className="border border-gray-300 p-1.5"><MathTex tex="\sqrt{2}\sin\!\left(x + \frac{\pi}{4}\right)" /></td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="border border-gray-300 p-1.5"><MathTex tex="\sin x + \sqrt{3}\cos x" /></td>
                    <td className="border border-gray-300 p-1.5"><MathTex tex="2\sin\!\left(x + \frac{\pi}{3}\right)" /></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-1.5"><MathTex tex="\sqrt{3}\sin x + \cos x" /></td>
                    <td className="border border-gray-300 p-1.5"><MathTex tex="2\sin\!\left(x + \frac{\pi}{6}\right)" /></td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="border border-gray-300 p-1.5"><MathTex tex="\sqrt{3}\sin x - \cos x" /></td>
                    <td className="border border-gray-300 p-1.5"><MathTex tex="2\sin\!\left(x - \frac{\pi}{6}\right)" /></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-1.5"><MathTex tex="\sin x - \sqrt{3}\cos x" /></td>
                    <td className="border border-gray-300 p-1.5"><MathTex tex="2\sin\!\left(x - \frac{\pi}{3}\right)" /></td>
                  </tr>
                </tbody>
              </table>
              <p className="text-gray-500 mt-1 text-sm">这些组合高考反复出现，背熟可以秒杀选择填空。</p>
            </div>

            {/* 易错点 */}
            <div className="bg-red-50 rounded-lg p-2 border border-red-200">
              <p className="font-bold text-red-700 mb-1">⚠️ 易错点</p>
              <div className="space-y-1">
                <p>1. <strong>b 的符号别丢！</strong>如果是 <MathTex tex="\sin x - \sqrt{3}\cos x" />，那 <MathTex tex="b = -\sqrt{3}" />，不是 <MathTex tex="\sqrt{3}" />。</p>
                <p>2. <strong><MathTex tex="\tan\varphi = \dfrac{b}{a}" />，不是 <MathTex tex="\dfrac{a}{b}" />！</strong>b 是 cos 的系数，a 是 sin 的系数。</p>
                <p>3. <strong>确定 φ 要同时看 <MathTex tex="\sin\varphi" /> 和 <MathTex tex="\cos\varphi" /> 的符号。</strong>不能只用 <MathTex tex="\tan\varphi" />，因为 <MathTex tex="\tan\varphi" /> 相同的角有两个。</p>
                <p>4. <strong>别忘了 ω。</strong>如果是 <MathTex tex="\sin 2x + \cos 2x" />，合并后是 <MathTex tex="\sqrt{2}\sin(2x + \frac{\pi}{4})" />，不是 <MathTex tex="\sin(x + \frac{\pi}{4})" />。</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 8: 凑角求值与综合应用 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="ti-practice" className="mb-3 scroll-mt-4">
        <Collapsible title="八、凑角求值与综合应用" defaultOpen storageKey="trig-identity:practice" headerExtra={<SpeakButton text={trigIdentityNarrations.practice} />}>
          <p className="text-blue-600 mb-1">🎯 学完你能：用"凑角"技巧求三角函数值，综合运用前面学的所有公式。</p>
          <div className="space-y-2 text-gray-700">

            {/* 凑角核心思想 */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <p className="font-bold text-amber-800 mb-1">💡 什么是"凑角"？</p>
              <p>题目给了一个<strong>非特殊角</strong>（比如 α），让你求另一个角的三角函数值。</p>
              <p className="mt-1">核心思路：把<strong>目标角拆成已知角和特殊角的和或差</strong>。</p>
              <p className="mt-1 font-bold">常见凑法：</p>
              <div className="grid grid-cols-2 gap-2 mt-1">
                <div className="bg-white rounded-lg p-1.5 border border-amber-200">
                  <p className="font-bold"><MathTex tex="\alpha + \beta = " />已知</p>
                  <p>则 <MathTex tex="\beta = " />已知<MathTex tex=" - \alpha" /></p>
                </div>
                <div className="bg-white rounded-lg p-1.5 border border-amber-200">
                  <p className="font-bold"><MathTex tex="2\alpha = \alpha + \alpha" /></p>
                  <p>用二倍角公式</p>
                </div>
                <div className="bg-white rounded-lg p-1.5 border border-amber-200">
                  <p className="font-bold"><MathTex tex="\alpha = (\alpha+\beta) - \beta" /></p>
                  <p>已知 <MathTex tex="\alpha+\beta" /> 和 <MathTex tex="\beta" /></p>
                </div>
                <div className="bg-white rounded-lg p-1.5 border border-amber-200">
                  <p className="font-bold"><MathTex tex="45° = \alpha + (45°-\alpha)" /></p>
                  <p>凑出 45° 相关</p>
                </div>
              </div>
            </div>

            {/* 例题 */}
            <div className="bg-white rounded-lg p-2 border border-blue-200">
              <p className="font-bold text-blue-800 mb-1">📝 综合例题</p>

              <p className="font-bold text-gray-700 mb-0.5">例 1：已知 <MathTex tex="\sin\alpha = \frac{4}{5}" />（α 为第二象限角），求 <MathTex tex="\sin 2\alpha" />、<MathTex tex="\cos 2\alpha" />、<MathTex tex="\tan 2\alpha" /></p>
              <div className="space-y-1 mb-2">
                <div className="border-l-4 border-red-300 pl-2">
                  <p><strong>补全：</strong>α 在第二象限 → <MathTex tex="\cos\alpha" /> {'<'} 0 → <MathTex tex="\cos\alpha = -\frac{3}{5}" /></p>
                </div>
                <div className="border-l-4 border-blue-300 pl-2">
                  <p><strong><MathTex tex="\sin 2\alpha" />：</strong><MathTex tex="2 \cdot \frac{4}{5} \cdot (-\frac{3}{5}) = -\frac{24}{25}" /></p>
                </div>
                <div className="border-l-4 border-green-300 pl-2">
                  <p><strong><MathTex tex="\cos 2\alpha" />：</strong><MathTex tex="(-\frac{3}{5})^2 - (\frac{4}{5})^2 = \frac{9}{25} - \frac{16}{25} = -\frac{7}{25}" /></p>
                </div>
                <div className="border-l-4 border-purple-300 pl-2">
                  <p><strong><MathTex tex="\tan 2\alpha" />：</strong><MathTex tex="\frac{\sin 2\alpha}{\cos 2\alpha} = \frac{-24/25}{-7/25} = \frac{24}{7}" /></p>
                </div>
              </div>

              <p className="font-bold text-gray-700 mb-0.5">例 2：已知 <MathTex tex="\alpha + \beta = \frac{\pi}{4}" />，求 <MathTex tex="(1+\tan\alpha)(1+\tan\beta)" /></p>
              <div className="space-y-1 mb-2">
                <div className="border-l-4 border-red-300 pl-2">
                  <p><strong>思路：</strong>由 <MathTex tex="\alpha+\beta = \frac{\pi}{4}" /> → <MathTex tex="\tan(\alpha+\beta) = \tan\frac{\pi}{4} = 1" /></p>
                </div>
                <div className="border-l-4 border-blue-300 pl-2">
                  <p><strong>用正切和角公式：</strong></p>
                  <p className="text-lg"><MathTex tex="\frac{\tan\alpha + \tan\beta}{1 - \tan\alpha\tan\beta} = 1" /></p>
                  <p>所以 <MathTex tex="\tan\alpha + \tan\beta = 1 - \tan\alpha\tan\beta" /></p>
                </div>
                <div className="border-l-4 border-green-300 pl-2">
                  <p><strong>展开目标式：</strong></p>
                  <p className="text-lg"><MathTex tex="(1+\tan\alpha)(1+\tan\beta) = 1 + \tan\alpha + \tan\beta + \tan\alpha\tan\beta" /></p>
                  <p>代入上面的结论：<MathTex tex="= 1 + (1 - \tan\alpha\tan\beta) + \tan\alpha\tan\beta = 2" /></p>
                </div>
                <p className="font-bold text-green-700 bg-green-50 p-1.5 rounded text-lg">∴ <MathTex tex="(1+\tan\alpha)(1+\tan\beta) = 2" /></p>
              </div>

              <p className="font-bold text-gray-700 mb-0.5">例 3（高考典型大题前半段）：化简 <MathTex tex="f(x) = 2\sin x\cos x + 2\sqrt{3}\cos^2 x - \sqrt{3}" />，并求最小正周期</p>
              <div className="space-y-1">
                <div className="border-l-4 border-red-300 pl-2">
                  <p><strong>第①步 用二倍角：</strong></p>
                  <p><MathTex tex="2\sin x \cdot \cos x = \sin 2x" /></p>
                  <p><MathTex tex="2\sqrt{3}\cos^2 x = \sqrt{3}(2\cos^2 x) = \sqrt{3}(1 + \cos 2x) = \sqrt{3} + \sqrt{3}\cos 2x" /></p>
                </div>
                <div className="border-l-4 border-blue-300 pl-2">
                  <p><strong>第②步 合并：</strong></p>
                  <p className="text-lg"><MathTex tex="f(x) = \sin 2x + \sqrt{3} + \sqrt{3}\cos 2x - \sqrt{3} = \sin 2x + \sqrt{3}\cos 2x" /></p>
                </div>
                <div className="border-l-4 border-green-300 pl-2">
                  <p><strong>第③步 辅助角公式：</strong><MathTex tex="a = 1" />，<MathTex tex="b = \sqrt{3}" /></p>
                  <p className="text-lg"><MathTex tex="= 2\sin\!\left(2x + \frac{\pi}{3}\right)" /></p>
                </div>
                <p className="font-bold text-green-700 bg-green-50 p-1.5 rounded text-lg">∴ <MathTex tex="f(x) = 2\sin\!\left(2x + \frac{\pi}{3}\right)" />，<MathTex tex="T = \frac{2\pi}{2} = \pi" /></p>
              </div>
            </div>

            {/* 解题思路总结 */}
            <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
              <p className="font-bold text-gray-800 mb-2">🗺️ 三角恒等变换的"通用解题路线"</p>
              <div className="space-y-1">
                <div className="flex items-start gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">1</span>
                  <p><strong>看到 <MathTex tex="2\sin\alpha\cos\alpha" /> →</strong> 合成 <MathTex tex="\sin 2\alpha" /></p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">2</span>
                  <p><strong>看到 <MathTex tex="\cos^2\alpha" /> 或 <MathTex tex="\sin^2\alpha" /> →</strong> 用降幂公式降成 <MathTex tex="\cos 2\alpha" /></p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">3</span>
                  <p><strong>看到 <MathTex tex="a\sin(\omega x) + b\cos(\omega x)" /> →</strong> 辅助角公式合并成一个 sin</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">4</span>
                  <p><strong>得到 <MathTex tex="R\sin(\omega x + \varphi)" /> →</strong> 用 5.1 的知识求周期、最值、单调区间</p>
                </div>
              </div>
              <p className="mt-2 text-red-700 font-bold">高考大题套路：展开 → 二倍角合并 → 辅助角合成 → 求性质。几乎每年都这么考！</p>
            </div>

            {/* 全章公式速查表 */}
            <div className="bg-blue-50 rounded-lg p-2 border border-blue-200">
              <p className="font-bold text-blue-800 mb-1">📋 5.2 全章公式速查表</p>
              <table className="w-full text-base border-collapse">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="border border-blue-200 p-1.5 text-left">类别</th>
                    <th className="border border-blue-200 p-1.5 text-left">公式</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-blue-200 p-1.5 font-bold text-red-600" rowSpan={2}>正弦和差</td>
                    <td className="border border-blue-200 p-1.5"><MathTex tex="\sin(\alpha+\beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta" /></td>
                  </tr>
                  <tr>
                    <td className="border border-blue-200 p-1.5"><MathTex tex="\sin(\alpha-\beta) = \sin\alpha\cos\beta - \cos\alpha\sin\beta" /></td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="border border-blue-200 p-1.5 font-bold text-blue-600" rowSpan={2}>余弦和差</td>
                    <td className="border border-blue-200 p-1.5"><MathTex tex="\cos(\alpha+\beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta" /></td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="border border-blue-200 p-1.5"><MathTex tex="\cos(\alpha-\beta) = \cos\alpha\cos\beta + \sin\alpha\sin\beta" /></td>
                  </tr>
                  <tr>
                    <td className="border border-blue-200 p-1.5 font-bold text-green-600">正切和差</td>
                    <td className="border border-blue-200 p-1.5"><MathTex tex="\tan(\alpha\pm\beta) = \dfrac{\tan\alpha \pm \tan\beta}{1 \mp \tan\alpha\tan\beta}" /></td>
                  </tr>
                  <tr className="bg-red-50">
                    <td className="border border-blue-200 p-1.5 font-bold text-red-700">二倍角 sin</td>
                    <td className="border border-blue-200 p-1.5"><MathTex tex="\sin 2\alpha = 2\sin\alpha\cos\alpha" /></td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="border border-blue-200 p-1.5 font-bold text-blue-700" rowSpan={3}>二倍角 cos</td>
                    <td className="border border-blue-200 p-1.5"><MathTex tex="\cos 2\alpha = \cos^2\alpha - \sin^2\alpha" /></td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="border border-blue-200 p-1.5"><MathTex tex="= 2\cos^2\alpha - 1" /></td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="border border-blue-200 p-1.5"><MathTex tex="= 1 - 2\sin^2\alpha" /></td>
                  </tr>
                  <tr>
                    <td className="border border-blue-200 p-1.5 font-bold text-purple-600" rowSpan={2}>降幂</td>
                    <td className="border border-blue-200 p-1.5"><MathTex tex="\sin^2\alpha = \dfrac{1 - \cos 2\alpha}{2}" /></td>
                  </tr>
                  <tr>
                    <td className="border border-blue-200 p-1.5"><MathTex tex="\cos^2\alpha = \dfrac{1 + \cos 2\alpha}{2}" /></td>
                  </tr>
                  <tr className="bg-purple-50">
                    <td className="border border-blue-200 p-1.5 font-bold text-purple-700" rowSpan={2}>半角</td>
                    <td className="border border-blue-200 p-1.5"><MathTex tex="\sin\frac{\alpha}{2} = \pm\sqrt{\frac{1-\cos\alpha}{2}}" /></td>
                  </tr>
                  <tr className="bg-purple-50">
                    <td className="border border-blue-200 p-1.5"><MathTex tex="\cos\frac{\alpha}{2} = \pm\sqrt{\frac{1+\cos\alpha}{2}}" /></td>
                  </tr>
                  <tr className="bg-orange-50">
                    <td className="border border-blue-200 p-1.5 font-bold text-orange-600">辅助角</td>
                    <td className="border border-blue-200 p-1.5"><MathTex tex="a\sin x + b\cos x = \sqrt{a^2+b^2}\,\sin(x+\varphi)" /></td>
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
