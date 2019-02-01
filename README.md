# querystring

简单的处理 url query 的包，只支持 parse 和 stringify

## 安装

```sh
npm i @aximario/querystring -S
```
## 使用

```js
import querystring from '@aximario/querystring'

// {
//     a: 'a',
//     b: '中文',
//     c: ['c1', 'c2']
// }
querystring.parse('?a=a&b=%E4%B8%AD%E6%96%87&c=c1&c=c2')

// ?a=a&b=%E4%B8%AD%E6%96%87&c=c1&c=c2
querystring.stringify({
    a: 'a',
    b: '中文',
    c: ['c1', 'c2']
})
```
