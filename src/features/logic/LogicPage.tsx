import { Math, QuizPanel, Collapsible, SpeakButton, PageHeader, LessonLayout, CalloutCard, PracticeCard } from '@/components/shared';
import { logicNarrations } from './data/narrations';
import { logicPractice1, logicPractice2, logicPractice3, logicPractice4, logicPractice5 } from './data/practice';
import { useProgress } from '@/hooks';
import { logicQuizQuestions } from './data/quiz';
import { logicProgressItems } from './data/progress';

export function LogicPage() {
  const { items, toggle } = useProgress('logic', logicProgressItems);

  return (
    <div>
      <PageHeader
        stage="第一阶段 · 数学语言"
        title="1.3 常用逻辑用语"
        narration={logicNarrations.intro}
        subtitle="从零到满分 · 2-3小时搞定"
        tags={[
          { label: '难度 ★★☆☆☆', color: 'green' },
          { label: '高考常考 5分', color: 'blue' },
          { label: '约2-3小时', color: 'purple' },
        ]}
      />

      {/* 知识地图 */}
      <div className="bg-gray-50 rounded-xl p-4 mb-6 text-sm text-gray-600">
        <p className="font-bold text-gray-800 mb-2">📋 知识地图</p>
        <div className="grid grid-cols-2 gap-1">
          <button onClick={() => document.getElementById('logic-prop')?.scrollIntoView({ behavior: 'smooth' })} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">一、命题 → 能判断真假的陈述句</button>
          <button onClick={() => document.getElementById('logic-four')?.scrollIntoView({ behavior: 'smooth' })} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">二、四种命题 → 逆、否、逆否</button>
          <button onClick={() => document.getElementById('logic-cond')?.scrollIntoView({ behavior: 'smooth' })} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">三、充分必要条件 → 集合法判断</button>
          <button onClick={() => document.getElementById('logic-quant')?.scrollIntoView({ behavior: 'smooth' })} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">四、量词与否定 → ∀ ↔ ∃ 互换</button>
          <button onClick={() => document.getElementById('logic-conn')?.scrollIntoView({ behavior: 'smooth' })} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">五、逻辑联结词 → 且、或、非</button>
          <button onClick={() => document.getElementById('logic-quiz')?.scrollIntoView({ behavior: 'smooth' })} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">六、高考真题实战 → 真题模拟</button>
        </div>
      </div>

      {/* 速通路线图 */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-5 mb-6">
        <p className="font-black text-blue-900 text-lg mb-1">速通路线图：这节课就 5 个知识点</p>
        <p className="text-blue-700 text-sm mb-4">每个知识点只需要记 1-2 个规则，不需要逻辑思维，照着做就能拿分！</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
          <div className="bg-white rounded-xl p-3 border border-blue-100">
            <p className="font-bold text-gray-800">① 命题</p>
            <p className="text-gray-500 mt-1">规则：能判断真假的陈述句 = 命题</p>
          </div>
          <div className="bg-white rounded-xl p-3 border border-blue-100">
            <p className="font-bold text-gray-800">② 四种命题</p>
            <p className="text-gray-500 mt-1">规则：逆否命题和原命题同真同假</p>
          </div>
          <div className="bg-white rounded-xl p-3 border border-blue-100">
            <p className="font-bold text-gray-800">③ 充分必要条件</p>
            <p className="text-gray-500 mt-1">规则：解不等式 → 画集合 → 比大小</p>
          </div>
          <div className="bg-white rounded-xl p-3 border border-blue-100">
            <p className="font-bold text-gray-800">④ 量词否定</p>
            <p className="text-gray-500 mt-1">规则：∀ ↔ ∃ 互换 + 条件取反</p>
          </div>
          <div className="bg-white rounded-xl p-3 border border-blue-100">
            <p className="font-bold text-gray-800">⑤ 逻辑联结词</p>
            <p className="text-gray-500 mt-1">规则：且=全真才真，或=一真就真</p>
          </div>
          <div className="bg-yellow-50 rounded-xl p-3 border border-yellow-200">
            <p className="font-bold text-yellow-800">核心秘密</p>
            <p className="text-yellow-700 mt-1">这节课不考逻辑思维，考的是背规则！</p>
          </div>
        </div>
      </div>

      {/* 必背清单 */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-300 rounded-2xl p-5 mb-6">
        <p className="font-black text-red-800 text-lg mb-1">必背清单：只背这 7 条，高考就够了</p>
        <p className="text-red-600 text-sm mb-4">不用理解为什么，死记硬背就行，考试直接套</p>
        <div className="space-y-2 text-sm">
          <div className="bg-white rounded-xl p-3 border border-red-100 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center font-bold shrink-0 text-xs">1</span>
            <div>
              <p className="font-bold text-gray-800">命题 = 能判断真假的陈述句</p>
              <p className="text-gray-500">疑问句、祈使句、感叹句都不是。含未知数的开放语句也不是。</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-3 border border-red-100 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center font-bold shrink-0 text-xs">2</span>
            <div>
              <p className="font-bold text-gray-800">逆否命题与原命题同真同假</p>
              <p className="text-gray-500">原命题难证？直接证逆否命题，效果一样。</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-3 border border-red-100 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center font-bold shrink-0 text-xs">3</span>
            <div>
              <p className="font-bold text-gray-800">谁小谁充分，谁大谁必要</p>
              <p className="text-gray-500">集合 A ⊂ B → A 小 → p 是 q 的充分条件。这一条能解 90% 的充要条件题。</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-3 border border-red-100 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center font-bold shrink-0 text-xs">4</span>
            <div>
              <p className="font-bold text-gray-800">充要条件做题三步：解范围 → 比大小 → 套公式</p>
              <p className="text-gray-500">不要想"谁推出谁"，直接解不等式画数轴比较。</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-3 border border-red-100 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center font-bold shrink-0 text-xs">5</span>
            <div>
              <p className="font-bold text-gray-800">量词否定：∀ ↔ ∃ 互换，条件取反</p>
              <p className="text-gray-500">"所有"变"存在"，"存在"变"所有"，然后 {'>'} 变 ≤，{'<'} 变 ≥，= 变 ≠。</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-3 border border-red-100 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center font-bold shrink-0 text-xs">6</span>
            <div>
              <p className="font-bold text-gray-800">且（∧）：全真才真，有假就假</p>
              <p className="text-gray-500">像严格老师：所有条件都满足才算通过。</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-3 border border-red-100 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center font-bold shrink-0 text-xs">7</span>
            <div>
              <p className="font-bold text-gray-800">或（∨）：有真就真，全假才假</p>
              <p className="text-gray-500">像宽松老师：有一个条件满足就算通过。</p>
            </div>
          </div>
        </div>
      </div>

      <LessonLayout progressItems={items} onToggle={toggle}>
          {/* Part 1: Propositions */}
          <section id="logic-prop" className="mb-8 scroll-mt-4">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                1
              </span>
              命题是什么？
              <SpeakButton text={logicNarrations.proposition} />
            </h2>

            <div className="bg-white rounded-xl border border-gray-200 p-5 mb-4">
              <p className="text-gray-700 mb-4 text-lg font-bold">命题 = 一句可以判断真假的陈述句。</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-green-700 mb-2">✓ 是命题</p>
                  <div className="text-sm text-green-800 space-y-1">
                    <p>"2 是偶数" → 真命题</p>
                    <p>"3 &gt; 5" → 假命题</p>
                    <p>"所有正方形都是矩形" → 真命题</p>
                  </div>
                </div>
                <div className="bg-red-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-red-700 mb-2">✗ 不是命题</p>
                  <div className="text-sm text-red-800 space-y-1">
                    <p>"x &gt; 3" → 真假不确定</p>
                    <p>"请关门" → 祈使句</p>
                    <p>"明天会下雨吗？" → 疑问句</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 text-white rounded-xl p-4 text-center mt-4">
                <p className="text-amber-400 font-bold">判断标准：能不能明确回答"对"或"错"</p>
                <p className="text-sm text-slate-400 mt-1">能 → 是命题。不能 → 不是命题。</p>
              </div>

              <PracticeCard questions={logicPractice1} />
            </div>
          </section>

          {/* Part 2: Four Types of Propositions */}
          <section id="logic-four" className="mb-8 scroll-mt-4">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                2
              </span>
              四种命题
              <SpeakButton text={logicNarrations.fourTypes} />
            </h2>

            <div className="bg-white rounded-xl border border-gray-200 p-5 mb-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-3 py-2 text-left">类型</th>
                      <th className="border border-gray-200 px-3 py-2 text-left">形式</th>
                      <th className="border border-gray-200 px-3 py-2 text-left">变换方法</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['原命题', '若 p，则 q', '—'],
                      ['逆命题', '若 q，则 p', '条件结论互换'],
                      ['否命题', '若 非p，则 非q', '条件结论都取反'],
                      ['逆否命题', '若 非q，则 非p', '先互换再取反'],
                    ].map(([type, form, method], idx) => (
                      <tr key={idx} className="hover:bg-blue-50">
                        <td className="border border-gray-200 px-3 py-2 font-bold">{type}</td>
                        <td className="border border-gray-200 px-3 py-2">{form}</td>
                        <td className="border border-gray-200 px-3 py-2 text-gray-600">{method}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-5 mb-4">
              <p className="font-bold text-gray-800 mb-3">举个例子一看就懂</p>
              <p className="text-sm text-gray-700 mb-2"><strong>原命题：</strong>"若一个数能被4整除，则它能被2整除"（真）</p>
              <div className="bg-gray-50 rounded-lg p-3 text-sm space-y-1.5 text-gray-700">
                <p><strong>逆命题：</strong>"若能被2整除，则能被4整除" → <span className="text-red-600 font-bold">假</span>（6能被2整除但不能被4整除）</p>
                <p><strong>否命题：</strong>"若不能被4整除，则不能被2整除" → <span className="text-red-600 font-bold">假</span>（6不能被4整除但能被2整除）</p>
                <p><strong>逆否命题：</strong>"若不能被2整除，则不能被4整除" → <span className="text-green-600 font-bold">真</span></p>
              </div>
            </div>

            <CalloutCard variant="tip" title="核心规律（必记！）" className="mb-4">
              <p className="text-lg font-bold">原命题 ↔ 逆否命题：同真同假</p>
              <p className="text-sm text-slate-400 mt-2">逆命题 ↔ 否命题：同真同假</p>
              <p className="text-xs text-slate-500 mt-3">高考用法：直接证明原命题很难时 → 可以去证明逆否命题（等价的）</p>
            </CalloutCard>

            <PracticeCard questions={logicPractice2} />
          </section>

          {/* Part 3: Sufficient & Necessary Conditions */}
          <section id="logic-cond" className="mb-8 scroll-mt-4">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                3
              </span>
              充分条件与必要条件（高考核心！）
              <SpeakButton text={logicNarrations.sufficient} />
            </h2>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
              <p className="font-bold text-blue-800 text-sm mb-2">先用生活理解</p>
              <div className="text-sm text-blue-700 space-y-2">
                <p>"<strong>下雨</strong>" → "<strong>地面湿</strong>"</p>
                <p>下雨了，地面一定湿 → "下雨"是"地面湿"的<strong>充分条件</strong>（有它就够了）</p>
                <p>地面湿，不一定下雨（洒水也能湿）→ "下雨"不是"地面湿"的必要条件</p>
                <p>反过来：地面湿，才可能是下雨 → "地面湿"是"下雨"的<strong>必要条件</strong>（没它不行）</p>
              </div>
            </div>

            <CalloutCard variant="tip" title="数学定义" className="mb-4">
              <p>
                若 <Math tex="p \Rightarrow q" />（p 能推出 q），则 p 是 q 的<strong>充分</strong>条件，q 是 p 的<strong>必要</strong>条件。
              </p>
              <p>充分 = “有它就够了”（p 成立，q 一定成立）</p>
              <p>必要 = “没它不行”（q 不成立，p 一定不成立）</p>
            </CalloutCard>

            <Collapsible title="四种情况一张表" defaultOpen storageKey="logic:four-cases">
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-3 py-2 text-center"><Math tex="p \Rightarrow q" /></th>
                      <th className="border border-gray-200 px-3 py-2 text-center"><Math tex="q \Rightarrow p" /></th>
                      <th className="border border-gray-200 px-3 py-2 text-left">p 和 q 的关系</th>
                      <th className="border border-gray-200 px-3 py-2 text-left">记忆口诀</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['✓', '✓', '充要条件', '互相能推，等价'],
                      ['✓', '✗', '充分不必要条件', 'p 够了但不是必须的'],
                      ['✗', '✓', '必要不充分条件', 'p 必须有但光有不够'],
                      ['✗', '✗', '既不充分也不必要', '没关系'],
                    ].map(([pq, qp, rel, memo], idx) => (
                      <tr key={idx} className="hover:bg-blue-50">
                        <td className="border border-gray-200 px-3 py-2 text-center">{pq}</td>
                        <td className="border border-gray-200 px-3 py-2 text-center">{qp}</td>
                        <td className="border border-gray-200 px-3 py-2 font-bold">{rel}</td>
                        <td className="border border-gray-200 px-3 py-2 text-gray-500 text-xs">{memo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Collapsible>

            <Collapsible title="做题菜谱（照着做就行！）" defaultOpen storageKey="logic:recipe">
              <div className="bg-gradient-to-b from-emerald-50 to-green-50 border-2 border-emerald-300 rounded-xl p-5">
                <p className="font-black text-emerald-800 mb-3">遇到充分必要条件的题，永远三步走：</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold shrink-0">1</span>
                    <div className="text-sm">
                      <p className="font-bold text-gray-800">解出范围</p>
                      <p className="text-gray-600">把 p 和 q 各自解成不等式或具体值，得到集合 A 和 B</p>
                      <p className="text-gray-500 mt-1">例：p: x² {'<'} 4 → A = (-2, 2)，q: x {'>'} 0 → B = (0, +∞)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold shrink-0">2</span>
                    <div className="text-sm">
                      <p className="font-bold text-gray-800">比大小</p>
                      <p className="text-gray-600">看 A 和 B 谁包含谁（画数轴最直观）</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold shrink-0">3</span>
                    <div className="text-sm">
                      <p className="font-bold text-gray-800">套公式</p>
                      <p className="text-gray-600">A ⊂ B → 充分不必要 | B ⊂ A → 必要不充分 | A = B → 充要 | 互不包含 → 既不充分也不必要</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 bg-white rounded-lg p-3 text-sm">
                  <p className="font-bold text-gray-800 mb-1">完整示范：</p>
                  <p className="text-gray-600">p: x {'>'} 2，q: x {'>'} 1</p>
                  <p className="text-gray-600">① A = (2, +∞)，B = (1, +∞)</p>
                  <p className="text-gray-600">② A 在 B 里面 → A ⊂ B（A 更小）</p>
                  <p className="text-gray-600">③ A 小 → <strong>p 充分不必要</strong>。完毕，就这么简单！</p>
                </div>
              </div>
            </Collapsible>

            <Collapsible title="武器一：直接推理法" storageKey="logic:direct-method">
              <div className="space-y-3">
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-sm">
                  <p className="font-bold text-gray-800 mb-2">例1：p: x = 1，q: x² = 1</p>
                  <div className="text-gray-600 space-y-1">
                    <p>p → q：x = 1 → x² = 1 ✓（能推出）</p>
                    <p>q → p：x² = 1 → x = ±1，不一定 x = 1 ✗（推不出）</p>
                    <p className="font-bold text-gray-800">结论：p 是 q 的充分不必要条件</p>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-sm">
                  <p className="font-bold text-gray-800 mb-2">例2：p: x² - 3x + 2 = 0，q: x = 1</p>
                  <div className="text-gray-600 space-y-1">
                    <p>p → q：x² - 3x + 2 = 0 → x = 1 或 x = 2，不一定 x = 1 ✗</p>
                    <p>q → p：x = 1 → 1 - 3 + 2 = 0 ✓</p>
                    <p className="font-bold text-gray-800">结论：p 是 q 的必要不充分条件</p>
                  </div>
                </div>
              </div>
            </Collapsible>

            <Collapsible title="武器二：集合法（最好用！）" defaultOpen storageKey="logic:set-method">
              <div className="bg-gray-50 rounded-lg p-4 mb-3 text-sm space-y-2">
                <p>把 p 的范围看成集合 A，q 的范围看成集合 B：</p>
                <p><Math tex="A \subseteq B" /> → p 是 q 的<strong>充分</strong>条件（A 小，A 里的都在 B 里）</p>
                <p><Math tex="B \subseteq A" /> → p 是 q 的<strong>必要</strong>条件（B 小，B 里的都在 A 里）</p>
                <p><Math tex="A = B" /> → <strong>充要</strong>条件</p>
                <p>互不包含 → 既不充分也不必要</p>
              </div>

              <div className="bg-slate-900 text-white rounded-xl p-5 text-center mb-3">
                <p className="text-amber-400 font-bold">口诀：谁小谁充分，谁大谁必要</p>
              </div>

              <div className="space-y-3">
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-sm">
                  <p className="font-bold text-gray-800 mb-2">例1：p: x {'>'} 2，q: x {'>'} 1</p>
                  <p className="text-gray-600">A = (2, +∞)，B = (1, +∞)，A ⊂ B（A 更小）→ p 充分不必要</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-sm">
                  <p className="font-bold text-gray-800 mb-2">例2：<Math tex="p: x^2 < 4" />，q: -1 {'<'} x {'<'} 1</p>
                  <div className="text-gray-600 space-y-1">
                    <p>A = (-2, 2)，B = (-1, 1)</p>
                    <p>B ⊂ A（B 更小）→ q → p ✓，p → q ✗</p>
                    <p className="font-bold text-gray-800">p 是 q 的必要不充分条件</p>
                  </div>
                </div>
              </div>
            </Collapsible>

            <Collapsible title="拆题实战：遇到题先判断用哪种方法" defaultOpen storageKey="logic:decompose">
              <div className="bg-gradient-to-b from-violet-50 to-purple-50 border-2 border-violet-300 rounded-xl p-6 mb-6">
                <p className="font-black text-violet-800 text-lg mb-4">第零步：先看题目长啥样</p>
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-5 border border-violet-200">
                    <p className="font-bold text-violet-800 text-lg mb-2">类型 A：只有一个变量 x</p>
                    <p className="text-gray-600 mb-2">p 和 q 都是关于 x 的不等式或等式</p>
                    <p className="text-violet-600 font-bold text-lg">→ 用集合法</p>
                  </div>
                  <div className="bg-white rounded-xl p-5 border border-violet-200">
                    <p className="font-bold text-violet-800 text-lg mb-2">类型 B：有两个变量 a、b 或者文字题</p>
                    <p className="text-gray-600 mb-2">没法解出一个范围来比大小</p>
                    <p className="text-violet-600 font-bold text-lg">→ 用推理法</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                  <p className="font-bold text-blue-800 text-lg mb-4">实战 1（集合法）</p>
                  <p className="text-gray-700 text-lg mb-4">题目：p: x² {'<'} 4，q: x {'<'} 2</p>

                  <div className="space-y-4">
                    <div className="bg-blue-50 rounded-xl p-4">
                      <p className="font-bold text-blue-800 text-lg mb-2">第 1 步：解范围</p>
                      <p className="text-gray-700">p: x² {'<'} 4</p>
                      <p className="text-gray-700">解出来：-2 {'<'} x {'<'} 2</p>
                      <p className="text-gray-700 font-bold">所以 A = (-2, 2)</p>
                      <p className="text-gray-700 mt-3">q: x {'<'} 2</p>
                      <p className="text-gray-700 font-bold">所以 B = (-∞, 2)</p>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-4">
                      <p className="font-bold text-blue-800 text-lg mb-2">第 2 步：比大小</p>
                      <p className="text-gray-700">A = (-2, 2)，B = (-∞, 2)</p>
                      <p className="text-gray-700 font-bold mt-2">A 在 B 里面，A 更小</p>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-4">
                      <p className="font-bold text-blue-800 text-lg mb-2">第 3 步：套公式</p>
                      <p className="text-gray-700">A 小 → 谁小谁充分</p>
                      <p className="text-blue-800 font-black text-lg mt-2">答案：p 是 q 的充分不必要条件 ✅</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-orange-200 rounded-xl p-6">
                  <p className="font-bold text-orange-800 text-lg mb-2">实战 2（推理法）</p>
                  <p className="text-orange-600 mb-4">2022 新高考 I 卷真题</p>
                  <p className="text-gray-700 text-lg mb-4">p: a {'>'} 0 且 b {'>'} 0，q: a + b {'>'} 0</p>
                  <p className="text-gray-500 mb-4">两个变量 → 没法解范围 → 用推理法</p>

                  <div className="space-y-4">
                    <div className="bg-orange-50 rounded-xl p-4">
                      <p className="font-bold text-orange-800 text-lg mb-2">第 1 步：正推 p → q</p>
                      <p className="text-gray-700">假设 a {'>'} 0 且 b {'>'} 0</p>
                      <p className="text-gray-700">两个正数加一起，肯定大于 0</p>
                      <p className="text-orange-800 font-bold mt-2">所以 q 成立 ✓ 推得出</p>
                    </div>

                    <div className="bg-orange-50 rounded-xl p-4">
                      <p className="font-bold text-orange-800 text-lg mb-2">第 2 步：反推 q → p</p>
                      <p className="text-gray-700">假设 a + b {'>'} 0，能推出 a {'>'} 0 且 b {'>'} 0 吗？</p>
                      <p className="text-gray-700 mt-2">找反例：a = 3，b = -1</p>
                      <p className="text-gray-700">a + b = 2 {'>'} 0 ✓ 但 b = -1 {'<'} 0</p>
                      <p className="text-orange-800 font-bold mt-2">所以 p 不一定成立 ✗ 推不出</p>
                    </div>

                    <div className="bg-orange-50 rounded-xl p-4">
                      <p className="font-bold text-orange-800 text-lg mb-2">第 3 步：查表</p>
                      <p className="text-gray-700">p→q ✓，q→p ✗</p>
                      <p className="text-orange-800 font-black text-lg mt-2">答案：充分不必要条件，选 A ✅</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-slate-900 text-white rounded-xl p-6 text-center">
                <p className="text-amber-400 font-bold text-lg mb-3">推理法万能模板</p>
                <p className="text-lg">不知道用啥方法？就用这三步：</p>
                <div className="space-y-2 mt-3 text-lg">
                  <p>1. 假设 p 成立，看 q 是否一定成立</p>
                  <p>2. 假设 q 成立，看 p 是否一定成立</p>
                  <p className="text-gray-400">（推不出的时候，举一个反例就行）</p>
                  <p>3. 查四种情况表，得出答案</p>
                </div>
              </div>
            </Collapsible>

            <PracticeCard questions={logicPractice3} />

            <CalloutCard variant="warning" title="易错点">
              <p>1. <strong>方向别搞反</strong>：p→q 说的是 p 充分，不是 q 充分</p>
              <p>2. <strong>拿不准就用集合法</strong>：先求出集合 A 和 B，比大小最靠谱</p>
            </CalloutCard>
          </section>

          {/* Part 4: Quantifiers */}
          <section id="logic-quant" className="mb-8 scroll-mt-4">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                4
              </span>
              全称量词与存在量词
              <SpeakButton text={logicNarrations.quantifiers} />
            </h2>

            <Collapsible title="两种量词" defaultOpen storageKey="logic:quantifiers">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                <div className="bg-gray-50 rounded-lg p-4 text-sm">
                  <p className="font-bold mb-1">全称量词 <Math tex="\forall" /></p>
                  <p className="text-gray-600">"对所有的" "对任意的"</p>
                  <p className="mt-2"><Math tex="\forall x \in \mathbb{R},\; x^2 \geq 0" /></p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-sm">
                  <p className="font-bold mb-1">存在量词 <Math tex="\exists" /></p>
                  <p className="text-gray-600">"存在一个" "至少有一个"</p>
                  <p className="mt-2"><Math tex="\exists x \in \mathbb{R},\; x^2 - 1 = 0" /></p>
                </div>
              </div>
            </Collapsible>

            <Collapsible title="否定规则（高考爱考！）" defaultOpen storageKey="logic:negation">
              <div className="bg-slate-900 text-white rounded-xl p-5 text-center mb-3">
                <p className="text-sm text-slate-400 mb-2">做题就两步：换量词 + 查表取反</p>
                <div className="space-y-2">
                  <p><strong>第一步：</strong><Math tex="\forall" /> 变 <Math tex="\exists" />，<Math tex="\exists" /> 变 <Math tex="\forall" /></p>
                  <p><strong>第二步：</strong>对照下表，把条件取反</p>
                </div>
              </div>

              <CalloutCard variant="warning" title="条件取反对照表（背住这个就够了）" icon={null} className="mb-3">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-center">
                  {[
                    ['>', '≤'], ['<', '≥'], ['≥', '<'],
                    ['≤', '>'], ['=', '≠'], ['≠', '='],
                    ['是', '不是'], ['都是', '不都是'], ['大于', '不大于'],
                  ].map(([orig, neg], idx) => (
                    <div key={idx} className="bg-white rounded-lg px-3 py-1.5 border border-amber-100">
                      <span className="text-gray-800">{orig}</span>
                      <span className="text-amber-600 mx-1">→</span>
                      <span className="font-bold text-amber-800">{neg}</span>
                    </div>
                  ))}
                </div>
              </CalloutCard>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-3 py-2 text-left">原命题</th>
                      <th className="border border-gray-200 px-3 py-2 text-left">否定</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['\\forall x \\in \\mathbb{R},\\; x^2 \\geq 0', '\\exists x \\in \\mathbb{R},\\; x^2 < 0'],
                      ['\\exists x \\in \\mathbb{R},\\; x > 1', '\\forall x \\in \\mathbb{R},\\; x \\leq 1'],
                    ].map(([orig, neg], idx) => (
                      <tr key={idx} className="hover:bg-blue-50">
                        <td className="border border-gray-200 px-3 py-2"><Math tex={orig} /></td>
                        <td className="border border-gray-200 px-3 py-2"><Math tex={neg} /></td>
                      </tr>
                    ))}
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-200 px-3 py-2 text-sm">所有学生都及格了</td>
                      <td className="border border-gray-200 px-3 py-2 text-sm">存在一个学生没及格</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-200 px-3 py-2 text-sm">有人迟到了</td>
                      <td className="border border-gray-200 px-3 py-2 text-sm">所有人都没迟到</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <CalloutCard variant="danger" title="易错点：否定 ≠ 否命题！" className="mt-3">
                <p><strong>"否定"</strong>是对整个命题说"不对"（∀ ↔ ∃ 互换 + 条件取反）</p>
                <p><strong>"否命题"</strong>是把条件和结论都取反（若非p则非q）</p>
                <p>两者是<strong>完全不同</strong>的概念！</p>
              </CalloutCard>
            </Collapsible>

            <PracticeCard questions={logicPractice4} />
          </section>

          {/* Part 5: Logical Connectives */}
          <section id="logic-conn" className="mb-8 scroll-mt-4">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                5
              </span>
              逻辑联结词
              <SpeakButton text={logicNarrations.connectives} />
            </h2>

            <div className="bg-white rounded-xl border border-gray-200 p-5 mb-4">
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-bold text-gray-800">p 且 q（<Math tex="p \wedge q" />）</p>
                  <p className="text-gray-600">两个同时成立才为真。口诀：全真才真，一假就假。</p>
                </div>
                <div>
                  <p className="font-bold text-gray-800">p 或 q（<Math tex="p \vee q" />）</p>
                  <p className="text-gray-600">至少一个成立就为真。口诀：一真就真，全假才假。</p>
                </div>
                <div>
                  <p className="font-bold text-gray-800">非 p（<Math tex="\neg p" />）</p>
                  <p className="text-gray-600">真变假，假变真。</p>
                </div>
              </div>
            </div>

            <Collapsible title="真值表（考前背）" storageKey="logic:truth-table">
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse text-center">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-3 py-2">p</th>
                      <th className="border border-gray-200 px-3 py-2">q</th>
                      <th className="border border-gray-200 px-3 py-2">p 且 q</th>
                      <th className="border border-gray-200 px-3 py-2">p 或 q</th>
                      <th className="border border-gray-200 px-3 py-2">非 p</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['真', '真', '真', '真', '假'],
                      ['真', '假', '假', '真', '假'],
                      ['假', '真', '假', '真', '真'],
                      ['假', '假', '假', '假', '真'],
                    ].map(([p, q, and, or, not], idx) => (
                      <tr key={idx} className="hover:bg-blue-50">
                        <td className="border border-gray-200 px-3 py-2">{p}</td>
                        <td className="border border-gray-200 px-3 py-2">{q}</td>
                        <td className="border border-gray-200 px-3 py-2 font-bold">{and}</td>
                        <td className="border border-gray-200 px-3 py-2 font-bold">{or}</td>
                        <td className="border border-gray-200 px-3 py-2 font-bold">{not}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Collapsible>

            <div className="bg-white rounded-xl border border-gray-200 p-5 mb-4 mt-4">
              <p className="font-bold text-gray-800 text-sm mb-2">例：p: 2 {'>'} 1（真），q: 3 是偶数（假）</p>
              <div className="text-sm text-gray-600 space-y-1">
                <p>p 且 q = <strong>假</strong>（q 不成立）</p>
                <p>p 或 q = <strong>真</strong>（p 成立就够了）</p>
                <p>非 p = <strong>假</strong></p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <p className="text-blue-800 text-sm font-bold mb-1">否定时的变换规则：</p>
              <div className="text-blue-700 text-sm space-y-1">
                <p>"p 且 q" 的否定 = "非p <strong>或</strong> 非q"（且变或）</p>
                <p>"p 或 q" 的否定 = "非p <strong>且</strong> 非q"（或变且）</p>
              </div>
              <div className="mt-3 text-sm text-gray-700 space-y-1">
                <p><strong>例：</strong>"x {'>'} 0 且 x {'<'} 5" 的否定 = "x ≤ 0 <strong>或</strong> x ≥ 5"</p>
                <p><strong>例：</strong>"x = 1 或 x = 2" 的否定 = "x ≠ 1 <strong>且</strong> x ≠ 2"</p>
              </div>
            </div>

            <PracticeCard questions={logicPractice5} />
          </section>

          {/* Part 6: Quiz */}
          <section id="logic-quiz" className="mb-8 scroll-mt-4">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-green-500 text-white flex items-center justify-center text-sm font-bold">
                6
              </span>
              高考真题实战
            </h2>
            <QuizPanel module="logic" questions={logicQuizQuestions} title="逻辑用语真题实战" description="12道选择题，覆盖命题判断、四种命题、充分必要条件、量词否定、逻辑联结词全部考点" />
          </section>

          {/* Part 7: Summary */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-purple-500 text-white flex items-center justify-center text-sm font-bold">
                7
              </span>
              知识总结卡片
              <SpeakButton text={logicNarrations.summary} />
            </h2>
            <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-3 text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-slate-400 text-xs mb-1">四种命题</p>
                  <p>原 ↔ 逆否（同真同假）</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs mb-1">充要条件</p>
                  <p>集合法：谁小谁充分</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs mb-1">量词否定</p>
                  <p><Math tex="\forall \leftrightarrow \exists" />，条件取反</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs mb-1">联结词</p>
                  <p>且：全真才真 · 或：一真就真</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs mb-1">否定变换</p>
                  <p>且变或，或变且</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs mb-1">易混概念</p>
                  <p>否定 ≠ 否命题</p>
                </div>
              </div>
              <div className="border-t border-slate-700 pt-3 mt-3">
                <p className="text-amber-400 font-bold text-xs">
                  ⚠ 高考陷阱：充分必要别搞反方向 · "否定"≠"否命题" · 集合法最靠谱
                </p>
              </div>
            </div>
          </section>
      </LessonLayout>
    </div>
  );
}
