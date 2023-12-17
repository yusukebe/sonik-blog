import { createHandlers } from '../factory'
import { findAllArticles } from '../db'
import dayjs from 'dayjs/esm'
import relativeTime from 'dayjs/esm/plugin/relativeTime'
dayjs.extend(relativeTime)

const title = 'Blog'

export default createHandlers(async (c) => {
  const articles = await findAllArticles(c.env.DB)

  return c.render(
    <div className="max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8 pt-12 pb-20 flex flex-col">
      <h1 className="font-extrabold text-5xl text-gray-800">{title}</h1>
      <section className="mt-8">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-bold text-gray-800 py-4">Posts</h2>
          <a
            href="/articles/create"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Create Post
          </a>
        </div>
        <ul>
          {articles.map((article) => (
            <li className="bg-white p-6 rounded-lg shadow-lg mb-4" key={article.id}>
              <a href={`articles/${article.id}`}>
                <h3 className="text-2xl font-bold mb-2 text-gray-800 hover:text-gray-600 hover:text-underline">
                  {article.title}
                </h3>
                <time className="text-gray-500 text-sm" dateTime={article.created_at}>
                  {dayjs(article.created_at).fromNow()}
                </time>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>,
    {
      title
    }
  )
})
