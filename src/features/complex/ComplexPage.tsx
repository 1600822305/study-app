import { Flame, Lightbulb, AlertTriangle } from 'lucide-react';

import { Math, QuizQuestion, Collapsible, ProgressTracker } from '@/components/shared';
import { useProgress, useQuiz } from '@/hooks';
import { complexQuizQuestions } from './data/quiz';
import { complexProgressItems } from './data/progress';

export function ComplexPage() {
  const { items, toggle } = useProgress('complex', complexProgressItems);
  const { stats: quizScore, recordAnswer } = useQuiz('complex');

  const handleQuizAnswer = (id: string, correct: boolean) => {
    const q = complexQuizQuestions.find((q) => q.id === id);
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
        <h1 className="text-3xl font-black text-gray-900 mb-2">1.1 复数</h1>
        <p className="text-gray-500">从零到满分 · 2小时搞定高考必拿5分</p>
        <div className="flex flex-wrap gap-3 mt-3">
          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
            难度 ★☆☆☆☆
          </span>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
            高考必考 5分
          </span>
          <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
            约2小时
          </span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Part 1: Why */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                1
              </span>
              为什么要发明复数？
            </h2>

            <div className="bg-white rounded-xl border border-gray-200 p-5 mb-4">
              <p className="text-gray-700 mb-4">你学过解方程：</p>
              <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm space-y-2 mb-4">
                <div className="flex items-center gap-3">
                  <Math tex="x + 3 = 5" />
                  <span className="text-gray-400">→</span>
                  <Math tex="x = 2" />
                  <span className="text-green-500 font-bold">✓</span>
                </div>
                <div className="flex items-center gap-3">
                  <Math tex="x^2 = 4" />
                  <span className="text-gray-400">→</span>
                  <Math tex="x = \pm 2" />
                  <span className="text-green-500 font-bold">✓</span>
                </div>
                <div className="flex items-center gap-3">
                  <Math tex="x^2 = -1" />
                  <span className="text-gray-400">→</span>
                  <Math tex="x = \;?" />
                  <span className="text-red-500 font-bold">✗ 没有实数解！</span>
                </div>
              </div>

              <p className="text-gray-700 mb-3">
                数学家说：既然没有，那就<strong>造一个</strong>。
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <p className="text-blue-800 text-sm">
                  就像人类发明了"0"来表示"没有"，发明了"负数"来表示"欠债"，
                  现在发明一个新数 <strong>i</strong> 来表示"平方等于-1的数"。
                </p>
              </div>

              <div className="bg-slate-900 text-white rounded-xl p-5 text-center">
                <p className="text-sm text-slate-400 mb-2">核心定义（整个复数的根基）</p>
                <Math tex="i^2 = -1" display className="text-2xl" />
                <p className="text-sm text-slate-400 mt-3">
                  就这一条，整个复数体系都从这里长出来。
                </p>
              </div>
            </div>
          </section>

          {/* Part 2: What */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                2
              </span>
              什么是复数？
            </h2>

            <div className="bg-white rounded-xl border border-gray-200 p-5 mb-4">
              <div className="bg-gray-50 rounded-lg p-4 text-center mb-4">
                <Math tex="z = a + bi" display />
                <div className="flex justify-center gap-8 mt-3 text-sm text-gray-600">
                  <span>
                    <strong>a</strong> = 实部
                  </span>
                  <span>
                    <strong>b</strong> = 虚部（系数！）
                  </span>
                  <span>
                    <strong>i</strong> = 虚数单位
                  </span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-3 py-2 text-left">复数 z</th>
                      <th className="border border-gray-200 px-3 py-2 text-center">实部 a</th>
                      <th className="border border-gray-200 px-3 py-2 text-center">虚部 b</th>
                      <th className="border border-gray-200 px-3 py-2 text-left">类型</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['3 + 2i', '3', '2', '虚数'],
                      ['5 - 4i', '5', '-4', '虚数'],
                      ['7', '7', '0', '实数'],
                      ['3i', '0', '3', '纯虚数'],
                    ].map(([z, a, b, type], idx) => (
                      <tr key={idx} className="hover:bg-blue-50">
                        <td className="border border-gray-200 px-3 py-2">
                          <Math tex={z} />
                        </td>
                        <td className="border border-gray-200 px-3 py-2 text-center">{a}</td>
                        <td className="border border-gray-200 px-3 py-2 text-center">{b}</td>
                        <td className="border border-gray-200 px-3 py-2">{type}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
              <AlertTriangle size={20} className="text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-red-700 text-sm">高考陷阱</p>
                <p className="text-red-700 text-sm mt-1">
                  虚部是系数 <strong>b</strong>，不是 bi！ 例：
                  <Math tex="z = 3 + 5i" /> 的虚部是 <strong>5</strong>，不是 5i。每年都有人栽。
                </p>
              </div>
            </div>
          </section>

          {/* Part 3: Operations */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                3
              </span>
              四则运算
            </h2>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4 flex items-start gap-3">
              <Lightbulb size={20} className="text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-amber-800 text-sm">核心思想（第一性原理）</p>
                <p className="text-amber-700 text-sm mt-1">
                  把 i 当成一个字母（像 x 一样），按多项式运算规则来算，遇到 i² 就替换成 -1。
                  <strong>就这一条，你就会算所有复数运算了。</strong>
                </p>
              </div>
            </div>

            <Collapsible title="加法和减法" defaultOpen storageKey="complex:add-sub">
              <p className="mb-3">实部加实部，虚部加虚部：</p>
              <div className="bg-gray-50 rounded-lg p-4 mb-3">
                <Math tex="(a + bi) + (c + di) = (a+c) + (b+d)i" display />
              </div>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>例：</strong> <Math tex="(3+2i) + (1+4i) = 4 + 6i" />
                </p>
                <p>
                  <strong>例：</strong> <Math tex="(5+3i) - (2-i) = 3 + 4i" />
                </p>
              </div>
            </Collapsible>

            <Collapsible title="乘法" defaultOpen storageKey="complex:mul">
              <p className="mb-3">展开括号，遇到 i² 换成 -1：</p>
              <div className="bg-gray-50 rounded-lg p-4 mb-3">
                <Math
                  tex="(2+3i)(1+i) = 2 + 2i + 3i + 3i^2 = 2 + 5i - 3 = -1 + 5i"
                  display
                />
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-3">
                <p className="text-blue-800 text-sm font-bold mb-1">必记结论：</p>
                <div className="flex gap-6">
                  <Math tex="(1+i)^2 = 2i" />
                  <Math tex="(1-i)^2 = -2i" />
                </div>
              </div>
            </Collapsible>

            <Collapsible title="i 的幂次规律（必背）" defaultOpen storageKey="complex:i-powers">
              <div className="overflow-x-auto">
                <table className="text-sm border-collapse mb-3">
                  <tbody>
                    <tr>
                      {[
                        ['i^1', 'i'],
                        ['i^2', '-1'],
                        ['i^3', '-i'],
                        ['i^4', '1'],
                      ].map(([power, result], idx) => (
                        <td
                          key={idx}
                          className="border border-gray-200 px-4 py-2 text-center"
                        >
                          <Math tex={`${power} = ${result}`} />
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-700 mb-2">
                <strong>每4个一循环！</strong>快速求法：指数除以4看余数
              </p>
              <p className="text-sm text-gray-600">
                例：<Math tex="i^{2025}" />，2025 ÷ 4 = 506 余 <strong>1</strong>，所以{' '}
                <Math tex="i^{2025} = i" />
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-3">
                <p className="text-blue-800 text-sm">
                  <strong>连续4个i的幂相加 = 0：</strong>
                  <Math tex="i^n + i^{n+1} + i^{n+2} + i^{n+3} = 0" />
                </p>
              </div>
            </Collapsible>

            <Collapsible title="共轭复数" defaultOpen storageKey="complex:conjugate">
              <p className="mb-3">实部相同，虚部相反：</p>
              <div className="bg-gray-50 rounded-lg p-4 mb-3">
                <Math tex="z = a + bi \quad \Rightarrow \quad \bar{z} = a - bi" display />
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-blue-800 text-sm">
                  <strong>关键性质：</strong>
                  <Math tex="z \cdot \bar{z} = (a+bi)(a-bi) = a^2 + b^2" />
                  （总是非负实数！）
                </p>
              </div>
            </Collapsible>

            <Collapsible title="除法（最重要的运算技巧）" defaultOpen storageKey="complex:division">
              <p className="mb-3 font-bold text-gray-800">
                核心方法：分母实数化——上下同乘分母的共轭复数
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-600 mb-2">
                  例：计算 <Math tex="\dfrac{1+i}{1-i}" />
                </p>
                <Math
                  tex="\frac{1+i}{1-i} = \frac{(1+i)(1+i)}{(1-i)(1+i)} = \frac{(1+i)^2}{1^2+1^2} = \frac{2i}{2} = i"
                  display
                />
              </div>
              <div className="bg-slate-100 rounded-lg p-4 text-sm">
                <p className="font-bold mb-2">除法三步走：</p>
                <ol className="list-decimal list-inside space-y-1 text-gray-700">
                  <li>写出分母的共轭复数</li>
                  <li>分子分母同时乘以这个共轭复数</li>
                  <li>展开计算，整理成 a + bi 的形式</li>
                </ol>
              </div>
            </Collapsible>

            <Collapsible title="复数的模（大小）" defaultOpen storageKey="complex:modulus">
              <div className="bg-gray-50 rounded-lg p-4 mb-3">
                <Math tex="|z| = |a + bi| = \sqrt{a^2 + b^2}" display />
              </div>
              <div className="space-y-1 text-sm text-gray-700">
                <p>
                  例：<Math tex="|3+4i| = \sqrt{9+16} = \sqrt{25} = 5" />
                </p>
                <p>
                  例：<Math tex="|1-i| = \sqrt{1+1} = \sqrt{2}" />
                </p>
              </div>
            </Collapsible>
          </section>

          {/* Part 4: Quiz */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-green-500 text-white flex items-center justify-center text-sm font-bold">
                4
              </span>
              高考真题实战
              {quizScore.total > 0 && (
                <span className="ml-auto text-sm font-normal text-gray-500">
                  {quizScore.correct}/{quizScore.total} 正确
                </span>
              )}
            </h2>

            {complexQuizQuestions.map((q) => (
              <QuizQuestion key={q.id} {...q} onAnswer={handleQuizAnswer} />
            ))}
          </section>

          {/* Part 5: Summary */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-purple-500 text-white flex items-center justify-center text-sm font-bold">
                5
              </span>
              知识总结卡片
            </h2>
            <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-3 text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-slate-400 text-xs mb-1">定义</p>
                  <p>
                    <Math tex="z = a + bi" /> （a实部，b虚部）
                  </p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs mb-1">核心</p>
                  <p>
                    <Math tex="i^2 = -1" />
                  </p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs mb-1">除法</p>
                  <p>上下同乘分母的共轭</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs mb-1">模</p>
                  <p>
                    <Math tex="|z| = \sqrt{a^2 + b^2}" />
                  </p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs mb-1">i的周期</p>
                  <p>
                    <Math tex="i \to -1 \to -i \to 1 \to i \to \cdots" />
                  </p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs mb-1">必记</p>
                  <p>
                    <Math tex="(1+i)^2=2i" />，<Math tex="(1-i)^2=-2i" />
                  </p>
                </div>
              </div>
              <div className="border-t border-slate-700 pt-3 mt-3">
                <p className="text-amber-400 font-bold text-xs">
                  ⚠ 虚部是 b，不是 bi ← 高考最大陷阱！
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
