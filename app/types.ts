import { Context as BaseContext } from 'sonik'

export type Env = {
  Bindings: {
    DB: D1Database
  }
  Variables: {
    DB: D1Database
  }
}

export type Context = BaseContext<Env>
