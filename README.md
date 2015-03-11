# metalsmith-highline

[![Build Status](https://travis-ci.org/christophercliff/metalsmith-highline.png?branch=master)](https://travis-ci.org/christophercliff/metalsmith-highline)

A [Highline](https://github.com/christophercliff/highline) plugin for [Metalsmith](http://www.metalsmith.io/).

## Installation

```
npm install metalsmith-highline
```

## Usage

```js
var highline = require('metalsmith-highline')

Metalsmith(__dirname)
    .use(highline(options))
    .build()
```

### **`options`** `Object`

- **`highline`** `Object`

    The [Highline options](https://github.com/christophercliff/highline#options-object). Default `undefined`.

- **`pattern`** `String|Array<String>`

    A [pattern](https://github.com/sindresorhus/multimatch) to filter source files. Default `**/*.md`.

## Tests

```
$ npm test
```

## License

See [LICENSE](https://github.com/christophercliff/metalsmith-highline/blob/master/LICENSE.md).
