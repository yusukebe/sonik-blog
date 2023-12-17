import { createFactory } from 'hono/factory'

type Env = {
  Bindings: {
    DB: D1Database
  }
}

const factory = createFactory<Env>()
export const createHandlers = factory.createHandlers
