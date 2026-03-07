import { useState, useCallback, useEffect, useRef } from 'react';
import { ChevronRight, RotateCcw, Trophy, Clock, Target, CheckCircle, XCircle } from 'lucide-react';

import { Math as MathTex } from './Math';
import { useQuiz } from '@/hooks/useQuiz';
import { storage } from '@/lib/storage';

import type { QuizQuestionData } from '@/types';

interface QuizPanelProps {
  module: string;
  questions: QuizQuestionData[];
  title?: string;
  description?: string;
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
  answered: boolean;
  finished: boolean;
  startTime: number;
  elapsed: number;
}

export function QuizPanel({ module, questions, title = '自测', description }: QuizPanelProps) {
  const { recordAnswer } = useQuiz(module);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);
  const [startTime, setStartTime] = useState(() => Date.now());
  const [elapsed, setElapsed] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval>>(undefined);
  const restoredRef = useRef(false);

  const sessionKey = `quiz:${module}:session`;

  // Restore session from IndexedDB on mount
  useEffect(() => {
    storage.ui.getJSON<QuizSession | null>(sessionKey, null).then((saved) => {
      if (saved && saved.answers.length > 0) {
        setCurrentIdx(saved.currentIdx);
        setAnswers(saved.answers);
        setSelected(saved.selected);
        setAnswered(saved.answered);
        setFinished(saved.finished);
        setStartTime(saved.finished ? saved.startTime : Date.now() - saved.elapsed * 1000);
        setElapsed(saved.elapsed);
      }
      restoredRef.current = true;
    });
  }, [sessionKey]);

  // Persist session to IndexedDB on state changes
  useEffect(() => {
    if (!restoredRef.current) return;
    const session: QuizSession = { currentIdx, answers, selected, answered, finished, startTime, elapsed };
    storage.ui.setJSON(sessionKey, session);
  }, [currentIdx, answers, selected, answered, finished, elapsed, sessionKey, startTime]);

  const current = questions[currentIdx];
  const total = questions.length;
  const correctCount = answers.filter((a) => a.correct).length;

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

  const handleSelect = useCallback(
    (value: string) => {
      if (answered) return;
      setSelected(value);
      setAnswered(true);
      const isCorrect = value === current.correctAnswer;
      const record: AnswerRecord = {
        questionId: current.id,
        selected: value,
        correct: isCorrect,
      };
      setAnswers((prev) => [...prev, record]);
      recordAnswer(current.id, value, current.correctAnswer, isCorrect);
    },
    [answered, current, recordAnswer],
  );

  const handleNext = () => {
    if (currentIdx < total - 1) {
      setCurrentIdx((i) => i + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setAnswers([]);
    setSelected(null);
    setAnswered(false);
    setFinished(false);
    setStartTime(Date.now());
    setElapsed(0);
    storage.ui.remove(sessionKey);
  };

  const isCorrect = selected === current?.correctAnswer;

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
                const q = questions.find((q) => q.id === wa.questionId)!;
                const userOpt = q.options.find((o) => o.value === wa.selected);
                const correctOpt = q.options.find((o) => o.value === q.correctAnswer);
                return (
                  <div key={wa.questionId} className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <p className="text-sm font-medium text-gray-800 mb-1">
                      {q.question}
                      {q.questionLatex && (
                        <span className="ml-1">
                          <MathTex tex={q.questionLatex} />
                        </span>
                      )}
                    </p>
                    <p className="text-xs text-red-600">
                      你选了：{userOpt?.label}.{' '}
                      {userOpt?.isLatex ? <MathTex tex={wa.selected} /> : wa.selected}
                    </p>
                    <p className="text-xs text-green-700">
                      正确答案：{correctOpt?.label}.{' '}
                      {correctOpt?.isLatex ? <MathTex tex={q.correctAnswer} /> : q.correctAnswer}
                    </p>
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
            🎉 全部正确！基础没问题，可以开始学复数了！
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
          {current.question}
          {current.questionLatex && (
            <span className="ml-2">
              <MathTex tex={current.questionLatex} />
            </span>
          )}
        </p>

        {/* Options */}
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

        {/* Feedback + explanation */}
        {answered && (
          <div
            className={`mt-4 p-4 rounded-xl ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-amber-50 border border-amber-200'}`}
          >
            <p className={`font-bold text-sm mb-1 ${isCorrect ? 'text-green-700' : 'text-amber-700'}`}>
              {isCorrect ? '✓ 正确！' : '✗ 错了'}
            </p>
            {current.explanation && (
              <p className="text-gray-700 text-sm">
                {current.explanation}
                {current.explanationLatex && (
                  <span className="block mt-1">
                    <MathTex tex={current.explanationLatex} display />
                  </span>
                )}
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
