# Sonik Blog

Creating Blog with [Sonik](https://github.com/yusukebe/sonik).

## Stack

* Sonik (Hono + Vite based framework)
* Preact
* Zod
* Tailwind CSS
* Cloudflare Pages
* Cloudflare D1
* [cf-bindings-proxy](https://github.com/james-elicx/cf-bindings-proxy)

## Demo

SSR with Island:

https://github.com/yusukebe/sonik-blog/assets/10682/47ae2757-3050-4b61-864f-158257d75806

HMR with Cloudflare Bindings:

https://github.com/yusukebe/sonik-blog/assets/10682/73fd1303-b26a-45b9-8ea8-bc8905ccfb0f


## Usage

Setup D1:

```
yarn wrangler d1 create sonik-blog --experimental-backend
yarn wrangler d1 execute sonik-blog --local --file=./blog.sql
```

Edit `wrangler.toml`:

```
cp wrangler.sample.toml wrangler.toml
code wrangler.toml
```

Run proxy for Cloudflare Bindings:

```
yarn proxy
```

Dev:

```
yarn dev
```

Build:

```
yarn build
```

Deploy:

```
yarn deploy
```

## Author

Yusuke Wada <https://github.com/yusukebe>

## License

MIT

Heavily inspired by [fresh-blog by azukiazusa1](https://github.com/azukiazusa1/fresh-blog)
