import { QuizPanel, ExportButton, PageHeader, ExamPaper } from '@/components/shared';
import { usePrintMode } from '@/hooks';
import {
  stage2ExamQuestions,
  stage2InequalityQuestions,
  stage2EssayQuestions,
} from './data/stage2-exam';
import { Stage2ExamAnswers, stage2Explanations } from './stage2-exam-answers';

export function Stage2ExamPage() {
  const { isPrinting, printOptions } = usePrintMode();

  // 打印模式：渲染正式试卷格式
  if (isPrinting) {
    return (
      <>
        <ExamPaper
          title="第二阶段测试卷：计算工具"
          subtitle="（不等式）"
          timeLimit={40}
          hideBuiltinAnswers
          sections={[
            {
              title: '不等式',
              scorePerQuestion: 4,
              questions: stage2InequalityQuestions,
            },
            {
              variant: 'essay',
              title: '综合题',
              questions: stage2EssayQuestions,
            },
          ]}
        />
        {printOptions.showAnswers && <Stage2ExamAnswers />}
      </>
    );
  }

  // 屏幕模式：交互式答题
  return (
    <div>
      <PageHeader
        stage="第二阶段 · 计算工具"
        title="📝 阶段考试"
        subtitle={`不等式，共 ${stage2ExamQuestions.length} 题`}
        tags={[
          { label: '不等式', color: 'amber' },
        ]}
      />

      <div className="flex justify-end mb-4 print:hidden">
        <ExportButton title="第二阶段考试" />
      </div>

      <QuizPanel
        module="stage2-exam"
        questions={stage2ExamQuestions}
        title="第二阶段考试"
        description="按顺序答题，完成后查看成绩和错题回顾。"
        explanations={stage2Explanations}
      />
    </div>
  );
}
