import { Math, Collapsible, SpeakButton, PageHeader, LessonLayout, ExportButton } from '@/components/shared';
import { inequalityPrereqNarrations } from './data/prereq-narrations';
import { inequalityPrereqProgressItems } from './data/prereq-progress';
import { useProgress, usePrintMode } from '@/hooks';

export function InequalityPrereqPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('inequality-prereq', inequalityPrereqProgressItems);
  usePrintMode();

  return (
    <div>
      <PageHeader
        stage="前置准备"
        variant="prereq"
        title="2.0 不等式前置知识"
        narration={inequalityPrereqNarrations.intro}
        subtitle="解方程 + 不等号 + 数轴，5分钟搞定"
        tags={[
          { label: '约10分钟', color: 'amber' },
          { label: '初中基础', color: 'green' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="2.0 不等式前置知识" />
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      {/* Section 1: 方程与不等号 */}
      <section id="iq-equation" className="mb-6 scroll-mt-4">
        <Collapsible title="一、方程与不等号" defaultOpen storageKey="ineq-prereq:equation" headerExtra={<SpeakButton text={inequalityPrereqNarrations.linearEquation} />}>
          <div className="space-y-2 text-lg text-gray-800">

            {/* ── 专题A：解一元一次方程 ── */}
            <div className="border border-blue-300 rounded-lg overflow-hidden">
              <div className="px-3 py-1 font-bold text-blue-800 bg-blue-100 text-lg border-b border-blue-300">专题A · 解一元一次方程</div>
              <div className="px-3 py-1.5 space-y-1.5">
                <div>
                  <p className="font-bold text-orange-700">三步解方程</p>
                  <p><strong>① 移项</strong>：含x移左边，常数移右边（过等号变符号）</p>
                  <p><strong>② 合并</strong>：左边合x系数，右边合常数</p>
                  <p><strong>③ 系数化1</strong>：两边除以x的系数</p>
                </div>

                <div className="border-t border-gray-200 pt-1.5">
                  <p className="font-bold text-purple-700">例题</p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-gray-50 rounded p-2">
                      <p className="font-bold"><Math tex="5x - 3 = 2x + 9" /></p>
                      <p>① 移项：<Math tex="5x - 2x = 9 + 3" /></p>
                      <p>② 合并：<Math tex="3x = 12" /></p>
                      <p>③ 系数化1：<Math tex="x = 4" /></p>
                    </div>
                    <div className="bg-gray-50 rounded p-2">
                      <p className="font-bold"><Math tex="3(x + 2) = 15" /></p>
                      <p>去括号：<Math tex="3x + 6 = 15" /></p>
                      <p>移项：<Math tex="3x = 9" /></p>
                      <p>系数化1：<Math tex="x = 3" /></p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-1.5">
                  <p className="font-bold text-red-700">易错</p>
                  <p><strong>移项忘变号</strong>：<Math tex="3x + 5 = 8" /> 应得 <Math tex="3x = 3" />，不是 <Math tex="3x = 13" /></p>
                  <p><strong>去括号漏乘</strong>：<Math tex="2(x+3) = 2x + 6" />，不是 <Math tex="2x + 3" /></p>
                </div>
              </div>
            </div>

            {/* ── 专题B：不等号与数轴 ── */}
            <div className="border border-green-300 rounded-lg overflow-hidden">
              <div className="px-3 py-1 font-bold text-green-800 bg-green-100 text-lg border-b border-green-300">专题B · 不等号与数轴</div>
              <div className="px-3 py-1.5 space-y-1.5">
                <div>
                  <p className="font-bold text-blue-700">四种不等号</p>
                  <div className="grid grid-cols-2 gap-x-4">
                    <p><Math tex=">" /> 大于（不含等号），如 <Math tex="5 > 3" /></p>
                    <p><Math tex="<" /> 小于（不含等号），如 <Math tex="-2 < 1" /></p>
                    <p><Math tex="\geq" /> 大于等于（含等号），如 <Math tex="x \geq 3" /></p>
                    <p><Math tex="\leq" /> 小于等于（含等号），如 <Math tex="x \leq -1" /></p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-1.5">
                  <p className="font-bold text-blue-700">数轴规则</p>
                  <p>数轴上<strong>右边的数 {'>'} 左边的数</strong></p>
                  <p className="text-gray-600">负数比较：<Math tex="-5 < -2" />（离0远的更小）</p>
                </div>

                <div className="border-t border-gray-200 pt-1.5">
                  <p className="font-bold text-green-700">数轴画法</p>
                  <div className="grid grid-cols-2 gap-x-4">
                    <p><strong>○ 空心</strong>：不含端点（{'>'} 或 {'<'}），如 <Math tex="x > 2" /> 在2处画○向右</p>
                    <p><strong>● 实心</strong>：含端点（≥ 或 ≤），如 <Math tex="x \leq -1" /> 在-1处画●向左</p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-1.5">
                  <p className="font-bold text-red-700">易错</p>
                  <p><strong>空心实心搞混</strong>：<Math tex="x > 2" /> 不含2（○），<Math tex="x \geq 2" /> 含2（●）</p>
                  <p><strong>负数比大小</strong>：<Math tex="-5 < -2" />，离0越远越小</p>
                </div>
              </div>
            </div>

            {/* 下一步预告 */}
            <p className="text-orange-700 font-bold mt-2">🎯 解不等式和解方程步骤一样，唯一区别：<span className="text-red-600">乘除负数时不等号翻转</span></p>
            <p className="text-gray-600 ml-6">例：<Math tex="-2x > 6" /> 两边除以 <Math tex="-2" />，得 <Math tex="x < -3" />（符号从 {'>'} 变 {'<'}）</p>
          </div>
        </Collapsible>
      </section>


      </LessonLayout>
    </div>
  );
}
