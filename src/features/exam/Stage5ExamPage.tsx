import { useMemo } from 'react';
import { QuizPanel, ExportButton, PageHeader, ExamPaper } from '@/components/shared';
import { usePrintMode } from '@/hooks';
import {
  stage5ExamQuestions,
  stage5ChoiceQuestions,
  stage5BlankQuestions,
  stage5EssayQuestions,
} from './data/stage5-exam';
import { Stage5ExamAnswers } from './stage5-exam-answers';
import { Exam18Triangle, Exam20RightTriangle, Exam21TriangleHeight } from './exam-diagrams';

// 解答题配图映射（id → mafs 组件）
const essayDiagramMap: Record<string, React.ReactNode> = {
  's5e-essay-2': <Exam18Triangle />,
  's5e-essay-4': <Exam20RightTriangle />,
  's5e-essay-5': <Exam21TriangleHeight />,
};

export function Stage5ExamPage() {
  const { isPrinting, printOptions } = usePrintMode();

  // 将 mafs 配图注入解答题数据
  const essayWithDiagrams = useMemo(
    () => stage5EssayQuestions.map((q) => ({
      ...q,
      diagramNode: essayDiagramMap[q.id],
    })),
    [],
  );

  // 打印模式：渲染正式试卷格式
  if (isPrinting) {
    return (
      <>
        <ExamPaper
          title="第五阶段测试卷：三角世界"
          subtitle="（三角函数 · 恒等变换 · 解三角形）"
          timeLimit={90}
          totalScore={120}
          hideBuiltinAnswers
          sections={[
            {
              title: '选择题',
              scorePerQuestion: 5,
              questions: stage5ChoiceQuestions,
            },
            {
              title: '填空题',
              scorePerQuestion: 5,
              questions: stage5BlankQuestions,
              pageBreak: true,
            },
            {
              variant: 'essay',
              title: '解答题',
              questions: essayWithDiagrams,
            },
          ]}
        />
        {printOptions.showAnswers && <Stage5ExamAnswers />}
      </>
    );
  }

  // 屏幕模式：交互式答题
  return (
    <div>
      <PageHeader
        stage="第五阶段 · 三角世界"
        title="📝 阶段考试"
        subtitle={`选择题（10题）+ 填空题（6题），共 ${stage5ExamQuestions.length} 题`}
        tags={[
          { label: '三角函数', color: 'blue' },
          { label: '恒等变换', color: 'green' },
          { label: '解三角形', color: 'purple' },
          { label: '120分', color: 'red' },
        ]}
      />

      <div className="flex justify-end mb-4 print:hidden">
        <ExportButton title="第五阶段考试" />
      </div>

      <QuizPanel
        module="stage5-exam"
        questions={stage5ExamQuestions}
        title="第五阶段考试"
        description="题目顺序随机打乱，完成后查看成绩和错题回顾。"
        shuffle={true}
      />
    </div>
  );
}
