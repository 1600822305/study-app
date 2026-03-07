import { useState } from 'react';
import { Math } from '@/components/shared/Math';
import { CheckCircle, XCircle } from 'lucide-react';

import type { QuizQuestionData } from '@/types';

interface QuizQuestionProps extends QuizQuestionData {
  onAnswer?: (id: string, correct: boolean) => void;
}

function SubsetNumberLine() {
  return (
    <svg viewBox="0 0 400 90" className="w-full max-w-md mx-auto my-2">
      {/* 数轴 */}
      <line x1="30" y1="50" x2="370" y2="50" stroke="#666" strokeWidth="1.5" />
      <polygon points="370,50 362,46 362,54" fill="#666" />
      {/* 刻度 */}
      <line x1="80" y1="45" x2="80" y2="55" stroke="#666" strokeWidth="1" />
      <text x="80" y="70" textAnchor="middle" fontSize="12" fill="#666">-2</text>
      <line x1="260" y1="45" x2="260" y2="55" stroke="#666" strokeWidth="1" />
      <text x="260" y="70" textAnchor="middle" fontSize="12" fill="#666">4</text>
      <line x1="310" y1="45" x2="310" y2="55" stroke="#666" strokeWidth="1" />
      <text x="310" y="70" textAnchor="middle" fontSize="12" fill="#666">a</text>
      {/* A 区间 (-2, 4) 蓝色 */}
      <line x1="80" y1="35" x2="260" y2="35" stroke="#2563eb" strokeWidth="3" />
      <circle cx="80" cy="35" r="3.5" fill="white" stroke="#2563eb" strokeWidth="2" />
      <circle cx="260" cy="35" r="3.5" fill="white" stroke="#2563eb" strokeWidth="2" />
      <text x="170" y="28" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2563eb">A</text>
      {/* B 区间 (-∞, a) 绿色 */}
      <line x1="30" y1="50" x2="310" y2="50" stroke="#16a34a" strokeWidth="3" />
      <circle cx="310" cy="50" r="3.5" fill="white" stroke="#16a34a" strokeWidth="2" />
      <text x="50" y="46" fontSize="11" fill="#16a34a">← -∞</text>
      <text x="330" y="46" fontSize="12" fontWeight="bold" fill="#16a34a">B</text>
      {/* 说明 */}
      <text x="200" y="86" textAnchor="middle" fontSize="11" fill="#b45309">A 要完全在 B 里面 → a 必须 ≥ 4</text>
    </svg>
  );
}

export function QuizQuestion({
  id,
  question,
  questionLatex,
  options,
  correctAnswer,
  explanation,
  explanationLatex,
  explanationDiagram,
  onAnswer,
}: QuizQuestionProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);

  const handleSelect = (value: string) => {
    if (answered) return;
    setSelected(value);
    setAnswered(true);
    onAnswer?.(id, value === correctAnswer);
  };

  const isCorrect = selected === correctAnswer;

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 mb-4 shadow-sm">
      <p className="text-gray-800 font-medium mb-3">
        {question}
        {questionLatex && (
          <span className="ml-2">
            <Math tex={questionLatex} />
          </span>
        )}
      </p>

      <div className="space-y-2">
        {options.map((opt) => {
          let borderColor = 'border-gray-200 hover:border-blue-400';
          let bgColor = 'bg-white hover:bg-blue-50';

          if (answered) {
            if (opt.value === correctAnswer) {
              borderColor = 'border-green-500';
              bgColor = 'bg-green-50';
            } else if (opt.value === selected && !isCorrect) {
              borderColor = 'border-red-500';
              bgColor = 'bg-red-50';
            } else {
              borderColor = 'border-gray-100';
              bgColor = 'bg-gray-50 opacity-60';
            }
          }

          return (
            <button
              key={opt.value}
              onClick={() => handleSelect(opt.value)}
              className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all duration-200 cursor-pointer flex items-center gap-3 ${borderColor} ${bgColor}`}
              disabled={answered}
            >
              <span className="w-7 h-7 rounded-full border-2 border-gray-300 flex items-center justify-center text-sm font-bold text-gray-500 shrink-0">
                {opt.label}
              </span>
              <span className="text-gray-700">
                {opt.isLatex ? <Math tex={opt.value} /> : opt.value}
              </span>
              {answered && opt.value === correctAnswer && (
                <CheckCircle className="ml-auto text-green-500 shrink-0" size={20} />
              )}
              {answered && opt.value === selected && !isCorrect && opt.value !== correctAnswer && (
                <XCircle className="ml-auto text-red-500 shrink-0" size={20} />
              )}
            </button>
          );
        })}
      </div>

      {answered && (
        <div
          className={`mt-4 p-4 rounded-lg ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-amber-50 border border-amber-200'}`}
        >
          <p
            className={`font-bold text-sm mb-1 ${isCorrect ? 'text-green-700' : 'text-amber-700'}`}
          >
            {isCorrect ? '✓ 正确！' : '✗ 错误'}
          </p>
          <p className="text-gray-700 text-sm">
            {explanation}
            {explanationLatex && (
              <span className="block mt-2">
                <Math tex={explanationLatex} display />
              </span>
            )}
            {explanationDiagram === 'subset-number-line' && <SubsetNumberLine />}
          </p>
        </div>
      )}
    </div>
  );
}
