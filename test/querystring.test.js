const querystring = require('../src')

test('正确 stringify', () => {
    expect(querystring.stringify({
        a: 'a',
        b: '中文',
        c: ['c1', 'c2']
    })).toBe('?a=a&b=%E4%B8%AD%E6%96%87&c=c1&c=c2')
});

test('正确 parse', () => {
    expect(querystring.parse('?a=a&b=%E4%B8%AD%E6%96%87&c=c1&c=c2')).toEqual({
        a: 'a',
        b: '中文',
        c: ['c1', 'c2']
    })
});
