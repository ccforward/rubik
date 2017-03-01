// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import Rubik from '../src/index.js'
import Markup from './components/Markup'
import highlight from 'highlight.js/lib/highlight.js'
import highlightJS from 'highlight.js/lib/languages/javascript'
import highlightXML from 'highlight.js/lib/languages/xml'

highlight.registerLanguage('js', highlightJS)
highlight.registerLanguage('html', highlightXML)

require('offline-plugin/runtime').install()

Vue.use(Rubik)
Vue.component('Markup', Markup)

new Vue({
  el: '#app',
  name: 'Rubik',
  router,
  render: h => h(App)
})