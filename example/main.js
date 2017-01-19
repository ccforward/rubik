// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import Rubik from '../src/index.js'
Vue.use(Rubik)

// require('../dist/rubik.min.css')

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})