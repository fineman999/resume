import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/resume/', // GitHub repo 이름으로 변경 (username.github.io이면 '/')
});
