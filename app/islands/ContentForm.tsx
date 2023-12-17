import { useState } from 'react'
import { parseMarkdown } from '../utils'

interface Props {
  initialValue?: string
}

export default function ContentForm({ initialValue = '' }: Props) {
  const [value, setValue] = useState(initialValue)
  const [preview, setPreview] = useState(false)

  const handleChange = (e: any) => {
    const target = e.target
    setValue(target.value)
  }

  return (
    <div>
      <div className="flex justify-between">
        <label className="text-gray-500 text-sm" htmlFor="content">
          Content
        </label>
        <label className="text-gray-500 text-sm">
          Preview
          <input
            type="checkbox"
            id="preview"
            className="ml-2"
            checked={preview}
            onChange={() => setPreview((prev) => !prev)}
          />
        </label>
      </div>
      {preview ? (
        <>
          <div
            id="contents"
            dangerouslySetInnerHTML={{
              __html: parseMarkdown(value)
            }}
          />
          <input type="hidden" name="content" value={value} />
        </>
      ) : (
        <textarea
          id="content"
          rows={10}
          className="w-full p-2 border border-gray-300 rounded-md"
          name="content"
          value={value}
          onChange={handleChange}
        />
      )}
    </div>
  )
}
