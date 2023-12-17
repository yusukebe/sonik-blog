import type { ErrorHandler } from 'hono'

const handler: ErrorHandler = (e, c) => {
  return c.render(<p>Error: {e.message}!</p>)
}

export default handler
