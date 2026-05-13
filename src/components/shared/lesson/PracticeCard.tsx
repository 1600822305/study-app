import { useState, useCallback, useMemo, useEffect, useRef, type ReactNode } from 'react';
import { ChevronRight, RotateCcw, CheckCircle, XCircle, Send } from 'lucide-react';

import { Math as MathTex } from '../Math';
import { usePrintMode } from '@/hooks/usePrintMode';
import { storage } from '@/lib/storage';

import type { QuizQuestionData } from '@/types';

// ── Helpers ──

/** 渲染题目文字：questionNode > questionLatex > $...$内联公式解析 > 纯文本 */
function renderQ(q: QuizQuestionData) {
  if (q.questionNode) return q.questionNode;
  if (q.questionLatex) return <MathTex tex={q.questionLatex} />;
  const parts = q.question.split(/\$([^$]+)\$/g);
  if (parts.length === 1) return q.question;
  return <>{parts.map((p, i) => i % 2 === 1 ? <MathTex key={i} tex={p} /> : p)}</>;
}

function checkBlankAnswer(input: string, q: QuizQuestionData): boolean {
  const trimmed = input.trim();
  if (!trimmed) return false;
  const allValid = [q.correctAnswer, ...(q.acceptableAnswers ?? [])];
  return allValid.some((a) => a.trim() === trimmed);
}

// ── Types ──

interface PracticeCardProps {
  title?: string;
  questions: QuizQuestionData[];
  /** 模块标识，提供后开启 IndexedDB 记忆功能 */
  module?: string;
  /** 是否打乱题目顺序，默认 true */
  shuffle?: boolean;
  /** 打印模式下选项列数，默认 1 */
  printOptionCols?: 1 | 2 | 4;
  /** 交互模式下选项列数，默认 1（纵向堆叠） */
  optionCols?: 1 | 2 | 4;
  /** 外部提供的解析内容，key 为题目 id，优先于 explanationLatex */
  explanations?: Record<string, ReactNode>;
  /** 打印模式下隐藏填空题的答题线，默认 false */
  hideBlankLine?: boolean;
  /** 打印模式下题目列数，默认 1 */
  columns?: 1 | 2 | 3;
  /** 自定义打印模式下每道题的渲染，传了就用自定义 UI，不传就用原版 */
  renderItem?: (q: QuizQuestionData, idx: number) => ReactNode;
}

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── Component ──

interface PracticeSession {
  currentIdx: number;
  selected: string | null;
  selectedMulti?: string[];
  answered: boolean;
  results: boolean[];
  finished: boolean;
}

export function PracticeCard({ title = '✏️ 即时练习', questions, module: mod, shuffle = true, printOptionCols = 1, optionCols = 1, explanations, hideBlankLine = false, columns = 1, renderItem }: PracticeCardProps) {
  const { isPrinting } = usePrintMode();
  const sessionKey = mod ? `practice:${mod}:session` : null;
  const restoredRef = useRef(false);

  const [shuffleSeed, setShuffleSeed] = useState(0);
  const activeQuestions = useMemo(
    () => (shuffle ? shuffleArray(questions) : questions),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [shuffleSeed, shuffle],
  );
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [selectedMulti, setSelectedMulti] = useState<string[]>([]);
  const [blankInput, setBlankInput] = useState('');
  const [answered, setAnswered] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);
  const [finished, setFinished] = useState(false);

  // 在挂载时从 IndexedDB 恢复 session
  useEffect(() => {
    if (!sessionKey) { restoredRef.current = true; return; }
    storage.ui.getJSON<PracticeSession | null>(sessionKey, null).then((saved) => {
      if (saved && saved.results.length > 0) {
        setCurrentIdx(saved.currentIdx);
        setSelected(saved.selected);
        if (saved.selectedMulti) setSelectedMulti(saved.selectedMulti);
        setAnswered(saved.answered);
        setResults(saved.results);
        setFinished(saved.finished);
      }
      restoredRef.current = true;
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionKey]);

  // 状态变化时持久化
  useEffect(() => {
    if (!sessionKey || !restoredRef.current) return;
    const session: PracticeSession = { currentIdx, selected, selectedMulti, answered, results, finished };
    storage.ui.setJSON(sessionKey, session);
  }, [sessionKey, currentIdx, selected, selectedMulti, answered, results, finished]);

  const total = activeQuestions.length;
  const current = activeQuestions[currentIdx];
  const isBlank = current?.type === 'blank';
  const correctCount = results.filter(Boolean).length;

  const isMulti = !!current?.multiSelect;
  const correctLabels = isMulti ? current!.correctAnswer.split(',').sort() : [];
  const selectedLabels = isMulti
    ? selectedMulti.map(v => current!.options?.find(o => o.value === v)?.label ?? '').sort()
    : [];

  const isCorrect = current
    ? isBlank
      ? checkBlankAnswer(blankInput, current)
      : isMulti
        ? selectedLabels.join(',') === correctLabels.join(',')
        : selected === current.correctAnswer
    : false;

  const handleSelect = useCallback(
    (value: string) => {
      if (answered || !current) return;
      if (current.multiSelect) {
        setSelectedMulti(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]);
      } else {
        setSelected(value);
        setAnswered(true);
        setResults((prev) => [...prev, value === current.correctAnswer]);
      }
    },
    [answered, current],
  );

  const handleMultiSubmit = useCallback(() => {
    if (answered || !current || !current.multiSelect || selectedMulti.length === 0) return;
    const labels = selectedMulti.map(v => current.options?.find(o => o.value === v)?.label ?? '').sort();
    const correct = current.correctAnswer.split(',').sort();
    setAnswered(true);
    setResults(prev => [...prev, labels.join(',') === correct.join(',')]);
  }, [answered, current, selectedMulti]);

  const handleBlankSubmit = useCallback(() => {
    if (answered || !current) return;
    const trimmed = blankInput.trim();
    if (!trimmed) return;
    setAnswered(true);
    setResults((prev) => [...prev, checkBlankAnswer(trimmed, current)]);
  }, [answered, current, blankInput]);

  // ── 打印模式：静态展示所有题目 ──
  if (isPrinting) {
    return (
      <div className="print-practice bg-green-50 border border-green-200 rounded-xl px-2 py-0 mt-0" style={{ breakInside: 'auto' }}>
        {title && <p className="font-bold text-green-800 mb-1">{title}</p>}
        <div className={columns === 3 ? 'grid grid-cols-3 gap-2' : columns === 2 ? 'grid grid-cols-2 gap-2' : 'space-y-0'}>
          {questions.map((q, idx) => (
            renderItem ? (
            <div key={idx} className={q.fullRow ? (columns === 3 ? 'col-span-3' : columns === 2 ? 'col-span-2' : '') : ''} style={{ breakInside: 'avoid' }}>
              {renderItem(q, idx)}
              {/* 选择题选项 */}
              {q.type !== 'blank' && q.options && (
                <div className={`${
                  q.printCols === 4 ? 'grid grid-cols-4 gap-x-4 gap-y-0.5' :
                  q.printCols === 2 ? 'grid grid-cols-2 gap-1' :
                  printOptionCols === 4 ? 'grid grid-cols-4 gap-x-4 gap-y-0.5' :
                  printOptionCols === 2 ? 'grid grid-cols-2 gap-1' : 'space-y-1'
                } ml-4`}>
                  {q.options.map((opt) => (
                    <div key={opt.value} className="flex items-center gap-2 text-gray-700">
                      <span className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center text-xs font-bold text-gray-500 shrink-0">
                        {opt.label}
                      </span>
                      <span>{opt.isLatex ? <MathTex tex={opt.value} /> : opt.value}</span>
                    </div>
                  ))}
                </div>
              )}
              {/* 填空题：留出答题线 */}
              {q.type === 'blank' && !hideBlankLine && (
                <div className="ml-4 mt-1">
                  <span className="text-gray-400">答：</span>
                  <span className="inline-block w-40 border-b-2 border-gray-300 ml-1">&nbsp;</span>
                </div>
              )}
            </div>
            ) : (
            <div key={idx} className={`bg-white rounded-lg border border-green-100 p-2${q.fullRow ? (columns === 3 ? ' col-span-3' : columns === 2 ? ' col-span-2' : '') : ''}`} style={{ breakInside: 'avoid' }}>
              <p className="text-gray-800 font-medium mb-1">
                <span className="text-green-600 mr-2">{idx + 1}.</span>
                {renderQ(q)}
              </p>

              {/* 选择题选项 */}
              {q.type !== 'blank' && q.options && (
                <div className={`${
                  q.printCols === 4 ? 'grid grid-cols-4 gap-x-4 gap-y-0.5' :
                  q.printCols === 2 ? 'grid grid-cols-2 gap-1' :
                  printOptionCols === 4 ? 'grid grid-cols-4 gap-x-4 gap-y-0.5' :
                  printOptionCols === 2 ? 'grid grid-cols-2 gap-1' : 'space-y-1'
                } ml-4`}>
                  {q.options.map((opt) => (
                    <div key={opt.value} className="flex items-center gap-2 text-gray-700">
                      <span className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center text-xs font-bold text-gray-500 shrink-0">
                        {opt.label}
                      </span>
                      <span>{opt.isLatex ? <MathTex tex={opt.value} /> : opt.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* 填空题：留出答题线 */}
              {q.type === 'blank' && !hideBlankLine && (
                <div className="ml-4 mt-1">
                  <span className="text-gray-400">答：</span>
                  <span className="inline-block w-40 border-b-2 border-gray-300 ml-1">&nbsp;</span>
                </div>
              )}

            </div>
            )
          ))}
        </div>

      </div>
    );
  }

  const handleNext = () => {
    if (currentIdx < total - 1) {
      setCurrentIdx((i) => i + 1);
      setSelected(null);
      setSelectedMulti([]);
      setBlankInput('');
      setAnswered(false);
    } else {
      setFinished(true);
    }
  };

  const handleReset = () => {
    setShuffleSeed((s) => s + 1);
    setCurrentIdx(0);
    setSelected(null);
    setSelectedMulti([]);
    setBlankInput('');
    setAnswered(false);
    setResults([]);
    setFinished(false);
  };

  if (!current) return null;

  // ── 完成总结 ──
  if (finished) {
    return (
      <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 mt-0 shadow-sm">
        {title && <p className="font-bold text-stone-800 mb-3">{title}</p>}
        <div className="bg-stone-100 rounded-lg border border-stone-200 p-4 text-center">
          <p className="text-2xl font-bold text-emerald-600 mb-1">
            {correctCount === total ? '🎉 全部正确！' : `${correctCount}/${total} 题正确`}
          </p>
          <p className="text-sm text-gray-500 mb-3">
            {correctCount === total ? '掌握得很好，继续往下学吧！' : '再试一次加深印象'}
          </p>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-sky-600 text-white rounded-lg text-sm font-bold hover:bg-sky-700 transition-colors inline-flex items-center gap-1"
          >
            <RotateCcw size={14} /> 再做一次
          </button>
        </div>
      </div>
    );
  }

  // ── 单题视图 ──
  return (
    <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 mt-0 shadow-sm">
      {/* 标题 + 进度 */}
      <div className="flex items-center justify-between mb-2">
        {title && <p className="font-bold text-stone-800">{title}</p>}
        <span className="text-xs text-stone-500 font-medium tabular-nums">{currentIdx + 1} / {total}</span>
      </div>

      {/* 进度条 */}
      <div className="w-full h-1 bg-stone-200 rounded-full overflow-hidden mb-3">
        <div
          className="h-full bg-sky-500 rounded-full transition-all duration-500"
          style={{ width: `${((currentIdx + (answered ? 1 : 0)) / total) * 100}%` }}
        />
      </div>

      {/* 题目卡片 */}
      <div className="bg-stone-100 rounded-lg border border-stone-200 p-4">
        {/* 题目文字 */}
        <p className="text-gray-800 font-medium mb-3">
          {renderQ(current)}
        </p>

        {/* 选择题选项 */}
        {!isBlank && current.options && (
          <div className={(() => { const c = current.cols ?? optionCols; return c === 4 ? 'grid grid-cols-4 gap-1.5' : c === 2 ? 'grid grid-cols-2 gap-1.5' : 'space-y-2'; })()}>
            {current.options.map((opt) => {
              const isOptCorrect = isMulti
                ? correctLabels.includes(opt.label)
                : opt.value === current.correctAnswer;
              const isOptSelected = isMulti
                ? selectedMulti.includes(opt.value)
                : opt.value === selected;
              let cls = 'border-stone-200 bg-white text-stone-700 hover:border-sky-400 hover:bg-sky-50';
              if (isMulti && !answered && isOptSelected) {
                cls = 'border-sky-500 bg-sky-50 text-sky-700';
              } else if (answered) {
                if (isOptCorrect) {
                  cls = 'border-emerald-500 bg-emerald-50 text-emerald-700';
                } else if (isOptSelected && !isOptCorrect) {
                  cls = 'border-red-400 bg-red-50 text-red-700';
                } else {
                  cls = 'border-stone-100 bg-white text-stone-400';
                }
              }
              return (
                <button
                  key={opt.value}
                  onClick={() => handleSelect(opt.value)}
                  disabled={answered}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg border-2 transition-all flex items-center gap-2 text-sm ${cls}`}
                >
                  <span className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center text-xs font-bold text-gray-500 shrink-0">
                    {opt.label}
                  </span>
                  <span className="leading-tight">{opt.isLatex ? <MathTex tex={opt.value} /> : opt.value}</span>
                  {answered && isOptCorrect && (
                    <CheckCircle className="ml-auto text-emerald-500 shrink-0" size={14} />
                  )}
                  {answered && isOptSelected && !isOptCorrect && (
                    <XCircle className="ml-auto text-red-500 shrink-0" size={14} />
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* 多选提交按钮 */}
        {isMulti && !answered && selectedMulti.length > 0 && (
          <button
            onClick={handleMultiSubmit}
            className="w-full mt-2 py-2 rounded-lg bg-sky-600 text-white font-bold hover:bg-sky-700 transition-colors flex items-center justify-center gap-1 text-sm"
          >
            <Send size={14} /> 确认提交
          </button>
        )}

        {/* 填空题输入 */}
        {isBlank && !answered && (
          <div className="flex gap-2">
            <input
              type="text"
              value={blankInput}
              onChange={(e) => setBlankInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleBlankSubmit()}
              placeholder="输入答案…"
              className="flex-1 px-4 py-2.5 border-2 border-stone-200 bg-white rounded-lg focus:outline-none focus:border-sky-400"
            />
            <button
              onClick={handleBlankSubmit}
              className="px-4 py-2.5 bg-sky-600 text-white rounded-lg font-bold hover:bg-sky-700 transition-colors flex items-center gap-1"
            >
              <Send size={14} /> 提交
            </button>
          </div>
        )}

        {/* 反馈 */}
        {answered && (
          <div className={`mt-3 p-3 rounded-lg ${isCorrect ? 'bg-emerald-50 border border-emerald-200' : 'bg-red-50 border border-red-200'}`}>
            <p className={`font-bold text-sm mb-1 ${isCorrect ? 'text-emerald-700' : 'text-red-700'}`}>
              {isCorrect ? '✓ 正确！' : <>✗ 错了　正确答案：{isMulti ? current.correctAnswer.split(',').join('、') : (current.options?.find(o => o.value === current.correctAnswer)?.label ?? current.correctAnswer)}</>}
            </p>
            {explanations?.[current.id] ? (
              <div className="mt-1 text-gray-700">{explanations[current.id]}</div>
            ) : (
              <>
                {current.explanation && (
                  <p className="text-gray-600 text-sm">{current.explanation}</p>
                )}
                {current.explanationLatex && (
                  <div className="mt-1">
                    <MathTex tex={current.explanationLatex} display />
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {/* 下一题按钮 */}
        {answered && (
          <button
            onClick={handleNext}
            className="w-full mt-3 py-2.5 rounded-lg bg-sky-600 text-white font-bold hover:bg-sky-700 transition-colors flex items-center justify-center gap-1"
          >
            {currentIdx < total - 1 ? (
              <>下一题 <ChevronRight size={16} /></>
            ) : (
              '查看结果'
            )}
          </button>
        )}
      </div>
    </div>
  );
}
