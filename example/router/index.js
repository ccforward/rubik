import Vue from 'vue'
import Router from 'vue-router'
import About from '../views/About.vue'
import Color from '../views/Color.vue'
import Tag from '../views/Tag.vue'
import Grid from '../views/Grid.vue'
import Shadow from '../views/Shadow.vue'
import Table from '../views/Table.vue'
import Breadcrumb from '../views/Breadcrumb.vue'
import Card from '../views/Card.vue'
import Slider from '../views/Slider.vue'
import Dropdown from '../views/Dropdown.vue'
import Tab from '../views/Tab.vue'
import Modal from '../views/Modal.vue'
import Icon from '../views/Icon.vue'
import Button from '../views/Button.vue'
import Badge from '../views/Badge.vue'
import Tooltip from '../views/Tooltip.vue'
import Waves from '../views/Waves.vue'
import Lazy from '../views/Lazy.vue'

Vue.use(Router)

export default new Router({
  routes:[
    { name: 'home', path: '/', component: About},
    { name: 'about', path: '/about', component: About},
    { name: 'color', path: '/color', component: Color},
    { name: 'grid', path: '/grid', component: Grid},
    { name: 'shadow', path: '/shadow', component: Shadow},
    { name: 'table', path: '/table', component: Table},
    { name: 'breadcrumb', path: '/breadcrumb', component: Breadcrumb},
    { name: 'card', path: '/card', component: Card},
    { name: 'slider', path: '/slider', component: Slider},
    { name: 'dropdown', path: '/dropdown', component: Dropdown},
    { name: 'tab', path: '/tab', component: Tab},
    { name: 'modal', path: '/modal', component: Modal},
    { name: 'tag', path: '/tag', component: Tag},
    { name: 'icon', path: '/icon', component: Icon},
    { name: 'button', path: '/button', component: Button},
    { name: 'badge', path: '/badge', component: Badge},
    { name: 'tooltip', path: '/tooltip', component: Tooltip},
    { name: 'waves', path: '/waves', component: Waves},
    { name: 'img-lazy', path: '/img-lazy', component: Lazy}
  ]
})