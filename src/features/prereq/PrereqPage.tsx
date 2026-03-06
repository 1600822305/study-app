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
          <p className="text-sm text-gray-600 mb-4">
            数学里的"数"，就像一个<strong>不断升级的工具箱</strong>。每当旧工具解决不了新问题，就往里加新工具。
          </p>
          <div className="space-y-4 text-sm text-gray-700">
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-bold mb-1">第1层：自然数</p>
              <p className="text-gray-500 mb-1"><Math tex="0, 1, 2, 3, 4, 5, \ldots" /></p>
              <p>最早学的<strong>数东西用的数</strong>。3个苹果、5支笔、0分。</p>
              <p className="text-green-700 mt-1 font-medium">总结：自然数 = 0和正整数，用来数数和计数。</p>
              <p className="text-red-600 mt-1">问题：<Math tex="3 - 5 = ?" /> 自然数里没有答案，不够减。</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-bold mb-1">第2层：整数</p>
              <p className="text-gray-500 mb-1"><Math tex="\ldots -3, -2, -1, 0, 1, 2, 3, \ldots" /></p>
              <p>加入了<strong>负数</strong>。零下5度（-5℃）、欠了10块钱（-10元）。</p>
              <p>现在 <Math tex="3 - 5 = -2" />，能算了。</p>
              <p className="text-green-700 mt-1 font-medium">总结：整数 = 没有小数点的数，包括正整数、0、负整数。</p>
              <p className="text-red-600 mt-1">问题：<Math tex="1 \div 3 = ?" /> 整数里没有答案，结果不是整数。</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-bold mb-1">第3层：有理数</p>
              <p className="text-gray-500 mb-1"><Math tex="\frac{1}{2},\; -\frac{3}{4},\; 0.75,\; 0.333\ldots" /></p>
              <p>加入了<strong>分数</strong>（小数也是分数的另一种写法）。能写成 <Math tex="\frac{p}{q}" /> 的数都叫有理数。</p>
              <p className="text-green-700 mt-1 font-medium">总结：有理数 = 能写成分数的数，包括整数、有限小数、循环小数。</p>
              <p className="text-red-600 mt-1">问题：<Math tex="\sqrt{2} = ?" /> 无限不循环小数，写不成分数。</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-bold mb-1">第4层：实数</p>
              <p>有理数 + <strong>无理数</strong>（如 <Math tex="\sqrt{2}" />、<Math tex="\pi" />）= 实数。</p>
              <p>简单理解：<strong>数轴上能标出来的所有点</strong>都是实数。</p>
              <p className="text-green-700 mt-1 font-medium">总结：实数 = 数轴上所有的点 = 有理数 + 无理数。</p>
              <p className="text-red-600 mt-1">问题：<Math tex="x^2 = -1" />，<Math tex="x = ?" /> 任何实数的平方都 <Math tex="\geq 0" />，解不了。</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="font-bold text-blue-700 mb-1">第5层：复数 ← 你即将学的</p>
              <p>发明<strong>虚数单位 <Math tex="i" /></strong>，规定 <Math tex="i^2 = -1" />。</p>
              <p>实数和虚数组合写成 <Math tex="a + bi" /> 的形式，就叫<strong>复数</strong>。</p>
              <p className="text-green-700 mt-1 font-medium">总结：复数 = <Math tex="a + bi" />，a 是实部，b 是虚部，<Math tex="i^2 = -1" />。</p>
            </div>
          </div>
          <div className="mt-4 bg-gray-50 rounded-lg p-3 text-sm text-center">
            <Math tex="\text{自然数} \to \text{整数} \to \text{有理数} \to \text{实数} \to \text{复数}" />
          </div>
          <p className="text-sm text-gray-600 mt-2">
            每次扩展都是因为<strong>原来的数不够用了</strong>。复数不是奇怪的东西，它只是数的<strong>第5次自然升级</strong>。
          </p>
        </Collapsible>
      </section>

      <section className="mb-6">
        <Collapsible title="二、平方与平方根" defaultOpen storageKey="prereq:square" headerExtra={<SpeakButton text={prereqNarrations.square} />}>
          <div className="space-y-4 text-sm text-gray-700">
            <div>
              <p className="font-bold mb-1">平方：</p>
              <div className="bg-gray-50 rounded-lg p-3 space-y-1 font-mono">
                <p><Math tex="3^2 = 3 \times 3 = 9" /></p>
                <p><Math tex="(-3)^2 = (-3) \times (-3) = 9" /></p>
                <p><Math tex="5^2 = 25" /></p>
                <p><Math tex="0.1^2 = 0.01" /></p>
              </div>
            </div>
            <p>
              <strong>关键性质：任何实数的平方 <Math tex="\geq 0" /></strong>
              ，所以实数范围内不存在平方等于负数的数 → 需要发明 <Math tex="i" />（<Math tex="i^2 = -1" />）
            </p>
            <div>
              <p className="font-bold mb-1">平方根（反过来：已知平方结果，求原来的数）：</p>
              <div className="bg-gray-50 rounded-lg p-3 space-y-1 font-mono">
                <p><Math tex="\sqrt{9} = 3" />（因为 <Math tex="3^2 = 9" />）</p>
                <p><Math tex="\sqrt{25} = 5" />（因为 <Math tex="5^2 = 25" />）</p>
                <p><Math tex="\sqrt{2} \approx 1.414" />（无理数，记个大概）</p>
                <p><Math tex="\sqrt{0} = 0" /></p>
              </div>
              <p className="mt-2 text-gray-500">注意：<Math tex="\sqrt{\phantom{x}}" /> 号默认取正值（算术平方根）</p>
            </div>
            <div>
              <p className="font-bold mb-1">绝对值符号 <Math tex="|\;\;|" />：</p>
              <div className="bg-gray-50 rounded-lg p-3 space-y-1">
                <p>初中里表示<strong>绝对值</strong>（一个数到0的距离，取正）：</p>
                <p className="pl-4"><Math tex="|5| = 5" />，<Math tex="|-3| = 3" />，<Math tex="|0| = 0" /></p>
                <p className="text-gray-500 mt-1">简单说：<strong>去掉符号只看大小</strong></p>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-blue-800">
              <p><strong>复数中会用到：</strong>这个符号叫<strong>模</strong>，含义类似——表示复数的"大小"。</p>
              <Math tex="|3 + 4i| = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5" display />
              <p className="text-sm text-gray-600 mt-1">你现在不需要理解为什么这么算，只要知道 <Math tex="|\;\;|" /> 在复数里表示大小，计算时需要平方和开方。</p>
            </div>
          </div>
        </Collapsible>
      </section>

      <section className="mb-6">
        <Collapsible title="三、常用平方数" defaultOpen storageKey="prereq:square-table" headerExtra={<SpeakButton text={prereqNarrations.squareTable} />}>
          <div className="space-y-3 text-sm text-gray-700">
            <p className="font-bold">背熟，计算提速：</p>
            <div className="grid grid-cols-4 gap-2 text-sm text-center">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((n) => (
                <div key={n} className="bg-white rounded px-2 py-1 border border-gray-200">
                  <Math tex={`${n}^2=${n * n}`} />
                </div>
              ))}
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-blue-800">
              <p className="font-bold mb-1">高频组合（勾股数）：</p>
              <div className="space-y-1">
                <p><Math tex="3^2+4^2 = 9+16 = 25 = 5^2" /> → <Math tex="\sqrt{25}=5" /></p>
                <p><Math tex="5^2+12^2 = 25+144 = 169 = 13^2" /> → <Math tex="\sqrt{169}=13" /></p>
                <p><Math tex="1^2+1^2 = 2" /> → <Math tex="\sqrt{2} \approx 1.414" /></p>
                <p><Math tex="1^2+2^2 = 5" /> → <Math tex="\sqrt{5} \approx 2.236" /></p>
              </div>
            </div>
          </div>
        </Collapsible>
      </section>

      <section className="mb-6">
        <Collapsible title="四、分数运算" defaultOpen storageKey="prereq:fraction" headerExtra={<SpeakButton text={prereqNarrations.fraction} />}>
          <div className="space-y-3 text-sm text-gray-700">
            <div>
              <p className="font-bold mb-1">加减：</p>
              <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                <p>同分母：直接加减分子</p>
                <Math tex="\frac{2}{5} + \frac{1}{5} = \frac{3}{5}" display />
                <p>异分母：先通分</p>
                <Math tex="\frac{1}{2} + \frac{1}{3} = \frac{3}{6} + \frac{2}{6} = \frac{5}{6}" display />
              </div>
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
            <div>
              <p className="font-bold mb-1">约分（找公因数，同时除掉）：</p>
              <div className="bg-gray-50 rounded-lg p-3 space-y-1">
                <p><Math tex="\frac{6}{10} = \frac{3}{5}" />（同除以2）</p>
                <p><Math tex="\frac{12}{15} = \frac{4}{5}" />（同除以3）</p>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-blue-800">
              <strong>复数中的例子：</strong>
              <Math tex="\frac{4-2i}{2} = \frac{4}{2} - \frac{2}{2}i = 2 - i" display />
            </div>
          </div>
        </Collapsible>
      </section>

      <section className="mb-6">
        <Collapsible title="五、多项式展开（复数乘法的核心）" defaultOpen storageKey="prereq:polynomial" headerExtra={<SpeakButton text={prereqNarrations.polynomial} />}>
          <div className="space-y-4 text-sm text-gray-700">
            <div>
              <p className="font-bold mb-1">分配律：</p>
              <Math tex="a(b+c) = ab + ac" display />
              <div className="bg-gray-50 rounded-lg p-3 mt-1 space-y-1">
                <p>例：<Math tex="3(x+2) = 3x + 6" /></p>
                <p>例：<Math tex="2(1+i) = 2 + 2i" /></p>
              </div>
            </div>
            <div>
              <p className="font-bold mb-1">两括号相乘（FOIL）：</p>
              <Math tex="(a+b)(c+d) = ac + ad + bc + bd" display />
              <p className="text-gray-500 mb-2">口诀：首首 + 首尾 + 尾首 + 尾尾</p>
              <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                <div>
                  <p className="font-bold">例1：</p>
                  <Math tex="(2+3)(4+5) = 2{\times}4 + 2{\times}5 + 3{\times}4 + 3{\times}5 = 8+10+12+15 = 45" display />
                </div>
                <div>
                  <p className="font-bold">例2（复数乘法！）：</p>
                  <Math tex="(2+i)(3-i) = 6-2i+3i-i^2 = 6+i-(-1) = 7+i" display />
                </div>
              </div>
            </div>
            <div>
              <p className="font-bold mb-1">完全平方公式：</p>
              <Math tex="(a+b)^2 = a^2 + 2ab + b^2" display />
              <div className="bg-gray-50 rounded-lg p-3 mt-1">
                <p className="font-bold">例：</p>
                <Math tex="(1+i)^2 = 1^2 + 2(1)(i) + i^2 = 1 + 2i + (-1) = 2i" display />
              </div>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="font-bold text-red-700 mb-1">平方差公式（复数除法的核心！）：</p>
              <Math tex="(a+b)(a-b) = a^2 - b^2" display />
              <div className="mt-2 space-y-1 text-red-700">
                <p><Math tex="(1+i)(1-i) = 1^2 - i^2 = 1-(-1) = 2" /></p>
                <p><Math tex="(2+3i)(2-3i) = 4 - 9i^2 = 4+9 = 13" /></p>
                <p><Math tex="(a+bi)(a-bi) = a^2 - b^2 i^2 = a^2 + b^2" /> → 总是正实数！</p>
              </div>
              <p className="text-red-700 mt-2">
                这就是为什么除法要“乘以共轭复数”——<strong>用平方差公式把分母变成实数</strong>。
              </p>
            </div>
          </div>
        </Collapsible>
      </section>

      <section className="mb-6">
        <Collapsible title="六、负数运算" defaultOpen storageKey="prereq:negative" headerExtra={<SpeakButton text={prereqNarrations.negative} />}>
          <div className="space-y-3 text-sm text-gray-700">
            <div>
              <p className="font-bold mb-1">负数的加减：</p>
              <div className="bg-gray-50 rounded-lg p-3 space-y-1">
                <p>正 + 负：看谁绝对值大</p>
                <p className="pl-4"><Math tex="5 + (-3) = 2" /></p>
                <p className="pl-4"><Math tex="3 + (-7) = -4" /></p>
                <p>负 + 负：绝对值相加，结果取负</p>
                <p className="pl-4"><Math tex="(-3) + (-5) = -8" /></p>
                <p>减去负数 = 加上正数</p>
                <p className="pl-4"><Math tex="5 - (-3) = 5 + 3 = 8" /></p>
              </div>
            </div>
            <div>
              <p className="font-bold mb-1">负数的乘除：</p>
              <div className="bg-gray-50 rounded-lg p-3 font-mono">
                <p>正 × 正 = 正　　正 × 负 = 负</p>
                <p>负 × 正 = 负　　负 × 负 = 正</p>
              </div>
              <p className="mt-1 text-gray-500">口诀：同号得正，异号得负</p>
            </div>
            <div>
              <p className="font-bold mb-1">复数中常见的情况：</p>
              <div className="space-y-1">
                <p><Math tex="i^2 = -1" /></p>
                <p><Math tex="3i^2 = 3 \times (-1) = -3" /></p>
                <p><Math tex="-2i^2 = -2 \times (-1) = 2" /> ← 负负得正！</p>
                <p><Math tex="i^2 + 1 = -1 + 1 = 0" /></p>
                <p><Math tex="2 - i^2 = 2 - (-1) = 2 + 1 = 3" /></p>
              </div>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-amber-800">
              <strong>最容易犯的错：</strong>忘记 <Math tex="i^2 = -1" /> 带入时的符号变化。
            </div>
          </div>
        </Collapsible>
      </section>

      <section className="mb-6">
        <Collapsible title="七、除以4求余数" defaultOpen storageKey="prereq:remainder" headerExtra={<SpeakButton text={prereqNarrations.remainder} />}>
          <p className="text-sm text-gray-700 mb-2">判断 <Math tex="i" /> 的幂次时需要：</p>
          <div className="bg-gray-50 rounded-lg p-3 text-sm space-y-1 mb-3">
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
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-800">
            <p className="font-bold mb-1">快速判断余数的技巧：看最后两位</p>
            <p className="text-gray-600 mb-1">最后两位 ÷ 4 的余数 = 整个数 ÷ 4 的余数</p>
            <div className="space-y-1">
              <p>2025 → 最后两位 25 ÷ 4 = 6 余 <strong>1</strong> → 余 1</p>
              <p>2024 → 最后两位 24 ÷ 4 = 6 余 <strong>0</strong> → 余 0</p>
            </div>
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
