import { Math, Collapsible, SpeakButton, PageHeader, LessonLayout, ExportButton } from '@/components/shared';
import { logicPrereqNarrations } from './data/1.2.5/1.2.5-prereq-narrations';
import { logicPrereqProgressItems } from './data/1.2.5/1.2.5-prereq-progress';
import { useProgress, usePrintMode } from '@/hooks';


export function LogicPrereqPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('logic-prereq', logicPrereqProgressItems);
  usePrintMode();

  return (
    <div>
      <PageHeader
        stage="前置准备"
        variant="prereq"
        title="1.2.5 逻辑用语前置知识"
        narration={logicPrereqNarrations.intro}
        subtitle="学逻辑之前，先确保子集关系、解不等式、基本推理没问题"
        tags={[
          { label: '约15-20分钟', color: 'amber' },
          { label: '集合基础', color: 'green' },
        ]}
      />

      <div className="flex justify-end mb-4 print:hidden">
        <ExportButton title="1.2.5 逻辑用语前置知识" />
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>

      {/* Section 2: Solving Inequalities */}
      <section id="lp-inequality" className="mb-0 scroll-mt-4">
        <Collapsible title="一、解不等式" defaultOpen storageKey="logic-prereq:inequality" headerExtra={<SpeakButton text={logicPrereqNarrations.inequalityReview} />}>
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            {/* 绝对值不等式核心公式 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-teal-700 border-b border-gray-400 bg-gray-50">绝对值不等式（两句话搞定）</div>
              <table className="w-full border-collapse">
                <tbody>
                  <tr>
                    <td className="border-b border-r border-gray-300 px-2 py-1.5 font-bold text-green-700 w-28"><Math tex="|x| < a" /></td>
                    <td className="border-b border-r border-gray-300 px-2 py-1.5 text-center font-bold">夹中间</td>
                    <td className="border-b border-gray-300 px-2 py-1.5"><Math tex="-a < x < a" /></td>
                  </tr>
                  <tr>
                    <td className="border-r border-gray-300 px-2 py-1.5 font-bold text-red-700"><Math tex="|x| > a" /></td>
                    <td className="border-r border-gray-300 px-2 py-1.5 text-center font-bold">拆两边</td>
                    <td className="px-2 py-1.5"><Math tex="x < -a" /> 或 <Math tex="x > a" /></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 做题步骤 */}
            <div className="border border-orange-300 rounded overflow-hidden bg-orange-50">
              <div className="px-2 py-1 font-bold text-orange-700 border-b border-orange-300 bg-orange-100">做题就两步</div>
              <div className="px-3 py-1">
                <p><strong>①</strong> 看 {'<'} 还是 {'>'}，去绝对值（夹中间/拆两边）　<strong>②</strong> 解普通不等式（移项、化简）</p>
              </div>
            </div>

            {/* 例题 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-green-700 border-b border-gray-400 bg-gray-50">例题</div>
              <div className="px-3 py-2 space-y-2">
                <p><Math tex="|x - 1| < 3" />，夹中间 <Math tex="-3 < x-1 < 3" />，答案 <strong><Math tex="-2 < x < 4" /></strong></p>
                <p><Math tex="|x + 2| > 5" />，拆两边 <Math tex="x+2 < -5" /> 或 <Math tex="x+2 > 5" />，答案 <strong><Math tex="x < -7" /> 或 <Math tex="x > 3" /></strong></p>
                <p><Math tex="|x - 1| < |x + 3|" />，两边平方 <Math tex="(x-1)^2 < (x+3)^2" />，展开化简，答案 <strong><Math tex="x > -1" /></strong></p>
                <div className="space-y-1">
                  <p><Math tex="\left|\dfrac{x-1}{x+2}\right| < 2" /></p>
                  <p className="ml-4">两边平方，得 <Math tex="\dfrac{(x-1)^2}{(x+2)^2} < 4" /></p>
                  <p className="ml-4">两边乘以 <Math tex="(x+2)^2" />（乘正数不变号，乘负数要变号；平方一定 <Math tex="\geq 0" />，所以不变号），得 <Math tex="(x-1)^2 < 4(x+2)^2" /></p>
                  <p className="ml-4">展开，左边得 <Math tex="x^2 - 2x + 1" />，右边得 <Math tex="4x^2 + 16x + 16" /></p>
                  <p className="ml-4">移项整理，得 <Math tex="3x^2 + 18x + 15 > 0" /></p>
                  <p className="ml-4">两边除以 3，因式分解，得 <Math tex="(x+1)(x+5) > 0" /></p>
                  <p className="ml-4">答案 <strong><Math tex="x < -5" /> 或 <Math tex="x > -1" /></strong>（且 <Math tex="x \neq -2" />）</p>
                </div>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>

      {/* Section 3: Basic Reasoning */}
      <section id="lp-reasoning" className="mb-6 scroll-mt-4">
        <Collapsible title="二、基本推理能力" defaultOpen storageKey="logic-prereq:reasoning" headerExtra={<SpeakButton text={logicPrereqNarrations.reasoning} />}>
          <div className="space-y-0 text-[0.9rem] text-gray-800">

            {/* 核心概念 + 判断口诀 */}
            <div className="border border-blue-300 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-blue-700 border-b border-blue-300 bg-blue-100">"推出"是什么意思？</div>
              <div className="flex">
                <div className="flex-1 px-3 py-2 border-r border-blue-200">
                  <p>"A 推出 B" = <strong>如果 A 成立，B 是不是一定成立？</strong></p>
                  <div className="mt-1 space-y-0.5">
                    <p>🐱 "它是猫" → "它是动物"　<strong className="text-green-600">✓ 能推出</strong></p>
                    <p>🐾 "它是动物" → "它是猫"　<strong className="text-red-600">✗ 推不出</strong>（狗也是动物）</p>
                  </div>
                </div>
                <div className="w-44 px-3 py-2 space-y-1">
                  <p className="font-bold text-orange-700">判断口诀</p>
                  <p><strong>小→大</strong>：<span className="text-green-600 font-bold">能推出 ✓</span></p>
                  <p><strong>大→小</strong>：<span className="text-red-600 font-bold">推不出 ✗</span></p>
                </div>
              </div>
            </div>

            {/* 数学例子 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-purple-700 border-b border-gray-400 bg-gray-50">例：<Math tex="x = 2" /> 能推出 <Math tex="x^2 = 4" /> 吗？反过来呢？</div>
              <div className="px-3 py-2 space-y-1">
                <p>正向：由 <Math tex="x = 2" /> 能推出 <Math tex="x^2 = 4" /> 吗？代入得 <Math tex="2^2 = 4" />，成立　<strong className="text-green-600">✓ 能推出</strong></p>
                <p>反向：由 <Math tex="x^2 = 4" /> 能推出 <Math tex="x = 2" /> 吗？<Math tex="x = -2" /> 也满足 <Math tex="x^2 = 4" />，但 <Math tex="x \neq 2" />　<strong className="text-red-600">✗ 推不出</strong></p>
              </div>
            </div>

            {/* 两个绝招 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-teal-700 border-b border-gray-400 bg-gray-50">判断两绝招</div>
              <div className="px-3 py-1.5">
                <p><strong>绝招1：想范围大小</strong> — 小的能推出大的，大的推不出小的　　<strong>绝招2：找反例</strong> — 找一个 A 成立但 B 不成立的例子</p>
              </div>
            </div>

            {/* 符号 */}
            <div className="border border-gray-400 rounded overflow-hidden">
              <div className="px-2 py-1 font-bold text-gray-700 border-b border-gray-400 bg-gray-50">符号</div>
              <div className="px-3 py-2">
                <p>"A 推出 B" 写成 <Math tex="A \Rightarrow B" />，读作"若 A 则 B"</p>
              </div>
            </div>

          </div>
        </Collapsible>
      </section>


      </LessonLayout>
    </div>
  );
}
