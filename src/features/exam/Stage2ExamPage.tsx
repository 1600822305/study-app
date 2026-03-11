import { QuizPanel, ExportButton, PageHeader, ExamPaper } from '@/components/shared';
import { usePrintMode } from '@/hooks';
import {
  stage2ExamQuestions,
  stage2InequalityQuestions,
  stage2QuadraticQuestions,
  stage2EssayQuestions,
} from './data/stage2-exam';

export function Stage2ExamPage() {
  const { isPrinting } = usePrintMode();

  // 打印模式：渲染正式试卷格式
  if (isPrinting) {
    return (
      <ExamPaper
        title="第二阶段测试卷：计算工具"
        subtitle="（不等式 · 二次函数）"
        timeLimit={35}
        sections={[
          {
            title: '不等式',
            scorePerQuestion: 4,
            questions: stage2InequalityQuestions,
          },
          {
            title: '二次函数',
            scorePerQuestion: 4,
            questions: stage2QuadraticQuestions,
          },
          {
            variant: 'essay',
            title: '综合题',
            questions: stage2EssayQuestions,
          },
        ]}
      />
    );
  }

  // 屏幕模式：交互式答题
  return (
    <div>
      <PageHeader
        stage="第二阶段 · 计算工具"
        title="📝 阶段考试"
        subtitle={`不等式（7题）+ 二次函数（8题），共 ${stage2ExamQuestions.length} 题`}
        tags={[
          { label: '不等式', color: 'amber' },
          { label: '二次函数', color: 'green' },
        ]}
      />

      <div className="flex justify-end mb-4 print:hidden">
        <ExportButton title="第二阶段考试" />
      </div>

      <QuizPanel
        module="stage2-exam"
        questions={stage2ExamQuestions}
        title="第二阶段考试"
        description="题目顺序随机打乱，完成后查看成绩和错题回顾。"
        shuffle={true}
      />
    </div>
  );
}
