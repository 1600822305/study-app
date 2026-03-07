import { useState, useEffect, useRef } from 'react';
import { CheckCircle, XCircle, Lightbulb, AlertTriangle } from 'lucide-react';
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
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const restoredRef = useRef(false);

  // Restore self-test state from IndexedDB
  useEffect(() => {
    Promise.all([
      storage.ui.getJSON<Record<number, string>>('sets-prereq:selftest-answers', {}),
      storage.ui.getJSON<boolean>('sets-prereq:selftest-submitted', false),
    ]).then(([savedAnswers, savedSubmitted]) => {
      if (savedAnswers && Object.keys(savedAnswers).length > 0) {
        setUserAnswers(savedAnswers);
      }
      if (savedSubmitted) setSubmitted(true);
      restoredRef.current = true;
    });
  }, []);

  // Persist self-test state
  useEffect(() => {
    if (!restoredRef.current) return;
    storage.ui.setJSON('sets-prereq:selftest-answers', userAnswers);
  }, [userAnswers]);

  useEffect(() => {
    if (!restoredRef.current) return;
    storage.ui.setJSON('sets-prereq:selftest-submitted', submitted);
  }, [submitted]);

  const handleSubmitTest = () => setSubmitted(true);
  const handleResetTest = () => {
    setUserAnswers({});
    setSubmitted(false);
    storage.ui.remove('sets-prereq:selftest-answers');
    storage.ui.remove('sets-prereq:selftest-submitted');
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

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main content */}
        <div className="flex-1 min-w-0">

      {/* Section 1: Solving Quadratic Equations */}
      <section className="mb-6">
        <Collapsible title="一、解一元二次方程" defaultOpen storageKey="sets-prereq:equation" headerExtra={<SpeakButton text={setsPrereqNarrations.equation} />}>
          <p className="text-xs text-blue-600 mb-3">🎯 学完你能：用因式分解法和公式法解一元二次方程，快速确定集合的元素。</p>
          <div className="space-y-4 text-sm text-gray-700">

            {/* 什么是一元二次方程 */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="font-bold text-blue-800 mb-2">先搞清楚：什么是一元二次方程？</p>
              <p className="text-blue-700">长这样的方程：<Math tex="ax^2 + bx + c = 0" />（其中 a ≠ 0）</p>
              <p className="text-blue-700 mt-1">只有<strong>一个未知数 x</strong>，x 的最高次方是 <strong>2</strong>，所以叫"一元二次"。</p>
              <p className="text-blue-600 mt-2 text-xs">集合题里经常说"A = {'{'} x | x² - 5x + 6 = 0 {'}'}"，你需要解出 x 才能知道集合里有什么元素。</p>
            </div>

            {/* 必背公式 */}
            <div className="bg-slate-900 text-white rounded-xl p-5">
              <p className="text-sm text-slate-400 mb-3">必背！因式分解要用到的两个公式</p>
              <div className="space-y-3">
                <div className="bg-slate-800 rounded-lg p-3">
                  <p className="text-xs text-slate-400 mb-1">平方差公式</p>
                  <Math tex="a^2 - b^2 = (a+b)(a-b)" />
                  <p className="text-xs text-slate-500 mt-1">看到"一个平方 减 另一个平方"就能用</p>
                </div>
                <div className="bg-slate-800 rounded-lg p-3">
                  <p className="text-xs text-slate-400 mb-1">完全平方公式</p>
                  <Math tex="(a+b)^2 = a^2 + 2ab + b^2" />
                  <Math tex="(a-b)^2 = a^2 - 2ab + b^2" />
                  <p className="text-xs text-slate-500 mt-1">中间项 = 2倍乘积，末项 = 那个数的平方</p>
                </div>
              </div>
            </div>

            {/* 因式分解法 */}
            <div>
              <p className="font-bold mb-2">方法一：因式分解法（最常用，优先试）</p>
              <p className="text-gray-500 text-xs mb-2">核心思路：把方程拆成"两个东西相乘 = 0"的形式，那其中一个必须 = 0。</p>
              <div className="bg-gray-50 rounded-lg p-4 text-sm space-y-3">
                <div>
                  <p className="font-bold text-gray-800">例：<Math tex="x^2 - 5x + 6 = 0" /></p>
                  <div className="mt-2 pl-3 border-l-2 border-blue-300 space-y-1.5">
                    <p><span className="text-blue-600 font-bold">第一步</span>：找两个数，要满足：</p>
                    <p className="pl-4">乘起来 = 常数项 6</p>
                    <p className="pl-4">加起来 = 一次项系数 -5</p>
                    <p><span className="text-blue-600 font-bold">第二步</span>：试一试 → <strong>-2 × -3 = 6 ✓，-2 + -3 = -5 ✓</strong></p>
                    <p><span className="text-blue-600 font-bold">第三步</span>：写成乘积：<Math tex="(x-2)(x-3) = 0" /></p>
                    <p><span className="text-blue-600 font-bold">第四步</span>：两个括号，哪个 = 0 都行：</p>
                    <p className="pl-4"><Math tex="x - 2 = 0 \;\Rightarrow\; x = 2" />　或　<Math tex="x - 3 = 0 \;\Rightarrow\; x = 3" /></p>
                  </div>
                </div>
              </div>
            </div>

            {/* 三种常见套路 */}
            <div>
              <p className="font-bold mb-2">三种常见"一眼看出"的套路</p>
              <div className="space-y-2">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold text-gray-800 text-xs mb-1">套路一：平方差（没有 x 的一次项）</p>
                  <p><Math tex="x^2 - 4 = 0" /></p>
                  <p className="text-gray-500 text-xs">看到 x² - 一个数 = 0 → 直接拆成 (x+?)(x-?)</p>
                  <p><Math tex="(x+2)(x-2) = 0 \;\Rightarrow\; x = 2 \text{ 或 } x = -2" /></p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold text-gray-800 text-xs mb-1">套路二：提公因式（没有常数项）</p>
                  <p><Math tex="x^2 - 3x = 0" /></p>
                  <p className="text-gray-500 text-xs">每一项都有 x → 把 x 提出来</p>
                  <p><Math tex="x(x - 3) = 0 \;\Rightarrow\; x = 0 \text{ 或 } x = 3" /></p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold text-gray-800 text-xs mb-1">套路三：完全平方（两个根一样）</p>
                  <p><Math tex="x^2 + 2x + 1 = 0" /></p>
                  <p className="text-gray-500 text-xs mt-1">怎么看出来的？对照公式 <Math tex="(x+a)^2 = x^2 + 2ax + a^2" />：</p>
                  <p className="text-gray-500 text-xs pl-3">这里 a = 1，所以 <Math tex="2ax = 2x" /> ✓，<Math tex="a^2 = 1" /> ✓</p>
                  <p className="mt-1"><Math tex="(x+1)^2 = 0 \;\Rightarrow\; x = -1" />（重根：只有一个解）</p>
                </div>
              </div>
            </div>

            {/* 公式法 */}
            <div>
              <p className="font-bold mb-2">方法二：公式法（因式分解看不出来时用）</p>
              <p className="text-gray-500 text-xs mb-2">直接套公式，万能方法，但算起来比因式分解麻烦。</p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-xs text-gray-500 mb-2">对于 <Math tex="ax^2 + bx + c = 0" />，直接套：</p>
                <Math tex="x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}" display />
                <div className="mt-3 text-sm space-y-1 bg-white rounded-lg p-3 border border-gray-100">
                  <p className="font-bold text-gray-800 text-xs">根号里面的 <Math tex="\Delta = b^2 - 4ac" /> 叫"判别式"，决定有几个解：</p>
                  <p className="pl-4"><Math tex="\Delta > 0" /> → 两个不同的解（最常见）</p>
                  <p className="pl-4"><Math tex="\Delta = 0" /> → 只有一个解（重根）</p>
                  <p className="pl-4"><Math tex="\Delta < 0" /> → 无解（根号里是负数，开不出来）</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 mt-3">
                <p className="font-bold text-gray-800 mb-2">例：<Math tex="x^2 + 2x - 1 = 0" /></p>
                <div className="pl-3 border-l-2 border-blue-300 space-y-1.5 text-gray-700">
                  <p><span className="text-blue-600 font-bold">认出 a, b, c</span>：a = 1，b = 2，c = -1</p>
                  <p><span className="text-blue-600 font-bold">算判别式</span>：<Math tex="\Delta = 2^2 - 4(1)(-1) = 4 + 4 = 8 > 0" /> ✓ 有两个解</p>
                  <p><span className="text-blue-600 font-bold">套公式</span>：<Math tex="x = \dfrac{-2 \pm \sqrt{8}}{2} = \dfrac{-2 \pm 2\sqrt{2}}{2} = -1 \pm \sqrt{2}" /></p>
                </div>
              </div>
            </div>

            {/* 总结 */}
            <div className="bg-slate-900 text-white rounded-xl p-4 text-center">
              <p className="text-sm text-slate-400 mb-1">选哪个方法？</p>
              <p className="text-base font-bold">先试因式分解 → 搞不定再用公式法</p>
              <p className="text-xs text-slate-400 mt-1">高考90%的方程都能因式分解，公式法是保底的</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="font-bold text-green-800 mb-1">✏️ 即时练习</p>
              <p className="text-gray-700">1. <Math tex="x^2 - x - 6 = 0" />，x = ____　答案：<strong><Math tex="x=3 \text{ 或 } x=-2" /></strong></p>
              <p className="text-gray-700">2. <Math tex="x^2 + 2x + 1 = 0" />，x = ____　答案：<strong><Math tex="x = -1" /></strong>（重根）</p>
              <p className="text-gray-700">3. <Math tex="x^2 - 9 = 0" />，x = ____　答案：<strong><Math tex="x = \pm 3" /></strong>（平方差）</p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <div className="flex items-start gap-2">
                <AlertTriangle size={16} className="text-amber-600 shrink-0 mt-0.5" />
                <div className="text-amber-700 text-sm space-y-1">
                  <p className="font-bold">⚠️ 易错点</p>
                  <p>找两个数时注意<strong>符号</strong>：乘起来=6、加起来=-5，那就是 -2 和 -3（都是负的）</p>
                  <p>公式法别忘了 <strong>±</strong>，两个根都要写</p>
                  <p><Math tex="\Delta < 0" /> 意味着<strong>无实数根</strong>，集合可能是空集</p>
                </div>
              </div>
            </div>
          </div>
        </Collapsible>
      </section>

      {/* Section 2: Quadratic Inequalities */}
      <section className="mb-6">
        <Collapsible title="二、解一元二次不等式（集合最核心的前置技能！）" defaultOpen storageKey="sets-prereq:inequality" headerExtra={<SpeakButton text={setsPrereqNarrations.inequality} />}>
          <p className="text-xs text-blue-600 mb-3">🎯 学完你能：用“三步走”方法独立解一元二次不等式，写出集合描述法的解集。</p>
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

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <div className="flex items-start gap-2">
                <AlertTriangle size={16} className="text-amber-600 shrink-0 mt-0.5" />
                <div className="text-amber-700 text-sm space-y-1">
                  <p className="font-bold">⚠️ 易错点</p>
                  <p><strong>“大于”和“小于”别搞反</strong>：大于取两边（远离根），小于取中间（夹在根之间）</p>
                  <p><strong>含等号别漏</strong>：≥ 和 ≤ 的解集端点要用 ≤ 和 ≥</p>
                  <p><strong>a {'<'} 0 时先两边乘 -1</strong>：不等号方向要反转！</p>
                </div>
              </div>
            </div>
          </div>
        </Collapsible>
      </section>

      {/* Section 3: Number Line */}
      <section className="mb-6">
        <Collapsible title="三、数轴的使用" defaultOpen storageKey="sets-prereq:numberline" headerExtra={<SpeakButton text={setsPrereqNarrations.numberLine} />}>
          <p className="text-xs text-blue-600 mb-3">🎯 学完你能：在数轴上正确表示不等式的解集，分清 ○ 和 ●。</p>
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

            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="font-bold text-green-800 mb-1">✏️ 即时练习</p>
              <p className="text-gray-700">1. <Math tex="x \leq -1" /> 在数轴上，-1 用什么圆？　答案：<strong>实心圆 ●（含端点）</strong></p>
              <p className="text-gray-700">2. <Math tex="1 < x < 4" /> 的两个端点分别用？　答案：<strong>1 空心 ○，4 空心 ○</strong></p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <div className="flex items-start gap-2">
                <AlertTriangle size={16} className="text-amber-600 shrink-0 mt-0.5" />
                <div className="text-amber-700 text-sm space-y-1">
                  <p className="font-bold">⚠️ 易错点</p>
                  <p>{'<'} 和 ≤ 的区别就在于<strong>圆的空实</strong>：{'<'} 空心、≤ 实心</p>
                  <p>做集合运算时，<strong>画数轴是最直观的方法</strong></p>
                  <p>补集运算时<strong>端点开闭互换</strong>：原来 ○ 变 ●，原来 ● 变 ○</p>
                </div>
              </div>
            </div>
          </div>
        </Collapsible>
      </section>

      {/* Section 4: Interval Notation */}
      <section className="mb-6">
        <Collapsible title="四、区间表示法" defaultOpen storageKey="sets-prereq:interval" headerExtra={<SpeakButton text={setsPrereqNarrations.interval} />}>
          <p className="text-xs text-blue-600 mb-3">🎯 学完你能：把不等式的解集用区间表示，正确使用小括号和中括号。</p>
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

            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="font-bold text-green-800 mb-1">✏️ 即时练习</p>
              <p className="text-gray-700">1. <Math tex="\{x \mid -3 < x \leq 5\}" /> = ____　答案：<strong><Math tex="(-3, 5]" /></strong></p>
              <p className="text-gray-700">2. <Math tex="\{x \mid x \geq 3\}" /> = ____　答案：<strong><Math tex="[3, +\infty)" /></strong></p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <div className="flex items-start gap-2">
                <AlertTriangle size={16} className="text-amber-600 shrink-0 mt-0.5" />
                <div className="text-amber-700 text-sm space-y-1">
                  <p className="font-bold">⚠️ 易错点</p>
                  <p><strong>∞ 永远用小括号</strong>：<Math tex="[3, +\infty)" /> ✓，<Math tex="[3, +\infty]" /> ✗</p>
                  <p>区间写法和数轴对应：<strong>小括号 = ○，中括号 = ●</strong></p>
                </div>
              </div>
            </div>
          </div>
        </Collapsible>
      </section>

      {/* Self test */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center text-sm font-bold">
            5
          </span>
          自测清单
        </h2>

        {/* Score summary (shown after submit) */}
        {submitted && (
          <div className="mb-4 p-4 rounded-xl border flex items-center justify-between bg-white border-gray-200">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold ${
                selfTestItems.filter((item, i) => userAnswers[i]?.replace(/\s/g, '') === item.answer.replace(/\s/g, '')).length === selfTestItems.length
                  ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
              }`}>
                {selfTestItems.filter((item, i) => userAnswers[i]?.replace(/\s/g, '') === item.answer.replace(/\s/g, '')).length}/{selfTestItems.length}
              </div>
              <div>
                <p className="font-bold text-gray-800">
                  {selfTestItems.filter((item, i) => userAnswers[i]?.replace(/\s/g, '') === item.answer.replace(/\s/g, '')).length === selfTestItems.length
                    ? '全对！基础扎实，直接学集合 🎉'
                    : '看看哪些错了，对应板块再复习一下'}
                </p>
                <p className="text-sm text-gray-500">答案已显示在每题下方</p>
              </div>
            </div>
            <button onClick={handleResetTest} className="text-sm text-blue-500 hover:text-blue-700 cursor-pointer whitespace-nowrap">
              重新测试
            </button>
          </div>
        )}

        {/* All questions in one paper */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm divide-y divide-gray-100">
          {selfTestItems.map((item, idx) => {
            const hasInput = !!userAnswers[idx];
            const isCorrect = hasInput && userAnswers[idx].replace(/\s/g, '') === item.answer.replace(/\s/g, '');

            return (
              <div key={idx} className="px-5 py-4">
                {/* Question */}
                <div className="flex items-start gap-3 mb-3">
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                    submitted
                      ? isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    {submitted
                      ? isCorrect ? <CheckCircle size={14} /> : <XCircle size={14} />
                      : idx + 1
                    }
                  </span>
                  <p className="text-sm font-medium text-gray-800 pt-0.5">
                    {item.questionLatex ? <Math tex={item.questionLatex} /> : item.question}
                  </p>
                </div>

                {/* Input */}
                <div className="ml-10">
                  <MathInput
                    value={userAnswers[idx] || ''}
                    onChange={(latex) => setUserAnswers((prev) => ({ ...prev, [idx]: latex }))}
                    placeholder="输入答案..."
                    className="w-full"
                  />
                </div>

                {/* Answer (shown after submit) */}
                {submitted && (
                  <div className={`ml-10 mt-2 px-3 py-2 rounded-lg text-sm ${isCorrect ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                    <strong>答案：</strong>
                    {item.answerLatex ? <Math tex={item.answerLatex} /> : item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Submit / result */}
        {!submitted ? (
          <button
            onClick={handleSubmitTest}
            className="mt-4 w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl transition-colors cursor-pointer"
          >
            提交检查
          </button>
        ) : (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl text-sm text-green-800">
            <p><strong>全对</strong> → 直接学 1.2 集合，没有障碍</p>
            <p><strong>错了1-2题</strong> → 把错的部分再看一遍</p>
            <p><strong>错了3题以上</strong> → 上面的知识点从头认真看一遍</p>
          </div>
        )}
      </section>

      {/* Formula Cheat Sheet */}
      <section className="mb-8">
        <Collapsible title="📌 公式速查表" storageKey="sets-prereq:cheatsheet">
          <div className="space-y-4 text-sm text-gray-700">
            <div>
              <p className="font-bold text-gray-800 mb-2">因式分解</p>
              <div className="bg-gray-50 rounded-lg p-3 space-y-1 font-mono text-xs">
                <p>平方差：<Math tex="x^2 - a^2 = (x+a)(x-a)" /></p>
                <p>完全平方：<Math tex="x^2 + 2ax + a^2 = (x+a)^2" /></p>
                <p>提公因式：<Math tex="x^2 - 3x = x(x-3)" /></p>
              </div>
            </div>
            <div>
              <p className="font-bold text-gray-800 mb-2">求根公式</p>
              <div className="bg-gray-50 rounded-lg p-3 space-y-1 font-mono text-xs">
                <p><Math tex="x = \dfrac{-b \pm \sqrt{b^2-4ac}}{2a}" /></p>
                <p><Math tex="\Delta = b^2-4ac" />：{'>'} 0 两根，= 0 重根，{'<'} 0 无实根</p>
              </div>
            </div>
            <div>
              <p className="font-bold text-gray-800 mb-2">一元二次不等式（a {'>'} 0）</p>
              <div className="bg-gray-50 rounded-lg p-3 space-y-1 font-mono text-xs">
                <p>{'>'} 0 → 取两边：<Math tex="x < x_1 \text{ 或 } x > x_2" /></p>
                <p>{'<'} 0 → 取中间：<Math tex="x_1 < x < x_2" /></p>
                <p>口诀：<strong>大于取两边，小于取中间</strong></p>
              </div>
            </div>
            <div>
              <p className="font-bold text-gray-800 mb-2">数轴 + 区间</p>
              <div className="bg-gray-50 rounded-lg p-3 space-y-1 font-mono text-xs">
                <p>○ 空心 → 不含（{'<'} 或 {'>'}）→ 小括号 ( )</p>
                <p>● 实心 → 包含（≤ 或 ≥）→ 中括号 [ ]</p>
                <p>∞ → 永远用小括号</p>
                <p>补集：○ ↔ ● 互换</p>
              </div>
            </div>
          </div>
        </Collapsible>
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

        {/* Sidebar: Progress */}
        <div className="lg:w-72 shrink-0">
          <div className="lg:sticky lg:top-6">
            <ProgressTracker items={progressItems} onToggle={toggleProgress} />
          </div>
        </div>
      </div>
    </div>
  );
}
