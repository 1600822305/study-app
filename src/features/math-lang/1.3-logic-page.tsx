import { Math, QuizPanel, Collapsible, SpeakButton, PageHeader, LessonLayout, PracticeCard, ExportButton } from '@/components/shared';
import { logicNarrations } from './data/1.3/1.3-narrations';
import { logicPractice1, logicPractice2, logicPractice3, logicPractice4, logicPractice5 } from './data/1.3/1.3-practice';
import { useProgress, usePrintMode } from '@/hooks';
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

      <LessonLayout progressItems={items} onToggle={toggle}>
        <div className="[&_.rounded-xl]:mb-0 [&_.rounded-xl>.flex.items-center]:py-1 [&_.rounded-xl>div:last-child]:pt-1 [&_.rounded-xl>div:last-child]:pb-1">
          
          {/* Part 1: Propositions */}
          <section id="logic-prop" className="mb-0 scroll-mt-4">
            <Collapsible title="一、命题是什么？" defaultOpen storageKey="logic:prop" headerExtra={<SpeakButton text={logicNarrations.proposition} />}>
              <div className="space-y-0 text-[0.9rem] text-gray-800">

                {/* 定义 */}
                <div className="border border-blue-300 rounded overflow-hidden bg-blue-50">
                  <div className="px-2 py-1 font-bold text-blue-700 border-b border-blue-300 bg-blue-100">定义</div>
                  <div className="px-3 py-2">
                    <p><strong>命题</strong>是指一个陈述句所表达的语义内容，它具有真假性，可以被判断为真或假</p>
                  </div>
                </div>

                {/* 是/不是命题对比 */}
                <div className="flex">
                  <div className="flex-1 border border-green-300 rounded-l overflow-hidden bg-green-50">
                    <div className="px-2 py-1 font-bold text-green-700 border-b border-green-300 bg-green-100">✓ 是命题</div>
                    <div className="px-3 py-2 space-y-1">
                      <p>"2 是偶数" → 真命题</p>
                      <p>"3 {'>'} 5" → 假命题</p>
                    </div>
                  </div>
                  <div className="flex-1 border border-red-300 border-l-0 rounded-r overflow-hidden bg-red-50">
                    <div className="px-2 py-1 font-bold text-red-700 border-b border-red-300 bg-red-100">✗ 不是命题</div>
                    <div className="px-3 py-2 space-y-1">
                      <p>"x {'>'} 3" → 真假不确定</p>
                      <p>"请关门" → 祈使句</p>
                    </div>
                  </div>
                </div>

                {/* 判断口诀 */}
                <div className="border border-orange-300 rounded overflow-hidden bg-orange-50">
                  <div className="px-2 py-1 font-bold text-orange-700 border-b border-orange-300 bg-orange-100">判断口诀</div>
                  <div className="px-3 py-1">
                    <p><strong>①</strong> <strong>能明确回答"对"或"错"</strong> → 是命题　　<strong>②</strong> <strong>含未知数/疑问句/祈使句</strong> → 不是命题</p>
                  </div>
                </div>

                <PracticeCard questions={logicPractice1} explanations={logicExplanations} optionCols={4} printOptionCols={4} />
              </div>
            </Collapsible>
          </section>

          
          {/* Part 2: Four Types of Propositions */}
          <section id="logic-four" className="mb-0 scroll-mt-4">
            <Collapsible title="二、四种命题" defaultOpen storageKey="logic:four" headerExtra={<SpeakButton text={logicNarrations.fourTypes} />}>
              <div className="space-y-0 text-[0.9rem] text-gray-800">

                {/* 四种命题表格 */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-50">四种命题的定义与示例</div>
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border-b border-r border-gray-300 px-2 py-1.5 text-left w-24">名称</th>
                        <th className="border-b border-r border-gray-300 px-2 py-1.5 text-left">形式</th>
                        <th className="border-b border-r border-gray-300 px-2 py-1.5 text-left">做法</th>
                        <th className="border-b border-gray-300 px-2 py-1.5 text-left">示例（P=医生，Q=懂医学）</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border-b border-r border-gray-300 px-2 py-1.5 font-bold">原命题</td>
                        <td className="border-b border-r border-gray-300 px-2 py-1.5">若 P，则 Q</td>
                        <td className="border-b border-r border-gray-300 px-2 py-1.5">—</td>
                        <td className="border-b border-gray-300 px-2 py-1.5">若是医生，则懂医学</td>
                      </tr>
                      <tr>
                        <td className="border-b border-r border-gray-300 px-2 py-1.5 font-bold">逆命题</td>
                        <td className="border-b border-r border-gray-300 px-2 py-1.5">若 Q，则 P</td>
                        <td className="border-b border-r border-gray-300 px-2 py-1.5">条件结论互换</td>
                        <td className="border-b border-gray-300 px-2 py-1.5">若懂医学，则是医生</td>
                      </tr>
                      <tr>
                        <td className="border-b border-r border-gray-300 px-2 py-1.5 font-bold">否命题</td>
                        <td className="border-b border-r border-gray-300 px-2 py-1.5">若 非P，则 非Q</td>
                        <td className="border-b border-r border-gray-300 px-2 py-1.5">条件结论都取反</td>
                        <td className="border-b border-gray-300 px-2 py-1.5">若不是医生，则不懂医学</td>
                      </tr>
                      <tr>
                        <td className="border-r border-gray-300 px-2 py-1.5 font-bold">逆否命题</td>
                        <td className="border-r border-gray-300 px-2 py-1.5">若 非Q，则 非P</td>
                        <td className="border-r border-gray-300 px-2 py-1.5">先互换再取反</td>
                        <td className="px-2 py-1.5">若不懂医学，则不是医生</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* 核心规律 */}
                <div className="border border-orange-300 rounded overflow-hidden bg-orange-50">
                  <div className="px-2 py-1 font-bold text-orange-700 border-b border-orange-300 bg-orange-100">核心规律（必记！）</div>
                  <div className="px-3 py-2 space-y-1">
                    <p><strong>原命题与逆否命题：真假性相同（同真同假）</strong></p>
                    <p>逆命题与否命题：真假性相同（同真同假）</p>
                    <p>原命题与逆命题、原命题与否命题：真假性没有必然关系</p>
                  </div>
                </div>

                {/* 例题 */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-purple-700 border-b border-gray-400 bg-gray-50">例题</div>
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
                  <div className="px-3 py-1">
                    <p><strong>①</strong> <strong>否命题 ≠ 否定原命题！</strong>否命题是条件结论都取反　　<strong>②</strong> <strong>逆否命题才和原命题等价</strong>，逆命题和否命题不一定</p>
                  </div>
                </div>
              </div>
            </Collapsible>
          </section>

          
          {/* Part 3: Sufficient & Necessary Conditions */}
          <section id="logic-cond" className="mb-0 scroll-mt-4">
            <Collapsible title="三、充分条件与必要条件" defaultOpen storageKey="logic:cond" headerExtra={<SpeakButton text={logicNarrations.sufficient} />}>
              <div className="space-y-0 text-[0.9rem] text-gray-800">

                {/* 定义 */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-purple-700 border-b border-gray-400 bg-gray-50">基本定义</div>
                  <div className="px-3 py-2 space-y-2">
                    <div>
                      <p><strong>充分条件：</strong></p>
                      <p className="ml-4">如果条件 A 存在，则结果 B 一定成立，记作 <Math tex="A \Rightarrow B" />。A 的存在足以保证 B 发生，但 B 成立不一定依赖于 A。</p>
                      <p className="ml-4">例：下雨（A）→ 地面湿（B），下雨是地面湿的充分条件，但地面湿也可能是洒水造成的</p>
                    </div>
                    <div>
                      <p><strong>必要条件：</strong></p>
                      <p className="ml-4">如果结果 B 成立，则条件 A 一定存在，记作 <Math tex="B \Rightarrow A" />。A 是 B 成立的前提条件，但 A 存在不一定能保证 B 发生。</p>
                      <p className="ml-4">例：有氧气（A）← 人活着（B），有氧气是人活着的必要条件，但有氧气时人不一定活着</p>
                    </div>
                    <div>
                      <p><strong>充要条件：</strong></p>
                      <p className="ml-4">当 <Math tex="A \Rightarrow B" /> 且 <Math tex="B \Rightarrow A" /> 同时成立时，A 与 B 互为充要条件，记作 <Math tex="A \Leftrightarrow B" />。此时 A 成立当且仅当 B 成立，二者等价。</p>
                      <p className="ml-4">例：三角形是等边三角形（A）⇔ 三角形是等角三角形（B）</p>
                    </div>
                  </div>
                </div>

                {/* 四种情况表 */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-50">四种情况速查表</div>
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border-b border-r border-gray-300 px-2 py-1.5 text-center">p能推出q？</th>
                        <th className="border-b border-r border-gray-300 px-2 py-1.5 text-center">q能推出p？</th>
                        <th className="border-b border-r border-gray-300 px-2 py-1.5 text-left">关系</th>
                        <th className="border-b border-gray-300 px-2 py-1.5 text-left">例子</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="border-b border-r border-gray-300 px-2 py-1.5 text-center text-green-600 font-bold">能</td><td className="border-b border-r border-gray-300 px-2 py-1.5 text-center text-green-600 font-bold">能</td><td className="border-b border-r border-gray-300 px-2 py-1.5 font-bold">充要条件</td><td className="border-b border-gray-300 px-2 py-1.5">等边三角形(p) ⇔ 三边相等(q)</td></tr>
                      <tr><td className="border-b border-r border-gray-300 px-2 py-1.5 text-center text-green-600 font-bold">能</td><td className="border-b border-r border-gray-300 px-2 py-1.5 text-center text-red-600 font-bold">不能</td><td className="border-b border-r border-gray-300 px-2 py-1.5 font-bold">充分不必要</td><td className="border-b border-gray-300 px-2 py-1.5">下雨(p) → 地面湿(q)</td></tr>
                      <tr><td className="border-b border-r border-gray-300 px-2 py-1.5 text-center text-red-600 font-bold">不能</td><td className="border-b border-r border-gray-300 px-2 py-1.5 text-center text-green-600 font-bold">能</td><td className="border-b border-r border-gray-300 px-2 py-1.5 font-bold">必要不充分</td><td className="border-b border-gray-300 px-2 py-1.5">有氧气(p) ← 人活着(q)</td></tr>
                      <tr><td className="border-r border-gray-300 px-2 py-1.5 text-center text-red-600 font-bold">不能</td><td className="border-r border-gray-300 px-2 py-1.5 text-center text-red-600 font-bold">不能</td><td className="border-r border-gray-300 px-2 py-1.5 font-bold">既不充分也不必要</td><td className="px-2 py-1.5">下雨(p) 和 迟到(q)</td></tr>
                    </tbody>
                  </table>
                </div>

                {/* 核心口诀 */}
                <div className="border border-orange-300 rounded overflow-hidden bg-orange-50">
                  <div className="px-2 py-1 font-bold text-orange-700 border-b border-orange-300 bg-orange-100">高考做题秘籍（集合法）</div>
                  <div className="px-3 py-2 space-y-2">
                    <p><strong>口诀：谁小谁充分，谁大谁必要</strong>　　把 p 的解集记为 A，q 的解集记为 B，然后比较大小关系：</p>
                    <div className="grid grid-cols-2 gap-1">
                      <div className="bg-white rounded px-2 py-1"><p><strong>①</strong> <Math tex="A \subseteq B" />（A小）→ p 是 q 的<strong>充分条件</strong></p></div>
                      <div className="bg-white rounded px-2 py-1"><p><strong>②</strong> <Math tex="B \subseteq A" />（B小）→ p 是 q 的<strong>必要条件</strong></p></div>
                      <div className="bg-white rounded px-2 py-1"><p><strong>③</strong> <Math tex="A = B" />（互相包含）→ p 是 q 的<strong>充要条件</strong></p></div>
                      <div className="bg-white rounded px-2 py-1"><p><strong>④</strong> A、B 互不包含 → <strong>既不充分也不必要</strong></p></div>
                    </div>
                  </div>
                </div>

                {/* 做题三步 */}
                <div className="border border-green-300 rounded overflow-hidden bg-green-50">
                  <div className="px-2 py-1 font-bold text-green-700 border-b border-green-300 bg-green-100">做题三步走（照着做就对）</div>
                  <div className="px-3 py-2 space-y-1">
                    <p><strong>① 解范围</strong>：把 p、q 分别解成不等式，得到集合 A 和 B</p>
                    <p className="ml-4 text-gray-600">例：p: <Math tex="x>2" /> 得 <Math tex="A=(2,+\infty)" />，q: <Math tex="x>1" /> 得 <Math tex="B=(1,+\infty)" /></p>
                    <p><strong>② 比大小</strong>：画数轴看谁的范围更小（谁被谁包含）</p>
                    <p className="ml-4 text-gray-600">例：A在B里面，所以A更小</p>
                    <p><strong>③ 套公式</strong>：小的那个是充分条件，大的那个是必要条件</p>
                    <p className="ml-4 text-gray-600">例：A小，所以p是充分条件</p>
                  </div>
                </div>

                {/* 例题 */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-purple-700 border-b border-gray-400 bg-gray-50">例题演示</div>
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
          <section id="logic-quant" className="mb-0 scroll-mt-4">
            <Collapsible title="四、全称量词与存在量词" defaultOpen storageKey="logic:quant" headerExtra={<SpeakButton text={logicNarrations.quantifiers} />}>
              <div className="space-y-0 text-[0.9rem] text-gray-800">

                {/* 符号速查 */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-50">本节符号速查</div>
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border-b border-r border-gray-300 px-2 py-1 text-center w-20">符号</th>
                        <th className="border-b border-r border-gray-300 px-2 py-1 text-left">读法</th>
                        <th className="border-b border-r border-gray-300 px-2 py-1 text-left">含义</th>
                        <th className="border-b border-gray-300 px-2 py-1 text-left">示例</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="border-b border-r border-gray-300 px-2 py-1 text-center"><Math tex="\forall" /></td><td className="border-b border-r border-gray-300 px-2 py-1">任意 / 对所有</td><td className="border-b border-r border-gray-300 px-2 py-1">全称量词</td><td className="border-b border-gray-300 px-2 py-1"><Math tex="\forall x \in \mathbb{R}" /> = 对所有实数 x</td></tr>
                      <tr><td className="border-b border-r border-gray-300 px-2 py-1 text-center"><Math tex="\exists" /></td><td className="border-b border-r border-gray-300 px-2 py-1">存在 / 有一个</td><td className="border-b border-r border-gray-300 px-2 py-1">存在量词</td><td className="border-b border-gray-300 px-2 py-1"><Math tex="\exists x \in \mathbb{R}" /> = 存在一个实数 x</td></tr>
                      <tr><td className="border-b border-r border-gray-300 px-2 py-1 text-center"><Math tex="\neg" /></td><td className="border-b border-r border-gray-300 px-2 py-1">非 / 否定</td><td className="border-b border-r border-gray-300 px-2 py-1">取反</td><td className="border-b border-gray-300 px-2 py-1"><Math tex="\neg p" /> = p 的否定</td></tr>
                      <tr><td className="border-r border-gray-300 px-2 py-1 text-center"><Math tex="\in" /></td><td className="border-r border-gray-300 px-2 py-1">属于</td><td className="border-r border-gray-300 px-2 py-1">元素在集合中</td><td className="px-2 py-1"><Math tex="x \in \mathbb{R}" /> = x 是实数</td></tr>
                    </tbody>
                  </table>
                </div>

                {/* 定义与符号 */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-purple-700 border-b border-gray-400 bg-gray-50">定义与符号</div>
                  <div className="px-3 py-2 space-y-2">
                    <p>全称量词表示"<strong>所有元素都成立</strong>"，存在量词表示"<strong>至少有一个元素成立</strong>"</p>
                    <div>
                      <p><strong>全称量词（<Math tex="\forall" />）：</strong></p>
                      <p className="ml-4">表示某一范围内<strong>所有元素都满足</strong>某个条件，常用短语："所有的""任意一个""一切""每一个"</p>
                      <p className="ml-4">含全称量词的命题称为<strong>全称命题</strong>，例：对任意角 <Math tex="\alpha" />，都有 <Math tex="\sin^2\alpha + \cos^2\alpha = 1" /></p>
                    </div>
                    <div>
                      <p><strong>存在量词（<Math tex="\exists" />）：</strong></p>
                      <p className="ml-4">表示某一范围内<strong>至少有一个元素满足</strong>条件，常用短语："存在一个""至少有一个""有些""有的"</p>
                      <p className="ml-4">含存在量词的命题称为<strong>存在命题</strong>，例：存在自然数 <Math tex="n" />，使得 <Math tex="n^2 > 4" /></p>
                    </div>
                  </div>
                </div>

                {/* 命题真假判定 */}
                <div className="border border-blue-300 rounded overflow-hidden bg-blue-50">
                  <div className="px-2 py-1 font-bold text-blue-700 border-b border-blue-300 bg-blue-100">命题真假判定</div>
                  <div className="px-3 py-2 space-y-1">
                    <p><strong>全称命题</strong>（<Math tex="\forall x \in M,\; p(x)" />）：需要对集合 M 中<strong>每个元素</strong>证明 p(x) 成立；若存在反例 <Math tex="x_0" /> 使 <Math tex="p(x_0)" /> 不成立，则命题为<strong>假</strong></p>
                    <p><strong>存在命题</strong>（<Math tex="\exists x \in M,\; p(x)" />）：只需找到集合 M 中<strong>一个元素</strong>使 p(x) 成立即为真；若没有任何元素满足，则命题为<strong>假</strong></p>
                  </div>
                </div>

                {/* 否定关系 */}
                <div className="border border-orange-300 rounded overflow-hidden bg-orange-50">
                  <div className="px-2 py-1 font-bold text-orange-700 border-b border-orange-300 bg-orange-100">否定关系（高考必考！）</div>
                  <div className="px-3 py-2 space-y-2">
                    <p><strong>两步：① 换量词 ② 条件取反</strong></p>
                    <div className="grid grid-cols-2 gap-1">
                      <div className="bg-white rounded px-2 py-1">
                        <p><strong>全称命题的否定：</strong></p>
                        <p><Math tex="\neg(\forall x \in M,\; p(x)) \equiv \exists x \in M,\; \neg p(x)" /></p>
                        <p>全称命题的否定是<strong>存在命题</strong></p>
                      </div>
                      <div className="bg-white rounded px-2 py-1">
                        <p><strong>存在命题的否定：</strong></p>
                        <p><Math tex="\neg(\exists x \in M,\; p(x)) \equiv \forall x \in M,\; \neg p(x)" /></p>
                        <p>存在命题的否定是<strong>全称命题</strong></p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 例题演示 */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-purple-700 border-b border-gray-400 bg-gray-50">例题演示</div>
                  <div className="grid grid-cols-2 gap-1 p-1">
                    <div className="bg-gray-50 rounded p-2">
                      <p><strong>写出否定：</strong>"所有学生都及格了"</p>
                      <p className="ml-4">① 换量词："所有" → "存在"</p>
                      <p className="ml-4">② 条件取反："及格" → "没及格"</p>
                      <p className="ml-4"><strong className="text-green-600">否定：</strong>"存在一个学生没及格"</p>
                    </div>
                    <div className="bg-gray-50 rounded p-2">
                      <p><strong>写出否定：</strong><Math tex="\forall x \in \mathbb{R},\; x^2 \geq 0" /></p>
                      <p className="ml-4">① <Math tex="\forall" /> → <Math tex="\exists" /></p>
                      <p className="ml-4">② <Math tex="\geq" /> → <Math tex="<" /></p>
                      <p className="ml-4"><strong className="text-green-600">否定：</strong><Math tex="\exists x \in \mathbb{R},\; x^2 < 0" /></p>
                    </div>
                  </div>
                </div>

                {/* 注意事项 */}
                <div className="border border-red-300 rounded overflow-hidden bg-red-50 px-3 py-1">
                  <p><strong className="text-red-700">注意：</strong><strong>①</strong> 省略量词需补全　<strong>②</strong> 否定只换量词和条件，范围不变</p>
                </div>

                <PracticeCard questions={logicPractice4} explanations={logicExplanations} optionCols={4} printOptionCols={4} />

              </div>
            </Collapsible>
          </section>

          
          {/* Part 5: Logical Connectives */}
          <div className="break-before-page print:break-before-page" />
          <section id="logic-conn" className="mb-0 scroll-mt-4">
            <Collapsible title="五、逻辑联结词" defaultOpen storageKey="logic:conn" headerExtra={<SpeakButton text={logicNarrations.connectives} />}>
              <div className="space-y-0 text-[0.9rem] text-gray-800">

                {/* 基本定义 */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-purple-700 border-b border-gray-400 bg-gray-50">基本定义 <span className="font-normal text-gray-700">— 逻辑联结词将简单命题组合成复合命题：<strong>且（∧）、或（∨）、非（¬）</strong></span></div>
                  <div className="px-3 py-2 space-y-2">
                    <div>
                      <p><strong>且（∧）：</strong></p>
                      <p className="ml-4">表示两个条件<strong>同时成立</strong>，"p 且 q"记作 <Math tex="p \wedge q" />，当且仅当 p、q 都为真时为真</p>
                      <p className="ml-4">例：2是偶数 <strong>且</strong> 2是质数 → 真（两个都成立）</p>
                    </div>
                    <div>
                      <p><strong>或（∨）：</strong></p>
                      <p className="ml-4">表示两个条件<strong>至少一个成立</strong>，"p 或 q"记作 <Math tex="p \vee q" />，只要 p、q 有一个为真就为真</p>
                      <p className="ml-4">例：3是偶数 <strong>或</strong> 3是奇数 → 真（第二个成立就够了）</p>
                    </div>
                    <div>
                      <p><strong>非（¬）：</strong></p>
                      <p className="ml-4">表示对命题<strong>取反</strong>，"非 p"记作 <Math tex="\neg p" />，p 为真则非 p 为假，p 为假则非 p 为真</p>
                      <p className="ml-4">例：p = "2是奇数"（假），非 p = "2不是奇数"（真）</p>
                    </div>
                  </div>
                </div>

                {/* 真值表 */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-50">真值表</div>
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border-b border-r border-gray-300 px-2 py-1 text-center">p</th>
                        <th className="border-b border-r border-gray-300 px-2 py-1 text-center">q</th>
                        <th className="border-b border-r border-gray-300 px-2 py-1 text-center"><Math tex="p \wedge q" />（且）</th>
                        <th className="border-b border-r border-gray-300 px-2 py-1 text-center"><Math tex="p \vee q" />（或）</th>
                        <th className="border-b border-gray-300 px-2 py-1 text-center"><Math tex="\neg p" />（非）</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="border-b border-r border-gray-300 px-2 py-1 text-center">真</td><td className="border-b border-r border-gray-300 px-2 py-1 text-center">真</td><td className="border-b border-r border-gray-300 px-2 py-1 text-center text-green-600 font-bold">真</td><td className="border-b border-r border-gray-300 px-2 py-1 text-center text-green-600 font-bold">真</td><td className="border-b border-gray-300 px-2 py-1 text-center text-red-600 font-bold">假</td></tr>
                      <tr><td className="border-b border-r border-gray-300 px-2 py-1 text-center">真</td><td className="border-b border-r border-gray-300 px-2 py-1 text-center">假</td><td className="border-b border-r border-gray-300 px-2 py-1 text-center text-red-600 font-bold">假</td><td className="border-b border-r border-gray-300 px-2 py-1 text-center text-green-600 font-bold">真</td><td className="border-b border-gray-300 px-2 py-1 text-center text-red-600 font-bold">假</td></tr>
                      <tr><td className="border-b border-r border-gray-300 px-2 py-1 text-center">假</td><td className="border-b border-r border-gray-300 px-2 py-1 text-center">真</td><td className="border-b border-r border-gray-300 px-2 py-1 text-center text-red-600 font-bold">假</td><td className="border-b border-r border-gray-300 px-2 py-1 text-center text-green-600 font-bold">真</td><td className="border-b border-gray-300 px-2 py-1 text-center text-green-600 font-bold">真</td></tr>
                      <tr><td className="border-r border-gray-300 px-2 py-1 text-center">假</td><td className="border-r border-gray-300 px-2 py-1 text-center">假</td><td className="border-r border-gray-300 px-2 py-1 text-center text-red-600 font-bold">假</td><td className="border-r border-gray-300 px-2 py-1 text-center text-red-600 font-bold">假</td><td className="border-gray-300 px-2 py-1 text-center text-green-600 font-bold">真</td></tr>
                    </tbody>
                  </table>
                  <div className="px-3 py-1 bg-gray-50 border-t border-gray-300">
                    <p><strong>口诀：</strong>且 = <strong>全真才真</strong>（见假即假）　　或 = <strong>一真就真</strong>（全假才假）　　非 = <strong>真假相反</strong></p>
                  </div>
                </div>

                {/* 否定规则 - 德摩根律 */}
                <div className="border border-orange-300 rounded overflow-hidden bg-orange-50">
                  <div className="px-2 py-1 font-bold text-orange-700 border-b border-orange-300 bg-orange-100">否定规则（德摩根律，高考必考！）</div>
                  <div className="px-3 py-1 space-y-1">
                    <p><strong>核心：否定时，且变或，或变且，同时每个条件取反</strong></p>
                    <div className="grid grid-cols-2 gap-1">
                      <div className="bg-white rounded px-2 py-1">
                        <p><Math tex="\neg(p \wedge q) = \neg p \vee \neg q" /></p>
                        <p>"p 且 q"的否定 = "非p <strong className="text-orange-600">或</strong> 非q"</p>
                      </div>
                      <div className="bg-white rounded px-2 py-1">
                        <p><Math tex="\neg(p \vee q) = \neg p \wedge \neg q" /></p>
                        <p>"p 或 q"的否定 = "非p <strong className="text-orange-600">且</strong> 非q"</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 例题演示 */}
                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-purple-700 border-b border-gray-400 bg-gray-50">例题演示</div>
                  <div className="grid grid-cols-2 gap-1 p-1">
                    <div className="bg-gray-50 rounded p-2">
                      <p><strong>判断真假：</strong>p: 2是偶数（真），q: 3 {'>'} 5（假）</p>
                      <p className="ml-4">p 且 q = <strong className="text-red-600">假</strong>（有假则假）</p>
                      <p className="ml-4">p 或 q = <strong className="text-green-600">真</strong>（有真则真）</p>
                      <p className="ml-4">非 p = <strong className="text-red-600">假</strong>（p真则非p假）</p>
                    </div>
                    <div className="bg-gray-50 rounded p-2">
                      <p><strong>写出否定：</strong>"<Math tex="x > 0" /> 且 <Math tex="x < 5" />"</p>
                      <p className="ml-4">① 且 → 或</p>
                      <p className="ml-4">② {'>'} 变 ≤，{'<'} 变 ≥</p>
                      <p className="ml-4"><strong className="text-green-600">否定：</strong>"<Math tex="x \leq 0" /> <strong className="text-orange-600">或</strong> <Math tex="x \geq 5" />"</p>
                    </div>
                  </div>
                </div>

                {/* 注意 */}
                <div className="border border-red-300 rounded overflow-hidden bg-red-50 px-3 py-1">
                  <p><strong className="text-red-700">注意：</strong>"或"在数学中是<strong>可兼或</strong>（两个都成立也算真），与日常用语"或者...或者..."（二选一）不同</p>
                </div>

                <PracticeCard questions={logicPractice5} explanations={logicExplanations} optionCols={4} printOptionCols={4} />
              </div>
            </Collapsible>
          </section>


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

        </div>
      </LessonLayout>
    </div>
  );
}
