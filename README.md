# 关于 Rubik UI

Rubik UI is a Material Design style ui library based Vue.js 2.0+ which can be used for PC and Mobile.

Rubik UI 是一个基于 Vue.js 2.0+ 的开源 UI 组件库，在交互和视觉设计上遵循 Material Design 规范，适用于 PC 端和 mobile 端。


## GitHub

[https://github.com/ccforward/rubik](https://github.com/ccforward/rubik)

## NPM

[![npm](https://img.shields.io/npm/v/i-rubik.svg)](https://www.npmjs.com/package/i-rubik)

## Support

Support Vue.js 2.0+

Not support Vue.js 1.x

## Demo

[https://ccforward.github.io/rubik/](https://ccforward.github.io/rubik/)

[http://rubik.ccforward.net/](http://rubik.ccforward.net/)

## Usage

#### npm install

``` shell
$ npm install i-rubik --save

$ yarn add i-rubik

```

#### Rubik init

``` js
import Vue from 'vue'
import Rubik from 'i-rubik'
Vue.use(Rubik)

export default {
  name: 'app',
  mounted(){
    this.$rubik.init()
  }
}
```

### iconfont

Material Design's iconfont has been writtened in css file

### import css

```html
<link href="./node_modules/i-rubik/dist/rubik.min.css" rel="stylesheet" type="text/css">
```
OR

```html
<link href="//unpkg.com/i-rubik/dist/rubik.min.css" rel="stylesheet" type="text/css">
```

## Releated Projects

Rubik UI 的部分组件和样式代码参考了以下项目 

Thanks to

*   [materializecss](http://materializecss.com/)
*   [material-ui](http://www.material-ui.com/)
*   [iview](https://www.iviewui.com/)
*   [vuetify](https://vuetifyjs.com/)