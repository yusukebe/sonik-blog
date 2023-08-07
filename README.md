# Sonik Blog

Creating Blog with [Sonik](https://github.com/yusukebe/sonik).

## Usage

Setup D1:

```
wrangler d1 create sonik-blog --experimental-backend
yarn wrangler d1 execute sonik-blog --local --file=./blog.sql
```

Proxy for Cloudflare Bindings:

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

Yusuke Wada

## License

MIT

Heavily inspired by [fresh-blog by azukiazusa1](https://github.com/azukiazusa1/fresh-blog)