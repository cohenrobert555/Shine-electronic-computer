
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Bluehost 하위 폴더 배포 시에도 대응 가능하게 설정
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});
