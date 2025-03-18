import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import envCompatible from 'vite-plugin-env-compatible';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), envCompatible()],
  server: {
    host: true,
    open: true,
    historyApiFallback: true, // Đã thêm
  },
});