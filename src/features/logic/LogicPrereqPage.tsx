import { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

import { Math, MathInput, Collapsible, SpeakButton } from '@/components/shared';
import { logicPrereqNarrations } from './data/prereq-narrations';

interface SelfTestItem {
  question: string;
  questionLatex?: string;
  answer: string;
  answerLatex?: string;
}

const selfTestItems: SelfTestItem[] = [
  {
    question: 'A = (1, 4)，B = (0, 5)，A 和 B 谁包含谁？',
    answer: 'A⊂B',
    answerLatex: 'A \\subset B',
  },
  {
    question: '解不等式：x² - 5x + 4 ≤ 0',
    questionLatex: 'x^2 - 5x + 4 \\leq 0',
    answer: '1≤x≤4',
    answerLatex: '1 \\leq x \\leq 4',
  },
  {
    question: '解不等式：|x + 2| < 3',
    questionLatex: '|x + 2| < 3',
    answer: '-5<x<1',
    answerLatex: '-5 < x < 1',
  },
  {
    question: 'p: x = 1，q: x² = 1，p 能推出 q 吗？q 能推出 p 吗？',
    answer: 'p→q能,q→p不能',
  },
];

export function LogicPrereqPage() {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});

  const toggleReveal = (idx: number) => {
    setRevealed((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-amber-600 mb-2">
          <span>📚</span>
          <span>前置准备</span>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-black text-gray-900 mb-2">1.2.5 逻辑用语前置知识</h1>
          <SpeakButton text={logicPrereqNarrations.intro} />
        </div>
        <p className="text-gray-500">学逻辑之前，先确保子集关系、解不等式、基本推理没问题</p>
        <div className="flex flex-wrap gap-3 mt-3">
          <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
            约15-20分钟
          </span>
          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
            集合基础
          </span>
        </div>
      </div>

      {/* Section 1: Subset Relations */}
      <section className="mb-6">
        <Collapsible title="一、集合的子集关系" defaultOpen storageKey="logic-prereq:subset" headerExtra={<SpeakButton text={logicPrereqNarrations.subset} />}>
          <div className="space-y-3 text-sm text-gray-700">
            <p>充分必要条件的判断，本质就是<strong>比较两个集合的大小</strong>。</p>

            <div className="bg-gray-50 rounded-lg p-4 space-y-1">
              <p className="font-bold mb-2">子集回顾</p>
              <p><Math tex="A \subseteq B" /> → A 里的每个元素都在 B 里</p>
              <p><Math tex="A \subset B" /> → A 是 B 的真子集（A 被 B 包含，且 A ≠ B）</p>
              <p><Math tex="A = B" /> → 两个集合完全相同</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-bold mb-2">用数轴比较区间大小</p>
              <p>A = (2, 5)，B = (1, 6)</p>
              <div className="mt-2 font-mono text-xs text-gray-500 space-y-1">
                <p>A: &nbsp;&nbsp;&nbsp;&nbsp;(2═══5)</p>
                <p>B: &nbsp;(1════════6)</p>
              </div>
              <p className="mt-2">A 在 B 里面 → <Math tex="A \subset B" /></p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-blue-800 text-sm">
                <strong>预告：</strong>学逻辑用语时，你会用到"<Math tex="A \subset B" /> 则 p 是 q 的充分条件"。
                现在先记住怎么判断谁包含谁。
              </p>
            </div>
          </div>
        </Collapsible>
      </section>

      {/* Section 2: Solving Inequalities */}
      <section className="mb-6">
        <Collapsible title="二、解不等式" defaultOpen storageKey="logic-prereq:inequality" headerExtra={<SpeakButton text={logicPrereqNarrations.inequalityReview} />}>
          <div className="space-y-4 text-sm text-gray-700">
            <div>
              <p className="font-bold mb-2">一元二次不等式速查</p>
              <div className="bg-gray-50 rounded-lg p-4 space-y-1">
                <p><Math tex="ax^2+bx+c > 0 \;\Rightarrow\; x < x_1 \text{ 或 } x > x_2" />（取两边）</p>
                <p><Math tex="ax^2+bx+c < 0 \;\Rightarrow\; x_1 < x < x_2" />（取中间）</p>
              </div>
            </div>

            <div>
              <p className="font-bold mb-2">例</p>
              <div className="bg-gray-50 rounded-lg p-3 space-y-1">
                <p><Math tex="x^2 - 3x + 2 < 0 \;\Rightarrow\; (x-1)(x-2) < 0 \;\Rightarrow\; 1 < x < 2" /></p>
                <p><Math tex="x^2 - 4 \geq 0 \;\Rightarrow\; (x-2)(x+2) \geq 0 \;\Rightarrow\; x \leq -2 \text{ 或 } x \geq 2" /></p>
              </div>
            </div>

            <div>
              <p className="font-bold mb-2">绝对值不等式速查</p>
              <div className="bg-gray-50 rounded-lg p-4 space-y-1">
                <p><Math tex="|x| < a \;\Rightarrow\; -a < x < a" /></p>
                <p><Math tex="|x| > a \;\Rightarrow\; x < -a \text{ 或 } x > a" /></p>
                <p><Math tex="|x - b| < a \;\Rightarrow\; b - a < x < b + a" /></p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-bold text-gray-800 mb-1">例：<Math tex="|x - 1| < 3" /></p>
              <p><Math tex="1 - 3 < x < 1 + 3 \;\Rightarrow\; -2 < x < 4" /></p>
            </div>
          </div>
        </Collapsible>
      </section>

      {/* Section 3: Basic Reasoning */}
      <section className="mb-6">
        <Collapsible title="三、基本推理能力" defaultOpen storageKey="logic-prereq:reasoning" headerExtra={<SpeakButton text={logicPrereqNarrations.reasoning} />}>
          <div className="space-y-4 text-sm text-gray-700">
            <div>
              <p className="font-bold mb-2">"推出"是什么意思？</p>
              <div className="bg-gray-50 rounded-lg p-4 space-y-1">
                <p><Math tex="p \Rightarrow q" /> 读作"p 推出 q"或"若 p 则 q"</p>
                <p className="text-gray-500">意思是：只要 p 成立，q 一定成立</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-bold text-gray-800 mb-2">例</p>
              <div className="space-y-1">
                <p>"x = 2" → "x 是偶数" ✓（能推出）</p>
                <p>"x 是偶数" → "x = 2" ✗（x=4 也是偶数，推不出）</p>
              </div>
            </div>

            <div>
              <p className="font-bold mb-2">判断能否推出的方法</p>
              <div className="space-y-2">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold text-gray-800">方法1：举反例</p>
                  <p className="text-gray-600">找到 p 成立但 q 不成立的例子 → 推不出</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold text-gray-800">方法2：集合包含</p>
                  <p className="text-gray-600">p 的范围（集合A）<Math tex="\subseteq" /> q 的范围（集合B）→ 能推出</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-bold text-gray-800 mb-2">综合例</p>
              <p>p: "x {'>'} 3"，q: "x {'>'} 1"</p>
              <div className="mt-2 space-y-1">
                <p>p → q？x {'>'} 3 当然 x {'>'} 1 ✓（能推出）</p>
                <p>q → p？x {'>'} 1 不一定 x {'>'} 3（如 x = 2）✗（推不出）</p>
              </div>
            </div>
          </div>
        </Collapsible>
      </section>

      {/* Self test */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">自测清单</h2>
        <p className="text-sm text-gray-500 mb-4">
          做完4题，确认基础没问题。点击题目查看答案。
        </p>

        <div className="space-y-3">
          {selfTestItems.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="flex items-center gap-3 px-4 py-3">
                <span className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-500 shrink-0">
                  {idx + 1}
                </span>
                <div className="flex-1">
                  <p className="text-sm text-gray-800">
                    {item.questionLatex ? <Math tex={item.questionLatex} /> : item.question}
                  </p>
                </div>
                <button
                  onClick={() => toggleReveal(idx)}
                  className="text-sm text-blue-500 hover:text-blue-700 cursor-pointer whitespace-nowrap shrink-0"
                >
                  {revealed.has(idx) ? '收起' : '查看答案'}
                </button>
              </div>

              <div className="px-4 pb-3">
                <MathInput
                  value={userAnswers[idx] || ''}
                  onChange={(latex) => setUserAnswers((prev) => ({ ...prev, [idx]: latex }))}
                  placeholder="点击输入答案..."
                  className="w-full"
                />
              </div>

              {revealed.has(idx) && (
                <div className="px-4 py-3 bg-gray-50 border-t border-gray-100 flex items-center gap-3">
                  {userAnswers[idx] && (
                    userAnswers[idx].replace(/\s/g, '') === item.answer.replace(/\s/g, '') ? (
                      <CheckCircle size={18} className="text-green-500 shrink-0" />
                    ) : (
                      <XCircle size={18} className="text-red-500 shrink-0" />
                    )
                  )}
                  <span className="text-sm text-gray-700">
                    答案：
                    <strong>
                      {item.answerLatex ? <Math tex={item.answerLatex} /> : item.answer}
                    </strong>
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl text-sm text-green-800">
          <p><strong>全对</strong> → 直接学 1.3 常用逻辑用语，没有障碍</p>
          <p><strong>错了1题</strong> → 把错的部分再看一遍</p>
          <p><strong>错了2题以上</strong> → 上面的知识点从头认真看一遍</p>
        </div>
      </section>
    </div>
  );
}
