# make-url [![Build Status](https://travis-ci.org/ButuzGOL/make-url.svg?branch=master)](https://travis-ci.org/ButuzGOL/make-url)
Make url based on properties see examples

## Install

```sh
$ npm install --save make-url
```

## Usage

```js
var makeUrl = require('make-url');

// only params
makeUrl('/example/:foo/:bar', { foo: 'one', bar: 'two' })
//=> /example/one/two

// params and query
makeUrl('/example/:foo/:bar', { foo: 'one', bar: 'two' }, { time: 'stop' })
//=> /example/one/two?time=stop

// params as arguments
makeUrl('/example/:foo/:bar', 'one', 'two')
//=> /example/one/two

// only query
makeUrl('/example', { time: 'stop' })
//=> /example?time=stop

// params as arguments and query
makeUrl('/example/:foo/:bar', 'one', 'two', { time: 'stop' })
//=> /example/one/two?time=stop
```
