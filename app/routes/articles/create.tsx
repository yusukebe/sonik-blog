import { createHandlers } from '../../factory'
import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'
import { createArticle } from '../../db'
import ContentForm from '../../islands/ContentForm'

interface Data {
  error?: Record<string, string[] | undefined>
  title?: string
  content?: string
}

const headValue = {
  title: 'Create Post',
  link: [
    {
      rel: 'stylesheet',
      href: '/static/article.css'
    }
  ]
}

const Page = (data?: Data) => {
  return (
    <div className="min-h-screen bg-gray-200">
      <div className="max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8 pt-12 pb-20 flex flex-col">
        <h1 className="font-extrabold text-5xl text-gray-800">Create Post</h1>
        <form className="rounded-xl border p-5 shadow-md bg-white mt-8" method="POST">
          <div className="flex flex-col gap-y-2">
            <div>
              <label className="text-gray-500 text-sm" htmlFor="title">
                Title
              </label>
              <input
                id="title"
                className="w-full p-2 border border-gray-300 rounded-md"
                type="text"
                name="title"
                value={data?.title}
              />
              {data?.error?.title && <p className="text-red-500 text-sm">{data.error.title}</p>}
            </div>
            <div>
              <ContentForm initialValue={data?.content} />
              {data?.error?.content && <p className="text-red-500 text-sm">{data.error.content}</p>}
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md" type="submit">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export const GET = createHandlers((c) => {
  return c.render(<Page />, headValue)
})

const schema = z.object({
  title: z.string().min(1),
  content: z.string().min(1)
})

export const POST = createHandlers(
  zValidator('form', schema, (res, c) => {
    if (!res.success) {
      const { title, content } = res.data
      return c.render(
        Page({
          error: res.error.flatten().fieldErrors,
          title,
          content
        }),
        headValue
      )
    }
  }),
  async (c) => {
    const { title, content } = c.req.valid('form')
    await createArticle(c.env.DB, {
      title,
      content
    })
    return c.redirect('/', 303)
  }
)
