import { reactRenderer } from '@hono/react-renderer'

export default reactRenderer(({ children, title, link }) => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {import.meta.env.PROD ? (
          <>
            <link href="/static/assets/style.css" rel="stylesheet" />
            <script type="module" src="/static/client.js"></script>
          </>
        ) : (
          <>
            <link href="/app/style.css" rel="stylesheet" />
            <script type="module" src="/app/client.ts"></script>
          </>
        )}
        <title>{title}</title>
        {link ? (
          link.map((link) => {
            return <link href={link.href} ref={link.rel} />
          })
        ) : (
          <></>
        )}
      </head>
      <body>
        <div className="bg-gray-200 h-screen">{children}</div>
      </body>
    </html>
  )
})
