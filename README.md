# Sonik Blog

Creating Blog with [Sonik](https://github.com/yusukebe/sonik).

## Stack

* Sonik (Hono + Vite based framework)
* Preact
* Zod
* Tailwind CSS
* Cloudflare Pages
* Cloudflare D1

## Demo

SSR with Island:

https://github.com/yusukebe/sonik-blog/assets/10682/47ae2757-3050-4b61-864f-158257d75806

HMR with Cloudflare Bindings:

https://github.com/yusukebe/sonik-blog/assets/10682/73fd1303-b26a-45b9-8ea8-bc8905ccfb0f


## Usage

Setup your local database:

```txt
mkdir -p .mf/d1/DB/
sqlite3 .mf/d1/DB/db.sqlite < blog.sql
```

Setup D1:

```txt
yarn wrangler d1 create sonik-blog
yarn wrangler d1 execute sonik-blog --file=./blog.sql
```

Edit `wrangler.toml`:

```txt
cp wrangler.sample.toml wrangler.toml
code wrangler.toml
```

Dev:

```txt
yarn dev
```

Build:

```txt
yarn build
```

Deploy:

```txt
yarn deploy
```

## Author

Yusuke Wada <https://github.com/yusukebe>

## License

MIT

Heavily inspired by [fresh-blog by azukiazusa1](https://github.com/azukiazusa1/fresh-blog)
