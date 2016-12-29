import Vue from 'vue'
import Router from 'vue-router'
import About from '../views/About.vue'
import Card from '../views/Card.vue'
import Slider from '../views/Slider.vue'
import Icon from '../views/Icon.vue'
import Color from '../views/Color.vue'
import Button from '../views/Button.vue'

Vue.use(Router)

export default new Router({
  routes:[
    { name: 'home', path: '/', component: About},
    { name: 'color', path: '/color', component: Color},
    { name: 'about', path: '/about', component: About},
    { name: 'card', path: '/card', component: Card},
    { name: 'slider', path: '/slider', component: Slider},
    { name: 'icon', path: '/icon', component: Icon},
    { name: 'button', path: '/button', component: Button}
  ]
})