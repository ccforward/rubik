import Vue from 'vue'

let id = 0

const createElm = function() {
  const elm = document.createElement('div')
  elm.id = 'app' + ++id
  document.body.appendChild(elm)

  return elm
}

/**
 * 销毁 vm
 */
exports.destroyVM = function(vm) {
  vm.$el &&
  vm.$el.parentNode &&
  vm.$el.parentNode.removeChild(vm.$el)
}

/**
 * 创建一个 Vue 的实例对象
 * Component - 组件配置，可直接传 template 
 * mounted   - 是否添加到 DOM 上
 */
exports.createVM = function(Component, mounted = false) {
  const elm = createElm()

  if (Object.prototype.toString.call(Component) === '[object String]') {
    Component = { template: Component }
  }
  return new Vue(Component).$mount(mounted === false ? null : elm)
}

/**
 * 创建一个测试组件实例
 * http://vuejs.org/v2/guide/unit-testing.html
 * Component
 * props
 * mounted
 */
exports.createComponent = function(Component, props = {}, mounted = false) {
  if (props === true || props === false) {
    mounted = props
    props = {}
  }
  const elm = createElm()
  const Ctor = Vue.extend(Component)
  return new Ctor({ props }).$mount(mounted === false ? null : elm)
}

// 触发事件: mouseenter, mouseleave, mouseover, keyup, change, click...
exports.fireEvent = function(elm, name, ...opts) {
  let eventName;

  if (/^mouse|click/.test(name)) {
    eventName = 'MouseEvents'
  } else if (/^key/.test(name)) {
    eventName = 'KeyboardEvent'
  } else {
    eventName = 'HTMLEvents'
  }

  const evt = document.createEvent(eventName)
  evt.initEvent(name, ...opts)

  elm.dispatchEvent
    ? elm.dispatchEvent(evt)
    : elm.fireEvent('on' + name, evt)

  return elm
}