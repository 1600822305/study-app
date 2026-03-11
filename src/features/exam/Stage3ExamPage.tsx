import { QuizPanel, ExportButton, PageHeader, ExamPaper } from '@/components/shared';
import { usePrintMode } from '@/hooks';
import {
  stage3ExamQuestions,
  stage3ConceptQuestions,
  stage3ElemFuncQuestions,
  stage3GraphQuestions,
  stage3DerivQuestions,
  stage3EssayQuestions,
} from './data/stage3-exam';

export function Stage3ExamPage() {
  const { isPrinting } = usePrintMode();

  // 打印模式：渲染正式试卷格式
  if (isPrinting) {
    return (
      <ExamPaper
        title="第三阶段测试卷：函数思维"
        subtitle="（函数性质 · 初等函数 · 图像零点 · 导数）"
        timeLimit={50}
        showChoiceExplanations
        answerPageBreaks={[20]}
        sections={[
          {
            title: '函数概念与性质',
            scorePerQuestion: 3,
            questions: stage3ConceptQuestions,
          },
          {
            title: '基本初等函数',
            scorePerQuestion: 3,
            questions: stage3ElemFuncQuestions,
          },
          {
            title: '函数图像与零点',
            scorePerQuestion: 3,
            questions: stage3GraphQuestions,
          },
          {
            title: '导数基础',
            scorePerQuestion: 3,
            questions: stage3DerivQuestions,
          },
          {
            variant: 'essay',
            title: '综合题',
            questions: stage3EssayQuestions,
            pageBreak: true,
          },
        ]}
      />
    );
  }

  // 屏幕模式：交互式答题
  return (
    <div>
      <PageHeader
        stage="第三阶段 · 函数思维"
        title="📝 阶段考试"
        subtitle={`函数性质（6）+ 初等函数（6）+ 图像零点（5）+ 导数（5），共 ${stage3ExamQuestions.length} 题`}
        tags={[
          { label: '函数性质', color: 'red' },
          { label: '初等函数', color: 'blue' },
          { label: '图像零点', color: 'green' },
          { label: '导数', color: 'purple' },
        ]}
      />

      <div className="flex justify-end mb-4 print:hidden">
        <ExportButton title="第三阶段考试" />
      </div>

      <QuizPanel
        module="stage3-exam"
        questions={stage3ExamQuestions}
        title="第三阶段考试"
        description="题目顺序随机打乱，完成后查看成绩和错题回顾。"
        shuffle={true}
      />
    </div>
  );
}
