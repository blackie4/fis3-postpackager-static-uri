fis3-postpackager-static-uri
=====================

[![npm](https://img.shields.io/npm/v/fis3-postpackager-static-uri.svg)](https://www.npmjs.com/package/fis3-postpackager-static-uri)
[![npm](https://img.shields.io/npm/dm/fis3-postpackager-static-uri.svg)](https://www.npmjs.com/package/fis3-postpackager-static-uri)

fis3 文件中获取站点必要静态文件uri资源地址列表

## 安装

```html
  npm install fis3-postpackager-static-uri --save-dev
```

## 使用方法

### 基础配置

```js
fis.match('::package', {
  postpackager: fis.plugin('static-uri')
})
```

### 文件中使用

```js
var _uris = '__staticUri__';
```



