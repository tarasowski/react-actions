import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Enable global test functions like `test` and `expect`
    environment: "jsdom" // Simulates a browser environment
  }
})
