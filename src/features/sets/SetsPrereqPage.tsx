import { useState, useEffect, useRef } from 'react';
import { CheckCircle, XCircle, Lightbulb } from 'lucide-react';
import { Mafs, Coordinates, Point, Line, Text as MafsText } from 'mafs';

import { Math, MathInput, Collapsible, SpeakButton, ProgressTracker, QuizPanel } from '@/components/shared';
import { setsPrereqNarrations } from './data/prereq-narrations';
import { setsPrereqProgressItems } from './data/prereq-progress';
import { setsPrereqQuizQuestions } from './data/prereq-quiz';
import { useProgress } from '@/hooks';
import { storage } from '@/lib/storage';

interface SelfTestItem {
  question: string;
  questionLatex?: string;
  answer: string;
  answerLatex?: string;
}

const selfTestItems: SelfTestItem[] = [
  {
    question: '解方程：x² - x - 6 = 0',
    questionLatex: 'x^2 - x - 6 = 0',
    answer: 'x=3或x=-2',
    answerLatex: 'x = 3 \\text{ 或 } x = -2',
  },
  {
    question: '解不等式：x² - 5x + 6 < 0',
    questionLatex: 'x^2 - 5x + 6 < 0',
    answer: '2<x<3',
    answerLatex: '2 < x < 3',
  },
  {
    question: '解不等式：x² - 4 ≥ 0',
    questionLatex: 'x^2 - 4 \\geq 0',
    answer: 'x≤-2或x≥2',
    answerLatex: 'x \\leq -2 \\text{ 或 } x \\geq 2',
  },
  {
    question: '用区间表示：{x | -3 < x ≤ 5}',
    questionLatex: '\\{x \\mid -3 < x \\leq 5\\}',
    answer: '(-3,5]',
    answerLatex: '(-3, 5]',
  },
  {
    question: '在数轴上 {x | 1 ≤ x < 4}，1 用什么圆？4 用什么圆？',
    answer: '1实心4空心',
  },
];

export function SetsPrereqPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('sets-prereq', setsPrereqProgressItems);
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const restoredRef = useRef(false);

  // Restore self-test answers from IndexedDB
  useEffect(() => {
    storage.ui.getJSON<Record<number, string>>('sets-prereq:selftest-answers', {}).then((saved) => {
      if (saved && Object.keys(saved).length > 0) {
        setUserAnswers(saved);
      }
      restoredRef.current = true;
    });
  }, []);

  // Persist self-test answers
  useEffect(() => {
    if (!restoredRef.current) return;
    storage.ui.setJSON('sets-prereq:selftest-answers', userAnswers);
  }, [userAnswers]);

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
          <h1 className="text-3xl font-black text-gray-900 mb-2">1.1.5 集合前置知识</h1>
          <SpeakButton text={setsPrereqNarrations.intro} />
        </div>
        <p className="text-gray-500">学集合之前，先确保解方程、解不等式、画数轴没问题</p>
        <div className="flex flex-wrap gap-3 mt-3">
          <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
            约20-30分钟
          </span>
          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
            初中+高一基础
          </span>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-5 mb-6">
        <p className="font-bold text-gray-800 mb-2">📋 知识地图</p>
        <div className="text-sm text-gray-600 space-y-1">
          <p>一、解一元二次方程（因式分解 + 公式法）</p>
          <p>二、解一元二次不等式（大于取两边，小于取中间）</p>
          <p>三、数轴的使用（○ 和 ●）</p>
          <p>四、区间表示法（开闭区间 + ∞）</p>
          <p>五、自测清单（填空验证）</p>
          <p>六、选择题自测（8题）</p>
        </div>
      </div>

      <ProgressTracker items={progressItems} onToggle={toggleProgress} />

      {/* Section 1: Solving Quadratic Equations */}
      <section className="mb-6">
        <Collapsible title="一、解一元二次方程" defaultOpen storageKey="sets-prereq:equation" headerExtra={<SpeakButton text={setsPrereqNarrations.equation} />}>
          <div className="space-y-4 text-sm text-gray-700">
            <div>
              <p className="font-bold mb-2">因式分解法（最常用）</p>
              <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm space-y-1">
                <p><Math tex="x^2 - 5x + 6 = 0" /></p>
                <p className="text-gray-500">找两个数：乘起来 = 6，加起来 = -5 → -2 和 -3</p>
                <p><Math tex="(x-2)(x-3) = 0 \quad \Rightarrow \quad x=2 \text{ 或 } x=3" /></p>
              </div>
            </div>

            <div>
              <p className="font-bold mb-2">常见因式分解套路</p>
              <div className="bg-gray-50 rounded-lg p-4 text-sm space-y-1">
                <p><Math tex="x^2 - 4 = 0 \;\Rightarrow\; (x+2)(x-2) = 0 \;\Rightarrow\; x = \pm 2" /></p>
                <p><Math tex="x^2 - 3x = 0 \;\Rightarrow\; x(x-3) = 0 \;\Rightarrow\; x = 0 \text{ 或 } x = 3" /></p>
                <p><Math tex="x^2 - 2x - 3 = 0 \;\Rightarrow\; (x-3)(x+1) = 0 \;\Rightarrow\; x = 3 \text{ 或 } x = -1" /></p>
              </div>
            </div>

            <div>
              <p className="font-bold mb-2">公式法（因式分解搞不定时用）</p>
              <div className="bg-gray-50 rounded-lg p-4">
                <Math tex="x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}" display />
                <div className="mt-2 text-sm space-y-1">
                  <p><Math tex="\Delta = b^2 - 4ac" /> 叫判别式：</p>
                  <p className="pl-4"><Math tex="\Delta > 0" /> → 两个不同的实数根</p>
                  <p className="pl-4"><Math tex="\Delta = 0" /> → 一个实数根（重根）</p>
                  <p className="pl-4"><Math tex="\Delta < 0" /> → 没有实数根（无解）</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 mt-3">
                <p className="font-bold text-gray-800 mb-1">例：<Math tex="x^2 + 2x - 1 = 0" /></p>
                <div className="space-y-1 text-gray-700">
                  <p><Math tex="a=1,\; b=2,\; c=-1" /></p>
                  <p><Math tex="\Delta = 4 - 4(1)(-1) = 8 > 0" /></p>
                  <p><Math tex="x = \dfrac{-2 \pm \sqrt{8}}{2} = \dfrac{-2 \pm 2\sqrt{2}}{2} = -1 \pm \sqrt{2}" /></p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="font-bold text-green-800 mb-1">✏️ 即时练习</p>
              <p className="text-gray-700">1. <Math tex="x^2 - x - 6 = 0" />，x = ____　答案：<strong><Math tex="x=3 \text{ 或 } x=-2" /></strong></p>
              <p className="text-gray-700">2. <Math tex="x^2 + 2x + 1 = 0" />，x = ____　答案：<strong><Math tex="x = -1" /></strong>（重根）</p>
            </div>
          </div>
        </Collapsible>
      </section>

      {/* Section 2: Quadratic Inequalities */}
      <section className="mb-6">
        <Collapsible title="二、解一元二次不等式（集合最核心的前置技能！）" defaultOpen storageKey="sets-prereq:inequality" headerExtra={<SpeakButton text={setsPrereqNarrations.inequality} />}>
          <div className="space-y-4 text-sm text-gray-700">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="font-bold text-amber-800 mb-2">核心方法：三步走</p>
              <div className="text-amber-700 space-y-1">
                <p>1. 化成标准形式 <Math tex="ax^2 + bx + c > 0" /></p>
                <p>2. 解对应方程，找到两个根 <Math tex="x_1 < x_2" /></p>
                <p>3. 用口诀写答案</p>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-xl p-5 text-center">
              <p className="text-sm text-slate-400 mb-2">口诀（必记！）</p>
              <p className="text-lg font-bold">大于取两边，小于取中间</p>
              <div className="mt-3 text-sm text-slate-300 space-y-1 text-left">
                <p><Math tex="ax^2+bx+c > 0 \;\Rightarrow\; x < x_1 \text{ 或 } x > x_2" /></p>
                <p><Math tex="ax^2+bx+c < 0 \;\Rightarrow\; x_1 < x < x_2" /></p>
              </div>
            </div>

            <div>
              <p className="font-bold mb-2">例题演练</p>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold text-gray-800 mb-1">例1：<Math tex="x^2 - 3x - 4 < 0" /></p>
                  <p>解方程：<Math tex="(x-4)(x+1) = 0 \;\Rightarrow\; x = -1, 4" /></p>
                  <p>"小于取中间" → <Math tex="-1 < x < 4" /></p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold text-gray-800 mb-1">例2：<Math tex="x^2 - 2x - 3 \geq 0" /></p>
                  <p>解方程：<Math tex="(x-3)(x+1) = 0 \;\Rightarrow\; x = -1, 3" /></p>
                  <p>"大于取两边"（含等号） → <Math tex="x \leq -1 \text{ 或 } x \geq 3" /></p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold text-gray-800 mb-1">例3：<Math tex="x^2 - 4x + 3 \leq 0" /></p>
                  <p>解方程：<Math tex="(x-1)(x-3) = 0 \;\Rightarrow\; x = 1, 3" /></p>
                  <p>"小于取中间"（含等号） → <Math tex="1 \leq x \leq 3" /></p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold text-gray-800 mb-1">例4：<Math tex="x^2 + 2x > 0" /></p>
                  <p>解方程：<Math tex="x(x+2) = 0 \;\Rightarrow\; x = -2, 0" /></p>
                  <p>"大于取两边" → <Math tex="x < -2 \text{ 或 } x > 0" /></p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-start gap-2">
              <Lightbulb size={16} className="text-amber-600 shrink-0 mt-0.5" />
              <p className="text-amber-700 text-sm"><strong>为什么？</strong>二次函数 <Math tex="y = ax^2+bx+c" />（a{'>'} 0）的图像是开口朝上的抛物线。两个根之间在 x 轴下面（{'<'} 0），两边在 x 轴上面（{'>'} 0）。</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="font-bold text-green-800 mb-1">✏️ 即时练习</p>
              <p className="text-gray-700">1. <Math tex="x^2 - 5x + 6 < 0" /> 的解集 = ____　答案：<strong><Math tex="2 < x < 3" /></strong></p>
              <p className="text-gray-700">2. <Math tex="x^2 - 4 \geq 0" /> 的解集 = ____　答案：<strong><Math tex="x \leq -2 \text{ 或 } x \geq 2" /></strong></p>
            </div>
          </div>
        </Collapsible>
      </section>

      {/* Section 3: Number Line */}
      <section className="mb-6">
        <Collapsible title="三、数轴的使用" defaultOpen storageKey="sets-prereq:numberline" headerExtra={<SpeakButton text={setsPrereqNarrations.numberLine} />}>
          <div className="space-y-3 text-sm text-gray-700">
            <p><strong>数轴</strong> = 一条画了数字的直线，左边小右边大。</p>

            <div className="rounded-lg overflow-hidden border border-gray-200">
              <Mafs viewBox={{ x: [-5, 5], y: [-1.5, 1.5] }} preserveAspectRatio={false} height={120}>
                <Coordinates.Cartesian xAxis={{ labels: (x) => `${x}` }} yAxis={false} />
                {/* x > 2: 空心圆 + 射线向右 */}
                <Line.Segment point1={[2, 0.8]} point2={[5, 0.8]} color="#3b82f6" weight={3} />
                <Point x={2} y={0.8} color="white" />
                <MafsText x={-1} y={0.8} size={11} color="#3b82f6">x {'>'} 2（○ 不含）</MafsText>
                {/* -1 < x ≤ 3: 空心-1 实心3 */}
                <Line.Segment point1={[-1, -0.5]} point2={[3, -0.5]} color="#ef4444" weight={3} />
                <Point x={-1} y={-0.5} color="white" />
                <Point x={3} y={-0.5} color="#ef4444" />
                <MafsText x={1} y={-1} size={11} color="#ef4444">-1 {'<'} x ≤ 3（○…●）</MafsText>
              </Mafs>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
              <p className="font-bold mb-2">在数轴上表示不等式</p>
              <p><Math tex="x > 2" /> → 2 右边，不含 2（空心圆 ○）</p>
              <p><Math tex="x \geq 2" /> → 2 右边，含 2（实心圆 ●）</p>
              <p><Math tex="-1 < x \leq 3" /> → -1 到 3，-1 不含（○），3 含（●）</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-blue-800 font-bold text-sm">关键符号</p>
              <p className="text-blue-700 text-sm mt-1">○ 空心圆 = 不包含（对应 {'<'} 或 {'>'}）</p>
              <p className="text-blue-700 text-sm">● 实心圆 = 包含（对应 ≤ 或 ≥）</p>
            </div>
          </div>
        </Collapsible>
      </section>

      {/* Section 4: Interval Notation */}
      <section className="mb-6">
        <Collapsible title="四、区间表示法" defaultOpen storageKey="sets-prereq:interval" headerExtra={<SpeakButton text={setsPrereqNarrations.interval} />}>
          <div className="space-y-3 text-sm text-gray-700">
            <p>区间是不等式的另一种写法，更简洁。</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-3 py-2 text-left">不等式</th>
                    <th className="border border-gray-200 px-3 py-2 text-left">区间写法</th>
                    <th className="border border-gray-200 px-3 py-2 text-left">说明</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['a < x < b', '(a, b)', '开区间'],
                    ['a \\leq x \\leq b', '[a, b]', '闭区间'],
                    ['x > a', '(a, +\\infty)', '∞ 永远用小括号'],
                    ['x \\geq a', '[a, +\\infty)', ''],
                    ['x < b', '(-\\infty, b)', ''],
                  ].map(([ineq, interval, note], idx) => (
                    <tr key={idx} className="hover:bg-blue-50">
                      <td className="border border-gray-200 px-3 py-2"><Math tex={ineq} /></td>
                      <td className="border border-gray-200 px-3 py-2"><Math tex={interval} /></td>
                      <td className="border border-gray-200 px-3 py-2 text-gray-500">{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-gray-50 rounded-lg p-3 space-y-1">
              <p className="font-bold">规则：</p>
              <p>小括号 ( ) → 不包含端点（开）</p>
              <p>中括号 [ ] → 包含端点（闭）</p>
              <p>无穷 ∞ → 永远用小括号</p>
            </div>
          </div>
        </Collapsible>
      </section>

      {/* Self test */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">自测清单</h2>
        <p className="text-sm text-gray-500 mb-4">
          做完5题，确认基础没问题。点击题目查看答案。
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
          <p><strong>全对</strong> → 直接学 1.2 集合，没有障碍</p>
          <p><strong>错了1-2题</strong> → 把错的部分再看一遍</p>
          <p><strong>错了3题以上</strong> → 上面的知识点从头认真看一遍</p>
        </div>
      </section>

      {/* Section 6: Quiz */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-green-500 text-white flex items-center justify-center text-sm font-bold">
            6
          </span>
          选择题自测
        </h2>
        <QuizPanel module="sets-prereq" questions={setsPrereqQuizQuestions} title="前置知识自测" description="8道选择题，检验解方程、解不等式、区间表示是否过关" />
      </section>
    </div>
  );
}
