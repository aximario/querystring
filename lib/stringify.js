/*
 * 把查询对象转换成查询字符串
 *
 * @param obj [object] 查询对象，如：
 * {
 *     a: '1',
 *     b: '2',
 *     c: ['3', '4']
 * }
 * @return [string] 查询字符串 location.search ?a=1&b=2&c=3&c=4
 */
module.exports = function(obj) {

    var keys = Object.keys(obj),

		// 临时数组
		tmpArr = [],

		// 查询字符串的值
		item,

		encodedValue;

	// 将对象展开，转换为['a=1', 'b=2', 'c=3', 'c=4']
    for (var i = 0, len = keys.length; i < len; i++) {
		item = obj[keys[i]];
		if (Array.isArray(item)) {
			for (var j = 0, ItemLen = item.length; j < ItemLen; j++) {
				encodedValue = encodeURIComponent(item[j]);
				tmpArr.push(keys[i] + '=' + encodedValue);
			}
		} else {
			tmpArr.push(keys[i] + '=' + encodeURIComponent(item));
		}
    }

	return '?' + tmpArr.join('&');
}