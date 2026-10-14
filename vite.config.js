import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base 使用相對路徑,Capacitor WebView 才能正確載入資源
export default defineConfig({
  plugins: [react()],
  base: './',
  build: { outDir: 'dist' },
});
