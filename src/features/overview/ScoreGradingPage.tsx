import { PageHeader, ExportButton } from '@/components/shared';

export function ScoreGradingPage() {
  return (
    <div>
      <PageHeader
        stage="序章"
        title="阶段考试 · 分值判定标准"
        subtitle="每个阶段考试满分 100 分，对照下表判断你的掌握程度"
        tags={[
          { label: '全阶段通用', color: 'blue' },
          { label: '满分100', color: 'amber' },
        ]}
      />

      <div className="flex justify-end mb-4 print:hidden">
        <ExportButton title="分值判定标准" />
      </div>

      {/* 通用判定标准 */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm font-bold">1</span>
          通用判定标准
        </h2>

        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-center w-28">分数段</th>
                <th className="border border-gray-200 px-4 py-3 text-center w-20">等级</th>
                <th className="border border-gray-200 px-4 py-3 text-left">高考对应水平</th>
                <th className="border border-gray-200 px-4 py-3 text-left">建议</th>
              </tr>
            </thead>
            <tbody>
              {[
                { range: '90 ~ 100', label: '优秀', color: 'text-green-700 bg-green-50', desc: '这部分高考知识已完全掌握', advice: '直接进入下一阶段' },
                { range: '75 ~ 89', label: '良好', color: 'text-blue-700 bg-blue-50', desc: '大部分掌握，个别知识点有漏洞', advice: '回顾错题，查漏补缺后进入下一阶段' },
                { range: '60 ~ 74', label: '及格', color: 'text-amber-700 bg-amber-50', desc: '有明显薄弱环节', advice: '针对薄弱模块重新学习，一周后重考' },
                { range: '< 60', label: '不及格', color: 'text-red-700 bg-red-50', desc: '基础不牢，高考相关题大概率丢分', advice: '需要重新学习本阶段全部内容' },
              ].map((level) => (
                <tr key={level.label} className={level.color}>
                  <td className="border border-gray-200 px-4 py-3 text-center font-bold">{level.range}</td>
                  <td className="border border-gray-200 px-4 py-3 text-center font-bold">{level.label}</td>
                  <td className="border border-gray-200 px-4 py-3">{level.desc}</td>
                  <td className="border border-gray-200 px-4 py-3">{level.advice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 各阶段考试说明 */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm font-bold">2</span>
          各阶段考试详情
        </h2>

        <div className="space-y-4">
          {/* 第一阶段 */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-full bg-blue-500 text-white text-sm flex items-center justify-center font-bold">1</span>
              <div>
                <p className="font-bold text-gray-900">第一阶段：数学语言</p>
                <p className="text-gray-500 text-sm">复数 · 集合 · 逻辑用语</p>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-3 py-2 text-left">大题</th>
                    <th className="border border-gray-200 px-3 py-2 text-center">题数</th>
                    <th className="border border-gray-200 px-3 py-2 text-center">每题</th>
                    <th className="border border-gray-200 px-3 py-2 text-center">小计</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-3 py-2">一、复数（选择题）</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">8</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">3分</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">24分</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-3 py-2">二、集合（选择题）</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">10</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">3分</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">30分</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-3 py-2">三、逻辑用语（选择题）</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">6</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">3分</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">18分</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-3 py-2">四、综合题（解答题）</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">4</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">7分</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">28分</td>
                  </tr>
                  <tr className="bg-blue-50 font-bold">
                    <td className="border border-gray-200 px-3 py-2">合计</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">28题</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">—</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">100分</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 text-sm mt-2">考试时间：45 分钟</p>
          </div>

          {/* 第二阶段 */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-full bg-amber-500 text-white text-sm flex items-center justify-center font-bold">2</span>
              <div>
                <p className="font-bold text-gray-900">第二阶段：计算工具</p>
                <p className="text-gray-500 text-sm">不等式 · 二次函数</p>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-3 py-2 text-left">大题</th>
                    <th className="border border-gray-200 px-3 py-2 text-center">题数</th>
                    <th className="border border-gray-200 px-3 py-2 text-center">每题</th>
                    <th className="border border-gray-200 px-3 py-2 text-center">小计</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-3 py-2">一、不等式（选择题）</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">7</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">4分</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">28分</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-3 py-2">二、二次函数（选择题）</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">8</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">4分</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">32分</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-3 py-2">三、综合题（解答题）</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">4</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">10分</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">40分</td>
                  </tr>
                  <tr className="bg-blue-50 font-bold">
                    <td className="border border-gray-200 px-3 py-2">合计</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">19题</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">—</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">100分</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 text-sm mt-2">考试时间：35 分钟</p>
          </div>

          {/* 第三阶段 */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-full bg-red-500 text-white text-sm flex items-center justify-center font-bold">3</span>
              <div>
                <p className="font-bold text-gray-900">第三阶段：函数思维</p>
                <p className="text-gray-500 text-sm">函数性质 · 初等函数 · 图像零点 · 导数</p>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-3 py-2 text-left">大题</th>
                    <th className="border border-gray-200 px-3 py-2 text-center">题数</th>
                    <th className="border border-gray-200 px-3 py-2 text-center">每题</th>
                    <th className="border border-gray-200 px-3 py-2 text-center">小计</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-3 py-2">一、函数概念与性质（选择题）</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">5</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">3分</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">15分</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-3 py-2">二、基本初等函数（选择题）</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">5</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">3分</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">15分</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-3 py-2">三、函数图像与零点（选择题）</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">5</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">3分</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">15分</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-3 py-2">四、导数基础（选择题）</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">5</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">3分</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">15分</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-3 py-2">五、综合题（解答题）</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">5</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">8分</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">40分</td>
                  </tr>
                  <tr className="bg-blue-50 font-bold">
                    <td className="border border-gray-200 px-3 py-2">合计</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">25题</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">—</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">100分</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 text-sm mt-2">考试时间：50 分钟</p>
          </div>
        </div>
      </section>

      {/* 使用说明 */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm font-bold">3</span>
          怎么用这个考试
        </h2>

        <div className="space-y-3">
          {[
            { step: '1', title: '学完一个阶段后', desc: '把阶段考试打印出来，计时做题，模拟真实考试环境' },
            { step: '2', title: '做完后对答案', desc: '翻到答案页批改，统计总分' },
            { step: '3', title: '对照判定标准', desc: '看自己处于哪个等级，按建议决定下一步' },
            { step: '4', title: '错题回顾', desc: '把做错的题对应的知识点找到，重新学习后再考一次' },
          ].map((s) => (
            <div key={s.step} className="bg-white border border-gray-200 rounded-xl p-4 flex items-start gap-3">
              <span className="w-7 h-7 rounded-full bg-gray-800 text-white text-sm flex items-center justify-center font-bold shrink-0">{s.step}</span>
              <div>
                <p className="font-bold text-gray-900">{s.title}</p>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
        <p className="font-bold text-amber-800 mb-2">注意事项</p>
        <div className="space-y-1 text-gray-700">
          <p>阶段考试测的是<strong>这个阶段的内容</strong>，不是高考全卷</p>
          <p>90 分以上说明该阶段知识掌握扎实，高考遇到相关题有信心拿分</p>
          <p>不及格不要灰心，说明还有提分空间，重学后再考一定会进步</p>
          <p>建议每个阶段至少考两次：学完第一次 + 复习后第二次</p>
        </div>
      </div>
    </div>
  );
}
