import type { ReactNode } from 'react';
import { Math as MathTex, PageBreak } from '@/components/shared';
import { sumDiffPractice, doubleAnglePractice, powerReductionPractice, halfAnglePractice, auxiliaryPractice, comprehensivePractice } from './data/identity-questions';
import type { QuizQuestionData } from '@/types';

// ══════════════════════════════════════════════════════════
// 解析内容（唯一数据源）— 交互 + 打印共用
// ══════════════════════════════════════════════════════════

export const trigIdentityExplanations: Record<string, ReactNode> = {
  // ── 一、和差公式 ──
  'ti-sd-1': (
    <>
      <p className="mt-2"><strong>第①步 凑角：</strong><MathTex tex="75°=45°+30°" /></p>
      <p className="mt-2"><strong>第②步 套正弦和角公式：</strong></p>
      <p className="text-center mt-1"><MathTex tex="\sin 75°=\sin 45°\cos 30°+\cos 45°\sin 30°" /></p>
      <p className="mt-2"><strong>第③步 代入特殊值：</strong></p>
      <p className="text-center mt-1"><MathTex tex="=\dfrac{\sqrt{2}}{2}\cdot\dfrac{\sqrt{3}}{2}+\dfrac{\sqrt{2}}{2}\cdot\dfrac{1}{2}=\dfrac{\sqrt{6}+\sqrt{2}}{4}" /></p>
    </>
  ),
  'ti-sd-2': (
    <>
      <p className="mt-2"><strong>第①步 凑角：</strong><MathTex tex="15°=45°-30°" /></p>
      <p className="mt-2"><strong>第②步 套余弦差角公式</strong>（注意余弦符号相反）<strong>：</strong></p>
      <p className="text-center mt-1"><MathTex tex="\cos 15°=\cos 45°\cos 30°+\sin 45°\sin 30°" /></p>
      <p className="text-center mt-1"><MathTex tex="=\dfrac{\sqrt{2}}{2}\cdot\dfrac{\sqrt{3}}{2}+\dfrac{\sqrt{2}}{2}\cdot\dfrac{1}{2}=\dfrac{\sqrt{6}+\sqrt{2}}{4}" /></p>
      <p className="mt-2"><strong>注意：</strong><MathTex tex="\cos(\alpha-\beta)" /> 中间是 + 号！</p>
    </>
  ),
  'ti-sd-3': (
    <>
      <p className="mt-2"><strong>第①步 凑角：</strong><MathTex tex="15°=45°-30°" /></p>
      <p className="mt-2"><strong>第②步 套正切差角公式：</strong></p>
      <p className="text-center mt-1"><MathTex tex="\tan 15°=\dfrac{\tan 45°-\tan 30°}{1+\tan 45°\cdot\tan 30°}=\dfrac{1-\frac{\sqrt{3}}{3}}{1+\frac{\sqrt{3}}{3}}" /></p>
      <p className="mt-2"><strong>第③步 通分化简 + 有理化：</strong></p>
      <p className="text-center mt-1"><MathTex tex="=\dfrac{3-\sqrt{3}}{3+\sqrt{3}}\cdot\dfrac{3-\sqrt{3}}{3-\sqrt{3}}=\dfrac{12-6\sqrt{3}}{6}=2-\sqrt{3}" /></p>
    </>
  ),
  'ti-sd-4': (
    <>
      <p className="mt-2"><strong>第①步 补全</strong>（一象限取正）<strong>：</strong></p>
      <p className="text-center mt-1"><MathTex tex="\cos\alpha=\dfrac{3}{5},\;\sin\beta=\dfrac{12}{13}" /></p>
      <p className="mt-2"><strong>第②步 套正弦和角公式：</strong></p>
      <p className="text-center mt-1"><MathTex tex="\sin(\alpha+\beta)=\dfrac{4}{5}\cdot\dfrac{5}{13}+\dfrac{3}{5}\cdot\dfrac{12}{13}=\dfrac{20+36}{65}=\dfrac{56}{65}" /></p>
    </>
  ),
  'ti-sd-5': (
    <>
      <p className="mt-2"><strong>第①步 凑角：</strong><MathTex tex="105°=60°+45°" /></p>
      <p className="mt-2"><strong>第②步 套余弦和角公式</strong>（注意 + 号变 −）<strong>：</strong></p>
      <p className="text-center mt-1"><MathTex tex="\cos 105°=\cos 60°\cos 45°-\sin 60°\sin 45°" /></p>
      <p className="text-center mt-1"><MathTex tex="=\dfrac{1}{2}\cdot\dfrac{\sqrt{2}}{2}-\dfrac{\sqrt{3}}{2}\cdot\dfrac{\sqrt{2}}{2}=\dfrac{\sqrt{2}-\sqrt{6}}{4}" /></p>
      <p className="mt-2"><strong>易错点：</strong><MathTex tex="\cos(\alpha+\beta)" /> 中间是减号！</p>
    </>
  ),

  // ── 二、二倍角公式 ──
  'ti-da-1': (
    <>
      <p className="mt-2"><strong>第①步 补全：</strong>一象限 <MathTex tex="\cos\alpha=\dfrac{4}{5}" /></p>
      <p className="mt-2"><strong>第②步 <MathTex tex="\sin 2\alpha" />：</strong></p>
      <p className="text-center mt-1"><MathTex tex="=2\cdot\dfrac{3}{5}\cdot\dfrac{4}{5}=\dfrac{24}{25}" /></p>
      <p className="mt-2"><strong>第③步 <MathTex tex="\cos 2\alpha" /></strong>（用 <MathTex tex="\cos^2\alpha-\sin^2\alpha" />）<strong>：</strong></p>
      <p className="text-center mt-1"><MathTex tex="=\dfrac{16}{25}-\dfrac{9}{25}=\dfrac{7}{25}" /></p>
    </>
  ),
  'ti-da-2': (
    <>
      <p className="mt-2"><strong>逆用二倍角公式：</strong></p>
      <p className="mt-2">前半：<MathTex tex="\cos^2 15°-\sin^2 15°=\cos 30°=\dfrac{\sqrt{3}}{2}" /></p>
      <p className="mt-2">后半：<MathTex tex="2\sin 22.5°\cos 22.5°=\sin 45°=\dfrac{\sqrt{2}}{2}" /></p>
      <p className="text-center mt-1"><MathTex tex="\text{合计：}\dfrac{\sqrt{3}}{2}+\dfrac{\sqrt{2}}{2}=\dfrac{\sqrt{3}+\sqrt{2}}{2}" /></p>
    </>
  ),

  // ── 三、降幂公式 ──
  'ti-pr-1': (
    <>
      <p className="mt-2">套降幂公式 <MathTex tex="\sin^2\alpha=\dfrac{1-\cos 2\alpha}{2}" />：</p>
      <p className="text-center mt-1"><MathTex tex="\sin^2 15°=\dfrac{1-\cos 30°}{2}=\dfrac{1-\frac{\sqrt{3}}{2}}{2}=\dfrac{2-\sqrt{3}}{4}" /></p>
      <p className="mt-2">口诀：sin² → "1减"除以2</p>
    </>
  ),
  'ti-pr-2': (
    <>
      <p className="mt-2"><strong>第①步 套降幂公式：</strong></p>
      <p className="ml-4 mt-1">公式：<MathTex tex="\cos^2\alpha=\dfrac{1+\cos 2\alpha}{2}" />（口诀：cos² → "1加"除以2）</p>
      <p className="ml-4 mt-1">代入 <MathTex tex="\alpha=75°" />：</p>
      <p className="text-center mt-1"><MathTex tex="\cos^2 75°=\dfrac{1+\cos 150°}{2}" /></p>

      <p className="mt-2"><strong>第②步 求 <MathTex tex="\cos 150°" />：</strong></p>
      <p className="ml-4 mt-1"><MathTex tex="150°=180°-30°" />，用诱导公式：</p>
      <p className="text-center mt-1"><MathTex tex="\cos 150°=-\cos 30°=-\dfrac{\sqrt{3}}{2}" /></p>

      <p className="mt-2"><strong>第③步 代回计算：</strong></p>
      <p className="text-center mt-1"><MathTex tex="\cos^2 75°=\dfrac{1+\left(-\dfrac{\sqrt{3}}{2}\right)}{2}=\dfrac{1-\dfrac{\sqrt{3}}{2}}{2}=\dfrac{\dfrac{2-\sqrt{3}}{2}}{2}=\dfrac{2-\sqrt{3}}{4}" /></p>
    </>
  ),
  'ti-pr-3': (
    <>
      <p className="mt-2">降幂公式反过来用：</p>
      <p className="text-center mt-1"><MathTex tex="\cos^2\alpha=\dfrac{1+\cos 2\alpha}{2}" /></p>
      <p className="mt-2">两边乘 2 再移项：</p>
      <p className="text-center mt-1"><MathTex tex="2\cos^2\alpha-1=\cos 2\alpha" /></p>
      <p className="mt-2">这就是二倍角 cos 的形式②！正用降幂，反用升角</p>
    </>
  ),
  'ti-pr-4': (
    <>
      <p className="mt-2">识别公式：<MathTex tex="1-2\sin^2\alpha=\cos 2\alpha" /></p>
      <p className="mt-2">代入 <MathTex tex="\alpha=\dfrac{\pi}{8}" />：</p>
      <p className="text-center mt-1"><MathTex tex="1-2\sin^2\dfrac{\pi}{8}=\cos\dfrac{\pi}{4}=\dfrac{\sqrt{2}}{2}" /></p>
    </>
  ),

  // ── 四、半角公式 ──
  'ti-ha-1': (
    <>
      <p className="mt-2"><strong>第①步 判象限定正负：</strong><MathTex tex="\dfrac{\alpha}{2}\in(0,\dfrac{\pi}{2})" /> → 一象限，取正号</p>
      <p className="mt-2"><strong>第②步 套半角公式：</strong></p>
      <p className="text-center mt-1"><MathTex tex="\sin\dfrac{\alpha}{2}=\sqrt{\dfrac{1-\cos\alpha}{2}}=\sqrt{\dfrac{1-\frac{7}{25}}{2}}=\sqrt{\dfrac{9}{25}}=\dfrac{3}{5}" /></p>
    </>
  ),
  'ti-ha-2': (
    <>
      <p className="mt-2">思路：<MathTex tex="15°=\dfrac{30°}{2}" />，用 tan 半角公式（不带±）</p>
      <p className="text-center mt-1"><MathTex tex="\tan\dfrac{\alpha}{2}=\dfrac{1-\cos\alpha}{\sin\alpha}" /></p>
      <p className="mt-2">代入 <MathTex tex="\alpha=30°" />：</p>
      <p className="text-center mt-1"><MathTex tex="\tan 15°=\dfrac{1-\cos 30°}{\sin 30°}=\dfrac{1-\frac{\sqrt{3}}{2}}{\frac{1}{2}}=2-\sqrt{3}" /></p>
    </>
  ),
  'ti-ha-3': (
    <>
      <p className="mt-2"><strong>第①步：</strong><MathTex tex="\dfrac{\alpha}{2}\in\left(\dfrac{\pi}{2},\pi\right)" /> → 第二象限</p>
      <p className="mt-2"><strong>第②步：</strong>第二象限 sin &gt; 0，cos &lt; 0，tan &lt; 0</p>
      <p className="mt-2"><strong>结论：</strong><MathTex tex="\cos\dfrac{\alpha}{2}<0" />，取负号</p>
      <p className="mt-2">口诀：半角公式先判象限定正负，再套公式算数值</p>
    </>
  ),

  // ── 五、辅助角公式 ──
  'ti-aux-1': (
    <>
      <p className="mt-2"><strong>第①步 识别：</strong><MathTex tex="a=\sqrt{3}" />（sin系数），<MathTex tex="b=1" />（cos系数）</p>
      <p className="mt-2"><strong>第②步 求振幅：</strong><MathTex tex="R=\sqrt{3+1}=2" /></p>
      <p className="mt-2"><strong>第③步 求φ：</strong><MathTex tex="\cos\varphi=\dfrac{\sqrt{3}}{2},\;\sin\varphi=\dfrac{1}{2} \Rightarrow \varphi=\dfrac{\pi}{6}" /></p>
    </>
  ),
  'ti-aux-2': (
    <>
      <p className="mt-2"><strong>第①步 识别</strong>（注意负号！）<strong>：</strong><MathTex tex="a=1,\;b=-\sqrt{3}" /></p>
      <p className="mt-2"><strong>第②步：</strong><MathTex tex="R=2" /></p>
      <p className="mt-2"><strong>第③步：</strong><MathTex tex="\cos\varphi=\dfrac{1}{2},\;\sin\varphi=-\dfrac{\sqrt{3}}{2}" /> → 第四象限</p>
      <p className="text-center mt-1"><MathTex tex="\varphi=-\dfrac{\pi}{3}" /></p>
      <p className="mt-2"><strong>易错点：</strong><MathTex tex="b=-\sqrt{3}" /> 不是 <MathTex tex="\sqrt{3}" />！</p>
    </>
  ),
  'ti-aux-3': (
    <>
      <p className="mt-2"><strong>第①步 识别</strong>（ω=2 保持不变！）<strong>：</strong><MathTex tex="a=\sqrt{3},\;b=-1" /></p>
      <p className="mt-2"><strong>第②步：</strong><MathTex tex="R=2" /></p>
      <p className="mt-2"><strong>第③步：</strong><MathTex tex="\cos\varphi=\dfrac{\sqrt{3}}{2},\;\sin\varphi=-\dfrac{1}{2} \Rightarrow \varphi=-\dfrac{\pi}{6}" /></p>
      <p className="mt-2"><strong>注意：</strong>是 <MathTex tex="2x" /> 不是 <MathTex tex="x" />！ω 不能丢</p>
    </>
  ),
  'ti-aux-4': (
    <>
      <p className="mt-2"><strong>第①步 辅助角化简：</strong></p>
      <p className="text-center mt-1"><MathTex tex="f(x)=\sqrt{2}\sin\!\left(x-\dfrac{\pi}{4}\right)" /></p>
      <p className="mt-2"><strong>第②步 求递增区间</strong>（令 sin 内层在 <MathTex tex="[-\frac{\pi}{2},\frac{\pi}{2}]" />）<strong>：</strong></p>
      <p className="text-center mt-1"><MathTex tex="-\dfrac{\pi}{2}\leq x-\dfrac{\pi}{4}\leq\dfrac{\pi}{2}" /></p>
      <p className="mt-2"><strong>第③步 解出 x：</strong></p>
      <p className="text-center mt-1"><MathTex tex="-\dfrac{3\pi}{4}\leq x\leq\dfrac{\pi}{4}" /></p>
    </>
  ),
  'ti-aux-5': (
    <>
      <p className="mt-2"><strong>第①步 降幂：</strong>把 <MathTex tex="\sin^2 x" /> 降成一次</p>
      <p className="ml-4 mt-1">降幂公式：<MathTex tex="\sin^2 x=\dfrac{1-\cos 2x}{2}" /></p>
      <p className="ml-4 mt-1">所以 <MathTex tex="2\sin^2 x=1-\cos 2x" /></p>

      <p className="mt-2"><strong>第②步 二倍角：</strong>把 <MathTex tex="2\sin x\cos x" /> 升成二倍角</p>
      <p className="ml-4 mt-1">公式：<MathTex tex="2\sin x\cos x=\sin 2x" /></p>
      <p className="ml-4 mt-1">所以 <MathTex tex="2\sqrt{3}\sin x\cos x=\sqrt{3}\cdot\sin 2x" /></p>

      <p className="mt-2"><strong>第③步 代入原式合并：</strong></p>
      <p className="text-center mt-1"><MathTex tex="f(x)=(1-\cos 2x)+\sqrt{3}\sin 2x-1" /></p>
      <p className="text-center mt-1"><MathTex tex="=\sqrt{3}\sin 2x-\cos 2x" /></p>

      <p className="mt-2"><strong>第④步 辅助角公式：</strong></p>
      <p className="ml-4 mt-1">识别：<MathTex tex="a=\sqrt{3}" />（sin系数），<MathTex tex="b=-1" />（cos系数）</p>
      <p className="ml-4 mt-1">振幅：<MathTex tex="R=\sqrt{(\sqrt{3})^2+(-1)^2}=\sqrt{4}=2" /></p>
      <p className="ml-4 mt-1">求 <MathTex tex="\varphi" />：<MathTex tex="\cos\varphi=\dfrac{\sqrt{3}}{2},\;\sin\varphi=\dfrac{-1}{2}" /></p>
      <p className="ml-4 mt-1"><MathTex tex="\Rightarrow \varphi=-\dfrac{\pi}{6}" />（第四象限）</p>

      <p className="mt-2 font-bold text-center"><MathTex tex="\therefore f(x)=2\sin\!\left(2x-\dfrac{\pi}{6}\right)" /></p>
    </>
  ),

  // ── 六、综合应用 ──
  'ti-comp-1': (
    <>
      <p className="mt-2"><strong>第①步 补全</strong>（二象限 <MathTex tex="\cos\alpha<0" />）<strong>：</strong><MathTex tex="\cos\alpha=-\dfrac{3}{5}" /></p>
      <p className="mt-2"><strong>第②步 套二倍角 sin：</strong></p>
      <p className="text-center mt-1"><MathTex tex="\sin 2\alpha=2\cdot\dfrac{4}{5}\cdot\left(-\dfrac{3}{5}\right)=-\dfrac{24}{25}" /></p>
      <p className="mt-2"><strong>易错点：</strong>二象限 <MathTex tex="\cos\alpha" /> 是负数！</p>
    </>
  ),
  'ti-comp-2': (
    <>
      <p className="mt-2"><strong>第①步：</strong><MathTex tex="\tan(\alpha+\beta)=1" /></p>
      <p className="mt-2"><strong>第②步：</strong><MathTex tex="\tan\alpha+\tan\beta=1-\tan\alpha\tan\beta\;\cdots(*)" /></p>
      <p className="mt-2"><strong>第③步 代入(*)：</strong></p>
      <p className="ml-4 mt-1"><MathTex tex="(1+\tan\alpha)(1+\tan\beta)" /></p>
      <p className="ml-4 mt-1"><MathTex tex="=1+(1-\tan\alpha\tan\beta)+\tan\alpha\tan\beta=2" /></p>
    </>
  ),
  'ti-comp-3': (
    <>
      <p className="mt-2"><strong>第①步 二倍角化简：</strong></p>
      <p className="ml-4 mt-1"><MathTex tex="2\sin x\cos x=\sin 2x" /></p>
      <p className="ml-4 mt-1"><MathTex tex="2\sqrt{3}\cos^2 x=\sqrt{3}(1+\cos 2x)" /></p>
      <p className="mt-2"><strong>第②步 合并：</strong><MathTex tex="=\sin 2x+\sqrt{3}\cos 2x" /></p>
      <p className="mt-2"><strong>第③步 辅助角：</strong><MathTex tex="R=2,\;\varphi=\dfrac{\pi}{3}" /></p>
      <p className="text-center mt-1"><MathTex tex="\therefore 2\sin\!\left(2x+\dfrac{\pi}{3}\right)" /></p>
    </>
  ),
  'ti-comp-4': (
    <>
      <p className="mt-2"><strong>第①步 化简：</strong><MathTex tex="f(x)=1+2\sin\!\left(2x-\dfrac{\pi}{6}\right)" /></p>
      <p className="mt-2"><strong>第②步 周期：</strong><MathTex tex="T=\dfrac{2\pi}{2}=\pi" /></p>
      <p className="mt-2"><strong>第③步 最大值：</strong>sin 最大 = 1 → <MathTex tex="f_{\max}=1+2=3" /></p>
    </>
  ),
  'ti-comp-5': (
    <>
      <p className="mt-2"><strong>第①步 递增条件：</strong><MathTex tex="-\dfrac{\pi}{2}\leq 2x+\dfrac{\pi}{6}\leq\dfrac{\pi}{2}" /></p>
      <p className="mt-2"><strong>第②步 解出 x：</strong>两边减 <MathTex tex="\dfrac{\pi}{6}" /> 再除以 2</p>
      <p className="text-center mt-1"><MathTex tex="-\dfrac{\pi}{3}\leq x\leq\dfrac{\pi}{6}" /></p>
      <p className="mt-2"><strong>第③步 与 <MathTex tex="[0,\pi]" /> 取交集：</strong></p>
      <p className="text-center mt-1"><MathTex tex="\left[-\dfrac{\pi}{3},\dfrac{\pi}{6}\right]\cap[0,\pi]=\left[0,\;\dfrac{\pi}{6}\right]" /></p>
    </>
  ),
};

// ══════════════════════════════════════════════════════════
// 打印答案组件 — 布局自由控制，内容从 explanations 取
// ══════════════════════════════════════════════════════════

function AnswerLabel({ q }: { q: QuizQuestionData }) {
  if (q.type === 'blank') {
    return <>答案：<MathTex tex={q.acceptableAnswers?.[0] ?? q.correctAnswer} /></>;
  }
  const opt = q.options?.find(o => o.value === q.correctAnswer);
  if (!opt) return <>答案：{q.correctAnswer}</>;
  return <>{opt.label}（{opt.isLatex ? <MathTex tex={opt.value} /> : opt.value}）</>;
}

function AnswerSection({ title, questions }: { title: string; questions: QuizQuestionData[] }) {
  return (
    <div className="mb-5">
      <p className="font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">{title}</p>
      <div className="columns-2 gap-4 text-gray-700" style={{ columnRule: '1px solid #e5e7eb' }}>
        {questions.map((q, i) => (
          <div key={q.id} className="flex gap-2 items-start mb-3" style={{ breakInside: 'avoid' }}>
            <span className="text-blue-600 font-bold shrink-0">{i + 1}.</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900">
                <AnswerLabel q={q} />
              </p>
              {trigIdentityExplanations[q.id] && <div className="mt-1">{trigIdentityExplanations[q.id]}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TrigIdentityAnswers() {
  return (
    <section className="mb-8 print-answers">
      <PageBreak label="答案与解析" />
      <h2 className="text-xl font-bold text-gray-900 mb-4">📝 5.2 三角恒等变换 — 答案与解析</h2>
      <AnswerSection title="一、和差公式" questions={sumDiffPractice} />
      <AnswerSection title="二、二倍角公式" questions={doubleAnglePractice} />
      <AnswerSection title="三、降幂公式" questions={powerReductionPractice} />
      <AnswerSection title="四、半角公式" questions={halfAnglePractice} />
      <AnswerSection title="五、辅助角公式" questions={auxiliaryPractice} />
      <AnswerSection title="六、综合应用" questions={comprehensivePractice} />
    </section>
  );
}
