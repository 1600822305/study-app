import { Flame, Lightbulb, AlertTriangle } from 'lucide-react';

import { Math, QuizQuestion, Collapsible, ProgressTracker, SpeakButton } from '@/components/shared';
import { logicNarrations } from './data/narrations';
import { useProgress, useQuiz } from '@/hooks';
import { logicQuizQuestions } from './data/quiz';
import { logicProgressItems } from './data/progress';

export function LogicPage() {
  const { items, toggle } = useProgress('logic', logicProgressItems);
  const { stats: quizScore, recordAnswer } = useQuiz('logic');

  const handleQuizAnswer = (id: string, correct: boolean) => {
    const q = logicQuizQuestions.find((q) => q.id === id);
    if (q) recordAnswer(id, correct ? q.correctAnswer : '', q.correctAnswer, correct);
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-blue-600 mb-2">
          <Flame size={16} />
          <span>第一阶段 · 数学语言</span>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-black text-gray-900 mb-2">1.3 常用逻辑用语</h1>
          <SpeakButton text={logicNarrations.intro} />
        </div>
        <p className="text-gray-500">从零到满分 · 2-3小时搞定</p>
        <div className="flex flex-wrap gap-3 mt-3">
          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
            难度 ★★☆☆☆
          </span>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
            高考常考 5分
          </span>
          <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
            约2-3小时
          </span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Part 1: Propositions */}
          <section className="mb-8">
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

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                <p className="font-bold text-green-800 text-sm mb-2">✏️ 即时练习</p>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>判断下列哪些是命题：</p>
                  <p>1. "5 是质数" → <strong>是命题（真命题）</strong></p>
                  <p>2. "x + 1 = 0" → <strong>不是命题（x 不确定）</strong></p>
                  <p>3. "1 + 1 = 3" → <strong>是命题（假命题）</strong></p>
                </div>
              </div>
            </div>
          </section>

          {/* Part 2: Four Types of Propositions */}
          <section className="mb-8">
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

            <div className="bg-slate-900 text-white rounded-xl p-5 text-center mb-4">
              <p className="text-sm text-slate-400 mb-2">核心规律（必记！）</p>
              <p className="text-lg font-bold">原命题 ↔ 逆否命题：同真同假</p>
              <p className="text-sm text-slate-400 mt-2">逆命题 ↔ 否命题：同真同假</p>
              <p className="text-xs text-slate-500 mt-3">高考用法：直接证明原命题很难时 → 可以去证明逆否命题（等价的）</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="font-bold text-green-800 text-sm mb-2">✏️ 即时练习</p>
              <div className="text-sm text-gray-700 space-y-1">
                <p>原命题："若 x = 2，则 x² = 4"（真命题）</p>
                <p>1. 写出逆命题 → <strong>"若 x² = 4，则 x = 2"（假，x 也可能 = -2）</strong></p>
                <p>2. 写出逆否命题 → <strong>"若 x² ≠ 4，则 x ≠ 2"（真，和原命题同真同假）</strong></p>
              </div>
            </div>
          </section>

          {/* Part 3: Sufficient & Necessary Conditions */}
          <section className="mb-8">
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

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4 flex items-start gap-3">
              <Lightbulb size={20} className="text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-amber-800 text-sm">数学定义</p>
                <p className="text-amber-700 text-sm mt-1">
                  若 <Math tex="p \Rightarrow q" />（p 能推出 q），则 p 是 q 的<strong>充分</strong>条件，q 是 p 的<strong>必要</strong>条件。
                </p>
                <p className="text-amber-700 text-sm mt-1">充分 = "有它就够了"（p 成立，q 一定成立）</p>
                <p className="text-amber-700 text-sm">必要 = "没它不行"（q 不成立，p 一定不成立）</p>
              </div>
            </div>

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

            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4 mb-4">
              <p className="font-bold text-green-800 text-sm mb-2">✏️ 即时练习</p>
              <div className="text-sm text-gray-700 space-y-1">
                <p>1. p: x = 2，q: x² - 4 = 0。p 是 q 的什么条件？ → <strong>充分不必要条件</strong>（x=2→x²-4=0 ✓，但 x=-2 也满足）</p>
                <p>2. p: x {'>'} 3，q: x {'>'} 1。p 是 q 的什么条件？ → <strong>充分不必要条件</strong>（A⊂B，小推大）</p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
              <AlertTriangle size={20} className="text-amber-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-amber-700 text-sm">⚠️ 易错点</p>
                <div className="text-amber-700 text-sm mt-1 space-y-1">
                  <p>1. <strong>方向别搞反</strong>：p→q 说的是 p 充分，不是 q 充分</p>
                  <p>2. <strong>拿不准就用集合法</strong>：先求出集合 A 和 B，比大小最靠谱</p>
                </div>
              </div>
            </div>
          </section>

          {/* Part 4: Quantifiers */}
          <section className="mb-8">
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
                <p className="text-sm text-slate-400 mb-2">否定规则</p>
                <div className="space-y-2">
                  <p><Math tex="\forall" /> 变 <Math tex="\exists" />，同时条件取反</p>
                  <p><Math tex="\exists" /> 变 <Math tex="\forall" />，同时条件取反</p>
                </div>
              </div>

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

              <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3 mt-3">
                <AlertTriangle size={20} className="text-red-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-red-700 text-sm">⚠️ 易错点：否定 ≠ 否命题！</p>
                  <div className="text-red-700 text-sm mt-1 space-y-1">
                    <p><strong>"否定"</strong>是对整个命题说"不对"（∀ ↔ ∃ 互换 + 条件取反）</p>
                    <p><strong>"否命题"</strong>是把条件和结论都取反（若非p则非q）</p>
                    <p>两者是<strong>完全不同</strong>的概念！</p>
                  </div>
                </div>
              </div>
            </Collapsible>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
              <p className="font-bold text-green-800 text-sm mb-2">✏️ 即时练习</p>
              <div className="text-sm text-gray-700 space-y-1">
                <p>1. 写出 "<Math tex="\forall x \in \mathbb{R},\; 2x > 0" />" 的否定 → <strong><Math tex="\exists x \in \mathbb{R},\; 2x \leq 0" /></strong>（∀变∃，{'>'} 变 ≤）</p>
                <p>2. 写出 "存在一个三角形，内角和不等于180°" 的否定 → <strong>"所有三角形的内角和都等于180°"</strong>（∃变∀）</p>
              </div>
            </div>
          </section>

          {/* Part 5: Logical Connectives */}
          <section className="mb-8">
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

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="font-bold text-green-800 text-sm mb-2">✏️ 即时练习</p>
              <div className="text-sm text-gray-700 space-y-1">
                <p>1. p: 5 是奇数（真），q: 4 {'<'} 3（假），求 "p 且 q" 和 "p 或 q" → <strong>假、真</strong></p>
                <p>2. 写出 "x ≤ -1 或 x {'>'} 5" 的否定 → <strong>"x {'>'} -1 且 x ≤ 5"</strong>（或变且，≤ 变 {'>'}，{'>'} 变 ≤）</p>
              </div>
            </div>
          </section>

          {/* Part 6: Quiz */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-green-500 text-white flex items-center justify-center text-sm font-bold">
                6
              </span>
              高考真题实战
              {quizScore.total > 0 && (
                <span className="ml-auto text-sm font-normal text-gray-500">
                  {quizScore.correct}/{quizScore.total} 正确
                </span>
              )}
            </h2>

            {logicQuizQuestions.map((q) => (
              <QuizQuestion key={q.id} {...q} onAnswer={handleQuizAnswer} />
            ))}
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
        </div>

        {/* Sidebar: Progress */}
        <div className="lg:w-72 shrink-0">
          <div className="lg:sticky lg:top-6">
            <ProgressTracker items={items} onToggle={toggle} />
          </div>
        </div>
      </div>
    </div>
  );
}
