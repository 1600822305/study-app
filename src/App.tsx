import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from '@/layouts/Layout';
import { ChatProvider } from '@/features/chat/ChatContext';
import { PrintProvider } from '@/hooks/usePrintMode';
import { HomePage } from '@/features/home';
import { ExamOverviewPage, ScoreGradingPage } from '@/features/overview';
import { CoverPage, TableOfContentsPage } from '@/features/book';
import { PrereqPage } from '@/features/prereq';
import { ComplexPage } from '@/features/complex';
import { SetsPage, SetsPrereqPage } from '@/features/sets';
import { LogicPage, LogicPrereqPage } from '@/features/logic';
import { InequalityPrereqPage, InequalityPage } from '@/features/inequality';
import { QuadraticPrereqPage, QuadraticPage } from '@/features/quadratic';
import { FunctionReviewPage, FunctionPrereqPage, FunctionConceptPage, ElementaryFuncPrereqPage, ElementaryFuncPage, FunctionGraphPrereqPage, FunctionGraphPage, DerivativePrereqPage, DerivativeBasicPage } from '@/features/function';
import { VectorPrereqPage, VectorPage, VectorTrigPrereqPage, VectorCoordPage } from '@/features/vector';
import { TrigPrereqPage, TrigFuncPage, TrigIdentityPage, SolveTrianglePage } from '@/features/trig';
import { SettingsPage } from '@/features/settings/SettingsPage';
import { TTSSettingsPage } from '@/features/settings/TTSSettingsPage';
import { AISettingsPage } from '@/features/settings/AISettingsPage';
import { AIProviderPage } from '@/features/settings/AIProviderPage';
import { AIAddProviderPage } from '@/features/settings/AIAddProviderPage';
import { ChatPage } from '@/features/chat/ChatPage';
import { Stage1ExamPage, Stage2ExamPage, Stage3ExamPage, Stage4ExamPage, Stage5ExamPage } from '@/features/exam';

function App() {
  return (
    <BrowserRouter>
      <PrintProvider>
      <ChatProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/math/cover" element={<CoverPage />} />
          <Route path="/math/toc" element={<TableOfContentsPage />} />
          <Route path="/math/overview" element={<ExamOverviewPage />} />
          <Route path="/math/score-grading" element={<ScoreGradingPage />} />
          <Route path="/math/prereq" element={<PrereqPage />} />
          <Route path="/math/complex" element={<ComplexPage />} />
          <Route path="/math/sets-prereq" element={<SetsPrereqPage />} />
          <Route path="/math/sets" element={<SetsPage />} />
          <Route path="/math/logic-prereq" element={<LogicPrereqPage />} />
          <Route path="/math/logic" element={<LogicPage />} />
          <Route path="/math/stage1-exam" element={<Stage1ExamPage />} />
          <Route path="/math/inequality-prereq" element={<InequalityPrereqPage />} />
          <Route path="/math/inequality" element={<InequalityPage />} />
          <Route path="/math/quadratic-prereq" element={<QuadraticPrereqPage />} />
          <Route path="/math/quadratic" element={<QuadraticPage />} />
          <Route path="/math/stage2-exam" element={<Stage2ExamPage />} />
          <Route path="/math/function-review" element={<FunctionReviewPage />} />
          <Route path="/math/function-prereq" element={<FunctionPrereqPage />} />
          <Route path="/math/function-concept" element={<FunctionConceptPage />} />
          <Route path="/math/elementary-func-prereq" element={<ElementaryFuncPrereqPage />} />
          <Route path="/math/elementary-func" element={<ElementaryFuncPage />} />
          <Route path="/math/function-graph-prereq" element={<FunctionGraphPrereqPage />} />
          <Route path="/math/function-graph" element={<FunctionGraphPage />} />
          <Route path="/math/derivative-prereq" element={<DerivativePrereqPage />} />
          <Route path="/math/derivative-basic" element={<DerivativeBasicPage />} />
          <Route path="/math/stage3-exam" element={<Stage3ExamPage />} />
          <Route path="/math/vector-prereq" element={<VectorPrereqPage />} />
          <Route path="/math/vector" element={<VectorPage />} />
          <Route path="/math/vector-trig-prereq" element={<VectorTrigPrereqPage />} />
          <Route path="/math/vector-coord" element={<VectorCoordPage />} />
          <Route path="/math/stage4-exam" element={<Stage4ExamPage />} />
          <Route path="/math/trig-prereq" element={<TrigPrereqPage />} />
          <Route path="/math/trig-func" element={<TrigFuncPage />} />
          <Route path="/math/trig-identity" element={<TrigIdentityPage />} />
          <Route path="/math/solve-triangle" element={<SolveTrianglePage />} />
          <Route path="/math/stage5-exam" element={<Stage5ExamPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/settings/tts" element={<TTSSettingsPage />} />
          <Route path="/settings/ai" element={<AISettingsPage />} />
          <Route path="/settings/ai/provider/:providerId" element={<AIProviderPage />} />
          <Route path="/settings/ai/add-provider" element={<AIAddProviderPage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </Layout>
      </ChatProvider>
      </PrintProvider>
    </BrowserRouter>
  );
}

export default App;
