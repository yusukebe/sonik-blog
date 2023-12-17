import { createApp } from 'sonik'
import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-pages'
import { showRoutes } from 'hono/dev'

const base = new Hono()
base.get('/static/*', serveStatic())

const app = createApp({
  app: base
})

showRoutes(app)

export default app
