'use strict';

var assert = require('assert');
var makeUrl = require('./');

it('should works only params', function() {
  var url = makeUrl('/example/:foo/:bar', { foo: 'one', bar: 'two' });
  assert.equal(url, '/example/one/two');
});

it('should works params and query', function() {
  var url = makeUrl('/example/:foo/:bar', { foo: 'one', bar: 'two' },
    { time: 'stop' });
  assert.equal(url, '/example/one/two?time=stop');
});

it('should works params as arguments', function() {
  var url = makeUrl('/example/:foo/:bar', 'one', 'two');
  assert.equal(url, '/example/one/two');
});

it('should works only query', function() {
  var url = makeUrl('/example', { time: 'stop' });
  assert.equal(url, '/example?time=stop');
});

it('should works params as arguments and query', function() {
  var url = makeUrl('/example/:foo/:bar', 'one', 'two', { time: 'stop' });
  assert.equal(url, '/example/one/two?time=stop');
});
