import { createHandlers } from '../../factory'
import { findArticleById } from '../../db'
import { parseMarkdown } from '../../utils'
import dayjs from 'dayjs/esm'
import relativeTime from 'dayjs/esm/plugin/relativeTime'
dayjs.extend(relativeTime)

export default createHandlers(async (c) => {
  const id = c.req.param('id')
  const article = await findArticleById(c.env.DB, id)

  if (!article) {
    return c.notFound()
  }

  const html = parseMarkdown(article.content)

  return c.render(
    <div className="max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8 pt-12 pb-20 flex flex-col">
      <article className="rounded-xl border p-5 shadow-md bg-white">
        <header>
          <h1 className="font-extrabold text-5xl text-gray-800">{article.title}</h1>
          <time className="text-gray-500 text-sm" dateTime={article.created_at}>
            {dayjs(article.created_at).format('YYYY-MM-DD HH:mm:ss')}
          </time>
        </header>
        <section className="mt-6">
          <div id="contents" dangerouslySetInnerHTML={{ __html: html }} />
        </section>
      </article>
    </div>,
    {
      title: article.title,
      link: [
        {
          rel: 'stylesheet',
          href: '/static/assets/article.css'
        }
      ]
    }
  )
})
