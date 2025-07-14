import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/volux-landing/phantom/demo-deploy/',  // 👈 this is the key
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});