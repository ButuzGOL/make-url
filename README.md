# make-url [![Build Status](https://travis-ci.org/ButuzGOL/make-url.svg?branch=master)](https://travis-ci.org/ButuzGOL/make-url)

## Install

```sh
$ npm install --save make-url
```

## Usage

```js
var makeUrl = require('makeUrl');

makeUrl('/example/:foo/:bar', { foo: 'one', bar: 'two' })
//=> /example/one/two

// with query
makeUrl('/example/:foo/:bar', { foo: 'one', bar: 'two' }, { time: 'stop' })
//=> /example/one/two?time=stop

// one param
makeUrl('/example/:one/:two', 'one', 'two')
//=> /example/1/2

// only query
makeUrl('/example', { time: 'stop' })
//=> /example?time=stop
```
