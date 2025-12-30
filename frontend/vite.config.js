import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/property-app/",
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: "./src/setupTests.js"
  }
});
