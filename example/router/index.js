import Vue from 'vue'
import Router from 'vue-router'
import About from '../views/About.vue'
import Color from '../views/Color.vue'
import Shadow from '../views/Shadow.vue'
import Table from '../views/Table.vue'
import Card from '../views/Card.vue'
import Slider from '../views/Slider.vue'
import Icon from '../views/Icon.vue'
import Button from '../views/Button.vue'

Vue.use(Router)

export default new Router({
  routes:[
    { name: 'home', path: '/', component: About},
    { name: 'about', path: '/about', component: About},
    { name: 'color', path: '/color', component: Color},
    { name: 'shadow', path: '/shadow', component: Shadow},
    { name: 'table', path: '/table', component: Table},
    { name: 'card', path: '/card', component: Card},
    { name: 'slider', path: '/slider', component: Slider},
    { name: 'icon', path: '/icon', component: Icon},
    { name: 'button', path: '/button', component: Button}
  ]
})