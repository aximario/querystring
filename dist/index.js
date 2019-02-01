'use strict';

module.exports = {
    stringify: function stringify(queryobject) {
        var resArr = [];

        var _loop = function _loop(key) {
            var item = queryobject[key];
            if (Array.isArray(item)) {
                item.forEach(function (v) {
                    return resArr.push(key + '=' + encodeURIComponent(v));
                });
            } else {
                resArr.push(key + '=' + encodeURIComponent(item));
            }
        };

        for (var key in queryobject) {
            _loop(key);
        }
        return '?' + resArr.join('&');
    },
    parse: function parse(querystring) {
        var result = {};
        var query = querystring.slice(1).split('&');
        query.forEach(function (kv) {
            var kvPair = kv.split('=');
            var key = kvPair[0];
            var val = decodeURIComponent(kvPair[1]);
            if (result.hasOwnProperty(key)) {
                if (Array.isArray(result[key])) {
                    result[key].push(val);
                } else {
                    result[key] = [result[key]];
                    result[key].push(val);
                }
            } else {
                result[key] = val;
            }
        });
        return result;
    }
};