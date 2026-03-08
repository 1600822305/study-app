import { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { ChevronRight, RotateCcw, Trophy, Clock, Target, CheckCircle, XCircle, Send } from 'lucide-react';

import { Math as MathTex } from './Math';
import { QuizDiagrams } from './QuizDiagrams';
import { useQuiz } from '@/hooks/useQuiz';
import { usePrintMode } from '@/hooks/usePrintMode';
import { storage } from '@/lib/storage';

import type { QuizQuestionData } from '@/types';

// ── Helpers ──

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function checkBlankAnswer(input: string, q: QuizQuestionData): boolean {
  const trimmed = input.trim();
  if (!trimmed) return false;
  const allValid = [q.correctAnswer, ...(q.acceptableAnswers ?? [])];
  return allValid.some((a) => a.trim() === trimmed);
}

// ── Types ──

interface QuizPanelProps {
  module: string;
  questions: QuizQuestionData[];
  title?: string;
  description?: string;
  /** 是否打乱题目顺序，默认 true */
  shuffle?: boolean;
}

interface AnswerRecord {
  questionId: string;
  selected: string;
  correct: boolean;
}

interface QuizSession {
  currentIdx: number;
  answers: AnswerRecord[];
  selected: string | null;
  blankInput: string;
  answered: boolean;
  finished: boolean;
  startTime: number;
  elapsed: number;
  /** 打乱后的题目 ID 顺序 */
  order: string[];
}

// ── Component ──

export function QuizPanel({ module, questions, title = '自测', description, shuffle = true }: QuizPanelProps) {
  const { isPrinting } = usePrintMode();
  const { recordAnswer } = useQuiz(module);

  const [order, setOrder] = useState<string[]>(() =>
    shuffle ? shuffleArray(questions.map((q) => q.id)) : questions.map((q) => q.id),
  );
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [blankInput, setBlankInput] = useState('');
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);
  const [startTime, setStartTime] = useState(() => Date.now());
  const [elapsed, setElapsed] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval>>(undefined);
  const restoredRef = useRef(false);

  const sessionKey = `quiz:${module}:session`;

  // Build a lookup map for O(1) access
  const questionMap = useMemo(() => {
    const map = new Map<string, QuizQuestionData>();
    for (const q of questions) map.set(q.id, q);
    return map;
  }, [questions]);

  // Restore session from IndexedDB on mount
  useEffect(() => {
    storage.ui.getJSON<QuizSession | null>(sessionKey, null).then((saved) => {
      if (saved && saved.answers.length > 0) {
        if (saved.order?.length === questions.length) setOrder(saved.order);
        setCurrentIdx(saved.currentIdx);
        setAnswers(saved.answers);
        setSelected(saved.selected);
        setBlankInput(saved.blankInput ?? '');
        setAnswered(saved.answered);
        setFinished(saved.finished);
        setStartTime(saved.finished ? saved.startTime : Date.now() - saved.elapsed * 1000);
        setElapsed(saved.elapsed);
      }
      restoredRef.current = true;
    });
  }, [sessionKey, questions.length]);

  // Persist session to IndexedDB on state changes
  useEffect(() => {
    if (!restoredRef.current) return;
    const session: QuizSession = { currentIdx, answers, selected, blankInput, answered, finished, startTime, elapsed, order };
    storage.ui.setJSON(sessionKey, session);
  }, [currentIdx, answers, selected, blankInput, answered, finished, elapsed, sessionKey, startTime, order]);

  const currentId = order[currentIdx];
  const current = currentId ? questionMap.get(currentId) : undefined;
  const total = order.length;
  const correctCount = answers.filter((a) => a.correct).length;
  const isBlank = current?.type === 'blank';

  // Timer
  useEffect(() => {
    if (finished) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [finished, startTime]);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  // Handle choice selection
  const handleSelect = useCallback(
    (value: string) => {
      if (answered || !current) return;
      setSelected(value);
      setAnswered(true);
      const isCorrect = value === current.correctAnswer;
      const record: AnswerRecord = { questionId: current.id, selected: value, correct: isCorrect };
      setAnswers((prev) => [...prev, record]);
      recordAnswer(current.id, value, current.correctAnswer, isCorrect);
    },
    [answered, current, recordAnswer],
  );

  // Handle blank submission
  const handleBlankSubmit = useCallback(() => {
    if (answered || !current) return;
    const trimmed = blankInput.trim();
    if (!trimmed) return;
    const isCorrect = checkBlankAnswer(trimmed, current);
    setAnswered(true);
    const record: AnswerRecord = { questionId: current.id, selected: trimmed, correct: isCorrect };
    setAnswers((prev) => [...prev, record]);
    recordAnswer(current.id, trimmed, current.correctAnswer, isCorrect);
  }, [answered, current, blankInput, recordAnswer]);

  // ── 打印模式：静态展示全部题目 ──
  if (isPrinting) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-2 my-2">
        <p className="font-bold text-gray-800 text-sm mb-1">{title}</p>
        {description && <p className="text-xs text-gray-400 mb-1">{description}</p>}
        <div className="space-y-1.5">
          {questions.map((q, idx) => (
            <div key={q.id} className="bg-gray-50 rounded border border-gray-200 px-2.5 py-1.5" style={{ breakInside: 'avoid' }}>
              <p className="text-gray-900 font-bold text-sm leading-5">
                <span className="text-blue-700 mr-1 font-extrabold">{idx + 1}.</span>
                {q.questionLatex ? <MathTex tex={q.questionLatex} /> : q.question}
              </p>

              {/* 选择题选项 */}
              {q.type !== 'blank' && q.options && (
                <div className="flex flex-wrap gap-x-4 gap-y-0 ml-4 text-sm">
                  {q.options.map((opt) => (
                    <div key={opt.value} className="flex items-center gap-1 text-gray-800 font-medium">
                      <span className="w-3.5 h-3.5 rounded-full border border-gray-300 flex items-center justify-center font-bold text-gray-500 shrink-0" style={{ fontSize: '9px' }}>
                        {opt.label}
                      </span>
                      <span>{opt.isLatex ? <MathTex tex={opt.value} /> : opt.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* 填空题：留出答题线 */}
              {q.type === 'blank' && (
                <div className="ml-4 mt-1">
                  <span className="text-gray-400">答：</span>
                  <span className="inline-block w-40 border-b-2 border-gray-300 ml-1">&nbsp;</span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    );
  }

  const handleNext = () => {
    if (currentIdx < total - 1) {
      setCurrentIdx((i) => i + 1);
      setSelected(null);
      setBlankInput('');
      setAnswered(false);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setOrder(shuffle ? shuffleArray(questions.map((q) => q.id)) : questions.map((q) => q.id));
    setCurrentIdx(0);
    setAnswers([]);
    setSelected(null);
    setBlankInput('');
    setAnswered(false);
    setFinished(false);
    setStartTime(Date.now());
    setElapsed(0);
    storage.ui.remove(sessionKey);
  };

  const isCorrect = current
    ? isBlank
      ? checkBlankAnswer(blankInput, current)
      : selected === current.correctAnswer
    : false;

  // ── Completion Summary ──
  if (finished) {
    const accuracy = total > 0 ? Math.round((correctCount / total) * 100) : 0;
    const wrongAnswers = answers.filter((a) => !a.correct);

    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
            <Trophy className="text-white" size={28} />
          </div>
          <h3 className="text-xl font-bold text-gray-900">{title}完成！</h3>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-green-50 rounded-xl p-3 text-center">
            <Target size={20} className="mx-auto mb-1 text-green-600" />
            <p className="text-2xl font-bold text-green-700">{accuracy}%</p>
            <p className="text-xs text-green-600">正确率</p>
          </div>
          <div className="bg-blue-50 rounded-xl p-3 text-center">
            <CheckCircle size={20} className="mx-auto mb-1 text-blue-600" />
            <p className="text-2xl font-bold text-blue-700">
              {correctCount}/{total}
            </p>
            <p className="text-xs text-blue-600">答对</p>
          </div>
          <div className="bg-purple-50 rounded-xl p-3 text-center">
            <Clock size={20} className="mx-auto mb-1 text-purple-600" />
            <p className="text-2xl font-bold text-purple-700">{formatTime(elapsed)}</p>
            <p className="text-xs text-purple-600">用时</p>
          </div>
        </div>

        {/* Wrong answers review */}
        {wrongAnswers.length > 0 && (
          <div className="mb-6">
            <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <XCircle size={16} className="text-red-500" />
              错题回顾（{wrongAnswers.length}题）
            </h4>
            <div className="space-y-3">
              {wrongAnswers.map((wa) => {
                const q = questionMap.get(wa.questionId)!;
                const qIsBlank = q.type === 'blank';
                const userOpt = qIsBlank ? null : q.options?.find((o) => o.value === wa.selected);
                const correctOpt = qIsBlank ? null : q.options?.find((o) => o.value === q.correctAnswer);
                return (
                  <div key={wa.questionId} className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <p className="text-sm font-medium text-gray-800 mb-1">
                      {q.questionLatex ? <MathTex tex={q.questionLatex} /> : q.question}
                    </p>
                    {qIsBlank ? (
                      <>
                        <p className="text-xs text-red-600">你填了：{wa.selected}</p>
                        <p className="text-xs text-green-700">正确答案：{q.correctAnswer}</p>
                      </>
                    ) : (
                      <>
                        <p className="text-xs text-red-600">
                          你选了：{userOpt?.label}.{' '}
                          {userOpt?.isLatex ? <MathTex tex={wa.selected} /> : wa.selected}
                        </p>
                        <p className="text-xs text-green-700">
                          正确答案：{correctOpt?.label}.{' '}
                          {correctOpt?.isLatex ? <MathTex tex={q.correctAnswer} /> : q.correctAnswer}
                        </p>
                      </>
                    )}
                    {q.explanation && (
                      <p className="text-xs text-gray-600 mt-1">
                        {q.explanation}
                        {q.explanationLatex && (
                          <span className="block mt-1">
                            <MathTex tex={q.explanationLatex} />
                          </span>
                        )}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {accuracy === 100 && (
          <p className="text-center text-green-600 font-medium mb-4">
            🎉 全部正确！
          </p>
        )}

        <button
          onClick={handleRestart}
          className="w-full py-3 rounded-xl bg-blue-500 text-white font-bold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
        >
          <RotateCcw size={16} />
          重新测试
        </button>
      </div>
    );
  }

  if (!current) return null;

  // ── Question View ──
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Progress bar + info */}
      <div className="px-5 pt-4 pb-2">
        <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
          <span className="font-medium">
            {currentIdx + 1} / {total}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {formatTime(elapsed)}
          </span>
        </div>
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-500"
            style={{ width: `${((currentIdx + (answered ? 1 : 0)) / total) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="px-5 py-4">
        {description && currentIdx === 0 && !answered && (
          <p className="text-xs text-gray-400 mb-3">{description}</p>
        )}

        <p className="text-gray-800 font-medium mb-4">
          {current.questionLatex ? (
            <MathTex tex={current.questionLatex} />
          ) : current.question ? (
            current.question
          ) : (
            <span className="text-gray-400">（题目加载中…）</span>
          )}
        </p>

        {/* Choice options */}
        {!isBlank && current.options && (
          <div className="space-y-2">
            {current.options.map((opt) => {
              let borderColor = 'border-gray-200 hover:border-blue-400';
              let bgColor = 'bg-white hover:bg-blue-50';
              let textColor = 'text-gray-700';

              if (answered) {
                if (opt.value === current.correctAnswer) {
                  borderColor = 'border-green-500';
                  bgColor = 'bg-green-50';
                  textColor = 'text-green-800';
                } else if (opt.value === selected && !isCorrect) {
                  borderColor = 'border-red-400';
                  bgColor = 'bg-red-50';
                  textColor = 'text-red-700';
                } else {
                  borderColor = 'border-gray-100';
                  bgColor = 'bg-gray-50 opacity-50';
                }
              }

              return (
                <button
                  key={opt.value}
                  onClick={() => handleSelect(opt.value)}
                  className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all duration-200 cursor-pointer flex items-center gap-3 ${borderColor} ${bgColor}`}
                  disabled={answered}
                >
                  <span className="w-7 h-7 rounded-full border-2 border-gray-300 flex items-center justify-center text-sm font-bold text-gray-500 shrink-0">
                    {opt.label}
                  </span>
                  <span className={textColor}>
                    {opt.isLatex ? <MathTex tex={opt.value} /> : opt.value}
                  </span>
                  {answered && opt.value === current.correctAnswer && (
                    <CheckCircle className="ml-auto text-green-500 shrink-0" size={18} />
                  )}
                  {answered && opt.value === selected && !isCorrect && opt.value !== current.correctAnswer && (
                    <XCircle className="ml-auto text-red-500 shrink-0" size={18} />
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Blank input */}
        {isBlank && !answered && (
          <div className="flex gap-2">
            <input
              type="text"
              value={blankInput}
              onChange={(e) => setBlankInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleBlankSubmit()}
              placeholder="输入答案…"
              className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-400"
            />
            <button
              onClick={handleBlankSubmit}
              className="px-5 py-3 bg-blue-500 text-white rounded-xl font-bold hover:bg-blue-600 transition-colors flex items-center gap-2"
            >
              <Send size={16} /> 提交
            </button>
          </div>
        )}

        {/* Feedback + explanation */}
        {answered && (
          <div
            className={`mt-4 p-4 rounded-xl ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-amber-50 border border-amber-200'}`}
          >
            <p className={`font-bold text-sm mb-1 ${isCorrect ? 'text-green-700' : 'text-amber-700'}`}>
              {isCorrect ? '✓ 正确！' : `✗ 错了　正确答案：${current.correctAnswer}`}
            </p>
            {current.explanation && (
              <p className="text-gray-700 text-sm">
                {current.explanation}
                {current.explanationLatex && (
                  <span className="block mt-1">
                    <MathTex tex={current.explanationLatex} display />
                  </span>
                )}
                <QuizDiagrams name={current.explanationDiagram} />
              </p>
            )}
          </div>
        )}

        {/* Next button */}
        {answered && (
          <button
            onClick={handleNext}
            className="w-full mt-4 py-3 rounded-xl bg-blue-500 text-white font-bold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
          >
            {currentIdx < total - 1 ? (
              <>
                下一题 <ChevronRight size={16} />
              </>
            ) : (
              '查看结果'
            )}
          </button>
        )}
      </div>
    </div>
  );
}
