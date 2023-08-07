import { defineConfig } from 'vite'
import sonik from 'sonik/vite'

export default defineConfig({
  build: {
    emptyOutDir: false
  },
  plugins: [
    sonik({
      entry: './_worker.ts',
      minify: true
    })
  ]
})
