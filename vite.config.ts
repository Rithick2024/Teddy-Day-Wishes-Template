import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Teddy-Day-Wishes-Template/",
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
