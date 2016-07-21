# 阿希的querystring工具

> 前端新人历练任务：从零做起
> 我们的口号是`**零依赖，纯原生**`

写给自己用的用来处理`location.search`的小工具

## 用法

```
npm install ax-querystring --save
```

```javascript
var querystring = require('ax-querystring');

// 假设location.search = '?name=%E9%98%BF%E5%B8%8C&hobby=guitar&hobby=game&age=22'
querystring.parse(location.search); // { name: '阿希', hobby: [ 'guitar', 'game' ], age: '22' }

querystring.stringify({ name: '阿希', hobby: [ 'guitar', 'game' ], age: '22' }); //?name=%E9%98%BF%E5%B8%8C&hobby=guitar&hobby=game&age=22
```

## API

#### querystring.parse(string)

接收的参数： location.search

例如：?name=%E9%98%BF%E5%B8%8C&hobby=guitar&hobby=game&age=22

返回的结果： 格式化后的search对象

例如：{ name: '阿希', hobby: [ 'guitar', 'game' ], age: '22' }

#### querystring.stringify(object)

接收的参数： 对象

例如: { name: '阿希', hobby: [ 'guitar', 'game' ], age: '22' }

返回的结果： location.search

例如：?name=%E9%98%BF%E5%B8%8C&hobby=guitar&hobby=game&age=22