import { Route as BaseRoute } from 'sonik/preact'

export type Env = {
  Bindings: {
    DB: D1Database
  }
  Variables: {
    DB: D1Database
  }
}

export type Route = BaseRoute<Env>
