import { defineConfig } from 'vite'
import sonik from 'sonik/vite'
import pages from '@sonikjs/cloudflare-pages'

export default defineConfig({
  plugins: [
    sonik({
      devServer: {
        cf: {
          d1Databases: ['DB'],
          d1Persist: true
        }
      }
    }),
    pages()
  ]
})
