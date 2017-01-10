require('./style/main.styl')
import Bridge from './util/bridge'
import Init from './util/init'
import Load from './util/load'
import Toast from './util/toast'
import Components from './components'
import Directives from './directives'

function Rubik(Vue) {
  Object.keys(Directives).forEach(key => {
    Vue.directive(key, Directives[key])
  })
  
  Object.keys(Components).forEach(key => {
    Vue.component(key, Components[key])
  })

  Vue.prototype.$rubik = {
    bridge: Bridge,

    load: Load,

    init: Init,

    toast: Toast
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Rubik);
}

module.exports = Rubik

