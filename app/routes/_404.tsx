import type { NotFoundHandler } from 'hono'

const handler: NotFoundHandler = (c) => {
  return c.render(<p>Not Found</p>)
}

export default handler
