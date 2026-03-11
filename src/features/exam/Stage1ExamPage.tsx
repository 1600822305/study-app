import { QuizPanel, ExportButton, PageHeader, ExamPaper } from '@/components/shared';
import { usePrintMode } from '@/hooks';
import {
  stage1ExamQuestions,
  stage1ComplexQuestions,
  stage1SetsQuestions,
  stage1LogicQuestions,
  stage1EssayQuestions,
} from './data/stage1-exam';

export function Stage1ExamPage() {
  const { isPrinting } = usePrintMode();

  // 打印模式：渲染正式试卷格式
  if (isPrinting) {
    return (
      <ExamPaper
        title="第一阶段测试卷：数学语言"
        subtitle="（复数 · 集合 · 逻辑用语）"
        timeLimit={45}
        sections={[
          {
            title: '复数',
            scorePerQuestion: 3,
            questions: stage1ComplexQuestions,
          },
          {
            title: '集合',
            scorePerQuestion: 3,
            questions: stage1SetsQuestions,
            pageBreak: true,
          },
          {
            title: '逻辑用语',
            scorePerQuestion: 3,
            questions: stage1LogicQuestions,
          },
          {
            variant: 'essay',
            title: '综合题',
            questions: stage1EssayQuestions,
          },
        ]}
      />
    );
  }

  // 屏幕模式：交互式答题
  return (
    <div>
      <PageHeader
        stage="第一阶段 · 数学语言"
        title="📝 阶段考试"
        subtitle={`复数（8题）+ 集合（10题）+ 逻辑用语（6题），共 ${stage1ExamQuestions.length} 题`}
        tags={[
          { label: '复数', color: 'blue' },
          { label: '集合', color: 'green' },
          { label: '逻辑用语', color: 'purple' },
        ]}
      />

      <div className="flex justify-end mb-4 print:hidden">
        <ExportButton title="第一阶段考试" />
      </div>

      <QuizPanel
        module="stage1-exam"
        questions={stage1ExamQuestions}
        title="第一阶段考试"
        description="题目顺序随机打乱，完成后查看成绩和错题回顾。"
        shuffle={true}
      />
    </div>
  );
}
