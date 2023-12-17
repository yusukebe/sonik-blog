import { createClient } from 'sonik/client'

createClient({
  hydrate: async (elem, root) => {
    const { hydrateRoot } = await import('react-dom/client')
    return hydrateRoot(root, elem)
  },
  createElement: async (type: any, props: any, ...children: any[]) => {
    const { createElement } = await import('react')
    return createElement(type, props, ...children)
  }
})
