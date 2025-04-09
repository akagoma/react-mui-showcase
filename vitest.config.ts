/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc'
import {defineConfig} from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    include: ['src/**/*.{stories}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    coverage: {
      include: ['src/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      reportsDirectory: './coverage/story'
    }
  }
})
