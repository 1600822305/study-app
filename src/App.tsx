import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from '@/layouts/Layout';
import { ChatProvider } from '@/features/chat/ChatContext';
import { PrintProvider } from '@/hooks/usePrintMode';

// ── 路由懒加载 ──
const HomePage = lazy(() => import('@/features/home').then(m => ({ default: m.HomePage })));
const ExamOverviewPage = lazy(() => import('@/features/overview').then(m => ({ default: m.ExamOverviewPage })));
const ScoreGradingPage = lazy(() => import('@/features/overview').then(m => ({ default: m.ScoreGradingPage })));
const CoverPage = lazy(() => import('@/features/book').then(m => ({ default: m.CoverPage })));
const TableOfContentsPage = lazy(() => import('@/features/book').then(m => ({ default: m.TableOfContentsPage })));
const PrereqPage = lazy(() => import('@/features/math-lang').then(m => ({ default: m.PrereqPage })));
const ComplexPage = lazy(() => import('@/features/math-lang').then(m => ({ default: m.ComplexPage })));
const SetsPage = lazy(() => import('@/features/math-lang').then(m => ({ default: m.SetsPage })));
const SetsPrereqPage = lazy(() => import('@/features/math-lang').then(m => ({ default: m.SetsPrereqPage })));
const LogicPage = lazy(() => import('@/features/math-lang').then(m => ({ default: m.LogicPage })));
const LogicPrereqPage = lazy(() => import('@/features/math-lang').then(m => ({ default: m.LogicPrereqPage })));
const InequalityPage = lazy(() => import('@/features/inequality').then(m => ({ default: m.InequalityPage })));
const AbsoluteValuePage = lazy(() => import('@/features/inequality').then(m => ({ default: m.AbsoluteValuePage })));
const QuadraticPage = lazy(() => import('@/features/quadratic').then(m => ({ default: m.QuadraticPage })));
const FunctionReviewPage = lazy(() => import('@/features/function').then(m => ({ default: m.FunctionReviewPage })));
const FunctionConceptPage = lazy(() => import('@/features/function').then(m => ({ default: m.FunctionConceptPage })));
const ElementaryFuncPrereqPage = lazy(() => import('@/features/function').then(m => ({ default: m.ElementaryFuncPrereqPage })));
const ElementaryFuncPage = lazy(() => import('@/features/function').then(m => ({ default: m.ElementaryFuncPage })));
const FunctionGraphPrereqPage = lazy(() => import('@/features/function').then(m => ({ default: m.FunctionGraphPrereqPage })));
const FunctionGraphPage = lazy(() => import('@/features/function').then(m => ({ default: m.FunctionGraphPage })));
const DerivativePrereqPage = lazy(() => import('@/features/function').then(m => ({ default: m.DerivativePrereqPage })));
const DerivativeBasicPage = lazy(() => import('@/features/function').then(m => ({ default: m.DerivativeBasicPage })));
const VectorPrereqPage = lazy(() => import('@/features/vector').then(m => ({ default: m.VectorPrereqPage })));
const VectorPage = lazy(() => import('@/features/vector').then(m => ({ default: m.VectorPage })));
const VectorTrigPrereqPage = lazy(() => import('@/features/vector').then(m => ({ default: m.VectorTrigPrereqPage })));
const VectorCoordPage = lazy(() => import('@/features/vector').then(m => ({ default: m.VectorCoordPage })));
const TrigPrereqPage = lazy(() => import('@/features/trig').then(m => ({ default: m.TrigPrereqPage })));
const TrigFuncPage = lazy(() => import('@/features/trig').then(m => ({ default: m.TrigFuncPage })));
const TrigIdentityPage = lazy(() => import('@/features/trig').then(m => ({ default: m.TrigIdentityPage })));
const SolveTrianglePage = lazy(() => import('@/features/trig').then(m => ({ default: m.SolveTrianglePage })));
const PrintTestPage = lazy(() => import('@/features/trig').then(m => ({ default: m.PrintTestPage })));
const SequencePrereqPage = lazy(() => import('@/features/sequence').then(m => ({ default: m.SequencePrereqPage })));
const SequenceBasicPage = lazy(() => import('@/features/sequence').then(m => ({ default: m.SequenceBasicPage })));
const SequenceRecurPage = lazy(() => import('@/features/sequence').then(m => ({ default: m.SequenceRecurPage })));
const SequenceSumPage = lazy(() => import('@/features/sequence').then(m => ({ default: m.SequenceSumPage })));
const SequenceAdvPage = lazy(() => import('@/features/sequence').then(m => ({ default: m.SequenceAdvPage })));
const GeoBasicsPage = lazy(() => import('@/features/geometry').then(m => ({ default: m.GeoBasicsPage })));

const Geo3dRelationPage = lazy(() => import('@/features/geometry').then(m => ({ default: m.Geo3dRelationPage })));
const Geo3dVectorPrereqPage = lazy(() => import('@/features/geometry').then(m => ({ default: m.Geo3dVectorPrereqPage })));
const Geo3dVectorPage = lazy(() => import('@/features/geometry').then(m => ({ default: m.Geo3dVectorPage })));
const Geo3dSolidPage = lazy(() => import('@/features/geometry').then(m => ({ default: m.Geo3dSolidPage })));
const LinePage = lazy(() => import('@/features/analytic').then(m => ({ default: m.LinePage })));
const CirclePage = lazy(() => import('@/features/analytic').then(m => ({ default: m.CirclePage })));
const ConicBasicPage = lazy(() => import('@/features/analytic').then(m => ({ default: m.ConicBasicPage })));
const ConicLinePage = lazy(() => import('@/features/analytic').then(m => ({ default: m.ConicLinePage })));
const CountingPage = lazy(() => import('@/features/probability').then(m => ({ default: m.CountingPage })));
const ProbabilityPage = lazy(() => import('@/features/probability').then(m => ({ default: m.ProbabilityPage })));
const StatisticsPage = lazy(() => import('@/features/probability').then(m => ({ default: m.StatisticsPage })));
const DerivativeCompPage = lazy(() => import('@/features/derivative').then(m => ({ default: m.DerivativeCompPage })));
const DerivativeHardPage = lazy(() => import('@/features/derivative').then(m => ({ default: m.DerivativeHardPage })));
const SettingsPage = lazy(() => import('@/features/settings/SettingsPage').then(m => ({ default: m.SettingsPage })));
const TTSSettingsPage = lazy(() => import('@/features/settings/TTSSettingsPage').then(m => ({ default: m.TTSSettingsPage })));
const AISettingsPage = lazy(() => import('@/features/settings/AISettingsPage').then(m => ({ default: m.AISettingsPage })));
const AIProviderPage = lazy(() => import('@/features/settings/AIProviderPage').then(m => ({ default: m.AIProviderPage })));
const AIAddProviderPage = lazy(() => import('@/features/settings/AIAddProviderPage').then(m => ({ default: m.AIAddProviderPage })));
const ChatPage = lazy(() => import('@/features/chat/ChatPage').then(m => ({ default: m.ChatPage })));
const Stage1ExamPage = lazy(() => import('@/features/exam').then(m => ({ default: m.Stage1ExamPage })));
const Stage2ExamPage = lazy(() => import('@/features/exam').then(m => ({ default: m.Stage2ExamPage })));
const Stage3ExamPage = lazy(() => import('@/features/exam').then(m => ({ default: m.Stage3ExamPage })));
const Stage4ExamPage = lazy(() => import('@/features/exam').then(m => ({ default: m.Stage4ExamPage })));
const Stage5ExamPage = lazy(() => import('@/features/exam').then(m => ({ default: m.Stage5ExamPage })));

// ── 加载占位 ──
function PageFallback() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-500 border-t-transparent" />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <PrintProvider>
      <ChatProvider>
      <Layout>
        <Suspense fallback={<PageFallback />}>
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
          <Route path="/math/inequality" element={<InequalityPage />} />
          <Route path="/math/absolute-value" element={<AbsoluteValuePage />} />
          <Route path="/math/stage2-exam" element={<Stage2ExamPage />} />
          <Route path="/math/function-review" element={<FunctionReviewPage />} />
          <Route path="/math/function-concept" element={<FunctionConceptPage />} />
          <Route path="/math/quadratic" element={<QuadraticPage />} />
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
          <Route path="/math/print-test" element={<PrintTestPage />} />
          <Route path="/math/stage5-exam" element={<Stage5ExamPage />} />
          <Route path="/math/sequence-prereq" element={<SequencePrereqPage />} />
          <Route path="/math/sequence-basic" element={<SequenceBasicPage />} />
          <Route path="/math/sequence-recur" element={<SequenceRecurPage />} />
          <Route path="/math/sequence-sum" element={<SequenceSumPage />} />
          <Route path="/math/sequence-adv" element={<SequenceAdvPage />} />
          <Route path="/math/geo-basics" element={<GeoBasicsPage />} />

          <Route path="/math/geo3d-relation" element={<Geo3dRelationPage />} />
          <Route path="/math/geo3d-vector-prereq" element={<Geo3dVectorPrereqPage />} />
          <Route path="/math/geo3d-vector" element={<Geo3dVectorPage />} />
          <Route path="/math/geo3d-solid" element={<Geo3dSolidPage />} />
          <Route path="/math/line" element={<LinePage />} />
          <Route path="/math/circle" element={<CirclePage />} />
          <Route path="/math/conic-basic" element={<ConicBasicPage />} />
          <Route path="/math/conic-line" element={<ConicLinePage />} />
          <Route path="/math/counting" element={<CountingPage />} />
          <Route path="/math/probability" element={<ProbabilityPage />} />
          <Route path="/math/statistics" element={<StatisticsPage />} />
          <Route path="/math/derivative-comp" element={<DerivativeCompPage />} />
          <Route path="/math/derivative-hard" element={<DerivativeHardPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/settings/tts" element={<TTSSettingsPage />} />
          <Route path="/settings/ai" element={<AISettingsPage />} />
          <Route path="/settings/ai/provider/:providerId" element={<AIProviderPage />} />
          <Route path="/settings/ai/add-provider" element={<AIAddProviderPage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
        </Suspense>
      </Layout>
      </ChatProvider>
      </PrintProvider>
    </BrowserRouter>
  );
}

export default App;
