import { Math, Collapsible, SpeakButton, QuizPanel, PageHeader, LessonLayout, PracticeCard, ExportButton, PageBreak } from '@/components/shared';
import { logicPrereqNarrations } from './data/prereq-narrations';
import { logicPrereqPractice1, logicPrereqPractice2, logicPrereqPractice3 } from './data/practice';
import { logicPrereqProgressItems } from './data/prereq-progress';
import { logicPrereqQuizQuestions } from './data/prereq-quiz';
import { LogicPrereqAnswers, logicPrereqExplanations } from './logic-prereq-answers';
import { useProgress, usePrintMode } from '@/hooks';
import { scrollToId } from '@/lib/scroll';

export function LogicPrereqPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('logic-prereq', logicPrereqProgressItems);
  const { isPrinting, printOptions } = usePrintMode();

  return (
    <div>
      <PageHeader
        stage="前置准备"
        variant="prereq"
        title="1.2.5 逻辑用语前置知识"
        narration={logicPrereqNarrations.intro}
        subtitle="学逻辑之前，先确保子集关系、解不等式、基本推理没问题"
        tags={[
          { label: '约15-20分钟', color: 'amber' },
          { label: '集合基础', color: 'green' },
        ]}
      />

      <div className="flex justify-end mb-4 print:hidden">
        <ExportButton title="1.2.5 逻辑用语前置知识" />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-5 mb-6">
        <p className="font-bold text-gray-800 mb-2 text-lg">📋 知识地图</p>
        <div className="grid grid-cols-2 gap-2 text-gray-600">
          <button onClick={() => scrollToId('lp-subset')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">一、集合的子集关系</button>
          <button onClick={() => scrollToId('lp-inequality')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">二、解不等式</button>
          <button onClick={() => scrollToId('lp-reasoning')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">三、基本推理能力</button>
          <button onClick={() => scrollToId('lp-quiz')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">四、选择题自测</button>
        </div>
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      {/* Section 1: Subset Relations */}
      <section id="lp-subset" className="mb-6 scroll-mt-4">
        <Collapsible title="一、集合的子集关系" defaultOpen storageKey="logic-prereq:subset" headerExtra={<SpeakButton text={logicPrereqNarrations.subset} />}>
          <div className="space-y-0 text-lg text-gray-800">

            {/* 核心概念表格 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-50 text-lg">子集关系速查</div>
              <table className="w-full border-collapse">
                <tbody>
                  <tr>
                    <td className="border-b border-r border-gray-300 px-3 py-2 font-bold text-blue-700 w-28"><Math tex="A \subseteq B" /></td>
                    <td className="border-b border-gray-300 px-3 py-2">A 是 B 的<strong>子集</strong>（A 的元素都在 B 里，<span className="text-green-600">可以相等</span>）</td>
                  </tr>
                  <tr>
                    <td className="border-b border-r border-gray-300 px-3 py-2 font-bold text-purple-700"><Math tex="A \subset B" /></td>
                    <td className="border-b border-gray-300 px-3 py-2">A 是 B 的<strong>真子集</strong>（A 在 B 里，且 <span className="text-red-600">A ≠ B</span>）</td>
                  </tr>
                  <tr>
                    <td className="border-r border-gray-300 px-3 py-2 font-bold text-green-700"><Math tex="A = B" /></td>
                    <td className="px-3 py-2">A 和 B <strong>完全相同</strong>（互为子集）</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 数轴示例 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-700 border-b border-gray-400 bg-gray-50">例：A = (2, 5)，B = (1, 6)，谁包含谁？</div>
              <div className="px-3 py-2">
                {/* SVG数轴图 */}
                <svg viewBox="0 0 360 80" className="w-full max-w-lg mx-auto">
                  {/* 数轴 */}
                  <line x1="10" y1="50" x2="350" y2="50" stroke="#9ca3af" strokeWidth="2" />
                  <polygon points="345,47 350,50 345,53" fill="#9ca3af" />
                  {[0, 1, 2, 3, 4, 5, 6, 7].map((n) => (
                    <g key={n}>
                      <line x1={20 + n * 40} y1="45" x2={20 + n * 40} y2="55" stroke="#6b7280" strokeWidth="1.5" />
                      <text x={20 + n * 40} y="70" textAnchor="middle" fill="#4b5563" style={{ fontSize: '12px' }}>{n}</text>
                    </g>
                  ))}
                  
                  {/* B的盖子：1到6（橙色，外层高） */}
                  <line x1="60" y1="50" x2="60" y2="15" stroke="#f97316" strokeWidth="2.5" />
                  <line x1="60" y1="15" x2="260" y2="15" stroke="#f97316" strokeWidth="2.5" />
                  <line x1="260" y1="15" x2="260" y2="50" stroke="#f97316" strokeWidth="2.5" />
                  <circle cx="60" cy="50" r="4" fill="white" stroke="#f97316" strokeWidth="2" />
                  <circle cx="260" cy="50" r="4" fill="white" stroke="#f97316" strokeWidth="2" />
                  <text x="160" y="10" textAnchor="middle" fill="#f97316" fontWeight="bold" style={{ fontSize: '12px' }}>B</text>
                  
                  {/* A的盖子：2到5（蓝色，内层矮） */}
                  <line x1="100" y1="50" x2="100" y2="28" stroke="#3b82f6" strokeWidth="2.5" />
                  <line x1="100" y1="28" x2="220" y2="28" stroke="#3b82f6" strokeWidth="2.5" />
                  <line x1="220" y1="28" x2="220" y2="50" stroke="#3b82f6" strokeWidth="2.5" />
                  <circle cx="100" cy="50" r="4" fill="#3b82f6" stroke="#3b82f6" strokeWidth="2" />
                  <circle cx="220" cy="50" r="4" fill="#3b82f6" stroke="#3b82f6" strokeWidth="2" />
                  <text x="160" y="24" textAnchor="middle" fill="#3b82f6" fontWeight="bold" style={{ fontSize: '12px' }}>A</text>
                </svg>
                <p className="text-center"><span className="text-blue-600 font-bold">A</span> 完全被 <span className="text-orange-500 font-bold">B</span> 包住 → <strong><Math tex="A \subset B" /></strong></p>
              </div>
            </div>

            {/* 判断口诀 */}
            <div className="border border-orange-300 rounded overflow-hidden bg-orange-50">
              <div className="px-2 py-1 font-bold text-orange-700 border-b border-orange-300 bg-orange-100">子集判断口诀</div>
              <div className="grid grid-cols-2 gap-2 px-3 py-2">
                <p><strong>①</strong> 有限集：逐个检查元素</p>
                <p><strong>②</strong> 区间：画数轴看谁罩谁</p>
                <p><strong>③</strong> 空集 <Math tex="\varnothing" /> 是任何集合的子集</p>
                <p><strong>④</strong> 范围小 ⊂ 范围大</p>
              </div>
            </div>

            <PracticeCard questions={logicPrereqPractice1} explanations={logicPrereqExplanations} optionCols={4} printOptionCols={4} />
          </div>
        </Collapsible>
      </section>

      {/* Section 2: Solving Inequalities */}
      <section id="lp-inequality" className="mb-6 scroll-mt-4">
        <Collapsible title="二、解不等式" defaultOpen storageKey="logic-prereq:inequality" headerExtra={<SpeakButton text={logicPrereqNarrations.inequalityReview} />}>
          <div className="space-y-0 text-lg text-gray-800">

            {/* 一元二次不等式速查表 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-gray-400 bg-gray-50 text-lg">一元二次不等式速查</div>
              <div className="grid grid-cols-2 border-b border-gray-300">
                <div className="px-3 py-2 border-r border-gray-300">
                  <p><strong className="text-green-700">{'>'}</strong>（取两边）→ <Math tex="x < x_1" /> 或 <Math tex="x > x_2" /></p>
                </div>
                <div className="px-3 py-2">
                  <p><strong className="text-red-700">{'<'}</strong>（取中间）→ <Math tex="x_1 < x < x_2" /></p>
                </div>
              </div>
              <div className="px-3 py-2 bg-orange-50">
                <p className="text-orange-700 font-bold">口诀：大于取两边，小于取中间</p>
              </div>
            </div>

            {/* 例题 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-700 border-b border-gray-400 bg-gray-50">例题</div>
              <div className="px-3 py-2 space-y-2">
                <p><Math tex="x^2 - 3x + 2 < 0" />，因式分解 <Math tex="(x-1)(x-2) < 0" />，答案 <strong><Math tex="1 < x < 2" /></strong></p>
                <p><Math tex="x^2 - 4 \geq 0" />，因式分解 <Math tex="(x-2)(x+2) \geq 0" />，答案 <strong><Math tex="x \leq -2" /> 或 <Math tex="x \geq 2" /></strong></p>
              </div>
            </div>

            {/* 绝对值不等式核心公式 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-teal-700 border-b border-gray-400 bg-gray-50 text-lg">绝对值不等式（两句话搞定）</div>
              <table className="w-full border-collapse">
                <tbody>
                  <tr>
                    <td className="border-b border-r border-gray-300 px-3 py-3 font-bold text-green-700 w-36"><Math tex="|x| < a" /></td>
                    <td className="border-b border-r border-gray-300 px-3 py-3 text-center font-bold">夹中间</td>
                    <td className="border-b border-gray-300 px-3 py-3"><Math tex="-a < x < a" /></td>
                  </tr>
                  <tr>
                    <td className="border-r border-gray-300 px-3 py-3 font-bold text-red-700"><Math tex="|x| > a" /></td>
                    <td className="border-r border-gray-300 px-3 py-3 text-center font-bold">拆两边</td>
                    <td className="px-3 py-3"><Math tex="x < -a" /> 或 <Math tex="x > a" /></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 做题步骤 */}
            <div className="border border-orange-300 rounded overflow-hidden bg-orange-50">
              <div className="px-2 py-1 font-bold text-orange-700 border-b border-orange-300 bg-orange-100">做题就两步</div>
              <div className="px-3 py-2 space-y-1">
                <p><strong>①</strong> 看 {'<'} 还是 {'>'}，去绝对值（夹中间/拆两边）</p>
                <p><strong>②</strong> 解普通不等式（移项、化简）</p>
              </div>
            </div>

            {/* 例题 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-700 border-b border-gray-400 bg-gray-50 text-lg">例题</div>
              <div className="px-3 py-2 space-y-2 text-lg">
                <p><Math tex="|x - 1| < 3" />，夹中间 <Math tex="-3 < x-1 < 3" />，答案 <strong><Math tex="-2 < x < 4" /></strong></p>
                <p><Math tex="|x + 2| > 5" />，拆两边 <Math tex="x+2 < -5" /> 或 <Math tex="x+2 > 5" />，答案 <strong><Math tex="x < -7" /> 或 <Math tex="x > 3" /></strong></p>
                <p><Math tex="|x - 1| < |x + 3|" />，两边平方 <Math tex="(x-1)^2 < (x+3)^2" />，展开化简，答案 <strong><Math tex="x > -1" /></strong></p>
                <div>
                  <p><Math tex="\left|\frac{x-1}{x+2}\right| < 2" /></p>
                  <p className="ml-4">夹中间：<Math tex="-2 < \frac{x-1}{x+2} < 2" /></p>
                  <p className="ml-4">左边 <Math tex="\frac{x-1}{x+2} > -2" />，移项 <Math tex="\frac{x-1+2(x+2)}{x+2} > 0" />，即 <Math tex="\frac{3x+3}{x+2} > 0" />，得 <Math tex="x < -2" /> 或 <Math tex="x > -1" /></p>
                  <p className="ml-4">右边 <Math tex="\frac{x-1}{x+2} < 2" />，移项 <Math tex="\frac{x-1-2(x+2)}{x+2} < 0" />，即 <Math tex="\frac{-x-5}{x+2} < 0" />，得 <Math tex="x < -5" /> 或 <Math tex="x > -2" /></p>
                  <p className="ml-4">取交集，答案 <strong><Math tex="x < -5" /> 或 <Math tex="x > -1" /></strong></p>
                </div>
              </div>
            </div>

            <PracticeCard questions={logicPrereqPractice2} explanations={logicPrereqExplanations} optionCols={4} printOptionCols={4} />
          </div>
        </Collapsible>
      </section>

      {/* Section 3: Basic Reasoning */}
      <section id="lp-reasoning" className="mb-6 scroll-mt-4">
        <Collapsible title="三、基本推理能力" defaultOpen storageKey="logic-prereq:reasoning" headerExtra={<SpeakButton text={logicPrereqNarrations.reasoning} />}>
          <div className="space-y-0 text-lg text-gray-800">

            {/* 核心概念 */}
            <div className="border border-blue-300 rounded overflow-hidden bg-blue-50">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-blue-300 bg-blue-100">"推出"是什么意思？</div>
              <div className="px-3 py-2">
                <p>"A 推出 B" = <strong>如果 A 成立，B 是不是一定成立？</strong></p>
                <div className="mt-2 space-y-1">
                  <p>🐱 "它是猫" → "它是动物"　<strong className="text-green-600">✓ 能推出</strong></p>
                  <p>🐾 "它是动物" → "它是猫"　<strong className="text-red-600">✗ 推不出</strong>（狗也是动物）</p>
                </div>
              </div>
            </div>

            {/* 判断口诀 */}
            <div className="border border-orange-300 rounded overflow-hidden bg-orange-50">
              <div className="px-2 py-1 font-bold text-orange-700 border-b border-orange-300 bg-orange-100 text-lg">判断口诀（背这一句就够了）</div>
              <div className="px-3 py-3 space-y-2">
                <p className="text-xl"><strong>小范围 → 大范围</strong>：<span className="text-green-600 font-bold">能推出 ✓</span></p>
                <p className="text-xl"><strong>大范围 → 小范围</strong>：<span className="text-red-600 font-bold">推不出 ✗</span></p>
              </div>
            </div>

            {/* 数学例子 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-700 border-b border-gray-400 bg-gray-50 text-lg">例：<Math tex="x > 3" /> → <Math tex="x > 1" /> ？</div>
              <div className="px-3 py-2">
                <svg viewBox="0 0 360 80" className="w-full max-w-lg mx-auto">
                  {/* 数轴 */}
                  <line x1="10" y1="45" x2="350" y2="45" stroke="#9ca3af" strokeWidth="2" />
                  <polygon points="345,42 350,45 345,48" fill="#9ca3af" />
                  {[0, 1, 2, 3, 4, 5, 6].map((n) => (
                    <g key={n}>
                      <line x1={20 + n * 50} y1="40" x2={20 + n * 50} y2="50" stroke="#6b7280" strokeWidth="1.5" />
                      <text x={20 + n * 50} y="65" textAnchor="middle" fill="#4b5563" style={{ fontSize: '12px' }}>{n}</text>
                    </g>
                  ))}
                  
                  {/* x>1 大范围（蓝色，外层高） */}
                  <line x1="70" y1="45" x2="70" y2="15" stroke="#3b82f6" strokeWidth="2.5" />
                  <line x1="70" y1="15" x2="340" y2="15" stroke="#3b82f6" strokeWidth="2.5" />
                  <circle cx="70" cy="45" r="4" fill="white" stroke="#3b82f6" strokeWidth="2" />
                  <text x="200" y="10" textAnchor="middle" fill="#3b82f6" fontWeight="bold" style={{ fontSize: '12px' }}>x {'>'}1（大范围）</text>
                  
                  {/* x>3 小范围（红色，内层矮） */}
                  <line x1="170" y1="45" x2="170" y2="28" stroke="#ef4444" strokeWidth="2.5" />
                  <line x1="170" y1="28" x2="340" y2="28" stroke="#ef4444" strokeWidth="2.5" />
                  <circle cx="170" cy="45" r="4" fill="white" stroke="#ef4444" strokeWidth="2" />
                  <text x="255" y="24" textAnchor="middle" fill="#ef4444" fontWeight="bold" style={{ fontSize: '12px' }}>x {'>'}3（小范围）</text>
                </svg>
                <p className="text-center text-lg"><span className="text-red-600 font-bold">小</span>在<span className="text-blue-600 font-bold">大</span>里面 → <strong className="text-green-600">能推出 ✓</strong></p>
              </div>
            </div>

            {/* 两个绝招 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-teal-700 border-b border-gray-400 bg-gray-50">判断两绝招</div>
              <div className="px-3 py-2 space-y-2">
                <p><strong>绝招1：想范围大小</strong> — 小的能推出大的，大的推不出小的</p>
                <p><strong>绝招2：找反例</strong> — 找一个 A 成立但 B 不成立的例子</p>
              </div>
            </div>

            {/* 符号 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-700 border-b border-gray-400 bg-gray-50">符号</div>
              <div className="px-3 py-2">
                <p>"A 推出 B" 写成 <Math tex="A \Rightarrow B" />，读作"若 A 则 B"</p>
              </div>
            </div>

            <PracticeCard questions={logicPrereqPractice3} explanations={logicPrereqExplanations} optionCols={4} printOptionCols={4} />

            <div className="border border-red-300 rounded overflow-hidden bg-red-50">
              <div className="px-2 py-1 font-bold text-red-700 border-b border-red-300 bg-red-100">易错点</div>
              <div className="px-3 py-2 space-y-1">
                <p><strong>方向别搞反</strong>：A→B 是问"A成立时B是否一定成立"</p>
                <p>找反例只需要<strong>一个</strong>就够了</p>
              </div>
            </div>
          </div>
        </Collapsible>
      </section>

      <PageBreak label="选择题自测" />

      {/* Section 4: Quiz */}
      <section id="lp-quiz" className="mb-8 scroll-mt-4">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-green-500 text-white flex items-center justify-center text-sm font-bold">
            4
          </span>
          选择题自测
        </h2>
        <QuizPanel module="logic-prereq" questions={logicPrereqQuizQuestions} title="前置知识自测" description="8道选择题，覆盖子集、不等式、推出判断" explanations={logicPrereqExplanations} optionCols={2} />
      </section>

      {isPrinting && printOptions.showAnswers && <LogicPrereqAnswers />}

      </LessonLayout>
    </div>
  );
}
