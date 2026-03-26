import { Math, QuizPanel, Collapsible, SpeakButton, PageHeader, LessonLayout, PracticeCard, ExportButton, PageBreak } from '@/components/shared';
import { logicNarrations } from './data/1.3/1.3-narrations';
import { logicPractice1, logicPractice2, logicPractice3, logicPractice4, logicPractice5 } from './data/1.3/1.3-practice';
import { useProgress, usePrintMode } from '@/hooks';
import { scrollToId } from '@/lib/scroll';
import { logicQuizQuestions } from './data/1.3/1.3-quiz';
import { logicProgressItems } from './data/1.3/1.3-progress';
import { LogicAnswers, logicExplanations } from './1.3-logic-answers';

export function LogicPage() {
  const { items, toggle } = useProgress('logic', logicProgressItems);
  const { isPrinting, printOptions } = usePrintMode();

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

      <div className="flex justify-end mb-4 print:hidden">
        <ExportButton title="1.3 常用逻辑用语" />
      </div>
 
      {/* 知识地图 */}
      <div className="bg-gray-50 rounded-xl p-5 mb-6 text-base text-gray-600">
        <p className="font-bold text-gray-800 mb-3 text-lg">📋 知识地图</p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 leading-7">
          <button onClick={() => scrollToId('logic-prop')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">一、命题 → 能判断真假的陈述句</button>
          <button onClick={() => scrollToId('logic-four')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">二、四种命题 → 逆、否、逆否</button>
          <button onClick={() => scrollToId('logic-cond')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">三、充分必要条件 → 集合法判断</button>
          <button onClick={() => scrollToId('logic-quant')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">四、量词与否定 → ∀ ↔ ∃ 互换</button>
          <button onClick={() => scrollToId('logic-conn')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">五、逻辑联结词 → 且、或、非</button>
          <button onClick={() => scrollToId('logic-quiz')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">六、高考真题实战 → 真题模拟</button>
        </div>
      </div>

      <LessonLayout progressItems={items} onToggle={toggle}>
          
          {/* Part 1: Propositions */}
          <section id="logic-prop" className="mb-6 scroll-mt-4">
            <Collapsible title="一、命题是什么？" defaultOpen storageKey="logic:prop" headerExtra={<SpeakButton text={logicNarrations.proposition} />}>
              <div className="space-y-0 text-lg text-gray-800">

                {/* 定义 */}
                <div className="border border-blue-300 rounded overflow-hidden bg-blue-50">
                  <div className="px-2 py-1 font-bold text-blue-700 border-b border-blue-300 bg-blue-100 text-lg">定义</div>
                  <div className="px-3 py-2">
                    <p><strong>命题 = 能判断真假的陈述句</strong></p>
                  </div>
                </div>

                {/* 是/不是命题对比 */}
                <div className="grid grid-cols-2 gap-0">
                  <div className="border border-green-300 rounded-l overflow-hidden bg-green-50">
                    <div className="px-2 py-1 font-bold text-green-700 border-b border-green-300 bg-green-100">✓ 是命题</div>
                    <div className="px-3 py-2 space-y-1">
                      <p>"2 是偶数" → 真命题</p>
                      <p>"3 {'>'} 5" → 假命题</p>
                      <p>"1+1=3" → 假命题（能判断）</p>
                    </div>
                  </div>
                  <div className="border border-red-300 border-l-0 rounded-r overflow-hidden bg-red-50">
                    <div className="px-2 py-1 font-bold text-red-700 border-b border-red-300 bg-red-100">✗ 不是命题</div>
                    <div className="px-3 py-2 space-y-1">
                      <p>"x {'>'} 3" → 真假不确定</p>
                      <p>"请关门" → 祈使句</p>
                      <p>"明天会下雨吗？" → 疑问句</p>
                    </div>
                  </div>
                </div>

                {/* 判断口诀 */}
                <div className="border border-orange-300 rounded overflow-hidden bg-orange-50">
                  <div className="px-2 py-1 font-bold text-orange-700 border-b border-orange-300 bg-orange-100 text-lg">判断口诀</div>
                  <div className="px-3 py-2">
                    <p><strong>能明确回答"对"或"错"</strong> → 是命题</p>
                    <p><strong>含未知数/疑问句/祈使句</strong> → 不是命题</p>
                  </div>
                </div>

                <PracticeCard questions={logicPractice1} explanations={logicExplanations} optionCols={4} printOptionCols={4} />
              </div>
            </Collapsible>
          </section>

          
          {/* Part 2: Four Types of Propositions */}
          <section id="logic-four" className="mb-6 scroll-mt-4">
            <Collapsible title="二、四种命题" defaultOpen storageKey="logic:four" headerExtra={<SpeakButton text={logicNarrations.fourTypes} />}>
              <div className="space-y-0 text-lg text-gray-800">

                {/* 四种命题表格 */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-50 text-lg">四种命题</div>
                  <table className="w-full border-collapse">
                    <tbody>
                      <tr>
                        <td className="border-b border-r border-gray-300 px-3 py-2 font-bold w-28">原命题</td>
                        <td className="border-b border-r border-gray-300 px-3 py-2">若 p，则 q</td>
                        <td className="border-b border-gray-300 px-3 py-2 text-gray-500">—</td>
                      </tr>
                      <tr>
                        <td className="border-b border-r border-gray-300 px-3 py-2 font-bold">逆命题</td>
                        <td className="border-b border-r border-gray-300 px-3 py-2">若 q，则 p</td>
                        <td className="border-b border-gray-300 px-3 py-2 text-gray-500">条件结论互换</td>
                      </tr>
                      <tr>
                        <td className="border-b border-r border-gray-300 px-3 py-2 font-bold">否命题</td>
                        <td className="border-b border-r border-gray-300 px-3 py-2">若 非p，则 非q</td>
                        <td className="border-b border-gray-300 px-3 py-2 text-gray-500">条件结论都取反</td>
                      </tr>
                      <tr>
                        <td className="border-r border-gray-300 px-3 py-2 font-bold">逆否命题</td>
                        <td className="border-r border-gray-300 px-3 py-2">若 非q，则 非p</td>
                        <td className="px-3 py-2 text-gray-500">先互换再取反</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* 核心规律 */}
                <div className="border border-orange-300 rounded overflow-hidden bg-orange-50">
                  <div className="px-2 py-1 font-bold text-orange-700 border-b border-orange-300 bg-orange-100 text-lg">核心规律（必记！）</div>
                  <div className="px-3 py-2 space-y-1">
                    <p className="text-xl"><strong>原命题 ↔ 逆否命题：同真同假</strong></p>
                    <p className="text-gray-600">逆命题 ↔ 否命题：同真同假</p>
                    <p className="text-gray-500 mt-2">高考用法：原命题难证 → 证逆否命题（等价）</p>
                  </div>
                </div>

                {/* 例题 */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-purple-700 border-b border-gray-400 bg-gray-50 text-lg">例题</div>
                  <div className="px-3 py-2 space-y-1">
                    <p><strong>原命题：</strong>"若能被4整除，则能被2整除"（真）</p>
                    <p><strong>逆命题：</strong>"若能被2整除，则能被4整除" → <span className="text-red-600 font-bold">假</span>（6能被2整除但不能被4整除）</p>
                    <p><strong>逆否命题：</strong>"若不能被2整除，则不能被4整除" → <span className="text-green-600 font-bold">真</span>（和原命题同真假）</p>
                  </div>
                </div>

                <PracticeCard questions={logicPractice2} explanations={logicExplanations} optionCols={4} printOptionCols={4} />

                {/* 易错点 */}
                <div className="border border-red-300 rounded overflow-hidden bg-red-50">
                  <div className="px-2 py-1 font-bold text-red-700 border-b border-red-300 bg-red-100">易错点</div>
                  <div className="px-3 py-2 space-y-1">
                    <p><strong>否命题 ≠ 否定原命题！</strong>否命题是条件结论都取反</p>
                    <p><strong>逆否命题才和原命题等价</strong>，逆命题和否命题不一定</p>
                  </div>
                </div>
              </div>
            </Collapsible>
          </section>

          
          {/* Part 3: Sufficient & Necessary Conditions */}
          <section id="logic-cond" className="mb-6 scroll-mt-4">
            <Collapsible title="三、充分条件与必要条件" defaultOpen storageKey="logic:cond" headerExtra={<SpeakButton text={logicNarrations.sufficient} />}>
              <div className="space-y-0 text-lg text-gray-800">

                {/* 生活理解 */}
                <div className="border border-blue-300 rounded overflow-hidden bg-blue-50">
                  <div className="px-2 py-1 font-bold text-blue-700 border-b border-blue-300 bg-blue-100 text-lg">先用生活理解（零基础必看）</div>
                  <div className="px-3 py-2 space-y-2">
                    <div className="bg-white rounded p-2 border border-blue-200">
                      <p className="font-bold text-blue-800">🌧️ 下雨 → 地面湿</p>
                      <p className="ml-4">下雨了，地面<strong>一定</strong>湿 → "下雨"是"地面湿"的<strong className="text-green-600">充分条件</strong>（有它就够了）</p>
                      <p className="ml-4">地面湿了，<strong>不一定</strong>下雨（洒水也能湿）→ "下雨"<strong className="text-red-600">不是</strong>"地面湿"的必要条件</p>
                    </div>
                    <div className="bg-white rounded p-2 border border-blue-200">
                      <p className="font-bold text-blue-800">🚗 驾照 → 开车</p>
                      <p className="ml-4">没有驾照，<strong>不能</strong>合法开车 → "有驾照"是"开车"的<strong className="text-green-600">必要条件</strong>（没它不行）</p>
                      <p className="ml-4">有驾照，<strong>不一定</strong>会开车（可能没车）→ "有驾照"<strong className="text-red-600">不是</strong>"开车"的充分条件</p>
                    </div>
                  </div>
                </div>

                {/* 定义 */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-purple-700 border-b border-gray-400 bg-gray-50 text-lg">数学定义</div>
                  <div className="px-3 py-2 space-y-1">
                    <p>若 <Math tex="p \Rightarrow q" />（p能推出q），则：</p>
                    <p className="ml-4">• p 是 q 的<strong>充分条件</strong>（有p就够了，q一定成立）</p>
                    <p className="ml-4">• q 是 p 的<strong>必要条件</strong>（q不成立，p也不成立）</p>
                  </div>
                </div>

                {/* 四种情况表 */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-50 text-lg">四种情况速查表</div>
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border-b border-r border-gray-300 px-3 py-2 text-center">p→q</th>
                        <th className="border-b border-r border-gray-300 px-3 py-2 text-center">q→p</th>
                        <th className="border-b border-r border-gray-300 px-3 py-2 text-left">关系</th>
                        <th className="border-b border-gray-300 px-3 py-2 text-left">生活例子</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="border-b border-r border-gray-300 px-3 py-2 text-center">✓</td><td className="border-b border-r border-gray-300 px-3 py-2 text-center">✓</td><td className="border-b border-r border-gray-300 px-3 py-2 font-bold">充要条件</td><td className="border-b border-gray-300 px-3 py-2 text-gray-600">等边三角形↔三边相等</td></tr>
                      <tr><td className="border-b border-r border-gray-300 px-3 py-2 text-center">✓</td><td className="border-b border-r border-gray-300 px-3 py-2 text-center">✗</td><td className="border-b border-r border-gray-300 px-3 py-2 font-bold">充分不必要</td><td className="border-b border-gray-300 px-3 py-2 text-gray-600">下雨→地面湿</td></tr>
                      <tr><td className="border-b border-r border-gray-300 px-3 py-2 text-center">✗</td><td className="border-b border-r border-gray-300 px-3 py-2 text-center">✓</td><td className="border-b border-r border-gray-300 px-3 py-2 font-bold">必要不充分</td><td className="border-b border-gray-300 px-3 py-2 text-gray-600">有驾照→能开车</td></tr>
                      <tr><td className="border-r border-gray-300 px-3 py-2 text-center">✗</td><td className="border-r border-gray-300 px-3 py-2 text-center">✗</td><td className="border-r border-gray-300 px-3 py-2 font-bold">既不充分也不必要</td><td className="px-3 py-2 text-gray-600">下雨↔迟到</td></tr>
                    </tbody>
                  </table>
                </div>

                {/* 核心口诀 */}
                <div className="border border-orange-300 rounded overflow-hidden bg-orange-50">
                  <div className="px-2 py-1 font-bold text-orange-700 border-b border-orange-300 bg-orange-100 text-lg">高考做题秘籍（集合法）</div>
                  <div className="px-3 py-3 space-y-2">
                    <p className="text-xl text-center"><strong>谁小谁充分，谁大谁必要</strong></p>
                    <div className="bg-white rounded p-2 text-center">
                      <p>把 p、q 的范围解成集合 A、B，然后比大小：</p>
                      <p className="mt-1"><strong>A⊂B（A小）</strong> → p充分 | <strong>B⊂A（B小）</strong> → p必要 | <strong>A=B</strong> → 充要</p>
                    </div>
                  </div>
                </div>

                {/* 做题三步 */}
                <div className="border border-green-300 rounded overflow-hidden bg-green-50">
                  <div className="px-2 py-1 font-bold text-green-700 border-b border-green-300 bg-green-100 text-lg">做题三步走（照着做就对）</div>
                  <div className="px-3 py-2 space-y-1">
                    <p><strong>① 解范围</strong>：把 p、q 分别解成不等式，得到集合 A 和 B</p>
                    <p className="ml-4 text-gray-600">例：p: <Math tex="x>2" /> 得 <Math tex="A=(2,+\infty)" />，q: <Math tex="x>1" /> 得 <Math tex="B=(1,+\infty)" /></p>
                    <p><strong>② 比大小</strong>：画数轴看谁的范围更小（谁被谁包含）</p>
                    <p className="ml-4 text-gray-600">例：A在B里面，所以A更小</p>
                    <p><strong>③ 套公式</strong>：小的那个是充分条件，大的那个是必要条件</p>
                    <p className="ml-4 text-gray-600">例：A小，所以p是充分条件</p>
                  </div>
                </div>

                <PageBreak />

                {/* 例题 */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-purple-700 border-b border-gray-400 bg-gray-50 text-lg">例题演示</div>
                  <div className="px-3 py-2 space-y-3">
                    <div className="bg-gray-50 rounded p-2">
                      <p className="font-bold">题目：p: <Math tex="x > 2" />，q: <Math tex="x > 1" />，p是q的什么条件？</p>
                      <p>① 解范围：<Math tex="A = (2, +\infty)" />，<Math tex="B = (1, +\infty)" /></p>
                      <p>② 比大小：A在B里面，A更小</p>
                      <p>③ 套公式：A小，<strong className="text-green-600">p是充分不必要条件</strong></p>
                    </div>
                    <div className="bg-gray-50 rounded p-2">
                      <p className="font-bold">题目：p: <Math tex="x^2 < 4" />，q: <Math tex="-1 < x < 1" /></p>
                      <p>① 解范围：<Math tex="A = (-2, 2)" />，<Math tex="B = (-1, 1)" /></p>
                      <p>② 比大小：B在A里面，B更小</p>
                      <p>③ 套公式：B小（q小），<strong className="text-green-600">p是必要不充分条件</strong></p>
                    </div>
                    <div className="bg-gray-50 rounded p-2">
                      <p className="font-bold">题目：p: <Math tex="x = 1" />，q: <Math tex="x^2 = 1" />，p是q的什么条件？</p>
                      <p>① 解范围：<Math tex="A = \{1\}" />，<Math tex="B = \{-1, 1\}" /></p>
                      <p>② 比大小：A在B里面，A更小</p>
                      <p>③ 套公式：A小，<strong className="text-green-600">p是充分不必要条件</strong></p>
                    </div>
                  </div>
                </div>

                <PracticeCard questions={logicPractice3} explanations={logicExplanations} optionCols={4} printOptionCols={4} />

                {/* 易错点 */}
                <div className="border border-red-300 rounded overflow-hidden bg-red-50">
                  <div className="px-2 py-1 font-bold text-red-700 border-b border-red-300 bg-red-100">易错点</div>
                  <div className="px-3 py-2 space-y-1">
                    <p><strong>别想"谁推出谁"</strong>：直接解范围比大小，不会错</p>
                    <p><strong>记住口诀</strong>：谁小谁充分，谁大谁必要</p>
                  </div>
                </div>
              </div>
            </Collapsible>
          </section>

          
          {/* Part 4: Quantifiers */}
          <section id="logic-quant" className="mb-6 scroll-mt-4">
            <Collapsible title="四、全称量词与存在量词" defaultOpen storageKey="logic:quant" headerExtra={<SpeakButton text={logicNarrations.quantifiers} />}>
              <div className="space-y-0 text-lg text-gray-800">

                {/* 生活理解 */}
                <div className="border border-blue-300 rounded overflow-hidden bg-blue-50">
                  <div className="px-2 py-1 font-bold text-blue-700 border-b border-blue-300 bg-blue-100 text-lg">先用生活理解</div>
                  <div className="px-3 py-2 space-y-2">
                    <div className="bg-white rounded p-2 border border-blue-200">
                      <p className="font-bold text-blue-800">👥 "所有人都到齐了" = 全称量词 <Math tex="\forall" /></p>
                      <p className="ml-4">每一个人都满足条件，<strong>一个都不能少</strong></p>
                    </div>
                    <div className="bg-white rounded p-2 border border-blue-200">
                      <p className="font-bold text-green-800">👤 "有人迟到了" = 存在量词 <Math tex="\exists" /></p>
                      <p className="ml-4">至少有一个人满足条件，<strong>有一个就够</strong></p>
                    </div>
                  </div>
                </div>

                {/* 数学写法 */}
                <div className="grid grid-cols-2 gap-0">
                  <div className="border border-blue-300 rounded-l overflow-hidden">
                    <div className="px-2 py-1 font-bold text-blue-700 border-b border-blue-300 bg-blue-100">全称量词 <Math tex="\forall" />（所有）</div>
                    <div className="px-3 py-2 space-y-1">
                      <p><Math tex="\forall x \in \mathbb{R},\; x^2 \geq 0" /></p>
                      <p className="text-gray-600">所有实数的平方都≥0</p>
                    </div>
                  </div>
                  <div className="border border-green-300 border-l-0 rounded-r overflow-hidden">
                    <div className="px-2 py-1 font-bold text-green-700 border-b border-green-300 bg-green-100">存在量词 <Math tex="\exists" />（有一个）</div>
                    <div className="px-3 py-2 space-y-1">
                      <p><Math tex="\exists x \in \mathbb{R},\; x^2 = 4" /></p>
                      <p className="text-gray-600">存在实数的平方等于4</p>
                    </div>
                  </div>
                </div>

                {/* 否定规则 - 核心 */}
                <div className="border border-orange-300 rounded overflow-hidden bg-orange-50">
                  <div className="px-2 py-1 font-bold text-orange-700 border-b border-orange-300 bg-orange-100 text-lg">否定规则（高考必考！）</div>
                  <div className="px-3 py-2 space-y-2">
                    <p className="text-xl text-center font-bold">两步：① 换量词 ② 条件取反</p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-white rounded p-2 text-center">
                        <p><Math tex="\forall" /> 变 <Math tex="\exists" /></p>
                        <p className="text-gray-600">"所有"变"存在"</p>
                      </div>
                      <div className="bg-white rounded p-2 text-center">
                        <p>{'>'} 变 ≤，= 变 ≠</p>
                        <p className="text-gray-600">条件取反</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 例题演示 */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-purple-700 border-b border-gray-400 bg-gray-50 text-lg">例题演示</div>
                  <div className="px-3 py-2 space-y-2">
                    <div className="bg-gray-50 rounded p-2">
                      <p><strong>原命题：</strong>"所有学生都及格了"</p>
                      <p>① 换量词："所有"变"存在"</p>
                      <p>② 条件取反："及格"变"没及格"</p>
                      <p><strong className="text-green-600">否定：</strong>"存在一个学生没及格"</p>
                    </div>
                    <div className="bg-gray-50 rounded p-2">
                      <p><strong>原命题：</strong><Math tex="\forall x \in \mathbb{R},\; x^2 \geq 0" /></p>
                      <p>① <Math tex="\forall" /> 变 <Math tex="\exists" /></p>
                      <p>② ≥ 变 {'<'}</p>
                      <p><strong className="text-green-600">否定：</strong><Math tex="\exists x \in \mathbb{R},\; x^2 < 0" /></p>
                    </div>
                  </div>
                </div>

                <PracticeCard questions={logicPractice4} explanations={logicExplanations} optionCols={4} printOptionCols={4} />
              </div>
            </Collapsible>
          </section>

          
          {/* Part 5: Logical Connectives */}
          <section id="logic-conn" className="mb-6 scroll-mt-4">
            <Collapsible title="五、逻辑联结词" defaultOpen storageKey="logic:conn" headerExtra={<SpeakButton text={logicNarrations.connectives} />}>
              <div className="space-y-0 text-lg text-gray-800">

                {/* 生活理解 */}
                <div className="border border-blue-300 rounded overflow-hidden bg-blue-50">
                  <div className="px-2 py-1 font-bold text-blue-700 border-b border-blue-300 bg-blue-100 text-lg">先用生活理解</div>
                  <div className="px-3 py-2 space-y-2">
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-white rounded p-2 border border-blue-200 text-center">
                        <p className="font-bold text-blue-800">且（∧）</p>
                        <p className="text-gray-600">像<strong>严格老师</strong></p>
                        <p>全部满足才通过</p>
                      </div>
                      <div className="bg-white rounded p-2 border border-green-200 text-center">
                        <p className="font-bold text-green-800">或（∨）</p>
                        <p className="text-gray-600">像<strong>宽松老师</strong></p>
                        <p>有一个满足就通过</p>
                      </div>
                      <div className="bg-white rounded p-2 border border-red-200 text-center">
                        <p className="font-bold text-red-800">非（¬）</p>
                        <p className="text-gray-600">像<strong>唱反调</strong></p>
                        <p>真变假，假变真</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 真值表 */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-50 text-lg">真值表（记住口诀就行）</div>
                  <div className="grid grid-cols-2 gap-2 p-2">
                    <div className="bg-blue-50 rounded p-2 text-center">
                      <p className="font-bold">且：全真才真</p>
                      <p className="text-gray-600">真∧真=真，其他都是假</p>
                    </div>
                    <div className="bg-green-50 rounded p-2 text-center">
                      <p className="font-bold">或：一真就真</p>
                      <p className="text-gray-600">假∨假=假，其他都是真</p>
                    </div>
                  </div>
                </div>

                {/* 否定规则 */}
                <div className="border border-orange-300 rounded overflow-hidden bg-orange-50">
                  <div className="px-2 py-1 font-bold text-orange-700 border-b border-orange-300 bg-orange-100 text-lg">否定规则（高考必考！）</div>
                  <div className="px-3 py-2 space-y-1">
                    <p className="text-center text-xl font-bold">否定时：且变或，或变且</p>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <div className="bg-white rounded p-2">
                        <p>"p 且 q" 的否定 = "非p <strong className="text-orange-600">或</strong> 非q"</p>
                      </div>
                      <div className="bg-white rounded p-2">
                        <p>"p 或 q" 的否定 = "非p <strong className="text-orange-600">且</strong> 非q"</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 例题 */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-purple-700 border-b border-gray-400 bg-gray-50 text-lg">例题演示</div>
                  <div className="px-3 py-2 space-y-2">
                    <div className="bg-gray-50 rounded p-2">
                      <p><strong>p:</strong> 2是偶数（真），<strong>q:</strong> 3{'>'} 5（假）</p>
                      <p>p 且 q = <strong className="text-red-600">假</strong>（全真才真，这里有假）</p>
                      <p>p 或 q = <strong className="text-green-600">真</strong>（一真就真，p是真）</p>
                    </div>
                    <div className="bg-gray-50 rounded p-2">
                      <p><strong>原命题：</strong>"<Math tex="x > 0" /> 且 <Math tex="x < 5" />"</p>
                      <p><strong className="text-green-600">否定：</strong>"<Math tex="x \leq 0" /> <strong className="text-orange-600">或</strong> <Math tex="x \geq 5" />"</p>
                    </div>
                  </div>
                </div>

                <PracticeCard questions={logicPractice5} explanations={logicExplanations} optionCols={4} printOptionCols={4} />
              </div>
            </Collapsible>
          </section>

          <PageBreak />

          {/* 必背清单 */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200 p-5 mb-6">
            <p className="font-bold text-gray-800 mb-3 text-lg">📝 考前必背：5条公式搞定高考</p>
            <div className="grid grid-cols-1 gap-2 text-base text-gray-700">
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <p><strong className="text-blue-600">1. 命题判断</strong>：能判断真假的陈述句才是命题</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <p><strong className="text-blue-600">2. 充要条件</strong>：谁小谁充分，谁大谁必要</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <p><strong className="text-blue-600">3. 量词否定</strong>：∀ 变 ∃，条件取反（{'>'} 变 ≤）</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <p><strong className="text-blue-600">4. 逻辑联结词</strong>：且=全真才真 | 或=一真就真 | 否定时且变或</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <p><strong className="text-blue-600">5. 四种命题</strong>：逆否命题与原命题同真同假</p>
              </div>
            </div>
          </div>

          {/* Part 6: Quiz */}
          <section id="logic-quiz" className="mb-8 scroll-mt-4">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-green-500 text-white flex items-center justify-center text-sm font-bold">
                6
              </span>
              高考真题实战
            </h2>
            <QuizPanel module="logic" questions={logicQuizQuestions} title="逻辑用语真题实战" description="9道选择题，覆盖全部考点" explanations={logicExplanations} />
          </section>

      {isPrinting && printOptions.showAnswers && <LogicAnswers />}

      </LessonLayout>
    </div>
  );
}
