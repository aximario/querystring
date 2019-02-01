module.exports = {
    stringify(queryobject) {
        const resArr = []
        for (let key in queryobject) {
            const item = queryobject[key]
            if (Array.isArray(item)) {
                item.forEach((v) => resArr.push(`${key}=${encodeURIComponent(v)}`))
            } else {
                resArr.push(`${key}=${encodeURIComponent(item)}`)
            }
        }
        return `?${resArr.join('&')}`
    },
    parse(querystring) {
        const result = {}
        const query = querystring.slice(1).split('&')
        query.forEach((kv) => {
            const kvPair = kv.split('=')
            const key = kvPair[0]
            const val = decodeURIComponent(kvPair[1])
            if (result.hasOwnProperty(key)) {
                if (Array.isArray(result[key])) {
                    result[key].push(val)
                } else {
                    result[key] = [result[key]]
                    result[key].push(val)
                }
            } else {
                result[key] = val
            }
        })
        return result
    }
}
