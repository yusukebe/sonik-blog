import type { LayoutHandler } from 'sonik/preact'

const handler: LayoutHandler = ({ children, head }) => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {import.meta.env.PROD ? (
          <>
            <link href="/static/style.css" rel="stylesheet" />
            <script type="module" src="/static/client.js"></script>
          </>
        ) : (
          <>
            <link href="/app/style.css" rel="stylesheet" />
            <script type="module" src="/app/client.ts"></script>
          </>
        )}
        {head.createTags()}
      </head>
      <body>
        <div class="bg-gray-200 h-screen">{children}</div>
      </body>
    </html>
  )
}

export default handler
