import { createElement } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { createClient } from 'sonik/client'

createClient({
  hydrate: (elem, root) => hydrateRoot(root, elem),
  createElement
})
