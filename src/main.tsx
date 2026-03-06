import { createRoot } from 'react-dom/client';
import { Capacitor } from '@capacitor/core';
import './index.css';
import App from './App';

// 初始化 Edge-to-Edge（Capacitor 原生端）
if (Capacitor.isNativePlatform()) {
  import('capacitor-edge-to-edge').then(({ EdgeToEdge }) => {
    EdgeToEdge.enable();
    EdgeToEdge.setTransparentSystemBars({
      statusBar: true,
      navigationBar: true,
    });
    EdgeToEdge.setSystemBarAppearance({
      statusBarStyle: 'dark',
      navigationBarStyle: 'dark',
    });
  }).catch(console.error);
}

createRoot(document.getElementById('root')!).render(<App />);
