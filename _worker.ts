import { createApp } from 'sonik/preact'
import { serveStatic } from 'hono/cloudflare-pages'
import { binding } from 'cf-bindings-proxy'
import { Env } from './app/types'
import { Hono } from 'hono'

const base = new Hono<Env>()
base.use('*', async (c, next) => {
  const DB = c.env ? c.env.DB : binding<D1Database>('DB')
  c.set('DB', DB)
  await next()
})

const app = createApp({
  app: base
})

app.use('/static/*', serveStatic())

app.showRoutes()

export default app
