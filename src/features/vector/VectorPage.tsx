import { Math, Collapsible, SpeakButton, PageHeader, LessonLayout, CalloutCard, ExportButton, PageBreak } from '@/components/shared';
import { vectorNarrations } from './data/narrations';
import { vectorProgressItems } from './data/progress';
import { useProgress } from '@/hooks';
import { scrollToId } from '@/lib/scroll';

export function VectorPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('vector', vectorProgressItems);

  return (
    <div>
      <PageHeader
        stage="第四阶段 · 平面向量"
        title="4.1 平面向量的基本概念与运算"
        narration={vectorNarrations.intro}
        subtitle="从零理解向量：定义、表示、加减法、数乘"
        tags={[
          { label: '难度 ★★☆☆☆', color: 'green' },
          { label: '高考必考', color: 'blue' },
          { label: '约3小时', color: 'purple' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="4.1 平面向量" />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-3 mb-3">
        <p className="font-bold text-gray-800 mb-2">📋 知识地图</p>
        <div className="text-gray-600 space-y-1">
          <button onClick={() => scrollToId('vec-def')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">一、什么是向量 & 怎么表示</button>
          <button onClick={() => scrollToId('vec-special')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">二、特殊向量与向量间关系</button>
          <button onClick={() => scrollToId('vec-add')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">三、向量的加减法</button>
          <button onClick={() => scrollToId('vec-scalar')} className="text-left hover:text-blue-600 hover:underline cursor-pointer transition-colors">四、数乘向量</button>
        </div>
      </div>

      {/* 速通路线图 */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-3 mb-3">
        <p className="font-bold text-blue-900 text-lg mb-1">速通路线图：向量就记住 3 件事</p>
        <p className="text-blue-700 text-sm mb-3">向量 = 方向 + 大小，运算就是"箭头拼接"，掌握这些就够了！</p>
        <div className="grid grid-cols-3 gap-2 text-sm">
          <div className="bg-white rounded-xl p-3 border border-blue-100">
            <p className="font-bold text-gray-800">① 向量是什么</p>
            <p className="text-gray-500 mt-1">有方向有大小的量，用带箭头的线段表示</p>
          </div>
          <div className="bg-white rounded-xl p-3 border border-blue-100">
            <p className="font-bold text-gray-800">② 加减法</p>
            <p className="text-gray-500 mt-1">加法 = 首尾相接，减法 = 加相反向量</p>
          </div>
          <div className="bg-white rounded-xl p-3 border border-blue-100">
            <p className="font-bold text-gray-800">③ 数乘</p>
            <p className="text-gray-500 mt-1">正数不变向，负数反转，倍数改长度</p>
          </div>
        </div>
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 1: 什么是向量 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="vec-def" className="mb-3 scroll-mt-4">
        <Collapsible title="一、什么是向量 & 怎么表示" defaultOpen storageKey="vector:def" headerExtra={<SpeakButton text={vectorNarrations.definition} />}>
          <p className="text-blue-600 mb-3">🎯 学完你能：理解向量的本质，掌握向量的画法和记法。</p>
          <div className="space-y-0.5 text-gray-700">

            {/* 定义 */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-2">
              <p className="font-bold text-lg text-blue-800 mb-1">核心定义</p>
              <div className="bg-white rounded-lg p-2 border border-blue-100">
                <p className="text-xl text-center"><strong>向量</strong> = <strong>方向</strong> + <strong>大小</strong></p>
                <p className="text-center text-gray-500 mt-1">既有大小又有方向的量，就叫向量</p>
              </div>
              <p className="text-blue-700 mt-1 text-sm">例：力、速度、位移 → 光说"多少"不够，还必须说"往哪"，所以它们都是向量。</p>
            </div>

            {/* 有向线段 */}
            <div className="bg-gray-50 rounded-lg p-2">
              <p className="font-bold text-gray-800 mb-1">有向线段 — 向量的"画法"</p>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <svg width="180" height="60" viewBox="0 0 180 60" className="bg-white rounded border border-gray-200">
                    <defs>
                      <marker id="arrowBlue" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                        <polygon points="0,0 8,3 0,6" fill="#2563eb" />
                      </marker>
                    </defs>
                    <line x1="20" y1="30" x2="150" y2="30" stroke="#2563eb" strokeWidth="2" markerEnd="url(#arrowBlue)" />
                    <circle cx="20" cy="30" r="4" fill="#2563eb" />
                    <text x="12" y="50" fontSize="12" fill="#2563eb" fontWeight="bold">A</text>
                    <text x="148" y="50" fontSize="12" fill="#2563eb" fontWeight="bold">B</text>
                    <text x="70" y="22" fontSize="12" fill="#374151" fontStyle="italic">方向</text>
                  </svg>
                </div>
                <div className="flex-1 space-y-1">
                  <p>向量用<strong>带箭头的线段</strong>表示</p>
                  <p><strong>起点</strong>：箭头出发处（A）　<strong>终点</strong>：箭头指向处（B）</p>
                  <p><strong>长度</strong>：线段的长度 = 向量的大小</p>
                </div>
              </div>
            </div>

            {/* 两种记法 */}
            <div className="grid grid-cols-2 gap-1">
              <div className="bg-gray-50 rounded-lg p-2">
                <p className="font-bold text-gray-800 mb-1">记法1：字母+箭头</p>
                <p className="text-lg text-center my-1"><Math tex="\vec{AB}" /></p>
                <p className="text-gray-600">A是起点，B是终点，上面加箭头</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-2">
                <p className="font-bold text-gray-800 mb-1">记法2：小写字母</p>
                <p className="text-lg text-center my-1"><Math tex="\vec{a}" /></p>
                <p className="text-gray-600">用单个小写字母加箭头表示</p>
              </div>
            </div>

            {/* 向量的模 */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-2">
              <p className="font-bold text-blue-800 mb-1">向量的模（大小/长度）</p>
              <p className="text-blue-700">向量 <Math tex="\vec{a}" /> 的长度叫做<strong>模</strong>，记作 <Math tex="|\vec{a}|" />；向量 <Math tex="\vec{AB}" /> 的模记作 <Math tex="|\vec{AB}|" /></p>
              <div className="bg-white rounded-lg p-2 border border-blue-100 mt-2 text-center">
                <p>模就是<strong>一个数字</strong>（非负数），表示向量有多"长"</p>
              </div>
            </div>

            <CalloutCard variant="warning" title="⚠️ 注意">
              <p>向量可以<strong>自由平移</strong>！只要方向和大小不变，起点在哪无所谓。</p>
            </CalloutCard>

          </div>
        </Collapsible>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 2: 特殊向量与关系 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="vec-special" className="mb-3 scroll-mt-4">
        <Collapsible title="二、特殊向量与向量间关系" defaultOpen storageKey="vector:special" headerExtra={<SpeakButton text={vectorNarrations.specialVectors} />}>
          <div className="space-y-2 text-gray-700">

            {/* 零向量和单位向量 */}
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="font-bold text-gray-800 mb-1">零向量 <Math tex="\vec{0}" /></p>
                <p>长度为 <strong>0</strong> 的向量</p>
                <p className="mt-1">方向<strong>任意</strong>（不是没有方向）</p>
                <p className="text-gray-500 mt-1 text-sm">可以想象成"原地不动"</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="font-bold text-gray-800 mb-1">单位向量</p>
                <p>长度为 <strong>1</strong> 的向量</p>
                <p className="mt-1">单位向量有<strong>无数个</strong>（每个方向都有一个）</p>
                <p className="text-gray-500 mt-1 text-sm">大小相等 ≠ 向量相等</p>
              </div>
            </div>

            {/* 相等、相反、平行 */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="font-bold text-blue-800 mb-2">向量间的三种关系</p>
              <table className="w-full text-center border-collapse">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="border border-blue-200 px-2 py-1">关系</th>
                    <th className="border border-blue-200 px-2 py-1">条件</th>
                    <th className="border border-blue-200 px-2 py-1">记法</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-blue-200 px-2 py-1 font-bold">相等向量</td>
                    <td className="border border-blue-200 px-2 py-1">大小相等 <strong>且</strong> 方向相同</td>
                    <td className="border border-blue-200 px-2 py-1"><Math tex="\vec{a} = \vec{b}" /></td>
                  </tr>
                  <tr>
                    <td className="border border-blue-200 px-2 py-1 font-bold">相反向量</td>
                    <td className="border border-blue-200 px-2 py-1">大小相等 <strong>且</strong> 方向相反</td>
                    <td className="border border-blue-200 px-2 py-1"><Math tex="\vec{a} = -\vec{b}" /></td>
                  </tr>
                  <tr>
                    <td className="border border-blue-200 px-2 py-1 font-bold">平行向量（共线向量）</td>
                    <td className="border border-blue-200 px-2 py-1">方向相同 <strong>或</strong> 相反</td>
                    <td className="border border-blue-200 px-2 py-1"><Math tex="\vec{a} \parallel \vec{b}" /></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 图示 */}
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-bold text-gray-800 mb-2">图示理解</p>
              <svg width="100%" height="120" viewBox="0 0 500 120" className="bg-white rounded border border-gray-200">
                <defs>
                  <marker id="arrB" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0,0 8,3 0,6" fill="#2563eb" /></marker>
                  <marker id="arrR" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0,0 8,3 0,6" fill="#dc2626" /></marker>
                  <marker id="arrG" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0,0 8,3 0,6" fill="#16a34a" /></marker>
                  <marker id="arrP" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0,0 8,3 0,6" fill="#9333ea" /></marker>
                </defs>
                {/* 相等向量 */}
                <text x="10" y="20" fontSize="13" fill="#374151" fontWeight="bold">相等向量：</text>
                <line x1="10" y1="45" x2="90" y2="45" stroke="#2563eb" strokeWidth="2.5" markerEnd="url(#arrB)" />
                <text x="42" y="38" fontSize="11" fill="#2563eb">a</text>
                <line x1="10" y1="75" x2="90" y2="75" stroke="#2563eb" strokeWidth="2.5" markerEnd="url(#arrB)" />
                <text x="42" y="68" fontSize="11" fill="#2563eb">b</text>
                <text x="10" y="105" fontSize="11" fill="#6b7280">方向一样，长度一样</text>
                {/* 相反向量 */}
                <text x="170" y="20" fontSize="13" fill="#374151" fontWeight="bold">相反向量：</text>
                <line x1="170" y1="45" x2="250" y2="45" stroke="#2563eb" strokeWidth="2.5" markerEnd="url(#arrB)" />
                <text x="202" y="38" fontSize="11" fill="#2563eb">a</text>
                <line x1="250" y1="75" x2="170" y2="75" stroke="#dc2626" strokeWidth="2.5" markerEnd="url(#arrR)" />
                <text x="200" y="68" fontSize="11" fill="#dc2626">-a</text>
                <text x="165" y="105" fontSize="11" fill="#6b7280">方向相反，长度一样</text>
                {/* 平行向量 */}
                <text x="340" y="20" fontSize="13" fill="#374151" fontWeight="bold">平行向量：</text>
                <line x1="340" y1="45" x2="420" y2="45" stroke="#16a34a" strokeWidth="2.5" markerEnd="url(#arrG)" />
                <text x="372" y="38" fontSize="11" fill="#16a34a">c</text>
                <line x1="340" y1="75" x2="470" y2="75" stroke="#9333ea" strokeWidth="2.5" markerEnd="url(#arrP)" />
                <text x="397" y="68" fontSize="11" fill="#9333ea">d</text>
                <text x="335" y="105" fontSize="11" fill="#6b7280">方向相同或相反即可，长度随意</text>
              </svg>
            </div>

            <CalloutCard variant="warning" title="⚠️ 易错点">
              <div className="space-y-1">
                <p><strong>平行 ≠ 相等</strong>：平行只要求方向同或反，大小可以不同</p>
                <p><strong>相等 → 一定平行</strong>，但<strong>平行 → 不一定相等</strong></p>
                <p><strong>零向量与任意向量平行</strong>：<Math tex="\vec{0} \parallel \vec{a}" /> 对任意 <Math tex="\vec{a}" /> 成立</p>
              </div>
            </CalloutCard>

            {/* 实战例子 */}
            <div className="bg-gray-50 rounded-lg p-2">
              <p className="font-bold text-gray-800 mb-2">实战练习：判断向量关系</p>
              <div className="space-y-2">
                <div className="bg-white rounded-lg p-2 border border-gray-200">
                  <p className="font-bold text-gray-700">例1：</p>
                  <p>正方形 ABCD 中，<Math tex="\vec{AB}" /> 和 <Math tex="\vec{DC}" /> 是什么关系？</p>
                  <p className="text-green-700 mt-1"><strong>答：相等向量。</strong>方向相同（都向右），长度相同（都是正方形的边长）。</p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-gray-200">
                  <p className="font-bold text-gray-700">例2：</p>
                  <p><Math tex="\vec{AB}" /> 和 <Math tex="\vec{BA}" /> 是什么关系？</p>
                  <p className="text-green-700 mt-1"><strong>答：相反向量。</strong>长度一样，但方向完全反过来了。即 <Math tex="\vec{BA} = -\vec{AB}" /></p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-gray-200">
                  <p className="font-bold text-gray-700">例3：</p>
                  <p>长度为 3 的向量 <Math tex="\vec{a}" /> 和长度为 5 的向量 <Math tex="\vec{b}" /> 方向相同，它们平行吗？相等吗？</p>
                  <p className="text-green-700 mt-1"><strong>答：平行但不相等。</strong>方向相同所以平行（<Math tex="\vec{a} \parallel \vec{b}" />），但长度不同所以不相等。</p>
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 3: 向量的加减法 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="vec-add" className="mb-3 scroll-mt-4">
        <Collapsible title="三、向量的加减法" defaultOpen storageKey="vector:add" headerExtra={<SpeakButton text={vectorNarrations.addition} />}>
          <p className="text-blue-600 mb-2">🎯 学完你能：用三角形法则求向量的和，理解减法就是加相反向量。</p>
          <div className="space-y-0.5 text-gray-700">

            {/* 三角形法则 */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-2">
              <p className="font-bold text-blue-800 mb-1">加法 · 三角形法则（首尾相接）</p>
              <div className="flex gap-3 items-start">
                <div className="flex-shrink-0">
                  <svg width="180" height="120" viewBox="0 0 200 140" className="bg-white rounded border border-gray-200">
                    <defs>
                      <marker id="arrTB" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0,0 8,3 0,6" fill="#2563eb" /></marker>
                      <marker id="arrTG" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0,0 8,3 0,6" fill="#16a34a" /></marker>
                      <marker id="arrTR" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0,0 8,3 0,6" fill="#dc2626" /></marker>
                    </defs>
                    <line x1="20" y1="110" x2="100" y2="50" stroke="#2563eb" strokeWidth="2.5" markerEnd="url(#arrTB)" />
                    <text x="45" y="70" fontSize="13" fill="#2563eb" fontWeight="bold">a</text>
                    <line x1="100" y1="50" x2="180" y2="110" stroke="#16a34a" strokeWidth="2.5" markerEnd="url(#arrTG)" />
                    <text x="145" y="70" fontSize="13" fill="#16a34a" fontWeight="bold">b</text>
                    <line x1="20" y1="110" x2="180" y2="110" stroke="#dc2626" strokeWidth="2.5" markerEnd="url(#arrTR)" />
                    <text x="85" y="130" fontSize="13" fill="#dc2626" fontWeight="bold">a+b</text>
                    <text x="8" y="120" fontSize="10" fill="#374151">A</text>
                    <text x="95" y="42" fontSize="10" fill="#374151">B</text>
                    <text x="180" y="120" fontSize="10" fill="#374151">C</text>
                  </svg>
                </div>
                <div className="flex-1 space-y-0.5">
                  <p>把 <Math tex="\vec{b}" /> 的起点接在 <Math tex="\vec{a}" /> 的终点，然后从 <Math tex="\vec{a}" /> 起点连到 <Math tex="\vec{b}" /> 终点</p>
                  <p className="font-bold text-blue-700">口诀：首尾相接，首连尾</p>
                  <div className="bg-white rounded p-1.5 border border-blue-100">
                    <p className="text-center"><Math tex="\vec{AB} \,+\, \vec{BC} \;=\; \vec{AC}" /></p>
                  </div>
                </div>
              </div>
            </div>

            {/* 平行四边形法则 */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-2">
              <p className="font-bold text-green-800 mb-1">加法 · 平行四边形法则（共起点）</p>
              <div className="flex gap-3 items-start">
                <div className="flex-shrink-0">
                  <svg width="180" height="120" viewBox="0 0 200 140" className="bg-white rounded border border-gray-200">
                    <defs>
                      <marker id="arrPB" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0,0 8,3 0,6" fill="#2563eb" /></marker>
                      <marker id="arrPG" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0,0 8,3 0,6" fill="#16a34a" /></marker>
                      <marker id="arrPR" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0,0 8,3 0,6" fill="#dc2626" /></marker>
                    </defs>
                    <line x1="20" y1="110" x2="140" y2="110" stroke="#2563eb" strokeWidth="2.5" markerEnd="url(#arrPB)" />
                    <text x="70" y="128" fontSize="13" fill="#2563eb" fontWeight="bold">a</text>
                    <line x1="20" y1="110" x2="80" y2="30" stroke="#16a34a" strokeWidth="2.5" markerEnd="url(#arrPG)" />
                    <text x="35" y="62" fontSize="13" fill="#16a34a" fontWeight="bold">b</text>
                    <line x1="140" y1="110" x2="180" y2="30" stroke="#9ca3af" strokeWidth="1" strokeDasharray="4,3" />
                    <line x1="80" y1="30" x2="180" y2="30" stroke="#9ca3af" strokeWidth="1" strokeDasharray="4,3" />
                    <line x1="20" y1="110" x2="180" y2="30" stroke="#dc2626" strokeWidth="2.5" markerEnd="url(#arrPR)" />
                    <text x="105" y="62" fontSize="13" fill="#dc2626" fontWeight="bold">a+b</text>
                    <text x="8" y="120" fontSize="10" fill="#374151">O</text>
                  </svg>
                </div>
                <div className="flex-1 space-y-0.5">
                  <p>两个向量共起点，以它们为邻边画平行四边形，对角线就是结果</p>
                  <p className="font-bold text-green-700">口诀：共起点，对角线</p>
                </div>
              </div>
            </div>

            {/* 减法 */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-2">
              <p className="font-bold text-red-800 mb-1">减法：加上相反向量</p>
              <div className="flex gap-3 items-start">
                <div className="flex-shrink-0">
                  <svg width="180" height="110" viewBox="0 0 200 130" className="bg-white rounded border border-gray-200">
                    <defs>
                      <marker id="arrSB" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0,0 8,3 0,6" fill="#2563eb" /></marker>
                      <marker id="arrSG" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0,0 8,3 0,6" fill="#16a34a" /></marker>
                      <marker id="arrSR" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0,0 8,3 0,6" fill="#dc2626" /></marker>
                    </defs>
                    <line x1="20" y1="100" x2="170" y2="30" stroke="#2563eb" strokeWidth="2.5" markerEnd="url(#arrSB)" />
                    <text x="85" y="50" fontSize="13" fill="#2563eb" fontWeight="bold">a</text>
                    <line x1="20" y1="100" x2="120" y2="100" stroke="#16a34a" strokeWidth="2.5" markerEnd="url(#arrSG)" />
                    <text x="60" y="118" fontSize="13" fill="#16a34a" fontWeight="bold">b</text>
                    <line x1="120" y1="100" x2="170" y2="30" stroke="#dc2626" strokeWidth="2.5" markerEnd="url(#arrSR)" strokeDasharray="6,3" />
                    <text x="155" y="72" fontSize="13" fill="#dc2626" fontWeight="bold">a-b</text>
                    <text x="8" y="108" fontSize="10" fill="#374151">O</text>
                    <text x="170" y="25" fontSize="10" fill="#374151">A</text>
                    <text x="120" y="115" fontSize="10" fill="#374151">B</text>
                  </svg>
                </div>
                <div className="flex-1 space-y-0.5">
                  <div className="bg-white rounded p-1.5 border border-red-100">
                    <p className="text-center"><Math tex="\vec{a} \,-\, \vec{b} \;=\; \vec{a} \,+\, (-\vec{b})" /></p>
                  </div>
                  <p>共起点时，<Math tex="\vec{a}-\vec{b}" /> 从 b终点 指向 a终点</p>
                  <p className="font-bold text-red-600">口诀：减法 = 指向被减</p>
                  <div className="bg-white rounded p-1.5 border border-gray-200">
                    <p className="text-center"><Math tex="\vec{OA} \,-\, \vec{OB} \;=\; \vec{BA}" /></p>
                  </div>
                </div>
              </div>
            </div>

            {/* 运算律 */}
            <div className="bg-gray-50 rounded-lg p-2">
              <p className="font-bold text-gray-800 mb-1">运算律</p>
              <div className="grid grid-cols-2 gap-1">
                <div className="bg-white rounded-lg p-1.5 border border-gray-200 text-center">
                  <p className="text-sm text-gray-500 mb-0.5">交换律</p>
                  <p><Math tex="\vec{a} \,+\, \vec{b} \;=\; \vec{b} \,+\, \vec{a}" /></p>
                </div>
                <div className="bg-white rounded-lg p-1.5 border border-gray-200 text-center">
                  <p className="text-sm text-gray-500 mb-0.5">结合律</p>
                  <p><Math tex="(\vec{a} \,+\, \vec{b}) \,+\, \vec{c} \;=\; \vec{a} \,+\, (\vec{b} \,+\, \vec{c})" /></p>
                </div>
              </div>
            </div>

            {/* 实战练习 */}
            <div className="bg-gray-50 rounded-lg p-2">
              <p className="font-bold text-gray-800 mb-1">实战练习</p>
              <div className="space-y-1">
                <div className="bg-white rounded-lg p-2 border border-gray-200">
                  <p className="font-bold text-gray-700">例1：</p>
                  <p>已知 <Math tex="\vec{AB} = \vec{a}" />，<Math tex="\vec{BC} = \vec{b}" />，求 <Math tex="\vec{AC}" /></p>
                  <p className="text-green-700 mt-1"><strong>答：</strong>首尾相接，<Math tex="\vec{AC} = \vec{AB} + \vec{BC} = \vec{a} + \vec{b}" /></p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-gray-200">
                  <p className="font-bold text-gray-700">例2：</p>
                  <p>已知 <Math tex="\vec{OA} = \vec{a}" />，<Math tex="\vec{OB} = \vec{b}" />，求 <Math tex="\vec{AB}" /></p>
                  <p className="text-green-700 mt-1"><strong>答：</strong>共起点用减法，<Math tex="\vec{AB} = \vec{OB} - \vec{OA} = \vec{b} - \vec{a}" /></p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-gray-200">
                  <p className="font-bold text-gray-700">例3：</p>
                  <p>化简 <Math tex="\vec{AB} + \vec{BC} + \vec{CD}" /></p>
                  <p className="text-green-700 mt-1"><strong>答：</strong>连续首尾相接，<Math tex="= \vec{AD}" />（首连尾，中间全消掉）</p>
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      <PageBreak />

      {/* ════════════════════════════════════════════════════════ */}
      {/* Section 4: 数乘向量 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="vec-scalar" className="mb-3 scroll-mt-4">
        <Collapsible title="四、数乘向量" defaultOpen storageKey="vector:scalar" headerExtra={<SpeakButton text={vectorNarrations.scalarMultiply} />}>
          <p className="text-blue-600 mb-2">🎯 学完你能：理解"数字 × 向量"的含义，判断结果的方向和长度。</p>
          <div className="space-y-0.5 text-gray-700">

            {/* 什么是数乘 */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-2">
              <p className="font-bold text-lg text-blue-800 mb-1">什么是数乘？</p>
              <p>就是用一个<strong>数字</strong>去乘一个<strong>向量</strong>，写作 <Math tex="\lambda \vec{a}" />（读作"lambda 乘以向量a"）</p>
              <p className="mt-1">这里 <Math tex="\lambda" />（lambda）就是一个<strong>普通的实数</strong>，比如 2、-1、0.5 都行</p>
              <div className="bg-white rounded-lg p-2 border border-blue-100 mt-1">
                <p className="text-center"><strong>结果还是向量</strong>，只是长度和方向可能变了：</p>
                <p className="text-center mt-1"><Math tex="\lambda > 0" /> → 方向<strong>不变</strong>，长度变为 <Math tex="\lambda" /> 倍</p>
                <p className="text-center"><Math tex="\lambda < 0" /> → 方向<strong>反转</strong>，长度变为 <Math tex="|\lambda|" /> 倍</p>
                <p className="text-center"><Math tex="\lambda = 0" /> → 结果是<strong>零向量</strong></p>
              </div>
            </div>

            {/* 具体例子 + 图示 (CSS arrows) */}
            <div className="bg-gray-50 rounded-lg p-2">
              <p className="font-bold text-gray-800 mb-1">用具体数字理解</p>
              <div className="bg-white rounded border border-gray-200 p-3 space-y-3">
                {/* a */}
                <div className="flex items-center gap-3">
                  <div className="relative" style={{ width: '80px', height: '4px', backgroundColor: '#2563eb' }}>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2" style={{ width: 0, height: 0, borderTop: '6px solid transparent', borderBottom: '6px solid transparent', borderLeft: '10px solid #2563eb' }} />
                  </div>
                  <span className="font-bold text-blue-600"><Math tex="\vec{a}" /></span>
                  <span className="text-gray-500">← 原始向量</span>
                </div>
                {/* 2a */}
                <div className="flex items-center gap-3">
                  <div className="relative" style={{ width: '160px', height: '4px', backgroundColor: '#16a34a' }}>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2" style={{ width: 0, height: 0, borderTop: '6px solid transparent', borderBottom: '6px solid transparent', borderLeft: '10px solid #16a34a' }} />
                  </div>
                  <span className="font-bold text-green-600"><Math tex="2\vec{a}" /></span>
                  <span className="text-gray-500">← 方向不变，长度变成2倍</span>
                </div>
                {/* 0.5a */}
                <div className="flex items-center gap-3">
                  <div className="relative" style={{ width: '40px', height: '4px', backgroundColor: '#9333ea' }}>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2" style={{ width: 0, height: 0, borderTop: '6px solid transparent', borderBottom: '6px solid transparent', borderLeft: '10px solid #9333ea' }} />
                  </div>
                  <span className="font-bold text-purple-600"><Math tex="0.5\vec{a}" /></span>
                  <span className="text-gray-500">← 方向不变，长度缩短一半</span>
                </div>
                {/* -a */}
                <div className="flex items-center gap-3">
                  <div className="relative" style={{ width: '80px', height: '4px', backgroundColor: '#dc2626' }}>
                    <div className="absolute left-0 top-1/2 -translate-y-1/2" style={{ width: 0, height: 0, borderTop: '6px solid transparent', borderBottom: '6px solid transparent', borderRight: '10px solid #dc2626' }} />
                  </div>
                  <span className="font-bold text-red-600"><Math tex="-\vec{a}" /></span>
                  <span className="text-gray-500">← 方向反转，长度不变（相反向量）</span>
                </div>
              </div>
            </div>

            {/* 运算律 - 简化 */}
            <div className="bg-gray-50 rounded-lg p-2">
              <p className="font-bold text-gray-800 mb-1">运算律（和普通乘法一样）</p>
              <p className="text-gray-600">数乘向量的运算规则和你熟悉的乘法分配律完全一样，直接展开就行：</p>
              <div className="grid grid-cols-2 gap-1 mt-1">
                <div className="bg-white rounded-lg p-1.5 border border-gray-200">
                  <p className="text-center"><Math tex="2(3\vec{a}) \;=\; 6\vec{a}" /></p>
                  <p className="text-center text-gray-500 text-sm">数字先乘数字</p>
                </div>
                <div className="bg-white rounded-lg p-1.5 border border-gray-200">
                  <p className="text-center"><Math tex="3(\vec{a} \,+\, \vec{b}) \;=\; 3\vec{a} \,+\, 3\vec{b}" /></p>
                  <p className="text-center text-gray-500 text-sm">直接分配进去</p>
                </div>
              </div>
            </div>

            {/* 共线定理 - 简化 */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-2">
              <p className="font-bold text-blue-800 mb-1">🔑 倍数关系 = 平行</p>
              <p>如果 <Math tex="\vec{b}" /> 是 <Math tex="\vec{a}" /> 的某个倍数（即 <Math tex="\vec{b} = \lambda\vec{a}" />），那么 <Math tex="\vec{a}" /> 和 <Math tex="\vec{b}" /> 一定<strong>平行</strong></p>
              <p className="mt-1 text-blue-700">反过来也成立：两个向量平行 ⇔ 一个是另一个的倍数</p>
            </div>

            {/* 实战 */}
            <div className="bg-gray-50 rounded-lg p-2">
              <p className="font-bold text-gray-800 mb-1">实战练习</p>
              <div className="space-y-1">
                <div className="bg-white rounded-lg p-2 border border-gray-200">
                  <p className="font-bold text-gray-700">例1：</p>
                  <p>已知 <Math tex="\vec{a}" />，求 <Math tex="2\vec{a} - 3\vec{a}" /></p>
                  <p className="text-green-700 mt-1"><strong>答：</strong><Math tex="2\vec{a} - 3\vec{a} = (2-3)\vec{a} = -\vec{a}" />（提公因子，和数字运算一样）</p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-gray-200">
                  <p className="font-bold text-gray-700">例2：</p>
                  <p><Math tex="\vec{a} = (1,2)" />，<Math tex="\vec{b} = (3,6)" />，它们平行吗？</p>
                  <p className="text-green-700 mt-1"><strong>答：</strong><Math tex="\vec{b} = 3\vec{a}" />，b 是 a 的 3 倍，所以<strong>平行</strong></p>
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      </LessonLayout>
    </div>
  );
}
