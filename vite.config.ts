import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Vercel은 루트 경로를 기본으로 사용하므로 base를 '/'로 설정하거나 생략 가능
  base: '/', 
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
  },
  server: {
    historyApiFallback: true,
  }
});