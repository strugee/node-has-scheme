# node-has-scheme

[![Build Status](https://travis-ci.org/strugee/node-has-scheme.svg?branch=master)](https://travis-ci.org/strugee/node-has-scheme)
[![Coverage Status](https://coveralls.io/repos/github/strugee/node-has-scheme/badge.svg?branch=master)](https://coveralls.io/github/strugee/node-has-scheme?branch=master)
[![Greenkeeper badge](https://badges.greenkeeper.io/strugee/node-has-scheme.svg)](https://greenkeeper.io/)


## Install

```
npm install has-scheme
```

## Usage

```js
var hasScheme = require('has-scheme')
hasScheme('example.com'); // `false`
hasScheme('http://example.com'); // `true`
```

## Version support

Pretty much any Node under the sun, but the tests only run on 4+.

## Author

AJ Jordan <alex@strugee.net>

## License

MIT
