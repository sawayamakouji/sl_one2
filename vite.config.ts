// vite.config.ts
import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

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
  // base: './', // または base設定自体を削除

  build: {
    rollupOptions: {
      external: ['react-router-dom'],
    },
  },
});