import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // 상대 경로 설정을 통해 하위 디렉토리 배포 대응
  define: {
    // 브라우저 환경에서 process.env.API_KEY 접근 가능하게 설정
    'process.env': process.env
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
  }
});