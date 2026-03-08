import { PageHeader, ExportButton, PageBreak } from '@/components/shared';

export function ExamOverviewPage() {
  return (
    <div>
      <PageHeader
        stage="序章"
        title="高考数学 · 完整分析报告"
        subtitle="先看全局，再逐个击破 —— 知道考什么、怎么学、分怎么拿"
        tags={[
          { label: '2026新高考', color: 'blue' },
          { label: '湖南卷', color: 'purple' },
          { label: '150分 · 19题', color: 'amber' },
        ]}
      />

      <div className="flex justify-end mb-4 print:hidden">
        <ExportButton title="高考数学分析报告" />
      </div>

      {/* 一、试卷结构 */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm font-bold">1</span>
          试卷结构（8+3+3+5 模式）
        </h2>

        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-2 text-left">题型</th>
                <th className="border border-gray-200 px-4 py-2 text-center">题量</th>
                <th className="border border-gray-200 px-4 py-2 text-center">分值</th>
                <th className="border border-gray-200 px-4 py-2 text-left">说明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold">单选题</td>
                <td className="border border-gray-200 px-4 py-2 text-center">8题</td>
                <td className="border border-gray-200 px-4 py-2 text-center">40分</td>
                <td className="border border-gray-200 px-4 py-2">每题5分，只有一个正确答案</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold">多选题</td>
                <td className="border border-gray-200 px-4 py-2 text-center">3题</td>
                <td className="border border-gray-200 px-4 py-2 text-center">18分</td>
                <td className="border border-gray-200 px-4 py-2">每题6分，少选得2分，错选0分</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold">填空题</td>
                <td className="border border-gray-200 px-4 py-2 text-center">3题</td>
                <td className="border border-gray-200 px-4 py-2 text-center">15分</td>
                <td className="border border-gray-200 px-4 py-2">每题5分</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold">解答题</td>
                <td className="border border-gray-200 px-4 py-2 text-center">5题</td>
                <td className="border border-gray-200 px-4 py-2 text-center">77分</td>
                <td className="border border-gray-200 px-4 py-2">需写完整过程</td>
              </tr>
              <tr className="bg-blue-50 font-bold">
                <td className="border border-gray-200 px-4 py-2">合计</td>
                <td className="border border-gray-200 px-4 py-2 text-center">19题</td>
                <td className="border border-gray-200 px-4 py-2 text-center">150分</td>
                <td className="border border-gray-200 px-4 py-2">考试时间120分钟</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p className="font-bold text-amber-800 mb-2">关键变化（相比老高考）</p>
          <div className="space-y-1 text-gray-700">
            <p>不分文理科，统一试卷</p>
            <p>取消了选考题</p>
            <p>新增多选题（少选得分，降低风险）</p>
            <p>题量减少（老高考23题→新高考19题），但思维深度增加</p>
            <p>不再考查：三视图、线性规划、程序框图、定积分</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 mt-4">
          <p className="font-bold text-gray-800 mb-2">高频小题考点（约15分，占10%）</p>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white rounded-lg p-3 border border-gray-200 text-center">
              <p className="font-bold text-gray-800">集合运算</p>
              <p className="text-blue-600 font-bold">5分</p>
              <p className="text-gray-500 text-xs">每年必考</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-gray-200 text-center">
              <p className="font-bold text-gray-800">复数运算</p>
              <p className="text-blue-600 font-bold">5分</p>
              <p className="text-gray-500 text-xs">每年必考</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-gray-200 text-center">
              <p className="font-bold text-gray-800">平面向量</p>
              <p className="text-blue-600 font-bold">5分</p>
              <p className="text-gray-500 text-xs">考频90%+</p>
            </div>
          </div>
        </div>
      </section>

      {/* 解答题出题规律 */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm font-bold">2</span>
          解答题出题规律（5道大题）
        </h2>

        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-2 text-center">题号</th>
                <th className="border border-gray-200 px-4 py-2 text-left">常考板块</th>
                <th className="border border-gray-200 px-4 py-2 text-center">分值</th>
                <th className="border border-gray-200 px-4 py-2 text-center">难度</th>
              </tr>
            </thead>
            <tbody>
              {[
                { num: '第15题', topic: '概率统计 / 三角 / 数列', score: '13-15分', diff: '中等偏易', color: 'bg-green-100' },
                { num: '第16题', topic: '数列 / 三角', score: '13-15分', diff: '中等', color: 'bg-green-50' },
                { num: '第17题', topic: '立体几何', score: '15分', diff: '中等', color: 'bg-amber-50' },
                { num: '第18题', topic: '解析几何（圆锥曲线）', score: '15-17分', diff: '中等偏难', color: 'bg-orange-50' },
                { num: '第19题', topic: '函数与导数 / 概率压轴', score: '17分', diff: '难（压轴）', color: 'bg-red-50' },
              ].map((r) => (
                <tr key={r.num} className={r.color}>
                  <td className="border border-gray-200 px-4 py-2 text-center font-bold">{r.num}</td>
                  <td className="border border-gray-200 px-4 py-2">{r.topic}</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">{r.score}</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">{r.diff}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <PageBreak label="六大核心模块" />

      {/* 二、六大核心模块 */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm font-bold">3</span>
          六大核心模块及分值占比
        </h2>

        <p className="text-gray-500 mb-4">根据2021-2025年新高考真题统计：</p>

        <div className="space-y-3 mb-4">
          {[
            { name: '函数与导数', range: '25-36分', pct: 18, stars: 5, color: 'red' },
            { name: '解析几何（圆锥曲线）', range: '23-27分', pct: 17, stars: 5, color: 'red' },
            { name: '概率与统计', range: '22-31分', pct: 16, stars: 3, color: 'amber' },
            { name: '立体几何', range: '19-22分', pct: 14, stars: 3, color: 'amber' },
            { name: '三角函数与解三角形', range: '15-22分', pct: 13, stars: 3, color: 'amber' },
            { name: '数列', range: '15-20分', pct: 12, stars: 4, color: 'orange' },
          ].map((m) => (
            <div key={m.name} className="bg-white rounded-xl border border-gray-200 p-4 flex items-center gap-4">
              <div className="flex-1">
                <p className="font-bold text-gray-800">{m.name}</p>
                <p className="text-gray-500">{m.range}（~{m.pct}%）</p>
              </div>
              <div className="text-right">
                <span className="text-amber-500">{'⭐'.repeat(m.stars)}</span>
              </div>
              <div className="w-24 bg-gray-100 rounded-full h-3">
                <div
                  className={`h-3 rounded-full ${m.color === 'red' ? 'bg-red-400' : m.color === 'orange' ? 'bg-orange-400' : 'bg-amber-400'}`}
                  style={{ width: `${(m.pct / 18) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 关键趋势 */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
        <p className="font-bold text-blue-800 mb-2">关键趋势（2025年变化）</p>
        <div className="space-y-1 text-gray-700">
          <p>导数题从压轴位置前移，概率统计可能成为新压轴</p>
          <p>题型顺序不再固定，“去常规化”趋势明显</p>
          <p>更注重教材例题的延伸变形</p>
          <p>跨模块融合题增多（如数列+导数、三角+向量）</p>
        </div>
      </div>

      {/* 目标分数预估 */}
      <div className="bg-gradient-to-b from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-xl p-3 mb-6">
        <p className="font-bold text-blue-900 mb-2">目标分数预估</p>
        <div className="space-y-1">
          {[
            { stage: '7天验证期后', target: '40-60分', desc: '拿下送分题+1-2个基础模块' },
            { stage: '30天后', target: '70-90分', desc: '覆盖第一+第二优先级' },
            { stage: '60天后', target: '90-110分', desc: '巩固+开始攻克拔高模块' },
            { stage: '高考目标', target: '100-120分', desc: '稳拿基础分+中档题' },
          ].map((s) => (
            <div key={s.stage} className="bg-white rounded-lg p-2 flex items-center gap-3">
              <p className="font-bold text-gray-800 w-24 shrink-0 text-sm">{s.stage}</p>
              <p className="font-bold text-blue-600 w-20 shrink-0">{s.target}</p>
              <p className="text-gray-500 text-sm flex-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <PageBreak label="18个知识模块" />

      {/* 18个知识模块 */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm font-bold">4</span>
          18个知识模块完整清单
        </h2>

        <div className="space-y-6">
          {/* 基础工具层 */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-5" style={{ breakInside: 'avoid' }}>
            <p className="font-bold text-green-800 mb-3">📌 基础工具层</p>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-green-500 text-white text-xs flex items-center justify-center font-bold">1</span>
                <div className="flex-1"><p className="font-bold">集合与逻辑用语</p><p className="text-gray-500 text-xs">集合运算、充要条件、命题</p></div>
                <span className="text-green-600 text-xs font-bold">每年必考5分 · 送分题</span>
              </div>
              <div className="bg-white rounded-lg p-3 flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-green-500 text-white text-xs flex items-center justify-center font-bold">2</span>
                <div className="flex-1"><p className="font-bold">不等式</p><p className="text-gray-500 text-xs">一元二次不等式、基本不等式</p></div>
                <span className="text-gray-500 text-xs">融入其他题，工具性</span>
              </div>
              <div className="bg-white rounded-lg p-3 flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-green-500 text-white text-xs flex items-center justify-center font-bold">3</span>
                <div className="flex-1"><p className="font-bold">复数</p><p className="text-gray-500 text-xs">复数运算、模、共轭复数</p></div>
                <span className="text-green-600 text-xs font-bold">每年必考5分 · 送分题</span>
              </div>
            </div>
          </div>

          {/* 函数核心层 */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-5" style={{ breakInside: 'avoid' }}>
            <p className="font-bold text-red-800 mb-3">📌 函数核心层</p>
            <div className="space-y-3">
              {[
                { n: 4, name: '函数概念与性质', desc: '定义域、值域、单调性、奇偶性、周期性', note: '核心中的核心' },
                { n: 5, name: '函数图像与零点', desc: '图像变换、零点存在定理', note: '常考' },
                { n: 6, name: '基本初等函数', desc: '指数函数、对数函数、幂函数', note: '必考' },
                { n: 7, name: '导数及应用', desc: '求导公式、单调性、极值最值', note: '压轴 14-15分' },
              ].map((m) => (
                <div key={m.n} className="bg-white rounded-lg p-3 flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-bold">{m.n}</span>
                  <div className="flex-1"><p className="font-bold">{m.name}</p><p className="text-gray-500 text-xs">{m.desc}</p></div>
                  <span className="text-red-600 text-xs font-bold">{m.note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 三角模块 */}
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-5" style={{ breakInside: 'avoid' }}>
            <p className="font-bold text-orange-800 mb-3">📌 三角模块</p>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center font-bold">8</span>
                <div className="flex-1"><p className="font-bold">三角函数与恒等变换</p><p className="text-gray-500 text-xs">诱导公式、和差角、倍角、辅助角</p></div>
                <span className="text-orange-600 text-xs font-bold">小题+可能出解答题</span>
              </div>
              <div className="bg-white rounded-lg p-3 flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center font-bold">9</span>
                <div className="flex-1"><p className="font-bold">解三角形</p><p className="text-gray-500 text-xs">正弦定理、余弦定理、面积公式</p></div>
                <span className="text-orange-600 text-xs font-bold">解答题常考</span>
              </div>
            </div>
          </div>

          {/* 向量与数列 */}
          <PageBreak />
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-5" style={{ breakInside: 'avoid' }}>
            <p className="font-bold text-purple-800 mb-3">📌 向量与数列</p>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-purple-500 text-white text-xs flex items-center justify-center font-bold">10</span>
                <div className="flex-1"><p className="font-bold">平面向量与复数</p><p className="text-gray-500 text-xs">向量运算、数量积、坐标表示</p></div>
                <span className="text-purple-600 text-xs font-bold">小题必考</span>
              </div>
              <div className="bg-white rounded-lg p-3 flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-purple-500 text-white text-xs flex items-center justify-center font-bold">11</span>
                <div className="flex-1"><p className="font-bold">数列</p><p className="text-gray-500 text-xs">等差等比通项/求和、递推、错位相减</p></div>
                <span className="text-purple-600 text-xs font-bold">解答题常考</span>
              </div>
            </div>
          </div>

          {/* 几何模块 */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5" style={{ breakInside: 'avoid' }}>
            <p className="font-bold text-blue-800 mb-3">📌 几何模块</p>
            <div className="space-y-3">
              {[
                { n: 12, name: '立体几何初步', desc: '点线面关系、平行垂直证明', note: '解答题常考' },
                { n: 13, name: '空间向量', desc: '用向量求角度、距离', note: '立体几何第二问' },
                { n: 14, name: '直线与圆', desc: '直线方程、圆的方程、位置关系', note: '小题常考' },
                { n: 15, name: '圆锥曲线', desc: '椭圆、双曲线、抛物线', note: '解答题 12-15分' },
              ].map((m) => (
                <div key={m.n} className="bg-white rounded-lg p-3 flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center font-bold">{m.n}</span>
                  <div className="flex-1"><p className="font-bold">{m.name}</p><p className="text-gray-500 text-xs">{m.desc}</p></div>
                  <span className="text-blue-600 text-xs font-bold">{m.note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 概率统计模块 */}
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-5" style={{ breakInside: 'avoid' }}>
            <p className="font-bold text-teal-800 mb-3">📌 概率统计模块</p>
            <div className="space-y-3">
              {[
                { n: 16, name: '计数原理', desc: '排列组合、二项式定理', note: '小题' },
                { n: 17, name: '概率统计', desc: '古典概型、条件概率、分布列、期望方差', note: '解答题常考' },
                { n: 18, name: '成对数据统计分析', desc: '回归分析、独立性检验', note: '小题或解答题' },
              ].map((m) => (
                <div key={m.n} className="bg-white rounded-lg p-3 flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-teal-500 text-white text-xs flex items-center justify-center font-bold">{m.n}</span>
                  <div className="flex-1"><p className="font-bold">{m.name}</p><p className="text-gray-500 text-xs">{m.desc}</p></div>
                  <span className="text-teal-600 text-xs font-bold">{m.note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 四、学习优先级 */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm font-bold">5</span>
          学习优先级排序
        </h2>

        {/* 第一优先级 */}
        <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-4 mb-4">
          <p className="font-black text-red-800 text-base mb-0.5">🔴 第一优先级：高性价比送分模块</p>
          <p className="text-red-600 text-sm mb-1">预计可拿 30-40 分 · 好学、分值稳、公式固定</p>
          <div className="space-y-1">
            {[
              { name: '集合运算', score: '5分', time: '2小时', reason: '最简单，纯送分' },
              { name: '复数运算', score: '5分', time: '2小时', reason: '公式固定，练几题就会' },
              { name: '三角函数基础', score: '10-15分', time: '2-3天', reason: '公式套路固定，背熟就能做' },
              { name: '概率统计基础', score: '10-15分', time: '2-3天', reason: '阅读理解为主，门槛低' },
              { name: '平面向量', score: '5分', time: '1天', reason: '工具性知识，简单' },
            ].map((m) => (
              <div key={m.name} className="bg-white rounded-lg p-2 flex items-center gap-2">
                <div className="flex-1">
                  <p className="font-bold text-gray-800 text-sm">{m.name}</p>
                  <p className="text-gray-500 text-xs">{m.reason}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-red-600 text-sm">{m.score}</p>
                  <p className="text-gray-400 text-xs">{m.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 第二优先级 */}
        <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-4 mb-4">
          <p className="font-black text-amber-800 text-base mb-0.5">🟡 第二优先级：核心提分模块</p>
          <p className="text-amber-600 text-sm mb-1">预计可再拿 30-40 分 · 需要更多时间但回报大</p>
          <div className="space-y-1">
            {[
              { name: '数列', score: '10-15分', time: '3-4天', reason: '套路性强，掌握方法就能做' },
              { name: '解三角形', score: '5-10分', time: '2天', reason: '正余弦定理公式固定' },
              { name: '函数基础', score: '10-15分', time: '3-4天', reason: '核心知识，理解概念为主' },
              { name: '立体几何', score: '10-15分', time: '3-4天', reason: '证明+向量法求角' },
            ].map((m) => (
              <div key={m.name} className="bg-white rounded-lg p-2 flex items-center gap-2">
                <div className="flex-1">
                  <p className="font-bold text-gray-800 text-sm">{m.name}</p>
                  <p className="text-gray-500 text-xs">{m.reason}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-amber-600 text-sm">{m.score}</p>
                  <p className="text-gray-400 text-xs">{m.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 第三优先级 */}
        <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-4">
          <p className="font-black text-green-800 text-base mb-0.5">🟢 第三优先级：拔高模块</p>
          <p className="text-green-600 text-sm mb-1">时间充裕再攻</p>
          <div className="space-y-1">
            {[
              { name: '导数应用', score: '5-14分', time: '5-7天', reason: '压轴题，难度大' },
              { name: '圆锥曲线', score: '5-15分', time: '5-7天', reason: '计算量大，但套路固定' },
              { name: '不等式进阶', score: '融合分', time: '2-3天', reason: '工具性' },
              { name: '排列组合', score: '5分', time: '2天', reason: '小题考查' },
            ].map((m) => (
              <div key={m.name} className="bg-white rounded-lg p-2 flex items-center gap-2">
                <div className="flex-1">
                  <p className="font-bold text-gray-800 text-sm">{m.name}</p>
                  <p className="text-gray-500 text-xs">{m.reason}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600 text-sm">{m.score}</p>
                  <p className="text-gray-400 text-xs">{m.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="text-center text-gray-400 text-xs py-4">
        报告生成时间：2026年3月6日 · 数据来源：教育部考试院、新高考真题分析
      </div>
    </div>
  );
}
