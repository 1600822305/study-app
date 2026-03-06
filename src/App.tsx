import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from '@/layouts/Layout';
import { HomePage } from '@/features/home';
import { PrereqPage } from '@/features/prereq';
import { ComplexPage } from '@/features/complex';
import { SettingsPage } from '@/features/settings/SettingsPage';
import { TTSSettingsPage } from '@/features/settings/TTSSettingsPage';
import { AISettingsPage } from '@/features/settings/AISettingsPage';
import { AIProviderPage } from '@/features/settings/AIProviderPage';
import { AIAddProviderPage } from '@/features/settings/AIAddProviderPage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/math/prereq" element={<PrereqPage />} />
          <Route path="/math/complex" element={<ComplexPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/settings/tts" element={<TTSSettingsPage />} />
          <Route path="/settings/ai" element={<AISettingsPage />} />
          <Route path="/settings/ai/provider/:providerId" element={<AIProviderPage />} />
          <Route path="/settings/ai/add-provider" element={<AIAddProviderPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
