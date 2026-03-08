import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from '@/layouts/Layout';
import { ChatProvider } from '@/features/chat/ChatContext';
import { PrintProvider } from '@/hooks/usePrintMode';
import { HomePage } from '@/features/home';
import { ExamOverviewPage } from '@/features/overview';
import { CoverPage, TableOfContentsPage } from '@/features/book';
import { PrereqPage } from '@/features/prereq';
import { ComplexPage } from '@/features/complex';
import { SetsPage, SetsPrereqPage } from '@/features/sets';
import { LogicPage, LogicPrereqPage } from '@/features/logic';
import { SettingsPage } from '@/features/settings/SettingsPage';
import { TTSSettingsPage } from '@/features/settings/TTSSettingsPage';
import { AISettingsPage } from '@/features/settings/AISettingsPage';
import { AIProviderPage } from '@/features/settings/AIProviderPage';
import { AIAddProviderPage } from '@/features/settings/AIAddProviderPage';
import { ChatPage } from '@/features/chat/ChatPage';

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
          <Route path="/math/prereq" element={<PrereqPage />} />
          <Route path="/math/complex" element={<ComplexPage />} />
          <Route path="/math/sets-prereq" element={<SetsPrereqPage />} />
          <Route path="/math/sets" element={<SetsPage />} />
          <Route path="/math/logic-prereq" element={<LogicPrereqPage />} />
          <Route path="/math/logic" element={<LogicPage />} />
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
