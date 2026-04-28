import { Math, Collapsible, PageHeader, LessonLayout, ExportButton, PageBreak } from '@/components/shared';
import { elemPrereqProgressItems } from './data/3.1.8/3.1.8-elem-prereq-progress';
import { useProgress, usePrintMode } from '@/hooks';
import { ElementaryFuncPrereqAnswers } from './3.1.8-elem-prereq-answers';

export function ElementaryFuncPrereqPage() {
  const { items: progressItems, toggle: toggleProgress } = useProgress('elem-func-prereq', elemPrereqProgressItems);
  const { isPrinting, printOptions } = usePrintMode();

  return (
    <div>
      <PageHeader
        stage="前置准备"
        variant="prereq"
        title="3.1.8 基本初等函数前置知识"
        subtitle="指数·对数·幂的运算基础 — 学指数函数和对数函数之前必须搞定"
        tags={[
          { label: '约40-60分钟', color: 'amber' },
          { label: '高中新概念', color: 'blue' },
        ]}
      />

      <div className="flex justify-end mb-2 print:hidden">
        <ExportButton title="3.1.8 基本初等函数前置知识" />
      </div>

      <LessonLayout progressItems={progressItems} onToggle={toggleProgress}>
        <div className="[&_.rounded-xl]:mb-0 [&_.rounded-xl>.flex.items-center]:py-1 [&_.rounded-xl>div:last-child]:px-0 [&_.rounded-xl>div:last-child]:pt-0 [&_.rounded-xl>div:last-child]:pb-0">

          {/* ═══════════════════════════════════════════════════════ */}
          {/* Section 1: 指数运算法则 */}
          {/* ═══════════════════════════════════════════════════════ */}
          <section id="ep-exponent" className="mb-0 scroll-mt-4">
            <Collapsible title="一、指数运算法则" defaultOpen storageKey="elem-prereq:exponent">
              <div className="space-y-0 text-[0.9rem] text-gray-800">

                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">从初中指数说起</div>
                  <div className="px-3 py-0.5">
                    <p>你已经认识了指数：<Math tex="2^3 = 2 \times 2 \times 2 = 8" />。其中 <strong>2</strong> 叫底数，<strong>3</strong> 叫指数，<strong>8</strong> 叫幂。指数就是"连乘几次"。</p>
                    <p className="mt-0.5">高中要把这个运算推广到<strong>零指数、负指数、分数指数</strong>，还要学它的逆运算——<strong>对数</strong>。本节把这些基础一次打通。</p>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">五大运算法则</div>
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-2 py-1 text-center">法则</th>
                        <th className="border border-gray-300 px-2 py-1 text-center">公式</th>
                        <th className="border border-gray-300 px-2 py-1 text-center">口诀</th>
                        <th className="border border-gray-300 px-2 py-1 text-center">例子</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-2 py-1 font-bold text-center">同底相乘</td>
                        <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="a^m \cdot a^n = a^{m+n}" /></td>
                        <td className="border border-gray-300 px-2 py-1 text-center">底不变，指数相加</td>
                        <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="2^3 \cdot 2^4 = 2^7" /></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-1 font-bold text-center">同底相除</td>
                        <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="\dfrac{a^m}{a^n} = a^{m-n}" /></td>
                        <td className="border border-gray-300 px-2 py-1 text-center">底不变，指数相减</td>
                        <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="\dfrac{3^5}{3^2} = 3^3" /></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-1 font-bold text-center">幂的幂</td>
                        <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="(a^m)^n = a^{mn}" /></td>
                        <td className="border border-gray-300 px-2 py-1 text-center">底不变，指数相乘</td>
                        <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="(5^2)^3 = 5^6" /></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-1 font-bold text-center">积的幂</td>
                        <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="(ab)^n = a^n b^n" /></td>
                        <td className="border border-gray-300 px-2 py-1 text-center">积的幂等于幂的积</td>
                        <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="(2x)^3 = 8x^3" /></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-1 font-bold text-center">商的幂</td>
                        <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="\left(\dfrac{a}{b}\right)^n = \dfrac{a^n}{b^n}" /></td>
                        <td className="border border-gray-300 px-2 py-1 text-center">商的幂等于幂的商</td>
                        <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="\left(\dfrac{3}{2}\right)^2 = \dfrac{9}{4}" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">零指数幂与负指数幂</div>
                  <div className="grid grid-cols-[1fr_auto_1fr]">
                    <div className="px-3 py-0.5 space-y-0">
                      <p><strong>零指数幂：</strong><Math tex="a^0 = 1" />（<Math tex="a \neq 0" />）</p>
                      <p>任何不为零的数的 0 次方都等于 <strong>1</strong>。</p>
                      <p className="border-t border-gray-200 pt-0.5"><strong>为什么？</strong>当 <Math tex="a \neq 0" /> 时，<Math tex="\dfrac{a^n}{a^n} = 1" />；同时根据同底相除法则，<Math tex="\dfrac{a^n}{a^n} = a^{n-n} = a^0" />，所以 <Math tex="a^0 = 1" /></p>
                    </div>
                    <div className="w-px bg-gray-300"></div>
                    <div className="px-3 py-0.5 space-y-0">
                      <p><strong>负指数幂：</strong><Math tex="a^{-n} = \dfrac{1}{a^n}" />（<Math tex="a \neq 0" />）</p>
                      <p>负指数就是<strong>取倒数</strong>。</p>
                      <p className="border-t border-gray-200 pt-0.5">例1：<Math tex="2^{-3} = \dfrac{1}{2^3} = \dfrac{1}{8}" />　　例2：<Math tex="\left(\dfrac{1}{3}\right)^{-2} = 3^2 = 9" />，即底数取倒数、指数变正</p>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-0.5 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例. 化简 <Math tex="\dfrac{(2a^3)^2 \cdot a^{-1}}{a^5}" /></div>
                  <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                    <p><strong>思路：</strong>按"积的幂、幂的幂、同底相乘、同底相除"的顺序，一步步拆。</p>
                  </div>
                  <div className="grid grid-cols-[45fr_auto_55fr]">
                    <div className="px-3 py-0.5 space-y-0">
                      <p><strong>第一步：积的幂</strong></p>
                      <p><Math tex="(2a^3)^2 = 2^2 \cdot (a^3)^2 = 4 \cdot (a^3)^2" /></p>
                      <p className="border-t border-gray-200 pt-0.5"><strong>第二步：幂的幂</strong></p>
                      <p><Math tex="(a^3)^2 = a^{3 \times 2} = a^6" />，所以分子第一项等于 <Math tex="4a^6" /></p>
                    </div>
                    <div className="w-px bg-gray-300"></div>
                    <div className="px-3 py-0.5 space-y-0">
                      <p><strong>第三步：同底相乘</strong></p>
                      <p><Math tex="4a^6 \cdot a^{-1} = 4a^{6+(-1)} = 4a^5" />（底不变指数相加，含负指数）</p>
                      <p className="border-t border-gray-200 pt-0.5"><strong>第四步：同底相除</strong></p>
                      <p><Math tex="\dfrac{4a^5}{a^5} = 4 \cdot a^{5-5} = 4 \cdot a^0 = 4 \times 1 = 4" /></p>
                    </div>
                  </div>
                  <div className="px-3 py-0.5 border-t border-gray-300 font-bold">结论：原式 = 4</div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-3 py-0.5 space-y-0">
                    <p><strong>⚠️ ① 底数不同不能直接套法则：</strong><Math tex="2^3 \times 3^4" /> 底数是 2 和 3，无法统一，只能分别算 <Math tex="8 \times 81 = 648" />。</p>
                    <p className="pl-6">但如果是 <Math tex="4^3 \times 2^5" />，因为 <Math tex="4 = 2^2" />，可以统一成 <Math tex="2^6 \times 2^5 = 2^{11}" /></p>
                    <p className="pl-6"><strong>② 零的零次方无意义：</strong><Math tex="0^0" /> 没有定义，只有 <Math tex="a \neq 0" /> 时 <Math tex="a^0 = 1" /></p>
                    <p className="pl-6"><strong>③ 负指数不是负数：</strong><Math tex="2^{-3} = \dfrac{1}{8}" /> 是正数，不是 <Math tex="-8" />　　<strong>④ 积的幂别漏项：</strong><Math tex="(2x)^3 = 2^3 \cdot x^3 = 8x^3" />，不是 <Math tex="2x^3" /></p>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">动手算一算</div>
                  <div className="px-3 py-0.5 grid grid-cols-2 gap-x-4 gap-y-0.5">
                    <p>1. <Math tex="(3a)^2 = " /></p>
                    <p>2. <Math tex="\left(\dfrac{2}{5}\right)^3 = " /></p>
                    <p>3. <Math tex="2^5 \times 2^{-3} = " /></p>
                    <p>4. <Math tex="\dfrac{(a^2)^3}{a^4} = " /></p>
                    <p>5. <Math tex="(-1)^0 + 3^{-1} = " /></p>
                    <p>6. <Math tex="\dfrac{(2a^3)^2 \cdot a^{-2}}{a^4} = " /></p>
                    <p>7. <Math tex="4^3 \times 2^{-2} = " /></p>
                    <p>8. <Math tex="\left(\dfrac{3}{2}\right)^{-1} \times 6^0 = " /></p>
                  </div>
                </div>

              </div>

            </Collapsible>
          </section>

          <PageBreak label="根式与分数指数幂" />
          {/* ═══════════════════════════════════════════════════════ */}
          {/* Section 2: 根式与分数指数幂 */}
          {/* ═══════════════════════════════════════════════════════ */}
          <section id="ep-radical" className="mb-0 scroll-mt-4">
            <Collapsible title="二、根式与分数指数幂" defaultOpen storageKey="elem-prereq:radical">
              <div className="space-y-0 text-[0.9rem] text-gray-800">

                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">从初中根号说起</div>
                  <div className="px-3 py-0.5">
                    <p><Math tex="\sqrt{9} = 3" />，因为 <Math tex="3^2 = 9" />。根号就是"乘方的逆运算"——<strong>几的平方等于 9？答案是 3</strong>。</p>
                    <p className="mt-0.5">高中要把这个概念推广到 <strong>n 次方根</strong>，并用<strong>分数指数</strong>把根号统一写进指数运算，这样根号也能套指数法则。</p>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">n 次方根</div>
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-2 py-1 text-center">名称</th>
                        <th className="border border-gray-300 px-2 py-1 text-center">符号</th>
                        <th className="border border-gray-300 px-2 py-1 text-center">含义</th>
                        <th className="border border-gray-300 px-2 py-1 text-center">例子</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-2 py-1 font-bold text-center">平方根</td>
                        <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="\sqrt{a}" /></td>
                        <td className="border border-gray-300 px-2 py-1 text-center">谁的平方等于 <Math tex="a" />？</td>
                        <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="\sqrt{25} = 5" /></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-1 font-bold text-center">立方根</td>
                        <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="\sqrt[3]{a}" /></td>
                        <td className="border border-gray-300 px-2 py-1 text-center">谁的立方等于 <Math tex="a" />？</td>
                        <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="\sqrt[3]{8} = 2" /></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-1 font-bold text-center">n 次方根</td>
                        <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="\sqrt[n]{a}" /></td>
                        <td className="border border-gray-300 px-2 py-1 text-center">谁的 <Math tex="n" /> 次方等于 <Math tex="a" />？</td>
                        <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="\sqrt[4]{16} = 2" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">核心公式：根号 → 分数指数</div>
                  <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                    <p><strong>关键：</strong>把根号全部统一成分数指数，就能用指数运算法则来算。</p>
                  </div>
                  <div className="grid grid-cols-[1fr_auto_1fr]">
                    <div className="px-3 py-0.5 space-y-0 text-center">
                      <p><Math tex="\sqrt[n]{a} = a^{\frac{1}{n}}" /></p>
                      <p className="text-gray-700"><Math tex="n" /> 次方根等于指数变成 <Math tex="\dfrac{1}{n}" />，如 <Math tex="\sqrt[3]{8} = 8^{\frac{1}{3}} = 2" /></p>
                    </div>
                    <div className="w-px bg-gray-300"></div>
                    <div className="px-3 py-0.5 space-y-0 text-center">
                      <p><Math tex="\sqrt[n]{a^m} = a^{\frac{m}{n}}" /></p>
                      <p className="text-gray-700"><Math tex="n" /> 次方根下 <Math tex="a^m" /> 等于指数变成 <Math tex="\dfrac{m}{n}" />，如 <Math tex="\sqrt[3]{8^2} = 8^{\frac{2}{3}} = 4" /></p>
                    </div>
                  </div>
                  <div className="px-3 py-0.5 border-t border-gray-300">
                    <p><strong>分数指数怎么算？</strong><Math tex="a^{\frac{m}{n}}" /> 就是先开 <Math tex="n" /> 次方，再算 <Math tex="m" /> 次幂。如 <Math tex="8^{\frac{2}{3}}" />：先开 3 次方得 2，再平方得 4</p>
                    <p><strong>分数指数之间的运算？</strong>直接套第一节的五大法则。如 <Math tex="a^{\frac{1}{2}} \times a^{\frac{1}{3}} = a^{\frac{1}{2}+\frac{1}{3}} = a^{\frac{5}{6}}" />（同底相乘，指数通分后相加）</p>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-0.5 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">根式 ↔ 分数指数幂 速查</div>
                  <div className="px-3 py-0.5 grid grid-cols-4 gap-x-4 gap-y-0.5">
                    <p><Math tex="\sqrt{a} = a^{\frac{1}{2}}" /></p>
                    <p><Math tex="\sqrt[3]{a} = a^{\frac{1}{3}}" /></p>
                    <p><Math tex="\sqrt{a^3} = a^{\frac{3}{2}}" /></p>
                    <p><Math tex="\sqrt[3]{a^2} = a^{\frac{2}{3}}" /></p>
                    <p><Math tex="\dfrac{1}{\sqrt{a}} = a^{-\frac{1}{2}}" /></p>
                    <p><Math tex="\dfrac{1}{\sqrt[3]{a}} = a^{-\frac{1}{3}}" /></p>
                    <p><Math tex="\sqrt[4]{a^3} = a^{\frac{3}{4}}" /></p>
                    <p><Math tex="\sqrt[6]{a} = a^{\frac{1}{6}}" /></p>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px [&_.katex]:text-[1.1em]">
                  <div className="px-2 py-0.5 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">例. 化简 <Math tex="\dfrac{\sqrt{a^3} \cdot \sqrt[3]{a^2}}{\sqrt[6]{a}}" /></div>
                  <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                    <p><strong>思路：</strong>全部转成分数指数，再用同底相乘、同底相除法则。</p>
                  </div>
                  <div className="grid grid-cols-[45fr_auto_55fr]">
                    <div className="px-3 py-0.5 space-y-0">
                      <p><strong>第一步：全部转成分数指数</strong></p>
                      <p><Math tex="\sqrt{a^3} = a^{\frac{3}{2}}" />，<Math tex="\sqrt[3]{a^2} = a^{\frac{2}{3}}" />，<Math tex="\sqrt[6]{a} = a^{\frac{1}{6}}" /></p>
                    </div>
                    <div className="w-px bg-gray-300"></div>
                    <div className="px-3 py-0.5 space-y-0">
                      <p><strong>第二步：同底相乘（分子）</strong></p>
                      <p><Math tex="a^{\frac{3}{2}} \cdot a^{\frac{2}{3}} = a^{\frac{3}{2}+\frac{2}{3}} = a^{\frac{9}{6}+\frac{4}{6}} = a^{\frac{13}{6}}" /></p>
                    </div>
                  </div>
                  <div className="px-3 py-0.5 border-t border-gray-300">
                    <p><strong>第三步：同底相除（底不变，指数相减），得</strong> <Math tex="\dfrac{a^{\frac{13}{6}}}{a^{\frac{1}{6}}} = a^{\frac{13}{6}-\frac{1}{6}} = a^{\frac{12}{6}} = a^2" />，即原式 <Math tex="= a^2" /></p>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px [&_.katex]:text-[1.1em]">
                  <div className="grid grid-cols-[1fr_auto_1fr]">
                    <div className="px-3 py-0.5 space-y-0">
                      <p><strong>⚠️ ① 偶次根号下非负：</strong><Math tex="\sqrt{a}" /> 要求 <Math tex="a \geqslant 0" />，转成 <Math tex="a^{\frac{1}{2}}" /> 同理</p>
                    </div>
                    <div className="w-px bg-gray-300"></div>
                    <div className="px-3 py-0.5 space-y-0">
                      <p><strong>② 分数指数不是除法：</strong><Math tex="a^{\frac{1}{3}}" /> 是"三次方根"，不是 <Math tex="a \div 3" /></p>
                    </div>
                  </div>
                  <div className="px-3 py-0.5 space-y-0 border-t border-gray-300">
                    <p><strong>③ 负指数 + 分数指数：</strong><Math tex="\dfrac{1}{\sqrt{a}} = a^{-\frac{1}{2}}" />，先取倒数再变指数</p>
                    <p><strong>④ 分子分母别搞反：</strong><Math tex="\sqrt[3]{a^2} = a^{\frac{2}{3}}" />，里面的幂做分子、外面的根做分母，不是 <Math tex="a^{\frac{3}{2}}" /></p>
                    <p className="pl-6">推导：设 <Math tex="\sqrt[6]{a^2} = a^x" />，两边 6 次方得 <Math tex="a^2 = a^{6x}" />，所以 <Math tex="2 = 6x" />，解得 <Math tex="x = \tfrac{1}{3}" /></p>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">动手算一算</div>
                  <div className="px-3 py-0.5 grid grid-cols-2 gap-x-4 gap-y-0.5 text-base">
                    <p>1. <Math tex="\sqrt[3]{a^2}" /> 用分数指数幂表示</p>
                    <p>2. <Math tex="27^{\frac{2}{3}} = " /></p>
                    <p>3. <Math tex="\sqrt{a} \cdot \sqrt[3]{a} = " /></p>
                    <p>4. <Math tex="\sqrt{9^3} = " /></p>
                    <p>5. <Math tex="8^{-\frac{2}{3}} = " /></p>
                    <p>6. <Math tex="\sqrt[6]{a^3} = " /></p>
                    <p>7. <Math tex="\dfrac{1}{\sqrt[4]{16}} = " /></p>
                    <p>8. <Math tex="\dfrac{a^{\frac{3}{2}}}{a^{\frac{1}{2}}} = " /></p>
                    <p>9. <Math tex="4^{\frac{3}{2}} = " /></p>
                    <p>10. <Math tex="\sqrt[4]{a^2} = " /></p>
                  </div>
                </div>

              </div>

            </Collapsible>
          </section>

          {/* ═══════════════════════════════════════════════════════ */}
          {/* Section 3: 对数 */}
          {/* ═══════════════════════════════════════════════════════ */}
          <section id="ep-logarithm" className="mb-0 scroll-mt-4">
            <Collapsible title="三、对数 — 指数的逆运算" defaultOpen storageKey="elem-prereq:logarithm">
              <div className="space-y-0 text-[0.9rem] text-gray-800">

                <div className="border border-gray-400 rounded overflow-hidden">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">为什么要发明对数？</div>
                  <div className="px-3 py-0.5">
                    <p><Math tex="2^x = 8" />，<Math tex="x = ?" /> 你一眼看出 <Math tex="x = 3" />。</p>
                    <p>但如果问 <Math tex="2^x = 10" />，<Math tex="x = ?" /> 你就算不出来了。<strong>对数就是专门用来回答"指数是几"的运算。</strong></p>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">对数的定义（必背）</div>
                  <div className="px-3 py-0.5 border-b border-gray-300 bg-blue-50">
                    <p>如果 <Math tex="a^x = N" />，那么 <Math tex="x = \log_a N" />，读作"以 <Math tex="a" /> 为底 <Math tex="N" /> 的对数等于 <Math tex="x" />"</p>
                  </div>
                  <div className="grid grid-cols-[1fr_auto_1fr] items-center">
                    <div className="py-1 text-center">
                      <Math tex="\log_{\underbrace{2}_{\text{底数}}} \underbrace{8}_{\text{真数}} = \underbrace{3}_{\text{对数值}}" />
                    </div>
                    <div className="w-px bg-gray-300 self-stretch"></div>
                    <div className="px-3 py-1">读作：以 2 为底 8 的对数等于 3</div>
                  </div>
                  <div className="px-3 py-0.5 border-t border-gray-300">
                    <p><strong>理解：</strong>乘方和对数是同一件事的两种说法。<Math tex="2^3 = 8" /> 中 8 叫"幂"（运算结果）；反过来问"2 的几次方等于 8？"写成 <Math tex="\log_2 8 = 3" />，同一个 8 改叫"真数"（要求对数的输入）。数字没变，换了运算，名字就跟着变</p>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">指数式 ↔ 对数式 互相转化</div>
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-2 py-1 text-center">指数式</th>
                        <th className="border border-gray-300 px-2 py-1 text-center">对数式</th>
                        <th className="border border-gray-300 px-2 py-1 text-center">理解</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="2^3 = 8" /></td>
                        <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="\log_2 8 = 3" /></td>
                        <td className="border border-gray-300 px-2 py-1 text-center">2 的几次方等于 8？3 次</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="10^2 = 100" /></td>
                        <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="\log_{10} 100 = 2" /></td>
                        <td className="border border-gray-300 px-2 py-1 text-center">10 的几次方等于 100？2 次</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="3^4 = 81" /></td>
                        <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="\log_3 81 = 4" /></td>
                        <td className="border border-gray-300 px-2 py-1 text-center">3 的几次方等于 81？4 次</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="5^0 = 1" /></td>
                        <td className="border border-gray-300 px-2 py-1 text-center"><Math tex="\log_5 1 = 0" /></td>
                        <td className="border border-gray-300 px-2 py-1 text-center">5 的几次方等于 1？0 次</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">两条铁律与两个特殊对数</div>
                  <div className="grid grid-cols-[1fr_auto_1fr]">
                    <div className="px-3 py-0.5 space-y-0">
                      <p><strong>两条铁律</strong></p>
                      <p><Math tex="\log_a 1 = 0" />，因为 <Math tex="a^0 = 1" /></p>
                      <p><Math tex="\log_a a = 1" />，因为 <Math tex="a^1 = a" /></p>
                    </div>
                    <div className="w-px bg-gray-300"></div>
                    <div className="px-3 py-0.5 space-y-0">
                      <p><strong>两个特殊对数</strong></p>
                      <p><Math tex="\lg N = \log_{10} N" />，常用对数（底数为 10）</p>
                      <p><Math tex="\ln N = \log_{e} N" />，自然对数（<Math tex="e \approx 2.718" />）</p>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">对数的限制条件</div>
                  <div className="px-3 py-0.5 space-y-0">
                    <p><strong>底数：</strong><Math tex="a > 0" /> 且 <Math tex="a \neq 1" />，即底数必须是<strong>正数</strong>且<strong>不等于 1</strong></p>
                    <p><strong>真数：</strong><Math tex="N > 0" />，真数必须是<strong>正数</strong>，不能取 0 或负数</p>
                    <p className="border-t border-gray-200 pt-0.5"><strong>为什么？</strong>当 <Math tex="a = 1" /> 时，<Math tex="1^x" /> 不管 <Math tex="x" /> 是多少结果都是 1，无法表示其他数；当 <Math tex="N \leqslant 0" /> 时，找不到实数指数使 <Math tex="a^x = N" /></p>
                    <p className="font-bold">⚠️ 求对数函数定义域时，"真数 &gt; 0" 是最常用的条件。值域为全体实数，无需额外求。</p>
                  </div>
                  <div className="grid grid-cols-[1fr_auto_1fr] border-t border-gray-400 bg-gray-50">
                    <div className="px-3 py-0.5 space-y-0">
                      <p><strong>例. 求 <Math tex="f(x) = \log_2(3x - 6)" /> 的定义域</strong></p>
                      <p>真数 &gt; 0，即 <Math tex="3x - 6 > 0" />，解得 <Math tex="x > 2" /></p>
                      <p>所以定义域为 <Math tex="(2, +\infty)" /></p>
                    </div>
                    <div className="w-px bg-gray-300"></div>
                    <div className="px-3 py-0.5 space-y-0">
                      <p><strong>例. 求 <Math tex="g(x) = \lg(x^2 - 4)" /> 的定义域</strong></p>
                      <p>真数 &gt; 0，即 <Math tex="x^2 - 4 > 0" />，解得 <Math tex="x > 2" /> 或 <Math tex="x < -2" /></p>
                      <p>定义域为 <Math tex="(-\infty, -2) \cup (2, +\infty)" /></p>
                    </div>
                  </div>
                  <div className="px-3 py-0.5 border-t border-gray-300 bg-gray-50">
                    <p><strong>进阶例. 若 <Math tex="\log_{(x-1)}(2x+3)" /> 有意义，求 <Math tex="x" /> 的范围</strong></p>
                    <p>对数成立需同时满足三个条件：底数 &gt; 0，底数 ≠ 1，真数 &gt; 0</p>
                    <p>代入得 <Math tex="x - 1 > 0" />，<Math tex="x - 1 \neq 1" />，<Math tex="2x + 3 > 0" />，解得 <Math tex="x > 1" />，<Math tex="x \neq 2" />，<Math tex="x > -\tfrac{3}{2}" />，取交集得 <Math tex="(1, 2) \cup (2, +\infty)" /></p>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">对数恒等式（必背）</div>
                  <div className="grid grid-cols-[1fr_auto_1fr]">
                    <div className="px-3 py-0.5 space-y-0">
                      <p><Math tex="a^{\log_a N} = N" /></p>
                      <p><strong>含义：</strong><Math tex="a" /> 的"以 <Math tex="a" /> 为底 <Math tex="N" /> 的对数"次方，结果就是 <Math tex="N" /></p>
                      <p className="border-t border-gray-200 pt-0.5">例：<Math tex="2^{\log_2 5} = 5" />，<Math tex="10^{\lg 3} = 3" /></p>
                    </div>
                    <div className="w-px bg-gray-300"></div>
                    <div className="px-3 py-0.5 space-y-0">
                      <p><Math tex="\log_a a^x = x" /></p>
                      <p><strong>含义：</strong>以 <Math tex="a" /> 为底 <Math tex="a^x" /> 的对数，结果就是 <Math tex="x" /></p>
                      <p className="border-t border-gray-200 pt-0.5">例：<Math tex="\log_3 3^4 = 4" />，<Math tex="\ln e^2 = 2" /></p>
                    </div>
                  </div>
                  <div className="px-3 py-0.5 border-t border-gray-300">
                    <p><strong>为什么会消掉？</strong>设 <Math tex="\log_a N = x" />，由对数定义得 <Math tex="a^x = N" />，把 <Math tex="x" /> 代回去：<Math tex="a^{\log_a N} = a^x = N" /></p>
                    <p>反过来，<Math tex="\log_a a^x" /> 就是问"<Math tex="a" /> 的几次方等于 <Math tex="a^x" />"，答案显然是 <Math tex="x" /></p>
                  </div>
                  <div className="grid grid-cols-[1fr_auto_1fr] border-t border-gray-400 bg-gray-50">
                    <div className="px-3 py-0.5 space-y-0">
                      <p><strong>例. 计算 <Math tex="2^{1+\log_2 3}" /></strong></p>
                      <p><Math tex="= 2^1 \times 2^{\log_2 3} = 2 \times 3 = 6" /></p>
                    </div>
                    <div className="w-px bg-gray-300"></div>
                    <div className="px-3 py-0.5 space-y-0">
                      <p><strong>例. 计算 <Math tex="10^{2+\lg 5}" /></strong></p>
                      <p><Math tex="= 10^2 \times 10^{\lg 5} = 100 \times 5 = 500" /></p>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-3 py-0.5 space-y-0">
                    <p><strong>⚠️ ① lg 和 ln：</strong><Math tex="\lg = \log_{10}" />（底数 10 省略不写），<Math tex="\ln = \log_e" />，例如 <Math tex="\ln 6 = \log_e 6" /></p>
                    <p><strong>② 恒等式别记反：</strong><Math tex="a^{\log_a N} = N" />（指数套对数消掉），<Math tex="\log_a a^x = x" />（对数套指数消掉）</p>
                  </div>
                </div>

                <div className="border border-gray-400 rounded overflow-hidden -mt-px">
                  <div className="px-2 py-1 font-bold text-gray-800 border-b border-gray-400 bg-gray-100">动手算一算</div>
                  <div className="px-3 py-0.5 grid grid-cols-3 gap-x-4 gap-y-0.5 text-base">
                    <p>1. <Math tex="2^5 = 32" /> 写成对数式</p>
                    <p>2. <Math tex="\lg 100 = " /></p>
                    <p>3. <Math tex="\log_2 16 = " /></p>
                    <p>4. <Math tex="\ln e^5 = " /></p>
                    <p>5. <Math tex="3^{\log_3 7} = " /></p>
                    <p>6. <Math tex="10^{1+\lg 2} = " /></p>
                    <p>7. <Math tex="\log_9 3 = " /></p>
                    <p>8. <Math tex="\lg 0.01 = " /></p>
                    <p>9. <Math tex="e^{2\ln 3} = " /></p>
                    <p>10. <Math tex="\log_4 8 = " /></p>
                  </div>
                </div>

              </div>

            </Collapsible>
          </section>


          {/* 打印模式答案区 */}
          {isPrinting && printOptions.showAnswers && <ElementaryFuncPrereqAnswers />}

        </div>
      </LessonLayout>
    </div>
  );
}
