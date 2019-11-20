<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200"
      src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
	<h1>eXtended copy-webpack-plugin</h1>

[![npm][npm]][npm-url]
[![codecov][codecov]][codecov-url]
[![build][build]][build-url]
[![deps][deps]][deps-url]
[![node][node]][node-url]
[![size][size]][size-url]

</div>

> ⚠️ This plugin is still under development and should only be used for testing purposes.

## Getting started

Install xcopy-webpack-plugin using [`yarn`](https://yarnpkg.com/en/package/xcopy-webpack-plugin):

```bash
yarn add --dev xcopy-webpack-plugin
```

Or [`npm`](https://www.npmjs.com/package/xcopy-webpack-plugin):

```bash
npm install --save-dev xcopy-webpack-plugin
```

Let's get started by adding the plugin to your `webpack` config:

### webpack.config.js

```ts
const { CopyPlugin } = require('xcopy-webpack-plugin');

module.exports = {
  plugins: [
    new CopyPlugin([
      { from: 'source', to: 'dest' },
      { from: 'other', to: 'public' },
    ]),
  ],
};
```

## Options

The plugin's signature:

### webpack.config.js

```ts
module.exports = {
  plugins: [new CopyPlugin(patterns, options)],
};
```

### Pattern

TBD

### Options

TBD


## License

[MIT](./LICENSE)

## Other

> ℹ️ Last but not least a big thank you for the great work of the [copy-webpack-plugin][copy-webpack-plugin-url] to all contributors!

[npm]: https://img.shields.io/npm/v/xcopy-webpack-plugin.svg
[npm-url]: https://npmjs.com/package/xcopy-webpack-plugin
[node]: https://img.shields.io/node/v/xcopy-webpack-plugin.svg
[node-url]: https://nodejs.org
[deps]: https://david-dm.org/kpalatzky/xcopy-webpack-plugin.svg
[deps-url]: https://david-dm.org/kpalatzky/xcopy-webpack-plugin
[size]: https://packagephobia.now.sh/badge?p=xcopy-webpack-plugin
[size-url]: https://packagephobia.now.sh/result?p=xcopy-webpack-plugin
[codecov]: https://codecov.io/gh/kpalatzky/xcopy-webpack-plugin/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/kpalatzky/xcopy-webpack-plugin
[build]: https://github.com/kpalatzky/xcopy-webpack-plugin/workflows/build/badge.svg
[build-url]: https://github.com/kpalatzky/xcopy-webpack-plugin/actions?query=workflow%3Abuild
[copy-webpack-plugin-url]: https://github.com/webpack-contrib/copy-webpack-plugin
