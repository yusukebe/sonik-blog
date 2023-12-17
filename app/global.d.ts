import '@hono/react-renderer'

declare module '@hono/react-renderer' {
  interface Props {
    title: string
    link?: { rel: string; href: string }[]
  }
}
