import { createApp } from 'sonik'
import { Hono } from 'hono'
import { showRoutes } from 'hono/dev'

const base = new Hono()

const app = createApp({
  app: base
})

showRoutes(app)

export default app
