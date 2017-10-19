var unescape = require('./unescape');

module.exports = function (str, sep, eq, options) {
	var sep = sep || '&';
	var eq = eq || '=';
	var maxKeys = (options && typeof options.maxKeys === 'number' && options.maxKeys) || 1000;
	var decode = (options && typeof options.decodeURIComponent === 'function' && options.decodeURIComponent) || unescape;

	var result = {};
	var query = str.split(sep);
	if (maxKeys !== 0) {
		if (maxKeys > 0) {
			if (query.length > maxKeys) {
				query.length = maxKeys;
			}
		} else {
			if (query.length > 1000) {
				query.length = 1000;
			}
		}
	}

	query.forEach(function(kv) {
		var kvPair = kv.split(eq);
		var key = kvPair[0];
		var val = decode(kvPair[1] || '');
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