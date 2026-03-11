import { Math as MathTex } from './Math';
import { QuizDiagrams } from './QuizDiagrams';
import { usePrintMode } from '@/hooks/usePrintMode';

import type { QuizQuestionData } from '@/types';

// ── Types ──

/** 解答题数据 */
export interface EssayQuestion {
  id: string;
  /** 题干（LaTeX） */
  questionLatex: string;
  /** 分值 */
  score: number;
  /** 答题区行数（默认 8） */
  lines?: number;
  /** 是否在此题前分页 */
  pageBreak?: boolean;
  /** 完整解答（LaTeX）。字符串=单列，数组=左右分栏 */
  answerLatex?: string | string[];
  /** 题目配图（QuizDiagrams key） */
  questionDiagram?: string;
}

/** 选择/填空题节 */
interface ChoiceSection {
  variant?: 'choice';
  title: string;
  instruction?: string;
  scorePerQuestion: number;
  questions: QuizQuestionData[];
  /** 是否在此节前分页 */
  pageBreak?: boolean;
}

/** 解答题节 */
interface EssaySection {
  variant: 'essay';
  title: string;
  instruction?: string;
  questions: EssayQuestion[];
  /** 是否在此节前分页 */
  pageBreak?: boolean;
}

export type ExamSection = ChoiceSection | EssaySection;

interface ExamPaperProps {
  /** 试卷标题，如 "第一阶段测试卷：数学语言" */
  title: string;
  /** 副标题，如 "（复数 · 集合 · 逻辑用语）" */
  subtitle?: string;
  /** 考试时间（分钟） */
  timeLimit?: number;
  /** 总分（自动计算如未提供） */
  totalScore?: number;
  /** 试卷分节 */
  sections: ExamSection[];
  /** 选择题答案是否附带详细解析（默认 false，只显示答案字母） */
  showChoiceExplanations?: boolean;
  /** 答案页在哪些题号前分页（全局题号，如 [20] 表示第 20 题前分页） */
  answerPageBreaks?: number[];
}

// ── Helpers ──

function toChineseNumeral(n: number): string {
  const d = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
  if (n <= 10) return d[n];
  if (n < 20) return '十' + d[n - 10];
  return d[Math.floor(n / 10)] + '十' + d[n % 10];
}

// ── Component ──

export function ExamPaper({ title, subtitle, timeLimit = 45, totalScore, sections, showChoiceExplanations = false, answerPageBreaks = [] }: ExamPaperProps) {
  const { isPrinting } = usePrintMode();

  // 自动计算总分
  const computedTotal =
    totalScore ??
    sections.reduce((sum, sec) => {
      if (sec.variant === 'essay') {
        return sum + sec.questions.reduce((s, q) => s + q.score, 0);
      }
      return sum + sec.questions.length * sec.scorePerQuestion;
    }, 0);

  // 预计算每节起始偏移量（用于全局题号）
  const sectionStarts = sections.reduce<number[]>((acc, _sec, i) => {
    acc.push(i === 0 ? 0 : acc[i - 1] + sections[i - 1].questions.length);
    return acc;
  }, []);

  // 非打印模式不渲染
  if (!isPrinting) return null;

  return (
    <div className="exam-paper font-serif">
      {/* ═══════ 试卷头 ═══════ */}
      <div className="border-b-[3px] border-double border-black pb-3 mb-4">
        <h1 className="text-center text-2xl font-black tracking-widest mb-1">{title}</h1>
        {subtitle && (
          <p className="text-center text-gray-600 text-sm">{subtitle}</p>
        )}
        <div className="flex justify-center gap-8 mt-2 text-sm text-gray-700">
          <span>考试时间：{timeLimit} 分钟</span>
          <span>满分：{computedTotal} 分</span>
        </div>

      </div>

      {/* ═══════ 各大题 ═══════ */}
      {sections.map((section, sIdx) => {
        const isEssay = section.variant === 'essay';

        // 计算节总分和默认说明
        let sectionTotal: number;
        let defaultInstruction: string;
        if (isEssay) {
          sectionTotal = section.questions.reduce((s, q) => s + q.score, 0);
          defaultInstruction = `本大题共 ${section.questions.length} 小题，共 ${sectionTotal} 分`;
        } else {
          sectionTotal = section.questions.length * section.scorePerQuestion;
          defaultInstruction = `本大题共 ${section.questions.length} 小题，每小题 ${section.scorePerQuestion} 分，共 ${sectionTotal} 分`;
        }

        return (
          <div key={sIdx} className="mb-4" style={section.pageBreak ? { breakBefore: 'page' } : undefined}>
            {/* 大题标题 */}
            <div className="flex items-baseline gap-2 mb-2 font-bold text-lg border-b border-gray-200 pb-1">
              <span>{toChineseNumeral(sIdx + 1)}、{section.title}</span>
              <span className="text-sm font-normal text-gray-500">
                （{section.instruction ?? defaultInstruction}）
              </span>
            </div>

            {/* 选择/填空题 */}
            {!isEssay && (
              <div className="space-y-2">
                {section.questions.map((q, qi) => {
                  const num = sectionStarts[sIdx] + qi + 1;
                  const isBlank = q.type === 'blank';

                  return (
                    <div key={q.id} style={{ breakInside: 'avoid' }}>
                      {q.questionDiagram && <QuizDiagrams name={q.questionDiagram} />}
                      <p className="text-base leading-8">
                        <span className="font-bold mr-1">{num}.</span>
                        {q.questionLatex ? <MathTex tex={q.questionLatex} /> : q.question}
                        <span className="text-gray-400 ml-2 text-sm">（{section.scorePerQuestion}分）</span>
                      </p>
                      {!isBlank && q.options && (
                        <div className={`grid ${q.options!.every(o => o.value.length <= 15) ? 'grid-cols-4 gap-x-4' : 'grid-cols-2 gap-x-8'} gap-y-1 ml-6 mt-1 text-base leading-7`}>
                          {q.options.map((opt) => (
                            <div key={opt.value} className="flex items-start gap-1.5">
                              <span className="font-bold text-gray-700 shrink-0 w-4">{opt.label}.</span>
                              <span>{opt.isLatex ? <MathTex tex={opt.value} /> : opt.value}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      {isBlank && (
                        <div className="ml-6 mt-1">
                          <span>答：</span>
                          <span className="inline-block w-48 border-b-2 border-gray-400 ml-1">&nbsp;</span>
                        </div>
                      )}
                      <div style={{ clear: 'both' }} />
                    </div>
                  );
                })}
              </div>
            )}

            {/* 解答题 */}
            {isEssay && (
              <div className="space-y-6">
                {section.questions.map((q, qi) => {
                  const num = sectionStarts[sIdx] + qi + 1;
                  const lineCount = q.lines ?? 8;

                  return (
                    <div key={q.id} style={q.pageBreak ? { breakBefore: 'page' } : undefined}>
                      {q.questionDiagram && <QuizDiagrams name={q.questionDiagram} />}
                      <p className="text-base leading-8">
                        <span className="font-bold mr-1">{num}.</span>
                        <MathTex tex={q.questionLatex} />
                        <span className="text-gray-400 ml-2 text-sm">（{q.score}分）</span>
                      </p>
                      {/* 答题空白区 */}
                      <div style={{ height: `${lineCount * 1.5}rem`, clear: 'both' }} />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}

      {/* ═══════ 试卷尾 ═══════ */}
      <div className="border-t-[3px] border-double border-black mt-6 pt-2 text-center text-sm text-gray-400">
        — 试卷结束 —
      </div>

      {/* ═══════ 答案与解析 ═══════ */}
      <div style={{ breakBefore: 'page' }}>
        <div className="border-b-[3px] border-double border-black pb-3 mb-4">
          <h1 className="text-center text-2xl font-black tracking-widest">{title}</h1>
          <p className="text-center text-lg font-bold mt-1">答案与解析</p>
        </div>

        {sections.map((section, sIdx) => {
          const isEssay = section.variant === 'essay';
          const base = sectionStarts[sIdx];

          return (
            <div key={`ans-${sIdx}`} className="mb-3">
              <p className="font-bold text-lg mb-1">
                {toChineseNumeral(sIdx + 1)}、{section.title}
              </p>

              {/* 选择/填空题答案 + 解析 */}
              {!isEssay && (() => {
                const cols = showChoiceExplanations ? 2 : 4;
                const items = section.questions.map((q, qi) => ({ q, num: base + qi + 1 }));
                const rows: typeof items[] = [];
                for (let i = 0; i < items.length; i += cols) {
                  rows.push(items.slice(i, i + cols));
                }
                return (
                  <div>
                    {rows.map((row, ri) => {
                      const needBreak = row.some(item => answerPageBreaks.includes(item.num));
                      return (
                        <div
                          key={ri}
                          className={`flex ${showChoiceExplanations ? 'gap-x-6' : 'gap-x-4 text-base'}`}
                          style={{
                            ...(needBreak ? { breakBefore: 'page' } : {}),
                            breakInside: 'avoid',
                          }}
                        >
                          {row.map(({ q, num }) => {
                            const ansLabel = q.options?.find((opt) => opt.value === q.correctAnswer)?.label;
                            const hasExplanation = showChoiceExplanations && (q.explanationLatex || q.explanation);
                            return (
                              <div key={q.id} style={{ flex: `1 1 ${100 / cols}%`, minWidth: 0 }}>
                                <p className="text-base">
                                  <span className="font-bold mr-1">{num}.</span>
                                  <span className="font-bold text-blue-700">
                                    {q.type === 'blank' ? q.correctAnswer : ansLabel ?? q.correctAnswer}
                                  </span>
                                </p>
                                {hasExplanation && (
                                  <div className="ml-4 text-gray-700 leading-6">
                                    {q.explanationLatex && <MathTex tex={q.explanationLatex} />}
                                    {q.explanation && !q.explanationLatex && <p>{q.explanation}</p>}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                );
              })()}

              {/* 解答题完整解析 */}
              {isEssay && (
                <div className="space-y-2">
                  {section.questions.map((q, qi) => {
                    const num = base + qi + 1;
                    const needBreak = answerPageBreaks.includes(num);
                    return (
                      <div key={q.id} style={needBreak ? { breakBefore: 'page' } : undefined}>
                        <p className="font-bold mb-1">{num}. 解：</p>
                        {q.answerLatex && (
                          Array.isArray(q.answerLatex) ? (
                            <div className="grid grid-cols-2 gap-x-6 ml-4 leading-7 items-start">
                              {q.answerLatex.map((part, i) => (
                                <div key={i}><MathTex tex={part} /></div>
                              ))}
                            </div>
                          ) : (
                            <div className="ml-4 leading-7">
                              <MathTex tex={q.answerLatex} />
                            </div>
                          )
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
