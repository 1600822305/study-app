import { Math as MathTex, Collapsible, SpeakButton, PageHeader, LessonLayout, ExportButton, PageBreak, PracticeCard } from '@/components/shared';
import { trigIdentityNarrations } from './data/identity-narrations';
import { trigIdentityProgressItems } from './data/identity-progress';
import { sumDiffPractice, doubleAnglePractice, powerReductionPractice, halfAnglePractice, auxiliaryPractice, comprehensivePractice } from './data/identity-questions';
import { TrigIdentityAnswers } from './identity-answers';
import { useProgress } from '@/hooks';
import { usePrintMode } from '@/hooks/usePrintMode';
import { scrollToId } from '@/lib/scroll';

export function TrigIdentityPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('trig-identity', trigIdentityProgressItems);
  const { isPrinting, printOptions } = usePrintMode();

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
          <button onClick={() => scrollToId('ti-auxiliary')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">五、辅助角公式（高考最爱）</button>
          <button onClick={() => scrollToId('ti-practice')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">六、凑角求值与综合应用</button>
          <button onClick={() => scrollToId('ti-universal')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">七、万能公式 <span className="text-gray-400">（非必考）</span></button>
          <button onClick={() => scrollToId('ti-prodsum')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">八、积化和差与和差化积 <span className="text-gray-400">（非必考）</span></button>
        </div>
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 1: 两角和差公式 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="ti-sumdiff" className="mb-3 scroll-mt-4">
        <Collapsible title="一、两角和差公式" defaultOpen storageKey="trig-identity:sumdiff" headerExtra={<SpeakButton text={trigIdentityNarrations.sumDiff} />}>
          <p className="text-blue-600 mb-0.5">🎯 学完你能：把 <MathTex tex="\sin(\alpha+\beta)" /> 这种"两角合体"拆开来算。</p>
          <p className="text-gray-600 mb-1 text-sm">为什么要学？这是所有三角恒等变换的地基，后面的倍角、辅助角全都从这里推出来。</p>
          <div className="space-y-1 text-gray-700">

           {/* 引入：为什么需要和差公式 */}
           <div className="bg-amber-50 border border-amber-200 rounded-lg p-2">
             <p className="font-bold text-amber-800 mb-0.5">💡 先搞懂一个问题</p>
             <p><MathTex tex="\sin(30° + 60°) = \sin 90° = 1" /></p>
             <p>但是 <MathTex tex="\sin 30° + \sin 60° = \frac{1}{2} + \frac{\sqrt{3}}{2} \approx 1.37 \neq 1" /></p>
             <p className="font-bold text-red-700">所以 <MathTex tex="\sin(\alpha+\beta) \neq \sin\alpha + \sin\beta" /> ！不能直接拆！</p>
             <p>那 <MathTex tex="\sin(\alpha+\beta)" /> 到底等于什么？这就是和角公式要解决的问题。</p>
           </div>

           {/* 三组和差公式 — 每行左公式右口诀 */}
           <div className="space-y-1">
             {/* 正弦 */}
             <div className="bg-white border-l-4 border-red-400 rounded-lg p-1.5 flex gap-2">
               <div className="flex-1 min-w-0">
                 <p className="font-bold text-red-700 mb-0.5">🔑 正弦和差公式（最核心！）</p>
                 <div className="bg-white rounded-lg p-2 border border-gray-200 text-center space-y-1">
                   <p className="text-lg"><MathTex tex="\sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta" /></p>
                   <p className="text-lg"><MathTex tex="\sin(\alpha - \beta) = \sin\alpha\cos\beta - \cos\alpha\sin\beta" /></p>
                 </div>
               </div>
               <div className="w-[210px] shrink-0 bg-yellow-50 rounded-lg p-1.5 border border-yellow-200 text-sm flex flex-col justify-center">
                 <p className="font-bold text-yellow-800 mb-0.5">🧠 口诀：</p>
                 <p><MathTex tex="\sin(\alpha\pm\beta) = \sin\alpha\cos\beta \pm \cos\alpha\sin\beta" /></p>
                 <p className="text-gray-600">"正余 ± 余正"，交叉配对，符号<strong>相同</strong></p>
               </div>
             </div>

             {/* 余弦 */}
             <div className="bg-white border-l-4 border-blue-400 rounded-lg p-1.5 flex gap-2">
               <div className="flex-1 min-w-0">
                 <p className="font-bold text-blue-700 mb-0.5">🔑 余弦和差公式</p>
                 <div className="bg-white rounded-lg p-2 border border-gray-200 text-center space-y-1">
                   <p className="text-lg"><MathTex tex="\cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta" /></p>
                   <p className="text-lg"><MathTex tex="\cos(\alpha - \beta) = \cos\alpha\cos\beta + \sin\alpha\sin\beta" /></p>
                 </div>
               </div>
               <div className="w-[210px] shrink-0 bg-yellow-50 rounded-lg p-1.5 border border-yellow-200 text-sm flex flex-col justify-center">
                 <p className="font-bold text-yellow-800 mb-0.5">🧠 口诀：</p>
                 <p><MathTex tex="\cos(\alpha\pm\beta) = \cos\alpha\cos\beta \mp \sin\alpha\sin\beta" /></p>
                 <p className="text-gray-600">"余余 ∓ 正正"，同名配对，<strong>符号相反</strong>！</p>
               </div>
             </div>

             {/* 正切 */}
             <div className="bg-white border-l-4 border-green-400 rounded-lg p-1.5 flex gap-2">
               <div className="flex-1 min-w-0">
                 <p className="font-bold text-green-700 mb-0.5">🔑 正切和差公式</p>
                 <div className="bg-white rounded-lg p-1 border border-green-200 text-center space-y-0">
                   <p><MathTex tex="\tan(\alpha + \beta) = \dfrac{\tan\alpha + \tan\beta}{1 - \tan\alpha\tan\beta}" /></p>
                   <p><MathTex tex="\tan(\alpha - \beta) = \dfrac{\tan\alpha - \tan\beta}{1 + \tan\alpha\tan\beta}" /></p>
                 </div>
               </div>
               <div className="w-[210px] shrink-0 bg-yellow-50 rounded-lg p-1.5 border border-yellow-200 text-sm flex flex-col justify-center">
                 <p className="font-bold text-yellow-800 mb-0.5">🧠 技巧：</p>
                 <p>分子：两个 tan <strong>直接加减</strong></p>
                 <p>分母：<MathTex tex="1 \mp \tan\alpha\tan\beta" /></p>
                 <p className="text-gray-600">分子好记，分母<strong>符号反</strong></p>
               </div>
             </div>
           </div>

           {/* 对比总结表 */}
           <div className="bg-gray-50 rounded-lg p-1.5">
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
              <p className="font-bold text-blue-800 mb-1.5">📝 实战例题 — 三组公式各练一道 + 混合题</p>

              <div className="grid grid-cols-2 gap-2 mb-2">
                {/* 例1：正弦和差 */}
                <div className="bg-white rounded-lg p-2 border border-gray-200">
                  <p className="font-bold text-gray-800 mb-1">例 1（正弦公式）：求 <MathTex tex="\sin 75°" /></p>
                  <div className="space-y-1">
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                      <div>
                        <p className="font-bold">凑角</p>
                        <p><MathTex tex="75° = 45° + 30°" /></p>
                      </div>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                      <div>
                        <p className="font-bold">套公式展开</p>
                        <p className="text-xl"><MathTex tex="\sin 45°\cos 30° + \cos 45°\sin 30°" /></p>
                      </div>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
                      <div>
                        <p className="font-bold">代入特殊值</p>
                        <p className="text-xl"><MathTex tex="\frac{\sqrt{2}}{2}\!\cdot\!\frac{\sqrt{3}}{2} + \frac{\sqrt{2}}{2}\!\cdot\!\frac{1}{2} = \frac{\sqrt{6}+\sqrt{2}}{4}" /></p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 例2：余弦和差 */}
                <div className="bg-white rounded-lg p-2 border border-gray-200">
                  <p className="font-bold text-gray-800 mb-1">例 2（余弦公式）：求 <MathTex tex="\cos 105°" /></p>
                  <div className="space-y-1">
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                      <div>
                        <p className="font-bold">凑角</p>
                        <p><MathTex tex="105° = 60° + 45°" /></p>
                      </div>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                      <div>
                        <p className="font-bold">套公式（注意<span className="text-red-600">减号</span>！）</p>
                        <p className="text-xl"><MathTex tex="\cos 60°\cos 45° \;{\color{red}-}\; \sin 60°\sin 45°" /></p>
                      </div>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
                      <div>
                        <p className="font-bold">代入特殊值</p>
                        <p className="text-xl"><MathTex tex="\frac{1}{2}\!\cdot\!\frac{\sqrt{2}}{2} - \frac{\sqrt{3}}{2}\!\cdot\!\frac{\sqrt{2}}{2} = \frac{\sqrt{2}-\sqrt{6}}{4}" /></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {/* 例3：正切和差 */}
                <div className="bg-white rounded-lg p-2 border border-gray-200">
                  <p className="font-bold text-gray-800 mb-1">例 3（正切公式）：求 <MathTex tex="\tan 15°" /></p>
                  <div className="space-y-1">
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                      <div>
                        <p className="font-bold">凑角</p>
                        <p><MathTex tex="15° = 45° - 30°" /></p>
                      </div>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                      <div>
                        <p className="font-bold">套公式</p>
                        <p className="text-xl"><MathTex tex="\frac{\tan 45° - \tan 30°}{1 + \tan 45°\tan 30°}" /></p>
                      </div>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
                      <div>
                        <p className="font-bold">代入 + 化简</p>
                        <p className="text-xl"><MathTex tex="\frac{1 - \frac{\sqrt{3}}{3}}{1 + \frac{\sqrt{3}}{3}} = \frac{3-\sqrt{3}}{3+\sqrt{3}} = 2-\sqrt{3}" /></p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 例4：混合 */}
                <div className="bg-white rounded-lg p-2 border border-gray-200">
                  <p className="font-bold text-gray-800 mb-1">例 4（混合）：已知 <MathTex tex="\sin\alpha\!=\!\frac{3}{5}" />, <MathTex tex="\cos\beta\!=\!\frac{12}{13}" />（一象限），求 <MathTex tex="\sin(\alpha\!+\!\beta)" /></p>
                  <div className="space-y-1">
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                      <div>
                        <p className="font-bold">补全（用 <MathTex tex="\sin^2\!+\!\cos^2\!=\!1" />）</p>
                        <p className="text-xl"><MathTex tex="\cos\alpha = \frac{4}{5},\;\; \sin\beta = \frac{5}{13}" /></p>
                      </div>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                      <div>
                        <p className="font-bold">套正弦和角公式</p>
                        <p className="text-xl"><MathTex tex="\frac{3}{5}\!\cdot\!\frac{12}{13} + \frac{4}{5}\!\cdot\!\frac{5}{13}" /></p>
                      </div>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
                      <div>
                        <p className="font-bold">计算</p>
                        <p className="text-xl"><MathTex tex="= \frac{36}{65} + \frac{20}{65} = \frac{56}{65}" /></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 做题步骤 + 易错提醒 */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-2">
              <p className="font-bold text-green-800 mb-0.5">🔥 和差公式做题步骤</p>
              <div className="flex gap-1.5">
                <div className="flex-1 bg-white rounded p-1.5 border border-green-100 text-center">
                  <p className="font-bold text-green-700">①凑角</p>
                  <p className="text-sm text-gray-600">拆成 30°/45°/60° 的 ±</p>
                </div>
                <div className="flex-1 bg-white rounded p-1.5 border border-green-100 text-center">
                  <p className="font-bold text-green-700">②补全</p>
                  <p className="text-sm text-gray-600">用 sin²+cos²=1 求缺值</p>
                </div>
                <div className="flex-1 bg-white rounded p-1.5 border border-green-100 text-center">
                  <p className="font-bold text-green-700">③选公式</p>
                  <p className="text-sm text-gray-600">看求 sin/cos/tan 哪个</p>
                </div>
                <div className="flex-1 bg-white rounded p-1.5 border border-green-100 text-center">
                  <p className="font-bold text-green-700">④代入算</p>
                  <p className="text-sm text-gray-600">先写符号再填数</p>
                </div>
              </div>
              <p className="text-red-600 text-sm mt-1"><strong>⚠️ 注意：</strong>cos 公式符号和括号<strong>相反</strong>！补全时看象限定正负！</p>
            </div>

            {/* 即时训练 */}
            <PracticeCard questions={sumDiffPractice} title="✏️ 即时训练 — 和差公式（5 题）" optionCols={4} printOptionCols={4} />

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 2: 二倍角公式 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="ti-double" className="mb-3 scroll-mt-4">
        <Collapsible title="二、二倍角公式" defaultOpen storageKey="trig-identity:double" headerExtra={<SpeakButton text={trigIdentityNarrations.doubleAngle} />}>
          <p className="text-blue-600 mb-0.5">🎯 学完你能：把 <MathTex tex="\sin 2\alpha" />、<MathTex tex="\cos 2\alpha" /> 展开，或者反过来把展开式合并。</p>
          <p className="text-gray-600 mb-1 text-sm">为什么要学？二倍角公式是高考化简的核心工具，几乎每年都考。</p>
          <div className="space-y-1 text-gray-700">

           {/* 推导思路 */}
           <div className="bg-amber-50 border border-amber-200 rounded-lg p-2">
             <p className="font-bold text-amber-800 mb-0.5">💡 从哪来的？</p>
             <p>二倍角公式<strong>不用额外记忆</strong>，就是和角公式里 <strong>β = α</strong> 的特殊情况：<MathTex tex="\sin(\alpha + \alpha) = 2\sin\alpha\cos\alpha" />。</p>
           </div>

           {/* 三组公式 — 每行左公式右口诀 */}
           <div className="space-y-1">
             {/* sin2α */}
             <div className="bg-white border-l-4 border-red-400 rounded-lg p-1.5 flex gap-2">
               <div className="flex-1 min-w-0">
                 <p className="font-bold text-red-700 mb-0.5">🔑 sin2α（只有一种形式）</p>
                 <div className="bg-white rounded-lg p-1 border border-red-200 text-center">
                   <p className="text-xl"><MathTex tex="\sin 2\alpha = 2\sin\alpha\cos\alpha" /></p>
                 </div>
               </div>
               <div className="w-[210px] shrink-0 bg-yellow-50 rounded-lg p-1.5 border border-yellow-200 text-sm flex flex-col justify-center">
                 <p className="font-bold text-yellow-800 mb-0.5">🧠 口诀：</p>
                 <p><strong>"2倍 = 2·正·余"</strong></p>
                 <p className="text-gray-600">把 sinα 和 cosα 乘起来再乘 2</p>
               </div>
             </div>

             {/* cos2α */}
             <div className="bg-white border-l-4 border-blue-400 rounded-lg p-1.5 flex gap-2">
               <div className="flex-1 min-w-0">
                 <p className="font-bold text-blue-700 mb-0.5">🔑 cos2α（三种形式，必须全记！）</p>
                 <div className="bg-white rounded-lg p-1 border border-blue-200 space-y-0">
                   <div className="flex items-center gap-2">
                     <span className="font-bold text-blue-700 whitespace-nowrap text-sm">①</span>
                     <p className="text-lg"><MathTex tex="\cos 2\alpha = \cos^2\alpha - \sin^2\alpha" /></p>
                   </div>
                   <div className="flex items-center gap-2">
                     <span className="font-bold text-blue-700 whitespace-nowrap text-sm">②</span>
                     <p className="text-lg"><MathTex tex="\cos 2\alpha = 2\cos^2\alpha - 1" /></p>
                   </div>
                   <div className="flex items-center gap-2">
                     <span className="font-bold text-blue-700 whitespace-nowrap text-sm">③</span>
                     <p className="text-lg"><MathTex tex="\cos 2\alpha = 1 - 2\sin^2\alpha" /></p>
                   </div>
                 </div>
               </div>
               <div className="w-[210px] shrink-0 bg-yellow-50 rounded-lg p-1.5 border border-yellow-200 text-sm flex flex-col justify-center">
                 <p className="font-bold text-yellow-800 mb-0.5">🧠 怎么记？</p>
                 <p>① 原始版（直接推出）</p>
                 <p>② 把 sin² 换掉 → <strong>只含 cos</strong></p>
                 <p>③ 把 cos² 换掉 → <strong>只含 sin</strong></p>
                 <p className="mt-0.5 text-red-600 font-bold">高考最爱②和③（能降幂）</p>
               </div>
             </div>

             {/* tan2α */}
             <div className="bg-white border-l-4 border-green-400 rounded-lg p-1.5 flex gap-2">
               <div className="flex-1 min-w-0">
                 <p className="font-bold text-green-700 mb-0.5">🔑 tan2α</p>
                 <div className="bg-white rounded-lg p-1 border border-green-200 text-center">
                   <p className="text-xl"><MathTex tex="\tan 2\alpha = \frac{2\tan\alpha}{1 - \tan^2\alpha}" /></p>
                 </div>
               </div>
               <div className="w-[210px] shrink-0 bg-yellow-50 rounded-lg p-1.5 border border-yellow-200 text-sm flex flex-col justify-center">
                 <p className="font-bold text-yellow-800 mb-0.5">🧠 口诀：</p>
                 <p>就是 tan(α+α)</p>
                 <p>分子 2tanα，分母 1−tan²α</p>
               </div>
             </div>
           </div>

           {/* 实战例题 — 2×2 卡片 */}
           <div className="bg-white rounded-lg p-1.5 border border-blue-200">
              <p className="font-bold text-blue-800 mb-0.5">📝 实战例题 — 二倍角正用 + 逆用</p>

              <div className="grid grid-cols-2 gap-1.5 mb-1">
                {/* 例1：正用 sin2α */}
                <div className="bg-white rounded-lg p-1.5 border border-gray-200">
                  <p className="font-bold text-gray-800 mb-0.5">例 1：已知 <MathTex tex="\sin\alpha\!=\!\frac{3}{5}" />（一象限），求 <MathTex tex="\sin 2\alpha" />, <MathTex tex="\cos 2\alpha" /></p>
                  <div className="space-y-0.5">
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                      <div>
                        <p className="font-bold">补全</p>
                        <p className="text-lg"><MathTex tex="\cos\alpha = \frac{4}{5}" /></p>
                      </div>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                      <div>
                        <p className="font-bold">套 sin2α</p>
                        <p className="text-xl"><MathTex tex="2\!\cdot\!\frac{3}{5}\!\cdot\!\frac{4}{5} = \frac{24}{25}" /></p>
                      </div>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
                      <div>
                        <p className="font-bold">套 cos2α（形式①）</p>
                        <p className="text-xl"><MathTex tex="\frac{16}{25} - \frac{9}{25} = \frac{7}{25}" /></p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 例2：逆用 cos2α */}
                <div className="bg-white rounded-lg p-1.5 border border-gray-200">
                  <p className="font-bold text-gray-800 mb-0.5">例 2（逆用）：化简 <MathTex tex="\cos^2 15° - \sin^2 15°" /></p>
                  <div className="space-y-0.5">
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                      <div>
                        <p className="font-bold">识别公式</p>
                        <p>cos²α − sin²α = cos2α（形式①）</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                      <div>
                        <p className="font-bold">代入 α = 15°</p>
                        <p className="text-xl"><MathTex tex="= \cos 30° = \frac{\sqrt{3}}{2}" /></p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-0.5 text-sm">💡 看到 cos²−sin² → 直接合成 cos2α</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-1.5">
                {/* 例3：逆用 sin2α */}
                <div className="bg-white rounded-lg p-1.5 border border-gray-200">
                  <p className="font-bold text-gray-800 mb-0.5">例 3（逆用）：化简 <MathTex tex="2\sin 22.5°\cos 22.5°" /></p>
                  <div className="space-y-0.5">
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                      <div>
                        <p className="font-bold">识别 2sinαcosα = sin2α</p>
                        <p>α = 22.5°</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                      <div>
                        <p className="font-bold">合成 + 求值</p>
                        <p className="text-xl"><MathTex tex="= \sin 45° = \frac{\sqrt{2}}{2}" /></p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 易错点 */}
                <div className="bg-red-50 rounded-lg p-1.5 border border-red-200">
                  <p className="font-bold text-red-700 mb-0.5">⚠️ 易错点</p>
                  <div className="space-y-0 text-sm">
                    <p>❌ <MathTex tex="\sin 2\alpha \neq 2\sin\alpha" />！别忘了 cosα</p>
                    <p>❌ cos2α <strong>选哪个形式？</strong>看题目给了 sin 还是 cos：</p>
                    <p className="ml-3">给 sinα → 用③；给 cosα → 用②</p>
                    <p>❌ 忘了<strong>逆用</strong>！看到 2sinαcosα → sin2α</p>
                    <p className="ml-3">看到 cos²α−sin²α → cos2α</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 即时训练 */}
            <PracticeCard questions={doubleAnglePractice} title="✏️ 即时训练 — 二倍角公式（2 题）" optionCols={4} printOptionCols={4} />

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 3: 降幂公式 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="ti-power" className="mb-3 scroll-mt-4">
        <Collapsible title="三、降幂公式" defaultOpen storageKey="trig-identity:power" headerExtra={<SpeakButton text={trigIdentityNarrations.powerReduction} />}>
           <p className="text-blue-600 mb-0.5">🎯 学完你能：把 <MathTex tex="\sin^2\alpha" />、<MathTex tex="\cos^2\alpha" /> 降成一次式来计算。</p>
           <p className="text-gray-600 mb-1 text-sm">为什么要学？遇到平方的三角函数，降幂后计算量大大减少。</p>
           <div className="space-y-1 text-gray-700">

            {/* 推导 */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-2">
              <p className="font-bold text-amber-800 mb-0.5">💡 从哪来的？</p>
              <p>就是把 <MathTex tex="\cos 2\alpha" /> 的形式②和③<strong>反过来解</strong>：</p>
              <p>形式② <MathTex tex="\cos 2\alpha = 2\cos^2\alpha - 1" /> → 解出 <MathTex tex="\cos^2\alpha" /> ｜ 形式③ <MathTex tex="\cos 2\alpha = 1 - 2\sin^2\alpha" /> → 解出 <MathTex tex="\sin^2\alpha" /></p>
            </div>

            {/* 两组公式 — 左公式右口诀 */}
            <div className="space-y-1">
              <div className="bg-white border-l-4 border-purple-400 rounded-lg p-1.5 flex gap-2">
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-purple-700 mb-0.5">🔑 降幂公式</p>
                  <div className="bg-white rounded-lg p-2 border border-gray-200 text-center space-y-1">
                    <p className="text-lg"><MathTex tex="\sin^2\alpha = \frac{1 - \cos 2\alpha}{2}" /></p>
                    <p className="text-lg"><MathTex tex="\cos^2\alpha = \frac{1 + \cos 2\alpha}{2}" /></p>
                  </div>
                </div>
                <div className="w-[210px] shrink-0 bg-yellow-50 rounded-lg p-1.5 border border-yellow-200 text-sm flex flex-col justify-center">
                  <p className="font-bold text-yellow-800 mb-0.5">🧠 记忆：正减余加</p>
                  <p><MathTex tex="\sin^2" /> → "1<strong>减</strong>"</p>
                  <p><MathTex tex="\cos^2" /> → "1<strong>加</strong>"</p>
                  <p className="text-gray-600 mt-0.5">分母都是 2，和 cos 和差公式的符号规律一脉相承</p>
                </div>
              </div>
            </div>

            {/* 实战例题 — 卡片网格 */}
            <div className="bg-white rounded-lg p-1.5 border border-blue-200">
              <p className="font-bold text-blue-800 mb-0.5">📝 实战例题 — 降幂公式应用</p>
              <div className="grid grid-cols-2 gap-1.5">
                <div className="bg-white rounded-lg p-1.5 border border-gray-200">
                  <p className="font-bold text-gray-800 mb-0.5">例 1：求 <MathTex tex="\sin^2 15°" /> 的精确值</p>
                  <div className="space-y-0.5">
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                      <div>
                        <p className="font-bold">套降幂公式（sin² → "1减"）</p>
                        <p className="text-xl"><MathTex tex="\sin^2 15° = \frac{1 - \cos 30°}{2}" /></p>
                      </div>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                      <div>
                        <p className="font-bold">代入 cos30° 求值</p>
                        <p className="text-xl"><MathTex tex="= \frac{1 - \frac{\sqrt{3}}{2}}{2} = \frac{2 - \sqrt{3}}{4}" /></p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-1.5 border border-gray-200">
                  <p className="font-bold text-gray-800 mb-0.5">例 2：化简 <MathTex tex="\sin^2\alpha + \cos^2\alpha" />（验证）</p>
                  <div className="space-y-0.5">
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                      <div>
                        <p className="font-bold">两个都降幂</p>
                        <p className="text-xl"><MathTex tex="\frac{1 - \cos 2\alpha}{2} + \frac{1 + \cos 2\alpha}{2}" /></p>
                      </div>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                      <div>
                        <p className="font-bold">cos2α 抵消</p>
                        <p className="text-xl"><MathTex tex="= \frac{2}{2} = 1" /> ✓</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 易错点 */}
            <div className="bg-red-50 rounded-lg p-1.5 border border-red-200">
              <p className="font-bold text-red-700 mb-0.5">⚠️ 易错点</p>
              <div className="space-y-0 text-sm">
                <p>❌ 降幂公式的"角"<strong>翻倍了</strong>！<MathTex tex="\sin^2 15°" /> 用的是 <MathTex tex="\cos 30°" />（不是 cos15°）</p>
                <p>❌ 别和半角公式搞混！降幂公式<strong>没有根号</strong>，结果是平方的值；半角公式才开根号</p>
              </div>
            </div>

            {/* 做题步骤 */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-1.5">
              <p className="font-bold text-green-800 mb-0.5">🔥 降幂公式做题步骤</p>
              <div className="flex gap-1.5">
                <div className="flex-1 bg-white rounded p-1 border border-green-100 text-center">
                  <p className="font-bold text-green-700">①识别</p>
                  <p className="text-sm text-gray-600">看到 sin²或 cos² → 降幂</p>
                </div>
                <div className="flex-1 bg-white rounded p-1 border border-green-100 text-center">
                  <p className="font-bold text-green-700">②选公式</p>
                  <p className="text-sm text-gray-600">sin²→"1减"，cos²→"1加"</p>
                </div>
                <div className="flex-1 bg-white rounded p-1 border border-green-100 text-center">
                  <p className="font-bold text-green-700">③角翻倍</p>
                  <p className="text-sm text-gray-600">α→2α（如 15°→cos30°）</p>
                </div>
                <div className="flex-1 bg-white rounded p-1 border border-green-100 text-center">
                  <p className="font-bold text-green-700">④代入算</p>
                  <p className="text-sm text-gray-600">代特殊值求结果</p>
                </div>
              </div>
            </div>

            {/* 即时训练 */}
            <PracticeCard questions={powerReductionPractice} title="✏️ 即时训练 — 降幂公式（4 题）" optionCols={4} printOptionCols={4} />

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 4: 半角公式 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="ti-halfangle" className="mb-3 scroll-mt-4">
        <Collapsible title="四、半角公式" defaultOpen storageKey="trig-identity:halfangle">
          <p className="text-blue-600 mb-0.5">🎯 学完你能：求 <MathTex tex="\sin\frac{\alpha}{2}" />、<MathTex tex="\cos\frac{\alpha}{2}" />、<MathTex tex="\tan\frac{\alpha}{2}" /> 的值。</p>
          <p className="text-gray-600 mb-1 text-sm">从降幂公式一步推出，口诀："降次必升角，降角必升次"。</p>
          <div className="space-y-1 text-gray-700">

            {/* 推导 */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-2">
              <p className="font-bold text-amber-800 mb-0.5">💡 从哪来的？</p>
              <p>降幂公式 <MathTex tex="\sin^2\alpha = \frac{1-\cos 2\alpha}{2}" /> 中把 α 换成 <MathTex tex="\frac{\alpha}{2}" /> → <MathTex tex="\sin^2\!\frac{\alpha}{2} = \frac{1-\cos\alpha}{2}" /> → 两边开根号就得到了！</p>
            </div>

            {/* 三组公式 — 左公式右口诀 */}
            <div className="space-y-1">
              <div className="bg-white border-l-4 border-red-400 rounded-lg p-1.5 flex gap-2">
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-red-700 mb-0.5">🔑 sin 半角</p>
                  <div className="bg-white rounded-lg p-2 border border-gray-200 text-center">
                    <p className="text-lg"><MathTex tex="\sin\frac{\alpha}{2} = \pm\sqrt{\frac{1 - \cos\alpha}{2}}" /></p>
                  </div>
                </div>
                <div className="w-[210px] shrink-0 bg-yellow-50 rounded-lg p-1.5 border border-yellow-200 text-sm flex flex-col justify-center">
                  <p className="font-bold text-yellow-800 mb-0.5">🧠 口诀：</p>
                  <p>和降幂一样："1<strong>减</strong>"，再<strong>开根号</strong></p>
                  <p className="text-gray-600">± 由 α/2 的象限决定</p>
                </div>
              </div>

              <div className="bg-white border-l-4 border-blue-400 rounded-lg p-1.5 flex gap-2">
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-blue-700 mb-0.5">🔑 cos 半角</p>
                  <div className="bg-white rounded-lg p-2 border border-gray-200 text-center">
                    <p className="text-lg"><MathTex tex="\cos\frac{\alpha}{2} = \pm\sqrt{\frac{1 + \cos\alpha}{2}}" /></p>
                  </div>
                </div>
                <div className="w-[210px] shrink-0 bg-yellow-50 rounded-lg p-1.5 border border-yellow-200 text-sm flex flex-col justify-center">
                  <p className="font-bold text-yellow-800 mb-0.5">🧠 口诀：</p>
                  <p>和降幂一样："1<strong>加</strong>"，再<strong>开根号</strong></p>
                  <p className="text-gray-600">± 由 α/2 的象限决定</p>
                </div>
              </div>

              <div className="bg-white border-l-4 border-green-400 rounded-lg p-1.5 flex gap-2">
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-green-700 mb-0.5">🔑 tan 半角（3 种形式）</p>
                  <div className="bg-white rounded-lg p-1 border border-gray-200 text-center space-y-0">
                    <p className="text-lg"><MathTex tex="\tan\frac{\alpha}{2} = \pm\sqrt{\frac{1 - \cos\alpha}{1 + \cos\alpha}}" /></p>
                    <p className="text-lg"><MathTex tex="= \frac{\sin\alpha}{1 + \cos\alpha} = \frac{1 - \cos\alpha}{\sin\alpha}" /></p>
                  </div>
                </div>
                <div className="w-[210px] shrink-0 bg-yellow-50 rounded-lg p-1.5 border border-yellow-200 text-sm flex flex-col justify-center">
                  <p className="font-bold text-yellow-800 mb-0.5">🧠 技巧：</p>
                  <p>后两种形式<strong>不带 ±</strong>！</p>
                  <p className="text-gray-600">优先用后两种，避免判断象限</p>
                </div>
              </div>
            </div>

            {/* 实战例题 */}
            <div className="bg-white rounded-lg p-1.5 border border-blue-200">
              <p className="font-bold text-blue-800 mb-0.5">📝 实战例题</p>
              <div className="grid grid-cols-2 gap-1.5">
                <div className="bg-white rounded-lg p-1.5 border border-gray-200">
                  <p className="font-bold text-gray-800 mb-0.5">例 1：已知 <MathTex tex="\cos\alpha\!=\!\frac{7}{25}" />，<MathTex tex="\frac{\alpha}{2}\!\in\!(0,\frac{\pi}{2})" />，求 <MathTex tex="\sin\frac{\alpha}{2}" />, <MathTex tex="\cos\frac{\alpha}{2}" /></p>
                  <div className="space-y-1">
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                      <div>
                        <p className="font-bold">判象限：<MathTex tex="\frac{\alpha}{2}" /> 在一象限 → 取正</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                      <div>
                        <p className="font-bold">套公式</p>
                        <p className="text-xl mt-1"><MathTex tex="\sin\frac{\alpha}{2} = \sqrt{\frac{1-\frac{7}{25}}{2}} = \frac{3}{5}" /></p>
                        <p className="text-xl mt-1"><MathTex tex="\cos\frac{\alpha}{2} = \sqrt{\frac{1+\frac{7}{25}}{2}} = \frac{4}{5}" /></p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-1.5 border border-gray-200">
                  <p className="font-bold text-gray-800 mb-0.5">例 2：求 <MathTex tex="\tan 15°" />（用半角公式）</p>
                  <div className="space-y-1">
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                      <div>
                        <p className="font-bold">识别：<MathTex tex="15° = \frac{30°}{2}" /></p>
                      </div>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                      <div>
                        <p className="font-bold">用第三种形式（不带±）</p>
                        <p className="text-xl mt-1"><MathTex tex="\frac{1-\cos 30°}{\sin 30°} = \frac{1-\frac{\sqrt{3}}{2}}{\frac{1}{2}} = 2-\sqrt{3}" /></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 易错点 */}
            {/* 做题步骤 */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-1.5">
              <p className="font-bold text-green-800 mb-0.5">🔥 半角公式做题步骤</p>
              <div className="flex gap-1.5">
                <div className="flex-1 bg-white rounded p-1 border border-green-100 text-center">
                  <p className="font-bold text-green-700">①判象限</p>
                  <p className="text-sm text-gray-600">看 <strong>α/2</strong> 在第几象限</p>
                </div>
                <div className="flex-1 bg-white rounded p-1 border border-green-100 text-center">
                  <p className="font-bold text-green-700">②定正负</p>
                  <p className="text-sm text-gray-600">由象限决定 ± 号</p>
                </div>
                <div className="flex-1 bg-white rounded p-1 border border-green-100 text-center">
                  <p className="font-bold text-green-700">③套公式</p>
                  <p className="text-sm text-gray-600">sin→"1减"，cos→"1加"</p>
                </div>
                <div className="flex-1 bg-white rounded p-1 border border-green-100 text-center">
                  <p className="font-bold text-green-700">④开根号</p>
                  <p className="text-sm text-gray-600">tan 用后两种（不带±）</p>
                </div>
              </div>
            </div>

            {/* 即时训练 */}
            <PracticeCard questions={halfAnglePractice} title="✏️ 即时训练 — 半角公式（3 题）" optionCols={4} printOptionCols={4} />

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 5: 辅助角公式 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="ti-auxiliary" className="mb-3 scroll-mt-4">
        <Collapsible title="五、辅助角公式（高考最爱）" defaultOpen storageKey="trig-identity:auxiliary" headerExtra={<SpeakButton text={trigIdentityNarrations.auxiliary} />}>
          <p className="text-blue-600 mb-0.5">🎯 学完你能：把 <MathTex tex="a\sin x + b\cos x" /> 合并成一个 sin，然后求最值、单调区间。</p>
          <p className="text-gray-600 mb-1 text-sm">为什么要学？高考解答题的三角函数大题，几乎每年都要用辅助角公式化简。</p>
          <div className="space-y-1 text-gray-700">

            {/* 引入 */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-2">
              <p className="font-bold text-amber-800 mb-0.5">💡 解决什么问题？</p>
              <p>高考大题经常化简到 <MathTex tex="f(x) = \sin x + \sqrt{3}\cos x" /> 这种 sin + cos 的和，没法直接求最值。</p>
              <p className="mt-0.5">辅助角公式能把它<strong>合并成一个 sin</strong>，然后用 5.1 学的图像性质！</p>
            </div>

            {/* 公式 — 左公式右口诀 */}
            <div className="bg-white border-l-4 border-orange-400 rounded-lg p-1.5 flex gap-2">
              <div className="flex-1 min-w-0">
                <p className="font-bold text-orange-700 mb-0.5">🔑 辅助角公式</p>
                <div className="bg-white rounded-lg p-2 border border-gray-200 text-center space-y-1">
                  <p className="text-lg"><MathTex tex="a\sin x + b\cos x = \sqrt{a^2 + b^2}\;\sin(x + \varphi)" /></p>
                  <p>其中 <MathTex tex="\cos\varphi = \dfrac{a}{\sqrt{a^2+b^2}},\;\sin\varphi = \dfrac{b}{\sqrt{a^2+b^2}}" /></p>
                </div>
              </div>
              <div className="w-[210px] shrink-0 bg-yellow-50 rounded-lg p-1.5 border border-yellow-200 text-sm flex flex-col justify-center">
                <p className="font-bold text-yellow-800 mb-0.5">🧠 口诀：</p>
                <p><strong>"提振幅，求 φ"</strong></p>
                <p>振幅 = <MathTex tex="\sqrt{a^2+b^2}" /></p>
                <p className="text-red-600 font-bold mt-0.5">φ：cosφ = a/R，sinφ = b/R</p>
                <p className="text-gray-600">b 是 cos 系数，a 是 sin 系数</p>
              </div>
            </div>

            {/* 实战例题 — 2×2 卡片 */}
            <div className="bg-white rounded-lg p-1.5 border border-blue-200">
              <p className="font-bold text-blue-800 mb-0.5">📝 实战例题 — 辅助角公式</p>

              <div className="grid grid-cols-2 gap-1.5 mb-1">
                {/* 例1 */}
                <div className="bg-white rounded-lg p-1.5 border border-gray-200">
                  <p className="font-bold text-gray-800 mb-0.5">例 1：<MathTex tex="\sin x + \sqrt{3}\cos x" /> 化为 <MathTex tex="R\sin(x+\varphi)" /></p>
                  <div className="space-y-0.5">
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                      <div>
                        <p className="font-bold">识别系数</p>
                        <p><MathTex tex="a = 1,\; b = \sqrt{3}" /></p>
                      </div>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                      <div>
                        <p className="font-bold">求振幅</p>
                        <p className="text-lg"><MathTex tex="R = \sqrt{1+3} = 2" /></p>
                      </div>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
                      <div>
                        <p className="font-bold">求 φ（对比系数）</p>
                        <p><MathTex tex="\cos\varphi\!=\!\frac{1}{2},\;\sin\varphi\!=\!\frac{\sqrt{3}}{2}" /> → <MathTex tex="\varphi = \frac{\pi}{3}" /></p>
                      </div>
                    </div>
                  </div>
                  <p className="font-bold text-green-700 bg-green-50 p-1 rounded mt-0.5">∴ <MathTex tex="2\sin\!\left(x + \frac{\pi}{3}\right)" /></p>
                </div>

                {/* 例2 */}
                <div className="bg-white rounded-lg p-1.5 border border-gray-200">
                  <p className="font-bold text-gray-800 mb-0.5">例 2：<MathTex tex="\sqrt{3}\sin 2x - \cos 2x" /> 化为 <MathTex tex="R\sin(2x+\varphi)" /></p>
                  <div className="space-y-0.5">
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                      <div>
                        <p className="font-bold">识别（<span className="text-red-600">注意负号！</span>）</p>
                        <p><MathTex tex="a = \sqrt{3},\; b = -1" /></p>
                      </div>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                      <div>
                        <p className="font-bold">求振幅</p>
                        <p className="text-lg"><MathTex tex="R = \sqrt{3+1} = 2" /></p>
                      </div>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
                      <div>
                        <p className="font-bold">求 φ</p>
                        <p><MathTex tex="\cos\varphi\!=\!\frac{\sqrt{3}}{2},\;\sin\varphi\!=\!-\frac{1}{2}" /> → <MathTex tex="\varphi = -\frac{\pi}{6}" /></p>
                      </div>
                    </div>
                  </div>
                  <p className="font-bold text-green-700 bg-green-50 p-1 rounded mt-0.5">∴ <MathTex tex="2\sin\!\left(2x - \frac{\pi}{6}\right)" /></p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-1.5">
                {/* 例3：求性质 */}
                <div className="bg-white rounded-lg p-1.5 border border-gray-200">
                  <p className="font-bold text-gray-800 mb-0.5">例 3（求性质）：<MathTex tex="f(x)=\sin x+\sqrt{3}\cos x" /> 的单调递增区间</p>
                  <div className="space-y-0.5">
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                      <div>
                        <p className="font-bold">先合并</p>
                        <p><MathTex tex="= 2\sin\!\left(x+\frac{\pi}{3}\right)" /></p>
                      </div>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                      <div>
                        <p className="font-bold">令 <MathTex tex="-\frac{\pi}{2}\!\leq\! x+\frac{\pi}{3}\!\leq\!\frac{\pi}{2}" /></p>
                        <p className="text-lg"><MathTex tex="-\frac{5\pi}{6}\leq x\leq\frac{\pi}{6}" /></p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-0.5 text-sm">💡 最大值 2、最小值 -2、周期 2π</p>
                </div>

                {/* 例4：含 ω 的辅助角 */}
                <div className="bg-white rounded-lg p-1.5 border border-gray-200">
                  <p className="font-bold text-gray-800 mb-0.5">例 4（含 ω）：<MathTex tex="\sin 2x + \cos 2x" /> 化为 <MathTex tex="R\sin(2x+\varphi)" /></p>
                  <div className="space-y-0.5">
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                      <div>
                        <p className="font-bold">识别（ω=2 不变！）</p>
                        <p><MathTex tex="a = 1,\; b = 1" /> → <MathTex tex="R = \sqrt{2}" /></p>
                      </div>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                      <div>
                        <p className="font-bold">求 φ</p>
                        <p><MathTex tex="\cos\varphi\!=\!\frac{1}{\sqrt{2}},\;\sin\varphi\!=\!\frac{1}{\sqrt{2}}" /> → <MathTex tex="\varphi = \frac{\pi}{4}" /></p>
                      </div>
                    </div>
                  </div>
                  <p className="font-bold text-green-700 bg-green-50 p-1 rounded mt-0.5">∴ <MathTex tex="\sqrt{2}\sin\!\left({\color{red}2x} + \frac{\pi}{4}\right)" /></p>
                  <p className="text-red-600 text-sm mt-0.5">⚠️ 是 2x 不是 x！ω 不能丢！</p>
                </div>
              </div>
            </div>

            {/* 常见搭配速查（独立区块） */}
            <div className="bg-gray-50 rounded-lg p-1.5">
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

            <PageBreak />

            {/* 做题步骤 */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-1.5">
              <p className="font-bold text-green-800 mb-0.5">🔥 辅助角公式做题步骤</p>
              <div className="flex gap-1.5">
                <div className="flex-1 bg-white rounded p-1 border border-green-100 text-center">
                  <p className="font-bold text-green-700">①识别 a、b</p>
                  <p className="text-sm text-gray-600">a=sin系数 b=cos系数</p>
                </div>
                <div className="flex-1 bg-white rounded p-1 border border-green-100 text-center">
                  <p className="font-bold text-green-700">②求振幅 R</p>
                  <p className="text-sm text-gray-600"><MathTex tex="\sqrt{a^2+b^2}" /></p>
                </div>
                <div className="flex-1 bg-white rounded p-1 border border-green-100 text-center">
                  <p className="font-bold text-green-700">③求 φ</p>
                  <p className="text-sm text-gray-600">同时看 sinφ 和 cosφ</p>
                </div>
                <div className="flex-1 bg-white rounded p-1 border border-green-100 text-center">
                  <p className="font-bold text-green-700">④求性质</p>
                  <p className="text-sm text-gray-600">最值/周期/单调区间</p>
                </div>
              </div>
              <p className="text-red-600 text-sm mt-1"><strong>⚠️ 注意：</strong>b 的符号别丢！φ 不能只用 tanφ，要看 sinφ 和 cosφ 的<strong>正负</strong>！别忘了 ω（2x 不能变 x）！</p>
            </div>

            {/* 高考大题完整解答示范 */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-1.5">
              <p className="font-bold text-blue-800 mb-0.5">📋 高考大题完整解答示范（展开→二倍角→辅助角→求性质）</p>

              <div className="bg-white rounded-lg p-1.5 border border-blue-100 mb-0.5">
                <p className="font-bold text-gray-800">题目：<MathTex tex="f(x) = 2\sqrt{3}\sin x\cos x + 2\cos^2 x - 1" />，求化简、周期、<MathTex tex="[0,\frac{\pi}{2}]" /> 上最值。</p>
              </div>

              <div className="space-y-0.5">
                <div className="bg-white rounded-lg p-1 border border-gray-200">
                  <p className="font-bold text-blue-700">①二倍角化简：</p>
                  <p><MathTex tex="2\sqrt{3}\sin x\cos x = \sqrt{3}\sin 2x" />，<MathTex tex="2\cos^2 x - 1 = \cos 2x" /></p>
                </div>

                <div className="bg-white rounded-lg p-1 border border-gray-200">
                  <p className="font-bold text-blue-700">②合并：</p>
                  <p><MathTex tex="f(x) = \sqrt{3}\sin 2x + \cos 2x" />　（<MathTex tex="a\!=\!\sqrt{3},\;b\!=\!1,\;\omega\!=\!2" />）</p>
                </div>

                <div className="bg-white rounded-lg p-1 border border-gray-200">
                  <p className="font-bold text-blue-700">③辅助角：</p>
                  <p><MathTex tex="R = 2" /> → 提取：<MathTex tex="2\!\left(\frac{\sqrt{3}}{2}\sin 2x + \frac{1}{2}\cos 2x\right)" /> → 对比 <MathTex tex="\sin(2x+\varphi)" /> 展开式</p>
                  <p><MathTex tex="\cos\varphi = \frac{\sqrt{3}}{2},\;\sin\varphi = \frac{1}{2}" /> → <MathTex tex="\varphi = \frac{\pi}{6}" /></p>
                  <p className="font-bold text-green-700 bg-green-50 p-0.5 rounded">∴ <MathTex tex="f(x) = 2\sin\!\left(2x + \frac{\pi}{6}\right)" /></p>
                </div>

                <div className="grid grid-cols-2 gap-1">
                  <div className="bg-white rounded-lg p-1 border border-gray-200">
                    <p className="font-bold text-blue-700">④周期：</p>
                    <p><MathTex tex="T = \frac{2\pi}{2} = \pi" /></p>
                  </div>
                  <div className="bg-white rounded-lg p-1 border border-gray-200">
                    <p className="font-bold text-blue-700">⑤<MathTex tex="[0,\frac{\pi}{2}]" /> 上最值：</p>
                    <p><MathTex tex="2x+\frac{\pi}{6}\in[\frac{\pi}{6},\frac{7\pi}{6}]" /></p>
                    <p>sin 最大=1 → <strong>f=2</strong>；sin 最小=<MathTex tex="-\frac{1}{2}" /> → <strong>f=−1</strong></p>
                  </div>
                </div>
              </div>
            </div>

            {/* 即时训练 */}
            <PracticeCard questions={auxiliaryPractice} title="✏️ 即时训练 — 辅助角公式（5 题，含真题）" optionCols={4} printOptionCols={4} />

            {/* 学完自查 */}
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-1.5">
              <p className="font-bold text-purple-800 mb-0.5">✅ 辅助角公式学完自查</p>
              <div className="grid grid-cols-2 gap-1">
                <div className="flex items-start gap-1">
                  <span className="text-purple-600">□</span>
                  <p>能把 <MathTex tex="a\sin x + b\cos x" /> 合并成 <MathTex tex="R\sin(x+\varphi)" /></p>
                </div>
                <div className="flex items-start gap-1">
                  <span className="text-purple-600">□</span>
                  <p>能处理 b 为<strong>负数</strong>的情况（如 <MathTex tex="\sin x - \sqrt{3}\cos x" />）</p>
                </div>
                <div className="flex items-start gap-1">
                  <span className="text-purple-600">□</span>
                  <p>能处理含 <strong>ω</strong> 的情况（如 sin2x + cos2x 中保持 2x）</p>
                </div>
                <div className="flex items-start gap-1">
                  <span className="text-purple-600">□</span>
                  <p>合并后能用 5.1 方法求<strong>周期、最值、单调区间</strong></p>
                </div>
                <div className="flex items-start gap-1">
                  <span className="text-purple-600">□</span>
                  <p>能背出 5 组高考常见搭配（速查表）</p>
                </div>
                <div className="flex items-start gap-1">
                  <span className="text-purple-600">□</span>
                  <p>能完成"展开→二倍角→辅助角→求性质"的<strong>完整大题</strong></p>
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 6: 凑角求值与综合应用 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="ti-practice" className="mb-3 scroll-mt-4">
        <Collapsible title="六、凑角求值与综合应用" defaultOpen storageKey="trig-identity:practice" headerExtra={<SpeakButton text={trigIdentityNarrations.practice} />}>
          <p className="text-blue-600 mb-0.5">🎯 学完你能：用"凑角"技巧求三角函数值，综合运用前面学的所有公式。</p>
          <p className="text-gray-600 mb-1 text-sm">为什么要学？高考大题几乎每年都是：化简→辅助角→求性质，这里综合练！</p>
          <div className="space-y-1 text-gray-700">

            {/* 凑角核心思想 — 左公式右口诀风格 */}
            <div className="bg-white border-l-4 border-cyan-400 rounded-lg p-1.5 flex gap-2">
              <div className="flex-1 min-w-0">
                <p className="font-bold text-cyan-700 mb-0.5">🔑 凑角的常见套路</p>
                <div className="bg-white rounded-lg p-2 border border-gray-200 space-y-0.5">
                  <p><MathTex tex="\beta = (\alpha+\beta) - \alpha" /> — 已知和，拆目标角</p>
                  <p><MathTex tex="2\alpha = \alpha + \alpha" /> — 用二倍角公式</p>
                  <p><MathTex tex="\alpha = (\alpha+\beta) - \beta" /> — 已知和与 β</p>
                  <p><MathTex tex="45° = \alpha + (45°\!-\!\alpha)" /> — 凑出特殊角</p>
                </div>
              </div>
              <div className="w-[210px] shrink-0 bg-yellow-50 rounded-lg p-1.5 border border-yellow-200 text-sm flex flex-col justify-center">
                <p className="font-bold text-yellow-800 mb-0.5">🧠 核心思路：</p>
                <p>目标角 = <strong>已知角 ± 特殊角</strong></p>
                <p className="mt-0.5">先想"目标角怎么拆"</p>
                <p>再选<strong>和差/倍角</strong>公式</p>
                <p className="text-red-600 font-bold mt-0.5">象限决定正负号！</p>
              </div>
            </div>

            {/* 实战例题 — 2×2 卡片 */}
            <div className="bg-white rounded-lg p-1.5 border border-blue-200">
              <p className="font-bold text-blue-800 mb-0.5">📝 综合例题</p>

              <div className="grid grid-cols-2 gap-1.5 mb-1">
                {/* 例1 */}
                <div className="bg-white rounded-lg p-1.5 border border-gray-200">
                  <p className="font-bold text-gray-800 mb-0.5">例 1：<MathTex tex="\sin\alpha\!=\!\frac{4}{5}" />（二象限），求 <MathTex tex="\sin 2\alpha" />, <MathTex tex="\cos 2\alpha" /></p>
                  <div className="space-y-0.5">
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                      <div>
                        <p className="font-bold">补全（二象限 cosα{'<'}0）</p>
                        <p><MathTex tex="\cos\alpha = -\frac{3}{5}" /></p>
                      </div>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                      <div>
                        <p className="font-bold">sin2α = 2sinαcosα</p>
                        <p className="text-lg"><MathTex tex="= 2\!\cdot\!\frac{4}{5}\!\cdot\!(-\frac{3}{5}) = -\frac{24}{25}" /></p>
                      </div>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
                      <div>
                        <p className="font-bold">cos2α = cos²α − sin²α</p>
                        <p className="text-lg"><MathTex tex="= \frac{9}{25}-\frac{16}{25} = -\frac{7}{25}" /></p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 例2 */}
                <div className="bg-white rounded-lg p-1.5 border border-gray-200">
                  <p className="font-bold text-gray-800 mb-0.5">例 2：已知 <MathTex tex="\alpha\!+\!\beta\!=\!\frac{\pi}{4}" />，求 <MathTex tex="(1\!+\!\tan\alpha)(1\!+\!\tan\beta)" /></p>
                  <div className="space-y-0.5">
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                      <div>
                        <p className="font-bold">用正切和角公式</p>
                        <p><MathTex tex="\tan(\alpha\!+\!\beta) = 1" /></p>
                        <p>→ <MathTex tex="\tan\alpha\!+\!\tan\beta = 1\!-\!\tan\alpha\tan\beta" /></p>
                      </div>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                      <div>
                        <p className="font-bold">展开 + 代入</p>
                        <p><MathTex tex="1 + \tan\alpha + \tan\beta + \tan\alpha\tan\beta" /></p>
                        <p><MathTex tex="= 1 + (1 - \tan\alpha\tan\beta) + \tan\alpha\tan\beta" /></p>
                      </div>
                    </div>
                  </div>
                  <p className="font-bold text-green-700 bg-green-50 p-1 rounded mt-0.5">∴ 答案 = <strong>2</strong></p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-1.5">
                {/* 例3：高考典型大题 */}
                <div className="bg-white rounded-lg p-1.5 border border-gray-200 col-span-2">
                  <p className="font-bold text-gray-800 mb-0.5">例 3（高考典型）：化简 <MathTex tex="f(x) = 2\sin x\cos x + 2\sqrt{3}\cos^2 x - \sqrt{3}" />，求最小正周期</p>
                  <div className="space-y-0.5">
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                      <div>
                        <p className="font-bold">二倍角化简</p>
                        <p><MathTex tex="2\sin x\cos x = \sin 2x" />；<MathTex tex="2\sqrt{3}\cos^2 x = \sqrt{3}(1+\cos 2x)" /></p>
                      </div>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                      <div>
                        <p className="font-bold">合并同类项</p>
                        <p className="text-lg"><MathTex tex="= \sin 2x + \sqrt{3}\cos 2x + \sqrt{3} - \sqrt{3} = \sin 2x + \sqrt{3}\cos 2x" /></p>
                      </div>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
                      <div>
                        <p className="font-bold">辅助角合并</p>
                        <p className="text-lg"><MathTex tex="= 2\sin\!\left(2x + \frac{\pi}{3}\right)" />，<MathTex tex="T = \frac{2\pi}{2} = \pi" /></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 做题步骤（通用解题路线）*/}
            <div className="bg-green-50 border border-green-200 rounded-lg p-1.5">
              <p className="font-bold text-green-800 mb-0.5">🔥 三角恒等变换"通用解题路线"</p>
              <div className="flex gap-1.5">
                <div className="flex-1 bg-white rounded p-1 border border-green-100 text-center">
                  <p className="font-bold text-green-700">①看到积</p>
                  <p className="text-sm text-gray-600">2sinαcosα → sin2α</p>
                </div>
                <div className="flex-1 bg-white rounded p-1 border border-green-100 text-center">
                  <p className="font-bold text-green-700">②看到平方</p>
                  <p className="text-sm text-gray-600">sin²/cos² → 降幂</p>
                </div>
                <div className="flex-1 bg-white rounded p-1 border border-green-100 text-center">
                  <p className="font-bold text-green-700">③看到 a·sin+b·cos</p>
                  <p className="text-sm text-gray-600">辅助角合成一个 sin</p>
                </div>
                <div className="flex-1 bg-white rounded p-1 border border-green-100 text-center">
                  <p className="font-bold text-green-700">④得 Rsin(ωx+φ)</p>
                  <p className="text-sm text-gray-600">求周期/最值/区间</p>
                </div>
              </div>
              <p className="text-red-600 text-sm mt-1"><strong>⚠️ 高考套路：</strong>展开 → 二倍角合并 → 辅助角合成 → 求性质。几乎每年都这么考！</p>
            </div>

            {/* 例4：高考大题完整 — 求单调区间 */}
            <div className="bg-white rounded-lg p-1.5 border border-blue-200">
              <p className="font-bold text-blue-800 mb-0.5">📝 例 4（高考大题·求单调区间）：<MathTex tex="f(x) = 2\sin^2 x + 2\sqrt{3}\sin x\cos x" />，求单调递增区间</p>
              <div className="space-y-0.5">
                <div className="flex items-start gap-1.5">
                  <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                  <div>
                    <p className="font-bold">降幂 + 二倍角</p>
                    <p><MathTex tex="2\sin^2 x = 1 - \cos 2x" />；<MathTex tex="2\sqrt{3}\sin x\cos x = \sqrt{3}\sin 2x" /></p>
                  </div>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                  <div>
                    <p className="font-bold">合并 + 辅助角</p>
                    <p><MathTex tex="f(x) = 1 + \sqrt{3}\sin 2x - \cos 2x" />（<MathTex tex="a\!=\!\sqrt{3},\;b\!=\!-1" /> → <MathTex tex="R\!=\!2,\;\varphi\!=\!-\frac{\pi}{6}" />）</p>
                    <p><MathTex tex="= 1 + 2\sin\!\left(2x - \frac{\pi}{6}\right)" /></p>
                  </div>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
                  <div>
                    <p className="font-bold">求递增区间（令 sin 的内层在 <MathTex tex="[-\frac{\pi}{2}, \frac{\pi}{2}]" />）</p>
                    <p><MathTex tex="-\frac{\pi}{2} \leq 2x - \frac{\pi}{6} \leq \frac{\pi}{2}" /> → <MathTex tex="-\frac{\pi}{6} \leq x \leq \frac{\pi}{3}" /></p>
                    <p className="font-bold text-green-700">∴ 递增区间 <MathTex tex="\left[-\frac{\pi}{6}+k\pi,\;\frac{\pi}{3}+k\pi\right]" />（k∈Z）</p>
                    <p className="text-gray-600 text-sm">附：最大值 = 1+2 = <strong>3</strong>，最小值 = 1−2 = <strong>−1</strong>，周期 <MathTex tex="T = \pi" /></p>
                  </div>
                </div>
              </div>
            </div>

            {/* 全章公式速查表 */}
            <PageBreak />

            <div className="bg-blue-50 rounded-lg p-1.5 border border-blue-200">
              <p className="font-bold text-blue-800 mb-1">📋 5.2 全章公式速查表</p>
              <table className="w-full text-base border-collapse">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="border border-blue-200 p-1 text-left">类别</th>
                    <th className="border border-blue-200 p-1 text-left">公式</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-blue-200 p-1 font-bold text-red-600" rowSpan={2}>正弦和差</td>
                    <td className="border border-blue-200 p-1"><MathTex tex="\sin(\alpha\pm\beta) = \sin\alpha\cos\beta \pm \cos\alpha\sin\beta" /></td>
                  </tr>
                  <tr>
                    <td className="border border-blue-200 p-1 text-gray-500 text-sm">交叉配对，符号相同</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="border border-blue-200 p-1 font-bold text-blue-600" rowSpan={2}>余弦和差</td>
                    <td className="border border-blue-200 p-1"><MathTex tex="\cos(\alpha\pm\beta) = \cos\alpha\cos\beta \mp \sin\alpha\sin\beta" /></td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="border border-blue-200 p-1 text-gray-500 text-sm">同名配对，符号相反</td>
                  </tr>
                  <tr>
                    <td className="border border-blue-200 p-1 font-bold text-green-600">正切和差</td>
                    <td className="border border-blue-200 p-1"><MathTex tex="\tan(\alpha\pm\beta) = \dfrac{\tan\alpha \pm \tan\beta}{1 \mp \tan\alpha\tan\beta}" /></td>
                  </tr>
                  <tr className="bg-red-50">
                    <td className="border border-blue-200 p-1 font-bold text-red-700">二倍角</td>
                    <td className="border border-blue-200 p-1"><MathTex tex="\sin 2\alpha = 2\sin\alpha\cos\alpha" />　<MathTex tex="\cos 2\alpha = \cos^2\!\alpha - \sin^2\!\alpha = 2\cos^2\!\alpha-1 = 1-2\sin^2\!\alpha" /></td>
                  </tr>
                  <tr>
                    <td className="border border-blue-200 p-1 font-bold text-purple-600">降幂</td>
                    <td className="border border-blue-200 p-1"><MathTex tex="\sin^2\alpha = \frac{1-\cos 2\alpha}{2}" />　<MathTex tex="\cos^2\alpha = \frac{1+\cos 2\alpha}{2}" /></td>
                  </tr>
                  <tr className="bg-purple-50">
                    <td className="border border-blue-200 p-1 font-bold text-purple-700">半角</td>
                    <td className="border border-blue-200 p-1"><MathTex tex="\sin\frac{\alpha}{2} = \pm\sqrt{\frac{1-\cos\alpha}{2}}" />　<MathTex tex="\cos\frac{\alpha}{2} = \pm\sqrt{\frac{1+\cos\alpha}{2}}" /></td>
                  </tr>
                  <tr className="bg-orange-50">
                    <td className="border border-blue-200 p-1 font-bold text-orange-600">辅助角</td>
                    <td className="border border-blue-200 p-1"><MathTex tex="a\sin x + b\cos x = \sqrt{a^2+b^2}\,\sin(x+\varphi)" /></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 补充例题：求对称轴 — 高考高频考点 */}
            <div className="bg-white rounded-lg p-1.5 border border-blue-200">
              <p className="font-bold text-blue-800 mb-0.5">📝 补充例题 — 求对称轴和对称中心（高考高频）</p>
              <div className="grid grid-cols-2 gap-1.5">
                <div className="bg-white rounded-lg p-1.5 border border-gray-200">
                  <p className="font-bold text-gray-800 mb-0.5">例：<MathTex tex="f(x)=2\sin\!\left(2x+\frac{\pi}{6}\right)" /> 的对称轴</p>
                  <div className="space-y-0.5">
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                      <div>
                        <p className="font-bold">令内层 = <MathTex tex="\frac{\pi}{2}+k\pi" /></p>
                        <p><MathTex tex="2x+\frac{\pi}{6} = \frac{\pi}{2}+k\pi" /></p>
                      </div>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                      <div>
                        <p className="font-bold">解出 x</p>
                        <p><MathTex tex="x = \frac{\pi}{6} + \frac{k\pi}{2}" />（k∈Z）</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mt-0.5">💡 对称轴：令 sin=±1 → 内层=π/2+kπ</p>
                </div>
                <div className="bg-white rounded-lg p-1.5 border border-gray-200">
                  <p className="font-bold text-gray-800 mb-0.5">例：同一函数的对称中心</p>
                  <div className="space-y-0.5">
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                      <div>
                        <p className="font-bold">令内层 = <MathTex tex="k\pi" /></p>
                        <p><MathTex tex="2x+\frac{\pi}{6} = k\pi" /></p>
                      </div>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                      <div>
                        <p className="font-bold">解出 x</p>
                        <p><MathTex tex="x = -\frac{\pi}{12} + \frac{k\pi}{2}" /></p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mt-0.5">💡 对称中心：令 sin=0 → 内层=kπ，y坐标为0</p>
                </div>
              </div>
              <div className="bg-red-50 rounded p-1 mt-1 text-sm">
                <p><strong>⚡ 速记：</strong>对称轴 → 内层 = <MathTex tex="\frac{\pi}{2}+k\pi" />（sin 取极值）；对称中心 → 内层 = <MathTex tex="k\pi" />（sin=0，中心在 x 轴上）</p>
              </div>
            </div>

            {/* 即时训练 */}
            <PracticeCard questions={comprehensivePractice} title="✏️ 即时训练 — 综合应用（5 题，含真题）" optionCols={4} printOptionCols={4} />

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 7: 万能公式（非必考） */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="ti-universal" className="mb-3 scroll-mt-4">
        <Collapsible title="七、万能公式（非必考·拓展）" storageKey="trig-identity:universal">
          <div className="bg-gray-100 border border-gray-300 rounded-lg p-1.5 mb-1">
            <p className="text-gray-500">📌 新高考很少直接考查，但了解后能加深对半角公式的理解。</p>
          </div>
          <div className="space-y-1 text-gray-700">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-2">
              <p className="font-bold text-amber-800 mb-0.5">💡 什么是万能公式？</p>
              <p>把 sin α、cos α、tan α <strong>全部用 <MathTex tex="t = \tan\frac{\alpha}{2}" /> 来表示</strong>，所以叫"万能"——一个量搞定一切。</p>
            </div>
            <div className="bg-white border-l-4 border-teal-400 rounded-lg p-1.5 flex gap-2">
              <div className="flex-1 min-w-0">
                <p className="font-bold text-teal-700 mb-0.5">🔑 万能公式（设 <MathTex tex="t = \tan\frac{\alpha}{2}" />）</p>
                <div className="bg-white rounded-lg p-2 border border-gray-200 text-center space-y-1">
                  <p className="text-lg"><MathTex tex="\sin\alpha = \frac{2t}{1 + t^2}" /></p>
                  <p className="text-lg"><MathTex tex="\cos\alpha = \frac{1 - t^2}{1 + t^2}" /></p>
                  <p className="text-lg"><MathTex tex="\tan\alpha = \frac{2t}{1 - t^2}" /></p>
                </div>
              </div>
              <div className="w-[210px] shrink-0 bg-yellow-50 rounded-lg p-1.5 border border-yellow-200 text-sm flex flex-col justify-center">
                <p className="font-bold text-yellow-800 mb-0.5">🧠 记忆技巧：</p>
                <p>sin 和 cos 分母都是 <MathTex tex="1+t^2" /></p>
                <p>sin 分子 <MathTex tex="2t" />，cos 分子 <MathTex tex="1-t^2" /></p>
                <p>tan 就是二倍角公式（α→α/2）</p>
                <p className="text-gray-600 mt-0.5">注意：sin 和 tan 分母<strong>一加一减</strong>！</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-1.5 border border-blue-200">
              <p className="font-bold text-blue-800 mb-0.5">📝 实战例题</p>
              <div className="grid grid-cols-2 gap-1.5">
                <div className="bg-white rounded-lg p-1.5 border border-gray-200">
                  <p className="font-bold text-gray-800 mb-0.5">例：已知 <MathTex tex="\tan\frac{\alpha}{2} = 2" />，求 <MathTex tex="\sin\alpha" /> 和 <MathTex tex="\cos\alpha" /></p>
                  <div className="space-y-0.5">
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                      <div>
                        <p className="font-bold">令 t = 2，代入</p>
                        <p className="text-xl mt-0.5"><MathTex tex="\sin\alpha = \frac{4}{5}" /></p>
                      </div>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                      <div>
                        <p className="font-bold">同理求 cos</p>
                        <p className="text-xl mt-0.5"><MathTex tex="\cos\alpha = -\frac{3}{5}" /></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-red-50 rounded-lg p-1.5 border border-red-200">
                  <p className="font-bold text-red-700 mb-0.5">⚠️ 注意</p>
                  <div className="space-y-0.5 text-sm">
                    <p>❌ sin 和 tan 分母<strong>不一样</strong>（一加一减）</p>
                    <p>❌ <MathTex tex="t^2=1" /> 时 tan 无意义</p>
                    <p>✅ 已知 <MathTex tex="\tan\frac{\alpha}{2}" /> 就能求全部！</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 8: 积化和差与和差化积（非必考） */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="ti-prodsum" className="mb-3 scroll-mt-4">
        <Collapsible title="八、积化和差与和差化积（非必考·拓展）" storageKey="trig-identity:prodsum">
          <div className="bg-gray-100 border border-gray-300 rounded-lg p-1.5 mb-1">
            <p className="text-gray-500">📌 新教材仅作为习题出现，高考极少直接考查。了解即可，需要时能推导出来就行。</p>
          </div>
          <div className="space-y-1 text-gray-700">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-2">
              <p className="font-bold text-amber-800 mb-0.5">💡 解决什么问题？</p>
              <p><strong>积化和差</strong>：乘积→和差 ｜ <strong>和差化积</strong>：和差→乘积</p>
              <p className="text-gray-600">怎么推？把和角公式相加或相减就行，<strong>不用死背</strong>。</p>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <div className="bg-white border-l-4 border-orange-400 rounded-lg p-1.5">
                <p className="font-bold text-orange-700 mb-0.5">🔑 积化和差（乘→加）</p>
                <div className="bg-white rounded-lg p-1.5 border border-gray-200 space-y-0.5">
                  <p><MathTex tex="\sin\alpha\cos\beta = \tfrac{1}{2}[\sin(\alpha\!+\!\beta) + \sin(\alpha\!-\!\beta)]" /></p>
                  <p><MathTex tex="\cos\alpha\sin\beta = \tfrac{1}{2}[\sin(\alpha\!+\!\beta) - \sin(\alpha\!-\!\beta)]" /></p>
                  <p><MathTex tex="\cos\alpha\cos\beta = \tfrac{1}{2}[\cos(\alpha\!+\!\beta) + \cos(\alpha\!-\!\beta)]" /></p>
                  <p><MathTex tex="\sin\alpha\sin\beta = -\tfrac{1}{2}[\cos(\alpha\!+\!\beta) - \cos(\alpha\!-\!\beta)]" /></p>
                </div>
              </div>
              <div className="bg-white border-l-4 border-indigo-400 rounded-lg p-1.5">
                <p className="font-bold text-indigo-700 mb-0.5">🔑 和差化积（加→乘）</p>
                <div className="bg-white rounded-lg p-1.5 border border-gray-200 space-y-0.5">
                  <p><MathTex tex="\sin\alpha + \sin\beta = 2\sin\tfrac{\alpha+\beta}{2}\cos\tfrac{\alpha-\beta}{2}" /></p>
                  <p><MathTex tex="\sin\alpha - \sin\beta = 2\cos\tfrac{\alpha+\beta}{2}\sin\tfrac{\alpha-\beta}{2}" /></p>
                  <p><MathTex tex="\cos\alpha + \cos\beta = 2\cos\tfrac{\alpha+\beta}{2}\cos\tfrac{\alpha-\beta}{2}" /></p>
                  <p><MathTex tex="\cos\alpha - \cos\beta = -2\sin\tfrac{\alpha+\beta}{2}\sin\tfrac{\alpha-\beta}{2}" /></p>
                </div>
              </div>
            </div>
            <div className="bg-yellow-50 rounded-lg p-1.5 border border-yellow-200">
              <p className="font-bold text-yellow-800 mb-0.5">🧠 和差化积口诀</p>
              <div className="grid grid-cols-2 gap-1 text-sm">
                <p><strong>"正加正"</strong> → 2 sin·cos</p>
                <p><strong>"正减正"</strong> → 2 cos·sin</p>
                <p><strong>"余加余"</strong> → 2 cos·cos</p>
                <p><strong>"余减余"</strong> → <strong>−</strong>2 sin·sin</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-1.5 border border-blue-200">
              <p className="font-bold text-blue-800 mb-0.5">📝 实战例题：求 <MathTex tex="\sin 50°\cos 10° + \cos 50°\sin 10°" /> 和 <MathTex tex="\cos 75° + \cos 15°" /></p>
              <p><strong>前半：</strong>积化和差 → <MathTex tex="\sin 50°\cos 10° = \tfrac{1}{2}[\sin 60° + \sin 40°]" />，<MathTex tex="\cos 50°\sin 10° = \tfrac{1}{2}[\sin 60° - \sin 40°]" /></p>
              <p>相加：<MathTex tex="\tfrac{1}{2}\sin 60° + \tfrac{1}{2}\sin 60° = \sin 60° = \frac{\sqrt{3}}{2}" />（其实就是 <MathTex tex="\sin(50°+10°)" /> 的和角公式！）</p>
              <p><strong>后半：</strong>和差化积 → <MathTex tex="\cos 75° + \cos 15° = 2\cos\frac{75°+15°}{2}\cos\frac{75°-15°}{2} = 2\cos 45°\cos 30° = \sqrt{6}/2" /></p>
              <p className="text-gray-500 text-sm">💡 积化和差把乘法拆成加法算；和差化积把加法合成乘法算——两招互逆，按需选用。</p>
            </div>
          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* 打印模式答案区 */}
      {/* ════════════════════════════════════════════════════════ */}
      {isPrinting && printOptions.showAnswers && <TrigIdentityAnswers />}

      </LessonLayout>
    </div>
  );
}
