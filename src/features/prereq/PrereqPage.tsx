import { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

import { Math, MathInput, Collapsible, SpeakButton } from '@/components/shared';
import { prereqNarrations } from './data/narrations';

interface SelfTestItem {
  question: string;
  questionLatex?: string;
  answer: string;
  answerLatex?: string;
}

const selfTestItems: SelfTestItem[] = [
  { question: '(-3)² = ?', questionLatex: '(-3)^2', answer: '9' },
  { question: '√(9 + 16) = ?', questionLatex: '\\sqrt{9+16}', answer: '5', answerLatex: '\\sqrt{25} = 5' },
  { question: '(2+3)(4-1) = ?', answer: '15' },
  { question: '(a+b)(a-b) = ?', answer: 'a² - b²', answerLatex: 'a^2 - b^2' },
  { question: '(1+x)² = ?', questionLatex: '(1+x)^2', answer: '1 + 2x + x²', answerLatex: '1 + 2x + x^2' },
  { question: '5 - (-3) = ?', answer: '8' },
  { question: '(-2) × (-5) = ?', answer: '10' },
  { question: '3/4 + 1/6 = ?', questionLatex: '\\frac{3}{4} + \\frac{1}{6}', answer: '11/12', answerLatex: '\\frac{11}{12}' },
  { question: '67 ÷ 4 的余数 = ?', answer: '3' },
  { question: '(-1) × (-1) = ?', answer: '1' },
];

export function PrereqPage() {
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

  const checkAnswer = (idx: number, answer: string) => {
    const correct = selfTestItems[idx].answer;
    return answer.replace(/\s/g, '') === correct.replace(/\s/g, '');
  };

  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-amber-600 mb-2">
          <span>📚</span>
          <span>前置准备</span>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-black text-gray-900 mb-2">1.0 前置知识回顾</h1>
          <SpeakButton text={prereqNarrations.intro} />
        </div>
        <p className="text-gray-500">学复数之前，先确保这些初中数学没问题</p>
        <div className="flex flex-wrap gap-3 mt-3">
          <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
            约30分钟
          </span>
          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
            初中基础
          </span>
        </div>
      </div>

      <section className="mb-6">
        <Collapsible title="一、数的分类" defaultOpen storageKey="prereq:num-class" headerExtra={<SpeakButton text={prereqNarrations.numClass} />}>
          <div className="bg-gray-50 rounded-lg p-4 text-sm space-y-1 mb-3">
            <p>自然数（<Math tex="0, 1, 2, 3 \ldots" />）</p>
            <p className="pl-4 text-gray-400">↓ 加入负数</p>
            <p>整数（<Math tex="\ldots -2, -1, 0, 1, 2 \ldots" />）</p>
            <p className="pl-4 text-gray-400">↓ 加入分数</p>
            <p>有理数（能写成 <Math tex="\dfrac{p}{q}" /> 的数）</p>
            <p className="pl-4 text-gray-400">↓ 加入无理数（如 <Math tex="\sqrt{2}" />，<Math tex="\pi" />）</p>
            <p>实数（数轴上所有的数）</p>
            <p className="pl-4 text-gray-400">↓ 加入虚数单位 <Math tex="i" /></p>
            <p className="font-bold text-blue-600">复数（<Math tex="a + bi" />）← 你即将学的</p>
          </div>
          <p className="text-sm text-gray-600">
            每次扩展都是因为<strong>原来的数不够用了</strong>
            。复数不是奇怪的东西，它只是数的自然延伸。
          </p>
        </Collapsible>
      </section>

      <section className="mb-6">
        <Collapsible title="二、平方与平方根" defaultOpen storageKey="prereq:square" headerExtra={<SpeakButton text={prereqNarrations.square} />}>
          <p className="text-sm text-gray-700 mb-3">
            <strong>关键性质：任何实数的平方 <Math tex="\geq 0" /></strong>
            ，所以实数范围内不存在平方等于负数的数 → 需要发明 <Math tex="i" />
          </p>
          <div className="bg-gray-50 rounded-lg p-4 mb-3">
            <p className="text-sm mb-2 font-bold">常用平方数（背熟提速）：</p>
            <div className="grid grid-cols-4 gap-2 text-sm text-center">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => (
                <div key={n} className="bg-white rounded px-2 py-1 border border-gray-200">
                  <Math tex={`${n}^2=${n * n}`} />
                </div>
              ))}
            </div>
          </div>
          <div className="bg-blue-50 rounded-lg p-3 text-sm text-blue-800">
            <strong>高频组合：</strong>
            <Math tex="3^2+4^2=25=5^2" /> ， <Math tex="1^2+1^2=2" /> →{' '}
            <Math tex="\sqrt{2} \approx 1.414" />
          </div>
        </Collapsible>
      </section>

      <section className="mb-6">
        <Collapsible title="三、分数运算" defaultOpen storageKey="prereq:fraction" headerExtra={<SpeakButton text={prereqNarrations.fraction} />}>
          <div className="space-y-3 text-sm text-gray-700">
            <div>
              <p className="font-bold mb-1">加减（先通分）：</p>
              <Math
                tex="\frac{1}{2} + \frac{1}{3} = \frac{3}{6} + \frac{2}{6} = \frac{5}{6}"
                display
              />
            </div>
            <div>
              <p className="font-bold mb-1">乘法（分子乘分子，分母乘分母）：</p>
              <Math tex="\frac{2}{3} \times \frac{4}{5} = \frac{8}{15}" display />
            </div>
            <div>
              <p className="font-bold mb-1">除法（乘以倒数）：</p>
              <Math
                tex="\frac{2}{3} \div \frac{4}{5} = \frac{2}{3} \times \frac{5}{4} = \frac{10}{12} = \frac{5}{6}"
                display
              />
            </div>
          </div>
        </Collapsible>
      </section>

      <section className="mb-6">
        <Collapsible title="四、多项式展开（复数乘法的核心）" defaultOpen storageKey="prereq:polynomial" headerExtra={<SpeakButton text={prereqNarrations.polynomial} />}>
          <div className="space-y-4 text-sm text-gray-700">
            <div>
              <p className="font-bold mb-1">分配律：</p>
              <Math tex="a(b+c) = ab + ac" display />
            </div>
            <div>
              <p className="font-bold mb-1">两括号相乘（FOIL）：</p>
              <Math tex="(a+b)(c+d) = ac + ad + bc + bd" display />
            </div>
            <div>
              <p className="font-bold mb-1">完全平方公式：</p>
              <Math tex="(a+b)^2 = a^2 + 2ab + b^2" display />
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="font-bold text-red-700 mb-1">平方差公式（复数除法的核心！）：</p>
              <Math tex="(a+b)(a-b) = a^2 - b^2" display />
              <p className="text-red-700 mt-2">
                复数中：
                <Math tex="(a+bi)(a-bi) = a^2 + b^2" /> →
                总是正实数！这就是为什么除法要乘共轭。
              </p>
            </div>
          </div>
        </Collapsible>
      </section>

      <section className="mb-6">
        <Collapsible title="五、负数运算" defaultOpen storageKey="prereq:negative" headerExtra={<SpeakButton text={prereqNarrations.negative} />}>
          <div className="space-y-2 text-sm text-gray-700">
            <p>
              <strong>同号得正，异号得负：</strong>
            </p>
            <div className="bg-gray-50 rounded-lg p-3 font-mono">
              <p>正 × 正 = 正　　正 × 负 = 负</p>
              <p>负 × 正 = 负　　负 × 负 = 正</p>
            </div>
            <p className="mt-2">
              <strong>复数中常见：</strong>
            </p>
            <div className="space-y-1">
              <p>
                <Math tex="i^2 = -1" />
              </p>
              <p>
                <Math tex="3i^2 = 3 \times (-1) = -3" />
              </p>
              <p>
                <Math tex="-2i^2 = -2 \times (-1) = 2" /> ← 负负得正！
              </p>
            </div>
          </div>
        </Collapsible>
      </section>

      <section className="mb-6">
        <Collapsible title="六、除以4求余数" defaultOpen storageKey="prereq:remainder" headerExtra={<SpeakButton text={prereqNarrations.remainder} />}>
          <p className="text-sm text-gray-700 mb-2">判断 <Math tex="i" /> 的幂次时需要：</p>
          <div className="bg-gray-50 rounded-lg p-3 text-sm space-y-1">
            <p>
              <Math tex="17 \div 4 = 4" /> 余 <strong>1</strong> → <Math tex="i^{17} = i" />
            </p>
            <p>
              <Math tex="22 \div 4 = 5" /> 余 <strong>2</strong> → <Math tex="i^{22} = -1" />
            </p>
            <p>
              <Math tex="100 \div 4 = 25" /> 余 <strong>0</strong> → <Math tex="i^{100} = 1" />
            </p>
            <p>
              <Math tex="2025 \div 4 = 506" /> 余 <strong>1</strong> → <Math tex="i^{2025} = i" />
            </p>
          </div>
        </Collapsible>
      </section>

      {/* Self test */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">自测清单</h2>
        <p className="text-sm text-gray-500 mb-4">
          做完10题，确认初中基础没问题。点击题目查看答案。
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
                    <span className="text-gray-400"> = ?</span>
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
                  onChange={(latex) =>
                    setUserAnswers((prev) => ({ ...prev, [idx]: latex }))
                  }
                  placeholder="点击输入答案..."
                  className="w-full"
                />
              </div>

              {revealed.has(idx) && (
                <div className="px-4 py-3 bg-gray-50 border-t border-gray-100 flex items-center gap-3">
                  {userAnswers[idx] &&
                    (checkAnswer(idx, userAnswers[idx]) ? (
                      <CheckCircle size={18} className="text-green-500 shrink-0" />
                    ) : (
                      <XCircle size={18} className="text-red-500 shrink-0" />
                    ))}
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
          <p>
            <strong>全对</strong> → 直接学 1.1 复数，没有障碍
          </p>
          <p>
            <strong>错了1-2题</strong> → 把错的部分再看一遍
          </p>
          <p>
            <strong>错了3题以上</strong> → 上面的知识点从头认真看一遍
          </p>
        </div>
      </section>
    </div>
  );
}
