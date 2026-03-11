import { QuizPanel, ExportButton, PageHeader, ExamPaper } from '@/components/shared';
import { usePrintMode } from '@/hooks';
import {
  stage4ExamQuestions,
  stage4ChoiceQuestions,
  stage4BlankQuestions,
  stage4EssayQuestions,
} from './data/stage4-exam';

export function Stage4ExamPage() {
  const { isPrinting } = usePrintMode();

  // 打印模式：渲染正式试卷格式
  if (isPrinting) {
    return (
      <ExamPaper
        title="第四阶段测试卷：平面向量"
        subtitle="（向量运算 · 数量积 · 垂直与平行）"
        timeLimit={60}
        totalScore={120}
        sections={[
          {
            title: '选择题',
            scorePerQuestion: 5,
            questions: stage4ChoiceQuestions,
          },
          {
            title: '填空题',
            scorePerQuestion: 5,
            questions: stage4BlankQuestions,
          },
          {
            variant: 'essay',
            title: '解答题',
            questions: stage4EssayQuestions,
          },
        ]}
      />
    );
  }

  // 屏幕模式：交互式答题
  return (
    <div>
      <PageHeader
        stage="第四阶段 · 平面向量"
        title="📝 阶段考试"
        subtitle={`选择题（6题）+ 填空题（5题），共 ${stage4ExamQuestions.length} 题`}
        tags={[
          { label: '垂直判定', color: 'blue' },
          { label: '平行判定', color: 'green' },
          { label: '数量积', color: 'purple' },
          { label: '坐标运算', color: 'amber' },
        ]}
      />

      <div className="flex justify-end mb-4 print:hidden">
        <ExportButton title="第四阶段考试" />
      </div>

      <QuizPanel
        module="stage4-exam"
        questions={stage4ExamQuestions}
        title="第四阶段考试"
        description="题目顺序随机打乱，完成后查看成绩和错题回顾。"
        shuffle={true}
      />
    </div>
  );
}
