import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// 開発環境かGitHub Pagesかを判別
const isGithubPages = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: isGithubPages ? '/sl_one2/' : './', // GitHub Pagesの場合のみbaseを設定

  build: {
    rollupOptions: {
      external: ['react-router-dom'], // ここにreact-router-domを追加
    },
  },

});
