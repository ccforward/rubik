import Grid from './Grid'
import Card from './Card'
import Slider from './Slider'
import Dropdown from './Dropdown'
import Tabs from './Tabs'
import Button from './Button'
import Icon from './Icon'


function bootstrap (...components) {
  const entries = {}

  components.forEach(component => {
    Object.keys(component).forEach(key => {
      entries[`R${key}`] = component[key]
    })
  })

  return entries
}

export default bootstrap(
  Grid,
  Card,
  Slider,
  Dropdown,
  Tabs,
  Button,
  Icon
)