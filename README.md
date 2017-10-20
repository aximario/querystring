# querystring

Node.js LTS querystring module for browsers

## Install

npm:

```bash
npm install ax-querystring -S
```

scripts:

```html
<script src="http://oy481nv41.bkt.clouddn.com/querystring.min.js"></script>
```

## querystring.parse(str[, sep[, eq[, options]]])#

* `str` &lt;string> The URL query string to parse
* `sep` &lt;string> The substring used to delimit key and value pairs in the query string. Defaults to '`&`'.
* `eq` &lt;string>. The substring used to delimit keys and values in the query string. Defaults to '`=`'.
* `options` &lt;Object>
  * `decodeURIComponent` &lt;Function> The function to use when decoding percent-encoded characters in the query string. Defaults to `querystring.unescape()`.
  * `maxKeys` &lt;number> Specifies the maximum number of keys to parse. Defaults to `1000`. Specify 0 to remove key counting limitations.

The `querystring.parse()` method parses a URL query string (`str`) into a collection of key and value pairs.

For example, the query string '`foo=bar&abc=xyz&abc=123`' is parsed into:
```js
{
  foo: 'bar',
  abc: ['xyz', '123']
}
```

**Note**: The object returned by the `querystring.parse()` method does not prototypically extend from the JavaScript `Object`. This means that the typical `Object` methods such as `obj.toString()`, `obj.hasOwnProperty()`, and others are not defined and will not work.

By default, percent-encoded characters within the query string will be assumed to use UTF-8 encoding. If an alternative character encoding is used, then an alternative `decodeURIComponent` option will need to be specified as illustrated in the following example:

```js
// Assuming gbkDecodeURIComponent function already exists...

querystring.parse('w=%D6%D0%CE%C4&foo=bar', null, null,
                  { decodeURIComponent: gbkDecodeURIComponent });
```
           
## querystring.stringify(obj[, sep[, eq[, options]]])

* `obj` &lt;Object> The object to serialize into a URL query string
* `sep` &lt;string> The substring used to delimit key and value pairs in the query string. Defaults to '`&`'.
* `eq` &lt;string>. The substring used to delimit keys and values in the query string. Defaults to '`=`'.
* `options`
  * `encodeURIComponent` &lt;Function> The function to use when converting URL-unsafe characters to percent-encoding in the query string. Defaults to `querystring.escape()`.

The `querystring.stringify()` method produces a URL query string from a given obj by iterating through the object's "own properties".

It serializes the following types of values passed in `obj`: &lt;string> | &lt;number> | &lt;boolean> | &lt;string[]> | &lt;number[]> | &lt;boolean[]> Any other input values will be coerced to empty strings.

For example:

```js
querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' });
// returns 'foo=bar&baz=qux&baz=quux&corge='

querystring.stringify({ foo: 'bar', baz: 'qux' }, ';', ':');
// returns 'foo:bar;baz:qux'
```

By default, characters requiring percent-encoding within the query string will be encoded as UTF-8. If an alternative encoding is required, then an alternative `encodeURIComponent` option will need to be specified as illustrated in the following example:

```js
// Assuming gbkEncodeURIComponent function already exists,

querystring.stringify({ w: '中文', foo: 'bar' }, null, null,
                      { encodeURIComponent: gbkEncodeURIComponent });
```

## License

MIT License

Copyright (c) 2016-present, aximario.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.