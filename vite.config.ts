import pages from '@hono/vite-cloudflare-pages'
import sonik from 'sonik/vite'
import { defineConfig } from 'vite'
import { getEnv } from '@hono/vite-dev-server/cloudflare-pages'

export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      build: {
        rollupOptions: {
          input: ['./app/client.ts', '/app/style.css'],
          output: {
            dir: './dist/static',
            entryFileNames: 'client.js',
            assetFileNames: `assets/[name].[ext]`
          }
        },
        emptyOutDir: false,
        copyPublicDir: false
      }
    }
  } else {
    return {
      plugins: [
        sonik({
          devServer: {
            env: getEnv({
              d1Databases: ['DB'],
              d1Persist: true
            })
          }
        }),
        pages({
          entry: './app/server.ts'
        })
      ],
      build: {
        rollupOptions: {
          output: {
            dir: './dist',
            entryFileNames: '_worker.js'
          }
        }
      }
    }
  }
})
