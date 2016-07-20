/*
 * 将查询字符串转换为查询对象
 *
 * @param str [String] location.search字符串 如： ?a=1&b=2&c=3&c=4
 * @return obj [Object] 转换后的查询对象
 * {
 *     a: '1',
 *     b: '2',
 *     c: ['3', '4']
 * }
 */
module.exports = function (str) {
	var obj = {},

		// 查询数组 ['a=1', 'b=2', 'c=3', 'c=4']
		query = str.slice(1).split('&'),

		// 临时数组
		tmpArr = [],

		// 键值对 ['a', '1']
		kvPair,

		decodedValue;

	for (var i = 0, len = query.length; i < len; i++) {
		kvPair = query[i].split('=');
		decodedValue = decodeURIComponent(kvPair[1]);
		if (obj.hasOwnProperty(kvPair[0])) {
			if (Array.isArray(obj[kvPair[0]])) {
				obj[kvPair[0]].push(decodedValue);
			} else {
				tmpArr.push(obj[kvPair[0]], decodedValue);
				obj[kvPair[0]] = tmpArr;
				tmpArr = [];
			}
		} else {
			obj[kvPair[0]] = decodedValue;
		}
	}

	return obj;
}