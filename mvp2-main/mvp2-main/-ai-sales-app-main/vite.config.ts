import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/manabee/', // Changed from '/mvp2/' to '/manabee/' to prevent 404 on GitHub Pages
  plugins: [react()]
});