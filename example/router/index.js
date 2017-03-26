import Vue from 'vue'
import Router from 'vue-router'
import About from '../views/About.vue'
import Color from '../views/Color.vue'
import Tag from '../views/Tag.vue'
import Grid from '../views/Grid.vue'
import Helper from '../views/Helper.vue'
import Shadow from '../views/Shadow.vue'
import Table from '../views/Table.vue'
import Alert from '../views/Alert.vue'
import Breadcrumb from '../views/Breadcrumb.vue'
import Card from '../views/Card.vue'
import Slider from '../views/Slider.vue'
import Dropdown from '../views/Dropdown.vue'
import Tab from '../views/Tab.vue'
import Modal from '../views/Modal.vue'
import Icon from '../views/Icon.vue'
import Button from '../views/Button.vue'
import Sidenav from '../views/Sidenav.vue'
import Pagination from '../views/Pagination.vue'
import Input from '../views/Input.vue'
import Radio from '../views/Radio.vue'
import Checkbox from '../views/Checkbox.vue'
import Select from '../views/Select.vue'
import File from '../views/File.vue'
import Badge from '../views/Badge.vue'
import Tooltip from '../views/Tooltip.vue'
import Toast from '../views/Toast.vue'
import Waves from '../views/Waves.vue'
import Lazy from '../views/Lazy.vue'
import Loader from '../views/Loader.vue'

Vue.use(Router)

const router = new Router({
  routes:[
    { name: 'home', path: '/', component: About},
    { name: 'about', path: '/about', component: About},
    { name: 'color', path: '/color', component: Color},
    { name: 'grid', path: '/grid', component: Grid},
    { name: 'helper', path: '/helper', component: Helper},
    { name: 'alert', path: '/alert', component: Alert},
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
    { name: 'sidenav', path: '/sidenav', component: Sidenav},
    { name: 'pagination', path: '/pagination', component: Pagination},
    { name: 'input', path: '/input', component: Input},
    { name: 'radio', path: '/radio', component: Radio},
    { name: 'checkbox', path: '/checkbox', component: Checkbox},
    { name: 'select', path: '/select', component: Select},
    { name: 'file', path: '/file', component: File},
    { name: 'badge', path: '/badge', component: Badge},
    { name: 'tooltip', path: '/tooltip', component: Tooltip},
    { name: 'toast', path: '/toast', component: Toast},
    { name: 'waves', path: '/waves', component: Waves},
    { name: 'img-lazy', path: '/img-lazy', component: Lazy},
    { name: 'loader', path: '/Loader', component: Loader}
  ]
})

router.beforeEach((to, from, next) => {
  let top = document.body.scrollTop
  if(top > 0){
    const timer = setInterval(()=>{
      scrollTo(0, top)
      top -= 100
      if(top <= 0){
        scrollTo(0, 0)
        clearInterval(timer)
      }
    }, 20)
  }
  next()
})

export default router