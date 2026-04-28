import { type ReactNode } from 'react';
import { Math as MathTex } from '../Math';
import type { QuizQuestionData } from '@/types';

interface PrintQuestionsProps {
  questions: QuizQuestionData[];
  /** 打印模式下选项列数，默认 4 */
  printOptionCols?: 1 | 2 | 4;
  /** 打印模式下隐藏填空题的答题线，默认 true */
  hideBlankLine?: boolean;
  /** 题目列数，默认 1 */
  columns?: 1 | 2;
  /** 题号起始偏移，默认 0（从 1 开始编号） */
  startIndex?: number;
  /** 自定义每道题的渲染 */
  renderItem?: (q: QuizQuestionData, idx: number) => ReactNode;
}

/** 渲染题目文字 */
function renderQ(q: QuizQuestionData) {
  if (q.questionNode) return q.questionNode;
  if (q.questionLatex) return <MathTex tex={q.questionLatex} />;
  const parts = q.question.split(/\$([^$]+)\$/g);
  if (parts.length === 1) return q.question;
  return <>{parts.map((p, i) => i % 2 === 1 ? <MathTex key={i} tex={p} /> : p)}</>;
}

/**
 * 纯静态题目列表，无交互，无外层容器样式。
 * 适合嵌入已有的卡片布局中，不会被容器限制分页。
 */
export function PrintQuestions({ questions, printOptionCols = 4, hideBlankLine = true, columns = 1, startIndex = 0, renderItem }: PrintQuestionsProps) {
  return (
    <div className="bg-white border border-gray-800 px-2 py-0">
      <div className={columns === 2 ? 'grid grid-cols-2 gap-x-4' : 'space-y-0'}>
      {questions.map((q, idx) => (
        renderItem ? (
          <div key={idx} className={q.fullRow && columns === 2 ? 'col-span-2' : ''} style={{ breakInside: 'avoid' }}>
            {renderItem(q, idx)}
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
            {q.type === 'blank' && !hideBlankLine && (
              <div className="ml-4 mt-1">
                <span className="text-gray-400">答：</span>
                <span className="inline-block w-40 border-b-2 border-gray-300 ml-1">&nbsp;</span>
              </div>
            )}
          </div>
        ) : (
          <div key={idx} className={`py-1 border-b border-gray-200${q.fullRow && columns === 2 ? ' col-span-2' : ''}`} style={{ breakInside: 'avoid' }}>
            <p className="text-gray-800">
              <span className="text-gray-800 mr-2 font-medium">{idx + 1 + startIndex}.</span>
              {q.questionLatex ? <MathTex tex={q.questionLatex} /> : renderQ(q)}
            </p>
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
