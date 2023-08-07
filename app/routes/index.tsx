import type { Route } from '../types'
import { findAllArticles } from '../db'
import dayjs from 'dayjs/esm'
import relativeTime from 'dayjs/esm/plugin/relativeTime'
dayjs.extend(relativeTime)

const title = 'Blog'

export default {
  GET: async (c, { head }) => {
    head.title = title

    const articles = await findAllArticles(c.get('DB'))

    return (
      <div class="max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8 pt-12 pb-20 flex flex-col">
        <h1 class="font-extrabold text-5xl text-gray-800">{title}</h1>
        <section class="mt-8">
          <div class="flex justify-between items-center">
            <h2 class="text-4xl font-bold text-gray-800 py-4">Posts</h2>
            <a href="/articles/create" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
              Create Post
            </a>
          </div>
          <ul>
            {articles.map((article) => (
              <li class="bg-white p-6 rounded-lg shadow-lg mb-4" key={article.id}>
                <a href={`articles/${article.id}`}>
                  <h3 class="text-2xl font-bold mb-2 text-gray-800 hover:text-gray-600 hover:text-underline">
                    {article.title}
                  </h3>
                  <time class="text-gray-500 text-sm" dateTime={article.created_at}>
                    {dayjs(article.created_at).fromNow()}
                  </time>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    )
  }
} satisfies Route
