'use strict';

module.exports = function(url) {
  var args = Array.prototype.slice.call(arguments);
  var params;
  var query;
  var parts;
  var queryIndex;
  var index;
  var paramsIsArray;
  var key;

  if (typeof args[1] !== 'object') {
    params = args.slice(1);
    params.forEach(function(param, index) {
      if (queryIndex) return;
      if (typeof param === 'object') {
        queryIndex = index;
      }
    });

    if (queryIndex) {
      query = params[queryIndex];
      params = params.slice(0, queryIndex);
    }
  } else {
    if (url.indexOf('/:') !== -1) {
      params = args[1];
      query = args[2];
    } else {
      query = args[1];
    }
  }

  if (params) {
    parts = url.split('/');
    index = 0;
    paramsIsArray = Array.isArray(params);
    parts = parts.map(function(part) {
      if (part[0] === ':') {
        return encodeURIComponent(
          (paramsIsArray) ? params[index++] : params[part.slice(1)]
        );
      }

      return part;
    });

    url = parts.join('/');
  }

  if (query) {
    parts = [];
    for(key in query) {
      parts.push(key + '=' + encodeURIComponent(query[key]));
    }

    url += '?' + parts.join('&');
  }

  return url;
};
