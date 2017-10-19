var escape = require('./escape');

function parseVal(val) {
	if (typeof val === 'object' || typeof val === 'function') {
		val = '';
	}
	return val;
}

module.exports = function (obj, sep, eq, options) {
	var sep = sep || '&';
	var eq = eq || '=';
	var encode = (options && options.encodeURIComponent) || escape;

	var keys = Object.keys(obj);
	var resArr = [];

	// 将对象展开，转换为['a=1', 'b=2', 'c=3', 'c=4']
	keys.forEach(function(key) {
		var item = obj[key];

		// DO NOT parseVal(val) here
		if (Array.isArray(item)) {
			item.forEach(function(val) {
				resArr.push(key + '=' + encode(parseVal(val)));
			})
		} else {
			resArr.push(key + '=' + encode(parseVal(item)));
		}
	});

	return resArr.join('&');
}