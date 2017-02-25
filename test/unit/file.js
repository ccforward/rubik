// 初始化 rubik
// body 绑定 click 事件
import Vue from 'vue'
import { createVM } from './vm'
import Rubik from 'src/index.js'

Vue.use(Rubik)
const vm = createVM({}, true)
vm.$rubik.init()



// Polyfill fn.bind() for PhantomJS
/* eslint-disable no-extend-native */
Function.prototype.bind = require('function-bind')

// require all test files (files that ends with .spec.js)
const testsContext = require.context('./specs', true, /\.spec$/)
testsContext.keys().forEach(testsContext)

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
const srcContext = require.context('../../src', true, /index\.js/)

srcContext.keys().forEach(srcContext)