import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

import { Math as MathTex } from '../Math';
import { usePrintMode } from '@/hooks/usePrintMode';

interface BigQuestionProps {
  /** 题目（LaTeX 格式，支持 \\\\[6pt] 换行分小问） */
  questionLatex: string;
  /** 解答过程（LaTeX 格式） */
  solutionLatex: string;
  /** 答题区行数，默认 8 */
  lines?: number;
}

export function BigQuestionCard({ questionLatex, solutionLatex, lines = 8 }: BigQuestionProps) {
  const { isPrinting } = usePrintMode();
  const [showSolution, setShowSolution] = useState(false);

  // ── 打印模式 ──
  if (isPrinting) {
    return (
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-2 my-2" style={{ breakInside: 'avoid' }}>
        <p className="font-bold text-blue-800 mb-1">📝 解答题</p>
        <div className="bg-white rounded-lg border border-blue-100 p-3">
          <div className="mb-2">
            <MathTex tex={questionLatex} />
          </div>
          {/* 空白答题区 */}
          <div className="mt-2" style={{ height: `${lines * 1.75}rem` }} />
        </div>
      </div>
    );
  }

  // ── 交互模式 ──
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 my-4">
      <div className="flex items-center justify-between mb-3">
        <p className="font-bold text-blue-800">📝 解答题</p>
        <button
          onClick={() => setShowSolution(!showSolution)}
          className="text-xs px-3 py-1.5 rounded-lg font-bold transition-colors flex items-center gap-1
            bg-blue-100 text-blue-700 hover:bg-blue-200"
        >
          {showSolution ? <EyeOff size={14} /> : <Eye size={14} />}
          {showSolution ? '隐藏解答' : '查看解答'}
        </button>
      </div>

      <div className="bg-white rounded-lg border border-blue-100 p-4">
        <div className="mb-3">
          <MathTex tex={questionLatex} />
        </div>

        {showSolution && (
          <div className="mt-3 p-3 rounded-lg bg-blue-50 border border-blue-200">
            <p className="font-bold text-sm text-blue-700 mb-2">📋 解答过程</p>
            <MathTex tex={solutionLatex} display />
          </div>
        )}
      </div>
    </div>
  );
}
