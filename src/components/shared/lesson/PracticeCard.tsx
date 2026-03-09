import { useState, useCallback } from 'react';
import { ChevronRight, RotateCcw, CheckCircle, XCircle, Send } from 'lucide-react';

import { Math as MathTex } from '../Math';
import { usePrintMode } from '@/hooks/usePrintMode';

import type { QuizQuestionData } from '@/types';

// ── Helpers ──

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
}

// ── Component ──

export function PracticeCard({ title = '✏️ 即时练习', questions }: PracticeCardProps) {
  const { isPrinting } = usePrintMode();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [blankInput, setBlankInput] = useState('');
  const [answered, setAnswered] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);
  const [finished, setFinished] = useState(false);

  const total = questions.length;
  const current = questions[currentIdx];
  const isBlank = current?.type === 'blank';
  const correctCount = results.filter(Boolean).length;

  const isCorrect = current
    ? isBlank
      ? checkBlankAnswer(blankInput, current)
      : selected === current.correctAnswer
    : false;

  const handleSelect = useCallback(
    (value: string) => {
      if (answered || !current) return;
      setSelected(value);
      setAnswered(true);
      setResults((prev) => [...prev, value === current.correctAnswer]);
    },
    [answered, current],
  );

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
      <div className="print-practice bg-green-50 border border-green-200 rounded-xl p-2 my-2">
        <p className="font-bold text-green-800 mb-1">{title}</p>
        <div className="space-y-1.5">
          {questions.map((q, idx) => (
            <div key={idx} className="bg-white rounded-lg border border-green-100 p-1.5" style={{ breakInside: 'avoid' }}>
              <p className="text-gray-800 font-medium mb-1">
                <span className="text-green-600 mr-2">{idx + 1}.</span>
                {q.questionLatex ? <MathTex tex={q.questionLatex} /> : q.question}
              </p>

              {/* 选择题选项 */}
              {q.type !== 'blank' && q.options && (
                <div className="space-y-1 ml-4">
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

  const handleReset = () => {
    setCurrentIdx(0);
    setSelected(null);
    setBlankInput('');
    setAnswered(false);
    setResults([]);
    setFinished(false);
  };

  if (!current) return null;

  // ── 完成总结 ──
  if (finished) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-4 my-4">
        <p className="font-bold text-green-800 mb-3">{title}</p>
        <div className="bg-white rounded-lg border border-green-100 p-4 text-center">
          <p className="text-2xl font-bold text-green-700 mb-1">
            {correctCount === total ? '🎉 全部正确！' : `${correctCount}/${total} 题正确`}
          </p>
          <p className="text-sm text-gray-500 mb-3">
            {correctCount === total ? '掌握得很好，继续往下学吧！' : '再试一次加深印象'}
          </p>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-bold hover:bg-green-600 transition-colors inline-flex items-center gap-1"
          >
            <RotateCcw size={14} /> 再做一次
          </button>
        </div>
      </div>
    );
  }

  // ── 单题视图 ──
  return (
    <div className="bg-green-50 border border-green-200 rounded-xl p-4 my-4">
      {/* 标题 + 进度 */}
      <div className="flex items-center justify-between mb-3">
        <p className="font-bold text-green-800">{title}</p>
        <span className="text-xs text-green-600 font-medium">{currentIdx + 1} / {total}</span>
      </div>

      {/* 进度条 */}
      <div className="w-full h-1.5 bg-green-100 rounded-full overflow-hidden mb-3">
        <div
          className="h-full bg-green-500 rounded-full transition-all duration-500"
          style={{ width: `${((currentIdx + (answered ? 1 : 0)) / total) * 100}%` }}
        />
      </div>

      {/* 题目卡片 */}
      <div className="bg-white rounded-lg border border-green-100 p-4">
        {/* 题目文字 */}
        <p className="text-gray-800 font-medium mb-3">
          {current.questionLatex ? <MathTex tex={current.questionLatex} /> : current.question}
        </p>

        {/* 选择题选项 */}
        {!isBlank && current.options && (
          <div className="space-y-2">
            {current.options.map((opt) => {
              let cls = 'border-gray-200 bg-white text-gray-700 hover:border-green-400 hover:bg-green-50';
              if (answered) {
                if (opt.value === current.correctAnswer) {
                  cls = 'border-green-500 bg-green-50 text-green-800';
                } else if (opt.value === selected && !isCorrect) {
                  cls = 'border-red-400 bg-red-50 text-red-700';
                } else {
                  cls = 'border-gray-100 bg-gray-50 text-gray-400';
                }
              }
              return (
                <button
                  key={opt.value}
                  onClick={() => handleSelect(opt.value)}
                  disabled={answered}
                  className={`w-full text-left px-4 py-2.5 rounded-lg border-2 transition-all flex items-center gap-3 ${cls}`}
                >
                  <span className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center text-xs font-bold text-gray-500 shrink-0">
                    {opt.label}
                  </span>
                  <span>{opt.isLatex ? <MathTex tex={opt.value} /> : opt.value}</span>
                  {answered && opt.value === current.correctAnswer && (
                    <CheckCircle className="ml-auto text-green-500 shrink-0" size={16} />
                  )}
                  {answered && opt.value === selected && !isCorrect && opt.value !== current.correctAnswer && (
                    <XCircle className="ml-auto text-red-500 shrink-0" size={16} />
                  )}
                </button>
              );
            })}
          </div>
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
              className="flex-1 px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-400"
            />
            <button
              onClick={handleBlankSubmit}
              className="px-4 py-2.5 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600 transition-colors flex items-center gap-1"
            >
              <Send size={14} /> 提交
            </button>
          </div>
        )}

        {/* 反馈 */}
        {answered && (
          <div className={`mt-3 p-3 rounded-lg ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
            <p className={`font-bold text-sm mb-1 ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
              {isCorrect ? '✓ 正确！' : `✗ 错了　正确答案：${current.correctAnswer}`}
            </p>
            {current.explanation && (
              <p className="text-gray-600 text-sm">{current.explanation}</p>
            )}
            {current.explanationLatex && (
              <div className="mt-1">
                <MathTex tex={current.explanationLatex} display />
              </div>
            )}
          </div>
        )}

        {/* 下一题按钮 */}
        {answered && (
          <button
            onClick={handleNext}
            className="w-full mt-3 py-2.5 rounded-lg bg-green-500 text-white font-bold hover:bg-green-600 transition-colors flex items-center justify-center gap-1"
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
