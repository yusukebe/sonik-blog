import sonik from 'sonik/vite'
import { defineConfig } from 'vite'
import { getEnv } from '@hono/vite-dev-server/cloudflare-pages'

export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      build: {
        rollupOptions: {
          input: ['/app/client.ts', '/app/style.css'],
          output: {
            entryFileNames: 'static/client.js',
            chunkFileNames: 'static/assets/[name]-[hash].js',
            assetFileNames: `static/assets/[name].[ext]`
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
        })
      ],
      ssr: {
        external: ['react', 'react-dom'],
        noExternal: true
      },
      build: {
        rollupOptions: {
          input: './app/server.ts',
          output: {
            dir: './dist',
            entryFileNames: '_worker.js'
          }
        }
      }
    }
  }
})
