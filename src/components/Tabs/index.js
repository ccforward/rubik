import {
  createSimpleFunctional
} from '../../util/tools'

import Tab from './Tab.vue'
import TabsItem from './TabsItem.vue'

const Tabs = createSimpleFunctional('tabs')
const TabsNav = createSimpleFunctional('tabs-nav')
const TabsContent = createSimpleFunctional('tabs-content')
const TabsSlider = createSimpleFunctional('tabs-slider')

export default {
  Tab,
  Tabs,
  TabsItem,
  TabsContent,
  TabsNav,
  TabsSlider
}