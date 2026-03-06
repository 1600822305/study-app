import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from '@/layouts/Layout';
import { HomePage } from '@/features/home';
import { PrereqPage } from '@/features/prereq';
import { ComplexPage } from '@/features/complex';
import { TTSSettingsPage } from '@/features/settings/TTSSettingsPage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/math/prereq" element={<PrereqPage />} />
          <Route path="/math/complex" element={<ComplexPage />} />
          <Route path="/settings/tts" element={<TTSSettingsPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
