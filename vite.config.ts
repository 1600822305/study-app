import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import solid from 'vite-plugin-solid'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // SolidJS 编译器：只处理 .solid.tsx/.solid.ts 文件
    solid({
      include: ['**/*.solid.tsx', '**/*.solid.ts'],
      ssr: false,
    }),
    // React 编译器：排除 .solid.tsx/.solid.ts 文件
    react({
      exclude: ['**/*.solid.tsx', '**/*.solid.ts'],
    }),
    tailwindcss(),
  ],
  clearScreen: false,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    host: '127.0.0.1',
    port: 5173,
    strictPort: true,
  },
})
